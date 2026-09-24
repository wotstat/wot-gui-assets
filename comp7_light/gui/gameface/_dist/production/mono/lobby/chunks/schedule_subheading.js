import { r as s } from "./rolldown-runtime.js";
import {
  D as e,
  Do as a,
  Eo as t,
  Nr as o,
  O as n,
  Oo as r,
  Uo as i,
  Vo as m,
  sa as d,
  wr as l,
} from "./lib.js";
import { a as c, o as x } from "./vendor.js";
import { t as p } from "./use_server_time_polling.js";
import { n as j } from "./schedule_model.js";
m();
var g = (s) => {
    const e = Math.floor(s);
    return {
      totalSecondsLeft: e,
      seconds: Math.floor(e % 60),
      minutes: Math.floor(e / 60) % 60,
      hours: Math.floor((e / 3600) % 24),
      totalDays: Math.floor(e / 86400),
    };
  },
  h = s(d()),
  f = R.strings.comp7_ext.season,
  N = (s, e, a = i.ShortDate) => ({
    startDate: (0, h.jsx)(n, { datetime: s, format: a }),
    endDate: (0, h.jsx)(n, { datetime: e, format: a }),
  }),
  u = (s, e, a) => {
    const t = e - a,
      o = ((s, e) => g(s - e))(e, a);
    return t >= 604800
      ? (0, h.jsx)(l, { text: f.range(), binding: N(s, e) })
      : t >= 86400
        ? (0, h.jsx)(l, { text: f.daysLeft(), binding: o })
        : t >= 3600
          ? (0, h.jsx)(l, { text: f.hoursLeft(), binding: o })
          : t >= 60
            ? (0, h.jsx)(l, { text: f.minutesLeft(), binding: o })
            : t >= 1
              ? (0, h.jsx)(l, { text: f.secondsLeft(), binding: o })
              : void 0;
  },
  v = R.strings.comp7_ext,
  S = (s) => ((s, e) => String(s.$dyn(e)))(v.seasonName, s),
  _ = s(x()),
  b = "ActiveSeasonState_7be3b725",
  T = "ActiveSeasonState_calendarIcon_cc4d1c6a",
  D = "ActiveSeasonState_divider_e45543ee",
  I = ({
    startTimestamp: s,
    endTimestamp: e,
    currentTimestamp: a,
    seasonName: t,
    tooltipId: n = "",
    hasSeasonName: r = !0,
    classNames: i,
  }) =>
    (0, h.jsx)(o, {
      args: { tooltipId: n },
      isEnabled: Boolean(n),
      children: (0, h.jsxs)("div", {
        className: b,
        children: [
          (0, h.jsx)("div", { className: (0, _.default)(T, i?.calendarIcon) }),
          r && (0, h.jsxs)(h.Fragment, { children: [S(t), (0, h.jsx)("div", { className: D })] }),
          u(s, e, a),
        ],
      }),
    }),
  L = "ScheduleSubheading_6a634a68",
  M = c(({ className: s, classNames: a, hasSeasonName: t = !0 }) => {
    const { model: o, controls: n } = j(),
      r = o.season.startTimestamp.get(),
      i = o.season.endTimestamp.get(),
      m = o.season.serverTimestamp.get(),
      d = o.season.name.get();
    return (
      p(m, i, n.pollServerTime),
      (0, h.jsx)("div", {
        className: (0, _.default)(L, s),
        children:
          m < i
            ? (0, h.jsx)("div", {
                className: a?.activeSeasonState,
                children: (0, h.jsx)(I, {
                  startTimestamp: r,
                  endTimestamp: i,
                  currentTimestamp: m,
                  seasonName: d,
                  tooltipId: o.root.get().tooltipId,
                  hasSeasonName: t,
                  classNames: a?.scheduleClassNames,
                }),
              })
            : (0, h.jsx)(e, {
                text: R.strings.comp7_ext.season.over(),
                binding: { seasonName: S(d) },
              }),
      })
    );
  });
export { M as t };
