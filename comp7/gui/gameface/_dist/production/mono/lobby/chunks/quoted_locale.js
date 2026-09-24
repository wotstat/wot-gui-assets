import { r as e } from "./rolldown-runtime.js";
import { Pa as r, et as s, ws as a } from "./lib.js";
var o = (function (e) {
    return (
      (e[(e.Base = 0)] = "Base"),
      (e[(e.Vehicle = 1)] = "Vehicle"),
      (e[(e.Style3d = 2)] = "Style3d"),
      (e[(e.Reward = 3)] = "Reward"),
      e
    );
  })({}),
  t = (function (e) {
    return (
      (e.Locked = "locked"),
      (e.ReadyToRestore = "readyToRestore"),
      (e.ReadyToPurchase = "readyToPurchase"),
      (e.Purchased = "purchased"),
      (e.InProgress = "inProgress"),
      e
    );
  })({}),
  n = (a(), e(r())),
  c = ({ name: e, className: r }) =>
    (0, n.jsx)("span", {
      className: r,
      children: s(R.strings.comp7_ext.quotesWrapper(), { name: e }),
    });
export { t as n, o as r, c as t };
