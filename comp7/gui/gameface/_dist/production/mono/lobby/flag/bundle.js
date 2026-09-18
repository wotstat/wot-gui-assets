import { r as s } from "../chunks/rolldown-runtime.js";
import {
  Pa as i,
  Ss as e,
  _i as o,
  ci as a,
  di as r,
  fi as n,
  hi as t,
  li as c,
  pi as m,
  ui as p,
} from "../chunks/lib.js";
import "../chunks/_wg-global-styles.js";
import { s as l, v as d } from "../chunks/common.js";
import { a as u } from "../chunks/vendor.js";
/* empty css               */ var [v, _] = o()(({ observableModel: s }) => {
    const i = {
        ...s.primitives(["winStatus", "isLeave"]),
        achievements: s.arrayClone("achievements"),
      },
      e = t.primitive(() => "win" === i.winStatus.get() && !i.isLeave.get());
    return { ...i, computes: { isWin: e } };
  }),
  b = "App_cb654453",
  h = "App_flag_4ed23b16",
  f = "App_flag__hidden_8afb9008",
  g = s(i(), 1),
  j = a("Flag", b);
var w = u(function () {
  const s = r(),
    { model: i } = _();
  return (0, g.jsx)(j, {
    className: b,
    children: (0, g.jsx)(c, {
      loop: !0,
      autoplay: !0,
      className: e(h, s.location !== l[d.overview] && f),
      src: String(
        i.computes.isWin()
          ? R.videos.comp7.no_epic_victory_ribbon()
          : R.videos.comp7.no_epic_defeat_draw_ribbon(),
      ),
    }),
  });
});
n(
  new m()
    .addWithProps(p, { context: "model.router" })
    .add(v)
    .render((0, g.jsx)(w, {})),
);
