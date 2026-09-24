import { r as e } from "../chunks/rolldown-runtime.js";
import {
  $ as s,
  $o as a,
  J as n,
  Ko as t,
  Lo as i,
  Na as r,
  Pa as o,
  Sr as c,
  _i as l,
  ao as d,
  fi as _,
  io as u,
  la as m,
  na as h,
  pr as p,
  q as g,
  ra as f,
  ws as b,
} from "../chunks/lib.js";
import "../chunks/_wg-global-styles.js";
import { a as x, i as S } from "../chunks/vendor.js";
/* empty css               */ import { n as j, t as v } from "../chunks/schedule_model.js";
import { t as I } from "../chunks/use_server_time_polling.js";
import { t as k } from "../chunks/get_roman_levels.js";
import { t as w } from "../chunks/get_button_size.js";
import { t as N } from "../chunks/schedule_subheading.js";
import { t as A } from "../chunks/arrow_button.js";
var D = e(b(), 1),
  [C, L] = l()(
    ({ observableModel: e }) => ({ root: e.object(), vehicleLevels: e.array("vehicleLevels") }),
    ({ externalModel: e }) => ({ close: e.createCallbackNoArgs("onClose") }),
  ),
  T = e(S(), 1),
  y = "CountDownSubheading_3410a94d",
  $ = "CountDownSubheading_highlight_8ca1da33",
  M = "CountDownSubheading_timeLeftText_83a0f10d",
  z = "CountDownSubheading_countDownContainer_95936a62",
  O = "CountDownSubheading_countDownText_c438ad0f",
  W = "CountDownSubheading_timer_dfa1cd55",
  E = e(o(), 1),
  U = ({ timeLeft: e, className: a }) =>
    (0, E.jsx)("div", {
      className: (0, T.default)(y, a),
      children: (0, E.jsx)(s, {
        text: R.strings.comp7_ext.countDown.text(),
        binding: {
          timeLeft: (0, E.jsxs)("div", {
            className: z,
            children: [
              (0, E.jsx)("div", { className: $ }),
              (0, E.jsx)("div", { className: W }),
              (0, E.jsx)(g, { duration: e, icon: n.None, classNames: { text: O } }),
            ],
          }),
        },
        classMix: M,
      }),
    }),
  q = {
    countDown: "IntroSubheading_countDown_674b18af",
    fadeIn: "IntroSubheading_fadeIn_4ca45996",
    fadeInThreeQuarters: "IntroSubheading_fadeInThreeQuarters_4ca45996",
    fadeInHalf: "IntroSubheading_fadeInHalf_4ca45996",
    fadeOut: "IntroSubheading_fadeOut_4ca45996",
    fadeInWithScale: "IntroSubheading_fadeInWithScale_4ca45996",
    slideUp: "IntroSubheading_slideUp_4ca45996",
    scale: "IntroSubheading_scale_4ca45996",
    raysAppearance: "IntroSubheading_raysAppearance_4ca45996",
    rotate: "IntroSubheading_rotate_4ca45996",
    "reverse-rotate": "IntroSubheading_reverse-rotate_4ca45996",
    glowAppearance: "IntroSubheading_glowAppearance_4ca45996",
    highlightAppearance: "IntroSubheading_highlightAppearance_4ca45996",
    blink: "IntroSubheading_blink_4ca45996",
    slideUpIn: "IntroSubheading_slideUpIn_4ca45996",
  },
  H = x(() => {
    const { model: e, controls: s } = j(),
      a = e.season.startTimestamp.get(),
      n = e.season.endTimestamp.get(),
      t = e.season.serverTimestamp.get();
    return (
      I(t, n, s.pollServerTime),
      (0, E.jsx)("div", {
        className: q.base,
        children:
          t < a ? (0, E.jsx)(U, { timeLeft: a - t, className: q.countDown }) : (0, E.jsx)(N, {}),
      })
    );
  }),
  B = "Slide_680b9fee",
  P = "Slide_title_442d6e94",
  Q = "Slide_icon_2921c32",
  F = "Slide_description_a6104f8",
  G = x(({ id: e }) => {
    const { model: a } = L(),
      { model: n } = j(),
      { qualificationBattlesCount: t } = a.root.get(),
      i = `url(${"ranks" === e ? R.images.comp7.gui.maps.icons.metaIntro.$dyn(`ranks_${n.season.name.get()}`) : R.images.comp7.gui.maps.icons.metaIntro.$dyn(e)})`,
      r = k(a.vehicleLevels.get(), R.strings.comp7_ext.listSeparator());
    return (0, E.jsxs)("div", {
      className: B,
      children: [
        (0, E.jsx)(s, { text: String(R.strings.comp7_ext.intro.title.$dyn(e)), classMix: P }),
        (0, E.jsx)("div", { className: Q, style: { backgroundImage: i } }),
        (0, E.jsx)(s, {
          text: `${R.strings.comp7_ext.intro.description.$plural(e, t)}`,
          binding: { count: t, levels: r },
          classMix: F,
        }),
      ],
    });
  }),
  J = "Slider_caaf79d4",
  K = "Slider_trackWrapper_9b67f47e",
  V = "Slider_track_e521f890",
  X = "Slider_track__withoutTransition_df13aef3",
  Y = "Slider_slide_727efd4",
  Z = "Slider_slide__active_b616c59f",
  ee = "Slider_arrow_4c311c25",
  se = "Slider_arrow__left_5cd6617d",
  ae = "Slider_arrow__right_5676bbb7",
  ne = "Slider_counter_8cf4b130",
  te = "Slider_counterDivider_3d5ed95",
  ie = [
    "vehiclesOnMap",
    "banPhase",
    "onslaughtModifiers",
    "pointsOfInterest",
    "roleSkills",
    "draw",
    "nightMaps",
    "qualification",
    "ranks",
  ],
  re = ie.length,
  oe = (e, s) => () => {
    e || (s(), a.click(), a.sound(R.sounds.bp_glide_01()));
  },
  ce = ({ className: e }) => {
    const [s, a] = (0, D.useState)(0),
      [n, t] = (0, D.useState)(!1),
      r = 0 === s,
      o = s === re - 1;
    (m(() => {
      const e = () => {
        t(!0);
      };
      return (
        window.addEventListener("resize", e),
        () => {
          window.removeEventListener("resize", e);
        }
      );
    }),
      (0, D.useEffect)(
        () =>
          d(() =>
            u(() => {
              n && t(!1);
            }, 500),
          ),
        [n],
      ));
    const c = oe(r, () => a(s - 1)),
      l = oe(o, () => a(s + 1));
    return (
      f(i.ARROW_LEFT, c),
      f(i.ARROW_RIGHT, l),
      (0, E.jsxs)("div", {
        className: (0, T.default)(J, e),
        style: { "--currentSlideIndex": s, "--transitionDuration": "500ms" },
        children: [
          (0, E.jsx)(A, {
            size: "medium",
            direction: "left",
            disabled: r,
            className: (0, T.default)(ee, se),
            onClick: c,
          }),
          (0, E.jsx)(A, {
            size: "medium",
            direction: "right",
            disabled: o,
            className: (0, T.default)(ee, ae),
            onClick: l,
          }),
          (0, E.jsxs)("div", {
            className: K,
            children: [
              (0, E.jsxs)("div", {
                className: ne,
                children: [s + 1, (0, E.jsx)("div", { className: te, children: "/" }), re],
              }),
              (0, E.jsx)("div", {
                className: (0, T.default)(V, n && X),
                children: ie.map((e, a) =>
                  (0, E.jsx)(
                    "div",
                    {
                      className: (0, T.default)(Y, a === s && Z),
                      children: (0, E.jsx)(G, { id: e }),
                    },
                    `slide-${a}`,
                  ),
                ),
              }),
            ],
          }),
        ],
      })
    );
  },
  le = "App_33100033",
  de = "App_content_24a8a318",
  _e = "App_slider_87749c8a",
  ue = "App_buttonWrapper_bc918676",
  me = "App_button_b6edc495",
  he = x(function () {
    const { controls: e } = L(),
      { mediaSize: s } = r();
    return (
      h(e.close),
      (0, E.jsxs)("div", {
        className: le,
        children: [
          (0, E.jsx)(H, {}),
          (0, E.jsx)("div", { className: de, children: (0, E.jsx)(ce, { className: _e }) }),
          (0, E.jsx)("div", {
            className: ue,
            children: (0, E.jsx)(p, {
              theme: p.themes.primary,
              size: w(s),
              className: me,
              onClick: e.close,
              children: R.strings.comp7_ext.intro.confirmButton(),
            }),
          }),
        ],
      })
    );
  });
(t("comp7/gui/maps/icons/backgrounds/comp7_bg.dds"),
  _(
    (0, E.jsx)(c, {
      children: (0, E.jsx)(C, {
        children: (0, E.jsx)(v, {
          options: { context: "model.scheduleInfo" },
          children: (0, E.jsx)(he, {}),
        }),
      }),
    }),
    { fullScreen: !0 },
  ));
