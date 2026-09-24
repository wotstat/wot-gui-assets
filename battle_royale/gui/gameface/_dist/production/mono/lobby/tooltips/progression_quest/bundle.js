import {
  Bt as e,
  Gt as s,
  Nn as t,
  Vr as o,
  c as r,
  i,
  jr as a,
  l as n,
  ni as d,
  s as l,
  u,
  yr as p,
  zt as c,
} from "../../chunks/lib.js";
import "../../chunks/globals.js";
import { n as m, t as _ } from "../../chunks/extended_tooltip_decorator.js";
var [x, b] = s()(
    ({ observableModel: e }) => ({
      ...e.primitives(["countdown", "id", "description"]),
      bonuses: e.arrayClone("bonuses"),
    }),
    a,
  ),
  I = t();
function g({ bonuses: e, questId: s, size: t, resId: o, ...a }) {
  const d = p(e, (e) => ({
      size: t,
      name: e.name,
      image: l(e, t),
      value: e.value,
      valueType: n(e.name),
      special: "overlayType" in e ? e.overlayType : void 0,
      tooltipArgs: {
        ...r(
          { tooltipId: `${s}:${e.tooltipId}` },
          Number(e.tooltipContentId) ||
            R.views.common.tooltip_window.backport_tooltip_content.BackportTooltipContent("resId"),
        ),
        resId: o,
      },
    })),
    u = {
      contentId: R.views.lobby.tooltips.AdditionalRewardsTooltip("resId"),
      args: { showFromIndex: a.count, questId: s },
      resId: o,
    };
  return (0, I.jsx)(i, { ...a, data: d, boxRewardTooltip: u, size: t });
}
var v = "ProgressionQuest_rewardsText_f9c93221",
  w = "ProgressionQuest_divider_c563a46d",
  y = "ProgressionQuest_rewardItem_48a2c60b",
  h = "ProgressionQuest_rewards_a5087287",
  j = d.resolve("strings"),
  T = d.resolve("aliases"),
  q = () => {
    const { model: e } = b(),
      s = e.bonuses.get(),
      t = e.countdown.get();
    return (0, I.jsxs)(_, {
      header: j.readOrEmpty("battle_royale_extention.tooltip.quest.header"),
      description: o(e.description.get()),
      timerText: "user_missions.tooltip.daily_quests.expires",
      timerTimeLeft: t,
      children: [
        (0, I.jsx)(m, { className: w }),
        (0, I.jsx)("div", {
          className: v,
          children: j.pluralOrEmpty(
            "battle_royale_extention.tooltip.daily_quests.reward",
            s.length,
          ),
        }),
        (0, I.jsx)(g, {
          bonuses: s,
          questId: e.id.get(),
          resId: T.read((e) => e.user_missions.hangarWidget.Quests("resId")),
          size: u.Small,
          rewardItemClassMix: y,
          classMix: h,
        }),
      ],
    });
  };
e((0, I.jsx)(c, { children: (0, I.jsx)(x, { children: (0, I.jsx)(q, {}) }) }));
