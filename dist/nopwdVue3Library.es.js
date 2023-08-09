import { ref as re, getCurrentInstance as Vi, onMounted as ho, nextTick as go, unref as ne, getCurrentScope as zi, onScopeDispose as qi, readonly as $i, watch as mo, shallowRef as Hi, inject as Ji, defineComponent as yo, useCssVars as Wi, watchEffect as vo, openBlock as be, createElementBlock as Te, normalizeClass as Ki, createElementVNode as Ee, withModifiers as Gi, createBlock as pn, createCommentVNode as Ve, normalizeStyle as mr, toDisplayString as yr } from "vue";
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
function wo(e = {}) {
  const t = re({ ...Qi, ...e }), n = re("en");
  return { t: (o) => {
    const i = t.value[n.value][o];
    return i === void 0 ? (console.warn(`Translation not found for key: ${o}`), o) : i;
  } };
}
function Xi(e) {
  return zi() ? (qi(e), !0) : !1;
}
function zn(e) {
  return typeof e == "function" ? e() : ne(e);
}
const Zi = typeof window < "u", es = () => {
};
function ts(e, t) {
  function n(...r) {
    return new Promise((o, i) => {
      Promise.resolve(e(() => t.apply(this, r), { fn: t, thisArg: this, args: r })).then(o).catch(i);
    });
  }
  return n;
}
const _o = (e) => e();
function ns(e = _o) {
  const t = re(!0);
  function n() {
    t.value = !1;
  }
  function r() {
    t.value = !0;
  }
  const o = (...i) => {
    t.value && e(...i);
  };
  return { isActive: $i(t), pause: n, resume: r, eventFilter: o };
}
function rs(e, t = !0) {
  Vi() ? ho(e) : t ? e() : go(e);
}
var vr = Object.getOwnPropertySymbols, os = Object.prototype.hasOwnProperty, is = Object.prototype.propertyIsEnumerable, ss = (e, t) => {
  var n = {};
  for (var r in e)
    os.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && vr)
    for (var r of vr(e))
      t.indexOf(r) < 0 && is.call(e, r) && (n[r] = e[r]);
  return n;
};
function as(e, t, n = {}) {
  const r = n, {
    eventFilter: o = _o
  } = r, i = ss(r, [
    "eventFilter"
  ]);
  return mo(
    e,
    ts(
      o,
      t
    ),
    i
  );
}
var cs = Object.defineProperty, us = Object.defineProperties, ls = Object.getOwnPropertyDescriptors, qt = Object.getOwnPropertySymbols, bo = Object.prototype.hasOwnProperty, Eo = Object.prototype.propertyIsEnumerable, wr = (e, t, n) => t in e ? cs(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, ds = (e, t) => {
  for (var n in t || (t = {}))
    bo.call(t, n) && wr(e, n, t[n]);
  if (qt)
    for (var n of qt(t))
      Eo.call(t, n) && wr(e, n, t[n]);
  return e;
}, fs = (e, t) => us(e, ls(t)), ps = (e, t) => {
  var n = {};
  for (var r in e)
    bo.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && qt)
    for (var r of qt(e))
      t.indexOf(r) < 0 && Eo.call(e, r) && (n[r] = e[r]);
  return n;
};
function hs(e, t, n = {}) {
  const r = n, {
    eventFilter: o
  } = r, i = ps(r, [
    "eventFilter"
  ]), { eventFilter: s, pause: a, resume: u, isActive: d } = ns(o);
  return { stop: as(
    e,
    t,
    fs(ds({}, i), {
      eventFilter: s
    })
  ), pause: a, resume: u, isActive: d };
}
function gs(e) {
  var t;
  const n = zn(e);
  return (t = n == null ? void 0 : n.$el) != null ? t : n;
}
const Dn = Zi ? window : void 0;
function _r(...e) {
  let t, n, r, o;
  if (typeof e[0] == "string" || Array.isArray(e[0]) ? ([n, r, o] = e, t = Dn) : [t, n, r, o] = e, !t)
    return es;
  Array.isArray(n) || (n = [n]), Array.isArray(r) || (r = [r]);
  const i = [], s = () => {
    i.forEach((h) => h()), i.length = 0;
  }, a = (h, c, _, k) => (h.addEventListener(c, _, k), () => h.removeEventListener(c, _, k)), u = mo(
    () => [gs(t), zn(o)],
    ([h, c]) => {
      s(), h && i.push(
        ...n.flatMap((_) => r.map((k) => a(h, _, k, c)))
      );
    },
    { immediate: !0, flush: "post" }
  ), d = () => {
    u(), s();
  };
  return Xi(d), d;
}
const xt = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, Nt = "__vueuse_ssr_handlers__", ms = /* @__PURE__ */ ys();
function ys() {
  return Nt in xt || (xt[Nt] = xt[Nt] || {}), xt[Nt];
}
function vs(e, t) {
  return ms[e] || t;
}
function ws(e) {
  return e == null ? "any" : e instanceof Set ? "set" : e instanceof Map ? "map" : e instanceof Date ? "date" : typeof e == "boolean" ? "boolean" : typeof e == "string" ? "string" : typeof e == "object" ? "object" : Number.isNaN(e) ? "any" : "number";
}
var _s = Object.defineProperty, br = Object.getOwnPropertySymbols, bs = Object.prototype.hasOwnProperty, Es = Object.prototype.propertyIsEnumerable, Er = (e, t, n) => t in e ? _s(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, Or = (e, t) => {
  for (var n in t || (t = {}))
    bs.call(t, n) && Er(e, n, t[n]);
  if (br)
    for (var n of br(t))
      Es.call(t, n) && Er(e, n, t[n]);
  return e;
};
const Os = {
  boolean: {
    read: (e) => e === "true",
    write: (e) => String(e)
  },
  object: {
    read: (e) => JSON.parse(e),
    write: (e) => JSON.stringify(e)
  },
  number: {
    read: (e) => Number.parseFloat(e),
    write: (e) => String(e)
  },
  any: {
    read: (e) => e,
    write: (e) => String(e)
  },
  string: {
    read: (e) => e,
    write: (e) => String(e)
  },
  map: {
    read: (e) => new Map(JSON.parse(e)),
    write: (e) => JSON.stringify(Array.from(e.entries()))
  },
  set: {
    read: (e) => new Set(JSON.parse(e)),
    write: (e) => JSON.stringify(Array.from(e))
  },
  date: {
    read: (e) => new Date(e),
    write: (e) => e.toISOString()
  }
}, Sr = "vueuse-storage";
function ie(e, t, n, r = {}) {
  var o;
  const {
    flush: i = "pre",
    deep: s = !0,
    listenToStorageChanges: a = !0,
    writeDefaults: u = !0,
    mergeDefaults: d = !1,
    shallow: h,
    window: c = Dn,
    eventFilter: _,
    onError: k = (g) => {
      console.error(g);
    }
  } = r, C = (h ? Hi : re)(t);
  if (!n)
    try {
      n = vs("getDefaultStorage", () => {
        var g;
        return (g = Dn) == null ? void 0 : g.localStorage;
      })();
    } catch (g) {
      k(g);
    }
  if (!n)
    return C;
  const A = zn(t), $ = ws(A), q = (o = r.serializer) != null ? o : Os[$], { pause: U, resume: j } = hs(
    C,
    () => L(C.value),
    { flush: i, deep: s, eventFilter: _ }
  );
  return c && a && (_r(c, "storage", E), _r(c, Sr, P)), E(), C;
  function L(g) {
    try {
      if (g == null)
        n.removeItem(e);
      else {
        const p = q.write(g), v = n.getItem(e);
        v !== p && (n.setItem(e, p), c && c.dispatchEvent(new CustomEvent(Sr, {
          detail: {
            key: e,
            oldValue: v,
            newValue: p,
            storageArea: n
          }
        })));
      }
    } catch (p) {
      k(p);
    }
  }
  function b(g) {
    const p = g ? g.newValue : n.getItem(e);
    if (p == null)
      return u && A !== null && n.setItem(e, q.write(A)), A;
    if (!g && d) {
      const v = q.read(p);
      return typeof d == "function" ? d(v, A) : $ === "object" && !Array.isArray(v) ? Or(Or({}, A), v) : v;
    } else
      return typeof p != "string" ? p : q.read(p);
  }
  function P(g) {
    E(g.detail);
  }
  function E(g) {
    if (!(g && g.storageArea !== n)) {
      if (g && g.key == null) {
        C.value = A;
        return;
      }
      if (!(g && g.key !== e)) {
        U();
        try {
          C.value = b(g);
        } catch (p) {
          k(p);
        } finally {
          g ? go(j) : j();
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
(function(e) {
  e.pop = "pop", e.push = "push";
})(xr || (xr = {}));
var Nr;
(function(e) {
  e.back = "back", e.forward = "forward", e.unknown = "";
})(Nr || (Nr = {}));
Symbol(process.env.NODE_ENV !== "production" ? "navigation failure" : "");
var Dr;
(function(e) {
  e[e.aborted = 4] = "aborted", e[e.cancelled = 8] = "cancelled", e[e.duplicated = 16] = "duplicated";
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
    function e(t) {
      if (!t)
        throw new TypeError("Invalid argument; `value` has no value.");
      this.value = e.EMPTY, t && e.isGuid(t) && (this.value = t);
    }
    return e.isGuid = function(t) {
      var n = t.toString();
      return t && (t instanceof e || e.validator.test(n));
    }, e.create = function() {
      return new e([e.gen(2), e.gen(1), e.gen(1), e.gen(1), e.gen(3)].join("-"));
    }, e.createEmpty = function() {
      return new e("emptyguid");
    }, e.parse = function(t) {
      return new e(t);
    }, e.raw = function() {
      return [e.gen(2), e.gen(1), e.gen(1), e.gen(1), e.gen(3)].join("-");
    }, e.gen = function(t) {
      for (var n = "", r = 0; r < t; r++)
        n += ((1 + Math.random()) * 65536 | 0).toString(16).substring(1);
      return n;
    }, e.prototype.equals = function(t) {
      return e.isGuid(t) && this.value === t.toString();
    }, e.prototype.isEmpty = function() {
      return this.value === e.EMPTY;
    }, e.prototype.toString = function() {
      return this.value;
    }, e.prototype.toJSON = function() {
      return {
        value: this.value
      };
    }, e.validator = new RegExp("^[a-z0-9]{8}-[a-z0-9]{4}-[a-z0-9]{4}-[a-z0-9]{4}-[a-z0-9]{12}$", "i"), e.EMPTY = "00000000-0000-0000-0000-000000000000", e;
  }()
), ze = Ns;
function Oo(e, t) {
  return function() {
    return e.apply(t, arguments);
  };
}
const { toString: Ds } = Object.prototype, { getPrototypeOf: qn } = Object, Zt = ((e) => (t) => {
  const n = Ds.call(t);
  return e[n] || (e[n] = n.slice(8, -1).toLowerCase());
})(/* @__PURE__ */ Object.create(null)), De = (e) => (e = e.toLowerCase(), (t) => Zt(t) === e), en = (e) => (t) => typeof t === e, { isArray: dt } = Array, mt = en("undefined");
function ks(e) {
  return e !== null && !mt(e) && e.constructor !== null && !mt(e.constructor) && ye(e.constructor.isBuffer) && e.constructor.isBuffer(e);
}
const So = De("ArrayBuffer");
function Cs(e) {
  let t;
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? t = ArrayBuffer.isView(e) : t = e && e.buffer && So(e.buffer), t;
}
const Rs = en("string"), ye = en("function"), xo = en("number"), tn = (e) => e !== null && typeof e == "object", Ms = (e) => e === !0 || e === !1, It = (e) => {
  if (Zt(e) !== "object")
    return !1;
  const t = qn(e);
  return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(Symbol.toStringTag in e) && !(Symbol.iterator in e);
}, Ps = De("Date"), Ts = De("File"), As = De("Blob"), Bs = De("FileList"), Is = (e) => tn(e) && ye(e.pipe), Ls = (e) => {
  let t;
  return e && (typeof FormData == "function" && e instanceof FormData || ye(e.append) && ((t = Zt(e)) === "formdata" || // detect form-data instance
  t === "object" && ye(e.toString) && e.toString() === "[object FormData]"));
}, Fs = De("URLSearchParams"), js = (e) => e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function Et(e, t, { allOwnKeys: n = !1 } = {}) {
  if (e === null || typeof e > "u")
    return;
  let r, o;
  if (typeof e != "object" && (e = [e]), dt(e))
    for (r = 0, o = e.length; r < o; r++)
      t.call(null, e[r], r, e);
  else {
    const i = n ? Object.getOwnPropertyNames(e) : Object.keys(e), s = i.length;
    let a;
    for (r = 0; r < s; r++)
      a = i[r], t.call(null, e[a], a, e);
  }
}
function No(e, t) {
  t = t.toLowerCase();
  const n = Object.keys(e);
  let r = n.length, o;
  for (; r-- > 0; )
    if (o = n[r], t === o.toLowerCase())
      return o;
  return null;
}
const Do = (() => typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : global)(), ko = (e) => !mt(e) && e !== Do;
function kn() {
  const { caseless: e } = ko(this) && this || {}, t = {}, n = (r, o) => {
    const i = e && No(t, o) || o;
    It(t[i]) && It(r) ? t[i] = kn(t[i], r) : It(r) ? t[i] = kn({}, r) : dt(r) ? t[i] = r.slice() : t[i] = r;
  };
  for (let r = 0, o = arguments.length; r < o; r++)
    arguments[r] && Et(arguments[r], n);
  return t;
}
const Us = (e, t, n, { allOwnKeys: r } = {}) => (Et(t, (o, i) => {
  n && ye(o) ? e[i] = Oo(o, n) : e[i] = o;
}, { allOwnKeys: r }), e), Vs = (e) => (e.charCodeAt(0) === 65279 && (e = e.slice(1)), e), zs = (e, t, n, r) => {
  e.prototype = Object.create(t.prototype, r), e.prototype.constructor = e, Object.defineProperty(e, "super", {
    value: t.prototype
  }), n && Object.assign(e.prototype, n);
}, qs = (e, t, n, r) => {
  let o, i, s;
  const a = {};
  if (t = t || {}, e == null)
    return t;
  do {
    for (o = Object.getOwnPropertyNames(e), i = o.length; i-- > 0; )
      s = o[i], (!r || r(s, e, t)) && !a[s] && (t[s] = e[s], a[s] = !0);
    e = n !== !1 && qn(e);
  } while (e && (!n || n(e, t)) && e !== Object.prototype);
  return t;
}, $s = (e, t, n) => {
  e = String(e), (n === void 0 || n > e.length) && (n = e.length), n -= t.length;
  const r = e.indexOf(t, n);
  return r !== -1 && r === n;
}, Hs = (e) => {
  if (!e)
    return null;
  if (dt(e))
    return e;
  let t = e.length;
  if (!xo(t))
    return null;
  const n = new Array(t);
  for (; t-- > 0; )
    n[t] = e[t];
  return n;
}, Js = ((e) => (t) => e && t instanceof e)(typeof Uint8Array < "u" && qn(Uint8Array)), Ws = (e, t) => {
  const r = (e && e[Symbol.iterator]).call(e);
  let o;
  for (; (o = r.next()) && !o.done; ) {
    const i = o.value;
    t.call(e, i[0], i[1]);
  }
}, Ks = (e, t) => {
  let n;
  const r = [];
  for (; (n = e.exec(t)) !== null; )
    r.push(n);
  return r;
}, Gs = De("HTMLFormElement"), Ys = (e) => e.toLowerCase().replace(
  /[-_\s]([a-z\d])(\w*)/g,
  function(n, r, o) {
    return r.toUpperCase() + o;
  }
), kr = (({ hasOwnProperty: e }) => (t, n) => e.call(t, n))(Object.prototype), Qs = De("RegExp"), Co = (e, t) => {
  const n = Object.getOwnPropertyDescriptors(e), r = {};
  Et(n, (o, i) => {
    t(o, i, e) !== !1 && (r[i] = o);
  }), Object.defineProperties(e, r);
}, Xs = (e) => {
  Co(e, (t, n) => {
    if (ye(e) && ["arguments", "caller", "callee"].indexOf(n) !== -1)
      return !1;
    const r = e[n];
    if (ye(r)) {
      if (t.enumerable = !1, "writable" in t) {
        t.writable = !1;
        return;
      }
      t.set || (t.set = () => {
        throw Error("Can not rewrite read-only method '" + n + "'");
      });
    }
  });
}, Zs = (e, t) => {
  const n = {}, r = (o) => {
    o.forEach((i) => {
      n[i] = !0;
    });
  };
  return dt(e) ? r(e) : r(String(e).split(t)), n;
}, ea = () => {
}, ta = (e, t) => (e = +e, Number.isFinite(e) ? e : t), hn = "abcdefghijklmnopqrstuvwxyz", Cr = "0123456789", Ro = {
  DIGIT: Cr,
  ALPHA: hn,
  ALPHA_DIGIT: hn + hn.toUpperCase() + Cr
}, na = (e = 16, t = Ro.ALPHA_DIGIT) => {
  let n = "";
  const { length: r } = t;
  for (; e--; )
    n += t[Math.random() * r | 0];
  return n;
};
function ra(e) {
  return !!(e && ye(e.append) && e[Symbol.toStringTag] === "FormData" && e[Symbol.iterator]);
}
const oa = (e) => {
  const t = new Array(10), n = (r, o) => {
    if (tn(r)) {
      if (t.indexOf(r) >= 0)
        return;
      if (!("toJSON" in r)) {
        t[o] = r;
        const i = dt(r) ? [] : {};
        return Et(r, (s, a) => {
          const u = n(s, o + 1);
          !mt(u) && (i[a] = u);
        }), t[o] = void 0, i;
      }
    }
    return r;
  };
  return n(e, 0);
}, ia = De("AsyncFunction"), sa = (e) => e && (tn(e) || ye(e)) && ye(e.then) && ye(e.catch), w = {
  isArray: dt,
  isArrayBuffer: So,
  isBuffer: ks,
  isFormData: Ls,
  isArrayBufferView: Cs,
  isString: Rs,
  isNumber: xo,
  isBoolean: Ms,
  isObject: tn,
  isPlainObject: It,
  isUndefined: mt,
  isDate: Ps,
  isFile: Ts,
  isBlob: As,
  isRegExp: Qs,
  isFunction: ye,
  isStream: Is,
  isURLSearchParams: Fs,
  isTypedArray: Js,
  isFileList: Bs,
  forEach: Et,
  merge: kn,
  extend: Us,
  trim: js,
  stripBOM: Vs,
  inherits: zs,
  toFlatObject: qs,
  kindOf: Zt,
  kindOfTest: De,
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
  noop: ea,
  toFiniteNumber: ta,
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
function K(e, t, n, r, o) {
  Error.call(this), Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : this.stack = new Error().stack, this.message = e, this.name = "AxiosError", t && (this.code = t), n && (this.config = n), r && (this.request = r), o && (this.response = o);
}
w.inherits(K, Error, {
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
      config: w.toJSONObject(this.config),
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
].forEach((e) => {
  Po[e] = { value: e };
});
Object.defineProperties(K, Po);
Object.defineProperty(Mo, "isAxiosError", { value: !0 });
K.from = (e, t, n, r, o, i) => {
  const s = Object.create(Mo);
  return w.toFlatObject(e, s, function(u) {
    return u !== Error.prototype;
  }, (a) => a !== "isAxiosError"), K.call(s, e.message, t, n, r, o), s.cause = e, s.name = e.name, i && Object.assign(s, i), s;
};
const aa = null;
function Cn(e) {
  return w.isPlainObject(e) || w.isArray(e);
}
function To(e) {
  return w.endsWith(e, "[]") ? e.slice(0, -2) : e;
}
function Rr(e, t, n) {
  return e ? e.concat(t).map(function(o, i) {
    return o = To(o), !n && i ? "[" + o + "]" : o;
  }).join(n ? "." : "") : t;
}
function ca(e) {
  return w.isArray(e) && !e.some(Cn);
}
const ua = w.toFlatObject(w, {}, null, function(t) {
  return /^is[A-Z]/.test(t);
});
function nn(e, t, n) {
  if (!w.isObject(e))
    throw new TypeError("target must be an object");
  t = t || new FormData(), n = w.toFlatObject(n, {
    metaTokens: !0,
    dots: !1,
    indexes: !1
  }, !1, function(A, $) {
    return !w.isUndefined($[A]);
  });
  const r = n.metaTokens, o = n.visitor || h, i = n.dots, s = n.indexes, u = (n.Blob || typeof Blob < "u" && Blob) && w.isSpecCompliantForm(t);
  if (!w.isFunction(o))
    throw new TypeError("visitor must be a function");
  function d(C) {
    if (C === null)
      return "";
    if (w.isDate(C))
      return C.toISOString();
    if (!u && w.isBlob(C))
      throw new K("Blob is not supported. Use a Buffer instead.");
    return w.isArrayBuffer(C) || w.isTypedArray(C) ? u && typeof Blob == "function" ? new Blob([C]) : Buffer.from(C) : C;
  }
  function h(C, A, $) {
    let q = C;
    if (C && !$ && typeof C == "object") {
      if (w.endsWith(A, "{}"))
        A = r ? A : A.slice(0, -2), C = JSON.stringify(C);
      else if (w.isArray(C) && ca(C) || (w.isFileList(C) || w.endsWith(A, "[]")) && (q = w.toArray(C)))
        return A = To(A), q.forEach(function(j, L) {
          !(w.isUndefined(j) || j === null) && t.append(
            // eslint-disable-next-line no-nested-ternary
            s === !0 ? Rr([A], L, i) : s === null ? A : A + "[]",
            d(j)
          );
        }), !1;
    }
    return Cn(C) ? !0 : (t.append(Rr($, A, i), d(C)), !1);
  }
  const c = [], _ = Object.assign(ua, {
    defaultVisitor: h,
    convertValue: d,
    isVisitable: Cn
  });
  function k(C, A) {
    if (!w.isUndefined(C)) {
      if (c.indexOf(C) !== -1)
        throw Error("Circular reference detected in " + A.join("."));
      c.push(C), w.forEach(C, function(q, U) {
        (!(w.isUndefined(q) || q === null) && o.call(
          t,
          q,
          w.isString(U) ? U.trim() : U,
          A,
          _
        )) === !0 && k(q, A ? A.concat(U) : [U]);
      }), c.pop();
    }
  }
  if (!w.isObject(e))
    throw new TypeError("data must be an object");
  return k(e), t;
}
function Mr(e) {
  const t = {
    "!": "%21",
    "'": "%27",
    "(": "%28",
    ")": "%29",
    "~": "%7E",
    "%20": "+",
    "%00": "\0"
  };
  return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g, function(r) {
    return t[r];
  });
}
function $n(e, t) {
  this._pairs = [], e && nn(e, this, t);
}
const Ao = $n.prototype;
Ao.append = function(t, n) {
  this._pairs.push([t, n]);
};
Ao.toString = function(t) {
  const n = t ? function(r) {
    return t.call(this, r, Mr);
  } : Mr;
  return this._pairs.map(function(o) {
    return n(o[0]) + "=" + n(o[1]);
  }, "").join("&");
};
function la(e) {
  return encodeURIComponent(e).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
}
function Bo(e, t, n) {
  if (!t)
    return e;
  const r = n && n.encode || la, o = n && n.serialize;
  let i;
  if (o ? i = o(t, n) : i = w.isURLSearchParams(t) ? t.toString() : new $n(t, n).toString(r), i) {
    const s = e.indexOf("#");
    s !== -1 && (e = e.slice(0, s)), e += (e.indexOf("?") === -1 ? "?" : "&") + i;
  }
  return e;
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
  use(t, n, r) {
    return this.handlers.push({
      fulfilled: t,
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
  eject(t) {
    this.handlers[t] && (this.handlers[t] = null);
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
  forEach(t) {
    w.forEach(this.handlers, function(r) {
      r !== null && t(r);
    });
  }
}
const Pr = da, Io = {
  silentJSONParsing: !0,
  forcedJSONParsing: !0,
  clarifyTimeoutError: !1
}, fa = typeof URLSearchParams < "u" ? URLSearchParams : $n, pa = typeof FormData < "u" ? FormData : null, ha = typeof Blob < "u" ? Blob : null, ga = (() => {
  let e;
  return typeof navigator < "u" && ((e = navigator.product) === "ReactNative" || e === "NativeScript" || e === "NS") ? !1 : typeof window < "u" && typeof document < "u";
})(), ma = (() => typeof WorkerGlobalScope < "u" && // eslint-disable-next-line no-undef
self instanceof WorkerGlobalScope && typeof self.importScripts == "function")(), Ne = {
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
function ya(e, t) {
  return nn(e, new Ne.classes.URLSearchParams(), Object.assign({
    visitor: function(n, r, o, i) {
      return Ne.isNode && w.isBuffer(n) ? (this.append(r, n.toString("base64")), !1) : i.defaultVisitor.apply(this, arguments);
    }
  }, t));
}
function va(e) {
  return w.matchAll(/\w+|\[(\w*)]/g, e).map((t) => t[0] === "[]" ? "" : t[1] || t[0]);
}
function wa(e) {
  const t = {}, n = Object.keys(e);
  let r;
  const o = n.length;
  let i;
  for (r = 0; r < o; r++)
    i = n[r], t[i] = e[i];
  return t;
}
function Lo(e) {
  function t(n, r, o, i) {
    let s = n[i++];
    const a = Number.isFinite(+s), u = i >= n.length;
    return s = !s && w.isArray(o) ? o.length : s, u ? (w.hasOwnProp(o, s) ? o[s] = [o[s], r] : o[s] = r, !a) : ((!o[s] || !w.isObject(o[s])) && (o[s] = []), t(n, r, o[s], i) && w.isArray(o[s]) && (o[s] = wa(o[s])), !a);
  }
  if (w.isFormData(e) && w.isFunction(e.entries)) {
    const n = {};
    return w.forEachEntry(e, (r, o) => {
      t(va(r), o, n, 0);
    }), n;
  }
  return null;
}
const _a = {
  "Content-Type": void 0
};
function ba(e, t, n) {
  if (w.isString(e))
    try {
      return (t || JSON.parse)(e), w.trim(e);
    } catch (r) {
      if (r.name !== "SyntaxError")
        throw r;
    }
  return (n || JSON.stringify)(e);
}
const rn = {
  transitional: Io,
  adapter: ["xhr", "http"],
  transformRequest: [function(t, n) {
    const r = n.getContentType() || "", o = r.indexOf("application/json") > -1, i = w.isObject(t);
    if (i && w.isHTMLForm(t) && (t = new FormData(t)), w.isFormData(t))
      return o && o ? JSON.stringify(Lo(t)) : t;
    if (w.isArrayBuffer(t) || w.isBuffer(t) || w.isStream(t) || w.isFile(t) || w.isBlob(t))
      return t;
    if (w.isArrayBufferView(t))
      return t.buffer;
    if (w.isURLSearchParams(t))
      return n.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1), t.toString();
    let a;
    if (i) {
      if (r.indexOf("application/x-www-form-urlencoded") > -1)
        return ya(t, this.formSerializer).toString();
      if ((a = w.isFileList(t)) || r.indexOf("multipart/form-data") > -1) {
        const u = this.env && this.env.FormData;
        return nn(
          a ? { "files[]": t } : t,
          u && new u(),
          this.formSerializer
        );
      }
    }
    return i || o ? (n.setContentType("application/json", !1), ba(t)) : t;
  }],
  transformResponse: [function(t) {
    const n = this.transitional || rn.transitional, r = n && n.forcedJSONParsing, o = this.responseType === "json";
    if (t && w.isString(t) && (r && !this.responseType || o)) {
      const s = !(n && n.silentJSONParsing) && o;
      try {
        return JSON.parse(t);
      } catch (a) {
        if (s)
          throw a.name === "SyntaxError" ? K.from(a, K.ERR_BAD_RESPONSE, this, null, this.response) : a;
      }
    }
    return t;
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
    FormData: Ne.classes.FormData,
    Blob: Ne.classes.Blob
  },
  validateStatus: function(t) {
    return t >= 200 && t < 300;
  },
  headers: {
    common: {
      Accept: "application/json, text/plain, */*"
    }
  }
};
w.forEach(["delete", "get", "head"], function(t) {
  rn.headers[t] = {};
});
w.forEach(["post", "put", "patch"], function(t) {
  rn.headers[t] = w.merge(_a);
});
const Hn = rn, Ea = w.toObjectSet([
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
]), Oa = (e) => {
  const t = {};
  let n, r, o;
  return e && e.split(`
`).forEach(function(s) {
    o = s.indexOf(":"), n = s.substring(0, o).trim().toLowerCase(), r = s.substring(o + 1).trim(), !(!n || t[n] && Ea[n]) && (n === "set-cookie" ? t[n] ? t[n].push(r) : t[n] = [r] : t[n] = t[n] ? t[n] + ", " + r : r);
  }), t;
}, Tr = Symbol("internals");
function ft(e) {
  return e && String(e).trim().toLowerCase();
}
function Lt(e) {
  return e === !1 || e == null ? e : w.isArray(e) ? e.map(Lt) : String(e);
}
function Sa(e) {
  const t = /* @__PURE__ */ Object.create(null), n = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let r;
  for (; r = n.exec(e); )
    t[r[1]] = r[2];
  return t;
}
const xa = (e) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());
function gn(e, t, n, r, o) {
  if (w.isFunction(r))
    return r.call(this, t, n);
  if (o && (t = n), !!w.isString(t)) {
    if (w.isString(r))
      return t.indexOf(r) !== -1;
    if (w.isRegExp(r))
      return r.test(t);
  }
}
function Na(e) {
  return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (t, n, r) => n.toUpperCase() + r);
}
function Da(e, t) {
  const n = w.toCamelCase(" " + t);
  ["get", "set", "has"].forEach((r) => {
    Object.defineProperty(e, r + n, {
      value: function(o, i, s) {
        return this[r].call(this, t, o, i, s);
      },
      configurable: !0
    });
  });
}
class on {
  constructor(t) {
    t && this.set(t);
  }
  set(t, n, r) {
    const o = this;
    function i(a, u, d) {
      const h = ft(u);
      if (!h)
        throw new Error("header name must be a non-empty string");
      const c = w.findKey(o, h);
      (!c || o[c] === void 0 || d === !0 || d === void 0 && o[c] !== !1) && (o[c || u] = Lt(a));
    }
    const s = (a, u) => w.forEach(a, (d, h) => i(d, h, u));
    return w.isPlainObject(t) || t instanceof this.constructor ? s(t, n) : w.isString(t) && (t = t.trim()) && !xa(t) ? s(Oa(t), n) : t != null && i(n, t, r), this;
  }
  get(t, n) {
    if (t = ft(t), t) {
      const r = w.findKey(this, t);
      if (r) {
        const o = this[r];
        if (!n)
          return o;
        if (n === !0)
          return Sa(o);
        if (w.isFunction(n))
          return n.call(this, o, r);
        if (w.isRegExp(n))
          return n.exec(o);
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(t, n) {
    if (t = ft(t), t) {
      const r = w.findKey(this, t);
      return !!(r && this[r] !== void 0 && (!n || gn(this, this[r], r, n)));
    }
    return !1;
  }
  delete(t, n) {
    const r = this;
    let o = !1;
    function i(s) {
      if (s = ft(s), s) {
        const a = w.findKey(r, s);
        a && (!n || gn(r, r[a], a, n)) && (delete r[a], o = !0);
      }
    }
    return w.isArray(t) ? t.forEach(i) : i(t), o;
  }
  clear(t) {
    const n = Object.keys(this);
    let r = n.length, o = !1;
    for (; r--; ) {
      const i = n[r];
      (!t || gn(this, this[i], i, t, !0)) && (delete this[i], o = !0);
    }
    return o;
  }
  normalize(t) {
    const n = this, r = {};
    return w.forEach(this, (o, i) => {
      const s = w.findKey(r, i);
      if (s) {
        n[s] = Lt(o), delete n[i];
        return;
      }
      const a = t ? Na(i) : String(i).trim();
      a !== i && delete n[i], n[a] = Lt(o), r[a] = !0;
    }), this;
  }
  concat(...t) {
    return this.constructor.concat(this, ...t);
  }
  toJSON(t) {
    const n = /* @__PURE__ */ Object.create(null);
    return w.forEach(this, (r, o) => {
      r != null && r !== !1 && (n[o] = t && w.isArray(r) ? r.join(", ") : r);
    }), n;
  }
  [Symbol.iterator]() {
    return Object.entries(this.toJSON())[Symbol.iterator]();
  }
  toString() {
    return Object.entries(this.toJSON()).map(([t, n]) => t + ": " + n).join(`
`);
  }
  get [Symbol.toStringTag]() {
    return "AxiosHeaders";
  }
  static from(t) {
    return t instanceof this ? t : new this(t);
  }
  static concat(t, ...n) {
    const r = new this(t);
    return n.forEach((o) => r.set(o)), r;
  }
  static accessor(t) {
    const r = (this[Tr] = this[Tr] = {
      accessors: {}
    }).accessors, o = this.prototype;
    function i(s) {
      const a = ft(s);
      r[a] || (Da(o, s), r[a] = !0);
    }
    return w.isArray(t) ? t.forEach(i) : i(t), this;
  }
}
on.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization"]);
w.freezeMethods(on.prototype);
w.freezeMethods(on);
const Ce = on;
function mn(e, t) {
  const n = this || Hn, r = t || n, o = Ce.from(r.headers);
  let i = r.data;
  return w.forEach(e, function(a) {
    i = a.call(n, i, o.normalize(), t ? t.status : void 0);
  }), o.normalize(), i;
}
function Fo(e) {
  return !!(e && e.__CANCEL__);
}
function Ot(e, t, n) {
  K.call(this, e ?? "canceled", K.ERR_CANCELED, t, n), this.name = "CanceledError";
}
w.inherits(Ot, K, {
  __CANCEL__: !0
});
function ka(e, t, n) {
  const r = n.config.validateStatus;
  !n.status || !r || r(n.status) ? e(n) : t(new K(
    "Request failed with status code " + n.status,
    [K.ERR_BAD_REQUEST, K.ERR_BAD_RESPONSE][Math.floor(n.status / 100) - 4],
    n.config,
    n.request,
    n
  ));
}
const Ca = Ne.isStandardBrowserEnv ? (
  // Standard browser envs support document.cookie
  function() {
    return {
      write: function(n, r, o, i, s, a) {
        const u = [];
        u.push(n + "=" + encodeURIComponent(r)), w.isNumber(o) && u.push("expires=" + new Date(o).toGMTString()), w.isString(i) && u.push("path=" + i), w.isString(s) && u.push("domain=" + s), a === !0 && u.push("secure"), document.cookie = u.join("; ");
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
function Ra(e) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e);
}
function Ma(e, t) {
  return t ? e.replace(/\/+$/, "") + "/" + t.replace(/^\/+/, "") : e;
}
function jo(e, t) {
  return e && !Ra(t) ? Ma(e, t) : t;
}
const Pa = Ne.isStandardBrowserEnv ? (
  // Standard browser envs have full support of the APIs needed to test
  // whether the request URL is of the same origin as current location.
  function() {
    const t = /(msie|trident)/i.test(navigator.userAgent), n = document.createElement("a");
    let r;
    function o(i) {
      let s = i;
      return t && (n.setAttribute("href", s), s = n.href), n.setAttribute("href", s), {
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
      const a = w.isString(s) ? o(s) : s;
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
function Ta(e) {
  const t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
  return t && t[1] || "";
}
function Aa(e, t) {
  e = e || 10;
  const n = new Array(e), r = new Array(e);
  let o = 0, i = 0, s;
  return t = t !== void 0 ? t : 1e3, function(u) {
    const d = Date.now(), h = r[i];
    s || (s = d), n[o] = u, r[o] = d;
    let c = i, _ = 0;
    for (; c !== o; )
      _ += n[c++], c = c % e;
    if (o = (o + 1) % e, o === i && (i = (i + 1) % e), d - s < t)
      return;
    const k = h && d - h;
    return k ? Math.round(_ * 1e3 / k) : void 0;
  };
}
function Ar(e, t) {
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
    h[t ? "download" : "upload"] = !0, e(h);
  };
}
const Ba = typeof XMLHttpRequest < "u", Ia = Ba && function(e) {
  return new Promise(function(n, r) {
    let o = e.data;
    const i = Ce.from(e.headers).normalize(), s = e.responseType;
    let a;
    function u() {
      e.cancelToken && e.cancelToken.unsubscribe(a), e.signal && e.signal.removeEventListener("abort", a);
    }
    w.isFormData(o) && (Ne.isStandardBrowserEnv || Ne.isStandardBrowserWebWorkerEnv ? i.setContentType(!1) : i.setContentType("multipart/form-data;", !1));
    let d = new XMLHttpRequest();
    if (e.auth) {
      const k = e.auth.username || "", C = e.auth.password ? unescape(encodeURIComponent(e.auth.password)) : "";
      i.set("Authorization", "Basic " + btoa(k + ":" + C));
    }
    const h = jo(e.baseURL, e.url);
    d.open(e.method.toUpperCase(), Bo(h, e.params, e.paramsSerializer), !0), d.timeout = e.timeout;
    function c() {
      if (!d)
        return;
      const k = Ce.from(
        "getAllResponseHeaders" in d && d.getAllResponseHeaders()
      ), A = {
        data: !s || s === "text" || s === "json" ? d.responseText : d.response,
        status: d.status,
        statusText: d.statusText,
        headers: k,
        config: e,
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
      d && (r(new K("Request aborted", K.ECONNABORTED, e, d)), d = null);
    }, d.onerror = function() {
      r(new K("Network Error", K.ERR_NETWORK, e, d)), d = null;
    }, d.ontimeout = function() {
      let C = e.timeout ? "timeout of " + e.timeout + "ms exceeded" : "timeout exceeded";
      const A = e.transitional || Io;
      e.timeoutErrorMessage && (C = e.timeoutErrorMessage), r(new K(
        C,
        A.clarifyTimeoutError ? K.ETIMEDOUT : K.ECONNABORTED,
        e,
        d
      )), d = null;
    }, Ne.isStandardBrowserEnv) {
      const k = (e.withCredentials || Pa(h)) && e.xsrfCookieName && Ca.read(e.xsrfCookieName);
      k && i.set(e.xsrfHeaderName, k);
    }
    o === void 0 && i.setContentType(null), "setRequestHeader" in d && w.forEach(i.toJSON(), function(C, A) {
      d.setRequestHeader(A, C);
    }), w.isUndefined(e.withCredentials) || (d.withCredentials = !!e.withCredentials), s && s !== "json" && (d.responseType = e.responseType), typeof e.onDownloadProgress == "function" && d.addEventListener("progress", Ar(e.onDownloadProgress, !0)), typeof e.onUploadProgress == "function" && d.upload && d.upload.addEventListener("progress", Ar(e.onUploadProgress)), (e.cancelToken || e.signal) && (a = (k) => {
      d && (r(!k || k.type ? new Ot(null, e, d) : k), d.abort(), d = null);
    }, e.cancelToken && e.cancelToken.subscribe(a), e.signal && (e.signal.aborted ? a() : e.signal.addEventListener("abort", a)));
    const _ = Ta(h);
    if (_ && Ne.protocols.indexOf(_) === -1) {
      r(new K("Unsupported protocol " + _ + ":", K.ERR_BAD_REQUEST, e));
      return;
    }
    d.send(o || null);
  });
}, Ft = {
  http: aa,
  xhr: Ia
};
w.forEach(Ft, (e, t) => {
  if (e) {
    try {
      Object.defineProperty(e, "name", { value: t });
    } catch {
    }
    Object.defineProperty(e, "adapterName", { value: t });
  }
});
const La = {
  getAdapter: (e) => {
    e = w.isArray(e) ? e : [e];
    const { length: t } = e;
    let n, r;
    for (let o = 0; o < t && (n = e[o], !(r = w.isString(n) ? Ft[n.toLowerCase()] : n)); o++)
      ;
    if (!r)
      throw r === !1 ? new K(
        `Adapter ${n} is not supported by the environment`,
        "ERR_NOT_SUPPORT"
      ) : new Error(
        w.hasOwnProp(Ft, n) ? `Adapter '${n}' is not available in the build` : `Unknown adapter '${n}'`
      );
    if (!w.isFunction(r))
      throw new TypeError("adapter is not a function");
    return r;
  },
  adapters: Ft
};
function yn(e) {
  if (e.cancelToken && e.cancelToken.throwIfRequested(), e.signal && e.signal.aborted)
    throw new Ot(null, e);
}
function Br(e) {
  return yn(e), e.headers = Ce.from(e.headers), e.data = mn.call(
    e,
    e.transformRequest
  ), ["post", "put", "patch"].indexOf(e.method) !== -1 && e.headers.setContentType("application/x-www-form-urlencoded", !1), La.getAdapter(e.adapter || Hn.adapter)(e).then(function(r) {
    return yn(e), r.data = mn.call(
      e,
      e.transformResponse,
      r
    ), r.headers = Ce.from(r.headers), r;
  }, function(r) {
    return Fo(r) || (yn(e), r && r.response && (r.response.data = mn.call(
      e,
      e.transformResponse,
      r.response
    ), r.response.headers = Ce.from(r.response.headers))), Promise.reject(r);
  });
}
const Ir = (e) => e instanceof Ce ? e.toJSON() : e;
function ct(e, t) {
  t = t || {};
  const n = {};
  function r(d, h, c) {
    return w.isPlainObject(d) && w.isPlainObject(h) ? w.merge.call({ caseless: c }, d, h) : w.isPlainObject(h) ? w.merge({}, h) : w.isArray(h) ? h.slice() : h;
  }
  function o(d, h, c) {
    if (w.isUndefined(h)) {
      if (!w.isUndefined(d))
        return r(void 0, d, c);
    } else
      return r(d, h, c);
  }
  function i(d, h) {
    if (!w.isUndefined(h))
      return r(void 0, h);
  }
  function s(d, h) {
    if (w.isUndefined(h)) {
      if (!w.isUndefined(d))
        return r(void 0, d);
    } else
      return r(void 0, h);
  }
  function a(d, h, c) {
    if (c in t)
      return r(d, h);
    if (c in e)
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
  return w.forEach(Object.keys(Object.assign({}, e, t)), function(h) {
    const c = u[h] || o, _ = c(e[h], t[h], h);
    w.isUndefined(_) && c !== a || (n[h] = _);
  }), n;
}
const Uo = "1.4.0", Jn = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach((e, t) => {
  Jn[e] = function(r) {
    return typeof r === e || "a" + (t < 1 ? "n " : " ") + e;
  };
});
const Lr = {};
Jn.transitional = function(t, n, r) {
  function o(i, s) {
    return "[Axios v" + Uo + "] Transitional option '" + i + "'" + s + (r ? ". " + r : "");
  }
  return (i, s, a) => {
    if (t === !1)
      throw new K(
        o(s, " has been removed" + (n ? " in " + n : "")),
        K.ERR_DEPRECATED
      );
    return n && !Lr[s] && (Lr[s] = !0, console.warn(
      o(
        s,
        " has been deprecated since v" + n + " and will be removed in the near future"
      )
    )), t ? t(i, s, a) : !0;
  };
};
function Fa(e, t, n) {
  if (typeof e != "object")
    throw new K("options must be an object", K.ERR_BAD_OPTION_VALUE);
  const r = Object.keys(e);
  let o = r.length;
  for (; o-- > 0; ) {
    const i = r[o], s = t[i];
    if (s) {
      const a = e[i], u = a === void 0 || s(a, i, e);
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
}, Me = Rn.validators;
class $t {
  constructor(t) {
    this.defaults = t, this.interceptors = {
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
  request(t, n) {
    typeof t == "string" ? (n = n || {}, n.url = t) : n = t || {}, n = ct(this.defaults, n);
    const { transitional: r, paramsSerializer: o, headers: i } = n;
    r !== void 0 && Rn.assertOptions(r, {
      silentJSONParsing: Me.transitional(Me.boolean),
      forcedJSONParsing: Me.transitional(Me.boolean),
      clarifyTimeoutError: Me.transitional(Me.boolean)
    }, !1), o != null && (w.isFunction(o) ? n.paramsSerializer = {
      serialize: o
    } : Rn.assertOptions(o, {
      encode: Me.function,
      serialize: Me.function
    }, !0)), n.method = (n.method || this.defaults.method || "get").toLowerCase();
    let s;
    s = i && w.merge(
      i.common,
      i[n.method]
    ), s && w.forEach(
      ["delete", "get", "head", "post", "put", "patch", "common"],
      (C) => {
        delete i[C];
      }
    ), n.headers = Ce.concat(s, i);
    const a = [];
    let u = !0;
    this.interceptors.request.forEach(function(A) {
      typeof A.runWhen == "function" && A.runWhen(n) === !1 || (u = u && A.synchronous, a.unshift(A.fulfilled, A.rejected));
    });
    const d = [];
    this.interceptors.response.forEach(function(A) {
      d.push(A.fulfilled, A.rejected);
    });
    let h, c = 0, _;
    if (!u) {
      const C = [Br.bind(this), void 0];
      for (C.unshift.apply(C, a), C.push.apply(C, d), _ = C.length, h = Promise.resolve(n); c < _; )
        h = h.then(C[c++], C[c++]);
      return h;
    }
    _ = a.length;
    let k = n;
    for (c = 0; c < _; ) {
      const C = a[c++], A = a[c++];
      try {
        k = C(k);
      } catch ($) {
        A.call(this, $);
        break;
      }
    }
    try {
      h = Br.call(this, k);
    } catch (C) {
      return Promise.reject(C);
    }
    for (c = 0, _ = d.length; c < _; )
      h = h.then(d[c++], d[c++]);
    return h;
  }
  getUri(t) {
    t = ct(this.defaults, t);
    const n = jo(t.baseURL, t.url);
    return Bo(n, t.params, t.paramsSerializer);
  }
}
w.forEach(["delete", "get", "head", "options"], function(t) {
  $t.prototype[t] = function(n, r) {
    return this.request(ct(r || {}, {
      method: t,
      url: n,
      data: (r || {}).data
    }));
  };
});
w.forEach(["post", "put", "patch"], function(t) {
  function n(r) {
    return function(i, s, a) {
      return this.request(ct(a || {}, {
        method: t,
        headers: r ? {
          "Content-Type": "multipart/form-data"
        } : {},
        url: i,
        data: s
      }));
    };
  }
  $t.prototype[t] = n(), $t.prototype[t + "Form"] = n(!0);
});
const jt = $t;
class Wn {
  constructor(t) {
    if (typeof t != "function")
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
    }, t(function(i, s, a) {
      r.reason || (r.reason = new Ot(i, s, a), n(r.reason));
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
  subscribe(t) {
    if (this.reason) {
      t(this.reason);
      return;
    }
    this._listeners ? this._listeners.push(t) : this._listeners = [t];
  }
  /**
   * Unsubscribe from the cancel signal
   */
  unsubscribe(t) {
    if (!this._listeners)
      return;
    const n = this._listeners.indexOf(t);
    n !== -1 && this._listeners.splice(n, 1);
  }
  /**
   * Returns an object that contains a new `CancelToken` and a function that, when called,
   * cancels the `CancelToken`.
   */
  static source() {
    let t;
    return {
      token: new Wn(function(o) {
        t = o;
      }),
      cancel: t
    };
  }
}
const ja = Wn;
function Ua(e) {
  return function(n) {
    return e.apply(null, n);
  };
}
function Va(e) {
  return w.isObject(e) && e.isAxiosError === !0;
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
Object.entries(Mn).forEach(([e, t]) => {
  Mn[t] = e;
});
const za = Mn;
function Vo(e) {
  const t = new jt(e), n = Oo(jt.prototype.request, t);
  return w.extend(n, jt.prototype, t, { allOwnKeys: !0 }), w.extend(n, t, null, { allOwnKeys: !0 }), n.create = function(o) {
    return Vo(ct(e, o));
  }, n;
}
const ee = Vo(Hn);
ee.Axios = jt;
ee.CanceledError = Ot;
ee.CancelToken = ja;
ee.isCancel = Fo;
ee.VERSION = Uo;
ee.toFormData = nn;
ee.AxiosError = K;
ee.Cancel = ee.CanceledError;
ee.all = function(t) {
  return Promise.all(t);
};
ee.spread = Ua;
ee.isAxiosError = Va;
ee.mergeConfig = ct;
ee.AxiosHeaders = Ce;
ee.formToJSON = (e) => Lo(w.isHTMLForm(e) ? new FormData(e) : e);
ee.HttpStatusCode = za;
ee.default = ee;
const qa = ee, $a = window.location.hostname === "localhost", Ha = qa.create({
  baseURL: "https://localhost:8080/",
  withCredentials: !1
});
let Fr = "https://dev-url.com/", jr = "";
const he = {
  apiClient: Ha,
  setBaseURL: function(e, t) {
    $a ? this.apiClient.defaults.baseURL = e || Fr : this.apiClient.defaults.baseURL = t || jr, Fr = e, jr = t;
  },
  getBaseURL: function() {
    return this.apiClient.defaults.baseURL;
  }
};
function Ja() {
  const e = ie("nopwd_request", "api/requestloginkey", sessionStorage), t = ie("nopwd_verify", "api/verifyaccess", sessionStorage), n = ie("nopwd_confirm", "api/confirmaccess", sessionStorage), r = ie("nopwd_logout", "api/logout", sessionStorage), o = ie("nopwd_dev", "http://localhost:3000/", sessionStorage), i = ie("nopwd_prod", "https://www.nopwd.com/", sessionStorage), s = ie("nopwd_app", "/app", sessionStorage), a = ie("nopwd_login", "/auth/login", sessionStorage), u = ie("nopwd_log", !1, sessionStorage), d = xs();
  function h(m, T) {
    m != null && m != null && m != "" && (o.value = m), T != null && T != null && T != "" && (i.value = T);
  }
  function c(m, T) {
    m != null && m != null && m != "" && (s.value = m), T != null && T != null && T != "" && (a.value = T);
  }
  function _(m, T, M, I) {
    m != null && m != null && m != "" && (e.value = m), T != null && T != null && T != "" && (t.value = T), M != null && M != null && M != "" && (n.value = M), I != null && I != null && I != "" && (r.value = I);
  }
  const k = re(!1), C = re(!1), A = re(0), $ = ie("nopwd_siteid", ze.EMPTY, sessionStorage), q = ie("nopwd_sitecallid", ze.EMPTY, sessionStorage), U = ie("nopwd_loginid", ze.EMPTY, sessionStorage), j = ie("nopwd_auth", 0, sessionStorage), L = ie("nopwd_session", "", sessionStorage), { t: b } = wo();
  function P() {
    return {
      headers: {
        Accept: "application/json",
        "X-LoginId": U.value,
        "X-SiteCallId": q.value,
        "Content-Type": "application/json"
      }
    };
  }
  const E = re(!1), g = re(""), p = re(b("auth.prepare")), v = re({ id: U.value, code: null, value: null, subid: null, userid: null, count: null, page: null, fromdate: null });
  async function f() {
    if (U.value = ze.EMPTY, U.value === ze.EMPTY.toString()) {
      p.value = b("auth.loading"), U.value = ze.create().toString(), v.value.id = U.value, u.value && console.log("Login: " + U.value), he.setBaseURL(o.value, i.value);
      let m = he.getBaseURL() + e.value;
      return await he.apiClient.get(m, P()).then((T) => {
        const M = T.data;
        return M.success ? (p.value = "", g.value = "https://www.nopwd.com?loginid=" + U.value, k.value = M.success, A.value = M.code, j.value = 1, setTimeout(l, 1e3), E ? p.value = b("auth.codedark") : p.value = b("auth.codelight"), 1) : (p.value = b("auth.codeerror"), -1);
      }).catch((T) => (console.log(T), C.value = !0, p.value = b("auth.codeerror"), -1));
    } else
      return E ? p.value = b("auth.codedark") : p.value = b("auth.codelight"), l(), 0;
  }
  async function l() {
    he.setBaseURL(o.value, i.value);
    let m = he.getBaseURL() + t.value;
    return u.value && console.log("Check: " + U.value), await he.apiClient.get(m, P()).then(async (T) => {
      const M = T.data;
      if (M.success)
        return k.value = M.success, A.value = M.code, M.code > 0 ? (j.value = 2, q.value = M.data.sitecallid, L.value = JSON.stringify(M.data), setTimeout(x, 2e4), (s.value !== void 0 || s.value !== null || s.value !== "") && d.push(s.value), 1) : M.code < 0 ? (j.value = 0, x(), -1) : (setTimeout(l, 1e3), E ? p.value = b("auth.codedark") : p.value = b("auth.codelight"), 0);
      await f();
    }).catch((T) => (u.value && console.log(T), C.value = !0, p.value = b("auth.codeerror"), -1));
  }
  async function x() {
    if (j.value < 2) {
      N();
      return;
    }
    he.setBaseURL(o.value, i.value), u.value && console.log("Check: " + U.value);
    let m = he.getBaseURL() + n.value;
    await he.apiClient.get(m, P()).then((T) => {
      const M = T.data;
      M.success && (k.value = M.success, A.value = M.code, M.code > 0 ? setTimeout(x, 2e4) : (j.value = 0, L.value = "", (a.value !== void 0 || a.value !== null || a.value !== "") && d.push(a.value)));
    }).catch((T) => {
      u.value && console.log(T), C.value = !0, p.value = b("auth.codeerror");
    });
  }
  async function N() {
    j.value = 0, he.setBaseURL(o.value, i.value), u.value && console.log("Logout: " + U.value);
    let m = he.getBaseURL() + r.value;
    await he.apiClient.get(m, P()).then((T) => {
      const M = T.data;
      k.value = M.success, A.value = M.code, k.value && (j.value = 0, U.value = ze.EMPTY.toString()), (a.value !== void 0 || a.value !== null || a.value !== "") && d.push(a.value);
    });
  }
  return {
    auth: j,
    success: k,
    code: A,
    IDLogin: U,
    IDSiteCall: q,
    IDSite: $,
    QRCode: g,
    Message: p,
    is_error: C,
    loginQRCode: f,
    checkAccess: x,
    checkQRLogin: l,
    logout: N,
    config: P,
    setUrls: _,
    setRoutes: c,
    setBase: h
  };
}
var Wa = Object.defineProperty, Ka = (e, t, n) => t in e ? Wa(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, ce = (e, t, n) => (Ka(e, typeof t != "symbol" ? t + "" : t, n), n);
function Ga(e, t) {
  const n = /* @__PURE__ */ Object.create(null), r = e.split(",");
  for (let o = 0; o < r.length; o++)
    n[r[o]] = !0;
  return t ? (o) => !!n[o.toLowerCase()] : (o) => !!n[o];
}
const Pn = process.env.NODE_ENV !== "production" ? Object.freeze({}) : {}, Ya = process.env.NODE_ENV !== "production" ? Object.freeze([]) : [], ge = () => {
}, Qa = /^on[^a-z]/, Xa = (e) => Qa.test(e), de = Object.assign, zo = (e, t) => {
  const n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}, Za = Object.prototype.hasOwnProperty, sn = (e, t) => Za.call(e, t), W = Array.isArray, He = (e) => an(e) === "[object Map]", qo = (e) => an(e) === "[object Set]", G = (e) => typeof e == "function", ve = (e) => typeof e == "string", Kn = (e) => typeof e == "symbol", X = (e) => e !== null && typeof e == "object", Gn = (e) => X(e) && G(e.then) && G(e.catch), $o = Object.prototype.toString, an = (e) => $o.call(e), Ho = (e) => an(e).slice(8, -1), Jo = (e) => an(e) === "[object Object]", Yn = (e) => ve(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, Wo = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return (n) => t[n] || (t[n] = e(n));
}, Ko = Wo(
  (e) => e.charAt(0).toUpperCase() + e.slice(1)
), ec = Wo(
  (e) => e ? `on${Ko(e)}` : ""
), Ht = (e, t) => !Object.is(e, t), tc = (e) => {
  const t = ve(e) ? Number(e) : NaN;
  return isNaN(t) ? e : t;
};
let Ur;
const Tn = () => Ur || (Ur = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function Qn(e) {
  if (W(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
      const r = e[n], o = ve(r) ? ic(r) : Qn(r);
      if (o)
        for (const i in o)
          t[i] = o[i];
    }
    return t;
  } else if (ve(e) || X(e))
    return e;
}
const nc = /;(?![^(]*\))/g, rc = /:([^]+)/, oc = /\/\*[^]*?\*\//g;
function ic(e) {
  const t = {};
  return e.replace(oc, "").split(nc).forEach((n) => {
    if (n) {
      const r = n.split(rc);
      r.length > 1 && (t[r[0].trim()] = r[1].trim());
    }
  }), t;
}
function ot(e) {
  let t = "";
  if (ve(e))
    t = e;
  else if (W(e))
    for (let n = 0; n < e.length; n++) {
      const r = ot(e[n]);
      r && (t += r + " ");
    }
  else if (X(e))
    for (const n in e)
      e[n] && (t += n + " ");
  return t.trim();
}
const sc = (e) => ve(e) ? e : e == null ? "" : W(e) || X(e) && (e.toString === $o || !G(e.toString)) ? JSON.stringify(e, Go, 2) : String(e), Go = (e, t) => t && t.__v_isRef ? Go(e, t.value) : He(t) ? {
  [`Map(${t.size})`]: [...t.entries()].reduce((n, [r, o]) => (n[`${r} =>`] = o, n), {})
} : qo(t) ? {
  [`Set(${t.size})`]: [...t.values()]
} : X(t) && !W(t) && !Jo(t) ? String(t) : t;
function Vr(e, ...t) {
  console.warn(`[Vue warn] ${e}`, ...t);
}
let Yo;
function ac(e, t = Yo) {
  t && t.active && t.effects.push(e);
}
function cc() {
  return Yo;
}
const yt = (e) => {
  const t = new Set(e);
  return t.w = 0, t.n = 0, t;
}, Qo = (e) => (e.w & je) > 0, Xo = (e) => (e.n & je) > 0, uc = ({ deps: e }) => {
  if (e.length)
    for (let t = 0; t < e.length; t++)
      e[t].w |= je;
}, lc = (e) => {
  const { deps: t } = e;
  if (t.length) {
    let n = 0;
    for (let r = 0; r < t.length; r++) {
      const o = t[r];
      Qo(o) && !Xo(o) ? o.delete(e) : t[n++] = o, o.w &= ~je, o.n &= ~je;
    }
    t.length = n;
  }
}, An = /* @__PURE__ */ new WeakMap();
let pt = 0, je = 1;
const Bn = 30;
let ae;
const Je = Symbol(process.env.NODE_ENV !== "production" ? "iterate" : ""), In = Symbol(process.env.NODE_ENV !== "production" ? "Map key iterate" : "");
class Zo {
  constructor(t, n = null, r) {
    this.fn = t, this.scheduler = n, this.active = !0, this.deps = [], this.parent = void 0, ac(this, r);
  }
  run() {
    if (!this.active)
      return this.fn();
    let t = ae, n = Le;
    for (; t; ) {
      if (t === this)
        return;
      t = t.parent;
    }
    try {
      return this.parent = ae, ae = this, Le = !0, je = 1 << ++pt, pt <= Bn ? uc(this) : zr(this), this.fn();
    } finally {
      pt <= Bn && lc(this), je = 1 << --pt, ae = this.parent, Le = n, this.parent = void 0, this.deferStop && this.stop();
    }
  }
  stop() {
    ae === this ? this.deferStop = !0 : this.active && (zr(this), this.onStop && this.onStop(), this.active = !1);
  }
}
function zr(e) {
  const { deps: t } = e;
  if (t.length) {
    for (let n = 0; n < t.length; n++)
      t[n].delete(e);
    t.length = 0;
  }
}
let Le = !0;
const ei = [];
function cn() {
  ei.push(Le), Le = !1;
}
function un() {
  const e = ei.pop();
  Le = e === void 0 ? !0 : e;
}
function we(e, t, n) {
  if (Le && ae) {
    let r = An.get(e);
    r || An.set(e, r = /* @__PURE__ */ new Map());
    let o = r.get(n);
    o || r.set(n, o = yt());
    const i = process.env.NODE_ENV !== "production" ? { effect: ae, target: e, type: t, key: n } : void 0;
    Ln(o, i);
  }
}
function Ln(e, t) {
  let n = !1;
  pt <= Bn ? Xo(e) || (e.n |= je, n = !Qo(e)) : n = !e.has(ae), n && (e.add(ae), ae.deps.push(e), process.env.NODE_ENV !== "production" && ae.onTrack && ae.onTrack(
    de(
      {
        effect: ae
      },
      t
    )
  ));
}
function Ue(e, t, n, r, o, i) {
  const s = An.get(e);
  if (!s)
    return;
  let a = [];
  if (t === "clear")
    a = [...s.values()];
  else if (n === "length" && W(e)) {
    const d = Number(r);
    s.forEach((h, c) => {
      (c === "length" || c >= d) && a.push(h);
    });
  } else
    switch (n !== void 0 && a.push(s.get(n)), t) {
      case "add":
        W(e) ? Yn(n) && a.push(s.get("length")) : (a.push(s.get(Je)), He(e) && a.push(s.get(In)));
        break;
      case "delete":
        W(e) || (a.push(s.get(Je)), He(e) && a.push(s.get(In)));
        break;
      case "set":
        He(e) && a.push(s.get(Je));
        break;
    }
  const u = process.env.NODE_ENV !== "production" ? { target: e, type: t, key: n, newValue: r, oldValue: o, oldTarget: i } : void 0;
  if (a.length === 1)
    a[0] && (process.env.NODE_ENV !== "production" ? nt(a[0], u) : nt(a[0]));
  else {
    const d = [];
    for (const h of a)
      h && d.push(...h);
    process.env.NODE_ENV !== "production" ? nt(yt(d), u) : nt(yt(d));
  }
}
function nt(e, t) {
  const n = W(e) ? e : [...e];
  for (const r of n)
    r.computed && qr(r, t);
  for (const r of n)
    r.computed || qr(r, t);
}
function qr(e, t) {
  (e !== ae || e.allowRecurse) && (process.env.NODE_ENV !== "production" && e.onTrigger && e.onTrigger(de({ effect: e }, t)), e.scheduler ? e.scheduler() : e.run());
}
const dc = /* @__PURE__ */ Ga("__proto__,__v_isRef,__isVue"), ti = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(Kn)
), fc = /* @__PURE__ */ ni(), pc = /* @__PURE__ */ ni(!0), $r = /* @__PURE__ */ hc();
function hc() {
  const e = {};
  return ["includes", "indexOf", "lastIndexOf"].forEach((t) => {
    e[t] = function(...n) {
      const r = H(this);
      for (let i = 0, s = this.length; i < s; i++)
        we(r, "get", i + "");
      const o = r[t](...n);
      return o === -1 || o === !1 ? r[t](...n.map(H)) : o;
    };
  }), ["push", "pop", "shift", "unshift", "splice"].forEach((t) => {
    e[t] = function(...n) {
      cn();
      const r = H(this)[t].apply(this, n);
      return un(), r;
    };
  }), e;
}
function gc(e) {
  const t = H(this);
  return we(t, "has", e), t.hasOwnProperty(e);
}
function ni(e = !1, t = !1) {
  return function(n, r, o) {
    if (r === "__v_isReactive")
      return !e;
    if (r === "__v_isReadonly")
      return e;
    if (r === "__v_isShallow")
      return t;
    if (r === "__v_raw" && o === (e ? t ? Mc : si : t ? Rc : ii).get(n))
      return n;
    const i = W(n);
    if (!e) {
      if (i && sn($r, r))
        return Reflect.get($r, r, o);
      if (r === "hasOwnProperty")
        return gc;
    }
    const s = Reflect.get(n, r, o);
    return (Kn(r) ? ti.has(r) : dc(r)) || (e || we(n, "get", r), t) ? s : ue(s) ? i && Yn(r) ? s : s.value : X(s) ? e ? ai(s) : Zn(s) : s;
  };
}
const mc = /* @__PURE__ */ yc();
function yc(e = !1) {
  return function(t, n, r, o) {
    let i = t[n];
    if (Ye(i) && ue(i) && !ue(r))
      return !1;
    if (!e && (!Fn(r) && !Ye(r) && (i = H(i), r = H(r)), !W(t) && ue(i) && !ue(r)))
      return i.value = r, !0;
    const s = W(t) && Yn(n) ? Number(n) < t.length : sn(t, n), a = Reflect.set(t, n, r, o);
    return t === H(o) && (s ? Ht(r, i) && Ue(t, "set", n, r, i) : Ue(t, "add", n, r)), a;
  };
}
function vc(e, t) {
  const n = sn(e, t), r = e[t], o = Reflect.deleteProperty(e, t);
  return o && n && Ue(e, "delete", t, void 0, r), o;
}
function wc(e, t) {
  const n = Reflect.has(e, t);
  return (!Kn(t) || !ti.has(t)) && we(e, "has", t), n;
}
function _c(e) {
  return we(e, "iterate", W(e) ? "length" : Je), Reflect.ownKeys(e);
}
const bc = {
  get: fc,
  set: mc,
  deleteProperty: vc,
  has: wc,
  ownKeys: _c
}, Ec = {
  get: pc,
  set(e, t) {
    return process.env.NODE_ENV !== "production" && Vr(
      `Set operation on key "${String(t)}" failed: target is readonly.`,
      e
    ), !0;
  },
  deleteProperty(e, t) {
    return process.env.NODE_ENV !== "production" && Vr(
      `Delete operation on key "${String(t)}" failed: target is readonly.`,
      e
    ), !0;
  }
}, Xn = (e) => e, ln = (e) => Reflect.getPrototypeOf(e);
function Dt(e, t, n = !1, r = !1) {
  e = e.__v_raw;
  const o = H(e), i = H(t);
  n || (t !== i && we(o, "get", t), we(o, "get", i));
  const { has: s } = ln(o), a = r ? Xn : n ? tr : er;
  if (s.call(o, t))
    return a(e.get(t));
  if (s.call(o, i))
    return a(e.get(i));
  e !== o && e.get(t);
}
function kt(e, t = !1) {
  const n = this.__v_raw, r = H(n), o = H(e);
  return t || (e !== o && we(r, "has", e), we(r, "has", o)), e === o ? n.has(e) : n.has(e) || n.has(o);
}
function Ct(e, t = !1) {
  return e = e.__v_raw, !t && we(H(e), "iterate", Je), Reflect.get(e, "size", e);
}
function Hr(e) {
  e = H(e);
  const t = H(this);
  return ln(t).has.call(t, e) || (t.add(e), Ue(t, "add", e, e)), this;
}
function Jr(e, t) {
  t = H(t);
  const n = H(this), { has: r, get: o } = ln(n);
  let i = r.call(n, e);
  i ? process.env.NODE_ENV !== "production" && oi(n, r, e) : (e = H(e), i = r.call(n, e));
  const s = o.call(n, e);
  return n.set(e, t), i ? Ht(t, s) && Ue(n, "set", e, t, s) : Ue(n, "add", e, t), this;
}
function Wr(e) {
  const t = H(this), { has: n, get: r } = ln(t);
  let o = n.call(t, e);
  o ? process.env.NODE_ENV !== "production" && oi(t, n, e) : (e = H(e), o = n.call(t, e));
  const i = r ? r.call(t, e) : void 0, s = t.delete(e);
  return o && Ue(t, "delete", e, void 0, i), s;
}
function Kr() {
  const e = H(this), t = e.size !== 0, n = process.env.NODE_ENV !== "production" ? He(e) ? new Map(e) : new Set(e) : void 0, r = e.clear();
  return t && Ue(e, "clear", void 0, void 0, n), r;
}
function Rt(e, t) {
  return function(n, r) {
    const o = this, i = o.__v_raw, s = H(i), a = t ? Xn : e ? tr : er;
    return !e && we(s, "iterate", Je), i.forEach((u, d) => n.call(r, a(u), a(d), o));
  };
}
function Mt(e, t, n) {
  return function(...r) {
    const o = this.__v_raw, i = H(o), s = He(i), a = e === "entries" || e === Symbol.iterator && s, u = e === "keys" && s, d = o[e](...r), h = n ? Xn : t ? tr : er;
    return !t && we(
      i,
      "iterate",
      u ? In : Je
    ), {
      // iterator protocol
      next() {
        const { value: c, done: _ } = d.next();
        return _ ? { value: c, done: _ } : {
          value: a ? [h(c[0]), h(c[1])] : h(c),
          done: _
        };
      },
      // iterable protocol
      [Symbol.iterator]() {
        return this;
      }
    };
  };
}
function Pe(e) {
  return function(...t) {
    if (process.env.NODE_ENV !== "production") {
      const n = t[0] ? `on key "${t[0]}" ` : "";
      console.warn(
        `${Ko(e)} operation ${n}failed: target is readonly.`,
        H(this)
      );
    }
    return e === "delete" ? !1 : this;
  };
}
function Oc() {
  const e = {
    get(o) {
      return Dt(this, o);
    },
    get size() {
      return Ct(this);
    },
    has: kt,
    add: Hr,
    set: Jr,
    delete: Wr,
    clear: Kr,
    forEach: Rt(!1, !1)
  }, t = {
    get(o) {
      return Dt(this, o, !1, !0);
    },
    get size() {
      return Ct(this);
    },
    has: kt,
    add: Hr,
    set: Jr,
    delete: Wr,
    clear: Kr,
    forEach: Rt(!1, !0)
  }, n = {
    get(o) {
      return Dt(this, o, !0);
    },
    get size() {
      return Ct(this, !0);
    },
    has(o) {
      return kt.call(this, o, !0);
    },
    add: Pe("add"),
    set: Pe("set"),
    delete: Pe("delete"),
    clear: Pe("clear"),
    forEach: Rt(!0, !1)
  }, r = {
    get(o) {
      return Dt(this, o, !0, !0);
    },
    get size() {
      return Ct(this, !0);
    },
    has(o) {
      return kt.call(this, o, !0);
    },
    add: Pe("add"),
    set: Pe("set"),
    delete: Pe("delete"),
    clear: Pe("clear"),
    forEach: Rt(!0, !0)
  };
  return ["keys", "values", "entries", Symbol.iterator].forEach((o) => {
    e[o] = Mt(
      o,
      !1,
      !1
    ), n[o] = Mt(
      o,
      !0,
      !1
    ), t[o] = Mt(
      o,
      !1,
      !0
    ), r[o] = Mt(
      o,
      !0,
      !0
    );
  }), [
    e,
    n,
    t,
    r
  ];
}
const [
  Sc,
  xc,
  Nc,
  Dc
] = /* @__PURE__ */ Oc();
function ri(e, t) {
  const n = t ? e ? Dc : Nc : e ? xc : Sc;
  return (r, o, i) => o === "__v_isReactive" ? !e : o === "__v_isReadonly" ? e : o === "__v_raw" ? r : Reflect.get(
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
function oi(e, t, n) {
  const r = H(n);
  if (r !== n && t.call(e, r)) {
    const o = Ho(e);
    console.warn(
      `Reactive ${o} contains both the raw and reactive versions of the same object${o === "Map" ? " as keys" : ""}, which can lead to inconsistencies. Avoid differentiating between the raw and reactive versions of an object and only use the reactive version if possible.`
    );
  }
}
const ii = /* @__PURE__ */ new WeakMap(), Rc = /* @__PURE__ */ new WeakMap(), si = /* @__PURE__ */ new WeakMap(), Mc = /* @__PURE__ */ new WeakMap();
function Pc(e) {
  switch (e) {
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
function Tc(e) {
  return e.__v_skip || !Object.isExtensible(e) ? 0 : Pc(Ho(e));
}
function Zn(e) {
  return Ye(e) ? e : ci(
    e,
    !1,
    bc,
    kc,
    ii
  );
}
function ai(e) {
  return ci(
    e,
    !0,
    Ec,
    Cc,
    si
  );
}
function ci(e, t, n, r, o) {
  if (!X(e))
    return process.env.NODE_ENV !== "production" && console.warn(`value cannot be made reactive: ${String(e)}`), e;
  if (e.__v_raw && !(t && e.__v_isReactive))
    return e;
  const i = o.get(e);
  if (i)
    return i;
  const s = Tc(e);
  if (s === 0)
    return e;
  const a = new Proxy(
    e,
    s === 2 ? r : n
  );
  return o.set(e, a), a;
}
function We(e) {
  return Ye(e) ? We(e.__v_raw) : !!(e && e.__v_isReactive);
}
function Ye(e) {
  return !!(e && e.__v_isReadonly);
}
function Fn(e) {
  return !!(e && e.__v_isShallow);
}
function jn(e) {
  return We(e) || Ye(e);
}
function H(e) {
  const t = e && e.__v_raw;
  return t ? H(t) : e;
}
const er = (e) => X(e) ? Zn(e) : e, tr = (e) => X(e) ? ai(e) : e;
function Ac(e) {
  Le && ae && (e = H(e), process.env.NODE_ENV !== "production" ? Ln(e.dep || (e.dep = yt()), {
    target: e,
    type: "get",
    key: "value"
  }) : Ln(e.dep || (e.dep = yt())));
}
function Bc(e, t) {
  e = H(e);
  const n = e.dep;
  n && (process.env.NODE_ENV !== "production" ? nt(n, {
    target: e,
    type: "set",
    key: "value",
    newValue: t
  }) : nt(n));
}
function ue(e) {
  return !!(e && e.__v_isRef === !0);
}
function Ut(e) {
  return ue(e) ? e.value : e;
}
const Ic = {
  get: (e, t, n) => Ut(Reflect.get(e, t, n)),
  set: (e, t, n, r) => {
    const o = e[t];
    return ue(o) && !ue(n) ? (o.value = n, !0) : Reflect.set(e, t, n, r);
  }
};
function Lc(e) {
  return We(e) ? e : new Proxy(e, Ic);
}
class Fc {
  constructor(t, n, r, o) {
    this._setter = n, this.dep = void 0, this.__v_isRef = !0, this.__v_isReadonly = !1, this._dirty = !0, this.effect = new Zo(t, () => {
      this._dirty || (this._dirty = !0, Bc(this));
    }), this.effect.computed = this, this.effect.active = this._cacheable = !o, this.__v_isReadonly = r;
  }
  get value() {
    const t = H(this);
    return Ac(t), (t._dirty || !t._cacheable) && (t._dirty = !1, t._value = t.effect.run()), t._value;
  }
  set value(t) {
    this._setter(t);
  }
}
function jc(e, t, n = !1) {
  let r, o;
  const i = G(e);
  i ? (r = e, o = process.env.NODE_ENV !== "production" ? () => {
    console.warn("Write operation failed: computed value is readonly");
  } : ge) : (r = e.get, o = e.set);
  const s = new Fc(r, o, i || !o, n);
  return process.env.NODE_ENV !== "production" && t && !n && (s.effect.onTrack = t.onTrack, s.effect.onTrigger = t.onTrigger), s;
}
const Ke = [];
function ui(e) {
  Ke.push(e);
}
function li() {
  Ke.pop();
}
function J(e, ...t) {
  if (process.env.NODE_ENV === "production")
    return;
  cn();
  const n = Ke.length ? Ke[Ke.length - 1].component : null, r = n && n.appContext.config.warnHandler, o = Uc();
  if (r)
    Ge(
      r,
      n,
      11,
      [
        e + t.join(""),
        n && n.proxy,
        o.map(
          ({ vnode: i }) => `at <${dr(n, i.type)}>`
        ).join(`
`),
        o
      ]
    );
  else {
    const i = [`[Vue warn]: ${e}`, ...t];
    o.length && i.push(`
`, ...Vc(o)), console.warn(...i);
  }
  un();
}
function Uc() {
  let e = Ke[Ke.length - 1];
  if (!e)
    return [];
  const t = [];
  for (; e; ) {
    const n = t[0];
    n && n.vnode === e ? n.recurseCount++ : t.push({
      vnode: e,
      recurseCount: 0
    });
    const r = e.component && e.component.parent;
    e = r && r.vnode;
  }
  return t;
}
function Vc(e) {
  const t = [];
  return e.forEach((n, r) => {
    t.push(...r === 0 ? [] : [`
`], ...zc(n));
  }), t;
}
function zc({ vnode: e, recurseCount: t }) {
  const n = t > 0 ? `... (${t} recursive calls)` : "", r = e.component ? e.component.parent == null : !1, o = ` at <${dr(
    e.component,
    e.type,
    r
  )}`, i = ">" + n;
  return e.props ? [o, ...qc(e.props), i] : [o + i];
}
function qc(e) {
  const t = [], n = Object.keys(e);
  return n.slice(0, 3).forEach((r) => {
    t.push(...di(r, e[r]));
  }), n.length > 3 && t.push(" ..."), t;
}
function di(e, t, n) {
  return ve(t) ? (t = JSON.stringify(t), n ? t : [`${e}=${t}`]) : typeof t == "number" || typeof t == "boolean" || t == null ? n ? t : [`${e}=${t}`] : ue(t) ? (t = di(e, H(t.value), !0), n ? t : [`${e}=Ref<`, t, ">"]) : G(t) ? [`${e}=fn${t.name ? `<${t.name}>` : ""}`] : (t = H(t), n ? t : [`${e}=`, t]);
}
function $c(e, t) {
  process.env.NODE_ENV !== "production" && e !== void 0 && (typeof e != "number" ? J(`${t} is not a valid number - got ${JSON.stringify(e)}.`) : isNaN(e) && J(`${t} is NaN - the duration expression might be incorrect.`));
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
function Ge(e, t, n, r) {
  let o;
  try {
    o = r ? e(...r) : e();
  } catch (i) {
    rr(i, t, n);
  }
  return o;
}
function vt(e, t, n, r) {
  if (G(e)) {
    const i = Ge(e, t, n, r);
    return i && Gn(i) && i.catch((s) => {
      rr(s, t, n);
    }), i;
  }
  const o = [];
  for (let i = 0; i < e.length; i++)
    o.push(vt(e[i], t, n, r));
  return o;
}
function rr(e, t, n, r = !0) {
  const o = t ? t.vnode : null;
  if (t) {
    let i = t.parent;
    const s = t.proxy, a = process.env.NODE_ENV !== "production" ? nr[n] : n;
    for (; i; ) {
      const d = i.ec;
      if (d) {
        for (let h = 0; h < d.length; h++)
          if (d[h](e, s, a) === !1)
            return;
      }
      i = i.parent;
    }
    const u = t.appContext.config.errorHandler;
    if (u) {
      Ge(
        u,
        null,
        10,
        [e, s, a]
      );
      return;
    }
  }
  Hc(e, n, o, r);
}
function Hc(e, t, n, r = !0) {
  if (process.env.NODE_ENV !== "production") {
    const o = nr[t];
    if (n && ui(n), J(`Unhandled error${o ? ` during execution of ${o}` : ""}`), n && li(), r)
      throw e;
    console.error(e);
  } else
    console.error(e);
}
let Jt = !1, Un = !1;
const Oe = [];
let Be = 0;
const it = [];
let xe = null, Ae = 0;
const Jc = /* @__PURE__ */ Promise.resolve(), Wc = 100;
function Kc(e) {
  let t = Be + 1, n = Oe.length;
  for (; t < n; ) {
    const r = t + n >>> 1;
    wt(Oe[r]) < e ? t = r + 1 : n = r;
  }
  return t;
}
function fi(e) {
  (!Oe.length || !Oe.includes(
    e,
    Jt && e.allowRecurse ? Be + 1 : Be
  )) && (e.id == null ? Oe.push(e) : Oe.splice(Kc(e.id), 0, e), pi());
}
function pi() {
  !Jt && !Un && (Un = !0, Jc.then(hi));
}
function or(e) {
  W(e) ? it.push(...e) : (!xe || !xe.includes(
    e,
    e.allowRecurse ? Ae + 1 : Ae
  )) && it.push(e), pi();
}
function Gc(e) {
  if (it.length) {
    const t = [...new Set(it)];
    if (it.length = 0, xe) {
      xe.push(...t);
      return;
    }
    for (xe = t, process.env.NODE_ENV !== "production" && (e = e || /* @__PURE__ */ new Map()), xe.sort((n, r) => wt(n) - wt(r)), Ae = 0; Ae < xe.length; Ae++)
      process.env.NODE_ENV !== "production" && gi(e, xe[Ae]) || xe[Ae]();
    xe = null, Ae = 0;
  }
}
const wt = (e) => e.id == null ? 1 / 0 : e.id, Yc = (e, t) => {
  const n = wt(e) - wt(t);
  if (n === 0) {
    if (e.pre && !t.pre)
      return -1;
    if (t.pre && !e.pre)
      return 1;
  }
  return n;
};
function hi(e) {
  Un = !1, Jt = !0, process.env.NODE_ENV !== "production" && (e = e || /* @__PURE__ */ new Map()), Oe.sort(Yc);
  const t = process.env.NODE_ENV !== "production" ? (n) => gi(e, n) : ge;
  try {
    for (Be = 0; Be < Oe.length; Be++) {
      const n = Oe[Be];
      if (n && n.active !== !1) {
        if (process.env.NODE_ENV !== "production" && t(n))
          continue;
        Ge(n, null, 14);
      }
    }
  } finally {
    Be = 0, Oe.length = 0, Gc(e), Jt = !1, (Oe.length || it.length) && hi(e);
  }
}
function gi(e, t) {
  if (!e.has(t))
    e.set(t, 1);
  else {
    const n = e.get(t);
    if (n > Wc) {
      const r = t.ownerInstance, o = r && Ai(r.type);
      return J(
        `Maximum recursive updates exceeded${o ? ` in component <${o}>` : ""}. This means you have a reactive effect that is mutating its own dependencies and thus recursively triggering itself. Possible sources include component template, render function, updated hook or watcher source function.`
      ), !0;
    } else
      e.set(t, n + 1);
  }
}
const tt = /* @__PURE__ */ new Set();
process.env.NODE_ENV !== "production" && (Tn().__VUE_HMR_RUNTIME__ = {
  createRecord: vn(Qc),
  rerender: vn(Xc),
  reload: vn(Zc)
});
const Wt = /* @__PURE__ */ new Map();
function Qc(e, t) {
  return Wt.has(e) ? !1 : (Wt.set(e, {
    initialDef: gt(t),
    instances: /* @__PURE__ */ new Set()
  }), !0);
}
function gt(e) {
  return Bi(e) ? e.__vccOpts : e;
}
function Xc(e, t) {
  const n = Wt.get(e);
  n && (n.initialDef.render = t, [...n.instances].forEach((r) => {
    t && (r.render = t, gt(r.type).render = t), r.renderCache = [], r.update();
  }));
}
function Zc(e, t) {
  const n = Wt.get(e);
  if (!n)
    return;
  t = gt(t), Gr(n.initialDef, t);
  const r = [...n.instances];
  for (const o of r) {
    const i = gt(o.type);
    tt.has(i) || (i !== n.initialDef && Gr(i, t), tt.add(i)), o.appContext.propsCache.delete(o.type), o.appContext.emitsCache.delete(o.type), o.appContext.optionsCache.delete(o.type), o.ceReload ? (tt.add(i), o.ceReload(t.styles), tt.delete(i)) : o.parent ? fi(o.parent.update) : o.appContext.reload ? o.appContext.reload() : typeof window < "u" ? window.location.reload() : console.warn(
      "[HMR] Root or manually mounted instance modified. Full reload required."
    );
  }
  or(() => {
    for (const o of r)
      tt.delete(
        gt(o.type)
      );
  });
}
function Gr(e, t) {
  de(e, t);
  for (const n in e)
    n !== "__file" && !(n in t) && delete e[n];
}
function vn(e) {
  return (t, n) => {
    try {
      return e(t, n);
    } catch (r) {
      console.error(r), console.warn(
        "[HMR] Something went wrong during Vue component hot-reload. Full reload required."
      );
    }
  };
}
function mi(e, ...t) {
}
const eu = /* @__PURE__ */ tu(
  "component:updated"
  /* COMPONENT_UPDATED */
);
function tu(e) {
  return (t) => {
    mi(
      e,
      t.appContext.app,
      t.uid,
      t.parent ? t.parent.uid : void 0,
      t
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
function yi(e) {
  return (t, n, r) => {
    mi(e, t.appContext.app, t.uid, t, n, r);
  };
}
let Se = null, vi = null;
function Yr(e) {
  const t = Se;
  return Se = e, vi = e && e.type.__scopeId || null, t;
}
function ou(e, t = Se, n) {
  if (!t || e._n)
    return e;
  const r = (...o) => {
    r._d && io(-1);
    const i = Yr(t);
    let s;
    try {
      s = e(...o);
    } finally {
      Yr(i), r._d && io(1);
    }
    return process.env.NODE_ENV !== "production" && eu(t), s;
  };
  return r._n = !0, r._c = !0, r._d = !0, r;
}
function iu(e) {
  let t;
  for (let n = 0; n < e.length; n++) {
    const r = e[n];
    if (ar(r)) {
      if (r.type !== ut || r.children === "v-if") {
        if (t)
          return;
        t = r;
      }
    } else
      return;
  }
  return t;
}
function wi({ vnode: e, parent: t }, n) {
  for (; t && t.subTree === e; )
    (e = t.vnode).el = n, t = t.parent;
}
const su = (e) => e.__isSuspense, au = {
  name: "Suspense",
  // In order to make Suspense tree-shakable, we need to avoid importing it
  // directly in the renderer. The renderer checks for the __isSuspense flag
  // on a vnode's type and calls the `process` method, passing in renderer
  // internals.
  __isSuspense: !0,
  process(e, t, n, r, o, i, s, a, u, d) {
    e == null ? uu(
      t,
      n,
      r,
      o,
      i,
      s,
      a,
      u,
      d
    ) : lu(
      e,
      t,
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
function _t(e, t) {
  const n = e.props && e.props[t];
  G(n) && n();
}
function uu(e, t, n, r, o, i, s, a, u) {
  const {
    p: d,
    o: { createElement: h }
  } = u, c = h("div"), _ = e.suspense = ir(
    e,
    o,
    r,
    t,
    c,
    n,
    i,
    s,
    a,
    u
  );
  d(
    null,
    _.pendingBranch = e.ssContent,
    c,
    null,
    r,
    _,
    i,
    s
  ), _.deps > 0 ? (_t(e, "onPending"), _t(e, "onFallback"), d(
    null,
    e.ssFallback,
    t,
    n,
    r,
    null,
    // fallback tree will not have suspense context
    i,
    s
  ), st(_, e.ssFallback)) : _.resolve(!1, !0);
}
function lu(e, t, n, r, o, i, s, a, { p: u, um: d, o: { createElement: h } }) {
  const c = t.suspense = e.suspense;
  c.vnode = t, t.el = e.el;
  const _ = t.ssContent, k = t.ssFallback, { activeBranch: C, pendingBranch: A, isInFallback: $, isHydrating: q } = c;
  if (A)
    c.pendingBranch = _, En(_, A) ? (u(
      A,
      _,
      c.hiddenContainer,
      null,
      o,
      c,
      i,
      s,
      a
    ), c.deps <= 0 ? c.resolve() : $ && (u(
      C,
      k,
      n,
      r,
      o,
      null,
      // fallback tree will not have suspense context
      i,
      s,
      a
    ), st(c, k))) : (c.pendingId++, q ? (c.isHydrating = !1, c.activeBranch = A) : d(A, o, c), c.deps = 0, c.effects.length = 0, c.hiddenContainer = h("div"), $ ? (u(
      null,
      _,
      c.hiddenContainer,
      null,
      o,
      c,
      i,
      s,
      a
    ), c.deps <= 0 ? c.resolve() : (u(
      C,
      k,
      n,
      r,
      o,
      null,
      // fallback tree will not have suspense context
      i,
      s,
      a
    ), st(c, k))) : C && En(_, C) ? (u(
      C,
      _,
      n,
      r,
      o,
      c,
      i,
      s,
      a
    ), c.resolve(!0)) : (u(
      null,
      _,
      c.hiddenContainer,
      null,
      o,
      c,
      i,
      s,
      a
    ), c.deps <= 0 && c.resolve()));
  else if (C && En(_, C))
    u(
      C,
      _,
      n,
      r,
      o,
      c,
      i,
      s,
      a
    ), st(c, _);
  else if (_t(t, "onPending"), c.pendingBranch = _, c.pendingId++, u(
    null,
    _,
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
    const { timeout: U, pendingId: j } = c;
    U > 0 ? setTimeout(() => {
      c.pendingId === j && c.fallback(k);
    }, U) : U === 0 && c.fallback(k);
  }
}
let Qr = !1;
function ir(e, t, n, r, o, i, s, a, u, d, h = !1) {
  process.env.NODE_ENV !== "production" && !Qr && (Qr = !0, console[console.info ? "info" : "log"](
    "<Suspense> is an experimental feature and its API will likely change."
  ));
  const {
    p: c,
    m: _,
    um: k,
    n: C,
    o: { parentNode: A, remove: $ }
  } = d;
  let q;
  const U = hu(e);
  U && t != null && t.pendingBranch && (q = t.pendingId, t.deps++);
  const j = e.props ? tc(e.props.timeout) : void 0;
  process.env.NODE_ENV !== "production" && $c(j, "Suspense timeout");
  const L = {
    vnode: e,
    parent: t,
    parentComponent: n,
    isSVG: s,
    container: r,
    hiddenContainer: o,
    anchor: i,
    deps: 0,
    pendingId: 0,
    timeout: typeof j == "number" ? j : -1,
    activeBranch: null,
    pendingBranch: null,
    isInFallback: !0,
    isHydrating: h,
    isUnmounted: !1,
    effects: [],
    resolve(b = !1, P = !1) {
      if (process.env.NODE_ENV !== "production") {
        if (!b && !L.pendingBranch)
          throw new Error(
            "suspense.resolve() is called without a pending branch."
          );
        if (L.isUnmounted)
          throw new Error(
            "suspense.resolve() is called on an already unmounted suspense boundary."
          );
      }
      const {
        vnode: E,
        activeBranch: g,
        pendingBranch: p,
        pendingId: v,
        effects: f,
        parentComponent: l,
        container: x
      } = L;
      if (L.isHydrating)
        L.isHydrating = !1;
      else if (!b) {
        const T = g && p.transition && p.transition.mode === "out-in";
        T && (g.transition.afterLeave = () => {
          v === L.pendingId && _(p, x, M, 0);
        });
        let { anchor: M } = L;
        g && (M = C(g), k(g, l, L, !0)), T || _(p, x, M, 0);
      }
      st(L, p), L.pendingBranch = null, L.isInFallback = !1;
      let N = L.parent, m = !1;
      for (; N; ) {
        if (N.pendingBranch) {
          N.effects.push(...f), m = !0;
          break;
        }
        N = N.parent;
      }
      m || or(f), L.effects = [], U && t && t.pendingBranch && q === t.pendingId && (t.deps--, t.deps === 0 && !P && t.resolve()), _t(E, "onResolve");
    },
    fallback(b) {
      if (!L.pendingBranch)
        return;
      const { vnode: P, activeBranch: E, parentComponent: g, container: p, isSVG: v } = L;
      _t(P, "onFallback");
      const f = C(E), l = () => {
        L.isInFallback && (c(
          null,
          b,
          p,
          f,
          g,
          null,
          // fallback tree will not have suspense context
          v,
          a,
          u
        ), st(L, b));
      }, x = b.transition && b.transition.mode === "out-in";
      x && (E.transition.afterLeave = l), L.isInFallback = !0, k(
        E,
        g,
        null,
        // no suspense so unmount hooks fire now
        !0
        // shouldRemove
      ), x || l();
    },
    move(b, P, E) {
      L.activeBranch && _(L.activeBranch, b, P, E), L.container = b;
    },
    next() {
      return L.activeBranch && C(L.activeBranch);
    },
    registerDep(b, P) {
      const E = !!L.pendingBranch;
      E && L.deps++;
      const g = b.vnode.el;
      b.asyncDep.catch((p) => {
        rr(p, b, 0);
      }).then((p) => {
        if (b.isUnmounted || L.isUnmounted || L.pendingId !== b.suspenseId)
          return;
        b.asyncResolved = !0;
        const { vnode: v } = b;
        process.env.NODE_ENV !== "production" && ui(v), Qu(b, p, !1), g && (v.el = g);
        const f = !g && b.subTree.el;
        P(
          b,
          v,
          // component may have been moved before resolve.
          // if this is not a hydration, instance.subTree will be the comment
          // placeholder.
          A(g || b.subTree.el),
          // anchor will not be used if this is hydration, so only need to
          // consider the comment placeholder case.
          g ? null : C(b.subTree),
          L,
          s,
          u
        ), f && $(f), wi(b, v.el), process.env.NODE_ENV !== "production" && li(), E && --L.deps === 0 && L.resolve();
      });
    },
    unmount(b, P) {
      L.isUnmounted = !0, L.activeBranch && k(
        L.activeBranch,
        n,
        b,
        P
      ), L.pendingBranch && k(
        L.pendingBranch,
        n,
        b,
        P
      );
    }
  };
  return L;
}
function du(e, t, n, r, o, i, s, a, u) {
  const d = t.suspense = ir(
    t,
    r,
    n,
    e.parentNode,
    document.createElement("div"),
    null,
    o,
    i,
    s,
    a,
    !0
    /* hydrating */
  ), h = u(
    e,
    d.pendingBranch = t.ssContent,
    n,
    d,
    i,
    s
  );
  return d.deps === 0 && d.resolve(!1, !0), h;
}
function fu(e) {
  const { shapeFlag: t, children: n } = e, r = t & 32;
  e.ssContent = Xr(
    r ? n.default : n
  ), e.ssFallback = r ? Xr(n.fallback) : Fe(ut);
}
function Xr(e) {
  let t;
  if (G(e)) {
    const n = lt && e._c;
    n && (e._d = !1, at()), e = e(), n && (e._d = !0, t = me, Di());
  }
  if (W(e)) {
    const n = iu(e);
    process.env.NODE_ENV !== "production" && !n && J("<Suspense> slots expect a single root node."), e = n;
  }
  return e = Ju(e), t && !e.dynamicChildren && (e.dynamicChildren = t.filter((n) => n !== e)), e;
}
function pu(e, t) {
  t && t.pendingBranch ? W(e) ? t.effects.push(...e) : t.effects.push(e) : or(e);
}
function st(e, t) {
  e.activeBranch = t;
  const { vnode: n, parentComponent: r } = e, o = n.el = t.el;
  r && r.subTree === n && (r.vnode.el = o, wi(r, o));
}
function hu(e) {
  var t;
  return ((t = e.props) == null ? void 0 : t.suspensible) != null && e.props.suspensible !== !1;
}
const Pt = {};
function wn(e, t, n) {
  return process.env.NODE_ENV !== "production" && !G(t) && J(
    "`watch(fn, options?)` signature has been moved to a separate API. Use `watchEffect(fn, options?)` instead. `watch` now only supports `watch(source, cb, options?) signature."
  ), gu(e, t, n);
}
function gu(e, t, { immediate: n, deep: r, flush: o, onTrack: i, onTrigger: s } = Pn) {
  var a;
  process.env.NODE_ENV !== "production" && !t && (n !== void 0 && J(
    'watch() "immediate" option is only respected when using the watch(source, callback, options?) signature.'
  ), r !== void 0 && J(
    'watch() "deep" option is only respected when using the watch(source, callback, options?) signature.'
  ));
  const u = (j) => {
    J(
      "Invalid watch source: ",
      j,
      "A watch source can only be a getter/effect function, a ref, a reactive object, or an array of these types."
    );
  }, d = cc() === ((a = oe) == null ? void 0 : a.scope) ? oe : null;
  let h, c = !1, _ = !1;
  if (ue(e) ? (h = () => e.value, c = Fn(e)) : We(e) ? (h = () => e, r = !0) : W(e) ? (_ = !0, c = e.some((j) => We(j) || Fn(j)), h = () => e.map((j) => {
    if (ue(j))
      return j.value;
    if (We(j))
      return rt(j);
    if (G(j))
      return Ge(j, d, 2);
    process.env.NODE_ENV !== "production" && u(j);
  })) : G(e) ? t ? h = () => Ge(e, d, 2) : h = () => {
    if (!(d && d.isUnmounted))
      return k && k(), vt(
        e,
        d,
        3,
        [C]
      );
  } : (h = ge, process.env.NODE_ENV !== "production" && u(e)), t && r) {
    const j = h;
    h = () => rt(j());
  }
  let k, C = (j) => {
    k = U.onStop = () => {
      Ge(j, d, 4);
    };
  }, A = _ ? new Array(e.length).fill(Pt) : Pt;
  const $ = () => {
    if (U.active)
      if (t) {
        const j = U.run();
        (r || c || (_ ? j.some(
          (L, b) => Ht(L, A[b])
        ) : Ht(j, A))) && (k && k(), vt(t, d, 3, [
          j,
          // pass undefined as the old value when it's changed for the first time
          A === Pt ? void 0 : _ && A[0] === Pt ? [] : A,
          C
        ]), A = j);
      } else
        U.run();
  };
  $.allowRecurse = !!t;
  let q;
  o === "sync" ? q = $ : o === "post" ? q = () => oo($, d && d.suspense) : ($.pre = !0, d && ($.id = d.uid), q = () => fi($));
  const U = new Zo(h, q);
  return process.env.NODE_ENV !== "production" && (U.onTrack = i, U.onTrigger = s), t ? n ? $() : A = U.run() : o === "post" ? oo(
    U.run.bind(U),
    d && d.suspense
  ) : U.run(), () => {
    U.stop(), d && d.scope && zo(d.scope.effects, U);
  };
}
function mu(e, t) {
  const n = t.split(".");
  return () => {
    let r = e;
    for (let o = 0; o < n.length && r; o++)
      r = r[n[o]];
    return r;
  };
}
function rt(e, t) {
  if (!X(e) || e.__v_skip || (t = t || /* @__PURE__ */ new Set(), t.has(e)))
    return e;
  if (t.add(e), ue(e))
    rt(e.value, t);
  else if (W(e))
    for (let n = 0; n < e.length; n++)
      rt(e[n], t);
  else if (qo(e) || He(e))
    e.forEach((n) => {
      rt(n, t);
    });
  else if (Jo(e))
    for (const n in e)
      rt(e[n], t);
  return e;
}
function _i(e, t) {
  return G(e) ? (
    // #8326: extend call and options.name access are considered side-effects
    // by Rollup, so we have to wrap it in a pure-annotated IIFE.
    /* @__PURE__ */ (() => de({ name: e.name }, t, { setup: e }))()
  ) : e;
}
const yu = (e) => e.type.__isKeepAlive;
function vu(e, t) {
  bi(e, "a", t);
}
function wu(e, t) {
  bi(e, "da", t);
}
function bi(e, t, n = oe) {
  const r = e.__wdc || (e.__wdc = () => {
    let o = n;
    for (; o; ) {
      if (o.isDeactivated)
        return;
      o = o.parent;
    }
    return e();
  });
  if (dn(t, r, n), n) {
    let o = n.parent;
    for (; o && o.parent; )
      yu(o.parent.vnode) && _u(r, t, n, o), o = o.parent;
  }
}
function _u(e, t, n, r) {
  const o = dn(
    t,
    e,
    r,
    !0
    /* prepend */
  );
  Ei(() => {
    zo(r[t], o);
  }, n);
}
function dn(e, t, n = oe, r = !1) {
  if (n) {
    const o = n[e] || (n[e] = []), i = t.__weh || (t.__weh = (...s) => {
      if (n.isUnmounted)
        return;
      cn(), Qt(n);
      const a = vt(t, n, e, s);
      return lr(), un(), a;
    });
    return r ? o.unshift(i) : o.push(i), i;
  } else if (process.env.NODE_ENV !== "production") {
    const o = ec(nr[e].replace(/ hook$/, ""));
    J(
      `${o} is called when there is no active component instance to be associated with. Lifecycle injection APIs can only be used during execution of setup(). If you are using async setup(), make sure to register lifecycle hooks before the first await statement.`
    );
  }
}
const Re = (e) => (t, n = oe) => (
  // post-create lifecycle registrations are noops during SSR (except for serverPrefetch)
  dn(e, (...r) => t(...r), n)
), bu = Re("bm"), Eu = Re("m"), Ou = Re("bu"), Su = Re("u"), xu = Re("bum"), Ei = Re("um"), Nu = Re("sp"), Du = Re(
  "rtg"
), ku = Re(
  "rtc"
);
function Cu(e, t = oe) {
  dn("ec", e, t);
}
const Ru = Symbol.for("v-ndc"), Oi = (e) => e === "_" || e === "$";
process.env.NODE_ENV;
function Mu(e) {
  const { ctx: t, setupState: n } = e;
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
      Object.defineProperty(t, r, {
        enumerable: !0,
        configurable: !0,
        get: () => n[r],
        set: ge
      });
    }
  });
}
function Zr(e) {
  return W(e) ? e.reduce(
    (t, n) => (t[n] = null, t),
    {}
  ) : e;
}
function Pu(e) {
  const t = Gu();
  process.env.NODE_ENV !== "production" && !t && J(
    "withAsyncContext called without active current instance. This is likely a bug."
  );
  let n = e();
  return lr(), Gn(n) && (n = n.catch((r) => {
    throw Qt(t), r;
  })), [n, () => Qt(t)];
}
function Tu() {
  const e = /* @__PURE__ */ Object.create(null);
  return (t, n) => {
    e[n] ? J(`${t} property "${n}" is already defined in ${e[n]}.`) : e[n] = t;
  };
}
function Au(e) {
  const t = xi(e), n = e.proxy, r = e.ctx;
  t.beforeCreate && eo(t.beforeCreate, e, "bc");
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
    mounted: _,
    beforeUpdate: k,
    updated: C,
    activated: A,
    deactivated: $,
    beforeDestroy: q,
    beforeUnmount: U,
    destroyed: j,
    unmounted: L,
    render: b,
    renderTracked: P,
    renderTriggered: E,
    errorCaptured: g,
    serverPrefetch: p,
    // public API
    expose: v,
    inheritAttrs: f,
    // assets
    components: l,
    directives: x,
    filters: N
  } = t, m = process.env.NODE_ENV !== "production" ? Tu() : null;
  if (process.env.NODE_ENV !== "production") {
    const [M] = e.propsOptions;
    if (M)
      for (const I in M)
        m("Props", I);
  }
  if (d && Bu(d, r, m), s)
    for (const M in s) {
      const I = s[M];
      G(I) ? (process.env.NODE_ENV !== "production" ? Object.defineProperty(r, M, {
        value: I.bind(n),
        configurable: !0,
        enumerable: !0,
        writable: !0
      }) : r[M] = I.bind(n), process.env.NODE_ENV !== "production" && m("Methods", M)) : process.env.NODE_ENV !== "production" && J(
        `Method "${M}" has type "${typeof I}" in the component definition. Did you reference the function correctly?`
      );
    }
  if (o) {
    process.env.NODE_ENV !== "production" && !G(o) && J(
      "The data option must be a function. Plain object usage is no longer supported."
    );
    const M = o.call(n, n);
    if (process.env.NODE_ENV !== "production" && Gn(M) && J(
      "data() returned a Promise - note data() cannot be async; If you intend to perform data fetching before component renders, use async setup() + <Suspense>."
    ), !X(M))
      process.env.NODE_ENV !== "production" && J("data() should return an object.");
    else if (e.data = Zn(M), process.env.NODE_ENV !== "production")
      for (const I in M)
        m("Data", I), Oi(I[0]) || Object.defineProperty(r, I, {
          configurable: !0,
          enumerable: !0,
          get: () => M[I],
          set: ge
        });
  }
  if (i)
    for (const M in i) {
      const I = i[M], Y = G(I) ? I.bind(n, n) : G(I.get) ? I.get.bind(n, n) : ge;
      process.env.NODE_ENV !== "production" && Y === ge && J(`Computed property "${M}" has no getter.`);
      const te = !G(I) && G(I.set) ? I.set.bind(n) : process.env.NODE_ENV !== "production" ? () => {
        J(
          `Write operation failed: computed property "${M}" is readonly.`
        );
      } : ge, le = tl({
        get: Y,
        set: te
      });
      Object.defineProperty(r, M, {
        enumerable: !0,
        configurable: !0,
        get: () => le.value,
        set: (_e) => le.value = _e
      }), process.env.NODE_ENV !== "production" && m("Computed", M);
    }
  if (a)
    for (const M in a)
      Si(a[M], r, n, M);
  if (u) {
    const M = G(u) ? u.call(n) : u;
    Reflect.ownKeys(M).forEach((I) => {
      ju(I, M[I]);
    });
  }
  h && eo(h, e, "c");
  function T(M, I) {
    W(I) ? I.forEach((Y) => M(Y.bind(n))) : I && M(I.bind(n));
  }
  if (T(bu, c), T(Eu, _), T(Ou, k), T(Su, C), T(vu, A), T(wu, $), T(Cu, g), T(ku, P), T(Du, E), T(xu, U), T(Ei, L), T(Nu, p), W(v))
    if (v.length) {
      const M = e.exposed || (e.exposed = {});
      v.forEach((I) => {
        Object.defineProperty(M, I, {
          get: () => n[I],
          set: (Y) => n[I] = Y
        });
      });
    } else
      e.exposed || (e.exposed = {});
  b && e.render === ge && (e.render = b), f != null && (e.inheritAttrs = f), l && (e.components = l), x && (e.directives = x);
}
function Bu(e, t, n = ge) {
  W(e) && (e = Vn(e));
  for (const r in e) {
    const o = e[r];
    let i;
    X(o) ? "default" in o ? i = _n(
      o.from || r,
      o.default,
      !0
      /* treat default function as factory */
    ) : i = _n(o.from || r) : i = _n(o), ue(i) ? Object.defineProperty(t, r, {
      enumerable: !0,
      configurable: !0,
      get: () => i.value,
      set: (s) => i.value = s
    }) : t[r] = i, process.env.NODE_ENV !== "production" && n("Inject", r);
  }
}
function eo(e, t, n) {
  vt(
    W(e) ? e.map((r) => r.bind(t.proxy)) : e.bind(t.proxy),
    t,
    n
  );
}
function Si(e, t, n, r) {
  const o = r.includes(".") ? mu(n, r) : () => n[r];
  if (ve(e)) {
    const i = t[e];
    G(i) ? wn(o, i) : process.env.NODE_ENV !== "production" && J(`Invalid watch handler specified by key "${e}"`, i);
  } else if (G(e))
    wn(o, e.bind(n));
  else if (X(e))
    if (W(e))
      e.forEach((i) => Si(i, t, n, r));
    else {
      const i = G(e.handler) ? e.handler.bind(n) : t[e.handler];
      G(i) ? wn(o, i, e) : process.env.NODE_ENV !== "production" && J(`Invalid watch handler specified by key "${e.handler}"`, i);
    }
  else
    process.env.NODE_ENV !== "production" && J(`Invalid watch option: "${r}"`, e);
}
function xi(e) {
  const t = e.type, { mixins: n, extends: r } = t, {
    mixins: o,
    optionsCache: i,
    config: { optionMergeStrategies: s }
  } = e.appContext, a = i.get(t);
  let u;
  return a ? u = a : !o.length && !n && !r ? u = t : (u = {}, o.length && o.forEach(
    (d) => Kt(u, d, s, !0)
  ), Kt(u, t, s)), X(t) && i.set(t, u), u;
}
function Kt(e, t, n, r = !1) {
  const { mixins: o, extends: i } = t;
  i && Kt(e, i, n, !0), o && o.forEach(
    (s) => Kt(e, s, n, !0)
  );
  for (const s in t)
    if (r && s === "expose")
      process.env.NODE_ENV !== "production" && J(
        '"expose" option is ignored when declared in mixins or extends. It should only be declared in the base component itself.'
      );
    else {
      const a = Iu[s] || n && n[s];
      e[s] = a ? a(e[s], t[s]) : t[s];
    }
  return e;
}
const Iu = {
  data: to,
  props: no,
  emits: no,
  // objects
  methods: ht,
  computed: ht,
  // lifecycle
  beforeCreate: se,
  created: se,
  beforeMount: se,
  mounted: se,
  beforeUpdate: se,
  updated: se,
  beforeDestroy: se,
  beforeUnmount: se,
  destroyed: se,
  unmounted: se,
  activated: se,
  deactivated: se,
  errorCaptured: se,
  serverPrefetch: se,
  // assets
  components: ht,
  directives: ht,
  // watch
  watch: Fu,
  // provide / inject
  provide: to,
  inject: Lu
};
function to(e, t) {
  return t ? e ? function() {
    return de(
      G(e) ? e.call(this, this) : e,
      G(t) ? t.call(this, this) : t
    );
  } : t : e;
}
function Lu(e, t) {
  return ht(Vn(e), Vn(t));
}
function Vn(e) {
  if (W(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++)
      t[e[n]] = e[n];
    return t;
  }
  return e;
}
function se(e, t) {
  return e ? [...new Set([].concat(e, t))] : t;
}
function ht(e, t) {
  return e ? de(/* @__PURE__ */ Object.create(null), e, t) : t;
}
function no(e, t) {
  return e ? W(e) && W(t) ? [.../* @__PURE__ */ new Set([...e, ...t])] : de(
    /* @__PURE__ */ Object.create(null),
    Zr(e),
    Zr(t ?? {})
  ) : t;
}
function Fu(e, t) {
  if (!e)
    return t;
  if (!t)
    return e;
  const n = de(/* @__PURE__ */ Object.create(null), e);
  for (const r in t)
    n[r] = se(e[r], t[r]);
  return n;
}
let ro = null;
function ju(e, t) {
  if (!oe)
    process.env.NODE_ENV !== "production" && J("provide() can only be used inside setup().");
  else {
    let n = oe.provides;
    const r = oe.parent && oe.parent.provides;
    r === n && (n = oe.provides = Object.create(r)), n[e] = t;
  }
}
function _n(e, t, n = !1) {
  const r = oe || Se;
  if (r || ro) {
    const o = r ? r.parent == null ? r.vnode.appContext && r.vnode.appContext.provides : r.parent.provides : ro._context.provides;
    if (o && e in o)
      return o[e];
    if (arguments.length > 1)
      return n && G(t) ? t.call(r && r.proxy) : t;
    process.env.NODE_ENV !== "production" && J(`injection "${String(e)}" not found.`);
  } else
    process.env.NODE_ENV !== "production" && J("inject() can only be used inside setup() or functional components.");
}
let Tt, Ie;
function Uu(e, t) {
  e.appContext.config.performance && Gt() && Ie.mark(`vue-${t}-${e.uid}`), process.env.NODE_ENV !== "production" && nu(e, t, Gt() ? Ie.now() : Date.now());
}
function Vu(e, t) {
  if (e.appContext.config.performance && Gt()) {
    const n = `vue-${t}-${e.uid}`, r = n + ":end";
    Ie.mark(r), Ie.measure(
      `<${dr(e, e.type)}> ${t}`,
      n,
      r
    ), Ie.clearMarks(n), Ie.clearMarks(r);
  }
  process.env.NODE_ENV !== "production" && ru(e, t, Gt() ? Ie.now() : Date.now());
}
function Gt() {
  return Tt !== void 0 || (typeof window < "u" && window.performance ? (Tt = !0, Ie = window.performance) : Tt = !1), Tt;
}
const oo = pu, zu = (e) => e.__isTeleport, sr = Symbol.for("v-fgt"), Ni = Symbol.for("v-txt"), ut = Symbol.for("v-cmt"), Vt = [];
let me = null;
function at(e = !1) {
  Vt.push(me = e ? null : []);
}
function Di() {
  Vt.pop(), me = Vt[Vt.length - 1] || null;
}
let lt = 1;
function io(e) {
  lt += e;
}
function ki(e) {
  return e.dynamicChildren = lt > 0 ? me || Ya : null, Di(), lt > 0 && me && me.push(e), e;
}
function bn(e, t, n, r, o, i) {
  return ki(
    Yt(
      e,
      t,
      n,
      r,
      o,
      i,
      !0
      /* isBlock */
    )
  );
}
function Ci(e, t, n, r, o) {
  return ki(
    Fe(
      e,
      t,
      n,
      r,
      o,
      !0
      /* isBlock: prevent a block from tracking itself */
    )
  );
}
function ar(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
function En(e, t) {
  return process.env.NODE_ENV !== "production" && t.shapeFlag & 6 && tt.has(t.type) ? (e.shapeFlag &= -257, t.shapeFlag &= -513, !1) : e.type === t.type && e.key === t.key;
}
const qu = (...e) => Pi(
  ...e
), Ri = "__vInternal", Mi = ({ key: e }) => e ?? null, zt = ({
  ref: e,
  ref_key: t,
  ref_for: n
}) => (typeof e == "number" && (e = "" + e), e != null ? ve(e) || ue(e) || G(e) ? { i: Se, r: e, k: t, f: !!n } : e : null);
function Yt(e, t = null, n = null, r = 0, o = null, i = e === sr ? 0 : 1, s = !1, a = !1) {
  const u = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && Mi(t),
    ref: t && zt(t),
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
    ctx: Se
  };
  return a ? (cr(u, n), i & 128 && e.normalize(u)) : n && (u.shapeFlag |= ve(n) ? 8 : 16), process.env.NODE_ENV !== "production" && u.key !== u.key && J("VNode created with invalid key (NaN). VNode type:", u.type), lt > 0 && // avoid a block node from tracking itself
  !s && // has current parent block
  me && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (u.patchFlag > 0 || i & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  u.patchFlag !== 32 && me.push(u), u;
}
const Fe = process.env.NODE_ENV !== "production" ? qu : Pi;
function Pi(e, t = null, n = null, r = 0, o = null, i = !1) {
  if ((!e || e === Ru) && (process.env.NODE_ENV !== "production" && !e && J(`Invalid vnode type when creating vnode: ${e}.`), e = ut), ar(e)) {
    const a = bt(
      e,
      t,
      !0
      /* mergeRef: true */
    );
    return n && cr(a, n), lt > 0 && !i && me && (a.shapeFlag & 6 ? me[me.indexOf(e)] = a : me.push(a)), a.patchFlag |= -2, a;
  }
  if (Bi(e) && (e = e.__vccOpts), t) {
    t = $u(t);
    let { class: a, style: u } = t;
    a && !ve(a) && (t.class = ot(a)), X(u) && (jn(u) && !W(u) && (u = de({}, u)), t.style = Qn(u));
  }
  const s = ve(e) ? 1 : su(e) ? 128 : zu(e) ? 64 : X(e) ? 4 : G(e) ? 2 : 0;
  return process.env.NODE_ENV !== "production" && s & 4 && jn(e) && (e = H(e), J(
    "Vue received a Component which was made a reactive object. This can lead to unnecessary performance overhead, and should be avoided by marking the component with `markRaw` or using `shallowRef` instead of `ref`.",
    `
Component that was made reactive: `,
    e
  )), Yt(
    e,
    t,
    n,
    r,
    o,
    s,
    i,
    !0
  );
}
function $u(e) {
  return e ? jn(e) || Ri in e ? de({}, e) : e : null;
}
function bt(e, t, n = !1) {
  const { props: r, ref: o, patchFlag: i, children: s } = e, a = t ? Ku(r || {}, t) : r;
  return {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: a,
    key: a && Mi(a),
    ref: t && t.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      n && o ? W(o) ? o.concat(zt(t)) : [o, zt(t)] : zt(t)
    ) : o,
    scopeId: e.scopeId,
    slotScopeIds: e.slotScopeIds,
    children: process.env.NODE_ENV !== "production" && i === -1 && W(s) ? s.map(Ti) : s,
    target: e.target,
    targetAnchor: e.targetAnchor,
    staticCount: e.staticCount,
    shapeFlag: e.shapeFlag,
    // if the vnode is cloned with extra props, we can no longer assume its
    // existing patch flag to be reliable and need to add the FULL_PROPS flag.
    // note: preserve flag for fragments since they use the flag for children
    // fast paths only.
    patchFlag: t && e.type !== sr ? i === -1 ? 16 : i | 16 : i,
    dynamicProps: e.dynamicProps,
    dynamicChildren: e.dynamicChildren,
    appContext: e.appContext,
    dirs: e.dirs,
    transition: e.transition,
    // These should technically only be non-null on mounted VNodes. However,
    // they *should* be copied for kept-alive vnodes. So we just always copy
    // them since them being non-null during a mount doesn't affect the logic as
    // they will simply be overwritten.
    component: e.component,
    suspense: e.suspense,
    ssContent: e.ssContent && bt(e.ssContent),
    ssFallback: e.ssFallback && bt(e.ssFallback),
    el: e.el,
    anchor: e.anchor,
    ctx: e.ctx,
    ce: e.ce
  };
}
function Ti(e) {
  const t = bt(e);
  return W(e.children) && (t.children = e.children.map(Ti)), t;
}
function Hu(e = " ", t = 0) {
  return Fe(Ni, null, e, t);
}
function so(e = "", t = !1) {
  return t ? (at(), Ci(ut, null, e)) : Fe(ut, null, e);
}
function Ju(e) {
  return e == null || typeof e == "boolean" ? Fe(ut) : W(e) ? Fe(
    sr,
    null,
    // #3666, avoid reference pollution when reusing vnode
    e.slice()
  ) : typeof e == "object" ? Wu(e) : Fe(Ni, null, String(e));
}
function Wu(e) {
  return e.el === null && e.patchFlag !== -1 || e.memo ? e : bt(e);
}
function cr(e, t) {
  let n = 0;
  const { shapeFlag: r } = e;
  if (t == null)
    t = null;
  else if (W(t))
    n = 16;
  else if (typeof t == "object")
    if (r & 65) {
      const o = t.default;
      o && (o._c && (o._d = !1), cr(e, o()), o._c && (o._d = !0));
      return;
    } else {
      n = 32;
      const o = t._;
      !o && !(Ri in t) ? t._ctx = Se : o === 3 && Se && (Se.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
    }
  else
    G(t) ? (t = { default: t, _ctx: Se }, n = 32) : (t = String(t), r & 64 ? (n = 16, t = [Hu(t)]) : n = 8);
  e.children = t, e.shapeFlag |= n;
}
function Ku(...e) {
  const t = {};
  for (let n = 0; n < e.length; n++) {
    const r = e[n];
    for (const o in r)
      if (o === "class")
        t.class !== r.class && (t.class = ot([t.class, r.class]));
      else if (o === "style")
        t.style = Qn([t.style, r.style]);
      else if (Xa(o)) {
        const i = t[o], s = r[o];
        s && i !== s && !(W(i) && i.includes(s)) && (t[o] = i ? [].concat(i, s) : s);
      } else
        o !== "" && (t[o] = r[o]);
  }
  return t;
}
let oe = null;
const Gu = () => oe || Se;
let ur, Ze, ao = "__VUE_INSTANCE_SETTERS__";
(Ze = Tn()[ao]) || (Ze = Tn()[ao] = []), Ze.push((e) => oe = e), ur = (e) => {
  Ze.length > 1 ? Ze.forEach((t) => t(e)) : Ze[0](e);
};
const Qt = (e) => {
  ur(e), e.scope.on();
}, lr = () => {
  oe && oe.scope.off(), ur(null);
};
let Yu = !1;
function Qu(e, t, n) {
  G(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : X(t) ? (process.env.NODE_ENV !== "production" && ar(t) && J(
    "setup() should not return VNodes directly - return a render function instead."
  ), process.env.NODE_ENV !== "production" && (e.devtoolsRawSetupState = t), e.setupState = Lc(t), process.env.NODE_ENV !== "production" && Mu(e)) : process.env.NODE_ENV !== "production" && t !== void 0 && J(
    `setup() should return an object. Received: ${t === null ? "null" : typeof t}`
  ), Xu(e, n);
}
let co;
function Xu(e, t, n) {
  const r = e.type;
  if (!e.render) {
    if (!t && co && !r.render) {
      const o = r.template || xi(e).template;
      if (o) {
        process.env.NODE_ENV !== "production" && Uu(e, "compile");
        const { isCustomElement: i, compilerOptions: s } = e.appContext.config, { delimiters: a, compilerOptions: u } = r, d = de(
          de(
            {
              isCustomElement: i,
              delimiters: a
            },
            s
          ),
          u
        );
        r.render = co(o, d), process.env.NODE_ENV !== "production" && Vu(e, "compile");
      }
    }
    e.render = r.render || ge;
  }
  Qt(e), cn(), Au(e), un(), lr(), process.env.NODE_ENV !== "production" && !r.render && e.render === ge && !t && (r.template ? J(
    'Component provided template option but runtime compilation is not supported in this build of Vue. Configure your bundler to alias "vue" to "vue/dist/vue.esm-bundler.js".'
    /* should not happen */
  ) : J("Component is missing template or render function."));
}
const Zu = /(?:^|[-_])(\w)/g, el = (e) => e.replace(Zu, (t) => t.toUpperCase()).replace(/[-_]/g, "");
function Ai(e, t = !0) {
  return G(e) ? e.displayName || e.name : e.name || t && e.__name;
}
function dr(e, t, n = !1) {
  let r = Ai(t);
  if (!r && t.__file) {
    const o = t.__file.match(/([^/\\]+)\.\w+$/);
    o && (r = o[1]);
  }
  if (!r && e && e.parent) {
    const o = (i) => {
      for (const s in i)
        if (i[s] === t)
          return s;
    };
    r = o(
      e.components || e.parent.type.components
    ) || o(e.appContext.components);
  }
  return r ? el(r) : n ? "App" : "Anonymous";
}
function Bi(e) {
  return G(e) && "__vccOpts" in e;
}
const tl = (e, t) => jc(e, t, Yu);
function On(e) {
  return !!(e && e.__v_isShallow);
}
function nl() {
  if (process.env.NODE_ENV === "production" || typeof window > "u")
    return;
  const e = { style: "color:#3ba776" }, t = { style: "color:#0b1bc9" }, n = { style: "color:#b62e24" }, r = { style: "color:#9d288c" }, o = {
    header(c) {
      return X(c) ? c.__isVue ? ["div", e, "VueInstance"] : ue(c) ? [
        "div",
        {},
        ["span", e, h(c)],
        "<",
        a(c.value),
        ">"
      ] : We(c) ? [
        "div",
        {},
        ["span", e, On(c) ? "ShallowReactive" : "Reactive"],
        "<",
        a(c),
        `>${Ye(c) ? " (readonly)" : ""}`
      ] : Ye(c) ? [
        "div",
        {},
        ["span", e, On(c) ? "ShallowReadonly" : "Readonly"],
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
    const _ = [];
    c.type.props && c.props && _.push(s("props", H(c.props))), c.setupState !== Pn && _.push(s("setup", c.setupState)), c.data !== Pn && _.push(s("data", H(c.data)));
    const k = u(c, "computed");
    k && _.push(s("computed", k));
    const C = u(c, "inject");
    return C && _.push(s("injected", C)), _.push([
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
    ]), _;
  }
  function s(c, _) {
    return _ = de({}, _), Object.keys(_).length ? [
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
        ...Object.keys(_).map((k) => [
          "div",
          {},
          ["span", r, k + ": "],
          a(_[k], !1)
        ])
      ]
    ] : ["span", {}];
  }
  function a(c, _ = !0) {
    return typeof c == "number" ? ["span", t, c] : typeof c == "string" ? ["span", n, JSON.stringify(c)] : typeof c == "boolean" ? ["span", r, c] : X(c) ? ["object", { object: _ ? H(c) : c }] : ["span", n, String(c)];
  }
  function u(c, _) {
    const k = c.type;
    if (G(k))
      return;
    const C = {};
    for (const A in c.ctx)
      d(k, A, _) && (C[A] = c.ctx[A]);
    return C;
  }
  function d(c, _, k) {
    const C = c[k];
    if (W(C) && C.includes(_) || X(C) && _ in C || c.extends && d(c.extends, _, k) || c.mixins && c.mixins.some((A) => d(A, _, k)))
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
function ol(e) {
  switch (!0) {
    case /^[0-9]*$/.test(e):
      return Sn.numeric;
    case /^[0-9A-Z $%*+\-./:]*$/.test(e):
      return Sn.alphanumeric;
    default:
      return Sn.byte;
  }
}
const At = (e) => !!e && typeof e == "object" && !Array.isArray(e);
function Xt(e, ...t) {
  if (!t.length)
    return e;
  const n = t.shift();
  return n === void 0 || !At(e) || !At(n) ? e : (e = { ...e }, Object.keys(n).forEach((r) => {
    const o = e[r], i = n[r];
    Array.isArray(o) && Array.isArray(i) ? e[r] = i : At(o) && At(i) ? e[r] = Xt(Object.assign({}, o), i) : e[r] = i;
  }), Xt(e, ...t));
}
function il(e, t) {
  const n = document.createElement("a");
  n.download = t, n.href = e, document.body.appendChild(n), n.click(), document.body.removeChild(n);
}
function sl({
  originalHeight: e,
  originalWidth: t,
  maxHiddenDots: n,
  maxHiddenAxisDots: r,
  dotSize: o
}) {
  const i = { x: 0, y: 0 }, s = { x: 0, y: 0 };
  if (e <= 0 || t <= 0 || n <= 0 || o <= 0)
    return {
      height: 0,
      width: 0,
      hideYDots: 0,
      hideXDots: 0
    };
  const a = e / t;
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
}, et = {
  dots: "dots",
  rounded: "rounded",
  classy: "classy",
  classyRounded: "classy-rounded",
  square: "square",
  extraRounded: "extra-rounded"
};
class xn {
  constructor({ context: t, type: n }) {
    ce(this, "_context"), ce(this, "_type"), this._context = t, this._type = n;
  }
  draw(t, n, r, o) {
    const i = this._context, s = this._type;
    let a;
    switch (s) {
      case et.dots:
        a = this._drawDot;
        break;
      case et.classy:
        a = this._drawClassy;
        break;
      case et.classyRounded:
        a = this._drawClassyRounded;
        break;
      case et.rounded:
        a = this._drawRounded;
        break;
      case et.extraRounded:
        a = this._drawExtraRounded;
        break;
      case et.square:
      default:
        a = this._drawSquare;
    }
    a.call(this, { x: t, y: n, size: r, context: i, getNeighbor: o });
  }
  _rotateFigure({ x: t, y: n, size: r, context: o, rotation: i, draw: s }) {
    const a = t + r / 2, u = n + r / 2;
    o.translate(a, u), i && o.rotate(i), s(), o.closePath(), i && o.rotate(-i), o.translate(-a, -u);
  }
  _basicDot(t) {
    const { size: n, context: r } = t;
    this._rotateFigure({
      ...t,
      draw: () => {
        r.moveTo(0, 0), r.arc(0, 0, n / 2, 0, Math.PI * 2);
      }
    });
  }
  _basicSquare(t) {
    const { size: n, context: r } = t;
    this._rotateFigure({
      ...t,
      draw: () => {
        r.moveTo(0, 0), r.rect(-n / 2, -n / 2, n, n);
      }
    });
  }
  // if rotation === 0 - right side is rounded
  _basicSideRounded(t) {
    const { size: n, context: r } = t;
    this._rotateFigure({
      ...t,
      draw: () => {
        r.moveTo(0, 0), r.arc(0, 0, n / 2, -Math.PI / 2, Math.PI / 2), r.lineTo(-n / 2, n / 2), r.lineTo(-n / 2, -n / 2), r.lineTo(0, -n / 2);
      }
    });
  }
  // if rotation === 0 - top right corner is rounded
  _basicCornerRounded(t) {
    const { size: n, context: r } = t;
    this._rotateFigure({
      ...t,
      draw: () => {
        r.moveTo(0, 0), r.arc(0, 0, n / 2, -Math.PI / 2, 0), r.lineTo(n / 2, n / 2), r.lineTo(-n / 2, n / 2), r.lineTo(-n / 2, -n / 2), r.lineTo(0, -n / 2);
      }
    });
  }
  // if rotation === 0 - top right corner is rounded
  _basicCornerExtraRounded(t) {
    const { size: n, context: r } = t;
    this._rotateFigure({
      ...t,
      draw: () => {
        r.moveTo(0, 0), r.arc(-n / 2, n / 2, n, -Math.PI / 2, 0), r.lineTo(-n / 2, n / 2), r.lineTo(-n / 2, -n / 2);
      }
    });
  }
  _basicCornersRounded(t) {
    const { size: n, context: r } = t;
    this._rotateFigure({
      ...t,
      draw: () => {
        r.moveTo(0, 0), r.arc(0, 0, n / 2, -Math.PI / 2, 0), r.lineTo(n / 2, n / 2), r.lineTo(0, n / 2), r.arc(0, 0, n / 2, Math.PI / 2, Math.PI), r.lineTo(-n / 2, -n / 2), r.lineTo(0, -n / 2);
      }
    });
  }
  _basicCornersExtraRounded(t) {
    const { size: n, context: r } = t;
    this._rotateFigure({
      ...t,
      draw: () => {
        r.moveTo(0, 0), r.arc(-n / 2, n / 2, n, -Math.PI / 2, 0), r.arc(n / 2, -n / 2, n, Math.PI / 2, Math.PI);
      }
    });
  }
  _drawDot({ x: t, y: n, size: r, context: o }) {
    this._basicDot({ x: t, y: n, size: r, context: o, rotation: 0 });
  }
  _drawSquare({ x: t, y: n, size: r, context: o }) {
    this._basicSquare({ x: t, y: n, size: r, context: o, rotation: 0 });
  }
  _drawRounded({ x: t, y: n, size: r, context: o, getNeighbor: i }) {
    const s = +i(-1, 0), a = +i(1, 0), u = +i(0, -1), d = +i(0, 1), h = s + a + u + d;
    if (h === 0) {
      this._basicDot({ x: t, y: n, size: r, context: o, rotation: 0 });
      return;
    }
    if (h > 2 || s && a || u && d) {
      this._basicSquare({ x: t, y: n, size: r, context: o, rotation: 0 });
      return;
    }
    if (h === 2) {
      let c = 0;
      s && u ? c = Math.PI / 2 : u && a ? c = Math.PI : a && d && (c = -Math.PI / 2), this._basicCornerRounded({ x: t, y: n, size: r, context: o, rotation: c });
      return;
    }
    if (h === 1) {
      let c = 0;
      u ? c = Math.PI / 2 : a ? c = Math.PI : d && (c = -Math.PI / 2), this._basicSideRounded({ x: t, y: n, size: r, context: o, rotation: c });
    }
  }
  _drawExtraRounded({ x: t, y: n, size: r, context: o, getNeighbor: i }) {
    const s = +i(-1, 0), a = +i(1, 0), u = +i(0, -1), d = +i(0, 1), h = s + a + u + d;
    if (h === 0) {
      this._basicDot({ x: t, y: n, size: r, context: o, rotation: 0 });
      return;
    }
    if (h > 2 || s && a || u && d) {
      this._basicSquare({ x: t, y: n, size: r, context: o, rotation: 0 });
      return;
    }
    if (h === 2) {
      let c = 0;
      s && u ? c = Math.PI / 2 : u && a ? c = Math.PI : a && d && (c = -Math.PI / 2), this._basicCornerExtraRounded({ x: t, y: n, size: r, context: o, rotation: c });
      return;
    }
    if (h === 1) {
      let c = 0;
      u ? c = Math.PI / 2 : a ? c = Math.PI : d && (c = -Math.PI / 2), this._basicSideRounded({ x: t, y: n, size: r, context: o, rotation: c });
    }
  }
  _drawClassy({ x: t, y: n, size: r, context: o, getNeighbor: i }) {
    const s = +i(-1, 0), a = +i(1, 0), u = +i(0, -1), d = +i(0, 1);
    if (s + a + u + d === 0) {
      this._basicCornersRounded({ x: t, y: n, size: r, context: o, rotation: Math.PI / 2 });
      return;
    }
    if (!s && !u) {
      this._basicCornerRounded({ x: t, y: n, size: r, context: o, rotation: -Math.PI / 2 });
      return;
    }
    if (!a && !d) {
      this._basicCornerRounded({ x: t, y: n, size: r, context: o, rotation: Math.PI / 2 });
      return;
    }
    this._basicSquare({ x: t, y: n, size: r, context: o, rotation: 0 });
  }
  _drawClassyRounded({ x: t, y: n, size: r, context: o, getNeighbor: i }) {
    const s = +i(-1, 0), a = +i(1, 0), u = +i(0, -1), d = +i(0, 1);
    if (s + a + u + d === 0) {
      this._basicCornersRounded({ x: t, y: n, size: r, context: o, rotation: Math.PI / 2 });
      return;
    }
    if (!s && !u) {
      this._basicCornerExtraRounded({ x: t, y: n, size: r, context: o, rotation: -Math.PI / 2 });
      return;
    }
    if (!a && !d) {
      this._basicCornerExtraRounded({ x: t, y: n, size: r, context: o, rotation: Math.PI / 2 });
      return;
    }
    this._basicSquare({ x: t, y: n, size: r, context: o, rotation: 0 });
  }
}
const Nn = {
  dot: "dot",
  square: "square",
  extraRounded: "extra-rounded"
};
class cl {
  constructor({ context: t, type: n }) {
    ce(this, "_context"), ce(this, "_type"), this._context = t, this._type = n;
  }
  draw(t, n, r, o) {
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
    a.call(this, { x: t, y: n, size: r, context: i, rotation: o });
  }
  _rotateFigure({ x: t, y: n, size: r, context: o, rotation: i, draw: s }) {
    const a = t + r / 2, u = n + r / 2;
    o.translate(a, u), i && o.rotate(i), s(), o.closePath(), i && o.rotate(-i), o.translate(-a, -u);
  }
  _basicDot(t) {
    const { size: n, context: r } = t, o = n / 7;
    this._rotateFigure({
      ...t,
      draw: () => {
        r.arc(0, 0, n / 2, 0, Math.PI * 2), r.arc(0, 0, n / 2 - o, 0, Math.PI * 2);
      }
    });
  }
  _basicSquare(t) {
    const { size: n, context: r } = t, o = n / 7;
    this._rotateFigure({
      ...t,
      draw: () => {
        r.rect(-n / 2, -n / 2, n, n), r.rect(-n / 2 + o, -n / 2 + o, n - 2 * o, n - 2 * o);
      }
    });
  }
  _basicExtraRounded(t) {
    const { size: n, context: r } = t, o = n / 7;
    this._rotateFigure({
      ...t,
      draw: () => {
        r.arc(-o, -o, 2.5 * o, Math.PI, -Math.PI / 2), r.lineTo(o, -3.5 * o), r.arc(o, -o, 2.5 * o, -Math.PI / 2, 0), r.lineTo(3.5 * o, -o), r.arc(o, o, 2.5 * o, 0, Math.PI / 2), r.lineTo(-o, 3.5 * o), r.arc(-o, o, 2.5 * o, Math.PI / 2, Math.PI), r.lineTo(-3.5 * o, -o), r.arc(-o, -o, 1.5 * o, Math.PI, -Math.PI / 2), r.lineTo(o, -2.5 * o), r.arc(o, -o, 1.5 * o, -Math.PI / 2, 0), r.lineTo(2.5 * o, -o), r.arc(o, o, 1.5 * o, 0, Math.PI / 2), r.lineTo(-o, 2.5 * o), r.arc(-o, o, 1.5 * o, Math.PI / 2, Math.PI), r.lineTo(-2.5 * o, -o);
      }
    });
  }
  _drawDot({ x: t, y: n, size: r, context: o, rotation: i }) {
    this._basicDot({ x: t, y: n, size: r, context: o, rotation: i });
  }
  _drawSquare({ x: t, y: n, size: r, context: o, rotation: i }) {
    this._basicSquare({ x: t, y: n, size: r, context: o, rotation: i });
  }
  _drawExtraRounded({ x: t, y: n, size: r, context: o, rotation: i }) {
    this._basicExtraRounded({ x: t, y: n, size: r, context: o, rotation: i });
  }
}
const uo = {
  dot: "dot",
  square: "square"
};
class ul {
  constructor({ context: t, type: n }) {
    ce(this, "_context"), ce(this, "_type"), this._context = t, this._type = n;
  }
  draw(t, n, r, o) {
    const i = this._context;
    switch (this._type) {
      case uo.square:
        this._drawSquare({ x: t, y: n, size: r, context: i, rotation: o });
        break;
      case uo.dot:
      default:
        this._drawDot({ x: t, y: n, size: r, context: i, rotation: o });
    }
  }
  _rotateFigure({ x: t, y: n, size: r, context: o, rotation: i, draw: s }) {
    const a = t + r / 2, u = n + r / 2;
    o.moveTo(0, 0), o.translate(a, u), i && o.rotate(i), s(), o.closePath(), i && o.rotate(-i), o.translate(-a, -u);
  }
  _drawDot(t) {
    const { size: n, context: r } = t;
    this._rotateFigure({
      ...t,
      draw: () => {
        r.moveTo(0, 0), r.arc(0, 0, n / 2, 0, Math.PI * 2);
      }
    });
  }
  _drawSquare(t) {
    const { size: n, context: r } = t;
    this._rotateFigure({
      ...t,
      draw: () => {
        r.moveTo(0, 0), r.rect(-n / 2, -n / 2, n, n);
      }
    });
  }
}
const ll = {
  radial: "radial",
  linear: "linear"
}, qe = [
  [1, 1, 1, 1, 1, 1, 1],
  [1, 0, 0, 0, 0, 0, 1],
  [1, 0, 0, 0, 0, 0, 1],
  [1, 0, 0, 0, 0, 0, 1],
  [1, 0, 0, 0, 0, 0, 1],
  [1, 0, 0, 0, 0, 0, 1],
  [1, 1, 1, 1, 1, 1, 1]
], $e = [
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
  constructor(t) {
    ce(this, "_canvas"), ce(this, "_options"), ce(this, "_qr"), ce(this, "_image"), this._canvas = document.createElement("canvas"), this._canvas.width = t.width, this._canvas.height = t.height, this._options = t;
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
    const t = this.context;
    t && t.clearRect(0, 0, this._canvas.width, this._canvas.height);
  }
  async drawQR(t) {
    const n = t.getModuleCount(), r = Math.min(this._options.width, this._options.height) - this._options.margin * 2, o = Math.floor(r / n);
    let i = {
      hideXDots: 0,
      hideYDots: 0,
      width: 0,
      height: 0
    };
    if (this._qr = t, this._options.image) {
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
      var u, d, h, c, _, k;
      return !(this._options.imageOptions.hideBackgroundDots && s >= (n - i.hideXDots) / 2 && s < (n + i.hideXDots) / 2 && a >= (n - i.hideYDots) / 2 && a < (n + i.hideYDots) / 2 || (u = qe[s]) != null && u[a] || (d = qe[s - n + 7]) != null && d[a] || (h = qe[s]) != null && h[a - n + 7] || (c = $e[s]) != null && c[a] || (_ = $e[s - n + 7]) != null && _[a] || (k = $e[s]) != null && k[a - n + 7]);
    }), this.drawCorners(), this._options.image && this.drawImage({ width: i.width, height: i.height, count: n, dotSize: o });
  }
  drawBackground() {
    const t = this.context, n = this._options;
    if (t) {
      if (n.backgroundOptions.gradient) {
        const r = n.backgroundOptions.gradient, o = this._createGradient({
          context: t,
          options: r,
          additionalRotation: 0,
          x: 0,
          y: 0,
          size: this._canvas.width > this._canvas.height ? this._canvas.width : this._canvas.height
        });
        r.colorStops.forEach(({ offset: i, color: s }) => {
          o.addColorStop(i, s);
        }), t.fillStyle = o;
      } else
        n.backgroundOptions.color && (t.fillStyle = n.backgroundOptions.color);
      t.fillRect(0, 0, this._canvas.width, this._canvas.height);
    }
  }
  drawDots(t) {
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
        t && !t(h, c) || this._qr.isDark(h, c) && d.draw(
          a + h * s,
          u + c * s,
          s,
          (_, k) => h + _ < 0 || c + k < 0 || h + _ >= o || c + k >= o || t && !t(h + _, c + k) ? !1 : !!this._qr && this._qr.isDark(h + _, c + k)
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
      h.colorStops.forEach(({ offset: _, color: k }) => {
        c.addColorStop(_, k);
      }), n.fillStyle = n.strokeStyle = c;
    } else
      r.dotsOptions.color && (n.fillStyle = n.strokeStyle = r.dotsOptions.color);
    n.fill("evenodd");
  }
  drawCorners(t) {
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
    ].forEach(([c, _, k]) => {
      var C, A, $, q, U, j, L, b, P, E;
      if (t && !t(c, _))
        return;
      const g = d + c * s * (o - 7), p = h + _ * s * (o - 7);
      if ((C = r.cornersSquareOptions) != null && C.type) {
        const v = new cl({ context: n, type: (A = r.cornersSquareOptions) == null ? void 0 : A.type });
        n.beginPath(), v.draw(g, p, a, k);
      } else {
        const v = new xn({ context: n, type: r.dotsOptions.type });
        n.beginPath();
        for (let f = 0; f < qe.length; f++)
          for (let l = 0; l < qe[f].length; l++)
            ($ = qe[f]) != null && $[l] && v.draw(
              g + f * s,
              p + l * s,
              s,
              (x, N) => {
                var m;
                return !!((m = qe[f + x]) != null && m[l + N]);
              }
            );
      }
      if ((q = r.cornersSquareOptions) != null && q.gradient) {
        const v = r.cornersSquareOptions.gradient, f = this._createGradient({
          context: n,
          options: v,
          additionalRotation: k,
          x: g,
          y: p,
          size: a
        });
        v.colorStops.forEach(({ offset: l, color: x }) => {
          f.addColorStop(l, x);
        }), n.fillStyle = n.strokeStyle = f;
      } else
        (U = r.cornersSquareOptions) != null && U.color && (n.fillStyle = n.strokeStyle = r.cornersSquareOptions.color);
      if (n.fill("evenodd"), (j = r.cornersDotOptions) != null && j.type) {
        const v = new ul({ context: n, type: (L = r.cornersDotOptions) == null ? void 0 : L.type });
        n.beginPath(), v.draw(g + s * 2, p + s * 2, u, k);
      } else {
        const v = new xn({ context: n, type: r.dotsOptions.type });
        n.beginPath();
        for (let f = 0; f < $e.length; f++)
          for (let l = 0; l < $e[f].length; l++)
            (b = $e[f]) != null && b[l] && v.draw(
              g + f * s,
              p + l * s,
              s,
              (x, N) => {
                var m;
                return !!((m = $e[f + x]) != null && m[l + N]);
              }
            );
      }
      if ((P = r.cornersDotOptions) != null && P.gradient) {
        const v = r.cornersDotOptions.gradient, f = this._createGradient({
          context: n,
          options: v,
          additionalRotation: k,
          x: g + s * 2,
          y: p + s * 2,
          size: u
        });
        v.colorStops.forEach(({ offset: l, color: x }) => {
          f.addColorStop(l, x);
        }), n.fillStyle = n.strokeStyle = f;
      } else
        (E = r.cornersDotOptions) != null && E.color && (n.fillStyle = n.strokeStyle = r.cornersDotOptions.color);
      n.fill("evenodd");
    });
  }
  loadImage() {
    return new Promise((t, n) => {
      const r = this._options, o = new Image();
      if (!r.image)
        return n("Image is not defined");
      typeof r.imageOptions.crossOrigin == "string" && (o.crossOrigin = r.imageOptions.crossOrigin), this._image = o, o.onload = () => {
        t();
      }, o.src = r.image;
    });
  }
  drawImage({
    width: t,
    height: n,
    count: r,
    dotSize: o
  }) {
    const i = this.context;
    if (!i)
      throw "canvasContext is not defined";
    if (!this._image)
      throw "image is not defined";
    const s = this._options, a = Math.floor((s.width - r * o) / 2), u = Math.floor((s.height - r * o) / 2), d = a + s.imageOptions.margin + (r * o - t) / 2, h = u + s.imageOptions.margin + (r * o - n) / 2, c = t - s.imageOptions.margin * 2, _ = n - s.imageOptions.margin * 2;
    i.drawImage(this._image, d, h, c < 0 ? 0 : c, _ < 0 ? 0 : _);
  }
  _createGradient({
    context: t,
    options: n,
    additionalRotation: r,
    x: o,
    y: i,
    size: s
  }) {
    let a;
    if (n.type === ll.radial)
      a = t.createRadialGradient(o + s / 2, i + s / 2, 0, o + s / 2, i + s / 2, s / 2);
    else {
      const u = ((n.rotation || 0) + r) % (2 * Math.PI), d = (u + 2 * Math.PI) % (2 * Math.PI);
      let h = o + s / 2, c = i + s / 2, _ = o + s / 2, k = i + s / 2;
      d >= 0 && d <= 0.25 * Math.PI || d > 1.75 * Math.PI && d <= 2 * Math.PI ? (h = h - s / 2, c = c - s / 2 * Math.tan(u), _ = _ + s / 2, k = k + s / 2 * Math.tan(u)) : d > 0.25 * Math.PI && d <= 0.75 * Math.PI ? (c = c - s / 2, h = h - s / 2 / Math.tan(u), k = k + s / 2, _ = _ + s / 2 / Math.tan(u)) : d > 0.75 * Math.PI && d <= 1.25 * Math.PI ? (h = h + s / 2, c = c + s / 2 * Math.tan(u), _ = _ - s / 2, k = k - s / 2 * Math.tan(u)) : d > 1.25 * Math.PI && d <= 1.75 * Math.PI && (c = c + s / 2, h = h + s / 2 / Math.tan(u), k = k - s / 2, _ = _ - s / 2 / Math.tan(u)), a = t.createLinearGradient(Math.round(h), Math.round(c), Math.round(_), Math.round(k));
    }
    return a;
  }
}
const Ii = {};
for (let e = 0; e <= 40; e++)
  Ii[e] = e;
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
function Bt(e) {
  const t = { ...e };
  if (!t.colorStops || !t.colorStops.length)
    throw "Field 'colorStops' is required in gradient";
  return t.rotation ? t.rotation = Number(t.rotation) : t.rotation = 0, t.colorStops = t.colorStops.map((n) => ({
    ...n,
    offset: Number(n.offset)
  })), t;
}
function fo(e) {
  const t = { ...e };
  return t.width = Number(t.width), t.height = Number(t.height), t.margin = Number(t.margin), t.imageOptions = {
    ...t.imageOptions,
    hideBackgroundDots: !!t.imageOptions.hideBackgroundDots,
    imageSize: Number(t.imageOptions.imageSize),
    margin: Number(t.imageOptions.margin)
  }, t.margin > Math.min(t.width, t.height) && (t.margin = Math.min(t.width, t.height)), t.dotsOptions = {
    ...t.dotsOptions
  }, t.dotsOptions.gradient && (t.dotsOptions.gradient = Bt(t.dotsOptions.gradient)), t.cornersSquareOptions && (t.cornersSquareOptions = {
    ...t.cornersSquareOptions
  }, t.cornersSquareOptions.gradient && (t.cornersSquareOptions.gradient = Bt(t.cornersSquareOptions.gradient))), t.cornersDotOptions && (t.cornersDotOptions = {
    ...t.cornersDotOptions
  }, t.cornersDotOptions.gradient && (t.cornersDotOptions.gradient = Bt(t.cornersDotOptions.gradient))), t.backgroundOptions && (t.backgroundOptions = {
    ...t.backgroundOptions
  }, t.backgroundOptions.gradient && (t.backgroundOptions.gradient = Bt(t.backgroundOptions.gradient))), t;
}
function pl(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Li = { exports: {} };
(function(e, t) {
  var n = function() {
    var r = function(b, P) {
      var E = 236, g = 17, p = b, v = i[P], f = null, l = 0, x = null, N = [], m = {}, T = function(O, S) {
        l = p * 4 + 17, f = function(y) {
          for (var D = new Array(y), R = 0; R < y; R += 1) {
            D[R] = new Array(y);
            for (var B = 0; B < y; B += 1)
              D[R][B] = null;
          }
          return D;
        }(l), M(0, 0), M(l - 7, 0), M(0, l - 7), te(), Y(), _e(O, S), p >= 7 && le(O), x == null && (x = ji(p, v, N)), ke(x, S);
      }, M = function(O, S) {
        for (var y = -1; y <= 7; y += 1)
          if (!(O + y <= -1 || l <= O + y))
            for (var D = -1; D <= 7; D += 1)
              S + D <= -1 || l <= S + D || (0 <= y && y <= 6 && (D == 0 || D == 6) || 0 <= D && D <= 6 && (y == 0 || y == 6) || 2 <= y && y <= 4 && 2 <= D && D <= 4 ? f[O + y][S + D] = !0 : f[O + y][S + D] = !1);
      }, I = function() {
        for (var O = 0, S = 0, y = 0; y < 8; y += 1) {
          T(!0, y);
          var D = a.getLostPoint(m);
          (y == 0 || O > D) && (O = D, S = y);
        }
        return S;
      }, Y = function() {
        for (var O = 8; O < l - 8; O += 1)
          f[O][6] == null && (f[O][6] = O % 2 == 0);
        for (var S = 8; S < l - 8; S += 1)
          f[6][S] == null && (f[6][S] = S % 2 == 0);
      }, te = function() {
        for (var O = a.getPatternPosition(p), S = 0; S < O.length; S += 1)
          for (var y = 0; y < O.length; y += 1) {
            var D = O[S], R = O[y];
            if (f[D][R] == null)
              for (var B = -2; B <= 2; B += 1)
                for (var V = -2; V <= 2; V += 1)
                  B == -2 || B == 2 || V == -2 || V == 2 || B == 0 && V == 0 ? f[D + B][R + V] = !0 : f[D + B][R + V] = !1;
          }
      }, le = function(O) {
        for (var S = a.getBCHTypeNumber(p), y = 0; y < 18; y += 1) {
          var D = !O && (S >> y & 1) == 1;
          f[Math.floor(y / 3)][y % 3 + l - 8 - 3] = D;
        }
        for (var y = 0; y < 18; y += 1) {
          var D = !O && (S >> y & 1) == 1;
          f[y % 3 + l - 8 - 3][Math.floor(y / 3)] = D;
        }
      }, _e = function(O, S) {
        for (var y = v << 3 | S, D = a.getBCHTypeInfo(y), R = 0; R < 15; R += 1) {
          var B = !O && (D >> R & 1) == 1;
          R < 6 ? f[R][8] = B : R < 8 ? f[R + 1][8] = B : f[l - 15 + R][8] = B;
        }
        for (var R = 0; R < 15; R += 1) {
          var B = !O && (D >> R & 1) == 1;
          R < 8 ? f[8][l - R - 1] = B : R < 9 ? f[8][15 - R - 1 + 1] = B : f[8][15 - R - 1] = B;
        }
        f[l - 8][8] = !O;
      }, ke = function(O, S) {
        for (var y = -1, D = l - 1, R = 7, B = 0, V = a.getMaskFunction(S), F = l - 1; F > 0; F -= 2)
          for (F == 6 && (F -= 1); ; ) {
            for (var Q = 0; Q < 2; Q += 1)
              if (f[D][F - Q] == null) {
                var Z = !1;
                B < O.length && (Z = (O[B] >>> R & 1) == 1);
                var z = V(D, F - Q);
                z && (Z = !Z), f[D][F - Q] = Z, R -= 1, R == -1 && (B += 1, R = 7);
              }
            if (D += y, D < 0 || l <= D) {
              D -= y, y = -y;
              break;
            }
          }
      }, Qe = function(O, S) {
        for (var y = 0, D = 0, R = 0, B = new Array(S.length), V = new Array(S.length), F = 0; F < S.length; F += 1) {
          var Q = S[F].dataCount, Z = S[F].totalCount - Q;
          D = Math.max(D, Q), R = Math.max(R, Z), B[F] = new Array(Q);
          for (var z = 0; z < B[F].length; z += 1)
            B[F][z] = 255 & O.getBuffer()[z + y];
          y += Q;
          var fe = a.getErrorCorrectPolynomial(Z), pe = d(B[F], fe.getLength() - 1), pr = pe.mod(fe);
          V[F] = new Array(fe.getLength() - 1);
          for (var z = 0; z < V[F].length; z += 1) {
            var hr = z + pr.getLength() - V[F].length;
            V[F][z] = hr >= 0 ? pr.getAt(hr) : 0;
          }
        }
        for (var gr = 0, z = 0; z < S.length; z += 1)
          gr += S[z].totalCount;
        for (var fn = new Array(gr), St = 0, z = 0; z < D; z += 1)
          for (var F = 0; F < S.length; F += 1)
            z < B[F].length && (fn[St] = B[F][z], St += 1);
        for (var z = 0; z < R; z += 1)
          for (var F = 0; F < S.length; F += 1)
            z < V[F].length && (fn[St] = V[F][z], St += 1);
        return fn;
      }, ji = function(O, S, y) {
        for (var D = h.getRSBlocks(O, S), R = c(), B = 0; B < y.length; B += 1) {
          var V = y[B];
          R.put(V.getMode(), 4), R.put(V.getLength(), a.getLengthInBits(V.getMode(), O)), V.write(R);
        }
        for (var F = 0, B = 0; B < D.length; B += 1)
          F += D[B].dataCount;
        if (R.getLengthInBits() > F * 8)
          throw "code length overflow. (" + R.getLengthInBits() + ">" + F * 8 + ")";
        for (R.getLengthInBits() + 4 <= F * 8 && R.put(0, 4); R.getLengthInBits() % 8 != 0; )
          R.putBit(!1);
        for (; !(R.getLengthInBits() >= F * 8 || (R.put(E, 8), R.getLengthInBits() >= F * 8)); )
          R.put(g, 8);
        return Qe(R, D);
      };
      m.addData = function(O, S) {
        S = S || "Byte";
        var y = null;
        switch (S) {
          case "Numeric":
            y = _(O);
            break;
          case "Alphanumeric":
            y = k(O);
            break;
          case "Byte":
            y = C(O);
            break;
          case "Kanji":
            y = A(O);
            break;
          default:
            throw "mode:" + S;
        }
        N.push(y), x = null;
      }, m.isDark = function(O, S) {
        if (O < 0 || l <= O || S < 0 || l <= S)
          throw O + "," + S;
        return f[O][S];
      }, m.getModuleCount = function() {
        return l;
      }, m.make = function() {
        if (p < 1) {
          for (var O = 1; O < 40; O++) {
            for (var S = h.getRSBlocks(O, v), y = c(), D = 0; D < N.length; D++) {
              var R = N[D];
              y.put(R.getMode(), 4), y.put(R.getLength(), a.getLengthInBits(R.getMode(), O)), R.write(y);
            }
            for (var B = 0, D = 0; D < S.length; D++)
              B += S[D].dataCount;
            if (y.getLengthInBits() <= B * 8)
              break;
          }
          p = O;
        }
        T(!1, I());
      }, m.createTableTag = function(O, S) {
        O = O || 2, S = typeof S > "u" ? O * 4 : S;
        var y = "";
        y += '<table style="', y += " border-width: 0px; border-style: none;", y += " border-collapse: collapse;", y += " padding: 0px; margin: " + S + "px;", y += '">', y += "<tbody>";
        for (var D = 0; D < m.getModuleCount(); D += 1) {
          y += "<tr>";
          for (var R = 0; R < m.getModuleCount(); R += 1)
            y += '<td style="', y += " border-width: 0px; border-style: none;", y += " border-collapse: collapse;", y += " padding: 0px; margin: 0px;", y += " width: " + O + "px;", y += " height: " + O + "px;", y += " background-color: ", y += m.isDark(D, R) ? "#000000" : "#ffffff", y += ";", y += '"/>';
          y += "</tr>";
        }
        return y += "</tbody>", y += "</table>", y;
      }, m.createSvgTag = function(O, S, y, D) {
        var R = {};
        typeof arguments[0] == "object" && (R = arguments[0], O = R.cellSize, S = R.margin, y = R.alt, D = R.title), O = O || 2, S = typeof S > "u" ? O * 4 : S, y = typeof y == "string" ? { text: y } : y || {}, y.text = y.text || null, y.id = y.text ? y.id || "qrcode-description" : null, D = typeof D == "string" ? { text: D } : D || {}, D.text = D.text || null, D.id = D.text ? D.id || "qrcode-title" : null;
        var B = m.getModuleCount() * O + S * 2, V, F, Q, Z, z = "", fe;
        for (fe = "l" + O + ",0 0," + O + " -" + O + ",0 0,-" + O + "z ", z += '<svg version="1.1" xmlns="http://www.w3.org/2000/svg"', z += R.scalable ? "" : ' width="' + B + 'px" height="' + B + 'px"', z += ' viewBox="0 0 ' + B + " " + B + '" ', z += ' preserveAspectRatio="xMinYMin meet"', z += D.text || y.text ? ' role="img" aria-labelledby="' + Xe([D.id, y.id].join(" ").trim()) + '"' : "", z += ">", z += D.text ? '<title id="' + Xe(D.id) + '">' + Xe(D.text) + "</title>" : "", z += y.text ? '<description id="' + Xe(y.id) + '">' + Xe(y.text) + "</description>" : "", z += '<rect width="100%" height="100%" fill="white" cx="0" cy="0"/>', z += '<path d="', Q = 0; Q < m.getModuleCount(); Q += 1)
          for (Z = Q * O + S, V = 0; V < m.getModuleCount(); V += 1)
            m.isDark(Q, V) && (F = V * O + S, z += "M" + F + "," + Z + fe);
        return z += '" stroke="transparent" fill="black"/>', z += "</svg>", z;
      }, m.createDataURL = function(O, S) {
        O = O || 2, S = typeof S > "u" ? O * 4 : S;
        var y = m.getModuleCount() * O + S * 2, D = S, R = y - S;
        return L(y, y, function(B, V) {
          if (D <= B && B < R && D <= V && V < R) {
            var F = Math.floor((B - D) / O), Q = Math.floor((V - D) / O);
            return m.isDark(Q, F) ? 0 : 1;
          } else
            return 1;
        });
      }, m.createImgTag = function(O, S, y) {
        O = O || 2, S = typeof S > "u" ? O * 4 : S;
        var D = m.getModuleCount() * O + S * 2, R = "";
        return R += "<img", R += ' src="', R += m.createDataURL(O, S), R += '"', R += ' width="', R += D, R += '"', R += ' height="', R += D, R += '"', y && (R += ' alt="', R += Xe(y), R += '"'), R += "/>", R;
      };
      var Xe = function(O) {
        for (var S = "", y = 0; y < O.length; y += 1) {
          var D = O.charAt(y);
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
      }, Ui = function(O) {
        var S = 1;
        O = typeof O > "u" ? S * 2 : O;
        var y = m.getModuleCount() * S + O * 2, D = O, R = y - O, B, V, F, Q, Z, z = {
          "██": "█",
          "█ ": "▀",
          " █": "▄",
          "  ": " "
        }, fe = {
          "██": "▀",
          "█ ": "▀",
          " █": " ",
          "  ": " "
        }, pe = "";
        for (B = 0; B < y; B += 2) {
          for (F = Math.floor((B - D) / S), Q = Math.floor((B + 1 - D) / S), V = 0; V < y; V += 1)
            Z = "█", D <= V && V < R && D <= B && B < R && m.isDark(F, Math.floor((V - D) / S)) && (Z = " "), D <= V && V < R && D <= B + 1 && B + 1 < R && m.isDark(Q, Math.floor((V - D) / S)) ? Z += " " : Z += "█", pe += O < 1 && B + 1 >= R ? fe[Z] : z[Z];
          pe += `
`;
        }
        return y % 2 && O > 0 ? pe.substring(0, pe.length - y - 1) + Array(y + 1).join("▀") : pe.substring(0, pe.length - 1);
      };
      return m.createASCII = function(O, S) {
        if (O = O || 1, O < 2)
          return Ui(S);
        O -= 1, S = typeof S > "u" ? O * 2 : S;
        var y = m.getModuleCount() * O + S * 2, D = S, R = y - S, B, V, F, Q, Z = Array(O + 1).join("██"), z = Array(O + 1).join("  "), fe = "", pe = "";
        for (B = 0; B < y; B += 1) {
          for (F = Math.floor((B - D) / O), pe = "", V = 0; V < y; V += 1)
            Q = 1, D <= V && V < R && D <= B && B < R && m.isDark(F, Math.floor((V - D) / O)) && (Q = 0), pe += Q ? Z : z;
          for (F = 0; F < O; F += 1)
            fe += pe + `
`;
        }
        return fe.substring(0, fe.length - 1);
      }, m.renderTo2dContext = function(O, S) {
        S = S || 2;
        for (var y = m.getModuleCount(), D = 0; D < y; D++)
          for (var R = 0; R < y; R++)
            O.fillStyle = m.isDark(D, R) ? "black" : "white", O.fillRect(D * S, R * S, S, S);
      }, m;
    };
    r.stringToBytesFuncs = {
      default: function(b) {
        for (var P = [], E = 0; E < b.length; E += 1) {
          var g = b.charCodeAt(E);
          P.push(g & 255);
        }
        return P;
      }
    }, r.stringToBytes = r.stringToBytesFuncs.default, r.createStringToBytes = function(b, P) {
      var E = function() {
        for (var p = U(b), v = function() {
          var Y = p.read();
          if (Y == -1)
            throw "eof";
          return Y;
        }, f = 0, l = {}; ; ) {
          var x = p.read();
          if (x == -1)
            break;
          var N = v(), m = v(), T = v(), M = String.fromCharCode(x << 8 | N), I = m << 8 | T;
          l[M] = I, f += 1;
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
            var x = E[p.charAt(f)];
            typeof x == "number" ? (x & 255) == x ? v.push(x) : (v.push(x >>> 8), v.push(x & 255)) : v.push(g);
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
      var b = [
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
      ], P = 1335, E = 7973, g = 21522, p = {}, v = function(f) {
        for (var l = 0; f != 0; )
          l += 1, f >>>= 1;
        return l;
      };
      return p.getBCHTypeInfo = function(f) {
        for (var l = f << 10; v(l) - v(P) >= 0; )
          l ^= P << v(l) - v(P);
        return (f << 10 | l) ^ g;
      }, p.getBCHTypeNumber = function(f) {
        for (var l = f << 12; v(l) - v(E) >= 0; )
          l ^= E << v(l) - v(E);
        return f << 12 | l;
      }, p.getPatternPosition = function(f) {
        return b[f - 1];
      }, p.getMaskFunction = function(f) {
        switch (f) {
          case s.PATTERN000:
            return function(l, x) {
              return (l + x) % 2 == 0;
            };
          case s.PATTERN001:
            return function(l, x) {
              return l % 2 == 0;
            };
          case s.PATTERN010:
            return function(l, x) {
              return x % 3 == 0;
            };
          case s.PATTERN011:
            return function(l, x) {
              return (l + x) % 3 == 0;
            };
          case s.PATTERN100:
            return function(l, x) {
              return (Math.floor(l / 2) + Math.floor(x / 3)) % 2 == 0;
            };
          case s.PATTERN101:
            return function(l, x) {
              return l * x % 2 + l * x % 3 == 0;
            };
          case s.PATTERN110:
            return function(l, x) {
              return (l * x % 2 + l * x % 3) % 2 == 0;
            };
          case s.PATTERN111:
            return function(l, x) {
              return (l * x % 3 + (l + x) % 2) % 2 == 0;
            };
          default:
            throw "bad maskPattern:" + f;
        }
      }, p.getErrorCorrectPolynomial = function(f) {
        for (var l = d([1], 0), x = 0; x < f; x += 1)
          l = l.multiply(d([1, u.gexp(x)], 0));
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
        for (var l = f.getModuleCount(), x = 0, N = 0; N < l; N += 1)
          for (var m = 0; m < l; m += 1) {
            for (var T = 0, M = f.isDark(N, m), I = -1; I <= 1; I += 1)
              if (!(N + I < 0 || l <= N + I))
                for (var Y = -1; Y <= 1; Y += 1)
                  m + Y < 0 || l <= m + Y || I == 0 && Y == 0 || M == f.isDark(N + I, m + Y) && (T += 1);
            T > 5 && (x += 3 + T - 5);
          }
        for (var N = 0; N < l - 1; N += 1)
          for (var m = 0; m < l - 1; m += 1) {
            var te = 0;
            f.isDark(N, m) && (te += 1), f.isDark(N + 1, m) && (te += 1), f.isDark(N, m + 1) && (te += 1), f.isDark(N + 1, m + 1) && (te += 1), (te == 0 || te == 4) && (x += 3);
          }
        for (var N = 0; N < l; N += 1)
          for (var m = 0; m < l - 6; m += 1)
            f.isDark(N, m) && !f.isDark(N, m + 1) && f.isDark(N, m + 2) && f.isDark(N, m + 3) && f.isDark(N, m + 4) && !f.isDark(N, m + 5) && f.isDark(N, m + 6) && (x += 40);
        for (var m = 0; m < l; m += 1)
          for (var N = 0; N < l - 6; N += 1)
            f.isDark(N, m) && !f.isDark(N + 1, m) && f.isDark(N + 2, m) && f.isDark(N + 3, m) && f.isDark(N + 4, m) && !f.isDark(N + 5, m) && f.isDark(N + 6, m) && (x += 40);
        for (var le = 0, m = 0; m < l; m += 1)
          for (var N = 0; N < l; N += 1)
            f.isDark(N, m) && (le += 1);
        var _e = Math.abs(100 * le / l / l - 50) / 5;
        return x += _e * 10, x;
      }, p;
    }(), u = function() {
      for (var b = new Array(256), P = new Array(256), E = 0; E < 8; E += 1)
        b[E] = 1 << E;
      for (var E = 8; E < 256; E += 1)
        b[E] = b[E - 4] ^ b[E - 5] ^ b[E - 6] ^ b[E - 8];
      for (var E = 0; E < 255; E += 1)
        P[b[E]] = E;
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
        return b[p];
      }, g;
    }();
    function d(b, P) {
      if (typeof b.length > "u")
        throw b.length + "/" + P;
      var E = function() {
        for (var p = 0; p < b.length && b[p] == 0; )
          p += 1;
        for (var v = new Array(b.length - p + P), f = 0; f < b.length - p; f += 1)
          v[f] = b[f + p];
        return v;
      }(), g = {};
      return g.getAt = function(p) {
        return E[p];
      }, g.getLength = function() {
        return E.length;
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
      var b = [
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
      }, E = {}, g = function(p, v) {
        switch (v) {
          case i.L:
            return b[(p - 1) * 4 + 0];
          case i.M:
            return b[(p - 1) * 4 + 1];
          case i.Q:
            return b[(p - 1) * 4 + 2];
          case i.H:
            return b[(p - 1) * 4 + 3];
          default:
            return;
        }
      };
      return E.getRSBlocks = function(p, v) {
        var f = g(p, v);
        if (typeof f > "u")
          throw "bad rs block @ typeNumber:" + p + "/errorCorrectionLevel:" + v;
        for (var l = f.length / 3, x = [], N = 0; N < l; N += 1)
          for (var m = f[N * 3 + 0], T = f[N * 3 + 1], M = f[N * 3 + 2], I = 0; I < m; I += 1)
            x.push(P(T, M));
        return x;
      }, E;
    }(), c = function() {
      var b = [], P = 0, E = {};
      return E.getBuffer = function() {
        return b;
      }, E.getAt = function(g) {
        var p = Math.floor(g / 8);
        return (b[p] >>> 7 - g % 8 & 1) == 1;
      }, E.put = function(g, p) {
        for (var v = 0; v < p; v += 1)
          E.putBit((g >>> p - v - 1 & 1) == 1);
      }, E.getLengthInBits = function() {
        return P;
      }, E.putBit = function(g) {
        var p = Math.floor(P / 8);
        b.length <= p && b.push(0), g && (b[p] |= 128 >>> P % 8), P += 1;
      }, E;
    }, _ = function(b) {
      var P = o.MODE_NUMBER, E = b, g = {};
      g.getMode = function() {
        return P;
      }, g.getLength = function(f) {
        return E.length;
      }, g.write = function(f) {
        for (var l = E, x = 0; x + 2 < l.length; )
          f.put(p(l.substring(x, x + 3)), 10), x += 3;
        x < l.length && (l.length - x == 1 ? f.put(p(l.substring(x, x + 1)), 4) : l.length - x == 2 && f.put(p(l.substring(x, x + 2)), 7));
      };
      var p = function(f) {
        for (var l = 0, x = 0; x < f.length; x += 1)
          l = l * 10 + v(f.charAt(x));
        return l;
      }, v = function(f) {
        if ("0" <= f && f <= "9")
          return f.charCodeAt(0) - "0".charCodeAt(0);
        throw "illegal char :" + f;
      };
      return g;
    }, k = function(b) {
      var P = o.MODE_ALPHA_NUM, E = b, g = {};
      g.getMode = function() {
        return P;
      }, g.getLength = function(v) {
        return E.length;
      }, g.write = function(v) {
        for (var f = E, l = 0; l + 1 < f.length; )
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
    }, C = function(b) {
      var P = o.MODE_8BIT_BYTE, E = r.stringToBytes(b), g = {};
      return g.getMode = function() {
        return P;
      }, g.getLength = function(p) {
        return E.length;
      }, g.write = function(p) {
        for (var v = 0; v < E.length; v += 1)
          p.put(E[v], 8);
      }, g;
    }, A = function(b) {
      var P = o.MODE_KANJI, E = r.stringToBytesFuncs.SJIS;
      if (!E)
        throw "sjis not supported.";
      (function(v, f) {
        var l = E(v);
        if (l.length != 2 || (l[0] << 8 | l[1]) != f)
          throw "sjis not supported.";
      })("友", 38726);
      var g = E(b), p = {};
      return p.getMode = function() {
        return P;
      }, p.getLength = function(v) {
        return ~~(g.length / 2);
      }, p.write = function(v) {
        for (var f = g, l = 0; l + 1 < f.length; ) {
          var x = (255 & f[l]) << 8 | 255 & f[l + 1];
          if (33088 <= x && x <= 40956)
            x -= 33088;
          else if (57408 <= x && x <= 60351)
            x -= 49472;
          else
            throw "illegal char at " + (l + 1) + "/" + x;
          x = (x >>> 8 & 255) * 192 + (x & 255), v.put(x, 13), l += 2;
        }
        if (l < f.length)
          throw "illegal char at " + (l + 1);
      }, p;
    }, $ = function() {
      var b = [], P = {};
      return P.writeByte = function(E) {
        b.push(E & 255);
      }, P.writeShort = function(E) {
        P.writeByte(E), P.writeByte(E >>> 8);
      }, P.writeBytes = function(E, g, p) {
        g = g || 0, p = p || E.length;
        for (var v = 0; v < p; v += 1)
          P.writeByte(E[v + g]);
      }, P.writeString = function(E) {
        for (var g = 0; g < E.length; g += 1)
          P.writeByte(E.charCodeAt(g));
      }, P.toByteArray = function() {
        return b;
      }, P.toString = function() {
        var E = "";
        E += "[";
        for (var g = 0; g < b.length; g += 1)
          g > 0 && (E += ","), E += b[g];
        return E += "]", E;
      }, P;
    }, q = function() {
      var b = 0, P = 0, E = 0, g = "", p = {}, v = function(l) {
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
        for (b = b << 8 | l & 255, P += 8, E += 1; P >= 6; )
          v(b >>> P - 6), P -= 6;
      }, p.flush = function() {
        if (P > 0 && (v(b << 6 - P), b = 0, P = 0), E % 3 != 0)
          for (var l = 3 - E % 3, x = 0; x < l; x += 1)
            g += "=";
      }, p.toString = function() {
        return g;
      }, p;
    }, U = function(b) {
      var P = b, E = 0, g = 0, p = 0, v = {};
      v.read = function() {
        for (; p < 8; ) {
          if (E >= P.length) {
            if (p == 0)
              return -1;
            throw "unexpected end of file./" + p;
          }
          var l = P.charAt(E);
          if (E += 1, l == "=")
            return p = 0, -1;
          l.match(/^\s$/) || (g = g << 6 | f(l.charCodeAt(0)), p += 6);
        }
        var x = g >>> p - 8 & 255;
        return p -= 8, x;
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
    }, j = function(b, P) {
      var E = b, g = P, p = new Array(b * P), v = {};
      v.setPixel = function(N, m, T) {
        p[m * E + N] = T;
      }, v.write = function(N) {
        N.writeString("GIF87a"), N.writeShort(E), N.writeShort(g), N.writeByte(128), N.writeByte(0), N.writeByte(0), N.writeByte(0), N.writeByte(0), N.writeByte(0), N.writeByte(255), N.writeByte(255), N.writeByte(255), N.writeString(","), N.writeShort(0), N.writeShort(0), N.writeShort(E), N.writeShort(g), N.writeByte(0);
        var m = 2, T = l(m);
        N.writeByte(m);
        for (var M = 0; T.length - M > 255; )
          N.writeByte(255), N.writeBytes(T, M, 255), M += 255;
        N.writeByte(T.length - M), N.writeBytes(T, M, T.length - M), N.writeByte(0), N.writeString(";");
      };
      var f = function(N) {
        var m = N, T = 0, M = 0, I = {};
        return I.write = function(Y, te) {
          if (Y >>> te)
            throw "length over";
          for (; T + te >= 8; )
            m.writeByte(255 & (Y << T | M)), te -= 8 - T, Y >>>= 8 - T, M = 0, T = 0;
          M = Y << T | M, T = T + te;
        }, I.flush = function() {
          T > 0 && m.writeByte(M);
        }, I;
      }, l = function(N) {
        for (var m = 1 << N, T = (1 << N) + 1, M = N + 1, I = x(), Y = 0; Y < m; Y += 1)
          I.add(String.fromCharCode(Y));
        I.add(String.fromCharCode(m)), I.add(String.fromCharCode(T));
        var te = $(), le = f(te);
        le.write(m, M);
        var _e = 0, ke = String.fromCharCode(p[_e]);
        for (_e += 1; _e < p.length; ) {
          var Qe = String.fromCharCode(p[_e]);
          _e += 1, I.contains(ke + Qe) ? ke = ke + Qe : (le.write(I.indexOf(ke), M), I.size() < 4095 && (I.size() == 1 << M && (M += 1), I.add(ke + Qe)), ke = Qe);
        }
        return le.write(I.indexOf(ke), M), le.write(T, M), le.flush(), te.toByteArray();
      }, x = function() {
        var N = {}, m = 0, T = {};
        return T.add = function(M) {
          if (T.contains(M))
            throw "dup key:" + M;
          N[M] = m, m += 1;
        }, T.size = function() {
          return m;
        }, T.indexOf = function(M) {
          return N[M];
        }, T.contains = function(M) {
          return typeof N[M] < "u";
        }, T;
      };
      return v;
    }, L = function(b, P, E) {
      for (var g = j(b, P), p = 0; p < P; p += 1)
        for (var v = 0; v < b; v += 1)
          g.setPixel(v, p, E(v, p));
      var f = $();
      g.write(f);
      for (var l = q(), x = f.toByteArray(), N = 0; N < x.length; N += 1)
        l.writeByte(x[N]);
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
    e.exports = r();
  }(function() {
    return n;
  });
})(Li);
var hl = Li.exports;
const gl = /* @__PURE__ */ pl(hl);
class fr {
  constructor(t) {
    ce(this, "_options"), ce(this, "_container"), ce(this, "_canvas"), ce(this, "_qr"), ce(this, "_drawingPromise"), this._options = t ? fo(Xt(lo, t)) : lo, this.update();
  }
  static _clearContainer(t) {
    t && (t.innerHTML = "");
  }
  update(t) {
    fr._clearContainer(this._container), this._options = t ? fo(Xt(this._options, t)) : this._options, this._options.data && (this._qr = gl(this._options.qrOptions.typeNumber, this._options.qrOptions.errorCorrectionLevel), this._qr.addData(this._options.data, this._options.qrOptions.mode || ol(this._options.data)), this._qr.make(), this._canvas = new dl(this._options), this._drawingPromise = this._canvas.drawQR(this._qr), this.append(this._container));
  }
  append(t) {
    if (t) {
      if (typeof t.appendChild != "function")
        throw "Container should be a single DOM node";
      this._canvas && t.appendChild(this._canvas.getCanvas()), this._container = t;
    }
  }
  async getImageUrl(t) {
    return this._drawingPromise && await this._drawingPromise === void 0 && this._canvas ? this._canvas.getCanvas().toDataURL(`image/${t}`) : "";
  }
  download(t) {
    this._drawingPromise && this._drawingPromise.then(() => {
      if (!this._canvas)
        return;
      const n = t, r = n.extension || "png", o = n.name || "qr", i = this._canvas.getCanvas().toDataURL(`image/${r}`);
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
  async setup(e) {
    let t, n;
    const r = e, o = new fr({
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
    let i = ([t, n] = Pu(() => o.getImageUrl(r.fileExt)), t = await t, n(), t);
    function s() {
      o.download(r.downloadOptions);
    }
    return (a, u) => (at(), bn("div", null, [
      Ut(i) ? (at(), bn("div", {
        key: 0,
        class: ot(a.myclass)
      }, [
        Yt("img", {
          src: Ut(i),
          class: ot(a.imgclass),
          crossorigin: "anonymous"
        }, null, 10, ml)
      ], 2)) : so("", !0),
      Ut(i) && a.download ? (at(), bn("div", yl, [
        Yt("button", {
          onClick: s,
          class: ot(a.downloadButton)
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
  setup(e) {
    const t = e;
    return (n, r) => (at(), Ci(cu, null, {
      default: ou(() => [
        Fe(vl, {
          "background-options": t.backgroundOptions,
          "button-name": t.ButtonName,
          "corners-dot-options": t.cornersDotOptions,
          "corners-square-options": t.cornersSquareOptions,
          "dots-options": t.dotsOptions,
          download: t.download,
          "download-button": t.downloadButton,
          "download-options": t.downloadOptions,
          "file-ext": t.fileExt,
          height: t.height,
          image: t.image,
          "image-options": t.imageOptions,
          imgclass: t.imgclass,
          margin: t.margin,
          value: t.value,
          myclass: t.myclass,
          "qr-options": t.qrOptions,
          width: t.width
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
  setup(e) {
    const t = e;
    Wi((s) => ({
      "5fc7d666": t.width,
      "19978b00": t.height,
      "19f800b0": r.value,
      97304866: o.value
    }));
    const n = re(t.dark ?? !1), r = re(t.mobileWidth ?? t.width), o = re(t.mobileHeight ?? t.height), i = re(null);
    return ho(() => {
      vo(() => {
        if (!t.disabled && i.value !== null) {
          let s = 1.5, a = setInterval(function() {
            s -= 0.1, i.value !== null && (i.value.style.animationDuration = s + "s", s <= 0.8 && clearInterval(a));
          }, 1e4);
        }
      });
    }), (s, a) => (be(), Te("div", {
      ref_key: "loader",
      ref: i,
      class: Ki([n.value && "skeleton-loader_dark", !n.value && "skeleton-loader"])
    }, null, 2));
  }
});
const _l = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [r, o] of t)
    n[r] = o;
  return n;
}, Fi = /* @__PURE__ */ _l(wl, [["__scopeId", "data-v-f907348b"]]), bl = { style: { "text-align": "center" } }, El = ["onClick"], Ol = {
  key: 1,
  style: { "text-align": "center" }
}, Sl = ["href"], xl = ["src"], Nl = /* @__PURE__ */ Ee("br", null, null, -1), Dl = /* @__PURE__ */ Ee("br", null, null, -1), kl = {
  key: 2,
  style: { "text-align": "center" }
}, Cl = ["innerHTML"], Rl = {
  key: 0,
  style: { "text-align": "center" }
}, Ml = /* @__PURE__ */ Ee("br", null, null, -1), Pl = ["href"], Tl = ["src"], Al = /* @__PURE__ */ Ee("br", null, null, -1), Bl = /* @__PURE__ */ yo({
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
  setup(e) {
    const t = e, { t: n } = wo(), { auth: r, loginQRCode: o, checkQRLogin: i, success: s, QRCode: a, is_error: u, Message: d, setBase: h, setUrls: c, setRoutes: _, IDSite: k } = Ja(), C = re(!1);
    ie("locale", "en"), rs(() => {
      k.value = t.SiteId, h(t.configDev, t.configProduction), _(t.configApp, t.configLogin), c(t.configRequest, t.configVerify, t.configConfirm, t.configLogout), r.value < 2 ? o() : i(), vo(() => {
        s.value === !0 ? C.value = !0 : C.value = !1;
      });
    });
    function A() {
      a.value == null || a.value == null || a.value == "" || window.open(a.value, "new_window");
    }
    return ($, q) => (be(), Te("div", null, [
      Ee("div", null, [
        Ee("div", bl, [
          ne(s) && !t.isMobileScreen ? (be(), Te("div", {
            key: 0,
            onClick: [
              A,
              Gi(A, ["prevent"])
            ],
            target: "_blank",
            style: { "text-align": "center", cursor: "pointer" }
          }, [
            t.isDark ? (be(), pn(ne(po), {
              key: ne(a),
              width: 300,
              height: 300,
              value: ne(a),
              image: e.logoDark.length == 0 ? "/src/assets/nopwd_black.png" : "",
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
                color: t.primaryDark,
                gradient: {
                  type: "linear",
                  rotation: 0,
                  colorStops: [
                    { offset: 0, color: t.primaryDark },
                    { offset: 1, color: t.primaryDark }
                  ]
                }
              },
              "background-options": { color: t.secondaryDark },
              "corners-square-options": { type: "dot", color: t.positionDark },
              "corners-dot-options": { type: void 0, color: t.positionDark },
              download: !1
            }, null, 8, ["value", "image", "dots-options", "background-options", "corners-square-options", "corners-dot-options"])) : Ve("", !0),
            t.isDark ? Ve("", !0) : (be(), pn(ne(po), {
              key: ne(a),
              width: 300,
              height: 300,
              value: ne(a),
              image: e.logoDark.length == 0 ? "/src/assets/nopwd_white.png" : "",
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
                color: t.primaryLight,
                gradient: {
                  type: "linear",
                  rotation: 0,
                  colorStops: [
                    { offset: 0, color: t.primaryLight },
                    { offset: 1, color: t.primaryLight }
                  ]
                }
              },
              "background-options": { color: t.secondaryLight },
              "corners-square-options": { type: "dot", color: t.positionLight },
              "corners-dot-options": { type: void 0, color: t.positionLight },
              download: !1
            }, null, 8, ["value", "image", "dots-options", "background-options", "corners-square-options", "corners-dot-options"]))
          ], 8, El)) : ne(s) && t.isMobileScreen ? (be(), Te("div", Ol, [
            C.value ? (be(), Te("button", {
              key: 0,
              style: mr([{ width: "300px", height: "300px" }, [t.isDark ? { backgroundColor: t.primaryDark, color: t.accentColor } : { backgroundColor: t.primaryLight, color: t.accentColor }]]),
              href: ne(a)
            }, [
              Ee("img", {
                width: "150",
                src: e.logoDark.length == 0 ? "/src/assets/nopwd_black.png" : ""
              }, null, 8, xl),
              Nl,
              Dl,
              Ee("span", null, yr(ne(n)("auth.login")), 1)
            ], 12, Sl)) : Ve("", !0)
          ])) : ne(s) ? Ve("", !0) : (be(), Te("div", kl, [
            ne(u) ? Ve("", !0) : (be(), pn(Fi, {
              key: 0,
              width: "300px",
              disabled: !1,
              dark: t.isDark,
              height: "300px"
            }, null, 8, ["dark"]))
          ])),
          Ee("div", {
            innerHTML: ne(d),
            style: { "text-align": "center" }
          }, null, 8, Cl)
        ])
      ]),
      ne(s) && !t.isMobileScreen && t.showButton ? (be(), Te("div", Rl, [
        Ml,
        C.value ? (be(), Te("button", {
          key: 0,
          style: mr([{ width: "300px", height: "120px" }, [t.isDark ? { backgroundColor: t.primaryDark, color: t.accentColor } : { backgroundColor: t.primaryLight, color: t.accentColor }]]),
          href: ne(a)
        }, [
          Ee("img", {
            width: "80",
            src: e.logoDark.length == 0 ? "@src/assets/nopwd_black.png" : ""
          }, null, 8, Tl),
          Al,
          Ee("span", null, yr(ne(n)("auth.appinstalled")), 1)
        ], 12, Pl)) : Ve("", !0)
      ])) : Ve("", !0)
    ]));
  }
}), Ll = {
  install: (e) => {
    e.component("Login", Bl), e.component("Preloader", Fi);
  }
};
export {
  Bl as Login,
  Fi as Preloader,
  Ll as default,
  Ja as useNoPWD
};
