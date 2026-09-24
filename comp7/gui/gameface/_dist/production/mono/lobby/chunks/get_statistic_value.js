import { et as e, fs as t } from "./lib.js";
var r = 0,
  s = 1,
  a = (a, i, n) => {
    const o =
      Number.isInteger(a) || Number.isInteger(10 * a) ? t(a, s) : t(parseFloat(a.toFixed(n)), r);
    return i ? e(R.strings.comp7_ext.percentage(), { percentageValue: o }) : o;
  },
  i = ({ value: e, isPercentage: t = !1, fractionDigits: r = 2 }) =>
    -1 === e ? R.strings.comp7_ext.dash() : a(e, t, r);
export { i as n, a as t };
