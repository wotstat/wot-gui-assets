const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f || (m.f = ["../chunks/lib.css", "../chunks/widget.css", "../chunks/entry_point.css"]),
) => i.map((i) => d[i]);
import { r as e } from "../chunks/rolldown-runtime.js";
import {
  $ as t,
  $n as a,
  $r as s,
  $t as n,
  A as r,
  Aa as i,
  Ai as o,
  An as l,
  Ar as c,
  At as d,
  Bi as u,
  Bn as m,
  Bt as p,
  Ca as _,
  Ci as h,
  Cn as g,
  Cr as f,
  Ct as v,
  Da as b,
  Di as x,
  Dn as y,
  Dr as C,
  Dt as j,
  Ea as w,
  Ei as N,
  En as I,
  Er as S,
  Et as k,
  F as P,
  Fa as E,
  Fi as M,
  Fn as L,
  Ft as A,
  G as T,
  Gn as D,
  Gt as B,
  H as O,
  Ha as V,
  Hn as H,
  Ht as $,
  I as z,
  Ia as F,
  In as W,
  Ir as q,
  It as Z,
  J as G,
  Ja as U,
  Jt as K,
  K as X,
  Ka as Y,
  Ki as J,
  Kn as Q,
  Kt as ee,
  L as te,
  La as ae,
  Ln as se,
  Lt as ne,
  M as re,
  Ma as ie,
  Mi as oe,
  Mn as le,
  Mr as ce,
  Mt as de,
  N as ue,
  Na as me,
  Ni as pe,
  Nn as _e,
  Nr as he,
  Nt as ge,
  O as fe,
  Oa as ve,
  Oi as be,
  On as xe,
  Or as ye,
  Ot as Ce,
  P as je,
  Pa as we,
  Pi as Ne,
  Pn as Ie,
  Pr as Se,
  Pt as ke,
  Q as Pe,
  Qa as Ee,
  Qn as Me,
  Qr as Le,
  Qt as Ae,
  Ri as Te,
  Rn as De,
  Rr as Be,
  Rt as Oe,
  Sa as Ve,
  Si as Re,
  Sn as He,
  Sr as $e,
  St as ze,
  Ta as Fe,
  Ti as We,
  Tn as qe,
  Tr as Ze,
  Tt as Ge,
  U as Ue,
  Ua as Ke,
  Ui as Xe,
  Un as Ye,
  Ut as Je,
  V as Qe,
  Va as et,
  Vi as tt,
  Vn as at,
  Vr as st,
  Vt as nt,
  W as rt,
  Wa as it,
  Wn as ot,
  Wr as lt,
  Wt as ct,
  X as dt,
  Xn as ut,
  Xr as mt,
  Xt as pt,
  Y as _t,
  Yn as ht,
  Yr as gt,
  Yt as ft,
  Z as vt,
  Za as bt,
  Zn as xt,
  Zr as yt,
  Zt as Ct,
  _a as jt,
  _i as wt,
  _n as Nt,
  _r as It,
  _t as St,
  an as kt,
  ar as Pt,
  at as Et,
  ba as Mt,
  bi as Lt,
  bn as At,
  br as Tt,
  bt as Dt,
  cn as Bt,
  co as Ot,
  cr as Vt,
  ct as Rt,
  da as Ht,
  dn as $t,
  do as zt,
  dt as Ft,
  ei as Wt,
  en as qt,
  eo as Zt,
  er as Gt,
  et as Ut,
  fn as Kt,
  fo as Xt,
  fr as Yt,
  ft as Jt,
  ga as Qt,
  gi as ea,
  gn as ta,
  gr as aa,
  gt as sa,
  ha as na,
  hn as ra,
  hr as ia,
  ht as oa,
  ii as la,
  in as ca,
  it as da,
  j as ua,
  ja as ma,
  ji as pa,
  jn as _a,
  jr as ha,
  jt as ga,
  k as fa,
  ka as va,
  ki as ba,
  kn as xa,
  kr as ya,
  kt as Ca,
  li as ja,
  ln as wa,
  lr as Na,
  lt as Ia,
  ma as Sa,
  mi as ka,
  mn as Pa,
  mo as Ea,
  mt as Ma,
  ni as La,
  nn as Aa,
  nt as Ta,
  oi as Da,
  on as Ba,
  oo as Oa,
  or as Va,
  ot as Ra,
  pa as Ha,
  pn as $a,
  pr as za,
  pt as Fa,
  q as Wa,
  qa,
  qi as Za,
  qn as Ga,
  qt as Ua,
  ri as Ka,
  rn as Xa,
  rt as Ya,
  sa as Ja,
  si as Qa,
  sn as es,
  so as ts,
  sr as as,
  st as ss,
  ti as ns,
  tn as rs,
  to as is,
  tt as os,
  un as ls,
  uo as cs,
  ur as ds,
  ut as us,
  va as ms,
  vi as ps,
  vn as _s,
  vr as hs,
  wa as gs,
  wi as fs,
  wn as vs,
  wr as bs,
  wt as xs,
  xa as ys,
  xi as Cs,
  xn as js,
  xt as ws,
  ya as Ns,
  yi as Is,
  yn as Ss,
  yo as ks,
  yr as Ps,
  yt as Es,
  z as Ms,
  za as Ls,
  zi as As,
  zn as Ts,
  zr as Ds,
  zt as Bs,
} from "../chunks/lib.js";
import "../chunks/_wg-global-styles.js";
import { a as Os, i as Vs, o as Rs, s as Hs } from "../chunks/vendor.js";
import { n as $s, t as zs } from "../chunks/event_banner_state.js";
import { n as Fs, t as Ws } from "../chunks/level_badge.js";
var [qs, Zs] = ds("HeroTankModelProvider")((e) => {
    const { observableModel: t } = e;
    return { ...t.primitives(["name", "type"]), heroTankMarker: t.object("heroTankMarker") };
  }, F),
  [Gs, Us] = ds("SpaceInteractionModel")(F, ({ externalModel: e }) => ({
    sceneWrapper: {
      onMoveSpace: e.createCallback((e) => e, "onMoveSpace"),
      onMouseOver3dScene: e.createCallback((e) => e, "onMouseOver3dScene"),
    },
  })),
  Ks = "role",
  Xs = "type",
  Ys = "tier",
  Js = "nations",
  Qs = {
    lightTank: "menu.carousel_tank_filter.lightTank",
    mediumTank: "menu.carousel_tank_filter.mediumTank",
    heavyTank: "menu.carousel_tank_filter.heavyTank",
    SPG: "menu.carousel_tank_filter.SPG",
    "AT-SPG": "menu.carousel_tank_filter.AT_SPG",
    tier: "tank_carousel_filter.popover.label.levels",
    assault: "menu.carousel_tank_filter.assault",
    sniper: "menu.carousel_tank_filter.sniper",
    support: "menu.carousel_tank_filter.support",
    universal: "menu.carousel_tank_filter.universal",
    break: "menu.carousel_tank_filter.break",
    scout: "menu.carousel_tank_filter.scout",
    germany: "menu.nations.germany",
    france: "menu.nations.france",
    china: "menu.nations.china",
    japan: "menu.nations.japan",
    uk: "menu.nations.uk",
    czech: "menu.nations.czech",
    usa: "menu.nations.usa",
    sweden: "menu.nations.sweden",
    poland: "menu.nations.poland",
    italy: "menu.nations.italy",
    ussr: "menu.nations.ussr",
    bonus: "tank_carousel_filter.tooltip.bonus.header",
    favorite: "tank_carousel_filter.tooltip.favorite.header",
    premium: "tank_carousel_filter.tooltip.premium.header",
    elite: "tank_carousel_filter.tooltip.elite.header",
    crystals: "tank_carousel_filter.tooltip.crystals.header",
    canInstallAttachments: "menu.carousel_tank_filter.canInstallAttachments",
    own3DStyle: "menu.carousel_tank_filter.own3DStyle",
    rented: "tank_carousel_filter.tooltip.rented.header",
    clanRented: "tank_carousel_filter.tooltip.clanRented.header",
    isCommonProgression: "tank_carousel_filter.tooltip.isCommonProgression.header",
  },
  en = {
    type: "vehicleTypes",
    role: "role",
    tier: "tier",
    nations: "nations",
    bonus: "bonus",
    favorite: "favorite",
    premium: "premium",
    elite: "elite",
    crystals: "crystals",
    canInstallAttachments: "customization.canInstallAttachments",
    own3DStyle: "customization.own3DStyle",
    rented: "rented",
    clanRented: "clanRented",
    isCommonProgression: "isCommonProgression",
  },
  tn = "isCommonProgression",
  an = [Ga.assault, Ga.universal, Ga.break, Ga.sniper, Ga.scout, Ga.support],
  sn = [
    "bonus",
    "favorite",
    "premium",
    "elite",
    "crystals",
    "canInstallAttachments",
    "own3DStyle",
    "rented",
  ],
  nn = [Gt.lightTank, Gt.mediumTank, Gt.heavyTank, Gt["AT-SPG"], Gt.SPG],
  rn = As(1, 12, E),
  on = "vehicle_types",
  ln = "nations",
  cn = "levels",
  dn = "specials",
  un = "battle_pass",
  mn = { heavy_tank: ot, medium_tank: Q, light_tank: D, at_spg: H };
function pn(e, t) {
  return (
    "isCommonProgression" === e && t.status !== m.UNSUITABLE_TO_QUEUE && t.bpProgress < t.maxBpScore
  );
}
function _n(e, t, a, s) {
  switch (t) {
    case "elite":
      return e.includes("premium") || (s && s.elite && !a.premium);
    case "premium":
      return a.premium || (e.includes("elite") && s && s.elite);
    case "bonus":
      return s && s.bonusMultiplier >= 2;
    case "favorite":
      return a.favorite;
    case "crystals":
      return a.crystalEarning;
    case "rented":
      return !0;
    case "canInstallAttachments":
      return a.canInstallAttachments;
    case "own3DStyle":
      return s && s.own3DStyle;
    case "event":
    case "funRandom":
      return a.isSuitableVehicle;
    default:
      return !1;
  }
}
var hn = {
  [cn]: (e, t) => !e.levels || e.levels.includes(`level_${t.level}`),
  [ln]: (e, t) => !e.nations || e.nations.includes(Pt(t.nationId)),
  [on]: (e, t) => !e.vehicle_types || e.vehicle_types.includes(t.type),
};
function gn(e, t, a) {
  let s = !1;
  const n = e.specials ?? [];
  for (const r of n)
    if ("rented" !== r) {
      if (!_n(n, r, t, a)) return !1;
    } else s = !0;
  if (!s && ut(t) && !a?.fromWotPlus) return !1;
  if (a && e.battle_pass && e.battle_pass.length > 0)
    for (const r of e.battle_pass) if (!pn(r, a)) return !1;
  for (const r of Object.keys(e)) if (r in hn && !hn[r](e, t)) return !1;
  return ((e, t) => {
    const a = Ye(t.role);
    let s = !1;
    for (const n of Object.keys(mn))
      if (n in e && ((s = !0), e[n].some((e) => e.includes(a)))) return !0;
    return !s;
  })(e, t);
}
function fn(e, { shortName: t, fullName: a }) {
  const s = e.toLowerCase();
  return !(s.length > 0 && !t.toLowerCase().includes(s) && !a.toLowerCase().includes(s));
}
function vn(e, t, a) {
  const s = e[t] ?? [],
    n = { ...e };
  return (
    (n[t] = s.includes(a) ? s.filter((e) => e !== a) : [...s, a]),
    n[t].length > 0 || delete n[t],
    n
  );
}
function bn(e, t) {
  return "regular" === t.type
    ? vn(e, t.field, t.value)
    : Object.keys(mn).reduce((e, a) => {
        const s = mn[a].find((e) => e.includes(t.role));
        return s
          ? vn(
              e,
              a,
              (function (e, t) {
                return "at_spg" === e ? `role_ATSPG_${t}` : `role_${e[0].toUpperCase()}T_${t}`;
              })(a, s),
            )
          : e;
      }, e);
}
function xn(e, t, a, s) {
  if (a.favorite !== s.favorite) return a.favorite ? -1 : 1;
  const n = e[Pt(a.nationId)] ?? 0,
    r = e[Pt(s.nationId)] ?? 0;
  if (n !== r) return n - r;
  const i = t[a.type] ?? 0,
    o = t[s.type] ?? 0;
  return i !== o
    ? i - o
    : a.level !== s.level
      ? a.level - s.level
      : a.premium !== s.premium
        ? a.premium
          ? 1
          : -1
        : a.shortName.localeCompare(s.shortName);
}
var [yn, Cn] = ds("FilterVehiclesProvider")(
    ({ observableModel: e, readByPath: t }) => {
      function a(e) {
        try {
          return JSON.parse(e);
        } catch (t) {
          return (console.error(t), {});
        }
      }
      const { text_search: s, ...n } = a(t("filters")),
        r = { ...e.primitives(["defaultFilters"]) },
        i = Na.structural(() => a(r.defaultFilters.get())),
        o = {
          ...e.primitives(["carouselRowCount"]),
          filters: Ja.box(n, { deep: !1 }),
          searchName: Ja.box(s?.[0] ?? ""),
          nations: e.arrayClone("nationsOrder"),
        };
      return {
        ...o,
        computes: {
          hasFilters: Na.primitive(
            () => !x.structural(i(), o.filters.get()) || o.searchName.get().length > 0,
          ),
          nations: () => o.nations.get(),
          nationToIndex: Na.shallow(() => o.nations.get().reduce((e, t, a) => ((e[t] = a), e), {})),
          default: i,
        },
      };
    },
    ({ cleanup: e, model: t, externalModel: a }) => {
      const s = a.createCallback((e) => e, "onSaveFilter");
      return (
        e(
          Za(() => {
            ((e, t) => {
              s({ filters: JSON.stringify({ ...e, text_search: t.length > 0 ? [t] : void 0 }) });
            })(t.filters.get(), t.searchName.get());
          }),
        ),
        {
          reset: J(() => {
            (t.filters.set(t.computes.default()), t.searchName.set(""));
          }),
          search: J((e) => {
            t.searchName.set(e);
          }),
          change: J((e) => {
            t.filters.set(bn(t.filters.get(), e));
          }),
          carouselTypeChange: a.createCallback((e) => ({ rowCount: e }), "onCarouselTypeChange"),
        }
      );
    },
  ),
  jn = e(Xt()),
  wn = [Gt.lightTank, Gt.mediumTank, Gt.heavyTank, Gt["AT-SPG"], Gt.SPG].reduce(
    (e, t, a) => ((e[t] = a), e),
    {},
  ),
  [Nn, In] = ds("VehicleStatisticsProvider")(({ observableModel: e }) => {
    const t = e.dict("statistics"),
      a = Na.structural((e) => t.get(e));
    return { ids: Na.primitive(() => t.keys), get: a };
  }),
  [Sn, kn] = ds("VehiclesProvider")(
    ({ observableModel: e }) => {
      const t = { vehicles: e.dictRef("vehicles") };
      return {
        get: Na.structural((e) => {
          if (-1 === e) return;
          const a = t.vehicles.get(e);
          if (!a) return void console.error(`Error getting vehicle with id: ${e}`);
          const s = (function (e) {
            try {
              const t = JSON.parse(e);
              return ((t.shortName = t.shortName.replace(/<img.+\/>/, "")), t);
            } catch (t) {
              throw (console.error(`Error parsing JSON for element ${e}:`, t), t);
            }
          })(a);
          return { ...s, imageKey: ht(s.name) };
        }),
        has: Na.primitive((e) => Boolean(t.vehicles.get(e))),
        ids: Na.shallow(() => [...t.vehicles.keys.values()]),
        amount: Na.primitive(() => t.vehicles.length),
        list: Na.shallow(() => {
          let e = [];
          for (const [s, n] of t.vehicles.entries())
            try {
              e.push(JSON.parse(n.get()));
            } catch (a) {
              console.error(`Error parsing JSON for element ${s}:`, a);
            }
          return e;
        }),
      };
    },
    F,
    { useRequires: () => ({ statistics: In() }) },
  ),
  [Pn, En] = ds("MyVehiclesProvider")(
    (e) => {
      const t = e.requires.statistic.model.ids,
        a = Na.structural((a) => {
          if (t().has(a)) return e.requires.vehicles.model.get(a);
        }),
        s = Na.shallow(() => {
          const a = [];
          for (const s of t().values()) {
            const t = e.requires.vehicles.model.get(s);
            t ? a.push(t) : console.warn(`No vehicle with id: ${s}`);
          }
          return a;
        });
      return { get: a, getAll: s, amount: Na.primitive(() => s().length), ids: t };
    },
    F,
    { useRequires: () => ({ vehicles: kn(), statistic: In() }) },
  ),
  Mn = ks.resolve("strings");
var Ln = Ne(oe + pe),
  An = () => `${Date.now().toString(16)}_${Ln(3)}`;
function Tn(e, t, a = 1) {
  const s = js(t, { count: a });
  return e.has(s) ? Tn(e, t, a + 1) : s;
}
function Dn(e = "", t = []) {
  return {
    title: "" !== e ? e : Mn.readOrEmpty("playlists.defaultName"),
    createdAt: Date.now(),
    modifiedAt: Date.now(),
    list: t,
  };
}
var Bn = (e) => ({ type: "ok", value: e }),
  On = (e, t) => ({ type: "error", error: { tag: e, msg: t } });
function Vn(e) {
  if ("ok" === e.type) return e.value;
}
var Rn = "delete",
  Hn = "import",
  $n = _e({
    title: se(),
    createdAt: W(le(), xe(), _a(0)),
    modifiedAt: W(le(), xe(), _a(0)),
    list: I(W(le(), xe())),
  }),
  zn = W(
    se(),
    De((e) => (e.length > 0 ? e : void 0)),
  ),
  Fn = "new",
  Wn = "existing",
  qn = _e({ id: W(se(), l(1)), playlistState: Ie(Ts([xa(Wn), xa(Fn)])) }),
  [Zn, Gn, { Context: Un }] =
    (_e({ title: se() }),
    _e({
      titles: W(
        I(se()),
        De((e) => new Set(e)),
      ),
    }),
    ds("PlaylistsProvider")(
      ({ requires: e, observableModel: t }) => {
        const s = t.dict("storage"),
          n = t.primitives(["selectedID", "enabled", "dirtyEdit"]),
          r = e.filters.model.computes.default,
          o = {
            vehicles: e.vehicles.model,
            myVehicles: e.myVehicles.model,
            enabled: n.enabled,
            nationsOrder: e.filters.model.nations,
            filters: Ja.box(r(), { deep: !1 }),
            searchName: Ja.box("", { deep: !1 }),
            edit: { initial: Ja.box(void 0, { deep: !1 }), dirty: n.dirtyEdit },
          },
          l = Na.shallow(() => s.keys),
          c = Na.primitive(() => L(zn, n.selectedID.get())),
          d = Na.structural((e) => {
            try {
              const t = s.get(e);
              if (!t) return Bn(void 0);
              const n = L($n, JSON.parse(t)),
                r = new Set();
              for (const e of n.list)
                if (a[e]) {
                  const t = a[e].find((e) => Boolean(o.myVehicles.get(e.toString())));
                  r.add(t ?? e);
                } else r.add(e);
              return Bn({ ...n, list: [...r.values()] });
            } catch (t) {
              return (
                console.error(`Error getting playlist with ${e} id`, t),
                On("PARSE_ERROR", String(t))
              );
            }
          }),
          u = Na.shallow(() =>
            i(l().values())
              .map((e) => d(e))
              .filter((e) => "ok" === e.type && void 0 !== e.value)
              .map((e) => e.value.title)
              .reduce((e, t) => e.add(t), new Set()),
          ),
          m = Na.primitive((e) => {
            const t = d(e);
            if ("ok" !== t.type || void 0 === t.value)
              throw new Error(`Can't get playlist by id ${e}`);
            return t.value;
          }),
          p = Na.structural((e) => {
            const t = d(e);
            if ("ok" === t.type && void 0 !== t.value) return { id: e, ...t.value };
          }),
          _ = Na.shallow(() =>
            i(l().values())
              .map((e) => p(e))
              .filter((e) => void 0 !== e)
              .toArray()
              .sort((e, t) => e.title.localeCompare(t.title))
              .map((e) => e.id),
          ),
          h = Na.primitive(() => {
            const e = c();
            if (e) return p(e);
          }),
          g = Na.shallow(() => {
            const t = e.filters.model.computes.nationToIndex();
            return b(e.myVehicles.model.getAll(), (e, a) => xn(t, wn, e, a));
          }),
          f = Na.primitive((e) => {
            const t = p(e),
              a = y();
            if (void 0 === t || 0 === t.list.length) return;
            const s = new Set(t.list);
            for (let n = 0; n < a.length; n += 1) {
              const e = Number(a[n]?.id);
              if (be(e) && s.has(e)) return n;
            }
          }),
          v = Na.primitive(
            () => !1 === x.structural(r(), o.filters.get()) || o.searchName.get().length > 0,
          ),
          y = Na.shallow(() => {
            const t = o.filters.get(),
              a = g(),
              s = o.searchName.get();
            return a.filter((a) => !!fn(s, a) && gn(t, a, e.statistic.model.get(a.id)));
          }),
          C = Na.primitive((t) => Boolean(e.statistic.model.get(t)?.elite)),
          j = Na.shallow((t) => e.vehicles.model.get(t)?.imageKey),
          w = Na.primitive(() => y().length),
          N = Na.shallow(() => h()?.list.map(o.vehicles.get));
        return {
          ...o,
          current: h,
          titles: u,
          currentId: c,
          byIdUnsafe: m,
          byId: d,
          byIdFull: p,
          filtered: y,
          filteredAmount: w,
          defaultFilters: r,
          hasFilters: v,
          vehicleImage: j,
          currentVehicles: N,
          ids: l,
          sortedIds: _,
          isElite: C,
          firstAddedVehicleIndexByPlaylistId: f,
        };
      },
      ({ model: e, externalModel: t }) => {
        const a = t.createCallback(
          (e) => ({ id: e.id, data: JSON.stringify(e.initial), skipRedirect: e.skipRedirect }),
          "onCreate",
        );
        return {
          filters: Xe({
            update: (t) => {
              e.filters.set(bn(e.filters.get(), t));
            },
            reset: () => {
              (e.filters.set(e.defaultFilters()), e.searchName.set(""));
            },
            search: (t) => e.searchName.set(t),
            change: (t) => {
              e.filters.set(bn(e.filters.get(), t));
            },
          }),
          create: J((t) => {
            const { id: s = An(), vehicleIds: n = [], skipRedirect: r = !1 } = t ?? {};
            a({ id: s, initial: Dn(Tn(e.titles(), "playlists.defaultName"), n), skipRedirect: r });
          }),
          edit: {
            sendModify: t.createCallback(
              (e, t) => ({ id: e, data: JSON.stringify(t) }),
              "onModify",
            ),
            setDirty: t.createCallback((e) => ({ value: e }), "onSetDirtyEdit"),
          },
          select: t.createCallback((e = "") => ({ id: e }), "onSelect"),
          save: t.createCallback((e) => ({ id: e }), "onSave"),
          exit: t.createCallback((e) => ({ id: e }), "onDiscard"),
          goToAboutVehicle: t.createCallback((e) => ({ intCD: e }), "onGoToAboutVehicle"),
          openImport: t.createCallback(
            J(() => ({
              type: Hn,
              params: JSON.stringify({ titles: Array.from(e.titles().values()) }),
            })),
            "openImportConfirm",
          ),
          openDeleteConfirm: t.createCallback(
            (e, t) => ({ id: e, type: Rn, params: JSON.stringify({ title: t }) }),
            "openDeleteConfirm",
          ),
        };
      },
      { useRequires: () => ({ vehicles: kn(), myVehicles: En(), filters: Cn(), statistic: In() }) },
    )),
  Kn = () => (0, jn.useContext)(Un),
  Xn = "pending",
  Yn = "readyToSelect",
  Jn = "disabled",
  [Qn, er] = ds("VehiclesInventoryProvider")(
    (e) => {
      const t = e.observableModel.primitives([
          "freeSlotsCount",
          "defaultSlotPrice",
          "slotPrice",
          "slotPriceCurrency",
          "recoverableVehicleCount",
          "currentVehicleIntCD",
          "currentVehicleInventoryId",
          "hasDiscont",
          "bpEntityValid",
          "bpStatus",
          "telecomRentStatus",
        ]),
        a = Ja.box([], { deep: !1 }),
        s = { intCD: t.currentVehicleIntCD, inventoryId: t.currentVehicleInventoryId },
        n = Na.shallow(() => {
          const t = s.intCD.get();
          return e.requires.vehicles.model.get(t);
        }),
        r = Na.shallow((t) => {
          if (void 0 === t) return;
          const a = s.intCD.get();
          return -1 === a ? e.requires.vehicles.model.get(t) : e.requires.vehicles.model.get(a);
        }),
        i = Na.shallow(() => {
          const t = s.intCD.get();
          return e.requires.statistic.model.get(t);
        }),
        o = Na.primitive(() => -1 !== s.intCD.get()),
        l = Na.shallow((e) => gs(e, (e) => c.get(String(e)))),
        c = e.requires.myVehicles.model,
        d = Na.structural(() => e.requires.vehicles.model.list().filter((e) => e.rent.isRented)),
        u = Na.primitive(() =>
          e.requires.vehicles.model.list().some((t) => {
            const a = e.requires.statistic.model.get(t.vehicleId);
            if (a) return "inPrebattle" === a.status;
          }),
        ),
        m = Na.primitive(() => {
          const t = [...c.getAll()],
            a = e.requires.filters.model.computes.nationToIndex();
          return (t.sort((e, t) => xn(a, wn, e, t)), t);
        });
      return (
        e.cleanup(
          Za(() => {
            const t = e.requires.filters.model.filters.get(),
              s = e.requires.filters.model.searchName.get(),
              n = e.requires.playlists?.model.current(),
              r = c.ids(),
              i = (n ? l(n.list) : m()).filter(
                (a) =>
                  !1 !== r.has(a.id) &&
                  !!gn(t, a, e.requires.statistic.model.get(a.id)) &&
                  fn(s, a),
              );
            Ht(() => a.set(i));
          }),
        ),
        {
          vehicles: e.requires.myVehicles.model,
          vehicle: r,
          selectedVehicle: n,
          isVehicleSelected: o,
          selectedVehicleStatistics: i,
          accumulateByIds: l,
          rentVehiclesList: d,
          prebattleModeActive: u,
          current: {
            intCD: t.currentVehicleIntCD,
            inventoryId: t.currentVehicleInventoryId,
            amount: Na.primitive(() => a.get().length),
            list: () => a.get(),
            ids: Na.shallow(() => a.get().map((e) => e.id)),
            playlist: e.requires.playlists ? e.requires.playlists.model.current : () => {},
          },
          slots: {
            free: t.freeSlotsCount,
            price: {
              defaultValue: t.defaultSlotPrice,
              value: t.slotPrice,
              currency: t.slotPriceCurrency,
            },
            recover: t.recoverableVehicleCount,
            discount: t.hasDiscont,
          },
          bpState: { active: t.bpEntityValid, status: t.bpStatus },
          telecomRentStatus: t.telecomRentStatus,
        }
      );
    },
    (e) => ({
      select: e.externalModel.createCallback((e) => ({ id: e }), "onSelect"),
      buySlot: e.externalModel.createCallbackNoArgs("onBuySlot"),
      goBuyVehicle: e.externalModel.createCallbackNoArgs("onGoBuyVehicle"),
      goRecoverVehicle: e.externalModel.createCallbackNoArgs("onGoRecoverVehicle"),
      selectTelecomRentalVehicle: e.externalModel.createCallbackNoArgs(
        "onSelectTelecomRentalVehicle",
      ),
    }),
    {
      useRequires: () => ({
        myVehicles: En(),
        vehicles: kn(),
        statistic: In(),
        filters: Cn(),
        playlists: Kn(),
      }),
    },
  ),
  [tr, ar, { Context: sr }] = ds("ManageableVehiclePlaylistsModel")(
    (e) => {
      const t = {
          ...e.observableModel.primitives({ intCD: "vehicleId" }),
          displayedVehicleId: Ja.box(-1),
          changesInPlaylistSelection: Ja.set(new Set()),
        },
        a = Na.shallow(() =>
          e.requires.playlists.model.sortedIds().reduce((t, a) => {
            const s = e.requires.playlists.model.byIdFull(a);
            return (s ? t.push(s) : console.warn(`Missing playlist data for id = ${a}`), t);
          }, []),
        ),
        s = Na.structural(() =>
          a().map(({ id: e, title: a, list: s }) => {
            const n = s.includes(t.displayedVehicleId.get());
            return { id: e, title: a, selected: t.changesInPlaylistSelection.has(e) ? !n : n };
          }, []),
        ),
        n = Na.primitive(() => 0 === s().length);
      return (
        e.cleanup(
          Za(() => {
            (t.displayedVehicleId.get(), a(), Ht(() => t.changesInPlaylistSelection.clear()));
          }),
        ),
        {
          ...t,
          computeds: {
            playlistItems: s,
            isVehiclePlaylistsEmpty: n,
            vehicle: Na.shallow(() => {
              const a = t.displayedVehicleId.get(),
                s = e.requires.vehicles.model.get(a),
                n = e.requires.vehicleStatistics.model.get(a);
              if (void 0 !== s && void 0 !== n) return { ...s, elite: n.elite };
            }),
            empty: Na.primitive(() => -1 === t.vehicleId.get()),
            sortedPlaylists: a,
            hasChanges: Na.primitive(() => t.changesInPlaylistSelection.size > 0),
            enabled: Na.primitive(() => e.requires.playlists.model.enabled.get()),
          },
        }
      );
    },
    (e) => ({
      setDisplayedVehicleId: J((t) => {
        e.model.displayedVehicleId.set(t);
      }),
      reset: e.externalModel.createCallbackNoArgs("onReset"),
      selectVehicle: e.externalModel.createCallback((e) => ({ id: e }), "onSelectVehicle"),
      goToCreatePlaylist: (t) => {
        e.requires.playlists.controls.create({ vehicleIds: t });
      },
      togglePlaylist: J((t) => {
        e.model.changesInPlaylistSelection.has(t)
          ? e.model.changesInPlaylistSelection.delete(t)
          : e.model.changesInPlaylistSelection.add(t);
      }),
      save: J(() => {
        const t = e.model.displayedVehicleId.get(),
          a = e.requires.playlists.model.currentId();
        for (const s of e.model.changesInPlaylistSelection) {
          const a = Vn(e.requires.playlists.model.byId(s));
          if (!a) return void console.warn(`Missing playlist data for id = ${s}`);
          (e.requires.playlists.controls.edit.sendModify(s, {
            ...a,
            modifiedAt: Date.now(),
            list: a.list.includes(t) ? a.list.filter((e) => e !== t) : [...a.list, t],
          }),
            e.requires.playlists.controls.save(s));
        }
        e.requires.playlists.controls.select(a);
      }),
      cancel: J(() => {
        e.model.changesInPlaylistSelection.clear();
      }),
    }),
    { useRequires: () => ({ vehicles: kn(), playlists: Gn(), vehicleStatistics: In() }) },
  ),
  nr = () => (0, jn.useContext)(sr),
  rr = Re(),
  ir = (e) =>
    (0, rr.jsxs)("svg", {
      width: 24,
      height: 24,
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      xmlnsXlink: "http://www.w3.org/1999/xlink",
      ...e,
      children: [
        (0, rr.jsx)("path", {
          opacity: 0.8,
          d: "M19 16H22V18H19V21H17V18H14V16H17V13H19V16Z",
          fill: "#0D0E10",
        }),
        (0, rr.jsx)("path", {
          d: "M19 15H22V17H19V20H17V17H14V15H17V12H19V15Z",
          fill: "url(#paint0_radial_111851_505980)",
        }),
        (0, rr.jsx)("g", {
          opacity: 0.8,
          children: (0, rr.jsx)("path", {
            d: "M12 16H5V15H12V16ZM15 13H5V12H15V13ZM19 10H5V9H19V10ZM19 7H5V6H19V7Z",
            fill: "url(#paint1_radial_111851_505980)",
          }),
        }),
        (0, rr.jsx)("path", {
          opacity: 0.8,
          d: "M12 17H5V16H12V17ZM15 14H5V13H15V14ZM19 11H5V10H19V11ZM19 8H5V7H19V8Z",
          fill: "#0D0E10",
        }),
        (0, rr.jsxs)("defs", {
          children: [
            (0, rr.jsxs)("radialGradient", {
              id: "paint0_radial_111851_505980",
              cx: 0,
              cy: 0,
              r: 1,
              gradientUnits: "userSpaceOnUse",
              gradientTransform: "translate(15.7778 13.6) rotate(90) scale(5.6 4.97778)",
              children: [
                (0, rr.jsx)("stop", { offset: 6.20882e-10, stopColor: "#EDE6D9" }),
                (0, rr.jsx)("stop", { offset: 1, stopColor: "#C2C7CE" }),
              ],
            }),
            (0, rr.jsxs)("radialGradient", {
              id: "paint1_radial_111851_505980",
              cx: 0,
              cy: 0,
              r: 1,
              gradientUnits: "userSpaceOnUse",
              gradientTransform: "translate(12 14.0904) rotate(180) scale(8.90909 2.42616)",
              children: [
                (0, rr.jsx)("stop", { offset: 6.20882e-10, stopColor: "#EDE6D9" }),
                (0, rr.jsx)("stop", { offset: 1, stopColor: "#C2C7CE" }),
              ],
            }),
          ],
        }),
      ],
    }),
  or = "Buttons_937965ba",
  lr = "Buttons_right_268130b5",
  cr = "Buttons_button_aeef4019",
  dr = "Buttons_button__create_61690fd8",
  ur = "Buttons_icon_378ba619",
  mr = ks.resolve("strings"),
  pr = At(function () {
    const { model: e, controls: t } = ar();
    return (0, rr.jsxs)("div", {
      className: cs(or),
      children: [
        (0, rr.jsx)(Aa, {
          body: mr.readOrEmpty("playlists.managaeble_playlists.buttons.create.tooltipBody"),
          children: (0, rr.jsx)(n, {
            className: cs(cr, dr),
            theme: n.themes.secondary,
            size: n.sizes.extraSmall,
            autoAlignContent: !1,
            onClick: () => {
              (t.goToCreatePlaylist([e.displayedVehicleId.get()]), t.reset());
            },
            children: (0, rr.jsx)(ir, { className: ur }),
          }),
        }),
        (0, rr.jsxs)("div", {
          className: lr,
          children: [
            (0, rr.jsx)(n, {
              className: cr,
              theme: n.themes.secondary,
              size: n.sizes.extraSmall,
              onClick: () => {
                (t.cancel(), t.reset());
              },
              children: (0, rr.jsx)(ra, {
                text: mr.readOrEmpty("playlists.managaeble_playlists.buttons.cancel.title"),
              }),
            }),
            (0, rr.jsx)(n, {
              className: cr,
              theme: n.themes.primary,
              size: n.sizes.extraSmall,
              disabled: !e.computeds.hasChanges(),
              onClick: () => {
                (t.save(), t.reset());
              },
              children: (0, rr.jsx)(ra, {
                text: mr.readOrEmpty("playlists.managaeble_playlists.buttons.save.title"),
              }),
            }),
          ],
        }),
      ],
    });
  }),
  _r = "Item_itemBackground_f5007fc6",
  hr = "Item_c5163bf",
  gr = "Item_checkbox_cfffba80",
  fr = "Item_item__checked_5f6fcc69",
  vr = "Item_check_a68580c8",
  br = "Item_checkboxLabel_885d0061",
  xr = At(function ({ id: e, title: t, checked: a }) {
    const { controls: s } = ar();
    return (0, rr.jsxs)("div", {
      className: cs(hr, a && fr),
      children: [
        (0, rr.jsx)("div", { className: _r }),
        (0, rr.jsx)(Ct, {
          checked: a,
          onCheckedChange: () => s.togglePlaylist(e),
          size: Ae.small,
          className: gr,
          classNames: { label: br, check: vr },
          children: (0, rr.jsx)(ra, { text: t }),
        }),
      ],
    });
  }),
  yr = "List_152fbdf4",
  Cr = "List_scrollWrapper_e69e8089",
  jr = "List_scrollContent_30662217",
  wr = "List_scrollbar_611defd3",
  Nr = At(function () {
    const { model: e } = ar(),
      t = e.computeds.playlistItems();
    return (0, rr.jsxs)("div", {
      className: yr,
      children: [
        (0, rr.jsx)(kt, {
          classNames: { wrapper: Cr, content: jr },
          children: Ve(t, ({ id: e, title: t, selected: a }) =>
            (0, rr.jsx)(xr, { id: e, title: t, checked: a }, e),
          ),
        }),
        (0, rr.jsx)(es, { classNames: { base: wr } }),
      ],
    });
  }),
  Ir = "Vehicle_name_f5f779f6",
  Sr = "Vehicle_level_c03ad304",
  kr = "Vehicle_type_9905a21f",
  Pr = At(function () {
    const { model: e } = ar(),
      t = e.computeds.vehicle();
    if (void 0 === t) return null;
    const a = Ye(t.role);
    return (0, rr.jsxs)(ee, {
      children: [
        (0, rr.jsx)(ee.Level, { value: t.level, className: Sr }),
        xt(t.type) &&
          (0, rr.jsx)(ee.Type, {
            size: ee.Type.sizes.x24x24,
            className: kr,
            type: t.type,
            premium: t.elite,
          }),
        (0, rr.jsx)(ra, { text: t.fullName, className: Ir }),
        "without_role" !== a && (0, rr.jsx)(ee.Role, { size: ee.Role.sizes.x16x16, roleKey: a }),
      ],
    });
  }),
  Er = "Styles_display_f2930fa3",
  Mr = "Styles_header_dcb2494f",
  Lr = "Styles_body_504cd01f",
  Ar = "Styles_title_ece3f15e",
  Tr = ks.resolve("strings");
function Dr({ className: e }) {
  return (0, rr.jsxs)(ta.Header, {
    className: cs(Mr, e),
    children: [
      (0, rr.jsx)(ta.Title, {
        className: Ar,
        children: (0, rr.jsx)(ra, {
          text: Tr.readOrEmpty("playlists.managaeble_playlists.header.title"),
        }),
      }),
      (0, rr.jsx)(Pr, {}),
    ],
  });
}
function Br({ className: e }) {
  return (0, rr.jsxs)(ta.Body, {
    className: cs(Lr, e),
    children: [
      (0, rr.jsx)(ta.Divider, {}),
      (0, rr.jsx)(Xa, { children: (0, rr.jsx)(Nr, {}) }),
      (0, rr.jsx)(ta.Divider, {}),
      (0, rr.jsx)(pr, {}),
    ],
  });
}
var Or = (0, jn.memo)(function ({ vehicleId: e, tipSize: t, className: a, children: s, ...n }) {
    return (0, rr.jsxs)(ta.Display, {
      ...n,
      className: cs(Er, a),
      children: [(0, rr.jsx)(ta.Tip, { size: t }), (0, rr.jsx)(ta.Close, {}), s],
    });
  }),
  Vr = At(({ children: e }) => {
    const t = Nt(),
      a = Le(),
      s = c(),
      n = ce(),
      { model: r, controls: i } = ar(),
      o = r.vehicleId.get(),
      l = r.displayedVehicleId.get(),
      [d, u] = (0, jn.useState)(!1),
      [m, p] = (0, jn.useState)(!1),
      _ = Da(() => {
        (p(!0), t.open(), s.run(() => p(!1), 250));
      }),
      h = Da(() => {
        (p(!0),
          t.close(),
          s.run(() => {
            (u(!0),
              i.setDisplayedVehicleId(-1),
              n.run(() => {
                (p(!1), u(!1));
              }));
          }, 250));
      }),
      g = Da(() => {
        (u(!0), i.setDisplayedVehicleId(o), n.run(() => u(!1)));
      });
    (0, jn.useEffect)(() => {
      a || r.computeds.empty() || t.opened || (i.reset(), h());
    }, [t.opened]);
    const f = Da(() => {
      n.isRunning ||
        (t.opened || s.isRunning || o === l
          ? t.opened || -1 === o || -1 === l
            ? t.opened && -1 === o && -1 !== l && h()
            : s.isRunning || _()
          : g());
    });
    return (
      (0, jn.useEffect)(f, [f, o, l, t.opened, m, d]),
      Wt(() => {
        r.computeds.empty() || i.reset();
      }),
      e
    );
  }),
  Rr = (e) => `manageable-vehicle-playlists-model-${e}`,
  Hr = At(function ({ children: e, position: t, freeSpaceRem: a, tipSize: s }) {
    const { model: n, controls: r } = ar(),
      i = n.displayedVehicleId.get(),
      o = Yt("rem"),
      l = Da((e, { callerBounding: t }) => {
        const a = e.trigger.bounding.get();
        if (a && !ye(a, t)) return (e.close(), !1);
      }),
      c = n.vehicleId.get(),
      d = n.computeds.isVehiclePlaylistsEmpty(),
      u = Qa(c);
    return (
      (0, jn.useEffect)(() => {
        d && -1 === u && -1 !== c && (r.goToCreatePlaylist([c]), r.reset());
      }, [u, c, d, r]),
      d
        ? null
        : (0, rr.jsx)(ta, {
            id: Rr(i),
            children: (0, rr.jsxs)(Vr, {
              children: [
                (0, rr.jsx)(ta.Portal, {
                  paddingsRem: o,
                  position: t,
                  freeSpaceRem: a,
                  onBeforePositionChange: l,
                  children:
                    -1 !== i &&
                    (0, rr.jsxs)(
                      Or,
                      {
                        vehicleId: i,
                        tipSize: s,
                        children: [(0, rr.jsx)(Dr, {}), (0, rr.jsx)(Br, {})],
                      },
                      i,
                    ),
                }),
                e,
              ],
            }),
          })
    );
  });
function $r(e) {
  const t = nr(),
    a = Boolean(t && t.model.computeds.enabled()),
    s = !t || t.model.computeds.isVehiclePlaylistsEmpty(),
    n = Da(() => {
      a && !s && t.model.vehicleId.get() === e && t.controls.reset();
    });
  return (0, jn.useMemo)(() => {
    if (a && !s) return { "data-popover-trigger-id": Rr(e), onMouseDown: n };
  }, [s, a, n, e]);
}
var [zr, Fr, Wr] = ds("SettingsProvider")(
  (e) => {
    const t = e.observableModel.primitives(["crewEnabled", "ttcEnabled"], "allVehicles"),
      a = Na.primitive(() => Boolean(e.initial.selectedVehicle()));
    return {
      ...t,
      computed: {
        crewEnabled: Na.primitive(() => a() && t.crewEnabled.get()),
        ttcEnabled: Na.primitive(() => a() && t.ttcEnabled.get()),
        noSelectedVehicle: a,
      },
    };
  },
  (e) => {
    const t = e.externalModel.createCallback(
        (e) => ({ section: "allVehicles", key: "crewEnabled", value: e }),
        "onUpdateSetting",
      ),
      a = e.externalModel.createCallback(
        (e) => ({ section: "allVehicles", key: "ttcEnabled", value: e }),
        "onUpdateSetting",
      );
    return {
      crew: { set: t, toggle: () => t(!e.model.crewEnabled.get()) },
      ttc: { set: a, toggle: () => a(!e.model.ttcEnabled.get()) },
    };
  },
  { initial: (e) => e },
);
function qr() {
  return (0, jn.useContext)(Wr.Context);
}
var Zr = qe(_e({ key: se(), name: se() })),
  Gr = _e({ value: Ts([le(), se()]), state: se() }),
  Ur = (qe(Gr), qe(I(Gr))),
  Kr = "boost",
  Xr = "reduce",
  Yr = "none";
function Jr(e, t, a) {
  const s = 100 / a,
    n = e - t * s;
  return (Math.max(0, Math.min(s, n)) / s) * 100;
}
function Qr(e, t, a) {
  return Array.from({ length: a }, (s, n) => {
    const r = Jr(e, n, a);
    return { currentPercent: r, modifiedPercent: Jr(t, n, a) - r };
  });
}
function ei({ currentPercent: e, modifiedPercent: t }, a) {
  return a === Xr ? [t, e] : [e, t];
}
function ti(e) {
  return Ve(e, ({ value: e, name: t, tooltipID: a, ...s }) => ({
    ...s,
    tooltipId: a,
    values: Ur(e),
    kpiBonusParams: t ? Zr(t) : { key: "", name: "" },
  }));
}
function ai(e, t) {
  const { key: a, name: s } = t,
    n = ks.resolve("strings");
  return "" !== s && "" !== a
    ? n.readOr(`tank_setup.kpi.bonus.ttc.${a}.${s}`, () =>
        n.readOrEmpty(`tank_setup.kpi.bonus.${a}.${s}`),
      )
    : n.readOrEmpty(`menu.tank_params.${e}`);
}
var [si, ni] = ds("TechParamsProvider")(
    ({ observableModel: e }) => {
      const t = { groups: e.arrayClone("groups") };
      return {
        computes: {
          sectionParams: Na.structural((e) =>
            Ve(
              t.groups.get(),
              ({ id: t, indicator: a, isOpen: s, params: n, extraParams: r, ...i }) => {
                const o = (function ({ currentPercent: e, modifiedPercent: t }) {
                  return t === e ? Yr : t > e ? Kr : Xr;
                })(a);
                return {
                  ...i,
                  type: t,
                  indicatorList: Qr(...ei(a, o), e),
                  status: o,
                  opened: s,
                  params: ti(n),
                  extraParams: ti(r),
                };
              },
            ),
          ),
        },
      };
    },
    ({ externalModel: e }) => ({
      selectGroup: e.createCallback((e) => ({ groupName: e }), "onGroupClick"),
    }),
  ),
  ri = { height: 105, row: 3 },
  ii = {
    medium: { height: 136, row: 4 },
    large: { height: 145, row: 5 },
    extraLarge: { height: 183, row: 5 },
  },
  oi = "top",
  li = "bottom",
  ci = "both",
  di = "none",
  ui = (e, t) => (e || t ? (e ? (t ? di : li) : oi) : ci),
  mi = (function (e) {
    return (
      (e.None = "none"),
      (e.Increase = "increase"),
      (e.Decrease = "decrease"),
      (e.Situational = "situational"),
      e
    );
  })({}),
  pi = {
    "media-wrapper": "Detail_media-wrapper_cdd8039b",
    root: "Detail_root_cdd8039b",
    base: "Detail_98c9f049",
    base__moduleInstalled: "Detail_base__moduleInstalled_680bfdfe",
    valueContainer: "Detail_valueContainer_88910ef9",
    value: "Detail_value_ecb66043",
    value__increase: "Detail_value__increase_3e2aac8",
    value__decrease: "Detail_value__decrease_77bd45aa",
    value__situational: "Detail_value__situational_df78abf1",
    separator: "Detail_separator_629a2ec8",
    icon: "Detail_icon_9a3f3ac3",
    description: "Detail_description_f080f1e6",
  },
  _i = ks.resolve("strings"),
  hi = ks.resolve("images"),
  gi = ks.resolve("aliases"),
  fi = ks.resolve("intl");
function vi({
  id: e,
  values: t,
  rootId: a,
  moduleInstalled: s,
  kpiBonusParams: n,
  tooltipId: r,
  className: i,
}) {
  const o = jn.useMemo(() => ({ tooltipId: r, paramId: e }), [r, e]),
    l = $e({
      resId: 0 !== a ? a : gi.read((e) => e.hangar.shared.VehicleParams("resId")),
      args: o,
    });
  return (0, rr.jsxs)("div", {
    className: cs(pi.base, s && pi.base__moduleInstalled, i),
    ...l,
    children: [
      (0, rr.jsx)("div", {
        className: pi.valueContainer,
        children: t.map(({ value: e, state: t }, a) =>
          (0, rr.jsxs)(
            jn.Fragment,
            {
              children: [
                a > 0 &&
                  (0, rr.jsx)("div", {
                    className: pi.separator,
                    children: _i.readOrEmpty("common.common.slash"),
                  }),
                (0, rr.jsx)("div", {
                  className: cs(pi.value, pi[`value__${t}`]),
                  children: fi.formatReal("woZeroDigits", e),
                }),
              ],
            },
            `${e}-${t}-${a}`,
          ),
        ),
      }),
      (0, rr.jsx)("div", {
        className: pi.icon,
        style: { backgroundImage: `url(${hi.readOrEmpty(`vehParams.small.${e}`)})` },
      }),
      (0, rr.jsx)("div", { className: pi.description, children: ai(e, n) }),
    ],
  });
}
var bi = "DetailsContainer_b85372ff",
  xi = "DetailsContainer_params_9bf7e9a4",
  yi = "DetailsContainer_separator_f28e38c",
  Ci = "DetailsContainer_detail_141e9abe";
function ji(e, t) {
  return t !== mi.None && Ha(e, (e) => e.state === mi.None);
}
function wi({ params: e, rootId: t, extraParams: a, highlightType: s, className: n }) {
  return (0, rr.jsx)("div", {
    className: cs(bi, n),
    children: (0, rr.jsxs)("div", {
      className: xi,
      children: [
        Ve(e, (e) =>
          (0, jn.createElement)(vi, {
            ...e,
            rootId: t,
            key: e.id,
            className: Ci,
            moduleInstalled: ji(e.values, s),
          }),
        ),
        a.length > 0 && (0, rr.jsx)("div", { className: yi }),
        Ve(a, (e) =>
          (0, jn.createElement)(vi, {
            ...e,
            rootId: t,
            key: e.id,
            className: Ci,
            moduleInstalled: ji(e.values, s),
          }),
        ),
      ],
    }),
  });
}
function Ni(e, t) {
  if (0 === t.length)
    return e.map((e, t) => ({
      currentIndicator: Ii({ percent: e?.currentPercent, delay: 100 * t }),
      boostIndicator: Ii(),
      reduceIndicator: Ii({ percent: e?.modifiedPercent, delay: 100 * t }),
    }));
  const a = jt(e, (e) => e.modifiedPercent > 0) ?? 0,
    s = (() => {
      const a = ms(t, (e) => e.currentPercent > 0) ?? 0,
        s = ms(t, (e) => e.modifiedPercent > 0) ?? a;
      return s > (ms(e, (e) => e.modifiedPercent > 0) ?? 0)
        ? s
        : (jt(t, (e) => e.modifiedPercent > 0) ?? a);
    })();
  return e.map((t, n) => {
    const r = e[n]?.currentPercent ?? 0,
      i = e[n]?.modifiedPercent ?? 0,
      o = (function (e, t, a) {
        return t > a ? (e > a ? 100 * (e - a) : 0) : t < a && e < a ? 100 * (a - e) : 0;
      })(n, a, s);
    return {
      currentIndicator: Ii({ percent: r, delay: o }),
      boostIndicator: Ii({ delay: o }),
      reduceIndicator: Ii({ percent: i, delay: o }),
    };
  });
}
var Ii = (e = {}) => ({ percent: e.percent ?? 0, delay: e.delay ?? 0 });
function Si(e, t, a) {
  return a === Kr
    ? (function (e, t) {
        const a = ms(e, (e) => e.currentPercent > 0) ?? 0,
          s = ms(t, (e) => e.currentPercent > 0) ?? 0,
          n = ms(e, (e) => e.modifiedPercent > 0) ?? 0,
          r = ms(t, (e) => e.modifiedPercent > 0) ?? a;
        return e.map((t, i) => {
          const o = e[i]?.currentPercent ?? 0,
            l = e[i]?.modifiedPercent ?? 0,
            c = (function (e, t, a, s, n) {
              return s > n
                ? e > n
                  ? 100 * (e - n)
                  : 0
                : t > a
                  ? e > a
                    ? 100 * (e - a)
                    : 0
                  : t < a && e >= t
                    ? 100 * (a - e)
                    : 0;
            })(i, n, r, a, s);
          return {
            currentIndicator: Ii({ percent: o, delay: c }),
            boostIndicator: Ii({ percent: l, delay: c }),
            reduceIndicator: Ii({ delay: c }),
          };
        });
      })(t, e)
    : a === Xr
      ? Ni(t, e)
      : (function (e, t) {
          const a = ms(e, (e) => e.currentPercent > 0) ?? 0,
            s = ms(t, (e) => e.currentPercent > 0) ?? 0,
            n = ms(t, (e) => e.modifiedPercent > 0),
            r = jt(t, (e) => e.modifiedPercent > 0) ?? 0;
          return e.map((e, t) => {
            const i = e.currentPercent ?? 0,
              o =
                void 0 === n
                  ? 100 * Math.abs(t - s)
                  : n > a
                    ? Math.max(100 * (n - t), 0)
                    : Math.max(100 * (t - r), 0),
              l = (function (e, t, a, s) {
                return void 0 === a
                  ? 0
                  : t < a
                    ? e < a
                      ? 100 * (a - e)
                      : 0
                    : t > s && e > s
                      ? 100 * (e - s)
                      : 0;
              })(t, a, n, r);
            return {
              currentIndicator: Ii({ percent: i, delay: o }),
              boostIndicator: Ii({ delay: l }),
              reduceIndicator: Ii({ delay: l }),
            };
          });
        })(t, e);
}
var ki = "Indicator_be35e8ce",
  Pi = "Indicator_baseIndicator_804d6503",
  Ei = "Indicator_filledIndicatorsContainer_87d2b117",
  Mi = "Indicator_currentIndicator_6d6696af",
  Li = "Indicator_boostIndicator_1f6d9ad3",
  Ai = "Indicator_reduceIndicator_e33f4fcd",
  Ti = "Indicator_layersContainer_1a6c98e2",
  Di = "Indicator_currentIndicatorLayer_c81bba7d",
  Bi = "Indicator_reduceIndicatorLayer_d5b54d90",
  Oi = "Indicator_boostIndicatorLayer_d7d74a2f",
  Vi = (e, t) => ((t - e) / 100) * 100;
function Ri({ className: e, currentIndicator: t, reduceIndicator: a, boostIndicator: s }) {
  const n = Qa({
      currentIndicator: t.percent,
      reduceIndicator: a.percent,
      boostIndicator: s.percent,
    }) ?? { currentIndicator: 0, reduceIndicator: 0, boostIndicator: 0 },
    r = n.boostIndicator > s.percent,
    i = n.boostIndicator < s.percent,
    o = Rs({
      from: { width: `${n.reduceIndicator}%` },
      to: { width: `${a.percent}%` },
      delay: r ? a.delay + Math.abs(Vi(n.boostIndicator, s.percent)) : a.delay,
      config: {
        duration: n.boostIndicator === s.percent ? 100 : Math.abs(Vi(n.reduceIndicator, a.percent)),
      },
    }),
    l = Rs({
      from: { width: `${n.boostIndicator}%` },
      to: { width: `${s.percent}%` },
      delay: i ? s.delay + Math.abs(Vi(n.reduceIndicator, a.percent)) : s.delay,
      config: {
        duration: n.reduceIndicator === a.percent ? 100 : Math.abs(Vi(n.boostIndicator, s.percent)),
      },
    }),
    c = Rs({
      from: { width: `${n.currentIndicator}%` },
      to: { width: `${t.percent}%` },
      delay: r ? t.delay + Math.abs(Vi(n.boostIndicator, s.percent)) : t.delay,
      config: {
        duration:
          n.boostIndicator === s.percent ? 100 : Math.abs(Vi(n.currentIndicator, t.percent)),
      },
    });
  return (0, rr.jsxs)("div", {
    className: cs(ki, e),
    children: [
      (0, rr.jsx)("div", { className: Pi }),
      (0, rr.jsxs)("div", {
        className: Ei,
        children: [
          (0, rr.jsx)(Os.div, { className: Mi, style: c }),
          (0, rr.jsx)(Os.div, { className: Ai, style: o }),
          (0, rr.jsx)(Os.div, { className: Li, style: l }),
        ],
      }),
      (0, rr.jsxs)("div", {
        className: Ti,
        children: [
          (0, rr.jsx)(Os.div, { className: Di, style: c }),
          (0, rr.jsx)(Os.div, { className: Bi, style: o }),
          (0, rr.jsx)(Os.div, { className: Oi, style: l }),
        ],
      }),
    ],
  });
}
var Hi = "IndicatorContainer_f7506048",
  $i = "IndicatorContainer_indicator_b72c4e50";
function zi({ indicatorList: e, status: t }) {
  const a = Si(Qa(e) ?? [], e, t);
  return (0, rr.jsx)("div", {
    className: Hi,
    children: a.map((e, t) =>
      (0, jn.createElement)(Ri, {
        ...e,
        key: `${t}-${e.currentIndicator}-${e.currentIndicator}`,
        className: $i,
      }),
    ),
  });
}
var Fi = "ParamsType_d8788f0e",
  Wi = "ParamsType_icon_5f8d4ad",
  qi = "ParamsType_type_cdb8f019",
  Zi = "relativeArmor",
  Gi = "relativeCamouflage",
  Ui = "relativeMobility",
  Ki = "relativePower",
  Xi = "relativeVisibility",
  Yi = {
    [Zi]: (e) =>
      (0, rr.jsxs)("svg", {
        width: 20,
        height: 20,
        viewBox: "0 0 20 20",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        ...e,
        children: [
          (0, rr.jsx)("path", {
            opacity: 0.5,
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M9.29569 9.61133V3.25977H10.6957V9.61133L16.8742 13.0464L16.1742 14.2139L9.99569 10.7789L3.81719 14.2139L3.11719 13.0464L9.29569 9.61133Z",
            fill: "#D2D0CD",
          }),
          (0, rr.jsx)("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M5.10187 6.49957L10 3.77839L14.8989 6.5L10.0007 9.22118L5.10187 6.49957ZM4.40104 7.66692V13.11L9.30019 15.8317V10.3887L4.40104 7.66692ZM10.7012 15.831L15.599 13.11V7.66778L10.7012 10.3887V15.831ZM10 2.22168L17 6.11057V13.8883L10 17.7772L3 13.8883V6.11057L10 2.22168Z",
            fill: "#D2D0CD",
          }),
        ],
      }),
    [Gi]: (e) =>
      (0, rr.jsxs)("svg", {
        width: 20,
        height: 20,
        viewBox: "0 0 20 20",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        ...e,
        children: [
          (0, rr.jsxs)("g", {
            clipPath: "url(#clip0_27127_335393)",
            children: [
              (0, rr.jsx)("path", {
                d: "M10.3233 7.6932C11.6803 7.46513 12.4719 7.80724 12.4719 8.26338C12.585 9.17567 11.4043 8.93424 10.7382 9.28971C10.2387 9.55625 9.98397 10.316 10.7382 10.6581C11.4924 11.0003 11.9066 10.088 13.942 9.74585C15.1066 9.55012 17.1085 9.74585 16.9954 10.6581C16.8823 11.5704 15.5524 11.4065 14.2105 11.4065L14.1868 11.4065C13.3211 11.4065 12.4978 11.4064 11.7133 12.0845C10.9217 12.7687 10.5601 13.7456 8.83206 12.5968C8.06152 12.0845 3.18416 12.4742 6.51755 11.08C7.496 10.6707 4.92924 10.1505 4.13753 10.1505C2.89357 10.1505 2.63341 9.40375 3.53804 9.06164C4.64359 8.64355 5.23433 9.40374 6.13903 9.40374C7.04373 9.40374 7.1328 9.5223 8.06152 8.71953C8.8531 8.03531 9.24369 7.87464 10.3233 7.6932Z",
                fill: "#D2D0CD",
              }),
              (0, rr.jsx)("path", {
                d: "M14.2451 6.80456C13.9053 6.73791 13.5743 6.2496 13.1763 5.99885C12.6037 5.68234 11.5789 5.69876 10.4233 6.47163C9.44735 7.12435 8.58441 6.38277 9.67436 5.7132C11.0697 4.85603 10.1209 4.04512 11.7508 3.35035C13.0647 2.79028 13.0591 4.49009 14.724 4.23129C16.1016 4.01714 17.0189 3.57678 17.4663 3.88988C17.9139 4.20309 17.7761 4.49619 17.4734 4.86298C17.0847 5.33399 16.1039 5.01566 15.8712 5.53213C15.5417 6.26304 15.2118 6.99418 14.2451 6.80456Z",
                fill: "#D2D0CD",
              }),
              (0, rr.jsx)("path", {
                d: "M3.65677 11.8752C3.91003 12.1113 3.933 12.7008 4.13846 13.124C4.45736 13.6953 4.60039 14.1005 7.20039 14.2005C8.37263 14.2456 8.71465 15.2476 7.43548 15.2401C5.79794 15.2306 5.50039 16.3116 4.13846 16.1005C3.00039 15.9241 3.65063 14.3605 2.10039 13.7005C0.817594 13.1544 -0.403738 13.15 -0.618135 12.6478C-0.832611 12.1454 -0.560814 11.9693 -0.109992 11.8178C0.468936 11.6234 1.13336 12.4118 1.60389 12.0963C2.26977 11.6498 2.9362 11.2034 3.65677 11.8752Z",
                fill: "#D2D0CD",
              }),
              (0, rr.jsx)("path", {
                d: "M7.03325 5.49884C7.44349 5.18639 8.29271 5.25457 8.44498 4.38398C8.51764 3.96857 7.77647 3.38089 7.03453 3.85193C6.29258 4.38544 5.60339 4.08402 4.60339 3.99966C3.10339 3.49966 1.87978 3.61843 2.00096 5.49967C2.09896 7.02113 3.25358 5.4764 4.1039 5.79962C5.16166 6.2017 5.6039 7.24583 6.79672 6.89369C7.44572 6.7021 6.39614 5.98407 7.03325 5.49884Z",
                fill: "#D2D0CD",
              }),
              (0, rr.jsx)("path", {
                d: "M16.421 13.5552C17.0788 14.0132 16.9539 14.8998 15.7704 14.929C15.0745 14.9462 14.8019 15.304 14.4027 16.0748C13.9099 17.0263 13.3589 16.7857 12.4291 16.1397C11.748 15.6665 10.7038 16.5341 9.95888 16.2699C9.39692 16.0706 9.45965 14.8581 11.0309 14.9632C12.2072 15.0418 12.9269 14.5129 13.6254 14.0282C14.3239 13.5435 15.6049 12.9871 16.421 13.5552Z",
                fill: "#D2D0CD",
              }),
              (0, rr.jsx)("path", {
                d: "M9.69303 16.434C9.45979 16.1674 9.44324 15.6296 9.86155 15.2638C10.0859 15.3444 10.5541 15.507 10.6325 15.5122C10.7305 15.5188 12.312 15.4276 12.41 15.4342C12.4884 15.4394 13.2706 14.8353 13.6518 14.5326L15.6254 14.4676C14.2203 14.866 15.2005 16.4084 13.9 16.7153C12.8998 16.9513 12.7966 15.5584 11.8882 15.8915C11.0169 16.211 9.92627 16.7006 9.69303 16.434Z",
                fill: "#D2D0CD",
              }),
            ],
          }),
          (0, rr.jsx)("defs", {
            children: (0, rr.jsx)("clipPath", {
              id: "clip0_27127_335393",
              children: (0, rr.jsx)("rect", {
                width: 14,
                height: 14,
                fill: "white",
                transform: "translate(3 3)",
              }),
            }),
          }),
        ],
      }),
    [Ui]: (e) =>
      (0, rr.jsx)("svg", {
        width: 20,
        height: 20,
        viewBox: "0 0 20 20",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        ...e,
        children: (0, rr.jsx)("path", {
          d: "M12.0754 10.1454C12.0754 8.99248 11.1517 8.06516 10.0062 8.06516C8.86066 8.06516 7.93687 8.99248 7.93687 10.1454C7.93687 11.2982 8.86066 12.2256 10.0062 12.2256C10.2525 12.2256 10.4742 12.1754 10.6836 12.1003C15.3641 16.3734 16.5712 17 16.5712 17C16.5712 17 16.251 15.3584 11.9769 10.7594C12.0385 10.5589 12.0878 10.3584 12.0878 10.1328L12.0754 10.1454ZM10.0062 10.797C9.63664 10.797 9.34103 10.4962 9.34103 10.1328C9.34103 9.76942 9.63664 9.46867 10.0062 9.46867C10.3757 9.46867 10.6713 9.76942 10.6713 10.1328C10.6713 10.4962 10.3757 10.797 10.0062 10.797ZM10.0062 2C5.5843 2 2 5.54637 2 9.90727C2 12.3258 3.09623 14.4812 4.82063 15.9223L5.07929 15.5589C3.68745 14.0927 2.84988 12.0752 2.9361 10.0451C3.10855 5.93484 6.88992 3.41604 10.8437 4.13033C16.0785 5.07018 15.4627 10.3333 14.662 12.4386L16.6205 14.3559C17.495 13.0902 18 11.5614 18 9.90727C18 5.53383 14.4157 2 9.99384 2H10.0062Z",
          fill: "#D2D0CD",
        }),
      }),
    [Ki]: (e) =>
      (0, rr.jsx)("svg", {
        width: 20,
        height: 20,
        viewBox: "0 0 20 20",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        ...e,
        children: (0, rr.jsx)("path", {
          d: "M8.95 7.22333L4.69167 3L3 4.79667L7.235 8.99667L8.96167 7.22333H8.95ZM16.9883 4.79667L15.2967 3L11.0383 7.22333L12.765 8.99667L17 4.79667H16.9883ZM11.0383 12.7767L15.2967 17L16.9883 15.2033L12.7533 11.0033L11.0267 12.7767H11.0383ZM3 15.2033L4.69167 17L8.95 12.7767L7.22333 11.0033L3 15.2033Z",
          fill: "#D2D0CD",
        }),
      }),
    [Xi]: (e) =>
      (0, rr.jsx)("svg", {
        width: 20,
        height: 20,
        viewBox: "0 0 20 20",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        ...e,
        children: (0, rr.jsx)("path", {
          d: "M10 5C5.58552 5 2 9.25425 2 10.005C2 10.6657 5.58552 15 10 15C14.4145 15 18 10.7157 18 9.99499C18 9.27427 14.4145 5 10 5ZM10 13.8488C6.78402 13.8488 3.52809 10.4855 3.52809 9.99499C3.52809 9.44444 6.78402 6.14114 10 6.14114C13.216 6.14114 16.4719 9.46446 16.4719 9.99499C16.4719 10.5255 13.216 13.8488 10 13.8488ZM9.99001 6.86186C8.29213 6.86186 6.91386 8.26326 6.91386 9.98498C6.91386 11.7067 8.29213 13.1081 9.99001 13.1081C11.6879 13.1081 13.0762 11.7067 13.0762 9.98498C13.0762 8.26326 11.6979 6.86186 9.99001 6.86186Z",
          fill: "#D2D0CD",
        }),
      }),
  };
function Ji({ type: e }) {
  const t = ks.resolve("strings"),
    a = Yi[e];
  if (a)
    return (0, rr.jsxs)("div", {
      className: Fi,
      children: [
        (0, rr.jsx)(a, { className: Wi }),
        (0, rr.jsx)("div", { className: qi, children: t.readOrEmpty(`menu.tank_params.${e}`) }),
      ],
    });
  console.error(`Unknown ttc param ${e}`);
}
var Qi = "Section_5872c61",
  eo = "Section_container_5872c61",
  to = "Section_header_53353a5a",
  ao = "Section_detailsContainer_41624a97",
  so = "Section_arrow_931be12",
  no = "Section_arrow__opened_9ccaa82",
  ro = ks.resolve("aliases"),
  io = At(function ({
    indicatorList: e,
    status: t,
    type: a,
    opened: s,
    className: n,
    classNames: r,
    params: i,
    extraParams: o,
    tooltipID: l,
    ...c
  }) {
    const [d, u] = jn.useState(s),
      m = jn.useRef(0),
      { api: p } = Bt(),
      _ = It(),
      { controls: h, rootId: g } = ni();
    Wt(() => clearTimeout(m.current));
    const f = jn.useMemo(() => ({ tooltipId: l, paramId: a, extendedTooltip: !0 }), [a, l]),
      v = $e({
        resId: 0 !== g ? g : ro.read((e) => e.hangar.shared.VehicleParams("resId")),
        args: f,
      });
    return (0, rr.jsx)("div", {
      className: cs(Qi, n),
      children: (0, rr.jsxs)(Bs, {
        opened: d,
        children: [
          (0, rr.jsx)(Bs.Summary, {
            onClick: function (e) {
              (u(!d),
                _.play("click", { target: "vehicle-ttc-section:accordion-summary", original: e }),
                clearTimeout(m.current),
                s || h.selectGroup(a));
            },
            onMouseEnter: function (e) {
              _.play("mouse-enter", {
                target: "vehicle-ttc-section:accordion-summary",
                original: e,
              });
            },
            className: r?.summary,
            children: (0, rr.jsxs)("div", {
              className: eo,
              ...v,
              children: [
                (0, rr.jsxs)("div", {
                  className: to,
                  children: [
                    (0, rr.jsx)(Ji, { type: a }),
                    (0, rr.jsx)(Bs.Arrow, { className: cs(so, d && no) }),
                  ],
                }),
                (0, rr.jsx)(zi, { indicatorList: e, status: t }),
              ],
            }),
          }),
          (0, rr.jsx)(Bs.AnimatedDetails, {
            className: r?.accordionDetails,
            opened: i.length + o.length > 0 && d,
            animationSettings: {
              onRest: function () {
                (clearTimeout(m.current),
                  (m.current = window.setTimeout(() => {
                    (p.recalculateContent(), !d && s && h.selectGroup(a));
                  }, 50)));
              },
            },
            children: (0, rr.jsx)(wi, {
              ...c,
              rootId: g,
              params: i,
              extraParams: o,
              className: ao,
            }),
          }),
        ],
      }),
    });
  }),
  oo = {
    "media-wrapper": "TechParams_media-wrapper_b77d0f7c",
    root: "TechParams_root_b77d0f7c",
    base: "TechParams_b3ba50e6",
    verticalBar: "TechParams_verticalBar_bd5cdb1d",
    scrollWrapper: "TechParams_scrollWrapper_5abc1570",
    scrollContent: "TechParams_scrollContent_5121345d",
    scrollContent__top: "TechParams_scrollContent__top_6469f01f",
    scrollContent__bottom: "TechParams_scrollContent__bottom_a61f5879",
    scrollContent__both: "TechParams_scrollContent__both_8e38b624",
    sections: "TechParams_sections_9dd6eaf2",
    section: "TechParams_section_301fd6a1",
  },
  lo = At(function ({ indicatorAmount: e, classNames: t }) {
    const { model: a } = ni(),
      { api: s } = Bt(),
      [n, r] = $a(s);
    return (0, rr.jsxs)(rr.Fragment, {
      children: [
        (0, rr.jsx)(ca, {
          classNames: {
            wrapper: oo.scrollWrapper,
            content: cs(oo.scrollContent, oo[`scrollContent__${ui(n, r)}`]),
          },
          children: (0, rr.jsx)("div", {
            className: oo.sections,
            children: a.computes
              .sectionParams(e)
              .map((e) =>
                (0, jn.createElement)(io, {
                  ...e,
                  key: e.type,
                  className: oo.section,
                  classNames: t,
                }),
              ),
          }),
        }),
        (0, rr.jsx)(es, { classNames: { base: oo.verticalBar } }),
      ],
    });
  }),
  co = At(function ({ indicatorAmount: e = 10, className: t, classNames: a }) {
    const { model: s } = ni(),
      n = It();
    return (
      (0, jn.useEffect)(() => {
        n.play("animation", { target: "vehicle-ttc-section:accordion-summary" });
      }, [
        n,
        s.computes
          .sectionParams(e)
          .map(({ indicatorList: e }) => e.map((e) => Object.values(e).join(":")).join("-"))
          .join("_"),
      ]),
      (0, rr.jsx)("div", {
        className: cs(oo.base, t),
        children: (0, rr.jsx)(Xa, {
          children: (0, rr.jsx)(lo, { indicatorAmount: e, classNames: a }),
        }),
      })
    );
  }),
  uo = (function (e) {
    return (
      (e.Stereoscope = "stereoscope"),
      (e.Turbocharger = "turbocharger"),
      (e.EnhancedAimDrives = "enhancedAimDrives"),
      (e.CommandersView = "commandersView"),
      (e.Grousers = "grousers"),
      (e.AdditInvisibilityDevice = "additionalInvisibilityDevice"),
      (e.RadioCommunication = "improvedRadioCommunication"),
      (e.AntifragmentationLining = "antifragmentationLining"),
      (e.CamouflageNet = "camouflageNet"),
      (e.RotationMechanism = "improvedRotationMechanism"),
      (e.Ventilation = "improvedVentilation"),
      (e.HealthReserve = "extraHealthReserve"),
      (e.ImprovedSights = "improvedSights"),
      (e.Rammer = "tankRammer"),
      (e.CoatedOptics = "coatedOptics"),
      (e.AimingStabilizer = "aimingStabilizer"),
      (e.ImprovedConfiguration = "improvedConfiguration"),
      (e.ModernizedExtraHealthReserveAntifragmentationLining =
        "modernizedExtraHealthReserveAntifragmentationLining"),
      (e.ModernizedTurbochargerRotationMechanism = "modernizedTurbochargerRotationMechanism"),
      (e.ModernizedAimDrivesAimingStabilizer = "modernizedAimDrivesAimingStabilizer"),
      (e.ModernizedImprovedSightsEnhancedAimDrives = "modernizedImprovedSightsEnhancedAimDrives"),
      (e.Empty = ""),
      e
    );
  })({}),
  mo = (function (e) {
    return (
      (e.Visible = "visible"),
      (e.Hidden = "hidden"),
      (e.NotSuitableVehicle = "notSuitableVehicle"),
      (e.NoDataAtAll = "noDataAtAll"),
      e
    );
  })({}),
  po = (function (e) {
    return (
      (e[(e.NoData = 0)] = "NoData"),
      (e[(e.Normal = 1)] = "Normal"),
      (e[(e.Linked = 2)] = "Linked"),
      (e[(e.Combined = 3)] = "Combined"),
      e
    );
  })({}),
  _o = (function (e) {
    return ((e.Unknown = "unknown"), (e.Random = "random"), (e.Comp7 = "comp7"), e);
  })({}),
  ho = (function (e) {
    return ((e[(e.Common = 0)] = "Common"), (e[(e.Legendary = 1)] = "Legendary"), e);
  })({}),
  [go, fo] = ds("OptionalDevicesAssistantModel")(
    ({ observableModel: e }) => {
      const t = {
          ...e.primitives(["state"]),
          selectedPreset: e.object("selectedPreset"),
          optionalDevicesAssistantPresets: e.arrayClone("optionalDevicesAssistantPresets"),
        },
        a = () =>
          Ve(t.optionalDevicesAssistantPresets.get(), (e) => ({
            ...e,
            optionalDevicesAssistantItems: Ve(e.optionalDevicesAssistantItems, (e) => ({
              ...e,
              items: Ve(e.items, E),
            })),
          })),
        s = (e) =>
          Fe(
            t.optionalDevicesAssistantPresets.get(),
            (t, a) => {
              if (a.presetType.mType === e) {
                const e = Ve(a.optionalDevicesAssistantItems, (e) => ({
                  ...e,
                  items: Ve(e.items, E),
                }));
                t.push(...e);
              }
              return t;
            },
            [],
          ),
        n = Na.primitive(() => s(1).sort((e, t) => t.popularity - e.popularity)),
        r = Na.primitive(() => s(0).sort((e, t) => t.popularity - e.popularity));
      return {
        ...t,
        computes: {
          modeType: () => {
            const e = ho.Common || ho.Legendary;
            return a().find((t) => t.presetType.mType === e)?.modeType;
          },
          sortedCommonItems: r,
          sortedLegendaryItems: n,
          sourceVehicleCompDescrForPreset: (e) => {
            const t = a().find((t) => t.presetType.mType === e);
            return t ? t.sourceVehicleCompDescr : null;
          },
          optionalDevicesResultTypeForPreset: (e) => {
            const t = a().find((t) => t.presetType.mType === e);
            return t ? t.optionalDevicesResultType : 0;
          },
        },
      };
    },
    ({ externalModel: e }) => ({
      changePreset: e.createCallback((e) => ({ presetType: e }), "onPresetSelected"),
    }),
  ),
  vo = "PopularLoadouts_905d92af",
  bo = "PopularLoadouts_base__legendary_44c73d25",
  xo = "PopularLoadouts_lipsIcon_94b94918",
  yo = "PopularLoadouts_base__linked_44c73d25",
  Co = "PopularLoadouts_lips_f8140539",
  jo = "PopularLoadouts_base__noDataLegendary_44c73d25",
  wo = "PopularLoadouts_row_empty_79f784c5",
  No = "PopularLoadouts_noDataLegendary_8871a45c",
  Io = "PopularLoadouts_noData_44c73d25",
  So = "PopularLoadouts_vehicleNotAvailable_6aaecb23",
  ko = "PopularLoadouts_noData_text_44c73d25",
  Po = "PopularLoadouts_vehicleNotAvailable_text_f6a0ffe8",
  Eo = "PopularLoadouts_scrollWrapper_f6e40aea",
  Mo = "PopularLoadouts_scroll_5547fb14",
  Lo = "PopularLoadouts_verticalBar_4b7df3ca",
  Ao = "PopularLoadouts_background_59528a5b",
  To = "PopularLoadouts_onslaughtBackground_87fd615d",
  Do = "PopularLoadouts_backgroundWrapper_ceadd975",
  Bo = "PopularLoadouts_backgroundWrapper__noData_577b30c5",
  Oo = "PopularLoadouts_border_bb3c99b0",
  Vo = "PopularLoadouts_container_7ca114a3",
  Ro = "PopularLoadouts_row_41e986f6",
  Ho = "PopularLoadouts_row_images_11958d34",
  $o = "PopularLoadouts_row_images__hovered_6d465f9f",
  zo = "PopularLoadouts_row_image_44c73d25",
  Fo = "PopularLoadouts_row_emptySlot_19879be4",
  Wo = "PopularLoadouts_popularity_85b17be2",
  qo = "PopularLoadouts_popularity__visible_99ebbe75",
  Zo = "PopularLoadouts_lipsWrapper_f6e40aea",
  Go = "PopularLoadouts_footer_e8f21254",
  Uo = "PopularLoadouts_footer_wrapper_2b5337f0",
  Ko = "PopularLoadouts_footer_wrapper_title_ddd0fc04",
  Xo = "PopularLoadouts_footer_wrapper_pagination_f70ced5f",
  Yo = "PopularLoadouts_dot1_859b9d81",
  Jo = "PopularLoadouts_dot2_290c1eaf",
  Qo = "PopularLoadouts_dot1__active_44c73d25",
  el = "PopularLoadouts_dot2__active_22013c6c",
  tl = "PopularLoadouts_footer_arrowWrapper_2b51cfb1",
  al = "PopularLoadouts_footer_arrowLeft_44c73d25",
  sl = "PopularLoadouts_footer_arrowRight_f495386";
function nl(e) {
  return (t = e) !== uo.Empty &&
    t in R.images.gui.maps.icons.tanksetup.popular_loadouts.optional_devices
    ? `tanksetup.popular_loadouts.optional_devices.${e}`
    : null;
  var t;
}
function rl(e) {
  return Number.isInteger(e) ? `${e}` : e.toFixed(2);
}
function il({ popularity: e, optionalDevice: t, isHovered: a }) {
  const s = (0, jn.useMemo)(() => t.map(nl).concat(new Array(3).fill(null)).slice(0, 3), [t]),
    n = 0 === t.length;
  return (0, rr.jsxs)("div", {
    className: cs(Ro, n && wo),
    children: [
      (0, rr.jsx)("div", {
        className: cs(Wo, a && qo),
        children: (0, rr.jsx)(g, {
          upgradeLegacy: !0,
          path: "common.percentValue",
          params: { value: rl(e) },
        }),
      }),
      (0, rr.jsx)("div", {
        className: cs(Ho, a && $o),
        children: s.map((e, t) =>
          e
            ? (0, rr.jsx)(_s, { className: zo, path: e }, t)
            : (0, rr.jsx)("div", { className: Fo }, t),
        ),
      }),
    ],
  });
}
var ol = ks.resolve("aliases"),
  ll = ks.resolve("views"),
  cl = ks.resolve("strings"),
  dl = Hs(function ({
    notSuitableVehicle: e,
    noData: t,
    combined: a,
    noDataLegendary: s,
    currentPage: n,
    optionalDevicesResultType: r,
    setCurrentPage: i,
  }) {
    const o = It(),
      [l, c] = (0, jn.useState)(!1),
      { model: d, controls: u } = fo(),
      m = d.computes.modeType() === _o.Comp7,
      p = l && !a,
      _ = d.computes.sourceVehicleCompDescrForPreset(n),
      h = d.computes.sortedCommonItems(),
      g = d.computes.sortedLegendaryItems(),
      f = n === ho.Common ? h : g,
      v = (0, jn.useMemo)(
        () => Array.from({ length: 3 }, (e, t) => f[t] ?? { popularity: 0, items: [] }),
        [f],
      ),
      b = S({
        resId: ol.read((e) => e.hangar.shared.OptionalDevicesAssistant("resId")),
        contentId: ll.read((e) => e.lobby.tanksetup.tooltips.PopularLoadoutsTooltip("resId")),
        args: { sourceVehicleCompDescr: _, optionalDevicesResultType: r },
      }),
      x =
        n === ho.Common
          ? cl.readOrEmpty("tank_setup.popularLoadouts.common")
          : cl.readOrEmpty("tank_setup.popularLoadouts.legendary");
    function y() {
      const e = n === ho.Common ? ho.Legendary : ho.Common;
      (i(e), u.changePreset(e));
    }
    if (e)
      return (0, rr.jsx)("div", {
        className: So,
        children: (0, rr.jsx)("div", {
          className: Po,
          children: cl.readOrEmpty("tank_setup.popularLoadouts.vehicleNotAvailable"),
        }),
      });
    if (t)
      return (0, rr.jsx)("div", {
        className: Io,
        children: (0, rr.jsx)("div", {
          className: ko,
          children: cl.readOrEmpty("tank_setup.popularLoadouts.noData"),
        }),
      });
    function C(e) {
      (o.play("click", { target: "loadout:popular-loadouts-content:arrow-wrapper", original: e }),
        y());
    }
    function j(e) {
      o.play("mouse-enter", {
        target: "loadout:popular-loadouts-content:arrow-wrapper",
        original: e,
      });
    }
    return (0, rr.jsxs)(rr.Fragment, {
      children: [
        (0, rr.jsx)("div", { className: Oo }),
        s &&
          (0, rr.jsx)("div", {
            className: No,
            children: cl.readOrEmpty("tank_setup.popularLoadouts.noDataLegendary"),
          }),
        (0, rr.jsx)("div", { className: Ao }),
        m && (0, rr.jsx)("div", { className: To }),
        (0, rr.jsx)("div", {
          className: Eo,
          children: (0, rr.jsxs)(Xa, {
            children: [
              (0, rr.jsx)(ca, {
                className: Mo,
                children: (0, rr.jsx)("div", {
                  className: Vo,
                  onMouseEnter: (e) => {
                    (o.play("mouse-enter", {
                      target: "loadout:popular-loadouts-content:container",
                      original: e,
                    }),
                      c(!0));
                  },
                  onMouseLeave: () => c(!1),
                  children: v.map((e, t) =>
                    (0, rr.jsx)(
                      il,
                      { popularity: e.popularity, optionalDevice: e.items, isHovered: p },
                      t,
                    ),
                  ),
                }),
              }),
              (0, rr.jsx)(es, { classNames: { base: Lo } }),
            ],
          }),
        }),
        (0, rr.jsx)("div", { className: Oo }),
        (0, rr.jsx)("div", { className: Co }),
        (0, rr.jsxs)("div", {
          className: Go,
          children: [
            (0, rr.jsx)("div", {
              className: tl,
              onMouseEnter: j,
              onClick: C,
              children: (0, rr.jsx)("div", { className: al, onClick: y }),
            }),
            (0, rr.jsxs)("div", {
              className: Uo,
              children: [
                (0, rr.jsxs)("div", {
                  ...b,
                  className: Zo,
                  children: [
                    (0, rr.jsx)("div", { className: xo }),
                    (0, rr.jsx)("div", { className: Ko, children: x }),
                  ],
                }),
                (0, rr.jsxs)("div", {
                  className: Xo,
                  children: [
                    (0, rr.jsx)("div", { className: cs(Yo, 0 === n && Qo) }),
                    (0, rr.jsx)("div", { className: cs(Jo, 1 === n && el) }),
                  ],
                }),
              ],
            }),
            (0, rr.jsx)("div", {
              className: tl,
              onMouseEnter: j,
              onClick: C,
              children: (0, rr.jsx)("div", { className: sl, onClick: y }),
            }),
          ],
        }),
      ],
    });
  }),
  ul = Hs(function () {
    const { model: e } = fo(),
      [t, a] = (0, jn.useState)(e.selectedPreset.get().mType || ho.Common),
      s = e.computes.optionalDevicesResultTypeForPreset(t),
      n = s === po.Linked,
      r = s === po.Combined,
      i = n || r,
      o = s === po.NoData && ho.Legendary,
      l = e.state.get() === mo.NoDataAtAll,
      c = e.state.get() === mo.NotSuitableVehicle;
    return (0, rr.jsxs)("div", {
      className: cs(vo, t === ho.Legendary && bo, i && yo, o && jo),
      children: [
        (0, rr.jsx)("div", { className: cs(Do, (l || c) && Bo) }),
        (0, rr.jsx)(dl, {
          notSuitableVehicle: c,
          noData: l,
          noDataLegendary: o,
          combined: r,
          optionalDevicesResultType: s,
          currentPage: t,
          setCurrentPage: a,
        }),
      ],
    });
  }),
  ml = "EquipmentAssistant_c5998863",
  pl = Hs(function ({ className: e }) {
    const { model: t } = fo(),
      a = t.state.get() === mo.Hidden;
    return (0, rr.jsx)("div", {
      className: cs(ml, e),
      "data-test-id": "equipmentAssistant",
      children: !a && (0, rr.jsx)(ul, {}),
    });
  }),
  _l = "TankInfo_5a43ab26",
  hl = "TankInfo_ttc_b7c2d1d7",
  gl = "TankInfo_techParams_3f23a8c3",
  fl = "TankInfo_text_3d2affa7",
  vl = "TankInfo_equipmentAssistant_6633e061",
  bl = "TankInfo_vehicleInfo_6633e061",
  xl = "TankInfo_summary_1066f4ee",
  yl = "TankInfo_accordionDetails_e30a5dd6",
  Cl = ks.resolve("aliases"),
  jl = Ss("LoadoutScreenTankInfo"),
  wl = Oe({ summary: xl, accordionDetails: yl }),
  Nl = Hs(function ({ rootId: e, className: t, children: a }) {
    const s = er().model.selectedVehicle(),
      n = er().model.selectedVehicleStatistics();
    if (s && n)
      return (0, rr.jsxs)(jl, {
        className: cs(_l, t),
        children: [
          (0, rr.jsxs)(ee, {
            className: bl,
            children: [
              (0, rr.jsx)(ee.Level, { className: fl, value: s.level }),
              xt(s.type) && (0, rr.jsx)(ee.Type, { type: s.type, premium: n.elite }),
              (0, rr.jsx)(ee.Name, { className: fl, children: s.shortName }),
            ],
          }),
          (0, rr.jsx)("div", {
            className: hl,
            children: (0, rr.jsx)(si, {
              options: { rootId: e ?? Cl.read((e) => e.hangar.shared.VehicleParams("resId")) },
              children: (0, rr.jsx)(co, { className: gl, classNames: wl }),
            }),
          }),
          a,
        ],
      });
  });
function Il({ className: e }) {
  return (0, rr.jsx)(go, {
    options: { rootId: Cl.read((e) => e.hangar.shared.OptionalDevicesAssistant("resId")) },
    children: (0, rr.jsx)(pl, { className: cs(vl, e) }),
  });
}
var Sl = Hs(function ({ className: e }) {
    return (0, rr.jsx)(Nl, {
      className: e,
      children: ct().location.startsWith("/hangar/loadout/equipment") && (0, rr.jsx)(Il, {}),
    });
  }),
  kl = "ScreenWrapper_39a2fe74",
  Pl = "ScreenWrapper_inner_f586f6da",
  El = "ScreenWrapper_content_42e9ccec",
  Ml = "ScreenWrapper_info_b6387d23",
  Ll = "ScreenWrapper_flag_bc3e1d2e",
  Al = ks.resolve("aliases"),
  Tl = Ss("LoadoutScreenWrapper", kl),
  Dl = Ss("ScreenWrapperInfo", Ml),
  Bl = Ss("ScreenWrapperContent", El);
var Ol = (0, jn.createContext)({ ttcEnabled: !1 });
function Vl({ classNames: e, children: t }) {
  const a = er().model.selectedVehicle();
  return (0, rr.jsxs)(Tl, {
    className: e?.base,
    children: [
      a &&
        (0, rr.jsx)(_s, { className: cs(Ll, e?.flag), path: `flags.c_600x450.${Pt(a.nationId)}` }),
      (0, rr.jsx)("div", { className: Pl, children: t }),
    ],
  });
}
var Rl = Hs(function ({ classNames: e, children: t }) {
    const a = (function () {
        const e = er().model.selectedVehicle(),
          t = qr(),
          a = $(Al.read((e) => e.hangar.shared.VehicleParams("resId")));
        return Boolean(e) && (!t || t.model.computed.ttcEnabled()) && a;
      })(),
      s = (0, jn.useMemo)(() => ({ ttcEnabled: a }), [a]);
    return (0, rr.jsx)(Ol.Provider, {
      value: s,
      children: (0, rr.jsxs)(Vl, {
        classNames: { base: e?.base, flag: e?.flag },
        children: [
          (0, rr.jsx)(Bl, { className: e?.content, children: t }),
          (0, rr.jsx)(Dl, {
            className: e?.info,
            children: a && (0, rr.jsx)(Sl, { className: e?.tankInfo }),
          }),
        ],
      }),
    });
  }),
  Hl = { buySlot: "buySlot", buyTank: "buyTank", restoreTank: "restoreTank", rentTank: "rentTank" },
  $l = {
    [Hl.buySlot]: "buy_slot",
    [Hl.buyTank]: "buy_vehicle_new",
    [Hl.restoreTank]: "restore_vehicle",
    [Hl.rentTank]: "wot_plus_slot",
  },
  zl = (e, t) => ({
    left: [...(t != Jn ? [Hl.rentTank] : [])],
    right: [Hl.buyTank, ...(e > 0 ? [Hl.restoreTank] : []), Hl.buySlot],
  }),
  Fl = (e) => e in Hl;
function Wl(e, t) {
  return (0, jn.useMemo)(() => {
    if (!t) return { currentIndex: -1, currentPosition: -1 };
    const a = e.indexOf(t);
    return { currentIndex: a, currentPosition: a >= 0 ? a + 1 : -1 };
  }, [e, t]);
}
function ql(e, t, a, s, n, r) {
  const i = (0, jn.useRef)(null);
  (0, jn.useLayoutEffect)(() => {
    function o() {
      const o = e.getWrapperSize(),
        l = e.animationScroll.scrollPosition.get();
      if (!o) return;
      r && e.applyScroll(0, { immediate: !0 });
      const c = a - V(1),
        d = l,
        u = l + o,
        m = c * Math.floor(t / s),
        p = m + c,
        _ = m - (Math.floor(o / c) / 2) * c;
      if (m > d && p < u)
        return (
          i.current && n && i.current - n !== 0 && e.applyScroll(_, { immediate: !0 }),
          void (i.current = n)
        );
      ((i.current = n), e.applyScroll(_, { immediate: !0 }));
    }
    return (
      o(),
      new me().add(e.events.on("resizeHandled", o)).add(e.events.on("recalculateContent", o))
        .dispose
    );
  }, [t, e, a, s, r, n]);
}
var Zl = "Content_7ccb81a0",
  Gl = "Content_disabledOverlay_a8908196",
  Ul = "Content_base__disabled_da09528a",
  Kl = "Content_base__selected_da09528a",
  Xl = "Content_base__empty_da09528a";
function Yl({ children: e, selected: t, disabled: a, empty: s }) {
  return (0, rr.jsxs)("div", {
    "data-name": "Content",
    className: cs(Zl, s && Xl, t && Kl, a && Ul),
    children: [e, a && (0, rr.jsx)("div", { className: Gl })],
  });
}
var Jl = "Slot_977dd8f1",
  Ql = "Slot_base__wrapper_ae3081b5",
  ec = "Slot_base__disabled_334cc10f",
  tc = "Slot_base__empty_d386066c",
  ac = "Slot_content_1a27c8cf",
  sc = "Slot_base__active_71f19f5c",
  nc = "Slot_base__selected_71f19f5c",
  rc = "Slot_selected_6e9f21df",
  ic = "Slot_selected__border_e2a17304",
  oc = (0, jn.memo)(function ({
    children: e,
    selected: t = !1,
    disabled: a = !1,
    active: s,
    className: n,
    ...r
  }) {
    const i = a || void 0 === r.onClick;
    return (0, rr.jsx)("div", {
      ...r,
      "data-name": "Slot",
      className: cs(Jl, s && sc, t && nc, a && ec, i && tc, Ql, n),
      children: (0, rr.jsxs)("div", {
        className: ac,
        children: [
          (0, rr.jsx)(Yl, { selected: t, disabled: a, empty: i, children: e }),
          t && (0, rr.jsx)("div", { className: cs(rc, ic) }),
          (0, rr.jsx)("div", { className: rc }),
        ],
      }),
    });
  }),
  lc = "ActionCards_wrapper_690d669a",
  cc = "ActionCards_text_cdbc926",
  dc = "ActionCards_wrapper__double_70640c01",
  uc = "ActionCards_content_a46de8cf",
  mc = "ActionCards_content__buySlot_a70e9708",
  pc = "ActionCards_icon_f8219d70",
  _c = "ActionCards_contentIcon_166df330",
  hc = "ActionCards_currency_ac7c654f",
  gc = "ActionCards_discount_967a7825",
  fc = {
    [Xn]: "menu.tankCarousel.wotPlusSelectionPending",
    [Yn]: "menu.tankCarousel.wotPlusSelectionAvailable",
  },
  vc = At(function ({ type: e }) {
    const t = er(),
      a = t.model.slots.price.currency.get(),
      s = t.model.slots.price.value.get(),
      n = t.model.slots.free.get(),
      r = t.model.slots.recover.get(),
      i = t.model.slots.discount.get(),
      o = t.model.telecomRentStatus.get();
    if (e === Hl.buySlot)
      return (0, rr.jsx)("div", {
        className: hc,
        children: (0, rr.jsx)(Ge, {
          type: Ce.currency,
          size: d.extraSmall,
          enabled: i,
          classNames: { icon: gc },
          children: (0, rr.jsx)(k, {
            type: a,
            size: d.extraSmall,
            reverse: !0,
            classNames: { base: cs(uc, mc), icon: _c },
            children: s,
          }),
        }),
      });
    if (e === Hl.rentTank) {
      const e = fc[o];
      return e ? (0, rr.jsx)(g, { className: cc, upgradeLegacy: !0, path: e }) : null;
    }
    return (0, rr.jsxs)("div", {
      className: uc,
      children: [
        e === Hl.buyTank &&
          (0, rr.jsx)(g, {
            upgradeLegacy: !0,
            path: "menu.tankCarousel.vehicleStates.buyTankEmptyCount",
            params: { count: n },
          }),
        e === Hl.restoreTank &&
          (0, rr.jsx)(g, {
            upgradeLegacy: !0,
            path: "menu.tankCarousel.vehicleStates.restoreTankCount",
            params: { count: r },
          }),
      ],
    });
  });
function bc({ type: e, width: t, height: a, doubleRow: s, className: n }) {
  const r = er(),
    i = It(),
    o = r.model.slots.price.value.get(),
    l = r.model.slots.price.defaultValue.get(),
    c = r.model.slots.discount.get();
  r.model.telecomRentStatus.get();
  const d = ks.resolve("strings"),
    u = ps(`hangar.carousel.actionCards.x48x48.${e}`, `hangar.carousel.actionCards.x96x96.${e}`),
    m = bs({
      header: d.readOrEmpty(`tooltips.tanks_carousel.${$l[e]}.header`),
      body: d.readOrEmpty(`tooltips.tanks_carousel.${$l[e]}.body`),
    }),
    p = Ze(
      "actionSlotPrice",
      (0, jn.useMemo)(() => [[o], [l]], [o, l]),
      (0, jn.useMemo)(() => ({ disabled: !c }), [c]),
    ),
    _ = c && $l[e] === $l.buySlot ? p : m;
  return (0, rr.jsx)(oc, {
    ..._,
    className: n,
    style: { width: void 0 !== t ? `${t}px` : void 0, height: void 0 !== a ? `${a}px` : void 0 },
    "data-test-id": e,
    onClick: function (t) {
      (_.onClick(), i.play("click", { target: "vehicle:action-cards", original: t }));
      const a = {
        [Hl.buySlot]: r.controls.buySlot,
        [Hl.buyTank]: r.controls.goBuyVehicle,
        [Hl.restoreTank]: r.controls.goRecoverVehicle,
        [Hl.rentTank]: r.controls.selectTelecomRentalVehicle,
      }[e];
      if ("function" != typeof a)
        return console.error(`Unknown action type ${e} in ${bc.name} handleClick`);
      a();
    },
    onMouseEnter: function (e) {
      (_.onMouseEnter(e), i.play("mouse-enter", { target: "vehicle:action-cards", original: e }));
    },
    children: (0, rr.jsxs)("div", {
      className: cs(lc, s && dc),
      children: [
        (0, rr.jsx)(_s, {
          className: pc,
          path: `hangar.carousel.actionCards.x32x32.${e}`,
          adaptive: { medium: { path: u } },
        }),
        (0, rr.jsx)("div", {
          className: cc,
          children: (0, rr.jsx)(g, { path: `menu.tankCarousel.vehicleStates.${e}` }),
        }),
        (0, rr.jsx)(vc, { type: e }),
      ],
    }),
  });
}
var xc = "54033",
  yc = "50705",
  Cc = "56833",
  jc = "51201",
  wc = { [xc]: "alpha", [yc]: "alpha", [jc]: "super", [Cc]: "super" },
  Nc = "ammoNotFull",
  Ic = "crewNotFull",
  Sc = "exploded",
  kc = "destroyed",
  Pc = "damaged",
  Ec = "rentable",
  Mc = "rentableAgain",
  Lc = "rentalIsOver",
  Ac = "tooHeavy",
  Tc = "unsuitableToQueue",
  Dc = "unsuitableToUnit",
  Bc = "inPrebattle",
  Oc = "battle",
  Vc = "wot_plus_exclusive_vehicle_disabled",
  Rc = {
    [Nc]: "ammo",
    [Ic]: "crew",
    [Sc]: "repair",
    [kc]: "repair",
    [Pc]: "repair",
    [Ec]: "rental",
    [Mc]: "rental",
    [Lc]: "rental",
    [Ac]: "notSuitable",
    [Tc]: "notSuitable",
    [Dc]: "notSuitable",
    [Bc]: "inPlatoon",
    [Oc]: "inBattle",
    [Vc]: "notSuitable",
  };
function Hc(e, t, a) {
  return !(!e || "disabled" === t || !a) && a.status !== Tc && a.maxBpScore > 0;
}
function $c(e) {
  return e > 2;
}
var [zc, Fc, Wc] = ds()(({ observableModel: e }) => ({
    ...e.primitives(["isCrystalEarnEnabled", "isDailyMultipliedXpEnabled", "isInfiniteAmmo"]),
  })),
  qc = () => (0, jn.useContext)(Wc.Context),
  Zc = {
    "media-wrapper": "ProBoost_media-wrapper_7b71aa2e",
    root: "ProBoost_root_7b71aa2e",
    base: "ProBoost_7490b440",
    arrow: "ProBoost_arrow_346b5e61",
    glow: "ProBoost_glow_280ac9aa",
    base__double: "ProBoost_base__double_b53eea3f",
    base__active: "ProBoost_base__active_7b71aa2e",
    corner: "ProBoost_corner_9f13801e",
    base__activating: "ProBoost_base__activating_7b71aa2e",
    "arrow-brightness-activating": "ProBoost_arrow-brightness-activating_7b71aa2e",
    "arrow-translation-activating": "ProBoost_arrow-translation-activating_7b71aa2e",
    "glow-activating": "ProBoost_glow-activating_7b71aa2e",
    triangle: "ProBoost_triangle_ae0f2fba",
    "triangle-opacity-activating": "ProBoost_triangle-opacity-activating_7b71aa2e",
    "triangle-translation-activating": "ProBoost_triangle-translation-activating_7b71aa2e",
    triangle__1: "ProBoost_triangle__1_1cb04326",
    triangle__2: "ProBoost_triangle__2_39aff7fd",
    triangle__3: "ProBoost_triangle__3_e738f7f2",
    base__deactivating: "ProBoost_base__deactivating_7b71aa2e",
    "arrow-deactivating": "ProBoost_arrow-deactivating_7b71aa2e",
  },
  Gc = {
    inactive: Zc.base__inactive,
    activating: Zc.base__activating,
    active: Zc.base__active,
    deactivating: Zc.base__deactivating,
  };
function Uc({ className: e, doubleRow: t, state: a = "inactive", isCornerHidden: s = !1 }) {
  return "inactive" === a
    ? null
    : (0, rr.jsxs)("div", {
        className: cs(Zc.base, a && Gc[a], t && Zc.base__double, e),
        children: [
          (0, rr.jsx)("div", { className: Zc.glow }),
          !s && (0, rr.jsx)("div", { className: Zc.corner }),
          (0, rr.jsx)("div", { className: Zc.arrow }),
          [Zc.triangle__1, Zc.triangle__2, Zc.triangle__3].map((e) =>
            (0, rr.jsx)("div", { className: cs(Zc.triangle, e) }, e),
          ),
        ],
      });
}
var Kc = "Background_1089bc1c",
  Xc = "Background_wotPlus_3cf6035a",
  Yc = "Background_crystal_6112fa42",
  Jc = "Background_bpBonus_cf76872",
  Qc = "Background_multiplier_284cda6c",
  ed = "Background_flag_beb58b8",
  td = "Background_base__double_26effab7",
  ad = "Background_flag__active_de322c1b",
  sd = "Background_vehicle_23ef6e2b",
  nd = "Background_vehicle__dimmed_7f14a6c7",
  rd = "Background_crystal__limit_61072361",
  id = Ss("Favorite", "Background_favorite_d98f92cc", {
    variants: { active: { true: "Background_favorite__active_7f14a6c7" } },
  });
function od({ nationId: e, selected: t, active: a, className: s }) {
  return (0, rr.jsx)(_s, {
    className: cs(ed, t || (a && ad), s),
    path: `hangar.carousel.cards.flags.x400x300.${Pt(e)}`,
    position: "top left",
  });
}
var ld = At(function ({ vehicle: e, statistic: t, validBP: a, doubleRow: s, classNames: n }) {
  const r = qc()?.model,
    i = r?.isCrystalEarnEnabled.get() ?? !0,
    o =
      (Ns(t?.numberOfCrystalEarned ?? [], 1) ?? 0) <= (Ns(t?.numberOfCrystalEarned ?? [], 0) ?? 0),
    l = t?.proBoostActive,
    c = t?.fromWotPlus,
    d = i && e.crystalEarning && !c,
    u = Qa(l),
    m = (r?.isDailyMultipliedXpEnabled.get() ?? !0) && $c(Number(t?.bonusMultiplier)),
    p = (0, jn.useMemo)(
      () => (l ? (!1 === u ? "activating" : "active") : u ? "deactivating" : "inactive"),
      [l, u],
    );
  return (0, rr.jsxs)(rr.Fragment, {
    children: [
      c && (0, rr.jsx)("div", { className: cs(Xc, n?.wotPlus) }),
      (0, rr.jsx)(Uc, { state: p, className: n?.proBoostIcon, doubleRow: s, isCornerHidden: d }),
      d && (0, rr.jsx)("div", { className: cs(Yc, o && rd, n?.crystal) }),
      t?.bpSpecial && a && (0, rr.jsx)("div", { className: cs(Jc, n?.bpBonus) }),
      m && (0, rr.jsx)("div", { className: Qc }),
    ],
  });
});
function cd({
  vehicle: e,
  validBP: t,
  dimmed: a,
  active: s,
  statistic: n,
  selected: r,
  doubleRow: i,
  ...o
}) {
  return (0, rr.jsxs)("div", {
    ...o,
    className: cs(Kc, i && td, o.className),
    children: [
      (0, rr.jsx)(od, { nationId: e.nationId, active: s, selected: r }),
      (0, rr.jsx)(xs, {
        className: cs(sd, ((n?.status && "undamaged" !== n.status) || a) && nd),
        name: e.name,
      }),
      (0, rr.jsx)(ld, { vehicle: e, statistic: n, validBP: t, doubleRow: i }),
      (0, rr.jsx)(id, { active: e.favorite }),
    ],
  });
}
var dd = "Bonuses_8169b4b3",
  ud = "Bonuses_bonus_91f120c3",
  md = "Bonuses_bonus__active_2364401e",
  pd = "Bonuses_bonusIcon_b65fb47f",
  _d = "Bonuses_bonusValue_322db074",
  hd = "Bonuses_bonusValue__highlighted_4bcc07c6",
  gd = "Bonuses_rent_ea11a7e4",
  fd = "Bonuses_base__double_ca1cd57b",
  vd = "Bonuses_icon_3991db74",
  bd = "Bonuses_text_a556857c",
  xd = ks.resolve("strings");
function yd({
  bonusMultiplier: e,
  vehicleId: t,
  restBonusEnabled: a,
  className: s,
  classNames: n,
}) {
  const r = $c(e),
    i = S({
      resId: R.aliases.hangar.shared.VehiclesStatistics("resId"),
      contentId: R.views.mono.rest_bonus.tooltips.rest_bonus_tooltip("resId"),
      args: { intCD: t },
      disabled: !a,
    });
  return (0, rr.jsxs)("div", {
    className: cs(ud, -1 !== e && md, s),
    ...i,
    children: [
      (0, rr.jsx)("div", { className: cs(pd, n?.icon) }),
      (0, rr.jsx)("div", {
        className: cs(_d, n?.value, r && hd),
        children: `${xd.readOrEmpty("common.multiplierSmall")}${e}`,
      }),
    ],
  });
}
var Cd = At(function ({ vehicle: e, statistic: t, doubleRow: a, ...s }) {
    const n = qc()?.model.isDailyMultipliedXpEnabled.get() ?? !0;
    return (0, rr.jsxs)("div", {
      ...s,
      className: cs(dd, a && fd, s.className),
      children: [
        n &&
          t &&
          (0, rr.jsx)(yd, {
            bonusMultiplier: t.bonusMultiplier,
            vehicleId: e.vehicleId,
            restBonusEnabled: t.restBonusEnabled,
          }),
        (0, rr.jsx)(ze.ShortCounter, {
          time: e.rent.leftTime,
          wins: e.rent.leftWins,
          battles: e.rent.leftBattles,
          classNames: { base: gd, icon: vd, text: bd },
        }),
      ],
    });
  }),
  jd = {
    "media-wrapper": "Information_media-wrapper_6e8d4f26",
    root: "Information_root_6e8d4f26",
    base: "Information_dd628d50",
    info: "Information_info_b2948982",
    details: "Information_details_e5340a0c",
    base__double: "Information_base__double_6e8d4f26",
    text: "Information_text_a2b2c19b",
    text__level: "Information_text__level_e5a9014e",
    text__premium: "Information_text__premium_741ebb2f",
    truncatedText: "Information_truncatedText_ede7ae03",
    battlePass: "Information_battlePass_63749625",
    battlePass__bonus: "Information_battlePass__bonus_6e8d4f26",
    battlePass__active: "Information_battlePass__active_960b5eed",
    bpPoints: "Information_bpPoints_21ee2e63",
    points: "Information_points_b67585b1",
    points__slash: "Information_points__slash_b8c7004e",
    bpShadow: "Information_bpShadow_4248ba9f",
    bpIcon: "Information_bpIcon_a622154",
    prestige: "Information_prestige_95cc4ef2",
    prestige__active: "Information_prestige__active_960b5eed",
    identifier: "Information_identifier_1bcd619a",
    identifier__changeNation: "Information_identifier__changeNation_665b13a2",
    identifier__alpha: "Information_identifier__alpha_6e8d4f26",
    identifier__super: "Information_identifier__super_46b1ed0d",
    identifier__rent: "Information_identifier__rent_1fba5dce",
    identifierIcon: "Information_identifierIcon_3636b34b",
    identifierIcon__alpha: "Information_identifierIcon__alpha_ddf4d235",
    identifierIcon__super: "Information_identifierIcon__super_34b8f5c2",
    identifierIcon__changeNation: "Information_identifierIcon__changeNation_dfee83c8",
  },
  wd = Ss("VehicleName", {
    element: (e) => (0, rr.jsx)(ee.Name, { ...e }),
    className: jd.text,
    cva: { variants: { premium: { true: jd.text__premium } } },
  });
function Nd({ statistic: e, vehicle: t, className: a, status: s }) {
  const n = ks.resolve("views"),
    r = ks.resolve("aliases"),
    i = ks.resolve("strings"),
    o = S({
      resId: r.read((e) => e.hangar.shared.VehiclesStatistics("resId")),
      contentId: n.read((e) =>
        "paused" !== s
          ? e.mono.battle_pass.tooltips.vehicle_bp_points("resId")
          : e.mono.battle_pass.tooltips.on_pause("resId"),
      ),
      args: { intCD: t?.vehicleId },
    });
  return (0, rr.jsxs)("div", {
    className: cs(
      jd.battlePass,
      e.maxBpScore > 0 && jd.battlePass__active,
      e.bpSpecial && jd.battlePass__bonus,
      a,
    ),
    onMouseEnter: function (e) {
      o?.onMouseEnter(e);
    },
    onMouseLeave: function (e) {
      o?.onMouseLeave();
    },
    children: [
      (0, rr.jsxs)("div", {
        className: jd.bpPoints,
        children: [
          (0, rr.jsx)("div", {
            className: jd.points,
            children: Ea.formatNumber("integral", e.bpProgress),
          }),
          (0, rr.jsx)("div", {
            className: cs(jd.points, jd.points__slash),
            children: i.readOrEmpty("common.common.slash"),
          }),
          (0, rr.jsx)("div", {
            className: jd.points,
            children: Ea.formatNumber("integral", e.maxBpScore),
          }),
          (0, rr.jsx)("div", { className: jd.bpShadow }),
        ],
      }),
      (0, rr.jsx)("div", { className: jd.bpIcon }),
    ],
  });
}
function Id({ statistic: e, elite: t, vehicle: a, selected: s, classNames: n, className: r }) {
  return (0, rr.jsxs)("div", {
    className: cs(jd.details, r),
    children: [
      e &&
        (0, rr.jsx)(ee.Prestige, {
          level: e.prestigeLevel,
          grade: e.prestigeGrade,
          type: e.prestigeType,
          direction: ft.left,
          className: cs(jd.prestige, s && jd.prestige__active, n?.prestige),
        }),
      (0, rr.jsx)(ee.Level, { className: cs(jd.text, jd.text__level, n?.level), value: a.level }),
      xt(a.type) &&
        (0, rr.jsx)(ee.Type, {
          type: a.type,
          premium: t || e?.elite,
          size: ee.Type.sizes.x24x24,
          className: n?.type,
        }),
    ],
  });
}
function Sd({ vehicle: e, className: t, classNames: a }) {
  const s = wc[e.id],
    n = e.nationChangeAvailable,
    r = e.rent.leftTime > 0 || e.rent.leftWins > 0 || e.rent.leftBattles > 0;
  return (0, rr.jsxs)("div", {
    className: cs(
      jd.identifier,
      jd[`identifier__${s}`],
      n && jd.identifier__changeNation,
      r && jd.identifier__rent,
      t,
    ),
    children: [
      (0, rr.jsx)(wd, {
        className: a?.name,
        premium: e.premium,
        children: (0, rr.jsx)(ra, { className: jd.truncatedText, text: e.shortName }),
      }),
      (s || n) &&
        (0, rr.jsx)("div", {
          className: cs(
            jd.identifierIcon,
            jd[`identifierIcon__${s}`],
            n && jd.identifierIcon__changeNation,
            a?.icon,
          ),
        }),
    ],
  });
}
var kd = At(function ({ vehicle: e, statistic: t, selected: a, doubleRow: s, ...n }) {
    const r = er(),
      i = r.model.bpState.active.get(),
      o = r.model.bpState.status.get();
    return (0, rr.jsxs)("div", {
      ...n,
      className: cs(jd.base, s && jd.base__double, n.className),
      children: [
        t && Hc(i, o, t) && (0, rr.jsx)(Nd, { vehicle: e, statistic: t, status: o }),
        (0, rr.jsxs)(ee, {
          className: jd.info,
          children: [
            (0, rr.jsx)(Id, { vehicle: e, statistic: t, selected: a }),
            (0, rr.jsx)(Sd, { vehicle: e }),
          ],
        }),
      ],
    });
  }),
  Pd = {
    "media-wrapper": "Overlay_media-wrapper_3c7155a",
    root: "Overlay_root_3c7155a",
    base: "Overlay_ef16c91",
    alert: "Overlay_alert_db4a0e15",
    alertIcon: "Overlay_alertIcon_3d7c077a",
    base__double: "Overlay_base__double_3c7155a",
    alertText: "Overlay_alertText_ca764641",
    alertText__light: "Overlay_alertText__light_bece984e",
  };
Ss("Disable", Pd.disable);
function Ed({ status: e, classNames: t, className: a }) {
  const s = ks.resolve("images"),
    n = ps(
      `hangar.carousel.cards.alerts.${Rc[e]}`,
      `hangar.carousel.cards.alerts.${Rc[e]}_upscale`,
    ),
    r = ps(
      "hangar.carousel.cards.alerts.notSuitable",
      "hangar.carousel.cards.alerts.notSuitable_upscale",
    ),
    i = e === Oc || e === Bc;
  return (0, rr.jsxs)("div", {
    className: cs(Pd.alert, a),
    children: [
      (0, rr.jsx)(_s, { className: cs(Pd.alertIcon, t?.icon), path: s.has(n) ? n : r }),
      (0, rr.jsx)(g, {
        upgradeLegacy: !0,
        className: cs(Pd.alertText, i && Pd.alertText__light, t?.text),
        path: `menu.tankCarousel.vehicleStates.${e}`,
        params: { icon: (0, rr.jsx)(_s, { path: "library.premium_small", width: 34, height: 16 }) },
      }),
    ],
  });
}
function Md({ statistic: e, doubleRow: t, ...a }) {
  return "undamaged" === e.status
    ? null
    : (0, rr.jsx)("div", {
        ...a,
        className: cs(Pd.base, t && Pd.base__double, a.className),
        children: (0, rr.jsx)(Ed, { status: e.status }),
      });
}
var Ld = "Card_e79008fd",
  Ad = "Card_base__double_f8b7f334",
  Td = "Card_content_a6141b08",
  Dd = "Card_border_e9cb9a85",
  Bd = ks.resolve("views"),
  Od = ks.resolve("aliases"),
  Vd = At(function ({
    vehicleId: e,
    selected: t = !1,
    doubleRow: a,
    children: s,
    concurrent: n,
    ...r
  }) {
    const i = er(),
      o = kn().model.get(e),
      l = In().model.get(e),
      c = It(),
      d = i.model.current.inventoryId.get(),
      u = i.model.prebattleModeActive(),
      m = i.model.bpState.active.get(),
      p = i.model.bpState.status.get();
    if (!o || !l) return (0, rr.jsx)(oc, { ...r });
    const _ = n ? Rd : cd;
    return (0, rr.jsxs)(oc, {
      ...r,
      className: cs("vehicle-card", r.className),
      selected: t,
      "data-test-id": `vehicleCard-${e}`,
      onMouseEnter: function (e) {
        (c.play("mouse-enter", { target: "vehicle-card", original: e }), r.onMouseEnter?.(e));
      },
      onMouseLeave: function (e) {
        r.onMouseLeave?.(e);
      },
      onClick: function (e) {
        u ||
          (o && o.inventoryId === d) ||
          (c.play("click", { target: "vehicle-card", original: e }),
          i.controls.select(o.inventoryId),
          r.onClick?.(e));
      },
      children: [
        (0, rr.jsx)(_, {
          vehicle: o,
          validBP: Hc(m, p, l),
          dimmed: u,
          statistic: l,
          selected: t,
          doubleRow: a,
        }),
        (0, rr.jsx)(Hd, {
          concurrent: n,
          statistic: l,
          vehicle: o,
          selected: t,
          disableContextMenu: u,
          doubleRow: a,
        }),
      ],
    });
  });
function Rd(e) {
  const [t, a] = (0, jn.useState)(!0),
    [, s] = (0, jn.useTransition)();
  return (
    (0, jn.useEffect)(() => {
      t && s(() => a(!1));
    }, [t]),
    t ? null : (0, rr.jsx)(cd, { ...e })
  );
}
function Hd({
  vehicle: e,
  statistic: t,
  selected: a,
  doubleRow: s,
  concurrent: n,
  disableContextMenu: r,
}) {
  const [i, o] = (0, jn.useState)(n),
    [, l] = (0, jn.useTransition)(),
    c = ia(
      "vehicle",
      (0, jn.useMemo)(() => ({ inventoryId: e?.inventoryId }), [e?.inventoryId]),
    ),
    d = S({
      resId: Od.read((e) => e.hangar.shared.VehiclesInventory("resId")),
      contentId: Bd.read((e) => e.mono.hangar.vehicle_tooltip("resId")),
      args: jn.useMemo(() => ({ inventoryId: e?.inventoryId }), [e?.inventoryId]),
    });
  return (
    (0, jn.useEffect)(() => {
      i && l(() => o(!1));
    }, [i]),
    i
      ? null
      : (0, rr.jsxs)("div", {
          ...d,
          ...(!r && c),
          className: cs(Ld, s && Ad),
          children: [
            (0, rr.jsxs)("div", {
              className: Td,
              children: [
                (0, rr.jsx)(kd, { vehicle: e, selected: a, statistic: t, doubleRow: s }),
                (0, rr.jsx)(Cd, { vehicle: e, statistic: t, doubleRow: s }),
              ],
            }),
            (0, rr.jsx)(Md, { statistic: t, doubleRow: s }),
          ],
        })
  );
}
var $d = {
  "media-wrapper": "ActiveSlots_media-wrapper_54b124fa",
  root: "ActiveSlots_root_54b124fa",
  emptySlots: "ActiveSlots_emptySlots_a9aa2f04",
};
function zd({ cardHeight: e, className: t }) {
  return (0, rr.jsx)(oc, {
    className: t,
    style: { height: `${e}px` },
    children: (0, rr.jsx)("div", { className: $d.vehicleSlot }),
  });
}
var Fd = At(function ({ vehicleId: e, cardHeight: t, className: a }) {
  const s = er().model.selectedVehicle()?.id,
    n = $r(Number(e)),
    r = (0, jn.useMemo)(() => ({ height: `${t}px` }), [t]);
  return void 0 === e
    ? (console.error("VehicleId is not defined"),
      (0, rr.jsx)(zd, { className: cs(Dd, a), cardHeight: t }))
    : "emptySlot" === e
      ? (0, rr.jsx)(zd, { className: cs(Dd, a), cardHeight: t })
      : Fl(e)
        ? (0, rr.jsx)(bc, { className: cs(Dd, a), type: e, height: t })
        : (0, rr.jsx)(de, {
            failure: () => (0, rr.jsx)(zd, { className: cs(Dd, a), cardHeight: t }),
            children: (0, rr.jsx)(Vd, {
              ...n,
              concurrent: !0,
              vehicleId: e,
              selected: e === s,
              className: cs(Dd, a),
              style: r,
            }),
          });
});
var Wd = {
  "media-wrapper": "VehiclesList_media-wrapper_f0d596a8",
  root: "VehiclesList_root_f0d596a8",
  content: "VehiclesList_content_14a13d69",
  scroll: "VehiclesList_scroll_82155daa",
  scroll__noUpscaleExtraLarge: "VehiclesList_scroll__noUpscaleExtraLarge_6e09ff1f",
  scrollWrapper: "VehiclesList_scrollWrapper_a183bbcc",
  scroll__top: "VehiclesList_scroll__top_f0d596a8",
  scroll__bottom: "VehiclesList_scroll__bottom_f0d596a8",
  scroll__both: "VehiclesList_scroll__both_f0d596a8",
  scrollContent: "VehiclesList_scrollContent_cad65772",
  scrollContent__empty: "VehiclesList_scrollContent__empty_b1e064f7",
  verticalBar: "VehiclesList_verticalBar_a05c0fc5",
  verticalBar__ttc: "VehiclesList_verticalBar__ttc_f6c5f8fd",
  scrollbarBar__empty: "VehiclesList_scrollbarBar__empty_eac7b312",
  card: "VehiclesList_card_c6b45a0b",
};
function qd({ children: e, ...t }) {
  const { api: a } = Bt();
  return (0, rr.jsx)(ge, { ...t, api: a, className: Wd.content, children: e });
}
var Zd = At(function (e) {
    const t = er(),
      a = Kn(),
      s = qr(),
      { api: n } = Bt(),
      [r, i] = $a(n),
      { upscale: o, screenHeightRem: l } = Cs(),
      c = a?.model.current(),
      d = t.model.current.list(),
      u = c && 0 === d.length,
      m = s?.model.computed.ttcEnabled(),
      p = l > fs.extraLarge.height && !o;
    return (0, rr.jsxs)("div", {
      className: cs(Wd.scroll, p && Wd.scroll__noUpscaleExtraLarge, Wd[`scroll__${ui(r, i)}`]),
      children: [
        (0, rr.jsx)(ca, {
          ...e,
          classNames: {
            ...e.classNames,
            wrapper: Wd.scrollWrapper,
            content: cs(Wd.scrollContent, u && Wd.scrollContent__empty),
          },
          children: e.children,
        }),
        !n.disabled &&
          (0, rr.jsx)(es, { classNames: { base: cs(Wd.verticalBar, m && Wd.verticalBar__ttc) } }),
      ],
    });
  }),
  Gd = At(function ({ extraColumns: e = 0 }) {
    const t = er(),
      a = Kn(),
      s = nr(),
      { api: n } = Bt(),
      r = a?.model.current(),
      i = t.model.prebattleModeActive(),
      o = ea(ri, ii),
      l = o.row + e,
      c = V(o.height),
      d = t.model.current.ids(),
      u = t.model.current.list(),
      m = t.model.selectedVehicle(),
      p = t.model.telecomRentStatus.get(),
      _ = m?.id,
      h = Qa(_),
      { currentIndex: g } = Wl(d, _),
      f = (function (e, t, a) {
        const [s, n] = (0, jn.useState)(0);
        return (
          (0, jn.useLayoutEffect)(() => {
            function s() {
              const s = e.getWrapperSize();
              be(s) && n(Math.floor(s / t) * a);
            }
            const r = e.events.on("resizeHandled", s),
              i = e.events.on("recalculateContent", s);
            return () => {
              (r(), i());
            };
          }, [e, t, a]),
          s
        );
      })(n, c, l),
      v = zl(t.model.slots.recover.get(), p),
      b = r ? [] : v.right,
      { activeSlotsAmount: x, activeSlotsIds: y } =
        ((C = d),
        (j = r ? [] : v.left),
        (w = b),
        (N = f),
        (I = l),
        (0, jn.useMemo)(() => {
          if (!N) return { activeSlotsAmount: 0, activeSlotsIds: [] };
          const e = C.length + j.length + w.length,
            t = ((I - (e % I)) % I) + I,
            a = Math.max(0, N + I - e);
          return {
            activeSlotsAmount: e,
            activeSlotsIds: [...j, ...C, ...w, ...Array(0 === a ? t : a).fill("emptySlot")],
          };
        }, [j, I, C, N, w]));
    var C, j, w, N, I;
    return (
      ql(n, g, c, l, d.length),
      (function (e, t, a, s, n) {
        function r(s) {
          a(-1 !== e ? t[e + s].inventoryId : t[0].inventoryId);
        }
        const i = [
          { key: ma.ARROW_DOWN, blockKey: e > t.length - (s + 1), action: () => r(s) },
          { key: ma.ARROW_UP, blockKey: e < s, action: () => r(-s) },
          { key: ma.ARROW_LEFT, blockKey: e % s === 0, action: () => r(-1) },
          {
            key: ma.ARROW_RIGHT,
            blockKey: e % s === s - 1 || e === t.length - 1,
            action: () => r(1),
          },
          { key: ma.HOME, blockKey: 0 === t.length, action: () => a(t[0].inventoryId) },
          { key: ma.END, blockKey: 0 === t.length, action: () => a(t[t.length - 1].inventoryId) },
        ];
        for (const { key: o, blockKey: l, action: c } of i) {
          const e = n || l ? ma.NONE : o;
          gt(e, c);
        }
      })(g, u, t.controls.select, l, 0 === d.length || i),
      (0, jn.useEffect)(() => {
        n.setDisabled(f >= x);
      }, [n, f, x]),
      (0, jn.useEffect)(() => {
        s && s.model.computeds.enabled() && _ !== h && s.controls.reset();
      }, [_, h, s]),
      (0, rr.jsxs)(rr.Fragment, {
        children: [
          (0, rr.jsx)(ke, {
            api: n,
            elementHeight: c - V(1),
            direction: "vertical",
            totalElements: y.length,
            wrappers: { Content: qd },
            renderScroll: (e) =>
              (0, rr.jsx)(Zd, { ...e, style: { "--card-width": 100 / l + "%" } }),
            itemsPerRow: l,
            renderElement: (e) =>
              (0, rr.jsx)(Fd, { vehicleId: y[e], cardHeight: c, className: Wd.card }, y[e] ?? e),
          }),
          s &&
            s.model.computeds.enabled() &&
            (0, rr.jsx)(Hr, { freeSpaceRem: 0, tipSize: "32rem", position: "right" }),
        ],
      })
    );
  }),
  Ud = "EmptyStateMessage_923658c6",
  Kd = "EmptyStateMessage_title_278b22ff",
  Xd = "EmptyStateMessage_description_5a4f259e",
  Yd = ks.resolve("strings"),
  Jd = At(function (e) {
    const t = Kn(),
      a = er(),
      s = t?.model.current();
    if (!s || 0 !== a.model.current.amount()) return null;
    const n = 0 === s?.list.length ? "empty_list" : "not_found";
    return (0, rr.jsxs)("div", {
      className: cs(Ud, e.className),
      children: [
        (0, rr.jsx)("div", {
          className: Kd,
          children: Yd.readOrEmpty(`playlists.empty_state.${n}.title`),
        }),
        (0, rr.jsx)("div", {
          className: Xd,
          children: Yd.readOrEmpty(`playlists.empty_state.${n}.body`),
        }),
      ],
    });
  });
function Qd(e) {
  return { id: e.id, tankmanId: e.tankmanId, roles: ve(e.roles) };
}
var eu = "disabled",
  [tu, au] = ds("CrewModel")(
    ({ observableModel: e }) => {
      const t = {
          ...e.primitives([
            "state",
            "acceleratedTraining",
            "intensiveTraining",
            "vehicleNation",
            "vehicleType",
            "vehicleName",
          ]),
          ...e.primitives({ hasDog: "withDog" }),
          slots: e.arrayClone("slots"),
          crew: e.transform(Mt("id", Es), "crew"),
        },
        a = Na.structural(() => _(t.slots.get(), Qd)),
        s = Na.model((e) => t.crew.get()[e]),
        n = Na.primitive((e) => {
          const t = s(e);
          return (t?.newPerksCount ?? 0) + (t?.newBonusPerksCount ?? 0);
        }),
        r = Na.primitive(() => t.state.get() === eu);
      return { ...t, computes: { slots: a, newPerksToLearn: n, tankmanById: s, disabled: r } };
    },
    ({ externalModel: e }) => ({
      openCrew: e.createCallback((e) => ({ crewSlotId: e }), "onOpenCrew"),
      openBarracks: e.createCallback((e) => ({ crewSlotId: e }), "onOpenBarracks"),
      toggleAcceleratedTraining: e.createCallbackNoArgs("onToggleAcceleratedTraining"),
      toggleIntensiveTraining: e.createCallbackNoArgs("onToggleIntensiveTraining"),
      showDogInfo: e.createCallbackNoArgs("onDogMoreInfoClick"),
    }),
  ),
  su = "doge_role",
  nu = (0, jn.createContext)(null);
function ru() {
  const e = (0, jn.useContext)(nu);
  return (u(null !== e, "You can use crew context hooks only with crew slot component"), e);
}
var iu = {
    [ws.commander]: (e) =>
      (0, rr.jsx)("svg", {
        width: 18,
        height: 18,
        viewBox: "0 0 18 18",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        ...e,
        children: (0, rr.jsx)("path", {
          fillRule: "evenodd",
          clipRule: "evenodd",
          d: "M15.8941 4.6285C15.8456 4.45146 15.7404 4.29519 15.5947 4.18358C15.449 4.07198 15.2707 4.01118 15.0871 4.0105H11.5201V4.8631H9.84012V4.0105H8.16012V4.8631H6.48012V4.0105H2.91372C2.72995 4.01092 2.55139 4.07159 2.40541 4.18322C2.25943 4.29485 2.15409 4.45126 2.10552 4.6285L0.72852 9.5191C0.642995 9.82414 0.599791 10.1395 0.600119 10.4563V15.9475C0.598522 16.1719 0.686107 16.3878 0.843622 16.5477C1.00114 16.7076 1.21569 16.7984 1.44012 16.8001H4.80012C5.02455 16.7984 5.2391 16.7076 5.39662 16.5477C5.55413 16.3878 5.64172 16.1719 5.64012 15.9475V11.6845C5.63852 11.4601 5.72611 11.2442 5.88362 11.0843C6.04114 10.9244 6.25569 10.8336 6.48012 10.8319H8.16012V11.6845H9.84012V10.8319H11.5201C11.7445 10.8336 11.9591 10.9244 12.1166 11.0843C12.2741 11.2442 12.3617 11.4601 12.3601 11.6845V15.9475C12.3585 16.1719 12.4461 16.3878 12.6036 16.5477C12.7611 16.7076 12.9757 16.7984 13.2001 16.8001H16.5601C16.7845 16.7984 16.9991 16.7076 17.1566 16.5477C17.3141 16.3878 17.4017 16.1719 17.4001 15.9475V10.4563C17.4002 10.139 17.3565 9.82327 17.2705 9.5179L15.8941 4.6285ZM8.16012 9.1285H6.48012V6.5683H8.16012V9.1285ZM11.5201 9.1285H9.84012V6.5683H11.5201V9.1285ZM13.2001 0.600098H12.3601C12.1357 0.601842 11.9211 0.692631 11.7636 0.852509C11.6061 1.01239 11.5185 1.22827 11.5201 1.4527V2.3053C11.5185 2.52973 11.6061 2.74561 11.7636 2.90549C11.9211 3.06536 12.1357 3.15615 12.3601 3.1579H13.2001C13.4245 3.15615 13.6391 3.06536 13.7966 2.90549C13.9541 2.74561 14.0417 2.52973 14.0401 2.3053V1.4527C14.0417 1.22827 13.9541 1.01239 13.7966 0.852509C13.6391 0.692631 13.4245 0.601842 13.2001 0.600098ZM5.64012 0.600098H4.80012C4.57569 0.601842 4.36114 0.692631 4.20362 0.852509C4.04611 1.01239 3.95852 1.22827 3.96012 1.4527V2.3053C3.95852 2.52973 4.04611 2.74561 4.20362 2.90549C4.36114 3.06536 4.57569 3.15615 4.80012 3.1579H5.64012C5.86455 3.15615 6.0791 3.06536 6.23662 2.90549C6.39413 2.74561 6.48172 2.52973 6.48012 2.3053V1.4527C6.48172 1.22827 6.39413 1.01239 6.23662 0.852509C6.0791 0.692631 5.86455 0.601842 5.64012 0.600098Z",
        }),
      }),
    [ws.driver]: (e) =>
      (0, rr.jsxs)("svg", {
        width: 18,
        height: 18,
        viewBox: "0 0 18 18",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        ...e,
        children: [
          (0, rr.jsx)("g", {
            clipPath: "url(#clip0_11629_273215)",
            children: (0, rr.jsx)("path", {
              fillRule: "evenodd",
              clipRule: "evenodd",
              d: "M9.0001 17.4001C7.33874 17.4001 5.71468 16.9074 4.33331 15.9844C2.95194 15.0614 1.87529 13.7495 1.23952 12.2146C0.603739 10.6797 0.437389 8.99078 0.761504 7.36134C1.08562 5.7319 1.88564 4.23516 3.0604 3.0604C4.23516 1.88564 5.7319 1.08562 7.36134 0.761504C8.99078 0.437389 10.6797 0.603739 12.2146 1.23952C13.7495 1.87529 15.0614 2.95194 15.9844 4.33331C16.9074 5.71468 17.4001 7.33874 17.4001 9.0001C17.4001 11.2279 16.5151 13.3645 14.9398 14.9398C13.3645 16.5151 11.2279 17.4001 9.0001 17.4001ZM15.6931 9.5251H10.5877C10.5041 9.77766 10.3614 10.0066 10.1714 10.1929C9.9815 10.3792 9.74983 10.5174 9.4957 10.5961V15.6721C11.093 15.5577 12.5964 14.8747 13.7334 13.7469C14.8704 12.6192 15.5656 11.1214 15.6931 9.5251ZM8.4487 15.6673V10.5805C8.20655 10.496 7.98708 10.3569 7.80729 10.174C7.62751 9.9911 7.49222 9.76927 7.4119 9.5257H2.3071C2.43395 11.1124 3.12181 12.6021 4.24737 13.7276C5.37292 14.8532 6.86258 15.5411 8.4493 15.6679L8.4487 15.6673ZM9.0001 2.2801C7.30964 2.28143 5.68177 2.91982 4.44106 4.068C3.20036 5.21619 2.43797 6.7898 2.3059 8.4751H7.4125C7.52075 8.13918 7.73277 7.84625 8.01805 7.63846C8.30333 7.43067 8.64717 7.31872 9.0001 7.31872C9.35303 7.31872 9.69687 7.43067 9.98215 7.63846C10.2674 7.84625 10.4794 8.13918 10.5877 8.4751H15.6931C15.561 6.79001 14.7988 5.21657 13.5584 4.06841C12.3179 2.92026 10.6904 2.28173 9.0001 2.2801Z",
            }),
          }),
          (0, rr.jsx)("defs", {
            children: (0, rr.jsx)("clipPath", {
              id: "clip0_11629_273215",
              children: (0, rr.jsx)("rect", { width: 18, height: 18, fill: "white" }),
            }),
          }),
        ],
      }),
    [ws.gunner]: (e) =>
      (0, rr.jsxs)("svg", {
        width: 18,
        height: 18,
        viewBox: "0 0 18 18",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        ...e,
        children: [
          (0, rr.jsx)("g", {
            clipPath: "url(#clip0_11629_273826)",
            children: (0, rr.jsx)("path", {
              fillRule: "evenodd",
              clipRule: "evenodd",
              d: "M17.1814 9.8184H16.315C16.1286 11.4773 15.3841 13.0235 14.2035 14.2038C13.023 15.384 11.4765 16.128 9.81761 16.314V17.1822C9.81745 17.399 9.73124 17.607 9.57791 17.7603C9.42457 17.9136 9.21665 17.9998 8.99981 18C8.78275 18 8.57459 17.9138 8.42111 17.7603C8.26763 17.6068 8.18141 17.3987 8.18141 17.1816V16.314C6.5225 16.128 4.97601 15.384 3.79547 14.2038C2.61494 13.0235 1.87043 11.4773 1.68401 9.8184H0.81761C0.708311 9.82136 0.599524 9.80239 0.497679 9.76261C0.395834 9.72283 0.302995 9.66304 0.224641 9.58678C0.146288 9.51052 0.084006 9.41933 0.041481 9.3186C-0.00104395 9.21787 -0.0229492 9.10964 -0.0229492 9.0003C-0.0229492 8.89096 -0.00104395 8.78273 0.041481 8.682C0.084006 8.58127 0.146288 8.49009 0.224641 8.41383C0.302995 8.33756 0.395834 8.27778 0.497679 8.23799C0.599524 8.19821 0.708311 8.17924 0.81761 8.1822H1.68401C1.8703 6.52324 2.61475 4.97681 3.7953 3.79648C4.97584 2.61615 6.52241 1.87199 8.18141 1.686V0.818399C8.18141 0.601346 8.26763 0.393183 8.42111 0.239703C8.57459 0.0862236 8.78275 0 8.99981 0C9.21686 0 9.42502 0.0862236 9.5785 0.239703C9.73198 0.393183 9.8182 0.601346 9.8182 0.818399V1.686C11.4771 1.87196 13.0236 2.61604 14.2041 3.79625C15.3847 4.97645 16.1292 6.52275 16.3156 8.1816H17.182C17.399 8.18176 17.607 8.26805 17.7603 8.42152C17.9137 8.57498 17.9998 8.78305 17.9998 9C17.9998 9.10747 17.9786 9.2139 17.9375 9.31319C17.8964 9.41248 17.8361 9.5027 17.7601 9.5787C17.6841 9.65469 17.5939 9.71497 17.4946 9.7561C17.3953 9.79723 17.2889 9.8184 17.1814 9.8184ZM8.99981 3.273C7.51916 3.26929 6.09489 3.84055 5.0272 4.8664C3.9595 5.89224 3.33176 7.29254 3.2763 8.77215C3.22083 10.2518 3.74196 11.6951 4.72985 12.798C5.71774 13.9009 7.09524 14.5772 8.57201 14.6844H9.4276C10.9044 14.5772 12.2819 13.9009 13.2698 12.798C14.2577 11.6951 14.7788 10.2518 14.7233 8.77215C14.6678 7.29254 14.0401 5.89224 12.9724 4.8664C11.9047 3.84055 10.4805 3.26929 8.99981 3.273ZM6.5452 10.6368L8.99981 7.3692L11.4544 10.6362L8.99981 9.8238L6.5452 10.6368Z",
            }),
          }),
          (0, rr.jsx)("defs", {
            children: (0, rr.jsx)("clipPath", {
              id: "clip0_11629_273826",
              children: (0, rr.jsx)("rect", { width: 18, height: 18, fill: "white" }),
            }),
          }),
        ],
      }),
    [ws.loader]: (e) =>
      (0, rr.jsx)("svg", {
        width: 18,
        height: 18,
        viewBox: "0 0 18 18",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        ...e,
        children: (0, rr.jsx)("path", {
          fillRule: "evenodd",
          clipRule: "evenodd",
          d: "M16.646 12.8005H12.8456C12.7484 11.3725 12.6938 10.1461 12.6938 9.4003C12.6938 3.8077 14.7458 0.600697 14.7458 0.600697C16.1795 3.30687 16.8873 6.33844 16.8002 9.3997C16.8002 10.1449 16.7432 11.3749 16.646 12.8005ZM7.0988 12.8005C7.0016 11.3725 6.947 10.1461 6.947 9.4003C6.947 3.8071 9.0002 0.600098 9.0002 0.600098C10.4332 3.30667 11.1402 6.33845 11.0522 9.3997C11.0522 10.1449 10.9976 11.3737 10.9004 12.7999H7.0988V12.8005ZM1.35199 12.8005C1.25479 11.3725 1.2002 10.1461 1.2002 9.4003C1.2002 3.8071 3.25219 0.600098 3.25219 0.600098C4.68517 3.30667 5.39216 6.33845 5.30419 9.3997C5.30419 10.1449 5.24899 11.3737 5.15239 12.7999H1.35199V12.8005ZM4.9328 16.6009H3.9452L3.8402 17.4001H2.6372L2.52199 16.6003H1.56859C1.44859 15.4411 1.45339 14.2741 1.37599 13.2001H5.1254C5.048 14.2747 5.0516 15.4411 4.9322 16.6003L4.9328 16.6009ZM10.679 16.6009H9.692L9.5894 17.4001H8.384L8.26879 16.6003H7.32019C7.20019 15.4411 7.20499 14.2741 7.12759 13.2001H10.8728C10.7954 14.2747 10.799 15.4411 10.6802 16.6003L10.679 16.6009ZM16.4258 16.6009H15.4382L15.3362 17.4001H14.1302L14.015 16.6003H13.0658C12.9458 15.4411 12.9506 14.2741 12.8732 13.2001H16.6202C16.5398 14.2747 16.5464 15.4411 16.427 16.6003L16.4258 16.6009Z",
        }),
      }),
    [ws.radioman]: (e) =>
      (0, rr.jsxs)("svg", {
        width: 18,
        height: 18,
        viewBox: "0 0 18 18",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        ...e,
        children: [
          (0, rr.jsx)("g", {
            clipPath: "url(#clip0_67238_249405)",
            children: (0, rr.jsx)("path", {
              fillRule: "evenodd",
              clipRule: "evenodd",
              d: "M16.7735 10.11C17.08 10.3137 17.3142 10.6091 17.4425 10.954C17.5709 11.2989 17.5868 11.6755 17.4881 12.03L16.4243 16.0212C16.3284 16.4058 16.1032 16.7456 15.7863 16.9837C15.4695 17.2218 15.0803 17.3436 14.6843 17.3286L13.8311 17.28C13.5799 17.2597 13.3363 17.1835 13.1183 17.057C12.9003 16.9304 12.7134 16.7567 12.5711 16.5486C12.428 16.3395 12.3331 16.1012 12.2933 15.8509C12.2536 15.6006 12.27 15.3446 12.3413 15.1014L13.4945 10.7724C13.5908 10.3864 13.8176 10.0455 14.1365 9.80744C14.4553 9.56941 14.8466 9.44887 15.2441 9.46624L15.3497 9.03904C15.5831 8.15825 15.5717 7.23047 15.3168 6.35568C15.0618 5.48088 14.5731 4.69221 13.9031 4.07464C12.5871 2.92363 10.8982 2.28923 9.14991 2.28923C7.4016 2.28923 5.71268 2.92363 4.39671 4.07464C3.72695 4.69234 3.23841 5.48107 2.98371 6.35586C2.72902 7.23065 2.71782 8.15835 2.95131 9.03904L3.05511 9.45904C3.42893 9.47426 3.78782 9.60998 4.07817 9.84593C4.36852 10.0819 4.57477 10.4054 4.66611 10.7682L5.81931 15.0972C5.89064 15.3404 5.90702 15.5964 5.86728 15.8467C5.82753 16.097 5.73266 16.3353 5.58951 16.5444C5.44726 16.7525 5.2603 16.9262 5.04229 17.0528C4.82429 17.1793 4.58076 17.2555 4.32951 17.2758L3.47631 17.3244C3.08025 17.3395 2.69107 17.2177 2.3742 16.9797C2.05733 16.7416 1.83208 16.4016 1.73631 16.017L0.67251 12.0258C0.566505 11.6477 0.591511 11.2449 0.743473 10.8828C0.895434 10.5207 1.16542 10.2207 1.50951 10.0314L1.36551 9.44224C1.05516 8.25749 1.07528 7.01037 1.42371 5.83626C1.77214 4.66214 2.43555 3.60592 3.34191 2.78224C4.95139 1.37422 7.01717 0.598145 9.15561 0.598145C11.2941 0.598145 13.3598 1.37422 14.9693 2.78224C15.8757 3.60592 16.5391 4.66214 16.8875 5.83626C17.2359 7.01037 17.2561 8.25749 16.9457 9.44224L16.7735 10.11Z",
            }),
          }),
          (0, rr.jsx)("defs", {
            children: (0, rr.jsx)("clipPath", {
              id: "clip0_67238_249405",
              children: (0, rr.jsx)("rect", { width: 18, height: 18, fill: "white" }),
            }),
          }),
        ],
      }),
    [su]: (e) =>
      (0, rr.jsxs)("svg", {
        width: 14,
        height: 14,
        viewBox: "0 0 14 14",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        ...e,
        children: [
          (0, rr.jsx)("path", {
            d: "M10.3616 4.55671L8.60388 1.26575L8.88511 0.928219L8.32265 0L7.8305 0.506301V1.26575L7.19773 1.85644V4.72548L8.32265 6.16L10.3616 4.55671Z",
            fill: "#B3AFAB",
          }),
          (0, rr.jsx)("path", {
            d: "M12.0226 5.6L14 9.24L11.7062 11.0133L10.4407 9.42666V6.25333L11.1525 5.6V4.75999L11.7062 4.2L12.339 5.22666L12.0226 5.6Z",
            fill: "#B3AFAB",
          }),
          (0, rr.jsx)("path", {
            d: "M1.9774 5.6L0 9.24L2.29379 11.0133L3.55932 9.42666V6.25333L2.84746 5.6V4.76L2.29379 4.2L1.66102 5.22666L1.9774 5.6Z",
            fill: "#B3AFAB",
          }),
          (0, rr.jsx)("path", {
            d: "M5.159 1.26575L3.40131 4.55671L5.44023 6.16L6.56515 4.72548V1.85644L5.93238 1.26575V0.506301L5.44023 0L4.87777 0.928219L5.159 1.26575Z",
            fill: "#B3AFAB",
          }),
          (0, rr.jsx)("path", {
            d: "M4.61172 9.62923L2.95227 12.2331L4.90032 14L6.05472 13.2899H8.03062L9.18872 14L11.143 12.2331L9.47824 9.62923L8.53729 7.58333H5.54967L4.61172 9.62923Z",
            fill: "#B3AFAB",
          }),
        ],
      }),
  },
  ou = "Profile_491a8220",
  lu = "Profile_roles_2d239199",
  cu = "Profile_role_b3df2c53",
  du = "Profile_name_5c9b6f18",
  uu = "Profile_name__maxLevel_85270e75",
  mu = ks.resolve("strings"),
  pu = ks.resolve("aliases");
function _u({ role: e = "", className: t }) {
  const a = iu[e];
  if (a) return (0, rr.jsx)(a, { className: t });
  console.error(`Unknown role type ${e}`);
}
function hu({ roles: e, name: t, perksAmount: a, progress: s }) {
  const { tankmanId: n, slotId: r } = ru(),
    i = (0, jn.useMemo)(
      () => ({ tooltipId: "vehicleCrewMemberInHangar", tankmanID: n, slotIdx: r }),
      [r, n],
    );
  return (0, rr.jsxs)("div", {
    className: ou,
    children: [
      (0, rr.jsx)(Fa, {
        params: { resId: pu.read((e) => e.hangar.shared.Crew("resId")), args: i },
        className: lu,
        children: Ve(e, (e, t) => (0, rr.jsx)(_u, { role: e, className: cu }, t)),
      }),
      t
        ? (0, rr.jsx)(ra, { className: cs(du, 6 === a && 100 === s && uu), text: t })
        : (0, rr.jsx)(g, {
            upgradeLegacy: !0,
            className: du,
            path: "crew_widget.emptySlot.chooseTankman",
            params: { role: mu.readOrEmpty(`item_types.tankman.roles.objectiveCase.${e && e[0]}`) },
          }),
    ],
  });
}
function gu({ skinId: e, customizedSkin: t }) {
  return t ? `tankmen.icons.big.crewSkins.${bt(e)}` : `tankmen.icons.big.${bt(e)}`;
}
var fu = "Tankman_content_4548f2cf",
  vu = "Tankman_94b49163",
  bu = "Tankman_base__bonusPerk_dc2caccc",
  xu = "Tankman_content__empty_d0544ce1",
  yu = "Tankman_content__emptyRed_83bc592f",
  Cu = (0, jn.memo)(function (e) {
    const { customizedSkin: t, bonusPerk: a, skinId: s, className: n, animation: r } = e;
    return (0, rr.jsx)("div", {
      className: cs(vu, a && bu, n),
      children: s
        ? (0, rr.jsx)(_s, {
            className: fu,
            fit: "cover",
            path: gu({ skinId: s, customizedSkin: t }),
          })
        : (0, rr.jsxs)(rr.Fragment, {
            children: [
              (0, rr.jsx)("div", { className: cs(fu, xu) }),
              (0, rr.jsx)(q.div, { className: cs(fu, yu), style: r }),
            ],
          }),
    });
  }),
  ju = {
    "media-wrapper": "DogSlot_media-wrapper_70eec670",
    root: "DogSlot_root_70eec670",
    base: "DogSlot_5e1fe46",
    block: "DogSlot_block_99f455f8",
    info: "DogSlot_info_58d37a1c",
    roles: "DogSlot_roles_e0242348",
    role: "DogSlot_role_8e738537",
    name: "DogSlot_name_41d95cf0",
    dogDetails: "DogSlot_dogDetails_67f5b40a",
    detailsText: "DogSlot_detailsText_4dd85787",
    disabled: "DogSlot_disabled_e7b0f05e",
    disabled__active: "DogSlot_disabled__active_9672028d",
  },
  wu = ks.resolve("strings"),
  Nu = Hs(function () {
    const { model: e, controls: t } = au(),
      a = It(),
      s = e.computes.disabled(),
      r = e.vehicleNation.get();
    return (0, rr.jsx)(Ma, {
      params: {
        header: wu.readOrEmpty(`tooltips.hangar.crew.rudy.dog.${r}.header`),
        body: wu.readOrEmpty(`tooltips.hangar.crew.rudy.dog.${r}.body`),
      },
      asChild: !0,
      children: (0, rr.jsxs)("div", {
        className: ju.base,
        onClick: function () {
          s || a.play("click", { target: "crew-widget:dog-slot" });
        },
        onMouseEnter: function () {
          s || a.play("mouse-enter", { target: "crew-widget:dog-slot" });
        },
        children: [
          (0, rr.jsx)(Cu, { customizedSkin: !1, skinId: "ussr_dog_1" }),
          (0, rr.jsxs)("div", {
            className: ju.block,
            children: [
              (0, rr.jsxs)("div", {
                className: ju.info,
                children: [
                  (0, rr.jsx)("div", {
                    className: ju.roles,
                    children: (0, rr.jsx)(_u, { role: su, className: ju.role }),
                  }),
                  (0, rr.jsx)("div", {
                    className: ju.name,
                    children: wu.readOrEmpty(`menu.hangar.crew.rody.dog.${r}.name`),
                  }),
                ],
              }),
              (0, rr.jsx)(n, {
                className: ju.dogDetails,
                theme: n.themes.secondary,
                size: n.sizes.small,
                onClick: (e) => {
                  (t.showDogInfo(), e.stopPropagation());
                },
                children: (0, rr.jsx)("div", {
                  className: ju.detailsText,
                  children: wu.readOrEmpty("crew.dogPawTooltip.details.body"),
                }),
              }),
            ],
          }),
          (0, rr.jsx)("div", { className: cs(ju.disabled, s && ju.overlay__active) }),
        ],
      }),
    });
  }),
  Iu = "retrainingProgress",
  Su = "unsuitableTankman",
  ku = "default";
var Pu = "new_skill",
  Eu = "default",
  Mu = "active",
  Lu = "activeDisable",
  Au = "disable",
  Tu = "low",
  Du = "newFull",
  Bu = "newLow",
  Ou = "newDisableFull",
  Vu = "newDisableLow",
  Ru = "newActive",
  Hu = "newActiveDisable",
  $u = [Au, Ou, Vu, Lu, Hu],
  zu = [Ou, Du];
function Fu(e) {
  return e.find((e) => 100 === e.bonus)?.name;
}
function Wu(e) {
  const {
      id: t,
      skills: a,
      newCount: s,
      trainingProgress: n,
      vehEfficacy: r,
      efficacy: i,
      role: o,
      nativeTank: l,
      vehicleBonusDetails: c,
    } = e,
    d = [];
  for (const u of a)
    d.push({
      id: t,
      name: u.name,
      state: u.state,
      vehEfficacy: r,
      efficacy: i,
      role: o,
      nativeTank: l,
      instruction: Fu(c),
    });
  for (let u = 0; u < s; u++) {
    const e = 100 !== n && u === s - 1 ? Dt.learning : Dt.learned;
    d.push({ id: t, name: Pu, state: e, vehEfficacy: r, efficacy: i, role: o, nativeTank: l });
  }
  return d;
}
function qu(e) {
  const {
    id: t,
    perks: a,
    newPerksCount: s,
    trainingProgress: n,
    currentVehicleSkillsEfficiency: r,
    skillsEfficiency: i,
    role: o,
    insideNativeTank: l,
    vehicleBonusDetails: c,
  } = e;
  return Wu({
    id: t,
    skills: a,
    newCount: s,
    trainingProgress: n,
    vehEfficacy: r,
    efficacy: i,
    role: o,
    nativeTank: l,
    vehicleBonusDetails: c,
  });
}
function Zu(e) {
  const {
    id: t,
    bonusPerks: a,
    currentVehicleSkillsEfficiency: s,
    skillsEfficiency: n,
    insideNativeTank: r,
    vehicleBonusDetails: i,
  } = e;
  let o = [];
  for (const l of a)
    o = o.concat(
      Wu({
        id: t,
        skills: l.skills,
        newCount: l.newCount,
        trainingProgress: l.trainingProgress,
        vehEfficacy: s,
        efficacy: n,
        role: l.role,
        nativeTank: r,
        vehicleBonusDetails: i,
      }),
    );
  return o.sort((e, t) =>
    e.state === Dt.learning && t.state !== Dt.learning
      ? 1
      : e.state !== Dt.learning && t.state === Dt.learning
        ? -1
        : "new_skill" === e.name && "new_skill" !== t.name
          ? 1
          : "new_skill" !== e.name && "new_skill" === t.name
            ? -1
            : 0,
  );
}
function Gu({
  state: e,
  vehEfficacy: t,
  efficacy: a,
  nativeTank: s,
  newPerk: n,
  withInstruction: r,
}) {
  const i = !s && -1 === t,
    o = !i && t < 1,
    l = a.level < 1;
  return r
    ? i
      ? Mu
      : Eu
    : e !== Dt.learning || o || n
      ? n && e === Dt.learning
        ? i
          ? Hu
          : Ru
        : n && i && l
          ? Vu
          : n && i && !l
            ? e === Dt.learning
              ? Vu
              : Ou
            : i || e === Dt.irrelevant
              ? Au
              : o && !n
                ? Tu
                : (o && n) || n
                  ? e === Dt.learning
                    ? Bu
                    : Du
                  : Eu
      : i
        ? Lu
        : Mu;
}
var Uu = "EfficiencyIndicator_d9560b90",
  Ku = "EfficiencyIndicator_base__bonus_a4144984",
  Xu = "EfficiencyIndicator_percent_147766be",
  Yu = "EfficiencyIndicator_icon_fb03a020",
  Ju = ks.resolve("intl"),
  Qu = ks.resolve("aliases");
function em({ bonusPerks: e, skillsEfficiency: t, className: a }) {
  const { tankmanId: s, slotState: n } = ru(),
    r = Ju.formatNumber("integral", 100 * t),
    i = (0, jn.useMemo)(
      () => ({ tooltipId: n === Su ? "crewSkillUntrained" : "skillsEfficiency", tankmanID: s }),
      [n, s],
    );
  return (0, rr.jsx)(Fa, {
    params: { resId: Qu.read((e) => e.hangar.shared.Crew("resId")), args: i },
    className: cs(Uu, e && Ku, a),
    children: (() => {
      switch (n) {
        case Su:
          return (0, rr.jsx)("div", { className: Yu });
        case Iu:
          return (0, rr.jsx)("div", {
            className: Xu,
            children: (0, rr.jsx)(g, {
              upgradeLegacy: !0,
              path: "common.percentValue",
              params: { value: r },
            }),
          });
        default:
          return;
      }
    })(),
  });
}
var tm = ks.resolve("aliases"),
  am = ks.resolve("views"),
  sm = ks.resolve("strings");
function nm({
  children: e,
  bonus: t,
  name: a,
  role: s,
  index: n,
  tankmanId: r,
  newPerk: i,
  className: o,
}) {
  const l = (0, jn.useMemo)(() => ({ tankmanID: r, skillIndex: n }), [r, n]),
    c = (0, jn.useMemo)(
      () => ({
        tooltipId: "crewPerkGf",
        skillName: a,
        roleName: s,
        isBonus: t,
        skillIndex: n,
        tankmanID: r,
      }),
      [t, n, a, s, r],
    );
  return i
    ? t
      ? (0, rr.jsx)(Ma, {
          params: {
            header: sm.readOrEmpty("crew.matrix.skillTooltip.bonus.available.header"),
            body: sm.readOrEmpty("crew.matrix.skillTooltip.bonus.available.text"),
          },
          className: o,
          children: e,
        })
      : (0, rr.jsx)(oa, {
          params: {
            contentId: am.read((e) => e.lobby.crew.tooltips.EmptySkillTooltip("resId")),
            resId: tm.read((e) => e.hangar.shared.Crew("resId")),
            args: l,
          },
          className: o,
          children: e,
        })
    : (0, rr.jsx)(Fa, {
        params: { resId: tm.read((e) => e.hangar.shared.Crew("resId")), args: c },
        className: o,
        children: e,
      });
}
var rm = {
  "media-wrapper": "Perk_media-wrapper_e658317b",
  root: "Perk_root_e658317b",
  background: "Perk_background_c7d95a33",
  base: "Perk_b09f8e2f",
  border: "Perk_border_a0a14f61",
  base__default: "Perk_base__default_e658317b",
  base__disable: "Perk_base__disable_e658317b",
  base__active: "Perk_base__active_e658317b",
  base__activeDisable: "Perk_base__activeDisable_e658317b",
  base__newActive: "Perk_base__newActive_e658317b",
  base__newActiveDisable: "Perk_base__newActiveDisable_e658317b",
  base__low: "Perk_base__low_e658317b",
  base__newFull: "Perk_base__newFull_e658317b",
  base__newLow: "Perk_base__newLow_e658317b",
  base__newDisableFull: "Perk_base__newDisableFull_e658317b",
  base__newDisableLow: "Perk_base__newDisableLow_e658317b",
  base__bonus: "Perk_base__bonus_e658317b",
  newPerkBackground: "Perk_newPerkBackground_ce22df0b",
  icon: "Perk_icon_38ad57b2",
  disabledOverlay: "Perk_disabledOverlay_95f5f83e",
};
function im(e) {
  const {
      name: t,
      state: a,
      vehEfficacy: s,
      efficacy: n,
      id: r,
      role: i,
      nativeTank: o,
      index: l,
      bonusPerk: c,
      instruction: d,
      className: u,
    } = e,
    m = t === Pu,
    p = Gu({
      withInstruction: t === d,
      state: a,
      vehEfficacy: s,
      efficacy: n,
      nativeTank: o,
      newPerk: m,
    });
  return (0, rr.jsxs)(nm, {
    className: cs(u, rm.base, c && rm.base__bonus, rm[`base__${p}`]),
    newPerk: m,
    bonus: c,
    name: t.includes("brotherhood") ? "brotherhood" : t,
    index: l,
    role: i,
    tankmanId: r,
    children: [
      (0, rr.jsx)("div", { className: rm.background }),
      (0, rr.jsx)("div", { className: rm.border }),
      zu.includes(p) && (0, rr.jsx)("div", { className: rm.newPerkBackground }),
      m
        ? (0, rr.jsx)("div", { className: rm.icon })
        : (0, rr.jsx)(_s, { className: rm.icon, path: `tankmen.skills.big.${t}` }),
      $u.includes(p) && (0, rr.jsx)("div", { className: rm.disabledOverlay }),
    ],
  });
}
var om = "Row_94492f2a",
  lm = "Row_training_87a055fa",
  cm = "Row_trainingIcon_478b64c1",
  dm = "Row_container_6520803b",
  um = "Row_container__compression_f3e2cd48",
  mm = "Row_currentProgress_4c0ce954",
  pm = ks.resolve("strings");
function _m({
  perks: e,
  bonusPerk: t = !1,
  quickTraining: a,
  trainingProgress: s = 0,
  className: n,
}) {
  const { slotState: r } = ru();
  return (0, rr.jsxs)("div", {
    className: cs(om, n),
    children: [
      e.map((a, s) =>
        (0, rr.jsx)(
          "div",
          {
            className: cs(dm, e.length > 6 && 8 !== s && um),
            children: (0, rr.jsx)(im, { ...a, index: s, bonusPerk: t }),
          },
          s,
        ),
      ),
      s < 100 &&
        r !== Iu &&
        (0, rr.jsx)("div", {
          className: mm,
          children: (0, rr.jsx)(g, {
            path: "common.percentValue",
            params: { value: s },
            upgradeLegacy: !0,
          }),
        }),
      !t &&
        a &&
        (0, rr.jsx)(Ma, {
          params: {
            header: pm.readOrEmpty("crew_widget.tooltip.buttonsBar.acceleratedTraining_on.header"),
            body: pm.readOrEmpty("crew_widget.tooltip.buttonsBar.acceleratedTraining_on.body"),
          },
          className: lm,
          children: (0, rr.jsx)("div", { className: cm }),
        }),
    ],
  });
}
var hm = {
  "media-wrapper": "Perks_media-wrapper_af622154",
  root: "Perks_root_af622154",
  base: "Perks_1485306a",
  efficiency: "Perks_efficiency_bfe72b43",
  rows: "Perks_rows_2e626685",
  row__bonus: "Perks_row__bonus_f0dcd00d",
};
function gm({ tankman: e, className: t }) {
  const { slotState: a } = ru();
  return (0, rr.jsxs)("div", {
    className: cs(hm.base, t),
    children: [
      a &&
        a !== ku &&
        (0, rr.jsx)(em, {
          className: hm.efficiency,
          bonusPerks: e.bonusPerks.length > 0,
          skillsEfficiency: e.currentVehicleSkillsEfficiency,
        }),
      (0, rr.jsxs)("div", {
        className: hm.rows,
        children: [
          (0, rr.jsx)(_m, {
            className: hm.row,
            perks: qu(e),
            quickTraining: e.quickTraining,
            trainingProgress: e.trainingProgress,
          }),
          e.bonusPerks.length > 0 &&
            (0, rr.jsx)(_m, {
              className: cs(hm.row, hm.row__bonus),
              perks: Zu(e),
              trainingProgress: e.bonusPerks[0] ? e.bonusPerks[0].trainingProgress : 0,
              bonusPerk: !0,
            }),
        ],
      }),
    ],
  });
}
var fm = "Slot_tooltipArea_cfc61e36",
  vm = "Slot_823ddf0",
  bm = "Slot_base__disabled_d386066c",
  xm = "Slot_base__bonusPerk_37755a1",
  ym = "Slot_block_5a0436c4",
  Cm = "Slot_block__empty_891e9635",
  jm = "Slot_perks_658d46a",
  wm = "Slot_perks__warning_de96a8ff",
  Nm = "Slot_vehicleInfo_b3de9df4",
  Im = "Slot_vehicleInfo__active_c2f01f1b",
  Sm = "Slot_overlay_a7b614c0",
  km = "Slot_overlay__active_4dbffa31",
  Pm = "Slot_overlay__bonusPerk_7bdbfd9e",
  Em = "Slot_overlay__hover_b85ae7f7",
  Mm = "Slot_overlay__warning_8fedfb92",
  Lm = "Slot_overlay__disabled_cd31780",
  Am = ks.resolve("aliases"),
  Tm = Hs(function ({ tankmanId: e, roles: t, id: a, tankmanAnimation: s }) {
    const [n, r] = (0, jn.useState)(!1),
      i = It(),
      { model: o, controls: l } = au(),
      c = o.computes.disabled(),
      d = o.vehicleType.get(),
      u = o.vehicleName.get(),
      m = -1 !== e,
      p = m ? o.computes.tankmanById(e) : void 0,
      _ = p && p?.newPerksCount + p?.perks.length,
      h = (function (e) {
        if (e)
          return e.currentVehicleSkillsEfficiency < 1
            ? e.insideNativeTank || -1 !== e.currentVehicleSkillsEfficiency
              ? Iu
              : Su
            : ku;
      })(p),
      f = h === Su,
      v = ia(
        "crewMember",
        (0, jn.useMemo)(() => ({ tankmanID: e, slotIdx: a, previousViewID: null }), [e, a]),
        (0, jn.useMemo)(() => ({ disabled: !m || c }), [m, c]),
      ),
      b = (0, jn.useMemo)(() => ({ tooltipId: "tankman", tankmanID: e }), [e]);
    const x = (0, jn.useMemo)(() => ({ slotId: a, tankmanId: e, slotState: h }), [a, h, e]);
    return (0, rr.jsx)(nu.Provider, {
      value: x,
      children: (0, rr.jsxs)("div", {
        onMouseDown: v?.onMouseDown,
        onMouseEnter: function () {
          (!c && x && i.play("mouse-enter", { target: "crew-widget:slot:mouse-enter" }), r(!0));
        },
        onMouseLeave: () => r(!1),
        onClick: function () {
          c || (i.play("click", { target: "crew-widget:slot" }), l.openCrew(a));
        },
        className: cs(vm, c && bm, t.length > 1 && xm),
        children: [
          m &&
            (0, rr.jsx)(Fa, {
              params: { resId: Am.read((e) => e.hangar.shared.Crew("resId")), args: b },
              className: fm,
            }),
          (0, rr.jsx)("div", { className: cs(Sm, Em, n && km) }),
          (0, rr.jsx)("div", { className: cs(Sm, Mm, f && km) }),
          (0, rr.jsx)(Cu, {
            customizedSkin: p?.customizedSkin ?? !1,
            skinId: p?.crewSkinId.replace("tankman_", ""),
            bonusPerk: t.length > 1,
            animation: s,
          }),
          (0, rr.jsxs)("div", {
            className: cs(ym, !p && Cm),
            children: [
              (0, rr.jsx)(hu, {
                roles: t,
                name: p?.fullName,
                perksAmount: _,
                progress: p?.trainingProgress,
              }),
              p
                ? (0, rr.jsx)(gm, { tankman: p, className: cs(jm, f && wm) })
                : (0, rr.jsx)(g, {
                    upgradeLegacy: !0,
                    className: cs(Nm, n && Im),
                    path: `crew_widget.vehicleWithName.${Me(d)}`,
                    params: { name: u.replace(/<img.*?>/, "") },
                  }),
            ],
          }),
          (0, rr.jsx)("div", { className: cs(Sm, Lm, c && km, p?.bonusPerks.length && Pm) }),
        ],
      }),
    });
  }),
  Dm = "CrewWidget_647da81c",
  Bm = "CrewWidget_divider_1cced5f6",
  Om = Hs(function ({ className: e }) {
    const { model: t } = au(),
      a = t.withDog.get(),
      s = t.computes.slots(),
      [n, r] = Ds(
        () => ({
          from: { opacity: 1 },
          to: [{ opacity: 0 }, { opacity: 1 }],
          config: { duration: 750, easing: (e) => -(Math.cos(Math.PI * e) - 1) / 2 },
          loop: !0,
        }),
        [],
      );
    return (
      (0, jn.useEffect)(() => {
        r.resume();
      }, [r]),
      (0, rr.jsxs)("div", {
        className: cs(Dm, e),
        children: [
          Ve(s, (e, t) =>
            (0, rr.jsxs)(
              "div",
              {
                children: [
                  (0, rr.jsx)(
                    Tm,
                    { tankmanId: e.tankmanId, roles: e.roles, id: e.id, tankmanAnimation: n },
                    -1 === e.tankmanId ? `empty_${t}` : e.tankmanId,
                  ),
                  (0, rr.jsx)("div", { className: Bm }),
                ],
              },
              e.id,
            ),
          ),
          a &&
            (0, rr.jsxs)(rr.Fragment, {
              children: [(0, rr.jsx)(Nu, {}), (0, rr.jsx)("div", { className: Bm })],
            }),
        ],
      })
    );
  }),
  Vm = ks.resolve("aliases");
function Rm({ className: e }) {
  return (0, rr.jsx)(tu, {
    options: { rootId: Vm.read((e) => e.hangar.shared.Crew("resId")) },
    children: (0, rr.jsx)(Om, { className: e }),
  });
}
var Hm = "Divider_9939af4b";
function $m(e) {
  return (0, rr.jsx)(_s, { path: "ui.noise", className: cs(Hm, e.className), fit: "cover" });
}
function zm({ children: e, className: t }) {
  const a = jn.Children.toArray(e);
  return a.length <= 1
    ? e
    : (0, rr.jsx)(rr.Fragment, {
        children: a
          .filter((e) => e)
          .map((e, a) =>
            (0, rr.jsxs)(
              jn.Fragment,
              { children: [a > 0 && (0, rr.jsx)($m, { className: t }), e] },
              a,
            ),
          ),
      });
}
var Fm = {
  frames: {
    import_hover: {
      frame: { x: 0, y: 0, w: 46, h: 49 },
      rotated: !1,
      trimmed: !1,
      spriteSourceSize: { x: 0, y: 0, w: 46, h: 49 },
      sourceSize: { w: 46, h: 49 },
      pivot: { x: 0.5, y: 0.5 },
    },
    import: {
      frame: { x: 46, y: 0, w: 46, h: 49 },
      rotated: !1,
      trimmed: !1,
      spriteSourceSize: { x: 0, y: 0, w: 46, h: 49 },
      sourceSize: { w: 46, h: 49 },
      pivot: { x: 0.5, y: 0.5 },
    },
    alert_lg: {
      frame: { x: 0, y: 49, w: 48, h: 48 },
      rotated: !1,
      trimmed: !1,
      spriteSourceSize: { x: 0, y: 0, w: 48, h: 48 },
      sourceSize: { w: 48, h: 48 },
      pivot: { x: 0.5, y: 0.5 },
    },
    close_48: {
      frame: { x: 48, y: 49, w: 48, h: 48 },
      rotated: !1,
      trimmed: !1,
      spriteSourceSize: { x: 0, y: 0, w: 48, h: 48 },
      sourceSize: { w: 48, h: 48 },
      pivot: { x: 0.5, y: 0.5 },
    },
    alert: {
      frame: { x: 96, y: 0, w: 29, h: 27 },
      rotated: !1,
      trimmed: !1,
      spriteSourceSize: { x: 0, y: 0, w: 29, h: 27 },
      sourceSize: { w: 29, h: 27 },
      pivot: { x: 0.5, y: 0.5 },
    },
    card_close: {
      frame: { x: 96, y: 27, w: 24, h: 24 },
      rotated: !1,
      trimmed: !1,
      spriteSourceSize: { x: 0, y: 0, w: 24, h: 24 },
      sourceSize: { w: 24, h: 24 },
      pivot: { x: 0.5, y: 0.5 },
    },
    card_add_active: {
      frame: { x: 96, y: 51, w: 24, h: 24 },
      rotated: !1,
      trimmed: !1,
      spriteSourceSize: { x: 0, y: 0, w: 24, h: 24 },
      sourceSize: { w: 24, h: 24 },
      pivot: { x: 0.5, y: 0.5 },
    },
    card_add_hover: {
      frame: { x: 0, y: 97, w: 24, h: 24 },
      rotated: !1,
      trimmed: !1,
      spriteSourceSize: { x: 0, y: 0, w: 24, h: 24 },
      sourceSize: { w: 24, h: 24 },
      pivot: { x: 0.5, y: 0.5 },
    },
    add_hover: {
      frame: { x: 24, y: 97, w: 24, h: 24 },
      rotated: !1,
      trimmed: !1,
      spriteSourceSize: { x: 0, y: 0, w: 24, h: 24 },
      sourceSize: { w: 24, h: 24 },
      pivot: { x: 0.5, y: 0.5 },
    },
    card_close_active: {
      frame: { x: 48, y: 97, w: 24, h: 24 },
      rotated: !1,
      trimmed: !1,
      spriteSourceSize: { x: 0, y: 0, w: 24, h: 24 },
      sourceSize: { w: 24, h: 24 },
      pivot: { x: 0.5, y: 0.5 },
    },
    card_close_hover: {
      frame: { x: 72, y: 97, w: 24, h: 24 },
      rotated: !1,
      trimmed: !1,
      spriteSourceSize: { x: 0, y: 0, w: 24, h: 24 },
      sourceSize: { w: 24, h: 24 },
      pivot: { x: 0.5, y: 0.5 },
    },
    checked: {
      frame: { x: 96, y: 75, w: 24, h: 24 },
      rotated: !1,
      trimmed: !1,
      spriteSourceSize: { x: 0, y: 0, w: 24, h: 24 },
      sourceSize: { w: 24, h: 24 },
      pivot: { x: 0.5, y: 0.5 },
    },
    add: {
      frame: { x: 0, y: 121, w: 24, h: 24 },
      rotated: !1,
      trimmed: !1,
      spriteSourceSize: { x: 0, y: 0, w: 24, h: 24 },
      sourceSize: { w: 24, h: 24 },
      pivot: { x: 0.5, y: 0.5 },
    },
    card_add: {
      frame: { x: 24, y: 121, w: 24, h: 24 },
      rotated: !1,
      trimmed: !1,
      spriteSourceSize: { x: 0, y: 0, w: 24, h: 24 },
      sourceSize: { w: 24, h: 24 },
      pivot: { x: 0.5, y: 0.5 },
    },
    trash_can: {
      frame: { x: 48, y: 121, w: 24, h: 24 },
      rotated: !1,
      trimmed: !1,
      spriteSourceSize: { x: 0, y: 0, w: 24, h: 24 },
      sourceSize: { w: 24, h: 24 },
      pivot: { x: 0.5, y: 0.5 },
    },
    arrow_down: {
      frame: { x: 125, y: 0, w: 12, h: 12 },
      rotated: !1,
      trimmed: !1,
      spriteSourceSize: { x: 0, y: 0, w: 12, h: 12 },
      sourceSize: { w: 12, h: 12 },
      pivot: { x: 0.5, y: 0.5 },
    },
  },
  meta: { size: { w: 137, h: 145 }, scale: 1 },
};
function Wm({ value: e, ...t }) {
  return (0, rr.jsx)(Jt, {
    ...t,
    sprite: Fm,
    path: "hangar.playlists.icons",
    icon: e,
    className: t.className,
  });
}
var qm = Ss("IconContainer", "Icon_container_83f4dd0e"),
  Zm = At(function (e) {
    const t = er(),
      a = Gn().model.byIdUnsafe(e.id);
    u(void 0 !== a, `Playlist with ${e.id} is not found`);
    const s = t.model.accumulateByIds(a.list).length;
    return a.list.length <= s
      ? null
      : (0, rr.jsx)(Gm, {
          className: e.className,
          classNames: e.classNames,
          displayAmount: s,
          size: e.size,
          realAmountInPlaylist: a.list.length,
        });
  });
function Gm(e) {
  const t = ks.resolve("strings"),
    a = bs({
      header: t
        .readOrEmpty("playlists.validation.unavailable.title")
        .replace("{{display}}", e.displayAmount.toString())
        .replace("{{total}}", e.realAmountInPlaylist.toString()),
      body: t.readOrEmpty("playlists.validation.unavailable.body"),
    }),
    s = "lg" === e.size ? "alert_lg" : "alert";
  return (0, rr.jsx)("lg" === e.size ? qm : "div", {
    ...a,
    className: cs(e.classNames?.container, e.className),
    children: (0, rr.jsx)(Wm, { className: e.classNames?.icon, value: s }),
  });
}
var Um = (e) =>
    (0, rr.jsxs)("svg", {
      width: 24,
      height: 24,
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      xmlnsXlink: "http://www.w3.org/1999/xlink",
      ...e,
      children: [
        (0, rr.jsxs)("g", {
          opacity: 0.8,
          children: [
            (0, rr.jsx)("path", {
              d: "M6 18.9994C6.00022 19.5515 6.44784 19.9994 7 19.9994H17C17.5522 19.9994 17.9998 19.5515 18 18.9994V14.4994H19V19.2494C18.9999 19.7134 18.8153 20.1586 18.4873 20.4867C18.1591 20.8148 17.714 20.9994 17.25 20.9994H6.75C6.28596 20.9994 5.84086 20.8148 5.5127 20.4867C5.18465 20.1586 5.00011 19.7134 5 19.2494V14.4994H6V18.9994Z",
              fill: "#0D0E10",
            }),
            (0, rr.jsx)("path", {
              d: "M11.7002 4.08047C11.878 3.94714 12.122 3.94714 12.2998 4.08047L15.7998 6.70547C15.9256 6.79988 16 6.94759 16 7.10488V7.89492C15.9998 8.2993 15.5442 8.53603 15.2129 8.3041L13.1426 6.85488L13.0059 14.5521C13.0024 14.7382 12.8959 14.9073 12.7295 14.9906L11.7109 15.4994C11.3817 15.6641 10.9931 15.4281 10.9873 15.06L10.8574 6.85488L8.78711 8.3041C8.45578 8.53602 8.00017 8.29929 8 7.89492V7.10488C8.00005 6.94759 8.07438 6.79988 8.2002 6.70547L11.7002 4.08047Z",
              fill: "#0D0E10",
            }),
          ],
        }),
        (0, rr.jsxs)("g", {
          opacity: 0.9,
          children: [
            (0, rr.jsx)("path", {
              d: "M6 17.9993C6.00001 18.5516 6.44771 18.9993 7 18.9993H17C17.5523 18.9993 18 18.5516 18 17.9993V13.4993H19V18.2493C19 18.7134 18.8154 19.1584 18.4873 19.4866C18.1591 19.8148 17.7141 19.9993 17.25 19.9993H6.75C6.28587 19.9993 5.84087 19.8148 5.5127 19.4866C5.18456 19.1584 5 18.7134 5 18.2493V13.4993H6V17.9993Z",
              fill: "url(#paint0_radial_111851_505989)",
            }),
            (0, rr.jsx)("path", {
              d: "M11.7002 3.08033C11.8779 2.94718 12.1221 2.94718 12.2998 3.08033L15.7998 5.70533C15.9255 5.79967 15.9999 5.9476 16 6.10475V6.89479C15.9998 7.29917 15.5442 7.5359 15.2129 7.30397L13.1426 5.85475L13.0059 13.552C13.0025 13.7381 12.8958 13.9072 12.7295 13.9905L11.7109 14.4993C11.3816 14.664 10.9931 14.428 10.9873 14.0598L10.8574 5.85475L8.78711 7.30397C8.45578 7.5359 8.00016 7.29917 8 6.89479V6.10475C8.00017 5.9476 8.07448 5.79967 8.2002 5.70533L11.7002 3.08033Z",
              fill: "url(#paint1_radial_111851_505989)",
            }),
          ],
        }),
        (0, rr.jsxs)("defs", {
          children: [
            (0, rr.jsxs)("radialGradient", {
              id: "paint0_radial_111851_505989",
              cx: 0,
              cy: 0,
              r: 1,
              gradientUnits: "userSpaceOnUse",
              gradientTransform: "translate(12 16.7494) rotate(180) scale(8.90909 4.12906)",
              children: [
                (0, rr.jsx)("stop", { offset: 6.20882e-10, stopColor: "#EDE6D9" }),
                (0, rr.jsx)("stop", { offset: 1, stopColor: "#C2C7CE" }),
              ],
            }),
            (0, rr.jsxs)("radialGradient", {
              id: "paint1_radial_111851_505989",
              cx: 0,
              cy: 0,
              r: 1,
              gradientUnits: "userSpaceOnUse",
              gradientTransform: "translate(12 16.7494) rotate(180) scale(8.90909 4.12906)",
              children: [
                (0, rr.jsx)("stop", { offset: 6.20882e-10, stopColor: "#EDE6D9" }),
                (0, rr.jsx)("stop", { offset: 1, stopColor: "#C2C7CE" }),
              ],
            }),
          ],
        }),
      ],
    }),
  Km = (e) =>
    (0, rr.jsxs)("svg", {
      width: 24,
      height: 24,
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      xmlnsXlink: "http://www.w3.org/1999/xlink",
      ...e,
      children: [
        (0, rr.jsxs)("g", {
          opacity: 0.8,
          children: [
            (0, rr.jsx)("path", {
              d: "M6 18.999C6 19.5513 6.44771 19.999 7 19.999H17C17.5523 19.999 18 19.5513 18 18.999V14.499H19V19.249C19 19.713 18.8153 20.1581 18.4873 20.4863C18.1591 20.8145 17.7141 20.999 17.25 20.999H6.75C6.28587 20.999 5.84088 20.8145 5.5127 20.4863C5.18469 20.1581 5 19.713 5 19.249V14.499H6V18.999Z",
              fill: "#0D0E10",
            }),
            (0, rr.jsx)("path", {
              d: "M17.4688 5.1074C17.5632 5.00362 17.7316 5.0247 17.7979 5.14842L17.9043 5.34569C17.9637 5.45694 17.9559 5.59208 17.8848 5.69627L12.0205 14.289C11.8912 14.4784 11.6148 14.4873 11.4736 14.3066L7.63281 9.39256C7.55247 9.28976 7.5376 9.15 7.5957 9.03319L7.70508 8.81346C7.79981 8.62301 8.04473 8.56631 8.21387 8.6953L11.5117 11.2099C11.6515 11.3165 11.8496 11.2989 11.9678 11.1689L17.4688 5.1074Z",
              fill: "#0D0E10",
            }),
          ],
        }),
        (0, rr.jsxs)("g", {
          opacity: 0.9,
          filter: "url(#filter0_d_111851_505985)",
          children: [
            (0, rr.jsx)("path", {
              d: "M6 17.999C6 18.5513 6.44771 18.999 7 18.999H17C17.5523 18.999 18 18.5513 18 17.999V13.499H19V18.249C19 18.713 18.8153 19.1581 18.4873 19.4863C18.1591 19.8145 17.7141 19.999 17.25 19.999H6.75C6.28587 19.999 5.84088 19.8145 5.5127 19.4863C5.18469 19.1581 5 18.713 5 18.249V13.499H6V17.999Z",
              fill: "url(#paint0_radial_111851_505985)",
            }),
            (0, rr.jsx)("path", {
              d: "M17.4688 4.1074C17.5632 4.00362 17.7316 4.0247 17.7979 4.14842L17.9043 4.34569C17.9637 4.45694 17.9559 4.59208 17.8848 4.69627L12.0205 13.289C11.8912 13.4784 11.6148 13.4873 11.4736 13.3066L7.63281 8.39256C7.55247 8.28976 7.5376 8.15 7.5957 8.03319L7.70508 7.81346C7.79981 7.62301 8.04473 7.56631 8.21387 7.6953L11.5117 10.2099C11.6515 10.3165 11.8496 10.2989 11.9678 10.1689L17.4688 4.1074Z",
              fill: "url(#paint1_radial_111851_505985)",
            }),
          ],
        }),
        (0, rr.jsxs)("defs", {
          children: [
            (0, rr.jsxs)("filter", {
              id: "filter0_d_111851_505985",
              x: 5,
              y: 4.04102,
              width: 14,
              height: 16.958,
              filterUnits: "userSpaceOnUse",
              colorInterpolationFilters: "sRGB",
              children: [
                (0, rr.jsx)("feFlood", { floodOpacity: 0, result: "BackgroundImageFix" }),
                (0, rr.jsx)("feColorMatrix", {
                  in: "SourceAlpha",
                  type: "matrix",
                  values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",
                  result: "hardAlpha",
                }),
                (0, rr.jsx)("feOffset", { dy: 1 }),
                (0, rr.jsx)("feComposite", { in2: "hardAlpha", operator: "out" }),
                (0, rr.jsx)("feColorMatrix", {
                  type: "matrix",
                  values: "0 0 0 0 0.0509804 0 0 0 0 0.054902 0 0 0 0 0.0627451 0 0 0 1 0",
                }),
                (0, rr.jsx)("feBlend", {
                  mode: "normal",
                  in2: "BackgroundImageFix",
                  result: "effect1_dropShadow_111851_505985",
                }),
                (0, rr.jsx)("feBlend", {
                  mode: "normal",
                  in: "SourceGraphic",
                  in2: "effect1_dropShadow_111851_505985",
                  result: "shape",
                }),
              ],
            }),
            (0, rr.jsxs)("radialGradient", {
              id: "paint0_radial_111851_505985",
              cx: 0,
              cy: 0,
              r: 1,
              gradientTransform: "matrix(-6.93695 6.47435 0.654517 0.610869 13.4895 9.08247)",
              gradientUnits: "userSpaceOnUse",
              children: [
                (0, rr.jsx)("stop", { offset: 6.20882e-10, stopColor: "#EDE6D9" }),
                (0, rr.jsx)("stop", { offset: 1, stopColor: "#C2C7CE" }),
              ],
            }),
            (0, rr.jsxs)("radialGradient", {
              id: "paint1_radial_111851_505985",
              cx: 0,
              cy: 0,
              r: 1,
              gradientTransform: "matrix(-6.93695 6.47435 0.654517 0.610869 13.4895 9.08247)",
              gradientUnits: "userSpaceOnUse",
              children: [
                (0, rr.jsx)("stop", { offset: 6.20882e-10, stopColor: "#EDE6D9" }),
                (0, rr.jsx)("stop", { offset: 1, stopColor: "#C2C7CE" }),
              ],
            }),
          ],
        }),
      ],
    }),
  Xm = {
    "media-wrapper": "CopyButton_media-wrapper_49d34ed8",
    root: "CopyButton_root_49d34ed8",
    base: "CopyButton_67fe8760",
    base__enabled: "CopyButton_base__enabled_49d34ed8",
    base__disabled: "CopyButton_base__disabled_4ef2eeda",
    icon: "CopyButton_icon_e339ed33",
    base__copyStatus: "CopyButton_base__copyStatus_49d34ed8",
    icon__export: "CopyButton_icon__export_49d34ed8",
    base__copiedStatus: "CopyButton_base__copiedStatus_49d34ed8",
    icon__exportDone: "CopyButton_icon__exportDone_8d5db080",
  },
  Ym = ks.resolve("strings"),
  Jm = function (e) {
    const [t, a] = (0, jn.useState)("copy"),
      s = c(),
      n = bs({
        header: Ym.readOrEmpty("playlists.share.copy_button.title"),
        body: Ym.readOrEmpty("playlists.share.copy_button.body"),
      }),
      r = It();
    return (0, rr.jsxs)("div", {
      ...n,
      "data-test-id": "copyButton",
      className: cs(
        Xm.base,
        Xm[`base__${t}Status`],
        e.disabled ? Xm.base__disabled : Xm.base__enabled,
      ),
      onClick: (t) => {
        if ((n.onClick(), e.disabled)) return;
        r.play("click", { target: "vehicle:playlists:copy_button", original: t });
        const i = e.onCopy();
        "string" == typeof i &&
          Y(i)
            .then((e) => {
              (e ? a("copied") : console.error("Write to clipboard has been failure"),
                s.run(() => a("copy"), 1e3));
            })
            .catch((e) => console.error(e));
      },
      onMouseEnter: (t) => {
        (n.onMouseEnter(t),
          e.disabled ||
            r.play("mouse-enter", { target: "vehicle:playlists:copy_button", original: t }));
      },
      children: [
        (0, rr.jsx)(Um, { className: cs(Xm.icon, Xm.icon__export) }),
        (0, rr.jsx)(Km, { className: cs(Xm.icon, Xm.icon__exportDone) }),
      ],
    });
  },
  Qm = (e) =>
    (0, rr.jsxs)("svg", {
      width: 24,
      height: 24,
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      xmlnsXlink: "http://www.w3.org/1999/xlink",
      ...e,
      children: [
        (0, rr.jsxs)("g", {
          opacity: 0.8,
          children: [
            (0, rr.jsx)("path", {
              d: "M9.99805 8H5.00195L5 20H17V17H17.9961V19.5C17.9961 20.6045 17.1045 20.9999 16 21H6C4.89543 21 3.99609 20.6046 3.99609 19.5L3.99805 8.5C3.99805 7.39543 4.89348 7 5.99805 7H9.99805V8Z",
              fill: "#0D0E10",
            }),
            (0, rr.jsx)("path", {
              d: "M18.002 9.56445L12 15.5L9 16L9.5 13L15.4375 7.00977L18.002 9.56445Z",
              fill: "#0D0E10",
            }),
            (0, rr.jsx)("path", {
              d: "M20.9609 6.61133L18.9492 8.49902L16.4307 5.89941L18.3965 4.05762L20.9609 6.61133Z",
              fill: "#0D0E10",
            }),
          ],
        }),
        (0, rr.jsxs)("g", {
          opacity: 0.9,
          filter: "url(#filter0_d_111851_505977)",
          children: [
            (0, rr.jsx)("path", {
              d: "M9.99805 7H5.00195L5 19H17V16H17.9961V18.5C17.9961 19.6045 17.1045 19.9999 16 20H6C4.89543 20 3.99609 19.6046 3.99609 18.5L3.99805 7.5C3.99805 6.39543 4.89348 6 5.99805 6H9.99805V7Z",
              fill: "url(#paint0_radial_111851_505977)",
            }),
            (0, rr.jsx)("path", {
              d: "M18.002 8.56445L12 14.5L9 15L9.5 12L15.4375 6.00977L18.002 8.56445Z",
              fill: "url(#paint1_radial_111851_505977)",
            }),
            (0, rr.jsx)("path", {
              d: "M20.9609 5.61133L18.9492 7.49902L16.4307 4.89941L18.3965 3.05762L20.9609 5.61133Z",
              fill: "url(#paint2_radial_111851_505977)",
            }),
          ],
        }),
        (0, rr.jsxs)("defs", {
          children: [
            (0, rr.jsxs)("filter", {
              id: "filter0_d_111851_505977",
              x: 3.99609,
              y: 3.05762,
              width: 16.9648,
              height: 17.9424,
              filterUnits: "userSpaceOnUse",
              colorInterpolationFilters: "sRGB",
              children: [
                (0, rr.jsx)("feFlood", { floodOpacity: 0, result: "BackgroundImageFix" }),
                (0, rr.jsx)("feColorMatrix", {
                  in: "SourceAlpha",
                  type: "matrix",
                  values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",
                  result: "hardAlpha",
                }),
                (0, rr.jsx)("feOffset", { dy: 1 }),
                (0, rr.jsx)("feComposite", { in2: "hardAlpha", operator: "out" }),
                (0, rr.jsx)("feColorMatrix", {
                  type: "matrix",
                  values: "0 0 0 0 0.0509804 0 0 0 0 0.054902 0 0 0 0 0.0627451 0 0 0 1 0",
                }),
                (0, rr.jsx)("feBlend", {
                  mode: "normal",
                  in2: "BackgroundImageFix",
                  result: "effect1_dropShadow_111851_505977",
                }),
                (0, rr.jsx)("feBlend", {
                  mode: "normal",
                  in: "SourceGraphic",
                  in2: "effect1_dropShadow_111851_505977",
                  result: "shape",
                }),
              ],
            }),
            (0, rr.jsxs)("radialGradient", {
              id: "paint0_radial_111851_505977",
              cx: 0,
              cy: 0,
              r: 1,
              gradientTransform: "matrix(-8.40602 7.33326 0.793127 0.69191 14.2835 7.63523)",
              gradientUnits: "userSpaceOnUse",
              children: [
                (0, rr.jsx)("stop", { offset: 6.20882e-10, stopColor: "#EDE6D9" }),
                (0, rr.jsx)("stop", { offset: 1, stopColor: "#C2C7CE" }),
              ],
            }),
            (0, rr.jsxs)("radialGradient", {
              id: "paint1_radial_111851_505977",
              cx: 0,
              cy: 0,
              r: 1,
              gradientTransform: "matrix(-8.40602 7.33326 0.793127 0.69191 14.2835 7.63523)",
              gradientUnits: "userSpaceOnUse",
              children: [
                (0, rr.jsx)("stop", { offset: 6.20882e-10, stopColor: "#EDE6D9" }),
                (0, rr.jsx)("stop", { offset: 1, stopColor: "#C2C7CE" }),
              ],
            }),
            (0, rr.jsxs)("radialGradient", {
              id: "paint2_radial_111851_505977",
              cx: 0,
              cy: 0,
              r: 1,
              gradientTransform: "matrix(-8.40602 7.33326 0.793127 0.69191 14.2835 7.63523)",
              gradientUnits: "userSpaceOnUse",
              children: [
                (0, rr.jsx)("stop", { offset: 6.20882e-10, stopColor: "#EDE6D9" }),
                (0, rr.jsx)("stop", { offset: 1, stopColor: "#C2C7CE" }),
              ],
            }),
          ],
        }),
      ],
    }),
  ep = "EditButton_e0942ef0",
  tp = "EditButton_icon_a08c89e9",
  ap = ks.resolve("strings");
function sp({ id: e, className: t }) {
  const a = It(),
    s = ct(),
    n = bs({
      header: ap.readOrEmpty("playlists.edit_button.title"),
      body: ap.readOrEmpty("playlists.edit_button.body"),
    });
  return (0, rr.jsx)("div", {
    ...n,
    className: cs(ep, t),
    "data-test-id": "editButton",
    onClick: (t) => {
      (n.onClick(),
        a.play("click", { target: "vehicle:playlists:edit_button", original: t }),
        s.push("/hangar/editVehiclePlaylists", { id: e }));
    },
    onMouseEnter: (e) => {
      (n.onMouseEnter(e),
        a.play("mouse-enter", { target: "vehicle:playlists:edit_button", original: e }));
    },
    children: (0, rr.jsx)(Qm, { className: tp }),
  });
}
var np = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-_";
var rp = "Item_background_5cb932c1",
  ip = "Item_c5163bf",
  op = "Item_base__selected_5f6fcc69",
  lp = "Item_button_8b3e738d",
  cp = "Item_selectedIcon_eb50b3a6",
  dp = "Item_content_db9841ac",
  up = "Item_title_3edba705",
  mp = "Item_actions_63add2d",
  pp = Oe({ container: "Item_alert_31c28fa6", icon: "Item_alertIcon_f872f769" }),
  _p = At(function (e) {
    const { playlist: t } = e,
      a = Gn(),
      s = Nt();
    return (0, rr.jsxs)("div", {
      className: cs(ip, a.model.currentId() === e.id && op),
      children: [
        (0, rr.jsx)("div", { className: rp }),
        (0, rr.jsxs)(qt, {
          className: lp,
          onClick: () => {
            (a.controls.select(e.id), s.close());
          },
          "data-test-id": `playlist-${t.title}`,
          children: [
            (0, rr.jsxs)("span", {
              className: dp,
              children: [
                (0, rr.jsx)(Wm, { value: "checked", className: cp }),
                (0, rr.jsx)(ra, { text: t.title, className: up }),
                (0, rr.jsx)(Zm, { id: e.id, classNames: pp }),
              ],
            }),
            (0, rr.jsxs)("span", {
              className: mp,
              onClick: (e) => e.stopPropagation(),
              children: [
                (0, rr.jsx)(Jm, {
                  onCopy: function () {
                    const e = (function (e) {
                      if (0 === e.length) return On("EMPTY_INPUT");
                      const t = (function (e) {
                          let t = e[0] ?? 0;
                          for (let a = 0; a < e.length; a++) t = (t + e[a]) & 65535;
                          return t;
                        })(e),
                        a = new Uint8Array(5 + 5 * e.length);
                      ((a[0] = t >>> 8), (a[1] = 255 & t), (a[2] = 1));
                      let s = 5;
                      for (let l = 0; l < e.length; l++) {
                        let t = e[l];
                        for (;;) {
                          const e = 127 & t;
                          if (((t >>>= 7), 0 === t)) {
                            ((a[s] = e), s++);
                            break;
                          }
                          ((a[s] = 128 | e), s++);
                        }
                      }
                      ((a[3] = (s - 5) >>> 8), (a[4] = (s - 5) & 255));
                      let n = "",
                        r = 0n,
                        i = 0;
                      const o = a.slice(0, s);
                      for (const l of o)
                        for (r = (r << 8n) | BigInt(l), i += 8; i >= 6;) {
                          i -= 6;
                          const e = Number((r >> BigInt(i)) & 63n);
                          ((n += np[e]), (r &= (1n << BigInt(i)) - 1n));
                        }
                      if (i > 0) {
                        const e = 63 & Number(r << BigInt(6 - i));
                        n += np[e];
                      }
                      return Bn(n);
                    })(t.list);
                    return "error" === e.type ? console.error(e.error) : e.value;
                  },
                  disabled: 0 === t.list.length,
                }),
                (0, rr.jsx)(sp, { id: e.id }),
              ],
            }),
          ],
        }),
      ],
    });
  }),
  hp = At(function (e) {
    const t = Gn().model.byId(e.id);
    return "ok" === t.type && void 0 !== t.value
      ? (0, rr.jsx)(_p, { playlist: t.value, id: e.id })
      : null;
  }),
  gp = At(function () {
    const e = Gn(),
      t = Nt();
    return (0, rr.jsxs)("div", {
      className: cs(ip, !e.model.currentId() && op),
      children: [
        (0, rr.jsx)("div", { className: rp }),
        (0, rr.jsx)(qt, {
          className: lp,
          onClick: () => {
            (e.controls.select(void 0), t.close());
          },
          "data-test-id": "playlist-AllVehicles",
          children: (0, rr.jsxs)("span", {
            children: [
              (0, rr.jsx)(Wm, { value: "checked", className: cp }),
              ks.resolve("strings").readOrEmpty("pages.titles.allVehicles"),
            ],
          }),
        }),
      ],
    });
  }),
  fp = "Content_divider_f0c848b4",
  vp = "Content_icon_4da9c1eb",
  bp = "Content_trigger_4b0aad5c",
  xp = "Content_triggerText_2dc694b6",
  yp = At(function () {
    const e = Gn().model.sortedIds();
    return (0, rr.jsxs)("div", {
      children: [(0, rr.jsx)(gp, {}), e.map((e) => (0, rr.jsx)(hp, { id: e }, e))],
    });
  }),
  Cp = Ss("Divider", fp),
  jp = At(function (e) {
    const t = Gn(),
      a = ks.resolve("strings"),
      [s, n] = Ft("add");
    return (0, rr.jsxs)(e.asChild ? sa : qt, {
      className: bp,
      "data-test-id": "createPlaylist",
      onMouseEnter: () => n(!0),
      onMouseLeave: () => n(!1),
      onClick: () => t.controls.create(),
      children: [
        (0, rr.jsx)(qm, { className: vp, children: (0, rr.jsx)(Wm, { value: s }) }),
        (0, rr.jsx)("span", { className: xp, children: a.readOrEmpty("playlists.list.create") }),
      ],
    });
  }),
  wp = function (e) {
    const t = Gn(),
      a = ks.resolve("strings"),
      [s, n] = Ft("import");
    return (0, rr.jsxs)(e.asChild ? sa : qt, {
      className: bp,
      "data-test-id": "importPlaylist",
      onClick: t.controls.openImport,
      onMouseEnter: () => n(!0),
      onMouseLeave: () => n(!1),
      children: [
        (0, rr.jsx)(qm, { className: vp, children: (0, rr.jsx)(Wm, { value: s }) }),
        (0, rr.jsx)("span", {
          className: xp,
          children: a.readOrEmpty("playlists.imports.trigger"),
        }),
      ],
    });
  },
  Np = "Dropdown_popover_b5203d93",
  Ip = "Dropdown_scrollContent_7363dda3",
  Sp = "Dropdown_bar_2d94e05e",
  kp = "Dropdown_area_a34c2ecf",
  Pp = "Dropdown_area__begin_af756086",
  Ep = "Dropdown_area__end_3b89247a",
  Mp = "Dropdown_list_41b8eefe",
  Lp = "Dropdown_triggers_b8372e20",
  Ap = "Dropdown_currentTitle_11ba3707",
  Tp = "Dropdown_trigger_f754201d",
  Dp = "Dropdown_currentTitleText_13099382",
  Bp = "Dropdown_alert_8195eae1",
  Op = "Dropdown_alertIcon_61f05dd3",
  Vp = "Dropdown_arrow_5a21c825",
  Rp = "Dropdown_arrow__opened_ef9f7c1d",
  Hp = ks.resolve("strings"),
  $p = [25, 25],
  zp = Oe({ container: Bp, icon: Op }),
  Fp = At(function () {
    const { api: e } = Bt(),
      [t, a] = $a(e, $p),
      { opened: s } = Nt();
    return (
      (0, jn.useEffect)(() => {
        if (s) return tt(() => tt(e.recalculateContent));
      }, [s, e.recalculateContent]),
      (0, rr.jsx)(ca, {
        className: cs(kp, !t && Pp, !a && Ep),
        classNames: { content: Ip },
        children: (0, rr.jsx)(yp, {}),
      })
    );
  }),
  Wp = At(function (e) {
    const t = Kn();
    return t && t.model.enabled.get()
      ? (0, rr.jsx)(ta.Portal, {
          position: "bottom",
          ...e,
          children: (0, rr.jsx)(Lt, {
            children: (0, rr.jsxs)(ta.Display, {
              "data-name": "playlist-dropdown-content",
              className: Np,
              children: [
                (0, rr.jsx)(ta.Tip, {}),
                (0, rr.jsx)("div", {
                  className: Mp,
                  children: (0, rr.jsxs)(Xa, {
                    children: [(0, rr.jsx)(Fp, {}), (0, rr.jsx)(es, { classNames: { base: Sp } })],
                  }),
                }),
                (0, rr.jsx)(Cp, {}),
                (0, rr.jsxs)("div", {
                  className: Lp,
                  children: [(0, rr.jsx)(jp, {}), (0, rr.jsx)(wp, {})],
                }),
              ],
            }),
          }),
        })
      : null;
  });
function qp(e) {
  const t = Nt();
  return (0, rr.jsx)(Wm, { value: "arrow_down", className: cs(Vp, t.opened && Rp, e.className) });
}
var Zp = At(function (e) {
    const t = e.limit
      ? (function (e, t, a = "...") {
          return (
            u(
              t - a.length >= 0,
              `Incorrect tranticate config max(${t}) - rest.length(${a.length}) must be greater than 0`,
            ),
            e.length <= t ? [e, !1] : [`${e.slice(0, t - a.length)}${a}`, !0]
          );
        })(e.title, e.limit)[0]
      : e.title;
    return (0, rr.jsxs)("div", {
      className: cs(Ap, e.className),
      children: [
        (0, rr.jsx)(ra, { text: t, className: Dp }),
        e.id && (0, rr.jsx)(Zm, { classNames: zp, id: e.id, size: e.alertSize }),
      ],
    });
  }),
  Gp = At(function (e) {
    const t = Kn(),
      a = t?.model.current(),
      s = It(),
      n = bs({ header: a?.title, body: Hp.readOrEmpty("playlists.trigger.explain") });
    if (!t || !1 === t.model.enabled.get()) return e.fallback;
    const r = e.asChild ? sa : "div";
    return (0, rr.jsx)(ta.Trigger, {
      children: (t) =>
        (0, rr.jsx)(rr.Fragment, {
          children: (0, rr.jsxs)(r, {
            ...t,
            onMouseEnter: (e) => {
              (n?.onMouseEnter(e),
                s.play("mouse-enter", {
                  target: "vehicle:playlists:dropdown_trigger",
                  original: e,
                }));
            },
            onClick: (e) => {
              (n?.onClick(),
                s.play("click", { target: "vehicle:playlists:dropdown_trigger", original: e }),
                t.onClick(e));
            },
            onMouseLeave: n?.onMouseLeave,
            "data-name": "playlist-dropdown-trigger",
            "data-test-id": "playlistDropdown",
            className: cs(Tp, e.className),
            children: [
              (0, rr.jsx)(St, { children: e.children }),
              a
                ? (0, rr.jsx)(Zp, {
                    limit: e.limit,
                    id: a.id,
                    title: a.title,
                    alertSize: e.alertSize,
                  })
                : (0, rr.jsx)(Zp, { title: Hp.readOrEmpty("pages.titles.allVehicles") }),
              (0, rr.jsx)(qp, {}),
            ],
          }),
        }),
    });
  }),
  Up = (0, jn.createContext)(void 0);
function Kp() {
  const e = (0, jn.useContext)(Up);
  if (!e)
    throw new Error("Can't call useFilters outside of FiltersContext Provider. Please wrap it.");
  return e;
}
var Xp = {
    "media-wrapper": "FilterPopover_media-wrapper_19a04a6d",
    root: "FilterPopover_root_19a04a6d",
    popover: "FilterPopover_popover_accae82b",
    header: "FilterPopover_header_98e6ac8",
    playlistTrigger: "FilterPopover_playlistTrigger_fd8fa4b3",
    playlistTitle: "FilterPopover_playlistTitle_595e5af4",
    playlistPortal: "FilterPopover_playlistPortal_1868cfd6",
    currentValue: "FilterPopover_currentValue_db69f42c",
    body: "FilterPopover_body_9e82b944",
    category: "FilterPopover_category_aa274a28",
    vehicleLevel: "FilterPopover_vehicleLevel_41885117",
    scroll: "FilterPopover_scroll_bce24275",
    filterButton: "FilterPopover_filterButton_8a608ce2",
    filterTrigger: "FilterPopover_filterTrigger_bec0927e",
    filterTrigger__activeFilter: "FilterPopover_filterTrigger__activeFilter_b08c0419",
    triggerContent: "FilterPopover_triggerContent_29db43f9",
    bulb: "FilterPopover_bulb_ed2e0058",
    activeFilterContent: "FilterPopover_activeFilterContent_3dc1bcaa",
    total: "FilterPopover_total_edd4808d",
    slash: "FilterPopover_slash_5ea5aa2b",
    resetIcon: "FilterPopover_resetIcon_20987c04",
    toggleContainer: "FilterPopover_toggleContainer_c7079ba8",
    toggleContainer__type: "FilterPopover_toggleContainer__type_38a25c90",
    toggle: "FilterPopover_toggle_747f4b53",
    toggle__type: "FilterPopover_toggle__type_6486dde5",
    nationWrapper: "FilterPopover_nationWrapper_c9512daf",
    nationIcon: "FilterPopover_nationIcon_2456921e",
    toggle__activated: "FilterPopover_toggle__activated_19a04a6d",
    specialsIcons: "FilterPopover_specialsIcons_5a3d8e7",
    specialsIcons__favorite: "FilterPopover_specialsIcons__favorite_c7792d3a",
    searchInputWrapper: "FilterPopover_searchInputWrapper_dc7e630e",
    search: "FilterPopover_search_19a04a6d",
    inputField: "FilterPopover_inputField_a2989dce",
    inputPlaceholder: "FilterPopover_inputPlaceholder_5ac00a5",
    footer: "FilterPopover_footer_b16000c8",
    footerButtons: "FilterPopover_footerButtons_69a472c1",
    carouselIcon: "FilterPopover_carouselIcon_a4555032",
    carouselIcon__active: "FilterPopover_carouselIcon__active_29db43f9",
    carouselChanger: "FilterPopover_carouselChanger_4432f804",
  },
  Yp = At(function (e) {
    const t = Kp(),
      a = t.tooltipHeaderMap ?? Qs,
      s = t.tooltipBodyMap ?? en,
      n = ks.resolve("strings"),
      r =
        e.tooltip.body !== Ys
          ? n.readOrEmpty(`tank_carousel_filter.tooltip.${s[e.tooltip.body]}.body`)
          : "",
      i = bs({ header: n.readOrEmpty(`${a[e.tooltip.header]}`), body: r });
    return (0, rr.jsx)(Jp, { ...e, tooltip: e.tooltip.body !== Ys && i });
  }),
  Jp = At(function (e) {
    const t = Kp(),
      a = t.filters.get(),
      s = (0, jn.useMemo)(() => {
        if ("role" === e.event.type) {
          const t = e.event.role;
          return Object.values(a).some((e) => e.some((e) => e.includes(t)));
        }
        return a[e.event.field]?.includes(e.event.value);
      }, [e.event, a]);
    return (0, rr.jsx)(Et, {
      ...e.tooltip,
      theme: ss.primary,
      size: Ra.extraSmall,
      className: cs(Xp.toggle, s && Xp.toggle__activated, e.className),
      activated: s,
      onClick: () => {
        (t.change(e.event), e.tooltip && e.tooltip.onClick());
      },
      children: e.children,
    });
  });
function Qp(e) {
  return (0, rr.jsx)("div", {
    className: cs(Xp.toggleContainer, e.className),
    children: an.map((e) =>
      (0, rr.jsx)(
        Yp,
        {
          tooltip: { header: e, body: Ks },
          event: { type: "role", role: e },
          children: (0, rr.jsx)(K, { roleKey: e, size: K.sizes.x24x24, className: Xp.icon }),
        },
        e,
      ),
    ),
  });
}
function e_(e) {
  return (0, rr.jsx)("div", {
    className: cs(Xp.toggleContainer, Xp.toggleContainer__type, e.className),
    children: nn.map((e) =>
      (0, rr.jsx)(
        Yp,
        {
          tooltip: { header: e, body: Xs },
          event: { field: on, type: "regular", value: e },
          className: Xp.toggle__type,
          children: (0, rr.jsx)(Ua, { type: e, size: Ua.sizes.x24x24 }),
        },
        e,
      ),
    ),
  });
}
function t_(e) {
  return (0, rr.jsx)("div", {
    className: cs(Xp.toggleContainer, e.className),
    children: e.orderedNations.map((e) =>
      (0, rr.jsx)(
        Yp,
        {
          tooltip: { header: e, body: Js },
          event: { field: ln, type: "regular", value: e },
          children: (0, rr.jsx)("div", {
            className: Xp.nationWrapper,
            children: (0, rr.jsx)(_s, { className: Xp.nationIcon, path: `flags.c_60x40.${e}` }),
          }),
        },
        e,
      ),
    ),
  });
}
function a_(e) {
  return (0, rr.jsx)("div", {
    className: cs(Xp.toggleContainer, e.className),
    children: rn.map((e) =>
      (0, rr.jsx)(
        Yp,
        {
          tooltip: { header: "tier", body: Ys },
          event: { field: cn, type: "regular", value: `level_${e}` },
          children: (0, rr.jsx)(pt, { className: Xp.vehicleLevel, value: e }),
        },
        e,
      ),
    ),
  });
}
function s_(e) {
  const t = ps(
    `hangar.filter.special.${e.imagePath}`,
    `hangar.filter.special.${e.imagePath}_upscale`,
  );
  return (0, rr.jsx)(
    Yp,
    {
      tooltip: { header: e.special, body: e.special },
      event: { field: dn, type: "regular", value: e.special },
      children: (0, rr.jsx)(_s, {
        className: cs(Xp.specialsIcons, "favorite" === e.special && Xp.specialsIcons__favorite),
        path: t,
      }),
    },
    e.special,
  );
}
function n_() {
  const e = ps(
    "hangar.filter.special.isCommonProgression",
    "hangar.filter.special.isCommonProgression_upscale",
  );
  return (0, rr.jsx)(Yp, {
    tooltip: { header: tn, body: tn },
    event: { field: un, type: "regular", value: tn },
    children: (0, rr.jsx)(_s, { className: Xp.specialsIcons, path: e }),
  });
}
var r_ = At(function (e) {
  const t = Kp(),
    a = t.specialIds ?? sn,
    s = er(),
    n = s.model.bpState.active.get(),
    r = s.model.rentVehiclesList(),
    i = qc()?.model,
    o = !i || i.isCrystalEarnEnabled.get(),
    l = !i || i.isDailyMultipliedXpEnabled.get(),
    c = a.filter(
      (e) => (0 !== r.length || "rented" !== e) && (l || "bonus" !== e) && (o || "crystals" !== e),
    );
  return (0, rr.jsxs)("div", {
    className: cs(Xp.toggleContainer, e.className),
    children: [
      c.map((e) => (0, rr.jsx)(s_, { imagePath: t.imagesMap?.[e] ?? e, special: e }, e)),
      n && (0, rr.jsx)(n_, {}),
      e.children,
    ],
  });
});
function i_() {
  const e = Ia(),
    [t, a] = (0, jn.useState)(!1);
  return (
    (0, jn.useEffect)(() => {
      const s = e.inputRef.current;
      if (t || !s) return;
      (e.focus(), a(!0));
      const n = s.value.length;
      s.setSelectionRange(n, n);
      const r = (e) => {
        s && !s.contains(e.target) && a(!0);
      };
      return (
        document.addEventListener("mousedown", r),
        () => document.removeEventListener("mousedown", r)
      );
    }, [e, t]),
    null
  );
}
function o_({ fieldClassName: e, value: t, ...a }) {
  const s = ks.resolve("strings");
  return (0, rr.jsxs)(Rt.Provider, {
    value: t,
    children: [
      (0, rr.jsx)(i_, {}),
      (0, rr.jsxs)(Rt.Decoration, {
        className: cs(Xp.search, a.className),
        children: [
          (0, rr.jsx)(Rt.Icon, { icon: Rt.icons.search }),
          (0, rr.jsx)(Rt.Field, {
            ...a,
            className: Xp.inputField,
            classNames: { placeholder: Xp.inputPlaceholder },
            maxLength: 50,
            placeholderVisibility: us.value,
            children: s.readOrEmpty("tank_carousel_filter.popover.label.searchNameVehicle"),
          }),
          t.length > 0 &&
            (0, rr.jsx)(Rt.ClearButton, {
              onClick: () => {
                it.tooltip.hideAll();
              },
            }),
        ],
      }),
    ],
  });
}
function l_({ current: e, total: t, className: a }) {
  const s = ks.resolve("intl"),
    n = ks.resolve("strings");
  return (0, rr.jsxs)(ta.Header, {
    className: cs(Xp.header, a),
    children: [
      (0, rr.jsx)(ta.Title, {
        children: (0, rr.jsx)(g, { path: "tank_carousel_filter.popover.title" }),
      }),
      (0, rr.jsx)(ta.Subtitle, {
        children: (0, rr.jsx)(g, {
          upgradeLegacy: !0,
          path: "tank_carousel_filter.popover.counter",
          params: {
            count: (0, rr.jsxs)("span", {
              children: [
                (0, rr.jsx)("span", {
                  className: Xp.currentValue,
                  children: s.formatNumber("integral", e),
                }),
                (0, rr.jsx)("span", {
                  className: Xp.slash,
                  children: n.readOrEmpty("common.common.slash"),
                }),
                s.formatNumber("integral", t),
              ],
            }),
          },
        }),
      }),
    ],
  });
}
var c_ = (0, jn.memo)(function (e) {
    return (0, rr.jsxs)(d_, {
      ...e,
      className: e.className ?? Xp.scroll,
      children: [
        (0, rr.jsx)(g, {
          className: Xp.category,
          path: "tank_carousel_filter.popover.label.specials",
        }),
        (0, rr.jsx)(r_, { children: e.children }),
      ],
    });
  }),
  d_ = (0, jn.memo)(function (e) {
    return (0, rr.jsx)(Xa, {
      children: (0, rr.jsxs)(Ba, {
        className: e.className,
        barClassNames: e.barClassNames,
        scrollClassNames: e.scrollClassNames,
        children: [
          (0, rr.jsx)(g, {
            className: Xp.category,
            path: "tank_carousel_filter.popover.label.vehicleTypes",
          }),
          (0, rr.jsx)(e_, {}),
          (0, rr.jsx)(g, {
            className: Xp.category,
            path: "tank_carousel_filter.popover.label.vehicleRole",
          }),
          (0, rr.jsx)(Qp, {}),
          (0, rr.jsx)(g, {
            className: Xp.category,
            path: "tank_carousel_filter.popover.label.nations",
          }),
          (0, rr.jsx)(t_, { orderedNations: e.orderedNations }),
          (0, rr.jsx)(g, {
            className: Xp.category,
            path: "tank_carousel_filter.popover.label.levels",
          }),
          (0, rr.jsx)(a_, {}),
          e.children,
        ],
      }),
    });
  }),
  u_ = "vehicle:filter:filter-button:reset-icon",
  m_ = (0, jn.forwardRef)(function ({ children: e, className: t, ...a }, s) {
    return (0, rr.jsx)(n, {
      ...a,
      ref: s,
      classNames: { base: cs(Xp.filterButton, t) },
      size: n.sizes.small,
      theme: a.theme,
      autoAlignContent: !1,
      children: e,
    });
  }),
  p_ = At(
    (0, jn.forwardRef)(function ({ current: e, total: t, classNames: a, onReset: s, ...n }, r) {
      const i = Kp(),
        o = Nt(),
        l = ks.resolve("intl"),
        c = ks.resolve("strings"),
        d = ps("hangar.filter.filter_button", "hangar.filter.filter_button_upscale"),
        u = ps("ui_kit.close_button.icon_small", "ui_kit.close_button.icon_medium"),
        m = i.hasFilter(),
        p = It();
      return (0, rr.jsx)(Et, {
        ...n,
        ref: r,
        size: Ra.extraSmall,
        theme: ss.primary,
        activated: o.opened,
        "data-test-id": "vehiclesFilter",
        classNames: {
          base: cs(Xp.filterTrigger, m && Xp.filterTrigger__activeFilter, a?.base),
          bulb: Xp.bulb,
          content: Xp.triggerContent,
        },
        children:
          n.children ??
          (m
            ? (0, rr.jsxs)("div", {
                className: cs(Xp.activeFilterContent, a?.content),
                children: [
                  l.formatNumber("integral", e),
                  (0, rr.jsx)("span", {
                    className: Xp.slash,
                    children: c.readOrEmpty("common.common.slash"),
                  }),
                  (0, rr.jsx)("span", {
                    className: Xp.total,
                    children: l.formatNumber("integral", t),
                  }),
                  (0, rr.jsx)(_s, {
                    path: u,
                    className: Xp.resetIcon,
                    onClick: (e) => {
                      (p.play("close", { target: u_, original: e }),
                        e.stopPropagation(),
                        i.reset(),
                        s?.());
                    },
                    onMouseEnter: (e) => {
                      p.play("mouse-enter", { target: u_, original: e });
                    },
                  }),
                ],
              })
            : (0, rr.jsx)(_s, { path: d, width: 24, height: 24 })),
      });
    }),
  ),
  __ = At(function () {
    const e = Cn();
    function t(e) {
      e.keyCode !== ma.ESCAPE && e.stopPropagation();
    }
    return (0, rr.jsx)(o_, {
      value: e.model.searchName.get(),
      onChange: (t) => e.controls.search(t.target.value),
      onKeyDown: t,
      onKeyUp: t,
    });
  }),
  h_ = At(function () {
    const e = er(),
      t = e.model.vehicles.amount(),
      a = e.model.current.amount();
    return (0, rr.jsx)(l_, { current: a, total: t });
  }),
  g_ = At(function ({ classNames: e }) {
    const t = ks.resolve("strings"),
      a = er(),
      s = a.model.vehicles.amount(),
      n = a.model.current.amount(),
      r = bs({
        header: t.readOrEmpty("tank_carousel_filter.tooltip.params.header"),
        body: t.readOrEmpty("tank_carousel_filter.tooltip.params.body"),
      });
    return (0, rr.jsx)(ta.Trigger, {
      children: (t) =>
        (0, rr.jsx)(p_, {
          ...r,
          ...t,
          onClick: (e) => {
            (r?.onClick(), t?.onClick(e));
          },
          classNames: { base: e?.trigger, content: e?.content },
          onReset: r?.onClick,
          current: n,
          total: s,
        }),
    });
  }),
  f_ = At(function ({ children: e }) {
    const t = Cn(),
      a = t.model.carouselRowCount.get(),
      s = ks.resolve("strings");
    const r = bs({
        header: s.readOrEmpty("tank_carousel_filter.tooltip.toggleSwitchCarousel.header"),
        body: s.readOrEmpty("tank_carousel_filter.tooltip.toggleSwitchCarousel.body"),
      }),
      i = bs({
        header: s.readOrEmpty("tank_carousel_filter.tooltip.searchInput.header"),
        body: s
          .readOrEmpty("tank_carousel_filter.tooltip.searchInput.body")
          .replace("%(count)d", String(50)),
      });
    return (0, rr.jsxs)(ta.Body, {
      className: Xp.body,
      children: [
        e,
        (0, rr.jsxs)("div", {
          className: Xp.footer,
          children: [
            (0, rr.jsx)(ta.Divider, {}),
            (0, rr.jsxs)("div", {
              className: Xp.footerButtons,
              children: [
                (0, rr.jsx)(m_, {
                  ...r,
                  theme: n.themes.secondary,
                  className: Xp.carouselChanger,
                  onClick: function () {
                    const e = 1 === a ? 2 : 1;
                    t.controls.carouselTypeChange(e);
                  },
                  children: (0, rr.jsx)(_s, {
                    className: cs(Xp.carouselIcon, 2 === a && Xp.carouselIcon__active),
                    path: "hangar.filter.carousel_selector",
                  }),
                }),
                (0, rr.jsx)("div", {
                  ...i,
                  className: Xp.searchInputWrapper,
                  children: (0, rr.jsx)(__, {}),
                }),
              ],
            }),
          ],
        }),
      ],
    });
  }),
  v_ = At(function ({
    pivot: e = 0,
    position: t = "bottom",
    classNames: a,
    customFilterProps: s,
    children: n,
  }) {
    const r = Cn(),
      i = Kn(),
      o = (0, jn.useMemo)(
        () => ({
          filters: r.model.filters,
          search: r.model.searchName,
          hasFilter: () => r.model.computes.hasFilters() || void 0 !== i?.model.current(),
          defaultFilters: r.model.computes.default,
          change: r.controls.change,
          reset: () => {
            (i?.controls.select(void 0), r.controls.reset());
          },
          ...s,
        }),
        [r, s, i],
      );
    return (0, rr.jsx)(Up.Provider, {
      value: o,
      children: (0, rr.jsx)("div", {
        className: a?.base,
        children: (0, rr.jsxs)(ta, {
          children: [
            (0, rr.jsx)(g_, { classNames: { trigger: a?.trigger, content: a?.triggerContent } }),
            (0, rr.jsx)(ta.Portal, {
              lazy: !0,
              position: t,
              pivot: e,
              children: (0, rr.jsx)(Lt, {
                children: (0, rr.jsx)(ta.Display, { className: Xp.popover, children: n }),
              }),
            }),
          ],
        }),
      }),
    });
  }),
  b_ = At(function (e) {
    const t = Cn().model.computes.nations();
    return (0, rr.jsxs)(v_, {
      ...e,
      children: [
        (0, rr.jsx)(ta.Tip, {}),
        (0, rr.jsx)(ta.Close, {}),
        (0, rr.jsx)(h_, {}),
        (0, rr.jsx)(x_, {}),
        (0, rr.jsx)(f_, { children: (0, rr.jsx)(c_, { orderedNations: t }) }),
      ],
    });
  }),
  x_ = At(function () {
    const e = Kn(),
      { id: t } = Nt();
    return e && !1 !== e.model.enabled.get()
      ? (0, rr.jsxs)(ta, {
          children: [
            (0, rr.jsx)(Wp, {
              className: Xp.playlistPortal,
              "data-popover-outside-click-whitelist-id": t,
            }),
            (0, rr.jsx)(Gp, {
              asChild: !0,
              className: Xp.playlistTrigger,
              fallback: null,
              children: (0, rr.jsx)(n, {
                theme: "secondary",
                classNames: { content: Xp.playlistTitle },
              }),
            }),
          ],
        })
      : null;
  }),
  y_ = (e) =>
    (0, rr.jsxs)("svg", {
      width: 24,
      height: 24,
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ...e,
      children: [
        (0, rr.jsx)("g", {
          filter: "url(#filter0_d_110732_242625)",
          children: (0, rr.jsx)("path", {
            d: "M9 12.9797C9.00034 12.8321 9.16667 12.7463 9.28613 12.8333C10.2419 13.5289 11.6261 14.5854 11.9366 14.8228C11.9747 14.852 12.0265 14.8524 12.0655 14.8244C12.8464 14.2625 14.134 13.2857 14.708 12.8489C14.8278 12.7578 14.9997 12.844 15 12.9944C15 13.1284 15 13.2755 15 13.4143C15 13.7562 15.2382 14.0514 15.5723 14.1243L18.1396 14.6838C18.6415 14.7931 18.9998 15.2377 19 15.7512C19.0001 15.9833 18.9999 16.2131 19 16.4163C19 16.4571 18.9773 16.4944 18.941 16.5132L12.335 19.9348C12.1253 20.0434 11.8757 20.0432 11.666 19.9348L5.05892 16.5132C5.02273 16.4944 5 16.4571 5 16.4163V15.7502C5 15.2373 5.35726 14.7931 5.8584 14.6838L8.42773 14.1243C8.76168 14.0514 8.9999 13.7561 9 13.4143V12.9797ZM14.5117 14.5159C14.4534 14.4867 14.3834 14.4904 14.3291 14.5266L12.4033 15.8108C12.1591 15.9736 11.8409 15.9736 11.5967 15.8108L9.6709 14.5266C9.61662 14.4904 9.54662 14.4867 9.48828 14.5159L9.06738 14.7258C8.94039 14.7893 8.93233 14.968 9.05273 15.0432L11.6143 16.6448C11.8501 16.7922 12.1499 16.7922 12.3857 16.6448L14.9482 15.0432C15.0684 14.9679 15.0595 14.7893 14.9326 14.7258L14.5117 14.5159ZM13.832 9.00513C13.9323 9.00526 14.0136 9.08655 14.0137 9.18677V11.179C14.0136 11.701 13.7872 12.1991 13.3955 12.5442C13.0635 12.8367 12.6349 13.0002 12.1924 13.0002H11.8145C11.3681 13.0002 10.9366 12.8354 10.6035 12.5383C10.2193 12.1954 9.99855 11.7056 9.99609 11.1907L9.98633 9.18286C9.9859 9.08206 10.0681 9.00011 10.1689 9.00024L13.832 9.00513ZM11.5 4.74536C11.5 4.88594 11.6143 5.00024 11.7549 5.00024H12.2451C12.3857 5.00024 12.5 4.88594 12.5 4.74536V4.10348C12.5 4.04323 12.5488 3.99439 12.6091 3.99439C12.724 3.99438 12.8452 3.99438 12.9761 3.99438C12.9918 3.99438 13.0074 3.99779 13.0217 4.00437L13.1445 4.06087C13.1832 4.07868 13.208 4.11738 13.208 4.15998V5.35181C13.2082 5.49222 13.3224 5.60571 13.4629 5.60571H13.7598C13.9001 5.60555 14.0135 5.49212 14.0137 5.35181V4.83036C14.0137 4.7409 14.1154 4.68947 14.1875 4.74253L14.3438 4.85767L15.2066 5.70515C15.2172 5.71557 15.2256 5.72805 15.2312 5.74182L15.7968 7.13056C15.8045 7.14942 15.8173 7.16576 15.8338 7.17772L16.8496 7.91431C16.9439 7.98264 16.9999 8.09181 17 8.20825V9.80493C16.9999 9.94656 16.9176 10.0755 16.7891 10.135L16.0633 10.471C16.0247 10.4888 16 10.5275 16 10.57V11.1633C15.9998 11.3698 15.8829 11.5583 15.6982 11.6506L15.1318 11.9338C15.0714 11.9641 15 11.9204 15 11.8528V8.38501C14.9999 8.18482 14.8379 8.02249 14.6377 8.02173L9.36523 8.00122C9.16386 8.00045 9 8.1641 9 8.36548V11.8528C9 11.9204 8.92861 11.9641 8.86816 11.9338L8.30176 11.6506C8.11709 11.5583 8.00015 11.3698 8 11.1633V10.57C8 10.5275 7.97531 10.4888 7.93673 10.471L7.21094 10.135C7.0824 10.0755 7.00006 9.94656 7 9.80493V8.20825C7.0001 8.09181 7.0561 7.98264 7.15039 7.91431L8.16617 7.17772C8.18267 7.16576 8.19548 7.14942 8.20316 7.13056L8.76884 5.74182C8.77445 5.72805 8.78282 5.71557 8.79343 5.70515L9.65625 4.85767L9.81143 4.74301C9.88344 4.6898 9.98535 4.74121 9.98535 4.83074V5.35181C9.98555 5.49222 10.0998 5.60571 10.2402 5.60571H10.5371C10.6774 5.60555 10.7908 5.49212 10.791 5.35181V4.1608C10.791 4.11828 10.8157 4.07964 10.8543 4.06179L10.9782 4.00447C10.9926 3.99782 11.0082 3.99438 11.024 3.99438C11.1548 3.99438 11.276 3.99438 11.3909 3.99439C11.4512 3.99439 11.5 4.04323 11.5 4.10348V4.74536Z",
            fill: "#EEEDE9",
            fillOpacity: 0.9,
            shapeRendering: "crispEdges",
          }),
        }),
        (0, rr.jsx)("defs", {
          children: (0, rr.jsxs)("filter", {
            id: "filter0_d_110732_242625",
            x: 5,
            y: 3.99438,
            width: 14,
            height: 17.0219,
            filterUnits: "userSpaceOnUse",
            colorInterpolationFilters: "sRGB",
            children: [
              (0, rr.jsx)("feFlood", { floodOpacity: 0, result: "BackgroundImageFix" }),
              (0, rr.jsx)("feColorMatrix", {
                in: "SourceAlpha",
                type: "matrix",
                values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",
                result: "hardAlpha",
              }),
              (0, rr.jsx)("feOffset", { dy: 1 }),
              (0, rr.jsx)("feComposite", { in2: "hardAlpha", operator: "out" }),
              (0, rr.jsx)("feColorMatrix", {
                type: "matrix",
                values: "0 0 0 0 0.208872 0 0 0 0 0.213178 0 0 0 0 0.220833 0 0 0 0.6 0",
              }),
              (0, rr.jsx)("feBlend", {
                mode: "multiply",
                in2: "BackgroundImageFix",
                result: "effect1_dropShadow_110732_242625",
              }),
              (0, rr.jsx)("feBlend", {
                mode: "normal",
                in: "SourceGraphic",
                in2: "effect1_dropShadow_110732_242625",
                result: "shape",
              }),
            ],
          }),
        }),
      ],
    }),
  C_ = (e) =>
    (0, rr.jsxs)("svg", {
      width: 24,
      height: 24,
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ...e,
      children: [
        (0, rr.jsx)("g", {
          filter: "url(#filter0_d_110732_256663)",
          children: (0, rr.jsx)("path", {
            d: "M11 18.8909C11 18.9512 10.9512 19 10.8909 19H9.10909C9.04884 19 9 18.9512 9 18.8909V16.1091C9 16.0488 9.04884 16 9.10909 16H10.8909C10.9512 16 11 16.0488 11 16.1091V18.8909ZM8 17.8909C8 17.9512 7.95116 18 7.89091 18H5.10909C5.04884 18 5 17.9512 5 17.8909V17.1091C5 17.0488 5.04884 17 5.10909 17H7.89091C7.95116 17 8 17.0488 8 17.1091V17.8909ZM19 17.8909C19 17.9512 18.9512 18 18.8909 18H12.1091C12.0488 18 12 17.9512 12 17.8909V17.1091C12 17.0488 12.0488 17 12.1091 17H18.8909C18.9512 17 19 17.0488 19 17.1091V17.8909ZM16 13.8909C16 13.9512 15.9512 14 15.8909 14H14.1091C14.0488 14 14 13.9512 14 13.8909V11.1091C14 11.0488 14.0488 11 14.1091 11H15.8909C15.9512 11 16 11.0488 16 11.1091V13.8909ZM13 12.8909C13 12.9512 12.9512 13 12.8909 13H5.10909C5.04884 13 5 12.9512 5 12.8909V12.1091C5 12.0488 5.04884 12 5.10909 12H12.8909C12.9512 12 13 12.0488 13 12.1091V12.8909ZM19 12.8909C19 12.9512 18.9512 13 18.8909 13H17.1091C17.0488 13 17 12.9512 17 12.8909V12.1091C17 12.0488 17.0488 12 17.1091 12H18.8909C18.9512 12 19 12.0488 19 12.1091V12.8909ZM10 8.89091C10 8.95116 9.95116 9 9.89091 9H8.10909C8.04884 9 8 8.95116 8 8.89091V6.10909C8 6.04884 8.04884 6 8.10909 6H9.89091C9.95116 6 10 6.04884 10 6.10909V8.89091ZM7 7.89091C7 7.95116 6.95116 8 6.89091 8H5.10909C5.04884 8 5 7.95116 5 7.89091V7.10909C5 7.04884 5.04884 7 5.10909 7H6.89091C6.95116 7 7 7.04884 7 7.10909V7.89091ZM19 7.89091C19 7.95116 18.9512 8 18.8909 8H11.1091C11.0488 8 11 7.95116 11 7.89091V7.10909C11 7.04884 11.0488 7 11.1091 7H18.8909C18.9512 7 19 7.04884 19 7.10909V7.89091Z",
            fill: "#EEEDE9",
            fillOpacity: 0.9,
            shapeRendering: "crispEdges",
          }),
        }),
        (0, rr.jsx)("defs", {
          children: (0, rr.jsxs)("filter", {
            id: "filter0_d_110732_256663",
            x: 5,
            y: 6,
            width: 14,
            height: 14,
            filterUnits: "userSpaceOnUse",
            colorInterpolationFilters: "sRGB",
            children: [
              (0, rr.jsx)("feFlood", { floodOpacity: 0, result: "BackgroundImageFix" }),
              (0, rr.jsx)("feColorMatrix", {
                in: "SourceAlpha",
                type: "matrix",
                values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",
                result: "hardAlpha",
              }),
              (0, rr.jsx)("feOffset", { dy: 1 }),
              (0, rr.jsx)("feComposite", { in2: "hardAlpha", operator: "out" }),
              (0, rr.jsx)("feColorMatrix", {
                type: "matrix",
                values: "0 0 0 0 0.0509804 0 0 0 0 0.054902 0 0 0 0 0.0627451 0 0 0 0.6 0",
              }),
              (0, rr.jsx)("feBlend", {
                mode: "normal",
                in2: "BackgroundImageFix",
                result: "effect1_dropShadow_110732_256663",
              }),
              (0, rr.jsx)("feBlend", {
                mode: "normal",
                in: "SourceGraphic",
                in2: "effect1_dropShadow_110732_256663",
                result: "shape",
              }),
            ],
          }),
        }),
      ],
    }),
  j_ = "Header_1ce47eda",
  w_ = "Header_base__ttcDisabled_bc60795e",
  N_ = "Header_title_ae11a84e",
  I_ = "Header_playlist_2dc961b7",
  S_ = "Header_toggles_ecb415bd",
  k_ = "Header_toggle_a0b149a9",
  P_ = "Header_text_aace6b88",
  E_ = "Header_icon_dbebe5f6",
  M_ = "Header_editPlaylist_86a9c19a",
  L_ = "Header_divider_696b4d0d",
  A_ = ks.resolve("strings"),
  T_ = Hs(function (e) {
    const t = qr()?.model.computed.ttcEnabled();
    return (0, rr.jsxs)("div", {
      className: cs(j_, !t && w_, e.className),
      children: [(0, rr.jsx)(D_, {}), (0, rr.jsx)(B_, {})],
    });
  }),
  D_ = Hs(function () {
    const e = qr(),
      t = e?.model.computed.ttcEnabled(),
      a = e?.model.computed.crewEnabled(),
      s = Boolean(t && a),
      n = Kn()?.model.currentId(),
      r = wt(
        { letterLimit: s ? 6 : 18 },
        {
          medium: { letterLimit: s ? 18 : 28 },
          large: { letterLimit: s ? 28 : 33 },
          extraLarge: { letterLimit: 33 },
        },
      );
    return (0, rr.jsxs)("div", {
      className: N_,
      children: [
        (0, rr.jsx)(b_, {}),
        (0, rr.jsxs)(ta, {
          children: [
            (0, rr.jsx)(Wp, {}),
            (0, rr.jsxs)(zm, {
              className: L_,
              children: [
                (0, rr.jsx)(Gp, {
                  alertSize: "lg",
                  className: I_,
                  fallback: (0, rr.jsx)(g, { className: I_, path: "pages.titles.allVehicles" }),
                  limit: r.letterLimit,
                }),
                void 0 !== n && (0, rr.jsx)(sp, { id: n, className: M_ }),
              ],
            }),
          ],
        }),
      ],
    });
  }),
  B_ = Hs(function (e) {
    const t = qr(),
      a = t?.model.computed.noSelectedVehicle();
    return t && a
      ? (0, rr.jsxs)("div", {
          className: cs(S_, e.className),
          children: [
            (0, rr.jsxs)(Et, {
              activated: t.model.crewEnabled.get(),
              onClick: t.controls.crew.toggle,
              className: k_,
              children: [
                (0, rr.jsx)(y_, { className: E_ }),
                (0, rr.jsx)("div", {
                  className: P_,
                  children: A_.readOrEmpty("hangar.myVehicles.buttons.crewToggle"),
                }),
              ],
            }),
            (0, rr.jsxs)(Et, {
              activated: t.model.ttcEnabled.get(),
              onClick: t.controls.ttc.toggle,
              className: k_,
              children: [
                (0, rr.jsx)(C_, { className: E_ }),
                (0, rr.jsx)("div", {
                  className: P_,
                  children: A_.readOrEmpty("hangar.myVehicles.buttons.ttcToggle"),
                }),
              ],
            }),
          ],
        })
      : null;
  }),
  O_ = {
    "media-wrapper": "AllVehicles_media-wrapper_70836ce4",
    root: "AllVehicles_root_70836ce4",
    wrapper: "AllVehicles_wrapper_d9831b4b",
    wrapper__ttcDisabled: "AllVehicles_wrapper__ttcDisabled_327ffbc8",
    wrapper__crewDisabled: "AllVehicles_wrapper__crewDisabled_63a7cdd3",
    wrapperContent__ttc: "AllVehicles_wrapperContent__ttc_9f932689",
    wrapperInfo: "AllVehicles_wrapperInfo_48fd24eb",
    wrapperInfo__ttcDisabled: "AllVehicles_wrapperInfo__ttcDisabled_a2e10443",
    listWrapper: "AllVehicles_listWrapper_66f85e8f",
    listWrapper__empty: "AllVehicles_listWrapper__empty_ffb3f00b",
    emptyMessage: "AllVehicles_emptyMessage_93b119d2",
    crewWrapper: "AllVehicles_crewWrapper_f8ab4f75",
    content: "AllVehicles_content_41b0c11",
    crewColumn: "AllVehicles_crewColumn_fdea5dc6",
    crewWidget: "AllVehicles_crewWidget_2dd93f19",
  },
  V_ = { paths: ["/:hangar/"], exact: !1 },
  R_ = nt(zr, { rootId: ks.resolve("aliases").read((e) => e.hangar.shared.Settings("resId")) }),
  H_ = Hs(function () {
    return (
      (function (e) {
        const t = ct(),
          a = It(),
          s = ne(t.location, e?.match ?? V_),
          n = null !== s;
        function r() {
          const e = s?.params.hangar;
          e
            ? t.push(`/${e}/{root}`)
            : console.warn(`Can't detect route on ${t.location} for ${JSON.stringify(t.location)}`);
        }
        (mt(n ? ma.SPACE : ma.NONE, (t) => {
          if (
            (a.play("hot-key", { target: "hangar:all_vehicles:all_vehicles", original: t }),
            e?.onKey)
          )
            return e.onKey("space", s);
          r();
        }),
          gt(n ? ma.ESCAPE : ma.NONE, () => {
            if (e?.onKey) return e.onKey("esc", s);
            r();
          }));
      })(),
      (0, rr.jsx)(R_, {
        initial: { selectedVehicle: er().model.selectedVehicle },
        children: (0, rr.jsx)(F_, {
          children: (0, rr.jsxs)(z_, {
            children: [
              (0, rr.jsx)(T_, {}),
              (0, rr.jsx)(W_, {}),
              (0, rr.jsx)(Jd, { className: O_.emptyMessage }),
            ],
          }),
        }),
      })
    );
  }),
  $_ = Hs(function (e) {
    return qr()?.model.computed.crewEnabled()
      ? (0, rr.jsx)("div", {
          className: cs(O_.crewColumn, e.className),
          children: (0, rr.jsx)(Rm, { className: O_.crewWidget }),
        })
      : null;
  }),
  z_ = function (e) {
    return (0, rr.jsxs)("div", {
      className: cs(O_.crewWrapper, e.className),
      children: [
        (0, rr.jsx)($_, {}),
        (0, rr.jsx)("div", { className: O_.content, children: e.children }),
      ],
    });
  },
  F_ = Hs(function (e) {
    const t = qr(),
      a = t?.model.computed.crewEnabled(),
      s = t?.model.computed.ttcEnabled();
    return (0, rr.jsx)(Rl, {
      classNames: {
        base: cs(O_.wrapper, !a && O_.wrapper__crewDisabled, !s && O_.wrapper__ttcDisabled),
        info: cs(O_.wrapperInfo, !s && O_.wrapperInfo__ttcDisabled),
        content: cs(O_.wrapperContent, s && O_.wrapperContent__ttc),
      },
      children: e.children,
    });
  }),
  W_ = Hs(function (e) {
    const t = er().model.selectedVehicle(),
      a = qr(),
      s = (0, jn.useContext)(Ol),
      n = (() => {
        const e = a?.model.computed.crewEnabled();
        return e && s.ttcEnabled ? 0 : e || s.ttcEnabled ? 1 : 2;
      })();
    return (0, rr.jsx)("div", {
      className: cs(O_.listWrapper, !t && O_.listWrapper__empty, e.className),
      children: (0, rr.jsx)(Xa, { children: (0, rr.jsx)(Gd, { extraColumns: n }) }),
    });
  });
var q_ = e(zt(), 1),
  Z_ = "emptySlot",
  G_ = "left",
  U_ = "right",
  K_ = "both",
  X_ = "none",
  Y_ = 189,
  J_ = 245,
  Q_ = {
    default: { single: Y_, double: Y_ },
    breakpoints: {
      medium: { single: 224 },
      large: { single: J_, double: J_ },
      extraLarge: { single: 302 },
    },
  },
  eh = {
    "media-wrapper": "ActiveSlots_media-wrapper_54b124fa",
    root: "ActiveSlots_root_54b124fa",
    empty: "ActiveSlots_empty_9aab1ce1",
    doubleSlots: "ActiveSlots_doubleSlots_2ce42013",
    slot__double: "ActiveSlots_slot__double_e321ab18",
  };
function th({ width: e, className: t }) {
  return (0, rr.jsx)("div", {
    className: eh.empty,
    children: (0, rr.jsx)(oc, {
      className: t,
      style: { width: `${e}px` },
      children: (0, rr.jsx)("div", { className: eh.vehicleSlot }),
    }),
  });
}
function ah({ slotId: e, width: t, currentVehicleId: a, double: s, className: n }) {
  const r = $r(Number(e));
  return void 0 === e
    ? null
    : Fl(e)
      ? (0, rr.jsx)(bc, { className: cs(Dd, n), type: e, width: t, doubleRow: s })
      : "emptySlot" === e
        ? (0, rr.jsx)(th, { className: cs(Dd, n), width: t })
        : (0, rr.jsx)(Vd, {
            ...r,
            vehicleId: e,
            selected: e === a,
            doubleRow: s,
            className: cs(Dd, n),
            style: { width: t },
          });
}
function sh({ chunkedSlots: e, classNames: t, ...a }) {
  return void 0 === e
    ? null
    : (0, rr.jsx)("div", {
        className: eh.doubleSlots,
        children: e.map((e, s) =>
          (0, rr.jsx)(ah, { ...a, slotId: e, className: cs(eh.slot__double, t?.slot) }, s),
        ),
      });
}
var nh = {
  "media-wrapper": "ArrowButton_media-wrapper_5327085d",
  root: "ArrowButton_root_5327085d",
  button: "ArrowButton_button_7654af94",
  icon: "ArrowButton_icon_35e5294f",
  button__left: "ArrowButton_button__left_5327085d",
  background: "ArrowButton_background_5327085d",
  border: "ArrowButton_border_5327085d",
  overlay: "ArrowButton_overlay_c36cbc33",
  content: "ArrowButton_content_4666fd05",
  button__right: "ArrowButton_button__right_5327085d",
};
function rh({ direction: e, className: t, ...a }) {
  return (0, rr.jsx)(n, {
    ...a,
    classNames: {
      base: cs(nh.button, nh[`button__${e}`], t),
      background: nh.background,
      border: nh.border,
      overlay: nh.overlay,
      content: nh.content,
    },
    theme: n.themes.secondary,
    size: n.sizes.small,
    autoAlignContent: !1,
    soundTarget: "carousel:arrow_button",
    children: (0, rr.jsx)(_s, { path: "hangar.carousel.buttonArrow", className: nh.icon }),
  });
}
rh.direction = { right: "right", left: "left" };
var ih = {
  "media-wrapper": "CarouselNavButtons_media-wrapper_3f67251c",
  root: "CarouselNavButtons_root_3f67251c",
  navButtonWrapper: "CarouselNavButtons_navButtonWrapper_a13c2a68",
  navButton: "CarouselNavButtons_navButton_adcc2e9b",
  navButton__left: "CarouselNavButtons_navButton__left_5f6dc3a0",
  navButton__right: "CarouselNavButtons_navButton__right_66b4f03f",
  navButton__hidden: "CarouselNavButtons_navButton__hidden_69011a0b",
  mask: "CarouselNavButtons_mask_17bb1a0e",
  mask__both: "CarouselNavButtons_mask__both_7294632e",
  mask__left: "CarouselNavButtons_mask__left_e8bc4c90",
  mask__right: "CarouselNavButtons_mask__right_6be519f7",
};
function oh(e) {
  return ({ button: t }) => {
    0 === t && e();
  };
}
function lh({ itemWidth: e, api: t, children: a }) {
  const s = (0, jn.useRef)(null),
    [n, r] = (0, jn.useState)(!1),
    { applyScroll: i, animationScroll: o, disabled: l } = t,
    [c, d] = $a(t),
    u = c || l,
    m = d || l;
  function p(t) {
    function a() {
      i(o.scrollPosition.get() + t * e);
    }
    n || (a(), (s.current = window.setInterval(a, 100)), r(!0));
  }
  function _() {
    (null !== s.current && (clearInterval(s.current), (s.current = null)), r(!1));
  }
  return (0, rr.jsxs)("div", {
    className: ih.navButtonWrapper,
    children: [
      (0, rr.jsx)(rh, {
        direction: rh.direction.left,
        onMouseDown: oh(() => p(-1)),
        onMouseUp: _,
        onMouseLeave: _,
        className: cs(ih.navButton, ih.navButton__left, u && ih.navButton__hidden),
      }),
      (0, rr.jsx)("div", {
        className: cs(
          ih.mask,
          ih[`mask__${((h = c), (g = d), h || g ? (h ? (g ? X_ : U_) : G_) : K_)}`],
        ),
        children: a,
      }),
      (0, rr.jsx)(rh, {
        direction: rh.direction.right,
        onMouseDown: oh(() => p(1)),
        onMouseUp: _,
        onMouseLeave: _,
        className: cs(ih.navButton, ih.navButton__right, m && ih.navButton__hidden),
      }),
    ],
  });
  var h, g;
}
var ch = {
    "media-wrapper": "CarouselScroll_media-wrapper_57c79593",
    root: "CarouselScroll_root_57c79593",
    base: "CarouselScroll_3690a837",
    areaContent: "CarouselScroll_areaContent_f5dd7772",
  },
  dh = "dragging",
  uh = "idle";
function mh({
  api: e,
  children: t,
  className: a,
  areaClassNames: s,
  staticContent: n,
  disabled: r,
  onDraggingState: i,
}) {
  const { animationScroll: o, applyScroll: l, setDisabled: c } = e,
    d = $t(e, ls.horizontal, void 0, { gapBeforeStart: 5 });
  return (
    (0, jn.useEffect)(() => {
      i?.(d.type === dh);
    }, [d.type, i]),
    (0, jn.useEffect)(() => {
      c(r);
    }, [r, c]),
    (0, jn.useEffect)(
      () =>
        tt(() => {
          d.type === uh && o.scrollPosition.idle && l(o.scrollPosition.get());
        }),
      [o.scrollPosition, d, l],
    ),
    (0, rr.jsx)("div", {
      className: cs(ch.base, a),
      children: (0, rr.jsxs)(Kt, {
        className: s?.base,
        classNames: {
          wrapper: cs(ch.areaWrapper, s?.wrapper),
          content: cs(ch.areaContent, s?.content),
        },
        children: [t, n],
      }),
    })
  );
}
var ph = "CarouselSkeleton_1ac002e3",
  _h = "CarouselSkeleton_content_b18f8dd7",
  hh = "CarouselSkeleton_scroll_badf82c7";
function gh(e) {
  return (0, rr.jsx)("div", { ...e, className: cs(_h, e.className) });
}
function fh({
  api: e,
  widthElement: t,
  totalElements: a,
  disabled: s,
  onDraggingState: n,
  renderElement: r,
  classNames: i,
}) {
  return (0, rr.jsx)("div", {
    className: cs(ph, i?.base),
    children: (0, rr.jsx)(lh, {
      api: e,
      itemWidth: t,
      children: (0, rr.jsx)(ke, {
        api: e,
        elementWidth: t - V(1),
        direction: "horizontal",
        totalElements: a,
        wrappers: { Content: gh },
        className: cs(hh, i?.scroll),
        renderScroll: (t) =>
          (0, rr.jsx)(mh, { ...t, api: e, disabled: s, onDraggingState: n, children: t.children }),
        renderElement: (e) => (r ? r(e) : (0, rr.jsx)(th, { className: i?.element, width: t })),
      }),
    }),
  });
}
function vh({ api: e, carouselRows: t }) {
  const a = (function (e) {
      const t = wt(Q_.default, Q_.breakpoints);
      return V(2 === e ? t.double : t.single);
    })(t),
    [s, n] = (0, jn.useState)({ carouselRows: 0, cardWidth: 0, visibleSlots: 0 });
  return (
    (0, jn.useLayoutEffect)(() => {
      function s() {
        const s = e.getWrapperSize();
        s &&
          n(
            2 !== t
              ? { visibleSlots: Math.ceil(s / a), cardWidth: a, carouselRows: t }
              : { visibleSlots: Math.ceil((s / a) * t), cardWidth: a, carouselRows: t },
          );
      }
      return (
        s(),
        new me().add(e.events.on("resizeHandled", s)).add(e.events.on("recalculateContent", s))
          .dispose
      );
    }, [e, a, t]),
    s
  );
}
var bh = "Carousel_draggingOverlay_2ac699b0",
  xh = "Carousel_9b3e04da",
  yh = "Carousel_base__visible_24d53d12",
  Ch = "Carousel_card_5449ec9a",
  jh = "Carousel_card__inactive_c59331d9",
  wh = Hs(function () {
    const e = nr(),
      [t, a] = (0, jn.useState)(!1),
      { api: s } = Pa(),
      n = er(),
      r = Cn().model.carouselRowCount.get(),
      i = n.model.prebattleModeActive(),
      o = n.model.telecomRentStatus.get(),
      l = n.model.current.ids(),
      c = n.model.current.list(),
      d = n.model.selectedVehicle()?.id,
      { currentIndex: u } = Wl(l, d),
      m = Qa(d),
      p = n.model.slots.recover.get(),
      { carouselRows: _, cardWidth: h, visibleSlots: g } = vh({ api: s, carouselRows: r }),
      { activeSlotsAmount: f, activeSlotsIds: v } = (function (e, t, a, s) {
        return (0, jn.useMemo)(() => {
          if (!t) return { activeSlotsAmount: 0, activeSlotsIds: [] };
          const n = zl(a, s),
            r = e.length + n.right.length + n.left.length,
            i = Math.max(0, t - r);
          return {
            activeSlotsAmount: r,
            activeSlotsIds: [...n.left, ...e, ...n.right, ...Array(i).fill(Z_)],
          };
        }, [a, e, t, s]);
      })(l, g, p, o),
      b = (function (e) {
        return (0, jn.useMemo)(() => {
          const t = [];
          for (let a = 0; a < e.length; a += 2) t.push(e.slice(a, a + 2));
          return (1 === t.at(-1)?.length && t.at(-1)?.push(Z_), t);
        }, [e]);
      })(v);
    ((0, jn.useEffect)(() => {
      const e = la(500, !0, () =>
        it.contextMenu.hide(
          0,
          ks.resolve("aliases").read((e) => e.common.contextMenu.Backport("resId")),
        ),
      );
      return (
        s.events.on("change", e),
        () => {
          (e.cancel(), s.events.off("change", e));
        }
      );
    }, [s]),
      ql(s, u, h, _, l.length, g > f),
      (function (e, t, a, s, n) {
        const r = 2 === s;
        function i(s) {
          a(-1 !== e ? t[e + s].inventoryId : t[0].inventoryId);
        }
        const o = [
          {
            key: ma.ARROW_DOWN,
            blockKey: !r || e % s === s - 1 || e === t.length - 1,
            action: () => i(1),
          },
          { key: ma.ARROW_UP, blockKey: !r || e % s === 0, action: () => i(-1) },
          { key: ma.ARROW_LEFT, blockKey: r ? e < s : 0 === e, action: () => i(-s) },
          {
            key: ma.ARROW_RIGHT,
            blockKey: r ? e > t.length - (s + 1) : e === t.length - 1,
            action: () => i(s),
          },
          { key: ma.HOME, blockKey: 0 === t.length, action: () => a(t[0].inventoryId) },
          { key: ma.END, blockKey: 0 === t.length, action: () => a(t[t.length - 1].inventoryId) },
        ];
        for (const { key: l, blockKey: c, action: d } of o) {
          const e = n || c ? ma.NONE : l;
          gt(e, d);
        }
      })(u, c, n.controls.select, _, 0 === l.length || i));
    const x = (function (e, t) {
      const [a, s] = (0, jn.useState)(0 === t),
        n = ce();
      return (
        (0, jn.useEffect)(() => {
          if (a || 0 === t) return s(!0);
          function r() {
            (s(!0), i.dispose(), n.clear());
          }
          n.run(r);
          const i = new me()
            .add(n.clear)
            .add(e.events.on("resizeHandled", () => n.run(r)))
            .add(e.events.on("recalculateContent", () => n.run(r)));
          return i.dispose;
        }, [e, t, a, n]),
        a
      );
    })(s, l.length);
    return (
      (0, jn.useEffect)(() => {
        e && e.model.computeds.enabled() && d !== m && e.controls.reset();
      }, [d, m, e]),
      (0, rr.jsxs)(rr.Fragment, {
        children: [
          (0, rr.jsx)(fh, {
            api: s,
            widthElement: h,
            totalElements: 2 === _ ? b.length : v.length,
            disabled: g > f,
            onDraggingState: a,
            classNames: { base: cs(xh, x && yh), element: cs(Ch, t && jh) },
            renderElement: (e) => {
              const a = cs(Ch, t && jh);
              return 2 === _
                ? (0, rr.jsx)(de, {
                    failure: () => (0, rr.jsx)(th, { className: a, width: h }),
                    children: (0, rr.jsx)(
                      sh,
                      {
                        chunkedSlots: b[e],
                        currentVehicleId: d,
                        width: h,
                        classNames: { slot: a },
                        double: !0,
                      },
                      e,
                    ),
                  })
                : (0, rr.jsx)(de, {
                    failure: () => (0, rr.jsx)(th, { className: a, width: h }),
                    children: (0, rr.jsx)(
                      ah,
                      { slotId: v[e], currentVehicleId: d, width: h, className: a, double: !1 },
                      v[e] ?? e,
                    ),
                  });
            },
          }),
          e &&
            e.model.computeds.enabled() &&
            (0, rr.jsx)(Hr, { freeSpaceRem: 0, tipSize: "32rem" }),
          q_.createPortal(t && (0, rr.jsx)("div", { className: bh }), document.body),
        ],
      })
    );
  }),
  Nh = (0, jn.createContext)(void 0);
function Ih() {
  const e = (0, jn.useContext)(Nh);
  return (
    u(void 0 !== e, "To use hook useEditPlaylist() please add EditPlaylistProvider Provider"),
    e
  );
}
var Sh = At(function ({ id: e, playlistState: t = Wn, vehicleIds: a = [], children: s }) {
  const n = Gn(),
    [r, i] = (0, jn.useState)(t === Wn),
    o = Vn(n.model.byId(e)),
    l = (0, jn.useRef)(o);
  (0, jn.useEffect)(
    () =>
      Za(() => {
        r && !n.model.edit.dirty.get() && (l.current = o);
      }),
    [o, r, n.model, e],
  );
  const c = (0, jn.useMemo)(() => {
    if (r)
      return {
        id: e,
        playlistState: t,
        playlist: () => Vn(n.model.byId(e)),
        playlistUnsafe: () => n.model.byIdUnsafe(e),
        fullPlaylist: () => n.model.byIdFull(e),
        insert: (t, a) => {
          const r = n.model.byIdUnsafe(e);
          let i = a;
          if (void 0 !== i) {
            const e = r.list.indexOf(t);
            -1 !== e && e < i && (i -= 1);
          }
          s({
            ...r,
            list: ys(
              r.list.filter((e) => e !== t),
              t,
              i,
            ),
          });
        },
        remove: (t) => {
          const a = n.model.byIdUnsafe(e);
          s({ ...a, list: a.list.filter((e) => e !== t) });
        },
        updateTitle: (t) => {
          s({
            ...n.model.byIdUnsafe(e),
            title: (t =
              0 === (t = t.trim()).length ? Tn(n.model.titles(), "playlists.unnamedTemplate") : t),
          });
        },
      };
    function a(e) {
      const t = !(
        l.current && ((a = l.current), (s = e), a.title === s.title && x.shallow(a.list, s.list))
      );
      var a, s;
      n.controls.edit.setDirty(t);
    }
    function s(t) {
      const s = { ...t, modifiedAt: Date.now() };
      (n.controls.edit.sendModify(e, s), a(s));
    }
  }, [r, e, n, t]);
  return (
    (0, jn.useEffect)(() => {
      t !== Wn && o && i(!0);
    }, [e, t, o]),
    c ? (0, rr.jsx)(Nh.Provider, { value: c, children: s }) : null
  );
});
function kh(e) {
  return (0, rr.jsx)("svg", {
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ...e,
    children: (0, rr.jsx)("path", {
      opacity: 0.9,
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM14 6C14 5.44772 13.5523 5 13 5H11C10.4477 5 10 5.44772 10 6V8C10 8.55228 10.4477 9 11 9H13C13.5523 9 14 8.55228 14 8V6ZM14 12C14 11.4477 13.5523 11 13 11H11C10.4477 11 10 11.4477 10 12V18C10 18.5523 10.4477 19 11 19H13C13.5523 19 14 18.5523 14 18V12Z",
      fill: "#EEEDE9",
      fillOpacity: 0.9,
    }),
  });
}
var Ph = "PreviewCard_6db624e2",
  Eh = "PreviewCard_lacksOverlay_351c6284",
  Mh = "PreviewCard_border_b785c03e",
  Lh = "PreviewCard_unknownOverlay_1039cb2e",
  Ah = "PreviewCard_unknownVehicle_90371983",
  Th = "PreviewCard_about_a93f2c02",
  Dh = "PreviewCard_base__lacks_90371983",
  Bh = "PreviewCard_content_48ec5d54",
  Oh = "PreviewCard_info_b7433b0",
  Vh = "PreviewCard_icon_8d50cd85",
  Rh = "PreviewCard_aboutText_920fe732",
  Hh = "PreviewCard_overlay_10333cbb",
  $h = "PreviewCard_remove_dcd51e1a",
  zh = ks.resolve("strings"),
  Fh = At(function ({ vehicleId: e, scroll: t, children: a, ...s }) {
    const r = Gn(),
      i = r.model.vehicles.get(e),
      o = Ih(),
      l = It(),
      c = r.model.myVehicles.ids().has(e.toString()),
      d = r.model.isElite(e),
      u = ps(24, 48);
    return (0, rr.jsxs)("div", {
      ...s,
      className: cs(Ph, !c && Dh, s.className),
      onMouseEnter: function (e) {
        (l.play("mouse-enter", { target: "vehicle:playlists:edit:preview_card", original: e }),
          s.onMouseEnter?.(e));
      },
      "data-test-id": `playlistVehicle-${e}`,
      "data-item-id": e,
      children: [
        (0, rr.jsx)("div", { className: Mh }),
        i
          ? (0, rr.jsxs)("div", {
              className: Bh,
              children: [
                (0, rr.jsx)(cd, { vehicle: i, doubleRow: !1, active: !0 }),
                (0, rr.jsx)(Wh, { vehicle: i, elite: d }),
              ],
            })
          : (0, rr.jsxs)("div", {
              className: Bh,
              children: [
                (0, rr.jsx)(v, { size: "x380x304", className: Ah }),
                (0, rr.jsx)("div", {
                  className: Lh,
                  children: zh.readOrEmpty("playlists.card.unknown"),
                }),
              ],
            }),
        (0, rr.jsx)("div", { className: Eh }),
        (0, rr.jsxs)("div", {
          className: Hh,
          children: [
            (0, rr.jsx)(qt, {
              silent: !0,
              "data-test-id": "removePlaylistVehicle",
              className: $h,
              soundTarget: "vehicle:playlists:edit:preview_card:close_button",
              onClick: (t) => {
                (l.play("click", { target: "Button", original: t }),
                  o.remove(e),
                  setTimeout(() => Ls(), 100));
              },
              children: (0, rr.jsx)(Wm, { value: "card_close" }),
            }),
            !c &&
              i &&
              (0, rr.jsxs)(n, {
                size: "small",
                theme: "secondary",
                className: Th,
                disabled: !i.comparable,
                onClick: () => r.controls.goToAboutVehicle(e),
                children: [
                  (0, rr.jsx)(kh, { className: Vh, width: u, height: u }),
                  (0, rr.jsx)("span", {
                    className: Rh,
                    children: zh.readOrEmpty("playlists.card.about_vehicle"),
                  }),
                ],
              }),
          ],
        }),
      ],
    });
  });
function Wh({ vehicle: e, elite: t }) {
  return (0, rr.jsxs)(ee, {
    className: Oh,
    children: [
      (0, rr.jsx)(Id, { elite: t, vehicle: e }),
      (0, rr.jsx)(wd, { premium: e.premium, children: e.shortName }),
    ],
  });
}
var qh = {
  "media-wrapper": "DraggingItem_media-wrapper_a1989865",
  root: "DraggingItem_root_a1989865",
  removeOverlay: "DraggingItem_removeOverlay_d9627e2e",
  base: "DraggingItem_7e49a15e",
  removeOverlay__show: "DraggingItem_removeOverlay__show_7befe31f",
};
var Zh = At(function () {
    const e = (0, jn.useRef)(null),
      t = da();
    s(() => {
      const a = Na.primitive(() =>
          t.state.virtualItem
            ? ((function (e) {
                const t = e.state.dropAreas.find(
                  (e) => "grid" === e.getAttribute("data-drop-area"),
                );
                if (!t) return void console.error("Grid area not found");
                const a = t.querySelector(".js-draggable-item");
                return a instanceof HTMLElement ? a.getBoundingClientRect() : void 0;
              })(t) ?? { width: V(256), height: V(158) })
            : void 0,
        ),
        s = Ja.box(void 0, { deep: !1 }),
        n = J(s.set.bind(s));
      return new me()
        .add(
          Za(() => {
            const t = a(),
              n = s.get();
            if (!t || !n) return;
            const r = e.current;
            if (!r) return;
            const { width: i, height: o } = t;
            ((r.style.transform = `translate(${n.clientX - i / 2}px, ${n.clientY - o / 2}px)`),
              (r.style.width = `${i}px`),
              (r.style.height = `${o}px`),
              (r.style.display = "block"));
          }),
        )
        .add(
          qa.move(([t]) => {
            e.current && n(t);
          }),
        )
        .add(
          qa.up(([a, s]) => {
            if (e.current && "outside" === s) {
              const e = t.state;
              (t.emitter.trigger("onDrop", a, e.dragArea, t.item, e), t.reset(), n(void 0));
            }
          }),
        ).dispose;
    });
    const a = t.state;
    if (null === a.virtualItem) return null;
    const n = a.virtualItem.getAttribute("data-drop-area"),
      r = pa(a.virtualItem.getAttribute("data-drop-item"));
    if (void 0 !== r)
      return (0, rr.jsxs)("div", {
        className: qh.base,
        ref: e,
        style: { width: 0, height: 0, display: "none" },
        children: [
          (0, rr.jsx)(Fh, { vehicleId: r, className: qh.item }),
          (0, rr.jsx)(Gh, { dnd: t }),
        ],
      });
    console.warn(`An item with the id ${r} is not found in the container ${n}`);
  }),
  Gh = At(function (e) {
    return (0, rr.jsx)("div", {
      className: cs(qh.removeOverlay, !e.dnd.state.overArea && qh.removeOverlay__show),
      children: (0, rr.jsx)(Wm, { value: "close_48" }),
    });
  }),
  Uh = "Filter_18c313bf",
  Kh = "Filter_search_2ab99031",
  Xh = "Filter_searchField_696a1acc",
  Yh = "Filter_searchPlaceHolder_1ffe980c",
  Jh = "Filter_trigger_7e59b07e",
  Qh = "Filter_popover_1f6b0cd2",
  eg = "Filter_header_36310677",
  tg = "Filter_body_b75e3f7b",
  ag = "Filter_scroll_aff9469e",
  sg = At(function () {
    const e = ks.resolve("strings"),
      t = Kp(),
      a = t.search.get();
    return (0, rr.jsx)(Rt.Provider, {
      value: a,
      children: (0, rr.jsxs)(Rt.Decoration, {
        className: Kh,
        children: [
          (0, rr.jsx)(Rt.Icon, { icon: Rt.icons.search }),
          (0, rr.jsx)(Rt.Field, {
            "data-test-id": "playlistSearchVehicles",
            className: Xh,
            classNames: { placeholder: Yh },
            onChange: (e) => t.search.set(e.currentTarget.value),
            children: e.readOrEmpty("tank_carousel_filter.popover.label.searchNameVehicle"),
          }),
          (0, rr.jsx)(Rt.ClearButton, { "data-test-id": "playlistClearSearchButton" }),
        ],
      }),
    });
  }),
  ng = At(function () {
    const e = ks.resolve("strings"),
      t = Gn(),
      a = t.model.myVehicles.amount(),
      s = t.model.filteredAmount(),
      n = bs({
        header: e.readOrEmpty("tank_carousel_filter.tooltip.params.header"),
        body: e.readOrEmpty("tank_carousel_filter.tooltip.params.body"),
      });
    return (0, rr.jsx)(ta.Trigger, {
      children: (e) =>
        (0, rr.jsx)("div", {
          ...n,
          className: Jh,
          children: (0, rr.jsx)(p_, { ...e, current: s, total: a }),
        }),
    });
  }),
  rg = At(function () {
    const e = Gn().model.nationsOrder.get();
    return (0, rr.jsxs)(ta.Body, {
      className: tg,
      children: [
        (0, rr.jsx)(ta.Divider, {}),
        (0, rr.jsx)(c_, { scrollClassNames: { content: ag }, orderedNations: e }),
      ],
    });
  }),
  ig = At(function () {
    const e = Gn();
    return (0, rr.jsx)(l_, {
      className: eg,
      current: e.model.filteredAmount(),
      total: e.model.myVehicles.amount(),
    });
  }),
  og = At(function () {
    return (0, rr.jsxs)("div", {
      className: Uh,
      children: [
        (0, rr.jsx)(sg, {}),
        (0, rr.jsx)(ng, {}),
        (0, rr.jsx)(ta.Portal, {
          position: "right",
          children: (0, rr.jsx)(Lt, {
            children: (0, rr.jsxs)(ta.Display, {
              className: Qh,
              children: [
                (0, rr.jsx)(ta.Tip, {}),
                (0, rr.jsx)(ta.Close, {}),
                (0, rr.jsx)(ig, {}),
                (0, rr.jsx)(rg, {}),
              ],
            }),
          }),
        }),
      ],
    });
  }),
  lg = "Footer_66922b8b",
  cg = "Footer_base__manual_fa053ebe",
  dg = "Footer_button_5b899796",
  ug = { default: { size: n.sizes.extraSmall }, breakpoints: { medium: { size: n.sizes.small } } },
  mg = At(function (e) {
    const t = ks.resolve("strings"),
      a = wt(ug.default, ug.breakpoints),
      s = Gn();
    return (0, rr.jsxs)("div", {
      className: cs(lg, cg, e.className),
      children: [
        (0, rr.jsx)(n, {
          "data-test-id": "savePlaylist",
          className: dg,
          autoAlignContent: !1,
          theme: n.themes.primary,
          size: a.size,
          disabled: !1 === s.model.edit.dirty.get(),
          onClick: e.onSave,
          soundTarget: "vehicle:playlists:edit:footer:save_button",
          children: t.readOrEmpty("playlists.editScreen.button.save"),
        }),
        (0, rr.jsx)(n, {
          "data-test-id": "exitPlaylist",
          className: dg,
          autoAlignContent: !1,
          theme: n.themes.secondary,
          size: a.size,
          onClick: e.onCancel,
          soundTarget: "vehicle:playlists:edit:footer:cancel_button",
          children: t.readOrEmpty("playlists.editScreen.button.exit"),
        }),
      ],
    });
  }),
  pg = { height: 110, rows: 4 },
  _g = {
    medium: { height: 136, rows: 5 },
    large: { height: 149, rows: 6 },
    extraLarge: { height: 187 },
  };
function hg() {
  const e = da(),
    [t, a] = (0, jn.useState)(void 0);
  return (
    (0, jn.useEffect)(() => {
      if (t)
        return new me()
          .add(
            we(window, "mousemove", (s) => {
              t &&
                (function (e, t) {
                  const a = t.clientX - e.clientX,
                    s = t.clientY - e.clientY;
                  return a * a + s * s;
                })(s, t) > 50 &&
                (e.start(t), a(void 0));
            }),
          )
          .add(we(window, "mouseup", () => a(void 0))).dispose;
    }, [e, t]),
    {
      onClick: Da((e) => {
        e.button === N.left && a({ ...e });
      }),
    }
  );
}
var gg = {
    "media-wrapper": "Grid_media-wrapper_bd62f59d",
    root: "Grid_root_bd62f59d",
    base: "Grid_9cc26e53",
    content: "Grid_content_2ec4d804",
    scrollWrapper: "Grid_scrollWrapper_25b8ce41",
    scroll__top: "Grid_scroll__top_bd62f59d",
    scroll__bottom: "Grid_scroll__bottom_bd62f59d",
    scroll__both: "Grid_scroll__both_bd62f59d",
    scrollContent: "Grid_scrollContent_3c749edd",
    draggableItem: "Grid_draggableItem_eed1b4d2",
    card: "Grid_card_5124f883",
    dndSeparator: "Grid_dndSeparator_4e3295f",
    stateInfo: "Grid_stateInfo_df3fdb33",
    title: "Grid_title_be284df3",
    description: "Grid_description_750b612a",
    area__begin: "Grid_area__begin_c6c72ca9",
    area__end: "Grid_area__end_89c93232",
  },
  fg = At(function ({ id: e, children: t, disabled: a, ...s }) {
    const n = da(),
      r = hg(),
      i = n.item?.getAttribute("data-drop-item");
    return (0, rr.jsx)("div", {
      ...s,
      "data-drop-item": e,
      className: cs(gg.draggableItem, i === e && gg.draggableItem__dragging, "js-draggable-item"),
      onMouseDown: (e) => {
        a || r.onClick(e);
      },
      children: t,
    });
  }),
  vg = ks.resolve("strings"),
  bg = [25, 25],
  xg = At(function (e) {
    const t = Gn().model.byIdFull(e.id);
    return (
      u(
        void 0 !== t,
        `Grid expected to get vehicles from playlist ${e.id}, but playlist is not defined`,
      ),
      (0, rr.jsx)(Xa, {
        children:
          0 === t.list.length
            ? (0, rr.jsxs)(Cg, {
                className: gg.stateInfo,
                children: [
                  (0, rr.jsx)("div", {
                    className: gg.title,
                    children: vg.readOrEmpty("playlists.editScreen.create.title"),
                  }),
                  (0, rr.jsx)("div", {
                    className: gg.description,
                    children: vg.readOrEmpty("playlists.editScreen.create.body"),
                  }),
                ],
              })
            : (0, rr.jsx)(yg, { playlist: t }),
      })
    );
  }),
  yg = At(function (e) {
    const { api: t } = Bt(),
      a = wt(pg, _g),
      [s, n] = $a(t, bg);
    return (0, rr.jsx)(ke, {
      api: t,
      elementHeight: a.height,
      itemsPerRow: a.rows,
      direction: "vertical",
      throttle: 80,
      totalElements: e.playlist.list.length,
      wrappers: { Content: Cg },
      renderScroll: (e) =>
        (0, rr.jsx)("div", {
          style: { "--card-height": `${a.height}rem` },
          "data-name": "grid-edit-playlist",
          className: gg.base,
          children: (0, rr.jsx)(Ba, {
            ...e,
            areaClassName: cs(gg.area, !s && gg.area__begin, !n && gg.area__end),
            scrollClassNames: { wrapper: gg.scrollWrapper, content: gg.scrollContent },
            children: e.children,
          }),
        }),
      renderElement: (t) => {
        const a = e.playlist.list[t];
        return (0, rr.jsx)(fg, {
          id: a.toString(),
          "data-drop-area": "grid",
          children: (0, rr.jsx)(Fh, { className: gg.card, vehicleId: a }, a),
        });
      },
    });
  }),
  Cg = At(function (e) {
    const t = da(),
      a = (0, jn.useRef)(null),
      s = (0, jn.useRef)(null),
      [n, r] = (0, jn.useState)(!1),
      i = Ih(),
      { id: o, playlist: l } = i,
      c = Gn();
    return (
      (0, jn.useEffect)(() => {
        let e;
        const n = s.current;
        if (!n) return void console.error("Separator ref is not filled");
        const o = a.current;
        if (o)
          return new me()
            .add(
              t.emitter.on("onDrop", (e, t, a) => {
                c();
                const s = pa(a?.getAttribute("data-drop-item"));
                if (void 0 === s) return;
                const n = document.elementFromPoint(e.clientX, e.clientY);
                if (!t || !n || (!o.contains(n) && n !== o)) return void i.remove(s);
                const r = pa(n.getAttribute("data-item-id"));
                i.insert(s, void 0 !== r ? l().list.indexOf(r) : void 0);
              }),
            )
            .add(
              t.emitter.on("onMove", (t) => {
                const a = document.elementFromPoint(t.clientX, t.clientY);
                if (a === e || !(a instanceof HTMLDivElement)) return;
                if ((r(o === a || o.contains(a)), !a.getAttribute("data-item-id"))) return void c();
                const s = o.getBoundingClientRect(),
                  i = a.getBoundingClientRect();
                ((n.style.transform = `translate(${i.x - s.x}px,${i.y - s.y}px)`),
                  (n.style.height = `${i.height}px`),
                  (n.style.display = "block"),
                  (e = a));
              }),
            ).dispose;
        function c() {
          (r(!1), (e = void 0), (n.style.display = "none"));
        }
        console.error("Base ref is not filled");
      }, [i, t.emitter, o, l, c.controls]),
      (0, rr.jsxs)(Ya.DropArea, {
        ...e,
        ref: a,
        "data-drop-area": "grid",
        className: cs(gg.content, n && gg.content__dragging, e.className),
        children: [e.children, (0, rr.jsx)("div", { className: gg.dndSeparator, ref: s })],
      })
    );
  }),
  jg = "Background_476ee51e",
  wg = "Background_flag_bc133c8d",
  Ng = "Background_vehicle_7973c233",
  Ig = "Background_favorite_e48910a";
function Sg({ vehicle: e }) {
  const t = ks.resolve("images"),
    a = `vehicle.x190x152.${Gn().model.vehicleImage(e.vehicleId)}`;
  return (0, rr.jsxs)("div", {
    className: cs(jg),
    children: [
      (0, rr.jsx)("div", {
        className: wg,
        style: {
          backgroundImage: `url(${t.readOrEmpty(`hangar.carousel.cards.flags.x400x300.${Pt(e.nationId)}`)})`,
        },
      }),
      (0, rr.jsx)("div", {
        className: Ng,
        style: {
          backgroundImage: `url(${t.readOrEmpty(t.has(a) ? a : "vehicle.x190x152.tank_empty")})`,
        },
      }),
      e.favorite && (0, rr.jsx)("div", { className: Ig }),
    ],
  });
}
var kg = "VehicleInformation_b9ce6636",
  Pg = "VehicleInformation_base__selected_49aec79f",
  Eg = "VehicleInformation_vehicleInfo_3bdce6bd",
  Mg = "VehicleInformation_text_12254eae",
  Lg = "VehicleInformation_text__level_2431a30a",
  Ag = "VehicleInformation_text__name_90468cf8",
  Tg = "VehicleInformation_text__premium_c5399345",
  Dg = At(function ({ vehicle: e, selected: t }) {
    const a = Gn().model.isElite(e.id),
      s = e.premium;
    return (0, rr.jsxs)("div", {
      className: cs(kg, t && Pg),
      children: [
        (0, rr.jsx)(Sg, { vehicle: e }),
        (0, rr.jsxs)(ee, {
          className: Eg,
          children: [
            (0, rr.jsx)(ee.Level, { className: cs(Mg, Lg), value: e.level }),
            xt(e.type) &&
              (0, rr.jsx)(ee.Type, { type: e.type, premium: a, size: ee.Type.sizes.x24x24 }),
            (0, rr.jsx)(ee.Name, { className: cs(Mg, Ag, s && Tg), children: e.shortName }),
          ],
        }),
      ],
    });
  }),
  Bg = "Card_border_aaf47988",
  Og = "Card_content_7f4f270",
  Vg = "Card_actionIcon_538a4b93",
  Rg = "card_close",
  Hg = "card_add",
  $g = Ss("Slot", "Card_a05790e2", {
    variants: {
      selected: { true: "Card_base__selected_f4c22d1c" },
      dragging: { true: "Card_base__dragging_f4c22d1c" },
      hover: { true: "Card_base__hover_f4c22d1c" },
      empty: { true: "Card_base__empty_9c9bc0d5" },
    },
  });
function zg(e) {
  return (0, rr.jsx)($g, {
    className: e.className,
    style: { height: e.height },
    empty: !0,
    children: (0, rr.jsx)("div", { className: Bg }),
  });
}
var Fg = At(function ({
    vehicle: e,
    scroll: t,
    index: a,
    selected: s = !1,
    height: n,
    onClick: r,
    ...i
  }) {
    const o = It(),
      [l, c] = (0, jn.useState)(!1),
      [d, u] = (0, jn.useState)(!1),
      m = da(),
      p = e ? e.vehicleId : `emptyCard.${a}`,
      _ = s ? Rg : l ? Hg : "",
      h = `${_}${d ? "_active" : l ? "_hover" : ""}`,
      g = Boolean(m.item) && m.item.getAttribute("data-drop-item") === p.toString();
    return (0, rr.jsxs)($g, {
      ...i,
      "data-test-id": `selectVehicle-${p}`,
      selected: s,
      hover: l,
      style: { height: n },
      dragging: g,
      onMouseEnter: function (t) {
        e && (c(!0), o.play("mouse-enter", { target: "vehicle:playlists:card", original: t }));
      },
      onMouseLeave: function () {
        (c(!1), u(!1));
      },
      onMouseDown: function (e) {
        e.button === N.left && u(!0);
      },
      onMouseUp: function (t) {
        t.button === N.left &&
          (u(!1),
          e
            ? g ||
              (r?.(e.vehicleId),
              o.play(_ === Rg ? "close" : "click", {
                target: "vehicle:playlists:card",
                original: t,
              }))
            : console.error("Unknown vehicle", e));
      },
      children: [
        (0, rr.jsx)("div", { className: Bg }),
        e &&
          (0, rr.jsxs)("div", {
            className: Og,
            children: [
              (0, rr.jsx)(Dg, { selected: s, vehicle: e }),
              "" !== _ && (0, rr.jsx)(Wm, { className: Vg, value: h }),
            ],
          }),
      ],
    });
  }),
  Wg = "List_4152ee6b",
  qg = "List_draggableItem_b1a74246",
  Zg = "List_bar_97761f22",
  Gg = "List_base__scrollDisabled_5974b0a7",
  Ug = "List_area_b33ed98",
  Kg = "List_area__begin_daa99987",
  Xg = "List_area__end_9baec685",
  Yg = At(function ({ id: e, children: t, disabled: a, soundTarget: s, ...n }) {
    const r = hg(),
      i = It(),
      o = da(),
      l = Boolean(o.item) && o.item.getAttribute("data-drop-item") === e,
      c = Qa(l);
    return (
      (0, jn.useEffect)(() => {
        (l && !1 === c && i.play("drag", { target: s ?? "vehicle:playlists:edit:draggable_item" }),
          l ||
            !0 !== c ||
            i.play("drop", { target: s ?? "vehicle:playlists:edit:draggable_item" }));
      }, [s, i, l, c]),
      (0, rr.jsx)("div", {
        ...n,
        "data-drop-item": e,
        className: qg,
        onMouseDown: (e) => {
          a || r.onClick(e);
        },
        children: t,
      })
    );
  });
var Jg = [25, 25],
  Qg = At(function (e) {
    const { api: t } = Bt(),
      [a, s] = $a(t, Jg),
      n = Gn(),
      r = n.model.byIdUnsafe(e.id),
      i = n.model.filtered(),
      o = wt({ height: 48 }, { large: { height: 64 } }),
      l = V(o.height),
      c = Ih();
    function d(e) {
      r.list.includes(e) ? c.remove(e) : c.insert(e);
    }
    !(function ({ currentIndex: e, cardSize: t, api: a }) {
      const s = ce();
      (0, jn.useLayoutEffect)(() => {
        const n = a.getWrapperSize(),
          r = a.animationScroll.scrollPosition.get();
        if (!n || void 0 === e) return;
        const i = r,
          o = r + n,
          l = t * e,
          c = l + t,
          d = l - (Math.floor(n / t) / 2) * t;
        (l > i && c < o) || s.run(() => a.applyScroll(d));
      }, []);
    })({ api: t, cardSize: l, currentIndex: n.model.firstAddedVehicleIndexByPlaylistId(e.id) });
    const [u, m] = (0, jn.useState)(0);
    return (
      (0, jn.useEffect)(() => {
        function a() {
          const a = e.baseRef.current;
          if (!a) return;
          const s = a.offsetHeight - l * i.length;
          s >= 0
            ? (t.setDisabled(!0),
              t.applyScroll(0, { immediate: !0 }),
              m(Math.ceil(s / l) + 1),
              a.classList.add(Gg))
            : (t.setDisabled(!1), m(0), a.classList.remove(Gg));
        }
        return (a(), t.events.on("recalculateContent", a));
      }, [t, l, e.baseRef, i.length]),
      (0, rr.jsx)(ke, {
        api: t,
        elementHeight: l,
        direction: "vertical",
        totalElements: u + i.length,
        renderScroll: (e) =>
          (0, rr.jsx)(ca, { ...e, className: cs(Ug, !a && Kg, !s && Xg), children: e.children }),
        renderElement: (e) => {
          const a = i[e];
          if (!a) return (0, rr.jsx)(zg, { height: l });
          const s = r.list.includes(a.vehicleId);
          return (0, rr.jsx)(
            Yg,
            {
              disabled: s,
              id: a.id,
              "data-drop-area": a.id,
              children: (0, rr.jsx)(Fg, {
                height: l,
                onClick: d,
                index: e,
                selected: s,
                vehicle: a,
                scroll: t,
              }),
            },
            a.id,
          );
        },
      })
    );
  }),
  ef = (0, jn.memo)(function (e) {
    const t = (0, jn.useRef)(null);
    return (0, rr.jsx)("div", {
      className: Wg,
      ref: t,
      children: (0, rr.jsxs)(Xa, {
        children: [
          (0, rr.jsx)(Qg, { baseRef: t, id: e.id }),
          (0, rr.jsx)("div", { className: Zg, children: (0, rr.jsx)(es, {}) }),
        ],
      }),
    });
  }),
  tf = "Name_decoration_82a70e4e",
  af = "Name_placeholder_36222a38";
function sf({ children: e }) {
  const t = It(),
    { focus: a } = Ia();
  return (0, rr.jsx)("div", {
    className: tf,
    onMouseEnter: function (e) {
      t.play("mouse-enter", { target: "vehicle:playlists:edit_name_input", original: e });
    },
    onClick: function (e) {
      (t.play("click", { target: "vehicle:playlists:edit_name_input", original: e }), a());
    },
    children: e,
  });
}
var nf = At(function () {
    const e = Ih(),
      [t, a] = (0, jn.useState)(e.playlistUnsafe().title),
      s = Da(() => e.updateTitle(t)),
      n = La(s, [s], 400);
    return (0, rr.jsx)(Rt.Provider, {
      value: t,
      children: (0, rr.jsx)(sf, {
        children: (0, rr.jsx)(Rt.Field, {
          maxLength: 100,
          classNames: { placeholder: af },
          onChange: function (e) {
            (a(e.target.value), n());
          },
          "data-test-id": "playlistName",
          children: ks.resolve("strings").readOrEmpty("playlists.editScreen.input.placeholder"),
        }),
      }),
    });
  }),
  rf = "Edit_2f911444",
  of = "Edit_side_32fb5102",
  lf = "Edit_base__manual_c860fbd9",
  cf = "Edit_topSide_a248754f",
  df = "Edit_sideSeparator_8ffe56a3",
  uf = "Edit_main_9d89cd47",
  mf = "Edit_topMain_206241af",
  pf = "Edit_header_c18f180d",
  _f = "Edit_iconTrashCan_80d1a58c",
  hf = "Edit_grid_54c57624",
  gf = "Edit_footer_f4d6b753",
  ff = At(function ({ className: e }) {
    const t = Gn(),
      a = Ih(),
      s = a.id,
      r = a.playlist(),
      i = ks.resolve("strings"),
      o = da();
    Wt(t.controls.filters.reset);
    const l = (0, jn.useMemo)(
      () => ({
        filters: t.model.filters,
        search: t.model.searchName,
        defaultFilters: t.model.defaultFilters,
        hasFilter: t.model.hasFilters,
        change: t.controls.filters.change,
        reset: t.controls.filters.reset,
      }),
      [t],
    );
    return r
      ? (0, rr.jsxs)(Ya.DragArea, {
          className: cs(rf, lf, o.item && "dragging", e),
          children: [
            (0, rr.jsxs)("div", {
              className: of,
              children: [
                (0, rr.jsx)("div", {
                  className: cf,
                  children: (0, rr.jsx)(Up.Provider, {
                    value: l,
                    children: (0, rr.jsx)(ta, { children: (0, rr.jsx)(og, {}) }),
                  }),
                }),
                (0, rr.jsx)("div", { className: df }),
                (0, rr.jsx)(ef, { id: s }),
              ],
            }),
            (0, rr.jsxs)("div", {
              className: uf,
              children: [
                (0, rr.jsx)("div", {
                  className: mf,
                  children: (0, rr.jsxs)("div", {
                    className: pf,
                    children: [
                      (0, rr.jsx)(nf, {}),
                      (0, rr.jsxs)(n, {
                        "data-test-id": "deletePlaylist",
                        theme: "secondary",
                        onClick: () => t.controls.openDeleteConfirm(s, r.title),
                        size: "small",
                        children: [
                          (0, rr.jsx)(Wm, { className: _f, value: "trash_can" }),
                          i.readOrEmpty("playlists.list.remove"),
                        ],
                      }),
                    ],
                  }),
                }),
                (0, rr.jsx)("div", { className: hf, children: (0, rr.jsx)(xg, { id: s }) }),
                (0, rr.jsx)(mg, {
                  className: gf,
                  onSave: () => t.controls.save(s),
                  onCancel: () => t.controls.exit(s),
                }),
              ],
            }),
          ],
        })
      : (console.error(`Unknown ${s} as playlist`), null);
  }),
  vf = At(function ({ className: e, ...t }) {
    return (0, rr.jsx)(Sh, {
      ...t,
      children: (0, rr.jsxs)(Ya, {
        children: [
          (0, rr.jsx)(ff, { className: e }),
          (0, rr.jsx)(Ya.VirtualItem, { here: !0, children: (0, rr.jsx)(Zh, {}) }),
        ],
      }),
    });
  }),
  bf = "EditPlaylist_e665e2a0";
function xf() {
  const e = ct();
  gt(ma.ESCAPE, () => {
    e.goBack();
  });
  const t = (0, jn.useMemo)(() => {
    try {
      return L(qn, JSON.parse(e.params));
    } catch (t) {
      return void console.error(t);
    }
  }, [e.params]);
  return t
    ? (0, rr.jsx)(vf, { className: bf, ...t })
    : (console.error("Expected params for Edit screen, but got", t), null);
}
var yf = (function () {
    const e = "undefined" != typeof document && document.createElement("link").relList;
    return e && e.supports && e.supports("modulepreload") ? "modulepreload" : "preload";
  })(),
  Cf = {},
  jf = function (e, t, a) {
    let s = Promise.resolve();
    if (t && t.length > 0) {
      const e = document.getElementsByTagName("link"),
        r = document.querySelector("meta[property=csp-nonce]"),
        i = r?.nonce || r?.getAttribute("nonce");
      ((n = t.map((t) => {
        if (
          ((t = (function (e, t) {
            return new URL(e, t).href;
          })(t, a)),
          t in Cf)
        )
          return;
        Cf[t] = !0;
        const s = t.endsWith(".css"),
          n = s ? '[rel="stylesheet"]' : "";
        if (a)
          for (let a = e.length - 1; a >= 0; a--) {
            const n = e[a];
            if (n.href === t && (!s || "stylesheet" === n.rel)) return;
          }
        else if (document.querySelector(`link[href="${t}"]${n}`)) return;
        const r = document.createElement("link");
        return (
          (r.rel = s ? "stylesheet" : yf),
          s || (r.as = "script"),
          (r.crossOrigin = ""),
          (r.href = t),
          i && r.setAttribute("nonce", i),
          document.head.appendChild(r),
          s
            ? new Promise((e, a) => {
                (r.addEventListener("load", e),
                  r.addEventListener("error", () =>
                    a(new Error(`Unable to preload CSS for ${t}`)),
                  ));
              })
            : void 0
        );
      })),
        (s = Promise.all(
          n.map((e) =>
            Promise.resolve(e).then(
              (e) => ({ status: "fulfilled", value: e }),
              (e) => ({ status: "rejected", reason: e }),
            ),
          ),
        )));
    }
    var n;
    function r(e) {
      const t = new Event("vite:preloadError", { cancelable: !0 });
      if (((t.payload = e), window.dispatchEvent(t), !t.defaultPrevented)) throw e;
    }
    return s.then((t) => {
      for (const e of t || []) "rejected" === e.status && r(e.reason);
      return e().catch(r);
    });
  },
  wf = (0, jn.lazy)(() =>
    jf(() => import("../chunks/widget.js"), __vite__mapDeps([0, 1]), import.meta.url),
  );
function Nf(e) {
  const t = e.options?.rootId;
  if (t)
    return (0, rr.jsx)(p, {
      id: t,
      children: (0, rr.jsx)(jn.Suspense, { children: (0, rr.jsx)(wf, { ...e }) }),
    });
  console.error("TeaserWidget: rootId is not given");
}
var If = "AllVehiclesButton_3837d663",
  Sf = "AllVehiclesButton_grid_64f1c816",
  kf = "AllVehiclesButton_content_75d29fb4";
function Pf(e) {
  const t = It(),
    a = ks.resolve("strings"),
    s = ct(),
    r = ps("hangar.filter.all_vehicle_button", "hangar.filter.all_vehicle_button_upscale"),
    i = bs({
      header: a.readOrEmpty("hangar.tooltip.filters.myVehicle.header"),
      body: a.readOrEmpty("hangar.tooltip.filters.myVehicle.body"),
    });
  function o() {
    s.push(e.route ?? "/hangar/allVehicles");
  }
  return (0, rr.jsxs)(n, {
    ...i,
    classNames: { base: If },
    theme: n.themes.secondary,
    size: n.sizes.small,
    autoAlignContent: !1,
    onClick: function () {
      (i.onClick(), o());
    },
    children: [
      (0, rr.jsx)(_s, { className: Sf, path: r }),
      (0, rr.jsx)(Ta, {
        keyCode: ma.SPACE,
        onActive: function (e) {
          (t.play("hot-key", { target: "vehicle:all_vehicles:all_vehicles_button", original: e }),
            o());
        },
        silent: !0,
        classNames: { content: kf },
        children: (0, rr.jsx)(Ta.Code, {}),
      }),
    ],
  });
}
var Ef = "/hangar/{root}",
  Mf = {
    root: "/hangar/loadout",
    equipments: "/hangar/loadout/equipment",
    instructions: "/hangar/loadout/instructions",
    shells: "/hangar/loadout/shells",
    consumables: "/hangar/loadout/consumables",
    battleAbilities: "/hangar/loadout/battleAbilities",
  },
  Lf = "/hangar/allVehicles",
  Af = "/hangar/editVehiclePlaylists",
  Tf = "EntryPoint_368cd93c",
  Df = "EntryPoint_content_ec86add3",
  Bf = (0, jn.lazy)(() =>
    jf(() => import("../chunks/entry_point.js"), __vite__mapDeps([0, 2]), import.meta.url),
  );
function Of() {
  return (0, rr.jsx)(p, {
    id: ks.resolve("aliases").read((e) => e.hangar.shared.LootboxEntryPoint("resId")),
    children: (0, rr.jsx)(jn.Suspense, {
      children: (0, rr.jsx)("div", {
        className: Tf,
        children: (0, rr.jsx)("div", { className: Df, children: (0, rr.jsx)(Bf, {}) }),
      }),
    }),
  });
}
var Vf = (0, jn.memo)(function () {
    return (0, rr.jsxs)(rr.Fragment, {
      children: [(0, rr.jsx)(wa, { children: (0, rr.jsx)(wh, {}) }), (0, rr.jsx)(Of, {})],
    });
  }),
  Rf = "shells",
  Hf = "optDevices",
  $f = Rf,
  zf = "consumables",
  Ff = "battleBoosters",
  Wf = "battleAbilities",
  qf = "equipment",
  Zf = "instructions",
  Gf = "shells",
  Uf = "consumables",
  Kf = {
    Standard: "standardEquipments",
    Bounty: "bountyEquipments",
    Improved: "improvedEquipments",
    Experimental: "experimentalEquipments",
  },
  Xf = {
    Firepower: "firepower",
    Survivability: "survivability",
    Stealth: "stealth",
    Mobility: "mobility",
  },
  Yf = "gunner_smoothTurret",
  Jf = "driver_virtuoso",
  Qf = "driver_smoothDriving",
  ev = "fireFighting",
  tv = "naturalCover",
  av = "gunner_rancorous",
  sv = "loader_pedant",
  nv = "commander_practical",
  rv = "commander_enemyShotPredictor",
  iv = (e) =>
    (0, rr.jsx)("svg", {
      width: 24,
      height: 24,
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ...e,
      children: (0, rr.jsx)("path", {
        d: "M20 19H21V20H3V19H4V18H20V19ZM7 16H5V11H7V16ZM11 16H9V11H11V16ZM15 16H13V11H15V16ZM19 16H17V11H19V16ZM21 8V9H3V8L12 3L21 8Z",
        fill: "#EEEDE9",
        fillOpacity: 0.9,
        shapeRendering: "crispEdges",
      }),
    }),
  ov = ks.resolve("strings"),
  lv = ks.resolve("views"),
  cv = ks.resolve("aliases");
var dv = (e) =>
    (0, rr.jsx)("svg", {
      width: 24,
      height: 24,
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ...e,
      children: (0, rr.jsx)("path", {
        d: "M4.0965 5.7193C8.197 1.61879 14.822 1.59521 18.8934 5.66657C21.5623 8.33559 22.4702 12.1016 21.6258 15.5328L23.9998 16.9283L18.452 20.0748L18.535 13.7164L20.6317 14.9488C21.2536 11.9664 20.4136 8.75031 18.1111 6.44782C14.4683 2.80537 8.54162 2.82691 4.87286 6.49567C1.20411 10.1644 1.18257 16.0911 4.82501 19.7339L4.04376 20.5162C-0.0275931 16.4448 -0.00400785 9.8198 4.0965 5.7193ZM13.2713 10.2496H18.5213L14.1463 13.7496L16.3338 18.9996L11.5213 15.9371L6.7088 18.9996L8.8963 13.7496L4.5213 10.2496H9.7713L11.5213 4.99957L13.2713 10.2496Z",
        fill: "#EEEDE9",
        fillOpacity: 0.9,
        shapeRendering: "crispEdges",
      }),
    }),
  uv = "Trainings_button_bf9590ac",
  mv = "Trainings_toggleContent_8fe22dba",
  pv = "Trainings_image_cc494d75",
  _v = "Trainings_image__on_3cef43a",
  hv = Ss("Trainings", "Trainings_f0a414b9"),
  gv = Hs(function (e) {
    const { model: t, controls: a } = au(),
      s = t.state.get(),
      n = t.acceleratedTraining.get(),
      r = t.intensiveTraining.get(),
      i = s === eu,
      o = i || "disabled" === n,
      l = i || "disabled" === r,
      c = (function (e) {
        const t = ((e) =>
          "disabled" === e
            ? "acceleratedTraining_disabled"
            : "on" === e
              ? "acceleratedTraining_on"
              : "acceleratedTraining_off")(e);
        return bs({
          header: ov.readOrEmpty(`crew_widget.tooltip.buttonsBar.${t}.header`),
          body: ov.readOrEmpty(`crew_widget.tooltip.buttonsBar.${t}.body`),
        });
      })(n),
      d = S({
        resId: cv.read((e) => e.hangar.shared.Crew("resId")),
        contentId: lv.read((e) => e.lobby.crew.CrewHeaderTooltipView("resId")),
      }),
      u = ha(
        () => {
          l || a.toggleIntensiveTraining();
        },
        [a, l],
        300,
      );
    return (0, rr.jsxs)(hv, {
      ...e,
      children: [
        (0, rr.jsx)("div", {
          ...c,
          className: uv,
          children: (0, rr.jsx)(Et, {
            theme: ss.primary,
            activated: "on" === n,
            disabled: o,
            onClick: () => {
              o || a.toggleAcceleratedTraining();
            },
            classNames: { content: mv },
            children: (0, rr.jsx)(iv, { className: cs(pv, !i && "on" === n && _v) }),
          }),
        }),
        (0, rr.jsx)("div", {
          ...d,
          className: uv,
          children: (0, rr.jsx)(Et, {
            theme: ss.primary,
            activated: "on" === r,
            disabled: l,
            onClick: u,
            classNames: { content: mv },
            children: (0, rr.jsx)(dv, { className: cs(pv, !i && "on" === r && _v) }),
          }),
        }),
      ],
    });
  }),
  fv = (function (e) {
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
  vv = (function (e) {
    return ((e.UNDEFINED = "undefined"), (e.SILVER = "silver"), (e.GOLD = "gold"), e);
  })({});
function bv(e) {
  const t = Ns(e, 0);
  if (t) return { name: t.name, special: t.rank === vv.GOLD };
}
function xv(e) {
  return {
    currentIndex: e.currentIndex,
    id: e.groupId,
    totalCount: e.totalCount,
    states: Ve(e.setupSelector.states, (e) => e),
    switchEnabled: e.setupSelector.isSwitchEnabled,
    prebattleSwitchDisabled: e.setupSelector.isPrebattleSwitchDisabled,
    sections: Ve(e.sections, yv),
  };
}
function yv(e) {
  return {
    type: e.type,
    name: e.name,
    vehicle: e.vehicle,
    vehicleType: e.vehicleType,
    newItemsCount: e.newItemsCount,
    slots: Ve(e.slots, Cv),
    warning: e.isWarning,
  };
}
function Cv(e) {
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
        Ve(t, (e) =>
          (function (e, t) {
            return { dynamic: t, type: e.name, active: e.isCorrect, clickable: e.isClickable };
          })(e, a),
        ))[0]
      : void 0,
    mainMechanic: e.mechanics ? bv(e.mechanics) : void 0,
  };
  var t, a;
}
var jv = [Ff, Wf],
  [wv, Nv] = ds("AmmunitionPanelModel")(
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
        s = Na.structural(() => _(a.groups.get(), (e.initial && e.initial.fromGroupModel) ?? xv)),
        n = Na.primitive((e, t) => a.selectedSlot.get() === e && a.selectedSection.get() === t),
        r = Na.primitive((e) => a.selectedSection.get() === e),
        i = Na.primitive((e) => {
          for (const t of s()) for (const a of t.sections) if (a.name === e) return a.slots.length;
          return 0;
        }),
        o = Na.primitive((e) => !jv.includes(e) && r(e) && i(e) > 1),
        l = Na.structural(() => {
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
        c = Na.model((e) => s()[e]),
        d = Na.model((e, t) => c(e)?.sections[t]),
        u = Na.model((e, t, a) => d(e, t)?.slots[a]);
      return {
        ...a,
        vehicleId: Na.primitive(() => {
          const e = a.vehicleId.get();
          return "" === e ? void 0 : e;
        }),
        computes: {
          groups: s,
          isSlotSelected: n,
          isSectionSelected: r,
          selectedSlotGroupAndItem: l,
          groupByIndex: c,
          sectionByIndex: d,
          slotByIndex: u,
          sectionSize: i,
          sectionDraggable: o,
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
  Iv = (function (e) {
    return ((e[(e.NORMAL = 0)] = "NORMAL"), (e[(e.WARNING = 1)] = "WARNING"), e);
  })({}),
  Sv = ks.resolve("strings");
var kv = {
    "media-wrapper": "PanelSwitcher_media-wrapper_a8240ce9",
    root: "PanelSwitcher_root_a8240ce9",
    base: "PanelSwitcher_5e94cb32",
    switcher: "PanelSwitcher_switcher_a8240ce9",
    switcher__warning: "PanelSwitcher_switcher__warning_a8240ce9",
    switcherOverlay: "PanelSwitcher_switcherOverlay_914ce250",
    item__warning: "PanelSwitcher_item__warning_c6581e78",
    itemIcon: "PanelSwitcher_itemIcon_484391b3",
    indicator: "PanelSwitcher_indicator_a80d3313",
    indicator__inactive: "PanelSwitcher_indicator__inactive_399f9969",
  },
  Pv = "default",
  Ev = "warning",
  Mv = "selected",
  Lv = "first",
  Av = "second";
function Tv(e, t) {
  return `loadout.switcher.${e}_item_${t}`;
}
function Dv(e, t) {
  return t.some((t, a) => t === Iv.WARNING && a !== e);
}
function Bv(e) {
  const t =
    ((a = e.groupId),
    (s = e.modifier),
    bs({
      header: Sv.readOrEmpty("tank_setup.tooltips.prebattleSwitchIndicator.title"),
      body: Sv.readOrEmpty(`tank_setup.tooltips.prebattleSwitchIndicator.desc.c_${a}.${s}`),
    }));
  var a, s;
  const n = e.itemStates[0] === Iv.WARNING,
    r = e.itemStates[1] === Iv.WARNING,
    i = 1 === e.currentIndex;
  return (0, rr.jsxs)("div", {
    className: cs(kv.base, e.className),
    children: [
      (0, rr.jsxs)(Ut, {
        type: Ut.types.vertical,
        onSwitch: function (t) {
          e.onSwitch({ groupId: e.groupId, currentIndex: t ? 1 : 0 });
        },
        disabled: e.disabled,
        size: Ut.sizes.small,
        checked: i,
        classNames: {
          base: cs(kv.switcher, Dv(e.currentIndex, e.itemStates) && kv.switcher__warning),
          overlay: kv.switcherOverlay,
        },
        children: [
          (0, rr.jsx)(Ut.Item, {
            className: cs(kv.item, n && kv.item__warning),
            children: (0, rr.jsx)(_s, { path: Tv(Lv, n ? Ev : Pv), className: kv.itemIcon }),
          }),
          (0, rr.jsx)(Ut.Item, {
            className: cs(kv.item, r && kv.item__warning),
            children: (0, rr.jsx)(_s, { path: Tv(Av, r ? Ev : Pv), className: kv.itemIcon }),
          }),
          (0, rr.jsx)(Ut.SelectedItem, {
            children: (0, rr.jsx)(_s, { path: Tv(i ? Av : Lv, Mv), className: kv.itemIcon }),
          }),
        ],
      }),
      (0, rr.jsx)(_s, {
        ...(e.prebattleSwitchDisabled && t),
        path: "loadout.switcher.indicator_" + (e.prebattleSwitchDisabled ? "active" : "default"),
        className: cs(kv.indicator, !e.prebattleSwitchDisabled && kv.indicator__inactive),
      }),
    ],
  });
}
var Ov = "select",
  Vv = "undo",
  Rv = "cancel",
  Hv = "swap",
  $v = "add_one",
  zv = "drag_drop";
function Fv(e) {
  return { currency: e.name, value: e.value, enough: e.isEnough };
}
function Wv(e) {
  return Ve(e, Fv);
}
function qv(e) {
  return {
    priceID: e.priceID,
    price: Wv(e.price),
    previousPrice: Wv(e.defPrice),
    discount: Wv(e.discount),
  };
}
var Zv = (e) => ({
  canConfirm: e.canAccept,
  canCancel: e.canCancel,
  autoRenewalEnabled: e.isAutoRenewalEnabled,
  disabled: e.isDisabled,
  totalItemsInStorage: e.totalItemsInStorage,
  prices: _(e.price, (e) => Fv(e)),
});
function Gv(e) {
  return { name: e.name, correct: e.isCorrect, clickable: e.isClickable };
}
function Uv(e) {
  return { dynamic: e.isDynamic, specializations: ((t = e.specializations), Ve(t, Gv)) };
  var t;
}
function Kv(e) {
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
    price: qv(e.price),
    specializations: Uv(e.specializations),
  };
}
function Xv(e) {
  return {
    ...Kv(e),
    description: e.description,
    builtIn: e.isBuiltIn,
    itemName: e.itemName,
    buyMoreDisabled: e.isBuyMoreDisabled,
  };
}
var [Yv, Jv] = ds("ConsumablesModel")(
  ({ observableModel: e }) => {
    const t = {
        ...e.primitives(["autoloadEnabled", "hasChanges"]),
        consumables: e.arrayClone("consumables"),
        dealData: e.transform((e) => Zv(e), "dealPanel"),
        prices: e.transform((e) => Ve(e, Fv), "dealPanel.price"),
      },
      a = Na.structural(() => {
        const e = t.dealData.get(),
          a = [];
        return (
          e.totalItemsInStorage > 0 &&
            a.push({ enough: !0, currency: "depot", value: e.totalItemsInStorage }),
          t.prices.get().forEach((e) => a.push(e)),
          { ...e, prices: a }
        );
      }),
      s = Na.primitive(() => _(t.consumables.get(), Xv)),
      n = Na.model((e) => Qt(s(), (t) => t.intCD === e));
    return { ...t, computes: { consumables: s, consumableById: n, dealData: a } };
  },
  ({ model: e, externalModel: t }) => ({
    unmount: t.createCallback(
      (e, t) => ({ intCD: e, currentSlotId: t, actionType: Vv, type: zf }),
      "onSlotAction",
    ),
    actionSlot: t.createCallback((e) => ({ ...e, type: zf }), "onSlotAction"),
    swapSlots: t.createCallback((e) => ({ ...e, actionType: zv }), "onSlotAction"),
    confirm: t.createCallbackNoArgs("dealPanel.onDealConfirmed"),
    cancel: t.createCallbackNoArgs("dealPanel.onDealCancelled"),
    toggleAutoRenewal: t.createCallback(
      () => ({ value: !e.dealData.get().autoRenewalEnabled }),
      "dealPanel.onAutoRenewalChanged",
    ),
  }),
);
function Qv(e) {
  return { valueKey: e.valueKey, value: e.value, valueType: e.valueType, debuff: e.isDebuff };
}
function eb(e) {
  return { localeName: e.localeName, values: ((t = e.values), Ve(t, Qv)) };
  var t;
}
function tb(e) {
  return { title: e.title, items: Ve(e.items, eb) };
}
function ab(e) {
  return {
    ...Kv(e),
    withDescription: e.withDescription,
    trophy: e.isTrophy,
    modernized: e.isModernized,
    upgradable: e.isUpgradable,
    effect: e.effect,
    level: e.level,
    destroyTooltipBodyPath: e.destroyTooltipBodyPath,
    activeSpecsMask: e.activeSpecsMask,
    bonuses: tb(e.bonuses),
  };
}
var [sb, nb] = ds("EquipmentsModel")(
  ({ observableModel: e }) => {
    const t = {
        standardEquipments: e.transform((e) => Ve(e, ab), "simpleEquipments"),
        improvedEquipments: e.transform((e) => Ve(e, ab), "deluxEquipments"),
        bountyEquipments: e.transform((e) => Ve(e, ab), "trophyEquipments"),
        experimentalEquipments: e.transform((e) => Ve(e, ab), "modernizedEquipments"),
        ...e.primitives(["hasChanges", "equipCoinCount"]),
        ...e.primitives({
          hasModernizedEquipmentToDisassemble: "hasExperimentalEquipmentToDisassemble",
        }),
        standardEquipmentsFilters: Ja.box(new Set()),
        dealData: e.transform((e) => Zv(e), "dealPanel"),
        prices: e.transform((e) => Ve(e, Fv), "dealPanel.price"),
      },
      a = Na.structural(() => {
        const e = t.dealData.get(),
          a = [];
        return (
          e.totalItemsInStorage > 0 &&
            a.push({ enough: !0, currency: "depot", value: e.totalItemsInStorage }),
          t.prices.get().forEach((e) => a.push(e)),
          { ...e, prices: a }
        );
      }),
      s = Na.model((e, a) => Qt(t[a].get(), (t) => t.intCD === e)),
      n = Na.model(() => {
        const e = t.standardEquipmentsFilters.get(),
          a = t.standardEquipments.get();
        return 0 === e.size
          ? a
          : (function (e, t) {
              return Sa(e, (e) => e.specializations.specializations.some((e) => t.has(e.name)));
            })(a, e);
      });
    return {
      ...t,
      computes: { equipmentsItemByIntCD: s, dealData: a, filteredStandardEquipments: n },
    };
  },
  ({ model: e, externalModel: t }) => ({
    unmount: t.createCallback(
      (e, t) => ({ intCD: e, currentSlotId: t, actionType: Vv, type: Hf }),
      "onSlotAction",
    ),
    actionSlot: t.createCallback((e) => ({ ...e, type: Hf }), "onSlotAction"),
    swapSlots: t.createCallback((e) => ({ ...e, actionType: zv }), "onSlotAction"),
    getMoreCurrency: t.createCallbackNoArgs("onGetMoreCurrency"),
    confirm: t.createCallbackNoArgs("dealPanel.onDealConfirmed"),
    cancel: t.createCallbackNoArgs("dealPanel.onDealCancelled"),
    toggleAutoRenewal: t.createCallback(
      () => ({ value: !e.dealData.get().autoRenewalEnabled }),
      "dealPanel.onAutoRenewalChanged",
    ),
    updateFilters: J((t) => {
      const a = e.standardEquipmentsFilters.get();
      (a.has(t) ? a.delete(t) : a.add(t), e.standardEquipmentsFilters.set(a));
    }),
    clearFilters: J(() => {
      e.standardEquipmentsFilters.set(new Set());
    }),
  }),
);
function rb(e) {
  return {
    ...Kv(e),
    description: e.description,
    buyMoreVisible: e.isBuyMoreVisible,
    buyMoreDisabled: e.isBuyMoreDisabled,
  };
}
var [ib, ob] = ds("InstructionsModel")(
    (e) => {
      const t = {
          crewInstructions: e.observableModel.arrayClone("crewInstructions"),
          equipmentInstructions: e.observableModel.arrayClone("equipmentInstructions"),
        },
        a = {
          ...e.observableModel.primitives(["autoloadEnabled", "hasChanges"]),
          crewInstructions: Ja.box({}),
          crewInstructionsArray: Ja.box([]),
          equipmentInstructions: Ja.box({}),
          equipmentInstructionsArray: Ja.box([]),
          dealData: e.observableModel.transform((e) => Zv(e), "dealPanel"),
          prices: e.observableModel.transform((e) => Ve(e, Fv), "dealPanel.price"),
        };
      (e.cleanup(
        Za(() => {
          const e = Fe(t.crewInstructions.get(), (e, t) => ((e[t.intCD] = rb(t)), e), {});
          Ht(() => a.crewInstructions.set(e));
        }),
      ),
        e.cleanup(
          Za(() => {
            const e = Fe(t.equipmentInstructions.get(), (e, t) => ((e[t.intCD] = rb(t)), e), {});
            Ht(() => a.equipmentInstructions.set(e));
          }),
        ),
        e.cleanup(
          Za(() => {
            const e = _(t.equipmentInstructions.get(), (e) => rb(e));
            Ht(() => a.equipmentInstructionsArray.set(e));
          }),
        ),
        e.cleanup(
          Za(() => {
            const e = _(t.crewInstructions.get(), (e) => rb(e));
            Ht(() => a.crewInstructionsArray.set(e));
          }),
        ));
      const s = Na.structural(() => {
          const e = a.dealData.get(),
            t = [];
          return (
            e.totalItemsInStorage > 0 &&
              t.push({ enough: !0, currency: "depot", value: e.totalItemsInStorage }),
            a.prices.get().forEach((e) => t.push(e)),
            { ...e, prices: t }
          );
        }),
        n = Na.model(
          (e) =>
            Object.values(a.equipmentInstructions.get()).find((t) => t.intCD === e) ??
            Object.values(a.crewInstructions.get()).find((t) => t.intCD === e),
        ),
        r = Na.model((e, t) => {
          const s = Object.values(a[t].get()).find((t) => t.intCD === e);
          return (u(void 0 !== s, `There is no instructionItems with ${e} intCD`), s);
        });
      return { ...a, computes: { instructionById: n, instructionByIntCD: r, dealData: s } };
    },
    ({ model: e, externalModel: t }) => ({
      unmount: t.createCallback(
        (e, t) => ({ intCD: e, currentSlotId: t, actionType: Vv, type: Ff }),
        "onSlotAction",
      ),
      confirm: t.createCallbackNoArgs("dealPanel.onDealConfirmed"),
      cancel: t.createCallbackNoArgs("dealPanel.onDealCancelled"),
      toggleAutoRenewal: t.createCallback(
        () => ({ value: !e.dealData.get().autoRenewalEnabled }),
        "dealPanel.onAutoRenewalChanged",
      ),
      actionSlot: t.createCallback((e) => ({ ...e, type: Ff }), "onSlotAction"),
    }),
  ),
  lb = "notMounted",
  cb = "mounted",
  db = "mountedMoreThanOne";
function ub(e) {
  return e.isMounted ? (e.isMountedMoreThanOne ? db : cb) : lb;
}
function mb(e, t) {
  let a = [];
  const s = Ns(e, 0);
  return (
    s &&
      (a = Sa(s.values, (e) => !!e.mechanic && e.mechanic !== fv.UNKNOWN).map(
        ({ mechanic: e, state: a }) => {
          const s = Qt(t, (t) => t.mechanic === e),
            n = s ? s.columnConfigs : void 0,
            r = n ? Qt(n, (e) => e.state === a) : void 0;
          return {
            mechanic: e,
            state: a,
            substate: r?.subtype || void 0,
            withTextLabel: r?.withTextLabel || !1,
            withRichTooltip: r?.withRichTooltip ?? !0,
          };
        },
      )),
    {
      columnDefs: a,
      rows: Ve(e, ({ paramName: e, values: t, metricValue: a }) => ({
        paramName: e,
        metricValue: a,
        values: Ve(t, ({ state: e, value: t, mechanic: a }) => ({
          state: e,
          value: t,
          mechanic: a,
        })),
      })).filter((e) => e.values.every(({ value: e }) => e)),
    }
  );
}
function pb(e) {
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
    mountedState: ub(e),
    properties: mb(e.propertiesList, e.mechanicsSubtypes),
    itemPrice: Fv(e.itemPrice),
    price: qv(e.price),
    totalPrice: qv(e.totalPrice),
    mainMechanic: bv(e.mechanics),
  };
}
var _b = ["shellCalibration"],
  hb = ["shellCalibration", "lowChargeShot"],
  [gb, fb] = ds("ShellsProvider")(
    ({ observableModel: e }) => {
      const t = {
          ...e.primitives({
            ammoMaxSize: "ammoMaxSize",
            installedCount: "installedCount",
            clip: "clip",
            hasChanges: "modified",
            autoloadEnabled: "autoloadEnabled",
          }),
          shells: e.transform((e) => Ve(e, pb), "shells"),
          dealData: e.transform((e) => Zv(e), "dealPanel"),
          prices: e.transform((e) => Ve(e, Fv), "dealPanel.price"),
        },
        a = Na.structural(() => {
          const e = t.dealData.get(),
            a = [];
          return (
            e.totalItemsInStorage > 0 &&
              a.push({ enough: !0, currency: "depot", value: e.totalItemsInStorage }),
            t.prices.get().forEach((e) => a.push(e)),
            { ...e, prices: a }
          );
        }),
        s = Na.model((e) => Ns(t.shells.get(), e)),
        n = Na.model((e) => Qt(t.shells.get(), (t) => t.intCD === e)),
        r = Na.primitive((e) => void 0 !== Qt(t.shells.get(), (t) => t.intCD === e)),
        i = Na.shallow(() => Ve(t.shells.get(), (e) => e.intCD)),
        o = Na.primitive(() =>
          w(
            t.shells.get(),
            ({ properties: e }) =>
              e.columnDefs.length > 0 && e.columnDefs.every((e) => !_b.includes(e.mechanic)),
          ),
        ),
        l = Na.primitive(() =>
          Math.max(...Ve(t.shells.get(), ({ properties: e }) => e.rows.length)),
        );
      return {
        ...t,
        computes: {
          shell: s,
          shellByIntCD: n,
          shellExist: r,
          shellIDs: i,
          dealData: a,
          properties: { hasColumns: o, maxCount: l },
        },
      };
    },
    ({ model: e, externalModel: t }) => ({
      swapSlots: t.createCallback((e) => ({ ...e, actionType: Hv }), "onSlotAction"),
      updateShellCount: t.createCallback((e, t) => ({ intCD: e, newCount: t }), "onShellUpdate"),
      confirm: t.createCallbackNoArgs("dealPanel.onDealConfirmed"),
      cancel: t.createCallbackNoArgs("dealPanel.onDealCancelled"),
      toggleAutoRenewal: t.createCallback(
        () => ({ value: !e.dealData.get().autoRenewalEnabled }),
        "dealPanel.onAutoRenewalChanged",
      ),
    }),
  ),
  vb = (0, jn.createContext)(null);
var bb = "Animated_90a4d541",
  xb = function ({ children: e, index: t, id: a }) {
    const s = (0, jn.useRef)(a),
      n = (function () {
        const e = (0, jn.useContext)(vb);
        return (u(null !== e, "useContext must be used with in SectionContext"), e);
      })(),
      r = (0, jn.useRef)(n.idToSlot),
      [i, o] = Rs(() => ({ from: { x: 0 }, config: { tension: 300, friction: 20 } }));
    return (
      (0, jn.useLayoutEffect)(() => {
        const e = r.current,
          i = void 0 === e[a];
        if (s.current === a) return;
        const l = e[a];
        if (-1 == a || i) return;
        if ("number" != typeof l) return;
        const c = l < t ? -1 : 1;
        o.start({ from: { x: c * V(50) }, to: { x: 0 } });
        const d = tt(n.onSwiped);
        return () => {
          (d(), o.stop(), o.start({ x: 0, immediate: !0 }));
        };
      }, [o, a]),
      (0, jn.useEffect)(() => {
        ((s.current = a), (r.current = n.idToSlot));
      }, [n, a]),
      (0, rr.jsx)(Os.div, { className: bb, style: i, children: e })
    );
  },
  yb = "equipmentTrophy",
  Cb = "equipmentTrophyBasic",
  jb = "equipmentTrophyUpgraded",
  wb = "battleBoosterReplace",
  Nb = "battleBooster",
  Ib = "equipmentPlus",
  Sb = "builtInEquipment",
  kb = "equipmentModernized";
function Pb(e) {
  switch (e) {
    case h.extraSmall:
    case h.small:
    case h.medium:
      return h.small;
    case h.large:
      return h.large;
    default:
      return h.extraLarge;
  }
}
var Eb = (e) => {
  switch (e) {
    case h.extraSmall:
    case h.small:
    case h.medium:
      return t.s48x48;
    case h.large:
      return t.s64x64;
    default:
      return t.s80x80;
  }
};
function Mb(e) {
  switch (e) {
    case Nb:
      return Pe.directiveBooster;
    case wb:
      return Pe.directiveSubstitute;
    case Sb:
      return Pe.builtInEquipment;
    case Ib:
      return Pe.improved;
    case kb:
      return Pe.experimental;
    case yb:
    case Cb:
    case jb:
      return Pe.trophy;
    default:
      return Pe.none;
  }
}
var Lb = (0, jn.createContext)(void 0),
  Ab = (0, jn.createContext)(() => {}),
  Tb = ({ children: e }) => {
    const [t, a] = (0, jn.useState)(void 0),
      s = (0, jn.useCallback)((e) => {
        a(e);
      }, []);
    return (0, rr.jsx)(Ab.Provider, {
      value: s,
      children: (0, rr.jsx)(Lb.Provider, { value: t, children: e }),
    });
  },
  Db = () => (0, jn.useContext)(Lb);
function Bb(e, t, a, s) {
  const n = e.left + t + a + s / 2,
    r = e.top + e.height / 2;
  let i = document.elementFromPoint(n, r);
  for (; i;) {
    if (i.hasAttribute("data-drop-item")) return Number(i.getAttribute("data-drop-item"));
    if (i.hasAttribute("data-drop-area")) return null;
    i = i.parentElement;
  }
}
var Ob = Hs(function ({ children: e, itemPosition: t, itemWidth: a, onDrop: s }) {
    const n = (0, jn.useRef)(null),
      r = (0, jn.useRef)(null),
      i = da(),
      o = i.state,
      l = he(),
      c = (0, jn.useContext)(Ab);
    function d(e, s) {
      const n = s.getBoundingClientRect(),
        r = n.left,
        i = n.right,
        l = t - r,
        c = i - t,
        d = e - o.startPoint.x;
      return d > c - a
        ? { left: l, x: c - a }
        : d < r - t
          ? { left: l, x: r - t }
          : { left: l, x: d };
    }
    return (
      (0, jn.useEffect)(() => {
        if (i.item)
          return (
            window.addEventListener("keydown", e),
            () => {
              window.removeEventListener("keydown", e);
            }
          );
        function e(e) {
          e.keyCode === ma.ESCAPE && i.reset();
        }
      }, [i.item, i.reset]),
      (0, jn.useEffect)(() => {
        const e = n.current;
        if (!e || null === o.virtualItem || !o.dragArea) return;
        const t = o.dragArea.getBoundingClientRect(),
          { x: u, left: m } = d(o.currentPosition.x * l + o.startPoint.x, o.dragArea);
        ((e.style.left = `${m}px`), (e.style.transform = `translateX(${Math.trunc(u)}px)`));
        const p = Bb(t, m, u, a) ?? null;
        return (
          r.current != p && null !== p && ((r.current = p), c(p)),
          new me()
            .add(
              qa.up(([e]) => {
                (i.emitter.trigger("onDrop", e, o.dragArea, i.item, o), i.reset());
              }),
            )
            .add(
              qa.move(([e, s]) => {
                if ("outside" === s) {
                  const s = n.current;
                  if (!s || null === o.virtualItem || !o.dragArea) return;
                  const { x: i, left: l } = d(e.x, o.dragArea),
                    u = Bb(t, l, i, a) ?? null;
                  (r.current !== u && null !== u && ((r.current = u), c(u)),
                    (s.style.transform = `translateX(${Math.trunc(i)}px)`));
                }
              }),
            )
            .add(
              i.emitter.on("onDrop", (e, n, r) => {
                if (!o.dragArea) return;
                c(void 0);
                const { left: i, x: l } = d(e.x, o.dragArea),
                  u = Bb(t, i, l, a) ?? null,
                  m = Number(r?.getAttribute("data-drop-item")) ?? null;
                null !== m && null !== u && m !== Number(u) && s?.(Number(u), m);
              }),
            ).dispose
        );
      }, [o.currentPosition.x, o.dragArea, o.virtualItem, i.emitter, t, a, s, d]),
      e && null !== o.virtualItem && o.dragArea
        ? (0, rr.jsx)("div", {
            ref: n,
            style: { position: "absolute", top: 0, cursor: "grabbing", pointerEvents: "none" },
            children: e(Number(o.virtualItem.getAttribute("data-drop-item"))),
          })
        : null
    );
  }),
  Vb = Hs(function ({ children: e, onDrop: t, renderDraggingItem: a, dataDropArea: s }) {
    const n = da(),
      r = (0, jn.useRef)(null),
      [i, o] = (0, jn.useState)(0),
      [l, c] = (0, jn.useState)(0);
    return (
      (0, jn.useEffect)(
        () =>
          n.emitter.on("onStart", (e, t, a) => {
            (o(a.getBoundingClientRect().left), c(a.getBoundingClientRect().width));
          }),
        [n],
      ),
      (0, rr.jsxs)(rr.Fragment, {
        children: [
          (0, rr.jsx)(Ya.DragArea, {
            ref: r,
            children: (0, rr.jsx)(Ya.DropArea, { "data-drop-area": s, children: e }),
          }),
          (0, rr.jsx)(Ya.VirtualItem, {
            container: r.current ?? void 0,
            children: (0, rr.jsx)(Ob, { itemPosition: i, itemWidth: l, onDrop: t, children: a }),
          }),
        ],
      })
    );
  }),
  Rb = function ({ children: e, onDrop: t, renderDraggingItem: a, dataDropArea: s }) {
    return (0, rr.jsx)(Ya, {
      children: (0, rr.jsx)(Vb, { onDrop: t, renderDraggingItem: a, dataDropArea: s, children: e }),
    });
  },
  Hb = "DragAndDrop_draggableItem_e7d74af8",
  $b = "DragAndDrop_draggableItem__dragging_b849a88",
  zb = "DragAndDrop_draggableItem__undraggable_7c876195",
  Fb = "DragAndDrop_draggableItem__locked_2b4f1390",
  Wb = Hs(function ({ itemId: e, undraggable: t, className: a, dataDropArea: s, children: n }) {
    const r = da();
    Se(r.reset, [r]);
    const i = r.item?.getAttribute("data-drop-item"),
      o = void 0 !== i,
      l = va(i) && "" !== i && Number(i) === e;
    return (0, rr.jsx)("div", {
      "data-drop-item": e,
      className: cs(Hb, o && Fb, t && zb, l && $b, a),
      "data-drop-area": s,
      onMouseDown: (e) => {
        e.button === N.left && (r.start(e), e.preventDefault());
      },
      children: n,
    });
  }),
  qb = "UnmountButton_442d081e",
  Zb = "UnmountButton_base__hover_e2b863f3",
  Gb = "UnmountButton_image_5b9a272b";
function Ub({ onClick: e, className: t }) {
  const [a, s] = (0, jn.useState)(!1),
    n = It();
  return (0, rr.jsx)("div", {
    onMouseEnter: function (e) {
      (n.play("mouse-enter", { target: "loadout-panel:slot:unmount-button", original: e }), s(!0));
    },
    onMouseLeave: () => s(!1),
    onClick: function (t) {
      (e(t), n.play("click", { target: "loadout-panel:slot:unmount-button", original: t }));
    },
    className: cs(qb, a && Zb, t),
    children: (0, rr.jsx)(_s, {
      width: "42rem",
      height: "42rem",
      path: "loadout.unmount_button_" + (a ? "hover" : "default"),
      className: Gb,
    }),
  });
}
var Kb = "Consumable_98851be5",
  Xb = "Consumable_slot_523f223e",
  Yb = "Consumable_slot__disabled_10fdd4ec",
  Jb = "Consumable_slot__grabbing_f0e6559a",
  Qb = "Consumable_hotKeyLabel_a0918925",
  ex = "Consumable_text_fd7e74cf",
  tx = "Consumable_unmountButton_43731923",
  ax = "Consumable_unmountButton__hidden_250735bc",
  sx = "Consumable_selectedOverlay_fd3226e6",
  nx = ks.resolve("strings"),
  rx = ks.resolve("aliases"),
  ix = `${zf}DropArea`,
  ox = Hs(function ({ slot: e, disabled: t, selected: a, withKey: s = !1, onClick: n }) {
    const r = It(),
      { model: i, controls: o } = Jv(),
      l = Nv().model,
      c = ct(),
      d = Db(),
      u = c.location.endsWith(Uf) ? i.computes.consumableById(e.intCD) : e,
      [m, p] = (0, jn.useState)(!1),
      _ = wt(
        { value: h.small },
        { large: { value: h.large }, extraLarge: { value: h.extraLarge } },
      ),
      g = nx.readOrEmpty(`readable_key_names.${e.keyName}`),
      f = s && g && "KEY_NONE" != e.keyName,
      v = $e({
        resId: rx.read((e) => e.hangar.shared.Loadout("resId")),
        args: (0, jn.useMemo)(() => ({ slotId: e.id, slotType: zf }), [e]),
      }),
      b = (0, jn.useMemo)(() => ({ disabled: t || void 0 === u?.imageName }), [u?.imageName, t]),
      x = ia(
        c.location.endsWith(Uf) ? "tankSetupConsumableSlot" : "tankSetupHangarConsumableSlot",
        (0, jn.useMemo)(
          () => ({
            intCD: e.intCD,
            slotType: zf,
            fieldType: 1,
            installedSlotId: e.id,
            itemInstalledSetupIdx: e.itemInstalledSetupIdx,
            itemInstalledSetupSlotIdx: e.id,
            isMounted: e.installed,
            isMountedMoreThanOne: e.mountedMoreThanOne,
            emitterUID: window.subViews.get(rx.read((e) => e.hangar.shared.Consumables("resId")))
              .uid,
          }),
          [e],
        ),
        b,
      ),
      y = -1 !== e.intCD ? x : {};
    (0, jn.useEffect)(() => {
      e.installed || r.play("mount", { target: "loadout-panel:slot:consumable" });
    }, [e.installed, r]);
    const C = da(),
      j = null !== C.state.virtualItem;
    return (
      (0, jn.useEffect)(() => {
        C.item?.getAttribute("data-drop-area") === ix && p(d === e.id);
      }, [C.item, d, e.id]),
      (0, rr.jsxs)("div", {
        ...v,
        ...y,
        className: Kb,
        children: [
          (0, rr.jsx)(dt, {
            className: cs(Xb, t && Yb, j && Jb),
            classNames: { selectedOverlay: sx },
            size: Pb(_.value || h.small),
            hovered: m,
            selected: a,
            disabled: t,
            "data-test-id": `equipmentSlot-${e.id}`,
            onClick: function (e) {
              !a && n && (n(), r.play("click", { target: "loadout-panel:slot", original: e }));
            },
            onMouseEnter: function () {
              (p(!0), j || r.play("mouse-enter", { target: "loadout-panel:slot:consumable" }));
            },
            onMouseLeave: function () {
              (void 0 !== d && C.item?.getAttribute("data-drop-area") === ix) || p(!1);
            },
            dataDropItem: e.id,
            children: (0, rr.jsx)(xb, {
              id: e.intCD,
              index: e.id,
              children: u?.imageName
                ? (0, rr.jsx)(Wb, {
                    undraggable: !l.computes.sectionDraggable(zf),
                    itemId: e.id,
                    dataDropArea: ix,
                    children: (0, rr.jsx)(vt, {
                      name: u.imageName,
                      size: Eb(_.value || h.small),
                      overlayType: Mb(e.overlayType),
                    }),
                  })
                : (0, rr.jsx)(dt.Empty, {}),
            }),
          }),
          f &&
            (0, rr.jsx)("div", {
              className: Qb,
              children: (0, rr.jsx)("div", {
                className: ex,
                children: (0, rr.jsx)(ra, { text: g }),
              }),
            }),
          !e.installed &&
            (0, rr.jsx)(Ub, {
              onClick: () => o.unmount(e.intCD, e.id),
              className: cs(tx, j && ax),
            }),
        ],
      })
    );
  }),
  lx = "SpecializationType_9d3d37d7",
  cx = "SpecializationType_icon_91ea8b3b",
  dx = "SpecializationType_icon__visible_ca41ac0a",
  ux = "SpecializationType_icon__active_f79ff1ce",
  mx = "stealth",
  px = "survivability",
  _x = "firepower",
  hx = "mobility",
  gx = {
    [`${hx}On`]: (e) =>
      (0, rr.jsxs)("svg", {
        width: 48,
        height: 48,
        viewBox: "0 0 48 48",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        ...e,
        children: [
          (0, rr.jsx)("path", {
            d: "M26.4457 24.6023C26.4457 23.5263 25.5797 22.6608 24.5058 22.6608C23.4319 22.6608 22.5658 23.5263 22.5658 24.6023C22.5658 25.6784 23.4319 26.5439 24.5058 26.5439C24.7367 26.5439 24.9446 26.4971 25.1409 26.4269C29.5289 30.4152 30.6605 31 30.6605 31C30.6605 31 30.3603 29.4678 26.3533 25.1754C26.4111 24.9883 26.4573 24.8012 26.4573 24.5906L26.4457 24.6023ZM24.5058 25.2105C24.1594 25.2105 23.8822 24.9298 23.8822 24.5906C23.8822 24.2515 24.1594 23.9708 24.5058 23.9708C24.8522 23.9708 25.1293 24.2515 25.1293 24.5906C25.1293 24.9298 24.8522 25.2105 24.5058 25.2105ZM24.5058 17C20.3603 17 17 20.3099 17 24.3801C17 26.6374 18.0277 28.6491 19.6443 29.9942L19.8868 29.655C18.582 28.2865 17.7968 26.4035 17.8776 24.5088C18.0393 20.6725 21.5843 18.3216 25.291 18.9883C30.1986 19.8655 29.6212 24.7778 28.8707 26.7427L30.7067 28.5322C31.5266 27.3509 32 25.924 32 24.3801C32 20.2982 28.6397 17 24.4942 17H24.5058Z",
            fill: "url(#paint0_linear_64965_282433)",
          }),
          (0, rr.jsx)("defs", {
            children: (0, rr.jsxs)("linearGradient", {
              id: "paint0_linear_64965_282433",
              x1: 24.5,
              y1: 18.4318,
              x2: 24.5,
              y2: 27.1818,
              gradientUnits: "userSpaceOnUse",
              children: [
                (0, rr.jsx)("stop", { stopColor: "#EFE3D4" }),
                (0, rr.jsx)("stop", { offset: 1, stopColor: "#DEC8AD" }),
              ],
            }),
          }),
        ],
      }),
    [`${hx}Off`]: (e) =>
      (0, rr.jsx)("svg", {
        width: 48,
        height: 48,
        viewBox: "0 0 48 48",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        ...e,
        children: (0, rr.jsx)("path", {
          opacity: 0.7,
          d: "M26.4457 24.6023C26.4457 23.5263 25.5797 22.6608 24.5058 22.6608C23.4319 22.6608 22.5658 23.5263 22.5658 24.6023C22.5658 25.6784 23.4319 26.5439 24.5058 26.5439C24.7367 26.5439 24.9446 26.4971 25.1409 26.4269C29.5289 30.4152 30.6605 31 30.6605 31C30.6605 31 30.3603 29.4678 26.3533 25.1754C26.4111 24.9883 26.4573 24.8012 26.4573 24.5906L26.4457 24.6023ZM24.5058 25.2105C24.1594 25.2105 23.8822 24.9298 23.8822 24.5906C23.8822 24.2515 24.1594 23.9708 24.5058 23.9708C24.8522 23.9708 25.1293 24.2515 25.1293 24.5906C25.1293 24.9298 24.8522 25.2105 24.5058 25.2105ZM24.5058 17C20.3603 17 17 20.3099 17 24.3801C17 26.6374 18.0277 28.6491 19.6443 29.9942L19.8868 29.655C18.582 28.2865 17.7968 26.4035 17.8776 24.5088C18.0393 20.6725 21.5843 18.3216 25.291 18.9883C30.1986 19.8655 29.6212 24.7778 28.8707 26.7427L30.7067 28.5322C31.5266 27.3509 32 25.924 32 24.3801C32 20.2982 28.6397 17 24.4942 17H24.5058Z",
          fill: "#EEEDE9",
          fillOpacity: 0.9,
        }),
      }),
    [`${_x}On`]: (e) =>
      (0, rr.jsxs)("svg", {
        width: 48,
        height: 48,
        viewBox: "0 0 48 48",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        ...e,
        children: [
          (0, rr.jsx)("path", {
            d: "M22.95 21.2233L18.6917 17L17 18.7967L21.235 22.9967L22.9617 21.2233H22.95ZM30.9883 18.7967L29.2967 17L25.0383 21.2233L26.765 22.9967L31 18.7967H30.9883ZM25.0383 26.7767L29.2967 31L30.9883 29.2033L26.7533 25.0033L25.0267 26.7767H25.0383ZM17 29.2033L18.6917 31L22.95 26.7767L21.2233 25.0033L17 29.2033Z",
            fill: "url(#paint0_linear_64965_282431)",
          }),
          (0, rr.jsx)("defs", {
            children: (0, rr.jsxs)("linearGradient", {
              id: "paint0_linear_64965_282431",
              x1: 23.8939,
              y1: 18.4583,
              x2: 23.8939,
              y2: 30.7083,
              gradientUnits: "userSpaceOnUse",
              children: [
                (0, rr.jsx)("stop", { stopColor: "#FCF6EB" }),
                (0, rr.jsx)("stop", { offset: 1, stopColor: "#E1D3C1" }),
              ],
            }),
          }),
        ],
      }),
    [`${_x}Off`]: (e) =>
      (0, rr.jsx)("svg", {
        width: 48,
        height: 48,
        viewBox: "0 0 48 48",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        ...e,
        children: (0, rr.jsx)("g", {
          opacity: 0.7,
          children: (0, rr.jsx)("path", {
            d: "M22.95 21.2233L18.6917 17L17 18.7967L21.235 22.9967L22.9617 21.2233H22.95ZM30.9883 18.7967L29.2967 17L25.0383 21.2233L26.765 22.9967L31 18.7967H30.9883ZM25.0383 26.7767L29.2967 31L30.9883 29.2033L26.7533 25.0033L25.0267 26.7767H25.0383ZM17 29.2033L18.6917 31L22.95 26.7767L21.2233 25.0033L17 29.2033Z",
            fill: "#EEEDE9",
            fillOpacity: 0.9,
          }),
        }),
      }),
    [`${mx}On`]: (e) =>
      (0, rr.jsxs)("svg", {
        width: 50,
        height: 48,
        viewBox: "0 0 50 48",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        ...e,
        children: [
          (0, rr.jsx)("path", {
            d: "M25 18C20.0337 18 16 23.1051 16 24.006C16 24.7988 20.0337 30 25 30C29.9663 30 34 24.8589 34 23.994C34 23.1291 29.9663 18 25 18ZM25 28.6186C21.382 28.6186 17.7191 24.5826 17.7191 23.994C17.7191 23.3333 21.382 19.3694 25 19.3694C28.618 19.3694 32.2809 23.3574 32.2809 23.994C32.2809 24.6306 28.618 28.6186 25 28.6186ZM24.9888 20.2342C23.0787 20.2342 21.5281 21.9159 21.5281 23.982C21.5281 26.048 23.0787 27.7297 24.9888 27.7297C26.8989 27.7297 28.4607 26.048 28.4607 23.982C28.4607 21.9159 26.9101 20.2342 24.9888 20.2342Z",
            fill: "url(#paint0_linear_64965_282436)",
          }),
          (0, rr.jsx)("defs", {
            children: (0, rr.jsxs)("linearGradient", {
              id: "paint0_linear_64965_282436",
              x1: 25,
              y1: 19.2273,
              x2: 25,
              y2: 26.7273,
              gradientUnits: "userSpaceOnUse",
              children: [
                (0, rr.jsx)("stop", { stopColor: "#EFE3D4" }),
                (0, rr.jsx)("stop", { offset: 1, stopColor: "#DEC8AD" }),
              ],
            }),
          }),
        ],
      }),
    [`${mx}Off`]: (e) =>
      (0, rr.jsx)("svg", {
        width: 48,
        height: 48,
        viewBox: "0 0 48 48",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        ...e,
        children: (0, rr.jsx)("path", {
          opacity: 0.7,
          d: "M24 18C19.0337 18 15 23.1051 15 24.006C15 24.7988 19.0337 30 24 30C28.9663 30 33 24.8589 33 23.994C33 23.1291 28.9663 18 24 18ZM24 28.6186C20.382 28.6186 16.7191 24.5826 16.7191 23.994C16.7191 23.3333 20.382 19.3694 24 19.3694C27.618 19.3694 31.2809 23.3574 31.2809 23.994C31.2809 24.6306 27.618 28.6186 24 28.6186ZM23.9888 20.2342C22.0787 20.2342 20.5281 21.9159 20.5281 23.982C20.5281 26.048 22.0787 27.7297 23.9888 27.7297C25.8989 27.7297 27.4607 26.048 27.4607 23.982C27.4607 21.9159 25.9101 20.2342 23.9888 20.2342Z",
          fill: "#EEEDE9",
          fillOpacity: 0.9,
        }),
      }),
    [`${px}On`]: (e) =>
      (0, rr.jsxs)("svg", {
        width: 48,
        height: 50,
        viewBox: "0 0 48 50",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        ...e,
        children: [
          (0, rr.jsx)("path", {
            opacity: 0.7,
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M23.7379 24.2125V17.1528H25.2364V24.2125L31.8493 28.0304L31.1001 29.3281L24.4871 25.5101L17.8742 29.3281L17.125 28.0304L23.7379 24.2125Z",
            fill: "#B3AFAB",
          }),
          (0, rr.jsx)("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M19.2494 20.755L24.4922 17.7302L29.7354 20.7552L24.4925 23.7799L19.2494 20.755ZM18.4995 22.0526V28.1021L23.7427 31.1271V25.0776L18.4995 22.0526ZM25.2423 31.1267L30.4848 28.1021V22.0531L25.2423 25.0776V31.1267ZM24.4922 16L31.9844 20.3224V28.9673L24.4922 33.2897L17 28.9673V20.3224L24.4922 16Z",
            fill: "url(#paint0_linear_64965_282432)",
          }),
          (0, rr.jsx)("defs", {
            children: (0, rr.jsxs)("linearGradient", {
              id: "paint0_linear_64965_282432",
              x1: 24.3787,
              y1: 17.801,
              x2: 24.3787,
              y2: 32.9295,
              gradientUnits: "userSpaceOnUse",
              children: [
                (0, rr.jsx)("stop", { stopColor: "#FCF6EB" }),
                (0, rr.jsx)("stop", { offset: 1, stopColor: "#E1D3C1" }),
              ],
            }),
          }),
        ],
      }),
    [`${px}Off`]: (e) =>
      (0, rr.jsx)("svg", {
        width: 48,
        height: 48,
        viewBox: "0 0 48 48",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        ...e,
        children: (0, rr.jsxs)("g", {
          opacity: 0.7,
          children: [
            (0, rr.jsx)("path", {
              opacity: 0.7,
              fillRule: "evenodd",
              clipRule: "evenodd",
              d: "M23.7379 23.2125V16.1528H25.2364V23.2125L31.8493 27.0304L31.1001 28.3281L24.4871 24.5101L17.8742 28.3281L17.125 27.0304L23.7379 23.2125Z",
              fill: "#B3AFAB",
            }),
            (0, rr.jsx)("path", {
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
function fx({ specialization: e, active: t, classNames: a }) {
  const s = gx[`${e}On`],
    n = gx[`${e}Off`];
  if (s && n)
    return (0, rr.jsxs)("div", {
      className: cs(lx, a?.base),
      children: [
        (0, rr.jsx)(s, { className: cs(cx, ux, t && dx, a?.activeIcon) }),
        (0, rr.jsx)(n, { className: cs(cx, !t && dx, a?.inactiveIcon) }),
      ],
    });
  console.error(`Unknown specialization type ${e}`);
}
var vx = "Specialization_border_1d1ddf4e",
  bx = "Specialization_borderImage_2bbc40a2",
  xx = "Specialization_576f60ad",
  yx = "Specialization_base__button_e1e80f41",
  Cx = "Specialization_border__visible_2df74c11",
  jx = "Specialization_borderImage__visible_258796cf",
  wx = "Specialization_icon_453cdca5",
  Nx = "Specialization_base__disabled_12d00a3f",
  Ix = "Specialization_base__active_12d00a3f",
  Sx = Ss("Specialization"),
  kx = Hs(function ({ specialization: e, className: t, id: a, disabled: s = !1 }) {
    const n = It(),
      { controls: r } = Nv(),
      i = ct().location.includes("/loadout"),
      o = e.dynamic && i,
      l = (0, jn.useRef)(a);
    (0, jn.useEffect)(() => {
      if (l.current !== a)
        return (
          (l.current = a),
          e.active
            ? tt(() => n.play("on", { target: "loadout-panel:slot:equipment:specialization" }))
            : void 0
        );
    }, [n, e.active, a]);
    const c = Ze(
      "hangarSlotSpec",
      (0, jn.useMemo)(() => [e.type, e.dynamic, e.clickable], [e]),
    );
    return (0, rr.jsxs)(Sx, {
      className: cs(xx, o && yx, s && Nx, e.active && Ix, t),
      onClick: function (e) {
        (c.onClick(),
          o &&
            (n.play("click", { target: "loadout:panel:equipment:specialization", original: e }),
            r.openSlotSpecDialog()));
      },
      onMouseEnter: function (e) {
        (c.onMouseEnter(e),
          o &&
            n.play("mouse-enter", {
              target: "loadout:panel:equipment:specialization",
              original: e,
            }));
      },
      onMouseLeave: c.onMouseLeave,
      children: [
        (0, rr.jsx)("div", { className: cs(vx, o && Cx) }),
        (0, rr.jsx)("div", { className: cs(bx, o && jx) }),
        (0, rr.jsx)(fx, { specialization: e.type, active: e.active, classNames: { base: wx } }),
      ],
    });
  }),
  Px = "Equipment_cd6073b3",
  Ex = "Equipment_slot_cd6073b3",
  Mx = "Equipment_slot__disabled_13198c7d",
  Lx = "Equipment_slot__grabbing_49feaf7f",
  Ax = "Equipment_specialization_95709e3f",
  Tx = "Equipment_unmountButton_7376ff29",
  Dx = "Equipment_unmountButton__hidden_f9f46440",
  Bx = "Equipment_selectedOverlay_866b638b",
  Ox = ks.resolve("aliases"),
  Vx = `${Hf}DropArea`;
function Rx(e) {
  switch (e) {
    case Xf.Mobility:
      return "loadout-panel:slot:equipment:specialization:mobility";
    case Xf.Firepower:
      return "loadout-panel:slot:equipment:specialization:firepower";
    case Xf.Stealth:
      return "loadout-panel:slot:equipment:specialization:stealth";
    case Xf.Survivability:
      return "loadout-panel:slot:equipment:specialization:survivability";
    default:
      return (console.error("Unknown specialization type:", e), "");
  }
}
var Hx = Hs(function ({ slot: e, disabled: t, selected: a, onClick: s }) {
    const { breakpoint: n } = Cs(),
      { controls: r } = nb(),
      { model: i } = Nv(),
      [o, l] = (0, jn.useState)(!1),
      c = It(),
      d = ct(),
      u = Db(),
      m = wt(
        { value: h.small },
        { large: { value: h.large }, extraLarge: { value: h.extraLarge } },
      ),
      p = $e({
        resId: Ox.read((e) => e.hangar.shared.Loadout("resId")),
        args: (0, jn.useMemo)(() => ({ slotId: e.id, slotType: Hf }), [e]),
      }),
      _ = (0, jn.useMemo)(() => ({ disabled: t || -1 === e?.intCD }), [e?.intCD, t]),
      g = ia(
        d.location.endsWith(qf)
          ? "tankSetupOptionalDeviceSlotWW"
          : "tankSetupHangarOptionalDeviceSlot",
        (0, jn.useMemo)(
          () => ({
            intCD: e.intCD,
            slotType: Hf,
            installedSlotId: e.id,
            isMounted: e.installed,
            fieldType: 1,
            itemInstalledSetupIdx: e.itemInstalledSetupIdx,
            itemInstalledSetupSlotIdx: e.id,
            isMountedMoreThanOne: e.mountedMoreThanOne,
            emitterUID: window.subViews.get(Ox.read((e) => e.hangar.shared.Equipments("resId")))
              .uid,
          }),
          [e],
        ),
        _,
      ),
      f = -1 !== e.intCD ? g : {},
      v = da(),
      b = null !== v.state.virtualItem;
    return (
      (0, jn.useEffect)(() => {
        e.installed || c.play("mount", { target: "loadout-panel:slot:equipment" });
      }, [e.installed, c]),
      (0, jn.useEffect)(() => {
        (b && p?.onMouseLeave(), !b && void 0 !== u && o && p?.onMouseEnter(null));
      }, [u, b, o, p]),
      (0, jn.useEffect)(() => {
        v.item?.getAttribute("data-drop-area") === Vx && l(u === e.id);
      }, [v.item, u, e.id]),
      (0, rr.jsxs)("div", {
        className: Px,
        children: [
          (0, rr.jsx)("div", {
            ...f,
            onMouseEnter: function (e) {
              (t || l(!0),
                b ||
                  (t ||
                    c.play("mouse-enter", { target: "loadout-panel:slot:equipment", original: e }),
                  p?.onMouseEnter(e)));
            },
            onMouseLeave: function () {
              ((void 0 !== u && v.item?.getAttribute("data-drop-area") === Vx) || l(!1),
                p?.onMouseLeave());
            },
            children: (0, rr.jsx)(dt, {
              className: cs(Ex, t && Mx, b && Lx),
              classNames: { selectedOverlay: Bx },
              size: Pb(m.value || h.small),
              hovered: o,
              disabled: t,
              onClick: function (t) {
                !a &&
                  s &&
                  (s(),
                  c.play("click", { target: "loadout-panel:slot", original: t }),
                  e.specialization?.type &&
                    d.location.includes("/loadout") &&
                    c.play("click", { target: Rx(e.specialization.type), original: t }),
                  p?.onClick());
              },
              selected: a,
              "data-test-id": `deviceSlot-${e.id}`,
              dataDropItem: e.id,
              children: (0, rr.jsx)(xb, {
                index: e.id,
                id: e.intCD,
                children: e.imageName
                  ? (0, rr.jsx)(Wb, {
                      undraggable: !i.computes.sectionDraggable(Hf),
                      itemId: e.id,
                      dataDropArea: Vx,
                      children: (0, rr.jsx)(vt, {
                        name: e.imageName,
                        size: Eb(n.name),
                        level: e.level,
                        overlayType: Mb(e.overlayType),
                      }),
                    })
                  : (0, rr.jsx)(dt.Empty, {}),
              }),
            }),
          }),
          e.specialization &&
            (0, rr.jsx)(kx, {
              specialization: e.specialization,
              className: Ax,
              id: e.intCD,
              disabled: t,
            }),
          !e.installed &&
            (0, rr.jsx)(Ub, {
              onClick: () => r.unmount(e.intCD, e.id),
              className: cs(Tx, b && Dx),
            }),
        ],
      })
    );
  }),
  $x = "Instuction_ab7d27c7",
  zx = "Instuction_slot_ab7d27c7",
  Fx = "Instuction_slot__disabled_179c0b6b",
  Wx = "Instuction_warningImage_138cc840",
  qx = "Instuction_warningImage__disabled_7d252f0",
  Zx = "Instuction_selectedOverlay_f19fc301",
  Gx = "Instuction_item_e5ebc3b8",
  Ux = "Instuction_item__withAttention_80199f58",
  Kx = ks.resolve("aliases");
function Xx(e) {
  switch (e) {
    case Yf:
      return "loadout-panel:slot:instruction:gunner_smoothTurret-crew_instruction";
    case Jf:
      return "loadout-panel:slot:instruction:driver_virtuoso-crew_instruction";
    case Qf:
      return "loadout-panel:slot:instruction:driver_smoothDriving-crew_instruction";
    case ev:
      return "loadout-panel:slot:instruction:fireFighting-crew_instruction";
    case tv:
      return "loadout-panel:slot:instruction:naturalCover-crew_instruction";
    case av:
      return "loadout-panel:slot:instruction:gunner_rancorous-crew_instruction";
    case sv:
      return "loadout-panel:slot:instruction:loader_pedant-crew_instruction";
    case nv:
      return "loadout-panel:slot:instruction:commander_practical-crew_instruction";
    case rv:
      return "loadout-panel:slot:instruction:commander_enemyShotPredictor-crew_instruction";
    default:
      return (console.error("Unknown crew instruction type:", e), "");
  }
}
var Yx = Hs(({ slot: e, disabled: t, selected: a, onClick: s }) => {
    const { model: n, controls: r } = ob(),
      i = a ? n.computes.instructionById(e.intCD) : e,
      [o, l] = (0, jn.useState)(!1),
      c = It(),
      d = ct(),
      u = wt(
        { value: h.small },
        { large: { value: h.large }, extraLarge: { value: h.extraLarge } },
      );
    const m = $e({
        resId: Kx.read((e) => e.hangar.shared.Loadout("resId")),
        args: (0, jn.useMemo)(() => ({ slotId: e.id, slotType: Ff }), [e]),
      }),
      p = (0, jn.useMemo)(() => ({ disabled: t || void 0 === i?.imageName }), [i?.imageName, t]),
      _ = ia(
        d.location.endsWith(Zf) ? "tankSetupBattleBoosterSlot" : "tankSetupHangarBattleBoosterSlot",
        (0, jn.useMemo)(
          () => ({
            intCD: e.intCD,
            slotType: Ff,
            fieldType: 1,
            installedSlotId: e.id,
            itemInstalledSetupIdx: e.itemInstalledSetupIdx,
            itemInstalledSetupSlotIdx: e.id,
            isMounted: e.installed,
            isMountedMoreThanOne: e.mountedMoreThanOne,
            emitterUID: window.subViews.get(Kx.read((e) => e.hangar.shared.Instructions("resId")))
              .uid,
          }),
          [e],
        ),
        p,
      ),
      g = -1 !== e.intCD ? _ : {};
    return (
      (0, jn.useEffect)(() => {
        e.installed ||
          (c.play("mount", { target: "loadout-panel:slot:instruction" }),
          i?.imageName &&
            "battleBoosterReplace" === e.overlayType &&
            c.play("on", { target: Xx(i.imageName) }),
          e?.withAttention && c.play("warn", { target: "loadout-panel:slot:instruction" }));
      }, [i?.imageName, e.installed, e.overlayType, e?.withAttention, c]),
      (0, rr.jsxs)("div", {
        ...m,
        ...g,
        className: $x,
        children: [
          (0, rr.jsx)(dt, {
            className: cs(zx, t && Fx),
            classNames: { selectedOverlay: Zx },
            onMouseEnter: function (e) {
              (l(!0),
                c.play("mouse-enter", { target: "loadout-panel:slot:instruction", original: e }));
            },
            onMouseLeave: () => l(!1),
            onClick: function (e) {
              !a && s && (s(), c.play("click", { target: "loadout-panel:slot", original: e }));
            },
            hovered: o,
            selected: a,
            disabled: t,
            size: Pb(u.value || h.small),
            "data-test-id": `instructionSlot-${e.id}`,
            children:
              i?.imageName &&
              (0, rr.jsx)(vt, {
                className: cs(Gx, e.withAttention && Ux),
                name: i.imageName,
                size: Eb(u.value || h.small),
                overlayType: Mb(e?.overlayType),
              }),
          }),
          i?.imageName &&
            e.withAttention &&
            (0, rr.jsx)(_s, {
              width: "48rem",
              height: "48rem",
              path: "loadout.alert_48",
              className: cs(Wx, t && qx),
            }),
          !e.installed && (0, rr.jsx)(Ub, { onClick: () => r.unmount(e.intCD, e.id) }),
        ],
      })
    );
  }),
  Jx = "Shell_hoverOverlay_714f24ee",
  Qx = "Shell_4f8ed17c",
  ey = "Shell_icon_229c2d6f",
  ty = "Shell_base__locked_7aaeeab0",
  ay = "Shell_base__selected_7aaeeab0",
  sy = "Shell_icon__dragging_7aaeeab0",
  ny = "Shell_container_cd11209e",
  ry = "Shell_container__key_d0643ec3",
  iy = "Shell_container__count_25e66fc6",
  oy = "Shell_container__disabled_d9eea9c4",
  ly = "Shell_text_d3fedf21",
  cy = "Shell_text__empty_7aaeeab0",
  dy = "Shell_text__disabled_7aaeeab0",
  uy = "Shell_shellMechanic_9bc785c8",
  my = "Shell_shellMechanicPosition_bbe64f90",
  py = "x20x20",
  _y = "x24x24",
  hy = "x40x40";
function gy({ mechanic: e, className: t }) {
  const a = ps(wt({ size: py }, { extraLarge: { size: _y } }).size, hy);
  return (0, rr.jsx)("div", {
    className: cs(uy, t),
    style: {
      backgroundImage: `url(R.images.gui.maps.icons.loadout.shell_mechanics.${e.name}.${a}.loadout_panel_icon)`,
    },
  });
}
var fy = ks.resolve("aliases"),
  vy = "small",
  by = "x64x64",
  xy = "medium",
  yy = Hs(function ({
    disabled: e = !1,
    selected: t = !1,
    withKey: a = !1,
    empty: s = !0,
    className: n,
    slot: r,
    shellsCounts: i,
  }) {
    const { model: o } = fb(),
      l = ct(),
      c = void 0 !== da().item?.getAttribute("data-drop-item"),
      d = $e({
        resId: fy.read((e) => e.hangar.shared.Loadout("resId")),
        args: (0, jn.useMemo)(() => ({ slotId: r.id, slotType: $f }), [r.id]),
      }),
      u = wt({ value: vy }, { large: { value: by }, extraLarge: { value: xy } }).value,
      m = (0, jn.useMemo)(() => ({ disabled: e }), [e]),
      p = ia(
        l.location.endsWith(Gf) ? "tankSetupShellItem" : "tankSetupHangarShellSlot",
        (0, jn.useMemo)(
          () => ({
            intCD: r.intCD,
            slotType: $f,
            fieldType: 1,
            installedSlotId: r.id,
            itemInstalledSetupIdx: r.itemInstalledSetupIdx,
            itemInstalledSetupSlotIdx: r.id,
            isMounted: r.installed,
            isMountedMoreThanOne: r.mountedMoreThanOne,
            emitterUID: Ke(fy.read((e) => e.hangar.shared.Shells("resId"))).uid,
            shellsCounts: i,
          }),
          [r, i],
        ),
        m,
      ),
      _ = t ? o.computes.shell(r.id) : r;
    if (!_) return;
    const h = ks.resolve("strings").readOrEmpty(`readable_key_names.${r.keyName}`),
      g = a && h && "KEY_NONE" !== r.keyName;
    return (0, rr.jsxs)("div", {
      ...d,
      ...p,
      className: cs(Qx, c && ty, t && ay, n),
      "data-test-id": `shellSlot-${r.id}`,
      children: [
        g &&
          (0, rr.jsx)("div", {
            className: cs(ny, ry),
            children: (0, rr.jsx)("div", { className: ly, children: (0, rr.jsx)(ra, { text: h }) }),
          }),
        (0, rr.jsxs)(xb, {
          id: r.intCD,
          index: r.id,
          children: [
            (0, rr.jsx)(Wb, {
              undraggable: !t,
              itemId: r.id,
              dataDropArea: "shellsDropArea",
              children: (0, rr.jsxs)(_s, {
                path: `shell.${u}.${r.imageName}`,
                className: ey,
                children: [
                  (0, rr.jsx)("div", { className: Jx }),
                  _.mainMechanic &&
                    !hb.includes(_.mainMechanic.name) &&
                    (0, rr.jsx)(gy, { mechanic: _.mainMechanic, className: my }),
                ],
              }),
            }),
            void 0 !== _.count && (0, rr.jsx)(Cy, { count: _.count, empty: s, disabled: e }),
          ],
        }),
      ],
    });
  }),
  Cy = function ({ count: e, empty: t, disabled: a }) {
    return (0, rr.jsx)("div", {
      className: cs(ny, iy, a && oy),
      children: (0, rr.jsx)("div", { className: cs(ly, a && dy, t && cy), children: e }),
    });
  },
  jy = {
    "media-wrapper": "Shells_media-wrapper_2b3abaa5",
    root: "Shells_root_2b3abaa5",
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
function wy({ hovered: e, selected: t }) {
  return (0, rr.jsxs)(rr.Fragment, {
    children: [
      t && (0, rr.jsx)("div", { className: jy.selectedOverlay }),
      (0, rr.jsx)(_s, {
        fit: "cover",
        path: "loadout.shells_warning_glow",
        className: jy.warningGlow,
      }),
      (0, rr.jsx)("div", { className: cs(jy.warningOverlay, e && !t && jy.warningOverlay__hover) }),
    ],
  });
}
function Ny({
  shells: e,
  section: t,
  groupId: a,
  withKey: s = !1,
  disabled: n = !1,
  selected: r = !1,
  onClick: i,
}) {
  const [o, l] = (0, jn.useState)(!1),
    c = It(),
    d = wt({ value: h.small }, { large: { value: h.large }, extraLarge: { value: h.extraLarge } }),
    u = (0, jn.useMemo)(() => e.map((e) => ({ intCD: e.intCD, count: e.count })), [e]),
    m = !e.some((e) => e.count && e.count > 0);
  return (0, rr.jsxs)(dt, {
    classNames: {
      slot: cs(jy.slot, t.warning && !n && jy.slot__customBackground),
      content: jy.content,
      selectedOverlay: jy.selectedSlotOverlay,
    },
    size: Pb(d.value || h.small),
    hovered: o && !n && !t.warning,
    selected: r && !t.warning,
    disabled: n,
    onClick: function (e) {
      r ||
        n ||
        !i ||
        (i(t.type, { slotIndex: 0, groupId: a, sectionName: t.name }),
        c.play("click", { target: "loadout-panel:slot", original: e }));
    },
    onMouseEnter: function () {
      (l(!0), n || r || c.play("mouse-enter", { target: "loadout-panel:slot:shells" }));
    },
    onMouseLeave: () => l(!1),
    children: [
      t.warning && (0, rr.jsx)(wy, { hovered: o && !n, selected: r }),
      e.map((e) =>
        (0, rr.jsx)(
          yy,
          {
            className: jy.shell,
            selected: r,
            disabled: n,
            withKey: s,
            slot: e,
            empty: m,
            shellsCounts: u,
          },
          e.id,
        ),
      ),
      t.warning && (0, rr.jsx)("div", { className: jy.warningOverlay }),
    ],
  });
}
var Iy = Hs(function ({
    groupIndex: e,
    sectionIndex: t,
    withKey: a,
    disabled: s,
    selected: n,
    onClick: r,
  }) {
    const { model: i } = Nv(),
      { controls: o } = fb(),
      l = i.computes.sectionByIndex(e, t),
      c = i.computes.groupByIndex(e),
      d = wt({ value: vy }, { large: { value: by }, extraLarge: { value: xy } }).value;
    if (!l) return null;
    const u = Sa(l.slots ?? [], (e) => e.intCD > 0);
    return (0, rr.jsx)("div", {
      className: jy.base,
      children: (0, rr.jsx)(Rb, {
        dataDropArea: `${$f}DropArea`,
        onDrop: (e, t) => o.swapSlots({ leftID: e, rightID: t }),
        renderDraggingItem: (e) =>
          (0, rr.jsxs)(_s, {
            path: `shell.${d}.${u[e].imageName}`,
            className: cs(ey, sy),
            children: [
              (0, rr.jsx)("div", { className: Jx }),
              u[e]?.mainMechanic &&
                !hb.includes(u[e].mainMechanic.name) &&
                (0, rr.jsx)(gy, { mechanic: u[e].mainMechanic, className: my }),
            ],
          }),
        children: (0, rr.jsx)(Ny, {
          shells: u,
          section: l,
          groupId: c.id,
          withKey: a,
          disabled: s,
          selected: n,
          onClick: r,
        }),
      }),
    });
  }),
  Sy = "Divider_44f20b3a",
  ky = "Divider_dividerImage_9dcc5cfc";
function Py({ className: e }) {
  return (0, rr.jsx)("div", {
    className: cs(Sy, e),
    children: (0, rr.jsx)(_s, {
      path: "loadout.panel_border",
      repeat: "repeat",
      fit: "auto",
      width: "100%",
      height: "100%",
      className: ky,
    }),
  });
}
var Ey = Hs(function ({
    index: e,
    sectionType: t,
    groupIndex: a,
    sectionIndex: s,
    slotToComponent: n,
    onClick: r,
  }) {
    const { model: i } = Nv(),
      o = i.disabled.get(),
      l = i.computes.isSlotSelected(e, t),
      c = i.computes.slotByIndex(a, s, e);
    if (void 0 === c) return null;
    const d = (function ({ slotToComponent: e = zy, sectionType: t = "default" }) {
      return e[t] ?? e.default;
    })({ slotToComponent: n, sectionType: t });
    return d
      ? (0, rr.jsx)(d, {
          slot: c,
          disabled: o,
          selected: l,
          withKey: t === zf && i.computes.isSectionSelected(t),
          onClick: r,
        })
      : null;
  }),
  My = "AmmunitionPanel_border_5210db3e",
  Ly = "AmmunitionPanel_borderImage_a7e374e",
  Ay = "AmmunitionPanel_ammunitionPanel_1e2712ac",
  Ty = "AmmunitionPanel_group_a19909f2",
  Dy = "AmmunitionPanel_section_60fd0117",
  By = "AmmunitionPanel_section__battleBoosters_7bbb51d8",
  Oy = "AmmunitionPanel_presetWrapper_8dedcfb5",
  Vy = "AmmunitionPanel_slots_d69454c1",
  Ry = Hs(function ({ groupIndex: e, sectionIndex: t, slotToComponent: a, onClick: s }) {
    const { controls: n } = Jv(),
      { controls: r } = nb(),
      { breakpoint: i } = Cs(),
      o = wt(
        { value: h.small },
        { large: { value: h.large }, extraLarge: { value: h.extraLarge } },
      ),
      { model: l } = Nv(),
      c = l.computes.sectionByIndex(e, t),
      d = l.computes.groupByIndex(e);
    return c && d
      ? (0, rr.jsx)("div", {
          className: Vy,
          children: (0, rr.jsx)(Rb, {
            dataDropArea: `${c.type}DropArea`,
            onDrop: (e, t) => {
              c.type === zf
                ? n.swapSlots({ leftID: t, rightID: e })
                : c.type === Hf && r.swapSlots({ leftID: t, rightID: e });
            },
            renderDraggingItem: (e) => {
              const t = c.slots[e];
              if (t)
                return c.type === zf
                  ? (0, rr.jsx)(vt, {
                      name: t.imageName,
                      size: Eb(o.value || h.small),
                      overlayType: Mb(t.overlayType),
                    })
                  : c.type === Hf
                    ? (0, rr.jsx)(vt, {
                        name: t.imageName,
                        size: Eb(i.name),
                        level: t.level,
                        overlayType: Mb(t.overlayType),
                      })
                    : void 0;
            },
            children: (0, rr.jsx)("div", {
              style: { display: "flex" },
              children: c.slots.map((n, r) =>
                (0, rr.jsxs)(
                  jn.Fragment,
                  {
                    children: [
                      r > 0 && (0, rr.jsx)(Py, {}),
                      (0, rr.jsx)(Ey, {
                        index: r,
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
  Hy = ks.resolve("aliases"),
  $y = { [$f]: Iy, default: Ry },
  zy = { [zf]: ox, [Ff]: Yx, [Hf]: Hx },
  Fy = (e) => ({ options: { rootId: e } }),
  Wy = {
    providersData: [
      { provider: Yv, props: Fy(Hy.read((e) => e.hangar.shared.Consumables("resId"))) },
      { provider: ib, props: Fy(Hy.read((e) => e.hangar.shared.Instructions("resId"))) },
      { provider: sb, props: Fy(Hy.read((e) => e.hangar.shared.Equipments("resId"))) },
      {
        provider: wv,
        props: {
          options: { rootId: Hy.read((e) => e.hangar.shared.Loadout("resId")) },
          initial: {},
        },
      },
      { provider: gb, props: Fy(Hy.read((e) => e.hangar.shared.Shells("resId"))) },
    ],
    sectionToComponent: $y,
    slotToComponent: zy,
  },
  qy = (0, jn.createContext)(Wy);
function Zy({
  sectionToComponent: e = Wy.sectionToComponent,
  slotToComponent: t = Wy.slotToComponent,
  providersData: a = Wy.providersData,
  children: s,
}) {
  const n = (0, jn.useMemo)(() => ({ sectionToComponent: e, slotToComponent: t }), [e, t]),
    r = new as().add(Tb).addWithProps(qy.Provider, { value: n });
  return (
    a.forEach((e) => {
      void 0 === e.props ? r.add(e.provider) : r.addWithProps(e.provider, e.props);
    }),
    r.render(s)
  );
}
var Gy = Hs(function ({ index: e, vehicleId: t, groupIndex: a, onSectionClick: s }) {
    const n = (0, jn.useContext)(qy),
      { model: r } = Nv(),
      i = r.disabled.get(),
      o = r.computes.sectionByIndex(a, e),
      l = Da((e, t) => {
        const a = r.computes.isSectionSelected(e);
        (!s && a) || s?.(e, t);
      }),
      c = It(),
      d = (0, jn.useMemo)(() => {
        function e() {
          c.play("swipe", { target: "loadout-panel:ammunition_panel:section" });
        }
        return o
          ? {
              idToSlot: o.slots.reduce((e, t) => (t.intCD < 0 || (e[t.intCD] = t.id), e), {}),
              type: o.type,
              vehicleId: t,
              onSwiped: Ka(30, e),
            }
          : { idToSlot: {}, onSwiped: e };
      }, [o, c, t]);
    if (void 0 === o) return null;
    const u = (function ({ sectionToComponent: e = $y, sectionType: t = "default" }) {
      return e[t] ?? e.default;
    })({ sectionToComponent: n.sectionToComponent, sectionType: o.type });
    return (0, rr.jsxs)("div", {
      className: cs(Dy, o.type === Ff && By),
      children: [
        (0, rr.jsx)("div", { className: My }),
        (0, rr.jsx)("div", { className: Ly }),
        u &&
          (0, rr.jsx)(vb.Provider, {
            value: d,
            children: (0, rr.jsx)(u, {
              groupIndex: a,
              sectionIndex: e,
              withKey: r.computes.isSectionSelected(o.type),
              disabled: i,
              selected: r.computes.isSectionSelected(o.type),
              onClick: l,
              slotToComponent: n.slotToComponent,
            }),
          }),
      ],
    });
  }),
  Uy = "field",
  Ky = "progression",
  Xy = Hs(function ({ className: e, onSectionClick: t, vehicleId: a }) {
    const { model: s, controls: n } = Nv(),
      r = s.computes.groups(),
      i = s.hasVehSkillTree.get() ? Ky : Uy;
    return (0, rr.jsx)("div", {
      className: cs(Ay, e),
      children: r.map(
        (
          {
            id: e,
            sections: r,
            currentIndex: o,
            totalCount: l,
            states: c,
            switchEnabled: d,
            prebattleSwitchDisabled: u,
          },
          m,
        ) =>
          (0, rr.jsxs)(
            "div",
            {
              className: Ty,
              children: [
                na(
                  r,
                  (e) => e.slots.length > 0,
                  (e, s) =>
                    (0, rr.jsx)(
                      Gy,
                      { index: s, groupIndex: m, vehicleId: a, onSectionClick: t },
                      `${s}-${o}`,
                    ),
                ),
                d &&
                  l > 1 &&
                  (0, rr.jsx)(Bv, {
                    groupId: e,
                    modifier: i,
                    currentIndex: o,
                    onSwitch: n.changePreset,
                    itemStates: c,
                    disabled: s.disabled.get(),
                    prebattleSwitchDisabled: u,
                    className: Oy,
                  }),
              ],
            },
            e,
          ),
      ),
    });
  }),
  Yy = (e) =>
    (0, rr.jsxs)("svg", {
      width: 14,
      height: 14,
      viewBox: "0 0 14 14",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ...e,
      children: [
        (0, rr.jsx)("path", {
          d: "M10.3616 4.55671L8.60388 1.26575L8.88511 0.928219L8.32265 0L7.8305 0.506301V1.26575L7.19773 1.85644V4.72548L8.32265 6.16L10.3616 4.55671Z",
          fill: "#B3AFAB",
        }),
        (0, rr.jsx)("path", {
          d: "M12.0226 5.6L14 9.24L11.7062 11.0133L10.4407 9.42666V6.25333L11.1525 5.6V4.75999L11.7062 4.2L12.339 5.22666L12.0226 5.6Z",
          fill: "#B3AFAB",
        }),
        (0, rr.jsx)("path", {
          d: "M1.9774 5.6L0 9.24L2.29379 11.0133L3.55932 9.42666V6.25333L2.84746 5.6V4.76L2.29379 4.2L1.66102 5.22666L1.9774 5.6Z",
          fill: "#B3AFAB",
        }),
        (0, rr.jsx)("path", {
          d: "M5.159 1.26575L3.40131 4.55671L5.44023 6.16L6.56515 4.72548V1.85644L5.93238 1.26575V0.506301L5.44023 0L4.87777 0.928219L5.159 1.26575Z",
          fill: "#B3AFAB",
        }),
        (0, rr.jsx)("path", {
          d: "M4.61172 9.62923L2.95227 12.2331L4.90032 14L6.05472 13.2899H8.03062L9.18872 14L11.143 12.2331L9.47824 9.62923L8.53729 7.58333H5.54967L4.61172 9.62923Z",
          fill: "#B3AFAB",
        }),
      ],
    }),
  Jy = "DogPaw_84e7ee48",
  Qy = "DogPaw_icon_5261d625",
  eC = ks.resolve("strings");
function tC({ onClick: e }) {
  const t = bs({ body: eC.readOrEmpty("crew.dogPawTooltip.details.body") });
  return (0, rr.jsx)(n, {
    ...t,
    theme: n.themes.secondary,
    size: n.sizes.small,
    className: Jy,
    onClick: function () {
      (t?.onClick(), e());
    },
    children: (0, rr.jsx)(Yy, { className: Qy }),
  });
}
var aC = "NoTankmanBackground_e7a5353b",
  sC = "NoTankmanBackground_base__hover_be4aa02",
  nC = "NoTankmanBackground_selectedOverlay_6eff1022",
  rC = "NoTankmanBackground_selectedOverlayPattern_313f5cd4",
  iC = "NoTankmanBackground_pattern_f007ac5a";
function oC({ hover: e, selected: t }) {
  return (0, rr.jsxs)("div", {
    className: cs(aC, e && sC),
    children: [
      t &&
        (0, rr.jsxs)(rr.Fragment, {
          children: [(0, rr.jsx)("div", { className: nC }), (0, rr.jsx)("div", { className: rC })],
        }),
      (0, rr.jsx)(_s, { path: "loadout.crew.no_tankman_pattern", className: iC }),
    ],
  });
}
var lC = {
    "media-wrapper": "Tankman_media-wrapper_ca952550",
    root: "Tankman_root_ca952550",
    disabledOverlay: "Tankman_disabledOverlay_499f6513",
    selectedOverlay: "Tankman_selectedOverlay_4ea49654",
    selectedOverlayPattern: "Tankman_selectedOverlayPattern_3198d61b",
    warningOverlay: "Tankman_warningOverlay_cb2d69fe",
    noTankmanOverlay: "Tankman_noTankmanOverlay_6949c1e9",
    warningGlow: "Tankman_warningGlow_89019411",
    content: "Tankman_content_4548f2cf",
    base: "Tankman_29fe409a",
    base__noTankman: "Tankman_base__noTankman_ca952550",
    base__warning: "Tankman_base__warning_ca952550",
    base__selected: "Tankman_base__selected_827ddd42",
    base__hover: "Tankman_base__hover_836d326d",
    base__disabled: "Tankman_base__disabled_69c04b96",
    content__disabled: "Tankman_content__disabled_4f56139c",
    content__disabledWarning: "Tankman_content__disabledWarning_19fa3b76",
  },
  cC = "disabled",
  dC = "warning",
  uC = "noTankman",
  mC = "selected",
  pC = "default";
function _C({ skinId: e, customizedSkin: t }) {
  return e
    ? t
      ? `tankmen.icons.big.crewSkins.${bt(e)}`
      : `tankmen.icons.big.${bt(e)}`
    : "loadout.crew.no_tankman_red";
}
var hC = Ss("Tankman", lC.base),
  gC = (0, jn.memo)(function ({
    skinId: e,
    customizedSkin: t,
    disabled: a,
    selected: s,
    warning: n,
    noTankman: r,
    hovered: i,
    className: o,
    ...l
  }) {
    const c = a ? cC : r ? uC : n ? dC : s ? mC : pC,
      d = !e;
    return (0, rr.jsxs)(hC, {
      ...l,
      className: cs(o, lC[`base__${c}`], i && !a && e && lC.base__hover),
      children: [
        a && (0, rr.jsx)("div", { className: lC.disabledOverlay }),
        s &&
          (0, rr.jsxs)(rr.Fragment, {
            children: [
              (0, rr.jsx)("div", { className: lC.selectedOverlay }),
              (0, rr.jsx)("div", { className: lC.selectedOverlayPattern }),
            ],
          }),
        n && (0, rr.jsx)("div", { className: lC.warningOverlay }),
        d && !a && (0, rr.jsx)(oC, { hover: i, selected: s }),
        (0, rr.jsx)(_s, {
          fit: "cover",
          className: cs(
            lC.content,
            a && (n || !e ? lC.content__disabledWarning : lC.content__disabled),
          ),
          path: _C({ skinId: e, customizedSkin: t }),
        }),
        d && !a && (0, rr.jsx)("div", { className: lC.noTankmanOverlay }),
        n &&
          (0, rr.jsx)(_s, {
            className: lC.warningGlow,
            fit: "cover",
            path: "loadout.crew.alert_glow",
          }),
      ],
    });
  }),
  fC = "Slot_154c229b",
  vC = "Slot_base__noState_71f19f5c",
  bC = "Slot_base__disabled_d386066c",
  xC = "Slot_base__dog_d386066c",
  yC = "Slot_statusBlock_ccea62a7",
  CC = "Slot_statusBlock__dogPaw_1bc38cf2",
  jC = "Slot_statusBlock__disabled_1d609e12",
  wC = "Slot_statusOverlay_e74c1f89",
  NC = "Slot_statusIcon_fe4620f1",
  IC = "Slot_statusIcon__role_3c0a5c22",
  SC = "Slot_statusIcon__untrainedPenalty_2d3a3a74",
  kC = "Slot_retrainingProgress_10d488a1",
  PC = "Slot_newPerk_88d9a967",
  EC = "Slot_newPerk__disabled_1d609e12",
  MC = "Slot_glowBg_e3e687b5",
  LC = ks.resolve("strings"),
  AC = "DogSlot",
  TC = Ss("DogSlot", cs(fC, xC), { variants: { state: { true: bC } } }),
  DC = Hs(function () {
    const [e, t] = (0, jn.useState)(!1),
      a = It(),
      { model: s, controls: n } = au(),
      r = s.computes.disabled(),
      i = s.vehicleNation.get(),
      o = bs({
        header: LC.readOrEmpty(`tooltips.hangar.crew.rudy.dog.${i}.header`),
        body: LC.readOrEmpty(`tooltips.hangar.crew.rudy.dog.${i}.body`),
      });
    const l = La(() => n.showDogInfo(), [n], 400);
    return (0, rr.jsxs)(TC, {
      state: r,
      children: [
        (0, rr.jsx)(gC, {
          disabled: r,
          warning: !1,
          noTankman: !1,
          hovered: e,
          customizedSkin: !1,
          skinId: "ussr_dog_1",
          onClick: function () {
            (r || a.play("dog-slot-click", { target: AC }), o?.onClick());
          },
          onMouseEnter: function (e) {
            (r || (t(!0), a.play("mouse-enter", { target: AC })), o?.onMouseEnter(e));
          },
          onMouseLeave: function () {
            (t(!1), o?.onMouseLeave());
          },
        }),
        (0, rr.jsx)("div", {
          className: cs(yC, CC, r && jC),
          children: (0, rr.jsx)(tC, { onClick: l }),
        }),
      ],
    });
  }),
  BC = "TankmanRole_3bb08c81",
  OC = {
    [ws.commander]: (e) =>
      (0, rr.jsx)("svg", {
        width: 18,
        height: 18,
        viewBox: "0 0 18 18",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        ...e,
        children: (0, rr.jsx)("path", {
          fillRule: "evenodd",
          clipRule: "evenodd",
          d: "M15.8941 4.6285C15.8456 4.45146 15.7404 4.29519 15.5947 4.18358C15.449 4.07198 15.2707 4.01118 15.0871 4.0105H11.5201V4.8631H9.84012V4.0105H8.16012V4.8631H6.48012V4.0105H2.91372C2.72995 4.01092 2.55139 4.07159 2.40541 4.18322C2.25943 4.29485 2.15409 4.45126 2.10552 4.6285L0.72852 9.5191C0.642995 9.82414 0.599791 10.1395 0.600119 10.4563V15.9475C0.598522 16.1719 0.686107 16.3878 0.843622 16.5477C1.00114 16.7076 1.21569 16.7984 1.44012 16.8001H4.80012C5.02455 16.7984 5.2391 16.7076 5.39662 16.5477C5.55413 16.3878 5.64172 16.1719 5.64012 15.9475V11.6845C5.63852 11.4601 5.72611 11.2442 5.88362 11.0843C6.04114 10.9244 6.25569 10.8336 6.48012 10.8319H8.16012V11.6845H9.84012V10.8319H11.5201C11.7445 10.8336 11.9591 10.9244 12.1166 11.0843C12.2741 11.2442 12.3617 11.4601 12.3601 11.6845V15.9475C12.3585 16.1719 12.4461 16.3878 12.6036 16.5477C12.7611 16.7076 12.9757 16.7984 13.2001 16.8001H16.5601C16.7845 16.7984 16.9991 16.7076 17.1566 16.5477C17.3141 16.3878 17.4017 16.1719 17.4001 15.9475V10.4563C17.4002 10.139 17.3565 9.82327 17.2705 9.5179L15.8941 4.6285ZM8.16012 9.1285H6.48012V6.5683H8.16012V9.1285ZM11.5201 9.1285H9.84012V6.5683H11.5201V9.1285ZM13.2001 0.600098H12.3601C12.1357 0.601842 11.9211 0.692631 11.7636 0.852509C11.6061 1.01239 11.5185 1.22827 11.5201 1.4527V2.3053C11.5185 2.52973 11.6061 2.74561 11.7636 2.90549C11.9211 3.06536 12.1357 3.15615 12.3601 3.1579H13.2001C13.4245 3.15615 13.6391 3.06536 13.7966 2.90549C13.9541 2.74561 14.0417 2.52973 14.0401 2.3053V1.4527C14.0417 1.22827 13.9541 1.01239 13.7966 0.852509C13.6391 0.692631 13.4245 0.601842 13.2001 0.600098ZM5.64012 0.600098H4.80012C4.57569 0.601842 4.36114 0.692631 4.20362 0.852509C4.04611 1.01239 3.95852 1.22827 3.96012 1.4527V2.3053C3.95852 2.52973 4.04611 2.74561 4.20362 2.90549C4.36114 3.06536 4.57569 3.15615 4.80012 3.1579H5.64012C5.86455 3.15615 6.0791 3.06536 6.23662 2.90549C6.39413 2.74561 6.48172 2.52973 6.48012 2.3053V1.4527C6.48172 1.22827 6.39413 1.01239 6.23662 0.852509C6.0791 0.692631 5.86455 0.601842 5.64012 0.600098Z",
        }),
      }),
    [ws.driver]: (e) =>
      (0, rr.jsxs)("svg", {
        width: 18,
        height: 18,
        viewBox: "0 0 18 18",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        ...e,
        children: [
          (0, rr.jsx)("g", {
            clipPath: "url(#clip0_11629_273215)",
            children: (0, rr.jsx)("path", {
              fillRule: "evenodd",
              clipRule: "evenodd",
              d: "M9.0001 17.4001C7.33874 17.4001 5.71468 16.9074 4.33331 15.9844C2.95194 15.0614 1.87529 13.7495 1.23952 12.2146C0.603739 10.6797 0.437389 8.99078 0.761504 7.36134C1.08562 5.7319 1.88564 4.23516 3.0604 3.0604C4.23516 1.88564 5.7319 1.08562 7.36134 0.761504C8.99078 0.437389 10.6797 0.603739 12.2146 1.23952C13.7495 1.87529 15.0614 2.95194 15.9844 4.33331C16.9074 5.71468 17.4001 7.33874 17.4001 9.0001C17.4001 11.2279 16.5151 13.3645 14.9398 14.9398C13.3645 16.5151 11.2279 17.4001 9.0001 17.4001ZM15.6931 9.5251H10.5877C10.5041 9.77766 10.3614 10.0066 10.1714 10.1929C9.9815 10.3792 9.74983 10.5174 9.4957 10.5961V15.6721C11.093 15.5577 12.5964 14.8747 13.7334 13.7469C14.8704 12.6192 15.5656 11.1214 15.6931 9.5251ZM8.4487 15.6673V10.5805C8.20655 10.496 7.98708 10.3569 7.80729 10.174C7.62751 9.9911 7.49222 9.76927 7.4119 9.5257H2.3071C2.43395 11.1124 3.12181 12.6021 4.24737 13.7276C5.37292 14.8532 6.86258 15.5411 8.4493 15.6679L8.4487 15.6673ZM9.0001 2.2801C7.30964 2.28143 5.68177 2.91982 4.44106 4.068C3.20036 5.21619 2.43797 6.7898 2.3059 8.4751H7.4125C7.52075 8.13918 7.73277 7.84625 8.01805 7.63846C8.30333 7.43067 8.64717 7.31872 9.0001 7.31872C9.35303 7.31872 9.69687 7.43067 9.98215 7.63846C10.2674 7.84625 10.4794 8.13918 10.5877 8.4751H15.6931C15.561 6.79001 14.7988 5.21657 13.5584 4.06841C12.3179 2.92026 10.6904 2.28173 9.0001 2.2801Z",
            }),
          }),
          (0, rr.jsx)("defs", {
            children: (0, rr.jsx)("clipPath", {
              id: "clip0_11629_273215",
              children: (0, rr.jsx)("rect", { width: 18, height: 18, fill: "white" }),
            }),
          }),
        ],
      }),
    [ws.gunner]: (e) =>
      (0, rr.jsxs)("svg", {
        width: 18,
        height: 18,
        viewBox: "0 0 18 18",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        ...e,
        children: [
          (0, rr.jsx)("g", {
            clipPath: "url(#clip0_11629_273826)",
            children: (0, rr.jsx)("path", {
              fillRule: "evenodd",
              clipRule: "evenodd",
              d: "M17.1814 9.8184H16.315C16.1286 11.4773 15.3841 13.0235 14.2035 14.2038C13.023 15.384 11.4765 16.128 9.81761 16.314V17.1822C9.81745 17.399 9.73124 17.607 9.57791 17.7603C9.42457 17.9136 9.21665 17.9998 8.99981 18C8.78275 18 8.57459 17.9138 8.42111 17.7603C8.26763 17.6068 8.18141 17.3987 8.18141 17.1816V16.314C6.5225 16.128 4.97601 15.384 3.79547 14.2038C2.61494 13.0235 1.87043 11.4773 1.68401 9.8184H0.81761C0.708311 9.82136 0.599524 9.80239 0.497679 9.76261C0.395834 9.72283 0.302995 9.66304 0.224641 9.58678C0.146288 9.51052 0.084006 9.41933 0.041481 9.3186C-0.00104395 9.21787 -0.0229492 9.10964 -0.0229492 9.0003C-0.0229492 8.89096 -0.00104395 8.78273 0.041481 8.682C0.084006 8.58127 0.146288 8.49009 0.224641 8.41383C0.302995 8.33756 0.395834 8.27778 0.497679 8.23799C0.599524 8.19821 0.708311 8.17924 0.81761 8.1822H1.68401C1.8703 6.52324 2.61475 4.97681 3.7953 3.79648C4.97584 2.61615 6.52241 1.87199 8.18141 1.686V0.818399C8.18141 0.601346 8.26763 0.393183 8.42111 0.239703C8.57459 0.0862236 8.78275 0 8.99981 0C9.21686 0 9.42502 0.0862236 9.5785 0.239703C9.73198 0.393183 9.8182 0.601346 9.8182 0.818399V1.686C11.4771 1.87196 13.0236 2.61604 14.2041 3.79625C15.3847 4.97645 16.1292 6.52275 16.3156 8.1816H17.182C17.399 8.18176 17.607 8.26805 17.7603 8.42152C17.9137 8.57498 17.9998 8.78305 17.9998 9C17.9998 9.10747 17.9786 9.2139 17.9375 9.31319C17.8964 9.41248 17.8361 9.5027 17.7601 9.5787C17.6841 9.65469 17.5939 9.71497 17.4946 9.7561C17.3953 9.79723 17.2889 9.8184 17.1814 9.8184ZM8.99981 3.273C7.51916 3.26929 6.09489 3.84055 5.0272 4.8664C3.9595 5.89224 3.33176 7.29254 3.2763 8.77215C3.22083 10.2518 3.74196 11.6951 4.72985 12.798C5.71774 13.9009 7.09524 14.5772 8.57201 14.6844H9.4276C10.9044 14.5772 12.2819 13.9009 13.2698 12.798C14.2577 11.6951 14.7788 10.2518 14.7233 8.77215C14.6678 7.29254 14.0401 5.89224 12.9724 4.8664C11.9047 3.84055 10.4805 3.26929 8.99981 3.273ZM6.5452 10.6368L8.99981 7.3692L11.4544 10.6362L8.99981 9.8238L6.5452 10.6368Z",
            }),
          }),
          (0, rr.jsx)("defs", {
            children: (0, rr.jsx)("clipPath", {
              id: "clip0_11629_273826",
              children: (0, rr.jsx)("rect", { width: 18, height: 18, fill: "white" }),
            }),
          }),
        ],
      }),
    [ws.loader]: (e) =>
      (0, rr.jsx)("svg", {
        width: 18,
        height: 18,
        viewBox: "0 0 18 18",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        ...e,
        children: (0, rr.jsx)("path", {
          fillRule: "evenodd",
          clipRule: "evenodd",
          d: "M16.646 12.8005H12.8456C12.7484 11.3725 12.6938 10.1461 12.6938 9.4003C12.6938 3.8077 14.7458 0.600697 14.7458 0.600697C16.1795 3.30687 16.8873 6.33844 16.8002 9.3997C16.8002 10.1449 16.7432 11.3749 16.646 12.8005ZM7.0988 12.8005C7.0016 11.3725 6.947 10.1461 6.947 9.4003C6.947 3.8071 9.0002 0.600098 9.0002 0.600098C10.4332 3.30667 11.1402 6.33845 11.0522 9.3997C11.0522 10.1449 10.9976 11.3737 10.9004 12.7999H7.0988V12.8005ZM1.35199 12.8005C1.25479 11.3725 1.2002 10.1461 1.2002 9.4003C1.2002 3.8071 3.25219 0.600098 3.25219 0.600098C4.68517 3.30667 5.39216 6.33845 5.30419 9.3997C5.30419 10.1449 5.24899 11.3737 5.15239 12.7999H1.35199V12.8005ZM4.9328 16.6009H3.9452L3.8402 17.4001H2.6372L2.52199 16.6003H1.56859C1.44859 15.4411 1.45339 14.2741 1.37599 13.2001H5.1254C5.048 14.2747 5.0516 15.4411 4.9322 16.6003L4.9328 16.6009ZM10.679 16.6009H9.692L9.5894 17.4001H8.384L8.26879 16.6003H7.32019C7.20019 15.4411 7.20499 14.2741 7.12759 13.2001H10.8728C10.7954 14.2747 10.799 15.4411 10.6802 16.6003L10.679 16.6009ZM16.4258 16.6009H15.4382L15.3362 17.4001H14.1302L14.015 16.6003H13.0658C12.9458 15.4411 12.9506 14.2741 12.8732 13.2001H16.6202C16.5398 14.2747 16.5464 15.4411 16.427 16.6003L16.4258 16.6009Z",
        }),
      }),
    [ws.radioman]: (e) =>
      (0, rr.jsxs)("svg", {
        width: 18,
        height: 18,
        viewBox: "0 0 18 18",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        ...e,
        children: [
          (0, rr.jsx)("g", {
            clipPath: "url(#clip0_67238_249405)",
            children: (0, rr.jsx)("path", {
              fillRule: "evenodd",
              clipRule: "evenodd",
              d: "M16.7735 10.11C17.08 10.3137 17.3142 10.6091 17.4425 10.954C17.5709 11.2989 17.5868 11.6755 17.4881 12.03L16.4243 16.0212C16.3284 16.4058 16.1032 16.7456 15.7863 16.9837C15.4695 17.2218 15.0803 17.3436 14.6843 17.3286L13.8311 17.28C13.5799 17.2597 13.3363 17.1835 13.1183 17.057C12.9003 16.9304 12.7134 16.7567 12.5711 16.5486C12.428 16.3395 12.3331 16.1012 12.2933 15.8509C12.2536 15.6006 12.27 15.3446 12.3413 15.1014L13.4945 10.7724C13.5908 10.3864 13.8176 10.0455 14.1365 9.80744C14.4553 9.56941 14.8466 9.44887 15.2441 9.46624L15.3497 9.03904C15.5831 8.15825 15.5717 7.23047 15.3168 6.35568C15.0618 5.48088 14.5731 4.69221 13.9031 4.07464C12.5871 2.92363 10.8982 2.28923 9.14991 2.28923C7.4016 2.28923 5.71268 2.92363 4.39671 4.07464C3.72695 4.69234 3.23841 5.48107 2.98371 6.35586C2.72902 7.23065 2.71782 8.15835 2.95131 9.03904L3.05511 9.45904C3.42893 9.47426 3.78782 9.60998 4.07817 9.84593C4.36852 10.0819 4.57477 10.4054 4.66611 10.7682L5.81931 15.0972C5.89064 15.3404 5.90702 15.5964 5.86728 15.8467C5.82753 16.097 5.73266 16.3353 5.58951 16.5444C5.44726 16.7525 5.2603 16.9262 5.04229 17.0528C4.82429 17.1793 4.58076 17.2555 4.32951 17.2758L3.47631 17.3244C3.08025 17.3395 2.69107 17.2177 2.3742 16.9797C2.05733 16.7416 1.83208 16.4016 1.73631 16.017L0.67251 12.0258C0.566505 11.6477 0.591511 11.2449 0.743473 10.8828C0.895434 10.5207 1.16542 10.2207 1.50951 10.0314L1.36551 9.44224C1.05516 8.25749 1.07528 7.01037 1.42371 5.83626C1.77214 4.66214 2.43555 3.60592 3.34191 2.78224C4.95139 1.37422 7.01717 0.598145 9.15561 0.598145C11.2941 0.598145 13.3598 1.37422 14.9693 2.78224C15.8757 3.60592 16.5391 4.66214 16.8875 5.83626C17.2359 7.01037 17.2561 8.25749 16.9457 9.44224L16.7735 10.11Z",
            }),
          }),
          (0, rr.jsx)("defs", {
            children: (0, rr.jsx)("clipPath", {
              id: "clip0_67238_249405",
              children: (0, rr.jsx)("rect", { width: 18, height: 18, fill: "white" }),
            }),
          }),
        ],
      }),
  };
function VC({ role: e = "", className: t }) {
  const a = OC[e];
  if (a) return (0, rr.jsx)(a, { className: cs(BC, t) });
  console.error(`Unknown role type ${e}`);
}
var RC = "NewPerk_count_dccb920a",
  HC = "NewPerk_iconPlus_4dc7d532",
  $C = "NewPerk_iconGlow_2e9bc817",
  zC = Ss("NewPerk", "NewPerk_2d8eff13");
function FC({ className: e, count: t, baseRef: a }) {
  return (0, rr.jsxs)(zC, {
    ref: a,
    className: e,
    children: [
      t > 1 && (0, rr.jsx)("div", { className: RC, children: t }),
      (0, rr.jsx)("div", { className: HC, "data-test-id": "newPerk" }),
      (0, rr.jsx)(_s, {
        path: "loadout.crew.plus_perks_glow",
        width: 65,
        height: 68,
        className: $C,
      }),
    ],
  });
}
var WC = (e) =>
    (0, rr.jsxs)("svg", {
      width: 18,
      height: 18,
      viewBox: "0 0 18 18",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ...e,
      children: [
        (0, rr.jsx)("path", { d: "M4 12L9 15L14 12V10L9 13L4 10V12Z", fill: "#FFC6C3" }),
        (0, rr.jsx)("path", { d: "M4 8L9 11L14 8V6L9 9L4 6V8Z", fill: "#FFC6C3" }),
        (0, rr.jsx)("path", { d: "M4 4L9 7L14 4V2L9 5L4 2V4Z", fill: "#FFC6C3" }),
      ],
    }),
  qC = "RetrainingProgress_7ce4f314",
  ZC = "RetrainingProgress_background_accc6ddf",
  GC = "RetrainingProgress_content_b4685fd0",
  UC = "RetrainingProgress_icon_f4b2dc6",
  KC = ks.resolve("intl"),
  XC = Ss("RetrainingProgress", qC);
function YC({ value: e, className: t }) {
  const a = KC.formatNumber("integral", 100 * e);
  return (0, rr.jsxs)(XC, {
    className: t,
    children: [
      (0, rr.jsx)("div", { className: ZC }),
      (0, rr.jsxs)("div", {
        className: GC,
        children: [
          (0, rr.jsx)(WC, { className: UC }),
          (0, rr.jsx)(g, { upgradeLegacy: !0, path: "common.percentValue", params: { value: a } }),
        ],
      }),
    ],
  });
}
var JC = {
    "media-wrapper": "TankmanLevel_media-wrapper_55629cb9",
    root: "TankmanLevel_root_55629cb9",
    border: "TankmanLevel_border_7a3d6e33",
    borderImage: "TankmanLevel_borderImage_f52e6b8f",
    base: "TankmanLevel_888fe938",
    perk: "TankmanLevel_perk_390beec8",
    borderImage__noise: "TankmanLevel_borderImage__noise_e53df2b",
  },
  QC = ks.resolve("images"),
  ej = Ss("Perk");
function tj({ value: e, main: t, ...a }) {
  const s = t ? "components.button.default_border_pattern_radius_4" : "loadout.crew.dashed_border";
  return (0, rr.jsxs)(ej, {
    ...a,
    children: [
      t && (0, rr.jsx)("div", { className: JC.border }),
      (0, rr.jsx)("div", {
        className: cs(JC.borderImage, t && JC.borderImage__noise),
        style: { borderImageSource: `url(${QC.readOrEmpty(s)})` },
      }),
      e,
    ],
  });
}
var aj = Ss("TankmanLevel", JC.base);
function sj({ perkValue: e, bonusPerkValue: t }) {
  return (0, rr.jsxs)(aj, {
    children: [
      (0, rr.jsx)(tj, { className: JC.perk, value: e, main: !0 }),
      void 0 !== t &&
        (0, rr.jsx)(tj, { className: cs(JC.perk, JC.perk__bonus), value: t, main: !1 }),
    ],
  });
}
var nj = (e) =>
    (0, rr.jsxs)("svg", {
      width: 48,
      height: 48,
      viewBox: "0 0 48 48",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      xmlnsXlink: "http://www.w3.org/1999/xlink",
      ...e,
      children: [
        (0, rr.jsxs)("g", {
          opacity: 0.1,
          children: [
            (0, rr.jsx)("mask", {
              id: "mask0_416_14088",
              style: { maskType: "alpha" },
              maskUnits: "userSpaceOnUse",
              x: 3,
              y: 3,
              width: 42,
              height: 42,
            }),
            (0, rr.jsx)("g", {
              mask: "url(#mask0_416_14088)",
              children: (0, rr.jsx)("circle", {
                cx: 24,
                cy: 24,
                r: 21,
                fill: "url(#paint0_radial_416_14088)",
              }),
            }),
          ],
        }),
        (0, rr.jsx)("g", {
          children: (0, rr.jsx)("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M31.3461 16.9126L30.2948 15.9658L27.0732 18.8672L26.4351 18.5699H24.2253L23.336 18H21.7758L20.6478 19.0423H19.9247C19.7228 19.2709 19.546 19.5333 19.371 19.7931C19.2897 19.9137 19.2088 20.0338 19.126 20.1496L18.6748 21.6955L20.3893 23.1169H17.4115C17.4115 23.1169 16.0129 22.4536 15.0654 22.7379C14.118 23.0221 14 24.1067 14 24.1067C14 24.1067 14 25.9596 14.5234 26.8833C14.5986 26.952 14.7147 27.11 14.8619 27.3104C15.1767 27.739 15.6338 28.3613 16.1369 28.7163L14.5253 30.1677L15.5766 31.1145L31.3461 16.9126ZM27.4688 28.998C25.357 28.9963 22.4075 28.9939 19.7941 28.9927L29.6854 20.0847H36V21.0322H29.5933C29.5945 21.2753 29.4321 21.5574 29.2712 21.8368C29.1277 22.086 28.9855 22.333 28.9617 22.5484C28.5951 22.7934 27.9771 23.0957 27.5812 23.2844L29.4276 23.2436L29.3769 23.7892L33.0222 24.0645L33.4734 24.5383C33.5016 24.9992 33.5016 25.5934 33.4734 26.0544C33.1684 26.5673 31.2175 29 30.2249 29C29.9068 29 28.8774 28.9992 27.479 28.998L27.4752 28.998L27.4688 28.998Z",
            fill: "#FFC6C3",
          }),
        }),
        (0, rr.jsx)("defs", {
          children: (0, rr.jsxs)("radialGradient", {
            id: "paint0_radial_416_14088",
            cx: 0,
            cy: 0,
            r: 1,
            gradientUnits: "userSpaceOnUse",
            gradientTransform: "translate(24 24) rotate(90) scale(21)",
            children: [
              (0, rr.jsx)("stop", { stopColor: "#D9D9D9" }),
              (0, rr.jsx)("stop", { offset: 1, stopColor: "#D9D9D9", stopOpacity: 0 }),
            ],
          }),
        }),
      ],
    }),
  rj = ks.resolve("views"),
  ij = "CrewSlot",
  oj = {
    retrainingProgress: "retrainingProgress",
    withPerks: "withPerks",
    unsuitableTankman: "unsuitableTankman",
    default: "default",
  };
var lj = Hs(function ({
    index: e,
    tankmanId: t,
    id: a,
    role: s,
    selected: n = !1,
    setSelectedSlot: r,
    tooltipShowDelay: i,
  }) {
    const [o, l] = (0, jn.useState)(!1),
      c = It(),
      { model: d, controls: u } = au(),
      m = d.computes.disabled(),
      p = -1 !== t,
      _ = p ? d.computes.tankmanById(t) : void 0,
      h = d.computes.newPerksToLearn(t),
      g = (0, jn.useMemo)(
        () =>
          (function (e) {
            if (e?.bonusPerks?.length) return e.bonusPerks.reduce((e, t) => e + t.skills.length, 0);
          })(_),
        [_],
      ),
      v = (function (e, t) {
        if (e)
          return e.currentVehicleSkillsEfficiency < 1
            ? e.insideNativeTank || -1 !== e.currentVehicleSkillsEfficiency
              ? oj.retrainingProgress
              : oj.unsuitableTankman
            : e.perks.length > 0 || (t && t > 0)
              ? oj.withPerks
              : oj.default;
      })(_, g),
      b = v === oj.retrainingProgress || v === oj.unsuitableTankman,
      x = _ && h > 0,
      [y, C] = yt();
    const j = ia(
        "crewMember",
        (0, jn.useMemo)(() => ({ tankmanID: t, slotIdx: a, previousViewID: null }), [t, a]),
        (0, jn.useMemo)(() => ({ disabled: !p || m }), [p, m]),
      ),
      w = f(
        "crew_info",
        (0, jn.useMemo)(
          () => ({ tankman: _ ?? {}, resId: rj.read((e) => e.mono.hangar.tooltips("resId")) }),
          [_],
        ),
        { disabled: !_, showDelay: i },
      );
    return (0, rr.jsxs)("div", {
      "data-name": "Slot",
      onMouseDown: function (e) {
        y(e) || j?.onMouseDown(e);
      },
      onMouseEnter: function (e) {
        (w.onMouseEnter(e), m || (l(!0), n || c.play("mouse-enter", { target: ij })));
      },
      onMouseLeave: function () {
        (w.onMouseLeave(), l(!1));
      },
      onClick: function () {
        (w.onClick(), m || (c.play("crew-slot-click", { target: ij }), u.openCrew(a), r && r(e)));
      },
      className: cs(fC, m && bC, (!v || v === oj.default || !oj[v]) && vC),
      "data-test-id": `crewSlot-${e}`,
      children: [
        x &&
          (0, rr.jsxs)(rr.Fragment, {
            children: [
              (0, rr.jsx)(FC, { baseRef: C, count: h, className: cs(PC, m && EC) }),
              !m && (0, rr.jsx)("div", { className: MC }),
            ],
          }),
        (0, rr.jsx)(gC, {
          hovered: o && !n,
          selected: n,
          disabled: m,
          warning: b,
          noTankman: !p,
          skinId: _?.crewSkinId.replace("tankman_", ""),
          customizedSkin: _?.customizedSkin ?? !1,
        }),
        v !== oj.default &&
          (0, rr.jsx)("div", {
            className: cs(yC, m && jC),
            children: (() => {
              if (!_)
                return (
                  void 0 !== s &&
                  (0, rr.jsxs)(rr.Fragment, {
                    children: [
                      (0, rr.jsx)("div", { className: wC }),
                      (0, rr.jsx)(VC, { className: cs(NC, IC), role: s }),
                    ],
                  })
                );
              switch (v) {
                case oj.unsuitableTankman:
                  return (0, rr.jsxs)(rr.Fragment, {
                    children: [
                      (0, rr.jsx)("div", { className: wC }),
                      (0, rr.jsx)(nj, { className: cs(NC, SC) }),
                    ],
                  });
                case oj.retrainingProgress:
                  return (0, rr.jsx)(YC, {
                    value: _.currentVehicleSkillsEfficiency,
                    className: kC,
                  });
                case oj.withPerks:
                  return (0, rr.jsx)(sj, { perkValue: _.perks.length, bonusPerkValue: g });
                default:
                  return (console.error("Unknown crew slot display state: ", v), null);
              }
            })(),
          }),
      ],
    });
  }),
  cj = "CrewPanel_border_2ccbfb54",
  dj = "CrewPanel_borderImage_50acd0ba",
  uj = "CrewPanel_slots_57c050b6",
  mj = "CrewPanel_slotWrapper_acbcfc00",
  pj = Ss("CrewPanel", "CrewPanel_82d22bfe"),
  _j = Hs(
    (0, jn.forwardRef)(function (e, t) {
      const [a, s] = (0, jn.useState)(!1),
        { model: n } = au(),
        r = n.computes.slots(),
        i = n.withDog.get();
      return (0, rr.jsxs)(pj, {
        ...e,
        ref: t,
        onMouseEnter: (t) => {
          (e.onMouseEnter?.(t), s(!0));
        },
        onMouseLeave: (t) => {
          (e.onMouseLeave?.(t), s(!1));
        },
        children: [
          (0, rr.jsx)("div", { className: cj }),
          (0, rr.jsx)("div", { className: dj }),
          (0, rr.jsxs)("div", {
            className: uj,
            children: [
              r.map((e, t) =>
                (0, rr.jsxs)(
                  "div",
                  {
                    className: mj,
                    children: [
                      t > 0 && (0, rr.jsx)(Py, {}),
                      (0, rr.jsx)(
                        lj,
                        {
                          index: t,
                          tankmanId: e.tankmanId,
                          id: e.id,
                          role: e.roles[0],
                          tooltipShowDelay: a ? 50 : 150,
                        },
                        -1 === e.tankmanId ? `empty_${t}` : e.tankmanId,
                      ),
                    ],
                  },
                  e.id,
                ),
              ),
              i &&
                (0, rr.jsxs)("div", {
                  className: mj,
                  children: [(0, rr.jsx)(Py, {}), (0, rr.jsx)(DC, {})],
                }),
            ],
          }),
        ],
      });
    }),
  ),
  hj = { "crew-slot-click": Tt("yes1"), "dog-slot-click": Tt("rudy") },
  gj = Ss("LoadoutPanel"),
  fj = (0, jn.forwardRef)(function ({ children: e, className: t, ...a }, s) {
    return (0, rr.jsx)(gj, { className: t, ref: s, ...a, children: e });
  }),
  vj = "battleAbilities";
function bj(e) {
  return { name: e.name, rankValues: ((t = e.rankValues), Ve(t, String)) };
  var t;
}
function xj(e) {
  return {
    ...Kv(e),
    level: e.level,
    cost: e.cost,
    targetSlotId: e.targetSlotId,
    skillId: e.skillId,
    description: e.description,
    rank: e.rank,
    category: e.category,
    ranks: Ve(e.ranks, String),
    abilitiesByRank: Ve(e.abilitiesByRank, bj),
  };
}
var [yj, Cj] = ds()(
    ({ observableModel: e }) => {
      const t = {
          ...e.primitives(["modeState"]),
          slots: e.arrayClone("slots"),
          categoriesOrder: e.arrayClone("categoriesOrder"),
          keyNames: e.arrayClone("keyNames"),
        },
        a = Na.primitive(() =>
          _(t.slots.get(), xj)
            .filter((e) => -1 !== e.installedSlotId)
            .sort((e, a) => {
              const s = t.categoriesOrder.get();
              return s.indexOf(e.category) - s.indexOf(a.category);
            }),
        );
      return { ...t, computes: { slots: a } };
    },
    ({ externalModel: e }) => ({
      actionSlot: e.createCallback(
        (e, t, a) => ({ intCD: e, currentSlotId: t, actionType: a }),
        "onSlotAction",
      ),
    }),
  ),
  jj = "AbilitySlot_1ab0f1c8",
  wj = "AbilitySlot_slot_1ab0f1c8",
  Nj = "AbilitySlot_icon_df0d34df",
  Ij = "AbilitySlot_rank_66378d47",
  Sj = "AbilitySlot_rank__disabled_29c0b2b7",
  kj = "AbilitySlot_unmountButton_899c51e",
  Pj = "AbilitySlot_hotKeyLabel_62f1366",
  Ej = "AbilitySlot_text_4c669b80",
  Mj = "AbilitySlot_categoryWrapper_22b1884c",
  Lj = "AbilitySlot_categoryIcon_9ed01598",
  Aj = ks.resolve("aliases"),
  Tj = ks.resolve("views"),
  Dj = ks.resolve("strings"),
  Bj = Hs(function ({
    idx: e,
    intCD: t,
    keyName: a,
    unmountHandler: s,
    selectHandler: n,
    item: r,
  }) {
    const { model: i } = Nv(),
      { model: o } = Cj(),
      l = It(),
      c = ct(),
      [d, u] = (0, jn.useState)(!1),
      m = i.computes.isSlotSelected(e, Wf),
      p = i.computes.isSectionSelected(Wf),
      _ = o.modeState.get() === $s,
      g = o.modeState.get() === zs,
      f = i.disabled.get() || _ || g,
      v = Dj.readOrEmpty(`readable_key_names.${a}`),
      b = S(
        _ || g
          ? {
              resId: Aj.read((e) => e.hangar.shared.Loadout("resId")),
              contentId: Tj.read((e) =>
                e.common.tooltip_window.simple_tooltip_content.SimpleTooltipContent("resId"),
              ),
              decoratorId: Tj.read((e) =>
                e.common.tooltip_window.tooltip_window.TooltipWindow("resId"),
              ),
              args: {
                header: "",
                body: _
                  ? Dj.readOrEmpty("fl_tooltips.commonTooltip.descriptionEnded")
                  : Dj.readOrEmpty("fl_tooltips.commonTooltip.eventStartSoon"),
              },
            }
          : {
              resId: Aj.read((e) => e.hangar.shared.Loadout("resId")),
              contentId: Tj.read((e) =>
                e.frontline.mono.lobby.tooltips.battle_ability_tooltip("resId"),
              ),
              args: { intCD: t, tooltipId: vj },
            },
      ),
      x = S({
        resId: Aj.read((e) => e.frontline.loadout.BattleAbilities("resId")),
        contentId: Tj.read((e) => e.frontline.mono.lobby.tooltips.skill_order_tooltip("resId")),
      }),
      y = wt(
        { value: h.small },
        { large: { value: h.large }, extraLarge: { value: h.extraLarge } },
      );
    return (0, rr.jsxs)("div", {
      className: jj,
      children: [
        (0, rr.jsx)("div", {
          ...b,
          children: (0, rr.jsx)(dt, {
            className: wj,
            size: Pb(y.value),
            hovered: d,
            selected: m,
            disabled: f,
            onMouseEnter: function () {
              (u(!0), l.play("mouse-enter", { target: "loadout-panel:slot:consumable" }));
            },
            onMouseLeave: () => u(!1),
            onClick: function (t) {
              m ||
                (l.play("click", { target: "loadout-panel:slot", original: t }),
                n(r.intCD, e),
                c.push(Mf.battleAbilities, { slotIndex: e, groupId: 0, sectionName: vj }));
            },
            children:
              r.imageName &&
              (0, rr.jsx)("div", {
                className: Nj,
                style: {
                  backgroundImage: `url(${R.images.frontline.gui.maps.icons.loadout.battleAbilities.c_80x80.$dyn(r.imageName)})`,
                },
              }),
          }),
        }),
        p &&
          v &&
          (0, rr.jsx)("div", {
            className: Pj,
            children: (0, rr.jsx)("div", { className: Ej, children: (0, rr.jsx)(ra, { text: v }) }),
          }),
        Boolean(r.rank) &&
          (0, rr.jsx)("div", {
            style: {
              backgroundImage: `url(${R.images.frontline.gui.maps.icons.ranksSilver.c_24x24.$dyn(`rank_${r.rank}`)})`,
            },
            className: cs(Ij, f && Sj),
          }),
        !r.mounted && (0, rr.jsx)(Ub, { onClick: () => s(r.intCD, e), className: kj }),
        (0, rr.jsx)("div", {
          ...x,
          className: Mj,
          children: (0, rr.jsx)("div", {
            className: Lj,
            style: {
              backgroundImage: `url(${R.images.frontline.gui.maps.icons.loadout.categories.c_48x48.$dyn(r.category)})`,
            },
          }),
        }),
      ],
    });
  }),
  Oj = "BattleAbilitiesPanel_border_73c2089c",
  Vj = "BattleAbilitiesPanel_borderImage_a3404be6",
  Rj = "BattleAbilitiesPanel_567f62aa",
  Hj = "BattleAbilitiesPanel_section_be72563f",
  $j = "BattleAbilitiesPanel_slots_e4530691",
  zj = Hs(function () {
    const { model: e, controls: t } = Cj(),
      a = e.computes.slots(),
      s = e.keyNames.get();
    return (0, rr.jsx)("div", {
      className: Rj,
      children: (0, rr.jsxs)("div", {
        className: Hj,
        children: [
          (0, rr.jsx)("div", { className: Oj }),
          (0, rr.jsx)("div", { className: Vj }),
          (0, rr.jsx)("div", {
            className: $j,
            children: Ve(a, (e, a) =>
              (0, rr.jsxs)(
                jn.Fragment,
                {
                  children: [
                    a > 0 && (0, rr.jsx)(Py, {}),
                    (0, rr.jsx)(
                      Bj,
                      {
                        idx: a,
                        intCD: e.intCD,
                        keyName: s[a],
                        item: e,
                        selectHandler: (e, a) => t.actionSlot(e, a, Ov),
                        unmountHandler: (e, a) => t.actionSlot(e, a, Vv),
                      },
                      a,
                    ),
                  ],
                },
                a,
              ),
            ),
          }),
        ],
      }),
    });
  }),
  Fj = "LoadoutPanel_loadoutPanel_4c5b5911",
  Wj = "LoadoutPanel_loadoutPanel__screenMode_5e77d807",
  qj = "LoadoutPanel_panel_ec4752fe",
  Zj = "LoadoutPanel_crewPanel_b90a22ab",
  Gj = "LoadoutPanel_ammunitionPanel_baf41791",
  Uj = new as().addWithProps(aa, { overrides: hj }),
  Kj = { [Ff]: Mf.instructions, [zf]: Mf.consumables, [Hf]: Mf.equipments, [$f]: Mf.shells },
  Xj = ks.resolve("aliases").read((e) => e.hangar.shared.Crew("resId")),
  Yj = { rootId: Xj };
function Jj({ screenModeEnabled: e, className: t }) {
  const a = ct(),
    s = er().model.selectedVehicle(),
    n = Da((e, t) => {
      const s = We(Kj, e);
      s && a.push(s, t);
    });
  return (0, rr.jsx)(p, {
    id: Xj,
    fallback: () => (0, rr.jsx)(G, {}),
    children: (0, rr.jsx)("div", {
      className: cs(Fj, e && Wj, t),
      children: (0, rr.jsxs)(fj, {
        className: qj,
        children: [
          Uj.render(
            (0, rr.jsxs)(tu, {
              options: Yj,
              children: [(0, rr.jsx)(gv, {}), (0, rr.jsx)(_j, { className: Zj })],
            }),
          ),
          (0, rr.jsxs)(Zy, {
            children: [
              (0, rr.jsx)(Xy, { className: Gj, onSectionClick: n }, s ? s.id : "-1"),
              (0, rr.jsx)(yj, {
                options: { rootId: R.aliases.frontline.loadout.BattleAbilities("resId") },
                children: (0, rr.jsx)(zj, {}),
              }),
            ],
          }),
        ],
      }),
    }),
  });
}
var Qj = ks.resolve("aliases"),
  ew = "small",
  tw = "large",
  aw = "vehicle",
  sw = "crew",
  nw = "customization",
  rw = {
    nationChange: "nationChange",
    aboutVehicle: "aboutVehicle",
    repairs: "repairs",
    fieldModification: "fieldModification",
    vehSkillTree: "vehSkillTree",
    compare: "compare",
    research: "research",
    armorInspector: "armorInspector",
    easyEquip: "easyEquip",
    crewRetrain: "crewRetrain",
    quickTraining: "quickTraining",
    crewOut: "crewOut",
    crewBack: "crewBack",
    crewAutoReturn: "crewAutoReturn",
    customization: "customization",
    proBoost: "proBoost",
  },
  iw = ["locked", "active", "lockedActive", "incompatibleVehicle", "incompatibleMode"],
  ow = {
    [rw.nationChange]: Qj.read((e) => e.vehicle_menu.default.NationChange("resId")),
    [rw.aboutVehicle]: Qj.read((e) => e.vehicle_menu.default.AboutVehicle("resId")),
    [rw.repairs]: Qj.read((e) => e.vehicle_menu.default.Repairs("resId")),
    [rw.fieldModification]: Qj.read((e) => e.vehicle_menu.default.FieldModification("resId")),
    [rw.vehSkillTree]: Qj.read((e) => e.vehicle_menu.default.VehSkillTree("resId")),
    [rw.compare]: Qj.read((e) => e.vehicle_menu.default.Compare("resId")),
    [rw.research]: Qj.read((e) => e.vehicle_menu.default.Research("resId")),
    [rw.armorInspector]: Qj.read((e) => e.vehicle_menu.default.ArmorInspector("resId")),
    [rw.easyEquip]: Qj.read((e) => e.vehicle_menu.default.EasyEquip("resId")),
    [rw.crewRetrain]: Qj.read((e) => e.vehicle_menu.default.CrewRetrain("resId")),
    [rw.quickTraining]: Qj.read((e) => e.vehicle_menu.default.QuickTraining("resId")),
    [rw.crewOut]: Qj.read((e) => e.vehicle_menu.default.CrewOut("resId")),
    [rw.crewBack]: Qj.read((e) => e.vehicle_menu.default.CrewBack("resId")),
    [rw.crewAutoReturn]: Qj.read((e) => e.vehicle_menu.default.CrewAutoReturn("resId")),
    [rw.customization]: Qj.read((e) => e.vehicle_menu.default.Customization("resId")),
    [rw.proBoost]: Qj.read((e) => e.vehicle_menu.default.ProBoost("resId")),
  },
  lw = Object.values(rw);
var cw = {
    vehicleChassis: "track",
    vehicleEngine: "engine",
    vehicleGun: "gun",
    vehicleWheels: "wheel",
    vehicleTurret: "turret",
    vehicleRadio: "radio",
  },
  dw = {
    vehicleGun: 0,
    vehicleTurret: 1,
    vehicleRadio: 2,
    vehicleEngine: 3,
    vehicleChassis: 4,
    vehicleWheels: 5,
  };
function uw(e) {
  return dw[e] ?? 0;
}
var mw = "warning",
  pw = "critical",
  _w = "enabled",
  hw = "disabled",
  gw = "unavailable",
  fw = [sw, aw, nw],
  vw = {
    vehicle: [
      ow.nationChange,
      ow.aboutVehicle,
      ow.repairs,
      ow.fieldModification,
      ow.vehSkillTree,
      ow.compare,
      ow.research,
      ow.armorInspector,
      ow.easyEquip,
      ow.proBoost,
    ],
    crew: [ow.crewRetrain, ow.quickTraining, ow.crewOut, ow.crewBack],
  };
var bw = _e({
    state: se(),
    counter: le(),
    stateReason: Ie(se()),
    researchItems: Ie(I(se())),
    params: Ie(
      _e({
        tooltipKey: Ie(se()),
        expirationTimestamp: Ie(le()),
        vehicle: Ie(se()),
        isActive: Ie(y()),
      }),
    ),
  }),
  [xw, yw] = ds("VehicleMenuModel")(
    ({ observableModel: e, requires: { vehicleInfo: t } }) => {
      const a = { opened: Ja.box(!1), screenID: Ja.box(null), menuItems: e.dict("menuEntries") },
        s = Na.structural((e) => {
          const t = a.menuItems.get(e);
          if (!t)
            return (
              console.error(`Error getting menuItem with id: ${e}`),
              { state: hw, counter: -1 }
            );
          try {
            return L(bw, JSON.parse(t));
          } catch (s) {
            return (console.error(s), { state: hw, counter: -1 });
          }
        }),
        n = Na.shallow(() => {
          const { researchItems: e } = s(ow.research);
          return e ? b(e, (e, t) => uw(e) - uw(t))[0] : void 0;
        }),
        r = Na.shallow((e) => {
          if (t.model.selectedVehicleStatistics()?.status === Oc) return hw;
          const a = [];
          let n = !1;
          for (const t of e) {
            const e = s(t);
            if ((a.push(e.state), e.state === pw)) return pw;
            e.state === mw && (n = !0);
          }
          const r = a.every((e) => e === hw);
          return ((i = r), n ? mw : i ? hw : _w);
          var i;
        });
      return { ...a, computes: { getMenuItem: s, getButtonState: r, researchItem: n } };
    },
    ({ externalModel: e, model: t }) => ({
      open: J((e) => {
        (t.opened.set(!0), t.screenID.set(e));
      }),
      close: J(() => {
        (t.opened.set(!1), t.screenID.set(null));
      }),
      navigateTo: e.createCallback((e) => ({ entry: e }), "onNavigate"),
    }),
    { useRequires: () => ({ vehicleInfo: er() }) },
  ),
  [Cw, jw] = ds("KeyBindingsProvider")((e) => ({
    vehicleMenu: {
      ...e.observableModel.primitives({ upgrades: rw.vehSkillTree }, "vehicleMenu"),
      ...e.observableModel.primitives(
        {
          retrainCrew: rw.crewRetrain,
          quickTraining: rw.quickTraining,
          returnCrew: rw.crewBack,
          aboutVehicle: rw.aboutVehicle,
          upgrades: rw.fieldModification,
          compare: rw.compare,
          research: rw.research,
          armor: rw.armorInspector,
          quickService: rw.easyEquip,
          customization: rw.customization,
        },
        "vehicleMenu",
      ),
    },
  })),
  ww = "MenuButton_base__disabled_2d840da1",
  Nw = "MenuButton_base__opened_d9d84dd",
  Iw = "MenuButton_background_80afe673",
  Sw = "MenuButton_background__hidden_a0ead688",
  kw = "MenuButton_overlay_fdbd550d",
  Pw = "MenuButton_arrow_5a0b183c",
  Ew = "MenuButton_icon_e994a077",
  Mw = Ss("MenuButton", {
    element: "div",
    className: "MenuButton_3f57027c",
    cva: { variants: { state: { [hw]: ww, opened: Nw } } },
  }),
  Lw = ks.resolve("strings"),
  Aw = ks.resolve("views"),
  Tw = Hs(function ({
    type: e,
    opened: t,
    buttonState: a,
    crewBackWarning: s,
    iconPostfix: n,
    size: r = ew,
    onMouseEnter: i,
    onClick: o,
    classNames: l,
    className: c,
    ...d
  }) {
    const u = jw(),
      [m, p] = (0, jn.useState)(!1),
      _ = It(),
      h = Qa(t),
      { model: g } = yw(),
      v = u.model.vehicleMenu?.[e]?.get(),
      b = v ? ae(v) : void 0,
      { stateReason: x } = g.computes.getMenuItem(ow.crewBack),
      y = a === hw,
      C = t ? "opened" : a,
      j = ps(r, "upscale"),
      w = (e === sw && s) || y ? _w : a,
      N = y ? _w : w,
      I = bs({ body: Lw.readOrEmpty("crew_operations.return.error.noPrevious") }),
      S = f(
        "simple",
        (0, jn.useMemo)(
          () => ({
            resId: Aw.read((e) => e.mono.tooltips.tooltips("resId")),
            header: Lw.readOrEmpty(`hangar.vehicleMenu.menuButton.tooltip.${e}.header`),
            body: Lw.readOrEmpty(`hangar.vehicleMenu.menuButton.tooltip.${e}.body`),
            keyButtonCode: b,
            keyButtonTitle: Lw.readOrEmpty("hangar.vehicleMenu.menuButton.tooltip.hotkey.title"),
          }),
          [e, b],
        ),
      );
    (0, jn.useEffect)(() => {
      t && !1 === h && _.play("expand", { target: "vehicle-menu-widget:button" });
    }, [t, h, _]);
    const k = y && e === sw && "battleNeeded" === x ? I : y ? void 0 : S;
    return (0, rr.jsxs)(Mw, {
      ...d,
      ...k,
      state: C,
      onMouseEnter: function (e) {
        (k?.onMouseEnter(e),
          y ||
            (_.play("mouse-enter", { target: "vehicle-menu-widget:button", original: e }),
            p(!0),
            i?.(e)));
      },
      onMouseLeave: function () {
        (p(!1), k?.onMouseLeave());
      },
      onClick: function (t) {
        (k?.onClick(),
          y || (_.play("click", { target: "vehicle-menu-widget:button", original: t }), o(e)));
      },
      "data-test-id": e,
      className: l?.base,
      children: [
        !y &&
          (0, rr.jsxs)(rr.Fragment, {
            children: [
              (0, rr.jsx)(_s, {
                path: `hangar.vehicleMenu.${j}.btn_${w}`,
                className: cs(Iw, (m || t) && Sw, l?.background),
              }),
              (0, rr.jsx)(_s, {
                path: `hangar.vehicleMenu.${j}.btn_${w}_opened`,
                className: cs(Iw, !t && Sw, l?.backgroundOpened),
              }),
              !t &&
                (0, rr.jsx)(_s, {
                  path: `hangar.vehicleMenu.${j}.btn_${w}_hover`,
                  className: cs(Iw, !m && Sw, l?.backgroundHovered),
                }),
            ],
          }),
        e !== nw &&
          !t &&
          (0, rr.jsx)(_s, {
            path: `hangar.vehicleMenu.${j}.arrow_${N}`,
            className: cs(Pw, l?.arrow),
          }),
        (!t || y) &&
          (0, rr.jsx)(_s, {
            path: `hangar.vehicleMenu.${j}.${e}_${n}`,
            className: cs(Ew, l?.icon),
          }),
        y &&
          (0, rr.jsx)(_s, {
            path: `hangar.vehicleMenu.${j}.btn_disabled`,
            className: cs(kw, l?.overlay),
          }),
      ],
    });
  }),
  Dw = {
    "media-wrapper": "MenuItem_media-wrapper_28be5e00",
    root: "MenuItem_root_28be5e00",
    hover: "MenuItem_hover_344959e8",
    disabledOverlay: "MenuItem_disabledOverlay_f4ce8f15",
    sideBorders: "MenuItem_sideBorders_52632696",
    base: "MenuItem_37b3ba75",
    inner: "MenuItem_inner_7b3a0c1",
    inner__disabled: "MenuItem_inner__disabled_be62900b",
    sideBorder: "MenuItem_sideBorder_7c07d72d",
    inner__warning: "MenuItem_inner__warning_28be5e00",
    sideBorder__left: "MenuItem_sideBorder__left_3188559f",
    inner__critical: "MenuItem_inner__critical_28be5e00",
    sideBorder__right: "MenuItem_sideBorder__right_b63d0a05",
    icon: "MenuItem_icon_cfe743f0",
    iconImage: "MenuItem_iconImage_5c399bab",
    title: "MenuItem_title_4f50bf02",
    title__hasHotkey: "MenuItem_title__hasHotkey_f656354b",
    counter: "MenuItem_counter_700c76dd",
    hotKey: "MenuItem_hotKey_5db2e99",
    hotKeyBackground: "MenuItem_hotKeyBackground_a1365519",
    hotKeyBorder: "MenuItem_hotKeyBorder_f7c4ab4c",
    hotKeyContent: "MenuItem_hotKeyContent_8c7bbb86",
    warningIcon: "MenuItem_warningIcon_9a54d136",
  },
  Bw = ks.resolve("strings"),
  Ow = ks.resolve("intl"),
  Vw = (e) => {
    const [t, a] = is(Ot(ts(e), Oa()), ["h", "m"]);
    return `${((e) => String(Math.max(parseInt(e), 0)).padStart(2, "0"))(t)}:${((e) => String(Math.max(parseInt(e, 10) || 0, 1)).padStart(2, "0"))(a)}`;
  },
  Rw = Hs(function ({ id: e, size: t = ew, researchItem: a, onClick: s }) {
    const n = It(),
      { model: r } = yw(),
      { state: i, stateReason: o, counter: l, params: c } = r.computes.getMenuItem(e),
      d = ps(t, "upscale"),
      m = jw().model.vehicleMenu,
      p = (function (e) {
        const t = lw.find((t) => ow[t] === e);
        return (u(void 0 !== t, `Unknown menu item id = ${e}`), t);
      })(e),
      _ = m?.[p]?.get(),
      h = _ ? ae(_) : void 0,
      f = bs({ body: Bw.readOrEmpty("crew_operations.return.error.noPrevious") }),
      v = bs({
        body: Bw.readOrEmpty("crew_operations.return.warning.memberDemobilized.tooltip.body"),
      }),
      b = c?.expirationTimestamp,
      x = c?.tooltipKey,
      y = e === ow.proBoost && x && ((e) => iw.includes(e))(x),
      C = b ? Vw(b) : "",
      j = bs({
        header: y ? Bw.readOrEmpty(`hangar.vehicleMenu.proBoostTooltips.${x}.header`) : "",
        body: y
          ? He(Bw.readOrEmpty(`hangar.vehicleMenu.proBoostTooltips.${x}.body`), {
              time: C,
              vehicle: c?.vehicle ?? "",
            })
          : "",
      });
    if (i === gw) return null;
    return (0, rr.jsx)("div", {
      className: Dw.base,
      ...(e === ow.crewBack &&
        (i === hw && "battleNeeded" === o
          ? f
          : i === _w && "crewMembersRetired" === o
            ? v
            : void 0)),
      ...(y && j),
      children: (0, rr.jsxs)("div", {
        className: cs(Dw.inner, Dw[`inner__${i}`]),
        onClick: function (t) {
          i !== hw && (n.play("click", { target: "vehicle-menu-widget:item", original: t }), s(e));
        },
        onMouseEnter: function (e) {
          i !== hw && n.play("mouse-enter", { target: "vehicle-menu-widget:item", original: e });
        },
        "data-test-id": p,
        children: [
          (0, rr.jsx)("div", { className: Dw.hover }),
          (0, rr.jsxs)("div", {
            className: Dw.sideBorders,
            children: [
              (0, rr.jsx)("div", { className: cs(Dw.sideBorder, Dw.sideBorder__left) }),
              (0, rr.jsx)("div", { className: cs(Dw.sideBorder, Dw.sideBorder__right) }),
            ],
          }),
          (0, rr.jsx)("div", {
            className: Dw.icon,
            children: (0, rr.jsx)(_s, {
              path: `hangar.vehicleMenu.${d}.${p}${i === mw && a && e === ow.research ? `_${cw[a]}` : i === _w || i === hw ? "" : `_${i}`}`,
              className: Dw.iconImage,
            }),
          }),
          (0, rr.jsxs)("div", {
            className: cs(Dw.title, h && Dw.title__hasHotkey),
            children: [
              (0, rr.jsx)(g, {
                path: `hangar.vehicleMenu.menuItem.${p}.title`,
                params:
                  e === ow.proBoost
                    ? c?.isActive
                      ? {
                          activeOrCountdown: Bw.readOrEmpty(
                            "hangar.vehicleMenu.menuItem.proBoost.active",
                          ),
                        }
                      : c?.expirationTimestamp
                        ? { activeOrCountdown: `[${C}]` }
                        : { activeOrCountdown: "" }
                    : {},
              }),
              l > 0 &&
                (0, rr.jsx)(g, {
                  path: "hangar.vehicleMenu.menuItem.counter",
                  params: { count: Ow.formatNumber("integral", l) },
                  className: Dw.counter,
                }),
              h &&
                (0, rr.jsx)(Ta, {
                  silent: !0,
                  idle: !0,
                  keyCode: h,
                  classNames: {
                    base: Dw.hotKey,
                    background: Dw.hotKeyBackground,
                    border: Dw.hotKeyBorder,
                    content: Dw.hotKeyContent,
                  },
                  children: (0, rr.jsx)(Ta.Code, {}),
                }),
            ],
          }),
          e === ow.crewBack &&
            i === _w &&
            "crewMembersRetired" === o &&
            (0, rr.jsx)(_s, { path: "hangar.vehicleMenu.icon_alert", className: Dw.warningIcon }),
          i === hw && (0, rr.jsx)("div", { className: Dw.disabledOverlay }),
        ],
      }),
    });
  }),
  Hw = "MenuList_border_478c22c4",
  $w = "MenuList_bottom_c28a1943",
  zw = "MenuList_cea03bfd",
  Fw = "MenuList_content_102c53c8",
  Ww = "MenuList_checkbox_d5741047",
  qw = "MenuList_label_8b8f8c2a",
  Zw = "MenuList_checkbox__checked_5a4f974e",
  Gw = "MenuList_checkbox__disabled_5a4f974e",
  Uw = "MenuList_topItem_6a7889e4",
  Kw = "MenuList_autoReturn_841be836",
  Xw = "MenuList_divider_af7e286c",
  Yw = "MenuList_bottomBorder_bad1a96",
  Jw = "MenuList_notch_265b362a",
  Qw = Hs(function ({ buttonState: e, size: t, className: a }) {
    const { model: s, controls: n } = yw(),
      r = s.opened.get(),
      i = s.screenID.get(),
      o = s.computes.researchItem(),
      l = ks.resolve("strings"),
      c = bs({ body: l.readOrEmpty("crew_operations.return.error.noPrevious") }),
      d = lt(r, {
        from: { opacity: 0 },
        enter: { opacity: 1 },
        leave: { opacity: 0 },
        config: Be.stiff,
      });
    if (!i) return;
    const { state: u, stateReason: m } = s.computes.getMenuItem(ow.crewAutoReturn),
      p = u === gw;
    const _ = e === pw || e === mw ? e : "default",
      h = u === _w;
    return (
      i !== nw &&
      d(
        (e, s) =>
          s &&
          (0, rr.jsxs)(q.div, {
            className: cs(zw, a),
            style: e,
            children: [
              (0, rr.jsxs)("div", {
                className: Fw,
                children: [
                  i === sw &&
                    (0, rr.jsxs)("div", {
                      className: Uw,
                      children: [
                        (0, rr.jsx)("div", {
                          className: Kw,
                          ...(p && "battleNeeded" === m && c),
                          children: (0, rr.jsx)(Ct, {
                            checked: h,
                            disabled: p,
                            onCheckedChange: () => n.navigateTo(ow.crewAutoReturn),
                            size: Ae.small,
                            className: cs(Ww, h && Zw, p && Gw),
                            classNames: { label: qw },
                            children: l.readOrEmpty(
                              "hangar.vehicleMenu.menuItem.crewAutoReturn.title",
                            ),
                          }),
                        }),
                        (0, rr.jsx)("div", { className: Xw }),
                      ],
                    }),
                  Ve(vw[i], (e) =>
                    (0, rr.jsx)(
                      Rw,
                      {
                        id: e,
                        size: t,
                        onClick: (e) => {
                          (n.navigateTo(e), n.close());
                        },
                        researchItem: o,
                      },
                      e,
                    ),
                  ),
                ],
              }),
              (0, rr.jsx)("div", { className: Hw }),
              (0, rr.jsxs)("div", {
                className: $w,
                children: [
                  (0, rr.jsx)(_s, {
                    path: `hangar.vehicleMenu.menu_bottom_left_${_}`,
                    className: Yw,
                  }),
                  (0, rr.jsx)("div", { className: Jw }),
                  (0, rr.jsx)(_s, {
                    path: `hangar.vehicleMenu.menu_bottom_right_${_}`,
                    className: Yw,
                  }),
                ],
              }),
            ],
          }),
      )
    );
  }),
  eN = new Set(["text", "search", "url", "tel", "email", "password", "number"]);
var tN = Hs(function () {
    const e = jw().model.vehicleMenu,
      t = It(),
      { model: a, controls: n } = yw(),
      r = a.opened.get();
    (gt(r ? "Escape" : "NONE", n.close), gt(r ? "Space" : "NONE", n.close));
    for (const [s, i] of Object.entries(e)) {
      const e = ae(i.get()),
        o = ow[s],
        { state: l } = a.computes.getMenuItem(o);
      mt(l === hw || l === gw ? "NONE" : e, (e) => {
        var a;
        e.shiftKey ||
          e.altKey ||
          e.ctrlKey ||
          (document.activeElement &&
            !((a = document.activeElement) instanceof HTMLTextAreaElement
              ? a.disabled || a.readOnly
              : !(a instanceof HTMLInputElement
                  ? !a.disabled && !a.readOnly && eN.has(a.type)
                  : a instanceof HTMLElement && a.isContentEditable))) ||
          (t.play("hot-key", { target: "wehicle_menu_widget:screen", original: e }),
          it.contextMenu.hideAll(),
          n.navigateTo(o),
          r && n.close());
      });
    }
    return (
      s(() =>
        qa.down(([e, t]) => {
          "outside" === t && n.close();
        }),
      ),
      null
    );
  }),
  aN = {
    "media-wrapper": "VehicleMenuWidget_media-wrapper_de68ce43",
    root: "VehicleMenuWidget_root_de68ce43",
    base: "VehicleMenuWidget_80bb906f",
    menu: "VehicleMenuWidget_menu_54752133",
    menu__vehicle: "VehicleMenuWidget_menu__vehicle_6691c8cb",
    menu__crew: "VehicleMenuWidget_menu__crew_9d49d2d3",
    menu__customization: "VehicleMenuWidget_menu__customization_7cda5bdd",
  },
  sN = { rootId: ks.resolve("aliases").read((e) => e.hangar.shared.KeyBindings("resId")) },
  nN = Hs(function ({ className: e, keyBindingsProviderOptions: t = sN }) {
    const { model: a, controls: s } = yw(),
      n = a.screenID.get(),
      r = a.computes.getButtonState,
      i = a.computes.researchItem(),
      { state: o } = a.computes.getMenuItem(ow.crewAutoReturn),
      { state: l } = a.computes.getMenuItem(ow.crewBack),
      { state: c } = a.computes.getMenuItem(ow.fieldModification),
      { state: d } = a.computes.getMenuItem(ow.vehSkillTree),
      { state: u } = a.computes.getMenuItem(ow.easyEquip),
      { state: m } = a.computes.getMenuItem(ow.quickTraining),
      { state: p } = a.computes.getMenuItem(ow.customization),
      { state: _ } = a.computes.getMenuItem(ow.proBoost),
      h = za(
        (0, jn.useCallback)(() => {
          s.close();
        }, [s]),
      ),
      g = wt({ value: ew }, { large: { value: tw } }),
      f = r(vw[sw]),
      v = { [aw]: r(vw[aw]), [sw]: f, [nw]: p };
    function b(e) {
      if (e === aw) {
        const e = v[aw] === hw ? "_disable" : "";
        if (v[aw] === pw) return v[aw];
        if (u === mw) return `${rw.easyEquip}${e}`;
        if (i) return `${cw[i]}${e}`;
        if (c === mw) return `${rw.fieldModification}${e}`;
        if (d === mw) return `${rw.vehSkillTree}${e}`;
        if (_ === mw) return `${rw.proBoost}${e}`;
      } else if (e === sw) {
        if (m === mw) return mw;
        if (l === pw || l === mw) return "default";
        if (o === _w && v[sw] !== mw) return "autoReturn";
      }
      return "default";
    }
    function x(e) {
      e !== nw ? (n === e ? s.close() : s.open(e)) : s.navigateTo(ow.customization);
    }
    return (
      (0, jn.useEffect)(() => {
        n === sw && f === hw && s.close();
      }, [n, f, s]),
      (0, rr.jsx)(Cw, {
        options: t,
        children: (0, rr.jsxs)("div", {
          ref: h,
          className: cs(aN.base, e),
          children: [
            n !== nw &&
              (0, rr.jsx)("div", {
                className: cs(aN.menu, n && aN[`menu__${n}`]),
                children: (0, rr.jsx)(Qw, { buttonState: n ? r(vw[n]) : _w, size: g.value }),
              }),
            fw.map((e) =>
              (0, rr.jsx)(
                Tw,
                {
                  type: e,
                  opened: n === e,
                  buttonState: v[e],
                  crewBackWarning: m !== mw && (l === pw || l === mw),
                  iconPostfix: b(e),
                  size: g.value,
                  onClick: x,
                },
                e,
              ),
            ),
            (0, rr.jsx)(tN, {}),
          ],
        }),
      })
    );
  }),
  rN = "VehicleMenu_menu_2b35ec",
  iN = "VehicleMenu_menu__screenMode_bf623a9b",
  oN = { rootId: ks.resolve("aliases").read((e) => e.hangar.shared.VehicleMenu("resId")) };
function lN({ className: e, screenModeEnabled: t }) {
  return (0, rr.jsx)(xw, {
    options: oN,
    children: (0, rr.jsx)("div", { className: cs(rN, t && iN, e), children: (0, rr.jsx)(nN, {}) }),
  });
}
var cN = (e) => {
  const t = e?.showDelay || 400,
    a = (0, jn.useRef)({ ...e.args }),
    s = (0, jn.useRef)(null),
    n = c(),
    r = S({ ...e, showDelay: 0, args: a.current });
  return {
    containerRef: s,
    tooltipProps: {
      ...r,
      onMouseEnter: (i) => {
        n.run(() => {
          if (s.current) {
            const t = s.current.getBoundingClientRect(),
              n = s.current.parentElement?.getBoundingClientRect();
            (Object.assign(a.current, e.args),
              (a.current.positionY = Math.floor(et(t.y)) - 13),
              (a.current.positionX = Math.floor(et(n?.x || t.x)) - 10));
          }
          r.onMouseEnter(i);
        }, t);
      },
      onMouseLeave: () => {
        (n.clear(), r.onMouseLeave());
      },
    },
  };
};
function dN() {
  const { screenWidthRem: e } = Cs();
  return e < fs.large.width;
}
var uN = jn.createContext(void 0);
function mN() {
  const e = (0, jn.useContext)(uN);
  return (u(void 0 !== e, "WidgetAnimationContext is undefined"), e);
}
var pN = "small",
  _N = "big",
  hN = "full",
  gN = "medium",
  fN = "small",
  vN = "appear",
  bN = "fadeIn",
  xN = "slideUpIn",
  yN = "battlePass",
  CN = "missions",
  jN = "personalMissions",
  wN = { from: { y: 0, x: 0, opacity: 0, height: 0, width: 0 } };
function NN(e, t) {
  return e >= 2
    ? (function (e) {
        return 4 === e ? gN : 5 === e ? fN : hN;
      })(t)
    : hN;
}
function IN(e) {
  const t = new Map();
  for (let a = 0; a <= e.length; a++) {
    const s = e[a];
    t.set(s, { rowIndex: a, columnIndex: 0, size: hN });
  }
  return t;
}
function SN(e) {
  return -(Math.cos(Math.PI * e) - 1) / 2;
}
var kN = { duration: 400, easing: SN };
new Map([
  [yN, { position: 0 }],
  [
    "events",
    {
      position: 100,
      layoutCreator: function (e) {
        const t = new Map();
        for (let a = 0; a <= e.length; a++) {
          const s = e[a];
          t.set(s, {
            rowIndex: Math.min(a, 2),
            columnIndex: Math.max(a - 2, 0),
            size: NN(a, e.length),
          });
        }
        return t;
      },
    },
  ],
  [
    "missionsSlider",
    {
      position: 150,
      adaptive: { [pN]: { gap: 7, cardHeight: 28 }, [_N]: { gap: 10, cardHeight: 28 } },
    },
  ],
  [
    CN,
    {
      position: 200,
      adaptive: { [pN]: { gap: 7, maxRowsAmount: 3 }, [_N]: { gap: 10, maxRowsAmount: 3 } },
    },
  ],
  [
    jN,
    {
      position: 300,
      adaptive: {
        [pN]: {
          layoutCreator: function (e, t) {
            if (1 === e.length || t.breakpoint.weight >= fs.medium.weight) return IN(e);
            const a = new Map();
            for (let s = 0; s < e.length; s++) {
              const t = e[s];
              a.set(t, { rowIndex: Math.floor(s / 2), columnIndex: s % 2, size: gN });
            }
            return a;
          },
        },
      },
    },
  ],
]);
var PN = { duration: 200, easing: SN };
function EN(e, t, a, s = !0) {
  const n = a.getCardAnimationProps(e),
    r = a.getCardRow(e),
    i = a.getMaxCardRow(t),
    o = a.getVisibleRowsAmount(),
    l = s ? kN.duration : 0,
    c = t.includes(e);
  return {
    from: c ? { ...n, opacity: 0 } : {},
    to: n,
    delay: c ? l + Math.max(100 * (o - i), 0) : Math.max(100 * (o - i - r), 0),
    config: kN,
  };
}
function MN(e) {
  return { to: { x: V(et(e) + 100), opacity: 0 }, config: { duration: 300, easing: SN } };
}
function LN(e, t, a) {
  const s = e.dataset.id,
    n = t.getCard(s),
    r = t.getCardHeight(s);
  if (!n || !r) return "";
  const i = et(n.getPropValue("opacity")),
    o = et(n.getPropValue("height"));
  if (o < r || 0 === i) return "";
  const l = et(n.getPropValue("width")),
    c = et(n.getPropValue("y")),
    d = et(n.getPropValue("x")),
    u = t.getCardSize(s) !== hN,
    m = Math.round(d),
    p = Math.round(d + l) - 1,
    _ = Math.round(c),
    h = {
      top: `H${m}x${_}`,
      bottom: `H${m}x${Math.round(c + o) - 1}`,
      left: `V${_}x${m}`,
      right: `V${_}x${p}`,
    },
    g = {};
  return (
    Object.keys(h).forEach((e) => {
      const t = !a.has(h[e]) || (u && ("top" === e || "bottom" === e));
      (t && a.add(h[e]), (g[e] = t));
    }),
    (function (e) {
      return [e?.top, e?.right, e?.bottom, e?.left]
        .map((e) => (void 0 === e || e ? "1rem" : "0"))
        .join(" ");
    })(g)
  );
}
var AN = {
    [pN]: { gap: 0, cardHeight: 74, cardWidth: 241 },
    [_N]: { gap: 0, cardHeight: 74, cardWidth: 319 },
  },
  TN = { [hN]: 1, [gN]: 0.5, [fN]: 1 / 3 };
function DN(e, t) {
  return { ...AN[e], ...t?.[e] };
}
var BN = class {
    _widgetConfig;
    _sortedGroupsCache;
    _cards = new Map();
    _cachedLayout;
    _sliders;
    constructor(e) {
      this._widgetConfig = e;
    }
    get _layout() {
      return (
        void 0 === this._cachedLayout && (this._cachedLayout = this._buildLayout()),
        this._cachedLayout
      );
    }
    get _sortedGroups() {
      return (
        void 0 === this._sortedGroupsCache &&
          (this._sortedGroupsCache = (function (e, t) {
            return Array.from(e.entries()).sort(
              (e, a) => (t?.get(e[0]) ?? e[1].position) - (t?.get(a[0]) ?? a[1].position),
            );
          })(this._widgetConfig.groups, this._groupPositionOverride)),
        this._sortedGroupsCache
      );
    }
    get _groupPositionOverride() {
      return new Map(
        this.sliders.reduce((e, { sliderId: t, items: a }) => {
          const s = this._widgetConfig.groups.get(t).position + 1;
          return (a.forEach(({ id: t }) => e.push([t, s])), e);
        }, []),
      );
    }
    _buildLayout() {
      const e = {
          sortedCards: [],
          animationProps: new Map(),
          groupCardIds: new Map(),
          cardToRow: new Map(),
          cardSizes: new Map(),
          rowsAmountByGroup: new Map(),
          visibleRowsAmount: 0,
        },
        t = new Map(
          this.sliders.reduce(
            (e, { selectedSlideId: t, items: a }) => (
              a.forEach(({ id: a }) => e.push([a, t === a])),
              e
            ),
            [],
          ),
        ),
        a = this._widgetConfig.visibleRowsAmount + this.sliders.length,
        s = this._groupPositionOverride;
      var n;
      ((e.sortedCards = Array.from(this._cards).sort(([, e], [, t]) => {
        if (e.groupId !== t.groupId) {
          const a = this._widgetConfig.groups.get(e.groupId),
            n = this._widgetConfig.groups.get(t.groupId);
          if (a && n) return (s.get(e.groupId) ?? a.position) - (s.get(t.groupId) ?? n.position);
        }
        return e.position - t.position;
      })),
        (n = e.groupCardIds),
        e.sortedCards.forEach(([e, { groupId: t }]) => {
          (n.has(t) || n.set(t, []), n.get(t)?.push(e));
        }));
      let r = 0,
        i = 0;
      return (
        this._sortedGroups.forEach(([s, n]) => {
          const o = e.groupCardIds.get(s);
          if (!o || !1 === t.get(s)) return;
          const {
            gap: l,
            cardHeight: c,
            cardWidth: d,
            maxRowsAmount: u,
            layoutCreator: m,
          } = DN(this._widgetConfig.size, n.adaptive);
          r > 0 && !t.has(s) && l && (r += V(l));
          const p = V(c),
            _ = o.filter((e) => this._cards.get(e)?.visible),
            h = (m || n.layoutCreator || IN)(_, this._widgetConfig.media);
          let g = 0;
          for (const t of o) {
            const s = h.get(t);
            if (!s) {
              e.animationProps.set(t, wN.from);
              continue;
            }
            const { rowIndex: n, columnIndex: o, size: l } = s,
              c = Math.ceil(d * TN[l]),
              m = n + 1,
              _ = i + m,
              f = void 0 === u || m <= u;
            (e.cardToRow.set(t, _),
              e.cardSizes.set(t, l),
              e.animationProps.set(t, {
                height: p,
                width: V(c),
                opacity: f && a >= _ ? 1 : 0,
                x: V(o * (c - 1)),
                y: r + n * (p - 1),
              }),
              f && (g = Math.max(m, g)));
          }
          ((r += (p - 1) * g), (i += g), e.rowsAmountByGroup.set(s, g));
        }),
        (e.visibleRowsAmount = i),
        e
      );
    }
    _buildSlidersCache() {
      const e = (e) =>
        Array.from(this.getRegisteredCards().entries()).some(
          ([, t]) => t.visible && t.groupId === e,
        );
      return Array.from(this.getWidgetConfig().groups.entries())
        .filter(
          ([, { slider: t }]) => void 0 !== t && t.items.filter(({ id: t }) => e(t)).length > 1,
        )
        .map(([t, { slider: a }]) => {
          const s = a.items.filter(({ id: t }) => e(t)).sort((e, t) => e.weight - t.weight);
          return {
            sliderId: t,
            selectedSlideId:
              a.selectedSlideId && e(a.selectedSlideId) ? a.selectedSlideId : s[0].id,
            items: s,
          };
        });
    }
    clearGroupsCache() {
      this._sortedGroupsCache = void 0;
    }
    clearCachedLayout() {
      this._cachedLayout = void 0;
    }
    clearSliderCache() {
      this._sliders = void 0;
    }
    clearCache() {
      (this.clearCachedLayout(), this.clearSliderCache(), this.clearGroupsCache());
    }
    register(e, t) {
      (this._cards.set(e, t), this.clearCache());
    }
    updateCard(e, t) {
      const a = this._cards.get(e);
      a && (Object.assign(a, t), this.clearCache());
    }
    unregister(e) {
      (this._cards.delete(e), this.clearCache());
    }
    getRegisteredCards() {
      return this._cards;
    }
    getWidgetConfig() {
      return this._widgetConfig;
    }
    updateWidgetConfig(e) {
      (Object.assign(this._widgetConfig, e), this.clearCache());
    }
    getCard(e) {
      return this._cards.get(e);
    }
    getCardAnimationProps(e) {
      return this._layout.animationProps.get(e) || wN.from;
    }
    getCardRow(e) {
      return this._layout.cardToRow.get(e) || 0;
    }
    getCardSize(e) {
      return this._layout.cardSizes.get(e) || hN;
    }
    getCardHeight(e) {
      const t = this.getCard(e)?.groupId;
      if (!t) return;
      const a = this._widgetConfig.groups.get(t);
      return DN(this._widgetConfig.size, a?.adaptive).cardHeight;
    }
    getMaxCardRow(e) {
      return Math.max(...e.map((e) => this.getCardRow(e)));
    }
    getVisibleRowsAmount() {
      return this._layout.visibleRowsAmount;
    }
    getGroupCardIds(e) {
      return this._layout.groupCardIds.get(e) || [];
    }
    getSliderById(e) {
      return this.sliders.find((t) => e === t.sliderId);
    }
    get sliders() {
      return (
        void 0 === this._sliders && (this._sliders = this._buildSlidersCache()),
        this._sliders
      );
    }
    get cardPositionsInLayout() {
      return new Map(this._layout.sortedCards.map(([e], t) => [e, t]));
    }
    findMaxVisibleRowsInGroup(e) {
      const t = this._widgetConfig.groups.get(e);
      if (!t) return 0;
      let a = 0;
      for (let s = 0; s < this._sortedGroups.length; s++) {
        const [n] = this._sortedGroups[s];
        if (n === e) {
          const { maxRowsAmount: e } = DN(this._widgetConfig.size, t.adaptive),
            s = this._widgetConfig.visibleRowsAmount - a;
          return e ? Math.min(s, e) : s;
        }
        const r = this._layout.rowsAmountByGroup.get(n);
        r && (a += r);
      }
      return 0;
    }
    isCardDisplaying(e) {
      return void 0 !== this._layout.cardToRow.get(e);
    }
    async runCardAnimations(e) {
      await Promise.all(
        this._layout.sortedCards.map(async ([t, a]) => {
          const s = e(t, a);
          s && (await a.startLayoutAnimation(s));
        }),
      );
    }
  },
  ON = "Card_82475c",
  VN = "Card_borderHelper_9f37b536",
  RN = "Card_border_a649c143",
  HN = "Card_card__enabled_4c476d8b",
  $N = {
    [vN]: function (e, t, a) {
      const s = EN(e, t, a, !1);
      return { ...s, from: t.includes(e) ? { ...s.from, height: 0 } : s.from };
    },
    [bN]: EN,
    [xN]: function (e, t, a) {
      const s = EN(e, t, a, !1);
      if (t.includes(e)) {
        const t = a.getCardAnimationProps(e).y + V(a.getCardHeight(e));
        return { ...s, from: { ...s.from, y: t } };
      }
      return s;
    },
  };
function zN({
  children: e,
  groups: t,
  maxVisibleRowsAmount: a,
  onSlideChanged: s,
  slidersConfig: n,
  autostart: r = !0,
}) {
  const i = dN() ? pN : _N,
    o = Cs(),
    l = a ?? ((c = o.screenHeightRem) > 900 ? (c > 1016 ? 7 : 6) : 5);
  var c;
  const { enqueue: d, runDequeue: u } = (function () {
      const e = (0, jn.useRef)([]),
        t = (0, jn.useRef)(!1),
        a = (0, jn.useRef)(!1),
        s = Da(() => {
          if (t.current || !a.current) return;
          const n = e.current.shift();
          n &&
            ((t.current = !0),
            n
              .promise()
              .then(() => {
                ((t.current = !1), n.resolve(), s());
              })
              .catch(() => {
                ((t.current = !1), n.reject(), s());
              }));
        });
      return {
        enqueue: Da(
          (t) =>
            new Promise((a, n) => {
              (e.current.push({ promise: t, resolve: a, reject: n }), s());
            }),
        ),
        runDequeue: Da(() => {
          ((a.current = !0), s());
        }),
      };
    })(),
    m = (0, jn.useRef)(null),
    p = (0, jn.useRef)(r),
    _ = (0, jn.useRef)(!1),
    h = (0, jn.useRef)({}),
    g = (0, jn.useRef)(new BN({ size: i, visibleRowsAmount: l, groups: t, media: o })),
    f = (0, jn.useRef)(new Map()),
    v = Da((e) => {
      const t = m.current?.querySelectorAll(`.${VN}`);
      t &&
        (function (e, t, a) {
          const s = new Set();
          a && (a.style.borderImageWidth = LN(a, t, s));
          const n = t.cardPositionsInLayout;
          Array.from(e)
            .sort((e, t) => {
              const a = n.get(e.dataset.id) ?? 0;
              return (n.get(t.dataset.id) ?? 0) - a;
            })
            .forEach((e) => {
              e !== a && (e.style.borderImageWidth = LN(e, t, s));
            });
        })(t, g.current, e);
    }),
    b = Da(async (e) => {
      (v(),
        await g.current.runCardAnimations((t, a) => {
          const s = e({ id: t, settings: a });
          if (void 0 !== s) return { ...s, onChange: () => v() };
        }),
        v());
    }),
    x = Da(async (e = !0) => {
      if (!p.current) return;
      let t = 0,
        a = 0;
      await b(({ id: s, settings: n }) => {
        const r = g.current.getCardAnimationProps(s),
          i = r.y,
          o = n.getPropGoalValue("y");
        let l = 0;
        return (
          o !== i && (0 === n.getPropGoalValue("x") && (o > i ? t++ : a++), (l = o > i ? t : a)),
          { delay: e ? 0 : 100 * l, to: r, immediate: e, config: kN }
        );
      });
    }),
    y = Da(async (e, t = vN) => {
      const a = e.filter((e) => {
        const t = g.current.getCard(e);
        return void 0 !== t && !t.visible;
      });
      if (!a.length) return;
      a.forEach((e) => {
        g.current.updateCard(e, { visible: !0 });
      });
      const s = $N[t];
      await b((e) => s(e.id, a, g.current));
    }),
    C = Da((e, t = !0) => !(t && !g.current.getCard(e)?.visible) && g.current.isCardDisplaying(e)),
    j = ns(),
    w = Da((e, t) => {
      const a = g.current.getSliderById(e),
        n = f.current.get(e) || a?.selectedSlideId;
      if (!a || !a.items.some(({ id: e }) => t === e) || n === t) return;
      const r = n,
        i =
          a.items.findIndex(({ id: e }) => e === r) < a.items.findIndex(({ id: e }) => e === t)
            ? "left"
            : "right",
        o = (e, t) =>
          Array.from(g.current.getRegisteredCards().entries())
            .filter(([, t]) => t.groupId === e)
            .forEach(([e]) => t(e)),
        l = f.current.has(e);
      (f.current.set(e, t),
        j.trigger("change", e, t, r, i),
        s?.(e, t),
        l ||
          d(async () => {
            const t = new Map(g.current.getWidgetConfig().groups),
              a = t.get(e);
            if (!a || !a.slider) return;
            const s = f.current.get(e);
            if ((f.current.delete(e), s === a.slider.selectedSlideId)) return;
            const n = new Map();
            (o(r, (e) =>
              n.set(
                e,
                (function (e, t, a) {
                  const s = a.getCardAnimationProps(e);
                  if (1 !== s.opacity) return;
                  const n = "left" === t ? -1 : 1;
                  return { to: { x: s.x + V(50 * n), opacity: 0 }, config: PN };
                })(e, i, g.current),
              ),
            ),
              (a.slider.selectedSlideId = s),
              g.current.updateWidgetConfig({ groups: t }),
              o(s, (e) =>
                n.set(
                  e,
                  (function (e, t, a) {
                    const s = a.getCardAnimationProps(e);
                    if (1 !== s.opacity) return;
                    const n = "left" === t ? -1 : 1;
                    return {
                      from: { ...s, x: s.x - V(50 * n), opacity: 0 },
                      to: { x: s.x, opacity: 1 },
                      delay: PN.duration,
                      config: PN,
                    };
                  })(e, i, g.current),
                ),
              ),
              await b((e) => n.get(e.id)));
          }));
    }),
    N = Da(() => {
      (p.current ? console.warn("Animations loop already started") : ((p.current = !0), x()),
        _.current || ((_.current = !0), u()));
    }),
    I = (0, jn.useMemo)(() => {
      const e = (e, t) => {
          const a = new Map(g.current.getWidgetConfig().groups);
          (a.set(e, t), g.current.updateWidgetConfig({ groups: a }));
        },
        t = (e) => {
          const t = new Map(g.current.getWidgetConfig().groups);
          (t.delete(e), g.current.updateWidgetConfig({ groups: t }));
        },
        a = (e, t) => {
          const a = g.current.getSliderById(e);
          void 0 === a || t < 0 || a.items.length <= t || w(e, a.items[t].id);
        },
        s = (e) => {
          h.current[e] || (h.current[e] = { init: ie(), mount: ie() });
        };
      return {
        getImmutableGroupsConfig: () => new Map(g.current.getWidgetConfig().groups),
        updateGroupsConfig: (e) => {
          const t = new Map(g.current.getWidgetConfig().groups);
          (Array.from(e.entries()).forEach((e) => t.set(...e)),
            g.current.updateWidgetConfig({ groups: t }));
        },
        registerCard: (e, t) => {
          g.current.register(e, t);
        },
        unregisterCard: (e) => {
          g.current.unregister(e);
        },
        updateCard: (e, t) => {
          g.current.updateCard(e, t);
        },
        isVisible: (e) => Boolean(g.current.getCard(e)?.visible),
        isUnmounting: (e) => Boolean(g.current.getCard(e)?.unmounting),
        isDisplaying: C,
        isCardRegistered: (e) => void 0 !== g.current.getCard(e),
        findMaxVisibleRowsInGroup: (e) => g.current.findMaxVisibleRowsInGroup(e),
        applyLayout: x,
        appear: y,
        addGroupConfig: e,
        removeGroupConfig: t,
        slider: {
          addSlider: (t, a) => {
            (e(t, a), j.trigger("configUpdated"));
          },
          removeSlider: (e) => {
            void 0 !== g.current.getWidgetConfig().groups.get(e)?.slider
              ? (t(e), j.trigger("configUpdated"))
              : console.warn(`Trying to remove regular group ${e} from removeSlider`);
          },
          changeSlide: w,
          addSlide: (e, t, a = !0) => {
            if (a && !n?.get(e)?.items.some(({ id: e }) => e === t.id))
              return void console.warn(`Slide ${t.id} is disabled`);
            const s = g.current.getWidgetConfig().groups.get(e);
            void 0 !== s?.slider
              ? s.slider.items.some(({ id: e }) => e === t.id)
                ? console.warn(`Slide ${t.id} already exists`)
                : (s.slider.items.push(t), g.current.clearCache(), j.trigger("configUpdated"))
              : console.warn(`No slider with id ${e}`);
          },
          removeSlide: (e, t) => {
            const a = g.current.getWidgetConfig().groups.get(e);
            if (void 0 === a?.slider) return;
            const s = a.slider.items.findIndex(({ id: e }) => e === t);
            -1 !== s &&
              (a.slider.items.splice(s, 1), g.current.clearCache(), j.trigger("configUpdated"));
          },
          slideToIndex: a,
          slideNext: (e) => {
            const t = g.current.getSliderById(e);
            if (void 0 === t) return;
            const s = f.current.get(e) || t.selectedSlideId;
            if (void 0 === s) return void a(e, 1);
            const n = t.items.findIndex(({ id: e }) => e === s);
            -1 !== n && a(e, (n + 1) % t.items.length);
          },
          slidePrev: (e) => {
            const t = g.current.getSliderById(e);
            if (void 0 === t) return;
            const s = f.current.get(e) || t.selectedSlideId;
            if (void 0 === s) return void a(e, t.items.length - 1);
            const n = t.items.findIndex(({ id: e }) => e === s);
            -1 !== n && a(e, (n + t.items.length - 1) % t.items.length);
          },
          rebuild: () => {
            (g.current.clearCache(), j.trigger("configUpdated"));
          },
          getSliders: () => g.current.sliders,
          events: { on: j.on, off: j.off },
        },
        disappear: async (e) => {
          (g.current.updateCard(e, { visible: !1 }),
            await b((t) => {
              if (e === t.id) return MN(t.settings.getPropGoalValue("x"));
            }));
        },
        disappearGroups: async (e) => {
          const t = [];
          (e.forEach((e) => {
            for (const a of g.current.getGroupCardIds(e)) t.push(a);
          }),
            t.forEach((e) => g.current.updateCard(e, { visible: !1, unmounting: !0 })),
            await b((e) => {
              const a = t.indexOf(e.id);
              if (-1 !== a)
                return { ...MN(e.settings.getPropGoalValue("x")), delay: 100 * (t.length - a) };
            }));
        },
        plugins: {
          waitForInitialization: async (e) => {
            (s(e), await h.current[e]?.init);
          },
          waitForMount: async (e) => {
            (s(e), await h.current[e]?.mount);
          },
          markAsMounted: (e) => {
            (s(e), h.current[e]?.mount.resolve());
          },
          markAsInited: (e) => {
            (s(e), h.current[e]?.init.resolve());
          },
          markAsDestroyed: (e) => {
            (h.current[e]?.init.resolve(), h.current[e]?.mount.resolve(), delete h.current[e]);
          },
        },
        updateBorders: v,
        readyForAnimations: _,
        enqueue: d,
        start: N,
      };
    }, [C, x, y, v, d, N, b, w, j, n]);
  return (
    (0, jn.useEffect)(() => {
      (g.current.updateWidgetConfig({ size: i, visibleRowsAmount: l, media: o }), x());
    }, [x, i, l, o]),
    (0, jn.useEffect)(() => {
      const e = g.current.getWidgetConfig().groups;
      void 0 !== n &&
        (Array.from(n.entries()).forEach(([t, a]) => {
          const s = e.get(t);
          s && (s.slider = { ...a });
        }),
        g.current.clearCache(),
        j.trigger("configUpdated"));
    }, [n, j]),
    (0, jn.useEffect)(() => {
      p.current && !_.current && ((_.current = !0), u());
    }),
    (0, jn.useEffect)(
      () =>
        U(() => {
          (g.current.clearCache(), x());
        }),
      [x],
    ),
    (0, rr.jsx)(uN.Provider, { value: I, children: (0, rr.jsx)("div", { ref: m, children: e }) })
  );
}
var [FN, WN] = ds()(
    ({ observableModel: e }) => {
      const t = {
          ...e.primitives(["selectedSlide"]),
          plugins: e.dict("plugins"),
          slides: e.array("slides"),
          visibleGroups: e.array("visibleGroups"),
        },
        a = Na.structural(() =>
          t.plugins.values().map((e) => {
            const { url: t, dependencies: a } = e.get();
            return { url: t, dependencies: ve(a) };
          }),
        ),
        s = Na.primitive(() => t.selectedSlide.get());
      return {
        ...t,
        computes: {
          pathToPlugins: a,
          selectedSlide: s,
          isGroupVisible: (e) => ve(t.visibleGroups.get()).includes(e),
          isSlideActive: (e) => ve(t.slides.get()).some((t) => t.id === e),
        },
      };
    },
    ({ externalModel: e }) => ({
      onSlideChanged: e.createCallback((e, t) => ({ sliderId: e, slideId: t }), "onSlideChanged"),
    }),
  ),
  qN = {
    umg_widget_quest_progress: "umg_widget_quest_progress",
    umg_widget_quest_complete: "umg_widget_quest_complete",
    umg_widget_quest_reward: "umg_widget_quest_reward",
    umg_widget_quest_disappear: "umg_widget_quest_disappear",
    umg_widget_block_move: "umg_widget_block_move",
    umg_widget_block_stop: "umg_widget_block_stop",
    umg_widget_quest_complete_secondary: "umg_widget_quest_complete_secondary",
    umg_widget_quest_reward_secondary: "umg_widget_quest_reward_secondary",
    umg_widget_quest_disappear_secondary: "umg_widget_quest_disappear_secondary",
    umg_widget_quest_complete_all: "umg_widget_quest_complete_all",
    umg_widget_quest_progress_secondary: "umg_widget_quest_progress_secondary",
    umg_widget_quest_backlog: "umg_widget_quest_backlog",
    umg_widget_event_appear: "umg_widget_event_appear",
    umg_widget_event_hover_loop: "umg_widget_event_hover_loop",
    umg_widget_event_hover_loop_stop: "umg_widget_event_hover_loop_stop",
    umg_widget_event_timer: "umg_widget_event_timer",
    umg_widget_event_inactive: "umg_widget_event_inactive",
    umg_widget_event_reward: "umg_widget_event_reward",
    umg_widget_event_timer_simple: "umg_widget_event_timer_simple",
  },
  ZN = Object.values(qN).reduce((e, t) => ({ ...e, [t]: Tt(t) }), {}),
  GN = (0, jn.createContext)(null);
function UN() {
  const e = (0, jn.useContext)(GN);
  return (u(null !== e, "AnimationsContext is null"), e);
}
function KN(e, t, a = e) {
  return e + "+" + t + "+" + a;
}
function XN(e, t, ...a) {
  let s = e.current;
  if (0 == a.length) return !1;
  for (let n = 0; n < a.length - 1; n++) {
    const e = a[n];
    ((s[e] = s[e] ?? {}), (s = s[e]));
  }
  return ((s[a[a.length - 1]] = t), !0);
}
function YN(e, ...t) {
  const a = (e, s) => {
    if (s === t.length) return Wa(e);
    const n = t[s];
    return n in e && ((s === t.length - 1 || a(e[n], s + 1)) && delete e[n], Wa(e));
  };
  return a(e.current, 0);
}
function JN(e, ...t) {
  let a = e.current;
  return t.reduce((e, t) => e?.[t], a);
}
function QN(e, ...t) {
  let a = e.current;
  return void 0 !== t.reduce((e, t) => e?.[t], a);
}
function eI(e, t, a, s) {
  Object.entries(t).forEach(([t, n]) => {
    Wa(n)
      ? QN(a, e, t, e) && s(t, e)
      : Object.entries(n).forEach(([n, r]) => {
          const i = n || e;
          QN(a, e, t, i) && s(t, i, r);
        });
  });
}
function tI({ storage: e, id: t, emitter: a, providerCfg: s }) {
  QN(e, t) || aI({ id: t, emitter: a, providerCfg: s });
}
function aI({ id: e, emitter: t, providerCfg: a }) {
  const s = a?.triggerId || e;
  (t.trigger(s, { id: e, ...a?.triggerParams }),
    a?.triggerCallback?.({ id: e, ...a?.triggerParams }));
}
function sI({ sound: e, soundCfg: t }) {
  e && t && ("string" == typeof t ? e.play(t) : e.play(t.eventName, t?.event));
}
function nI({ children: e }) {
  const t = ns(),
    a = (0, jn.useRef)({}),
    s = (0, jn.useRef)({}),
    n = (0, jn.useRef)({}),
    r = hs(),
    i = Da(({ id: e, animName: t, elementId: s = e }) => QN(a, e, t, s)),
    o = Da((e, t, s = e) => {
      YN(a, e, t, s);
    }),
    l = Da(
      ({ id: e, animName: t, config: s, elementId: n = e }) => (
        XN(a, s, e, t, n),
        () => o(e, t, n)
      ),
    ),
    c = Da(
      ({
        id: e,
        animName: t,
        elementId: s = e,
        animCallParams: n,
        providerCfg: i,
        soundCfg: o,
      }) => {
        const l = JN(a, e, t, s);
        (l &&
          (i?.skip
            ? l.skip({ ...n, ...i?.animCallParams })
            : l.start({ ...n, ...i?.animCallParams })),
          sI({ sound: r, soundCfg: o }));
      },
    ),
    d = Da(({ id: e, animName: a, elementId: n = e, providerCfg: r = {} }) => {
      const i = t.on(KN(e, a, n), () => {
        (YN(s, e, a, n), tI({ storage: s, id: e, emitter: t, providerCfg: r }), i());
      });
      XN(s, !0, e, a, n);
    }),
    u = Da(({ complexId: e, id: a, animName: s, elementId: r = a, providerCfg: i }) => {
      const o = t.on(KN(a, s, r), function () {
          (!(function ({
            storage: e,
            complexId: t,
            groupId: a,
            animName: s,
            elementId: n,
            emitter: r,
            providerCfg: i,
          }) {
            let o = JN(e, t, a, s);
            o &&
              (o.delete(n),
              o.size || YN(e, t, a, s),
              tI({ storage: e, id: t, emitter: r, providerCfg: i }));
          })({
            storage: n,
            complexId: e,
            groupId: a,
            animName: s,
            elementId: r,
            emitter: t,
            providerCfg: i,
          }),
            o());
        }),
        l = JN(n, e, a, s);
      l ? l.add(r) : XN(n, new Set().add(r), e, a, s);
    }),
    m = Da(({ groupId: e, groupCfg: n, providerCfg: i, soundCfg: o }) => {
      (YN(s, e),
        i?.skip ||
          i?.skipTrigger ||
          eI(e, n, a, (t, a) => {
            d({ id: e, animName: t, elementId: a, providerCfg: i });
          }),
        eI(e, n, a, (t, a, s) => {
          c({ id: e, animName: t, elementId: a, animCallParams: s, providerCfg: i });
        }),
        sI({ sound: r, soundCfg: o }),
        i?.skip && !i?.skipTrigger && aI({ id: e, emitter: t, providerCfg: i }));
    }),
    p = Da(({ complexId: e, complexCfg: s, providerCfg: i, soundCfg: o }) => {
      if ((YN(n, e), !i?.skip && !i?.skipTrigger))
        for (let [t, n] of Object.entries(s))
          eI(t, n, a, (a, s) => {
            u({ complexId: e, id: t, animName: a, elementId: s, providerCfg: i });
          });
      for (let [t, n] of Object.entries(s))
        eI(t, n, a, (e, a, s) => {
          c({ id: t, animName: e, elementId: a, animCallParams: s, providerCfg: i });
        });
      (sI({ sound: r, soundCfg: o }),
        i?.skip && !i?.skipTrigger && aI({ id: e, emitter: t, providerCfg: i }));
    }),
    _ = (0, jn.useMemo)(
      () => ({
        registerAnimation: l,
        unRegistrateAnimation: o,
        startAnimation: c,
        startGroupAnimation: m,
        startComplexAnimation: p,
        checkRegisteredInStorage: i,
        emitter: t,
      }),
      [i, t, l, c, p, m, o],
    );
  return (0, rr.jsx)(GN.Provider, { value: _, children: e });
}
var rI = "battlePass",
  iI = "progression",
  oI = "battleAbilities",
  lI = "rentalTanks",
  cI = new Map([
    [rI, { position: 0 }],
    [
      iI,
      {
        position: 1,
        adaptive: { [pN]: { gap: 10, cardHeight: 147 }, [_N]: { gap: 10, cardHeight: 147 } },
      },
    ],
    [oI, { position: 2, adaptive: { [pN]: { cardHeight: 44 }, [_N]: { cardHeight: 44 } } }],
    [
      lI,
      {
        position: 3,
        adaptive: { [pN]: { gap: 10, cardHeight: 44 }, [_N]: { gap: 10, cardHeight: 44 } },
      },
    ],
  ]);
var dI = (function (e) {
    return ((e.Intro = "intro"), (e.Progression = "progression"), (e.Completed = "completed"), e);
  })({}),
  uI = (function (e) {
    return ((e.Waiting = "waiting"), (e.Ready = "ready"), (e.Played = "played"), e);
  })({}),
  mI = e(_t(), 1),
  pI = (0, jn.forwardRef)(function (
    {
      children: e,
      id: t,
      groupId: a,
      position: n,
      isDisabled: r = !1,
      visible: i = !1,
      className: o,
      classNames: l,
      onMouseEnter: c,
      onMouseLeave: d,
      ...u
    },
    m,
  ) {
    const p = mN(),
      [_, h] = Ds(() => wN, []),
      g = (0, jn.useRef)(null),
      f = (0, jn.useRef)(F),
      v = (0, jn.useRef)(null),
      b = Da((e) => {
        v.current && g.current && !r && p.updateBorders(e ? v.current : void 0);
      }),
      x = Da((e) => _[e].get()),
      y = Da((e) => _[e].goal),
      C = Da(async (e) => {
        await new Promise((t) => {
          ((f.current = t),
            Promise.all(h.start(e)).then(() => {
              (t(), (f.current = F));
            }));
        });
      });
    return (
      s(() => {
        p.registerCard(t, {
          position: n,
          groupId: a,
          getPropValue: x,
          getPropGoalValue: y,
          startLayoutAnimation: C,
          visible: i,
        });
      }),
      Wt(() => {
        (f.current?.(), p.unregisterCard(t));
      }),
      (0, rr.jsxs)(q.div, {
        ...u,
        style: {
          ..._,
          pointerEvents: _.opacity.to((e) => (1 === e ? "auto" : "none")),
          ...u?.style,
        },
        className: (0, mI.default)(ON, !r && HN, o),
        ref: Vt([m, g]),
        onMouseEnter: (e) => {
          (b(!0), c?.(e));
        },
        onMouseLeave: (e) => {
          (b(!1), d?.(e));
        },
        children: [
          (0, rr.jsx)("div", { className: (0, mI.default)(RN, l?.border) }),
          e,
          (0, rr.jsx)("div", {
            className: (0, mI.default)(VN, l?.borderHelper),
            "data-id": t,
            ref: v,
          }),
        ],
      })
    );
  });
function _I(e, t) {
  (0, jn.useEffect)(() => {
    e && t();
  });
}
function hI({ registerAnimation: e, id: t, animName: a, elementId: s = t, config: n }) {
  (0, jn.useLayoutEffect)(
    () => e?.({ id: t, animName: a, elementId: s, config: n }),
    [t, a, n, s, e],
  );
}
var gI = { from: { opacity: 0 }, config: { duration: 400, easing: SN } },
  fI = { from: { opacity: 0 }, to: { opacity: 1 } };
var vI = {
    "media-wrapper": "BorderAnimation_media-wrapper_389afe4",
    root: "BorderAnimation_root_389afe4",
    helperContainer: "BorderAnimation_helperContainer_fe323668",
    base: "BorderAnimation_2d8409c9",
    base__medium: "BorderAnimation_base__medium_47492bdb",
    base__small: "BorderAnimation_base__small_67aa3793",
    border_animation: "BorderAnimation_389afe4",
    helper: "BorderAnimation_helper_fcc3c5b0",
    helper__one: "BorderAnimation_helper__one_df08a331",
    helper__two: "BorderAnimation_helper__two_9bfa23dc",
    helper__three: "BorderAnimation_helper__three_e87e7b8e",
  },
  bI = "widgetCardBorderFadeIn",
  xI = (0, jn.memo)(function ({ id: e, elementId: t, size: a = hN, className: s }) {
    const { registerAnimation: n, emitter: r } = UN(),
      { baseSpring: i, config: o } = (function (e) {
        const [t, a] = Ds(() => gI),
          s = Da(({ immediate: t }) => {
            a.start({ ...fI, immediate: t, onRest: e });
          });
        return { baseSpring: t, config: (0, jn.useMemo)(() => ({ start: s, skip: F }), [s]) };
      })(Da(() => r.trigger(KN(e, bI, t), e, t)));
    return (
      hI({ id: e, elementId: t, registerAnimation: n, animName: bI, config: o }),
      (0, rr.jsx)(q.div, {
        style: i,
        className: cs(vI.base, vI[`base__${a}`], s),
        children: (0, rr.jsxs)("div", {
          className: vI.helperContainer,
          children: [
            (0, rr.jsx)("div", { className: cs(vI.helper, vI.helper__one) }),
            (0, rr.jsx)("div", { className: cs(vI.helper, vI.helper__two) }),
            (0, rr.jsx)("div", { className: cs(vI.helper, vI.helper__three) }),
          ],
        }),
      })
    );
  }),
  yI = { to: { val: 100 }, config: { duration: 1e3, easing: SN } },
  CI = { from: { val: 100 }, to: { val: 0 } };
function jI(e) {
  return `brightness(${1 + e / 100}) contrast(${1 + (e / 100) * 0.5})`;
}
var wI = "bgContrastAnimation";
var NI = { from: { val: 0 }, config: { duration: 600, easing: SN } },
  II = { from: { val: 0 }, to: { val: 50 } };
function SI(e) {
  return `${50 + e}% ${50 + e}%`;
}
var kI = "maskAnimation";
var PI = "maskAppearAnimationHook",
  EI = { [wI]: {}, [kI]: {}, [bI]: {} };
function MI({ id: e, elementId: t, onComplete: a }) {
  const { startGroupAnimation: s, registerAnimation: n, emitter: r } = UN(),
    i = (0, jn.useCallback)(() => r.trigger(KN(e, wI, t), e, t), [t, r, e]),
    o = (0, jn.useCallback)(() => r.trigger(KN(e, kI, t), e, t), [t, r, e]),
    l = (0, jn.useCallback)(
      async ({ immediate: s }) => {
        (await a?.(s), r.trigger(KN(e, PI, t), e, t));
      },
      [t, r, e, a],
    ),
    { backgroundContrast: c, config: d } = (function (e) {
      const t = (0, jn.useCallback)(() => e?.(), [e]),
        [a, s] = Ds(() => ({ ...yI, onRest: t })),
        n = (0, jn.useCallback)((e) => s.start({ ...CI, immediate: e }), [s]),
        r = Da(({ immediate: e }) => n(e));
      return { backgroundContrast: a, config: (0, jn.useMemo)(() => ({ start: r, skip: F }), [r]) };
    })(i),
    { maskPosition: u, config: m } = (function (e) {
      const t = (0, jn.useCallback)(() => e?.(), [e]),
        [a, s] = Ds(() => ({ ...NI, onRest: t })),
        n = (0, jn.useCallback)((e) => s.start({ ...II, immediate: e }), [s]),
        r = Da(({ immediate: e }) => n(e));
      return { maskPosition: a, config: (0, jn.useMemo)(() => ({ start: r, skip: F }), [r]) };
    })(o),
    p = Da(async (t) => {
      s({
        groupId: e,
        groupCfg: EI,
        providerCfg: { triggerParams: t, animCallParams: t, triggerCallback: l },
      });
    });
  return (
    hI({
      id: e,
      elementId: t,
      registerAnimation: n,
      animName: PI,
      config: (0, jn.useMemo)(() => ({ start: p, skip: F }), [p]),
    }),
    hI({ id: e, elementId: t, registerAnimation: n, animName: wI, config: d }),
    hI({ id: e, elementId: t, registerAnimation: n, animName: kI, config: m }),
    (0, jn.useMemo)(() => ({ maskPosition: u, backgroundContrast: c }), [c, u])
  );
}
var LI = "battlePassCardId",
  AI = {
    "media-wrapper": "Emblem_media-wrapper_9b4d607c",
    root: "Emblem_root_9b4d607c",
    base__x60x60: "Emblem_base__x60x60_d8756e36",
    base__x100x100: "Emblem_base__x100x100_547cf3ad",
    base__x160x160: "Emblem_base__x160x160_c9c06954",
    base__x200x200: "Emblem_base__x200x200_2ddeb5ee",
    base__x240x240: "Emblem_base__x240x240_308c1aa9",
    base__x360x360: "Emblem_base__x360x360_98f20cf9",
    shield: "Emblem_shield_451cf2c9",
    icon: "Emblem_icon_73d84087",
    shield__x74x74: "Emblem_shield__x74x74_a298d905",
    shield__x120x120: "Emblem_shield__x120x120_c8aa5234",
    shield__x200x200: "Emblem_shield__x200x200_f1ed9db0",
    shield__x260x260: "Emblem_shield__x260x260_ef1c262b",
    shield__x300x300: "Emblem_shield__x300x300_7c6d6f97",
    shield__x456x456: "Emblem_shield__x456x456_c818292e",
    icon__x28x28: "Emblem_icon__x28x28_6ea3e635",
    icon__x48x48: "Emblem_icon__x48x48_f2526f88",
    icon__x60x60: "Emblem_icon__x60x60_628dbf9a",
    icon__x80x80: "Emblem_icon__x80x80_34079478",
    icon__x100x100: "Emblem_icon__x100x100_e8181a63",
    icon__x120x120: "Emblem_icon__x120x120_c8aa5234",
    icon__x160x160: "Emblem_icon__x160x160_aec06e5c",
  },
  TI = "x60x60",
  DI = "x74x74",
  BI = "x120x120",
  OI = "x200x200",
  VI = "x260x260",
  RI = "x300x300",
  HI = "x456x456",
  $I = "x600x600",
  zI = "x912x912",
  FI = "x28x28",
  WI = "x48x48",
  qI = "x60x60",
  ZI = "x80x80",
  GI = "x100x100",
  UI = "x120x120",
  KI = "x160x160",
  XI = "x240x240",
  YI = "x320x320",
  JI = ks.resolve("images"),
  QI = function ({
    iconSize: e,
    shieldSize: t,
    containerSize: a,
    chapterID: s,
    bpPurchased: n,
    className: r = "",
  }) {
    const i = n ? "purchased" : "basic",
      o = String(s).slice(-1),
      l = t === DI ? BI : t === BI ? VI : t === OI ? HI : t === VI || t === RI ? $I : zI,
      c =
        e === FI
          ? qI
          : e === WI
            ? GI
            : e === qI
              ? UI
              : e === ZI
                ? KI
                : e === GI || e === UI
                  ? XI
                  : YI,
      d =
        JI.readOrEmpty(`battlePass.emblem.shield.c_${s}.${i}.${ps(t, l)}`, "silent") ||
        JI.readOrEmpty(`battlePass.emblem.shield.default.${i}.${t}`),
      u =
        JI.readOrEmpty(`battlePass.emblem.icon.c_${s}.${i}.${ps(e, c)}`, "silent") ||
        JI.readOrEmpty(`battlePass.emblem.icon.default_${o}.${i}.${e}`);
    return (0, rr.jsxs)("div", {
      className: cs(AI.base, AI[`base__${a}`], r),
      children: [
        (0, rr.jsx)("div", {
          className: cs(AI.shield, AI[`shield__${t}`]),
          style: { backgroundImage: `url(${d})` },
        }),
        (0, rr.jsx)("div", {
          className: cs(AI.icon, AI[`icon__${e}`]),
          style: {
            backgroundImage: `url(${s > 0 ? u : JI.readOrEmpty(`battlePass.emblem.icon.not_chosen.${ps(e, qI)}`)})`,
          },
        }),
      ],
    });
  };
function eS(e, t) {
  const [a, s] = Ds(() => ({
      from: { opacity: 0 },
      config: { duration: 400, easing: SN },
      onRest: t,
    })),
    n = Da(({ immediate: t }) => {
      s.start({ from: { opacity: 0 }, to: { opacity: 1 }, delay: t ? 0 : e, immediate: t });
    });
  return { spring: a, config: (0, jn.useMemo)(() => ({ start: n, skip: F }), [n]) };
}
var [tS, aS] = ds()(
    ({ observableModel: e }) => {
      const t = {
          ...e.primitives([
            "widgetState",
            "level",
            "tooltipID",
            "chapterID",
            "season",
            "isBought",
            "isExtraChapter",
            "isHoliday",
            "isPaused",
            "hasExtraChapter",
            "isExtraChapterHighlighted",
            "appearAnimationState",
            "timeLeft",
            "pointsEarned",
            "levelPoints",
            "rewardsHash",
          ]),
          lastSeenState: e.object("lastSeenState"),
        },
        a = Na.primitive(() => t.widgetState.get() === dI.Completed);
      return { ...t, computes: { isCompleted: a } };
    },
    ({ externalModel: e }) => ({
      openBattlePass: e.createCallbackNoArgs("onOpenBattlePass"),
      notifyIntroAnimationPlayed: e.createCallbackNoArgs("onIntroAnimationPlayed"),
      widgetUnmounted: e.createCallbackNoArgs("onWidgetUnmounted"),
    }),
  ),
  sS = "Emblem_6b62c957",
  nS = "Emblem_base__paused_e22ad928",
  rS = "Emblem_4187dd4f",
  iS = "emblemFadeInAnimation",
  oS = Hs(function ({ id: e, elementId: t, className: a }) {
    const { model: s } = aS(),
      n = s.chapterID.get(),
      r = s.isBought.get(),
      { registerAnimation: i, emitter: o } = UN(),
      { spring: l, config: c } = eS(
        0,
        Da(() => o.trigger(KN(e, iS, t), e, t)),
      );
    return (
      hI({ id: e, elementId: t, registerAnimation: i, animName: iS, config: c }),
      (0, rr.jsx)("div", {
        className: cs(sS, s.isPaused.get() && nS, a),
        children: (0, rr.jsx)(q.div, {
          style: l,
          children: (0, rr.jsx)(QI, {
            iconSize: FI,
            shieldSize: DI,
            containerSize: TI,
            bpPurchased: r,
            chapterID: n,
            className: rS,
          }),
        }),
      })
    );
  });
function lS(e, t) {
  const { readyForAnimations: a } = mN();
  (0, jn.useEffect)(() => {
    if (a.current) return e();
  }, t);
}
var cS = ks.resolve("images"),
  dS = ks.resolve("views"),
  uS = ks.resolve("strings"),
  mS = ks.resolve("aliases"),
  pS = ks.resolve("videos"),
  _S = (0, jn.createContext)(!1);
function hS(e, t, a, s, n, r) {
  const i = `${t}${a ? "_extra" : ""}${s ? "_holiday" : ""}${r ? "_small" : ""}`;
  return { seasonPath: `${e}.season_${n}.${i}`, defaultPath: `${e}.default.${i}` };
}
function gS(e, t, a, s, n) {
  const { seasonPath: r, defaultPath: i } = hS("battlePass.widget.background", e, t, a, s, n);
  return cS.has(r) ? r : i;
}
function fS() {
  return (0, jn.useContext)(_S);
}
function vS(e, t) {
  return e && (t === dI.Intro || t === dI.Progression);
}
var bS = Hs(function ({ useAdaptiveFormat: e = !0 }) {
    const { model: t } = aS(),
      a = dN(),
      s = a ? rt.format.compact : rt.format.default,
      n = t.timeLeft.get();
    return (0, rr.jsx)(
      rt,
      { start: n, size: a ? rt.size.x16x16 : rt.size.x24x24, format: e ? s : rt.format.default },
      n,
    );
  }),
  xS = "Labels_e5066e86",
  yS = "Labels_title_d94e713e",
  CS = "Labels_subTitleWrapper_79f4007c",
  jS = "Labels_subTitleItem_b9fe06e5",
  wS = "Labels_subTitle_c850cc3d",
  NS = "Labels_lockIcon_c336fd47",
  IS = "Labels_descriptionText_1d25fcad",
  SS = ks.resolve("strings"),
  kS = "labelsFadeInAnimation",
  PS = Hs(function ({ id: e, elementId: t, className: a }) {
    const { model: s } = aS(),
      n =
        ((r = s.hasExtraChapter.get()),
        (i = s.isHoliday.get()),
        s.computes.isCompleted()
          ? "completed"
          : i
            ? "see_new_progression"
            : r
              ? "activate_extra_chapter"
              : "select_chapter");
    var r, i;
    const { registerAnimation: o, emitter: l } = UN(),
      { spring: c, config: d } = eS(
        1e3,
        Da(() => l.trigger(KN(e, kS, t), e, t)),
      );
    hI({ id: e, elementId: t, registerAnimation: o, animName: kS, config: d });
    const {
      labelStyle: u,
      countdownStyle: m,
      lockStyle: p,
    } = (function () {
      const e = fS(),
        { model: t } = aS(),
        a = t.widgetState.get(),
        s = t.isPaused.get(),
        n = vS(e, a),
        r = (0, jn.useRef)(n),
        i = (0, jn.useRef)(s),
        o = { duration: 400, easing: SN },
        [l, c] = Ds(() => ({ from: { opacity: s ? 1 : 0, x: 0 }, config: o })),
        [d, u] = Ds(() => ({ from: { opacity: n && !s ? 1 : 0, x: 0 }, config: o })),
        [m, p] = Ds(() => ({ from: { opacity: n || s ? 0 : 1, x: 0 }, config: o }));
      return (
        lS(() => {
          if (i.current === s && r.current === n) return;
          const e = (e, t) => (e ? c : t ? u : p),
            t = e(i.current, r.current),
            a = e(s, n),
            o = [u, c, p];
          (Promise.all(t.start({ from: { opacity: 1, x: 0 }, to: { opacity: 0, x: V(40) } })).then(
            () => {
              (o.forEach((e) => {
                e.start({ from: { opacity: 0 }, immediate: !0 });
              }),
                a.start({ from: { opacity: 0, x: V(-20) }, to: { opacity: 1, x: 0 } }));
            },
          ),
            (r.current = n),
            (i.current = s));
        }, [u, c, p, s, n, a]),
        { countdownStyle: d, lockStyle: l, labelStyle: m }
      );
    })();
    return s.widgetState.get() !== dI.Progression || s.isPaused.get()
      ? (0, rr.jsxs)(q.div, {
          style: c,
          className: cs(xS, a),
          children: [
            (0, rr.jsx)("div", {
              className: yS,
              children: SS.read("user_missions.battle_pass_widget.title"),
            }),
            (0, rr.jsxs)("div", {
              className: CS,
              children: [
                (0, rr.jsxs)(q.div, {
                  style: p,
                  className: cs(jS, wS),
                  children: [
                    (0, rr.jsx)("div", { className: NS }),
                    SS.read("user_missions.battle_pass_widget.sub_title.unavailable"),
                  ],
                }),
                (0, rr.jsx)(q.div, {
                  style: m,
                  className: jS,
                  children: (0, rr.jsx)(bS, { useAdaptiveFormat: !1 }),
                }),
                (0, rr.jsx)(q.div, {
                  style: u,
                  className: cs(jS, wS),
                  children: (0, rr.jsx)(T, {
                    text: SS.read(`user_missions.battle_pass_widget.sub_title.${n}`),
                    classMix: cs(IS),
                    isTruncationAvailable: !0,
                  }),
                }),
              ],
            }),
          ],
        })
      : null;
  }),
  ES = { [bI]: {}, [kS]: {}, [iS]: {}, [PI]: {} };
async function MS(e, t = !1) {
  await new Promise((a) => {
    e({
      groupId: LI,
      providerCfg: { triggerCallback: a, animCallParams: { immediate: t } },
      groupCfg: ES,
    });
  });
}
function LS(e, t, a, s, n) {
  e.isUnmounting("battlePassCardId") ||
    (t === uI.Ready
      ? e
          .enqueue(async () => {
            (a(qN.umg_widget_event_appear), await e.appear([LI]), await MS(n));
          })
          .then(() => {
            s();
          })
      : t === uI.Played &&
        (e.updateCard(LI, { visible: !0 }), MS(n, !0), e.enqueue(async () => e.applyLayout())));
}
var AS = { duration: 700, easing: SN },
  TS = { from: { translateX: "-160%" }, config: AS },
  DS = { from: { opacity: 0 }, config: AS },
  BS = { from: { translateX: "-160%" }, to: { translateX: "160%" } },
  OS = { from: { opacity: 0 }, to: [{ opacity: 1 }, { opacity: 0, config: { duration: 1e3 } }] };
var VS = "HighlightAnimation_splashContainer_6f7161d2",
  RS = "HighlightAnimation_helperContainer_67199b30",
  HS = "HighlightAnimation_a926f19b",
  $S = "HighlightAnimation_helper_ab64de86",
  zS = "HighlightAnimation_helper__one_bf874504",
  FS = "HighlightAnimation_helper__two_5ddebb7f",
  WS = "HighlightAnimation_helper__three_e838fe5d",
  qS = "widgetCardHighlight",
  ZS = (0, jn.memo)(function ({
    id: e,
    elementId: t,
    withOverlaySplash: a = !1,
    children: s,
    className: n,
  }) {
    const { registerAnimation: r, emitter: i } = UN(),
      {
        highlightStyles: o,
        splashStyles: l,
        config: c,
      } = (function (e) {
        const [t, a] = Ds(() => TS),
          [s, n] = Ds(() => DS),
          r = Da(() => {
            (a.start({ ...BS, reset: !0 }), n.start({ ...OS, reset: !0, onRest: e }));
          });
        return (0, jn.useMemo)(
          () => ({ highlightStyles: t, splashStyles: s, config: { start: r, skip: F } }),
          [t, s, r],
        );
      })(Da(() => i.trigger(KN(e, qS, t), e, t)));
    return (
      hI({ id: e, elementId: t, registerAnimation: r, animName: qS, config: c }),
      (0, rr.jsxs)(rr.Fragment, {
        children: [
          a && (0, rr.jsx)(q.div, { style: l, className: VS, children: s }),
          (0, rr.jsx)("div", {
            className: cs(HS, n),
            children: (0, rr.jsxs)(q.div, {
              style: o,
              className: RS,
              children: [
                (0, rr.jsx)("div", { className: cs($S, zS) }),
                (0, rr.jsx)("div", { className: cs($S, FS) }),
                (0, rr.jsx)("div", { className: cs($S, WS) }),
              ],
            }),
          }),
        ],
      })
    );
  });
var GS = ks.resolve("strings"),
  US = "progressionLabelsAnimation",
  KS = Hs(function ({ className: e, id: t, elementId: a }) {
    const { spring: s, config: n } = (function () {
        const [e, t] = Ds(() => ({
            from: { x: 0, opacity: 0 },
            config: { duration: 400, easing: SN },
          })),
          a = (0, jn.useCallback)(
            (e, a) => {
              e
                ? t.start({
                    from: { opacity: 0, x: V(-20) },
                    to: { opacity: 1, x: 0 },
                    delay: 400,
                    immediate: a,
                  })
                : t.start({
                    from: { opacity: 1, x: 0 },
                    to: { opacity: 0, x: V(40) },
                    immediate: a,
                  });
            },
            [t],
          ),
          s = Da(({ isPaused: e }) => {
            a(e);
          }),
          n = Da(({ isPaused: e }) => {
            a(e, !0);
          });
        return (0, jn.useMemo)(() => ({ spring: e, config: { start: s, skip: n } }), [n, e, s]);
      })(),
      { registerAnimation: r } = UN();
    return (
      hI({ id: t, elementId: a, registerAnimation: r, animName: US, config: n }),
      (0, rr.jsxs)(q.div, {
        style: s,
        className: cs(xS, e),
        children: [
          (0, rr.jsx)("div", {
            className: yS,
            children: GS.read("user_missions.battle_pass_widget.title"),
          }),
          (0, rr.jsx)("div", {
            className: CS,
            children: (0, rr.jsxs)("div", {
              className: cs(jS, wS),
              children: [
                (0, rr.jsx)("div", { className: NS }),
                GS.read("user_missions.battle_pass_widget.sub_title.unavailable"),
              ],
            }),
          }),
        ],
      })
    );
  }),
  XS = { pointsEarned: 0, deltaLeft: 0, deltaWidth: 0, level: 0, immediate: !0 },
  YS = { from: { opacity: 1, x: 0 }, config: { duration: 400, easing: SN } },
  JS = { from: { opacity: 0 }, config: { duration: 200, easing: SN } },
  QS = {
    init: { from: { opacity: 1, x: 0 }, config: { duration: 400, easing: SN } },
    paused: { from: { opacity: 1, x: 0 }, to: { opacity: 0, x: V(40) } },
    unPaused: { from: { opacity: 0, x: V(-20) }, to: { opacity: 1, x: 0 }, delay: 400 },
  },
  ek = "progressOpacity";
var tk = "progressAnimation";
var ak = "SelectRewardIcon_79dc47ef",
  sk = "SelectRewardIcon_animatedIcon_7df05741",
  nk = "rewardIconAnimation",
  rk = { to: 1, config: { duration: 750 } },
  ik = { to: 0, config: { duration: 500 } },
  ok = {
    from: { opacity: 0 },
    to: [{ opacity: 1 }, { opacity: 0 }, { opacity: 1 }, { opacity: 0 }],
    config: { duration: 1e3 },
    pause: !0,
  },
  lk = (0, jn.memo)(function ({ id: e, className: t }) {
    const { registerAnimation: a } = UN(),
      { play: s } = It(),
      { opacity: n, config: r } = (function (e, t) {
        const a = st(e, { onRest: Da(() => t?.()) }),
          s = Da((e) => {
            e?.to != a.get() ? a.start({ ...e }) : t?.();
          }),
          n = Da((e) => {
            a.start({ ...e, delay: 0, immediate: !0, config: { duration: 0 } });
          });
        return (0, jn.useMemo)(() => ({ opacity: a, config: { start: s, skip: n } }), [a, n, s]);
      })(0),
      [i, o] = Ds(() => ok),
      l = Da(({ isPaused: e }) => {
        e
          ? r.start(ik)
          : (s(qN.umg_widget_event_reward), r.start(rk), o.start({ ...ok, pause: !1, reset: !0 }));
      }),
      c = Da(({ isPaused: e }) => {
        e ? r.skip(ik) : r.skip(rk);
      });
    return (
      hI({
        registerAnimation: a,
        id: e,
        animName: nk,
        config: (0, jn.useMemo)(() => ({ start: l, skip: c }), [c, l]),
      }),
      (0, rr.jsx)(q.div, {
        style: { opacity: n },
        className: cs(ak, t),
        children: (0, rr.jsx)(q.div, { style: i, className: sk }),
      })
    );
  });
function ck({ current: e, earned: t, max: a, level: s }) {
  return {
    pointsEarned: e + t,
    level: s,
    deltaLeft: o(e, a),
    deltaWidth: o(t, a),
    config: { duration: 50 * t },
  };
}
function dk(e, t, a, s) {
  const n = t != e.level,
    r = s - e.pointsEarned,
    i = a - e.pointsEarned,
    o = { phase_1: ck({ current: e.pointsEarned, earned: n ? r : i, max: s, level: e.level }) };
  return (n && (o.phase_2 = ck({ current: 0, earned: a, max: s, level: t })), o);
}
var uk = { highlight: { id: LI, animName: qS }, rewardIcon: { id: LI, animName: nk } };
function mk() {
  const e = Le(),
    t = mN(),
    { model: a, controls: n } = aS(),
    { play: r } = It(),
    i = a.isPaused.get(),
    o = a.level.get(),
    l = a.pointsEarned.get(),
    c = a.levelPoints.get(),
    d = a.rewardsHash.get(),
    u = a.isExtraChapterHighlighted.get(),
    m = a.appearAnimationState.get(),
    p = a.lastSeenState.get(),
    _ = a.widgetState.get(),
    h = a.chapterID.get();
  (!(function ({
    lastSeenState: e,
    level: t,
    pointsEarned: a,
    levelPoints: n,
    rewardsHash: r,
    isPaused: i,
    api: o,
    appearAnimationState: l,
    notifyIntroAnimationPlayed: c,
    play: d,
  }) {
    const { startAnimation: u, startGroupAnimation: m } = UN();
    s(() => {
      const s = r > 0,
        p = s && r != e.rewardsHash;
      (t != e.level || a != e.pointsEarned
        ? u({ id: LI, animName: tk, animCallParams: dk(e, t, a, n) })
        : p && !i && u({ id: LI, animName: qS }),
        s && u({ ...uk.rewardIcon, providerCfg: { skip: !p }, animCallParams: { isPaused: i } }),
        u({ id: LI, animName: ek, animCallParams: { isPaused: i }, providerCfg: { skip: !0 } }),
        u({ id: LI, animName: US, animCallParams: { isPaused: i }, providerCfg: { skip: !0 } }),
        LS(o, l, d, c, m));
    });
  })({
    level: o,
    pointsEarned: l,
    levelPoints: c,
    rewardsHash: d,
    lastSeenState: p,
    isPaused: i,
    play: r,
    api: t,
    notifyIntroAnimationPlayed: n.notifyIntroAnimationPlayed,
    appearAnimationState: m,
  }),
    (function ({
      isFirstRender: e,
      appearAnimationState: t,
      isExtraChapterHighlighted: a,
      widgetState: s,
      api: n,
      notifyIntroAnimationPlayed: r,
      play: i,
    }) {
      const { startGroupAnimation: o } = UN(),
        l = Qa(t),
        c = Qa(a),
        d = Qa(s);
      (_I(!e, () => {
        (a === c && d === s) ||
          n.enqueue(async () => {
            (i(qN.umg_widget_event_appear), await MS(o));
          });
      }),
        _I(!e, () => {
          t !== l && LS(n, t, i, r, o);
        }));
    })({
      api: t,
      appearAnimationState: m,
      isExtraChapterHighlighted: u,
      widgetState: _,
      isFirstRender: e,
      notifyIntroAnimationPlayed: n.notifyIntroAnimationPlayed,
      play: r,
    }),
    (function ({
      isFirstRender: e,
      lastSeenState: t,
      level: a,
      pointsEarned: s,
      levelPoints: n,
      chapterID: r,
    }) {
      const { startAnimation: i } = UN(),
        o = Qa(r);
      _I(!e && r > 0 && -1 != o, () => {
        const e = s != t.pointsEarned || a != t.level,
          l = r !== o;
        e && !l
          ? i({ id: LI, animName: tk, animCallParams: dk(t, a, s, n) })
          : l && i(uk.highlight);
      });
    })({
      isFirstRender: e,
      lastSeenState: p,
      level: o,
      pointsEarned: l,
      levelPoints: c,
      chapterID: h,
    }),
    (function ({ isFirstRender: e, rewardsHash: t, isPaused: a }) {
      const { startAnimation: s } = UN(),
        n = Qa(t),
        r = Qa(a);
      _I(!e, () => {
        const e = a != r,
          i = t > 0 && t != n;
        (e &&
          (s({ id: LI, animName: ek, animCallParams: { isPaused: a } }),
          s({ id: LI, animName: US, animCallParams: { isPaused: a } })),
          (i || e) && s({ ...uk.rewardIcon, animCallParams: { isPaused: a } }),
          i && !a && s(uk.highlight),
          e && !a && s({ id: LI, animName: bI }));
      });
    })({ isFirstRender: e, rewardsHash: d, isPaused: i }));
}
var pk = Hs(function ({ className: e }) {
    const { model: t } = aS();
    return t.isPaused.get() ? null : (0, rr.jsx)(xI, { id: LI, className: e });
  }),
  _k = "IntroOverlay_glow_5fc31c94",
  hk = "IntroOverlay_hoverHelper_9cec2539",
  gk = "IntroOverlay_8d89d328",
  fk = "IntroOverlay_base__extraChapter_d35cc3d4",
  vk = "IntroOverlay_base__holiday_2f0d6d76",
  bk = "IntroOverlay_hoverHelper__withOverlay_ce4fe777",
  xk = "IntroOverlay_borderNoise_3087bf34",
  yk = Hs(function ({ className: e, withOverlay: t = !0 }) {
    const { model: a } = aS();
    if (a.isPaused.get()) return null;
    const s =
        a.widgetState.get() === dI.Intro
          ? a.hasExtraChapter.get()
          : a.isExtraChapter.get() || a.isExtraChapterHighlighted.get(),
      n = a.isHoliday.get();
    return (0, rr.jsxs)("div", {
      className: cs(gk, s && fk, n && vk, e),
      children: [
        (0, rr.jsx)("div", { className: _k }),
        (0, rr.jsx)("div", { className: cs(hk, t && bk) }),
        (0, rr.jsx)("div", { className: xk }),
      ],
    });
  }),
  Ck = Hs(function ({ id: e, elementId: t, className: a }) {
    const { model: s } = aS(),
      { startAnimation: n } = UN(),
      r = fS(),
      i = s.isExtraChapterHighlighted.get(),
      o = s.widgetState.get(),
      l = !i && o === dI.Progression;
    return (
      lS(() => {
        vS(r, o) &&
          n({
            id: e,
            animName: qS,
            soundCfg: o === dI.Intro ? qN.umg_widget_event_timer : qN.umg_widget_event_timer_simple,
          });
      }, [r, o]),
      (0, rr.jsx)(ZS, {
        id: e,
        elementId: t,
        withOverlaySplash: l,
        className: a,
        children:
          l &&
          (0, rr.jsxs)(rr.Fragment, {
            children: [
              (0, rr.jsx)(yk, { id: e, className: a, withOverlay: !1 }),
              (0, rr.jsx)(pk, { id: e, className: a }),
            ],
          }),
      })
    );
  }),
  jk = "CompletedOverlay_b04581f5";
var wk = "Intro_backgroundWrapper_dc209870",
  Nk = "Intro_background_e3bffd74",
  Ik = "Intro_2a905b68",
  Sk = "Intro_base__paused_129a2cdc",
  kk = "Intro_backgroundSize_6e0dec55",
  Pk = "Intro_icon_946c0059",
  Ek = Hs(function ({ id: e, elementId: t, className: a }) {
    const { model: s } = aS(),
      n = s.isPaused.get(),
      r = s.isHoliday.get(),
      { imagePath: i, videoPath: o } = (function (e = "bg") {
        const { model: t } = aS(),
          a = dN(),
          { seasonPath: s } = hS(
            "battle_pass.widget.background",
            e,
            t.hasExtraChapter.get(),
            t.isHoliday.get(),
            t.season.get(),
            a,
          );
        return {
          imagePath: gS(e, t.hasExtraChapter.get(), t.isHoliday.get(), t.season.get(), a),
          videoPath: pS.read(s),
        };
      })(),
      [l, c] = Ds(() => ({ from: { opacity: 0 }, config: { duration: 400, easing: SN } })),
      { maskPosition: d, backgroundContrast: u } = MI({
        id: e,
        elementId: t,
        onComplete: (0, jn.useCallback)(
          async (e) => {
            await Promise.all(c.start({ to: { opacity: 1 }, immediate: e }));
          },
          [c],
        ),
      });
    return (0, rr.jsxs)(q.div, {
      style: { maskPosition: d.val.to((e) => SI(-e)), filter: u.val.to(jI) },
      className: cs(Ik, n && Sk, a),
      children: [
        (0, rr.jsx)(q.div, {
          style: { maskPosition: d.val.to(SI) },
          className: wk,
          children: o
            ? (0, rr.jsx)("div", {
                className: kk,
                children: (0, rr.jsx)(Ue, { src: o, className: Nk, autoplay: !0, loop: !0 }, o),
              })
            : (0, rr.jsx)(_s, { path: i, className: Nk }),
        }),
        !r &&
          (0, rr.jsx)(q.div, {
            style: l,
            children: (0, rr.jsx)(_s, {
              path: "battlePass.widget.not_chosen",
              className: Pk,
              width: 60,
              height: 60,
            }),
          }),
      ],
    });
  }),
  Mk = "Index_f505a04a",
  Lk = (0, jn.memo)(function (e) {
    return (0, rr.jsx)(O, { ...e, classNames: { background: Mk } });
  }),
  Ak = { from: { opacity: 1, x: 0 }, config: { duration: 400, easing: SN } },
  Tk = { from: { opacity: 0, x: V(-20) }, to: { opacity: 1, x: 0 } };
var Dk = "Progression_de15ce34",
  Bk = "Progression_label_67b446d",
  Ok = "Progression_levelWrapper_20ffa2cd",
  Vk = "Progression_countdownWrapper_32ed00dc",
  Rk = "Progression_countdownSeparator_8d7ba9e7",
  Hk = "Progression_progress_f05295ff",
  $k = "Progression_pointsEarned_f0502458",
  zk = "Progression_progressSeparator_9c752d50",
  Fk = "Progression_progressBar_9c5d3f74",
  Wk = "Progression_levelPoints_f1c3b9c0",
  qk = "Progression_delta_2b36b7f6",
  Zk = "Progression_glow_bdccbc96",
  Gk = Hs(function ({ id: e, elementId: t, className: a }) {
    const { model: s } = aS(),
      n = fS(),
      r = s.levelPoints.get(),
      { pointsEarned: i, level: l } = s.lastSeenState.get(),
      c = (function () {
        const e = fS(),
          { model: t } = aS(),
          [a, s] = Ds(() => Ak),
          n = vS(e, t.widgetState.get());
        return (
          lS(() => {
            n && s.start(Tk);
          }, [n, s]),
          a
        );
      })(),
      { baseSpring: d } = (function ({ id: e, elementId: t }) {
        const { registerAnimation: a } = UN(),
          [s, n] = Ds(() => QS.init),
          r = Da((e) => {
            e.isPaused ? n.start({ ...QS.paused }) : n.start({ ...QS.unPaused });
          }),
          i = Da((e) => {
            e.isPaused
              ? n.start({ ...QS.paused, immediate: !0 })
              : n.start({ ...QS.unPaused, delay: 0, immediate: !0 });
          });
        return (
          hI({
            id: e,
            elementId: t,
            registerAnimation: a,
            animName: ek,
            config: (0, jn.useMemo)(() => ({ start: r, skip: i }), [i, r]),
          }),
          (0, jn.useMemo)(() => ({ baseSpring: s }), [s])
        );
      })({ id: e, elementId: t }),
      {
        pointsEarnedSpring: u,
        progressPoints: m,
        deltaGlowSpring: p,
        levelSpring: _,
      } = (function ({ id: e, elementId: t, pointsEarned: a, level: s, levelPoints: n }) {
        const { startAnimation: r, registerAnimation: i } = UN(),
          [l, c] = (0, jn.useState)(a),
          [d, u] = Ds(() => ({ ...YS })),
          [m, p] = Ds(() => ({ ...JS })),
          [_, h] = Ds(() => ({
            from: { pointsEarned: a, level: s, deltaLeft: o(a, n), deltaWidth: 0 },
          })),
          g = Da((e) => {
            const { phase_1: t, phase_2: a } = e;
            (p.start({ opacity: 1 }),
              h.start({
                to: async (e) => {
                  (await e({ deltaWidth: 0, deltaLeft: t.deltaLeft, immediate: !0 }),
                    await Te(500),
                    await e(t),
                    c(t.pointsEarned),
                    a &&
                      (await e({ ...XS, level: t.level }),
                      c(0),
                      await Promise.all(
                        u.start({
                          to: async (t) => {
                            (await t({ x: V(40), opacity: 0 }),
                              await t({ x: V(-20), opacity: 0, immediate: !0 }),
                              r({ id: LI, animName: qS }),
                              await e({ level: a.level, immediate: !0 }),
                              await t({ x: 0, opacity: 1 }));
                          },
                        }),
                      ),
                      await e(a),
                      c(a.pointsEarned)),
                    p.start({ opacity: 0 }));
                },
              }));
          });
        return (
          hI({
            id: e,
            elementId: t,
            registerAnimation: i,
            animName: tk,
            config: (0, jn.useMemo)(() => ({ start: g, skip: F }), [g]),
          }),
          (0, jn.useMemo)(
            () => ({
              pointsEarnedSpring: _,
              progressPoints: l,
              deltaGlowSpring: m,
              levelSpring: d,
            }),
            [m, d, _, l],
          )
        );
      })({ id: e, elementId: t, pointsEarned: i, level: l, levelPoints: r });
    return (0, rr.jsxs)(q.div, {
      style: d,
      className: cs(Dk, a),
      children: [
        (0, rr.jsxs)("div", {
          className: Bk,
          children: [
            (0, rr.jsxs)("div", {
              className: Ok,
              children: [
                (0, rr.jsx)(q.div, {
                  style: _,
                  children: (0, rr.jsx)(g, {
                    path: "user_missions.battle_pass_widget.stage",
                    params: {
                      level: (0, rr.jsx)(q.div, { children: u.level.to((e) => Math.ceil(e)) }),
                    },
                  }),
                }),
                n &&
                  (0, rr.jsxs)(q.div, {
                    style: c,
                    className: Vk,
                    children: [
                      (0, rr.jsx)(g, {
                        className: Rk,
                        path: "user_missions.battle_pass_widget.countdownSeparator",
                      }),
                      (0, rr.jsx)(bS, {}),
                    ],
                  }),
              ],
            }),
            (0, rr.jsx)(g, {
              className: Hk,
              path: "user_missions.battle_pass_widget.progress",
              params: {
                pointsEarned: (0, rr.jsx)(q.div, {
                  className: $k,
                  children: u.pointsEarned.to((e) => Math.round(e) % r),
                }),
                levelPoints: (0, rr.jsx)("div", { className: Wk, children: r }),
                progressSeparatorClass: zk,
              },
            }),
          ],
        }),
        r > 0 &&
          (0, rr.jsx)(Lk, {
            size: "small",
            className: Fk,
            value: m,
            maxValue: r,
            children: (0, rr.jsx)(q.div, {
              style: {
                width: u.deltaWidth.to((e) => `${e}%`),
                left: u.deltaLeft.to((e) => `${e}%`),
              },
              className: qk,
              children: (0, rr.jsx)(q.div, { style: p, className: Zk }),
            }),
          }),
      ],
    });
  }),
  Uk = "ProgressionOverlay_3554586a",
  Kk = "ProgressionOverlay_wrapper_db2f9b96",
  Xk = "ProgressionOverlay_base__paused_ecd0a7ba",
  Yk = "ProgressionOverlay_hoverHelper_9949a6b8",
  Jk = Hs(function ({ className: e, id: t }) {
    const { model: a } = aS(),
      s = a.isExtraChapterHighlighted.get(),
      n = st(s ? 1 : 0, { config: { duration: 400, easing: SN } });
    return (
      lS(() => {
        n.start(s ? 1 : 0);
      }, [s, n]),
      (0, rr.jsxs)("div", {
        className: (0, mI.default)(Uk, a.isPaused.get() && Xk),
        children: [
          (0, rr.jsxs)(q.div, {
            style: { opacity: n },
            className: Kk,
            children: [
              (0, rr.jsx)(yk, { id: t, className: e, withOverlay: !1 }),
              (0, rr.jsx)(pk, { id: t, className: e }),
            ],
          }),
          (0, rr.jsx)(q.div, {
            style: { opacity: n.to((e) => 1 - e) },
            className: (0, mI.default)(e, Yk),
          }),
        ],
      })
    );
  }),
  Qk = "BattlePass_layer_1bbff8f0",
  eP = "BattlePass_96294458",
  tP = "BattlePass_base__enabled_8ccab86c",
  aP = "BattlePass_rewardIcon_25776ae1",
  sP = new Map([
    [dI.Intro, [Ek, yk, PS, pk]],
    [dI.Progression, [Gk, Jk, KS, oS]],
    [
      dI.Completed,
      [
        PS,
        function ({ className: e }) {
          return (0, rr.jsx)("div", { className: (0, mI.default)(jk, e) });
        },
        oS,
      ],
    ],
  ]),
  nP = Hs(function () {
    const { model: e, controls: t } = aS();
    mk();
    const { play: a } = It(),
      s = e.widgetState.get(),
      n = e.timeLeft.get(),
      r = e.isPaused.get(),
      i = Qa(r),
      o = (0, jn.useRef)(!1),
      l = e.rewardsHash.get(),
      { containerRef: c, tooltipProps: d } = cN(
        (function (e, t) {
          const a = mS.read((e) => e.user_missions.hangarWidget.BattlePass("resId"));
          return t
            ? {
                resId: a,
                contentId: dS.read((e) =>
                  e.common.tooltip_window.simple_tooltip_content.SimpleTooltipContent("resId"),
                ),
                decoratorId: dS.read((e) =>
                  e.common.tooltip_window.tooltip_window.TooltipWindow("resId"),
                ),
                args: {
                  body: uS.read("battle_pass.tooltips.entryPoint.disabled.body"),
                  header: uS.read("battle_pass.tooltips.entryPoint.disabled.header"),
                },
              }
            : { resId: a, contentId: e };
        })(e.tooltipID.get(), r),
      ),
      u = n - 259200,
      [m, p] = (0, jn.useState)(n > 0 && u <= 0),
      _ = () => {
        o.current && ((o.current = !1), a(qN.umg_widget_event_hover_loop_stop));
      };
    ((0, jn.useEffect)(() => {
      if (u > 0) {
        p(!1);
        const e = window.setTimeout(
          () => {
            p(!0);
          },
          Math.min(u * Ee, ba),
        );
        return () => window.clearTimeout(e);
      }
      n > 0 && p(!0);
    }, [u, n]),
      (0, jn.useEffect)(() => {
        r && !i && a(qN.umg_widget_event_inactive);
      }),
      Wt(() => {
        (_(), t.widgetUnmounted());
      }));
    const h = sP.get(s);
    return (0, rr.jsxs)(pI, {
      ...d,
      id: LI,
      groupId: yN,
      position: 0,
      className: cs(eP, !r && tP),
      isDisabled: r,
      onClick: () => {
        (d.onClick(), r || (_(), t.openBattlePass()));
      },
      onMouseEnter: (e) => {
        (d.onMouseEnter(e),
          r ||
            (a("mouse-enter"),
            s === dI.Intro && ((o.current = !0), a(qN.umg_widget_event_hover_loop))));
      },
      onMouseLeave: () => {
        (d.onMouseLeave(), _());
      },
      ref: c,
      children: [
        (0, rr.jsxs)(_S.Provider, {
          value: m,
          children: [
            h &&
              h.map((e, t) =>
                (0, rr.jsx)(e, { id: "battlePassCardId", className: Qk }, `${s}-${t}`),
              ),
            (0, rr.jsx)(Ck, { id: LI, className: Qk }),
          ],
        }),
        l > 0 && (0, rr.jsx)(lk, { id: "battlePassCardId", className: aP }),
      ],
    });
  }),
  rP = {
    rootId: ks.resolve("aliases").read((e) => e.user_missions.hangarWidget.BattlePass("resId")),
  },
  iP = (0, jn.memo)(function () {
    return (0, rr.jsx)(tS, { options: rP, children: (0, rr.jsx)(nP, {}) });
  }),
  [oP, lP] = ds()(
    ({ observableModel: e }) => ({
      ...e.primitives([
        "currentTier",
        "currentProgress",
        "totalProgress",
        "combatReservesPoints",
        "rewardsHash",
        "lastSeenRewardsHash",
        "isRentHighlighted",
        "rentalVehicleLevel",
        "isCurrentCycleActive",
        "modeState",
        "isMaxLevel",
        "isSelectedSuitableVehicle",
      ]),
    }),
    ({ externalModel: e }) => ({
      goToProgressionScreen: e.createCallbackNoArgs("goToProgressionScreen"),
      goToCombatReservesScreen: e.createCallbackNoArgs("goToCombatReservesScreen"),
      goToSpecialVehicleRentScreen: e.createCallbackNoArgs("goToSpecialVehicleRentScreen"),
    }),
  ),
  cP = "BattleAbilities_background_ec130f50",
  dP = "BattleAbilities_d35c647c",
  uP = "BattleAbilities_base__disabled_67dfe09c",
  mP = "BattleAbilities_content_5fc4b974",
  pP = "BattleAbilities_tokenIcon_e4df06a0",
  _P = "BattleAbilities_price_2677eb93",
  hP = "BattleAbilities_priceBlock_ba6f26ce",
  gP = "BattleAbilities_text_a1bcf9fc",
  fP = "BattleAbilities_glow_66715a1c",
  vP = ks.resolve("aliases"),
  bP = ks.resolve("views"),
  xP = ks.resolve("strings"),
  yP = Hs(function () {
    const { model: e, controls: t } = lP(),
      { play: a } = It(),
      s = !(e.isCurrentCycleActive.get() && e.isSelectedSuitableVehicle.get()),
      n = e.modeState.get(),
      r = n === $s,
      i = n === zs,
      { containerRef: o, tooltipProps: l } = cN({
        contentId: bP.read((e) =>
          e.common.tooltip_window.simple_tooltip_content.SimpleTooltipContent("resId"),
        ),
        resId: vP.read((e) => e.user_missions.hangarWidget.Events("resId")),
        decoratorId: bP.read((e) => e.common.tooltip_window.tooltip_window.TooltipWindow("resId")),
        args:
          r || i
            ? {
                header: "",
                body: r
                  ? xP.readOrEmpty("fl_tooltips.commonTooltip.descriptionEnded")
                  : xP.readOrEmpty("fl_tooltips.commonTooltip.eventStartSoon"),
              }
            : s
              ? {
                  header: "",
                  body: xP.readOrEmpty("fl_tooltips.battleAbilities.incompatibleVehicle"),
                }
              : {
                  header: xP.readOrEmpty("fl_tooltips.battleAbilities.points.header"),
                  body: xP.readOrEmpty("fl_tooltips.battleAbilities.points.body"),
                },
      });
    return (0, rr.jsxs)(pI, {
      ref: o,
      position: 2,
      id: vj,
      groupId: oI,
      className: cs(dP, s && uP),
      visible: !0,
      ...l,
      onClick: () => {
        s || (l.onClick(), t.goToCombatReservesScreen(), a("click"));
      },
      onMouseEnter: () => {
        (l.onMouseEnter(), a("mouse-enter"));
      },
      children: [
        (0, rr.jsx)("div", { className: cP }),
        (0, rr.jsx)("div", {
          className: mP,
          children: (0, rr.jsx)(vs, {
            params: {
              value: (0, rr.jsxs)("div", {
                className: hP,
                children: [
                  (0, rr.jsx)("div", { className: fP }),
                  (0, rr.jsx)("div", { className: _P, children: e.combatReservesPoints.get() }),
                  (0, rr.jsx)("div", { className: pP }),
                ],
              }),
            },
            text: xP.readOrEmpty("fl_battle_abilities_setup.header.points"),
            className: gP,
          }),
        }),
      ],
    });
  }),
  CP = "BorderAnimation_layer_c811b5eb",
  jP = "BorderAnimation_490e40d3",
  wP = "BorderAnimation_border_a443d5de",
  NP = "BorderAnimation_borderImage_a901acf8",
  IP = "BorderAnimation_borderAnimation_1a02c9de",
  SP = { to: { opacity: 1 }, config: { duration: 300, easing: SN } },
  kP = { to: { opacity: 0 }, config: { duration: 600, easing: SN } },
  PP = { delay: 2700, from: { opacity: 1 }, to: { opacity: 0 } },
  EP = { delay: 800, from: { opacity: 0 }, to: [{ opacity: 1 }, { opacity: 0, delay: 100 }] },
  MP = "flBorderHighlight";
function LP({ id: e, elementId: t, className: a }) {
  const [s, n] = Ds(() => SP),
    [r, i] = Ds(() => kP),
    { registerAnimation: o, startAnimation: l } = UN();
  return (
    hI({
      id: e,
      elementId: t,
      registerAnimation: o,
      animName: MP,
      config: (0, jn.useMemo)(
        () => ({
          start: () => {
            (l({ id: e, animName: bI }), n.start(PP), i.start(EP));
          },
          skip: F,
        }),
        [e, l, n, i],
      ),
    }),
    (0, rr.jsxs)(q.div, {
      style: s,
      className: cs(jP, a),
      children: [
        (0, rr.jsx)(q.div, { style: r, className: cs(CP, wP) }),
        (0, rr.jsx)(q.div, { style: r, className: cs(CP, NP) }),
        (0, rr.jsx)(xI, { id: e, className: cs(CP, IP) }),
      ],
    })
  );
}
var AP = "Progression_background_2466805d",
  TP = "Progression_layer_61efd8f5",
  DP = "Progression_55f058b0",
  BP = "Progression_base__disabled_61efd8f5",
  OP = "Progression_video_359eee1b",
  VP = "Progression_content_773ac668",
  RP = "Progression_progressBar_304c076e",
  HP = "Progression_currentPoints_c8cb6fb1",
  $P = "Progression_separator_61efd8f5",
  zP = "Progression_needPoints_546057a2",
  FP = "Progression_upIcon_ff69537b",
  WP = "Progression_pointsContainer_a7ebc01a",
  qP = "Progression_progressHolder_28c84f1c",
  ZP = "Progression_rewardIcon_522eed51",
  GP = "Progression_topContainer_e5e4b24d",
  UP = "Progression_base__maxTier_61efd8f5",
  KP = "Progression_messageHolder_634a6697",
  XP = "Progression_textShadow_e8ff0ae6",
  YP = "Progression_message_8e75feb3",
  JP = "progression",
  QP = ks.resolve("strings"),
  eE = ks.resolve("intl"),
  tE = ks.resolve("views"),
  aE = ks.resolve("aliases"),
  sE = ks.resolve("videos"),
  nE = Hs(function () {
    !(function () {
      const { model: e } = lP(),
        { startAnimation: t } = UN(),
        a = e.rewardsHash.get(),
        n = e.lastSeenRewardsHash.get(),
        r = a > 0,
        i = r && a !== n;
      (s(() => {
        r &&
          t({ id: JP, animName: nk, animCallParams: { isPaused: !1 }, providerCfg: { skip: !i } });
      }),
        (0, jn.useEffect)(() => {
          i &&
            (t({ id: JP, animName: nk, animCallParams: { isPaused: !1 } }),
            t({ id: JP, animName: qS }),
            t({ id: JP, animName: MP }));
        }));
    })();
    const { play: e } = It(),
      { model: t, controls: a } = lP(),
      n = t.isMaxLevel.get(),
      r = t.currentProgress.get(),
      i = t.totalProgress.get(),
      o = t.isCurrentCycleActive.get(),
      l = t.modeState.get(),
      c = l === $s,
      d = l === zs,
      u = t.currentTier.get(),
      m = t.rewardsHash.get(),
      p = c
        ? ""
        : o
          ? n
            ? QP.readOrEmpty("fl_common.widget.maxTier")
            : ""
          : QP.readOrEmpty("fl_common.widget.eventStartSoon"),
      { containerRef: _, tooltipProps: h } = cN(
        c && !m
          ? {
              resId: aE.read((e) => e.user_missions.hangarWidget.Events("resId")),
              contentId: tE.read((e) =>
                e.common.tooltip_window.simple_tooltip_content.SimpleTooltipContent("resId"),
              ),
              decoratorId: tE.read((e) =>
                e.common.tooltip_window.tooltip_window.TooltipWindow("resId"),
              ),
              args: {
                header: "",
                body: QP.readOrEmpty("fl_tooltips.commonTooltip.descriptionEnded"),
              },
            }
          : {
              resId: aE.read((e) => e.user_missions.hangarWidget.Events("resId")),
              contentId: tE.read((e) => e.frontline.mono.lobby.tooltips.banner_tooltip("resId")),
            },
      );
    return (0, rr.jsxs)(pI, {
      ref: _,
      ...h,
      visible: !0,
      position: 1,
      id: JP,
      groupId: iI,
      className: cs(DP, !o && BP, n && UP),
      onClick: () => {
        (a.goToProgressionScreen(), e("click"));
      },
      onMouseEnter: () => {
        (h.onMouseEnter(), e("mouse-enter"));
      },
      children: [
        (0, rr.jsx)("div", {
          className: AP,
          children: (0, rr.jsx)(Ue, {
            loop: !0,
            autoplay: !0,
            src: sE.readOrEmpty("flHangarWidget.bg_meta"),
            className: OP,
          }),
        }),
        (0, rr.jsxs)("div", {
          className: VP,
          children: [
            (0, rr.jsxs)("div", {
              className: GP,
              children: [
                (0, rr.jsx)(Ws, {
                  level: (c || d) && u <= 1 ? 0 : u,
                  showAnimation: n,
                  size: Fs.x110,
                }),
                (n || !o) &&
                  (0, rr.jsxs)("div", {
                    className: KP,
                    children: [
                      !o && (0, rr.jsx)("div", { className: XP }),
                      (0, rr.jsx)(T, { isTruncationAvailable: !0, text: p, classMix: YP }),
                    ],
                  }),
              ],
            }),
            !n &&
              (o || c) &&
              (0, rr.jsxs)("div", {
                className: qP,
                children: [
                  (0, rr.jsxs)("div", {
                    className: WP,
                    children: [
                      (0, rr.jsx)("div", {
                        className: HP,
                        children: eE.formatNumber("integral", r),
                      }),
                      (0, rr.jsx)("div", {
                        className: $P,
                        children: QP.readOrEmpty("common.common.slash"),
                      }),
                      (0, rr.jsx)("div", { className: zP, children: eE.formatNumber("gold", i) }),
                      (0, rr.jsx)("div", { className: FP }),
                    ],
                  }),
                  (0, rr.jsx)(Lk, { className: RP, value: r, maxValue: i }),
                ],
              }),
          ],
        }),
        m > 0 &&
          (0, rr.jsxs)(rr.Fragment, {
            children: [
              (0, rr.jsx)(LP, { id: "progression", className: TP }, m),
              (0, rr.jsx)(ZS, { id: "progression", className: TP }),
              (0, rr.jsx)(lk, { id: "progression", className: ZP }),
            ],
          }),
      ],
    });
  }),
  rE = "HighlightAnimation_borderAnimationWrapper_6f7161d2",
  iE = "HighlightAnimation_border_207cb800",
  oE = "HighlightAnimation_borderAnimation_bd928e02",
  lE = "HighlightAnimation_borderAnimationHelperContainer_1002ca02",
  cE = "HighlightAnimation_glow_5a20066d",
  dE = "HighlightAnimation_glowWrapper_77f60791",
  uE = "HighlightAnimation_6b2dee1f",
  mE = "HighlightAnimation_borderAnimationHelper_c3afc7b9",
  pE = "HighlightAnimation_borderAnimationHelper__one_d8fb32c",
  _E = "HighlightAnimation_borderAnimationHelper__two_ebca39c8",
  hE = "HighlightAnimation_borderAnimationHelper__three_4b0794ad",
  gE = "HighlightAnimation_glowLine_ab64de86",
  fE = "HighlightAnimation_glowLine__one_bf874504",
  vE = "HighlightAnimation_glowLine__two_5ddebb7f",
  bE = "HighlightAnimation_glowLine__three_4b0794ad",
  xE = { to: { opacity: 0 }, config: { duration: 300, easing: SN } },
  yE = { delay: 3e3, from: { opacity: 0 }, to: { opacity: 1 } };
function CE({ className: e }) {
  const [t, a] = Ds(() => xE),
    { play: s } = It();
  return (
    (0, jn.useEffect)(() => {
      a.start({
        ...yE,
        onStart: () => {
          s(qN.umg_widget_event_timer);
        },
      });
    }, [a, s]),
    (0, rr.jsxs)(q.div, {
      style: t,
      className: cs(uE, e),
      children: [
        (0, rr.jsxs)("div", {
          className: rE,
          children: [
            (0, rr.jsx)("div", { className: iE }),
            (0, rr.jsx)("div", {
              className: oE,
              children: (0, rr.jsxs)("div", {
                className: lE,
                children: [
                  (0, rr.jsx)("div", { className: cs(mE, pE) }),
                  (0, rr.jsx)("div", { className: cs(mE, _E) }),
                  (0, rr.jsx)("div", { className: cs(mE, hE) }),
                ],
              }),
            }),
          ],
        }),
        (0, rr.jsx)("div", {
          className: cE,
          children: (0, rr.jsxs)("div", {
            className: dE,
            children: [
              (0, rr.jsx)("div", { className: cs(gE, fE) }),
              (0, rr.jsx)("div", { className: cs(gE, vE) }),
              (0, rr.jsx)("div", { className: cs(gE, bE) }),
            ],
          }),
        }),
      ],
    })
  );
}
var jE = "RentalTanks_highlight_fbb41243",
  wE = "RentalTanks_background_7f28206b",
  NE = "RentalTanks_a8cdde8f",
  IE = "RentalTanks_base__disabled_dc6483fa",
  SE = "RentalTanks_content_87d92422",
  kE = ks.resolve("aliases"),
  PE = ks.resolve("views"),
  EE = ks.resolve("strings"),
  ME = Hs(function () {
    const { model: e, controls: t } = lP(),
      { play: a } = It(),
      s = e.isCurrentCycleActive.get(),
      n = e.modeState.get(),
      r = n === $s,
      i = n === zs,
      { containerRef: o, tooltipProps: l } = cN({
        contentId: PE.read((e) =>
          e.common.tooltip_window.simple_tooltip_content.SimpleTooltipContent("resId"),
        ),
        decoratorId: PE.read((e) => e.common.tooltip_window.tooltip_window.TooltipWindow("resId")),
        resId: kE.read((e) => e.user_missions.hangarWidget.Events("resId")),
        args:
          r || i
            ? {
                header: "",
                body: r
                  ? EE.readOrEmpty("fl_tooltips.commonTooltip.descriptionEnded")
                  : EE.readOrEmpty("fl_tooltips.commonTooltip.eventStartSoon"),
              }
            : {
                header: EE.readOrEmpty("fl_info_page.addons.cellRent.header"),
                body: He(EE.readOrEmpty("fl_info_page.addons.cellRent.text_10"), {
                  vehiclesLevel: e.rentalVehicleLevel.get(),
                }),
              },
      });
    return (0, rr.jsxs)(pI, {
      ref: o,
      position: 2,
      id: "rentalTanks",
      groupId: lI,
      className: cs(NE, !s && IE),
      visible: !0,
      ...l,
      onClick: () => {
        s && (l.onClick(), t.goToSpecialVehicleRentScreen(), a("click"));
      },
      onMouseEnter: () => {
        (l.onMouseEnter(), a("mouse-enter"));
      },
      children: [
        (0, rr.jsx)("div", { className: wE }),
        (0, rr.jsx)("div", {
          className: SE,
          children: EE.readOrEmpty("fl_info_page.addons.cellRent.header"),
        }),
        e.isRentHighlighted.get() && (0, rr.jsx)(CE, { className: jE }),
      ],
    });
  }),
  LE = "HangarWidget_3b2c10a",
  AE = { rootId: ks.resolve("aliases").read((e) => e.user_missions.hangarWidget.Events("resId")) },
  TE = Hs(({ className: e }) => {
    const { model: t } = WN(),
      a = (function (e) {
        const t = mN(),
          a = (0, jn.useRef)([]),
          s = (0, jn.useRef)(!1),
          [n, r] = (0, jn.useState)(e);
        return (
          (0, jn.useEffect)(() => {
            x.shallow(n, e) || a.current.push(e);
          }),
          (0, jn.useEffect)(() => {
            if (s.current) return;
            const e = a.current.shift();
            if (!e) return;
            s.current = !0;
            const i = na(
              Object.entries(e),
              ([e, t]) => n[e] && !t,
              ([e]) => e,
            );
            t.enqueue(async () => {
              i.length && (await t.disappearGroups(i), await t.applyLayout(!1));
            }).then(() => {
              ((s.current = !1), r(e));
            });
          }),
          n
        );
      })({ [rI]: t.computes.isGroupVisible(rI) });
    return (0, rr.jsxs)("div", {
      className: cs(LE, e),
      children: [
        a.battlePass && (0, rr.jsx)(de, { children: (0, rr.jsx)(iP, {}) }),
        (0, rr.jsxs)(oP, {
          options: AE,
          children: [(0, rr.jsx)(nE, {}), (0, rr.jsx)(yP, {}), (0, rr.jsx)(ME, {})],
        }),
      ],
    });
  }),
  DE = { rootId: ks.resolve("aliases").read((e) => e.frontline.shared.UserMissions("resId")) },
  BE = ({ className: e }) =>
    (0, rr.jsx)(B, {
      soundsOverrides: ZN,
      children: (0, rr.jsx)(Is, {
        children: (0, rr.jsx)(nI, {
          children: (0, rr.jsx)(zN, {
            groups: cI,
            maxVisibleRowsAmount: dN() ? 4 : 6,
            children: (0, rr.jsx)(FN, { options: DE, children: (0, rr.jsx)(TE, { className: e }) }),
          }),
        }),
      }),
    }),
  OE = "HeroTankMarker_7a1c486d",
  VE = "HeroTankMarker_base__visible_d8b5c003",
  RE = "HeroTankMarker_vehicleName_a789e6e5",
  HE = "HeroTankMarker_vehicleType_d8b5c003",
  $E = Ss("HeroTankInfo"),
  zE = Hs(
    (0, jn.forwardRef)(function (e, t) {
      const { model: a } = Zs(),
        s = a.type.get(),
        n = (0, jn.useRef)(null),
        [r, i] = (0, jn.useState)(!1);
      return (
        (0, jn.useEffect)(
          () =>
            Za(() => {
              const e = a.heroTankMarker.get();
              i(e.isVisible);
              const t = n.current;
              if (!t) return null;
              t.style.transform = `translate(${V(e.posx)}px, ${V(e.posy)}px) translate(-50%, -50%)`;
            }),
          [a.heroTankMarker],
        ),
        (0, rr.jsxs)($E, {
          ...e,
          ref: Vt([t, n]),
          className: cs(OE, r && VE),
          children: [
            (0, rr.jsx)("div", { className: RE, children: a.name.get() }),
            (0, rr.jsx)("div", {
              className: HE,
              children:
                s && (0, rr.jsx)(_s, { path: `vehicleTypes.gold.${bt(s)}`, width: 32, height: 32 }),
            }),
          ],
        })
      );
    }),
  ),
  FE = "shop",
  WE = "storage",
  qE = "techtree",
  ZE = "barracks",
  GE = "tournament",
  UE = "clans",
  KE = "clan",
  XE = "missions",
  YE = "personalMissions",
  JE = "modeSelector",
  QE = "achievements",
  eM = "replays",
  tM = {
    [FE]: "shop",
    [WE]: "storage",
    [qE]: "techtree",
    [ZE]: "barracks",
    [GE]: "tournament",
    [UE]: "clans",
    [KE]: "clan",
    [XE]: "missions",
    [YE]: "personalMissions",
    [JE]: "modeSelector",
    [QE]: "profile",
    [eM]: "replays",
  },
  aM = (e) =>
    (0, rr.jsx)("svg", {
      width: 7,
      height: 18,
      viewBox: "0 0 7 18",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ...e,
      children: (0, rr.jsx)("path", {
        d: "M6.5 0H4.04686L0 9L4.04686 18H6.5L2.5 9L6.5 0Z",
        fill: "#EEEDE9",
        fillOpacity: 0.9,
      }),
    }),
  sM = {
    "media-wrapper": "MenuItem_media-wrapper_28be5e00",
    root: "MenuItem_root_28be5e00",
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
  nM = "forts",
  rM = ks.resolve("intl"),
  iM = ks.resolve("strings"),
  oM = {
    [JE]: "tooltips.header.battleType",
    [GE]: "tooltips.header.buttons.tournaments",
    [QE]: "tooltips.header.buttons.profile",
  },
  lM = {
    [UE]: "tooltips.header.buttons.clans.turnedOff",
    [YE]: "tooltips.header.buttons.personalMissionsDisabled",
    [nM]: "tooltips.header.buttons.forts.turnedOff",
  };
function cM(e) {
  return rM.toUpperCase(
    iM.readOrEmpty(`menu.headerButtons.${tM[e]}`) ||
      iM.readOrEmpty(`menu.headerButtons.${e}`) ||
      `{${e}}`,
  );
}
function dM({
  name: e,
  state: t,
  modeName: a,
  modeId: s,
  techTreeEvents: n,
  clanEmblem: r,
  onClick: i,
  modeIconPath: o,
  battleTypesPath: l = "R.images.gui.maps.icons",
}) {
  const c = It(),
    d = e === UE && r,
    u = bs(
      (0, jn.useMemo)(
        () =>
          (function (e, t) {
            const a = ((t && lM[e]) || oM[e]) ?? `tooltips.header.buttons.${e}`;
            return { header: iM.readOrEmpty(`${a}.header`), body: iM.readOrEmpty(`${a}.body`) };
          })(d ? nM : e, "disabled" === t),
        [e, t, d],
      ),
    ),
    m = Ze("techtreeDiscount"),
    p = n && "techtree" === e ? m : u;
  const _ = o ?? `${l}.battleTypes.c_64x64.${s}`;
  return (0, rr.jsx)("div", {
    ...p,
    className: cs(sM.base, sM[`base__${t}State`], sM[`base__${e}Name`]),
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
        case JE:
          return (0, rr.jsxs)(rr.Fragment, {
            children: [
              (0, rr.jsxs)("div", {
                className: sM.modeSelector,
                children: [
                  (0, rr.jsx)("div", { className: sM.label, children: cM(e) }),
                  a && (0, rr.jsx)("div", { className: sM.modeName, children: rM.toUpperCase(a) }),
                  (0, rr.jsx)("div", {
                    className: sM.modeIcon,
                    style: { backgroundImage: `url(${_})` },
                  }),
                ],
              }),
              (0, rr.jsx)(aM, { className: sM.arrow }),
            ],
          });
        case UE:
          return (0, rr.jsxs)("div", {
            className: sM.titleWrapper,
            children: [
              r &&
                (0, rr.jsx)("div", {
                  style: { backgroundImage: `url(${r})` },
                  className: sM.clanEmblem,
                }),
              (0, rr.jsx)("div", { className: sM.title, children: cM(d ? "clan" : e) }),
            ],
          });
        default:
          return (0, rr.jsx)("div", {
            className: sM.titleWrapper,
            children: (0, rr.jsx)("div", { className: sM.title, children: cM(e) }),
          });
      }
    })(),
  });
}
var [uM, mM] = ds()(
    ({ observableModel: e }) => ({
      menuItems: e.arrayClone("menuItems"),
      ...e.primitives(["modeName", "modeId", "hasTechTreeEvents", "clanEmblem"]),
    }),
    ({ externalModel: e }) => ({
      navigateTo: e.createCallback((e) => ({ name: e }), "onNavigate"),
    }),
  ),
  pM = "MainMenu_222da7b7",
  _M = Hs(function ({ className: e, battleTypesPath: t, modeIconPath: a }) {
    const { model: s, controls: n } = mM(),
      r = s.menuItems.get(),
      i = s.modeName.get(),
      o = s.modeId.get(),
      l = s.hasTechTreeEvents.get(),
      c = s.clanEmblem.get();
    return (0, rr.jsx)("div", {
      className: cs(pM, e),
      children: Ve(r, (e) =>
        (0, jn.createElement)(dM, {
          ...e,
          key: e.name,
          battleTypesPath: t,
          modeIconPath: a,
          onClick: n.navigateTo,
          modeName: i,
          modeId: o,
          techTreeEvents: l,
          clanEmblem: c,
        }),
      ),
    });
  });
function hM(e) {
  const { className: t, battleTypesPath: a, modeIconPath: s, ...n } = e;
  return (0, rr.jsx)(uM, {
    ...n,
    children: (0, rr.jsx)(_M, { className: t, battleTypesPath: a, modeIconPath: s }),
  });
}
function gM({ className: e }) {
  const { controls: t } = Us();
  return (0, rr.jsx)("div", {
    className: e,
    children: (0, rr.jsx)(Qe, {
      moveSpace: t.sceneWrapper.onMoveSpace,
      onMouseOver3dScene: t.sceneWrapper.onMouseOver3dScene,
    }),
  });
}
var fM = "VehicleInfoWidget_b24b193a",
  vM = "VehicleInfoWidget_info_8571b16b",
  bM = "VehicleInfoWidget_info__active_e94ce8a",
  xM = "VehicleInfoWidget_text_ff05c9a6",
  yM = "VehicleInfoWidget_role_141182a4",
  CM = "VehicleInfoWidget_currency_9c6f2463",
  jM = "VehicleInfoWidget_currencyIcon_59fc1b6d",
  wM = Hs(function () {
    const e = er().model.selectedVehicle(),
      t = er().model.selectedVehicleStatistics(),
      { breakpoint: a } = Cs(),
      s =
        ((n = e?.vehicleId),
        C(
          "vehicleRoles",
          (0, jn.useMemo)(() => [n], [n]),
        ));
    var n;
    if (e && t)
      return (0, rr.jsxs)("div", {
        className: fM,
        children: [
          (0, rr.jsxs)(ee, {
            ...(1 === e.role && s),
            className: cs(vM, 1 === e.role && bM),
            children: [
              (0, rr.jsx)(ee.Level, { className: xM, value: e.level }),
              xt(e.type) &&
                (0, rr.jsx)(ee.Type, {
                  type: e.type,
                  premium: t.elite,
                  size: a.weight <= fs.large.weight ? ee.Type.sizes.x48x48 : ee.Type.sizes.x64x64,
                }),
              (0, rr.jsx)(ee.Name, { className: xM, children: e.shortName }),
              0 !== e.role &&
                1 !== e.role &&
                (0, rr.jsx)(ee.Role, {
                  ...s,
                  classNames: { base: yM },
                  roleKey: Ye(e.role),
                  size: a.weight <= fs.large.weight ? ee.Role.sizes.x16x16 : ee.Role.sizes.x24x24,
                }),
            ],
          }),
          (0, rr.jsx)(k, {
            classNames: { base: CM, icon: jM },
            type: t.elite ? ga.eliteXp : ga.tankXP,
            reverse: !0,
            size: d.extraSmall,
            children: t.xp,
          }),
        ],
      });
  }),
  [NM, IM] = ds("PetObjectTooltipModel")(({ observableModel: e }) => ({ root: e.object() }), F),
  SM = ks.resolve("aliases"),
  kM = ks.resolve("views"),
  PM = SM.read((e) => e.hangar.shared.PetObjectTooltip("resId")),
  EM = kM.read((e) => e.mono.pet_system.tooltips.pet_storage_tooltip("resId")),
  MM = kM.read((e) => e.common.tooltip_window.simple_tooltip_content.SimpleTooltipContent("resId")),
  LM = At(function () {
    const { model: e } = IM(),
      { isStorageTooltipVisible: t, is3dObjectTooltipVisible: a } = e.root.get();
    return (
      (0, jn.useEffect)(() => {
        a
          ? it.tooltip.open(PM, MM)
          : t
            ? it.tooltip.open(PM, EM)
            : (it.tooltip.hide(PM, MM), it.tooltip.hide(PM, EM));
      }, [t, a]),
      null
    );
  }),
  [AM, TM] = ds()(
    ({ observableModel: e }) => ({ ...e.primitives(["message", "buttonLabel"]) }),
    ({ externalModel: e }) => ({ click: e.createCallbackNoArgs("onClick") }),
  ),
  DM = "AlertMessage_57819f00",
  BM = "AlertMessage_background_ef2212c5",
  OM = "AlertMessage_icon_188622a9",
  VM = "AlertMessage_message_bbb181cc",
  RM = "AlertMessage_button_3f36d33f",
  HM = "AlertMessage_buttonContent_b0e073ed",
  $M = Hs(function () {
    const { model: e, controls: t } = TM(),
      a = e.message.get();
    return (0, rr.jsxs)("div", {
      className: DM,
      children: [
        (0, rr.jsx)("div", { className: BM }),
        (0, rr.jsx)("div", { className: OM }),
        (0, rr.jsx)(Ms, {
          text: a,
          classMix: VM,
          binding: {
            button: (0, rr.jsx)(n, {
              theme: "secondary",
              size: "small",
              classNames: { base: RM, content: cs(HM) },
              onClick: t.click,
              autoAlignContent: !1,
              children: e.buttonLabel.get(),
            }),
          },
        }),
      ],
    });
  }),
  zM = "HangarScreen_261a5d2",
  FM = "HangarScreen_sceneWrapper_c15ed7d7",
  WM = "HangarScreen_vignette_50c67f89",
  qM = "HangarScreen_hangarPage_51660504",
  ZM = "HangarScreen_widgetsSection_89a30ed0",
  GM = "HangarScreen_vehicleInfo_efe7737f",
  UM = "HangarScreen_vehicleInfo__withAlert_9fd52100",
  KM = "HangarScreen_mainMenu_3ca9189a",
  XM = "HangarScreen_userMissions_22518280",
  YM = ks.resolve("aliases"),
  JM = YM.read((e) => e.hangar.shared.HeroTank("resId")),
  QM = YM.read((e) => e.hangar.shared.PetObjectTooltip("resId")),
  eL = { rootId: YM.read((e) => e.hangar.shared.MainMenu("resId")) },
  tL = Hs(function () {
    const e = -1 !== er().model.current.intCD.get(),
      t = Boolean(TM().model.message.get());
    return (0, rr.jsxs)("div", {
      className: zM,
      children: [
        (0, rr.jsx)(p, { id: JM, children: (0, rr.jsx)(zE, {}) }),
        (0, rr.jsx)(p, {
          id: QM,
          children: (0, rr.jsx)(NM, { options: { rootId: QM }, children: (0, rr.jsx)(LM, {}) }),
        }),
        (0, rr.jsx)("div", { className: WM }),
        (0, rr.jsx)(gM, { className: FM }),
        (0, rr.jsxs)("div", {
          className: qM,
          children: [
            (0, rr.jsx)(hM, { className: KM, options: eL }),
            (0, rr.jsxs)("div", {
              className: ZM,
              children: [
                t && (0, rr.jsx)($M, {}),
                e &&
                  (0, rr.jsx)("div", { className: cs(GM, t && UM), children: (0, rr.jsx)(wM, {}) }),
              ],
            }),
            (0, rr.jsx)(BE, { className: XM }),
          ],
        }),
      ],
    });
  }),
  aL = "ConfirmationPanel_afa99a14",
  sL = "ConfirmationPanel_currencies_7544112d",
  nL = "ConfirmationPanel_plus_335af158",
  rL = "ConfirmationPanel_buttons_ad07fa9b",
  iL = (e) => e > 0,
  oL = Ss("LeftBlock", "ConfirmationPanel_leftBlock_798f4c44"),
  lL = Ss("Currencies", sL),
  cL = Ss("Buttons", rL),
  dL = Ss("ConfirmationPanel", aL);
function uL(e) {
  return (0, rr.jsx)(lL, {
    className: e.className,
    children: jn.Children.map(e.children, (e, t) =>
      (0, rr.jsxs)(rr.Fragment, { children: [iL(t) && (0, rr.jsx)("div", { className: nL }), e] }),
    ),
  });
}
dL.Left = oL;
var mL = "DealPanel_leftBlock_e9fb0b4a",
  pL = "DealPanel_leftBlock__active_53e6aee9",
  _L = "DealPanel_checkbox_869cfc83",
  hL = "DealPanel_checkbox__active_53e6aee9",
  gL = "DealPanel_checkboxLabel_7df5996",
  fL = "DealPanel_icon_f0ce4668",
  vL = "DealPanel_value_438c7871",
  bL = "DealPanel_buttonWrapper_e6c7f6fe",
  xL = "DealPanel_button_d186abe4",
  yL = "DealPanel_buttonContent_25d6c73c";
function CL(e, t) {
  return t === ga.gold ? Ea.formatNumber("gold", e) : Ea.formatNumber("integral", e);
}
var jL = (0, jn.memo)(function ({ type: e, price: t }) {
    const a = wt({ value: d.small }, { large: { value: d.medium } });
    return (0, rr.jsxs)(k, {
      ...bs({
        body: ks
          .resolve("strings")
          .readOrEmpty(`tank_setup.dealPanel.tooltip.purchasedWith.${t.currency}`),
      }),
      reverse: !0,
      type: e ?? "formattedCurrency",
      size: a.value,
      classNames: { icon: fL, base: vL },
      enough: t.enough,
      children: [
        void 0 === e &&
          (0, rr.jsx)(_s, {
            className: fL,
            path: `library.currency.${t.currency}_${Ca[a.value]}x${Ca[a.value]}`,
            width: Ca[a.value],
            height: Ca[a.value],
          }),
        CL(t.value, e),
      ],
    });
  }),
  wL = ks.resolve("strings"),
  NL = "general",
  IL = "consumables",
  SL = "shells",
  kL = "boosters",
  PL = "repair";
function EL(e) {
  if (e && j.includes(e)) return e;
}
var ML = { [Zf]: kL, [Gf]: SL, [Uf]: IL },
  LL = Hs(function ({ type: e, className: t }) {
    const a = wt({ value: Ae.small }, { large: { value: Ae.medium } }),
      { model: s, controls: r } = Jv(),
      { model: i, controls: o } = ob(),
      { model: l, controls: c } = nb(),
      { model: d, controls: u } = fb(),
      { controls: m, model: p } = (() => {
        switch (e) {
          case qf:
            return { controls: c, model: l };
          case Zf:
            return { controls: o, model: i };
          case Uf:
            return { controls: r, model: s };
          case Gf:
            return { controls: u, model: d };
          default:
            return (
              console.error(`AmmunitionType ${e} is not supported`),
              {
                controls: {
                  cancel: () => console.error(`AmmunitionType ${e} is not supported`),
                  confirm: () => console.error(`AmmunitionType ${e} is not supported`),
                  toggleAutoRenewal: () => console.error(`AmmunitionType ${e} is not supported`),
                },
                model: null,
              }
            );
        }
      })(),
      _ = bs({ body: wL.readOrEmpty("tank_setup.dealPanel.tooltip.notEnough") }),
      h = ML[e],
      g = bs(
        (0, jn.useMemo)(
          () =>
            h === PL
              ? {
                  header: wL.readOrEmpty(`tank_setup.tooltip.autoRenewal.header.${h}`),
                  body: wL.readOrEmpty(`tank_setup.tooltip.autoRenewal.body.${h}`),
                }
              : h && h !== NL
                ? {
                    header: wL.readOrEmpty("tank_setup.tooltip.autoRenewal.header.general"),
                    body: wL.readOrEmpty(`tank_setup.tooltip.autoRenewal.body.${h}`),
                  }
                : {
                    header: wL.readOrEmpty("tank_setup.tooltip.autoRenewal.header.general"),
                    body: void 0,
                  },
          [h],
        ),
      ),
      f = p ? p.computes.dealData() : null,
      v = !!p && (f.canConfirm || f.prices.length > 0),
      b = Qa(v),
      x = void 0 !== h,
      y = It();
    return (
      (0, jn.useEffect)(() => {
        (v && !1 === b && y.play("expand", { target: "loadout:deal-panel" }),
          v || !0 !== b || y.play("collapse", { target: "loadout:deal-panel" }));
      }, [y, v, b]),
      p && f
        ? (0, rr.jsxs)(dL, {
            className: t,
            children: [
              (0, rr.jsx)(Ct, {
                ...(x && g),
                className: cs(_L, h && hL),
                classNames: { label: gL },
                checked: x && f.autoRenewalEnabled,
                size: a.value,
                onCheckedChange: m.toggleAutoRenewal,
                children: wL.readOrEmpty("tank_setup.dealPanel.autoRenew"),
              }),
              (0, rr.jsxs)(dL.Left, {
                className: cs(mL, v && pL),
                children: [
                  (0, rr.jsx)(uL, {
                    children: f.prices.map((e, t) =>
                      (0, rr.jsx)(jL, { type: EL(e.currency), price: e }, t),
                    ),
                  }),
                  (0, rr.jsxs)(cL, {
                    children: [
                      (0, rr.jsx)("div", {
                        ...(f.disabled && _),
                        className: bL,
                        children: (0, rr.jsx)(n, {
                          className: xL,
                          classNames: { content: yL },
                          disabled: (!f.canConfirm || f.disabled) && v,
                          onClick: m.confirm,
                          theme: rs.primary,
                          size: a.value,
                          "data-test-id": "dealPanelApply",
                          children: wL.readOrEmpty("tank_setup.dealPanel.button.apply"),
                        }),
                      }),
                      (0, rr.jsx)("div", {
                        className: bL,
                        children: (0, rr.jsx)(n, {
                          className: xL,
                          classNames: { content: yL },
                          disabled: !f.canCancel,
                          onClick: m.cancel,
                          theme: rs.secondary,
                          size: a.value,
                          "data-test-id": "dealPanelCancel",
                          soundTarget: "loadout:deal-panel:cancel_button",
                          children: wL.readOrEmpty("tank_setup.dealPanel.button.cancel"),
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
  AL = "Counter_20fd03c5",
  TL = "Counter_current_2e9b96d1",
  DL = "Counter_total_7d9a1992";
function BL({ current: e, total: t, className: a }) {
  const s = ks.resolve("intl");
  return (0, rr.jsx)(g, {
    className: cs(AL, a),
    path: "common.progress",
    upgradeLegacy: !0,
    split: !0,
    params: {
      current: (0, rr.jsx)("span", { className: TL, children: s.formatNumber("integral", e) }),
      total: (0, rr.jsx)("span", { className: DL, children: s.formatNumber("integral", t) }),
    },
  });
}
var OL = "Depot_dots_e22e1616",
  VL = "Depot_17898b99",
  RL = "Depot_value_929a2cc5",
  HL = "Depot_value__name_243cc0f1",
  $L = "Depot_value__count_c6469680",
  zL = "Depot_valueContainer_7c59dac8",
  FL = "Depot_slash_13b22cce",
  WL = ks.resolve("strings"),
  qL = ({ inDepotCount: e, itemsInVehicle: t }) => {
    const a = t >= 0;
    return (0, rr.jsxs)("div", {
      className: VL,
      children: [
        (0, rr.jsxs)("div", {
          className: cs(RL, HL),
          children: [
            (0, rr.jsx)(ra, { text: WL.readOrEmpty("tank_setup.shells.specification.inStorage") }),
            a &&
              (0, rr.jsxs)(rr.Fragment, {
                children: [
                  " ",
                  (0, rr.jsx)(g, { path: "common.common.slash" }),
                  " ",
                  (0, rr.jsx)(ra, {
                    text: WL.readOrEmpty("tank_setup.shells.specification.inVehicle"),
                  }),
                  (0, rr.jsx)("div", { className: zL }),
                ],
              }),
          ],
        }),
        (0, rr.jsx)("div", { className: OL }),
        (0, rr.jsxs)("div", {
          className: cs(RL, $L),
          children: [
            e,
            a &&
              (0, rr.jsxs)(rr.Fragment, {
                children: [
                  " ",
                  (0, rr.jsx)(g, { path: "common.common.slash", className: FL }),
                  " ",
                  t,
                ],
              }),
          ],
        }),
      ],
    });
  },
  ZL = "MechanicHeader_200c7176",
  GL = "MechanicHeader_textLabel_4f093ea6",
  UL = ks.resolve("strings"),
  KL = ks.resolve("images"),
  XL = ks.resolve("views"),
  YL = "x16x16",
  JL = "x24x24",
  QL = "x32x32";
function eA({
  className: e,
  mechanic: t,
  state: a,
  substate: s,
  withTextLabel: n,
  withRichTooltip: r,
}) {
  const i = ps(wt({ size: YL }, { extraLarge: { size: JL } }).size, QL),
    o = n ? UL.readOrEmpty(`tank_setup.tooltips.shellMechanics.${t}.${a}Label`) : "",
    l = n ? "" : KL.readOrEmpty(`loadout.shell_mechanics.${t}.properties.${i}.${s || a}`),
    c = bs({ body: UL.readOrEmpty(`tank_setup.tooltips.shellMechanics.${t}.${a}`) }),
    d = f(
      "image",
      (0, jn.useMemo)(
        () => ({
          image: {
            default: `loadout.shell_mechanics.${t}.properties.x60x60.${s}`,
            upscaled: `loadout.shell_mechanics.${t}.properties.x120x120.${s}`,
          },
          header: UL.readOrEmpty(`tank_setup.tooltips.shellMechanics.${t}.${a}`),
          body: s ? UL.readOrEmpty(`tank_setup.tooltips.shellMechanics.${t}.${s}.description`) : "",
          resId: XL.read((e) => e.mono.tooltips.tooltips("resId")),
        }),
        [t, a, s],
      ),
    );
  return (0, rr.jsx)("div", {
    ...(r && s ? d : c),
    className: cs(ZL, n && GL, e),
    style: n ? void 0 : { backgroundImage: `url(${l})` },
    children: n && o,
  });
}
var tA = "ParamNameInfo_aa238861",
  aA = ks.resolve("strings"),
  sA = "x16x16",
  nA = "x24x24",
  rA = "x32x32",
  iA = [
    "normalizationAngle",
    "ricochetAngle",
    "criticalHitChance",
    "penetrationLoss",
    "detonationType",
    "shieldPenetration",
  ];
function oA({ className: e, paramName: t }) {
  const a = ps(wt({ size: sA }, { extraLarge: { size: nA } }).size, rA);
  return (0, rr.jsx)("div", {
    ...f(
      "simple",
      (0, jn.useMemo)(
        () => ({
          header: aA.readOrEmpty(`menu.moduleInfo.params.${t}`),
          body: aA.readOrEmpty(`tooltips.moduleInfo.params.${t}`),
          resId: R.views.mono.tooltips.tooltips("resId"),
        }),
        [t],
      ),
    ),
    className: cs(tA, e),
    style: { backgroundImage: `url(R.images.gui.maps.icons.loadout.info.${a})` },
  });
}
var lA = Object.fromEntries(
  Object.entries(
    Object.assign({
      "./special_mechanics_images/shellCalibration.svg": () =>
        jf(() => import("../chunks/shellCalibration.js"), __vite__mapDeps([0]), import.meta.url),
    }),
  ).map(([e, t]) => [e.replace("./special_mechanics_images/", "").replace(".svg", ""), jn.lazy(t)]),
);
function cA({ name: e, ...t }) {
  const a = lA[e];
  return a
    ? (0, rr.jsx)(jn.Suspense, { fallback: null, children: (0, rr.jsx)(a, { ...t }) })
    : (console.warn(`Special mechanic's icon "${e}" not found.`), null);
}
var dA = "Properties_dots_1fc83e37",
  uA = "Properties_info_b62adb3a",
  mA = "Properties_metric_269f11b0",
  pA = "Properties_values_52eb3f96",
  _A = "Properties_value_98068bf",
  hA = "Properties_value__multi_35bc3052",
  gA = "Properties_value__special_7baac271",
  fA = "Properties_name_fc42a225",
  vA = "Properties_truncatedName_2b410a3c",
  bA = "Properties_headerWrapper_27aba2b1",
  xA = "Properties_header_d09b008a",
  yA = "Properties_paramNameInfo_723b6284",
  CA = "Properties_verticalBar_367d6054",
  jA = "Properties_truncatedValue_88807181",
  wA = "Properties_specialIconContainer_d0657e5",
  NA = "Properties_slash_d36afb1c",
  IA = "Properties_specialIcon_6ce31e02",
  SA = ks.resolve("strings"),
  kA = ks.resolve("views");
function PA({ item: e, columnDefsLength: t }) {
  const a = SA.readOrEmpty("common.common.slash"),
    s = _b.find((t) => e.values.some((e) => e.mechanic === t)),
    n = f(
      "special_mechanic",
      (0, jn.useMemo)(
        () => ({
          textPath: `tooltips.specialMechanics.${s}.${e.paramName}`,
          resId: kA.read((e) => e.mono.hangar.tooltips("resId")),
        }),
        [e.paramName, s],
      ),
    ),
    r = s
      ? (function (e) {
          const t = new Set();
          return e.filter((e) => !t.has(e.value) && (t.add(e.value), !0));
        })(e.values)
      : e.values,
    i = void 0 !== s && r.length > 1;
  return (0, rr.jsxs)("div", {
    className: uA,
    children: [
      (0, rr.jsxs)("div", {
        className: fA,
        children: [
          (0, rr.jsx)(ra, {
            className: vA,
            text: SA.readOrEmpty(`menu.moduleInfo.params.${e.paramName}`),
          }),
          (0, rr.jsx)("div", { className: mA, children: e.metricValue }),
          iA.includes(e.paramName) && (0, rr.jsx)(oA, { paramName: e.paramName, className: yA }),
        ],
      }),
      (0, rr.jsx)("div", { className: dA }),
      (0, rr.jsxs)("div", {
        className: pA,
        children: [
          Ve(r, ({ value: e }, s) =>
            (0, rr.jsxs)(
              "div",
              {
                className: cs(_A, t > 1 && hA, i && gA),
                children: [
                  (0, rr.jsx)(ra, { className: jA, text: e }),
                  i && s < r.length - 1 && (0, rr.jsx)("span", { className: NA, children: a }),
                ],
              },
              s,
            ),
          ),
          i &&
            (0, rr.jsx)("div", {
              ...n,
              className: wA,
              children: (0, rr.jsx)(cA, { name: s, className: IA }),
            }),
        ],
      }),
    ],
  });
}
var EA = Hs(function ({ properties: e }) {
    const t = (0, jn.useRef)(null),
      a = (0, jn.useRef)(0),
      s = (0, jn.useRef)(null),
      { screenHeightRem: n } = Cs(),
      r = wt({ margin: 300 }, { large: { margin: 400 } }),
      { model: i } = fb(),
      o = i.computes.properties.maxCount();
    return (
      (0, jn.useEffect)(() => {
        if (!t.current || !s.current) return;
        const i = s.current.getBoundingClientRect().height / e.rows.length;
        ((a.current = et(Math.min(0.3 * (V(n) - r.margin), i * o))),
          (t.current.style.height = `${a.current}rem`));
      }, [r.margin, n, e.rows.length, o]),
      (0, rr.jsxs)(rr.Fragment, {
        children: [
          i.computes.properties.hasColumns() &&
            (0, rr.jsx)("div", {
              className: bA,
              children: Ve(
                e.columnDefs,
                ({ mechanic: e, state: t, substate: a, withTextLabel: s, withRichTooltip: n }) =>
                  (0, rr.jsx)(
                    eA,
                    {
                      mechanic: e,
                      state: t,
                      substate: a,
                      className: xA,
                      withTextLabel: s,
                      withRichTooltip: n,
                    },
                    `${e}_${t}`,
                  ),
              ),
            }),
          (0, rr.jsx)("div", {
            ref: t,
            style: { height: `${a.current}rem` },
            children: (0, rr.jsx)(Xa, {
              children: (0, rr.jsx)(Ba, {
                barClassNames: { base: CA },
                children: (0, rr.jsx)("div", {
                  ref: s,
                  children: Ve(e.rows, (t) =>
                    (0, rr.jsx)(
                      PA,
                      { item: t, columnDefsLength: e.columnDefs.length },
                      t.paramName,
                    ),
                  ),
                }),
              }),
            }),
          }),
        ],
      })
    );
  }),
  MA = "Purchase_dots_d9d3457f",
  LA = "Purchase_af8f3130",
  AA = "Purchase_name_65a91ea1",
  TA = "Purchase_truncatedName_1a1b569e",
  DA = "Purchase_price_ab5543a2",
  BA = "Purchase_result_30cf04b6",
  OA = "Purchase_value_42fc81c7",
  VA = "Purchase_value__noPurchase_6a393ee1",
  RA = "Purchase_sign_f12fc5e",
  HA = "Purchase_sign__multiplier_ad4260a8",
  $A = "Purchase_sign__equals_7a1985a2",
  zA = "Purchase_discountWrapper_6bf4ebbd",
  FA = "Purchase_discountWrapper__withoutDiscount_f38adfdd",
  WA = "Purchase_icon_76ffe763",
  qA = "Purchase_icon__currency_d2625764",
  ZA = "Purchase_icon__withDiscount_2c2820e6",
  GA = ks.resolve("strings"),
  UA = Hs(({ shell: e }) => {
    const { boughtCount: t, totalPrice: a, price: s, itemPrice: n } = e,
      r = e.price.previousPrice[0],
      i = void 0 !== r,
      o = wt({ value: d.extraSmall }, { extraLarge: { value: d.small } }),
      l = Ze(
        "priceDiscount",
        (0, jn.useMemo)(() => (n && r ? [n.value, r.value, n.currency] : void 0), [n, r]),
        (0, jn.useMemo)(() => ({ disabled: !i }), [i]),
      );
    return (0, rr.jsxs)("div", {
      className: LA,
      children: [
        (0, rr.jsx)("div", {
          className: AA,
          children: (0, rr.jsx)(ra, {
            className: TA,
            text: GA.readOrEmpty("tank_setup.shells.specification.price"),
          }),
        }),
        (0, rr.jsx)("div", { className: MA }),
        (0, rr.jsxs)("div", {
          className: BA,
          children: [
            (0, rr.jsx)("div", { className: cs(OA, VA), children: t }),
            (0, rr.jsx)("div", {
              className: cs(RA, HA),
              children: (0, rr.jsx)(g, { path: "common.multiplierSmall" }),
            }),
            (0, rr.jsxs)("div", {
              ...l,
              className: DA,
              children: [
                s.price.map((e, t) =>
                  (0, rr.jsx)(
                    Ge,
                    {
                      type: Ce.currency,
                      enabled: i,
                      size: o.value,
                      classNames: { base: cs(zA, !i && FA), discount: cs(WA, i && ZA) },
                      children: (0, rr.jsx)(k, {
                        reverse: !0,
                        size: d.small,
                        classNames: { base: OA, icon: cs(WA, qA) },
                        type: e.currency,
                        enough: e.enough,
                        children: e.value,
                      }),
                    },
                    t,
                  ),
                ),
                (0, rr.jsx)("div", {
                  className: cs(RA, $A),
                  children: (0, rr.jsx)(g, { path: "readable_key_names.KEY_EQUALS" }),
                }),
              ],
            }),
            t > 0
              ? a.price.map((e, t) =>
                  (0, rr.jsx)(
                    k,
                    {
                      reverse: !0,
                      size: d.small,
                      classNames: { base: OA, icon: cs(WA, qA) },
                      type: e.currency,
                      enough: e.enough,
                      children: e.value,
                    },
                    t,
                  ),
                )
              : (0, rr.jsx)(k, {
                  reverse: !0,
                  size: d.small,
                  classNames: { base: cs(OA, VA), icon: cs(WA, qA) },
                  type: ga.credits,
                  children: 0,
                }),
          ],
        }),
      ],
    });
  }),
  KA = "ShellMechanicOverlay_f424d415",
  XA = ks.resolve("views"),
  YA = ks.resolve("strings"),
  JA = "x32x32",
  QA = "x48x48",
  eT = "x64x64";
function tT({ mechanic: e, className: t }) {
  const a = ps(wt({ size: JA }, { extraLarge: { size: QA } }).size, eT),
    s = f(
      "image",
      (0, jn.useMemo)(
        () => ({
          image: {
            default: `vehicle_hub.mechanics.${e.special ? "special." : ""}x68x68.${e.name}`,
            upscaled: `vehicle_hub.mechanics.${e.special ? "special." : ""}x128x128.${e.name}`,
          },
          header: YA.readOrEmpty(`vehicle_hub.abilities.special.name.${e.name}`),
          body: YA.readOrEmpty(`tank_setup.tooltips.shellMechanics.${e.name}.description`),
          resId: XA.read((e) => e.mono.tooltips.tooltips("resId")),
        }),
        [e],
      ),
    );
  return (0, rr.jsx)("div", {
    className: cs(KA, t),
    style: {
      backgroundImage: `url(R.images.gui.maps.icons.loadout.shell_mechanics.${e.name}.${a}.shell_setup_icon)`,
    },
    ...s,
  });
}
var aT = "Shell_fullArea_7aaeeab0",
  sT = "Shell_controls_fbdd51bb",
  nT = "Shell_dc4438ed",
  rT = "Shell_mainInfo_cf4a5ca0",
  iT = "Shell_icon_5ea0be74",
  oT = "Shell_counter_ce287a95",
  lT = "Shell_counter__dimmed_42079d5d",
  cT = "Shell_name_2544fef6",
  dT = "Shell_grow_fa2782e5",
  uT = "Shell_detailedInfo_5686c3ac",
  mT = "Shell_slider_4d24fb7c",
  pT = "Shell_thumb_5a51073f",
  _T = "Shell_shellMechanic_1edd0a97",
  hT = ks.resolve("aliases"),
  gT = ks.resolve("images"),
  fT = ks.resolve("strings"),
  vT = ks.resolve("intl"),
  bT = "big",
  xT = "large",
  yT = Ss("Shell", nT),
  CT = Hs(({ value: e, index: t }) => {
    const { model: a, controls: s } = fb(),
      n = a.ammoMaxSize.get() - a.installedCount.get() + e.count,
      r = vT.toUpperCase(fT.readOrEmpty(`item_types.shell.kinds.${e.kind}`)),
      i = Ze(
        "hangarShell",
        (0, jn.useMemo)(() => [e.intCD], [e.intCD]),
      ),
      o = ia(
        "tankSetupShellItem",
        (0, jn.useMemo)(
          () => ({
            intCD: e.intCD,
            slotType: Rf,
            fieldType: 0,
            installedSlotId: t,
            itemInstalledSetupIdx: e.itemInstalledSetupIndex,
            itemInstalledSetupSlotIdx: t,
            isMounted: e.mountedState !== lb,
            isMountedMoreThanOne: e.mountedState === db,
            emitterUID: window.subViews.get(hT.read((e) => e.hangar.shared.Shells("resId"))).uid,
          }),
          [t, e.intCD, e.itemInstalledSetupIndex, e.mountedState],
        ),
      ),
      l = wt({ value: bT }, { large: { value: xT } }),
      c = wt({ value: je.small }, { medium: { value: je.medium } }),
      d = (0, jn.useCallback)((e, t) => s.updateShellCount(e, t), [s]);
    return (0, rr.jsxs)(yT, {
      children: [
        (0, rr.jsxs)("div", {
          ...i,
          ...o,
          className: rT,
          children: [
            (0, rr.jsx)("div", {
              className: iT,
              style: { backgroundImage: `url(${gT.readOrEmpty(`shell.${l.value}.${e.type}`)})` },
            }),
            (0, rr.jsx)("div", { className: cs(oT, 0 === e.count && lT), children: e.count }),
            (0, rr.jsx)("div", { className: cT, children: r }),
          ],
        }),
        e.mainMechanic &&
          !hb.includes(e.mainMechanic.name) &&
          (0, rr.jsx)(tT, { mechanic: e.mainMechanic, className: _T }),
        (0, rr.jsxs)(ue, {
          soundTarget: "loadout:shells_setup:screen",
          step: a.clip.get(),
          className: mT,
          value: e.count,
          maxValue: a.ammoMaxSize.get(),
          limit: n,
          size: c.value,
          onValueChange: (t) => d(e.intCD, t),
          children: [
            c.value === je.medium && (0, rr.jsx)(ue.Controls, { className: sT }),
            (0, rr.jsx)(ue.LimitationArea, { className: aT }),
            (0, rr.jsx)(ue.Thumb, { className: pT }),
            (0, rr.jsx)(ue.InteractiveArea, { className: aT }),
          ],
        }),
        (0, rr.jsxs)("div", {
          className: uT,
          children: [
            (0, rr.jsx)(EA, { properties: e.properties }),
            (0, rr.jsx)("div", { className: dT }),
            (0, rr.jsx)(qL, { inDepotCount: e.inDepotCount, itemsInVehicle: e.itemsInVehicle }),
            (0, rr.jsx)(UA, { shell: e }),
          ],
        }),
      ],
    });
  }),
  jT = "ShellTransition_e18df2a",
  wT = Hs(function ({
    index: e,
    intCD: t,
    swapping: a,
    onAnimationEnd: s,
    onSwappingEnd: n,
    leftID: r,
  }) {
    const [i, o] = (0, jn.useState)(!1),
      { model: l } = fb(),
      c = l.computes.shellByIntCD(t),
      d = Qa(c?.intCD),
      u = r === e;
    (0, jn.useEffect)(() => {
      d && d !== t && l.computes.shellExist(d) && o(!0);
    }, [t, d, l.computes]);
    const m = Rs({
      transform: a ? `translateX(${i ? (u ? 60 : -60) : 0}rem)` : "translateX(0rem)",
      config: { duration: 200 },
      onRest: () => {
        a ? (n(), o(!1)) : s();
      },
    });
    if (c)
      return (0, rr.jsx)(Os.div, {
        className: jT,
        style: m,
        children: (0, rr.jsx)(CT, { value: c, index: e }),
      });
  }),
  NT = "SwapButton_20088d5c",
  IT = "SwapButton_icon_cd2823d0";
function ST({ index: e, onSwap: t }) {
  return (0, rr.jsx)(n, {
    theme: n.themes.secondary,
    id: `swap-${e}`,
    onClick: function () {
      t(e);
    },
    className: NT,
    autoAlignContent: !1,
    children: (0, rr.jsx)("div", { className: IT }),
  });
}
var kT = "ShellsSetup_fc3cf257",
  PT = "ShellsSetup_counter_107998e7",
  ET = "ShellsSetup_container_eef616b1";
function MT(e, t) {
  if (!t) return -1;
  const a = e.find((e, a) => t[a] !== e);
  return void 0 !== a ? e.indexOf(a) : -1;
}
var LT = Hs(function () {
    const { model: e, controls: t } = fb(),
      a = e.computes.shellIDs(),
      s = Qa(a),
      [n, r] = (0, jn.useState)(!1),
      [i, o] = (0, jn.useState)(MT(a, s));
    function l(e) {
      n || t.swapSlots({ leftID: e, rightID: e + 1 });
    }
    (0, jn.useEffect)(() => {
      s && a !== s && s[0] && a.includes(s[0]) && (o(MT(a, s)), r(!0));
    }, [a, s]);
    const c = La(() => Ls(), [], 150);
    function d() {
      r(!1);
    }
    return (0, rr.jsxs)("div", {
      className: kT,
      children: [
        (0, rr.jsx)(BL, {
          className: PT,
          current: e.installedCount.get(),
          total: e.ammoMaxSize.get(),
        }),
        (0, rr.jsx)("div", {
          className: ET,
          children: Ve(a, (t, s) =>
            (0, rr.jsxs)(
              jn.Fragment,
              {
                children: [
                  e.computes.shellExist(t) &&
                    (0, rr.jsx)(wT, {
                      index: s,
                      intCD: t,
                      onAnimationEnd: c,
                      onSwappingEnd: d,
                      leftID: i,
                      swapping: n,
                    }),
                  s < a.length - 1 && (0, rr.jsx)(ST, { index: s, onSwap: l }),
                ],
              },
              s,
            ),
          ),
        }),
      ],
    });
  }),
  AT = "Standard",
  TT = "Bounty",
  DT = "Improved",
  BT = "Experimental",
  OT = "Equipment",
  VT = "Crew",
  RT = {
    smallRepairkit: 1,
    smallMedkit: 2,
    handExtinguishers: 3,
    largeRepairkit: 4,
    builtinRepairkit: 5,
    largeMedkit: 6,
    autoExtinguishers: 7,
    qualityFuel: 8,
    excellentFuel: 9,
    ration: 10,
    chocolate: 11,
    cocacola: 12,
    hotCoffee: 13,
    ration_uk: 14,
    ration_czech: 15,
    ration_china: 16,
    ration_japan: 17,
    ration_poland: 18,
    ration_sweden: 19,
    ration_italy: 20,
  };
var HT = "Action_ab2a2b2e",
  $T = "Action_base__disabled_b9b41a41",
  zT = "Action_button_4133ceee",
  FT = "Action_icon_f3030341",
  WT = ks.resolve("images"),
  qT = ks.resolve("strings"),
  ZT = ["cancel", "undo"],
  GT = (e, t) => (2 === t ? `${e}_last_modernized` : `${e}_modernized`),
  UT = (0, jn.forwardRef)(function (
    {
      actionType: e,
      imageSource: t,
      modernized: a,
      level: s,
      freeToDemount: r,
      disabledTooltipText: i,
      disabled: o = !1,
      tooltipBodyPath: l,
      className: c,
      onClick: d,
    },
    u,
  ) {
    const m = a ? GT(e, s) : e,
      p = o && "cancel" !== e,
      _ = (0, jn.useMemo)(
        () => ({
          backgroundImage: `url(${t || WT.readOr(`loadout.actions.${m}`, () => WT.readOrEmpty(`tanksetup.actions.${m}`))})`,
        }),
        [m, t],
      );
    return (0, rr.jsx)("div", {
      ...bs(
        (0, jn.useMemo)(() => {
          if (p) return { body: i };
          const t = ((e, t, a, s) => (a ? "demount_plus" : s ? GT(e, t) : e))(e, s, r, a);
          return {
            header: qT.readOrEmpty(`tank_setup.tooltips.action.title.${t}`),
            body: ZT.includes(t)
              ? void 0
              : qT.readOrEmpty(`tank_setup.tooltips.action.description.${l || t}`),
          };
        }, [e, p, i, r, a, s, l]),
      ),
      className: cs(HT, p && $T, c),
      children: (0, rr.jsx)(n, {
        ref: u,
        autoAlignContent: !1,
        theme: rs.secondary,
        className: zT,
        disabled: p,
        "data-test-id": e,
        onClick: function (t) {
          (t.stopPropagation(), p || d(e));
        },
        children: (0, rr.jsx)("div", { className: FT, style: _ }),
      }),
    });
  }),
  KT = {
    "media-wrapper": "Actions_media-wrapper_9b5544a9",
    root: "Actions_root_9b5544a9",
    base: "Actions_a97dca87",
    base__hidden: "Actions_base__hidden_6a4e6a7d",
    "options-hide": "Actions_options-hide_9b5544a9",
    base__shown: "Actions_base__shown_b7ebaba7",
    "options-show": "Actions_options-show_9b5544a9",
    actionItem: "Actions_actionItem_7ebdfdac",
  },
  XT = ks.resolve("strings");
function YT({ availableActions: e, buyMoreDisabled: t, onActionClick: a, className: s }) {
  return (0, rr.jsxs)("div", {
    className: cs(KT.base, KT["base__" + (e.length ? "shown" : "hidden")], s),
    children: [
      e.includes("add_one") &&
        (0, rr.jsx)(UT, {
          actionType: "add_one",
          disabled: t,
          onClick: a,
          className: KT.actionItem,
          disabledTooltipText: XT.readOrEmpty("tank_setup.dealPanel.tooltip.notEnough"),
        }),
      e.includes("cancel") &&
        (0, rr.jsx)(UT, { actionType: "cancel", onClick: a, className: KT.actionItem }),
      e.includes("undo") &&
        (0, rr.jsx)(UT, { actionType: "undo", onClick: a, className: KT.actionItem }),
    ],
  });
}
function JT(e) {
  switch (e) {
    case Nb:
      return Pe.directiveBooster;
    case wb:
      return Pe.directiveSubstitute;
    case Sb:
      return Pe.builtInEquipment;
    case Ib:
      return Pe.improved;
    case kb:
      return Pe.experimental;
    case yb:
    case Cb:
    case jb:
      return Pe.trophy;
    default:
      return Pe.none;
  }
}
function QT(e, t, a) {
  const s =
    /(?:%\(|{)(\w*?)(?:_?[Oo]pen|_?Start)(?:\)s|})([\s\S]*?)(?:%\(|{)\w*?(?:_?[Cc]lose|_?End)(?:\)s|})/g;
  let n = s.exec(e),
    r = e,
    i = 0;
  const o = {};
  for (; n;) {
    const l = n[0],
      c = n[1] ?? "",
      d = n[2] ?? "",
      u = "binding" + i++;
    ((r = r.replace(l, `{${u}}`)),
      (o[u] = (0, rr.jsx)(vs, {
        style: { color: t[c], alignItems: "flex-start" },
        upgradeLegacy: !0,
        text: d,
        params: a,
      })),
      (n = s.exec(e)));
  }
  return [r, o];
}
var eD = "Price_c00fc2b8",
  tD = "Price_icon_10cf08bf",
  aD = "Price_icon__reverse_74b70497",
  sD = "Price_value_7bb80c7b";
function nD({
  price: e,
  previousPrice: t,
  withZeroValue: a,
  ignoreDiscount: s,
  valueFirst: n,
  priceSeparator: r,
}) {
  const i = wt({ value: d.extraSmall }, { small: { value: d.small } });
  return (0, rr.jsx)("div", {
    className: eD,
    children: e.map(
      ({ value: e, currency: o, enough: l }, c) =>
        (a || e > 0) &&
        (0, rr.jsxs)(
          jn.Fragment,
          {
            children: [
              c > 0 && r,
              (0, rr.jsx)(Ge, {
                size: i.value,
                enabled: !s && t.length > 0,
                type: Ce.currency,
                children: (0, rr.jsx)(k, {
                  type: o,
                  reverse: n,
                  enough: l,
                  classNames: { icon: cs(tD, n && aD), base: sD },
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
var rD = "Storage_icon_f8835a96",
  iD = "Storage_icon__reverse_aada9c9e",
  oD = "Storage_value_edb11ec6";
function lD({ itemsInStorage: e, valueFirst: t }) {
  return (0, rr.jsx)(k, {
    type: ga.depot,
    reverse: t,
    size: d.small,
    enough: Boolean(e),
    classNames: { base: oD, icon: cs(rD, t && iD) },
    children: e,
  });
}
var cD = {
  "media-wrapper": "Options_media-wrapper_6818b5da",
  root: "Options_root_6818b5da",
  base: "Options_945d8a9e",
  base__hidden: "Options_base__hidden_1ab7a478",
  "options-hide": "Options_options-hide_6818b5da",
  base__shown: "Options_base__shown_620b2679",
  "options-show": "Options_options-show_6818b5da",
};
function dD({
  price: e,
  mounted: t,
  possibleZeroCount: a,
  show: s,
  itemsInStorage: n,
  className: r,
}) {
  const i = n || a,
    o = ps("loadout.installed_on_vehicle", "loadout.installed_on_vehicle_upscale");
  return (0, rr.jsx)("div", {
    className: cs(cD.base, cD["base__" + (s ? "shown" : "hidden")], r),
    children: t
      ? (0, rr.jsx)(_s, { path: o, width: 24, height: 24 })
      : i
        ? (0, rr.jsx)(lD, { itemsInStorage: n })
        : e && (0, rr.jsx)(nD, { ...e, valueFirst: !0 }),
  });
}
var uD = "LoadoutItem_49fa5e5c",
  mD = "LoadoutItem_base__hoverless_a07e4977",
  pD = "LoadoutItem_content_b29d68c8",
  _D = "LoadoutItem_base__disabled_404624aa",
  hD = "LoadoutItem_image_2b6b3694",
  gD = "LoadoutItem_nameWrapper_ac53f36d",
  fD = "LoadoutItem_name_f6b620d8",
  vD = "LoadoutItem_specializations_8e86b08",
  bD = "LoadoutItem_options_fe0297a6",
  xD = "LoadoutItem_actions_bfa3b2fd",
  yD = "LoadoutItem_text_b7eb40cc",
  CD = "LoadoutItem_text__short_192105ec",
  jD = [Hv, Vv, Rv, Ov],
  wD = Ss("ConsumablesItem", uD),
  ND = { colorTag: "#64ba21", whiteSpanish: "rgba(var(--color-general-primary-rgb), 0.9)" },
  ID = function ({ intCD: e, selected: t, item: a, controls: s }) {
    const {
        name: n,
        imageName: r,
        overlayType: i,
        description: o,
        builtIn: l,
        buyMoreDisabled: c,
        installedSlotId: d,
        disabled: u,
        mounted: m,
        itemsInStorage: p,
        mountedInOtherSetup: _,
        price: h,
      } = a,
      g = d > -1,
      f = (0, jn.useMemo)(() => {
        const e = new Set();
        return u || !g
          ? e
          : (t || e.add(Hv), l || (e.add($v), (p > 0 || m) && !_ ? e.add(Rv) : e.add(Vv)), e);
      }, [u, g, t, l, p, m, _]),
      v = (0, jn.useCallback)(
        (t) => {
          s.actionSlot({ actionType: t, intCD: e, currentSlotId: d });
        },
        [s, e, d],
      );
    const [b, x] = QT(o, ND);
    return (0, rr.jsx)(wD, {
      className: cs(u && _D, (("builtInEquipment" === i && t) || u) && mD),
      onClick: function () {
        ("builtInEquipment" === i && t) || u || v(jD.find((e) => f.has(e)) || "select");
      },
      children: (0, rr.jsxs)("div", {
        className: pD,
        children: [
          (0, rr.jsx)("div", {
            className: hD,
            children: (0, rr.jsx)(vt, { name: r, overlayType: JT(i), size: vt.sizes.s180x135 }),
          }),
          (0, rr.jsx)("div", {
            className: gD,
            children: (0, rr.jsx)("div", { className: fD, children: n }),
          }),
          (0, rr.jsx)(X, {
            className: cs(yD, f.size > 0 && CD),
            text: b,
            upgradeLegacy: !0,
            params: x,
          }),
          (0, rr.jsx)(dD, {
            show: 0 === f.size,
            itemsInStorage: p,
            mounted: m || _,
            price: h,
            className: bD,
          }),
          (0, rr.jsx)(YT, {
            className: xD,
            onActionClick: v,
            buyMoreDisabled: c,
            availableActions: Array.from(f),
          }),
        ],
      }),
    });
  },
  SD = Hs((e) => {
    const { model: t, controls: a } = Jv(),
      s = t.computes.consumableById(e.intCD);
    if (s) return (0, rr.jsx)(ID, { ...e, item: s, controls: a });
  }),
  kD = ks.resolve("images");
function PD({
  modernized: e,
  level: t,
  onActionClick: a,
  freeToDemount: s,
  mouseOverCard: n,
  installed: r,
  destroyTooltipBodyPath: i,
  availableActions: o,
  className: l,
}) {
  const c = (n || r) && o.includes("upgrade"),
    d = o.length && ("upgrade" !== o[0] || c);
  return (0, rr.jsxs)("div", {
    className: cs(KT.base, KT["base__" + (d ? "shown" : "hidden")], l),
    children: [
      o.includes("cancel") &&
        (0, rr.jsx)(UT, { actionType: "cancel", onClick: a, className: KT.actionItem }),
      o.includes("undo") &&
        (0, rr.jsx)(UT, { actionType: "undo", onClick: a, className: KT.actionItem }),
      c &&
        (0, rr.jsx)(UT, {
          actionType: "upgrade",
          level: t,
          onClick: a,
          className: KT.actionItem,
          modernized: e,
        }),
      o.includes("demount") &&
        (0, rr.jsx)(UT, {
          actionType: "demount",
          onClick: a,
          className: KT.actionItem,
          freeToDemount: s,
        }),
      o.includes("demount_from_setup") &&
        (0, rr.jsx)(UT, {
          actionType: "demount_from_setup",
          onClick: a,
          className: KT.actionItem,
          freeToDemount: s,
          imageSource: kD.readOrEmpty("loadout.actions.demount"),
        }),
      o.includes("demount_from_setups") &&
        (0, rr.jsx)(UT, {
          actionType: "demount_from_setups",
          onClick: a,
          className: KT.actionItem,
        }),
      (e || !s) &&
        o.includes("destroy") &&
        (0, rr.jsx)(UT, {
          actionType: "destroy",
          onClick: a,
          className: KT.actionItem,
          modernized: e,
          tooltipBodyPath: i,
        }),
    ],
  });
}
var ED = ks.resolve("strings"),
  MD = { calcValue: 0, isPositive: !0, valueKey: "default" };
function LD({ values: e, localeName: t }) {
  const a = Sa(e, ({ valueKey: e }) => e === t).pop();
  if (!a) return MD;
  const { value: s, valueType: n, valueKey: r } = a,
    i = "mul" === n ? 100 * (s - 1) : s;
  return { calcValue: i, isPositive: i > 0, valueKey: r };
}
function AD(e) {
  const { calcValue: t, isPositive: a, valueKey: s } = LD(e),
    n = a ? "+" : "",
    r = Zt(t, 1),
    i = ED.readOrEmpty("tank_setup.kpi.bonus.valueTypes.default"),
    o = ED.readOr(`tank_setup.kpi.bonus.valueTypes.${s}`, () => i);
  return `${n}${o !== i ? `${r} ${o}` : `${r}${o}`}`;
}
function TD(e, t = !1) {
  return t || LD(e).isPositive
    ? ED.readOrEmpty(`tank_setup.kpi.bonus.positive.${e.localeName}`)
    : ED.readOrEmpty(`tank_setup.kpi.bonus.negative.${e.localeName}`);
}
var DD = "Bonuses_2e425c2b",
  BD = "Bonuses_bonus_1137ce2e",
  OD = "Bonuses_effect_9904936e",
  VD = "Bonuses_text_3e69479c",
  RD = "Bonuses_unit_dd3c8074",
  HD = "Bonuses_base__special_ca1cd57b",
  $D = "Bonuses_icon_bf2ddda6",
  zD = ks.resolve("strings");
function FD({ effect: e, special: t, bonuses: a }) {
  const s = wt({ value: e ? 2 : 3 }, { large: { value: e ? 3 : 4 } });
  return (0, rr.jsxs)("div", {
    className: cs(DD, t && HD),
    children: [
      e &&
        (0, rr.jsxs)("div", {
          className: BD,
          children: [
            (0, rr.jsxs)("span", {
              className: OD,
              children: [
                (0, rr.jsx)("span", { className: $D }),
                zD.readOrEmpty("tank_setup.effects.name"),
              ],
            }),
            (0, rr.jsx)(ra, { text: e, className: VD }),
          ],
        }),
      Ve(
        a.items,
        (e, t) =>
          t < s.value &&
          (0, rr.jsxs)(
            "div",
            {
              className: BD,
              children: [
                (0, rr.jsx)("span", { className: RD, children: AD(e) }),
                (0, rr.jsx)(ra, { text: TD(e), className: VD }),
              ],
            },
            t,
          ),
      ),
    ],
  });
}
var WD = "Specializations_c4673376",
  qD = "Specializations_item_64ba5e4a",
  ZD = "Specializations_specializationType_b4c7a75d",
  GD = "Specializations_inactiveIcon_45a44cf7",
  UD = Ss("Specializations");
function KD({ specializations: e, className: t }) {
  return (0, rr.jsx)(UD, {
    className: cs(WD, t),
    children: Ve(e, ({ name: e, correct: t }, a) =>
      (0, rr.jsx)(
        "div",
        {
          className: qD,
          children: (0, rr.jsx)(fx, {
            specialization: e,
            active: t,
            classNames: { base: ZD, inactiveIcon: t ? void 0 : GD },
          }),
        },
        `${e}${a}`,
      ),
    ),
  });
}
function XD(e) {
  switch (e) {
    case "equipmentTrophyBasic":
      return 1;
    case "equipmentTrophyUpgraded":
      return 2;
    default:
      return 0;
  }
}
var YD = Ss("EquipmentsItem", uD),
  JD = function ({ intCD: e, selected: t, item: a, controls: s }) {
    const {
        activeSpecsMask: n,
        name: r,
        imageName: i,
        specializations: o,
        level: l,
        effect: c,
        bonuses: d,
        trophy: u,
        overlayType: m,
        modernized: p,
        installedSlotId: _,
        disabled: h,
        mounted: g,
        mountedMoreThanOne: f,
        itemsInStorage: v,
        mountedInOtherSetup: b,
        upgradable: x,
        freeToDemount: y,
        lockReason: C,
        destroyTooltipBodyPath: j,
        price: w,
      } = a,
      N = _ > -1,
      I = re(),
      S = h && "similar_device_already_installed" === C,
      { availableActions: k } = (0, jn.useMemo)(() => {
        const e = new Set();
        var a;
        return (
          N &&
            !h &&
            (t || e.add(Hv),
            g
              ? (((a = f), a ? ["demount_from_setup", "demount_from_setups"] : ["demount"]).forEach(
                  (t) => {
                    e.add(t);
                  },
                ),
                e.add("destroy"))
              : e.add(((e, t, a) => ((e > 0 || t) && !a ? Rv : Vv))(v, g, b))),
          x && !h && e.add("upgrade"),
          { availableActions: e }
        );
      }, [N, h, x, t, g, f, v, b]),
      P = (0, jn.useCallback)(
        (t) => {
          s.actionSlot({ actionType: t, intCD: e, currentSlotId: _ });
        },
        [s, e, _],
      ),
      E = (0, jn.useCallback)(() => {
        if (h) return;
        const e = k.values().next().value;
        P(void 0 !== e && "upgrade" !== e ? e : Ov);
      }, [k, P, h]),
      M = k.values().next().value;
    return (0, rr.jsx)(YD, {
      className: cs(h && _D, h && mD),
      onClick: E,
      children: (0, rr.jsxs)("div", {
        className: pD,
        children: [
          (0, rr.jsx)("div", {
            className: hD,
            children: (0, rr.jsx)(vt, {
              name: i,
              overlayType: JT(m),
              size: vt.sizes.s180x135,
              level: u ? XD(m) : l,
            }),
          }),
          (0, rr.jsx)("div", {
            className: gD,
            children: (0, rr.jsx)("div", { className: fD, children: r }),
          }),
          d && (0, rr.jsx)(FD, { effect: c ?? void 0, bonuses: d, special: n > 0 }),
          (0, rr.jsx)(dD, {
            mounted: g || b,
            itemsInStorage: v,
            price: w,
            possibleZeroCount: u || p || 0 === w.price.length,
            className: bD,
            show: 0 === k.size || ("upgrade" === M && !I.hover && !I.selected && !N),
          }),
          (0, rr.jsx)(PD, {
            className: xD,
            modernized: p,
            level: l,
            onActionClick: P,
            availableActions: Array.from(k),
            freeToDemount: y,
            installed: N,
            mouseOverCard: I.hover || I.selected,
            destroyTooltipBodyPath: j,
          }),
          !S && (0, rr.jsx)(KD, { specializations: o.specializations, className: vD }),
        ],
      }),
    });
  },
  QD = Hs((e) => {
    const { model: t, controls: a } = nb(),
      s = t.computes.equipmentsItemByIntCD(e.intCD, e.type);
    if (s) return (0, rr.jsx)(JD, { ...e, item: s, controls: a });
    console.error("Unable to render equipment item", e.intCD, e.type);
  }),
  eB = Ss("InstructionsItem", uD),
  tB = { Equipment: "equipmentInstructions", Crew: "crewInstructions" },
  aB = { colorTag: "#64ba21", whiteSpanish: "rgba(var(--color-general-primary-rgb), 0.9)" },
  sB = function ({ intCD: e, item: t, controls: a }) {
    const {
        name: s,
        imageName: n,
        overlayType: r,
        description: i,
        buyMoreVisible: o,
        buyMoreDisabled: l,
        installedSlotId: c,
        disabled: d,
        mounted: u,
        itemsInStorage: m,
        mountedInOtherSetup: p,
        price: _,
      } = t,
      h = c > -1,
      g = (0, jn.useMemo)(() => {
        const e = new Set();
        return (d || !h || (o && e.add($v), (m > 0 || u) && !p ? e.add(Rv) : e.add(Vv)), e);
      }, [d, h, o, m, u, p]),
      f = (0, jn.useCallback)(
        (t) => {
          a.actionSlot({ actionType: t, intCD: e, currentSlotId: c });
        },
        [a, e, c],
      ),
      v = (0, jn.useCallback)(() => {
        d || (g.has("undo") ? f(Vv) : g.has("cancel") ? f(Rv) : f(Ov));
      }, [g, f, d]),
      [b, x] = QT(i, aB);
    return (0, rr.jsx)(eB, {
      className: cs(d && _D, d && mD),
      onClick: v,
      children: (0, rr.jsxs)("div", {
        className: pD,
        children: [
          (0, rr.jsx)("div", {
            className: hD,
            children: (0, rr.jsx)(vt, { name: n, overlayType: JT(r), size: vt.sizes.s180x135 }),
          }),
          (0, rr.jsx)("div", {
            className: gD,
            children: (0, rr.jsx)("div", { className: fD, children: s }),
          }),
          (0, rr.jsx)(X, {
            className: cs(yD, g.size > 0 && CD),
            text: b,
            upgradeLegacy: !0,
            params: x,
          }),
          (0, rr.jsx)(dD, {
            show: 0 === g.size,
            itemsInStorage: m,
            possibleZeroCount: 0 === _.price.length,
            mounted: u || p,
            price: _,
            className: bD,
          }),
          (0, rr.jsx)(YT, {
            className: xD,
            onActionClick: f,
            buyMoreDisabled: l,
            availableActions: Array.from(g),
          }),
        ],
      }),
    });
  },
  nB = Hs((e) => {
    const { model: t, controls: a } = ob(),
      s = e.type && t.computes.instructionByIntCD(e.intCD, e.type);
    if (s) return (0, rr.jsx)(sB, { ...e, item: s, controls: a });
  });
var rB = {
    "media-wrapper": "AmmunitionCard_media-wrapper_32904bc2",
    root: "AmmunitionCard_root_32904bc2",
    card: "AmmunitionCard_card_2bd54c54",
  },
  iB = ks.resolve("aliases");
var oB = Hs(function ({ card: e, type: t, currentTab: a, className: s }) {
    const { model: n } = Nv(),
      {
        mounted: i,
        disabled: o,
        installedSlotId: l,
        intCD: c,
        lockReason: d,
        locked: u,
        mountedMoreThanOne: m,
        itemInstalledSetupIdx: p,
        itemInstalledSetupSlotIdx: _,
      } = e,
      h = n.selectedSlot.get(),
      g = u ? fe.alert : -1 !== l ? fe.done : void 0,
      f = -1 !== l && h === l,
      v = !i && -1 !== l && h !== l,
      b = Ze(
        t === Zf ? "battleBoosterBlock" : "hangarCardModule",
        (0, jn.useMemo)(() => [c, h], [c, h]),
        (0, jn.useMemo)(() => ({ resId: iB.read((e) => e.hangar.shared.Loadout("resId")) }), []),
      ),
      x = $e({
        resId: iB.read((e) => e.hangar.shared.Loadout("resId")),
        args: (0, jn.useMemo)(
          () => ({ intCD: c, slotId: h, slotType: Uf, tooltipId: "hangarCardModule" }),
          [c, h],
        ),
      }),
      y = (0, jn.useMemo)(
        () =>
          (function (e, t, a, s, n, r, i, o) {
            const { id: l, ...c } = (() => {
              switch (e) {
                case Uf:
                  return {
                    id: -1 === t ? "tankSetupConsumableItem" : "tankSetupConsumableSlot",
                    slotType: zf,
                    emitterUID: window.subViews.get(
                      iB.read((e) => e.hangar.shared.Consumables("resId")),
                    ).uid,
                  };
                case Zf:
                  return {
                    id: -1 === t ? "tankSetupBattleBoosterItem" : "tankSetupBattleBoosterSlot",
                    slotType: Ff,
                    emitterUID: window.subViews.get(
                      iB.read((e) => e.hangar.shared.Instructions("resId")),
                    ).uid,
                  };
                default:
                  return {
                    id: -1 === t ? "tankSetupOptionalDeviceItem" : "tankSetupOptionalDeviceSlotWW",
                    slotType: Hf,
                    emitterUID: window.subViews.get(
                      iB.read((e) => e.hangar.shared.Equipments("resId")),
                    ).uid,
                  };
              }
            })();
            return {
              id: l,
              args: {
                ...c,
                isDisabled: a,
                fieldType: 0,
                intCD: s,
                installedSlotId: t,
                itemInstalledSetupSlotIdx: n,
                itemInstalledSetupIdx: r,
                isMounted: i,
                isMountedMoreThanOne: o,
              },
            };
          })(t, l, o, c, _, p, i, m),
        [t, l, o, c, _, p, i, m],
      ),
      C = t === Uf ? x : b,
      j = ia(y.id, y.args),
      w = (function ({ intCD: e, selected: t, ammunitionType: a, currentTab: s = "" }) {
        switch (a) {
          case qf: {
            const a = We(Kf, s);
            return a ? (0, rr.jsx)(QD, { intCD: e, selected: t, type: a }) : null;
          }
          case Uf:
            return (0, rr.jsx)(SD, { intCD: e, selected: t });
          case Zf: {
            const t = We(tB, s);
            return t ? (0, rr.jsx)(nB, { intCD: e, type: t }) : null;
          }
          default:
            return null;
        }
      })({ intCD: c, selected: f, ammunitionType: t, currentTab: a });
    if (w)
      return (0, rr.jsx)("div", {
        ...C,
        className: s,
        children: (0, rr.jsx)(r, {
          ...j,
          className: rB.card,
          classNames: { status: { icon: rB.statusIcon } },
          status: g,
          statusReason: t !== Uf ? d : void 0,
          active: v,
          selected: f,
          disabled: o,
          "data-test-id": c,
          children: w,
        }),
      });
  }),
  lB = {
    "media-wrapper": "Content_media-wrapper_da09528a",
    root: "Content_root_da09528a",
    scrollContainer: "Content_scrollContainer_c90e13ef",
    scrollWrapper: "Content_scrollWrapper_249a7ad2",
    scrollContainer__top: "Content_scrollContainer__top_da09528a",
    scrollContainer__bottom: "Content_scrollContainer__bottom_da09528a",
    scrollContainer__both: "Content_scrollContainer__both_da09528a",
    scrollContent: "Content_scrollContent_725888f1",
    container: "Content_container_41594150",
    card: "Content_card_70d8499",
    statusIcon: "Content_statusIcon_de80483f",
    verticalBar: "Content_verticalBar_17a90908",
  };
function cB({ cards: e, currentTab: t, type: a }) {
  const s = ua();
  return (
    (0, jn.useEffect)(() => tt(s.recalculate), [e?.length, s.recalculate]),
    (0, rr.jsx)(rr.Fragment, {
      children: e.map((e) =>
        (0, rr.jsx)(oB, { className: lB.card, card: e, type: a, currentTab: t }, e.intCD),
      ),
    })
  );
}
var dB = e(Vs()),
  uB = {
    "media-wrapper": "Introduction_media-wrapper_bc1537e2",
    root: "Introduction_root_bc1537e2",
    base: "Introduction_7257ae29",
    description: "Introduction_description_7c2607f0",
    title: "Introduction_title_7e63aa60",
    message: "Introduction_message_845b2bb5",
    currency: "Introduction_currency_1092ef06",
    icon: "Introduction_icon_740fcef0",
    "icon__currency-modernized": "Introduction_icon__currency-modernized_1dfb6dcf",
  },
  mB = { [TT]: "trophy", [BT]: "modernized" };
function pB({ introductionType: e }) {
  const t = mB[e],
    a = ks.resolve("strings");
  return (0, rr.jsx)(g, {
    split: !0,
    upgradeLegacy: !0,
    params: {
      currencyName:
        e !== TT
          ? (0, rr.jsx)("span", {
              className: uB.currency,
              children: a.readOrEmpty(`tank_setup.introduction.currency.${t}`),
            })
          : "",
      currencyIcon: (0, rr.jsx)("span", {
        className: (0, dB.default)(uB.icon, uB[`icon__currency-${t}`]),
      }),
    },
    path: `tank_setup.introduction.message.${t}`,
    className: uB.message,
  });
}
var _B = { [TT]: "trophy", [BT]: "modernized" },
  hB = { [TT]: "modules.trophyOverlay", [BT]: "modules.modernizedOverlay" };
function gB({ introductionType: e }) {
  const t = ks
      .resolve("strings")
      .readOrEmpty(`tank_setup.introduction.title.withoutEquipments.${_B[e]}`),
    a = hB[e];
  return (0, rr.jsxs)("div", {
    className: uB.base,
    children: [
      (0, rr.jsx)(_s, {
        path: a,
        width: 350,
        height: 250,
        adaptive: { large: { width: 600, height: 450, path: `${a}Big` } },
      }),
      (0, rr.jsxs)("div", {
        className: uB.description,
        children: [
          (0, rr.jsx)("div", { className: uB.title, children: t }),
          (0, rr.jsx)(pB, { introductionType: e }),
        ],
      }),
    ],
  });
}
var fB = "top",
  vB = "bottom",
  bB = "both",
  xB = "none";
var yB = Hs(function ({ currentTab: e, type: t, className: a }) {
  const [s, n] = jn.useState(xB),
    { api: r } = Bt();
  jn.useLayoutEffect(() => {
    const e = () => {
      var e, t, a;
      n(
        ((e = r.getContainerSize() ?? 0),
        (t = r.getWrapperSize() ?? 0),
        (a = r.animationScroll.scrollPosition.get()),
        e <= t ? xB : a <= 10 ? vB : t + a >= e - 10 ? fB : bB),
      );
    };
    return (
      r.events.on("change", e),
      r.events.on("recalculateContent", e),
      r.events.on("resizeHandled", e),
      () => {
        (r.events.off("resizeHandled", e),
          r.events.off("change", e),
          r.events.off("recalculateContent", e));
      }
    );
  }, [r]);
  const i = Qa(e),
    o = Qa(t),
    l = Da(() => {
      ((o && t !== o) || (t === qf && i && e !== i)) && r.applyScroll(0, { immediate: !0 });
    });
  jn.useEffect(() => {
    l();
  }, [l, t, e]);
  const c = (function (e, t) {
    const { model: a } = Jv(),
      { model: s } = ob(),
      { model: n } = nb();
    switch (e) {
      case Uf:
        return a.computes
          .consumables()
          .sort((e, t) => (RT[e.itemName] ?? 1 / 0) - (RT[t.itemName] ?? 1 / 0));
      case Zf:
        switch (t) {
          case OT:
            return s.equipmentInstructionsArray.get();
          case VT:
            return s.crewInstructionsArray.get();
        }
        break;
      case qf:
        switch (t) {
          case AT:
            return n.computes.filteredStandardEquipments();
          case TT:
            return n.bountyEquipments.get();
          case DT:
            return n.improvedEquipments.get();
          case BT:
            return n.experimentalEquipments.get();
        }
    }
    return [];
  })(t, e);
  return (0, rr.jsxs)("div", {
    className: cs(lB.scrollContainer, lB[`scrollContainer__${s}`], a),
    children: [
      (0, rr.jsx)(ca, {
        classNames: { wrapper: lB.scrollWrapper, content: lB.scrollContent },
        children:
          c && 0 !== c.length
            ? (0, rr.jsx)(fa, {
                className: lB.container,
                threshold: `${t}-${e}`,
                children: (0, rr.jsx)(cB, { cards: c, currentTab: e, type: t }),
              })
            : t !== qf || (e !== BT && e !== TT)
              ? void 0
              : (0, rr.jsx)(gB, { introductionType: e }),
      }),
      (0, rr.jsx)(es, { classNames: { base: lB.verticalBar } }),
    ],
  });
});
function CB(e) {
  return (0, rr.jsx)(Xa, { children: (0, rr.jsx)(yB, { ...e }) });
}
var jB = "SpecializationFilter_48673c87",
  wB = "SpecializationFilter_content_f790a5c2",
  NB = ks.resolve("strings"),
  IB = {
    [Xf.Firepower]: "loadout:ammunition_setup:specialization-filter:firepower",
    [Xf.Survivability]: "loadout:ammunition_setup:specialization-filter:survivability",
    [Xf.Stealth]: "loadout:ammunition_setup:specialization-filter:stealth",
    [Xf.Mobility]: "loadout:ammunition_setup:specialization-filter:mobility",
  },
  SB = Hs(function ({ specialization: e, className: t }) {
    const a = It(),
      { model: s, controls: n } = nb(),
      r = s.standardEquipmentsFilters.get().has(e),
      i = Qa(r),
      o = bs({
        header: NB.readOrEmpty(`tank_setup.categories.${e}`),
        body: NB.readOrEmpty(`tank_setup.categories.body.${e}`),
      }),
      l = La(() => n.updateFilters(e), [n, e], 400);
    return (
      (0, jn.useEffect)(() => {
        (r && !1 === i && a.play("on", { target: IB[e] }),
          r ||
            !0 !== i ||
            a.play("off", { target: "loadout:ammunition_setup:specialization-filter" }));
      }, [r, i, a, e]),
      (0, rr.jsx)(Et, {
        ...o,
        className: cs(jB, t),
        classNames: { content: wB },
        fullSizeContent: !0,
        theme: ss.primary,
        size: Ra.extraSmall,
        activated: r,
        onClick: l,
        children: (0, rr.jsx)(fx, { specialization: e, active: r }),
      })
    );
  }),
  kB = ks.resolve("aliases"),
  PB = ks.resolve("views"),
  EB = ks.resolve("intl"),
  MB = "simple",
  LB = "trophy",
  AB = "deluxe",
  TB = "modernized",
  DB = { [AT]: MB, [TT]: LB, [DT]: AB, [BT]: TB };
function BB({ id: e, label: t, className: a }) {
  const s = DB[e],
    n = S(
      (0, jn.useMemo)(
        () => ({
          contentId: PB.read((e) => e.lobby.tanksetup.tooltips.SetupTabTooltipView("resId")),
          resId: kB.read((e) => e.hangar.shared.Equipments("resId")),
          disabled: !s,
          args: { name: s },
        }),
        [s],
      ),
    );
  return (0, rr.jsx)(P.Tab, {
    ...(s && n),
    tabId: e,
    className: a,
    children: (0, rr.jsx)(ra, { text: EB.toUpperCase(t) }),
  });
}
var OB = "TabsNavigation_tabsNavigation_f7e0f60f",
  VB = "TabsNavigation_tabsSwitcher_d52f26be",
  RB = "TabsNavigation_tab_48ab20da",
  HB = "TabsNavigation_tab__active_676bc101",
  $B = ({
    tabsList: e,
    activeTab: t,
    theme: a,
    size: s,
    onChangeActiveTab: n,
    className: r,
    ...i
  }) =>
    (0, rr.jsx)("div", {
      className: cs(OB, r),
      children: (0, rr.jsx)(P, {
        ...i,
        active: t,
        theme: a,
        size: s,
        onActiveChange: (e) => n(String(e)),
        children: (0, rr.jsx)(P.Switcher, {
          className: VB,
          children: e.map(({ id: e, label: a }) =>
            (0, rr.jsx)(BB, { id: e, label: a, className: cs(RB, t === a && HB) }, e),
          ),
        }),
      }),
    }),
  zB = {
    "media-wrapper": "WorkbenchPanel_media-wrapper_7651396d",
    root: "WorkbenchPanel_root_7651396d",
    workbenchPanel: "WorkbenchPanel_workbenchPanel_f8c32bc5",
    currency: "WorkbenchPanel_currency_7d4b8be",
    button: "WorkbenchPanel_button_853070e2",
    buttonContent: "WorkbenchPanel_buttonContent_24857913",
  },
  FB = ks.resolve("strings"),
  WB = Hs(({ className: e }) => {
    const { model: t, controls: a } = nb(),
      s = Ze("equipCoinInfo"),
      r = bs({
        body: t.hasExperimentalEquipmentToDisassemble.get()
          ? FB.readOrEmpty(
              "tank_setup.tooltips.experimentalEquipCoinBlock.actions.button.notDisabled.text",
            )
          : FB.readOrEmpty(
              "tank_setup.tooltips.experimentalEquipCoinBlock.actions.button.disabled.text",
            ),
      });
    return (0, rr.jsxs)("div", {
      className: cs(zB.workbenchPanel, e),
      children: [
        (0, rr.jsx)(k, {
          ...s,
          reverse: !0,
          type: ga.equipCoin,
          classNames: { base: zB.currency, icon: zB.currencyIcon },
          children: t.equipCoinCount.get(),
        }),
        (0, rr.jsx)("div", {
          ...r,
          children: (0, rr.jsx)(n, {
            className: zB.button,
            classNames: { content: zB.buttonContent },
            disabled: !t.hasExperimentalEquipmentToDisassemble.get(),
            theme: n.themes.secondary,
            size: n.sizes.small,
            onClick: t.hasExperimentalEquipmentToDisassemble.get() ? a.getMoreCurrency : void 0,
            children: FB.readOrEmpty("tank_setup.experimentalEquipCoinBlock.name"),
          }),
        }),
      ],
    });
  }),
  qB = "AmmunitionSetup_14321dac",
  ZB = "AmmunitionSetup_ammunitionHeader_7df5ac92",
  GB = "AmmunitionSetup_dealPanel_64ad50ed",
  UB = "AmmunitionSetup_tabsNavigation_4504ff3c",
  KB = "AmmunitionSetup_tabsNavigation__hidden_a99bfa94",
  XB = "AmmunitionSetup_specializationFilters_35de8d81",
  YB = "AmmunitionSetup_specializationFilter_38bef0cf",
  JB = {
    [qf]: [
      { id: AT, labelKey: "tank_setup.tabs.simple" },
      { id: TT, labelKey: "tank_setup.tabs.trophy" },
      { id: DT, labelKey: "tank_setup.tabs.deluxe" },
      { id: BT, labelKey: "tank_setup.tabs.modernized" },
    ],
    [Zf]: [
      { id: OT, labelKey: "tank_setup.tabs.optDevice" },
      { id: VT, labelKey: "tank_setup.tabs.crew" },
    ],
  },
  QB = { [qf]: AT, [Zf]: OT },
  eO = ks.resolve("strings");
function tO(e) {
  switch (e) {
    case Nb:
      return OT;
    case wb:
      return VT;
    case Ib:
      return DT;
    case kb:
      return BT;
    case yb:
    case Cb:
    case jb:
      return TT;
    default:
      return;
  }
}
var aO = Object.values(Xf),
  sO = Hs(function ({ type: e }) {
    const t = It(),
      { model: a } = Nv(),
      { controls: s } = nb(),
      { groupIndex: n, item: r } = a.computes.selectedSlotGroupAndItem(),
      i = a.selectedSlot.get(),
      o = a.selectedSection.get(),
      l = (0, jn.useRef)(!1),
      c = (0, jn.useRef)(0),
      [d, u] = (0, jn.useState)(tO(r?.type) || QB[e]),
      m = Qa(i),
      p = Qa(o),
      _ = Qa(n),
      h = Qa(d),
      g = Qa(e);
    ((0, jn.useEffect)(() => {
      (p !== o || (r && (m !== i || n !== _))) && u(tO(r?.type) || QB[e]);
    }, [m, p, _, r, i, o, n, e]),
      (0, jn.useEffect)(() => {
        s.clearFilters();
      }, [e, s]),
      (0, jn.useEffect)(() => {
        if ((d !== h && d && h) || (e !== g && e && g)) {
          if (l.current) return;
          ((l.current = !0),
            (c.current = window.setTimeout(() => (l.current = !1), 100)),
            t.play("switch", { target: "loadout:ammunition_setup" }));
        }
      }, [d, h, e, g, t]),
      Wt(() => clearTimeout(c.current)));
    const f = (0, jn.useMemo)(
        () =>
          (function (e) {
            return (
              JB[e]?.map(({ id: e, labelKey: t }) => ({ id: e, label: eO.readOrEmpty(t) })) ?? []
            );
          })(e),
        [e],
      ),
      v = wt({ size: z.small }, { large: { size: z.medium }, extraLarge: { size: z.large } });
    return (0, rr.jsxs)("div", {
      className: qB,
      children: [
        e === Gf
          ? (0, rr.jsx)(LT, {})
          : (0, rr.jsxs)(rr.Fragment, {
              children: [
                (0, rr.jsxs)("div", {
                  className: ZB,
                  children: [
                    (0, rr.jsx)($B, {
                      tabsList: f,
                      activeTab: d ?? "",
                      onChangeActiveTab: (e) => u(e),
                      theme: te.primary,
                      size: v.size,
                      className: cs(UB, 0 === f.length && KB),
                    }),
                    (() => {
                      switch (d) {
                        case AT:
                          return (0, rr.jsx)("div", {
                            className: XB,
                            children: aO.map((e, t) =>
                              (0, rr.jsx)(SB, { specialization: e, className: YB }, t),
                            ),
                          });
                        case BT:
                          return (0, rr.jsx)(WB, {});
                      }
                    })(),
                  ],
                }),
                (0, rr.jsx)(CB, { currentTab: d, type: e }),
              ],
            }),
        (0, rr.jsx)(LL, { className: GB, type: e }),
      ],
    });
  });
function nO(e) {
  return { id: e.id, valueTemplate: e.valueTemplate, value: e.value, name: e.name, sign: e.sign };
}
function rO(e) {
  return { id: e.id, params: Ve(e.params, nO) };
}
var [iO, oO] = ds("BattleAbilitiesSetupModel")(
    ({ observableModel: e }) => {
      const t = {
          ...e.primitives(["isTypeSelected", "vehicleType", "pointsAmount", "totalPurchasePrice"]),
          categoriesOrder: e.array("categoriesOrder"),
          slots: e.arrayClone("slots"),
          detailsData: e.transform(
            (e) =>
              (function (e) {
                return {
                  intCD: e.intCD,
                  name: e.name,
                  category: e.category,
                  description: e.description,
                  selectedLevel: e.selectedLevel,
                  isActivated: e.isActivated,
                  levelInfos: Ve(e.levelInfos, rO),
                };
              })(e),
            "details",
          ),
          dealData: e.transform((e) => Zv(e), "dealPanel"),
          filterCategories: ka.array([]),
        },
        a = Na.model(() => Ve(t.categoriesOrder.get(), String)),
        s = Na.primitive(() => {
          const e = _(t.slots.get(), xj),
            s = a(),
            n = t.filterCategories.slice(),
            r = e.filter((e) => 0 === n.length || n.includes(e.category)),
            i = r.reduce((e, t) => {
              const a = t.category;
              return ((n.length > 0 && !n.includes(a)) || (e[a] || (e[a] = []), e[a].push(t)), e);
            }, {});
          for (const t of s) {
            const e = i[t];
            e && e.sort((e, t) => e.cost - t.cost);
          }
          const o = [],
            l = r.length;
          for (; o.length < l;)
            for (const e of s) {
              const t = i[e]?.shift();
              t && o.push(t);
            }
          return o;
        }),
        n = Na.model((e) => Qt(s(), (t) => t.intCD === e)),
        r = Na.primitive((e) => t.filterCategories.includes(e));
      return {
        ...t,
        computes: {
          sortedBattleAbilities: s,
          battleAbilityById: n,
          categoriesOrdered: a,
          isFilterCategorySelected: r,
        },
      };
    },
    ({ model: e, externalModel: t }) => ({
      actionSlot: t.createCallback((e) => ({ ...e }), "onSlotAction"),
      toggleApplyToType: t.createCallback(
        () => ({ value: !e.isTypeSelected.get() }),
        "onApplyToTypeChanged",
      ),
      levelChange: t.createCallback((e) => ({ level: e }), "onCurrentAbilityLevelChanged"),
      confirm: t.createCallbackNoArgs("dealPanel.onDealConfirmed"),
      cancel: t.createCallbackNoArgs("dealPanel.onDealCancelled"),
      toggleFilterCategory: ja((t) => {
        const a = e.filterCategories.indexOf(t);
        -1 !== a ? e.filterCategories.splice(a, 1) : e.filterCategories.push(t);
      }),
    }),
  ),
  lO = "BattleAbilityItem_8c0b3819",
  cO = "BattleAbilityItem_category_9e366ce0",
  dO = "BattleAbilityItem_icon_9c888719",
  uO = "BattleAbilityItem_base__inactive_feccaa80",
  mO = "BattleAbilityItem_content_a4b5d509",
  pO = "BattleAbilityItem_name_7f8f0d9a",
  _O = "BattleAbilityItem_description_a22c728b",
  hO = "BattleAbilityItem_priceBlock_ed62fed2",
  gO = "BattleAbilityItem_price_9ac1931b",
  fO = "BattleAbilityItem_tokenIcon_10649342",
  vO = "BattleAbilityItem_mountedIcon_7dab3d7e",
  bO = Hs(({ intCD: e, selected: a, inactive: s }) => {
    const { model: n, controls: r } = oO(),
      {
        name: i,
        imageName: o,
        description: l,
        category: c,
        targetSlotId: d,
        cost: u,
        mounted: m,
        disabled: p,
      } = n.computes.battleAbilityById(e),
      _ = "R.images.frontline.gui.maps.icons.loadout",
      h = a ? "_selected" : "",
      g = ya(200),
      f = (0, jn.useCallback)(
        (t) => {
          g.call(() => {
            r.actionSlot({ actionType: t, intCD: e, currentSlotId: d });
          });
        },
        [r, e, d, g],
      );
    return (0, rr.jsxs)("div", {
      className: cs(lO, s && uO),
      onClick: () => f(Ov),
      children: [
        (0, rr.jsx)("div", {
          style: { backgroundImage: `url(${_}.categories.c_52x52.${c + h})` },
          className: cO,
        }),
        (0, rr.jsxs)("div", {
          className: mO,
          children: [
            (0, rr.jsx)(vt, {
              className: dO,
              size: t.s180x135,
              path: `${_}.battleAbilities.c_180x135.${o}`,
              name: i,
            }),
            (0, rr.jsx)("div", { className: pO, children: i }),
            (0, rr.jsx)(X, { className: _O, text: l, upgradeLegacy: !0, split: !0 }),
            p &&
              (0, rr.jsxs)("div", {
                className: hO,
                children: [
                  (0, rr.jsx)("div", { className: gO, children: u }),
                  (0, rr.jsx)("div", { className: fO }),
                ],
              }),
            m && (0, rr.jsx)("div", { className: vO }),
          ],
        }),
      ],
    });
  }),
  xO = "BattleAbilityCard_card_d58548ac",
  yO = "BattleAbilityCard_card__inactive_bbf99946",
  CO = ks.resolve("aliases"),
  jO = ks.resolve("views"),
  wO = Hs(function ({ card: e, className: t }) {
    const { model: a } = Nv(),
      { model: s } = oO(),
      { cost: n, installedSlotId: i, intCD: o, disabled: l } = e,
      c = a.selectedSlot.get(),
      d = -1 !== i,
      u = d && c === i,
      m = d && c !== i,
      p = s.pointsAmount.get() < n && l;
    return (0, rr.jsx)("div", {
      ...S({
        resId: CO.read((e) => e.hangar.shared.Loadout("resId")),
        contentId: jO.read((e) => e.frontline.mono.lobby.tooltips.battle_ability_tooltip("resId")),
        args: (0, jn.useMemo)(() => ({ intCD: o, slotId: c, tooltipId: vj }), [o, c]),
      }),
      className: t,
      children: (0, rr.jsx)(r, {
        className: cs(xO, p && yO),
        status: u || m ? fe.done : void 0,
        active: m,
        selected: u,
        disabled: p,
        "data-test-id": o,
        children: (0, rr.jsx)(bO, { intCD: o, selected: u, inactive: p }),
      }),
    });
  }),
  NO = {
    "media-wrapper": "Content_media-wrapper_da09528a",
    root: "Content_root_da09528a",
    scrollContainer: "Content_scrollContainer_c90e13ef",
    scrollWrapper: "Content_scrollWrapper_249a7ad2",
    scrollContainer__top: "Content_scrollContainer__top_da09528a",
    scrollContainer__bottom: "Content_scrollContainer__bottom_da09528a",
    scrollContainer__both: "Content_scrollContainer__both_da09528a",
    scrollContent: "Content_scrollContent_725888f1",
    container: "Content_container_41594150",
    card: "Content_card_aba96b26",
    verticalBar: "Content_verticalBar_17a90908",
  },
  IO = "top",
  SO = "bottom",
  kO = "both",
  PO = "none";
var EO = Hs(function () {
  const { model: e } = oO(),
    t = e.computes.sortedBattleAbilities(),
    [a, s] = jn.useState(PO),
    { api: n } = Bt();
  return (
    jn.useLayoutEffect(() => {
      const e = () => {
        var e, t, a;
        s(
          ((e = n.getContainerSize() ?? 0),
          (t = n.getWrapperSize() ?? 0),
          (a = n.animationScroll.scrollPosition.get()),
          e <= t ? PO : a <= 10 ? SO : t + a >= e - 10 ? IO : kO),
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
    }, [n]),
    (0, rr.jsxs)("div", {
      className: cs(NO.scrollContainer, NO[`scrollContainer__${a}`]),
      children: [
        (0, rr.jsx)(ca, {
          classNames: { wrapper: NO.scrollWrapper, content: NO.scrollContent },
          children: (0, rr.jsx)(fa, {
            className: NO.container,
            children: t.map((e) => (0, rr.jsx)(wO, { className: NO.card, card: e }, e.intCD)),
          }),
        }),
        (0, rr.jsx)(es, { classNames: { base: NO.verticalBar } }),
      ],
    })
  );
});
function MO() {
  return (0, rr.jsx)(Xa, { children: (0, rr.jsx)(EO, {}) });
}
var LO = "DealPanel_leftBlock_e9fb0b4a",
  AO = "DealPanel_leftBlock__active_53e6aee9",
  TO = "DealPanel_checkbox_c6267a54",
  DO = "DealPanel_checkbox__active_edd6c82d",
  BO = "DealPanel_checkboxLabel_7df5996",
  OO = "DealPanel_buttonWrapper_e6c7f6fe",
  VO = "DealPanel_button_d186abe4",
  RO = "DealPanel_buttonContent_25d6c73c",
  HO = "DealPanel_vehicleIcon_3efdae6d",
  $O = "DealPanel_vehicleIcon__checked_36b0a221",
  zO = "DealPanel_points_aa7b5655",
  FO = "DealPanel_pointsAmountLabel_7a52448f",
  WO = "DealPanel_pointsAmountLabel__notEnough_cf06c872",
  qO = "DealPanel_pointsIcon_d6a0c845",
  ZO = "DealPanel_glow_2b356996",
  GO = ks.resolve("strings"),
  UO = Hs(function ({ className: e }) {
    const t = wt({ value: Ae.small }, { large: { value: Ae.medium } }),
      { model: a, controls: s } = oO(),
      r = bt(a.vehicleType.get()),
      i = a.isTypeSelected.get(),
      o = a.totalPurchasePrice.get(),
      l = o > 0,
      c = o > a.pointsAmount.get(),
      d = l || a.dealData.get().canConfirm,
      u = Qa(d),
      m = It(),
      p = bs({ body: GO.readOrEmpty(`fl_tooltips.battleAbilities.checkbox.${r}`) }),
      _ = bs({ body: GO.readOrEmpty("fl_tooltips.battleAbilities.button.notEnough") });
    return (
      (0, jn.useEffect)(() => {
        d !== u && m.play(u ? "collapse" : "expand", { target: "loadout:deal-panel" });
      }, [m, d, u]),
      (0, rr.jsxs)(dL, {
        className: e,
        children: [
          (0, rr.jsx)(Ct, {
            ...p,
            className: cs(TO, d && DO),
            classNames: { label: BO },
            checked: i,
            size: t.value,
            onCheckedChange: s.toggleApplyToType,
            children: (0, rr.jsx)(g, {
              path: "fl_battle_abilities_setup.dealPanel.applyToType",
              params: {
                icon: (0, rr.jsx)(_s, {
                  path: `vehicleTypes.c_24x24.${r}`,
                  className: cs(HO, i && $O),
                }),
                type: GO.readOrEmpty(`menu.classes.short.${r}`),
              },
            }),
          }),
          (0, rr.jsxs)(dL.Left, {
            className: cs(LO, d && AO),
            children: [
              l &&
                (0, rr.jsxs)("div", {
                  className: zO,
                  children: [
                    (0, rr.jsx)("div", { className: ZO }),
                    (0, rr.jsx)("div", { className: cs(FO, c && WO), children: String(o) }),
                    (0, rr.jsx)("div", { className: qO }),
                  ],
                }),
              (0, rr.jsxs)(cL, {
                children: [
                  (0, rr.jsx)("div", {
                    ...(c && _),
                    className: OO,
                    children: (0, rr.jsx)(n, {
                      className: VO,
                      classNames: { content: RO },
                      disabled: c,
                      onClick: () => !c && s.confirm(),
                      theme: rs.primary,
                      size: t.value,
                      children: GO.readOrEmpty("tank_setup.dealPanel.button.apply"),
                    }),
                  }),
                  (0, rr.jsx)("div", {
                    className: OO,
                    children: (0, rr.jsx)(n, {
                      className: VO,
                      classNames: { content: RO },
                      onClick: s.cancel,
                      theme: rs.secondary,
                      size: t.value,
                      soundTarget: "loadout:deal-panel:cancel_button",
                      children: GO.readOrEmpty("tank_setup.dealPanel.button.cancel"),
                    }),
                  }),
                ],
              }),
            ],
          }),
        ],
      })
    );
  }),
  KO = "CategoryFilter_46392f33",
  XO = "CategoryFilter_toggle_e4db16bd",
  YO = "CategoryFilter_icon_1c04c3d6",
  JO = ks.resolve("strings"),
  QO = function ({ category: e, onClick: t, isActive: a }) {
    const s = bs({
        header: JO.readOrEmpty(`fl_tooltips.battleAbilityFilter.${e}.header`),
        body: JO.readOrEmpty(`fl_tooltips.battleAbilityFilter.${e}.body`),
      }),
      n = a ? "_selected" : "";
    return (0, rr.jsx)("div", {
      className: KO,
      children: (0, rr.jsx)(Et, {
        ...s,
        className: XO,
        fullSizeContent: !0,
        theme: ss.primary,
        size: Ra.extraSmall,
        activated: a,
        onClick: () => t(e),
        children: (0, rr.jsx)("div", {
          className: YO,
          style: {
            backgroundImage: `url(R.images.frontline.gui.maps.icons.loadout.categories.c_52x52.${e + n})`,
          },
        }),
      }),
    });
  },
  eV = "Header_927dbff8",
  tV = "Header_points_190eee97",
  aV = "Header_pointsLabel_324a32ee",
  sV = "Header_pointsAmountLabel_7ece16da",
  nV = "Header_pointsIcon_e3e9c8ec",
  rV = "Header_glow_deb8ac55",
  iV = "Header_filters_c4dbdf68",
  oV = ks.resolve("strings"),
  lV = Hs(function () {
    const { model: e, controls: t } = oO(),
      a = bs({
        header: oV.readOrEmpty("fl_tooltips.battleAbilities.points.header"),
        body: oV.readOrEmpty("fl_tooltips.battleAbilities.points.body"),
      });
    return (0, rr.jsxs)("div", {
      className: eV,
      children: [
        (0, rr.jsxs)("div", {
          ...a,
          className: tV,
          children: [
            (0, rr.jsx)("div", { className: rV }),
            (0, rr.jsx)(g, {
              path: "fl_battle_abilities_setup.header.points",
              params: {
                value: (0, rr.jsx)("div", { className: sV, children: e.pointsAmount.get() }),
              },
              className: aV,
            }),
            (0, rr.jsx)("div", { className: nV }),
          ],
        }),
        (0, rr.jsx)("div", {
          className: iV,
          children: e.computes
            .categoriesOrdered()
            .map((a) =>
              (0, rr.jsx)(
                QO,
                {
                  category: a,
                  isActive: e.computes.isFilterCategorySelected(a),
                  onClick: t.toggleFilterCategory,
                },
                a,
              ),
            ),
        }),
      ],
    });
  }),
  cV = "BattleAbilitiesSetup_d7b0f5ac",
  dV = "BattleAbilitiesSetup_content_819f3d82",
  uV = "BattleAbilitiesSetup_dealPanel_55f12f67";
function mV() {
  return (0, rr.jsxs)("div", {
    className: cV,
    children: [
      (0, rr.jsxs)("div", { className: dV, children: [(0, rr.jsx)(lV, {}), (0, rr.jsx)(MO, {})] }),
      (0, rr.jsx)(UO, { className: uV }),
    ],
  });
}
var pV = {
    "media-wrapper": "LevelTab_media-wrapper_4aeb28e8",
    root: "LevelTab_root_4aeb28e8",
    base: "LevelTab_863d008c",
    base__active: "LevelTab_base__active_67fe2136",
    label: "LevelTab_label_6484b458",
    arrow: "LevelTab_arrow_dc16e675",
    arrow__active: "LevelTab_arrow__active_3c22cb28",
  },
  _V = "none",
  hV = "default",
  gV = "active",
  fV = ks.resolve("sounds");
function vV({ isActive: e, index: t, arrowType: a, onClick: s, className: n }) {
  return (0, rr.jsxs)("div", {
    className: cs(pV.base, e && pV.base__active, n),
    onClick: () => {
      (fV.play("play"), s(t));
    },
    onMouseEnter: () => fV.play("highlight"),
    children: [
      (0, rr.jsx)("div", { className: pV.label, children: M(t + 1) }),
      a !== _V && (0, rr.jsx)("div", { className: cs(pV.arrow, pV[`arrow__${a}`]) }),
    ],
  });
}
var bV = "SkillParam_337d5af9",
  xV = "SkillParam_labelsWrapper_daed8ee8",
  yV = "SkillParam_nameLabel_4bdd1a20",
  CV = "SkillParam_valueWrapper_11f2545e",
  jV = "SkillParam_diff_525eeefd",
  wV = "SkillParam_diffValueLabel_f10f7b4c",
  NV = "SkillParam_valueLabel_df9e7597",
  IV = "SkillParam_progress_77e4b0f9",
  SV = "SkillParam_progressValueLine_82f4b8bc",
  kV = "SkillParam_progressValue_bc9e0ecb",
  PV = "SkillParam_darkenLine_6f217dca",
  EV = "SkillParam_progressDelta_e5501f5d";
function MV({ currentParam: e, firstParam: t, lastParam: a }) {
  const s = Number(e.value),
    n = Number(t.value),
    r = Number(a.value),
    i = n < r,
    o = (() => {
      if (!isNaN(s) && !isNaN(n)) {
        const e = s - n;
        return 0 === e ? null : e;
      }
      return null;
    })(),
    l = { width: ((100 * n) / r).toString() + "%" },
    c = { width: ((100 * (s - n)) / r).toString() + "%" };
  return (0, rr.jsxs)("div", {
    className: bV,
    children: [
      (0, rr.jsxs)("div", {
        className: xV,
        children: [
          (0, rr.jsx)("div", { className: yV, children: t.name }),
          (0, rr.jsxs)("div", {
            className: CV,
            children: [
              o &&
                (0, rr.jsx)(g, {
                  path: "fl_battle_abilities_setup.infoPanel.paramDiff",
                  params: (() => {
                    if (!o) return {};
                    const t = {
                      sign: o < 0 ? "-" : "+",
                      value: Ea.formatReal("woZeroDigits", Math.abs(o)),
                    };
                    return {
                      diff: (0, rr.jsx)(vs, { text: e.valueTemplate, params: t, className: wV }),
                    };
                  })(),
                  className: jV,
                }),
              (0, rr.jsx)(vs, {
                text: e.valueTemplate,
                params: (() => {
                  const e = !isNaN(n),
                    a = e && n < 0 ? "-" : "";
                  return {
                    sign: t.sign || a,
                    value: e ? Ea.formatNumber("gold", Math.abs(n)) : t.value,
                  };
                })(),
                className: NV,
              }),
            ],
          }),
        ],
      }),
      i &&
        (0, rr.jsxs)("div", {
          className: IV,
          children: [
            (0, rr.jsxs)("div", {
              className: kV,
              style: l,
              children: [
                (0, rr.jsx)("div", { className: SV }),
                (0, rr.jsx)("div", { className: PV }),
              ],
            }),
            (0, rr.jsx)("div", { className: EV, style: c }),
          ],
        }),
    ],
  });
}
var LV = "Levels_5c605e6b",
  AV = "Levels_tabsWrapper_3a62d1d",
  TV = "Levels_tabsBorder_50017379",
  DV = "Levels_tabsBorder__top_f8c8b953",
  BV = "Levels_tabsBorder__bottom_57e6b53",
  OV = "Levels_tabsLabel_de21aa65",
  VV = "Levels_tabs_4285b7dc",
  RV = "Levels_tab_d96685dc",
  HV = "Levels_caret_7b3e7929",
  $V = "Levels_params_e874639",
  zV = "Levels_infoIcon_121b814f",
  FV = ks.resolve("views"),
  WV = ks.resolve("strings"),
  qV = Hs(function () {
    const { model: e, controls: t } = oO(),
      { selectedLevel: a, levelInfos: s } = e.detailsData.get(),
      n = s.length - 1,
      r = s[0]?.params,
      i = s[s.length - 1]?.params,
      o = s[a]?.params,
      l = { left: 60 * a + 12 + "rem" },
      c = S({
        contentId: FV.read((e) => e.frontline.mono.lobby.tooltips.level_reserves_tooltip("resId")),
      }),
      d = (0, jn.useCallback)((e) => t.levelChange(e), [t]);
    return (0, rr.jsxs)("div", {
      className: LV,
      children: [
        (0, rr.jsxs)("div", {
          className: AV,
          children: [
            (0, rr.jsx)("div", { className: cs(TV, DV) }),
            (0, rr.jsx)("div", { className: cs(TV, BV) }),
            (0, rr.jsx)("div", { ...c, className: zV }),
            (0, rr.jsx)("div", {
              className: OV,
              children: WV.readOrEmpty("fl_battle_abilities_setup.infoPanel.level"),
            }),
            (0, rr.jsxs)("div", {
              className: VV,
              children: [
                s.map((e, t) =>
                  (0, rr.jsx)(
                    vV,
                    {
                      index: t,
                      isActive: t <= a,
                      arrowType: t < n ? (t < a ? gV : hV) : _V,
                      onClick: d,
                      className: RV,
                    },
                    e.id,
                  ),
                ),
                (0, rr.jsx)("div", { className: HV, style: l }),
              ],
            }),
          ],
        }),
        (0, rr.jsx)("div", {
          className: $V,
          children: o?.map((e, t) =>
            (0, rr.jsx)(MV, { firstParam: r?.[t], lastParam: i?.[t], currentParam: e }, e.id),
          ),
        }),
      ],
    });
  }),
  ZV = "InfoPanel_ac0bfa8f",
  GV = "InfoPanel_vehicleWrapper_d3f89dd7",
  UV = "InfoPanel_vehicleContent_c6d7efa7",
  KV = "InfoPanel_vehicleInfo_7bd318a8",
  XV = "InfoPanel_name_700a0d0",
  YV = "InfoPanel_scrollWrapper_b1e8355d",
  JV = "InfoPanel_scrollContent_3bd9245f",
  QV = "InfoPanel_description_96ed7ec7",
  eR = "InfoPanel_statusTitle_72fe2105",
  tR = "InfoPanel_statusDescription_b3ccccae",
  aR = "InfoPanel_categoryBlock_52ae4bcf",
  sR = "InfoPanel_category_e35fb229",
  nR = "InfoPanel_categoryIcon_98b22eb8",
  rR = "InfoPanel_statusTitleBlock_43c4c2bf",
  iR = "InfoPanel_statusTitle__activated_8fc81958",
  oR = "InfoPanel_alertIcon_16544f44",
  lR = "InfoPanel_verticalBar_bb1c4e09",
  cR = Hs(function () {
    const { model: e } = oO(),
      t = er().model.selectedVehicle(),
      a = er().model.selectedVehicleStatistics();
    if (!t || !a) return;
    const { name: s, description: n, category: r, isActivated: i } = e.detailsData.get(),
      o = R.strings.fl_battle_abilities_setup.infoPanel,
      l = i ? o.status.unlocked() : o.status.locked(),
      c = i ? o.description.unlocked() : o.description.locked();
    return (0, rr.jsxs)("div", {
      className: ZV,
      children: [
        (0, rr.jsx)("div", {
          className: GV,
          children: (0, rr.jsxs)(ee, {
            className: UV,
            children: [
              (0, rr.jsx)(ee.Level, { className: KV, value: t.level }),
              xt(t.type) && (0, rr.jsx)(ee.Type, { type: t.type, premium: t.premium || a.elite }),
              (0, rr.jsx)(ee.Name, { className: KV, children: t.shortName }),
            ],
          }),
        }),
        (0, rr.jsx)("div", {
          className: YV,
          children: (0, rr.jsxs)(Xa, {
            children: [
              (0, rr.jsxs)(ca, {
                classNames: { content: JV },
                children: [
                  (0, rr.jsx)(vs, { text: s, className: XV }),
                  (0, rr.jsx)(vs, { text: n, className: QV }),
                  (0, rr.jsx)(vs, {
                    text: o.category.title(),
                    params: {
                      icon: (0, rr.jsx)("div", {
                        style: {
                          backgroundImage: `url(${R.images.frontline.gui.maps.icons.loadout.categories.c_16x16.$dyn(r)})`,
                        },
                        className: nR,
                      }),
                      category: (0, rr.jsx)("div", { className: sR, children: o.category.$dyn(r) }),
                    },
                    className: aR,
                  }),
                  (0, rr.jsx)(qV, {}),
                  (0, rr.jsxs)("div", {
                    className: rR,
                    children: [
                      !i && (0, rr.jsx)("div", { className: oR }),
                      (0, rr.jsx)(vs, { text: l, className: cs(eR, i && iR) }),
                    ],
                  }),
                  (0, rr.jsx)(vs, { text: c, split: !0, className: tR }),
                ],
              }),
              (0, rr.jsx)(es, { classNames: { base: lR } }),
            ],
          }),
        }),
      ],
    });
  }),
  dR = "ScreenWrapper_inner_f586f6da",
  uR = "ScreenWrapper_content_42e9ccec",
  mR = "ScreenWrapper_info_1c5f8ae5",
  pR = "ScreenWrapper_flag_bc3e1d2e",
  _R = Ss("LoadoutScreenWrapper", "ScreenWrapper_39a2fe74"),
  hR = Hs(function ({ classNames: e }) {
    const t = er().model.selectedVehicle();
    return (0, rr.jsxs)(_R, {
      className: e?.base,
      children: [
        t &&
          (0, rr.jsx)(_s, {
            className: cs(pR, e?.flag),
            path: `flags.c_600x450.${Pt(t.nationId)}`,
          }),
        (0, rr.jsxs)("div", {
          className: dR,
          children: [
            (0, rr.jsx)("div", { className: cs(uR, e?.content), children: (0, rr.jsx)(mV, {}) }),
            (0, rr.jsx)("div", { className: cs(mR, e?.info), children: (0, rr.jsx)(cR, {}) }),
          ],
        }),
      ],
    });
  }),
  gR = "LoadoutScreen_b66d9141",
  fR = "LoadoutScreen_info_1918746a",
  vR = ks.resolve("aliases");
function bR(e, t) {
  return { options: { rootId: t.read(e) } };
}
var xR = new as()
  .addWithProps(
    Yv,
    bR((e) => e.hangar.shared.Consumables("resId"), vR),
  )
  .addWithProps(
    ib,
    bR((e) => e.hangar.shared.Instructions("resId"), vR),
  )
  .addWithProps(
    sb,
    bR((e) => e.hangar.shared.Equipments("resId"), vR),
  )
  .addWithProps(
    gb,
    bR((e) => e.hangar.shared.Shells("resId"), vR),
  );
function yR(e) {
  const t = ct();
  gt(ma.ESCAPE, () => {
    t.push(Ef, void 0);
  });
  const { page: a } = e.params,
    s = { base: gR, info: fR };
  return (0, rr.jsx)(wv, {
    options: { rootId: R.aliases.hangar.shared.Loadout("resId") },
    children:
      "battleAbilities" === a
        ? (0, rr.jsx)(iO, {
            options: { rootId: R.aliases.frontline.loadout.BattleAbilities("resId") },
            children: (0, rr.jsx)(hR, { classNames: s }),
          })
        : (0, rr.jsx)(Rl, {
            classNames: s,
            children: void 0 !== a && xR.render((0, rr.jsx)(sO, { type: a })),
          }),
  });
}
var CR = "Page_c86c7327",
  jR = "Page_carousel_2e3eb473",
  wR = "Page_carousel__double_b4782e51",
  NR = "Page_carouselButtons_4148fb",
  IR = "Page_filterPopover_f4402d4f",
  SR = "Page_filterTrigger_9d14c53b",
  kR = "Page_filterTriggerContent_fe0f376c",
  PR = "Page_teaserWidget_ab2c33e0",
  ER = { rootId: ks.resolve("aliases").read((e) => e.hangar.shared.Teaser("resId")) },
  MR = [Mf.equipments, Mf.instructions, Mf.shells, Mf.consumables, Mf.battleAbilities, Lf, Ef],
  LR = [Lf, Ef],
  AR = Hs(function () {
    const e = ct(),
      t = Cn(),
      a = er().model.selectedVehicle(),
      s = t.model.carouselRowCount.get(),
      n = void 0 === a,
      r = MR.includes(e.location) && !n,
      i = LR.includes(e.location) && !n,
      o = e.location === Ef,
      l = !o;
    return (0, rr.jsx)(rr.Fragment, {
      children: (0, rr.jsxs)("div", {
        className: CR,
        children: [
          l && (0, rr.jsx)(os, {}),
          (0, rr.jsxs)(Z, {
            children: [
              (0, rr.jsx)(A, { path: Ef, component: tL, exact: !0 }),
              (0, rr.jsx)(A, { path: `${Mf.root}/:page`, component: yR }),
              (0, rr.jsx)(A, { path: Af, component: xf }),
              (0, rr.jsx)(A, { path: Lf, component: H_ }),
            ],
          }),
          i && (0, rr.jsx)(lN, { screenModeEnabled: e.location.endsWith(Lf) }),
          r && (0, rr.jsx)(Jj, { screenModeEnabled: !o }),
          o &&
            (0, rr.jsxs)("div", {
              className: cs(jR, 2 === s && wR),
              children: [
                (0, rr.jsxs)("div", {
                  className: NR,
                  children: [
                    (0, rr.jsx)(b_, { classNames: { base: IR, trigger: SR, triggerContent: kR } }),
                    (0, rr.jsx)(Pf, {}),
                  ],
                }),
                (0, rr.jsx)(Vf, {}),
              ],
            }),
          o && (0, rr.jsx)(Nf, { className: PR, options: ER }),
        ],
      }),
    });
  }),
  TR = "Hangar_39962005";
function DR() {
  return (0, rr.jsx)("div", { className: TR, children: (0, rr.jsx)(AR, {}) });
}
var BR = ks.resolve("aliases");
function OR(e, t) {
  return { options: { rootId: t.read(e) } };
}
var VR = Ps([
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
      "loadout:ammunition_setup:specialization-filter:stealth": "cons_equipment_filter_on_stealth",
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
  {
    "mouse-enter": { "vehicle-card": "carousel", "vehicle:playlists:card": "carousel" },
    click: {
      "vehicle:action-cards": "yes1",
      "vehicle-card": "tank_selection",
      "vehicle:playlists:dropdown_trigger": "tabs",
      "vehicle:playlists:copy_button": "tabb",
      "vehicle:playlists:edit_button": "tabb",
      "vehicle:playlists:card": "carouselButton",
      "vehicle:playlists:edit:footer:save_button": "yes1",
      "vehicle:playlists:edit:footer:cancel_button": "cancelcloseno",
      "vehicle:playlists:edit:preview_card:close_button": "cancelcloseno",
      "vehicle:playlists:overlay:submit_button": "yes1",
      "vehicle:playlists:overlay:cancel_button": "cancelcloseno",
    },
    animation: { "vehicle-ttc-section:accordion-summary": "gui_ttc_start" },
    drag: { "vehicle:playlists:edit:draggable_item": "play" },
    drop: { "vehicle:playlists:edit:draggable_item": "tank_selection" },
  },
]);
Va(
  new as()
    .addWithProps(B, { soundsOverrides: VR })
    .add(Je)
    .addWithProps(
      yn,
      OR((e) => e.hangar.shared.VehicleFilters("resId"), BR),
    )
    .addWithProps(
      Nn,
      OR((e) => e.hangar.shared.VehiclesStatistics("resId"), BR),
    )
    .addWithProps(
      Sn,
      OR((e) => e.hangar.shared.VehiclesInfo("resId"), BR),
    )
    .addWithProps(
      Gs,
      OR((e) => e.hangar.shared.SpaceInteraction("resId"), BR),
    )
    .addWithProps(
      qs,
      OR((e) => e.hangar.shared.HeroTank("resId"), BR),
    )
    .add(Pn)
    .addWithProps(
      Zn,
      OR((e) => e.hangar.shared.VehiclePlaylists("resId"), BR),
    )
    .addWithProps(
      Qn,
      OR((e) => e.hangar.shared.VehiclesInventory("resId"), BR),
    )
    .addWithProps(
      tr,
      OR((e) => e.hangar.shared.ManageableVehiclePlaylists("resId"), BR),
    )
    .addWithProps(
      AM,
      OR((e) => e.frontline.shared.AlertMessage("resId"), BR),
    )
    .render((0, rr.jsx)(DR, {})),
  { fullScreen: !0 },
);
