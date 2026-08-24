"""Publish GUI asset projections of sealed GameSnapshots."""

from wot_gui_assets_publisher.publication import (
    PublicationError,
    publish_snapshot,
)

__all__ = ["PublicationError", "publish_snapshot"]
