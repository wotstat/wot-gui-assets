import { r as e } from "./rolldown-runtime.js";
import {
  Ds as s,
  Er as a,
  Ga as t,
  Or as r,
  Pa as n,
  Ss as o,
  Ti as i,
  _i as d,
  _s as l,
  co as c,
  gs as _,
  hs as p,
  ms as m,
  n as f,
  oo as g,
  pt as u,
  t as h,
  vi as b,
  vs as T,
  ws as v,
  ys as x,
} from "./lib.js";
import { a as w } from "./vendor.js";
var N = (function (e) {
  return ((e.News = "news"), (e.ShopPromo = "shopPromo"), (e.None = "none"), e);
})({});
(N.News, N.News, N.ShopPromo, Math.floor(Date.now() / 1e3));
var y = {
    getter: b({
      type: N.News,
      description:
        "Watch very interesting video, with very long, very very interesting and meaningful description!",
      isVideo: !0,
      image: "https://pie-webbrg-cdn-stg.wgcdn.co/dcont/fb/image/whats_new_475x230_2.png",
    }),
    controls: () => c(g("onClick", "onClose")),
  },
  [j, C] = d("TeaserModel")(
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
  k = e(v(), 1),
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
  I = e(n(), 1),
  A = "Teaser:Base",
  M = w(function ({ className: e, classNames: n }) {
    const { model: d, controls: c } = C(),
      g = d.type.get() || N.News,
      b = d.postCounter.get(),
      v = d.text.get(),
      w = d.description.get(),
      y = d.finishTime.get(),
      j = d.isVideo.get(),
      M = d.image.get(),
      S = i(),
      E = s.resolve("strings");
    const P = (0, k.useCallback)(
        (e) => {
          (e.stopPropagation(), c.onClose());
        },
        [c],
      ),
      [B, O] = (0, k.useState)(null);
    (0, k.useLayoutEffect)(() => {
      let e;
      const s = m(x(y || 0), T());
      if (!y || s <= 0) return void O(null);
      const a = Math.floor(_.seconds(s)),
        n = l(x(y), p(1)) ? r.Extended : r.Long;
      if ((O({ duration: a, style: n }), n === r.Extended)) {
        const s = m(x(a + 1), p(1));
        e = setTimeout(() => O((e) => ({ ...e, style: r.Long })), Math.min(s, t));
      }
      return () => {
        e && (clearTimeout(e), (e = void 0));
      };
    }, [y]);
    const [U, $] = (0, k.useState)(null),
      [L, V] = (0, k.useState)(!1);
    return (
      (0, k.useEffect)(() => {
        const e = new Image();
        return (
          (e.src = M),
          (e.onload = () => {
            ($({ path: M, height: e.height, width: e.width }), V(!0));
          }),
          (e.onerror = () => {
            V(!0);
          }),
          () => {
            ((e.src = ""), $(null));
          }
        );
      }, [M]),
      L
        ? (0, I.jsxs)("div", {
            className: o(W.base, W[`base__${g}Type`], j && W.base__video, e),
            onClick: function (e) {
              (S.play("click", { target: A, original: e }), c.onClick());
            },
            onMouseEnter: function (e) {
              S.play("mouse-enter", { target: A, original: e });
            },
            children: [
              (0, I.jsx)("div", {
                className: o(W.contentWrapper, n?.contentWrapper),
                children: (0, I.jsx)("div", {
                  className: o(W.imageWrapper, n?.imageWrapper),
                  children:
                    U &&
                    (0, I.jsx)("div", {
                      className: o(W.image, n?.image),
                      style: {
                        backgroundImage: `url(${U.path})`,
                        height: `${U.height}rem`,
                        width: `${U.width}rem`,
                      },
                    }),
                }),
              }),
              (0, I.jsx)("div", { className: o(W.vignette, n?.vignette) }),
              (0, I.jsxs)("div", {
                className: o(W.contentWrapper, n?.contentWrapper),
                children: [
                  (0, I.jsxs)("div", {
                    className: o(W.title, n?.title),
                    children: [
                      E.readOrEmpty("menu.promo.teaser.title"),
                      Boolean(b) &&
                        b > 0 &&
                        (0, I.jsx)(f, {
                          className: o(W.counter, n?.counter),
                          value: b,
                          size: "small",
                        }),
                    ],
                  }),
                  (0, I.jsx)(h, {
                    type: "close",
                    side: "right",
                    classNames: { base: o(W.closeButton, n?.closeButton) },
                    onClick: P,
                    caption: "",
                  }),
                  v && (0, I.jsx)("div", { className: o(W.text, n?.text), children: v }),
                  (w || B) &&
                    (0, I.jsxs)("div", {
                      className: W.bottomContent,
                      children: [
                        w &&
                          (0, I.jsx)("div", {
                            className: o(W.description, n?.description),
                            children: (0, I.jsx)(u, {
                              classMix: W.extendedText,
                              text: w,
                              isTruncationAvailable: !0,
                            }),
                          }),
                        B && (0, I.jsx)(a, { className: o(W.countdown, n?.countdown), ...B }),
                      ],
                    }),
                ],
              }),
            ],
          })
        : null
    );
  });
function S({ className: e, classNames: s, ...a }) {
  return (0, I.jsx)(j, {
    ...a,
    mode: "real",
    mocks: y,
    children: (0, I.jsx)(M, { className: e, classNames: s }),
  });
}
export { S as default };
