import { r as e } from "../../chunks/rolldown-runtime.js";
import {
  $ as a,
  Pa as s,
  Q as t,
  Sa as n,
  Uo as i,
  Vo as c,
  _i as r,
  _o as o,
  bo as l,
  et as d,
  fi as _,
  gi as m,
  ho as p,
  no as b,
  tt as v,
  wo as f,
  ws as k,
} from "../../chunks/lib.js";
import "../../chunks/_wg-global-styles.js";
import { a as h, i as x } from "../../chunks/vendor.js";
/* empty css                  */ import { r as u } from "../../chunks/enums.js";
import { i as g, o as I, t as j } from "../../chunks/rank_emblem.js";
import { t as T } from "../../chunks/get_division_name.js";
import { i as w, n as y } from "../../chunks/get_rank_name.js";
import { n as N, t as A } from "../../chunks/get_division_points_step.js";
import { t as B } from "../../chunks/tooltip_decorator.js";
var U = e(x(), 1),
  [H, S] = r("ProgressionTableTooltipModel")(({ observableModel: e }) => {
    const a = { root: e.object(), items: e.array("items") },
      s = m(
        (e) => {
          const s = l(a.items.get(), e);
          if (!s) throw new Error(`progression item with index ${e} was not found`);
          const { hasRankInactivity: t, rank: n, from: i, to: c } = s;
          return { hasRankInactivity: t, rank: n, from: i, to: c };
        },
        { equals: n.shallow },
      ),
      t = m(
        (e) => {
          const s = l(a.items.get(), e);
          if (!s) throw new Error(`progression item with index ${e} was not found`);
          return f(s.divisions, (e) => ({ ...e }));
        },
        { equals: c },
      ),
      i = m(
        () => {
          const e = a.root.get().currentItemIndex,
            s = t(e),
            n = o(s, (e) => e.state === N.Current);
          return { name: "number" == typeof n ? s[n]?.name : void 0, index: n };
        },
        { equals: n.shallow },
      );
    return { ...a, computes: { item: s, divisions: t, currentDivision: i } };
  }, i),
  E = {
    base: "RankInactivityBlock_d683def8",
    heading: "RankInactivityBlock_heading_82d158ec",
    description: "RankInactivityBlock_description_6907b70d",
    daysLeft: "RankInactivityBlock_daysLeft_5f9e9940",
    fadeIn: "RankInactivityBlock_fadeIn_4aecaefd",
    fadeInThreeQuarters: "RankInactivityBlock_fadeInThreeQuarters_4aecaefd",
    fadeInHalf: "RankInactivityBlock_fadeInHalf_4aecaefd",
    fadeOut: "RankInactivityBlock_fadeOut_4aecaefd",
    fadeInWithScale: "RankInactivityBlock_fadeInWithScale_4aecaefd",
    slideUp: "RankInactivityBlock_slideUp_4aecaefd",
    scale: "RankInactivityBlock_scale_4aecaefd",
    raysAppearance: "RankInactivityBlock_raysAppearance_4aecaefd",
    rotate: "RankInactivityBlock_rotate_4aecaefd",
    "reverse-rotate": "RankInactivityBlock_reverse-rotate_4aecaefd",
    glowAppearance: "RankInactivityBlock_glowAppearance_4aecaefd",
    highlightAppearance: "RankInactivityBlock_highlightAppearance_4aecaefd",
    blink: "RankInactivityBlock_blink_4aecaefd",
    slideUpIn: "RankInactivityBlock_slideUpIn_4aecaefd",
  },
  M = e(s(), 1),
  $ = h(({ className: e }) => {
    const { model: a } = S(),
      { rankInactivityCount: s, rankInactivityPointsCount: n, currentItemIndex: i } = a.root.get(),
      c = a.computes.item(i).hasRankInactivity;
    return (0, M.jsx)("div", {
      className: (0, U.default)(E.base, c && E.base__active, e),
      children: c
        ? (0, M.jsxs)(M.Fragment, {
            children: [
              (0, M.jsx)("div", {
                className: E.heading,
                children:
                  R.strings.comp7_ext.progressionTableTooltip.rankInactivity.header.active(),
              }),
              (0, M.jsx)(t, {
                text: R.strings.comp7_ext.progressionTableTooltip.rankInactivity.description.active(
                  n,
                ),
                binding: { count: n },
                classMix: E.description,
              }),
              (0, M.jsx)(t, {
                text: R.strings.comp7_ext.progressionTableTooltip.rankInactivity.daysLeft(),
                binding: { rankInactivityCount: s },
                classMix: E.daysLeft,
              }),
            ],
          })
        : (0, M.jsxs)(M.Fragment, {
            children: [
              (0, M.jsx)("div", {
                className: E.heading,
                children:
                  R.strings.comp7_ext.progressionTableTooltip.rankInactivity.header.notActive(),
              }),
              (0, M.jsx)(t, {
                text: d(
                  R.strings.comp7_ext.progressionTableTooltip.rankInactivity.description.notActive(),
                  {
                    rankList: p(
                      a.items.get(),
                      (e) => e.hasRankInactivity,
                      (e) => w(e.rank),
                    ).join(R.strings.comp7_ext.listSeparator()),
                  },
                ),
                classMix: E.description,
              }),
            ],
          }),
    });
  }),
  C = "TableHeader_35da86a5",
  D = "TableHeader_container_fb71aa54",
  F = "TableHeader_cell_56183287",
  L = "TableHeader_cell__rank_fb9e8504",
  P = h(({ className: e }) => {
    const { model: a } = S(),
      s = a.computes.divisions(0);
    return (0, M.jsx)("div", {
      className: (0, U.default)(C, e),
      children: (0, M.jsxs)("div", {
        className: D,
        children: [
          (0, M.jsx)("div", {
            className: (0, U.default)(F, L),
            children: R.strings.comp7_ext.progressionTableTooltip.table.heading.rank(),
          }),
          b(s.length, (e) =>
            (0, M.jsx)("div", { className: F, children: s[e] ? T(s[e].name) : "" }, e),
          ),
        ],
      }),
    });
  }),
  Q =
    (k(),
    {
      base: "TableRow_42854519",
      base__active: "TableRow_base__active_48eb2f3",
      container: "TableRow_container_72f3acca",
      cell: "TableRow_cell_f6418bbe",
      cell__rank: "TableRow_cell__rank_84767343",
      cell__range: "TableRow_cell__range_13cfbcaa",
      cell__united: "TableRow_cell__united_f174032f",
      rankEmblem: "TableRow_rankEmblem_bd21e4b",
      rankName: "TableRow_rankName_9b4a57c7",
      text__active: "TableRow_text__active_511f27e1",
      divider: "TableRow_divider_fc41e995",
      fadeIn: "TableRow_fadeIn_94d4bc08",
      fadeInThreeQuarters: "TableRow_fadeInThreeQuarters_94d4bc08",
      fadeInHalf: "TableRow_fadeInHalf_94d4bc08",
      fadeOut: "TableRow_fadeOut_94d4bc08",
      fadeInWithScale: "TableRow_fadeInWithScale_94d4bc08",
      slideUp: "TableRow_slideUp_94d4bc08",
      scale: "TableRow_scale_94d4bc08",
      raysAppearance: "TableRow_raysAppearance_94d4bc08",
      rotate: "TableRow_rotate_94d4bc08",
      "reverse-rotate": "TableRow_reverse-rotate_94d4bc08",
      glowAppearance: "TableRow_glowAppearance_94d4bc08",
      highlightAppearance: "TableRow_highlightAppearance_94d4bc08",
      blink: "TableRow_blink_94d4bc08",
      slideUpIn: "TableRow_slideUpIn_94d4bc08",
    }),
  O = h(({ itemIndex: e }) => {
    const { model: s } = S(),
      { topPercentage: t } = s.root.get(),
      { rank: n, from: i, to: c } = s.computes.item(e),
      r = s.computes.divisions(e),
      o = s.computes.currentDivision();
    switch (n) {
      case u.Sixth:
        return (0, M.jsx)("div", {
          className: (0, U.default)(Q.cell, Q.cell__united),
          children: (0, M.jsx)(a, {
            text: R.strings.comp7_ext.progressionTableTooltip.topRank(),
            binding: { topPercentage: t },
          }),
        });
      case u.Fifth:
        return (0, M.jsx)("div", {
          className: (0, U.default)(Q.cell, Q.cell__united),
          children: (0, M.jsx)(a, {
            text: R.strings.comp7_ext.progressionTableTooltip.pointsFrom(),
            binding: { from: (0, M.jsx)(v, { value: i }) },
          }),
        });
      default:
        return (0, M.jsx)(M.Fragment, {
          children: b(r.length, (e) => {
            const s = A(i, c, r.length),
              t = i + s * e;
            return (0, M.jsx)(
              "div",
              {
                className: (0, U.default)(Q.cell, Q.cell__range),
                children: (0, M.jsx)(a, {
                  text: R.strings.comp7_ext.progressionTableTooltip.pointsRange(),
                  binding: {
                    from: (0, M.jsx)(v, { value: t }),
                    to: (0, M.jsx)(v, { value: t + s - 1 }),
                  },
                  classMix: (0, U.default)(Q.text, e === o.index && Q.text__active),
                }),
              },
              `${e}_${t}`,
            );
          }),
        });
    }
  }),
  W = h(({ itemIndex: e, className: a, hasDivider: s = !0 }) => {
    const { model: t } = S(),
      { seasonName: n, currentItemIndex: i } = t.root.get(),
      { rank: c } = t.computes.item(e);
    return (0, M.jsxs)("div", {
      className: (0, U.default)(Q.base, i === e && Q.base__active, a),
      children: [
        (0, M.jsxs)("div", {
          className: Q.container,
          children: [
            (0, M.jsxs)("div", {
              className: (0, U.default)(Q.cell, Q.cell__rank),
              children: [
                (0, M.jsx)(j, { rank: c, size: g.x22, seasonName: n, className: Q.rankEmblem }),
                (0, M.jsx)("div", { className: Q.rankName, children: w(c) }),
              ],
            }),
            (0, M.jsx)(O, { itemIndex: e }),
          ],
        }),
        s && (0, M.jsx)("div", { className: Q.divider }),
      ],
    });
  }),
  q = "Table_24abbb5a",
  z = h(({ className: e }) => {
    const { model: a } = S(),
      s = a.items.get().length - 1;
    return (0, M.jsxs)("div", {
      className: (0, U.default)(q, e),
      children: [
        (0, M.jsx)(P, {}),
        b(a.items.get().length, (e) => (0, M.jsx)(W, { itemIndex: e, hasDivider: e < s }, e)),
      ],
    });
  }),
  V = "App_98200e88",
  G = "App_timer_c376641d",
  J = "App_timer__active_d318a2be",
  K = "App_container_ec045390",
  X = "App_left_65fdd847",
  Y = "App_right_9365ab5f",
  Z = "App_divider_38d98f1f",
  ee = "App_rankEmblem_748380a",
  ae = "App_rankInfo_11560edd",
  se = "App_score_45b617db",
  te = "App_rankText_edc4b160",
  ne = "App_division_aae1175d",
  ie = "App_table_a2ca34a1",
  ce = h(() => {
    const { model: e } = S(),
      {
        seasonName: a,
        currentItemIndex: s,
        currentScore: t,
        rankInactivityCount: n,
      } = e.root.get(),
      i = e.computes.item(s),
      c = e.computes.currentDivision(),
      r = I(i.rank),
      o = y(i.rank) + (r ? `${R.strings.common.common.dot()} ` : "");
    return (0, M.jsxs)("div", {
      className: V,
      children: [
        (0, M.jsx)("div", { className: (0, U.default)(G, i.hasRankInactivity && n <= 3 && J) }),
        (0, M.jsxs)("div", {
          className: K,
          children: [
            (0, M.jsxs)("div", {
              className: X,
              children: [
                (0, M.jsx)(j, {
                  rank: i.rank,
                  size: g.x150,
                  seasonName: a,
                  division: c.name,
                  className: ee,
                }),
                (0, M.jsxs)("div", {
                  className: ae,
                  children: [
                    (0, M.jsx)("div", { className: se, children: (0, M.jsx)(v, { value: t }) }),
                    (0, M.jsxs)("div", {
                      className: te,
                      children: [
                        (0, M.jsx)("div", { children: o }),
                        r && c.name && (0, M.jsx)("div", { className: ne, children: T(c.name) }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
            (0, M.jsx)("div", { className: Z }),
            (0, M.jsx)("div", { className: Y, children: (0, M.jsx)($, {}) }),
          ],
        }),
        (0, M.jsx)(z, { className: ie }),
      ],
    });
  });
_((0, M.jsx)(H, { children: (0, M.jsx)(B, { children: (0, M.jsx)(ce, {}) }) }));
