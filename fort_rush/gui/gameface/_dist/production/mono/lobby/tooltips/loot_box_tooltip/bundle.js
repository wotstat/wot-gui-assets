import {
  l as e,
  df as a,
  h as r,
  db as s,
  dc as o,
  de as d,
  ap as t,
  dG as l,
  dh as i,
  dg as n,
  dC as c,
  dp as p,
  q as _,
  ak as m,
  dD as x,
} from "../../chunks/lib.js";
import { h, N as u, j as b, a5 as w } from "../../chunks/vendor.js";
import { b as j } from "../../chunks/readResource.js";
const [f, v] = e()(({ observableModel: e }) => {
    const t = { root: e.object(), rewards: e.array("rewards") },
      l = h(() => t.rewards.get().length),
      i = h(
        (e) => {
          const a = r(t.rewards.get(), e);
          if (!a) throw Error(`No reward found with index: ${e}`);
          return {
            ...a,
            image: d(a),
            special: a.overlayType,
            valueType: o(a.name),
            tooltipArgs: s({ tooltipId: a.tooltipId }, Number(a.tooltipContentId)),
          };
        },
        { equals: a },
      );
    return { ...t, computes: { length: l, reward: i } };
  }, t),
  g = {
    base: "LootBoxReward_f540ffff",
    item: "LootBoxReward_item_d6bd5e44",
    item__separator: "LootBoxReward_item__separator_c33af3ef",
    rewardWrapper: "LootBoxReward_rewardWrapper_991c8919",
    reward__withCurrency: "LootBoxReward_reward__withCurrency_11a0d30b",
    label: "LootBoxReward_label_82449d16",
    percent: "LootBoxReward_percent_7dd115ee",
    separator: "LootBoxReward_separator_6fa555ac",
  },
  N = u(({ index: e }) => {
    const { model: a } = v(),
      r = a.computes.length(),
      s = a.computes.reward(e),
      { probability: o, label: d, valueType: t } = s,
      _ = r > 5 ? e > 1 : e > 0,
      m = t === l.CURRENCY;
    return b.jsxs("div", {
      className: g.base,
      children: [
        _ && b.jsx("div", { className: g.separator }),
        b.jsxs("div", {
          className: w(g.item, _ && g.item__separator),
          children: [
            b.jsx("div", {
              className: g.rewardWrapper,
              children: b.jsx(i, {
                ...s,
                className: w(g.reward, m && g.reward__withCurrency),
                size: n.Small,
              }),
            }),
            b.jsx("div", { className: g.label, children: d }),
            Boolean(o) &&
              b.jsx("div", {
                className: g.percent,
                children: b.jsx(c, {
                  text: R.strings.fun_random.lootboxTooltip.chance(),
                  binding: { percent: p(R.strings.common.percentValue(), { value: o }) },
                }),
              }),
          ],
        }),
      ],
    });
  }),
  y = "App_4a184ace",
  B = "App_base__double_e27f4c21",
  A = "App_header_7b99070f",
  L = "App_icon_1f44f417",
  C = "App_title_711c3638",
  k = "App_description_975d9f61",
  T = "App_content_a6dab835",
  I = u(() => {
    const { model: e } = v(),
      { iconKey: a, label: r, assetsPointer: s } = e.root.get(),
      o = e.computes.length(),
      d = o > 5,
      t = j(s).progression.bonuses.small;
    return b.jsxs("div", {
      className: w(y, d && B),
      children: [
        b.jsxs("div", {
          className: A,
          children: [
            b.jsx("div", { className: L, style: { backgroundImage: `url(${t.$dyn(a)})` } }),
            b.jsx("div", { className: C, children: r }),
            b.jsx("div", {
              className: k,
              children: R.strings.fun_random.lootboxTooltip.description(),
            }),
          ],
        }),
        b.jsx("div", { className: T, children: o > 0 && _(o, (e) => b.jsx(N, { index: e }, e)) }),
      ],
    });
  });
m(b.jsx(f, { children: b.jsx(x, { children: b.jsx(I, {}) }) }));
