import {
  l as e,
  m as s,
  db as a,
  dc as l,
  de as o,
  dg as r,
  dh as d,
  dC as t,
  dp as i,
  dk as c,
  O as n,
  br as b,
  ak as m,
  cU as x,
  an as _,
  al as p,
} from "../chunks/lib.js";
import { N as j, j as h, a5 as w, r as v } from "../chunks/vendor.js";
import { b as g, a as u } from "../chunks/readResource.js";
const [N, y] = e()(
    ({ observableModel: e }) => ({ root: e.object(), lootBoxes: e.array("lootBoxes") }),
    ({ externalModel: e }) => ({ closeWindow: e.createCallbackNoArgs("onClose") }),
  ),
  f = {
    base: "RewardRow_3c336197",
    base__s232x174: "RewardRow_base__s232x174_5540c105",
    box: "RewardRow_box_2a93e9d3",
    boxIcon: "RewardRow_boxIcon_38f4db21",
    boxLabel: "RewardRow_boxLabel_b5c1e1f2",
    divider: "RewardRow_divider_1aa30952",
    items: "RewardRow_items_250e268f",
    item: "RewardRow_item_a3515cc5",
    label: "RewardRow_label_dfe16d1a",
    percent: "RewardRow_percent_86c62b10",
  },
  k = j(({ rewards: e, iconKey: c, label: n, showRewardsNames: b }) => {
    const { model: m } = y(),
      { assetsPointer: x } = m.root.get(),
      _ = m.lootBoxes.get().length > 2 ? r.Big : r.S232x174,
      p = ((e, r) =>
        s(e, (e) => ({
          name: e.name,
          image: o(e, r),
          value: e.value,
          special: e.overlayType,
          valueType: l(e.name),
          tooltipArgs: a({ tooltipId: e.tooltipId }, Number(e.tooltipContentId)),
          label: e.label,
          probability: e.probability,
        })))(e, _),
      j = g(x).progression.bonuses.big;
    return h.jsxs("div", {
      className: w(f.base, f[`base__${_}`]),
      children: [
        h.jsxs("div", {
          className: f.box,
          children: [
            h.jsx("div", { className: f.boxIcon, style: { backgroundImage: `url(${j.$dyn(c)})` } }),
            h.jsx("div", { className: f.boxLabel, children: n }),
          ],
        }),
        h.jsx("div", { className: f.divider }),
        h.jsx("div", {
          className: f.items,
          children:
            p.length > 0 &&
            s(p, (e, s) =>
              h.jsxs(
                "div",
                {
                  className: f.item,
                  children: [
                    h.jsx(d, { ...e, size: _ }),
                    b && e.label && h.jsx(t, { classMix: f.label, text: e.label }),
                    Boolean(e.probability) &&
                      h.jsx("div", {
                        className: f.percent,
                        children: i(R.strings.common.percentValue(), { value: e.probability }),
                      }),
                  ],
                },
                s,
              ),
            ),
        }),
      ],
    });
  }),
  A = "RewardList_3134028b",
  I = j(() => {
    const { model: e } = y(),
      a = e.lootBoxes.get();
    return h.jsx("div", {
      className: A,
      children: a.length > 0 && s(a, (e, s) => v.createElement(k, { ...e, key: s })),
    });
  }),
  B = "App_41da450e",
  C = "App_background_8bf668c",
  L = "App_content_c51a1e8f",
  $ = "App_header_6b270f84",
  M = "App_title_ed37f891",
  P = "App_description_8e9e0dbe",
  T = "App_scroll_90d3bf78",
  E = j(() => {
    const { model: e, controls: s } = y(),
      { assetsPointer: a } = e.root.get(),
      { closeWindow: l } = s;
    c(l);
    const { dynamicTexts: o } = u("tierList", { assetsPointer: a });
    return h.jsxs("div", {
      className: B,
      children: [
        h.jsx("div", {
          className: C,
          style: { backgroundImage: `url('${g(a).library.tier_list_bg()}')` },
        }),
        h.jsx(n, {
          children: h.jsxs(b, {
            scrollClassNames: { content: L },
            className: T,
            children: [
              h.jsxs("div", {
                className: $,
                children: [
                  h.jsx("div", { className: M, children: o.title() }),
                  h.jsx("div", { className: P, children: o.description() }),
                ],
              }),
              h.jsx(I, {}),
            ],
          }),
        }),
      ],
    });
  });
m(h.jsx(N, { children: h.jsx(x, { children: h.jsx(_, { children: h.jsx(E, {}) }) }) }), {
  fullScreen: !0,
}).then(() => p(document.getElementById("root")));
