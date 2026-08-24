from __future__ import annotations

import json
from pathlib import Path

import pytest
from snapshot_fixture import create_snapshot

import wot_gui_assets_publisher.publication as publication_module

ROOT = Path(__file__).parents[1]
VERSION_XML = b"""<version.xml>
  <version> v.2.3.1.0 #903 </version>
</version.xml>
"""


def _project(
    snapshot: Path,
    output: Path,
    *,
    target: str,
    snapshot_id: str,
    descriptor_sha256: str,
) -> dict[str, object]:
    return publication_module._project_snapshot(
        snapshot,
        output,
        target=target,
        expected_snapshot_id=snapshot_id,
        expected_descriptor_sha256=descriptor_sha256,
        config_path=ROOT / "config/targets.json",
    )


def test_wargaming_projection_preserves_gui_root_and_keeps_all_locales(
    tmp_path: Path,
) -> None:
    snapshot = tmp_path / "snapshot"
    snapshot_id, descriptor_sha256 = create_snapshot(
        snapshot,
        target="wot-eu",
        publisher="wargaming",
        release_name="2.3.1.5400",
        base_files={
            "version.xml": VERSION_XML,
            "res/gui/config.xml": b"<base/>\n",
            "res/gui/controller.PY": b"EXCLUDED = True\n",
            "res/gui/flash/App.swf": b"base-swf",
            "res/gui/gameface/app.js": b"console.log('base')\n",
            "res/gui/maps/icon.DDS": b"base-dds",
            "res/scripts/client/outside.bin": b"outside",
        },
        locale_files={
            "EN": {
                "res/gui/config.xml": b"<english/>\n",
                "res/gui/flash/App.swf": b"english-swf",
                "res/gui/maps/english.png": b"english-png",
            },
            "RU": {
                "res/gui/flash/App.swf": b"russian-swf",
                "res/gui/maps/russian.png": b"russian-png",
            },
        },
        actionscript_files={"base_app/scripts/App.as": b"package {}\n"},
        stub_files={"BigWorld.pyi": b"class Player: ...\n"},
    )
    output = tmp_path / "output"

    result = _project(
        snapshot,
        output,
        target="wot-eu",
        snapshot_id=snapshot_id,
        descriptor_sha256=descriptor_sha256,
    )

    assert result["branch"] == "wot-eu"
    assert (output / ".version_name").read_text() == "2.3.1.5400\n"
    assert (output / "gui/flash/App.swf").read_bytes() == b"english-swf"
    assert (output / "gui/gameface/app.js").is_file()
    assert (output / "gui/maps/icon.DDS").read_bytes() == b"base-dds"
    assert not (output / "res").exists()
    assert (output / "gui/config.xml").read_bytes() == b"<english/>\n"
    assert not (output / "gui/controller.PY").exists()
    assert not (output / "scripts").exists()
    assert (output / "locales/EN/gui/flash/App.swf").read_bytes() == b"english-swf"
    assert (output / "locales/EN/gui/maps/english.png").is_file()
    assert (output / "locales/EN/gui/config.xml").read_bytes() == b"<english/>\n"
    assert (output / "locales/RU/gui/flash/App.swf").read_bytes() == b"russian-swf"
    assert (output / "locales/RU/gui/maps/russian.png").is_file()

    readme = (output / "README.md").read_text()
    assert readme.startswith("# wot-gui-assets\n")
    for branch in (
        "wot-eu",
        "wot-na",
        "wot-asia",
        "wot-cn",
        "wot-common-test",
        "mt-ru",
        "mt-public-test",
    ):
        assert f"https://github.com/wotstat/wot-gui-assets/tree/{branch}" in readme
    assert "## Структура data-ветки" in readme
    assert "Target: `wot-eu`" in readme
    assert "Ветка: `wot-eu`" in readme
    assert "Версия: `2.3.1.5400`" in readme

    publication_text = (output / ".publication.json").read_text()
    assert publication_text.startswith('{\n  "branch": "wot-eu",\n')
    assert publication_text.endswith("\n")
    publication = json.loads(publication_text)
    assert publication["snapshot_id"] == snapshot_id
    assert publication["descriptor_sha256"] == descriptor_sha256
    assert publication["default_locale"] == "EN"
    assert publication["commit_subject"] == "2.3.1.0 #903"
    assert publication["counts"] == {
        "assets": 5,
        "locales": {"EN": 3, "RU": 2},
    }


def test_lesta_projection_uses_base_and_ignores_locale_layers(tmp_path: Path) -> None:
    snapshot = tmp_path / "snapshot"
    snapshot_id, descriptor_sha256 = create_snapshot(
        snapshot,
        target="mt-ru",
        publisher="lesta",
        release_name="1.37.0.4001",
        base_files={
            "version.xml": b"""<version.xml>
  <version> v.1.37.0.0 #4001 </version>
</version.xml>
""",
            "res/gui/flash/App.swf": b"lesta-base",
            "res/gui/settings.xml": b"<settings/>\n",
        },
        locale_files={"RU": {"res/gui/flash/App.swf": b"must-not-overlay"}},
        actionscript_files={},
        stub_files={},
    )
    output = tmp_path / "output"

    result = _project(
        snapshot,
        output,
        target="mt-ru",
        snapshot_id=snapshot_id,
        descriptor_sha256=descriptor_sha256,
    )

    assert result["branch"] == "mt-ru"
    assert (output / "gui/flash/App.swf").read_bytes() == b"lesta-base"
    assert (output / "gui/settings.xml").read_bytes() == b"<settings/>\n"
    assert not (output / "locales").exists()
    publication = json.loads((output / ".publication.json").read_text())
    assert publication["publisher"] == "lesta"
    assert publication["commit_subject"] == "1.37.0.0 #4001"
    assert "default_locale" not in publication


def test_projection_rejects_snapshot_without_publishable_base_gui_assets(
    tmp_path: Path,
) -> None:
    snapshot = tmp_path / "snapshot"
    snapshot_id, descriptor_sha256 = create_snapshot(
        snapshot,
        target="wot-eu",
        publisher="wargaming",
        release_name="2.3.1.5400",
        base_files={
            "version.xml": VERSION_XML,
            "res/gui/controller.py": b"EXCLUDED = True\n",
        },
        locale_files={"EN": {"res/gui/locale.py": b"EXCLUDED = True\n"}},
        actionscript_files={},
        stub_files={},
    )
    output = tmp_path / "output"

    with pytest.raises(
        publication_module.PublicationError,
        match="no base res/gui assets after exclusions",
    ):
        _project(
            snapshot,
            output,
            target="wot-eu",
            snapshot_id=snapshot_id,
            descriptor_sha256=descriptor_sha256,
        )
    assert not output.exists()
