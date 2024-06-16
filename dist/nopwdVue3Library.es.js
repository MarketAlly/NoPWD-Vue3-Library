import { ref as oe, getCurrentInstance as Ui, onMounted as po, nextTick as ho, unref as re, getCurrentScope as Ki, onScopeDispose as zi, watch as go, shallowRef as Vi, defineComponent as wo, useCssVars as Wi, watchEffect as mo, openBlock as we, createElementBlock as _e, normalizeClass as Xi, computed as Yi, createElementVNode as rt, withModifiers as un, createBlock as ln, createCommentVNode as je, normalizeStyle as Gi, toDisplayString as Zi } from "vue";
const $i = {
  "auth.codedark": "Code not reading? Flip to light-mode.",
  "auth.codelight": "App installed locally? Click QRCode",
  "auth.codeerror": "Error requesting code, <br/>please refresh page.",
  "auth.loading": "Loading access code, please wait...",
  "auth.prepare": "Preparing interface...",
  "auth.login": "Click to Login"
}, es = {
  en: $i
};
function yo(e = {}) {
  const t = oe({ ...es, ...e }), n = oe("en");
  return { t: (o) => {
    const i = t.value[n.value][o];
    return i === void 0 ? (console.warn(`Translation not found for key: ${o}`), o) : i;
  } };
}
var wr;
const vo = typeof window < "u", ts = (e) => typeof e == "function", ns = (e) => typeof e == "string", rs = () => {
};
vo && ((wr = window == null ? void 0 : window.navigator) != null && wr.userAgent) && /iP(ad|hone|od)/.test(window.navigator.userAgent);
function Ao(e) {
  return typeof e == "function" ? e() : re(e);
}
function os(e, t) {
  function n(...r) {
    return new Promise((o, i) => {
      Promise.resolve(e(() => t.apply(this, r), { fn: t, thisArg: this, args: r })).then(o).catch(i);
    });
  }
  return n;
}
const bo = (e) => e();
function is(e = bo) {
  const t = oe(!0);
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
function ss(e) {
  return e;
}
function as(e) {
  return Ki() ? (zi(e), !0) : !1;
}
function cs(e, t = !0) {
  Ui() ? po(e) : t ? e() : ho(e);
}
var mr = Object.getOwnPropertySymbols, us = Object.prototype.hasOwnProperty, ls = Object.prototype.propertyIsEnumerable, ds = (e, t) => {
  var n = {};
  for (var r in e)
    us.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && mr)
    for (var r of mr(e))
      t.indexOf(r) < 0 && ls.call(e, r) && (n[r] = e[r]);
  return n;
};
function fs(e, t, n = {}) {
  const r = n, {
    eventFilter: o = bo
  } = r, i = ds(r, [
    "eventFilter"
  ]);
  return go(e, os(o, t), i);
}
var ps = Object.defineProperty, hs = Object.defineProperties, gs = Object.getOwnPropertyDescriptors, jt = Object.getOwnPropertySymbols, Oo = Object.prototype.hasOwnProperty, Eo = Object.prototype.propertyIsEnumerable, yr = (e, t, n) => t in e ? ps(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, ws = (e, t) => {
  for (var n in t || (t = {}))
    Oo.call(t, n) && yr(e, n, t[n]);
  if (jt)
    for (var n of jt(t))
      Eo.call(t, n) && yr(e, n, t[n]);
  return e;
}, ms = (e, t) => hs(e, gs(t)), ys = (e, t) => {
  var n = {};
  for (var r in e)
    Oo.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && jt)
    for (var r of jt(e))
      t.indexOf(r) < 0 && Eo.call(e, r) && (n[r] = e[r]);
  return n;
};
function vs(e, t, n = {}) {
  const r = n, {
    eventFilter: o
  } = r, i = ys(r, [
    "eventFilter"
  ]), { eventFilter: s, pause: a, resume: u, isActive: f } = is(o);
  return { stop: fs(e, t, ms(ws({}, i), {
    eventFilter: s
  })), pause: a, resume: u, isActive: f };
}
function As(e) {
  var t;
  const n = Ao(e);
  return (t = n == null ? void 0 : n.$el) != null ? t : n;
}
const Cn = vo ? window : void 0;
function bs(...e) {
  let t, n, r, o;
  if (ns(e[0]) || Array.isArray(e[0]) ? ([n, r, o] = e, t = Cn) : [t, n, r, o] = e, !t)
    return rs;
  Array.isArray(n) || (n = [n]), Array.isArray(r) || (r = [r]);
  const i = [], s = () => {
    i.forEach((h) => h()), i.length = 0;
  }, a = (h, c, y) => (h.addEventListener(c, y, o), () => h.removeEventListener(c, y, o)), u = go(() => As(t), (h) => {
    s(), h && i.push(...n.flatMap((c) => r.map((y) => a(h, c, y))));
  }, { immediate: !0, flush: "post" }), f = () => {
    u(), s();
  };
  return as(f), f;
}
const Sn = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, Dn = "__vueuse_ssr_handlers__";
Sn[Dn] = Sn[Dn] || {};
const Os = Sn[Dn];
function Es(e, t) {
  return Os[e] || t;
}
function Cs(e) {
  return e == null ? "any" : e instanceof Set ? "set" : e instanceof Map ? "map" : e instanceof Date ? "date" : typeof e == "boolean" ? "boolean" : typeof e == "string" ? "string" : typeof e == "object" ? "object" : Number.isNaN(e) ? "any" : "number";
}
var Ss = Object.defineProperty, vr = Object.getOwnPropertySymbols, Ds = Object.prototype.hasOwnProperty, ks = Object.prototype.propertyIsEnumerable, Ar = (e, t, n) => t in e ? Ss(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, br = (e, t) => {
  for (var n in t || (t = {}))
    Ds.call(t, n) && Ar(e, n, t[n]);
  if (vr)
    for (var n of vr(t))
      ks.call(t, n) && Ar(e, n, t[n]);
  return e;
};
const _s = {
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
function ie(e, t, n, r = {}) {
  var o;
  const {
    flush: i = "pre",
    deep: s = !0,
    listenToStorageChanges: a = !0,
    writeDefaults: u = !0,
    mergeDefaults: f = !1,
    shallow: h,
    window: c = Cn,
    eventFilter: y,
    onError: M = (g) => {
      console.error(g);
    }
  } = r, N = (h ? Vi : oe)(t);
  if (!n)
    try {
      n = Es("getDefaultStorage", () => {
        var g;
        return (g = Cn) == null ? void 0 : g.localStorage;
      })();
    } catch (g) {
      M(g);
    }
  if (!n)
    return N;
  const R = Ao(t), F = Cs(R), q = (o = r.serializer) != null ? o : _s[F], { pause: L, resume: J } = vs(N, () => j(N.value), { flush: i, deep: s, eventFilter: y });
  return c && a && bs(c, "storage", B), B(), N;
  function j(g) {
    try {
      if (g == null)
        n.removeItem(e);
      else {
        const w = q.write(g), p = n.getItem(e);
        p !== w && (n.setItem(e, w), c && (c == null || c.dispatchEvent(new StorageEvent("storage", {
          key: e,
          oldValue: p,
          newValue: w,
          storageArea: n
        }))));
      }
    } catch (w) {
      M(w);
    }
  }
  function C(g) {
    const w = g ? g.newValue : n.getItem(e);
    if (w == null)
      return u && R !== null && n.setItem(e, q.write(R)), R;
    if (!g && f) {
      const p = q.read(w);
      return ts(f) ? f(p, R) : F === "object" && !Array.isArray(p) ? br(br({}, R), p) : p;
    } else
      return typeof w != "string" ? w : q.read(w);
  }
  function B(g) {
    if (!(g && g.storageArea !== n)) {
      if (g && g.key == null) {
        N.value = R;
        return;
      }
      if (!(g && g.key !== e)) {
        L();
        try {
          N.value = C(g);
        } catch (w) {
          M(w);
        } finally {
          g ? ho(J) : J();
        }
      }
    }
  }
}
var Or;
(function(e) {
  e.UP = "UP", e.RIGHT = "RIGHT", e.DOWN = "DOWN", e.LEFT = "LEFT", e.NONE = "NONE";
})(Or || (Or = {}));
var Ns = Object.defineProperty, Er = Object.getOwnPropertySymbols, Rs = Object.prototype.hasOwnProperty, Bs = Object.prototype.propertyIsEnumerable, Cr = (e, t, n) => t in e ? Ns(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, xs = (e, t) => {
  for (var n in t || (t = {}))
    Rs.call(t, n) && Cr(e, n, t[n]);
  if (Er)
    for (var n of Er(t))
      Bs.call(t, n) && Cr(e, n, t[n]);
  return e;
};
const Ms = {
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
xs({
  linear: ss
}, Ms);
var Ps = (
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
), $e = Ps;
function Co(e, t) {
  return function() {
    return e.apply(t, arguments);
  };
}
const { toString: Ts } = Object.prototype, { getPrototypeOf: Hn } = Object, Yt = ((e) => (t) => {
  const n = Ts.call(t);
  return e[n] || (e[n] = n.slice(8, -1).toLowerCase());
})(/* @__PURE__ */ Object.create(null)), ke = (e) => (e = e.toLowerCase(), (t) => Yt(t) === e), Gt = (e) => (t) => typeof t === e, { isArray: dt } = Array, wt = Gt("undefined");
function Ls(e) {
  return e !== null && !wt(e) && e.constructor !== null && !wt(e.constructor) && ve(e.constructor.isBuffer) && e.constructor.isBuffer(e);
}
const So = ke("ArrayBuffer");
function Is(e) {
  let t;
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? t = ArrayBuffer.isView(e) : t = e && e.buffer && So(e.buffer), t;
}
const Js = Gt("string"), ve = Gt("function"), Do = Gt("number"), Zt = (e) => e !== null && typeof e == "object", Qs = (e) => e === !0 || e === !1, Pt = (e) => {
  if (Yt(e) !== "object")
    return !1;
  const t = Hn(e);
  return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(Symbol.toStringTag in e) && !(Symbol.iterator in e);
}, js = ke("Date"), qs = ke("File"), Hs = ke("Blob"), Fs = ke("FileList"), Us = (e) => Zt(e) && ve(e.pipe), Ks = (e) => {
  let t;
  return e && (typeof FormData == "function" && e instanceof FormData || ve(e.append) && ((t = Yt(e)) === "formdata" || // detect form-data instance
  t === "object" && ve(e.toString) && e.toString() === "[object FormData]"));
}, zs = ke("URLSearchParams"), Vs = (e) => e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function Ot(e, t, { allOwnKeys: n = !1 } = {}) {
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
function ko(e, t) {
  t = t.toLowerCase();
  const n = Object.keys(e);
  let r = n.length, o;
  for (; r-- > 0; )
    if (o = n[r], t === o.toLowerCase())
      return o;
  return null;
}
const _o = (() => typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : global)(), No = (e) => !wt(e) && e !== _o;
function kn() {
  const { caseless: e } = No(this) && this || {}, t = {}, n = (r, o) => {
    const i = e && ko(t, o) || o;
    Pt(t[i]) && Pt(r) ? t[i] = kn(t[i], r) : Pt(r) ? t[i] = kn({}, r) : dt(r) ? t[i] = r.slice() : t[i] = r;
  };
  for (let r = 0, o = arguments.length; r < o; r++)
    arguments[r] && Ot(arguments[r], n);
  return t;
}
const Ws = (e, t, n, { allOwnKeys: r } = {}) => (Ot(t, (o, i) => {
  n && ve(o) ? e[i] = Co(o, n) : e[i] = o;
}, { allOwnKeys: r }), e), Xs = (e) => (e.charCodeAt(0) === 65279 && (e = e.slice(1)), e), Ys = (e, t, n, r) => {
  e.prototype = Object.create(t.prototype, r), e.prototype.constructor = e, Object.defineProperty(e, "super", {
    value: t.prototype
  }), n && Object.assign(e.prototype, n);
}, Gs = (e, t, n, r) => {
  let o, i, s;
  const a = {};
  if (t = t || {}, e == null)
    return t;
  do {
    for (o = Object.getOwnPropertyNames(e), i = o.length; i-- > 0; )
      s = o[i], (!r || r(s, e, t)) && !a[s] && (t[s] = e[s], a[s] = !0);
    e = n !== !1 && Hn(e);
  } while (e && (!n || n(e, t)) && e !== Object.prototype);
  return t;
}, Zs = (e, t, n) => {
  e = String(e), (n === void 0 || n > e.length) && (n = e.length), n -= t.length;
  const r = e.indexOf(t, n);
  return r !== -1 && r === n;
}, $s = (e) => {
  if (!e)
    return null;
  if (dt(e))
    return e;
  let t = e.length;
  if (!Do(t))
    return null;
  const n = new Array(t);
  for (; t-- > 0; )
    n[t] = e[t];
  return n;
}, ea = ((e) => (t) => e && t instanceof e)(typeof Uint8Array < "u" && Hn(Uint8Array)), ta = (e, t) => {
  const r = (e && e[Symbol.iterator]).call(e);
  let o;
  for (; (o = r.next()) && !o.done; ) {
    const i = o.value;
    t.call(e, i[0], i[1]);
  }
}, na = (e, t) => {
  let n;
  const r = [];
  for (; (n = e.exec(t)) !== null; )
    r.push(n);
  return r;
}, ra = ke("HTMLFormElement"), oa = (e) => e.toLowerCase().replace(
  /[-_\s]([a-z\d])(\w*)/g,
  function(n, r, o) {
    return r.toUpperCase() + o;
  }
), Sr = (({ hasOwnProperty: e }) => (t, n) => e.call(t, n))(Object.prototype), ia = ke("RegExp"), Ro = (e, t) => {
  const n = Object.getOwnPropertyDescriptors(e), r = {};
  Ot(n, (o, i) => {
    let s;
    (s = t(o, i, e)) !== !1 && (r[i] = s || o);
  }), Object.defineProperties(e, r);
}, sa = (e) => {
  Ro(e, (t, n) => {
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
}, aa = (e, t) => {
  const n = {}, r = (o) => {
    o.forEach((i) => {
      n[i] = !0;
    });
  };
  return dt(e) ? r(e) : r(String(e).split(t)), n;
}, ca = () => {
}, ua = (e, t) => (e = +e, Number.isFinite(e) ? e : t), dn = "abcdefghijklmnopqrstuvwxyz", Dr = "0123456789", Bo = {
  DIGIT: Dr,
  ALPHA: dn,
  ALPHA_DIGIT: dn + dn.toUpperCase() + Dr
}, la = (e = 16, t = Bo.ALPHA_DIGIT) => {
  let n = "";
  const { length: r } = t;
  for (; e--; )
    n += t[Math.random() * r | 0];
  return n;
};
function da(e) {
  return !!(e && ve(e.append) && e[Symbol.toStringTag] === "FormData" && e[Symbol.iterator]);
}
const fa = (e) => {
  const t = new Array(10), n = (r, o) => {
    if (Zt(r)) {
      if (t.indexOf(r) >= 0)
        return;
      if (!("toJSON" in r)) {
        t[o] = r;
        const i = dt(r) ? [] : {};
        return Ot(r, (s, a) => {
          const u = n(s, o + 1);
          !wt(u) && (i[a] = u);
        }), t[o] = void 0, i;
      }
    }
    return r;
  };
  return n(e, 0);
}, pa = ke("AsyncFunction"), ha = (e) => e && (Zt(e) || ve(e)) && ve(e.then) && ve(e.catch), A = {
  isArray: dt,
  isArrayBuffer: So,
  isBuffer: Ls,
  isFormData: Ks,
  isArrayBufferView: Is,
  isString: Js,
  isNumber: Do,
  isBoolean: Qs,
  isObject: Zt,
  isPlainObject: Pt,
  isUndefined: wt,
  isDate: js,
  isFile: qs,
  isBlob: Hs,
  isRegExp: ia,
  isFunction: ve,
  isStream: Us,
  isURLSearchParams: zs,
  isTypedArray: ea,
  isFileList: Fs,
  forEach: Ot,
  merge: kn,
  extend: Ws,
  trim: Vs,
  stripBOM: Xs,
  inherits: Ys,
  toFlatObject: Gs,
  kindOf: Yt,
  kindOfTest: ke,
  endsWith: Zs,
  toArray: $s,
  forEachEntry: ta,
  matchAll: na,
  isHTMLForm: ra,
  hasOwnProperty: Sr,
  hasOwnProp: Sr,
  // an alias to avoid ESLint no-prototype-builtins detection
  reduceDescriptors: Ro,
  freezeMethods: sa,
  toObjectSet: aa,
  toCamelCase: oa,
  noop: ca,
  toFiniteNumber: ua,
  findKey: ko,
  global: _o,
  isContextDefined: No,
  ALPHABET: Bo,
  generateString: la,
  isSpecCompliantForm: da,
  toJSONObject: fa,
  isAsyncFn: pa,
  isThenable: ha
};
function W(e, t, n, r, o) {
  Error.call(this), Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : this.stack = new Error().stack, this.message = e, this.name = "AxiosError", t && (this.code = t), n && (this.config = n), r && (this.request = r), o && (this.response = o);
}
A.inherits(W, Error, {
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
      config: A.toJSONObject(this.config),
      code: this.code,
      status: this.response && this.response.status ? this.response.status : null
    };
  }
});
const xo = W.prototype, Mo = {};
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
  Mo[e] = { value: e };
});
Object.defineProperties(W, Mo);
Object.defineProperty(xo, "isAxiosError", { value: !0 });
W.from = (e, t, n, r, o, i) => {
  const s = Object.create(xo);
  return A.toFlatObject(e, s, function(u) {
    return u !== Error.prototype;
  }, (a) => a !== "isAxiosError"), W.call(s, e.message, t, n, r, o), s.cause = e, s.name = e.name, i && Object.assign(s, i), s;
};
const ga = null;
function _n(e) {
  return A.isPlainObject(e) || A.isArray(e);
}
function Po(e) {
  return A.endsWith(e, "[]") ? e.slice(0, -2) : e;
}
function kr(e, t, n) {
  return e ? e.concat(t).map(function(o, i) {
    return o = Po(o), !n && i ? "[" + o + "]" : o;
  }).join(n ? "." : "") : t;
}
function wa(e) {
  return A.isArray(e) && !e.some(_n);
}
const ma = A.toFlatObject(A, {}, null, function(t) {
  return /^is[A-Z]/.test(t);
});
function $t(e, t, n) {
  if (!A.isObject(e))
    throw new TypeError("target must be an object");
  t = t || new FormData(), n = A.toFlatObject(n, {
    metaTokens: !0,
    dots: !1,
    indexes: !1
  }, !1, function(R, F) {
    return !A.isUndefined(F[R]);
  });
  const r = n.metaTokens, o = n.visitor || h, i = n.dots, s = n.indexes, u = (n.Blob || typeof Blob < "u" && Blob) && A.isSpecCompliantForm(t);
  if (!A.isFunction(o))
    throw new TypeError("visitor must be a function");
  function f(N) {
    if (N === null)
      return "";
    if (A.isDate(N))
      return N.toISOString();
    if (!u && A.isBlob(N))
      throw new W("Blob is not supported. Use a Buffer instead.");
    return A.isArrayBuffer(N) || A.isTypedArray(N) ? u && typeof Blob == "function" ? new Blob([N]) : Buffer.from(N) : N;
  }
  function h(N, R, F) {
    let q = N;
    if (N && !F && typeof N == "object") {
      if (A.endsWith(R, "{}"))
        R = r ? R : R.slice(0, -2), N = JSON.stringify(N);
      else if (A.isArray(N) && wa(N) || (A.isFileList(N) || A.endsWith(R, "[]")) && (q = A.toArray(N)))
        return R = Po(R), q.forEach(function(J, j) {
          !(A.isUndefined(J) || J === null) && t.append(
            // eslint-disable-next-line no-nested-ternary
            s === !0 ? kr([R], j, i) : s === null ? R : R + "[]",
            f(J)
          );
        }), !1;
    }
    return _n(N) ? !0 : (t.append(kr(F, R, i), f(N)), !1);
  }
  const c = [], y = Object.assign(ma, {
    defaultVisitor: h,
    convertValue: f,
    isVisitable: _n
  });
  function M(N, R) {
    if (!A.isUndefined(N)) {
      if (c.indexOf(N) !== -1)
        throw Error("Circular reference detected in " + R.join("."));
      c.push(N), A.forEach(N, function(q, L) {
        (!(A.isUndefined(q) || q === null) && o.call(
          t,
          q,
          A.isString(L) ? L.trim() : L,
          R,
          y
        )) === !0 && M(q, R ? R.concat(L) : [L]);
      }), c.pop();
    }
  }
  if (!A.isObject(e))
    throw new TypeError("data must be an object");
  return M(e), t;
}
function _r(e) {
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
function Fn(e, t) {
  this._pairs = [], e && $t(e, this, t);
}
const To = Fn.prototype;
To.append = function(t, n) {
  this._pairs.push([t, n]);
};
To.toString = function(t) {
  const n = t ? function(r) {
    return t.call(this, r, _r);
  } : _r;
  return this._pairs.map(function(o) {
    return n(o[0]) + "=" + n(o[1]);
  }, "").join("&");
};
function ya(e) {
  return encodeURIComponent(e).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
}
function Lo(e, t, n) {
  if (!t)
    return e;
  const r = n && n.encode || ya, o = n && n.serialize;
  let i;
  if (o ? i = o(t, n) : i = A.isURLSearchParams(t) ? t.toString() : new Fn(t, n).toString(r), i) {
    const s = e.indexOf("#");
    s !== -1 && (e = e.slice(0, s)), e += (e.indexOf("?") === -1 ? "?" : "&") + i;
  }
  return e;
}
class va {
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
    A.forEach(this.handlers, function(r) {
      r !== null && t(r);
    });
  }
}
const Nr = va, Io = {
  silentJSONParsing: !0,
  forcedJSONParsing: !0,
  clarifyTimeoutError: !1
}, Aa = typeof URLSearchParams < "u" ? URLSearchParams : Fn, ba = typeof FormData < "u" ? FormData : null, Oa = typeof Blob < "u" ? Blob : null, Ea = {
  isBrowser: !0,
  classes: {
    URLSearchParams: Aa,
    FormData: ba,
    Blob: Oa
  },
  protocols: ["http", "https", "file", "blob", "url", "data"]
}, Jo = typeof window < "u" && typeof document < "u", Ca = ((e) => Jo && ["ReactNative", "NativeScript", "NS"].indexOf(e) < 0)(typeof navigator < "u" && navigator.product), Sa = (() => typeof WorkerGlobalScope < "u" && // eslint-disable-next-line no-undef
self instanceof WorkerGlobalScope && typeof self.importScripts == "function")(), Da = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  hasBrowserEnv: Jo,
  hasStandardBrowserEnv: Ca,
  hasStandardBrowserWebWorkerEnv: Sa
}, Symbol.toStringTag, { value: "Module" })), De = {
  ...Da,
  ...Ea
};
function ka(e, t) {
  return $t(e, new De.classes.URLSearchParams(), Object.assign({
    visitor: function(n, r, o, i) {
      return De.isNode && A.isBuffer(n) ? (this.append(r, n.toString("base64")), !1) : i.defaultVisitor.apply(this, arguments);
    }
  }, t));
}
function _a(e) {
  return A.matchAll(/\w+|\[(\w*)]/g, e).map((t) => t[0] === "[]" ? "" : t[1] || t[0]);
}
function Na(e) {
  const t = {}, n = Object.keys(e);
  let r;
  const o = n.length;
  let i;
  for (r = 0; r < o; r++)
    i = n[r], t[i] = e[i];
  return t;
}
function Qo(e) {
  function t(n, r, o, i) {
    let s = n[i++];
    const a = Number.isFinite(+s), u = i >= n.length;
    return s = !s && A.isArray(o) ? o.length : s, u ? (A.hasOwnProp(o, s) ? o[s] = [o[s], r] : o[s] = r, !a) : ((!o[s] || !A.isObject(o[s])) && (o[s] = []), t(n, r, o[s], i) && A.isArray(o[s]) && (o[s] = Na(o[s])), !a);
  }
  if (A.isFormData(e) && A.isFunction(e.entries)) {
    const n = {};
    return A.forEachEntry(e, (r, o) => {
      t(_a(r), o, n, 0);
    }), n;
  }
  return null;
}
function Ra(e, t, n) {
  if (A.isString(e))
    try {
      return (t || JSON.parse)(e), A.trim(e);
    } catch (r) {
      if (r.name !== "SyntaxError")
        throw r;
    }
  return (n || JSON.stringify)(e);
}
const Un = {
  transitional: Io,
  adapter: ["xhr", "http"],
  transformRequest: [function(t, n) {
    const r = n.getContentType() || "", o = r.indexOf("application/json") > -1, i = A.isObject(t);
    if (i && A.isHTMLForm(t) && (t = new FormData(t)), A.isFormData(t))
      return o && o ? JSON.stringify(Qo(t)) : t;
    if (A.isArrayBuffer(t) || A.isBuffer(t) || A.isStream(t) || A.isFile(t) || A.isBlob(t))
      return t;
    if (A.isArrayBufferView(t))
      return t.buffer;
    if (A.isURLSearchParams(t))
      return n.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1), t.toString();
    let a;
    if (i) {
      if (r.indexOf("application/x-www-form-urlencoded") > -1)
        return ka(t, this.formSerializer).toString();
      if ((a = A.isFileList(t)) || r.indexOf("multipart/form-data") > -1) {
        const u = this.env && this.env.FormData;
        return $t(
          a ? { "files[]": t } : t,
          u && new u(),
          this.formSerializer
        );
      }
    }
    return i || o ? (n.setContentType("application/json", !1), Ra(t)) : t;
  }],
  transformResponse: [function(t) {
    const n = this.transitional || Un.transitional, r = n && n.forcedJSONParsing, o = this.responseType === "json";
    if (t && A.isString(t) && (r && !this.responseType || o)) {
      const s = !(n && n.silentJSONParsing) && o;
      try {
        return JSON.parse(t);
      } catch (a) {
        if (s)
          throw a.name === "SyntaxError" ? W.from(a, W.ERR_BAD_RESPONSE, this, null, this.response) : a;
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
    FormData: De.classes.FormData,
    Blob: De.classes.Blob
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
A.forEach(["delete", "get", "head", "post", "put", "patch"], (e) => {
  Un.headers[e] = {};
});
const Kn = Un, Ba = A.toObjectSet([
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
]), xa = (e) => {
  const t = {};
  let n, r, o;
  return e && e.split(`
`).forEach(function(s) {
    o = s.indexOf(":"), n = s.substring(0, o).trim().toLowerCase(), r = s.substring(o + 1).trim(), !(!n || t[n] && Ba[n]) && (n === "set-cookie" ? t[n] ? t[n].push(r) : t[n] = [r] : t[n] = t[n] ? t[n] + ", " + r : r);
  }), t;
}, Rr = Symbol("internals");
function ft(e) {
  return e && String(e).trim().toLowerCase();
}
function Tt(e) {
  return e === !1 || e == null ? e : A.isArray(e) ? e.map(Tt) : String(e);
}
function Ma(e) {
  const t = /* @__PURE__ */ Object.create(null), n = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let r;
  for (; r = n.exec(e); )
    t[r[1]] = r[2];
  return t;
}
const Pa = (e) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());
function fn(e, t, n, r, o) {
  if (A.isFunction(r))
    return r.call(this, t, n);
  if (o && (t = n), !!A.isString(t)) {
    if (A.isString(r))
      return t.indexOf(r) !== -1;
    if (A.isRegExp(r))
      return r.test(t);
  }
}
function Ta(e) {
  return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (t, n, r) => n.toUpperCase() + r);
}
function La(e, t) {
  const n = A.toCamelCase(" " + t);
  ["get", "set", "has"].forEach((r) => {
    Object.defineProperty(e, r + n, {
      value: function(o, i, s) {
        return this[r].call(this, t, o, i, s);
      },
      configurable: !0
    });
  });
}
class en {
  constructor(t) {
    t && this.set(t);
  }
  set(t, n, r) {
    const o = this;
    function i(a, u, f) {
      const h = ft(u);
      if (!h)
        throw new Error("header name must be a non-empty string");
      const c = A.findKey(o, h);
      (!c || o[c] === void 0 || f === !0 || f === void 0 && o[c] !== !1) && (o[c || u] = Tt(a));
    }
    const s = (a, u) => A.forEach(a, (f, h) => i(f, h, u));
    return A.isPlainObject(t) || t instanceof this.constructor ? s(t, n) : A.isString(t) && (t = t.trim()) && !Pa(t) ? s(xa(t), n) : t != null && i(n, t, r), this;
  }
  get(t, n) {
    if (t = ft(t), t) {
      const r = A.findKey(this, t);
      if (r) {
        const o = this[r];
        if (!n)
          return o;
        if (n === !0)
          return Ma(o);
        if (A.isFunction(n))
          return n.call(this, o, r);
        if (A.isRegExp(n))
          return n.exec(o);
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(t, n) {
    if (t = ft(t), t) {
      const r = A.findKey(this, t);
      return !!(r && this[r] !== void 0 && (!n || fn(this, this[r], r, n)));
    }
    return !1;
  }
  delete(t, n) {
    const r = this;
    let o = !1;
    function i(s) {
      if (s = ft(s), s) {
        const a = A.findKey(r, s);
        a && (!n || fn(r, r[a], a, n)) && (delete r[a], o = !0);
      }
    }
    return A.isArray(t) ? t.forEach(i) : i(t), o;
  }
  clear(t) {
    const n = Object.keys(this);
    let r = n.length, o = !1;
    for (; r--; ) {
      const i = n[r];
      (!t || fn(this, this[i], i, t, !0)) && (delete this[i], o = !0);
    }
    return o;
  }
  normalize(t) {
    const n = this, r = {};
    return A.forEach(this, (o, i) => {
      const s = A.findKey(r, i);
      if (s) {
        n[s] = Tt(o), delete n[i];
        return;
      }
      const a = t ? Ta(i) : String(i).trim();
      a !== i && delete n[i], n[a] = Tt(o), r[a] = !0;
    }), this;
  }
  concat(...t) {
    return this.constructor.concat(this, ...t);
  }
  toJSON(t) {
    const n = /* @__PURE__ */ Object.create(null);
    return A.forEach(this, (r, o) => {
      r != null && r !== !1 && (n[o] = t && A.isArray(r) ? r.join(", ") : r);
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
    const r = (this[Rr] = this[Rr] = {
      accessors: {}
    }).accessors, o = this.prototype;
    function i(s) {
      const a = ft(s);
      r[a] || (La(o, s), r[a] = !0);
    }
    return A.isArray(t) ? t.forEach(i) : i(t), this;
  }
}
en.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization"]);
A.reduceDescriptors(en.prototype, ({ value: e }, t) => {
  let n = t[0].toUpperCase() + t.slice(1);
  return {
    get: () => e,
    set(r) {
      this[n] = r;
    }
  };
});
A.freezeMethods(en);
const Ne = en;
function pn(e, t) {
  const n = this || Kn, r = t || n, o = Ne.from(r.headers);
  let i = r.data;
  return A.forEach(e, function(a) {
    i = a.call(n, i, o.normalize(), t ? t.status : void 0);
  }), o.normalize(), i;
}
function jo(e) {
  return !!(e && e.__CANCEL__);
}
function Et(e, t, n) {
  W.call(this, e ?? "canceled", W.ERR_CANCELED, t, n), this.name = "CanceledError";
}
A.inherits(Et, W, {
  __CANCEL__: !0
});
function Ia(e, t, n) {
  const r = n.config.validateStatus;
  !n.status || !r || r(n.status) ? e(n) : t(new W(
    "Request failed with status code " + n.status,
    [W.ERR_BAD_REQUEST, W.ERR_BAD_RESPONSE][Math.floor(n.status / 100) - 4],
    n.config,
    n.request,
    n
  ));
}
const Ja = De.hasStandardBrowserEnv ? (
  // Standard browser envs support document.cookie
  {
    write(e, t, n, r, o, i) {
      const s = [e + "=" + encodeURIComponent(t)];
      A.isNumber(n) && s.push("expires=" + new Date(n).toGMTString()), A.isString(r) && s.push("path=" + r), A.isString(o) && s.push("domain=" + o), i === !0 && s.push("secure"), document.cookie = s.join("; ");
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
function Qa(e) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e);
}
function ja(e, t) {
  return t ? e.replace(/\/+$/, "") + "/" + t.replace(/^\/+/, "") : e;
}
function qo(e, t) {
  return e && !Qa(t) ? ja(e, t) : t;
}
const qa = De.hasStandardBrowserEnv ? (
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
      const a = A.isString(s) ? o(s) : s;
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
function Ha(e) {
  const t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
  return t && t[1] || "";
}
function Fa(e, t) {
  e = e || 10;
  const n = new Array(e), r = new Array(e);
  let o = 0, i = 0, s;
  return t = t !== void 0 ? t : 1e3, function(u) {
    const f = Date.now(), h = r[i];
    s || (s = f), n[o] = u, r[o] = f;
    let c = i, y = 0;
    for (; c !== o; )
      y += n[c++], c = c % e;
    if (o = (o + 1) % e, o === i && (i = (i + 1) % e), f - s < t)
      return;
    const M = h && f - h;
    return M ? Math.round(y * 1e3 / M) : void 0;
  };
}
function Br(e, t) {
  let n = 0;
  const r = Fa(50, 250);
  return (o) => {
    const i = o.loaded, s = o.lengthComputable ? o.total : void 0, a = i - n, u = r(a), f = i <= s;
    n = i;
    const h = {
      loaded: i,
      total: s,
      progress: s ? i / s : void 0,
      bytes: a,
      rate: u || void 0,
      estimated: u && s && f ? (s - i) / u : void 0,
      event: o
    };
    h[t ? "download" : "upload"] = !0, e(h);
  };
}
const Ua = typeof XMLHttpRequest < "u", Ka = Ua && function(e) {
  return new Promise(function(n, r) {
    let o = e.data;
    const i = Ne.from(e.headers).normalize();
    let { responseType: s, withXSRFToken: a } = e, u;
    function f() {
      e.cancelToken && e.cancelToken.unsubscribe(u), e.signal && e.signal.removeEventListener("abort", u);
    }
    let h;
    if (A.isFormData(o)) {
      if (De.hasStandardBrowserEnv || De.hasStandardBrowserWebWorkerEnv)
        i.setContentType(!1);
      else if ((h = i.getContentType()) !== !1) {
        const [R, ...F] = h ? h.split(";").map((q) => q.trim()).filter(Boolean) : [];
        i.setContentType([R || "multipart/form-data", ...F].join("; "));
      }
    }
    let c = new XMLHttpRequest();
    if (e.auth) {
      const R = e.auth.username || "", F = e.auth.password ? unescape(encodeURIComponent(e.auth.password)) : "";
      i.set("Authorization", "Basic " + btoa(R + ":" + F));
    }
    const y = qo(e.baseURL, e.url);
    c.open(e.method.toUpperCase(), Lo(y, e.params, e.paramsSerializer), !0), c.timeout = e.timeout;
    function M() {
      if (!c)
        return;
      const R = Ne.from(
        "getAllResponseHeaders" in c && c.getAllResponseHeaders()
      ), q = {
        data: !s || s === "text" || s === "json" ? c.responseText : c.response,
        status: c.status,
        statusText: c.statusText,
        headers: R,
        config: e,
        request: c
      };
      Ia(function(J) {
        n(J), f();
      }, function(J) {
        r(J), f();
      }, q), c = null;
    }
    if ("onloadend" in c ? c.onloadend = M : c.onreadystatechange = function() {
      !c || c.readyState !== 4 || c.status === 0 && !(c.responseURL && c.responseURL.indexOf("file:") === 0) || setTimeout(M);
    }, c.onabort = function() {
      c && (r(new W("Request aborted", W.ECONNABORTED, e, c)), c = null);
    }, c.onerror = function() {
      r(new W("Network Error", W.ERR_NETWORK, e, c)), c = null;
    }, c.ontimeout = function() {
      let F = e.timeout ? "timeout of " + e.timeout + "ms exceeded" : "timeout exceeded";
      const q = e.transitional || Io;
      e.timeoutErrorMessage && (F = e.timeoutErrorMessage), r(new W(
        F,
        q.clarifyTimeoutError ? W.ETIMEDOUT : W.ECONNABORTED,
        e,
        c
      )), c = null;
    }, De.hasStandardBrowserEnv && (a && A.isFunction(a) && (a = a(e)), a || a !== !1 && qa(y))) {
      const R = e.xsrfHeaderName && e.xsrfCookieName && Ja.read(e.xsrfCookieName);
      R && i.set(e.xsrfHeaderName, R);
    }
    o === void 0 && i.setContentType(null), "setRequestHeader" in c && A.forEach(i.toJSON(), function(F, q) {
      c.setRequestHeader(q, F);
    }), A.isUndefined(e.withCredentials) || (c.withCredentials = !!e.withCredentials), s && s !== "json" && (c.responseType = e.responseType), typeof e.onDownloadProgress == "function" && c.addEventListener("progress", Br(e.onDownloadProgress, !0)), typeof e.onUploadProgress == "function" && c.upload && c.upload.addEventListener("progress", Br(e.onUploadProgress)), (e.cancelToken || e.signal) && (u = (R) => {
      c && (r(!R || R.type ? new Et(null, e, c) : R), c.abort(), c = null);
    }, e.cancelToken && e.cancelToken.subscribe(u), e.signal && (e.signal.aborted ? u() : e.signal.addEventListener("abort", u)));
    const N = Ha(y);
    if (N && De.protocols.indexOf(N) === -1) {
      r(new W("Unsupported protocol " + N + ":", W.ERR_BAD_REQUEST, e));
      return;
    }
    c.send(o || null);
  });
}, Nn = {
  http: ga,
  xhr: Ka
};
A.forEach(Nn, (e, t) => {
  if (e) {
    try {
      Object.defineProperty(e, "name", { value: t });
    } catch {
    }
    Object.defineProperty(e, "adapterName", { value: t });
  }
});
const xr = (e) => `- ${e}`, za = (e) => A.isFunction(e) || e === null || e === !1, Ho = {
  getAdapter: (e) => {
    e = A.isArray(e) ? e : [e];
    const { length: t } = e;
    let n, r;
    const o = {};
    for (let i = 0; i < t; i++) {
      n = e[i];
      let s;
      if (r = n, !za(n) && (r = Nn[(s = String(n)).toLowerCase()], r === void 0))
        throw new W(`Unknown adapter '${s}'`);
      if (r)
        break;
      o[s || "#" + i] = r;
    }
    if (!r) {
      const i = Object.entries(o).map(
        ([a, u]) => `adapter ${a} ` + (u === !1 ? "is not supported by the environment" : "is not available in the build")
      );
      let s = t ? i.length > 1 ? `since :
` + i.map(xr).join(`
`) : " " + xr(i[0]) : "as no adapter specified";
      throw new W(
        "There is no suitable adapter to dispatch the request " + s,
        "ERR_NOT_SUPPORT"
      );
    }
    return r;
  },
  adapters: Nn
};
function hn(e) {
  if (e.cancelToken && e.cancelToken.throwIfRequested(), e.signal && e.signal.aborted)
    throw new Et(null, e);
}
function Mr(e) {
  return hn(e), e.headers = Ne.from(e.headers), e.data = pn.call(
    e,
    e.transformRequest
  ), ["post", "put", "patch"].indexOf(e.method) !== -1 && e.headers.setContentType("application/x-www-form-urlencoded", !1), Ho.getAdapter(e.adapter || Kn.adapter)(e).then(function(r) {
    return hn(e), r.data = pn.call(
      e,
      e.transformResponse,
      r
    ), r.headers = Ne.from(r.headers), r;
  }, function(r) {
    return jo(r) || (hn(e), r && r.response && (r.response.data = pn.call(
      e,
      e.transformResponse,
      r.response
    ), r.response.headers = Ne.from(r.response.headers))), Promise.reject(r);
  });
}
const Pr = (e) => e instanceof Ne ? e.toJSON() : e;
function ct(e, t) {
  t = t || {};
  const n = {};
  function r(f, h, c) {
    return A.isPlainObject(f) && A.isPlainObject(h) ? A.merge.call({ caseless: c }, f, h) : A.isPlainObject(h) ? A.merge({}, h) : A.isArray(h) ? h.slice() : h;
  }
  function o(f, h, c) {
    if (A.isUndefined(h)) {
      if (!A.isUndefined(f))
        return r(void 0, f, c);
    } else
      return r(f, h, c);
  }
  function i(f, h) {
    if (!A.isUndefined(h))
      return r(void 0, h);
  }
  function s(f, h) {
    if (A.isUndefined(h)) {
      if (!A.isUndefined(f))
        return r(void 0, f);
    } else
      return r(void 0, h);
  }
  function a(f, h, c) {
    if (c in t)
      return r(f, h);
    if (c in e)
      return r(void 0, f);
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
    headers: (f, h) => o(Pr(f), Pr(h), !0)
  };
  return A.forEach(Object.keys(Object.assign({}, e, t)), function(h) {
    const c = u[h] || o, y = c(e[h], t[h], h);
    A.isUndefined(y) && c !== a || (n[h] = y);
  }), n;
}
const Fo = "1.6.2", zn = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach((e, t) => {
  zn[e] = function(r) {
    return typeof r === e || "a" + (t < 1 ? "n " : " ") + e;
  };
});
const Tr = {};
zn.transitional = function(t, n, r) {
  function o(i, s) {
    return "[Axios v" + Fo + "] Transitional option '" + i + "'" + s + (r ? ". " + r : "");
  }
  return (i, s, a) => {
    if (t === !1)
      throw new W(
        o(s, " has been removed" + (n ? " in " + n : "")),
        W.ERR_DEPRECATED
      );
    return n && !Tr[s] && (Tr[s] = !0, console.warn(
      o(
        s,
        " has been deprecated since v" + n + " and will be removed in the near future"
      )
    )), t ? t(i, s, a) : !0;
  };
};
function Va(e, t, n) {
  if (typeof e != "object")
    throw new W("options must be an object", W.ERR_BAD_OPTION_VALUE);
  const r = Object.keys(e);
  let o = r.length;
  for (; o-- > 0; ) {
    const i = r[o], s = t[i];
    if (s) {
      const a = e[i], u = a === void 0 || s(a, i, e);
      if (u !== !0)
        throw new W("option " + i + " must be " + u, W.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (n !== !0)
      throw new W("Unknown option " + i, W.ERR_BAD_OPTION);
  }
}
const Rn = {
  assertOptions: Va,
  validators: zn
}, Be = Rn.validators;
class qt {
  constructor(t) {
    this.defaults = t, this.interceptors = {
      request: new Nr(),
      response: new Nr()
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
      silentJSONParsing: Be.transitional(Be.boolean),
      forcedJSONParsing: Be.transitional(Be.boolean),
      clarifyTimeoutError: Be.transitional(Be.boolean)
    }, !1), o != null && (A.isFunction(o) ? n.paramsSerializer = {
      serialize: o
    } : Rn.assertOptions(o, {
      encode: Be.function,
      serialize: Be.function
    }, !0)), n.method = (n.method || this.defaults.method || "get").toLowerCase();
    let s = i && A.merge(
      i.common,
      i[n.method]
    );
    i && A.forEach(
      ["delete", "get", "head", "post", "put", "patch", "common"],
      (N) => {
        delete i[N];
      }
    ), n.headers = Ne.concat(s, i);
    const a = [];
    let u = !0;
    this.interceptors.request.forEach(function(R) {
      typeof R.runWhen == "function" && R.runWhen(n) === !1 || (u = u && R.synchronous, a.unshift(R.fulfilled, R.rejected));
    });
    const f = [];
    this.interceptors.response.forEach(function(R) {
      f.push(R.fulfilled, R.rejected);
    });
    let h, c = 0, y;
    if (!u) {
      const N = [Mr.bind(this), void 0];
      for (N.unshift.apply(N, a), N.push.apply(N, f), y = N.length, h = Promise.resolve(n); c < y; )
        h = h.then(N[c++], N[c++]);
      return h;
    }
    y = a.length;
    let M = n;
    for (c = 0; c < y; ) {
      const N = a[c++], R = a[c++];
      try {
        M = N(M);
      } catch (F) {
        R.call(this, F);
        break;
      }
    }
    try {
      h = Mr.call(this, M);
    } catch (N) {
      return Promise.reject(N);
    }
    for (c = 0, y = f.length; c < y; )
      h = h.then(f[c++], f[c++]);
    return h;
  }
  getUri(t) {
    t = ct(this.defaults, t);
    const n = qo(t.baseURL, t.url);
    return Lo(n, t.params, t.paramsSerializer);
  }
}
A.forEach(["delete", "get", "head", "options"], function(t) {
  qt.prototype[t] = function(n, r) {
    return this.request(ct(r || {}, {
      method: t,
      url: n,
      data: (r || {}).data
    }));
  };
});
A.forEach(["post", "put", "patch"], function(t) {
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
  qt.prototype[t] = n(), qt.prototype[t + "Form"] = n(!0);
});
const Lt = qt;
class Vn {
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
      r.reason || (r.reason = new Et(i, s, a), n(r.reason));
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
      token: new Vn(function(o) {
        t = o;
      }),
      cancel: t
    };
  }
}
const Wa = Vn;
function Xa(e) {
  return function(n) {
    return e.apply(null, n);
  };
}
function Ya(e) {
  return A.isObject(e) && e.isAxiosError === !0;
}
const Bn = {
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
Object.entries(Bn).forEach(([e, t]) => {
  Bn[t] = e;
});
const Ga = Bn;
function Uo(e) {
  const t = new Lt(e), n = Co(Lt.prototype.request, t);
  return A.extend(n, Lt.prototype, t, { allOwnKeys: !0 }), A.extend(n, t, null, { allOwnKeys: !0 }), n.create = function(o) {
    return Uo(ct(e, o));
  }, n;
}
const te = Uo(Kn);
te.Axios = Lt;
te.CanceledError = Et;
te.CancelToken = Wa;
te.isCancel = jo;
te.VERSION = Fo;
te.toFormData = $t;
te.AxiosError = W;
te.Cancel = te.CanceledError;
te.all = function(t) {
  return Promise.all(t);
};
te.spread = Xa;
te.isAxiosError = Ya;
te.mergeConfig = ct;
te.AxiosHeaders = Ne;
te.formToJSON = (e) => Qo(A.isHTMLForm(e) ? new FormData(e) : e);
te.getAdapter = Ho.getAdapter;
te.HttpStatusCode = Ga;
te.default = te;
const Za = te, $a = ["localhost", "127.0.0.1", "::1"].includes(window.location.hostname), ec = Za.create({
  baseURL: "https://localhost:8080/",
  withCredentials: !1
});
let Lr = "https://localhost/", Ir = "";
const ge = {
  apiClient: ec,
  setBaseURL: function(e, t) {
    $a ? this.apiClient.defaults.baseURL = e || Lr : this.apiClient.defaults.baseURL = t || Ir, Lr = e, Ir = t;
  },
  getBaseURL: function() {
    return this.apiClient.defaults.baseURL;
  }
};
function tc(e) {
  const t = ie("nopwd_request", "api/requestloginkey", sessionStorage), n = ie("nopwd_verify", "api/verifyaccess", sessionStorage), r = ie("nopwd_confirm", "api/confirmaccess", sessionStorage), o = ie("nopwd_logout", "api/logout", sessionStorage), i = ie("nopwd_dev", "https://marketally.ngrok.io/", sessionStorage), s = ie("nopwd_prod", "https://www.nopwd.com/", sessionStorage), a = ie("nopwd_app", "/app", sessionStorage), u = ie("nopwd_login", "/auth/login", sessionStorage), f = ie("nopwd_log", !1, sessionStorage), h = ie("nopwd_region", 1, sessionStorage), c = ie("nopwd_check", !1, sessionStorage), y = ie("nopwd_interval", 1e3, sessionStorage), M = ie("nopwd_access", 2e4, sessionStorage), N = oe(!1);
  oe(!1);
  const R = oe(!1), F = oe(0), q = ie("nopwd_loginid", $e.EMPTY, sessionStorage), L = ie("nopwd_auth", 0, sessionStorage), J = ie("nopwd_session", "", sessionStorage);
  function j(x, I, U, $, de, Oe) {
    x != null && x != null && x != "" && (i.value = x), I != null && I != null && I != "" && (s.value = I), h.value = U, f.value = $, y.value = de, M.value = Oe;
  }
  function C(x, I, U = !1) {
    x != null && x != null && x != "" && (a.value = x), I != null && I != null && I != "" && (u.value = I), c.value = U;
  }
  function B(x, I, U, $) {
    x != null && x != null && x != "" && (t.value = x), I != null && I != null && I != "" && (n.value = I), U != null && U != null && U != "" && (r.value = U), $ != null && $ != null && $ != "" && (o.value = $);
  }
  const { t: g } = yo();
  function w() {
    return {
      headers: {
        Accept: "application/json",
        "X-LoginId": q.value,
        "Content-Type": "application/json"
      }
    };
  }
  const p = oe(!1), v = oe(""), d = oe(g("auth.prepare")), l = oe({ id: q.value, code: null, value: null, subid: null, userid: null, count: null, page: null, fromdate: null });
  async function D() {
    if (L.value <= -1)
      return L.value;
    if (q.value = $e.EMPTY, q.value === $e.EMPTY.toString()) {
      R.value = !1, d.value = g("auth.loading"), q.value = $e.create().toString(), l.value.id = q.value, f.value && console.log("Login: " + q.value), ge.setBaseURL(i.value, s.value);
      let x = ge.getBaseURL() + t.value;
      return await ge.apiClient.get(x, w()).then((I) => {
        const U = I.data;
        return U.success ? (d.value = "", v.value = "https://www.nopwd.com?r=" + h.value + "&l=" + q.value, console.log(v.value), N.value = U.success, F.value = U.code, L.value = 1, setTimeout(O, y.value), p.value ? d.value = g("auth.codedark") : d.value = g("auth.codelight"), 1) : (R.value = !0, f.value && console.log(U.message), d.value = g("auth.codeerror"), -1);
      }).catch((I) => (R.value = !0, console.log(I), e && e("error", I.message), R.value = !0, d.value = g("auth.codeerror"), -1));
    } else
      return p.value ? d.value = g("auth.codedark") : d.value = g("auth.codelight"), O();
  }
  function S(x = !1) {
    return R.value ? d.value = g("auth.codeerror") : p.value ? d.value = g("auth.codedark") : p.value || (d.value = g("auth.codelight")), d.value;
  }
  async function O() {
    if (L.value <= -1)
      return L.value;
    ge.setBaseURL(i.value, s.value);
    let x = ge.getBaseURL() + n.value;
    return f.value && console.log("Check: " + q.value), await ge.apiClient.get(x, w()).then(async (I) => {
      const U = I.data;
      if (U.success)
        return N.value = U.success, F.value = U.code, U.code > 0 ? (J.value = JSON.stringify(U.data), e && e("user", J.value), L.value = 2, setTimeout(Q, M.value), e && e("redirect", a.value), e && e("status", L.value), 1) : U.code < 0 ? (L.value = 0, e && e("status", L.value), -1) : (setTimeout(O, y.value), p.value ? d.value = g("auth.codedark") : d.value = g("auth.codelight"), 0);
      f.value && console.log(U.message), await D();
    }).catch((I) => (R.value = !0, e && e("error", I.message), f.value && console.log(I), R.value = !0, d.value = g("auth.codeerror"), -1));
  }
  async function Q() {
    if (c.value == !1 || L.value < 2)
      return;
    ge.setBaseURL(i.value, s.value), f.value && console.log("Check: " + q.value);
    let x = ge.getBaseURL() + r.value;
    await ge.apiClient.get(x, w()).then((I) => {
      const U = I.data;
      U.success && (N.value = U.success, F.value = U.code, U.code > 0 ? setTimeout(Q, M.value) : (L.value = 0, e && e("status", U.code), J.value = "", e && e("user", J.value), e && e("redirect", u.value)));
    }).catch((I) => {
      R.value = !0, e && e("error", I.message), f.value && console.log(I), R.value = !0, d.value = g("auth.codeerror");
    });
  }
  async function P() {
    if (L.value <= 0)
      return;
    L.value = -1, ge.setBaseURL(i.value, s.value), f.value && console.log("Logout: " + q.value);
    let x = ge.getBaseURL() + o.value;
    await ge.apiClient.get(x, w()).then((I) => {
      const U = I.data;
      N.value = U.success, F.value = U.code, L.value = 0, N.value && (e && e("status", L.value), J.value = "", e && e("user", J.value), q.value = $e.EMPTY.toString()), e && e("redirect", u.value);
    }), L.value = 0;
  }
  return {
    auth: L,
    success: N,
    user_data: J,
    code: F,
    IDLogin: q,
    QRCode: v,
    IsDark: p,
    Message: d,
    is_error: R,
    loginQRCode: D,
    checkAccess: Q,
    checkQRLogin: O,
    logout: P,
    config: w,
    setUrls: B,
    setRoutes: C,
    readMessage: S,
    setBase: j
  };
}
var nc = Object.defineProperty, rc = (e, t, n) => t in e ? nc(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, ue = (e, t, n) => (rc(e, typeof t != "symbol" ? t + "" : t, n), n);
function oc(e, t) {
  const n = /* @__PURE__ */ Object.create(null), r = e.split(",");
  for (let o = 0; o < r.length; o++)
    n[r[o]] = !0;
  return t ? (o) => !!n[o.toLowerCase()] : (o) => !!n[o];
}
const xn = process.env.NODE_ENV !== "production" ? Object.freeze({}) : {}, ic = process.env.NODE_ENV !== "production" ? Object.freeze([]) : [], me = () => {
}, sc = /^on[^a-z]/, ac = (e) => sc.test(e), fe = Object.assign, Ko = (e, t) => {
  const n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}, cc = Object.prototype.hasOwnProperty, tn = (e, t) => cc.call(e, t), Y = Array.isArray, Fe = (e) => nn(e) === "[object Map]", zo = (e) => nn(e) === "[object Set]", G = (e) => typeof e == "function", Ae = (e) => typeof e == "string", Wn = (e) => typeof e == "symbol", ee = (e) => e !== null && typeof e == "object", Xn = (e) => ee(e) && G(e.then) && G(e.catch), Vo = Object.prototype.toString, nn = (e) => Vo.call(e), Wo = (e) => nn(e).slice(8, -1), Xo = (e) => nn(e) === "[object Object]", Yn = (e) => Ae(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, Yo = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return (n) => t[n] || (t[n] = e(n));
}, Go = Yo(
  (e) => e.charAt(0).toUpperCase() + e.slice(1)
), uc = Yo(
  (e) => e ? `on${Go(e)}` : ""
), Ht = (e, t) => !Object.is(e, t), lc = (e) => {
  const t = Ae(e) ? Number(e) : NaN;
  return isNaN(t) ? e : t;
};
let Jr;
const Mn = () => Jr || (Jr = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function Gn(e) {
  if (Y(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
      const r = e[n], o = Ae(r) ? hc(r) : Gn(r);
      if (o)
        for (const i in o)
          t[i] = o[i];
    }
    return t;
  } else if (Ae(e) || ee(e))
    return e;
}
const dc = /;(?![^(]*\))/g, fc = /:([^]+)/, pc = /\/\*[^]*?\*\//g;
function hc(e) {
  const t = {};
  return e.replace(pc, "").split(dc).forEach((n) => {
    if (n) {
      const r = n.split(fc);
      r.length > 1 && (t[r[0].trim()] = r[1].trim());
    }
  }), t;
}
function ot(e) {
  let t = "";
  if (Ae(e))
    t = e;
  else if (Y(e))
    for (let n = 0; n < e.length; n++) {
      const r = ot(e[n]);
      r && (t += r + " ");
    }
  else if (ee(e))
    for (const n in e)
      e[n] && (t += n + " ");
  return t.trim();
}
const gc = (e) => Ae(e) ? e : e == null ? "" : Y(e) || ee(e) && (e.toString === Vo || !G(e.toString)) ? JSON.stringify(e, Zo, 2) : String(e), Zo = (e, t) => t && t.__v_isRef ? Zo(e, t.value) : Fe(t) ? {
  [`Map(${t.size})`]: [...t.entries()].reduce((n, [r, o]) => (n[`${r} =>`] = o, n), {})
} : zo(t) ? {
  [`Set(${t.size})`]: [...t.values()]
} : ee(t) && !Y(t) && !Xo(t) ? String(t) : t;
function Qr(e, ...t) {
  console.warn(`[Vue warn] ${e}`, ...t);
}
let $o;
function wc(e, t = $o) {
  t && t.active && t.effects.push(e);
}
function mc() {
  return $o;
}
const mt = (e) => {
  const t = new Set(e);
  return t.w = 0, t.n = 0, t;
}, ei = (e) => (e.w & Je) > 0, ti = (e) => (e.n & Je) > 0, yc = ({ deps: e }) => {
  if (e.length)
    for (let t = 0; t < e.length; t++)
      e[t].w |= Je;
}, vc = (e) => {
  const { deps: t } = e;
  if (t.length) {
    let n = 0;
    for (let r = 0; r < t.length; r++) {
      const o = t[r];
      ei(o) && !ti(o) ? o.delete(e) : t[n++] = o, o.w &= ~Je, o.n &= ~Je;
    }
    t.length = n;
  }
}, Pn = /* @__PURE__ */ new WeakMap();
let pt = 0, Je = 1;
const Tn = 30;
let ce;
const Ue = Symbol(process.env.NODE_ENV !== "production" ? "iterate" : ""), Ln = Symbol(process.env.NODE_ENV !== "production" ? "Map key iterate" : "");
class ni {
  constructor(t, n = null, r) {
    this.fn = t, this.scheduler = n, this.active = !0, this.deps = [], this.parent = void 0, wc(this, r);
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
      return this.parent = ce, ce = this, Le = !0, Je = 1 << ++pt, pt <= Tn ? yc(this) : jr(this), this.fn();
    } finally {
      pt <= Tn && vc(this), Je = 1 << --pt, ce = this.parent, Le = n, this.parent = void 0, this.deferStop && this.stop();
    }
  }
  stop() {
    ce === this ? this.deferStop = !0 : this.active && (jr(this), this.onStop && this.onStop(), this.active = !1);
  }
}
function jr(e) {
  const { deps: t } = e;
  if (t.length) {
    for (let n = 0; n < t.length; n++)
      t[n].delete(e);
    t.length = 0;
  }
}
let Le = !0;
const ri = [];
function rn() {
  ri.push(Le), Le = !1;
}
function on() {
  const e = ri.pop();
  Le = e === void 0 ? !0 : e;
}
function be(e, t, n) {
  if (Le && ce) {
    let r = Pn.get(e);
    r || Pn.set(e, r = /* @__PURE__ */ new Map());
    let o = r.get(n);
    o || r.set(n, o = mt());
    const i = process.env.NODE_ENV !== "production" ? { effect: ce, target: e, type: t, key: n } : void 0;
    In(o, i);
  }
}
function In(e, t) {
  let n = !1;
  pt <= Tn ? ti(e) || (e.n |= Je, n = !ei(e)) : n = !e.has(ce), n && (e.add(ce), ce.deps.push(e), process.env.NODE_ENV !== "production" && ce.onTrack && ce.onTrack(
    fe(
      {
        effect: ce
      },
      t
    )
  ));
}
function Qe(e, t, n, r, o, i) {
  const s = Pn.get(e);
  if (!s)
    return;
  let a = [];
  if (t === "clear")
    a = [...s.values()];
  else if (n === "length" && Y(e)) {
    const f = Number(r);
    s.forEach((h, c) => {
      (c === "length" || c >= f) && a.push(h);
    });
  } else
    switch (n !== void 0 && a.push(s.get(n)), t) {
      case "add":
        Y(e) ? Yn(n) && a.push(s.get("length")) : (a.push(s.get(Ue)), Fe(e) && a.push(s.get(Ln)));
        break;
      case "delete":
        Y(e) || (a.push(s.get(Ue)), Fe(e) && a.push(s.get(Ln)));
        break;
      case "set":
        Fe(e) && a.push(s.get(Ue));
        break;
    }
  const u = process.env.NODE_ENV !== "production" ? { target: e, type: t, key: n, newValue: r, oldValue: o, oldTarget: i } : void 0;
  if (a.length === 1)
    a[0] && (process.env.NODE_ENV !== "production" ? tt(a[0], u) : tt(a[0]));
  else {
    const f = [];
    for (const h of a)
      h && f.push(...h);
    process.env.NODE_ENV !== "production" ? tt(mt(f), u) : tt(mt(f));
  }
}
function tt(e, t) {
  const n = Y(e) ? e : [...e];
  for (const r of n)
    r.computed && qr(r, t);
  for (const r of n)
    r.computed || qr(r, t);
}
function qr(e, t) {
  (e !== ce || e.allowRecurse) && (process.env.NODE_ENV !== "production" && e.onTrigger && e.onTrigger(fe({ effect: e }, t)), e.scheduler ? e.scheduler() : e.run());
}
const Ac = /* @__PURE__ */ oc("__proto__,__v_isRef,__isVue"), oi = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(Wn)
), bc = /* @__PURE__ */ ii(), Oc = /* @__PURE__ */ ii(!0), Hr = /* @__PURE__ */ Ec();
function Ec() {
  const e = {};
  return ["includes", "indexOf", "lastIndexOf"].forEach((t) => {
    e[t] = function(...n) {
      const r = V(this);
      for (let i = 0, s = this.length; i < s; i++)
        be(r, "get", i + "");
      const o = r[t](...n);
      return o === -1 || o === !1 ? r[t](...n.map(V)) : o;
    };
  }), ["push", "pop", "shift", "unshift", "splice"].forEach((t) => {
    e[t] = function(...n) {
      rn();
      const r = V(this)[t].apply(this, n);
      return on(), r;
    };
  }), e;
}
function Cc(e) {
  const t = V(this);
  return be(t, "has", e), t.hasOwnProperty(e);
}
function ii(e = !1, t = !1) {
  return function(n, r, o) {
    if (r === "__v_isReactive")
      return !e;
    if (r === "__v_isReadonly")
      return e;
    if (r === "__v_isShallow")
      return t;
    if (r === "__v_raw" && o === (e ? t ? jc : ui : t ? Qc : ci).get(n))
      return n;
    const i = Y(n);
    if (!e) {
      if (i && tn(Hr, r))
        return Reflect.get(Hr, r, o);
      if (r === "hasOwnProperty")
        return Cc;
    }
    const s = Reflect.get(n, r, o);
    return (Wn(r) ? oi.has(r) : Ac(r)) || (e || be(n, "get", r), t) ? s : le(s) ? i && Yn(r) ? s : s.value : ee(s) ? e ? li(s) : $n(s) : s;
  };
}
const Sc = /* @__PURE__ */ Dc();
function Dc(e = !1) {
  return function(t, n, r, o) {
    let i = t[n];
    if (We(i) && le(i) && !le(r))
      return !1;
    if (!e && (!Jn(r) && !We(r) && (i = V(i), r = V(r)), !Y(t) && le(i) && !le(r)))
      return i.value = r, !0;
    const s = Y(t) && Yn(n) ? Number(n) < t.length : tn(t, n), a = Reflect.set(t, n, r, o);
    return t === V(o) && (s ? Ht(r, i) && Qe(t, "set", n, r, i) : Qe(t, "add", n, r)), a;
  };
}
function kc(e, t) {
  const n = tn(e, t), r = e[t], o = Reflect.deleteProperty(e, t);
  return o && n && Qe(e, "delete", t, void 0, r), o;
}
function _c(e, t) {
  const n = Reflect.has(e, t);
  return (!Wn(t) || !oi.has(t)) && be(e, "has", t), n;
}
function Nc(e) {
  return be(e, "iterate", Y(e) ? "length" : Ue), Reflect.ownKeys(e);
}
const Rc = {
  get: bc,
  set: Sc,
  deleteProperty: kc,
  has: _c,
  ownKeys: Nc
}, Bc = {
  get: Oc,
  set(e, t) {
    return process.env.NODE_ENV !== "production" && Qr(
      `Set operation on key "${String(t)}" failed: target is readonly.`,
      e
    ), !0;
  },
  deleteProperty(e, t) {
    return process.env.NODE_ENV !== "production" && Qr(
      `Delete operation on key "${String(t)}" failed: target is readonly.`,
      e
    ), !0;
  }
}, Zn = (e) => e, sn = (e) => Reflect.getPrototypeOf(e);
function St(e, t, n = !1, r = !1) {
  e = e.__v_raw;
  const o = V(e), i = V(t);
  n || (t !== i && be(o, "get", t), be(o, "get", i));
  const { has: s } = sn(o), a = r ? Zn : n ? tr : er;
  if (s.call(o, t))
    return a(e.get(t));
  if (s.call(o, i))
    return a(e.get(i));
  e !== o && e.get(t);
}
function Dt(e, t = !1) {
  const n = this.__v_raw, r = V(n), o = V(e);
  return t || (e !== o && be(r, "has", e), be(r, "has", o)), e === o ? n.has(e) : n.has(e) || n.has(o);
}
function kt(e, t = !1) {
  return e = e.__v_raw, !t && be(V(e), "iterate", Ue), Reflect.get(e, "size", e);
}
function Fr(e) {
  e = V(e);
  const t = V(this);
  return sn(t).has.call(t, e) || (t.add(e), Qe(t, "add", e, e)), this;
}
function Ur(e, t) {
  t = V(t);
  const n = V(this), { has: r, get: o } = sn(n);
  let i = r.call(n, e);
  i ? process.env.NODE_ENV !== "production" && ai(n, r, e) : (e = V(e), i = r.call(n, e));
  const s = o.call(n, e);
  return n.set(e, t), i ? Ht(t, s) && Qe(n, "set", e, t, s) : Qe(n, "add", e, t), this;
}
function Kr(e) {
  const t = V(this), { has: n, get: r } = sn(t);
  let o = n.call(t, e);
  o ? process.env.NODE_ENV !== "production" && ai(t, n, e) : (e = V(e), o = n.call(t, e));
  const i = r ? r.call(t, e) : void 0, s = t.delete(e);
  return o && Qe(t, "delete", e, void 0, i), s;
}
function zr() {
  const e = V(this), t = e.size !== 0, n = process.env.NODE_ENV !== "production" ? Fe(e) ? new Map(e) : new Set(e) : void 0, r = e.clear();
  return t && Qe(e, "clear", void 0, void 0, n), r;
}
function _t(e, t) {
  return function(n, r) {
    const o = this, i = o.__v_raw, s = V(i), a = t ? Zn : e ? tr : er;
    return !e && be(s, "iterate", Ue), i.forEach((u, f) => n.call(r, a(u), a(f), o));
  };
}
function Nt(e, t, n) {
  return function(...r) {
    const o = this.__v_raw, i = V(o), s = Fe(i), a = e === "entries" || e === Symbol.iterator && s, u = e === "keys" && s, f = o[e](...r), h = n ? Zn : t ? tr : er;
    return !t && be(
      i,
      "iterate",
      u ? Ln : Ue
    ), {
      // iterator protocol
      next() {
        const { value: c, done: y } = f.next();
        return y ? { value: c, done: y } : {
          value: a ? [h(c[0]), h(c[1])] : h(c),
          done: y
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
        `${Go(e)} operation ${n}failed: target is readonly.`,
        V(this)
      );
    }
    return e === "delete" ? !1 : this;
  };
}
function xc() {
  const e = {
    get(o) {
      return St(this, o);
    },
    get size() {
      return kt(this);
    },
    has: Dt,
    add: Fr,
    set: Ur,
    delete: Kr,
    clear: zr,
    forEach: _t(!1, !1)
  }, t = {
    get(o) {
      return St(this, o, !1, !0);
    },
    get size() {
      return kt(this);
    },
    has: Dt,
    add: Fr,
    set: Ur,
    delete: Kr,
    clear: zr,
    forEach: _t(!1, !0)
  }, n = {
    get(o) {
      return St(this, o, !0);
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
    forEach: _t(!0, !1)
  }, r = {
    get(o) {
      return St(this, o, !0, !0);
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
    forEach: _t(!0, !0)
  };
  return ["keys", "values", "entries", Symbol.iterator].forEach((o) => {
    e[o] = Nt(
      o,
      !1,
      !1
    ), n[o] = Nt(
      o,
      !0,
      !1
    ), t[o] = Nt(
      o,
      !1,
      !0
    ), r[o] = Nt(
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
  Mc,
  Pc,
  Tc,
  Lc
] = /* @__PURE__ */ xc();
function si(e, t) {
  const n = t ? e ? Lc : Tc : e ? Pc : Mc;
  return (r, o, i) => o === "__v_isReactive" ? !e : o === "__v_isReadonly" ? e : o === "__v_raw" ? r : Reflect.get(
    tn(n, o) && o in r ? n : r,
    o,
    i
  );
}
const Ic = {
  get: /* @__PURE__ */ si(!1, !1)
}, Jc = {
  get: /* @__PURE__ */ si(!0, !1)
};
function ai(e, t, n) {
  const r = V(n);
  if (r !== n && t.call(e, r)) {
    const o = Wo(e);
    console.warn(
      `Reactive ${o} contains both the raw and reactive versions of the same object${o === "Map" ? " as keys" : ""}, which can lead to inconsistencies. Avoid differentiating between the raw and reactive versions of an object and only use the reactive version if possible.`
    );
  }
}
const ci = /* @__PURE__ */ new WeakMap(), Qc = /* @__PURE__ */ new WeakMap(), ui = /* @__PURE__ */ new WeakMap(), jc = /* @__PURE__ */ new WeakMap();
function qc(e) {
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
function Hc(e) {
  return e.__v_skip || !Object.isExtensible(e) ? 0 : qc(Wo(e));
}
function $n(e) {
  return We(e) ? e : di(
    e,
    !1,
    Rc,
    Ic,
    ci
  );
}
function li(e) {
  return di(
    e,
    !0,
    Bc,
    Jc,
    ui
  );
}
function di(e, t, n, r, o) {
  if (!ee(e))
    return process.env.NODE_ENV !== "production" && console.warn(`value cannot be made reactive: ${String(e)}`), e;
  if (e.__v_raw && !(t && e.__v_isReactive))
    return e;
  const i = o.get(e);
  if (i)
    return i;
  const s = Hc(e);
  if (s === 0)
    return e;
  const a = new Proxy(
    e,
    s === 2 ? r : n
  );
  return o.set(e, a), a;
}
function Ke(e) {
  return We(e) ? Ke(e.__v_raw) : !!(e && e.__v_isReactive);
}
function We(e) {
  return !!(e && e.__v_isReadonly);
}
function Jn(e) {
  return !!(e && e.__v_isShallow);
}
function Qn(e) {
  return Ke(e) || We(e);
}
function V(e) {
  const t = e && e.__v_raw;
  return t ? V(t) : e;
}
const er = (e) => ee(e) ? $n(e) : e, tr = (e) => ee(e) ? li(e) : e;
function Fc(e) {
  Le && ce && (e = V(e), process.env.NODE_ENV !== "production" ? In(e.dep || (e.dep = mt()), {
    target: e,
    type: "get",
    key: "value"
  }) : In(e.dep || (e.dep = mt())));
}
function Uc(e, t) {
  e = V(e);
  const n = e.dep;
  n && (process.env.NODE_ENV !== "production" ? tt(n, {
    target: e,
    type: "set",
    key: "value",
    newValue: t
  }) : tt(n));
}
function le(e) {
  return !!(e && e.__v_isRef === !0);
}
function It(e) {
  return le(e) ? e.value : e;
}
const Kc = {
  get: (e, t, n) => It(Reflect.get(e, t, n)),
  set: (e, t, n, r) => {
    const o = e[t];
    return le(o) && !le(n) ? (o.value = n, !0) : Reflect.set(e, t, n, r);
  }
};
function zc(e) {
  return Ke(e) ? e : new Proxy(e, Kc);
}
class Vc {
  constructor(t, n, r, o) {
    this._setter = n, this.dep = void 0, this.__v_isRef = !0, this.__v_isReadonly = !1, this._dirty = !0, this.effect = new ni(t, () => {
      this._dirty || (this._dirty = !0, Uc(this));
    }), this.effect.computed = this, this.effect.active = this._cacheable = !o, this.__v_isReadonly = r;
  }
  get value() {
    const t = V(this);
    return Fc(t), (t._dirty || !t._cacheable) && (t._dirty = !1, t._value = t.effect.run()), t._value;
  }
  set value(t) {
    this._setter(t);
  }
}
function Wc(e, t, n = !1) {
  let r, o;
  const i = G(e);
  i ? (r = e, o = process.env.NODE_ENV !== "production" ? () => {
    console.warn("Write operation failed: computed value is readonly");
  } : me) : (r = e.get, o = e.set);
  const s = new Vc(r, o, i || !o, n);
  return process.env.NODE_ENV !== "production" && t && !n && (s.effect.onTrack = t.onTrack, s.effect.onTrigger = t.onTrigger), s;
}
const ze = [];
function fi(e) {
  ze.push(e);
}
function pi() {
  ze.pop();
}
function X(e, ...t) {
  if (process.env.NODE_ENV === "production")
    return;
  rn();
  const n = ze.length ? ze[ze.length - 1].component : null, r = n && n.appContext.config.warnHandler, o = Xc();
  if (r)
    Ve(
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
`, ...Yc(o)), console.warn(...i);
  }
  on();
}
function Xc() {
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
function Yc(e) {
  const t = [];
  return e.forEach((n, r) => {
    t.push(...r === 0 ? [] : [`
`], ...Gc(n));
  }), t;
}
function Gc({ vnode: e, recurseCount: t }) {
  const n = t > 0 ? `... (${t} recursive calls)` : "", r = e.component ? e.component.parent == null : !1, o = ` at <${dr(
    e.component,
    e.type,
    r
  )}`, i = ">" + n;
  return e.props ? [o, ...Zc(e.props), i] : [o + i];
}
function Zc(e) {
  const t = [], n = Object.keys(e);
  return n.slice(0, 3).forEach((r) => {
    t.push(...hi(r, e[r]));
  }), n.length > 3 && t.push(" ..."), t;
}
function hi(e, t, n) {
  return Ae(t) ? (t = JSON.stringify(t), n ? t : [`${e}=${t}`]) : typeof t == "number" || typeof t == "boolean" || t == null ? n ? t : [`${e}=${t}`] : le(t) ? (t = hi(e, V(t.value), !0), n ? t : [`${e}=Ref<`, t, ">"]) : G(t) ? [`${e}=fn${t.name ? `<${t.name}>` : ""}`] : (t = V(t), n ? t : [`${e}=`, t]);
}
function $c(e, t) {
  process.env.NODE_ENV !== "production" && e !== void 0 && (typeof e != "number" ? X(`${t} is not a valid number - got ${JSON.stringify(e)}.`) : isNaN(e) && X(`${t} is NaN - the duration expression might be incorrect.`));
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
function Ve(e, t, n, r) {
  let o;
  try {
    o = r ? e(...r) : e();
  } catch (i) {
    rr(i, t, n);
  }
  return o;
}
function yt(e, t, n, r) {
  if (G(e)) {
    const i = Ve(e, t, n, r);
    return i && Xn(i) && i.catch((s) => {
      rr(s, t, n);
    }), i;
  }
  const o = [];
  for (let i = 0; i < e.length; i++)
    o.push(yt(e[i], t, n, r));
  return o;
}
function rr(e, t, n, r = !0) {
  const o = t ? t.vnode : null;
  if (t) {
    let i = t.parent;
    const s = t.proxy, a = process.env.NODE_ENV !== "production" ? nr[n] : n;
    for (; i; ) {
      const f = i.ec;
      if (f) {
        for (let h = 0; h < f.length; h++)
          if (f[h](e, s, a) === !1)
            return;
      }
      i = i.parent;
    }
    const u = t.appContext.config.errorHandler;
    if (u) {
      Ve(
        u,
        null,
        10,
        [e, s, a]
      );
      return;
    }
  }
  eu(e, n, o, r);
}
function eu(e, t, n, r = !0) {
  if (process.env.NODE_ENV !== "production") {
    const o = nr[t];
    if (n && fi(n), X(`Unhandled error${o ? ` during execution of ${o}` : ""}`), n && pi(), r)
      throw e;
    console.error(e);
  } else
    console.error(e);
}
let Ft = !1, jn = !1;
const Ee = [];
let Pe = 0;
const it = [];
let Se = null, Me = 0;
const tu = /* @__PURE__ */ Promise.resolve(), nu = 100;
function ru(e) {
  let t = Pe + 1, n = Ee.length;
  for (; t < n; ) {
    const r = t + n >>> 1;
    vt(Ee[r]) < e ? t = r + 1 : n = r;
  }
  return t;
}
function gi(e) {
  (!Ee.length || !Ee.includes(
    e,
    Ft && e.allowRecurse ? Pe + 1 : Pe
  )) && (e.id == null ? Ee.push(e) : Ee.splice(ru(e.id), 0, e), wi());
}
function wi() {
  !Ft && !jn && (jn = !0, tu.then(mi));
}
function or(e) {
  Y(e) ? it.push(...e) : (!Se || !Se.includes(
    e,
    e.allowRecurse ? Me + 1 : Me
  )) && it.push(e), wi();
}
function ou(e) {
  if (it.length) {
    const t = [...new Set(it)];
    if (it.length = 0, Se) {
      Se.push(...t);
      return;
    }
    for (Se = t, process.env.NODE_ENV !== "production" && (e = e || /* @__PURE__ */ new Map()), Se.sort((n, r) => vt(n) - vt(r)), Me = 0; Me < Se.length; Me++)
      process.env.NODE_ENV !== "production" && yi(e, Se[Me]) || Se[Me]();
    Se = null, Me = 0;
  }
}
const vt = (e) => e.id == null ? 1 / 0 : e.id, iu = (e, t) => {
  const n = vt(e) - vt(t);
  if (n === 0) {
    if (e.pre && !t.pre)
      return -1;
    if (t.pre && !e.pre)
      return 1;
  }
  return n;
};
function mi(e) {
  jn = !1, Ft = !0, process.env.NODE_ENV !== "production" && (e = e || /* @__PURE__ */ new Map()), Ee.sort(iu);
  const t = process.env.NODE_ENV !== "production" ? (n) => yi(e, n) : me;
  try {
    for (Pe = 0; Pe < Ee.length; Pe++) {
      const n = Ee[Pe];
      if (n && n.active !== !1) {
        if (process.env.NODE_ENV !== "production" && t(n))
          continue;
        Ve(n, null, 14);
      }
    }
  } finally {
    Pe = 0, Ee.length = 0, ou(e), Ft = !1, (Ee.length || it.length) && mi(e);
  }
}
function yi(e, t) {
  if (!e.has(t))
    e.set(t, 1);
  else {
    const n = e.get(t);
    if (n > nu) {
      const r = t.ownerInstance, o = r && Ii(r.type);
      return X(
        `Maximum recursive updates exceeded${o ? ` in component <${o}>` : ""}. This means you have a reactive effect that is mutating its own dependencies and thus recursively triggering itself. Possible sources include component template, render function, updated hook or watcher source function.`
      ), !0;
    } else
      e.set(t, n + 1);
  }
}
const et = /* @__PURE__ */ new Set();
process.env.NODE_ENV !== "production" && (Mn().__VUE_HMR_RUNTIME__ = {
  createRecord: gn(su),
  rerender: gn(au),
  reload: gn(cu)
});
const Ut = /* @__PURE__ */ new Map();
function su(e, t) {
  return Ut.has(e) ? !1 : (Ut.set(e, {
    initialDef: gt(t),
    instances: /* @__PURE__ */ new Set()
  }), !0);
}
function gt(e) {
  return Ji(e) ? e.__vccOpts : e;
}
function au(e, t) {
  const n = Ut.get(e);
  n && (n.initialDef.render = t, [...n.instances].forEach((r) => {
    t && (r.render = t, gt(r.type).render = t), r.renderCache = [], r.update();
  }));
}
function cu(e, t) {
  const n = Ut.get(e);
  if (!n)
    return;
  t = gt(t), Vr(n.initialDef, t);
  const r = [...n.instances];
  for (const o of r) {
    const i = gt(o.type);
    et.has(i) || (i !== n.initialDef && Vr(i, t), et.add(i)), o.appContext.propsCache.delete(o.type), o.appContext.emitsCache.delete(o.type), o.appContext.optionsCache.delete(o.type), o.ceReload ? (et.add(i), o.ceReload(t.styles), et.delete(i)) : o.parent ? gi(o.parent.update) : o.appContext.reload ? o.appContext.reload() : typeof window < "u" ? window.location.reload() : console.warn(
      "[HMR] Root or manually mounted instance modified. Full reload required."
    );
  }
  or(() => {
    for (const o of r)
      et.delete(
        gt(o.type)
      );
  });
}
function Vr(e, t) {
  fe(e, t);
  for (const n in e)
    n !== "__file" && !(n in t) && delete e[n];
}
function gn(e) {
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
function vi(e, ...t) {
}
const uu = /* @__PURE__ */ lu(
  "component:updated"
  /* COMPONENT_UPDATED */
);
function lu(e) {
  return (t) => {
    vi(
      e,
      t.appContext.app,
      t.uid,
      t.parent ? t.parent.uid : void 0,
      t
    );
  };
}
const du = /* @__PURE__ */ Ai(
  "perf:start"
  /* PERFORMANCE_START */
), fu = /* @__PURE__ */ Ai(
  "perf:end"
  /* PERFORMANCE_END */
);
function Ai(e) {
  return (t, n, r) => {
    vi(e, t.appContext.app, t.uid, t, n, r);
  };
}
let Ce = null, bi = null;
function Wr(e) {
  const t = Ce;
  return Ce = e, bi = e && e.type.__scopeId || null, t;
}
function pu(e, t = Ce, n) {
  if (!t || e._n)
    return e;
  const r = (...o) => {
    r._d && ro(-1);
    const i = Wr(t);
    let s;
    try {
      s = e(...o);
    } finally {
      Wr(i), r._d && ro(1);
    }
    return process.env.NODE_ENV !== "production" && uu(t), s;
  };
  return r._n = !0, r._c = !0, r._d = !0, r;
}
function hu(e) {
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
function Oi({ vnode: e, parent: t }, n) {
  for (; t && t.subTree === e; )
    (e = t.vnode).el = n, t = t.parent;
}
const gu = (e) => e.__isSuspense, wu = {
  name: "Suspense",
  // In order to make Suspense tree-shakable, we need to avoid importing it
  // directly in the renderer. The renderer checks for the __isSuspense flag
  // on a vnode's type and calls the `process` method, passing in renderer
  // internals.
  __isSuspense: !0,
  process(e, t, n, r, o, i, s, a, u, f) {
    e == null ? yu(
      t,
      n,
      r,
      o,
      i,
      s,
      a,
      u,
      f
    ) : vu(
      e,
      t,
      n,
      r,
      o,
      s,
      a,
      u,
      f
    );
  },
  hydrate: Au,
  create: ir,
  normalize: bu
}, mu = wu;
function At(e, t) {
  const n = e.props && e.props[t];
  G(n) && n();
}
function yu(e, t, n, r, o, i, s, a, u) {
  const {
    p: f,
    o: { createElement: h }
  } = u, c = h("div"), y = e.suspense = ir(
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
  f(
    null,
    y.pendingBranch = e.ssContent,
    c,
    null,
    r,
    y,
    i,
    s
  ), y.deps > 0 ? (At(e, "onPending"), At(e, "onFallback"), f(
    null,
    e.ssFallback,
    t,
    n,
    r,
    null,
    // fallback tree will not have suspense context
    i,
    s
  ), st(y, e.ssFallback)) : y.resolve(!1, !0);
}
function vu(e, t, n, r, o, i, s, a, { p: u, um: f, o: { createElement: h } }) {
  const c = t.suspense = e.suspense;
  c.vnode = t, t.el = e.el;
  const y = t.ssContent, M = t.ssFallback, { activeBranch: N, pendingBranch: R, isInFallback: F, isHydrating: q } = c;
  if (R)
    c.pendingBranch = y, vn(y, R) ? (u(
      R,
      y,
      c.hiddenContainer,
      null,
      o,
      c,
      i,
      s,
      a
    ), c.deps <= 0 ? c.resolve() : F && (u(
      N,
      M,
      n,
      r,
      o,
      null,
      // fallback tree will not have suspense context
      i,
      s,
      a
    ), st(c, M))) : (c.pendingId++, q ? (c.isHydrating = !1, c.activeBranch = R) : f(R, o, c), c.deps = 0, c.effects.length = 0, c.hiddenContainer = h("div"), F ? (u(
      null,
      y,
      c.hiddenContainer,
      null,
      o,
      c,
      i,
      s,
      a
    ), c.deps <= 0 ? c.resolve() : (u(
      N,
      M,
      n,
      r,
      o,
      null,
      // fallback tree will not have suspense context
      i,
      s,
      a
    ), st(c, M))) : N && vn(y, N) ? (u(
      N,
      y,
      n,
      r,
      o,
      c,
      i,
      s,
      a
    ), c.resolve(!0)) : (u(
      null,
      y,
      c.hiddenContainer,
      null,
      o,
      c,
      i,
      s,
      a
    ), c.deps <= 0 && c.resolve()));
  else if (N && vn(y, N))
    u(
      N,
      y,
      n,
      r,
      o,
      c,
      i,
      s,
      a
    ), st(c, y);
  else if (At(t, "onPending"), c.pendingBranch = y, c.pendingId++, u(
    null,
    y,
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
    const { timeout: L, pendingId: J } = c;
    L > 0 ? setTimeout(() => {
      c.pendingId === J && c.fallback(M);
    }, L) : L === 0 && c.fallback(M);
  }
}
let Xr = !1;
function ir(e, t, n, r, o, i, s, a, u, f, h = !1) {
  process.env.NODE_ENV !== "production" && !Xr && (Xr = !0, console[console.info ? "info" : "log"](
    "<Suspense> is an experimental feature and its API will likely change."
  ));
  const {
    p: c,
    m: y,
    um: M,
    n: N,
    o: { parentNode: R, remove: F }
  } = f;
  let q;
  const L = Eu(e);
  L && t != null && t.pendingBranch && (q = t.pendingId, t.deps++);
  const J = e.props ? lc(e.props.timeout) : void 0;
  process.env.NODE_ENV !== "production" && $c(J, "Suspense timeout");
  const j = {
    vnode: e,
    parent: t,
    parentComponent: n,
    isSVG: s,
    container: r,
    hiddenContainer: o,
    anchor: i,
    deps: 0,
    pendingId: 0,
    timeout: typeof J == "number" ? J : -1,
    activeBranch: null,
    pendingBranch: null,
    isInFallback: !0,
    isHydrating: h,
    isUnmounted: !1,
    effects: [],
    resolve(C = !1, B = !1) {
      if (process.env.NODE_ENV !== "production") {
        if (!C && !j.pendingBranch)
          throw new Error(
            "suspense.resolve() is called without a pending branch."
          );
        if (j.isUnmounted)
          throw new Error(
            "suspense.resolve() is called on an already unmounted suspense boundary."
          );
      }
      const {
        vnode: g,
        activeBranch: w,
        pendingBranch: p,
        pendingId: v,
        effects: d,
        parentComponent: l,
        container: D
      } = j;
      if (j.isHydrating)
        j.isHydrating = !1;
      else if (!C) {
        const Q = w && p.transition && p.transition.mode === "out-in";
        Q && (w.transition.afterLeave = () => {
          v === j.pendingId && y(p, D, P, 0);
        });
        let { anchor: P } = j;
        w && (P = N(w), M(w, l, j, !0)), Q || y(p, D, P, 0);
      }
      st(j, p), j.pendingBranch = null, j.isInFallback = !1;
      let S = j.parent, O = !1;
      for (; S; ) {
        if (S.pendingBranch) {
          S.effects.push(...d), O = !0;
          break;
        }
        S = S.parent;
      }
      O || or(d), j.effects = [], L && t && t.pendingBranch && q === t.pendingId && (t.deps--, t.deps === 0 && !B && t.resolve()), At(g, "onResolve");
    },
    fallback(C) {
      if (!j.pendingBranch)
        return;
      const { vnode: B, activeBranch: g, parentComponent: w, container: p, isSVG: v } = j;
      At(B, "onFallback");
      const d = N(g), l = () => {
        j.isInFallback && (c(
          null,
          C,
          p,
          d,
          w,
          null,
          // fallback tree will not have suspense context
          v,
          a,
          u
        ), st(j, C));
      }, D = C.transition && C.transition.mode === "out-in";
      D && (g.transition.afterLeave = l), j.isInFallback = !0, M(
        g,
        w,
        null,
        // no suspense so unmount hooks fire now
        !0
        // shouldRemove
      ), D || l();
    },
    move(C, B, g) {
      j.activeBranch && y(j.activeBranch, C, B, g), j.container = C;
    },
    next() {
      return j.activeBranch && N(j.activeBranch);
    },
    registerDep(C, B) {
      const g = !!j.pendingBranch;
      g && j.deps++;
      const w = C.vnode.el;
      C.asyncDep.catch((p) => {
        rr(p, C, 0);
      }).then((p) => {
        if (C.isUnmounted || j.isUnmounted || j.pendingId !== C.suspenseId)
          return;
        C.asyncResolved = !0;
        const { vnode: v } = C;
        process.env.NODE_ENV !== "production" && fi(v), sl(C, p, !1), w && (v.el = w);
        const d = !w && C.subTree.el;
        B(
          C,
          v,
          // component may have been moved before resolve.
          // if this is not a hydration, instance.subTree will be the comment
          // placeholder.
          R(w || C.subTree.el),
          // anchor will not be used if this is hydration, so only need to
          // consider the comment placeholder case.
          w ? null : N(C.subTree),
          j,
          s,
          u
        ), d && F(d), Oi(C, v.el), process.env.NODE_ENV !== "production" && pi(), g && --j.deps === 0 && j.resolve();
      });
    },
    unmount(C, B) {
      j.isUnmounted = !0, j.activeBranch && M(
        j.activeBranch,
        n,
        C,
        B
      ), j.pendingBranch && M(
        j.pendingBranch,
        n,
        C,
        B
      );
    }
  };
  return j;
}
function Au(e, t, n, r, o, i, s, a, u) {
  const f = t.suspense = ir(
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
    f.pendingBranch = t.ssContent,
    n,
    f,
    i,
    s
  );
  return f.deps === 0 && f.resolve(!1, !0), h;
}
function bu(e) {
  const { shapeFlag: t, children: n } = e, r = t & 32;
  e.ssContent = Yr(
    r ? n.default : n
  ), e.ssFallback = r ? Yr(n.fallback) : Ie(ut);
}
function Yr(e) {
  let t;
  if (G(e)) {
    const n = lt && e._c;
    n && (e._d = !1, at()), e = e(), n && (e._d = !0, t = ye, Ri());
  }
  if (Y(e)) {
    const n = hu(e);
    process.env.NODE_ENV !== "production" && !n && X("<Suspense> slots expect a single root node."), e = n;
  }
  return e = tl(e), t && !e.dynamicChildren && (e.dynamicChildren = t.filter((n) => n !== e)), e;
}
function Ou(e, t) {
  t && t.pendingBranch ? Y(e) ? t.effects.push(...e) : t.effects.push(e) : or(e);
}
function st(e, t) {
  e.activeBranch = t;
  const { vnode: n, parentComponent: r } = e, o = n.el = t.el;
  r && r.subTree === n && (r.vnode.el = o, Oi(r, o));
}
function Eu(e) {
  var t;
  return ((t = e.props) == null ? void 0 : t.suspensible) != null && e.props.suspensible !== !1;
}
const Rt = {};
function wn(e, t, n) {
  return process.env.NODE_ENV !== "production" && !G(t) && X(
    "`watch(fn, options?)` signature has been moved to a separate API. Use `watchEffect(fn, options?)` instead. `watch` now only supports `watch(source, cb, options?) signature."
  ), Cu(e, t, n);
}
function Cu(e, t, { immediate: n, deep: r, flush: o, onTrack: i, onTrigger: s } = xn) {
  var a;
  process.env.NODE_ENV !== "production" && !t && (n !== void 0 && X(
    'watch() "immediate" option is only respected when using the watch(source, callback, options?) signature.'
  ), r !== void 0 && X(
    'watch() "deep" option is only respected when using the watch(source, callback, options?) signature.'
  ));
  const u = (J) => {
    X(
      "Invalid watch source: ",
      J,
      "A watch source can only be a getter/effect function, a ref, a reactive object, or an array of these types."
    );
  }, f = mc() === ((a = se) == null ? void 0 : a.scope) ? se : null;
  let h, c = !1, y = !1;
  if (le(e) ? (h = () => e.value, c = Jn(e)) : Ke(e) ? (h = () => e, r = !0) : Y(e) ? (y = !0, c = e.some((J) => Ke(J) || Jn(J)), h = () => e.map((J) => {
    if (le(J))
      return J.value;
    if (Ke(J))
      return nt(J);
    if (G(J))
      return Ve(J, f, 2);
    process.env.NODE_ENV !== "production" && u(J);
  })) : G(e) ? t ? h = () => Ve(e, f, 2) : h = () => {
    if (!(f && f.isUnmounted))
      return M && M(), yt(
        e,
        f,
        3,
        [N]
      );
  } : (h = me, process.env.NODE_ENV !== "production" && u(e)), t && r) {
    const J = h;
    h = () => nt(J());
  }
  let M, N = (J) => {
    M = L.onStop = () => {
      Ve(J, f, 4);
    };
  }, R = y ? new Array(e.length).fill(Rt) : Rt;
  const F = () => {
    if (L.active)
      if (t) {
        const J = L.run();
        (r || c || (y ? J.some(
          (j, C) => Ht(j, R[C])
        ) : Ht(J, R))) && (M && M(), yt(t, f, 3, [
          J,
          // pass undefined as the old value when it's changed for the first time
          R === Rt ? void 0 : y && R[0] === Rt ? [] : R,
          N
        ]), R = J);
      } else
        L.run();
  };
  F.allowRecurse = !!t;
  let q;
  o === "sync" ? q = F : o === "post" ? q = () => no(F, f && f.suspense) : (F.pre = !0, f && (F.id = f.uid), q = () => gi(F));
  const L = new ni(h, q);
  return process.env.NODE_ENV !== "production" && (L.onTrack = i, L.onTrigger = s), t ? n ? F() : R = L.run() : o === "post" ? no(
    L.run.bind(L),
    f && f.suspense
  ) : L.run(), () => {
    L.stop(), f && f.scope && Ko(f.scope.effects, L);
  };
}
function Su(e, t) {
  const n = t.split(".");
  return () => {
    let r = e;
    for (let o = 0; o < n.length && r; o++)
      r = r[n[o]];
    return r;
  };
}
function nt(e, t) {
  if (!ee(e) || e.__v_skip || (t = t || /* @__PURE__ */ new Set(), t.has(e)))
    return e;
  if (t.add(e), le(e))
    nt(e.value, t);
  else if (Y(e))
    for (let n = 0; n < e.length; n++)
      nt(e[n], t);
  else if (zo(e) || Fe(e))
    e.forEach((n) => {
      nt(n, t);
    });
  else if (Xo(e))
    for (const n in e)
      nt(e[n], t);
  return e;
}
function Ei(e, t) {
  return G(e) ? (
    // #8326: extend call and options.name access are considered side-effects
    // by Rollup, so we have to wrap it in a pure-annotated IIFE.
    /* @__PURE__ */ (() => fe({ name: e.name }, t, { setup: e }))()
  ) : e;
}
const Du = (e) => e.type.__isKeepAlive;
function ku(e, t) {
  Ci(e, "a", t);
}
function _u(e, t) {
  Ci(e, "da", t);
}
function Ci(e, t, n = se) {
  const r = e.__wdc || (e.__wdc = () => {
    let o = n;
    for (; o; ) {
      if (o.isDeactivated)
        return;
      o = o.parent;
    }
    return e();
  });
  if (an(t, r, n), n) {
    let o = n.parent;
    for (; o && o.parent; )
      Du(o.parent.vnode) && Nu(r, t, n, o), o = o.parent;
  }
}
function Nu(e, t, n, r) {
  const o = an(
    t,
    e,
    r,
    !0
    /* prepend */
  );
  Si(() => {
    Ko(r[t], o);
  }, n);
}
function an(e, t, n = se, r = !1) {
  if (n) {
    const o = n[e] || (n[e] = []), i = t.__weh || (t.__weh = (...s) => {
      if (n.isUnmounted)
        return;
      rn(), Wt(n);
      const a = yt(t, n, e, s);
      return lr(), on(), a;
    });
    return r ? o.unshift(i) : o.push(i), i;
  } else if (process.env.NODE_ENV !== "production") {
    const o = uc(nr[e].replace(/ hook$/, ""));
    X(
      `${o} is called when there is no active component instance to be associated with. Lifecycle injection APIs can only be used during execution of setup(). If you are using async setup(), make sure to register lifecycle hooks before the first await statement.`
    );
  }
}
const Re = (e) => (t, n = se) => (
  // post-create lifecycle registrations are noops during SSR (except for serverPrefetch)
  an(e, (...r) => t(...r), n)
), Ru = Re("bm"), Bu = Re("m"), xu = Re("bu"), Mu = Re("u"), Pu = Re("bum"), Si = Re("um"), Tu = Re("sp"), Lu = Re(
  "rtg"
), Iu = Re(
  "rtc"
);
function Ju(e, t = se) {
  an("ec", e, t);
}
const Qu = Symbol.for("v-ndc"), Di = (e) => e === "_" || e === "$";
process.env.NODE_ENV;
function ju(e) {
  const { ctx: t, setupState: n } = e;
  Object.keys(V(n)).forEach((r) => {
    if (!n.__isScriptSetup) {
      if (Di(r[0])) {
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
function Gr(e) {
  return Y(e) ? e.reduce(
    (t, n) => (t[n] = null, t),
    {}
  ) : e;
}
function qu(e) {
  const t = ol();
  process.env.NODE_ENV !== "production" && !t && X(
    "withAsyncContext called without active current instance. This is likely a bug."
  );
  let n = e();
  return lr(), Xn(n) && (n = n.catch((r) => {
    throw Wt(t), r;
  })), [n, () => Wt(t)];
}
function Hu() {
  const e = /* @__PURE__ */ Object.create(null);
  return (t, n) => {
    e[n] ? X(`${t} property "${n}" is already defined in ${e[n]}.`) : e[n] = t;
  };
}
function Fu(e) {
  const t = _i(e), n = e.proxy, r = e.ctx;
  t.beforeCreate && Zr(t.beforeCreate, e, "bc");
  const {
    // state
    data: o,
    computed: i,
    methods: s,
    watch: a,
    provide: u,
    inject: f,
    // lifecycle
    created: h,
    beforeMount: c,
    mounted: y,
    beforeUpdate: M,
    updated: N,
    activated: R,
    deactivated: F,
    beforeDestroy: q,
    beforeUnmount: L,
    destroyed: J,
    unmounted: j,
    render: C,
    renderTracked: B,
    renderTriggered: g,
    errorCaptured: w,
    serverPrefetch: p,
    // public API
    expose: v,
    inheritAttrs: d,
    // assets
    components: l,
    directives: D,
    filters: S
  } = t, O = process.env.NODE_ENV !== "production" ? Hu() : null;
  if (process.env.NODE_ENV !== "production") {
    const [P] = e.propsOptions;
    if (P)
      for (const x in P)
        O("Props", x);
  }
  if (f && Uu(f, r, O), s)
    for (const P in s) {
      const x = s[P];
      G(x) ? (process.env.NODE_ENV !== "production" ? Object.defineProperty(r, P, {
        value: x.bind(n),
        configurable: !0,
        enumerable: !0,
        writable: !0
      }) : r[P] = x.bind(n), process.env.NODE_ENV !== "production" && O("Methods", P)) : process.env.NODE_ENV !== "production" && X(
        `Method "${P}" has type "${typeof x}" in the component definition. Did you reference the function correctly?`
      );
    }
  if (o) {
    process.env.NODE_ENV !== "production" && !G(o) && X(
      "The data option must be a function. Plain object usage is no longer supported."
    );
    const P = o.call(n, n);
    if (process.env.NODE_ENV !== "production" && Xn(P) && X(
      "data() returned a Promise - note data() cannot be async; If you intend to perform data fetching before component renders, use async setup() + <Suspense>."
    ), !ee(P))
      process.env.NODE_ENV !== "production" && X("data() should return an object.");
    else if (e.data = $n(P), process.env.NODE_ENV !== "production")
      for (const x in P)
        O("Data", x), Di(x[0]) || Object.defineProperty(r, x, {
          configurable: !0,
          enumerable: !0,
          get: () => P[x],
          set: me
        });
  }
  if (i)
    for (const P in i) {
      const x = i[P], I = G(x) ? x.bind(n, n) : G(x.get) ? x.get.bind(n, n) : me;
      process.env.NODE_ENV !== "production" && I === me && X(`Computed property "${P}" has no getter.`);
      const U = !G(x) && G(x.set) ? x.set.bind(n) : process.env.NODE_ENV !== "production" ? () => {
        X(
          `Write operation failed: computed property "${P}" is readonly.`
        );
      } : me, $ = ll({
        get: I,
        set: U
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
      ki(a[P], r, n, P);
  if (u) {
    const P = G(u) ? u.call(n) : u;
    Reflect.ownKeys(P).forEach((x) => {
      Wu(x, P[x]);
    });
  }
  h && Zr(h, e, "c");
  function Q(P, x) {
    Y(x) ? x.forEach((I) => P(I.bind(n))) : x && P(x.bind(n));
  }
  if (Q(Ru, c), Q(Bu, y), Q(xu, M), Q(Mu, N), Q(ku, R), Q(_u, F), Q(Ju, w), Q(Iu, B), Q(Lu, g), Q(Pu, L), Q(Si, j), Q(Tu, p), Y(v))
    if (v.length) {
      const P = e.exposed || (e.exposed = {});
      v.forEach((x) => {
        Object.defineProperty(P, x, {
          get: () => n[x],
          set: (I) => n[x] = I
        });
      });
    } else
      e.exposed || (e.exposed = {});
  C && e.render === me && (e.render = C), d != null && (e.inheritAttrs = d), l && (e.components = l), D && (e.directives = D);
}
function Uu(e, t, n = me) {
  Y(e) && (e = qn(e));
  for (const r in e) {
    const o = e[r];
    let i;
    ee(o) ? "default" in o ? i = mn(
      o.from || r,
      o.default,
      !0
      /* treat default function as factory */
    ) : i = mn(o.from || r) : i = mn(o), le(i) ? Object.defineProperty(t, r, {
      enumerable: !0,
      configurable: !0,
      get: () => i.value,
      set: (s) => i.value = s
    }) : t[r] = i, process.env.NODE_ENV !== "production" && n("Inject", r);
  }
}
function Zr(e, t, n) {
  yt(
    Y(e) ? e.map((r) => r.bind(t.proxy)) : e.bind(t.proxy),
    t,
    n
  );
}
function ki(e, t, n, r) {
  const o = r.includes(".") ? Su(n, r) : () => n[r];
  if (Ae(e)) {
    const i = t[e];
    G(i) ? wn(o, i) : process.env.NODE_ENV !== "production" && X(`Invalid watch handler specified by key "${e}"`, i);
  } else if (G(e))
    wn(o, e.bind(n));
  else if (ee(e))
    if (Y(e))
      e.forEach((i) => ki(i, t, n, r));
    else {
      const i = G(e.handler) ? e.handler.bind(n) : t[e.handler];
      G(i) ? wn(o, i, e) : process.env.NODE_ENV !== "production" && X(`Invalid watch handler specified by key "${e.handler}"`, i);
    }
  else
    process.env.NODE_ENV !== "production" && X(`Invalid watch option: "${r}"`, e);
}
function _i(e) {
  const t = e.type, { mixins: n, extends: r } = t, {
    mixins: o,
    optionsCache: i,
    config: { optionMergeStrategies: s }
  } = e.appContext, a = i.get(t);
  let u;
  return a ? u = a : !o.length && !n && !r ? u = t : (u = {}, o.length && o.forEach(
    (f) => Kt(u, f, s, !0)
  ), Kt(u, t, s)), ee(t) && i.set(t, u), u;
}
function Kt(e, t, n, r = !1) {
  const { mixins: o, extends: i } = t;
  i && Kt(e, i, n, !0), o && o.forEach(
    (s) => Kt(e, s, n, !0)
  );
  for (const s in t)
    if (r && s === "expose")
      process.env.NODE_ENV !== "production" && X(
        '"expose" option is ignored when declared in mixins or extends. It should only be declared in the base component itself.'
      );
    else {
      const a = Ku[s] || n && n[s];
      e[s] = a ? a(e[s], t[s]) : t[s];
    }
  return e;
}
const Ku = {
  data: $r,
  props: eo,
  emits: eo,
  // objects
  methods: ht,
  computed: ht,
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
  components: ht,
  directives: ht,
  // watch
  watch: Vu,
  // provide / inject
  provide: $r,
  inject: zu
};
function $r(e, t) {
  return t ? e ? function() {
    return fe(
      G(e) ? e.call(this, this) : e,
      G(t) ? t.call(this, this) : t
    );
  } : t : e;
}
function zu(e, t) {
  return ht(qn(e), qn(t));
}
function qn(e) {
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
function ht(e, t) {
  return e ? fe(/* @__PURE__ */ Object.create(null), e, t) : t;
}
function eo(e, t) {
  return e ? Y(e) && Y(t) ? [.../* @__PURE__ */ new Set([...e, ...t])] : fe(
    /* @__PURE__ */ Object.create(null),
    Gr(e),
    Gr(t ?? {})
  ) : t;
}
function Vu(e, t) {
  if (!e)
    return t;
  if (!t)
    return e;
  const n = fe(/* @__PURE__ */ Object.create(null), e);
  for (const r in t)
    n[r] = ae(e[r], t[r]);
  return n;
}
let to = null;
function Wu(e, t) {
  if (!se)
    process.env.NODE_ENV !== "production" && X("provide() can only be used inside setup().");
  else {
    let n = se.provides;
    const r = se.parent && se.parent.provides;
    r === n && (n = se.provides = Object.create(r)), n[e] = t;
  }
}
function mn(e, t, n = !1) {
  const r = se || Ce;
  if (r || to) {
    const o = r ? r.parent == null ? r.vnode.appContext && r.vnode.appContext.provides : r.parent.provides : to._context.provides;
    if (o && e in o)
      return o[e];
    if (arguments.length > 1)
      return n && G(t) ? t.call(r && r.proxy) : t;
    process.env.NODE_ENV !== "production" && X(`injection "${String(e)}" not found.`);
  } else
    process.env.NODE_ENV !== "production" && X("inject() can only be used inside setup() or functional components.");
}
let Bt, Te;
function Xu(e, t) {
  e.appContext.config.performance && zt() && Te.mark(`vue-${t}-${e.uid}`), process.env.NODE_ENV !== "production" && du(e, t, zt() ? Te.now() : Date.now());
}
function Yu(e, t) {
  if (e.appContext.config.performance && zt()) {
    const n = `vue-${t}-${e.uid}`, r = n + ":end";
    Te.mark(r), Te.measure(
      `<${dr(e, e.type)}> ${t}`,
      n,
      r
    ), Te.clearMarks(n), Te.clearMarks(r);
  }
  process.env.NODE_ENV !== "production" && fu(e, t, zt() ? Te.now() : Date.now());
}
function zt() {
  return Bt !== void 0 || (typeof window < "u" && window.performance ? (Bt = !0, Te = window.performance) : Bt = !1), Bt;
}
const no = Ou, Gu = (e) => e.__isTeleport, sr = Symbol.for("v-fgt"), Ni = Symbol.for("v-txt"), ut = Symbol.for("v-cmt"), Jt = [];
let ye = null;
function at(e = !1) {
  Jt.push(ye = e ? null : []);
}
function Ri() {
  Jt.pop(), ye = Jt[Jt.length - 1] || null;
}
let lt = 1;
function ro(e) {
  lt += e;
}
function Bi(e) {
  return e.dynamicChildren = lt > 0 ? ye || ic : null, Ri(), lt > 0 && ye && ye.push(e), e;
}
function yn(e, t, n, r, o, i) {
  return Bi(
    Vt(
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
function xi(e, t, n, r, o) {
  return Bi(
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
function ar(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
function vn(e, t) {
  return process.env.NODE_ENV !== "production" && t.shapeFlag & 6 && et.has(t.type) ? (e.shapeFlag &= -257, t.shapeFlag &= -513, !1) : e.type === t.type && e.key === t.key;
}
const Zu = (...e) => Ti(
  ...e
), Mi = "__vInternal", Pi = ({ key: e }) => e ?? null, Qt = ({
  ref: e,
  ref_key: t,
  ref_for: n
}) => (typeof e == "number" && (e = "" + e), e != null ? Ae(e) || le(e) || G(e) ? { i: Ce, r: e, k: t, f: !!n } : e : null);
function Vt(e, t = null, n = null, r = 0, o = null, i = e === sr ? 0 : 1, s = !1, a = !1) {
  const u = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && Pi(t),
    ref: t && Qt(t),
    scopeId: bi,
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
    ctx: Ce
  };
  return a ? (cr(u, n), i & 128 && e.normalize(u)) : n && (u.shapeFlag |= Ae(n) ? 8 : 16), process.env.NODE_ENV !== "production" && u.key !== u.key && X("VNode created with invalid key (NaN). VNode type:", u.type), lt > 0 && // avoid a block node from tracking itself
  !s && // has current parent block
  ye && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (u.patchFlag > 0 || i & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  u.patchFlag !== 32 && ye.push(u), u;
}
const Ie = process.env.NODE_ENV !== "production" ? Zu : Ti;
function Ti(e, t = null, n = null, r = 0, o = null, i = !1) {
  if ((!e || e === Qu) && (process.env.NODE_ENV !== "production" && !e && X(`Invalid vnode type when creating vnode: ${e}.`), e = ut), ar(e)) {
    const a = bt(
      e,
      t,
      !0
      /* mergeRef: true */
    );
    return n && cr(a, n), lt > 0 && !i && ye && (a.shapeFlag & 6 ? ye[ye.indexOf(e)] = a : ye.push(a)), a.patchFlag |= -2, a;
  }
  if (Ji(e) && (e = e.__vccOpts), t) {
    t = $u(t);
    let { class: a, style: u } = t;
    a && !Ae(a) && (t.class = ot(a)), ee(u) && (Qn(u) && !Y(u) && (u = fe({}, u)), t.style = Gn(u));
  }
  const s = Ae(e) ? 1 : gu(e) ? 128 : Gu(e) ? 64 : ee(e) ? 4 : G(e) ? 2 : 0;
  return process.env.NODE_ENV !== "production" && s & 4 && Qn(e) && (e = V(e), X(
    "Vue received a Component which was made a reactive object. This can lead to unnecessary performance overhead, and should be avoided by marking the component with `markRaw` or using `shallowRef` instead of `ref`.",
    `
Component that was made reactive: `,
    e
  )), Vt(
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
  return e ? Qn(e) || Mi in e ? fe({}, e) : e : null;
}
function bt(e, t, n = !1) {
  const { props: r, ref: o, patchFlag: i, children: s } = e, a = t ? rl(r || {}, t) : r;
  return {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: a,
    key: a && Pi(a),
    ref: t && t.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      n && o ? Y(o) ? o.concat(Qt(t)) : [o, Qt(t)] : Qt(t)
    ) : o,
    scopeId: e.scopeId,
    slotScopeIds: e.slotScopeIds,
    children: process.env.NODE_ENV !== "production" && i === -1 && Y(s) ? s.map(Li) : s,
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
function Li(e) {
  const t = bt(e);
  return Y(e.children) && (t.children = e.children.map(Li)), t;
}
function el(e = " ", t = 0) {
  return Ie(Ni, null, e, t);
}
function oo(e = "", t = !1) {
  return t ? (at(), xi(ut, null, e)) : Ie(ut, null, e);
}
function tl(e) {
  return e == null || typeof e == "boolean" ? Ie(ut) : Y(e) ? Ie(
    sr,
    null,
    // #3666, avoid reference pollution when reusing vnode
    e.slice()
  ) : typeof e == "object" ? nl(e) : Ie(Ni, null, String(e));
}
function nl(e) {
  return e.el === null && e.patchFlag !== -1 || e.memo ? e : bt(e);
}
function cr(e, t) {
  let n = 0;
  const { shapeFlag: r } = e;
  if (t == null)
    t = null;
  else if (Y(t))
    n = 16;
  else if (typeof t == "object")
    if (r & 65) {
      const o = t.default;
      o && (o._c && (o._d = !1), cr(e, o()), o._c && (o._d = !0));
      return;
    } else {
      n = 32;
      const o = t._;
      !o && !(Mi in t) ? t._ctx = Ce : o === 3 && Ce && (Ce.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
    }
  else
    G(t) ? (t = { default: t, _ctx: Ce }, n = 32) : (t = String(t), r & 64 ? (n = 16, t = [el(t)]) : n = 8);
  e.children = t, e.shapeFlag |= n;
}
function rl(...e) {
  const t = {};
  for (let n = 0; n < e.length; n++) {
    const r = e[n];
    for (const o in r)
      if (o === "class")
        t.class !== r.class && (t.class = ot([t.class, r.class]));
      else if (o === "style")
        t.style = Gn([t.style, r.style]);
      else if (ac(o)) {
        const i = t[o], s = r[o];
        s && i !== s && !(Y(i) && i.includes(s)) && (t[o] = i ? [].concat(i, s) : s);
      } else
        o !== "" && (t[o] = r[o]);
  }
  return t;
}
let se = null;
const ol = () => se || Ce;
let ur, Ge, io = "__VUE_INSTANCE_SETTERS__";
(Ge = Mn()[io]) || (Ge = Mn()[io] = []), Ge.push((e) => se = e), ur = (e) => {
  Ge.length > 1 ? Ge.forEach((t) => t(e)) : Ge[0](e);
};
const Wt = (e) => {
  ur(e), e.scope.on();
}, lr = () => {
  se && se.scope.off(), ur(null);
};
let il = !1;
function sl(e, t, n) {
  G(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : ee(t) ? (process.env.NODE_ENV !== "production" && ar(t) && X(
    "setup() should not return VNodes directly - return a render function instead."
  ), process.env.NODE_ENV !== "production" && (e.devtoolsRawSetupState = t), e.setupState = zc(t), process.env.NODE_ENV !== "production" && ju(e)) : process.env.NODE_ENV !== "production" && t !== void 0 && X(
    `setup() should return an object. Received: ${t === null ? "null" : typeof t}`
  ), al(e, n);
}
let so;
function al(e, t, n) {
  const r = e.type;
  if (!e.render) {
    if (!t && so && !r.render) {
      const o = r.template || _i(e).template;
      if (o) {
        process.env.NODE_ENV !== "production" && Xu(e, "compile");
        const { isCustomElement: i, compilerOptions: s } = e.appContext.config, { delimiters: a, compilerOptions: u } = r, f = fe(
          fe(
            {
              isCustomElement: i,
              delimiters: a
            },
            s
          ),
          u
        );
        r.render = so(o, f), process.env.NODE_ENV !== "production" && Yu(e, "compile");
      }
    }
    e.render = r.render || me;
  }
  Wt(e), rn(), Fu(e), on(), lr(), process.env.NODE_ENV !== "production" && !r.render && e.render === me && !t && (r.template ? X(
    'Component provided template option but runtime compilation is not supported in this build of Vue. Configure your bundler to alias "vue" to "vue/dist/vue.esm-bundler.js".'
    /* should not happen */
  ) : X("Component is missing template or render function."));
}
const cl = /(?:^|[-_])(\w)/g, ul = (e) => e.replace(cl, (t) => t.toUpperCase()).replace(/[-_]/g, "");
function Ii(e, t = !0) {
  return G(e) ? e.displayName || e.name : e.name || t && e.__name;
}
function dr(e, t, n = !1) {
  let r = Ii(t);
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
  return r ? ul(r) : n ? "App" : "Anonymous";
}
function Ji(e) {
  return G(e) && "__vccOpts" in e;
}
const ll = (e, t) => Wc(e, t, il);
function An(e) {
  return !!(e && e.__v_isShallow);
}
function dl() {
  if (process.env.NODE_ENV === "production" || typeof window > "u")
    return;
  const e = { style: "color:#3ba776" }, t = { style: "color:#0b1bc9" }, n = { style: "color:#b62e24" }, r = { style: "color:#9d288c" }, o = {
    header(c) {
      return ee(c) ? c.__isVue ? ["div", e, "VueInstance"] : le(c) ? [
        "div",
        {},
        ["span", e, h(c)],
        "<",
        a(c.value),
        ">"
      ] : Ke(c) ? [
        "div",
        {},
        ["span", e, An(c) ? "ShallowReactive" : "Reactive"],
        "<",
        a(c),
        `>${We(c) ? " (readonly)" : ""}`
      ] : We(c) ? [
        "div",
        {},
        ["span", e, An(c) ? "ShallowReadonly" : "Readonly"],
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
    const y = [];
    c.type.props && c.props && y.push(s("props", V(c.props))), c.setupState !== xn && y.push(s("setup", c.setupState)), c.data !== xn && y.push(s("data", V(c.data)));
    const M = u(c, "computed");
    M && y.push(s("computed", M));
    const N = u(c, "inject");
    return N && y.push(s("injected", N)), y.push([
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
    ]), y;
  }
  function s(c, y) {
    return y = fe({}, y), Object.keys(y).length ? [
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
        ...Object.keys(y).map((M) => [
          "div",
          {},
          ["span", r, M + ": "],
          a(y[M], !1)
        ])
      ]
    ] : ["span", {}];
  }
  function a(c, y = !0) {
    return typeof c == "number" ? ["span", t, c] : typeof c == "string" ? ["span", n, JSON.stringify(c)] : typeof c == "boolean" ? ["span", r, c] : ee(c) ? ["object", { object: y ? V(c) : c }] : ["span", n, String(c)];
  }
  function u(c, y) {
    const M = c.type;
    if (G(M))
      return;
    const N = {};
    for (const R in c.ctx)
      f(M, R, y) && (N[R] = c.ctx[R]);
    return N;
  }
  function f(c, y, M) {
    const N = c[M];
    if (Y(N) && N.includes(y) || ee(N) && y in N || c.extends && f(c.extends, y, M) || c.mixins && c.mixins.some((R) => f(R, y, M)))
      return !0;
  }
  function h(c) {
    return An(c) ? "ShallowRef" : c.effect ? "ComputedRef" : "Ref";
  }
  window.devtoolsFormatters ? window.devtoolsFormatters.push(o) : window.devtoolsFormatters = [o];
}
function fl() {
  dl();
}
process.env.NODE_ENV !== "production" && fl();
const bn = {
  numeric: "Numeric",
  alphanumeric: "Alphanumeric",
  byte: "Byte",
  kanji: "Kanji"
};
function pl(e) {
  switch (!0) {
    case /^[0-9]*$/.test(e):
      return bn.numeric;
    case /^[0-9A-Z $%*+\-./:]*$/.test(e):
      return bn.alphanumeric;
    default:
      return bn.byte;
  }
}
const xt = (e) => !!e && typeof e == "object" && !Array.isArray(e);
function Xt(e, ...t) {
  if (!t.length)
    return e;
  const n = t.shift();
  return n === void 0 || !xt(e) || !xt(n) ? e : (e = { ...e }, Object.keys(n).forEach((r) => {
    const o = e[r], i = n[r];
    Array.isArray(o) && Array.isArray(i) ? e[r] = i : xt(o) && xt(i) ? e[r] = Xt(Object.assign({}, o), i) : e[r] = i;
  }), Xt(e, ...t));
}
function hl(e, t) {
  const n = document.createElement("a");
  n.download = t, n.href = e, document.body.appendChild(n), n.click(), document.body.removeChild(n);
}
function gl({
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
const wl = {
  L: 0.07,
  M: 0.15,
  Q: 0.25,
  H: 0.3
}, Ze = {
  dots: "dots",
  rounded: "rounded",
  classy: "classy",
  classyRounded: "classy-rounded",
  square: "square",
  extraRounded: "extra-rounded"
};
class On {
  constructor({ context: t, type: n }) {
    ue(this, "_context"), ue(this, "_type"), this._context = t, this._type = n;
  }
  draw(t, n, r, o) {
    const i = this._context, s = this._type;
    let a;
    switch (s) {
      case Ze.dots:
        a = this._drawDot;
        break;
      case Ze.classy:
        a = this._drawClassy;
        break;
      case Ze.classyRounded:
        a = this._drawClassyRounded;
        break;
      case Ze.rounded:
        a = this._drawRounded;
        break;
      case Ze.extraRounded:
        a = this._drawExtraRounded;
        break;
      case Ze.square:
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
    const s = +i(-1, 0), a = +i(1, 0), u = +i(0, -1), f = +i(0, 1), h = s + a + u + f;
    if (h === 0) {
      this._basicDot({ x: t, y: n, size: r, context: o, rotation: 0 });
      return;
    }
    if (h > 2 || s && a || u && f) {
      this._basicSquare({ x: t, y: n, size: r, context: o, rotation: 0 });
      return;
    }
    if (h === 2) {
      let c = 0;
      s && u ? c = Math.PI / 2 : u && a ? c = Math.PI : a && f && (c = -Math.PI / 2), this._basicCornerRounded({ x: t, y: n, size: r, context: o, rotation: c });
      return;
    }
    if (h === 1) {
      let c = 0;
      u ? c = Math.PI / 2 : a ? c = Math.PI : f && (c = -Math.PI / 2), this._basicSideRounded({ x: t, y: n, size: r, context: o, rotation: c });
    }
  }
  _drawExtraRounded({ x: t, y: n, size: r, context: o, getNeighbor: i }) {
    const s = +i(-1, 0), a = +i(1, 0), u = +i(0, -1), f = +i(0, 1), h = s + a + u + f;
    if (h === 0) {
      this._basicDot({ x: t, y: n, size: r, context: o, rotation: 0 });
      return;
    }
    if (h > 2 || s && a || u && f) {
      this._basicSquare({ x: t, y: n, size: r, context: o, rotation: 0 });
      return;
    }
    if (h === 2) {
      let c = 0;
      s && u ? c = Math.PI / 2 : u && a ? c = Math.PI : a && f && (c = -Math.PI / 2), this._basicCornerExtraRounded({ x: t, y: n, size: r, context: o, rotation: c });
      return;
    }
    if (h === 1) {
      let c = 0;
      u ? c = Math.PI / 2 : a ? c = Math.PI : f && (c = -Math.PI / 2), this._basicSideRounded({ x: t, y: n, size: r, context: o, rotation: c });
    }
  }
  _drawClassy({ x: t, y: n, size: r, context: o, getNeighbor: i }) {
    const s = +i(-1, 0), a = +i(1, 0), u = +i(0, -1), f = +i(0, 1);
    if (s + a + u + f === 0) {
      this._basicCornersRounded({ x: t, y: n, size: r, context: o, rotation: Math.PI / 2 });
      return;
    }
    if (!s && !u) {
      this._basicCornerRounded({ x: t, y: n, size: r, context: o, rotation: -Math.PI / 2 });
      return;
    }
    if (!a && !f) {
      this._basicCornerRounded({ x: t, y: n, size: r, context: o, rotation: Math.PI / 2 });
      return;
    }
    this._basicSquare({ x: t, y: n, size: r, context: o, rotation: 0 });
  }
  _drawClassyRounded({ x: t, y: n, size: r, context: o, getNeighbor: i }) {
    const s = +i(-1, 0), a = +i(1, 0), u = +i(0, -1), f = +i(0, 1);
    if (s + a + u + f === 0) {
      this._basicCornersRounded({ x: t, y: n, size: r, context: o, rotation: Math.PI / 2 });
      return;
    }
    if (!s && !u) {
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
const En = {
  dot: "dot",
  square: "square",
  extraRounded: "extra-rounded"
};
class ml {
  constructor({ context: t, type: n }) {
    ue(this, "_context"), ue(this, "_type"), this._context = t, this._type = n;
  }
  draw(t, n, r, o) {
    const i = this._context, s = this._type;
    let a;
    switch (s) {
      case En.square:
        a = this._drawSquare;
        break;
      case En.extraRounded:
        a = this._drawExtraRounded;
        break;
      case En.dot:
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
const ao = {
  dot: "dot",
  square: "square"
};
class yl {
  constructor({ context: t, type: n }) {
    ue(this, "_context"), ue(this, "_type"), this._context = t, this._type = n;
  }
  draw(t, n, r, o) {
    const i = this._context;
    switch (this._type) {
      case ao.square:
        this._drawSquare({ x: t, y: n, size: r, context: i, rotation: o });
        break;
      case ao.dot:
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
const vl = {
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
], He = [
  [0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0],
  [0, 0, 1, 1, 1, 0, 0],
  [0, 0, 1, 1, 1, 0, 0],
  [0, 0, 1, 1, 1, 0, 0],
  [0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0]
];
class Al {
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
    let i = {
      hideXDots: 0,
      hideYDots: 0,
      width: 0,
      height: 0
    };
    if (this._qr = t, this._options.image) {
      if (await this.loadImage(), !this._image)
        return;
      const { imageOptions: s, qrOptions: a } = this._options, u = s.imageSize * wl[a.errorCorrectionLevel], f = Math.floor(u * n * n);
      i = gl({
        originalWidth: this._image.width,
        originalHeight: this._image.height,
        maxHiddenDots: f,
        maxHiddenAxisDots: n - 14,
        dotSize: o
      });
    }
    this.clear(), this.drawBackground(), this.drawDots((s, a) => {
      var u, f, h, c, y, M;
      return !(this._options.imageOptions.hideBackgroundDots && s >= (n - i.hideXDots) / 2 && s < (n + i.hideXDots) / 2 && a >= (n - i.hideYDots) / 2 && a < (n + i.hideYDots) / 2 || (u = qe[s]) != null && u[a] || (f = qe[s - n + 7]) != null && f[a] || (h = qe[s]) != null && h[a - n + 7] || (c = He[s]) != null && c[a] || (y = He[s - n + 7]) != null && y[a] || (M = He[s]) != null && M[a - n + 7]);
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
    const i = Math.min(r.width, r.height) - r.margin * 2, s = Math.floor(i / o), a = Math.floor((r.width - o * s) / 2), u = Math.floor((r.height - o * s) / 2), f = new On({ context: n, type: r.dotsOptions.type });
    n.beginPath();
    for (let h = 0; h < o; h++)
      for (let c = 0; c < o; c++)
        t && !t(h, c) || this._qr.isDark(h, c) && f.draw(
          a + h * s,
          u + c * s,
          s,
          (y, M) => h + y < 0 || c + M < 0 || h + y >= o || c + M >= o || t && !t(h + y, c + M) ? !1 : !!this._qr && this._qr.isDark(h + y, c + M)
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
      h.colorStops.forEach(({ offset: y, color: M }) => {
        c.addColorStop(y, M);
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
    const r = this._options, o = this._qr.getModuleCount(), i = Math.min(r.width, r.height) - r.margin * 2, s = Math.floor(i / o), a = s * 7, u = s * 3, f = Math.floor((r.width - o * s) / 2), h = Math.floor((r.height - o * s) / 2);
    [
      [0, 0, 0],
      [1, 0, Math.PI / 2],
      [0, 1, -Math.PI / 2]
    ].forEach(([c, y, M]) => {
      var N, R, F, q, L, J, j, C, B, g;
      if (t && !t(c, y))
        return;
      const w = f + c * s * (o - 7), p = h + y * s * (o - 7);
      if ((N = r.cornersSquareOptions) != null && N.type) {
        const v = new ml({ context: n, type: (R = r.cornersSquareOptions) == null ? void 0 : R.type });
        n.beginPath(), v.draw(w, p, a, M);
      } else {
        const v = new On({ context: n, type: r.dotsOptions.type });
        n.beginPath();
        for (let d = 0; d < qe.length; d++)
          for (let l = 0; l < qe[d].length; l++)
            (F = qe[d]) != null && F[l] && v.draw(
              w + d * s,
              p + l * s,
              s,
              (D, S) => {
                var O;
                return !!((O = qe[d + D]) != null && O[l + S]);
              }
            );
      }
      if ((q = r.cornersSquareOptions) != null && q.gradient) {
        const v = r.cornersSquareOptions.gradient, d = this._createGradient({
          context: n,
          options: v,
          additionalRotation: M,
          x: w,
          y: p,
          size: a
        });
        v.colorStops.forEach(({ offset: l, color: D }) => {
          d.addColorStop(l, D);
        }), n.fillStyle = n.strokeStyle = d;
      } else
        (L = r.cornersSquareOptions) != null && L.color && (n.fillStyle = n.strokeStyle = r.cornersSquareOptions.color);
      if (n.fill("evenodd"), (J = r.cornersDotOptions) != null && J.type) {
        const v = new yl({ context: n, type: (j = r.cornersDotOptions) == null ? void 0 : j.type });
        n.beginPath(), v.draw(w + s * 2, p + s * 2, u, M);
      } else {
        const v = new On({ context: n, type: r.dotsOptions.type });
        n.beginPath();
        for (let d = 0; d < He.length; d++)
          for (let l = 0; l < He[d].length; l++)
            (C = He[d]) != null && C[l] && v.draw(
              w + d * s,
              p + l * s,
              s,
              (D, S) => {
                var O;
                return !!((O = He[d + D]) != null && O[l + S]);
              }
            );
      }
      if ((B = r.cornersDotOptions) != null && B.gradient) {
        const v = r.cornersDotOptions.gradient, d = this._createGradient({
          context: n,
          options: v,
          additionalRotation: M,
          x: w + s * 2,
          y: p + s * 2,
          size: u
        });
        v.colorStops.forEach(({ offset: l, color: D }) => {
          d.addColorStop(l, D);
        }), n.fillStyle = n.strokeStyle = d;
      } else
        (g = r.cornersDotOptions) != null && g.color && (n.fillStyle = n.strokeStyle = r.cornersDotOptions.color);
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
    const s = this._options, a = Math.floor((s.width - r * o) / 2), u = Math.floor((s.height - r * o) / 2), f = a + s.imageOptions.margin + (r * o - t) / 2, h = u + s.imageOptions.margin + (r * o - n) / 2, c = t - s.imageOptions.margin * 2, y = n - s.imageOptions.margin * 2;
    i.drawImage(this._image, f, h, c < 0 ? 0 : c, y < 0 ? 0 : y);
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
    if (n.type === vl.radial)
      a = t.createRadialGradient(o + s / 2, i + s / 2, 0, o + s / 2, i + s / 2, s / 2);
    else {
      const u = ((n.rotation || 0) + r) % (2 * Math.PI), f = (u + 2 * Math.PI) % (2 * Math.PI);
      let h = o + s / 2, c = i + s / 2, y = o + s / 2, M = i + s / 2;
      f >= 0 && f <= 0.25 * Math.PI || f > 1.75 * Math.PI && f <= 2 * Math.PI ? (h = h - s / 2, c = c - s / 2 * Math.tan(u), y = y + s / 2, M = M + s / 2 * Math.tan(u)) : f > 0.25 * Math.PI && f <= 0.75 * Math.PI ? (c = c - s / 2, h = h - s / 2 / Math.tan(u), M = M + s / 2, y = y + s / 2 / Math.tan(u)) : f > 0.75 * Math.PI && f <= 1.25 * Math.PI ? (h = h + s / 2, c = c + s / 2 * Math.tan(u), y = y - s / 2, M = M - s / 2 * Math.tan(u)) : f > 1.25 * Math.PI && f <= 1.75 * Math.PI && (c = c + s / 2, h = h + s / 2 / Math.tan(u), M = M - s / 2, y = y - s / 2 / Math.tan(u)), a = t.createLinearGradient(Math.round(h), Math.round(c), Math.round(y), Math.round(M));
    }
    return a;
  }
}
const Qi = {};
for (let e = 0; e <= 40; e++)
  Qi[e] = e;
const bl = {
  L: "L",
  M: "M",
  Q: "Q",
  H: "H"
}, co = {
  width: 300,
  height: 300,
  data: "",
  margin: 0,
  qrOptions: {
    typeNumber: Qi[0],
    mode: void 0,
    errorCorrectionLevel: bl.Q
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
function uo(e) {
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
function Ol(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var ji = { exports: {} };
(function(e, t) {
  var n = function() {
    var r = function(C, B) {
      var g = 236, w = 17, p = C, v = i[B], d = null, l = 0, D = null, S = [], O = {}, Q = function(b, E) {
        l = p * 4 + 17, d = function(m) {
          for (var k = new Array(m), _ = 0; _ < m; _ += 1) {
            k[_] = new Array(m);
            for (var T = 0; T < m; T += 1)
              k[_][T] = null;
          }
          return k;
        }(l), P(0, 0), P(l - 7, 0), P(0, l - 7), U(), I(), de(b, E), p >= 7 && $(b), D == null && (D = Hi(p, v, S)), Oe(D, E);
      }, P = function(b, E) {
        for (var m = -1; m <= 7; m += 1)
          if (!(b + m <= -1 || l <= b + m))
            for (var k = -1; k <= 7; k += 1)
              E + k <= -1 || l <= E + k || (0 <= m && m <= 6 && (k == 0 || k == 6) || 0 <= k && k <= 6 && (m == 0 || m == 6) || 2 <= m && m <= 4 && 2 <= k && k <= 4 ? d[b + m][E + k] = !0 : d[b + m][E + k] = !1);
      }, x = function() {
        for (var b = 0, E = 0, m = 0; m < 8; m += 1) {
          Q(!0, m);
          var k = a.getLostPoint(O);
          (m == 0 || b > k) && (b = k, E = m);
        }
        return E;
      }, I = function() {
        for (var b = 8; b < l - 8; b += 1)
          d[b][6] == null && (d[b][6] = b % 2 == 0);
        for (var E = 8; E < l - 8; E += 1)
          d[6][E] == null && (d[6][E] = E % 2 == 0);
      }, U = function() {
        for (var b = a.getPatternPosition(p), E = 0; E < b.length; E += 1)
          for (var m = 0; m < b.length; m += 1) {
            var k = b[E], _ = b[m];
            if (d[k][_] == null)
              for (var T = -2; T <= 2; T += 1)
                for (var K = -2; K <= 2; K += 1)
                  T == -2 || T == 2 || K == -2 || K == 2 || T == 0 && K == 0 ? d[k + T][_ + K] = !0 : d[k + T][_ + K] = !1;
          }
      }, $ = function(b) {
        for (var E = a.getBCHTypeNumber(p), m = 0; m < 18; m += 1) {
          var k = !b && (E >> m & 1) == 1;
          d[Math.floor(m / 3)][m % 3 + l - 8 - 3] = k;
        }
        for (var m = 0; m < 18; m += 1) {
          var k = !b && (E >> m & 1) == 1;
          d[m % 3 + l - 8 - 3][Math.floor(m / 3)] = k;
        }
      }, de = function(b, E) {
        for (var m = v << 3 | E, k = a.getBCHTypeInfo(m), _ = 0; _ < 15; _ += 1) {
          var T = !b && (k >> _ & 1) == 1;
          _ < 6 ? d[_][8] = T : _ < 8 ? d[_ + 1][8] = T : d[l - 15 + _][8] = T;
        }
        for (var _ = 0; _ < 15; _ += 1) {
          var T = !b && (k >> _ & 1) == 1;
          _ < 8 ? d[8][l - _ - 1] = T : _ < 9 ? d[8][15 - _ - 1 + 1] = T : d[8][15 - _ - 1] = T;
        }
        d[l - 8][8] = !b;
      }, Oe = function(b, E) {
        for (var m = -1, k = l - 1, _ = 7, T = 0, K = a.getMaskFunction(E), H = l - 1; H > 0; H -= 2)
          for (H == 6 && (H -= 1); ; ) {
            for (var Z = 0; Z < 2; Z += 1)
              if (d[k][H - Z] == null) {
                var ne = !1;
                T < b.length && (ne = (b[T] >>> _ & 1) == 1);
                var z = K(k, H - Z);
                z && (ne = !ne), d[k][H - Z] = ne, _ -= 1, _ == -1 && (T += 1, _ = 7);
              }
            if (k += m, k < 0 || l <= k) {
              k -= m, m = -m;
              break;
            }
          }
      }, Xe = function(b, E) {
        for (var m = 0, k = 0, _ = 0, T = new Array(E.length), K = new Array(E.length), H = 0; H < E.length; H += 1) {
          var Z = E[H].dataCount, ne = E[H].totalCount - Z;
          k = Math.max(k, Z), _ = Math.max(_, ne), T[H] = new Array(Z);
          for (var z = 0; z < T[H].length; z += 1)
            T[H][z] = 255 & b.getBuffer()[z + m];
          m += Z;
          var pe = a.getErrorCorrectPolynomial(ne), he = f(T[H], pe.getLength() - 1), pr = he.mod(pe);
          K[H] = new Array(pe.getLength() - 1);
          for (var z = 0; z < K[H].length; z += 1) {
            var hr = z + pr.getLength() - K[H].length;
            K[H][z] = hr >= 0 ? pr.getAt(hr) : 0;
          }
        }
        for (var gr = 0, z = 0; z < E.length; z += 1)
          gr += E[z].totalCount;
        for (var cn = new Array(gr), Ct = 0, z = 0; z < k; z += 1)
          for (var H = 0; H < E.length; H += 1)
            z < T[H].length && (cn[Ct] = T[H][z], Ct += 1);
        for (var z = 0; z < _; z += 1)
          for (var H = 0; H < E.length; H += 1)
            z < K[H].length && (cn[Ct] = K[H][z], Ct += 1);
        return cn;
      }, Hi = function(b, E, m) {
        for (var k = h.getRSBlocks(b, E), _ = c(), T = 0; T < m.length; T += 1) {
          var K = m[T];
          _.put(K.getMode(), 4), _.put(K.getLength(), a.getLengthInBits(K.getMode(), b)), K.write(_);
        }
        for (var H = 0, T = 0; T < k.length; T += 1)
          H += k[T].dataCount;
        if (_.getLengthInBits() > H * 8)
          throw "code length overflow. (" + _.getLengthInBits() + ">" + H * 8 + ")";
        for (_.getLengthInBits() + 4 <= H * 8 && _.put(0, 4); _.getLengthInBits() % 8 != 0; )
          _.putBit(!1);
        for (; !(_.getLengthInBits() >= H * 8 || (_.put(g, 8), _.getLengthInBits() >= H * 8)); )
          _.put(w, 8);
        return Xe(_, k);
      };
      O.addData = function(b, E) {
        E = E || "Byte";
        var m = null;
        switch (E) {
          case "Numeric":
            m = y(b);
            break;
          case "Alphanumeric":
            m = M(b);
            break;
          case "Byte":
            m = N(b);
            break;
          case "Kanji":
            m = R(b);
            break;
          default:
            throw "mode:" + E;
        }
        S.push(m), D = null;
      }, O.isDark = function(b, E) {
        if (b < 0 || l <= b || E < 0 || l <= E)
          throw b + "," + E;
        return d[b][E];
      }, O.getModuleCount = function() {
        return l;
      }, O.make = function() {
        if (p < 1) {
          for (var b = 1; b < 40; b++) {
            for (var E = h.getRSBlocks(b, v), m = c(), k = 0; k < S.length; k++) {
              var _ = S[k];
              m.put(_.getMode(), 4), m.put(_.getLength(), a.getLengthInBits(_.getMode(), b)), _.write(m);
            }
            for (var T = 0, k = 0; k < E.length; k++)
              T += E[k].dataCount;
            if (m.getLengthInBits() <= T * 8)
              break;
          }
          p = b;
        }
        Q(!1, x());
      }, O.createTableTag = function(b, E) {
        b = b || 2, E = typeof E > "u" ? b * 4 : E;
        var m = "";
        m += '<table style="', m += " border-width: 0px; border-style: none;", m += " border-collapse: collapse;", m += " padding: 0px; margin: " + E + "px;", m += '">', m += "<tbody>";
        for (var k = 0; k < O.getModuleCount(); k += 1) {
          m += "<tr>";
          for (var _ = 0; _ < O.getModuleCount(); _ += 1)
            m += '<td style="', m += " border-width: 0px; border-style: none;", m += " border-collapse: collapse;", m += " padding: 0px; margin: 0px;", m += " width: " + b + "px;", m += " height: " + b + "px;", m += " background-color: ", m += O.isDark(k, _) ? "#000000" : "#ffffff", m += ";", m += '"/>';
          m += "</tr>";
        }
        return m += "</tbody>", m += "</table>", m;
      }, O.createSvgTag = function(b, E, m, k) {
        var _ = {};
        typeof arguments[0] == "object" && (_ = arguments[0], b = _.cellSize, E = _.margin, m = _.alt, k = _.title), b = b || 2, E = typeof E > "u" ? b * 4 : E, m = typeof m == "string" ? { text: m } : m || {}, m.text = m.text || null, m.id = m.text ? m.id || "qrcode-description" : null, k = typeof k == "string" ? { text: k } : k || {}, k.text = k.text || null, k.id = k.text ? k.id || "qrcode-title" : null;
        var T = O.getModuleCount() * b + E * 2, K, H, Z, ne, z = "", pe;
        for (pe = "l" + b + ",0 0," + b + " -" + b + ",0 0,-" + b + "z ", z += '<svg version="1.1" xmlns="http://www.w3.org/2000/svg"', z += _.scalable ? "" : ' width="' + T + 'px" height="' + T + 'px"', z += ' viewBox="0 0 ' + T + " " + T + '" ', z += ' preserveAspectRatio="xMinYMin meet"', z += k.text || m.text ? ' role="img" aria-labelledby="' + Ye([k.id, m.id].join(" ").trim()) + '"' : "", z += ">", z += k.text ? '<title id="' + Ye(k.id) + '">' + Ye(k.text) + "</title>" : "", z += m.text ? '<description id="' + Ye(m.id) + '">' + Ye(m.text) + "</description>" : "", z += '<rect width="100%" height="100%" fill="white" cx="0" cy="0"/>', z += '<path d="', Z = 0; Z < O.getModuleCount(); Z += 1)
          for (ne = Z * b + E, K = 0; K < O.getModuleCount(); K += 1)
            O.isDark(Z, K) && (H = K * b + E, z += "M" + H + "," + ne + pe);
        return z += '" stroke="transparent" fill="black"/>', z += "</svg>", z;
      }, O.createDataURL = function(b, E) {
        b = b || 2, E = typeof E > "u" ? b * 4 : E;
        var m = O.getModuleCount() * b + E * 2, k = E, _ = m - E;
        return j(m, m, function(T, K) {
          if (k <= T && T < _ && k <= K && K < _) {
            var H = Math.floor((T - k) / b), Z = Math.floor((K - k) / b);
            return O.isDark(Z, H) ? 0 : 1;
          } else
            return 1;
        });
      }, O.createImgTag = function(b, E, m) {
        b = b || 2, E = typeof E > "u" ? b * 4 : E;
        var k = O.getModuleCount() * b + E * 2, _ = "";
        return _ += "<img", _ += ' src="', _ += O.createDataURL(b, E), _ += '"', _ += ' width="', _ += k, _ += '"', _ += ' height="', _ += k, _ += '"', m && (_ += ' alt="', _ += Ye(m), _ += '"'), _ += "/>", _;
      };
      var Ye = function(b) {
        for (var E = "", m = 0; m < b.length; m += 1) {
          var k = b.charAt(m);
          switch (k) {
            case "<":
              E += "&lt;";
              break;
            case ">":
              E += "&gt;";
              break;
            case "&":
              E += "&amp;";
              break;
            case '"':
              E += "&quot;";
              break;
            default:
              E += k;
              break;
          }
        }
        return E;
      }, Fi = function(b) {
        var E = 1;
        b = typeof b > "u" ? E * 2 : b;
        var m = O.getModuleCount() * E + b * 2, k = b, _ = m - b, T, K, H, Z, ne, z = {
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
        for (T = 0; T < m; T += 2) {
          for (H = Math.floor((T - k) / E), Z = Math.floor((T + 1 - k) / E), K = 0; K < m; K += 1)
            ne = "█", k <= K && K < _ && k <= T && T < _ && O.isDark(H, Math.floor((K - k) / E)) && (ne = " "), k <= K && K < _ && k <= T + 1 && T + 1 < _ && O.isDark(Z, Math.floor((K - k) / E)) ? ne += " " : ne += "█", he += b < 1 && T + 1 >= _ ? pe[ne] : z[ne];
          he += `
`;
        }
        return m % 2 && b > 0 ? he.substring(0, he.length - m - 1) + Array(m + 1).join("▀") : he.substring(0, he.length - 1);
      };
      return O.createASCII = function(b, E) {
        if (b = b || 1, b < 2)
          return Fi(E);
        b -= 1, E = typeof E > "u" ? b * 2 : E;
        var m = O.getModuleCount() * b + E * 2, k = E, _ = m - E, T, K, H, Z, ne = Array(b + 1).join("██"), z = Array(b + 1).join("  "), pe = "", he = "";
        for (T = 0; T < m; T += 1) {
          for (H = Math.floor((T - k) / b), he = "", K = 0; K < m; K += 1)
            Z = 1, k <= K && K < _ && k <= T && T < _ && O.isDark(H, Math.floor((K - k) / b)) && (Z = 0), he += Z ? ne : z;
          for (H = 0; H < b; H += 1)
            pe += he + `
`;
        }
        return pe.substring(0, pe.length - 1);
      }, O.renderTo2dContext = function(b, E) {
        E = E || 2;
        for (var m = O.getModuleCount(), k = 0; k < m; k++)
          for (var _ = 0; _ < m; _++)
            b.fillStyle = O.isDark(k, _) ? "black" : "white", b.fillRect(k * E, _ * E, E, E);
      }, O;
    };
    r.stringToBytesFuncs = {
      default: function(C) {
        for (var B = [], g = 0; g < C.length; g += 1) {
          var w = C.charCodeAt(g);
          B.push(w & 255);
        }
        return B;
      }
    }, r.stringToBytes = r.stringToBytesFuncs.default, r.createStringToBytes = function(C, B) {
      var g = function() {
        for (var p = L(C), v = function() {
          var I = p.read();
          if (I == -1)
            throw "eof";
          return I;
        }, d = 0, l = {}; ; ) {
          var D = p.read();
          if (D == -1)
            break;
          var S = v(), O = v(), Q = v(), P = String.fromCharCode(D << 8 | S), x = O << 8 | Q;
          l[P] = x, d += 1;
        }
        if (d != B)
          throw d + " != " + B;
        return l;
      }(), w = "?".charCodeAt(0);
      return function(p) {
        for (var v = [], d = 0; d < p.length; d += 1) {
          var l = p.charCodeAt(d);
          if (l < 128)
            v.push(l);
          else {
            var D = g[p.charAt(d)];
            typeof D == "number" ? (D & 255) == D ? v.push(D) : (v.push(D >>> 8), v.push(D & 255)) : v.push(w);
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
      ], B = 1335, g = 7973, w = 21522, p = {}, v = function(d) {
        for (var l = 0; d != 0; )
          l += 1, d >>>= 1;
        return l;
      };
      return p.getBCHTypeInfo = function(d) {
        for (var l = d << 10; v(l) - v(B) >= 0; )
          l ^= B << v(l) - v(B);
        return (d << 10 | l) ^ w;
      }, p.getBCHTypeNumber = function(d) {
        for (var l = d << 12; v(l) - v(g) >= 0; )
          l ^= g << v(l) - v(g);
        return d << 12 | l;
      }, p.getPatternPosition = function(d) {
        return C[d - 1];
      }, p.getMaskFunction = function(d) {
        switch (d) {
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
            throw "bad maskPattern:" + d;
        }
      }, p.getErrorCorrectPolynomial = function(d) {
        for (var l = f([1], 0), D = 0; D < d; D += 1)
          l = l.multiply(f([1, u.gexp(D)], 0));
        return l;
      }, p.getLengthInBits = function(d, l) {
        if (1 <= l && l < 10)
          switch (d) {
            case o.MODE_NUMBER:
              return 10;
            case o.MODE_ALPHA_NUM:
              return 9;
            case o.MODE_8BIT_BYTE:
              return 8;
            case o.MODE_KANJI:
              return 8;
            default:
              throw "mode:" + d;
          }
        else if (l < 27)
          switch (d) {
            case o.MODE_NUMBER:
              return 12;
            case o.MODE_ALPHA_NUM:
              return 11;
            case o.MODE_8BIT_BYTE:
              return 16;
            case o.MODE_KANJI:
              return 10;
            default:
              throw "mode:" + d;
          }
        else if (l < 41)
          switch (d) {
            case o.MODE_NUMBER:
              return 14;
            case o.MODE_ALPHA_NUM:
              return 13;
            case o.MODE_8BIT_BYTE:
              return 16;
            case o.MODE_KANJI:
              return 12;
            default:
              throw "mode:" + d;
          }
        else
          throw "type:" + l;
      }, p.getLostPoint = function(d) {
        for (var l = d.getModuleCount(), D = 0, S = 0; S < l; S += 1)
          for (var O = 0; O < l; O += 1) {
            for (var Q = 0, P = d.isDark(S, O), x = -1; x <= 1; x += 1)
              if (!(S + x < 0 || l <= S + x))
                for (var I = -1; I <= 1; I += 1)
                  O + I < 0 || l <= O + I || x == 0 && I == 0 || P == d.isDark(S + x, O + I) && (Q += 1);
            Q > 5 && (D += 3 + Q - 5);
          }
        for (var S = 0; S < l - 1; S += 1)
          for (var O = 0; O < l - 1; O += 1) {
            var U = 0;
            d.isDark(S, O) && (U += 1), d.isDark(S + 1, O) && (U += 1), d.isDark(S, O + 1) && (U += 1), d.isDark(S + 1, O + 1) && (U += 1), (U == 0 || U == 4) && (D += 3);
          }
        for (var S = 0; S < l; S += 1)
          for (var O = 0; O < l - 6; O += 1)
            d.isDark(S, O) && !d.isDark(S, O + 1) && d.isDark(S, O + 2) && d.isDark(S, O + 3) && d.isDark(S, O + 4) && !d.isDark(S, O + 5) && d.isDark(S, O + 6) && (D += 40);
        for (var O = 0; O < l; O += 1)
          for (var S = 0; S < l - 6; S += 1)
            d.isDark(S, O) && !d.isDark(S + 1, O) && d.isDark(S + 2, O) && d.isDark(S + 3, O) && d.isDark(S + 4, O) && !d.isDark(S + 5, O) && d.isDark(S + 6, O) && (D += 40);
        for (var $ = 0, O = 0; O < l; O += 1)
          for (var S = 0; S < l; S += 1)
            d.isDark(S, O) && ($ += 1);
        var de = Math.abs(100 * $ / l / l - 50) / 5;
        return D += de * 10, D;
      }, p;
    }(), u = function() {
      for (var C = new Array(256), B = new Array(256), g = 0; g < 8; g += 1)
        C[g] = 1 << g;
      for (var g = 8; g < 256; g += 1)
        C[g] = C[g - 4] ^ C[g - 5] ^ C[g - 6] ^ C[g - 8];
      for (var g = 0; g < 255; g += 1)
        B[C[g]] = g;
      var w = {};
      return w.glog = function(p) {
        if (p < 1)
          throw "glog(" + p + ")";
        return B[p];
      }, w.gexp = function(p) {
        for (; p < 0; )
          p += 255;
        for (; p >= 256; )
          p -= 255;
        return C[p];
      }, w;
    }();
    function f(C, B) {
      if (typeof C.length > "u")
        throw C.length + "/" + B;
      var g = function() {
        for (var p = 0; p < C.length && C[p] == 0; )
          p += 1;
        for (var v = new Array(C.length - p + B), d = 0; d < C.length - p; d += 1)
          v[d] = C[d + p];
        return v;
      }(), w = {};
      return w.getAt = function(p) {
        return g[p];
      }, w.getLength = function() {
        return g.length;
      }, w.multiply = function(p) {
        for (var v = new Array(w.getLength() + p.getLength() - 1), d = 0; d < w.getLength(); d += 1)
          for (var l = 0; l < p.getLength(); l += 1)
            v[d + l] ^= u.gexp(u.glog(w.getAt(d)) + u.glog(p.getAt(l)));
        return f(v, 0);
      }, w.mod = function(p) {
        if (w.getLength() - p.getLength() < 0)
          return w;
        for (var v = u.glog(w.getAt(0)) - u.glog(p.getAt(0)), d = new Array(w.getLength()), l = 0; l < w.getLength(); l += 1)
          d[l] = w.getAt(l);
        for (var l = 0; l < p.getLength(); l += 1)
          d[l] ^= u.gexp(u.glog(p.getAt(l)) + v);
        return f(d, 0).mod(p);
      }, w;
    }
    var h = function() {
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
      ], B = function(p, v) {
        var d = {};
        return d.totalCount = p, d.dataCount = v, d;
      }, g = {}, w = function(p, v) {
        switch (v) {
          case i.L:
            return C[(p - 1) * 4 + 0];
          case i.M:
            return C[(p - 1) * 4 + 1];
          case i.Q:
            return C[(p - 1) * 4 + 2];
          case i.H:
            return C[(p - 1) * 4 + 3];
          default:
            return;
        }
      };
      return g.getRSBlocks = function(p, v) {
        var d = w(p, v);
        if (typeof d > "u")
          throw "bad rs block @ typeNumber:" + p + "/errorCorrectionLevel:" + v;
        for (var l = d.length / 3, D = [], S = 0; S < l; S += 1)
          for (var O = d[S * 3 + 0], Q = d[S * 3 + 1], P = d[S * 3 + 2], x = 0; x < O; x += 1)
            D.push(B(Q, P));
        return D;
      }, g;
    }(), c = function() {
      var C = [], B = 0, g = {};
      return g.getBuffer = function() {
        return C;
      }, g.getAt = function(w) {
        var p = Math.floor(w / 8);
        return (C[p] >>> 7 - w % 8 & 1) == 1;
      }, g.put = function(w, p) {
        for (var v = 0; v < p; v += 1)
          g.putBit((w >>> p - v - 1 & 1) == 1);
      }, g.getLengthInBits = function() {
        return B;
      }, g.putBit = function(w) {
        var p = Math.floor(B / 8);
        C.length <= p && C.push(0), w && (C[p] |= 128 >>> B % 8), B += 1;
      }, g;
    }, y = function(C) {
      var B = o.MODE_NUMBER, g = C, w = {};
      w.getMode = function() {
        return B;
      }, w.getLength = function(d) {
        return g.length;
      }, w.write = function(d) {
        for (var l = g, D = 0; D + 2 < l.length; )
          d.put(p(l.substring(D, D + 3)), 10), D += 3;
        D < l.length && (l.length - D == 1 ? d.put(p(l.substring(D, D + 1)), 4) : l.length - D == 2 && d.put(p(l.substring(D, D + 2)), 7));
      };
      var p = function(d) {
        for (var l = 0, D = 0; D < d.length; D += 1)
          l = l * 10 + v(d.charAt(D));
        return l;
      }, v = function(d) {
        if ("0" <= d && d <= "9")
          return d.charCodeAt(0) - "0".charCodeAt(0);
        throw "illegal char :" + d;
      };
      return w;
    }, M = function(C) {
      var B = o.MODE_ALPHA_NUM, g = C, w = {};
      w.getMode = function() {
        return B;
      }, w.getLength = function(v) {
        return g.length;
      }, w.write = function(v) {
        for (var d = g, l = 0; l + 1 < d.length; )
          v.put(
            p(d.charAt(l)) * 45 + p(d.charAt(l + 1)),
            11
          ), l += 2;
        l < d.length && v.put(p(d.charAt(l)), 6);
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
      return w;
    }, N = function(C) {
      var B = o.MODE_8BIT_BYTE, g = r.stringToBytes(C), w = {};
      return w.getMode = function() {
        return B;
      }, w.getLength = function(p) {
        return g.length;
      }, w.write = function(p) {
        for (var v = 0; v < g.length; v += 1)
          p.put(g[v], 8);
      }, w;
    }, R = function(C) {
      var B = o.MODE_KANJI, g = r.stringToBytesFuncs.SJIS;
      if (!g)
        throw "sjis not supported.";
      (function(v, d) {
        var l = g(v);
        if (l.length != 2 || (l[0] << 8 | l[1]) != d)
          throw "sjis not supported.";
      })("友", 38726);
      var w = g(C), p = {};
      return p.getMode = function() {
        return B;
      }, p.getLength = function(v) {
        return ~~(w.length / 2);
      }, p.write = function(v) {
        for (var d = w, l = 0; l + 1 < d.length; ) {
          var D = (255 & d[l]) << 8 | 255 & d[l + 1];
          if (33088 <= D && D <= 40956)
            D -= 33088;
          else if (57408 <= D && D <= 60351)
            D -= 49472;
          else
            throw "illegal char at " + (l + 1) + "/" + D;
          D = (D >>> 8 & 255) * 192 + (D & 255), v.put(D, 13), l += 2;
        }
        if (l < d.length)
          throw "illegal char at " + (l + 1);
      }, p;
    }, F = function() {
      var C = [], B = {};
      return B.writeByte = function(g) {
        C.push(g & 255);
      }, B.writeShort = function(g) {
        B.writeByte(g), B.writeByte(g >>> 8);
      }, B.writeBytes = function(g, w, p) {
        w = w || 0, p = p || g.length;
        for (var v = 0; v < p; v += 1)
          B.writeByte(g[v + w]);
      }, B.writeString = function(g) {
        for (var w = 0; w < g.length; w += 1)
          B.writeByte(g.charCodeAt(w));
      }, B.toByteArray = function() {
        return C;
      }, B.toString = function() {
        var g = "";
        g += "[";
        for (var w = 0; w < C.length; w += 1)
          w > 0 && (g += ","), g += C[w];
        return g += "]", g;
      }, B;
    }, q = function() {
      var C = 0, B = 0, g = 0, w = "", p = {}, v = function(l) {
        w += String.fromCharCode(d(l & 63));
      }, d = function(l) {
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
        for (C = C << 8 | l & 255, B += 8, g += 1; B >= 6; )
          v(C >>> B - 6), B -= 6;
      }, p.flush = function() {
        if (B > 0 && (v(C << 6 - B), C = 0, B = 0), g % 3 != 0)
          for (var l = 3 - g % 3, D = 0; D < l; D += 1)
            w += "=";
      }, p.toString = function() {
        return w;
      }, p;
    }, L = function(C) {
      var B = C, g = 0, w = 0, p = 0, v = {};
      v.read = function() {
        for (; p < 8; ) {
          if (g >= B.length) {
            if (p == 0)
              return -1;
            throw "unexpected end of file./" + p;
          }
          var l = B.charAt(g);
          if (g += 1, l == "=")
            return p = 0, -1;
          l.match(/^\s$/) || (w = w << 6 | d(l.charCodeAt(0)), p += 6);
        }
        var D = w >>> p - 8 & 255;
        return p -= 8, D;
      };
      var d = function(l) {
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
    }, J = function(C, B) {
      var g = C, w = B, p = new Array(C * B), v = {};
      v.setPixel = function(S, O, Q) {
        p[O * g + S] = Q;
      }, v.write = function(S) {
        S.writeString("GIF87a"), S.writeShort(g), S.writeShort(w), S.writeByte(128), S.writeByte(0), S.writeByte(0), S.writeByte(0), S.writeByte(0), S.writeByte(0), S.writeByte(255), S.writeByte(255), S.writeByte(255), S.writeString(","), S.writeShort(0), S.writeShort(0), S.writeShort(g), S.writeShort(w), S.writeByte(0);
        var O = 2, Q = l(O);
        S.writeByte(O);
        for (var P = 0; Q.length - P > 255; )
          S.writeByte(255), S.writeBytes(Q, P, 255), P += 255;
        S.writeByte(Q.length - P), S.writeBytes(Q, P, Q.length - P), S.writeByte(0), S.writeString(";");
      };
      var d = function(S) {
        var O = S, Q = 0, P = 0, x = {};
        return x.write = function(I, U) {
          if (I >>> U)
            throw "length over";
          for (; Q + U >= 8; )
            O.writeByte(255 & (I << Q | P)), U -= 8 - Q, I >>>= 8 - Q, P = 0, Q = 0;
          P = I << Q | P, Q = Q + U;
        }, x.flush = function() {
          Q > 0 && O.writeByte(P);
        }, x;
      }, l = function(S) {
        for (var O = 1 << S, Q = (1 << S) + 1, P = S + 1, x = D(), I = 0; I < O; I += 1)
          x.add(String.fromCharCode(I));
        x.add(String.fromCharCode(O)), x.add(String.fromCharCode(Q));
        var U = F(), $ = d(U);
        $.write(O, P);
        var de = 0, Oe = String.fromCharCode(p[de]);
        for (de += 1; de < p.length; ) {
          var Xe = String.fromCharCode(p[de]);
          de += 1, x.contains(Oe + Xe) ? Oe = Oe + Xe : ($.write(x.indexOf(Oe), P), x.size() < 4095 && (x.size() == 1 << P && (P += 1), x.add(Oe + Xe)), Oe = Xe);
        }
        return $.write(x.indexOf(Oe), P), $.write(Q, P), $.flush(), U.toByteArray();
      }, D = function() {
        var S = {}, O = 0, Q = {};
        return Q.add = function(P) {
          if (Q.contains(P))
            throw "dup key:" + P;
          S[P] = O, O += 1;
        }, Q.size = function() {
          return O;
        }, Q.indexOf = function(P) {
          return S[P];
        }, Q.contains = function(P) {
          return typeof S[P] < "u";
        }, Q;
      };
      return v;
    }, j = function(C, B, g) {
      for (var w = J(C, B), p = 0; p < B; p += 1)
        for (var v = 0; v < C; v += 1)
          w.setPixel(v, p, g(v, p));
      var d = F();
      w.write(d);
      for (var l = q(), D = d.toByteArray(), S = 0; S < D.length; S += 1)
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
})(ji);
var El = ji.exports;
const Cl = /* @__PURE__ */ Ol(El);
class fr {
  constructor(t) {
    ue(this, "_options"), ue(this, "_container"), ue(this, "_canvas"), ue(this, "_qr"), ue(this, "_drawingPromise"), this._options = t ? uo(Xt(co, t)) : co, this.update();
  }
  static _clearContainer(t) {
    t && (t.innerHTML = "");
  }
  update(t) {
    fr._clearContainer(this._container), this._options = t ? uo(Xt(this._options, t)) : this._options, this._options.data && (this._qr = Cl(this._options.qrOptions.typeNumber, this._options.qrOptions.errorCorrectionLevel), this._qr.addData(this._options.data, this._options.qrOptions.mode || pl(this._options.data)), this._qr.make(), this._canvas = new Al(this._options), this._drawingPromise = this._canvas.drawQR(this._qr), this.append(this._container));
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
      hl(i, `${o}.${r}`);
    });
  }
}
const Sl = ["src"], Dl = { key: 1 }, kl = /* @__PURE__ */ Ei({
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
    let i = ([t, n] = qu(() => o.getImageUrl(r.fileExt)), t = await t, n(), t);
    function s() {
      o.download(r.downloadOptions);
    }
    return (a, u) => (at(), yn("div", null, [
      It(i) ? (at(), yn("div", {
        key: 0,
        class: ot(a.myclass)
      }, [
        Vt("img", {
          src: It(i),
          class: ot(a.imgclass),
          crossorigin: "anonymous"
        }, null, 10, Sl)
      ], 2)) : oo("", !0),
      It(i) && a.download ? (at(), yn("div", Dl, [
        Vt("button", {
          onClick: s,
          class: ot(a.downloadButton)
        }, gc(a.ButtonName), 3)
      ])) : oo("", !0)
    ]));
  }
}), lo = /* @__PURE__ */ Ei({
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
    return (n, r) => (at(), xi(mu, null, {
      default: pu(() => [
        Ie(kl, {
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
}), _l = /* @__PURE__ */ wo({
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
    const t = e;
    Wi((s) => ({
      "1c16c5c3": t.width,
      "4cf2f8ca": t.height,
      "0bff7872": r.value,
      "8a49077a": o.value
    }));
    const n = oe(t.dark ?? !1), r = oe(t.mobileWidth ?? t.width), o = oe(t.mobileHeight ?? t.height), i = oe(null);
    return po(() => {
      mo(() => {
        if (!t.disabled && i.value !== null) {
          let s = 1.5, a = setInterval(function() {
            s -= 0.1, i.value !== null && (i.value.style.animationDuration = s + "s", s <= 0.8 && clearInterval(a));
          }, 1e4);
        }
      });
    }), (s, a) => (we(), _e("div", {
      ref_key: "loader",
      ref: i,
      class: Xi([n.value && "skeleton-loader_dark", !n.value && "skeleton-loader"])
    }, null, 2));
  }
});
const Nl = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [r, o] of t)
    n[r] = o;
  return n;
}, qi = /* @__PURE__ */ Nl(_l, [["__scopeId", "data-v-6be6455f"]]), Rl = "data:image/png;base64,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", fo = "data:image/png;base64,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", Bl = { style: { "text-align": "center" } }, xl = ["title", "onClick"], Ml = {
  key: 1,
  style: { "text-align": "center" }
}, Pl = ["onClick"], Tl = ["src"], Ll = /* @__PURE__ */ rt("br", null, null, -1), Il = /* @__PURE__ */ rt("br", null, null, -1), Jl = { key: 0 }, Ql = {
  key: 2,
  style: { "text-align": "center", width: "300px", height: "300px" }
}, jl = ["onClick"], ql = /* @__PURE__ */ rt("i", {
  class: "fas fa-unlink",
  style: { "font-size": "155px", color: "red", padding: "10px", "padding-top": "60px", "vertical-align": "middle" },
  "aria-hidden": "true"
}, null, -1), Hl = [
  ql
], Fl = ["innerHTML"], Ul = /* @__PURE__ */ wo({
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
    const n = e, r = (w, p) => {
      w === "error" ? (t("error", p), n.errorLog && console.log("Error event received with payload:", p)) : w === "redirect" ? (t("redirect", p), n.errorLog && console.log("Redirect event received with payload:", p)) : w === "status" ? (t("status", p), n.errorLog && console.log("Status event received with payload:", p)) : w === "user" && (t("user", p), n.errorLog && console.log("User event received with payload:", p));
    }, { t: o } = yo(), { auth: i, loginQRCode: s, checkQRLogin: a, success: u, IsDark: f, QRCode: h, Message: c, IDLogin: y, setBase: M, readMessage: N, setUrls: R, setRoutes: F, is_error: q } = tc(r), L = oe(!1);
    ie("locale", "en");
    const J = Yi(() => (f.value = n.isDark, u.value === !0 && (c.value = N()), n.isDark)), j = oe(0);
    function C() {
      u.value = !1, i.value < 2 || y.value === $e.create().toString() ? s() : a(), i.value === -1 && (j.value++, j.value > 3 && (i.value = 0), setTimeout(C, 500));
    }
    function B() {
      window.location.reload();
    }
    cs(() => {
      f.value = n.isDark, M(n.configDev, n.configProduction, n.region, n.errorLog, n.interval, n.accessTimeout), F(n.configApp, n.configLogin, n.enableCheck), R(n.configRequest, n.configVerify, n.configConfirm, n.configLogout), setTimeout(C, 500), mo(() => {
        u.value === !0 ? L.value = !0 : L.value = !1;
      });
    });
    function g() {
      h.value == null || h.value == null || h.value == "" || window.open(h.value, "new_window");
    }
    return (w, p) => (we(), _e("div", null, [
      rt("div", null, [
        rt("div", Bl, [
          re(u) && !n.isMobileScreen ? (we(), _e("div", {
            key: 0,
            title: re(o)("auth.codelight"),
            onClick: [
              g,
              un(g, ["prevent"])
            ],
            target: "_blank",
            style: { "text-align": "center", cursor: "pointer" }
          }, [
            J.value ? (we(), ln(re(lo), {
              key: re(h),
              width: 300,
              height: 300,
              value: re(h),
              image: e.logoDark.length == 0 ? re(Rl) : "",
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
                color: n.primaryDark,
                gradient: {
                  type: "linear",
                  rotation: 0,
                  colorStops: [
                    { offset: 0, color: n.primaryDark },
                    { offset: 1, color: n.primaryDark }
                  ]
                }
              },
              "background-options": { color: n.secondaryDark },
              "corners-square-options": { type: "dot", color: n.positionDark },
              "corners-dot-options": { type: void 0, color: n.positionDark },
              download: !1
            }, null, 8, ["value", "image", "dots-options", "background-options", "corners-square-options", "corners-dot-options"])) : je("", !0),
            J.value ? je("", !0) : (we(), ln(re(lo), {
              key: re(h),
              width: 300,
              height: 300,
              value: re(h),
              image: e.logoDark.length == 0 ? re(fo) : "",
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
                color: n.primaryLight,
                gradient: {
                  type: "linear",
                  rotation: 0,
                  colorStops: [
                    { offset: 0, color: n.primaryLight },
                    { offset: 1, color: n.primaryLight }
                  ]
                }
              },
              "background-options": { color: n.secondaryLight },
              "corners-square-options": { type: "dot", color: n.positionLight },
              "corners-dot-options": { type: void 0, color: n.positionLight },
              download: !1
            }, null, 8, ["value", "image", "dots-options", "background-options", "corners-square-options", "corners-dot-options"]))
          ], 8, xl)) : re(u) && n.isMobileScreen ? (we(), _e("div", Ml, [
            L.value ? (we(), _e("button", {
              key: 0,
              style: Gi([{ width: "300px", height: "300px" }, [J.value ? { backgroundColor: n.primaryDark, color: n.accentColor } : { backgroundColor: n.primaryLight, color: n.accentColor }]]),
              onClick: [
                g,
                un(g, ["prevent"])
              ]
            }, [
              rt("img", {
                width: "150",
                src: e.logoDark.length == 0 ? re(fo) : ""
              }, null, 8, Tl),
              Ll,
              Il,
              e.hideText ? je("", !0) : (we(), _e("span", Jl, Zi(re(o)("auth.login")), 1))
            ], 12, Pl)) : je("", !0)
          ])) : (we(), _e("div", Ql, [
            re(q) ? (we(), _e("div", {
              key: 0,
              onClick: [
                B,
                un(B, ["prevent"])
              ],
              style: { width: "300px", height: "300px", "align-items": "middle", cursor: "pointer" }
            }, Hl, 8, jl)) : je("", !0),
            re(q) ? je("", !0) : (we(), ln(qi, {
              key: 1,
              width: "300px",
              disabled: !1,
              dark: J.value,
              height: "300px"
            }, null, 8, ["dark"]))
          ])),
          (re(u) && !n.isMobileScreen || !re(u)) && !e.hideText ? (we(), _e("div", {
            key: 3,
            innerHTML: re(c),
            style: { "text-align": "center" }
          }, null, 8, Fl)) : je("", !0)
        ])
      ])
    ]));
  }
}), zl = {
  install: (e) => {
    e.component("Login", Ul), e.component("Prelogin", qi);
  }
};
export {
  Ul as Login,
  qi as Prelogin,
  zl as default,
  tc as useNoPWD
};
