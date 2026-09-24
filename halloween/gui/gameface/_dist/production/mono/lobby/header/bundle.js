import { r as e } from "../chunks/rolldown-runtime.js";
import {
  A as t,
  Ai as a,
  At as n,
  Cn as s,
  Ct as o,
  Di as r,
  Dr as i,
  Ei as l,
  Er as c,
  F as d,
  Fi as u,
  Fn as _,
  Gn as b,
  I as m,
  Ii as p,
  In as f,
  J as g,
  K as v,
  L as h,
  Ln as y,
  Mi as x,
  Mn as N,
  Mr as B,
  N as j,
  Ni as k,
  Oi as I,
  On as E,
  P as A,
  Pi as T,
  Pn as S,
  Qt as C,
  R as P,
  Ri as W,
  Rn as M,
  Ti as O,
  Tn as D,
  Vi as w,
  Wr as H,
  Wt as V,
  Xr as z,
  Xt as L,
  _r as F,
  ai as $,
  bn as U,
  en as K,
  fr as G,
  hr as q,
  ht as Y,
  ir as J,
  it as Q,
  ji as X,
  ki as Z,
  mt as ee,
  pr as te,
  qt as ae,
  ri as ne,
  tr as se,
  ut as oe,
  vr as re,
  wr as ie,
  xn as le,
  yn as ce,
  yt as de,
  z as ue,
  zi as _e,
} from "../chunks/lib.js";
import "../chunks/_wg-global-styles.js";
import { a as be, i as me, n as pe, o as fe, s as ge } from "../chunks/vendor.js";
import { b as ve, y as he } from "../chunks/sound.js";
import { t as ye } from "../chunks/number_animation.js";
var xe = (function (e) {
    return ((e.Hangar = "hangar"), (e.Default = "default"), e);
  })({}),
  [Ne, Be] = D("HeaderStateModel")((e) => ({ features: e.observableModel.dict("features") })),
  [je, ke] = D()(
    ({ observableModel: e }) => ({
      ...e.primitives(["pageTitle", "backNavigationDescription", "backNavigationAllowed"]),
      infoButtons: e.arrayClone("infoButtons"),
    }),
    ({ externalModel: e }) => ({
      navigateTo: e.createCallback((e) => ({ name: e }), "onNavigate"),
      doInfoAction: e.createCallback((e) => ({ index: e }), "onInfoAction"),
    }),
  ),
  [Ie, Ee] = D("CurrentVehicleInfoProvider")(({ observableModel: e }) => {
    const t = { vehicles: e.dictRef("vehicles") };
    return {
      vehicle: s.shallow(() => {
        try {
          const e = t.vehicles.entries()[0];
          if (e) {
            const [, t] = e;
            return JSON.parse(t.get());
          }
        } catch (e) {
          console.error("Error parsing JSON for current vehicle:", e);
        }
      }),
    };
  }, ne),
  [Ae, Te] = D("HeaderProvider")(({ observableModel: e }) => e.primitives(["oldStyle"]), ne),
  Se = "playerReady",
  Ce = "searchingBattle",
  Pe = "battleReady",
  [We, Me] = D("PrebattleProvider")(
    ({ observableModel: e }) => {
      const t = {
          ...e.primitives([
            "currentMode",
            "currentModeId",
            "battleStatus",
            "queueType",
            "battleButtonAlwaysOn",
          ]),
          states: e.dict("states"),
          battleVehicle: e.transform((e) => {
            if (o(e.type)) return { ...e, type: e.type };
          }, "battleVehicle"),
        },
        a = s.primitive(() => t.battleStatus.get() === Ce),
        n = s.primitive(() => t.battleStatus.get() === Pe);
      return { ...t, computes: { isSearchingBattle: a, isBattleReady: n } };
    },
    ({ externalModel: e }) => ({
      actionPrebattle: e.createCallback((e) => ({ action: e }), "onAction"),
    }),
  ),
  [Oe, De] = D("PremiumShopProvider")(
    ({ observableModel: e }) => ({ ...e.primitives({ isPremiumShop: "premiumShopEnabled" }) }),
    ({ externalModel: e }) => ({
      openPremiumShop: e.createCallbackNoArgs("onOpenExternalPremiumShop"),
    }),
  ),
  [Re, we] = D("TutorialProvider")(
    ({ observableModel: e }) => {
      const t = { triggers: e.arrayClone("triggers.items") },
        a = s.primitive(() => t.triggers.get().length);
      return { ...t, computes: { triggersCount: a } };
    },
    ({ externalModel: e }) => ({
      onTriggerActivated: e.createCallback(
        (e, t, a) => ({ componentId: e, triggerType: t, state: a }),
        "onTriggerActivated",
      ),
    }),
  ),
  He = e(W(), 1),
  [Ve, ze] = D("BattleStartProvider")(
    ({ observableModel: e }) => ({ ...e.primitives(["tooltip"]) }),
    ne,
  );
var Le = "active",
  Fe = "ready",
  $e = "notReady",
  Ue = "disabled";
var Ke = {
    backgroundEffect: "BackgroundEffects_backgroundEffect_7bb0c1b5",
    base: "BackgroundEffects_47bdcaf9",
    backgroundEffect__rays: "BackgroundEffects_backgroundEffect__rays_4ebbd8d0",
  },
  Ge = re(),
  qe = "rays";
var Ye = (0, He.memo)(function ({ buttonState: e, className: t }) {
    const a = e === Le ? [qe] : [];
    const n = w.resolve("videos"),
      s = h(a, {
        from: { opacity: 0 },
        enter: { opacity: 1 },
        leave: { opacity: 0 },
        config: { duration: 100 },
        trail: 500,
      });
    return (0, Ge.jsx)("div", {
      className: p(Ke.base, t),
      children: s((e, t) =>
        (0, Ge.jsx)(d.div, {
          style: e,
          children: (0, Ge.jsx)(
            V,
            {
              loop: !0,
              autoplay: !0,
              src: n.readOrEmpty(`header_footer.battle_button.${t}`),
              className: p(Ke.backgroundEffect, Ke[`backgroundEffect__${t}`]),
            },
            t,
          ),
        }),
      ),
    });
  }),
  Je = "ButtonEffects_merged_86ab891d",
  Qe = "ButtonEffects_bdb5411e",
  Xe = (0, He.memo)(function ({ className: e, onAnimationStarted: t }) {
    const a = w.resolve("videos"),
      n = G({ value: "small" }, { large: { value: "large" } });
    return (0, Ge.jsx)("div", {
      className: p(Qe, e),
      children: (0, Ge.jsx)(
        V,
        {
          autoplay: !0,
          loop: !0,
          onPlay: t,
          src: a.readOrEmpty(`header_footer.battle_button.foreground_${n.value}`),
          className: Je,
        },
        `glitterEffect-${n.value}`,
      ),
    });
  }),
  Ze = {
    textGlow: "ButtonText_textGlow_89301672",
    base: "ButtonText_841a3b01",
    base__ready: "ButtonText_base__ready_5e741ba3",
    breath: "ButtonText_breath_5e741ba3",
    textWrapper: "ButtonText_textWrapper_535d5dc6",
    base__disabled: "ButtonText_base__disabled_5e741ba3",
    text: "ButtonText_text_b56e6fa7",
    base__active: "ButtonText_base__active_5e741ba3",
    base__notReady: "ButtonText_base__notReady_5e741ba3",
    textOverlay: "ButtonText_textOverlay_1bcba7de",
  };
function et({ buttonState: e, buttonText: t, animationActive: a, onAnimationEnded: n }) {
  const s = m({
    opacity: a ? 0.9 : 0,
    config: { duration: a ? 3600 : 1e3, easing: a ? u.easeInCirc : u.easeOutCirc },
    onRest: () => {
      a && n();
    },
  });
  return e === Le
    ? (0, Ge.jsx)(d.div, { className: Ze.textGlow, style: s, children: t })
    : e === Fe
      ? (0, Ge.jsx)("div", { className: Ze.textGlow, children: t })
      : null;
}
var tt = pe(function ({
    actionType: e,
    buttonState: t,
    animationActive: a,
    onAnimationEnded: n,
    className: s,
  }) {
    const o = Me(),
      r = w.resolve("strings"),
      i = _e.toUpperCase(
        r.readOrEmpty(
          (function (e, t) {
            return "battleStartAction" === e
              ? "menu.headerButtons.battle.button.battle"
              : t
                ? "menu.headerButtons.notReady"
                : "menu.headerButtons.ready";
          })(e, o.model.states.get(Se)),
        ),
      );
    return (0, Ge.jsxs)("div", {
      className: p(Ze.base, Ze[`base__${t}`], s),
      children: [
        (0, Ge.jsx)(A, {
          classNames: { base: Ze.textWrapper, text: Ze.text, textOverlay: Ze.textOverlay },
          children: i,
        }),
        (0, Ge.jsx)(et, { buttonState: t, buttonText: i, animationActive: a, onAnimationEnded: n }),
      ],
    });
  }),
  at = {
    background: "ButtonWrapper_background_5f66b44f",
    border: "ButtonWrapper_border_4e5ba0c2",
    button: "ButtonWrapper_button_ac00a3ae",
    button__disabled: "ButtonWrapper_button__disabled_5b8e9d9",
    background__disabled: "ButtonWrapper_background__disabled_4ab5c051",
    background__notReady: "ButtonWrapper_background__notReady_d27296f9",
    background__ready: "ButtonWrapper_background__ready_2853577d",
    background__appear: "ButtonWrapper_background__appear_22cf4f98",
    fadeIn: "ButtonWrapper_fadeIn_d27296f9",
    background__dissapear: "ButtonWrapper_background__dissapear_6a20b5f2",
    flicker: "ButtonWrapper_flicker_d27296f9",
    content: "ButtonWrapper_content_a523ce6e",
    button__ready: "ButtonWrapper_button__ready_d27296f9",
    button__notReady: "ButtonWrapper_button__notReady_d27296f9",
    overlay: "ButtonWrapper_overlay_ccea80e8",
  },
  nt = [Fe, $e],
  st = pe(function ({
    buttonState: e,
    transitionActive: t,
    transitionFromState: a,
    actionType: n,
    children: s,
    className: o,
  }) {
    const r = ze(),
      i = Me(),
      l = r.model.tooltip.get(),
      c = (function (e) {
        const t = e.match(/{HEADER}(.*?){\/HEADER}/)?.[1],
          a = e.match(/{BODY}(.*?){\/BODY}/)?.[1],
          n = e.match(/{NOTE}(.*?){\/NOTE}/)?.[1],
          s = e.match(/{ATTENTION}(.*?){\/ATTENTION}/)?.[1];
        return S({
          header: t,
          body: a,
          alert: s,
          note: n,
          hasHtmlContent: !0,
          disabled: 0 === e.length,
        });
      })(l),
      d = e === Ue;
    const u = a && nt.includes(a) && nt.includes(e);
    return (0, Ge.jsx)("div", {
      ...(d && l && c),
      className: o,
      children: (0, Ge.jsxs)(Q, {
        theme: Q.themes.custom,
        disabled: d,
        autoAlignContent: !1,
        onClick: function () {
          d || i.controls.actionPrebattle(n);
        },
        className: p(at.button, at[`button__${e}`]),
        classNames: {
          background: p(at.background, at[`background__${e}`], t && !u && at.background__appear),
          content: at.content,
          border: at.border,
          overlay: at.overlay,
        },
        "data-test-id": "battleButton",
        soundTarget: "battleButton",
        children: [
          t &&
            !u &&
            (0, Ge.jsx)("div", {
              className: p(at.background, at.background__dissapear, at[`background__${a}`]),
            }),
          s,
        ],
      }),
    });
  }),
  ot = {
    hoverOverlay: "BattleButton_hoverOverlay_5196983d",
    buttonEffects: "BattleButton_buttonEffects_53b5d8e2",
    reflector: "BattleButton_reflector_47e1d14b",
    backgroundEffects: "BattleButton_backgroundEffects_815ae971",
    base: "BattleButton_40c20cf8",
    fadeIn: "BattleButton_fadeIn_ea4cde73",
    reflector__ready: "BattleButton_reflector__ready_ea4cde73",
    reflector__notReady: "BattleButton_reflector__notReady_a8ef3bf5",
    desaturation: "BattleButton_desaturation_fb74a8a1",
    desaturation__hidden: "BattleButton_desaturation__hidden_6167cc9c",
    buttonText: "BattleButton_buttonText_8108fe79",
  },
  rt = "FightButton",
  it = "enabled_change",
  lt = L("BattleButton", ot.base),
  ct = pe(function ({ classNames: e }) {
    const t = Me(),
      [a, n] = (0, He.useState)(!1),
      [s, o] = (0, He.useState)(!1),
      [r, i] = (0, He.useState)(),
      { model: l, controls: c } = we(),
      d = l.computes.triggersCount(),
      u = M(),
      _ = "BATTLE_ROYALE_TOURNAMENT" === t.model.queueType.get(),
      b = "TRAINING" === t.model.currentMode.get(),
      m =
        (!t.model.states.get("playerCreator") && !b && t.model.states.get("readinessAvailable")) ||
        _
          ? "readyAction"
          : "battleStartAction",
      f = (function (e, t, a) {
        return t ? Ue : "battleStartAction" === e ? Le : a ? $e : Fe;
      })(m, !t.model.states.get("actionEnabled"), t.model.states.get(Se)),
      g = J(f),
      v = f === Ue;
    return (
      (0, He.useEffect)(
        () =>
          me(() => {
            const e = z(l.triggers.get(), (e) => e.componentId === rt);
            ((d > 0 && e) || (g && f !== g)) && c.onTriggerActivated(rt, it, !0);
          }),
        [f, c, l.triggers, g, d],
      ),
      (0, He.useEffect)(() => {
        g &&
          f !== g &&
          (o(!0),
          i(g),
          u.run(() => {
            o(!1);
          }, 600));
      }, [u, f, g]),
      (0, He.useLayoutEffect)(
        () => () => {
          c.onTriggerActivated(rt, it, !1);
        },
        [],
      ),
      (0, Ge.jsxs)(lt, {
        className: e?.base,
        id: "fight-button",
        children: [
          (0, Ge.jsx)(Ye, { buttonState: f, className: p(ot.backgroundEffects, e?.effect) }),
          (0, Ge.jsxs)(st, {
            actionType: m,
            buttonState: f,
            transitionActive: s,
            transitionFromState: r,
            className: e?.content,
            children: [
              !v && (0, Ge.jsx)("div", { className: p(ot.reflector, ot[`reflector__${f}`]) }),
              f === Le &&
                (0, Ge.jsx)(Xe, { className: ot.buttonEffects, onAnimationStarted: () => n(!0) }),
              (0, Ge.jsx)("div", { className: ot.hoverOverlay }),
              (0, Ge.jsx)("div", { className: p(ot.desaturation, !v && ot.desaturation__hidden) }),
              (0, Ge.jsx)(tt, {
                actionType: m,
                buttonState: f,
                animationActive: a,
                onAnimationEnded: () => n(!1),
                className: ot.buttonText,
              }),
            ],
          }),
        ],
      })
    );
  }),
  dt = (0, He.memo)(({ options: e, ...t }) =>
    (0, Ge.jsx)(Ve, { options: e, children: (0, Ge.jsx)(ct, { ...t }) }),
  );
function ut() {
  const e = ue().paramsStruct.routeType;
  return "string" == typeof e ? e : xe.Default;
}
var _t = "Divider_9939af4b";
function bt(e) {
  return (0, Ge.jsx)(K, { path: "ui.noise", className: p(_t, e.className), fit: "cover" });
}
function mt({ children: e, className: t }) {
  const a = He.Children.toArray(e);
  return a.length <= 1
    ? e
    : (0, Ge.jsx)(Ge.Fragment, {
        children: a
          .filter((e) => e)
          .map((e, a) =>
            (0, Ge.jsxs)(
              He.Fragment,
              { children: [a > 0 && (0, Ge.jsx)(bt, { className: t }), e] },
              a,
            ),
          ),
      });
}
var pt = {
    border: "InfoButton_border_f3a2eae1",
    base: "InfoButton_74c97479",
    base__smallSize: "InfoButton_base__smallSize_c40e1b5c",
    base__mediumSize: "InfoButton_base__mediumSize_f347ecd3",
    content: "InfoButton_content_1cc251f9",
    content__label: "InfoButton_content__label_a89c101d",
    label: "InfoButton_label_5a5ddc63",
    icon: "InfoButton_icon_c58f1a93",
  },
  ft = { small: "small", medium: "medium" },
  gt = { [ft.small]: 16, [ft.medium]: 24 },
  vt = (0, He.forwardRef)(function (
    { size: e, infoType: t, label: a, tooltipHeader: n, tooltipBody: s, classNames: o = {}, ...r },
    i,
  ) {
    const l = n || s,
      c = S({ header: n, body: s }),
      d = q(e, te);
    return (0, Ge.jsxs)(Q, {
      ...r,
      onClick: function (e) {
        (l && c.onClick(), r.onClick?.(e));
      },
      onMouseEnter: function (e) {
        (l && c.onMouseEnter(e), r.onMouseEnter?.(e));
      },
      onMouseLeave: function (e) {
        (c.onMouseLeave(), r.onMouseLeave?.(e));
      },
      ref: i,
      size: Q.sizes.small,
      theme: Q.themes.secondary,
      autoAlignContent: !1,
      className: p(pt.base, pt[`base__${e}Size`], r.className),
      classNames: { ...o, content: p(pt.content, a && pt.content__label, o?.content) },
      children: [
        (0, Ge.jsx)("div", { className: pt.border }),
        (0, Ge.jsx)(K, {
          className: pt.icon,
          path: `header_footer.info_icon_${t}_${d}`,
          height: gt[e],
          width: gt[e],
        }),
        a && (0, Ge.jsx)("div", { className: pt.label, children: a }),
      ],
    });
  });
vt.sizes = ft;
var ht = "NavigationBar_425ae997",
  yt = "NavigationBar_button_c5ece62",
  xt = "NavigationBar_button__backNavigation_7dc54008",
  Nt = "NavigationBar_label_4840a20f",
  Bt = "NavigationBar_icon_95c9bdbb",
  jt = "NavigationBar_iconImage_e695cd8e",
  kt = "NavigationBar_iconImage__default_dfd5b7a7",
  It = "NavigationBar_iconImage__hover_c132ba6f",
  Et = "NavigationBar_iconImage__active_fbf5db52",
  At = "NavigationBar_button__garageNavigation_69a10af0",
  Tt = "NavigationBar_divider_7592acb0",
  St = "NavigationBar_pageTitle_5847696c",
  Ct = "NavigationBar_hiddenLabel_1fa48c6e",
  Pt = "NavigationBar_base__ready_69a10af0",
  Wt = "NavigationBar_base__animating_69a10af0",
  Mt = "NavigationBar_hiddenLabelInner_8490d7c",
  Ot = "NavigationBar_infoButton_8aaee3f9",
  Dt = "NavigationBar_infoButton__last_efa963fb";
function Rt({ classNames: e = {} }) {
  return (0, Ge.jsxs)("div", {
    className: p(Bt, e.icon),
    children: [
      (0, Ge.jsx)("div", { className: p(jt, kt, e.iconImage, e.iconImage__default) }),
      (0, Ge.jsx)("div", { className: p(jt, It, e.iconImage, e.iconImage__hover) }),
      (0, Ge.jsx)("div", { className: p(jt, Et, e.iconImage, e.iconImage__active) }),
    ],
  });
}
var wt = pe(function ({
    classNames: e = {},
    className: t,
    garageNavigationAllowed: a,
    battleButtonVisible: s,
  }) {
    const { model: o, controls: r } = ke(),
      i = E(),
      l = w.resolve("strings"),
      c = o.pageTitle.get(),
      d = o.backNavigationAllowed.get(),
      u = o.backNavigationDescription.get(),
      _ = o.infoButtons.get();
    function m(e) {
      i.play("mouse-enter", { target: "NavigationButton", original: e });
    }
    function f(e) {
      return function () {
        r.doInfoAction(e);
      };
    }
    const g = F(),
      v = w.resolve("intl"),
      h = (0, He.useRef)(null),
      [y, x] = (0, He.useState)(0),
      [N, j] = (0, He.useState)(!1),
      [k, I] = (0, He.useState)(!1);
    b(() => {
      (j(!0), x(h.current?.offsetWidth ? h.current?.offsetWidth + 1 : 0));
      const e = B(() => I(!0));
      return () => {
        (j(!1), x(0), I(!1), e());
      };
    }, [g.screenWidthRem, g.breakpoint.name, a, s, d, u, c]);
    const A = G({ value: vt.sizes.small }, { extraLarge: { value: vt.sizes.medium } });
    return (0, Ge.jsxs)("div", {
      className: p(ht, N && Pt, k && Wt, t, e.base),
      children: [
        (0, Ge.jsxs)(mt, {
          className: p(Tt, e.divider),
          children: [
            a &&
              (0, Ge.jsxs)("div", {
                className: p(yt, At, e.button, e.button__garageNavigation),
                "data-test-id": "garageButton",
                onClick: function (e) {
                  (i.play("click", { target: "NavigationButton", original: e }),
                    r.navigateTo("garage"));
                },
                onMouseEnter: m,
                children: [
                  (0, Ge.jsx)(Rt, { classNames: e }),
                  (0, Ge.jsx)("div", {
                    className: p(Nt, e.label),
                    children: v.toUpperCase(l.readOrEmpty("menu.headerButtons.hangar")),
                  }),
                ],
              }),
            d &&
              (0, Ge.jsx)(Ge.Fragment, {
                children: (0, Ge.jsxs)("div", {
                  className: p(yt, xt, e.button, e.button__backNavigation),
                  onClick: function (e) {
                    (i.play("click", { target: "NavigationButton", original: e }),
                      r.navigateTo("back"));
                  },
                  onMouseEnter: m,
                  children: [
                    (0, Ge.jsx)(Rt, { classNames: e }),
                    (0, Ge.jsx)("div", {
                      className: p(Nt, e.label),
                      children: v.toUpperCase(l.readOrEmpty("menu.headerButtons.navigation.back")),
                    }),
                    u &&
                      (0, Ge.jsx)("div", {
                        ref: h,
                        className: p(Ct, e.hiddenLabel),
                        style: { "--width": `${y}px` },
                        children: (0, Ge.jsx)(n, { className: Mt, text: v.toUpperCase(u) }),
                      }),
                  ],
                }),
              }),
            c &&
              (0, Ge.jsx)(Ge.Fragment, {
                children: (0, Ge.jsx)("div", {
                  className: p(St, e.title),
                  children: (0, Ge.jsx)(n, { text: v.toUpperCase(c) }),
                }),
              }),
          ],
        }),
        _.length > 0 &&
          H(_, (t, a) =>
            (0, Ge.jsx)(
              "div",
              {
                className: p(Ot, a === _.length - 1 && Dt, e?.infoButton),
                children: (0, Ge.jsx)(vt, {
                  size: A.value,
                  onClick: f(a),
                  infoType: t.type,
                  label: t.label,
                  tooltipHeader: t.tooltipHeader,
                  tooltipBody: t.tooltipBody,
                }),
              },
              a,
            ),
          ),
      ],
    });
  }),
  Ht = (function (e) {
    return (
      (e[(e.UNDEFINED = 0)] = "UNDEFINED"),
      (e[(e.ADD_NEEDED = 1)] = "ADD_NEEDED"),
      (e[(e.ADDED = 2)] = "ADDED"),
      (e[(e.CONFIRMATION_SENT = 3)] = "CONFIRMATION_SENT"),
      (e[(e.CONFIRMED = 4)] = "CONFIRMED"),
      (e[(e.PROCESSING = 5)] = "PROCESSING"),
      e
    );
  })({}),
  Vt = (function (e) {
    return ((e.None = "None"), (e.Core = "Core"), (e.Pro = "Pro"), e);
  })({}),
  zt = (function (e) {
    return ((e.Inactive = "Inactive"), (e.Active = "Active"), (e.Cancelled = "Cancelled"), e);
  })({}),
  Lt = $(
    c((e) => e > 0),
    i(Z),
  ),
  Ft = [
    [X, O],
    [x, l],
    [k, r],
    [T, () => r(1)],
  ];
function $t(e) {
  if (e) {
    const t = a(e, I());
    for (const [e, a] of Ft) {
      const n = Math.ceil(e(t));
      if (n > 0) return a(n);
    }
  }
}
var [Ut, Kt] = D("UserAccountProvider")(
    ({ observableModel: e, cleanup: t }) => {
      const a = e.object("userInfo"),
        n = e.object("subscriptions.wotPlus"),
        s = e.object("subscriptions.premiumAccount"),
        o = e.primitives(["isCnRealm"], "subscriptions"),
        r = e.arrayClone("subscriptions.wotPlus.benefits"),
        i = e.arrayClone("subscriptions.wotPlus.proBenefits"),
        l = { basic: be.box($t(Lt(s.get().expiryTime))), plus: be.box($t(Lt(n.get().expiryTime))) };
      const c = fe(
          () => s.get().expiryTime,
          (e) => {
            l.basic.set($t(Lt(e)));
          },
        ),
        d = fe(
          () => n.get().expiryTime,
          (e) => {
            l.plus.set($t(Lt(e)));
          },
        ),
        u = setInterval(function () {
          ge(() => {
            (l.basic.set($t(Lt(s.get().expiryTime))), l.plus.set($t(Lt(n.get().expiryTime))));
          });
        }, 6e4);
      return (
        t(() => {
          (clearInterval(u), c(), d());
        }),
        {
          userInfo: a,
          premiums: l,
          wotPlus: n,
          premiumAccount: s,
          benefits: r,
          proBenefits: i,
          subscriptionPrimitives: o,
          getTooltipVariant: () => {
            const e = n.get().state,
              t = n.get().type;
            return e === zt.Inactive && t === Vt.None && o.isCnRealm.get()
              ? "unlockCn"
              : e === zt.Inactive && t === Vt.None
                ? "unlock"
                : e !== zt.Inactive && t === Vt.Core
                  ? "unlockPro"
                  : "unlock";
          },
        }
      );
    },
    ({ externalModel: e }) => ({
      openAccountDashboard: e.createCallbackNoArgs("onOpenAccountDashboard"),
      openWotPlusSubscriptionPage: e.createCallbackNoArgs("subscriptions.onOpenWotPlus"),
      openPremiumSubscriptionPage: e.createCallbackNoArgs("subscriptions.onOpenPremium"),
    }),
  ),
  Gt = "PlayersProfile_b15b3eb3",
  qt = "PlayersProfile_playerInfo_89f70778",
  Yt = "PlayersProfile_playerInfoWrapper_2ed6c121",
  Jt = "PlayersProfile_badgeWrapper_910cac78",
  Qt = "PlayersProfile_suffixBadgeWrapper_a4096e4e",
  Xt = "PlayersProfile_badge_4050c3e9",
  Zt = "PlayersProfile_text_99417432",
  ea = "PlayersProfile_text__name_2ed6c121",
  ta = "PlayersProfile_text__teamKiller_8bf5e412",
  aa = "PlayersProfile_base__alertVisible_9b40d452",
  na = "PlayersProfile_anonymizerIcon_8632eb46",
  sa = "PlayersProfile_alertIcon_b8de5d15",
  oa = w.resolve("strings"),
  ra = L("PlayersProfile", Gt, { variants: { alertVisible: { true: aa } } }),
  ia = new Set([Ht.ADD_NEEDED, Ht.ADDED]),
  la = { width: "48rem", height: "48rem", marginLeft: "-35rem" },
  ca = pe(function () {
    const e = E(),
      a = S({
        header: oa.readOrEmpty("tooltips.header.account.header"),
        body: oa.readOrEmpty("tooltips.header.account.body"),
      }),
      { model: s, controls: o } = Kt(),
      {
        userName: r,
        badgeID: i,
        isInClan: l,
        clanAbbrev: c,
        suffixBadgeID: d,
        teamKiller: u,
        hasSteamAccount: _,
        steamEmailStatus: b,
        anonymized: m,
        email: f,
      } = s.userInfo.get(),
      g = y(
        "AccountCompletion",
        (0, He.useMemo)(() => [f], [f]),
      ),
      v = _ && ia.has(b);
    const h = q(t.Badge.sizes.x48x48, t.Badge.sizes.x80x80),
      x = q(t.Stripe.sizes.medium, t.Stripe.sizes.big);
    return (0, Ge.jsxs)(ra, {
      alertVisible: v,
      children: [
        (0, Ge.jsxs)(t, {
          ...a,
          className: qt,
          onClick: function (t) {
            (e.play("click", { target: "player-info", original: t }),
              a.onClick(),
              o.openAccountDashboard());
          },
          onMouseEnter: function (t) {
            (e.play("mouse-enter", { target: "player-info", original: t }), a.onMouseEnter(t));
          },
          children: [
            i > 0 &&
              (0, Ge.jsx)("div", {
                className: Jt,
                children: (0, Ge.jsx)(t.Badge, {
                  badgeId: String(i),
                  width: 48,
                  height: 48,
                  size: h,
                  className: Xt,
                }),
              }),
            (0, Ge.jsxs)(t.Wrapper, {
              className: Yt,
              children: [
                (0, Ge.jsx)(t.Name, {
                  className: p(Zt, ea, u && ta),
                  children: (0, Ge.jsx)(n, { text: r }),
                }),
                l &&
                  (0, Ge.jsx)(t.ClanTag, {
                    className: Zt,
                    children: (0, Ge.jsx)(C, {
                      upgradeLegacy: !0,
                      path: "common.clanTag",
                      params: { abbrev: c },
                    }),
                  }),
              ],
            }),
            d > 0 &&
              (0, Ge.jsx)("div", {
                className: Qt,
                children: (0, Ge.jsx)(t.Stripe, {
                  badgeId: String(d),
                  size: x,
                  stripeIcon: t.Stripe.icons.stripe.medium,
                  stipeBadgeIcon: t.Stripe.icons.badge.medium,
                  style: la,
                }),
              }),
            m && (0, Ge.jsx)("div", { className: na }),
          ],
        }),
        v && (0, Ge.jsx)("div", { ...g, className: sa }),
      ],
    });
  }),
  da = (0, He.memo)(({ options: e, ...t }) =>
    (0, Ge.jsx)(Ut, { options: e, children: (0, Ge.jsx)(ca, { ...t }) }),
  ),
  ua = "Premiums_text_82711911",
  _a = "Premiums_text__premShop_a067f33c",
  ba = "Premiums_premiumShopImg_99a91f62",
  ma = L("PremiumShop", p("Premiums_e458a55f", "Premiums_base__clickable_dd8e69b8")),
  pa = w.resolve("strings");
function fa() {
  const { model: e, controls: t } = De(),
    a = E(),
    n = S({
      header: pa.readOrEmpty("tooltips.header.premShop.header"),
      body: pa.readOrEmpty("tooltips.header.premShop.body"),
    });
  if (e.premiumShopEnabled.get())
    return (0, Ge.jsxs)(ma, {
      ...n,
      onClick: function (e) {
        (n.onClick(),
          a.play("click", { target: "premium-shop", original: e }),
          t.openPremiumShop());
      },
      onMouseEnter: function (e) {
        (n.onMouseEnter(e), a.play("mouse-enter", { target: "premium-shop", original: e }));
      },
      children: [
        (0, Ge.jsx)("div", { className: ba }),
        (0, Ge.jsx)("div", {
          className: p(ua, _a),
          children: pa.readOrEmpty("menu.headerButtons.btnLabel.premShop"),
        }),
      ],
    });
}
var ga = "UserProfile_2146e52",
  va = "UserProfile_divider_4a395a41",
  ha = w.resolve("aliases"),
  ya = ha.read((e) => e.lobby_header.default.UserAccount("resId")),
  xa = ha.read((e) => e.lobby_header.default.PremShop("resId"));
function Na({ className: e }) {
  const t = v(ya);
  return (0, Ge.jsx)("div", {
    className: p(ga, e),
    children: (0, Ge.jsxs)(mt, {
      className: va,
      children: [t && (0, Ge.jsx)(da, { options: { rootId: ya } }), xa && (0, Ge.jsx)(fa, {})],
    }),
  });
}
var Ba = pe(function ({ garageNavigationAllowed: e, battleButtonVisible: t, classNames: a }) {
    return ut() === xe.Hangar
      ? (0, Ge.jsx)(Na, { className: a?.userProfile })
      : (0, Ge.jsx)(wt, {
          classNames: a?.navigationBar,
          garageNavigationAllowed: e,
          battleButtonVisible: t,
        });
  }),
  [ja, ka] = D("WalletModel")(
    ({ observableModel: e }) => {
      const t = { currencies: e.dict("currencies") };
      return {
        ...t,
        list: s.shallow((e) =>
          Array.from(t.currencies.keys.values()).sort((t, a) => {
            const n = e.indexOf(t),
              s = e.indexOf(a),
              o = e.length;
            return (-1 === n ? o : n) - (-1 === s ? o : s);
          }),
        ),
      };
    },
    ({ externalModel: e }) => ({
      currencyAction: e.createCallback((e) => ({ type: e }), "onCurrencyAction"),
    }),
  ),
  Ia = "Hint_e53dd99e",
  Ea = "Hint_discountBackground_d56ce0a3",
  Aa = "Hint_discount_94b7b9ff",
  Ta = "Hint_onlyDiscount_8b648a0a",
  Sa = "Hint_discountWithHintText_381cf018",
  Ca = "Hint_onlyHintText_751386e1",
  Pa = "Hint_discountValue_b1f389fc",
  Wa = "Hint_discountHintTitle_9db2d839",
  Ma = "Hint_hintText_6f3fa83f",
  Oa = "Hint_hintTitle_135a3ed",
  Da = "Hint_discountValue__withHint_e7bbe38f";
function Ra({ classNames: e }) {
  const t = w.resolve("strings");
  return (0, Ge.jsxs)("div", {
    className: p(Ta, e?.onlyDiscount),
    children: [
      (0, Ge.jsx)("div", { className: p(Ea, e?.discountBackground) }),
      (0, Ge.jsx)(ae.Root, {
        children: (0, Ge.jsx)(ae.Value, {
          value: t.readOrEmpty("common.common.percent"),
          classNames: { valueContainer: p(Aa, e?.discount), value: p(Pa, e?.discountValue) },
        }),
      }),
    ],
  });
}
function wa({ type: e, classNames: t }) {
  const a = w.resolve("intl"),
    n = w.resolve("strings");
  return (0, Ge.jsx)("div", {
    className: p(Ma, Ca, t?.hintText, t?.onlyHintText),
    children: (0, Ge.jsx)(A, {
      classNames: t?.textGradient,
      children: (0, Ge.jsx)("div", {
        className: p(Oa, t?.hintTitle),
        children: a.toUpperCase(n.readOrEmpty(`menu.headerButtons.btnLabel.${e}`)),
      }),
    }),
  });
}
function Ha({ classNames: e, type: t }) {
  const a = w.resolve("intl"),
    n = w.resolve("strings");
  return (0, Ge.jsxs)("div", {
    className: p(Sa, e?.discountWithHintText),
    children: [
      (0, Ge.jsx)("div", { className: p(Ea, e?.discountBackground) }),
      (0, Ge.jsx)("div", {
        className: p(Wa, e?.discountHintTitle),
        children: a.toUpperCase(n.readOrEmpty(`menu.headerButtons.btnLabel.${t}`)),
      }),
      (0, Ge.jsx)(ae.Root, {
        children: (0, Ge.jsx)(ae.Value, {
          value: n.readOrEmpty("common.common.percent"),
          classNames: { valueContainer: p(Aa, e?.discount), value: p(Pa, Da, e?.discountValue) },
        }),
      }),
    ],
  });
}
function Va({ classNames: e, type: t }) {
  return (0, Ge.jsxs)("div", {
    className: p(Ia, e?.base),
    children: [
      (0, Ge.jsx)(Ra, {
        classNames: {
          onlyDiscount: e?.onlyDiscount,
          discountBackground: e?.discountBackground,
          discount: e?.discount,
          discountValue: e?.discountValue,
        },
      }),
      (0, Ge.jsx)(wa, {
        type: t,
        classNames: {
          hintText: e?.hintText,
          textGradient: e?.textGradient,
          onlyHintText: e?.onlyHintText,
        },
      }),
      (0, Ge.jsx)(Ha, { classNames: e, type: t }),
    ],
  });
}
var za = {
    base: "Currency_92022680",
    hintWrapper: "Currency_hintWrapper_530465b9",
    base__interactive: "Currency_base__interactive_52396ddd",
    currencyWrapper: "Currency_currencyWrapper_b13579ba",
    currencyIcon: "Currency_currencyIcon_346f8c78",
    value: "Currency_value_b1cf6531",
    value__unavailable: "Currency_value__unavailable_3a328d4",
    dash: "Currency_dash_2806b61e",
    formattedValue: "Currency_formattedValue_b7cad7e0",
    hint: "Currency_hint_f9d16bb2",
    base__hidden: "Currency_base__hidden_271064ec",
    text: "Currency_text_f4484816",
    text__overlay: "Currency_text__overlay_64b93131",
    discountWithHintText: "Currency_discountWithHintText_95e3324b",
    base__discount: "Currency_base__discount_271064ec",
    onlyHintText: "Currency_onlyHintText_61ecd7b0",
    onlyDiscount: "Currency_onlyDiscount_61ecd7b0",
  },
  La = 1e6,
  Fa = 1e5;
function $a({ wgMoneyAvailable: e, value: t, type: a, classNames: n }) {
  const s = (0, He.useRef)(null),
    o = w.resolve("intl"),
    r = w.resolve("strings"),
    i = G(
      {
        displayValue: () =>
          t >= La
            ? { abbreviated: !0, value: ie(t, Fa, "floor") / La }
            : { abbreviated: !1, value: t },
      },
      {
        medium: {
          displayValue: () =>
            t >= 1e7
              ? { abbreviated: !0, value: ie(t, Fa, "floor") / La }
              : { abbreviated: !1, value: t },
        },
        large: {
          displayValue: () =>
            t >= 1e8
              ? { abbreviated: !0, value: ie(t, Fa, "floor") / La }
              : { value: t, abbreviated: !1 },
        },
      },
    );
  if (!1 === e)
    return (0, Ge.jsxs)("div", {
      className: p(za.value, za.value__unavailable, n?.value),
      children: [
        (0, Ge.jsx)("div", {
          className: za.dash,
          children: r.readOrEmpty("common.common.semi_dash"),
        }),
        (0, Ge.jsx)("div", {
          className: za.dash,
          children: r.readOrEmpty("common.common.semi_dash"),
        }),
      ],
    });
  const l = i.displayValue();
  return (0, Ge.jsx)("div", {
    ref: s,
    className: p(za.value, n?.base),
    children: l.abbreviated
      ? (0, Ge.jsx)(C, {
          path: "menu.hangar_header.million",
          params: { value: l.value },
          brackets: { start: "%(", end: ")s" },
          className: p(za.formattedValue, n?.formattedValue),
        })
      : o.formatNumber(a === Y.gold ? "gold" : "integral", l.value),
  });
}
var Ua = pe(function ({ currency: e, type: t, className: a, classNames: n }) {
    const { controls: s } = ka(),
      o = E(),
      r = "AVAILABLE" === e.status,
      i = (function (e, t, a, n) {
        const s = w.resolve("strings"),
          o = S({
            header: s.readOrEmpty(`tooltips.header.buttons.${e}.header`),
            body: s.readOrEmpty(`tooltips.header.buttons.${e}.body`),
          }),
          r = (0, He.useMemo)(() => ({ disabled: "string" != typeof a || "" === a }), [a]),
          i = _(
            a,
            (0, He.useMemo)(() => [n], [n]),
            r,
          );
        return !1 === t ? o : i;
      })(t, r, e.tooltipType, e.value),
      l = q(
        G({ size: ee.extraSmall }, { large: { size: ee.small }, extraLarge: { size: ee.medium } })
          .size,
        ee.small,
      );
    return (0, Ge.jsxs)("div", {
      ...i,
      className: p(
        za.base,
        r ? za.base__interactive : za.base__nonInteractive,
        e.discount > 0 && za.base__discount,
        a,
      ),
      onMouseEnter: function (e) {
        (o.play("mouse-enter", { target: "WalletCurrency", original: e }), i.onMouseEnter(e));
      },
      onClick: function (e) {
        (i?.onClick(),
          r && (o.play("click", { target: "WalletCurrency", original: e }), s.currencyAction(t)));
      },
      children: [
        (0, Ge.jsx)("div", {
          className: p(za.currencyWrapper, n?.currencyWrapper),
          children: (0, Ge.jsx)(oe, {
            reverse: !0,
            classNames: { ...n?.currency, icon: p(za.currencyIcon, n?.currency?.icon) },
            type: t,
            size: l,
            "data-test-id": t,
            children: (0, Ge.jsx)($a, {
              wgMoneyAvailable: r,
              value: e.value,
              type: t,
              classNames: n?.currencyValue,
            }),
          }),
        }),
        r &&
          (0, Ge.jsx)("div", {
            className: p(za.hintWrapper, n?.hintWrapper),
            children: (0, Ge.jsx)(Va, {
              type: t,
              classNames: {
                ...n?.hint,
                discountWithHintText: p(za.discountWithHintText, n?.hint?.discountWithHintText),
                onlyDiscount: p(za.onlyDiscount, n?.hint?.onlyDiscount),
                onlyHintText: p(za.onlyHintText, n?.hint?.onlyHintText),
                base: p(za.hint, n?.hint?.base),
                textGradient: { text: za.text, textOverlay: p(za.text, za.text__overlay) },
              },
            }),
          }),
      ],
    });
  }),
  Ka = pe(function (e) {
    const t = ka().model.currencies.get(e.type);
    return t
      ? (0, Ge.jsx)(Ua, { ...e, currency: t })
      : (console.error(`Currency with type ${e.type} is not defined`), null);
  }),
  Ga = "Wallet_fc600169",
  qa = [Y.crystal, Y.gold, Y.credits],
  Ya = pe(function ({ className: e, classNames: t, currenciesOrder: a = qa }) {
    const { model: n } = ka(),
      s = n.list(a);
    return (0, Ge.jsx)("div", {
      "data-name": "Wallet",
      className: p(Ga, e),
      children: s.map((e) => (0, Ge.jsx)(Ka, { type: e, classNames: t }, e)),
    });
  }),
  Ja = (0, He.memo)(({ className: e, classNames: t, currenciesOrder: a, ...n }) =>
    (0, Ge.jsx)(ja, {
      ...n,
      children: (0, Ge.jsx)(Ya, { className: e, classNames: t, currenciesOrder: a }),
    }),
  ),
  [Qa, Xa] = D()(
    ({ observableModel: e }) => ({ root: e.object() }),
    ({ externalModel: e }) => ({ keysClick: e.createCallbackNoArgs("onClick") }),
  ),
  Za = "Keys_9f64b3e",
  en = "Keys_base__clickable_e3574e03",
  tn = "Keys_animBg_43bf4271",
  an = "Keys_blink_e0d3a26a",
  nn = "Keys_text_66d9f0b0",
  sn = "Keys_iconWrapper_ec56aaae",
  on = "Keys_icon_98ff59ab",
  rn = "Keys_hint_714b5f33",
  ln = pe(function () {
    const { model: e, controls: t } = Xa(),
      { amount: a, isDisabled: n } = e.root.get(),
      s = E(),
      o = (0, He.useRef)(a),
      r = f({
        resId: R.aliases.halloween.lobby_header.Keys("resId"),
        contentId: R.views.halloween.mono.lobby.tooltips.key_tooltip("resId"),
      });
    return (
      (0, He.useEffect)(() => {
        o.current !== a && (o.current = a);
      }, [a]),
      (0, Ge.jsxs)("div", {
        ...r,
        className: p(Za, !n && en),
        onClick: function (e) {
          (r.onClick(), n || (s.play("click", { target: "keys", original: e }), t.keysClick()));
        },
        onMouseEnter: function (e) {
          (r.onMouseEnter(e), n || s.play("mouse-enter", { target: "keys", original: e }));
        },
        onMouseLeave: function (e) {
          (r.onMouseLeave(), n || s.play("mouse-leave", { target: "keys", original: e }));
        },
        "data-test-id": "keysButton",
        children: [
          (0, Ge.jsx)(V, {
            src: R.videos.halloween.header.keys_bg(),
            className: tn,
            loop: !0,
            autoplay: !0,
          }),
          (0, Ge.jsxs)("div", {
            className: an,
            children: [
              (0, Ge.jsx)(C, {
                path: "halloween_lobby.hangar.header.keys",
                params: {
                  value: (0, Ge.jsx)(ye, {
                    previousNumber: o.current,
                    currentNumber: a,
                    isFormatted: !0,
                  }),
                },
                className: nn,
                split: !0,
              }),
              (0, Ge.jsx)("div", {
                className: sn,
                children: (0, Ge.jsx)("div", { className: on }),
              }),
            ],
          }),
          !n &&
            (0, Ge.jsx)("div", { className: rn, children: R.strings.halloween_lobby.keys.get() }),
        ],
      })
    );
  }),
  cn = (0, He.memo)(({ options: e, ...t }) =>
    (0, Ge.jsx)(Qa, { options: e, children: (0, Ge.jsx)(ln, { ...t }) }),
  ),
  dn = "RightSide_3c6c89c0",
  un = "RightSide_separator_fea82003",
  _n = w.resolve("aliases"),
  bn = _n.read((e) => e.halloween.lobby_header.Keys("resId")),
  mn = _n.read((e) => e.lobby_header.default.Wallet("resId")),
  pn = function () {
    const e = v(bn),
      t = v(mn);
    return (0, Ge.jsx)("div", {
      className: dn,
      children: (0, Ge.jsxs)(mt, {
        className: un,
        children: [
          e && (0, Ge.jsx)(cn, { options: { rootId: bn } }),
          t && (0, Ge.jsx)(Ja, { options: { rootId: mn } }),
        ],
      }),
    });
  },
  fn = new Set([
    "random",
    "trainingsList",
    "tournament",
    "epicQueue",
    "comp7",
    "comp7Light",
    "winback",
    "strongholdsBattlesList",
    "specBattlesList",
  ]);
var gn = "VehicleInfo_4b77df3f",
  vn = "VehicleInfo_details_3cde71e7",
  hn = "VehicleInfo_vehicleType_5f8aaab4",
  yn = pe(function ({ className: e }) {
    const t = Me(),
      a = Ee(),
      n =
        ((s = t.model.currentModeId.get()),
        "BATTLE_ROYALE_TOURNAMENT" !== t.model.queueType.get() && fn.has(s));
    var s;
    const o = a.model.vehicle();
    if (void 0 !== o)
      return n
        ? (0, Ge.jsx)(C, {
            className: p(gn, e),
            path: "menu.headerButtons.battle.vehicleInfo",
            params: {
              mode: t.model.currentMode.get(),
              level: (0, Ge.jsx)(g, { value: o.level, className: vn }),
              type: (0, Ge.jsx)(de, { className: hn, type: o.type, size: de.sizes.x24x24 }),
              name: (0, Ge.jsx)("div", { className: vn, children: o.shortName }),
            },
          })
        : (0, Ge.jsx)(C, {
            className: p(gn, e),
            path: "menu.headerButtons.battle.modeInfo",
            params: { mode: t.model.currentMode.get() },
          });
  }),
  xn = {
    base: "App_fe4b7101",
    base__oldStyle: "App_base__oldStyle_ed955e9f",
    leftSide: "App_leftSide_3f8cd87c",
    userProfile: "App_userProfile_7aef8044",
    navigationBar: "App_navigationBar_a5705175",
    navigationBar_button: "App_navigationBar_button_0",
    navigationBar_title: "App_navigationBar_title_e132fcfa",
    navigationBar_infoButton: "App_navigationBar_infoButton_760d7047",
    navigationBar_button__garageNavigation: "App_navigationBar_button__garageNavigation_e132fcfa",
    navigationBar_button__backNavigation: "App_navigationBar_button__backNavigation_0",
    rightSide: "App_rightSide_f445aa34",
    base__battleButtonVisible: "App_base__battleButtonVisible_0",
    battleButton: "App_battleButton_415d9053",
    battleButton__fadein: "App_battleButton__fadein_18e051ce",
    fadeIn: "App_fadeIn_0",
    battleButton__withoutFadein: "App_battleButton__withoutFadein_4337493d",
    battleButtonEffects: "App_battleButtonEffects_1da8cd9d",
    vehicleInfoWrapper: "App_vehicleInfoWrapper_9f2ec684",
  },
  Nn = L("Header", xn.base, {
    variants: {
      oldStyle: { true: xn.base__oldStyle },
      battleButtonVisible: { true: xn.base__battleButtonVisible },
    },
  }),
  Bn = w.resolve("aliases").read((e) => e.lobby_header.default.FightStart("resId")),
  jn = new Set([Ce, Pe]),
  kn = new Set(["mapsTraining"]);
var In = pe(function () {
    const e = se(0, 250),
      t = ue(),
      a = Te(),
      n = Me(),
      [s, o] = (0, He.useState)(!1),
      r = n.model.battleStatus.get(),
      i = n.model.battleButtonAlwaysOn.get(),
      l = !n.model.computes.isSearchingBattle() && !n.model.computes.isBattleReady(),
      c = ut(),
      d = Boolean(
        j(t.location, {
          paths: ["/hangar/allVehicles", ":/hangar/allVehicles", "/postBattleResults"],
        }),
      ),
      u = t.location.includes("/postBattleResults"),
      _ = v(Bn),
      b = n.model.currentModeId.get();
    return (
      (0, He.useEffect)(() => {
        _
          ? u && kn.has(b)
            ? o(!1)
            : i
              ? o(!0)
              : jn.has(r)
                ? o(!1)
                : o(c === xe.Hangar || d || u)
          : o(!1);
      }, [i, r, c, d, u, _, b]),
      (0, Ge.jsxs)(Nn, {
        ref: e,
        oldStyle: a.model.oldStyle.get(),
        battleButtonVisible: s,
        children: [
          (0, Ge.jsx)("div", {
            className: xn.leftSide,
            children: (0, Ge.jsx)(Ba, {
              garageNavigationAllowed: l,
              battleButtonVisible: s,
              classNames: {
                userProfile: xn.userProfile,
                navigationBar: {
                  base: xn.navigationBar,
                  button: xn.navigationBar_button,
                  button__garageNavigation: xn.navigationBar_button__garageNavigation,
                  title: xn.navigationBar_title,
                  infoButton: xn.navigationBar_infoButton,
                  button__backNavigation: xn.navigationBar_button__backNavigation,
                },
              },
            }),
          }),
          s &&
            (0, Ge.jsxs)(Ge.Fragment, {
              children: [
                (0, Ge.jsx)(dt, {
                  options: { rootId: Bn },
                  classNames: {
                    base: p(
                      xn.battleButton,
                      c === xe.Hangar || d
                        ? xn.battleButton__withoutFadein
                        : xn.battleButton__fadein,
                    ),
                    effect: xn.battleButtonEffects,
                  },
                }),
                u &&
                  (0, Ge.jsx)("div", {
                    className: xn.vehicleInfoWrapper,
                    children: (0, Ge.jsx)(yn, {}),
                  }),
              ],
            }),
          (0, Ge.jsx)("div", {
            className: p(xn.rightSide, s && xn.rightSide__battleButtonVisible),
            children:
              !n.model.computes.isSearchingBattle() &&
              !n.model.computes.isBattleReady() &&
              (0, Ge.jsx)(pn, {}),
          }),
        ],
      })
    );
  }),
  En = {
    click: { battleButton: "gui_battle" },
    "mouse-enter": { keys: he },
    "mouse-leave": { keys: ve },
  },
  An = w.resolve("aliases"),
  Tn = N(En);
U(
  new le()
    .addWithProps(ce, { soundsOverrides: Tn })
    .add(Ae)
    .addWithProps(P, {
      context: "model.router",
      rootId: An.read((e) => e.lobby_header.default.HeaderState("resId")),
    })
    .addWithProps(Re, { options: { context: "tutorialModel" } })
    .addWithProps(Oe, {
      options: { rootId: An.read((e) => e.lobby_header.default.PremShop("resId")) },
    })
    .addWithProps(We, {
      options: { rootId: An.read((e) => e.lobby_header.default.Prebattle("resId")) },
    })
    .addWithProps(Ie, {
      options: { rootId: An.read((e) => e.lobby_header.default.CurrentVehicle("resId")) },
    })
    .addWithProps(Ne, {
      options: { rootId: An.read((e) => e.lobby_header.default.HeaderState("resId")) },
    })
    .addWithProps(je, {
      options: { rootId: An.read((e) => e.lobby_header.default.NavigationBar("resId")) },
    })
    .render((0, Ge.jsx)(In, {})),
);
