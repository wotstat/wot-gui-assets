import { j as e, f as s } from "./vendor.js";
import { e as t, F as i, ct as r, T as a } from "./lib.js";
const o = "Divider_7a72bfaf",
  d = "Divider_1eaf72bd",
  c = ({ className: t }) =>
    e.jsx("div", { className: s(o, t), children: e.jsx("div", { className: d }) }),
  n = "ExtendedTooltipDecorator_312a767e",
  l = "ExtendedTooltipDecorator_header_37374fa6",
  x = "ExtendedTooltipDecorator_base__invertedColors_d4c2e366",
  m = "ExtendedTooltipDecorator_description_edb17499",
  _ = "ExtendedTooltipDecorator_timerBlock_7b7647e1",
  j = "ExtendedTooltipDecorator_divider_24cd0041";
function p({
  header: o,
  description: d,
  descriptionParams: p,
  invertedColors: f,
  timerTimeLeft: v = 0,
  timerText: D,
  className: T,
  children: b,
}) {
  return e.jsx(t, {
    children: e.jsx(t.Decorator, {
      children: e.jsxs("div", {
        className: s(n, f && x, T),
        children: [
          o && e.jsx(i, { text: o, classMix: l }),
          e.jsx(r, { text: d, binding: p, classMix: m }),
          b,
          v > 0 &&
            e.jsxs("div", {
              className: _,
              children: [
                e.jsx(c, { className: j }),
                e.jsx(i, { text: D, binding: { timeLeft: e.jsx(a, { start: v }) } }),
              ],
            }),
        ],
      }),
    }),
  });
}
export { c as D, p as E };
