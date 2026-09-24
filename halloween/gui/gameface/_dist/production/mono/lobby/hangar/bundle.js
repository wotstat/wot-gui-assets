import { r as e } from "../chunks/rolldown-runtime.js";
import {
  $r as t,
  $t as a,
  An as s,
  Ar as n,
  At as o,
  Bn as i,
  Br as l,
  Bt as r,
  C as c,
  Cn as d,
  D as u,
  En as m,
  F as p,
  Fi as _,
  Fn as h,
  Fr as g,
  G as b,
  Gr as f,
  Gt as v,
  H as x,
  Hr as y,
  I as C,
  Ii as w,
  In as I,
  Ir as S,
  It as j,
  Jr as N,
  Jt as k,
  Kt as D,
  Li as A,
  Ln as E,
  Lr as M,
  Lt as T,
  M as P,
  Mr as L,
  Nn as B,
  Nr as z,
  O,
  On as $,
  Or as H,
  Pn as W,
  Pr as q,
  Q as U,
  Qn as F,
  Qr as G,
  R as V,
  Ri as Z,
  Rr as K,
  S as Y,
  Sr as X,
  T as Q,
  Tn as J,
  Un as ee,
  Ut as te,
  Vi as ae,
  Vn as se,
  Vr as ne,
  Vt as oe,
  Wn as ie,
  Wr as le,
  Wt as re,
  Xn as ce,
  Xr as de,
  Xt as ue,
  Yn as me,
  Yt as pe,
  Z as _e,
  Zr as he,
  Zt as ge,
  _ as be,
  _i as fe,
  _r as ve,
  an as xe,
  at as ye,
  b as Ce,
  bn as we,
  br as Ie,
  ci as Se,
  di as je,
  dt as Ne,
  ei as ke,
  en as De,
  er as Ae,
  et as Ee,
  fi as Me,
  ft as Te,
  g as Pe,
  gt as Le,
  hr as Re,
  ht as Be,
  ir as ze,
  it as Oe,
  j as $e,
  jr as He,
  k as We,
  lt as qe,
  mi as Ue,
  mr as Fe,
  mt as Ge,
  nn as Ve,
  nr as Ze,
  oi as Ke,
  on as Ye,
  ot as Xe,
  pt as Qe,
  q as Je,
  qt as et,
  ri as tt,
  rn as at,
  tt as st,
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
import { n as Zt, r as Kt, t as Yt } from "../chunks/vehicle_type.js";
import { n as Xt, t as Qt } from "../chunks/key_icon.js";
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
var Na = e(A()),
  ka = e(It()),
  Da = e(Z()),
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
      hasDaily: c,
      lockedCarousel: d = !1,
      dragging: u,
      className: m,
      click: p,
      clickPreview: _,
    }) => {
      const h = ae.resolve("strings"),
        g = ae.resolve("views"),
        b = ae.resolve("aliases"),
        [f, v] = (0, Da.useState)(!1),
        [x, y] = (0, Da.useState)(!1),
        [C, w] = (0, Da.useState)(!1),
        S = i === la.Default,
        j = i === la.Locked,
        N = i === la.InBattle,
        k = d || j || N,
        D = S ? "" : h.readOrEmpty(`halloween_lobby.carousel.card.${i}`),
        A = Re(
          `R.images.gui.maps.icons.hangar.carousel.cards.alerts.${i}`,
          `R.images.gui.maps.icons.hangar.carousel.cards.alerts.${i}_upscale`,
        ),
        M = Fe(
          { vehTypesSize: Je.Type.sizes.x24x24, bgTilesCountInChunk: 5, bgName: "small_" },
          {
            medium: { vehTypesSize: Je.Type.sizes.x24x24, bgTilesCountInChunk: 3, bgName: Pa },
            large: { vehTypesSize: Je.Type.sizes.x24x24, bgTilesCountInChunk: 3, bgName: Pa },
            extraLarge: { vehTypesSize: Je.Type.sizes.x48x48, bgTilesCountInChunk: 3, bgName: Pa },
          },
        ),
        T = () => {
          d || l || (n in La && Ue.sound(La[n]), p(a));
        },
        P = W({
          body: h.readOrEmpty(
            N
              ? "halloween_lobby.iconButton.preview.isDisabled"
              : "halloween_lobby.iconButton.preview.default",
          ),
        }),
        L = I({
          resId: b.read((e) => e.halloween.shared.Carousel("resId")),
          contentId: g.read((e) => e.halloween.mono.lobby.tooltips.simple_format_tooltip("resId")),
          args: { id: ra.dailyQuest },
        }),
        R = E(
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
          d && Ma.base__lockedCarousel,
          x && Ma.base__hoverPreview,
          C && Ma.base__activePreview,
        ),
        children: [
          (0, Ta.jsxs)("div", {
            className: (0, ka.default)(Ma.card, m),
            onMouseLeave: () => v(!1),
            onMouseEnter: () => {
              l || d || (v(!0), Ue.highlight());
            },
            onClick: T,
            children: [
              (0, Ta.jsxs)("div", {
                ...R,
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
                      (0, Ta.jsx)(Je.Type, {
                        className: Ma.vehType,
                        size: M.vehTypesSize,
                        type: o,
                        premium: !1,
                      }),
                      (0, Ta.jsx)(Je.Name, { className: Ma.vehName, children: s }),
                    ],
                  }),
                  (0, Ta.jsx)("div", {
                    className: (0, ka.default)(Ma.cardSelected, Ma.cardSelected__border),
                  }),
                  (0, Ta.jsx)("div", { className: Ma.shape }),
                ],
              }),
              c &&
                (0, Ta.jsx)("div", {
                  ...L,
                  onClick: T,
                  children: (0, Ta.jsx)(Qt, { size: Xt.C24x24, className: Ma.daily, gray: !l }),
                }),
              (0, Ta.jsxs)("div", {
                ...P,
                className: Ma.containerPreview,
                children: [
                  (0, Ta.jsx)("div", { className: Ma.btnPreview }),
                  (0, Ta.jsx)("div", {
                    onClick: () => {
                      N || (n in La && Ue.sound(La[n]), w(!0), _(t));
                    },
                    onMouseEnter: () => {
                      N || (w(!1), y(!0), Ue.highlight());
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
                !S &&
                  (0, Ta.jsxs)(Ta.Fragment, {
                    children: [
                      (0, Ta.jsx)("div", {
                        className: Ma.stateIcon,
                        style: { backgroundImage: `url('${A}')` },
                      }),
                      (0, Ta.jsx)("div", {
                        className: (0, ka.default)(
                          Ma.stateText,
                          i !== la.Locked && Ma.stateText__light,
                        ),
                        children: (0, Ta.jsx)(r, { content: D }),
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
  return (0, Ta.jsx)(Oe, {
    classNames: {
      base: (0, ka.default)(Ba.base, Ba[`base__${e}`], a && Ba.base__disable, t),
      content: Ba.icon,
    },
    theme: Oe.themes.secondary,
    size: Oe.sizes.small,
    autoAlignContent: !1,
    onClick: () => {
      (Ue.click(), s());
    },
  });
}
var [$a, Ha] = J()(
    ({ observableModel: e }) => {
      const t = { root: e.object(), vehicles: e.array("vehicles", []) },
        a = dt(
          () =>
            !q(
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
    ve();
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
      [d, m] = (0, Da.useState)("left"),
      p = "left" === d,
      _ = "right" === d,
      h = o.type === Aa.Dragging,
      g = new Array(t.computes.getCarouselLength()).fill(0),
      b = (0, Da.useCallback)(() => {
        n.applyStepTo(We.Next);
      }, [n]),
      f = (0, Da.useCallback)(() => {
        n.applyStepTo(We.Prev);
      }, [n]),
      v = Fe({ size: qa }, { medium: { size: Ua }, large: { size: Fa }, extraLarge: { size: Ga } }),
      x = (0, Da.useCallback)(() => {
        if (l.current && i.current) {
          const e = n.getContainerSize(),
            t = n.getWrapperSize() < e;
          (c(t), (l.current.style.cursor = t ? "" : "auto"));
        }
      }, [n]),
      y = (0, Da.useCallback)(() => {
        const [e, t] = n.getBounds(),
          a = n.animationScroll.scrollPosition.goal;
        m(a === e ? "left" : a === t ? "right" : "center");
      }, [n]),
      C = (0, Da.useCallback)(() => {
        const e = K(t.vehicles.get(), (e) => e.invID === s);
        void 0 !== e && r && n.applyScroll(160 * e, { immediate: !1 });
      }, [r, t.vehicles, n, s]),
      w = Ze(y);
    ((0, Da.useEffect)(
      () => (
        n.events.on("change", w),
        n.events.on("recalculateContent", x),
        n.events.on("resizeHandled", x),
        () => {
          (n.events.off("change", w),
            n.events.off("recalculateContent", x),
            n.events.off("resizeHandled", x));
        }
      ),
      [n.events, w, x],
    ),
      (0, Da.useEffect)(
        () =>
          L(() =>
            L(() => {
              (x(), a.changeSize(parseFloat(v.size ?? "")));
            }),
          ),
        [x, v.size, a],
      ),
      (0, Da.useEffect)(
        () =>
          L(() => {
            C();
          }),
        [C],
      ));
    const I = (0, Da.useCallback)(
        (e) => {
          a.changeVehicle(e);
        },
        [a],
      ),
      S = (0, Da.useCallback)(
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
                p && Wa.scrollBgMask__left,
                _ && Wa.scrollBgMask__right,
              ),
              children: (0, Ta.jsx)("div", {
                className: Wa.scrollBG,
                children: le(g, (e, t) =>
                  (0, Ta.jsx)("div", { className: Wa.itemBg }, `scrollBG_${e}${t}`),
                ),
              }),
            }),
            r &&
              (0, Ta.jsx)(Oa, { className: Wa.leftBtn, type: za.Left, isDisabled: p, onClick: b }),
            (0, Ta.jsx)("div", {
              className: (0, ka.default)(Wa.scroll, p && Wa.scroll__left, _ && Wa.scroll__right),
              ref: i,
              children: (0, Ta.jsx)(u.Horizontal.Area.Default, {
                api: n,
                classNames: { wrapper: (0, ka.default)(Wa.content, !r && Wa.content__noScroll) },
                children: (0, Ta.jsxs)("div", {
                  className: Wa.items,
                  ref: l,
                  children: [
                    le(t.vehicles.get(), (e, a) =>
                      (0, Ta.jsx)(
                        Ra,
                        {
                          index: a,
                          className: Wa.item,
                          selected: s === e.invID,
                          lockedCarousel: t.computes.getCarouselLock(),
                          dragging: h,
                          click: I,
                          clickPreview: S,
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
                isDisabled: _,
                onClick: f,
              }),
          ],
        }),
        Na.createPortal(
          h && r && (0, Ta.jsx)("div", { className: Wa.draggingOverlay }),
          document.body,
        ),
      ],
    });
  }),
  Za = (0, Da.memo)(function (e) {
    return (0, Ta.jsx)($a, {
      options: (0, Da.useMemo)(
        () => ({ rootId: R.aliases.halloween.shared.Carousel("resId") }),
        [],
      ),
      children: (0, Ta.jsx)(ht, { children: (0, Ta.jsx)(Va, { ...e }) }),
    });
  }),
  [Ka, Ya] = J()(
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
    ? (0, Ta.jsx)(v, {
        params: {
          header: R.strings.halloween_lobby.difficult.disabled.header(),
          body: R.strings.halloween_lobby.difficult.disabled.body(),
        },
        children: e,
      })
    : (0, Ta.jsx)(D, {
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
    const { controls: l } = Ya(),
      r = 1 !== i(),
      c = (0, Da.useRef)(null),
      d = Fe({ iconSize: r ? ls : os }, { extraLarge: { iconSize: r ? rs : is } }),
      u = ((e, t, a) => {
        if (!fe.isLow()) {
          if (e) return R.videos.halloween.difficulty_new();
          if (a === Xa.SELECTED && !t) return R.videos.halloween.difficulty_selected();
        }
      })(n, a, t),
      m = `R.images.halloween.gui.maps.icons.difficulties.${d.iconSize}.diff_${e}`;
    return (
      (0, Da.useEffect)(() => {
        const e = c.current;
        e && He(() => e.play(), 10);
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
            t !== Xa.DEFAULT || a || Ue.sound(At);
          },
          onClick: () => {
            if (t !== Xa.DEFAULT || a || s) return;
            const n = Ja[e];
            (void 0 !== n && Ue.sound(n), l.swichLevel(e));
          },
          children: [
            u && (0, Ta.jsx)(re, { ref: c, className: cs.video, src: u, loop: !0 }),
            (0, Ta.jsx)(De, { path: `${m}_${s ? ss : es}`, className: cs.icon }),
            (0, Ta.jsx)(De, { path: `${m}_${s ? ns : as}`, className: cs.iconSelected }),
            t === Xa.DEFAULT &&
              !a &&
              !s &&
              (0, Ta.jsx)(De, { path: `${m}_${ts}`, className: cs.iconHighlight }),
            (0, Ta.jsx)("div", {
              className: cs.label,
              children: R.strings.halloween_lobby.difficult.uppercase.$dyn(`level_${e}`),
            }),
            (0, Ta.jsx)(et.Root, {
              className: cs.bubble,
              hidden: !n,
              children: (0, Ta.jsx)(et.Value, { value: R.strings.halloween_lobby.difficult.new() }),
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
        children: le(t.difficulties.get(), (e) =>
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
    return (0, Ta.jsx)(Ka, {
      options: (0, Da.useMemo)(
        () => ({ rootId: R.aliases.halloween.shared.Difficulty("resId") }),
        [],
      ),
      children: (0, Ta.jsx)(_s, { ...e }),
    });
  }),
  [gs, bs] = J()(
    ({ observableModel: e }) => {
      const t = { root: e.object(), types: e.array("types"), reward: e.object("bonus") },
        a = dt(() => !!y(t.types.get(), "final"));
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
    const { breakpoint: a } = ve();
    return (0, Ta.jsxs)("div", {
      className: (0, ka.default)(fs, t),
      children: [
        e,
        (0, Ta.jsx)("div", {
          className: vs,
          children: (0, Ta.jsx)(Qt, {
            className: xs,
            size: a.weight >= Ie.large.weight ? Xt.C70x70 : Xt.C60x60,
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
  ws = ae.resolve("aliases"),
  Is = yt(({ currentIndex: e }) => {
    const { model: t, controls: a } = bs(),
      { breakpoint: s } = ve(),
      {
        id: n,
        index: o,
        name: i,
        description: l,
        state: c,
        decodePrice: d,
        skipPrice: u,
        keys: m,
        hasProminentReward: p,
      } = t.root.get(),
      [_, h] = (0, Da.useState)(c),
      g = _ === ja.Receive,
      b = _ === ja.InProgress,
      f = _ === ja.Open,
      v = t.computes.isFinal(),
      x = g && d <= m,
      y = ((b || g) && d > 0) || f,
      C = !f && p,
      w = t.reward.get();
    (0, Da.useEffect)(() => {
      if (o === e)
        return He(() => {
          h(c);
        }, 350);
      h(c);
    }, [o, e, c]);
    const I = Fe(
        { value: $t.Small },
        { large: { value: $t.Medium }, extraLarge: { value: $t.Large } },
      ),
      { containerRef: S, tooltipProps: N } = Ca({
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
          ...N,
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
                  (0, Ta.jsx)(r, { content: i }),
                  C &&
                    (0, Ta.jsxs)("div", {
                      className: Cs.reward,
                      children: [
                        (0, Ta.jsx)("div", { className: Cs.rewardGlow }),
                        (0, Ta.jsx)(Le, {
                          name: w.name,
                          value: Ft(w),
                          className: Cs.rewardCmp,
                          classNames: { info: Cs.rewardInfo },
                          size: T.Small,
                          special: w.overlayType,
                          image: Gt(w, T.Small),
                          valueType: j(w.name),
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
                    te,
                    {
                      classMix: Cs.receiveDescr,
                      text: R.strings.halloween_lobby.meta.receive.description(),
                      binding: {
                        keys: m > d ? d : m,
                        decrypt: d,
                        icon: (0, Ta.jsx)("div", {
                          className: Cs.icon,
                          children: (0, Ta.jsx)(Qt, {
                            size: s.weight > Ie.medium.weight ? Xt.C70x70 : Xt.C60x60,
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
                  te,
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
                    size: s.weight > Ie.medium.weight ? $t.Small : $t.ExtraSmall,
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
    return (0, Ta.jsx)(b, {
      id: t,
      children: (0, Ta.jsx)(gs, {
        options: (0, Da.useMemo)(() => ({ rootId: t }), [t]),
        children: (0, Ta.jsx)(Is, { ...e }),
      }),
    });
  }),
  [js, Ns] = J()(
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
function Os({ currentProgress: e, maxProgress: t, certificates: s, isExtraLarge: n }) {
  return (0, Ta.jsxs)("div", {
    className: w(Ms, n && Ps),
    children: [
      (0, Ta.jsx)(ge, {
        text: R.strings.halloween_lobby.rewardPathCard.name(),
        tooltipDisabled: !0,
        className: Ts,
      }),
      (0, Ta.jsxs)("div", {
        className: Ls,
        children: [
          (0, Ta.jsx)(a, {
            text: R.strings.halloween_lobby.common.progress(),
            params: { value: (0, Ta.jsx)("div", { className: Bs, children: e }), maxValue: t },
            className: Rs,
          }),
          (0, Ta.jsx)(ct, {
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
      s > 0 && (0, Ta.jsx)("div", { className: zs, children: s }),
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
  Zs = "StoryChoice_hintAnim4_301a1e07",
  Ks = "StoryChoice_hintAnim5_cee82d5d";
function Ys({ isExtraLarge: e }) {
  const t = Fe({ bubbleSize: k.small }, { medium: { bubbleSize: k.medium } });
  return (0, Ta.jsxs)("div", {
    className: w($s, e && Ws),
    children: [
      (0, Ta.jsx)(ge, {
        text: R.strings.halloween_lobby.rewardPathCard.storyChoice(),
        tooltipDisabled: !0,
        className: Hs,
      }),
      (0, Ta.jsxs)(Ta.Fragment, {
        children: [
          (0, Ta.jsx)("div", { className: Fs }),
          (0, Ta.jsx)("div", { className: Gs }),
          (0, Ta.jsx)("div", { className: Vs }),
          (0, Ta.jsx)("div", { className: Zs }),
          (0, Ta.jsx)("div", { className: Ks }),
        ],
      }),
      (0, Ta.jsx)("div", {
        className: qs,
        children: (0, Ta.jsx)(et.Root, {
          children: (0, Ta.jsx)(et.Value, {
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
      r = Fe({ size: Xs }, { large: { size: Qs }, extraLarge: { size: Js } }),
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
          className: w(tn, e && an),
          children: [
            (0, Ta.jsx)(De, { path: en(r.size, i, e), className: nn }),
            !fe.isLow() &&
              (0, Ta.jsx)(re, { ref: l, src: g, className: w(sn, i && ln, d && on), loop: !0 }),
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
  return (0, Ta.jsx)(b, {
    id: t,
    children: (0, Ta.jsx)(js, {
      options: (0, Da.useMemo)(() => ({ rootId: t }), [t]),
      children: (0, Ta.jsx)(cn, { ...e }),
    }),
  });
}
var [un, mn] = J()(tt, ({ externalModel: e }) => ({ click: e.createCallbackNoArgs("onClick") })),
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
    { breakpoint: l } = ve(),
    r = 2 === i(),
    c = (0, Da.useRef)(null),
    d = Fe({ size: fn }, { large: { size: vn }, extraLarge: { size: xn } }),
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
            te,
            {
              classMix: _n,
              text: R.strings.halloween_lobby.shopCard.name(),
              isTruncationAvailable: !0,
            },
            `shop${l.name}`,
          ),
          (0, Ta.jsx)(De, { path: yn(d.size, r), className: gn }),
          !fe.isLow() && (0, Ta.jsx)(re, { ref: c, src: _, className: w(hn, a && bn), loop: !0 }),
        ],
      }),
    })
  );
}
function wn() {
  const e = R.aliases.halloween.shared.Shop("resId");
  return (0, Ta.jsx)(b, {
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
          i = z(t, Math.max(o, 1));
        for (let l = 0; l < i.length; l++)
          (await Nn(e, i[l]),
            l !== i.length - 1 &&
              (n(ca.umg_widget_quest_backlog), await s.applyLayout(!1), await H(200)));
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
      (await H(400 * o),
        await e.get(s)?.playCompletedAnimation(n),
        await H(500),
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
    r = ce(),
    { play: c } = $(),
    d = (0, Da.useRef)(!1),
    u = (0, Da.useRef)([]),
    [m, p] = (0, Da.useState)(() => {
      const { data: e, appeared: a } = (function (e) {
        const t = [],
          a = [];
        return (
          l(e, (e) => {
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
        (await e?.animationHandler?.({ api: a, questCardRefs: s.current, play: c }),
        u.current.shift(),
        u.current.length)
      ) {
        const e = u.current[0];
        await h(e);
      }
    });
  var g, b;
  return (
    (g = r),
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
      if (!X.structural(t, n.current)) {
        const e = (function (e) {
            return new Map(le(e, (e) => [e.id, e]));
          })(n.current),
          a = (function (e, t) {
            return le(e, (e) => ({
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
    const { model: n } = ya(),
      o = n.quests.get().length,
      i = o > 0,
      l = o < 2,
      r = va({ [Ia.quests]: i }),
      [c, d] = (0, Da.useState)(e);
    return (
      (0, Da.useEffect)(
        () =>
          He(() => {
            d(t);
          }, 600),
        [t],
      ),
      (0, Da.useEffect)(() => {
        a(l);
      }, [l, a]),
      (0, Ta.jsxs)("div", {
        className: w(An, s, c < e && En, c > e && Mn),
        children: [
          (0, Ta.jsx)("div", { className: w(Tn, i && Pn) }),
          (0, Ta.jsx)("div", { className: Ln, children: (0, Ta.jsx)(Ss, { currentIndex: c }) }),
          (0, Ta.jsxs)("div", {
            className: Rn,
            children: [
              (0, Ta.jsx)(dn, { isExtraLarge: l }),
              r.quests && (0, Ta.jsx)(Q, { children: (0, Ta.jsx)(Dn, { isHangar: !0 }) }),
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
  [$n, Hn] = J()(
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
  Zn = "EnemyButton_container_65d5a625",
  Kn = "EnemyButton_name_e31faa84",
  Yn = "EnemyButton_role_d5fc8a1c",
  Xn = "EnemyButton_icon_6495000b",
  Qn = yt(function ({ selectedMissionID: e, selectedSlideID: t, onClick: a }) {
    const { model: s } = Hn(),
      { name: n, role: o, isAvailable: i } = s.currentEnemy.get(),
      [l, r] = (0, Da.useState)(e);
    (0, Da.useEffect)(
      () =>
        He(() => {
          r(t);
        }, 600),
      [t],
    );
    const c = Fe({ size: oa.medium }, { large: { size: oa.large } });
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
              className: Zn,
              children: [
                (0, Ta.jsx)("div", {
                  className: Yn,
                  children: (0, Ta.jsx)(Yt, {
                    type: o,
                    className: Xn,
                    color: Zt.EnemyRole,
                    size: Kt.C48x48,
                  }),
                }),
                (0, Ta.jsx)("div", { className: Kn, children: n }),
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
  onSliceAnimationComplete: l,
  classname: r,
}) {
  const [c, d] = ie(() => ({ x: 0 })),
    [u, m] = (0, Da.useState)(n),
    p = i();
  return (
    (0, Da.useEffect)(() => {
      u !== n &&
        (d.set({ x: 0 }),
        d.start({
          from: { x: 0 },
          to: { x: p * (e ? -On.width : On.width) },
          delay: Math.floor(20 * Math.random()) * t,
          config: { duration: 600, easing: _.easeInOutCubic },
          onRest: (e) => {
            !0 === e.finished && (l(), m(n));
          },
        }));
    }, [d, u, l, p, t, n, e]),
    (0, Ta.jsx)(ee.div, {
      className: w(to, r),
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
    className: w(no, i),
    children: [
      (0, Ta.jsxs)("div", {
        className: w(oo, n && io),
        style: { transform: `translate(-50%, -50%) scale(${l})` },
        children: [
          0 !== m &&
            (0, Ta.jsx)("div", { className: w(lo, ro), style: { backgroundImage: b(m, !0) } }),
          (0, Ta.jsx)("div", { className: lo, style: { backgroundImage: b(e, !1) } }),
          p < t &&
            r === e &&
            (0, Ta.jsx)("div", { className: w(lo, ro), style: { backgroundImage: b(p, !0) } }),
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
        className: w(co, n ? mo : uo),
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
  const t = ne(e, 0);
  if (t) return { name: t.name, special: t.rank === Ro.GOLD };
}
function zo(e) {
  return {
    currentIndex: e.currentIndex,
    id: e.groupId,
    totalCount: e.totalCount,
    states: le(e.setupSelector.states, (e) => e),
    switchEnabled: e.setupSelector.isSwitchEnabled,
    prebattleSwitchDisabled: e.setupSelector.isPrebattleSwitchDisabled,
    sections: le(e.sections, Oo),
  };
}
function Oo(e) {
  return {
    type: e.type,
    name: e.name,
    vehicle: e.vehicle,
    vehicleType: e.vehicleType,
    newItemsCount: e.newItemsCount,
    slots: le(e.slots, $o),
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
        le(t, (e) =>
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
  [Wo, qo] = J("AmmunitionPanelModel")(
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
        s = d.structural(() => f(a.groups.get(), (e.initial && e.initial.fromGroupModel) ?? zo)),
        n = d.primitive((e, t) => a.selectedSlot.get() === e && a.selectedSection.get() === t),
        o = d.primitive((e) => a.selectedSection.get() === e),
        i = d.primitive((e) => {
          for (const t of s()) for (const a of t.sections) if (a.name === e) return a.slots.length;
          return 0;
        }),
        l = d.primitive((e) => !Ho.includes(e) && o(e) && i(e) > 1),
        r = d.structural(() => {
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
        c = d.model((e) => s()[e]),
        u = d.model((e, t) => c(e)?.sections[t]),
        m = d.model((e, t, a) => u(e, t)?.slots[a]);
      return {
        ...a,
        vehicleId: d.primitive(() => {
          const e = a.vehicleId.get();
          return "" === e ? void 0 : e;
        }),
        computes: {
          groups: s,
          isSlotSelected: n,
          isSectionSelected: o,
          selectedSlotGroupAndItem: r,
          groupByIndex: c,
          sectionByIndex: u,
          slotByIndex: m,
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
  [Uo, Fo] = J("AmmunitionPanelModel")(
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
        a = dt(() => f(t.groups.get(), zo)),
        s = d.primitive((e, a) => t.selectedSlot.get() === e && t.selectedSection.get() === a),
        n = d.primitive((e) => t.selectedSection.get() === e),
        o = d.primitive((e) => {
          for (const t of a()) for (const a of t.sections) if (a.name === e) return a.slots.length;
          return 0;
        }),
        i = d.primitive((e) => n(e) && o(e) > 1),
        l = d.structural(() => {
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
        r = d.model((e) => a()[e]),
        c = d.model((e, t) => r(e)?.sections[t]),
        u = d.model((e, t, a) => c(e, t)?.slots[a]);
      return {
        ...t,
        vehicleId: d.primitive(() => {
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
          slotByIndex: u,
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
  Zo = "swap",
  Ko = "drag_drop";
function Yo(e) {
  return { currency: e.name, value: e.value, enough: e.isEnough };
}
function Xo(e) {
  return le(e, Yo);
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
  prices: f(e.price, (e) => Yo(e)),
});
function ei(e) {
  return { name: e.name, correct: e.isCorrect, clickable: e.isClickable };
}
function ti(e) {
  return { dynamic: e.isDynamic, specializations: ((t = e.specializations), le(t, ei)) };
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
var [ni, oi] = J("ConsumablesModel")(
    ({ observableModel: e }) => {
      const t = {
          ...e.primitives(["autoloadEnabled", "hasChanges"]),
          consumables: e.arrayClone("consumables"),
          dealData: e.transform((e) => Jo(e), "dealPanel"),
          prices: e.transform((e) => le(e, Yo), "dealPanel.price"),
        },
        a = d.structural(() => {
          const e = t.dealData.get(),
            a = [];
          return (
            e.totalItemsInStorage > 0 &&
              a.push({ enough: !0, currency: "depot", value: e.totalItemsInStorage }),
            t.prices.get().forEach((e) => a.push(e)),
            { ...e, prices: a }
          );
        }),
        s = d.primitive(() => f(t.consumables.get(), si)),
        n = d.model((e) => M(s(), (t) => t.intCD === e));
      return { ...t, computes: { consumables: s, consumableById: n, dealData: a } };
    },
    ({ model: e, externalModel: t }) => ({
      unmount: t.createCallback(
        (e, t) => ({ intCD: e, currentSlotId: t, actionType: Go, type: fo }),
        "onSlotAction",
      ),
      actionSlot: t.createCallback((e) => ({ ...e, type: fo }), "onSlotAction"),
      swapSlots: t.createCallback((e) => ({ ...e, actionType: Ko }), "onSlotAction"),
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
  const s = ne(e, 0);
  return (
    s &&
      (a = g(s.values, (e) => !!e.mechanic && e.mechanic !== Lo.UNKNOWN).map(
        ({ mechanic: e, state: a }) => {
          const s = M(t, (t) => t.mechanic === e),
            n = s ? s.columnConfigs : void 0,
            o = n ? M(n, (e) => e.state === a) : void 0;
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
      rows: le(e, ({ paramName: e, values: t, metricValue: a }) => ({
        paramName: e,
        metricValue: a,
        values: le(t, ({ state: e, value: t, mechanic: a }) => ({
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
  [_i, hi] = J("ShellsProvider")(
    ({ observableModel: e }) => {
      const t = {
          ...e.primitives({
            ammoMaxSize: "ammoMaxSize",
            installedCount: "installedCount",
            clip: "clip",
            hasChanges: "modified",
            autoloadEnabled: "autoloadEnabled",
          }),
          shells: e.transform((e) => le(e, ui), "shells"),
          dealData: e.transform((e) => Jo(e), "dealPanel"),
          prices: e.transform((e) => le(e, Yo), "dealPanel.price"),
        },
        a = d.structural(() => {
          const e = t.dealData.get(),
            a = [];
          return (
            e.totalItemsInStorage > 0 &&
              a.push({ enough: !0, currency: "depot", value: e.totalItemsInStorage }),
            t.prices.get().forEach((e) => a.push(e)),
            { ...e, prices: a }
          );
        }),
        s = d.model((e) => ne(t.shells.get(), e)),
        n = d.model((e) => M(t.shells.get(), (t) => t.intCD === e)),
        o = d.primitive((e) => void 0 !== M(t.shells.get(), (t) => t.intCD === e)),
        i = d.shallow(() => le(t.shells.get(), (e) => e.intCD)),
        l = d.primitive(() =>
          de(
            t.shells.get(),
            ({ properties: e }) =>
              e.columnDefs.length > 0 && e.columnDefs.every((e) => !mi.includes(e.mechanic)),
          ),
        ),
        r = d.primitive(() =>
          Math.max(...le(t.shells.get(), ({ properties: e }) => e.rows.length)),
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
      swapSlots: t.createCallback((e) => ({ ...e, actionType: Zo }), "onSlotAction"),
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
      return c.s48x48;
    case gt.large:
      return c.s64x64;
    default:
      return c.s80x80;
  }
};
function fi(e) {
  switch (e) {
    case "battleBooster":
      return Y.directiveBooster;
    case "battleBoosterReplace":
      return Y.directiveSubstitute;
    case "builtInEquipment":
      return Y.builtInEquipment;
    case "equipmentPlus":
      return Y.improved;
    case "equipmentModernized":
      return Y.experimental;
    case "equipmentTrophy":
    case "equipmentTrophyBasic":
    case "equipmentTrophyUpgraded":
      return Y.trophy;
    default:
      return Y.none;
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
      l = ut(),
      r = l.state,
      c = i(),
      d = (0, Da.useContext)(xi);
    function u(e, s) {
      const n = s.getBoundingClientRect(),
        o = n.left,
        i = n.right,
        l = t - o,
        c = i - t,
        d = e - r.startPoint.x;
      return d > c - a
        ? { left: l, x: c - a }
        : d < o - t
          ? { left: l, x: o - t }
          : { left: l, x: d };
    }
    return (
      (0, Da.useEffect)(() => {
        if (l.item)
          return (
            window.addEventListener("keydown", e),
            () => {
              window.removeEventListener("keydown", e);
            }
          );
        function e(e) {
          e.keyCode === G.ESCAPE && l.reset();
        }
      }, [l.item, l.reset]),
      (0, Da.useEffect)(() => {
        const e = n.current;
        if (!e || null === r.virtualItem || !r.dragArea) return;
        const t = r.dragArea.getBoundingClientRect(),
          { x: i, left: m } = u(r.currentPosition.x * c + r.startPoint.x, r.dragArea);
        ((e.style.left = `${m}px`), (e.style.transform = `translateX(${Math.trunc(i)}px)`));
        const p = wi(t, m, i, a) ?? null;
        return (
          o.current != p && null !== p && ((o.current = p), d(p)),
          new ke()
            .add(
              lt.up(([e]) => {
                (l.emitter.trigger("onDrop", e, r.dragArea, l.item, r), l.reset());
              }),
            )
            .add(
              lt.move(([e, s]) => {
                if ("outside" === s) {
                  const s = n.current;
                  if (!s || null === r.virtualItem || !r.dragArea) return;
                  const { x: i, left: l } = u(e.x, r.dragArea),
                    c = wi(t, l, i, a) ?? null;
                  (o.current !== c && null !== c && ((o.current = c), d(c)),
                    (s.style.transform = `translateX(${Math.trunc(i)}px)`));
                }
              }),
            )
            .add(
              l.emitter.on("onDrop", (e, n, o) => {
                if (!r.dragArea) return;
                d(void 0);
                const { left: i, x: l } = u(e.x, r.dragArea),
                  c = wi(t, i, l, a) ?? null,
                  m = Number(o?.getAttribute("data-drop-item")) ?? null;
                null !== m && null !== c && m !== Number(c) && s?.(Number(c), m);
              }),
            ).dispose
        );
      }, [r.currentPosition.x, r.dragArea, r.virtualItem, l.emitter, t, a, s, u]),
      e && null !== r.virtualItem && r.dragArea
        ? (0, Ta.jsx)("div", {
            ref: n,
            style: { position: "absolute", top: 0, cursor: "grabbing", pointerEvents: "none" },
            children: e(Number(r.virtualItem.getAttribute("data-drop-item"))),
          })
        : null
    );
  }),
  Si = yt(function ({ children: e, onDrop: t, renderDraggingItem: a, dataDropArea: s }) {
    const n = ut(),
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
          (0, Ta.jsx)(Ce.DragArea, {
            ref: o,
            children: (0, Ta.jsx)(Ce.DropArea, { "data-drop-area": s, children: e }),
          }),
          (0, Ta.jsx)(Ce.VirtualItem, {
            container: o.current ?? void 0,
            children: (0, Ta.jsx)(Ii, { itemPosition: i, itemWidth: r, onDrop: t, children: a }),
          }),
        ],
      })
    );
  }),
  ji = function ({ children: e, onDrop: t, renderDraggingItem: a, dataDropArea: s }) {
    return (0, Ta.jsx)(Ce, {
      children: (0, Ta.jsx)(Si, { onDrop: t, renderDraggingItem: a, dataDropArea: s, children: e }),
    });
  },
  Ni = "DragAndDrop_draggableItem_e7d74af8",
  ki = "DragAndDrop_draggableItem__dragging_b849a88",
  Di = "DragAndDrop_draggableItem__undraggable_7c876195",
  Ai = "DragAndDrop_draggableItem__locked_2b4f1390",
  Ei = yt(function ({ itemId: e, undraggable: t, className: a, dataDropArea: s, children: n }) {
    const o = ut();
    se(o.reset, [o]);
    const i = o.item?.getAttribute("data-drop-item"),
      l = void 0 !== i,
      r = he(i) && "" !== i && Number(i) === e;
    return (0, Ta.jsx)("div", {
      "data-drop-item": e,
      className: w(Ni, l && Ai, t && Di, r && ki, a),
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
  return { localeName: e.localeName, values: ((t = e.values), le(t, Mi)) };
  var t;
}
function Pi(e) {
  return { title: e.title, items: le(e.items, Ti) };
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
var [Ri, Bi] = J("EquipmentsModel")(
  ({ observableModel: e }) => {
    const t = {
        standardEquipments: e.transform((e) => le(e, Li), "simpleEquipments"),
        improvedEquipments: e.transform((e) => le(e, Li), "deluxEquipments"),
        bountyEquipments: e.transform((e) => le(e, Li), "trophyEquipments"),
        experimentalEquipments: e.transform((e) => le(e, Li), "modernizedEquipments"),
        ...e.primitives(["hasChanges", "equipCoinCount"]),
        ...e.primitives({
          hasModernizedEquipmentToDisassemble: "hasExperimentalEquipmentToDisassemble",
        }),
        standardEquipmentsFilters: vt.box(new Set()),
        dealData: e.transform((e) => Jo(e), "dealPanel"),
        prices: e.transform((e) => le(e, Yo), "dealPanel.price"),
      },
      a = d.structural(() => {
        const e = t.dealData.get(),
          a = [];
        return (
          e.totalItemsInStorage > 0 &&
            a.push({ enough: !0, currency: "depot", value: e.totalItemsInStorage }),
          t.prices.get().forEach((e) => a.push(e)),
          { ...e, prices: a }
        );
      }),
      s = d.model((e, a) => M(t[a].get(), (t) => t.intCD === e)),
      n = d.model(() => {
        const e = t.standardEquipmentsFilters.get(),
          a = t.standardEquipments.get();
        return 0 === e.size
          ? a
          : (function (e, t) {
              return g(e, (e) => e.specializations.specializations.some((e) => t.has(e.name)));
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
    swapSlots: t.createCallback((e) => ({ ...e, actionType: Ko }), "onSlotAction"),
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
var [Oi, $i] = J("InstructionsModel")(
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
          prices: e.observableModel.transform((e) => le(e, Yo), "dealPanel.price"),
        };
      (e.cleanup(
        xt(() => {
          const e = N(t.crewInstructions.get(), (e, t) => ((e[t.intCD] = zi(t)), e), {});
          wt(() => a.crewInstructions.set(e));
        }),
      ),
        e.cleanup(
          xt(() => {
            const e = N(t.equipmentInstructions.get(), (e, t) => ((e[t.intCD] = zi(t)), e), {});
            wt(() => a.equipmentInstructions.set(e));
          }),
        ),
        e.cleanup(
          xt(() => {
            const e = f(t.equipmentInstructions.get(), (e) => zi(e));
            wt(() => a.equipmentInstructionsArray.set(e));
          }),
        ),
        e.cleanup(
          xt(() => {
            const e = f(t.crewInstructions.get(), (e) => zi(e));
            wt(() => a.crewInstructionsArray.set(e));
          }),
        ));
      const s = d.structural(() => {
          const e = a.dealData.get(),
            t = [];
          return (
            e.totalItemsInStorage > 0 &&
              t.push({ enough: !0, currency: "depot", value: e.totalItemsInStorage }),
            a.prices.get().forEach((e) => t.push(e)),
            { ...e, prices: t }
          );
        }),
        o = d.model(
          (e) =>
            Object.values(a.equipmentInstructions.get()).find((t) => t.intCD === e) ??
            Object.values(a.crewInstructions.get()).find((t) => t.intCD === e),
        ),
        i = d.model((e, t) => {
          const s = Object.values(a[t].get()).find((t) => t.intCD === e);
          return (n(void 0 !== s, `There is no instructionItems with ${e} intCD`), s);
        });
      return { ...a, computes: { instructionById: o, instructionByIntCD: i, dealData: s } };
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
      o = (function () {
        const e = (0, Da.useContext)(Hi);
        return (n(null !== e, "useContext must be used with in SectionContext"), e);
      })(),
      i = (0, Da.useRef)(o.idToSlot),
      [l, r] = C(() => ({ from: { x: 0 }, config: { tension: 300, friction: 20 } }));
    return (
      (0, Da.useLayoutEffect)(() => {
        const e = i.current,
          n = void 0 === e[a];
        if (s.current === a) return;
        const l = e[a];
        if (-1 == a || n) return;
        if ("number" != typeof l) return;
        const c = l < t ? -1 : 1;
        r.start({ from: { x: c * nt(50) }, to: { x: 0 } });
        const d = L(o.onSwiped);
        return () => {
          (d(), r.stop(), r.start({ x: 0, immediate: !0 }));
        };
      }, [r, a]),
      (0, Da.useEffect)(() => {
        ((s.current = a), (i.current = o.idToSlot));
      }, [o, a]),
      (0, Ta.jsx)(p.div, { className: Wi, style: l, children: e })
    );
  },
  Ui = "UnmountButton_442d081e",
  Fi = "UnmountButton_base__hover_e2b863f3",
  Gi = "UnmountButton_image_5b9a272b";
function Vi({ onClick: e, className: t }) {
  const [a, s] = (0, Da.useState)(!1),
    n = $();
  return (0, Ta.jsx)("div", {
    onMouseEnter: function (e) {
      (n.play("mouse-enter", { target: "loadout-panel:slot:unmount-button", original: e }), s(!0));
    },
    onMouseLeave: () => s(!1),
    onClick: function (t) {
      (e(t), n.play("click", { target: "loadout-panel:slot:unmount-button", original: t }));
    },
    className: w(Ui, a && Fi, t),
    children: (0, Ta.jsx)(De, {
      width: "42rem",
      height: "42rem",
      path: "loadout.unmount_button_" + (a ? "hover" : "default"),
      className: Gi,
    }),
  });
}
var Zi = "Consumable_98851be5",
  Ki = "Consumable_slot_523f223e",
  Yi = "Consumable_slot__disabled_10fdd4ec",
  Xi = "Consumable_slot__grabbing_f0e6559a",
  Qi = "Consumable_hotKeyLabel_a0918925",
  Ji = "Consumable_text_fd7e74cf",
  el = "Consumable_unmountButton_43731923",
  tl = "Consumable_unmountButton__hidden_250735bc",
  al = "Consumable_selectedOverlay_fd3226e6",
  sl = ae.resolve("strings"),
  nl = ae.resolve("aliases"),
  ol = `${fo}DropArea`,
  il = yt(function ({ slot: e, disabled: t, selected: a, withKey: s = !1, onClick: n }) {
    const i = $(),
      { model: l, controls: r } = oi(),
      c = qo().model,
      d = bt(),
      u = Ci(),
      p = d.location.endsWith(Io) ? l.computes.consumableById(e.intCD) : e,
      [_, h] = (0, Da.useState)(!1),
      g = Fe(
        { value: gt.small },
        { large: { value: gt.large }, extraLarge: { value: gt.extraLarge } },
      ),
      b = sl.readOrEmpty(`readable_key_names.${e.keyName}`),
      f = s && b && "KEY_NONE" != e.keyName,
      v = B({
        resId: nl.read((e) => e.hangar.shared.Loadout("resId")),
        args: (0, Da.useMemo)(() => ({ slotId: e.id, slotType: fo }), [e]),
      }),
      x = (0, Da.useMemo)(() => ({ disabled: t || void 0 === p?.imageName }), [p?.imageName, t]),
      y = m(
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
        x,
      ),
      C = -1 !== e.intCD ? y : {};
    (0, Da.useEffect)(() => {
      e.installed || i.play("mount", { target: "loadout-panel:slot:consumable" });
    }, [e.installed, i]);
    const I = ut(),
      S = null !== I.state.virtualItem;
    return (
      (0, Da.useEffect)(() => {
        I.item?.getAttribute("data-drop-area") === ol && h(u === e.id);
      }, [I.item, u, e.id]),
      (0, Ta.jsxs)("div", {
        ...v,
        ...C,
        className: Zi,
        children: [
          (0, Ta.jsx)(it, {
            className: w(Ki, t && Yi, S && Xi),
            classNames: { selectedOverlay: al },
            size: gi(g.value || gt.small),
            hovered: _,
            selected: a,
            disabled: t,
            "data-test-id": `equipmentSlot-${e.id}`,
            onClick: function (e) {
              !a && n && (n(), i.play("click", { target: "loadout-panel:slot", original: e }));
            },
            onMouseEnter: function () {
              (h(!0), S || i.play("mouse-enter", { target: "loadout-panel:slot:consumable" }));
            },
            onMouseLeave: function () {
              (void 0 !== u && I.item?.getAttribute("data-drop-area") === ol) || h(!1);
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
                    children: (0, Ta.jsx)(_t, {
                      name: p.imageName,
                      size: bi(g.value || gt.small),
                      overlayType: fi(e.overlayType),
                    }),
                  })
                : (0, Ta.jsx)(it.Empty, {}),
            }),
          }),
          f &&
            (0, Ta.jsx)("div", {
              className: Qi,
              children: (0, Ta.jsx)("div", {
                className: Ji,
                children: (0, Ta.jsx)(o, { text: b }),
              }),
            }),
          !e.installed &&
            (0, Ta.jsx)(Vi, { onClick: () => r.unmount(e.intCD, e.id), className: w(el, S && tl) }),
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
      className: w(ll, a?.base),
      children: [
        (0, Ta.jsx)(s, { className: w(rl, dl, t && cl, a?.activeIcon) }),
        (0, Ta.jsx)(n, { className: w(rl, !t && cl, a?.inactiveIcon) }),
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
  jl = ue("Specialization"),
  Nl = yt(function ({ specialization: e, className: t, id: a, disabled: s = !1 }) {
    const n = $(),
      { controls: o } = qo(),
      i = bt().location.includes("/loadout"),
      l = e.dynamic && i,
      r = (0, Da.useRef)(a);
    (0, Da.useEffect)(() => {
      if (r.current !== a)
        return (
          (r.current = a),
          e.active
            ? L(() => n.play("on", { target: "loadout-panel:slot:equipment:specialization" }))
            : void 0
        );
    }, [n, e.active, a]);
    const c = h(
      "hangarSlotSpec",
      (0, Da.useMemo)(() => [e.type, e.dynamic, e.clickable], [e]),
    );
    return (0, Ta.jsxs)(jl, {
      className: w(vl, l && xl, s && Il, e.active && Sl, t),
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
        (0, Ta.jsx)("div", { className: w(bl, l && yl) }),
        (0, Ta.jsx)("div", { className: w(fl, l && Cl) }),
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
  Rl = ae.resolve("aliases"),
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
    const { breakpoint: n } = ve(),
      { controls: o } = Bi(),
      { model: i } = qo(),
      [l, r] = (0, Da.useState)(!1),
      c = $(),
      d = bt(),
      u = Ci(),
      p = Fe(
        { value: gt.small },
        { large: { value: gt.large }, extraLarge: { value: gt.extraLarge } },
      ),
      _ = B({
        resId: Rl.read((e) => e.hangar.shared.Loadout("resId")),
        args: (0, Da.useMemo)(() => ({ slotId: e.id, slotType: go }), [e]),
      }),
      h = (0, Da.useMemo)(() => ({ disabled: t || -1 === e?.intCD }), [e?.intCD, t]),
      g = m(
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
        h,
      ),
      b = -1 !== e.intCD ? g : {},
      f = ut(),
      v = null !== f.state.virtualItem;
    return (
      (0, Da.useEffect)(() => {
        e.installed || c.play("mount", { target: "loadout-panel:slot:equipment" });
      }, [e.installed, c]),
      (0, Da.useEffect)(() => {
        (v && _?.onMouseLeave(), !v && void 0 !== u && l && _?.onMouseEnter(null));
      }, [u, v, l, _]),
      (0, Da.useEffect)(() => {
        f.item?.getAttribute("data-drop-area") === Bl && r(u === e.id);
      }, [f.item, u, e.id]),
      (0, Ta.jsxs)("div", {
        className: kl,
        children: [
          (0, Ta.jsx)("div", {
            ...b,
            onMouseEnter: function (e) {
              (t || r(!0),
                v ||
                  (t ||
                    c.play("mouse-enter", { target: "loadout-panel:slot:equipment", original: e }),
                  _?.onMouseEnter(e)));
            },
            onMouseLeave: function () {
              ((void 0 !== u && f.item?.getAttribute("data-drop-area") === Bl) || r(!1),
                _?.onMouseLeave());
            },
            children: (0, Ta.jsx)(it, {
              className: w(Dl, t && Al, v && El),
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
                      children: (0, Ta.jsx)(_t, {
                        name: e.imageName,
                        size: bi(n.name),
                        level: e.level,
                        overlayType: fi(e.overlayType),
                      }),
                    })
                  : (0, Ta.jsx)(it.Empty, {}),
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
            (0, Ta.jsx)(Vi, { onClick: () => o.unmount(e.intCD, e.id), className: w(Tl, v && Pl) }),
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
  Zl = ae.resolve("aliases");
function Kl(e) {
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
      c = $(),
      d = bt(),
      u = Fe(
        { value: gt.small },
        { large: { value: gt.large }, extraLarge: { value: gt.extraLarge } },
      );
    const p = B({
        resId: Zl.read((e) => e.hangar.shared.Loadout("resId")),
        args: (0, Da.useMemo)(() => ({ slotId: e.id, slotType: vo }), [e]),
      }),
      _ = (0, Da.useMemo)(() => ({ disabled: t || void 0 === i?.imageName }), [i?.imageName, t]),
      h = m(
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
            emitterUID: window.subViews.get(Zl.read((e) => e.hangar.shared.Instructions("resId")))
              .uid,
          }),
          [e],
        ),
        _,
      ),
      g = -1 !== e.intCD ? h : {};
    return (
      (0, Da.useEffect)(() => {
        e.installed ||
          (c.play("mount", { target: "loadout-panel:slot:instruction" }),
          i?.imageName &&
            "battleBoosterReplace" === e.overlayType &&
            c.play("on", { target: Kl(i.imageName) }),
          e?.withAttention && c.play("warn", { target: "loadout-panel:slot:instruction" }));
      }, [i?.imageName, e.installed, e.overlayType, e?.withAttention, c]),
      (0, Ta.jsxs)("div", {
        ...p,
        ...g,
        className: $l,
        children: [
          (0, Ta.jsx)(it, {
            className: w(Hl, t && Wl),
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
              (0, Ta.jsx)(_t, {
                className: w(Gl, e.withAttention && Vl),
                name: i.imageName,
                size: bi(u.value || gt.small),
                overlayType: fi(e?.overlayType),
              }),
          }),
          i?.imageName &&
            e.withAttention &&
            (0, Ta.jsx)(De, {
              width: "48rem",
              height: "48rem",
              path: "loadout.alert_48",
              className: w(ql, t && Ul),
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
  const a = Re(Fe({ size: mr }, { extraLarge: { size: pr } }).size, _r);
  return (0, Ta.jsx)("div", {
    className: w(dr, t),
    style: {
      backgroundImage: `url(R.images.gui.maps.icons.loadout.shell_mechanics.${e.name}.${a}.loadout_panel_icon)`,
    },
  });
}
var gr = ae.resolve("aliases"),
  br = "small",
  fr = "x64x64",
  vr = "medium",
  xr = yt(function ({
    disabled: e = !1,
    selected: t = !1,
    withKey: a = !1,
    empty: s = !0,
    className: n,
    slot: i,
    shellsCounts: l,
  }) {
    const { model: r } = hi(),
      c = bt(),
      d = void 0 !== ut().item?.getAttribute("data-drop-item"),
      u = B({
        resId: gr.read((e) => e.hangar.shared.Loadout("resId")),
        args: (0, Da.useMemo)(() => ({ slotId: i.id, slotType: bo }), [i.id]),
      }),
      p = Fe({ value: br }, { large: { value: fr }, extraLarge: { value: vr } }).value,
      _ = (0, Da.useMemo)(() => ({ disabled: e }), [e]),
      h = m(
        c.location.endsWith(wo) ? "tankSetupShellItem" : "tankSetupHangarShellSlot",
        (0, Da.useMemo)(
          () => ({
            intCD: i.intCD,
            slotType: bo,
            fieldType: 1,
            installedSlotId: i.id,
            itemInstalledSetupIdx: i.itemInstalledSetupIdx,
            itemInstalledSetupSlotIdx: i.id,
            isMounted: i.installed,
            isMountedMoreThanOne: i.mountedMoreThanOne,
            emitterUID: Me(gr.read((e) => e.hangar.shared.Shells("resId"))).uid,
            shellsCounts: l,
          }),
          [i, l],
        ),
        _,
      ),
      g = t ? r.computes.shell(i.id) : i;
    if (!g) return;
    const b = ae.resolve("strings").readOrEmpty(`readable_key_names.${i.keyName}`),
      f = a && b && "KEY_NONE" !== i.keyName;
    return (0, Ta.jsxs)("div", {
      ...u,
      ...h,
      className: w(Ql, d && er, t && tr, n),
      "data-test-id": `shellSlot-${i.id}`,
      children: [
        f &&
          (0, Ta.jsx)("div", {
            className: w(sr, nr),
            children: (0, Ta.jsx)("div", { className: lr, children: (0, Ta.jsx)(o, { text: b }) }),
          }),
        (0, Ta.jsxs)(qi, {
          id: i.intCD,
          index: i.id,
          children: [
            (0, Ta.jsx)(Ei, {
              undraggable: !t,
              itemId: i.id,
              dataDropArea: "shellsDropArea",
              children: (0, Ta.jsxs)(De, {
                path: `shell.${p}.${i.imageName}`,
                className: Jl,
                children: [
                  (0, Ta.jsx)("div", { className: Xl }),
                  g.mainMechanic &&
                    !pi.includes(g.mainMechanic.name) &&
                    (0, Ta.jsx)(hr, { mechanic: g.mainMechanic, className: ur }),
                ],
              }),
            }),
            void 0 !== g.count && (0, Ta.jsx)(yr, { count: g.count, empty: s, disabled: e }),
          ],
        }),
      ],
    });
  }),
  yr = function ({ count: e, empty: t, disabled: a }) {
    return (0, Ta.jsx)("div", {
      className: w(sr, or, a && ir),
      children: (0, Ta.jsx)("div", { className: w(lr, a && cr, t && rr), children: e }),
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
      (0, Ta.jsx)(De, {
        fit: "cover",
        path: "loadout.shells_warning_glow",
        className: Cr.warningGlow,
      }),
      (0, Ta.jsx)("div", { className: w(Cr.warningOverlay, e && !t && Cr.warningOverlay__hover) }),
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
    c = $(),
    d = Fe(
      { value: gt.small },
      { large: { value: gt.large }, extraLarge: { value: gt.extraLarge } },
    ),
    u = (0, Da.useMemo)(() => e.map((e) => ({ intCD: e.intCD, count: e.count })), [e]),
    m = !e.some((e) => e.count && e.count > 0);
  return (0, Ta.jsxs)(it, {
    classNames: {
      slot: w(Cr.slot, t.warning && !n && Cr.slot__customBackground),
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
      d = Fe({ value: br }, { large: { value: fr }, extraLarge: { value: vr } }).value;
    if (!r) return null;
    const u = g(r.slots ?? [], (e) => e.intCD > 0);
    return (0, Ta.jsx)("div", {
      className: Cr.base,
      children: (0, Ta.jsx)(ji, {
        dataDropArea: `${bo}DropArea`,
        onDrop: (e, t) => l.swapSlots({ leftID: e, rightID: t }),
        renderDraggingItem: (e) =>
          (0, Ta.jsxs)(De, {
            path: `shell.${d}.${u[e].imageName}`,
            className: w(Jl, ar),
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
    className: w(jr, e),
    children: (0, Ta.jsx)(De, {
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
      { breakpoint: i } = ve(),
      l = Fe(
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
                  ? (0, Ta.jsx)(_t, {
                      name: t.imageName,
                      size: bi(l.value || gt.small),
                      overlayType: fi(t.overlayType),
                    })
                  : c.type === go
                    ? (0, Ta.jsx)(_t, {
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
  Er = ae.resolve("aliases"),
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
  Zr = "Ability_selectedOverlay_aaa26207";
ae.resolve("strings");
var Kr = ae.resolve("aliases"),
  Yr = "ls_consumablesDropArea",
  Xr = yt(function ({ slot: e, disabled: t, selected: a, onClick: s }) {
    const n = $(),
      { model: i, controls: l } = oi(),
      r = qo().model,
      c = bt(),
      d = Ci(),
      u = c.location.endsWith(jc.HWConsumables) ? i.computes.consumableById(e.intCD) : e,
      [p, _] = (0, Da.useState)(!1),
      h = Fe(
        { value: gt.extraSmall },
        { large: { value: gt.large }, extraLarge: { value: gt.extraLarge } },
      ),
      g = Or(e.keyName),
      b = Sc(c.location) && g,
      f = B({
        resId: Kr.read((e) => e.hangar.shared.Loadout("resId")),
        args: (0, Da.useMemo)(
          () => ({ intCD: e.intCD, slotId: e.id, slotType: jc.HWConsumables }),
          [e],
        ),
      }),
      v = (0, Da.useMemo)(() => ({ disabled: t || void 0 === u?.imageName }), [u?.imageName, t]),
      x = m(
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
        v,
      ),
      y = -1 !== e.intCD ? x : {};
    (0, Da.useEffect)(() => {
      e.installed || n.play("mount", { target: "loadout-panel:slot:consumable" });
    }, [e.installed, n]);
    const C = ut(),
      I = null !== C.state.virtualItem;
    return (
      (0, Da.useEffect)(() => {
        C.item?.getAttribute("data-drop-area") === Yr && _(d === e.id);
      }, [C.item, d, e.id]),
      (0, Ta.jsxs)("div", {
        className: $r,
        children: [
          (0, Ta.jsx)("div", {
            ...f,
            ...y,
            children: (0, Ta.jsx)(it, {
              className: w(Hr, t && Wr, I && qr),
              classNames: { selectedOverlay: Zr },
              size: gi(h.value || gt.small),
              hovered: p,
              selected: a,
              disabled: t,
              "data-test-id": `equipmentSlot-${e.id}`,
              onClick: function (e) {
                !a && s && (s(), n.play("click", { target: "loadout-panel:slot", original: e }));
              },
              onMouseEnter: function () {
                (_(!0), I || n.play("mouse-enter", { target: "loadout-panel:slot:consumable" }));
              },
              onMouseLeave: function () {
                (void 0 !== d && C.item?.getAttribute("data-drop-area") === Yr) || _(!1);
              },
              dataDropItem: e.id,
              children: (0, Ta.jsx)(qi, {
                id: e.intCD,
                index: e.id,
                children: u?.imageName
                  ? (0, Ta.jsx)(Ei, {
                      undraggable: !r.computes.sectionDraggable(jc.HWConsumables),
                      itemId: e.id,
                      dataDropArea: Yr,
                      children: (0, Ta.jsx)(_t, {
                        name: u.imageName,
                        size: bi(h.value || gt.small),
                        overlayType: fi(e.overlayType),
                      }),
                    })
                  : (0, Ta.jsx)(it.Empty, {}),
              }),
            }),
          }),
          b &&
            (0, Ta.jsx)("div", {
              className: Ur,
              children: (0, Ta.jsx)("div", {
                className: Fr,
                children: (0, Ta.jsx)(o, { text: g }),
              }),
            }),
          !e.installed &&
            (0, Ta.jsx)(Vi, { onClick: () => l.unmount(e.intCD, e.id), className: w(Gr, I && Vr) }),
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
      i = Fe(
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
                return (0, Ta.jsx)(_t, {
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
  mc = ae.resolve("aliases"),
  pc = "small",
  _c = "x64x64",
  hc = "medium",
  gc = yt(function ({ selected: e = !1, withKey: t = !1, className: a, slot: s }) {
    const { model: n } = hi(),
      i = bt(),
      l = B({
        resId: mc.read((e) => e.hangar.shared.Loadout("resId")),
        args: (0, Da.useMemo)(() => ({ slotId: s.id, slotType: bo }), [s.id]),
      }),
      r = Fe({ value: pc }, { large: { value: _c }, extraLarge: { value: hc } }).value,
      c = e ? n.computes.shell(s.id) : s;
    if (!c) return;
    const d = Or(s.keyName),
      u = Sc(i.location) && d;
    return (0, Ta.jsxs)("div", {
      className: w(sc, e && oc, a),
      "data-test-id": `shellSlot-${s.id}`,
      children: [
        u &&
          (0, Ta.jsx)("div", {
            className: w(lc, rc),
            children: (0, Ta.jsx)("div", { className: cc, children: (0, Ta.jsx)(o, { text: d }) }),
          }),
        (0, Ta.jsxs)("div", {
          ...l,
          children: [
            (0, Ta.jsxs)(De, {
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
  const r = $(),
    c = Fe(
      { value: gt.extraSmall },
      { large: { value: gt.large }, extraLarge: { value: gt.extraLarge } },
    ),
    d = !e.some((e) => e.count && e.count > 0);
  return (0, Ta.jsx)(it, {
    classNames: { slot: w(fc, !o && vc), content: yc, selectedOverlay: Cc },
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
  const l = g(i.slots ?? [], (e) => e.intCD > 0);
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
    o = (function () {
      const e = (0, Da.useContext)(Ec);
      return (n(null !== e, "useContext must be used with in GroupContext"), e);
    })(),
    i = (0, Da.useRef)(o.typeToIndex),
    [l, r] = ie(() => ({ from: { x: 0 }, config: { tension: 600, friction: 50 } }));
  return (
    (0, Da.useLayoutEffect)(() => {
      const e = i.current,
        n = void 0 === e[a];
      if (s.current === a) return;
      const o = e[a];
      if ("" == a || n) return;
      if ("number" != typeof o) return;
      const l = o < t ? -1 : 1;
      return (
        r.start({ from: { x: l * nt(50) }, to: { x: 0 } }),
        () => {
          (r.stop(), r.start({ x: 0, immediate: !0 }));
        }
      );
    }, [r, a]),
    (0, Da.useEffect)(() => {
      ((s.current = a), (i.current = o.typeToIndex));
    }, [a, o.typeToIndex]),
    (0, Ta.jsx)(ee.div, { style: l, children: e })
  );
}
var Tc = "HwSection_1dc0f5ca",
  Pc = "HwSection_nitro_4c5295d9",
  Lc = "HwSection_hotKeyLabel_68263ae",
  Rc = "HwSection_text_82db274a",
  Bc = Da.memo(function ({ hwKeyName: e, hwIntCD: t }) {
    const a = bt(),
      s = Or(e),
      n = I({
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
              children: (0, Ta.jsx)(o, { text: s, tooltipParams: { body: s } }),
            }),
          }),
        (0, Ta.jsx)("div", { ...n, className: Pc }),
      ],
    });
  }),
  [zc, Oc] = J("PresetSwitcherProvider")(
    ({ observableModel: e }) => ({ root: e.object() }),
    ({ externalModel: e }) => ({ switch: e.createCallbackNoArgs("onSwitch") }),
  ),
  $c = "PresetChanger_51555039",
  Hc = "PresetChanger_button_c38e75d1",
  Wc = "PresetChanger_buttonImg_7bd8fc71";
function qc(e) {
  const t = R.aliases.halloween.shared.PresetsSwitcher("resId");
  return (0, Ta.jsx)(b, {
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
    ...W({
      header: R.strings.halloween_lobby.ammoSetup.changeHotKey.header(),
      body: R.strings.halloween_lobby.ammoSetup.changeHotKey.body(),
    }),
    className: $c,
    children: (0, Ta.jsx)(Oe, {
      size: Oe.sizes.extraSmall,
      theme: Oe.themes.secondary,
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
  Zc = "Section_base__battleBoosters_492e7c5f",
  Kc = yt(function ({ index: e, vehicleId: t, groupIndex: a, onSectionClick: s }) {
    const n = (0, Da.useContext)(Rr),
      { model: o } = qo(),
      i = o.disabled.get(),
      l = o.computes.sectionByIndex(a, e),
      r = Ze((e, t) => {
        const a = o.computes.isSectionSelected(e);
        (!s && a) || l?.type === bo || s?.(e, t);
      }),
      c = $(),
      d = (0, Da.useMemo)(() => {
        function e() {
          c.play("swipe", { target: "loadout-panel:ammunition_panel:section" });
        }
        return l
          ? {
              idToSlot: l.slots.reduce((e, t) => (t.intCD < 0 || (e[t.intCD] = t.id), e), {}),
              type: l.type,
              vehicleId: t,
              onSwiped: Ae(30, e),
            }
          : { idToSlot: {}, onSwiped: e };
      }, [l, c, t]);
    if (void 0 === l) return null;
    const u = (function ({ sectionToComponent: e = Mr, sectionType: t = "default" }) {
      return e[t] ?? e.default;
    })({ sectionToComponent: n.sectionToComponent, sectionType: l.type });
    return (0, Ta.jsxs)("div", {
      className: w(Vc, l.type === vo && Zc),
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
      className: w(Yc, e),
      children: o.map(({ id: e, sections: o, currentIndex: l }, r) =>
        (0, Ta.jsx)(
          "div",
          {
            className: Xc,
            children: (0, Ta.jsx)(Ec.Provider, {
              value: i,
              children: S(
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
                              (0, Ta.jsx)(Kc, {
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
  ed = ue("LoadoutPanel"),
  td = (0, Da.forwardRef)(function ({ children: e, className: t, ...a }, s) {
    return (0, Ta.jsx)(ed, { className: t, ref: s, ...a, children: e });
  }),
  ad = "AnomaliesButton_e0144c04",
  sd = "AnomaliesButton_bubble_e98e92d8";
function nd({ isNew: e, isDisabled: t, onClick: a, className: s }) {
  return (0, Ta.jsx)(D, {
    params: {
      resId: R.aliases.hangar.shared.Loadout("resId"),
      contentId: R.views.halloween.mono.lobby.tooltips.anomalies_entry_point_tooltip("resId"),
    },
    children: (0, Ta.jsxs)("div", {
      className: w(ad, s),
      children: [
        e &&
          (0, Ta.jsx)("div", {
            className: sd,
            children: (0, Ta.jsx)(et.Root, {
              children: (0, Ta.jsx)(et.Value, {
                value: R.strings.halloween_lobby.common.new(),
                size: k.small,
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
    className: w(od, e),
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
  hd = ae.resolve("images"),
  gd = ae.resolve("strings"),
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
      ...W(
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
      className: w(ud, m && md, r),
      children: (0, Ta.jsx)(Oe, {
        ref: d,
        autoAlignContent: !1,
        theme: Xe.secondary,
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
  yd = ae.resolve("strings");
function Cd({ availableActions: e, buyMoreDisabled: t, onActionClick: a, className: s }) {
  return (0, Ta.jsxs)("div", {
    className: w(xd.base, xd["base__" + (e.length ? "shown" : "hidden")], s),
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
  const i = Fe({ value: Ge.extraSmall }, { small: { value: Ge.small } });
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
              (0, Ta.jsx)(qe, {
                size: i.value,
                enabled: !s && t.length > 0,
                type: Te.currency,
                children: (0, Ta.jsx)(ot, {
                  type: l,
                  reverse: n,
                  enough: r,
                  classNames: { icon: w(Id, n && Sd), base: jd },
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
    type: Be.depot,
    reverse: t,
    size: Ge.small,
    enough: Boolean(e),
    classNames: { base: Ad, icon: w(kd, t && Dd) },
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
    l = Re("loadout.installed_on_vehicle", "loadout.installed_on_vehicle_upscale");
  return (0, Ta.jsx)("div", {
    className: w(Md.base, Md["base__" + (s ? "shown" : "hidden")], o),
    children: t
      ? (0, Ta.jsx)(De, { path: l, width: 24, height: 24 })
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
  Ud = [Zo, Go, Vo, "select"],
  Fd = ue("ConsumablesItem", "AbilityCard_98d24050");
var Gd = function ({ intCD: e, selected: t, item: s, controls: n }) {
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
      } = s,
      [b, f] = (function (e) {
        let t = e.lastIndexOf("\n");
        return -1 === t ? [e, void 0] : [e.substring(0, t), e.substring(t + 1)];
      })(r),
      v = u > -1,
      x = (0, Da.useMemo)(() => {
        const e = new Set();
        return m || !v
          ? e
          : (t || e.add(Zo),
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
      className: w(m && Rd, (("builtInEquipment" === l && t) || m) && Pd),
      onClick: function () {
        ("builtInEquipment" === l && t) || m || y(Ud.find((e) => x.has(e)) || "select");
      },
      children: (0, Ta.jsxs)("div", {
        className: Ld,
        children: [
          (0, Ta.jsx)("div", {
            className: Bd,
            children: (0, Ta.jsx)(_t, { name: i, overlayType: fi(l), size: _t.sizes.s180x135 }),
          }),
          (0, Ta.jsx)("div", {
            className: zd,
            children: (0, Ta.jsx)("div", { className: Od, children: o }),
          }),
          (0, Ta.jsx)(ge, { className: Wd, text: b, upgradeLegacy: !0 }),
          f && (0, Ta.jsx)(a, { text: f, className: qd, upgradeLegacy: !0 }),
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
var Zd = "AmmunitionCard_card_2bd54c54",
  Kd = ae.resolve("aliases"),
  Yd = yt(function ({ card: e, type: t, className: a }) {
    const { model: s } = qo(),
      {
        mounted: n,
        disabled: o,
        installedSlotId: i,
        intCD: l,
        lockReason: r,
        locked: c,
        mountedMoreThanOne: d,
        itemInstalledSetupIdx: u,
        itemInstalledSetupSlotIdx: p,
      } = e,
      _ = s.selectedSlot.get(),
      h = c ? _e.alert : -1 !== i ? _e.done : void 0,
      g = -1 !== i && _ === i,
      b = !n && -1 !== i && _ !== i,
      f = B({
        resId: Kd.read((e) => e.hangar.shared.Loadout("resId")),
        args: (0, Da.useMemo)(
          () => ({ intCD: l, slotId: _, slotType: dd, tooltipId: "hangarCardModule" }),
          [l, _],
        ),
      }),
      v = (0, Da.useMemo)(
        () => ({
          id: -1 === i ? "tankSetupConsumableItem" : "tankSetupConsumableSlot",
          args: {
            isDisabled: o,
            fieldType: 0,
            intCD: l,
            installedSlotId: i,
            itemInstalledSetupSlotIdx: p,
            itemInstalledSetupIdx: u,
            isMounted: n,
            isMountedMoreThanOne: d,
            slotType: jc.HWConsumables,
            emitterUID: window.subViews.get(Kd.read((e) => e.hangar.shared.Consumables("resId")))
              .uid,
          },
        }),
        [o, i, l, u, p, n, d],
      ),
      x = m(v.id, v.args),
      y = (function ({ intCD: e, selected: t }) {
        return (0, Ta.jsx)(Vd, { intCD: e, selected: t });
      })({ intCD: l, selected: g, ammunitionType: t });
    if (y)
      return (0, Ta.jsx)("div", {
        ...f,
        className: a,
        children: (0, Ta.jsx)(Ee, {
          ...x,
          className: Zd,
          status: h,
          statusReason: t !== dd ? r : void 0,
          active: b,
          selected: g,
          disabled: o,
          "data-test-id": l,
          children: y,
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
  const a = st();
  return (
    (0, Da.useEffect)(() => L(a.recalculate), [e?.length, a.recalculate]),
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
    { api: n } = Ye();
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
  const o = ze(e),
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
    className: w(Xd.scrollContainer, Xd[`scrollContainer__${a}`], t),
    children: [
      (0, Ta.jsx)(at, {
        classNames: { wrapper: Xd.scrollWrapper, content: Xd.scrollContent },
        children: (0, Ta.jsx)(U, {
          className: Xd.container,
          trashhold: `${e}`,
          children: (0, Ta.jsx)(Qd, { cards: l, type: e }),
        }),
      }),
      (0, Ta.jsx)(xe, { classNames: { base: Xd.verticalBar } }),
    ],
  });
});
function nu(e) {
  return (0, Ta.jsx)(Ve, { children: (0, Ta.jsx)(su, { ...e }) });
}
var ou = "ConfirmationPanel_afa99a14",
  iu = "ConfirmationPanel_currencies_7544112d",
  lu = "ConfirmationPanel_plus_335af158",
  ru = "ConfirmationPanel_buttons_ad07fa9b",
  cu = (e) => e > 0,
  du = ue("LeftBlock", "ConfirmationPanel_leftBlock_798f4c44"),
  uu = ue("Currencies", iu),
  mu = ue("Buttons", ru),
  pu = ue("ConfirmationPanel", ou);
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
  return t === Be.gold ? ft.formatNumber("gold", e) : ft.formatNumber("integral", e);
}
var fu = (0, Da.memo)(function ({ type: e, price: t }) {
    const a = Fe({ value: Ge.small }, { large: { value: Ge.medium } });
    return (0, Ta.jsxs)(ot, {
      ...W({
        body: ae
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
          (0, Ta.jsx)(De, {
            className: hu,
            path: `library.currency.${t.currency}_${Qe[a.value]}x${Qe[a.value]}`,
            width: Qe[a.value],
            height: Qe[a.value],
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
  Nu = ae.resolve("strings"),
  ku = "general",
  Du = "repair";
function Au(e) {
  if (e && Ne.includes(e)) return e;
}
var Eu = yt(function ({ type: e, className: t }) {
    const a = Fe({ value: be.small }, { large: { value: be.medium } }),
      { model: s, controls: n } = oi(),
      { controls: o, model: i } = { controls: n, model: s },
      l = W({ body: Nu.readOrEmpty("tank_setup.dealPanel.tooltip.notEnough") }),
      r = W(
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
      u = ze(d),
      m = void 0 !== e,
      p = $();
    return (
      (0, Da.useEffect)(() => {
        (d && !1 === u && p.play("expand", { target: "loadout:deal-panel" }),
          d || !0 !== u || p.play("collapse", { target: "loadout:deal-panel" }));
      }, [p, d, u]),
      i && c
        ? (0, Ta.jsxs)(pu, {
            className: t,
            children: [
              (0, Ta.jsx)(Pe, {
                ...(m && r),
                className: w(yu, e && Cu),
                classNames: { label: wu },
                checked: m && c.autoRenewalEnabled,
                size: a.value,
                onCheckedChange: o.toggleAutoRenewal,
                children: Nu.readOrEmpty("tank_setup.dealPanel.autoRenew"),
              }),
              (0, Ta.jsxs)(pu.Left, {
                className: w(vu, d && xu),
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
                        children: (0, Ta.jsx)(Oe, {
                          className: Su,
                          classNames: { content: ju },
                          disabled: (!c.canConfirm || c.disabled) && d,
                          onClick: o.confirm,
                          theme: Xe.primary,
                          size: a.value,
                          "data-test-id": "dealPanelApply",
                          children: Nu.readOrEmpty("tank_setup.dealPanel.button.apply"),
                        }),
                      }),
                      (0, Ta.jsx)("div", {
                        className: Iu,
                        children: (0, Ta.jsx)(Oe, {
                          className: Su,
                          classNames: { content: ju },
                          disabled: !c.canCancel,
                          onClick: o.cancel,
                          theme: Xe.secondary,
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
  const t = $(),
    a = (0, Da.useRef)(!1),
    s = (0, Da.useRef)(),
    n = ze(e);
  return (
    (0, Da.useEffect)(() => {
      if (e !== n && e && n) {
        if (a.current) return;
        ((a.current = !0),
          (s.current = setTimeout(() => (a.current = !1), 100)),
          t.play("switch", { target: "loadout:ammunition_setup" }));
      }
    }, [e, n, t]),
    F(() => clearTimeout(s.current)),
    (0, Ta.jsxs)("div", {
      className: Mu,
      children: [(0, Ta.jsx)(nu, { type: e }), (0, Ta.jsx)(Eu, { className: Tu, type: e })],
    })
  );
}
var Lu = "ScreenWrapper_inner_f586f6da",
  Ru = "ScreenWrapper_content_42e9ccec",
  Bu = ue("LoadoutScreenWrapper", "ScreenWrapper_39a2fe74"),
  zu = yt(function ({ classNames: e, children: t }) {
    return (0, Ta.jsx)(Bu, {
      className: e?.base,
      children: (0, Ta.jsx)("div", {
        className: Lu,
        children: (0, Ta.jsx)("div", { className: w(Ru, e?.content), children: t }),
      }),
    });
  }),
  [Ou, $u] = J("VehicleTitleModelProvider")(({ observableModel: e }) => ({ root: e.object() }), tt),
  Hu = "VehicleTitle_e5c656e6",
  Wu = "VehicleTitle_vehName_4d31c340",
  qu = yt(function ({ className: e }) {
    const { model: t } = $u(),
      a = t.root.get().vehicleType,
      s = Fe(
        { vehTypesSize: Je.Type.sizes.x24x24 },
        {
          medium: { vehTypesSize: Je.Type.sizes.x48x48 },
          extraLarge: { vehTypesSize: Je.Type.sizes.x64x64 },
        },
      );
    return (0, Ta.jsxs)("div", {
      className: w(Hu, e),
      children: [
        (0, Ta.jsx)(Je.Type, { size: s.vehTypesSize, type: a, premium: !1 }),
        (0, Ta.jsx)(Je.Name, { className: Wu, children: t.root.get().name }),
      ],
    });
  });
function Uu(e) {
  const t = R.aliases.halloween.shared.VehicleTitle("resId");
  return (0, Ta.jsx)(b, {
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
  Zu = "LoadoutScreen_vehicleTitle_fa06ccfa",
  Ku = "LoadoutScreen_info_c568de1c",
  Yu = ae.resolve("aliases");
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
  const a = bt();
  me(t.ESCAPE, () => {
    a.push(Jn, void 0);
  });
  const { page: s } = e.params;
  return (0, Ta.jsxs)("div", {
    className: Gu,
    children: [
      (0, Ta.jsx)("div", { className: Fu }),
      (0, Ta.jsx)(zu, {
        classNames: { base: Vu, info: Ku },
        children: (0, Ta.jsxs)(Ta.Fragment, {
          children: [
            (0, Ta.jsx)(Uu, { className: Zu }),
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
      i = W({ body: R.strings.halloween_lobby.hangar.tooltipAbout() }),
      l = W({
        header: n ? "" : R.strings.halloween_lobby.infoBestiary.simpleTooltip.header.disabled(),
        body: R.strings.halloween_lobby.infoBestiary.simpleTooltip.body.$dyn(
          "" + (n ? "enabled" : "disabled"),
        ),
      });
    return (0, Ta.jsxs)("div", {
      className: (0, ka.default)(em, e),
      children: [
        s &&
          (0, Ta.jsx)(Oe, {
            ...i,
            className: tm,
            theme: Oe.themes.secondary,
            classNames: { content: am },
            size: Oe.sizes.small,
            onClick: a.onAboutClick,
          }),
        (0, Ta.jsxs)(Oe, {
          ...l,
          className: nm,
          theme: Oe.themes.secondary,
          size: Oe.sizes.small,
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
        (0, Ta.jsx)(et.Root, {
          hidden: !o,
          className: lm,
          children: (0, Ta.jsx)(et.Icon, { type: pe.bubble, size: k.medium }),
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
  Sm = ae.resolve("intl"),
  jm = ae.resolve("strings"),
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
  const c = $(),
    d = e === _m && o,
    u = W(
      (0, Da.useMemo)(
        () =>
          (function (e, t) {
            const a = ((t && km[e]) || Nm[e]) ?? `tooltips.header.buttons.${e}`;
            return { header: jm.readOrEmpty(`${a}.header`), body: jm.readOrEmpty(`${a}.body`) };
          })(d ? Im : e, "disabled" === t),
        [e, t, d],
      ),
    ),
    m = h("techtreeDiscount"),
    p = n && "techtree" === e ? m : u;
  const _ = l ?? `${r}.battleTypes.c_64x64.${s}`;
  return (0, Ta.jsx)("div", {
    ...p,
    className: w(wm.base, wm[`base__${t}State`], wm[`base__${e}Name`]),
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
var [Em, Mm] = J()(
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
      className: w(Tm, e),
      children: le(o, (e) =>
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
    d = Fe({ size: ye.small }, { large: { size: ye.medium } });
  return (0, Ta.jsxs)("div", {
    className: (0, ka.default)(Hm, s),
    children: [
      (0, Ta.jsx)(
        te,
        {
          classMix: Wm,
          text: c
            ? R.strings.halloween_lobby.vehicle.tasks.locked()
            : R.strings.halloween_lobby.vehicle.rent.label(),
          binding: { number: Vt(n) },
          alignContent: x.Center,
          justifyContent: x.Center,
          isTruncationAvailable: !0,
          isTooltipEnable: !0,
        },
        `mission${o}task${n}`,
      ),
      (0, Ta.jsxs)("div", {
        className: qm,
        children: [
          (0, Ta.jsx)(oe, {
            isEnabled: c,
            header: R.strings.halloween_tooltips.hangar.objectiveBtn.header(),
            body: R.strings.halloween_tooltips.hangar.objectiveBtn.body(),
            children: (0, Ta.jsx)(Oe, {
              className: Um,
              size: d.size,
              onClick: a,
              disabled: c,
              theme: Oe.themes.primary,
              children: R.strings.halloween_lobby.vehicle.rent.tasks(),
            }),
          }),
          (0, Ta.jsx)(Oe, {
            className: Um,
            theme: Oe.themes.secondary,
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
var Zm = "HangarApp_3e4fb379",
  Km = "HangarApp_mainMenu_37a06a8e",
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
      [p, _] = (0, Da.useState)(o),
      [h, g] = (0, Da.useState)(!1),
      b = o + 1,
      f = o - 1,
      v = p === s,
      x = ce(),
      [y, C] = (0, Da.useState)(!1),
      w = a.location === Jn;
    ((0, Da.useEffect)(() => {
      (t.onViewLoaded(), je(!0));
    }, [t]),
      (0, Da.useEffect)(() => {
        x ||
          m.current === p ||
          (t.onSlide(p),
          (m.current = p),
          He(() => {
            t.onWidgetsUpdate(p);
          }, 200));
      }, [p, t, x]),
      (0, Da.useEffect)(() => {
        0 !== i &&
          He(() => {
            p !== i && (_(i), g(!0), Ue.sound(St));
          }, 600);
      }, [i]),
      (0, Da.useEffect)(
        () =>
          He(() => {
            p !== o && (_(o), g(!0), Ue.sound(St));
          }, 600),
        [o],
      ),
      (0, Da.useEffect)(() => {
        v && C(v);
      }, [v]));
    const I = (0, Da.useCallback)(() => {
        (g(!0), _(b));
      }, [b]),
      S = (0, Da.useCallback)(() => {
        (g(!0), _(f));
      }, [f]),
      j = (0, Da.useCallback)(() => {
        (g(!1), C(v));
      }, [v]);
    return (
      (0, Da.useEffect)(() => {
        !w && h && j();
      }, [w, h, j]),
      (0, Ta.jsxs)("div", {
        className: (0, ka.default)(Zm, n && up),
        children: [
          (0, Ta.jsx)(P, {
            children: (0, Ta.jsx)($e, { path: `${eo.root}/:page`, component: Ju }),
          }),
          w &&
            (0, Ta.jsxs)(Ta.Fragment, {
              children: [
                (0, Ta.jsx)(ho, {
                  activeIndex: o,
                  maxCount: s,
                  isCompleted: r,
                  isOpened: c,
                  isAnimationPlaying: h,
                  onAnimationCompleted: j,
                  className: Ym,
                }),
                (0, Ta.jsx)("div", { className: Xm }),
                (0, Ta.jsx)($m, { className: Km }),
                (0, Ta.jsx)(hs, { className: Qm }),
                (0, Ta.jsx)("div", {
                  className: op,
                  children: (0, Ta.jsx)(zn, {
                    selectedMissionID: p,
                    selectedSlideID: p,
                    onRewardPathSizeChange: tt,
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
                        isButtonDisabled: !v,
                        className: (0, ka.default)(ap, v && sp, y && !v && np),
                      },
                      "" + (v ? "show" : "hide"),
                    ),
                  }),
                (0, Ta.jsx)("div", {
                  className: (0, ka.default)(Jm, v && ep),
                  children: (0, Ta.jsx)(Qn, {
                    selectedMissionID: p,
                    selectedSlideID: p,
                    onClick: t.onEnemyClick,
                  }),
                }),
                o > 1 && (0, Ta.jsx)(Jt, { className: ip, type: ea.Left, disabled: h, onClick: S }),
                o < s &&
                  (0, Ta.jsx)(Jt, { className: lp, type: ea.Right, disabled: h, onClick: I }),
                (0, Ta.jsxs)("div", {
                  className: rp,
                  children: [
                    (0, Ta.jsx)(Za, { className: cp }),
                    (0, Ta.jsx)(Vm, {
                      className: pp,
                      showPacks: t.onPacksClick,
                      showTasks: t.onTasksClick,
                      showComparison: t.onComparisonClick,
                      taskIndex: l,
                      selectedMission: p,
                      showAnomalies: t.onAnomaliesClick,
                      areAnomaliesUnlocked: d,
                      hasNewAnomaly: u,
                    }),
                  ],
                }),
              ],
            }),
          (0, Ta.jsx)("div", {
            className: (0, ka.default)(dp, !w && mp),
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
  hp = s([
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
we(
  new mt()
    .addWithProps(ht, { soundsOverrides: hp })
    .add(V)
    .add($n)
    .render((0, Ta.jsx)(_p, {})),
)
  .then(() => Se(document.getElementById("root")))
  .then(() => Ke())
  .then(() => je(!1));
