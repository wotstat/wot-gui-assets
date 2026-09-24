import { r as e } from "./rolldown-runtime.js";
import {
  Aa as a,
  E as s,
  Fo as t,
  Io as r,
  Mo as o,
  No as n,
  Oa as i,
  Po as d,
  Qr as l,
  Vo as c,
  Wo as _,
  X as p,
  Zr as m,
  ai as f,
  ha as g,
  jo as u,
  n as h,
  sa as b,
  t as T,
  w as x,
  zo as v,
} from "./lib.js";
import { a as N } from "./vendor.js";
var w = (function (e) {
  return ((e.News = "news"), (e.ShopPromo = "shopPromo"), (e.None = "none"), e);
})({});
(w.News, w.News, w.ShopPromo, Math.floor(Date.now() / 1e3));
var y = {
    getter: l({
      type: w.News,
      description:
        "Watch very interesting video, with very long, very very interesting and meaningful description!",
      isVideo: !0,
      image: "https://pie-webbrg-cdn-stg.wgcdn.co/dcont/fb/image/whats_new_475x230_2.png",
    }),
    controls: () => a(i("onClick", "onClose")),
  },
  [j, C] = m("TeaserModel")(
    ({ observableModel: e }) =>
      e.primitives([
        "type",
        "postCounter",
        "description",
        "text",
        "isVideo",
        "finishTime",
        "image",
      ]),
    ({ externalModel: e }) => ({
      onClick: e.createCallbackNoArgs("onClick"),
      onClose: e.createCallbackNoArgs("onClose"),
    }),
  ),
  k = e(c(), 1),
  W = {
    imageWrapper: "Teaser_imageWrapper_901f1116",
    vignette: "Teaser_vignette_32737740",
    base: "Teaser_a2a96284",
    base__video: "Teaser_base__video_3d4fdb7e",
    contentWrapper: "Teaser_contentWrapper_b44f0d64",
    image: "Teaser_image_41628c29",
    base__newsType: "Teaser_base__newsType_3d4fdb7e",
    base__shopPromoType: "Teaser_base__shopPromoType_3d4fdb7e",
    title: "Teaser_title_f8c387e3",
    counter: "Teaser_counter_6afc9955",
    closeButton: "Teaser_closeButton_c46a88df",
    text: "Teaser_text_8e0a588c",
    bottomContent: "Teaser_bottomContent_eb7878d6",
    description: "Teaser_description_f7e0ddfc",
    extendedText: "Teaser_extendedText_286b5b73",
    countdown: "Teaser_countdown_40e45fc1",
    fadeIn: "Teaser_fadeIn_3d4fdb7e",
    fadeInThreeQuarters: "Teaser_fadeInThreeQuarters_3d4fdb7e",
    fadeInHalf: "Teaser_fadeInHalf_3d4fdb7e",
    fadeOut: "Teaser_fadeOut_3d4fdb7e",
    fadeInWithScale: "Teaser_fadeInWithScale_3d4fdb7e",
    slideUp: "Teaser_slideUp_3d4fdb7e",
    scale: "Teaser_scale_3d4fdb7e",
    raysAppearance: "Teaser_raysAppearance_3d4fdb7e",
    rotate: "Teaser_rotate_3d4fdb7e",
    "reverse-rotate": "Teaser_reverse-rotate_3d4fdb7e",
    glowAppearance: "Teaser_glowAppearance_3d4fdb7e",
    highlightAppearance: "Teaser_highlightAppearance_3d4fdb7e",
    blink: "Teaser_blink_3d4fdb7e",
    slideUpIn: "Teaser_slideUpIn_3d4fdb7e",
  },
  I = e(b(), 1),
  A = "Teaser:Base",
  M = N(function ({ className: e, classNames: a }) {
    const { model: i, controls: l } = C(),
      c = i.type.get() || w.News,
      m = i.postCounter.get(),
      b = i.text.get(),
      N = i.description.get(),
      y = i.finishTime.get(),
      j = i.isVideo.get(),
      M = i.image.get(),
      E = f(),
      P = _.resolve("strings");
    const S = (0, k.useCallback)(
        (e) => {
          (e.stopPropagation(), l.onClose());
        },
        [l],
      ),
      [B, O] = (0, k.useState)(null);
    (0, k.useLayoutEffect)(() => {
      let e;
      const a = u(r(y || 0), t());
      if (!y || a <= 0) return void O(null);
      const i = Math.floor(n.seconds(a)),
        l = d(r(y), o(1)) ? s.Extended : s.Long;
      if ((O({ duration: i, style: l }), l === s.Extended)) {
        const a = u(r(i + 1), o(1));
        e = setTimeout(() => O((e) => ({ ...e, style: s.Long })), Math.min(a, g));
      }
      return () => {
        e && (clearTimeout(e), (e = void 0));
      };
    }, [y]);
    const [U, V] = (0, k.useState)(null),
      [$, L] = (0, k.useState)(!1);
    return (
      (0, k.useEffect)(() => {
        const e = new Image();
        return (
          (e.src = M),
          (e.onload = () => {
            (V({ path: M, height: e.height, width: e.width }), L(!0));
          }),
          (e.onerror = () => {
            L(!0);
          }),
          () => {
            ((e.src = ""), V(null));
          }
        );
      }, [M]),
      $
        ? (0, I.jsxs)("div", {
            className: v(W.base, W[`base__${c}Type`], j && W.base__video, e),
            onClick: function (e) {
              (E.play("click", { target: A, original: e }), l.onClick());
            },
            onMouseEnter: function (e) {
              E.play("mouse-enter", { target: A, original: e });
            },
            children: [
              (0, I.jsx)("div", {
                className: v(W.contentWrapper, a?.contentWrapper),
                children: (0, I.jsx)("div", {
                  className: v(W.imageWrapper, a?.imageWrapper),
                  children:
                    U &&
                    (0, I.jsx)("div", {
                      className: v(W.image, a?.image),
                      style: {
                        backgroundImage: `url(${U.path})`,
                        height: `${U.height}rem`,
                        width: `${U.width}rem`,
                      },
                    }),
                }),
              }),
              (0, I.jsx)("div", { className: v(W.vignette, a?.vignette) }),
              (0, I.jsxs)("div", {
                className: v(W.contentWrapper, a?.contentWrapper),
                children: [
                  (0, I.jsxs)("div", {
                    className: v(W.title, a?.title),
                    children: [
                      P.readOrEmpty("menu.promo.teaser.title"),
                      Boolean(m) &&
                        m > 0 &&
                        (0, I.jsx)(h, {
                          className: v(W.counter, a?.counter),
                          value: m,
                          size: "small",
                        }),
                    ],
                  }),
                  (0, I.jsx)(T, {
                    type: "close",
                    side: "right",
                    classNames: { base: v(W.closeButton, a?.closeButton) },
                    onClick: S,
                    caption: "",
                  }),
                  b && (0, I.jsx)("div", { className: v(W.text, a?.text), children: b }),
                  (N || B) &&
                    (0, I.jsxs)("div", {
                      className: W.bottomContent,
                      children: [
                        N &&
                          (0, I.jsx)("div", {
                            className: v(W.description, a?.description),
                            children: (0, I.jsx)(p, {
                              classMix: W.extendedText,
                              text: N,
                              isTruncationAvailable: !0,
                            }),
                          }),
                        B && (0, I.jsx)(x, { className: v(W.countdown, a?.countdown), ...B }),
                      ],
                    }),
                ],
              }),
            ],
          })
        : null
    );
  });
function E({ className: e, classNames: a, ...s }) {
  return (0, I.jsx)(j, {
    ...s,
    mode: "real",
    mocks: y,
    children: (0, I.jsx)(M, { className: e, classNames: a }),
  });
}
export { E as default };
