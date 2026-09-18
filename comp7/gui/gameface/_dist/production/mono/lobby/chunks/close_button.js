import { r as e } from "./rolldown-runtime.js";
import { $o as a, Pa as o, na as s, ws as n } from "./lib.js";
import { i as f } from "./vendor.js";
n();
var r = e(f()),
  c = "CloseButton_49a682e7",
  l = "CloseButton_icon_b31f68a5",
  _ = "CloseButton_iconHover_b5894825",
  t = {
    heading: "Page_heading_2dd55438",
    close: "Page_close_401a9518",
    fadeIn: "Page_fadeIn_fefb19c8",
    fadeInThreeQuarters: "Page_fadeInThreeQuarters_fefb19c8",
    fadeInHalf: "Page_fadeInHalf_fefb19c8",
    fadeOut: "Page_fadeOut_fefb19c8",
    fadeInWithScale: "Page_fadeInWithScale_fefb19c8",
    slideUp: "Page_slideUp_fefb19c8",
    scale: "Page_scale_fefb19c8",
    raysAppearance: "Page_raysAppearance_fefb19c8",
    rotate: "Page_rotate_fefb19c8",
    "reverse-rotate": "Page_reverse-rotate_fefb19c8",
    glowAppearance: "Page_glowAppearance_fefb19c8",
    highlightAppearance: "Page_highlightAppearance_fefb19c8",
    blink: "Page_blink_fefb19c8",
    slideUpIn: "Page_slideUpIn_fefb19c8",
  },
  i = e(o()),
  d = ({
    onClick: e,
    className: o,
    classNames: n,
    onMouseEnter: f,
    onMouseLeave: d,
    onMouseDown: g,
    onMouseUp: u,
    soundHover: p = "highlight",
    soundClick: b = "play",
  }) => {
    s(e);
    return (0, i.jsxs)("div", {
      className: (0, r.default)(c, t.close, o),
      onMouseEnter: (e) => {
        (f?.(e), a.sound(p));
      },
      onMouseLeave: (e) => {
        d?.(e);
      },
      onMouseDown: (e) => {
        (g?.(e), a.sound(b));
      },
      onMouseUp: (e) => {
        u?.(e);
      },
      onClick: e,
      children: [
        (0, i.jsx)("div", { className: (0, r.default)(l, n?.icon) }),
        (0, i.jsx)("div", { className: (0, r.default)(_, n?.iconHover) }),
      ],
    });
  };
export { t as n, d as t };
