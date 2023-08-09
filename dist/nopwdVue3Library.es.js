import { ref as rt, getCurrentInstance as Ui, onMounted as ho, nextTick as go, unref as nt, getCurrentScope as zi, onScopeDispose as qi, readonly as $i, watch as mo, shallowRef as Hi, inject as Ji, defineComponent as yo, useCssVars as Wi, watchEffect as vo, openBlock as _t, createElementBlock as Tt, normalizeClass as Ki, createElementVNode as bt, withModifiers as Gi, createBlock as pn, createCommentVNode as Ut, normalizeStyle as mr, toDisplayString as yr } from "vue";
const Yi = {
  "auth.appinstalled": "App installed locally? Click here",
  "auth.codedark": "Code not reading? Flip to light-mode.",
  "auth.codelight": "Scan the code with your mobile device.",
  "auth.codeerror": "Error requesting code, <br/>please refresh page.",
  "auth.loading": "Loading access code, please wait...",
  "auth.prepare": "Preparing interface...",
  "auth.login": "Click to Login"
}, Qi = {
  en: Yi
};
function wo(t = {}) {
  const e = rt({ ...Qi, ...t }), n = rt("en");
  return { t: (o) => {
    const i = e.value[n.value][o];
    return i === void 0 ? (console.warn(`Translation not found for key: ${o}`), o) : i;
  } };
}
function Xi(t) {
  return zi() ? (qi(t), !0) : !1;
}
function zn(t) {
  return typeof t == "function" ? t() : nt(t);
}
const Zi = typeof window < "u", ts = () => {
};
function es(t, e) {
  function n(...r) {
    return new Promise((o, i) => {
      Promise.resolve(t(() => e.apply(this, r), { fn: e, thisArg: this, args: r })).then(o).catch(i);
    });
  }
  return n;
}
const _o = (t) => t();
function ns(t = _o) {
  const e = rt(!0);
  function n() {
    e.value = !1;
  }
  function r() {
    e.value = !0;
  }
  const o = (...i) => {
    e.value && t(...i);
  };
  return { isActive: $i(e), pause: n, resume: r, eventFilter: o };
}
function rs(t, e = !0) {
  Ui() ? ho(t) : e ? t() : go(t);
}
var vr = Object.getOwnPropertySymbols, os = Object.prototype.hasOwnProperty, is = Object.prototype.propertyIsEnumerable, ss = (t, e) => {
  var n = {};
  for (var r in t)
    os.call(t, r) && e.indexOf(r) < 0 && (n[r] = t[r]);
  if (t != null && vr)
    for (var r of vr(t))
      e.indexOf(r) < 0 && is.call(t, r) && (n[r] = t[r]);
  return n;
};
function as(t, e, n = {}) {
  const r = n, {
    eventFilter: o = _o
  } = r, i = ss(r, [
    "eventFilter"
  ]);
  return mo(
    t,
    es(
      o,
      e
    ),
    i
  );
}
var cs = Object.defineProperty, us = Object.defineProperties, ls = Object.getOwnPropertyDescriptors, qe = Object.getOwnPropertySymbols, bo = Object.prototype.hasOwnProperty, Eo = Object.prototype.propertyIsEnumerable, wr = (t, e, n) => e in t ? cs(t, e, { enumerable: !0, configurable: !0, writable: !0, value: n }) : t[e] = n, ds = (t, e) => {
  for (var n in e || (e = {}))
    bo.call(e, n) && wr(t, n, e[n]);
  if (qe)
    for (var n of qe(e))
      Eo.call(e, n) && wr(t, n, e[n]);
  return t;
}, fs = (t, e) => us(t, ls(e)), ps = (t, e) => {
  var n = {};
  for (var r in t)
    bo.call(t, r) && e.indexOf(r) < 0 && (n[r] = t[r]);
  if (t != null && qe)
    for (var r of qe(t))
      e.indexOf(r) < 0 && Eo.call(t, r) && (n[r] = t[r]);
  return n;
};
function hs(t, e, n = {}) {
  const r = n, {
    eventFilter: o
  } = r, i = ps(r, [
    "eventFilter"
  ]), { eventFilter: s, pause: a, resume: u, isActive: d } = ns(o);
  return { stop: as(
    t,
    e,
    fs(ds({}, i), {
      eventFilter: s
    })
  ), pause: a, resume: u, isActive: d };
}
function gs(t) {
  var e;
  const n = zn(t);
  return (e = n == null ? void 0 : n.$el) != null ? e : n;
}
const Dn = Zi ? window : void 0;
function _r(...t) {
  let e, n, r, o;
  if (typeof t[0] == "string" || Array.isArray(t[0]) ? ([n, r, o] = t, e = Dn) : [e, n, r, o] = t, !e)
    return ts;
  Array.isArray(n) || (n = [n]), Array.isArray(r) || (r = [r]);
  const i = [], s = () => {
    i.forEach((h) => h()), i.length = 0;
  }, a = (h, c, w, C) => (h.addEventListener(c, w, C), () => h.removeEventListener(c, w, C)), u = mo(
    () => [gs(e), zn(o)],
    ([h, c]) => {
      s(), h && i.push(
        ...n.flatMap((w) => r.map((C) => a(h, w, C, c)))
      );
    },
    { immediate: !0, flush: "post" }
  ), d = () => {
    u(), s();
  };
  return Xi(d), d;
}
const xe = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, Ne = "__vueuse_ssr_handlers__", ms = /* @__PURE__ */ ys();
function ys() {
  return Ne in xe || (xe[Ne] = xe[Ne] || {}), xe[Ne];
}
function vs(t, e) {
  return ms[t] || e;
}
function ws(t) {
  return t == null ? "any" : t instanceof Set ? "set" : t instanceof Map ? "map" : t instanceof Date ? "date" : typeof t == "boolean" ? "boolean" : typeof t == "string" ? "string" : typeof t == "object" ? "object" : Number.isNaN(t) ? "any" : "number";
}
var _s = Object.defineProperty, br = Object.getOwnPropertySymbols, bs = Object.prototype.hasOwnProperty, Es = Object.prototype.propertyIsEnumerable, Er = (t, e, n) => e in t ? _s(t, e, { enumerable: !0, configurable: !0, writable: !0, value: n }) : t[e] = n, Or = (t, e) => {
  for (var n in e || (e = {}))
    bs.call(e, n) && Er(t, n, e[n]);
  if (br)
    for (var n of br(e))
      Es.call(e, n) && Er(t, n, e[n]);
  return t;
};
const Os = {
  boolean: {
    read: (t) => t === "true",
    write: (t) => String(t)
  },
  object: {
    read: (t) => JSON.parse(t),
    write: (t) => JSON.stringify(t)
  },
  number: {
    read: (t) => Number.parseFloat(t),
    write: (t) => String(t)
  },
  any: {
    read: (t) => t,
    write: (t) => String(t)
  },
  string: {
    read: (t) => t,
    write: (t) => String(t)
  },
  map: {
    read: (t) => new Map(JSON.parse(t)),
    write: (t) => JSON.stringify(Array.from(t.entries()))
  },
  set: {
    read: (t) => new Set(JSON.parse(t)),
    write: (t) => JSON.stringify(Array.from(t))
  },
  date: {
    read: (t) => new Date(t),
    write: (t) => t.toISOString()
  }
}, Sr = "vueuse-storage";
function ut(t, e, n, r = {}) {
  var o;
  const {
    flush: i = "pre",
    deep: s = !0,
    listenToStorageChanges: a = !0,
    writeDefaults: u = !0,
    mergeDefaults: d = !1,
    shallow: h,
    window: c = Dn,
    eventFilter: w,
    onError: C = (g) => {
      console.error(g);
    }
  } = r, N = (h ? Hi : rt)(e);
  if (!n)
    try {
      n = vs("getDefaultStorage", () => {
        var g;
        return (g = Dn) == null ? void 0 : g.localStorage;
      })();
    } catch (g) {
      C(g);
    }
  if (!n)
    return N;
  const A = zn(e), $ = ws(A), q = (o = r.serializer) != null ? o : Os[$], { pause: V, resume: U } = hs(
    N,
    () => L(N.value),
    { flush: i, deep: s, eventFilter: w }
  );
  return c && a && (_r(c, "storage", b), _r(c, Sr, P)), b(), N;
  function L(g) {
    try {
      if (g == null)
        n.removeItem(t);
      else {
        const p = q.write(g), v = n.getItem(t);
        v !== p && (n.setItem(t, p), c && c.dispatchEvent(new CustomEvent(Sr, {
          detail: {
            key: t,
            oldValue: v,
            newValue: p,
            storageArea: n
          }
        })));
      }
    } catch (p) {
      C(p);
    }
  }
  function O(g) {
    const p = g ? g.newValue : n.getItem(t);
    if (p == null)
      return u && A !== null && n.setItem(t, q.write(A)), A;
    if (!g && d) {
      const v = q.read(p);
      return typeof d == "function" ? d(v, A) : $ === "object" && !Array.isArray(v) ? Or(Or({}, A), v) : v;
    } else
      return typeof p != "string" ? p : q.read(p);
  }
  function P(g) {
    b(g.detail);
  }
  function b(g) {
    if (!(g && g.storageArea !== n)) {
      if (g && g.key == null) {
        N.value = A;
        return;
      }
      if (!(g && g.key !== t)) {
        V();
        try {
          N.value = O(g);
        } catch (p) {
          C(p);
        } finally {
          g ? go(U) : U();
        }
      }
    }
  }
}
/*!
  * vue-router v4.2.4
  * (c) 2023 Eduardo San Martin Morote
  * @license MIT
  */
var xr;
(function(t) {
  t.pop = "pop", t.push = "push";
})(xr || (xr = {}));
var Nr;
(function(t) {
  t.back = "back", t.forward = "forward", t.unknown = "";
})(Nr || (Nr = {}));
Symbol(process.env.NODE_ENV !== "production" ? "navigation failure" : "");
var Dr;
(function(t) {
  t[t.aborted = 4] = "aborted", t[t.cancelled = 8] = "cancelled", t[t.duplicated = 16] = "duplicated";
})(Dr || (Dr = {}));
Symbol(process.env.NODE_ENV !== "production" ? "router view location matched" : "");
Symbol(process.env.NODE_ENV !== "production" ? "router view depth" : "");
const Ss = Symbol(process.env.NODE_ENV !== "production" ? "router" : "");
Symbol(process.env.NODE_ENV !== "production" ? "route location" : "");
Symbol(process.env.NODE_ENV !== "production" ? "router view location" : "");
function xs() {
  return Ji(Ss);
}
var Ns = (
  /** @class */
  function() {
    function t(e) {
      if (!e)
        throw new TypeError("Invalid argument; `value` has no value.");
      this.value = t.EMPTY, e && t.isGuid(e) && (this.value = e);
    }
    return t.isGuid = function(e) {
      var n = e.toString();
      return e && (e instanceof t || t.validator.test(n));
    }, t.create = function() {
      return new t([t.gen(2), t.gen(1), t.gen(1), t.gen(1), t.gen(3)].join("-"));
    }, t.createEmpty = function() {
      return new t("emptyguid");
    }, t.parse = function(e) {
      return new t(e);
    }, t.raw = function() {
      return [t.gen(2), t.gen(1), t.gen(1), t.gen(1), t.gen(3)].join("-");
    }, t.gen = function(e) {
      for (var n = "", r = 0; r < e; r++)
        n += ((1 + Math.random()) * 65536 | 0).toString(16).substring(1);
      return n;
    }, t.prototype.equals = function(e) {
      return t.isGuid(e) && this.value === e.toString();
    }, t.prototype.isEmpty = function() {
      return this.value === t.EMPTY;
    }, t.prototype.toString = function() {
      return this.value;
    }, t.prototype.toJSON = function() {
      return {
        value: this.value
      };
    }, t.validator = new RegExp("^[a-z0-9]{8}-[a-z0-9]{4}-[a-z0-9]{4}-[a-z0-9]{4}-[a-z0-9]{12}$", "i"), t.EMPTY = "00000000-0000-0000-0000-000000000000", t;
  }()
), zt = Ns;
function Oo(t, e) {
  return function() {
    return t.apply(e, arguments);
  };
}
const { toString: Ds } = Object.prototype, { getPrototypeOf: qn } = Object, Ze = ((t) => (e) => {
  const n = Ds.call(e);
  return t[n] || (t[n] = n.slice(8, -1).toLowerCase());
})(/* @__PURE__ */ Object.create(null)), Nt = (t) => (t = t.toLowerCase(), (e) => Ze(e) === t), tn = (t) => (e) => typeof e === t, { isArray: de } = Array, me = tn("undefined");
function ks(t) {
  return t !== null && !me(t) && t.constructor !== null && !me(t.constructor) && mt(t.constructor.isBuffer) && t.constructor.isBuffer(t);
}
const So = Nt("ArrayBuffer");
function Cs(t) {
  let e;
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? e = ArrayBuffer.isView(t) : e = t && t.buffer && So(t.buffer), e;
}
const Rs = tn("string"), mt = tn("function"), xo = tn("number"), en = (t) => t !== null && typeof t == "object", Ms = (t) => t === !0 || t === !1, Ie = (t) => {
  if (Ze(t) !== "object")
    return !1;
  const e = qn(t);
  return (e === null || e === Object.prototype || Object.getPrototypeOf(e) === null) && !(Symbol.toStringTag in t) && !(Symbol.iterator in t);
}, Ps = Nt("Date"), Ts = Nt("File"), As = Nt("Blob"), Bs = Nt("FileList"), Is = (t) => en(t) && mt(t.pipe), Ls = (t) => {
  let e;
  return t && (typeof FormData == "function" && t instanceof FormData || mt(t.append) && ((e = Ze(t)) === "formdata" || // detect form-data instance
  e === "object" && mt(t.toString) && t.toString() === "[object FormData]"));
}, Fs = Nt("URLSearchParams"), js = (t) => t.trim ? t.trim() : t.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function Ee(t, e, { allOwnKeys: n = !1 } = {}) {
  if (t === null || typeof t > "u")
    return;
  let r, o;
  if (typeof t != "object" && (t = [t]), de(t))
    for (r = 0, o = t.length; r < o; r++)
      e.call(null, t[r], r, t);
  else {
    const i = n ? Object.getOwnPropertyNames(t) : Object.keys(t), s = i.length;
    let a;
    for (r = 0; r < s; r++)
      a = i[r], e.call(null, t[a], a, t);
  }
}
function No(t, e) {
  e = e.toLowerCase();
  const n = Object.keys(t);
  let r = n.length, o;
  for (; r-- > 0; )
    if (o = n[r], e === o.toLowerCase())
      return o;
  return null;
}
const Do = (() => typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : global)(), ko = (t) => !me(t) && t !== Do;
function kn() {
  const { caseless: t } = ko(this) && this || {}, e = {}, n = (r, o) => {
    const i = t && No(e, o) || o;
    Ie(e[i]) && Ie(r) ? e[i] = kn(e[i], r) : Ie(r) ? e[i] = kn({}, r) : de(r) ? e[i] = r.slice() : e[i] = r;
  };
  for (let r = 0, o = arguments.length; r < o; r++)
    arguments[r] && Ee(arguments[r], n);
  return e;
}
const Vs = (t, e, n, { allOwnKeys: r } = {}) => (Ee(e, (o, i) => {
  n && mt(o) ? t[i] = Oo(o, n) : t[i] = o;
}, { allOwnKeys: r }), t), Us = (t) => (t.charCodeAt(0) === 65279 && (t = t.slice(1)), t), zs = (t, e, n, r) => {
  t.prototype = Object.create(e.prototype, r), t.prototype.constructor = t, Object.defineProperty(t, "super", {
    value: e.prototype
  }), n && Object.assign(t.prototype, n);
}, qs = (t, e, n, r) => {
  let o, i, s;
  const a = {};
  if (e = e || {}, t == null)
    return e;
  do {
    for (o = Object.getOwnPropertyNames(t), i = o.length; i-- > 0; )
      s = o[i], (!r || r(s, t, e)) && !a[s] && (e[s] = t[s], a[s] = !0);
    t = n !== !1 && qn(t);
  } while (t && (!n || n(t, e)) && t !== Object.prototype);
  return e;
}, $s = (t, e, n) => {
  t = String(t), (n === void 0 || n > t.length) && (n = t.length), n -= e.length;
  const r = t.indexOf(e, n);
  return r !== -1 && r === n;
}, Hs = (t) => {
  if (!t)
    return null;
  if (de(t))
    return t;
  let e = t.length;
  if (!xo(e))
    return null;
  const n = new Array(e);
  for (; e-- > 0; )
    n[e] = t[e];
  return n;
}, Js = ((t) => (e) => t && e instanceof t)(typeof Uint8Array < "u" && qn(Uint8Array)), Ws = (t, e) => {
  const r = (t && t[Symbol.iterator]).call(t);
  let o;
  for (; (o = r.next()) && !o.done; ) {
    const i = o.value;
    e.call(t, i[0], i[1]);
  }
}, Ks = (t, e) => {
  let n;
  const r = [];
  for (; (n = t.exec(e)) !== null; )
    r.push(n);
  return r;
}, Gs = Nt("HTMLFormElement"), Ys = (t) => t.toLowerCase().replace(
  /[-_\s]([a-z\d])(\w*)/g,
  function(n, r, o) {
    return r.toUpperCase() + o;
  }
), kr = (({ hasOwnProperty: t }) => (e, n) => t.call(e, n))(Object.prototype), Qs = Nt("RegExp"), Co = (t, e) => {
  const n = Object.getOwnPropertyDescriptors(t), r = {};
  Ee(n, (o, i) => {
    e(o, i, t) !== !1 && (r[i] = o);
  }), Object.defineProperties(t, r);
}, Xs = (t) => {
  Co(t, (e, n) => {
    if (mt(t) && ["arguments", "caller", "callee"].indexOf(n) !== -1)
      return !1;
    const r = t[n];
    if (mt(r)) {
      if (e.enumerable = !1, "writable" in e) {
        e.writable = !1;
        return;
      }
      e.set || (e.set = () => {
        throw Error("Can not rewrite read-only method '" + n + "'");
      });
    }
  });
}, Zs = (t, e) => {
  const n = {}, r = (o) => {
    o.forEach((i) => {
      n[i] = !0;
    });
  };
  return de(t) ? r(t) : r(String(t).split(e)), n;
}, ta = () => {
}, ea = (t, e) => (t = +t, Number.isFinite(t) ? t : e), hn = "abcdefghijklmnopqrstuvwxyz", Cr = "0123456789", Ro = {
  DIGIT: Cr,
  ALPHA: hn,
  ALPHA_DIGIT: hn + hn.toUpperCase() + Cr
}, na = (t = 16, e = Ro.ALPHA_DIGIT) => {
  let n = "";
  const { length: r } = e;
  for (; t--; )
    n += e[Math.random() * r | 0];
  return n;
};
function ra(t) {
  return !!(t && mt(t.append) && t[Symbol.toStringTag] === "FormData" && t[Symbol.iterator]);
}
const oa = (t) => {
  const e = new Array(10), n = (r, o) => {
    if (en(r)) {
      if (e.indexOf(r) >= 0)
        return;
      if (!("toJSON" in r)) {
        e[o] = r;
        const i = de(r) ? [] : {};
        return Ee(r, (s, a) => {
          const u = n(s, o + 1);
          !me(u) && (i[a] = u);
        }), e[o] = void 0, i;
      }
    }
    return r;
  };
  return n(t, 0);
}, ia = Nt("AsyncFunction"), sa = (t) => t && (en(t) || mt(t)) && mt(t.then) && mt(t.catch), _ = {
  isArray: de,
  isArrayBuffer: So,
  isBuffer: ks,
  isFormData: Ls,
  isArrayBufferView: Cs,
  isString: Rs,
  isNumber: xo,
  isBoolean: Ms,
  isObject: en,
  isPlainObject: Ie,
  isUndefined: me,
  isDate: Ps,
  isFile: Ts,
  isBlob: As,
  isRegExp: Qs,
  isFunction: mt,
  isStream: Is,
  isURLSearchParams: Fs,
  isTypedArray: Js,
  isFileList: Bs,
  forEach: Ee,
  merge: kn,
  extend: Vs,
  trim: js,
  stripBOM: Us,
  inherits: zs,
  toFlatObject: qs,
  kindOf: Ze,
  kindOfTest: Nt,
  endsWith: $s,
  toArray: Hs,
  forEachEntry: Ws,
  matchAll: Ks,
  isHTMLForm: Gs,
  hasOwnProperty: kr,
  hasOwnProp: kr,
  // an alias to avoid ESLint no-prototype-builtins detection
  reduceDescriptors: Co,
  freezeMethods: Xs,
  toObjectSet: Zs,
  toCamelCase: Ys,
  noop: ta,
  toFiniteNumber: ea,
  findKey: No,
  global: Do,
  isContextDefined: ko,
  ALPHABET: Ro,
  generateString: na,
  isSpecCompliantForm: ra,
  toJSONObject: oa,
  isAsyncFn: ia,
  isThenable: sa
};
function K(t, e, n, r, o) {
  Error.call(this), Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : this.stack = new Error().stack, this.message = t, this.name = "AxiosError", e && (this.code = e), n && (this.config = n), r && (this.request = r), o && (this.response = o);
}
_.inherits(K, Error, {
  toJSON: function() {
    return {
      // Standard
      message: this.message,
      name: this.name,
      // Microsoft
      description: this.description,
      number: this.number,
      // Mozilla
      fileName: this.fileName,
      lineNumber: this.lineNumber,
      columnNumber: this.columnNumber,
      stack: this.stack,
      // Axios
      config: _.toJSONObject(this.config),
      code: this.code,
      status: this.response && this.response.status ? this.response.status : null
    };
  }
});
const Mo = K.prototype, Po = {};
[
  "ERR_BAD_OPTION_VALUE",
  "ERR_BAD_OPTION",
  "ECONNABORTED",
  "ETIMEDOUT",
  "ERR_NETWORK",
  "ERR_FR_TOO_MANY_REDIRECTS",
  "ERR_DEPRECATED",
  "ERR_BAD_RESPONSE",
  "ERR_BAD_REQUEST",
  "ERR_CANCELED",
  "ERR_NOT_SUPPORT",
  "ERR_INVALID_URL"
  // eslint-disable-next-line func-names
].forEach((t) => {
  Po[t] = { value: t };
});
Object.defineProperties(K, Po);
Object.defineProperty(Mo, "isAxiosError", { value: !0 });
K.from = (t, e, n, r, o, i) => {
  const s = Object.create(Mo);
  return _.toFlatObject(t, s, function(u) {
    return u !== Error.prototype;
  }, (a) => a !== "isAxiosError"), K.call(s, t.message, e, n, r, o), s.cause = t, s.name = t.name, i && Object.assign(s, i), s;
};
const aa = null;
function Cn(t) {
  return _.isPlainObject(t) || _.isArray(t);
}
function To(t) {
  return _.endsWith(t, "[]") ? t.slice(0, -2) : t;
}
function Rr(t, e, n) {
  return t ? t.concat(e).map(function(o, i) {
    return o = To(o), !n && i ? "[" + o + "]" : o;
  }).join(n ? "." : "") : e;
}
function ca(t) {
  return _.isArray(t) && !t.some(Cn);
}
const ua = _.toFlatObject(_, {}, null, function(e) {
  return /^is[A-Z]/.test(e);
});
function nn(t, e, n) {
  if (!_.isObject(t))
    throw new TypeError("target must be an object");
  e = e || new FormData(), n = _.toFlatObject(n, {
    metaTokens: !0,
    dots: !1,
    indexes: !1
  }, !1, function(A, $) {
    return !_.isUndefined($[A]);
  });
  const r = n.metaTokens, o = n.visitor || h, i = n.dots, s = n.indexes, u = (n.Blob || typeof Blob < "u" && Blob) && _.isSpecCompliantForm(e);
  if (!_.isFunction(o))
    throw new TypeError("visitor must be a function");
  function d(N) {
    if (N === null)
      return "";
    if (_.isDate(N))
      return N.toISOString();
    if (!u && _.isBlob(N))
      throw new K("Blob is not supported. Use a Buffer instead.");
    return _.isArrayBuffer(N) || _.isTypedArray(N) ? u && typeof Blob == "function" ? new Blob([N]) : Buffer.from(N) : N;
  }
  function h(N, A, $) {
    let q = N;
    if (N && !$ && typeof N == "object") {
      if (_.endsWith(A, "{}"))
        A = r ? A : A.slice(0, -2), N = JSON.stringify(N);
      else if (_.isArray(N) && ca(N) || (_.isFileList(N) || _.endsWith(A, "[]")) && (q = _.toArray(N)))
        return A = To(A), q.forEach(function(U, L) {
          !(_.isUndefined(U) || U === null) && e.append(
            // eslint-disable-next-line no-nested-ternary
            s === !0 ? Rr([A], L, i) : s === null ? A : A + "[]",
            d(U)
          );
        }), !1;
    }
    return Cn(N) ? !0 : (e.append(Rr($, A, i), d(N)), !1);
  }
  const c = [], w = Object.assign(ua, {
    defaultVisitor: h,
    convertValue: d,
    isVisitable: Cn
  });
  function C(N, A) {
    if (!_.isUndefined(N)) {
      if (c.indexOf(N) !== -1)
        throw Error("Circular reference detected in " + A.join("."));
      c.push(N), _.forEach(N, function(q, V) {
        (!(_.isUndefined(q) || q === null) && o.call(
          e,
          q,
          _.isString(V) ? V.trim() : V,
          A,
          w
        )) === !0 && C(q, A ? A.concat(V) : [V]);
      }), c.pop();
    }
  }
  if (!_.isObject(t))
    throw new TypeError("data must be an object");
  return C(t), e;
}
function Mr(t) {
  const e = {
    "!": "%21",
    "'": "%27",
    "(": "%28",
    ")": "%29",
    "~": "%7E",
    "%20": "+",
    "%00": "\0"
  };
  return encodeURIComponent(t).replace(/[!'()~]|%20|%00/g, function(r) {
    return e[r];
  });
}
function $n(t, e) {
  this._pairs = [], t && nn(t, this, e);
}
const Ao = $n.prototype;
Ao.append = function(e, n) {
  this._pairs.push([e, n]);
};
Ao.toString = function(e) {
  const n = e ? function(r) {
    return e.call(this, r, Mr);
  } : Mr;
  return this._pairs.map(function(o) {
    return n(o[0]) + "=" + n(o[1]);
  }, "").join("&");
};
function la(t) {
  return encodeURIComponent(t).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
}
function Bo(t, e, n) {
  if (!e)
    return t;
  const r = n && n.encode || la, o = n && n.serialize;
  let i;
  if (o ? i = o(e, n) : i = _.isURLSearchParams(e) ? e.toString() : new $n(e, n).toString(r), i) {
    const s = t.indexOf("#");
    s !== -1 && (t = t.slice(0, s)), t += (t.indexOf("?") === -1 ? "?" : "&") + i;
  }
  return t;
}
class da {
  constructor() {
    this.handlers = [];
  }
  /**
   * Add a new interceptor to the stack
   *
   * @param {Function} fulfilled The function to handle `then` for a `Promise`
   * @param {Function} rejected The function to handle `reject` for a `Promise`
   *
   * @return {Number} An ID used to remove interceptor later
   */
  use(e, n, r) {
    return this.handlers.push({
      fulfilled: e,
      rejected: n,
      synchronous: r ? r.synchronous : !1,
      runWhen: r ? r.runWhen : null
    }), this.handlers.length - 1;
  }
  /**
   * Remove an interceptor from the stack
   *
   * @param {Number} id The ID that was returned by `use`
   *
   * @returns {Boolean} `true` if the interceptor was removed, `false` otherwise
   */
  eject(e) {
    this.handlers[e] && (this.handlers[e] = null);
  }
  /**
   * Clear all interceptors from the stack
   *
   * @returns {void}
   */
  clear() {
    this.handlers && (this.handlers = []);
  }
  /**
   * Iterate over all the registered interceptors
   *
   * This method is particularly useful for skipping over any
   * interceptors that may have become `null` calling `eject`.
   *
   * @param {Function} fn The function to call for each interceptor
   *
   * @returns {void}
   */
  forEach(e) {
    _.forEach(this.handlers, function(r) {
      r !== null && e(r);
    });
  }
}
const Pr = da, Io = {
  silentJSONParsing: !0,
  forcedJSONParsing: !0,
  clarifyTimeoutError: !1
}, fa = typeof URLSearchParams < "u" ? URLSearchParams : $n, pa = typeof FormData < "u" ? FormData : null, ha = typeof Blob < "u" ? Blob : null, ga = (() => {
  let t;
  return typeof navigator < "u" && ((t = navigator.product) === "ReactNative" || t === "NativeScript" || t === "NS") ? !1 : typeof window < "u" && typeof document < "u";
})(), ma = (() => typeof WorkerGlobalScope < "u" && // eslint-disable-next-line no-undef
self instanceof WorkerGlobalScope && typeof self.importScripts == "function")(), xt = {
  isBrowser: !0,
  classes: {
    URLSearchParams: fa,
    FormData: pa,
    Blob: ha
  },
  isStandardBrowserEnv: ga,
  isStandardBrowserWebWorkerEnv: ma,
  protocols: ["http", "https", "file", "blob", "url", "data"]
};
function ya(t, e) {
  return nn(t, new xt.classes.URLSearchParams(), Object.assign({
    visitor: function(n, r, o, i) {
      return xt.isNode && _.isBuffer(n) ? (this.append(r, n.toString("base64")), !1) : i.defaultVisitor.apply(this, arguments);
    }
  }, e));
}
function va(t) {
  return _.matchAll(/\w+|\[(\w*)]/g, t).map((e) => e[0] === "[]" ? "" : e[1] || e[0]);
}
function wa(t) {
  const e = {}, n = Object.keys(t);
  let r;
  const o = n.length;
  let i;
  for (r = 0; r < o; r++)
    i = n[r], e[i] = t[i];
  return e;
}
function Lo(t) {
  function e(n, r, o, i) {
    let s = n[i++];
    const a = Number.isFinite(+s), u = i >= n.length;
    return s = !s && _.isArray(o) ? o.length : s, u ? (_.hasOwnProp(o, s) ? o[s] = [o[s], r] : o[s] = r, !a) : ((!o[s] || !_.isObject(o[s])) && (o[s] = []), e(n, r, o[s], i) && _.isArray(o[s]) && (o[s] = wa(o[s])), !a);
  }
  if (_.isFormData(t) && _.isFunction(t.entries)) {
    const n = {};
    return _.forEachEntry(t, (r, o) => {
      e(va(r), o, n, 0);
    }), n;
  }
  return null;
}
const _a = {
  "Content-Type": void 0
};
function ba(t, e, n) {
  if (_.isString(t))
    try {
      return (e || JSON.parse)(t), _.trim(t);
    } catch (r) {
      if (r.name !== "SyntaxError")
        throw r;
    }
  return (n || JSON.stringify)(t);
}
const rn = {
  transitional: Io,
  adapter: ["xhr", "http"],
  transformRequest: [function(e, n) {
    const r = n.getContentType() || "", o = r.indexOf("application/json") > -1, i = _.isObject(e);
    if (i && _.isHTMLForm(e) && (e = new FormData(e)), _.isFormData(e))
      return o && o ? JSON.stringify(Lo(e)) : e;
    if (_.isArrayBuffer(e) || _.isBuffer(e) || _.isStream(e) || _.isFile(e) || _.isBlob(e))
      return e;
    if (_.isArrayBufferView(e))
      return e.buffer;
    if (_.isURLSearchParams(e))
      return n.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1), e.toString();
    let a;
    if (i) {
      if (r.indexOf("application/x-www-form-urlencoded") > -1)
        return ya(e, this.formSerializer).toString();
      if ((a = _.isFileList(e)) || r.indexOf("multipart/form-data") > -1) {
        const u = this.env && this.env.FormData;
        return nn(
          a ? { "files[]": e } : e,
          u && new u(),
          this.formSerializer
        );
      }
    }
    return i || o ? (n.setContentType("application/json", !1), ba(e)) : e;
  }],
  transformResponse: [function(e) {
    const n = this.transitional || rn.transitional, r = n && n.forcedJSONParsing, o = this.responseType === "json";
    if (e && _.isString(e) && (r && !this.responseType || o)) {
      const s = !(n && n.silentJSONParsing) && o;
      try {
        return JSON.parse(e);
      } catch (a) {
        if (s)
          throw a.name === "SyntaxError" ? K.from(a, K.ERR_BAD_RESPONSE, this, null, this.response) : a;
      }
    }
    return e;
  }],
  /**
   * A timeout in milliseconds to abort a request. If set to 0 (default) a
   * timeout is not created.
   */
  timeout: 0,
  xsrfCookieName: "XSRF-TOKEN",
  xsrfHeaderName: "X-XSRF-TOKEN",
  maxContentLength: -1,
  maxBodyLength: -1,
  env: {
    FormData: xt.classes.FormData,
    Blob: xt.classes.Blob
  },
  validateStatus: function(e) {
    return e >= 200 && e < 300;
  },
  headers: {
    common: {
      Accept: "application/json, text/plain, */*"
    }
  }
};
_.forEach(["delete", "get", "head"], function(e) {
  rn.headers[e] = {};
});
_.forEach(["post", "put", "patch"], function(e) {
  rn.headers[e] = _.merge(_a);
});
const Hn = rn, Ea = _.toObjectSet([
  "age",
  "authorization",
  "content-length",
  "content-type",
  "etag",
  "expires",
  "from",
  "host",
  "if-modified-since",
  "if-unmodified-since",
  "last-modified",
  "location",
  "max-forwards",
  "proxy-authorization",
  "referer",
  "retry-after",
  "user-agent"
]), Oa = (t) => {
  const e = {};
  let n, r, o;
  return t && t.split(`
`).forEach(function(s) {
    o = s.indexOf(":"), n = s.substring(0, o).trim().toLowerCase(), r = s.substring(o + 1).trim(), !(!n || e[n] && Ea[n]) && (n === "set-cookie" ? e[n] ? e[n].push(r) : e[n] = [r] : e[n] = e[n] ? e[n] + ", " + r : r);
  }), e;
}, Tr = Symbol("internals");
function fe(t) {
  return t && String(t).trim().toLowerCase();
}
function Le(t) {
  return t === !1 || t == null ? t : _.isArray(t) ? t.map(Le) : String(t);
}
function Sa(t) {
  const e = /* @__PURE__ */ Object.create(null), n = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let r;
  for (; r = n.exec(t); )
    e[r[1]] = r[2];
  return e;
}
const xa = (t) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(t.trim());
function gn(t, e, n, r, o) {
  if (_.isFunction(r))
    return r.call(this, e, n);
  if (o && (e = n), !!_.isString(e)) {
    if (_.isString(r))
      return e.indexOf(r) !== -1;
    if (_.isRegExp(r))
      return r.test(e);
  }
}
function Na(t) {
  return t.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (e, n, r) => n.toUpperCase() + r);
}
function Da(t, e) {
  const n = _.toCamelCase(" " + e);
  ["get", "set", "has"].forEach((r) => {
    Object.defineProperty(t, r + n, {
      value: function(o, i, s) {
        return this[r].call(this, e, o, i, s);
      },
      configurable: !0
    });
  });
}
class on {
  constructor(e) {
    e && this.set(e);
  }
  set(e, n, r) {
    const o = this;
    function i(a, u, d) {
      const h = fe(u);
      if (!h)
        throw new Error("header name must be a non-empty string");
      const c = _.findKey(o, h);
      (!c || o[c] === void 0 || d === !0 || d === void 0 && o[c] !== !1) && (o[c || u] = Le(a));
    }
    const s = (a, u) => _.forEach(a, (d, h) => i(d, h, u));
    return _.isPlainObject(e) || e instanceof this.constructor ? s(e, n) : _.isString(e) && (e = e.trim()) && !xa(e) ? s(Oa(e), n) : e != null && i(n, e, r), this;
  }
  get(e, n) {
    if (e = fe(e), e) {
      const r = _.findKey(this, e);
      if (r) {
        const o = this[r];
        if (!n)
          return o;
        if (n === !0)
          return Sa(o);
        if (_.isFunction(n))
          return n.call(this, o, r);
        if (_.isRegExp(n))
          return n.exec(o);
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(e, n) {
    if (e = fe(e), e) {
      const r = _.findKey(this, e);
      return !!(r && this[r] !== void 0 && (!n || gn(this, this[r], r, n)));
    }
    return !1;
  }
  delete(e, n) {
    const r = this;
    let o = !1;
    function i(s) {
      if (s = fe(s), s) {
        const a = _.findKey(r, s);
        a && (!n || gn(r, r[a], a, n)) && (delete r[a], o = !0);
      }
    }
    return _.isArray(e) ? e.forEach(i) : i(e), o;
  }
  clear(e) {
    const n = Object.keys(this);
    let r = n.length, o = !1;
    for (; r--; ) {
      const i = n[r];
      (!e || gn(this, this[i], i, e, !0)) && (delete this[i], o = !0);
    }
    return o;
  }
  normalize(e) {
    const n = this, r = {};
    return _.forEach(this, (o, i) => {
      const s = _.findKey(r, i);
      if (s) {
        n[s] = Le(o), delete n[i];
        return;
      }
      const a = e ? Na(i) : String(i).trim();
      a !== i && delete n[i], n[a] = Le(o), r[a] = !0;
    }), this;
  }
  concat(...e) {
    return this.constructor.concat(this, ...e);
  }
  toJSON(e) {
    const n = /* @__PURE__ */ Object.create(null);
    return _.forEach(this, (r, o) => {
      r != null && r !== !1 && (n[o] = e && _.isArray(r) ? r.join(", ") : r);
    }), n;
  }
  [Symbol.iterator]() {
    return Object.entries(this.toJSON())[Symbol.iterator]();
  }
  toString() {
    return Object.entries(this.toJSON()).map(([e, n]) => e + ": " + n).join(`
`);
  }
  get [Symbol.toStringTag]() {
    return "AxiosHeaders";
  }
  static from(e) {
    return e instanceof this ? e : new this(e);
  }
  static concat(e, ...n) {
    const r = new this(e);
    return n.forEach((o) => r.set(o)), r;
  }
  static accessor(e) {
    const r = (this[Tr] = this[Tr] = {
      accessors: {}
    }).accessors, o = this.prototype;
    function i(s) {
      const a = fe(s);
      r[a] || (Da(o, s), r[a] = !0);
    }
    return _.isArray(e) ? e.forEach(i) : i(e), this;
  }
}
on.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization"]);
_.freezeMethods(on.prototype);
_.freezeMethods(on);
const kt = on;
function mn(t, e) {
  const n = this || Hn, r = e || n, o = kt.from(r.headers);
  let i = r.data;
  return _.forEach(t, function(a) {
    i = a.call(n, i, o.normalize(), e ? e.status : void 0);
  }), o.normalize(), i;
}
function Fo(t) {
  return !!(t && t.__CANCEL__);
}
function Oe(t, e, n) {
  K.call(this, t ?? "canceled", K.ERR_CANCELED, e, n), this.name = "CanceledError";
}
_.inherits(Oe, K, {
  __CANCEL__: !0
});
function ka(t, e, n) {
  const r = n.config.validateStatus;
  !n.status || !r || r(n.status) ? t(n) : e(new K(
    "Request failed with status code " + n.status,
    [K.ERR_BAD_REQUEST, K.ERR_BAD_RESPONSE][Math.floor(n.status / 100) - 4],
    n.config,
    n.request,
    n
  ));
}
const Ca = xt.isStandardBrowserEnv ? (
  // Standard browser envs support document.cookie
  function() {
    return {
      write: function(n, r, o, i, s, a) {
        const u = [];
        u.push(n + "=" + encodeURIComponent(r)), _.isNumber(o) && u.push("expires=" + new Date(o).toGMTString()), _.isString(i) && u.push("path=" + i), _.isString(s) && u.push("domain=" + s), a === !0 && u.push("secure"), document.cookie = u.join("; ");
      },
      read: function(n) {
        const r = document.cookie.match(new RegExp("(^|;\\s*)(" + n + ")=([^;]*)"));
        return r ? decodeURIComponent(r[3]) : null;
      },
      remove: function(n) {
        this.write(n, "", Date.now() - 864e5);
      }
    };
  }()
) : (
  // Non standard browser env (web workers, react-native) lack needed support.
  function() {
    return {
      write: function() {
      },
      read: function() {
        return null;
      },
      remove: function() {
      }
    };
  }()
);
function Ra(t) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(t);
}
function Ma(t, e) {
  return e ? t.replace(/\/+$/, "") + "/" + e.replace(/^\/+/, "") : t;
}
function jo(t, e) {
  return t && !Ra(e) ? Ma(t, e) : e;
}
const Pa = xt.isStandardBrowserEnv ? (
  // Standard browser envs have full support of the APIs needed to test
  // whether the request URL is of the same origin as current location.
  function() {
    const e = /(msie|trident)/i.test(navigator.userAgent), n = document.createElement("a");
    let r;
    function o(i) {
      let s = i;
      return e && (n.setAttribute("href", s), s = n.href), n.setAttribute("href", s), {
        href: n.href,
        protocol: n.protocol ? n.protocol.replace(/:$/, "") : "",
        host: n.host,
        search: n.search ? n.search.replace(/^\?/, "") : "",
        hash: n.hash ? n.hash.replace(/^#/, "") : "",
        hostname: n.hostname,
        port: n.port,
        pathname: n.pathname.charAt(0) === "/" ? n.pathname : "/" + n.pathname
      };
    }
    return r = o(window.location.href), function(s) {
      const a = _.isString(s) ? o(s) : s;
      return a.protocol === r.protocol && a.host === r.host;
    };
  }()
) : (
  // Non standard browser envs (web workers, react-native) lack needed support.
  function() {
    return function() {
      return !0;
    };
  }()
);
function Ta(t) {
  const e = /^([-+\w]{1,25})(:?\/\/|:)/.exec(t);
  return e && e[1] || "";
}
function Aa(t, e) {
  t = t || 10;
  const n = new Array(t), r = new Array(t);
  let o = 0, i = 0, s;
  return e = e !== void 0 ? e : 1e3, function(u) {
    const d = Date.now(), h = r[i];
    s || (s = d), n[o] = u, r[o] = d;
    let c = i, w = 0;
    for (; c !== o; )
      w += n[c++], c = c % t;
    if (o = (o + 1) % t, o === i && (i = (i + 1) % t), d - s < e)
      return;
    const C = h && d - h;
    return C ? Math.round(w * 1e3 / C) : void 0;
  };
}
function Ar(t, e) {
  let n = 0;
  const r = Aa(50, 250);
  return (o) => {
    const i = o.loaded, s = o.lengthComputable ? o.total : void 0, a = i - n, u = r(a), d = i <= s;
    n = i;
    const h = {
      loaded: i,
      total: s,
      progress: s ? i / s : void 0,
      bytes: a,
      rate: u || void 0,
      estimated: u && s && d ? (s - i) / u : void 0,
      event: o
    };
    h[e ? "download" : "upload"] = !0, t(h);
  };
}
const Ba = typeof XMLHttpRequest < "u", Ia = Ba && function(t) {
  return new Promise(function(n, r) {
    let o = t.data;
    const i = kt.from(t.headers).normalize(), s = t.responseType;
    let a;
    function u() {
      t.cancelToken && t.cancelToken.unsubscribe(a), t.signal && t.signal.removeEventListener("abort", a);
    }
    _.isFormData(o) && (xt.isStandardBrowserEnv || xt.isStandardBrowserWebWorkerEnv ? i.setContentType(!1) : i.setContentType("multipart/form-data;", !1));
    let d = new XMLHttpRequest();
    if (t.auth) {
      const C = t.auth.username || "", N = t.auth.password ? unescape(encodeURIComponent(t.auth.password)) : "";
      i.set("Authorization", "Basic " + btoa(C + ":" + N));
    }
    const h = jo(t.baseURL, t.url);
    d.open(t.method.toUpperCase(), Bo(h, t.params, t.paramsSerializer), !0), d.timeout = t.timeout;
    function c() {
      if (!d)
        return;
      const C = kt.from(
        "getAllResponseHeaders" in d && d.getAllResponseHeaders()
      ), A = {
        data: !s || s === "text" || s === "json" ? d.responseText : d.response,
        status: d.status,
        statusText: d.statusText,
        headers: C,
        config: t,
        request: d
      };
      ka(function(q) {
        n(q), u();
      }, function(q) {
        r(q), u();
      }, A), d = null;
    }
    if ("onloadend" in d ? d.onloadend = c : d.onreadystatechange = function() {
      !d || d.readyState !== 4 || d.status === 0 && !(d.responseURL && d.responseURL.indexOf("file:") === 0) || setTimeout(c);
    }, d.onabort = function() {
      d && (r(new K("Request aborted", K.ECONNABORTED, t, d)), d = null);
    }, d.onerror = function() {
      r(new K("Network Error", K.ERR_NETWORK, t, d)), d = null;
    }, d.ontimeout = function() {
      let N = t.timeout ? "timeout of " + t.timeout + "ms exceeded" : "timeout exceeded";
      const A = t.transitional || Io;
      t.timeoutErrorMessage && (N = t.timeoutErrorMessage), r(new K(
        N,
        A.clarifyTimeoutError ? K.ETIMEDOUT : K.ECONNABORTED,
        t,
        d
      )), d = null;
    }, xt.isStandardBrowserEnv) {
      const C = (t.withCredentials || Pa(h)) && t.xsrfCookieName && Ca.read(t.xsrfCookieName);
      C && i.set(t.xsrfHeaderName, C);
    }
    o === void 0 && i.setContentType(null), "setRequestHeader" in d && _.forEach(i.toJSON(), function(N, A) {
      d.setRequestHeader(A, N);
    }), _.isUndefined(t.withCredentials) || (d.withCredentials = !!t.withCredentials), s && s !== "json" && (d.responseType = t.responseType), typeof t.onDownloadProgress == "function" && d.addEventListener("progress", Ar(t.onDownloadProgress, !0)), typeof t.onUploadProgress == "function" && d.upload && d.upload.addEventListener("progress", Ar(t.onUploadProgress)), (t.cancelToken || t.signal) && (a = (C) => {
      d && (r(!C || C.type ? new Oe(null, t, d) : C), d.abort(), d = null);
    }, t.cancelToken && t.cancelToken.subscribe(a), t.signal && (t.signal.aborted ? a() : t.signal.addEventListener("abort", a)));
    const w = Ta(h);
    if (w && xt.protocols.indexOf(w) === -1) {
      r(new K("Unsupported protocol " + w + ":", K.ERR_BAD_REQUEST, t));
      return;
    }
    d.send(o || null);
  });
}, Fe = {
  http: aa,
  xhr: Ia
};
_.forEach(Fe, (t, e) => {
  if (t) {
    try {
      Object.defineProperty(t, "name", { value: e });
    } catch {
    }
    Object.defineProperty(t, "adapterName", { value: e });
  }
});
const La = {
  getAdapter: (t) => {
    t = _.isArray(t) ? t : [t];
    const { length: e } = t;
    let n, r;
    for (let o = 0; o < e && (n = t[o], !(r = _.isString(n) ? Fe[n.toLowerCase()] : n)); o++)
      ;
    if (!r)
      throw r === !1 ? new K(
        `Adapter ${n} is not supported by the environment`,
        "ERR_NOT_SUPPORT"
      ) : new Error(
        _.hasOwnProp(Fe, n) ? `Adapter '${n}' is not available in the build` : `Unknown adapter '${n}'`
      );
    if (!_.isFunction(r))
      throw new TypeError("adapter is not a function");
    return r;
  },
  adapters: Fe
};
function yn(t) {
  if (t.cancelToken && t.cancelToken.throwIfRequested(), t.signal && t.signal.aborted)
    throw new Oe(null, t);
}
function Br(t) {
  return yn(t), t.headers = kt.from(t.headers), t.data = mn.call(
    t,
    t.transformRequest
  ), ["post", "put", "patch"].indexOf(t.method) !== -1 && t.headers.setContentType("application/x-www-form-urlencoded", !1), La.getAdapter(t.adapter || Hn.adapter)(t).then(function(r) {
    return yn(t), r.data = mn.call(
      t,
      t.transformResponse,
      r
    ), r.headers = kt.from(r.headers), r;
  }, function(r) {
    return Fo(r) || (yn(t), r && r.response && (r.response.data = mn.call(
      t,
      t.transformResponse,
      r.response
    ), r.response.headers = kt.from(r.response.headers))), Promise.reject(r);
  });
}
const Ir = (t) => t instanceof kt ? t.toJSON() : t;
function ce(t, e) {
  e = e || {};
  const n = {};
  function r(d, h, c) {
    return _.isPlainObject(d) && _.isPlainObject(h) ? _.merge.call({ caseless: c }, d, h) : _.isPlainObject(h) ? _.merge({}, h) : _.isArray(h) ? h.slice() : h;
  }
  function o(d, h, c) {
    if (_.isUndefined(h)) {
      if (!_.isUndefined(d))
        return r(void 0, d, c);
    } else
      return r(d, h, c);
  }
  function i(d, h) {
    if (!_.isUndefined(h))
      return r(void 0, h);
  }
  function s(d, h) {
    if (_.isUndefined(h)) {
      if (!_.isUndefined(d))
        return r(void 0, d);
    } else
      return r(void 0, h);
  }
  function a(d, h, c) {
    if (c in e)
      return r(d, h);
    if (c in t)
      return r(void 0, d);
  }
  const u = {
    url: i,
    method: i,
    data: i,
    baseURL: s,
    transformRequest: s,
    transformResponse: s,
    paramsSerializer: s,
    timeout: s,
    timeoutMessage: s,
    withCredentials: s,
    adapter: s,
    responseType: s,
    xsrfCookieName: s,
    xsrfHeaderName: s,
    onUploadProgress: s,
    onDownloadProgress: s,
    decompress: s,
    maxContentLength: s,
    maxBodyLength: s,
    beforeRedirect: s,
    transport: s,
    httpAgent: s,
    httpsAgent: s,
    cancelToken: s,
    socketPath: s,
    responseEncoding: s,
    validateStatus: a,
    headers: (d, h) => o(Ir(d), Ir(h), !0)
  };
  return _.forEach(Object.keys(Object.assign({}, t, e)), function(h) {
    const c = u[h] || o, w = c(t[h], e[h], h);
    _.isUndefined(w) && c !== a || (n[h] = w);
  }), n;
}
const Vo = "1.4.0", Jn = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach((t, e) => {
  Jn[t] = function(r) {
    return typeof r === t || "a" + (e < 1 ? "n " : " ") + t;
  };
});
const Lr = {};
Jn.transitional = function(e, n, r) {
  function o(i, s) {
    return "[Axios v" + Vo + "] Transitional option '" + i + "'" + s + (r ? ". " + r : "");
  }
  return (i, s, a) => {
    if (e === !1)
      throw new K(
        o(s, " has been removed" + (n ? " in " + n : "")),
        K.ERR_DEPRECATED
      );
    return n && !Lr[s] && (Lr[s] = !0, console.warn(
      o(
        s,
        " has been deprecated since v" + n + " and will be removed in the near future"
      )
    )), e ? e(i, s, a) : !0;
  };
};
function Fa(t, e, n) {
  if (typeof t != "object")
    throw new K("options must be an object", K.ERR_BAD_OPTION_VALUE);
  const r = Object.keys(t);
  let o = r.length;
  for (; o-- > 0; ) {
    const i = r[o], s = e[i];
    if (s) {
      const a = t[i], u = a === void 0 || s(a, i, t);
      if (u !== !0)
        throw new K("option " + i + " must be " + u, K.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (n !== !0)
      throw new K("Unknown option " + i, K.ERR_BAD_OPTION);
  }
}
const Rn = {
  assertOptions: Fa,
  validators: Jn
}, Rt = Rn.validators;
class $e {
  constructor(e) {
    this.defaults = e, this.interceptors = {
      request: new Pr(),
      response: new Pr()
    };
  }
  /**
   * Dispatch a request
   *
   * @param {String|Object} configOrUrl The config specific for this request (merged with this.defaults)
   * @param {?Object} config
   *
   * @returns {Promise} The Promise to be fulfilled
   */
  request(e, n) {
    typeof e == "string" ? (n = n || {}, n.url = e) : n = e || {}, n = ce(this.defaults, n);
    const { transitional: r, paramsSerializer: o, headers: i } = n;
    r !== void 0 && Rn.assertOptions(r, {
      silentJSONParsing: Rt.transitional(Rt.boolean),
      forcedJSONParsing: Rt.transitional(Rt.boolean),
      clarifyTimeoutError: Rt.transitional(Rt.boolean)
    }, !1), o != null && (_.isFunction(o) ? n.paramsSerializer = {
      serialize: o
    } : Rn.assertOptions(o, {
      encode: Rt.function,
      serialize: Rt.function
    }, !0)), n.method = (n.method || this.defaults.method || "get").toLowerCase();
    let s;
    s = i && _.merge(
      i.common,
      i[n.method]
    ), s && _.forEach(
      ["delete", "get", "head", "post", "put", "patch", "common"],
      (N) => {
        delete i[N];
      }
    ), n.headers = kt.concat(s, i);
    const a = [];
    let u = !0;
    this.interceptors.request.forEach(function(A) {
      typeof A.runWhen == "function" && A.runWhen(n) === !1 || (u = u && A.synchronous, a.unshift(A.fulfilled, A.rejected));
    });
    const d = [];
    this.interceptors.response.forEach(function(A) {
      d.push(A.fulfilled, A.rejected);
    });
    let h, c = 0, w;
    if (!u) {
      const N = [Br.bind(this), void 0];
      for (N.unshift.apply(N, a), N.push.apply(N, d), w = N.length, h = Promise.resolve(n); c < w; )
        h = h.then(N[c++], N[c++]);
      return h;
    }
    w = a.length;
    let C = n;
    for (c = 0; c < w; ) {
      const N = a[c++], A = a[c++];
      try {
        C = N(C);
      } catch ($) {
        A.call(this, $);
        break;
      }
    }
    try {
      h = Br.call(this, C);
    } catch (N) {
      return Promise.reject(N);
    }
    for (c = 0, w = d.length; c < w; )
      h = h.then(d[c++], d[c++]);
    return h;
  }
  getUri(e) {
    e = ce(this.defaults, e);
    const n = jo(e.baseURL, e.url);
    return Bo(n, e.params, e.paramsSerializer);
  }
}
_.forEach(["delete", "get", "head", "options"], function(e) {
  $e.prototype[e] = function(n, r) {
    return this.request(ce(r || {}, {
      method: e,
      url: n,
      data: (r || {}).data
    }));
  };
});
_.forEach(["post", "put", "patch"], function(e) {
  function n(r) {
    return function(i, s, a) {
      return this.request(ce(a || {}, {
        method: e,
        headers: r ? {
          "Content-Type": "multipart/form-data"
        } : {},
        url: i,
        data: s
      }));
    };
  }
  $e.prototype[e] = n(), $e.prototype[e + "Form"] = n(!0);
});
const je = $e;
class Wn {
  constructor(e) {
    if (typeof e != "function")
      throw new TypeError("executor must be a function.");
    let n;
    this.promise = new Promise(function(i) {
      n = i;
    });
    const r = this;
    this.promise.then((o) => {
      if (!r._listeners)
        return;
      let i = r._listeners.length;
      for (; i-- > 0; )
        r._listeners[i](o);
      r._listeners = null;
    }), this.promise.then = (o) => {
      let i;
      const s = new Promise((a) => {
        r.subscribe(a), i = a;
      }).then(o);
      return s.cancel = function() {
        r.unsubscribe(i);
      }, s;
    }, e(function(i, s, a) {
      r.reason || (r.reason = new Oe(i, s, a), n(r.reason));
    });
  }
  /**
   * Throws a `CanceledError` if cancellation has been requested.
   */
  throwIfRequested() {
    if (this.reason)
      throw this.reason;
  }
  /**
   * Subscribe to the cancel signal
   */
  subscribe(e) {
    if (this.reason) {
      e(this.reason);
      return;
    }
    this._listeners ? this._listeners.push(e) : this._listeners = [e];
  }
  /**
   * Unsubscribe from the cancel signal
   */
  unsubscribe(e) {
    if (!this._listeners)
      return;
    const n = this._listeners.indexOf(e);
    n !== -1 && this._listeners.splice(n, 1);
  }
  /**
   * Returns an object that contains a new `CancelToken` and a function that, when called,
   * cancels the `CancelToken`.
   */
  static source() {
    let e;
    return {
      token: new Wn(function(o) {
        e = o;
      }),
      cancel: e
    };
  }
}
const ja = Wn;
function Va(t) {
  return function(n) {
    return t.apply(null, n);
  };
}
function Ua(t) {
  return _.isObject(t) && t.isAxiosError === !0;
}
const Mn = {
  Continue: 100,
  SwitchingProtocols: 101,
  Processing: 102,
  EarlyHints: 103,
  Ok: 200,
  Created: 201,
  Accepted: 202,
  NonAuthoritativeInformation: 203,
  NoContent: 204,
  ResetContent: 205,
  PartialContent: 206,
  MultiStatus: 207,
  AlreadyReported: 208,
  ImUsed: 226,
  MultipleChoices: 300,
  MovedPermanently: 301,
  Found: 302,
  SeeOther: 303,
  NotModified: 304,
  UseProxy: 305,
  Unused: 306,
  TemporaryRedirect: 307,
  PermanentRedirect: 308,
  BadRequest: 400,
  Unauthorized: 401,
  PaymentRequired: 402,
  Forbidden: 403,
  NotFound: 404,
  MethodNotAllowed: 405,
  NotAcceptable: 406,
  ProxyAuthenticationRequired: 407,
  RequestTimeout: 408,
  Conflict: 409,
  Gone: 410,
  LengthRequired: 411,
  PreconditionFailed: 412,
  PayloadTooLarge: 413,
  UriTooLong: 414,
  UnsupportedMediaType: 415,
  RangeNotSatisfiable: 416,
  ExpectationFailed: 417,
  ImATeapot: 418,
  MisdirectedRequest: 421,
  UnprocessableEntity: 422,
  Locked: 423,
  FailedDependency: 424,
  TooEarly: 425,
  UpgradeRequired: 426,
  PreconditionRequired: 428,
  TooManyRequests: 429,
  RequestHeaderFieldsTooLarge: 431,
  UnavailableForLegalReasons: 451,
  InternalServerError: 500,
  NotImplemented: 501,
  BadGateway: 502,
  ServiceUnavailable: 503,
  GatewayTimeout: 504,
  HttpVersionNotSupported: 505,
  VariantAlsoNegotiates: 506,
  InsufficientStorage: 507,
  LoopDetected: 508,
  NotExtended: 510,
  NetworkAuthenticationRequired: 511
};
Object.entries(Mn).forEach(([t, e]) => {
  Mn[e] = t;
});
const za = Mn;
function Uo(t) {
  const e = new je(t), n = Oo(je.prototype.request, e);
  return _.extend(n, je.prototype, e, { allOwnKeys: !0 }), _.extend(n, e, null, { allOwnKeys: !0 }), n.create = function(o) {
    return Uo(ce(t, o));
  }, n;
}
const tt = Uo(Hn);
tt.Axios = je;
tt.CanceledError = Oe;
tt.CancelToken = ja;
tt.isCancel = Fo;
tt.VERSION = Vo;
tt.toFormData = nn;
tt.AxiosError = K;
tt.Cancel = tt.CanceledError;
tt.all = function(e) {
  return Promise.all(e);
};
tt.spread = Va;
tt.isAxiosError = Ua;
tt.mergeConfig = ce;
tt.AxiosHeaders = kt;
tt.formToJSON = (t) => Lo(_.isHTMLForm(t) ? new FormData(t) : t);
tt.HttpStatusCode = za;
tt.default = tt;
const qa = tt, $a = window.location.hostname === "localhost", Ha = qa.create({
  baseURL: "https://localhost:8080/",
  withCredentials: !1
});
let Fr = "https://dev-url.com/", jr = "";
const Mt = {
  apiClient: Ha,
  setBaseURL: function(t, e) {
    $a ? this.apiClient.defaults.baseURL = t || Fr : this.apiClient.defaults.baseURL = e || jr, Fr = t, jr = e;
  },
  getBaseURL: function() {
    return this.apiClient.defaults.baseURL;
  }
};
function Ja() {
  const t = ut("nopwd_request", "api/requestloginkey"), e = ut("nopwd_verify", "api/verifyaccess"), n = ut("nopwd_confirm", "api/confirmaccess"), r = ut("nopwd_logout", "api/logout"), o = ut("nopwd_dev", "http://localhost:3000/"), i = ut("nopwd_prod", "https://www.nopwd.com"), s = ut("nopwd_app", "/app"), a = ut("nopwd_login", "/auth/login"), u = xs();
  function d(m, M) {
    (m != null || m != null || m != "") && (o.value = m), (M != null || M != null || M != "") && (i.value = M);
  }
  function h(m, M) {
    (m != null || m != null || m != "") && (s.value = m), (M != null || M != null || M != "") && (a.value = M);
  }
  function c(m, M, T, I) {
    (m != null || m != null || m != "") && (t.value = m), (M != null || M != null || M != "") && (e.value = M), (T != null || T != null || T != "") && (n.value = T), (I != null || I != null || I != "") && (r.value = I);
  }
  const w = rt(!1), C = rt(!1), N = rt(0), A = ut("nopwd_siteid", zt.EMPTY), $ = ut("nopwd_sitecallid", zt.EMPTY), q = ut("nopwd_loginid", zt.EMPTY), V = ut("nopwd_auth", 0), U = ut("nopwd_session", ""), { t: L } = wo();
  function O() {
    return {
      headers: {
        Accept: "application/json",
        "X-LoginId": q.value,
        "X-SiteCallId": $.value,
        "Content-Type": "application/json"
      }
    };
  }
  const P = rt(!1), b = rt(""), g = rt(L("auth.prepare")), p = rt({ id: q.value, code: null, value: null, subid: null, userid: null, count: null, page: null, fromdate: null });
  async function v() {
    return q.value = zt.EMPTY, q.value === zt.EMPTY.toString() ? (g.value = L("auth.loading"), q.value = zt.create().toString(), p.value.id = q.value, Mt.setBaseURL(o.value, i.value), Mt.apiClient.get(t.value, O()).then((m) => {
      const M = m.data;
      return M.success ? (g.value = "", b.value = "https://www.nopwd.com?loginid=" + q.value, w.value = M.success, N.value = M.code, V.value = 1, setTimeout(f, 1e3), P ? g.value = L("auth.codedark") : g.value = L("auth.codelight"), 1) : (g.value = L("auth.codeerror"), -1);
    }).catch((m) => (console.log(m), C.value = !0, g.value = L("auth.codeerror"), -1))) : (P ? g.value = L("auth.codedark") : g.value = L("auth.codelight"), f(), 0);
  }
  async function f() {
    return Mt.setBaseURL(o.value, i.value), await Mt.apiClient.get(e.value, O()).then((m) => {
      const M = m.data;
      if (M.success)
        return w.value = M.success, N.value = M.code, M.code > 0 ? (V.value = 2, $.value = M.data.sitecallid, U.value = JSON.stringify(M.data), setTimeout(l, 2e4), (s.value !== void 0 || s.value !== null || s.value !== "") && u.push(s.value), 1) : M.code < 0 ? (V.value = 0, l(), -1) : (setTimeout(f, 1e3), P ? g.value = L("auth.codedark") : g.value = L("auth.codelight"), 0);
    }).catch((m) => (console.log(m), C.value = !0, g.value = L("auth.codeerror"), -1));
  }
  async function l() {
    if (V.value < 2) {
      x();
      return;
    }
    Mt.setBaseURL(o.value, i.value), await Mt.apiClient.get(n.value, O()).then((m) => {
      const M = m.data;
      M.success && (w.value = M.success, N.value = M.code, M.code > 0 ? setTimeout(l, 2e4) : (V.value = 0, U.value = "", (a.value !== void 0 || a.value !== null || a.value !== "") && u.push(a.value)));
    }).catch((m) => {
      console.log(m), C.value = !0, g.value = L("auth.codeerror");
    });
  }
  function k() {
    return V.value > 1;
  }
  async function x() {
    V.value = 0, Mt.setBaseURL(o.value, i.value), await Mt.apiClient.get(r.value, O()).then((m) => {
      const M = m.data;
      w.value = M.success, N.value = M.code, w.value && (V.value = 0, q.value = zt.EMPTY.toString()), (a.value !== void 0 || a.value !== null || a.value !== "") && u.push(a.value);
    });
  }
  return {
    auth: V,
    success: w,
    code: N,
    IDLogin: q,
    IDSiteCall: $,
    IDSite: A,
    QRCode: b,
    Message: g,
    is_error: C,
    loginQRCode: v,
    checkAccess: l,
    checkQRLogin: f,
    logout: x,
    config: O,
    IsLoggedIn: k,
    setUrls: c,
    setRoutes: h,
    setBase: d
  };
}
var Wa = Object.defineProperty, Ka = (t, e, n) => e in t ? Wa(t, e, { enumerable: !0, configurable: !0, writable: !0, value: n }) : t[e] = n, at = (t, e, n) => (Ka(t, typeof e != "symbol" ? e + "" : e, n), n);
function Ga(t, e) {
  const n = /* @__PURE__ */ Object.create(null), r = t.split(",");
  for (let o = 0; o < r.length; o++)
    n[r[o]] = !0;
  return e ? (o) => !!n[o.toLowerCase()] : (o) => !!n[o];
}
const Pn = process.env.NODE_ENV !== "production" ? Object.freeze({}) : {}, Ya = process.env.NODE_ENV !== "production" ? Object.freeze([]) : [], ht = () => {
}, Qa = /^on[^a-z]/, Xa = (t) => Qa.test(t), dt = Object.assign, zo = (t, e) => {
  const n = t.indexOf(e);
  n > -1 && t.splice(n, 1);
}, Za = Object.prototype.hasOwnProperty, sn = (t, e) => Za.call(t, e), W = Array.isArray, Ht = (t) => an(t) === "[object Map]", qo = (t) => an(t) === "[object Set]", G = (t) => typeof t == "function", yt = (t) => typeof t == "string", Kn = (t) => typeof t == "symbol", X = (t) => t !== null && typeof t == "object", Gn = (t) => X(t) && G(t.then) && G(t.catch), $o = Object.prototype.toString, an = (t) => $o.call(t), Ho = (t) => an(t).slice(8, -1), Jo = (t) => an(t) === "[object Object]", Yn = (t) => yt(t) && t !== "NaN" && t[0] !== "-" && "" + parseInt(t, 10) === t, Wo = (t) => {
  const e = /* @__PURE__ */ Object.create(null);
  return (n) => e[n] || (e[n] = t(n));
}, Ko = Wo(
  (t) => t.charAt(0).toUpperCase() + t.slice(1)
), tc = Wo(
  (t) => t ? `on${Ko(t)}` : ""
), He = (t, e) => !Object.is(t, e), ec = (t) => {
  const e = yt(t) ? Number(t) : NaN;
  return isNaN(e) ? t : e;
};
let Vr;
const Tn = () => Vr || (Vr = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function Qn(t) {
  if (W(t)) {
    const e = {};
    for (let n = 0; n < t.length; n++) {
      const r = t[n], o = yt(r) ? ic(r) : Qn(r);
      if (o)
        for (const i in o)
          e[i] = o[i];
    }
    return e;
  } else if (yt(t) || X(t))
    return t;
}
const nc = /;(?![^(]*\))/g, rc = /:([^]+)/, oc = /\/\*[^]*?\*\//g;
function ic(t) {
  const e = {};
  return t.replace(oc, "").split(nc).forEach((n) => {
    if (n) {
      const r = n.split(rc);
      r.length > 1 && (e[r[0].trim()] = r[1].trim());
    }
  }), e;
}
function oe(t) {
  let e = "";
  if (yt(t))
    e = t;
  else if (W(t))
    for (let n = 0; n < t.length; n++) {
      const r = oe(t[n]);
      r && (e += r + " ");
    }
  else if (X(t))
    for (const n in t)
      t[n] && (e += n + " ");
  return e.trim();
}
const sc = (t) => yt(t) ? t : t == null ? "" : W(t) || X(t) && (t.toString === $o || !G(t.toString)) ? JSON.stringify(t, Go, 2) : String(t), Go = (t, e) => e && e.__v_isRef ? Go(t, e.value) : Ht(e) ? {
  [`Map(${e.size})`]: [...e.entries()].reduce((n, [r, o]) => (n[`${r} =>`] = o, n), {})
} : qo(e) ? {
  [`Set(${e.size})`]: [...e.values()]
} : X(e) && !W(e) && !Jo(e) ? String(e) : e;
function Ur(t, ...e) {
  console.warn(`[Vue warn] ${t}`, ...e);
}
let Yo;
function ac(t, e = Yo) {
  e && e.active && e.effects.push(t);
}
function cc() {
  return Yo;
}
const ye = (t) => {
  const e = new Set(t);
  return e.w = 0, e.n = 0, e;
}, Qo = (t) => (t.w & jt) > 0, Xo = (t) => (t.n & jt) > 0, uc = ({ deps: t }) => {
  if (t.length)
    for (let e = 0; e < t.length; e++)
      t[e].w |= jt;
}, lc = (t) => {
  const { deps: e } = t;
  if (e.length) {
    let n = 0;
    for (let r = 0; r < e.length; r++) {
      const o = e[r];
      Qo(o) && !Xo(o) ? o.delete(t) : e[n++] = o, o.w &= ~jt, o.n &= ~jt;
    }
    e.length = n;
  }
}, An = /* @__PURE__ */ new WeakMap();
let pe = 0, jt = 1;
const Bn = 30;
let st;
const Jt = Symbol(process.env.NODE_ENV !== "production" ? "iterate" : ""), In = Symbol(process.env.NODE_ENV !== "production" ? "Map key iterate" : "");
class Zo {
  constructor(e, n = null, r) {
    this.fn = e, this.scheduler = n, this.active = !0, this.deps = [], this.parent = void 0, ac(this, r);
  }
  run() {
    if (!this.active)
      return this.fn();
    let e = st, n = Lt;
    for (; e; ) {
      if (e === this)
        return;
      e = e.parent;
    }
    try {
      return this.parent = st, st = this, Lt = !0, jt = 1 << ++pe, pe <= Bn ? uc(this) : zr(this), this.fn();
    } finally {
      pe <= Bn && lc(this), jt = 1 << --pe, st = this.parent, Lt = n, this.parent = void 0, this.deferStop && this.stop();
    }
  }
  stop() {
    st === this ? this.deferStop = !0 : this.active && (zr(this), this.onStop && this.onStop(), this.active = !1);
  }
}
function zr(t) {
  const { deps: e } = t;
  if (e.length) {
    for (let n = 0; n < e.length; n++)
      e[n].delete(t);
    e.length = 0;
  }
}
let Lt = !0;
const ti = [];
function cn() {
  ti.push(Lt), Lt = !1;
}
function un() {
  const t = ti.pop();
  Lt = t === void 0 ? !0 : t;
}
function vt(t, e, n) {
  if (Lt && st) {
    let r = An.get(t);
    r || An.set(t, r = /* @__PURE__ */ new Map());
    let o = r.get(n);
    o || r.set(n, o = ye());
    const i = process.env.NODE_ENV !== "production" ? { effect: st, target: t, type: e, key: n } : void 0;
    Ln(o, i);
  }
}
function Ln(t, e) {
  let n = !1;
  pe <= Bn ? Xo(t) || (t.n |= jt, n = !Qo(t)) : n = !t.has(st), n && (t.add(st), st.deps.push(t), process.env.NODE_ENV !== "production" && st.onTrack && st.onTrack(
    dt(
      {
        effect: st
      },
      e
    )
  ));
}
function Vt(t, e, n, r, o, i) {
  const s = An.get(t);
  if (!s)
    return;
  let a = [];
  if (e === "clear")
    a = [...s.values()];
  else if (n === "length" && W(t)) {
    const d = Number(r);
    s.forEach((h, c) => {
      (c === "length" || c >= d) && a.push(h);
    });
  } else
    switch (n !== void 0 && a.push(s.get(n)), e) {
      case "add":
        W(t) ? Yn(n) && a.push(s.get("length")) : (a.push(s.get(Jt)), Ht(t) && a.push(s.get(In)));
        break;
      case "delete":
        W(t) || (a.push(s.get(Jt)), Ht(t) && a.push(s.get(In)));
        break;
      case "set":
        Ht(t) && a.push(s.get(Jt));
        break;
    }
  const u = process.env.NODE_ENV !== "production" ? { target: t, type: e, key: n, newValue: r, oldValue: o, oldTarget: i } : void 0;
  if (a.length === 1)
    a[0] && (process.env.NODE_ENV !== "production" ? ne(a[0], u) : ne(a[0]));
  else {
    const d = [];
    for (const h of a)
      h && d.push(...h);
    process.env.NODE_ENV !== "production" ? ne(ye(d), u) : ne(ye(d));
  }
}
function ne(t, e) {
  const n = W(t) ? t : [...t];
  for (const r of n)
    r.computed && qr(r, e);
  for (const r of n)
    r.computed || qr(r, e);
}
function qr(t, e) {
  (t !== st || t.allowRecurse) && (process.env.NODE_ENV !== "production" && t.onTrigger && t.onTrigger(dt({ effect: t }, e)), t.scheduler ? t.scheduler() : t.run());
}
const dc = /* @__PURE__ */ Ga("__proto__,__v_isRef,__isVue"), ei = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((t) => t !== "arguments" && t !== "caller").map((t) => Symbol[t]).filter(Kn)
), fc = /* @__PURE__ */ ni(), pc = /* @__PURE__ */ ni(!0), $r = /* @__PURE__ */ hc();
function hc() {
  const t = {};
  return ["includes", "indexOf", "lastIndexOf"].forEach((e) => {
    t[e] = function(...n) {
      const r = H(this);
      for (let i = 0, s = this.length; i < s; i++)
        vt(r, "get", i + "");
      const o = r[e](...n);
      return o === -1 || o === !1 ? r[e](...n.map(H)) : o;
    };
  }), ["push", "pop", "shift", "unshift", "splice"].forEach((e) => {
    t[e] = function(...n) {
      cn();
      const r = H(this)[e].apply(this, n);
      return un(), r;
    };
  }), t;
}
function gc(t) {
  const e = H(this);
  return vt(e, "has", t), e.hasOwnProperty(t);
}
function ni(t = !1, e = !1) {
  return function(n, r, o) {
    if (r === "__v_isReactive")
      return !t;
    if (r === "__v_isReadonly")
      return t;
    if (r === "__v_isShallow")
      return e;
    if (r === "__v_raw" && o === (t ? e ? Mc : si : e ? Rc : ii).get(n))
      return n;
    const i = W(n);
    if (!t) {
      if (i && sn($r, r))
        return Reflect.get($r, r, o);
      if (r === "hasOwnProperty")
        return gc;
    }
    const s = Reflect.get(n, r, o);
    return (Kn(r) ? ei.has(r) : dc(r)) || (t || vt(n, "get", r), e) ? s : ct(s) ? i && Yn(r) ? s : s.value : X(s) ? t ? ai(s) : Zn(s) : s;
  };
}
const mc = /* @__PURE__ */ yc();
function yc(t = !1) {
  return function(e, n, r, o) {
    let i = e[n];
    if (Yt(i) && ct(i) && !ct(r))
      return !1;
    if (!t && (!Fn(r) && !Yt(r) && (i = H(i), r = H(r)), !W(e) && ct(i) && !ct(r)))
      return i.value = r, !0;
    const s = W(e) && Yn(n) ? Number(n) < e.length : sn(e, n), a = Reflect.set(e, n, r, o);
    return e === H(o) && (s ? He(r, i) && Vt(e, "set", n, r, i) : Vt(e, "add", n, r)), a;
  };
}
function vc(t, e) {
  const n = sn(t, e), r = t[e], o = Reflect.deleteProperty(t, e);
  return o && n && Vt(t, "delete", e, void 0, r), o;
}
function wc(t, e) {
  const n = Reflect.has(t, e);
  return (!Kn(e) || !ei.has(e)) && vt(t, "has", e), n;
}
function _c(t) {
  return vt(t, "iterate", W(t) ? "length" : Jt), Reflect.ownKeys(t);
}
const bc = {
  get: fc,
  set: mc,
  deleteProperty: vc,
  has: wc,
  ownKeys: _c
}, Ec = {
  get: pc,
  set(t, e) {
    return process.env.NODE_ENV !== "production" && Ur(
      `Set operation on key "${String(e)}" failed: target is readonly.`,
      t
    ), !0;
  },
  deleteProperty(t, e) {
    return process.env.NODE_ENV !== "production" && Ur(
      `Delete operation on key "${String(e)}" failed: target is readonly.`,
      t
    ), !0;
  }
}, Xn = (t) => t, ln = (t) => Reflect.getPrototypeOf(t);
function De(t, e, n = !1, r = !1) {
  t = t.__v_raw;
  const o = H(t), i = H(e);
  n || (e !== i && vt(o, "get", e), vt(o, "get", i));
  const { has: s } = ln(o), a = r ? Xn : n ? er : tr;
  if (s.call(o, e))
    return a(t.get(e));
  if (s.call(o, i))
    return a(t.get(i));
  t !== o && t.get(e);
}
function ke(t, e = !1) {
  const n = this.__v_raw, r = H(n), o = H(t);
  return e || (t !== o && vt(r, "has", t), vt(r, "has", o)), t === o ? n.has(t) : n.has(t) || n.has(o);
}
function Ce(t, e = !1) {
  return t = t.__v_raw, !e && vt(H(t), "iterate", Jt), Reflect.get(t, "size", t);
}
function Hr(t) {
  t = H(t);
  const e = H(this);
  return ln(e).has.call(e, t) || (e.add(t), Vt(e, "add", t, t)), this;
}
function Jr(t, e) {
  e = H(e);
  const n = H(this), { has: r, get: o } = ln(n);
  let i = r.call(n, t);
  i ? process.env.NODE_ENV !== "production" && oi(n, r, t) : (t = H(t), i = r.call(n, t));
  const s = o.call(n, t);
  return n.set(t, e), i ? He(e, s) && Vt(n, "set", t, e, s) : Vt(n, "add", t, e), this;
}
function Wr(t) {
  const e = H(this), { has: n, get: r } = ln(e);
  let o = n.call(e, t);
  o ? process.env.NODE_ENV !== "production" && oi(e, n, t) : (t = H(t), o = n.call(e, t));
  const i = r ? r.call(e, t) : void 0, s = e.delete(t);
  return o && Vt(e, "delete", t, void 0, i), s;
}
function Kr() {
  const t = H(this), e = t.size !== 0, n = process.env.NODE_ENV !== "production" ? Ht(t) ? new Map(t) : new Set(t) : void 0, r = t.clear();
  return e && Vt(t, "clear", void 0, void 0, n), r;
}
function Re(t, e) {
  return function(n, r) {
    const o = this, i = o.__v_raw, s = H(i), a = e ? Xn : t ? er : tr;
    return !t && vt(s, "iterate", Jt), i.forEach((u, d) => n.call(r, a(u), a(d), o));
  };
}
function Me(t, e, n) {
  return function(...r) {
    const o = this.__v_raw, i = H(o), s = Ht(i), a = t === "entries" || t === Symbol.iterator && s, u = t === "keys" && s, d = o[t](...r), h = n ? Xn : e ? er : tr;
    return !e && vt(
      i,
      "iterate",
      u ? In : Jt
    ), {
      // iterator protocol
      next() {
        const { value: c, done: w } = d.next();
        return w ? { value: c, done: w } : {
          value: a ? [h(c[0]), h(c[1])] : h(c),
          done: w
        };
      },
      // iterable protocol
      [Symbol.iterator]() {
        return this;
      }
    };
  };
}
function Pt(t) {
  return function(...e) {
    if (process.env.NODE_ENV !== "production") {
      const n = e[0] ? `on key "${e[0]}" ` : "";
      console.warn(
        `${Ko(t)} operation ${n}failed: target is readonly.`,
        H(this)
      );
    }
    return t === "delete" ? !1 : this;
  };
}
function Oc() {
  const t = {
    get(o) {
      return De(this, o);
    },
    get size() {
      return Ce(this);
    },
    has: ke,
    add: Hr,
    set: Jr,
    delete: Wr,
    clear: Kr,
    forEach: Re(!1, !1)
  }, e = {
    get(o) {
      return De(this, o, !1, !0);
    },
    get size() {
      return Ce(this);
    },
    has: ke,
    add: Hr,
    set: Jr,
    delete: Wr,
    clear: Kr,
    forEach: Re(!1, !0)
  }, n = {
    get(o) {
      return De(this, o, !0);
    },
    get size() {
      return Ce(this, !0);
    },
    has(o) {
      return ke.call(this, o, !0);
    },
    add: Pt("add"),
    set: Pt("set"),
    delete: Pt("delete"),
    clear: Pt("clear"),
    forEach: Re(!0, !1)
  }, r = {
    get(o) {
      return De(this, o, !0, !0);
    },
    get size() {
      return Ce(this, !0);
    },
    has(o) {
      return ke.call(this, o, !0);
    },
    add: Pt("add"),
    set: Pt("set"),
    delete: Pt("delete"),
    clear: Pt("clear"),
    forEach: Re(!0, !0)
  };
  return ["keys", "values", "entries", Symbol.iterator].forEach((o) => {
    t[o] = Me(
      o,
      !1,
      !1
    ), n[o] = Me(
      o,
      !0,
      !1
    ), e[o] = Me(
      o,
      !1,
      !0
    ), r[o] = Me(
      o,
      !0,
      !0
    );
  }), [
    t,
    n,
    e,
    r
  ];
}
const [
  Sc,
  xc,
  Nc,
  Dc
] = /* @__PURE__ */ Oc();
function ri(t, e) {
  const n = e ? t ? Dc : Nc : t ? xc : Sc;
  return (r, o, i) => o === "__v_isReactive" ? !t : o === "__v_isReadonly" ? t : o === "__v_raw" ? r : Reflect.get(
    sn(n, o) && o in r ? n : r,
    o,
    i
  );
}
const kc = {
  get: /* @__PURE__ */ ri(!1, !1)
}, Cc = {
  get: /* @__PURE__ */ ri(!0, !1)
};
function oi(t, e, n) {
  const r = H(n);
  if (r !== n && e.call(t, r)) {
    const o = Ho(t);
    console.warn(
      `Reactive ${o} contains both the raw and reactive versions of the same object${o === "Map" ? " as keys" : ""}, which can lead to inconsistencies. Avoid differentiating between the raw and reactive versions of an object and only use the reactive version if possible.`
    );
  }
}
const ii = /* @__PURE__ */ new WeakMap(), Rc = /* @__PURE__ */ new WeakMap(), si = /* @__PURE__ */ new WeakMap(), Mc = /* @__PURE__ */ new WeakMap();
function Pc(t) {
  switch (t) {
    case "Object":
    case "Array":
      return 1;
    case "Map":
    case "Set":
    case "WeakMap":
    case "WeakSet":
      return 2;
    default:
      return 0;
  }
}
function Tc(t) {
  return t.__v_skip || !Object.isExtensible(t) ? 0 : Pc(Ho(t));
}
function Zn(t) {
  return Yt(t) ? t : ci(
    t,
    !1,
    bc,
    kc,
    ii
  );
}
function ai(t) {
  return ci(
    t,
    !0,
    Ec,
    Cc,
    si
  );
}
function ci(t, e, n, r, o) {
  if (!X(t))
    return process.env.NODE_ENV !== "production" && console.warn(`value cannot be made reactive: ${String(t)}`), t;
  if (t.__v_raw && !(e && t.__v_isReactive))
    return t;
  const i = o.get(t);
  if (i)
    return i;
  const s = Tc(t);
  if (s === 0)
    return t;
  const a = new Proxy(
    t,
    s === 2 ? r : n
  );
  return o.set(t, a), a;
}
function Wt(t) {
  return Yt(t) ? Wt(t.__v_raw) : !!(t && t.__v_isReactive);
}
function Yt(t) {
  return !!(t && t.__v_isReadonly);
}
function Fn(t) {
  return !!(t && t.__v_isShallow);
}
function jn(t) {
  return Wt(t) || Yt(t);
}
function H(t) {
  const e = t && t.__v_raw;
  return e ? H(e) : t;
}
const tr = (t) => X(t) ? Zn(t) : t, er = (t) => X(t) ? ai(t) : t;
function Ac(t) {
  Lt && st && (t = H(t), process.env.NODE_ENV !== "production" ? Ln(t.dep || (t.dep = ye()), {
    target: t,
    type: "get",
    key: "value"
  }) : Ln(t.dep || (t.dep = ye())));
}
function Bc(t, e) {
  t = H(t);
  const n = t.dep;
  n && (process.env.NODE_ENV !== "production" ? ne(n, {
    target: t,
    type: "set",
    key: "value",
    newValue: e
  }) : ne(n));
}
function ct(t) {
  return !!(t && t.__v_isRef === !0);
}
function Ve(t) {
  return ct(t) ? t.value : t;
}
const Ic = {
  get: (t, e, n) => Ve(Reflect.get(t, e, n)),
  set: (t, e, n, r) => {
    const o = t[e];
    return ct(o) && !ct(n) ? (o.value = n, !0) : Reflect.set(t, e, n, r);
  }
};
function Lc(t) {
  return Wt(t) ? t : new Proxy(t, Ic);
}
class Fc {
  constructor(e, n, r, o) {
    this._setter = n, this.dep = void 0, this.__v_isRef = !0, this.__v_isReadonly = !1, this._dirty = !0, this.effect = new Zo(e, () => {
      this._dirty || (this._dirty = !0, Bc(this));
    }), this.effect.computed = this, this.effect.active = this._cacheable = !o, this.__v_isReadonly = r;
  }
  get value() {
    const e = H(this);
    return Ac(e), (e._dirty || !e._cacheable) && (e._dirty = !1, e._value = e.effect.run()), e._value;
  }
  set value(e) {
    this._setter(e);
  }
}
function jc(t, e, n = !1) {
  let r, o;
  const i = G(t);
  i ? (r = t, o = process.env.NODE_ENV !== "production" ? () => {
    console.warn("Write operation failed: computed value is readonly");
  } : ht) : (r = t.get, o = t.set);
  const s = new Fc(r, o, i || !o, n);
  return process.env.NODE_ENV !== "production" && e && !n && (s.effect.onTrack = e.onTrack, s.effect.onTrigger = e.onTrigger), s;
}
const Kt = [];
function ui(t) {
  Kt.push(t);
}
function li() {
  Kt.pop();
}
function J(t, ...e) {
  if (process.env.NODE_ENV === "production")
    return;
  cn();
  const n = Kt.length ? Kt[Kt.length - 1].component : null, r = n && n.appContext.config.warnHandler, o = Vc();
  if (r)
    Gt(
      r,
      n,
      11,
      [
        t + e.join(""),
        n && n.proxy,
        o.map(
          ({ vnode: i }) => `at <${dr(n, i.type)}>`
        ).join(`
`),
        o
      ]
    );
  else {
    const i = [`[Vue warn]: ${t}`, ...e];
    o.length && i.push(`
`, ...Uc(o)), console.warn(...i);
  }
  un();
}
function Vc() {
  let t = Kt[Kt.length - 1];
  if (!t)
    return [];
  const e = [];
  for (; t; ) {
    const n = e[0];
    n && n.vnode === t ? n.recurseCount++ : e.push({
      vnode: t,
      recurseCount: 0
    });
    const r = t.component && t.component.parent;
    t = r && r.vnode;
  }
  return e;
}
function Uc(t) {
  const e = [];
  return t.forEach((n, r) => {
    e.push(...r === 0 ? [] : [`
`], ...zc(n));
  }), e;
}
function zc({ vnode: t, recurseCount: e }) {
  const n = e > 0 ? `... (${e} recursive calls)` : "", r = t.component ? t.component.parent == null : !1, o = ` at <${dr(
    t.component,
    t.type,
    r
  )}`, i = ">" + n;
  return t.props ? [o, ...qc(t.props), i] : [o + i];
}
function qc(t) {
  const e = [], n = Object.keys(t);
  return n.slice(0, 3).forEach((r) => {
    e.push(...di(r, t[r]));
  }), n.length > 3 && e.push(" ..."), e;
}
function di(t, e, n) {
  return yt(e) ? (e = JSON.stringify(e), n ? e : [`${t}=${e}`]) : typeof e == "number" || typeof e == "boolean" || e == null ? n ? e : [`${t}=${e}`] : ct(e) ? (e = di(t, H(e.value), !0), n ? e : [`${t}=Ref<`, e, ">"]) : G(e) ? [`${t}=fn${e.name ? `<${e.name}>` : ""}`] : (e = H(e), n ? e : [`${t}=`, e]);
}
function $c(t, e) {
  process.env.NODE_ENV !== "production" && t !== void 0 && (typeof t != "number" ? J(`${e} is not a valid number - got ${JSON.stringify(t)}.`) : isNaN(t) && J(`${e} is NaN - the duration expression might be incorrect.`));
}
const nr = {
  sp: "serverPrefetch hook",
  bc: "beforeCreate hook",
  c: "created hook",
  bm: "beforeMount hook",
  m: "mounted hook",
  bu: "beforeUpdate hook",
  u: "updated",
  bum: "beforeUnmount hook",
  um: "unmounted hook",
  a: "activated hook",
  da: "deactivated hook",
  ec: "errorCaptured hook",
  rtc: "renderTracked hook",
  rtg: "renderTriggered hook",
  0: "setup function",
  1: "render function",
  2: "watcher getter",
  3: "watcher callback",
  4: "watcher cleanup function",
  5: "native event handler",
  6: "component event handler",
  7: "vnode hook",
  8: "directive hook",
  9: "transition hook",
  10: "app errorHandler",
  11: "app warnHandler",
  12: "ref function",
  13: "async component loader",
  14: "scheduler flush. This is likely a Vue internals bug. Please open an issue at https://new-issue.vuejs.org/?repo=vuejs/core"
};
function Gt(t, e, n, r) {
  let o;
  try {
    o = r ? t(...r) : t();
  } catch (i) {
    rr(i, e, n);
  }
  return o;
}
function ve(t, e, n, r) {
  if (G(t)) {
    const i = Gt(t, e, n, r);
    return i && Gn(i) && i.catch((s) => {
      rr(s, e, n);
    }), i;
  }
  const o = [];
  for (let i = 0; i < t.length; i++)
    o.push(ve(t[i], e, n, r));
  return o;
}
function rr(t, e, n, r = !0) {
  const o = e ? e.vnode : null;
  if (e) {
    let i = e.parent;
    const s = e.proxy, a = process.env.NODE_ENV !== "production" ? nr[n] : n;
    for (; i; ) {
      const d = i.ec;
      if (d) {
        for (let h = 0; h < d.length; h++)
          if (d[h](t, s, a) === !1)
            return;
      }
      i = i.parent;
    }
    const u = e.appContext.config.errorHandler;
    if (u) {
      Gt(
        u,
        null,
        10,
        [t, s, a]
      );
      return;
    }
  }
  Hc(t, n, o, r);
}
function Hc(t, e, n, r = !0) {
  if (process.env.NODE_ENV !== "production") {
    const o = nr[e];
    if (n && ui(n), J(`Unhandled error${o ? ` during execution of ${o}` : ""}`), n && li(), r)
      throw t;
    console.error(t);
  } else
    console.error(t);
}
let Je = !1, Vn = !1;
const Et = [];
let Bt = 0;
const ie = [];
let St = null, At = 0;
const Jc = /* @__PURE__ */ Promise.resolve(), Wc = 100;
function Kc(t) {
  let e = Bt + 1, n = Et.length;
  for (; e < n; ) {
    const r = e + n >>> 1;
    we(Et[r]) < t ? e = r + 1 : n = r;
  }
  return e;
}
function fi(t) {
  (!Et.length || !Et.includes(
    t,
    Je && t.allowRecurse ? Bt + 1 : Bt
  )) && (t.id == null ? Et.push(t) : Et.splice(Kc(t.id), 0, t), pi());
}
function pi() {
  !Je && !Vn && (Vn = !0, Jc.then(hi));
}
function or(t) {
  W(t) ? ie.push(...t) : (!St || !St.includes(
    t,
    t.allowRecurse ? At + 1 : At
  )) && ie.push(t), pi();
}
function Gc(t) {
  if (ie.length) {
    const e = [...new Set(ie)];
    if (ie.length = 0, St) {
      St.push(...e);
      return;
    }
    for (St = e, process.env.NODE_ENV !== "production" && (t = t || /* @__PURE__ */ new Map()), St.sort((n, r) => we(n) - we(r)), At = 0; At < St.length; At++)
      process.env.NODE_ENV !== "production" && gi(t, St[At]) || St[At]();
    St = null, At = 0;
  }
}
const we = (t) => t.id == null ? 1 / 0 : t.id, Yc = (t, e) => {
  const n = we(t) - we(e);
  if (n === 0) {
    if (t.pre && !e.pre)
      return -1;
    if (e.pre && !t.pre)
      return 1;
  }
  return n;
};
function hi(t) {
  Vn = !1, Je = !0, process.env.NODE_ENV !== "production" && (t = t || /* @__PURE__ */ new Map()), Et.sort(Yc);
  const e = process.env.NODE_ENV !== "production" ? (n) => gi(t, n) : ht;
  try {
    for (Bt = 0; Bt < Et.length; Bt++) {
      const n = Et[Bt];
      if (n && n.active !== !1) {
        if (process.env.NODE_ENV !== "production" && e(n))
          continue;
        Gt(n, null, 14);
      }
    }
  } finally {
    Bt = 0, Et.length = 0, Gc(t), Je = !1, (Et.length || ie.length) && hi(t);
  }
}
function gi(t, e) {
  if (!t.has(e))
    t.set(e, 1);
  else {
    const n = t.get(e);
    if (n > Wc) {
      const r = e.ownerInstance, o = r && Ai(r.type);
      return J(
        `Maximum recursive updates exceeded${o ? ` in component <${o}>` : ""}. This means you have a reactive effect that is mutating its own dependencies and thus recursively triggering itself. Possible sources include component template, render function, updated hook or watcher source function.`
      ), !0;
    } else
      t.set(e, n + 1);
  }
}
const ee = /* @__PURE__ */ new Set();
process.env.NODE_ENV !== "production" && (Tn().__VUE_HMR_RUNTIME__ = {
  createRecord: vn(Qc),
  rerender: vn(Xc),
  reload: vn(Zc)
});
const We = /* @__PURE__ */ new Map();
function Qc(t, e) {
  return We.has(t) ? !1 : (We.set(t, {
    initialDef: ge(e),
    instances: /* @__PURE__ */ new Set()
  }), !0);
}
function ge(t) {
  return Bi(t) ? t.__vccOpts : t;
}
function Xc(t, e) {
  const n = We.get(t);
  n && (n.initialDef.render = e, [...n.instances].forEach((r) => {
    e && (r.render = e, ge(r.type).render = e), r.renderCache = [], r.update();
  }));
}
function Zc(t, e) {
  const n = We.get(t);
  if (!n)
    return;
  e = ge(e), Gr(n.initialDef, e);
  const r = [...n.instances];
  for (const o of r) {
    const i = ge(o.type);
    ee.has(i) || (i !== n.initialDef && Gr(i, e), ee.add(i)), o.appContext.propsCache.delete(o.type), o.appContext.emitsCache.delete(o.type), o.appContext.optionsCache.delete(o.type), o.ceReload ? (ee.add(i), o.ceReload(e.styles), ee.delete(i)) : o.parent ? fi(o.parent.update) : o.appContext.reload ? o.appContext.reload() : typeof window < "u" ? window.location.reload() : console.warn(
      "[HMR] Root or manually mounted instance modified. Full reload required."
    );
  }
  or(() => {
    for (const o of r)
      ee.delete(
        ge(o.type)
      );
  });
}
function Gr(t, e) {
  dt(t, e);
  for (const n in t)
    n !== "__file" && !(n in e) && delete t[n];
}
function vn(t) {
  return (e, n) => {
    try {
      return t(e, n);
    } catch (r) {
      console.error(r), console.warn(
        "[HMR] Something went wrong during Vue component hot-reload. Full reload required."
      );
    }
  };
}
function mi(t, ...e) {
}
const tu = /* @__PURE__ */ eu(
  "component:updated"
  /* COMPONENT_UPDATED */
);
function eu(t) {
  return (e) => {
    mi(
      t,
      e.appContext.app,
      e.uid,
      e.parent ? e.parent.uid : void 0,
      e
    );
  };
}
const nu = /* @__PURE__ */ yi(
  "perf:start"
  /* PERFORMANCE_START */
), ru = /* @__PURE__ */ yi(
  "perf:end"
  /* PERFORMANCE_END */
);
function yi(t) {
  return (e, n, r) => {
    mi(t, e.appContext.app, e.uid, e, n, r);
  };
}
let Ot = null, vi = null;
function Yr(t) {
  const e = Ot;
  return Ot = t, vi = t && t.type.__scopeId || null, e;
}
function ou(t, e = Ot, n) {
  if (!e || t._n)
    return t;
  const r = (...o) => {
    r._d && io(-1);
    const i = Yr(e);
    let s;
    try {
      s = t(...o);
    } finally {
      Yr(i), r._d && io(1);
    }
    return process.env.NODE_ENV !== "production" && tu(e), s;
  };
  return r._n = !0, r._c = !0, r._d = !0, r;
}
function iu(t) {
  let e;
  for (let n = 0; n < t.length; n++) {
    const r = t[n];
    if (ar(r)) {
      if (r.type !== ue || r.children === "v-if") {
        if (e)
          return;
        e = r;
      }
    } else
      return;
  }
  return e;
}
function wi({ vnode: t, parent: e }, n) {
  for (; e && e.subTree === t; )
    (t = e.vnode).el = n, e = e.parent;
}
const su = (t) => t.__isSuspense, au = {
  name: "Suspense",
  // In order to make Suspense tree-shakable, we need to avoid importing it
  // directly in the renderer. The renderer checks for the __isSuspense flag
  // on a vnode's type and calls the `process` method, passing in renderer
  // internals.
  __isSuspense: !0,
  process(t, e, n, r, o, i, s, a, u, d) {
    t == null ? uu(
      e,
      n,
      r,
      o,
      i,
      s,
      a,
      u,
      d
    ) : lu(
      t,
      e,
      n,
      r,
      o,
      s,
      a,
      u,
      d
    );
  },
  hydrate: du,
  create: ir,
  normalize: fu
}, cu = au;
function _e(t, e) {
  const n = t.props && t.props[e];
  G(n) && n();
}
function uu(t, e, n, r, o, i, s, a, u) {
  const {
    p: d,
    o: { createElement: h }
  } = u, c = h("div"), w = t.suspense = ir(
    t,
    o,
    r,
    e,
    c,
    n,
    i,
    s,
    a,
    u
  );
  d(
    null,
    w.pendingBranch = t.ssContent,
    c,
    null,
    r,
    w,
    i,
    s
  ), w.deps > 0 ? (_e(t, "onPending"), _e(t, "onFallback"), d(
    null,
    t.ssFallback,
    e,
    n,
    r,
    null,
    // fallback tree will not have suspense context
    i,
    s
  ), se(w, t.ssFallback)) : w.resolve(!1, !0);
}
function lu(t, e, n, r, o, i, s, a, { p: u, um: d, o: { createElement: h } }) {
  const c = e.suspense = t.suspense;
  c.vnode = e, e.el = t.el;
  const w = e.ssContent, C = e.ssFallback, { activeBranch: N, pendingBranch: A, isInFallback: $, isHydrating: q } = c;
  if (A)
    c.pendingBranch = w, En(w, A) ? (u(
      A,
      w,
      c.hiddenContainer,
      null,
      o,
      c,
      i,
      s,
      a
    ), c.deps <= 0 ? c.resolve() : $ && (u(
      N,
      C,
      n,
      r,
      o,
      null,
      // fallback tree will not have suspense context
      i,
      s,
      a
    ), se(c, C))) : (c.pendingId++, q ? (c.isHydrating = !1, c.activeBranch = A) : d(A, o, c), c.deps = 0, c.effects.length = 0, c.hiddenContainer = h("div"), $ ? (u(
      null,
      w,
      c.hiddenContainer,
      null,
      o,
      c,
      i,
      s,
      a
    ), c.deps <= 0 ? c.resolve() : (u(
      N,
      C,
      n,
      r,
      o,
      null,
      // fallback tree will not have suspense context
      i,
      s,
      a
    ), se(c, C))) : N && En(w, N) ? (u(
      N,
      w,
      n,
      r,
      o,
      c,
      i,
      s,
      a
    ), c.resolve(!0)) : (u(
      null,
      w,
      c.hiddenContainer,
      null,
      o,
      c,
      i,
      s,
      a
    ), c.deps <= 0 && c.resolve()));
  else if (N && En(w, N))
    u(
      N,
      w,
      n,
      r,
      o,
      c,
      i,
      s,
      a
    ), se(c, w);
  else if (_e(e, "onPending"), c.pendingBranch = w, c.pendingId++, u(
    null,
    w,
    c.hiddenContainer,
    null,
    o,
    c,
    i,
    s,
    a
  ), c.deps <= 0)
    c.resolve();
  else {
    const { timeout: V, pendingId: U } = c;
    V > 0 ? setTimeout(() => {
      c.pendingId === U && c.fallback(C);
    }, V) : V === 0 && c.fallback(C);
  }
}
let Qr = !1;
function ir(t, e, n, r, o, i, s, a, u, d, h = !1) {
  process.env.NODE_ENV !== "production" && !Qr && (Qr = !0, console[console.info ? "info" : "log"](
    "<Suspense> is an experimental feature and its API will likely change."
  ));
  const {
    p: c,
    m: w,
    um: C,
    n: N,
    o: { parentNode: A, remove: $ }
  } = d;
  let q;
  const V = hu(t);
  V && e != null && e.pendingBranch && (q = e.pendingId, e.deps++);
  const U = t.props ? ec(t.props.timeout) : void 0;
  process.env.NODE_ENV !== "production" && $c(U, "Suspense timeout");
  const L = {
    vnode: t,
    parent: e,
    parentComponent: n,
    isSVG: s,
    container: r,
    hiddenContainer: o,
    anchor: i,
    deps: 0,
    pendingId: 0,
    timeout: typeof U == "number" ? U : -1,
    activeBranch: null,
    pendingBranch: null,
    isInFallback: !0,
    isHydrating: h,
    isUnmounted: !1,
    effects: [],
    resolve(O = !1, P = !1) {
      if (process.env.NODE_ENV !== "production") {
        if (!O && !L.pendingBranch)
          throw new Error(
            "suspense.resolve() is called without a pending branch."
          );
        if (L.isUnmounted)
          throw new Error(
            "suspense.resolve() is called on an already unmounted suspense boundary."
          );
      }
      const {
        vnode: b,
        activeBranch: g,
        pendingBranch: p,
        pendingId: v,
        effects: f,
        parentComponent: l,
        container: k
      } = L;
      if (L.isHydrating)
        L.isHydrating = !1;
      else if (!O) {
        const M = g && p.transition && p.transition.mode === "out-in";
        M && (g.transition.afterLeave = () => {
          v === L.pendingId && w(p, k, T, 0);
        });
        let { anchor: T } = L;
        g && (T = N(g), C(g, l, L, !0)), M || w(p, k, T, 0);
      }
      se(L, p), L.pendingBranch = null, L.isInFallback = !1;
      let x = L.parent, m = !1;
      for (; x; ) {
        if (x.pendingBranch) {
          x.effects.push(...f), m = !0;
          break;
        }
        x = x.parent;
      }
      m || or(f), L.effects = [], V && e && e.pendingBranch && q === e.pendingId && (e.deps--, e.deps === 0 && !P && e.resolve()), _e(b, "onResolve");
    },
    fallback(O) {
      if (!L.pendingBranch)
        return;
      const { vnode: P, activeBranch: b, parentComponent: g, container: p, isSVG: v } = L;
      _e(P, "onFallback");
      const f = N(b), l = () => {
        L.isInFallback && (c(
          null,
          O,
          p,
          f,
          g,
          null,
          // fallback tree will not have suspense context
          v,
          a,
          u
        ), se(L, O));
      }, k = O.transition && O.transition.mode === "out-in";
      k && (b.transition.afterLeave = l), L.isInFallback = !0, C(
        b,
        g,
        null,
        // no suspense so unmount hooks fire now
        !0
        // shouldRemove
      ), k || l();
    },
    move(O, P, b) {
      L.activeBranch && w(L.activeBranch, O, P, b), L.container = O;
    },
    next() {
      return L.activeBranch && N(L.activeBranch);
    },
    registerDep(O, P) {
      const b = !!L.pendingBranch;
      b && L.deps++;
      const g = O.vnode.el;
      O.asyncDep.catch((p) => {
        rr(p, O, 0);
      }).then((p) => {
        if (O.isUnmounted || L.isUnmounted || L.pendingId !== O.suspenseId)
          return;
        O.asyncResolved = !0;
        const { vnode: v } = O;
        process.env.NODE_ENV !== "production" && ui(v), Qu(O, p, !1), g && (v.el = g);
        const f = !g && O.subTree.el;
        P(
          O,
          v,
          // component may have been moved before resolve.
          // if this is not a hydration, instance.subTree will be the comment
          // placeholder.
          A(g || O.subTree.el),
          // anchor will not be used if this is hydration, so only need to
          // consider the comment placeholder case.
          g ? null : N(O.subTree),
          L,
          s,
          u
        ), f && $(f), wi(O, v.el), process.env.NODE_ENV !== "production" && li(), b && --L.deps === 0 && L.resolve();
      });
    },
    unmount(O, P) {
      L.isUnmounted = !0, L.activeBranch && C(
        L.activeBranch,
        n,
        O,
        P
      ), L.pendingBranch && C(
        L.pendingBranch,
        n,
        O,
        P
      );
    }
  };
  return L;
}
function du(t, e, n, r, o, i, s, a, u) {
  const d = e.suspense = ir(
    e,
    r,
    n,
    t.parentNode,
    document.createElement("div"),
    null,
    o,
    i,
    s,
    a,
    !0
    /* hydrating */
  ), h = u(
    t,
    d.pendingBranch = e.ssContent,
    n,
    d,
    i,
    s
  );
  return d.deps === 0 && d.resolve(!1, !0), h;
}
function fu(t) {
  const { shapeFlag: e, children: n } = t, r = e & 32;
  t.ssContent = Xr(
    r ? n.default : n
  ), t.ssFallback = r ? Xr(n.fallback) : Ft(ue);
}
function Xr(t) {
  let e;
  if (G(t)) {
    const n = le && t._c;
    n && (t._d = !1, ae()), t = t(), n && (t._d = !0, e = gt, Di());
  }
  if (W(t)) {
    const n = iu(t);
    process.env.NODE_ENV !== "production" && !n && J("<Suspense> slots expect a single root node."), t = n;
  }
  return t = Ju(t), e && !t.dynamicChildren && (t.dynamicChildren = e.filter((n) => n !== t)), t;
}
function pu(t, e) {
  e && e.pendingBranch ? W(t) ? e.effects.push(...t) : e.effects.push(t) : or(t);
}
function se(t, e) {
  t.activeBranch = e;
  const { vnode: n, parentComponent: r } = t, o = n.el = e.el;
  r && r.subTree === n && (r.vnode.el = o, wi(r, o));
}
function hu(t) {
  var e;
  return ((e = t.props) == null ? void 0 : e.suspensible) != null && t.props.suspensible !== !1;
}
const Pe = {};
function wn(t, e, n) {
  return process.env.NODE_ENV !== "production" && !G(e) && J(
    "`watch(fn, options?)` signature has been moved to a separate API. Use `watchEffect(fn, options?)` instead. `watch` now only supports `watch(source, cb, options?) signature."
  ), gu(t, e, n);
}
function gu(t, e, { immediate: n, deep: r, flush: o, onTrack: i, onTrigger: s } = Pn) {
  var a;
  process.env.NODE_ENV !== "production" && !e && (n !== void 0 && J(
    'watch() "immediate" option is only respected when using the watch(source, callback, options?) signature.'
  ), r !== void 0 && J(
    'watch() "deep" option is only respected when using the watch(source, callback, options?) signature.'
  ));
  const u = (U) => {
    J(
      "Invalid watch source: ",
      U,
      "A watch source can only be a getter/effect function, a ref, a reactive object, or an array of these types."
    );
  }, d = cc() === ((a = ot) == null ? void 0 : a.scope) ? ot : null;
  let h, c = !1, w = !1;
  if (ct(t) ? (h = () => t.value, c = Fn(t)) : Wt(t) ? (h = () => t, r = !0) : W(t) ? (w = !0, c = t.some((U) => Wt(U) || Fn(U)), h = () => t.map((U) => {
    if (ct(U))
      return U.value;
    if (Wt(U))
      return re(U);
    if (G(U))
      return Gt(U, d, 2);
    process.env.NODE_ENV !== "production" && u(U);
  })) : G(t) ? e ? h = () => Gt(t, d, 2) : h = () => {
    if (!(d && d.isUnmounted))
      return C && C(), ve(
        t,
        d,
        3,
        [N]
      );
  } : (h = ht, process.env.NODE_ENV !== "production" && u(t)), e && r) {
    const U = h;
    h = () => re(U());
  }
  let C, N = (U) => {
    C = V.onStop = () => {
      Gt(U, d, 4);
    };
  }, A = w ? new Array(t.length).fill(Pe) : Pe;
  const $ = () => {
    if (V.active)
      if (e) {
        const U = V.run();
        (r || c || (w ? U.some(
          (L, O) => He(L, A[O])
        ) : He(U, A))) && (C && C(), ve(e, d, 3, [
          U,
          // pass undefined as the old value when it's changed for the first time
          A === Pe ? void 0 : w && A[0] === Pe ? [] : A,
          N
        ]), A = U);
      } else
        V.run();
  };
  $.allowRecurse = !!e;
  let q;
  o === "sync" ? q = $ : o === "post" ? q = () => oo($, d && d.suspense) : ($.pre = !0, d && ($.id = d.uid), q = () => fi($));
  const V = new Zo(h, q);
  return process.env.NODE_ENV !== "production" && (V.onTrack = i, V.onTrigger = s), e ? n ? $() : A = V.run() : o === "post" ? oo(
    V.run.bind(V),
    d && d.suspense
  ) : V.run(), () => {
    V.stop(), d && d.scope && zo(d.scope.effects, V);
  };
}
function mu(t, e) {
  const n = e.split(".");
  return () => {
    let r = t;
    for (let o = 0; o < n.length && r; o++)
      r = r[n[o]];
    return r;
  };
}
function re(t, e) {
  if (!X(t) || t.__v_skip || (e = e || /* @__PURE__ */ new Set(), e.has(t)))
    return t;
  if (e.add(t), ct(t))
    re(t.value, e);
  else if (W(t))
    for (let n = 0; n < t.length; n++)
      re(t[n], e);
  else if (qo(t) || Ht(t))
    t.forEach((n) => {
      re(n, e);
    });
  else if (Jo(t))
    for (const n in t)
      re(t[n], e);
  return t;
}
function _i(t, e) {
  return G(t) ? (
    // #8326: extend call and options.name access are considered side-effects
    // by Rollup, so we have to wrap it in a pure-annotated IIFE.
    /* @__PURE__ */ (() => dt({ name: t.name }, e, { setup: t }))()
  ) : t;
}
const yu = (t) => t.type.__isKeepAlive;
function vu(t, e) {
  bi(t, "a", e);
}
function wu(t, e) {
  bi(t, "da", e);
}
function bi(t, e, n = ot) {
  const r = t.__wdc || (t.__wdc = () => {
    let o = n;
    for (; o; ) {
      if (o.isDeactivated)
        return;
      o = o.parent;
    }
    return t();
  });
  if (dn(e, r, n), n) {
    let o = n.parent;
    for (; o && o.parent; )
      yu(o.parent.vnode) && _u(r, e, n, o), o = o.parent;
  }
}
function _u(t, e, n, r) {
  const o = dn(
    e,
    t,
    r,
    !0
    /* prepend */
  );
  Ei(() => {
    zo(r[e], o);
  }, n);
}
function dn(t, e, n = ot, r = !1) {
  if (n) {
    const o = n[t] || (n[t] = []), i = e.__weh || (e.__weh = (...s) => {
      if (n.isUnmounted)
        return;
      cn(), Qe(n);
      const a = ve(e, n, t, s);
      return lr(), un(), a;
    });
    return r ? o.unshift(i) : o.push(i), i;
  } else if (process.env.NODE_ENV !== "production") {
    const o = tc(nr[t].replace(/ hook$/, ""));
    J(
      `${o} is called when there is no active component instance to be associated with. Lifecycle injection APIs can only be used during execution of setup(). If you are using async setup(), make sure to register lifecycle hooks before the first await statement.`
    );
  }
}
const Ct = (t) => (e, n = ot) => (
  // post-create lifecycle registrations are noops during SSR (except for serverPrefetch)
  dn(t, (...r) => e(...r), n)
), bu = Ct("bm"), Eu = Ct("m"), Ou = Ct("bu"), Su = Ct("u"), xu = Ct("bum"), Ei = Ct("um"), Nu = Ct("sp"), Du = Ct(
  "rtg"
), ku = Ct(
  "rtc"
);
function Cu(t, e = ot) {
  dn("ec", t, e);
}
const Ru = Symbol.for("v-ndc"), Oi = (t) => t === "_" || t === "$";
process.env.NODE_ENV;
function Mu(t) {
  const { ctx: e, setupState: n } = t;
  Object.keys(H(n)).forEach((r) => {
    if (!n.__isScriptSetup) {
      if (Oi(r[0])) {
        J(
          `setup() return property ${JSON.stringify(
            r
          )} should not start with "$" or "_" which are reserved prefixes for Vue internals.`
        );
        return;
      }
      Object.defineProperty(e, r, {
        enumerable: !0,
        configurable: !0,
        get: () => n[r],
        set: ht
      });
    }
  });
}
function Zr(t) {
  return W(t) ? t.reduce(
    (e, n) => (e[n] = null, e),
    {}
  ) : t;
}
function Pu(t) {
  const e = Gu();
  process.env.NODE_ENV !== "production" && !e && J(
    "withAsyncContext called without active current instance. This is likely a bug."
  );
  let n = t();
  return lr(), Gn(n) && (n = n.catch((r) => {
    throw Qe(e), r;
  })), [n, () => Qe(e)];
}
function Tu() {
  const t = /* @__PURE__ */ Object.create(null);
  return (e, n) => {
    t[n] ? J(`${e} property "${n}" is already defined in ${t[n]}.`) : t[n] = e;
  };
}
function Au(t) {
  const e = xi(t), n = t.proxy, r = t.ctx;
  e.beforeCreate && to(e.beforeCreate, t, "bc");
  const {
    // state
    data: o,
    computed: i,
    methods: s,
    watch: a,
    provide: u,
    inject: d,
    // lifecycle
    created: h,
    beforeMount: c,
    mounted: w,
    beforeUpdate: C,
    updated: N,
    activated: A,
    deactivated: $,
    beforeDestroy: q,
    beforeUnmount: V,
    destroyed: U,
    unmounted: L,
    render: O,
    renderTracked: P,
    renderTriggered: b,
    errorCaptured: g,
    serverPrefetch: p,
    // public API
    expose: v,
    inheritAttrs: f,
    // assets
    components: l,
    directives: k,
    filters: x
  } = e, m = process.env.NODE_ENV !== "production" ? Tu() : null;
  if (process.env.NODE_ENV !== "production") {
    const [T] = t.propsOptions;
    if (T)
      for (const I in T)
        m("Props", I);
  }
  if (d && Bu(d, r, m), s)
    for (const T in s) {
      const I = s[T];
      G(I) ? (process.env.NODE_ENV !== "production" ? Object.defineProperty(r, T, {
        value: I.bind(n),
        configurable: !0,
        enumerable: !0,
        writable: !0
      }) : r[T] = I.bind(n), process.env.NODE_ENV !== "production" && m("Methods", T)) : process.env.NODE_ENV !== "production" && J(
        `Method "${T}" has type "${typeof I}" in the component definition. Did you reference the function correctly?`
      );
    }
  if (o) {
    process.env.NODE_ENV !== "production" && !G(o) && J(
      "The data option must be a function. Plain object usage is no longer supported."
    );
    const T = o.call(n, n);
    if (process.env.NODE_ENV !== "production" && Gn(T) && J(
      "data() returned a Promise - note data() cannot be async; If you intend to perform data fetching before component renders, use async setup() + <Suspense>."
    ), !X(T))
      process.env.NODE_ENV !== "production" && J("data() should return an object.");
    else if (t.data = Zn(T), process.env.NODE_ENV !== "production")
      for (const I in T)
        m("Data", I), Oi(I[0]) || Object.defineProperty(r, I, {
          configurable: !0,
          enumerable: !0,
          get: () => T[I],
          set: ht
        });
  }
  if (i)
    for (const T in i) {
      const I = i[T], Y = G(I) ? I.bind(n, n) : G(I.get) ? I.get.bind(n, n) : ht;
      process.env.NODE_ENV !== "production" && Y === ht && J(`Computed property "${T}" has no getter.`);
      const et = !G(I) && G(I.set) ? I.set.bind(n) : process.env.NODE_ENV !== "production" ? () => {
        J(
          `Write operation failed: computed property "${T}" is readonly.`
        );
      } : ht, lt = el({
        get: Y,
        set: et
      });
      Object.defineProperty(r, T, {
        enumerable: !0,
        configurable: !0,
        get: () => lt.value,
        set: (wt) => lt.value = wt
      }), process.env.NODE_ENV !== "production" && m("Computed", T);
    }
  if (a)
    for (const T in a)
      Si(a[T], r, n, T);
  if (u) {
    const T = G(u) ? u.call(n) : u;
    Reflect.ownKeys(T).forEach((I) => {
      ju(I, T[I]);
    });
  }
  h && to(h, t, "c");
  function M(T, I) {
    W(I) ? I.forEach((Y) => T(Y.bind(n))) : I && T(I.bind(n));
  }
  if (M(bu, c), M(Eu, w), M(Ou, C), M(Su, N), M(vu, A), M(wu, $), M(Cu, g), M(ku, P), M(Du, b), M(xu, V), M(Ei, L), M(Nu, p), W(v))
    if (v.length) {
      const T = t.exposed || (t.exposed = {});
      v.forEach((I) => {
        Object.defineProperty(T, I, {
          get: () => n[I],
          set: (Y) => n[I] = Y
        });
      });
    } else
      t.exposed || (t.exposed = {});
  O && t.render === ht && (t.render = O), f != null && (t.inheritAttrs = f), l && (t.components = l), k && (t.directives = k);
}
function Bu(t, e, n = ht) {
  W(t) && (t = Un(t));
  for (const r in t) {
    const o = t[r];
    let i;
    X(o) ? "default" in o ? i = _n(
      o.from || r,
      o.default,
      !0
      /* treat default function as factory */
    ) : i = _n(o.from || r) : i = _n(o), ct(i) ? Object.defineProperty(e, r, {
      enumerable: !0,
      configurable: !0,
      get: () => i.value,
      set: (s) => i.value = s
    }) : e[r] = i, process.env.NODE_ENV !== "production" && n("Inject", r);
  }
}
function to(t, e, n) {
  ve(
    W(t) ? t.map((r) => r.bind(e.proxy)) : t.bind(e.proxy),
    e,
    n
  );
}
function Si(t, e, n, r) {
  const o = r.includes(".") ? mu(n, r) : () => n[r];
  if (yt(t)) {
    const i = e[t];
    G(i) ? wn(o, i) : process.env.NODE_ENV !== "production" && J(`Invalid watch handler specified by key "${t}"`, i);
  } else if (G(t))
    wn(o, t.bind(n));
  else if (X(t))
    if (W(t))
      t.forEach((i) => Si(i, e, n, r));
    else {
      const i = G(t.handler) ? t.handler.bind(n) : e[t.handler];
      G(i) ? wn(o, i, t) : process.env.NODE_ENV !== "production" && J(`Invalid watch handler specified by key "${t.handler}"`, i);
    }
  else
    process.env.NODE_ENV !== "production" && J(`Invalid watch option: "${r}"`, t);
}
function xi(t) {
  const e = t.type, { mixins: n, extends: r } = e, {
    mixins: o,
    optionsCache: i,
    config: { optionMergeStrategies: s }
  } = t.appContext, a = i.get(e);
  let u;
  return a ? u = a : !o.length && !n && !r ? u = e : (u = {}, o.length && o.forEach(
    (d) => Ke(u, d, s, !0)
  ), Ke(u, e, s)), X(e) && i.set(e, u), u;
}
function Ke(t, e, n, r = !1) {
  const { mixins: o, extends: i } = e;
  i && Ke(t, i, n, !0), o && o.forEach(
    (s) => Ke(t, s, n, !0)
  );
  for (const s in e)
    if (r && s === "expose")
      process.env.NODE_ENV !== "production" && J(
        '"expose" option is ignored when declared in mixins or extends. It should only be declared in the base component itself.'
      );
    else {
      const a = Iu[s] || n && n[s];
      t[s] = a ? a(t[s], e[s]) : e[s];
    }
  return t;
}
const Iu = {
  data: eo,
  props: no,
  emits: no,
  // objects
  methods: he,
  computed: he,
  // lifecycle
  beforeCreate: it,
  created: it,
  beforeMount: it,
  mounted: it,
  beforeUpdate: it,
  updated: it,
  beforeDestroy: it,
  beforeUnmount: it,
  destroyed: it,
  unmounted: it,
  activated: it,
  deactivated: it,
  errorCaptured: it,
  serverPrefetch: it,
  // assets
  components: he,
  directives: he,
  // watch
  watch: Fu,
  // provide / inject
  provide: eo,
  inject: Lu
};
function eo(t, e) {
  return e ? t ? function() {
    return dt(
      G(t) ? t.call(this, this) : t,
      G(e) ? e.call(this, this) : e
    );
  } : e : t;
}
function Lu(t, e) {
  return he(Un(t), Un(e));
}
function Un(t) {
  if (W(t)) {
    const e = {};
    for (let n = 0; n < t.length; n++)
      e[t[n]] = t[n];
    return e;
  }
  return t;
}
function it(t, e) {
  return t ? [...new Set([].concat(t, e))] : e;
}
function he(t, e) {
  return t ? dt(/* @__PURE__ */ Object.create(null), t, e) : e;
}
function no(t, e) {
  return t ? W(t) && W(e) ? [.../* @__PURE__ */ new Set([...t, ...e])] : dt(
    /* @__PURE__ */ Object.create(null),
    Zr(t),
    Zr(e ?? {})
  ) : e;
}
function Fu(t, e) {
  if (!t)
    return e;
  if (!e)
    return t;
  const n = dt(/* @__PURE__ */ Object.create(null), t);
  for (const r in e)
    n[r] = it(t[r], e[r]);
  return n;
}
let ro = null;
function ju(t, e) {
  if (!ot)
    process.env.NODE_ENV !== "production" && J("provide() can only be used inside setup().");
  else {
    let n = ot.provides;
    const r = ot.parent && ot.parent.provides;
    r === n && (n = ot.provides = Object.create(r)), n[t] = e;
  }
}
function _n(t, e, n = !1) {
  const r = ot || Ot;
  if (r || ro) {
    const o = r ? r.parent == null ? r.vnode.appContext && r.vnode.appContext.provides : r.parent.provides : ro._context.provides;
    if (o && t in o)
      return o[t];
    if (arguments.length > 1)
      return n && G(e) ? e.call(r && r.proxy) : e;
    process.env.NODE_ENV !== "production" && J(`injection "${String(t)}" not found.`);
  } else
    process.env.NODE_ENV !== "production" && J("inject() can only be used inside setup() or functional components.");
}
let Te, It;
function Vu(t, e) {
  t.appContext.config.performance && Ge() && It.mark(`vue-${e}-${t.uid}`), process.env.NODE_ENV !== "production" && nu(t, e, Ge() ? It.now() : Date.now());
}
function Uu(t, e) {
  if (t.appContext.config.performance && Ge()) {
    const n = `vue-${e}-${t.uid}`, r = n + ":end";
    It.mark(r), It.measure(
      `<${dr(t, t.type)}> ${e}`,
      n,
      r
    ), It.clearMarks(n), It.clearMarks(r);
  }
  process.env.NODE_ENV !== "production" && ru(t, e, Ge() ? It.now() : Date.now());
}
function Ge() {
  return Te !== void 0 || (typeof window < "u" && window.performance ? (Te = !0, It = window.performance) : Te = !1), Te;
}
const oo = pu, zu = (t) => t.__isTeleport, sr = Symbol.for("v-fgt"), Ni = Symbol.for("v-txt"), ue = Symbol.for("v-cmt"), Ue = [];
let gt = null;
function ae(t = !1) {
  Ue.push(gt = t ? null : []);
}
function Di() {
  Ue.pop(), gt = Ue[Ue.length - 1] || null;
}
let le = 1;
function io(t) {
  le += t;
}
function ki(t) {
  return t.dynamicChildren = le > 0 ? gt || Ya : null, Di(), le > 0 && gt && gt.push(t), t;
}
function bn(t, e, n, r, o, i) {
  return ki(
    Ye(
      t,
      e,
      n,
      r,
      o,
      i,
      !0
      /* isBlock */
    )
  );
}
function Ci(t, e, n, r, o) {
  return ki(
    Ft(
      t,
      e,
      n,
      r,
      o,
      !0
      /* isBlock: prevent a block from tracking itself */
    )
  );
}
function ar(t) {
  return t ? t.__v_isVNode === !0 : !1;
}
function En(t, e) {
  return process.env.NODE_ENV !== "production" && e.shapeFlag & 6 && ee.has(e.type) ? (t.shapeFlag &= -257, e.shapeFlag &= -513, !1) : t.type === e.type && t.key === e.key;
}
const qu = (...t) => Pi(
  ...t
), Ri = "__vInternal", Mi = ({ key: t }) => t ?? null, ze = ({
  ref: t,
  ref_key: e,
  ref_for: n
}) => (typeof t == "number" && (t = "" + t), t != null ? yt(t) || ct(t) || G(t) ? { i: Ot, r: t, k: e, f: !!n } : t : null);
function Ye(t, e = null, n = null, r = 0, o = null, i = t === sr ? 0 : 1, s = !1, a = !1) {
  const u = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: t,
    props: e,
    key: e && Mi(e),
    ref: e && ze(e),
    scopeId: vi,
    slotScopeIds: null,
    children: n,
    component: null,
    suspense: null,
    ssContent: null,
    ssFallback: null,
    dirs: null,
    transition: null,
    el: null,
    anchor: null,
    target: null,
    targetAnchor: null,
    staticCount: 0,
    shapeFlag: i,
    patchFlag: r,
    dynamicProps: o,
    dynamicChildren: null,
    appContext: null,
    ctx: Ot
  };
  return a ? (cr(u, n), i & 128 && t.normalize(u)) : n && (u.shapeFlag |= yt(n) ? 8 : 16), process.env.NODE_ENV !== "production" && u.key !== u.key && J("VNode created with invalid key (NaN). VNode type:", u.type), le > 0 && // avoid a block node from tracking itself
  !s && // has current parent block
  gt && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (u.patchFlag > 0 || i & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  u.patchFlag !== 32 && gt.push(u), u;
}
const Ft = process.env.NODE_ENV !== "production" ? qu : Pi;
function Pi(t, e = null, n = null, r = 0, o = null, i = !1) {
  if ((!t || t === Ru) && (process.env.NODE_ENV !== "production" && !t && J(`Invalid vnode type when creating vnode: ${t}.`), t = ue), ar(t)) {
    const a = be(
      t,
      e,
      !0
      /* mergeRef: true */
    );
    return n && cr(a, n), le > 0 && !i && gt && (a.shapeFlag & 6 ? gt[gt.indexOf(t)] = a : gt.push(a)), a.patchFlag |= -2, a;
  }
  if (Bi(t) && (t = t.__vccOpts), e) {
    e = $u(e);
    let { class: a, style: u } = e;
    a && !yt(a) && (e.class = oe(a)), X(u) && (jn(u) && !W(u) && (u = dt({}, u)), e.style = Qn(u));
  }
  const s = yt(t) ? 1 : su(t) ? 128 : zu(t) ? 64 : X(t) ? 4 : G(t) ? 2 : 0;
  return process.env.NODE_ENV !== "production" && s & 4 && jn(t) && (t = H(t), J(
    "Vue received a Component which was made a reactive object. This can lead to unnecessary performance overhead, and should be avoided by marking the component with `markRaw` or using `shallowRef` instead of `ref`.",
    `
Component that was made reactive: `,
    t
  )), Ye(
    t,
    e,
    n,
    r,
    o,
    s,
    i,
    !0
  );
}
function $u(t) {
  return t ? jn(t) || Ri in t ? dt({}, t) : t : null;
}
function be(t, e, n = !1) {
  const { props: r, ref: o, patchFlag: i, children: s } = t, a = e ? Ku(r || {}, e) : r;
  return {
    __v_isVNode: !0,
    __v_skip: !0,
    type: t.type,
    props: a,
    key: a && Mi(a),
    ref: e && e.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      n && o ? W(o) ? o.concat(ze(e)) : [o, ze(e)] : ze(e)
    ) : o,
    scopeId: t.scopeId,
    slotScopeIds: t.slotScopeIds,
    children: process.env.NODE_ENV !== "production" && i === -1 && W(s) ? s.map(Ti) : s,
    target: t.target,
    targetAnchor: t.targetAnchor,
    staticCount: t.staticCount,
    shapeFlag: t.shapeFlag,
    // if the vnode is cloned with extra props, we can no longer assume its
    // existing patch flag to be reliable and need to add the FULL_PROPS flag.
    // note: preserve flag for fragments since they use the flag for children
    // fast paths only.
    patchFlag: e && t.type !== sr ? i === -1 ? 16 : i | 16 : i,
    dynamicProps: t.dynamicProps,
    dynamicChildren: t.dynamicChildren,
    appContext: t.appContext,
    dirs: t.dirs,
    transition: t.transition,
    // These should technically only be non-null on mounted VNodes. However,
    // they *should* be copied for kept-alive vnodes. So we just always copy
    // them since them being non-null during a mount doesn't affect the logic as
    // they will simply be overwritten.
    component: t.component,
    suspense: t.suspense,
    ssContent: t.ssContent && be(t.ssContent),
    ssFallback: t.ssFallback && be(t.ssFallback),
    el: t.el,
    anchor: t.anchor,
    ctx: t.ctx,
    ce: t.ce
  };
}
function Ti(t) {
  const e = be(t);
  return W(t.children) && (e.children = t.children.map(Ti)), e;
}
function Hu(t = " ", e = 0) {
  return Ft(Ni, null, t, e);
}
function so(t = "", e = !1) {
  return e ? (ae(), Ci(ue, null, t)) : Ft(ue, null, t);
}
function Ju(t) {
  return t == null || typeof t == "boolean" ? Ft(ue) : W(t) ? Ft(
    sr,
    null,
    // #3666, avoid reference pollution when reusing vnode
    t.slice()
  ) : typeof t == "object" ? Wu(t) : Ft(Ni, null, String(t));
}
function Wu(t) {
  return t.el === null && t.patchFlag !== -1 || t.memo ? t : be(t);
}
function cr(t, e) {
  let n = 0;
  const { shapeFlag: r } = t;
  if (e == null)
    e = null;
  else if (W(e))
    n = 16;
  else if (typeof e == "object")
    if (r & 65) {
      const o = e.default;
      o && (o._c && (o._d = !1), cr(t, o()), o._c && (o._d = !0));
      return;
    } else {
      n = 32;
      const o = e._;
      !o && !(Ri in e) ? e._ctx = Ot : o === 3 && Ot && (Ot.slots._ === 1 ? e._ = 1 : (e._ = 2, t.patchFlag |= 1024));
    }
  else
    G(e) ? (e = { default: e, _ctx: Ot }, n = 32) : (e = String(e), r & 64 ? (n = 16, e = [Hu(e)]) : n = 8);
  t.children = e, t.shapeFlag |= n;
}
function Ku(...t) {
  const e = {};
  for (let n = 0; n < t.length; n++) {
    const r = t[n];
    for (const o in r)
      if (o === "class")
        e.class !== r.class && (e.class = oe([e.class, r.class]));
      else if (o === "style")
        e.style = Qn([e.style, r.style]);
      else if (Xa(o)) {
        const i = e[o], s = r[o];
        s && i !== s && !(W(i) && i.includes(s)) && (e[o] = i ? [].concat(i, s) : s);
      } else
        o !== "" && (e[o] = r[o]);
  }
  return e;
}
let ot = null;
const Gu = () => ot || Ot;
let ur, Zt, ao = "__VUE_INSTANCE_SETTERS__";
(Zt = Tn()[ao]) || (Zt = Tn()[ao] = []), Zt.push((t) => ot = t), ur = (t) => {
  Zt.length > 1 ? Zt.forEach((e) => e(t)) : Zt[0](t);
};
const Qe = (t) => {
  ur(t), t.scope.on();
}, lr = () => {
  ot && ot.scope.off(), ur(null);
};
let Yu = !1;
function Qu(t, e, n) {
  G(e) ? t.type.__ssrInlineRender ? t.ssrRender = e : t.render = e : X(e) ? (process.env.NODE_ENV !== "production" && ar(e) && J(
    "setup() should not return VNodes directly - return a render function instead."
  ), process.env.NODE_ENV !== "production" && (t.devtoolsRawSetupState = e), t.setupState = Lc(e), process.env.NODE_ENV !== "production" && Mu(t)) : process.env.NODE_ENV !== "production" && e !== void 0 && J(
    `setup() should return an object. Received: ${e === null ? "null" : typeof e}`
  ), Xu(t, n);
}
let co;
function Xu(t, e, n) {
  const r = t.type;
  if (!t.render) {
    if (!e && co && !r.render) {
      const o = r.template || xi(t).template;
      if (o) {
        process.env.NODE_ENV !== "production" && Vu(t, "compile");
        const { isCustomElement: i, compilerOptions: s } = t.appContext.config, { delimiters: a, compilerOptions: u } = r, d = dt(
          dt(
            {
              isCustomElement: i,
              delimiters: a
            },
            s
          ),
          u
        );
        r.render = co(o, d), process.env.NODE_ENV !== "production" && Uu(t, "compile");
      }
    }
    t.render = r.render || ht;
  }
  Qe(t), cn(), Au(t), un(), lr(), process.env.NODE_ENV !== "production" && !r.render && t.render === ht && !e && (r.template ? J(
    'Component provided template option but runtime compilation is not supported in this build of Vue. Configure your bundler to alias "vue" to "vue/dist/vue.esm-bundler.js".'
    /* should not happen */
  ) : J("Component is missing template or render function."));
}
const Zu = /(?:^|[-_])(\w)/g, tl = (t) => t.replace(Zu, (e) => e.toUpperCase()).replace(/[-_]/g, "");
function Ai(t, e = !0) {
  return G(t) ? t.displayName || t.name : t.name || e && t.__name;
}
function dr(t, e, n = !1) {
  let r = Ai(e);
  if (!r && e.__file) {
    const o = e.__file.match(/([^/\\]+)\.\w+$/);
    o && (r = o[1]);
  }
  if (!r && t && t.parent) {
    const o = (i) => {
      for (const s in i)
        if (i[s] === e)
          return s;
    };
    r = o(
      t.components || t.parent.type.components
    ) || o(t.appContext.components);
  }
  return r ? tl(r) : n ? "App" : "Anonymous";
}
function Bi(t) {
  return G(t) && "__vccOpts" in t;
}
const el = (t, e) => jc(t, e, Yu);
function On(t) {
  return !!(t && t.__v_isShallow);
}
function nl() {
  if (process.env.NODE_ENV === "production" || typeof window > "u")
    return;
  const t = { style: "color:#3ba776" }, e = { style: "color:#0b1bc9" }, n = { style: "color:#b62e24" }, r = { style: "color:#9d288c" }, o = {
    header(c) {
      return X(c) ? c.__isVue ? ["div", t, "VueInstance"] : ct(c) ? [
        "div",
        {},
        ["span", t, h(c)],
        "<",
        a(c.value),
        ">"
      ] : Wt(c) ? [
        "div",
        {},
        ["span", t, On(c) ? "ShallowReactive" : "Reactive"],
        "<",
        a(c),
        `>${Yt(c) ? " (readonly)" : ""}`
      ] : Yt(c) ? [
        "div",
        {},
        ["span", t, On(c) ? "ShallowReadonly" : "Readonly"],
        "<",
        a(c),
        ">"
      ] : null : null;
    },
    hasBody(c) {
      return c && c.__isVue;
    },
    body(c) {
      if (c && c.__isVue)
        return [
          "div",
          {},
          ...i(c.$)
        ];
    }
  };
  function i(c) {
    const w = [];
    c.type.props && c.props && w.push(s("props", H(c.props))), c.setupState !== Pn && w.push(s("setup", c.setupState)), c.data !== Pn && w.push(s("data", H(c.data)));
    const C = u(c, "computed");
    C && w.push(s("computed", C));
    const N = u(c, "inject");
    return N && w.push(s("injected", N)), w.push([
      "div",
      {},
      [
        "span",
        {
          style: r.style + ";opacity:0.66"
        },
        "$ (internal): "
      ],
      ["object", { object: c }]
    ]), w;
  }
  function s(c, w) {
    return w = dt({}, w), Object.keys(w).length ? [
      "div",
      { style: "line-height:1.25em;margin-bottom:0.6em" },
      [
        "div",
        {
          style: "color:#476582"
        },
        c
      ],
      [
        "div",
        {
          style: "padding-left:1.25em"
        },
        ...Object.keys(w).map((C) => [
          "div",
          {},
          ["span", r, C + ": "],
          a(w[C], !1)
        ])
      ]
    ] : ["span", {}];
  }
  function a(c, w = !0) {
    return typeof c == "number" ? ["span", e, c] : typeof c == "string" ? ["span", n, JSON.stringify(c)] : typeof c == "boolean" ? ["span", r, c] : X(c) ? ["object", { object: w ? H(c) : c }] : ["span", n, String(c)];
  }
  function u(c, w) {
    const C = c.type;
    if (G(C))
      return;
    const N = {};
    for (const A in c.ctx)
      d(C, A, w) && (N[A] = c.ctx[A]);
    return N;
  }
  function d(c, w, C) {
    const N = c[C];
    if (W(N) && N.includes(w) || X(N) && w in N || c.extends && d(c.extends, w, C) || c.mixins && c.mixins.some((A) => d(A, w, C)))
      return !0;
  }
  function h(c) {
    return On(c) ? "ShallowRef" : c.effect ? "ComputedRef" : "Ref";
  }
  window.devtoolsFormatters ? window.devtoolsFormatters.push(o) : window.devtoolsFormatters = [o];
}
function rl() {
  nl();
}
process.env.NODE_ENV !== "production" && rl();
const Sn = {
  numeric: "Numeric",
  alphanumeric: "Alphanumeric",
  byte: "Byte",
  kanji: "Kanji"
};
function ol(t) {
  switch (!0) {
    case /^[0-9]*$/.test(t):
      return Sn.numeric;
    case /^[0-9A-Z $%*+\-./:]*$/.test(t):
      return Sn.alphanumeric;
    default:
      return Sn.byte;
  }
}
const Ae = (t) => !!t && typeof t == "object" && !Array.isArray(t);
function Xe(t, ...e) {
  if (!e.length)
    return t;
  const n = e.shift();
  return n === void 0 || !Ae(t) || !Ae(n) ? t : (t = { ...t }, Object.keys(n).forEach((r) => {
    const o = t[r], i = n[r];
    Array.isArray(o) && Array.isArray(i) ? t[r] = i : Ae(o) && Ae(i) ? t[r] = Xe(Object.assign({}, o), i) : t[r] = i;
  }), Xe(t, ...e));
}
function il(t, e) {
  const n = document.createElement("a");
  n.download = e, n.href = t, document.body.appendChild(n), n.click(), document.body.removeChild(n);
}
function sl({
  originalHeight: t,
  originalWidth: e,
  maxHiddenDots: n,
  maxHiddenAxisDots: r,
  dotSize: o
}) {
  const i = { x: 0, y: 0 }, s = { x: 0, y: 0 };
  if (t <= 0 || e <= 0 || n <= 0 || o <= 0)
    return {
      height: 0,
      width: 0,
      hideYDots: 0,
      hideXDots: 0
    };
  const a = t / e;
  return i.x = Math.floor(Math.sqrt(n / a)), i.x <= 0 && (i.x = 1), r && r < i.x && (i.x = r), i.x % 2 === 0 && i.x--, s.x = i.x * o, i.y = 1 + 2 * Math.ceil((i.x * a - 1) / 2), s.y = Math.round(s.x * a), (i.y * i.x > n || r && r < i.y) && (r && r < i.y ? (i.y = r, i.y % 2 === 0 && i.x--) : i.y -= 2, s.y = i.y * o, i.x = 1 + 2 * Math.ceil((i.y / a - 1) / 2), s.x = Math.round(s.y / a)), {
    height: s.y,
    width: s.x,
    hideYDots: i.y,
    hideXDots: i.x
  };
}
const al = {
  L: 0.07,
  M: 0.15,
  Q: 0.25,
  H: 0.3
}, te = {
  dots: "dots",
  rounded: "rounded",
  classy: "classy",
  classyRounded: "classy-rounded",
  square: "square",
  extraRounded: "extra-rounded"
};
class xn {
  constructor({ context: e, type: n }) {
    at(this, "_context"), at(this, "_type"), this._context = e, this._type = n;
  }
  draw(e, n, r, o) {
    const i = this._context, s = this._type;
    let a;
    switch (s) {
      case te.dots:
        a = this._drawDot;
        break;
      case te.classy:
        a = this._drawClassy;
        break;
      case te.classyRounded:
        a = this._drawClassyRounded;
        break;
      case te.rounded:
        a = this._drawRounded;
        break;
      case te.extraRounded:
        a = this._drawExtraRounded;
        break;
      case te.square:
      default:
        a = this._drawSquare;
    }
    a.call(this, { x: e, y: n, size: r, context: i, getNeighbor: o });
  }
  _rotateFigure({ x: e, y: n, size: r, context: o, rotation: i, draw: s }) {
    const a = e + r / 2, u = n + r / 2;
    o.translate(a, u), i && o.rotate(i), s(), o.closePath(), i && o.rotate(-i), o.translate(-a, -u);
  }
  _basicDot(e) {
    const { size: n, context: r } = e;
    this._rotateFigure({
      ...e,
      draw: () => {
        r.moveTo(0, 0), r.arc(0, 0, n / 2, 0, Math.PI * 2);
      }
    });
  }
  _basicSquare(e) {
    const { size: n, context: r } = e;
    this._rotateFigure({
      ...e,
      draw: () => {
        r.moveTo(0, 0), r.rect(-n / 2, -n / 2, n, n);
      }
    });
  }
  // if rotation === 0 - right side is rounded
  _basicSideRounded(e) {
    const { size: n, context: r } = e;
    this._rotateFigure({
      ...e,
      draw: () => {
        r.moveTo(0, 0), r.arc(0, 0, n / 2, -Math.PI / 2, Math.PI / 2), r.lineTo(-n / 2, n / 2), r.lineTo(-n / 2, -n / 2), r.lineTo(0, -n / 2);
      }
    });
  }
  // if rotation === 0 - top right corner is rounded
  _basicCornerRounded(e) {
    const { size: n, context: r } = e;
    this._rotateFigure({
      ...e,
      draw: () => {
        r.moveTo(0, 0), r.arc(0, 0, n / 2, -Math.PI / 2, 0), r.lineTo(n / 2, n / 2), r.lineTo(-n / 2, n / 2), r.lineTo(-n / 2, -n / 2), r.lineTo(0, -n / 2);
      }
    });
  }
  // if rotation === 0 - top right corner is rounded
  _basicCornerExtraRounded(e) {
    const { size: n, context: r } = e;
    this._rotateFigure({
      ...e,
      draw: () => {
        r.moveTo(0, 0), r.arc(-n / 2, n / 2, n, -Math.PI / 2, 0), r.lineTo(-n / 2, n / 2), r.lineTo(-n / 2, -n / 2);
      }
    });
  }
  _basicCornersRounded(e) {
    const { size: n, context: r } = e;
    this._rotateFigure({
      ...e,
      draw: () => {
        r.moveTo(0, 0), r.arc(0, 0, n / 2, -Math.PI / 2, 0), r.lineTo(n / 2, n / 2), r.lineTo(0, n / 2), r.arc(0, 0, n / 2, Math.PI / 2, Math.PI), r.lineTo(-n / 2, -n / 2), r.lineTo(0, -n / 2);
      }
    });
  }
  _basicCornersExtraRounded(e) {
    const { size: n, context: r } = e;
    this._rotateFigure({
      ...e,
      draw: () => {
        r.moveTo(0, 0), r.arc(-n / 2, n / 2, n, -Math.PI / 2, 0), r.arc(n / 2, -n / 2, n, Math.PI / 2, Math.PI);
      }
    });
  }
  _drawDot({ x: e, y: n, size: r, context: o }) {
    this._basicDot({ x: e, y: n, size: r, context: o, rotation: 0 });
  }
  _drawSquare({ x: e, y: n, size: r, context: o }) {
    this._basicSquare({ x: e, y: n, size: r, context: o, rotation: 0 });
  }
  _drawRounded({ x: e, y: n, size: r, context: o, getNeighbor: i }) {
    const s = +i(-1, 0), a = +i(1, 0), u = +i(0, -1), d = +i(0, 1), h = s + a + u + d;
    if (h === 0) {
      this._basicDot({ x: e, y: n, size: r, context: o, rotation: 0 });
      return;
    }
    if (h > 2 || s && a || u && d) {
      this._basicSquare({ x: e, y: n, size: r, context: o, rotation: 0 });
      return;
    }
    if (h === 2) {
      let c = 0;
      s && u ? c = Math.PI / 2 : u && a ? c = Math.PI : a && d && (c = -Math.PI / 2), this._basicCornerRounded({ x: e, y: n, size: r, context: o, rotation: c });
      return;
    }
    if (h === 1) {
      let c = 0;
      u ? c = Math.PI / 2 : a ? c = Math.PI : d && (c = -Math.PI / 2), this._basicSideRounded({ x: e, y: n, size: r, context: o, rotation: c });
    }
  }
  _drawExtraRounded({ x: e, y: n, size: r, context: o, getNeighbor: i }) {
    const s = +i(-1, 0), a = +i(1, 0), u = +i(0, -1), d = +i(0, 1), h = s + a + u + d;
    if (h === 0) {
      this._basicDot({ x: e, y: n, size: r, context: o, rotation: 0 });
      return;
    }
    if (h > 2 || s && a || u && d) {
      this._basicSquare({ x: e, y: n, size: r, context: o, rotation: 0 });
      return;
    }
    if (h === 2) {
      let c = 0;
      s && u ? c = Math.PI / 2 : u && a ? c = Math.PI : a && d && (c = -Math.PI / 2), this._basicCornerExtraRounded({ x: e, y: n, size: r, context: o, rotation: c });
      return;
    }
    if (h === 1) {
      let c = 0;
      u ? c = Math.PI / 2 : a ? c = Math.PI : d && (c = -Math.PI / 2), this._basicSideRounded({ x: e, y: n, size: r, context: o, rotation: c });
    }
  }
  _drawClassy({ x: e, y: n, size: r, context: o, getNeighbor: i }) {
    const s = +i(-1, 0), a = +i(1, 0), u = +i(0, -1), d = +i(0, 1);
    if (s + a + u + d === 0) {
      this._basicCornersRounded({ x: e, y: n, size: r, context: o, rotation: Math.PI / 2 });
      return;
    }
    if (!s && !u) {
      this._basicCornerRounded({ x: e, y: n, size: r, context: o, rotation: -Math.PI / 2 });
      return;
    }
    if (!a && !d) {
      this._basicCornerRounded({ x: e, y: n, size: r, context: o, rotation: Math.PI / 2 });
      return;
    }
    this._basicSquare({ x: e, y: n, size: r, context: o, rotation: 0 });
  }
  _drawClassyRounded({ x: e, y: n, size: r, context: o, getNeighbor: i }) {
    const s = +i(-1, 0), a = +i(1, 0), u = +i(0, -1), d = +i(0, 1);
    if (s + a + u + d === 0) {
      this._basicCornersRounded({ x: e, y: n, size: r, context: o, rotation: Math.PI / 2 });
      return;
    }
    if (!s && !u) {
      this._basicCornerExtraRounded({ x: e, y: n, size: r, context: o, rotation: -Math.PI / 2 });
      return;
    }
    if (!a && !d) {
      this._basicCornerExtraRounded({ x: e, y: n, size: r, context: o, rotation: Math.PI / 2 });
      return;
    }
    this._basicSquare({ x: e, y: n, size: r, context: o, rotation: 0 });
  }
}
const Nn = {
  dot: "dot",
  square: "square",
  extraRounded: "extra-rounded"
};
class cl {
  constructor({ context: e, type: n }) {
    at(this, "_context"), at(this, "_type"), this._context = e, this._type = n;
  }
  draw(e, n, r, o) {
    const i = this._context, s = this._type;
    let a;
    switch (s) {
      case Nn.square:
        a = this._drawSquare;
        break;
      case Nn.extraRounded:
        a = this._drawExtraRounded;
        break;
      case Nn.dot:
      default:
        a = this._drawDot;
    }
    a.call(this, { x: e, y: n, size: r, context: i, rotation: o });
  }
  _rotateFigure({ x: e, y: n, size: r, context: o, rotation: i, draw: s }) {
    const a = e + r / 2, u = n + r / 2;
    o.translate(a, u), i && o.rotate(i), s(), o.closePath(), i && o.rotate(-i), o.translate(-a, -u);
  }
  _basicDot(e) {
    const { size: n, context: r } = e, o = n / 7;
    this._rotateFigure({
      ...e,
      draw: () => {
        r.arc(0, 0, n / 2, 0, Math.PI * 2), r.arc(0, 0, n / 2 - o, 0, Math.PI * 2);
      }
    });
  }
  _basicSquare(e) {
    const { size: n, context: r } = e, o = n / 7;
    this._rotateFigure({
      ...e,
      draw: () => {
        r.rect(-n / 2, -n / 2, n, n), r.rect(-n / 2 + o, -n / 2 + o, n - 2 * o, n - 2 * o);
      }
    });
  }
  _basicExtraRounded(e) {
    const { size: n, context: r } = e, o = n / 7;
    this._rotateFigure({
      ...e,
      draw: () => {
        r.arc(-o, -o, 2.5 * o, Math.PI, -Math.PI / 2), r.lineTo(o, -3.5 * o), r.arc(o, -o, 2.5 * o, -Math.PI / 2, 0), r.lineTo(3.5 * o, -o), r.arc(o, o, 2.5 * o, 0, Math.PI / 2), r.lineTo(-o, 3.5 * o), r.arc(-o, o, 2.5 * o, Math.PI / 2, Math.PI), r.lineTo(-3.5 * o, -o), r.arc(-o, -o, 1.5 * o, Math.PI, -Math.PI / 2), r.lineTo(o, -2.5 * o), r.arc(o, -o, 1.5 * o, -Math.PI / 2, 0), r.lineTo(2.5 * o, -o), r.arc(o, o, 1.5 * o, 0, Math.PI / 2), r.lineTo(-o, 2.5 * o), r.arc(-o, o, 1.5 * o, Math.PI / 2, Math.PI), r.lineTo(-2.5 * o, -o);
      }
    });
  }
  _drawDot({ x: e, y: n, size: r, context: o, rotation: i }) {
    this._basicDot({ x: e, y: n, size: r, context: o, rotation: i });
  }
  _drawSquare({ x: e, y: n, size: r, context: o, rotation: i }) {
    this._basicSquare({ x: e, y: n, size: r, context: o, rotation: i });
  }
  _drawExtraRounded({ x: e, y: n, size: r, context: o, rotation: i }) {
    this._basicExtraRounded({ x: e, y: n, size: r, context: o, rotation: i });
  }
}
const uo = {
  dot: "dot",
  square: "square"
};
class ul {
  constructor({ context: e, type: n }) {
    at(this, "_context"), at(this, "_type"), this._context = e, this._type = n;
  }
  draw(e, n, r, o) {
    const i = this._context;
    switch (this._type) {
      case uo.square:
        this._drawSquare({ x: e, y: n, size: r, context: i, rotation: o });
        break;
      case uo.dot:
      default:
        this._drawDot({ x: e, y: n, size: r, context: i, rotation: o });
    }
  }
  _rotateFigure({ x: e, y: n, size: r, context: o, rotation: i, draw: s }) {
    const a = e + r / 2, u = n + r / 2;
    o.moveTo(0, 0), o.translate(a, u), i && o.rotate(i), s(), o.closePath(), i && o.rotate(-i), o.translate(-a, -u);
  }
  _drawDot(e) {
    const { size: n, context: r } = e;
    this._rotateFigure({
      ...e,
      draw: () => {
        r.moveTo(0, 0), r.arc(0, 0, n / 2, 0, Math.PI * 2);
      }
    });
  }
  _drawSquare(e) {
    const { size: n, context: r } = e;
    this._rotateFigure({
      ...e,
      draw: () => {
        r.moveTo(0, 0), r.rect(-n / 2, -n / 2, n, n);
      }
    });
  }
}
const ll = {
  radial: "radial",
  linear: "linear"
}, qt = [
  [1, 1, 1, 1, 1, 1, 1],
  [1, 0, 0, 0, 0, 0, 1],
  [1, 0, 0, 0, 0, 0, 1],
  [1, 0, 0, 0, 0, 0, 1],
  [1, 0, 0, 0, 0, 0, 1],
  [1, 0, 0, 0, 0, 0, 1],
  [1, 1, 1, 1, 1, 1, 1]
], $t = [
  [0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0],
  [0, 0, 1, 1, 1, 0, 0],
  [0, 0, 1, 1, 1, 0, 0],
  [0, 0, 1, 1, 1, 0, 0],
  [0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0]
];
class dl {
  // TODO don't pass all options to this class
  constructor(e) {
    at(this, "_canvas"), at(this, "_options"), at(this, "_qr"), at(this, "_image"), this._canvas = document.createElement("canvas"), this._canvas.width = e.width, this._canvas.height = e.height, this._options = e;
  }
  get context() {
    return this._canvas.getContext("2d");
  }
  get width() {
    return this._canvas.width;
  }
  get height() {
    return this._canvas.height;
  }
  getCanvas() {
    return this._canvas;
  }
  clear() {
    const e = this.context;
    e && e.clearRect(0, 0, this._canvas.width, this._canvas.height);
  }
  async drawQR(e) {
    const n = e.getModuleCount(), r = Math.min(this._options.width, this._options.height) - this._options.margin * 2, o = Math.floor(r / n);
    let i = {
      hideXDots: 0,
      hideYDots: 0,
      width: 0,
      height: 0
    };
    if (this._qr = e, this._options.image) {
      if (await this.loadImage(), !this._image)
        return;
      const { imageOptions: s, qrOptions: a } = this._options, u = s.imageSize * al[a.errorCorrectionLevel], d = Math.floor(u * n * n);
      i = sl({
        originalWidth: this._image.width,
        originalHeight: this._image.height,
        maxHiddenDots: d,
        maxHiddenAxisDots: n - 14,
        dotSize: o
      });
    }
    this.clear(), this.drawBackground(), this.drawDots((s, a) => {
      var u, d, h, c, w, C;
      return !(this._options.imageOptions.hideBackgroundDots && s >= (n - i.hideXDots) / 2 && s < (n + i.hideXDots) / 2 && a >= (n - i.hideYDots) / 2 && a < (n + i.hideYDots) / 2 || (u = qt[s]) != null && u[a] || (d = qt[s - n + 7]) != null && d[a] || (h = qt[s]) != null && h[a - n + 7] || (c = $t[s]) != null && c[a] || (w = $t[s - n + 7]) != null && w[a] || (C = $t[s]) != null && C[a - n + 7]);
    }), this.drawCorners(), this._options.image && this.drawImage({ width: i.width, height: i.height, count: n, dotSize: o });
  }
  drawBackground() {
    const e = this.context, n = this._options;
    if (e) {
      if (n.backgroundOptions.gradient) {
        const r = n.backgroundOptions.gradient, o = this._createGradient({
          context: e,
          options: r,
          additionalRotation: 0,
          x: 0,
          y: 0,
          size: this._canvas.width > this._canvas.height ? this._canvas.width : this._canvas.height
        });
        r.colorStops.forEach(({ offset: i, color: s }) => {
          o.addColorStop(i, s);
        }), e.fillStyle = o;
      } else
        n.backgroundOptions.color && (e.fillStyle = n.backgroundOptions.color);
      e.fillRect(0, 0, this._canvas.width, this._canvas.height);
    }
  }
  drawDots(e) {
    if (!this._qr)
      throw "QR code is not defined";
    const n = this.context;
    if (!n)
      throw "QR code is not defined";
    const r = this._options, o = this._qr.getModuleCount();
    if (o > r.width || o > r.height)
      throw "The canvas is too small.";
    const i = Math.min(r.width, r.height) - r.margin * 2, s = Math.floor(i / o), a = Math.floor((r.width - o * s) / 2), u = Math.floor((r.height - o * s) / 2), d = new xn({ context: n, type: r.dotsOptions.type });
    n.beginPath();
    for (let h = 0; h < o; h++)
      for (let c = 0; c < o; c++)
        e && !e(h, c) || this._qr.isDark(h, c) && d.draw(
          a + h * s,
          u + c * s,
          s,
          (w, C) => h + w < 0 || c + C < 0 || h + w >= o || c + C >= o || e && !e(h + w, c + C) ? !1 : !!this._qr && this._qr.isDark(h + w, c + C)
        );
    if (r.dotsOptions.gradient) {
      const h = r.dotsOptions.gradient, c = this._createGradient({
        context: n,
        options: h,
        additionalRotation: 0,
        x: a,
        y: u,
        size: o * s
      });
      h.colorStops.forEach(({ offset: w, color: C }) => {
        c.addColorStop(w, C);
      }), n.fillStyle = n.strokeStyle = c;
    } else
      r.dotsOptions.color && (n.fillStyle = n.strokeStyle = r.dotsOptions.color);
    n.fill("evenodd");
  }
  drawCorners(e) {
    if (!this._qr)
      throw "QR code is not defined";
    const n = this.context;
    if (!n)
      throw "QR code is not defined";
    const r = this._options, o = this._qr.getModuleCount(), i = Math.min(r.width, r.height) - r.margin * 2, s = Math.floor(i / o), a = s * 7, u = s * 3, d = Math.floor((r.width - o * s) / 2), h = Math.floor((r.height - o * s) / 2);
    [
      [0, 0, 0],
      [1, 0, Math.PI / 2],
      [0, 1, -Math.PI / 2]
    ].forEach(([c, w, C]) => {
      var N, A, $, q, V, U, L, O, P, b;
      if (e && !e(c, w))
        return;
      const g = d + c * s * (o - 7), p = h + w * s * (o - 7);
      if ((N = r.cornersSquareOptions) != null && N.type) {
        const v = new cl({ context: n, type: (A = r.cornersSquareOptions) == null ? void 0 : A.type });
        n.beginPath(), v.draw(g, p, a, C);
      } else {
        const v = new xn({ context: n, type: r.dotsOptions.type });
        n.beginPath();
        for (let f = 0; f < qt.length; f++)
          for (let l = 0; l < qt[f].length; l++)
            ($ = qt[f]) != null && $[l] && v.draw(
              g + f * s,
              p + l * s,
              s,
              (k, x) => {
                var m;
                return !!((m = qt[f + k]) != null && m[l + x]);
              }
            );
      }
      if ((q = r.cornersSquareOptions) != null && q.gradient) {
        const v = r.cornersSquareOptions.gradient, f = this._createGradient({
          context: n,
          options: v,
          additionalRotation: C,
          x: g,
          y: p,
          size: a
        });
        v.colorStops.forEach(({ offset: l, color: k }) => {
          f.addColorStop(l, k);
        }), n.fillStyle = n.strokeStyle = f;
      } else
        (V = r.cornersSquareOptions) != null && V.color && (n.fillStyle = n.strokeStyle = r.cornersSquareOptions.color);
      if (n.fill("evenodd"), (U = r.cornersDotOptions) != null && U.type) {
        const v = new ul({ context: n, type: (L = r.cornersDotOptions) == null ? void 0 : L.type });
        n.beginPath(), v.draw(g + s * 2, p + s * 2, u, C);
      } else {
        const v = new xn({ context: n, type: r.dotsOptions.type });
        n.beginPath();
        for (let f = 0; f < $t.length; f++)
          for (let l = 0; l < $t[f].length; l++)
            (O = $t[f]) != null && O[l] && v.draw(
              g + f * s,
              p + l * s,
              s,
              (k, x) => {
                var m;
                return !!((m = $t[f + k]) != null && m[l + x]);
              }
            );
      }
      if ((P = r.cornersDotOptions) != null && P.gradient) {
        const v = r.cornersDotOptions.gradient, f = this._createGradient({
          context: n,
          options: v,
          additionalRotation: C,
          x: g + s * 2,
          y: p + s * 2,
          size: u
        });
        v.colorStops.forEach(({ offset: l, color: k }) => {
          f.addColorStop(l, k);
        }), n.fillStyle = n.strokeStyle = f;
      } else
        (b = r.cornersDotOptions) != null && b.color && (n.fillStyle = n.strokeStyle = r.cornersDotOptions.color);
      n.fill("evenodd");
    });
  }
  loadImage() {
    return new Promise((e, n) => {
      const r = this._options, o = new Image();
      if (!r.image)
        return n("Image is not defined");
      typeof r.imageOptions.crossOrigin == "string" && (o.crossOrigin = r.imageOptions.crossOrigin), this._image = o, o.onload = () => {
        e();
      }, o.src = r.image;
    });
  }
  drawImage({
    width: e,
    height: n,
    count: r,
    dotSize: o
  }) {
    const i = this.context;
    if (!i)
      throw "canvasContext is not defined";
    if (!this._image)
      throw "image is not defined";
    const s = this._options, a = Math.floor((s.width - r * o) / 2), u = Math.floor((s.height - r * o) / 2), d = a + s.imageOptions.margin + (r * o - e) / 2, h = u + s.imageOptions.margin + (r * o - n) / 2, c = e - s.imageOptions.margin * 2, w = n - s.imageOptions.margin * 2;
    i.drawImage(this._image, d, h, c < 0 ? 0 : c, w < 0 ? 0 : w);
  }
  _createGradient({
    context: e,
    options: n,
    additionalRotation: r,
    x: o,
    y: i,
    size: s
  }) {
    let a;
    if (n.type === ll.radial)
      a = e.createRadialGradient(o + s / 2, i + s / 2, 0, o + s / 2, i + s / 2, s / 2);
    else {
      const u = ((n.rotation || 0) + r) % (2 * Math.PI), d = (u + 2 * Math.PI) % (2 * Math.PI);
      let h = o + s / 2, c = i + s / 2, w = o + s / 2, C = i + s / 2;
      d >= 0 && d <= 0.25 * Math.PI || d > 1.75 * Math.PI && d <= 2 * Math.PI ? (h = h - s / 2, c = c - s / 2 * Math.tan(u), w = w + s / 2, C = C + s / 2 * Math.tan(u)) : d > 0.25 * Math.PI && d <= 0.75 * Math.PI ? (c = c - s / 2, h = h - s / 2 / Math.tan(u), C = C + s / 2, w = w + s / 2 / Math.tan(u)) : d > 0.75 * Math.PI && d <= 1.25 * Math.PI ? (h = h + s / 2, c = c + s / 2 * Math.tan(u), w = w - s / 2, C = C - s / 2 * Math.tan(u)) : d > 1.25 * Math.PI && d <= 1.75 * Math.PI && (c = c + s / 2, h = h + s / 2 / Math.tan(u), C = C - s / 2, w = w - s / 2 / Math.tan(u)), a = e.createLinearGradient(Math.round(h), Math.round(c), Math.round(w), Math.round(C));
    }
    return a;
  }
}
const Ii = {};
for (let t = 0; t <= 40; t++)
  Ii[t] = t;
const fl = {
  L: "L",
  M: "M",
  Q: "Q",
  H: "H"
}, lo = {
  width: 300,
  height: 300,
  data: "",
  margin: 0,
  qrOptions: {
    typeNumber: Ii[0],
    mode: void 0,
    errorCorrectionLevel: fl.Q
  },
  imageOptions: {
    hideBackgroundDots: !0,
    imageSize: 0.4,
    crossOrigin: void 0,
    margin: 0
  },
  dotsOptions: {
    type: "square",
    color: "#000"
  },
  backgroundOptions: {
    color: "#fff"
  }
};
function Be(t) {
  const e = { ...t };
  if (!e.colorStops || !e.colorStops.length)
    throw "Field 'colorStops' is required in gradient";
  return e.rotation ? e.rotation = Number(e.rotation) : e.rotation = 0, e.colorStops = e.colorStops.map((n) => ({
    ...n,
    offset: Number(n.offset)
  })), e;
}
function fo(t) {
  const e = { ...t };
  return e.width = Number(e.width), e.height = Number(e.height), e.margin = Number(e.margin), e.imageOptions = {
    ...e.imageOptions,
    hideBackgroundDots: !!e.imageOptions.hideBackgroundDots,
    imageSize: Number(e.imageOptions.imageSize),
    margin: Number(e.imageOptions.margin)
  }, e.margin > Math.min(e.width, e.height) && (e.margin = Math.min(e.width, e.height)), e.dotsOptions = {
    ...e.dotsOptions
  }, e.dotsOptions.gradient && (e.dotsOptions.gradient = Be(e.dotsOptions.gradient)), e.cornersSquareOptions && (e.cornersSquareOptions = {
    ...e.cornersSquareOptions
  }, e.cornersSquareOptions.gradient && (e.cornersSquareOptions.gradient = Be(e.cornersSquareOptions.gradient))), e.cornersDotOptions && (e.cornersDotOptions = {
    ...e.cornersDotOptions
  }, e.cornersDotOptions.gradient && (e.cornersDotOptions.gradient = Be(e.cornersDotOptions.gradient))), e.backgroundOptions && (e.backgroundOptions = {
    ...e.backgroundOptions
  }, e.backgroundOptions.gradient && (e.backgroundOptions.gradient = Be(e.backgroundOptions.gradient))), e;
}
function pl(t) {
  return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t;
}
var Li = { exports: {} };
(function(t, e) {
  var n = function() {
    var r = function(O, P) {
      var b = 236, g = 17, p = O, v = i[P], f = null, l = 0, k = null, x = [], m = {}, M = function(E, S) {
        l = p * 4 + 17, f = function(y) {
          for (var D = new Array(y), R = 0; R < y; R += 1) {
            D[R] = new Array(y);
            for (var B = 0; B < y; B += 1)
              D[R][B] = null;
          }
          return D;
        }(l), T(0, 0), T(l - 7, 0), T(0, l - 7), et(), Y(), wt(E, S), p >= 7 && lt(E), k == null && (k = ji(p, v, x)), Dt(k, S);
      }, T = function(E, S) {
        for (var y = -1; y <= 7; y += 1)
          if (!(E + y <= -1 || l <= E + y))
            for (var D = -1; D <= 7; D += 1)
              S + D <= -1 || l <= S + D || (0 <= y && y <= 6 && (D == 0 || D == 6) || 0 <= D && D <= 6 && (y == 0 || y == 6) || 2 <= y && y <= 4 && 2 <= D && D <= 4 ? f[E + y][S + D] = !0 : f[E + y][S + D] = !1);
      }, I = function() {
        for (var E = 0, S = 0, y = 0; y < 8; y += 1) {
          M(!0, y);
          var D = a.getLostPoint(m);
          (y == 0 || E > D) && (E = D, S = y);
        }
        return S;
      }, Y = function() {
        for (var E = 8; E < l - 8; E += 1)
          f[E][6] == null && (f[E][6] = E % 2 == 0);
        for (var S = 8; S < l - 8; S += 1)
          f[6][S] == null && (f[6][S] = S % 2 == 0);
      }, et = function() {
        for (var E = a.getPatternPosition(p), S = 0; S < E.length; S += 1)
          for (var y = 0; y < E.length; y += 1) {
            var D = E[S], R = E[y];
            if (f[D][R] == null)
              for (var B = -2; B <= 2; B += 1)
                for (var j = -2; j <= 2; j += 1)
                  B == -2 || B == 2 || j == -2 || j == 2 || B == 0 && j == 0 ? f[D + B][R + j] = !0 : f[D + B][R + j] = !1;
          }
      }, lt = function(E) {
        for (var S = a.getBCHTypeNumber(p), y = 0; y < 18; y += 1) {
          var D = !E && (S >> y & 1) == 1;
          f[Math.floor(y / 3)][y % 3 + l - 8 - 3] = D;
        }
        for (var y = 0; y < 18; y += 1) {
          var D = !E && (S >> y & 1) == 1;
          f[y % 3 + l - 8 - 3][Math.floor(y / 3)] = D;
        }
      }, wt = function(E, S) {
        for (var y = v << 3 | S, D = a.getBCHTypeInfo(y), R = 0; R < 15; R += 1) {
          var B = !E && (D >> R & 1) == 1;
          R < 6 ? f[R][8] = B : R < 8 ? f[R + 1][8] = B : f[l - 15 + R][8] = B;
        }
        for (var R = 0; R < 15; R += 1) {
          var B = !E && (D >> R & 1) == 1;
          R < 8 ? f[8][l - R - 1] = B : R < 9 ? f[8][15 - R - 1 + 1] = B : f[8][15 - R - 1] = B;
        }
        f[l - 8][8] = !E;
      }, Dt = function(E, S) {
        for (var y = -1, D = l - 1, R = 7, B = 0, j = a.getMaskFunction(S), F = l - 1; F > 0; F -= 2)
          for (F == 6 && (F -= 1); ; ) {
            for (var Q = 0; Q < 2; Q += 1)
              if (f[D][F - Q] == null) {
                var Z = !1;
                B < E.length && (Z = (E[B] >>> R & 1) == 1);
                var z = j(D, F - Q);
                z && (Z = !Z), f[D][F - Q] = Z, R -= 1, R == -1 && (B += 1, R = 7);
              }
            if (D += y, D < 0 || l <= D) {
              D -= y, y = -y;
              break;
            }
          }
      }, Qt = function(E, S) {
        for (var y = 0, D = 0, R = 0, B = new Array(S.length), j = new Array(S.length), F = 0; F < S.length; F += 1) {
          var Q = S[F].dataCount, Z = S[F].totalCount - Q;
          D = Math.max(D, Q), R = Math.max(R, Z), B[F] = new Array(Q);
          for (var z = 0; z < B[F].length; z += 1)
            B[F][z] = 255 & E.getBuffer()[z + y];
          y += Q;
          var ft = a.getErrorCorrectPolynomial(Z), pt = d(B[F], ft.getLength() - 1), pr = pt.mod(ft);
          j[F] = new Array(ft.getLength() - 1);
          for (var z = 0; z < j[F].length; z += 1) {
            var hr = z + pr.getLength() - j[F].length;
            j[F][z] = hr >= 0 ? pr.getAt(hr) : 0;
          }
        }
        for (var gr = 0, z = 0; z < S.length; z += 1)
          gr += S[z].totalCount;
        for (var fn = new Array(gr), Se = 0, z = 0; z < D; z += 1)
          for (var F = 0; F < S.length; F += 1)
            z < B[F].length && (fn[Se] = B[F][z], Se += 1);
        for (var z = 0; z < R; z += 1)
          for (var F = 0; F < S.length; F += 1)
            z < j[F].length && (fn[Se] = j[F][z], Se += 1);
        return fn;
      }, ji = function(E, S, y) {
        for (var D = h.getRSBlocks(E, S), R = c(), B = 0; B < y.length; B += 1) {
          var j = y[B];
          R.put(j.getMode(), 4), R.put(j.getLength(), a.getLengthInBits(j.getMode(), E)), j.write(R);
        }
        for (var F = 0, B = 0; B < D.length; B += 1)
          F += D[B].dataCount;
        if (R.getLengthInBits() > F * 8)
          throw "code length overflow. (" + R.getLengthInBits() + ">" + F * 8 + ")";
        for (R.getLengthInBits() + 4 <= F * 8 && R.put(0, 4); R.getLengthInBits() % 8 != 0; )
          R.putBit(!1);
        for (; !(R.getLengthInBits() >= F * 8 || (R.put(b, 8), R.getLengthInBits() >= F * 8)); )
          R.put(g, 8);
        return Qt(R, D);
      };
      m.addData = function(E, S) {
        S = S || "Byte";
        var y = null;
        switch (S) {
          case "Numeric":
            y = w(E);
            break;
          case "Alphanumeric":
            y = C(E);
            break;
          case "Byte":
            y = N(E);
            break;
          case "Kanji":
            y = A(E);
            break;
          default:
            throw "mode:" + S;
        }
        x.push(y), k = null;
      }, m.isDark = function(E, S) {
        if (E < 0 || l <= E || S < 0 || l <= S)
          throw E + "," + S;
        return f[E][S];
      }, m.getModuleCount = function() {
        return l;
      }, m.make = function() {
        if (p < 1) {
          for (var E = 1; E < 40; E++) {
            for (var S = h.getRSBlocks(E, v), y = c(), D = 0; D < x.length; D++) {
              var R = x[D];
              y.put(R.getMode(), 4), y.put(R.getLength(), a.getLengthInBits(R.getMode(), E)), R.write(y);
            }
            for (var B = 0, D = 0; D < S.length; D++)
              B += S[D].dataCount;
            if (y.getLengthInBits() <= B * 8)
              break;
          }
          p = E;
        }
        M(!1, I());
      }, m.createTableTag = function(E, S) {
        E = E || 2, S = typeof S > "u" ? E * 4 : S;
        var y = "";
        y += '<table style="', y += " border-width: 0px; border-style: none;", y += " border-collapse: collapse;", y += " padding: 0px; margin: " + S + "px;", y += '">', y += "<tbody>";
        for (var D = 0; D < m.getModuleCount(); D += 1) {
          y += "<tr>";
          for (var R = 0; R < m.getModuleCount(); R += 1)
            y += '<td style="', y += " border-width: 0px; border-style: none;", y += " border-collapse: collapse;", y += " padding: 0px; margin: 0px;", y += " width: " + E + "px;", y += " height: " + E + "px;", y += " background-color: ", y += m.isDark(D, R) ? "#000000" : "#ffffff", y += ";", y += '"/>';
          y += "</tr>";
        }
        return y += "</tbody>", y += "</table>", y;
      }, m.createSvgTag = function(E, S, y, D) {
        var R = {};
        typeof arguments[0] == "object" && (R = arguments[0], E = R.cellSize, S = R.margin, y = R.alt, D = R.title), E = E || 2, S = typeof S > "u" ? E * 4 : S, y = typeof y == "string" ? { text: y } : y || {}, y.text = y.text || null, y.id = y.text ? y.id || "qrcode-description" : null, D = typeof D == "string" ? { text: D } : D || {}, D.text = D.text || null, D.id = D.text ? D.id || "qrcode-title" : null;
        var B = m.getModuleCount() * E + S * 2, j, F, Q, Z, z = "", ft;
        for (ft = "l" + E + ",0 0," + E + " -" + E + ",0 0,-" + E + "z ", z += '<svg version="1.1" xmlns="http://www.w3.org/2000/svg"', z += R.scalable ? "" : ' width="' + B + 'px" height="' + B + 'px"', z += ' viewBox="0 0 ' + B + " " + B + '" ', z += ' preserveAspectRatio="xMinYMin meet"', z += D.text || y.text ? ' role="img" aria-labelledby="' + Xt([D.id, y.id].join(" ").trim()) + '"' : "", z += ">", z += D.text ? '<title id="' + Xt(D.id) + '">' + Xt(D.text) + "</title>" : "", z += y.text ? '<description id="' + Xt(y.id) + '">' + Xt(y.text) + "</description>" : "", z += '<rect width="100%" height="100%" fill="white" cx="0" cy="0"/>', z += '<path d="', Q = 0; Q < m.getModuleCount(); Q += 1)
          for (Z = Q * E + S, j = 0; j < m.getModuleCount(); j += 1)
            m.isDark(Q, j) && (F = j * E + S, z += "M" + F + "," + Z + ft);
        return z += '" stroke="transparent" fill="black"/>', z += "</svg>", z;
      }, m.createDataURL = function(E, S) {
        E = E || 2, S = typeof S > "u" ? E * 4 : S;
        var y = m.getModuleCount() * E + S * 2, D = S, R = y - S;
        return L(y, y, function(B, j) {
          if (D <= B && B < R && D <= j && j < R) {
            var F = Math.floor((B - D) / E), Q = Math.floor((j - D) / E);
            return m.isDark(Q, F) ? 0 : 1;
          } else
            return 1;
        });
      }, m.createImgTag = function(E, S, y) {
        E = E || 2, S = typeof S > "u" ? E * 4 : S;
        var D = m.getModuleCount() * E + S * 2, R = "";
        return R += "<img", R += ' src="', R += m.createDataURL(E, S), R += '"', R += ' width="', R += D, R += '"', R += ' height="', R += D, R += '"', y && (R += ' alt="', R += Xt(y), R += '"'), R += "/>", R;
      };
      var Xt = function(E) {
        for (var S = "", y = 0; y < E.length; y += 1) {
          var D = E.charAt(y);
          switch (D) {
            case "<":
              S += "&lt;";
              break;
            case ">":
              S += "&gt;";
              break;
            case "&":
              S += "&amp;";
              break;
            case '"':
              S += "&quot;";
              break;
            default:
              S += D;
              break;
          }
        }
        return S;
      }, Vi = function(E) {
        var S = 1;
        E = typeof E > "u" ? S * 2 : E;
        var y = m.getModuleCount() * S + E * 2, D = E, R = y - E, B, j, F, Q, Z, z = {
          "██": "█",
          "█ ": "▀",
          " █": "▄",
          "  ": " "
        }, ft = {
          "██": "▀",
          "█ ": "▀",
          " █": " ",
          "  ": " "
        }, pt = "";
        for (B = 0; B < y; B += 2) {
          for (F = Math.floor((B - D) / S), Q = Math.floor((B + 1 - D) / S), j = 0; j < y; j += 1)
            Z = "█", D <= j && j < R && D <= B && B < R && m.isDark(F, Math.floor((j - D) / S)) && (Z = " "), D <= j && j < R && D <= B + 1 && B + 1 < R && m.isDark(Q, Math.floor((j - D) / S)) ? Z += " " : Z += "█", pt += E < 1 && B + 1 >= R ? ft[Z] : z[Z];
          pt += `
`;
        }
        return y % 2 && E > 0 ? pt.substring(0, pt.length - y - 1) + Array(y + 1).join("▀") : pt.substring(0, pt.length - 1);
      };
      return m.createASCII = function(E, S) {
        if (E = E || 1, E < 2)
          return Vi(S);
        E -= 1, S = typeof S > "u" ? E * 2 : S;
        var y = m.getModuleCount() * E + S * 2, D = S, R = y - S, B, j, F, Q, Z = Array(E + 1).join("██"), z = Array(E + 1).join("  "), ft = "", pt = "";
        for (B = 0; B < y; B += 1) {
          for (F = Math.floor((B - D) / E), pt = "", j = 0; j < y; j += 1)
            Q = 1, D <= j && j < R && D <= B && B < R && m.isDark(F, Math.floor((j - D) / E)) && (Q = 0), pt += Q ? Z : z;
          for (F = 0; F < E; F += 1)
            ft += pt + `
`;
        }
        return ft.substring(0, ft.length - 1);
      }, m.renderTo2dContext = function(E, S) {
        S = S || 2;
        for (var y = m.getModuleCount(), D = 0; D < y; D++)
          for (var R = 0; R < y; R++)
            E.fillStyle = m.isDark(D, R) ? "black" : "white", E.fillRect(D * S, R * S, S, S);
      }, m;
    };
    r.stringToBytesFuncs = {
      default: function(O) {
        for (var P = [], b = 0; b < O.length; b += 1) {
          var g = O.charCodeAt(b);
          P.push(g & 255);
        }
        return P;
      }
    }, r.stringToBytes = r.stringToBytesFuncs.default, r.createStringToBytes = function(O, P) {
      var b = function() {
        for (var p = V(O), v = function() {
          var Y = p.read();
          if (Y == -1)
            throw "eof";
          return Y;
        }, f = 0, l = {}; ; ) {
          var k = p.read();
          if (k == -1)
            break;
          var x = v(), m = v(), M = v(), T = String.fromCharCode(k << 8 | x), I = m << 8 | M;
          l[T] = I, f += 1;
        }
        if (f != P)
          throw f + " != " + P;
        return l;
      }(), g = "?".charCodeAt(0);
      return function(p) {
        for (var v = [], f = 0; f < p.length; f += 1) {
          var l = p.charCodeAt(f);
          if (l < 128)
            v.push(l);
          else {
            var k = b[p.charAt(f)];
            typeof k == "number" ? (k & 255) == k ? v.push(k) : (v.push(k >>> 8), v.push(k & 255)) : v.push(g);
          }
        }
        return v;
      };
    };
    var o = {
      MODE_NUMBER: 1,
      MODE_ALPHA_NUM: 2,
      MODE_8BIT_BYTE: 4,
      MODE_KANJI: 8
    }, i = {
      L: 1,
      M: 0,
      Q: 3,
      H: 2
    }, s = {
      PATTERN000: 0,
      PATTERN001: 1,
      PATTERN010: 2,
      PATTERN011: 3,
      PATTERN100: 4,
      PATTERN101: 5,
      PATTERN110: 6,
      PATTERN111: 7
    }, a = function() {
      var O = [
        [],
        [6, 18],
        [6, 22],
        [6, 26],
        [6, 30],
        [6, 34],
        [6, 22, 38],
        [6, 24, 42],
        [6, 26, 46],
        [6, 28, 50],
        [6, 30, 54],
        [6, 32, 58],
        [6, 34, 62],
        [6, 26, 46, 66],
        [6, 26, 48, 70],
        [6, 26, 50, 74],
        [6, 30, 54, 78],
        [6, 30, 56, 82],
        [6, 30, 58, 86],
        [6, 34, 62, 90],
        [6, 28, 50, 72, 94],
        [6, 26, 50, 74, 98],
        [6, 30, 54, 78, 102],
        [6, 28, 54, 80, 106],
        [6, 32, 58, 84, 110],
        [6, 30, 58, 86, 114],
        [6, 34, 62, 90, 118],
        [6, 26, 50, 74, 98, 122],
        [6, 30, 54, 78, 102, 126],
        [6, 26, 52, 78, 104, 130],
        [6, 30, 56, 82, 108, 134],
        [6, 34, 60, 86, 112, 138],
        [6, 30, 58, 86, 114, 142],
        [6, 34, 62, 90, 118, 146],
        [6, 30, 54, 78, 102, 126, 150],
        [6, 24, 50, 76, 102, 128, 154],
        [6, 28, 54, 80, 106, 132, 158],
        [6, 32, 58, 84, 110, 136, 162],
        [6, 26, 54, 82, 110, 138, 166],
        [6, 30, 58, 86, 114, 142, 170]
      ], P = 1335, b = 7973, g = 21522, p = {}, v = function(f) {
        for (var l = 0; f != 0; )
          l += 1, f >>>= 1;
        return l;
      };
      return p.getBCHTypeInfo = function(f) {
        for (var l = f << 10; v(l) - v(P) >= 0; )
          l ^= P << v(l) - v(P);
        return (f << 10 | l) ^ g;
      }, p.getBCHTypeNumber = function(f) {
        for (var l = f << 12; v(l) - v(b) >= 0; )
          l ^= b << v(l) - v(b);
        return f << 12 | l;
      }, p.getPatternPosition = function(f) {
        return O[f - 1];
      }, p.getMaskFunction = function(f) {
        switch (f) {
          case s.PATTERN000:
            return function(l, k) {
              return (l + k) % 2 == 0;
            };
          case s.PATTERN001:
            return function(l, k) {
              return l % 2 == 0;
            };
          case s.PATTERN010:
            return function(l, k) {
              return k % 3 == 0;
            };
          case s.PATTERN011:
            return function(l, k) {
              return (l + k) % 3 == 0;
            };
          case s.PATTERN100:
            return function(l, k) {
              return (Math.floor(l / 2) + Math.floor(k / 3)) % 2 == 0;
            };
          case s.PATTERN101:
            return function(l, k) {
              return l * k % 2 + l * k % 3 == 0;
            };
          case s.PATTERN110:
            return function(l, k) {
              return (l * k % 2 + l * k % 3) % 2 == 0;
            };
          case s.PATTERN111:
            return function(l, k) {
              return (l * k % 3 + (l + k) % 2) % 2 == 0;
            };
          default:
            throw "bad maskPattern:" + f;
        }
      }, p.getErrorCorrectPolynomial = function(f) {
        for (var l = d([1], 0), k = 0; k < f; k += 1)
          l = l.multiply(d([1, u.gexp(k)], 0));
        return l;
      }, p.getLengthInBits = function(f, l) {
        if (1 <= l && l < 10)
          switch (f) {
            case o.MODE_NUMBER:
              return 10;
            case o.MODE_ALPHA_NUM:
              return 9;
            case o.MODE_8BIT_BYTE:
              return 8;
            case o.MODE_KANJI:
              return 8;
            default:
              throw "mode:" + f;
          }
        else if (l < 27)
          switch (f) {
            case o.MODE_NUMBER:
              return 12;
            case o.MODE_ALPHA_NUM:
              return 11;
            case o.MODE_8BIT_BYTE:
              return 16;
            case o.MODE_KANJI:
              return 10;
            default:
              throw "mode:" + f;
          }
        else if (l < 41)
          switch (f) {
            case o.MODE_NUMBER:
              return 14;
            case o.MODE_ALPHA_NUM:
              return 13;
            case o.MODE_8BIT_BYTE:
              return 16;
            case o.MODE_KANJI:
              return 12;
            default:
              throw "mode:" + f;
          }
        else
          throw "type:" + l;
      }, p.getLostPoint = function(f) {
        for (var l = f.getModuleCount(), k = 0, x = 0; x < l; x += 1)
          for (var m = 0; m < l; m += 1) {
            for (var M = 0, T = f.isDark(x, m), I = -1; I <= 1; I += 1)
              if (!(x + I < 0 || l <= x + I))
                for (var Y = -1; Y <= 1; Y += 1)
                  m + Y < 0 || l <= m + Y || I == 0 && Y == 0 || T == f.isDark(x + I, m + Y) && (M += 1);
            M > 5 && (k += 3 + M - 5);
          }
        for (var x = 0; x < l - 1; x += 1)
          for (var m = 0; m < l - 1; m += 1) {
            var et = 0;
            f.isDark(x, m) && (et += 1), f.isDark(x + 1, m) && (et += 1), f.isDark(x, m + 1) && (et += 1), f.isDark(x + 1, m + 1) && (et += 1), (et == 0 || et == 4) && (k += 3);
          }
        for (var x = 0; x < l; x += 1)
          for (var m = 0; m < l - 6; m += 1)
            f.isDark(x, m) && !f.isDark(x, m + 1) && f.isDark(x, m + 2) && f.isDark(x, m + 3) && f.isDark(x, m + 4) && !f.isDark(x, m + 5) && f.isDark(x, m + 6) && (k += 40);
        for (var m = 0; m < l; m += 1)
          for (var x = 0; x < l - 6; x += 1)
            f.isDark(x, m) && !f.isDark(x + 1, m) && f.isDark(x + 2, m) && f.isDark(x + 3, m) && f.isDark(x + 4, m) && !f.isDark(x + 5, m) && f.isDark(x + 6, m) && (k += 40);
        for (var lt = 0, m = 0; m < l; m += 1)
          for (var x = 0; x < l; x += 1)
            f.isDark(x, m) && (lt += 1);
        var wt = Math.abs(100 * lt / l / l - 50) / 5;
        return k += wt * 10, k;
      }, p;
    }(), u = function() {
      for (var O = new Array(256), P = new Array(256), b = 0; b < 8; b += 1)
        O[b] = 1 << b;
      for (var b = 8; b < 256; b += 1)
        O[b] = O[b - 4] ^ O[b - 5] ^ O[b - 6] ^ O[b - 8];
      for (var b = 0; b < 255; b += 1)
        P[O[b]] = b;
      var g = {};
      return g.glog = function(p) {
        if (p < 1)
          throw "glog(" + p + ")";
        return P[p];
      }, g.gexp = function(p) {
        for (; p < 0; )
          p += 255;
        for (; p >= 256; )
          p -= 255;
        return O[p];
      }, g;
    }();
    function d(O, P) {
      if (typeof O.length > "u")
        throw O.length + "/" + P;
      var b = function() {
        for (var p = 0; p < O.length && O[p] == 0; )
          p += 1;
        for (var v = new Array(O.length - p + P), f = 0; f < O.length - p; f += 1)
          v[f] = O[f + p];
        return v;
      }(), g = {};
      return g.getAt = function(p) {
        return b[p];
      }, g.getLength = function() {
        return b.length;
      }, g.multiply = function(p) {
        for (var v = new Array(g.getLength() + p.getLength() - 1), f = 0; f < g.getLength(); f += 1)
          for (var l = 0; l < p.getLength(); l += 1)
            v[f + l] ^= u.gexp(u.glog(g.getAt(f)) + u.glog(p.getAt(l)));
        return d(v, 0);
      }, g.mod = function(p) {
        if (g.getLength() - p.getLength() < 0)
          return g;
        for (var v = u.glog(g.getAt(0)) - u.glog(p.getAt(0)), f = new Array(g.getLength()), l = 0; l < g.getLength(); l += 1)
          f[l] = g.getAt(l);
        for (var l = 0; l < p.getLength(); l += 1)
          f[l] ^= u.gexp(u.glog(p.getAt(l)) + v);
        return d(f, 0).mod(p);
      }, g;
    }
    var h = function() {
      var O = [
        // L
        // M
        // Q
        // H
        // 1
        [1, 26, 19],
        [1, 26, 16],
        [1, 26, 13],
        [1, 26, 9],
        // 2
        [1, 44, 34],
        [1, 44, 28],
        [1, 44, 22],
        [1, 44, 16],
        // 3
        [1, 70, 55],
        [1, 70, 44],
        [2, 35, 17],
        [2, 35, 13],
        // 4
        [1, 100, 80],
        [2, 50, 32],
        [2, 50, 24],
        [4, 25, 9],
        // 5
        [1, 134, 108],
        [2, 67, 43],
        [2, 33, 15, 2, 34, 16],
        [2, 33, 11, 2, 34, 12],
        // 6
        [2, 86, 68],
        [4, 43, 27],
        [4, 43, 19],
        [4, 43, 15],
        // 7
        [2, 98, 78],
        [4, 49, 31],
        [2, 32, 14, 4, 33, 15],
        [4, 39, 13, 1, 40, 14],
        // 8
        [2, 121, 97],
        [2, 60, 38, 2, 61, 39],
        [4, 40, 18, 2, 41, 19],
        [4, 40, 14, 2, 41, 15],
        // 9
        [2, 146, 116],
        [3, 58, 36, 2, 59, 37],
        [4, 36, 16, 4, 37, 17],
        [4, 36, 12, 4, 37, 13],
        // 10
        [2, 86, 68, 2, 87, 69],
        [4, 69, 43, 1, 70, 44],
        [6, 43, 19, 2, 44, 20],
        [6, 43, 15, 2, 44, 16],
        // 11
        [4, 101, 81],
        [1, 80, 50, 4, 81, 51],
        [4, 50, 22, 4, 51, 23],
        [3, 36, 12, 8, 37, 13],
        // 12
        [2, 116, 92, 2, 117, 93],
        [6, 58, 36, 2, 59, 37],
        [4, 46, 20, 6, 47, 21],
        [7, 42, 14, 4, 43, 15],
        // 13
        [4, 133, 107],
        [8, 59, 37, 1, 60, 38],
        [8, 44, 20, 4, 45, 21],
        [12, 33, 11, 4, 34, 12],
        // 14
        [3, 145, 115, 1, 146, 116],
        [4, 64, 40, 5, 65, 41],
        [11, 36, 16, 5, 37, 17],
        [11, 36, 12, 5, 37, 13],
        // 15
        [5, 109, 87, 1, 110, 88],
        [5, 65, 41, 5, 66, 42],
        [5, 54, 24, 7, 55, 25],
        [11, 36, 12, 7, 37, 13],
        // 16
        [5, 122, 98, 1, 123, 99],
        [7, 73, 45, 3, 74, 46],
        [15, 43, 19, 2, 44, 20],
        [3, 45, 15, 13, 46, 16],
        // 17
        [1, 135, 107, 5, 136, 108],
        [10, 74, 46, 1, 75, 47],
        [1, 50, 22, 15, 51, 23],
        [2, 42, 14, 17, 43, 15],
        // 18
        [5, 150, 120, 1, 151, 121],
        [9, 69, 43, 4, 70, 44],
        [17, 50, 22, 1, 51, 23],
        [2, 42, 14, 19, 43, 15],
        // 19
        [3, 141, 113, 4, 142, 114],
        [3, 70, 44, 11, 71, 45],
        [17, 47, 21, 4, 48, 22],
        [9, 39, 13, 16, 40, 14],
        // 20
        [3, 135, 107, 5, 136, 108],
        [3, 67, 41, 13, 68, 42],
        [15, 54, 24, 5, 55, 25],
        [15, 43, 15, 10, 44, 16],
        // 21
        [4, 144, 116, 4, 145, 117],
        [17, 68, 42],
        [17, 50, 22, 6, 51, 23],
        [19, 46, 16, 6, 47, 17],
        // 22
        [2, 139, 111, 7, 140, 112],
        [17, 74, 46],
        [7, 54, 24, 16, 55, 25],
        [34, 37, 13],
        // 23
        [4, 151, 121, 5, 152, 122],
        [4, 75, 47, 14, 76, 48],
        [11, 54, 24, 14, 55, 25],
        [16, 45, 15, 14, 46, 16],
        // 24
        [6, 147, 117, 4, 148, 118],
        [6, 73, 45, 14, 74, 46],
        [11, 54, 24, 16, 55, 25],
        [30, 46, 16, 2, 47, 17],
        // 25
        [8, 132, 106, 4, 133, 107],
        [8, 75, 47, 13, 76, 48],
        [7, 54, 24, 22, 55, 25],
        [22, 45, 15, 13, 46, 16],
        // 26
        [10, 142, 114, 2, 143, 115],
        [19, 74, 46, 4, 75, 47],
        [28, 50, 22, 6, 51, 23],
        [33, 46, 16, 4, 47, 17],
        // 27
        [8, 152, 122, 4, 153, 123],
        [22, 73, 45, 3, 74, 46],
        [8, 53, 23, 26, 54, 24],
        [12, 45, 15, 28, 46, 16],
        // 28
        [3, 147, 117, 10, 148, 118],
        [3, 73, 45, 23, 74, 46],
        [4, 54, 24, 31, 55, 25],
        [11, 45, 15, 31, 46, 16],
        // 29
        [7, 146, 116, 7, 147, 117],
        [21, 73, 45, 7, 74, 46],
        [1, 53, 23, 37, 54, 24],
        [19, 45, 15, 26, 46, 16],
        // 30
        [5, 145, 115, 10, 146, 116],
        [19, 75, 47, 10, 76, 48],
        [15, 54, 24, 25, 55, 25],
        [23, 45, 15, 25, 46, 16],
        // 31
        [13, 145, 115, 3, 146, 116],
        [2, 74, 46, 29, 75, 47],
        [42, 54, 24, 1, 55, 25],
        [23, 45, 15, 28, 46, 16],
        // 32
        [17, 145, 115],
        [10, 74, 46, 23, 75, 47],
        [10, 54, 24, 35, 55, 25],
        [19, 45, 15, 35, 46, 16],
        // 33
        [17, 145, 115, 1, 146, 116],
        [14, 74, 46, 21, 75, 47],
        [29, 54, 24, 19, 55, 25],
        [11, 45, 15, 46, 46, 16],
        // 34
        [13, 145, 115, 6, 146, 116],
        [14, 74, 46, 23, 75, 47],
        [44, 54, 24, 7, 55, 25],
        [59, 46, 16, 1, 47, 17],
        // 35
        [12, 151, 121, 7, 152, 122],
        [12, 75, 47, 26, 76, 48],
        [39, 54, 24, 14, 55, 25],
        [22, 45, 15, 41, 46, 16],
        // 36
        [6, 151, 121, 14, 152, 122],
        [6, 75, 47, 34, 76, 48],
        [46, 54, 24, 10, 55, 25],
        [2, 45, 15, 64, 46, 16],
        // 37
        [17, 152, 122, 4, 153, 123],
        [29, 74, 46, 14, 75, 47],
        [49, 54, 24, 10, 55, 25],
        [24, 45, 15, 46, 46, 16],
        // 38
        [4, 152, 122, 18, 153, 123],
        [13, 74, 46, 32, 75, 47],
        [48, 54, 24, 14, 55, 25],
        [42, 45, 15, 32, 46, 16],
        // 39
        [20, 147, 117, 4, 148, 118],
        [40, 75, 47, 7, 76, 48],
        [43, 54, 24, 22, 55, 25],
        [10, 45, 15, 67, 46, 16],
        // 40
        [19, 148, 118, 6, 149, 119],
        [18, 75, 47, 31, 76, 48],
        [34, 54, 24, 34, 55, 25],
        [20, 45, 15, 61, 46, 16]
      ], P = function(p, v) {
        var f = {};
        return f.totalCount = p, f.dataCount = v, f;
      }, b = {}, g = function(p, v) {
        switch (v) {
          case i.L:
            return O[(p - 1) * 4 + 0];
          case i.M:
            return O[(p - 1) * 4 + 1];
          case i.Q:
            return O[(p - 1) * 4 + 2];
          case i.H:
            return O[(p - 1) * 4 + 3];
          default:
            return;
        }
      };
      return b.getRSBlocks = function(p, v) {
        var f = g(p, v);
        if (typeof f > "u")
          throw "bad rs block @ typeNumber:" + p + "/errorCorrectionLevel:" + v;
        for (var l = f.length / 3, k = [], x = 0; x < l; x += 1)
          for (var m = f[x * 3 + 0], M = f[x * 3 + 1], T = f[x * 3 + 2], I = 0; I < m; I += 1)
            k.push(P(M, T));
        return k;
      }, b;
    }(), c = function() {
      var O = [], P = 0, b = {};
      return b.getBuffer = function() {
        return O;
      }, b.getAt = function(g) {
        var p = Math.floor(g / 8);
        return (O[p] >>> 7 - g % 8 & 1) == 1;
      }, b.put = function(g, p) {
        for (var v = 0; v < p; v += 1)
          b.putBit((g >>> p - v - 1 & 1) == 1);
      }, b.getLengthInBits = function() {
        return P;
      }, b.putBit = function(g) {
        var p = Math.floor(P / 8);
        O.length <= p && O.push(0), g && (O[p] |= 128 >>> P % 8), P += 1;
      }, b;
    }, w = function(O) {
      var P = o.MODE_NUMBER, b = O, g = {};
      g.getMode = function() {
        return P;
      }, g.getLength = function(f) {
        return b.length;
      }, g.write = function(f) {
        for (var l = b, k = 0; k + 2 < l.length; )
          f.put(p(l.substring(k, k + 3)), 10), k += 3;
        k < l.length && (l.length - k == 1 ? f.put(p(l.substring(k, k + 1)), 4) : l.length - k == 2 && f.put(p(l.substring(k, k + 2)), 7));
      };
      var p = function(f) {
        for (var l = 0, k = 0; k < f.length; k += 1)
          l = l * 10 + v(f.charAt(k));
        return l;
      }, v = function(f) {
        if ("0" <= f && f <= "9")
          return f.charCodeAt(0) - "0".charCodeAt(0);
        throw "illegal char :" + f;
      };
      return g;
    }, C = function(O) {
      var P = o.MODE_ALPHA_NUM, b = O, g = {};
      g.getMode = function() {
        return P;
      }, g.getLength = function(v) {
        return b.length;
      }, g.write = function(v) {
        for (var f = b, l = 0; l + 1 < f.length; )
          v.put(
            p(f.charAt(l)) * 45 + p(f.charAt(l + 1)),
            11
          ), l += 2;
        l < f.length && v.put(p(f.charAt(l)), 6);
      };
      var p = function(v) {
        if ("0" <= v && v <= "9")
          return v.charCodeAt(0) - "0".charCodeAt(0);
        if ("A" <= v && v <= "Z")
          return v.charCodeAt(0) - "A".charCodeAt(0) + 10;
        switch (v) {
          case " ":
            return 36;
          case "$":
            return 37;
          case "%":
            return 38;
          case "*":
            return 39;
          case "+":
            return 40;
          case "-":
            return 41;
          case ".":
            return 42;
          case "/":
            return 43;
          case ":":
            return 44;
          default:
            throw "illegal char :" + v;
        }
      };
      return g;
    }, N = function(O) {
      var P = o.MODE_8BIT_BYTE, b = r.stringToBytes(O), g = {};
      return g.getMode = function() {
        return P;
      }, g.getLength = function(p) {
        return b.length;
      }, g.write = function(p) {
        for (var v = 0; v < b.length; v += 1)
          p.put(b[v], 8);
      }, g;
    }, A = function(O) {
      var P = o.MODE_KANJI, b = r.stringToBytesFuncs.SJIS;
      if (!b)
        throw "sjis not supported.";
      (function(v, f) {
        var l = b(v);
        if (l.length != 2 || (l[0] << 8 | l[1]) != f)
          throw "sjis not supported.";
      })("友", 38726);
      var g = b(O), p = {};
      return p.getMode = function() {
        return P;
      }, p.getLength = function(v) {
        return ~~(g.length / 2);
      }, p.write = function(v) {
        for (var f = g, l = 0; l + 1 < f.length; ) {
          var k = (255 & f[l]) << 8 | 255 & f[l + 1];
          if (33088 <= k && k <= 40956)
            k -= 33088;
          else if (57408 <= k && k <= 60351)
            k -= 49472;
          else
            throw "illegal char at " + (l + 1) + "/" + k;
          k = (k >>> 8 & 255) * 192 + (k & 255), v.put(k, 13), l += 2;
        }
        if (l < f.length)
          throw "illegal char at " + (l + 1);
      }, p;
    }, $ = function() {
      var O = [], P = {};
      return P.writeByte = function(b) {
        O.push(b & 255);
      }, P.writeShort = function(b) {
        P.writeByte(b), P.writeByte(b >>> 8);
      }, P.writeBytes = function(b, g, p) {
        g = g || 0, p = p || b.length;
        for (var v = 0; v < p; v += 1)
          P.writeByte(b[v + g]);
      }, P.writeString = function(b) {
        for (var g = 0; g < b.length; g += 1)
          P.writeByte(b.charCodeAt(g));
      }, P.toByteArray = function() {
        return O;
      }, P.toString = function() {
        var b = "";
        b += "[";
        for (var g = 0; g < O.length; g += 1)
          g > 0 && (b += ","), b += O[g];
        return b += "]", b;
      }, P;
    }, q = function() {
      var O = 0, P = 0, b = 0, g = "", p = {}, v = function(l) {
        g += String.fromCharCode(f(l & 63));
      }, f = function(l) {
        if (!(l < 0)) {
          if (l < 26)
            return 65 + l;
          if (l < 52)
            return 97 + (l - 26);
          if (l < 62)
            return 48 + (l - 52);
          if (l == 62)
            return 43;
          if (l == 63)
            return 47;
        }
        throw "n:" + l;
      };
      return p.writeByte = function(l) {
        for (O = O << 8 | l & 255, P += 8, b += 1; P >= 6; )
          v(O >>> P - 6), P -= 6;
      }, p.flush = function() {
        if (P > 0 && (v(O << 6 - P), O = 0, P = 0), b % 3 != 0)
          for (var l = 3 - b % 3, k = 0; k < l; k += 1)
            g += "=";
      }, p.toString = function() {
        return g;
      }, p;
    }, V = function(O) {
      var P = O, b = 0, g = 0, p = 0, v = {};
      v.read = function() {
        for (; p < 8; ) {
          if (b >= P.length) {
            if (p == 0)
              return -1;
            throw "unexpected end of file./" + p;
          }
          var l = P.charAt(b);
          if (b += 1, l == "=")
            return p = 0, -1;
          l.match(/^\s$/) || (g = g << 6 | f(l.charCodeAt(0)), p += 6);
        }
        var k = g >>> p - 8 & 255;
        return p -= 8, k;
      };
      var f = function(l) {
        if (65 <= l && l <= 90)
          return l - 65;
        if (97 <= l && l <= 122)
          return l - 97 + 26;
        if (48 <= l && l <= 57)
          return l - 48 + 52;
        if (l == 43)
          return 62;
        if (l == 47)
          return 63;
        throw "c:" + l;
      };
      return v;
    }, U = function(O, P) {
      var b = O, g = P, p = new Array(O * P), v = {};
      v.setPixel = function(x, m, M) {
        p[m * b + x] = M;
      }, v.write = function(x) {
        x.writeString("GIF87a"), x.writeShort(b), x.writeShort(g), x.writeByte(128), x.writeByte(0), x.writeByte(0), x.writeByte(0), x.writeByte(0), x.writeByte(0), x.writeByte(255), x.writeByte(255), x.writeByte(255), x.writeString(","), x.writeShort(0), x.writeShort(0), x.writeShort(b), x.writeShort(g), x.writeByte(0);
        var m = 2, M = l(m);
        x.writeByte(m);
        for (var T = 0; M.length - T > 255; )
          x.writeByte(255), x.writeBytes(M, T, 255), T += 255;
        x.writeByte(M.length - T), x.writeBytes(M, T, M.length - T), x.writeByte(0), x.writeString(";");
      };
      var f = function(x) {
        var m = x, M = 0, T = 0, I = {};
        return I.write = function(Y, et) {
          if (Y >>> et)
            throw "length over";
          for (; M + et >= 8; )
            m.writeByte(255 & (Y << M | T)), et -= 8 - M, Y >>>= 8 - M, T = 0, M = 0;
          T = Y << M | T, M = M + et;
        }, I.flush = function() {
          M > 0 && m.writeByte(T);
        }, I;
      }, l = function(x) {
        for (var m = 1 << x, M = (1 << x) + 1, T = x + 1, I = k(), Y = 0; Y < m; Y += 1)
          I.add(String.fromCharCode(Y));
        I.add(String.fromCharCode(m)), I.add(String.fromCharCode(M));
        var et = $(), lt = f(et);
        lt.write(m, T);
        var wt = 0, Dt = String.fromCharCode(p[wt]);
        for (wt += 1; wt < p.length; ) {
          var Qt = String.fromCharCode(p[wt]);
          wt += 1, I.contains(Dt + Qt) ? Dt = Dt + Qt : (lt.write(I.indexOf(Dt), T), I.size() < 4095 && (I.size() == 1 << T && (T += 1), I.add(Dt + Qt)), Dt = Qt);
        }
        return lt.write(I.indexOf(Dt), T), lt.write(M, T), lt.flush(), et.toByteArray();
      }, k = function() {
        var x = {}, m = 0, M = {};
        return M.add = function(T) {
          if (M.contains(T))
            throw "dup key:" + T;
          x[T] = m, m += 1;
        }, M.size = function() {
          return m;
        }, M.indexOf = function(T) {
          return x[T];
        }, M.contains = function(T) {
          return typeof x[T] < "u";
        }, M;
      };
      return v;
    }, L = function(O, P, b) {
      for (var g = U(O, P), p = 0; p < P; p += 1)
        for (var v = 0; v < O; v += 1)
          g.setPixel(v, p, b(v, p));
      var f = $();
      g.write(f);
      for (var l = q(), k = f.toByteArray(), x = 0; x < k.length; x += 1)
        l.writeByte(k[x]);
      return l.flush(), "data:image/gif;base64," + l;
    };
    return r;
  }();
  (function() {
    n.stringToBytesFuncs["UTF-8"] = function(r) {
      function o(i) {
        for (var s = [], a = 0; a < i.length; a++) {
          var u = i.charCodeAt(a);
          u < 128 ? s.push(u) : u < 2048 ? s.push(
            192 | u >> 6,
            128 | u & 63
          ) : u < 55296 || u >= 57344 ? s.push(
            224 | u >> 12,
            128 | u >> 6 & 63,
            128 | u & 63
          ) : (a++, u = 65536 + ((u & 1023) << 10 | i.charCodeAt(a) & 1023), s.push(
            240 | u >> 18,
            128 | u >> 12 & 63,
            128 | u >> 6 & 63,
            128 | u & 63
          ));
        }
        return s;
      }
      return o(r);
    };
  })(), function(r) {
    t.exports = r();
  }(function() {
    return n;
  });
})(Li);
var hl = Li.exports;
const gl = /* @__PURE__ */ pl(hl);
class fr {
  constructor(e) {
    at(this, "_options"), at(this, "_container"), at(this, "_canvas"), at(this, "_qr"), at(this, "_drawingPromise"), this._options = e ? fo(Xe(lo, e)) : lo, this.update();
  }
  static _clearContainer(e) {
    e && (e.innerHTML = "");
  }
  update(e) {
    fr._clearContainer(this._container), this._options = e ? fo(Xe(this._options, e)) : this._options, this._options.data && (this._qr = gl(this._options.qrOptions.typeNumber, this._options.qrOptions.errorCorrectionLevel), this._qr.addData(this._options.data, this._options.qrOptions.mode || ol(this._options.data)), this._qr.make(), this._canvas = new dl(this._options), this._drawingPromise = this._canvas.drawQR(this._qr), this.append(this._container));
  }
  append(e) {
    if (e) {
      if (typeof e.appendChild != "function")
        throw "Container should be a single DOM node";
      this._canvas && e.appendChild(this._canvas.getCanvas()), this._container = e;
    }
  }
  async getImageUrl(e) {
    return this._drawingPromise && await this._drawingPromise === void 0 && this._canvas ? this._canvas.getCanvas().toDataURL(`image/${e}`) : "";
  }
  download(e) {
    this._drawingPromise && this._drawingPromise.then(() => {
      if (!this._canvas)
        return;
      const n = e, r = n.extension || "png", o = n.name || "qr", i = this._canvas.getCanvas().toDataURL(`image/${r}`);
      il(i, `${o}.${r}`);
    });
  }
}
const ml = ["src"], yl = { key: 1 }, vl = /* @__PURE__ */ _i({
  __name: "QRCodeVue3Async",
  props: {
    value: { default: "" },
    width: { default: 300 },
    height: { default: 300 },
    margin: { default: 0 },
    imgclass: { default: "" },
    myclass: { default: "" },
    downloadButton: { default: "" },
    ButtonName: { default: "Download" },
    qrOptions: { default: {
      typeNumber: 0,
      mode: "Byte",
      errorCorrectionLevel: "Q"
    } },
    imageOptions: { default: { hideBackgroundDots: !0, imageSize: 0.4, margin: 0 } },
    dotsOptions: { default: {
      type: "dots",
      color: "#6a1a4c",
      gradient: {
        type: "linear",
        rotation: 0,
        colorStops: [
          { offset: 0, color: "#6a1a4c" },
          { offset: 1, color: "#6a1a4c" }
        ]
      }
    } },
    backgroundOptions: { default: { color: "#ffffff" } },
    cornersSquareOptions: { default: { type: "dot", color: "#000000" } },
    cornersDotOptions: { default: { type: void 0, color: "#000000" } },
    fileExt: { default: "png" },
    image: { default: "" },
    download: { type: Boolean, default: !1 },
    downloadOptions: { default: { name: "vqr", extension: "png" } }
  },
  async setup(t) {
    let e, n;
    const r = t, o = new fr({
      data: r.value,
      width: r.width,
      height: r.height,
      margin: r.margin,
      qrOptions: r.qrOptions,
      imageOptions: r.imageOptions,
      dotsOptions: r.dotsOptions,
      backgroundOptions: r.backgroundOptions,
      image: r.image,
      cornersSquareOptions: r.cornersSquareOptions,
      cornersDotOptions: r.cornersDotOptions
    });
    let i = ([e, n] = Pu(() => o.getImageUrl(r.fileExt)), e = await e, n(), e);
    function s() {
      o.download(r.downloadOptions);
    }
    return (a, u) => (ae(), bn("div", null, [
      Ve(i) ? (ae(), bn("div", {
        key: 0,
        class: oe(a.myclass)
      }, [
        Ye("img", {
          src: Ve(i),
          class: oe(a.imgclass),
          crossorigin: "anonymous"
        }, null, 10, ml)
      ], 2)) : so("", !0),
      Ve(i) && a.download ? (ae(), bn("div", yl, [
        Ye("button", {
          onClick: s,
          class: oe(a.downloadButton)
        }, sc(a.ButtonName), 3)
      ])) : so("", !0)
    ]));
  }
}), po = /* @__PURE__ */ _i({
  __name: "QRCodeVue3",
  props: {
    value: { default: "" },
    width: { default: 300 },
    height: { default: 300 },
    margin: { default: 0 },
    imgclass: { default: "" },
    myclass: { default: "" },
    downloadButton: { default: "" },
    ButtonName: { default: "Download" },
    qrOptions: { default: {
      typeNumber: 0,
      mode: "Byte",
      errorCorrectionLevel: "Q"
    } },
    imageOptions: { default: { hideBackgroundDots: !0, imageSize: 0.4, margin: 0 } },
    dotsOptions: { default: {
      type: "dots",
      color: "#6a1a4c",
      gradient: {
        type: "linear",
        rotation: 0,
        colorStops: [
          { offset: 0, color: "#6a1a4c" },
          { offset: 1, color: "#6a1a4c" }
        ]
      }
    } },
    backgroundOptions: { default: { color: "#ffffff" } },
    cornersSquareOptions: { default: { type: "dot", color: "#000000" } },
    cornersDotOptions: { default: { type: void 0, color: "#000000" } },
    fileExt: { default: "png" },
    image: { default: "" },
    download: { type: Boolean, default: !1 },
    downloadOptions: { default: { name: "vqr", extension: "png" } }
  },
  setup(t) {
    const e = t;
    return (n, r) => (ae(), Ci(cu, null, {
      default: ou(() => [
        Ft(vl, {
          "background-options": e.backgroundOptions,
          "button-name": e.ButtonName,
          "corners-dot-options": e.cornersDotOptions,
          "corners-square-options": e.cornersSquareOptions,
          "dots-options": e.dotsOptions,
          download: e.download,
          "download-button": e.downloadButton,
          "download-options": e.downloadOptions,
          "file-ext": e.fileExt,
          height: e.height,
          image: e.image,
          "image-options": e.imageOptions,
          imgclass: e.imgclass,
          margin: e.margin,
          value: e.value,
          myclass: e.myclass,
          "qr-options": e.qrOptions,
          width: e.width
        }, null, 8, ["background-options", "button-name", "corners-dot-options", "corners-square-options", "dots-options", "download", "download-button", "download-options", "file-ext", "height", "image", "image-options", "imgclass", "margin", "value", "myclass", "qr-options", "width"])
      ]),
      _: 1
    }));
  }
}), wl = /* @__PURE__ */ yo({
  __name: "Preloader",
  props: {
    width: {
      type: String,
      default: "100%"
    },
    height: {
      type: String,
      default: "10px"
    },
    mobileWidth: String,
    mobileHeight: String,
    disabled: Boolean,
    dark: Boolean
  },
  setup(t) {
    const e = t;
    Wi((s) => ({
      "5fc7d666": e.width,
      "19978b00": e.height,
      "19f800b0": r.value,
      97304866: o.value
    }));
    const n = rt(e.dark ?? !1), r = rt(e.mobileWidth ?? e.width), o = rt(e.mobileHeight ?? e.height), i = rt(null);
    return ho(() => {
      vo(() => {
        if (!e.disabled && i.value !== null) {
          let s = 1.5, a = setInterval(function() {
            s -= 0.1, i.value !== null && (i.value.style.animationDuration = s + "s", s <= 0.8 && clearInterval(a));
          }, 1e4);
        }
      });
    }), (s, a) => (_t(), Tt("div", {
      ref_key: "loader",
      ref: i,
      class: Ki([n.value && "skeleton-loader_dark", !n.value && "skeleton-loader"])
    }, null, 2));
  }
});
const _l = (t, e) => {
  const n = t.__vccOpts || t;
  for (const [r, o] of e)
    n[r] = o;
  return n;
}, Fi = /* @__PURE__ */ _l(wl, [["__scopeId", "data-v-f907348b"]]), bl = { style: { "text-align": "center" } }, El = ["onClick"], Ol = {
  key: 1,
  style: { "text-align": "center" }
}, Sl = ["href"], xl = ["src"], Nl = /* @__PURE__ */ bt("br", null, null, -1), Dl = /* @__PURE__ */ bt("br", null, null, -1), kl = {
  key: 2,
  style: { "text-align": "center" }
}, Cl = ["innerHTML"], Rl = {
  key: 0,
  style: { "text-align": "center" }
}, Ml = /* @__PURE__ */ bt("br", null, null, -1), Pl = ["href"], Tl = ["src"], Al = /* @__PURE__ */ bt("br", null, null, -1), Bl = /* @__PURE__ */ yo({
  __name: "Login",
  props: {
    isMobileScreen: {
      type: Boolean,
      default: !1
    },
    showButton: {
      type: Boolean,
      default: !1
    },
    primaryDark: {
      type: String,
      default: "#c48a56"
    },
    primaryLight: {
      type: String,
      default: "#606C38"
    },
    secondaryDark: {
      type: String,
      default: "#18181b"
    },
    secondaryLight: {
      type: String,
      default: "#ffffff"
    },
    isDark: {
      type: Boolean,
      default: !1
    },
    positionLight: {
      type: String,
      default: "#000000"
    },
    positionDark: {
      type: String,
      default: "#ffffff"
    },
    accentColor: {
      type: String,
      default: "#ffffff"
    },
    logoDark: {
      type: String,
      default: ""
    },
    logoLight: {
      type: String,
      default: ""
    },
    configDev: {
      type: String,
      default: ""
    },
    configProduction: {
      type: String,
      default: ""
    },
    configApp: {
      type: String,
      default: ""
    },
    configLogin: {
      type: String,
      default: ""
    },
    configRequest: {
      type: String,
      default: ""
    },
    configVerify: {
      type: String,
      default: ""
    },
    configConfirm: {
      type: String,
      default: ""
    },
    configLogout: {
      type: String,
      default: ""
    },
    SiteId: {
      type: String,
      default: ""
    }
  },
  setup(t) {
    const e = t, { t: n } = wo(), { IsLoggedIn: r, loginQRCode: o, checkQRLogin: i, success: s, QRCode: a, is_error: u, Message: d, setBase: h, setUrls: c, setRoutes: w, IDSite: C } = Ja(), N = rt(!1);
    ut("locale", "en"), rs(() => {
      C.value = e.SiteId, h(e.configDev, e.configProduction), w(e.configApp, e.configLogin), c(e.configRequest, e.configVerify, e.configConfirm, e.configLogout), r ? i() : o(), vo(() => {
        s.value === !0 ? N.value = !0 : N.value = !1;
      });
    });
    function A() {
      a.value == null || a.value == null || a.value == "" || window.open(a.value, "new_window");
    }
    return ($, q) => (_t(), Tt("div", null, [
      bt("div", null, [
        bt("div", bl, [
          nt(s) && !e.isMobileScreen ? (_t(), Tt("div", {
            key: 0,
            onClick: [
              A,
              Gi(A, ["prevent"])
            ],
            target: "_blank",
            style: { "text-align": "center", cursor: "pointer" }
          }, [
            e.isDark ? (_t(), pn(nt(po), {
              key: nt(a),
              width: 300,
              height: 300,
              value: nt(a),
              image: t.logoDark.length == 0 ? "/assets/nopwd_black.png" : "",
              "qr-options": {
                typeNumber: 0,
                mode: "Byte",
                errorCorrectionLevel: "H"
              },
              "image-options": {
                hideBackgroundDots: !0,
                imageSize: 0.3,
                margin: 10
              },
              "dots-options": {
                type: "dots",
                color: e.primaryDark,
                gradient: {
                  type: "linear",
                  rotation: 0,
                  colorStops: [
                    { offset: 0, color: e.primaryDark },
                    { offset: 1, color: e.primaryDark }
                  ]
                }
              },
              "background-options": { color: e.secondaryDark },
              "corners-square-options": { type: "dot", color: e.positionDark },
              "corners-dot-options": { type: void 0, color: e.positionDark },
              download: !1
            }, null, 8, ["value", "image", "dots-options", "background-options", "corners-square-options", "corners-dot-options"])) : Ut("", !0),
            e.isDark ? Ut("", !0) : (_t(), pn(nt(po), {
              key: nt(a),
              width: 300,
              height: 300,
              value: nt(a),
              image: t.logoDark.length == 0 ? "/assets/nopwd_white.png" : "",
              "qr-options": {
                typeNumber: 0,
                mode: "Byte",
                errorCorrectionLevel: "H"
              },
              "image-options": {
                hideBackgroundDots: !0,
                imageSize: 0.3,
                margin: 10
              },
              "dots-options": {
                type: "dots",
                color: e.primaryLight,
                gradient: {
                  type: "linear",
                  rotation: 0,
                  colorStops: [
                    { offset: 0, color: e.primaryLight },
                    { offset: 1, color: e.primaryLight }
                  ]
                }
              },
              "background-options": { color: e.secondaryLight },
              "corners-square-options": { type: "dot", color: e.positionLight },
              "corners-dot-options": { type: void 0, color: e.positionLight },
              download: !1
            }, null, 8, ["value", "image", "dots-options", "background-options", "corners-square-options", "corners-dot-options"]))
          ], 8, El)) : nt(s) && e.isMobileScreen ? (_t(), Tt("div", Ol, [
            N.value ? (_t(), Tt("button", {
              key: 0,
              style: mr([{ width: "300px", height: "300px" }, [e.isDark ? { backgroundColor: e.primaryDark, color: e.accentColor } : { backgroundColor: e.primaryLight, color: e.accentColor }]]),
              href: nt(a)
            }, [
              bt("img", {
                width: "150",
                src: t.logoDark.length == 0 ? "/assets/nopwd_black.png" : ""
              }, null, 8, xl),
              Nl,
              Dl,
              bt("span", null, yr(nt(n)("auth.login")), 1)
            ], 12, Sl)) : Ut("", !0)
          ])) : nt(s) ? Ut("", !0) : (_t(), Tt("div", kl, [
            nt(u) ? Ut("", !0) : (_t(), pn(Fi, {
              key: 0,
              width: "300px",
              disabled: !1,
              dark: e.isDark,
              height: "300px"
            }, null, 8, ["dark"]))
          ])),
          bt("div", {
            innerHTML: nt(d),
            style: { "text-align": "center" }
          }, null, 8, Cl)
        ])
      ]),
      nt(s) && !e.isMobileScreen && e.showButton ? (_t(), Tt("div", Rl, [
        Ml,
        N.value ? (_t(), Tt("button", {
          key: 0,
          style: mr([{ width: "300px", height: "120px" }, [e.isDark ? { backgroundColor: e.primaryDark, color: e.accentColor } : { backgroundColor: e.primaryLight, color: e.accentColor }]]),
          href: nt(a)
        }, [
          bt("img", {
            width: "80",
            src: t.logoDark.length == 0 ? "/assets/nopwd_black.png" : ""
          }, null, 8, Tl),
          Al,
          bt("span", null, yr(nt(n)("auth.appinstalled")), 1)
        ], 12, Pl)) : Ut("", !0)
      ])) : Ut("", !0)
    ]));
  }
}), Ll = {
  install: (t) => {
    t.component("Login", Bl), t.component("Preloader", Fi);
  }
};
export {
  Bl as Login,
  Fi as Preloader,
  Ll as default,
  Ja as useNoPWD
};
