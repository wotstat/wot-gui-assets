import { i as e, R as s, j as a, E as i, D as t } from "../../../../chunks/vendor.js";
import {
  i as d,
  o as r,
  bj as o,
  a9 as l,
  m as c,
  ds as _,
  dt as p,
  du as n,
  d as f,
  cr as m,
  aN as u,
  Z as h,
  w as x,
  r as j,
  dr as y,
} from "../../../../chunks/lib.js";
import { S as b } from "../../../../chunks/story_point.js";
import { f as v, h as w } from "../../../../chunks/utils.js";
const [D, N] = d()(({ observableModel: s }) => {
    const a = { root: s.object(), rewardsByWave: s.array("rewardsByWave") },
      i = e(
        (e) => {
          const s = o(a.rewardsByWave.get(), e);
          if (!s) throw Error(`No rewards found for index: ${a.rewardsByWave.get()}`);
          return s;
        },
        { equals: r },
      );
    return { ...a, computes: { getRewardsByWaveIndex: i } };
  }, l),
  g = "Shield_fdadec95",
  T = "Shield_content_4d1de7b4",
  A = "Shield_content__completed_df6f2492",
  k = "Shield_icon_852a3b2a",
  $ = "Shield_icon__completed_27443cc3",
  W = "Shield_check_c7a26a19",
  H = "Shield_index_726c9af4",
  R = s.memo(function ({ completed: e, index: s = -1, className: t }) {
    const d = s >= 0;
    return a.jsx("div", {
      className: i(g, t),
      children:
        d && e
          ? a.jsx("div", { className: W })
          : a.jsxs("div", {
              className: i(T, e && A),
              children: [
                a.jsx("div", { className: i(k, e && $) }),
                d && a.jsx("div", { className: H, children: s }),
              ],
            }),
    });
  }),
  S = "Rewards_9ead941e",
  B = "Rewards_base__last_653802ba",
  E = "Rewards_shield_57f47719",
  L = "Rewards_reward_7511df10",
  z = "Rewards_reward__received_62b5a47f",
  P = "Rewards_container_4b1e77a4",
  F = t(function ({ wave: e, isLast: s }) {
    const { model: t } = N(),
      { isReceived: d, index: r, rewards: o } = t.computes.getRewardsByWaveIndex(e);
    return a.jsx("div", {
      className: i(S, s && B),
      children: a.jsxs("div", {
        className: P,
        children: [
          a.jsx(R, { index: r, completed: d, className: E }),
          c(o, (e, s) =>
            a.jsx(
              _,
              {
                name: e.name,
                value: w(e),
                className: i(L, d && z),
                size: n.Small,
                special: e.overlayType,
                image: v(e, n.Small),
                valueType: p(e.name),
              },
              `${e.name}${s}`,
            ),
          ),
        ],
      }),
    });
  }),
  I = {
    root: "DifficultyTooltipApp_root_a69bf6a6",
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
  M = f.resolve("strings"),
  O = "last_stand_lobby.difficult.tooltip",
  q = t(function () {
    const { model: e } = N(),
      s = m(),
      {
        level: t,
        state: d,
        isLocked: r,
        isHangar: o,
        maxCompletedMissions: l,
        modifier: c,
      } = e.root.get(),
      _ = `level${t}`,
      p = l > 0,
      n = e.rewardsByWave.get();
    return a.jsxs("div", {
      className: I.base,
      children: [
        a.jsx(u, { className: I.header, path: `${O}.header.${_}` }),
        a.jsxs("div", {
          className: i(I.subHeaderWrapper, !o && I.subHeaderWrapper__high),
          children: [
            a.jsx(R, { completed: p }),
            a.jsx(u, {
              className: I.subHeader,
              path: `${O}.subHeader`,
              upgradeLegacy: !0,
              params: {
                count: a.jsx("div", {
                  className: i(I.missions, p && I.missions__completed),
                  children: l,
                }),
              },
            }),
          ],
        }),
        o &&
          a.jsx(u, {
            className: I.description,
            path: `${O}.description.${_}`,
            split: !0,
            params: {
              modifier: a.jsx(b, {
                modifier: c,
                size: b.sizes.s16x16,
                classNames: { base: I.storyPoint },
              }),
            },
          }),
        n.length > 0 &&
          a.jsxs(a.Fragment, {
            children: [
              a.jsx("div", { className: I.dots }),
              a.jsx("div", {
                className: I.rewardsDescr,
                children: M.readOrEmpty(`${O}.description.reward`),
              }),
              a.jsx("div", {
                className: I.rewards,
                children: h(n.length, (e) =>
                  a.jsx(F, { wave: e, isLast: o && e == n.length - 1 }, e),
                ),
              }),
            ],
          }),
        o &&
          a.jsxs(a.Fragment, {
            children: [
              a.jsx("div", { className: i(I.dots, I.dots__text) }),
              a.jsxs("div", {
                className: i(I.state, r && I.state__locked, I[`state__${d}`]),
                children: [
                  r &&
                    a.jsx(x, {
                      path:
                        "R.images.last_stand.gui.maps.icons.difficulties." +
                        (1 === s ? "icon_lock_small" : "icon_lock_big"),
                      width: 18,
                      height: 18,
                    }),
                  M.readOrEmpty(r ? `${O}.locked` : `${O}.state.${d}`),
                ],
              }),
              r && t > 1 && a.jsx(u, { className: I.lockDescr, path: `${O}.lockedDescr.${_}` }),
            ],
          }),
      ],
    });
  });
j(a.jsx(D, { children: a.jsx(y, { children: a.jsx(q, {}) }) }));
