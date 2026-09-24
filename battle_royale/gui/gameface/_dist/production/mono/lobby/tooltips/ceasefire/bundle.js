import {
  Bt as e,
  Gt as s,
  H as a,
  Nn as r,
  Ut as t,
  g as i,
  h as l,
  jr as c,
  ni as d,
  p as n,
  t as p,
  zt as o,
} from "../../chunks/lib.js";
import "../../chunks/globals.js";
import { i as h } from "../../chunks/vendor.js";
import { i as m, n as u } from "../../chunks/model.js";
var j = l({ alertType: n(m), battleSchedule: u }),
  [_, b] = s()((e) => {
    const s = e.observableModel.primitives(["params", "type"]);
    return {
      type: s.type,
      computes: {
        params: t.primitive(() => {
          try {
            return i(j, JSON.parse(s.params.get()));
          } catch (e) {
            return (console.error(e), { alertType: m.None, battleSchedule: [] });
          }
        }),
      },
    };
  }, c);
function x() {
  return b().model.computes.params();
}
var v = {
    base: "App_b217f952",
    header: "App_header_7064cb34",
    description: "App_description_254da56e",
    battleSchedule: "App_battleSchedule_c84dc551",
    scheduleIcon: "App_scheduleIcon_f2261e5a",
    scheduleContainer: "App_scheduleContainer_2cf619f6",
    scheduleTitle: "App_scheduleTitle_bc482b99",
    periodsContainer: "App_periodsContainer_3e673754",
    periodList: "App_periodList_72a48a31",
    period: "App_period_b93939b2",
    goal: "App_goal_d5b93517",
  },
  f = r(),
  N = d.resolve("strings"),
  y = R.strings.battle_royale.ceasefire,
  A = h(function () {
    const { battleSchedule: e } = x();
    return (0, f.jsxs)("div", {
      className: v.battleSchedule,
      children: [
        (0, f.jsx)("div", { className: v.scheduleIcon }),
        (0, f.jsxs)("div", {
          className: v.scheduleContainer,
          children: [
            (0, f.jsx)("div", { className: v.scheduleTitle, children: y.header.schedule() }),
            e.map(({ goal: e, periods: s }, r) =>
              (0, f.jsxs)(
                "div",
                {
                  className: v.periodsContainer,
                  children: [
                    (0, f.jsx)("div", {
                      className: v.periodList,
                      children: s.map(([e, s], r) =>
                        (0, f.jsx)(
                          a,
                          {
                            text: y.template.schedule(),
                            params: { start: e, end: s },
                            className: v.period,
                          },
                          `${r}-${e}-${s}`,
                        ),
                      ),
                    }),
                    (0, f.jsx)("div", { className: v.goal, children: e }),
                  ],
                },
                e + r,
              ),
            ),
          ],
        }),
      ],
    });
  }),
  C = h(function () {
    const { alertType: e } = x(),
      s = e === m.CeasefireAllServers || e === m.CeasefireCurrentServer;
    return (0, f.jsx)(p, {
      children: (0, f.jsx)(p.Decorator, {
        children: (0, f.jsxs)("div", {
          className: v.base,
          children: [
            (0, f.jsxs)("div", {
              className: v.headerContainer,
              children: [
                (0, f.jsx)("div", {
                  className: v.header,
                  children: N.readOrEmpty(`battle_royale.ceasefire.header.${e}`),
                }),
                (0, f.jsx)("div", {
                  className: v.description,
                  children: (0, f.jsx)(a, {
                    text: N.readOrEmpty(`battle_royale.ceasefire.text.${e}`),
                    split: !0,
                  }),
                }),
              ],
            }),
            s && (0, f.jsx)(A, {}),
          ],
        }),
      }),
    });
  });
e((0, f.jsx)(o, { children: (0, f.jsx)(_, { children: (0, f.jsx)(C, {}) }) }));
