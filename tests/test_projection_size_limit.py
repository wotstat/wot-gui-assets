from __future__ import annotations

from pathlib import Path

import pytest
from snapshot_fixture import create_snapshot

import wot_gui_assets_publisher.publication as publication_module

ROOT = Path(__file__).parents[1]
VERSION_XML = b"""<version.xml>
  <version> v.1.44.0.0 #8017 </version>
</version.xml>
"""


def test_projection_excludes_assets_larger_than_github_limit(
    tmp_path: Path,
    monkeypatch: pytest.MonkeyPatch,
) -> None:
    monkeypatch.setattr(publication_module, "GITHUB_MAX_BLOB_BYTES", 10)
    snapshot = tmp_path / "snapshot"
    snapshot_id, descriptor_sha256 = create_snapshot(
        snapshot,
        target="mt-ru",
        publisher="lesta",
        release_name="1.44.0.8017",
        base_files={
            "version.xml": VERSION_XML,
            "res/gui/flash/videos/at-limit.usm": b"x" * 10,
            "res/gui/flash/videos/too-large.usm": b"x" * 11,
            "res/gui/maps/icon.png": b"icon",
        },
    )
    output = tmp_path / "output"

    result = publication_module._project_snapshot(
        snapshot,
        output,
        target="mt-ru",
        expected_snapshot_id=snapshot_id,
        expected_descriptor_sha256=descriptor_sha256,
        config_path=ROOT / "config/targets.json",
    )

    assert (output / "gui/flash/videos/at-limit.usm").is_file()
    assert not (output / "gui/flash/videos/too-large.usm").exists()
    assert result["counts"] == {"assets": 2, "locales": {}}
    readme = (output / "README.md").read_text()
    assert "## Исключённые файлы" in readme
    assert "`gui/flash/videos/too-large.usm`" in readme


def test_readme_lists_excluded_assets_by_size() -> None:
    readme = publication_module._data_readme(
        target="mt-ru",
        branch="mt-ru",
        release_name="1.44.0.8017",
        commit_subject="1.44.0.0 #8017",
        publisher="lesta",
        snapshot_id="sha256:" + "a" * 64,
        excluded_assets=(
            ("gui/flash/videos/smaller.usm", 104_857_601),
            ("gui/flash/videos/_tutorialinitial.usm", 115_592_672),
        ),
    )

    section = readme.split("## Исключённые файлы\n", maxsplit=1)[1]
    assert section.index("_tutorialinitial.usm") < section.index("smaller.usm")
    assert "- `gui/flash/videos/_tutorialinitial.usm` — **110,24 MiB**" in section
    assert "- `gui/flash/videos/smaller.usm` — **100,00 MiB**" in section


def test_oversized_default_locale_overlay_does_not_fall_back_to_base(
    tmp_path: Path,
    monkeypatch: pytest.MonkeyPatch,
) -> None:
    monkeypatch.setattr(publication_module, "GITHUB_MAX_BLOB_BYTES", 10)
    snapshot = tmp_path / "snapshot"
    snapshot_id, descriptor_sha256 = create_snapshot(
        snapshot,
        target="wot-eu",
        publisher="wargaming",
        release_name="1.44.0.8017",
        base_files={
            "version.xml": VERSION_XML,
            "res/gui/flash/videos/overlay.usm": b"base",
            "res/gui/maps/icon.png": b"icon",
        },
        locale_files={"EN": {"res/gui/flash/videos/overlay.usm": b"x" * 11}},
    )
    output = tmp_path / "output"

    publication_module._project_snapshot(
        snapshot,
        output,
        target="wot-eu",
        expected_snapshot_id=snapshot_id,
        expected_descriptor_sha256=descriptor_sha256,
        config_path=ROOT / "config/targets.json",
    )

    assert not (output / "gui/flash/videos/overlay.usm").exists()
    assert not (output / "locales/EN/gui/flash/videos/overlay.usm").exists()
    readme = (output / "README.md").read_text()
    assert "`gui/flash/videos/overlay.usm`" in readme
    assert "`locales/EN/gui/flash/videos/overlay.usm`" in readme


def test_readme_omits_excluded_files_section_when_everything_was_published() -> None:
    readme = publication_module._data_readme(
        target="mt-ru",
        branch="mt-ru",
        release_name="1.44.0.8017",
        commit_subject="1.44.0.0 #8017",
        publisher="lesta",
        snapshot_id="sha256:" + "a" * 64,
        excluded_assets=(),
    )

    assert "## Исключённые файлы" not in readme
