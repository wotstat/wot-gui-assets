import { r as e } from "../../chunks/rolldown-runtime.js";
import {
  Co as s,
  G as o,
  J as t,
  K as r,
  Kr as a,
  V as i,
  W as n,
  Wa as l,
  Wo as d,
  Zr as p,
  q as c,
  sa as u,
} from "../../chunks/lib.js";
import "../../chunks/globals.js";
import { a as m } from "../../chunks/vendor.js";
import { n as v, t as I } from "../../chunks/extended_tooltip_decorator.js";
var T = e(u(), 1);
function b({ bonuses: e, questId: s, size: a, resId: d, ...p }) {
  const c = l(e, (e) => {
      return {
        size: a,
        name: e.name,
        image: n(e, a),
        value: e.value,
        valueType: r(e.name),
        special:
          "overlayType" in e &&
          e.overlayType &&
          ((i = e.overlayType),
          ("string" == typeof i && Object.values(t).includes(i)) ||
            (console.warn(`Invalid overlayType value: ${i}`), 0))
            ? e.overlayType
            : void 0,
        tooltipArgs: {
          ...o(
            { tooltipId: `${s}:${e.tooltipId}` },
            Number(e.tooltipContentId) ||
              R.views.common.tooltip_window.backport_tooltip_content.BackportTooltipContent(
                "resId",
              ),
          ),
          resId: d,
        },
      };
      var i;
    }),
    u = {
      contentId: R.views.lobby.tooltips.AdditionalRewardsTooltip("resId"),
      args: { showFromIndex: p.count, questId: s },
      resId: d,
    };
  return (0, T.jsx)(i, { ...p, data: c, boxRewardTooltip: u, size: a });
}
var [w, g] = p()(({ observableModel: e }) => ({
    ...e.primitives([
      "countdown",
      "missionType",
      "id",
      "icon",
      "description",
      "currentProgress",
      "totalProgress",
      "earned",
      "isCompleted",
      "animateCompletion",
    ]),
    bonuses: e.arrayClone("bonuses"),
  })),
  x = "BattleQuestTooltip_rewardsText_54d69d4c",
  y = "BattleQuestTooltip_divider_31b2f465",
  _ = "BattleQuestTooltip_rewardItem_462d39e4",
  h = "BattleQuestTooltip_rewards_863df0c8",
  j = d.resolve("aliases"),
  f = R.strings.comp7_light.battleQuestTooltips,
  C = m(function () {
    const { model: e } = g(),
      o = e.bonuses.get(),
      t = e.countdown.get();
    return (0, T.jsxs)(I, {
      header: f.mission(),
      description: s(e.description.get()),
      invertedColors: !0,
      timerText: f.expiresIn(),
      timerTimeLeft: t,
      children: [
        (0, T.jsx)(v, { className: y }),
        (0, T.jsx)("div", { className: x, children: f.rewards(o.length) }),
        (0, T.jsx)(b, {
          bonuses: o,
          questId: e.id.get(),
          resId: j.read((e) => e.comp7_light.shared.Quests("resId")),
          size: c.Small,
          rewardItemClassMix: _,
          count: 3,
          classMix: h,
        }),
      ],
    });
  });
a((0, T.jsx)(w, { children: (0, T.jsx)(C, {}) }));
