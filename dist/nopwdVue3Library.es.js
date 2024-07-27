import { ref as oe, getCurrentInstance as ei, onMounted as Ao, nextTick as Eo, unref as re, getCurrentScope as ti, onScopeDispose as ni, watch as Oo, shallowRef as ri, defineComponent as So, useCssVars as oi, watchEffect as Co, openBlock as we, createElementBlock as _e, normalizeClass as si, computed as ii, createElementVNode as ot, withModifiers as fn, createBlock as pn, createCommentVNode as qe, normalizeStyle as ai, toDisplayString as ci } from "vue";
const ui = {
  "auth.codedark": "Code not reading? Flip to light-mode.",
  "auth.codelight": "App installed locally? Click QRCode",
  "auth.codeerror": "Error requesting code, <br/>please refresh page.",
  "auth.loading": "Loading access code, please wait...",
  "auth.prepare": "Preparing interface...",
  "auth.login": "Click to Login"
}, li = {
  en: ui
};
function Do(e = {}) {
  const t = oe({ ...li, ...e }), n = oe("en");
  return { t: (o) => {
    const s = t.value[n.value][o];
    return s === void 0 ? (console.warn(`Translation not found for key: ${o}`), o) : s;
  } };
}
var Er;
const ko = typeof window < "u", di = (e) => typeof e == "function", fi = (e) => typeof e == "string", pi = () => {
};
ko && ((Er = window == null ? void 0 : window.navigator) != null && Er.userAgent) && /iP(ad|hone|od)/.test(window.navigator.userAgent);
function Ro(e) {
  return typeof e == "function" ? e() : re(e);
}
function hi(e, t) {
  function n(...r) {
    return new Promise((o, s) => {
      Promise.resolve(e(() => t.apply(this, r), { fn: t, thisArg: this, args: r })).then(o).catch(s);
    });
  }
  return n;
}
const _o = (e) => e();
function gi(e = _o) {
  const t = oe(!0);
  function n() {
    t.value = !1;
  }
  function r() {
    t.value = !0;
  }
  return { isActive: t, pause: n, resume: r, eventFilter: (...s) => {
    t.value && e(...s);
  } };
}
function wi(e) {
  return e;
}
function mi(e) {
  return ti() ? (ni(e), !0) : !1;
}
function yi(e, t = !0) {
  ei() ? Ao(e) : t ? e() : Eo(e);
}
var Or = Object.getOwnPropertySymbols, vi = Object.prototype.hasOwnProperty, bi = Object.prototype.propertyIsEnumerable, Ai = (e, t) => {
  var n = {};
  for (var r in e)
    vi.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && Or)
    for (var r of Or(e))
      t.indexOf(r) < 0 && bi.call(e, r) && (n[r] = e[r]);
  return n;
};
function Ei(e, t, n = {}) {
  const r = n, {
    eventFilter: o = _o
  } = r, s = Ai(r, [
    "eventFilter"
  ]);
  return Oo(e, hi(o, t), s);
}
var Oi = Object.defineProperty, Si = Object.defineProperties, Ci = Object.getOwnPropertyDescriptors, qt = Object.getOwnPropertySymbols, No = Object.prototype.hasOwnProperty, Bo = Object.prototype.propertyIsEnumerable, Sr = (e, t, n) => t in e ? Oi(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, Di = (e, t) => {
  for (var n in t || (t = {}))
    No.call(t, n) && Sr(e, n, t[n]);
  if (qt)
    for (var n of qt(t))
      Bo.call(t, n) && Sr(e, n, t[n]);
  return e;
}, ki = (e, t) => Si(e, Ci(t)), Ri = (e, t) => {
  var n = {};
  for (var r in e)
    No.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && qt)
    for (var r of qt(e))
      t.indexOf(r) < 0 && Bo.call(e, r) && (n[r] = e[r]);
  return n;
};
function _i(e, t, n = {}) {
  const r = n, {
    eventFilter: o
  } = r, s = Ri(r, [
    "eventFilter"
  ]), { eventFilter: i, pause: a, resume: u, isActive: f } = gi(o);
  return { stop: Ei(e, t, ki(Di({}, s), {
    eventFilter: i
  })), pause: a, resume: u, isActive: f };
}
function Ni(e) {
  var t;
  const n = Ro(e);
  return (t = n == null ? void 0 : n.$el) != null ? t : n;
}
const kn = ko ? window : void 0;
function Bi(...e) {
  let t, n, r, o;
  if (fi(e[0]) || Array.isArray(e[0]) ? ([n, r, o] = e, t = kn) : [t, n, r, o] = e, !t)
    return pi;
  Array.isArray(n) || (n = [n]), Array.isArray(r) || (r = [r]);
  const s = [], i = () => {
    s.forEach((l) => l()), s.length = 0;
  }, a = (l, c, b) => (l.addEventListener(c, b, o), () => l.removeEventListener(c, b, o)), u = Oo(() => Ni(t), (l) => {
    i(), l && s.push(...n.flatMap((c) => r.map((b) => a(l, c, b))));
  }, { immediate: !0, flush: "post" }), f = () => {
    u(), i();
  };
  return mi(f), f;
}
const Rn = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, _n = "__vueuse_ssr_handlers__";
Rn[_n] = Rn[_n] || {};
const xi = Rn[_n];
function Ti(e, t) {
  return xi[e] || t;
}
function Pi(e) {
  return e == null ? "any" : e instanceof Set ? "set" : e instanceof Map ? "map" : e instanceof Date ? "date" : typeof e == "boolean" ? "boolean" : typeof e == "string" ? "string" : typeof e == "object" ? "object" : Number.isNaN(e) ? "any" : "number";
}
var Mi = Object.defineProperty, Cr = Object.getOwnPropertySymbols, Li = Object.prototype.hasOwnProperty, Ii = Object.prototype.propertyIsEnumerable, Dr = (e, t, n) => t in e ? Mi(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, kr = (e, t) => {
  for (var n in t || (t = {}))
    Li.call(t, n) && Dr(e, n, t[n]);
  if (Cr)
    for (var n of Cr(t))
      Ii.call(t, n) && Dr(e, n, t[n]);
  return e;
};
const Ji = {
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
};
function se(e, t, n, r = {}) {
  var o;
  const {
    flush: s = "pre",
    deep: i = !0,
    listenToStorageChanges: a = !0,
    writeDefaults: u = !0,
    mergeDefaults: f = !1,
    shallow: l,
    window: c = kn,
    eventFilter: b,
    onError: N = (p) => {
      console.error(p);
    }
  } = r, R = (l ? ri : oe)(t);
  if (!n)
    try {
      n = Ti("getDefaultStorage", () => {
        var p;
        return (p = kn) == null ? void 0 : p.localStorage;
      })();
    } catch (p) {
      N(p);
    }
  if (!n)
    return R;
  const x = Ro(t), K = Pi(x), j = (o = r.serializer) != null ? o : Ji[K], { pause: I, resume: M } = _i(R, () => Q(R.value), { flush: s, deep: i, eventFilter: b });
  return c && a && Bi(c, "storage", B), B(), R;
  function Q(p) {
    try {
      if (p == null)
        n.removeItem(e);
      else {
        const w = j.write(p), g = n.getItem(e);
        g !== w && (n.setItem(e, w), c && (c == null || c.dispatchEvent(new StorageEvent("storage", {
          key: e,
          oldValue: g,
          newValue: w,
          storageArea: n
        }))));
      }
    } catch (w) {
      N(w);
    }
  }
  function E(p) {
    const w = p ? p.newValue : n.getItem(e);
    if (w == null)
      return u && x !== null && n.setItem(e, j.write(x)), x;
    if (!p && f) {
      const g = j.read(w);
      return di(f) ? f(g, x) : K === "object" && !Array.isArray(g) ? kr(kr({}, x), g) : g;
    } else
      return typeof w != "string" ? w : j.read(w);
  }
  function B(p) {
    if (!(p && p.storageArea !== n)) {
      if (p && p.key == null) {
        R.value = x;
        return;
      }
      if (!(p && p.key !== e)) {
        I();
        try {
          R.value = E(p);
        } catch (w) {
          N(w);
        } finally {
          p ? Eo(M) : M();
        }
      }
    }
  }
}
var Rr;
(function(e) {
  e.UP = "UP", e.RIGHT = "RIGHT", e.DOWN = "DOWN", e.LEFT = "LEFT", e.NONE = "NONE";
})(Rr || (Rr = {}));
var Qi = Object.defineProperty, _r = Object.getOwnPropertySymbols, qi = Object.prototype.hasOwnProperty, ji = Object.prototype.propertyIsEnumerable, Nr = (e, t, n) => t in e ? Qi(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, Fi = (e, t) => {
  for (var n in t || (t = {}))
    qi.call(t, n) && Nr(e, n, t[n]);
  if (_r)
    for (var n of _r(t))
      ji.call(t, n) && Nr(e, n, t[n]);
  return e;
};
const Hi = {
  easeInSine: [0.12, 0, 0.39, 0],
  easeOutSine: [0.61, 1, 0.88, 1],
  easeInOutSine: [0.37, 0, 0.63, 1],
  easeInQuad: [0.11, 0, 0.5, 0],
  easeOutQuad: [0.5, 1, 0.89, 1],
  easeInOutQuad: [0.45, 0, 0.55, 1],
  easeInCubic: [0.32, 0, 0.67, 0],
  easeOutCubic: [0.33, 1, 0.68, 1],
  easeInOutCubic: [0.65, 0, 0.35, 1],
  easeInQuart: [0.5, 0, 0.75, 0],
  easeOutQuart: [0.25, 1, 0.5, 1],
  easeInOutQuart: [0.76, 0, 0.24, 1],
  easeInQuint: [0.64, 0, 0.78, 0],
  easeOutQuint: [0.22, 1, 0.36, 1],
  easeInOutQuint: [0.83, 0, 0.17, 1],
  easeInExpo: [0.7, 0, 0.84, 0],
  easeOutExpo: [0.16, 1, 0.3, 1],
  easeInOutExpo: [0.87, 0, 0.13, 1],
  easeInCirc: [0.55, 0, 1, 0.45],
  easeOutCirc: [0, 0.55, 0.45, 1],
  easeInOutCirc: [0.85, 0, 0.15, 1],
  easeInBack: [0.36, 0, 0.66, -0.56],
  easeOutBack: [0.34, 1.56, 0.64, 1],
  easeInOutBack: [0.68, -0.6, 0.32, 1.6]
};
Fi({
  linear: wi
}, Hi);
var Ui = (
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
), et = Ui;
function xo(e, t) {
  return function() {
    return e.apply(t, arguments);
  };
}
const { toString: Ki } = Object.prototype, { getPrototypeOf: Vn } = Object, Gt = ((e) => (t) => {
  const n = Ki.call(t);
  return e[n] || (e[n] = n.slice(8, -1).toLowerCase());
})(/* @__PURE__ */ Object.create(null)), ke = (e) => (e = e.toLowerCase(), (t) => Gt(t) === e), $t = (e) => (t) => typeof t === e, { isArray: dt } = Array, mt = $t("undefined");
function zi(e) {
  return e !== null && !mt(e) && e.constructor !== null && !mt(e.constructor) && ve(e.constructor.isBuffer) && e.constructor.isBuffer(e);
}
const To = ke("ArrayBuffer");
function Vi(e) {
  let t;
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? t = ArrayBuffer.isView(e) : t = e && e.buffer && To(e.buffer), t;
}
const Wi = $t("string"), ve = $t("function"), Po = $t("number"), en = (e) => e !== null && typeof e == "object", Xi = (e) => e === !0 || e === !1, Pt = (e) => {
  if (Gt(e) !== "object")
    return !1;
  const t = Vn(e);
  return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(Symbol.toStringTag in e) && !(Symbol.iterator in e);
}, Yi = ke("Date"), Zi = ke("File"), Gi = ke("Blob"), $i = ke("FileList"), ea = (e) => en(e) && ve(e.pipe), ta = (e) => {
  let t;
  return e && (typeof FormData == "function" && e instanceof FormData || ve(e.append) && ((t = Gt(e)) === "formdata" || // detect form-data instance
  t === "object" && ve(e.toString) && e.toString() === "[object FormData]"));
}, na = ke("URLSearchParams"), [ra, oa, sa, ia] = ["ReadableStream", "Request", "Response", "Headers"].map(ke), aa = (e) => e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function Ot(e, t, { allOwnKeys: n = !1 } = {}) {
  if (e === null || typeof e > "u")
    return;
  let r, o;
  if (typeof e != "object" && (e = [e]), dt(e))
    for (r = 0, o = e.length; r < o; r++)
      t.call(null, e[r], r, e);
  else {
    const s = n ? Object.getOwnPropertyNames(e) : Object.keys(e), i = s.length;
    let a;
    for (r = 0; r < i; r++)
      a = s[r], t.call(null, e[a], a, e);
  }
}
function Mo(e, t) {
  t = t.toLowerCase();
  const n = Object.keys(e);
  let r = n.length, o;
  for (; r-- > 0; )
    if (o = n[r], t === o.toLowerCase())
      return o;
  return null;
}
const Lo = (() => typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : global)(), Io = (e) => !mt(e) && e !== Lo;
function Nn() {
  const { caseless: e } = Io(this) && this || {}, t = {}, n = (r, o) => {
    const s = e && Mo(t, o) || o;
    Pt(t[s]) && Pt(r) ? t[s] = Nn(t[s], r) : Pt(r) ? t[s] = Nn({}, r) : dt(r) ? t[s] = r.slice() : t[s] = r;
  };
  for (let r = 0, o = arguments.length; r < o; r++)
    arguments[r] && Ot(arguments[r], n);
  return t;
}
const ca = (e, t, n, { allOwnKeys: r } = {}) => (Ot(t, (o, s) => {
  n && ve(o) ? e[s] = xo(o, n) : e[s] = o;
}, { allOwnKeys: r }), e), ua = (e) => (e.charCodeAt(0) === 65279 && (e = e.slice(1)), e), la = (e, t, n, r) => {
  e.prototype = Object.create(t.prototype, r), e.prototype.constructor = e, Object.defineProperty(e, "super", {
    value: t.prototype
  }), n && Object.assign(e.prototype, n);
}, da = (e, t, n, r) => {
  let o, s, i;
  const a = {};
  if (t = t || {}, e == null)
    return t;
  do {
    for (o = Object.getOwnPropertyNames(e), s = o.length; s-- > 0; )
      i = o[s], (!r || r(i, e, t)) && !a[i] && (t[i] = e[i], a[i] = !0);
    e = n !== !1 && Vn(e);
  } while (e && (!n || n(e, t)) && e !== Object.prototype);
  return t;
}, fa = (e, t, n) => {
  e = String(e), (n === void 0 || n > e.length) && (n = e.length), n -= t.length;
  const r = e.indexOf(t, n);
  return r !== -1 && r === n;
}, pa = (e) => {
  if (!e)
    return null;
  if (dt(e))
    return e;
  let t = e.length;
  if (!Po(t))
    return null;
  const n = new Array(t);
  for (; t-- > 0; )
    n[t] = e[t];
  return n;
}, ha = ((e) => (t) => e && t instanceof e)(typeof Uint8Array < "u" && Vn(Uint8Array)), ga = (e, t) => {
  const r = (e && e[Symbol.iterator]).call(e);
  let o;
  for (; (o = r.next()) && !o.done; ) {
    const s = o.value;
    t.call(e, s[0], s[1]);
  }
}, wa = (e, t) => {
  let n;
  const r = [];
  for (; (n = e.exec(t)) !== null; )
    r.push(n);
  return r;
}, ma = ke("HTMLFormElement"), ya = (e) => e.toLowerCase().replace(
  /[-_\s]([a-z\d])(\w*)/g,
  function(n, r, o) {
    return r.toUpperCase() + o;
  }
), Br = (({ hasOwnProperty: e }) => (t, n) => e.call(t, n))(Object.prototype), va = ke("RegExp"), Jo = (e, t) => {
  const n = Object.getOwnPropertyDescriptors(e), r = {};
  Ot(n, (o, s) => {
    let i;
    (i = t(o, s, e)) !== !1 && (r[s] = i || o);
  }), Object.defineProperties(e, r);
}, ba = (e) => {
  Jo(e, (t, n) => {
    if (ve(e) && ["arguments", "caller", "callee"].indexOf(n) !== -1)
      return !1;
    const r = e[n];
    if (ve(r)) {
      if (t.enumerable = !1, "writable" in t) {
        t.writable = !1;
        return;
      }
      t.set || (t.set = () => {
        throw Error("Can not rewrite read-only method '" + n + "'");
      });
    }
  });
}, Aa = (e, t) => {
  const n = {}, r = (o) => {
    o.forEach((s) => {
      n[s] = !0;
    });
  };
  return dt(e) ? r(e) : r(String(e).split(t)), n;
}, Ea = () => {
}, Oa = (e, t) => e != null && Number.isFinite(e = +e) ? e : t, hn = "abcdefghijklmnopqrstuvwxyz", xr = "0123456789", Qo = {
  DIGIT: xr,
  ALPHA: hn,
  ALPHA_DIGIT: hn + hn.toUpperCase() + xr
}, Sa = (e = 16, t = Qo.ALPHA_DIGIT) => {
  let n = "";
  const { length: r } = t;
  for (; e--; )
    n += t[Math.random() * r | 0];
  return n;
};
function Ca(e) {
  return !!(e && ve(e.append) && e[Symbol.toStringTag] === "FormData" && e[Symbol.iterator]);
}
const Da = (e) => {
  const t = new Array(10), n = (r, o) => {
    if (en(r)) {
      if (t.indexOf(r) >= 0)
        return;
      if (!("toJSON" in r)) {
        t[o] = r;
        const s = dt(r) ? [] : {};
        return Ot(r, (i, a) => {
          const u = n(i, o + 1);
          !mt(u) && (s[a] = u);
        }), t[o] = void 0, s;
      }
    }
    return r;
  };
  return n(e, 0);
}, ka = ke("AsyncFunction"), Ra = (e) => e && (en(e) || ve(e)) && ve(e.then) && ve(e.catch), m = {
  isArray: dt,
  isArrayBuffer: To,
  isBuffer: zi,
  isFormData: ta,
  isArrayBufferView: Vi,
  isString: Wi,
  isNumber: Po,
  isBoolean: Xi,
  isObject: en,
  isPlainObject: Pt,
  isReadableStream: ra,
  isRequest: oa,
  isResponse: sa,
  isHeaders: ia,
  isUndefined: mt,
  isDate: Yi,
  isFile: Zi,
  isBlob: Gi,
  isRegExp: va,
  isFunction: ve,
  isStream: ea,
  isURLSearchParams: na,
  isTypedArray: ha,
  isFileList: $i,
  forEach: Ot,
  merge: Nn,
  extend: ca,
  trim: aa,
  stripBOM: ua,
  inherits: la,
  toFlatObject: da,
  kindOf: Gt,
  kindOfTest: ke,
  endsWith: fa,
  toArray: pa,
  forEachEntry: ga,
  matchAll: wa,
  isHTMLForm: ma,
  hasOwnProperty: Br,
  hasOwnProp: Br,
  // an alias to avoid ESLint no-prototype-builtins detection
  reduceDescriptors: Jo,
  freezeMethods: ba,
  toObjectSet: Aa,
  toCamelCase: ya,
  noop: Ea,
  toFiniteNumber: Oa,
  findKey: Mo,
  global: Lo,
  isContextDefined: Io,
  ALPHABET: Qo,
  generateString: Sa,
  isSpecCompliantForm: Ca,
  toJSONObject: Da,
  isAsyncFn: ka,
  isThenable: Ra
};
function V(e, t, n, r, o) {
  Error.call(this), Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : this.stack = new Error().stack, this.message = e, this.name = "AxiosError", t && (this.code = t), n && (this.config = n), r && (this.request = r), o && (this.response = o);
}
m.inherits(V, Error, {
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
      config: m.toJSONObject(this.config),
      code: this.code,
      status: this.response && this.response.status ? this.response.status : null
    };
  }
});
const qo = V.prototype, jo = {};
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
  jo[e] = { value: e };
});
Object.defineProperties(V, jo);
Object.defineProperty(qo, "isAxiosError", { value: !0 });
V.from = (e, t, n, r, o, s) => {
  const i = Object.create(qo);
  return m.toFlatObject(e, i, function(u) {
    return u !== Error.prototype;
  }, (a) => a !== "isAxiosError"), V.call(i, e.message, t, n, r, o), i.cause = e, i.name = e.name, s && Object.assign(i, s), i;
};
const _a = null;
function Bn(e) {
  return m.isPlainObject(e) || m.isArray(e);
}
function Fo(e) {
  return m.endsWith(e, "[]") ? e.slice(0, -2) : e;
}
function Tr(e, t, n) {
  return e ? e.concat(t).map(function(o, s) {
    return o = Fo(o), !n && s ? "[" + o + "]" : o;
  }).join(n ? "." : "") : t;
}
function Na(e) {
  return m.isArray(e) && !e.some(Bn);
}
const Ba = m.toFlatObject(m, {}, null, function(t) {
  return /^is[A-Z]/.test(t);
});
function tn(e, t, n) {
  if (!m.isObject(e))
    throw new TypeError("target must be an object");
  t = t || new FormData(), n = m.toFlatObject(n, {
    metaTokens: !0,
    dots: !1,
    indexes: !1
  }, !1, function(x, K) {
    return !m.isUndefined(K[x]);
  });
  const r = n.metaTokens, o = n.visitor || l, s = n.dots, i = n.indexes, u = (n.Blob || typeof Blob < "u" && Blob) && m.isSpecCompliantForm(t);
  if (!m.isFunction(o))
    throw new TypeError("visitor must be a function");
  function f(R) {
    if (R === null)
      return "";
    if (m.isDate(R))
      return R.toISOString();
    if (!u && m.isBlob(R))
      throw new V("Blob is not supported. Use a Buffer instead.");
    return m.isArrayBuffer(R) || m.isTypedArray(R) ? u && typeof Blob == "function" ? new Blob([R]) : Buffer.from(R) : R;
  }
  function l(R, x, K) {
    let j = R;
    if (R && !K && typeof R == "object") {
      if (m.endsWith(x, "{}"))
        x = r ? x : x.slice(0, -2), R = JSON.stringify(R);
      else if (m.isArray(R) && Na(R) || (m.isFileList(R) || m.endsWith(x, "[]")) && (j = m.toArray(R)))
        return x = Fo(x), j.forEach(function(M, Q) {
          !(m.isUndefined(M) || M === null) && t.append(
            // eslint-disable-next-line no-nested-ternary
            i === !0 ? Tr([x], Q, s) : i === null ? x : x + "[]",
            f(M)
          );
        }), !1;
    }
    return Bn(R) ? !0 : (t.append(Tr(K, x, s), f(R)), !1);
  }
  const c = [], b = Object.assign(Ba, {
    defaultVisitor: l,
    convertValue: f,
    isVisitable: Bn
  });
  function N(R, x) {
    if (!m.isUndefined(R)) {
      if (c.indexOf(R) !== -1)
        throw Error("Circular reference detected in " + x.join("."));
      c.push(R), m.forEach(R, function(j, I) {
        (!(m.isUndefined(j) || j === null) && o.call(
          t,
          j,
          m.isString(I) ? I.trim() : I,
          x,
          b
        )) === !0 && N(j, x ? x.concat(I) : [I]);
      }), c.pop();
    }
  }
  if (!m.isObject(e))
    throw new TypeError("data must be an object");
  return N(e), t;
}
function Pr(e) {
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
function Wn(e, t) {
  this._pairs = [], e && tn(e, this, t);
}
const Ho = Wn.prototype;
Ho.append = function(t, n) {
  this._pairs.push([t, n]);
};
Ho.toString = function(t) {
  const n = t ? function(r) {
    return t.call(this, r, Pr);
  } : Pr;
  return this._pairs.map(function(o) {
    return n(o[0]) + "=" + n(o[1]);
  }, "").join("&");
};
function xa(e) {
  return encodeURIComponent(e).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
}
function Uo(e, t, n) {
  if (!t)
    return e;
  const r = n && n.encode || xa, o = n && n.serialize;
  let s;
  if (o ? s = o(t, n) : s = m.isURLSearchParams(t) ? t.toString() : new Wn(t, n).toString(r), s) {
    const i = e.indexOf("#");
    i !== -1 && (e = e.slice(0, i)), e += (e.indexOf("?") === -1 ? "?" : "&") + s;
  }
  return e;
}
class Ta {
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
    m.forEach(this.handlers, function(r) {
      r !== null && t(r);
    });
  }
}
const Mr = Ta, Ko = {
  silentJSONParsing: !0,
  forcedJSONParsing: !0,
  clarifyTimeoutError: !1
}, Pa = typeof URLSearchParams < "u" ? URLSearchParams : Wn, Ma = typeof FormData < "u" ? FormData : null, La = typeof Blob < "u" ? Blob : null, Ia = {
  isBrowser: !0,
  classes: {
    URLSearchParams: Pa,
    FormData: Ma,
    Blob: La
  },
  protocols: ["http", "https", "file", "blob", "url", "data"]
}, Xn = typeof window < "u" && typeof document < "u", Ja = ((e) => Xn && ["ReactNative", "NativeScript", "NS"].indexOf(e) < 0)(typeof navigator < "u" && navigator.product), Qa = (() => typeof WorkerGlobalScope < "u" && // eslint-disable-next-line no-undef
self instanceof WorkerGlobalScope && typeof self.importScripts == "function")(), qa = Xn && window.location.href || "http://localhost", ja = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  hasBrowserEnv: Xn,
  hasStandardBrowserEnv: Ja,
  hasStandardBrowserWebWorkerEnv: Qa,
  origin: qa
}, Symbol.toStringTag, { value: "Module" })), Ce = {
  ...ja,
  ...Ia
};
function Fa(e, t) {
  return tn(e, new Ce.classes.URLSearchParams(), Object.assign({
    visitor: function(n, r, o, s) {
      return Ce.isNode && m.isBuffer(n) ? (this.append(r, n.toString("base64")), !1) : s.defaultVisitor.apply(this, arguments);
    }
  }, t));
}
function Ha(e) {
  return m.matchAll(/\w+|\[(\w*)]/g, e).map((t) => t[0] === "[]" ? "" : t[1] || t[0]);
}
function Ua(e) {
  const t = {}, n = Object.keys(e);
  let r;
  const o = n.length;
  let s;
  for (r = 0; r < o; r++)
    s = n[r], t[s] = e[s];
  return t;
}
function zo(e) {
  function t(n, r, o, s) {
    let i = n[s++];
    if (i === "__proto__")
      return !0;
    const a = Number.isFinite(+i), u = s >= n.length;
    return i = !i && m.isArray(o) ? o.length : i, u ? (m.hasOwnProp(o, i) ? o[i] = [o[i], r] : o[i] = r, !a) : ((!o[i] || !m.isObject(o[i])) && (o[i] = []), t(n, r, o[i], s) && m.isArray(o[i]) && (o[i] = Ua(o[i])), !a);
  }
  if (m.isFormData(e) && m.isFunction(e.entries)) {
    const n = {};
    return m.forEachEntry(e, (r, o) => {
      t(Ha(r), o, n, 0);
    }), n;
  }
  return null;
}
function Ka(e, t, n) {
  if (m.isString(e))
    try {
      return (t || JSON.parse)(e), m.trim(e);
    } catch (r) {
      if (r.name !== "SyntaxError")
        throw r;
    }
  return (n || JSON.stringify)(e);
}
const Yn = {
  transitional: Ko,
  adapter: ["xhr", "http", "fetch"],
  transformRequest: [function(t, n) {
    const r = n.getContentType() || "", o = r.indexOf("application/json") > -1, s = m.isObject(t);
    if (s && m.isHTMLForm(t) && (t = new FormData(t)), m.isFormData(t))
      return o ? JSON.stringify(zo(t)) : t;
    if (m.isArrayBuffer(t) || m.isBuffer(t) || m.isStream(t) || m.isFile(t) || m.isBlob(t) || m.isReadableStream(t))
      return t;
    if (m.isArrayBufferView(t))
      return t.buffer;
    if (m.isURLSearchParams(t))
      return n.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1), t.toString();
    let a;
    if (s) {
      if (r.indexOf("application/x-www-form-urlencoded") > -1)
        return Fa(t, this.formSerializer).toString();
      if ((a = m.isFileList(t)) || r.indexOf("multipart/form-data") > -1) {
        const u = this.env && this.env.FormData;
        return tn(
          a ? { "files[]": t } : t,
          u && new u(),
          this.formSerializer
        );
      }
    }
    return s || o ? (n.setContentType("application/json", !1), Ka(t)) : t;
  }],
  transformResponse: [function(t) {
    const n = this.transitional || Yn.transitional, r = n && n.forcedJSONParsing, o = this.responseType === "json";
    if (m.isResponse(t) || m.isReadableStream(t))
      return t;
    if (t && m.isString(t) && (r && !this.responseType || o)) {
      const i = !(n && n.silentJSONParsing) && o;
      try {
        return JSON.parse(t);
      } catch (a) {
        if (i)
          throw a.name === "SyntaxError" ? V.from(a, V.ERR_BAD_RESPONSE, this, null, this.response) : a;
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
    FormData: Ce.classes.FormData,
    Blob: Ce.classes.Blob
  },
  validateStatus: function(t) {
    return t >= 200 && t < 300;
  },
  headers: {
    common: {
      Accept: "application/json, text/plain, */*",
      "Content-Type": void 0
    }
  }
};
m.forEach(["delete", "get", "head", "post", "put", "patch"], (e) => {
  Yn.headers[e] = {};
});
const Zn = Yn, za = m.toObjectSet([
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
]), Va = (e) => {
  const t = {};
  let n, r, o;
  return e && e.split(`
`).forEach(function(i) {
    o = i.indexOf(":"), n = i.substring(0, o).trim().toLowerCase(), r = i.substring(o + 1).trim(), !(!n || t[n] && za[n]) && (n === "set-cookie" ? t[n] ? t[n].push(r) : t[n] = [r] : t[n] = t[n] ? t[n] + ", " + r : r);
  }), t;
}, Lr = Symbol("internals");
function pt(e) {
  return e && String(e).trim().toLowerCase();
}
function Mt(e) {
  return e === !1 || e == null ? e : m.isArray(e) ? e.map(Mt) : String(e);
}
function Wa(e) {
  const t = /* @__PURE__ */ Object.create(null), n = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let r;
  for (; r = n.exec(e); )
    t[r[1]] = r[2];
  return t;
}
const Xa = (e) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());
function gn(e, t, n, r, o) {
  if (m.isFunction(r))
    return r.call(this, t, n);
  if (o && (t = n), !!m.isString(t)) {
    if (m.isString(r))
      return t.indexOf(r) !== -1;
    if (m.isRegExp(r))
      return r.test(t);
  }
}
function Ya(e) {
  return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (t, n, r) => n.toUpperCase() + r);
}
function Za(e, t) {
  const n = m.toCamelCase(" " + t);
  ["get", "set", "has"].forEach((r) => {
    Object.defineProperty(e, r + n, {
      value: function(o, s, i) {
        return this[r].call(this, t, o, s, i);
      },
      configurable: !0
    });
  });
}
class nn {
  constructor(t) {
    t && this.set(t);
  }
  set(t, n, r) {
    const o = this;
    function s(a, u, f) {
      const l = pt(u);
      if (!l)
        throw new Error("header name must be a non-empty string");
      const c = m.findKey(o, l);
      (!c || o[c] === void 0 || f === !0 || f === void 0 && o[c] !== !1) && (o[c || u] = Mt(a));
    }
    const i = (a, u) => m.forEach(a, (f, l) => s(f, l, u));
    if (m.isPlainObject(t) || t instanceof this.constructor)
      i(t, n);
    else if (m.isString(t) && (t = t.trim()) && !Xa(t))
      i(Va(t), n);
    else if (m.isHeaders(t))
      for (const [a, u] of t.entries())
        s(u, a, r);
    else
      t != null && s(n, t, r);
    return this;
  }
  get(t, n) {
    if (t = pt(t), t) {
      const r = m.findKey(this, t);
      if (r) {
        const o = this[r];
        if (!n)
          return o;
        if (n === !0)
          return Wa(o);
        if (m.isFunction(n))
          return n.call(this, o, r);
        if (m.isRegExp(n))
          return n.exec(o);
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(t, n) {
    if (t = pt(t), t) {
      const r = m.findKey(this, t);
      return !!(r && this[r] !== void 0 && (!n || gn(this, this[r], r, n)));
    }
    return !1;
  }
  delete(t, n) {
    const r = this;
    let o = !1;
    function s(i) {
      if (i = pt(i), i) {
        const a = m.findKey(r, i);
        a && (!n || gn(r, r[a], a, n)) && (delete r[a], o = !0);
      }
    }
    return m.isArray(t) ? t.forEach(s) : s(t), o;
  }
  clear(t) {
    const n = Object.keys(this);
    let r = n.length, o = !1;
    for (; r--; ) {
      const s = n[r];
      (!t || gn(this, this[s], s, t, !0)) && (delete this[s], o = !0);
    }
    return o;
  }
  normalize(t) {
    const n = this, r = {};
    return m.forEach(this, (o, s) => {
      const i = m.findKey(r, s);
      if (i) {
        n[i] = Mt(o), delete n[s];
        return;
      }
      const a = t ? Ya(s) : String(s).trim();
      a !== s && delete n[s], n[a] = Mt(o), r[a] = !0;
    }), this;
  }
  concat(...t) {
    return this.constructor.concat(this, ...t);
  }
  toJSON(t) {
    const n = /* @__PURE__ */ Object.create(null);
    return m.forEach(this, (r, o) => {
      r != null && r !== !1 && (n[o] = t && m.isArray(r) ? r.join(", ") : r);
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
    const r = (this[Lr] = this[Lr] = {
      accessors: {}
    }).accessors, o = this.prototype;
    function s(i) {
      const a = pt(i);
      r[a] || (Za(o, i), r[a] = !0);
    }
    return m.isArray(t) ? t.forEach(s) : s(t), this;
  }
}
nn.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization"]);
m.reduceDescriptors(nn.prototype, ({ value: e }, t) => {
  let n = t[0].toUpperCase() + t.slice(1);
  return {
    get: () => e,
    set(r) {
      this[n] = r;
    }
  };
});
m.freezeMethods(nn);
const De = nn;
function wn(e, t) {
  const n = this || Zn, r = t || n, o = De.from(r.headers);
  let s = r.data;
  return m.forEach(e, function(a) {
    s = a.call(n, s, o.normalize(), t ? t.status : void 0);
  }), o.normalize(), s;
}
function Vo(e) {
  return !!(e && e.__CANCEL__);
}
function ft(e, t, n) {
  V.call(this, e ?? "canceled", V.ERR_CANCELED, t, n), this.name = "CanceledError";
}
m.inherits(ft, V, {
  __CANCEL__: !0
});
function Wo(e, t, n) {
  const r = n.config.validateStatus;
  !n.status || !r || r(n.status) ? e(n) : t(new V(
    "Request failed with status code " + n.status,
    [V.ERR_BAD_REQUEST, V.ERR_BAD_RESPONSE][Math.floor(n.status / 100) - 4],
    n.config,
    n.request,
    n
  ));
}
function Ga(e) {
  const t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
  return t && t[1] || "";
}
function $a(e, t) {
  e = e || 10;
  const n = new Array(e), r = new Array(e);
  let o = 0, s = 0, i;
  return t = t !== void 0 ? t : 1e3, function(u) {
    const f = Date.now(), l = r[s];
    i || (i = f), n[o] = u, r[o] = f;
    let c = s, b = 0;
    for (; c !== o; )
      b += n[c++], c = c % e;
    if (o = (o + 1) % e, o === s && (s = (s + 1) % e), f - i < t)
      return;
    const N = l && f - l;
    return N ? Math.round(b * 1e3 / N) : void 0;
  };
}
function ec(e, t) {
  let n = 0;
  const r = 1e3 / t;
  let o = null;
  return function() {
    const i = this === !0, a = Date.now();
    if (i || a - n > r)
      return o && (clearTimeout(o), o = null), n = a, e.apply(null, arguments);
    o || (o = setTimeout(() => (o = null, n = Date.now(), e.apply(null, arguments)), r - (a - n)));
  };
}
const jt = (e, t, n = 3) => {
  let r = 0;
  const o = $a(50, 250);
  return ec((s) => {
    const i = s.loaded, a = s.lengthComputable ? s.total : void 0, u = i - r, f = o(u), l = i <= a;
    r = i;
    const c = {
      loaded: i,
      total: a,
      progress: a ? i / a : void 0,
      bytes: u,
      rate: f || void 0,
      estimated: f && a && l ? (a - i) / f : void 0,
      event: s,
      lengthComputable: a != null
    };
    c[t ? "download" : "upload"] = !0, e(c);
  }, n);
}, tc = Ce.hasStandardBrowserEnv ? (
  // Standard browser envs have full support of the APIs needed to test
  // whether the request URL is of the same origin as current location.
  function() {
    const t = /(msie|trident)/i.test(navigator.userAgent), n = document.createElement("a");
    let r;
    function o(s) {
      let i = s;
      return t && (n.setAttribute("href", i), i = n.href), n.setAttribute("href", i), {
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
    return r = o(window.location.href), function(i) {
      const a = m.isString(i) ? o(i) : i;
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
), nc = Ce.hasStandardBrowserEnv ? (
  // Standard browser envs support document.cookie
  {
    write(e, t, n, r, o, s) {
      const i = [e + "=" + encodeURIComponent(t)];
      m.isNumber(n) && i.push("expires=" + new Date(n).toGMTString()), m.isString(r) && i.push("path=" + r), m.isString(o) && i.push("domain=" + o), s === !0 && i.push("secure"), document.cookie = i.join("; ");
    },
    read(e) {
      const t = document.cookie.match(new RegExp("(^|;\\s*)(" + e + ")=([^;]*)"));
      return t ? decodeURIComponent(t[3]) : null;
    },
    remove(e) {
      this.write(e, "", Date.now() - 864e5);
    }
  }
) : (
  // Non-standard browser env (web workers, react-native) lack needed support.
  {
    write() {
    },
    read() {
      return null;
    },
    remove() {
    }
  }
);
function rc(e) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e);
}
function oc(e, t) {
  return t ? e.replace(/\/?\/$/, "") + "/" + t.replace(/^\/+/, "") : e;
}
function Xo(e, t) {
  return e && !rc(t) ? oc(e, t) : t;
}
const Ir = (e) => e instanceof De ? { ...e } : e;
function We(e, t) {
  t = t || {};
  const n = {};
  function r(f, l, c) {
    return m.isPlainObject(f) && m.isPlainObject(l) ? m.merge.call({ caseless: c }, f, l) : m.isPlainObject(l) ? m.merge({}, l) : m.isArray(l) ? l.slice() : l;
  }
  function o(f, l, c) {
    if (m.isUndefined(l)) {
      if (!m.isUndefined(f))
        return r(void 0, f, c);
    } else
      return r(f, l, c);
  }
  function s(f, l) {
    if (!m.isUndefined(l))
      return r(void 0, l);
  }
  function i(f, l) {
    if (m.isUndefined(l)) {
      if (!m.isUndefined(f))
        return r(void 0, f);
    } else
      return r(void 0, l);
  }
  function a(f, l, c) {
    if (c in t)
      return r(f, l);
    if (c in e)
      return r(void 0, f);
  }
  const u = {
    url: s,
    method: s,
    data: s,
    baseURL: i,
    transformRequest: i,
    transformResponse: i,
    paramsSerializer: i,
    timeout: i,
    timeoutMessage: i,
    withCredentials: i,
    withXSRFToken: i,
    adapter: i,
    responseType: i,
    xsrfCookieName: i,
    xsrfHeaderName: i,
    onUploadProgress: i,
    onDownloadProgress: i,
    decompress: i,
    maxContentLength: i,
    maxBodyLength: i,
    beforeRedirect: i,
    transport: i,
    httpAgent: i,
    httpsAgent: i,
    cancelToken: i,
    socketPath: i,
    responseEncoding: i,
    validateStatus: a,
    headers: (f, l) => o(Ir(f), Ir(l), !0)
  };
  return m.forEach(Object.keys(Object.assign({}, e, t)), function(l) {
    const c = u[l] || o, b = c(e[l], t[l], l);
    m.isUndefined(b) && c !== a || (n[l] = b);
  }), n;
}
const Yo = (e) => {
  const t = We({}, e);
  let { data: n, withXSRFToken: r, xsrfHeaderName: o, xsrfCookieName: s, headers: i, auth: a } = t;
  t.headers = i = De.from(i), t.url = Uo(Xo(t.baseURL, t.url), e.params, e.paramsSerializer), a && i.set(
    "Authorization",
    "Basic " + btoa((a.username || "") + ":" + (a.password ? unescape(encodeURIComponent(a.password)) : ""))
  );
  let u;
  if (m.isFormData(n)) {
    if (Ce.hasStandardBrowserEnv || Ce.hasStandardBrowserWebWorkerEnv)
      i.setContentType(void 0);
    else if ((u = i.getContentType()) !== !1) {
      const [f, ...l] = u ? u.split(";").map((c) => c.trim()).filter(Boolean) : [];
      i.setContentType([f || "multipart/form-data", ...l].join("; "));
    }
  }
  if (Ce.hasStandardBrowserEnv && (r && m.isFunction(r) && (r = r(t)), r || r !== !1 && tc(t.url))) {
    const f = o && s && nc.read(s);
    f && i.set(o, f);
  }
  return t;
}, sc = typeof XMLHttpRequest < "u", ic = sc && function(e) {
  return new Promise(function(n, r) {
    const o = Yo(e);
    let s = o.data;
    const i = De.from(o.headers).normalize();
    let { responseType: a } = o, u;
    function f() {
      o.cancelToken && o.cancelToken.unsubscribe(u), o.signal && o.signal.removeEventListener("abort", u);
    }
    let l = new XMLHttpRequest();
    l.open(o.method.toUpperCase(), o.url, !0), l.timeout = o.timeout;
    function c() {
      if (!l)
        return;
      const N = De.from(
        "getAllResponseHeaders" in l && l.getAllResponseHeaders()
      ), x = {
        data: !a || a === "text" || a === "json" ? l.responseText : l.response,
        status: l.status,
        statusText: l.statusText,
        headers: N,
        config: e,
        request: l
      };
      Wo(function(j) {
        n(j), f();
      }, function(j) {
        r(j), f();
      }, x), l = null;
    }
    "onloadend" in l ? l.onloadend = c : l.onreadystatechange = function() {
      !l || l.readyState !== 4 || l.status === 0 && !(l.responseURL && l.responseURL.indexOf("file:") === 0) || setTimeout(c);
    }, l.onabort = function() {
      l && (r(new V("Request aborted", V.ECONNABORTED, o, l)), l = null);
    }, l.onerror = function() {
      r(new V("Network Error", V.ERR_NETWORK, o, l)), l = null;
    }, l.ontimeout = function() {
      let R = o.timeout ? "timeout of " + o.timeout + "ms exceeded" : "timeout exceeded";
      const x = o.transitional || Ko;
      o.timeoutErrorMessage && (R = o.timeoutErrorMessage), r(new V(
        R,
        x.clarifyTimeoutError ? V.ETIMEDOUT : V.ECONNABORTED,
        o,
        l
      )), l = null;
    }, s === void 0 && i.setContentType(null), "setRequestHeader" in l && m.forEach(i.toJSON(), function(R, x) {
      l.setRequestHeader(x, R);
    }), m.isUndefined(o.withCredentials) || (l.withCredentials = !!o.withCredentials), a && a !== "json" && (l.responseType = o.responseType), typeof o.onDownloadProgress == "function" && l.addEventListener("progress", jt(o.onDownloadProgress, !0)), typeof o.onUploadProgress == "function" && l.upload && l.upload.addEventListener("progress", jt(o.onUploadProgress)), (o.cancelToken || o.signal) && (u = (N) => {
      l && (r(!N || N.type ? new ft(null, e, l) : N), l.abort(), l = null);
    }, o.cancelToken && o.cancelToken.subscribe(u), o.signal && (o.signal.aborted ? u() : o.signal.addEventListener("abort", u)));
    const b = Ga(o.url);
    if (b && Ce.protocols.indexOf(b) === -1) {
      r(new V("Unsupported protocol " + b + ":", V.ERR_BAD_REQUEST, e));
      return;
    }
    l.send(s || null);
  });
}, ac = (e, t) => {
  let n = new AbortController(), r;
  const o = function(u) {
    if (!r) {
      r = !0, i();
      const f = u instanceof Error ? u : this.reason;
      n.abort(f instanceof V ? f : new ft(f instanceof Error ? f.message : f));
    }
  };
  let s = t && setTimeout(() => {
    o(new V(`timeout ${t} of ms exceeded`, V.ETIMEDOUT));
  }, t);
  const i = () => {
    e && (s && clearTimeout(s), s = null, e.forEach((u) => {
      u && (u.removeEventListener ? u.removeEventListener("abort", o) : u.unsubscribe(o));
    }), e = null);
  };
  e.forEach((u) => u && u.addEventListener && u.addEventListener("abort", o));
  const { signal: a } = n;
  return a.unsubscribe = i, [a, () => {
    s && clearTimeout(s), s = null;
  }];
}, cc = ac, uc = function* (e, t) {
  let n = e.byteLength;
  if (!t || n < t) {
    yield e;
    return;
  }
  let r = 0, o;
  for (; r < n; )
    o = r + t, yield e.slice(r, o), r = o;
}, lc = async function* (e, t, n) {
  for await (const r of e)
    yield* uc(ArrayBuffer.isView(r) ? r : await n(String(r)), t);
}, Jr = (e, t, n, r, o) => {
  const s = lc(e, t, o);
  let i = 0;
  return new ReadableStream({
    type: "bytes",
    async pull(a) {
      const { done: u, value: f } = await s.next();
      if (u) {
        a.close(), r();
        return;
      }
      let l = f.byteLength;
      n && n(i += l), a.enqueue(new Uint8Array(f));
    },
    cancel(a) {
      return r(a), s.return();
    }
  }, {
    highWaterMark: 2
  });
}, Qr = (e, t) => {
  const n = e != null;
  return (r) => setTimeout(() => t({
    lengthComputable: n,
    total: e,
    loaded: r
  }));
}, rn = typeof fetch == "function" && typeof Request == "function" && typeof Response == "function", Zo = rn && typeof ReadableStream == "function", xn = rn && (typeof TextEncoder == "function" ? ((e) => (t) => e.encode(t))(new TextEncoder()) : async (e) => new Uint8Array(await new Response(e).arrayBuffer())), dc = Zo && (() => {
  let e = !1;
  const t = new Request(Ce.origin, {
    body: new ReadableStream(),
    method: "POST",
    get duplex() {
      return e = !0, "half";
    }
  }).headers.has("Content-Type");
  return e && !t;
})(), qr = 64 * 1024, Tn = Zo && !!(() => {
  try {
    return m.isReadableStream(new Response("").body);
  } catch {
  }
})(), Ft = {
  stream: Tn && ((e) => e.body)
};
rn && ((e) => {
  ["text", "arrayBuffer", "blob", "formData", "stream"].forEach((t) => {
    !Ft[t] && (Ft[t] = m.isFunction(e[t]) ? (n) => n[t]() : (n, r) => {
      throw new V(`Response type '${t}' is not supported`, V.ERR_NOT_SUPPORT, r);
    });
  });
})(new Response());
const fc = async (e) => {
  if (e == null)
    return 0;
  if (m.isBlob(e))
    return e.size;
  if (m.isSpecCompliantForm(e))
    return (await new Request(e).arrayBuffer()).byteLength;
  if (m.isArrayBufferView(e))
    return e.byteLength;
  if (m.isURLSearchParams(e) && (e = e + ""), m.isString(e))
    return (await xn(e)).byteLength;
}, pc = async (e, t) => {
  const n = m.toFiniteNumber(e.getContentLength());
  return n ?? fc(t);
}, hc = rn && (async (e) => {
  let {
    url: t,
    method: n,
    data: r,
    signal: o,
    cancelToken: s,
    timeout: i,
    onDownloadProgress: a,
    onUploadProgress: u,
    responseType: f,
    headers: l,
    withCredentials: c = "same-origin",
    fetchOptions: b
  } = Yo(e);
  f = f ? (f + "").toLowerCase() : "text";
  let [N, R] = o || s || i ? cc([o, s], i) : [], x, K;
  const j = () => {
    !x && setTimeout(() => {
      N && N.unsubscribe();
    }), x = !0;
  };
  let I;
  try {
    if (u && dc && n !== "get" && n !== "head" && (I = await pc(l, r)) !== 0) {
      let B = new Request(t, {
        method: "POST",
        body: r,
        duplex: "half"
      }), p;
      m.isFormData(r) && (p = B.headers.get("content-type")) && l.setContentType(p), B.body && (r = Jr(B.body, qr, Qr(
        I,
        jt(u)
      ), null, xn));
    }
    m.isString(c) || (c = c ? "cors" : "omit"), K = new Request(t, {
      ...b,
      signal: N,
      method: n.toUpperCase(),
      headers: l.normalize().toJSON(),
      body: r,
      duplex: "half",
      withCredentials: c
    });
    let M = await fetch(K);
    const Q = Tn && (f === "stream" || f === "response");
    if (Tn && (a || Q)) {
      const B = {};
      ["status", "statusText", "headers"].forEach((w) => {
        B[w] = M[w];
      });
      const p = m.toFiniteNumber(M.headers.get("content-length"));
      M = new Response(
        Jr(M.body, qr, a && Qr(
          p,
          jt(a, !0)
        ), Q && j, xn),
        B
      );
    }
    f = f || "text";
    let E = await Ft[m.findKey(Ft, f) || "text"](M, e);
    return !Q && j(), R && R(), await new Promise((B, p) => {
      Wo(B, p, {
        data: E,
        headers: De.from(M.headers),
        status: M.status,
        statusText: M.statusText,
        config: e,
        request: K
      });
    });
  } catch (M) {
    throw j(), M && M.name === "TypeError" && /fetch/i.test(M.message) ? Object.assign(
      new V("Network Error", V.ERR_NETWORK, e, K),
      {
        cause: M.cause || M
      }
    ) : V.from(M, M && M.code, e, K);
  }
}), Pn = {
  http: _a,
  xhr: ic,
  fetch: hc
};
m.forEach(Pn, (e, t) => {
  if (e) {
    try {
      Object.defineProperty(e, "name", { value: t });
    } catch {
    }
    Object.defineProperty(e, "adapterName", { value: t });
  }
});
const jr = (e) => `- ${e}`, gc = (e) => m.isFunction(e) || e === null || e === !1, Go = {
  getAdapter: (e) => {
    e = m.isArray(e) ? e : [e];
    const { length: t } = e;
    let n, r;
    const o = {};
    for (let s = 0; s < t; s++) {
      n = e[s];
      let i;
      if (r = n, !gc(n) && (r = Pn[(i = String(n)).toLowerCase()], r === void 0))
        throw new V(`Unknown adapter '${i}'`);
      if (r)
        break;
      o[i || "#" + s] = r;
    }
    if (!r) {
      const s = Object.entries(o).map(
        ([a, u]) => `adapter ${a} ` + (u === !1 ? "is not supported by the environment" : "is not available in the build")
      );
      let i = t ? s.length > 1 ? `since :
` + s.map(jr).join(`
`) : " " + jr(s[0]) : "as no adapter specified";
      throw new V(
        "There is no suitable adapter to dispatch the request " + i,
        "ERR_NOT_SUPPORT"
      );
    }
    return r;
  },
  adapters: Pn
};
function mn(e) {
  if (e.cancelToken && e.cancelToken.throwIfRequested(), e.signal && e.signal.aborted)
    throw new ft(null, e);
}
function Fr(e) {
  return mn(e), e.headers = De.from(e.headers), e.data = wn.call(
    e,
    e.transformRequest
  ), ["post", "put", "patch"].indexOf(e.method) !== -1 && e.headers.setContentType("application/x-www-form-urlencoded", !1), Go.getAdapter(e.adapter || Zn.adapter)(e).then(function(r) {
    return mn(e), r.data = wn.call(
      e,
      e.transformResponse,
      r
    ), r.headers = De.from(r.headers), r;
  }, function(r) {
    return Vo(r) || (mn(e), r && r.response && (r.response.data = wn.call(
      e,
      e.transformResponse,
      r.response
    ), r.response.headers = De.from(r.response.headers))), Promise.reject(r);
  });
}
const $o = "1.7.2", Gn = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach((e, t) => {
  Gn[e] = function(r) {
    return typeof r === e || "a" + (t < 1 ? "n " : " ") + e;
  };
});
const Hr = {};
Gn.transitional = function(t, n, r) {
  function o(s, i) {
    return "[Axios v" + $o + "] Transitional option '" + s + "'" + i + (r ? ". " + r : "");
  }
  return (s, i, a) => {
    if (t === !1)
      throw new V(
        o(i, " has been removed" + (n ? " in " + n : "")),
        V.ERR_DEPRECATED
      );
    return n && !Hr[i] && (Hr[i] = !0, console.warn(
      o(
        i,
        " has been deprecated since v" + n + " and will be removed in the near future"
      )
    )), t ? t(s, i, a) : !0;
  };
};
function wc(e, t, n) {
  if (typeof e != "object")
    throw new V("options must be an object", V.ERR_BAD_OPTION_VALUE);
  const r = Object.keys(e);
  let o = r.length;
  for (; o-- > 0; ) {
    const s = r[o], i = t[s];
    if (i) {
      const a = e[s], u = a === void 0 || i(a, s, e);
      if (u !== !0)
        throw new V("option " + s + " must be " + u, V.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (n !== !0)
      throw new V("Unknown option " + s, V.ERR_BAD_OPTION);
  }
}
const Mn = {
  assertOptions: wc,
  validators: Gn
}, Be = Mn.validators;
class Ht {
  constructor(t) {
    this.defaults = t, this.interceptors = {
      request: new Mr(),
      response: new Mr()
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
  async request(t, n) {
    try {
      return await this._request(t, n);
    } catch (r) {
      if (r instanceof Error) {
        let o;
        Error.captureStackTrace ? Error.captureStackTrace(o = {}) : o = new Error();
        const s = o.stack ? o.stack.replace(/^.+\n/, "") : "";
        try {
          r.stack ? s && !String(r.stack).endsWith(s.replace(/^.+\n.+\n/, "")) && (r.stack += `
` + s) : r.stack = s;
        } catch {
        }
      }
      throw r;
    }
  }
  _request(t, n) {
    typeof t == "string" ? (n = n || {}, n.url = t) : n = t || {}, n = We(this.defaults, n);
    const { transitional: r, paramsSerializer: o, headers: s } = n;
    r !== void 0 && Mn.assertOptions(r, {
      silentJSONParsing: Be.transitional(Be.boolean),
      forcedJSONParsing: Be.transitional(Be.boolean),
      clarifyTimeoutError: Be.transitional(Be.boolean)
    }, !1), o != null && (m.isFunction(o) ? n.paramsSerializer = {
      serialize: o
    } : Mn.assertOptions(o, {
      encode: Be.function,
      serialize: Be.function
    }, !0)), n.method = (n.method || this.defaults.method || "get").toLowerCase();
    let i = s && m.merge(
      s.common,
      s[n.method]
    );
    s && m.forEach(
      ["delete", "get", "head", "post", "put", "patch", "common"],
      (R) => {
        delete s[R];
      }
    ), n.headers = De.concat(i, s);
    const a = [];
    let u = !0;
    this.interceptors.request.forEach(function(x) {
      typeof x.runWhen == "function" && x.runWhen(n) === !1 || (u = u && x.synchronous, a.unshift(x.fulfilled, x.rejected));
    });
    const f = [];
    this.interceptors.response.forEach(function(x) {
      f.push(x.fulfilled, x.rejected);
    });
    let l, c = 0, b;
    if (!u) {
      const R = [Fr.bind(this), void 0];
      for (R.unshift.apply(R, a), R.push.apply(R, f), b = R.length, l = Promise.resolve(n); c < b; )
        l = l.then(R[c++], R[c++]);
      return l;
    }
    b = a.length;
    let N = n;
    for (c = 0; c < b; ) {
      const R = a[c++], x = a[c++];
      try {
        N = R(N);
      } catch (K) {
        x.call(this, K);
        break;
      }
    }
    try {
      l = Fr.call(this, N);
    } catch (R) {
      return Promise.reject(R);
    }
    for (c = 0, b = f.length; c < b; )
      l = l.then(f[c++], f[c++]);
    return l;
  }
  getUri(t) {
    t = We(this.defaults, t);
    const n = Xo(t.baseURL, t.url);
    return Uo(n, t.params, t.paramsSerializer);
  }
}
m.forEach(["delete", "get", "head", "options"], function(t) {
  Ht.prototype[t] = function(n, r) {
    return this.request(We(r || {}, {
      method: t,
      url: n,
      data: (r || {}).data
    }));
  };
});
m.forEach(["post", "put", "patch"], function(t) {
  function n(r) {
    return function(s, i, a) {
      return this.request(We(a || {}, {
        method: t,
        headers: r ? {
          "Content-Type": "multipart/form-data"
        } : {},
        url: s,
        data: i
      }));
    };
  }
  Ht.prototype[t] = n(), Ht.prototype[t + "Form"] = n(!0);
});
const Lt = Ht;
class $n {
  constructor(t) {
    if (typeof t != "function")
      throw new TypeError("executor must be a function.");
    let n;
    this.promise = new Promise(function(s) {
      n = s;
    });
    const r = this;
    this.promise.then((o) => {
      if (!r._listeners)
        return;
      let s = r._listeners.length;
      for (; s-- > 0; )
        r._listeners[s](o);
      r._listeners = null;
    }), this.promise.then = (o) => {
      let s;
      const i = new Promise((a) => {
        r.subscribe(a), s = a;
      }).then(o);
      return i.cancel = function() {
        r.unsubscribe(s);
      }, i;
    }, t(function(s, i, a) {
      r.reason || (r.reason = new ft(s, i, a), n(r.reason));
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
      token: new $n(function(o) {
        t = o;
      }),
      cancel: t
    };
  }
}
const mc = $n;
function yc(e) {
  return function(n) {
    return e.apply(null, n);
  };
}
function vc(e) {
  return m.isObject(e) && e.isAxiosError === !0;
}
const Ln = {
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
Object.entries(Ln).forEach(([e, t]) => {
  Ln[t] = e;
});
const bc = Ln;
function es(e) {
  const t = new Lt(e), n = xo(Lt.prototype.request, t);
  return m.extend(n, Lt.prototype, t, { allOwnKeys: !0 }), m.extend(n, t, null, { allOwnKeys: !0 }), n.create = function(o) {
    return es(We(e, o));
  }, n;
}
const te = es(Zn);
te.Axios = Lt;
te.CanceledError = ft;
te.CancelToken = mc;
te.isCancel = Vo;
te.VERSION = $o;
te.toFormData = tn;
te.AxiosError = V;
te.Cancel = te.CanceledError;
te.all = function(t) {
  return Promise.all(t);
};
te.spread = yc;
te.isAxiosError = vc;
te.mergeConfig = We;
te.AxiosHeaders = De;
te.formToJSON = (e) => zo(m.isHTMLForm(e) ? new FormData(e) : e);
te.getAdapter = Go.getAdapter;
te.HttpStatusCode = bc;
te.default = te;
const Ac = te, Ec = ["localhost", "127.0.0.1", "::1"].includes(window.location.hostname), Oc = Ac.create({
  baseURL: "https://localhost:8080/",
  withCredentials: !1
});
let Ur = "https://localhost/", Kr = "";
const ge = {
  apiClient: Oc,
  setBaseURL: function(e, t) {
    Ec ? this.apiClient.defaults.baseURL = e || Ur : this.apiClient.defaults.baseURL = t || Kr, Ur = e, Kr = t;
  },
  getBaseURL: function() {
    return this.apiClient.defaults.baseURL;
  }
};
function Sc(e) {
  const t = se("nopwd_request", "api/requestloginkey", sessionStorage), n = se("nopwd_verify", "api/verifyaccess", sessionStorage), r = se("nopwd_confirm", "api/confirmaccess", sessionStorage), o = se("nopwd_logout", "api/logout", sessionStorage), s = se("nopwd_dev", "https://marketally.ngrok.io/", sessionStorage), i = se("nopwd_prod", "https://www.nopwd.com/", sessionStorage), a = se("nopwd_app", "/app", sessionStorage), u = se("nopwd_login", "/auth/login", sessionStorage), f = se("nopwd_log", !1, sessionStorage), l = se("nopwd_region", 1, sessionStorage), c = se("nopwd_check", !1, sessionStorage), b = se("nopwd_interval", 1e3, sessionStorage), N = se("nopwd_access", 2e4, sessionStorage), R = oe(!1);
  oe(!1);
  const x = oe(!1), K = oe(0), j = se("nopwd_loginid", et.EMPTY, sessionStorage), I = se("nopwd_auth", 0, sessionStorage), M = se("nopwd_session", "", sessionStorage);
  function Q(T, J, H, $, de, Ee) {
    T != null && T != null && T != "" && (s.value = T), J != null && J != null && J != "" && (i.value = J), l.value = H, f.value = $, b.value = de, N.value = Ee;
  }
  function E(T, J, H = !1) {
    T != null && T != null && T != "" && (a.value = T), J != null && J != null && J != "" && (u.value = J), c.value = H;
  }
  function B(T, J, H, $) {
    T != null && T != null && T != "" && (t.value = T), J != null && J != null && J != "" && (n.value = J), H != null && H != null && H != "" && (r.value = H), $ != null && $ != null && $ != "" && (o.value = $);
  }
  const { t: p } = Do();
  function w() {
    return {
      headers: {
        Accept: "application/json",
        "X-LoginId": j.value,
        "Content-Type": "application/json"
      }
    };
  }
  const g = oe(!1), y = oe(""), h = oe(p("auth.prepare")), d = oe({ id: j.value, code: null, value: null, subid: null, userid: null, count: null, page: null, fromdate: null });
  async function D() {
    if (I.value <= -1)
      return I.value;
    if (j.value = et.EMPTY, j.value === et.EMPTY.toString()) {
      x.value = !1, h.value = p("auth.loading"), j.value = et.create().toString(), d.value.id = j.value, f.value && console.log("Login: " + j.value), ge.setBaseURL(s.value, i.value);
      let T = ge.getBaseURL() + t.value;
      return await ge.apiClient.get(T, w()).then((J) => {
        const H = J.data;
        return H.success ? (h.value = "", y.value = "https://www.nopwd.com?r=" + l.value + "&l=" + j.value, console.log(y.value), R.value = H.success, K.value = H.code, I.value = 1, setTimeout(O, b.value), g.value ? h.value = p("auth.codedark") : h.value = p("auth.codelight"), 1) : (x.value = !0, f.value && console.log(H.message), h.value = p("auth.codeerror"), -1);
      }).catch((J) => (x.value = !0, console.log(J), e && e("error", J.message), x.value = !0, h.value = p("auth.codeerror"), -1));
    } else
      return g.value ? h.value = p("auth.codedark") : h.value = p("auth.codelight"), O();
  }
  function C(T = !1) {
    return x.value ? h.value = p("auth.codeerror") : g.value ? h.value = p("auth.codedark") : g.value || (h.value = p("auth.codelight")), h.value;
  }
  async function O() {
    if (I.value <= -1)
      return I.value;
    ge.setBaseURL(s.value, i.value);
    let T = ge.getBaseURL() + n.value;
    return f.value && console.log("Check: " + j.value), await ge.apiClient.get(T, w()).then(async (J) => {
      const H = J.data;
      if (H.success)
        return R.value = H.success, K.value = H.code, H.code > 0 ? (M.value = JSON.stringify(H.data), e && e("user", M.value), I.value = 2, setTimeout(q, N.value), e && e("redirect", a.value), e && e("status", I.value), 1) : H.code < 0 ? (I.value = 0, e && e("status", I.value), -1) : (setTimeout(O, b.value), g.value ? h.value = p("auth.codedark") : h.value = p("auth.codelight"), 0);
      f.value && console.log(H.message), await D();
    }).catch((J) => (x.value = !0, e && e("error", J.message), f.value && console.log(J), x.value = !0, h.value = p("auth.codeerror"), -1));
  }
  async function q() {
    if (c.value == !1 || I.value < 2)
      return;
    ge.setBaseURL(s.value, i.value), f.value && console.log("Check: " + j.value);
    let T = ge.getBaseURL() + r.value;
    await ge.apiClient.get(T, w()).then((J) => {
      const H = J.data;
      H.success && (R.value = H.success, K.value = H.code, H.code > 0 ? setTimeout(q, N.value) : (I.value = 0, e && e("status", H.code), M.value = "", e && e("user", M.value), e && e("redirect", u.value)));
    }).catch((J) => {
      x.value = !0, e && e("error", J.message), f.value && console.log(J), x.value = !0, h.value = p("auth.codeerror");
    });
  }
  async function P() {
    if (I.value <= 0)
      return;
    I.value = -1, ge.setBaseURL(s.value, i.value), f.value && console.log("Logout: " + j.value);
    let T = ge.getBaseURL() + o.value;
    await ge.apiClient.get(T, w()).then((J) => {
      const H = J.data;
      R.value = H.success, K.value = H.code, I.value = 0, R.value && (e && e("status", I.value), M.value = "", e && e("user", M.value), j.value = et.EMPTY.toString()), e && e("redirect", u.value);
    }), I.value = 0;
  }
  return {
    auth: I,
    success: R,
    user_data: M,
    code: K,
    IDLogin: j,
    QRCode: y,
    IsDark: g,
    Message: h,
    is_error: x,
    loginQRCode: D,
    checkAccess: q,
    checkQRLogin: O,
    logout: P,
    config: w,
    setUrls: B,
    setRoutes: E,
    readMessage: C,
    setBase: Q
  };
}
var Cc = Object.defineProperty, Dc = (e, t, n) => t in e ? Cc(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, ue = (e, t, n) => (Dc(e, typeof t != "symbol" ? t + "" : t, n), n);
function kc(e, t) {
  const n = /* @__PURE__ */ Object.create(null), r = e.split(",");
  for (let o = 0; o < r.length; o++)
    n[r[o]] = !0;
  return t ? (o) => !!n[o.toLowerCase()] : (o) => !!n[o];
}
const In = process.env.NODE_ENV !== "production" ? Object.freeze({}) : {}, Rc = process.env.NODE_ENV !== "production" ? Object.freeze([]) : [], me = () => {
}, _c = /^on[^a-z]/, Nc = (e) => _c.test(e), fe = Object.assign, ts = (e, t) => {
  const n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}, Bc = Object.prototype.hasOwnProperty, on = (e, t) => Bc.call(e, t), Y = Array.isArray, He = (e) => sn(e) === "[object Map]", ns = (e) => sn(e) === "[object Set]", Z = (e) => typeof e == "function", be = (e) => typeof e == "string", er = (e) => typeof e == "symbol", ee = (e) => e !== null && typeof e == "object", tr = (e) => ee(e) && Z(e.then) && Z(e.catch), rs = Object.prototype.toString, sn = (e) => rs.call(e), os = (e) => sn(e).slice(8, -1), ss = (e) => sn(e) === "[object Object]", nr = (e) => be(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, is = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return (n) => t[n] || (t[n] = e(n));
}, as = is(
  (e) => e.charAt(0).toUpperCase() + e.slice(1)
), xc = is(
  (e) => e ? `on${as(e)}` : ""
), Ut = (e, t) => !Object.is(e, t), Tc = (e) => {
  const t = be(e) ? Number(e) : NaN;
  return isNaN(t) ? e : t;
};
let zr;
const Jn = () => zr || (zr = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function rr(e) {
  if (Y(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
      const r = e[n], o = be(r) ? Ic(r) : rr(r);
      if (o)
        for (const s in o)
          t[s] = o[s];
    }
    return t;
  } else if (be(e) || ee(e))
    return e;
}
const Pc = /;(?![^(]*\))/g, Mc = /:([^]+)/, Lc = /\/\*[^]*?\*\//g;
function Ic(e) {
  const t = {};
  return e.replace(Lc, "").split(Pc).forEach((n) => {
    if (n) {
      const r = n.split(Mc);
      r.length > 1 && (t[r[0].trim()] = r[1].trim());
    }
  }), t;
}
function st(e) {
  let t = "";
  if (be(e))
    t = e;
  else if (Y(e))
    for (let n = 0; n < e.length; n++) {
      const r = st(e[n]);
      r && (t += r + " ");
    }
  else if (ee(e))
    for (const n in e)
      e[n] && (t += n + " ");
  return t.trim();
}
const Jc = (e) => be(e) ? e : e == null ? "" : Y(e) || ee(e) && (e.toString === rs || !Z(e.toString)) ? JSON.stringify(e, cs, 2) : String(e), cs = (e, t) => t && t.__v_isRef ? cs(e, t.value) : He(t) ? {
  [`Map(${t.size})`]: [...t.entries()].reduce((n, [r, o]) => (n[`${r} =>`] = o, n), {})
} : ns(t) ? {
  [`Set(${t.size})`]: [...t.values()]
} : ee(t) && !Y(t) && !ss(t) ? String(t) : t;
function Vr(e, ...t) {
  console.warn(`[Vue warn] ${e}`, ...t);
}
let us;
function Qc(e, t = us) {
  t && t.active && t.effects.push(e);
}
function qc() {
  return us;
}
const yt = (e) => {
  const t = new Set(e);
  return t.w = 0, t.n = 0, t;
}, ls = (e) => (e.w & Je) > 0, ds = (e) => (e.n & Je) > 0, jc = ({ deps: e }) => {
  if (e.length)
    for (let t = 0; t < e.length; t++)
      e[t].w |= Je;
}, Fc = (e) => {
  const { deps: t } = e;
  if (t.length) {
    let n = 0;
    for (let r = 0; r < t.length; r++) {
      const o = t[r];
      ls(o) && !ds(o) ? o.delete(e) : t[n++] = o, o.w &= ~Je, o.n &= ~Je;
    }
    t.length = n;
  }
}, Qn = /* @__PURE__ */ new WeakMap();
let ht = 0, Je = 1;
const qn = 30;
let ce;
const Ue = Symbol(process.env.NODE_ENV !== "production" ? "iterate" : ""), jn = Symbol(process.env.NODE_ENV !== "production" ? "Map key iterate" : "");
class fs {
  constructor(t, n = null, r) {
    this.fn = t, this.scheduler = n, this.active = !0, this.deps = [], this.parent = void 0, Qc(this, r);
  }
  run() {
    if (!this.active)
      return this.fn();
    let t = ce, n = Le;
    for (; t; ) {
      if (t === this)
        return;
      t = t.parent;
    }
    try {
      return this.parent = ce, ce = this, Le = !0, Je = 1 << ++ht, ht <= qn ? jc(this) : Wr(this), this.fn();
    } finally {
      ht <= qn && Fc(this), Je = 1 << --ht, ce = this.parent, Le = n, this.parent = void 0, this.deferStop && this.stop();
    }
  }
  stop() {
    ce === this ? this.deferStop = !0 : this.active && (Wr(this), this.onStop && this.onStop(), this.active = !1);
  }
}
function Wr(e) {
  const { deps: t } = e;
  if (t.length) {
    for (let n = 0; n < t.length; n++)
      t[n].delete(e);
    t.length = 0;
  }
}
let Le = !0;
const ps = [];
function an() {
  ps.push(Le), Le = !1;
}
function cn() {
  const e = ps.pop();
  Le = e === void 0 ? !0 : e;
}
function Ae(e, t, n) {
  if (Le && ce) {
    let r = Qn.get(e);
    r || Qn.set(e, r = /* @__PURE__ */ new Map());
    let o = r.get(n);
    o || r.set(n, o = yt());
    const s = process.env.NODE_ENV !== "production" ? { effect: ce, target: e, type: t, key: n } : void 0;
    Fn(o, s);
  }
}
function Fn(e, t) {
  let n = !1;
  ht <= qn ? ds(e) || (e.n |= Je, n = !ls(e)) : n = !e.has(ce), n && (e.add(ce), ce.deps.push(e), process.env.NODE_ENV !== "production" && ce.onTrack && ce.onTrack(
    fe(
      {
        effect: ce
      },
      t
    )
  ));
}
function Qe(e, t, n, r, o, s) {
  const i = Qn.get(e);
  if (!i)
    return;
  let a = [];
  if (t === "clear")
    a = [...i.values()];
  else if (n === "length" && Y(e)) {
    const f = Number(r);
    i.forEach((l, c) => {
      (c === "length" || c >= f) && a.push(l);
    });
  } else
    switch (n !== void 0 && a.push(i.get(n)), t) {
      case "add":
        Y(e) ? nr(n) && a.push(i.get("length")) : (a.push(i.get(Ue)), He(e) && a.push(i.get(jn)));
        break;
      case "delete":
        Y(e) || (a.push(i.get(Ue)), He(e) && a.push(i.get(jn)));
        break;
      case "set":
        He(e) && a.push(i.get(Ue));
        break;
    }
  const u = process.env.NODE_ENV !== "production" ? { target: e, type: t, key: n, newValue: r, oldValue: o, oldTarget: s } : void 0;
  if (a.length === 1)
    a[0] && (process.env.NODE_ENV !== "production" ? nt(a[0], u) : nt(a[0]));
  else {
    const f = [];
    for (const l of a)
      l && f.push(...l);
    process.env.NODE_ENV !== "production" ? nt(yt(f), u) : nt(yt(f));
  }
}
function nt(e, t) {
  const n = Y(e) ? e : [...e];
  for (const r of n)
    r.computed && Xr(r, t);
  for (const r of n)
    r.computed || Xr(r, t);
}
function Xr(e, t) {
  (e !== ce || e.allowRecurse) && (process.env.NODE_ENV !== "production" && e.onTrigger && e.onTrigger(fe({ effect: e }, t)), e.scheduler ? e.scheduler() : e.run());
}
const Hc = /* @__PURE__ */ kc("__proto__,__v_isRef,__isVue"), hs = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(er)
), Uc = /* @__PURE__ */ gs(), Kc = /* @__PURE__ */ gs(!0), Yr = /* @__PURE__ */ zc();
function zc() {
  const e = {};
  return ["includes", "indexOf", "lastIndexOf"].forEach((t) => {
    e[t] = function(...n) {
      const r = W(this);
      for (let s = 0, i = this.length; s < i; s++)
        Ae(r, "get", s + "");
      const o = r[t](...n);
      return o === -1 || o === !1 ? r[t](...n.map(W)) : o;
    };
  }), ["push", "pop", "shift", "unshift", "splice"].forEach((t) => {
    e[t] = function(...n) {
      an();
      const r = W(this)[t].apply(this, n);
      return cn(), r;
    };
  }), e;
}
function Vc(e) {
  const t = W(this);
  return Ae(t, "has", e), t.hasOwnProperty(e);
}
function gs(e = !1, t = !1) {
  return function(n, r, o) {
    if (r === "__v_isReactive")
      return !e;
    if (r === "__v_isReadonly")
      return e;
    if (r === "__v_isShallow")
      return t;
    if (r === "__v_raw" && o === (e ? t ? uu : vs : t ? cu : ys).get(n))
      return n;
    const s = Y(n);
    if (!e) {
      if (s && on(Yr, r))
        return Reflect.get(Yr, r, o);
      if (r === "hasOwnProperty")
        return Vc;
    }
    const i = Reflect.get(n, r, o);
    return (er(r) ? hs.has(r) : Hc(r)) || (e || Ae(n, "get", r), t) ? i : le(i) ? s && nr(r) ? i : i.value : ee(i) ? e ? bs(i) : sr(i) : i;
  };
}
const Wc = /* @__PURE__ */ Xc();
function Xc(e = !1) {
  return function(t, n, r, o) {
    let s = t[n];
    if (Xe(s) && le(s) && !le(r))
      return !1;
    if (!e && (!Hn(r) && !Xe(r) && (s = W(s), r = W(r)), !Y(t) && le(s) && !le(r)))
      return s.value = r, !0;
    const i = Y(t) && nr(n) ? Number(n) < t.length : on(t, n), a = Reflect.set(t, n, r, o);
    return t === W(o) && (i ? Ut(r, s) && Qe(t, "set", n, r, s) : Qe(t, "add", n, r)), a;
  };
}
function Yc(e, t) {
  const n = on(e, t), r = e[t], o = Reflect.deleteProperty(e, t);
  return o && n && Qe(e, "delete", t, void 0, r), o;
}
function Zc(e, t) {
  const n = Reflect.has(e, t);
  return (!er(t) || !hs.has(t)) && Ae(e, "has", t), n;
}
function Gc(e) {
  return Ae(e, "iterate", Y(e) ? "length" : Ue), Reflect.ownKeys(e);
}
const $c = {
  get: Uc,
  set: Wc,
  deleteProperty: Yc,
  has: Zc,
  ownKeys: Gc
}, eu = {
  get: Kc,
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
}, or = (e) => e, un = (e) => Reflect.getPrototypeOf(e);
function Ct(e, t, n = !1, r = !1) {
  e = e.__v_raw;
  const o = W(e), s = W(t);
  n || (t !== s && Ae(o, "get", t), Ae(o, "get", s));
  const { has: i } = un(o), a = r ? or : n ? ar : ir;
  if (i.call(o, t))
    return a(e.get(t));
  if (i.call(o, s))
    return a(e.get(s));
  e !== o && e.get(t);
}
function Dt(e, t = !1) {
  const n = this.__v_raw, r = W(n), o = W(e);
  return t || (e !== o && Ae(r, "has", e), Ae(r, "has", o)), e === o ? n.has(e) : n.has(e) || n.has(o);
}
function kt(e, t = !1) {
  return e = e.__v_raw, !t && Ae(W(e), "iterate", Ue), Reflect.get(e, "size", e);
}
function Zr(e) {
  e = W(e);
  const t = W(this);
  return un(t).has.call(t, e) || (t.add(e), Qe(t, "add", e, e)), this;
}
function Gr(e, t) {
  t = W(t);
  const n = W(this), { has: r, get: o } = un(n);
  let s = r.call(n, e);
  s ? process.env.NODE_ENV !== "production" && ms(n, r, e) : (e = W(e), s = r.call(n, e));
  const i = o.call(n, e);
  return n.set(e, t), s ? Ut(t, i) && Qe(n, "set", e, t, i) : Qe(n, "add", e, t), this;
}
function $r(e) {
  const t = W(this), { has: n, get: r } = un(t);
  let o = n.call(t, e);
  o ? process.env.NODE_ENV !== "production" && ms(t, n, e) : (e = W(e), o = n.call(t, e));
  const s = r ? r.call(t, e) : void 0, i = t.delete(e);
  return o && Qe(t, "delete", e, void 0, s), i;
}
function eo() {
  const e = W(this), t = e.size !== 0, n = process.env.NODE_ENV !== "production" ? He(e) ? new Map(e) : new Set(e) : void 0, r = e.clear();
  return t && Qe(e, "clear", void 0, void 0, n), r;
}
function Rt(e, t) {
  return function(n, r) {
    const o = this, s = o.__v_raw, i = W(s), a = t ? or : e ? ar : ir;
    return !e && Ae(i, "iterate", Ue), s.forEach((u, f) => n.call(r, a(u), a(f), o));
  };
}
function _t(e, t, n) {
  return function(...r) {
    const o = this.__v_raw, s = W(o), i = He(s), a = e === "entries" || e === Symbol.iterator && i, u = e === "keys" && i, f = o[e](...r), l = n ? or : t ? ar : ir;
    return !t && Ae(
      s,
      "iterate",
      u ? jn : Ue
    ), {
      // iterator protocol
      next() {
        const { value: c, done: b } = f.next();
        return b ? { value: c, done: b } : {
          value: a ? [l(c[0]), l(c[1])] : l(c),
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
function xe(e) {
  return function(...t) {
    if (process.env.NODE_ENV !== "production") {
      const n = t[0] ? `on key "${t[0]}" ` : "";
      console.warn(
        `${as(e)} operation ${n}failed: target is readonly.`,
        W(this)
      );
    }
    return e === "delete" ? !1 : this;
  };
}
function tu() {
  const e = {
    get(o) {
      return Ct(this, o);
    },
    get size() {
      return kt(this);
    },
    has: Dt,
    add: Zr,
    set: Gr,
    delete: $r,
    clear: eo,
    forEach: Rt(!1, !1)
  }, t = {
    get(o) {
      return Ct(this, o, !1, !0);
    },
    get size() {
      return kt(this);
    },
    has: Dt,
    add: Zr,
    set: Gr,
    delete: $r,
    clear: eo,
    forEach: Rt(!1, !0)
  }, n = {
    get(o) {
      return Ct(this, o, !0);
    },
    get size() {
      return kt(this, !0);
    },
    has(o) {
      return Dt.call(this, o, !0);
    },
    add: xe("add"),
    set: xe("set"),
    delete: xe("delete"),
    clear: xe("clear"),
    forEach: Rt(!0, !1)
  }, r = {
    get(o) {
      return Ct(this, o, !0, !0);
    },
    get size() {
      return kt(this, !0);
    },
    has(o) {
      return Dt.call(this, o, !0);
    },
    add: xe("add"),
    set: xe("set"),
    delete: xe("delete"),
    clear: xe("clear"),
    forEach: Rt(!0, !0)
  };
  return ["keys", "values", "entries", Symbol.iterator].forEach((o) => {
    e[o] = _t(
      o,
      !1,
      !1
    ), n[o] = _t(
      o,
      !0,
      !1
    ), t[o] = _t(
      o,
      !1,
      !0
    ), r[o] = _t(
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
  nu,
  ru,
  ou,
  su
] = /* @__PURE__ */ tu();
function ws(e, t) {
  const n = t ? e ? su : ou : e ? ru : nu;
  return (r, o, s) => o === "__v_isReactive" ? !e : o === "__v_isReadonly" ? e : o === "__v_raw" ? r : Reflect.get(
    on(n, o) && o in r ? n : r,
    o,
    s
  );
}
const iu = {
  get: /* @__PURE__ */ ws(!1, !1)
}, au = {
  get: /* @__PURE__ */ ws(!0, !1)
};
function ms(e, t, n) {
  const r = W(n);
  if (r !== n && t.call(e, r)) {
    const o = os(e);
    console.warn(
      `Reactive ${o} contains both the raw and reactive versions of the same object${o === "Map" ? " as keys" : ""}, which can lead to inconsistencies. Avoid differentiating between the raw and reactive versions of an object and only use the reactive version if possible.`
    );
  }
}
const ys = /* @__PURE__ */ new WeakMap(), cu = /* @__PURE__ */ new WeakMap(), vs = /* @__PURE__ */ new WeakMap(), uu = /* @__PURE__ */ new WeakMap();
function lu(e) {
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
function du(e) {
  return e.__v_skip || !Object.isExtensible(e) ? 0 : lu(os(e));
}
function sr(e) {
  return Xe(e) ? e : As(
    e,
    !1,
    $c,
    iu,
    ys
  );
}
function bs(e) {
  return As(
    e,
    !0,
    eu,
    au,
    vs
  );
}
function As(e, t, n, r, o) {
  if (!ee(e))
    return process.env.NODE_ENV !== "production" && console.warn(`value cannot be made reactive: ${String(e)}`), e;
  if (e.__v_raw && !(t && e.__v_isReactive))
    return e;
  const s = o.get(e);
  if (s)
    return s;
  const i = du(e);
  if (i === 0)
    return e;
  const a = new Proxy(
    e,
    i === 2 ? r : n
  );
  return o.set(e, a), a;
}
function Ke(e) {
  return Xe(e) ? Ke(e.__v_raw) : !!(e && e.__v_isReactive);
}
function Xe(e) {
  return !!(e && e.__v_isReadonly);
}
function Hn(e) {
  return !!(e && e.__v_isShallow);
}
function Un(e) {
  return Ke(e) || Xe(e);
}
function W(e) {
  const t = e && e.__v_raw;
  return t ? W(t) : e;
}
const ir = (e) => ee(e) ? sr(e) : e, ar = (e) => ee(e) ? bs(e) : e;
function fu(e) {
  Le && ce && (e = W(e), process.env.NODE_ENV !== "production" ? Fn(e.dep || (e.dep = yt()), {
    target: e,
    type: "get",
    key: "value"
  }) : Fn(e.dep || (e.dep = yt())));
}
function pu(e, t) {
  e = W(e);
  const n = e.dep;
  n && (process.env.NODE_ENV !== "production" ? nt(n, {
    target: e,
    type: "set",
    key: "value",
    newValue: t
  }) : nt(n));
}
function le(e) {
  return !!(e && e.__v_isRef === !0);
}
function It(e) {
  return le(e) ? e.value : e;
}
const hu = {
  get: (e, t, n) => It(Reflect.get(e, t, n)),
  set: (e, t, n, r) => {
    const o = e[t];
    return le(o) && !le(n) ? (o.value = n, !0) : Reflect.set(e, t, n, r);
  }
};
function gu(e) {
  return Ke(e) ? e : new Proxy(e, hu);
}
class wu {
  constructor(t, n, r, o) {
    this._setter = n, this.dep = void 0, this.__v_isRef = !0, this.__v_isReadonly = !1, this._dirty = !0, this.effect = new fs(t, () => {
      this._dirty || (this._dirty = !0, pu(this));
    }), this.effect.computed = this, this.effect.active = this._cacheable = !o, this.__v_isReadonly = r;
  }
  get value() {
    const t = W(this);
    return fu(t), (t._dirty || !t._cacheable) && (t._dirty = !1, t._value = t.effect.run()), t._value;
  }
  set value(t) {
    this._setter(t);
  }
}
function mu(e, t, n = !1) {
  let r, o;
  const s = Z(e);
  s ? (r = e, o = process.env.NODE_ENV !== "production" ? () => {
    console.warn("Write operation failed: computed value is readonly");
  } : me) : (r = e.get, o = e.set);
  const i = new wu(r, o, s || !o, n);
  return process.env.NODE_ENV !== "production" && t && !n && (i.effect.onTrack = t.onTrack, i.effect.onTrigger = t.onTrigger), i;
}
const ze = [];
function Es(e) {
  ze.push(e);
}
function Os() {
  ze.pop();
}
function X(e, ...t) {
  if (process.env.NODE_ENV === "production")
    return;
  an();
  const n = ze.length ? ze[ze.length - 1].component : null, r = n && n.appContext.config.warnHandler, o = yu();
  if (r)
    Ve(
      r,
      n,
      11,
      [
        e + t.join(""),
        n && n.proxy,
        o.map(
          ({ vnode: s }) => `at <${mr(n, s.type)}>`
        ).join(`
`),
        o
      ]
    );
  else {
    const s = [`[Vue warn]: ${e}`, ...t];
    o.length && s.push(`
`, ...vu(o)), console.warn(...s);
  }
  cn();
}
function yu() {
  let e = ze[ze.length - 1];
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
function vu(e) {
  const t = [];
  return e.forEach((n, r) => {
    t.push(...r === 0 ? [] : [`
`], ...bu(n));
  }), t;
}
function bu({ vnode: e, recurseCount: t }) {
  const n = t > 0 ? `... (${t} recursive calls)` : "", r = e.component ? e.component.parent == null : !1, o = ` at <${mr(
    e.component,
    e.type,
    r
  )}`, s = ">" + n;
  return e.props ? [o, ...Au(e.props), s] : [o + s];
}
function Au(e) {
  const t = [], n = Object.keys(e);
  return n.slice(0, 3).forEach((r) => {
    t.push(...Ss(r, e[r]));
  }), n.length > 3 && t.push(" ..."), t;
}
function Ss(e, t, n) {
  return be(t) ? (t = JSON.stringify(t), n ? t : [`${e}=${t}`]) : typeof t == "number" || typeof t == "boolean" || t == null ? n ? t : [`${e}=${t}`] : le(t) ? (t = Ss(e, W(t.value), !0), n ? t : [`${e}=Ref<`, t, ">"]) : Z(t) ? [`${e}=fn${t.name ? `<${t.name}>` : ""}`] : (t = W(t), n ? t : [`${e}=`, t]);
}
function Eu(e, t) {
  process.env.NODE_ENV !== "production" && e !== void 0 && (typeof e != "number" ? X(`${t} is not a valid number - got ${JSON.stringify(e)}.`) : isNaN(e) && X(`${t} is NaN - the duration expression might be incorrect.`));
}
const cr = {
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
function Ve(e, t, n, r) {
  let o;
  try {
    o = r ? e(...r) : e();
  } catch (s) {
    ur(s, t, n);
  }
  return o;
}
function vt(e, t, n, r) {
  if (Z(e)) {
    const s = Ve(e, t, n, r);
    return s && tr(s) && s.catch((i) => {
      ur(i, t, n);
    }), s;
  }
  const o = [];
  for (let s = 0; s < e.length; s++)
    o.push(vt(e[s], t, n, r));
  return o;
}
function ur(e, t, n, r = !0) {
  const o = t ? t.vnode : null;
  if (t) {
    let s = t.parent;
    const i = t.proxy, a = process.env.NODE_ENV !== "production" ? cr[n] : n;
    for (; s; ) {
      const f = s.ec;
      if (f) {
        for (let l = 0; l < f.length; l++)
          if (f[l](e, i, a) === !1)
            return;
      }
      s = s.parent;
    }
    const u = t.appContext.config.errorHandler;
    if (u) {
      Ve(
        u,
        null,
        10,
        [e, i, a]
      );
      return;
    }
  }
  Ou(e, n, o, r);
}
function Ou(e, t, n, r = !0) {
  if (process.env.NODE_ENV !== "production") {
    const o = cr[t];
    if (n && Es(n), X(`Unhandled error${o ? ` during execution of ${o}` : ""}`), n && Os(), r)
      throw e;
    console.error(e);
  } else
    console.error(e);
}
let Kt = !1, Kn = !1;
const Oe = [];
let Pe = 0;
const it = [];
let Re = null, Te = 0;
const Su = /* @__PURE__ */ Promise.resolve(), Cu = 100;
function Du(e) {
  let t = Pe + 1, n = Oe.length;
  for (; t < n; ) {
    const r = t + n >>> 1;
    bt(Oe[r]) < e ? t = r + 1 : n = r;
  }
  return t;
}
function Cs(e) {
  (!Oe.length || !Oe.includes(
    e,
    Kt && e.allowRecurse ? Pe + 1 : Pe
  )) && (e.id == null ? Oe.push(e) : Oe.splice(Du(e.id), 0, e), Ds());
}
function Ds() {
  !Kt && !Kn && (Kn = !0, Su.then(ks));
}
function lr(e) {
  Y(e) ? it.push(...e) : (!Re || !Re.includes(
    e,
    e.allowRecurse ? Te + 1 : Te
  )) && it.push(e), Ds();
}
function ku(e) {
  if (it.length) {
    const t = [...new Set(it)];
    if (it.length = 0, Re) {
      Re.push(...t);
      return;
    }
    for (Re = t, process.env.NODE_ENV !== "production" && (e = e || /* @__PURE__ */ new Map()), Re.sort((n, r) => bt(n) - bt(r)), Te = 0; Te < Re.length; Te++)
      process.env.NODE_ENV !== "production" && Rs(e, Re[Te]) || Re[Te]();
    Re = null, Te = 0;
  }
}
const bt = (e) => e.id == null ? 1 / 0 : e.id, Ru = (e, t) => {
  const n = bt(e) - bt(t);
  if (n === 0) {
    if (e.pre && !t.pre)
      return -1;
    if (t.pre && !e.pre)
      return 1;
  }
  return n;
};
function ks(e) {
  Kn = !1, Kt = !0, process.env.NODE_ENV !== "production" && (e = e || /* @__PURE__ */ new Map()), Oe.sort(Ru);
  const t = process.env.NODE_ENV !== "production" ? (n) => Rs(e, n) : me;
  try {
    for (Pe = 0; Pe < Oe.length; Pe++) {
      const n = Oe[Pe];
      if (n && n.active !== !1) {
        if (process.env.NODE_ENV !== "production" && t(n))
          continue;
        Ve(n, null, 14);
      }
    }
  } finally {
    Pe = 0, Oe.length = 0, ku(e), Kt = !1, (Oe.length || it.length) && ks(e);
  }
}
function Rs(e, t) {
  if (!e.has(t))
    e.set(t, 1);
  else {
    const n = e.get(t);
    if (n > Cu) {
      const r = t.ownerInstance, o = r && Vs(r.type);
      return X(
        `Maximum recursive updates exceeded${o ? ` in component <${o}>` : ""}. This means you have a reactive effect that is mutating its own dependencies and thus recursively triggering itself. Possible sources include component template, render function, updated hook or watcher source function.`
      ), !0;
    } else
      e.set(t, n + 1);
  }
}
const tt = /* @__PURE__ */ new Set();
process.env.NODE_ENV !== "production" && (Jn().__VUE_HMR_RUNTIME__ = {
  createRecord: yn(_u),
  rerender: yn(Nu),
  reload: yn(Bu)
});
const zt = /* @__PURE__ */ new Map();
function _u(e, t) {
  return zt.has(e) ? !1 : (zt.set(e, {
    initialDef: wt(t),
    instances: /* @__PURE__ */ new Set()
  }), !0);
}
function wt(e) {
  return Ws(e) ? e.__vccOpts : e;
}
function Nu(e, t) {
  const n = zt.get(e);
  n && (n.initialDef.render = t, [...n.instances].forEach((r) => {
    t && (r.render = t, wt(r.type).render = t), r.renderCache = [], r.update();
  }));
}
function Bu(e, t) {
  const n = zt.get(e);
  if (!n)
    return;
  t = wt(t), to(n.initialDef, t);
  const r = [...n.instances];
  for (const o of r) {
    const s = wt(o.type);
    tt.has(s) || (s !== n.initialDef && to(s, t), tt.add(s)), o.appContext.propsCache.delete(o.type), o.appContext.emitsCache.delete(o.type), o.appContext.optionsCache.delete(o.type), o.ceReload ? (tt.add(s), o.ceReload(t.styles), tt.delete(s)) : o.parent ? Cs(o.parent.update) : o.appContext.reload ? o.appContext.reload() : typeof window < "u" ? window.location.reload() : console.warn(
      "[HMR] Root or manually mounted instance modified. Full reload required."
    );
  }
  lr(() => {
    for (const o of r)
      tt.delete(
        wt(o.type)
      );
  });
}
function to(e, t) {
  fe(e, t);
  for (const n in e)
    n !== "__file" && !(n in t) && delete e[n];
}
function yn(e) {
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
function _s(e, ...t) {
}
const xu = /* @__PURE__ */ Tu(
  "component:updated"
  /* COMPONENT_UPDATED */
);
function Tu(e) {
  return (t) => {
    _s(
      e,
      t.appContext.app,
      t.uid,
      t.parent ? t.parent.uid : void 0,
      t
    );
  };
}
const Pu = /* @__PURE__ */ Ns(
  "perf:start"
  /* PERFORMANCE_START */
), Mu = /* @__PURE__ */ Ns(
  "perf:end"
  /* PERFORMANCE_END */
);
function Ns(e) {
  return (t, n, r) => {
    _s(e, t.appContext.app, t.uid, t, n, r);
  };
}
let Se = null, Bs = null;
function no(e) {
  const t = Se;
  return Se = e, Bs = e && e.type.__scopeId || null, t;
}
function Lu(e, t = Se, n) {
  if (!t || e._n)
    return e;
  const r = (...o) => {
    r._d && fo(-1);
    const s = no(t);
    let i;
    try {
      i = e(...o);
    } finally {
      no(s), r._d && fo(1);
    }
    return process.env.NODE_ENV !== "production" && xu(t), i;
  };
  return r._n = !0, r._c = !0, r._d = !0, r;
}
function Iu(e) {
  let t;
  for (let n = 0; n < e.length; n++) {
    const r = e[n];
    if (pr(r)) {
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
function xs({ vnode: e, parent: t }, n) {
  for (; t && t.subTree === e; )
    (e = t.vnode).el = n, t = t.parent;
}
const Ju = (e) => e.__isSuspense, Qu = {
  name: "Suspense",
  // In order to make Suspense tree-shakable, we need to avoid importing it
  // directly in the renderer. The renderer checks for the __isSuspense flag
  // on a vnode's type and calls the `process` method, passing in renderer
  // internals.
  __isSuspense: !0,
  process(e, t, n, r, o, s, i, a, u, f) {
    e == null ? ju(
      t,
      n,
      r,
      o,
      s,
      i,
      a,
      u,
      f
    ) : Fu(
      e,
      t,
      n,
      r,
      o,
      i,
      a,
      u,
      f
    );
  },
  hydrate: Hu,
  create: dr,
  normalize: Uu
}, qu = Qu;
function At(e, t) {
  const n = e.props && e.props[t];
  Z(n) && n();
}
function ju(e, t, n, r, o, s, i, a, u) {
  const {
    p: f,
    o: { createElement: l }
  } = u, c = l("div"), b = e.suspense = dr(
    e,
    o,
    r,
    t,
    c,
    n,
    s,
    i,
    a,
    u
  );
  f(
    null,
    b.pendingBranch = e.ssContent,
    c,
    null,
    r,
    b,
    s,
    i
  ), b.deps > 0 ? (At(e, "onPending"), At(e, "onFallback"), f(
    null,
    e.ssFallback,
    t,
    n,
    r,
    null,
    // fallback tree will not have suspense context
    s,
    i
  ), at(b, e.ssFallback)) : b.resolve(!1, !0);
}
function Fu(e, t, n, r, o, s, i, a, { p: u, um: f, o: { createElement: l } }) {
  const c = t.suspense = e.suspense;
  c.vnode = t, t.el = e.el;
  const b = t.ssContent, N = t.ssFallback, { activeBranch: R, pendingBranch: x, isInFallback: K, isHydrating: j } = c;
  if (x)
    c.pendingBranch = b, En(b, x) ? (u(
      x,
      b,
      c.hiddenContainer,
      null,
      o,
      c,
      s,
      i,
      a
    ), c.deps <= 0 ? c.resolve() : K && (u(
      R,
      N,
      n,
      r,
      o,
      null,
      // fallback tree will not have suspense context
      s,
      i,
      a
    ), at(c, N))) : (c.pendingId++, j ? (c.isHydrating = !1, c.activeBranch = x) : f(x, o, c), c.deps = 0, c.effects.length = 0, c.hiddenContainer = l("div"), K ? (u(
      null,
      b,
      c.hiddenContainer,
      null,
      o,
      c,
      s,
      i,
      a
    ), c.deps <= 0 ? c.resolve() : (u(
      R,
      N,
      n,
      r,
      o,
      null,
      // fallback tree will not have suspense context
      s,
      i,
      a
    ), at(c, N))) : R && En(b, R) ? (u(
      R,
      b,
      n,
      r,
      o,
      c,
      s,
      i,
      a
    ), c.resolve(!0)) : (u(
      null,
      b,
      c.hiddenContainer,
      null,
      o,
      c,
      s,
      i,
      a
    ), c.deps <= 0 && c.resolve()));
  else if (R && En(b, R))
    u(
      R,
      b,
      n,
      r,
      o,
      c,
      s,
      i,
      a
    ), at(c, b);
  else if (At(t, "onPending"), c.pendingBranch = b, c.pendingId++, u(
    null,
    b,
    c.hiddenContainer,
    null,
    o,
    c,
    s,
    i,
    a
  ), c.deps <= 0)
    c.resolve();
  else {
    const { timeout: I, pendingId: M } = c;
    I > 0 ? setTimeout(() => {
      c.pendingId === M && c.fallback(N);
    }, I) : I === 0 && c.fallback(N);
  }
}
let ro = !1;
function dr(e, t, n, r, o, s, i, a, u, f, l = !1) {
  process.env.NODE_ENV !== "production" && !ro && (ro = !0, console[console.info ? "info" : "log"](
    "<Suspense> is an experimental feature and its API will likely change."
  ));
  const {
    p: c,
    m: b,
    um: N,
    n: R,
    o: { parentNode: x, remove: K }
  } = f;
  let j;
  const I = zu(e);
  I && t != null && t.pendingBranch && (j = t.pendingId, t.deps++);
  const M = e.props ? Tc(e.props.timeout) : void 0;
  process.env.NODE_ENV !== "production" && Eu(M, "Suspense timeout");
  const Q = {
    vnode: e,
    parent: t,
    parentComponent: n,
    isSVG: i,
    container: r,
    hiddenContainer: o,
    anchor: s,
    deps: 0,
    pendingId: 0,
    timeout: typeof M == "number" ? M : -1,
    activeBranch: null,
    pendingBranch: null,
    isInFallback: !0,
    isHydrating: l,
    isUnmounted: !1,
    effects: [],
    resolve(E = !1, B = !1) {
      if (process.env.NODE_ENV !== "production") {
        if (!E && !Q.pendingBranch)
          throw new Error(
            "suspense.resolve() is called without a pending branch."
          );
        if (Q.isUnmounted)
          throw new Error(
            "suspense.resolve() is called on an already unmounted suspense boundary."
          );
      }
      const {
        vnode: p,
        activeBranch: w,
        pendingBranch: g,
        pendingId: y,
        effects: h,
        parentComponent: d,
        container: D
      } = Q;
      if (Q.isHydrating)
        Q.isHydrating = !1;
      else if (!E) {
        const q = w && g.transition && g.transition.mode === "out-in";
        q && (w.transition.afterLeave = () => {
          y === Q.pendingId && b(g, D, P, 0);
        });
        let { anchor: P } = Q;
        w && (P = R(w), N(w, d, Q, !0)), q || b(g, D, P, 0);
      }
      at(Q, g), Q.pendingBranch = null, Q.isInFallback = !1;
      let C = Q.parent, O = !1;
      for (; C; ) {
        if (C.pendingBranch) {
          C.effects.push(...h), O = !0;
          break;
        }
        C = C.parent;
      }
      O || lr(h), Q.effects = [], I && t && t.pendingBranch && j === t.pendingId && (t.deps--, t.deps === 0 && !B && t.resolve()), At(p, "onResolve");
    },
    fallback(E) {
      if (!Q.pendingBranch)
        return;
      const { vnode: B, activeBranch: p, parentComponent: w, container: g, isSVG: y } = Q;
      At(B, "onFallback");
      const h = R(p), d = () => {
        Q.isInFallback && (c(
          null,
          E,
          g,
          h,
          w,
          null,
          // fallback tree will not have suspense context
          y,
          a,
          u
        ), at(Q, E));
      }, D = E.transition && E.transition.mode === "out-in";
      D && (p.transition.afterLeave = d), Q.isInFallback = !0, N(
        p,
        w,
        null,
        // no suspense so unmount hooks fire now
        !0
        // shouldRemove
      ), D || d();
    },
    move(E, B, p) {
      Q.activeBranch && b(Q.activeBranch, E, B, p), Q.container = E;
    },
    next() {
      return Q.activeBranch && R(Q.activeBranch);
    },
    registerDep(E, B) {
      const p = !!Q.pendingBranch;
      p && Q.deps++;
      const w = E.vnode.el;
      E.asyncDep.catch((g) => {
        ur(g, E, 0);
      }).then((g) => {
        if (E.isUnmounted || Q.isUnmounted || Q.pendingId !== E.suspenseId)
          return;
        E.asyncResolved = !0;
        const { vnode: y } = E;
        process.env.NODE_ENV !== "production" && Es(y), _l(E, g, !1), w && (y.el = w);
        const h = !w && E.subTree.el;
        B(
          E,
          y,
          // component may have been moved before resolve.
          // if this is not a hydration, instance.subTree will be the comment
          // placeholder.
          x(w || E.subTree.el),
          // anchor will not be used if this is hydration, so only need to
          // consider the comment placeholder case.
          w ? null : R(E.subTree),
          Q,
          i,
          u
        ), h && K(h), xs(E, y.el), process.env.NODE_ENV !== "production" && Os(), p && --Q.deps === 0 && Q.resolve();
      });
    },
    unmount(E, B) {
      Q.isUnmounted = !0, Q.activeBranch && N(
        Q.activeBranch,
        n,
        E,
        B
      ), Q.pendingBranch && N(
        Q.pendingBranch,
        n,
        E,
        B
      );
    }
  };
  return Q;
}
function Hu(e, t, n, r, o, s, i, a, u) {
  const f = t.suspense = dr(
    t,
    r,
    n,
    e.parentNode,
    document.createElement("div"),
    null,
    o,
    s,
    i,
    a,
    !0
    /* hydrating */
  ), l = u(
    e,
    f.pendingBranch = t.ssContent,
    n,
    f,
    s,
    i
  );
  return f.deps === 0 && f.resolve(!1, !0), l;
}
function Uu(e) {
  const { shapeFlag: t, children: n } = e, r = t & 32;
  e.ssContent = oo(
    r ? n.default : n
  ), e.ssFallback = r ? oo(n.fallback) : Ie(ut);
}
function oo(e) {
  let t;
  if (Z(e)) {
    const n = lt && e._c;
    n && (e._d = !1, ct()), e = e(), n && (e._d = !0, t = ye, qs());
  }
  if (Y(e)) {
    const n = Iu(e);
    process.env.NODE_ENV !== "production" && !n && X("<Suspense> slots expect a single root node."), e = n;
  }
  return e = Sl(e), t && !e.dynamicChildren && (e.dynamicChildren = t.filter((n) => n !== e)), e;
}
function Ku(e, t) {
  t && t.pendingBranch ? Y(e) ? t.effects.push(...e) : t.effects.push(e) : lr(e);
}
function at(e, t) {
  e.activeBranch = t;
  const { vnode: n, parentComponent: r } = e, o = n.el = t.el;
  r && r.subTree === n && (r.vnode.el = o, xs(r, o));
}
function zu(e) {
  var t;
  return ((t = e.props) == null ? void 0 : t.suspensible) != null && e.props.suspensible !== !1;
}
const Nt = {};
function vn(e, t, n) {
  return process.env.NODE_ENV !== "production" && !Z(t) && X(
    "`watch(fn, options?)` signature has been moved to a separate API. Use `watchEffect(fn, options?)` instead. `watch` now only supports `watch(source, cb, options?) signature."
  ), Vu(e, t, n);
}
function Vu(e, t, { immediate: n, deep: r, flush: o, onTrack: s, onTrigger: i } = In) {
  var a;
  process.env.NODE_ENV !== "production" && !t && (n !== void 0 && X(
    'watch() "immediate" option is only respected when using the watch(source, callback, options?) signature.'
  ), r !== void 0 && X(
    'watch() "deep" option is only respected when using the watch(source, callback, options?) signature.'
  ));
  const u = (M) => {
    X(
      "Invalid watch source: ",
      M,
      "A watch source can only be a getter/effect function, a ref, a reactive object, or an array of these types."
    );
  }, f = qc() === ((a = ie) == null ? void 0 : a.scope) ? ie : null;
  let l, c = !1, b = !1;
  if (le(e) ? (l = () => e.value, c = Hn(e)) : Ke(e) ? (l = () => e, r = !0) : Y(e) ? (b = !0, c = e.some((M) => Ke(M) || Hn(M)), l = () => e.map((M) => {
    if (le(M))
      return M.value;
    if (Ke(M))
      return rt(M);
    if (Z(M))
      return Ve(M, f, 2);
    process.env.NODE_ENV !== "production" && u(M);
  })) : Z(e) ? t ? l = () => Ve(e, f, 2) : l = () => {
    if (!(f && f.isUnmounted))
      return N && N(), vt(
        e,
        f,
        3,
        [R]
      );
  } : (l = me, process.env.NODE_ENV !== "production" && u(e)), t && r) {
    const M = l;
    l = () => rt(M());
  }
  let N, R = (M) => {
    N = I.onStop = () => {
      Ve(M, f, 4);
    };
  }, x = b ? new Array(e.length).fill(Nt) : Nt;
  const K = () => {
    if (I.active)
      if (t) {
        const M = I.run();
        (r || c || (b ? M.some(
          (Q, E) => Ut(Q, x[E])
        ) : Ut(M, x))) && (N && N(), vt(t, f, 3, [
          M,
          // pass undefined as the old value when it's changed for the first time
          x === Nt ? void 0 : b && x[0] === Nt ? [] : x,
          R
        ]), x = M);
      } else
        I.run();
  };
  K.allowRecurse = !!t;
  let j;
  o === "sync" ? j = K : o === "post" ? j = () => lo(K, f && f.suspense) : (K.pre = !0, f && (K.id = f.uid), j = () => Cs(K));
  const I = new fs(l, j);
  return process.env.NODE_ENV !== "production" && (I.onTrack = s, I.onTrigger = i), t ? n ? K() : x = I.run() : o === "post" ? lo(
    I.run.bind(I),
    f && f.suspense
  ) : I.run(), () => {
    I.stop(), f && f.scope && ts(f.scope.effects, I);
  };
}
function Wu(e, t) {
  const n = t.split(".");
  return () => {
    let r = e;
    for (let o = 0; o < n.length && r; o++)
      r = r[n[o]];
    return r;
  };
}
function rt(e, t) {
  if (!ee(e) || e.__v_skip || (t = t || /* @__PURE__ */ new Set(), t.has(e)))
    return e;
  if (t.add(e), le(e))
    rt(e.value, t);
  else if (Y(e))
    for (let n = 0; n < e.length; n++)
      rt(e[n], t);
  else if (ns(e) || He(e))
    e.forEach((n) => {
      rt(n, t);
    });
  else if (ss(e))
    for (const n in e)
      rt(e[n], t);
  return e;
}
function Ts(e, t) {
  return Z(e) ? (
    // #8326: extend call and options.name access are considered side-effects
    // by Rollup, so we have to wrap it in a pure-annotated IIFE.
    /* @__PURE__ */ (() => fe({ name: e.name }, t, { setup: e }))()
  ) : e;
}
const Xu = (e) => e.type.__isKeepAlive;
function Yu(e, t) {
  Ps(e, "a", t);
}
function Zu(e, t) {
  Ps(e, "da", t);
}
function Ps(e, t, n = ie) {
  const r = e.__wdc || (e.__wdc = () => {
    let o = n;
    for (; o; ) {
      if (o.isDeactivated)
        return;
      o = o.parent;
    }
    return e();
  });
  if (ln(t, r, n), n) {
    let o = n.parent;
    for (; o && o.parent; )
      Xu(o.parent.vnode) && Gu(r, t, n, o), o = o.parent;
  }
}
function Gu(e, t, n, r) {
  const o = ln(
    t,
    e,
    r,
    !0
    /* prepend */
  );
  Ms(() => {
    ts(r[t], o);
  }, n);
}
function ln(e, t, n = ie, r = !1) {
  if (n) {
    const o = n[e] || (n[e] = []), s = t.__weh || (t.__weh = (...i) => {
      if (n.isUnmounted)
        return;
      an(), Yt(n);
      const a = vt(t, n, e, i);
      return wr(), cn(), a;
    });
    return r ? o.unshift(s) : o.push(s), s;
  } else if (process.env.NODE_ENV !== "production") {
    const o = xc(cr[e].replace(/ hook$/, ""));
    X(
      `${o} is called when there is no active component instance to be associated with. Lifecycle injection APIs can only be used during execution of setup(). If you are using async setup(), make sure to register lifecycle hooks before the first await statement.`
    );
  }
}
const Ne = (e) => (t, n = ie) => (
  // post-create lifecycle registrations are noops during SSR (except for serverPrefetch)
  ln(e, (...r) => t(...r), n)
), $u = Ne("bm"), el = Ne("m"), tl = Ne("bu"), nl = Ne("u"), rl = Ne("bum"), Ms = Ne("um"), ol = Ne("sp"), sl = Ne(
  "rtg"
), il = Ne(
  "rtc"
);
function al(e, t = ie) {
  ln("ec", e, t);
}
const cl = Symbol.for("v-ndc"), Ls = (e) => e === "_" || e === "$";
process.env.NODE_ENV;
function ul(e) {
  const { ctx: t, setupState: n } = e;
  Object.keys(W(n)).forEach((r) => {
    if (!n.__isScriptSetup) {
      if (Ls(r[0])) {
        X(
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
        set: me
      });
    }
  });
}
function so(e) {
  return Y(e) ? e.reduce(
    (t, n) => (t[n] = null, t),
    {}
  ) : e;
}
function ll(e) {
  const t = kl();
  process.env.NODE_ENV !== "production" && !t && X(
    "withAsyncContext called without active current instance. This is likely a bug."
  );
  let n = e();
  return wr(), tr(n) && (n = n.catch((r) => {
    throw Yt(t), r;
  })), [n, () => Yt(t)];
}
function dl() {
  const e = /* @__PURE__ */ Object.create(null);
  return (t, n) => {
    e[n] ? X(`${t} property "${n}" is already defined in ${e[n]}.`) : e[n] = t;
  };
}
function fl(e) {
  const t = Js(e), n = e.proxy, r = e.ctx;
  t.beforeCreate && io(t.beforeCreate, e, "bc");
  const {
    // state
    data: o,
    computed: s,
    methods: i,
    watch: a,
    provide: u,
    inject: f,
    // lifecycle
    created: l,
    beforeMount: c,
    mounted: b,
    beforeUpdate: N,
    updated: R,
    activated: x,
    deactivated: K,
    beforeDestroy: j,
    beforeUnmount: I,
    destroyed: M,
    unmounted: Q,
    render: E,
    renderTracked: B,
    renderTriggered: p,
    errorCaptured: w,
    serverPrefetch: g,
    // public API
    expose: y,
    inheritAttrs: h,
    // assets
    components: d,
    directives: D,
    filters: C
  } = t, O = process.env.NODE_ENV !== "production" ? dl() : null;
  if (process.env.NODE_ENV !== "production") {
    const [P] = e.propsOptions;
    if (P)
      for (const T in P)
        O("Props", T);
  }
  if (f && pl(f, r, O), i)
    for (const P in i) {
      const T = i[P];
      Z(T) ? (process.env.NODE_ENV !== "production" ? Object.defineProperty(r, P, {
        value: T.bind(n),
        configurable: !0,
        enumerable: !0,
        writable: !0
      }) : r[P] = T.bind(n), process.env.NODE_ENV !== "production" && O("Methods", P)) : process.env.NODE_ENV !== "production" && X(
        `Method "${P}" has type "${typeof T}" in the component definition. Did you reference the function correctly?`
      );
    }
  if (o) {
    process.env.NODE_ENV !== "production" && !Z(o) && X(
      "The data option must be a function. Plain object usage is no longer supported."
    );
    const P = o.call(n, n);
    if (process.env.NODE_ENV !== "production" && tr(P) && X(
      "data() returned a Promise - note data() cannot be async; If you intend to perform data fetching before component renders, use async setup() + <Suspense>."
    ), !ee(P))
      process.env.NODE_ENV !== "production" && X("data() should return an object.");
    else if (e.data = sr(P), process.env.NODE_ENV !== "production")
      for (const T in P)
        O("Data", T), Ls(T[0]) || Object.defineProperty(r, T, {
          configurable: !0,
          enumerable: !0,
          get: () => P[T],
          set: me
        });
  }
  if (s)
    for (const P in s) {
      const T = s[P], J = Z(T) ? T.bind(n, n) : Z(T.get) ? T.get.bind(n, n) : me;
      process.env.NODE_ENV !== "production" && J === me && X(`Computed property "${P}" has no getter.`);
      const H = !Z(T) && Z(T.set) ? T.set.bind(n) : process.env.NODE_ENV !== "production" ? () => {
        X(
          `Write operation failed: computed property "${P}" is readonly.`
        );
      } : me, $ = Tl({
        get: J,
        set: H
      });
      Object.defineProperty(r, P, {
        enumerable: !0,
        configurable: !0,
        get: () => $.value,
        set: (de) => $.value = de
      }), process.env.NODE_ENV !== "production" && O("Computed", P);
    }
  if (a)
    for (const P in a)
      Is(a[P], r, n, P);
  if (u) {
    const P = Z(u) ? u.call(n) : u;
    Reflect.ownKeys(P).forEach((T) => {
      ml(T, P[T]);
    });
  }
  l && io(l, e, "c");
  function q(P, T) {
    Y(T) ? T.forEach((J) => P(J.bind(n))) : T && P(T.bind(n));
  }
  if (q($u, c), q(el, b), q(tl, N), q(nl, R), q(Yu, x), q(Zu, K), q(al, w), q(il, B), q(sl, p), q(rl, I), q(Ms, Q), q(ol, g), Y(y))
    if (y.length) {
      const P = e.exposed || (e.exposed = {});
      y.forEach((T) => {
        Object.defineProperty(P, T, {
          get: () => n[T],
          set: (J) => n[T] = J
        });
      });
    } else
      e.exposed || (e.exposed = {});
  E && e.render === me && (e.render = E), h != null && (e.inheritAttrs = h), d && (e.components = d), D && (e.directives = D);
}
function pl(e, t, n = me) {
  Y(e) && (e = zn(e));
  for (const r in e) {
    const o = e[r];
    let s;
    ee(o) ? "default" in o ? s = bn(
      o.from || r,
      o.default,
      !0
      /* treat default function as factory */
    ) : s = bn(o.from || r) : s = bn(o), le(s) ? Object.defineProperty(t, r, {
      enumerable: !0,
      configurable: !0,
      get: () => s.value,
      set: (i) => s.value = i
    }) : t[r] = s, process.env.NODE_ENV !== "production" && n("Inject", r);
  }
}
function io(e, t, n) {
  vt(
    Y(e) ? e.map((r) => r.bind(t.proxy)) : e.bind(t.proxy),
    t,
    n
  );
}
function Is(e, t, n, r) {
  const o = r.includes(".") ? Wu(n, r) : () => n[r];
  if (be(e)) {
    const s = t[e];
    Z(s) ? vn(o, s) : process.env.NODE_ENV !== "production" && X(`Invalid watch handler specified by key "${e}"`, s);
  } else if (Z(e))
    vn(o, e.bind(n));
  else if (ee(e))
    if (Y(e))
      e.forEach((s) => Is(s, t, n, r));
    else {
      const s = Z(e.handler) ? e.handler.bind(n) : t[e.handler];
      Z(s) ? vn(o, s, e) : process.env.NODE_ENV !== "production" && X(`Invalid watch handler specified by key "${e.handler}"`, s);
    }
  else
    process.env.NODE_ENV !== "production" && X(`Invalid watch option: "${r}"`, e);
}
function Js(e) {
  const t = e.type, { mixins: n, extends: r } = t, {
    mixins: o,
    optionsCache: s,
    config: { optionMergeStrategies: i }
  } = e.appContext, a = s.get(t);
  let u;
  return a ? u = a : !o.length && !n && !r ? u = t : (u = {}, o.length && o.forEach(
    (f) => Vt(u, f, i, !0)
  ), Vt(u, t, i)), ee(t) && s.set(t, u), u;
}
function Vt(e, t, n, r = !1) {
  const { mixins: o, extends: s } = t;
  s && Vt(e, s, n, !0), o && o.forEach(
    (i) => Vt(e, i, n, !0)
  );
  for (const i in t)
    if (r && i === "expose")
      process.env.NODE_ENV !== "production" && X(
        '"expose" option is ignored when declared in mixins or extends. It should only be declared in the base component itself.'
      );
    else {
      const a = hl[i] || n && n[i];
      e[i] = a ? a(e[i], t[i]) : t[i];
    }
  return e;
}
const hl = {
  data: ao,
  props: co,
  emits: co,
  // objects
  methods: gt,
  computed: gt,
  // lifecycle
  beforeCreate: ae,
  created: ae,
  beforeMount: ae,
  mounted: ae,
  beforeUpdate: ae,
  updated: ae,
  beforeDestroy: ae,
  beforeUnmount: ae,
  destroyed: ae,
  unmounted: ae,
  activated: ae,
  deactivated: ae,
  errorCaptured: ae,
  serverPrefetch: ae,
  // assets
  components: gt,
  directives: gt,
  // watch
  watch: wl,
  // provide / inject
  provide: ao,
  inject: gl
};
function ao(e, t) {
  return t ? e ? function() {
    return fe(
      Z(e) ? e.call(this, this) : e,
      Z(t) ? t.call(this, this) : t
    );
  } : t : e;
}
function gl(e, t) {
  return gt(zn(e), zn(t));
}
function zn(e) {
  if (Y(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++)
      t[e[n]] = e[n];
    return t;
  }
  return e;
}
function ae(e, t) {
  return e ? [...new Set([].concat(e, t))] : t;
}
function gt(e, t) {
  return e ? fe(/* @__PURE__ */ Object.create(null), e, t) : t;
}
function co(e, t) {
  return e ? Y(e) && Y(t) ? [.../* @__PURE__ */ new Set([...e, ...t])] : fe(
    /* @__PURE__ */ Object.create(null),
    so(e),
    so(t ?? {})
  ) : t;
}
function wl(e, t) {
  if (!e)
    return t;
  if (!t)
    return e;
  const n = fe(/* @__PURE__ */ Object.create(null), e);
  for (const r in t)
    n[r] = ae(e[r], t[r]);
  return n;
}
let uo = null;
function ml(e, t) {
  if (!ie)
    process.env.NODE_ENV !== "production" && X("provide() can only be used inside setup().");
  else {
    let n = ie.provides;
    const r = ie.parent && ie.parent.provides;
    r === n && (n = ie.provides = Object.create(r)), n[e] = t;
  }
}
function bn(e, t, n = !1) {
  const r = ie || Se;
  if (r || uo) {
    const o = r ? r.parent == null ? r.vnode.appContext && r.vnode.appContext.provides : r.parent.provides : uo._context.provides;
    if (o && e in o)
      return o[e];
    if (arguments.length > 1)
      return n && Z(t) ? t.call(r && r.proxy) : t;
    process.env.NODE_ENV !== "production" && X(`injection "${String(e)}" not found.`);
  } else
    process.env.NODE_ENV !== "production" && X("inject() can only be used inside setup() or functional components.");
}
let Bt, Me;
function yl(e, t) {
  e.appContext.config.performance && Wt() && Me.mark(`vue-${t}-${e.uid}`), process.env.NODE_ENV !== "production" && Pu(e, t, Wt() ? Me.now() : Date.now());
}
function vl(e, t) {
  if (e.appContext.config.performance && Wt()) {
    const n = `vue-${t}-${e.uid}`, r = n + ":end";
    Me.mark(r), Me.measure(
      `<${mr(e, e.type)}> ${t}`,
      n,
      r
    ), Me.clearMarks(n), Me.clearMarks(r);
  }
  process.env.NODE_ENV !== "production" && Mu(e, t, Wt() ? Me.now() : Date.now());
}
function Wt() {
  return Bt !== void 0 || (typeof window < "u" && window.performance ? (Bt = !0, Me = window.performance) : Bt = !1), Bt;
}
const lo = Ku, bl = (e) => e.__isTeleport, fr = Symbol.for("v-fgt"), Qs = Symbol.for("v-txt"), ut = Symbol.for("v-cmt"), Jt = [];
let ye = null;
function ct(e = !1) {
  Jt.push(ye = e ? null : []);
}
function qs() {
  Jt.pop(), ye = Jt[Jt.length - 1] || null;
}
let lt = 1;
function fo(e) {
  lt += e;
}
function js(e) {
  return e.dynamicChildren = lt > 0 ? ye || Rc : null, qs(), lt > 0 && ye && ye.push(e), e;
}
function An(e, t, n, r, o, s) {
  return js(
    Xt(
      e,
      t,
      n,
      r,
      o,
      s,
      !0
      /* isBlock */
    )
  );
}
function Fs(e, t, n, r, o) {
  return js(
    Ie(
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
function pr(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
function En(e, t) {
  return process.env.NODE_ENV !== "production" && t.shapeFlag & 6 && tt.has(t.type) ? (e.shapeFlag &= -257, t.shapeFlag &= -513, !1) : e.type === t.type && e.key === t.key;
}
const Al = (...e) => Ks(
  ...e
), Hs = "__vInternal", Us = ({ key: e }) => e ?? null, Qt = ({
  ref: e,
  ref_key: t,
  ref_for: n
}) => (typeof e == "number" && (e = "" + e), e != null ? be(e) || le(e) || Z(e) ? { i: Se, r: e, k: t, f: !!n } : e : null);
function Xt(e, t = null, n = null, r = 0, o = null, s = e === fr ? 0 : 1, i = !1, a = !1) {
  const u = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && Us(t),
    ref: t && Qt(t),
    scopeId: Bs,
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
    shapeFlag: s,
    patchFlag: r,
    dynamicProps: o,
    dynamicChildren: null,
    appContext: null,
    ctx: Se
  };
  return a ? (hr(u, n), s & 128 && e.normalize(u)) : n && (u.shapeFlag |= be(n) ? 8 : 16), process.env.NODE_ENV !== "production" && u.key !== u.key && X("VNode created with invalid key (NaN). VNode type:", u.type), lt > 0 && // avoid a block node from tracking itself
  !i && // has current parent block
  ye && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (u.patchFlag > 0 || s & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  u.patchFlag !== 32 && ye.push(u), u;
}
const Ie = process.env.NODE_ENV !== "production" ? Al : Ks;
function Ks(e, t = null, n = null, r = 0, o = null, s = !1) {
  if ((!e || e === cl) && (process.env.NODE_ENV !== "production" && !e && X(`Invalid vnode type when creating vnode: ${e}.`), e = ut), pr(e)) {
    const a = Et(
      e,
      t,
      !0
      /* mergeRef: true */
    );
    return n && hr(a, n), lt > 0 && !s && ye && (a.shapeFlag & 6 ? ye[ye.indexOf(e)] = a : ye.push(a)), a.patchFlag |= -2, a;
  }
  if (Ws(e) && (e = e.__vccOpts), t) {
    t = El(t);
    let { class: a, style: u } = t;
    a && !be(a) && (t.class = st(a)), ee(u) && (Un(u) && !Y(u) && (u = fe({}, u)), t.style = rr(u));
  }
  const i = be(e) ? 1 : Ju(e) ? 128 : bl(e) ? 64 : ee(e) ? 4 : Z(e) ? 2 : 0;
  return process.env.NODE_ENV !== "production" && i & 4 && Un(e) && (e = W(e), X(
    "Vue received a Component which was made a reactive object. This can lead to unnecessary performance overhead, and should be avoided by marking the component with `markRaw` or using `shallowRef` instead of `ref`.",
    `
Component that was made reactive: `,
    e
  )), Xt(
    e,
    t,
    n,
    r,
    o,
    i,
    s,
    !0
  );
}
function El(e) {
  return e ? Un(e) || Hs in e ? fe({}, e) : e : null;
}
function Et(e, t, n = !1) {
  const { props: r, ref: o, patchFlag: s, children: i } = e, a = t ? Dl(r || {}, t) : r;
  return {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: a,
    key: a && Us(a),
    ref: t && t.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      n && o ? Y(o) ? o.concat(Qt(t)) : [o, Qt(t)] : Qt(t)
    ) : o,
    scopeId: e.scopeId,
    slotScopeIds: e.slotScopeIds,
    children: process.env.NODE_ENV !== "production" && s === -1 && Y(i) ? i.map(zs) : i,
    target: e.target,
    targetAnchor: e.targetAnchor,
    staticCount: e.staticCount,
    shapeFlag: e.shapeFlag,
    // if the vnode is cloned with extra props, we can no longer assume its
    // existing patch flag to be reliable and need to add the FULL_PROPS flag.
    // note: preserve flag for fragments since they use the flag for children
    // fast paths only.
    patchFlag: t && e.type !== fr ? s === -1 ? 16 : s | 16 : s,
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
    ssContent: e.ssContent && Et(e.ssContent),
    ssFallback: e.ssFallback && Et(e.ssFallback),
    el: e.el,
    anchor: e.anchor,
    ctx: e.ctx,
    ce: e.ce
  };
}
function zs(e) {
  const t = Et(e);
  return Y(e.children) && (t.children = e.children.map(zs)), t;
}
function Ol(e = " ", t = 0) {
  return Ie(Qs, null, e, t);
}
function po(e = "", t = !1) {
  return t ? (ct(), Fs(ut, null, e)) : Ie(ut, null, e);
}
function Sl(e) {
  return e == null || typeof e == "boolean" ? Ie(ut) : Y(e) ? Ie(
    fr,
    null,
    // #3666, avoid reference pollution when reusing vnode
    e.slice()
  ) : typeof e == "object" ? Cl(e) : Ie(Qs, null, String(e));
}
function Cl(e) {
  return e.el === null && e.patchFlag !== -1 || e.memo ? e : Et(e);
}
function hr(e, t) {
  let n = 0;
  const { shapeFlag: r } = e;
  if (t == null)
    t = null;
  else if (Y(t))
    n = 16;
  else if (typeof t == "object")
    if (r & 65) {
      const o = t.default;
      o && (o._c && (o._d = !1), hr(e, o()), o._c && (o._d = !0));
      return;
    } else {
      n = 32;
      const o = t._;
      !o && !(Hs in t) ? t._ctx = Se : o === 3 && Se && (Se.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
    }
  else
    Z(t) ? (t = { default: t, _ctx: Se }, n = 32) : (t = String(t), r & 64 ? (n = 16, t = [Ol(t)]) : n = 8);
  e.children = t, e.shapeFlag |= n;
}
function Dl(...e) {
  const t = {};
  for (let n = 0; n < e.length; n++) {
    const r = e[n];
    for (const o in r)
      if (o === "class")
        t.class !== r.class && (t.class = st([t.class, r.class]));
      else if (o === "style")
        t.style = rr([t.style, r.style]);
      else if (Nc(o)) {
        const s = t[o], i = r[o];
        i && s !== i && !(Y(s) && s.includes(i)) && (t[o] = s ? [].concat(s, i) : i);
      } else
        o !== "" && (t[o] = r[o]);
  }
  return t;
}
let ie = null;
const kl = () => ie || Se;
let gr, Ge, ho = "__VUE_INSTANCE_SETTERS__";
(Ge = Jn()[ho]) || (Ge = Jn()[ho] = []), Ge.push((e) => ie = e), gr = (e) => {
  Ge.length > 1 ? Ge.forEach((t) => t(e)) : Ge[0](e);
};
const Yt = (e) => {
  gr(e), e.scope.on();
}, wr = () => {
  ie && ie.scope.off(), gr(null);
};
let Rl = !1;
function _l(e, t, n) {
  Z(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : ee(t) ? (process.env.NODE_ENV !== "production" && pr(t) && X(
    "setup() should not return VNodes directly - return a render function instead."
  ), process.env.NODE_ENV !== "production" && (e.devtoolsRawSetupState = t), e.setupState = gu(t), process.env.NODE_ENV !== "production" && ul(e)) : process.env.NODE_ENV !== "production" && t !== void 0 && X(
    `setup() should return an object. Received: ${t === null ? "null" : typeof t}`
  ), Nl(e, n);
}
let go;
function Nl(e, t, n) {
  const r = e.type;
  if (!e.render) {
    if (!t && go && !r.render) {
      const o = r.template || Js(e).template;
      if (o) {
        process.env.NODE_ENV !== "production" && yl(e, "compile");
        const { isCustomElement: s, compilerOptions: i } = e.appContext.config, { delimiters: a, compilerOptions: u } = r, f = fe(
          fe(
            {
              isCustomElement: s,
              delimiters: a
            },
            i
          ),
          u
        );
        r.render = go(o, f), process.env.NODE_ENV !== "production" && vl(e, "compile");
      }
    }
    e.render = r.render || me;
  }
  Yt(e), an(), fl(e), cn(), wr(), process.env.NODE_ENV !== "production" && !r.render && e.render === me && !t && (r.template ? X(
    'Component provided template option but runtime compilation is not supported in this build of Vue. Configure your bundler to alias "vue" to "vue/dist/vue.esm-bundler.js".'
    /* should not happen */
  ) : X("Component is missing template or render function."));
}
const Bl = /(?:^|[-_])(\w)/g, xl = (e) => e.replace(Bl, (t) => t.toUpperCase()).replace(/[-_]/g, "");
function Vs(e, t = !0) {
  return Z(e) ? e.displayName || e.name : e.name || t && e.__name;
}
function mr(e, t, n = !1) {
  let r = Vs(t);
  if (!r && t.__file) {
    const o = t.__file.match(/([^/\\]+)\.\w+$/);
    o && (r = o[1]);
  }
  if (!r && e && e.parent) {
    const o = (s) => {
      for (const i in s)
        if (s[i] === t)
          return i;
    };
    r = o(
      e.components || e.parent.type.components
    ) || o(e.appContext.components);
  }
  return r ? xl(r) : n ? "App" : "Anonymous";
}
function Ws(e) {
  return Z(e) && "__vccOpts" in e;
}
const Tl = (e, t) => mu(e, t, Rl);
function On(e) {
  return !!(e && e.__v_isShallow);
}
function Pl() {
  if (process.env.NODE_ENV === "production" || typeof window > "u")
    return;
  const e = { style: "color:#3ba776" }, t = { style: "color:#0b1bc9" }, n = { style: "color:#b62e24" }, r = { style: "color:#9d288c" }, o = {
    header(c) {
      return ee(c) ? c.__isVue ? ["div", e, "VueInstance"] : le(c) ? [
        "div",
        {},
        ["span", e, l(c)],
        "<",
        a(c.value),
        ">"
      ] : Ke(c) ? [
        "div",
        {},
        ["span", e, On(c) ? "ShallowReactive" : "Reactive"],
        "<",
        a(c),
        `>${Xe(c) ? " (readonly)" : ""}`
      ] : Xe(c) ? [
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
          ...s(c.$)
        ];
    }
  };
  function s(c) {
    const b = [];
    c.type.props && c.props && b.push(i("props", W(c.props))), c.setupState !== In && b.push(i("setup", c.setupState)), c.data !== In && b.push(i("data", W(c.data)));
    const N = u(c, "computed");
    N && b.push(i("computed", N));
    const R = u(c, "inject");
    return R && b.push(i("injected", R)), b.push([
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
  function i(c, b) {
    return b = fe({}, b), Object.keys(b).length ? [
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
        ...Object.keys(b).map((N) => [
          "div",
          {},
          ["span", r, N + ": "],
          a(b[N], !1)
        ])
      ]
    ] : ["span", {}];
  }
  function a(c, b = !0) {
    return typeof c == "number" ? ["span", t, c] : typeof c == "string" ? ["span", n, JSON.stringify(c)] : typeof c == "boolean" ? ["span", r, c] : ee(c) ? ["object", { object: b ? W(c) : c }] : ["span", n, String(c)];
  }
  function u(c, b) {
    const N = c.type;
    if (Z(N))
      return;
    const R = {};
    for (const x in c.ctx)
      f(N, x, b) && (R[x] = c.ctx[x]);
    return R;
  }
  function f(c, b, N) {
    const R = c[N];
    if (Y(R) && R.includes(b) || ee(R) && b in R || c.extends && f(c.extends, b, N) || c.mixins && c.mixins.some((x) => f(x, b, N)))
      return !0;
  }
  function l(c) {
    return On(c) ? "ShallowRef" : c.effect ? "ComputedRef" : "Ref";
  }
  window.devtoolsFormatters ? window.devtoolsFormatters.push(o) : window.devtoolsFormatters = [o];
}
function Ml() {
  Pl();
}
process.env.NODE_ENV !== "production" && Ml();
const Sn = {
  numeric: "Numeric",
  alphanumeric: "Alphanumeric",
  byte: "Byte",
  kanji: "Kanji"
};
function Ll(e) {
  switch (!0) {
    case /^[0-9]*$/.test(e):
      return Sn.numeric;
    case /^[0-9A-Z $%*+\-./:]*$/.test(e):
      return Sn.alphanumeric;
    default:
      return Sn.byte;
  }
}
const xt = (e) => !!e && typeof e == "object" && !Array.isArray(e);
function Zt(e, ...t) {
  if (!t.length)
    return e;
  const n = t.shift();
  return n === void 0 || !xt(e) || !xt(n) ? e : (e = { ...e }, Object.keys(n).forEach((r) => {
    const o = e[r], s = n[r];
    Array.isArray(o) && Array.isArray(s) ? e[r] = s : xt(o) && xt(s) ? e[r] = Zt(Object.assign({}, o), s) : e[r] = s;
  }), Zt(e, ...t));
}
function Il(e, t) {
  const n = document.createElement("a");
  n.download = t, n.href = e, document.body.appendChild(n), n.click(), document.body.removeChild(n);
}
function Jl({
  originalHeight: e,
  originalWidth: t,
  maxHiddenDots: n,
  maxHiddenAxisDots: r,
  dotSize: o
}) {
  const s = { x: 0, y: 0 }, i = { x: 0, y: 0 };
  if (e <= 0 || t <= 0 || n <= 0 || o <= 0)
    return {
      height: 0,
      width: 0,
      hideYDots: 0,
      hideXDots: 0
    };
  const a = e / t;
  return s.x = Math.floor(Math.sqrt(n / a)), s.x <= 0 && (s.x = 1), r && r < s.x && (s.x = r), s.x % 2 === 0 && s.x--, i.x = s.x * o, s.y = 1 + 2 * Math.ceil((s.x * a - 1) / 2), i.y = Math.round(i.x * a), (s.y * s.x > n || r && r < s.y) && (r && r < s.y ? (s.y = r, s.y % 2 === 0 && s.x--) : s.y -= 2, i.y = s.y * o, s.x = 1 + 2 * Math.ceil((s.y / a - 1) / 2), i.x = Math.round(i.y / a)), {
    height: i.y,
    width: i.x,
    hideYDots: s.y,
    hideXDots: s.x
  };
}
const Ql = {
  L: 0.07,
  M: 0.15,
  Q: 0.25,
  H: 0.3
}, $e = {
  dots: "dots",
  rounded: "rounded",
  classy: "classy",
  classyRounded: "classy-rounded",
  square: "square",
  extraRounded: "extra-rounded"
};
class Cn {
  constructor({ context: t, type: n }) {
    ue(this, "_context"), ue(this, "_type"), this._context = t, this._type = n;
  }
  draw(t, n, r, o) {
    const s = this._context, i = this._type;
    let a;
    switch (i) {
      case $e.dots:
        a = this._drawDot;
        break;
      case $e.classy:
        a = this._drawClassy;
        break;
      case $e.classyRounded:
        a = this._drawClassyRounded;
        break;
      case $e.rounded:
        a = this._drawRounded;
        break;
      case $e.extraRounded:
        a = this._drawExtraRounded;
        break;
      case $e.square:
      default:
        a = this._drawSquare;
    }
    a.call(this, { x: t, y: n, size: r, context: s, getNeighbor: o });
  }
  _rotateFigure({ x: t, y: n, size: r, context: o, rotation: s, draw: i }) {
    const a = t + r / 2, u = n + r / 2;
    o.translate(a, u), s && o.rotate(s), i(), o.closePath(), s && o.rotate(-s), o.translate(-a, -u);
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
  _drawRounded({ x: t, y: n, size: r, context: o, getNeighbor: s }) {
    const i = +s(-1, 0), a = +s(1, 0), u = +s(0, -1), f = +s(0, 1), l = i + a + u + f;
    if (l === 0) {
      this._basicDot({ x: t, y: n, size: r, context: o, rotation: 0 });
      return;
    }
    if (l > 2 || i && a || u && f) {
      this._basicSquare({ x: t, y: n, size: r, context: o, rotation: 0 });
      return;
    }
    if (l === 2) {
      let c = 0;
      i && u ? c = Math.PI / 2 : u && a ? c = Math.PI : a && f && (c = -Math.PI / 2), this._basicCornerRounded({ x: t, y: n, size: r, context: o, rotation: c });
      return;
    }
    if (l === 1) {
      let c = 0;
      u ? c = Math.PI / 2 : a ? c = Math.PI : f && (c = -Math.PI / 2), this._basicSideRounded({ x: t, y: n, size: r, context: o, rotation: c });
    }
  }
  _drawExtraRounded({ x: t, y: n, size: r, context: o, getNeighbor: s }) {
    const i = +s(-1, 0), a = +s(1, 0), u = +s(0, -1), f = +s(0, 1), l = i + a + u + f;
    if (l === 0) {
      this._basicDot({ x: t, y: n, size: r, context: o, rotation: 0 });
      return;
    }
    if (l > 2 || i && a || u && f) {
      this._basicSquare({ x: t, y: n, size: r, context: o, rotation: 0 });
      return;
    }
    if (l === 2) {
      let c = 0;
      i && u ? c = Math.PI / 2 : u && a ? c = Math.PI : a && f && (c = -Math.PI / 2), this._basicCornerExtraRounded({ x: t, y: n, size: r, context: o, rotation: c });
      return;
    }
    if (l === 1) {
      let c = 0;
      u ? c = Math.PI / 2 : a ? c = Math.PI : f && (c = -Math.PI / 2), this._basicSideRounded({ x: t, y: n, size: r, context: o, rotation: c });
    }
  }
  _drawClassy({ x: t, y: n, size: r, context: o, getNeighbor: s }) {
    const i = +s(-1, 0), a = +s(1, 0), u = +s(0, -1), f = +s(0, 1);
    if (i + a + u + f === 0) {
      this._basicCornersRounded({ x: t, y: n, size: r, context: o, rotation: Math.PI / 2 });
      return;
    }
    if (!i && !u) {
      this._basicCornerRounded({ x: t, y: n, size: r, context: o, rotation: -Math.PI / 2 });
      return;
    }
    if (!a && !f) {
      this._basicCornerRounded({ x: t, y: n, size: r, context: o, rotation: Math.PI / 2 });
      return;
    }
    this._basicSquare({ x: t, y: n, size: r, context: o, rotation: 0 });
  }
  _drawClassyRounded({ x: t, y: n, size: r, context: o, getNeighbor: s }) {
    const i = +s(-1, 0), a = +s(1, 0), u = +s(0, -1), f = +s(0, 1);
    if (i + a + u + f === 0) {
      this._basicCornersRounded({ x: t, y: n, size: r, context: o, rotation: Math.PI / 2 });
      return;
    }
    if (!i && !u) {
      this._basicCornerExtraRounded({ x: t, y: n, size: r, context: o, rotation: -Math.PI / 2 });
      return;
    }
    if (!a && !f) {
      this._basicCornerExtraRounded({ x: t, y: n, size: r, context: o, rotation: Math.PI / 2 });
      return;
    }
    this._basicSquare({ x: t, y: n, size: r, context: o, rotation: 0 });
  }
}
const Dn = {
  dot: "dot",
  square: "square",
  extraRounded: "extra-rounded"
};
class ql {
  constructor({ context: t, type: n }) {
    ue(this, "_context"), ue(this, "_type"), this._context = t, this._type = n;
  }
  draw(t, n, r, o) {
    const s = this._context, i = this._type;
    let a;
    switch (i) {
      case Dn.square:
        a = this._drawSquare;
        break;
      case Dn.extraRounded:
        a = this._drawExtraRounded;
        break;
      case Dn.dot:
      default:
        a = this._drawDot;
    }
    a.call(this, { x: t, y: n, size: r, context: s, rotation: o });
  }
  _rotateFigure({ x: t, y: n, size: r, context: o, rotation: s, draw: i }) {
    const a = t + r / 2, u = n + r / 2;
    o.translate(a, u), s && o.rotate(s), i(), o.closePath(), s && o.rotate(-s), o.translate(-a, -u);
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
  _drawDot({ x: t, y: n, size: r, context: o, rotation: s }) {
    this._basicDot({ x: t, y: n, size: r, context: o, rotation: s });
  }
  _drawSquare({ x: t, y: n, size: r, context: o, rotation: s }) {
    this._basicSquare({ x: t, y: n, size: r, context: o, rotation: s });
  }
  _drawExtraRounded({ x: t, y: n, size: r, context: o, rotation: s }) {
    this._basicExtraRounded({ x: t, y: n, size: r, context: o, rotation: s });
  }
}
const wo = {
  dot: "dot",
  square: "square"
};
class jl {
  constructor({ context: t, type: n }) {
    ue(this, "_context"), ue(this, "_type"), this._context = t, this._type = n;
  }
  draw(t, n, r, o) {
    const s = this._context;
    switch (this._type) {
      case wo.square:
        this._drawSquare({ x: t, y: n, size: r, context: s, rotation: o });
        break;
      case wo.dot:
      default:
        this._drawDot({ x: t, y: n, size: r, context: s, rotation: o });
    }
  }
  _rotateFigure({ x: t, y: n, size: r, context: o, rotation: s, draw: i }) {
    const a = t + r / 2, u = n + r / 2;
    o.moveTo(0, 0), o.translate(a, u), s && o.rotate(s), i(), o.closePath(), s && o.rotate(-s), o.translate(-a, -u);
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
const Fl = {
  radial: "radial",
  linear: "linear"
}, je = [
  [1, 1, 1, 1, 1, 1, 1],
  [1, 0, 0, 0, 0, 0, 1],
  [1, 0, 0, 0, 0, 0, 1],
  [1, 0, 0, 0, 0, 0, 1],
  [1, 0, 0, 0, 0, 0, 1],
  [1, 0, 0, 0, 0, 0, 1],
  [1, 1, 1, 1, 1, 1, 1]
], Fe = [
  [0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0],
  [0, 0, 1, 1, 1, 0, 0],
  [0, 0, 1, 1, 1, 0, 0],
  [0, 0, 1, 1, 1, 0, 0],
  [0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0]
];
class Hl {
  // TODO don't pass all options to this class
  constructor(t) {
    ue(this, "_canvas"), ue(this, "_options"), ue(this, "_qr"), ue(this, "_image"), this._canvas = document.createElement("canvas"), this._canvas.width = t.width, this._canvas.height = t.height, this._options = t;
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
    let s = {
      hideXDots: 0,
      hideYDots: 0,
      width: 0,
      height: 0
    };
    if (this._qr = t, this._options.image) {
      if (await this.loadImage(), !this._image)
        return;
      const { imageOptions: i, qrOptions: a } = this._options, u = i.imageSize * Ql[a.errorCorrectionLevel], f = Math.floor(u * n * n);
      s = Jl({
        originalWidth: this._image.width,
        originalHeight: this._image.height,
        maxHiddenDots: f,
        maxHiddenAxisDots: n - 14,
        dotSize: o
      });
    }
    this.clear(), this.drawBackground(), this.drawDots((i, a) => {
      var u, f, l, c, b, N;
      return !(this._options.imageOptions.hideBackgroundDots && i >= (n - s.hideXDots) / 2 && i < (n + s.hideXDots) / 2 && a >= (n - s.hideYDots) / 2 && a < (n + s.hideYDots) / 2 || (u = je[i]) != null && u[a] || (f = je[i - n + 7]) != null && f[a] || (l = je[i]) != null && l[a - n + 7] || (c = Fe[i]) != null && c[a] || (b = Fe[i - n + 7]) != null && b[a] || (N = Fe[i]) != null && N[a - n + 7]);
    }), this.drawCorners(), this._options.image && this.drawImage({ width: s.width, height: s.height, count: n, dotSize: o });
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
        r.colorStops.forEach(({ offset: s, color: i }) => {
          o.addColorStop(s, i);
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
    const s = Math.min(r.width, r.height) - r.margin * 2, i = Math.floor(s / o), a = Math.floor((r.width - o * i) / 2), u = Math.floor((r.height - o * i) / 2), f = new Cn({ context: n, type: r.dotsOptions.type });
    n.beginPath();
    for (let l = 0; l < o; l++)
      for (let c = 0; c < o; c++)
        t && !t(l, c) || this._qr.isDark(l, c) && f.draw(
          a + l * i,
          u + c * i,
          i,
          (b, N) => l + b < 0 || c + N < 0 || l + b >= o || c + N >= o || t && !t(l + b, c + N) ? !1 : !!this._qr && this._qr.isDark(l + b, c + N)
        );
    if (r.dotsOptions.gradient) {
      const l = r.dotsOptions.gradient, c = this._createGradient({
        context: n,
        options: l,
        additionalRotation: 0,
        x: a,
        y: u,
        size: o * i
      });
      l.colorStops.forEach(({ offset: b, color: N }) => {
        c.addColorStop(b, N);
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
    const r = this._options, o = this._qr.getModuleCount(), s = Math.min(r.width, r.height) - r.margin * 2, i = Math.floor(s / o), a = i * 7, u = i * 3, f = Math.floor((r.width - o * i) / 2), l = Math.floor((r.height - o * i) / 2);
    [
      [0, 0, 0],
      [1, 0, Math.PI / 2],
      [0, 1, -Math.PI / 2]
    ].forEach(([c, b, N]) => {
      var R, x, K, j, I, M, Q, E, B, p;
      if (t && !t(c, b))
        return;
      const w = f + c * i * (o - 7), g = l + b * i * (o - 7);
      if ((R = r.cornersSquareOptions) != null && R.type) {
        const y = new ql({ context: n, type: (x = r.cornersSquareOptions) == null ? void 0 : x.type });
        n.beginPath(), y.draw(w, g, a, N);
      } else {
        const y = new Cn({ context: n, type: r.dotsOptions.type });
        n.beginPath();
        for (let h = 0; h < je.length; h++)
          for (let d = 0; d < je[h].length; d++)
            (K = je[h]) != null && K[d] && y.draw(
              w + h * i,
              g + d * i,
              i,
              (D, C) => {
                var O;
                return !!((O = je[h + D]) != null && O[d + C]);
              }
            );
      }
      if ((j = r.cornersSquareOptions) != null && j.gradient) {
        const y = r.cornersSquareOptions.gradient, h = this._createGradient({
          context: n,
          options: y,
          additionalRotation: N,
          x: w,
          y: g,
          size: a
        });
        y.colorStops.forEach(({ offset: d, color: D }) => {
          h.addColorStop(d, D);
        }), n.fillStyle = n.strokeStyle = h;
      } else
        (I = r.cornersSquareOptions) != null && I.color && (n.fillStyle = n.strokeStyle = r.cornersSquareOptions.color);
      if (n.fill("evenodd"), (M = r.cornersDotOptions) != null && M.type) {
        const y = new jl({ context: n, type: (Q = r.cornersDotOptions) == null ? void 0 : Q.type });
        n.beginPath(), y.draw(w + i * 2, g + i * 2, u, N);
      } else {
        const y = new Cn({ context: n, type: r.dotsOptions.type });
        n.beginPath();
        for (let h = 0; h < Fe.length; h++)
          for (let d = 0; d < Fe[h].length; d++)
            (E = Fe[h]) != null && E[d] && y.draw(
              w + h * i,
              g + d * i,
              i,
              (D, C) => {
                var O;
                return !!((O = Fe[h + D]) != null && O[d + C]);
              }
            );
      }
      if ((B = r.cornersDotOptions) != null && B.gradient) {
        const y = r.cornersDotOptions.gradient, h = this._createGradient({
          context: n,
          options: y,
          additionalRotation: N,
          x: w + i * 2,
          y: g + i * 2,
          size: u
        });
        y.colorStops.forEach(({ offset: d, color: D }) => {
          h.addColorStop(d, D);
        }), n.fillStyle = n.strokeStyle = h;
      } else
        (p = r.cornersDotOptions) != null && p.color && (n.fillStyle = n.strokeStyle = r.cornersDotOptions.color);
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
    const s = this.context;
    if (!s)
      throw "canvasContext is not defined";
    if (!this._image)
      throw "image is not defined";
    const i = this._options, a = Math.floor((i.width - r * o) / 2), u = Math.floor((i.height - r * o) / 2), f = a + i.imageOptions.margin + (r * o - t) / 2, l = u + i.imageOptions.margin + (r * o - n) / 2, c = t - i.imageOptions.margin * 2, b = n - i.imageOptions.margin * 2;
    s.drawImage(this._image, f, l, c < 0 ? 0 : c, b < 0 ? 0 : b);
  }
  _createGradient({
    context: t,
    options: n,
    additionalRotation: r,
    x: o,
    y: s,
    size: i
  }) {
    let a;
    if (n.type === Fl.radial)
      a = t.createRadialGradient(o + i / 2, s + i / 2, 0, o + i / 2, s + i / 2, i / 2);
    else {
      const u = ((n.rotation || 0) + r) % (2 * Math.PI), f = (u + 2 * Math.PI) % (2 * Math.PI);
      let l = o + i / 2, c = s + i / 2, b = o + i / 2, N = s + i / 2;
      f >= 0 && f <= 0.25 * Math.PI || f > 1.75 * Math.PI && f <= 2 * Math.PI ? (l = l - i / 2, c = c - i / 2 * Math.tan(u), b = b + i / 2, N = N + i / 2 * Math.tan(u)) : f > 0.25 * Math.PI && f <= 0.75 * Math.PI ? (c = c - i / 2, l = l - i / 2 / Math.tan(u), N = N + i / 2, b = b + i / 2 / Math.tan(u)) : f > 0.75 * Math.PI && f <= 1.25 * Math.PI ? (l = l + i / 2, c = c + i / 2 * Math.tan(u), b = b - i / 2, N = N - i / 2 * Math.tan(u)) : f > 1.25 * Math.PI && f <= 1.75 * Math.PI && (c = c + i / 2, l = l + i / 2 / Math.tan(u), N = N - i / 2, b = b - i / 2 / Math.tan(u)), a = t.createLinearGradient(Math.round(l), Math.round(c), Math.round(b), Math.round(N));
    }
    return a;
  }
}
const Xs = {};
for (let e = 0; e <= 40; e++)
  Xs[e] = e;
const Ul = {
  L: "L",
  M: "M",
  Q: "Q",
  H: "H"
}, mo = {
  width: 300,
  height: 300,
  data: "",
  margin: 0,
  qrOptions: {
    typeNumber: Xs[0],
    mode: void 0,
    errorCorrectionLevel: Ul.Q
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
function Tt(e) {
  const t = { ...e };
  if (!t.colorStops || !t.colorStops.length)
    throw "Field 'colorStops' is required in gradient";
  return t.rotation ? t.rotation = Number(t.rotation) : t.rotation = 0, t.colorStops = t.colorStops.map((n) => ({
    ...n,
    offset: Number(n.offset)
  })), t;
}
function yo(e) {
  const t = { ...e };
  return t.width = Number(t.width), t.height = Number(t.height), t.margin = Number(t.margin), t.imageOptions = {
    ...t.imageOptions,
    hideBackgroundDots: !!t.imageOptions.hideBackgroundDots,
    imageSize: Number(t.imageOptions.imageSize),
    margin: Number(t.imageOptions.margin)
  }, t.margin > Math.min(t.width, t.height) && (t.margin = Math.min(t.width, t.height)), t.dotsOptions = {
    ...t.dotsOptions
  }, t.dotsOptions.gradient && (t.dotsOptions.gradient = Tt(t.dotsOptions.gradient)), t.cornersSquareOptions && (t.cornersSquareOptions = {
    ...t.cornersSquareOptions
  }, t.cornersSquareOptions.gradient && (t.cornersSquareOptions.gradient = Tt(t.cornersSquareOptions.gradient))), t.cornersDotOptions && (t.cornersDotOptions = {
    ...t.cornersDotOptions
  }, t.cornersDotOptions.gradient && (t.cornersDotOptions.gradient = Tt(t.cornersDotOptions.gradient))), t.backgroundOptions && (t.backgroundOptions = {
    ...t.backgroundOptions
  }, t.backgroundOptions.gradient && (t.backgroundOptions.gradient = Tt(t.backgroundOptions.gradient))), t;
}
function Kl(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Ys = { exports: {} };
(function(e, t) {
  var n = function() {
    var r = function(E, B) {
      var p = 236, w = 17, g = E, y = s[B], h = null, d = 0, D = null, C = [], O = {}, q = function(A, S) {
        d = g * 4 + 17, h = function(v) {
          for (var k = new Array(v), _ = 0; _ < v; _ += 1) {
            k[_] = new Array(v);
            for (var L = 0; L < v; L += 1)
              k[_][L] = null;
          }
          return k;
        }(d), P(0, 0), P(d - 7, 0), P(0, d - 7), H(), J(), de(A, S), g >= 7 && $(A), D == null && (D = Gs(g, y, C)), Ee(D, S);
      }, P = function(A, S) {
        for (var v = -1; v <= 7; v += 1)
          if (!(A + v <= -1 || d <= A + v))
            for (var k = -1; k <= 7; k += 1)
              S + k <= -1 || d <= S + k || (0 <= v && v <= 6 && (k == 0 || k == 6) || 0 <= k && k <= 6 && (v == 0 || v == 6) || 2 <= v && v <= 4 && 2 <= k && k <= 4 ? h[A + v][S + k] = !0 : h[A + v][S + k] = !1);
      }, T = function() {
        for (var A = 0, S = 0, v = 0; v < 8; v += 1) {
          q(!0, v);
          var k = a.getLostPoint(O);
          (v == 0 || A > k) && (A = k, S = v);
        }
        return S;
      }, J = function() {
        for (var A = 8; A < d - 8; A += 1)
          h[A][6] == null && (h[A][6] = A % 2 == 0);
        for (var S = 8; S < d - 8; S += 1)
          h[6][S] == null && (h[6][S] = S % 2 == 0);
      }, H = function() {
        for (var A = a.getPatternPosition(g), S = 0; S < A.length; S += 1)
          for (var v = 0; v < A.length; v += 1) {
            var k = A[S], _ = A[v];
            if (h[k][_] == null)
              for (var L = -2; L <= 2; L += 1)
                for (var U = -2; U <= 2; U += 1)
                  L == -2 || L == 2 || U == -2 || U == 2 || L == 0 && U == 0 ? h[k + L][_ + U] = !0 : h[k + L][_ + U] = !1;
          }
      }, $ = function(A) {
        for (var S = a.getBCHTypeNumber(g), v = 0; v < 18; v += 1) {
          var k = !A && (S >> v & 1) == 1;
          h[Math.floor(v / 3)][v % 3 + d - 8 - 3] = k;
        }
        for (var v = 0; v < 18; v += 1) {
          var k = !A && (S >> v & 1) == 1;
          h[v % 3 + d - 8 - 3][Math.floor(v / 3)] = k;
        }
      }, de = function(A, S) {
        for (var v = y << 3 | S, k = a.getBCHTypeInfo(v), _ = 0; _ < 15; _ += 1) {
          var L = !A && (k >> _ & 1) == 1;
          _ < 6 ? h[_][8] = L : _ < 8 ? h[_ + 1][8] = L : h[d - 15 + _][8] = L;
        }
        for (var _ = 0; _ < 15; _ += 1) {
          var L = !A && (k >> _ & 1) == 1;
          _ < 8 ? h[8][d - _ - 1] = L : _ < 9 ? h[8][15 - _ - 1 + 1] = L : h[8][15 - _ - 1] = L;
        }
        h[d - 8][8] = !A;
      }, Ee = function(A, S) {
        for (var v = -1, k = d - 1, _ = 7, L = 0, U = a.getMaskFunction(S), F = d - 1; F > 0; F -= 2)
          for (F == 6 && (F -= 1); ; ) {
            for (var G = 0; G < 2; G += 1)
              if (h[k][F - G] == null) {
                var ne = !1;
                L < A.length && (ne = (A[L] >>> _ & 1) == 1);
                var z = U(k, F - G);
                z && (ne = !ne), h[k][F - G] = ne, _ -= 1, _ == -1 && (L += 1, _ = 7);
              }
            if (k += v, k < 0 || d <= k) {
              k -= v, v = -v;
              break;
            }
          }
      }, Ye = function(A, S) {
        for (var v = 0, k = 0, _ = 0, L = new Array(S.length), U = new Array(S.length), F = 0; F < S.length; F += 1) {
          var G = S[F].dataCount, ne = S[F].totalCount - G;
          k = Math.max(k, G), _ = Math.max(_, ne), L[F] = new Array(G);
          for (var z = 0; z < L[F].length; z += 1)
            L[F][z] = 255 & A.getBuffer()[z + v];
          v += G;
          var pe = a.getErrorCorrectPolynomial(ne), he = f(L[F], pe.getLength() - 1), vr = he.mod(pe);
          U[F] = new Array(pe.getLength() - 1);
          for (var z = 0; z < U[F].length; z += 1) {
            var br = z + vr.getLength() - U[F].length;
            U[F][z] = br >= 0 ? vr.getAt(br) : 0;
          }
        }
        for (var Ar = 0, z = 0; z < S.length; z += 1)
          Ar += S[z].totalCount;
        for (var dn = new Array(Ar), St = 0, z = 0; z < k; z += 1)
          for (var F = 0; F < S.length; F += 1)
            z < L[F].length && (dn[St] = L[F][z], St += 1);
        for (var z = 0; z < _; z += 1)
          for (var F = 0; F < S.length; F += 1)
            z < U[F].length && (dn[St] = U[F][z], St += 1);
        return dn;
      }, Gs = function(A, S, v) {
        for (var k = l.getRSBlocks(A, S), _ = c(), L = 0; L < v.length; L += 1) {
          var U = v[L];
          _.put(U.getMode(), 4), _.put(U.getLength(), a.getLengthInBits(U.getMode(), A)), U.write(_);
        }
        for (var F = 0, L = 0; L < k.length; L += 1)
          F += k[L].dataCount;
        if (_.getLengthInBits() > F * 8)
          throw "code length overflow. (" + _.getLengthInBits() + ">" + F * 8 + ")";
        for (_.getLengthInBits() + 4 <= F * 8 && _.put(0, 4); _.getLengthInBits() % 8 != 0; )
          _.putBit(!1);
        for (; !(_.getLengthInBits() >= F * 8 || (_.put(p, 8), _.getLengthInBits() >= F * 8)); )
          _.put(w, 8);
        return Ye(_, k);
      };
      O.addData = function(A, S) {
        S = S || "Byte";
        var v = null;
        switch (S) {
          case "Numeric":
            v = b(A);
            break;
          case "Alphanumeric":
            v = N(A);
            break;
          case "Byte":
            v = R(A);
            break;
          case "Kanji":
            v = x(A);
            break;
          default:
            throw "mode:" + S;
        }
        C.push(v), D = null;
      }, O.isDark = function(A, S) {
        if (A < 0 || d <= A || S < 0 || d <= S)
          throw A + "," + S;
        return h[A][S];
      }, O.getModuleCount = function() {
        return d;
      }, O.make = function() {
        if (g < 1) {
          for (var A = 1; A < 40; A++) {
            for (var S = l.getRSBlocks(A, y), v = c(), k = 0; k < C.length; k++) {
              var _ = C[k];
              v.put(_.getMode(), 4), v.put(_.getLength(), a.getLengthInBits(_.getMode(), A)), _.write(v);
            }
            for (var L = 0, k = 0; k < S.length; k++)
              L += S[k].dataCount;
            if (v.getLengthInBits() <= L * 8)
              break;
          }
          g = A;
        }
        q(!1, T());
      }, O.createTableTag = function(A, S) {
        A = A || 2, S = typeof S > "u" ? A * 4 : S;
        var v = "";
        v += '<table style="', v += " border-width: 0px; border-style: none;", v += " border-collapse: collapse;", v += " padding: 0px; margin: " + S + "px;", v += '">', v += "<tbody>";
        for (var k = 0; k < O.getModuleCount(); k += 1) {
          v += "<tr>";
          for (var _ = 0; _ < O.getModuleCount(); _ += 1)
            v += '<td style="', v += " border-width: 0px; border-style: none;", v += " border-collapse: collapse;", v += " padding: 0px; margin: 0px;", v += " width: " + A + "px;", v += " height: " + A + "px;", v += " background-color: ", v += O.isDark(k, _) ? "#000000" : "#ffffff", v += ";", v += '"/>';
          v += "</tr>";
        }
        return v += "</tbody>", v += "</table>", v;
      }, O.createSvgTag = function(A, S, v, k) {
        var _ = {};
        typeof arguments[0] == "object" && (_ = arguments[0], A = _.cellSize, S = _.margin, v = _.alt, k = _.title), A = A || 2, S = typeof S > "u" ? A * 4 : S, v = typeof v == "string" ? { text: v } : v || {}, v.text = v.text || null, v.id = v.text ? v.id || "qrcode-description" : null, k = typeof k == "string" ? { text: k } : k || {}, k.text = k.text || null, k.id = k.text ? k.id || "qrcode-title" : null;
        var L = O.getModuleCount() * A + S * 2, U, F, G, ne, z = "", pe;
        for (pe = "l" + A + ",0 0," + A + " -" + A + ",0 0,-" + A + "z ", z += '<svg version="1.1" xmlns="http://www.w3.org/2000/svg"', z += _.scalable ? "" : ' width="' + L + 'px" height="' + L + 'px"', z += ' viewBox="0 0 ' + L + " " + L + '" ', z += ' preserveAspectRatio="xMinYMin meet"', z += k.text || v.text ? ' role="img" aria-labelledby="' + Ze([k.id, v.id].join(" ").trim()) + '"' : "", z += ">", z += k.text ? '<title id="' + Ze(k.id) + '">' + Ze(k.text) + "</title>" : "", z += v.text ? '<description id="' + Ze(v.id) + '">' + Ze(v.text) + "</description>" : "", z += '<rect width="100%" height="100%" fill="white" cx="0" cy="0"/>', z += '<path d="', G = 0; G < O.getModuleCount(); G += 1)
          for (ne = G * A + S, U = 0; U < O.getModuleCount(); U += 1)
            O.isDark(G, U) && (F = U * A + S, z += "M" + F + "," + ne + pe);
        return z += '" stroke="transparent" fill="black"/>', z += "</svg>", z;
      }, O.createDataURL = function(A, S) {
        A = A || 2, S = typeof S > "u" ? A * 4 : S;
        var v = O.getModuleCount() * A + S * 2, k = S, _ = v - S;
        return Q(v, v, function(L, U) {
          if (k <= L && L < _ && k <= U && U < _) {
            var F = Math.floor((L - k) / A), G = Math.floor((U - k) / A);
            return O.isDark(G, F) ? 0 : 1;
          } else
            return 1;
        });
      }, O.createImgTag = function(A, S, v) {
        A = A || 2, S = typeof S > "u" ? A * 4 : S;
        var k = O.getModuleCount() * A + S * 2, _ = "";
        return _ += "<img", _ += ' src="', _ += O.createDataURL(A, S), _ += '"', _ += ' width="', _ += k, _ += '"', _ += ' height="', _ += k, _ += '"', v && (_ += ' alt="', _ += Ze(v), _ += '"'), _ += "/>", _;
      };
      var Ze = function(A) {
        for (var S = "", v = 0; v < A.length; v += 1) {
          var k = A.charAt(v);
          switch (k) {
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
              S += k;
              break;
          }
        }
        return S;
      }, $s = function(A) {
        var S = 1;
        A = typeof A > "u" ? S * 2 : A;
        var v = O.getModuleCount() * S + A * 2, k = A, _ = v - A, L, U, F, G, ne, z = {
          "██": "█",
          "█ ": "▀",
          " █": "▄",
          "  ": " "
        }, pe = {
          "██": "▀",
          "█ ": "▀",
          " █": " ",
          "  ": " "
        }, he = "";
        for (L = 0; L < v; L += 2) {
          for (F = Math.floor((L - k) / S), G = Math.floor((L + 1 - k) / S), U = 0; U < v; U += 1)
            ne = "█", k <= U && U < _ && k <= L && L < _ && O.isDark(F, Math.floor((U - k) / S)) && (ne = " "), k <= U && U < _ && k <= L + 1 && L + 1 < _ && O.isDark(G, Math.floor((U - k) / S)) ? ne += " " : ne += "█", he += A < 1 && L + 1 >= _ ? pe[ne] : z[ne];
          he += `
`;
        }
        return v % 2 && A > 0 ? he.substring(0, he.length - v - 1) + Array(v + 1).join("▀") : he.substring(0, he.length - 1);
      };
      return O.createASCII = function(A, S) {
        if (A = A || 1, A < 2)
          return $s(S);
        A -= 1, S = typeof S > "u" ? A * 2 : S;
        var v = O.getModuleCount() * A + S * 2, k = S, _ = v - S, L, U, F, G, ne = Array(A + 1).join("██"), z = Array(A + 1).join("  "), pe = "", he = "";
        for (L = 0; L < v; L += 1) {
          for (F = Math.floor((L - k) / A), he = "", U = 0; U < v; U += 1)
            G = 1, k <= U && U < _ && k <= L && L < _ && O.isDark(F, Math.floor((U - k) / A)) && (G = 0), he += G ? ne : z;
          for (F = 0; F < A; F += 1)
            pe += he + `
`;
        }
        return pe.substring(0, pe.length - 1);
      }, O.renderTo2dContext = function(A, S) {
        S = S || 2;
        for (var v = O.getModuleCount(), k = 0; k < v; k++)
          for (var _ = 0; _ < v; _++)
            A.fillStyle = O.isDark(k, _) ? "black" : "white", A.fillRect(k * S, _ * S, S, S);
      }, O;
    };
    r.stringToBytesFuncs = {
      default: function(E) {
        for (var B = [], p = 0; p < E.length; p += 1) {
          var w = E.charCodeAt(p);
          B.push(w & 255);
        }
        return B;
      }
    }, r.stringToBytes = r.stringToBytesFuncs.default, r.createStringToBytes = function(E, B) {
      var p = function() {
        for (var g = I(E), y = function() {
          var J = g.read();
          if (J == -1)
            throw "eof";
          return J;
        }, h = 0, d = {}; ; ) {
          var D = g.read();
          if (D == -1)
            break;
          var C = y(), O = y(), q = y(), P = String.fromCharCode(D << 8 | C), T = O << 8 | q;
          d[P] = T, h += 1;
        }
        if (h != B)
          throw h + " != " + B;
        return d;
      }(), w = "?".charCodeAt(0);
      return function(g) {
        for (var y = [], h = 0; h < g.length; h += 1) {
          var d = g.charCodeAt(h);
          if (d < 128)
            y.push(d);
          else {
            var D = p[g.charAt(h)];
            typeof D == "number" ? (D & 255) == D ? y.push(D) : (y.push(D >>> 8), y.push(D & 255)) : y.push(w);
          }
        }
        return y;
      };
    };
    var o = {
      MODE_NUMBER: 1,
      MODE_ALPHA_NUM: 2,
      MODE_8BIT_BYTE: 4,
      MODE_KANJI: 8
    }, s = {
      L: 1,
      M: 0,
      Q: 3,
      H: 2
    }, i = {
      PATTERN000: 0,
      PATTERN001: 1,
      PATTERN010: 2,
      PATTERN011: 3,
      PATTERN100: 4,
      PATTERN101: 5,
      PATTERN110: 6,
      PATTERN111: 7
    }, a = function() {
      var E = [
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
      ], B = 1335, p = 7973, w = 21522, g = {}, y = function(h) {
        for (var d = 0; h != 0; )
          d += 1, h >>>= 1;
        return d;
      };
      return g.getBCHTypeInfo = function(h) {
        for (var d = h << 10; y(d) - y(B) >= 0; )
          d ^= B << y(d) - y(B);
        return (h << 10 | d) ^ w;
      }, g.getBCHTypeNumber = function(h) {
        for (var d = h << 12; y(d) - y(p) >= 0; )
          d ^= p << y(d) - y(p);
        return h << 12 | d;
      }, g.getPatternPosition = function(h) {
        return E[h - 1];
      }, g.getMaskFunction = function(h) {
        switch (h) {
          case i.PATTERN000:
            return function(d, D) {
              return (d + D) % 2 == 0;
            };
          case i.PATTERN001:
            return function(d, D) {
              return d % 2 == 0;
            };
          case i.PATTERN010:
            return function(d, D) {
              return D % 3 == 0;
            };
          case i.PATTERN011:
            return function(d, D) {
              return (d + D) % 3 == 0;
            };
          case i.PATTERN100:
            return function(d, D) {
              return (Math.floor(d / 2) + Math.floor(D / 3)) % 2 == 0;
            };
          case i.PATTERN101:
            return function(d, D) {
              return d * D % 2 + d * D % 3 == 0;
            };
          case i.PATTERN110:
            return function(d, D) {
              return (d * D % 2 + d * D % 3) % 2 == 0;
            };
          case i.PATTERN111:
            return function(d, D) {
              return (d * D % 3 + (d + D) % 2) % 2 == 0;
            };
          default:
            throw "bad maskPattern:" + h;
        }
      }, g.getErrorCorrectPolynomial = function(h) {
        for (var d = f([1], 0), D = 0; D < h; D += 1)
          d = d.multiply(f([1, u.gexp(D)], 0));
        return d;
      }, g.getLengthInBits = function(h, d) {
        if (1 <= d && d < 10)
          switch (h) {
            case o.MODE_NUMBER:
              return 10;
            case o.MODE_ALPHA_NUM:
              return 9;
            case o.MODE_8BIT_BYTE:
              return 8;
            case o.MODE_KANJI:
              return 8;
            default:
              throw "mode:" + h;
          }
        else if (d < 27)
          switch (h) {
            case o.MODE_NUMBER:
              return 12;
            case o.MODE_ALPHA_NUM:
              return 11;
            case o.MODE_8BIT_BYTE:
              return 16;
            case o.MODE_KANJI:
              return 10;
            default:
              throw "mode:" + h;
          }
        else if (d < 41)
          switch (h) {
            case o.MODE_NUMBER:
              return 14;
            case o.MODE_ALPHA_NUM:
              return 13;
            case o.MODE_8BIT_BYTE:
              return 16;
            case o.MODE_KANJI:
              return 12;
            default:
              throw "mode:" + h;
          }
        else
          throw "type:" + d;
      }, g.getLostPoint = function(h) {
        for (var d = h.getModuleCount(), D = 0, C = 0; C < d; C += 1)
          for (var O = 0; O < d; O += 1) {
            for (var q = 0, P = h.isDark(C, O), T = -1; T <= 1; T += 1)
              if (!(C + T < 0 || d <= C + T))
                for (var J = -1; J <= 1; J += 1)
                  O + J < 0 || d <= O + J || T == 0 && J == 0 || P == h.isDark(C + T, O + J) && (q += 1);
            q > 5 && (D += 3 + q - 5);
          }
        for (var C = 0; C < d - 1; C += 1)
          for (var O = 0; O < d - 1; O += 1) {
            var H = 0;
            h.isDark(C, O) && (H += 1), h.isDark(C + 1, O) && (H += 1), h.isDark(C, O + 1) && (H += 1), h.isDark(C + 1, O + 1) && (H += 1), (H == 0 || H == 4) && (D += 3);
          }
        for (var C = 0; C < d; C += 1)
          for (var O = 0; O < d - 6; O += 1)
            h.isDark(C, O) && !h.isDark(C, O + 1) && h.isDark(C, O + 2) && h.isDark(C, O + 3) && h.isDark(C, O + 4) && !h.isDark(C, O + 5) && h.isDark(C, O + 6) && (D += 40);
        for (var O = 0; O < d; O += 1)
          for (var C = 0; C < d - 6; C += 1)
            h.isDark(C, O) && !h.isDark(C + 1, O) && h.isDark(C + 2, O) && h.isDark(C + 3, O) && h.isDark(C + 4, O) && !h.isDark(C + 5, O) && h.isDark(C + 6, O) && (D += 40);
        for (var $ = 0, O = 0; O < d; O += 1)
          for (var C = 0; C < d; C += 1)
            h.isDark(C, O) && ($ += 1);
        var de = Math.abs(100 * $ / d / d - 50) / 5;
        return D += de * 10, D;
      }, g;
    }(), u = function() {
      for (var E = new Array(256), B = new Array(256), p = 0; p < 8; p += 1)
        E[p] = 1 << p;
      for (var p = 8; p < 256; p += 1)
        E[p] = E[p - 4] ^ E[p - 5] ^ E[p - 6] ^ E[p - 8];
      for (var p = 0; p < 255; p += 1)
        B[E[p]] = p;
      var w = {};
      return w.glog = function(g) {
        if (g < 1)
          throw "glog(" + g + ")";
        return B[g];
      }, w.gexp = function(g) {
        for (; g < 0; )
          g += 255;
        for (; g >= 256; )
          g -= 255;
        return E[g];
      }, w;
    }();
    function f(E, B) {
      if (typeof E.length > "u")
        throw E.length + "/" + B;
      var p = function() {
        for (var g = 0; g < E.length && E[g] == 0; )
          g += 1;
        for (var y = new Array(E.length - g + B), h = 0; h < E.length - g; h += 1)
          y[h] = E[h + g];
        return y;
      }(), w = {};
      return w.getAt = function(g) {
        return p[g];
      }, w.getLength = function() {
        return p.length;
      }, w.multiply = function(g) {
        for (var y = new Array(w.getLength() + g.getLength() - 1), h = 0; h < w.getLength(); h += 1)
          for (var d = 0; d < g.getLength(); d += 1)
            y[h + d] ^= u.gexp(u.glog(w.getAt(h)) + u.glog(g.getAt(d)));
        return f(y, 0);
      }, w.mod = function(g) {
        if (w.getLength() - g.getLength() < 0)
          return w;
        for (var y = u.glog(w.getAt(0)) - u.glog(g.getAt(0)), h = new Array(w.getLength()), d = 0; d < w.getLength(); d += 1)
          h[d] = w.getAt(d);
        for (var d = 0; d < g.getLength(); d += 1)
          h[d] ^= u.gexp(u.glog(g.getAt(d)) + y);
        return f(h, 0).mod(g);
      }, w;
    }
    var l = function() {
      var E = [
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
      ], B = function(g, y) {
        var h = {};
        return h.totalCount = g, h.dataCount = y, h;
      }, p = {}, w = function(g, y) {
        switch (y) {
          case s.L:
            return E[(g - 1) * 4 + 0];
          case s.M:
            return E[(g - 1) * 4 + 1];
          case s.Q:
            return E[(g - 1) * 4 + 2];
          case s.H:
            return E[(g - 1) * 4 + 3];
          default:
            return;
        }
      };
      return p.getRSBlocks = function(g, y) {
        var h = w(g, y);
        if (typeof h > "u")
          throw "bad rs block @ typeNumber:" + g + "/errorCorrectionLevel:" + y;
        for (var d = h.length / 3, D = [], C = 0; C < d; C += 1)
          for (var O = h[C * 3 + 0], q = h[C * 3 + 1], P = h[C * 3 + 2], T = 0; T < O; T += 1)
            D.push(B(q, P));
        return D;
      }, p;
    }(), c = function() {
      var E = [], B = 0, p = {};
      return p.getBuffer = function() {
        return E;
      }, p.getAt = function(w) {
        var g = Math.floor(w / 8);
        return (E[g] >>> 7 - w % 8 & 1) == 1;
      }, p.put = function(w, g) {
        for (var y = 0; y < g; y += 1)
          p.putBit((w >>> g - y - 1 & 1) == 1);
      }, p.getLengthInBits = function() {
        return B;
      }, p.putBit = function(w) {
        var g = Math.floor(B / 8);
        E.length <= g && E.push(0), w && (E[g] |= 128 >>> B % 8), B += 1;
      }, p;
    }, b = function(E) {
      var B = o.MODE_NUMBER, p = E, w = {};
      w.getMode = function() {
        return B;
      }, w.getLength = function(h) {
        return p.length;
      }, w.write = function(h) {
        for (var d = p, D = 0; D + 2 < d.length; )
          h.put(g(d.substring(D, D + 3)), 10), D += 3;
        D < d.length && (d.length - D == 1 ? h.put(g(d.substring(D, D + 1)), 4) : d.length - D == 2 && h.put(g(d.substring(D, D + 2)), 7));
      };
      var g = function(h) {
        for (var d = 0, D = 0; D < h.length; D += 1)
          d = d * 10 + y(h.charAt(D));
        return d;
      }, y = function(h) {
        if ("0" <= h && h <= "9")
          return h.charCodeAt(0) - "0".charCodeAt(0);
        throw "illegal char :" + h;
      };
      return w;
    }, N = function(E) {
      var B = o.MODE_ALPHA_NUM, p = E, w = {};
      w.getMode = function() {
        return B;
      }, w.getLength = function(y) {
        return p.length;
      }, w.write = function(y) {
        for (var h = p, d = 0; d + 1 < h.length; )
          y.put(
            g(h.charAt(d)) * 45 + g(h.charAt(d + 1)),
            11
          ), d += 2;
        d < h.length && y.put(g(h.charAt(d)), 6);
      };
      var g = function(y) {
        if ("0" <= y && y <= "9")
          return y.charCodeAt(0) - "0".charCodeAt(0);
        if ("A" <= y && y <= "Z")
          return y.charCodeAt(0) - "A".charCodeAt(0) + 10;
        switch (y) {
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
            throw "illegal char :" + y;
        }
      };
      return w;
    }, R = function(E) {
      var B = o.MODE_8BIT_BYTE, p = r.stringToBytes(E), w = {};
      return w.getMode = function() {
        return B;
      }, w.getLength = function(g) {
        return p.length;
      }, w.write = function(g) {
        for (var y = 0; y < p.length; y += 1)
          g.put(p[y], 8);
      }, w;
    }, x = function(E) {
      var B = o.MODE_KANJI, p = r.stringToBytesFuncs.SJIS;
      if (!p)
        throw "sjis not supported.";
      (function(y, h) {
        var d = p(y);
        if (d.length != 2 || (d[0] << 8 | d[1]) != h)
          throw "sjis not supported.";
      })("友", 38726);
      var w = p(E), g = {};
      return g.getMode = function() {
        return B;
      }, g.getLength = function(y) {
        return ~~(w.length / 2);
      }, g.write = function(y) {
        for (var h = w, d = 0; d + 1 < h.length; ) {
          var D = (255 & h[d]) << 8 | 255 & h[d + 1];
          if (33088 <= D && D <= 40956)
            D -= 33088;
          else if (57408 <= D && D <= 60351)
            D -= 49472;
          else
            throw "illegal char at " + (d + 1) + "/" + D;
          D = (D >>> 8 & 255) * 192 + (D & 255), y.put(D, 13), d += 2;
        }
        if (d < h.length)
          throw "illegal char at " + (d + 1);
      }, g;
    }, K = function() {
      var E = [], B = {};
      return B.writeByte = function(p) {
        E.push(p & 255);
      }, B.writeShort = function(p) {
        B.writeByte(p), B.writeByte(p >>> 8);
      }, B.writeBytes = function(p, w, g) {
        w = w || 0, g = g || p.length;
        for (var y = 0; y < g; y += 1)
          B.writeByte(p[y + w]);
      }, B.writeString = function(p) {
        for (var w = 0; w < p.length; w += 1)
          B.writeByte(p.charCodeAt(w));
      }, B.toByteArray = function() {
        return E;
      }, B.toString = function() {
        var p = "";
        p += "[";
        for (var w = 0; w < E.length; w += 1)
          w > 0 && (p += ","), p += E[w];
        return p += "]", p;
      }, B;
    }, j = function() {
      var E = 0, B = 0, p = 0, w = "", g = {}, y = function(d) {
        w += String.fromCharCode(h(d & 63));
      }, h = function(d) {
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
      return g.writeByte = function(d) {
        for (E = E << 8 | d & 255, B += 8, p += 1; B >= 6; )
          y(E >>> B - 6), B -= 6;
      }, g.flush = function() {
        if (B > 0 && (y(E << 6 - B), E = 0, B = 0), p % 3 != 0)
          for (var d = 3 - p % 3, D = 0; D < d; D += 1)
            w += "=";
      }, g.toString = function() {
        return w;
      }, g;
    }, I = function(E) {
      var B = E, p = 0, w = 0, g = 0, y = {};
      y.read = function() {
        for (; g < 8; ) {
          if (p >= B.length) {
            if (g == 0)
              return -1;
            throw "unexpected end of file./" + g;
          }
          var d = B.charAt(p);
          if (p += 1, d == "=")
            return g = 0, -1;
          d.match(/^\s$/) || (w = w << 6 | h(d.charCodeAt(0)), g += 6);
        }
        var D = w >>> g - 8 & 255;
        return g -= 8, D;
      };
      var h = function(d) {
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
      return y;
    }, M = function(E, B) {
      var p = E, w = B, g = new Array(E * B), y = {};
      y.setPixel = function(C, O, q) {
        g[O * p + C] = q;
      }, y.write = function(C) {
        C.writeString("GIF87a"), C.writeShort(p), C.writeShort(w), C.writeByte(128), C.writeByte(0), C.writeByte(0), C.writeByte(0), C.writeByte(0), C.writeByte(0), C.writeByte(255), C.writeByte(255), C.writeByte(255), C.writeString(","), C.writeShort(0), C.writeShort(0), C.writeShort(p), C.writeShort(w), C.writeByte(0);
        var O = 2, q = d(O);
        C.writeByte(O);
        for (var P = 0; q.length - P > 255; )
          C.writeByte(255), C.writeBytes(q, P, 255), P += 255;
        C.writeByte(q.length - P), C.writeBytes(q, P, q.length - P), C.writeByte(0), C.writeString(";");
      };
      var h = function(C) {
        var O = C, q = 0, P = 0, T = {};
        return T.write = function(J, H) {
          if (J >>> H)
            throw "length over";
          for (; q + H >= 8; )
            O.writeByte(255 & (J << q | P)), H -= 8 - q, J >>>= 8 - q, P = 0, q = 0;
          P = J << q | P, q = q + H;
        }, T.flush = function() {
          q > 0 && O.writeByte(P);
        }, T;
      }, d = function(C) {
        for (var O = 1 << C, q = (1 << C) + 1, P = C + 1, T = D(), J = 0; J < O; J += 1)
          T.add(String.fromCharCode(J));
        T.add(String.fromCharCode(O)), T.add(String.fromCharCode(q));
        var H = K(), $ = h(H);
        $.write(O, P);
        var de = 0, Ee = String.fromCharCode(g[de]);
        for (de += 1; de < g.length; ) {
          var Ye = String.fromCharCode(g[de]);
          de += 1, T.contains(Ee + Ye) ? Ee = Ee + Ye : ($.write(T.indexOf(Ee), P), T.size() < 4095 && (T.size() == 1 << P && (P += 1), T.add(Ee + Ye)), Ee = Ye);
        }
        return $.write(T.indexOf(Ee), P), $.write(q, P), $.flush(), H.toByteArray();
      }, D = function() {
        var C = {}, O = 0, q = {};
        return q.add = function(P) {
          if (q.contains(P))
            throw "dup key:" + P;
          C[P] = O, O += 1;
        }, q.size = function() {
          return O;
        }, q.indexOf = function(P) {
          return C[P];
        }, q.contains = function(P) {
          return typeof C[P] < "u";
        }, q;
      };
      return y;
    }, Q = function(E, B, p) {
      for (var w = M(E, B), g = 0; g < B; g += 1)
        for (var y = 0; y < E; y += 1)
          w.setPixel(y, g, p(y, g));
      var h = K();
      w.write(h);
      for (var d = j(), D = h.toByteArray(), C = 0; C < D.length; C += 1)
        d.writeByte(D[C]);
      return d.flush(), "data:image/gif;base64," + d;
    };
    return r;
  }();
  (function() {
    n.stringToBytesFuncs["UTF-8"] = function(r) {
      function o(s) {
        for (var i = [], a = 0; a < s.length; a++) {
          var u = s.charCodeAt(a);
          u < 128 ? i.push(u) : u < 2048 ? i.push(
            192 | u >> 6,
            128 | u & 63
          ) : u < 55296 || u >= 57344 ? i.push(
            224 | u >> 12,
            128 | u >> 6 & 63,
            128 | u & 63
          ) : (a++, u = 65536 + ((u & 1023) << 10 | s.charCodeAt(a) & 1023), i.push(
            240 | u >> 18,
            128 | u >> 12 & 63,
            128 | u >> 6 & 63,
            128 | u & 63
          ));
        }
        return i;
      }
      return o(r);
    };
  })(), function(r) {
    e.exports = r();
  }(function() {
    return n;
  });
})(Ys);
var zl = Ys.exports;
const Vl = /* @__PURE__ */ Kl(zl);
class yr {
  constructor(t) {
    ue(this, "_options"), ue(this, "_container"), ue(this, "_canvas"), ue(this, "_qr"), ue(this, "_drawingPromise"), this._options = t ? yo(Zt(mo, t)) : mo, this.update();
  }
  static _clearContainer(t) {
    t && (t.innerHTML = "");
  }
  update(t) {
    yr._clearContainer(this._container), this._options = t ? yo(Zt(this._options, t)) : this._options, this._options.data && (this._qr = Vl(this._options.qrOptions.typeNumber, this._options.qrOptions.errorCorrectionLevel), this._qr.addData(this._options.data, this._options.qrOptions.mode || Ll(this._options.data)), this._qr.make(), this._canvas = new Hl(this._options), this._drawingPromise = this._canvas.drawQR(this._qr), this.append(this._container));
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
      const n = t, r = n.extension || "png", o = n.name || "qr", s = this._canvas.getCanvas().toDataURL(`image/${r}`);
      Il(s, `${o}.${r}`);
    });
  }
}
const Wl = ["src"], Xl = { key: 1 }, Yl = /* @__PURE__ */ Ts({
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
    const r = e, o = new yr({
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
    let s = ([t, n] = ll(() => o.getImageUrl(r.fileExt)), t = await t, n(), t);
    function i() {
      o.download(r.downloadOptions);
    }
    return (a, u) => (ct(), An("div", null, [
      It(s) ? (ct(), An("div", {
        key: 0,
        class: st(a.myclass)
      }, [
        Xt("img", {
          src: It(s),
          class: st(a.imgclass),
          crossorigin: "anonymous"
        }, null, 10, Wl)
      ], 2)) : po("", !0),
      It(s) && a.download ? (ct(), An("div", Xl, [
        Xt("button", {
          onClick: i,
          class: st(a.downloadButton)
        }, Jc(a.ButtonName), 3)
      ])) : po("", !0)
    ]));
  }
}), vo = /* @__PURE__ */ Ts({
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
    return (n, r) => (ct(), Fs(qu, null, {
      default: Lu(() => [
        Ie(Yl, {
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
}), Zs = /* @__PURE__ */ So({
  __name: "Prelogin",
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
    oi((i) => ({
      "73f5912c": t.width,
      "1e24cafe": t.height,
      "09d466a9": r.value,
      "77a454ec": o.value
    }));
    const t = e, n = oe(t.dark ?? !1), r = oe(t.mobileWidth ?? t.width), o = oe(t.mobileHeight ?? t.height), s = oe(null);
    return Ao(() => {
      Co(() => {
        if (!t.disabled && s.value !== null) {
          let i = 1.5, a = setInterval(function() {
            i -= 0.1, s.value !== null && (s.value.style.animationDuration = i + "s", i <= 0.8 && clearInterval(a));
          }, 1e4);
        }
      });
    }), (i, a) => (we(), _e("div", {
      ref_key: "loader",
      ref: s,
      class: si([n.value && "skeleton-loader_dark", !n.value && "skeleton-loader"])
    }, null, 2));
  }
});
const Zl = "data:image/png;base64,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", bo = "data:image/png;base64,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", Gl = { style: { "text-align": "center" } }, $l = ["title"], ed = {
  key: 1,
  style: { "text-align": "center" }
}, td = ["src"], nd = /* @__PURE__ */ ot("br", null, null, -1), rd = /* @__PURE__ */ ot("br", null, null, -1), od = { key: 0 }, sd = {
  key: 2,
  style: { "text-align": "center", width: "300px", height: "300px" }
}, id = /* @__PURE__ */ ot("i", {
  class: "fas fa-unlink",
  style: { "font-size": "155px", color: "red", padding: "10px", "padding-top": "60px", "vertical-align": "middle" },
  "aria-hidden": "true"
}, null, -1), ad = [
  id
], cd = ["innerHTML"], ud = /* @__PURE__ */ So({
  __name: "Login",
  props: {
    isMobileScreen: {
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
    hideText: {
      type: Boolean,
      default: !1
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
    region: {
      type: Number,
      default: 1
    },
    errorLog: {
      type: Boolean,
      default: !1
    },
    enableCheck: {
      type: Boolean,
      default: !1
    },
    interval: {
      type: Number,
      default: 1e3
    },
    accessTimeout: {
      type: Number,
      default: 2e4
    }
  },
  emits: ["error", "redirect", "status", "user"],
  setup(e, { emit: t }) {
    const n = t, r = (g, y) => {
      g === "error" ? (n("error", y), p.errorLog && console.log("Error event received with payload:", y)) : g === "redirect" ? (n("redirect", y), p.errorLog && console.log("Redirect event received with payload:", y)) : g === "status" ? (n("status", y), p.errorLog && console.log("Status event received with payload:", y)) : g === "user" && (n("user", y), p.errorLog && console.log("User event received with payload:", y));
    }, { t: o } = Do(), { auth: s, loginQRCode: i, checkQRLogin: a, success: u, IsDark: f, QRCode: l, Message: c, IDLogin: b, setBase: N, readMessage: R, setUrls: x, setRoutes: K, is_error: j } = Sc(r), I = oe(!1);
    se("locale", "en");
    const M = ii(() => (f.value = p.isDark, u.value === !0 && (c.value = R()), p.isDark)), Q = oe(0);
    function E() {
      u.value = !1, s.value < 2 || b.value === et.create().toString() ? i() : a(), s.value === -1 && (Q.value++, Q.value > 3 && (s.value = 0), setTimeout(E, 500));
    }
    function B() {
      window.location.reload();
    }
    yi(() => {
      f.value = p.isDark, N(p.configDev, p.configProduction, p.region, p.errorLog, p.interval, p.accessTimeout), K(p.configApp, p.configLogin, p.enableCheck), x(p.configRequest, p.configVerify, p.configConfirm, p.configLogout), setTimeout(E, 500), Co(() => {
        u.value === !0 ? I.value = !0 : I.value = !1;
      });
    });
    const p = e;
    function w() {
      l.value == null || l.value == null || l.value == "" || window.open(l.value, "new_window");
    }
    return (g, y) => (we(), _e("div", null, [
      ot("div", null, [
        ot("div", Gl, [
          re(u) && !p.isMobileScreen ? (we(), _e("div", {
            key: 0,
            title: re(o)("auth.codelight"),
            onClick: [
              w,
              fn(w, ["prevent"])
            ],
            target: "_blank",
            style: { "text-align": "center", cursor: "pointer" }
          }, [
            M.value ? (we(), pn(re(vo), {
              key: re(l),
              width: 300,
              height: 300,
              value: re(l),
              image: e.logoDark.length == 0 ? re(Zl) : "",
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
                color: p.primaryDark,
                gradient: {
                  type: "linear",
                  rotation: 0,
                  colorStops: [
                    { offset: 0, color: p.primaryDark },
                    { offset: 1, color: p.primaryDark }
                  ]
                }
              },
              "background-options": { color: p.secondaryDark },
              "corners-square-options": { type: "dot", color: p.positionDark },
              "corners-dot-options": { type: void 0, color: p.positionDark },
              download: !1
            }, null, 8, ["value", "image", "dots-options", "background-options", "corners-square-options", "corners-dot-options"])) : qe("", !0),
            M.value ? qe("", !0) : (we(), pn(re(vo), {
              key: re(l),
              width: 300,
              height: 300,
              value: re(l),
              image: e.logoDark.length == 0 ? re(bo) : "",
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
                color: p.primaryLight,
                gradient: {
                  type: "linear",
                  rotation: 0,
                  colorStops: [
                    { offset: 0, color: p.primaryLight },
                    { offset: 1, color: p.primaryLight }
                  ]
                }
              },
              "background-options": { color: p.secondaryLight },
              "corners-square-options": { type: "dot", color: p.positionLight },
              "corners-dot-options": { type: void 0, color: p.positionLight },
              download: !1
            }, null, 8, ["value", "image", "dots-options", "background-options", "corners-square-options", "corners-dot-options"]))
          ], 8, $l)) : re(u) && p.isMobileScreen ? (we(), _e("div", ed, [
            I.value ? (we(), _e("button", {
              key: 0,
              style: ai([{ width: "300px", height: "300px" }, [M.value ? { backgroundColor: p.primaryDark, color: p.accentColor } : { backgroundColor: p.primaryLight, color: p.accentColor }]]),
              onClick: [
                w,
                fn(w, ["prevent"])
              ]
            }, [
              ot("img", {
                width: "150",
                src: e.logoDark.length == 0 ? re(bo) : ""
              }, null, 8, td),
              nd,
              rd,
              e.hideText ? qe("", !0) : (we(), _e("span", od, ci(re(o)("auth.login")), 1))
            ], 4)) : qe("", !0)
          ])) : (we(), _e("div", sd, [
            re(j) ? (we(), _e("div", {
              key: 0,
              onClick: [
                B,
                fn(B, ["prevent"])
              ],
              style: { width: "300px", height: "300px", "align-items": "middle", cursor: "pointer" }
            }, ad)) : qe("", !0),
            re(j) ? qe("", !0) : (we(), pn(Zs, {
              key: 1,
              width: "300px",
              disabled: !1,
              dark: M.value,
              height: "300px"
            }, null, 8, ["dark"]))
          ])),
          (re(u) && !p.isMobileScreen || !re(u)) && !e.hideText ? (we(), _e("div", {
            key: 3,
            innerHTML: re(c),
            style: { "text-align": "center" }
          }, null, 8, cd)) : qe("", !0)
        ])
      ])
    ]));
  }
}), dd = {
  install: (e) => {
    e.component("Login", ud), e.component("Prelogin", Zs);
  }
};
export {
  ud as Login,
  Zs as Prelogin,
  dd as default,
  Sc as useNoPWD
};
