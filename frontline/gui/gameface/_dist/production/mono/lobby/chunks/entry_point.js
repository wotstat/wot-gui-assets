import { r as e } from "./rolldown-runtime.js";
import {
  B as t,
  Er as o,
  Ga as s,
  Si as n,
  U as r,
  W as a,
  _o as i,
  fo as c,
  go as l,
  po as d,
  sa as u,
  uo as m,
  ur as p,
  vo as f,
  wi as g,
  wn as b,
  xi as x,
  yo as h,
} from "./lib.js";
import { n as y, s as v, t as _ } from "./vendor.js";
var N = e(c()),
  w = (function (e) {
    return ((e.Common = "common"), (e.Rare = "rare"), (e.Epic = "epic"), e);
  })({});
var I = class extends d {
    root;
    prefix;
    constructor(e, t) {
      (super(), (this.root = e), (this.prefix = t));
    }
    readOr(e, t, o = "silent") {
      const s = f(this.prefix, e),
        n = (function (e, t) {
          const o = t.split(".");
          if (window.R && window.R.sounds) {
            const t = o[o.length - 1];
            if (!t) return;
            const s = o.slice(0, -1).reduce((e, t) => {
              if ("object" == typeof e?.[t]) return e[t];
            }, e);
            if (!s) return;
            return "function" == typeof s[t] ? s[t]() : void 0;
          }
          throw new Error("R class with images field is not defined");
        })(this.root, s);
      return void 0 === n ? ("silent" !== o && i(`Resource not found: ${s}`, o), t()) : n;
    }
    readOrEmpty(e, t = "warn") {
      return this.readOr(e, () => "", t);
    }
  },
  E = "lootbox_images",
  O = "lootbox_sounds";
(h.register(E, _(() => new l(window.R.images)).singleton()),
  h.register(O, _(() => new I(window.R.sounds)).singleton()));
var j = h.resolve(E),
  $ = h.resolve("videos"),
  C = h.resolve(O),
  P = h.resolve("strings"),
  M = (e, t) => {
    switch (e) {
      case R.images:
        return j.readOrEmpty(t, "silent");
      case R.videos:
        return $.readOrEmpty(t, "silent");
      case R.sounds:
        return C.readOrEmpty(t, "silent");
      case R.strings:
        return P.readOrEmpty(t, "silent");
      default:
        return "";
    }
  },
  T = (function (e) {
    return (
      (e.EntryPoint = "ENTRY_POINT"),
      (e.InfoPage = "INFO_PAGE"),
      (e.Rewards = "REWARDS"),
      (e.HomeView = "HOME_VIEW"),
      e
    );
  })({}),
  k = (function (e) {
    return (
      (e.Videos = "videos"),
      (e.Images = "images"),
      (e.Texts = "texts"),
      (e.Sounds = "sounds"),
      (e.DynamicVideos = "dynamicVideos"),
      (e.DynamicImages = "dynamicImages"),
      (e.DynamicTexts = "dynamicTexts"),
      e
    );
  })({}),
  B =
    (w.Rare,
    w.Epic,
    {
      ENTRY_POINT: {
        icon: { emptyIconBrightness: 0.4, boxesIconBrightness: 0.4 },
        shine: { opacity: { initial: 1, hover: 1 } },
      },
      HOME_VIEW: {
        hasIdle: !0,
        vignette: {
          isEnabled: !0,
          opacity: 0.4,
          backgroundImage:
            "linear-gradient(0deg, #000 0%, transparent 20%, transparent 80%, #000 100%), linear-gradient(90deg, rgba(0, 0, 0, 0.5) 0%, transparent 30%, transparent 100%)",
        },
        hoverZone: {
          width: "38%",
          height: "39%",
          horizontalOffset: "30.8%",
          verticalOffset: "39%",
        },
        backgroundColor: "#111",
      },
      COMMON: { guaranteed: { accent: 5, visibleAt: 10 } },
    }),
  A = {
    DEFAULT_CONFIG: B,
    anniversaryCN: {
      ENTRY_POINT: { icon: { emptyIconBrightness: 0.2 } },
      HOME_VIEW: { hasIdle: !1 },
      COMMON: { guaranteed: { visibleAt: 5 } },
    },
    newYearPremium: {
      ENTRY_POINT: {
        icon: { emptyIconBrightness: 0.3, boxesIconBrightness: 0.3 },
        shine: { opacity: { initial: 0.4, hover: 0.8 } },
      },
      HOME_VIEW: { vignette: { isEnabled: !0, opacity: 0.8 } },
      COMMON: { guaranteed: { accent: 5, visibleAt: 0 } },
    },
  },
  G = (e, t) => {
    const o = (e, t) => {
      const s = { ...e };
      for (const n in s)
        t &&
          n in t &&
          ("object" == typeof s[n] ? (s[n] = o(s[n], t[n] ?? s[n])) : (s[n] = t[n] ?? s[n]));
      return s;
    };
    return o(e, t);
  };
function L(e, o) {
  const s = A[t(e)],
    n = s?.COMMON ? G(B.COMMON, s.COMMON) : B.COMMON;
  if (!o) return n;
  const r = s ? G(B[o], s[o]) : B[o],
    a = Object.keys(r).filter((e) => e in n);
  if (a.length > 0)
    throw new Error(
      `[getConfig] Name conflict in "${e}.${String(o)}": keys [${a.join(", ")}] exist in both componentConfig and commonConfig.`,
    );
  return { ...r, ...n };
}
var S = (e, t) => {
    let o = e;
    const s = t.split(".");
    for (const n of s) {
      if (!o) break;
      const e = o.$dyn(n);
      (e && "object" != typeof e) || (o = e);
    }
    return o;
  },
  V = ({ type: e, filePath: t, eventName: o }, s = !1) => {
    const {
      parent: n,
      path: r,
      defaultPath: a,
    } = ((e, t, o) => {
      const s = "gui.maps.icons.lootBoxSystem.customizable",
        n = "lootbox.customizable";
      switch (e) {
        case k.Images:
        case k.DynamicImages:
          return { parent: R.images, path: `${s}.${o}.${t}`, defaultPath: `${s}.default.${t}` };
        case k.Videos:
        case k.DynamicVideos:
          return { parent: R.videos, path: `${n}.${o}.${t}`, defaultPath: `${n}.default.${t}` };
        case k.Texts:
        case k.DynamicTexts:
          return {
            parent: R.strings,
            path: `lootbox_${o}.${t}`,
            defaultPath: `lootbox_system.${t}`,
          };
        case k.Sounds:
          return { parent: R.sounds, path: `${t}_${o}`, defaultPath: `${t}` };
        default:
          return (
            console.error(`Unreachable code: unknown ResourceType ${e}`),
            { parent: "", path: "", defaultPath: "" }
          );
      }
    })(e, t, o);
    return n
      ? { eventResource: s ? S(n, r) : M(n, r), defaultResource: s ? S(n, a) : M(n, a) }
      : null;
  },
  D = ({ type: e, filePath: t, eventName: o }) => {
    const s = V({ type: e, filePath: t, eventName: o });
    if (!s || (!s.eventResource && !s.defaultResource))
      return (console.info(`Unreachable code: unknown resource (${e} ${o} ${t})`), "");
    const { eventResource: n, defaultResource: r } = s;
    return n || r;
  },
  z = (e, t) =>
    Object.keys(e).reduce((o, s) => {
      const n = e[s];
      return n
        ? ((o[s] = ((e, t, o) =>
            Object.keys(e).reduce((s, n) => {
              const r = e[n];
              return (void 0 !== r && (s[n] = D({ type: t, filePath: r, eventName: o })), s);
            }, {}))(n, s, t)),
          o)
        : o;
    }, {}),
  H = {
    images: {
      iconEmpty: "entry_point.lootboxEmpty",
      iconGold: "entry_point.lootboxGold",
      shine: "entry_point.glow",
    },
    videos: { glow: "entryPoint.glow" },
    texts: {
      boxes: "entryPoint.boxes",
      maxBoxesCount: "entryPoint.maxBoxesCount",
      boxesCount: "entryPoint.count",
    },
    sounds: { entryHover: "gui_lb_icon_hover" },
  },
  W = (function (e) {
    return ((e.Boxes = "boxes"), (e.Empty = "empty"), e);
  })({}),
  [Y, U] = p()(
    ({ observableModel: e }) => {
      const t = e.object().get().eventName,
        o = { root: e.object(), style: u.box(L(t, T.EntryPoint)), resources: u.box(z(H, t)) },
        s = y(() => {
          const { boxesCount: e } = o.root.get();
          return e ? "boxes" : "empty";
        });
      return { ...o, computes: { getState: s } };
    },
    ({ externalModel: e }) => ({ showLanding: e.createCallbackNoArgs("onEntryClick") }),
  ),
  F = (e) => !!e && !e.includes("customizable/default"),
  Z = (e, t) => {
    return ((o = e), F((s = t)) ? s : F(o) ? o : s || o);
    var o, s;
  },
  q = "video",
  J = (w.Common, w.Common, w.Rare, w.Rare, "Glow_2571a3a9"),
  K = "Glow_base__hover_bba0fce1",
  Q = "Glow_video_2d774833",
  X = "Glow_img_90334d0",
  ee = n(),
  te = v(function ({ hover: e = !1, className: t }) {
    const { model: o } = U(),
      { images: s, videos: n } = o.resources.get(),
      a = o.style.get(),
      i = ((e, t) => {
        const o = Z(e, t);
        return { src: o, type: o.split(":")[0] };
      })(s.shine, n.glow);
    return (0, ee.jsx)("div", {
      className: m(J, e && K, t),
      style: {
        "--opacity-initial": a.shine.opacity.initial,
        "--opacity-hover": a.shine.opacity.hover,
      },
      children:
        i.type === q
          ? (0, ee.jsx)(r, { loop: !0, autoplay: !0, className: Q, src: i.src })
          : (0, ee.jsx)("div", { className: X, style: { backgroundImage: `url(${i.src})` } }),
    });
  }),
  oe = "Icon_4b931f4c";
function se({ image: e, brightness: t, disabled: o, className: s, ...n }) {
  return (0, ee.jsx)("div", {
    ...n,
    className: m(oe, s),
    style: {
      backgroundImage: `url(${e})`,
      filter: o ? "brightness(.8) saturate(.5)" : `brightness(${t})`,
    },
  });
}
var ne = "Counter_e7ec423c";
function re({ count: e, text: t, maxText: o, className: s }) {
  return (0, ee.jsx)("div", {
    className: m(ne, s),
    children: e < 1e3 ? (0, ee.jsx)(b, { text: t, params: { count: e }, upgradeLegacy: !0 }) : o,
  });
}
var ae = {
    "media-wrapper": "Info_media-wrapper_3f9bb731",
    root: "Info_root_3f9bb731",
    base: "Info_7c1194ee",
    additional: "Info_additional_da3079c4",
    additional__center: "Info_additional__center_5fc14bcf",
    counter: "Info_counter_fab656f1",
    text: "Info_text_2141a424",
    timerLabel: "Info_timerLabel_7982abd0",
  },
  ie = v(function ({ className: e }) {
    const { model: t } = U(),
      { breakpoint: o } = x(),
      { texts: s } = t.resources.get(),
      { boxesCount: n, eventExpireTime: r } = t.root.get(),
      i = t.computes.getState(),
      c = o.weight > g.small.weight ? a.size.x32x32 : a.size.x24x24,
      l = 259200 >= r,
      d = l || i === W.Empty;
    return (0, ee.jsxs)("div", {
      className: m(ae.base, e),
      children: [
        d &&
          (0, ee.jsx)("div", {
            className: m(ae.additional, i !== W.Boxes && ae.additional__center),
            children: l
              ? (0, ee.jsx)(a, {
                  className: ae.timer,
                  classNames: { label: ae.timerLabel },
                  start: r,
                  size: c,
                })
              : (0, ee.jsx)("div", { className: ae.text, children: s.boxes }),
          }),
        i === W.Boxes &&
          (0, ee.jsx)(re, {
            className: ae.counter,
            maxText: s.maxBoxesCount,
            count: n,
            text: s.boxesCount,
          }),
      ],
    });
  }),
  ce = "App_bdab25ef",
  le = "App_content_3d13e94c",
  de = "App_base__disabled_0",
  ue = "App_glow_29445b0",
  me = "App_wrapper_4cc053c3",
  pe = "App_info_be3fbaea",
  fe = "App_icon_879c8615";
var ge = v(function () {
  const e = h.resolve("sounds"),
    t = h.resolve("aliases"),
    n = h.resolve("views"),
    r = o({
      resId: t.read((e) => e.hangar.shared.LootboxEntryPoint("resId")),
      contentId: n.read((e) => e.mono.lootbox.tooltips.entry_point("resId")),
    }),
    [a, i] = (0, N.useState)(!1),
    { model: c, controls: l } = U(),
    { isEnabled: d } = c.root.get(),
    u = c.computes.getState(),
    { images: p, videos: f, sounds: g } = c.resources.get(),
    b = c.style.get(),
    x = a ? 1 + b.icon[`${u}IconBrightness`] : 1,
    y = u === W.Empty ? p.iconEmpty : p.iconGold;
  return (0, ee.jsx)("div", {
    className: m(ce, !d && de),
    children: (0, ee.jsx)("div", {
      className: le,
      ...r,
      children: (0, ee.jsxs)("div", {
        className: me,
        onClick: function () {
          (e.play("yes1"), l.showLanding());
        },
        onMouseEnter: function () {
          (s.sound(g.entryHover), i(!0));
        },
        onMouseLeave: () => i(!1),
        children: [
          (0, ee.jsx)(ie, { className: pe }),
          u === W.Boxes && d && (0, ee.jsx)(te, { className: ue, hover: a }),
          (0, ee.jsx)(se, { disabled: !d, image: y, brightness: x, className: fe }),
        ],
      }),
    }),
  });
});
function be() {
  const e = h.resolve("aliases").read((e) => e.hangar.shared.LootboxEntryPoint("resId"));
  return (0, ee.jsx)(Y, {
    options: (0, N.useMemo)(() => ({ rootId: e }), [e]),
    children: (0, ee.jsx)(ge, {}),
  });
}
export { be as default };
