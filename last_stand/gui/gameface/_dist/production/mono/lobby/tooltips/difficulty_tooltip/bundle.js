import { r as e } from "../../chunks/rolldown-runtime.js";
import {
  Cn as s,
  Eo as a,
  Fa as i,
  La as t,
  Ni as d,
  Pr as r,
  Rn as l,
  Xn as o,
  a as c,
  cr as _,
  fr as p,
  ga as n,
  gi as f,
  o as m,
  pr as u,
  ya as h,
  yo as x,
  zn as y,
} from "../../chunks/lib.js";
import "../../chunks/_wg-global-styles.js";
import { o as j, s as v } from "../../chunks/vendor.js";
import { i as b, r as w } from "../../chunks/utils.js";
import { t as g } from "../../chunks/story_point.js";
var N = e(v(), 1),
  [D, k] = u()(({ observableModel: e }) => {
    const s = { root: e.object(), rewardsByWave: e.array("rewardsByWave") },
      a = p(
        (e) => {
          const a = n(s.rewardsByWave.get(), e);
          if (!a) throw Error(`No rewards found for index: ${s.rewardsByWave.get()}`);
          return a;
        },
        { equals: i },
      );
    return { ...s, computes: { getRewardsByWaveIndex: a } };
  }, t),
  T = e(x(), 1),
  A = "Shield_fdadec95",
  $ = "Shield_content_4d1de7b4",
  W = "Shield_content__completed_df6f2492",
  H = "Shield_icon_852a3b2a",
  R = "Shield_icon__completed_27443cc3",
  S = "Shield_check_c7a26a19",
  B = "Shield_index_726c9af4",
  L = f(),
  z = T.memo(function ({ completed: e, index: s = -1, className: a }) {
    const i = s >= 0;
    return (0, L.jsx)("div", {
      className: (0, N.default)(A, a),
      children:
        i && e
          ? (0, L.jsx)("div", { className: S })
          : (0, L.jsxs)("div", {
              className: (0, N.default)($, e && W),
              children: [
                (0, L.jsx)("div", { className: (0, N.default)(H, e && R) }),
                i && (0, L.jsx)("div", { className: B, children: s }),
              ],
            }),
    });
  }),
  E = "Rewards_9ead941e",
  P = "Rewards_base__last_653802ba",
  F = "Rewards_shield_57f47719",
  C = "Rewards_reward_7511df10",
  I = "Rewards_reward__received_62b5a47f",
  M = "Rewards_container_4b1e77a4",
  O = j(function ({ wave: e, isLast: s }) {
    const { model: a } = k(),
      { isReceived: i, index: t, rewards: d } = a.computes.getRewardsByWaveIndex(e);
    return (0, L.jsx)("div", {
      className: (0, N.default)(E, s && P),
      children: (0, L.jsxs)("div", {
        className: M,
        children: [
          (0, L.jsx)(z, { index: t, completed: i, className: F }),
          h(d, (e, s) =>
            (0, L.jsx)(
              c,
              {
                name: e.name,
                value: b(e),
                className: (0, N.default)(C, i && I),
                size: y.Small,
                special: e.overlayType,
                image: w(e, y.Small),
                valueType: l(e.name),
              },
              `${e.name}${s}`,
            ),
          ),
        ],
      }),
    });
  }),
  q = {
    base: "DifficultyTooltipApp_1f7af9a6",
    header: "DifficultyTooltipApp_header_2379f96b",
    subHeaderWrapper: "DifficultyTooltipApp_subHeaderWrapper_96f0b6e0",
    subHeaderWrapper__high: "DifficultyTooltipApp_subHeaderWrapper__high_e55163ba",
    subHeader: "DifficultyTooltipApp_subHeader_7066f535",
    rewards: "DifficultyTooltipApp_rewards_c1ee7fc1",
    rewardsDescr: "DifficultyTooltipApp_rewardsDescr_b9dd678c",
    missions__completed: "DifficultyTooltipApp_missions__completed_5122fdaa",
    description: "DifficultyTooltipApp_description_206f0d88",
    storyPoint: "DifficultyTooltipApp_storyPoint_13ee3be5",
    dots: "DifficultyTooltipApp_dots_e7474852",
    dots__text: "DifficultyTooltipApp_dots__text_c4f6d968",
    state: "DifficultyTooltipApp_state_dbbde58f",
    state__locked: "DifficultyTooltipApp_state__locked_7fc6407c",
    state__selected: "DifficultyTooltipApp_state__selected_98d59d2e",
    lockDescr: "DifficultyTooltipApp_lockDescr_a41a7031",
  },
  X = a.resolve("strings"),
  G = "last_stand_lobby.difficult.tooltip",
  J = j(function () {
    const { model: e } = k(),
      a = r(),
      {
        level: i,
        state: t,
        isLocked: l,
        isHangar: c,
        maxCompletedMissions: _,
        modifier: p,
      } = e.root.get(),
      n = `level${i}`,
      f = _ > 0,
      m = e.rewardsByWave.get();
    return (0, L.jsxs)("div", {
      className: q.base,
      children: [
        (0, L.jsx)(o, { className: q.header, path: `${G}.header.${n}` }),
        (0, L.jsxs)("div", {
          className: (0, N.default)(q.subHeaderWrapper, !c && q.subHeaderWrapper__high),
          children: [
            (0, L.jsx)(z, { completed: f }),
            (0, L.jsx)(o, {
              className: q.subHeader,
              path: `${G}.subHeader`,
              upgradeLegacy: !0,
              params: {
                count: (0, L.jsx)("div", {
                  className: (0, N.default)(q.missions, f && q.missions__completed),
                  children: _,
                }),
              },
            }),
          ],
        }),
        c &&
          (0, L.jsx)(o, {
            className: q.description,
            path: `${G}.description.${n}`,
            split: !0,
            params: {
              modifier: (0, L.jsx)(g, {
                modifier: p,
                size: g.sizes.s16x16,
                classNames: { base: q.storyPoint },
              }),
            },
          }),
        m.length > 0 &&
          (0, L.jsxs)(L.Fragment, {
            children: [
              (0, L.jsx)("div", { className: q.dots }),
              (0, L.jsx)("div", {
                className: q.rewardsDescr,
                children: X.readOrEmpty(`${G}.description.reward`),
              }),
              (0, L.jsx)("div", {
                className: q.rewards,
                children: d(m.length, (e) =>
                  (0, L.jsx)(O, { wave: e, isLast: c && e == m.length - 1 }, e),
                ),
              }),
            ],
          }),
        c &&
          (0, L.jsxs)(L.Fragment, {
            children: [
              (0, L.jsx)("div", { className: (0, N.default)(q.dots, q.dots__text) }),
              (0, L.jsxs)("div", {
                className: (0, N.default)(q.state, l && q.state__locked, q[`state__${t}`]),
                children: [
                  l &&
                    (0, L.jsx)(s, {
                      path:
                        "R.images.last_stand.gui.maps.icons.difficulties." +
                        (1 === a ? "icon_lock_small" : "icon_lock_big"),
                      width: 18,
                      height: 18,
                    }),
                  X.readOrEmpty(l ? `${G}.locked` : `${G}.state.${t}`),
                ],
              }),
              l &&
                i > 1 &&
                (0, L.jsx)(o, { className: q.lockDescr, path: `${G}.lockedDescr.${n}` }),
            ],
          }),
      ],
    });
  });
_((0, L.jsx)(D, { children: (0, L.jsx)(m, { children: (0, L.jsx)(J, {}) }) }));
