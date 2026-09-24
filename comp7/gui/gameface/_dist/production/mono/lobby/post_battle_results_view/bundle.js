import { r as e } from "../chunks/rolldown-runtime.js";
import {
  $ as a,
  $a as t,
  $i as s,
  $o as r,
  $r as n,
  Ai as i,
  Bi as l,
  Bo as o,
  C as c,
  Ct as d,
  Ds as m,
  Ea as u,
  Er as _,
  Es as f,
  Fr as p,
  Gn as b,
  Gr as h,
  Ha as v,
  Ht as g,
  Ia as y,
  It as x,
  Ji as N,
  Jo as j,
  K as I,
  Ki as w,
  Kr as A,
  Kt as C,
  Lo as B,
  Mi as S,
  Mo as P,
  Na as k,
  Ni as T,
  Oa as E,
  On as D,
  Pa as H,
  Pi as O,
  Q as V,
  Qi as z,
  Qo as W,
  Ra as M,
  Ri as G,
  S as $,
  Si as U,
  So as L,
  Sr as X,
  Ss as F,
  St as K,
  Ti as q,
  Tr as Q,
  Ts as Y,
  U as Z,
  Ui as J,
  Un as ee,
  Uo as ae,
  Vr as te,
  W as se,
  Wa as re,
  Wn as ne,
  Wr as ie,
  Xi as le,
  Xn as oe,
  Xr as ce,
  Yi as de,
  Yo as me,
  Yr as ue,
  _ as _e,
  _i as fe,
  ai as pe,
  ao as be,
  ar as he,
  b as ve,
  ba as ge,
  bi as ye,
  bo as xe,
  br as Ne,
  c as je,
  ci as Ie,
  cn as we,
  d as Ae,
  da as Ce,
  di as Be,
  ei as Se,
  eo as Pe,
  es as Re,
  f as ke,
  fi as Te,
  fn as Ee,
  g as De,
  ga as He,
  go as Oe,
  h as Ve,
  hi as ze,
  ho as We,
  ia as Me,
  ii as Ge,
  ji as $e,
  jn as Ue,
  ka as Le,
  ki as Xe,
  ko as Fe,
  l as Ke,
  la as qe,
  lr as Qe,
  m as Ye,
  no as Ze,
  o as Je,
  p as ea,
  pi as aa,
  pn as ta,
  pr as sa,
  qn as ra,
  qr as na,
  qt as ia,
  ro as la,
  rs as oa,
  s as ca,
  si as da,
  ss as ma,
  ta as ua,
  ti as _a,
  u as fa,
  ui as pa,
  ur as ba,
  v as ha,
  va,
  w as ga,
  wo as ya,
  ws as xa,
  x as Na,
  xr as ja,
  xs as Ia,
  y as wa,
  yr as Aa,
  za as Ca,
  zi as Ba,
} from "../chunks/lib.js";
import "../chunks/_wg-global-styles.js";
import {
  _ as Sa,
  a as Pa,
  c as Ra,
  d as ka,
  f as Ta,
  g as Ea,
  h as Da,
  i as Ha,
  l as Oa,
  m as Va,
  n as za,
  o as Wa,
  p as Ma,
  r as Ga,
  s as $a,
  t as Ua,
  u as La,
  v as Xa,
} from "../chunks/common.js";
import { a as Fa, i as Ka, r as qa } from "../chunks/vendor.js";
/* empty css               */ import { n as Qa, t as Ya } from "../chunks/schedule_model.js";
import { r as Za } from "../chunks/enums.js";
import { i as Ja, o as et, t as at } from "../chunks/rank_emblem.js";
import { t as tt } from "../chunks/get_division_name.js";
import { n as st, r as rt } from "../chunks/get_rank_name.js";
import { t as nt } from "../chunks/qualification_emblem.js";
import { n as it, t as lt } from "../chunks/get_division_points_step.js";
var ot = e(xa()),
  ct = "BattleInfo_6333ab61",
  dt = "BattleInfo_group_161b6f97",
  mt = "BattleInfo_textString_835b074b",
  ut = "BattleInfo_group__teamKiller_78068d1",
  _t = "BattleInfo_killerAccount_3b86f16c",
  ft = "BattleInfo_vehicleName_d69bd77c",
  pt = "BattleInfo_commendations_731c9f38",
  bt = "BattleInfo_commendations_counter_aef426",
  ht = "BattleInfo_commendations_icon_55a703a8",
  vt = e(H()),
  gt = [1, 19],
  yt = [1, 10],
  xt = ({ className: e, finishReasonKey: a, status: t, modeName: s, arenaType: r, ...n }) => {
    const i = `battle_results.finish.reason.c_${a}${yt.includes(a) ? t : ""}`,
      l = gt.includes(r) ? `arenas.type.${s}.name` : `menu.loading.battleTypes.c_${r}`;
    return (0, vt.jsx)(Q, {
      ...n,
      upgradeLegacy: !0,
      path: "battle_results.common.arena.fullName",
      params: { 0: (0, vt.jsx)(Q, { path: l }), 1: (0, vt.jsx)(Q, { path: i }) },
      className: F(dt, e),
    });
  };
var Nt = m.resolve("strings");
var jt = (0, ot.forwardRef)(function (e, a) {
  return (0, vt.jsx)("div", {
    ...e,
    "data-name": "BattleInfo",
    ref: a,
    className: F(ct, e.className),
  });
});
((jt.Arena = function ({ arenaName: e, className: a, ...t }) {
  return (0, vt.jsx)(Q, {
    className: F(dt, a),
    path: "battle_results.common.arena.nameAndMode",
    params: { 0: e, 1: (0, vt.jsx)(xt, { ...t }) },
  });
}),
  (jt.StartTime = ({ startTime: e, className: a, ...t }) =>
    (0, vt.jsx)(Q, {
      ...t,
      className: F(dt, a),
      path: "battle_results.common.startTime",
      params: { 0: Y.formatDateTime(f.ShortDate, e), 1: Y.formatDateTime(f.ShortTime, e) },
    })),
  (jt.Player = function ({
    className: e,
    vehicleLevel: a,
    vehicleType: t,
    vehicleName: s,
    userName: r,
    clan: n,
    teamKiller: i,
    vehicleTypeSize: l = D.sizes.x24x24,
    classNames: o,
    ...c
  }) {
    return (0, vt.jsx)(Q, {
      ...c,
      upgradeLegacy: !0,
      className: F(dt, i && ut, e),
      path: "battle_results.common.arena.fullName",
      params: {
        0: n
          ? (0, vt.jsx)(Q, {
              className: _t,
              path: "battle_results.common.player.nameWithClan",
              params: { name: r, clan: n },
            })
          : (0, vt.jsx)("span", { className: _t, children: r }),
        1: (0, vt.jsxs)("div", {
          className: F(ft, o?.vehicleName),
          children: [
            (0, vt.jsx)(Ue, { value: a, className: F(mt, o?.vehicleLevel) }),
            (0, vt.jsx)(D, { className: o?.vehicleType, type: t, size: l }),
            s,
          ],
        }),
      },
    });
  }),
  (jt.PlayerStatus = function ({
    className: e,
    deathReasonKey: a,
    killer: t,
    abandonBattle: s,
    ...r
  }) {
    const n = (function ({ deathReasonKey: e, abandonBattle: a }) {
      return a ? "prematureLeave" : -1 === e ? "alive" : `dead${e}`;
    })({ deathReasonKey: a, abandonBattle: s });
    if (
      (t.username || t.fakeUsername) &&
      !s &&
      -1 !== a &&
      (function (e) {
        return Boolean(Nt.read(`battle_results.common.vehicleState.${e}_with_killername`));
      })(n)
    ) {
      const a = t.anonymizer ? t.fakeUsername : t.username;
      return (0, vt.jsx)(Q, {
        ...r,
        className: F(dt, t.teamKiller && ut, e),
        path: `battle_results.common.vehicleState.${n}_with_killername`,
        params: {
          killername: t.clanAbbreviation
            ? (0, vt.jsx)(Q, {
                className: _t,
                path: "battle_results.common.player.nameWithClan",
                params: { name: a, clan: t.clanAbbreviation },
              })
            : (0, vt.jsx)("span", { className: _t, children: a }),
        },
      });
    }
    return (0, vt.jsx)(Q, {
      ...r,
      className: F(dt, e),
      path: `battle_results.common.vehicleState.${n}`,
    });
  }),
  (jt.CommendationScore = function ({ commendationsReceived: e }) {
    const a = e > 0,
      t = m.resolve("strings"),
      s =
        1 === e
          ? "battle_results.comms.likes.pbs.tooltip.bodySingle"
          : "battle_results.comms.likes.pbs.tooltip.body",
      r = S({
        header: t.readOrEmpty("battle_results.comms.likes.pbs.tooltip.header"),
        body: t.readOrEmpty(s).replace("{{var}}", e.toString()),
      });
    return a
      ? (0, vt.jsxs)("div", {
          ...r,
          className: F(dt, pt),
          children: [
            (0, vt.jsx)("div", { className: bt, children: e }),
            (0, vt.jsx)("div", { className: ht }),
          ],
        })
      : null;
  }));
var It = "AnimatedValue_d9f4b2f0",
  wt = "AnimatedValue_animatedValue_4c490d83",
  At = Ia.cubicBezier(0.33, 0, 0.25, 1);
function Ct(e) {
  return {
    enterElements: document.querySelectorAll(`.js-animated-value-${e}-enter`),
    leftElements: document.querySelectorAll(`.js-animated-value-${e}-leave`),
  };
}
function Bt({ value: e, transition: a, children: t, className: r, classNames: n }) {
  const i = (0, ot.useMemo)(Sa, []),
    l = s(e, {
      ...a,
      initial: { opacity: 1, y: "0rem", ...a?.initial },
      from: { opacity: 0, y: "-5rem", ...a?.from },
      enter: () => ({
        opacity: 1,
        y: "0rem",
        delay: 330,
        config: { easing: At, duration: 330 },
        onStart: () => {
          const { enterElements: e, leftElements: a } = Ct(i);
          (e.forEach((e) => {
            e instanceof HTMLElement && ((e.style.width = "auto"), (e.style.position = "relative"));
          }),
            a.forEach((e) => {
              e instanceof HTMLElement && (e.style.position = "absolute");
            }));
        },
        ...a?.enter,
      }),
      leave: () => ({
        top: 0,
        left: 0,
        opacity: 0,
        y: "5rem",
        config: { easing: At, duration: 330 },
        onStart: () => {
          let e = 0;
          const { enterElements: a, leftElements: t } = Ct(i);
          (t.forEach((a) => {
            a instanceof HTMLElement &&
              ((e = Math.max(e, a.offsetWidth)), (a.style.position = "relative"));
          }),
            a.forEach((a) => {
              a instanceof HTMLElement &&
                ((a.style.width = `${e}px`), (a.style.position = "absolute"));
            }));
        },
        ...a?.leave,
      }),
    });
  return (0, vt.jsx)("div", {
    className: F(It, r),
    children: l((a, s) => {
      const r = 0 === a.opacity.get() && !1 === a.opacity.isAnimating;
      return (0, vt.jsx)(w.div, {
        className: F(wt, `js-animated-value-${i}-${e === s ? "enter" : "leave"}`, n?.animatedValue),
        style: { ...a, position: r ? "absolute" : "relative" },
        children: t(s),
      });
    }),
  });
}
var St = { idle: "idle", progress: "progress", waiting: "waiting" },
  Pt = (0, ot.createContext)(null);
function Rt({ read: e, shownNotificationSize: a, bubbleCounter: t, notification: s }) {
  return void 0 === s ? t : e || 0 === a ? 1 : t + 1;
}
function kt() {
  const e = (0, ot.useContext)(Pt);
  if (null === e)
    throw new Error(
      "You can use the notifications context hooks only with the NotificationsProvider component",
    );
  return e;
}
var Tt = {
    valueContainer: "Bubble_valueContainer_8b7ced74",
    valueContainer__medium: "Bubble_valueContainer__medium_a9175d93",
    value: "Bubble_value_5eacd6f5",
    value__medium: "Bubble_value__medium_3232d6e8",
    fadeIn: "Bubble_fadeIn_fdf0621f",
    fadeInThreeQuarters: "Bubble_fadeInThreeQuarters_fdf0621f",
    fadeInHalf: "Bubble_fadeInHalf_fdf0621f",
    fadeOut: "Bubble_fadeOut_fdf0621f",
    fadeInWithScale: "Bubble_fadeInWithScale_fdf0621f",
    slideUp: "Bubble_slideUp_fdf0621f",
    scale: "Bubble_scale_fdf0621f",
    raysAppearance: "Bubble_raysAppearance_fdf0621f",
    rotate: "Bubble_rotate_fdf0621f",
    "reverse-rotate": "Bubble_reverse-rotate_fdf0621f",
    glowAppearance: "Bubble_glowAppearance_fdf0621f",
    highlightAppearance: "Bubble_highlightAppearance_fdf0621f",
    blink: "Bubble_blink_fdf0621f",
    slideUpIn: "Bubble_slideUpIn_fdf0621f",
  },
  Et = Ia.cubicBezier(0.75, 0, 0.67, 1),
  Dt = Ia.cubicBezier(0.33, 0, 0.25, 1);
function Ht(e, a) {
  return "number" == typeof e
    ? (function (e, a) {
        return e > a
          ? (0, vt.jsx)(Q, {
              path: "common.valuePlus",
              params: { value: Y.formatNumber("integral", a) },
            })
          : Y.formatNumber("integral", e);
      })(e, a)
    : e;
}
var Ot = (0, ot.memo)(function ({ size: e, className: a, classNames: t, target: s, ...r }) {
    const { state: n, items: i } = kt(),
      l = q(),
      o = n.value === St.progress || (n.value === St.waiting && !1 === n.read),
      d = E({ value: ga.small }, { medium: { value: ga.medium } }),
      m = (0, ot.useMemo)(
        () => ({
          ...r?.rootTransition,
          initial: { opacity: 0, y: "-5rem", ...r?.rootTransition?.initial },
          from: { opacity: 0, y: "-5rem", ...r?.rootTransition?.from },
          enter: {
            opacity: 1,
            y: "0",
            delay: 0,
            config: { easing: Et, duration: 330 },
            onRest: () => {
              o && l.play("notificationBubbleAppeared", { target: s || "mission-progress:bubble" });
            },
            ...r.rootTransition?.enter,
          },
          leave: { opacity: 0, y: "0", delay: 0, config: { duration: 330, easings: Dt } },
        }),
        [s, r.rootTransition, l, o],
      ),
      u = (0, ot.useMemo)(
        () => ({
          ...r?.countTransition,
          initial: { opacity: 1, y: "0", ...r?.countTransition?.initial },
          from: { opacity: 0, y: "-5rem" },
          enter: {
            opacity: 1,
            y: "0",
            config: { easing: Dt, duration: 170 },
            delay: 170,
            onRest: () => {
              l.play("notificationBubbleAppeared", { target: s || "mission-progress:bubble" });
            },
            ...r?.countTransition?.enter,
          },
          leave: {
            opacity: 0,
            y: "5rem",
            delay: 0,
            config: { easing: Dt, duration: 170 },
            ...r?.countTransition?.leave,
          },
        }),
        [r.countTransition, l, s],
      );
    return (0, vt.jsx)(Bt, {
      value: o,
      transition: m,
      className: a,
      children: (a) =>
        a &&
        (0, vt.jsx)(c.Root, {
          children: (0, vt.jsx)("div", {
            className: F(
              Tt.valueContainer,
              Tt[`valueContainer__${e ?? d.value}`],
              t?.valueContainer,
            ),
            children: (0, vt.jsx)(Bt, {
              value: n.bubbleCounter >= i.length ? i.length : n.bubbleCounter,
              transition: u,
              children: (a) =>
                (0, vt.jsx)("div", {
                  className: F(Tt.value, Tt[`value__${e ?? d.value}`], t?.value),
                  children: Ht(a, 99),
                }),
            }),
          }),
        }),
    });
  }),
  Vt = "Items_9477a756",
  zt = "Items_animatedValue_c7d2e119",
  Wt = "Items_plug_a7a8cadf",
  Mt = Ia.cubicBezier(0.75, 0, 0.67, 1),
  Gt = Ia.cubicBezier(0.1, 0, 0.9, 1),
  $t = Ia.cubicBezier(0.33, 0, 0.25, 1),
  Ut = Ie("NotificationItem", Vt),
  Lt = (0, ot.memo)(function ({ transition: e, ...a }) {
    const { items: t, state: r } = kt(),
      n = s(r.currentNotification, {
        ...e,
        key: r.currentNotification,
        initial: { opacity: 0, y: "-5rem", x: "-50%", ...e?.initial },
        from: { opacity: 0, y: "-5rem", x: "-50%", ...e?.from },
        enter: [
          { opacity: 1, y: "0", x: "-50%", config: { easing: Mt, duration: 330 }, ...e?.enter },
          { y: "2rem", x: "-50%", opacity: 1, config: { duration: 800, easing: Gt } },
        ],
        leave: {
          y: r.value === St.idle ? "0" : "5rem",
          x: "-50%",
          opacity: 0,
          config: {
            duration: r.value === St.idle ? 330 : 170,
            easing: r.value === St.idle ? $t : Mt,
          },
        },
      });
    return (0, vt.jsxs)(Ut, {
      ...a,
      children: [
        (0, vt.jsx)("div", {
          className: Wt,
          children: r.currentNotification || t[t.length - 1]?.item,
        }),
        n((e, a) => (0, vt.jsx)(w.div, { className: zt, style: e, children: a })),
      ],
    });
  }),
  Xt = {
    states: St,
    Bubble: Ot,
    Items: Lt,
    Provider: function ({ items: e, children: a }) {
      const [s, r] = (0, ot.useState)(() => ({
          read: !1,
          value: St.idle,
          bubbleCounter: 1,
          currentNotification: void 0,
          shownNotifications: new Set(),
        })),
        n = (0, ot.useMemo)(
          () => e.some(({ id: e }) => !1 === s.shownNotifications.has(e)),
          [e, s.shownNotifications],
        );
      Ce(
        () => {
          r((a) => {
            const s = e.find(({ id: e }) => !1 === a.shownNotifications.has(e));
            return {
              ...a,
              read: !1,
              currentNotification: s?.item,
              shownNotifications:
                void 0 !== s ? t(a.shownNotifications, s.id) : a.shownNotifications,
              bubbleCounter: void 0 !== s ? a.bubbleCounter + 1 : a.bubbleCounter,
            };
          });
        },
        s.value === St.progress && void 0 !== s.currentNotification ? 1130 : void 0,
      );
      const i = (0, ot.useMemo)(
        () => ({
          start() {
            r((a) => {
              if (a.value === St.progress || 0 === e.length) return a;
              const s = e.find(({ id: e }) => !1 === a.shownNotifications.has(e));
              return {
                ...a,
                read: !1,
                currentNotification: s?.item,
                shownNotifications:
                  void 0 !== s ? t(a.shownNotifications, s.id) : a.shownNotifications,
                value: St.progress,
                bubbleCounter: Rt({
                  notification: s,
                  read: a.read,
                  shownNotificationSize: a.shownNotifications.size,
                  bubbleCounter: a.bubbleCounter,
                }),
              };
            });
          },
          read() {
            r((a) => ({
              ...a,
              value: St.idle,
              read: !0,
              currentNotification: void 0,
              shownNotifications: new Set(e.map((e) => e.id)),
            }));
          },
          wait() {
            r((e) =>
              e.value === St.waiting ? e : { ...e, value: St.waiting, currentNotification: void 0 },
            );
          },
        }),
        [e],
      );
      ((0, ot.useEffect)(() => {
        s.value === St.waiting && n && i.start();
      }, [i, s.value, n]),
        (0, ot.useEffect)(() => {
          void 0 === s.currentNotification && s.value === St.progress && !1 === n && i.wait();
        }, [s.currentNotification, s.value, i, n]));
      const l = (0, ot.useMemo)(
        () => ({ state: s, items: e, controls: i, hasUnreadNotifications: n }),
        [e, s, i, n],
      );
      return (0, vt.jsx)(Pt.Provider, { value: l, children: a });
    },
  },
  Ft = {
    initial: "initial",
    navigation: "navigation",
    battleStatus: "battleStatus",
    progressBarDelta: "progressBarDelta",
    first: "first",
    second: "second",
    third: "third",
    fourth: "fourth",
    fifth: "fifth",
    sixth: "sixth",
    immediate: "immediate",
  },
  Kt = Ia.cubicBezier(0.33, 0, 0.25, 1),
  qt = (0, ot.createContext)(null);
function Qt() {
  const e = (0, ot.useContext)(qt);
  if (null === e)
    throw new Error(
      "You can use the animation context hooks only with the AnimationProvider component",
    );
  return e;
}
function Yt({ children: e, hasProgressAnimation: a }) {
  const [s, r] = (0, ot.useState)(Ft.initial),
    [n, i] = (0, ot.useState)(new Set()),
    [l, o] = (0, ot.useState)(!1),
    [c, d] = (0, ot.useState)(!1),
    m = G(),
    u = q(),
    { active: _ } = I(),
    f = le(),
    p = le(),
    b = le(),
    h = le(),
    v = le(),
    g = le(),
    y = le(),
    x = le(),
    N = le(),
    j = (0, ot.useCallback)(
      function (e) {
        r(e);
      },
      [r],
    );
  ((0, ot.useEffect)(() => {
    s === Ft.immediate && i(new Set(Object.values(Ft)));
  }, [s]),
    (0, ot.useEffect)(() => {
      switch (s) {
        case Ft.immediate:
          return (
            f.start({ y: "0", opacity: 1, immediate: !0 }),
            p.start({ opacity: 1, y: "0", immediate: !0 }),
            b.start({ maskSize: "100% 100%", immediate: !0 }),
            h.start({ opacity: 1, y: "0", immediate: !0 }),
            v.start({ opacity: 1, y: "0", immediate: !0 }),
            g.start({ opacity: 1, immediate: !0 }),
            x.start({ maskSize: "100% 100%", immediate: !0 }),
            N.start({ opacity: 1, immediate: !0 }),
            void y.start({ opacity: 1, immediate: !0 })
          );
        case Ft.initial:
          return (
            u.play("showBattleResult", { target: "animation-context" }),
            void r(_ === Xa.overview ? Ft.navigation : Ft.immediate)
          );
        case Ft.navigation:
          return void f.start({
            y: "0",
            opacity: 1,
            config: { duration: 400, easing: Kt },
            onRest: () => {
              (r(Ft.battleStatus), i((e) => t(e, Ft.navigation)));
            },
          });
        case Ft.battleStatus:
          return void p.start({
            opacity: 1,
            y: "0",
            config: { duration: 800, easing: Kt },
            onRest: () => {
              (r(a ? Ft.progressBarDelta : Ft.first), i((e) => t(e, Ft.battleStatus)));
            },
          });
        case Ft.progressBarDelta:
          return void m.run(() => {
            (r(Ft.first), i((e) => t(e, Ft.progressBarDelta)));
          }, 1300);
        case Ft.first:
          return (r(Ft.second), void i((e) => t(e, Ft.first)));
        case Ft.second:
          return (
            b.start({
              maskSize: "100% 100%",
              config: { duration: 400, easing: Kt },
              onRest: () => {
                i((e) => t(e, Ft.second));
              },
            }),
            void m.run(() => {
              (r(Ft.third), m.clear());
            }, 280)
          );
        case Ft.third:
          return (
            h.start({ opacity: 1, y: "0", config: { duration: 400, easing: Kt } }),
            v.start({ opacity: 1, y: "0", config: { duration: 400, easing: Kt } }),
            g.start({
              opacity: 1,
              config: { duration: 400, easing: Kt },
              onRest: () => {
                i((e) => t(e, Ft.third));
              },
            }),
            void m.run(() => {
              (r(Ft.fourth), m.clear());
            }, 280)
          );
        case Ft.fourth:
          return (
            x.start({
              maskSize: "100% 100%",
              config: { duration: 400, easing: Kt },
              onRest: () => {
                i((e) => t(e, Ft.fourth));
              },
            }),
            void m.run(() => {
              (r(Ft.fifth), m.clear());
            }, 120)
          );
        case Ft.fifth:
          (N.start({ opacity: 1, config: { duration: 400, easing: Kt } }),
            y.start({
              opacity: 1,
              config: { duration: 400, easing: Kt },
              onRest: () => {
                i((e) => t(e, Ft.fifth));
              },
            }));
          break;
        default:
          return;
      }
    }, [_, s, u, m, y, j, n, a]));
  const w = (0, ot.useMemo)(
    () => ({
      hasProgressAnimation: a,
      step: s,
      handleStep: j,
      completedSteps: n,
      allMedalsAnimated: l,
      bonusRef: v,
      hintKeyRef: g,
      dividerRef: b,
      battleInfoRef: y,
      navigationRef: f,
      battleStatusRef: p,
      overlayDividerRef: x,
      earnedCurrenciesRef: h,
      personalEfficiencyRef: N,
      setAllMedalsAnimated: o,
      setAllCurrenciesAniamted: d,
      readyForNotifications: l && c && n.has(Ft.fifth),
    }),
    [a, s, j, l, c, n],
  );
  return (0, vt.jsx)(qt.Provider, { value: w, children: e });
}
var Zt = "BattleInfo_group_161b6f97",
  Jt = [1, 19],
  es = ({ className: e, finishReasonKey: a, status: t, modeName: s, arenaType: r, ...n }) => {
    const i = `battle_results.finish.reason.c_${a}${t}`,
      l = Jt.includes(r) ? `arenas.type.${s}.name` : `menu.loading.battleTypes.c_${r}`;
    return (0, vt.jsx)(Q, {
      ...n,
      upgradeLegacy: !0,
      path: "battle_results.common.arena.fullName",
      params: { 0: (0, vt.jsx)(Q, { path: l }), 1: (0, vt.jsx)(Q, { path: i }) },
      className: F(Zt, e),
    });
  };
function as({ arenaName: e, className: a, ...t }) {
  return (0, vt.jsx)(Q, {
    className: F(Zt, a),
    path: "battle_results.common.arena.nameAndMode",
    params: { 0: e, 1: (0, vt.jsx)(es, { ...t }) },
  });
}
var ts = "Divider_80a19f4b";
function ss({ classNames: e }) {
  return (0, vt.jsx)("div", {
    className: F(ts, e?.base),
    children: (0, vt.jsx)(Aa, {
      className: e?.image,
      width: "100%",
      height: "100%",
      path: "post_battle.row_divider",
      fit: "cover",
    }),
  });
}
var rs = "Header_content_b9e0be90",
  ns = "Header_title_91e5448a",
  is = "Header_divider_eb019c6",
  ls = "Header_dividerImage_19f6e11",
  os = Ie("Header", "Header_70aa1da5"),
  cs = (0, ot.forwardRef)(({ title: e, children: a, classNames: t, ...s }, r) => {
    const n = m.resolve("strings");
    return (0, vt.jsxs)(os, {
      ...s,
      ref: r,
      children: [
        (0, vt.jsxs)("div", {
          className: F(rs, t?.content),
          children: [
            (0, vt.jsx)("div", {
              className: F(ns, t?.title),
              children: Y.toUpperCase(n.readOrEmpty(e)),
            }),
            a,
          ],
        }),
        (0, vt.jsx)(ss, { classNames: { base: F(is, t?.divider), image: ls } }),
      ],
    });
  }),
  ds = (0, ot.forwardRef)((e, a) =>
    (0, vt.jsx)(cs, { ...e, title: "battle_results.details.xp", ref: a }),
  ),
  ms = (e) => {
    const [a, t] = (0, ot.useState)(!1);
    return (
      (0, ot.useEffect)(() => {
        const a = () => {
            const [a, s] = e.getBounds(),
              r = e.animationScroll.scrollPosition.get(),
              n = e.contentRef.current;
            if (n) {
              if (0 === s) return ((n.style.mask = "none"), void t(!0));
              const e = (r / s) * 10;
              ((n.style.mask = `linear-gradient(to bottom, transparent 0%, rgba(0, 0, 0, 1) ${e}%, rgba(0, 0, 0, 1) ${90 + e}%, transparent 100%)`),
                t(!0));
            }
          },
          s = e.events.on("change", a),
          r = e.events.on("resizeHandled", a),
          n = e.events.on("recalculateContent", a);
        return (
          a(),
          () => {
            (s(), r(), n());
          }
        );
      }, [e]),
      a
    );
  },
  us = "IncomeStatement_c4136bc5",
  _s = "IncomeStatement_verticalBar_5fb90511",
  fs = "IncomeStatement_scrollWrapper_ce2dde41",
  ps = "IncomeStatement_scrollContent_31153602",
  bs = "IncomeStatement_scrollContent__initialized_ce1144d0",
  hs = Ie("CreditsIncomeStatement"),
  vs = ({ children: e }) => {
    const a = ms(oe().api);
    return (0, vt.jsx)(ne, { classNames: { wrapper: fs, content: F(ps, a && bs) }, children: e });
  },
  gs = (0, ot.forwardRef)(({ children: e, className: a, scrollable: t, ...s }, r) =>
    (0, vt.jsx)(hs, {
      className: F(us, a),
      ...s,
      ref: r,
      children: t
        ? (0, vt.jsxs)(ee, {
            children: [
              (0, vt.jsx)(vs, { children: e }),
              (0, vt.jsx)(ra, { classNames: { base: _s } }),
            ],
          })
        : e,
    }),
  ),
  ys = "freeXP",
  xs = "credits",
  Ns = "gold",
  js = "originalCrystals",
  Is = "eventCrystals",
  ws = "autoEquipCrystals",
  As = "totalCrystals",
  Cs = "originalXP",
  Bs = "achievementXP",
  Ss = "originalXPPenalty",
  Ps = "igrBonusXP",
  Rs = "firstWinXP",
  ks = "additionalBonusXP",
  Ts = "boostersXP",
  Es = "tacticalTrainingXP",
  Ds = "holidayOpsXP",
  Hs = "eventXP",
  Os = "referralBonusXP",
  Vs = "premiumVehicleXP",
  zs = "squadBonusXP",
  Ws = "squadPenaltyXP",
  Ms = "wotPlusBonusXP",
  Gs = "wotPlusProBoostXP",
  $s = "totalXP",
  Us = "originalFreeXP",
  Ls = "achievementFreeXP",
  Xs = "igrBonusFreeXP",
  Fs = "firstWinFreeXP",
  Ks = "additionalBonusFreeXP",
  qs = "boostersFreeXP",
  Qs = "militaryManeuversFreeXP",
  Ys = "holidayOpsFreeXP",
  Zs = "eventFreeXP",
  Js = "premiumVehicleFreeXP",
  er = "wotPlusBonusFreeXP",
  ar = "wotPlusProBoostFreeXP",
  tr = "totalFreeXP",
  sr = "baseEarnedCredits",
  rr = "squadBonusCredits",
  nr = "achievementCredits",
  ir = "boostersCredits",
  lr = "petSystemBonusCredits",
  or = "battlePaymentsCredits",
  cr = "eventPaymentsCredits",
  dr = "referralBonusCredits",
  mr = "holidayOpsCredits",
  ur = "wotPlusBonusCredits",
  _r = "wotPlusProBoostCredits",
  fr = "friendlyFirePenaltyCredits",
  pr = "friendlyFireCompensationCredits",
  br = "piggyBankCredits",
  hr = "autoRepairCredits",
  vr = "autoLoadCredits",
  gr = "autoEquipCredits",
  yr = "intermediateTotalCredits",
  xr = "totalCredits",
  Nr = "goldEventPayments",
  jr = "goldPiggyBank",
  Ir = "intermediateTotalGold",
  wr = "totalGold",
  Ar = "aogasFactor",
  Cr = "deserterViolation",
  Br = "afkViolation",
  Sr = "suicideViolation",
  Pr = new Set([Ss, Os, zs, Ws, Es]),
  Rr = new Set([Qs]),
  kr = new Set([sr, rr, nr, ir, or, dr, lr, mr, ur, _r, Cr, Sr, Br, fr, pr, Ar, hr, vr, gr]),
  Tr = {
    [Bs]: Ls,
    [ks]: Ks,
    [Br]: Br,
    [Ar]: Ar,
    [Ts]: qs,
    [Cr]: Cr,
    [Ds]: Ys,
    [Hs]: Zs,
    [Rs]: Fs,
    [Ps]: Xs,
    [Cs]: Us,
    [Vs]: Js,
    [Sr]: Sr,
    [$s]: tr,
    [Ms]: er,
    [Gs]: ar,
  },
  Er = { [cr]: Nr, [yr]: Ir, [br]: jr, [xr]: wr },
  Dr = [js, Is, ws, As],
  Hr = [
    Cs,
    Us,
    Bs,
    Ls,
    Ss,
    Ps,
    Xs,
    Rs,
    Fs,
    ks,
    Ks,
    Ts,
    qs,
    Es,
    Qs,
    Ds,
    Ys,
    Hs,
    Zs,
    Os,
    Vs,
    Js,
    zs,
    Ws,
    Ar,
    Ms,
    er,
    Gs,
    ar,
    Cr,
    Sr,
    Br,
    $s,
    tr,
  ],
  Or = [
    sr,
    rr,
    nr,
    ir,
    lr,
    or,
    cr,
    Nr,
    dr,
    mr,
    ur,
    _r,
    Cr,
    Sr,
    Br,
    fr,
    pr,
    Ar,
    yr,
    Ir,
    hr,
    vr,
    gr,
    xr,
    wr,
    br,
    jr,
  ],
  Vr = new Set([As, Cs, Us, $s, tr, sr, yr, Ir, hr, vr, gr, xr, wr, br, jr]),
  zr = new Set([xr, wr, Ir, yr]),
  Wr = "multiplier",
  Mr = "firstWinMultiplier",
  Gr = "fractionalMultiplier",
  $r = "percent",
  Ur = "plus",
  Lr = {
    [Ps]: Wr,
    [Xs]: Wr,
    [Rs]: Mr,
    [Fs]: Mr,
    [ks]: Wr,
    [Ks]: Wr,
    [Ar]: Gr,
    [Cr]: $r,
    [Sr]: $r,
    [Br]: $r,
    [br]: Ur,
    [jr]: Ur,
  };
function Xr(e) {
  const a = Number(e.trim());
  return Number.isNaN(a)
    ? (console.error(`Invalid referral factor: "${e}" is not a number.`), 0)
    : Math.round(100 * a);
}
function Fr(e) {
  const a = Number(e.trim());
  return Number.isNaN(a) ? (console.error(`Invalid percent bonus: "${a}" is not a number.`), 0) : a;
}
function Kr(e) {
  return Vr.has(e.paramName);
}
function qr(e) {
  return "True" === e?.recordsItemsDetails?.hasAogasFine;
}
function Qr(e) {
  return "True" === e?.recordsItemsDetails?.isEnabled;
}
var Yr = { [Cs]: Kr, [Us]: Kr, [$s]: Kr, [tr]: Kr, [Ar]: qr, [Ms]: Qr, [er]: Qr },
  Zr = {
    [sr]: Kr,
    [yr]: Kr,
    [Ir]: Kr,
    [hr]: Kr,
    [vr]: Kr,
    [gr]: Kr,
    [xr]: Kr,
    [wr]: Kr,
    [Ar]: qr,
    [ur]: Qr,
    [br]: Kr,
  };
function Jr(e) {
  return !1 !== zr.has(e.paramName) && 0 === e.standard.gold && 0 === e.premium.gold;
}
var en = { [yr]: (e) => !1 === Jr(e), [xr]: (e) => !1 === Jr(e), [br]: (e, a) => a },
  an = { xp: "library.xp", [ys]: "library.freeXp", [xs]: "library.credits", [Ns]: "library.gold" },
  tn = [Ar, Cr, Br, Sr];
function sn(e) {
  return "xp" === e ? "library.x2_combatExp" : "library.x2_combatFreeExp";
}
var rn = {
  [Ps]: (e) => "library.x2_combatExp",
  [Xs]: (e) => "library.x2_combatExp",
  [Rs]: sn,
  [Fs]: sn,
  [ks]: sn,
  [Ks]: sn,
};
function nn(e, a) {
  if (void 0 === a || tn.includes(a)) return;
  const t = rn[a];
  return t ? t(e) : an[e];
}
function ln(e, a) {
  return Dr.indexOf(e.paramName) - Dr.indexOf(a.paramName);
}
function on(e, a) {
  return Hr.indexOf(e.paramName) - Hr.indexOf(a.paramName);
}
function cn(e, a) {
  return Or.indexOf(e.paramName) - Or.indexOf(a.paramName);
}
function dn(e) {
  return {
    paramName: e.paramName,
    currencyType: e.currencyType,
    baseValue: e.baseValue,
    premiumValue: e.premiumValue,
    recordsItemsDetails: Fe(
      e.detailedItemRecords,
      (e, a) => ((e[a.itemName] = a.itemValue), e),
      {},
    ),
  };
}
function mn(e, a) {
  const t = [],
    s = [];
  for (const r of e) a(r) ? t.push(r) : s.push(r);
  return [t, s];
}
function un(e, a) {
  const t = ya(e.earned, dn),
    s = ya(e.expenses, dn),
    r = ya(e.total, dn),
    n = [yr, Ir],
    i = [br, jr],
    [l, o] = mn(r, (e) => n.includes(e.paramName)),
    [c, d] = mn([...t, ...l], (e) => i.includes(e.paramName));
  return {
    records: [...d, ...s].sort(a),
    total: ((m = [...o, ...c]),
    m.filter((e) => {
      const a = Boolean(e.premiumValue || e.baseValue),
        t = Vr.has(e.paramName);
      return a || t;
    })).sort(a),
  };
  var m;
}
var _n = (e) => e in Lr;
function fn({ xp: e, freeXp: a }) {
  const t = e?.paramName || a?.paramName;
  la("string" == typeof t, "xp or freeXp paramName is not provided");
  const s = _n(t) ? Lr[t] : void 0,
    r =
      void 0 !== e?.recordsItemsDetails && Object.keys(e.recordsItemsDetails).length > 0
        ? e.recordsItemsDetails
        : a?.recordsItemsDetails;
  return {
    paramName: t,
    premium: { xp: e?.premiumValue, freeXp: a?.premiumValue },
    standard: { xp: e?.baseValue, freeXp: a?.baseValue },
    recordsItemsDetails: r,
    modifier: s,
  };
}
function pn({ credits: e, gold: a }) {
  const t = e?.paramName || a?.paramName;
  la("string" == typeof t, "credits or gold paramName is not provided");
  const s = _n(t) ? Lr[t] : void 0,
    r =
      void 0 !== e?.recordsItemsDetails && Object.keys(e.recordsItemsDetails).length > 0
        ? e?.recordsItemsDetails
        : a?.recordsItemsDetails;
  return {
    paramName: t,
    premium: { credits: e?.premiumValue, gold: a?.premiumValue },
    standard: { credits: e?.baseValue, gold: a?.baseValue },
    recordsItemsDetails: r,
    modifier: s,
  };
}
function bn(e, a) {
  const t = e.paramName;
  return (
    la(((e) => e in Tr)(t), `No analogue for ${t} in free xp parameter names`),
    a.find((e) => Tr[t] === e.paramName)
  );
}
function hn(e, a) {
  const t = e.paramName;
  return (
    la(((e) => e in Er)(t), `No analogue for ${t} in gold parameter names`),
    a.find((e) => Er[t] === e.paramName)
  );
}
function vn(e, a) {
  return ((t = (function (e, a) {
    const t = We(
        a,
        (e) => Rr.has(e.paramName),
        (e) => fn({ freeXp: e }),
      ),
      s = ya(e, (e) => (Pr.has(e.paramName) ? fn({ xp: e }) : fn({ xp: e, freeXp: bn(e, a) })));
    return [...t, ...s];
  })(e, a)),
  t.filter((e) => {
    const a = Yr[e.paramName];
    return "function" == typeof a
      ? a(e)
      : Boolean(e.premium.freeXp || e.premium.xp || e.standard.freeXp || e.standard.xp);
  })).sort(on);
  var t;
}
function gn(e, a) {
  return ((t = (function (e, a) {
    return ya(e, (e) =>
      kr.has(e.paramName) ? pn({ credits: e }) : pn({ credits: e, gold: hn(e, a) }),
    );
  })(e, a)),
  t.filter((e) => {
    const a = Zr[e.paramName];
    return "function" == typeof a
      ? a(e)
      : Boolean(e.premium.credits || e.premium.gold || e.standard.credits || e.standard.gold);
  })).sort(cn);
  var t;
}
function yn(e) {
  return ((a = e),
  a.filter((e) => {
    const a = Boolean(e.baseValue || e.premiumValue),
      t = Vr.has(e.paramName);
    return a || t;
  })).sort(ln);
  var a;
}
function xn({ xp: e, freeXp: a }) {
  return (function (e, a) {
    return { records: vn(e.records, a.records), total: vn(e.total, a.total) };
  })(
    un({ earned: e.earned, expenses: e.expenses, total: e.total }),
    un({ earned: a.earned, expenses: a.expenses, total: a.total }),
  );
}
function Nn({ credits: e, gold: a }) {
  return (function (e, a) {
    return { records: gn(e.records, a.records), total: gn(e.total, a.total) };
  })(
    un({ earned: e.earned, expenses: e.expenses, total: e.total }),
    un({ earned: a.earned, expenses: a.expenses, total: a.total }),
  );
}
var jn = (e) => e.wotPlusType !== Ea.None,
  [In, wn] = fe()(({ observableModel: e }) => {
    const a = {
        ...e.primitives(["hasAnyPremium", "wotPlusType", "hasPenalties"], "additionalBonus"),
        hasWotPlus: e.transform(jn, "additionalBonus"),
        xp: {
          earned: e.arrayClone("financialReport.xp.earned"),
          expenses: e.arrayClone("financialReport.xp.expenses"),
          total: e.arrayClone("financialReport.xp.total"),
          free: {
            earned: e.arrayClone("financialReport.freeXp.earned"),
            expenses: e.arrayClone("financialReport.freeXp.expenses"),
            total: e.arrayClone("financialReport.freeXp.total"),
          },
        },
        credits: {
          earned: e.arrayClone("financialReport.credits.earned"),
          expenses: e.arrayClone("financialReport.credits.expenses"),
          total: e.arrayClone("financialReport.credits.total"),
        },
        gold: {
          earned: e.arrayClone("financialReport.gold.earned"),
          expenses: e.arrayClone("financialReport.gold.expenses"),
          total: e.arrayClone("financialReport.gold.total"),
        },
        crystals: {
          earned: e.arrayClone("financialReport.crystals.earned"),
          expenses: e.arrayClone("financialReport.crystals.expenses"),
          total: e.arrayClone("financialReport.crystals.total"),
        },
      },
      t = ze.model(() =>
        xn({
          xp: { earned: a.xp.earned.get(), expenses: a.xp.expenses.get(), total: a.xp.total.get() },
          freeXp: {
            earned: a.xp.free.earned.get(),
            expenses: a.xp.free.expenses.get(),
            total: a.xp.free.total.get(),
          },
        }),
      ),
      s = ze.model(() =>
        Nn({
          credits: {
            earned: a.credits.earned.get(),
            expenses: a.credits.expenses.get(),
            total: a.credits.total.get(),
          },
          gold: {
            earned: a.gold.earned.get(),
            expenses: a.gold.expenses.get(),
            total: a.gold.total.get(),
          },
        }),
      ),
      r = ze.model(() =>
        (function ({ earned: e, expenses: a, total: t }) {
          const s = un({ earned: e, expenses: a, total: t });
          return { records: yn(s.records), total: yn(s.total) };
        })({
          earned: a.crystals.earned.get(),
          expenses: a.crystals.expenses.get(),
          total: a.crystals.total.get(),
        }),
      );
    return { ...a, computes: { experience: t, credits: s, crystals: r } };
  }, ae),
  An = "ListItem_received_ffdc3010",
  Cn = "ListItem_separator_71797768",
  Bn = "ListItem_label_4ab3c391",
  Sn = "ListItem_label__withIcon_c2381aa",
  Pn = "ListItem_labelIcon_acb0da4",
  Rn = Ie("ListItem", "ListItem_bcdaabbd"),
  kn = (0, ot.forwardRef)(
    ({ labelKey: e, children: a, classNames: t, params: s, labelIconPath: r, ...n }, i) => {
      const l = m.resolve("images");
      return (0, vt.jsxs)(Rn, {
        ...n,
        ref: i,
        "data-test-id": `${e}`,
        children: [
          (0, vt.jsxs)("div", {
            className: F(Bn, void 0 !== r && Sn, t?.label),
            children: [
              void 0 !== r &&
                (0, vt.jsx)("div", {
                  style: { backgroundImage: `url(${l.readOrEmpty(r)})` },
                  className: F(Pn, t?.icon),
                }),
              (0, vt.jsx)(Q, { upgradeLegacy: !0, path: e, params: s }),
            ],
          }),
          (0, vt.jsxs)("div", {
            className: An,
            children: [(0, vt.jsx)("div", { className: Cn }), a],
          }),
        ],
      });
    },
  ),
  Tn = "Record_420804f3",
  En = "Record_value_4d088deb",
  Dn = "Record_value__decreasing_8cff45fa",
  Hn = ({ formatter: e, value: a, modifier: t, currency: s, classNames: r, iconPath: n }) => {
    if (void 0 === a) return null;
    const i = t === Gr || a < 0;
    return (0, vt.jsxs)("div", {
      className: F(Tn, r?.base),
      children: [
        (0, vt.jsxs)("div", {
          className: F(En, i && Dn, r?.value),
          "data-test-id": `${s}`,
          children: [
            qa(t)
              .with(Mr, () => (0, vt.jsx)(Q, { path: "common.multiplierSmall" }))
              .with(Wr, () => (0, vt.jsx)(Q, { path: "common.multiplierSmall" }))
              .with(Gr, () => (0, vt.jsx)(Q, { path: "common.multiplierSmall" }))
              .with(Ur, () => (0, vt.jsx)(Q, { path: "common.plus" }))
              .otherwise(() => null),
            e(a, s),
            t === $r && (0, vt.jsx)(Q, { path: "common.common.percent" }),
          ],
        }),
        n && (0, vt.jsx)(Aa, { width: 24, height: 24, path: n }),
      ],
    });
  },
  On = "RecordGroup_65a30ced",
  Vn = "RecordGroup_base__inactive_5fd9f274",
  zn = "RecordGroup_record_5fd9f274",
  Wn = "RecordGroup_record__extinguished_7fdfcea",
  Mn = "RecordGroup_record__first_9121e1b7",
  Gn = "RecordGroup_separator_9f211d97",
  $n = "RecordGroup_separatorBackground_8a447834",
  Un = "RecordGroup_value_1f34e2e2",
  Ln = "RecordGroup_value__total_126d88a1",
  Xn = "RecordGroup_value__freeXP_931265db";
function Fn(e, a) {
  return "additionalBonusXP" !== e || (void 0 !== a && a > 0);
}
function Kn({ paramName: e, wotPlusActive: a, hasPenalties: t, value: s }) {
  const r = !s || 0 === s;
  switch (e) {
    case Ar:
      return !1;
    case Ms:
    case er:
      return !a || r;
    case $s:
      return !t && r;
    default:
      return r;
  }
}
var qn = ({
    paramName: e,
    xp: a,
    freeXp: t,
    modifier: s,
    inactive: r,
    hasPenalties: n = !1,
    total: i,
    wotPlusActive: l,
  }) => {
    function o(a) {
      switch (e) {
        case Ps:
          return Y.formatReal("woZeroDigits", a);
        case Ar:
          return Y.formatReal("fractional", a);
        default:
          return Y.formatNumber("integral", a);
      }
    }
    return (0, vt.jsxs)("div", {
      className: F(On, r && Vn),
      children: [
        (0, vt.jsx)("div", {
          className: F(
            zn,
            Mn,
            Kn({ wotPlusActive: l, paramName: e, value: a, hasPenalties: n }) && Wn,
          ),
          children: (0, vt.jsx)(Hn, {
            value: a,
            currency: "xp",
            modifier: Fn(e, a) ? s : void 0,
            formatter: o,
            classNames: { value: F(Un, i && Ln) },
            iconPath: nn("xp", e),
          }),
        }),
        void 0 !== t &&
          (0, vt.jsx)("div", { className: Gn, children: (0, vt.jsx)("div", { className: $n }) }),
        (0, vt.jsx)("div", {
          className: F(zn, Kn({ wotPlusActive: l, paramName: e, value: t, hasPenalties: n }) && Wn),
          children: (0, vt.jsx)(Hn, {
            value: t,
            currency: ys,
            modifier: Fn(e, t) ? s : void 0,
            formatter: o,
            classNames: { value: F(Un, Xn, i && Ln) },
            iconPath: nn(ys, e),
          }),
        }),
      ],
    });
  },
  Qn = "Item_groups_a1f0c2a5",
  Yn = "Item_label_7521a1d4",
  Zn = "Item_label__highlighted_36e62867",
  Jn = "Item_label__gold_49ec59ab",
  ei = {
    [Cs]: "title.base",
    [Us]: "title.base",
    [Bs]: "noPenalty",
    [Ls]: "noPenalty",
    [Ss]: "friendlyFirePenalty",
    [Ps]: "igrBonus.simpleLabel",
    [Xs]: "igrBonus.simpleLabel",
    [Rs]: "firstWin",
    [Fs]: "firstWin",
    [ks]: "manageableXpBonus",
    [Ks]: "manageableXpBonus",
    [Ts]: "boosters",
    [qs]: "boosters",
    [Es]: "tacticalTraining",
    [Qs]: "militaryManeuvers",
    [Ds]: "holidayOps",
    [Ys]: "holidayOps",
    [Hs]: "event",
    [Zs]: "event",
    [Os]: "referralBonus.fullLabel",
    [Vs]: "premiumVehicleXP",
    [Js]: "premiumVehicleXP",
    [zs]: "squadBonus",
    [Ws]: "squadXPPenalty",
    [Ar]: "aogasFactor",
    [Ms]: "wotPlusBonus",
    [er]: "wotPlusBonus",
    [Gs]: "wotPlusProBoost",
    [ar]: "wotPlusProBoost",
    [Cr]: "fairPlayViolation.deserter",
    [Sr]: "fairPlayViolation.suicide",
    [Br]: "fairPlayViolation.afk",
    [$s]: "total",
    [tr]: "total",
    originalAlternative: "xpRecordSimple",
  },
  ai = { [Ms]: "subscription.wot_plus_32x32", [er]: "subscription.wot_plus_32x32" },
  ti = {
    [Ms]: "subscription.wot_plus_pro_32x32",
    [er]: "subscription.wot_plus_pro_32x32",
    [Gs]: "subscription.wot_plus_pro_32x32",
    [ar]: "subscription.wot_plus_pro_32x32",
  },
  si = { [Ea.None]: void 0, [Ea.Core]: ai, [Ea.Pro]: ti },
  ri = new Set([Ms, er, Gs, ar]),
  ni = () =>
    (0, vt.jsx)("span", {
      className: Zn,
      children: (0, vt.jsx)(Q, { path: "battle_results.details.calculations.maximum" }),
    }),
  ii = ja(
    ({
      record: { paramName: e, premium: a, standard: t, modifier: s, recordsItemsDetails: r },
      total: n,
      ...i
    }) => {
      const { model: l } = wn(),
        o = l.hasAnyPremium.get(),
        c = l.hasWotPlus.get(),
        d = l.wotPlusType.get(),
        m = l.hasPenalties.get();
      if (!((e) => e in ei)(e)) return null;
      const u = "1" === r?.isHighScope,
        _ = u ? ei.originalAlternative : ei[e],
        f = r?.referralFactor,
        p = si[d]?.[e];
      return (0, vt.jsx)(kn, {
        ...i,
        labelIconPath: p,
        labelKey: `battle_results.details.calculations.${_}`,
        params: { ...(f && { bonusFactor: Xr(f) }), ...(u && { maximum: (0, vt.jsx)(ni, {}) }) },
        classNames: { label: F(Yn, ri.has(e) && Jn) },
        children: (0, vt.jsxs)("div", {
          className: Qn,
          children: [
            (0, vt.jsx)(qn, {
              ...t,
              paramName: e,
              modifier: s,
              inactive: o,
              total: n,
              hasPenalties: m,
              wotPlusActive: c,
            }),
            (0, vt.jsx)(qn, {
              ...a,
              paramName: e,
              modifier: s,
              inactive: !o,
              total: n,
              hasPenalties: m,
              wotPlusActive: c,
            }),
          ],
        }),
      });
    },
  ),
  li = "IncomeStatement_560dd244",
  oi = "IncomeStatement_base__scroll_fb9f1475",
  ci = "IncomeStatement_item_48b34a63",
  di = ja(
    (0, ot.forwardRef)(({ className: e, scrollable: a, ...t }, s) => {
      const { model: r } = wn(),
        n = r.computes.experience();
      return (0, vt.jsx)(gs, {
        ...t,
        ref: s,
        className: F(li, a && oi, e),
        scrollable: a,
        children: ya(n.records, (e) => (0, vt.jsx)(ii, { record: e, className: ci }, e.paramName)),
      });
    }),
  ),
  mi = "Total_item_a8580361",
  ui = "Total_divider_1de1ca28",
  _i = "Total_dividerImage_ab06168d",
  fi = Ie("ExperienceTotal", "Total_19236d49"),
  pi = ja(
    (0, ot.forwardRef)((e, a) => {
      const { model: t } = wn(),
        s = t.computes.experience();
      return (0, vt.jsxs)(fi, {
        ...e,
        ref: a,
        children: [
          (0, vt.jsx)(ss, { classNames: { base: ui, image: _i } }),
          s.total.map((e) => (0, vt.jsx)(ii, { record: e, className: mi, total: !0 }, e.paramName)),
        ],
      });
    }),
  ),
  bi = "Experience_a014c8c",
  hi = "Experience_base__scroll_f75d07c6",
  vi = Ie("Experience"),
  gi = (0, ot.forwardRef)(({ scrollable: e, className: a, ...t }, s) =>
    (0, vt.jsx)(vi, { ...t, ref: s, className: F(bi, e && hi, a) }),
  );
((gi.Header = ds), (gi.Item = ii), (gi.Total = pi), (gi.IncomeStatement = di));
var yi = "Header_cbd845ec",
  xi = "Header_content_a63fb46c",
  Ni = "Header_title_7b852a7",
  ji = "Header_title__active_e5dd0f77",
  Ii = "Header_title__premium_2c23921f",
  wi = "Header_icon_3b4dc587",
  Ai = ja(
    (0, ot.forwardRef)(({ className: e, ...a }, t) => {
      const { model: s } = wn(),
        r = s.hasAnyPremium.get();
      return (0, vt.jsx)(cs, {
        ...a,
        ref: t,
        className: F(yi, e),
        title: "battle_results.details.credits",
        children: (0, vt.jsxs)("div", {
          className: xi,
          children: [
            (0, vt.jsx)("div", {
              className: F(Ni, !r && ji),
              children: (0, vt.jsx)(Q, { path: "battle_results.common.details.noPremTitle" }),
            }),
            (0, vt.jsxs)("div", {
              className: F(Ni, r && ji, Ii),
              children: [
                (0, vt.jsx)("div", {
                  className: wi,
                  children: (0, vt.jsx)(Aa, {
                    width: 32,
                    height: 32,
                    path: "post_battle.wot_premium_32x32",
                  }),
                }),
                (0, vt.jsx)(Q, { path: "battle_results.getPremiumPopover.prem" }),
              ],
            }),
          ],
        }),
      });
    }),
  ),
  Ci = "RecordGroup_65a30ced",
  Bi = "RecordGroup_base__inactive_5fd9f274",
  Si = "RecordGroup_record_5fd9f274",
  Pi = "RecordGroup_record__extinguished_7fdfcea",
  Ri = "RecordGroup_record__first_36c2aa71",
  ki = "RecordGroup_separator_9f211d97",
  Ti = "RecordGroup_separatorBackground_8a447834",
  Ei = "RecordGroup_value_9253748c",
  Di = "RecordGroup_value__total_126d88a1",
  Hi = "RecordGroup_value__gold_d7bd74ba";
function Oi({ paramName: e, wotPlusActive: a, value: t }) {
  switch (e) {
    case Ar:
      return !1;
    case ur:
      return !a || !t || 0 === t;
    default:
      return !t || 0 === t;
  }
}
var Vi = ({
    credits: e,
    gold: a,
    modifier: t,
    inactive: s = !1,
    total: r,
    paramName: n,
    wotPlusActive: i,
  }) => {
    function l(e, a) {
      return "aogasFactor" === n
        ? Y.formatReal("fractional", e)
        : Y.formatNumber("gold" === a ? "gold" : "integral", e);
    }
    return (0, vt.jsxs)("div", {
      className: F(Ci, s && Bi),
      children: [
        (0, vt.jsx)("div", {
          className: F(Si, Ri, Oi({ paramName: n, wotPlusActive: i, value: e }) && Pi),
          children: (0, vt.jsx)(Hn, {
            formatter: l,
            value: e,
            currency: xs,
            modifier: t,
            classNames: { value: F(Ei, r && Di) },
            iconPath: nn(xs, n),
          }),
        }),
        void 0 !== a &&
          (0, vt.jsx)("div", { className: ki, children: (0, vt.jsx)("div", { className: Ti }) }),
        (0, vt.jsx)("div", {
          className: F(Si, 0 === a && Pi),
          children: (0, vt.jsx)(Hn, {
            value: a,
            currency: Ns,
            modifier: t,
            classNames: { value: F(Ei, Hi, r && Di) },
            formatter: l,
            iconPath: nn(Ns, n),
          }),
        }),
      ],
    });
  },
  zi = "Item_groups_a1f0c2a5",
  Wi = "Item_label_7521a1d4",
  Mi = "Item_label__gold_49ec59ab",
  Gi = {
    [sr]: "title.base",
    [rr]: "squadBonus",
    [nr]: "noPenalty",
    [ir]: "boosters",
    [or]: "battlePayments",
    [cr]: "event",
    [mr]: "holidayOps",
    [Nr]: "event",
    [dr]: "referralBonus.fullLabel",
    [ur]: "wotPlusBonus",
    [_r]: "wotPlusProBoost",
    [Cr]: "fairPlayViolation.deserter",
    [Sr]: "fairPlayViolation.suicide",
    [Br]: "fairPlayViolation.afk",
    [fr]: "friendlyFirePenalty",
    [pr]: "friendlyFireCompensation",
    [Ar]: "aogasFactor",
    [yr]: "intermediateTotal",
    [Ir]: "intermediateTotal",
    [hr]: "autoRepair",
    [vr]: "autoLoad",
    [gr]: "autoEquip",
    [xr]: "total",
    [wr]: "total",
    [br]: "piggyBankInfo",
    [jr]: "piggyBankInfo",
    [lr]: "petCredits.fullLabel",
  },
  $i = { [ur]: "subscription.wot_plus_pro_32x32", [_r]: "subscription.wot_plus_pro_32x32" },
  Ui = { [ur]: "subscription.wot_plus_32x32" },
  Li = { [Ea.None]: void 0, [Ea.Core]: Ui, [Ea.Pro]: $i },
  Xi = [ur, _r],
  Fi = ja(({ record: e, total: a, ...t }) => {
    const { model: s } = wn(),
      r = s.hasAnyPremium.get(),
      n = s.hasWotPlus.get(),
      { paramName: i, premium: l, standard: o, modifier: c, recordsItemsDetails: d } = e;
    if (!((e) => e in Gi)(i)) return null;
    const m = d?.referralFactor,
      u = d?.bonusFactor,
      _ = Gi[i],
      f = en[xr](e, n),
      p = Li[s.wotPlusType.get()]?.[i];
    return (0, vt.jsx)(kn, {
      ...t,
      labelIconPath: p,
      labelKey: `battle_results.details.calculations.${_}`,
      classNames: { label: F(Wi, Xi.includes(i) && Mi) },
      params: { ...(m && { bonusFactor: Xr(m) }), ...(u && { bonusFactor: Fr(u) }) },
      children: (0, vt.jsxs)("div", {
        className: zi,
        children: [
          (0, vt.jsx)(Vi, {
            paramName: i,
            credits: o.credits,
            gold: f ? o.gold : void 0,
            modifier: c,
            inactive: r,
            total: a,
            wotPlusActive: n,
          }),
          (0, vt.jsx)(Vi, {
            paramName: i,
            credits: l.credits,
            gold: f ? l.gold : void 0,
            modifier: c,
            inactive: !r,
            total: a,
            wotPlusActive: n,
          }),
        ],
      }),
    });
  }),
  Ki = "IncomeStatement_560dd244",
  qi = "IncomeStatement_base__scroll_fb9f1475",
  Qi = "IncomeStatement_item_48b34a63",
  Yi = ja(
    (0, ot.forwardRef)(({ className: e, scrollable: a, ...t }, s) => {
      const { model: r } = wn(),
        n = r.computes.credits();
      return (0, vt.jsx)(gs, {
        ...t,
        ref: s,
        className: F(Ki, a && qi, e),
        scrollable: a,
        children: ya(n.records, (e) => (0, vt.jsx)(Fi, { record: e, className: Qi }, e.paramName)),
      });
    }),
  ),
  Zi = "Total_item_de53c8b0",
  Ji = "Total_divider_1de1ca28",
  el = "Total_dividerImage_ab06168d",
  al = Ie("CreditsTotal", "Total_19236d49"),
  tl = ja(
    (0, ot.forwardRef)((e, a) => {
      const { model: t } = wn(),
        s = t.computes.credits();
      return (0, vt.jsxs)(al, {
        ...e,
        ref: a,
        children: [
          (0, vt.jsx)(ss, { classNames: { base: Ji, image: el } }),
          s.total.map((e) => (0, vt.jsx)(Fi, { record: e, className: Zi, total: !0 }, e.paramName)),
        ],
      });
    }),
  ),
  sl = "Credits_68f91d81",
  rl = "Credits_base__scroll_759f08f3",
  nl = Ie("Credits"),
  il = (0, ot.forwardRef)(({ scrollable: e, className: a, ...t }, s) =>
    (0, vt.jsx)(nl, { ...t, ref: s, className: F(sl, e && rl, a) }),
  );
((il.Header = Ai), (il.Item = Fi), (il.Total = tl), (il.IncomeStatement = Yi));
var ll = "Item_currencyValue_81f5b9fb",
  ol = "Item_currencyValue__total_a7596c8e",
  cl = "Item_currencyValue__negative_5e98369f",
  dl = "Item_label_5d6964d6",
  ml = {
    [js]: "battle_results.details.calculations.crystal.total",
    [Is]: "battle_results.details.calculations.crystal.events",
    [ws]: "battle_results.details.calculations.autoBoosters",
    [As]: "battle_results.details.calculations.total",
  },
  ul = ({ record: e, total: a, ...t }) => {
    const { paramName: s, baseValue: r } = e;
    return ((e) => e in ml)(s)
      ? (0, vt.jsx)(kn, {
          ...t,
          labelKey: ml[s],
          classNames: { label: dl, ...t.classNames },
          children: (0, vt.jsx)(we, {
            reverse: !0,
            type: "crystal",
            size: Ee.small,
            children: (0, vt.jsx)("div", {
              className: F(ll, r < 0 && cl, a && ol),
              children: Y.formatNumber("integral", r),
            }),
          }),
        })
      : (console.error(`Parameter name "${s} is not valid for bonds`), null);
  },
  _l = "IncomeStatement_item_48b34a63",
  fl = Ie("BondsIncomeStatement"),
  pl = ja(
    (0, ot.forwardRef)((e, a) => {
      const { model: t } = wn(),
        s = t.computes.crystals();
      return (0, vt.jsx)(fl, {
        ...e,
        ref: a,
        children: s.records.map((e) => (0, vt.jsx)(ul, { record: e, className: _l }, e.paramName)),
      });
    }),
  ),
  bl = "Total_item_a8580361",
  hl = "Total_item__extinguished_4be8343f",
  vl = "Total_divider_1de1ca28",
  gl = "Total_dividerImage_ab06168d",
  yl = Ie("BondsTotal", "Total_120fb0c4"),
  xl = ja(
    (0, ot.forwardRef)((e, a) => {
      const { model: t } = wn(),
        s = t.computes.crystals();
      return (0, vt.jsxs)(yl, {
        ...e,
        ref: a,
        children: [
          (0, vt.jsx)(ss, { classNames: { base: vl, image: gl } }),
          s.total.map((e) =>
            (0, vt.jsx)(
              ul,
              { total: !0, record: e, className: F(bl, (!e.baseValue || 0 === e.baseValue) && hl) },
              e.paramName,
            ),
          ),
        ],
      });
    }),
  ),
  Nl = (0, ot.forwardRef)((e, a) =>
    (0, vt.jsx)(cs, { ...e, title: "battle_results.details.crystal", ref: a }),
  ),
  jl = Ie("Bonds");
((jl.Header = Nl), (jl.Item = ul), (jl.Total = xl), (jl.IncomeStatement = pl));
var Il = "FinancialReport_content_99bf970f",
  wl = "FinancialReport_leftContent_75c21204",
  Al = "FinancialReport_bonds_cc81cbc0",
  Cl = "FinancialReport_headerContent_aad9188f",
  Bl = "FinancialReport_experience_7219d4d3",
  Sl = "FinancialReport_credits_7712b0c",
  Pl = "FinancialReport_header_d56ebc61",
  Rl = "FinancialReport_total_bdf3e42b",
  kl = Ie("FinancialReport", "FinancialReport_c3cc562a"),
  Tl = ({ className: e }) => {
    const [a, t] = (0, ot.useState)({ credits: !1, experience: !1 }),
      s = (0, ot.useRef)(null),
      r = (0, ot.useRef)(null),
      n = (0, ot.useRef)(null),
      i = Le(
        { margin: 18 },
        { medium: { margin: 19 }, large: { margin: 16 }, extraLarge: { margin: 30 } },
      );
    return (
      He(
        s,
        (0, ot.useCallback)(() => {
          if (!s.current || !r.current || !n.current) return;
          const { height: e } = s.current.getBoundingClientRect(),
            { height: a } = r.current.getBoundingClientRect(),
            { height: l } = n.current.getBoundingClientRect();
          e &&
            a &&
            l &&
            (e - a - l - i.margin >= 0
              ? t({ credits: !1, experience: !1 })
              : t(
                  a <= e / 2 && a <= l
                    ? { credits: !1, experience: !0 }
                    : l <= e / 2
                      ? { credits: !0, experience: !1 }
                      : { credits: !0, experience: !0 },
                ));
        }, [i.margin]),
      ),
      (0, vt.jsx)(In, {
        children: (0, vt.jsx)(kl, {
          className: e,
          children: (0, vt.jsxs)("div", {
            className: Il,
            children: [
              (0, vt.jsxs)("div", {
                className: wl,
                ref: s,
                children: [
                  (0, vt.jsxs)(il, {
                    ref: r,
                    scrollable: a.credits,
                    className: Sl,
                    children: [
                      (0, vt.jsx)(il.Header, { className: Pl }),
                      (0, vt.jsx)(il.IncomeStatement, { scrollable: a.credits }),
                      (0, vt.jsx)(il.Total, { className: Rl }),
                    ],
                  }),
                  (0, vt.jsxs)(gi, {
                    ref: n,
                    scrollable: a.experience,
                    className: Bl,
                    children: [
                      (0, vt.jsx)(gi.Header, { className: Pl, classNames: { content: Cl } }),
                      (0, vt.jsx)(gi.IncomeStatement, { scrollable: a.experience }),
                      (0, vt.jsx)(gi.Total, { className: Rl }),
                    ],
                  }),
                ],
              }),
              (0, vt.jsxs)(jl, {
                className: Al,
                children: [
                  (0, vt.jsx)(jl.Header, { className: Pl, classNames: { content: Cl } }),
                  (0, vt.jsx)(jl.IncomeStatement, {}),
                  (0, vt.jsx)(jl.Total, { className: Rl }),
                ],
              }),
            ],
          }),
        }),
      })
    );
  },
  El = (function (e) {
    return ((e.Done = "done"), (e.Locked = "notAvailable"), (e.Active = ""), e);
  })({}),
  Dl = Se({
    index: n(),
    name: pe(),
    value: pe(),
    isCompensation: h(),
    tooltipId: pe(),
    tooltipContentId: pe(),
    label: pe(),
    probability: n(),
    item: _a(pe()),
    icon: _a(pe()),
    iconBig: _a(pe()),
    iconSmall: _a(pe()),
  }),
  Hl = Se({ conditionType: pe() }),
  Ol = Se({
    ...Hl.entries,
    titleData: pe(),
    descrData: pe(),
    iconKey: pe(),
    current: n(),
    total: n(),
    earned: n(),
    progressType: pe(),
    sortKey: pe(),
  }),
  Vl = Se({ ...Hl.entries, items: ie(da([Ol, ue(() => Vl)])) }),
  zl = Se({
    id: pe(),
    groupId: pe(),
    type: n(),
    title: pe(),
    description: pe(),
    decoration: n(),
    status: na(El),
  }),
  Wl =
    (Se({
      ...zl.entries,
      bonuses: ie(Dl),
      preBattleCondition: Vl,
      bonusCondition: Vl,
      postBattleCondition: Vl,
    }),
    Se({
      animated: _a(h()),
      completed: _a(h()),
      component: A((e) => ve(e)),
      categoryOrder: n(),
      notifications: _a(ie(Se({ id: pe(), item: A((e) => (0, ot.isValidElement)(e)) }))),
    })),
  Ml = da([Se({ status: ce("loaded"), result: Wl }), Se({ status: ce("loading") })]),
  Gl = m.resolve("strings"),
  $l = ["huntsman", "medalGore", "medalStark"],
  Ul = "markOfMastery",
  Ll = "marksOnGun",
  Xl = "epic",
  Fl = "specialAchievements",
  Kl = "right",
  ql = "left",
  Ql = "other",
  Yl = [Ul, Ll, Xl, Fl, Kl, ql, Ql];
function Zl(e) {
  return e.groupID === Ul
    ? Ul
    : e.groupID === Ll
      ? Ll
      : e.epic
        ? Xl
        : $l.includes(e.name)
          ? Fl
          : e.groupID === Kl
            ? Kl
            : e.groupID === ql
              ? ql
              : (console.error(`Achievement ${e.name} with a group ${e.groupID} is not detected`),
                Ql);
}
function Jl(e) {
  return P(e, (e, a) => {
    const t = Zl(e),
      s = Zl(a),
      r = Yl.indexOf(t),
      n = Yl.indexOf(s);
    return t !== s
      ? r - n
      : (function (e, a) {
          const t = Gl.readOrEmpty(`achievements.${e.name}`),
            s = Gl.readOrEmpty(`achievements.${a.name}`);
          return t.localeCompare(s);
        })(e, a);
  });
}
var eo = "default",
  ao = "hover",
  to = "extinct";
function so(e, a) {
  return void 0 === a ? eo : a === e ? ao : to;
}
var ro = { marksOnGun1: "1_mark", marksOnGun2: "2_marks", marksOnGun3: "3_marks" };
function no({ iconName: e, groupID: a, vehicleNation: t }) {
  return "marksOnGun" === a ? `marksOnGun.x240x240.${t}_${ro[e]}` : `achievement.x240x240.${e}`;
}
var io = "marks",
  lo = "epicAndHeroic",
  oo = "others",
  co = ["bombardier", "medalAntiSpgFire", "kamikaze", "raider", "medalMonolith", "medalCoolBlood"];
var mo = (function (e) {
    return (
      (e.Squad = "squad"),
      (e.Rank = "rank"),
      (e.Player = "player"),
      (e.Damage = "damage"),
      (e.Frag = "frag"),
      (e.Xp = "xp"),
      (e.Vehicle = "tank"),
      (e.Medal = "medal"),
      (e.PrestigePoints = "prestigePoints"),
      e
    );
  })({}),
  uo = (function (e) {
    return ((e.Asc = "ascending"), (e.Desc = "descending"), e);
  })({}),
  _o = (function (e) {
    return (
      (e[(e.Integer = 0)] = "Integer"),
      (e[(e.Float = 1)] = "Float"),
      (e[(e.Time = 2)] = "Time"),
      e
    );
  })({}),
  fo = (function (e) {
    return (
      (e.Shots = "shots"),
      (e.Hits = "hits"),
      (e.ExplosionHits = "explosionHits"),
      (e.DamageDealt = "damageDealt"),
      (e.SniperDamageDealt = "sniperDamageDealt"),
      (e.ArtilleryStrike = "artilleryStrike"),
      (e.DirectHitsReceived = "directHitsReceived"),
      (e.PiercingsReceived = "piercingsReceived"),
      (e.NoDamageDirectHitsReceived = "noDamageDirectHitsReceived"),
      (e.ExplosionHitsReceived = "explosionHitsReceived"),
      (e.DamageBlockedByArmor = "damageBlockedByArmor"),
      (e.TeamHitsDamage = "teamHitsDamage"),
      (e.Spotted = "spotted"),
      (e.DamagedKilled = "damagedKilled"),
      (e.DamageAssisted = "damageAssisted"),
      (e.DamageAssistedSelf = "damageAssistedSelf"),
      (e.StunDuration = "stunDuration"),
      (e.DamageAssistedStun = "damageAssistedStun"),
      (e.DamageAssistedStunSelf = "damageAssistedStunSelf"),
      (e.StunNum = "stunNum"),
      (e.CapturePointsVal = "capturePointsVal"),
      (e.Mileage = "mileage"),
      e
    );
  })({});
function po(e) {
  return {
    status: e.winStatus,
    modeName: e.modeName,
    arenaName: e.arenaName,
    arenaType: e.arenaGuiType,
    startTime: e.battleStartTime,
    duration: e.battleDuration,
    finishReasonKey: e.finishReasonKey,
    finishReasonClarification: e.finishReasonClarification,
    commendationsReceived: e.commendationsReceived,
    leave: e.isLeave,
  };
}
function bo(e) {
  return { abandonBattle: e.isLeftBattle, deathReason: e.deathReason };
}
var ho = [$s, yr];
function vo(e, a) {
  const {
      recordsItemsDetails: t,
      baseValue: s,
      premiumValue: r,
      currencyType: n,
      paramName: i,
    } = dn(e),
    l = a ? r : s,
    o = l >= 0 ? l : 0;
  return {
    paramName: i,
    type: n,
    visibleIfZero: ho.includes(i) || "True" === t.isAvailable,
    value: o,
  };
}
function go(e) {
  return {
    bonusMultiplier: e.bonusMultiplier,
    bonusXpDiff: e.xpDiff,
    leftBonusAttempts: e.leftBonusCount,
    creditsThreshold: e.creditsThreshold,
    dailyAppliedAdditionalXP: e.dailyAppliedAdditionalXP,
    restriction: e.restriction,
    bonusState: e.state,
    wotPlusType: e.wotPlusType,
    wotPremium: e.hasPremium,
    durationInDays: e.durationInDays,
    usedAdvertisements: "" !== e.localStorage ? ka(e.localStorage) : [],
  };
}
function yo(e) {
  return {
    groupID: e.groupID,
    iconName: e.iconName,
    name: e.name,
    epic: e.isEpic,
    tooltipArgs: e.tooltipArgs,
    tooltipId: e.tooltipId,
  };
}
function xo(e) {
  return { labelKey: e.labelKey, paramValueType: e.paramValueType, value: ya(e.value, (e) => e) };
}
function No(e) {
  return {
    ...xo({
      label: e.label,
      labelKey: e.labelKey,
      paramValueType: e.paramValueType,
      value: ya(e.value, (e) => e),
    }),
    details: ya(e.details, (e) => xo(e)),
  };
}
function jo(e) {
  const a = Oe(e.detailedStatistics, (e) => e.labelKey === fo.TeamHitsDamage)?.value,
    t = void 0 !== a ? xe(a, 0) : 0,
    s = e.efficiencyValues.kills - (t ?? 0);
  return {
    personal: e.isPersonal,
    isQualification: e.isQualification,
    rank: e.rank,
    division: e.division,
    squadIndex: e.squadIndex,
    achievements: ya(e.achievements, yo),
    account: x(e.userNames),
    userStatus: bo(e.userStatus),
    killer: x(e.userStatus.killer),
    vehicle: Pa(e.vehicle.vehicleCD, e.vehicle.techName)
      ? void 0
      : { ...p(e.vehicle), longName: e.vehicle.longName },
    efficiencyValues: {
      substractedAlliesKills: s,
      ...((r = e.efficiencyValues),
      {
        damageDealt: r.damageDealt,
        kills: r.kills,
        earnedXp: r.earnedXp,
        prestigePoints: r.prestigePoints,
      }),
    },
    detailedStatistics: ya(e.detailedStatistics, No),
    databaseId: e.databaseID,
  };
  var r;
}
var Io = {
  killed: 0,
  spotted: 0,
  criticalDamage: 0,
  damageDealt: { value: 0, count: 0 },
  damageAssisted: 0,
  damageAssistedStun: { value: 0, count: 0 },
  damageBlockedByArmor: { value: 0, count: 0 },
};
var wo = "allies",
  Ao = "enemies",
  Co = ["dead0", "dead1", "dead2", "dead3", "dead5", "dead7"],
  Bo = "superPlatoon",
  So = "personal",
  Po = "alien";
function Ro(e, a, t) {
  return 0 === t ? null : -1 === t ? Bo : a === t && e === wo ? So : Po;
}
function ko({ anonymizer: e, personal: a, platoonType: t }) {
  return !(a || !e) && (t === Po || null === t);
}
var [To, Eo] = fe()(
    (e) => {
      const { observableModel: a, cleanup: t } = e,
        s = {
          teamsStatistic: {
            ...a.primitives(["sortingColumn", "sortingOrder"], "teamStats"),
            allies: a.arrayClone("teamStats.allies"),
            enemies: a.arrayClone("teamStats.enemies"),
          },
          personalEffiency: {
            ...a.primitives(["capturePoints", "droppedCapturePoints"], "baseCaptureInfo"),
            details: a.arrayClone("detailedPersonalEfficiency"),
          },
          additionalBonus: a.object("additionalBonus"),
          xp: { total: a.arrayClone("financialReport.xp.total") },
          credits: { total: a.arrayClone("financialReport.credits.total") },
          crystals: { total: a.arrayClone("financialReport.crystals.total") },
          gold: { total: a.arrayClone("financialReport.gold.total") },
        },
        r = {
          battleInfo: a.transform(po, "battleInfo"),
          additionalBonus: a.transform(go, "additionalBonus"),
          allPlayersDictionary: u.box({}),
          personalEfficiency: {
            opened: u.box(!1),
            achievements: a.transform((e) => Jl(ya(e, yo)), "achievements"),
            statistics: {
              details: u.box([]),
              capturePoints: u.box(0),
              droppedCapturePoints: u.box(0),
            },
          },
          teamsStatistic: {
            allies: u.box([]),
            enemies: u.box([]),
            sorting: u.box({ column: mo.Vehicle, sortDirection: uo.Desc }),
            selectedRow: u.box(),
          },
          user: { names: u.box(), status: u.box() },
          playerSatisfaction: a.object("playerSatisfaction"),
          pathToPlugins: a.dict("pathToPlugins"),
          notificationList: u.box([]),
          bansModel: a.object("bansModel"),
          bannedByAlliesVehicle: a.object("bansModel.bannedByAlliesVehicle"),
          bannedByEnemiesVehicle: a.object("bansModel.bannedByEnemiesVehicle"),
          qualificationModel: a.object("qualificationModel"),
          progressionItems: a.array("progressionItems"),
          unRankedBattleTypes: a.array("unRankedBattleTypes"),
          ...a.primitives([
            "warningType",
            "topPercentage",
            "ratingDelta",
            "previousScore",
            "currentScore",
          ]),
          currentProgressionItemIndex: a.primitives(["currentItemIndex"]).currentItemIndex,
        };
      (Ha(t)(() => {
        const e = {};
        (r.teamsStatistic.allies.set(
          ya(s.teamsStatistic.allies.get(), (a) => {
            const t = jo(a);
            return ((e[t.account.username] = t), t);
          }),
        ),
          r.teamsStatistic.enemies.set(
            ya(s.teamsStatistic.enemies.get(), (a) => {
              const t = jo(a);
              return ((e[t.account.username] = t), t);
            }),
          ));
        const a = r.allPlayersDictionary.get();
        r.allPlayersDictionary.set({ ...a, ...e });
      }),
        Ha(t)(() => {
          return r.teamsStatistic.sorting.set(
            ((e = s.teamsStatistic.sortingColumn.get()),
            (a = s.teamsStatistic.sortingOrder.get()),
            { column: e, sortDirection: a }),
          );
          var e, a;
        }),
        Ha(t)(() => {
          (r.personalEfficiency.statistics.capturePoints.set(
            s.personalEffiency.capturePoints.get(),
          ),
            r.personalEfficiency.statistics.droppedCapturePoints.set(
              s.personalEffiency.droppedCapturePoints.get(),
            ));
        }));
      const n = ze.structural(() =>
          (function ({ anyPremium: e, credits: a, crystals: t, gold: s, xp: r }) {
            const n = Oe(a, (e) => e.paramName === yr),
              i = Oe(s, (e) => e.paramName === wr),
              l = Oe(r, (e) => e.paramName === $s),
              o = Oe(t, (e) => e.paramName === As),
              c = [];
            return (
              n && c.push(vo(n, e)),
              i && c.push(vo(i, e)),
              l && c.push(vo(l, e)),
              o && c.push(vo(o, e)),
              c
            );
          })({
            anyPremium: s.additionalBonus.get().hasAnyPremium,
            credits: s.credits.total.get(),
            crystals: s.crystals.total.get(),
            gold: s.gold.total.get(),
            xp: s.xp.total.get(),
          }),
        ),
        i = ze.structural(() => r.pathToPlugins.values().map((e) => ({ url: e.get() }))),
        l = ze.shallow(() => {
          const e = Oe(r.teamsStatistic.allies.get(), (e) => e.personal);
          return (
            la(void 0 !== e, "Personal info is not found"),
            la(Wa(e), "There is no vehicle data in the personal info"),
            e
          );
        }),
        o = ze.shallow(() => {
          const e = r.teamsStatistic.selectedRow.get();
          if (void 0 === e) return;
          const a = (e.team === wo ? r.teamsStatistic.allies : r.teamsStatistic.enemies).get();
          return Oe(a, (a) => a.account.username === e.username);
        }),
        c = ze.shallow(() => {
          const e = r.allPlayersDictionary.get();
          return {
            assault: r.personalEfficiency.statistics.capturePoints.get(),
            defend: r.personalEfficiency.statistics.droppedCapturePoints.get(),
            rows: Fe(
              s.personalEffiency.details.get(),
              (a, t) => {
                const s = (function (e) {
                  return Fe(
                    e.personalEfficiencyItems,
                    (e, a) => {
                      switch (a.paramType) {
                        case "spotted":
                          return ((e.spotted = a.value), e);
                        case "targetKills":
                          return ((e.killed = a.value), e);
                        case "piercings":
                          return ((e.damageDealt.count = a.value), e);
                        case "damageDealt":
                          return ((e.damageDealt.value = a.value), e);
                        case "rickochetsReceived":
                        case "noDamageDirectHitsReceived":
                          return ((e.damageBlockedByArmor.count += a.value), e);
                        case "damageBlockedByArmor":
                          return ((e.damageBlockedByArmor.value = a.value), e);
                        case "damageAssisted":
                          return ((e.damageAssisted = a.value), e);
                        case "damageAssistedStun":
                          return ((e.damageAssistedStun.value = a.value), e);
                        case "stunCount":
                          return ((e.damageAssistedStun.count = a.value), e);
                        case "criticalDamage":
                          return ((e.criticalDamage = a.value), e);
                        default:
                          return e;
                      }
                    },
                    {
                      killed: 0,
                      spotted: 0,
                      criticalDamage: 0,
                      damageDealt: { value: 0, count: 0 },
                      damageAssisted: 0,
                      damageAssistedStun: { value: 0, count: 0 },
                      damageBlockedByArmor: { value: 0, count: 0 },
                    },
                  );
                })(t);
                if (
                  (function (e) {
                    return v.structural(e, Io);
                  })(s)
                )
                  return a;
                const r = e[t.userName];
                return (
                  la(void 0 !== r, `Such enemy ${t.userName} is not found`),
                  a.push({
                    ...s,
                    account: r.account,
                    rank: r.rank,
                    division: r.division,
                    isQualification: r.isQualification,
                    vehicle: r.vehicle,
                    databaseId: r.databaseId,
                  }),
                  a
                );
              },
              [],
            ),
          };
        }),
        d = ze.shallow(() => {
          const e = Oe(s.xp.total.get(), (e) => "totalXP" === e.paramName);
          la(void 0 !== e, "totalXP record is not found in the financial report");
          const a = Oe(s.credits.total.get(), (e) => "totalCredits" === e.paramName),
            t = Oe(s.credits.total.get(), (e) => "intermediateTotalCredits" === e.paramName);
          return (
            la(void 0 !== a, "totalCredits record is not found in the financial report"),
            la(
              void 0 !== t,
              "intermediateTotalCredits record is not found in the financial report",
            ),
            {
              baseCredits: t.baseValue,
              baseVehicleXP: e.baseValue,
              premiumCredits: t.premiumValue,
              premiumVehicleXP: e.premiumValue,
              creditsDiff: a.premiumValue - a.baseValue,
              vehicleXPDiff: e.premiumValue - e.baseValue,
            }
          );
        }),
        m = ze.model((e) => {
          const a = xe(r.progressionItems.get(), e);
          if (!a) throw new Error(`item with index ${e} was not found`);
          return ya(a.divisions, (e) => ({ ...e }));
        }),
        _ = ze.shallow((e) => {
          const a = xe(r.progressionItems.get(), e);
          if (!a) throw new Error(`item with index ${e} was not found`);
          return { ...a, division: Oe(m(e), (e) => e.state === it.Current)?.name };
        }),
        f = ze.primitive(() => {
          const { status: e, leave: a } = r.battleInfo.get();
          return "win" === e && !a;
        }),
        p = () => !L(r.unRankedBattleTypes.get(), r.battleInfo.get().arenaType);
      return {
        ...r,
        computes: {
          earnedCurrencies: n,
          personalInfo: l,
          efficiencyDetails: o,
          personalEffiency: c,
          premiumAndStandartEarnings: d,
          pathToPlugins: i,
          divisions: m,
          progressionItem: _,
          isWin: f,
          isRankedBattle: p,
          hasProgressAnimation: () =>
            p() &&
            !r.qualificationModel.get().isActive &&
            et(_(r.currentProgressionItemIndex.get()).rank) &&
            !(0 === r.previousScore.get() && 0 === r.currentScore.get()),
        },
      };
    },
    ({ externalModel: e, model: a }) => {
      const t = e.createCallback(
        (e) => ({ ...e, arenaType: a.battleInfo.get().arenaType }),
        "teamStats.onStatsSorted",
      );
      return {
        close: e.createCallbackNoArgs("onClose"),
        openMissions: e.createCallbackNoArgs("onOpenMissions"),
        applyBonus: e.createCallbackNoArgs("additionalBonus.onPremiumXpBonusApplied"),
        showBonusDetails: e.createCallbackNoArgs("additionalBonus.onShowDetails"),
        useAdvertisement: e.createCallback((e) => {
          const t = new Set(a.additionalBonus.get().usedAdvertisements);
          return t.has(e)
            ? { localStorage: JSON.stringify([e]) }
            : { localStorage: JSON.stringify([...t, e]) };
        }, "additionalBonus.onLocalStorageUpdated"),
        teamEfficiency: {
          sort: ge((e) => {
            (a.teamsStatistic.sorting.set(e), t(e));
          }),
          selectRow: ge((e) => {
            const t = a.teamsStatistic.selectedRow.get();
            t?.team !== e?.team || t?.username !== e?.username
              ? a.teamsStatistic.selectedRow.set(e)
              : a.teamsStatistic.selectedRow.set(void 0);
          }),
        },
        onSatisfactionRatingSelected: e.createCallback(
          (e) => ({ state: e }),
          "playerSatisfaction.onSatisfactionRatingSelected",
        ),
        setNotifications: ge((e) => {
          a.notificationList.set(e);
        }),
        pushNotifications: ge((e) => {
          0 !== e.length && a.notificationList.set([...a.notificationList.get(), ...e]);
        }),
      };
    },
  ),
  Do = "NoProgress_e30a0572",
  Ho = "NoProgress_header_fd4fa20b",
  Oo = "NoProgress_description_965e21c0",
  Vo = Fa(function () {
    const e = m.resolve("strings"),
      { controls: a } = Eo();
    return (0, vt.jsxs)("div", {
      className: Do,
      children: [
        (0, vt.jsx)("div", {
          className: Ho,
          children: e.readOrEmpty("battle_results.common.missions.noProgress.header"),
        }),
        (0, vt.jsx)("div", {
          className: Oo,
          children: e.readOrEmpty("battle_results.common.missions.noProgress.description"),
        }),
        (0, vt.jsx)(sa, {
          theme: sa.themes.secondary,
          onClick: a.openMissions,
          children: e.readOrEmpty("battle_results.common.missions.noProgress.button"),
        }),
      ],
    });
  });
var zo = "MissionsProgress_ca7ca547",
  Wo = "MissionsProgress_content_b1e9d53b",
  Mo = "MissionsProgress_verticalBar_a9f04f7f",
  Go = Ia.cubicBezier(0.23, 0, 0.57, 1),
  $o = Ie("MissionsProgress", zo);
function Uo(e) {
  return e.reduce((e, a) => (a.result.notifications && e.push(...a.result.notifications), e), []);
}
function Lo(e) {
  return We(
    e,
    (e) => Boolean(e.result.animated),
    (e, a) => a,
  );
}
var Xo = Fa(function ({ className: e }) {
    const { model: a, controls: t } = Eo(),
      { active: s } = I(),
      [r, n] = (0, ot.useState)(!1),
      [i, l] = (0, ot.useState)(!1),
      [o, c] = (0, ot.useState)(-1),
      m = (function (e) {
        const [a, t] = (0, ot.useState)({}),
          s = (0, ot.useRef)({}),
          r = (0, ot.useRef)({});
        return (
          (0, ot.useEffect)(() => {
            const n = [];
            function i(e, a) {
              (e.destroy(), delete s.current[a], delete r.current[a]);
            }
            return (
              (async function () {
                const l = await Promise.allSettled(
                  We(
                    e,
                    (e) => !(e.url in a || e.url in r.current),
                    async (e) => {
                      ((r.current[e.url] = !0),
                        t((a) => ({ ...a, [e.url]: { status: "loading" } })));
                      const a = await $(e.url);
                      return n.includes(e.url)
                        ? (i(a, e.url), { type: "rejected" })
                        : ((s.current[e.url] = a),
                          a
                            .init(...(e.args ?? []))
                            .then((a) => ({ plugin: a, url: e.url, type: "success" })));
                    },
                  ),
                ).then((e) =>
                  e.reduce(
                    (e, a) =>
                      "fulfilled" !== a.status
                        ? (console.error("Can not load plugin :", a.reason), e)
                        : ("rejected" === a.value.type ||
                            (e[a.value.url] = { status: "loaded", result: a.value.plugin }),
                          e),
                    { ...a },
                  ),
                );
                t(l);
                for (const e in Object.keys(l)) delete r.current[e];
              })(),
              () => {
                Object.keys(s.current)
                  .filter((a) => !e.some((e) => a === e.url))
                  .forEach((e) => {
                    if (e in r) return void n.push(e);
                    const a = s.current[e];
                    if (!a) return console.error(`Can't destroy plugin with url ${e}`);
                    i(a, e);
                  });
              }
            );
          }, [e]),
          a
        );
      })(a.computes.pathToPlugins()),
      u = (0, ot.useMemo)(() => {
        return (
          (e = m),
          Object.entries(e)
            .map(([e, a]) => {
              const t = Ge(Ml, a);
              return t.success
                ? t.output
                : (console.error(`Failure to load plugin: ${e}`, t.issues), { status: "failure" });
            })
            .filter((e) => "loaded" === e.status)
            .sort((e, a) => {
              const t = e.result.completed ? 1e3 * e.result.categoryOrder : e.result.categoryOrder;
              return (
                (a.result.completed ? 1e3 * a.result.categoryOrder : a.result.categoryOrder) - t
              );
            })
        );
        var e;
      }, [m]),
      { notifications: _, animatablePluginIndexes: f } = (0, ot.useMemo)(
        () => ({ notifications: Uo(u), animatablePluginIndexes: Lo(u) }),
        [u],
      );
    Ce(() => c((e) => e + 1), o > -1 && o < f.length ? 600 : void 0);
    const [p, h] = de(() => ({
      from: { opacity: 0 },
      config: { duration: 660, easing: Go },
      onRest: () => c(0),
    }));
    return (
      (0, ot.useEffect)(() => {
        s === Xa.progression &&
          (h.start({ to: { opacity: 1 } }), f.length > 0 && !1 === i && l(!0));
      }, [i, s, h, u, f]),
      (0, ot.useEffect)(() => {
        _.length > 0 && t.setNotifications(_);
      }, [t, _]),
      (0, ot.useEffect)(() => {
        i && s !== Xa.progression && n(!0);
      }, [i, s]),
      (0, vt.jsx)($o, {
        className: e,
        children: (0, vt.jsx)(w.div, {
          style: p,
          className: Wo,
          children: d(m)
            ? (0, vt.jsx)(Vo, {})
            : (0, vt.jsxs)(ee, {
                children: [
                  (0, vt.jsx)(b, {
                    children: ya(Object.entries(u), ([e, a], s) => {
                      const n = a.result.component;
                      return (0, vt.jsx)(
                        ia,
                        {
                          children: (0, vt.jsx)(n, {
                            animation: s <= (f[o] ?? -1),
                            immediateAnimation: r,
                            pushNotifications: t.pushNotifications,
                          }),
                        },
                        e,
                      );
                    }),
                  }),
                  (0, vt.jsx)(ra, { classNames: { base: Mo } }),
                ],
              }),
        }),
      })
    );
  }),
  Fo = (0, ot.createContext)(null);
function Ko() {
  const e = (0, ot.useContext)(Fo);
  if (null === e)
    throw new Error("You can use the achievements hooks only with the Achievements component");
  return e;
}
var qo = { x: 50, y: -30, scale: 1.2, opacity: 0 };
function Qo({ children: e, achievements: a, springsProps: t, vehicleNation: s }) {
  const [r, n] = (0, ot.useState)(new Set()),
    [i, l] = (0, ot.useState)(void 0),
    [o, c] = z(a.length, () => ({ from: { ...qo, ...t?.from }, ...t }), [a.length, t]),
    d = (0, ot.useMemo)(
      () => ({
        api: c,
        springs: o,
        vehicleNation: s,
        achievements: a,
        hoverIndex: i,
        setHoverIndex: l,
        completedAnimationIndexes: r,
        setCompletedAnimationIndexes: n,
      }),
      [c, o, s, a, i, l, r, n],
    );
  return (0, vt.jsx)(Fo.Provider, { value: d, children: e });
}
var Yo = {
    base: "Achievements_ee9c0189",
    animatedAchievement: "Achievements_animatedAchievement_4c71d33",
    achievement: "Achievements_achievement_b41909e2",
    achievement__extinct: "Achievements_achievement__extinct_19551569",
    achievementIcon: "Achievements_achievementIcon_e83ea27d",
    fadeIn: "Achievements_fadeIn_639a4a48",
    fadeInThreeQuarters: "Achievements_fadeInThreeQuarters_639a4a48",
    fadeInHalf: "Achievements_fadeInHalf_639a4a48",
    fadeOut: "Achievements_fadeOut_639a4a48",
    fadeInWithScale: "Achievements_fadeInWithScale_639a4a48",
    slideUp: "Achievements_slideUp_639a4a48",
    scale: "Achievements_scale_639a4a48",
    raysAppearance: "Achievements_raysAppearance_639a4a48",
    rotate: "Achievements_rotate_639a4a48",
    "reverse-rotate": "Achievements_reverse-rotate_639a4a48",
    glowAppearance: "Achievements_glowAppearance_639a4a48",
    highlightAppearance: "Achievements_highlightAppearance_639a4a48",
    blink: "Achievements_blink_639a4a48",
    slideUpIn: "Achievements_slideUpIn_639a4a48",
  },
  Zo = (0, ot.forwardRef)(function (
    { achievement: e, index: a, width: t, height: s, classNames: r },
    n,
  ) {
    const l = i({
        args: (0, ot.useMemo)(
          () => ({ tooltipId: e.tooltipId, tooltipArgs: e.tooltipArgs }),
          [e.tooltipId, e.tooltipArgs],
        ),
      }),
      o = q(),
      { hoverIndex: c, setHoverIndex: d, vehicleNation: m } = Ko();
    return (0, vt.jsx)("div", {
      ...l,
      ref: n,
      className: F(Yo.achievement, Yo[`achievement__${so(a, c)}`], r?.achievement),
      onMouseEnter: function (e) {
        (o.play("mouse-enter", { original: e, target: "achievements:achievement" }),
          l.onMouseEnter(e),
          d(a));
      },
      onMouseLeave: () => {
        (l.onMouseLeave(), d(void 0));
      },
      children: (0, vt.jsx)(
        Aa,
        {
          width: t,
          height: s,
          path: no({ groupID: e.groupID, iconName: e.iconName, vehicleNation: m }),
          className: F(Yo.achievementIcon, r?.icon),
        },
        e.iconName,
      ),
    });
  }),
  Jo = Ie("Rewards", Yo.base),
  ec =
    ((0, ot.memo)(function ({ width: e, height: a, classNames: t, className: s }) {
      const { achievements: r } = Ko();
      return (0, vt.jsx)(Jo, {
        className: s,
        children: ya(r, (s, r) =>
          (0, vt.jsx)(Zo, { width: e, height: a, index: r, achievement: s, classNames: t }, s.name),
        ),
      });
    }),
    {
      base: "GroupedAchievements_636b322e",
      base__visible: "GroupedAchievements_base__visible_590e18a3",
      marksGroup: "GroupedAchievements_marksGroup_a52f04b2",
      epicAndHeroicGroup: "GroupedAchievements_epicAndHeroicGroup_74be9c12",
      othersGroup: "GroupedAchievements_othersGroup_681186bf",
      marksGroup__indentWithMarksOnGun:
        "GroupedAchievements_marksGroup__indentWithMarksOnGun_185ceb79",
      marksGroup__masteryIndent: "GroupedAchievements_marksGroup__masteryIndent_c64fb25b",
      epicAndHeroicGroup__indent: "GroupedAchievements_epicAndHeroicGroup__indent_6a27769d",
      animatedAchievement: "GroupedAchievements_animatedAchievement_9210ebd5",
      achievement: "GroupedAchievements_achievement_977416af",
      achievement__notInteractive: "GroupedAchievements_achievement__notInteractive_76fcea70",
      fadeIn: "GroupedAchievements_fadeIn_74be9c12",
      fadeInThreeQuarters: "GroupedAchievements_fadeInThreeQuarters_74be9c12",
      fadeInHalf: "GroupedAchievements_fadeInHalf_74be9c12",
      fadeOut: "GroupedAchievements_fadeOut_74be9c12",
      fadeInWithScale: "GroupedAchievements_fadeInWithScale_74be9c12",
      slideUp: "GroupedAchievements_slideUp_74be9c12",
      scale: "GroupedAchievements_scale_74be9c12",
      raysAppearance: "GroupedAchievements_raysAppearance_74be9c12",
      rotate: "GroupedAchievements_rotate_74be9c12",
      "reverse-rotate": "GroupedAchievements_reverse-rotate_74be9c12",
      glowAppearance: "GroupedAchievements_glowAppearance_74be9c12",
      highlightAppearance: "GroupedAchievements_highlightAppearance_74be9c12",
      blink: "GroupedAchievements_blink_74be9c12",
      slideUpIn: "GroupedAchievements_slideUpIn_74be9c12",
    }),
  ac = (0, ot.memo)(function ({
    achievements: e,
    startIndex: a,
    indent: t = 0,
    group: s,
    medalWidth: r,
    medalHeight: n,
    maxContainerWidth: i,
    hasSiblingGroups: l,
    updateGroupIndent: o,
  }) {
    const c = (0, ot.useRef)(null),
      { springs: d, achievements: m, completedAnimationIndexes: u, hoverIndex: _ } = Ko();
    return (
      ua(() => {
        if (null === c.current) return;
        const a = c.current.offsetWidth + Math.floor((t / e.length) * 2),
          r = me(i);
        o(s, a < r ? Math.floor((r - a) / 2) : 0);
      }, [e.length, r, i, o]),
      (0, vt.jsx)("div", {
        style: { paddingLeft: t, paddingRight: t },
        className: F(ec[`${s}Group`], l && ec[`${s}Group__indent`]),
        children: ya(e, (t, s) => {
          const i = m.length - a - s - 1;
          return (0, vt.jsx)(
            w.div,
            {
              ref: 0 === s ? c : void 0,
              className: ec.animatedAchievement,
              style: { ...d[i], zIndex: a + s === _ ? e.length + 1 : e.length - s },
              children: (0, vt.jsx)(Zo, {
                classNames: {
                  achievement: F(ec.achievement, !1 === u.has(i) && ec.achievement__notInteractive),
                },
                achievement: t,
                width: r,
                height: n,
                index: a + s,
              }),
            },
            s,
          );
        }),
      })
    );
  });
function tc({ marksOnGun: e, hasSiblingGroups: a }) {
  return a && e ? ec.marksGroup__indentWithMarksOnGun : a ? ec.marksGroup__masteryIndent : void 0;
}
var sc = (0, ot.memo)(function ({
    achievements: e,
    startIndex: a,
    medalWidth: t,
    medalHeight: s,
    hasSiblingGroups: r,
  }) {
    const { springs: n, achievements: i, completedAnimationIndexes: l, hoverIndex: o } = Ko();
    return (0, vt.jsx)("div", {
      className: F(
        ec.marksGroup,
        tc({ hasSiblingGroups: r, marksOnGun: e.some((e) => "marksOnGun" === e.name) }),
      ),
      children: ya(e, (r, c) => {
        const d = i.length - a - c - 1;
        return (0, vt.jsx)(
          w.div,
          {
            className: ec.animatedAchievement,
            style: { ...n[d], zIndex: a + c === o ? e.length + 1 : e.length - c },
            children: (0, vt.jsx)(Zo, {
              classNames: {
                achievement: F(ec.achievement, !1 === l.has(d) && ec.achievement__notInteractive),
              },
              achievement: r,
              width: t,
              height: s,
              index: a + c,
            }),
          },
          c,
        );
      }),
    });
  }),
  rc = (0, ot.memo)(function ({ className: e }) {
    const a = Le(
        {
          epicAndHeroic: { width: "120rem", height: "120rem", maxContainerWidth: 120 },
          others: { width: "100rem", height: "100rem", maxContainerWidth: 80 },
        },
        {
          large: {
            epicAndHeroic: { width: "160rem", height: "160rem", maxContainerWidth: 160 },
            others: { width: "140rem", height: "140rem", maxContainerWidth: 100 },
          },
          extraLarge: {
            epicAndHeroic: { width: "220rem", height: "220rem", maxContainerWidth: 220 },
            others: { width: "180rem", height: "180rem", maxContainerWidth: 130 },
          },
        },
      ),
      { achievements: t } = Ko(),
      s = (0, ot.useMemo)(
        () =>
          (function (e) {
            return Fe(
              e,
              (e, a) => {
                switch (Zl(a)) {
                  case Ul:
                  case Ll:
                    e.marks.push(a);
                    break;
                  case Xl:
                  case Fl:
                  case Kl:
                    if (co.includes(a.name)) {
                      e.others.push(a);
                      break;
                    }
                    e.epicAndHeroic.push(a);
                    break;
                  default:
                    e.others.push(a);
                }
                return e;
              },
              { [io]: [], [lo]: [], [oo]: [] },
            );
          })(t),
        [t],
      ),
      [r, n] = (0, ot.useState)(() => ({
        epicAndHeroic: s.marks.length > 0 && s.epicAndHeroic.length > 0 ? void 0 : 0,
        others: s.epicAndHeroic.length + s.marks.length > 0 && s.others.length > 0 ? void 0 : 0,
      })),
      i = (0, ot.useCallback)(
        function (e, a) {
          n((t) => ({ ...t, [e]: a }));
        },
        [n],
      );
    return 0 === t.length
      ? null
      : (0, vt.jsxs)("div", {
          className: F(
            ec.base,
            void 0 !== r.epicAndHeroic && void 0 !== r.others && ec.base__visible,
            e,
          ),
          children: [
            s.marks.length > 0 &&
              (0, vt.jsx)(sc, {
                medalWidth: a.epicAndHeroic.width,
                medalHeight: a.epicAndHeroic.height,
                achievements: Qe(s.marks),
                startIndex: 0,
                hasSiblingGroups: s.epicAndHeroic.length + s.others.length > 0,
              }),
            s.epicAndHeroic.length > 0 &&
              (0, vt.jsx)(ac, {
                group: lo,
                medalWidth: a.epicAndHeroic.width,
                medalHeight: a.epicAndHeroic.height,
                maxContainerWidth: a.epicAndHeroic.maxContainerWidth,
                achievements: Qe(s.epicAndHeroic),
                startIndex: s.marks.length,
                updateGroupIndent: i,
                indent: r.epicAndHeroic,
                hasSiblingGroups: s.others.length > 0,
              }),
            s.others.length > 0 &&
              (0, vt.jsx)(ac, {
                group: oo,
                medalWidth: a.others.width,
                medalHeight: a.others.height,
                maxContainerWidth: a.others.maxContainerWidth,
                achievements: Qe(s.others),
                startIndex: s.marks.length + s.epicAndHeroic.length,
                updateGroupIndent: i,
                indent: r.others,
              }),
          ],
        });
  }),
  nc = (0, ot.createContext)(null);
function ic() {
  const e = (0, ot.useContext)(nc);
  if (null === e)
    throw new Error("You can use the managable bonus hooks only with the ManagableBonus component");
  return e;
}
function lc({
  children: e,
  bonusState: a,
  restriction: t,
  usedAdvertisements: s,
  supportedStates: r,
  supportedAdvertisements: n = Ra,
  ...i
}) {
  const l = (0, ot.useMemo)(
    () => (
      la(Oa(a), `Bonus state ${a} is not supported`),
      {
        ...i,
        bonusState: a,
        restriction: t,
        supportedAdvertisements: n,
        state: Ta[a].define({ restriction: t, supportedAdvertisements: n, usedAdvertisements: s }),
      }
    ),
    [a, t, i, n, s],
  );
  return Array.isArray(r) && !1 === r.includes(a)
    ? (console.error(`State ${a} is not supported for the current game mode`), null)
    : (0, vt.jsx)(nc.Provider, { value: l, children: e });
}
var oc = {
  value: "Currency_value_a12c8cb4",
  fadeIn: "Currency_fadeIn_271064ec",
  fadeInThreeQuarters: "Currency_fadeInThreeQuarters_271064ec",
  fadeInHalf: "Currency_fadeInHalf_271064ec",
  fadeOut: "Currency_fadeOut_271064ec",
  fadeInWithScale: "Currency_fadeInWithScale_271064ec",
  slideUp: "Currency_slideUp_271064ec",
  scale: "Currency_scale_271064ec",
  raysAppearance: "Currency_raysAppearance_271064ec",
  rotate: "Currency_rotate_271064ec",
  "reverse-rotate": "Currency_reverse-rotate_271064ec",
  glowAppearance: "Currency_glowAppearance_271064ec",
  highlightAppearance: "Currency_highlightAppearance_271064ec",
  blink: "Currency_blink_271064ec",
  slideUpIn: "Currency_slideUpIn_271064ec",
};
function cc({ size: e, type: a, classNames: t, withoutPlus: s = !1, value: r }) {
  const n = "gold" === a ? "gold" : "integral";
  return (0, vt.jsx)(we, {
    reverse: !0,
    size: e,
    type: a,
    className: F(oc.currency, t?.currency),
    children: s
      ? (0, vt.jsx)("div", { className: F(oc.value, t?.value), children: Y.formatNumber(n, r) })
      : (0, vt.jsx)(Q, {
          className: F(oc.value, t?.value),
          path: "common.plusValueWithSpace",
          params: { value: Y.formatNumber(n, r) },
        }),
  });
}
var dc = "Advertising_50041e0d",
  mc = "Advertising_base__twoRows_2e4d12dc",
  uc = "Advertising_base__threeRows_5439f637",
  _c = "Advertising_currency_f20fcad",
  fc = "Advertising_currencyValue_18a0b419";
function pc() {
  const {
    state: e,
    supportedAdvertisements: a,
    bonusMultiplier: t,
    durationInDays: s,
    creditsThreshold: r,
    handleAdvertisement: n,
  } = ic();
  qe(() => {
    void 0 !== a &&
      (!1 !== La(a, e)
        ? void 0 !== n
          ? n(e)
          : console.error(
              "The handler for advertisments is not provided. THe logic with cycled adverts will not work.",
            )
        : console.error(
            `The state in the component should be on of the followings ${a.join(", ")}`,
          ));
  });
  const i = m.resolve("strings");
  switch (e) {
    case Ma.creditsAdvertising:
      return (0, vt.jsx)(Q, {
        className: dc,
        path: "battle_results.common.details.premiumAdvertising.credits",
        params: {
          bonusCredits: (0, vt.jsx)(cc, {
            withoutPlus: !0,
            type: "credits",
            size: Ee.small,
            value: r,
            classNames: { currency: _c, value: fc },
          }),
          durationInDays: s,
        },
      });
    case Ma.premiumAdvertising:
      return (0, vt.jsx)(K, {
        className: F(dc, uc),
        text: i.readOrEmpty("battle_results.common.details.premiumPlus.premium"),
      });
    case Ma.squadAdvertising:
      return (0, vt.jsx)(K, {
        className: F(dc, mc),
        text: i.readOrEmpty("battle_results.common.details.premiumPlus.squad"),
      });
    case Ma.bonusAdvertising:
      return (0, vt.jsx)(K, {
        className: F(dc, uc),
        text: i.readOrEmpty("battle_results.common.details.premiumAdvertising.bonus"),
        params: { multiplier: t },
      });
    case Ma.questsAdvertising:
      return (0, vt.jsx)(K, {
        className: F(dc, mc),
        text: i.readOrEmpty("battle_results.common.details.premiumPlus.quests"),
      });
    default:
      return (console.error(`Advertising state ${e} is not supported`), null);
  }
}
var bc = "LeftBonusAttempts_a541b0b8",
  hc = "LeftBonusAttempts_count_24f93d48";
function vc({ count: e }) {
  return (0, vt.jsx)(Q, {
    upgradeLegacy: !0,
    params: {
      count: (0, vt.jsx)("span", { className: hc, children: Y.formatNumber("integral", e) }),
    },
    path: "battle_results.common.premiumBonus.bonusLeft",
    className: bc,
  });
}
var gc = {
  base: "Description_48571438",
  text: "Description_text_f0d64694",
  text__double: "Description_text__double_333f570f",
  fadeIn: "Description_fadeIn_49efcb55",
  fadeInThreeQuarters: "Description_fadeInThreeQuarters_49efcb55",
  fadeInHalf: "Description_fadeInHalf_49efcb55",
  fadeOut: "Description_fadeOut_49efcb55",
  fadeInWithScale: "Description_fadeInWithScale_49efcb55",
  slideUp: "Description_slideUp_49efcb55",
  scale: "Description_scale_49efcb55",
  raysAppearance: "Description_raysAppearance_49efcb55",
  rotate: "Description_rotate_49efcb55",
  "reverse-rotate": "Description_reverse-rotate_49efcb55",
  glowAppearance: "Description_glowAppearance_49efcb55",
  highlightAppearance: "Description_highlightAppearance_49efcb55",
  blink: "Description_blink_49efcb55",
  slideUpIn: "Description_slideUpIn_49efcb55",
};
function yc({ text: e, displayType: a = "single", withAttemts: t = !0 }) {
  const { leftBonusAttempts: s } = ic();
  return (0, vt.jsxs)("div", {
    className: gc.base,
    children: [
      (0, vt.jsx)(K, { text: e, className: F(gc.text, gc[`text__${a}`]) }),
      t && (0, vt.jsx)(vc, { count: s }),
    ],
  });
}
var xc = "PremiumEarnings_d4b9118e",
  Nc = "PremiumEarnings_wrapper_82e68328",
  jc = "PremiumEarnings_wrapper__semiTransparent_bb0620c7",
  Ic = "PremiumEarnings_label_94b3586c",
  wc = "PremiumEarnings_label__highlight_7755be2e",
  Ac = "PremiumEarnings_currencies_d4b9118e",
  Cc = "PremiumEarnings_currency_3f1396eb",
  Bc = "PremiumEarnings_value_cbe7ec27";
function Sc() {
  const e = m.resolve("strings"),
    { premiumAndStandartEarnings: a } = ic();
  return (0, vt.jsxs)("div", {
    className: xc,
    children: [
      (0, vt.jsxs)("div", {
        className: F(Nc, jc),
        children: [
          (0, vt.jsx)("div", {
            className: Ic,
            children: e.readOrEmpty("battle_results.common.details.noPremTitle"),
          }),
          (0, vt.jsxs)("div", {
            className: Ac,
            children: [
              (0, vt.jsx)(cc, {
                withoutPlus: !0,
                size: Ee.small,
                type: "credits",
                classNames: { currency: Cc, value: Bc },
                value: a.baseCredits,
              }),
              (0, vt.jsx)(cc, {
                withoutPlus: !0,
                size: Ee.small,
                type: "tankXP",
                classNames: { currency: Cc, value: Bc },
                value: a.baseVehicleXP,
              }),
            ],
          }),
        ],
      }),
      (0, vt.jsxs)("div", {
        className: Nc,
        children: [
          (0, vt.jsx)("div", {
            className: F(Ic, wc),
            children: e.readOrEmpty("battle_results.common.details.premTitle"),
          }),
          (0, vt.jsxs)("div", {
            className: Ac,
            children: [
              (0, vt.jsx)(cc, {
                withoutPlus: !0,
                size: Ee.small,
                type: "credits",
                classNames: { currency: Cc, value: Bc },
                value: a.premiumCredits,
              }),
              (0, vt.jsx)(cc, {
                withoutPlus: !0,
                size: Ee.small,
                type: "tankXP",
                classNames: { currency: Cc, value: Bc },
                value: a.premiumVehicleXP,
              }),
            ],
          }),
        ],
      }),
    ],
  });
}
var Pc = "PremiumInfoCurrencies_value_5b83491e",
  Rc = "PremiumInfoCurrencies_currency_6908b9d9",
  kc = Ie("PremiumInfoCurrencies", "PremiumInfoCurrencies_8b21f7ee");
function Tc() {
  const e = Le({ size: Ee.small }, { medium: { size: Ee.large } }),
    { premiumAndStandartEarnings: a } = ic();
  return (0, vt.jsxs)(kc, {
    children: [
      (0, vt.jsx)(cc, {
        size: e.size,
        type: "credits",
        classNames: { currency: Rc, value: Pc },
        value: a.creditsDiff,
      }),
      (0, vt.jsx)(cc, {
        size: e.size,
        type: "tankXP",
        classNames: { currency: Rc, value: Pc },
        value: a.vehicleXPDiff,
      }),
    ],
  });
}
var Ec = Ie("Content"),
  Dc = (0, ot.forwardRef)(function (e, a) {
    const { state: t } = ic(),
      s = m.resolve("strings");
    return (0, vt.jsx)(Ec, {
      ...e,
      ref: a,
      children: (() => {
        switch (t) {
          case Ma.premiumInfo:
            return (0, vt.jsx)(Tc, {});
          case Ma.applyBonus:
          case Ma.appliedBonus:
          case Ma.noVehicle:
          case Ma.fasterEducationCrewActive:
          case Ma.fasterEducationCrewNotActive:
          case Ma.noCrew:
          case Ma.plusEarnings:
          case Ma.plusYouRock:
            return (0, vt.jsx)(yc, {
              text: s.readOrEmpty("battle_results.common.premiumBonus.description"),
              displayType: "single",
            });
          case Ma.isNotVictory:
            return (0, vt.jsx)(yc, {
              text: s.readOrEmpty("battle_results.common.premiumBonus.rule"),
              displayType: "double",
            });
          case Ma.requiredRecentBattleAndVehicle:
            return (0, vt.jsx)(yc, {
              text: s.readOrEmpty("battle_results.common.premiumBonus.expiredBattleResult"),
              displayType: "double",
            });
          case Ma.invalidBattleType:
            return (0, vt.jsx)(yc, {
              withAttemts: !1,
              text: s.readOrEmpty("battle_results.common.premiumBonus.unavailable"),
              displayType: "double",
            });
          case Ma.plusInfo:
            return (0, vt.jsx)(yc, {
              withAttemts: !1,
              text: s.readOrEmpty("battle_results.common.plusBonus.premiumPlusAdd"),
              displayType: "double",
            });
          case Ma.premiumEarnings:
            return (0, vt.jsx)(Sc, {});
          case Ma.premiumAdvertising:
          case Ma.creditsAdvertising:
          case Ma.squadAdvertising:
          case Ma.bonusAdvertising:
          case Ma.questsAdvertising:
            return (0, vt.jsx)(pc, {});
          default:
            return (console.error(`State ${t} is not supported`), null);
        }
      })(),
    });
  }),
  Hc = "AppliedBonusInfo_910a06bc",
  Oc = "AppliedBonusInfo_icon_208dd0cc";
function Vc() {
  return (0, vt.jsxs)("div", {
    className: Hc,
    children: [
      (0, vt.jsx)("div", { className: Oc }),
      (0, vt.jsx)(Q, { path: "battle_results.common.premiumBonus.appliedBonus" }),
    ],
  });
}
var zc = "ApplyButton_fa337b96",
  Wc = "ApplyButton_button_a471284",
  Mc = "ApplyButton_value_c22167ea";
function Gc() {
  const e = m.resolve("strings"),
    { bonusXpDiff: a, applyBonus: t } = ic(),
    s = Le(
      { iconSize: Ee.small, buttonSize: sa.sizes.small },
      { large: { iconSize: Ee.large }, extraLarge: { buttonSize: sa.sizes.medium } },
    );
  return (0, vt.jsxs)("div", {
    className: zc,
    children: [
      (0, vt.jsx)(cc, { type: "tankXP", size: s.iconSize, value: a, classNames: { value: Mc } }),
      (0, vt.jsx)(sa, {
        size: s.buttonSize,
        theme: sa.themes.primary,
        className: Wc,
        onClick: t,
        soundTarget: "managable-bonus:apply-button",
        children: e.readOrEmpty("battle_results.common.premiumBonus.applyBonusBtn"),
      }),
    ],
  });
}
var $c = "PlusEarnings_505f274c",
  Uc = "PlusEarnings_label_79ad021c",
  Lc = "PlusEarnings_link_649208b3",
  Xc = "PlusEarnings_currency_fddc9198",
  Fc = "PlusEarnings_value_fe187db9",
  Kc = "withWotPlus",
  qc = "withWotPremium";
var Qc = {
  [Kc]: "battle_results.common.plusBonus.wotPlus",
  [qc]: "battle_results.common.plusBonus.wotPremium",
};
function Yc({ onClick: e }) {
  const a = m.resolve("strings"),
    t = k().breakpoint,
    { wotPlusType: s, wotPremium: r, bonusXpDiff: n } = ic(),
    i = s === Ea.Core || s === Ea.Pro,
    l = (function (e, a) {
      return a && !1 === e ? Kc : e && !1 === a ? qc : void 0;
    })(i, r);
  if (void 0 !== l)
    return (0, vt.jsxs)("div", {
      className: $c,
      children: [
        (0, vt.jsxs)("div", {
          className: Uc,
          children: [
            a.readOrEmpty("battle_results.common.plusBonus.bonusLeftAdditionalText"),
            (0, vt.jsx)("span", { className: Lc, onClick: e, children: a.readOrEmpty(Qc[l]) }),
          ],
        }),
        (0, vt.jsx)(cc, {
          type: "tankXP",
          size: t.weight >= Ca.medium.weight ? Ee.large : Ee.small,
          value: n,
          classNames: { currency: Xc, value: Fc },
        }),
      ],
    });
  console.error(
    `plus earnings state can't have such flag combination: wotPlus: ${i}, wotPremium: ${r}`,
  );
}
var Zc = "PlusYouRock_a108dad8",
  Jc = "PlusYouRock_message_52bfa860",
  ed = "PlusYouRock_rock_6d6e55b1",
  ad = "PlusYouRock_currency_73dcb93a",
  td = "PlusYouRock_value_daab6eb6";
function sd() {
  const e = m.resolve("strings"),
    a = k().breakpoint,
    { dailyAppliedAdditionalXP: t } = ic();
  return (0, vt.jsxs)("div", {
    className: Zc,
    children: [
      (0, vt.jsxs)("div", {
        className: Jc,
        children: [
          (0, vt.jsx)("span", {
            className: ed,
            children: e.readOrEmpty("battle_results.common.plusBonus.youRock"),
          }),
          " ",
          e.readOrEmpty("battle_results.common.plusBonus.earnedMessage"),
        ],
      }),
      (0, vt.jsx)(cc, {
        type: "tankXP",
        size: a.weight >= Ca.medium.weight ? Ee.large : Ee.small,
        value: t,
        classNames: { currency: ad, value: td },
      }),
    ],
  });
}
var rd = {
  base: "PremiumInfoButton_66b12c2",
  button: "PremiumInfoButton_button_870d4076",
  buttonHint: "PremiumInfoButton_buttonHint_1ee6743f",
  fadeIn: "PremiumInfoButton_fadeIn_30b191d",
  fadeInThreeQuarters: "PremiumInfoButton_fadeInThreeQuarters_30b191d",
  fadeInHalf: "PremiumInfoButton_fadeInHalf_30b191d",
  fadeOut: "PremiumInfoButton_fadeOut_30b191d",
  fadeInWithScale: "PremiumInfoButton_fadeInWithScale_30b191d",
  slideUp: "PremiumInfoButton_slideUp_30b191d",
  scale: "PremiumInfoButton_scale_30b191d",
  raysAppearance: "PremiumInfoButton_raysAppearance_30b191d",
  rotate: "PremiumInfoButton_rotate_30b191d",
  "reverse-rotate": "PremiumInfoButton_reverse-rotate_30b191d",
  glowAppearance: "PremiumInfoButton_glowAppearance_30b191d",
  highlightAppearance: "PremiumInfoButton_highlightAppearance_30b191d",
  blink: "PremiumInfoButton_blink_30b191d",
  slideUpIn: "PremiumInfoButton_slideUpIn_30b191d",
};
function nd({ onClick: e, withLabel: a = !1 }) {
  const t = m.resolve("strings"),
    { breakpoint: s } = k(),
    r = s.weight > Ca.large.weight ? sa.sizes.medium : sa.sizes.small;
  return (0, vt.jsxs)("div", {
    className: F(rd.base, a && rd.base__withLabel),
    children: [
      a &&
        (0, vt.jsx)("div", {
          className: rd.buttonHint,
          children: t.readOrEmpty("battle_results.common.premiumBonus.earnMore"),
        }),
      (0, vt.jsx)(sa, {
        className: rd.button,
        size: a ? sa.sizes.small : r,
        theme: sa.themes.primary,
        onClick: e,
        soundTarget: "managable-bonus:premium-info-button",
        children: t.readOrEmpty("battle_results.common.details.getPremBtn"),
      }),
    ],
  });
}
var id = "Restriction_8b730e49",
  ld = "Restriction_iconWrapper_ac9b1b94",
  od = "Restriction_icon_ef5c0819",
  cd = "Restriction_formattedText_b2d2b647";
function dd({ path: e, tooltipParams: a }) {
  const t = S(a);
  return (0, vt.jsx)("div", {
    className: id,
    children: (0, vt.jsx)(Q, {
      path: e,
      className: cd,
      params: {
        info: (0, vt.jsx)("span", {
          ...t,
          className: ld,
          children: (0, vt.jsx)(Ne, { path: "post_battle.info", className: od }),
        }),
      },
    }),
  });
}
var md = Ie("Footer"),
  ud = (0, ot.forwardRef)(function (e, a) {
    const { state: t, showBonusDetails: s } = ic(),
      r = m.resolve("strings");
    return (0, vt.jsx)(md, {
      ...e,
      ref: a,
      children: (() => {
        switch (t) {
          case Ma.premiumInfo:
            return (0, vt.jsx)(nd, { withLabel: !0, onClick: s });
          case Ma.applyBonus:
            return (0, vt.jsx)(Gc, {});
          case Ma.appliedBonus:
            return (0, vt.jsx)(Vc, {});
          case Ma.noVehicle:
            return (0, vt.jsx)(dd, {
              path: "battle_results.common.premiumBonus.tankStateChangedWithInfo",
              tooltipParams: {
                header: r.readOrEmpty(
                  "tooltips.battleResults.premiumBonus.tankStateChanged.header",
                ),
                body: r.readOrEmpty("tooltips.battleResults.premiumBonus.tankStateChanged.body"),
              },
            });
          case Ma.fasterEducationCrewActive:
            return (0, vt.jsx)(dd, {
              path: "battle_results.common.premiumBonus.isXPToTmenEnabledWithInfo",
              tooltipParams: {
                body: r.readOrEmpty("tooltips.battleResults.premiumBonus.xpToTmenChanged.body"),
              },
            });
          case Ma.fasterEducationCrewNotActive:
            return (0, vt.jsx)(dd, {
              path: "battle_results.common.premiumBonus.isXPToTmenDisabledWithInfo",
              tooltipParams: {
                body: r.readOrEmpty("tooltips.battleResults.premiumBonus.xpToTmenChanged.body"),
              },
            });
          case Ma.noCrew:
            return (0, vt.jsx)(dd, {
              path: "battle_results.common.premiumBonus.tankmenStateChangedWithInfo",
              tooltipParams: {
                header: r.readOrEmpty(
                  "tooltips.battleResults.premiumBonus.tankmenStateChanged.header",
                ),
                body: r.readOrEmpty("tooltips.battleResults.premiumBonus.tankmenStateChanged.body"),
              },
            });
          case Ma.plusInfo:
            return (0, vt.jsx)(nd, { onClick: s });
          case Ma.plusEarnings:
            return (0, vt.jsx)(Yc, { onClick: s });
          case Ma.plusYouRock:
            return (0, vt.jsx)(sd, {});
          case Ma.creditsAdvertising:
          case Ma.premiumAdvertising:
          case Ma.squadAdvertising:
          case Ma.bonusAdvertising:
          case Ma.questsAdvertising:
            return (0, vt.jsx)(nd, { onClick: s });
          default:
            return null;
        }
      })(),
    });
  }),
  _d = {
    icon: "Header_icon_6d03683a",
    base__premiumInfo: "Header_base__premiumInfo_65f475ba",
    base__premiumEarnings: "Header_base__premiumEarnings_65f475ba",
    base__premiumAdvertising: "Header_base__premiumAdvertising_65f475ba",
    base__applyBonus: "Header_base__applyBonus_65f475ba",
    base__appliedBonus: "Header_base__appliedBonus_65f475ba",
    base__noVehicle: "Header_base__noVehicle_65f475ba",
    base__fasterEducationCrewActive: "Header_base__fasterEducationCrewActive_65f475ba",
    base__fasterEducationCrewNotActive: "Header_base__fasterEducationCrewNotActive_65f475ba",
    base__noCrew: "Header_base__noCrew_65f475ba",
    base__plusInfo: "Header_base__plusInfo_65f475ba",
    base__plusEarnings: "Header_base__plusEarnings_65f475ba",
    base__plusYouRock: "Header_base__plusYouRock_65f475ba",
    base__bonusAdvertising: "Header_base__bonusAdvertising_65f475ba",
    base__isNotVictory: "Header_base__isNotVictory_65f475ba",
    base__requiredRecentBattleAndVehicle: "Header_base__requiredRecentBattleAndVehicle_65f475ba",
    base__invalidBattleType: "Header_base__invalidBattleType_65f475ba",
    base__creditsAdvertising: "Header_base__creditsAdvertising_65f475ba",
    base__squadAdvertising: "Header_base__squadAdvertising_65f475ba",
    base__questsAdvertising: "Header_base__questsAdvertising_65f475ba",
    bonusMultiplier: "Header_bonusMultiplier_f62ee8c5",
    text: "Header_text_52d638",
    text__textOverlay: "Header_text__textOverlay_90669143",
    fadeIn: "Header_fadeIn_65f475ba",
    fadeInThreeQuarters: "Header_fadeInThreeQuarters_65f475ba",
    fadeInHalf: "Header_fadeInHalf_65f475ba",
    fadeOut: "Header_fadeOut_65f475ba",
    fadeInWithScale: "Header_fadeInWithScale_65f475ba",
    slideUp: "Header_slideUp_65f475ba",
    scale: "Header_scale_65f475ba",
    raysAppearance: "Header_raysAppearance_65f475ba",
    rotate: "Header_rotate_65f475ba",
    "reverse-rotate": "Header_reverse-rotate_65f475ba",
    glowAppearance: "Header_glowAppearance_65f475ba",
    highlightAppearance: "Header_highlightAppearance_65f475ba",
    blink: "Header_blink_65f475ba",
    slideUpIn: "Header_slideUpIn_65f475ba",
  },
  fd = Ie("Header"),
  pd = (0, ot.forwardRef)(function ({ className: e, classNames: a, ...t }, s) {
    const { state: r, bonusMultiplier: n } = ic(),
      i = m
        .resolve("strings")
        .readOrEmpty("battle_results.common.premiumBonus.bonusMultiplier")
        .replace("{{value}}", n.toString());
    return (0, vt.jsx)(fd, {
      ref: s,
      className: F(_d[`base__${r}`], e),
      ...t,
      children: (0, vt.jsx)("div", {
        className: F(_d.icon, a?.icon),
        children: (0, vt.jsx)(wa, {
          classNames: {
            base: _d.bonusMultiplier,
            text: _d.text,
            textOverlay: F(_d.text, _d.text__textOverlay),
          },
          children: i,
        }),
      }),
    });
  }),
  bd = Ie("ManagableBonus", "ManagableBonus_55c8d52d"),
  hd = (0, ot.memo)(bd);
((hd.Header = pd), (hd.Content = Dc), (hd.Footer = ud));
var vd = {
  bonus__disabled: "Bonus_bonus__disabled_d9abacdd",
  content: "Bonus_content_58a93521",
  bonus__premiumInfo: "Bonus_bonus__premiumInfo_d9abacdd",
  bonus__applyBonus: "Bonus_bonus__applyBonus_d9abacdd",
  bonus__appliedBonus: "Bonus_bonus__appliedBonus_d9abacdd",
  bonus__isNotVictory: "Bonus_bonus__isNotVictory_d9abacdd",
  bonus__invalidBattleType: "Bonus_bonus__invalidBattleType_d9abacdd",
  bonus__requiredRecentBattleAndVehicle: "Bonus_bonus__requiredRecentBattleAndVehicle_d9abacdd",
  bonus__noVehicle: "Bonus_bonus__noVehicle_d9abacdd",
  bonus__fasterEducationCrewActive: "Bonus_bonus__fasterEducationCrewActive_d9abacdd",
  bonus__fasterEducationCrewNotActive: "Bonus_bonus__fasterEducationCrewNotActive_d9abacdd",
  bonus__noCrew: "Bonus_bonus__noCrew_d9abacdd",
  bonus__premiumEarnings: "Bonus_bonus__premiumEarnings_d9abacdd",
  bonus__plusInfo: "Bonus_bonus__plusInfo_d9abacdd",
  bonus__plusEarnings: "Bonus_bonus__plusEarnings_d9abacdd",
  bonus__plusYouRock: "Bonus_bonus__plusYouRock_d9abacdd",
  bonus__creditsAdvertising: "Bonus_bonus__creditsAdvertising_d9abacdd",
  bonus__premiumAdvertising: "Bonus_bonus__premiumAdvertising_d9abacdd",
  bonus__squadAdvertising: "Bonus_bonus__squadAdvertising_d9abacdd",
  bonus__questsAdvertising: "Bonus_bonus__questsAdvertising_d9abacdd",
  bonus__bonusAdvertising: "Bonus_bonus__bonusAdvertising_d9abacdd",
  footer: "Bonus_footer_9b2e3fe3",
  fadeIn: "Bonus_fadeIn_d9abacdd",
  fadeInThreeQuarters: "Bonus_fadeInThreeQuarters_d9abacdd",
  fadeInHalf: "Bonus_fadeInHalf_d9abacdd",
  fadeOut: "Bonus_fadeOut_d9abacdd",
  fadeInWithScale: "Bonus_fadeInWithScale_d9abacdd",
  slideUp: "Bonus_slideUp_d9abacdd",
  scale: "Bonus_scale_d9abacdd",
  raysAppearance: "Bonus_raysAppearance_d9abacdd",
  rotate: "Bonus_rotate_d9abacdd",
  "reverse-rotate": "Bonus_reverse-rotate_d9abacdd",
  glowAppearance: "Bonus_glowAppearance_d9abacdd",
  highlightAppearance: "Bonus_highlightAppearance_d9abacdd",
  blink: "Bonus_blink_d9abacdd",
  slideUpIn: "Bonus_slideUpIn_d9abacdd",
};
function gd({ className: e }) {
  const { state: a } = ic(),
    { completedSteps: t } = Qt();
  return (0, vt.jsxs)(hd, {
    className: F(vd.bonus, vd[`bonus__${a}`], !1 === t.has(Ft.third) && vd.bonus__disabled, e),
    children: [
      (0, vt.jsx)(hd.Header, {}),
      (0, vt.jsx)(hd.Content, { className: vd.content }),
      (0, vt.jsx)(hd.Footer, { className: vd.footer }),
    ],
  });
}
var yd = "AnimatedNumber_958fc84e",
  xd = "AnimatedNumber_slotMachineDigit_a9587a5a",
  Nd = "AnimatedNumber_plugChar_c66678",
  jd = "AnimatedNumber_digitsList_2065427d",
  Id = Ia.cubicBezier(0.33, 0, 0.25, 1);
function wd({ immediate: e, symbol: a, step: t, delay: s, first: r, handleFirstRest: n }) {
  const [i, l] = (0, ot.useState)(!1),
    [o, c] = de(() => ({ from: { y: 0, opacity: 0 } })),
    d = /^\d$/.test(a);
  const m = d ? parseInt(a) : 1;
  return (
    (0, ot.useEffect)(() => {
      i && r && n();
    }, [i, r, n]),
    (0, ot.useEffect)(() => {
      t > 0 &&
        (e && l(!0),
        c.start({
          delay: i ? 0 : s,
          from: { y: e ? -m * t : t, opacity: 1 },
          to: { y: -m * t, opacity: 1 },
          config: { duration: 600, easing: Id },
          immediate: e || i,
          onRest() {
            l(!0);
          },
        }));
    }, [t, c, i, s, m, e]),
    (0, vt.jsxs)("div", {
      className: xd,
      children: [
        (0, vt.jsx)("div", { className: Nd, children: a }),
        (0, vt.jsx)(w.div, {
          style: o,
          className: jd,
          children: Ze(0, m + 1, (e) =>
            d
              ? (0, vt.jsx)("div", { children: e }, e)
              : (0, vt.jsx)("div", { style: { height: t }, children: e > 0 ? a : null }, e),
          ),
        }),
      ],
    })
  );
}
var Ad = (0, ot.memo)(function ({
    immediate: e,
    value: a,
    readyToAnimate: t,
    className: s,
    handleAnimationFinished: r,
    type: n,
  }) {
    const [i, l] = ha(),
      o = (0, ot.useMemo)(() => a.split(""), [a]),
      c = (0, ot.useCallback)(() => r(n), [r, n]);
    return (0, vt.jsx)("div", {
      ref: i,
      className: F(yd, s),
      children: o.map((s, r) =>
        (0, vt.jsx)(
          wd,
          {
            first: 0 === r,
            handleFirstRest: c,
            immediate: e,
            delay: 200 * (o.length - r),
            symbol: s,
            step: l.type === _e.measured && t ? l.size.height : 0,
          },
          `${a}-${r}`,
        ),
      ),
    });
  }),
  Cd = "Currency_10720e2d",
  Bd = "Currency_icon_4d923f64",
  Sd = "Currency_icon__visible_9c676b12",
  Pd = "Currency_value_b21680b3",
  Rd = { xp: "tankXP", crystal: "crystal", credits: "credits", gold: "gold" },
  kd = Object.keys(Rd);
function Td({
  immediate: e,
  type: a,
  value: t,
  size: s,
  visibleIfZero: r,
  readyToAnimate: n,
  handleAnimationFinished: i,
}) {
  return ((e) => kd.includes(e))(a)
    ? 0 !== t || r
      ? (0, vt.jsx)(we, {
          reverse: !0,
          type: Rd[a],
          size: s,
          className: Cd,
          classNames: { icon: F(Bd, (n || e) && Sd) },
          children: (0, vt.jsx)(Ad, {
            className: Pd,
            immediate: e,
            readyToAnimate: n,
            type: a,
            handleAnimationFinished: i,
            value: Y.formatNumber(a === ta.gold ? "gold" : "integral", t),
          }),
        })
      : null
    : (console.error(`There is no such currency in the template literal: ${a}`), null);
}
var Ed = Ie("Currencies", "Currencies_5b11a533"),
  Dd = Fa(function ({ className: e }) {
    const [a, s] = (0, ot.useState)(!1),
      [r, n] = (0, ot.useState)(new Set()),
      [i, l] = (0, ot.useState)(!1),
      { model: o } = Eo(),
      c = o.computes.earnedCurrencies(),
      d = o.additionalBonus.get(),
      m = va(c),
      u = q(),
      { step: _, setAllCurrenciesAniamted: f } = Qt(),
      p = Le(
        { value: Ee.medium },
        { medium: { value: Ee.large }, large: { value: Ee.extraLarge } },
      );
    ((0, ot.useEffect)(() => {
      void 0 !== m && m !== c && u.play("startRolling", { target: "overview:currencies" });
    }, [c, m, u, _]),
      (0, ot.useEffect)(() => {
        (_ !== Ft.third && _ !== Ft.immediate) ||
          (_ === Ft.third && u.play("startRolling", { target: "overview:currencies" }), s(!0));
      }, [_, u]),
      (0, ot.useEffect)(() => {
        r.size === c.filter(({ value: e, visibleIfZero: a }) => e > 0 || a).length &&
          (_ !== Ft.immediate && u.play("stopRolling", { target: "overview:currencies" }),
          f(!0),
          d.bonusState === Va.PremiumBonus &&
            d.restriction === Da.NoRestriction &&
            (n((e) => Pe(e, "xp")), l(!0)));
      }, [_, r, c, u, d.bonusState, d.restriction, f]));
    const b = (0, ot.useCallback)(function (e) {
      n((a) => t(a, e));
    }, []);
    return (0, vt.jsx)(Ed, {
      className: e,
      children: ya(c, (e) =>
        (0, vt.jsx)(
          Td,
          {
            readyToAnimate: a,
            size: p.value,
            handleAnimationFinished: b,
            immediate: _ === Ft.immediate && !1 === i,
            ...e,
          },
          e.type,
        ),
      ),
    });
  }),
  Hd = "Overview_flare_5277bd9e",
  Od = "Overview_vignette_ff9b1e99",
  Vd = "Overview_6f9734b8",
  zd = "Overview_info_88809345",
  Wd = "Overview_battleStatusContainer_add752bc",
  Md = "Overview_dividerWrapper_a8c790eb",
  Gd = "Overview_base__simplified_8249f573",
  $d = "Overview_statusText_be513c69",
  Ud = "Overview_divider_652a671e",
  Ld = "Overview_dividerImage_2a8a0c0e",
  Xd = "Overview_rewards_77ba059e",
  Fd = "Overview_rewards__long_2a861c93",
  Kd = "Overview_currencies_5c3cba28",
  qd = "Overview_achievements_6ffbee5a",
  Qd = "Overview_rewardsDivider_5517ff41",
  Yd = "Overview_bonus_30af9d4",
  Zd = Fa(function () {
    const { model: e } = Eo(),
      { active: a } = I(),
      [{ x: t }, s] = de(() => ({ x: 0 })),
      r = e.computes.isWin()
        ? R.images.comp7.gui.maps.icons.backgrounds.no_epic_victory_flare()
        : R.images.comp7.gui.maps.icons.backgrounds.no_epic_draw_defeat_flare(),
      n = (0, ot.useRef)(null);
    return (
      (0, ot.useEffect)(() => {
        if (a === Xa.overview)
          return oa.move(function ([e]) {
            const a = Re().width,
              t = 2 * (e.clientX / a - 0.5);
            s.start({ x: 3 * t });
          });
      }),
      (0, vt.jsx)(w.div, {
        ref: n,
        className: Hd,
        style: {
          backgroundImage: `url(${r})`,
          backgroundPosition: t.to((e) => `${50 + e}% center`),
        },
      })
    );
  }),
  Jd = (0, ot.createContext)(null);
function em() {
  const e = (0, ot.useContext)(Jd);
  if (null === e)
    throw new Error(
      "You can use the expandable overlay hooks only with the ExpandableOverlay widget component",
    );
  return e;
}
function am({ children: e, visible: a, changeVisible: t, closedPosition: s, animationProps: r }) {
  const [n, i] = (0, ot.useState)(a ?? !1),
    [l, o] = de(() => ({
      from: { ...r, y: n ? "0" : s, backgroundColor: n ? "rgba(18, 19, 22, 0.8)" : "transparent" },
    })),
    [c, d] = de(() => ({ from: { opacity: n ? 1 : 0 } })),
    [m, u] = de(() => ({ from: { x: "-50%", y: "0", rotate: 180, opacity: 1 } }));
  ((0, ot.useLayoutEffect)(() => {
    void 0 !== a && i(a);
  }, [a]),
    (0, ot.useEffect)(() => {
      t?.(n);
    }, [n, t]));
  const _ = (0, ot.useMemo)(
    () => ({
      opened: n,
      closedPosition: s,
      animationProps: r,
      handleOpen: i,
      overlayStyles: l,
      overlayApi: o,
      shadowStyles: c,
      shadowApi: d,
      arrowStyles: m,
      arrowStylesApi: u,
    }),
    [n, s, r, i, l, o, c, d, m, u],
  );
  return (0, vt.jsx)(Jd.Provider, { value: _, children: e });
}
var tm = "HintKey_keyButton_e4149405",
  sm = "HintKey_background_e4149405",
  rm = "HintKey_border_71616e63",
  nm = "HintKey_content_63ecef8",
  im = "HintKey_triangle_fb0bc682",
  lm = "HintKey_triangleNoise_6e72dfca",
  om = Ie("PersoanlEfficiencyHintKey", "HintKey_2efc42a0");
var cm = {
    base: "OverlayDivider_fcc0c30",
    divider: "OverlayDivider_divider_1acaec30",
    divider__right: "OverlayDivider_divider__right_546d0e74",
    base__closed: "OverlayDivider_base__closed_ceb65522",
    dividerImageElement: "OverlayDivider_dividerImageElement_9babecb0",
    fadeIn: "OverlayDivider_fadeIn_ceb65522",
    fadeInThreeQuarters: "OverlayDivider_fadeInThreeQuarters_ceb65522",
    fadeInHalf: "OverlayDivider_fadeInHalf_ceb65522",
    fadeOut: "OverlayDivider_fadeOut_ceb65522",
    fadeInWithScale: "OverlayDivider_fadeInWithScale_ceb65522",
    slideUp: "OverlayDivider_slideUp_ceb65522",
    scale: "OverlayDivider_scale_ceb65522",
    raysAppearance: "OverlayDivider_raysAppearance_ceb65522",
    rotate: "OverlayDivider_rotate_ceb65522",
    "reverse-rotate": "OverlayDivider_reverse-rotate_ceb65522",
    glowAppearance: "OverlayDivider_glowAppearance_ceb65522",
    highlightAppearance: "OverlayDivider_highlightAppearance_ceb65522",
    blink: "OverlayDivider_blink_ceb65522",
    slideUpIn: "OverlayDivider_slideUpIn_ceb65522",
  },
  dm = (0, ot.forwardRef)(function ({ className: e, classNames: a }, t) {
    const { opened: s } = em();
    return (0, vt.jsxs)("div", {
      ref: t,
      className: F(cm.base, !s && cm.base__closed, a?.base, e),
      children: [
        (0, vt.jsx)(ss, {
          classNames: {
            base: F(cm.divider, cm.divider__left, a?.divider?.base),
            image: F(cm.dividerImageElement, a?.divider?.image),
          },
        }),
        (0, vt.jsx)(ss, {
          classNames: {
            base: F(cm.divider, cm.divider__right, a?.divider?.base, a?.rightDivider?.base),
            image: F(cm.dividerImageElement, a?.divider?.image, a?.rightDivider?.image),
          },
        }),
      ],
    });
  }),
  mm = "ExpandableOverlay_7ce5a85e",
  um = "ExpandableOverlay_base__opened_7d677539",
  _m = "ExpandableOverlay_shadow_644e64b8",
  fm = (0, ot.forwardRef)(function ({ children: e }, a) {
    const { opened: t, handleOpen: s, overlayStyles: r, shadowStyles: n } = em(),
      i = q();
    return (
      (0, ot.useEffect)(() => {
        function e(e) {
          (s(!1), t && i.play("closeOverlay", { original: e, target: "expandable-overlay" }));
        }
        return (
          document.addEventListener("click", e),
          () => document.removeEventListener("click", e)
        );
      }, [t, i, s]),
      (0, vt.jsxs)(w.div, {
        ref: a,
        "data-name": "ExpandableOverlay",
        className: F(mm, t && um),
        style: r,
        onClick: function (e) {
          (e.stopPropagation(),
            !1 === t &&
              (i.play("click", { original: e, target: "expandable-overlay" }),
              i.play("openOverlay", { original: e, target: "expandable-overlay" }),
              s(!0)));
        },
        children: [(0, vt.jsx)(w.div, { className: _m, style: n }), e],
      })
    );
  });
((fm.HintKey = function ({
  disabled: e,
  throttleDelay: a = 600,
  classNames: t,
  keyCode: s = B.SPACE,
  triangleNoisePath: r = "post_battle.noise",
}) {
  const { handleOpen: n, arrowStyles: i } = em(),
    l = q(),
    o = Ba(
      (a) => {
        e ||
          (l.play("click", { original: a, target: "expandable-overlay:hint-key" }),
          n(
            (e) => (
              l.play(e ? "closeOverlay" : "openOverlay", {
                original: a,
                target: "expandable-overlay:hint-key",
              }),
              !e
            ),
          ));
      },
      [e, n, l],
      a,
    );
  return (0, vt.jsx)(vt.Fragment, {
    children: (0, vt.jsxs)(om, {
      className: t?.base,
      onClick: (e) => {
        (e.stopPropagation(),
          n(
            (a) => (
              l.play(a ? "closeOverlay" : "openOverlay", {
                original: e,
                target: "expandable-overlay:hint-key",
              }),
              !a
            ),
          ));
      },
      children: [
        (0, vt.jsx)(g, {
          keyCode: s,
          classNames: {
            base: F(tm, t?.keyButton),
            background: F(sm, t?.keyButton?.background),
            content: F(nm, t?.keyButton?.content),
            border: F(rm, t?.keyButton?.border),
          },
          soundTarget: "expandable-overlay:hint-key",
          onActive: o,
          children: (0, vt.jsx)(g.Code, {}),
        }),
        (0, vt.jsx)(w.div, {
          className: F(im, t?.triangle),
          style: i,
          children: (0, vt.jsx)(Aa, { fit: "cover", path: r, className: F(lm, t?.triangleNoise) }),
        }),
      ],
    }),
  });
}),
  (fm.OverlayDivider = dm));
var pm = "PrestigePointsCell_image_f905fab0",
  bm = "HeaderCell_cellWithValue_78949e6d",
  hm = "HeaderCell_cellWithValue__totalInfo_789bf7be",
  vm = "HeaderCell_cellWithValue__zeroIndent_334269c9",
  gm = "HeaderCell_wrapper_7849c6a",
  ym = "HeaderCell_imageWrapper_a570c717",
  xm = "HeaderCell_value_f7bb7c82",
  Nm = "HeaderCell_cellWithText_710c47ce",
  jm = "HeaderCell_text_35220206";
function Im({ value: e, className: a }) {
  return (0, vt.jsx)("div", {
    ...$e(
      "type",
      (0, ot.useMemo)(
        () => ({ resId: R.views.comp7.mono.lobby.tooltips.prestige_points_info_tooltip("resId") }),
        [],
      ),
    ),
    className: F(bm, hm, a),
    children: (0, vt.jsxs)("div", {
      className: gm,
      children: [
        (0, vt.jsx)("div", { className: xm, children: Y.formatNumber("integral", e) }),
        (0, vt.jsx)("div", { className: ym, children: (0, vt.jsx)("div", { className: pm }) }),
      ],
    }),
  });
}
var wm = "account",
  Am = "vehicle",
  Cm = "targetKills",
  Bm = "damageDealt",
  Sm = "damageBlockedByArmor",
  Pm = "damageAssisted",
  Rm = "damageAssistedStun",
  km = "spotted",
  Tm = "criticalDamage",
  Em = {
    [Cm]: "library.crossed_tank",
    [Bm]: "library.cross_with_gap",
    [Sm]: "library.blocked",
    [Pm]: "library.double_target",
    [Rm]: "library.arrow_with_fading",
    [km]: "library.eyebrow",
    [Tm]: "library.gear_with_gap",
  };
var Dm = { behaviour: ke.contentResponsive, minSize: "0rem", maxSize: "1000rem" },
  Hm = {
    [wm]: {
      [M.extraSmall]: { behaviour: ke.static, size: "200rem" },
      [M.medium]: { behaviour: ke.static, size: "200rem" },
      [M.large]: { behaviour: ke.static, size: "200rem" },
      [M.extraLarge]: { behaviour: ke.static, size: "229rem" },
    },
    [Am]: {
      [M.extraSmall]: { behaviour: ke.static, size: "182rem" },
      [M.medium]: { behaviour: ke.static, size: "186rem" },
      [M.large]: { behaviour: ke.static, size: "216rem" },
      [M.extraLarge]: { behaviour: ke.static, size: "239rem" },
    },
  },
  Om = {
    base: "BaseCapture_4cb6b6d6",
    icon: "BaseCapture_icon_d32c372c",
    label: "BaseCapture_label_8bdb9b9c",
    wrapper: "BaseCapture_wrapper_c1a0082e",
    fadeIn: "BaseCapture_fadeIn_8bdb9b9c",
    fadeInThreeQuarters: "BaseCapture_fadeInThreeQuarters_8bdb9b9c",
    fadeInHalf: "BaseCapture_fadeInHalf_8bdb9b9c",
    fadeOut: "BaseCapture_fadeOut_8bdb9b9c",
    fadeInWithScale: "BaseCapture_fadeInWithScale_8bdb9b9c",
    slideUp: "BaseCapture_slideUp_8bdb9b9c",
    scale: "BaseCapture_scale_8bdb9b9c",
    raysAppearance: "BaseCapture_raysAppearance_8bdb9b9c",
    rotate: "BaseCapture_rotate_8bdb9b9c",
    "reverse-rotate": "BaseCapture_reverse-rotate_8bdb9b9c",
    glowAppearance: "BaseCapture_glowAppearance_8bdb9b9c",
    highlightAppearance: "BaseCapture_highlightAppearance_8bdb9b9c",
    blink: "BaseCapture_blink_8bdb9b9c",
    slideUpIn: "BaseCapture_slideUpIn_8bdb9b9c",
  };
function Vm({ assault: e, defend: a, classNames: t, className: s }) {
  const r = m.resolve("strings"),
    n = m.resolve("views"),
    i = O({
      contentId: n.read((e) => e.lobby.tooltips.BattleResultsStatsTooltipView("resId")),
      args: { paramType: "capturePoints" },
    }),
    l = O({
      contentId: n.read((e) => e.lobby.tooltips.BattleResultsStatsTooltipView("resId")),
      args: { paramType: "droppedCapturePoints" },
    });
  return (0, vt.jsxs)("div", {
    className: F(Om.base, s),
    children: [
      (0, vt.jsx)("div", {
        className: F(Om.label, t?.label),
        children: r.readOrEmpty("battle_results.common.battleEfficiency.baseCapture"),
      }),
      (0, vt.jsxs)("div", {
        ...i,
        className: Om.wrapper,
        children: [
          (0, vt.jsx)("div", { className: F(Om.value, t?.value), children: e }),
          (0, vt.jsx)(Aa, {
            path: "post_battle.assault",
            width: "32rem",
            height: "32rem",
            className: F(Om.icon, t?.icon),
          }),
        ],
      }),
      (0, vt.jsxs)("div", {
        ...l,
        className: Om.wrapper,
        children: [
          (0, vt.jsx)("div", { className: F(Om.value, t?.value), children: a }),
          (0, vt.jsx)(Aa, {
            path: "post_battle.defend",
            width: "32rem",
            height: "32rem",
            className: F(Om.icon, t?.icon),
          }),
        ],
      }),
    ],
  });
}
var zm = (0, ot.createContext)(null);
function Wm() {
  const e = (0, ot.useContext)(zm);
  if (null === e)
    throw new Error(
      "You can use the personal efficiency hooks only with the PersonalEfficiency widget component",
    );
  return e;
}
function Mm({ iconsConfig: e, children: a }) {
  const t = (0, ot.useMemo)(() => ({ iconsConfig: { ...Em, ...(e || {}) } }), [e]);
  return (0, vt.jsx)(zm.Provider, { value: t, children: a });
}
var Gm = "IconCell_99b0caec",
  $m = (0, ot.memo)(function ({ value: e, name: a, userName: t, className: s }) {
    const { iconsConfig: r } = Wm(),
      n = O({
        contentId: m
          .resolve("views")
          .read((e) => e.lobby.tooltips.BattleResultsStatsTooltipView("resId")),
        args: (0, ot.useMemo)(() => ({ userName: t, paramType: a }), [a, t]),
      });
    if (0 === e) return null;
    const i = r[a] ?? "";
    return (0, vt.jsx)("div", {
      ...n,
      className: F(Gm, s),
      children: (0, vt.jsx)(Aa, { width: "32rem", height: "32rem", path: i }),
    });
  }),
  Um = "NumberCell_c62bf499",
  Lm = (0, ot.memo)(function ({ value: e, userName: a, name: t, className: s }) {
    const r = O({
      contentId: m
        .resolve("views")
        .read((e) =>
          t === Tm
            ? e.mono.post_battle.tooltips.critical_damage("resId")
            : e.lobby.tooltips.BattleResultsStatsTooltipView("resId"),
        ),
      args: (0, ot.useMemo)(() => ({ userName: a, paramType: t }), [t, a]),
    });
    return 0 === e
      ? null
      : (0, vt.jsx)("div", { ...r, className: F(Um, s), children: Y.formatNumber("integral", e) });
  }),
  Xm = {
    base: "NumberWithCounterCell_f729c44",
    counter: "NumberWithCounterCell_counter_8bb0eb59",
    counter__hidden: "NumberWithCounterCell_counter__hidden_468e7d52",
    counterValue: "NumberWithCounterCell_counterValue_566cc1fa",
    roundedCount: "NumberWithCounterCell_roundedCount_c97dad37",
    fadeIn: "NumberWithCounterCell_fadeIn_f75bc9d5",
    fadeInThreeQuarters: "NumberWithCounterCell_fadeInThreeQuarters_f75bc9d5",
    fadeInHalf: "NumberWithCounterCell_fadeInHalf_f75bc9d5",
    fadeOut: "NumberWithCounterCell_fadeOut_f75bc9d5",
    fadeInWithScale: "NumberWithCounterCell_fadeInWithScale_f75bc9d5",
    slideUp: "NumberWithCounterCell_slideUp_f75bc9d5",
    scale: "NumberWithCounterCell_scale_f75bc9d5",
    raysAppearance: "NumberWithCounterCell_raysAppearance_f75bc9d5",
    rotate: "NumberWithCounterCell_rotate_f75bc9d5",
    "reverse-rotate": "NumberWithCounterCell_reverse-rotate_f75bc9d5",
    glowAppearance: "NumberWithCounterCell_glowAppearance_f75bc9d5",
    highlightAppearance: "NumberWithCounterCell_highlightAppearance_f75bc9d5",
    blink: "NumberWithCounterCell_blink_f75bc9d5",
    slideUpIn: "NumberWithCounterCell_slideUpIn_f75bc9d5",
  };
function Fm({ count: e }) {
  const a = S({ body: e.toString() }),
    t = (function (e, a) {
      return e < a ? e : Math.floor(e / 1e3);
    })(e, 1e3);
  return (0, vt.jsx)("div", {
    className: Xm.counterValue,
    children:
      t === e
        ? e
        : (0, vt.jsx)("div", {
            ...a,
            className: Xm.roundedCount,
            children: (0, vt.jsx)(Q, {
              path: "common.numberAbbrev",
              params: { value: Y.formatNumber("integral", Math.min(t, 99)) },
            }),
          }),
  });
}
var Km = (0, ot.memo)(function ({ value: e, count: a, name: t, userName: s, className: r }) {
    const { iconsConfig: n } = Wm(),
      i = O({
        contentId: m
          .resolve("views")
          .read((e) => e.lobby.tooltips.BattleResultsStatsTooltipView("resId")),
        args: (0, ot.useMemo)(() => ({ userName: s, paramType: t }), [t, s]),
      });
    if (0 === e && 0 === a) return null;
    const l = n[t] ?? "";
    return (0, vt.jsxs)("div", {
      ...i,
      className: F(Xm.base, r),
      children: [
        e > 0 && Y.formatNumber("integral", e),
        (0, vt.jsxs)("div", {
          className: F(Xm.counter, 0 === a && Xm.counter__hidden),
          children: [
            (0, vt.jsx)(Aa, { className: Xm.icon, width: "32rem", height: "32rem", path: l }),
            a >= 2 && (0, vt.jsx)(Fm, { count: a }),
          ],
        }),
      ],
    });
  }),
  qm = "VehicleCell_2823d754",
  Qm = "VehicleCell_imageWrapper_f0d20784",
  Ym = "VehicleCell_typeWrapper_1232db26",
  Zm = "VehicleCell_level_3970ad9d",
  Jm = "VehicleCell_name_755dfe36",
  eu = "VehicleCell_name__unknown_83c23c5e";
function au({ vehicle: e }) {
  const a = void 0 === e;
  return (0, vt.jsxs)("div", {
    className: qm,
    children: [
      (0, vt.jsx)("div", {
        className: Qm,
        children: (0, vt.jsx)(C, { size: C.size.x120x96, name: a ? "tank_empty" : e.techName }),
      }),
      !1 === a &&
        (0, vt.jsxs)(vt.Fragment, {
          children: [
            (0, vt.jsx)(Ue, { value: e.tier, className: Zm }),
            (0, vt.jsx)("div", {
              className: Ym,
              children: (0, vt.jsx)(D, { size: "x24x24", type: e.type }),
            }),
          ],
        }),
      (0, vt.jsx)("div", {
        className: F(Jm, a && eu),
        children: a
          ? (0, vt.jsx)(Q, { path: "ingame_gui.players_panel.unknown_vehicle" })
          : (0, vt.jsx)(ba, { text: e.name }),
      }),
    ],
  });
}
var tu = Fa(function ({ isQualification: e, rank: a, division: t, className: s }) {
    const { model: r } = Qa(),
      n = r.season.name.get();
    return (0, vt.jsx)("div", {
      className: s,
      children: e
        ? (0, vt.jsx)(nt, { size: Ja.x22, seasonName: n })
        : (0, vt.jsx)(at, { size: Ja.x22, rank: a, division: t, seasonName: n }),
    });
  }),
  su = "AccountInfoCell_rankEmblem_1e1732ad",
  ru = "AccountInfoCell_accountInfo_4ab27ccb",
  nu = "AccountInfoCell_accountName_3a2352e5",
  iu = "AccountInfoCell_clanAbbreviation_99f1cc86",
  lu = "AccountInfoCell_gap_4a30913b",
  ou = "AccountInfoCell_anonymizerIcon_f71ac22",
  cu = "AccountInfoCell_badge_711d01c5";
function du({ account: e, isRankedBattle: a, rank: t, division: s, isQualification: r }) {
  return (0, vt.jsxs)(je, {
    className: ru,
    children: [
      a
        ? (0, vt.jsx)(tu, { rank: t, division: s, isQualification: r, className: F(su, lu) })
        : null,
      "" !== e.badge &&
        (0, vt.jsx)("div", {
          className: F(cu, lu),
          children: (0, vt.jsx)(je.Badge, {
            size: je.Badge.sizes.x24x24,
            badgeId: e.badge,
            className: lu,
          }),
        }),
      (0, vt.jsx)(je.Name, {
        className: F(nu, lu),
        children: (0, vt.jsx)(ba, { text: e.anonymizer ? e.fakeUsername : e.username }),
      }),
      "" !== e.clanAbbreviation &&
        !e.anonymizer &&
        (0, vt.jsx)(je.ClanTag, {
          className: F(iu, lu),
          children: (0, vt.jsx)(Q, {
            path: "common.clanTag",
            params: { abbrev: e.clanAbbreviation },
            brackets: { start: "{", end: "}" },
          }),
        }),
      0 !== e.igrType && (0, vt.jsx)(je.IgrIcon, { size: je.IgrIcon.sizes.x34x16, className: lu }),
      "" !== e.suffixBadge &&
        (0, vt.jsx)(je.Stripe, {
          size: je.Stripe.sizes.default,
          badgeId: e.suffixBadge,
          className: lu,
        }),
      e.anonymizer &&
        (0, vt.jsx)(je.AnonymizerIcon, { size: je.AnonymizerIcon.sizes.x24x24, className: ou }),
    ],
  });
}
function mu({ info: e, name: a, className: t }) {
  const { iconsConfig: s } = Wm(),
    r = O({
      contentId: m
        .resolve("views")
        .read((e) =>
          a === Tm
            ? e.mono.post_battle.tooltips.critical_damage("resId")
            : e.lobby.tooltips.BattleResultsStatsTooltipView("resId"),
        ),
      args: { paramType: a },
    }),
    n = Fe(
      e.table.getRowModel().rows,
      (e, t) => {
        const s = t.getValue(a),
          r = re(s) ? s : s.value;
        return e + (a === km && r > 0 ? 1 : r);
      },
      0,
    ),
    i = s[a] ?? "";
  return (0, vt.jsx)("div", {
    className: F(bm, t),
    children: (0, vt.jsxs)("div", {
      ...r,
      className: gm,
      children: [
        (0, vt.jsx)("div", { className: xm, children: Y.formatNumber("integral", n) }),
        (0, vt.jsx)("div", {
          className: ym,
          children: (0, vt.jsx)(Aa, { width: "100%", height: "100%", path: i }),
        }),
      ],
    }),
  });
}
function uu({ name: e, info: a, className: t }) {
  const s = m.resolve("strings");
  switch (e) {
    case Cm:
    case Bm:
    case Sm:
    case Pm:
    case Rm:
    case km:
    case Tm:
      return void 0 !== a ? (0, vt.jsx)(mu, { name: e, info: a, className: t }) : null;
    case wm:
      return (0, vt.jsx)("div", {
        className: Nm,
        children: (0, vt.jsx)("div", {
          className: jm,
          children: s.readOrEmpty("battle_results.common.battleEfficiency.uppercased_title"),
        }),
      });
    default:
      return (console.error(`Unknown column ${e}`), null);
  }
}
var _u = "Index_align_5032d1bf",
  fu = "Index_align__right_9d371d4f",
  pu = "Index_align__left_7938cc",
  bu = "Index_offsetCell_c4e68915",
  hu = "Index_offsetCell__number_2c760167",
  vu = Ve();
function gu() {
  return [
    vu.accessor("killed", {
      id: Cm,
      header: (e) => (0, vt.jsx)(uu, { info: e, name: Cm, className: F(hm, vm) }),
      enableSorting: !1,
      meta: { column: Dm, className: F(_u, fu) },
    }),
    vu.accessor("damageDealt", {
      id: Bm,
      header: (e) => (0, vt.jsx)(uu, { info: e, name: Bm, className: hm }),
      enableSorting: !1,
      meta: { className: F(_u, fu), column: Dm },
    }),
    vu.accessor("damageBlockedByArmor", {
      id: Sm,
      header: (e) => (0, vt.jsx)(uu, { info: e, name: Sm, className: hm }),
      enableSorting: !1,
      meta: { className: F(_u, fu), column: Dm },
    }),
    vu.accessor("damageAssisted", {
      id: Pm,
      header: (e) => (0, vt.jsx)(uu, { info: e, name: Pm, className: hm }),
      enableSorting: !1,
      meta: { className: F(_u, fu), column: Dm },
    }),
    vu.accessor("damageAssistedStun", {
      id: Rm,
      header: (e) => (0, vt.jsx)(uu, { info: e, name: Rm, className: hm }),
      enableSorting: !1,
      meta: { className: F(_u, fu), column: Dm },
    }),
    vu.accessor("spotted", {
      id: km,
      header: (e) => (0, vt.jsx)(uu, { info: e, name: km, className: hm }),
      enableSorting: !1,
      meta: { className: F(_u, fu), column: Dm },
    }),
    vu.accessor("criticalDamage", {
      id: Tm,
      header: (e) => (0, vt.jsx)(uu, { info: e, name: Tm, className: hm }),
      enableSorting: !1,
      meta: { className: F(_u, fu), column: Dm },
    }),
  ];
}
var yu = "BodyRow_b47fe37f",
  xu = "BodyRow_rowDivider_eb49c679",
  Nu = "BodyRow_rowDividerImage_d852c3da";
function ju({ classNames: e, row: a, rowIndex: t }) {
  const s = U({
    args: (0, ot.useMemo)(
      () => ({ vehicleCD: a.original.vehicle?.vehicleCD, databaseID: a.original.databaseId }),
      [a.original.databaseId, a.original.vehicle?.vehicleCD],
    ),
  });
  return (0, ot.createElement)(
    Ke.Row,
    { ...(void 0 !== a.original.databaseId && s), key: a.id, className: F(yu, e?.row) },
    ya(a.getVisibleCells(), (a, s) =>
      (0, vt.jsx)(
        Ke.Cell,
        {
          className: e?.cell,
          cell: { ...a, rowIndex: t, index: s, tablePart: ea.body },
          children: Ye(a.column.columnDef.cell, a.getContext()),
        },
        a.id,
      ),
    ),
    (0, vt.jsx)(ss, {
      classNames: { base: F(xu, e?.divider?.base), image: F(Nu, e?.divider?.image) },
    }),
  );
}
var Iu = {
    base: "TableBody_4f65af24",
    scrollBar: "TableBody_scrollBar_14038cca",
    scrollAreaContent: "TableBody_scrollAreaContent_4a80f86c",
    mask: "TableBody_mask_ebaf8326",
    rowDivider: "TableBody_rowDivider_c1a3ebdc",
    rowDividerImage: "TableBody_rowDividerImage_b0363e26",
    fadeIn: "TableBody_fadeIn_8ec5ac18",
    fadeInThreeQuarters: "TableBody_fadeInThreeQuarters_8ec5ac18",
    fadeInHalf: "TableBody_fadeInHalf_8ec5ac18",
    fadeOut: "TableBody_fadeOut_8ec5ac18",
    fadeInWithScale: "TableBody_fadeInWithScale_8ec5ac18",
    slideUp: "TableBody_slideUp_8ec5ac18",
    scale: "TableBody_scale_8ec5ac18",
    raysAppearance: "TableBody_raysAppearance_8ec5ac18",
    rotate: "TableBody_rotate_8ec5ac18",
    "reverse-rotate": "TableBody_reverse-rotate_8ec5ac18",
    glowAppearance: "TableBody_glowAppearance_8ec5ac18",
    highlightAppearance: "TableBody_highlightAppearance_8ec5ac18",
    blink: "TableBody_blink_8ec5ac18",
    slideUpIn: "TableBody_slideUpIn_8ec5ac18",
  },
  wu = (0, ot.memo)(function ({ classNames: e, children: a }) {
    const { table: t } = Ae(),
      s = l(),
      { api: r } = oe();
    (Me(B.ARROW_UP, () => {
      r.applyStepTo(he.Next);
    }),
      Me(B.ARROW_DOWN, () => {
        r.applyStepTo(he.Prev);
      }));
    const [n, i] = de(() => ({ from: { maskSize: "100% 100%" } }));
    return (
      (0, ot.useEffect)(() => {
        function e() {
          s.run(() => {
            !(function () {
              const [, e] = r.getBounds(),
                a = (r.animationScroll.scrollPosition.get() / e) * 7;
              i.start({ to: { maskSize: `100% ${e > 0 ? 100 + a : 107}%` } });
            })();
          });
        }
        return (
          r.events.on("recalculateContent", e),
          r.events.on("rest", e),
          r.events.on("change", e),
          r.events.on("resizeHandled", e),
          e(),
          () => {
            (r.events.off("recalculateContent", e),
              r.events.off("rest", e),
              r.events.off("change", e),
              r.events.off("resizeHandled", e));
          }
        );
      }, [r, s, i]),
      (0, vt.jsxs)(Ke.Body, {
        className: F(Iu.base, e?.base),
        children: [
          (0, vt.jsxs)(w.div, {
            className: Iu.mask,
            style: n,
            children: [
              (0, vt.jsx)(ss, {
                classNames: {
                  base: F(Iu.rowDivider, e?.divider?.base),
                  image: F(Iu.rowDividerImage, e?.divider?.image),
                },
              }),
              (0, vt.jsxs)(ne, {
                classNames: {
                  ...e?.scroll?.area,
                  wrapper: Iu.scrollWrapper,
                  content: F(Iu.scrollAreaContent, e?.scroll?.area?.content),
                },
                children: [
                  ya(t.getRowModel().rows, (a, t) =>
                    (0, vt.jsx)(
                      ju,
                      {
                        row: a,
                        rowIndex: t,
                        classNames: { row: e?.row, cell: e?.cell, divider: e?.divider },
                      },
                      a.id,
                    ),
                  ),
                  a,
                ],
              }),
            ],
          }),
          (0, vt.jsx)(ra, {
            classNames: { ...e?.scroll?.bar, base: F(Iu.scrollBar, e?.scroll?.bar?.base) },
          }),
        ],
      })
    );
  }),
  Au = "TableFooter_40e98711",
  Cu = "TableFooter_row_41aedfc2",
  Bu = (0, ot.memo)(function ({ classNames: e }) {
    const { table: a } = Ae();
    return (0, vt.jsx)(Ke.Footer, {
      className: F(Au, e?.base),
      children: ya(a.getFooterGroups(), (a, t) =>
        (0, vt.jsx)(
          Ke.Row,
          {
            className: F(Cu, e?.row),
            children: ya(a.headers, (a, s) =>
              (0, vt.jsx)(
                Ke.Cell,
                {
                  onClick: a.column.getToggleSortingHandler(),
                  className: e?.cell,
                  cell: { ...a, rowIndex: t, index: s, tablePart: ea.footer },
                  children: !a.isPlaceholder && Ye(a.column.columnDef.footer, a.getContext()),
                },
                a.id,
              ),
            ),
          },
          a.id,
        ),
      ),
    });
  }),
  Su = "TableHeader_row_a81d3e65",
  Pu = (0, ot.memo)(function ({ classNames: e }) {
    const { table: a } = Ae();
    return (0, vt.jsx)(Ke.Header, {
      className: e?.base,
      children: ya(a.getHeaderGroups(), (a, t) =>
        (0, vt.jsx)(
          Ke.Row,
          {
            className: F(Su, e?.row),
            children: ya(a.headers, (a, s) =>
              (0, vt.jsx)(
                Ke.Cell,
                {
                  onClick: a.column.getToggleSortingHandler(),
                  className: e?.cell,
                  cell: { ...a, rowIndex: t, index: s, tablePart: ea.header },
                  children: !a.isPlaceholder && Ye(a.column.columnDef.header, a.getContext()),
                },
                a.id,
              ),
            ),
          },
          a.id,
        ),
      ),
    });
  }),
  Ru = function ({
    data: e,
    className: a,
    children: t,
    columnOrder: s,
    columnVisibility: r,
    config: n,
    iconsConfig: i,
  }) {
    const l = k(),
      o = (0, ot.useMemo)(() => ({ columnOrder: s, columnVisibility: r }), [s, r]);
    return (0, vt.jsx)(Mm, {
      iconsConfig: i,
      children: (0, vt.jsx)(fa, {
        columns: n,
        data: e.rows,
        enableMultiRowSelection: !1,
        getRowId: (e) => e.account.username,
        initialState: o,
        children: (0, vt.jsx)(
          Ke,
          { className: a, children: (0, vt.jsx)(ee, { children: t }) },
          l.breakpoint.name,
        ),
      }),
    });
  };
((Ru.Header = Pu), (Ru.Body = wu), (Ru.Footer = Bu));
var ku = function ({
  data: e,
  className: a,
  children: t,
  columnOrder: s,
  columnVisibility: r,
  config: n,
  iconsConfig: i,
}) {
  const l = k(),
    o = (0, ot.useMemo)(() => ({ columnOrder: s, columnVisibility: r }), [s, r]);
  return (0, vt.jsx)(Mm, {
    iconsConfig: i,
    children: (0, vt.jsx)(fa, {
      columns: n,
      data: e.rows,
      enableMultiRowSelection: !1,
      getRowId: (e) => e.account.username,
      initialState: o,
      children: (0, vt.jsx)(
        Ke,
        { className: a, children: (0, vt.jsx)(ee, { children: t }) },
        l.breakpoint.name,
      ),
    }),
  });
};
((ku.Header = Pu), (ku.Body = wu), (ku.Footer = Bu));
var Tu = "PersonalEfficiency_table_1104dbe8",
  Eu = "PersonalEfficiency_table__closed_589e70ab",
  Du = "PersonalEfficiency_hintKey_f91859a5",
  Hu = "PersonalEfficiency_messagesPanel_d1b1fa0b",
  Ou = "PersonalEfficiency_message_d772bbd7",
  Vu = "PersonalEfficiency_expandableOverlayWrapper_a5a56a5d",
  zu = "PersonalEfficiency_expandableOverlayWrapper__hidden_97a3493d",
  Wu = "PersonalEfficiency_expandableOverlayWrapper__notInteractive_598241cc",
  Mu = "PersonalEfficiency_scrollableArea_c747d607",
  Gu = "PersonalEfficiency_scrollableArea__nonInteractive_589e70ab",
  $u = "PersonalEfficiency_totalEfficiency_eb2592a8",
  Uu = "PersonalEfficiency_totalEfficiency__notInteractive_4b33f28d",
  Lu = "PersonalEfficiency_totalEfficiencyTable_f51015d2",
  Xu = "PersonalEfficiency_tableWrapper_cd2e7488",
  Fu = "PersonalEfficiency_overlayDivider_52284c35",
  Ku = "PersonalEfficiency_overlayDivider__closed_6b67c790",
  qu = "PersonalEfficiency_clarificationWrapper_5f3072b1",
  Qu = "PersonalEfficiency_personalEfficiencyDivider_cbc0342a",
  Yu = "PersonalEfficiency_prestigePointsCell_b7d89bd2",
  Zu = { row: "PersonalEfficiency_headerRow_6acaa215" };
function Ju() {
  const { opened: e } = em(),
    { api: a } = oe();
  return (
    (0, ot.useLayoutEffect)(() => {
      e && a.applyScroll(0, { immediate: !0 });
    }, [e, a]),
    (0, vt.jsxs)(vt.Fragment, {
      children: [
        (0, vt.jsx)("div", { className: F(Mu, !e && Gu), onWheel: a.handleMouseWheel }),
        (0, vt.jsx)(ku.Header, { classNames: Zu }),
        (0, vt.jsx)(ku.Body, { children: (0, vt.jsx)(ku.Footer, {}) }),
      ],
    })
  );
}
var e_ = Ia.cubicBezier(0.33, 0, 0.25, 1),
  a_ = "first",
  t_ = "second",
  s_ = "closedArrowInLoop",
  r_ = "openedArrowInLoop",
  n_ = Fa(function ({ visible: e, totalEfficiencyStylesApi: a }) {
    const { model: t } = Eo(),
      s = t.computes.isRankedBattle(),
      r = t.computes.personalEffiency(),
      { closedPosition: n, overlayApi: i, shadowApi: l, arrowStylesApi: o } = em(),
      { breakpoint: c } = k(),
      [d, m] = (0, ot.useState)(s_),
      [u, _] = de(() => ({ opacity: 0 })),
      f = (0, ot.useMemo)(
        () =>
          (function ({ breakpointName: e, assault: a, defend: t, isRankedBattle: s }) {
            const r = "small" === e ? M.extraSmall : e;
            return [
              vu.accessor("account", {
                id: wm,
                header: () => (0, vt.jsx)(uu, { name: wm }),
                footer: () => (0, vt.jsx)(Vm, { assault: a, defend: t }),
                enableSorting: !1,
                cell: (e) =>
                  (0, vt.jsx)(du, { ...e.row.original, account: e.getValue(), isRankedBattle: s }),
                meta: { className: F(_u, pu), column: Hm[wm][r] },
              }),
              vu.accessor("vehicle", {
                id: Am,
                header: void 0,
                enableSorting: !1,
                cell: (e) => (0, vt.jsx)(au, { vehicle: e.getValue() }),
                meta: { column: Hm[Am][r] },
              }),
              vu.accessor("killed", {
                id: Cm,
                header: (e) => (0, vt.jsx)(uu, { name: Cm, info: e }),
                enableSorting: !1,
                cell: (e) =>
                  (0, vt.jsx)($m, {
                    name: Cm,
                    value: e.getValue(),
                    userName: e.row.original.account.username,
                    className: bu,
                  }),
                meta: { column: Dm, className: F(_u, fu) },
              }),
              vu.accessor("damageDealt", {
                id: Bm,
                header: (e) => (0, vt.jsx)(uu, { name: Bm, info: e }),
                enableSorting: !1,
                cell: (e) =>
                  (0, vt.jsx)(Km, {
                    ...e.getValue(),
                    name: Bm,
                    userName: e.row.original.account.username,
                    className: bu,
                  }),
                meta: { className: F(_u, fu), column: Dm },
              }),
              vu.accessor("damageBlockedByArmor", {
                id: Sm,
                header: (e) => (0, vt.jsx)(uu, { name: Sm, info: e }),
                enableSorting: !1,
                cell: (e) =>
                  (0, vt.jsx)(Km, {
                    ...e.getValue(),
                    name: Sm,
                    userName: e.row.original.account.username,
                    className: bu,
                  }),
                meta: { className: F(_u, fu), column: Dm },
              }),
              vu.accessor("damageAssisted", {
                id: Pm,
                header: (e) => (0, vt.jsx)(uu, { name: Pm, info: e }),
                enableSorting: !1,
                cell: (e) =>
                  (0, vt.jsx)(Lm, {
                    value: e.getValue(),
                    name: Pm,
                    userName: e.row.original.account.username,
                    className: hu,
                  }),
                meta: { className: F(_u, fu), column: Dm },
              }),
              vu.accessor("damageAssistedStun", {
                id: Rm,
                header: (e) => (0, vt.jsx)(uu, { name: Rm, info: e }),
                enableSorting: !1,
                cell: (e) =>
                  (0, vt.jsx)(Km, {
                    ...e.getValue(),
                    name: Rm,
                    userName: e.row.original.account.username,
                    className: bu,
                  }),
                meta: { className: F(_u, fu), column: Dm },
              }),
              vu.accessor("spotted", {
                id: km,
                header: (e) => (0, vt.jsx)(uu, { name: km, info: e }),
                enableSorting: !1,
                cell: (e) =>
                  (0, vt.jsx)($m, {
                    name: km,
                    value: e.getValue(),
                    userName: e.row.original.account.username,
                    className: bu,
                  }),
                meta: { className: F(_u, fu), column: Dm },
              }),
              vu.accessor("criticalDamage", {
                id: Tm,
                header: (e) => (0, vt.jsx)(uu, { name: Tm, info: e }),
                enableSorting: !1,
                cell: (e) =>
                  (0, vt.jsx)(Lm, {
                    value: e.getValue(),
                    name: Tm,
                    userName: e.row.original.account.username,
                    className: hu,
                  }),
                meta: { className: F(_u, fu), column: Dm },
              }),
            ];
          })({ breakpointName: c.name, assault: r.assault, defend: r.defend, isRankedBattle: s }),
        [c.name, r.assault, r.defend, s],
      );
    return (
      (0, ot.useEffect)(() => {
        if (e && d === s_) return (o.stop(), void m(a_));
        if (!e && d === r_) return (o.stop(), void m(t_));
        switch (d) {
          case s_:
            o.start({
              from: { x: "-50%", y: "0", rotate: 180, opacity: 1 },
              to: [
                { x: "-50%", y: "-5rem", rotate: 180, opacity: 0 },
                { x: "-50%", y: "0", rotate: 180, opacity: 0 },
                { x: "-50%", y: "0", rotate: 180, opacity: 1 },
              ],
              config: { easing: e_, duration: 800 },
              loop: !0,
            });
            break;
          case a_:
            (o.start({
              to: { opacity: 0, x: "-50%", y: e ? "40rem" : "0", rotate: e ? 0 : 180 },
              immediate: !0,
            }),
              a.start({
                to: { opacity: e ? 0 : 1 },
                delay: e ? 0 : 150,
                config: { easing: e_, duration: 200 },
              }),
              i.start({
                to: {
                  y: e ? "0" : n,
                  backgroundColor: e ? "rgba(22, 30, 40, 0.96)" : "transparent",
                },
                config: { easing: e_, duration: 200 },
                delay: e ? 0 : 150,
                onRest: () => m(e ? t_ : s_),
              }),
              l.start({
                to: { opacity: e ? 1 : 0 },
                delay: e ? 0 : 150,
                config: { easing: e_, duration: 200 },
              }),
              _.start({
                to: { opacity: e ? 1 : 0 },
                delay: e ? 150 : 0,
                config: { easing: e_, duration: 100 },
              }));
            break;
          case t_:
            (o.start({
              to: { opacity: 0, x: "-50%", y: e ? "40rem" : "0", rotate: e ? 0 : 180 },
              immediate: !0,
            }),
              m(e ? r_ : a_));
            break;
          case r_: {
            const e = c.weight > Ca.large.weight ? "53rem" : "40rem";
            o.start({
              from: { x: "-50%", y: e, rotate: 0, opacity: 1 },
              to: [
                {
                  x: "-50%",
                  y: c.weight > Ca.large.weight ? "58rem" : "45rem",
                  rotate: 0,
                  opacity: 0,
                  config: { duration: 1e3 },
                },
                { x: "-50%", y: e, rotate: 0, opacity: 0, config: { duration: 400 } },
                { x: "-50%", y: e, rotate: 0, opacity: 1, config: { duration: 200 } },
              ],
              config: { easing: e_, duration: 800 },
              loop: !0,
            });
            break;
          }
        }
      }, [d, e, n, c.weight, o, i, l, _, a]),
      (0, ot.useLayoutEffect)(() => {
        !1 === e && d === s_ && i.start({ to: { y: n }, immediate: !0 });
      }, [n, e, d, i]),
      (0, vt.jsx)(w.div, {
        className: Xu,
        style: u,
        children: (0, vt.jsx)(ku, {
          config: f,
          data: r,
          className: F(Tu, !e && Eu),
          children: (0, vt.jsx)(Ju, {}),
        }),
      })
    );
  }),
  i_ = Fa(function () {
    const { model: e } = Eo(),
      a = e.computes.personalEffiency(),
      t = e.computes.personalInfo().efficiencyValues.prestigePoints,
      s = e.battleInfo.get().finishReasonClarification,
      r = m.resolve("strings"),
      n = q(),
      { hintKeyRef: i, overlayDividerRef: l, personalEfficiencyRef: o, completedSteps: c } = Qt(),
      d = !1 === c.has(Ft.fifth),
      [u] = de(() => ({ from: { opacity: 0 }, ref: i })),
      [_] = de(() => ({ from: { maskSize: "0% 100%" }, ref: l })),
      [f] = de(() => ({ from: { opacity: 0 }, ref: o })),
      p = Le(
        { value: 159 },
        { medium: { value: 187 }, large: { value: 199 }, extraLarge: { value: 267 } },
      ),
      { active: b } = I(),
      h = (0, ot.useRef)(null),
      [v, g] = (0, ot.useState)(0),
      [y, x] = (0, ot.useState)(!1),
      [N, A] = de(() => ({ opacity: y ? 0 : 1 }));
    ((0, ot.useEffect)(() => {
      b !== Xa.overview && x(!1);
    }, [b]),
      He(
        h,
        (0, ot.useCallback)(() => {
          const e = h.current?.getBoundingClientRect().height || 0;
          e > 0 && g(Math.round(e));
        }, [g]),
      ));
    const C = (0, ot.useMemo)(() => (v > 0 ? j(v) - p.value + "rem" : "150%"), [v, p]),
      B = (0, ot.useMemo)(gu, []);
    if (0 === a.assault && 0 === a.defend && 0 === a.rows.length)
      return (0, vt.jsxs)(w.div, {
        style: f,
        className: Hu,
        children: [
          "" !== s &&
            (0, vt.jsx)("div", {
              className: Ou,
              children: r.readOrEmpty(`battle_results.finish.clarification.${s}`),
            }),
          (0, vt.jsx)("div", {
            className: Ou,
            children: r.readOrEmpty("battle_results.common.battleEfficiency.noEfficiency"),
          }),
        ],
      });
    return (0, vt.jsxs)(vt.Fragment, {
      children: [
        (0, vt.jsx)(am, {
          closedPosition: C,
          visible: y,
          changeVisible: x,
          children: (0, vt.jsx)("div", {
            className: F(Vu, 0 === v && zu, d && Wu),
            children: (0, vt.jsxs)(fm, {
              ref: h,
              children: [
                (0, vt.jsx)(w.div, {
                  className: F(Fu, !1 === y && Ku),
                  style: _,
                  children: (0, vt.jsx)(fm.OverlayDivider, {}),
                }),
                (0, vt.jsx)(n_, { visible: y, totalEfficiencyStylesApi: A }),
                (0, vt.jsx)(w.div, {
                  className: Du,
                  style: u,
                  children: (0, vt.jsx)(fm.HintKey, { disabled: b !== Xa.overview }),
                }),
              ],
            }),
          }),
        }),
        (0, vt.jsx)(w.div, {
          style: N,
          className: F($u, (y || d) && Uu),
          onClick: function (e) {
            (e.stopPropagation(),
              x(!0),
              n.play("click", { original: e, target: "overview:total-personal-efficiency" }),
              n.play("openOverlay", { original: e, target: "overview:total-personal-efficiency" }));
          },
          children: (0, vt.jsxs)(w.div, {
            style: f,
            children: [
              "" !== s &&
                (0, vt.jsx)("div", {
                  className: qu,
                  onClick: (e) => e.stopPropagation(),
                  children: (0, vt.jsx)("div", {
                    className: Ou,
                    children: r.readOrEmpty(`battle_results.finish.clarification.${s}`),
                  }),
                }),
              (0, vt.jsxs)(Ru, {
                config: B,
                data: a,
                className: Lu,
                children: [
                  (0, vt.jsx)(Ru.Header, {}),
                  (0, vt.jsx)("div", { className: Qu }),
                  (0, vt.jsx)(Im, { value: t, className: Yu }),
                ],
              }),
            ],
          }),
        }),
      ],
    });
  }),
  l_ = e(Ka(), 1),
  o_ = "RatingDelta_fafce50d",
  c_ = "RatingDelta_sign_3dcbed1e",
  d_ = "RatingDelta_valueWrapper_883d3dce",
  m_ = "RatingDelta_value_7b680538",
  u_ = "RatingDelta_valueOverlay_a21b4f17",
  __ = "RatingDelta_base__negative_5ba014f3",
  f_ = ({ value: e, className: a }) =>
    (0, vt.jsx)("div", {
      className: (0, l_.default)(o_, e < 0 && __, a),
      children: (0, vt.jsx)(wa, {
        classNames: { text: m_, textOverlay: u_ },
        children: (0, vt.jsxs)("span", {
          className: d_,
          children: [
            (0, vt.jsxs)("span", { className: c_, children: [e > 0 && "+", e < 0 && "-"] }),
            (0, vt.jsx)("span", { children: Math.abs(e) }),
          ],
        }),
      }),
    }),
  p_ = "HighRank_51c38c6d",
  b_ = "HighRank_rating_7432f7e0",
  h_ = "HighRank_score_e8a3842f",
  v_ = "HighRank_title_d6c6d2ff",
  g_ = "HighRank_subtitle_c0cb19d8",
  y_ = (e, a) => {
    let t = st(e);
    return a
      ? (0, vt.jsx)(_, {
          text: R.strings.comp7_ext.pbs.overview.highRank.promoted(),
          params: { rank: t },
        })
      : t;
  },
  x_ = Fa(function ({ className: e }) {
    const { model: a } = Eo(),
      { rank: t, from: s } = a.computes.progressionItem(a.currentProgressionItemIndex.get()),
      r = a.ratingDelta.get(),
      n = a.currentScore.get();
    return (0, vt.jsxs)("div", {
      className: F(p_, e),
      children: [
        (0, vt.jsxs)("div", {
          className: b_,
          children: [
            (0, vt.jsx)(f_, { value: r }),
            (0, vt.jsx)("div", {
              className: h_,
              children: (0, vt.jsx)(_, {
                text: R.strings.comp7_ext.pbs.overview.highRank.rating(),
                params: { score: n },
              }),
            }),
          ],
        }),
        (0, vt.jsxs)("div", {
          children: [
            (0, vt.jsx)("div", { className: v_, children: y_(t, n - r < s) }),
            (0, vt.jsx)(V, {
              classMix: g_,
              text: rt(R.strings.comp7_ext.pbs.rankDescription, t),
              binding: { topPercentage: a.topPercentage.get() },
            }),
          ],
        }),
      ],
    });
  }),
  N_ = "ProgressBar_813bb1b3",
  j_ = "ProgressBar_range_e5bfc429",
  I_ = "ProgressBar_rangeGap_2384cd24",
  w_ = "ProgressBar_currentScore_d49d64a8",
  A_ = "ProgressBar_barWrapper_fd13c839",
  C_ = "ProgressBar_rank_61a259a7",
  B_ = "ProgressBar_delta_3a201655",
  S_ = "ProgressBar_barDelta_874ea9e2",
  P_ = "ProgressBar_barDeltaInside_88f119d7",
  R_ = "ProgressBar_barDelta__negative_f0761b90",
  k_ = "ProgressBar_backgroundPattern_7f22cc1e",
  T_ = { duration: 600, easing: Ia.easeInOutCubic },
  E_ = { duration: 0, easing: Ia.easeInOutCubic },
  D_ = Fa(function ({ className: e }) {
    const { model: a } = Eo(),
      {
        rank: t,
        division: s,
        from: r,
        to: n,
        divisions: i,
      } = a.computes.progressionItem(a.currentProgressionItemIndex.get()),
      l = a.previousScore.get(),
      o = a.currentScore.get(),
      c = o - l,
      d = lt(r, n, i.length),
      m = Math.floor((o - r) / d),
      u = o - r - d * m,
      f = { value: Math.max(Math.min(u - c, d), 0), maxValue: d },
      [p, b] = (0, ot.useState)(f.value),
      [h, v] = (0, ot.useState)(!1),
      g = (0, ot.useRef)(T_),
      y = (0, ot.useRef)(null),
      { step: x } = Qt();
    (0, ot.useEffect)(() => {
      (x === Ft.progressBarDelta && (v(!0), b(u)), x === Ft.immediate && ((g.current = E_), b(u)));
    }, [x, u]);
    const N = (() => {
      switch (!0) {
        case u - c >= d:
          return R.strings.comp7_ext.pbs.overview.lowRank.demoted();
        case u - c < 0:
          return R.strings.comp7_ext.pbs.overview.lowRank.promoted();
        default:
          return R.strings.comp7_ext.pbs.overview.lowRank.default();
      }
    })();
    return (0, vt.jsxs)("div", {
      className: F(N_, e),
      children: [
        (0, vt.jsxs)("div", {
          className: A_,
          children: [
            (0, vt.jsxs)("div", {
              className: j_,
              children: [
                (0, vt.jsx)("div", { className: F(w_, I_), children: o }),
                (0, vt.jsx)("div", { className: I_, children: "/" }),
                (0, vt.jsx)("div", { children: r + d * (m + 1) }),
              ],
            }),
            (0, vt.jsxs)(ca, {
              size: "large",
              value: p,
              maxValue: f.maxValue,
              animationType: ca.animations.grow,
              status: "doneInactive",
              classNames: { backgroundPattern: k_ },
              backgroundPattern: "R.images.comp7.gui.maps.icons.progressbar.bg_pattern_base_large",
              children: [
                (0, vt.jsx)(ca.Fill, {
                  filledPattern:
                    "R.images.comp7.gui.maps.icons.progressbar.bg_pattern_base_filled_large",
                  animationConfig: g.current,
                }),
                h &&
                  (0, vt.jsx)(ca.Delta, {
                    from: f.value,
                    steps: ["growing", "shrinking"],
                    className: F(S_, c < 0 && R_),
                    classNames: { inside: P_ },
                    growAnimationConfig: g.current,
                    shrinkAnimationConfig: g.current,
                    onState: (e) => {
                      ("shrinking" === y.current && "done" === e && v(!1), (y.current = e));
                    },
                  }),
              ],
            }),
            (0, vt.jsx)("div", {
              className: C_,
              children: (0, vt.jsx)(_, {
                text: N,
                params: { rank: st(t), division: s ? tt(s) : "" },
              }),
            }),
          ],
        }),
        (0, vt.jsx)(f_, { value: a.ratingDelta.get(), className: B_ }),
      ],
    });
  }),
  H_ = "Qualification_a93cb391",
  O_ = "Qualification_counter_380a5a6b",
  V_ = "Qualification_counterGap_c395103b",
  z_ = "Qualification_currentValue_aa36ad05",
  W_ = "Qualification_title_4213ea79",
  M_ = "Qualification_description_e38880c8",
  G_ = ({ className: e, maxBattlesCount: a, battlesCount: t }) =>
    (0, vt.jsxs)("div", {
      className: F(H_, e),
      children: [
        (0, vt.jsxs)("div", {
          className: O_,
          children: [
            (0, vt.jsx)("div", { className: F(z_, V_), children: t }),
            (0, vt.jsx)("div", { className: V_, children: "/" }),
            (0, vt.jsx)("div", { children: a }),
          ],
        }),
        (0, vt.jsxs)("div", {
          children: [
            (0, vt.jsx)("div", {
              className: W_,
              children: R.strings.comp7_ext.pbs.overview.qualification.title(),
            }),
            (0, vt.jsx)("div", {
              className: M_,
              children: R.strings.comp7_ext.pbs.overview.qualification.description(),
            }),
          ],
        }),
      ],
    }),
  $_ = (function (e) {
    return ((e.None = "none"), (e.Leave = "leave"), e);
  })({}),
  U_ = "Warning_2f1589e3",
  L_ = "Warning_warningIcon_61844ca1",
  X_ = ({ warningType: e, qualificationActive: a, className: t }) =>
    e === $_.Leave
      ? (0, vt.jsxs)("div", {
          className: F(U_, t),
          children: [
            (0, vt.jsx)("div", { className: L_ }),
            (0, vt.jsx)("div", {
              children: a
                ? R.strings.comp7_ext.pbs.overview.warning.leave.qualification()
                : R.strings.comp7_ext.pbs.overview.warning.leave.default(),
            }),
          ],
        })
      : null,
  F_ = "Progress_6bb67180",
  K_ = "Progress_leave_adcebf48",
  q_ = "Progress_status_c82c508f",
  Q_ = "Progress_statusText_4bcda084",
  Y_ = "Progress_rankEmblem_e2cc1fc0",
  Z_ = "Progress_rankEmblem__narrow_ee457f",
  J_ = "Progress_qualification_ca22ace5",
  ef = "Progress_progressBar_2562fad0",
  af = "Progress_highRank_4e35bdcf",
  tf = "Progress_warning_61ce2940",
  sf = Fa(function () {
    const { model: e } = Eo(),
      { status: a, leave: t } = e.battleInfo.get();
    return (0, vt.jsx)("div", {
      className: q_,
      children: (0, vt.jsx)("div", {
        className: Q_,
        children: t
          ? R.strings.battle_results.status.leave()
          : String(R.strings.battle_results.status.$dyn(a)),
      }),
    });
  }),
  rf = Fa(function () {
    const { model: e } = Eo(),
      { model: a } = Qa(),
      { status: t, leave: s } = e.battleInfo.get(),
      { isActive: r, battlesCount: n, maxBattlesCount: i } = e.qualificationModel.get(),
      { rank: l, division: o } = e.computes.progressionItem(e.currentProgressionItemIndex.get()),
      c = a.season.name.get(),
      d = e.warningType.get(),
      { mediaSize: m } = k(),
      u = ((e) => (e >= y.Large ? Ja.x420 : e >= y.Medium ? Ja.x260 : Ja.x200))(m);
    return (0, vt.jsxs)("div", {
      className: F_,
      children: [
        r
          ? (0, vt.jsx)(nt, { size: u, seasonName: c, className: F(Y_, Z_) })
          : (0, vt.jsx)(at, {
              rank: l,
              size: u,
              seasonName: c,
              division: o,
              className: F(Y_, [Za.First, Za.Second].includes(l) && Z_),
            }),
        (0, vt.jsxs)("div", {
          children: [
            s &&
              (0, vt.jsx)("div", {
                className: K_,
                children: String(R.strings.comp7_ext.pbs.overview.extraLeaveStatus.$dyn(t)),
              }),
            (0, vt.jsx)(sf, {}),
            (() => {
              switch (!0) {
                case r:
                  return (0, vt.jsx)(G_, { className: J_, battlesCount: n, maxBattlesCount: i });
                case et(l):
                  return (0, vt.jsx)(D_, { className: ef });
                default:
                  return (0, vt.jsx)(x_, { className: af });
              }
            })(),
            (0, vt.jsx)(X_, { warningType: d, qualificationActive: r, className: tf }),
          ],
        }),
      ],
    });
  }),
  nf = Ie("Overview", Vd),
  lf = Fa(function ({ className: e }) {
    const a = q(),
      { model: s, controls: r } = Eo(),
      n = s.additionalBonus.get(),
      i = s.battleInfo.get(),
      l = s.personalEfficiency.achievements.get(),
      o = s.computes.isRankedBattle(),
      {
        step: c,
        battleStatusRef: d,
        dividerRef: m,
        earnedCurrenciesRef: u,
        bonusRef: _,
        setAllMedalsAnimated: f,
      } = Qt(),
      [p] = de(() => ({ from: { opacity: 0, y: "-10rem" }, ref: d })),
      [b] = de(() => ({ from: { maskSize: "0% 100%" }, ref: m })),
      [h] = de(() => ({ from: { opacity: 0, y: "-10rem" }, ref: u })),
      [v] = de(() => ({ from: { opacity: 0, y: "10rem" }, ref: _ })),
      { api: g, setCompletedAnimationIndexes: y } = Ko(),
      x = s.computes.premiumAndStandartEarnings(),
      N = (0, ot.useMemo)(() => (void 0 !== i && Ga.includes(i?.modeName) ? za : Ra), [i]);
    return (
      (0, ot.useEffect)(() => {
        0 === l.length && f(!0);
      }, [l.length, f]),
      (0, ot.useEffect)(() => {
        if (c === Ft.immediate)
          return (
            g.start(() => ({ x: 0, y: 0, scale: 1, opacity: 1, immediate: !0 })),
            f(!0),
            void y(new Set(Ze(l.length, (e) => e)))
          );
        if (c === Ft.first) {
          const e = 500 * Math.log(l.length),
            s = 150 * Math.log(l.length);
          (g.start((r) => {
            const n = e - 500 * Math.log(l.length - r),
              i = s - 150 * Math.log(l.length - r);
            return {
              x: 0,
              y: 0,
              scale: 1,
              delay: 200 * r + n,
              config: { duration: 400 + i, easing: Ia.cubicBezier(1, 0, 0.95, 1) },
              onRest() {
                (a.play("achievementAppeared", { target: "overview" }),
                  r === l.length - 1 && f(!0),
                  y((e) => t(e, r)));
              },
            };
          }),
            g.start((a) => ({
              opacity: 1,
              delay: 150 + 200 * a + (e - 500 * Math.log(l.length - a)),
              config: {
                duration: 250 + (s - 150 * Math.log(l.length - a)),
                easing: Ia.cubicBezier(0.33, 0, 0.25, 1),
              },
            })));
        }
      }, [c, g, y, a, l.length, f]),
      (0, vt.jsxs)(nf, {
        className: F(!o && Gd, e),
        children: [
          (0, vt.jsx)("div", { className: Od }),
          (0, vt.jsx)(Zd, {}),
          (0, vt.jsxs)("div", {
            className: zd,
            children: [
              (0, vt.jsx)(w.div, {
                style: p,
                className: Wd,
                children: o
                  ? (0, vt.jsx)(rf, {})
                  : (0, vt.jsx)("div", { className: $d, children: (0, vt.jsx)(sf, {}) }),
              }),
              (0, vt.jsxs)("div", {
                className: F(
                  Xd,
                  l.length &&
                    s.computes.earnedCurrencies().filter(({ value: e }) => e).length >= 4 &&
                    Fd,
                ),
                children: [
                  (0, vt.jsx)(w.div, { style: h, children: (0, vt.jsx)(Dd, { className: Kd }) }),
                  l.length > 0 && (0, vt.jsx)("div", { className: Qd }),
                  (0, vt.jsx)(rc, { className: qd }),
                ],
              }),
              (0, vt.jsx)(w.div, {
                style: b,
                className: Md,
                children: (0, vt.jsx)(ss, { classNames: { base: Ud, image: Ld } }),
              }),
              (0, vt.jsx)(lc, {
                ...n,
                premiumAndStandartEarnings: x,
                applyBonus: r.applyBonus,
                handleAdvertisement: (e) => r.useAdvertisement(e),
                supportedAdvertisements: N,
                showBonusDetails: r.showBonusDetails,
                children: (0, vt.jsx)(w.div, {
                  style: v,
                  children: (0, vt.jsx)(gd, { className: Yd }),
                }),
              }),
            ],
          }),
          (0, vt.jsx)(i_, {}),
        ],
      })
    );
  }),
  of = Fa(function (e) {
    const { model: a } = Eo(),
      t = a.personalEfficiency.achievements.get(),
      s = a.computes.personalInfo().vehicle.nation;
    return (0, vt.jsx)(Qo, {
      achievements: t,
      vehicleNation: s,
      children: (0, vt.jsx)(lf, { ...e }),
    });
  });
function cf(e) {
  const a = ma(e.toLowerCase());
  return `url(${R.images.gui.maps.icons.vehicle.x380x304.$dyn(a)})`;
}
var df = "BanResultSection_9868ea69",
  mf = "BanResultSection_part_9154a720",
  uf = "BanResultSection_votesCount_3b77e1d1",
  _f = "BanResultSection_teamType_f208449e",
  ff = "BanResultSection_name_ad9c5dae",
  pf = "BanResultSection_banItem_2673f0f5",
  bf = "BanResultSection_icon_e242507c",
  hf = "BanResultSection_vehicle_53692df2",
  vf = "BanResultSection_dice_a257778e";
function gf({
  votesCount: e = 0,
  teamType: a,
  bannedVehicle: t,
  randomlySelected: r,
  onShowVehicleAnimation: n,
  onShowIconAnimation: i,
  classNames: l,
  hasAnimation: o = !0,
}) {
  const c = S({ body: R.strings.comp7_ext.banWidget.tooltip() }),
    d = le(),
    m = le(),
    u = s(t.techName, {
      ref: d,
      from: {
        opacity: o ? 0 : 1,
        transform: o ? "translate(-50%, -50%) scale(2)" : "translate(-50%, -50%) scale(1)",
      },
      enter: { opacity: 1, transform: "translate(-50%, -50%) scale(1)" },
      delay: o ? 800 : 0,
      immediate: !o,
      config: { duration: 500 },
      onStart: () => {
        o && n();
      },
    }),
    _ = de({
      ref: m,
      from: { opacity: o ? 0 : 0.9, zIndex: 2 },
      to: { opacity: 0.9 },
      delay: o ? 1300 : 0,
      immediate: !o,
      config: { duration: 500 },
      onStart: () => {
        o && i();
      },
    });
  return (
    N([d, m], o ? [0, 0.5] : [0, 0]),
    (0, vt.jsxs)("div", {
      className: (0, l_.default)(df, l?.base),
      children: [
        r && (0, vt.jsx)("div", { className: vf, ...c }),
        e >= 0 &&
          (0, vt.jsx)("div", { className: (0, l_.default)(mf, uf, l?.votesCount), children: e }),
        (0, vt.jsx)("div", {
          className: (0, l_.default)(mf, _f, l?.teamType),
          children: `${R.strings.comp7_ext.banWidget.$dyn(a)}`,
        }),
        (0, vt.jsx)("div", {
          className: (0, l_.default)(mf, ff, l?.name),
          children: t.name ? t.name : R.strings.comp7_ext.banView.noBan(),
        }),
        (0, vt.jsxs)("div", {
          className: (0, l_.default)(mf, pf),
          children: [
            (0, vt.jsx)(w.div, { className: bf, style: _ }),
            u((e, a) =>
              a
                ? (0, vt.jsx)(w.div, { className: hf, style: { backgroundImage: cf(a), ...e } })
                : void 0,
            ),
          ],
        }),
      ],
    })
  );
}
var yf = "allies",
  xf = "enemies",
  Nf = "BanResult_674191e3",
  jf = "BanResult_container_b473092c",
  If = "BanResult_container__left_391acdab",
  wf = "BanResult_container__right_e6368f82",
  Af = "BanResult_divider_da162964",
  Cf = "BanResult_reverse_f36dedc0",
  Bf = ({
    alliesVotes: e,
    enemyVotes: a,
    isAlliesRandomlySelected: t,
    isEnemyRandomlySelected: s,
    bannedByAlliesVehicle: n,
    bannedByEnemiesVehicle: i,
    hasAnimation: l = !0,
    className: o,
    classNames: c,
  }) => {
    const d = (0, ot.useRef)(!1),
      m = (0, ot.useRef)(!1),
      u = de({
        from: { transform: l ? "translateX(100%)" : "translateX(0%)" },
        to: { transform: "translateX(0%)" },
        immediate: !l,
        config: { duration: 500 },
      }),
      _ = de({
        from: { transform: l ? "translateX(-100%)" : "translateX(0%)" },
        to: { transform: "translateX(0%)" },
        immediate: !l,
        config: { duration: 500 },
      }),
      f = de({
        from: { opacity: l ? 0 : 0.3 },
        to: { opacity: 0.3 },
        immediate: !l,
        config: { duration: 500 },
      }),
      p = (0, ot.useCallback)(() => {
        d.current || ((d.current = !0), r.sound("comp_7_bans_pict_animation"));
      }, []),
      b = (0, ot.useCallback)(() => {
        m.current || ((m.current = !0), r.sound("comp_7_bans_crossed_label"));
      }, []);
    return (
      qe(() => {
        l && r.sound("comp_7_bans_text_animation");
      }),
      (0, vt.jsxs)("div", {
        className: (0, l_.default)(Nf, o),
        children: [
          (0, vt.jsx)(w.div, {
            style: _,
            className: (0, l_.default)(jf, If),
            children: (0, vt.jsx)(gf, {
              votesCount: e,
              teamType: yf,
              bannedVehicle: n,
              randomlySelected: t,
              onShowIconAnimation: b,
              onShowVehicleAnimation: p,
              classNames: c?.section,
              hasAnimation: l,
            }),
          }),
          (0, vt.jsx)(w.div, { className: Af, style: f }),
          (0, vt.jsx)(w.div, {
            style: u,
            className: (0, l_.default)(jf, wf),
            children: (0, vt.jsx)(gf, {
              votesCount: a,
              teamType: xf,
              bannedVehicle: i,
              randomlySelected: s,
              onShowIconAnimation: b,
              onShowVehicleAnimation: p,
              classNames: { ...c?.section, base: (0, l_.default)(Cf, c?.section?.base) },
              hasAnimation: l,
            }),
          }),
        ],
      })
    );
  },
  Sf = "BanInfo_9b213ff0",
  Pf = "BanInfo_title_9b470578",
  Rf = {
    section: {
      base: "BanInfo_section_c994582d",
      name: "BanInfo_name_16aa88a6",
      teamType: "BanInfo_teamType_607f919c",
      votesCount: "BanInfo_votesCount_1d6dee71",
    },
  },
  kf = Fa(({ className: e }) => {
    const { model: t } = Eo(),
      s = t.bannedByAlliesVehicle.get(),
      r = t.bannedByEnemiesVehicle.get();
    return (0, vt.jsxs)("div", {
      className: Sf,
      children: [
        (0, vt.jsx)(a, { text: `${R.strings.comp7_ext.pbs.bans.title()}`, classMix: Pf }),
        (0, vt.jsx)(Bf, {
          className: e,
          classNames: Rf,
          bannedByAlliesVehicle: { name: s.name, techName: s.techName },
          bannedByEnemiesVehicle: { name: r.name, techName: r.techName },
          hasAnimation: !1,
          ...t.bansModel.get(),
        }),
      ],
    });
  }),
  Tf = {
    divider: "Divider_80a19f4b",
    fadeIn: "Divider_fadeIn_76b1f722",
    fadeInThreeQuarters: "Divider_fadeInThreeQuarters_76b1f722",
    fadeInHalf: "Divider_fadeInHalf_76b1f722",
    fadeOut: "Divider_fadeOut_76b1f722",
    fadeInWithScale: "Divider_fadeInWithScale_76b1f722",
    slideUp: "Divider_slideUp_76b1f722",
    scale: "Divider_scale_76b1f722",
    raysAppearance: "Divider_raysAppearance_76b1f722",
    rotate: "Divider_rotate_76b1f722",
    "reverse-rotate": "Divider_reverse-rotate_76b1f722",
    glowAppearance: "Divider_glowAppearance_76b1f722",
    highlightAppearance: "Divider_highlightAppearance_76b1f722",
    blink: "Divider_blink_76b1f722",
    slideUpIn: "Divider_slideUpIn_76b1f722",
  },
  Ef = (0, ot.forwardRef)(function ({ classNames: e, className: a, ...t }, s) {
    return (0, vt.jsx)("div", {
      ...t,
      ref: s,
      className: F(Tf.divider, e?.base, a),
      children: (0, vt.jsx)(Aa, {
        className: F(Tf.dividerImage, e?.image),
        width: "100%",
        height: "100%",
        path: "post_battle.row_divider",
        fit: "cover",
      }),
    });
  });
var Df = {
  header: "Header_ecb415bd",
  vehicle: "Header_vehicle_e1c620c0",
  vehicleImageWrapper: "Header_vehicleImageWrapper_f07116f5",
  vehicleLevel: "Header_vehicleLevel_dd63e493",
  vehicle__teamKiller: "Header_vehicle__teamKiller_65f475ba",
  vehicleType: "Header_vehicleType_2a3aedee",
  vehicleName: "Header_vehicleName_7dc7512f",
  vehicleGap: "Header_vehicleGap_b2df83a7",
  info: "Header_info_63ade36e",
  accountInfo: "Header_accountInfo_40713a08",
  accountInfo__simplified: "Header_accountInfo__simplified_542337ae",
  accountInfoGap: "Header_accountInfoGap_50a55407",
  accountName: "Header_accountName_6a8dc850",
  clanAbbreviation: "Header_clanAbbreviation_4ac4e596",
  accountName__teamKiller: "Header_accountName__teamKiller_65f475ba",
  clanAbbreviation__teamKiller: "Header_clanAbbreviation__teamKiller_df866a4",
  killerClanAbbreviation: "Header_killerClanAbbreviation_ecb415bd",
  anonymizerIcon: "Header_anonymizerIcon_b6806a1a",
  vehicleState: "Header_vehicleState_73fcbd07",
  killerAccount__teamKiller: "Header_killerAccount__teamKiller_df866a4",
  achievements: "Header_achievements_5efa2203",
  achievement: "Header_achievement_49110775",
  achievement__extinct: "Header_achievement__extinct_19f6e11",
  achievementIcon: "Header_achievementIcon_e6989d30",
  fadeIn: "Header_fadeIn_65f475ba",
  fadeInThreeQuarters: "Header_fadeInThreeQuarters_65f475ba",
  fadeInHalf: "Header_fadeInHalf_65f475ba",
  fadeOut: "Header_fadeOut_65f475ba",
  fadeInWithScale: "Header_fadeInWithScale_65f475ba",
  slideUp: "Header_slideUp_65f475ba",
  scale: "Header_scale_65f475ba",
  raysAppearance: "Header_raysAppearance_65f475ba",
  rotate: "Header_rotate_65f475ba",
  "reverse-rotate": "Header_reverse-rotate_65f475ba",
  glowAppearance: "Header_glowAppearance_65f475ba",
  highlightAppearance: "Header_highlightAppearance_65f475ba",
  blink: "Header_blink_65f475ba",
  slideUpIn: "Header_slideUpIn_65f475ba",
};
function Hf(e, a) {
  return void 0 === a ? "default" : a === e ? "hover" : "extinct";
}
var Of = (0, ot.forwardRef)(function (
    { achievement: e, achievementsLength: a, index: t, hoverIndex: s, setHoverIndex: r, ...n },
    i,
  ) {
    const l = q(),
      o = T(
        e.tooltipId,
        (0, ot.useMemo)(() => JSON.parse(e.tooltipArgs), [e.tooltipArgs]),
      ),
      c = Le(
        { width: "48rem", height: "48rem", path: `achievement.c_48x48.${e.iconName}` },
        { medium: { width: "67rem", height: "71rem", path: `achievement.${e.iconName}` } },
      );
    return (0, vt.jsx)("div", {
      ...n,
      ...o,
      className: F(Df.achievement, Df[`achievement__${Hf(t, s)}`]),
      style: { zIndex: t === s ? a + 1 : a - t },
      onMouseEnter: function (e) {
        (o.onMouseEnter(e),
          r(t),
          l.play("mouse-enter", {
            original: e,
            target: "team-efficiency:efficiency-details:achievement",
          }));
      },
      onMouseLeave: () => {
        (o.onMouseLeave(), r(void 0));
      },
      children: (0, vt.jsx)(Aa, { ref: i, className: Df.achievementIcon, ...c }, e.iconName),
    });
  }),
  Vf = Fa(function () {
    const { model: e } = Eo(),
      { model: a } = Qa(),
      t = e.computes.efficiencyDetails(),
      s = a.season.name.get();
    if (void 0 === t) return null;
    const { isQualification: r, rank: n, division: i } = t;
    return (0, vt.jsx)(vt.Fragment, {
      children: r
        ? (0, vt.jsx)(nt, {
            size: Ja.x48,
            seasonName: s,
            className: Df.accountInfoGap,
            isSimplified: !0,
          })
        : (0, vt.jsx)(at, {
            size: Ja.x48,
            rank: n,
            division: i,
            seasonName: s,
            className: Df.accountInfoGap,
            isSimplified: !0,
          }),
    });
  });
function zf({ vehicleStatusKey: e, anonymized: a, clanAbbrev: t, personal: s, abbondonBattle: r }) {
  return s && r
    ? "battle_results.common.vehicleState.prematureLeave"
    : !1 === Co.includes(e)
      ? `battle_results.common.vehicleState.${e}`
      : a || "" === t
        ? `battle_results.common.vehicleState.${e}_with_killername`
        : `battle_results.common.vehicleState.${e}_with_killername_and_clan`;
}
var Wf = Fa(function ({
    team: e,
    isRankedBattle: a,
    account: t,
    vehicle: s,
    achievements: r,
    squadIndex: n,
    personal: i,
    userStatus: l,
    killer: o,
  }) {
    const c = m.resolve("strings"),
      [d, u] = (0, ot.useState)(void 0),
      { model: _ } = Eo(),
      f = _.computes.personalInfo(),
      p = Le(
        { width: "230rem", height: "184rem" },
        { medium: { width: "290rem", height: "232rem" } },
      ),
      b = ko({ personal: i, platoonType: Ro(e, f.squadIndex, n), anonymizer: t.anonymizer }),
      h = S({
        header: c
          .readOrEmpty("tooltips.anonymizer.teamStats.header")
          .replace("%(name)s", b ? t.username : t.fakeUsername),
        body: c.readOrEmpty("tooltips.anonymizer.teamStats.body"),
      }),
      v = -1 === (g = l.deathReason) ? "alive" : `dead${g}`;
    var g;
    const y = b ? o.fakeUsername : o.username,
      x = void 0 === s;
    return (0, vt.jsxs)("div", {
      className: Df.header,
      children: [
        (0, vt.jsx)("div", {
          className: Df.vehicleImageWrapper,
          children: (0, vt.jsx)(C, {
            name: x ? "tank_empty" : s.techName,
            width: p.width,
            height: p.height,
          }),
        }),
        (0, vt.jsxs)("div", {
          className: Df.info,
          children: [
            (0, vt.jsxs)(je, {
              className: F(Df.accountInfo, !a && Df.accountInfo__simplified),
              children: [
                a ? (0, vt.jsx)(Vf, {}) : null,
                "" !== t.badge &&
                  (0, vt.jsx)(je.Badge, {
                    className: Df.accountInfoGap,
                    size: je.Badge.sizes.x48x48,
                    badgeId: t.badge,
                  }),
                (0, vt.jsx)(je.Name, {
                  className: F(
                    Df.accountName,
                    Df.accountInfoGap,
                    t.teamKiller && Df.accountName__teamKiller,
                  ),
                  children: (0, vt.jsx)(ba, { text: b ? t.fakeUsername : t.username }),
                }),
                "" !== t.clanAbbreviation &&
                  !b &&
                  (0, vt.jsx)(je.ClanTag, {
                    className: F(
                      Df.clanAbbreviation,
                      t.teamKiller && Df.clanAbbreviation__teamKiller,
                    ),
                    children: (0, vt.jsx)(Q, {
                      path: "common.clanTag",
                      params: { abbrev: t.clanAbbreviation },
                      brackets: { start: "{", end: "}" },
                    }),
                  }),
                0 !== t.igrType &&
                  (0, vt.jsx)(je.IgrIcon, {
                    size: je.IgrIcon.sizes.x64x28,
                    className: Df.accountInfoGap,
                  }),
                "" !== t.suffixBadge &&
                  (0, vt.jsx)(je.Stripe, {
                    size: je.Stripe.sizes.regular,
                    badgeId: t.suffixBadge,
                    className: Df.accountInfoGap,
                  }),
                t.anonymizer &&
                  (0, vt.jsx)(je.AnonymizerIcon, {
                    ...h,
                    size: je.AnonymizerIcon.sizes.x32x32,
                    className: Df.anonymizerIcon,
                  }),
              ],
            }),
            (0, vt.jsx)("div", {
              className: F(Df.vehicle, t.teamKiller && Df.vehicle__teamKiller),
              children: x
                ? (0, vt.jsx)(Q, { path: "ingame_gui.players_panel.unknown_vehicle" })
                : (0, vt.jsxs)(vt.Fragment, {
                    children: [
                      (0, vt.jsx)(Ue, {
                        value: s.tier,
                        className: F(Df.vehicleLevel, Df.vehicleGap),
                      }),
                      (0, vt.jsx)(D, {
                        type: s.type,
                        size: "x24x24",
                        className: F(Df.vehicleType, Df.vehicleGap),
                      }),
                      (0, vt.jsx)("div", { className: Df.vehicleName, children: s.longName }),
                    ],
                  }),
            }),
            (0, vt.jsx)("div", {
              className: Df.vehicleState,
              children: (0, vt.jsx)(Q, {
                path: zf({
                  vehicleStatusKey: v,
                  anonymized: b,
                  personal: i,
                  clanAbbrev: o.clanAbbreviation,
                  abbondonBattle: l.abandonBattle,
                }),
                params: {
                  killername: y,
                  clanTag: o.clanAbbreviation,
                  killerClass: F(Df.killerAccount, o.teamKiller && Df.killerAccount__teamKiller),
                },
              }),
            }),
            0 !== r.length &&
              (0, vt.jsx)("div", {
                className: Df.achievements,
                children: ya(Jl(r), (e, a) =>
                  (0, vt.jsx)(
                    Of,
                    {
                      index: a,
                      hoverIndex: d,
                      setHoverIndex: u,
                      achievement: e,
                      achievementsLength: r.length,
                    },
                    e.name,
                  ),
                ),
              }),
          ],
        }),
      ],
    });
  }),
  Mf = Ie("StatisticsLabel"),
  Gf = m.resolve("strings"),
  $f = (0, ot.forwardRef)(function ({ labelKey: e, ...a }, t) {
    return (0, vt.jsx)(Mf, { ...a, ref: t, children: Gf.readOrEmpty(e) });
  }),
  Uf = "Value_798a6cdd",
  Lf = "Value_separator_798a6cdd",
  Xf = m.resolve("strings");
function Ff(e, a) {
  switch (e) {
    case _o.Integer:
      return Y.formatNumber("integral", a);
    case _o.Float:
      return Y.formatReal("fractional", a);
    default:
      return a;
  }
}
var Kf = Ie("StatisticsValue", Uf),
  qf = (0, ot.forwardRef)(function (
    {
      labelKey: e,
      value: a,
      type: t,
      valueSeparatorKey: s = "common.common.slash",
      className: r,
      classNames: n,
      ...i
    },
    l,
  ) {
    return (0, vt.jsx)(Kf, {
      ...i,
      ref: l,
      className: F(n?.base, r),
      children: ya(a, (r, i) =>
        (0, vt.jsxs)(
          ot.Fragment,
          {
            children: [
              (0, vt.jsx)("div", {
                className: F(0 === r && n?.zeroValue, r < 0 && n?.negativeValue),
                children: Ff(t, r),
              }),
              i < a.length - 1 &&
                (0, vt.jsxs)("div", {
                  className: F(Lf, n?.separator),
                  children: [" ", Xf.readOrEmpty(s), " "],
                }),
            ],
          },
          `${e}_value_${i}`,
        ),
      ),
    });
  }),
  Qf = "Index_scrollAreaContent_52a570a",
  Yf = "Index_scrollAreaContent__initialized_b2629fde",
  Zf = "Index_item_6b7cdfb0",
  Jf = "Index_separator_add04e19",
  ep = Ie("Statistics", "Index_statistics_638478ff"),
  ap = Ie("StatisticsItem", Zf),
  tp = Ie("StatisticsItemSeparator", Jf);
function sp({ children: e, scrollbarProps: a, scrollAreaProps: t }) {
  const s = ms(oe().api);
  return (0, vt.jsxs)(vt.Fragment, {
    children: [
      (0, vt.jsx)(ne, {
        ...t,
        classNames: { ...t?.classNames, content: F(Qf, s && Yf, t?.classNames?.content) },
        children: e,
      }),
      (0, vt.jsx)(ra, { ...a }),
    ],
  });
}
var rp = (0, ot.forwardRef)(function ({ scrollbarProps: e, scrollAreaProps: a, ...t }, s) {
  return (0, vt.jsx)(ep, {
    ...t,
    ref: s,
    children: (0, vt.jsx)(ee, {
      children: (0, vt.jsx)(sp, { ...t, scrollbarProps: e, scrollAreaProps: a }),
    }),
  });
});
((rp.Item = ap), (rp.Value = qf), (rp.Label = $f), (rp.Separator = tp));
var np = "PlayerStatistics_scrollbar_987bbca2",
  ip = "PlayerStatistics_scrollAreaContent_8636fa99",
  lp = "PlayerStatistics_listItemSeparator_32247273",
  op = "PlayerStatistics_listItem_27e9eeba",
  cp = "PlayerStatistics_label_3fb1f69f",
  dp = "PlayerStatistics_value_6831d5c1",
  mp = "PlayerStatistics_zeroValue_d98b2431",
  up = "PlayerStatistics_valueSeparator_dcf01904",
  _p = "PlayerStatistics_listSubItem_db8ef127",
  fp = "PlayerStatistics_separator_4e8ac571",
  pp = "PlayerStatistics_separatorSquare_5e440c20";
function bp({ squareSize: e = 1, spacing: a = 2, backgroundColor: t = "#d9d9d9" }) {
  const s = (0, ot.useRef)(null),
    [r, n] = (0, ot.useState)(0),
    i = e + a,
    l = (0, ot.useCallback)(() => {
      const e = s.current;
      if (null !== e) {
        const a = e.getBoundingClientRect().width,
          t = j(a);
        n(Math.floor(t / i));
      }
    }, [i]);
  return (
    J(l, [s.current, i, l]),
    (0, ot.useEffect)(() => be(l), [l]),
    (0, vt.jsx)("div", {
      ref: s,
      className: fp,
      children: Array.from({ length: r }).map((a, s) =>
        (0, vt.jsx)(
          "div",
          {
            className: pp,
            style: { backgroundColor: t, width: `${e}rem`, height: `${e}rem`, left: s * i + "rem" },
          },
          s,
        ),
      ),
    })
  );
}
function hp({ list: e }) {
  return (0, vt.jsx)(rp, {
    scrollbarProps: { classNames: { base: np } },
    scrollAreaProps: { classNames: { content: ip } },
    children: ya(e, (e) =>
      (0, vt.jsxs)(
        ot.Fragment,
        {
          children: [
            (0, vt.jsxs)(rp.Item, {
              className: op,
              children: [
                (0, vt.jsx)(rp.Label, {
                  className: cp,
                  labelKey: `battle_results.team.stats.labels_${e.labelKey}`,
                }),
                (0, vt.jsx)(rp.Separator, { className: lp, children: (0, vt.jsx)(bp, {}) }),
                (0, vt.jsx)(rp.Value, {
                  classNames: { base: dp, zeroValue: mp, separator: up },
                  labelKey: e.labelKey,
                  value: e.value,
                  type: e.paramValueType,
                }),
              ],
            }),
            void 0 !== e.details &&
              ya(e.details, (e) =>
                (0, vt.jsxs)(
                  rp.Item,
                  {
                    className: F(op, _p),
                    children: [
                      (0, vt.jsx)(rp.Label, {
                        className: cp,
                        labelKey: `battle_results.team.stats.labels_${e.labelKey}`,
                      }),
                      (0, vt.jsx)(rp.Separator, { className: lp, children: (0, vt.jsx)(bp, {}) }),
                      (0, vt.jsx)(rp.Value, {
                        classNames: { base: dp, zeroValue: mp, separator: up },
                        labelKey: e.labelKey,
                        value: e.value,
                        type: e.paramValueType,
                      }),
                    ],
                  },
                  e.labelKey,
                ),
              ),
          ],
        },
        e.labelKey,
      ),
    ),
  });
}
var vp = "EfficiencyDetails_efficiencyDetails__reduced_908fdbe9",
  gp = "EfficiencyDetails_efficiencyDetails__allies_20b1febc",
  yp = "EfficiencyDetails_efficiencyDetails__enemies_23a29af",
  xp = "EfficiencyDetails_divider_85b11efd",
  Np = "EfficiencyDetails_dividerImage_5b9d06d2",
  jp = "EfficiencyDetails_closeIcon_8d81da90",
  Ip = "EfficiencyDetails_statistics_30a81815",
  wp = Ie("EfficiencyDetails", "EfficiencyDetails_efficiencyDetails_1f97f967", {
    variants: { team: { [wo]: gp, [Ao]: yp } },
  }),
  Ap = Fa(function ({ team: e, className: a }) {
    const { model: t, controls: s } = Eo(),
      r = t.bansModel.get().isEnabled,
      n = t.computes.efficiencyDetails(),
      i = t.computes.isRankedBattle(),
      l = q(),
      c = (0, ot.useRef)(null);
    return (
      (0, ot.useEffect)(() => {
        const e = oa.down(([, e]) => {
            "outside" === e && s.teamEfficiency.selectRow(void 0);
          }),
          a = o(window, "click", (e) => {
            c.current && !c.current.contains(e.target) && s.teamEfficiency.selectRow(void 0);
          });
        return () => {
          (a(), e());
        };
      }, [s.teamEfficiency]),
      void 0 === n
        ? null
        : (0, vt.jsxs)(wp, {
            team: e,
            className: F(a, r && vp),
            ref: c,
            onClick: (e) => {
              e.stopPropagation();
            },
            children: [
              (0, vt.jsx)(Wf, {
                team: e,
                isRankedBattle: i,
                account: n.account,
                squadIndex: n.squadIndex,
                achievements: n.achievements,
                personal: n.personal,
                userStatus: n.userStatus,
                vehicle: n.vehicle,
                killer: n.killer,
              }),
              (0, vt.jsx)("div", {
                className: Ip,
                children: (0, vt.jsx)(hp, { list: n.detailedStatistics }),
              }),
              (0, vt.jsx)(Ef, { classNames: { base: xp, image: Np } }),
              (0, vt.jsx)(Aa, {
                className: jp,
                width: "24rem",
                height: "24rem",
                path: "library.close",
                onMouseEnter: () => {
                  l.play("mouse-enter", { target: "team-efficiency:efficiency-details:close" });
                },
                onClick: (e) => {
                  (s.teamEfficiency.selectRow(void 0),
                    l.play("close", {
                      original: e,
                      target: "team-efficiency:efficiency-details:close",
                    }));
                },
              }),
            ],
          })
    );
  }),
  Cp = "squadIndex",
  Bp = "rank",
  Sp = "account",
  Pp = "vehicle",
  Rp = "achievements",
  kp = "damageDealt",
  Tp = "kills",
  Ep = "earnedXp",
  Dp = "prestigePoints",
  Hp = "RankCell_container_d7a759f",
  Op = Fa(function ({ isQualification: e, rank: a, division: t }) {
    const { model: s } = Qa(),
      r = s.season.name.get();
    return (0, vt.jsx)("div", {
      className: Hp,
      children: e
        ? (0, vt.jsx)(nt, { size: Ja.x22, seasonName: r })
        : (0, vt.jsx)(at, { size: Ja.x22, rank: a, division: t, seasonName: r }),
    });
  }),
  Vp = "AccountInfoCell_accountInfo_388cec2a",
  zp = "AccountInfoCell_accountName_9a181e4d",
  Wp = "AccountInfoCell_clanAbbreviation_99f1cc86",
  Mp = "AccountInfoCell_badge_b101914f",
  Gp = "AccountInfoCell_anonymizerIcon_a1d51ca4",
  $p = "AccountInfoCell_igrIcon_158694e7",
  Up = "AccountInfoCell_stripe_fefba7b2",
  Lp = Fa(function ({ account: e, team: a, squadIndex: t, className: s, classNames: r, ...n }) {
    const { model: i } = Eo(),
      l = i.computes.personalInfo(),
      o = ko({
        personal: l.account.username === e.username,
        platoonType: Ro(a, l.squadIndex, t),
        anonymizer: e.anonymizer,
      });
    return (0, vt.jsxs)(je, {
      ...n,
      className: F(Vp, s),
      children: [
        "" !== e.badge &&
          (0, vt.jsx)(je.Badge, {
            size: je.Badge.sizes.x24x24,
            badgeId: e.badge,
            className: F(Mp, r?.badge),
          }),
        (0, vt.jsx)(je.Name, {
          className: F(zp, r?.username),
          children: (0, vt.jsx)(ba, { text: o ? e.fakeUsername : e.username }),
        }),
        "" !== e.clanAbbreviation &&
          !o &&
          (0, vt.jsx)(je.ClanTag, {
            className: F(Wp, r?.clanAbbreviation),
            children: (0, vt.jsx)(Q, {
              path: "common.clanTag",
              params: { abbrev: e.clanAbbreviation },
              brackets: { start: "{", end: "}" },
            }),
          }),
        0 !== e.igrType &&
          (0, vt.jsx)(je.IgrIcon, { size: je.IgrIcon.sizes.x34x16, className: F($p, r?.igrIcon) }),
        "" !== e.suffixBadge &&
          (0, vt.jsx)(je.Stripe, {
            size: je.Stripe.sizes.default,
            badgeId: e.suffixBadge,
            className: Up,
            classNames: r?.suffixBadge,
          }),
        e.anonymizer &&
          (0, vt.jsx)(je.AnonymizerIcon, {
            size: je.AnonymizerIcon.sizes.x24x24,
            className: F(Gp, r?.anonymizerIcon),
          }),
      ],
    });
  }),
  Xp = "AchievementsCell_achievementCell_e9bf973c",
  Fp = "AchievementsCell_achievementsAmount_349c209a";
function Kp({ achievements: e }) {
  const a = m.resolve("strings"),
    t = S({ body: ya(Jl(e), (e) => a.readOrEmpty(`achievements.${e.name}`)).join("\n") }),
    s = e.length;
  return 0 === s
    ? null
    : (0, vt.jsxs)("div", {
        ...t,
        className: Xp,
        children: [
          (0, vt.jsx)(Aa, { path: "library.medal", width: "32rem", height: "32rem" }),
          (0, vt.jsx)("div", { className: Fp, children: Y.formatNumber("integral", s) }),
        ],
      });
}
var qp = { behaviour: ke.static, size: "32rem" },
  Qp = { behaviour: ke.static, size: "32rem" },
  Yp = { behaviour: ke.static, size: "138rem" },
  Zp = { behaviour: ke.static, size: "212rem" },
  Jp = { behaviour: ke.static, size: "240rem" },
  eb = { behaviour: ke.static, size: "106rem" },
  ab = { behaviour: ke.static, size: "180rem" },
  tb = { behaviour: ke.static, size: "208rem" },
  sb = { behaviour: ke.static, size: "180rem" },
  rb = { behaviour: ke.static, size: "236rem" },
  nb = { behaviour: ke.static, size: "292rem" },
  ib = { behaviour: ke.static, size: "56rem" },
  lb = { behaviour: ke.static, size: "60rem" },
  ob = { behaviour: ke.static, size: "80rem" },
  cb = { behaviour: ke.static, size: "40rem" },
  db = { behaviour: ke.static, size: "60rem" },
  mb = { behaviour: ke.static, size: "60rem" },
  ub = { behaviour: ke.static, size: "56rem" },
  _b = { behaviour: ke.static, size: "60rem" },
  fb = { behaviour: ke.static, size: "80rem" },
  pb = { behaviour: ke.static, size: "40rem" },
  bb = { behaviour: ke.static, size: "56rem" },
  hb = { behaviour: ke.static, size: "60rem" },
  vb = { behaviour: ke.static, size: "80rem" };
var gb = {
    headerCell__asc: "HeaderCell_headerCell__asc_204e6a44",
    headerCell__desc: "HeaderCell_headerCell__desc_dc5a7202",
    headerCell: "HeaderCell_headerCell_5b34d1b1",
    headerCell__icon: "HeaderCell_headerCell__icon_cfa14ddf",
    headerCell__text: "HeaderCell_headerCell__text_b476890c",
    fadeIn: "HeaderCell_fadeIn_204e6a44",
    fadeInThreeQuarters: "HeaderCell_fadeInThreeQuarters_204e6a44",
    fadeInHalf: "HeaderCell_fadeInHalf_204e6a44",
    fadeOut: "HeaderCell_fadeOut_204e6a44",
    fadeInWithScale: "HeaderCell_fadeInWithScale_204e6a44",
    slideUp: "HeaderCell_slideUp_204e6a44",
    scale: "HeaderCell_scale_204e6a44",
    raysAppearance: "HeaderCell_raysAppearance_204e6a44",
    rotate: "HeaderCell_rotate_204e6a44",
    "reverse-rotate": "HeaderCell_reverse-rotate_204e6a44",
    glowAppearance: "HeaderCell_glowAppearance_204e6a44",
    highlightAppearance: "HeaderCell_highlightAppearance_204e6a44",
    blink: "HeaderCell_blink_204e6a44",
    slideUpIn: "HeaderCell_slideUpIn_204e6a44",
  },
  yb = {
    [Cp]: "library.shield",
    [Bp]: "library.rank",
    [Pp]: "library.panzer",
    [kp]: "library.cross_with_gap",
    [Tp]: "library.crossed_tank",
    [Ep]: "library.star",
    [Rp]: "library.medal",
    [Dp]: "library.prestige_points",
  },
  xb = {
    [Cp]: "squadHeader",
    [Bp]: "rank",
    [Sp]: "playerHeader",
    [Pp]: "tankHeader",
    [kp]: "damageHeader",
    [Tp]: "fragHeader",
    [Ep]: "xpHeader",
    [Rp]: "medalHeader",
    [Dp]: "prestigePoints",
  },
  Nb = (0, ot.forwardRef)(function ({ name: e, team: a, column: t, className: s, ...r }, n) {
    const i = t.getIsSorted(),
      l = m.resolve("strings"),
      o = S({
        header: l.readOrEmpty(`battle_results.team.${xb[e]}.header`),
        body: l.readOrEmpty(`battle_results.team.${xb[e]}.body`),
      }),
      c = e === Sp;
    return (0, vt.jsx)("div", {
      ...r,
      ...o,
      ref: n,
      className: F(
        gb.headerCell,
        c ? gb.headerCell__text : gb.headerCell__icon,
        i && gb[`headerCell__${i}`],
        s,
      ),
      children: c
        ? l.readOrEmpty(`battle_results.team.stats.${a}`)
        : (0, vt.jsx)(Aa, { width: "32rem", height: "32rem", path: yb[e] }),
    });
  }),
  jb = "NumberValueCell_numberValueCell_8840a07";
function Ib({ value: e, className: a, showZero: t = !0 }) {
  return !1 === t && 0 === e
    ? null
    : (0, vt.jsx)("div", { className: F(jb, a), children: Y.formatNumber("integral", e) });
}
var wb = {
    platoon: "PlatoonCell_platoon_5fe0374b",
    platoonText: "PlatoonCell_platoonText_b6a98287",
    platoonText__personal: "PlatoonCell_platoonText__personal_d021db4c",
    platoonText__alien: "PlatoonCell_platoonText__alien_9767e814",
    fadeIn: "PlatoonCell_fadeIn_45cd697",
    fadeInThreeQuarters: "PlatoonCell_fadeInThreeQuarters_45cd697",
    fadeInHalf: "PlatoonCell_fadeInHalf_45cd697",
    fadeOut: "PlatoonCell_fadeOut_45cd697",
    fadeInWithScale: "PlatoonCell_fadeInWithScale_45cd697",
    slideUp: "PlatoonCell_slideUp_45cd697",
    scale: "PlatoonCell_scale_45cd697",
    raysAppearance: "PlatoonCell_raysAppearance_45cd697",
    rotate: "PlatoonCell_rotate_45cd697",
    "reverse-rotate": "PlatoonCell_reverse-rotate_45cd697",
    glowAppearance: "PlatoonCell_glowAppearance_45cd697",
    highlightAppearance: "PlatoonCell_highlightAppearance_45cd697",
    blink: "PlatoonCell_blink_45cd697",
    slideUpIn: "PlatoonCell_slideUpIn_45cd697",
  },
  Ab = {
    [Bo]: (e) => `library.super_platoon_indicator_${e}`,
    [Po]: () => "library.platoon_indicator_gray",
    [So]: () => "library.platoon_indicator_orange",
  },
  Cb = Fa(function ({ squadIndex: e, team: a }) {
    const { model: t } = Eo(),
      s = Ro(a, t.computes.personalInfo().squadIndex, e);
    if (null === s) return null;
    const r = Ab[s];
    return (0, vt.jsxs)("div", {
      className: wb.platoon,
      children: [
        (0, vt.jsx)(Aa, { path: r(a), width: "32rem", height: "32rem" }),
        s !== Bo &&
          (0, vt.jsx)("div", {
            className: F(wb.platoonText, wb[`platoonText__${s}`]),
            children: e,
          }),
      ],
    });
  }),
  Bb = "VehicleCell_vehicle_386f696d",
  Sb = "VehicleCell_vehicleImageWrapper_aa1c27bd",
  Pb = "VehicleCell_vehicleTypeWrapper_3f1f3f6d",
  Rb = "VehicleCell_vehicleLevel_1a4134b1",
  kb = "VehicleCell_vehicleName_eaeb9715",
  Tb = "VehicleCell_vehicleName__unknown_726ac1d0";
function Eb({ vehicle: e, classNames: a, className: t }) {
  const s = void 0 === e;
  return (0, vt.jsxs)("div", {
    className: F(Bb, t),
    children: [
      (0, vt.jsx)("div", {
        className: F(Sb, a?.imageWrapper),
        children: (0, vt.jsx)(C, {
          size: C.size.x120x96,
          name: s ? "tank_empty" : e.techName,
          className: a?.image,
        }),
      }),
      !1 === s &&
        (0, vt.jsxs)(vt.Fragment, {
          children: [
            (0, vt.jsx)(Ue, { value: e.tier, className: F(Rb, a?.level) }),
            (0, vt.jsx)("div", {
              className: F(Pb, a?.typeWrapper),
              children: (0, vt.jsx)(D, { size: "x24x24", type: e.type, className: a?.type }),
            }),
          ],
        }),
      (0, vt.jsx)("div", {
        className: F(kb, s && Tb, a?.name),
        children: s
          ? (0, vt.jsx)(Q, { path: "ingame_gui.players_panel.unknown_vehicle" })
          : (0, vt.jsx)(ba, { text: e.name }),
      }),
    ],
  });
}
var Db = {
    efficiencyTable__allies: "EfficiencyTable_efficiencyTable__allies_b2f99733",
    efficiencyTable__enemies: "EfficiencyTable_efficiencyTable__enemies_1ba35ae7",
    header: "EfficiencyTable_header_da354842",
    rowsWrapper: "EfficiencyTable_rowsWrapper_cae55fb5",
    efficiencyTable: "EfficiencyTable_efficiencyTable_e622a43e",
    alignLeft: "EfficiencyTable_alignLeft_a52cfd11",
    alignRight: "EfficiencyTable_alignRight_46cf6a64",
    table: "EfficiencyTable_table_f467cc44",
    tableBody: "EfficiencyTable_tableBody_5b14613b",
    scrollBar: "EfficiencyTable_scrollBar_f4e5aa11",
    scrollAreaContent: "EfficiencyTable_scrollAreaContent_4fa5a5ab",
    mask: "EfficiencyTable_mask_8fbe6740",
    fadeIn: "EfficiencyTable_fadeIn_e622a43e",
    fadeInThreeQuarters: "EfficiencyTable_fadeInThreeQuarters_e622a43e",
    fadeInHalf: "EfficiencyTable_fadeInHalf_e622a43e",
    fadeOut: "EfficiencyTable_fadeOut_e622a43e",
    fadeInWithScale: "EfficiencyTable_fadeInWithScale_e622a43e",
    slideUp: "EfficiencyTable_slideUp_e622a43e",
    scale: "EfficiencyTable_scale_e622a43e",
    raysAppearance: "EfficiencyTable_raysAppearance_e622a43e",
    rotate: "EfficiencyTable_rotate_e622a43e",
    "reverse-rotate": "EfficiencyTable_reverse-rotate_e622a43e",
    glowAppearance: "EfficiencyTable_glowAppearance_e622a43e",
    highlightAppearance: "EfficiencyTable_highlightAppearance_e622a43e",
    blink: "EfficiencyTable_blink_e622a43e",
    slideUpIn: "EfficiencyTable_slideUpIn_e622a43e",
  },
  Hb = {
    tableBodyRow: "TableBodyRow_tableBodyRow_be19874",
    tableBodyRow__selected: "TableBodyRow_tableBodyRow__selected_9cd5fe77",
    hoverOverlay: "TableBodyRow_hoverOverlay_dab11111",
    selectedRowTail: "TableBodyRow_selectedRowTail_595bad28",
    selectedRowTail__enemies: "TableBodyRow_selectedRowTail__enemies_15d3ff4e",
    rowDivider: "TableBodyRow_rowDivider_7f22c0ad",
    rowDividerImage: "TableBodyRow_rowDividerImage_9c09afd1",
    accountInfo: "TableBodyRow_accountInfo_5ecfc9f2",
    vehicleText: "TableBodyRow_vehicleText_ddbf2e39",
    numberValue: "TableBodyRow_numberValue_c854dd1b",
    vehicleType: "TableBodyRow_vehicleType_e090b6ac",
    tableBodyRow__personalSquad: "TableBodyRow_tableBodyRow__personalSquad_5ecfc9f2",
    tableBodyRow__killed: "TableBodyRow_tableBodyRow__killed_5ecfc9f2",
    tableBodyRow__personal: "TableBodyRow_tableBodyRow__personal_5ecfc9f2",
    vehicleImage: "TableBodyRow_vehicleImage_e48d0479",
    accountName: "TableBodyRow_accountName_5ecfc9f2",
    tableBodyRow__teamKiller: "TableBodyRow_tableBodyRow__teamKiller_5ecfc9f2",
    clanAbbreviation: "TableBodyRow_clanAbbreviation_5ecfc9f2",
    selectedOverlay: "TableBodyRow_selectedOverlay_7f267587",
    selectedOverlayDivider: "TableBodyRow_selectedOverlayDivider_35a0f807",
    selectedOverlayDivider__bottom: "TableBodyRow_selectedOverlayDivider__bottom_20b949b4",
    selectedOverlayImage: "TableBodyRow_selectedOverlayImage_9c09afd1",
    fadeIn: "TableBodyRow_fadeIn_5ecfc9f2",
    fadeInThreeQuarters: "TableBodyRow_fadeInThreeQuarters_5ecfc9f2",
    fadeInHalf: "TableBodyRow_fadeInHalf_5ecfc9f2",
    fadeOut: "TableBodyRow_fadeOut_5ecfc9f2",
    fadeInWithScale: "TableBodyRow_fadeInWithScale_5ecfc9f2",
    slideUp: "TableBodyRow_slideUp_5ecfc9f2",
    scale: "TableBodyRow_scale_5ecfc9f2",
    raysAppearance: "TableBodyRow_raysAppearance_5ecfc9f2",
    rotate: "TableBodyRow_rotate_5ecfc9f2",
    "reverse-rotate": "TableBodyRow_reverse-rotate_5ecfc9f2",
    glowAppearance: "TableBodyRow_glowAppearance_5ecfc9f2",
    highlightAppearance: "TableBodyRow_highlightAppearance_5ecfc9f2",
    blink: "TableBodyRow_blink_5ecfc9f2",
    slideUpIn: "TableBodyRow_slideUpIn_5ecfc9f2",
  },
  Ob = Ve();
function Vb(e, a, t) {
  const s = e.getValue("account"),
    r = e.getValue("squadIndex");
  return ko({
    personal: a.account.username === s.username,
    platoonType: Ro(t, a.squadIndex, r),
    anonymizer: s.anonymizer,
  })
    ? s.fakeUsername
    : s.username;
}
function zb(e, a, t, s) {
  return (
    (function (e, a) {
      if (e.original.isQualification && a.original.isQualification) return 0;
      if (e.original.isQualification && a.original.rank > 0) return -1;
      if (e.original.rank > 0 && a.original.isQualification) return 1;
      const t = e.getValue("rank"),
        s = a.getValue("rank"),
        r = e.original.division,
        n = a.original.division;
      return s - t || n - r;
    })(e, a) ||
    (function (e, a, t, s) {
      const r = Vb(e, t, s),
        n = Vb(a, t, s);
      return r.localeCompare(n);
    })(e, a, t, s)
  );
}
function Wb(e, a) {
  return e.getValue("damageDealt").damageDealt - a.getValue("damageDealt").damageDealt;
}
var Mb = {
  [te.heavyTank]: 5,
  [te.mediumTank]: 4,
  [te["AT-SPG"]]: 3,
  [te.lightTank]: 2,
  [te.SPG]: 1,
};
function Gb({ team: e, personalInfo: a, breakpointName: t, isRankedBattle: s }) {
  const r = (t, s) => zb(t, s, a, e),
    n = "small" === t ? M.extraSmall : t,
    i = (function (e) {
      return {
        [Cp]: { [M.extraSmall]: qp, [M.medium]: qp, [M.large]: qp, [M.extraLarge]: qp },
        [Bp]: { [M.extraSmall]: Qp, [M.medium]: Qp, [M.large]: Qp, [M.extraLarge]: Qp },
        [Sp]: e
          ? { [M.extraSmall]: eb, [M.medium]: ab, [M.large]: ab, [M.extraLarge]: tb }
          : { [M.extraSmall]: Yp, [M.medium]: Zp, [M.large]: Zp, [M.extraLarge]: Jp },
        [Pp]: { [M.extraSmall]: sb, [M.medium]: rb, [M.large]: rb, [M.extraLarge]: nb },
        [kp]: { [M.extraSmall]: ib, [M.medium]: lb, [M.large]: lb, [M.extraLarge]: ob },
        [Tp]: { [M.extraSmall]: cb, [M.medium]: db, [M.large]: db, [M.extraLarge]: mb },
        [Ep]: { [M.extraSmall]: ub, [M.medium]: _b, [M.large]: _b, [M.extraLarge]: fb },
        [Rp]: { [M.extraSmall]: pb, [M.medium]: pb, [M.large]: pb, [M.extraLarge]: pb },
        [Dp]: { [M.extraSmall]: bb, [M.medium]: hb, [M.large]: hb, [M.extraLarge]: vb },
      };
    })(s);
  return [
    Ob.accessor("squadIndex", {
      id: Cp,
      header: (e) => (0, vt.jsx)(Nb, { name: Cp, column: e.column }),
      sortingFn: (e, a) => {
        const t = a.getValue("squadIndex") - e.getValue("squadIndex");
        return 0 !== t ? t : r(e, a);
      },
      cell: (a) => (0, vt.jsx)(Cb, { team: e, squadIndex: a.cell.getValue() }),
      meta: { column: i[Cp][n] },
    }),
    ...(s
      ? [
          Ob.accessor("rank", {
            id: Bp,
            header: (e) => (0, vt.jsx)(Nb, { name: Bp, column: e.column }),
            sortingFn: r,
            cell: (e) =>
              (0, vt.jsx)(Op, {
                isQualification: e.row.original.isQualification,
                rank: e.cell.getValue(),
                division: e.row.original.division,
              }),
            meta: { column: i[Bp][n] },
          }),
        ]
      : []),
    Ob.accessor("account", {
      id: Sp,
      header: (a) => (0, vt.jsx)(Nb, { team: e, name: Sp, column: a.column }),
      sortDescFirst: !1,
      sortingFn: r,
      cell: (a) =>
        (0, vt.jsx)(Lp, {
          account: a.cell.getValue(),
          team: e,
          squadIndex: a.row.original.squadIndex,
          className: Hb.accountInfo,
          classNames: { username: Hb.accountName, clanAbbreviation: Hb.clanAbbreviation },
        }),
      meta: { column: i[Sp][n], className: Db.alignLeft },
    }),
    Ob.accessor("vehicle", {
      id: Pp,
      header: (e) => (0, vt.jsx)(Nb, { name: Pp, column: e.column }),
      sortingFn: (e, a) =>
        (function (e, a) {
          const t = e.getValue("vehicle"),
            s = a.getValue("vehicle"),
            r = t?.tier ?? 0,
            n = s?.tier ?? 0,
            i = t?.type ? Mb[t.type] : 0,
            l = s?.type ? Mb[s.type] : 0,
            o = t?.name ?? "";
          return r - n || i - l || (s?.name ?? "").localeCompare(o);
        })(e, a) || r(e, a),
      cell: (e) =>
        (0, vt.jsx)(Eb, {
          vehicle: e.cell.getValue(),
          classNames: {
            name: Hb.vehicleText,
            level: Hb.vehicleText,
            type: Hb.vehicleType,
            image: Hb.vehicleImage,
          },
        }),
      meta: { column: i[Pp][n] },
    }),
    Ob.accessor("efficiencyValues", {
      id: kp,
      header: (e) => (0, vt.jsx)(Nb, { name: kp, column: e.column }),
      sortingFn: (e, a) => Wb(e, a) || r(e, a),
      cell: (e) =>
        (0, vt.jsx)(Ib, {
          value: e.getValue().damageDealt,
          className: F(Hb.numberValue, Hb.numberValue__alignRight),
        }),
      meta: { column: i[kp][n], className: Db.alignRight },
    }),
    Ob.accessor("efficiencyValues", {
      id: Tp,
      header: (e) => (0, vt.jsx)(Nb, { name: Tp, column: e.column }),
      sortingFn: (e, a) =>
        (function (e, a) {
          return (
            e.getValue("kills").substractedAlliesKills - a.getValue("kills").substractedAlliesKills
          );
        })(e, a) || r(e, a),
      cell: (e) =>
        (0, vt.jsx)(Ib, {
          showZero: !1,
          value: e.getValue().substractedAlliesKills,
          className: Hb.numberValue,
        }),
      meta: { column: i[Tp][n] },
    }),
    Ob.accessor("efficiencyValues", {
      id: Ep,
      header: (e) => (0, vt.jsx)(Nb, { name: Ep, column: e.column }),
      sortingFn: (e, a) =>
        (function (e, a) {
          return e.getValue("earnedXp").earnedXp - a.getValue("earnedXp").earnedXp;
        })(e, a) ||
        Wb(e, a) ||
        (function (e, a) {
          const t = e.getValue("vehicle"),
            s = a.getValue("vehicle");
          return (t?.vehicleCD ?? 0) - (s?.vehicleCD ?? 0);
        })(e, a) ||
        r(e, a),
      cell: (e) => (0, vt.jsx)(Ib, { value: e.getValue().earnedXp, className: Hb.numberValue }),
      meta: { column: i[Ep][n], className: Db.alignRight },
    }),
    Ob.accessor("achievements", {
      id: Rp,
      header: (e) => (0, vt.jsx)(Nb, { name: Rp, column: e.column, className: Db.achievementCell }),
      sortingFn: (e, a) =>
        (function (e, a) {
          return e.getValue("achievements").length - a.getValue("achievements").length;
        })(e, a) || r(e, a),
      cell: (e) => (0, vt.jsx)(Kp, { achievements: e.getValue() }),
      meta: { column: i[Rp][n], className: Db.alignLeft },
    }),
    Ob.accessor("efficiencyValues", {
      id: Dp,
      header: (e) => (0, vt.jsx)(Nb, { name: Dp, column: e.column }),
      sortingFn: (e, a) =>
        (function (e, a) {
          return (
            e.getValue("prestigePoints").prestigePoints -
            a.getValue("prestigePoints").prestigePoints
          );
        })(e, a) || r(e, a),
      cell: (e) =>
        (0, vt.jsx)(Ib, { value: e.getValue().prestigePoints, className: Hb.numberValue }),
      meta: { column: i[Dp][n], className: Db.alignRight },
    }),
  ];
}
var $b = "Header_row_e61ae0d9",
  Ub = "Header_rowDivider_f54d9df6",
  Lb = "Header_rowDividerImage_19f6e11",
  Xb = "Header_cell_70aa1da5";
function Fb({ className: e }) {
  const { table: a } = Ae(),
    t = q();
  return (0, vt.jsxs)(Ke.Header, {
    className: e,
    children: [
      (0, vt.jsx)(Ef, { classNames: { base: Ub, image: Lb } }),
      ya(a.getHeaderGroups(), (e, a) =>
        (0, vt.jsx)(
          Ke.Row,
          {
            className: $b,
            children: ya(e.headers, (e, s) => {
              return (0, vt.jsx)(
                Ke.Cell,
                {
                  onClick:
                    ((r = e.column.getToggleSortingHandler()),
                    function (e) {
                      (r?.(e),
                        t.play("click", {
                          original: e,
                          target: "team-efficiency:efficiency-table:header:cell",
                        }));
                    }),
                  onMouseEnter: (e) =>
                    t.play("mouse-enter", {
                      target: "team-efficiency:efficiency-table:header:cell",
                      original: e,
                    }),
                  cell: { ...e, rowIndex: a, index: s, tablePart: ea.header },
                  className: Xb,
                  children: !e.isPlaceholder && Ye(e.column.columnDef.header, e.getContext()),
                },
                e.id,
              );
              var r;
            }),
          },
          e.id,
        ),
      ),
    ],
  });
}
var Kb = "SelectedRowTail_selectedRowTail_8abda9c8",
  qb = "SelectedRowTail_selectedRowTail__hasWidth_6cb87e09",
  Qb = "SelectedRowTail_selectedRowVerticalLine_c502cc58",
  Yb = "SelectedRowTail_selectedRowTriangle_6f2b6bb3",
  Zb = "SelectedRowTail_rowDivider_8fbc881",
  Jb = "SelectedRowTail_rowDivider__bottom_4111cb99",
  eh = "SelectedRowTail_rowDividerImage_d11f29d5";
function ah({ className: e, short: a }) {
  return (0, vt.jsxs)("div", {
    className: F(Kb, !a && qb, e),
    children: [
      (0, vt.jsx)(Ef, { classNames: { base: Zb, image: eh } }),
      (0, vt.jsx)(Ef, { classNames: { base: F(Zb, Jb), image: eh } }),
      (0, vt.jsx)("div", { className: Qb }),
      (0, vt.jsx)("div", { className: Yb }),
    ],
  });
}
var th = "personal",
  sh = "personalSquad",
  rh = "none",
  nh = Fa(function ({ row: e, team: a, rowIndex: t, scrollbarVisible: s }) {
    const { model: r, controls: n } = Eo(),
      i = q(),
      l = Ba(
        (t) => {
          (t.stopPropagation(),
            i.play("click", { original: t, target: "team-efficiency:efficiency-table:body:row" }),
            n.teamEfficiency.selectRow({ team: a, username: e.original.account.username }));
        },
        [n.teamEfficiency, e.original.account.username, i, a],
        400,
      ),
      o = r.teamsStatistic.selectedRow.get(),
      c = r.computes.personalInfo(),
      d =
        c.account.username === e.original.account.username
          ? th
          : Ro(a, c.squadIndex, e.original.squadIndex) === So
            ? sh
            : rh,
      m = e.original.account.teamKiller,
      u = e.original.account.killed,
      _ = o?.team === a && o.username === e.original.account.username,
      f = U({
        args: (0, ot.useMemo)(
          () => ({ vehicleCD: e.original.vehicle?.vehicleCD, databaseID: e.original.databaseId }),
          [e.original],
        ),
      });
    return (0, vt.jsxs)(Ke.Row, {
      ...(d !== th && f),
      onMouseEnter: (e) =>
        i.play("mouse-enter", { target: "team-efficiency:efficiency-table:body:row", original: e }),
      className: F(
        Hb.tableBodyRow,
        _ && Hb.tableBodyRow__selected,
        d !== rh && Hb[`tableBodyRow__${d}`],
        m && Hb.tableBodyRow__teamKiller,
        u && Hb.tableBodyRow__killed,
      ),
      onClick: l,
      children: [
        (0, vt.jsxs)("div", {
          className: Hb.selectedOverlay,
          children: [
            (0, vt.jsx)(Ef, {
              classNames: { base: Hb.selectedOverlayDivider, image: Hb.selectedOverlayImage },
            }),
            (0, vt.jsx)(Ef, {
              classNames: {
                base: F(Hb.selectedOverlayDivider, Hb.selectedOverlayDivider__bottom),
                image: Hb.selectedOverlayImage,
              },
            }),
            (0, vt.jsx)(ah, {
              short: s && a === wo,
              className: F(Hb.selectedRowTail, Hb[`selectedRowTail__${a}`]),
            }),
          ],
        }),
        (0, vt.jsx)(Ef, {
          classNames: {
            base: F(Hb.rowDivider, _ && Hb.rowDivider__selected),
            image: Hb.rowDividerImage,
          },
        }),
        ya(e.getVisibleCells(), (e, a) =>
          (0, vt.jsx)(
            Ke.Cell,
            {
              cell: { ...e, rowIndex: t, index: a, tablePart: ea.body },
              children: Ye(e.column.columnDef.cell, e.getContext()),
            },
            e.id,
          ),
        ),
        (0, vt.jsx)("div", { className: Hb.hoverOverlay }),
      ],
    });
  });
function ih({ team: e }) {
  const { table: a } = Ae(),
    { api: t } = oe(),
    s = l(),
    r = (0, ot.useRef)(null),
    [n, i] = (0, ot.useState)(!1),
    [o, c] = de(() => ({ from: { maskSize: "100% 100%" } }));
  return (
    (0, ot.useEffect)(() => {
      function e() {
        s.run(() => {
          (!(function () {
            const [, e] = t.getBounds();
            i(e > 0);
          })(),
            (function () {
              const [, e] = t.getBounds(),
                a = (t.animationScroll.scrollPosition.get() / e) * 7;
              c.start({ to: { maskSize: `100% ${e > 0 ? 100 + a : 107}%` } });
            })());
        });
      }
      return (
        t.events.on("recalculateContent", e),
        t.events.on("rest", e),
        t.events.on("change", e),
        t.events.on("resizeHandled", e),
        e(),
        () => {
          (t.events.off("recalculateContent", e),
            t.events.off("rest", e),
            t.events.off("change", e),
            t.events.off("resizeHandled", e));
        }
      );
    }, [t, s, c]),
    (0, vt.jsxs)(Ke.Body, {
      className: Db.tableBody,
      children: [
        (0, vt.jsx)(w.div, {
          className: Db.mask,
          style: o,
          children: (0, vt.jsx)(ne, {
            classNames: { wrapper: Db.scrollWrapper, content: Db.scrollAreaContent },
            children: (0, vt.jsx)("div", {
              ref: r,
              className: Db.rowsWrapper,
              children: ya(a.getRowModel().rows, (a, t) =>
                (0, vt.jsx)(nh, { row: a, rowIndex: t, team: e, scrollbarVisible: n }, a.id),
              ),
            }),
          }),
        }),
        (0, vt.jsx)(ra, { classNames: { base: Db.scrollBar } }),
      ],
    })
  );
}
var lh = Ie("TeamEfficiencyTable", Db.efficiencyTable, {
    variants: { team: { [wo]: Db.efficiencyTable__allies, [Ao]: Db.efficiencyTable__enemies } },
  }),
  oh = {
    [mo.Squad]: Cp,
    [mo.Rank]: Bp,
    [mo.Player]: Sp,
    [mo.Damage]: kp,
    [mo.Frag]: Tp,
    [mo.Xp]: Ep,
    [mo.Vehicle]: Pp,
    [mo.Medal]: Rp,
    [mo.PrestigePoints]: Dp,
  },
  ch = Fa(({ team: e, data: a, className: t }) => {
    const { model: s, controls: r } = Eo(),
      n = s.computes.personalInfo(),
      i = s.computes.isRankedBattle(),
      l = s.teamsStatistic.sorting.get(),
      o = (0, ot.useMemo)(
        () => [{ id: oh[l.column], desc: l.sortDirection === uo.Desc }],
        [l.column, l.sortDirection],
      ),
      c = k().breakpoint.name,
      d = (0, ot.useCallback)(
        (e) => {
          const a = (e instanceof Function ? e(o) : e)[0] ?? { id: Pp, desc: !0 };
          r.teamEfficiency.sort({
            column: Object.keys(oh).find((e) => oh[e] === a.id) || mo.Vehicle,
            sortDirection: a.desc ? uo.Desc : uo.Asc,
          });
        },
        [o, r.teamEfficiency],
      ),
      m = (0, ot.useMemo)(
        () => Gb({ team: e, personalInfo: n, breakpointName: c, isRankedBattle: i }),
        [e, c, n, i],
      );
    return (
      la(Je(c), `Such breakpoint ${c} is not supported`),
      (0, vt.jsx)(fa, {
        columns: m,
        data: a,
        enableMultiRowSelection: !1,
        enableSortingRemoval: !1,
        sorting: o,
        onSortingChange: d,
        getRowId: (e) => e.account.username,
        getFilteredRowModel: De(),
        globalFilterFn: (e) => 65281 !== e.original.vehicle?.vehicleCD,
        enableSorting: !0,
        initialState: { globalFilter: !0 },
        children: (0, vt.jsx)(lh, {
          team: e,
          className: t,
          children: (0, vt.jsxs)(
            Ke,
            {
              className: Db.table,
              children: [
                (0, vt.jsx)(Fb, { className: Db.header }),
                (0, vt.jsx)(ee, { children: (0, vt.jsx)(ih, { team: e }) }),
              ],
            },
            c,
          ),
        }),
      })
    );
  }),
  dh = {
    base: "TeamEfficiency_adc1788b",
    banInfoContainer: "TeamEfficiency_banInfoContainer_c7e8623e",
    wrapper: "TeamEfficiency_wrapper_a2a49ce",
    table: "TeamEfficiency_table_5763cf17",
    table__hidden: "TeamEfficiency_table__hidden_e8864815",
    details: "TeamEfficiency_details_f087bb8e",
    details__visible: "TeamEfficiency_details__visible_eaf91b76",
    fadeIn: "TeamEfficiency_fadeIn_f795cecf",
    fadeInThreeQuarters: "TeamEfficiency_fadeInThreeQuarters_f795cecf",
    fadeInHalf: "TeamEfficiency_fadeInHalf_f795cecf",
    fadeOut: "TeamEfficiency_fadeOut_f795cecf",
    fadeInWithScale: "TeamEfficiency_fadeInWithScale_f795cecf",
    slideUp: "TeamEfficiency_slideUp_f795cecf",
    scale: "TeamEfficiency_scale_f795cecf",
    raysAppearance: "TeamEfficiency_raysAppearance_f795cecf",
    rotate: "TeamEfficiency_rotate_f795cecf",
    "reverse-rotate": "TeamEfficiency_reverse-rotate_f795cecf",
    glowAppearance: "TeamEfficiency_glowAppearance_f795cecf",
    highlightAppearance: "TeamEfficiency_highlightAppearance_f795cecf",
    blink: "TeamEfficiency_blink_f795cecf",
    slideUpIn: "TeamEfficiency_slideUpIn_f795cecf",
  },
  mh = Ie("TeamEfficiency", dh.base),
  uh = Fa(function ({ className: e }) {
    const { model: a } = Eo(),
      { active: t } = I(),
      s = a.bansModel.get().isEnabled,
      r = a.teamsStatistic.allies.get(),
      n = a.teamsStatistic.enemies.get(),
      i = a.teamsStatistic.selectedRow.get();
    return (0, vt.jsxs)(mh, {
      className: F(dh[`base__${i?.team}`], e),
      children: [
        (0, vt.jsxs)("div", {
          className: dh.wrapper,
          children: [
            (0, vt.jsx)(Ap, {
              team: Ao,
              className: F(dh.details, i?.team === Ao && dh.details__visible),
            }),
            (0, vt.jsx)(ch, {
              data: r,
              team: wo,
              className: F(dh.table, i?.team === Ao && dh.table__hidden),
            }),
            (0, vt.jsx)(Ap, {
              team: wo,
              className: F(dh.details, i?.team === wo && dh.details__visible),
            }),
            (0, vt.jsx)(ch, {
              data: n,
              team: Ao,
              className: F(dh.table, i?.team === wo && dh.table__hidden),
            }),
          ],
        }),
        s &&
          t === Xa.teamsStatistics &&
          (0, vt.jsx)("div", { className: dh.banInfoContainer, children: (0, vt.jsx)(kf, {}) }),
      ],
    });
  }),
  _h = {
    tab: "App_tab_5d913562",
    vignette: "App_vignette_6896e5b7",
    base: "App_e782cff0",
    navigation: "App_navigation_24ac5b4",
    navigation__disabled: "App_navigation__disabled_f8c46244",
    switcher: "App_switcher_b0c0c74b",
    mainBorderSwitcher: "App_mainBorderSwitcher_edb9d39b",
    content__overview: "App_content__overview_0",
    tab__overview: "App_tab__overview_83066945",
    content__teamScore: "App_content__teamScore_0",
    tab__teamScore: "App_tab__teamScore_83066945",
    content__financialReport: "App_content__financialReport_0",
    tab__financialReport: "App_tab__financialReport_83066945",
    content__missionProgress: "App_content__missionProgress_0",
    tab__missionProgress: "App_tab__missionProgress_83066945",
    progressionNotificationItems: "App_progressionNotificationItems_50f548a8",
    notificationBubble: "App_notificationBubble_e3b77ec5",
    notificationValueContainer: "App_notificationValueContainer_17678555",
    notificationValue: "App_notificationValue_e7f1f67c",
    info: "App_info_ad190031",
    fadeIn: "App_fadeIn_0",
    fadeInThreeQuarters: "App_fadeInThreeQuarters_0",
    fadeInHalf: "App_fadeInHalf_0",
    fadeOut: "App_fadeOut_0",
    fadeInWithScale: "App_fadeInWithScale_0",
    slideUp: "App_slideUp_0",
    scale: "App_scale_0",
    raysAppearance: "App_raysAppearance_0",
    rotate: "App_rotate_0",
    "reverse-rotate": "App_reverse-rotate_0",
    glowAppearance: "App_glowAppearance_0",
    highlightAppearance: "App_highlightAppearance_0",
    blink: "App_blink_0",
    slideUpIn: "App_slideUpIn_0",
  },
  fh = Ie("PostBattle", _h.base),
  ph = Ie("PostBattleNavigation", _h.navigation);
function bh() {
  const { active: e } = I();
  return (0, vt.jsxs)("div", {
    className: F(_h.content, _h[`content__${e}`]),
    children: [
      (0, vt.jsx)(of, { className: F(_h.tab, _h.tab__overview) }),
      (0, vt.jsx)(uh, { className: F(_h.tab, _h.tab__teamScore) }),
      (0, vt.jsx)(Xo, { className: F(_h.tab, _h.tab__missionProgress) }),
      (0, vt.jsx)(Tl, { className: F(_h.tab, _h.tab__financialReport) }),
    ],
  });
}
var hh = Fa(function () {
    const e = m.resolve("strings"),
      a = q(),
      t = ye(),
      {
        battleInfoRef: s,
        navigationRef: r,
        completedSteps: n,
        step: i,
        readyForNotifications: l,
      } = Qt(),
      o = kt(),
      [c] = de(() => ({ from: { opacity: 0, y: "-10rem" }, ref: r })),
      [d] = de(() => ({ from: { opacity: 0 }, ref: s })),
      { model: u, controls: _ } = Eo(),
      f = u.computes.personalInfo(),
      p = u.battleInfo.get(),
      { active: b } = I();
    return (
      Me(B.ESCAPE, _.close),
      qe(() => {
        function e(e) {
          e.altKey || e.shiftKey || e.ctrlKey || W.tooltip.hideAll();
        }
        return (
          document.addEventListener("keydown", e),
          () => {
            document.removeEventListener("keydown", e);
          }
        );
      }),
      (0, ot.useEffect)(() => {
        b !== Xa.progression && l && !1 === o.state.read
          ? o.controls.start()
          : b !== Xa.progression
            ? o.state.read && b !== Xa.progression && o.controls.wait()
            : o.controls.read();
      }, [o.state.read, o.controls, b, l]),
      (0, ot.useEffect)(() => {
        i === Ft.fourth && a.play("exitResult", { target: "post-battle" });
      }, [i, a]),
      (0, vt.jsxs)(fh, {
        className: F(_h.base, _h[`base__${b}`]),
        style: { width: `${t}rem` },
        children: [
          b !== Xa.overview && (0, vt.jsx)("div", { className: _h.vignette }),
          (0, vt.jsx)(bh, {}),
          (0, vt.jsx)(w.div, {
            style: c,
            children: (0, vt.jsx)(ph, {
              className: !1 === n.has(Ft.navigation) && _h.navigation__disabled,
              children: (0, vt.jsxs)(Z.Switcher, {
                className: _h.switcher,
                classNames: { mainBorder: _h.mainBorderSwitcher },
                children: [
                  (0, vt.jsx)(Z.Tab, {
                    tabId: Xa.overview,
                    children: Y.toUpperCase(
                      e.readOrEmpty("battle_results.battleResult.navigation.battleResults"),
                    ),
                  }),
                  (0, vt.jsx)(Z.Tab, {
                    tabId: Xa.teamsStatistics,
                    children: Y.toUpperCase(
                      e.readOrEmpty("battle_results.battleResult.navigation.teamEfficiency"),
                    ),
                  }),
                  (0, vt.jsxs)(Z.Tab, {
                    tabId: Xa.progression,
                    children: [
                      Y.toUpperCase(
                        e.readOrEmpty("battle_results.battleResult.navigation.missionsProgress"),
                      ),
                      (0, vt.jsx)(Xt.Bubble, { className: _h.notificationBubble }),
                      (0, vt.jsx)(Xt.Items, { className: _h.progressionNotificationItems }),
                    ],
                  }),
                  (0, vt.jsx)(Z.Tab, {
                    tabId: Xa.financialReport,
                    children: Y.toUpperCase(
                      e.readOrEmpty("battle_results.battleResult.navigation.financialReport"),
                    ),
                  }),
                ],
              }),
            }),
          }),
          p &&
            (0, vt.jsx)(w.div, {
              className: _h.info,
              style: d,
              children: (0, vt.jsxs)(jt, {
                children: [
                  (0, vt.jsx)(as, {
                    arenaName: p.arenaName,
                    arenaType: p.arenaType,
                    finishReasonKey: p.finishReasonKey,
                    status: p.status,
                    modeName: p.modeName,
                  }),
                  (0, vt.jsx)(jt.StartTime, { startTime: p.startTime }),
                  (0, vt.jsx)(jt.Player, {
                    vehicleName: f.vehicle.name,
                    vehicleLevel: f.vehicle.tier,
                    vehicleType: f.vehicle.type,
                    userName: f.account.username,
                    clan: f.account.clanAbbreviation,
                    teamKiller: f.account.teamKiller,
                  }),
                  (0, vt.jsx)(jt.PlayerStatus, {
                    className: _h.group,
                    killer: f.killer,
                    deathReasonKey: f.userStatus.deathReason,
                    abandonBattle: f.userStatus.abandonBattle,
                  }),
                  (0, vt.jsx)(jt.CommendationScore, {
                    commendationsReceived: p.commendationsReceived,
                  }),
                ],
              }),
            }),
        ],
      })
    );
  }),
  vh = Fa(function () {
    const e = Be(),
      { model: a } = Eo(),
      t = a.computes.hasProgressAnimation(),
      { size: s } = Le(
        { size: se.small },
        { large: { size: se.medium }, extraLarge: { size: se.large } },
      );
    return (0, vt.jsx)(Z, {
      theme: "primary",
      size: s,
      active: Ua(e.location),
      onActiveChange: (a) => {
        a in $a ? e.push($a[a]) : console.error(`Invalid tab ID: ${a}`);
      },
      children: (0, vt.jsx)(Yt, {
        hasProgressAnimation: t,
        children: (0, vt.jsx)(Xt.Provider, {
          items: a.notificationList.get(),
          children: (0, vt.jsx)(hh, {}),
        }),
      }),
    });
  }),
  gh = Xe({
    click: {
      "expandable-overlay": "yes",
      "expandable-overlay:hint-key": "yes",
      "managable-bonus:apply-button": "yes",
      "managable-bonus:premium-info-button": "yes",
      "overview:total-personal-efficiency": "yes",
      "team-efficiency:efficiency-table:header:cell": "tabs",
    },
    openOverlay: {
      "expandable-overlay": "gui_pbs_overlay_open",
      "expandable-overlay:hint-key": "gui_pbs_overlay_open",
      "overview:total-personal-efficiency": "gui_pbs_overlay_open",
    },
    closeOverlay: {
      "expandable-overlay": "gui_pbs_overlay_close",
      "expandable-overlay:hint-key": "gui_pbs_overlay_close",
    },
    "mouse-enter": {
      "achievements:achievement": "highlightx",
      "team-efficiency:efficiency-details:achievement": "highlightx",
    },
    achievementAppeared: { overview: "gui_pbs_reward_item" },
    showBattleResult: { "animation-context": "gui_pbs_result_ribbon" },
    startRolling: { "overview:currencies": "gui_pbs_stats_start" },
    stopRolling: { "overview:currencies": "gui_pbs_stats_stop" },
    exitResult: { "post-battle": "ue_06_result_exit" },
    notificationBubbleAppeared: { "mission-progress:bubble": "gui_pbs_notification_bubble" },
  }),
  yh = new aa()
    .add(To)
    .addWithProps(X, { soundsOverrides: gh })
    .addWithProps(pa, { context: "model.router" })
    .addWithProps(Ya, { options: { context: "model.scheduleInfo" } });
(Na(), Te(yh.render((0, vt.jsx)(vh, {})), { fullScreen: !0 }));
