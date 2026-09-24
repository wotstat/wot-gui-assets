import { r as e } from "./rolldown-runtime.js";
import {
  Ds as s,
  Ga as a,
  Pa as t,
  Ss as r,
  Ti as n,
  Y as o,
  _i as i,
  _s as d,
  co as l,
  gs as c,
  hs as _,
  ms as p,
  n as m,
  oo as f,
  q as g,
  t as u,
  vi as h,
  vs as b,
  ws as T,
  xt as v,
  ys as x,
} from "./lib.js";
import { a as w } from "./vendor.js";
var N = (function (e) {
  return ((e.News = "news"), (e.ShopPromo = "shopPromo"), (e.None = "none"), e);
})({});
(N.News, N.News, N.ShopPromo, Math.floor(Date.now() / 1e3));
var y = {
    getter: h({
      type: N.News,
      description:
        "Watch very interesting video, with very long, very very interesting and meaningful description!",
      isVideo: !0,
      image: "https://pie-webbrg-cdn-stg.wgcdn.co/dcont/fb/image/whats_new_475x230_2.png",
    }),
    controls: () => l(f("onClick", "onClose")),
  },
  [j, C] = i("TeaserModel")(
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
  k = e(T(), 1),
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
  I = e(t(), 1),
  A = "Teaser:Base",
  M = w(function ({ className: e, classNames: t }) {
    const { model: i, controls: l } = C(),
      f = i.type.get() || N.News,
      h = i.postCounter.get(),
      T = i.text.get(),
      w = i.description.get(),
      y = i.finishTime.get(),
      j = i.isVideo.get(),
      M = i.image.get(),
      S = n(),
      P = s.resolve("strings");
    const B = (0, k.useCallback)(
        (e) => {
          (e.stopPropagation(), l.onClose());
        },
        [l],
      ),
      [E, U] = (0, k.useState)(null);
    (0, k.useLayoutEffect)(() => {
      let e;
      const s = p(x(y || 0), b());
      if (!y || s <= 0) return void U(null);
      const t = Math.floor(c.seconds(s)),
        r = d(x(y), _(1)) ? o.Extended : o.Long;
      if ((U({ duration: t, style: r }), r === o.Extended)) {
        const s = p(x(t + 1), _(1));
        e = setTimeout(() => U((e) => ({ ...e, style: o.Long })), Math.min(s, a));
      }
      return () => {
        e && (clearTimeout(e), (e = void 0));
      };
    }, [y]);
    const [$, L] = (0, k.useState)(null),
      [O, V] = (0, k.useState)(!1);
    return (
      (0, k.useEffect)(() => {
        const e = new Image();
        return (
          (e.src = M),
          (e.onload = () => {
            (L({ path: M, height: e.height, width: e.width }), V(!0));
          }),
          (e.onerror = () => {
            V(!0);
          }),
          () => {
            ((e.src = ""), L(null));
          }
        );
      }, [M]),
      O
        ? (0, I.jsxs)("div", {
            className: r(W.base, W[`base__${f}Type`], j && W.base__video, e),
            onClick: function (e) {
              (S.play("click", { target: A, original: e }), l.onClick());
            },
            onMouseEnter: function (e) {
              S.play("mouse-enter", { target: A, original: e });
            },
            children: [
              (0, I.jsx)("div", {
                className: r(W.contentWrapper, t?.contentWrapper),
                children: (0, I.jsx)("div", {
                  className: r(W.imageWrapper, t?.imageWrapper),
                  children:
                    $ &&
                    (0, I.jsx)("div", {
                      className: r(W.image, t?.image),
                      style: {
                        backgroundImage: `url(${$.path})`,
                        height: `${$.height}rem`,
                        width: `${$.width}rem`,
                      },
                    }),
                }),
              }),
              (0, I.jsx)("div", { className: r(W.vignette, t?.vignette) }),
              (0, I.jsxs)("div", {
                className: r(W.contentWrapper, t?.contentWrapper),
                children: [
                  (0, I.jsxs)("div", {
                    className: r(W.title, t?.title),
                    children: [
                      P.readOrEmpty("menu.promo.teaser.title"),
                      Boolean(h) &&
                        h > 0 &&
                        (0, I.jsx)(m, {
                          className: r(W.counter, t?.counter),
                          value: h,
                          size: "small",
                        }),
                    ],
                  }),
                  (0, I.jsx)(u, {
                    type: "close",
                    side: "right",
                    classNames: { base: r(W.closeButton, t?.closeButton) },
                    onClick: B,
                    caption: "",
                  }),
                  T && (0, I.jsx)("div", { className: r(W.text, t?.text), children: T }),
                  (w || E) &&
                    (0, I.jsxs)("div", {
                      className: W.bottomContent,
                      children: [
                        w &&
                          (0, I.jsx)("div", {
                            className: r(W.description, t?.description),
                            children: (0, I.jsx)(v, {
                              classMix: W.extendedText,
                              text: w,
                              isTruncationAvailable: !0,
                            }),
                          }),
                        E && (0, I.jsx)(g, { className: r(W.countdown, t?.countdown), ...E }),
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
