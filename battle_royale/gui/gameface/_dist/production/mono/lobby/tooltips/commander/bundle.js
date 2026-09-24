import {
  Bt as a,
  Gt as s,
  Nn as e,
  Ut as r,
  _ as n,
  d as t,
  h as i,
  jr as m,
  ni as o,
  t as c,
  zt as d,
} from "../../chunks/lib.js";
import "../../chunks/globals.js";
import { i as p } from "../../chunks/vendor.js";
var [l, _] = s()((a) => {
  const s = a.observableModel.primitives(["params", "type"]);
  return {
    type: s.type,
    computes: {
      params: r.primitive(function (a) {
        return a(s.params.get());
      }),
    },
  };
}, m);
var j,
  f = "App_11090d07",
  h = "App_headerContainer_c897879f",
  v = "App_icon_961e61e2",
  u = "App_specialtyName_1072bf2a",
  N = "App_commanderName_d9ad769f",
  x = "App_separator_f627df4c",
  y = "App_description_1072bf2a",
  b = e(),
  A = o.resolve("strings"),
  k = i({ commanderNation: n() }),
  g =
    ((j = t(k)),
    function () {
      return _().model.computes.params(j);
    }),
  E = p(function () {
    const { commanderNation: a } = g();
    return (0, b.jsx)(c, {
      children: (0, b.jsx)(c.Decorator, {
        children: (0, b.jsxs)("div", {
          className: f,
          children: [
            (0, b.jsxs)("div", {
              className: h,
              children: [
                (0, b.jsx)("div", { className: v }),
                (0, b.jsx)("div", {
                  className: u,
                  children: A.readOrEmpty("battle_royale.commanderInfo.commonRank"),
                }),
              ],
            }),
            (0, b.jsx)("div", {
              className: N,
              children: A.readOrEmpty(`battle_royale.commanderInfo.fullName.${a}`),
            }),
            (0, b.jsx)("div", { className: x }),
            (0, b.jsx)("div", {
              className: y,
              children: A.readOrEmpty(`battle_royale.commanderInfo.description.${a}`),
            }),
          ],
        }),
      }),
    });
  });
a((0, b.jsx)(d, { children: (0, b.jsx)(l, { children: (0, b.jsx)(E, {}) }) }));
