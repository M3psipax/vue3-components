function i(r, e) {
  var t = typeof Symbol < "u" && r[Symbol.iterator] || r["@@iterator"];
  if (t)
    return (t = t.call(r)).next.bind(t);
  if (Array.isArray(r) || (t = f(r)) || e && r && typeof r.length == "number") {
    t && (r = t);
    var n = 0;
    return function() {
      return n >= r.length ? { done: !0 } : { done: !1, value: r[n++] };
    };
  }
  throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function f(r, e) {
  if (!!r) {
    if (typeof r == "string")
      return o(r, e);
    var t = Object.prototype.toString.call(r).slice(8, -1);
    if (t === "Object" && r.constructor && (t = r.constructor.name), t === "Map" || t === "Set")
      return Array.from(r);
    if (t === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))
      return o(r, e);
  }
}
function o(r, e) {
  (e == null || e > r.length) && (e = r.length);
  for (var t = 0, n = new Array(e); t < e; t++)
    n[t] = r[t];
  return n;
}
function c(r, e) {
  for (var t = 0, n = i(e.split("")), a; !(a = n()).done; ) {
    var u = a.value;
    u === r && t++;
  }
  return t;
}
export {
  c as count_occurences
};
//# sourceMappingURL=vue3-components5.js.map
