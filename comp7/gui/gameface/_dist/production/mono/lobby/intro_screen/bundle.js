import { r as e } from "../chunks/rolldown-runtime.js";
import {
  $o as s,
  Dr as a,
  Er as n,
  Hr as t,
  Ko as i,
  Lo as r,
  Mr as o,
  Na as c,
  Pa as l,
  Rr as d,
  _i as _,
  ao as u,
  fi as m,
  io as h,
  la as p,
  na as g,
  ra as f,
  ws as b,
} from "../chunks/lib.js";
import "../chunks/_wg-global-styles.js";
import { a as x, i as S } from "../chunks/vendor.js";
/* empty css               */ import { n as j, t as v } from "../chunks/schedule_model.js";
import { t as I } from "../chunks/get_button_size.js";
import { t as k } from "../chunks/schedule_subheading.js";
import { t as w } from "../chunks/use_server_time_polling.js";
import { t as N } from "../chunks/arrow_button.js";
import { t as D } from "../chunks/get_roman_levels.js";
var A = e(b(), 1),
  [C, L] = _()(
    ({ observableModel: e }) => ({ root: e.object(), vehicleLevels: e.array("vehicleLevels") }),
    ({ externalModel: e }) => ({ close: e.createCallbackNoArgs("onClose") }),
  ),
  T = e(S(), 1),
  y = "CountDownSubheading_3410a94d",
  M = "CountDownSubheading_highlight_8ca1da33",
  $ = "CountDownSubheading_timeLeftText_83a0f10d",
  z = "CountDownSubheading_countDownContainer_95936a62",
  O = "CountDownSubheading_countDownText_c438ad0f",
  W = "CountDownSubheading_timer_dfa1cd55",
  E = e(l(), 1),
  H = ({ timeLeft: e, className: s }) =>
    (0, E.jsx)("div", {
      className: (0, T.default)(y, s),
      children: (0, E.jsx)(o, {
        text: R.strings.comp7_ext.countDown.text(),
        binding: {
          timeLeft: (0, E.jsxs)("div", {
            className: z,
            children: [
              (0, E.jsx)("div", { className: M }),
              (0, E.jsx)("div", { className: W }),
              (0, E.jsx)(n, { duration: e, icon: a.None, classNames: { text: O } }),
            ],
          }),
        },
        classMix: $,
      }),
    }),
  U = {
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
  q = x(() => {
    const { model: e, controls: s } = j(),
      a = e.season.startTimestamp.get(),
      n = e.season.endTimestamp.get(),
      t = e.season.serverTimestamp.get();
    return (
      w(t, n, s.pollServerTime),
      (0, E.jsx)("div", {
        className: U.base,
        children:
          t < a ? (0, E.jsx)(H, { timeLeft: a - t, className: U.countDown }) : (0, E.jsx)(k, {}),
      })
    );
  }),
  B = "Slide_680b9fee",
  P = "Slide_title_442d6e94",
  Q = "Slide_icon_2921c32",
  F = "Slide_description_a6104f8",
  G = x(({ id: e }) => {
    const { model: s } = L(),
      { model: a } = j(),
      { qualificationBattlesCount: n } = s.root.get(),
      t = `url(${"ranks" === e ? R.images.comp7.gui.maps.icons.metaIntro.$dyn(`ranks_${a.season.name.get()}`) : R.images.comp7.gui.maps.icons.metaIntro.$dyn(e)})`,
      i = D(s.vehicleLevels.get(), R.strings.comp7_ext.listSeparator());
    return (0, E.jsxs)("div", {
      className: B,
      children: [
        (0, E.jsx)(o, { text: String(R.strings.comp7_ext.intro.title.$dyn(e)), classMix: P }),
        (0, E.jsx)("div", { className: Q, style: { backgroundImage: t } }),
        (0, E.jsx)(o, {
          text: `${R.strings.comp7_ext.intro.description.$plural(e, n)}`,
          binding: { count: n, levels: i },
          classMix: F,
        }),
      ],
    });
  }),
  K = "Slider_caaf79d4",
  J = "Slider_trackWrapper_9b67f47e",
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
  oe = (e, a) => () => {
    e || (a(), s.click(), s.sound(R.sounds.bp_glide_01()));
  },
  ce = ({ className: e }) => {
    const [s, a] = (0, A.useState)(0),
      [n, t] = (0, A.useState)(!1),
      i = 0 === s,
      o = s === re - 1;
    (p(() => {
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
      (0, A.useEffect)(
        () =>
          u(() =>
            h(() => {
              n && t(!1);
            }, 500),
          ),
        [n],
      ));
    const c = oe(i, () => a(s - 1)),
      l = oe(o, () => a(s + 1));
    return (
      f(r.ARROW_LEFT, c),
      f(r.ARROW_RIGHT, l),
      (0, E.jsxs)("div", {
        className: (0, T.default)(K, e),
        style: { "--currentSlideIndex": s, "--transitionDuration": "500ms" },
        children: [
          (0, E.jsx)(N, {
            size: "medium",
            direction: "left",
            disabled: i,
            className: (0, T.default)(ee, se),
            onClick: c,
          }),
          (0, E.jsx)(N, {
            size: "medium",
            direction: "right",
            disabled: o,
            className: (0, T.default)(ee, ae),
            onClick: l,
          }),
          (0, E.jsxs)("div", {
            className: J,
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
      { mediaSize: s } = c();
    return (
      g(e.close),
      (0, E.jsxs)("div", {
        className: le,
        children: [
          (0, E.jsx)(q, {}),
          (0, E.jsx)("div", { className: de, children: (0, E.jsx)(ce, { className: _e }) }),
          (0, E.jsx)("div", {
            className: ue,
            children: (0, E.jsx)(d, {
              theme: d.themes.primary,
              size: I(s),
              className: me,
              onClick: e.close,
              children: R.strings.comp7_ext.intro.confirmButton(),
            }),
          }),
        ],
      })
    );
  });
(i("comp7/gui/maps/icons/backgrounds/comp7_bg.dds"),
  m(
    (0, E.jsx)(t, {
      children: (0, E.jsx)(C, {
        children: (0, E.jsx)(v, {
          options: { context: "model.scheduleInfo" },
          children: (0, E.jsx)(he, {}),
        }),
      }),
    }),
    { fullScreen: !0 },
  ));
