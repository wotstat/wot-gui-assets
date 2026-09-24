import { r as e } from "../chunks/rolldown-runtime.js";
import {
  Er as a,
  F as s,
  Ia as n,
  Ki as t,
  Kn as i,
  Li as _,
  Mt as r,
  Na as c,
  Pa as d,
  Sr as o,
  Ss as l,
  Un as p,
  Vo as m,
  Yi as h,
  _i as g,
  bo as f,
  fi as x,
  gi as b,
  na as u,
  no as w,
  pr as N,
  ts as v,
  yr as j,
} from "../chunks/lib.js";
import "../chunks/_wg-global-styles.js";
import { a as M, i as I } from "../chunks/vendor.js";
/* empty css               */ import { n as V, t as C } from "../chunks/schedule_model.js";
import { i as T } from "../chunks/enums.js";
import { n as y } from "../chunks/consts.js";
import { t as k } from "../chunks/get_button_size.js";
import { t as A } from "../chunks/schedule_subheading.js";
import { n as U, t as S } from "../chunks/vehicle_name.js";
import { t as B } from "../chunks/close_button.js";
var [$, W] = g()(
    ({ observableModel: e }) => {
      const a = { rentalVehicles: e.array("rentalVehicles") },
        s = b(
          (e) => {
            const s = f(a.rentalVehicles.get(), e);
            if (!s) throw new Error(`rentalVehicle with index ${e} is not found`);
            return { ...s };
          },
          { equals: m },
        );
      return { ...a, computes: { rentalVehicle: s } };
    },
    ({ externalModel: e }) => ({
      close: e.createCallbackNoArgs("onClose"),
      openVideo: e.createCallbackNoArgs("onVideoOpen"),
    }),
  ),
  z = e(I(), 1),
  H = e(d(), 1),
  O = ({ className: e, onClose: a }) => (
    u(a),
    (0, H.jsx)("div", { className: (0, z.default)(e), children: (0, H.jsx)(r, {}) })
  ),
  L = "BackgroundVideo_3146bd30",
  P = "BackgroundVideo_video_be61ad9f",
  Q = "BackgroundVideo_video__bg_277575c1",
  D = (e) => !!v.isHigh() && e,
  G = ({ className: e, classNames: a, animated: n = !0 }) =>
    (0, H.jsx)("div", {
      className: (0, z.default)(L, e),
      children: D(n)
        ? (0, H.jsx)(s, {
            className: (0, z.default)(P, a?.video),
            src: String(R.videos.comp7.yearly_styles()),
            autoplay: !0,
            loop: !0,
          })
        : (0, H.jsx)("div", { className: (0, z.default)(P, Q, a?.video) }),
    }),
  K = {
    base: "Tag_ebca89ec",
    base__new: "Tag_base__new_bca663c2",
    base__changed: "Tag_base__changed_9320deb9",
    base__seasonUpdate: "Tag_base__seasonUpdate_852f3760",
    base__revamped: "Tag_base__revamped_712085ab",
    base__returned: "Tag_base__returned_dee71c48",
    base__attention: "Tag_base__attention_2521ac7d",
    base__experimental: "Tag_base__experimental_48eda667",
    fadeIn: "Tag_fadeIn_0",
    fadeInThreeQuarters: "Tag_fadeInThreeQuarters_0",
    fadeInHalf: "Tag_fadeInHalf_0",
    fadeOut: "Tag_fadeOut_0",
    fadeInWithScale: "Tag_fadeInWithScale_0",
    slideUp: "Tag_slideUp_0",
    scale: "Tag_scale_0",
    raysAppearance: "Tag_raysAppearance_0",
    rotate: "Tag_rotate_0",
    "reverse-rotate": "Tag_reverse-rotate_0",
    glowAppearance: "Tag_glowAppearance_0",
    highlightAppearance: "Tag_highlightAppearance_0",
    blink: "Tag_blink_0",
    slideUpIn: "Tag_slideUpIn_0",
  },
  E = ({ type: e, className: a }) =>
    (0, H.jsx)("div", {
      className: (0, z.default)(K.base, K[`base__${e}`], a),
      children: `${R.strings.comp7_ext.whatsNewView.tag.$dyn(e)}`,
    }),
  q = "WatchVideo_content_ae20f033",
  F = "WatchVideo_videoButton_6b01e609",
  Y = "WatchVideo_text_6df0b12";
function J(e) {
  return e >= n.Large ? N.sizes.large : N.sizes.medium;
}
var X = M(function () {
    const { controls: e } = W(),
      { mediaSize: a } = c();
    return (0, H.jsx)(N, {
      theme: N.themes.secondary,
      size: J(a),
      onClick: e.openVideo,
      children: (0, H.jsxs)("div", {
        className: q,
        children: [
          (0, H.jsx)("div", { className: F }),
          (0, H.jsx)("div", {
            className: Y,
            children: R.strings.comp7_ext.whatsNewView.watchVideo(),
          }),
        ],
      }),
    });
  }),
  Z = "Banner_807baf62",
  ee = "Banner_h3_26797561",
  ae = "Banner_heading_233e13d2",
  se = "Banner_description_dfea0790",
  ne = "Banner_date_1c1a4743",
  te = "Banner_introDescription_1e9ef322",
  ie = "Banner_headingContainer_cb4c7c84",
  _e = "Banner_introContainer_fbde58b8",
  re = "Banner_tag_b884e5f0",
  ce = "Typography_h1_da89a0d0",
  de = "Typography_h2_13f4d2f5",
  oe = "Typography_h3_13f4d2f5",
  le = "Typography_paragraphText_5f2b094e",
  pe = M(function () {
    const { model: e } = V(),
      s = e.season.name.get();
    return (0, H.jsxs)("div", {
      className: Z,
      children: [
        (0, H.jsx)("div", {
          className: l(oe, ee),
          children: R.strings.comp7_ext.whatsNewView.banner.title.small(),
        }),
        (0, H.jsx)("div", {
          className: ce,
          children: R.strings.comp7_ext.whatsNewView.banner.title.large(),
        }),
        (0, H.jsx)(A, { hasSeasonName: !1, className: ne }),
        s === T.Third &&
          (0, H.jsxs)("div", {
            className: ie,
            children: [
              (0, H.jsx)("div", {
                className: l(oe, ee),
                children: R.strings.comp7_ext.whatsNewView.banner.heading(),
              }),
              (0, H.jsx)("div", {
                className: le,
                children: R.strings.comp7_ext.whatsNewView.banner.description(),
              }),
            ],
          }),
        (0, H.jsx)(X, {}),
        (0, H.jsx)("div", {
          className: _e,
          children: (0, H.jsxs)("div", {
            className: te,
            children: [
              (0, H.jsx)(a, {
                text: R.strings.comp7_ext.whatsNewView.nightMaps.heading(),
                params: { tag: (0, H.jsx)(E, { type: "new", className: re }) },
                className: ae,
              }),
              (0, H.jsx)(a, {
                text: R.strings.comp7_ext.whatsNewView.nightMaps.description(),
                className: l(le, se),
              }),
            ],
          }),
        }),
      ],
    });
  }),
  me = [
    { name: "28_desert_comp7_nb", tag: "new" },
    { name: "35_steppes_comp7_nb", tag: "new" },
    { name: "115_sweden_comp7_nb", tag: "new" },
    { name: "128_last_frontier_v_comp7_nb", tag: "new" },
    { name: "28_desert", stamp: "removed" },
    { name: "35_steppes", stamp: "removed" },
    { name: "115_sweden", stamp: "removed" },
    { name: "128_last_frontier_v", stamp: "removed" },
  ],
  he = {
    base: "Map_66920b8d",
    background: "Map_background_0",
    gradient: "Map_gradient_aa55b2e6",
    content: "Map_content_3c0f8b58",
    nameContainer: "Map_nameContainer_8f070fae",
    name: "Map_name_cdb35f0e",
    stamp: "Map_stamp_a5bd6bea",
    stamp__removed: "Map_stamp__removed_ea43b661",
    stamp__underDevelopment: "Map_stamp__underDevelopment_2eab81f6",
    fadeIn: "Map_fadeIn_0",
    fadeInThreeQuarters: "Map_fadeInThreeQuarters_0",
    fadeInHalf: "Map_fadeInHalf_0",
    fadeOut: "Map_fadeOut_0",
    fadeInWithScale: "Map_fadeInWithScale_0",
    slideUp: "Map_slideUp_0",
    scale: "Map_scale_0",
    raysAppearance: "Map_raysAppearance_0",
    rotate: "Map_rotate_0",
    "reverse-rotate": "Map_reverse-rotate_0",
    glowAppearance: "Map_glowAppearance_0",
    highlightAppearance: "Map_highlightAppearance_0",
    blink: "Map_blink_0",
    slideUpIn: "Map_slideUpIn_0",
  };
function ge({ name: e, tag: a, stamp: s }) {
  const n = R.strings.arenas.$dyn(`c_${e}`);
  return (0, H.jsxs)("div", {
    className: he.base,
    children: [
      (0, H.jsx)(j, {
        path: `R.images.comp7.gui.maps.icons.whatsNewView.arenas.c_${e}`,
        className: he.background,
      }),
      (0, H.jsx)("div", { className: he.gradient }),
      s &&
        (0, H.jsx)("div", {
          className: l(he.stamp, he[`stamp__${s}`]),
          children: `${R.strings.comp7_ext.whatsNewView.stamp.$dyn(s)}`,
        }),
      (0, H.jsxs)("div", {
        className: he.content,
        children: [
          a && (0, H.jsx)(E, { type: a, className: he.tag }),
          (0, H.jsx)("div", {
            className: he.nameContainer,
            children: (0, H.jsx)("div", { className: he.name, children: `${n.$dyn("name")}` }),
          }),
        ],
      }),
    ],
  });
}
var fe = "Grid_header_9a3828c4",
  xe = "Grid_row_fad44a4a",
  be = "Grid_cell_95a78ad9",
  ue = {
    header: "MapChanges_header_31ada2d",
    legend: "MapChanges_legend_92b285b6",
    fadeIn: "MapChanges_fadeIn_194c07e7",
    fadeInThreeQuarters: "MapChanges_fadeInThreeQuarters_194c07e7",
    fadeInHalf: "MapChanges_fadeInHalf_194c07e7",
    fadeOut: "MapChanges_fadeOut_194c07e7",
    fadeInWithScale: "MapChanges_fadeInWithScale_194c07e7",
    slideUp: "MapChanges_slideUp_194c07e7",
    scale: "MapChanges_scale_194c07e7",
    raysAppearance: "MapChanges_raysAppearance_194c07e7",
    rotate: "MapChanges_rotate_194c07e7",
    "reverse-rotate": "MapChanges_reverse-rotate_194c07e7",
    glowAppearance: "MapChanges_glowAppearance_194c07e7",
    highlightAppearance: "MapChanges_highlightAppearance_194c07e7",
    blink: "MapChanges_blink_194c07e7",
    slideUpIn: "MapChanges_slideUpIn_194c07e7",
  };
function we() {
  return (0, H.jsxs)("div", {
    className: ue.base,
    children: [
      (0, H.jsxs)("div", {
        className: l(fe, ue.header),
        children: [
          (0, H.jsx)("div", {
            className: de,
            children: R.strings.comp7_ext.whatsNewView.mapChanges.heading(),
          }),
          (0, H.jsx)(E, { type: "seasonUpdate" }),
        ],
      }),
      (0, H.jsx)("div", {
        className: xe,
        children: me.map(({ name: e, tag: a, stamp: s }) =>
          (0, H.jsx)(
            "div",
            { className: be, children: (0, H.jsx)(ge, { name: e, tag: a, stamp: s }) },
            e,
          ),
        ),
      }),
    ],
  });
}
var Ne = "Vehicle_b4f7ade7",
  ve = "Vehicle_gradient_66189772",
  je = "Vehicle_details_1190e9b6",
  Me = "Vehicle_vehicleName_3c00f9a6",
  Ie = M(function ({ index: e }) {
    const { model: a } = W(),
      { mediaSize: s } = c(),
      {
        name: t,
        tier: i,
        type: _,
        isPremium: r,
        vehicleCD: d,
        roleKey: o,
      } = a.computes.rentalVehicle(e),
      l = `url(${R.images.comp7.gui.maps.icons.whatsNewView.rental_vehicles.$num(d)})`;
    return (0, H.jsxs)("div", {
      className: Ne,
      style: { backgroundImage: l },
      children: [
        (0, H.jsx)("div", { className: ve }),
        (0, H.jsx)("div", {
          className: je,
          children: (0, H.jsx)(S, {
            name: t,
            tier: i,
            type: _,
            isPremium: r,
            tooltipArgs: { vehicleCD: d, tooltipId: "shopVehicle" },
            vehicleCD: d,
            role: o,
            size: s >= n.Large ? U.x48 : U.x24,
            className: Me,
          }),
        }),
      ],
    });
  }),
  Ve = "RentalVehicles_header_4faf333a",
  Ce = M(function () {
    const { model: e } = W();
    return (0, H.jsxs)("div", {
      children: [
        (0, H.jsxs)("div", {
          className: l(fe, Ve),
          children: [
            (0, H.jsx)("div", {
              className: de,
              children: R.strings.comp7_ext.whatsNewView.rentalVehicles.heading(),
            }),
            (0, H.jsx)(E, { type: "seasonUpdate" }),
          ],
        }),
        (0, H.jsx)("div", {
          className: xe,
          children: w(e.rentalVehicles.get().length, (e) =>
            (0, H.jsx)("div", { className: be, children: (0, H.jsx)(Ie, { index: e }) }, e),
          ),
        }),
      ],
    });
  }),
  Te = "SeasonalUpdate_250e2e65",
  ye = "SeasonalUpdate_image_1bf5b78",
  ke = "SeasonalUpdate_container_cc8124a9",
  Re = "SeasonalUpdate_title_250e2e65",
  Ae = "SeasonalUpdate_description_77846fe8",
  Ue = "SeasonalUpdate_tag_fe951f3d";
function Se({ title: e, description: s, classNames: n, tagType: t = "seasonUpdate" }) {
  return (0, H.jsxs)("div", {
    className: l(Te, n?.base),
    children: [
      (0, H.jsx)("div", { className: l(ye, n?.image) }),
      (0, H.jsxs)("div", {
        className: l(ke, n?.container),
        children: [
          (0, H.jsx)(a, {
            text: e,
            params: { tag: (0, H.jsx)(E, { type: t, className: Ue }) },
            className: l(de, Re, n?.title),
          }),
          (0, H.jsx)(a, { text: s, className: l(le, Ae, n?.description) }),
          (0, H.jsx)("div", { className: l(Ae, n?.description) }),
        ],
      }),
    ],
  });
}
var Be = {
    base: "Main_c6b88ada",
    areaBaseWrapper: "Main_areaBaseWrapper_afa6e4d5",
    videoContainer: "Main_videoContainer_742b9b37",
    content: "Main_content_89d4e584",
    content__first: "Main_content__first_dbd58c45",
    content__second: "Main_content__second_7dca6a3b",
    content__third: "Main_content__third_2588e0ff",
    scrollBar: "Main_scrollBar_1f24d8d6",
    button: "Main_button_9e2e2dc3",
    slideUpIn: "Main_slideUpIn_84c5dae7",
    container: "Main_container_6171ab21",
    container__custom: "Main_container__custom_41c25278",
    container__updates: "Main_container__updates_b5be00ed",
    container__1: "Main_container__1_f604bb7f",
    container__2: "Main_container__2_3037bf3a",
    container__3: "Main_container__3_364d1171",
    container__4: "Main_container__4_2d897c3d",
    container__5: "Main_container__5_f30d5c83",
    container__6: "Main_container__6_d560cd2f",
    container__7: "Main_container__7_cbb333ac",
    newLTRolesImage: "Main_newLTRolesImage_e6b4aa81",
    balanceChangesImage: "Main_balanceChangesImage_ac0c24a0",
    drawConditionsImage: "Main_drawConditionsImage_dfa009e8",
    noSuperPlatoonsImage: "Main_noSuperPlatoonsImage_526967b1",
    fadeIn: "Main_fadeIn_84c5dae7",
    fadeInThreeQuarters: "Main_fadeInThreeQuarters_84c5dae7",
    fadeInHalf: "Main_fadeInHalf_84c5dae7",
    fadeOut: "Main_fadeOut_84c5dae7",
    fadeInWithScale: "Main_fadeInWithScale_84c5dae7",
    slideUp: "Main_slideUp_84c5dae7",
    scale: "Main_scale_84c5dae7",
    raysAppearance: "Main_raysAppearance_84c5dae7",
    rotate: "Main_rotate_84c5dae7",
    "reverse-rotate": "Main_reverse-rotate_84c5dae7",
    glowAppearance: "Main_glowAppearance_84c5dae7",
    highlightAppearance: "Main_highlightAppearance_84c5dae7",
    blink: "Main_blink_84c5dae7",
  },
  $e = { base: Be.scrollBar },
  We = [
    { value: (0, H.jsx)(pe, {}) },
    { value: (0, H.jsx)(we, {}) },
    {
      value: (0, H.jsx)(Se, {
        title: R.strings.comp7_ext.whatsNewView.newLTRoles.heading(),
        description: R.strings.comp7_ext.whatsNewView.newLTRoles.description(),
        classNames: { image: Be.newLTRolesImage },
        tagType: "new",
      }),
    },
    { value: (0, H.jsx)(Ce, {}) },
    {
      value: (0, H.jsx)(Se, {
        title: R.strings.comp7_ext.whatsNewView.seasonalBalanceChanges.heading(),
        description: R.strings.comp7_ext.whatsNewView.seasonalBalanceChanges.description(),
        classNames: { image: Be.balanceChangesImage },
        tagType: "seasonUpdate",
      }),
    },
    {
      value: (0, H.jsx)(Se, {
        title: R.strings.comp7_ext.whatsNewView.drawConditions.heading(),
        description: R.strings.comp7_ext.whatsNewView.drawConditions.description(),
        classNames: { image: Be.drawConditionsImage },
        tagType: "experimental",
      }),
    },
    {
      value: (0, H.jsx)(Se, {
        title: R.strings.comp7_ext.whatsNewView.noSuperPlatoons.heading(),
        description: R.strings.comp7_ext.whatsNewView.noSuperPlatoons.description(),
        classNames: { image: Be.noSuperPlatoonsImage },
        tagType: "experimental",
      }),
    },
  ],
  ze = M(function () {
    const { controls: e } = W(),
      { model: a } = V(),
      { mediaSize: s } = c(),
      n = a.season.name.get();
    return (0, H.jsx)(p, {
      children: (0, H.jsxs)(i, {
        className: Be.base,
        barClassNames: $e,
        scrollClassName: Be.areaBaseWrapper,
        children: [
          n === T.Third && (0, H.jsx)(G, { className: Be.videoContainer }),
          (0, H.jsxs)("div", {
            className: l(Be.content, Be[`content__${n}`]),
            children: [
              We.map((e, a) =>
                (0, H.jsx)(
                  "div",
                  { className: l(Be.container, Be[`container__${a + 1}`]), children: e.value },
                  a,
                ),
              ),
              (0, H.jsx)(N, {
                theme: N.themes.primary,
                size: k(s),
                className: Be.button,
                onClick: e.close,
                children: R.strings.comp7_ext.whatsNewView.button.ok(),
              }),
            ],
          }),
        ],
      }),
    });
  }),
  He = "App_f9ac9f39",
  Oe = "App_container_9abce13f",
  Le = "App_waiting_93ca532a",
  Pe = M(() => {
    const { controls: e } = W(),
      { model: a } = V(),
      s = a.season.name.get(),
      n = h(y),
      i = _(
        ((e) => [
          R.images.comp7.gui.maps.icons.whatsNewView.backdrop(),
          String(R.images.comp7.gui.maps.icons.whatsNewView.$dyn(`bg_${e}`)),
        ])(s),
      );
    return (0, H.jsx)("div", {
      className: He,
      children:
        "success" === i
          ? (0, H.jsxs)(t.div, {
              className: Oe,
              style: n,
              children: [(0, H.jsx)(ze, {}), (0, H.jsx)(B, { onClick: e.close })],
            })
          : (0, H.jsx)(O, { onClose: e.close, className: Le }),
    });
  });
x(
  (0, H.jsx)(o, {
    children: (0, H.jsx)($, {
      children: (0, H.jsx)(C, {
        options: { context: "model.scheduleInfo" },
        children: (0, H.jsx)(Pe, {}),
      }),
    }),
  }),
);
