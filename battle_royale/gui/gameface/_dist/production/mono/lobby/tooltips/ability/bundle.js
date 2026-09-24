import {
  Bt as s,
  Gt as a,
  H as e,
  Nn as t,
  Ut as r,
  _ as c,
  d as i,
  h as n,
  jr as o,
  m as p,
  ni as l,
  t as d,
  zt as m,
} from "../../chunks/lib.js";
import "../../chunks/globals.js";
import { i as _ } from "../../chunks/vendor.js";
import { t as j } from "../../chunks/common.js";
var [u, x] = a()((s) => {
  const a = s.observableModel.primitives(["params", "type"]);
  return {
    type: a.type,
    computes: {
      params: r.primitive(function (s) {
        return s(a.params.get());
      }),
    },
  };
}, o);
var h,
  v = "App_21e3a147",
  g = "App_header_62566856",
  N = "App_icon_24de08c2",
  b = "App_headerContainer_b23d7c80",
  f = "App_title_5ec15df",
  y = "App_cooldown_1072bf2a",
  A = "App_content_80741629",
  k = "App_container_58b78fd8",
  w = "App_description_fecd9a89",
  S = t(),
  L = R.images.gui.maps.icons.battleRoyale.artefact.c_80x80,
  $ =
    ((h = i(n({ title: c(), iconName: c(), cooldownSeconds: p(), description: c() }))),
    function () {
      return x().model.computes.params(h);
    }),
  z = l.resolve("strings"),
  B = _(function () {
    const { title: s, iconName: a, cooldownSeconds: t, description: r } = $(),
      c = j(z.readOrEmpty("tooltips.battle_royale.hangar.tankSetupPanel.ability.cooldownTime")),
      i = j(r);
    return (0, S.jsx)(d, {
      children: (0, S.jsx)(d.Decorator, {
        children: (0, S.jsx)("div", {
          className: v,
          children: (0, S.jsxs)("div", {
            className: k,
            children: [
              (0, S.jsxs)("div", {
                className: g,
                children: [
                  (0, S.jsx)("div", {
                    className: N,
                    style: { backgroundImage: `url(${L.$dyn(a)})` },
                  }),
                  (0, S.jsxs)("div", {
                    className: b,
                    children: [
                      (0, S.jsx)("div", { className: f, children: s }),
                      c.map(({ text: s, params: a }) =>
                        (0, S.jsx)(
                          e,
                          {
                            upgradeLegacy: !0,
                            text: s,
                            params: { ...a, cooldown: t },
                            className: y,
                          },
                          s,
                        ),
                      ),
                    ],
                  }),
                ],
              }),
              (0, S.jsx)("div", {
                className: A,
                children: i.map(({ text: s, params: a }) =>
                  (0, S.jsx)(
                    e,
                    { upgradeLegacy: !0, text: s, params: { ...a }, className: w, split: !0 },
                    s,
                  ),
                ),
              }),
            ],
          }),
        }),
      }),
    });
  });
s((0, S.jsxs)(m, { children: [(0, S.jsx)(u, { children: (0, S.jsx)(B, {}) }), ","] }));
