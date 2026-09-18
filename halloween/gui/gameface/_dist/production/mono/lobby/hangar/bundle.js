import { r as e } from "../chunks/rolldown-runtime.js";
import {
  $ as t,
  $r as a,
  $t as s,
  A as n,
  An as o,
  Ar as i,
  At as l,
  Bn as r,
  Br as c,
  Bt as d,
  C as u,
  Cn as m,
  D as p,
  E as _,
  En as h,
  F as g,
  Fi as b,
  Fn as f,
  Fr as v,
  Gr as x,
  Gt as y,
  Hr as C,
  I as w,
  Ii as I,
  In as S,
  Ir as j,
  It as N,
  Jr as k,
  Jt as D,
  K as A,
  Kt as E,
  Li as M,
  Ln as T,
  Lr as P,
  Lt as L,
  M as B,
  Mr as z,
  N as O,
  Nn as $,
  Nr as H,
  On as W,
  Or as q,
  P as U,
  Pn as F,
  Pr as G,
  Qn as V,
  Qr as K,
  R as Z,
  Ri as Y,
  Rr as X,
  S as Q,
  Sr as J,
  T as ee,
  Tn as te,
  Un as ae,
  Ut as se,
  Vi as ne,
  Vn as oe,
  Vr as ie,
  Vt as le,
  W as re,
  Wn as ce,
  Wr as de,
  Wt as ue,
  X as me,
  Xn as pe,
  Xr as _e,
  Xt as he,
  Yn as ge,
  Yt as be,
  Z as fe,
  Zr as ve,
  Zt as xe,
  _i as ye,
  _r as Ce,
  an as we,
  at as Ie,
  b as Se,
  bn as je,
  br as Ne,
  ci as ke,
  di as De,
  dt as Ae,
  ei as Ee,
  en as Me,
  er as Te,
  et as Pe,
  fi as Le,
  ft as Re,
  gt as Be,
  hr as ze,
  ht as Oe,
  ir as $e,
  it as He,
  jr as We,
  k as qe,
  lt as Ue,
  mi as Fe,
  mr as Ge,
  mt as Ve,
  nn as Ke,
  nr as Ze,
  nt as Ye,
  oi as Xe,
  on as Qe,
  ot as Je,
  pt as et,
  qt as tt,
  ri as at,
  rn as st,
  ui as nt,
  ut as ot,
  v as it,
  vi as lt,
  vr as rt,
  w as ct,
  wn as dt,
  x as ut,
  xn as mt,
  xr as pt,
  y as _t,
  yn as ht,
  yr as gt,
  z as bt,
  zi as ft,
} from "../chunks/lib.js";
import "../chunks/_wg-global-styles.js";
import { a as vt, i as xt, n as yt, r as Ct, s as wt, t as It } from "../chunks/vendor.js";
import {
  S as St,
  _ as jt,
  a as Nt,
  c as kt,
  g as Dt,
  h as At,
  i as Et,
  l as Mt,
  m as Tt,
  o as Pt,
  r as Lt,
  s as Rt,
} from "../chunks/sound.js";
import { i as Bt, n as zt, r as Ot } from "../chunks/text.js";
import { n as $t, r as Ht, t as Wt } from "../chunks/button.js";
import { c as qt, i as Ut, o as Ft, r as Gt, s as Vt } from "../chunks/utils.js";
import { n as Kt, t as Zt } from "../chunks/key_icon.js";
import { n as Yt, r as Xt, t as Qt } from "../chunks/vehicle_type.js";
import { n as Jt, r as ea, t as ta } from "../chunks/video_background.js";
import { t as aa } from "../chunks/useCoverScale.js";
import { i as sa, n as na, r as oa, t as ia } from "../chunks/gifted_vehicle.js";
import { n as la, t as ra } from "../chunks/hangar_carousel_vehicle_view_model.js";
import {
  _ as ca,
  a as da,
  c as ua,
  d as ma,
  f as pa,
  g as _a,
  h as ha,
  i as ga,
  l as ba,
  n as fa,
  o as va,
  p as xa,
  r as ya,
  s as Ca,
  t as wa,
  u as Ia,
  v as Sa,
} from "../chunks/quests_model_wrapper.js";
import { t as ja } from "../chunks/meta_view_model.js";
var Na = e(M()),
  ka = e(It()),
  Da = e(Y()),
  Aa = (function (e) {
    return (
      (e.MouseDown = "mouseDown"),
      (e.Dragging = "dragging"),
      (e.End = "scrollingToEnd"),
      (e.Idle = "idle"),
      e
    );
  })({}),
  Ea = { type: "idle" };
var Ma = {
    itemHeightSmall: "92rem",
    itemHeightMedium: "139rem",
    itemHeightLarge: "152rem",
    itemHeightExtraLarge: "190rem",
    base: "Card_f7ddaa4a",
    base__dragging: "Card_base__dragging_8ff3901c",
    shapeBG: "Card_shapeBG_400674ce",
    cardBgImage: "Card_cardBgImage_3deee780",
    base__hover: "Card_base__hover_f4c22d1c",
    base__selected: "Card_base__selected_f4c22d1c",
    base__lockedCarousel: "Card_base__lockedCarousel_f4c22d1c",
    base__inQueue: "Card_base__inQueue_f4c22d1c",
    base__inPlatoon: "Card_base__inPlatoon_f4c22d1c",
    base__inBattle: "Card_base__inBattle_f4c22d1c",
    base__locked: "Card_base__locked_f4c22d1c",
    card: "Card_ccd25a1f",
    rectangleArea: "Card_rectangleArea_b7d9ab80",
    cardContent: "Card_cardContent_9b654fec",
    cardSelected: "Card_cardSelected_40eb0c63",
    cardSelected__border: "Card_cardSelected__border_547ffe45",
    shape: "Card_shape_b4f22aed",
    tankIcon: "Card_tankIcon_40bde3b8",
    vehType: "Card_vehType_278a8d3c",
    vehName: "Card_vehName_441006bf",
    daily: "Card_daily_7d9823e",
    base__overlay: "Card_base__overlay_f4c22d1c",
    containerPreview: "Card_containerPreview_8520839d",
    hitPreview: "Card_hitPreview_e576fa82",
    btnPreview: "Card_btnPreview_6f3153e1",
    base__hoverPreview: "Card_base__hoverPreview_f4c22d1c",
    base__activePreview: "Card_base__activePreview_f4c22d1c",
    disabled: "Card_disabled_1478e791",
    disabledPattern: "Card_disabledPattern_1a86a3e0",
    stateIcon: "Card_stateIcon_5699515d",
    stateText: "Card_stateText_bd691ffe",
    stateText__light: "Card_stateText__light_fce40a9",
  },
  Ta = rt(),
  Pa = "big_",
  La = {
    france_F17_AMX_13_90_Halloween_event: Rt,
    uk_GB24_Centurion_Mk3_Halloween_event: Lt,
    ussr_R171_IS_3_II_hw21: Et,
    usa_A100_T49_Halloween_event: Nt,
    ussr_R40_T_54_Halloween_event: Mt,
    italy_It19_Progetto_C50_mod_66_hw21: kt,
    uk_GB123_GSOR_1006_v7_Halloween_event: Pt,
  },
  Ra = Da.memo(
    ({
      index: e,
      intCD: t,
      invID: a,
      name: s,
      iconName: n,
      vehicleType: o,
      vehicleState: i,
      selected: l,
      hasDaily: r,
      lockedCarousel: c = !1,
      dragging: u,
      className: m,
      click: p,
      clickPreview: _,
    }) => {
      const h = ne.resolve("strings"),
        g = ne.resolve("views"),
        b = ne.resolve("aliases"),
        [f, v] = (0, Da.useState)(!1),
        [x, y] = (0, Da.useState)(!1),
        [C, w] = (0, Da.useState)(!1),
        I = i === la.Default,
        j = i === la.Locked,
        N = i === la.InBattle,
        k = c || j || N,
        D = I ? "" : h.readOrEmpty(`halloween_lobby.carousel.card.${i}`),
        E = ze(
          `R.images.gui.maps.icons.hangar.carousel.cards.alerts.${i}`,
          `R.images.gui.maps.icons.hangar.carousel.cards.alerts.${i}_upscale`,
        ),
        M = Ge(
          { vehTypesSize: A.Type.sizes.x24x24, bgTilesCountInChunk: 5, bgName: "small_" },
          {
            medium: { vehTypesSize: A.Type.sizes.x24x24, bgTilesCountInChunk: 3, bgName: Pa },
            large: { vehTypesSize: A.Type.sizes.x24x24, bgTilesCountInChunk: 3, bgName: Pa },
            extraLarge: { vehTypesSize: A.Type.sizes.x48x48, bgTilesCountInChunk: 3, bgName: Pa },
          },
        ),
        P = () => {
          c || l || (n in La && Fe.sound(La[n]), p(a));
        },
        L = F({
          body: h.readOrEmpty(
            N
              ? "halloween_lobby.iconButton.preview.isDisabled"
              : "halloween_lobby.iconButton.preview.default",
          ),
        }),
        R = S({
          resId: b.read((e) => e.halloween.shared.Carousel("resId")),
          contentId: g.read((e) => e.halloween.mono.lobby.tooltips.simple_format_tooltip("resId")),
          args: { id: ra.dailyQuest },
        }),
        B = T(
          ra.halloweenVehicleFeatureTooltip,
          (0, Da.useMemo)(() => [t, !0, !0], [t]),
        );
      return (0, Ta.jsxs)("div", {
        className: (0, ka.default)(
          Ma.base,
          Ma[`base__${i}`],
          f && Ma.base__hover,
          l && Ma.base__selected,
          u && Ma.base__dragging,
          c && Ma.base__lockedCarousel,
          x && Ma.base__hoverPreview,
          C && Ma.base__activePreview,
        ),
        children: [
          (0, Ta.jsxs)("div", {
            className: (0, ka.default)(Ma.card, m),
            onMouseLeave: () => v(!1),
            onMouseEnter: () => {
              l || c || (v(!0), Fe.highlight());
            },
            onClick: P,
            children: [
              (0, Ta.jsxs)("div", {
                ...B,
                className: Ma.cardContent,
                children: [
                  (0, Ta.jsxs)("div", {
                    className: Ma.rectangleArea,
                    children: [
                      (0, Ta.jsx)("div", { className: Ma.shapeBG }),
                      (0, Ta.jsx)("div", {
                        className: Ma.cardBgImage,
                        style: {
                          backgroundImage: `url('R.images.halloween.gui.maps.icons.hangar.carousel.cards.card_bg.${M.bgName}${e % M.bgTilesCountInChunk}')`,
                        },
                      }),
                      (0, Ta.jsx)("div", {
                        className: Ma.tankIcon,
                        style: {
                          backgroundImage: `url('R.images.gui.maps.icons.vehicle.x380x304.${n}')`,
                        },
                      }),
                      (0, Ta.jsx)(A.Type, {
                        className: Ma.vehType,
                        size: M.vehTypesSize,
                        type: o,
                        premium: !1,
                      }),
                      (0, Ta.jsx)(A.Name, { className: Ma.vehName, children: s }),
                    ],
                  }),
                  (0, Ta.jsx)("div", {
                    className: (0, ka.default)(Ma.cardSelected, Ma.cardSelected__border),
                  }),
                  (0, Ta.jsx)("div", { className: Ma.shape }),
                ],
              }),
              r &&
                (0, Ta.jsx)("div", {
                  ...R,
                  onClick: P,
                  children: (0, Ta.jsx)(Zt, { size: Kt.C24x24, className: Ma.daily, gray: !l }),
                }),
              (0, Ta.jsxs)("div", {
                ...L,
                className: Ma.containerPreview,
                children: [
                  (0, Ta.jsx)("div", { className: Ma.btnPreview }),
                  (0, Ta.jsx)("div", {
                    onClick: () => {
                      N || (n in La && Fe.sound(La[n]), w(!0), _(t));
                    },
                    onMouseEnter: () => {
                      N || (w(!1), y(!0), Fe.highlight());
                    },
                    onMouseLeave: () => y(!1),
                    className: Ma.hitPreview,
                  }),
                ],
              }),
            ],
          }),
          k &&
            (0, Ta.jsxs)("div", {
              className: Ma.disabled,
              children: [
                (0, Ta.jsx)("div", { className: Ma.disabledPattern }),
                !I &&
                  (0, Ta.jsxs)(Ta.Fragment, {
                    children: [
                      (0, Ta.jsx)("div", {
                        className: Ma.stateIcon,
                        style: { backgroundImage: `url('${E}')` },
                      }),
                      (0, Ta.jsx)("div", {
                        className: (0, ka.default)(
                          Ma.stateText,
                          i !== la.Locked && Ma.stateText__light,
                        ),
                        children: (0, Ta.jsx)(d, { content: D }),
                      }),
                    ],
                  }),
              ],
            }),
        ],
      });
    },
  ),
  Ba = {
    base: "SliderBtn_27151074",
    base__disable: "SliderBtn_base__disable_cfb2105a",
    icon: "SliderBtn_icon_fa1d937d",
    base__left: "SliderBtn_base__left_6581bce4",
  },
  za = (function (e) {
    return ((e.Left = "left"), (e.Right = "right"), e);
  })({});
function Oa({ type: e, className: t, isDisabled: a = !1, onClick: s }) {
  return (0, Ta.jsx)(He, {
    classNames: {
      base: (0, ka.default)(Ba.base, Ba[`base__${e}`], a && Ba.base__disable, t),
      content: Ba.icon,
    },
    theme: He.themes.secondary,
    size: He.sizes.small,
    autoAlignContent: !1,
    onClick: () => {
      (Fe.click(), s());
    },
  });
}
var [$a, Ha] = te()(
    ({ observableModel: e }) => {
      const t = { root: e.object(), vehicles: e.array("vehicles", []) },
        a = dt(
          () =>
            !G(
              t.vehicles.get(),
              (e) => e.vehicleState !== la.InPlatoon && e.vehicleState !== la.InQueue,
            ),
        ),
        s = dt(() => t.vehicles.get().length);
      return { ...t, computes: { getCarouselLock: a, getCarouselLength: s } };
    },
    ({ externalModel: e }) => ({
      changeVehicle: e.createCallback((e) => ({ invID: e }), "onChangeVehicle"),
      preview: e.createCallback((e) => ({ intCD: e }), "onVehiclePreview"),
      changeSize: e.createCallback((e) => ({ size: e }), "onChangeSize"),
    }),
  ),
  Wa = {
    itemHeightSmall: "92rem",
    itemHeightMedium: "139rem",
    itemHeightLarge: "152rem",
    itemHeightExtraLarge: "190rem",
    base: "Carousel_c7e8946f",
    leftBtn: "Carousel_leftBtn_431f54f3",
    rightBtn: "Carousel_rightBtn_588f2bbf",
    scroll: "Carousel_scroll_537c6701",
    scroll__left: "Carousel_scroll__left_b21b9523",
    scroll__right: "Carousel_scroll__right_f4a5bb8f",
    content__noScroll: "Carousel_content__noScroll_c50be44f",
    blankItem: "Carousel_blankItem_38bde7d7",
    items: "Carousel_items_d8b18bec",
    itemBg: "Carousel_itemBg_2e9d35a6",
    item: "Carousel_item_2322e538",
    scrollBG: "Carousel_scrollBG_b43120e5",
    scrollBgMask: "Carousel_scrollBgMask_302d8988",
    scrollBgMask__left: "Carousel_scrollBgMask__left_b21b9523",
    scrollBgMask__right: "Carousel_scrollBgMask__right_f4a5bb8f",
    draggingOverlay: "Carousel_draggingOverlay_721120be",
  },
  qa = "92rem",
  Ua = "139rem",
  Fa = "152rem",
  Ga = "190rem",
  Va = yt(({ className: e }) => {
    const { model: t, controls: a } = Ha();
    Ce();
    const { selectedVehicle: s } = t.root.get(),
      n = O(),
      o = (function (e, t) {
        const {
            contentRef: a,
            wrapperRef: s,
            scrollPosition: n,
            clampPosition: o,
            animationScroll: i,
            events: l,
          } = e,
          [r, c] = (0, Da.useState)(Ea);
        return (
          (0, Da.useEffect)(() => {
            const e = a.current;
            e && (e.style.cursor = "dragging" === r.type ? "move" : "grab");
          }, [a, r.type]),
          (0, Da.useEffect)(() => {
            if ("mouseDown" !== r.type && "dragging" !== r.type) return;
            const e = (e) => {
              const l = a.current,
                d = s.current;
              if (!l || !d) return;
              const u = r.positionFrom - e.screenX,
                m = r.previousScrollPosition + u;
              ("mouseDown" === r.type &&
                Math.abs(u) > 5 &&
                c({
                  type: "dragging",
                  positionFrom: r.positionFrom,
                  previousScrollPosition: r.previousScrollPosition,
                }),
                "dragging" === r.type &&
                  n.start({
                    scrollPosition: o(l, m),
                    from: { scrollPosition: i.scrollPosition.get() },
                    ...(t && { config: t }),
                  }));
            };
            function l() {
              (window.removeEventListener("mousemove", e),
                document.body.removeEventListener("mouseleave", l),
                c({ type: "scrollingToEnd" }));
            }
            return (
              window.addEventListener("mousemove", e),
              window.addEventListener("mouseup", l),
              document.body.addEventListener("mouseleave", l),
              () => {
                (window.removeEventListener("mousemove", e),
                  window.removeEventListener("mouseup", l),
                  document.body.removeEventListener("mouseleave", l));
              }
            );
          }, [i.scrollPosition, o, a, r, n, s, t]),
          (0, Da.useEffect)(() => {
            if ("scrollingToEnd" !== r.type) return;
            const e = () => {
              c(Ea);
            };
            return (i.scrollPosition.idle && e(), l.on("rest", e), () => l.off("rest", e));
          }, [i.scrollPosition, r.type, l]),
          (0, Da.useEffect)(() => {
            const e = a.current;
            if (!e) return;
            const t = (e) => {
              0 === e.button &&
                c({
                  type: "mouseDown",
                  positionFrom: e.screenX,
                  previousScrollPosition: i.scrollPosition.get(),
                });
            };
            return (
              e.addEventListener("mousedown", t),
              () => e.removeEventListener("mousedown", t)
            );
          }, [i.scrollPosition, a]),
          r
        );
      })(n),
      i = (0, Da.useRef)(null),
      l = (0, Da.useRef)(null),
      [r, c] = (0, Da.useState)(!1),
      [d, u] = (0, Da.useState)("left"),
      m = "left" === d,
      p = "right" === d,
      _ = o.type === Aa.Dragging,
      h = new Array(t.computes.getCarouselLength()).fill(0),
      g = (0, Da.useCallback)(() => {
        n.applyStepTo(U.Next);
      }, [n]),
      b = (0, Da.useCallback)(() => {
        n.applyStepTo(U.Prev);
      }, [n]),
      f = Ge({ size: qa }, { medium: { size: Ua }, large: { size: Fa }, extraLarge: { size: Ga } }),
      v = (0, Da.useCallback)(() => {
        if (l.current && i.current) {
          const e = n.getContainerSize(),
            t = n.getWrapperSize() < e;
          (c(t), (l.current.style.cursor = t ? "" : "auto"));
        }
      }, [n]),
      x = (0, Da.useCallback)(() => {
        const [e, t] = n.getBounds(),
          a = n.animationScroll.scrollPosition.goal;
        u(a === e ? "left" : a === t ? "right" : "center");
      }, [n]),
      y = (0, Da.useCallback)(() => {
        const e = X(t.vehicles.get(), (e) => e.invID === s);
        void 0 !== e && r && n.applyScroll(160 * e, { immediate: !1 });
      }, [r, t.vehicles, n, s]),
      C = Ze(x);
    ((0, Da.useEffect)(
      () => (
        n.events.on("change", C),
        n.events.on("recalculateContent", v),
        n.events.on("resizeHandled", v),
        () => {
          (n.events.off("change", C),
            n.events.off("recalculateContent", v),
            n.events.off("resizeHandled", v));
        }
      ),
      [n.events, C, v],
    ),
      (0, Da.useEffect)(
        () =>
          z(() =>
            z(() => {
              (v(), a.changeSize(parseFloat(f.size ?? "")));
            }),
          ),
        [v, f.size, a],
      ),
      (0, Da.useEffect)(
        () =>
          z(() => {
            y();
          }),
        [y],
      ));
    const w = (0, Da.useCallback)(
        (e) => {
          a.changeVehicle(e);
        },
        [a],
      ),
      I = (0, Da.useCallback)(
        (e) => {
          a.preview(e);
        },
        [a],
      );
    return (0, Ta.jsxs)(Ta.Fragment, {
      children: [
        (0, Ta.jsxs)("div", {
          className: (0, ka.default)(Wa.base, e),
          children: [
            (0, Ta.jsx)("div", {
              className: (0, ka.default)(
                Wa.scrollBgMask,
                m && Wa.scrollBgMask__left,
                p && Wa.scrollBgMask__right,
              ),
              children: (0, Ta.jsx)("div", {
                className: Wa.scrollBG,
                children: de(h, (e, t) =>
                  (0, Ta.jsx)("div", { className: Wa.itemBg }, `scrollBG_${e}${t}`),
                ),
              }),
            }),
            r &&
              (0, Ta.jsx)(Oa, { className: Wa.leftBtn, type: za.Left, isDisabled: m, onClick: g }),
            (0, Ta.jsx)("div", {
              className: (0, ka.default)(Wa.scroll, m && Wa.scroll__left, p && Wa.scroll__right),
              ref: i,
              children: (0, Ta.jsx)(B.Horizontal.Area.Default, {
                api: n,
                classNames: { wrapper: (0, ka.default)(Wa.content, !r && Wa.content__noScroll) },
                children: (0, Ta.jsxs)("div", {
                  className: Wa.items,
                  ref: l,
                  children: [
                    de(t.vehicles.get(), (e, a) =>
                      (0, Ta.jsx)(
                        Ra,
                        {
                          index: a,
                          className: Wa.item,
                          selected: s === e.invID,
                          lockedCarousel: t.computes.getCarouselLock(),
                          dragging: _,
                          click: w,
                          clickPreview: I,
                          ...e,
                        },
                        `${e.invID}_${e.intCD}`,
                      ),
                    ),
                    r && (0, Ta.jsx)("div", { className: Wa.blankItem }),
                  ],
                }),
              }),
            }),
            r &&
              (0, Ta.jsx)(Oa, {
                className: Wa.rightBtn,
                type: za.Right,
                isDisabled: p,
                onClick: b,
              }),
          ],
        }),
        Na.createPortal(
          _ && r && (0, Ta.jsx)("div", { className: Wa.draggingOverlay }),
          document.body,
        ),
      ],
    });
  }),
  Ka = (0, Da.memo)(function (e) {
    return (0, Ta.jsx)($a, {
      options: (0, Da.useMemo)(
        () => ({ rootId: R.aliases.halloween.shared.Carousel("resId") }),
        [],
      ),
      children: (0, Ta.jsx)(ht, { children: (0, Ta.jsx)(Va, { ...e }) }),
    });
  }),
  [Za, Ya] = te()(
    ({ observableModel: e }) => ({ root: e.object(), difficulties: e.array("difficulties", []) }),
    ({ externalModel: e }) => ({
      swichLevel: e.createCallback((e) => ({ level: e }), "onSwichLevel"),
    }),
  ),
  Xa = (function (e) {
    return ((e.DEFAULT = "default"), (e.SELECTED = "selected"), e);
  })({});
function Qa({ children: e, isDisabled: t, level: a, state: s, isLocked: n }) {
  return t
    ? (0, Ta.jsx)(y, {
        params: {
          header: R.strings.halloween_lobby.difficult.disabled.header(),
          body: R.strings.halloween_lobby.difficult.disabled.body(),
        },
        children: e,
      })
    : (0, Ta.jsx)(E, {
        params: {
          contentId: R.views.halloween.mono.lobby.tooltips.difficulty_tooltip("resId"),
          resId: R.aliases.halloween.shared.Difficulty("resId"),
          args: { level: a, state: s, isLocked: n },
        },
        children: e,
      });
}
var Ja = { 1: jt, 2: Tt, 3: Dt },
  es = "default",
  ts = "hovered",
  as = "selected",
  ss = "locked",
  ns = "selectedLocked",
  os = "c_126x126",
  is = "c_136x136",
  ls = "c_252x252",
  rs = "c_272x272",
  cs = {
    base: "DifficultyItem_b30c81de",
    base__default: "DifficultyItem_base__default_84d51887",
    base__locked: "DifficultyItem_base__locked_84d51887",
    base__disabled: "DifficultyItem_base__disabled_84d51887",
    video: "DifficultyItem_video_4b2312a6",
    icon: "DifficultyItem_icon_dbcae3f",
    base__selected: "DifficultyItem_base__selected_84d51887",
    iconSelected: "DifficultyItem_iconSelected_633100e7",
    iconHighlight: "DifficultyItem_iconHighlight_633100e7",
    label: "DifficultyItem_label_cb00518a",
    lock: "DifficultyItem_lock_964c2e07",
    smoke: "DifficultyItem_smoke_1c68173c",
    bubble: "DifficultyItem_bubble_860202e8",
  },
  ds = yt(function ({ level: e, state: t, isDisabled: a, isLocked: s, isNew: n, className: o }) {
    const { controls: i } = Ya(),
      l = 1 !== r(),
      c = (0, Da.useRef)(null),
      d = Ge({ iconSize: l ? ls : os }, { extraLarge: { iconSize: l ? rs : is } }),
      u = ((e, t, a) => {
        if (!ye.isLow()) {
          if (e) return R.videos.halloween.difficulty_new();
          if (a === Xa.SELECTED && !t) return R.videos.halloween.difficulty_selected();
        }
      })(n, a, t),
      m = `R.images.halloween.gui.maps.icons.difficulties.${d.iconSize}.diff_${e}`;
    return (
      (0, Da.useEffect)(() => {
        const e = c.current;
        e && We(() => e.play(), 10);
      }, [c, t, n]),
      (0, Ta.jsx)(Qa, {
        isDisabled: a,
        level: e,
        state: t,
        isLocked: s,
        children: (0, Ta.jsxs)("div", {
          className: (0, ka.default)(
            cs.base,
            cs[`base__${t}`],
            s && cs.base__locked,
            a && cs.base__disabled,
            o,
          ),
          onMouseEnter: () => {
            t !== Xa.DEFAULT || a || Fe.sound(At);
          },
          onClick: () => {
            if (t !== Xa.DEFAULT || a || s) return;
            const n = Ja[e];
            (void 0 !== n && Fe.sound(n), i.swichLevel(e));
          },
          children: [
            u && (0, Ta.jsx)(ue, { ref: c, className: cs.video, src: u, loop: !0 }),
            (0, Ta.jsx)(Me, { path: `${m}_${s ? ss : es}`, className: cs.icon }),
            (0, Ta.jsx)(Me, { path: `${m}_${s ? ns : as}`, className: cs.iconSelected }),
            t === Xa.DEFAULT &&
              !a &&
              !s &&
              (0, Ta.jsx)(Me, { path: `${m}_${ts}`, className: cs.iconHighlight }),
            (0, Ta.jsx)("div", {
              className: cs.label,
              children: R.strings.halloween_lobby.difficult.uppercase.$dyn(`level_${e}`),
            }),
            (0, Ta.jsx)(tt.Root, {
              className: cs.bubble,
              hidden: !n,
              children: (0, Ta.jsx)(tt.Value, { value: R.strings.halloween_lobby.difficult.new() }),
            }),
            s && (0, Ta.jsx)("div", { className: cs.lock }),
            (0, Ta.jsx)("div", { className: cs.smoke }),
          ],
        }),
      })
    );
  }),
  us = "DifficultyApp_8d3524d3",
  ms = "DifficultyApp_items_c2de68fd",
  ps = "DifficultyApp_item_a71217e5",
  _s = yt(({ className: e }) => {
    const { model: t } = Ya();
    return (0, Ta.jsx)("div", {
      className: (0, ka.default)(us, e),
      children: (0, Ta.jsx)("div", {
        className: ms,
        children: de(t.difficulties.get(), (e) =>
          (0, Ta.jsx)(
            "div",
            {
              className: ps,
              children: (0, Ta.jsx)(ds, { isDisabled: t.root.get().isDisabled, ...e }),
            },
            e.level,
          ),
        ),
      }),
    });
  }),
  hs = Da.memo(function (e) {
    return (0, Ta.jsx)(Za, {
      options: (0, Da.useMemo)(
        () => ({ rootId: R.aliases.halloween.shared.Difficulty("resId") }),
        [],
      ),
      children: (0, Ta.jsx)(_s, { ...e }),
    });
  }),
  [gs, bs] = te()(
    ({ observableModel: e }) => {
      const t = { root: e.object(), types: e.array("types"), reward: e.object("bonus") },
        a = dt(() => !!C(t.types.get(), "final"));
      return { ...t, computes: { isFinal: a } };
    },
    ({ externalModel: e }) => ({
      skip: e.createCallbackNoArgs("onSkip"),
      decrypt: e.createCallbackNoArgs("onDecrypt"),
      view: e.createCallbackNoArgs("onView"),
      nextSlide: e.createCallbackNoArgs("onSlideToNext"),
    }),
  ),
  fs = "Price_1ad8370b",
  vs = "Price_priceIcon_cab5171c",
  xs = "Price_keyIcon_84ada43a",
  ys = Da.memo(function ({ price: e, className: t }) {
    const { breakpoint: a } = Ce();
    return (0, Ta.jsxs)("div", {
      className: (0, ka.default)(fs, t),
      children: [
        e,
        (0, Ta.jsx)("div", {
          className: vs,
          children: (0, Ta.jsx)(Zt, {
            className: xs,
            size: a.weight >= Ne.large.weight ? Kt.C70x70 : Kt.C60x60,
            gray: !0,
          }),
        }),
      ],
    });
  }),
  Cs = {
    base: "MetaWidget_4da32df9",
    tooltipArea: "MetaWidget_tooltipArea_179fc9c",
    tooltipArea__withButton: "MetaWidget_tooltipArea__withButton_fc5a9c1f",
    header: "MetaWidget_header_55d2ee9d",
    missionIndex: "MetaWidget_missionIndex_a273dd4e",
    kingReward: "MetaWidget_kingReward_3b3e2e4a",
    shadow: "MetaWidget_shadow_348e0683",
    name: "MetaWidget_name_cfda9a26",
    name__withoutPropminent: "MetaWidget_name__withoutPropminent_750a71ad",
    reward: "MetaWidget_reward_c63a36fb",
    rewardGlow: "MetaWidget_rewardGlow_d8673ada",
    "light-rotation": "MetaWidget_light-rotation_761dee36",
    rewardCmp: "MetaWidget_rewardCmp_d9a0b96c",
    rewardInfo: "MetaWidget_rewardInfo_51a437cb",
    description: "MetaWidget_description_c095075",
    block: "MetaWidget_block_89df6f11",
    block__show: "MetaWidget_block__show_daff1e8f",
    extTextStyle: "MetaWidget_extTextStyle_b37c7a35",
    inprogressDescr: "MetaWidget_inprogressDescr_d21e2c60",
    inprogressDescrSize: "MetaWidget_inprogressDescrSize_5eac89ea",
    skipPriceBlock: "MetaWidget_skipPriceBlock_4cfede0b",
    skipPrice: "MetaWidget_skipPrice_b0e7f558",
    receive: "MetaWidget_receive_a93885ca",
    receiveDescr: "MetaWidget_receiveDescr_d5ba7d45",
    icon: "MetaWidget_icon_fc1654e4",
    keyIcon: "MetaWidget_keyIcon_9becd886",
    openDescr: "MetaWidget_openDescr_5742da79",
    button: "MetaWidget_button_30f4a28a",
    decryptWrapper: "MetaWidget_decryptWrapper_9c7a5172",
    decryptWrapper__anim: "MetaWidget_decryptWrapper__anim_10ad0b8",
    blinkAnim: "MetaWidget_blinkAnim_761dee36",
    decrypt: "MetaWidget_decrypt_2cb3553d",
    decrypt__animShadow: "MetaWidget_decrypt__animShadow_41fc2dbf",
    blinkShadowAnim: "MetaWidget_blinkShadowAnim_761dee36",
    decryptTooltipPositioner: "MetaWidget_decryptTooltipPositioner_7aaaa2fe",
    skipButton: "MetaWidget_skipButton_302fe500",
    openButton: "MetaWidget_openButton_98ed461f",
  },
  ws = ne.resolve("aliases"),
  Is = yt(({ currentIndex: e }) => {
    const { model: t, controls: a } = bs(),
      { breakpoint: s } = Ce(),
      {
        id: n,
        index: o,
        name: i,
        description: l,
        state: r,
        decodePrice: c,
        skipPrice: u,
        keys: m,
        hasProminentReward: p,
      } = t.root.get(),
      [_, h] = (0, Da.useState)(r),
      g = _ === ja.Receive,
      b = _ === ja.InProgress,
      f = _ === ja.Open,
      v = t.computes.isFinal(),
      x = g && c <= m,
      y = ((b || g) && c > 0) || f,
      C = !f && p,
      w = t.reward.get();
    (0, Da.useEffect)(() => {
      if (o === e)
        return We(() => {
          h(r);
        }, 350);
      h(r);
    }, [o, e, r]);
    const I = Ge(
        { value: $t.Small },
        { large: { value: $t.Medium }, extraLarge: { value: $t.Large } },
      ),
      { containerRef: S, tooltipProps: j } = Ca({
        resId: ws.read((e) => e.halloween.shared.Meta("resId")),
        contentId: ws.read(() => R.views.halloween.mono.lobby.tooltips.mission_tooltip("resId")),
      }),
      { containerRef: k, tooltipProps: D } = Ca({
        args: {
          header: R.strings.halloween_tooltips.metaWidget.decryptionDisabled.header(),
          body: R.strings.halloween_tooltips.metaWidget.decryptionDisabled.body(),
        },
        resId: ws.read((e) => e.halloween.shared.Meta("resId")),
        contentId:
          R.views.common.tooltip_window.simple_tooltip_content.SimpleTooltipContent("resId"),
        decoratorId: R.views.common.tooltip_window.tooltip_window.TooltipWindow("resId"),
      });
    return (0, Ta.jsxs)("div", {
      className: (0, ka.default)(Cs.base, Cs[`base__${_}`]),
      lang: R.strings.settings.LANGUAGE_CODE(),
      children: [
        (0, Ta.jsx)("div", {
          ...j,
          ref: S,
          className: (0, ka.default)(Cs.tooltipArea, y && Cs.tooltipArea__withButton),
        }),
        (0, Ta.jsxs)(
          "div",
          {
            className: Cs.header,
            children: [
              (0, Ta.jsx)("div", {
                className: Cs.missionIndex,
                children: v ? (0, Ta.jsx)("div", { className: Cs.kingReward }) : Vt(o),
              }),
              (0, Ta.jsx)("div", { className: Cs.shadow }),
              (0, Ta.jsxs)("div", {
                className: (0, ka.default)(Cs.name, !C && Cs.name__withoutPropminent),
                children: [
                  (0, Ta.jsx)(d, { content: i }),
                  C &&
                    (0, Ta.jsxs)("div", {
                      className: Cs.reward,
                      children: [
                        (0, Ta.jsx)("div", { className: Cs.rewardGlow }),
                        (0, Ta.jsx)(Be, {
                          name: w.name,
                          value: Ft(w),
                          className: Cs.rewardCmp,
                          classNames: { info: Cs.rewardInfo },
                          size: L.Small,
                          special: w.overlayType,
                          image: Gt(w, L.Small),
                          valueType: N(w.name),
                          tooltipArgs: Ut(w, R.aliases.halloween.shared.Meta("resId")),
                        }),
                      ],
                    }),
                ],
              }),
            ],
          },
          `header__${o}`,
        ),
        (0, Ta.jsxs)("div", {
          className: Cs.description,
          children: [
            (0, Ta.jsxs)("div", {
              className: (0, ka.default)(Cs.block, b && Cs.block__show),
              children: [
                (0, Ta.jsx)(
                  Ot,
                  {
                    className: Cs.inprogressDescr,
                    type: Bt.MetaHeading,
                    text: l,
                    alignContent: zt.Center,
                    isTruncationAvailable: !0,
                    shadow: !0,
                    classNames: { extendedText: Cs.inprogressDescrSize },
                  },
                  `${l}${s.name}`,
                ),
                y &&
                  (0, Ta.jsx)(Ta.Fragment, {
                    children:
                      u > 0
                        ? (0, Ta.jsxs)("div", {
                            className: Cs.button,
                            children: [
                              (0, Ta.jsx)(Wt, {
                                className: Cs.skipButton,
                                type: Ht.Secondary,
                                size: I.value,
                                caption: R.strings.halloween_lobby.meta.btn.skip(),
                                onClick: a.skip,
                              }),
                              u &&
                                (0, Ta.jsx)("div", {
                                  className: Cs.skipPriceBlock,
                                  children: (0, Ta.jsx)(ys, { className: Cs.skipPrice, price: u }),
                                }),
                            ],
                          })
                        : (0, Ta.jsxs)("div", {
                            ...D,
                            className: Cs.decryptWrapper,
                            children: [
                              (0, Ta.jsx)(Wt, {
                                className: Cs.decrypt,
                                type: Ht.Secondary,
                                size: I.value,
                                caption: R.strings.halloween_lobby.meta.btn.decrypt(),
                                isDisable: !0,
                              }),
                              (0, Ta.jsx)("div", {
                                className: Cs.decryptTooltipPositioner,
                                ref: k,
                              }),
                            ],
                          }),
                  }),
              ],
            }),
            (0, Ta.jsxs)("div", {
              className: (0, ka.default)(Cs.block, g && Cs.block__show),
              children: [
                (0, Ta.jsx)("div", {
                  className: Cs.receive,
                  children: (0, Ta.jsx)(
                    se,
                    {
                      classMix: Cs.receiveDescr,
                      text: R.strings.halloween_lobby.meta.receive.description(),
                      binding: {
                        keys: m > c ? c : m,
                        decrypt: c,
                        icon: (0, Ta.jsx)("div", {
                          className: Cs.icon,
                          children: (0, Ta.jsx)(Zt, {
                            size: s.weight > Ne.medium.weight ? Kt.C70x70 : Kt.C60x60,
                            gray: !0,
                            className: Cs.keyIcon,
                          }),
                        }),
                      },
                    },
                    `${n}description${s.name}`,
                  ),
                }),
                y &&
                  (0, Ta.jsx)("div", {
                    className: (0, ka.default)(Cs.decryptWrapper, x && Cs.decryptWrapper__anim),
                    children: (0, Ta.jsx)(Wt, {
                      className: (0, ka.default)(Cs.decrypt, x && Cs.decrypt__animShadow),
                      type: Ht.Secondary,
                      size: I.value,
                      caption: R.strings.halloween_lobby.meta.btn.decrypt(),
                      showHintAnim: x,
                      onClick: a.decrypt,
                    }),
                  }),
              ],
            }),
            (0, Ta.jsxs)("div", {
              className: (0, ka.default)(Cs.block, f && Cs.block__show),
              children: [
                (0, Ta.jsx)(
                  se,
                  {
                    classMix: Cs.openDescr,
                    text: R.strings.halloween_lobby.meta.shortStory.$dyn(qt(n)),
                    isTruncationAvailable: !0,
                  },
                  `${n}${s.name}`,
                ),
                (0, Ta.jsx)("div", {
                  className: Cs.button,
                  children: (0, Ta.jsx)(Wt, {
                    type: Ht.Primary,
                    size: s.weight > Ne.medium.weight ? $t.Small : $t.ExtraSmall,
                    caption: R.strings.halloween_lobby.meta.btn.view(),
                    onClick: a.view,
                    className: Cs.openButton,
                  }),
                }),
              ],
            }),
          ],
        }),
      ],
    });
  }),
  Ss = (0, Da.memo)(function (e) {
    const t = R.aliases.halloween.shared.Meta("resId");
    return (0, Ta.jsx)(re, {
      id: t,
      children: (0, Ta.jsx)(gs, {
        options: (0, Da.useMemo)(() => ({ rootId: t }), [t]),
        children: (0, Ta.jsx)(Is, { ...e }),
      }),
    });
  }),
  [js, Ns] = te()(
    ({ observableModel: e }) => ({ root: e.object() }),
    ({ externalModel: e }) => ({ click: e.createCallbackNoArgs("onClick") }),
  ),
  ks = "Content_progressBar_6d348769",
  Ds = "Content_progressBarBackgroundPattern_ab43e759",
  As = "Content_progressBarFillStart_5ed21a58",
  Es = "Content_progressBarBackground_18b0e964",
  Ms = "Content_d6e1c064",
  Ts = "Content_text_905bc69",
  Ps = "Content_base__extraLarge_da09528a",
  Ls = "Content_progress_65862b91",
  Rs = "Content_progressValue_a5a34638",
  Bs = "Content_currentProgress_2960ffa8",
  zs = "Content_counter_a37fea27";
function Os({ currentProgress: e, maxProgress: t, certificates: a, isExtraLarge: n }) {
  return (0, Ta.jsxs)("div", {
    className: I(Ms, n && Ps),
    children: [
      (0, Ta.jsx)(xe, {
        text: R.strings.halloween_lobby.rewardPathCard.name(),
        tooltipDisabled: !0,
        className: Ts,
      }),
      (0, Ta.jsxs)("div", {
        className: Ls,
        children: [
          (0, Ta.jsx)(s, {
            text: R.strings.halloween_lobby.common.progress(),
            params: { value: (0, Ta.jsx)("div", { className: Bs, children: e }), maxValue: t },
            className: Rs,
          }),
          (0, Ta.jsx)(qe, {
            className: ks,
            classNames: { background: Es, backgroundPattern: Ds },
            filledClassNames: { pattern: Ds },
            size: "small",
            value: e,
            maxValue: t,
            children: (0, Ta.jsx)("div", { className: As }),
          }),
        ],
      }),
      a > 0 && (0, Ta.jsx)("div", { className: zs, children: a }),
    ],
  });
}
var $s = "StoryChoice_f76c2a4b",
  Hs = "StoryChoice_text_223ccfad",
  Ws = "StoryChoice_base__extraLarge_76dded8c",
  qs = "StoryChoice_bubble_5aad76db",
  Us = "StoryChoice_bubbleValue_20c2b71f",
  Fs = "StoryChoice_hintAnim1_397ce7b4",
  Gs = "StoryChoice_hintAnim2_6101c0d4",
  Vs = "StoryChoice_hintAnim3_82974eae",
  Ks = "StoryChoice_hintAnim4_301a1e07",
  Zs = "StoryChoice_hintAnim5_cee82d5d";
function Ys({ isExtraLarge: e }) {
  const t = Ge({ bubbleSize: D.small }, { medium: { bubbleSize: D.medium } });
  return (0, Ta.jsxs)("div", {
    className: I($s, e && Ws),
    children: [
      (0, Ta.jsx)(xe, {
        text: R.strings.halloween_lobby.rewardPathCard.storyChoice(),
        tooltipDisabled: !0,
        className: Hs,
      }),
      (0, Ta.jsxs)(Ta.Fragment, {
        children: [
          (0, Ta.jsx)("div", { className: Fs }),
          (0, Ta.jsx)("div", { className: Gs }),
          (0, Ta.jsx)("div", { className: Vs }),
          (0, Ta.jsx)("div", { className: Ks }),
          (0, Ta.jsx)("div", { className: Zs }),
        ],
      }),
      (0, Ta.jsx)("div", {
        className: qs,
        children: (0, Ta.jsx)(tt.Root, {
          children: (0, Ta.jsx)(tt.Value, {
            value: R.strings.menu.header.notificationSign(),
            size: t.bubbleSize,
            classNames: { valueContainer: Us },
          }),
        }),
      }),
    ],
  });
}
var Xs = "small",
  Qs = "medium",
  Js = "large",
  en = (e, t, a) =>
    `R.images.halloween.gui.maps.icons.gsw.${t ? "story_choice_bg" : "reward_path_bg"}_${e}${a ? "_x2" : ""}`,
  tn = "RewardPathCard_77a9fcb1",
  an = "RewardPathCard_base__extraLarge_e8d02dc7",
  sn = "RewardPathCard_video_eec218ae",
  nn = "RewardPathCard_background_e4f37b0a",
  on = "RewardPathCard_video__hovered_67c4e87d",
  ln = "RewardPathCard_video__story_ab339abf",
  rn = R.strings.halloween_tooltips.metaWidget,
  cn = yt(function ({ isExtraLarge: e = !1 }) {
    const { model: t, controls: a } = Ns(),
      { currentProgress: s, maxProgress: n, certificates: o, isStoryChoiceState: i } = t.root.get(),
      l = (0, Da.useRef)(null),
      r = Ge({ size: Xs }, { large: { size: Qs }, extraLarge: { size: Js } }),
      c = ha();
    (0, Da.useEffect)(() => {
      c.applyLayout();
    }, [c]);
    const [d, u] = (0, Da.useState)(!1),
      [m, p] = (0, Da.useState)(!1),
      { containerRef: _, tooltipProps: h } = Ca({
        args: { header: rn.header(), body: i ? rn.storyChoice.body() : rn.body() },
        resId: R.aliases.halloween.shared.RewardPath("resId"),
        contentId:
          R.views.common.tooltip_window.simple_tooltip_content.SimpleTooltipContent("resId"),
        decoratorId: R.views.common.tooltip_window.tooltip_window.TooltipWindow("resId"),
      }),
      g = ((e, t, a) => {
        const s = t ? "story_choice" : "reward_card",
          n = a ? "_ext" : "";
        return R.videos.halloween.reward_card.$dyn(`${s}_${e}${n}`);
      })(r.size, i, e);
    return (
      (0, Da.useEffect)(() => {
        l.current?.play();
      }, [l, g, r.size]),
      (0, Ta.jsx)(da, {
        ...h,
        ref: _,
        id: "reward_path",
        groupId: Ia.rewardPath,
        position: 0,
        onActive: (e) => p(e),
        onHover: (e) => u(e),
        hovered: d,
        active: m,
        onClick: a.click,
        hasFullBorder: !0,
        extraLarge: e,
        children: (0, Ta.jsxs)("div", {
          className: I(tn, e && an),
          children: [
            (0, Ta.jsx)(Me, { path: en(r.size, i, e), className: nn }),
            !ye.isLow() &&
              (0, Ta.jsx)(ue, { ref: l, src: g, className: I(sn, i && ln, d && on), loop: !0 }),
            i
              ? (0, Ta.jsx)(Ys, { isExtraLarge: e })
              : (0, Ta.jsx)(Os, {
                  currentProgress: s,
                  maxProgress: n,
                  certificates: o,
                  isExtraLarge: e,
                }),
          ],
        }),
      })
    );
  });
function dn(e) {
  const t = R.aliases.halloween.shared.RewardPath("resId");
  return (0, Ta.jsx)(re, {
    id: t,
    children: (0, Ta.jsx)(js, {
      options: (0, Da.useMemo)(() => ({ rootId: t }), [t]),
      children: (0, Ta.jsx)(cn, { ...e }),
    }),
  });
}
var [un, mn] = te()(at, ({ externalModel: e }) => ({ click: e.createCallbackNoArgs("onClick") })),
  pn = "ShopCard_b71b7a00",
  _n = "ShopCard_text_ed5aa963",
  hn = "ShopCard_video_4e522707",
  gn = "ShopCard_image_d10af58d",
  bn = "ShopCard_video__hovered_747d5a47",
  fn = "small",
  vn = "medium",
  xn = "large",
  yn = (e, t) => `R.images.halloween.gui.maps.icons.gsw.shop_${e}${t ? "_x2" : ""}`;
function Cn(e) {
  const { controls: t } = mn(),
    [a, s] = (0, Da.useState)(!1),
    [n, o] = (0, Da.useState)(!1),
    { breakpoint: i } = Ce(),
    l = 2 === r(),
    c = (0, Da.useRef)(null),
    d = Ge({ size: fn }, { large: { size: vn }, extraLarge: { size: xn } }),
    u = ha();
  (0, Da.useEffect)(() => {
    u.applyLayout();
  }, [u]);
  const { containerRef: m, tooltipProps: p } = Ca({
      args: {
        header: R.strings.halloween_tooltips.shopWidget.header(),
        body: R.strings.halloween_tooltips.shopWidget.body(),
      },
      resId: R.aliases.halloween.shared.Shop("resId"),
      contentId: R.views.common.tooltip_window.simple_tooltip_content.SimpleTooltipContent("resId"),
      decoratorId: R.views.common.tooltip_window.tooltip_window.TooltipWindow("resId"),
    }),
    _ = R.videos.halloween.shop_card.$dyn(`shop_card_${d.size}`);
  return (
    (0, Da.useEffect)(() => {
      c.current?.play();
    }, [c, _, d.size]),
    (0, Ta.jsx)(da, {
      ...e,
      ...p,
      ref: m,
      id: "shop",
      groupId: Ia.shop,
      position: 0,
      hovered: a,
      active: n,
      onHover: (e) => s(e),
      onActive: (e) => o(e),
      onClick: t.click,
      children: (0, Ta.jsxs)("div", {
        className: pn,
        children: [
          (0, Ta.jsx)(
            se,
            {
              classMix: _n,
              text: R.strings.halloween_lobby.shopCard.name(),
              isTruncationAvailable: !0,
            },
            `shop${i.name}`,
          ),
          (0, Ta.jsx)(Me, { path: yn(d.size, l), className: gn }),
          !ye.isLow() && (0, Ta.jsx)(ue, { ref: c, src: _, className: I(hn, a && bn), loop: !0 }),
        ],
      }),
    })
  );
}
function wn() {
  const e = R.aliases.halloween.shared.Shop("resId");
  return (0, Ta.jsx)(re, {
    id: e,
    children: (0, Ta.jsx)(un, {
      options: (0, Da.useMemo)(() => ({ rootId: e }), [e]),
      children: (0, Ta.jsx)(Cn, {}),
    }),
  });
}
function In(e) {
  return !e.isCompleted || e.animateCompletion;
}
function Sn({ data: e, appearedPredicate: t, previousMap: a }) {
  let s = !0;
  const n = [],
    o = [],
    i = [],
    l = [],
    r = new Set(),
    c = (e, t) => {
      e && n.push({ animationHandler: t });
    };
  if (
    (e.forEach((e) => {
      (r.add(e.id),
        (s = s && e.isCompleted),
        e.isCompleted && e.animateCompletion
          ? i.push(e)
          : e.isCompleted || (t(e) ? l.push(e.id) : o.push(e)));
    }),
    a)
  )
    for (const [d] of a)
      if (!r.has(d)) {
        c(0 === i.length && 0 === l.length, jn);
        break;
      }
  return (
    c(i.length > 0, async (e) => {
      await (async function (e, t, a) {
        const { api: s, play: n } = e,
          o = s.findMaxVisibleRowsInGroup(xa.missions),
          i = H(t, Math.max(o, 1));
        for (let l = 0; l < i.length; l++)
          (await Nn(e, i[l]),
            l !== i.length - 1 &&
              (n(ca.umg_widget_quest_backlog), await s.applyLayout(!1), await q(200)));
        a || (await s.applyLayout(!1));
      })(e, i, l.length > 0);
    }),
    c(l.length > 0, async (t) => {
      await (async function ({ api: e, play: t }, a, s) {
        a.some((t) => e.isDisplaying(t, !1)) && t(ca.umg_widget_quest_backlog);
        (s.forEach(({ id: t }, a) => e.updateCard(t, { position: 10 + a })),
          await e.appear(a, pa.slideUpIn),
          await e.applyLayout(!1));
      })(t, l, e);
    }),
    c(o.length > 0, async (e) => {
      await (async function ({ questCardRefs: e }, t) {
        await Promise.all(
          t.map(async (t) => {
            await e.get(t.id)?.playProgressAnimation();
          }),
        );
      })(e, o);
    }),
    n
  );
}
async function jn({ api: e }) {
  await e.applyLayout(!1);
}
async function Nn({ questCardRefs: e, play: t, api: a }, s) {
  const n = s.some((e) => e.maximumProgress > 0);
  await Promise.all(
    s.map(async ({ id: s }, o) => {
      (await q(400 * o),
        await e.get(s)?.playCompletedAnimation(n),
        await q(500),
        t(ca.umg_widget_quest_disappear),
        await a.disappear(s));
    }),
  );
}
function kn() {
  const { model: e } = ya(),
    t = e.quests.get(),
    a = ha(),
    s = (0, Da.useRef)(new Map()),
    n = (0, Da.useRef)(null),
    o = (0, Da.useRef)([]),
    i = (0, Da.useRef)(!1),
    l = pe(),
    { play: r } = W(),
    d = (0, Da.useRef)(!1),
    u = (0, Da.useRef)([]),
    [m, p] = (0, Da.useState)(() => {
      const { data: e, appeared: a } = (function (e) {
        const t = [],
          a = [];
        return (
          c(e, (e) => {
            (a.push(e.id), t.push(e));
          }),
          { data: t.filter(In), appeared: a }
        );
      })(t);
      return (
        (o.current = a),
        (n.current = t),
        u.current.push(...Sn({ data: e, appearedPredicate: ({ id: e }) => a.includes(e) })),
        e
      );
    }),
    _ = Ze(async (e) => {
      const t = new Set();
      (m.forEach(({ id: e }) => {
        (a.updateCard(e, { visible: !1 }), t.add(e));
      }),
        e.forEach((e) => {
          const s = e.isCompleted && e.animateCompletion;
          a.updateCard(e.id, { visible: t.has(e.id) || s });
        }),
        p(e));
    }),
    h = Ze(async (e) => {
      if (void 0 !== e.data) ((i.current = !1), await _(e.data), u.current.shift());
      else if (
        (await e?.animationHandler?.({ api: a, questCardRefs: s.current, play: r }),
        u.current.shift(),
        u.current.length)
      ) {
        const e = u.current[0];
        await h(e);
      }
    });
  var g, b;
  return (
    (g = l),
    (b = () => {
      (!(function (e, t, a) {
        let s = !0;
        e.forEach((e) => {
          ((s = s && e.isCompleted && !e.animateCompletion),
            a.updateCard(e.id, { visible: !t.includes(e.id) && In(e) }));
        });
      })(m, o.current, a),
        a.enqueue(async () => a.applyLayout()));
    }),
    (0, Da.useEffect)(() => {
      g && b();
    }),
    (0, Da.useEffect)(() => {
      if (!J.structural(t, n.current)) {
        const e = (function (e) {
            return new Map(de(e, (e) => [e.id, e]));
          })(n.current),
          a = (function (e, t) {
            return de(e, (e) => ({
              ...e,
              animateCompletion: !t.get(e.id)?.isCompleted && e.isCompleted,
            })).filter(In);
          })(t, e);
        u.current.push(
          { data: a },
          ...Sn({
            data: a,
            appearedPredicate: (t) =>
              !e.has(t.id) || (!0 === e.get(t.id)?.isCompleted && !t.isCompleted),
            previousMap: e,
          }),
          { data: a.filter(({ isCompleted: e }) => !e) },
        );
      }
      n.current = t;
    }, [t, a]),
    (0, Da.useEffect)(() => {
      i.current = !0;
    }, [m]),
    (0, Da.useEffect)(() => {
      !d.current &&
        i.current &&
        u.current.length &&
        ((d.current = !0),
        a
          .enqueue(async () => await h(u.current[0]))
          .then(() => {
            d.current = !1;
          }));
    }),
    { questData: m, questCardRefs: s }
  );
}
var Dn = yt(function ({ isHangar: e, hasFullBorder: t, className: a }) {
    const { questData: s, questCardRefs: n } = kn();
    return (0, Ta.jsx)("div", {
      className: a,
      children: s.map((a, s) =>
        (0, Ta.jsx)(
          fa,
          {
            index: s,
            isHangar: e,
            hasFullBorder: t && 0 === s,
            ...a,
            ref: (e) => {
              e ? n.current.set(a.id, e) : n.current.delete(a.id);
            },
          },
          a.id,
        ),
      ),
    });
  }),
  An = "HangarWidget_d4b72f13",
  En = "HangarWidget_base__hideRight_36dc2f",
  Mn = "HangarWidget_base__hideLeft_be29a469",
  Tn = "HangarWidget_shadow_72802d07",
  Pn = "HangarWidget_shadow__withQuest_7a94e98f",
  Ln = "HangarWidget_meta_59bf2922",
  Rn = "HangarWidget_cardsBlock_3471e7a5",
  Bn = yt(function ({
    selectedMissionID: e,
    selectedSlideID: t,
    onRewardPathSizeChange: a,
    className: s,
  }) {
    const { model: o } = ya(),
      i = o.quests.get().length,
      l = i > 0,
      r = i < 2,
      c = va({ [Ia.quests]: l }),
      [d, u] = (0, Da.useState)(e);
    return (
      (0, Da.useEffect)(
        () =>
          We(() => {
            u(t);
          }, 600),
        [t],
      ),
      (0, Da.useEffect)(() => {
        a(r);
      }, [r, a]),
      (0, Ta.jsxs)("div", {
        className: I(An, s, d < e && En, d > e && Mn),
        children: [
          (0, Ta.jsx)("div", { className: I(Tn, l && Pn) }),
          (0, Ta.jsx)("div", { className: Ln, children: (0, Ta.jsx)(Ss, { currentIndex: d }) }),
          (0, Ta.jsxs)("div", {
            className: Rn,
            children: [
              (0, Ta.jsx)(dn, { isExtraLarge: r }),
              c.quests && (0, Ta.jsx)(n, { children: (0, Ta.jsx)(Dn, { isHangar: !0 }) }),
              (0, Ta.jsx)(ga, { hasFullBorder: !0 }),
              (0, Ta.jsx)(wn, {}),
            ],
          }),
        ],
      })
    );
  });
function zn(e) {
  const [t, a] = (0, Da.useState)(!1);
  return (0, Ta.jsx)(ht, {
    soundsOverrides: Sa,
    children: (0, Ta.jsx)(_a, {
      children: (0, Ta.jsx)(
        ma,
        {
          groups: t ? ua : ba,
          children: (0, Ta.jsx)(wa, {
            children: (0, Ta.jsx)(Bn, { ...e, onRewardPathSizeChange: (e) => a(e) }),
          }),
        },
        t ? "big" : "small",
      ),
    }),
  });
}
var On = { width: 2560, height: 1440 },
  [$n, Hn] = te()(
    ({ observableModel: e }) => ({
      root: e.object(),
      mainGiftVehicle: e.object("mainGiftVehicle"),
      bestiaryInfo: e.object("bestiaryInfo"),
      currentEnemy: e.object("bestiaryInfo.currentEnemy"),
    }),
    ({ externalModel: e }) => ({
      onAboutClick: e.createCallbackNoArgs("onAboutClick"),
      onPacksClick: e.createCallbackNoArgs("onPacksClick"),
      onTasksClick: e.createCallbackNoArgs("onTasksClick"),
      onViewLoaded: e.createCallbackNoArgs("onViewLoaded"),
      onComparisonClick: e.createCallbackNoArgs("onComparisonClick"),
      onAnomaliesClick: e.createCallbackNoArgs("onAnomaliesClick"),
      onPreview: e.createCallbackNoArgs("onPreview"),
      onSlide: e.createCallback((e) => ({ slide: e }), "onSlide"),
      onWidgetsUpdate: e.createCallback((e) => ({ slide: e }), "onWidgetsUpdate"),
      onEnemyClick: e.createCallbackNoArgs("onEnemyClick"),
      onBestiaryClick: e.createCallbackNoArgs("onBestiaryClick"),
    }),
  ),
  Wn = "EnemyButton_b3bcfe7d",
  qn = "EnemyButton_base__hideRight_624b3351",
  Un = "EnemyButton_base__hideLeft_8c50a8ce",
  Fn = "EnemyButton_bg_7b49cad4",
  Gn = "EnemyButton_wrapper_bea7d156",
  Vn = "EnemyButton_button_9768107f",
  Kn = "EnemyButton_container_65d5a625",
  Zn = "EnemyButton_name_e31faa84",
  Yn = "EnemyButton_role_d5fc8a1c",
  Xn = "EnemyButton_icon_6495000b",
  Qn = yt(function ({ selectedMissionID: e, selectedSlideID: t, onClick: a }) {
    const { model: s } = Hn(),
      { name: n, role: o, isAvailable: i } = s.currentEnemy.get(),
      [l, r] = (0, Da.useState)(e);
    (0, Da.useEffect)(
      () =>
        We(() => {
          r(t);
        }, 600),
      [t],
    );
    const c = Ge({ size: oa.medium }, { large: { size: oa.large } });
    return (0, Ta.jsx)("div", {
      className: (0, ka.default)(Wn, l < e && qn, l > e && Un),
      children:
        Boolean(o) &&
        (0, Ta.jsxs)("div", {
          className: Gn,
          children: [
            (0, Ta.jsx)("div", { className: Fn }),
            (0, Ta.jsx)(
              na,
              {
                tooltipParams: {
                  body: R.strings.halloween_lobby.iconButton.enemyPreview.isDisabled(),
                  disabled: i,
                },
                className: Vn,
                type: sa.preview,
                size: c.size,
                isDisabled: !i,
                onClick: a,
              },
              "" + (i ? "IconButton_disabled" : "IconButton_enabled"),
            ),
            (0, Ta.jsxs)("div", {
              className: Kn,
              children: [
                (0, Ta.jsx)("div", {
                  className: Yn,
                  children: (0, Ta.jsx)(Qt, {
                    type: o,
                    className: Xn,
                    color: Yt.EnemyRole,
                    size: Xt.C48x48,
                  }),
                }),
                (0, Ta.jsx)("div", { className: Zn, children: n }),
              ],
            }),
          ],
        }),
    });
  }),
  Jn = "/hangar/{root}",
  eo = { root: "/hangar/loadout", abilities: "/hangar/loadout/hw_consumables" },
  to = "BackgroundSlice_d8abb8d6",
  ao = "BackgroundSlice_slice_619c7fab";
function so({
  toRight: e = !0,
  sliceIndex: t,
  sliceHeight: a,
  slicePosition: s,
  slideIndex: n,
  backgroundImage: o,
  onSliceAnimationComplete: i,
  classname: l,
}) {
  const [c, d] = ce(() => ({ x: 0 })),
    [u, m] = (0, Da.useState)(n),
    p = r();
  return (
    (0, Da.useEffect)(() => {
      u !== n &&
        (d.set({ x: 0 }),
        d.start({
          from: { x: 0 },
          to: { x: p * (e ? -On.width : On.width) },
          delay: Math.floor(20 * Math.random()) * t,
          config: { duration: 600, easing: b.easeInOutCubic },
          onRest: (e) => {
            !0 === e.finished && (i(), m(n));
          },
        }));
    }, [d, u, i, p, t, n, e]),
    (0, Ta.jsx)(ae.div, {
      className: I(to, l),
      style: c,
      children: (0, Ta.jsx)("div", {
        className: ao,
        style: {
          height: `${a + 2}rem`,
          backgroundImage: `${o}`,
          backgroundPosition: `0rem -${s}rem`,
          margin: "-1rem 0rem",
          transform: "translateY(-1px)",
        },
      }),
    })
  );
}
var no = "Background_d167dfc7",
  oo = "Background_contentScale_32adc7b9",
  io = "Background_contentScale__switch_1a46afa2",
  lo = "Background_4d5c417",
  ro = "Background_background__hide_e9f8dfb3",
  co = "Background_videoSlide_fe41a7db",
  uo = "Background_videoSlide__hide_e9f8dfb3",
  mo = "Background_videoSlide__show_7f14a6c7",
  po = "Background_videoBg_1da66b88",
  _o = "R.images.halloween.gui.maps.icons.backgrounds.garage";
function ho({
  activeIndex: e,
  maxCount: t,
  isCompleted: a,
  isOpened: s,
  isAnimationPlaying: n,
  onAnimationCompleted: o,
  className: i,
}) {
  const l = aa(On, 1),
    [r, c] = (0, Da.useState)(e),
    [d, u] = (0, Da.useState)(s),
    m = r - 1,
    p = r + 1,
    _ = r < e,
    h = (() => {
      const e = [],
        t = [];
      let a = 0;
      for (let s = 0; s < 23; s++) t.push(Math.floor(Math.random() * On.height));
      t.sort((e, t) => e - t);
      for (const s of t) (e.push({ yPos: a, sliceHeight: s - a }), (a = s));
      return (e.push({ yPos: a, sliceHeight: On.height - a }), e);
    })(),
    g = (0, Da.useRef)(0),
    b = (e, n) => {
      if (0 === e) return "";
      const o = (n ? d : s) ? "opened" : "default";
      return e === t && a ? `url('${_o}.${o}.bg_final')` : `url('${_o}.${o}.bg_${e}')`;
    },
    f = (0, Da.useCallback)(() => {
      const t = h.length ? h.length : 0;
      (g.current++, g.current >= t && (o && o(), c(e), u(s), (g.current = 0)));
    }, [e, o, s]);
  return (0, Ta.jsxs)("div", {
    className: I(no, i),
    children: [
      (0, Ta.jsxs)("div", {
        className: I(oo, n && io),
        style: { transform: `translate(-50%, -50%) scale(${l})` },
        children: [
          0 !== m &&
            (0, Ta.jsx)("div", { className: I(lo, ro), style: { backgroundImage: b(m, !0) } }),
          (0, Ta.jsx)("div", { className: lo, style: { backgroundImage: b(e, !1) } }),
          p < t &&
            r === e &&
            (0, Ta.jsx)("div", { className: I(lo, ro), style: { backgroundImage: b(p, !0) } }),
          h.map((t, a) =>
            (0, Ta.jsx)(
              "div",
              {
                children: (0, Ta.jsx)(so, {
                  sliceIndex: a,
                  sliceHeight: t.sliceHeight,
                  slicePosition: t.yPos,
                  toRight: _,
                  slideIndex: e,
                  backgroundImage: b(r, !0),
                  onSliceAnimationComplete: f,
                }),
              },
              `bgSliceHorizontal_${a}`,
            ),
          ),
        ],
      }),
      (0, Ta.jsx)(ta, {
        src: R.videos.halloween.slide_overlay(),
        className: I(co, n ? mo : uo),
        isPaused: !n,
        isFlipped: _,
      }),
      (0, Ta.jsx)(ta, { src: R.videos.halloween.vhs_whitenoise(), className: po }),
    ],
  });
}
var go = "optDevices",
  bo = "shells",
  fo = "consumables",
  vo = "battleBoosters",
  xo = "battleAbilities",
  yo = "equipment",
  Co = "instructions",
  wo = "shells",
  Io = "consumables",
  So = {
    Firepower: "firepower",
    Survivability: "survivability",
    Stealth: "stealth",
    Mobility: "mobility",
  },
  jo = "gunner_smoothTurret",
  No = "driver_virtuoso",
  ko = "driver_smoothDriving",
  Do = "fireFighting",
  Ao = "naturalCover",
  Eo = "gunner_rancorous",
  Mo = "loader_pedant",
  To = "commander_practical",
  Po = "commander_enemyShotPredictor",
  Lo = (function (e) {
    return (
      (e.UNKNOWN = "unknown"),
      (e.MAGAZINE_GUN = "magazineGun"),
      (e.AUTO_LOADER_GUN = "autoLoaderGun"),
      (e.AUTO_LOADER_GUN_BOOST = "autoLoaderGunBoost"),
      (e.DAMAGE_MUTABLE = "damageMutable"),
      (e.DUAL_GUN = "dualGun"),
      (e.HYDRAULIC_CHASSIS = "hydraulicChassis"),
      (e.TRACK_WITHIN_TRACK = "trackWithinTrack"),
      (e.SIEGE_MODE = "siegeMode"),
      (e.STUN = "stun"),
      (e.HYDRAULIC_WHEELED_CHASSIS = "hydraulicWheeledChassis"),
      (e.TURBOSHAFT_ENGINE = "turboshaftEngine"),
      (e.ROCKET_ACCELERATION = "rocketAcceleration"),
      (e.TARGET_DESIGNATOR = "targetDesignator"),
      (e.DUAL_ACCURACY = "dualAccuracy"),
      (e.AUTO_SHOOT_GUN = "autoShootGun"),
      (e.TWIN_GUN = "twinGun"),
      (e.IMPROVED_RAMMING = "improvedRamming"),
      (e.CONCENTRATION_MODE = "concentrationMode"),
      (e.BATTLE_FURY = "battleFury"),
      (e.EXTRA_SHOT_CLIP = "extraShotClip"),
      (e.POWER_MODE = "powerMode"),
      (e.ACCURACY_STACKS = "accuracyStacks"),
      (e.SUPPORT_WEAPON = "supportWeapon"),
      (e.PILLBOX_SIEGE_MODE = "pillboxSiegeMode"),
      (e.CHARGEABLE_BURST = "chargeableBurst"),
      (e.SHELL_CALIBRATION = "shellCalibration"),
      (e.RECHARGEABLE_NITRO = "rechargeableNitro"),
      (e.CHARGE_SHOT = "chargeShot"),
      (e.OVERHEAT_STACKS = "overheatStacks"),
      (e.SIGHT_POINTER = "sightPointer"),
      (e.STANCE_DANCE = "stanceDance"),
      (e.AUTORELOADER_SURGE = "autoreloaderSurge"),
      (e.STATIONARY_RELOAD = "stationaryReload"),
      (e.OVERHEAT_GUN = "overheatGun"),
      (e.HEATING_ZONES_GUN = "heatingZonesGun"),
      (e.LOW_CHARGE_SHOT = "lowChargeShot"),
      (e.STAGED_JET_BOOSTERS = "stagedJetBoosters"),
      (e.PROPELLANT_GUN = "propellantAfterburnerGun"),
      (e.WHEELED_DASH = "wheeledDash"),
      (e.AUXILIARY_ROCKET_LAUNCHER = "auxiliaryRocketLauncher"),
      (e.SHELL_PARAMS_SWITCHER = "shellParamsSwitcher"),
      (e.BUSTLE_FEED = "bustleFeed"),
      (e.COMBAT_THROTTLE = "combatThrottle"),
      e
    );
  })({}),
  Ro = (function (e) {
    return ((e.UNDEFINED = "undefined"), (e.SILVER = "silver"), (e.GOLD = "gold"), e);
  })({});
function Bo(e) {
  const t = ie(e, 0);
  if (t) return { name: t.name, special: t.rank === Ro.GOLD };
}
function zo(e) {
  return {
    currentIndex: e.currentIndex,
    id: e.groupId,
    totalCount: e.totalCount,
    states: de(e.setupSelector.states, (e) => e),
    switchEnabled: e.setupSelector.isSwitchEnabled,
    prebattleSwitchDisabled: e.setupSelector.isPrebattleSwitchDisabled,
    sections: de(e.sections, Oo),
  };
}
function Oo(e) {
  return {
    type: e.type,
    name: e.name,
    vehicle: e.vehicle,
    vehicleType: e.vehicleType,
    newItemsCount: e.newItemsCount,
    slots: de(e.slots, $o),
    warning: e.isWarning,
  };
}
function $o(e) {
  return {
    id: e.id,
    intCD: e.intCD,
    keyName: e.keyName,
    imageName: e.imageName,
    withAttention: e.withAttention,
    installed: e.isInstalled,
    mountedMoreThanOne: e.isMountedMoreThanOne,
    itemInstalledSetupIdx: e.itemInstalledSetupIdx,
    overlayType: e.overlayType,
    highlightType: e.highlightType,
    level: e.level,
    count: e.count,
    specialization: e.specializations
      ? ((t = e.specializations.specializations),
        (a = e.specializations.isDynamic),
        de(t, (e) =>
          (function (e, t) {
            return { dynamic: t, type: e.name, active: e.isCorrect, clickable: e.isClickable };
          })(e, a),
        ))[0]
      : void 0,
    mainMechanic: e.mechanics ? Bo(e.mechanics) : void 0,
  };
  var t, a;
}
var Ho = [vo, xo],
  [Wo, qo] = te("AmmunitionPanelModel")(
    (e) => {
      const { observableModel: t } = e,
        a = {
          ...t.primitives({
            isDisabled: "disabled",
            selectedSlot: "selectedSlot",
            selectedSection: "selectedSection",
            vehicleId: "vehicleId",
            hasVehSkillTree: "hasVehSkillTree",
          }),
          groups: t.arrayClone("groups"),
        },
        s = m.structural(() => x(a.groups.get(), (e.initial && e.initial.fromGroupModel) ?? zo)),
        n = m.primitive((e, t) => a.selectedSlot.get() === e && a.selectedSection.get() === t),
        o = m.primitive((e) => a.selectedSection.get() === e),
        i = m.primitive((e) => {
          for (const t of s()) for (const a of t.sections) if (a.name === e) return a.slots.length;
          return 0;
        }),
        l = m.primitive((e) => !Ho.includes(e) && o(e) && i(e) > 1),
        r = m.structural(() => {
          const e = a.selectedSection.get(),
            t = a.selectedSlot.get();
          for (const a of s())
            for (const s of a.sections) {
              if (s.name !== e) continue;
              const n = s.slots[t];
              return n && -1 !== n.intCD
                ? { groupIndex: a.currentIndex, item: { intCD: n.intCD, type: n.overlayType } }
                : { groupIndex: a.currentIndex, item: void 0 };
            }
          return { groupIndex: 0, item: void 0 };
        }),
        c = m.model((e) => s()[e]),
        d = m.model((e, t) => c(e)?.sections[t]),
        u = m.model((e, t, a) => d(e, t)?.slots[a]);
      return {
        ...a,
        vehicleId: m.primitive(() => {
          const e = a.vehicleId.get();
          return "" === e ? void 0 : e;
        }),
        computes: {
          groups: s,
          isSlotSelected: n,
          isSectionSelected: o,
          selectedSlotGroupAndItem: r,
          groupByIndex: c,
          sectionByIndex: d,
          slotByIndex: u,
          sectionSize: i,
          sectionDraggable: l,
        },
      };
    },
    ({ externalModel: e }) => ({
      changePreset: e.createCallback(
        (e) => ({ args: JSON.stringify({ ...e }) }),
        "onChangeSetupIndex",
      ),
      openSlotSpecDialog: e.createCallbackNoArgs("onOpenSlotSpecDialog"),
    }),
    { initial: (e) => e },
  ),
  [Uo, Fo] = te("AmmunitionPanelModel")(
    ({ observableModel: e }) => {
      const t = {
          ...e.primitives({
            isDisabled: "disabled",
            selectedSlot: "selectedSlot",
            selectedSection: "selectedSection",
            vehicleId: "vehicleId",
            accelerationKeyName: "accelerationKeyName",
            accelerationIntCD: "accelerationIntCD",
          }),
          groups: e.arrayClone("groups"),
        },
        a = dt(() => x(t.groups.get(), zo)),
        s = m.primitive((e, a) => t.selectedSlot.get() === e && t.selectedSection.get() === a),
        n = m.primitive((e) => t.selectedSection.get() === e),
        o = m.primitive((e) => {
          for (const t of a()) for (const a of t.sections) if (a.name === e) return a.slots.length;
          return 0;
        }),
        i = m.primitive((e) => n(e) && o(e) > 1),
        l = m.structural(() => {
          const e = t.selectedSection.get(),
            s = t.selectedSlot.get();
          for (const t of a())
            for (const a of t.sections) {
              if (a.name !== e) continue;
              const n = a.slots[s];
              return n && -1 !== n.intCD
                ? { groupIndex: t.currentIndex, item: { intCD: n.intCD, type: n.overlayType } }
                : { groupIndex: t.currentIndex, item: void 0 };
            }
          return { groupIndex: 0, item: void 0 };
        }),
        r = m.model((e) => a()[e]),
        c = m.model((e, t) => r(e)?.sections[t]),
        d = m.model((e, t, a) => c(e, t)?.slots[a]);
      return {
        ...t,
        vehicleId: m.primitive(() => {
          const e = t.vehicleId.get();
          return "" === e ? void 0 : e;
        }),
        computes: {
          groups: a,
          isSlotSelected: s,
          isSectionSelected: n,
          selectedSlotGroupAndItem: l,
          groupByIndex: r,
          sectionByIndex: c,
          slotByIndex: d,
          sectionSize: o,
          sectionDraggable: i,
        },
      };
    },
    ({ externalModel: e }) => ({
      changePreset: e.createCallback(
        (e) => ({ args: JSON.stringify({ ...e }) }),
        "onChangeSetupIndex",
      ),
      openSlotSpecDialog: e.createCallbackNoArgs("onOpenSlotSpecDialog"),
    }),
  ),
  Go = "undo",
  Vo = "cancel",
  Ko = "swap",
  Zo = "drag_drop";
function Yo(e) {
  return { currency: e.name, value: e.value, enough: e.isEnough };
}
function Xo(e) {
  return de(e, Yo);
}
function Qo(e) {
  return {
    priceID: e.priceID,
    price: Xo(e.price),
    previousPrice: Xo(e.defPrice),
    discount: Xo(e.discount),
  };
}
var Jo = (e) => ({
  canConfirm: e.canAccept,
  canCancel: e.canCancel,
  autoRenewalEnabled: e.isAutoRenewalEnabled,
  disabled: e.isDisabled,
  totalItemsInStorage: e.totalItemsInStorage,
  prices: x(e.price, (e) => Yo(e)),
});
function ei(e) {
  return { name: e.name, correct: e.isCorrect, clickable: e.isClickable };
}
function ti(e) {
  return { dynamic: e.isDynamic, specializations: ((t = e.specializations), de(t, ei)) };
  var t;
}
function ai(e) {
  return {
    name: e.name,
    intCD: e.intCD,
    imageName: e.imageName,
    itemsInStorage: e.itemsInStorage,
    itemsInVehicle: e.itemsInVehicle,
    itemTypeID: e.itemTypeID,
    mounted: e.isMounted,
    mountedMoreThanOne: e.isMountedMoreThanOne,
    mountedInOtherSetup: e.isMountedInOtherSetup,
    disabled: e.isDisabled,
    visible: e.isVisible,
    installedSlotId: e.installedSlotId,
    itemInstalledSetupIdx: e.itemInstalledSetupIdx,
    itemInstalledSetupSlotIdx: e.itemInstalledSetupSlotIdx,
    locked: e.isLocked,
    freeToDemount: e.isFreeToDemount,
    lockReason: e.lockReason,
    overlayType: e.overlayType,
    highlightType: e.highlightType,
    price: Qo(e.price),
    specializations: ti(e.specializations),
  };
}
function si(e) {
  return {
    ...ai(e),
    description: e.description,
    builtIn: e.isBuiltIn,
    itemName: e.itemName,
    buyMoreDisabled: e.isBuyMoreDisabled,
  };
}
var [ni, oi] = te("ConsumablesModel")(
    ({ observableModel: e }) => {
      const t = {
          ...e.primitives(["autoloadEnabled", "hasChanges"]),
          consumables: e.arrayClone("consumables"),
          dealData: e.transform((e) => Jo(e), "dealPanel"),
          prices: e.transform((e) => de(e, Yo), "dealPanel.price"),
        },
        a = m.structural(() => {
          const e = t.dealData.get(),
            a = [];
          return (
            e.totalItemsInStorage > 0 &&
              a.push({ enough: !0, currency: "depot", value: e.totalItemsInStorage }),
            t.prices.get().forEach((e) => a.push(e)),
            { ...e, prices: a }
          );
        }),
        s = m.primitive(() => x(t.consumables.get(), si)),
        n = m.model((e) => P(s(), (t) => t.intCD === e));
      return { ...t, computes: { consumables: s, consumableById: n, dealData: a } };
    },
    ({ model: e, externalModel: t }) => ({
      unmount: t.createCallback(
        (e, t) => ({ intCD: e, currentSlotId: t, actionType: Go, type: fo }),
        "onSlotAction",
      ),
      actionSlot: t.createCallback((e) => ({ ...e, type: fo }), "onSlotAction"),
      swapSlots: t.createCallback((e) => ({ ...e, actionType: Zo }), "onSlotAction"),
      confirm: t.createCallbackNoArgs("dealPanel.onDealConfirmed"),
      cancel: t.createCallbackNoArgs("dealPanel.onDealCancelled"),
      toggleAutoRenewal: t.createCallback(
        () => ({ value: !e.dealData.get().autoRenewalEnabled }),
        "dealPanel.onAutoRenewalChanged",
      ),
    }),
  ),
  ii = "notMounted",
  li = "mounted",
  ri = "mountedMoreThanOne";
function ci(e) {
  return e.isMounted ? (e.isMountedMoreThanOne ? ri : li) : ii;
}
function di(e, t) {
  let a = [];
  const s = ie(e, 0);
  return (
    s &&
      (a = v(s.values, (e) => !!e.mechanic && e.mechanic !== Lo.UNKNOWN).map(
        ({ mechanic: e, state: a }) => {
          const s = P(t, (t) => t.mechanic === e),
            n = s ? s.columnConfigs : void 0,
            o = n ? P(n, (e) => e.state === a) : void 0;
          return {
            mechanic: e,
            state: a,
            substate: o?.subtype || void 0,
            withTextLabel: o?.withTextLabel || !1,
            withRichTooltip: o?.withRichTooltip ?? !0,
          };
        },
      )),
    {
      columnDefs: a,
      rows: de(e, ({ paramName: e, values: t, metricValue: a }) => ({
        paramName: e,
        metricValue: a,
        values: de(t, ({ state: e, value: t, mechanic: a }) => ({
          state: e,
          value: t,
          mechanic: a,
        })),
      })).filter((e) => e.values.every(({ value: e }) => e)),
    }
  );
}
function ui(e) {
  return {
    intCD: e.intCD,
    inDepotCount: e.inDepotCount,
    itemsInVehicle: e.itemsCount,
    count: e.count,
    value: e.value,
    delta: e.delta,
    type: e.type,
    kind: e.kind,
    boughtCount: e.buyCount,
    itemInstalledSetupIndex: e.itemInstalledSetupIdx,
    mountedState: ci(e),
    properties: di(e.propertiesList, e.mechanicsSubtypes),
    itemPrice: Yo(e.itemPrice),
    price: Qo(e.price),
    totalPrice: Qo(e.totalPrice),
    mainMechanic: Bo(e.mechanics),
  };
}
var mi = ["shellCalibration"],
  pi = ["shellCalibration", "lowChargeShot"],
  [_i, hi] = te("ShellsProvider")(
    ({ observableModel: e }) => {
      const t = {
          ...e.primitives({
            ammoMaxSize: "ammoMaxSize",
            installedCount: "installedCount",
            clip: "clip",
            hasChanges: "modified",
            autoloadEnabled: "autoloadEnabled",
          }),
          shells: e.transform((e) => de(e, ui), "shells"),
          dealData: e.transform((e) => Jo(e), "dealPanel"),
          prices: e.transform((e) => de(e, Yo), "dealPanel.price"),
        },
        a = m.structural(() => {
          const e = t.dealData.get(),
            a = [];
          return (
            e.totalItemsInStorage > 0 &&
              a.push({ enough: !0, currency: "depot", value: e.totalItemsInStorage }),
            t.prices.get().forEach((e) => a.push(e)),
            { ...e, prices: a }
          );
        }),
        s = m.model((e) => ie(t.shells.get(), e)),
        n = m.model((e) => P(t.shells.get(), (t) => t.intCD === e)),
        o = m.primitive((e) => void 0 !== P(t.shells.get(), (t) => t.intCD === e)),
        i = m.shallow(() => de(t.shells.get(), (e) => e.intCD)),
        l = m.primitive(() =>
          _e(
            t.shells.get(),
            ({ properties: e }) =>
              e.columnDefs.length > 0 && e.columnDefs.every((e) => !mi.includes(e.mechanic)),
          ),
        ),
        r = m.primitive(() =>
          Math.max(...de(t.shells.get(), ({ properties: e }) => e.rows.length)),
        );
      return {
        ...t,
        computes: {
          shell: s,
          shellByIntCD: n,
          shellExist: o,
          shellIDs: i,
          dealData: a,
          properties: { hasColumns: l, maxCount: r },
        },
      };
    },
    ({ model: e, externalModel: t }) => ({
      swapSlots: t.createCallback((e) => ({ ...e, actionType: Ko }), "onSlotAction"),
      updateShellCount: t.createCallback((e, t) => ({ intCD: e, newCount: t }), "onShellUpdate"),
      confirm: t.createCallbackNoArgs("dealPanel.onDealConfirmed"),
      cancel: t.createCallbackNoArgs("dealPanel.onDealCancelled"),
      toggleAutoRenewal: t.createCallback(
        () => ({ value: !e.dealData.get().autoRenewalEnabled }),
        "dealPanel.onAutoRenewalChanged",
      ),
    }),
  );
function gi(e) {
  switch (e) {
    case gt.extraSmall:
    case gt.small:
    case gt.medium:
      return gt.small;
    case gt.large:
      return gt.large;
    default:
      return gt.extraLarge;
  }
}
var bi = (e) => {
  switch (e) {
    case gt.extraSmall:
    case gt.small:
    case gt.medium:
      return ee.s48x48;
    case gt.large:
      return ee.s64x64;
    default:
      return ee.s80x80;
  }
};
function fi(e) {
  switch (e) {
    case "battleBooster":
      return ct.directiveBooster;
    case "battleBoosterReplace":
      return ct.directiveSubstitute;
    case "builtInEquipment":
      return ct.builtInEquipment;
    case "equipmentPlus":
      return ct.improved;
    case "equipmentModernized":
      return ct.experimental;
    case "equipmentTrophy":
    case "equipmentTrophyBasic":
    case "equipmentTrophyUpgraded":
      return ct.trophy;
    default:
      return ct.none;
  }
}
var vi = (0, Da.createContext)(void 0),
  xi = (0, Da.createContext)(() => {}),
  yi = ({ children: e }) => {
    const [t, a] = (0, Da.useState)(void 0),
      s = (0, Da.useCallback)((e) => {
        a(e);
      }, []);
    return (0, Ta.jsx)(xi.Provider, {
      value: s,
      children: (0, Ta.jsx)(vi.Provider, { value: t, children: e }),
    });
  },
  Ci = () => (0, Da.useContext)(vi);
function wi(e, t, a, s) {
  const n = e.left + t + a + s / 2,
    o = e.top + e.height / 2;
  let i = document.elementFromPoint(n, o);
  for (; i;) {
    if (i.hasAttribute("data-drop-item")) return Number(i.getAttribute("data-drop-item"));
    if (i.hasAttribute("data-drop-area")) return null;
    i = i.parentElement;
  }
}
var Ii = yt(function ({ children: e, itemPosition: t, itemWidth: a, onDrop: s }) {
    const n = (0, Da.useRef)(null),
      o = (0, Da.useRef)(null),
      i = u(),
      l = i.state,
      c = r(),
      d = (0, Da.useContext)(xi);
    function m(e, s) {
      const n = s.getBoundingClientRect(),
        o = n.left,
        i = n.right,
        r = t - o,
        c = i - t,
        d = e - l.startPoint.x;
      return d > c - a
        ? { left: r, x: c - a }
        : d < o - t
          ? { left: r, x: o - t }
          : { left: r, x: d };
    }
    return (
      (0, Da.useEffect)(() => {
        if (i.item)
          return (
            window.addEventListener("keydown", e),
            () => {
              window.removeEventListener("keydown", e);
            }
          );
        function e(e) {
          e.keyCode === K.ESCAPE && i.reset();
        }
      }, [i.item, i.reset]),
      (0, Da.useEffect)(() => {
        const e = n.current;
        if (!e || null === l.virtualItem || !l.dragArea) return;
        const t = l.dragArea.getBoundingClientRect(),
          { x: r, left: u } = m(l.currentPosition.x * c + l.startPoint.x, l.dragArea);
        ((e.style.left = `${u}px`), (e.style.transform = `translateX(${Math.trunc(r)}px)`));
        const p = wi(t, u, r, a) ?? null;
        return (
          o.current != p && null !== p && ((o.current = p), d(p)),
          new Ee()
            .add(
              lt.up(([e]) => {
                (i.emitter.trigger("onDrop", e, l.dragArea, i.item, l), i.reset());
              }),
            )
            .add(
              lt.move(([e, s]) => {
                if ("outside" === s) {
                  const s = n.current;
                  if (!s || null === l.virtualItem || !l.dragArea) return;
                  const { x: i, left: r } = m(e.x, l.dragArea),
                    c = wi(t, r, i, a) ?? null;
                  (o.current !== c && null !== c && ((o.current = c), d(c)),
                    (s.style.transform = `translateX(${Math.trunc(i)}px)`));
                }
              }),
            )
            .add(
              i.emitter.on("onDrop", (e, n, o) => {
                if (!l.dragArea) return;
                d(void 0);
                const { left: i, x: r } = m(e.x, l.dragArea),
                  c = wi(t, i, r, a) ?? null,
                  u = Number(o?.getAttribute("data-drop-item")) ?? null;
                null !== u && null !== c && u !== Number(c) && s?.(Number(c), u);
              }),
            ).dispose
        );
      }, [l.currentPosition.x, l.dragArea, l.virtualItem, i.emitter, t, a, s, m]),
      e && null !== l.virtualItem && l.dragArea
        ? (0, Ta.jsx)("div", {
            ref: n,
            style: { position: "absolute", top: 0, cursor: "grabbing", pointerEvents: "none" },
            children: e(Number(l.virtualItem.getAttribute("data-drop-item"))),
          })
        : null
    );
  }),
  Si = yt(function ({ children: e, onDrop: t, renderDraggingItem: a, dataDropArea: s }) {
    const n = u(),
      o = (0, Da.useRef)(null),
      [i, l] = (0, Da.useState)(0),
      [r, c] = (0, Da.useState)(0);
    return (
      (0, Da.useEffect)(
        () =>
          n.emitter.on("onStart", (e, t, a) => {
            (l(a.getBoundingClientRect().left), c(a.getBoundingClientRect().width));
          }),
        [n],
      ),
      (0, Ta.jsxs)(Ta.Fragment, {
        children: [
          (0, Ta.jsx)(Q.DragArea, {
            ref: o,
            children: (0, Ta.jsx)(Q.DropArea, { "data-drop-area": s, children: e }),
          }),
          (0, Ta.jsx)(Q.VirtualItem, {
            container: o.current ?? void 0,
            children: (0, Ta.jsx)(Ii, { itemPosition: i, itemWidth: r, onDrop: t, children: a }),
          }),
        ],
      })
    );
  }),
  ji = function ({ children: e, onDrop: t, renderDraggingItem: a, dataDropArea: s }) {
    return (0, Ta.jsx)(Q, {
      children: (0, Ta.jsx)(Si, { onDrop: t, renderDraggingItem: a, dataDropArea: s, children: e }),
    });
  },
  Ni = "DragAndDrop_draggableItem_e7d74af8",
  ki = "DragAndDrop_draggableItem__dragging_b849a88",
  Di = "DragAndDrop_draggableItem__undraggable_7c876195",
  Ai = "DragAndDrop_draggableItem__locked_2b4f1390",
  Ei = yt(function ({ itemId: e, undraggable: t, className: a, dataDropArea: s, children: n }) {
    const o = u();
    oe(o.reset, [o]);
    const i = o.item?.getAttribute("data-drop-item"),
      l = void 0 !== i,
      r = ve(i) && "" !== i && Number(i) === e;
    return (0, Ta.jsx)("div", {
      "data-drop-item": e,
      className: I(Ni, l && Ai, t && Di, r && ki, a),
      "data-drop-area": s,
      onMouseDown: (e) => {
        e.button === pt.left && (o.start(e), e.preventDefault());
      },
      children: n,
    });
  });
function Mi(e) {
  return { valueKey: e.valueKey, value: e.value, valueType: e.valueType, debuff: e.isDebuff };
}
function Ti(e) {
  return { localeName: e.localeName, values: ((t = e.values), de(t, Mi)) };
  var t;
}
function Pi(e) {
  return { title: e.title, items: de(e.items, Ti) };
}
function Li(e) {
  return {
    ...ai(e),
    withDescription: e.withDescription,
    trophy: e.isTrophy,
    modernized: e.isModernized,
    upgradable: e.isUpgradable,
    effect: e.effect,
    level: e.level,
    destroyTooltipBodyPath: e.destroyTooltipBodyPath,
    activeSpecsMask: e.activeSpecsMask,
    bonuses: Pi(e.bonuses),
  };
}
var [Ri, Bi] = te("EquipmentsModel")(
  ({ observableModel: e }) => {
    const t = {
        standardEquipments: e.transform((e) => de(e, Li), "simpleEquipments"),
        improvedEquipments: e.transform((e) => de(e, Li), "deluxEquipments"),
        bountyEquipments: e.transform((e) => de(e, Li), "trophyEquipments"),
        experimentalEquipments: e.transform((e) => de(e, Li), "modernizedEquipments"),
        ...e.primitives(["hasChanges", "equipCoinCount"]),
        ...e.primitives({
          hasModernizedEquipmentToDisassemble: "hasExperimentalEquipmentToDisassemble",
        }),
        standardEquipmentsFilters: vt.box(new Set()),
        dealData: e.transform((e) => Jo(e), "dealPanel"),
        prices: e.transform((e) => de(e, Yo), "dealPanel.price"),
      },
      a = m.structural(() => {
        const e = t.dealData.get(),
          a = [];
        return (
          e.totalItemsInStorage > 0 &&
            a.push({ enough: !0, currency: "depot", value: e.totalItemsInStorage }),
          t.prices.get().forEach((e) => a.push(e)),
          { ...e, prices: a }
        );
      }),
      s = m.model((e, a) => P(t[a].get(), (t) => t.intCD === e)),
      n = m.model(() => {
        const e = t.standardEquipmentsFilters.get(),
          a = t.standardEquipments.get();
        return 0 === e.size
          ? a
          : (function (e, t) {
              return v(e, (e) => e.specializations.specializations.some((e) => t.has(e.name)));
            })(a, e);
      });
    return {
      ...t,
      computes: { equipmentsItemByIntCD: s, dealData: a, filteredStandardEquipments: n },
    };
  },
  ({ model: e, externalModel: t }) => ({
    unmount: t.createCallback(
      (e, t) => ({ intCD: e, currentSlotId: t, actionType: Go, type: go }),
      "onSlotAction",
    ),
    actionSlot: t.createCallback((e) => ({ ...e, type: go }), "onSlotAction"),
    swapSlots: t.createCallback((e) => ({ ...e, actionType: Zo }), "onSlotAction"),
    getMoreCurrency: t.createCallbackNoArgs("onGetMoreCurrency"),
    confirm: t.createCallbackNoArgs("dealPanel.onDealConfirmed"),
    cancel: t.createCallbackNoArgs("dealPanel.onDealCancelled"),
    toggleAutoRenewal: t.createCallback(
      () => ({ value: !e.dealData.get().autoRenewalEnabled }),
      "dealPanel.onAutoRenewalChanged",
    ),
    updateFilters: Ct((t) => {
      const a = e.standardEquipmentsFilters.get();
      (a.has(t) ? a.delete(t) : a.add(t), e.standardEquipmentsFilters.set(a));
    }),
    clearFilters: Ct(() => {
      e.standardEquipmentsFilters.set(new Set());
    }),
  }),
);
function zi(e) {
  return {
    ...ai(e),
    description: e.description,
    buyMoreVisible: e.isBuyMoreVisible,
    buyMoreDisabled: e.isBuyMoreDisabled,
  };
}
var [Oi, $i] = te("InstructionsModel")(
    (e) => {
      const t = {
          crewInstructions: e.observableModel.arrayClone("crewInstructions"),
          equipmentInstructions: e.observableModel.arrayClone("equipmentInstructions"),
        },
        a = {
          ...e.observableModel.primitives(["autoloadEnabled", "hasChanges"]),
          crewInstructions: vt.box({}),
          crewInstructionsArray: vt.box([]),
          equipmentInstructions: vt.box({}),
          equipmentInstructionsArray: vt.box([]),
          dealData: e.observableModel.transform((e) => Jo(e), "dealPanel"),
          prices: e.observableModel.transform((e) => de(e, Yo), "dealPanel.price"),
        };
      (e.cleanup(
        xt(() => {
          const e = k(t.crewInstructions.get(), (e, t) => ((e[t.intCD] = zi(t)), e), {});
          wt(() => a.crewInstructions.set(e));
        }),
      ),
        e.cleanup(
          xt(() => {
            const e = k(t.equipmentInstructions.get(), (e, t) => ((e[t.intCD] = zi(t)), e), {});
            wt(() => a.equipmentInstructions.set(e));
          }),
        ),
        e.cleanup(
          xt(() => {
            const e = x(t.equipmentInstructions.get(), (e) => zi(e));
            wt(() => a.equipmentInstructionsArray.set(e));
          }),
        ),
        e.cleanup(
          xt(() => {
            const e = x(t.crewInstructions.get(), (e) => zi(e));
            wt(() => a.crewInstructionsArray.set(e));
          }),
        ));
      const s = m.structural(() => {
          const e = a.dealData.get(),
            t = [];
          return (
            e.totalItemsInStorage > 0 &&
              t.push({ enough: !0, currency: "depot", value: e.totalItemsInStorage }),
            a.prices.get().forEach((e) => t.push(e)),
            { ...e, prices: t }
          );
        }),
        n = m.model(
          (e) =>
            Object.values(a.equipmentInstructions.get()).find((t) => t.intCD === e) ??
            Object.values(a.crewInstructions.get()).find((t) => t.intCD === e),
        ),
        o = m.model((e, t) => {
          const s = Object.values(a[t].get()).find((t) => t.intCD === e);
          return (i(void 0 !== s, `There is no instructionItems with ${e} intCD`), s);
        });
      return { ...a, computes: { instructionById: n, instructionByIntCD: o, dealData: s } };
    },
    ({ model: e, externalModel: t }) => ({
      unmount: t.createCallback(
        (e, t) => ({ intCD: e, currentSlotId: t, actionType: Go, type: vo }),
        "onSlotAction",
      ),
      confirm: t.createCallbackNoArgs("dealPanel.onDealConfirmed"),
      cancel: t.createCallbackNoArgs("dealPanel.onDealCancelled"),
      toggleAutoRenewal: t.createCallback(
        () => ({ value: !e.dealData.get().autoRenewalEnabled }),
        "dealPanel.onAutoRenewalChanged",
      ),
      actionSlot: t.createCallback((e) => ({ ...e, type: vo }), "onSlotAction"),
    }),
  ),
  Hi = (0, Da.createContext)(null);
var Wi = "Animated_90a4d541",
  qi = function ({ children: e, index: t, id: a }) {
    const s = (0, Da.useRef)(a),
      n = (function () {
        const e = (0, Da.useContext)(Hi);
        return (i(null !== e, "useContext must be used with in SectionContext"), e);
      })(),
      o = (0, Da.useRef)(n.idToSlot),
      [l, r] = w(() => ({ from: { x: 0 }, config: { tension: 300, friction: 20 } }));
    return (
      (0, Da.useLayoutEffect)(() => {
        const e = o.current,
          i = void 0 === e[a];
        if (s.current === a) return;
        const l = e[a];
        if (-1 == a || i) return;
        if ("number" != typeof l) return;
        const c = l < t ? -1 : 1;
        r.start({ from: { x: c * nt(50) }, to: { x: 0 } });
        const d = z(n.onSwiped);
        return () => {
          (d(), r.stop(), r.start({ x: 0, immediate: !0 }));
        };
      }, [r, a]),
      (0, Da.useEffect)(() => {
        ((s.current = a), (o.current = n.idToSlot));
      }, [n, a]),
      (0, Ta.jsx)(g.div, { className: Wi, style: l, children: e })
    );
  },
  Ui = "UnmountButton_442d081e",
  Fi = "UnmountButton_base__hover_e2b863f3",
  Gi = "UnmountButton_image_5b9a272b";
function Vi({ onClick: e, className: t }) {
  const [a, s] = (0, Da.useState)(!1),
    n = W();
  return (0, Ta.jsx)("div", {
    onMouseEnter: function (e) {
      (n.play("mouse-enter", { target: "loadout-panel:slot:unmount-button", original: e }), s(!0));
    },
    onMouseLeave: () => s(!1),
    onClick: function (t) {
      (e(t), n.play("click", { target: "loadout-panel:slot:unmount-button", original: t }));
    },
    className: I(Ui, a && Fi, t),
    children: (0, Ta.jsx)(Me, {
      width: "42rem",
      height: "42rem",
      path: "loadout.unmount_button_" + (a ? "hover" : "default"),
      className: Gi,
    }),
  });
}
var Ki = "Consumable_98851be5",
  Zi = "Consumable_slot_523f223e",
  Yi = "Consumable_slot__disabled_10fdd4ec",
  Xi = "Consumable_slot__grabbing_f0e6559a",
  Qi = "Consumable_hotKeyLabel_a0918925",
  Ji = "Consumable_text_fd7e74cf",
  el = "Consumable_unmountButton_43731923",
  tl = "Consumable_unmountButton__hidden_250735bc",
  al = "Consumable_selectedOverlay_fd3226e6",
  sl = ne.resolve("strings"),
  nl = ne.resolve("aliases"),
  ol = `${fo}DropArea`,
  il = yt(function ({ slot: e, disabled: t, selected: a, withKey: s = !1, onClick: n }) {
    const o = W(),
      { model: i, controls: r } = oi(),
      c = qo().model,
      d = bt(),
      m = Ci(),
      p = d.location.endsWith(Io) ? i.computes.consumableById(e.intCD) : e,
      [_, g] = (0, Da.useState)(!1),
      b = Ge(
        { value: gt.small },
        { large: { value: gt.large }, extraLarge: { value: gt.extraLarge } },
      ),
      f = sl.readOrEmpty(`readable_key_names.${e.keyName}`),
      v = s && f && "KEY_NONE" != e.keyName,
      x = $({
        resId: nl.read((e) => e.hangar.shared.Loadout("resId")),
        args: (0, Da.useMemo)(() => ({ slotId: e.id, slotType: fo }), [e]),
      }),
      y = (0, Da.useMemo)(() => ({ disabled: t || void 0 === p?.imageName }), [p?.imageName, t]),
      C = h(
        d.location.endsWith(Io) ? "tankSetupConsumableSlot" : "tankSetupHangarConsumableSlot",
        (0, Da.useMemo)(
          () => ({
            intCD: e.intCD,
            slotType: fo,
            fieldType: 1,
            installedSlotId: e.id,
            itemInstalledSetupIdx: e.itemInstalledSetupIdx,
            itemInstalledSetupSlotIdx: e.id,
            isMounted: e.installed,
            isMountedMoreThanOne: e.mountedMoreThanOne,
            emitterUID: window.subViews.get(nl.read((e) => e.hangar.shared.Consumables("resId")))
              .uid,
          }),
          [e],
        ),
        y,
      ),
      w = -1 !== e.intCD ? C : {};
    (0, Da.useEffect)(() => {
      e.installed || o.play("mount", { target: "loadout-panel:slot:consumable" });
    }, [e.installed, o]);
    const S = u(),
      j = null !== S.state.virtualItem;
    return (
      (0, Da.useEffect)(() => {
        S.item?.getAttribute("data-drop-area") === ol && g(m === e.id);
      }, [S.item, m, e.id]),
      (0, Ta.jsxs)("div", {
        ...x,
        ...w,
        className: Ki,
        children: [
          (0, Ta.jsx)(Se, {
            className: I(Zi, t && Yi, j && Xi),
            classNames: { selectedOverlay: al },
            size: gi(b.value || gt.small),
            hovered: _,
            selected: a,
            disabled: t,
            "data-test-id": `equipmentSlot-${e.id}`,
            onClick: function (e) {
              !a && n && (n(), o.play("click", { target: "loadout-panel:slot", original: e }));
            },
            onMouseEnter: function () {
              (g(!0), j || o.play("mouse-enter", { target: "loadout-panel:slot:consumable" }));
            },
            onMouseLeave: function () {
              (void 0 !== m && S.item?.getAttribute("data-drop-area") === ol) || g(!1);
            },
            dataDropItem: e.id,
            children: (0, Ta.jsx)(qi, {
              id: e.intCD,
              index: e.id,
              children: p?.imageName
                ? (0, Ta.jsx)(Ei, {
                    undraggable: !c.computes.sectionDraggable(fo),
                    itemId: e.id,
                    dataDropArea: ol,
                    children: (0, Ta.jsx)(ut, {
                      name: p.imageName,
                      size: bi(b.value || gt.small),
                      overlayType: fi(e.overlayType),
                    }),
                  })
                : (0, Ta.jsx)(Se.Empty, {}),
            }),
          }),
          v &&
            (0, Ta.jsx)("div", {
              className: Qi,
              children: (0, Ta.jsx)("div", {
                className: Ji,
                children: (0, Ta.jsx)(l, { text: f }),
              }),
            }),
          !e.installed &&
            (0, Ta.jsx)(Vi, { onClick: () => r.unmount(e.intCD, e.id), className: I(el, j && tl) }),
        ],
      })
    );
  }),
  ll = "SpecializationType_9d3d37d7",
  rl = "SpecializationType_icon_91ea8b3b",
  cl = "SpecializationType_icon__visible_ca41ac0a",
  dl = "SpecializationType_icon__active_f79ff1ce",
  ul = "stealth",
  ml = "survivability",
  pl = "firepower",
  _l = "mobility",
  hl = {
    [`${_l}On`]: (e) =>
      (0, Ta.jsxs)("svg", {
        width: 48,
        height: 48,
        viewBox: "0 0 48 48",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        ...e,
        children: [
          (0, Ta.jsx)("path", {
            d: "M26.4457 24.6023C26.4457 23.5263 25.5797 22.6608 24.5058 22.6608C23.4319 22.6608 22.5658 23.5263 22.5658 24.6023C22.5658 25.6784 23.4319 26.5439 24.5058 26.5439C24.7367 26.5439 24.9446 26.4971 25.1409 26.4269C29.5289 30.4152 30.6605 31 30.6605 31C30.6605 31 30.3603 29.4678 26.3533 25.1754C26.4111 24.9883 26.4573 24.8012 26.4573 24.5906L26.4457 24.6023ZM24.5058 25.2105C24.1594 25.2105 23.8822 24.9298 23.8822 24.5906C23.8822 24.2515 24.1594 23.9708 24.5058 23.9708C24.8522 23.9708 25.1293 24.2515 25.1293 24.5906C25.1293 24.9298 24.8522 25.2105 24.5058 25.2105ZM24.5058 17C20.3603 17 17 20.3099 17 24.3801C17 26.6374 18.0277 28.6491 19.6443 29.9942L19.8868 29.655C18.582 28.2865 17.7968 26.4035 17.8776 24.5088C18.0393 20.6725 21.5843 18.3216 25.291 18.9883C30.1986 19.8655 29.6212 24.7778 28.8707 26.7427L30.7067 28.5322C31.5266 27.3509 32 25.924 32 24.3801C32 20.2982 28.6397 17 24.4942 17H24.5058Z",
            fill: "url(#paint0_linear_64965_282433)",
          }),
          (0, Ta.jsx)("defs", {
            children: (0, Ta.jsxs)("linearGradient", {
              id: "paint0_linear_64965_282433",
              x1: 24.5,
              y1: 18.4318,
              x2: 24.5,
              y2: 27.1818,
              gradientUnits: "userSpaceOnUse",
              children: [
                (0, Ta.jsx)("stop", { stopColor: "#EFE3D4" }),
                (0, Ta.jsx)("stop", { offset: 1, stopColor: "#DEC8AD" }),
              ],
            }),
          }),
        ],
      }),
    [`${_l}Off`]: (e) =>
      (0, Ta.jsx)("svg", {
        width: 48,
        height: 48,
        viewBox: "0 0 48 48",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        ...e,
        children: (0, Ta.jsx)("path", {
          opacity: 0.7,
          d: "M26.4457 24.6023C26.4457 23.5263 25.5797 22.6608 24.5058 22.6608C23.4319 22.6608 22.5658 23.5263 22.5658 24.6023C22.5658 25.6784 23.4319 26.5439 24.5058 26.5439C24.7367 26.5439 24.9446 26.4971 25.1409 26.4269C29.5289 30.4152 30.6605 31 30.6605 31C30.6605 31 30.3603 29.4678 26.3533 25.1754C26.4111 24.9883 26.4573 24.8012 26.4573 24.5906L26.4457 24.6023ZM24.5058 25.2105C24.1594 25.2105 23.8822 24.9298 23.8822 24.5906C23.8822 24.2515 24.1594 23.9708 24.5058 23.9708C24.8522 23.9708 25.1293 24.2515 25.1293 24.5906C25.1293 24.9298 24.8522 25.2105 24.5058 25.2105ZM24.5058 17C20.3603 17 17 20.3099 17 24.3801C17 26.6374 18.0277 28.6491 19.6443 29.9942L19.8868 29.655C18.582 28.2865 17.7968 26.4035 17.8776 24.5088C18.0393 20.6725 21.5843 18.3216 25.291 18.9883C30.1986 19.8655 29.6212 24.7778 28.8707 26.7427L30.7067 28.5322C31.5266 27.3509 32 25.924 32 24.3801C32 20.2982 28.6397 17 24.4942 17H24.5058Z",
          fill: "#EEEDE9",
          fillOpacity: 0.9,
        }),
      }),
    [`${pl}On`]: (e) =>
      (0, Ta.jsxs)("svg", {
        width: 48,
        height: 48,
        viewBox: "0 0 48 48",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        ...e,
        children: [
          (0, Ta.jsx)("path", {
            d: "M22.95 21.2233L18.6917 17L17 18.7967L21.235 22.9967L22.9617 21.2233H22.95ZM30.9883 18.7967L29.2967 17L25.0383 21.2233L26.765 22.9967L31 18.7967H30.9883ZM25.0383 26.7767L29.2967 31L30.9883 29.2033L26.7533 25.0033L25.0267 26.7767H25.0383ZM17 29.2033L18.6917 31L22.95 26.7767L21.2233 25.0033L17 29.2033Z",
            fill: "url(#paint0_linear_64965_282431)",
          }),
          (0, Ta.jsx)("defs", {
            children: (0, Ta.jsxs)("linearGradient", {
              id: "paint0_linear_64965_282431",
              x1: 23.8939,
              y1: 18.4583,
              x2: 23.8939,
              y2: 30.7083,
              gradientUnits: "userSpaceOnUse",
              children: [
                (0, Ta.jsx)("stop", { stopColor: "#FCF6EB" }),
                (0, Ta.jsx)("stop", { offset: 1, stopColor: "#E1D3C1" }),
              ],
            }),
          }),
        ],
      }),
    [`${pl}Off`]: (e) =>
      (0, Ta.jsx)("svg", {
        width: 48,
        height: 48,
        viewBox: "0 0 48 48",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        ...e,
        children: (0, Ta.jsx)("g", {
          opacity: 0.7,
          children: (0, Ta.jsx)("path", {
            d: "M22.95 21.2233L18.6917 17L17 18.7967L21.235 22.9967L22.9617 21.2233H22.95ZM30.9883 18.7967L29.2967 17L25.0383 21.2233L26.765 22.9967L31 18.7967H30.9883ZM25.0383 26.7767L29.2967 31L30.9883 29.2033L26.7533 25.0033L25.0267 26.7767H25.0383ZM17 29.2033L18.6917 31L22.95 26.7767L21.2233 25.0033L17 29.2033Z",
            fill: "#EEEDE9",
            fillOpacity: 0.9,
          }),
        }),
      }),
    [`${ul}On`]: (e) =>
      (0, Ta.jsxs)("svg", {
        width: 50,
        height: 48,
        viewBox: "0 0 50 48",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        ...e,
        children: [
          (0, Ta.jsx)("path", {
            d: "M25 18C20.0337 18 16 23.1051 16 24.006C16 24.7988 20.0337 30 25 30C29.9663 30 34 24.8589 34 23.994C34 23.1291 29.9663 18 25 18ZM25 28.6186C21.382 28.6186 17.7191 24.5826 17.7191 23.994C17.7191 23.3333 21.382 19.3694 25 19.3694C28.618 19.3694 32.2809 23.3574 32.2809 23.994C32.2809 24.6306 28.618 28.6186 25 28.6186ZM24.9888 20.2342C23.0787 20.2342 21.5281 21.9159 21.5281 23.982C21.5281 26.048 23.0787 27.7297 24.9888 27.7297C26.8989 27.7297 28.4607 26.048 28.4607 23.982C28.4607 21.9159 26.9101 20.2342 24.9888 20.2342Z",
            fill: "url(#paint0_linear_64965_282436)",
          }),
          (0, Ta.jsx)("defs", {
            children: (0, Ta.jsxs)("linearGradient", {
              id: "paint0_linear_64965_282436",
              x1: 25,
              y1: 19.2273,
              x2: 25,
              y2: 26.7273,
              gradientUnits: "userSpaceOnUse",
              children: [
                (0, Ta.jsx)("stop", { stopColor: "#EFE3D4" }),
                (0, Ta.jsx)("stop", { offset: 1, stopColor: "#DEC8AD" }),
              ],
            }),
          }),
        ],
      }),
    [`${ul}Off`]: (e) =>
      (0, Ta.jsx)("svg", {
        width: 48,
        height: 48,
        viewBox: "0 0 48 48",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        ...e,
        children: (0, Ta.jsx)("path", {
          opacity: 0.7,
          d: "M24 18C19.0337 18 15 23.1051 15 24.006C15 24.7988 19.0337 30 24 30C28.9663 30 33 24.8589 33 23.994C33 23.1291 28.9663 18 24 18ZM24 28.6186C20.382 28.6186 16.7191 24.5826 16.7191 23.994C16.7191 23.3333 20.382 19.3694 24 19.3694C27.618 19.3694 31.2809 23.3574 31.2809 23.994C31.2809 24.6306 27.618 28.6186 24 28.6186ZM23.9888 20.2342C22.0787 20.2342 20.5281 21.9159 20.5281 23.982C20.5281 26.048 22.0787 27.7297 23.9888 27.7297C25.8989 27.7297 27.4607 26.048 27.4607 23.982C27.4607 21.9159 25.9101 20.2342 23.9888 20.2342Z",
          fill: "#EEEDE9",
          fillOpacity: 0.9,
        }),
      }),
    [`${ml}On`]: (e) =>
      (0, Ta.jsxs)("svg", {
        width: 48,
        height: 50,
        viewBox: "0 0 48 50",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        ...e,
        children: [
          (0, Ta.jsx)("path", {
            opacity: 0.7,
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M23.7379 24.2125V17.1528H25.2364V24.2125L31.8493 28.0304L31.1001 29.3281L24.4871 25.5101L17.8742 29.3281L17.125 28.0304L23.7379 24.2125Z",
            fill: "#B3AFAB",
          }),
          (0, Ta.jsx)("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M19.2494 20.755L24.4922 17.7302L29.7354 20.7552L24.4925 23.7799L19.2494 20.755ZM18.4995 22.0526V28.1021L23.7427 31.1271V25.0776L18.4995 22.0526ZM25.2423 31.1267L30.4848 28.1021V22.0531L25.2423 25.0776V31.1267ZM24.4922 16L31.9844 20.3224V28.9673L24.4922 33.2897L17 28.9673V20.3224L24.4922 16Z",
            fill: "url(#paint0_linear_64965_282432)",
          }),
          (0, Ta.jsx)("defs", {
            children: (0, Ta.jsxs)("linearGradient", {
              id: "paint0_linear_64965_282432",
              x1: 24.3787,
              y1: 17.801,
              x2: 24.3787,
              y2: 32.9295,
              gradientUnits: "userSpaceOnUse",
              children: [
                (0, Ta.jsx)("stop", { stopColor: "#FCF6EB" }),
                (0, Ta.jsx)("stop", { offset: 1, stopColor: "#E1D3C1" }),
              ],
            }),
          }),
        ],
      }),
    [`${ml}Off`]: (e) =>
      (0, Ta.jsx)("svg", {
        width: 48,
        height: 48,
        viewBox: "0 0 48 48",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        ...e,
        children: (0, Ta.jsxs)("g", {
          opacity: 0.7,
          children: [
            (0, Ta.jsx)("path", {
              opacity: 0.7,
              fillRule: "evenodd",
              clipRule: "evenodd",
              d: "M23.7379 23.2125V16.1528H25.2364V23.2125L31.8493 27.0304L31.1001 28.3281L24.4871 24.5101L17.8742 28.3281L17.125 27.0304L23.7379 23.2125Z",
              fill: "#B3AFAB",
            }),
            (0, Ta.jsx)("path", {
              fillRule: "evenodd",
              clipRule: "evenodd",
              d: "M19.2494 19.755L24.4922 16.7302L29.7354 19.7552L24.4925 22.7799L19.2494 19.755ZM18.4995 21.0526V27.1021L23.7427 30.1271V24.0776L18.4995 21.0526ZM25.2423 30.1267L30.4848 27.1021V21.0531L25.2423 24.0776V30.1267ZM24.4922 15L31.9844 19.3224V27.9673L24.4922 32.2897L17 27.9673V19.3224L24.4922 15Z",
              fill: "#EEEDE9",
              fillOpacity: 0.9,
            }),
          ],
        }),
      }),
  };
function gl({ specialization: e, active: t, classNames: a }) {
  const s = hl[`${e}On`],
    n = hl[`${e}Off`];
  if (s && n)
    return (0, Ta.jsxs)("div", {
      className: I(ll, a?.base),
      children: [
        (0, Ta.jsx)(s, { className: I(rl, dl, t && cl, a?.activeIcon) }),
        (0, Ta.jsx)(n, { className: I(rl, !t && cl, a?.inactiveIcon) }),
      ],
    });
  console.error(`Unknown specialization type ${e}`);
}
var bl = "Specialization_border_1d1ddf4e",
  fl = "Specialization_borderImage_2bbc40a2",
  vl = "Specialization_576f60ad",
  xl = "Specialization_base__button_e1e80f41",
  yl = "Specialization_border__visible_2df74c11",
  Cl = "Specialization_borderImage__visible_258796cf",
  wl = "Specialization_icon_453cdca5",
  Il = "Specialization_base__disabled_12d00a3f",
  Sl = "Specialization_base__active_12d00a3f",
  jl = he("Specialization"),
  Nl = yt(function ({ specialization: e, className: t, id: a, disabled: s = !1 }) {
    const n = W(),
      { controls: o } = qo(),
      i = bt().location.includes("/loadout"),
      l = e.dynamic && i,
      r = (0, Da.useRef)(a);
    (0, Da.useEffect)(() => {
      if (r.current !== a)
        return (
          (r.current = a),
          e.active
            ? z(() => n.play("on", { target: "loadout-panel:slot:equipment:specialization" }))
            : void 0
        );
    }, [n, e.active, a]);
    const c = f(
      "hangarSlotSpec",
      (0, Da.useMemo)(() => [e.type, e.dynamic, e.clickable], [e]),
    );
    return (0, Ta.jsxs)(jl, {
      className: I(vl, l && xl, s && Il, e.active && Sl, t),
      onClick: function (e) {
        (c.onClick(),
          l &&
            (n.play("click", { target: "loadout:panel:equipment:specialization", original: e }),
            o.openSlotSpecDialog()));
      },
      onMouseEnter: function (e) {
        (c.onMouseEnter(e),
          l &&
            n.play("mouse-enter", {
              target: "loadout:panel:equipment:specialization",
              original: e,
            }));
      },
      onMouseLeave: c.onMouseLeave,
      children: [
        (0, Ta.jsx)("div", { className: I(bl, l && yl) }),
        (0, Ta.jsx)("div", { className: I(fl, l && Cl) }),
        (0, Ta.jsx)(gl, { specialization: e.type, active: e.active, classNames: { base: wl } }),
      ],
    });
  }),
  kl = "Equipment_cd6073b3",
  Dl = "Equipment_slot_cd6073b3",
  Al = "Equipment_slot__disabled_13198c7d",
  El = "Equipment_slot__grabbing_49feaf7f",
  Ml = "Equipment_specialization_95709e3f",
  Tl = "Equipment_unmountButton_7376ff29",
  Pl = "Equipment_unmountButton__hidden_f9f46440",
  Ll = "Equipment_selectedOverlay_866b638b",
  Rl = ne.resolve("aliases"),
  Bl = `${go}DropArea`;
function zl(e) {
  switch (e) {
    case So.Mobility:
      return "loadout-panel:slot:equipment:specialization:mobility";
    case So.Firepower:
      return "loadout-panel:slot:equipment:specialization:firepower";
    case So.Stealth:
      return "loadout-panel:slot:equipment:specialization:stealth";
    case So.Survivability:
      return "loadout-panel:slot:equipment:specialization:survivability";
    default:
      return (console.error("Unknown specialization type:", e), "");
  }
}
var Ol = yt(function ({ slot: e, disabled: t, selected: a, onClick: s }) {
    const { breakpoint: n } = Ce(),
      { controls: o } = Bi(),
      { model: i } = qo(),
      [l, r] = (0, Da.useState)(!1),
      c = W(),
      d = bt(),
      m = Ci(),
      p = Ge(
        { value: gt.small },
        { large: { value: gt.large }, extraLarge: { value: gt.extraLarge } },
      ),
      _ = $({
        resId: Rl.read((e) => e.hangar.shared.Loadout("resId")),
        args: (0, Da.useMemo)(() => ({ slotId: e.id, slotType: go }), [e]),
      }),
      g = (0, Da.useMemo)(() => ({ disabled: t || -1 === e?.intCD }), [e?.intCD, t]),
      b = h(
        d.location.endsWith(yo)
          ? "tankSetupOptionalDeviceSlotWW"
          : "tankSetupHangarOptionalDeviceSlot",
        (0, Da.useMemo)(
          () => ({
            intCD: e.intCD,
            slotType: go,
            installedSlotId: e.id,
            isMounted: e.installed,
            fieldType: 1,
            itemInstalledSetupIdx: e.itemInstalledSetupIdx,
            itemInstalledSetupSlotIdx: e.id,
            isMountedMoreThanOne: e.mountedMoreThanOne,
            emitterUID: window.subViews.get(Rl.read((e) => e.hangar.shared.Equipments("resId")))
              .uid,
          }),
          [e],
        ),
        g,
      ),
      f = -1 !== e.intCD ? b : {},
      v = u(),
      x = null !== v.state.virtualItem;
    return (
      (0, Da.useEffect)(() => {
        e.installed || c.play("mount", { target: "loadout-panel:slot:equipment" });
      }, [e.installed, c]),
      (0, Da.useEffect)(() => {
        (x && _?.onMouseLeave(), !x && void 0 !== m && l && _?.onMouseEnter(null));
      }, [m, x, l, _]),
      (0, Da.useEffect)(() => {
        v.item?.getAttribute("data-drop-area") === Bl && r(m === e.id);
      }, [v.item, m, e.id]),
      (0, Ta.jsxs)("div", {
        className: kl,
        children: [
          (0, Ta.jsx)("div", {
            ...f,
            onMouseEnter: function (e) {
              (t || r(!0),
                x ||
                  (t ||
                    c.play("mouse-enter", { target: "loadout-panel:slot:equipment", original: e }),
                  _?.onMouseEnter(e)));
            },
            onMouseLeave: function () {
              ((void 0 !== m && v.item?.getAttribute("data-drop-area") === Bl) || r(!1),
                _?.onMouseLeave());
            },
            children: (0, Ta.jsx)(Se, {
              className: I(Dl, t && Al, x && El),
              classNames: { selectedOverlay: Ll },
              size: gi(p.value || gt.small),
              hovered: l,
              disabled: t,
              onClick: function (t) {
                !a &&
                  s &&
                  (s(),
                  c.play("click", { target: "loadout-panel:slot", original: t }),
                  e.specialization?.type &&
                    d.location.includes("/loadout") &&
                    c.play("click", { target: zl(e.specialization.type), original: t }),
                  _?.onClick());
              },
              selected: a,
              "data-test-id": `deviceSlot-${e.id}`,
              dataDropItem: e.id,
              children: (0, Ta.jsx)(qi, {
                index: e.id,
                id: e.intCD,
                children: e.imageName
                  ? (0, Ta.jsx)(Ei, {
                      undraggable: !i.computes.sectionDraggable(go),
                      itemId: e.id,
                      dataDropArea: Bl,
                      children: (0, Ta.jsx)(ut, {
                        name: e.imageName,
                        size: bi(n.name),
                        level: e.level,
                        overlayType: fi(e.overlayType),
                      }),
                    })
                  : (0, Ta.jsx)(Se.Empty, {}),
              }),
            }),
          }),
          e.specialization &&
            (0, Ta.jsx)(Nl, {
              specialization: e.specialization,
              className: Ml,
              id: e.intCD,
              disabled: t,
            }),
          !e.installed &&
            (0, Ta.jsx)(Vi, { onClick: () => o.unmount(e.intCD, e.id), className: I(Tl, x && Pl) }),
        ],
      })
    );
  }),
  $l = "Instuction_ab7d27c7",
  Hl = "Instuction_slot_ab7d27c7",
  Wl = "Instuction_slot__disabled_179c0b6b",
  ql = "Instuction_warningImage_138cc840",
  Ul = "Instuction_warningImage__disabled_7d252f0",
  Fl = "Instuction_selectedOverlay_f19fc301",
  Gl = "Instuction_item_e5ebc3b8",
  Vl = "Instuction_item__withAttention_80199f58",
  Kl = ne.resolve("aliases");
function Zl(e) {
  switch (e) {
    case jo:
      return "loadout-panel:slot:instruction:gunner_smoothTurret-crew_instruction";
    case No:
      return "loadout-panel:slot:instruction:driver_virtuoso-crew_instruction";
    case ko:
      return "loadout-panel:slot:instruction:driver_smoothDriving-crew_instruction";
    case Do:
      return "loadout-panel:slot:instruction:fireFighting-crew_instruction";
    case Ao:
      return "loadout-panel:slot:instruction:naturalCover-crew_instruction";
    case Eo:
      return "loadout-panel:slot:instruction:gunner_rancorous-crew_instruction";
    case Mo:
      return "loadout-panel:slot:instruction:loader_pedant-crew_instruction";
    case To:
      return "loadout-panel:slot:instruction:commander_practical-crew_instruction";
    case Po:
      return "loadout-panel:slot:instruction:commander_enemyShotPredictor-crew_instruction";
    default:
      return (console.error("Unknown crew instruction type:", e), "");
  }
}
var Yl = yt(({ slot: e, disabled: t, selected: a, onClick: s }) => {
    const { model: n, controls: o } = $i(),
      i = a ? n.computes.instructionById(e.intCD) : e,
      [l, r] = (0, Da.useState)(!1),
      c = W(),
      d = bt(),
      u = Ge(
        { value: gt.small },
        { large: { value: gt.large }, extraLarge: { value: gt.extraLarge } },
      );
    const m = $({
        resId: Kl.read((e) => e.hangar.shared.Loadout("resId")),
        args: (0, Da.useMemo)(() => ({ slotId: e.id, slotType: vo }), [e]),
      }),
      p = (0, Da.useMemo)(() => ({ disabled: t || void 0 === i?.imageName }), [i?.imageName, t]),
      _ = h(
        d.location.endsWith(Co) ? "tankSetupBattleBoosterSlot" : "tankSetupHangarBattleBoosterSlot",
        (0, Da.useMemo)(
          () => ({
            intCD: e.intCD,
            slotType: vo,
            fieldType: 1,
            installedSlotId: e.id,
            itemInstalledSetupIdx: e.itemInstalledSetupIdx,
            itemInstalledSetupSlotIdx: e.id,
            isMounted: e.installed,
            isMountedMoreThanOne: e.mountedMoreThanOne,
            emitterUID: window.subViews.get(Kl.read((e) => e.hangar.shared.Instructions("resId")))
              .uid,
          }),
          [e],
        ),
        p,
      ),
      g = -1 !== e.intCD ? _ : {};
    return (
      (0, Da.useEffect)(() => {
        e.installed ||
          (c.play("mount", { target: "loadout-panel:slot:instruction" }),
          i?.imageName &&
            "battleBoosterReplace" === e.overlayType &&
            c.play("on", { target: Zl(i.imageName) }),
          e?.withAttention && c.play("warn", { target: "loadout-panel:slot:instruction" }));
      }, [i?.imageName, e.installed, e.overlayType, e?.withAttention, c]),
      (0, Ta.jsxs)("div", {
        ...m,
        ...g,
        className: $l,
        children: [
          (0, Ta.jsx)(Se, {
            className: I(Hl, t && Wl),
            classNames: { selectedOverlay: Fl },
            onMouseEnter: function (e) {
              (r(!0),
                c.play("mouse-enter", { target: "loadout-panel:slot:instruction", original: e }));
            },
            onMouseLeave: () => r(!1),
            onClick: function (e) {
              !a && s && (s(), c.play("click", { target: "loadout-panel:slot", original: e }));
            },
            hovered: l,
            selected: a,
            disabled: t,
            size: gi(u.value || gt.small),
            "data-test-id": `instructionSlot-${e.id}`,
            children:
              i?.imageName &&
              (0, Ta.jsx)(ut, {
                className: I(Gl, e.withAttention && Vl),
                name: i.imageName,
                size: bi(u.value || gt.small),
                overlayType: fi(e?.overlayType),
              }),
          }),
          i?.imageName &&
            e.withAttention &&
            (0, Ta.jsx)(Me, {
              width: "48rem",
              height: "48rem",
              path: "loadout.alert_48",
              className: I(ql, t && Ul),
            }),
          !e.installed && (0, Ta.jsx)(Vi, { onClick: () => o.unmount(e.intCD, e.id) }),
        ],
      })
    );
  }),
  Xl = "Shell_hoverOverlay_714f24ee",
  Ql = "Shell_4f8ed17c",
  Jl = "Shell_icon_229c2d6f",
  er = "Shell_base__locked_7aaeeab0",
  tr = "Shell_base__selected_7aaeeab0",
  ar = "Shell_icon__dragging_7aaeeab0",
  sr = "Shell_container_cd11209e",
  nr = "Shell_container__key_d0643ec3",
  or = "Shell_container__count_25e66fc6",
  ir = "Shell_container__disabled_d9eea9c4",
  lr = "Shell_text_d3fedf21",
  rr = "Shell_text__empty_7aaeeab0",
  cr = "Shell_text__disabled_7aaeeab0",
  dr = "Shell_shellMechanic_9bc785c8",
  ur = "Shell_shellMechanicPosition_bbe64f90",
  mr = "x20x20",
  pr = "x24x24",
  _r = "x40x40";
function hr({ mechanic: e, className: t }) {
  const a = ze(Ge({ size: mr }, { extraLarge: { size: pr } }).size, _r);
  return (0, Ta.jsx)("div", {
    className: I(dr, t),
    style: {
      backgroundImage: `url(R.images.gui.maps.icons.loadout.shell_mechanics.${e.name}.${a}.loadout_panel_icon)`,
    },
  });
}
var gr = ne.resolve("aliases"),
  br = "small",
  fr = "x64x64",
  vr = "medium",
  xr = yt(function ({
    disabled: e = !1,
    selected: t = !1,
    withKey: a = !1,
    empty: s = !0,
    className: n,
    slot: o,
    shellsCounts: i,
  }) {
    const { model: r } = hi(),
      c = bt(),
      d = void 0 !== u().item?.getAttribute("data-drop-item"),
      m = $({
        resId: gr.read((e) => e.hangar.shared.Loadout("resId")),
        args: (0, Da.useMemo)(() => ({ slotId: o.id, slotType: bo }), [o.id]),
      }),
      p = Ge({ value: br }, { large: { value: fr }, extraLarge: { value: vr } }).value,
      _ = (0, Da.useMemo)(() => ({ disabled: e }), [e]),
      g = h(
        c.location.endsWith(wo) ? "tankSetupShellItem" : "tankSetupHangarShellSlot",
        (0, Da.useMemo)(
          () => ({
            intCD: o.intCD,
            slotType: bo,
            fieldType: 1,
            installedSlotId: o.id,
            itemInstalledSetupIdx: o.itemInstalledSetupIdx,
            itemInstalledSetupSlotIdx: o.id,
            isMounted: o.installed,
            isMountedMoreThanOne: o.mountedMoreThanOne,
            emitterUID: Le(gr.read((e) => e.hangar.shared.Shells("resId"))).uid,
            shellsCounts: i,
          }),
          [o, i],
        ),
        _,
      ),
      b = t ? r.computes.shell(o.id) : o;
    if (!b) return;
    const f = ne.resolve("strings").readOrEmpty(`readable_key_names.${o.keyName}`),
      v = a && f && "KEY_NONE" !== o.keyName;
    return (0, Ta.jsxs)("div", {
      ...m,
      ...g,
      className: I(Ql, d && er, t && tr, n),
      "data-test-id": `shellSlot-${o.id}`,
      children: [
        v &&
          (0, Ta.jsx)("div", {
            className: I(sr, nr),
            children: (0, Ta.jsx)("div", { className: lr, children: (0, Ta.jsx)(l, { text: f }) }),
          }),
        (0, Ta.jsxs)(qi, {
          id: o.intCD,
          index: o.id,
          children: [
            (0, Ta.jsx)(Ei, {
              undraggable: !t,
              itemId: o.id,
              dataDropArea: "shellsDropArea",
              children: (0, Ta.jsxs)(Me, {
                path: `shell.${p}.${o.imageName}`,
                className: Jl,
                children: [
                  (0, Ta.jsx)("div", { className: Xl }),
                  b.mainMechanic &&
                    !pi.includes(b.mainMechanic.name) &&
                    (0, Ta.jsx)(hr, { mechanic: b.mainMechanic, className: ur }),
                ],
              }),
            }),
            void 0 !== b.count && (0, Ta.jsx)(yr, { count: b.count, empty: s, disabled: e }),
          ],
        }),
      ],
    });
  }),
  yr = function ({ count: e, empty: t, disabled: a }) {
    return (0, Ta.jsx)("div", {
      className: I(sr, or, a && ir),
      children: (0, Ta.jsx)("div", { className: I(lr, a && cr, t && rr), children: e }),
    });
  },
  Cr = {
    warningOverlay: "Shells_warningOverlay_caf70c8d",
    warningOverlayPattern: "Shells_warningOverlayPattern_1ee78337",
    base: "Shells_31052845",
    slot: "Shells_slot_b00f7c4f",
    slot__customBackground: "Shells_slot__customBackground_c8785d51",
    shell: "Shells_shell_6d8f9392",
    content: "Shells_content_8e80e668",
    warningOverlay__hover: "Shells_warningOverlay__hover_2b3abaa5",
    selectedOverlay: "Shells_selectedOverlay_3e68bca2",
    selectedSlotOverlay: "Shells_selectedSlotOverlay_b0aea0d4",
  };
function wr({ hovered: e, selected: t }) {
  return (0, Ta.jsxs)(Ta.Fragment, {
    children: [
      t && (0, Ta.jsx)("div", { className: Cr.selectedOverlay }),
      (0, Ta.jsx)(Me, {
        fit: "cover",
        path: "loadout.shells_warning_glow",
        className: Cr.warningGlow,
      }),
      (0, Ta.jsx)("div", { className: I(Cr.warningOverlay, e && !t && Cr.warningOverlay__hover) }),
    ],
  });
}
function Ir({
  shells: e,
  section: t,
  groupId: a,
  withKey: s = !1,
  disabled: n = !1,
  selected: o = !1,
  onClick: i,
}) {
  const [l, r] = (0, Da.useState)(!1),
    c = W(),
    d = Ge(
      { value: gt.small },
      { large: { value: gt.large }, extraLarge: { value: gt.extraLarge } },
    ),
    u = (0, Da.useMemo)(() => e.map((e) => ({ intCD: e.intCD, count: e.count })), [e]),
    m = !e.some((e) => e.count && e.count > 0);
  return (0, Ta.jsxs)(Se, {
    classNames: {
      slot: I(Cr.slot, t.warning && !n && Cr.slot__customBackground),
      content: Cr.content,
      selectedOverlay: Cr.selectedSlotOverlay,
    },
    size: gi(d.value || gt.small),
    hovered: l && !n && !t.warning,
    selected: o && !t.warning,
    disabled: n,
    onClick: function (e) {
      o ||
        n ||
        !i ||
        (i(t.type, { slotIndex: 0, groupId: a, sectionName: t.name }),
        c.play("click", { target: "loadout-panel:slot", original: e }));
    },
    onMouseEnter: function () {
      (r(!0), n || o || c.play("mouse-enter", { target: "loadout-panel:slot:shells" }));
    },
    onMouseLeave: () => r(!1),
    children: [
      t.warning && (0, Ta.jsx)(wr, { hovered: l && !n, selected: o }),
      e.map((e) =>
        (0, Ta.jsx)(
          xr,
          {
            className: Cr.shell,
            selected: o,
            disabled: n,
            withKey: s,
            slot: e,
            empty: m,
            shellsCounts: u,
          },
          e.id,
        ),
      ),
      t.warning && (0, Ta.jsx)("div", { className: Cr.warningOverlay }),
    ],
  });
}
var Sr = yt(function ({
    groupIndex: e,
    sectionIndex: t,
    withKey: a,
    disabled: s,
    selected: n,
    onClick: o,
  }) {
    const { model: i } = qo(),
      { controls: l } = hi(),
      r = i.computes.sectionByIndex(e, t),
      c = i.computes.groupByIndex(e),
      d = Ge({ value: br }, { large: { value: fr }, extraLarge: { value: vr } }).value;
    if (!r) return null;
    const u = v(r.slots ?? [], (e) => e.intCD > 0);
    return (0, Ta.jsx)("div", {
      className: Cr.base,
      children: (0, Ta.jsx)(ji, {
        dataDropArea: `${bo}DropArea`,
        onDrop: (e, t) => l.swapSlots({ leftID: e, rightID: t }),
        renderDraggingItem: (e) =>
          (0, Ta.jsxs)(Me, {
            path: `shell.${d}.${u[e].imageName}`,
            className: I(Jl, ar),
            children: [
              (0, Ta.jsx)("div", { className: Xl }),
              u[e]?.mainMechanic &&
                !pi.includes(u[e].mainMechanic.name) &&
                (0, Ta.jsx)(hr, { mechanic: u[e].mainMechanic, className: ur }),
            ],
          }),
        children: (0, Ta.jsx)(Ir, {
          shells: u,
          section: r,
          groupId: c.id,
          withKey: a,
          disabled: s,
          selected: n,
          onClick: o,
        }),
      }),
    });
  }),
  jr = "Divider_44f20b3a",
  Nr = "Divider_dividerImage_9dcc5cfc";
function kr({ className: e }) {
  return (0, Ta.jsx)("div", {
    className: I(jr, e),
    children: (0, Ta.jsx)(Me, {
      path: "loadout.panel_border",
      repeat: "repeat",
      fit: "auto",
      width: "100%",
      height: "100%",
      className: Nr,
    }),
  });
}
var Dr = "AmmunitionPanel_slots_d69454c1",
  Ar = yt(function ({ groupIndex: e, sectionIndex: t, slotToComponent: a, onClick: s }) {
    const { controls: n } = oi(),
      { controls: o } = Bi(),
      { breakpoint: i } = Ce(),
      l = Ge(
        { value: gt.small },
        { large: { value: gt.large }, extraLarge: { value: gt.extraLarge } },
      ),
      { model: r } = qo(),
      c = r.computes.sectionByIndex(e, t),
      d = r.computes.groupByIndex(e);
    return c && d
      ? (0, Ta.jsx)("div", {
          className: Dr,
          children: (0, Ta.jsx)(ji, {
            dataDropArea: `${c.type}DropArea`,
            onDrop: (e, t) => {
              c.type === fo
                ? n.swapSlots({ leftID: t, rightID: e })
                : c.type === go && o.swapSlots({ leftID: t, rightID: e });
            },
            renderDraggingItem: (e) => {
              const t = c.slots[e];
              if (t)
                return c.type === fo
                  ? (0, Ta.jsx)(ut, {
                      name: t.imageName,
                      size: bi(l.value || gt.small),
                      overlayType: fi(t.overlayType),
                    })
                  : c.type === go
                    ? (0, Ta.jsx)(ut, {
                        name: t.imageName,
                        size: bi(i.name),
                        level: t.level,
                        overlayType: fi(t.overlayType),
                      })
                    : void 0;
            },
            children: (0, Ta.jsx)("div", {
              style: { display: "flex" },
              children: c.slots.map((n, o) =>
                (0, Ta.jsxs)(
                  Da.Fragment,
                  {
                    children: [
                      o > 0 && (0, Ta.jsx)(kr, {}),
                      (0, Ta.jsx)(zr, {
                        index: o,
                        sectionType: c.type,
                        groupIndex: e,
                        sectionIndex: t,
                        slotToComponent: a,
                        onClick: () =>
                          s?.(c.type, { slotIndex: n.id, groupId: d.id, sectionName: c.name }),
                      }),
                    ],
                  },
                  n.id,
                ),
              ),
            }),
          }),
        })
      : null;
  }),
  Er = ne.resolve("aliases"),
  Mr = { [bo]: Sr, default: Ar },
  Tr = { [fo]: il, [vo]: Yl, [go]: Ol },
  Pr = (e) => ({ options: { rootId: e } }),
  Lr = {
    providersData: [
      { provider: ni, props: Pr(Er.read((e) => e.hangar.shared.Consumables("resId"))) },
      { provider: Oi, props: Pr(Er.read((e) => e.hangar.shared.Instructions("resId"))) },
      { provider: Ri, props: Pr(Er.read((e) => e.hangar.shared.Equipments("resId"))) },
      {
        provider: Wo,
        props: {
          options: { rootId: Er.read((e) => e.hangar.shared.Loadout("resId")) },
          initial: {},
        },
      },
      { provider: _i, props: Pr(Er.read((e) => e.hangar.shared.Shells("resId"))) },
    ],
    sectionToComponent: Mr,
    slotToComponent: Tr,
  },
  Rr = (0, Da.createContext)(Lr);
function Br({
  sectionToComponent: e = Lr.sectionToComponent,
  slotToComponent: t = Lr.slotToComponent,
  providersData: a = Lr.providersData,
  children: s,
}) {
  const n = (0, Da.useMemo)(() => ({ sectionToComponent: e, slotToComponent: t }), [e, t]),
    o = new mt().add(yi).addWithProps(Rr.Provider, { value: n });
  return (
    a.forEach((e) => {
      void 0 === e.props ? o.add(e.provider) : o.addWithProps(e.provider, e.props);
    }),
    o.render(s)
  );
}
var zr = yt(function ({
  index: e,
  sectionType: t,
  groupIndex: a,
  sectionIndex: s,
  slotToComponent: n,
  onClick: o,
}) {
  const { model: i } = qo(),
    l = i.disabled.get(),
    r = i.computes.isSlotSelected(e, t),
    c = i.computes.slotByIndex(a, s, e);
  if (void 0 === c) return null;
  const d = (function ({ slotToComponent: e = Tr, sectionType: t = "default" }) {
    return e[t] ?? e.default;
  })({ slotToComponent: n, sectionType: t });
  return d
    ? (0, Ta.jsx)(d, {
        slot: c,
        disabled: l,
        selected: r,
        withKey: t === fo && i.computes.isSectionSelected(t),
        onClick: o,
      })
    : null;
});
function Or(e) {
  return "KEY_NONE" === e ? "..." : String(R.strings.readable_key_names.$dyn(e));
}
var $r = "Ability_f85eb27a",
  Hr = "Ability_slot_6301ffc3",
  Wr = "Ability_slot__disabled_28a206fc",
  qr = "Ability_slot__grabbing_48b2b603",
  Ur = "Ability_hotKeyLabel_20c59e87",
  Fr = "Ability_text_a4e07283",
  Gr = "Ability_unmountButton_304e9a8d",
  Vr = "Ability_unmountButton__hidden_9ecd6f1",
  Kr = "Ability_selectedOverlay_aaa26207";
ne.resolve("strings");
var Zr = ne.resolve("aliases"),
  Yr = "ls_consumablesDropArea",
  Xr = yt(function ({ slot: e, disabled: t, selected: a, onClick: s }) {
    const n = W(),
      { model: o, controls: i } = oi(),
      r = qo().model,
      c = bt(),
      d = Ci(),
      m = c.location.endsWith(jc.HWConsumables) ? o.computes.consumableById(e.intCD) : e,
      [p, _] = (0, Da.useState)(!1),
      g = Ge(
        { value: gt.extraSmall },
        { large: { value: gt.large }, extraLarge: { value: gt.extraLarge } },
      ),
      b = Or(e.keyName),
      f = Sc(c.location) && b,
      v = $({
        resId: Zr.read((e) => e.hangar.shared.Loadout("resId")),
        args: (0, Da.useMemo)(
          () => ({ intCD: e.intCD, slotId: e.id, slotType: jc.HWConsumables }),
          [e],
        ),
      }),
      x = (0, Da.useMemo)(() => ({ disabled: t || void 0 === m?.imageName }), [m?.imageName, t]),
      y = h(
        c.location.endsWith(jc.HWConsumables)
          ? "tankSetupConsumableSlot"
          : "tankSetupHWHangarConsumableSlot",
        (0, Da.useMemo)(
          () => ({
            intCD: e.intCD,
            slotType: jc.HWConsumables,
            fieldType: 1,
            installedSlotId: e.id,
            itemInstalledSetupIdx: e.itemInstalledSetupIdx,
            itemInstalledSetupSlotIdx: e.id,
            isMounted: e.installed,
            isMountedMoreThanOne: e.mountedMoreThanOne,
            emitterUID: window.subViews.get(R.aliases.hangar.shared.Consumables("resId")).uid,
          }),
          [e],
        ),
        x,
      ),
      C = -1 !== e.intCD ? y : {};
    (0, Da.useEffect)(() => {
      e.installed || n.play("mount", { target: "loadout-panel:slot:consumable" });
    }, [e.installed, n]);
    const w = u(),
      S = null !== w.state.virtualItem;
    return (
      (0, Da.useEffect)(() => {
        w.item?.getAttribute("data-drop-area") === Yr && _(d === e.id);
      }, [w.item, d, e.id]),
      (0, Ta.jsxs)("div", {
        className: $r,
        children: [
          (0, Ta.jsx)("div", {
            ...v,
            ...C,
            children: (0, Ta.jsx)(Se, {
              className: I(Hr, t && Wr, S && qr),
              classNames: { selectedOverlay: Kr },
              size: gi(g.value || gt.small),
              hovered: p,
              selected: a,
              disabled: t,
              "data-test-id": `equipmentSlot-${e.id}`,
              onClick: function (e) {
                !a && s && (s(), n.play("click", { target: "loadout-panel:slot", original: e }));
              },
              onMouseEnter: function () {
                (_(!0), S || n.play("mouse-enter", { target: "loadout-panel:slot:consumable" }));
              },
              onMouseLeave: function () {
                (void 0 !== d && w.item?.getAttribute("data-drop-area") === Yr) || _(!1);
              },
              dataDropItem: e.id,
              children: (0, Ta.jsx)(qi, {
                id: e.intCD,
                index: e.id,
                children: m?.imageName
                  ? (0, Ta.jsx)(Ei, {
                      undraggable: !r.computes.sectionDraggable(jc.HWConsumables),
                      itemId: e.id,
                      dataDropArea: Yr,
                      children: (0, Ta.jsx)(ut, {
                        name: m.imageName,
                        size: bi(g.value || gt.small),
                        overlayType: fi(e.overlayType),
                      }),
                    })
                  : (0, Ta.jsx)(Se.Empty, {}),
              }),
            }),
          }),
          f &&
            (0, Ta.jsx)("div", {
              className: Ur,
              children: (0, Ta.jsx)("div", {
                className: Fr,
                children: (0, Ta.jsx)(l, { text: b }),
              }),
            }),
          !e.installed &&
            (0, Ta.jsx)(Vi, { onClick: () => i.unmount(e.intCD, e.id), className: I(Gr, S && Vr) }),
        ],
      })
    );
  }),
  Qr = "Abilities_warningOverlay_eb2ce40",
  Jr = "Abilities_ca3beaf8",
  ec = "Abilities_slots_cd2031b9",
  tc = yt(function ({ groupIndex: e, sectionIndex: t, slotToComponent: a, onClick: s }) {
    const { controls: n } = oi(),
      { model: o } = qo(),
      i = Ge(
        { value: gt.small },
        { large: { value: gt.large }, extraLarge: { value: gt.extraLarge } },
      ),
      l = o.computes.sectionByIndex(e, t),
      r = o.computes.groupByIndex(e);
    return l && r
      ? (0, Ta.jsx)("div", {
          className: ec,
          children: (0, Ta.jsx)(ji, {
            dataDropArea: `${Yr}`,
            onDrop: (e, t) => {
              n.swapSlots({ leftID: t, rightID: e });
            },
            renderDraggingItem: (e) => {
              const t = l.slots[e];
              if (t)
                return (0, Ta.jsx)(ut, {
                  name: t.imageName,
                  size: bi(i.value || gt.small),
                  overlayType: fi(t.overlayType),
                });
            },
            children: (0, Ta.jsx)("div", {
              className: Jr,
              children: l.slots.map((n, o) =>
                (0, Ta.jsxs)(
                  Da.Fragment,
                  {
                    children: [
                      o > 0 && (0, Ta.jsx)(kr, {}),
                      (0, Ta.jsx)(zr, {
                        index: o,
                        sectionType: l.type,
                        groupIndex: e,
                        sectionIndex: t,
                        slotToComponent: a,
                        onClick: () =>
                          s?.(l.type, { slotIndex: n.id, groupId: r.id, sectionName: l.name }),
                      }),
                      l.warning && (0, Ta.jsx)("div", { className: Qr }),
                    ],
                  },
                  n.id,
                ),
              ),
            }),
          }),
        })
      : null;
  }),
  ac = "Shell_hoverOverlay_45e5f03f",
  sc = "Shell_4f8ed17c",
  nc = "Shell_icon_229c2d6f",
  oc = "Shell_base__selected_7aaeeab0",
  ic = "Shell_shellMechanic_bbe64f90",
  lc = "Shell_container_cd11209e",
  rc = "Shell_container__key_8b62e0c1",
  cc = "Shell_text_d3fedf21",
  dc = "Shell_infinity_9323d9d9",
  uc = "Shell_count_3143cf0e",
  mc = ne.resolve("aliases"),
  pc = "small",
  _c = "x64x64",
  hc = "medium",
  gc = yt(function ({ selected: e = !1, withKey: t = !1, className: a, slot: s }) {
    const { model: n } = hi(),
      o = bt(),
      i = $({
        resId: mc.read((e) => e.hangar.shared.Loadout("resId")),
        args: (0, Da.useMemo)(() => ({ slotId: s.id, slotType: bo }), [s.id]),
      }),
      r = Ge({ value: pc }, { large: { value: _c }, extraLarge: { value: hc } }).value,
      c = e ? n.computes.shell(s.id) : s;
    if (!c) return;
    const d = Or(s.keyName),
      u = Sc(o.location) && d;
    return (0, Ta.jsxs)("div", {
      className: I(sc, e && oc, a),
      "data-test-id": `shellSlot-${s.id}`,
      children: [
        u &&
          (0, Ta.jsx)("div", {
            className: I(lc, rc),
            children: (0, Ta.jsx)("div", { className: cc, children: (0, Ta.jsx)(l, { text: d }) }),
          }),
        (0, Ta.jsxs)("div", {
          ...i,
          children: [
            (0, Ta.jsxs)(Me, {
              path: `shell.${r}.${s.imageName}`,
              className: nc,
              children: [
                (0, Ta.jsx)("div", { className: ac }),
                c.mainMechanic && (0, Ta.jsx)(hr, { mechanic: c.mainMechanic, className: ic }),
              ],
            }),
            0 !== c.count
              ? (0, Ta.jsx)("div", { className: dc })
              : (0, Ta.jsx)("div", { className: uc, children: c.count }),
          ],
        }),
      ],
    });
  }),
  bc = "Shells_31052845",
  fc = "Shells_slot_56a45e0f",
  vc = "Shells_slot__customBackground_c8785d51",
  xc = "Shells_shell_7d5bc35b",
  yc = "Shells_content_8e80e668",
  Cc = "Shells_selectedSlotOverlay_b0aea0d4";
function wc({
  shells: e,
  section: t,
  groupIndex: a,
  sectionIndex: s,
  withKey: n = !1,
  disabled: o = !1,
  selected: i = !1,
  onClick: l,
}) {
  const r = W(),
    c = Ge(
      { value: gt.extraSmall },
      { large: { value: gt.large }, extraLarge: { value: gt.extraLarge } },
    ),
    d = !e.some((e) => e.count && e.count > 0);
  return (0, Ta.jsx)(Se, {
    classNames: { slot: I(fc, !o && vc), content: yc, selectedOverlay: Cc },
    size: gi(c.value || gt.small),
    hovered: !1,
    selected: i,
    disabled: o,
    onClick: function (e) {
      i ||
        o ||
        !l ||
        (l(t.type, { slotIndex: 0, groupIndex: a, sectionIndex: s }),
        r.play("click", { target: "loadout-panel:slot", original: e }));
    },
    children: e.map((e) =>
      (0, Ta.jsx)(
        gc,
        { className: xc, selected: i, disabled: o, withKey: n, slot: e, empty: d },
        e.id,
      ),
    ),
  });
}
var Ic = yt(function ({
  groupIndex: e,
  sectionIndex: t,
  withKey: a = !1,
  disabled: s,
  selected: n,
}) {
  const { model: o } = qo(),
    i = o.computes.sectionByIndex(e, t);
  if (!i) return null;
  const l = v(i.slots ?? [], (e) => e.intCD > 0);
  return (0, Ta.jsx)("div", {
    className: bc,
    children: (0, Ta.jsx)(wc, {
      shells: l,
      section: i,
      groupIndex: e,
      sectionIndex: t,
      withKey: a,
      disabled: s,
      selected: n,
    }),
  });
});
function Sc(e) {
  return e.indexOf("loadout") > 0;
}
var jc = { HWConsumables: "hw_consumables" },
  Nc = { [bo]: Ic, [jc.HWConsumables]: tc },
  kc = { [jc.HWConsumables]: Xr },
  Dc = {
    providersData: [
      { provider: _i, props: { options: { rootId: R.aliases.hangar.shared.Shells("resId") } } },
      {
        provider: ni,
        props: { options: { rootId: R.aliases.hangar.shared.Consumables("resId") } },
      },
      { provider: Wo, props: { options: { rootId: R.aliases.hangar.shared.Loadout("resId") } } },
      { provider: Uo, props: { options: { rootId: R.aliases.hangar.shared.Loadout("resId") } } },
    ],
    sectionToComponent: Nc,
    slotToComponent: kc,
  },
  Ac = {
    providersData: [...Dc.providersData],
    sectionToComponent: { ...Dc.sectionToComponent },
    slotToComponent: { ...Dc.slotToComponent },
  },
  Ec = (0, Da.createContext)(null);
function Mc({ children: e, index: t, sectionName: a }) {
  const s = (0, Da.useRef)(a),
    n = (function () {
      const e = (0, Da.useContext)(Ec);
      return (i(null !== e, "useContext must be used with in GroupContext"), e);
    })(),
    o = (0, Da.useRef)(n.typeToIndex),
    [l, r] = ce(() => ({ from: { x: 0 }, config: { tension: 600, friction: 50 } }));
  return (
    (0, Da.useLayoutEffect)(() => {
      const e = o.current,
        n = void 0 === e[a];
      if (s.current === a) return;
      const i = e[a];
      if ("" == a || n) return;
      if ("number" != typeof i) return;
      const l = i < t ? -1 : 1;
      return (
        r.start({ from: { x: l * nt(50) }, to: { x: 0 } }),
        () => {
          (r.stop(), r.start({ x: 0, immediate: !0 }));
        }
      );
    }, [r, a]),
    (0, Da.useEffect)(() => {
      ((s.current = a), (o.current = n.typeToIndex));
    }, [a, n.typeToIndex]),
    (0, Ta.jsx)(ae.div, { style: l, children: e })
  );
}
var Tc = "HwSection_1dc0f5ca",
  Pc = "HwSection_nitro_4c5295d9",
  Lc = "HwSection_hotKeyLabel_68263ae",
  Rc = "HwSection_text_82db274a",
  Bc = Da.memo(function ({ hwKeyName: e, hwIntCD: t }) {
    const a = bt(),
      s = Or(e),
      n = S({
        resId: R.aliases.hangar.shared.Loadout("resId"),
        contentId: R.views.halloween.mono.lobby.tooltips.ability_tooltip("resId"),
        args: { intCD: t, showPriceBlock: !1 },
      });
    return (0, Ta.jsxs)("div", {
      className: Tc,
      children: [
        Sc(a.location) &&
          (0, Ta.jsx)("div", {
            className: Lc,
            children: (0, Ta.jsx)("div", {
              className: Rc,
              children: (0, Ta.jsx)(l, { text: s, tooltipParams: { body: s } }),
            }),
          }),
        (0, Ta.jsx)("div", { ...n, className: Pc }),
      ],
    });
  }),
  [zc, Oc] = te("PresetSwitcherProvider")(
    ({ observableModel: e }) => ({ root: e.object() }),
    ({ externalModel: e }) => ({ switch: e.createCallbackNoArgs("onSwitch") }),
  ),
  $c = "PresetChanger_51555039",
  Hc = "PresetChanger_button_c38e75d1",
  Wc = "PresetChanger_buttonImg_7bd8fc71";
function qc(e) {
  const t = R.aliases.halloween.shared.PresetsSwitcher("resId");
  return (0, Ta.jsx)(re, {
    id: t,
    children: (0, Ta.jsx)(zc, {
      options: (0, Da.useMemo)(() => ({ rootId: t }), [t]),
      children: (0, Ta.jsx)(Uc, { ...e }),
    }),
  });
}
function Uc({ disabled: e }) {
  const { controls: t } = Oc();
  return (0, Ta.jsx)("div", {
    ...F({
      header: R.strings.halloween_lobby.ammoSetup.changeHotKey.header(),
      body: R.strings.halloween_lobby.ammoSetup.changeHotKey.body(),
    }),
    className: $c,
    children: (0, Ta.jsx)(He, {
      size: He.sizes.extraSmall,
      theme: He.themes.secondary,
      className: Hc,
      disabled: e,
      onClick: t.switch,
      children: (0, Ta.jsx)("div", { className: Wc }),
    }),
  });
}
var Fc = "Section_border_f048a346",
  Gc = "Section_borderImage_a85bea48",
  Vc = "Section_25f8d8f8",
  Kc = "Section_base__battleBoosters_492e7c5f",
  Zc = yt(function ({ index: e, vehicleId: t, groupIndex: a, onSectionClick: s }) {
    const n = (0, Da.useContext)(Rr),
      { model: o } = qo(),
      i = o.disabled.get(),
      l = o.computes.sectionByIndex(a, e),
      r = Ze((e, t) => {
        const a = o.computes.isSectionSelected(e);
        (!s && a) || l?.type === bo || s?.(e, t);
      }),
      c = W(),
      d = (0, Da.useMemo)(() => {
        function e() {
          c.play("swipe", { target: "loadout-panel:ammunition_panel:section" });
        }
        return l
          ? {
              idToSlot: l.slots.reduce((e, t) => (t.intCD < 0 || (e[t.intCD] = t.id), e), {}),
              type: l.type,
              vehicleId: t,
              onSwiped: Te(30, e),
            }
          : { idToSlot: {}, onSwiped: e };
      }, [l, c, t]);
    if (void 0 === l) return null;
    const u = (function ({ sectionToComponent: e = Mr, sectionType: t = "default" }) {
      return e[t] ?? e.default;
    })({ sectionToComponent: n.sectionToComponent, sectionType: l.type });
    return (0, Ta.jsxs)("div", {
      className: I(Vc, l.type === vo && Kc),
      children: [
        l.type !== bo &&
          (0, Ta.jsxs)(Ta.Fragment, {
            children: [
              (0, Ta.jsx)("div", { className: Fc }),
              (0, Ta.jsx)("div", { className: Gc }),
            ],
          }),
        u &&
          (0, Ta.jsx)(Hi.Provider, {
            value: d,
            children: (0, Ta.jsx)(u, {
              groupIndex: a,
              sectionIndex: e,
              withKey: o.computes.isSectionSelected(l.type),
              disabled: i,
              selected: o.computes.isSectionSelected(l.type),
              onClick: r,
              slotToComponent: n.slotToComponent,
            }),
          }),
      ],
    });
  }),
  Yc = "AmmunitionPanel_1e2712ac",
  Xc = "AmmunitionPanel_group_a19909f2",
  Qc = "AmmunitionPanel_sectionBlock_6c1bd0cd",
  Jc = yt(function ({ className: e, onSectionClick: t, vehicleId: a }) {
    const { model: s } = qo(),
      { model: n } = Fo(),
      o = s.computes.groups(),
      i = (0, Da.useMemo)(
        () => ({
          typeToIndex: o.reduce(
            (e, t) => (t.sections.reduce((t, a, s) => ((e[a.name] = s), e), {}), e),
            {},
          ),
        }),
        [o],
      );
    return (0, Ta.jsx)("div", {
      className: I(Yc, e),
      children: o.map(({ id: e, sections: o, currentIndex: l }, r) =>
        (0, Ta.jsx)(
          "div",
          {
            className: Xc,
            children: (0, Ta.jsx)(Ec.Provider, {
              value: i,
              children: j(
                o,
                (e) => e.slots.length > 0,
                (i, c) =>
                  (0, Ta.jsxs)(
                    Da.Fragment,
                    {
                      children: [
                        0 === r &&
                          c === o.length - 1 &&
                          (0, Ta.jsx)(qc, { disabled: s.disabled.get() }),
                        (0, Ta.jsx)(Mc, {
                          index: c,
                          sectionName: i.name,
                          children: (0, Ta.jsxs)("div", {
                            className: Qc,
                            children: [
                              (0, Ta.jsx)(Zc, {
                                index: c,
                                groupIndex: r,
                                vehicleId: a,
                                onSectionClick: t,
                              }),
                              i.type === jc.HWConsumables &&
                                (0, Ta.jsx)(Bc, {
                                  hwKeyName: n.accelerationKeyName.get(),
                                  hwIntCD: n.accelerationIntCD.get(),
                                }),
                            ],
                          }),
                        }),
                      ],
                    },
                    `${e}-${c}-${l}`,
                  ),
              ),
            }),
          },
          e,
        ),
      ),
    });
  }),
  ed = he("LoadoutPanel"),
  td = (0, Da.forwardRef)(function ({ children: e, className: t, ...a }, s) {
    return (0, Ta.jsx)(ed, { className: t, ref: s, ...a, children: e });
  }),
  ad = "AnomaliesButton_e0144c04",
  sd = "AnomaliesButton_bubble_e98e92d8";
function nd({ isNew: e, isDisabled: t, onClick: a, className: s }) {
  return (0, Ta.jsx)(E, {
    params: {
      resId: R.aliases.hangar.shared.Loadout("resId"),
      contentId: R.views.halloween.mono.lobby.tooltips.anomalies_entry_point_tooltip("resId"),
    },
    children: (0, Ta.jsxs)("div", {
      className: I(ad, s),
      children: [
        e &&
          (0, Ta.jsx)("div", {
            className: sd,
            children: (0, Ta.jsx)(tt.Root, {
              children: (0, Ta.jsx)(tt.Value, {
                value: R.strings.halloween_lobby.common.new(),
                size: D.small,
              }),
            }),
          }),
        (0, Ta.jsx)(na, { type: sa.anomalies, isDisabled: t, onClick: a }),
      ],
    }),
  });
}
var od = "LoadoutPanel_6ff39ae5",
  id = "LoadoutPanel_ammunitionPanel_baf41791",
  ld = "LoadoutPanel_button_4a540630";
function rd({
  className: e,
  onClick: t,
  toComparison: a,
  toAnomalies: s,
  areAnomaliesUnlocked: n,
  hasNewAnomaly: o,
}) {
  const i = Ze((e, a) => {
    const s = e === jc.HWConsumables ? eo.abilities : void 0;
    s && t(s, a);
  });
  return (0, Ta.jsx)(td, {
    className: I(od, e),
    children: (0, Ta.jsxs)(Br, {
      ...Ac,
      children: [
        (0, Ta.jsx)(Jc, { className: id, onSectionClick: i }),
        (0, Ta.jsx)(na, {
          className: ld,
          type: sa.comparison,
          onClick: a,
          tooltipParams: { body: R.strings.halloween_lobby.iconButton.comparison.default() },
        }),
        (0, Ta.jsx)(nd, { isNew: o, isDisabled: !n, onClick: s, className: ld }),
      ],
    }),
  });
}
var cd = {
  teamRepairKit: 1,
  hwInvisibility: 2,
  hwAoeDrainEnemyHpInstantShot: 3,
  hpRepairAndCrewHeal: 4,
  hwAoeStunInstantShot: 5,
  hwAoeDamageInstantShot: 6,
  fastReload: 8,
  damageShield: 9,
};
var dd = "hw_consumables",
  ud = "Action_ab2a2b2e",
  md = "Action_base__disabled_b9b41a41",
  pd = "Action_button_4133ceee",
  _d = "Action_icon_f3030341",
  hd = ne.resolve("images"),
  gd = ne.resolve("strings"),
  bd = ["cancel", "undo"],
  fd = (e, t) => (2 === t ? `${e}_last_modernized` : `${e}_modernized`),
  vd = (0, Da.forwardRef)(function (
    {
      actionType: e,
      imageSource: t,
      modernized: a,
      level: s,
      freeToDemount: n,
      disabledTooltipText: o,
      disabled: i = !1,
      tooltipBodyPath: l,
      className: r,
      onClick: c,
    },
    d,
  ) {
    const u = a ? fd(e, s) : e,
      m = i && "cancel" !== e,
      p = (0, Da.useMemo)(
        () => ({
          backgroundImage: `url(${t || hd.readOr(`loadout.actions.${u}`, () => hd.readOrEmpty(`tanksetup.actions.${u}`))})`,
        }),
        [u, t],
      );
    return (0, Ta.jsx)("div", {
      ...F(
        (0, Da.useMemo)(() => {
          if (m) return { body: o };
          const t = ((e, t, a, s) => (a ? "demount_plus" : s ? fd(e, t) : e))(e, s, n, a);
          return {
            header: gd.readOrEmpty(`tank_setup.tooltips.action.title.${t}`),
            body: bd.includes(t)
              ? void 0
              : gd.readOrEmpty(`tank_setup.tooltips.action.description.${l || t}`),
          };
        }, [e, m, o, n, a, s, l]),
      ),
      className: I(ud, m && md, r),
      children: (0, Ta.jsx)(He, {
        ref: d,
        autoAlignContent: !1,
        theme: Je.secondary,
        className: pd,
        disabled: m,
        "data-test-id": e,
        onClick: function (t) {
          (t.stopPropagation(), m || c(e));
        },
        children: (0, Ta.jsx)("div", { className: _d, style: p }),
      }),
    });
  }),
  xd = {
    base: "Actions_a97dca87",
    base__hidden: "Actions_base__hidden_6a4e6a7d",
    "options-hide": "Actions_options-hide_9b5544a9",
    base__shown: "Actions_base__shown_b7ebaba7",
    "options-show": "Actions_options-show_9b5544a9",
    actionItem: "Actions_actionItem_7ebdfdac",
  },
  yd = ne.resolve("strings");
function Cd({ availableActions: e, buyMoreDisabled: t, onActionClick: a, className: s }) {
  return (0, Ta.jsxs)("div", {
    className: I(xd.base, xd["base__" + (e.length ? "shown" : "hidden")], s),
    children: [
      e.includes("add_one") &&
        (0, Ta.jsx)(vd, {
          actionType: "add_one",
          disabled: t,
          onClick: a,
          className: xd.actionItem,
          disabledTooltipText: yd.readOrEmpty("tank_setup.dealPanel.tooltip.notEnough"),
        }),
      e.includes("cancel") &&
        (0, Ta.jsx)(vd, { actionType: "cancel", onClick: a, className: xd.actionItem }),
      e.includes("undo") &&
        (0, Ta.jsx)(vd, { actionType: "undo", onClick: a, className: xd.actionItem }),
    ],
  });
}
var wd = "Price_c00fc2b8",
  Id = "Price_icon_10cf08bf",
  Sd = "Price_icon__reverse_74b70497",
  jd = "Price_value_7bb80c7b";
function Nd({
  price: e,
  previousPrice: t,
  withZeroValue: a,
  ignoreDiscount: s,
  valueFirst: n,
  priceSeparator: o,
}) {
  const i = Ge({ value: Ve.extraSmall }, { small: { value: Ve.small } });
  return (0, Ta.jsx)("div", {
    className: wd,
    children: e.map(
      ({ value: e, currency: l, enough: r }, c) =>
        (a || e > 0) &&
        (0, Ta.jsxs)(
          Da.Fragment,
          {
            children: [
              c > 0 && o,
              (0, Ta.jsx)(Ue, {
                size: i.value,
                enabled: !s && t.length > 0,
                type: Re.currency,
                children: (0, Ta.jsx)(ot, {
                  type: l,
                  reverse: n,
                  enough: r,
                  classNames: { icon: I(Id, n && Sd), base: jd },
                  children: e,
                }),
              }),
            ],
          },
          c,
        ),
    ),
  });
}
var kd = "Storage_icon_f8835a96",
  Dd = "Storage_icon__reverse_aada9c9e",
  Ad = "Storage_value_edb11ec6";
function Ed({ itemsInStorage: e, valueFirst: t }) {
  return (0, Ta.jsx)(ot, {
    type: Oe.depot,
    reverse: t,
    size: Ve.small,
    enough: Boolean(e),
    classNames: { base: Ad, icon: I(kd, t && Dd) },
    children: e,
  });
}
var Md = {
  base: "Options_945d8a9e",
  base__hidden: "Options_base__hidden_1ab7a478",
  "options-hide": "Options_options-hide_6818b5da",
  base__shown: "Options_base__shown_620b2679",
  "options-show": "Options_options-show_6818b5da",
};
function Td({
  price: e,
  mounted: t,
  possibleZeroCount: a,
  show: s,
  itemsInStorage: n,
  className: o,
}) {
  const i = n || a,
    l = ze("loadout.installed_on_vehicle", "loadout.installed_on_vehicle_upscale");
  return (0, Ta.jsx)("div", {
    className: I(Md.base, Md["base__" + (s ? "shown" : "hidden")], o),
    children: t
      ? (0, Ta.jsx)(Me, { path: l, width: 24, height: 24 })
      : i
        ? (0, Ta.jsx)(Ed, { itemsInStorage: n })
        : e && (0, Ta.jsx)(Nd, { ...e, valueFirst: !0 }),
  });
}
var Pd = "AbilityCard_base__hoverless_a033c92f",
  Ld = "AbilityCard_content_780174b6",
  Rd = "AbilityCard_base__disabled_adca8bec",
  Bd = "AbilityCard_image_82162c5e",
  zd = "AbilityCard_nameWrapper_80b14503",
  Od = "AbilityCard_name_a84c449c",
  $d = "AbilityCard_options_b0b6ee23",
  Hd = "AbilityCard_actions_cd95ffdd",
  Wd = "AbilityCard_text_7b700e26",
  qd = "AbilityCard_cost_37eb6463",
  Ud = [Ko, Go, Vo, "select"],
  Fd = he("ConsumablesItem", "AbilityCard_98d24050");
var Gd = function ({ intCD: e, selected: t, item: a, controls: n }) {
    const {
        name: o,
        imageName: i,
        overlayType: l,
        description: r,
        builtIn: c,
        buyMoreDisabled: d,
        installedSlotId: u,
        disabled: m,
        mounted: p,
        itemsInStorage: _,
        mountedInOtherSetup: h,
        price: g,
      } = a,
      [b, f] = (function (e) {
        let t = e.lastIndexOf("\n");
        return -1 === t ? [e, void 0] : [e.substring(0, t), e.substring(t + 1)];
      })(r),
      v = u > -1,
      x = (0, Da.useMemo)(() => {
        const e = new Set();
        return m || !v
          ? e
          : (t || e.add(Ko),
            c || (e.add("add_one"), (_ > 0 || p) && !h ? e.add(Vo) : e.add(Go)),
            e);
      }, [m, v, t, c, _, p, h]),
      y = (0, Da.useCallback)(
        (t) => {
          n.actionSlot({ actionType: t, intCD: e, currentSlotId: u });
        },
        [n, e, u],
      );
    return (0, Ta.jsx)(Fd, {
      className: I(m && Rd, (("builtInEquipment" === l && t) || m) && Pd),
      onClick: function () {
        ("builtInEquipment" === l && t) || m || y(Ud.find((e) => x.has(e)) || "select");
      },
      children: (0, Ta.jsxs)("div", {
        className: Ld,
        children: [
          (0, Ta.jsx)("div", {
            className: Bd,
            children: (0, Ta.jsx)(ut, { name: i, overlayType: fi(l), size: ut.sizes.s180x135 }),
          }),
          (0, Ta.jsx)("div", {
            className: zd,
            children: (0, Ta.jsx)("div", { className: Od, children: o }),
          }),
          (0, Ta.jsx)(xe, { className: Wd, text: b, upgradeLegacy: !0 }),
          f && (0, Ta.jsx)(s, { text: f, className: qd, upgradeLegacy: !0 }),
          (0, Ta.jsx)(Td, {
            show: 0 === x.size,
            itemsInStorage: _,
            mounted: p || h,
            price: g,
            className: $d,
          }),
          (0, Ta.jsx)(Cd, {
            className: Hd,
            onActionClick: y,
            buyMoreDisabled: d,
            availableActions: Array.from(x),
          }),
        ],
      }),
    });
  },
  Vd = yt((e) => {
    const { model: t, controls: a } = oi(),
      s = t.computes.consumableById(e.intCD);
    if (s) return (0, Ta.jsx)(Gd, { ...e, item: s, controls: a });
  });
var Kd = "AmmunitionCard_card_2bd54c54",
  Zd = ne.resolve("aliases"),
  Yd = yt(function ({ card: e, type: a, className: s }) {
    const { model: n } = qo(),
      {
        mounted: o,
        disabled: i,
        installedSlotId: l,
        intCD: r,
        lockReason: c,
        locked: d,
        mountedMoreThanOne: u,
        itemInstalledSetupIdx: m,
        itemInstalledSetupSlotIdx: p,
      } = e,
      _ = n.selectedSlot.get(),
      g = d ? me.alert : -1 !== l ? me.done : void 0,
      b = -1 !== l && _ === l,
      f = !o && -1 !== l && _ !== l,
      v = $({
        resId: Zd.read((e) => e.hangar.shared.Loadout("resId")),
        args: (0, Da.useMemo)(
          () => ({ intCD: r, slotId: _, slotType: dd, tooltipId: "hangarCardModule" }),
          [r, _],
        ),
      }),
      x = (0, Da.useMemo)(
        () => ({
          id: -1 === l ? "tankSetupConsumableItem" : "tankSetupConsumableSlot",
          args: {
            isDisabled: i,
            fieldType: 0,
            intCD: r,
            installedSlotId: l,
            itemInstalledSetupSlotIdx: p,
            itemInstalledSetupIdx: m,
            isMounted: o,
            isMountedMoreThanOne: u,
            slotType: jc.HWConsumables,
            emitterUID: window.subViews.get(Zd.read((e) => e.hangar.shared.Consumables("resId")))
              .uid,
          },
        }),
        [i, l, r, m, p, o, u],
      ),
      y = h(x.id, x.args),
      C = (function ({ intCD: e, selected: t }) {
        return (0, Ta.jsx)(Vd, { intCD: e, selected: t });
      })({ intCD: r, selected: b, ammunitionType: a });
    if (C)
      return (0, Ta.jsx)("div", {
        ...v,
        className: s,
        children: (0, Ta.jsx)(t, {
          ...y,
          className: Kd,
          status: g,
          statusReason: a !== dd ? c : void 0,
          active: f,
          selected: b,
          disabled: i,
          "data-test-id": r,
          children: C,
        }),
      });
  }),
  Xd = {
    scrollContainer: "Content_scrollContainer_c90e13ef",
    scrollWrapper: "Content_scrollWrapper_249a7ad2",
    scrollContainer__top: "Content_scrollContainer__top_da09528a",
    scrollContainer__bottom: "Content_scrollContainer__bottom_da09528a",
    scrollContainer__both: "Content_scrollContainer__both_da09528a",
    scrollContent: "Content_scrollContent_967e8cf4",
    container: "Content_container_41594150",
    card: "Content_card_91abeb0",
    verticalBar: "Content_verticalBar_17a90908",
  };
function Qd({ cards: e, type: t }) {
  const a = Pe();
  return (
    (0, Da.useEffect)(() => z(a.recalculate), [e?.length, a.recalculate]),
    (0, Ta.jsx)(Ta.Fragment, {
      children: e.map((e) => (0, Ta.jsx)(Yd, { className: Xd.card, card: e, type: t }, e.intCD)),
    })
  );
}
var Jd = "top",
  eu = "bottom",
  tu = "both",
  au = "none";
var su = yt(function ({ type: e, className: t }) {
  const [a, s] = Da.useState(au),
    { api: n } = Qe();
  Da.useLayoutEffect(() => {
    const e = () => {
      var e, t, a;
      s(
        ((e = n.getContainerSize() ?? 0),
        (t = n.getWrapperSize() ?? 0),
        (a = n.animationScroll.scrollPosition.get()),
        e <= t ? au : a <= 10 ? eu : t + a >= e - 10 ? Jd : tu),
      );
    };
    return (
      n.events.on("change", e),
      n.events.on("recalculateContent", e),
      n.events.on("resizeHandled", e),
      () => {
        (n.events.off("resizeHandled", e),
          n.events.off("change", e),
          n.events.off("recalculateContent", e));
      }
    );
  }, [n]);
  const o = $e(e),
    i = Ze(() => {
      o && e !== o && n.applyScroll(0, { immediate: !0 });
    });
  Da.useEffect(() => {
    i();
  }, [i, e]);
  const l = (function () {
    const { model: e } = oi();
    return e.computes
      .consumables()
      .sort((e, t) => (cd[e.itemName] ?? 1 / 0) - (cd[t.itemName] ?? 1 / 0));
  })();
  return (0, Ta.jsxs)("div", {
    className: I(Xd.scrollContainer, Xd[`scrollContainer__${a}`], t),
    children: [
      (0, Ta.jsx)(st, {
        classNames: { wrapper: Xd.scrollWrapper, content: Xd.scrollContent },
        children: (0, Ta.jsx)(fe, {
          className: Xd.container,
          trashhold: `${e}`,
          children: (0, Ta.jsx)(Qd, { cards: l, type: e }),
        }),
      }),
      (0, Ta.jsx)(we, { classNames: { base: Xd.verticalBar } }),
    ],
  });
});
function nu(e) {
  return (0, Ta.jsx)(Ke, { children: (0, Ta.jsx)(su, { ...e }) });
}
var ou = "ConfirmationPanel_afa99a14",
  iu = "ConfirmationPanel_currencies_7544112d",
  lu = "ConfirmationPanel_plus_335af158",
  ru = "ConfirmationPanel_buttons_ad07fa9b",
  cu = (e) => e > 0,
  du = he("LeftBlock", "ConfirmationPanel_leftBlock_798f4c44"),
  uu = he("Currencies", iu),
  mu = he("Buttons", ru),
  pu = he("ConfirmationPanel", ou);
function _u(e) {
  return (0, Ta.jsx)(uu, {
    className: e.className,
    children: Da.Children.map(e.children, (e, t) =>
      (0, Ta.jsxs)(Ta.Fragment, { children: [cu(t) && (0, Ta.jsx)("div", { className: lu }), e] }),
    ),
  });
}
pu.Left = du;
var hu = "DealPanel_icon_f0ce4668",
  gu = "DealPanel_value_438c7871";
function bu(e, t) {
  return t === Oe.gold ? ft.formatNumber("gold", e) : ft.formatNumber("integral", e);
}
var fu = (0, Da.memo)(function ({ type: e, price: t }) {
    const a = Ge({ value: Ve.small }, { large: { value: Ve.medium } });
    return (0, Ta.jsxs)(ot, {
      ...F({
        body: ne
          .resolve("strings")
          .readOrEmpty(`tank_setup.dealPanel.tooltip.purchasedWith.${t.currency}`),
      }),
      reverse: !0,
      type: e ?? "formattedCurrency",
      size: a.value,
      classNames: { icon: hu, base: gu },
      enough: t.enough,
      children: [
        void 0 === e &&
          (0, Ta.jsx)(Me, {
            className: hu,
            path: `library.currency.${t.currency}_${et[a.value]}x${et[a.value]}`,
            width: et[a.value],
            height: et[a.value],
          }),
        bu(t.value, e),
      ],
    });
  }),
  vu = "DealPanel_leftBlock_e9fb0b4a",
  xu = "DealPanel_leftBlock__active_53e6aee9",
  yu = "DealPanel_checkbox_c6267a54",
  Cu = "DealPanel_checkbox__active_edd6c82d",
  wu = "DealPanel_checkboxLabel_7df5996",
  Iu = "DealPanel_buttonWrapper_e6c7f6fe",
  Su = "DealPanel_button_d186abe4",
  ju = "DealPanel_buttonContent_25d6c73c",
  Nu = ne.resolve("strings"),
  ku = "general",
  Du = "repair";
function Au(e) {
  if (e && Ae.includes(e)) return e;
}
var Eu = yt(function ({ type: e, className: t }) {
    const a = Ge({ value: _t.small }, { large: { value: _t.medium } }),
      { model: s, controls: n } = oi(),
      { controls: o, model: i } = { controls: n, model: s },
      l = F({ body: Nu.readOrEmpty("tank_setup.dealPanel.tooltip.notEnough") }),
      r = F(
        (0, Da.useMemo)(
          () =>
            e === Du
              ? {
                  header: Nu.readOrEmpty(`tank_setup.tooltip.autoRenewal.header.${e}`),
                  body: Nu.readOrEmpty(`tank_setup.tooltip.autoRenewal.body.${e}`),
                }
              : e && e !== ku
                ? {
                    header: Nu.readOrEmpty("tank_setup.tooltip.autoRenewal.header.general"),
                    body: Nu.readOrEmpty(`tank_setup.tooltip.autoRenewal.body.${e}`),
                  }
                : {
                    header: Nu.readOrEmpty("tank_setup.tooltip.autoRenewal.header.general"),
                    body: void 0,
                  },
          [e],
        ),
      ),
      c = i ? i.computes.dealData() : null,
      d = !!i && (c.canConfirm || c.prices.length > 0),
      u = $e(d),
      m = void 0 !== e,
      p = W();
    return (
      (0, Da.useEffect)(() => {
        (d && !1 === u && p.play("expand", { target: "loadout:deal-panel" }),
          d || !0 !== u || p.play("collapse", { target: "loadout:deal-panel" }));
      }, [p, d, u]),
      i && c
        ? (0, Ta.jsxs)(pu, {
            className: t,
            children: [
              (0, Ta.jsx)(it, {
                ...(m && r),
                className: I(yu, e && Cu),
                classNames: { label: wu },
                checked: m && c.autoRenewalEnabled,
                size: a.value,
                onCheckedChange: o.toggleAutoRenewal,
                children: Nu.readOrEmpty("tank_setup.dealPanel.autoRenew"),
              }),
              (0, Ta.jsxs)(pu.Left, {
                className: I(vu, d && xu),
                children: [
                  (0, Ta.jsx)(_u, {
                    children: c.prices.map((e, t) =>
                      (0, Ta.jsx)(fu, { type: Au(e.currency), price: e }, t),
                    ),
                  }),
                  (0, Ta.jsxs)(mu, {
                    children: [
                      (0, Ta.jsx)("div", {
                        ...(c.disabled && l),
                        className: Iu,
                        children: (0, Ta.jsx)(He, {
                          className: Su,
                          classNames: { content: ju },
                          disabled: (!c.canConfirm || c.disabled) && d,
                          onClick: o.confirm,
                          theme: Je.primary,
                          size: a.value,
                          "data-test-id": "dealPanelApply",
                          children: Nu.readOrEmpty("tank_setup.dealPanel.button.apply"),
                        }),
                      }),
                      (0, Ta.jsx)("div", {
                        className: Iu,
                        children: (0, Ta.jsx)(He, {
                          className: Su,
                          classNames: { content: ju },
                          disabled: !c.canCancel,
                          onClick: o.cancel,
                          theme: Je.secondary,
                          size: a.value,
                          "data-test-id": "dealPanelCancel",
                          soundTarget: "loadout:deal-panel:cancel_button",
                          children: Nu.readOrEmpty("tank_setup.dealPanel.button.cancel"),
                        }),
                      }),
                    ],
                  }),
                ],
              }),
            ],
          })
        : null
    );
  }),
  Mu = "AmmunitionSetup_14321dac",
  Tu = "AmmunitionSetup_dealPanel_64ad50ed";
Object.values(So);
function Pu({ type: e }) {
  const t = W(),
    a = (0, Da.useRef)(!1),
    s = (0, Da.useRef)(),
    n = $e(e);
  return (
    (0, Da.useEffect)(() => {
      if (e !== n && e && n) {
        if (a.current) return;
        ((a.current = !0),
          (s.current = setTimeout(() => (a.current = !1), 100)),
          t.play("switch", { target: "loadout:ammunition_setup" }));
      }
    }, [e, n, t]),
    V(() => clearTimeout(s.current)),
    (0, Ta.jsxs)("div", {
      className: Mu,
      children: [(0, Ta.jsx)(nu, { type: e }), (0, Ta.jsx)(Eu, { className: Tu, type: e })],
    })
  );
}
var Lu = "ScreenWrapper_inner_f586f6da",
  Ru = "ScreenWrapper_content_42e9ccec",
  Bu = he("LoadoutScreenWrapper", "ScreenWrapper_39a2fe74"),
  zu = yt(function ({ classNames: e, children: t }) {
    return (0, Ta.jsx)(Bu, {
      className: e?.base,
      children: (0, Ta.jsx)("div", {
        className: Lu,
        children: (0, Ta.jsx)("div", { className: I(Ru, e?.content), children: t }),
      }),
    });
  }),
  [Ou, $u] = te("VehicleTitleModelProvider")(
    ({ observableModel: e }) => ({ root: e.object() }),
    at,
  ),
  Hu = "VehicleTitle_e5c656e6",
  Wu = "VehicleTitle_vehName_4d31c340",
  qu = yt(function ({ className: e }) {
    const { model: t } = $u(),
      a = t.root.get().vehicleType,
      s = Ge(
        { vehTypesSize: A.Type.sizes.x24x24 },
        {
          medium: { vehTypesSize: A.Type.sizes.x48x48 },
          extraLarge: { vehTypesSize: A.Type.sizes.x64x64 },
        },
      );
    return (0, Ta.jsxs)("div", {
      className: I(Hu, e),
      children: [
        (0, Ta.jsx)(A.Type, { size: s.vehTypesSize, type: a, premium: !1 }),
        (0, Ta.jsx)(A.Name, { className: Wu, children: t.root.get().name }),
      ],
    });
  });
function Uu(e) {
  const t = R.aliases.halloween.shared.VehicleTitle("resId");
  return (0, Ta.jsx)(re, {
    id: t,
    children: (0, Ta.jsx)(Ou, {
      options: (0, Da.useMemo)(() => ({ rootId: t }), [t]),
      children: (0, Ta.jsx)(qu, { ...e }),
    }),
  });
}
var Fu = "LoadoutScreen_background_27176b85",
  Gu = "LoadoutScreen_ca4967fe",
  Vu = "LoadoutScreen_screenWrapper_c2b8b7a6",
  Ku = "LoadoutScreen_vehicleTitle_fa06ccfa",
  Zu = "LoadoutScreen_info_c568de1c",
  Yu = ne.resolve("aliases");
function Xu(e, t) {
  return { options: { rootId: t.read(e) } };
}
var Qu = new mt()
  .addWithProps(
    ni,
    Xu((e) => e.hangar.shared.Consumables("resId"), Yu),
  )
  .addWithProps(
    Wo,
    Xu((e) => e.hangar.shared.Loadout("resId"), Yu),
  );
function Ju(e) {
  const t = bt();
  ge(a.ESCAPE, () => {
    t.push(Jn, void 0);
  });
  const { page: s } = e.params;
  return (0, Ta.jsxs)("div", {
    className: Gu,
    children: [
      (0, Ta.jsx)("div", { className: Fu }),
      (0, Ta.jsx)(zu, {
        classNames: { base: Vu, info: Zu },
        children: (0, Ta.jsxs)(Ta.Fragment, {
          children: [
            (0, Ta.jsx)(Uu, { className: Ku }),
            void 0 !== s && Qu.render((0, Ta.jsx)(Pu, { type: s })),
          ],
        }),
      }),
    ],
  });
}
var em = "ButtonsPanel_9921c31",
  tm = "ButtonsPanel_aboutBtn_66ddb51",
  am = "ButtonsPanel_info_a3419b8d",
  sm = "ButtonsPanel_bestiaryContent_2ceacfca",
  nm = "ButtonsPanel_bestiaryBtn_66a66840",
  om = "ButtonsPanel_bestiaryIcon_2a2b2689",
  im = "ButtonsPanel_bestiaryText_6b2b1302",
  lm = "ButtonsPanel_bestiaryBubble_6dc7cb2e",
  rm = yt(function ({ className: e }) {
    const { model: t, controls: a } = Hn(),
      { isInfoPageEnabled: s } = t.root.get(),
      { hasUnlockedEnemies: n, hasNewEnemies: o } = t.bestiaryInfo.get(),
      i = F({ body: R.strings.halloween_lobby.hangar.tooltipAbout() }),
      l = F({
        header: n ? "" : R.strings.halloween_lobby.infoBestiary.simpleTooltip.header.disabled(),
        body: R.strings.halloween_lobby.infoBestiary.simpleTooltip.body.$dyn(
          "" + (n ? "enabled" : "disabled"),
        ),
      });
    return (0, Ta.jsxs)("div", {
      className: (0, ka.default)(em, e),
      children: [
        s &&
          (0, Ta.jsx)(He, {
            ...i,
            className: tm,
            theme: He.themes.secondary,
            classNames: { content: am },
            size: He.sizes.small,
            onClick: a.onAboutClick,
          }),
        (0, Ta.jsxs)(He, {
          ...l,
          className: nm,
          theme: He.themes.secondary,
          size: He.sizes.small,
          classNames: { content: sm },
          onClick: a.onBestiaryClick,
          disabled: !n,
          children: [
            (0, Ta.jsx)("div", { className: om }),
            (0, Ta.jsx)("div", {
              className: im,
              children: R.strings.halloween_lobby.infoBestiary.button.name(),
            }),
          ],
        }),
        (0, Ta.jsx)(tt.Root, {
          hidden: !o,
          className: lm,
          children: (0, Ta.jsx)(tt.Icon, { type: be.bubble, size: D.medium }),
        }),
      ],
    });
  }),
  cm = "shop",
  dm = "storage",
  um = "techtree",
  mm = "barracks",
  pm = "tournament",
  _m = "clans",
  hm = "clan",
  gm = "missions",
  bm = "personalMissions",
  fm = "modeSelector",
  vm = "achievements",
  xm = "replays",
  ym = {
    [cm]: "shop",
    [dm]: "storage",
    [um]: "techtree",
    [mm]: "barracks",
    [pm]: "tournament",
    [_m]: "clans",
    [hm]: "clan",
    [gm]: "missions",
    [bm]: "personalMissions",
    [fm]: "modeSelector",
    [vm]: "profile",
    [xm]: "replays",
  },
  Cm = (e) =>
    (0, Ta.jsx)("svg", {
      width: 7,
      height: 18,
      viewBox: "0 0 7 18",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ...e,
      children: (0, Ta.jsx)("path", {
        d: "M6.5 0H4.04686L0 9L4.04686 18H6.5L2.5 9L6.5 0Z",
        fill: "#EEEDE9",
        fillOpacity: 0.9,
      }),
    }),
  wm = {
    base: "MenuItem_92bbc5da",
    base__modeSelectorName: "MenuItem_base__modeSelectorName_28be5e00",
    base__enabledState: "MenuItem_base__enabledState_6f88d3d1",
    modeSelector: "MenuItem_modeSelector_1c338d85",
    modeIcon: "MenuItem_modeIcon_cfd63447",
    label: "MenuItem_label_8c0d77ba",
    base__disabledState: "MenuItem_base__disabledState_28be5e00",
    titleWrapper: "MenuItem_titleWrapper_cf46ff6b",
    title: "MenuItem_title_8d412cc5",
    arrow: "MenuItem_arrow_da9a9320",
    modeName: "MenuItem_modeName_36c0339e",
    clanEmblem: "MenuItem_clanEmblem_fe5255ab",
  },
  Im = "forts",
  Sm = ne.resolve("intl"),
  jm = ne.resolve("strings"),
  Nm = {
    [fm]: "tooltips.header.battleType",
    [pm]: "tooltips.header.buttons.tournaments",
    [vm]: "tooltips.header.buttons.profile",
  },
  km = {
    [_m]: "tooltips.header.buttons.clans.turnedOff",
    [bm]: "tooltips.header.buttons.personalMissionsDisabled",
    [Im]: "tooltips.header.buttons.forts.turnedOff",
  };
function Dm(e) {
  return Sm.toUpperCase(
    jm.readOrEmpty(`menu.headerButtons.${ym[e]}`) ||
      jm.readOrEmpty(`menu.headerButtons.${e}`) ||
      `{${e}}`,
  );
}
function Am({
  name: e,
  state: t,
  modeName: a,
  modeId: s,
  techTreeEvents: n,
  clanEmblem: o,
  onClick: i,
  modeIconPath: l,
  battleTypesPath: r = "R.images.gui.maps.icons",
}) {
  const c = W(),
    d = e === _m && o,
    u = F(
      (0, Da.useMemo)(
        () =>
          (function (e, t) {
            const a = ((t && km[e]) || Nm[e]) ?? `tooltips.header.buttons.${e}`;
            return { header: jm.readOrEmpty(`${a}.header`), body: jm.readOrEmpty(`${a}.body`) };
          })(d ? Im : e, "disabled" === t),
        [e, t, d],
      ),
    ),
    m = f("techtreeDiscount"),
    p = n && "techtree" === e ? m : u;
  const _ = l ?? `${r}.battleTypes.c_64x64.${s}`;
  return (0, Ta.jsx)("div", {
    ...p,
    className: I(wm.base, wm[`base__${t}State`], wm[`base__${e}Name`]),
    "data-test-id": e,
    onMouseEnter: function (e) {
      (p.onMouseEnter(e),
        "disabled" !== t &&
          c.play("mouse-enter", { target: "main-menu-widget:menu-item", original: e }));
    },
    onClick: function (a) {
      (p.onClick(),
        "disabled" !== t &&
          (i(e), c.play("click", { target: "main-menu-widget:menu-item", original: a })));
    },
    children: (() => {
      switch (e) {
        case fm:
          return (0, Ta.jsxs)(Ta.Fragment, {
            children: [
              (0, Ta.jsxs)("div", {
                className: wm.modeSelector,
                children: [
                  (0, Ta.jsx)("div", { className: wm.label, children: Dm(e) }),
                  a && (0, Ta.jsx)("div", { className: wm.modeName, children: Sm.toUpperCase(a) }),
                  (0, Ta.jsx)("div", {
                    className: wm.modeIcon,
                    style: { backgroundImage: `url(${_})` },
                  }),
                ],
              }),
              (0, Ta.jsx)(Cm, { className: wm.arrow }),
            ],
          });
        case _m:
          return (0, Ta.jsxs)("div", {
            className: wm.titleWrapper,
            children: [
              o &&
                (0, Ta.jsx)("div", {
                  style: { backgroundImage: `url(${o})` },
                  className: wm.clanEmblem,
                }),
              (0, Ta.jsx)("div", { className: wm.title, children: Dm(d ? "clan" : e) }),
            ],
          });
        default:
          return (0, Ta.jsx)("div", {
            className: wm.titleWrapper,
            children: (0, Ta.jsx)("div", { className: wm.title, children: Dm(e) }),
          });
      }
    })(),
  });
}
var [Em, Mm] = te()(
    ({ observableModel: e }) => ({
      menuItems: e.arrayClone("menuItems"),
      ...e.primitives(["modeName", "modeId", "hasTechTreeEvents", "clanEmblem"]),
    }),
    ({ externalModel: e }) => ({
      navigateTo: e.createCallback((e) => ({ name: e }), "onNavigate"),
    }),
  ),
  Tm = "MainMenu_222da7b7",
  Pm = yt(function ({ className: e, battleTypesPath: t, modeIconPath: a }) {
    const { model: s, controls: n } = Mm(),
      o = s.menuItems.get(),
      i = s.modeName.get(),
      l = s.modeId.get(),
      r = s.hasTechTreeEvents.get(),
      c = s.clanEmblem.get();
    return (0, Ta.jsx)("div", {
      className: I(Tm, e),
      children: de(o, (e) =>
        (0, Da.createElement)(Am, {
          ...e,
          key: e.name,
          battleTypesPath: t,
          modeIconPath: a,
          onClick: n.navigateTo,
          modeName: i,
          modeId: l,
          techTreeEvents: r,
          clanEmblem: c,
        }),
      ),
    });
  });
function Lm(e) {
  const { className: t, battleTypesPath: a, modeIconPath: s, ...n } = e;
  return (0, Ta.jsx)(Em, {
    ...n,
    children: (0, Ta.jsx)(Pm, { className: t, battleTypesPath: a, modeIconPath: s }),
  });
}
function Rm(e) {
  return (0, Ta.jsx)(Lm, { options: { rootId: R.aliases.hangar.shared.MainMenu("resId") }, ...e });
}
var Bm = "MainMenu_6ca38235",
  zm = "MainMenu_menu_26c05daf",
  Om = "MainMenu_panel_73a487f6";
function $m({ className: e }) {
  return (0, Ta.jsxs)("div", {
    className: (0, ka.default)(Bm, e),
    children: [(0, Ta.jsx)(Rm, { className: zm }), (0, Ta.jsx)(rm, { className: Om })],
  });
}
var Hm = "Rent_ee0f8d38",
  Wm = "Rent_label_2a00f6f2",
  qm = "Rent_buttons_7e746524",
  Um = "Rent_primaryButton_d154c62e",
  Fm = "Rent_additionalButtons_be527838",
  Gm = "Rent_anomaliesButton_e1c1378a";
function Vm({
  showComparison: e,
  showPacks: t,
  showTasks: a,
  className: s,
  taskIndex: n,
  selectedMission: o,
  showAnomalies: i,
  areAnomaliesUnlocked: l,
  hasNewAnomaly: r,
}) {
  const c = n === o,
    d = Ge({ size: Ie.small }, { large: { size: Ie.medium } });
  return (0, Ta.jsxs)("div", {
    className: (0, ka.default)(Hm, s),
    children: [
      (0, Ta.jsx)(
        se,
        {
          classMix: Wm,
          text: c
            ? R.strings.halloween_lobby.vehicle.tasks.locked()
            : R.strings.halloween_lobby.vehicle.rent.label(),
          binding: { number: Vt(n) },
          alignContent: Ye.Center,
          justifyContent: Ye.Center,
          isTruncationAvailable: !0,
          isTooltipEnable: !0,
        },
        `mission${o}task${n}`,
      ),
      (0, Ta.jsxs)("div", {
        className: qm,
        children: [
          (0, Ta.jsx)(le, {
            isEnabled: c,
            header: R.strings.halloween_tooltips.hangar.objectiveBtn.header(),
            body: R.strings.halloween_tooltips.hangar.objectiveBtn.body(),
            children: (0, Ta.jsx)(He, {
              className: Um,
              size: d.size,
              onClick: a,
              disabled: c,
              theme: He.themes.primary,
              children: R.strings.halloween_lobby.vehicle.rent.tasks(),
            }),
          }),
          (0, Ta.jsx)(He, {
            className: Um,
            theme: He.themes.secondary,
            size: d.size,
            onClick: t,
            children: R.strings.halloween_lobby.vehicle.rent.packs(),
          }),
          (0, Ta.jsxs)("div", {
            className: Fm,
            children: [
              (0, Ta.jsx)(na, {
                type: sa.comparison,
                onClick: e,
                tooltipParams: { body: R.strings.halloween_lobby.iconButton.comparison.default() },
              }),
              (0, Ta.jsx)(nd, { isNew: r, isDisabled: !l, onClick: i, className: Gm }),
            ],
          }),
        ],
      }),
    ],
  });
}
var Km = "HangarApp_3e4fb379",
  Zm = "HangarApp_mainMenu_37a06a8e",
  Ym = "HangarApp_bg_e218bed8",
  Xm = "HangarApp_vignette_7231e485",
  Qm = "HangarApp_difficulty_aecd4074",
  Jm = "HangarApp_enemyBtn_2885892e",
  ep = "HangarApp_enemyBtn__hide_98bf9678",
  tp = "HangarApp_giftPreviewWrapper_82b9c773",
  ap = "HangarApp_giftPreview_f85fe87e",
  sp = "HangarApp_giftPreview__show_faccd6d",
  np = "HangarApp_giftPreview__hide_47da55f6",
  op = "HangarApp_umg_a7f95ee7",
  ip = "HangarApp_leftSlider_92721711",
  lp = "HangarApp_rightSlider_ccf3a4e6",
  rp = "HangarApp_footer_ff89bf62",
  cp = "HangarApp_carousel_f508bb47",
  dp = "HangarApp_tankSetup_760b1ec1",
  up = "HangarApp_base__vehicleLocked_59e8707a",
  mp = "HangarApp_tankSetup__opened_dbef4f57",
  pp = "HangarApp_rent_7d20b56d",
  _p = yt(function () {
    const { model: e, controls: t } = Hn(),
      a = bt(),
      {
        slidesCount: s,
        isVehicleLocked: n,
        selectedSlide: o,
        scrollToSlide: i,
        lockedMissionIndex: l,
        isCompleted: r,
        isOpened: c,
        areAnomaliesUnlocked: d,
        hasNewAnomaly: u,
      } = e.root.get(),
      m = (0, Da.useRef)(o),
      [h, g] = (0, Da.useState)(o),
      [b, f] = (0, Da.useState)(!1),
      v = o + 1,
      x = o - 1,
      y = h === s,
      C = pe(),
      [w, I] = (0, Da.useState)(!1),
      S = a.location === Jn;
    ((0, Da.useEffect)(() => {
      (t.onViewLoaded(), De(!0));
    }, [t]),
      (0, Da.useEffect)(() => {
        C ||
          m.current === h ||
          (t.onSlide(h),
          (m.current = h),
          We(() => {
            t.onWidgetsUpdate(h);
          }, 200));
      }, [h, t, C]),
      (0, Da.useEffect)(() => {
        0 !== i &&
          We(() => {
            h !== i && (g(i), f(!0), Fe.sound(St));
          }, 600);
      }, [i]),
      (0, Da.useEffect)(
        () =>
          We(() => {
            h !== o && (g(o), f(!0), Fe.sound(St));
          }, 600),
        [o],
      ),
      (0, Da.useEffect)(() => {
        y && I(y);
      }, [y]));
    const j = (0, Da.useCallback)(() => {
        (f(!0), g(v));
      }, [v]),
      N = (0, Da.useCallback)(() => {
        (f(!0), g(x));
      }, [x]),
      k = (0, Da.useCallback)(() => {
        (f(!1), I(y));
      }, [y]);
    return (
      (0, Da.useEffect)(() => {
        !S && b && k();
      }, [S, b, k]),
      (0, Ta.jsxs)("div", {
        className: (0, ka.default)(Km, n && up),
        children: [
          (0, Ta.jsx)(p, { children: (0, Ta.jsx)(_, { path: `${eo.root}/:page`, component: Ju }) }),
          S &&
            (0, Ta.jsxs)(Ta.Fragment, {
              children: [
                (0, Ta.jsx)(ho, {
                  activeIndex: o,
                  maxCount: s,
                  isCompleted: r,
                  isOpened: c,
                  isAnimationPlaying: b,
                  onAnimationCompleted: k,
                  className: Ym,
                }),
                (0, Ta.jsx)("div", { className: Xm }),
                (0, Ta.jsx)($m, { className: Zm }),
                (0, Ta.jsx)(hs, { className: Qm }),
                (0, Ta.jsx)("div", {
                  className: op,
                  children: (0, Ta.jsx)(zn, {
                    selectedMissionID: h,
                    selectedSlideID: h,
                    onRewardPathSizeChange: at,
                  }),
                }),
                !r &&
                  (0, Ta.jsx)("div", {
                    className: tp,
                    children: (0, Ta.jsx)(
                      ia,
                      {
                        ...e.mainGiftVehicle.get(),
                        onClick: t.onPreview,
                        isButtonDisabled: !y,
                        className: (0, ka.default)(ap, y && sp, w && !y && np),
                      },
                      "" + (y ? "show" : "hide"),
                    ),
                  }),
                (0, Ta.jsx)("div", {
                  className: (0, ka.default)(Jm, y && ep),
                  children: (0, Ta.jsx)(Qn, {
                    selectedMissionID: h,
                    selectedSlideID: h,
                    onClick: t.onEnemyClick,
                  }),
                }),
                o > 1 && (0, Ta.jsx)(Jt, { className: ip, type: ea.Left, disabled: b, onClick: N }),
                o < s &&
                  (0, Ta.jsx)(Jt, { className: lp, type: ea.Right, disabled: b, onClick: j }),
                (0, Ta.jsxs)("div", {
                  className: rp,
                  children: [
                    (0, Ta.jsx)(Ka, { className: cp }),
                    (0, Ta.jsx)(Vm, {
                      className: pp,
                      showPacks: t.onPacksClick,
                      showTasks: t.onTasksClick,
                      showComparison: t.onComparisonClick,
                      taskIndex: l,
                      selectedMission: h,
                      showAnomalies: t.onAnomaliesClick,
                      areAnomaliesUnlocked: d,
                      hasNewAnomaly: u,
                    }),
                  ],
                }),
              ],
            }),
          (0, Ta.jsx)("div", {
            className: (0, ka.default)(dp, !S && mp),
            children: (0, Ta.jsx)(rd, {
              onClick: function (e, t) {
                a.push(e, t);
              },
              toComparison: t.onComparisonClick,
              toAnomalies: t.onAnomaliesClick,
              areAnomaliesUnlocked: d,
              hasNewAnomaly: u,
            }),
          }),
        ],
      })
    );
  }),
  hp = o([
    {
      click: {
        "loadout:popular-loadouts-content:arrow-wrapper": "arrow",
        "loadout:deal-panel:cancel_button": "cancelcloseno",
        "loadout-panel:slot:unmount-button": "cancelcloseno",
        "loadout-panel:slot:equipment:specialization:firepower": "cons_equipment_slot_firepower",
        "loadout-panel:slot:equipment:specialization:survivability":
          "cons_equipment_slot_survivability",
        "loadout-panel:slot:equipment:specialization:stealth": "cons_equipment_slot_stealth",
        "loadout-panel:slot:equipment:specialization:mobility": "cons_equipment_slot_mobility",
        "loadout-panel:slot": "yes1",
      },
      expand: { "loadout:deal-panel": "cons_select_view" },
      collapse: { "loadout:deal-panel": "cons_select_view" },
      switch: { "loadout:ammunition_setup": "cons_select_view" },
      on: {
        "loadout:ammunition_setup:specialization-filter:firepower":
          "cons_equipment_filter_on_firepower",
        "loadout:ammunition_setup:specialization-filter:survivability":
          "cons_equipment_filter_on_survivability",
        "loadout:ammunition_setup:specialization-filter:stealth":
          "cons_equipment_filter_on_stealth",
        "loadout:ammunition_setup:specialization-filter:mobility":
          "cons_equipment_filter_on_mobility",
        "loadout-panel:slot:equipment:specialization": "cons_equipment_bonus",
        "loadout-panel:slot:instruction:gunner_smoothTurret-crew_instruction":
          "cons_instructions_steady_hand",
        "loadout-panel:slot:instruction:driver_virtuoso-crew_instruction":
          "cons_instructions_combat_course",
        "loadout-panel:slot:instruction:driver_smoothDriving-crew_instruction":
          "cons_instructions_gearbox_intricacy",
        "loadout-panel:slot:instruction:fireFighting-crew_instruction":
          "cons_instructions_firefighters",
        "loadout-panel:slot:instruction:naturalCover-crew_instruction":
          "cons_instructions_natural_cover",
        "loadout-panel:slot:instruction:gunner_rancorous-crew_instruction":
          "cons_instructions_focus_target",
        "loadout-panel:slot:instruction:loader_pedant-crew_instruction":
          "cons_instructions_shell_organizer",
        "loadout-panel:slot:instruction:commander_practical-crew_instruction":
          "cons_instructions_thorough_preparations",
        "loadout-panel:slot:instruction:commander_enemyShotPredictor-crew_instruction":
          "cons_instructions_heightened_vigilance",
      },
      off: { "loadout:ammunition_setup:specialization-filter": "cons_equipment_filter_off" },
      mount: {
        "loadout-panel:slot:equipment": "cons_equipment_mount",
        "loadout-panel:slot:instruction": "cons_instructions_mount",
        "loadout-panel:slot:consumable": "cons_consumables_mount",
      },
      warn: { "loadout-panel:slot:instruction": "cons_instructions_equip_not_suitable" },
      swipe: { "loadout-panel:ammunition_panel:section": "cons_equipment_swipe" },
      increaseAmount: { "loadout:shells_setup:screen": "cons_ammo_single_plus" },
      decreaseAmount: { "loadout:shells_setup:screen": "cons_ammo_single_minus" },
      increaseAmountRoll: { "loadout:shells_setup:screen": "cons_ammo_roll_plus" },
      decreaseAmountRoll: { "loadout:shells_setup:screen": "cons_ammo_roll_minus" },
    },
    {
      "mouse-enter": { "main-menu-widget:menu-item": "highlightx" },
      click: {
        "main-menu-widget:menu-item": "yes1",
        "vehicle-menu-widget:button": "yes1",
        "carousel:arrow_button": "carouselButton",
        "crew-widget:dog-slot": "rudy",
        "crew-widget:slot": "yes1",
      },
      expand: { "vehicle-menu-widget:button": "gui_vehicle_menu_open" },
    },
  ]);
je(
  new mt()
    .addWithProps(ht, { soundsOverrides: hp })
    .add(Z)
    .add($n)
    .render((0, Ta.jsx)(_p, {})),
)
  .then(() => ke(document.getElementById("root")))
  .then(() => Xe())
  .then(() => De(!1));
