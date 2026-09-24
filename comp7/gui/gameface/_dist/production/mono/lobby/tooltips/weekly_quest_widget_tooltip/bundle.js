import { r as e } from "../../chunks/rolldown-runtime.js";
import {
  $ as a,
  Pa as s,
  Q as t,
  Ss as r,
  Z as i,
  _i as n,
  bo as c,
  ct as d,
  et as o,
  fi as _,
  ft as l,
  gi as u,
  gt as p,
  lt as f,
  mt as g,
  no as x,
  pt as w,
  wo as m,
  ws as b,
} from "../../chunks/lib.js";
import "../../chunks/_wg-global-styles.js";
import { a as h, i as v } from "../../chunks/vendor.js";
/* empty css                  */ var [j, A] = n()(({ observableModel: e }) => {
    const a = {
        root: e.object(),
        bonuses: e.array("bonuses"),
        questNumbersToRewards: e.array("questNumbersToRewards"),
      },
      s = u((e) => {
        const s = c(a.questNumbersToRewards.get(), e);
        if (!s) throw new Error(`qualification battle with index ${e} was not found`);
        return s;
      });
    return { ...a, computes: { questRewardsNumber: s } };
  }),
  W = (function (e) {
    return ((e.Active = "active"), (e.Waiting = "waiting"), (e.Reward = "reward"), e);
  })({}),
  Q = (b(), e(v(), 1)),
  I = "Divider_7a72bfaf",
  N = "Divider_71fcbede",
  T = e(s(), 1),
  C = ({ className: e }) =>
    (0, T.jsx)("div", { className: r(I, e), children: (0, T.jsx)("div", { className: N }) });
function M({ bonuses: e, size: a, ...s }) {
  const t = m(e, (e) => ({
    size: a,
    name: e.name,
    image: l(e, a),
    value: e.value,
    valueType: w(e.name),
  }));
  return (0, T.jsx)(f, { ...s, data: t, size: a });
}
var k = {
    header: "ActiveQuestCard_header_e228dbe8",
    description: "ActiveQuestCard_description_bad0b037",
    description__dark: "ActiveQuestCard_description__dark_e8f90930",
    divider: "ActiveQuestCard_divider_bc8f698f",
    rewardsText: "ActiveQuestCard_rewardsText_539c9121",
    counter: "ActiveQuestCard_counter_e00c67cc",
    counter__current: "ActiveQuestCard_counter__current_5abd8ace",
    fadeIn: "ActiveQuestCard_fadeIn_cda07208",
    fadeInThreeQuarters: "ActiveQuestCard_fadeInThreeQuarters_cda07208",
    fadeInHalf: "ActiveQuestCard_fadeInHalf_cda07208",
    fadeOut: "ActiveQuestCard_fadeOut_cda07208",
    fadeInWithScale: "ActiveQuestCard_fadeInWithScale_cda07208",
    slideUp: "ActiveQuestCard_slideUp_cda07208",
    scale: "ActiveQuestCard_scale_cda07208",
    raysAppearance: "ActiveQuestCard_raysAppearance_cda07208",
    rotate: "ActiveQuestCard_rotate_cda07208",
    "reverse-rotate": "ActiveQuestCard_reverse-rotate_cda07208",
    glowAppearance: "ActiveQuestCard_glowAppearance_cda07208",
    highlightAppearance: "ActiveQuestCard_highlightAppearance_cda07208",
    blink: "ActiveQuestCard_blink_cda07208",
    slideUpIn: "ActiveQuestCard_slideUpIn_cda07208",
  },
  q = R.strings.comp7_ext.weeklyQuestWidgetTooltip,
  y = h(() => {
    const { model: e } = A(),
      { description: s, questsPassed: r, totalQuests: i } = e.root.get(),
      n = e.bonuses.get(),
      c = e.questNumbersToRewards.get().length - 1;
    return (0, T.jsxs)("div", {
      className: k.base,
      children: [
        (0, T.jsx)(a, { text: q.header(), classMix: k.header }),
        (0, T.jsx)(a, { text: s, classMix: k.description }),
        (0, T.jsx)(C, { className: k.divider }),
        (0, T.jsx)("div", { className: k.rewardsText, children: q.rewards(n.length) }),
        (0, T.jsx)(M, { bonuses: n, size: g.Small, count: 3 }),
        (0, T.jsx)(C, { className: k.divider }),
        (0, T.jsx)(a, {
          text: q.missionsCounter(),
          classMix: (0, Q.default)(k.counter, k.counter__current),
          binding: {
            counter: (0, T.jsx)(a, {
              text: q.counter(),
              classMix: k.counter,
              binding: {
                current: (0, T.jsx)("span", { className: k.counter__current, children: r }),
                total: i,
              },
            }),
          },
        }),
        (0, T.jsx)(t, {
          text: q.description(),
          classMix: (0, Q.default)(k.description, k.description__dark),
          binding: {
            questsList: x(c, (a) => e.computes.questRewardsNumber(a)).join(
              R.strings.comp7_ext.listSeparator(),
            ),
            lastQuest: e.computes.questRewardsNumber(c),
          },
        }),
      ],
    });
  }),
  U = {
    header: "Reward_header_fe1c875b",
    description: "Reward_description_901b8d14",
    divider: "Reward_divider_ea66945c",
    rewardsText: "Reward_rewardsText_ef59fc7c",
    reward: "Reward_e744e1e2",
    fadeIn: "Reward_fadeIn_21f091ec",
    fadeInThreeQuarters: "Reward_fadeInThreeQuarters_21f091ec",
    fadeInHalf: "Reward_fadeInHalf_21f091ec",
    fadeOut: "Reward_fadeOut_21f091ec",
    fadeInWithScale: "Reward_fadeInWithScale_21f091ec",
    slideUp: "Reward_slideUp_21f091ec",
    scale: "Reward_scale_21f091ec",
    raysAppearance: "Reward_raysAppearance_21f091ec",
    rotate: "Reward_rotate_21f091ec",
    "reverse-rotate": "Reward_reverse-rotate_21f091ec",
    glowAppearance: "Reward_glowAppearance_21f091ec",
    highlightAppearance: "Reward_highlightAppearance_21f091ec",
    blink: "Reward_blink_21f091ec",
    slideUpIn: "Reward_slideUpIn_21f091ec",
  },
  D = R.strings.comp7_ext.weeklyQuestWidgetTooltip,
  S = {
    header: "Waiting_header_3d83166b",
    counterContainer: "Waiting_counterContainer_440beb40",
    counter: "Waiting_counter_da0557a8",
    counter__current: "Waiting_counter__current_115914f0",
    timerBlock: "Waiting_timerBlock_df0e9a3f",
    description: "Waiting_description_cdde7d73",
    divider: "Waiting_divider_f2e77895",
    newMissionsDescriptionWrapper: "Waiting_newMissionsDescriptionWrapper_9c86e45a",
    newMissionsDescription: "Waiting_newMissionsDescription_3b697f7",
    newMissionsTimer: "Waiting_newMissionsTimer_6bf867a3",
    fadeIn: "Waiting_fadeIn_b299f9ac",
    fadeInThreeQuarters: "Waiting_fadeInThreeQuarters_b299f9ac",
    fadeInHalf: "Waiting_fadeInHalf_b299f9ac",
    fadeOut: "Waiting_fadeOut_b299f9ac",
    fadeInWithScale: "Waiting_fadeInWithScale_b299f9ac",
    slideUp: "Waiting_slideUp_b299f9ac",
    scale: "Waiting_scale_b299f9ac",
    raysAppearance: "Waiting_raysAppearance_b299f9ac",
    rotate: "Waiting_rotate_b299f9ac",
    "reverse-rotate": "Waiting_reverse-rotate_b299f9ac",
    glowAppearance: "Waiting_glowAppearance_b299f9ac",
    highlightAppearance: "Waiting_highlightAppearance_b299f9ac",
    blink: "Waiting_blink_b299f9ac",
    slideUpIn: "Waiting_slideUpIn_b299f9ac",
  },
  H = R.strings.comp7_ext.weeklyQuestWidgetTooltip,
  O = h(() => {
    const { model: e } = A(),
      { timeToNewQuests: s, questsPassed: r, totalQuests: n } = e.root.get(),
      c = e.questNumbersToRewards.get().length - 1;
    return (0, T.jsxs)("div", {
      className: S.base,
      children: [
        (0, T.jsx)(a, { text: H.header(), classMix: S.header }),
        (0, T.jsx)(a, {
          text: H.missionsCounter(),
          classMix: S.counterContainer,
          binding: {
            counter: (0, T.jsx)(a, {
              text: H.counter(),
              classMix: S.counter,
              binding: {
                current: (0, T.jsx)("span", { className: S.counter__current, children: r }),
                total: n,
              },
            }),
          },
        }),
        (0, T.jsx)(t, {
          text: H.description(),
          classMix: S.description,
          binding: {
            questsList: x(c, (a) => e.computes.questRewardsNumber(a)).join(
              R.strings.comp7_ext.listSeparator(),
            ),
            lastQuest: e.computes.questRewardsNumber(c),
          },
        }),
        (0, T.jsxs)("div", {
          className: S.timerBlock,
          children: [
            (0, T.jsx)(C, { className: S.divider }),
            (0, T.jsxs)("div", {
              className: S.newMissionsDescriptionWrapper,
              children: [
                (0, T.jsx)(i, {
                  classMix: S.newMissionsDescription,
                  content: o(H.newMissions(5), { value: 5 }),
                }),
                (0, T.jsx)(p, { start: s, className: S.newMissionsTimer }),
              ],
            }),
          ],
        }),
      ],
    });
  }),
  z = "WeeklyQuestWidgetTooltip_20195207",
  B = {
    [W.Active]: y,
    [W.Waiting]: O,
    [W.Reward]: () =>
      (0, T.jsxs)("div", {
        className: U.base,
        children: [
          (0, T.jsx)(a, { text: D.completed(), classMix: U.header }),
          (0, T.jsx)(a, { text: D.completedDescription(), classMix: U.description }),
          (0, T.jsx)(C, { className: U.divider }),
          (0, T.jsx)("div", { className: U.rewardsText, children: D.rewards() }),
          (0, T.jsx)("div", { className: U.reward }),
        ],
      }),
  },
  P = h(() => {
    const { model: e } = A(),
      a = B[e.root.get().state];
    return a
      ? (0, T.jsx)(d, {
          children: (0, T.jsx)(d.Decorator, {
            children: (0, T.jsx)("div", { className: z, children: (0, T.jsx)(a, {}) }),
          }),
        })
      : (console.error("Unreachable code: WeeklyQuestTooltip"), null);
  });
_((0, T.jsx)(j, { children: (0, T.jsx)(P, {}) }));
