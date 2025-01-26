import { ref as se, getCurrentInstance as ri, onMounted as ko, nextTick as _o, unref as te, getCurrentScope as oi, onScopeDispose as si, watch as Ie, shallowRef as ii, defineComponent as Ro, useCssVars as ai, watchEffect as No, openBlock as ge, createElementBlock as xe, normalizeClass as ci, computed as Sr, createElementVNode as Te, toDisplayString as Dr, withModifiers as gn, createBlock as wn, createCommentVNode as Ke, normalizeStyle as ui } from "vue";
const li = {
  "auth.codedark": "Code not reading? Flip to light-mode.",
  "auth.codelight": "App installed locally? Click QRCode",
  "auth.codeerror": "Error requesting code, <br/>please refresh page.",
  "auth.loading": "Loading access code, please wait...",
  "auth.prepare": "Preparing interface...",
  "auth.login": "Click to Login",
  "auth.notmounted": "QR Code authentication is currently disabled"
}, di = {
  en: li
};
function xo(e = {}) {
  const t = se({ ...di, ...e }), n = se("en");
  return { t: (o) => {
    const i = t.value[n.value][o];
    return i === void 0 ? (console.warn(`Translation not found for key: ${o}`), o) : i;
  } };
}
var kr;
const Bo = typeof window < "u", fi = (e) => typeof e == "function", pi = (e) => typeof e == "string", hi = () => {
};
Bo && ((kr = window == null ? void 0 : window.navigator) != null && kr.userAgent) && /iP(ad|hone|od)/.test(window.navigator.userAgent);
function To(e) {
  return typeof e == "function" ? e() : te(e);
}
function gi(e, t) {
  function n(...r) {
    return new Promise((o, i) => {
      Promise.resolve(e(() => t.apply(this, r), { fn: t, thisArg: this, args: r })).then(o).catch(i);
    });
  }
  return n;
}
const Po = (e) => e();
function wi(e = Po) {
  const t = se(!0);
  function n() {
    t.value = !1;
  }
  function r() {
    t.value = !0;
  }
  return { isActive: t, pause: n, resume: r, eventFilter: (...i) => {
    t.value && e(...i);
  } };
}
function mi(e) {
  return e;
}
function yi(e) {
  return oi() ? (si(e), !0) : !1;
}
function vi(e, t = !0) {
  ri() ? ko(e) : t ? e() : _o(e);
}
var _r = Object.getOwnPropertySymbols, bi = Object.prototype.hasOwnProperty, Ai = Object.prototype.propertyIsEnumerable, Ei = (e, t) => {
  var n = {};
  for (var r in e)
    bi.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && _r)
    for (var r of _r(e))
      t.indexOf(r) < 0 && Ai.call(e, r) && (n[r] = e[r]);
  return n;
};
function Oi(e, t, n = {}) {
  const r = n, {
    eventFilter: o = Po
  } = r, i = Ei(r, [
    "eventFilter"
  ]);
  return Ie(e, gi(o, t), i);
}
var Ci = Object.defineProperty, Si = Object.defineProperties, Di = Object.getOwnPropertyDescriptors, Ft = Object.getOwnPropertySymbols, Mo = Object.prototype.hasOwnProperty, Lo = Object.prototype.propertyIsEnumerable, Rr = (e, t, n) => t in e ? Ci(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, ki = (e, t) => {
  for (var n in t || (t = {}))
    Mo.call(t, n) && Rr(e, n, t[n]);
  if (Ft)
    for (var n of Ft(t))
      Lo.call(t, n) && Rr(e, n, t[n]);
  return e;
}, _i = (e, t) => Si(e, Di(t)), Ri = (e, t) => {
  var n = {};
  for (var r in e)
    Mo.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && Ft)
    for (var r of Ft(e))
      t.indexOf(r) < 0 && Lo.call(e, r) && (n[r] = e[r]);
  return n;
};
function Ni(e, t, n = {}) {
  const r = n, {
    eventFilter: o
  } = r, i = Ri(r, [
    "eventFilter"
  ]), { eventFilter: s, pause: a, resume: u, isActive: p } = wi(o);
  return { stop: Oi(e, t, _i(ki({}, i), {
    eventFilter: s
  })), pause: a, resume: u, isActive: p };
}
function xi(e) {
  var t;
  const n = To(e);
  return (t = n == null ? void 0 : n.$el) != null ? t : n;
}
const Nn = Bo ? window : void 0;
function Bi(...e) {
  let t, n, r, o;
  if (pi(e[0]) || Array.isArray(e[0]) ? ([n, r, o] = e, t = Nn) : [t, n, r, o] = e, !t)
    return hi;
  Array.isArray(n) || (n = [n]), Array.isArray(r) || (r = [r]);
  const i = [], s = () => {
    i.forEach((d) => d()), i.length = 0;
  }, a = (d, c, E) => (d.addEventListener(c, E, o), () => d.removeEventListener(c, E, o)), u = Ie(() => xi(t), (d) => {
    s(), d && i.push(...n.flatMap((c) => r.map((E) => a(d, c, E))));
  }, { immediate: !0, flush: "post" }), p = () => {
    u(), s();
  };
  return yi(p), p;
}
const xn = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, Bn = "__vueuse_ssr_handlers__";
xn[Bn] = xn[Bn] || {};
const Ti = xn[Bn];
function Pi(e, t) {
  return Ti[e] || t;
}
function Mi(e) {
  return e == null ? "any" : e instanceof Set ? "set" : e instanceof Map ? "map" : e instanceof Date ? "date" : typeof e == "boolean" ? "boolean" : typeof e == "string" ? "string" : typeof e == "object" ? "object" : Number.isNaN(e) ? "any" : "number";
}
var Li = Object.defineProperty, Nr = Object.getOwnPropertySymbols, Ii = Object.prototype.hasOwnProperty, Ji = Object.prototype.propertyIsEnumerable, xr = (e, t, n) => t in e ? Li(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, Br = (e, t) => {
  for (var n in t || (t = {}))
    Ii.call(t, n) && xr(e, n, t[n]);
  if (Nr)
    for (var n of Nr(t))
      Ji.call(t, n) && xr(e, n, t[n]);
  return e;
};
const Qi = {
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
function ae(e, t, n, r = {}) {
  var o;
  const {
    flush: i = "pre",
    deep: s = !0,
    listenToStorageChanges: a = !0,
    writeDefaults: u = !0,
    mergeDefaults: p = !1,
    shallow: d,
    window: c = Nn,
    eventFilter: E,
    onError: _ = (w) => {
      console.error(w);
    }
  } = r, R = (d ? ii : se)(t);
  if (!n)
    try {
      n = Pi("getDefaultStorage", () => {
        var w;
        return (w = Nn) == null ? void 0 : w.localStorage;
      })();
    } catch (w) {
      _(w);
    }
  if (!n)
    return R;
  const x = To(t), L = Mi(x), j = (o = r.serializer) != null ? o : Qi[L], { pause: F, resume: M } = Ni(R, () => Q(R.value), { flush: i, deep: s, eventFilter: E });
  return c && a && Bi(c, "storage", B), B(), R;
  function Q(w) {
    try {
      if (w == null)
        n.removeItem(e);
      else {
        const A = j.write(w), h = n.getItem(e);
        h !== A && (n.setItem(e, A), c && (c == null || c.dispatchEvent(new StorageEvent("storage", {
          key: e,
          oldValue: h,
          newValue: A,
          storageArea: n
        }))));
      }
    } catch (A) {
      _(A);
    }
  }
  function C(w) {
    const A = w ? w.newValue : n.getItem(e);
    if (A == null)
      return u && x !== null && n.setItem(e, j.write(x)), x;
    if (!w && p) {
      const h = j.read(A);
      return fi(p) ? p(h, x) : L === "object" && !Array.isArray(h) ? Br(Br({}, x), h) : h;
    } else
      return typeof A != "string" ? A : j.read(A);
  }
  function B(w) {
    if (!(w && w.storageArea !== n)) {
      if (w && w.key == null) {
        R.value = x;
        return;
      }
      if (!(w && w.key !== e)) {
        F();
        try {
          R.value = C(w);
        } catch (A) {
          _(A);
        } finally {
          w ? _o(M) : M();
        }
      }
    }
  }
}
var Tr;
(function(e) {
  e.UP = "UP", e.RIGHT = "RIGHT", e.DOWN = "DOWN", e.LEFT = "LEFT", e.NONE = "NONE";
})(Tr || (Tr = {}));
var qi = Object.defineProperty, Pr = Object.getOwnPropertySymbols, ji = Object.prototype.hasOwnProperty, Fi = Object.prototype.propertyIsEnumerable, Mr = (e, t, n) => t in e ? qi(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, Hi = (e, t) => {
  for (var n in t || (t = {}))
    ji.call(t, n) && Mr(e, n, t[n]);
  if (Pr)
    for (var n of Pr(t))
      Fi.call(t, n) && Mr(e, n, t[n]);
  return e;
};
const Ui = {
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
Hi({
  linear: mi
}, Ui);
var Ki = (
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
), We = Ki;
function Io(e, t) {
  return function() {
    return e.apply(t, arguments);
  };
}
const { toString: zi } = Object.prototype, { getPrototypeOf: Yn } = Object, en = ((e) => (t) => {
  const n = zi.call(t);
  return e[n] || (e[n] = n.slice(8, -1).toLowerCase());
})(/* @__PURE__ */ Object.create(null)), Ne = (e) => (e = e.toLowerCase(), (t) => en(t) === e), tn = (e) => (t) => typeof t === e, { isArray: pt } = Array, vt = tn("undefined");
function Vi(e) {
  return e !== null && !vt(e) && e.constructor !== null && !vt(e.constructor) && Oe(e.constructor.isBuffer) && e.constructor.isBuffer(e);
}
const Jo = Ne("ArrayBuffer");
function Wi(e) {
  let t;
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? t = ArrayBuffer.isView(e) : t = e && e.buffer && Jo(e.buffer), t;
}
const Xi = tn("string"), Oe = tn("function"), Qo = tn("number"), nn = (e) => e !== null && typeof e == "object", Yi = (e) => e === !0 || e === !1, Lt = (e) => {
  if (en(e) !== "object")
    return !1;
  const t = Yn(e);
  return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(Symbol.toStringTag in e) && !(Symbol.iterator in e);
}, Zi = Ne("Date"), Gi = Ne("File"), $i = Ne("Blob"), ea = Ne("FileList"), ta = (e) => nn(e) && Oe(e.pipe), na = (e) => {
  let t;
  return e && (typeof FormData == "function" && e instanceof FormData || Oe(e.append) && ((t = en(e)) === "formdata" || // detect form-data instance
  t === "object" && Oe(e.toString) && e.toString() === "[object FormData]"));
}, ra = Ne("URLSearchParams"), [oa, sa, ia, aa] = ["ReadableStream", "Request", "Response", "Headers"].map(Ne), ca = (e) => e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function St(e, t, { allOwnKeys: n = !1 } = {}) {
  if (e === null || typeof e > "u")
    return;
  let r, o;
  if (typeof e != "object" && (e = [e]), pt(e))
    for (r = 0, o = e.length; r < o; r++)
      t.call(null, e[r], r, e);
  else {
    const i = n ? Object.getOwnPropertyNames(e) : Object.keys(e), s = i.length;
    let a;
    for (r = 0; r < s; r++)
      a = i[r], t.call(null, e[a], a, e);
  }
}
function qo(e, t) {
  t = t.toLowerCase();
  const n = Object.keys(e);
  let r = n.length, o;
  for (; r-- > 0; )
    if (o = n[r], t === o.toLowerCase())
      return o;
  return null;
}
const jo = (() => typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : global)(), Fo = (e) => !vt(e) && e !== jo;
function Tn() {
  const { caseless: e } = Fo(this) && this || {}, t = {}, n = (r, o) => {
    const i = e && qo(t, o) || o;
    Lt(t[i]) && Lt(r) ? t[i] = Tn(t[i], r) : Lt(r) ? t[i] = Tn({}, r) : pt(r) ? t[i] = r.slice() : t[i] = r;
  };
  for (let r = 0, o = arguments.length; r < o; r++)
    arguments[r] && St(arguments[r], n);
  return t;
}
const ua = (e, t, n, { allOwnKeys: r } = {}) => (St(t, (o, i) => {
  n && Oe(o) ? e[i] = Io(o, n) : e[i] = o;
}, { allOwnKeys: r }), e), la = (e) => (e.charCodeAt(0) === 65279 && (e = e.slice(1)), e), da = (e, t, n, r) => {
  e.prototype = Object.create(t.prototype, r), e.prototype.constructor = e, Object.defineProperty(e, "super", {
    value: t.prototype
  }), n && Object.assign(e.prototype, n);
}, fa = (e, t, n, r) => {
  let o, i, s;
  const a = {};
  if (t = t || {}, e == null)
    return t;
  do {
    for (o = Object.getOwnPropertyNames(e), i = o.length; i-- > 0; )
      s = o[i], (!r || r(s, e, t)) && !a[s] && (t[s] = e[s], a[s] = !0);
    e = n !== !1 && Yn(e);
  } while (e && (!n || n(e, t)) && e !== Object.prototype);
  return t;
}, pa = (e, t, n) => {
  e = String(e), (n === void 0 || n > e.length) && (n = e.length), n -= t.length;
  const r = e.indexOf(t, n);
  return r !== -1 && r === n;
}, ha = (e) => {
  if (!e)
    return null;
  if (pt(e))
    return e;
  let t = e.length;
  if (!Qo(t))
    return null;
  const n = new Array(t);
  for (; t-- > 0; )
    n[t] = e[t];
  return n;
}, ga = ((e) => (t) => e && t instanceof e)(typeof Uint8Array < "u" && Yn(Uint8Array)), wa = (e, t) => {
  const r = (e && e[Symbol.iterator]).call(e);
  let o;
  for (; (o = r.next()) && !o.done; ) {
    const i = o.value;
    t.call(e, i[0], i[1]);
  }
}, ma = (e, t) => {
  let n;
  const r = [];
  for (; (n = e.exec(t)) !== null; )
    r.push(n);
  return r;
}, ya = Ne("HTMLFormElement"), va = (e) => e.toLowerCase().replace(
  /[-_\s]([a-z\d])(\w*)/g,
  function(n, r, o) {
    return r.toUpperCase() + o;
  }
), Lr = (({ hasOwnProperty: e }) => (t, n) => e.call(t, n))(Object.prototype), ba = Ne("RegExp"), Ho = (e, t) => {
  const n = Object.getOwnPropertyDescriptors(e), r = {};
  St(n, (o, i) => {
    let s;
    (s = t(o, i, e)) !== !1 && (r[i] = s || o);
  }), Object.defineProperties(e, r);
}, Aa = (e) => {
  Ho(e, (t, n) => {
    if (Oe(e) && ["arguments", "caller", "callee"].indexOf(n) !== -1)
      return !1;
    const r = e[n];
    if (Oe(r)) {
      if (t.enumerable = !1, "writable" in t) {
        t.writable = !1;
        return;
      }
      t.set || (t.set = () => {
        throw Error("Can not rewrite read-only method '" + n + "'");
      });
    }
  });
}, Ea = (e, t) => {
  const n = {}, r = (o) => {
    o.forEach((i) => {
      n[i] = !0;
    });
  };
  return pt(e) ? r(e) : r(String(e).split(t)), n;
}, Oa = () => {
}, Ca = (e, t) => e != null && Number.isFinite(e = +e) ? e : t, mn = "abcdefghijklmnopqrstuvwxyz", Ir = "0123456789", Uo = {
  DIGIT: Ir,
  ALPHA: mn,
  ALPHA_DIGIT: mn + mn.toUpperCase() + Ir
}, Sa = (e = 16, t = Uo.ALPHA_DIGIT) => {
  let n = "";
  const { length: r } = t;
  for (; e--; )
    n += t[Math.random() * r | 0];
  return n;
};
function Da(e) {
  return !!(e && Oe(e.append) && e[Symbol.toStringTag] === "FormData" && e[Symbol.iterator]);
}
const ka = (e) => {
  const t = new Array(10), n = (r, o) => {
    if (nn(r)) {
      if (t.indexOf(r) >= 0)
        return;
      if (!("toJSON" in r)) {
        t[o] = r;
        const i = pt(r) ? [] : {};
        return St(r, (s, a) => {
          const u = n(s, o + 1);
          !vt(u) && (i[a] = u);
        }), t[o] = void 0, i;
      }
    }
    return r;
  };
  return n(e, 0);
}, _a = Ne("AsyncFunction"), Ra = (e) => e && (nn(e) || Oe(e)) && Oe(e.then) && Oe(e.catch), v = {
  isArray: pt,
  isArrayBuffer: Jo,
  isBuffer: Vi,
  isFormData: na,
  isArrayBufferView: Wi,
  isString: Xi,
  isNumber: Qo,
  isBoolean: Yi,
  isObject: nn,
  isPlainObject: Lt,
  isReadableStream: oa,
  isRequest: sa,
  isResponse: ia,
  isHeaders: aa,
  isUndefined: vt,
  isDate: Zi,
  isFile: Gi,
  isBlob: $i,
  isRegExp: ba,
  isFunction: Oe,
  isStream: ta,
  isURLSearchParams: ra,
  isTypedArray: ga,
  isFileList: ea,
  forEach: St,
  merge: Tn,
  extend: ua,
  trim: ca,
  stripBOM: la,
  inherits: da,
  toFlatObject: fa,
  kindOf: en,
  kindOfTest: Ne,
  endsWith: pa,
  toArray: ha,
  forEachEntry: wa,
  matchAll: ma,
  isHTMLForm: ya,
  hasOwnProperty: Lr,
  hasOwnProp: Lr,
  // an alias to avoid ESLint no-prototype-builtins detection
  reduceDescriptors: Ho,
  freezeMethods: Aa,
  toObjectSet: Ea,
  toCamelCase: va,
  noop: Oa,
  toFiniteNumber: Ca,
  findKey: qo,
  global: jo,
  isContextDefined: Fo,
  ALPHABET: Uo,
  generateString: Sa,
  isSpecCompliantForm: Da,
  toJSONObject: ka,
  isAsyncFn: _a,
  isThenable: Ra
};
function K(e, t, n, r, o) {
  Error.call(this), Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : this.stack = new Error().stack, this.message = e, this.name = "AxiosError", t && (this.code = t), n && (this.config = n), r && (this.request = r), o && (this.response = o);
}
v.inherits(K, Error, {
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
      config: v.toJSONObject(this.config),
      code: this.code,
      status: this.response && this.response.status ? this.response.status : null
    };
  }
});
const Ko = K.prototype, zo = {};
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
  zo[e] = { value: e };
});
Object.defineProperties(K, zo);
Object.defineProperty(Ko, "isAxiosError", { value: !0 });
K.from = (e, t, n, r, o, i) => {
  const s = Object.create(Ko);
  return v.toFlatObject(e, s, function(u) {
    return u !== Error.prototype;
  }, (a) => a !== "isAxiosError"), K.call(s, e.message, t, n, r, o), s.cause = e, s.name = e.name, i && Object.assign(s, i), s;
};
const Na = null;
function Pn(e) {
  return v.isPlainObject(e) || v.isArray(e);
}
function Vo(e) {
  return v.endsWith(e, "[]") ? e.slice(0, -2) : e;
}
function Jr(e, t, n) {
  return e ? e.concat(t).map(function(o, i) {
    return o = Vo(o), !n && i ? "[" + o + "]" : o;
  }).join(n ? "." : "") : t;
}
function xa(e) {
  return v.isArray(e) && !e.some(Pn);
}
const Ba = v.toFlatObject(v, {}, null, function(t) {
  return /^is[A-Z]/.test(t);
});
function rn(e, t, n) {
  if (!v.isObject(e))
    throw new TypeError("target must be an object");
  t = t || new FormData(), n = v.toFlatObject(n, {
    metaTokens: !0,
    dots: !1,
    indexes: !1
  }, !1, function(x, L) {
    return !v.isUndefined(L[x]);
  });
  const r = n.metaTokens, o = n.visitor || d, i = n.dots, s = n.indexes, u = (n.Blob || typeof Blob < "u" && Blob) && v.isSpecCompliantForm(t);
  if (!v.isFunction(o))
    throw new TypeError("visitor must be a function");
  function p(R) {
    if (R === null)
      return "";
    if (v.isDate(R))
      return R.toISOString();
    if (!u && v.isBlob(R))
      throw new K("Blob is not supported. Use a Buffer instead.");
    return v.isArrayBuffer(R) || v.isTypedArray(R) ? u && typeof Blob == "function" ? new Blob([R]) : Buffer.from(R) : R;
  }
  function d(R, x, L) {
    let j = R;
    if (R && !L && typeof R == "object") {
      if (v.endsWith(x, "{}"))
        x = r ? x : x.slice(0, -2), R = JSON.stringify(R);
      else if (v.isArray(R) && xa(R) || (v.isFileList(R) || v.endsWith(x, "[]")) && (j = v.toArray(R)))
        return x = Vo(x), j.forEach(function(M, Q) {
          !(v.isUndefined(M) || M === null) && t.append(
            // eslint-disable-next-line no-nested-ternary
            s === !0 ? Jr([x], Q, i) : s === null ? x : x + "[]",
            p(M)
          );
        }), !1;
    }
    return Pn(R) ? !0 : (t.append(Jr(L, x, i), p(R)), !1);
  }
  const c = [], E = Object.assign(Ba, {
    defaultVisitor: d,
    convertValue: p,
    isVisitable: Pn
  });
  function _(R, x) {
    if (!v.isUndefined(R)) {
      if (c.indexOf(R) !== -1)
        throw Error("Circular reference detected in " + x.join("."));
      c.push(R), v.forEach(R, function(j, F) {
        (!(v.isUndefined(j) || j === null) && o.call(
          t,
          j,
          v.isString(F) ? F.trim() : F,
          x,
          E
        )) === !0 && _(j, x ? x.concat(F) : [F]);
      }), c.pop();
    }
  }
  if (!v.isObject(e))
    throw new TypeError("data must be an object");
  return _(e), t;
}
function Qr(e) {
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
function Zn(e, t) {
  this._pairs = [], e && rn(e, this, t);
}
const Wo = Zn.prototype;
Wo.append = function(t, n) {
  this._pairs.push([t, n]);
};
Wo.toString = function(t) {
  const n = t ? function(r) {
    return t.call(this, r, Qr);
  } : Qr;
  return this._pairs.map(function(o) {
    return n(o[0]) + "=" + n(o[1]);
  }, "").join("&");
};
function Ta(e) {
  return encodeURIComponent(e).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
}
function Xo(e, t, n) {
  if (!t)
    return e;
  const r = n && n.encode || Ta, o = n && n.serialize;
  let i;
  if (o ? i = o(t, n) : i = v.isURLSearchParams(t) ? t.toString() : new Zn(t, n).toString(r), i) {
    const s = e.indexOf("#");
    s !== -1 && (e = e.slice(0, s)), e += (e.indexOf("?") === -1 ? "?" : "&") + i;
  }
  return e;
}
class Pa {
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
    v.forEach(this.handlers, function(r) {
      r !== null && t(r);
    });
  }
}
const qr = Pa, Yo = {
  silentJSONParsing: !0,
  forcedJSONParsing: !0,
  clarifyTimeoutError: !1
}, Ma = typeof URLSearchParams < "u" ? URLSearchParams : Zn, La = typeof FormData < "u" ? FormData : null, Ia = typeof Blob < "u" ? Blob : null, Ja = {
  isBrowser: !0,
  classes: {
    URLSearchParams: Ma,
    FormData: La,
    Blob: Ia
  },
  protocols: ["http", "https", "file", "blob", "url", "data"]
}, Gn = typeof window < "u" && typeof document < "u", Qa = ((e) => Gn && ["ReactNative", "NativeScript", "NS"].indexOf(e) < 0)(typeof navigator < "u" && navigator.product), qa = (() => typeof WorkerGlobalScope < "u" && // eslint-disable-next-line no-undef
self instanceof WorkerGlobalScope && typeof self.importScripts == "function")(), ja = Gn && window.location.href || "http://localhost", Fa = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  hasBrowserEnv: Gn,
  hasStandardBrowserEnv: Qa,
  hasStandardBrowserWebWorkerEnv: qa,
  origin: ja
}, Symbol.toStringTag, { value: "Module" })), _e = {
  ...Fa,
  ...Ja
};
function Ha(e, t) {
  return rn(e, new _e.classes.URLSearchParams(), Object.assign({
    visitor: function(n, r, o, i) {
      return _e.isNode && v.isBuffer(n) ? (this.append(r, n.toString("base64")), !1) : i.defaultVisitor.apply(this, arguments);
    }
  }, t));
}
function Ua(e) {
  return v.matchAll(/\w+|\[(\w*)]/g, e).map((t) => t[0] === "[]" ? "" : t[1] || t[0]);
}
function Ka(e) {
  const t = {}, n = Object.keys(e);
  let r;
  const o = n.length;
  let i;
  for (r = 0; r < o; r++)
    i = n[r], t[i] = e[i];
  return t;
}
function Zo(e) {
  function t(n, r, o, i) {
    let s = n[i++];
    if (s === "__proto__")
      return !0;
    const a = Number.isFinite(+s), u = i >= n.length;
    return s = !s && v.isArray(o) ? o.length : s, u ? (v.hasOwnProp(o, s) ? o[s] = [o[s], r] : o[s] = r, !a) : ((!o[s] || !v.isObject(o[s])) && (o[s] = []), t(n, r, o[s], i) && v.isArray(o[s]) && (o[s] = Ka(o[s])), !a);
  }
  if (v.isFormData(e) && v.isFunction(e.entries)) {
    const n = {};
    return v.forEachEntry(e, (r, o) => {
      t(Ua(r), o, n, 0);
    }), n;
  }
  return null;
}
function za(e, t, n) {
  if (v.isString(e))
    try {
      return (t || JSON.parse)(e), v.trim(e);
    } catch (r) {
      if (r.name !== "SyntaxError")
        throw r;
    }
  return (n || JSON.stringify)(e);
}
const $n = {
  transitional: Yo,
  adapter: ["xhr", "http", "fetch"],
  transformRequest: [function(t, n) {
    const r = n.getContentType() || "", o = r.indexOf("application/json") > -1, i = v.isObject(t);
    if (i && v.isHTMLForm(t) && (t = new FormData(t)), v.isFormData(t))
      return o ? JSON.stringify(Zo(t)) : t;
    if (v.isArrayBuffer(t) || v.isBuffer(t) || v.isStream(t) || v.isFile(t) || v.isBlob(t) || v.isReadableStream(t))
      return t;
    if (v.isArrayBufferView(t))
      return t.buffer;
    if (v.isURLSearchParams(t))
      return n.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1), t.toString();
    let a;
    if (i) {
      if (r.indexOf("application/x-www-form-urlencoded") > -1)
        return Ha(t, this.formSerializer).toString();
      if ((a = v.isFileList(t)) || r.indexOf("multipart/form-data") > -1) {
        const u = this.env && this.env.FormData;
        return rn(
          a ? { "files[]": t } : t,
          u && new u(),
          this.formSerializer
        );
      }
    }
    return i || o ? (n.setContentType("application/json", !1), za(t)) : t;
  }],
  transformResponse: [function(t) {
    const n = this.transitional || $n.transitional, r = n && n.forcedJSONParsing, o = this.responseType === "json";
    if (v.isResponse(t) || v.isReadableStream(t))
      return t;
    if (t && v.isString(t) && (r && !this.responseType || o)) {
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
    FormData: _e.classes.FormData,
    Blob: _e.classes.Blob
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
v.forEach(["delete", "get", "head", "post", "put", "patch"], (e) => {
  $n.headers[e] = {};
});
const er = $n, Va = v.toObjectSet([
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
]), Wa = (e) => {
  const t = {};
  let n, r, o;
  return e && e.split(`
`).forEach(function(s) {
    o = s.indexOf(":"), n = s.substring(0, o).trim().toLowerCase(), r = s.substring(o + 1).trim(), !(!n || t[n] && Va[n]) && (n === "set-cookie" ? t[n] ? t[n].push(r) : t[n] = [r] : t[n] = t[n] ? t[n] + ", " + r : r);
  }), t;
}, jr = Symbol("internals");
function gt(e) {
  return e && String(e).trim().toLowerCase();
}
function It(e) {
  return e === !1 || e == null ? e : v.isArray(e) ? e.map(It) : String(e);
}
function Xa(e) {
  const t = /* @__PURE__ */ Object.create(null), n = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let r;
  for (; r = n.exec(e); )
    t[r[1]] = r[2];
  return t;
}
const Ya = (e) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());
function yn(e, t, n, r, o) {
  if (v.isFunction(r))
    return r.call(this, t, n);
  if (o && (t = n), !!v.isString(t)) {
    if (v.isString(r))
      return t.indexOf(r) !== -1;
    if (v.isRegExp(r))
      return r.test(t);
  }
}
function Za(e) {
  return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (t, n, r) => n.toUpperCase() + r);
}
function Ga(e, t) {
  const n = v.toCamelCase(" " + t);
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
    function i(a, u, p) {
      const d = gt(u);
      if (!d)
        throw new Error("header name must be a non-empty string");
      const c = v.findKey(o, d);
      (!c || o[c] === void 0 || p === !0 || p === void 0 && o[c] !== !1) && (o[c || u] = It(a));
    }
    const s = (a, u) => v.forEach(a, (p, d) => i(p, d, u));
    if (v.isPlainObject(t) || t instanceof this.constructor)
      s(t, n);
    else if (v.isString(t) && (t = t.trim()) && !Ya(t))
      s(Wa(t), n);
    else if (v.isHeaders(t))
      for (const [a, u] of t.entries())
        i(u, a, r);
    else
      t != null && i(n, t, r);
    return this;
  }
  get(t, n) {
    if (t = gt(t), t) {
      const r = v.findKey(this, t);
      if (r) {
        const o = this[r];
        if (!n)
          return o;
        if (n === !0)
          return Xa(o);
        if (v.isFunction(n))
          return n.call(this, o, r);
        if (v.isRegExp(n))
          return n.exec(o);
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(t, n) {
    if (t = gt(t), t) {
      const r = v.findKey(this, t);
      return !!(r && this[r] !== void 0 && (!n || yn(this, this[r], r, n)));
    }
    return !1;
  }
  delete(t, n) {
    const r = this;
    let o = !1;
    function i(s) {
      if (s = gt(s), s) {
        const a = v.findKey(r, s);
        a && (!n || yn(r, r[a], a, n)) && (delete r[a], o = !0);
      }
    }
    return v.isArray(t) ? t.forEach(i) : i(t), o;
  }
  clear(t) {
    const n = Object.keys(this);
    let r = n.length, o = !1;
    for (; r--; ) {
      const i = n[r];
      (!t || yn(this, this[i], i, t, !0)) && (delete this[i], o = !0);
    }
    return o;
  }
  normalize(t) {
    const n = this, r = {};
    return v.forEach(this, (o, i) => {
      const s = v.findKey(r, i);
      if (s) {
        n[s] = It(o), delete n[i];
        return;
      }
      const a = t ? Za(i) : String(i).trim();
      a !== i && delete n[i], n[a] = It(o), r[a] = !0;
    }), this;
  }
  concat(...t) {
    return this.constructor.concat(this, ...t);
  }
  toJSON(t) {
    const n = /* @__PURE__ */ Object.create(null);
    return v.forEach(this, (r, o) => {
      r != null && r !== !1 && (n[o] = t && v.isArray(r) ? r.join(", ") : r);
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
    const r = (this[jr] = this[jr] = {
      accessors: {}
    }).accessors, o = this.prototype;
    function i(s) {
      const a = gt(s);
      r[a] || (Ga(o, s), r[a] = !0);
    }
    return v.isArray(t) ? t.forEach(i) : i(t), this;
  }
}
on.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization"]);
v.reduceDescriptors(on.prototype, ({ value: e }, t) => {
  let n = t[0].toUpperCase() + t.slice(1);
  return {
    get: () => e,
    set(r) {
      this[n] = r;
    }
  };
});
v.freezeMethods(on);
const Re = on;
function vn(e, t) {
  const n = this || er, r = t || n, o = Re.from(r.headers);
  let i = r.data;
  return v.forEach(e, function(a) {
    i = a.call(n, i, o.normalize(), t ? t.status : void 0);
  }), o.normalize(), i;
}
function Go(e) {
  return !!(e && e.__CANCEL__);
}
function ht(e, t, n) {
  K.call(this, e ?? "canceled", K.ERR_CANCELED, t, n), this.name = "CanceledError";
}
v.inherits(ht, K, {
  __CANCEL__: !0
});
function $o(e, t, n) {
  const r = n.config.validateStatus;
  !n.status || !r || r(n.status) ? e(n) : t(new K(
    "Request failed with status code " + n.status,
    [K.ERR_BAD_REQUEST, K.ERR_BAD_RESPONSE][Math.floor(n.status / 100) - 4],
    n.config,
    n.request,
    n
  ));
}
function $a(e) {
  const t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
  return t && t[1] || "";
}
function ec(e, t) {
  e = e || 10;
  const n = new Array(e), r = new Array(e);
  let o = 0, i = 0, s;
  return t = t !== void 0 ? t : 1e3, function(u) {
    const p = Date.now(), d = r[i];
    s || (s = p), n[o] = u, r[o] = p;
    let c = i, E = 0;
    for (; c !== o; )
      E += n[c++], c = c % e;
    if (o = (o + 1) % e, o === i && (i = (i + 1) % e), p - s < t)
      return;
    const _ = d && p - d;
    return _ ? Math.round(E * 1e3 / _) : void 0;
  };
}
function tc(e, t) {
  let n = 0;
  const r = 1e3 / t;
  let o = null;
  return function() {
    const s = this === !0, a = Date.now();
    if (s || a - n > r)
      return o && (clearTimeout(o), o = null), n = a, e.apply(null, arguments);
    o || (o = setTimeout(() => (o = null, n = Date.now(), e.apply(null, arguments)), r - (a - n)));
  };
}
const Ht = (e, t, n = 3) => {
  let r = 0;
  const o = ec(50, 250);
  return tc((i) => {
    const s = i.loaded, a = i.lengthComputable ? i.total : void 0, u = s - r, p = o(u), d = s <= a;
    r = s;
    const c = {
      loaded: s,
      total: a,
      progress: a ? s / a : void 0,
      bytes: u,
      rate: p || void 0,
      estimated: p && a && d ? (a - s) / p : void 0,
      event: i,
      lengthComputable: a != null
    };
    c[t ? "download" : "upload"] = !0, e(c);
  }, n);
}, nc = _e.hasStandardBrowserEnv ? (
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
      const a = v.isString(s) ? o(s) : s;
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
), rc = _e.hasStandardBrowserEnv ? (
  // Standard browser envs support document.cookie
  {
    write(e, t, n, r, o, i) {
      const s = [e + "=" + encodeURIComponent(t)];
      v.isNumber(n) && s.push("expires=" + new Date(n).toGMTString()), v.isString(r) && s.push("path=" + r), v.isString(o) && s.push("domain=" + o), i === !0 && s.push("secure"), document.cookie = s.join("; ");
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
function oc(e) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e);
}
function sc(e, t) {
  return t ? e.replace(/\/?\/$/, "") + "/" + t.replace(/^\/+/, "") : e;
}
function es(e, t) {
  return e && !oc(t) ? sc(e, t) : t;
}
const Fr = (e) => e instanceof Re ? { ...e } : e;
function et(e, t) {
  t = t || {};
  const n = {};
  function r(p, d, c) {
    return v.isPlainObject(p) && v.isPlainObject(d) ? v.merge.call({ caseless: c }, p, d) : v.isPlainObject(d) ? v.merge({}, d) : v.isArray(d) ? d.slice() : d;
  }
  function o(p, d, c) {
    if (v.isUndefined(d)) {
      if (!v.isUndefined(p))
        return r(void 0, p, c);
    } else
      return r(p, d, c);
  }
  function i(p, d) {
    if (!v.isUndefined(d))
      return r(void 0, d);
  }
  function s(p, d) {
    if (v.isUndefined(d)) {
      if (!v.isUndefined(p))
        return r(void 0, p);
    } else
      return r(void 0, d);
  }
  function a(p, d, c) {
    if (c in t)
      return r(p, d);
    if (c in e)
      return r(void 0, p);
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
    withXSRFToken: s,
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
    headers: (p, d) => o(Fr(p), Fr(d), !0)
  };
  return v.forEach(Object.keys(Object.assign({}, e, t)), function(d) {
    const c = u[d] || o, E = c(e[d], t[d], d);
    v.isUndefined(E) && c !== a || (n[d] = E);
  }), n;
}
const ts = (e) => {
  const t = et({}, e);
  let { data: n, withXSRFToken: r, xsrfHeaderName: o, xsrfCookieName: i, headers: s, auth: a } = t;
  t.headers = s = Re.from(s), t.url = Xo(es(t.baseURL, t.url), e.params, e.paramsSerializer), a && s.set(
    "Authorization",
    "Basic " + btoa((a.username || "") + ":" + (a.password ? unescape(encodeURIComponent(a.password)) : ""))
  );
  let u;
  if (v.isFormData(n)) {
    if (_e.hasStandardBrowserEnv || _e.hasStandardBrowserWebWorkerEnv)
      s.setContentType(void 0);
    else if ((u = s.getContentType()) !== !1) {
      const [p, ...d] = u ? u.split(";").map((c) => c.trim()).filter(Boolean) : [];
      s.setContentType([p || "multipart/form-data", ...d].join("; "));
    }
  }
  if (_e.hasStandardBrowserEnv && (r && v.isFunction(r) && (r = r(t)), r || r !== !1 && nc(t.url))) {
    const p = o && i && rc.read(i);
    p && s.set(o, p);
  }
  return t;
}, ic = typeof XMLHttpRequest < "u", ac = ic && function(e) {
  return new Promise(function(n, r) {
    const o = ts(e);
    let i = o.data;
    const s = Re.from(o.headers).normalize();
    let { responseType: a } = o, u;
    function p() {
      o.cancelToken && o.cancelToken.unsubscribe(u), o.signal && o.signal.removeEventListener("abort", u);
    }
    let d = new XMLHttpRequest();
    d.open(o.method.toUpperCase(), o.url, !0), d.timeout = o.timeout;
    function c() {
      if (!d)
        return;
      const _ = Re.from(
        "getAllResponseHeaders" in d && d.getAllResponseHeaders()
      ), x = {
        data: !a || a === "text" || a === "json" ? d.responseText : d.response,
        status: d.status,
        statusText: d.statusText,
        headers: _,
        config: e,
        request: d
      };
      $o(function(j) {
        n(j), p();
      }, function(j) {
        r(j), p();
      }, x), d = null;
    }
    "onloadend" in d ? d.onloadend = c : d.onreadystatechange = function() {
      !d || d.readyState !== 4 || d.status === 0 && !(d.responseURL && d.responseURL.indexOf("file:") === 0) || setTimeout(c);
    }, d.onabort = function() {
      d && (r(new K("Request aborted", K.ECONNABORTED, o, d)), d = null);
    }, d.onerror = function() {
      r(new K("Network Error", K.ERR_NETWORK, o, d)), d = null;
    }, d.ontimeout = function() {
      let R = o.timeout ? "timeout of " + o.timeout + "ms exceeded" : "timeout exceeded";
      const x = o.transitional || Yo;
      o.timeoutErrorMessage && (R = o.timeoutErrorMessage), r(new K(
        R,
        x.clarifyTimeoutError ? K.ETIMEDOUT : K.ECONNABORTED,
        o,
        d
      )), d = null;
    }, i === void 0 && s.setContentType(null), "setRequestHeader" in d && v.forEach(s.toJSON(), function(R, x) {
      d.setRequestHeader(x, R);
    }), v.isUndefined(o.withCredentials) || (d.withCredentials = !!o.withCredentials), a && a !== "json" && (d.responseType = o.responseType), typeof o.onDownloadProgress == "function" && d.addEventListener("progress", Ht(o.onDownloadProgress, !0)), typeof o.onUploadProgress == "function" && d.upload && d.upload.addEventListener("progress", Ht(o.onUploadProgress)), (o.cancelToken || o.signal) && (u = (_) => {
      d && (r(!_ || _.type ? new ht(null, e, d) : _), d.abort(), d = null);
    }, o.cancelToken && o.cancelToken.subscribe(u), o.signal && (o.signal.aborted ? u() : o.signal.addEventListener("abort", u)));
    const E = $a(o.url);
    if (E && _e.protocols.indexOf(E) === -1) {
      r(new K("Unsupported protocol " + E + ":", K.ERR_BAD_REQUEST, e));
      return;
    }
    d.send(i || null);
  });
}, cc = (e, t) => {
  let n = new AbortController(), r;
  const o = function(u) {
    if (!r) {
      r = !0, s();
      const p = u instanceof Error ? u : this.reason;
      n.abort(p instanceof K ? p : new ht(p instanceof Error ? p.message : p));
    }
  };
  let i = t && setTimeout(() => {
    o(new K(`timeout ${t} of ms exceeded`, K.ETIMEDOUT));
  }, t);
  const s = () => {
    e && (i && clearTimeout(i), i = null, e.forEach((u) => {
      u && (u.removeEventListener ? u.removeEventListener("abort", o) : u.unsubscribe(o));
    }), e = null);
  };
  e.forEach((u) => u && u.addEventListener && u.addEventListener("abort", o));
  const { signal: a } = n;
  return a.unsubscribe = s, [a, () => {
    i && clearTimeout(i), i = null;
  }];
}, uc = cc, lc = function* (e, t) {
  let n = e.byteLength;
  if (!t || n < t) {
    yield e;
    return;
  }
  let r = 0, o;
  for (; r < n; )
    o = r + t, yield e.slice(r, o), r = o;
}, dc = async function* (e, t, n) {
  for await (const r of e)
    yield* lc(ArrayBuffer.isView(r) ? r : await n(String(r)), t);
}, Hr = (e, t, n, r, o) => {
  const i = dc(e, t, o);
  let s = 0;
  return new ReadableStream({
    type: "bytes",
    async pull(a) {
      const { done: u, value: p } = await i.next();
      if (u) {
        a.close(), r();
        return;
      }
      let d = p.byteLength;
      n && n(s += d), a.enqueue(new Uint8Array(p));
    },
    cancel(a) {
      return r(a), i.return();
    }
  }, {
    highWaterMark: 2
  });
}, Ur = (e, t) => {
  const n = e != null;
  return (r) => setTimeout(() => t({
    lengthComputable: n,
    total: e,
    loaded: r
  }));
}, sn = typeof fetch == "function" && typeof Request == "function" && typeof Response == "function", ns = sn && typeof ReadableStream == "function", Mn = sn && (typeof TextEncoder == "function" ? ((e) => (t) => e.encode(t))(new TextEncoder()) : async (e) => new Uint8Array(await new Response(e).arrayBuffer())), fc = ns && (() => {
  let e = !1;
  const t = new Request(_e.origin, {
    body: new ReadableStream(),
    method: "POST",
    get duplex() {
      return e = !0, "half";
    }
  }).headers.has("Content-Type");
  return e && !t;
})(), Kr = 64 * 1024, Ln = ns && !!(() => {
  try {
    return v.isReadableStream(new Response("").body);
  } catch {
  }
})(), Ut = {
  stream: Ln && ((e) => e.body)
};
sn && ((e) => {
  ["text", "arrayBuffer", "blob", "formData", "stream"].forEach((t) => {
    !Ut[t] && (Ut[t] = v.isFunction(e[t]) ? (n) => n[t]() : (n, r) => {
      throw new K(`Response type '${t}' is not supported`, K.ERR_NOT_SUPPORT, r);
    });
  });
})(new Response());
const pc = async (e) => {
  if (e == null)
    return 0;
  if (v.isBlob(e))
    return e.size;
  if (v.isSpecCompliantForm(e))
    return (await new Request(e).arrayBuffer()).byteLength;
  if (v.isArrayBufferView(e))
    return e.byteLength;
  if (v.isURLSearchParams(e) && (e = e + ""), v.isString(e))
    return (await Mn(e)).byteLength;
}, hc = async (e, t) => {
  const n = v.toFiniteNumber(e.getContentLength());
  return n ?? pc(t);
}, gc = sn && (async (e) => {
  let {
    url: t,
    method: n,
    data: r,
    signal: o,
    cancelToken: i,
    timeout: s,
    onDownloadProgress: a,
    onUploadProgress: u,
    responseType: p,
    headers: d,
    withCredentials: c = "same-origin",
    fetchOptions: E
  } = ts(e);
  p = p ? (p + "").toLowerCase() : "text";
  let [_, R] = o || i || s ? uc([o, i], s) : [], x, L;
  const j = () => {
    !x && setTimeout(() => {
      _ && _.unsubscribe();
    }), x = !0;
  };
  let F;
  try {
    if (u && fc && n !== "get" && n !== "head" && (F = await hc(d, r)) !== 0) {
      let B = new Request(t, {
        method: "POST",
        body: r,
        duplex: "half"
      }), w;
      v.isFormData(r) && (w = B.headers.get("content-type")) && d.setContentType(w), B.body && (r = Hr(B.body, Kr, Ur(
        F,
        Ht(u)
      ), null, Mn));
    }
    v.isString(c) || (c = c ? "cors" : "omit"), L = new Request(t, {
      ...E,
      signal: _,
      method: n.toUpperCase(),
      headers: d.normalize().toJSON(),
      body: r,
      duplex: "half",
      withCredentials: c
    });
    let M = await fetch(L);
    const Q = Ln && (p === "stream" || p === "response");
    if (Ln && (a || Q)) {
      const B = {};
      ["status", "statusText", "headers"].forEach((A) => {
        B[A] = M[A];
      });
      const w = v.toFiniteNumber(M.headers.get("content-length"));
      M = new Response(
        Hr(M.body, Kr, a && Ur(
          w,
          Ht(a, !0)
        ), Q && j, Mn),
        B
      );
    }
    p = p || "text";
    let C = await Ut[v.findKey(Ut, p) || "text"](M, e);
    return !Q && j(), R && R(), await new Promise((B, w) => {
      $o(B, w, {
        data: C,
        headers: Re.from(M.headers),
        status: M.status,
        statusText: M.statusText,
        config: e,
        request: L
      });
    });
  } catch (M) {
    throw j(), M && M.name === "TypeError" && /fetch/i.test(M.message) ? Object.assign(
      new K("Network Error", K.ERR_NETWORK, e, L),
      {
        cause: M.cause || M
      }
    ) : K.from(M, M && M.code, e, L);
  }
}), In = {
  http: Na,
  xhr: ac,
  fetch: gc
};
v.forEach(In, (e, t) => {
  if (e) {
    try {
      Object.defineProperty(e, "name", { value: t });
    } catch {
    }
    Object.defineProperty(e, "adapterName", { value: t });
  }
});
const zr = (e) => `- ${e}`, wc = (e) => v.isFunction(e) || e === null || e === !1, rs = {
  getAdapter: (e) => {
    e = v.isArray(e) ? e : [e];
    const { length: t } = e;
    let n, r;
    const o = {};
    for (let i = 0; i < t; i++) {
      n = e[i];
      let s;
      if (r = n, !wc(n) && (r = In[(s = String(n)).toLowerCase()], r === void 0))
        throw new K(`Unknown adapter '${s}'`);
      if (r)
        break;
      o[s || "#" + i] = r;
    }
    if (!r) {
      const i = Object.entries(o).map(
        ([a, u]) => `adapter ${a} ` + (u === !1 ? "is not supported by the environment" : "is not available in the build")
      );
      let s = t ? i.length > 1 ? `since :
` + i.map(zr).join(`
`) : " " + zr(i[0]) : "as no adapter specified";
      throw new K(
        "There is no suitable adapter to dispatch the request " + s,
        "ERR_NOT_SUPPORT"
      );
    }
    return r;
  },
  adapters: In
};
function bn(e) {
  if (e.cancelToken && e.cancelToken.throwIfRequested(), e.signal && e.signal.aborted)
    throw new ht(null, e);
}
function Vr(e) {
  return bn(e), e.headers = Re.from(e.headers), e.data = vn.call(
    e,
    e.transformRequest
  ), ["post", "put", "patch"].indexOf(e.method) !== -1 && e.headers.setContentType("application/x-www-form-urlencoded", !1), rs.getAdapter(e.adapter || er.adapter)(e).then(function(r) {
    return bn(e), r.data = vn.call(
      e,
      e.transformResponse,
      r
    ), r.headers = Re.from(r.headers), r;
  }, function(r) {
    return Go(r) || (bn(e), r && r.response && (r.response.data = vn.call(
      e,
      e.transformResponse,
      r.response
    ), r.response.headers = Re.from(r.response.headers))), Promise.reject(r);
  });
}
const os = "1.7.2", tr = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach((e, t) => {
  tr[e] = function(r) {
    return typeof r === e || "a" + (t < 1 ? "n " : " ") + e;
  };
});
const Wr = {};
tr.transitional = function(t, n, r) {
  function o(i, s) {
    return "[Axios v" + os + "] Transitional option '" + i + "'" + s + (r ? ". " + r : "");
  }
  return (i, s, a) => {
    if (t === !1)
      throw new K(
        o(s, " has been removed" + (n ? " in " + n : "")),
        K.ERR_DEPRECATED
      );
    return n && !Wr[s] && (Wr[s] = !0, console.warn(
      o(
        s,
        " has been deprecated since v" + n + " and will be removed in the near future"
      )
    )), t ? t(i, s, a) : !0;
  };
};
function mc(e, t, n) {
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
const Jn = {
  assertOptions: mc,
  validators: tr
}, Me = Jn.validators;
class Kt {
  constructor(t) {
    this.defaults = t, this.interceptors = {
      request: new qr(),
      response: new qr()
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
        const i = o.stack ? o.stack.replace(/^.+\n/, "") : "";
        try {
          r.stack ? i && !String(r.stack).endsWith(i.replace(/^.+\n.+\n/, "")) && (r.stack += `
` + i) : r.stack = i;
        } catch {
        }
      }
      throw r;
    }
  }
  _request(t, n) {
    typeof t == "string" ? (n = n || {}, n.url = t) : n = t || {}, n = et(this.defaults, n);
    const { transitional: r, paramsSerializer: o, headers: i } = n;
    r !== void 0 && Jn.assertOptions(r, {
      silentJSONParsing: Me.transitional(Me.boolean),
      forcedJSONParsing: Me.transitional(Me.boolean),
      clarifyTimeoutError: Me.transitional(Me.boolean)
    }, !1), o != null && (v.isFunction(o) ? n.paramsSerializer = {
      serialize: o
    } : Jn.assertOptions(o, {
      encode: Me.function,
      serialize: Me.function
    }, !0)), n.method = (n.method || this.defaults.method || "get").toLowerCase();
    let s = i && v.merge(
      i.common,
      i[n.method]
    );
    i && v.forEach(
      ["delete", "get", "head", "post", "put", "patch", "common"],
      (R) => {
        delete i[R];
      }
    ), n.headers = Re.concat(s, i);
    const a = [];
    let u = !0;
    this.interceptors.request.forEach(function(x) {
      typeof x.runWhen == "function" && x.runWhen(n) === !1 || (u = u && x.synchronous, a.unshift(x.fulfilled, x.rejected));
    });
    const p = [];
    this.interceptors.response.forEach(function(x) {
      p.push(x.fulfilled, x.rejected);
    });
    let d, c = 0, E;
    if (!u) {
      const R = [Vr.bind(this), void 0];
      for (R.unshift.apply(R, a), R.push.apply(R, p), E = R.length, d = Promise.resolve(n); c < E; )
        d = d.then(R[c++], R[c++]);
      return d;
    }
    E = a.length;
    let _ = n;
    for (c = 0; c < E; ) {
      const R = a[c++], x = a[c++];
      try {
        _ = R(_);
      } catch (L) {
        x.call(this, L);
        break;
      }
    }
    try {
      d = Vr.call(this, _);
    } catch (R) {
      return Promise.reject(R);
    }
    for (c = 0, E = p.length; c < E; )
      d = d.then(p[c++], p[c++]);
    return d;
  }
  getUri(t) {
    t = et(this.defaults, t);
    const n = es(t.baseURL, t.url);
    return Xo(n, t.params, t.paramsSerializer);
  }
}
v.forEach(["delete", "get", "head", "options"], function(t) {
  Kt.prototype[t] = function(n, r) {
    return this.request(et(r || {}, {
      method: t,
      url: n,
      data: (r || {}).data
    }));
  };
});
v.forEach(["post", "put", "patch"], function(t) {
  function n(r) {
    return function(i, s, a) {
      return this.request(et(a || {}, {
        method: t,
        headers: r ? {
          "Content-Type": "multipart/form-data"
        } : {},
        url: i,
        data: s
      }));
    };
  }
  Kt.prototype[t] = n(), Kt.prototype[t + "Form"] = n(!0);
});
const Jt = Kt;
class nr {
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
      r.reason || (r.reason = new ht(i, s, a), n(r.reason));
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
      token: new nr(function(o) {
        t = o;
      }),
      cancel: t
    };
  }
}
const yc = nr;
function vc(e) {
  return function(n) {
    return e.apply(null, n);
  };
}
function bc(e) {
  return v.isObject(e) && e.isAxiosError === !0;
}
const Qn = {
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
Object.entries(Qn).forEach(([e, t]) => {
  Qn[t] = e;
});
const Ac = Qn;
function ss(e) {
  const t = new Jt(e), n = Io(Jt.prototype.request, t);
  return v.extend(n, Jt.prototype, t, { allOwnKeys: !0 }), v.extend(n, t, null, { allOwnKeys: !0 }), n.create = function(o) {
    return ss(et(e, o));
  }, n;
}
const re = ss(er);
re.Axios = Jt;
re.CanceledError = ht;
re.CancelToken = yc;
re.isCancel = Go;
re.VERSION = os;
re.toFormData = rn;
re.AxiosError = K;
re.Cancel = re.CanceledError;
re.all = function(t) {
  return Promise.all(t);
};
re.spread = vc;
re.isAxiosError = bc;
re.mergeConfig = et;
re.AxiosHeaders = Re;
re.formToJSON = (e) => Zo(v.isHTMLForm(e) ? new FormData(e) : e);
re.getAdapter = rs.getAdapter;
re.HttpStatusCode = Ac;
re.default = re;
const Ec = re, Oc = ["localhost", "127.0.0.1", "::1"].includes(window.location.hostname), Cc = Ec.create({
  baseURL: "https://localhost:8080/",
  withCredentials: !1
});
let Xr = "https://localhost/", Yr = "";
const be = {
  apiClient: Cc,
  setBaseURL: function(e, t) {
    Oc ? this.apiClient.defaults.baseURL = e || Xr : this.apiClient.defaults.baseURL = t || Yr, Xr = e, Yr = t;
  },
  getBaseURL: function() {
    return this.apiClient.defaults.baseURL;
  }
};
function Zr(e, t = "") {
  const n = ae(`nopwd_request_${t}`, "api/requestloginkey", sessionStorage), r = ae(`nopwd_verify_${t}`, "api/verifyaccess", sessionStorage), o = ae(`nopwd_confirm_${t}`, "api/confirmaccess", sessionStorage), i = ae(`nopwd_logout_${t}`, "api/logout", sessionStorage), s = ae(`nopwd_dev_${t}`, "https://marketally.ngrok.io/", sessionStorage), a = ae(`nopwd_prod_${t}`, "https://www.nopwd.com/", sessionStorage), u = ae(`nopwd_app_${t}`, "/app", sessionStorage), p = ae(`nopwd_login_${t}`, "/auth/login", sessionStorage), d = ae(`nopwd_log_${t}`, !1, sessionStorage), c = ae(`nopwd_region_${t}`, 1, sessionStorage), E = ae(`nopwd_check_${t}`, !1, sessionStorage), _ = ae(`nopwd_interval_${t}`, 1e3, sessionStorage), R = ae(`nopwd_access_${t}`, 2e4, sessionStorage), x = ae(`nopwd_loginid_${t}`, We.EMPTY, sessionStorage), L = ae(`nopwd_auth_${t}`, 0, sessionStorage), j = ae(`nopwd_session_${t}`, "", sessionStorage), F = se(!1);
  se(!1);
  const M = se(!1), Q = se(0), C = se(!1);
  function B(Z) {
    C.value = Z;
  }
  async function w() {
    console.log("Reset called - Clearing timeouts"), me(), console.log("Reset called - Setting mounted false"), C.value = !1, L.value = 0, F.value = !1, M.value = !1, j.value = "", x.value = We.EMPTY.toString(), S.value = "", g.value = f("auth.prepare"), e && (e("status", L.value), e("user", j.value), e("redirect", p.value));
  }
  function A(Z, G, m, y, b, k) {
    Z != null && Z != null && Z != "" && (s.value = Z), G != null && G != null && G != "" && (a.value = G), c.value = m, d.value = y, _.value = b, R.value = k;
  }
  function h(Z, G, m = !1) {
    Z != null && Z != null && Z != "" && (u.value = Z), G != null && G != null && G != "" && (p.value = G), E.value = m;
  }
  function O(Z, G, m, y) {
    Z && (n.value = Z), G && (r.value = G), m && (o.value = m), y && (i.value = y);
  }
  const { t: f } = xo();
  function l() {
    return {
      headers: {
        Accept: "application/json",
        "X-LoginId": x.value,
        "Content-Type": "application/json"
      }
    };
  }
  const D = se(!1), S = se(""), g = se(f("auth.prepare")), P = se({ id: x.value, code: null, value: null, subid: null, userid: null, count: null, page: null, fromdate: null });
  async function T() {
    var Z;
    if (!C.value || L.value <= -1)
      return me(), L.value;
    if (x.value = We.EMPTY, x.value === We.EMPTY.toString()) {
      if (M.value = !1, g.value = f("auth.loading"), n.value.includes("/requestloginkey/")) {
        const y = (Z = n.value.split("/requestloginkey/")[1]) == null ? void 0 : Z.trim();
        if (y)
          x.value = y;
        else
          return console.warn('No value found after "/requestloginkey/".'), L.value;
      } else
        x.value = We.create().toString();
      P.value.id = x.value, d.value && console.log("Login: " + x.value), be.setBaseURL(s.value, a.value);
      let G = be.getBaseURL() + n.value;
      return await be.apiClient.get(G, l()).then((m) => {
        const y = m.data;
        return y.success ? (g.value = "", S.value = "https://www.nopwd.com?r=" + c.value + "&l=" + x.value, console.log(S.value), F.value = y.success, Q.value = y.code, L.value = 1, ie = setTimeout(V, _.value), D.value ? g.value = f("auth.codedark") : g.value = f("auth.codelight"), 1) : (M.value = !0, d.value && console.log(y.message), g.value = f("auth.codeerror"), -1);
      }).catch((m) => (M.value = !0, console.log(m), e && e("error", m.message), M.value = !0, g.value = f("auth.codeerror"), -1));
    } else
      return D.value ? g.value = f("auth.codedark") : g.value = f("auth.codelight"), V();
  }
  function J(Z = !1) {
    return M.value ? g.value = f("auth.codeerror") : D.value ? g.value = f("auth.codedark") : D.value || (g.value = f("auth.codelight")), g.value;
  }
  async function V() {
    var G;
    if (!C.value || L.value <= -1 || L.value === 0)
      return me(), L.value;
    be.setBaseURL(s.value, a.value);
    let Z = be.getBaseURL() + r.value;
    if (d.value)
      if (r.value.includes("/verifyaccess/")) {
        const y = (G = n.value.split("/verifyaccess/")[0]) == null ? void 0 : G.trim();
        if (y)
          console.log("Check SubLogin: " + y);
        else
          return L.value;
      } else
        console.log("Check Login: " + x.value);
    return await be.apiClient.get(Z, l()).then(async (m) => {
      const y = m.data;
      if (y.success)
        return F.value = y.success, Q.value = y.code, y.code > 0 ? (j.value = JSON.stringify(y.data), e && e("user", j.value), L.value = 2, e && e("redirect", u.value), e && e("status", L.value), !C.value || L.value <= -1 ? L.value : (await ee(), 1)) : y.code < 0 ? (L.value = 0, e && e("status", L.value), -1) : (ue = setTimeout(V, _.value), D.value ? g.value = f("auth.codedark") : g.value = f("auth.codelight"), 0);
      d.value && console.log(y.message), await T();
    }).catch((m) => (M.value = !0, e && e("error", m.message), d.value && console.log(m), M.value = !0, g.value = f("auth.codeerror"), -1));
  }
  async function ee() {
    if (E.value == !1)
      return;
    if (!C.value || L.value < 2) {
      me();
      return;
    }
    be.setBaseURL(s.value, a.value), d.value && console.log("Check Access: " + x.value);
    let Z = be.getBaseURL() + o.value;
    await be.apiClient.get(Z, l()).then((G) => {
      const m = G.data;
      m.success && (F.value = m.success, Q.value = m.code, m.code > 0 ? he = setTimeout(ee, R.value) : (L.value = 0, e && e("status", m.code), j.value = "", e && e("user", j.value), e && e("redirect", p.value)));
    }).catch((G) => {
      M.value = !0, e && e("error", G.message), d.value && console.log(G), M.value = !0, g.value = f("auth.codeerror");
    });
  }
  let ie = null, ue = null, he = null;
  function me() {
    [ie, ue, he].forEach((G) => {
      G && window.clearTimeout(G);
    }), ie = ue = he = null;
  }
  async function pn() {
    if (C.value = !1, L.value = -1, me(), L.value <= 0)
      return;
    be.setBaseURL(s.value, a.value), d.value && console.log("Logout: " + x.value);
    let Z = be.getBaseURL() + i.value;
    await be.apiClient.get(Z, l()).then((G) => {
      const m = G.data;
      F.value = m.success, Q.value = m.code, L.value = 0, F.value && (e && e("status", L.value), j.value = "", e && e("user", j.value), x.value = We.EMPTY.toString()), e && e("redirect", p.value);
    }), L.value = 0;
  }
  return {
    auth: L,
    success: F,
    user_data: j,
    code: Q,
    IDLogin: x,
    QRCode: S,
    IsDark: D,
    Message: g,
    is_error: M,
    mounted: C,
    reset: w,
    setMounted: B,
    loginQRCode: T,
    checkAccess: ee,
    checkQRLogin: V,
    logout: pn,
    config: l,
    setUrls: O,
    setRoutes: h,
    readMessage: J,
    setBase: A
  };
}
var Sc = Object.defineProperty, Dc = (e, t, n) => t in e ? Sc(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, fe = (e, t, n) => (Dc(e, typeof t != "symbol" ? t + "" : t, n), n);
function kc(e, t) {
  const n = /* @__PURE__ */ Object.create(null), r = e.split(",");
  for (let o = 0; o < r.length; o++)
    n[r[o]] = !0;
  return t ? (o) => !!n[o.toLowerCase()] : (o) => !!n[o];
}
const qn = process.env.NODE_ENV !== "production" ? Object.freeze({}) : {}, _c = process.env.NODE_ENV !== "production" ? Object.freeze([]) : [], Ae = () => {
}, Rc = /^on[^a-z]/, Nc = (e) => Rc.test(e), we = Object.assign, is = (e, t) => {
  const n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}, xc = Object.prototype.hasOwnProperty, an = (e, t) => xc.call(e, t), X = Array.isArray, Xe = (e) => cn(e) === "[object Map]", as = (e) => cn(e) === "[object Set]", Y = (e) => typeof e == "function", Ce = (e) => typeof e == "string", rr = (e) => typeof e == "symbol", ne = (e) => e !== null && typeof e == "object", or = (e) => ne(e) && Y(e.then) && Y(e.catch), cs = Object.prototype.toString, cn = (e) => cs.call(e), us = (e) => cn(e).slice(8, -1), ls = (e) => cn(e) === "[object Object]", sr = (e) => Ce(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, ds = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return (n) => t[n] || (t[n] = e(n));
}, fs = ds(
  (e) => e.charAt(0).toUpperCase() + e.slice(1)
), Bc = ds(
  (e) => e ? `on${fs(e)}` : ""
), zt = (e, t) => !Object.is(e, t), Tc = (e) => {
  const t = Ce(e) ? Number(e) : NaN;
  return isNaN(t) ? e : t;
};
let Gr;
const jn = () => Gr || (Gr = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function ir(e) {
  if (X(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
      const r = e[n], o = Ce(r) ? Ic(r) : ir(r);
      if (o)
        for (const i in o)
          t[i] = o[i];
    }
    return t;
  } else if (Ce(e) || ne(e))
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
function at(e) {
  let t = "";
  if (Ce(e))
    t = e;
  else if (X(e))
    for (let n = 0; n < e.length; n++) {
      const r = at(e[n]);
      r && (t += r + " ");
    }
  else if (ne(e))
    for (const n in e)
      e[n] && (t += n + " ");
  return t.trim();
}
const Jc = (e) => Ce(e) ? e : e == null ? "" : X(e) || ne(e) && (e.toString === cs || !Y(e.toString)) ? JSON.stringify(e, ps, 2) : String(e), ps = (e, t) => t && t.__v_isRef ? ps(e, t.value) : Xe(t) ? {
  [`Map(${t.size})`]: [...t.entries()].reduce((n, [r, o]) => (n[`${r} =>`] = o, n), {})
} : as(t) ? {
  [`Set(${t.size})`]: [...t.values()]
} : ne(t) && !X(t) && !ls(t) ? String(t) : t;
function $r(e, ...t) {
  console.warn(`[Vue warn] ${e}`, ...t);
}
let hs;
function Qc(e, t = hs) {
  t && t.active && t.effects.push(e);
}
function qc() {
  return hs;
}
const bt = (e) => {
  const t = new Set(e);
  return t.w = 0, t.n = 0, t;
}, gs = (e) => (e.w & He) > 0, ws = (e) => (e.n & He) > 0, jc = ({ deps: e }) => {
  if (e.length)
    for (let t = 0; t < e.length; t++)
      e[t].w |= He;
}, Fc = (e) => {
  const { deps: t } = e;
  if (t.length) {
    let n = 0;
    for (let r = 0; r < t.length; r++) {
      const o = t[r];
      gs(o) && !ws(o) ? o.delete(e) : t[n++] = o, o.w &= ~He, o.n &= ~He;
    }
    t.length = n;
  }
}, Fn = /* @__PURE__ */ new WeakMap();
let wt = 0, He = 1;
const Hn = 30;
let de;
const Ye = Symbol(process.env.NODE_ENV !== "production" ? "iterate" : ""), Un = Symbol(process.env.NODE_ENV !== "production" ? "Map key iterate" : "");
class ms {
  constructor(t, n = null, r) {
    this.fn = t, this.scheduler = n, this.active = !0, this.deps = [], this.parent = void 0, Qc(this, r);
  }
  run() {
    if (!this.active)
      return this.fn();
    let t = de, n = je;
    for (; t; ) {
      if (t === this)
        return;
      t = t.parent;
    }
    try {
      return this.parent = de, de = this, je = !0, He = 1 << ++wt, wt <= Hn ? jc(this) : eo(this), this.fn();
    } finally {
      wt <= Hn && Fc(this), He = 1 << --wt, de = this.parent, je = n, this.parent = void 0, this.deferStop && this.stop();
    }
  }
  stop() {
    de === this ? this.deferStop = !0 : this.active && (eo(this), this.onStop && this.onStop(), this.active = !1);
  }
}
function eo(e) {
  const { deps: t } = e;
  if (t.length) {
    for (let n = 0; n < t.length; n++)
      t[n].delete(e);
    t.length = 0;
  }
}
let je = !0;
const ys = [];
function un() {
  ys.push(je), je = !1;
}
function ln() {
  const e = ys.pop();
  je = e === void 0 ? !0 : e;
}
function Se(e, t, n) {
  if (je && de) {
    let r = Fn.get(e);
    r || Fn.set(e, r = /* @__PURE__ */ new Map());
    let o = r.get(n);
    o || r.set(n, o = bt());
    const i = process.env.NODE_ENV !== "production" ? { effect: de, target: e, type: t, key: n } : void 0;
    Kn(o, i);
  }
}
function Kn(e, t) {
  let n = !1;
  wt <= Hn ? ws(e) || (e.n |= He, n = !gs(e)) : n = !e.has(de), n && (e.add(de), de.deps.push(e), process.env.NODE_ENV !== "production" && de.onTrack && de.onTrack(
    we(
      {
        effect: de
      },
      t
    )
  ));
}
function Ue(e, t, n, r, o, i) {
  const s = Fn.get(e);
  if (!s)
    return;
  let a = [];
  if (t === "clear")
    a = [...s.values()];
  else if (n === "length" && X(e)) {
    const p = Number(r);
    s.forEach((d, c) => {
      (c === "length" || c >= p) && a.push(d);
    });
  } else
    switch (n !== void 0 && a.push(s.get(n)), t) {
      case "add":
        X(e) ? sr(n) && a.push(s.get("length")) : (a.push(s.get(Ye)), Xe(e) && a.push(s.get(Un)));
        break;
      case "delete":
        X(e) || (a.push(s.get(Ye)), Xe(e) && a.push(s.get(Un)));
        break;
      case "set":
        Xe(e) && a.push(s.get(Ye));
        break;
    }
  const u = process.env.NODE_ENV !== "production" ? { target: e, type: t, key: n, newValue: r, oldValue: o, oldTarget: i } : void 0;
  if (a.length === 1)
    a[0] && (process.env.NODE_ENV !== "production" ? st(a[0], u) : st(a[0]));
  else {
    const p = [];
    for (const d of a)
      d && p.push(...d);
    process.env.NODE_ENV !== "production" ? st(bt(p), u) : st(bt(p));
  }
}
function st(e, t) {
  const n = X(e) ? e : [...e];
  for (const r of n)
    r.computed && to(r, t);
  for (const r of n)
    r.computed || to(r, t);
}
function to(e, t) {
  (e !== de || e.allowRecurse) && (process.env.NODE_ENV !== "production" && e.onTrigger && e.onTrigger(we({ effect: e }, t)), e.scheduler ? e.scheduler() : e.run());
}
const Hc = /* @__PURE__ */ kc("__proto__,__v_isRef,__isVue"), vs = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(rr)
), Uc = /* @__PURE__ */ bs(), Kc = /* @__PURE__ */ bs(!0), no = /* @__PURE__ */ zc();
function zc() {
  const e = {};
  return ["includes", "indexOf", "lastIndexOf"].forEach((t) => {
    e[t] = function(...n) {
      const r = z(this);
      for (let i = 0, s = this.length; i < s; i++)
        Se(r, "get", i + "");
      const o = r[t](...n);
      return o === -1 || o === !1 ? r[t](...n.map(z)) : o;
    };
  }), ["push", "pop", "shift", "unshift", "splice"].forEach((t) => {
    e[t] = function(...n) {
      un();
      const r = z(this)[t].apply(this, n);
      return ln(), r;
    };
  }), e;
}
function Vc(e) {
  const t = z(this);
  return Se(t, "has", e), t.hasOwnProperty(e);
}
function bs(e = !1, t = !1) {
  return function(n, r, o) {
    if (r === "__v_isReactive")
      return !e;
    if (r === "__v_isReadonly")
      return e;
    if (r === "__v_isShallow")
      return t;
    if (r === "__v_raw" && o === (e ? t ? uu : Cs : t ? cu : Os).get(n))
      return n;
    const i = X(n);
    if (!e) {
      if (i && an(no, r))
        return Reflect.get(no, r, o);
      if (r === "hasOwnProperty")
        return Vc;
    }
    const s = Reflect.get(n, r, o);
    return (rr(r) ? vs.has(r) : Hc(r)) || (e || Se(n, "get", r), t) ? s : pe(s) ? i && sr(r) ? s : s.value : ne(s) ? e ? Ss(s) : cr(s) : s;
  };
}
const Wc = /* @__PURE__ */ Xc();
function Xc(e = !1) {
  return function(t, n, r, o) {
    let i = t[n];
    if (tt(i) && pe(i) && !pe(r))
      return !1;
    if (!e && (!zn(r) && !tt(r) && (i = z(i), r = z(r)), !X(t) && pe(i) && !pe(r)))
      return i.value = r, !0;
    const s = X(t) && sr(n) ? Number(n) < t.length : an(t, n), a = Reflect.set(t, n, r, o);
    return t === z(o) && (s ? zt(r, i) && Ue(t, "set", n, r, i) : Ue(t, "add", n, r)), a;
  };
}
function Yc(e, t) {
  const n = an(e, t), r = e[t], o = Reflect.deleteProperty(e, t);
  return o && n && Ue(e, "delete", t, void 0, r), o;
}
function Zc(e, t) {
  const n = Reflect.has(e, t);
  return (!rr(t) || !vs.has(t)) && Se(e, "has", t), n;
}
function Gc(e) {
  return Se(e, "iterate", X(e) ? "length" : Ye), Reflect.ownKeys(e);
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
    return process.env.NODE_ENV !== "production" && $r(
      `Set operation on key "${String(t)}" failed: target is readonly.`,
      e
    ), !0;
  },
  deleteProperty(e, t) {
    return process.env.NODE_ENV !== "production" && $r(
      `Delete operation on key "${String(t)}" failed: target is readonly.`,
      e
    ), !0;
  }
}, ar = (e) => e, dn = (e) => Reflect.getPrototypeOf(e);
function kt(e, t, n = !1, r = !1) {
  e = e.__v_raw;
  const o = z(e), i = z(t);
  n || (t !== i && Se(o, "get", t), Se(o, "get", i));
  const { has: s } = dn(o), a = r ? ar : n ? lr : ur;
  if (s.call(o, t))
    return a(e.get(t));
  if (s.call(o, i))
    return a(e.get(i));
  e !== o && e.get(t);
}
function _t(e, t = !1) {
  const n = this.__v_raw, r = z(n), o = z(e);
  return t || (e !== o && Se(r, "has", e), Se(r, "has", o)), e === o ? n.has(e) : n.has(e) || n.has(o);
}
function Rt(e, t = !1) {
  return e = e.__v_raw, !t && Se(z(e), "iterate", Ye), Reflect.get(e, "size", e);
}
function ro(e) {
  e = z(e);
  const t = z(this);
  return dn(t).has.call(t, e) || (t.add(e), Ue(t, "add", e, e)), this;
}
function oo(e, t) {
  t = z(t);
  const n = z(this), { has: r, get: o } = dn(n);
  let i = r.call(n, e);
  i ? process.env.NODE_ENV !== "production" && Es(n, r, e) : (e = z(e), i = r.call(n, e));
  const s = o.call(n, e);
  return n.set(e, t), i ? zt(t, s) && Ue(n, "set", e, t, s) : Ue(n, "add", e, t), this;
}
function so(e) {
  const t = z(this), { has: n, get: r } = dn(t);
  let o = n.call(t, e);
  o ? process.env.NODE_ENV !== "production" && Es(t, n, e) : (e = z(e), o = n.call(t, e));
  const i = r ? r.call(t, e) : void 0, s = t.delete(e);
  return o && Ue(t, "delete", e, void 0, i), s;
}
function io() {
  const e = z(this), t = e.size !== 0, n = process.env.NODE_ENV !== "production" ? Xe(e) ? new Map(e) : new Set(e) : void 0, r = e.clear();
  return t && Ue(e, "clear", void 0, void 0, n), r;
}
function Nt(e, t) {
  return function(n, r) {
    const o = this, i = o.__v_raw, s = z(i), a = t ? ar : e ? lr : ur;
    return !e && Se(s, "iterate", Ye), i.forEach((u, p) => n.call(r, a(u), a(p), o));
  };
}
function xt(e, t, n) {
  return function(...r) {
    const o = this.__v_raw, i = z(o), s = Xe(i), a = e === "entries" || e === Symbol.iterator && s, u = e === "keys" && s, p = o[e](...r), d = n ? ar : t ? lr : ur;
    return !t && Se(
      i,
      "iterate",
      u ? Un : Ye
    ), {
      // iterator protocol
      next() {
        const { value: c, done: E } = p.next();
        return E ? { value: c, done: E } : {
          value: a ? [d(c[0]), d(c[1])] : d(c),
          done: E
        };
      },
      // iterable protocol
      [Symbol.iterator]() {
        return this;
      }
    };
  };
}
function Le(e) {
  return function(...t) {
    if (process.env.NODE_ENV !== "production") {
      const n = t[0] ? `on key "${t[0]}" ` : "";
      console.warn(
        `${fs(e)} operation ${n}failed: target is readonly.`,
        z(this)
      );
    }
    return e === "delete" ? !1 : this;
  };
}
function tu() {
  const e = {
    get(o) {
      return kt(this, o);
    },
    get size() {
      return Rt(this);
    },
    has: _t,
    add: ro,
    set: oo,
    delete: so,
    clear: io,
    forEach: Nt(!1, !1)
  }, t = {
    get(o) {
      return kt(this, o, !1, !0);
    },
    get size() {
      return Rt(this);
    },
    has: _t,
    add: ro,
    set: oo,
    delete: so,
    clear: io,
    forEach: Nt(!1, !0)
  }, n = {
    get(o) {
      return kt(this, o, !0);
    },
    get size() {
      return Rt(this, !0);
    },
    has(o) {
      return _t.call(this, o, !0);
    },
    add: Le("add"),
    set: Le("set"),
    delete: Le("delete"),
    clear: Le("clear"),
    forEach: Nt(!0, !1)
  }, r = {
    get(o) {
      return kt(this, o, !0, !0);
    },
    get size() {
      return Rt(this, !0);
    },
    has(o) {
      return _t.call(this, o, !0);
    },
    add: Le("add"),
    set: Le("set"),
    delete: Le("delete"),
    clear: Le("clear"),
    forEach: Nt(!0, !0)
  };
  return ["keys", "values", "entries", Symbol.iterator].forEach((o) => {
    e[o] = xt(
      o,
      !1,
      !1
    ), n[o] = xt(
      o,
      !0,
      !1
    ), t[o] = xt(
      o,
      !1,
      !0
    ), r[o] = xt(
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
function As(e, t) {
  const n = t ? e ? su : ou : e ? ru : nu;
  return (r, o, i) => o === "__v_isReactive" ? !e : o === "__v_isReadonly" ? e : o === "__v_raw" ? r : Reflect.get(
    an(n, o) && o in r ? n : r,
    o,
    i
  );
}
const iu = {
  get: /* @__PURE__ */ As(!1, !1)
}, au = {
  get: /* @__PURE__ */ As(!0, !1)
};
function Es(e, t, n) {
  const r = z(n);
  if (r !== n && t.call(e, r)) {
    const o = us(e);
    console.warn(
      `Reactive ${o} contains both the raw and reactive versions of the same object${o === "Map" ? " as keys" : ""}, which can lead to inconsistencies. Avoid differentiating between the raw and reactive versions of an object and only use the reactive version if possible.`
    );
  }
}
const Os = /* @__PURE__ */ new WeakMap(), cu = /* @__PURE__ */ new WeakMap(), Cs = /* @__PURE__ */ new WeakMap(), uu = /* @__PURE__ */ new WeakMap();
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
  return e.__v_skip || !Object.isExtensible(e) ? 0 : lu(us(e));
}
function cr(e) {
  return tt(e) ? e : Ds(
    e,
    !1,
    $c,
    iu,
    Os
  );
}
function Ss(e) {
  return Ds(
    e,
    !0,
    eu,
    au,
    Cs
  );
}
function Ds(e, t, n, r, o) {
  if (!ne(e))
    return process.env.NODE_ENV !== "production" && console.warn(`value cannot be made reactive: ${String(e)}`), e;
  if (e.__v_raw && !(t && e.__v_isReactive))
    return e;
  const i = o.get(e);
  if (i)
    return i;
  const s = du(e);
  if (s === 0)
    return e;
  const a = new Proxy(
    e,
    s === 2 ? r : n
  );
  return o.set(e, a), a;
}
function Ze(e) {
  return tt(e) ? Ze(e.__v_raw) : !!(e && e.__v_isReactive);
}
function tt(e) {
  return !!(e && e.__v_isReadonly);
}
function zn(e) {
  return !!(e && e.__v_isShallow);
}
function Vn(e) {
  return Ze(e) || tt(e);
}
function z(e) {
  const t = e && e.__v_raw;
  return t ? z(t) : e;
}
const ur = (e) => ne(e) ? cr(e) : e, lr = (e) => ne(e) ? Ss(e) : e;
function fu(e) {
  je && de && (e = z(e), process.env.NODE_ENV !== "production" ? Kn(e.dep || (e.dep = bt()), {
    target: e,
    type: "get",
    key: "value"
  }) : Kn(e.dep || (e.dep = bt())));
}
function pu(e, t) {
  e = z(e);
  const n = e.dep;
  n && (process.env.NODE_ENV !== "production" ? st(n, {
    target: e,
    type: "set",
    key: "value",
    newValue: t
  }) : st(n));
}
function pe(e) {
  return !!(e && e.__v_isRef === !0);
}
function Qt(e) {
  return pe(e) ? e.value : e;
}
const hu = {
  get: (e, t, n) => Qt(Reflect.get(e, t, n)),
  set: (e, t, n, r) => {
    const o = e[t];
    return pe(o) && !pe(n) ? (o.value = n, !0) : Reflect.set(e, t, n, r);
  }
};
function gu(e) {
  return Ze(e) ? e : new Proxy(e, hu);
}
class wu {
  constructor(t, n, r, o) {
    this._setter = n, this.dep = void 0, this.__v_isRef = !0, this.__v_isReadonly = !1, this._dirty = !0, this.effect = new ms(t, () => {
      this._dirty || (this._dirty = !0, pu(this));
    }), this.effect.computed = this, this.effect.active = this._cacheable = !o, this.__v_isReadonly = r;
  }
  get value() {
    const t = z(this);
    return fu(t), (t._dirty || !t._cacheable) && (t._dirty = !1, t._value = t.effect.run()), t._value;
  }
  set value(t) {
    this._setter(t);
  }
}
function mu(e, t, n = !1) {
  let r, o;
  const i = Y(e);
  i ? (r = e, o = process.env.NODE_ENV !== "production" ? () => {
    console.warn("Write operation failed: computed value is readonly");
  } : Ae) : (r = e.get, o = e.set);
  const s = new wu(r, o, i || !o, n);
  return process.env.NODE_ENV !== "production" && t && !n && (s.effect.onTrack = t.onTrack, s.effect.onTrigger = t.onTrigger), s;
}
const Ge = [];
function ks(e) {
  Ge.push(e);
}
function _s() {
  Ge.pop();
}
function W(e, ...t) {
  if (process.env.NODE_ENV === "production")
    return;
  un();
  const n = Ge.length ? Ge[Ge.length - 1].component : null, r = n && n.appContext.config.warnHandler, o = yu();
  if (r)
    $e(
      r,
      n,
      11,
      [
        e + t.join(""),
        n && n.proxy,
        o.map(
          ({ vnode: i }) => `at <${br(n, i.type)}>`
        ).join(`
`),
        o
      ]
    );
  else {
    const i = [`[Vue warn]: ${e}`, ...t];
    o.length && i.push(`
`, ...vu(o)), console.warn(...i);
  }
  ln();
}
function yu() {
  let e = Ge[Ge.length - 1];
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
  const n = t > 0 ? `... (${t} recursive calls)` : "", r = e.component ? e.component.parent == null : !1, o = ` at <${br(
    e.component,
    e.type,
    r
  )}`, i = ">" + n;
  return e.props ? [o, ...Au(e.props), i] : [o + i];
}
function Au(e) {
  const t = [], n = Object.keys(e);
  return n.slice(0, 3).forEach((r) => {
    t.push(...Rs(r, e[r]));
  }), n.length > 3 && t.push(" ..."), t;
}
function Rs(e, t, n) {
  return Ce(t) ? (t = JSON.stringify(t), n ? t : [`${e}=${t}`]) : typeof t == "number" || typeof t == "boolean" || t == null ? n ? t : [`${e}=${t}`] : pe(t) ? (t = Rs(e, z(t.value), !0), n ? t : [`${e}=Ref<`, t, ">"]) : Y(t) ? [`${e}=fn${t.name ? `<${t.name}>` : ""}`] : (t = z(t), n ? t : [`${e}=`, t]);
}
function Eu(e, t) {
  process.env.NODE_ENV !== "production" && e !== void 0 && (typeof e != "number" ? W(`${t} is not a valid number - got ${JSON.stringify(e)}.`) : isNaN(e) && W(`${t} is NaN - the duration expression might be incorrect.`));
}
const dr = {
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
function $e(e, t, n, r) {
  let o;
  try {
    o = r ? e(...r) : e();
  } catch (i) {
    fr(i, t, n);
  }
  return o;
}
function At(e, t, n, r) {
  if (Y(e)) {
    const i = $e(e, t, n, r);
    return i && or(i) && i.catch((s) => {
      fr(s, t, n);
    }), i;
  }
  const o = [];
  for (let i = 0; i < e.length; i++)
    o.push(At(e[i], t, n, r));
  return o;
}
function fr(e, t, n, r = !0) {
  const o = t ? t.vnode : null;
  if (t) {
    let i = t.parent;
    const s = t.proxy, a = process.env.NODE_ENV !== "production" ? dr[n] : n;
    for (; i; ) {
      const p = i.ec;
      if (p) {
        for (let d = 0; d < p.length; d++)
          if (p[d](e, s, a) === !1)
            return;
      }
      i = i.parent;
    }
    const u = t.appContext.config.errorHandler;
    if (u) {
      $e(
        u,
        null,
        10,
        [e, s, a]
      );
      return;
    }
  }
  Ou(e, n, o, r);
}
function Ou(e, t, n, r = !0) {
  if (process.env.NODE_ENV !== "production") {
    const o = dr[t];
    if (n && ks(n), W(`Unhandled error${o ? ` during execution of ${o}` : ""}`), n && _s(), r)
      throw e;
    console.error(e);
  } else
    console.error(e);
}
let Vt = !1, Wn = !1;
const De = [];
let Qe = 0;
const ct = [];
let Be = null, Je = 0;
const Cu = /* @__PURE__ */ Promise.resolve(), Su = 100;
function Du(e) {
  let t = Qe + 1, n = De.length;
  for (; t < n; ) {
    const r = t + n >>> 1;
    Et(De[r]) < e ? t = r + 1 : n = r;
  }
  return t;
}
function Ns(e) {
  (!De.length || !De.includes(
    e,
    Vt && e.allowRecurse ? Qe + 1 : Qe
  )) && (e.id == null ? De.push(e) : De.splice(Du(e.id), 0, e), xs());
}
function xs() {
  !Vt && !Wn && (Wn = !0, Cu.then(Bs));
}
function pr(e) {
  X(e) ? ct.push(...e) : (!Be || !Be.includes(
    e,
    e.allowRecurse ? Je + 1 : Je
  )) && ct.push(e), xs();
}
function ku(e) {
  if (ct.length) {
    const t = [...new Set(ct)];
    if (ct.length = 0, Be) {
      Be.push(...t);
      return;
    }
    for (Be = t, process.env.NODE_ENV !== "production" && (e = e || /* @__PURE__ */ new Map()), Be.sort((n, r) => Et(n) - Et(r)), Je = 0; Je < Be.length; Je++)
      process.env.NODE_ENV !== "production" && Ts(e, Be[Je]) || Be[Je]();
    Be = null, Je = 0;
  }
}
const Et = (e) => e.id == null ? 1 / 0 : e.id, _u = (e, t) => {
  const n = Et(e) - Et(t);
  if (n === 0) {
    if (e.pre && !t.pre)
      return -1;
    if (t.pre && !e.pre)
      return 1;
  }
  return n;
};
function Bs(e) {
  Wn = !1, Vt = !0, process.env.NODE_ENV !== "production" && (e = e || /* @__PURE__ */ new Map()), De.sort(_u);
  const t = process.env.NODE_ENV !== "production" ? (n) => Ts(e, n) : Ae;
  try {
    for (Qe = 0; Qe < De.length; Qe++) {
      const n = De[Qe];
      if (n && n.active !== !1) {
        if (process.env.NODE_ENV !== "production" && t(n))
          continue;
        $e(n, null, 14);
      }
    }
  } finally {
    Qe = 0, De.length = 0, ku(e), Vt = !1, (De.length || ct.length) && Bs(e);
  }
}
function Ts(e, t) {
  if (!e.has(t))
    e.set(t, 1);
  else {
    const n = e.get(t);
    if (n > Su) {
      const r = t.ownerInstance, o = r && Gs(r.type);
      return W(
        `Maximum recursive updates exceeded${o ? ` in component <${o}>` : ""}. This means you have a reactive effect that is mutating its own dependencies and thus recursively triggering itself. Possible sources include component template, render function, updated hook or watcher source function.`
      ), !0;
    } else
      e.set(t, n + 1);
  }
}
const ot = /* @__PURE__ */ new Set();
process.env.NODE_ENV !== "production" && (jn().__VUE_HMR_RUNTIME__ = {
  createRecord: An(Ru),
  rerender: An(Nu),
  reload: An(xu)
});
const Wt = /* @__PURE__ */ new Map();
function Ru(e, t) {
  return Wt.has(e) ? !1 : (Wt.set(e, {
    initialDef: yt(t),
    instances: /* @__PURE__ */ new Set()
  }), !0);
}
function yt(e) {
  return $s(e) ? e.__vccOpts : e;
}
function Nu(e, t) {
  const n = Wt.get(e);
  n && (n.initialDef.render = t, [...n.instances].forEach((r) => {
    t && (r.render = t, yt(r.type).render = t), r.renderCache = [], r.update();
  }));
}
function xu(e, t) {
  const n = Wt.get(e);
  if (!n)
    return;
  t = yt(t), ao(n.initialDef, t);
  const r = [...n.instances];
  for (const o of r) {
    const i = yt(o.type);
    ot.has(i) || (i !== n.initialDef && ao(i, t), ot.add(i)), o.appContext.propsCache.delete(o.type), o.appContext.emitsCache.delete(o.type), o.appContext.optionsCache.delete(o.type), o.ceReload ? (ot.add(i), o.ceReload(t.styles), ot.delete(i)) : o.parent ? Ns(o.parent.update) : o.appContext.reload ? o.appContext.reload() : typeof window < "u" ? window.location.reload() : console.warn(
      "[HMR] Root or manually mounted instance modified. Full reload required."
    );
  }
  pr(() => {
    for (const o of r)
      ot.delete(
        yt(o.type)
      );
  });
}
function ao(e, t) {
  we(e, t);
  for (const n in e)
    n !== "__file" && !(n in t) && delete e[n];
}
function An(e) {
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
function Ps(e, ...t) {
}
const Bu = /* @__PURE__ */ Tu(
  "component:updated"
  /* COMPONENT_UPDATED */
);
function Tu(e) {
  return (t) => {
    Ps(
      e,
      t.appContext.app,
      t.uid,
      t.parent ? t.parent.uid : void 0,
      t
    );
  };
}
const Pu = /* @__PURE__ */ Ms(
  "perf:start"
  /* PERFORMANCE_START */
), Mu = /* @__PURE__ */ Ms(
  "perf:end"
  /* PERFORMANCE_END */
);
function Ms(e) {
  return (t, n, r) => {
    Ps(e, t.appContext.app, t.uid, t, n, r);
  };
}
let ke = null, Ls = null;
function co(e) {
  const t = ke;
  return ke = e, Ls = e && e.type.__scopeId || null, t;
}
function Lu(e, t = ke, n) {
  if (!t || e._n)
    return e;
  const r = (...o) => {
    r._d && yo(-1);
    const i = co(t);
    let s;
    try {
      s = e(...o);
    } finally {
      co(i), r._d && yo(1);
    }
    return process.env.NODE_ENV !== "production" && Bu(t), s;
  };
  return r._n = !0, r._c = !0, r._d = !0, r;
}
function Iu(e) {
  let t;
  for (let n = 0; n < e.length; n++) {
    const r = e[n];
    if (wr(r)) {
      if (r.type !== dt || r.children === "v-if") {
        if (t)
          return;
        t = r;
      }
    } else
      return;
  }
  return t;
}
function Is({ vnode: e, parent: t }, n) {
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
  process(e, t, n, r, o, i, s, a, u, p) {
    e == null ? ju(
      t,
      n,
      r,
      o,
      i,
      s,
      a,
      u,
      p
    ) : Fu(
      e,
      t,
      n,
      r,
      o,
      s,
      a,
      u,
      p
    );
  },
  hydrate: Hu,
  create: hr,
  normalize: Uu
}, qu = Qu;
function Ot(e, t) {
  const n = e.props && e.props[t];
  Y(n) && n();
}
function ju(e, t, n, r, o, i, s, a, u) {
  const {
    p,
    o: { createElement: d }
  } = u, c = d("div"), E = e.suspense = hr(
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
  p(
    null,
    E.pendingBranch = e.ssContent,
    c,
    null,
    r,
    E,
    i,
    s
  ), E.deps > 0 ? (Ot(e, "onPending"), Ot(e, "onFallback"), p(
    null,
    e.ssFallback,
    t,
    n,
    r,
    null,
    // fallback tree will not have suspense context
    i,
    s
  ), ut(E, e.ssFallback)) : E.resolve(!1, !0);
}
function Fu(e, t, n, r, o, i, s, a, { p: u, um: p, o: { createElement: d } }) {
  const c = t.suspense = e.suspense;
  c.vnode = t, t.el = e.el;
  const E = t.ssContent, _ = t.ssFallback, { activeBranch: R, pendingBranch: x, isInFallback: L, isHydrating: j } = c;
  if (x)
    c.pendingBranch = E, Sn(E, x) ? (u(
      x,
      E,
      c.hiddenContainer,
      null,
      o,
      c,
      i,
      s,
      a
    ), c.deps <= 0 ? c.resolve() : L && (u(
      R,
      _,
      n,
      r,
      o,
      null,
      // fallback tree will not have suspense context
      i,
      s,
      a
    ), ut(c, _))) : (c.pendingId++, j ? (c.isHydrating = !1, c.activeBranch = x) : p(x, o, c), c.deps = 0, c.effects.length = 0, c.hiddenContainer = d("div"), L ? (u(
      null,
      E,
      c.hiddenContainer,
      null,
      o,
      c,
      i,
      s,
      a
    ), c.deps <= 0 ? c.resolve() : (u(
      R,
      _,
      n,
      r,
      o,
      null,
      // fallback tree will not have suspense context
      i,
      s,
      a
    ), ut(c, _))) : R && Sn(E, R) ? (u(
      R,
      E,
      n,
      r,
      o,
      c,
      i,
      s,
      a
    ), c.resolve(!0)) : (u(
      null,
      E,
      c.hiddenContainer,
      null,
      o,
      c,
      i,
      s,
      a
    ), c.deps <= 0 && c.resolve()));
  else if (R && Sn(E, R))
    u(
      R,
      E,
      n,
      r,
      o,
      c,
      i,
      s,
      a
    ), ut(c, E);
  else if (Ot(t, "onPending"), c.pendingBranch = E, c.pendingId++, u(
    null,
    E,
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
    const { timeout: F, pendingId: M } = c;
    F > 0 ? setTimeout(() => {
      c.pendingId === M && c.fallback(_);
    }, F) : F === 0 && c.fallback(_);
  }
}
let uo = !1;
function hr(e, t, n, r, o, i, s, a, u, p, d = !1) {
  process.env.NODE_ENV !== "production" && !uo && (uo = !0, console[console.info ? "info" : "log"](
    "<Suspense> is an experimental feature and its API will likely change."
  ));
  const {
    p: c,
    m: E,
    um: _,
    n: R,
    o: { parentNode: x, remove: L }
  } = p;
  let j;
  const F = zu(e);
  F && t != null && t.pendingBranch && (j = t.pendingId, t.deps++);
  const M = e.props ? Tc(e.props.timeout) : void 0;
  process.env.NODE_ENV !== "production" && Eu(M, "Suspense timeout");
  const Q = {
    vnode: e,
    parent: t,
    parentComponent: n,
    isSVG: s,
    container: r,
    hiddenContainer: o,
    anchor: i,
    deps: 0,
    pendingId: 0,
    timeout: typeof M == "number" ? M : -1,
    activeBranch: null,
    pendingBranch: null,
    isInFallback: !0,
    isHydrating: d,
    isUnmounted: !1,
    effects: [],
    resolve(C = !1, B = !1) {
      if (process.env.NODE_ENV !== "production") {
        if (!C && !Q.pendingBranch)
          throw new Error(
            "suspense.resolve() is called without a pending branch."
          );
        if (Q.isUnmounted)
          throw new Error(
            "suspense.resolve() is called on an already unmounted suspense boundary."
          );
      }
      const {
        vnode: w,
        activeBranch: A,
        pendingBranch: h,
        pendingId: O,
        effects: f,
        parentComponent: l,
        container: D
      } = Q;
      if (Q.isHydrating)
        Q.isHydrating = !1;
      else if (!C) {
        const P = A && h.transition && h.transition.mode === "out-in";
        P && (A.transition.afterLeave = () => {
          O === Q.pendingId && E(h, D, T, 0);
        });
        let { anchor: T } = Q;
        A && (T = R(A), _(A, l, Q, !0)), P || E(h, D, T, 0);
      }
      ut(Q, h), Q.pendingBranch = null, Q.isInFallback = !1;
      let S = Q.parent, g = !1;
      for (; S; ) {
        if (S.pendingBranch) {
          S.effects.push(...f), g = !0;
          break;
        }
        S = S.parent;
      }
      g || pr(f), Q.effects = [], F && t && t.pendingBranch && j === t.pendingId && (t.deps--, t.deps === 0 && !B && t.resolve()), Ot(w, "onResolve");
    },
    fallback(C) {
      if (!Q.pendingBranch)
        return;
      const { vnode: B, activeBranch: w, parentComponent: A, container: h, isSVG: O } = Q;
      Ot(B, "onFallback");
      const f = R(w), l = () => {
        Q.isInFallback && (c(
          null,
          C,
          h,
          f,
          A,
          null,
          // fallback tree will not have suspense context
          O,
          a,
          u
        ), ut(Q, C));
      }, D = C.transition && C.transition.mode === "out-in";
      D && (w.transition.afterLeave = l), Q.isInFallback = !0, _(
        w,
        A,
        null,
        // no suspense so unmount hooks fire now
        !0
        // shouldRemove
      ), D || l();
    },
    move(C, B, w) {
      Q.activeBranch && E(Q.activeBranch, C, B, w), Q.container = C;
    },
    next() {
      return Q.activeBranch && R(Q.activeBranch);
    },
    registerDep(C, B) {
      const w = !!Q.pendingBranch;
      w && Q.deps++;
      const A = C.vnode.el;
      C.asyncDep.catch((h) => {
        fr(h, C, 0);
      }).then((h) => {
        if (C.isUnmounted || Q.isUnmounted || Q.pendingId !== C.suspenseId)
          return;
        C.asyncResolved = !0;
        const { vnode: O } = C;
        process.env.NODE_ENV !== "production" && ks(O), Rl(C, h, !1), A && (O.el = A);
        const f = !A && C.subTree.el;
        B(
          C,
          O,
          // component may have been moved before resolve.
          // if this is not a hydration, instance.subTree will be the comment
          // placeholder.
          x(A || C.subTree.el),
          // anchor will not be used if this is hydration, so only need to
          // consider the comment placeholder case.
          A ? null : R(C.subTree),
          Q,
          s,
          u
        ), f && L(f), Is(C, O.el), process.env.NODE_ENV !== "production" && _s(), w && --Q.deps === 0 && Q.resolve();
      });
    },
    unmount(C, B) {
      Q.isUnmounted = !0, Q.activeBranch && _(
        Q.activeBranch,
        n,
        C,
        B
      ), Q.pendingBranch && _(
        Q.pendingBranch,
        n,
        C,
        B
      );
    }
  };
  return Q;
}
function Hu(e, t, n, r, o, i, s, a, u) {
  const p = t.suspense = hr(
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
  ), d = u(
    e,
    p.pendingBranch = t.ssContent,
    n,
    p,
    i,
    s
  );
  return p.deps === 0 && p.resolve(!1, !0), d;
}
function Uu(e) {
  const { shapeFlag: t, children: n } = e, r = t & 32;
  e.ssContent = lo(
    r ? n.default : n
  ), e.ssFallback = r ? lo(n.fallback) : Fe(dt);
}
function lo(e) {
  let t;
  if (Y(e)) {
    const n = ft && e._c;
    n && (e._d = !1, lt()), e = e(), n && (e._d = !0, t = Ee, Ks());
  }
  if (X(e)) {
    const n = Iu(e);
    process.env.NODE_ENV !== "production" && !n && W("<Suspense> slots expect a single root node."), e = n;
  }
  return e = Cl(e), t && !e.dynamicChildren && (e.dynamicChildren = t.filter((n) => n !== e)), e;
}
function Ku(e, t) {
  t && t.pendingBranch ? X(e) ? t.effects.push(...e) : t.effects.push(e) : pr(e);
}
function ut(e, t) {
  e.activeBranch = t;
  const { vnode: n, parentComponent: r } = e, o = n.el = t.el;
  r && r.subTree === n && (r.vnode.el = o, Is(r, o));
}
function zu(e) {
  var t;
  return ((t = e.props) == null ? void 0 : t.suspensible) != null && e.props.suspensible !== !1;
}
const Bt = {};
function En(e, t, n) {
  return process.env.NODE_ENV !== "production" && !Y(t) && W(
    "`watch(fn, options?)` signature has been moved to a separate API. Use `watchEffect(fn, options?)` instead. `watch` now only supports `watch(source, cb, options?) signature."
  ), Vu(e, t, n);
}
function Vu(e, t, { immediate: n, deep: r, flush: o, onTrack: i, onTrigger: s } = qn) {
  var a;
  process.env.NODE_ENV !== "production" && !t && (n !== void 0 && W(
    'watch() "immediate" option is only respected when using the watch(source, callback, options?) signature.'
  ), r !== void 0 && W(
    'watch() "deep" option is only respected when using the watch(source, callback, options?) signature.'
  ));
  const u = (M) => {
    W(
      "Invalid watch source: ",
      M,
      "A watch source can only be a getter/effect function, a ref, a reactive object, or an array of these types."
    );
  }, p = qc() === ((a = ce) == null ? void 0 : a.scope) ? ce : null;
  let d, c = !1, E = !1;
  if (pe(e) ? (d = () => e.value, c = zn(e)) : Ze(e) ? (d = () => e, r = !0) : X(e) ? (E = !0, c = e.some((M) => Ze(M) || zn(M)), d = () => e.map((M) => {
    if (pe(M))
      return M.value;
    if (Ze(M))
      return it(M);
    if (Y(M))
      return $e(M, p, 2);
    process.env.NODE_ENV !== "production" && u(M);
  })) : Y(e) ? t ? d = () => $e(e, p, 2) : d = () => {
    if (!(p && p.isUnmounted))
      return _ && _(), At(
        e,
        p,
        3,
        [R]
      );
  } : (d = Ae, process.env.NODE_ENV !== "production" && u(e)), t && r) {
    const M = d;
    d = () => it(M());
  }
  let _, R = (M) => {
    _ = F.onStop = () => {
      $e(M, p, 4);
    };
  }, x = E ? new Array(e.length).fill(Bt) : Bt;
  const L = () => {
    if (F.active)
      if (t) {
        const M = F.run();
        (r || c || (E ? M.some(
          (Q, C) => zt(Q, x[C])
        ) : zt(M, x))) && (_ && _(), At(t, p, 3, [
          M,
          // pass undefined as the old value when it's changed for the first time
          x === Bt ? void 0 : E && x[0] === Bt ? [] : x,
          R
        ]), x = M);
      } else
        F.run();
  };
  L.allowRecurse = !!t;
  let j;
  o === "sync" ? j = L : o === "post" ? j = () => mo(L, p && p.suspense) : (L.pre = !0, p && (L.id = p.uid), j = () => Ns(L));
  const F = new ms(d, j);
  return process.env.NODE_ENV !== "production" && (F.onTrack = i, F.onTrigger = s), t ? n ? L() : x = F.run() : o === "post" ? mo(
    F.run.bind(F),
    p && p.suspense
  ) : F.run(), () => {
    F.stop(), p && p.scope && is(p.scope.effects, F);
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
function it(e, t) {
  if (!ne(e) || e.__v_skip || (t = t || /* @__PURE__ */ new Set(), t.has(e)))
    return e;
  if (t.add(e), pe(e))
    it(e.value, t);
  else if (X(e))
    for (let n = 0; n < e.length; n++)
      it(e[n], t);
  else if (as(e) || Xe(e))
    e.forEach((n) => {
      it(n, t);
    });
  else if (ls(e))
    for (const n in e)
      it(e[n], t);
  return e;
}
function Js(e, t) {
  return Y(e) ? (
    // #8326: extend call and options.name access are considered side-effects
    // by Rollup, so we have to wrap it in a pure-annotated IIFE.
    /* @__PURE__ */ (() => we({ name: e.name }, t, { setup: e }))()
  ) : e;
}
const Xu = (e) => e.type.__isKeepAlive;
function Yu(e, t) {
  Qs(e, "a", t);
}
function Zu(e, t) {
  Qs(e, "da", t);
}
function Qs(e, t, n = ce) {
  const r = e.__wdc || (e.__wdc = () => {
    let o = n;
    for (; o; ) {
      if (o.isDeactivated)
        return;
      o = o.parent;
    }
    return e();
  });
  if (fn(t, r, n), n) {
    let o = n.parent;
    for (; o && o.parent; )
      Xu(o.parent.vnode) && Gu(r, t, n, o), o = o.parent;
  }
}
function Gu(e, t, n, r) {
  const o = fn(
    t,
    e,
    r,
    !0
    /* prepend */
  );
  qs(() => {
    is(r[t], o);
  }, n);
}
function fn(e, t, n = ce, r = !1) {
  if (n) {
    const o = n[e] || (n[e] = []), i = t.__weh || (t.__weh = (...s) => {
      if (n.isUnmounted)
        return;
      un(), Gt(n);
      const a = At(t, n, e, s);
      return vr(), ln(), a;
    });
    return r ? o.unshift(i) : o.push(i), i;
  } else if (process.env.NODE_ENV !== "production") {
    const o = Bc(dr[e].replace(/ hook$/, ""));
    W(
      `${o} is called when there is no active component instance to be associated with. Lifecycle injection APIs can only be used during execution of setup(). If you are using async setup(), make sure to register lifecycle hooks before the first await statement.`
    );
  }
}
const Pe = (e) => (t, n = ce) => (
  // post-create lifecycle registrations are noops during SSR (except for serverPrefetch)
  fn(e, (...r) => t(...r), n)
), $u = Pe("bm"), el = Pe("m"), tl = Pe("bu"), nl = Pe("u"), rl = Pe("bum"), qs = Pe("um"), ol = Pe("sp"), sl = Pe(
  "rtg"
), il = Pe(
  "rtc"
);
function al(e, t = ce) {
  fn("ec", e, t);
}
const cl = Symbol.for("v-ndc"), js = (e) => e === "_" || e === "$";
process.env.NODE_ENV;
function ul(e) {
  const { ctx: t, setupState: n } = e;
  Object.keys(z(n)).forEach((r) => {
    if (!n.__isScriptSetup) {
      if (js(r[0])) {
        W(
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
        set: Ae
      });
    }
  });
}
function fo(e) {
  return X(e) ? e.reduce(
    (t, n) => (t[n] = null, t),
    {}
  ) : e;
}
function ll(e) {
  const t = kl();
  process.env.NODE_ENV !== "production" && !t && W(
    "withAsyncContext called without active current instance. This is likely a bug."
  );
  let n = e();
  return vr(), or(n) && (n = n.catch((r) => {
    throw Gt(t), r;
  })), [n, () => Gt(t)];
}
function dl() {
  const e = /* @__PURE__ */ Object.create(null);
  return (t, n) => {
    e[n] ? W(`${t} property "${n}" is already defined in ${e[n]}.`) : e[n] = t;
  };
}
function fl(e) {
  const t = Hs(e), n = e.proxy, r = e.ctx;
  t.beforeCreate && po(t.beforeCreate, e, "bc");
  const {
    // state
    data: o,
    computed: i,
    methods: s,
    watch: a,
    provide: u,
    inject: p,
    // lifecycle
    created: d,
    beforeMount: c,
    mounted: E,
    beforeUpdate: _,
    updated: R,
    activated: x,
    deactivated: L,
    beforeDestroy: j,
    beforeUnmount: F,
    destroyed: M,
    unmounted: Q,
    render: C,
    renderTracked: B,
    renderTriggered: w,
    errorCaptured: A,
    serverPrefetch: h,
    // public API
    expose: O,
    inheritAttrs: f,
    // assets
    components: l,
    directives: D,
    filters: S
  } = t, g = process.env.NODE_ENV !== "production" ? dl() : null;
  if (process.env.NODE_ENV !== "production") {
    const [T] = e.propsOptions;
    if (T)
      for (const J in T)
        g("Props", J);
  }
  if (p && pl(p, r, g), s)
    for (const T in s) {
      const J = s[T];
      Y(J) ? (process.env.NODE_ENV !== "production" ? Object.defineProperty(r, T, {
        value: J.bind(n),
        configurable: !0,
        enumerable: !0,
        writable: !0
      }) : r[T] = J.bind(n), process.env.NODE_ENV !== "production" && g("Methods", T)) : process.env.NODE_ENV !== "production" && W(
        `Method "${T}" has type "${typeof J}" in the component definition. Did you reference the function correctly?`
      );
    }
  if (o) {
    process.env.NODE_ENV !== "production" && !Y(o) && W(
      "The data option must be a function. Plain object usage is no longer supported."
    );
    const T = o.call(n, n);
    if (process.env.NODE_ENV !== "production" && or(T) && W(
      "data() returned a Promise - note data() cannot be async; If you intend to perform data fetching before component renders, use async setup() + <Suspense>."
    ), !ne(T))
      process.env.NODE_ENV !== "production" && W("data() should return an object.");
    else if (e.data = cr(T), process.env.NODE_ENV !== "production")
      for (const J in T)
        g("Data", J), js(J[0]) || Object.defineProperty(r, J, {
          configurable: !0,
          enumerable: !0,
          get: () => T[J],
          set: Ae
        });
  }
  if (i)
    for (const T in i) {
      const J = i[T], V = Y(J) ? J.bind(n, n) : Y(J.get) ? J.get.bind(n, n) : Ae;
      process.env.NODE_ENV !== "production" && V === Ae && W(`Computed property "${T}" has no getter.`);
      const ee = !Y(J) && Y(J.set) ? J.set.bind(n) : process.env.NODE_ENV !== "production" ? () => {
        W(
          `Write operation failed: computed property "${T}" is readonly.`
        );
      } : Ae, ie = Tl({
        get: V,
        set: ee
      });
      Object.defineProperty(r, T, {
        enumerable: !0,
        configurable: !0,
        get: () => ie.value,
        set: (ue) => ie.value = ue
      }), process.env.NODE_ENV !== "production" && g("Computed", T);
    }
  if (a)
    for (const T in a)
      Fs(a[T], r, n, T);
  if (u) {
    const T = Y(u) ? u.call(n) : u;
    Reflect.ownKeys(T).forEach((J) => {
      ml(J, T[J]);
    });
  }
  d && po(d, e, "c");
  function P(T, J) {
    X(J) ? J.forEach((V) => T(V.bind(n))) : J && T(J.bind(n));
  }
  if (P($u, c), P(el, E), P(tl, _), P(nl, R), P(Yu, x), P(Zu, L), P(al, A), P(il, B), P(sl, w), P(rl, F), P(qs, Q), P(ol, h), X(O))
    if (O.length) {
      const T = e.exposed || (e.exposed = {});
      O.forEach((J) => {
        Object.defineProperty(T, J, {
          get: () => n[J],
          set: (V) => n[J] = V
        });
      });
    } else
      e.exposed || (e.exposed = {});
  C && e.render === Ae && (e.render = C), f != null && (e.inheritAttrs = f), l && (e.components = l), D && (e.directives = D);
}
function pl(e, t, n = Ae) {
  X(e) && (e = Xn(e));
  for (const r in e) {
    const o = e[r];
    let i;
    ne(o) ? "default" in o ? i = On(
      o.from || r,
      o.default,
      !0
      /* treat default function as factory */
    ) : i = On(o.from || r) : i = On(o), pe(i) ? Object.defineProperty(t, r, {
      enumerable: !0,
      configurable: !0,
      get: () => i.value,
      set: (s) => i.value = s
    }) : t[r] = i, process.env.NODE_ENV !== "production" && n("Inject", r);
  }
}
function po(e, t, n) {
  At(
    X(e) ? e.map((r) => r.bind(t.proxy)) : e.bind(t.proxy),
    t,
    n
  );
}
function Fs(e, t, n, r) {
  const o = r.includes(".") ? Wu(n, r) : () => n[r];
  if (Ce(e)) {
    const i = t[e];
    Y(i) ? En(o, i) : process.env.NODE_ENV !== "production" && W(`Invalid watch handler specified by key "${e}"`, i);
  } else if (Y(e))
    En(o, e.bind(n));
  else if (ne(e))
    if (X(e))
      e.forEach((i) => Fs(i, t, n, r));
    else {
      const i = Y(e.handler) ? e.handler.bind(n) : t[e.handler];
      Y(i) ? En(o, i, e) : process.env.NODE_ENV !== "production" && W(`Invalid watch handler specified by key "${e.handler}"`, i);
    }
  else
    process.env.NODE_ENV !== "production" && W(`Invalid watch option: "${r}"`, e);
}
function Hs(e) {
  const t = e.type, { mixins: n, extends: r } = t, {
    mixins: o,
    optionsCache: i,
    config: { optionMergeStrategies: s }
  } = e.appContext, a = i.get(t);
  let u;
  return a ? u = a : !o.length && !n && !r ? u = t : (u = {}, o.length && o.forEach(
    (p) => Xt(u, p, s, !0)
  ), Xt(u, t, s)), ne(t) && i.set(t, u), u;
}
function Xt(e, t, n, r = !1) {
  const { mixins: o, extends: i } = t;
  i && Xt(e, i, n, !0), o && o.forEach(
    (s) => Xt(e, s, n, !0)
  );
  for (const s in t)
    if (r && s === "expose")
      process.env.NODE_ENV !== "production" && W(
        '"expose" option is ignored when declared in mixins or extends. It should only be declared in the base component itself.'
      );
    else {
      const a = hl[s] || n && n[s];
      e[s] = a ? a(e[s], t[s]) : t[s];
    }
  return e;
}
const hl = {
  data: ho,
  props: go,
  emits: go,
  // objects
  methods: mt,
  computed: mt,
  // lifecycle
  beforeCreate: le,
  created: le,
  beforeMount: le,
  mounted: le,
  beforeUpdate: le,
  updated: le,
  beforeDestroy: le,
  beforeUnmount: le,
  destroyed: le,
  unmounted: le,
  activated: le,
  deactivated: le,
  errorCaptured: le,
  serverPrefetch: le,
  // assets
  components: mt,
  directives: mt,
  // watch
  watch: wl,
  // provide / inject
  provide: ho,
  inject: gl
};
function ho(e, t) {
  return t ? e ? function() {
    return we(
      Y(e) ? e.call(this, this) : e,
      Y(t) ? t.call(this, this) : t
    );
  } : t : e;
}
function gl(e, t) {
  return mt(Xn(e), Xn(t));
}
function Xn(e) {
  if (X(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++)
      t[e[n]] = e[n];
    return t;
  }
  return e;
}
function le(e, t) {
  return e ? [...new Set([].concat(e, t))] : t;
}
function mt(e, t) {
  return e ? we(/* @__PURE__ */ Object.create(null), e, t) : t;
}
function go(e, t) {
  return e ? X(e) && X(t) ? [.../* @__PURE__ */ new Set([...e, ...t])] : we(
    /* @__PURE__ */ Object.create(null),
    fo(e),
    fo(t ?? {})
  ) : t;
}
function wl(e, t) {
  if (!e)
    return t;
  if (!t)
    return e;
  const n = we(/* @__PURE__ */ Object.create(null), e);
  for (const r in t)
    n[r] = le(e[r], t[r]);
  return n;
}
let wo = null;
function ml(e, t) {
  if (!ce)
    process.env.NODE_ENV !== "production" && W("provide() can only be used inside setup().");
  else {
    let n = ce.provides;
    const r = ce.parent && ce.parent.provides;
    r === n && (n = ce.provides = Object.create(r)), n[e] = t;
  }
}
function On(e, t, n = !1) {
  const r = ce || ke;
  if (r || wo) {
    const o = r ? r.parent == null ? r.vnode.appContext && r.vnode.appContext.provides : r.parent.provides : wo._context.provides;
    if (o && e in o)
      return o[e];
    if (arguments.length > 1)
      return n && Y(t) ? t.call(r && r.proxy) : t;
    process.env.NODE_ENV !== "production" && W(`injection "${String(e)}" not found.`);
  } else
    process.env.NODE_ENV !== "production" && W("inject() can only be used inside setup() or functional components.");
}
let Tt, qe;
function yl(e, t) {
  e.appContext.config.performance && Yt() && qe.mark(`vue-${t}-${e.uid}`), process.env.NODE_ENV !== "production" && Pu(e, t, Yt() ? qe.now() : Date.now());
}
function vl(e, t) {
  if (e.appContext.config.performance && Yt()) {
    const n = `vue-${t}-${e.uid}`, r = n + ":end";
    qe.mark(r), qe.measure(
      `<${br(e, e.type)}> ${t}`,
      n,
      r
    ), qe.clearMarks(n), qe.clearMarks(r);
  }
  process.env.NODE_ENV !== "production" && Mu(e, t, Yt() ? qe.now() : Date.now());
}
function Yt() {
  return Tt !== void 0 || (typeof window < "u" && window.performance ? (Tt = !0, qe = window.performance) : Tt = !1), Tt;
}
const mo = Ku, bl = (e) => e.__isTeleport, gr = Symbol.for("v-fgt"), Us = Symbol.for("v-txt"), dt = Symbol.for("v-cmt"), qt = [];
let Ee = null;
function lt(e = !1) {
  qt.push(Ee = e ? null : []);
}
function Ks() {
  qt.pop(), Ee = qt[qt.length - 1] || null;
}
let ft = 1;
function yo(e) {
  ft += e;
}
function zs(e) {
  return e.dynamicChildren = ft > 0 ? Ee || _c : null, Ks(), ft > 0 && Ee && Ee.push(e), e;
}
function Cn(e, t, n, r, o, i) {
  return zs(
    Zt(
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
function Vs(e, t, n, r, o) {
  return zs(
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
function wr(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
function Sn(e, t) {
  return process.env.NODE_ENV !== "production" && t.shapeFlag & 6 && ot.has(t.type) ? (e.shapeFlag &= -257, t.shapeFlag &= -513, !1) : e.type === t.type && e.key === t.key;
}
const Al = (...e) => Ys(
  ...e
), Ws = "__vInternal", Xs = ({ key: e }) => e ?? null, jt = ({
  ref: e,
  ref_key: t,
  ref_for: n
}) => (typeof e == "number" && (e = "" + e), e != null ? Ce(e) || pe(e) || Y(e) ? { i: ke, r: e, k: t, f: !!n } : e : null);
function Zt(e, t = null, n = null, r = 0, o = null, i = e === gr ? 0 : 1, s = !1, a = !1) {
  const u = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && Xs(t),
    ref: t && jt(t),
    scopeId: Ls,
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
    ctx: ke
  };
  return a ? (mr(u, n), i & 128 && e.normalize(u)) : n && (u.shapeFlag |= Ce(n) ? 8 : 16), process.env.NODE_ENV !== "production" && u.key !== u.key && W("VNode created with invalid key (NaN). VNode type:", u.type), ft > 0 && // avoid a block node from tracking itself
  !s && // has current parent block
  Ee && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (u.patchFlag > 0 || i & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  u.patchFlag !== 32 && Ee.push(u), u;
}
const Fe = process.env.NODE_ENV !== "production" ? Al : Ys;
function Ys(e, t = null, n = null, r = 0, o = null, i = !1) {
  if ((!e || e === cl) && (process.env.NODE_ENV !== "production" && !e && W(`Invalid vnode type when creating vnode: ${e}.`), e = dt), wr(e)) {
    const a = Ct(
      e,
      t,
      !0
      /* mergeRef: true */
    );
    return n && mr(a, n), ft > 0 && !i && Ee && (a.shapeFlag & 6 ? Ee[Ee.indexOf(e)] = a : Ee.push(a)), a.patchFlag |= -2, a;
  }
  if ($s(e) && (e = e.__vccOpts), t) {
    t = El(t);
    let { class: a, style: u } = t;
    a && !Ce(a) && (t.class = at(a)), ne(u) && (Vn(u) && !X(u) && (u = we({}, u)), t.style = ir(u));
  }
  const s = Ce(e) ? 1 : Ju(e) ? 128 : bl(e) ? 64 : ne(e) ? 4 : Y(e) ? 2 : 0;
  return process.env.NODE_ENV !== "production" && s & 4 && Vn(e) && (e = z(e), W(
    "Vue received a Component which was made a reactive object. This can lead to unnecessary performance overhead, and should be avoided by marking the component with `markRaw` or using `shallowRef` instead of `ref`.",
    `
Component that was made reactive: `,
    e
  )), Zt(
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
function El(e) {
  return e ? Vn(e) || Ws in e ? we({}, e) : e : null;
}
function Ct(e, t, n = !1) {
  const { props: r, ref: o, patchFlag: i, children: s } = e, a = t ? Dl(r || {}, t) : r;
  return {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: a,
    key: a && Xs(a),
    ref: t && t.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      n && o ? X(o) ? o.concat(jt(t)) : [o, jt(t)] : jt(t)
    ) : o,
    scopeId: e.scopeId,
    slotScopeIds: e.slotScopeIds,
    children: process.env.NODE_ENV !== "production" && i === -1 && X(s) ? s.map(Zs) : s,
    target: e.target,
    targetAnchor: e.targetAnchor,
    staticCount: e.staticCount,
    shapeFlag: e.shapeFlag,
    // if the vnode is cloned with extra props, we can no longer assume its
    // existing patch flag to be reliable and need to add the FULL_PROPS flag.
    // note: preserve flag for fragments since they use the flag for children
    // fast paths only.
    patchFlag: t && e.type !== gr ? i === -1 ? 16 : i | 16 : i,
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
    ssContent: e.ssContent && Ct(e.ssContent),
    ssFallback: e.ssFallback && Ct(e.ssFallback),
    el: e.el,
    anchor: e.anchor,
    ctx: e.ctx,
    ce: e.ce
  };
}
function Zs(e) {
  const t = Ct(e);
  return X(e.children) && (t.children = e.children.map(Zs)), t;
}
function Ol(e = " ", t = 0) {
  return Fe(Us, null, e, t);
}
function vo(e = "", t = !1) {
  return t ? (lt(), Vs(dt, null, e)) : Fe(dt, null, e);
}
function Cl(e) {
  return e == null || typeof e == "boolean" ? Fe(dt) : X(e) ? Fe(
    gr,
    null,
    // #3666, avoid reference pollution when reusing vnode
    e.slice()
  ) : typeof e == "object" ? Sl(e) : Fe(Us, null, String(e));
}
function Sl(e) {
  return e.el === null && e.patchFlag !== -1 || e.memo ? e : Ct(e);
}
function mr(e, t) {
  let n = 0;
  const { shapeFlag: r } = e;
  if (t == null)
    t = null;
  else if (X(t))
    n = 16;
  else if (typeof t == "object")
    if (r & 65) {
      const o = t.default;
      o && (o._c && (o._d = !1), mr(e, o()), o._c && (o._d = !0));
      return;
    } else {
      n = 32;
      const o = t._;
      !o && !(Ws in t) ? t._ctx = ke : o === 3 && ke && (ke.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
    }
  else
    Y(t) ? (t = { default: t, _ctx: ke }, n = 32) : (t = String(t), r & 64 ? (n = 16, t = [Ol(t)]) : n = 8);
  e.children = t, e.shapeFlag |= n;
}
function Dl(...e) {
  const t = {};
  for (let n = 0; n < e.length; n++) {
    const r = e[n];
    for (const o in r)
      if (o === "class")
        t.class !== r.class && (t.class = at([t.class, r.class]));
      else if (o === "style")
        t.style = ir([t.style, r.style]);
      else if (Nc(o)) {
        const i = t[o], s = r[o];
        s && i !== s && !(X(i) && i.includes(s)) && (t[o] = i ? [].concat(i, s) : s);
      } else
        o !== "" && (t[o] = r[o]);
  }
  return t;
}
let ce = null;
const kl = () => ce || ke;
let yr, nt, bo = "__VUE_INSTANCE_SETTERS__";
(nt = jn()[bo]) || (nt = jn()[bo] = []), nt.push((e) => ce = e), yr = (e) => {
  nt.length > 1 ? nt.forEach((t) => t(e)) : nt[0](e);
};
const Gt = (e) => {
  yr(e), e.scope.on();
}, vr = () => {
  ce && ce.scope.off(), yr(null);
};
let _l = !1;
function Rl(e, t, n) {
  Y(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : ne(t) ? (process.env.NODE_ENV !== "production" && wr(t) && W(
    "setup() should not return VNodes directly - return a render function instead."
  ), process.env.NODE_ENV !== "production" && (e.devtoolsRawSetupState = t), e.setupState = gu(t), process.env.NODE_ENV !== "production" && ul(e)) : process.env.NODE_ENV !== "production" && t !== void 0 && W(
    `setup() should return an object. Received: ${t === null ? "null" : typeof t}`
  ), Nl(e, n);
}
let Ao;
function Nl(e, t, n) {
  const r = e.type;
  if (!e.render) {
    if (!t && Ao && !r.render) {
      const o = r.template || Hs(e).template;
      if (o) {
        process.env.NODE_ENV !== "production" && yl(e, "compile");
        const { isCustomElement: i, compilerOptions: s } = e.appContext.config, { delimiters: a, compilerOptions: u } = r, p = we(
          we(
            {
              isCustomElement: i,
              delimiters: a
            },
            s
          ),
          u
        );
        r.render = Ao(o, p), process.env.NODE_ENV !== "production" && vl(e, "compile");
      }
    }
    e.render = r.render || Ae;
  }
  Gt(e), un(), fl(e), ln(), vr(), process.env.NODE_ENV !== "production" && !r.render && e.render === Ae && !t && (r.template ? W(
    'Component provided template option but runtime compilation is not supported in this build of Vue. Configure your bundler to alias "vue" to "vue/dist/vue.esm-bundler.js".'
    /* should not happen */
  ) : W("Component is missing template or render function."));
}
const xl = /(?:^|[-_])(\w)/g, Bl = (e) => e.replace(xl, (t) => t.toUpperCase()).replace(/[-_]/g, "");
function Gs(e, t = !0) {
  return Y(e) ? e.displayName || e.name : e.name || t && e.__name;
}
function br(e, t, n = !1) {
  let r = Gs(t);
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
  return r ? Bl(r) : n ? "App" : "Anonymous";
}
function $s(e) {
  return Y(e) && "__vccOpts" in e;
}
const Tl = (e, t) => mu(e, t, _l);
function Dn(e) {
  return !!(e && e.__v_isShallow);
}
function Pl() {
  if (process.env.NODE_ENV === "production" || typeof window > "u")
    return;
  const e = { style: "color:#3ba776" }, t = { style: "color:#0b1bc9" }, n = { style: "color:#b62e24" }, r = { style: "color:#9d288c" }, o = {
    header(c) {
      return ne(c) ? c.__isVue ? ["div", e, "VueInstance"] : pe(c) ? [
        "div",
        {},
        ["span", e, d(c)],
        "<",
        a(c.value),
        ">"
      ] : Ze(c) ? [
        "div",
        {},
        ["span", e, Dn(c) ? "ShallowReactive" : "Reactive"],
        "<",
        a(c),
        `>${tt(c) ? " (readonly)" : ""}`
      ] : tt(c) ? [
        "div",
        {},
        ["span", e, Dn(c) ? "ShallowReadonly" : "Readonly"],
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
    const E = [];
    c.type.props && c.props && E.push(s("props", z(c.props))), c.setupState !== qn && E.push(s("setup", c.setupState)), c.data !== qn && E.push(s("data", z(c.data)));
    const _ = u(c, "computed");
    _ && E.push(s("computed", _));
    const R = u(c, "inject");
    return R && E.push(s("injected", R)), E.push([
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
    ]), E;
  }
  function s(c, E) {
    return E = we({}, E), Object.keys(E).length ? [
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
        ...Object.keys(E).map((_) => [
          "div",
          {},
          ["span", r, _ + ": "],
          a(E[_], !1)
        ])
      ]
    ] : ["span", {}];
  }
  function a(c, E = !0) {
    return typeof c == "number" ? ["span", t, c] : typeof c == "string" ? ["span", n, JSON.stringify(c)] : typeof c == "boolean" ? ["span", r, c] : ne(c) ? ["object", { object: E ? z(c) : c }] : ["span", n, String(c)];
  }
  function u(c, E) {
    const _ = c.type;
    if (Y(_))
      return;
    const R = {};
    for (const x in c.ctx)
      p(_, x, E) && (R[x] = c.ctx[x]);
    return R;
  }
  function p(c, E, _) {
    const R = c[_];
    if (X(R) && R.includes(E) || ne(R) && E in R || c.extends && p(c.extends, E, _) || c.mixins && c.mixins.some((x) => p(x, E, _)))
      return !0;
  }
  function d(c) {
    return Dn(c) ? "ShallowRef" : c.effect ? "ComputedRef" : "Ref";
  }
  window.devtoolsFormatters ? window.devtoolsFormatters.push(o) : window.devtoolsFormatters = [o];
}
function Ml() {
  Pl();
}
process.env.NODE_ENV !== "production" && Ml();
const kn = {
  numeric: "Numeric",
  alphanumeric: "Alphanumeric",
  byte: "Byte",
  kanji: "Kanji"
};
function Ll(e) {
  switch (!0) {
    case /^[0-9]*$/.test(e):
      return kn.numeric;
    case /^[0-9A-Z $%*+\-./:]*$/.test(e):
      return kn.alphanumeric;
    default:
      return kn.byte;
  }
}
const Pt = (e) => !!e && typeof e == "object" && !Array.isArray(e);
function $t(e, ...t) {
  if (!t.length)
    return e;
  const n = t.shift();
  return n === void 0 || !Pt(e) || !Pt(n) ? e : (e = { ...e }, Object.keys(n).forEach((r) => {
    const o = e[r], i = n[r];
    Array.isArray(o) && Array.isArray(i) ? e[r] = i : Pt(o) && Pt(i) ? e[r] = $t(Object.assign({}, o), i) : e[r] = i;
  }), $t(e, ...t));
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
const Ql = {
  L: 0.07,
  M: 0.15,
  Q: 0.25,
  H: 0.3
}, rt = {
  dots: "dots",
  rounded: "rounded",
  classy: "classy",
  classyRounded: "classy-rounded",
  square: "square",
  extraRounded: "extra-rounded"
};
class _n {
  constructor({ context: t, type: n }) {
    fe(this, "_context"), fe(this, "_type"), this._context = t, this._type = n;
  }
  draw(t, n, r, o) {
    const i = this._context, s = this._type;
    let a;
    switch (s) {
      case rt.dots:
        a = this._drawDot;
        break;
      case rt.classy:
        a = this._drawClassy;
        break;
      case rt.classyRounded:
        a = this._drawClassyRounded;
        break;
      case rt.rounded:
        a = this._drawRounded;
        break;
      case rt.extraRounded:
        a = this._drawExtraRounded;
        break;
      case rt.square:
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
    const s = +i(-1, 0), a = +i(1, 0), u = +i(0, -1), p = +i(0, 1), d = s + a + u + p;
    if (d === 0) {
      this._basicDot({ x: t, y: n, size: r, context: o, rotation: 0 });
      return;
    }
    if (d > 2 || s && a || u && p) {
      this._basicSquare({ x: t, y: n, size: r, context: o, rotation: 0 });
      return;
    }
    if (d === 2) {
      let c = 0;
      s && u ? c = Math.PI / 2 : u && a ? c = Math.PI : a && p && (c = -Math.PI / 2), this._basicCornerRounded({ x: t, y: n, size: r, context: o, rotation: c });
      return;
    }
    if (d === 1) {
      let c = 0;
      u ? c = Math.PI / 2 : a ? c = Math.PI : p && (c = -Math.PI / 2), this._basicSideRounded({ x: t, y: n, size: r, context: o, rotation: c });
    }
  }
  _drawExtraRounded({ x: t, y: n, size: r, context: o, getNeighbor: i }) {
    const s = +i(-1, 0), a = +i(1, 0), u = +i(0, -1), p = +i(0, 1), d = s + a + u + p;
    if (d === 0) {
      this._basicDot({ x: t, y: n, size: r, context: o, rotation: 0 });
      return;
    }
    if (d > 2 || s && a || u && p) {
      this._basicSquare({ x: t, y: n, size: r, context: o, rotation: 0 });
      return;
    }
    if (d === 2) {
      let c = 0;
      s && u ? c = Math.PI / 2 : u && a ? c = Math.PI : a && p && (c = -Math.PI / 2), this._basicCornerExtraRounded({ x: t, y: n, size: r, context: o, rotation: c });
      return;
    }
    if (d === 1) {
      let c = 0;
      u ? c = Math.PI / 2 : a ? c = Math.PI : p && (c = -Math.PI / 2), this._basicSideRounded({ x: t, y: n, size: r, context: o, rotation: c });
    }
  }
  _drawClassy({ x: t, y: n, size: r, context: o, getNeighbor: i }) {
    const s = +i(-1, 0), a = +i(1, 0), u = +i(0, -1), p = +i(0, 1);
    if (s + a + u + p === 0) {
      this._basicCornersRounded({ x: t, y: n, size: r, context: o, rotation: Math.PI / 2 });
      return;
    }
    if (!s && !u) {
      this._basicCornerRounded({ x: t, y: n, size: r, context: o, rotation: -Math.PI / 2 });
      return;
    }
    if (!a && !p) {
      this._basicCornerRounded({ x: t, y: n, size: r, context: o, rotation: Math.PI / 2 });
      return;
    }
    this._basicSquare({ x: t, y: n, size: r, context: o, rotation: 0 });
  }
  _drawClassyRounded({ x: t, y: n, size: r, context: o, getNeighbor: i }) {
    const s = +i(-1, 0), a = +i(1, 0), u = +i(0, -1), p = +i(0, 1);
    if (s + a + u + p === 0) {
      this._basicCornersRounded({ x: t, y: n, size: r, context: o, rotation: Math.PI / 2 });
      return;
    }
    if (!s && !u) {
      this._basicCornerExtraRounded({ x: t, y: n, size: r, context: o, rotation: -Math.PI / 2 });
      return;
    }
    if (!a && !p) {
      this._basicCornerExtraRounded({ x: t, y: n, size: r, context: o, rotation: Math.PI / 2 });
      return;
    }
    this._basicSquare({ x: t, y: n, size: r, context: o, rotation: 0 });
  }
}
const Rn = {
  dot: "dot",
  square: "square",
  extraRounded: "extra-rounded"
};
class ql {
  constructor({ context: t, type: n }) {
    fe(this, "_context"), fe(this, "_type"), this._context = t, this._type = n;
  }
  draw(t, n, r, o) {
    const i = this._context, s = this._type;
    let a;
    switch (s) {
      case Rn.square:
        a = this._drawSquare;
        break;
      case Rn.extraRounded:
        a = this._drawExtraRounded;
        break;
      case Rn.dot:
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
const Eo = {
  dot: "dot",
  square: "square"
};
class jl {
  constructor({ context: t, type: n }) {
    fe(this, "_context"), fe(this, "_type"), this._context = t, this._type = n;
  }
  draw(t, n, r, o) {
    const i = this._context;
    switch (this._type) {
      case Eo.square:
        this._drawSquare({ x: t, y: n, size: r, context: i, rotation: o });
        break;
      case Eo.dot:
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
const Fl = {
  radial: "radial",
  linear: "linear"
}, ze = [
  [1, 1, 1, 1, 1, 1, 1],
  [1, 0, 0, 0, 0, 0, 1],
  [1, 0, 0, 0, 0, 0, 1],
  [1, 0, 0, 0, 0, 0, 1],
  [1, 0, 0, 0, 0, 0, 1],
  [1, 0, 0, 0, 0, 0, 1],
  [1, 1, 1, 1, 1, 1, 1]
], Ve = [
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
    fe(this, "_canvas"), fe(this, "_options"), fe(this, "_qr"), fe(this, "_image"), this._canvas = document.createElement("canvas"), this._canvas.width = t.width, this._canvas.height = t.height, this._options = t;
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
      const { imageOptions: s, qrOptions: a } = this._options, u = s.imageSize * Ql[a.errorCorrectionLevel], p = Math.floor(u * n * n);
      i = Jl({
        originalWidth: this._image.width,
        originalHeight: this._image.height,
        maxHiddenDots: p,
        maxHiddenAxisDots: n - 14,
        dotSize: o
      });
    }
    this.clear(), this.drawBackground(), this.drawDots((s, a) => {
      var u, p, d, c, E, _;
      return !(this._options.imageOptions.hideBackgroundDots && s >= (n - i.hideXDots) / 2 && s < (n + i.hideXDots) / 2 && a >= (n - i.hideYDots) / 2 && a < (n + i.hideYDots) / 2 || (u = ze[s]) != null && u[a] || (p = ze[s - n + 7]) != null && p[a] || (d = ze[s]) != null && d[a - n + 7] || (c = Ve[s]) != null && c[a] || (E = Ve[s - n + 7]) != null && E[a] || (_ = Ve[s]) != null && _[a - n + 7]);
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
    const i = Math.min(r.width, r.height) - r.margin * 2, s = Math.floor(i / o), a = Math.floor((r.width - o * s) / 2), u = Math.floor((r.height - o * s) / 2), p = new _n({ context: n, type: r.dotsOptions.type });
    n.beginPath();
    for (let d = 0; d < o; d++)
      for (let c = 0; c < o; c++)
        t && !t(d, c) || this._qr.isDark(d, c) && p.draw(
          a + d * s,
          u + c * s,
          s,
          (E, _) => d + E < 0 || c + _ < 0 || d + E >= o || c + _ >= o || t && !t(d + E, c + _) ? !1 : !!this._qr && this._qr.isDark(d + E, c + _)
        );
    if (r.dotsOptions.gradient) {
      const d = r.dotsOptions.gradient, c = this._createGradient({
        context: n,
        options: d,
        additionalRotation: 0,
        x: a,
        y: u,
        size: o * s
      });
      d.colorStops.forEach(({ offset: E, color: _ }) => {
        c.addColorStop(E, _);
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
    const r = this._options, o = this._qr.getModuleCount(), i = Math.min(r.width, r.height) - r.margin * 2, s = Math.floor(i / o), a = s * 7, u = s * 3, p = Math.floor((r.width - o * s) / 2), d = Math.floor((r.height - o * s) / 2);
    [
      [0, 0, 0],
      [1, 0, Math.PI / 2],
      [0, 1, -Math.PI / 2]
    ].forEach(([c, E, _]) => {
      var R, x, L, j, F, M, Q, C, B, w;
      if (t && !t(c, E))
        return;
      const A = p + c * s * (o - 7), h = d + E * s * (o - 7);
      if ((R = r.cornersSquareOptions) != null && R.type) {
        const O = new ql({ context: n, type: (x = r.cornersSquareOptions) == null ? void 0 : x.type });
        n.beginPath(), O.draw(A, h, a, _);
      } else {
        const O = new _n({ context: n, type: r.dotsOptions.type });
        n.beginPath();
        for (let f = 0; f < ze.length; f++)
          for (let l = 0; l < ze[f].length; l++)
            (L = ze[f]) != null && L[l] && O.draw(
              A + f * s,
              h + l * s,
              s,
              (D, S) => {
                var g;
                return !!((g = ze[f + D]) != null && g[l + S]);
              }
            );
      }
      if ((j = r.cornersSquareOptions) != null && j.gradient) {
        const O = r.cornersSquareOptions.gradient, f = this._createGradient({
          context: n,
          options: O,
          additionalRotation: _,
          x: A,
          y: h,
          size: a
        });
        O.colorStops.forEach(({ offset: l, color: D }) => {
          f.addColorStop(l, D);
        }), n.fillStyle = n.strokeStyle = f;
      } else
        (F = r.cornersSquareOptions) != null && F.color && (n.fillStyle = n.strokeStyle = r.cornersSquareOptions.color);
      if (n.fill("evenodd"), (M = r.cornersDotOptions) != null && M.type) {
        const O = new jl({ context: n, type: (Q = r.cornersDotOptions) == null ? void 0 : Q.type });
        n.beginPath(), O.draw(A + s * 2, h + s * 2, u, _);
      } else {
        const O = new _n({ context: n, type: r.dotsOptions.type });
        n.beginPath();
        for (let f = 0; f < Ve.length; f++)
          for (let l = 0; l < Ve[f].length; l++)
            (C = Ve[f]) != null && C[l] && O.draw(
              A + f * s,
              h + l * s,
              s,
              (D, S) => {
                var g;
                return !!((g = Ve[f + D]) != null && g[l + S]);
              }
            );
      }
      if ((B = r.cornersDotOptions) != null && B.gradient) {
        const O = r.cornersDotOptions.gradient, f = this._createGradient({
          context: n,
          options: O,
          additionalRotation: _,
          x: A + s * 2,
          y: h + s * 2,
          size: u
        });
        O.colorStops.forEach(({ offset: l, color: D }) => {
          f.addColorStop(l, D);
        }), n.fillStyle = n.strokeStyle = f;
      } else
        (w = r.cornersDotOptions) != null && w.color && (n.fillStyle = n.strokeStyle = r.cornersDotOptions.color);
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
    const s = this._options, a = Math.floor((s.width - r * o) / 2), u = Math.floor((s.height - r * o) / 2), p = a + s.imageOptions.margin + (r * o - t) / 2, d = u + s.imageOptions.margin + (r * o - n) / 2, c = t - s.imageOptions.margin * 2, E = n - s.imageOptions.margin * 2;
    i.drawImage(this._image, p, d, c < 0 ? 0 : c, E < 0 ? 0 : E);
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
    if (n.type === Fl.radial)
      a = t.createRadialGradient(o + s / 2, i + s / 2, 0, o + s / 2, i + s / 2, s / 2);
    else {
      const u = ((n.rotation || 0) + r) % (2 * Math.PI), p = (u + 2 * Math.PI) % (2 * Math.PI);
      let d = o + s / 2, c = i + s / 2, E = o + s / 2, _ = i + s / 2;
      p >= 0 && p <= 0.25 * Math.PI || p > 1.75 * Math.PI && p <= 2 * Math.PI ? (d = d - s / 2, c = c - s / 2 * Math.tan(u), E = E + s / 2, _ = _ + s / 2 * Math.tan(u)) : p > 0.25 * Math.PI && p <= 0.75 * Math.PI ? (c = c - s / 2, d = d - s / 2 / Math.tan(u), _ = _ + s / 2, E = E + s / 2 / Math.tan(u)) : p > 0.75 * Math.PI && p <= 1.25 * Math.PI ? (d = d + s / 2, c = c + s / 2 * Math.tan(u), E = E - s / 2, _ = _ - s / 2 * Math.tan(u)) : p > 1.25 * Math.PI && p <= 1.75 * Math.PI && (c = c + s / 2, d = d + s / 2 / Math.tan(u), _ = _ - s / 2, E = E - s / 2 / Math.tan(u)), a = t.createLinearGradient(Math.round(d), Math.round(c), Math.round(E), Math.round(_));
    }
    return a;
  }
}
const ei = {};
for (let e = 0; e <= 40; e++)
  ei[e] = e;
const Ul = {
  L: "L",
  M: "M",
  Q: "Q",
  H: "H"
}, Oo = {
  width: 300,
  height: 300,
  data: "",
  margin: 0,
  qrOptions: {
    typeNumber: ei[0],
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
function Mt(e) {
  const t = { ...e };
  if (!t.colorStops || !t.colorStops.length)
    throw "Field 'colorStops' is required in gradient";
  return t.rotation ? t.rotation = Number(t.rotation) : t.rotation = 0, t.colorStops = t.colorStops.map((n) => ({
    ...n,
    offset: Number(n.offset)
  })), t;
}
function Co(e) {
  const t = { ...e };
  return t.width = Number(t.width), t.height = Number(t.height), t.margin = Number(t.margin), t.imageOptions = {
    ...t.imageOptions,
    hideBackgroundDots: !!t.imageOptions.hideBackgroundDots,
    imageSize: Number(t.imageOptions.imageSize),
    margin: Number(t.imageOptions.margin)
  }, t.margin > Math.min(t.width, t.height) && (t.margin = Math.min(t.width, t.height)), t.dotsOptions = {
    ...t.dotsOptions
  }, t.dotsOptions.gradient && (t.dotsOptions.gradient = Mt(t.dotsOptions.gradient)), t.cornersSquareOptions && (t.cornersSquareOptions = {
    ...t.cornersSquareOptions
  }, t.cornersSquareOptions.gradient && (t.cornersSquareOptions.gradient = Mt(t.cornersSquareOptions.gradient))), t.cornersDotOptions && (t.cornersDotOptions = {
    ...t.cornersDotOptions
  }, t.cornersDotOptions.gradient && (t.cornersDotOptions.gradient = Mt(t.cornersDotOptions.gradient))), t.backgroundOptions && (t.backgroundOptions = {
    ...t.backgroundOptions
  }, t.backgroundOptions.gradient && (t.backgroundOptions.gradient = Mt(t.backgroundOptions.gradient))), t;
}
function Kl(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var ti = { exports: {} };
(function(e, t) {
  var n = function() {
    var r = function(C, B) {
      var w = 236, A = 17, h = C, O = i[B], f = null, l = 0, D = null, S = [], g = {}, P = function(m, y) {
        l = h * 4 + 17, f = function(b) {
          for (var k = new Array(b), N = 0; N < b; N += 1) {
            k[N] = new Array(b);
            for (var I = 0; I < b; I += 1)
              k[N][I] = null;
          }
          return k;
        }(l), T(0, 0), T(l - 7, 0), T(0, l - 7), ee(), V(), ue(m, y), h >= 7 && ie(m), D == null && (D = pn(h, O, S)), he(D, y);
      }, T = function(m, y) {
        for (var b = -1; b <= 7; b += 1)
          if (!(m + b <= -1 || l <= m + b))
            for (var k = -1; k <= 7; k += 1)
              y + k <= -1 || l <= y + k || (0 <= b && b <= 6 && (k == 0 || k == 6) || 0 <= k && k <= 6 && (b == 0 || b == 6) || 2 <= b && b <= 4 && 2 <= k && k <= 4 ? f[m + b][y + k] = !0 : f[m + b][y + k] = !1);
      }, J = function() {
        for (var m = 0, y = 0, b = 0; b < 8; b += 1) {
          P(!0, b);
          var k = a.getLostPoint(g);
          (b == 0 || m > k) && (m = k, y = b);
        }
        return y;
      }, V = function() {
        for (var m = 8; m < l - 8; m += 1)
          f[m][6] == null && (f[m][6] = m % 2 == 0);
        for (var y = 8; y < l - 8; y += 1)
          f[6][y] == null && (f[6][y] = y % 2 == 0);
      }, ee = function() {
        for (var m = a.getPatternPosition(h), y = 0; y < m.length; y += 1)
          for (var b = 0; b < m.length; b += 1) {
            var k = m[y], N = m[b];
            if (f[k][N] == null)
              for (var I = -2; I <= 2; I += 1)
                for (var H = -2; H <= 2; H += 1)
                  I == -2 || I == 2 || H == -2 || H == 2 || I == 0 && H == 0 ? f[k + I][N + H] = !0 : f[k + I][N + H] = !1;
          }
      }, ie = function(m) {
        for (var y = a.getBCHTypeNumber(h), b = 0; b < 18; b += 1) {
          var k = !m && (y >> b & 1) == 1;
          f[Math.floor(b / 3)][b % 3 + l - 8 - 3] = k;
        }
        for (var b = 0; b < 18; b += 1) {
          var k = !m && (y >> b & 1) == 1;
          f[b % 3 + l - 8 - 3][Math.floor(b / 3)] = k;
        }
      }, ue = function(m, y) {
        for (var b = O << 3 | y, k = a.getBCHTypeInfo(b), N = 0; N < 15; N += 1) {
          var I = !m && (k >> N & 1) == 1;
          N < 6 ? f[N][8] = I : N < 8 ? f[N + 1][8] = I : f[l - 15 + N][8] = I;
        }
        for (var N = 0; N < 15; N += 1) {
          var I = !m && (k >> N & 1) == 1;
          N < 8 ? f[8][l - N - 1] = I : N < 9 ? f[8][15 - N - 1 + 1] = I : f[8][15 - N - 1] = I;
        }
        f[l - 8][8] = !m;
      }, he = function(m, y) {
        for (var b = -1, k = l - 1, N = 7, I = 0, H = a.getMaskFunction(y), q = l - 1; q > 0; q -= 2)
          for (q == 6 && (q -= 1); ; ) {
            for (var $ = 0; $ < 2; $ += 1)
              if (f[k][q - $] == null) {
                var oe = !1;
                I < m.length && (oe = (m[I] >>> N & 1) == 1);
                var U = H(k, q - $);
                U && (oe = !oe), f[k][q - $] = oe, N -= 1, N == -1 && (I += 1, N = 7);
              }
            if (k += b, k < 0 || l <= k) {
              k -= b, b = -b;
              break;
            }
          }
      }, me = function(m, y) {
        for (var b = 0, k = 0, N = 0, I = new Array(y.length), H = new Array(y.length), q = 0; q < y.length; q += 1) {
          var $ = y[q].dataCount, oe = y[q].totalCount - $;
          k = Math.max(k, $), N = Math.max(N, oe), I[q] = new Array($);
          for (var U = 0; U < I[q].length; U += 1)
            I[q][U] = 255 & m.getBuffer()[U + b];
          b += $;
          var ye = a.getErrorCorrectPolynomial(oe), ve = p(I[q], ye.getLength() - 1), Er = ve.mod(ye);
          H[q] = new Array(ye.getLength() - 1);
          for (var U = 0; U < H[q].length; U += 1) {
            var Or = U + Er.getLength() - H[q].length;
            H[q][U] = Or >= 0 ? Er.getAt(Or) : 0;
          }
        }
        for (var Cr = 0, U = 0; U < y.length; U += 1)
          Cr += y[U].totalCount;
        for (var hn = new Array(Cr), Dt = 0, U = 0; U < k; U += 1)
          for (var q = 0; q < y.length; q += 1)
            U < I[q].length && (hn[Dt] = I[q][U], Dt += 1);
        for (var U = 0; U < N; U += 1)
          for (var q = 0; q < y.length; q += 1)
            U < H[q].length && (hn[Dt] = H[q][U], Dt += 1);
        return hn;
      }, pn = function(m, y, b) {
        for (var k = d.getRSBlocks(m, y), N = c(), I = 0; I < b.length; I += 1) {
          var H = b[I];
          N.put(H.getMode(), 4), N.put(H.getLength(), a.getLengthInBits(H.getMode(), m)), H.write(N);
        }
        for (var q = 0, I = 0; I < k.length; I += 1)
          q += k[I].dataCount;
        if (N.getLengthInBits() > q * 8)
          throw "code length overflow. (" + N.getLengthInBits() + ">" + q * 8 + ")";
        for (N.getLengthInBits() + 4 <= q * 8 && N.put(0, 4); N.getLengthInBits() % 8 != 0; )
          N.putBit(!1);
        for (; !(N.getLengthInBits() >= q * 8 || (N.put(w, 8), N.getLengthInBits() >= q * 8)); )
          N.put(A, 8);
        return me(N, k);
      };
      g.addData = function(m, y) {
        y = y || "Byte";
        var b = null;
        switch (y) {
          case "Numeric":
            b = E(m);
            break;
          case "Alphanumeric":
            b = _(m);
            break;
          case "Byte":
            b = R(m);
            break;
          case "Kanji":
            b = x(m);
            break;
          default:
            throw "mode:" + y;
        }
        S.push(b), D = null;
      }, g.isDark = function(m, y) {
        if (m < 0 || l <= m || y < 0 || l <= y)
          throw m + "," + y;
        return f[m][y];
      }, g.getModuleCount = function() {
        return l;
      }, g.make = function() {
        if (h < 1) {
          for (var m = 1; m < 40; m++) {
            for (var y = d.getRSBlocks(m, O), b = c(), k = 0; k < S.length; k++) {
              var N = S[k];
              b.put(N.getMode(), 4), b.put(N.getLength(), a.getLengthInBits(N.getMode(), m)), N.write(b);
            }
            for (var I = 0, k = 0; k < y.length; k++)
              I += y[k].dataCount;
            if (b.getLengthInBits() <= I * 8)
              break;
          }
          h = m;
        }
        P(!1, J());
      }, g.createTableTag = function(m, y) {
        m = m || 2, y = typeof y > "u" ? m * 4 : y;
        var b = "";
        b += '<table style="', b += " border-width: 0px; border-style: none;", b += " border-collapse: collapse;", b += " padding: 0px; margin: " + y + "px;", b += '">', b += "<tbody>";
        for (var k = 0; k < g.getModuleCount(); k += 1) {
          b += "<tr>";
          for (var N = 0; N < g.getModuleCount(); N += 1)
            b += '<td style="', b += " border-width: 0px; border-style: none;", b += " border-collapse: collapse;", b += " padding: 0px; margin: 0px;", b += " width: " + m + "px;", b += " height: " + m + "px;", b += " background-color: ", b += g.isDark(k, N) ? "#000000" : "#ffffff", b += ";", b += '"/>';
          b += "</tr>";
        }
        return b += "</tbody>", b += "</table>", b;
      }, g.createSvgTag = function(m, y, b, k) {
        var N = {};
        typeof arguments[0] == "object" && (N = arguments[0], m = N.cellSize, y = N.margin, b = N.alt, k = N.title), m = m || 2, y = typeof y > "u" ? m * 4 : y, b = typeof b == "string" ? { text: b } : b || {}, b.text = b.text || null, b.id = b.text ? b.id || "qrcode-description" : null, k = typeof k == "string" ? { text: k } : k || {}, k.text = k.text || null, k.id = k.text ? k.id || "qrcode-title" : null;
        var I = g.getModuleCount() * m + y * 2, H, q, $, oe, U = "", ye;
        for (ye = "l" + m + ",0 0," + m + " -" + m + ",0 0,-" + m + "z ", U += '<svg version="1.1" xmlns="http://www.w3.org/2000/svg"', U += N.scalable ? "" : ' width="' + I + 'px" height="' + I + 'px"', U += ' viewBox="0 0 ' + I + " " + I + '" ', U += ' preserveAspectRatio="xMinYMin meet"', U += k.text || b.text ? ' role="img" aria-labelledby="' + Z([k.id, b.id].join(" ").trim()) + '"' : "", U += ">", U += k.text ? '<title id="' + Z(k.id) + '">' + Z(k.text) + "</title>" : "", U += b.text ? '<description id="' + Z(b.id) + '">' + Z(b.text) + "</description>" : "", U += '<rect width="100%" height="100%" fill="white" cx="0" cy="0"/>', U += '<path d="', $ = 0; $ < g.getModuleCount(); $ += 1)
          for (oe = $ * m + y, H = 0; H < g.getModuleCount(); H += 1)
            g.isDark($, H) && (q = H * m + y, U += "M" + q + "," + oe + ye);
        return U += '" stroke="transparent" fill="black"/>', U += "</svg>", U;
      }, g.createDataURL = function(m, y) {
        m = m || 2, y = typeof y > "u" ? m * 4 : y;
        var b = g.getModuleCount() * m + y * 2, k = y, N = b - y;
        return Q(b, b, function(I, H) {
          if (k <= I && I < N && k <= H && H < N) {
            var q = Math.floor((I - k) / m), $ = Math.floor((H - k) / m);
            return g.isDark($, q) ? 0 : 1;
          } else
            return 1;
        });
      }, g.createImgTag = function(m, y, b) {
        m = m || 2, y = typeof y > "u" ? m * 4 : y;
        var k = g.getModuleCount() * m + y * 2, N = "";
        return N += "<img", N += ' src="', N += g.createDataURL(m, y), N += '"', N += ' width="', N += k, N += '"', N += ' height="', N += k, N += '"', b && (N += ' alt="', N += Z(b), N += '"'), N += "/>", N;
      };
      var Z = function(m) {
        for (var y = "", b = 0; b < m.length; b += 1) {
          var k = m.charAt(b);
          switch (k) {
            case "<":
              y += "&lt;";
              break;
            case ">":
              y += "&gt;";
              break;
            case "&":
              y += "&amp;";
              break;
            case '"':
              y += "&quot;";
              break;
            default:
              y += k;
              break;
          }
        }
        return y;
      }, G = function(m) {
        var y = 1;
        m = typeof m > "u" ? y * 2 : m;
        var b = g.getModuleCount() * y + m * 2, k = m, N = b - m, I, H, q, $, oe, U = {
          "██": "█",
          "█ ": "▀",
          " █": "▄",
          "  ": " "
        }, ye = {
          "██": "▀",
          "█ ": "▀",
          " █": " ",
          "  ": " "
        }, ve = "";
        for (I = 0; I < b; I += 2) {
          for (q = Math.floor((I - k) / y), $ = Math.floor((I + 1 - k) / y), H = 0; H < b; H += 1)
            oe = "█", k <= H && H < N && k <= I && I < N && g.isDark(q, Math.floor((H - k) / y)) && (oe = " "), k <= H && H < N && k <= I + 1 && I + 1 < N && g.isDark($, Math.floor((H - k) / y)) ? oe += " " : oe += "█", ve += m < 1 && I + 1 >= N ? ye[oe] : U[oe];
          ve += `
`;
        }
        return b % 2 && m > 0 ? ve.substring(0, ve.length - b - 1) + Array(b + 1).join("▀") : ve.substring(0, ve.length - 1);
      };
      return g.createASCII = function(m, y) {
        if (m = m || 1, m < 2)
          return G(y);
        m -= 1, y = typeof y > "u" ? m * 2 : y;
        var b = g.getModuleCount() * m + y * 2, k = y, N = b - y, I, H, q, $, oe = Array(m + 1).join("██"), U = Array(m + 1).join("  "), ye = "", ve = "";
        for (I = 0; I < b; I += 1) {
          for (q = Math.floor((I - k) / m), ve = "", H = 0; H < b; H += 1)
            $ = 1, k <= H && H < N && k <= I && I < N && g.isDark(q, Math.floor((H - k) / m)) && ($ = 0), ve += $ ? oe : U;
          for (q = 0; q < m; q += 1)
            ye += ve + `
`;
        }
        return ye.substring(0, ye.length - 1);
      }, g.renderTo2dContext = function(m, y) {
        y = y || 2;
        for (var b = g.getModuleCount(), k = 0; k < b; k++)
          for (var N = 0; N < b; N++)
            m.fillStyle = g.isDark(k, N) ? "black" : "white", m.fillRect(k * y, N * y, y, y);
      }, g;
    };
    r.stringToBytesFuncs = {
      default: function(C) {
        for (var B = [], w = 0; w < C.length; w += 1) {
          var A = C.charCodeAt(w);
          B.push(A & 255);
        }
        return B;
      }
    }, r.stringToBytes = r.stringToBytesFuncs.default, r.createStringToBytes = function(C, B) {
      var w = function() {
        for (var h = F(C), O = function() {
          var V = h.read();
          if (V == -1)
            throw "eof";
          return V;
        }, f = 0, l = {}; ; ) {
          var D = h.read();
          if (D == -1)
            break;
          var S = O(), g = O(), P = O(), T = String.fromCharCode(D << 8 | S), J = g << 8 | P;
          l[T] = J, f += 1;
        }
        if (f != B)
          throw f + " != " + B;
        return l;
      }(), A = "?".charCodeAt(0);
      return function(h) {
        for (var O = [], f = 0; f < h.length; f += 1) {
          var l = h.charCodeAt(f);
          if (l < 128)
            O.push(l);
          else {
            var D = w[h.charAt(f)];
            typeof D == "number" ? (D & 255) == D ? O.push(D) : (O.push(D >>> 8), O.push(D & 255)) : O.push(A);
          }
        }
        return O;
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
      var C = [
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
      ], B = 1335, w = 7973, A = 21522, h = {}, O = function(f) {
        for (var l = 0; f != 0; )
          l += 1, f >>>= 1;
        return l;
      };
      return h.getBCHTypeInfo = function(f) {
        for (var l = f << 10; O(l) - O(B) >= 0; )
          l ^= B << O(l) - O(B);
        return (f << 10 | l) ^ A;
      }, h.getBCHTypeNumber = function(f) {
        for (var l = f << 12; O(l) - O(w) >= 0; )
          l ^= w << O(l) - O(w);
        return f << 12 | l;
      }, h.getPatternPosition = function(f) {
        return C[f - 1];
      }, h.getMaskFunction = function(f) {
        switch (f) {
          case s.PATTERN000:
            return function(l, D) {
              return (l + D) % 2 == 0;
            };
          case s.PATTERN001:
            return function(l, D) {
              return l % 2 == 0;
            };
          case s.PATTERN010:
            return function(l, D) {
              return D % 3 == 0;
            };
          case s.PATTERN011:
            return function(l, D) {
              return (l + D) % 3 == 0;
            };
          case s.PATTERN100:
            return function(l, D) {
              return (Math.floor(l / 2) + Math.floor(D / 3)) % 2 == 0;
            };
          case s.PATTERN101:
            return function(l, D) {
              return l * D % 2 + l * D % 3 == 0;
            };
          case s.PATTERN110:
            return function(l, D) {
              return (l * D % 2 + l * D % 3) % 2 == 0;
            };
          case s.PATTERN111:
            return function(l, D) {
              return (l * D % 3 + (l + D) % 2) % 2 == 0;
            };
          default:
            throw "bad maskPattern:" + f;
        }
      }, h.getErrorCorrectPolynomial = function(f) {
        for (var l = p([1], 0), D = 0; D < f; D += 1)
          l = l.multiply(p([1, u.gexp(D)], 0));
        return l;
      }, h.getLengthInBits = function(f, l) {
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
      }, h.getLostPoint = function(f) {
        for (var l = f.getModuleCount(), D = 0, S = 0; S < l; S += 1)
          for (var g = 0; g < l; g += 1) {
            for (var P = 0, T = f.isDark(S, g), J = -1; J <= 1; J += 1)
              if (!(S + J < 0 || l <= S + J))
                for (var V = -1; V <= 1; V += 1)
                  g + V < 0 || l <= g + V || J == 0 && V == 0 || T == f.isDark(S + J, g + V) && (P += 1);
            P > 5 && (D += 3 + P - 5);
          }
        for (var S = 0; S < l - 1; S += 1)
          for (var g = 0; g < l - 1; g += 1) {
            var ee = 0;
            f.isDark(S, g) && (ee += 1), f.isDark(S + 1, g) && (ee += 1), f.isDark(S, g + 1) && (ee += 1), f.isDark(S + 1, g + 1) && (ee += 1), (ee == 0 || ee == 4) && (D += 3);
          }
        for (var S = 0; S < l; S += 1)
          for (var g = 0; g < l - 6; g += 1)
            f.isDark(S, g) && !f.isDark(S, g + 1) && f.isDark(S, g + 2) && f.isDark(S, g + 3) && f.isDark(S, g + 4) && !f.isDark(S, g + 5) && f.isDark(S, g + 6) && (D += 40);
        for (var g = 0; g < l; g += 1)
          for (var S = 0; S < l - 6; S += 1)
            f.isDark(S, g) && !f.isDark(S + 1, g) && f.isDark(S + 2, g) && f.isDark(S + 3, g) && f.isDark(S + 4, g) && !f.isDark(S + 5, g) && f.isDark(S + 6, g) && (D += 40);
        for (var ie = 0, g = 0; g < l; g += 1)
          for (var S = 0; S < l; S += 1)
            f.isDark(S, g) && (ie += 1);
        var ue = Math.abs(100 * ie / l / l - 50) / 5;
        return D += ue * 10, D;
      }, h;
    }(), u = function() {
      for (var C = new Array(256), B = new Array(256), w = 0; w < 8; w += 1)
        C[w] = 1 << w;
      for (var w = 8; w < 256; w += 1)
        C[w] = C[w - 4] ^ C[w - 5] ^ C[w - 6] ^ C[w - 8];
      for (var w = 0; w < 255; w += 1)
        B[C[w]] = w;
      var A = {};
      return A.glog = function(h) {
        if (h < 1)
          throw "glog(" + h + ")";
        return B[h];
      }, A.gexp = function(h) {
        for (; h < 0; )
          h += 255;
        for (; h >= 256; )
          h -= 255;
        return C[h];
      }, A;
    }();
    function p(C, B) {
      if (typeof C.length > "u")
        throw C.length + "/" + B;
      var w = function() {
        for (var h = 0; h < C.length && C[h] == 0; )
          h += 1;
        for (var O = new Array(C.length - h + B), f = 0; f < C.length - h; f += 1)
          O[f] = C[f + h];
        return O;
      }(), A = {};
      return A.getAt = function(h) {
        return w[h];
      }, A.getLength = function() {
        return w.length;
      }, A.multiply = function(h) {
        for (var O = new Array(A.getLength() + h.getLength() - 1), f = 0; f < A.getLength(); f += 1)
          for (var l = 0; l < h.getLength(); l += 1)
            O[f + l] ^= u.gexp(u.glog(A.getAt(f)) + u.glog(h.getAt(l)));
        return p(O, 0);
      }, A.mod = function(h) {
        if (A.getLength() - h.getLength() < 0)
          return A;
        for (var O = u.glog(A.getAt(0)) - u.glog(h.getAt(0)), f = new Array(A.getLength()), l = 0; l < A.getLength(); l += 1)
          f[l] = A.getAt(l);
        for (var l = 0; l < h.getLength(); l += 1)
          f[l] ^= u.gexp(u.glog(h.getAt(l)) + O);
        return p(f, 0).mod(h);
      }, A;
    }
    var d = function() {
      var C = [
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
      ], B = function(h, O) {
        var f = {};
        return f.totalCount = h, f.dataCount = O, f;
      }, w = {}, A = function(h, O) {
        switch (O) {
          case i.L:
            return C[(h - 1) * 4 + 0];
          case i.M:
            return C[(h - 1) * 4 + 1];
          case i.Q:
            return C[(h - 1) * 4 + 2];
          case i.H:
            return C[(h - 1) * 4 + 3];
          default:
            return;
        }
      };
      return w.getRSBlocks = function(h, O) {
        var f = A(h, O);
        if (typeof f > "u")
          throw "bad rs block @ typeNumber:" + h + "/errorCorrectionLevel:" + O;
        for (var l = f.length / 3, D = [], S = 0; S < l; S += 1)
          for (var g = f[S * 3 + 0], P = f[S * 3 + 1], T = f[S * 3 + 2], J = 0; J < g; J += 1)
            D.push(B(P, T));
        return D;
      }, w;
    }(), c = function() {
      var C = [], B = 0, w = {};
      return w.getBuffer = function() {
        return C;
      }, w.getAt = function(A) {
        var h = Math.floor(A / 8);
        return (C[h] >>> 7 - A % 8 & 1) == 1;
      }, w.put = function(A, h) {
        for (var O = 0; O < h; O += 1)
          w.putBit((A >>> h - O - 1 & 1) == 1);
      }, w.getLengthInBits = function() {
        return B;
      }, w.putBit = function(A) {
        var h = Math.floor(B / 8);
        C.length <= h && C.push(0), A && (C[h] |= 128 >>> B % 8), B += 1;
      }, w;
    }, E = function(C) {
      var B = o.MODE_NUMBER, w = C, A = {};
      A.getMode = function() {
        return B;
      }, A.getLength = function(f) {
        return w.length;
      }, A.write = function(f) {
        for (var l = w, D = 0; D + 2 < l.length; )
          f.put(h(l.substring(D, D + 3)), 10), D += 3;
        D < l.length && (l.length - D == 1 ? f.put(h(l.substring(D, D + 1)), 4) : l.length - D == 2 && f.put(h(l.substring(D, D + 2)), 7));
      };
      var h = function(f) {
        for (var l = 0, D = 0; D < f.length; D += 1)
          l = l * 10 + O(f.charAt(D));
        return l;
      }, O = function(f) {
        if ("0" <= f && f <= "9")
          return f.charCodeAt(0) - "0".charCodeAt(0);
        throw "illegal char :" + f;
      };
      return A;
    }, _ = function(C) {
      var B = o.MODE_ALPHA_NUM, w = C, A = {};
      A.getMode = function() {
        return B;
      }, A.getLength = function(O) {
        return w.length;
      }, A.write = function(O) {
        for (var f = w, l = 0; l + 1 < f.length; )
          O.put(
            h(f.charAt(l)) * 45 + h(f.charAt(l + 1)),
            11
          ), l += 2;
        l < f.length && O.put(h(f.charAt(l)), 6);
      };
      var h = function(O) {
        if ("0" <= O && O <= "9")
          return O.charCodeAt(0) - "0".charCodeAt(0);
        if ("A" <= O && O <= "Z")
          return O.charCodeAt(0) - "A".charCodeAt(0) + 10;
        switch (O) {
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
            throw "illegal char :" + O;
        }
      };
      return A;
    }, R = function(C) {
      var B = o.MODE_8BIT_BYTE, w = r.stringToBytes(C), A = {};
      return A.getMode = function() {
        return B;
      }, A.getLength = function(h) {
        return w.length;
      }, A.write = function(h) {
        for (var O = 0; O < w.length; O += 1)
          h.put(w[O], 8);
      }, A;
    }, x = function(C) {
      var B = o.MODE_KANJI, w = r.stringToBytesFuncs.SJIS;
      if (!w)
        throw "sjis not supported.";
      (function(O, f) {
        var l = w(O);
        if (l.length != 2 || (l[0] << 8 | l[1]) != f)
          throw "sjis not supported.";
      })("友", 38726);
      var A = w(C), h = {};
      return h.getMode = function() {
        return B;
      }, h.getLength = function(O) {
        return ~~(A.length / 2);
      }, h.write = function(O) {
        for (var f = A, l = 0; l + 1 < f.length; ) {
          var D = (255 & f[l]) << 8 | 255 & f[l + 1];
          if (33088 <= D && D <= 40956)
            D -= 33088;
          else if (57408 <= D && D <= 60351)
            D -= 49472;
          else
            throw "illegal char at " + (l + 1) + "/" + D;
          D = (D >>> 8 & 255) * 192 + (D & 255), O.put(D, 13), l += 2;
        }
        if (l < f.length)
          throw "illegal char at " + (l + 1);
      }, h;
    }, L = function() {
      var C = [], B = {};
      return B.writeByte = function(w) {
        C.push(w & 255);
      }, B.writeShort = function(w) {
        B.writeByte(w), B.writeByte(w >>> 8);
      }, B.writeBytes = function(w, A, h) {
        A = A || 0, h = h || w.length;
        for (var O = 0; O < h; O += 1)
          B.writeByte(w[O + A]);
      }, B.writeString = function(w) {
        for (var A = 0; A < w.length; A += 1)
          B.writeByte(w.charCodeAt(A));
      }, B.toByteArray = function() {
        return C;
      }, B.toString = function() {
        var w = "";
        w += "[";
        for (var A = 0; A < C.length; A += 1)
          A > 0 && (w += ","), w += C[A];
        return w += "]", w;
      }, B;
    }, j = function() {
      var C = 0, B = 0, w = 0, A = "", h = {}, O = function(l) {
        A += String.fromCharCode(f(l & 63));
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
      return h.writeByte = function(l) {
        for (C = C << 8 | l & 255, B += 8, w += 1; B >= 6; )
          O(C >>> B - 6), B -= 6;
      }, h.flush = function() {
        if (B > 0 && (O(C << 6 - B), C = 0, B = 0), w % 3 != 0)
          for (var l = 3 - w % 3, D = 0; D < l; D += 1)
            A += "=";
      }, h.toString = function() {
        return A;
      }, h;
    }, F = function(C) {
      var B = C, w = 0, A = 0, h = 0, O = {};
      O.read = function() {
        for (; h < 8; ) {
          if (w >= B.length) {
            if (h == 0)
              return -1;
            throw "unexpected end of file./" + h;
          }
          var l = B.charAt(w);
          if (w += 1, l == "=")
            return h = 0, -1;
          l.match(/^\s$/) || (A = A << 6 | f(l.charCodeAt(0)), h += 6);
        }
        var D = A >>> h - 8 & 255;
        return h -= 8, D;
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
      return O;
    }, M = function(C, B) {
      var w = C, A = B, h = new Array(C * B), O = {};
      O.setPixel = function(S, g, P) {
        h[g * w + S] = P;
      }, O.write = function(S) {
        S.writeString("GIF87a"), S.writeShort(w), S.writeShort(A), S.writeByte(128), S.writeByte(0), S.writeByte(0), S.writeByte(0), S.writeByte(0), S.writeByte(0), S.writeByte(255), S.writeByte(255), S.writeByte(255), S.writeString(","), S.writeShort(0), S.writeShort(0), S.writeShort(w), S.writeShort(A), S.writeByte(0);
        var g = 2, P = l(g);
        S.writeByte(g);
        for (var T = 0; P.length - T > 255; )
          S.writeByte(255), S.writeBytes(P, T, 255), T += 255;
        S.writeByte(P.length - T), S.writeBytes(P, T, P.length - T), S.writeByte(0), S.writeString(";");
      };
      var f = function(S) {
        var g = S, P = 0, T = 0, J = {};
        return J.write = function(V, ee) {
          if (V >>> ee)
            throw "length over";
          for (; P + ee >= 8; )
            g.writeByte(255 & (V << P | T)), ee -= 8 - P, V >>>= 8 - P, T = 0, P = 0;
          T = V << P | T, P = P + ee;
        }, J.flush = function() {
          P > 0 && g.writeByte(T);
        }, J;
      }, l = function(S) {
        for (var g = 1 << S, P = (1 << S) + 1, T = S + 1, J = D(), V = 0; V < g; V += 1)
          J.add(String.fromCharCode(V));
        J.add(String.fromCharCode(g)), J.add(String.fromCharCode(P));
        var ee = L(), ie = f(ee);
        ie.write(g, T);
        var ue = 0, he = String.fromCharCode(h[ue]);
        for (ue += 1; ue < h.length; ) {
          var me = String.fromCharCode(h[ue]);
          ue += 1, J.contains(he + me) ? he = he + me : (ie.write(J.indexOf(he), T), J.size() < 4095 && (J.size() == 1 << T && (T += 1), J.add(he + me)), he = me);
        }
        return ie.write(J.indexOf(he), T), ie.write(P, T), ie.flush(), ee.toByteArray();
      }, D = function() {
        var S = {}, g = 0, P = {};
        return P.add = function(T) {
          if (P.contains(T))
            throw "dup key:" + T;
          S[T] = g, g += 1;
        }, P.size = function() {
          return g;
        }, P.indexOf = function(T) {
          return S[T];
        }, P.contains = function(T) {
          return typeof S[T] < "u";
        }, P;
      };
      return O;
    }, Q = function(C, B, w) {
      for (var A = M(C, B), h = 0; h < B; h += 1)
        for (var O = 0; O < C; O += 1)
          A.setPixel(O, h, w(O, h));
      var f = L();
      A.write(f);
      for (var l = j(), D = f.toByteArray(), S = 0; S < D.length; S += 1)
        l.writeByte(D[S]);
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
})(ti);
var zl = ti.exports;
const Vl = /* @__PURE__ */ Kl(zl);
class Ar {
  constructor(t) {
    fe(this, "_options"), fe(this, "_container"), fe(this, "_canvas"), fe(this, "_qr"), fe(this, "_drawingPromise"), this._options = t ? Co($t(Oo, t)) : Oo, this.update();
  }
  static _clearContainer(t) {
    t && (t.innerHTML = "");
  }
  update(t) {
    Ar._clearContainer(this._container), this._options = t ? Co($t(this._options, t)) : this._options, this._options.data && (this._qr = Vl(this._options.qrOptions.typeNumber, this._options.qrOptions.errorCorrectionLevel), this._qr.addData(this._options.data, this._options.qrOptions.mode || Ll(this._options.data)), this._qr.make(), this._canvas = new Hl(this._options), this._drawingPromise = this._canvas.drawQR(this._qr), this.append(this._container));
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
      Il(i, `${o}.${r}`);
    });
  }
}
const Wl = ["src"], Xl = { key: 1 }, Yl = /* @__PURE__ */ Js({
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
    const r = e, o = new Ar({
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
    let i = ([t, n] = ll(() => o.getImageUrl(r.fileExt)), t = await t, n(), t);
    function s() {
      o.download(r.downloadOptions);
    }
    return (a, u) => (lt(), Cn("div", null, [
      Qt(i) ? (lt(), Cn("div", {
        key: 0,
        class: at(a.myclass)
      }, [
        Zt("img", {
          src: Qt(i),
          class: at(a.imgclass),
          crossorigin: "anonymous"
        }, null, 10, Wl)
      ], 2)) : vo("", !0),
      Qt(i) && a.download ? (lt(), Cn("div", Xl, [
        Zt("button", {
          onClick: s,
          class: at(a.downloadButton)
        }, Jc(a.ButtonName), 3)
      ])) : vo("", !0)
    ]));
  }
}), So = /* @__PURE__ */ Js({
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
    return (n, r) => (lt(), Vs(qu, null, {
      default: Lu(() => [
        Fe(Yl, {
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
}), ni = /* @__PURE__ */ Ro({
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
    dark: Boolean,
    mounted: {
      type: Boolean,
      default: !1
    }
  },
  setup(e) {
    ai((s) => ({
      "1430caf5": t.width,
      "581999d8": t.height,
      "1c9a3b00": r.value,
      e8d55816: o.value
    }));
    const t = e, n = se(t.dark ?? !1), r = se(t.mobileWidth ?? t.width), o = se(t.mobileHeight ?? t.height), i = se(null);
    return ko(() => {
      No(() => {
        if (!(t.disabled || !t.mounted) && i.value !== null) {
          let s = 1.5, a = setInterval(function() {
            s -= 0.1, i.value !== null && (i.value.style.animationDuration = s + "s", s <= 0.8 && clearInterval(a));
          }, 1e4);
        }
      });
    }), (s, a) => (ge(), xe("div", {
      ref_key: "loader",
      ref: i,
      class: ci([n.value && "skeleton-loader_dark", !n.value && "skeleton-loader"])
    }, null, 2));
  }
});
const Zl = "data:image/png;base64,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", Do = "data:image/png;base64,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", Gl = { style: { "text-align": "center" } }, $l = {
  key: 0,
  style: { "text-align": "center", width: "300px", height: "300px" },
  class: "flex items-center justify-center"
}, ed = { class: "p-4 bg-gray-100 dark:bg-gray-800 rounded-lg" }, td = /* @__PURE__ */ Te("i", { class: "fas fa-power-off text-6xl text-gray-400 dark:text-gray-600 mb-4" }, null, -1), nd = { class: "text-gray-600 dark:text-gray-400" }, rd = ["title"], od = {
  key: 2,
  style: { "text-align": "center" }
}, sd = ["src"], id = /* @__PURE__ */ Te("br", null, null, -1), ad = /* @__PURE__ */ Te("br", null, null, -1), cd = { key: 0 }, ud = {
  key: 3,
  style: { "text-align": "center", width: "300px", height: "300px" }
}, ld = /* @__PURE__ */ Te("i", {
  class: "fas fa-unlink",
  style: { "font-size": "155px", color: "red", padding: "10px", "padding-top": "60px", "vertical-align": "middle" },
  "aria-hidden": "true"
}, null, -1), dd = [
  ld
], fd = ["innerHTML"], pd = /* @__PURE__ */ Ro({
  __name: "Login",
  props: {
    instanceId: {
      type: String,
      default: ""
    },
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
    },
    store: {
      type: Object,
      default: void 0
    }
  },
  emits: ["error", "redirect", "status", "user"],
  setup(e, { expose: t, emit: n }) {
    const { t: r } = xo(), o = n, i = (g, P) => {
      console.log("Raw event received:", g, P), g === "error" ? (o("error", P), s.errorLog && console.log("Error event received with payload:", P)) : g === "redirect" ? (o("redirect", P), s.errorLog && console.log("Redirect event received with payload:", P)) : g === "status" ? (o("status", P), s.errorLog && console.log("Status event received with payload:", P)) : g === "user" && (o("user", P), s.errorLog && console.log("User event received with payload:", P));
    }, s = e, a = s.store || Zr(i, s.instanceId), { auth: u, loginQRCode: p, checkQRLogin: d, success: c, IsDark: E, QRCode: _, Message: R, IDLogin: x, setBase: L, reset: j, readMessage: F, setUrls: M, setRoutes: Q, is_error: C, setMounted: B, mounted: w } = a, A = Sr(() => s.instanceId);
    Ie(A, (g) => {
      console.log("Instance:", g, "Auth:", u.value);
    }), Ie(u, (g) => {
      console.log("Instance:", A.value, "Auth changed:", g), o("status", g);
    });
    const h = se(!1);
    ae("locale", "en");
    const O = Sr(() => (E.value = s.isDark, c.value === !0 && (R.value = F()), s.isDark));
    t({
      reset: a.reset,
      setMounted: a.setMounted
    });
    const f = se(0);
    function l() {
      if (w.value) {
        if (u.value === -1) {
          if (f.value++, f.value > 3) {
            j(), f.value = 0;
            return;
          }
          setTimeout(l, 500);
          return;
        }
        c.value = !1, u.value < 2 || x.value === We.create().toString() ? p() : d();
      }
    }
    function D() {
      window.location.reload();
    }
    vi(() => {
      s.store || (E.value = s.isDark, L(s.configDev, s.configProduction, s.region, s.errorLog, s.interval, s.accessTimeout), Q(s.configApp, s.configLogin, s.enableCheck), M(s.configRequest, s.configVerify, s.configConfirm, s.configLogout), B(!0), setTimeout(l, 500)), No(() => {
        c.value === !0 ? h.value = !0 : h.value = !1;
      });
    }), Ie(
      [
        () => s.configRequest,
        () => s.configVerify,
        () => s.configConfirm,
        () => s.configLogout
      ],
      ([g, P, T, J]) => {
        M(g, P, T, J);
      }
    ), Ie(
      [
        () => s.configDev,
        () => s.configProduction,
        () => s.region,
        () => s.errorLog,
        () => s.interval,
        () => s.accessTimeout
      ],
      ([g, P, T, J, V, ee]) => {
        L(g, P, T, J, V, ee);
      }
    ), Ie(
      [
        () => s.configApp,
        () => s.configLogin,
        () => s.enableCheck
      ],
      ([g, P, T]) => {
        Q(g, P, T);
      }
    ), Ie(
      () => s.instanceId,
      (g) => {
        const P = Zr(i, g);
        u.value = P.auth.value, c.value = P.success.value, E.value = P.IsDark.value, _.value = P.QRCode.value, R.value = P.Message.value, x.value = P.IDLogin.value, C.value = P.is_error.value, L(s.configDev, s.configProduction, s.region, s.errorLog, s.interval, s.accessTimeout), Q(s.configApp, s.configLogin, s.enableCheck), M(s.configRequest, s.configVerify, s.configConfirm, s.configLogout);
      }
    );
    function S() {
      _.value == null || _.value == null || _.value == "" || window.open(_.value, "new_window");
    }
    return (g, P) => (ge(), xe("div", null, [
      Te("div", null, [
        Te("div", Gl, [
          te(w) ? te(c) && !s.isMobileScreen ? (ge(), xe("div", {
            key: 1,
            title: te(r)("auth.codelight"),
            onClick: [
              S,
              gn(S, ["prevent"])
            ],
            target: "_blank",
            style: { "text-align": "center", cursor: "pointer" }
          }, [
            O.value ? (ge(), wn(te(So), {
              key: te(_),
              width: 300,
              height: 300,
              value: te(_),
              image: e.logoDark.length == 0 ? te(Zl) : "",
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
                color: s.primaryDark,
                gradient: {
                  type: "linear",
                  rotation: 0,
                  colorStops: [
                    { offset: 0, color: s.primaryDark },
                    { offset: 1, color: s.primaryDark }
                  ]
                }
              },
              "background-options": { color: s.secondaryDark },
              "corners-square-options": { type: "dot", color: s.positionDark },
              "corners-dot-options": { type: void 0, color: s.positionDark },
              download: !1
            }, null, 8, ["value", "image", "dots-options", "background-options", "corners-square-options", "corners-dot-options"])) : Ke("", !0),
            O.value ? Ke("", !0) : (ge(), wn(te(So), {
              key: te(_),
              width: 300,
              height: 300,
              value: te(_),
              image: e.logoDark.length == 0 ? te(Do) : "",
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
                color: s.primaryLight,
                gradient: {
                  type: "linear",
                  rotation: 0,
                  colorStops: [
                    { offset: 0, color: s.primaryLight },
                    { offset: 1, color: s.primaryLight }
                  ]
                }
              },
              "background-options": { color: s.secondaryLight },
              "corners-square-options": { type: "dot", color: s.positionLight },
              "corners-dot-options": { type: void 0, color: s.positionLight },
              download: !1
            }, null, 8, ["value", "image", "dots-options", "background-options", "corners-square-options", "corners-dot-options"]))
          ], 8, rd)) : te(c) && s.isMobileScreen ? (ge(), xe("div", od, [
            h.value ? (ge(), xe("button", {
              key: 0,
              style: ui([{ width: "300px", height: "300px" }, [O.value ? { backgroundColor: s.primaryDark, color: s.accentColor } : { backgroundColor: s.primaryLight, color: s.accentColor }]]),
              onClick: [
                S,
                gn(S, ["prevent"])
              ]
            }, [
              Te("img", {
                width: "150",
                src: e.logoDark.length == 0 ? te(Do) : ""
              }, null, 8, sd),
              id,
              ad,
              e.hideText ? Ke("", !0) : (ge(), xe("span", cd, Dr(te(r)("auth.login")), 1))
            ], 4)) : Ke("", !0)
          ])) : (ge(), xe("div", ud, [
            te(C) ? (ge(), xe("div", {
              key: 0,
              onClick: [
                D,
                gn(D, ["prevent"])
              ],
              style: { width: "300px", height: "300px", "align-items": "middle", cursor: "pointer" }
            }, dd)) : Ke("", !0),
            te(C) ? Ke("", !0) : (ge(), wn(ni, {
              key: 1,
              width: "300px",
              disabled: !1,
              dark: O.value,
              mounted: te(w),
              height: "300px"
            }, null, 8, ["dark", "mounted"]))
          ])) : (ge(), xe("div", $l, [
            Te("div", ed, [
              td,
              Te("p", nd, Dr(te(r)("auth.notmounted")), 1)
            ])
          ])),
          (te(c) && !s.isMobileScreen || !te(c)) && !e.hideText ? (ge(), xe("div", {
            key: 4,
            innerHTML: te(R),
            style: { "text-align": "center" }
          }, null, 8, fd)) : Ke("", !0)
        ])
      ])
    ]));
  }
}), gd = {
  install: (e) => {
    e.component("Login", pd), e.component("Prelogin", ni);
  }
};
export {
  pd as Login,
  ni as Prelogin,
  gd as default,
  Zr as useNoPWD
};
