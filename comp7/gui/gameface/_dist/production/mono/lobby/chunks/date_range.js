import { r as a } from "./rolldown-runtime.js";
import { Ds as s, Er as e, Es as i, Pa as t, as as l, mn as m, ws as n, yr as r } from "./lib.js";
var o = a(n(), 1),
  d = a(m(), 1),
  u = { small: "small", big: "big" },
  c = { full: "full", medium: "medium", small: "small" },
  p = { appear: "appear", fadeIn: "fadeIn", slideUpIn: "slideUpIn" },
  f = {
    battlePass: "battlePass",
    events: "events",
    missionsSlider: "missionsSlider",
    missions: "missions",
    personalMissions: "personalMissions",
  },
  h = "DateRange_8756cb54",
  g = "DateRange_label_a9603586",
  D = "DateRange_image_6a8d9b5e",
  x = a(t(), 1),
  b = s.resolve("strings"),
  v = { full: "full", numeric: "numeric", compact: "compact" },
  _ = { [v.full]: i.DayMonthFull, [v.numeric]: i.DayMonthNumeric };
function w({ startDate: a, endDate: s, className: i, size: t, isAdaptive: m, isMode: n }) {
  const u = l,
    p = t === c.medium,
    f = t === c.small,
    M = (0, o.useMemo)(
      () => (f || (m && p && n) ? w.format.compact : m || p ? w.format.numeric : w.format.full),
      [m, p, n, f],
    );
  return (0, x.jsxs)("div", {
    className: (0, d.default)(h, i),
    children: [
      (0, x.jsx)(r, {
        className: D,
        path: "ui_kit.datetime.x16x16.cooldown",
        width: 18,
        height: 17,
        adaptive: { medium: { path: "ui_kit.datetime.x24x24.cooldown", width: 24, height: 24 } },
      }),
      M !== v.compact
        ? (0, x.jsx)(e, {
            className: g,
            text: b.readOrEmpty("user_missions.common.daterange.divider"),
            split: !0,
            params: { startDate: u(a, _[M]), endDate: u(s, _[M]) },
          })
        : null,
    ],
  });
}
w.format = v;
export { u as a, c as i, p as n, f as r, w as t };
