import { count_occurences as s } from "./vue3-components5.js";
import d from "./vue3-components6.js";
function m(r, e) {
  var t = typeof Symbol < "u" && r[Symbol.iterator] || r["@@iterator"];
  if (t)
    return (t = t.call(r)).next.bind(t);
  if (Array.isArray(r) || (t = y(r)) || e && r && typeof r.length == "number") {
    t && (r = t);
    var n = 0;
    return function() {
      return n >= r.length ? { done: !0 } : { done: !1, value: r[n++] };
    };
  }
  throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function y(r, e) {
  if (!!r) {
    if (typeof r == "string")
      return c(r, e);
    var t = Object.prototype.toString.call(r).slice(8, -1);
    if (t === "Object" && r.constructor && (t = r.constructor.name), t === "Map" || t === "Set")
      return Array.from(r);
    if (t === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))
      return c(r, e);
  }
}
function c(r, e) {
  (e == null || e > r.length) && (e = r.length);
  for (var t = 0, n = new Array(e); t < e; t++)
    n[t] = r[t];
  return n;
}
function b(r) {
  var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "x", t = arguments.length > 2 ? arguments[2] : void 0;
  if (!r)
    return function(a) {
      return {
        text: a
      };
    };
  var n = s(e, r);
  return function(a) {
    if (!a)
      return {
        text: "",
        template: r
      };
    for (var u = 0, i = "", l = m(r.split("")), o; !(o = l()).done; ) {
      var f = o.value;
      if (f !== e) {
        i += f;
        continue;
      }
      if (i += a[u], u++, u === a.length && a.length < n)
        break;
    }
    return t && (i = d(i, r)), {
      text: i,
      template: r
    };
  };
}
export {
  b as default
};
//# sourceMappingURL=vue3-components.js.map
