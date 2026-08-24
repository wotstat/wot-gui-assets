from __future__ import annotations

import json
import os
import subprocess
import sys
from pathlib import Path

from snapshot_fixture import create_snapshot

from wot_gui_assets_publisher.publication import render_bootstrap_readme

ROOT = Path(__file__).parents[1]
VERSION_XML = b"""<version.xml>
  <version> v.2.3.1.0 #903 </version>
</version.xml>
"""


def _git(*arguments: str, cwd: Path | None = None) -> str:
    return subprocess.run(
        ["git", *arguments],
        cwd=cwd,
        text=True,
        capture_output=True,
        check=True,
    ).stdout.strip()


def _service_repository(tmp_path: Path) -> tuple[Path, Path]:
    remote = tmp_path / "remote.git"
    repository = tmp_path / "service"
    _git("init", "--bare", "--initial-branch=main", str(remote))
    _git("--git-dir", str(remote), "config", "uploadpack.allowFilter", "true")
    _git("--git-dir", str(remote), "config", "uploadpack.allowAnySHA1InWant", "true")
    _git("init", "--initial-branch=main", str(repository))
    _git("config", "user.name", "fixture", cwd=repository)
    _git("config", "user.email", "fixture@example.invalid", cwd=repository)
    (repository / "README.md").write_text("service branch\n")
    _git("add", "README.md", cwd=repository)
    _git("commit", "-m", "service", cwd=repository)
    _git("remote", "add", "origin", str(remote), cwd=repository)
    _git("push", "-u", "origin", "main", cwd=repository)
    return repository, remote


def _publish(
    repository: Path,
    snapshot: Path,
    *,
    snapshot_id: str,
    descriptor_sha256: str,
    branch: str = "test/light-wot-eu",
    profile: str = "light",
) -> subprocess.CompletedProcess[str]:
    environment = os.environ.copy()
    environment["PYTHONPATH"] = str(ROOT / "src")
    return subprocess.run(
        [
            sys.executable,
            "-m",
            "wot_gui_assets_publisher",
            "publish",
            "--repository",
            str(repository),
            "--snapshot",
            str(snapshot),
            "--target",
            "wot-eu",
            "--branch",
            branch,
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


def _snapshot(
    root: Path,
    *,
    profile: str,
    created_at: str = "2026-08-24T00:00:00Z",
    gui_payload: bytes = b"english-swf",
    tool_version: str = "1",
) -> tuple[str, str]:
    return create_snapshot(
        root,
        target="wot-eu",
        publisher="wargaming",
        build_profile=profile,
        release_name="2.3.1.5400",
        base_files={
            "version.xml": VERSION_XML,
            "res/gui/flash/App.swf": b"base-swf",
            "res/gui/settings.xml": b"<excluded/>\n",
        },
        locale_files={"EN": {"res/gui/flash/App.swf": gui_payload}},
        actionscript_files={"base_app/scripts/App.as": b"package {}\n"},
        stub_files={"BigWorld.pyi": b"class Player: ...\n"},
        created_at=created_at,
        tool_version=tool_version,
    )


def test_publish_creates_orphan_data_branch_and_is_idempotent(tmp_path: Path) -> None:
    repository, remote = _service_repository(tmp_path)
    snapshot = tmp_path / "snapshot"
    snapshot_id, descriptor_sha256 = _snapshot(snapshot, profile="light")

    first = _publish(
        repository,
        snapshot,
        snapshot_id=snapshot_id,
        descriptor_sha256=descriptor_sha256,
    )

    assert first.returncode == 0, first.stderr
    first_result = json.loads(first.stdout)
    assert first_result["publication_state"] == "published"
    assert _git(
        "--git-dir",
        str(remote),
        "rev-list",
        "--count",
        "refs/heads/test/light-wot-eu",
    ) == "1"
    assert _git(
        "--git-dir",
        str(remote),
        "log",
        "-1",
        "--format=%s",
        "refs/heads/test/light-wot-eu",
    ) == "2.3.1.0 #903"

    data_checkout = tmp_path / "data-checkout"
    _git("clone", "--branch", "test/light-wot-eu", str(remote), str(data_checkout))
    assert (data_checkout / "README.md").is_file()
    assert "https://github.com/wotstat/wot-gui-assets/tree/wot-na" in (
        data_checkout / "README.md"
    ).read_text()
    assert not (data_checkout / "pyproject.toml").exists()
    assert (data_checkout / "gui/flash/App.swf").read_bytes() == b"english-swf"
    assert not (data_checkout / "res").exists()
    assert not (data_checkout / "gui/settings.xml").exists()

    second = _publish(
        repository,
        snapshot,
        snapshot_id=snapshot_id,
        descriptor_sha256=descriptor_sha256,
    )

    assert second.returncode == 0, second.stderr
    assert json.loads(second.stdout)["publication_state"] == "unchanged"
    assert _git(
        "--git-dir",
        str(remote),
        "rev-list",
        "--count",
        "refs/heads/test/light-wot-eu",
    ) == "1"


def test_rebuilt_same_version_with_identical_data_is_unchanged(tmp_path: Path) -> None:
    repository, remote = _service_repository(tmp_path)
    first_snapshot = tmp_path / "first-snapshot"
    first_id, first_descriptor = _snapshot(
        first_snapshot,
        profile="light",
        created_at="2026-08-24T00:00:00Z",
    )
    second_snapshot = tmp_path / "second-snapshot"
    second_id, second_descriptor = _snapshot(
        second_snapshot,
        profile="light",
        created_at="2026-08-24T01:00:00Z",
        tool_version="2",
    )
    assert second_id != first_id
    assert second_descriptor != first_descriptor

    first = _publish(
        repository,
        first_snapshot,
        snapshot_id=first_id,
        descriptor_sha256=first_descriptor,
    )
    second = _publish(
        repository,
        second_snapshot,
        snapshot_id=second_id,
        descriptor_sha256=second_descriptor,
    )

    assert first.returncode == 0, first.stderr
    assert second.returncode == 0, second.stderr
    assert json.loads(second.stdout)["publication_state"] == "unchanged"
    assert _git(
        "--git-dir",
        str(remote),
        "rev-list",
        "--count",
        "refs/heads/test/light-wot-eu",
    ) == "1"
    stored = json.loads(
        _git(
            "--git-dir",
            str(remote),
            "show",
            "refs/heads/test/light-wot-eu:.publication.json",
        )
    )
    assert stored["descriptor_sha256"] == first_descriptor


def test_same_version_with_changed_data_creates_another_commit(tmp_path: Path) -> None:
    repository, remote = _service_repository(tmp_path)
    first_snapshot = tmp_path / "first-snapshot"
    first_id, first_descriptor = _snapshot(
        first_snapshot,
        profile="light",
        gui_payload=b"first-swf",
    )
    second_snapshot = tmp_path / "second-snapshot"
    second_id, second_descriptor = _snapshot(
        second_snapshot,
        profile="light",
        created_at="2026-08-24T01:00:00Z",
        gui_payload=b"updated-swf",
        tool_version="2",
    )
    assert second_id != first_id

    first = _publish(
        repository,
        first_snapshot,
        snapshot_id=first_id,
        descriptor_sha256=first_descriptor,
    )
    second = _publish(
        repository,
        second_snapshot,
        snapshot_id=second_id,
        descriptor_sha256=second_descriptor,
    )

    assert first.returncode == 0, first.stderr
    assert second.returncode == 0, second.stderr
    assert json.loads(second.stdout)["publication_state"] == "published"
    assert _git(
        "--git-dir",
        str(remote),
        "rev-list",
        "--count",
        "refs/heads/test/light-wot-eu",
    ) == "2"
    assert _git(
        "--git-dir",
        str(remote),
        "log",
        "--format=%s",
        "refs/heads/test/light-wot-eu",
    ).splitlines() == ["2.3.1.0 #903", "2.3.1.0 #903"]
    assert _git(
        "--git-dir",
        str(remote),
        "show",
        "refs/heads/test/light-wot-eu:gui/flash/App.swf",
    ) == "updated-swf"
    stored = json.loads(
        _git(
            "--git-dir",
            str(remote),
            "show",
            "refs/heads/test/light-wot-eu:.publication.json",
        )
    )
    assert stored["descriptor_sha256"] == second_descriptor


def test_publish_continues_a_valid_production_init_branch(tmp_path: Path) -> None:
    repository, remote = _service_repository(tmp_path)
    _git("switch", "--orphan", "wot-eu", cwd=repository)
    (repository / "README.md").write_text(render_bootstrap_readme())
    _git("add", "README.md", cwd=repository)
    _git("commit", "--message", "init", cwd=repository)
    _git("push", "origin", "wot-eu", cwd=repository)
    _git("switch", "main", cwd=repository)

    publisher_repository = tmp_path / "fresh-publisher"
    _git(
        "clone",
        "--no-local",
        "--depth",
        "1",
        "--branch",
        "main",
        "--single-branch",
        str(remote),
        str(publisher_repository),
    )
    _git("config", "user.name", "publisher", cwd=publisher_repository)
    _git("config", "user.email", "publisher@example.invalid", cwd=publisher_repository)

    snapshot = tmp_path / "snapshot"
    snapshot_id, descriptor_sha256 = _snapshot(snapshot, profile="full")

    result = _publish(
        publisher_repository,
        snapshot,
        snapshot_id=snapshot_id,
        descriptor_sha256=descriptor_sha256,
        branch="wot-eu",
        profile="full",
    )

    assert result.returncode == 0, result.stderr
    assert json.loads(result.stdout)["publication_state"] == "published"
    assert _git(
        "--git-dir", str(remote), "rev-list", "--count", "refs/heads/wot-eu"
    ) == "2"
    assert _git(
        "--git-dir", str(remote), "log", "--format=%s", "refs/heads/wot-eu"
    ).splitlines() == ["2.3.1.0 #903", "init"]

    data_checkout = tmp_path / "production-checkout"
    _git("clone", "--branch", "wot-eu", str(remote), str(data_checkout))
    assert (data_checkout / ".publication.json").is_file()
    assert "Версия: `2.3.1.5400`" in (data_checkout / "README.md").read_text()


def test_publisher_uses_a_commit_only_fetch_without_checking_out_old_data() -> None:
    source = (ROOT / "src/wot_gui_assets_publisher/publication.py").read_text()

    assert '"--filter=tree:0"' in source
    assert '"--no-checkout"' in source
    assert '"show", "HEAD:.publication.json"' in source
