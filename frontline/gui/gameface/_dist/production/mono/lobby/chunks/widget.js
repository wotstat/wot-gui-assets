import { r as e } from "./rolldown-runtime.js";
import {
  G as s,
  Hi as t,
  Si as a,
  Ui as o,
  _r as n,
  ao as r,
  dr as i,
  fo as c,
  i as l,
  io as d,
  ki as m,
  n as p,
  no as _,
  oo as u,
  r as g,
  ro as h,
  so as f,
  t as x,
  uo as b,
  ur as T,
  yo as v,
} from "./lib.js";
import { s as N } from "./vendor.js";
var w = (function (e) {
  return ((e.News = "news"), (e.ShopPromo = "shopPromo"), (e.None = "none"), e);
})({});
(w.News, w.News, w.ShopPromo, Math.floor(Date.now() / 1e3));
var y = {
    getter: i({
      type: w.News,
      description:
        "Watch very interesting video, with very long, very very interesting and meaningful description!",
      isVideo: !0,
      image: "https://pie-webbrg-cdn-stg.wgcdn.co/dcont/fb/image/whats_new_475x230_2.png",
    }),
    controls: () => o(t("onClick", "onClose")),
  },
  [j, C] = T("TeaserModel")(
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
    "media-wrapper": "Teaser_media-wrapper_3d4fdb7e",
    root: "Teaser_root_3d4fdb7e",
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
  },
  M = a(),
  B = "Teaser:Base",
  E = N(function ({ className: e, classNames: t }) {
    const { model: a, controls: o } = C(),
      i = a.type.get() || w.News,
      c = a.postCounter.get(),
      T = a.text.get(),
      N = a.description.get(),
      y = a.finishTime.get(),
      j = a.isVideo.get(),
      E = a.image.get(),
      P = n(),
      S = v.resolve("strings");
    const $ = (0, k.useCallback)(
        (e) => {
          (e.stopPropagation(), o.onClose());
        },
        [o],
      ),
      [A, L] = (0, k.useState)(null);
    (0, k.useLayoutEffect)(() => {
      let e;
      const s = _(f(y || 0), u());
      if (!y || s <= 0) return void L(null);
      const t = Math.floor(d.seconds(s)),
        a = r(f(y), h(1)) ? g.Extended : g.Long;
      if ((L({ duration: t, style: a }), a === g.Extended)) {
        const s = _(f(t + 1), h(1));
        e = setTimeout(() => L((e) => ({ ...e, style: g.Long })), Math.min(s, m));
      }
      return () => {
        e && (clearTimeout(e), (e = void 0));
      };
    }, [y]);
    const [V, I] = (0, k.useState)(null),
      [z, D] = (0, k.useState)(!1);
    return (
      (0, k.useEffect)(() => {
        const e = new Image();
        return (
          (e.src = E),
          (e.onload = () => {
            (I({ path: E, height: e.height, width: e.width }), D(!0));
          }),
          (e.onerror = () => {
            D(!0);
          }),
          () => {
            ((e.src = ""), I(null));
          }
        );
      }, [E]),
      z
        ? (0, M.jsxs)("div", {
            className: b(W.base, W[`base__${i}Type`], j && W.base__video, e),
            onClick: function (e) {
              (P.play("click", { target: B, original: e }), o.onClick());
            },
            onMouseEnter: function (e) {
              P.play("mouse-enter", { target: B, original: e });
            },
            children: [
              (0, M.jsx)("div", {
                className: b(W.contentWrapper, t?.contentWrapper),
                children: (0, M.jsx)("div", {
                  className: b(W.imageWrapper, t?.imageWrapper),
                  children:
                    V &&
                    (0, M.jsx)("div", {
                      className: b(W.image, t?.image),
                      style: {
                        backgroundImage: `url(${V.path})`,
                        height: `${V.height}rem`,
                        width: `${V.width}rem`,
                      },
                    }),
                }),
              }),
              (0, M.jsx)("div", { className: b(W.vignette, t?.vignette) }),
              (0, M.jsxs)("div", {
                className: b(W.contentWrapper, t?.contentWrapper),
                children: [
                  (0, M.jsxs)("div", {
                    className: b(W.title, t?.title),
                    children: [
                      S.readOrEmpty("menu.promo.teaser.title"),
                      Boolean(c) &&
                        c > 0 &&
                        (0, M.jsx)(l, {
                          className: b(W.counter, t?.counter),
                          value: c,
                          size: "small",
                        }),
                    ],
                  }),
                  (0, M.jsx)(x, {
                    type: "close",
                    side: "right",
                    classNames: { base: b(W.closeButton, t?.closeButton) },
                    onClick: $,
                    caption: "",
                  }),
                  T && (0, M.jsx)("div", { className: b(W.text, t?.text), children: T }),
                  (N || A) &&
                    (0, M.jsxs)("div", {
                      className: W.bottomContent,
                      children: [
                        N &&
                          (0, M.jsx)("div", {
                            className: b(W.description, t?.description),
                            children: (0, M.jsx)(s, {
                              classMix: W.extendedText,
                              text: N,
                              isTruncationAvailable: !0,
                            }),
                          }),
                        A && (0, M.jsx)(p, { className: b(W.countdown, t?.countdown), ...A }),
                      ],
                    }),
                ],
              }),
            ],
          })
        : null
    );
  });
function P({ className: e, classNames: s, ...t }) {
  return (0, M.jsx)(j, {
    ...t,
    mode: "real",
    mocks: y,
    children: (0, M.jsx)(E, { className: e, classNames: s }),
  });
}
export { P as default };
