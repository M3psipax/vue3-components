import p from "../../@vite/vue3-components.js";
import { ref as L } from "vue";
import { d as A } from './../../modules/@nimiq/utils/dist/module/vue3-components3.js';
const r = "en", f = [
  r,
  "de",
  "es",
  "fr",
  "nl",
  "pt",
  "ru",
  "uk",
  "zh"
], t = L(l()), s = {}, k = [];
function C(n) {
  if (f.includes(n) || (n = r), n !== t.value) {
    t.value = n;
    for (const e of Object.keys(k))
      g(e);
  }
}
function l() {
  let o = A.getCookie("lang") || "en";
  return f.includes(o) || (o = r), o;
}
async function g(n) {
  const e = t.value + "-" + n;
  if (!(e in s) && t.value !== "en") {
    const o = await p(/* @__PURE__ */ Object.assign({}), `./${t.value}/${n}.json`);
    s[e] = o.default || {};
  }
}
function _(n, e, o, i) {
  let a;
  typeof o == "string" ? a = o : (a = t.value, i = o);
  const u = `${a}-${n}`;
  let c = s[u] && s[u][e] || e;
  return (typeof i == "object" || Array.isArray(i)) && (c = c.replace(/{(\w+?)}/g, (d, m) => i[m].toString() || d)), c;
}
function j(n) {
  return g(n), _.bind(void 0, n);
}
window.addEventListener("focus", () => C(l()));
export {
  _ as $t,
  l as detectLanguage,
  j as loadI18n,
  C as setLanguage
};
//# sourceMappingURL=vue3-components.js.map
