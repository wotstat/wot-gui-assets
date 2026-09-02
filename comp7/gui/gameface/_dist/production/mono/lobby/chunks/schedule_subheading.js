import { j as s, W as e, V as a } from "./vendor.js";
import {
  ei as t,
  F as o,
  ej as n,
  ek as i,
  el as m,
  di as r,
  dh as d,
  dt as c,
  cF as l,
} from "./lib.js";
import { a as x } from "./get_season_name.js";
import { u as p } from "./use_server_time_polling.js";
import { u as g } from "./schedule_model.js";
const j = (s) => {
    const e = Math.floor(s);
    return {
      totalSecondsLeft: e,
      seconds: Math.floor(e % 60),
      minutes: Math.floor(e / 60) % 60,
      hours: Math.floor((e / 3600) % 24),
      totalDays: Math.floor(e / 86400),
    };
  },
  h = (e, a, t = r.ShortDate) => ({
    startDate: s.jsx(d, { datetime: e, format: t }),
    endDate: s.jsx(d, { datetime: a, format: t }),
  }),
  f = (e, a, r) => {
    const d = a - r,
      c = ((s, e) => j(s - e))(a, r);
    return d >= t
      ? s.jsx(o, { text: `${R.strings.comp7_ext.season.range()}`, binding: h(e, a) })
      : d >= n
        ? s.jsx(o, { text: R.strings.comp7_ext.season.daysLeft(), binding: c })
        : d >= i
          ? s.jsx(o, { text: R.strings.comp7_ext.season.hoursLeft(), binding: c })
          : d >= m
            ? s.jsx(o, { text: R.strings.comp7_ext.season.minutesLeft(), binding: c })
            : d >= 1
              ? s.jsx(o, { text: R.strings.comp7_ext.season.secondsLeft(), binding: c })
              : void 0;
  },
  _ = "ActiveSeasonState_7be3b725",
  S = "ActiveSeasonState_calendarIcon_59b8982c",
  u = "ActiveSeasonState_divider_82fcaca5",
  v = ({
    startTimestamp: a,
    endTimestamp: t,
    currentTimestamp: o,
    seasonName: n,
    tooltipId: i = "",
    hasSeasonName: m = !0,
    classNames: r,
  }) =>
    s.jsx(c, {
      args: { tooltipId: i },
      isEnabled: Boolean(i),
      children: s.jsxs("div", {
        className: _,
        children: [
          s.jsx("div", { className: e(S, r?.calendarIcon) }),
          m && s.jsxs(s.Fragment, { children: [x(n), s.jsx("div", { className: u })] }),
          f(a, t, o),
        ],
      }),
    }),
  N = "ScheduleSubheading_6a634a68",
  b = a(({ className: a, classNames: t, hasSeasonName: o = !0 }) => {
    const { model: n, controls: i } = g(),
      m = n.season.startTimestamp.get(),
      r = n.season.endTimestamp.get(),
      d = n.season.serverTimestamp.get(),
      c = n.season.name.get();
    return (
      p(d, r, i.pollServerTime),
      s.jsx("div", {
        className: e(N, a),
        children:
          d < r
            ? s.jsx("div", {
                className: t?.activeSeasonState,
                children: s.jsx(v, {
                  startTimestamp: m,
                  endTimestamp: r,
                  currentTimestamp: d,
                  seasonName: c,
                  tooltipId: n.root.get().tooltipId,
                  hasSeasonName: o,
                  classNames: t?.scheduleClassNames,
                }),
              })
            : s.jsx(l, { text: R.strings.comp7_ext.season.over(), binding: { seasonName: x(c) } }),
      })
    );
  });
export { b as S, h as g };
