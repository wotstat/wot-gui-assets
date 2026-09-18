import { Ta as t, Yi as e, ea as o } from "./lib.js";
var s = {
  overview: "overview",
  teamsStatistics: "teamScore",
  progression: "missionProgress",
  financialReport: "financialReport",
};
Object.values(s);
function i() {
  return Date.now().toString(36) + "-" + Math.random().toString(36).slice(2, 9);
}
function a(t) {
  return function (s) {
    return t(e(() => o(s)));
  };
}
function n(t, e) {
  return 0 === t && "" === e;
}
function r(t) {
  return t.personal && void 0 !== t.vehicle;
}
var c = Object.values(s),
  p = {
    [s.overview]: "/comp7Light/postBattleResults/comp7Light/overview",
    [s.teamsStatistics]: "/comp7Light/postBattleResults/comp7Light/teamScore",
    [s.progression]: "/comp7Light/postBattleResults/comp7Light/missionProgress",
    [s.financialReport]: "/comp7Light/postBattleResults/comp7Light/financialReport",
  };
function l(e) {
  const o = c.find((t) => p[t] === e);
  return (t(void 0 !== o, `The post battle screen is not found by path ${e}`), o);
}
export { p as a, r as i, a as n, i as o, n as r, s, l as t };
