import { r as s } from "../../chunks/rolldown-runtime.js";
import {
  $ as i,
  Pa as o,
  Q as e,
  Uo as r,
  _i as t,
  et as a,
  fi as n,
  ws as d,
} from "../../chunks/lib.js";
import "../../chunks/_wg-global-styles.js";
import { a as m, i as c } from "../../chunks/vendor.js";
/* empty css                  */ import { n as l } from "../../chunks/get_division_name.js";
import { n as j } from "../../chunks/get_rank_name.js";
import { t as p } from "../../chunks/tooltip_decorator.js";
import { t as h } from "../../chunks/tooltips.module.js";
d();
var u = s(c(), 1),
  [v, x] = t()(({ observableModel: s }) => ({ root: s.object() }), r),
  g = s(o(), 1),
  f = m(() => {
    const { model: s } = x(),
      { division: o, rank: r, from: t, to: n } = s.root.get();
    return (0, g.jsxs)("div", {
      className: h.base,
      children: [
        (0, g.jsx)("div", {
          className: h.heading,
          children: a(R.strings.comp7_ext.divisionTooltip.heading(), { divisionName: l(o) }),
        }),
        (0, g.jsx)("div", {
          className: (0, u.default)(h.subHeading, h.subHeading__topIndent),
          children: (0, g.jsx)(i, { text: j(r) }),
        }),
        (0, g.jsx)("div", { className: h.divider }),
        (0, g.jsx)("div", {
          className: h.description,
          children: (0, g.jsx)(e, {
            text: R.strings.comp7_ext.divisionTooltip.description(),
            binding: { fromScore: t, toScore: n },
          }),
        }),
      ],
    });
  });
n((0, g.jsx)(v, { children: (0, g.jsx)(p, { children: (0, g.jsx)(f, {}) }) }));
