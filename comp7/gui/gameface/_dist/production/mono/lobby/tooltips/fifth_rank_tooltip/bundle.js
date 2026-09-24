import { r as s } from "../../chunks/rolldown-runtime.js";
import { Pa as o, Q as r, Uo as t, _i as i, fi as e, tt as a } from "../../chunks/lib.js";
import "../../chunks/_wg-global-styles.js";
import { a as n, i as m } from "../../chunks/vendor.js";
/* empty css                  */ import { r as c } from "../../chunks/enums.js";
import { n as l } from "../../chunks/get_rank_name.js";
import { t as d } from "../../chunks/tooltip_decorator.js";
import { t as j } from "../../chunks/tooltips.module.js";
var h = s(m(), 1),
  [p, u] = i()(({ observableModel: s }) => ({ root: s.object() }), t),
  f = s(o(), 1),
  k = n(() => {
    const { model: s } = u(),
      { from: o } = s.root.get();
    return (0, f.jsxs)("div", {
      className: j.base,
      children: [
        (0, f.jsx)("div", { className: j.heading, children: l(c.Fifth) }),
        (0, f.jsx)("div", {
          className: (0, h.default)(j.description, j.description__topIndent),
          children: (0, f.jsx)(r, {
            text: R.strings.comp7_ext.fifthRankTooltip.description(),
            binding: { fromScore: (0, f.jsx)(a, { value: o }) },
          }),
        }),
      ],
    });
  });
e((0, f.jsx)(p, { children: (0, f.jsx)(d, { children: (0, f.jsx)(k, {}) }) }));
