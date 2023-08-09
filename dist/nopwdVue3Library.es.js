import { ref as X, getCurrentInstance as Ui, onMounted as ho, nextTick as go, unref as rt, getCurrentScope as zi, onScopeDispose as qi, readonly as $i, watch as mo, shallowRef as Hi, inject as Ji, defineComponent as yo, useCssVars as Wi, watchEffect as vo, openBlock as wt, createElementBlock as Tt, normalizeClass as Ki, createElementVNode as _t, withModifiers as Gi, createBlock as pn, createCommentVNode as Vt, normalizeStyle as mr, toDisplayString as yr } from "vue";
const Qi = {
  "auth.appinstalled": "App installed locally? Click here",
  "auth.codedark": "Code not reading? Flip to light-mode.",
  "auth.codelight": "Scan the code with your mobile device.",
  "auth.codeerror": "Error requesting code, <br/>please refresh page.",
  "auth.loading": "Loading access code, please wait...",
  "auth.prepare": "Preparing interface...",
  "auth.login": "Click to Login"
}, Yi = {
  en: Qi
};
function wo(t = {}) {
  const e = X({ ...Yi, ...t }), n = X("en");
  return { t: (o) => {
    const i = e.value[n.value][o];
    return i === void 0 ? (console.warn(`Translation not found for key: ${o}`), o) : i;
  } };
}
function Xi(t) {
  return zi() ? (qi(t), !0) : !1;
}
function zn(t) {
  return typeof t == "function" ? t() : rt(t);
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
  const e = X(!0);
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
  ]), { eventFilter: s, pause: a, resume: u, isActive: l } = ns(o);
  return { stop: as(
    t,
    e,
    fs(ds({}, i), {
      eventFilter: s
    })
  ), pause: a, resume: u, isActive: l };
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
    i.forEach((p) => p()), i.length = 0;
  }, a = (p, c, b, k) => (p.addEventListener(c, b, k), () => p.removeEventListener(c, b, k)), u = mo(
    () => [gs(e), zn(o)],
    ([p, c]) => {
      s(), p && i.push(
        ...n.flatMap((b) => r.map((k) => a(p, b, k, c)))
      );
    },
    { immediate: !0, flush: "post" }
  ), l = () => {
    u(), s();
  };
  return Xi(l), l;
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
function fe(t, e, n, r = {}) {
  var o;
  const {
    flush: i = "pre",
    deep: s = !0,
    listenToStorageChanges: a = !0,
    writeDefaults: u = !0,
    mergeDefaults: l = !1,
    shallow: p,
    window: c = Dn,
    eventFilter: b,
    onError: k = (m) => {
      console.error(m);
    }
  } = r, C = (p ? Hi : X)(e);
  if (!n)
    try {
      n = vs("getDefaultStorage", () => {
        var m;
        return (m = Dn) == null ? void 0 : m.localStorage;
      })();
    } catch (m) {
      k(m);
    }
  if (!n)
    return C;
  const P = zn(e), z = ws(P), q = (o = r.serializer) != null ? o : Os[z], { pause: $, resume: F } = hs(
    C,
    () => L(C.value),
    { flush: i, deep: s, eventFilter: b }
  );
  return c && a && (_r(c, "storage", _), _r(c, Sr, M)), _(), C;
  function L(m) {
    try {
      if (m == null)
        n.removeItem(t);
      else {
        const h = q.write(m), w = n.getItem(t);
        w !== h && (n.setItem(t, h), c && c.dispatchEvent(new CustomEvent(Sr, {
          detail: {
            key: t,
            oldValue: w,
            newValue: h,
            storageArea: n
          }
        })));
      }
    } catch (h) {
      k(h);
    }
  }
  function x(m) {
    const h = m ? m.newValue : n.getItem(t);
    if (h == null)
      return u && P !== null && n.setItem(t, q.write(P)), P;
    if (!m && l) {
      const w = q.read(h);
      return typeof l == "function" ? l(w, P) : z === "object" && !Array.isArray(w) ? Or(Or({}, P), w) : w;
    } else
      return typeof h != "string" ? h : q.read(h);
  }
  function M(m) {
    _(m.detail);
  }
  function _(m) {
    if (!(m && m.storageArea !== n)) {
      if (m && m.key == null) {
        C.value = P;
        return;
      }
      if (!(m && m.key !== t)) {
        $();
        try {
          C.value = x(m);
        } catch (h) {
          k(h);
        } finally {
          m ? go(F) : F();
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
), Yt = Ns;
function Oo(t, e) {
  return function() {
    return t.apply(e, arguments);
  };
}
const { toString: Ds } = Object.prototype, { getPrototypeOf: qn } = Object, Ze = ((t) => (e) => {
  const n = Ds.call(e);
  return t[n] || (t[n] = n.slice(8, -1).toLowerCase());
})(/* @__PURE__ */ Object.create(null)), xt = (t) => (t = t.toLowerCase(), (e) => Ze(e) === t), tn = (t) => (e) => typeof e === t, { isArray: le } = Array, me = tn("undefined");
function ks(t) {
  return t !== null && !me(t) && t.constructor !== null && !me(t.constructor) && gt(t.constructor.isBuffer) && t.constructor.isBuffer(t);
}
const So = xt("ArrayBuffer");
function Cs(t) {
  let e;
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? e = ArrayBuffer.isView(t) : e = t && t.buffer && So(t.buffer), e;
}
const Rs = tn("string"), gt = tn("function"), xo = tn("number"), en = (t) => t !== null && typeof t == "object", Ms = (t) => t === !0 || t === !1, Ie = (t) => {
  if (Ze(t) !== "object")
    return !1;
  const e = qn(t);
  return (e === null || e === Object.prototype || Object.getPrototypeOf(e) === null) && !(Symbol.toStringTag in t) && !(Symbol.iterator in t);
}, Ts = xt("Date"), Ps = xt("File"), As = xt("Blob"), Bs = xt("FileList"), Is = (t) => en(t) && gt(t.pipe), Ls = (t) => {
  let e;
  return t && (typeof FormData == "function" && t instanceof FormData || gt(t.append) && ((e = Ze(t)) === "formdata" || // detect form-data instance
  e === "object" && gt(t.toString) && t.toString() === "[object FormData]"));
}, Fs = xt("URLSearchParams"), js = (t) => t.trim ? t.trim() : t.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function Ee(t, e, { allOwnKeys: n = !1 } = {}) {
  if (t === null || typeof t > "u")
    return;
  let r, o;
  if (typeof t != "object" && (t = [t]), le(t))
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
    Ie(e[i]) && Ie(r) ? e[i] = kn(e[i], r) : Ie(r) ? e[i] = kn({}, r) : le(r) ? e[i] = r.slice() : e[i] = r;
  };
  for (let r = 0, o = arguments.length; r < o; r++)
    arguments[r] && Ee(arguments[r], n);
  return e;
}
const Vs = (t, e, n, { allOwnKeys: r } = {}) => (Ee(e, (o, i) => {
  n && gt(o) ? t[i] = Oo(o, n) : t[i] = o;
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
  if (le(t))
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
}, Gs = xt("HTMLFormElement"), Qs = (t) => t.toLowerCase().replace(
  /[-_\s]([a-z\d])(\w*)/g,
  function(n, r, o) {
    return r.toUpperCase() + o;
  }
), kr = (({ hasOwnProperty: t }) => (e, n) => t.call(e, n))(Object.prototype), Ys = xt("RegExp"), Co = (t, e) => {
  const n = Object.getOwnPropertyDescriptors(t), r = {};
  Ee(n, (o, i) => {
    e(o, i, t) !== !1 && (r[i] = o);
  }), Object.defineProperties(t, r);
}, Xs = (t) => {
  Co(t, (e, n) => {
    if (gt(t) && ["arguments", "caller", "callee"].indexOf(n) !== -1)
      return !1;
    const r = t[n];
    if (gt(r)) {
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
  return le(t) ? r(t) : r(String(t).split(e)), n;
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
  return !!(t && gt(t.append) && t[Symbol.toStringTag] === "FormData" && t[Symbol.iterator]);
}
const oa = (t) => {
  const e = new Array(10), n = (r, o) => {
    if (en(r)) {
      if (e.indexOf(r) >= 0)
        return;
      if (!("toJSON" in r)) {
        e[o] = r;
        const i = le(r) ? [] : {};
        return Ee(r, (s, a) => {
          const u = n(s, o + 1);
          !me(u) && (i[a] = u);
        }), e[o] = void 0, i;
      }
    }
    return r;
  };
  return n(t, 0);
}, ia = xt("AsyncFunction"), sa = (t) => t && (en(t) || gt(t)) && gt(t.then) && gt(t.catch), E = {
  isArray: le,
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
  isDate: Ts,
  isFile: Ps,
  isBlob: As,
  isRegExp: Ys,
  isFunction: gt,
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
  kindOfTest: xt,
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
  toCamelCase: Qs,
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
E.inherits(K, Error, {
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
      config: E.toJSONObject(this.config),
      code: this.code,
      status: this.response && this.response.status ? this.response.status : null
    };
  }
});
const Mo = K.prototype, To = {};
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
  To[t] = { value: t };
});
Object.defineProperties(K, To);
Object.defineProperty(Mo, "isAxiosError", { value: !0 });
K.from = (t, e, n, r, o, i) => {
  const s = Object.create(Mo);
  return E.toFlatObject(t, s, function(u) {
    return u !== Error.prototype;
  }, (a) => a !== "isAxiosError"), K.call(s, t.message, e, n, r, o), s.cause = t, s.name = t.name, i && Object.assign(s, i), s;
};
const aa = null;
function Cn(t) {
  return E.isPlainObject(t) || E.isArray(t);
}
function Po(t) {
  return E.endsWith(t, "[]") ? t.slice(0, -2) : t;
}
function Rr(t, e, n) {
  return t ? t.concat(e).map(function(o, i) {
    return o = Po(o), !n && i ? "[" + o + "]" : o;
  }).join(n ? "." : "") : e;
}
function ca(t) {
  return E.isArray(t) && !t.some(Cn);
}
const ua = E.toFlatObject(E, {}, null, function(e) {
  return /^is[A-Z]/.test(e);
});
function nn(t, e, n) {
  if (!E.isObject(t))
    throw new TypeError("target must be an object");
  e = e || new FormData(), n = E.toFlatObject(n, {
    metaTokens: !0,
    dots: !1,
    indexes: !1
  }, !1, function(P, z) {
    return !E.isUndefined(z[P]);
  });
  const r = n.metaTokens, o = n.visitor || p, i = n.dots, s = n.indexes, u = (n.Blob || typeof Blob < "u" && Blob) && E.isSpecCompliantForm(e);
  if (!E.isFunction(o))
    throw new TypeError("visitor must be a function");
  function l(C) {
    if (C === null)
      return "";
    if (E.isDate(C))
      return C.toISOString();
    if (!u && E.isBlob(C))
      throw new K("Blob is not supported. Use a Buffer instead.");
    return E.isArrayBuffer(C) || E.isTypedArray(C) ? u && typeof Blob == "function" ? new Blob([C]) : Buffer.from(C) : C;
  }
  function p(C, P, z) {
    let q = C;
    if (C && !z && typeof C == "object") {
      if (E.endsWith(P, "{}"))
        P = r ? P : P.slice(0, -2), C = JSON.stringify(C);
      else if (E.isArray(C) && ca(C) || (E.isFileList(C) || E.endsWith(P, "[]")) && (q = E.toArray(C)))
        return P = Po(P), q.forEach(function(F, L) {
          !(E.isUndefined(F) || F === null) && e.append(
            // eslint-disable-next-line no-nested-ternary
            s === !0 ? Rr([P], L, i) : s === null ? P : P + "[]",
            l(F)
          );
        }), !1;
    }
    return Cn(C) ? !0 : (e.append(Rr(z, P, i), l(C)), !1);
  }
  const c = [], b = Object.assign(ua, {
    defaultVisitor: p,
    convertValue: l,
    isVisitable: Cn
  });
  function k(C, P) {
    if (!E.isUndefined(C)) {
      if (c.indexOf(C) !== -1)
        throw Error("Circular reference detected in " + P.join("."));
      c.push(C), E.forEach(C, function(q, $) {
        (!(E.isUndefined(q) || q === null) && o.call(
          e,
          q,
          E.isString($) ? $.trim() : $,
          P,
          b
        )) === !0 && k(q, P ? P.concat($) : [$]);
      }), c.pop();
    }
  }
  if (!E.isObject(t))
    throw new TypeError("data must be an object");
  return k(t), e;
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
  if (o ? i = o(e, n) : i = E.isURLSearchParams(e) ? e.toString() : new $n(e, n).toString(r), i) {
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
    E.forEach(this.handlers, function(r) {
      r !== null && e(r);
    });
  }
}
const Tr = da, Io = {
  silentJSONParsing: !0,
  forcedJSONParsing: !0,
  clarifyTimeoutError: !1
}, fa = typeof URLSearchParams < "u" ? URLSearchParams : $n, pa = typeof FormData < "u" ? FormData : null, ha = typeof Blob < "u" ? Blob : null, ga = (() => {
  let t;
  return typeof navigator < "u" && ((t = navigator.product) === "ReactNative" || t === "NativeScript" || t === "NS") ? !1 : typeof window < "u" && typeof document < "u";
})(), ma = (() => typeof WorkerGlobalScope < "u" && // eslint-disable-next-line no-undef
self instanceof WorkerGlobalScope && typeof self.importScripts == "function")(), St = {
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
  return nn(t, new St.classes.URLSearchParams(), Object.assign({
    visitor: function(n, r, o, i) {
      return St.isNode && E.isBuffer(n) ? (this.append(r, n.toString("base64")), !1) : i.defaultVisitor.apply(this, arguments);
    }
  }, e));
}
function va(t) {
  return E.matchAll(/\w+|\[(\w*)]/g, t).map((e) => e[0] === "[]" ? "" : e[1] || e[0]);
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
    return s = !s && E.isArray(o) ? o.length : s, u ? (E.hasOwnProp(o, s) ? o[s] = [o[s], r] : o[s] = r, !a) : ((!o[s] || !E.isObject(o[s])) && (o[s] = []), e(n, r, o[s], i) && E.isArray(o[s]) && (o[s] = wa(o[s])), !a);
  }
  if (E.isFormData(t) && E.isFunction(t.entries)) {
    const n = {};
    return E.forEachEntry(t, (r, o) => {
      e(va(r), o, n, 0);
    }), n;
  }
  return null;
}
const _a = {
  "Content-Type": void 0
};
function ba(t, e, n) {
  if (E.isString(t))
    try {
      return (e || JSON.parse)(t), E.trim(t);
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
    const r = n.getContentType() || "", o = r.indexOf("application/json") > -1, i = E.isObject(e);
    if (i && E.isHTMLForm(e) && (e = new FormData(e)), E.isFormData(e))
      return o && o ? JSON.stringify(Lo(e)) : e;
    if (E.isArrayBuffer(e) || E.isBuffer(e) || E.isStream(e) || E.isFile(e) || E.isBlob(e))
      return e;
    if (E.isArrayBufferView(e))
      return e.buffer;
    if (E.isURLSearchParams(e))
      return n.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1), e.toString();
    let a;
    if (i) {
      if (r.indexOf("application/x-www-form-urlencoded") > -1)
        return ya(e, this.formSerializer).toString();
      if ((a = E.isFileList(e)) || r.indexOf("multipart/form-data") > -1) {
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
    if (e && E.isString(e) && (r && !this.responseType || o)) {
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
    FormData: St.classes.FormData,
    Blob: St.classes.Blob
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
E.forEach(["delete", "get", "head"], function(e) {
  rn.headers[e] = {};
});
E.forEach(["post", "put", "patch"], function(e) {
  rn.headers[e] = E.merge(_a);
});
const Hn = rn, Ea = E.toObjectSet([
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
}, Pr = Symbol("internals");
function de(t) {
  return t && String(t).trim().toLowerCase();
}
function Le(t) {
  return t === !1 || t == null ? t : E.isArray(t) ? t.map(Le) : String(t);
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
  if (E.isFunction(r))
    return r.call(this, e, n);
  if (o && (e = n), !!E.isString(e)) {
    if (E.isString(r))
      return e.indexOf(r) !== -1;
    if (E.isRegExp(r))
      return r.test(e);
  }
}
function Na(t) {
  return t.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (e, n, r) => n.toUpperCase() + r);
}
function Da(t, e) {
  const n = E.toCamelCase(" " + e);
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
    function i(a, u, l) {
      const p = de(u);
      if (!p)
        throw new Error("header name must be a non-empty string");
      const c = E.findKey(o, p);
      (!c || o[c] === void 0 || l === !0 || l === void 0 && o[c] !== !1) && (o[c || u] = Le(a));
    }
    const s = (a, u) => E.forEach(a, (l, p) => i(l, p, u));
    return E.isPlainObject(e) || e instanceof this.constructor ? s(e, n) : E.isString(e) && (e = e.trim()) && !xa(e) ? s(Oa(e), n) : e != null && i(n, e, r), this;
  }
  get(e, n) {
    if (e = de(e), e) {
      const r = E.findKey(this, e);
      if (r) {
        const o = this[r];
        if (!n)
          return o;
        if (n === !0)
          return Sa(o);
        if (E.isFunction(n))
          return n.call(this, o, r);
        if (E.isRegExp(n))
          return n.exec(o);
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(e, n) {
    if (e = de(e), e) {
      const r = E.findKey(this, e);
      return !!(r && this[r] !== void 0 && (!n || gn(this, this[r], r, n)));
    }
    return !1;
  }
  delete(e, n) {
    const r = this;
    let o = !1;
    function i(s) {
      if (s = de(s), s) {
        const a = E.findKey(r, s);
        a && (!n || gn(r, r[a], a, n)) && (delete r[a], o = !0);
      }
    }
    return E.isArray(e) ? e.forEach(i) : i(e), o;
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
    return E.forEach(this, (o, i) => {
      const s = E.findKey(r, i);
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
    return E.forEach(this, (r, o) => {
      r != null && r !== !1 && (n[o] = e && E.isArray(r) ? r.join(", ") : r);
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
    const r = (this[Pr] = this[Pr] = {
      accessors: {}
    }).accessors, o = this.prototype;
    function i(s) {
      const a = de(s);
      r[a] || (Da(o, s), r[a] = !0);
    }
    return E.isArray(e) ? e.forEach(i) : i(e), this;
  }
}
on.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization"]);
E.freezeMethods(on.prototype);
E.freezeMethods(on);
const Dt = on;
function mn(t, e) {
  const n = this || Hn, r = e || n, o = Dt.from(r.headers);
  let i = r.data;
  return E.forEach(t, function(a) {
    i = a.call(n, i, o.normalize(), e ? e.status : void 0);
  }), o.normalize(), i;
}
function Fo(t) {
  return !!(t && t.__CANCEL__);
}
function Oe(t, e, n) {
  K.call(this, t ?? "canceled", K.ERR_CANCELED, e, n), this.name = "CanceledError";
}
E.inherits(Oe, K, {
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
const Ca = St.isStandardBrowserEnv ? (
  // Standard browser envs support document.cookie
  function() {
    return {
      write: function(n, r, o, i, s, a) {
        const u = [];
        u.push(n + "=" + encodeURIComponent(r)), E.isNumber(o) && u.push("expires=" + new Date(o).toGMTString()), E.isString(i) && u.push("path=" + i), E.isString(s) && u.push("domain=" + s), a === !0 && u.push("secure"), document.cookie = u.join("; ");
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
const Ta = St.isStandardBrowserEnv ? (
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
      const a = E.isString(s) ? o(s) : s;
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
function Pa(t) {
  const e = /^([-+\w]{1,25})(:?\/\/|:)/.exec(t);
  return e && e[1] || "";
}
function Aa(t, e) {
  t = t || 10;
  const n = new Array(t), r = new Array(t);
  let o = 0, i = 0, s;
  return e = e !== void 0 ? e : 1e3, function(u) {
    const l = Date.now(), p = r[i];
    s || (s = l), n[o] = u, r[o] = l;
    let c = i, b = 0;
    for (; c !== o; )
      b += n[c++], c = c % t;
    if (o = (o + 1) % t, o === i && (i = (i + 1) % t), l - s < e)
      return;
    const k = p && l - p;
    return k ? Math.round(b * 1e3 / k) : void 0;
  };
}
function Ar(t, e) {
  let n = 0;
  const r = Aa(50, 250);
  return (o) => {
    const i = o.loaded, s = o.lengthComputable ? o.total : void 0, a = i - n, u = r(a), l = i <= s;
    n = i;
    const p = {
      loaded: i,
      total: s,
      progress: s ? i / s : void 0,
      bytes: a,
      rate: u || void 0,
      estimated: u && s && l ? (s - i) / u : void 0,
      event: o
    };
    p[e ? "download" : "upload"] = !0, t(p);
  };
}
const Ba = typeof XMLHttpRequest < "u", Ia = Ba && function(t) {
  return new Promise(function(n, r) {
    let o = t.data;
    const i = Dt.from(t.headers).normalize(), s = t.responseType;
    let a;
    function u() {
      t.cancelToken && t.cancelToken.unsubscribe(a), t.signal && t.signal.removeEventListener("abort", a);
    }
    E.isFormData(o) && (St.isStandardBrowserEnv || St.isStandardBrowserWebWorkerEnv ? i.setContentType(!1) : i.setContentType("multipart/form-data;", !1));
    let l = new XMLHttpRequest();
    if (t.auth) {
      const k = t.auth.username || "", C = t.auth.password ? unescape(encodeURIComponent(t.auth.password)) : "";
      i.set("Authorization", "Basic " + btoa(k + ":" + C));
    }
    const p = jo(t.baseURL, t.url);
    l.open(t.method.toUpperCase(), Bo(p, t.params, t.paramsSerializer), !0), l.timeout = t.timeout;
    function c() {
      if (!l)
        return;
      const k = Dt.from(
        "getAllResponseHeaders" in l && l.getAllResponseHeaders()
      ), P = {
        data: !s || s === "text" || s === "json" ? l.responseText : l.response,
        status: l.status,
        statusText: l.statusText,
        headers: k,
        config: t,
        request: l
      };
      ka(function(q) {
        n(q), u();
      }, function(q) {
        r(q), u();
      }, P), l = null;
    }
    if ("onloadend" in l ? l.onloadend = c : l.onreadystatechange = function() {
      !l || l.readyState !== 4 || l.status === 0 && !(l.responseURL && l.responseURL.indexOf("file:") === 0) || setTimeout(c);
    }, l.onabort = function() {
      l && (r(new K("Request aborted", K.ECONNABORTED, t, l)), l = null);
    }, l.onerror = function() {
      r(new K("Network Error", K.ERR_NETWORK, t, l)), l = null;
    }, l.ontimeout = function() {
      let C = t.timeout ? "timeout of " + t.timeout + "ms exceeded" : "timeout exceeded";
      const P = t.transitional || Io;
      t.timeoutErrorMessage && (C = t.timeoutErrorMessage), r(new K(
        C,
        P.clarifyTimeoutError ? K.ETIMEDOUT : K.ECONNABORTED,
        t,
        l
      )), l = null;
    }, St.isStandardBrowserEnv) {
      const k = (t.withCredentials || Ta(p)) && t.xsrfCookieName && Ca.read(t.xsrfCookieName);
      k && i.set(t.xsrfHeaderName, k);
    }
    o === void 0 && i.setContentType(null), "setRequestHeader" in l && E.forEach(i.toJSON(), function(C, P) {
      l.setRequestHeader(P, C);
    }), E.isUndefined(t.withCredentials) || (l.withCredentials = !!t.withCredentials), s && s !== "json" && (l.responseType = t.responseType), typeof t.onDownloadProgress == "function" && l.addEventListener("progress", Ar(t.onDownloadProgress, !0)), typeof t.onUploadProgress == "function" && l.upload && l.upload.addEventListener("progress", Ar(t.onUploadProgress)), (t.cancelToken || t.signal) && (a = (k) => {
      l && (r(!k || k.type ? new Oe(null, t, l) : k), l.abort(), l = null);
    }, t.cancelToken && t.cancelToken.subscribe(a), t.signal && (t.signal.aborted ? a() : t.signal.addEventListener("abort", a)));
    const b = Pa(p);
    if (b && St.protocols.indexOf(b) === -1) {
      r(new K("Unsupported protocol " + b + ":", K.ERR_BAD_REQUEST, t));
      return;
    }
    l.send(o || null);
  });
}, Fe = {
  http: aa,
  xhr: Ia
};
E.forEach(Fe, (t, e) => {
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
    t = E.isArray(t) ? t : [t];
    const { length: e } = t;
    let n, r;
    for (let o = 0; o < e && (n = t[o], !(r = E.isString(n) ? Fe[n.toLowerCase()] : n)); o++)
      ;
    if (!r)
      throw r === !1 ? new K(
        `Adapter ${n} is not supported by the environment`,
        "ERR_NOT_SUPPORT"
      ) : new Error(
        E.hasOwnProp(Fe, n) ? `Adapter '${n}' is not available in the build` : `Unknown adapter '${n}'`
      );
    if (!E.isFunction(r))
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
  return yn(t), t.headers = Dt.from(t.headers), t.data = mn.call(
    t,
    t.transformRequest
  ), ["post", "put", "patch"].indexOf(t.method) !== -1 && t.headers.setContentType("application/x-www-form-urlencoded", !1), La.getAdapter(t.adapter || Hn.adapter)(t).then(function(r) {
    return yn(t), r.data = mn.call(
      t,
      t.transformResponse,
      r
    ), r.headers = Dt.from(r.headers), r;
  }, function(r) {
    return Fo(r) || (yn(t), r && r.response && (r.response.data = mn.call(
      t,
      t.transformResponse,
      r.response
    ), r.response.headers = Dt.from(r.response.headers))), Promise.reject(r);
  });
}
const Ir = (t) => t instanceof Dt ? t.toJSON() : t;
function ae(t, e) {
  e = e || {};
  const n = {};
  function r(l, p, c) {
    return E.isPlainObject(l) && E.isPlainObject(p) ? E.merge.call({ caseless: c }, l, p) : E.isPlainObject(p) ? E.merge({}, p) : E.isArray(p) ? p.slice() : p;
  }
  function o(l, p, c) {
    if (E.isUndefined(p)) {
      if (!E.isUndefined(l))
        return r(void 0, l, c);
    } else
      return r(l, p, c);
  }
  function i(l, p) {
    if (!E.isUndefined(p))
      return r(void 0, p);
  }
  function s(l, p) {
    if (E.isUndefined(p)) {
      if (!E.isUndefined(l))
        return r(void 0, l);
    } else
      return r(void 0, p);
  }
  function a(l, p, c) {
    if (c in e)
      return r(l, p);
    if (c in t)
      return r(void 0, l);
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
    headers: (l, p) => o(Ir(l), Ir(p), !0)
  };
  return E.forEach(Object.keys(Object.assign({}, t, e)), function(p) {
    const c = u[p] || o, b = c(t[p], e[p], p);
    E.isUndefined(b) && c !== a || (n[p] = b);
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
}, Ct = Rn.validators;
class $e {
  constructor(e) {
    this.defaults = e, this.interceptors = {
      request: new Tr(),
      response: new Tr()
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
    typeof e == "string" ? (n = n || {}, n.url = e) : n = e || {}, n = ae(this.defaults, n);
    const { transitional: r, paramsSerializer: o, headers: i } = n;
    r !== void 0 && Rn.assertOptions(r, {
      silentJSONParsing: Ct.transitional(Ct.boolean),
      forcedJSONParsing: Ct.transitional(Ct.boolean),
      clarifyTimeoutError: Ct.transitional(Ct.boolean)
    }, !1), o != null && (E.isFunction(o) ? n.paramsSerializer = {
      serialize: o
    } : Rn.assertOptions(o, {
      encode: Ct.function,
      serialize: Ct.function
    }, !0)), n.method = (n.method || this.defaults.method || "get").toLowerCase();
    let s;
    s = i && E.merge(
      i.common,
      i[n.method]
    ), s && E.forEach(
      ["delete", "get", "head", "post", "put", "patch", "common"],
      (C) => {
        delete i[C];
      }
    ), n.headers = Dt.concat(s, i);
    const a = [];
    let u = !0;
    this.interceptors.request.forEach(function(P) {
      typeof P.runWhen == "function" && P.runWhen(n) === !1 || (u = u && P.synchronous, a.unshift(P.fulfilled, P.rejected));
    });
    const l = [];
    this.interceptors.response.forEach(function(P) {
      l.push(P.fulfilled, P.rejected);
    });
    let p, c = 0, b;
    if (!u) {
      const C = [Br.bind(this), void 0];
      for (C.unshift.apply(C, a), C.push.apply(C, l), b = C.length, p = Promise.resolve(n); c < b; )
        p = p.then(C[c++], C[c++]);
      return p;
    }
    b = a.length;
    let k = n;
    for (c = 0; c < b; ) {
      const C = a[c++], P = a[c++];
      try {
        k = C(k);
      } catch (z) {
        P.call(this, z);
        break;
      }
    }
    try {
      p = Br.call(this, k);
    } catch (C) {
      return Promise.reject(C);
    }
    for (c = 0, b = l.length; c < b; )
      p = p.then(l[c++], l[c++]);
    return p;
  }
  getUri(e) {
    e = ae(this.defaults, e);
    const n = jo(e.baseURL, e.url);
    return Bo(n, e.params, e.paramsSerializer);
  }
}
E.forEach(["delete", "get", "head", "options"], function(e) {
  $e.prototype[e] = function(n, r) {
    return this.request(ae(r || {}, {
      method: e,
      url: n,
      data: (r || {}).data
    }));
  };
});
E.forEach(["post", "put", "patch"], function(e) {
  function n(r) {
    return function(i, s, a) {
      return this.request(ae(a || {}, {
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
  return E.isObject(t) && t.isAxiosError === !0;
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
  return E.extend(n, je.prototype, e, { allOwnKeys: !0 }), E.extend(n, e, null, { allOwnKeys: !0 }), n.create = function(o) {
    return Uo(ae(t, o));
  }, n;
}
const et = Uo(Hn);
et.Axios = je;
et.CanceledError = Oe;
et.CancelToken = ja;
et.isCancel = Fo;
et.VERSION = Vo;
et.toFormData = nn;
et.AxiosError = K;
et.Cancel = et.CanceledError;
et.all = function(e) {
  return Promise.all(e);
};
et.spread = Va;
et.isAxiosError = Ua;
et.mergeConfig = ae;
et.AxiosHeaders = Dt;
et.formToJSON = (t) => Lo(E.isHTMLForm(t) ? new FormData(t) : t);
et.HttpStatusCode = za;
et.default = et;
const qa = et, $a = window.location.hostname === "localhost", Ha = qa.create({
  baseURL: "https://localhost:8080/",
  withCredentials: !1
});
let Fr = "https://dev-url.com/", jr = "";
const Rt = {
  apiClient: Ha,
  setBaseURL: function(t, e) {
    $a ? this.apiClient.defaults.baseURL = t || Fr : this.apiClient.defaults.baseURL = e || jr, Fr = t, jr = e;
  },
  getBaseURL: function() {
    return this.apiClient.defaults.baseURL;
  }
};
function Ja() {
  const t = X("api/requestloginkey"), e = X("api/verifyaccess"), n = X("api/confirmaccess"), r = X("api/logout"), o = X("http://localhost:3000/"), i = X("https://www.nopwd.com"), s = X("/app"), a = X("/auth/login"), u = xs();
  function l(y, g) {
    (y != null || y != null || y != "") && (o.value = y), (g != null || g != null || g != "") && (i.value = g);
  }
  function p(y, g) {
    s.value = y, a.value = g;
  }
  function c(y, g, B, T) {
    (y != null || y != null || y != "") && (t.value = y), (g != null || g != null || g != "") && (e.value = g), (B != null || B != null || B != "") && (n.value = B), (T != null || T != null || T != "") && (r.value = T);
  }
  const b = X(!1), k = X(!1), C = X(0), P = fe("nopwd_site", Yt.EMPTY), z = fe("nopwd_login", Yt.EMPTY), q = fe("nopwd_auth", 0), $ = fe("nopwd_session", ""), { t: F } = wo();
  function L() {
    return {
      headers: {
        Accept: "application/json",
        "X-LoginId": z.value,
        "X-SiteId": P.value,
        "Content-Type": "application/json"
      }
    };
  }
  const x = X(!1), M = X(""), _ = X(F("auth.prepare")), m = X({ id: z.value, code: null, value: null, subid: null, userid: null, count: null, page: null, fromdate: null });
  async function h() {
    return z.value = Yt.EMPTY, z.value === Yt.EMPTY.toString() ? (_.value = F("auth.loading"), z.value = Yt.create().toString(), m.value.id = z.value, Rt.setBaseURL(o.value, i.value), Rt.apiClient.get(t.value, L()).then((y) => {
      const g = y.data;
      return g.success ? (_.value = "", M.value = "https://www.nopwd.com?loginid=" + z.value, b.value = g.success, C.value = g.code, q.value = 1, setTimeout(w, 1e3), x ? _.value = F("auth.codedark") : _.value = F("auth.codelight"), 1) : (_.value = F("auth.codeerror"), -1);
    }).catch((y) => (console.log(y), k.value = !0, _.value = F("auth.codeerror"), -1))) : (x ? _.value = F("auth.codedark") : _.value = F("auth.codelight"), w(), 0);
  }
  async function w() {
    return Rt.setBaseURL(o.value, i.value), await Rt.apiClient.get(e.value, L()).then((y) => {
      const g = y.data;
      if (g.success)
        return b.value = g.success, C.value = g.code, g.code > 0 ? (q.value = 2, $.value = JSON.stringify(g.data), setTimeout(f, 2e4), (s.value !== void 0 || s.value !== null || s.value !== "") && u.push(s.value), 1) : g.code < 0 ? (q.value = 0, f(), -1) : (setTimeout(w, 1e3), x ? _.value = F("auth.codedark") : _.value = F("auth.codelight"), 0);
    }).catch((y) => (console.log(y), k.value = !0, _.value = F("auth.codeerror"), -1));
  }
  async function f() {
    if (q.value < 2) {
      N();
      return;
    }
    Rt.setBaseURL(o.value, i.value), await Rt.apiClient.get(n.value, L()).then((y) => {
      const g = y.data;
      g.success && (b.value = g.success, C.value = g.code, g.code > 0 ? setTimeout(f, 2e4) : (q.value = 0, $.value = "", (a.value !== void 0 || a.value !== null || a.value !== "") && u.push(a.value)));
    }).catch((y) => {
      console.log(y), k.value = !0, _.value = F("auth.codeerror");
    });
  }
  function d() {
    return q.value > 1;
  }
  async function N() {
    q.value = 0, Rt.setBaseURL(o.value, i.value), await Rt.apiClient.get(r.value, L()).then((y) => {
      const g = y.data;
      b.value = g.success, C.value = g.code, b.value && (q.value = 0, z.value = Yt.EMPTY.toString()), (a.value !== void 0 || a.value !== null || a.value !== "") && u.push(a.value);
    });
  }
  return {
    auth: q,
    success: b,
    code: C,
    IDLogin: z,
    IDSite: P,
    QRCode: M,
    Message: _,
    is_error: k,
    loginQRCode: h,
    checkAccess: f,
    checkQRLogin: w,
    logout: N,
    config: L,
    IsLoggedIn: d,
    setUrls: c,
    setRoutes: p,
    setBase: l
  };
}
var Wa = Object.defineProperty, Ka = (t, e, n) => e in t ? Wa(t, e, { enumerable: !0, configurable: !0, writable: !0, value: n }) : t[e] = n, at = (t, e, n) => (Ka(t, typeof e != "symbol" ? e + "" : e, n), n);
function Ga(t, e) {
  const n = /* @__PURE__ */ Object.create(null), r = t.split(",");
  for (let o = 0; o < r.length; o++)
    n[r[o]] = !0;
  return e ? (o) => !!n[o.toLowerCase()] : (o) => !!n[o];
}
const Tn = process.env.NODE_ENV !== "production" ? Object.freeze({}) : {}, Qa = process.env.NODE_ENV !== "production" ? Object.freeze([]) : [], pt = () => {
}, Ya = /^on[^a-z]/, Xa = (t) => Ya.test(t), lt = Object.assign, zo = (t, e) => {
  const n = t.indexOf(e);
  n > -1 && t.splice(n, 1);
}, Za = Object.prototype.hasOwnProperty, sn = (t, e) => Za.call(t, e), W = Array.isArray, qt = (t) => an(t) === "[object Map]", qo = (t) => an(t) === "[object Set]", G = (t) => typeof t == "function", mt = (t) => typeof t == "string", Kn = (t) => typeof t == "symbol", Z = (t) => t !== null && typeof t == "object", Gn = (t) => Z(t) && G(t.then) && G(t.catch), $o = Object.prototype.toString, an = (t) => $o.call(t), Ho = (t) => an(t).slice(8, -1), Jo = (t) => an(t) === "[object Object]", Qn = (t) => mt(t) && t !== "NaN" && t[0] !== "-" && "" + parseInt(t, 10) === t, Wo = (t) => {
  const e = /* @__PURE__ */ Object.create(null);
  return (n) => e[n] || (e[n] = t(n));
}, Ko = Wo(
  (t) => t.charAt(0).toUpperCase() + t.slice(1)
), tc = Wo(
  (t) => t ? `on${Ko(t)}` : ""
), He = (t, e) => !Object.is(t, e), ec = (t) => {
  const e = mt(t) ? Number(t) : NaN;
  return isNaN(e) ? t : e;
};
let Vr;
const Pn = () => Vr || (Vr = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function Yn(t) {
  if (W(t)) {
    const e = {};
    for (let n = 0; n < t.length; n++) {
      const r = t[n], o = mt(r) ? ic(r) : Yn(r);
      if (o)
        for (const i in o)
          e[i] = o[i];
    }
    return e;
  } else if (mt(t) || Z(t))
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
function re(t) {
  let e = "";
  if (mt(t))
    e = t;
  else if (W(t))
    for (let n = 0; n < t.length; n++) {
      const r = re(t[n]);
      r && (e += r + " ");
    }
  else if (Z(t))
    for (const n in t)
      t[n] && (e += n + " ");
  return e.trim();
}
const sc = (t) => mt(t) ? t : t == null ? "" : W(t) || Z(t) && (t.toString === $o || !G(t.toString)) ? JSON.stringify(t, Go, 2) : String(t), Go = (t, e) => e && e.__v_isRef ? Go(t, e.value) : qt(e) ? {
  [`Map(${e.size})`]: [...e.entries()].reduce((n, [r, o]) => (n[`${r} =>`] = o, n), {})
} : qo(e) ? {
  [`Set(${e.size})`]: [...e.values()]
} : Z(e) && !W(e) && !Jo(e) ? String(e) : e;
function Ur(t, ...e) {
  console.warn(`[Vue warn] ${t}`, ...e);
}
let Qo;
function ac(t, e = Qo) {
  e && e.active && e.effects.push(t);
}
function cc() {
  return Qo;
}
const ye = (t) => {
  const e = new Set(t);
  return e.w = 0, e.n = 0, e;
}, Yo = (t) => (t.w & Ft) > 0, Xo = (t) => (t.n & Ft) > 0, uc = ({ deps: t }) => {
  if (t.length)
    for (let e = 0; e < t.length; e++)
      t[e].w |= Ft;
}, lc = (t) => {
  const { deps: e } = t;
  if (e.length) {
    let n = 0;
    for (let r = 0; r < e.length; r++) {
      const o = e[r];
      Yo(o) && !Xo(o) ? o.delete(t) : e[n++] = o, o.w &= ~Ft, o.n &= ~Ft;
    }
    e.length = n;
  }
}, An = /* @__PURE__ */ new WeakMap();
let pe = 0, Ft = 1;
const Bn = 30;
let st;
const $t = Symbol(process.env.NODE_ENV !== "production" ? "iterate" : ""), In = Symbol(process.env.NODE_ENV !== "production" ? "Map key iterate" : "");
class Zo {
  constructor(e, n = null, r) {
    this.fn = e, this.scheduler = n, this.active = !0, this.deps = [], this.parent = void 0, ac(this, r);
  }
  run() {
    if (!this.active)
      return this.fn();
    let e = st, n = It;
    for (; e; ) {
      if (e === this)
        return;
      e = e.parent;
    }
    try {
      return this.parent = st, st = this, It = !0, Ft = 1 << ++pe, pe <= Bn ? uc(this) : zr(this), this.fn();
    } finally {
      pe <= Bn && lc(this), Ft = 1 << --pe, st = this.parent, It = n, this.parent = void 0, this.deferStop && this.stop();
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
let It = !0;
const ti = [];
function cn() {
  ti.push(It), It = !1;
}
function un() {
  const t = ti.pop();
  It = t === void 0 ? !0 : t;
}
function yt(t, e, n) {
  if (It && st) {
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
  pe <= Bn ? Xo(t) || (t.n |= Ft, n = !Yo(t)) : n = !t.has(st), n && (t.add(st), st.deps.push(t), process.env.NODE_ENV !== "production" && st.onTrack && st.onTrack(
    lt(
      {
        effect: st
      },
      e
    )
  ));
}
function jt(t, e, n, r, o, i) {
  const s = An.get(t);
  if (!s)
    return;
  let a = [];
  if (e === "clear")
    a = [...s.values()];
  else if (n === "length" && W(t)) {
    const l = Number(r);
    s.forEach((p, c) => {
      (c === "length" || c >= l) && a.push(p);
    });
  } else
    switch (n !== void 0 && a.push(s.get(n)), e) {
      case "add":
        W(t) ? Qn(n) && a.push(s.get("length")) : (a.push(s.get($t)), qt(t) && a.push(s.get(In)));
        break;
      case "delete":
        W(t) || (a.push(s.get($t)), qt(t) && a.push(s.get(In)));
        break;
      case "set":
        qt(t) && a.push(s.get($t));
        break;
    }
  const u = process.env.NODE_ENV !== "production" ? { target: t, type: e, key: n, newValue: r, oldValue: o, oldTarget: i } : void 0;
  if (a.length === 1)
    a[0] && (process.env.NODE_ENV !== "production" ? ee(a[0], u) : ee(a[0]));
  else {
    const l = [];
    for (const p of a)
      p && l.push(...p);
    process.env.NODE_ENV !== "production" ? ee(ye(l), u) : ee(ye(l));
  }
}
function ee(t, e) {
  const n = W(t) ? t : [...t];
  for (const r of n)
    r.computed && qr(r, e);
  for (const r of n)
    r.computed || qr(r, e);
}
function qr(t, e) {
  (t !== st || t.allowRecurse) && (process.env.NODE_ENV !== "production" && t.onTrigger && t.onTrigger(lt({ effect: t }, e)), t.scheduler ? t.scheduler() : t.run());
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
        yt(r, "get", i + "");
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
  return yt(e, "has", t), e.hasOwnProperty(t);
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
    return (Kn(r) ? ei.has(r) : dc(r)) || (t || yt(n, "get", r), e) ? s : ct(s) ? i && Qn(r) ? s : s.value : Z(s) ? t ? ai(s) : Zn(s) : s;
  };
}
const mc = /* @__PURE__ */ yc();
function yc(t = !1) {
  return function(e, n, r, o) {
    let i = e[n];
    if (Kt(i) && ct(i) && !ct(r))
      return !1;
    if (!t && (!Fn(r) && !Kt(r) && (i = H(i), r = H(r)), !W(e) && ct(i) && !ct(r)))
      return i.value = r, !0;
    const s = W(e) && Qn(n) ? Number(n) < e.length : sn(e, n), a = Reflect.set(e, n, r, o);
    return e === H(o) && (s ? He(r, i) && jt(e, "set", n, r, i) : jt(e, "add", n, r)), a;
  };
}
function vc(t, e) {
  const n = sn(t, e), r = t[e], o = Reflect.deleteProperty(t, e);
  return o && n && jt(t, "delete", e, void 0, r), o;
}
function wc(t, e) {
  const n = Reflect.has(t, e);
  return (!Kn(e) || !ei.has(e)) && yt(t, "has", e), n;
}
function _c(t) {
  return yt(t, "iterate", W(t) ? "length" : $t), Reflect.ownKeys(t);
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
  n || (e !== i && yt(o, "get", e), yt(o, "get", i));
  const { has: s } = ln(o), a = r ? Xn : n ? er : tr;
  if (s.call(o, e))
    return a(t.get(e));
  if (s.call(o, i))
    return a(t.get(i));
  t !== o && t.get(e);
}
function ke(t, e = !1) {
  const n = this.__v_raw, r = H(n), o = H(t);
  return e || (t !== o && yt(r, "has", t), yt(r, "has", o)), t === o ? n.has(t) : n.has(t) || n.has(o);
}
function Ce(t, e = !1) {
  return t = t.__v_raw, !e && yt(H(t), "iterate", $t), Reflect.get(t, "size", t);
}
function Hr(t) {
  t = H(t);
  const e = H(this);
  return ln(e).has.call(e, t) || (e.add(t), jt(e, "add", t, t)), this;
}
function Jr(t, e) {
  e = H(e);
  const n = H(this), { has: r, get: o } = ln(n);
  let i = r.call(n, t);
  i ? process.env.NODE_ENV !== "production" && oi(n, r, t) : (t = H(t), i = r.call(n, t));
  const s = o.call(n, t);
  return n.set(t, e), i ? He(e, s) && jt(n, "set", t, e, s) : jt(n, "add", t, e), this;
}
function Wr(t) {
  const e = H(this), { has: n, get: r } = ln(e);
  let o = n.call(e, t);
  o ? process.env.NODE_ENV !== "production" && oi(e, n, t) : (t = H(t), o = n.call(e, t));
  const i = r ? r.call(e, t) : void 0, s = e.delete(t);
  return o && jt(e, "delete", t, void 0, i), s;
}
function Kr() {
  const t = H(this), e = t.size !== 0, n = process.env.NODE_ENV !== "production" ? qt(t) ? new Map(t) : new Set(t) : void 0, r = t.clear();
  return e && jt(t, "clear", void 0, void 0, n), r;
}
function Re(t, e) {
  return function(n, r) {
    const o = this, i = o.__v_raw, s = H(i), a = e ? Xn : t ? er : tr;
    return !t && yt(s, "iterate", $t), i.forEach((u, l) => n.call(r, a(u), a(l), o));
  };
}
function Me(t, e, n) {
  return function(...r) {
    const o = this.__v_raw, i = H(o), s = qt(i), a = t === "entries" || t === Symbol.iterator && s, u = t === "keys" && s, l = o[t](...r), p = n ? Xn : e ? er : tr;
    return !e && yt(
      i,
      "iterate",
      u ? In : $t
    ), {
      // iterator protocol
      next() {
        const { value: c, done: b } = l.next();
        return b ? { value: c, done: b } : {
          value: a ? [p(c[0]), p(c[1])] : p(c),
          done: b
        };
      },
      // iterable protocol
      [Symbol.iterator]() {
        return this;
      }
    };
  };
}
function Mt(t) {
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
    add: Mt("add"),
    set: Mt("set"),
    delete: Mt("delete"),
    clear: Mt("clear"),
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
    add: Mt("add"),
    set: Mt("set"),
    delete: Mt("delete"),
    clear: Mt("clear"),
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
function Tc(t) {
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
function Pc(t) {
  return t.__v_skip || !Object.isExtensible(t) ? 0 : Tc(Ho(t));
}
function Zn(t) {
  return Kt(t) ? t : ci(
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
  if (!Z(t))
    return process.env.NODE_ENV !== "production" && console.warn(`value cannot be made reactive: ${String(t)}`), t;
  if (t.__v_raw && !(e && t.__v_isReactive))
    return t;
  const i = o.get(t);
  if (i)
    return i;
  const s = Pc(t);
  if (s === 0)
    return t;
  const a = new Proxy(
    t,
    s === 2 ? r : n
  );
  return o.set(t, a), a;
}
function Ht(t) {
  return Kt(t) ? Ht(t.__v_raw) : !!(t && t.__v_isReactive);
}
function Kt(t) {
  return !!(t && t.__v_isReadonly);
}
function Fn(t) {
  return !!(t && t.__v_isShallow);
}
function jn(t) {
  return Ht(t) || Kt(t);
}
function H(t) {
  const e = t && t.__v_raw;
  return e ? H(e) : t;
}
const tr = (t) => Z(t) ? Zn(t) : t, er = (t) => Z(t) ? ai(t) : t;
function Ac(t) {
  It && st && (t = H(t), process.env.NODE_ENV !== "production" ? Ln(t.dep || (t.dep = ye()), {
    target: t,
    type: "get",
    key: "value"
  }) : Ln(t.dep || (t.dep = ye())));
}
function Bc(t, e) {
  t = H(t);
  const n = t.dep;
  n && (process.env.NODE_ENV !== "production" ? ee(n, {
    target: t,
    type: "set",
    key: "value",
    newValue: e
  }) : ee(n));
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
  return Ht(t) ? t : new Proxy(t, Ic);
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
  } : pt) : (r = t.get, o = t.set);
  const s = new Fc(r, o, i || !o, n);
  return process.env.NODE_ENV !== "production" && e && !n && (s.effect.onTrack = e.onTrack, s.effect.onTrigger = e.onTrigger), s;
}
const Jt = [];
function ui(t) {
  Jt.push(t);
}
function li() {
  Jt.pop();
}
function J(t, ...e) {
  if (process.env.NODE_ENV === "production")
    return;
  cn();
  const n = Jt.length ? Jt[Jt.length - 1].component : null, r = n && n.appContext.config.warnHandler, o = Vc();
  if (r)
    Wt(
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
  let t = Jt[Jt.length - 1];
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
  return mt(e) ? (e = JSON.stringify(e), n ? e : [`${t}=${e}`]) : typeof e == "number" || typeof e == "boolean" || e == null ? n ? e : [`${t}=${e}`] : ct(e) ? (e = di(t, H(e.value), !0), n ? e : [`${t}=Ref<`, e, ">"]) : G(e) ? [`${t}=fn${e.name ? `<${e.name}>` : ""}`] : (e = H(e), n ? e : [`${t}=`, e]);
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
function Wt(t, e, n, r) {
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
    const i = Wt(t, e, n, r);
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
      const l = i.ec;
      if (l) {
        for (let p = 0; p < l.length; p++)
          if (l[p](t, s, a) === !1)
            return;
      }
      i = i.parent;
    }
    const u = e.appContext.config.errorHandler;
    if (u) {
      Wt(
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
const bt = [];
let At = 0;
const oe = [];
let Ot = null, Pt = 0;
const Jc = /* @__PURE__ */ Promise.resolve(), Wc = 100;
function Kc(t) {
  let e = At + 1, n = bt.length;
  for (; e < n; ) {
    const r = e + n >>> 1;
    we(bt[r]) < t ? e = r + 1 : n = r;
  }
  return e;
}
function fi(t) {
  (!bt.length || !bt.includes(
    t,
    Je && t.allowRecurse ? At + 1 : At
  )) && (t.id == null ? bt.push(t) : bt.splice(Kc(t.id), 0, t), pi());
}
function pi() {
  !Je && !Vn && (Vn = !0, Jc.then(hi));
}
function or(t) {
  W(t) ? oe.push(...t) : (!Ot || !Ot.includes(
    t,
    t.allowRecurse ? Pt + 1 : Pt
  )) && oe.push(t), pi();
}
function Gc(t) {
  if (oe.length) {
    const e = [...new Set(oe)];
    if (oe.length = 0, Ot) {
      Ot.push(...e);
      return;
    }
    for (Ot = e, process.env.NODE_ENV !== "production" && (t = t || /* @__PURE__ */ new Map()), Ot.sort((n, r) => we(n) - we(r)), Pt = 0; Pt < Ot.length; Pt++)
      process.env.NODE_ENV !== "production" && gi(t, Ot[Pt]) || Ot[Pt]();
    Ot = null, Pt = 0;
  }
}
const we = (t) => t.id == null ? 1 / 0 : t.id, Qc = (t, e) => {
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
  Vn = !1, Je = !0, process.env.NODE_ENV !== "production" && (t = t || /* @__PURE__ */ new Map()), bt.sort(Qc);
  const e = process.env.NODE_ENV !== "production" ? (n) => gi(t, n) : pt;
  try {
    for (At = 0; At < bt.length; At++) {
      const n = bt[At];
      if (n && n.active !== !1) {
        if (process.env.NODE_ENV !== "production" && e(n))
          continue;
        Wt(n, null, 14);
      }
    }
  } finally {
    At = 0, bt.length = 0, Gc(t), Je = !1, (bt.length || oe.length) && hi(t);
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
const te = /* @__PURE__ */ new Set();
process.env.NODE_ENV !== "production" && (Pn().__VUE_HMR_RUNTIME__ = {
  createRecord: vn(Yc),
  rerender: vn(Xc),
  reload: vn(Zc)
});
const We = /* @__PURE__ */ new Map();
function Yc(t, e) {
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
    te.has(i) || (i !== n.initialDef && Gr(i, e), te.add(i)), o.appContext.propsCache.delete(o.type), o.appContext.emitsCache.delete(o.type), o.appContext.optionsCache.delete(o.type), o.ceReload ? (te.add(i), o.ceReload(e.styles), te.delete(i)) : o.parent ? fi(o.parent.update) : o.appContext.reload ? o.appContext.reload() : typeof window < "u" ? window.location.reload() : console.warn(
      "[HMR] Root or manually mounted instance modified. Full reload required."
    );
  }
  or(() => {
    for (const o of r)
      te.delete(
        ge(o.type)
      );
  });
}
function Gr(t, e) {
  lt(t, e);
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
let Et = null, vi = null;
function Qr(t) {
  const e = Et;
  return Et = t, vi = t && t.type.__scopeId || null, e;
}
function ou(t, e = Et, n) {
  if (!e || t._n)
    return t;
  const r = (...o) => {
    r._d && io(-1);
    const i = Qr(e);
    let s;
    try {
      s = t(...o);
    } finally {
      Qr(i), r._d && io(1);
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
      if (r.type !== ce || r.children === "v-if") {
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
  process(t, e, n, r, o, i, s, a, u, l) {
    t == null ? uu(
      e,
      n,
      r,
      o,
      i,
      s,
      a,
      u,
      l
    ) : lu(
      t,
      e,
      n,
      r,
      o,
      s,
      a,
      u,
      l
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
    p: l,
    o: { createElement: p }
  } = u, c = p("div"), b = t.suspense = ir(
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
  l(
    null,
    b.pendingBranch = t.ssContent,
    c,
    null,
    r,
    b,
    i,
    s
  ), b.deps > 0 ? (_e(t, "onPending"), _e(t, "onFallback"), l(
    null,
    t.ssFallback,
    e,
    n,
    r,
    null,
    // fallback tree will not have suspense context
    i,
    s
  ), ie(b, t.ssFallback)) : b.resolve(!1, !0);
}
function lu(t, e, n, r, o, i, s, a, { p: u, um: l, o: { createElement: p } }) {
  const c = e.suspense = t.suspense;
  c.vnode = e, e.el = t.el;
  const b = e.ssContent, k = e.ssFallback, { activeBranch: C, pendingBranch: P, isInFallback: z, isHydrating: q } = c;
  if (P)
    c.pendingBranch = b, En(b, P) ? (u(
      P,
      b,
      c.hiddenContainer,
      null,
      o,
      c,
      i,
      s,
      a
    ), c.deps <= 0 ? c.resolve() : z && (u(
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
    ), ie(c, k))) : (c.pendingId++, q ? (c.isHydrating = !1, c.activeBranch = P) : l(P, o, c), c.deps = 0, c.effects.length = 0, c.hiddenContainer = p("div"), z ? (u(
      null,
      b,
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
    ), ie(c, k))) : C && En(b, C) ? (u(
      C,
      b,
      n,
      r,
      o,
      c,
      i,
      s,
      a
    ), c.resolve(!0)) : (u(
      null,
      b,
      c.hiddenContainer,
      null,
      o,
      c,
      i,
      s,
      a
    ), c.deps <= 0 && c.resolve()));
  else if (C && En(b, C))
    u(
      C,
      b,
      n,
      r,
      o,
      c,
      i,
      s,
      a
    ), ie(c, b);
  else if (_e(e, "onPending"), c.pendingBranch = b, c.pendingId++, u(
    null,
    b,
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
    const { timeout: $, pendingId: F } = c;
    $ > 0 ? setTimeout(() => {
      c.pendingId === F && c.fallback(k);
    }, $) : $ === 0 && c.fallback(k);
  }
}
let Yr = !1;
function ir(t, e, n, r, o, i, s, a, u, l, p = !1) {
  process.env.NODE_ENV !== "production" && !Yr && (Yr = !0, console[console.info ? "info" : "log"](
    "<Suspense> is an experimental feature and its API will likely change."
  ));
  const {
    p: c,
    m: b,
    um: k,
    n: C,
    o: { parentNode: P, remove: z }
  } = l;
  let q;
  const $ = hu(t);
  $ && e != null && e.pendingBranch && (q = e.pendingId, e.deps++);
  const F = t.props ? ec(t.props.timeout) : void 0;
  process.env.NODE_ENV !== "production" && $c(F, "Suspense timeout");
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
    timeout: typeof F == "number" ? F : -1,
    activeBranch: null,
    pendingBranch: null,
    isInFallback: !0,
    isHydrating: p,
    isUnmounted: !1,
    effects: [],
    resolve(x = !1, M = !1) {
      if (process.env.NODE_ENV !== "production") {
        if (!x && !L.pendingBranch)
          throw new Error(
            "suspense.resolve() is called without a pending branch."
          );
        if (L.isUnmounted)
          throw new Error(
            "suspense.resolve() is called on an already unmounted suspense boundary."
          );
      }
      const {
        vnode: _,
        activeBranch: m,
        pendingBranch: h,
        pendingId: w,
        effects: f,
        parentComponent: d,
        container: N
      } = L;
      if (L.isHydrating)
        L.isHydrating = !1;
      else if (!x) {
        const B = m && h.transition && h.transition.mode === "out-in";
        B && (m.transition.afterLeave = () => {
          w === L.pendingId && b(h, N, T, 0);
        });
        let { anchor: T } = L;
        m && (T = C(m), k(m, d, L, !0)), B || b(h, N, T, 0);
      }
      ie(L, h), L.pendingBranch = null, L.isInFallback = !1;
      let y = L.parent, g = !1;
      for (; y; ) {
        if (y.pendingBranch) {
          y.effects.push(...f), g = !0;
          break;
        }
        y = y.parent;
      }
      g || or(f), L.effects = [], $ && e && e.pendingBranch && q === e.pendingId && (e.deps--, e.deps === 0 && !M && e.resolve()), _e(_, "onResolve");
    },
    fallback(x) {
      if (!L.pendingBranch)
        return;
      const { vnode: M, activeBranch: _, parentComponent: m, container: h, isSVG: w } = L;
      _e(M, "onFallback");
      const f = C(_), d = () => {
        L.isInFallback && (c(
          null,
          x,
          h,
          f,
          m,
          null,
          // fallback tree will not have suspense context
          w,
          a,
          u
        ), ie(L, x));
      }, N = x.transition && x.transition.mode === "out-in";
      N && (_.transition.afterLeave = d), L.isInFallback = !0, k(
        _,
        m,
        null,
        // no suspense so unmount hooks fire now
        !0
        // shouldRemove
      ), N || d();
    },
    move(x, M, _) {
      L.activeBranch && b(L.activeBranch, x, M, _), L.container = x;
    },
    next() {
      return L.activeBranch && C(L.activeBranch);
    },
    registerDep(x, M) {
      const _ = !!L.pendingBranch;
      _ && L.deps++;
      const m = x.vnode.el;
      x.asyncDep.catch((h) => {
        rr(h, x, 0);
      }).then((h) => {
        if (x.isUnmounted || L.isUnmounted || L.pendingId !== x.suspenseId)
          return;
        x.asyncResolved = !0;
        const { vnode: w } = x;
        process.env.NODE_ENV !== "production" && ui(w), Yu(x, h, !1), m && (w.el = m);
        const f = !m && x.subTree.el;
        M(
          x,
          w,
          // component may have been moved before resolve.
          // if this is not a hydration, instance.subTree will be the comment
          // placeholder.
          P(m || x.subTree.el),
          // anchor will not be used if this is hydration, so only need to
          // consider the comment placeholder case.
          m ? null : C(x.subTree),
          L,
          s,
          u
        ), f && z(f), wi(x, w.el), process.env.NODE_ENV !== "production" && li(), _ && --L.deps === 0 && L.resolve();
      });
    },
    unmount(x, M) {
      L.isUnmounted = !0, L.activeBranch && k(
        L.activeBranch,
        n,
        x,
        M
      ), L.pendingBranch && k(
        L.pendingBranch,
        n,
        x,
        M
      );
    }
  };
  return L;
}
function du(t, e, n, r, o, i, s, a, u) {
  const l = e.suspense = ir(
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
  ), p = u(
    t,
    l.pendingBranch = e.ssContent,
    n,
    l,
    i,
    s
  );
  return l.deps === 0 && l.resolve(!1, !0), p;
}
function fu(t) {
  const { shapeFlag: e, children: n } = t, r = e & 32;
  t.ssContent = Xr(
    r ? n.default : n
  ), t.ssFallback = r ? Xr(n.fallback) : Lt(ce);
}
function Xr(t) {
  let e;
  if (G(t)) {
    const n = ue && t._c;
    n && (t._d = !1, se()), t = t(), n && (t._d = !0, e = ht, Di());
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
function ie(t, e) {
  t.activeBranch = e;
  const { vnode: n, parentComponent: r } = t, o = n.el = e.el;
  r && r.subTree === n && (r.vnode.el = o, wi(r, o));
}
function hu(t) {
  var e;
  return ((e = t.props) == null ? void 0 : e.suspensible) != null && t.props.suspensible !== !1;
}
const Te = {};
function wn(t, e, n) {
  return process.env.NODE_ENV !== "production" && !G(e) && J(
    "`watch(fn, options?)` signature has been moved to a separate API. Use `watchEffect(fn, options?)` instead. `watch` now only supports `watch(source, cb, options?) signature."
  ), gu(t, e, n);
}
function gu(t, e, { immediate: n, deep: r, flush: o, onTrack: i, onTrigger: s } = Tn) {
  var a;
  process.env.NODE_ENV !== "production" && !e && (n !== void 0 && J(
    'watch() "immediate" option is only respected when using the watch(source, callback, options?) signature.'
  ), r !== void 0 && J(
    'watch() "deep" option is only respected when using the watch(source, callback, options?) signature.'
  ));
  const u = (F) => {
    J(
      "Invalid watch source: ",
      F,
      "A watch source can only be a getter/effect function, a ref, a reactive object, or an array of these types."
    );
  }, l = cc() === ((a = ot) == null ? void 0 : a.scope) ? ot : null;
  let p, c = !1, b = !1;
  if (ct(t) ? (p = () => t.value, c = Fn(t)) : Ht(t) ? (p = () => t, r = !0) : W(t) ? (b = !0, c = t.some((F) => Ht(F) || Fn(F)), p = () => t.map((F) => {
    if (ct(F))
      return F.value;
    if (Ht(F))
      return ne(F);
    if (G(F))
      return Wt(F, l, 2);
    process.env.NODE_ENV !== "production" && u(F);
  })) : G(t) ? e ? p = () => Wt(t, l, 2) : p = () => {
    if (!(l && l.isUnmounted))
      return k && k(), ve(
        t,
        l,
        3,
        [C]
      );
  } : (p = pt, process.env.NODE_ENV !== "production" && u(t)), e && r) {
    const F = p;
    p = () => ne(F());
  }
  let k, C = (F) => {
    k = $.onStop = () => {
      Wt(F, l, 4);
    };
  }, P = b ? new Array(t.length).fill(Te) : Te;
  const z = () => {
    if ($.active)
      if (e) {
        const F = $.run();
        (r || c || (b ? F.some(
          (L, x) => He(L, P[x])
        ) : He(F, P))) && (k && k(), ve(e, l, 3, [
          F,
          // pass undefined as the old value when it's changed for the first time
          P === Te ? void 0 : b && P[0] === Te ? [] : P,
          C
        ]), P = F);
      } else
        $.run();
  };
  z.allowRecurse = !!e;
  let q;
  o === "sync" ? q = z : o === "post" ? q = () => oo(z, l && l.suspense) : (z.pre = !0, l && (z.id = l.uid), q = () => fi(z));
  const $ = new Zo(p, q);
  return process.env.NODE_ENV !== "production" && ($.onTrack = i, $.onTrigger = s), e ? n ? z() : P = $.run() : o === "post" ? oo(
    $.run.bind($),
    l && l.suspense
  ) : $.run(), () => {
    $.stop(), l && l.scope && zo(l.scope.effects, $);
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
function ne(t, e) {
  if (!Z(t) || t.__v_skip || (e = e || /* @__PURE__ */ new Set(), e.has(t)))
    return t;
  if (e.add(t), ct(t))
    ne(t.value, e);
  else if (W(t))
    for (let n = 0; n < t.length; n++)
      ne(t[n], e);
  else if (qo(t) || qt(t))
    t.forEach((n) => {
      ne(n, e);
    });
  else if (Jo(t))
    for (const n in t)
      ne(t[n], e);
  return t;
}
function _i(t, e) {
  return G(t) ? (
    // #8326: extend call and options.name access are considered side-effects
    // by Rollup, so we have to wrap it in a pure-annotated IIFE.
    /* @__PURE__ */ (() => lt({ name: t.name }, e, { setup: t }))()
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
      cn(), Ye(n);
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
const kt = (t) => (e, n = ot) => (
  // post-create lifecycle registrations are noops during SSR (except for serverPrefetch)
  dn(t, (...r) => e(...r), n)
), bu = kt("bm"), Eu = kt("m"), Ou = kt("bu"), Su = kt("u"), xu = kt("bum"), Ei = kt("um"), Nu = kt("sp"), Du = kt(
  "rtg"
), ku = kt(
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
        set: pt
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
function Tu(t) {
  const e = Gu();
  process.env.NODE_ENV !== "production" && !e && J(
    "withAsyncContext called without active current instance. This is likely a bug."
  );
  let n = t();
  return lr(), Gn(n) && (n = n.catch((r) => {
    throw Ye(e), r;
  })), [n, () => Ye(e)];
}
function Pu() {
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
    inject: l,
    // lifecycle
    created: p,
    beforeMount: c,
    mounted: b,
    beforeUpdate: k,
    updated: C,
    activated: P,
    deactivated: z,
    beforeDestroy: q,
    beforeUnmount: $,
    destroyed: F,
    unmounted: L,
    render: x,
    renderTracked: M,
    renderTriggered: _,
    errorCaptured: m,
    serverPrefetch: h,
    // public API
    expose: w,
    inheritAttrs: f,
    // assets
    components: d,
    directives: N,
    filters: y
  } = e, g = process.env.NODE_ENV !== "production" ? Pu() : null;
  if (process.env.NODE_ENV !== "production") {
    const [T] = t.propsOptions;
    if (T)
      for (const I in T)
        g("Props", I);
  }
  if (l && Bu(l, r, g), s)
    for (const T in s) {
      const I = s[T];
      G(I) ? (process.env.NODE_ENV !== "production" ? Object.defineProperty(r, T, {
        value: I.bind(n),
        configurable: !0,
        enumerable: !0,
        writable: !0
      }) : r[T] = I.bind(n), process.env.NODE_ENV !== "production" && g("Methods", T)) : process.env.NODE_ENV !== "production" && J(
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
    ), !Z(T))
      process.env.NODE_ENV !== "production" && J("data() should return an object.");
    else if (t.data = Zn(T), process.env.NODE_ENV !== "production")
      for (const I in T)
        g("Data", I), Oi(I[0]) || Object.defineProperty(r, I, {
          configurable: !0,
          enumerable: !0,
          get: () => T[I],
          set: pt
        });
  }
  if (i)
    for (const T in i) {
      const I = i[T], Q = G(I) ? I.bind(n, n) : G(I.get) ? I.get.bind(n, n) : pt;
      process.env.NODE_ENV !== "production" && Q === pt && J(`Computed property "${T}" has no getter.`);
      const nt = !G(I) && G(I.set) ? I.set.bind(n) : process.env.NODE_ENV !== "production" ? () => {
        J(
          `Write operation failed: computed property "${T}" is readonly.`
        );
      } : pt, ut = el({
        get: Q,
        set: nt
      });
      Object.defineProperty(r, T, {
        enumerable: !0,
        configurable: !0,
        get: () => ut.value,
        set: (vt) => ut.value = vt
      }), process.env.NODE_ENV !== "production" && g("Computed", T);
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
  p && to(p, t, "c");
  function B(T, I) {
    W(I) ? I.forEach((Q) => T(Q.bind(n))) : I && T(I.bind(n));
  }
  if (B(bu, c), B(Eu, b), B(Ou, k), B(Su, C), B(vu, P), B(wu, z), B(Cu, m), B(ku, M), B(Du, _), B(xu, $), B(Ei, L), B(Nu, h), W(w))
    if (w.length) {
      const T = t.exposed || (t.exposed = {});
      w.forEach((I) => {
        Object.defineProperty(T, I, {
          get: () => n[I],
          set: (Q) => n[I] = Q
        });
      });
    } else
      t.exposed || (t.exposed = {});
  x && t.render === pt && (t.render = x), f != null && (t.inheritAttrs = f), d && (t.components = d), N && (t.directives = N);
}
function Bu(t, e, n = pt) {
  W(t) && (t = Un(t));
  for (const r in t) {
    const o = t[r];
    let i;
    Z(o) ? "default" in o ? i = _n(
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
  if (mt(t)) {
    const i = e[t];
    G(i) ? wn(o, i) : process.env.NODE_ENV !== "production" && J(`Invalid watch handler specified by key "${t}"`, i);
  } else if (G(t))
    wn(o, t.bind(n));
  else if (Z(t))
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
    (l) => Ke(u, l, s, !0)
  ), Ke(u, e, s)), Z(e) && i.set(e, u), u;
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
    return lt(
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
  return t ? lt(/* @__PURE__ */ Object.create(null), t, e) : e;
}
function no(t, e) {
  return t ? W(t) && W(e) ? [.../* @__PURE__ */ new Set([...t, ...e])] : lt(
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
  const n = lt(/* @__PURE__ */ Object.create(null), t);
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
  const r = ot || Et;
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
let Pe, Bt;
function Vu(t, e) {
  t.appContext.config.performance && Ge() && Bt.mark(`vue-${e}-${t.uid}`), process.env.NODE_ENV !== "production" && nu(t, e, Ge() ? Bt.now() : Date.now());
}
function Uu(t, e) {
  if (t.appContext.config.performance && Ge()) {
    const n = `vue-${e}-${t.uid}`, r = n + ":end";
    Bt.mark(r), Bt.measure(
      `<${dr(t, t.type)}> ${e}`,
      n,
      r
    ), Bt.clearMarks(n), Bt.clearMarks(r);
  }
  process.env.NODE_ENV !== "production" && ru(t, e, Ge() ? Bt.now() : Date.now());
}
function Ge() {
  return Pe !== void 0 || (typeof window < "u" && window.performance ? (Pe = !0, Bt = window.performance) : Pe = !1), Pe;
}
const oo = pu, zu = (t) => t.__isTeleport, sr = Symbol.for("v-fgt"), Ni = Symbol.for("v-txt"), ce = Symbol.for("v-cmt"), Ue = [];
let ht = null;
function se(t = !1) {
  Ue.push(ht = t ? null : []);
}
function Di() {
  Ue.pop(), ht = Ue[Ue.length - 1] || null;
}
let ue = 1;
function io(t) {
  ue += t;
}
function ki(t) {
  return t.dynamicChildren = ue > 0 ? ht || Qa : null, Di(), ue > 0 && ht && ht.push(t), t;
}
function bn(t, e, n, r, o, i) {
  return ki(
    Qe(
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
    Lt(
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
  return process.env.NODE_ENV !== "production" && e.shapeFlag & 6 && te.has(e.type) ? (t.shapeFlag &= -257, e.shapeFlag &= -513, !1) : t.type === e.type && t.key === e.key;
}
const qu = (...t) => Ti(
  ...t
), Ri = "__vInternal", Mi = ({ key: t }) => t ?? null, ze = ({
  ref: t,
  ref_key: e,
  ref_for: n
}) => (typeof t == "number" && (t = "" + t), t != null ? mt(t) || ct(t) || G(t) ? { i: Et, r: t, k: e, f: !!n } : t : null);
function Qe(t, e = null, n = null, r = 0, o = null, i = t === sr ? 0 : 1, s = !1, a = !1) {
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
    ctx: Et
  };
  return a ? (cr(u, n), i & 128 && t.normalize(u)) : n && (u.shapeFlag |= mt(n) ? 8 : 16), process.env.NODE_ENV !== "production" && u.key !== u.key && J("VNode created with invalid key (NaN). VNode type:", u.type), ue > 0 && // avoid a block node from tracking itself
  !s && // has current parent block
  ht && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (u.patchFlag > 0 || i & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  u.patchFlag !== 32 && ht.push(u), u;
}
const Lt = process.env.NODE_ENV !== "production" ? qu : Ti;
function Ti(t, e = null, n = null, r = 0, o = null, i = !1) {
  if ((!t || t === Ru) && (process.env.NODE_ENV !== "production" && !t && J(`Invalid vnode type when creating vnode: ${t}.`), t = ce), ar(t)) {
    const a = be(
      t,
      e,
      !0
      /* mergeRef: true */
    );
    return n && cr(a, n), ue > 0 && !i && ht && (a.shapeFlag & 6 ? ht[ht.indexOf(t)] = a : ht.push(a)), a.patchFlag |= -2, a;
  }
  if (Bi(t) && (t = t.__vccOpts), e) {
    e = $u(e);
    let { class: a, style: u } = e;
    a && !mt(a) && (e.class = re(a)), Z(u) && (jn(u) && !W(u) && (u = lt({}, u)), e.style = Yn(u));
  }
  const s = mt(t) ? 1 : su(t) ? 128 : zu(t) ? 64 : Z(t) ? 4 : G(t) ? 2 : 0;
  return process.env.NODE_ENV !== "production" && s & 4 && jn(t) && (t = H(t), J(
    "Vue received a Component which was made a reactive object. This can lead to unnecessary performance overhead, and should be avoided by marking the component with `markRaw` or using `shallowRef` instead of `ref`.",
    `
Component that was made reactive: `,
    t
  )), Qe(
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
  return t ? jn(t) || Ri in t ? lt({}, t) : t : null;
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
    children: process.env.NODE_ENV !== "production" && i === -1 && W(s) ? s.map(Pi) : s,
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
function Pi(t) {
  const e = be(t);
  return W(t.children) && (e.children = t.children.map(Pi)), e;
}
function Hu(t = " ", e = 0) {
  return Lt(Ni, null, t, e);
}
function so(t = "", e = !1) {
  return e ? (se(), Ci(ce, null, t)) : Lt(ce, null, t);
}
function Ju(t) {
  return t == null || typeof t == "boolean" ? Lt(ce) : W(t) ? Lt(
    sr,
    null,
    // #3666, avoid reference pollution when reusing vnode
    t.slice()
  ) : typeof t == "object" ? Wu(t) : Lt(Ni, null, String(t));
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
      !o && !(Ri in e) ? e._ctx = Et : o === 3 && Et && (Et.slots._ === 1 ? e._ = 1 : (e._ = 2, t.patchFlag |= 1024));
    }
  else
    G(e) ? (e = { default: e, _ctx: Et }, n = 32) : (e = String(e), r & 64 ? (n = 16, e = [Hu(e)]) : n = 8);
  t.children = e, t.shapeFlag |= n;
}
function Ku(...t) {
  const e = {};
  for (let n = 0; n < t.length; n++) {
    const r = t[n];
    for (const o in r)
      if (o === "class")
        e.class !== r.class && (e.class = re([e.class, r.class]));
      else if (o === "style")
        e.style = Yn([e.style, r.style]);
      else if (Xa(o)) {
        const i = e[o], s = r[o];
        s && i !== s && !(W(i) && i.includes(s)) && (e[o] = i ? [].concat(i, s) : s);
      } else
        o !== "" && (e[o] = r[o]);
  }
  return e;
}
let ot = null;
const Gu = () => ot || Et;
let ur, Xt, ao = "__VUE_INSTANCE_SETTERS__";
(Xt = Pn()[ao]) || (Xt = Pn()[ao] = []), Xt.push((t) => ot = t), ur = (t) => {
  Xt.length > 1 ? Xt.forEach((e) => e(t)) : Xt[0](t);
};
const Ye = (t) => {
  ur(t), t.scope.on();
}, lr = () => {
  ot && ot.scope.off(), ur(null);
};
let Qu = !1;
function Yu(t, e, n) {
  G(e) ? t.type.__ssrInlineRender ? t.ssrRender = e : t.render = e : Z(e) ? (process.env.NODE_ENV !== "production" && ar(e) && J(
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
        const { isCustomElement: i, compilerOptions: s } = t.appContext.config, { delimiters: a, compilerOptions: u } = r, l = lt(
          lt(
            {
              isCustomElement: i,
              delimiters: a
            },
            s
          ),
          u
        );
        r.render = co(o, l), process.env.NODE_ENV !== "production" && Uu(t, "compile");
      }
    }
    t.render = r.render || pt;
  }
  Ye(t), cn(), Au(t), un(), lr(), process.env.NODE_ENV !== "production" && !r.render && t.render === pt && !e && (r.template ? J(
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
const el = (t, e) => jc(t, e, Qu);
function On(t) {
  return !!(t && t.__v_isShallow);
}
function nl() {
  if (process.env.NODE_ENV === "production" || typeof window > "u")
    return;
  const t = { style: "color:#3ba776" }, e = { style: "color:#0b1bc9" }, n = { style: "color:#b62e24" }, r = { style: "color:#9d288c" }, o = {
    header(c) {
      return Z(c) ? c.__isVue ? ["div", t, "VueInstance"] : ct(c) ? [
        "div",
        {},
        ["span", t, p(c)],
        "<",
        a(c.value),
        ">"
      ] : Ht(c) ? [
        "div",
        {},
        ["span", t, On(c) ? "ShallowReactive" : "Reactive"],
        "<",
        a(c),
        `>${Kt(c) ? " (readonly)" : ""}`
      ] : Kt(c) ? [
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
    const b = [];
    c.type.props && c.props && b.push(s("props", H(c.props))), c.setupState !== Tn && b.push(s("setup", c.setupState)), c.data !== Tn && b.push(s("data", H(c.data)));
    const k = u(c, "computed");
    k && b.push(s("computed", k));
    const C = u(c, "inject");
    return C && b.push(s("injected", C)), b.push([
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
    ]), b;
  }
  function s(c, b) {
    return b = lt({}, b), Object.keys(b).length ? [
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
        ...Object.keys(b).map((k) => [
          "div",
          {},
          ["span", r, k + ": "],
          a(b[k], !1)
        ])
      ]
    ] : ["span", {}];
  }
  function a(c, b = !0) {
    return typeof c == "number" ? ["span", e, c] : typeof c == "string" ? ["span", n, JSON.stringify(c)] : typeof c == "boolean" ? ["span", r, c] : Z(c) ? ["object", { object: b ? H(c) : c }] : ["span", n, String(c)];
  }
  function u(c, b) {
    const k = c.type;
    if (G(k))
      return;
    const C = {};
    for (const P in c.ctx)
      l(k, P, b) && (C[P] = c.ctx[P]);
    return C;
  }
  function l(c, b, k) {
    const C = c[k];
    if (W(C) && C.includes(b) || Z(C) && b in C || c.extends && l(c.extends, b, k) || c.mixins && c.mixins.some((P) => l(P, b, k)))
      return !0;
  }
  function p(c) {
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
}, Zt = {
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
      case Zt.dots:
        a = this._drawDot;
        break;
      case Zt.classy:
        a = this._drawClassy;
        break;
      case Zt.classyRounded:
        a = this._drawClassyRounded;
        break;
      case Zt.rounded:
        a = this._drawRounded;
        break;
      case Zt.extraRounded:
        a = this._drawExtraRounded;
        break;
      case Zt.square:
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
    const s = +i(-1, 0), a = +i(1, 0), u = +i(0, -1), l = +i(0, 1), p = s + a + u + l;
    if (p === 0) {
      this._basicDot({ x: e, y: n, size: r, context: o, rotation: 0 });
      return;
    }
    if (p > 2 || s && a || u && l) {
      this._basicSquare({ x: e, y: n, size: r, context: o, rotation: 0 });
      return;
    }
    if (p === 2) {
      let c = 0;
      s && u ? c = Math.PI / 2 : u && a ? c = Math.PI : a && l && (c = -Math.PI / 2), this._basicCornerRounded({ x: e, y: n, size: r, context: o, rotation: c });
      return;
    }
    if (p === 1) {
      let c = 0;
      u ? c = Math.PI / 2 : a ? c = Math.PI : l && (c = -Math.PI / 2), this._basicSideRounded({ x: e, y: n, size: r, context: o, rotation: c });
    }
  }
  _drawExtraRounded({ x: e, y: n, size: r, context: o, getNeighbor: i }) {
    const s = +i(-1, 0), a = +i(1, 0), u = +i(0, -1), l = +i(0, 1), p = s + a + u + l;
    if (p === 0) {
      this._basicDot({ x: e, y: n, size: r, context: o, rotation: 0 });
      return;
    }
    if (p > 2 || s && a || u && l) {
      this._basicSquare({ x: e, y: n, size: r, context: o, rotation: 0 });
      return;
    }
    if (p === 2) {
      let c = 0;
      s && u ? c = Math.PI / 2 : u && a ? c = Math.PI : a && l && (c = -Math.PI / 2), this._basicCornerExtraRounded({ x: e, y: n, size: r, context: o, rotation: c });
      return;
    }
    if (p === 1) {
      let c = 0;
      u ? c = Math.PI / 2 : a ? c = Math.PI : l && (c = -Math.PI / 2), this._basicSideRounded({ x: e, y: n, size: r, context: o, rotation: c });
    }
  }
  _drawClassy({ x: e, y: n, size: r, context: o, getNeighbor: i }) {
    const s = +i(-1, 0), a = +i(1, 0), u = +i(0, -1), l = +i(0, 1);
    if (s + a + u + l === 0) {
      this._basicCornersRounded({ x: e, y: n, size: r, context: o, rotation: Math.PI / 2 });
      return;
    }
    if (!s && !u) {
      this._basicCornerRounded({ x: e, y: n, size: r, context: o, rotation: -Math.PI / 2 });
      return;
    }
    if (!a && !l) {
      this._basicCornerRounded({ x: e, y: n, size: r, context: o, rotation: Math.PI / 2 });
      return;
    }
    this._basicSquare({ x: e, y: n, size: r, context: o, rotation: 0 });
  }
  _drawClassyRounded({ x: e, y: n, size: r, context: o, getNeighbor: i }) {
    const s = +i(-1, 0), a = +i(1, 0), u = +i(0, -1), l = +i(0, 1);
    if (s + a + u + l === 0) {
      this._basicCornersRounded({ x: e, y: n, size: r, context: o, rotation: Math.PI / 2 });
      return;
    }
    if (!s && !u) {
      this._basicCornerExtraRounded({ x: e, y: n, size: r, context: o, rotation: -Math.PI / 2 });
      return;
    }
    if (!a && !l) {
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
}, Ut = [
  [1, 1, 1, 1, 1, 1, 1],
  [1, 0, 0, 0, 0, 0, 1],
  [1, 0, 0, 0, 0, 0, 1],
  [1, 0, 0, 0, 0, 0, 1],
  [1, 0, 0, 0, 0, 0, 1],
  [1, 0, 0, 0, 0, 0, 1],
  [1, 1, 1, 1, 1, 1, 1]
], zt = [
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
      const { imageOptions: s, qrOptions: a } = this._options, u = s.imageSize * al[a.errorCorrectionLevel], l = Math.floor(u * n * n);
      i = sl({
        originalWidth: this._image.width,
        originalHeight: this._image.height,
        maxHiddenDots: l,
        maxHiddenAxisDots: n - 14,
        dotSize: o
      });
    }
    this.clear(), this.drawBackground(), this.drawDots((s, a) => {
      var u, l, p, c, b, k;
      return !(this._options.imageOptions.hideBackgroundDots && s >= (n - i.hideXDots) / 2 && s < (n + i.hideXDots) / 2 && a >= (n - i.hideYDots) / 2 && a < (n + i.hideYDots) / 2 || (u = Ut[s]) != null && u[a] || (l = Ut[s - n + 7]) != null && l[a] || (p = Ut[s]) != null && p[a - n + 7] || (c = zt[s]) != null && c[a] || (b = zt[s - n + 7]) != null && b[a] || (k = zt[s]) != null && k[a - n + 7]);
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
    const i = Math.min(r.width, r.height) - r.margin * 2, s = Math.floor(i / o), a = Math.floor((r.width - o * s) / 2), u = Math.floor((r.height - o * s) / 2), l = new xn({ context: n, type: r.dotsOptions.type });
    n.beginPath();
    for (let p = 0; p < o; p++)
      for (let c = 0; c < o; c++)
        e && !e(p, c) || this._qr.isDark(p, c) && l.draw(
          a + p * s,
          u + c * s,
          s,
          (b, k) => p + b < 0 || c + k < 0 || p + b >= o || c + k >= o || e && !e(p + b, c + k) ? !1 : !!this._qr && this._qr.isDark(p + b, c + k)
        );
    if (r.dotsOptions.gradient) {
      const p = r.dotsOptions.gradient, c = this._createGradient({
        context: n,
        options: p,
        additionalRotation: 0,
        x: a,
        y: u,
        size: o * s
      });
      p.colorStops.forEach(({ offset: b, color: k }) => {
        c.addColorStop(b, k);
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
    const r = this._options, o = this._qr.getModuleCount(), i = Math.min(r.width, r.height) - r.margin * 2, s = Math.floor(i / o), a = s * 7, u = s * 3, l = Math.floor((r.width - o * s) / 2), p = Math.floor((r.height - o * s) / 2);
    [
      [0, 0, 0],
      [1, 0, Math.PI / 2],
      [0, 1, -Math.PI / 2]
    ].forEach(([c, b, k]) => {
      var C, P, z, q, $, F, L, x, M, _;
      if (e && !e(c, b))
        return;
      const m = l + c * s * (o - 7), h = p + b * s * (o - 7);
      if ((C = r.cornersSquareOptions) != null && C.type) {
        const w = new cl({ context: n, type: (P = r.cornersSquareOptions) == null ? void 0 : P.type });
        n.beginPath(), w.draw(m, h, a, k);
      } else {
        const w = new xn({ context: n, type: r.dotsOptions.type });
        n.beginPath();
        for (let f = 0; f < Ut.length; f++)
          for (let d = 0; d < Ut[f].length; d++)
            (z = Ut[f]) != null && z[d] && w.draw(
              m + f * s,
              h + d * s,
              s,
              (N, y) => {
                var g;
                return !!((g = Ut[f + N]) != null && g[d + y]);
              }
            );
      }
      if ((q = r.cornersSquareOptions) != null && q.gradient) {
        const w = r.cornersSquareOptions.gradient, f = this._createGradient({
          context: n,
          options: w,
          additionalRotation: k,
          x: m,
          y: h,
          size: a
        });
        w.colorStops.forEach(({ offset: d, color: N }) => {
          f.addColorStop(d, N);
        }), n.fillStyle = n.strokeStyle = f;
      } else
        ($ = r.cornersSquareOptions) != null && $.color && (n.fillStyle = n.strokeStyle = r.cornersSquareOptions.color);
      if (n.fill("evenodd"), (F = r.cornersDotOptions) != null && F.type) {
        const w = new ul({ context: n, type: (L = r.cornersDotOptions) == null ? void 0 : L.type });
        n.beginPath(), w.draw(m + s * 2, h + s * 2, u, k);
      } else {
        const w = new xn({ context: n, type: r.dotsOptions.type });
        n.beginPath();
        for (let f = 0; f < zt.length; f++)
          for (let d = 0; d < zt[f].length; d++)
            (x = zt[f]) != null && x[d] && w.draw(
              m + f * s,
              h + d * s,
              s,
              (N, y) => {
                var g;
                return !!((g = zt[f + N]) != null && g[d + y]);
              }
            );
      }
      if ((M = r.cornersDotOptions) != null && M.gradient) {
        const w = r.cornersDotOptions.gradient, f = this._createGradient({
          context: n,
          options: w,
          additionalRotation: k,
          x: m + s * 2,
          y: h + s * 2,
          size: u
        });
        w.colorStops.forEach(({ offset: d, color: N }) => {
          f.addColorStop(d, N);
        }), n.fillStyle = n.strokeStyle = f;
      } else
        (_ = r.cornersDotOptions) != null && _.color && (n.fillStyle = n.strokeStyle = r.cornersDotOptions.color);
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
    const s = this._options, a = Math.floor((s.width - r * o) / 2), u = Math.floor((s.height - r * o) / 2), l = a + s.imageOptions.margin + (r * o - e) / 2, p = u + s.imageOptions.margin + (r * o - n) / 2, c = e - s.imageOptions.margin * 2, b = n - s.imageOptions.margin * 2;
    i.drawImage(this._image, l, p, c < 0 ? 0 : c, b < 0 ? 0 : b);
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
      const u = ((n.rotation || 0) + r) % (2 * Math.PI), l = (u + 2 * Math.PI) % (2 * Math.PI);
      let p = o + s / 2, c = i + s / 2, b = o + s / 2, k = i + s / 2;
      l >= 0 && l <= 0.25 * Math.PI || l > 1.75 * Math.PI && l <= 2 * Math.PI ? (p = p - s / 2, c = c - s / 2 * Math.tan(u), b = b + s / 2, k = k + s / 2 * Math.tan(u)) : l > 0.25 * Math.PI && l <= 0.75 * Math.PI ? (c = c - s / 2, p = p - s / 2 / Math.tan(u), k = k + s / 2, b = b + s / 2 / Math.tan(u)) : l > 0.75 * Math.PI && l <= 1.25 * Math.PI ? (p = p + s / 2, c = c + s / 2 * Math.tan(u), b = b - s / 2, k = k - s / 2 * Math.tan(u)) : l > 1.25 * Math.PI && l <= 1.75 * Math.PI && (c = c + s / 2, p = p + s / 2 / Math.tan(u), k = k - s / 2, b = b - s / 2 / Math.tan(u)), a = e.createLinearGradient(Math.round(p), Math.round(c), Math.round(b), Math.round(k));
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
    var r = function(x, M) {
      var _ = 236, m = 17, h = x, w = i[M], f = null, d = 0, N = null, y = [], g = {}, B = function(O, S) {
        d = h * 4 + 17, f = function(v) {
          for (var D = new Array(v), R = 0; R < v; R += 1) {
            D[R] = new Array(v);
            for (var A = 0; A < v; A += 1)
              D[R][A] = null;
          }
          return D;
        }(d), T(0, 0), T(d - 7, 0), T(0, d - 7), nt(), Q(), vt(O, S), h >= 7 && ut(O), N == null && (N = ji(h, w, y)), Nt(N, S);
      }, T = function(O, S) {
        for (var v = -1; v <= 7; v += 1)
          if (!(O + v <= -1 || d <= O + v))
            for (var D = -1; D <= 7; D += 1)
              S + D <= -1 || d <= S + D || (0 <= v && v <= 6 && (D == 0 || D == 6) || 0 <= D && D <= 6 && (v == 0 || v == 6) || 2 <= v && v <= 4 && 2 <= D && D <= 4 ? f[O + v][S + D] = !0 : f[O + v][S + D] = !1);
      }, I = function() {
        for (var O = 0, S = 0, v = 0; v < 8; v += 1) {
          B(!0, v);
          var D = a.getLostPoint(g);
          (v == 0 || O > D) && (O = D, S = v);
        }
        return S;
      }, Q = function() {
        for (var O = 8; O < d - 8; O += 1)
          f[O][6] == null && (f[O][6] = O % 2 == 0);
        for (var S = 8; S < d - 8; S += 1)
          f[6][S] == null && (f[6][S] = S % 2 == 0);
      }, nt = function() {
        for (var O = a.getPatternPosition(h), S = 0; S < O.length; S += 1)
          for (var v = 0; v < O.length; v += 1) {
            var D = O[S], R = O[v];
            if (f[D][R] == null)
              for (var A = -2; A <= 2; A += 1)
                for (var V = -2; V <= 2; V += 1)
                  A == -2 || A == 2 || V == -2 || V == 2 || A == 0 && V == 0 ? f[D + A][R + V] = !0 : f[D + A][R + V] = !1;
          }
      }, ut = function(O) {
        for (var S = a.getBCHTypeNumber(h), v = 0; v < 18; v += 1) {
          var D = !O && (S >> v & 1) == 1;
          f[Math.floor(v / 3)][v % 3 + d - 8 - 3] = D;
        }
        for (var v = 0; v < 18; v += 1) {
          var D = !O && (S >> v & 1) == 1;
          f[v % 3 + d - 8 - 3][Math.floor(v / 3)] = D;
        }
      }, vt = function(O, S) {
        for (var v = w << 3 | S, D = a.getBCHTypeInfo(v), R = 0; R < 15; R += 1) {
          var A = !O && (D >> R & 1) == 1;
          R < 6 ? f[R][8] = A : R < 8 ? f[R + 1][8] = A : f[d - 15 + R][8] = A;
        }
        for (var R = 0; R < 15; R += 1) {
          var A = !O && (D >> R & 1) == 1;
          R < 8 ? f[8][d - R - 1] = A : R < 9 ? f[8][15 - R - 1 + 1] = A : f[8][15 - R - 1] = A;
        }
        f[d - 8][8] = !O;
      }, Nt = function(O, S) {
        for (var v = -1, D = d - 1, R = 7, A = 0, V = a.getMaskFunction(S), j = d - 1; j > 0; j -= 2)
          for (j == 6 && (j -= 1); ; ) {
            for (var Y = 0; Y < 2; Y += 1)
              if (f[D][j - Y] == null) {
                var tt = !1;
                A < O.length && (tt = (O[A] >>> R & 1) == 1);
                var U = V(D, j - Y);
                U && (tt = !tt), f[D][j - Y] = tt, R -= 1, R == -1 && (A += 1, R = 7);
              }
            if (D += v, D < 0 || d <= D) {
              D -= v, v = -v;
              break;
            }
          }
      }, Gt = function(O, S) {
        for (var v = 0, D = 0, R = 0, A = new Array(S.length), V = new Array(S.length), j = 0; j < S.length; j += 1) {
          var Y = S[j].dataCount, tt = S[j].totalCount - Y;
          D = Math.max(D, Y), R = Math.max(R, tt), A[j] = new Array(Y);
          for (var U = 0; U < A[j].length; U += 1)
            A[j][U] = 255 & O.getBuffer()[U + v];
          v += Y;
          var dt = a.getErrorCorrectPolynomial(tt), ft = l(A[j], dt.getLength() - 1), pr = ft.mod(dt);
          V[j] = new Array(dt.getLength() - 1);
          for (var U = 0; U < V[j].length; U += 1) {
            var hr = U + pr.getLength() - V[j].length;
            V[j][U] = hr >= 0 ? pr.getAt(hr) : 0;
          }
        }
        for (var gr = 0, U = 0; U < S.length; U += 1)
          gr += S[U].totalCount;
        for (var fn = new Array(gr), Se = 0, U = 0; U < D; U += 1)
          for (var j = 0; j < S.length; j += 1)
            U < A[j].length && (fn[Se] = A[j][U], Se += 1);
        for (var U = 0; U < R; U += 1)
          for (var j = 0; j < S.length; j += 1)
            U < V[j].length && (fn[Se] = V[j][U], Se += 1);
        return fn;
      }, ji = function(O, S, v) {
        for (var D = p.getRSBlocks(O, S), R = c(), A = 0; A < v.length; A += 1) {
          var V = v[A];
          R.put(V.getMode(), 4), R.put(V.getLength(), a.getLengthInBits(V.getMode(), O)), V.write(R);
        }
        for (var j = 0, A = 0; A < D.length; A += 1)
          j += D[A].dataCount;
        if (R.getLengthInBits() > j * 8)
          throw "code length overflow. (" + R.getLengthInBits() + ">" + j * 8 + ")";
        for (R.getLengthInBits() + 4 <= j * 8 && R.put(0, 4); R.getLengthInBits() % 8 != 0; )
          R.putBit(!1);
        for (; !(R.getLengthInBits() >= j * 8 || (R.put(_, 8), R.getLengthInBits() >= j * 8)); )
          R.put(m, 8);
        return Gt(R, D);
      };
      g.addData = function(O, S) {
        S = S || "Byte";
        var v = null;
        switch (S) {
          case "Numeric":
            v = b(O);
            break;
          case "Alphanumeric":
            v = k(O);
            break;
          case "Byte":
            v = C(O);
            break;
          case "Kanji":
            v = P(O);
            break;
          default:
            throw "mode:" + S;
        }
        y.push(v), N = null;
      }, g.isDark = function(O, S) {
        if (O < 0 || d <= O || S < 0 || d <= S)
          throw O + "," + S;
        return f[O][S];
      }, g.getModuleCount = function() {
        return d;
      }, g.make = function() {
        if (h < 1) {
          for (var O = 1; O < 40; O++) {
            for (var S = p.getRSBlocks(O, w), v = c(), D = 0; D < y.length; D++) {
              var R = y[D];
              v.put(R.getMode(), 4), v.put(R.getLength(), a.getLengthInBits(R.getMode(), O)), R.write(v);
            }
            for (var A = 0, D = 0; D < S.length; D++)
              A += S[D].dataCount;
            if (v.getLengthInBits() <= A * 8)
              break;
          }
          h = O;
        }
        B(!1, I());
      }, g.createTableTag = function(O, S) {
        O = O || 2, S = typeof S > "u" ? O * 4 : S;
        var v = "";
        v += '<table style="', v += " border-width: 0px; border-style: none;", v += " border-collapse: collapse;", v += " padding: 0px; margin: " + S + "px;", v += '">', v += "<tbody>";
        for (var D = 0; D < g.getModuleCount(); D += 1) {
          v += "<tr>";
          for (var R = 0; R < g.getModuleCount(); R += 1)
            v += '<td style="', v += " border-width: 0px; border-style: none;", v += " border-collapse: collapse;", v += " padding: 0px; margin: 0px;", v += " width: " + O + "px;", v += " height: " + O + "px;", v += " background-color: ", v += g.isDark(D, R) ? "#000000" : "#ffffff", v += ";", v += '"/>';
          v += "</tr>";
        }
        return v += "</tbody>", v += "</table>", v;
      }, g.createSvgTag = function(O, S, v, D) {
        var R = {};
        typeof arguments[0] == "object" && (R = arguments[0], O = R.cellSize, S = R.margin, v = R.alt, D = R.title), O = O || 2, S = typeof S > "u" ? O * 4 : S, v = typeof v == "string" ? { text: v } : v || {}, v.text = v.text || null, v.id = v.text ? v.id || "qrcode-description" : null, D = typeof D == "string" ? { text: D } : D || {}, D.text = D.text || null, D.id = D.text ? D.id || "qrcode-title" : null;
        var A = g.getModuleCount() * O + S * 2, V, j, Y, tt, U = "", dt;
        for (dt = "l" + O + ",0 0," + O + " -" + O + ",0 0,-" + O + "z ", U += '<svg version="1.1" xmlns="http://www.w3.org/2000/svg"', U += R.scalable ? "" : ' width="' + A + 'px" height="' + A + 'px"', U += ' viewBox="0 0 ' + A + " " + A + '" ', U += ' preserveAspectRatio="xMinYMin meet"', U += D.text || v.text ? ' role="img" aria-labelledby="' + Qt([D.id, v.id].join(" ").trim()) + '"' : "", U += ">", U += D.text ? '<title id="' + Qt(D.id) + '">' + Qt(D.text) + "</title>" : "", U += v.text ? '<description id="' + Qt(v.id) + '">' + Qt(v.text) + "</description>" : "", U += '<rect width="100%" height="100%" fill="white" cx="0" cy="0"/>', U += '<path d="', Y = 0; Y < g.getModuleCount(); Y += 1)
          for (tt = Y * O + S, V = 0; V < g.getModuleCount(); V += 1)
            g.isDark(Y, V) && (j = V * O + S, U += "M" + j + "," + tt + dt);
        return U += '" stroke="transparent" fill="black"/>', U += "</svg>", U;
      }, g.createDataURL = function(O, S) {
        O = O || 2, S = typeof S > "u" ? O * 4 : S;
        var v = g.getModuleCount() * O + S * 2, D = S, R = v - S;
        return L(v, v, function(A, V) {
          if (D <= A && A < R && D <= V && V < R) {
            var j = Math.floor((A - D) / O), Y = Math.floor((V - D) / O);
            return g.isDark(Y, j) ? 0 : 1;
          } else
            return 1;
        });
      }, g.createImgTag = function(O, S, v) {
        O = O || 2, S = typeof S > "u" ? O * 4 : S;
        var D = g.getModuleCount() * O + S * 2, R = "";
        return R += "<img", R += ' src="', R += g.createDataURL(O, S), R += '"', R += ' width="', R += D, R += '"', R += ' height="', R += D, R += '"', v && (R += ' alt="', R += Qt(v), R += '"'), R += "/>", R;
      };
      var Qt = function(O) {
        for (var S = "", v = 0; v < O.length; v += 1) {
          var D = O.charAt(v);
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
      }, Vi = function(O) {
        var S = 1;
        O = typeof O > "u" ? S * 2 : O;
        var v = g.getModuleCount() * S + O * 2, D = O, R = v - O, A, V, j, Y, tt, U = {
          "██": "█",
          "█ ": "▀",
          " █": "▄",
          "  ": " "
        }, dt = {
          "██": "▀",
          "█ ": "▀",
          " █": " ",
          "  ": " "
        }, ft = "";
        for (A = 0; A < v; A += 2) {
          for (j = Math.floor((A - D) / S), Y = Math.floor((A + 1 - D) / S), V = 0; V < v; V += 1)
            tt = "█", D <= V && V < R && D <= A && A < R && g.isDark(j, Math.floor((V - D) / S)) && (tt = " "), D <= V && V < R && D <= A + 1 && A + 1 < R && g.isDark(Y, Math.floor((V - D) / S)) ? tt += " " : tt += "█", ft += O < 1 && A + 1 >= R ? dt[tt] : U[tt];
          ft += `
`;
        }
        return v % 2 && O > 0 ? ft.substring(0, ft.length - v - 1) + Array(v + 1).join("▀") : ft.substring(0, ft.length - 1);
      };
      return g.createASCII = function(O, S) {
        if (O = O || 1, O < 2)
          return Vi(S);
        O -= 1, S = typeof S > "u" ? O * 2 : S;
        var v = g.getModuleCount() * O + S * 2, D = S, R = v - S, A, V, j, Y, tt = Array(O + 1).join("██"), U = Array(O + 1).join("  "), dt = "", ft = "";
        for (A = 0; A < v; A += 1) {
          for (j = Math.floor((A - D) / O), ft = "", V = 0; V < v; V += 1)
            Y = 1, D <= V && V < R && D <= A && A < R && g.isDark(j, Math.floor((V - D) / O)) && (Y = 0), ft += Y ? tt : U;
          for (j = 0; j < O; j += 1)
            dt += ft + `
`;
        }
        return dt.substring(0, dt.length - 1);
      }, g.renderTo2dContext = function(O, S) {
        S = S || 2;
        for (var v = g.getModuleCount(), D = 0; D < v; D++)
          for (var R = 0; R < v; R++)
            O.fillStyle = g.isDark(D, R) ? "black" : "white", O.fillRect(D * S, R * S, S, S);
      }, g;
    };
    r.stringToBytesFuncs = {
      default: function(x) {
        for (var M = [], _ = 0; _ < x.length; _ += 1) {
          var m = x.charCodeAt(_);
          M.push(m & 255);
        }
        return M;
      }
    }, r.stringToBytes = r.stringToBytesFuncs.default, r.createStringToBytes = function(x, M) {
      var _ = function() {
        for (var h = $(x), w = function() {
          var Q = h.read();
          if (Q == -1)
            throw "eof";
          return Q;
        }, f = 0, d = {}; ; ) {
          var N = h.read();
          if (N == -1)
            break;
          var y = w(), g = w(), B = w(), T = String.fromCharCode(N << 8 | y), I = g << 8 | B;
          d[T] = I, f += 1;
        }
        if (f != M)
          throw f + " != " + M;
        return d;
      }(), m = "?".charCodeAt(0);
      return function(h) {
        for (var w = [], f = 0; f < h.length; f += 1) {
          var d = h.charCodeAt(f);
          if (d < 128)
            w.push(d);
          else {
            var N = _[h.charAt(f)];
            typeof N == "number" ? (N & 255) == N ? w.push(N) : (w.push(N >>> 8), w.push(N & 255)) : w.push(m);
          }
        }
        return w;
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
      var x = [
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
      ], M = 1335, _ = 7973, m = 21522, h = {}, w = function(f) {
        for (var d = 0; f != 0; )
          d += 1, f >>>= 1;
        return d;
      };
      return h.getBCHTypeInfo = function(f) {
        for (var d = f << 10; w(d) - w(M) >= 0; )
          d ^= M << w(d) - w(M);
        return (f << 10 | d) ^ m;
      }, h.getBCHTypeNumber = function(f) {
        for (var d = f << 12; w(d) - w(_) >= 0; )
          d ^= _ << w(d) - w(_);
        return f << 12 | d;
      }, h.getPatternPosition = function(f) {
        return x[f - 1];
      }, h.getMaskFunction = function(f) {
        switch (f) {
          case s.PATTERN000:
            return function(d, N) {
              return (d + N) % 2 == 0;
            };
          case s.PATTERN001:
            return function(d, N) {
              return d % 2 == 0;
            };
          case s.PATTERN010:
            return function(d, N) {
              return N % 3 == 0;
            };
          case s.PATTERN011:
            return function(d, N) {
              return (d + N) % 3 == 0;
            };
          case s.PATTERN100:
            return function(d, N) {
              return (Math.floor(d / 2) + Math.floor(N / 3)) % 2 == 0;
            };
          case s.PATTERN101:
            return function(d, N) {
              return d * N % 2 + d * N % 3 == 0;
            };
          case s.PATTERN110:
            return function(d, N) {
              return (d * N % 2 + d * N % 3) % 2 == 0;
            };
          case s.PATTERN111:
            return function(d, N) {
              return (d * N % 3 + (d + N) % 2) % 2 == 0;
            };
          default:
            throw "bad maskPattern:" + f;
        }
      }, h.getErrorCorrectPolynomial = function(f) {
        for (var d = l([1], 0), N = 0; N < f; N += 1)
          d = d.multiply(l([1, u.gexp(N)], 0));
        return d;
      }, h.getLengthInBits = function(f, d) {
        if (1 <= d && d < 10)
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
        else if (d < 27)
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
        else if (d < 41)
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
          throw "type:" + d;
      }, h.getLostPoint = function(f) {
        for (var d = f.getModuleCount(), N = 0, y = 0; y < d; y += 1)
          for (var g = 0; g < d; g += 1) {
            for (var B = 0, T = f.isDark(y, g), I = -1; I <= 1; I += 1)
              if (!(y + I < 0 || d <= y + I))
                for (var Q = -1; Q <= 1; Q += 1)
                  g + Q < 0 || d <= g + Q || I == 0 && Q == 0 || T == f.isDark(y + I, g + Q) && (B += 1);
            B > 5 && (N += 3 + B - 5);
          }
        for (var y = 0; y < d - 1; y += 1)
          for (var g = 0; g < d - 1; g += 1) {
            var nt = 0;
            f.isDark(y, g) && (nt += 1), f.isDark(y + 1, g) && (nt += 1), f.isDark(y, g + 1) && (nt += 1), f.isDark(y + 1, g + 1) && (nt += 1), (nt == 0 || nt == 4) && (N += 3);
          }
        for (var y = 0; y < d; y += 1)
          for (var g = 0; g < d - 6; g += 1)
            f.isDark(y, g) && !f.isDark(y, g + 1) && f.isDark(y, g + 2) && f.isDark(y, g + 3) && f.isDark(y, g + 4) && !f.isDark(y, g + 5) && f.isDark(y, g + 6) && (N += 40);
        for (var g = 0; g < d; g += 1)
          for (var y = 0; y < d - 6; y += 1)
            f.isDark(y, g) && !f.isDark(y + 1, g) && f.isDark(y + 2, g) && f.isDark(y + 3, g) && f.isDark(y + 4, g) && !f.isDark(y + 5, g) && f.isDark(y + 6, g) && (N += 40);
        for (var ut = 0, g = 0; g < d; g += 1)
          for (var y = 0; y < d; y += 1)
            f.isDark(y, g) && (ut += 1);
        var vt = Math.abs(100 * ut / d / d - 50) / 5;
        return N += vt * 10, N;
      }, h;
    }(), u = function() {
      for (var x = new Array(256), M = new Array(256), _ = 0; _ < 8; _ += 1)
        x[_] = 1 << _;
      for (var _ = 8; _ < 256; _ += 1)
        x[_] = x[_ - 4] ^ x[_ - 5] ^ x[_ - 6] ^ x[_ - 8];
      for (var _ = 0; _ < 255; _ += 1)
        M[x[_]] = _;
      var m = {};
      return m.glog = function(h) {
        if (h < 1)
          throw "glog(" + h + ")";
        return M[h];
      }, m.gexp = function(h) {
        for (; h < 0; )
          h += 255;
        for (; h >= 256; )
          h -= 255;
        return x[h];
      }, m;
    }();
    function l(x, M) {
      if (typeof x.length > "u")
        throw x.length + "/" + M;
      var _ = function() {
        for (var h = 0; h < x.length && x[h] == 0; )
          h += 1;
        for (var w = new Array(x.length - h + M), f = 0; f < x.length - h; f += 1)
          w[f] = x[f + h];
        return w;
      }(), m = {};
      return m.getAt = function(h) {
        return _[h];
      }, m.getLength = function() {
        return _.length;
      }, m.multiply = function(h) {
        for (var w = new Array(m.getLength() + h.getLength() - 1), f = 0; f < m.getLength(); f += 1)
          for (var d = 0; d < h.getLength(); d += 1)
            w[f + d] ^= u.gexp(u.glog(m.getAt(f)) + u.glog(h.getAt(d)));
        return l(w, 0);
      }, m.mod = function(h) {
        if (m.getLength() - h.getLength() < 0)
          return m;
        for (var w = u.glog(m.getAt(0)) - u.glog(h.getAt(0)), f = new Array(m.getLength()), d = 0; d < m.getLength(); d += 1)
          f[d] = m.getAt(d);
        for (var d = 0; d < h.getLength(); d += 1)
          f[d] ^= u.gexp(u.glog(h.getAt(d)) + w);
        return l(f, 0).mod(h);
      }, m;
    }
    var p = function() {
      var x = [
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
      ], M = function(h, w) {
        var f = {};
        return f.totalCount = h, f.dataCount = w, f;
      }, _ = {}, m = function(h, w) {
        switch (w) {
          case i.L:
            return x[(h - 1) * 4 + 0];
          case i.M:
            return x[(h - 1) * 4 + 1];
          case i.Q:
            return x[(h - 1) * 4 + 2];
          case i.H:
            return x[(h - 1) * 4 + 3];
          default:
            return;
        }
      };
      return _.getRSBlocks = function(h, w) {
        var f = m(h, w);
        if (typeof f > "u")
          throw "bad rs block @ typeNumber:" + h + "/errorCorrectionLevel:" + w;
        for (var d = f.length / 3, N = [], y = 0; y < d; y += 1)
          for (var g = f[y * 3 + 0], B = f[y * 3 + 1], T = f[y * 3 + 2], I = 0; I < g; I += 1)
            N.push(M(B, T));
        return N;
      }, _;
    }(), c = function() {
      var x = [], M = 0, _ = {};
      return _.getBuffer = function() {
        return x;
      }, _.getAt = function(m) {
        var h = Math.floor(m / 8);
        return (x[h] >>> 7 - m % 8 & 1) == 1;
      }, _.put = function(m, h) {
        for (var w = 0; w < h; w += 1)
          _.putBit((m >>> h - w - 1 & 1) == 1);
      }, _.getLengthInBits = function() {
        return M;
      }, _.putBit = function(m) {
        var h = Math.floor(M / 8);
        x.length <= h && x.push(0), m && (x[h] |= 128 >>> M % 8), M += 1;
      }, _;
    }, b = function(x) {
      var M = o.MODE_NUMBER, _ = x, m = {};
      m.getMode = function() {
        return M;
      }, m.getLength = function(f) {
        return _.length;
      }, m.write = function(f) {
        for (var d = _, N = 0; N + 2 < d.length; )
          f.put(h(d.substring(N, N + 3)), 10), N += 3;
        N < d.length && (d.length - N == 1 ? f.put(h(d.substring(N, N + 1)), 4) : d.length - N == 2 && f.put(h(d.substring(N, N + 2)), 7));
      };
      var h = function(f) {
        for (var d = 0, N = 0; N < f.length; N += 1)
          d = d * 10 + w(f.charAt(N));
        return d;
      }, w = function(f) {
        if ("0" <= f && f <= "9")
          return f.charCodeAt(0) - "0".charCodeAt(0);
        throw "illegal char :" + f;
      };
      return m;
    }, k = function(x) {
      var M = o.MODE_ALPHA_NUM, _ = x, m = {};
      m.getMode = function() {
        return M;
      }, m.getLength = function(w) {
        return _.length;
      }, m.write = function(w) {
        for (var f = _, d = 0; d + 1 < f.length; )
          w.put(
            h(f.charAt(d)) * 45 + h(f.charAt(d + 1)),
            11
          ), d += 2;
        d < f.length && w.put(h(f.charAt(d)), 6);
      };
      var h = function(w) {
        if ("0" <= w && w <= "9")
          return w.charCodeAt(0) - "0".charCodeAt(0);
        if ("A" <= w && w <= "Z")
          return w.charCodeAt(0) - "A".charCodeAt(0) + 10;
        switch (w) {
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
            throw "illegal char :" + w;
        }
      };
      return m;
    }, C = function(x) {
      var M = o.MODE_8BIT_BYTE, _ = r.stringToBytes(x), m = {};
      return m.getMode = function() {
        return M;
      }, m.getLength = function(h) {
        return _.length;
      }, m.write = function(h) {
        for (var w = 0; w < _.length; w += 1)
          h.put(_[w], 8);
      }, m;
    }, P = function(x) {
      var M = o.MODE_KANJI, _ = r.stringToBytesFuncs.SJIS;
      if (!_)
        throw "sjis not supported.";
      (function(w, f) {
        var d = _(w);
        if (d.length != 2 || (d[0] << 8 | d[1]) != f)
          throw "sjis not supported.";
      })("友", 38726);
      var m = _(x), h = {};
      return h.getMode = function() {
        return M;
      }, h.getLength = function(w) {
        return ~~(m.length / 2);
      }, h.write = function(w) {
        for (var f = m, d = 0; d + 1 < f.length; ) {
          var N = (255 & f[d]) << 8 | 255 & f[d + 1];
          if (33088 <= N && N <= 40956)
            N -= 33088;
          else if (57408 <= N && N <= 60351)
            N -= 49472;
          else
            throw "illegal char at " + (d + 1) + "/" + N;
          N = (N >>> 8 & 255) * 192 + (N & 255), w.put(N, 13), d += 2;
        }
        if (d < f.length)
          throw "illegal char at " + (d + 1);
      }, h;
    }, z = function() {
      var x = [], M = {};
      return M.writeByte = function(_) {
        x.push(_ & 255);
      }, M.writeShort = function(_) {
        M.writeByte(_), M.writeByte(_ >>> 8);
      }, M.writeBytes = function(_, m, h) {
        m = m || 0, h = h || _.length;
        for (var w = 0; w < h; w += 1)
          M.writeByte(_[w + m]);
      }, M.writeString = function(_) {
        for (var m = 0; m < _.length; m += 1)
          M.writeByte(_.charCodeAt(m));
      }, M.toByteArray = function() {
        return x;
      }, M.toString = function() {
        var _ = "";
        _ += "[";
        for (var m = 0; m < x.length; m += 1)
          m > 0 && (_ += ","), _ += x[m];
        return _ += "]", _;
      }, M;
    }, q = function() {
      var x = 0, M = 0, _ = 0, m = "", h = {}, w = function(d) {
        m += String.fromCharCode(f(d & 63));
      }, f = function(d) {
        if (!(d < 0)) {
          if (d < 26)
            return 65 + d;
          if (d < 52)
            return 97 + (d - 26);
          if (d < 62)
            return 48 + (d - 52);
          if (d == 62)
            return 43;
          if (d == 63)
            return 47;
        }
        throw "n:" + d;
      };
      return h.writeByte = function(d) {
        for (x = x << 8 | d & 255, M += 8, _ += 1; M >= 6; )
          w(x >>> M - 6), M -= 6;
      }, h.flush = function() {
        if (M > 0 && (w(x << 6 - M), x = 0, M = 0), _ % 3 != 0)
          for (var d = 3 - _ % 3, N = 0; N < d; N += 1)
            m += "=";
      }, h.toString = function() {
        return m;
      }, h;
    }, $ = function(x) {
      var M = x, _ = 0, m = 0, h = 0, w = {};
      w.read = function() {
        for (; h < 8; ) {
          if (_ >= M.length) {
            if (h == 0)
              return -1;
            throw "unexpected end of file./" + h;
          }
          var d = M.charAt(_);
          if (_ += 1, d == "=")
            return h = 0, -1;
          d.match(/^\s$/) || (m = m << 6 | f(d.charCodeAt(0)), h += 6);
        }
        var N = m >>> h - 8 & 255;
        return h -= 8, N;
      };
      var f = function(d) {
        if (65 <= d && d <= 90)
          return d - 65;
        if (97 <= d && d <= 122)
          return d - 97 + 26;
        if (48 <= d && d <= 57)
          return d - 48 + 52;
        if (d == 43)
          return 62;
        if (d == 47)
          return 63;
        throw "c:" + d;
      };
      return w;
    }, F = function(x, M) {
      var _ = x, m = M, h = new Array(x * M), w = {};
      w.setPixel = function(y, g, B) {
        h[g * _ + y] = B;
      }, w.write = function(y) {
        y.writeString("GIF87a"), y.writeShort(_), y.writeShort(m), y.writeByte(128), y.writeByte(0), y.writeByte(0), y.writeByte(0), y.writeByte(0), y.writeByte(0), y.writeByte(255), y.writeByte(255), y.writeByte(255), y.writeString(","), y.writeShort(0), y.writeShort(0), y.writeShort(_), y.writeShort(m), y.writeByte(0);
        var g = 2, B = d(g);
        y.writeByte(g);
        for (var T = 0; B.length - T > 255; )
          y.writeByte(255), y.writeBytes(B, T, 255), T += 255;
        y.writeByte(B.length - T), y.writeBytes(B, T, B.length - T), y.writeByte(0), y.writeString(";");
      };
      var f = function(y) {
        var g = y, B = 0, T = 0, I = {};
        return I.write = function(Q, nt) {
          if (Q >>> nt)
            throw "length over";
          for (; B + nt >= 8; )
            g.writeByte(255 & (Q << B | T)), nt -= 8 - B, Q >>>= 8 - B, T = 0, B = 0;
          T = Q << B | T, B = B + nt;
        }, I.flush = function() {
          B > 0 && g.writeByte(T);
        }, I;
      }, d = function(y) {
        for (var g = 1 << y, B = (1 << y) + 1, T = y + 1, I = N(), Q = 0; Q < g; Q += 1)
          I.add(String.fromCharCode(Q));
        I.add(String.fromCharCode(g)), I.add(String.fromCharCode(B));
        var nt = z(), ut = f(nt);
        ut.write(g, T);
        var vt = 0, Nt = String.fromCharCode(h[vt]);
        for (vt += 1; vt < h.length; ) {
          var Gt = String.fromCharCode(h[vt]);
          vt += 1, I.contains(Nt + Gt) ? Nt = Nt + Gt : (ut.write(I.indexOf(Nt), T), I.size() < 4095 && (I.size() == 1 << T && (T += 1), I.add(Nt + Gt)), Nt = Gt);
        }
        return ut.write(I.indexOf(Nt), T), ut.write(B, T), ut.flush(), nt.toByteArray();
      }, N = function() {
        var y = {}, g = 0, B = {};
        return B.add = function(T) {
          if (B.contains(T))
            throw "dup key:" + T;
          y[T] = g, g += 1;
        }, B.size = function() {
          return g;
        }, B.indexOf = function(T) {
          return y[T];
        }, B.contains = function(T) {
          return typeof y[T] < "u";
        }, B;
      };
      return w;
    }, L = function(x, M, _) {
      for (var m = F(x, M), h = 0; h < M; h += 1)
        for (var w = 0; w < x; w += 1)
          m.setPixel(w, h, _(w, h));
      var f = z();
      m.write(f);
      for (var d = q(), N = f.toByteArray(), y = 0; y < N.length; y += 1)
        d.writeByte(N[y]);
      return d.flush(), "data:image/gif;base64," + d;
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
    let i = ([e, n] = Tu(() => o.getImageUrl(r.fileExt)), e = await e, n(), e);
    function s() {
      o.download(r.downloadOptions);
    }
    return (a, u) => (se(), bn("div", null, [
      Ve(i) ? (se(), bn("div", {
        key: 0,
        class: re(a.myclass)
      }, [
        Qe("img", {
          src: Ve(i),
          class: re(a.imgclass),
          crossorigin: "anonymous"
        }, null, 10, ml)
      ], 2)) : so("", !0),
      Ve(i) && a.download ? (se(), bn("div", yl, [
        Qe("button", {
          onClick: s,
          class: re(a.downloadButton)
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
    return (n, r) => (se(), Ci(cu, null, {
      default: ou(() => [
        Lt(vl, {
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
    const n = X(e.dark ?? !1), r = X(e.mobileWidth ?? e.width), o = X(e.mobileHeight ?? e.height), i = X(null);
    return ho(() => {
      vo(() => {
        if (!e.disabled && i.value !== null) {
          let s = 1.5, a = setInterval(function() {
            s -= 0.1, i.value !== null && (i.value.style.animationDuration = s + "s", s <= 0.8 && clearInterval(a));
          }, 1e4);
        }
      });
    }), (s, a) => (wt(), Tt("div", {
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
}, Sl = ["href"], xl = ["src"], Nl = /* @__PURE__ */ _t("br", null, null, -1), Dl = /* @__PURE__ */ _t("br", null, null, -1), kl = {
  key: 2,
  style: { "text-align": "center" }
}, Cl = ["innerHTML"], Rl = {
  key: 0,
  style: { "text-align": "center" }
}, Ml = /* @__PURE__ */ _t("br", null, null, -1), Tl = ["href"], Pl = ["src"], Al = /* @__PURE__ */ _t("br", null, null, -1), Bl = /* @__PURE__ */ yo({
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
    }
  },
  setup(t) {
    const e = t, { t: n } = wo(), { IsLoggedIn: r, loginQRCode: o, checkQRLogin: i, success: s, QRCode: a, is_error: u, Message: l } = Ja(), p = X(!1);
    fe("locale", "en"), X(""), rs(() => {
      r ? i() : o(), vo(() => {
        s.value === !0 ? p.value = !0 : p.value = !1;
      });
    });
    function c() {
      a.value == null || a.value == null || a.value == "" || window.open(a.value, "new_window");
    }
    return (b, k) => (wt(), Tt("div", null, [
      _t("div", null, [
        _t("div", bl, [
          rt(s) && !e.isMobileScreen ? (wt(), Tt("div", {
            key: 0,
            onClick: [
              c,
              Gi(c, ["prevent"])
            ],
            target: "_blank",
            style: { "text-align": "center", cursor: "pointer" }
          }, [
            e.isDark ? (wt(), pn(rt(po), {
              key: rt(a),
              width: 300,
              height: 300,
              value: rt(a),
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
            }, null, 8, ["value", "image", "dots-options", "background-options", "corners-square-options", "corners-dot-options"])) : Vt("", !0),
            e.isDark ? Vt("", !0) : (wt(), pn(rt(po), {
              key: rt(a),
              width: 300,
              height: 300,
              value: rt(a),
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
          ], 8, El)) : rt(s) && e.isMobileScreen ? (wt(), Tt("div", Ol, [
            p.value ? (wt(), Tt("button", {
              key: 0,
              style: mr([{ width: "300px", height: "300px" }, [e.isDark ? { backgroundColor: e.primaryDark, color: e.accentColor } : { backgroundColor: e.primaryLight, color: e.accentColor }]]),
              href: rt(a)
            }, [
              _t("img", {
                width: "150",
                src: t.logoDark.length == 0 ? "/assets/nopwd_black.png" : ""
              }, null, 8, xl),
              Nl,
              Dl,
              _t("span", null, yr(rt(n)("auth.login")), 1)
            ], 12, Sl)) : Vt("", !0)
          ])) : rt(s) ? Vt("", !0) : (wt(), Tt("div", kl, [
            rt(u) ? Vt("", !0) : (wt(), pn(Fi, {
              key: 0,
              width: "300px",
              disabled: !1,
              dark: e.isDark,
              height: "300px"
            }, null, 8, ["dark"]))
          ])),
          _t("div", {
            innerHTML: rt(l),
            style: { "text-align": "center" }
          }, null, 8, Cl)
        ])
      ]),
      rt(s) && !e.isMobileScreen && e.showButton ? (wt(), Tt("div", Rl, [
        Ml,
        p.value ? (wt(), Tt("button", {
          key: 0,
          style: mr([{ width: "300px", height: "120px" }, [e.isDark ? { backgroundColor: e.primaryDark, color: e.accentColor } : { backgroundColor: e.primaryLight, color: e.accentColor }]]),
          href: rt(a)
        }, [
          _t("img", {
            width: "80",
            src: t.logoDark.length == 0 ? "/assets/nopwd_black.png" : ""
          }, null, 8, Pl),
          Al,
          _t("span", null, yr(rt(n)("auth.appinstalled")), 1)
        ], 12, Tl)) : Vt("", !0)
      ])) : Vt("", !0)
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
