import { Br as e, Gt as r, Qr as a, Ut as s, _ as o, f as t, h as n } from "./lib.js";
var l = (function (e) {
    return (
      (e.None = "none"),
      (e.CeasefireCurrentServer = "ceasefireCurrentServer"),
      (e.CeasefireAllServers = "ceasefireAllServers"),
      (e.ModeIsUnavailable = "modeIsUnavailable"),
      (e.ModeIsFinished = "modeIsFinished"),
      e
    );
  })({}),
  i = t(n({ goal: o(), periods: t(t(o())) }));
function c(r) {
  return r.map(([r, s]) => [e(r, a.ShortTime), e(s, a.ShortTime)]);
}
var [d, h] = r()(
  ({ observableModel: e }) => {
    const r = { ...e.primitives(["alertType"]) },
      a = e.dict("battleSchedule");
    return {
      ...r,
      computes: {
        battleSchedule: s.shallow(() => {
          const e = [];
          for (const [s, o] of a.entries())
            try {
              e.push({ goal: s, periods: c(JSON.parse(o.get())) });
            } catch (r) {
              console.error(`Error parsing JSON for element ${s}:`, r);
            }
          return e;
        }),
      },
    };
  },
  ({ externalModel: e }) => ({ changeServer: e.createCallbackNoArgs("onChangeServer") }),
);
export { l as i, i as n, h as r, d as t };
