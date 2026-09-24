import { r } from "./rolldown-runtime.js";
import { Pa as o, ct as e, ws as a } from "./lib.js";
import { i as s } from "./vendor.js";
a();
var t = r(s()),
  n = "TooltipDecorator_decorator_81525906",
  c = "TooltipDecorator_decoratorInner_ed88e863",
  d = r(o());
function i({ children: r, classNames: o }) {
  return (0, d.jsx)(e, {
    children: (0, d.jsx)("div", {
      className: (0, t.default)(n, o?.decoratorInner),
      children: (0, d.jsx)("div", { className: (0, t.default)(c, o?.decoratorInner), children: r }),
    }),
  });
}
export { i as t };
