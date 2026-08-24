from __future__ import annotations

import json
import os
import subprocess
import sys
from pathlib import Path

from snapshot_fixture import create_snapshot

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
    profile: str = "light",
) -> subprocess.CompletedProcess[str]:
    environment = os.environ.copy()
    environment["PYTHONPATH"] = str(ROOT / "src")
    return subprocess.run(
        [
            sys.executable,
            "-m",
            "wot_gui_assets_publisher",
            "project",
            "--snapshot",
            str(snapshot),
            "--output",
            str(output),
            "--target",
            target,
            "--branch",
            f"test/light-{target}",
            "--expected-snapshot-id",
            snapshot_id,
            "--expected-descriptor-sha256",
            descriptor_sha256,
            "--expected-profile",
            profile,
        ],
        cwd=ROOT,
        env=environment,
        text=True,
        capture_output=True,
        check=False,
    )


def test_wargaming_projection_preserves_gui_root_and_keeps_all_locales(
    tmp_path: Path,
) -> None:
    snapshot = tmp_path / "snapshot"
    snapshot_id, descriptor_sha256 = create_snapshot(
        snapshot,
        target="wot-eu",
        publisher="wargaming",
        build_profile="light",
        release_name="2.3.1.5400",
        base_files={
            "version.xml": VERSION_XML,
            "res/gui/config.xml": b"<excluded/>\n",
            "res/gui/controller.PY": b"EXCLUDED = True\n",
            "res/gui/flash/App.swf": b"base-swf",
            "res/gui/gameface/app.js": b"console.log('base')\n",
            "res/gui/maps/icon.DDS": b"base-dds",
            "res/scripts/client/outside.bin": b"outside",
        },
        locale_files={
            "EN": {
                "res/gui/config.xml": b"<excluded-english/>\n",
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

    assert result.returncode == 0, result.stderr
    assert (output / ".version_name").read_text() == "2.3.1.5400\n"
    assert (output / "gui/flash/App.swf").read_bytes() == b"english-swf"
    assert (output / "gui/gameface/app.js").is_file()
    assert (output / "gui/maps/icon.DDS").read_bytes() == b"base-dds"
    assert not (output / "res").exists()
    assert not (output / "gui/config.xml").exists()
    assert not (output / "gui/controller.PY").exists()
    assert not (output / "scripts").exists()
    assert (output / "locales/EN/gui/flash/App.swf").read_bytes() == b"english-swf"
    assert (output / "locales/EN/gui/maps/english.png").is_file()
    assert not (output / "locales/EN/gui/config.xml").exists()
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
    assert "Ветка: `test/light-wot-eu`" in readme
    assert "Версия: `2.3.1.5400`" in readme

    publication_text = (output / ".publication.json").read_text()
    assert publication_text.startswith('{\n  "branch": "test/light-wot-eu",\n')
    assert publication_text.endswith("\n")
    publication = json.loads(publication_text)
    assert publication["snapshot_id"] == snapshot_id
    assert publication["descriptor_sha256"] == descriptor_sha256
    assert publication["default_locale"] == "EN"
    assert publication["commit_subject"] == "2.3.1.0 #903"
    assert publication["counts"] == {
        "assets": 4,
        "locales": {"EN": 2, "RU": 2},
    }


def test_lesta_projection_uses_base_and_ignores_locale_layers(tmp_path: Path) -> None:
    snapshot = tmp_path / "snapshot"
    snapshot_id, descriptor_sha256 = create_snapshot(
        snapshot,
        target="mt-ru",
        publisher="lesta",
        build_profile="light",
        release_name="1.37.0.4001",
        base_files={
            "version.xml": b"""<version.xml>
  <version> v.1.37.0.0 #4001 </version>
</version.xml>
""",
            "res/gui/flash/App.swf": b"lesta-base",
            "res/gui/settings.xml": b"<excluded/>\n",
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

    assert result.returncode == 0, result.stderr
    assert (output / "gui/flash/App.swf").read_bytes() == b"lesta-base"
    assert not (output / "gui/settings.xml").exists()
    assert not (output / "locales").exists()
    publication = json.loads((output / ".publication.json").read_text())
    assert publication["publisher"] == "lesta"
    assert publication["commit_subject"] == "1.37.0.0 #4001"
    assert "default_locale" not in publication


def test_projection_rejects_profile_mismatch_before_creating_output(tmp_path: Path) -> None:
    snapshot = tmp_path / "snapshot"
    snapshot_id, descriptor_sha256 = create_snapshot(
        snapshot,
        target="wot-eu",
        publisher="wargaming",
        build_profile="full",
        release_name="2.3.1.5400",
        base_files={
            "version.xml": VERSION_XML,
            "res/gui/flash/App.swf": b"base",
        },
        locale_files={"EN": {"res/gui/locale.xml": b"<excluded/>\n"}},
        actionscript_files={},
        stub_files={},
    )
    output = tmp_path / "output"

    result = _project(
        snapshot,
        output,
        target="wot-eu",
        snapshot_id=snapshot_id,
        descriptor_sha256=descriptor_sha256,
        profile="light",
    )

    assert result.returncode == 1
    assert "build profile differs" in result.stderr
    assert not output.exists()


def test_projection_rejects_snapshot_without_publishable_base_gui_assets(
    tmp_path: Path,
) -> None:
    snapshot = tmp_path / "snapshot"
    snapshot_id, descriptor_sha256 = create_snapshot(
        snapshot,
        target="wot-eu",
        publisher="wargaming",
        build_profile="light",
        release_name="2.3.1.5400",
        base_files={
            "version.xml": VERSION_XML,
            "res/gui/config.xml": b"<excluded/>\n",
            "res/gui/controller.py": b"EXCLUDED = True\n",
        },
        locale_files={"EN": {"res/gui/locale.xml": b"<excluded/>\n"}},
        actionscript_files={},
        stub_files={},
    )
    output = tmp_path / "output"

    result = _project(
        snapshot,
        output,
        target="wot-eu",
        snapshot_id=snapshot_id,
        descriptor_sha256=descriptor_sha256,
    )

    assert result.returncode == 1
    assert "no base res/gui assets after exclusions" in result.stderr
    assert not output.exists()
