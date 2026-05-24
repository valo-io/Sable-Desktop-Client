var __defProp = Object.defineProperty;
var __typeError = (msg) => {
  throw TypeError(msg);
};
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
var __accessCheck = (obj, member, msg) => member.has(obj) || __typeError("Cannot " + msg);
var __privateGet = (obj, member, getter) => (__accessCheck(obj, member, "read from private field"), getter ? getter.call(obj) : member.get(obj));
var __privateAdd = (obj, member, value) => member.has(obj) ? __typeError("Cannot add the same private member more than once") : member instanceof WeakSet ? member.add(obj) : member.set(obj, value);
var __privateSet = (obj, member, value, setter) => (__accessCheck(obj, member, "write to private field"), setter ? setter.call(obj, value) : member.set(obj, value), value);
var __privateMethod = (obj, member, method) => (__accessCheck(obj, member, "access private method"), method);
var __privateWrapper = (obj, member, setter, getter) => ({
  set _(value) {
    __privateSet(obj, member, value, setter);
  },
  get _() {
    return __privateGet(obj, member, getter);
  }
});
let Qt, Xt, X, $, Zt, Zi, Jt, pt, $n, Rt, Qe, wt, mt, Ce, qe, ki, At, Pe, zt, on, Ii, vt, xn, Sn, me, ji, Ke, he, Di, kt, ni, R, Ze, Hs, jn, Kr, Bs, De, Gn, zr, Bn, Nn, Re, Os, On, si, Gi, er, Us, $i, Mi, Ft, Rn, js, ee, H, dt, Ns, qr;
let __tla = (async () => {
  var _R_static, _a, t_fn, e_fn, _b, _c, _t, _t2, _e2, _s2, _i2, _a2, _r2, _n2, _zn_instances, o_fn, h_fn, l_fn, u_fn, d_fn, _t3, _e3, _s3, _i3, _a3, _r3, _n3, _o, _h, __e_static, l_fn2, __e_instances, u_fn2, d_fn2, f_fn, m_get, _t4, _e4, _s4, _Vn_instances, i_fn, a_fn, r_fn, _t5, _e5, _s5, _i4, _t6, _t7, _e6, _s6, _zi_instances, i_fn2, _t8, _e7, _s7, _i5, _Fe_instances, t_fn2, _t9, _e8, _s8, _i6, _a4, _r4, _n4, _o2, _h2, _l, _u, _d, _f, _m, _g, _c2, _p, _b2, _A, _y, __, _S, _v, _T, _w, _x, _M, _P, _k, _N, _D, _R, _O, _F, _z, _C, _E, _L, _U, _$, _X, _W, _Y, _j, _B, _V, _Q2, _Z, _H, _d2, _Zt_instances, J_fn, tt_fn, nt_fn, rt_fn, at_fn, q_fn, ot_fn, lt_fn, ht_fn, et_fn, ct_fn, dt_fn, ut_fn, ft_fn, I_fn, G_fn, pt_fn, gt_fn, it_fn, mt_get, K_fn, st_fn, _t10, _e9, _s9, _i7, _a5, _r5, _n5, _o3, _h3, _l2, _u2, _d3, _f2, _Gt_instances, m_get2, g_fn, _t11, _e10, _s10, _i8, _a6, _r6, _n6, _o4, _h4, _l3, _He_instances, u_fn3, _t12, _e11, _s11, _i9, _a7, _r7, _n7, _o5, _h5, _l4, _u3, _d4, _ni_instances, f_fn2, m_fn, g_fn2, _e12, _t13, _e13, _s12, _i10, _a8, _r8, _n8, _o6, _h6, _l5, _u4, _d5, _f3, _m2, _g2, _c3, _p2, _b3, _A2, _y2, __2, _S2, _v2, _T2, _w2, _x2, _U_instances, M_fn, _U_static, P_fn, k_fn, N_fn, D_fn, R_fn, O_fn, F_fn, z_fn, C_fn, E_fn, L_fn, U_fn, $_fn, X_fn, W_fn, Y_fn, j_fn, B_fn, _t14, _e14, _s13, _i11, _Wi_instances, a_fn2, _t15, _t16, _t17, _t18, _e15, _s14, _fe_instances, i_fn3, _t19, _e16, _s15, _pe_instances, i_fn4, _t20, _e17, _s16, _i12, _a9, _r9, _n9, _o7, _et_instances, h_fn2, l_fn3, u_fn4, _t21, _e18, _s17, _i13, _a10, _r10, _n10, _o8, _t22, _t23, _e19, _t24, _Se_instances, e_fn2, s_fn, i_fn5, a_fn3, _t25, _t26, _e20, _s18, _i14, _a11, _r11, _n11, _nr_instances, o_get, h_get, l_get, u_fn5, d_fn3, f_fn3, m_fn2, g_fn3, c_fn, p_fn, b_fn, A_fn, _t27, _e21, _t28, _e22, _s19, _i15, _a12, _r12, _n12, _o9, _h7, _l6, _u5, _d6, _f4, _m3, _g3, _c4, _p3, _dr_instances, b_fn2, _t29, _e23, _s20, _i16, _a13, _ge_instances, t_fn3, e_fn3, s_fn2, _f5, _t30, _e24, _t31, _e25, _t32, _e26, _s21, _i17, _t33, _e27, _s22, _i18, _Cr_instances, a_fn4, _t34, _e28, _Tr_instances, t_fn4, _t35, _t36, _t37, _Fr_instances, e_fn4, s_fn3, _t38, _Br_instances, e_fn5, s_fn4, i_fn6, a_fn5, _t39, _Nr_instances, e_fn6, s_fn5, i_fn7, _t40, _an_instances, e_fn7, _g4, _t41, _e29, _s23, _i19, _a14, _r13, _n13, _o10, _h8, _l7, _u6, _d7, _f6, _m4, _g5, _c5, _p4, _b4, _h9, _A3, _y3, __3, _S3, _v3, _kt_instances, T_fn, w_fn, x_fn, _kt_static, M_fn2, P_fn2, k_fn2, N_fn2, _t42, _t43, _e30, _s24, _i20, _i21, _t44, _e31, _Wr_instances, s_fn6, _t45, _e32, _s25, _i22, _j2, _a15, _r14, _n14, __this_instances, o_fn2, h_fn3, l_fn4, u_fn6, __this_static, d_get, _t46, _e33, _s26, _i23, _a16, _r15, _n15, _o11, _Xr_instances, h_fn4, l_fn5, u_fn7, _t47, _e34, _t48, _e35, _s27, _i24, _a17, _r16, _n16, _o12, _h10, _l8, _k2, _u7, _Rt_instances, d_fn4, f_fn4, m_fn3, g_fn4, c_fn2, p_get, _t49, _e36, _s28, _i25, _t50, _e37, _s29, _lt_instances, i_fn8, _Ji_instances, t_fn5, e_fn8, s_fn7, _Ni_instances, t_fn6, _t51, _e38, _s30, _i26, _a18, _r17, _n17, _o13, _h11, _l9, _u8, _d8, _f7, _m5, _g6, _c6, _p5, _b5, _A4, _y4, __4, _S4, _v4, _T3, _w3, _x3, _oa_instances, M_fn3, P_fn3, k_fn3, N_fn3, D_get, R_get, O_get, F_fn2, z_fn2, C_fn2, E_fn2, L_fn2, U_fn2, _t52, _t53, _t54, _t55, _t56, _e39, _Qi_instances, s_fn8, _t57, _ma_instances, e_fn9, _t58, _e40, _s31, _i27, _a19, _r18, _n18, _o14, _Zi_instances, h_fn5, l_fn6, _l10, _t59, _e41, _s32, _i28, _yt_instances, a_fn6, r_fn2, n_fn, o_fn3, _yt_static, h_fn6, l_fn7, u_fn8, d_fn5, f_fn5, _t60, _e42, _s33, _i29, _a20, _r19, _n19, _o15, _h12, _l11, _u9, _d9, _f8, _m6, _g7, _c7, _te_instances, p_fn2, b_fn3, A_fn2, y_fn, __fn, S_fn, v_fn, _t61, _e43, _s34, _i30, _a21, _r20, _n20, _fn_instances, o_fn4, _t62, _e44, _s35, _i31, _a22, _Oi_instances, r_fn3, n_fn2, o_fn5, h_fn7, l_fn8, _t63, _e45, _t64, _e46, _s36, _i32, _a23, _r21, _n21, _o16, _h13, _l12, _u10, _d10, _f9, _m7, _g8, _c8, _p6, _b6, _ut_instances, A_fn3, y_fn2, __fn2, S_fn2, v_fn2, T_fn2, w_fn2, _ut_static, x_fn2, M_fn4, P_fn4, k_fn4, N_fn4, D_fn2, R_fn2, O_fn2, F_fn3, _t65, _t66, _e47, _s37, _i33, _a24, _J_instances, r_fn4, n_fn3, o_fn6, h_fn8, l_fn9, u_fn9, d_fn6, f_fn6, _t67, _e48, _s38, _i34, _a25, _r22, _n22, _o17, _h14, _l13, _u11, _Aa_instances, d_fn7, _t68, _e49, _s39, _i35, _a26, _r23, _n23, _o18, _h15, _Be_instances, l_fn10, u_fn10, d_fn8, f_fn7, _ts_instances, t_fn7, _m8, _t69, _he_static, e_fn10, _s40, i_fn9, a_fn7, r_fn5, n_fn4, o_fn7, h_fn9, l_fn11, u_fn11, d_fn9, f_fn8, _t70, _e50, _s41, _i36, _t71, _e51, _s42, _i37, _a27, _r24, _n24, _o19, _h16, _l14, _u12, _wa_instances, d_fn10, f_fn9, m_fn4, g_fn5, c_fn3, p_fn3, b_fn4, A_fn4, _t72, _e52, _s43, _i38, _a28, _r25, _n25, _o20, _h17, _l15, _u13, _d11, _f10, _m9, _g9, _c9, _n26, _p7, _Xt_instances, b_get, A_fn5, y_get, __fn3, S_fn3, v_fn3, _t73, _e53, _s44, _o21, _i39, _wt_static, a_fn8, _wt_instances, r_fn6, n_fn5, o_fn8;
  var bi = {}, be = {}, ns;
  function wn() {
    if (ns) return be;
    ns = 1, be.byteLength = a, be.toByteArray = l, be.fromByteArray = f;
    for (var d = [], t = [], e = typeof Uint8Array < "u" ? Uint8Array : Array, i = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", s = 0, n = i.length; s < n; ++s) d[s] = i[s], t[i.charCodeAt(s)] = s;
    t[45] = 62, t[95] = 63;
    function r(g) {
      var b = g.length;
      if (b % 4 > 0) throw new Error("Invalid string. Length must be a multiple of 4");
      var m = g.indexOf("=");
      m === -1 && (m = b);
      var w = m === b ? 0 : 4 - m % 4;
      return [
        m,
        w
      ];
    }
    function a(g) {
      var b = r(g), m = b[0], w = b[1];
      return (m + w) * 3 / 4 - w;
    }
    function o(g, b, m) {
      return (b + m) * 3 / 4 - m;
    }
    function l(g) {
      var b, m = r(g), w = m[0], A = m[1], S = new e(o(g, w, A)), E = 0, C = A > 0 ? w - 4 : w, x;
      for (x = 0; x < C; x += 4) b = t[g.charCodeAt(x)] << 18 | t[g.charCodeAt(x + 1)] << 12 | t[g.charCodeAt(x + 2)] << 6 | t[g.charCodeAt(x + 3)], S[E++] = b >> 16 & 255, S[E++] = b >> 8 & 255, S[E++] = b & 255;
      return A === 2 && (b = t[g.charCodeAt(x)] << 2 | t[g.charCodeAt(x + 1)] >> 4, S[E++] = b & 255), A === 1 && (b = t[g.charCodeAt(x)] << 10 | t[g.charCodeAt(x + 1)] << 4 | t[g.charCodeAt(x + 2)] >> 2, S[E++] = b >> 8 & 255, S[E++] = b & 255), S;
    }
    function h(g) {
      return d[g >> 18 & 63] + d[g >> 12 & 63] + d[g >> 6 & 63] + d[g & 63];
    }
    function c(g, b, m) {
      for (var w, A = [], S = b; S < m; S += 3) w = (g[S] << 16 & 16711680) + (g[S + 1] << 8 & 65280) + (g[S + 2] & 255), A.push(h(w));
      return A.join("");
    }
    function f(g) {
      for (var b, m = g.length, w = m % 3, A = [], S = 16383, E = 0, C = m - w; E < C; E += S) A.push(c(g, E, E + S > C ? C : E + S));
      return w === 1 ? (b = g[m - 1], A.push(d[b >> 2] + d[b << 4 & 63] + "==")) : w === 2 && (b = (g[m - 2] << 8) + g[m - 1], A.push(d[b >> 10] + d[b >> 4 & 63] + d[b << 2 & 63] + "=")), A.join("");
    }
    return be;
  }
  var Ue = {};
  var rs;
  function vn() {
    return rs || (rs = 1, Ue.read = function(d, t, e, i, s) {
      var n, r, a = s * 8 - i - 1, o = (1 << a) - 1, l = o >> 1, h = -7, c = e ? s - 1 : 0, f = e ? -1 : 1, g = d[t + c];
      for (c += f, n = g & (1 << -h) - 1, g >>= -h, h += a; h > 0; n = n * 256 + d[t + c], c += f, h -= 8) ;
      for (r = n & (1 << -h) - 1, n >>= -h, h += i; h > 0; r = r * 256 + d[t + c], c += f, h -= 8) ;
      if (n === 0) n = 1 - l;
      else {
        if (n === o) return r ? NaN : (g ? -1 : 1) * (1 / 0);
        r = r + Math.pow(2, i), n = n - l;
      }
      return (g ? -1 : 1) * r * Math.pow(2, n - i);
    }, Ue.write = function(d, t, e, i, s, n) {
      var r, a, o, l = n * 8 - s - 1, h = (1 << l) - 1, c = h >> 1, f = s === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0, g = i ? 0 : n - 1, b = i ? 1 : -1, m = t < 0 || t === 0 && 1 / t < 0 ? 1 : 0;
      for (t = Math.abs(t), isNaN(t) || t === 1 / 0 ? (a = isNaN(t) ? 1 : 0, r = h) : (r = Math.floor(Math.log(t) / Math.LN2), t * (o = Math.pow(2, -r)) < 1 && (r--, o *= 2), r + c >= 1 ? t += f / o : t += f * Math.pow(2, 1 - c), t * o >= 2 && (r++, o /= 2), r + c >= h ? (a = 0, r = h) : r + c >= 1 ? (a = (t * o - 1) * Math.pow(2, s), r = r + c) : (a = t * Math.pow(2, c - 1) * Math.pow(2, s), r = 0)); s >= 8; d[e + g] = a & 255, g += b, a /= 256, s -= 8) ;
      for (r = r << s | a, l += s; l > 0; d[e + g] = r & 255, g += b, r /= 256, l -= 8) ;
      d[e + g - b] |= m * 128;
    }), Ue;
  }
  var as;
  function En() {
    return as || (as = 1, (function(d) {
      const t = wn(), e = vn(), i = typeof Symbol == "function" && typeof Symbol.for == "function" ? /* @__PURE__ */ Symbol.for("nodejs.util.inspect.custom") : null;
      d.Buffer = a, d.SlowBuffer = S, d.INSPECT_MAX_BYTES = 50;
      const s = 2147483647;
      d.kMaxLength = s, a.TYPED_ARRAY_SUPPORT = n(), !a.TYPED_ARRAY_SUPPORT && typeof console < "u" && typeof console.error == "function" && console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support.");
      function n() {
        try {
          const y = new Uint8Array(1), u = {
            foo: function() {
              return 42;
            }
          };
          return Object.setPrototypeOf(u, Uint8Array.prototype), Object.setPrototypeOf(y, u), y.foo() === 42;
        } catch {
          return false;
        }
      }
      Object.defineProperty(a.prototype, "parent", {
        enumerable: true,
        get: function() {
          if (a.isBuffer(this)) return this.buffer;
        }
      }), Object.defineProperty(a.prototype, "offset", {
        enumerable: true,
        get: function() {
          if (a.isBuffer(this)) return this.byteOffset;
        }
      });
      function r(y) {
        if (y > s) throw new RangeError('The value "' + y + '" is invalid for option "size"');
        const u = new Uint8Array(y);
        return Object.setPrototypeOf(u, a.prototype), u;
      }
      function a(y, u, p) {
        if (typeof y == "number") {
          if (typeof u == "string") throw new TypeError('The "string" argument must be of type string. Received type number');
          return c(y);
        }
        return o(y, u, p);
      }
      a.poolSize = 8192;
      function o(y, u, p) {
        if (typeof y == "string") return f(y, u);
        if (ArrayBuffer.isView(y)) return b(y);
        if (y == null) throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof y);
        if (Ut(y, ArrayBuffer) || y && Ut(y.buffer, ArrayBuffer) || typeof SharedArrayBuffer < "u" && (Ut(y, SharedArrayBuffer) || y && Ut(y.buffer, SharedArrayBuffer))) return m(y, u, p);
        if (typeof y == "number") throw new TypeError('The "value" argument must not be of type number. Received type number');
        const v = y.valueOf && y.valueOf();
        if (v != null && v !== y) return a.from(v, u, p);
        const _ = w(y);
        if (_) return _;
        if (typeof Symbol < "u" && Symbol.toPrimitive != null && typeof y[Symbol.toPrimitive] == "function") return a.from(y[Symbol.toPrimitive]("string"), u, p);
        throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof y);
      }
      a.from = function(y, u, p) {
        return o(y, u, p);
      }, Object.setPrototypeOf(a.prototype, Uint8Array.prototype), Object.setPrototypeOf(a, Uint8Array);
      function l(y) {
        if (typeof y != "number") throw new TypeError('"size" argument must be of type number');
        if (y < 0) throw new RangeError('The value "' + y + '" is invalid for option "size"');
      }
      function h(y, u, p) {
        return l(y), y <= 0 ? r(y) : u !== void 0 ? typeof p == "string" ? r(y).fill(u, p) : r(y).fill(u) : r(y);
      }
      a.alloc = function(y, u, p) {
        return h(y, u, p);
      };
      function c(y) {
        return l(y), r(y < 0 ? 0 : A(y) | 0);
      }
      a.allocUnsafe = function(y) {
        return c(y);
      }, a.allocUnsafeSlow = function(y) {
        return c(y);
      };
      function f(y, u) {
        if ((typeof u != "string" || u === "") && (u = "utf8"), !a.isEncoding(u)) throw new TypeError("Unknown encoding: " + u);
        const p = E(y, u) | 0;
        let v = r(p);
        const _ = v.write(y, u);
        return _ !== p && (v = v.slice(0, _)), v;
      }
      function g(y) {
        const u = y.length < 0 ? 0 : A(y.length) | 0, p = r(u);
        for (let v = 0; v < u; v += 1) p[v] = y[v] & 255;
        return p;
      }
      function b(y) {
        if (Ut(y, Uint8Array)) {
          const u = new Uint8Array(y);
          return m(u.buffer, u.byteOffset, u.byteLength);
        }
        return g(y);
      }
      function m(y, u, p) {
        if (u < 0 || y.byteLength < u) throw new RangeError('"offset" is outside of buffer bounds');
        if (y.byteLength < u + (p || 0)) throw new RangeError('"length" is outside of buffer bounds');
        let v;
        return u === void 0 && p === void 0 ? v = new Uint8Array(y) : p === void 0 ? v = new Uint8Array(y, u) : v = new Uint8Array(y, u, p), Object.setPrototypeOf(v, a.prototype), v;
      }
      function w(y) {
        if (a.isBuffer(y)) {
          const u = A(y.length) | 0, p = r(u);
          return p.length === 0 || y.copy(p, 0, 0, u), p;
        }
        if (y.length !== void 0) return typeof y.length != "number" || mi(y.length) ? r(0) : g(y);
        if (y.type === "Buffer" && Array.isArray(y.data)) return g(y.data);
      }
      function A(y) {
        if (y >= s) throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + s.toString(16) + " bytes");
        return y | 0;
      }
      function S(y) {
        return +y != y && (y = 0), a.alloc(+y);
      }
      a.isBuffer = function(u) {
        return u != null && u._isBuffer === true && u !== a.prototype;
      }, a.compare = function(u, p) {
        if (Ut(u, Uint8Array) && (u = a.from(u, u.offset, u.byteLength)), Ut(p, Uint8Array) && (p = a.from(p, p.offset, p.byteLength)), !a.isBuffer(u) || !a.isBuffer(p)) throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');
        if (u === p) return 0;
        let v = u.length, _ = p.length;
        for (let P = 0, M = Math.min(v, _); P < M; ++P) if (u[P] !== p[P]) {
          v = u[P], _ = p[P];
          break;
        }
        return v < _ ? -1 : _ < v ? 1 : 0;
      }, a.isEncoding = function(u) {
        switch (String(u).toLowerCase()) {
          case "hex":
          case "utf8":
          case "utf-8":
          case "ascii":
          case "latin1":
          case "binary":
          case "base64":
          case "ucs2":
          case "ucs-2":
          case "utf16le":
          case "utf-16le":
            return true;
          default:
            return false;
        }
      }, a.concat = function(u, p) {
        if (!Array.isArray(u)) throw new TypeError('"list" argument must be an Array of Buffers');
        if (u.length === 0) return a.alloc(0);
        let v;
        if (p === void 0) for (p = 0, v = 0; v < u.length; ++v) p += u[v].length;
        const _ = a.allocUnsafe(p);
        let P = 0;
        for (v = 0; v < u.length; ++v) {
          let M = u[v];
          if (Ut(M, Uint8Array)) P + M.length > _.length ? (a.isBuffer(M) || (M = a.from(M)), M.copy(_, P)) : Uint8Array.prototype.set.call(_, M, P);
          else if (a.isBuffer(M)) M.copy(_, P);
          else throw new TypeError('"list" argument must be an Array of Buffers');
          P += M.length;
        }
        return _;
      };
      function E(y, u) {
        if (a.isBuffer(y)) return y.length;
        if (ArrayBuffer.isView(y) || Ut(y, ArrayBuffer)) return y.byteLength;
        if (typeof y != "string") throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type ' + typeof y);
        const p = y.length, v = arguments.length > 2 && arguments[2] === true;
        if (!v && p === 0) return 0;
        let _ = false;
        for (; ; ) switch (u) {
          case "ascii":
          case "latin1":
          case "binary":
            return p;
          case "utf8":
          case "utf-8":
            return gi(y).length;
          case "ucs2":
          case "ucs-2":
          case "utf16le":
          case "utf-16le":
            return p * 2;
          case "hex":
            return p >>> 1;
          case "base64":
            return ss(y).length;
          default:
            if (_) return v ? -1 : gi(y).length;
            u = ("" + u).toLowerCase(), _ = true;
        }
      }
      a.byteLength = E;
      function C(y, u, p) {
        let v = false;
        if ((u === void 0 || u < 0) && (u = 0), u > this.length || ((p === void 0 || p > this.length) && (p = this.length), p <= 0) || (p >>>= 0, u >>>= 0, p <= u)) return "";
        for (y || (y = "utf8"); ; ) switch (y) {
          case "hex":
            return St(this, u, p);
          case "utf8":
          case "utf-8":
            return V(this, u, p);
          case "ascii":
            return O(this, u, p);
          case "latin1":
          case "binary":
            return q(this, u, p);
          case "base64":
            return tt(this, u, p);
          case "ucs2":
          case "ucs-2":
          case "utf16le":
          case "utf-16le":
            return Bt(this, u, p);
          default:
            if (v) throw new TypeError("Unknown encoding: " + y);
            y = (y + "").toLowerCase(), v = true;
        }
      }
      a.prototype._isBuffer = true;
      function x(y, u, p) {
        const v = y[u];
        y[u] = y[p], y[p] = v;
      }
      a.prototype.swap16 = function() {
        const u = this.length;
        if (u % 2 !== 0) throw new RangeError("Buffer size must be a multiple of 16-bits");
        for (let p = 0; p < u; p += 2) x(this, p, p + 1);
        return this;
      }, a.prototype.swap32 = function() {
        const u = this.length;
        if (u % 4 !== 0) throw new RangeError("Buffer size must be a multiple of 32-bits");
        for (let p = 0; p < u; p += 4) x(this, p, p + 3), x(this, p + 1, p + 2);
        return this;
      }, a.prototype.swap64 = function() {
        const u = this.length;
        if (u % 8 !== 0) throw new RangeError("Buffer size must be a multiple of 64-bits");
        for (let p = 0; p < u; p += 8) x(this, p, p + 7), x(this, p + 1, p + 6), x(this, p + 2, p + 5), x(this, p + 3, p + 4);
        return this;
      }, a.prototype.toString = function() {
        const u = this.length;
        return u === 0 ? "" : arguments.length === 0 ? V(this, 0, u) : C.apply(this, arguments);
      }, a.prototype.toLocaleString = a.prototype.toString, a.prototype.equals = function(u) {
        if (!a.isBuffer(u)) throw new TypeError("Argument must be a Buffer");
        return this === u ? true : a.compare(this, u) === 0;
      }, a.prototype.inspect = function() {
        let u = "";
        const p = d.INSPECT_MAX_BYTES;
        return u = this.toString("hex", 0, p).replace(/(.{2})/g, "$1 ").trim(), this.length > p && (u += " ... "), "<Buffer " + u + ">";
      }, i && (a.prototype[i] = a.prototype.inspect), a.prototype.compare = function(u, p, v, _, P) {
        if (Ut(u, Uint8Array) && (u = a.from(u, u.offset, u.byteLength)), !a.isBuffer(u)) throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type ' + typeof u);
        if (p === void 0 && (p = 0), v === void 0 && (v = u ? u.length : 0), _ === void 0 && (_ = 0), P === void 0 && (P = this.length), p < 0 || v > u.length || _ < 0 || P > this.length) throw new RangeError("out of range index");
        if (_ >= P && p >= v) return 0;
        if (_ >= P) return -1;
        if (p >= v) return 1;
        if (p >>>= 0, v >>>= 0, _ >>>= 0, P >>>= 0, this === u) return 0;
        let M = P - _, W = v - p;
        const ht = Math.min(M, W), nt = this.slice(_, P), ct = u.slice(p, v);
        for (let st = 0; st < ht; ++st) if (nt[st] !== ct[st]) {
          M = nt[st], W = ct[st];
          break;
        }
        return M < W ? -1 : W < M ? 1 : 0;
      };
      function T(y, u, p, v, _) {
        if (y.length === 0) return -1;
        if (typeof p == "string" ? (v = p, p = 0) : p > 2147483647 ? p = 2147483647 : p < -2147483648 && (p = -2147483648), p = +p, mi(p) && (p = _ ? 0 : y.length - 1), p < 0 && (p = y.length + p), p >= y.length) {
          if (_) return -1;
          p = y.length - 1;
        } else if (p < 0) if (_) p = 0;
        else return -1;
        if (typeof u == "string" && (u = a.from(u, v)), a.isBuffer(u)) return u.length === 0 ? -1 : k(y, u, p, v, _);
        if (typeof u == "number") return u = u & 255, typeof Uint8Array.prototype.indexOf == "function" ? _ ? Uint8Array.prototype.indexOf.call(y, u, p) : Uint8Array.prototype.lastIndexOf.call(y, u, p) : k(y, [
          u
        ], p, v, _);
        throw new TypeError("val must be string, number or Buffer");
      }
      function k(y, u, p, v, _) {
        let P = 1, M = y.length, W = u.length;
        if (v !== void 0 && (v = String(v).toLowerCase(), v === "ucs2" || v === "ucs-2" || v === "utf16le" || v === "utf-16le")) {
          if (y.length < 2 || u.length < 2) return -1;
          P = 2, M /= 2, W /= 2, p /= 2;
        }
        function ht(ct, st) {
          return P === 1 ? ct[st] : ct.readUInt16BE(st * P);
        }
        let nt;
        if (_) {
          let ct = -1;
          for (nt = p; nt < M; nt++) if (ht(y, nt) === ht(u, ct === -1 ? 0 : nt - ct)) {
            if (ct === -1 && (ct = nt), nt - ct + 1 === W) return ct * P;
          } else ct !== -1 && (nt -= nt - ct), ct = -1;
        } else for (p + W > M && (p = M - W), nt = p; nt >= 0; nt--) {
          let ct = true;
          for (let st = 0; st < W; st++) if (ht(y, nt + st) !== ht(u, st)) {
            ct = false;
            break;
          }
          if (ct) return nt;
        }
        return -1;
      }
      a.prototype.includes = function(u, p, v) {
        return this.indexOf(u, p, v) !== -1;
      }, a.prototype.indexOf = function(u, p, v) {
        return T(this, u, p, v, true);
      }, a.prototype.lastIndexOf = function(u, p, v) {
        return T(this, u, p, v, false);
      };
      function I(y, u, p, v) {
        p = Number(p) || 0;
        const _ = y.length - p;
        v ? (v = Number(v), v > _ && (v = _)) : v = _;
        const P = u.length;
        v > P / 2 && (v = P / 2);
        let M;
        for (M = 0; M < v; ++M) {
          const W = parseInt(u.substr(M * 2, 2), 16);
          if (mi(W)) return M;
          y[p + M] = W;
        }
        return M;
      }
      function D(y, u, p, v) {
        return Oe(gi(u, y.length - p), y, p, v);
      }
      function B(y, u, p, v) {
        return Oe(mn(u), y, p, v);
      }
      function L(y, u, p, v) {
        return Oe(ss(u), y, p, v);
      }
      function Y(y, u, p, v) {
        return Oe(bn(u, y.length - p), y, p, v);
      }
      a.prototype.write = function(u, p, v, _) {
        if (p === void 0) _ = "utf8", v = this.length, p = 0;
        else if (v === void 0 && typeof p == "string") _ = p, v = this.length, p = 0;
        else if (isFinite(p)) p = p >>> 0, isFinite(v) ? (v = v >>> 0, _ === void 0 && (_ = "utf8")) : (_ = v, v = void 0);
        else throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");
        const P = this.length - p;
        if ((v === void 0 || v > P) && (v = P), u.length > 0 && (v < 0 || p < 0) || p > this.length) throw new RangeError("Attempt to write outside buffer bounds");
        _ || (_ = "utf8");
        let M = false;
        for (; ; ) switch (_) {
          case "hex":
            return I(this, u, p, v);
          case "utf8":
          case "utf-8":
            return D(this, u, p, v);
          case "ascii":
          case "latin1":
          case "binary":
            return B(this, u, p, v);
          case "base64":
            return L(this, u, p, v);
          case "ucs2":
          case "ucs-2":
          case "utf16le":
          case "utf-16le":
            return Y(this, u, p, v);
          default:
            if (M) throw new TypeError("Unknown encoding: " + _);
            _ = ("" + _).toLowerCase(), M = true;
        }
      }, a.prototype.toJSON = function() {
        return {
          type: "Buffer",
          data: Array.prototype.slice.call(this._arr || this, 0)
        };
      };
      function tt(y, u, p) {
        return u === 0 && p === y.length ? t.fromByteArray(y) : t.fromByteArray(y.slice(u, p));
      }
      function V(y, u, p) {
        p = Math.min(y.length, p);
        const v = [];
        let _ = u;
        for (; _ < p; ) {
          const P = y[_];
          let M = null, W = P > 239 ? 4 : P > 223 ? 3 : P > 191 ? 2 : 1;
          if (_ + W <= p) {
            let ht, nt, ct, st;
            switch (W) {
              case 1:
                P < 128 && (M = P);
                break;
              case 2:
                ht = y[_ + 1], (ht & 192) === 128 && (st = (P & 31) << 6 | ht & 63, st > 127 && (M = st));
                break;
              case 3:
                ht = y[_ + 1], nt = y[_ + 2], (ht & 192) === 128 && (nt & 192) === 128 && (st = (P & 15) << 12 | (ht & 63) << 6 | nt & 63, st > 2047 && (st < 55296 || st > 57343) && (M = st));
                break;
              case 4:
                ht = y[_ + 1], nt = y[_ + 2], ct = y[_ + 3], (ht & 192) === 128 && (nt & 192) === 128 && (ct & 192) === 128 && (st = (P & 15) << 18 | (ht & 63) << 12 | (nt & 63) << 6 | ct & 63, st > 65535 && st < 1114112 && (M = st));
            }
          }
          M === null ? (M = 65533, W = 1) : M > 65535 && (M -= 65536, v.push(M >>> 10 & 1023 | 55296), M = 56320 | M & 1023), v.push(M), _ += W;
        }
        return N(v);
      }
      const rt = 4096;
      function N(y) {
        const u = y.length;
        if (u <= rt) return String.fromCharCode.apply(String, y);
        let p = "", v = 0;
        for (; v < u; ) p += String.fromCharCode.apply(String, y.slice(v, v += rt));
        return p;
      }
      function O(y, u, p) {
        let v = "";
        p = Math.min(y.length, p);
        for (let _ = u; _ < p; ++_) v += String.fromCharCode(y[_] & 127);
        return v;
      }
      function q(y, u, p) {
        let v = "";
        p = Math.min(y.length, p);
        for (let _ = u; _ < p; ++_) v += String.fromCharCode(y[_]);
        return v;
      }
      function St(y, u, p) {
        const v = y.length;
        (!u || u < 0) && (u = 0), (!p || p < 0 || p > v) && (p = v);
        let _ = "";
        for (let P = u; P < p; ++P) _ += yn[y[P]];
        return _;
      }
      function Bt(y, u, p) {
        const v = y.slice(u, p);
        let _ = "";
        for (let P = 0; P < v.length - 1; P += 2) _ += String.fromCharCode(v[P] + v[P + 1] * 256);
        return _;
      }
      a.prototype.slice = function(u, p) {
        const v = this.length;
        u = ~~u, p = p === void 0 ? v : ~~p, u < 0 ? (u += v, u < 0 && (u = 0)) : u > v && (u = v), p < 0 ? (p += v, p < 0 && (p = 0)) : p > v && (p = v), p < u && (p = u);
        const _ = this.subarray(u, p);
        return Object.setPrototypeOf(_, a.prototype), _;
      };
      function z(y, u, p) {
        if (y % 1 !== 0 || y < 0) throw new RangeError("offset is not uint");
        if (y + u > p) throw new RangeError("Trying to access beyond buffer length");
      }
      a.prototype.readUintLE = a.prototype.readUIntLE = function(u, p, v) {
        u = u >>> 0, p = p >>> 0, v || z(u, p, this.length);
        let _ = this[u], P = 1, M = 0;
        for (; ++M < p && (P *= 256); ) _ += this[u + M] * P;
        return _;
      }, a.prototype.readUintBE = a.prototype.readUIntBE = function(u, p, v) {
        u = u >>> 0, p = p >>> 0, v || z(u, p, this.length);
        let _ = this[u + --p], P = 1;
        for (; p > 0 && (P *= 256); ) _ += this[u + --p] * P;
        return _;
      }, a.prototype.readUint8 = a.prototype.readUInt8 = function(u, p) {
        return u = u >>> 0, p || z(u, 1, this.length), this[u];
      }, a.prototype.readUint16LE = a.prototype.readUInt16LE = function(u, p) {
        return u = u >>> 0, p || z(u, 2, this.length), this[u] | this[u + 1] << 8;
      }, a.prototype.readUint16BE = a.prototype.readUInt16BE = function(u, p) {
        return u = u >>> 0, p || z(u, 2, this.length), this[u] << 8 | this[u + 1];
      }, a.prototype.readUint32LE = a.prototype.readUInt32LE = function(u, p) {
        return u = u >>> 0, p || z(u, 4, this.length), (this[u] | this[u + 1] << 8 | this[u + 2] << 16) + this[u + 3] * 16777216;
      }, a.prototype.readUint32BE = a.prototype.readUInt32BE = function(u, p) {
        return u = u >>> 0, p || z(u, 4, this.length), this[u] * 16777216 + (this[u + 1] << 16 | this[u + 2] << 8 | this[u + 3]);
      }, a.prototype.readBigUInt64LE = Kt(function(u) {
        u = u >>> 0, Ot(u, "offset");
        const p = this[u], v = this[u + 7];
        (p === void 0 || v === void 0) && qt(u, this.length - 8);
        const _ = p + this[++u] * 2 ** 8 + this[++u] * 2 ** 16 + this[++u] * 2 ** 24, P = this[++u] + this[++u] * 2 ** 8 + this[++u] * 2 ** 16 + v * 2 ** 24;
        return BigInt(_) + (BigInt(P) << BigInt(32));
      }), a.prototype.readBigUInt64BE = Kt(function(u) {
        u = u >>> 0, Ot(u, "offset");
        const p = this[u], v = this[u + 7];
        (p === void 0 || v === void 0) && qt(u, this.length - 8);
        const _ = p * 2 ** 24 + this[++u] * 2 ** 16 + this[++u] * 2 ** 8 + this[++u], P = this[++u] * 2 ** 24 + this[++u] * 2 ** 16 + this[++u] * 2 ** 8 + v;
        return (BigInt(_) << BigInt(32)) + BigInt(P);
      }), a.prototype.readIntLE = function(u, p, v) {
        u = u >>> 0, p = p >>> 0, v || z(u, p, this.length);
        let _ = this[u], P = 1, M = 0;
        for (; ++M < p && (P *= 256); ) _ += this[u + M] * P;
        return P *= 128, _ >= P && (_ -= Math.pow(2, 8 * p)), _;
      }, a.prototype.readIntBE = function(u, p, v) {
        u = u >>> 0, p = p >>> 0, v || z(u, p, this.length);
        let _ = p, P = 1, M = this[u + --_];
        for (; _ > 0 && (P *= 256); ) M += this[u + --_] * P;
        return P *= 128, M >= P && (M -= Math.pow(2, 8 * p)), M;
      }, a.prototype.readInt8 = function(u, p) {
        return u = u >>> 0, p || z(u, 1, this.length), this[u] & 128 ? (255 - this[u] + 1) * -1 : this[u];
      }, a.prototype.readInt16LE = function(u, p) {
        u = u >>> 0, p || z(u, 2, this.length);
        const v = this[u] | this[u + 1] << 8;
        return v & 32768 ? v | 4294901760 : v;
      }, a.prototype.readInt16BE = function(u, p) {
        u = u >>> 0, p || z(u, 2, this.length);
        const v = this[u + 1] | this[u] << 8;
        return v & 32768 ? v | 4294901760 : v;
      }, a.prototype.readInt32LE = function(u, p) {
        return u = u >>> 0, p || z(u, 4, this.length), this[u] | this[u + 1] << 8 | this[u + 2] << 16 | this[u + 3] << 24;
      }, a.prototype.readInt32BE = function(u, p) {
        return u = u >>> 0, p || z(u, 4, this.length), this[u] << 24 | this[u + 1] << 16 | this[u + 2] << 8 | this[u + 3];
      }, a.prototype.readBigInt64LE = Kt(function(u) {
        u = u >>> 0, Ot(u, "offset");
        const p = this[u], v = this[u + 7];
        (p === void 0 || v === void 0) && qt(u, this.length - 8);
        const _ = this[u + 4] + this[u + 5] * 2 ** 8 + this[u + 6] * 2 ** 16 + (v << 24);
        return (BigInt(_) << BigInt(32)) + BigInt(p + this[++u] * 2 ** 8 + this[++u] * 2 ** 16 + this[++u] * 2 ** 24);
      }), a.prototype.readBigInt64BE = Kt(function(u) {
        u = u >>> 0, Ot(u, "offset");
        const p = this[u], v = this[u + 7];
        (p === void 0 || v === void 0) && qt(u, this.length - 8);
        const _ = (p << 24) + this[++u] * 2 ** 16 + this[++u] * 2 ** 8 + this[++u];
        return (BigInt(_) << BigInt(32)) + BigInt(this[++u] * 2 ** 24 + this[++u] * 2 ** 16 + this[++u] * 2 ** 8 + v);
      }), a.prototype.readFloatLE = function(u, p) {
        return u = u >>> 0, p || z(u, 4, this.length), e.read(this, u, true, 23, 4);
      }, a.prototype.readFloatBE = function(u, p) {
        return u = u >>> 0, p || z(u, 4, this.length), e.read(this, u, false, 23, 4);
      }, a.prototype.readDoubleLE = function(u, p) {
        return u = u >>> 0, p || z(u, 8, this.length), e.read(this, u, true, 52, 8);
      }, a.prototype.readDoubleBE = function(u, p) {
        return u = u >>> 0, p || z(u, 8, this.length), e.read(this, u, false, 52, 8);
      };
      function G(y, u, p, v, _, P) {
        if (!a.isBuffer(y)) throw new TypeError('"buffer" argument must be a Buffer instance');
        if (u > _ || u < P) throw new RangeError('"value" argument is out of bounds');
        if (p + v > y.length) throw new RangeError("Index out of range");
      }
      a.prototype.writeUintLE = a.prototype.writeUIntLE = function(u, p, v, _) {
        if (u = +u, p = p >>> 0, v = v >>> 0, !_) {
          const W = Math.pow(2, 8 * v) - 1;
          G(this, u, p, v, W, 0);
        }
        let P = 1, M = 0;
        for (this[p] = u & 255; ++M < v && (P *= 256); ) this[p + M] = u / P & 255;
        return p + v;
      }, a.prototype.writeUintBE = a.prototype.writeUIntBE = function(u, p, v, _) {
        if (u = +u, p = p >>> 0, v = v >>> 0, !_) {
          const W = Math.pow(2, 8 * v) - 1;
          G(this, u, p, v, W, 0);
        }
        let P = v - 1, M = 1;
        for (this[p + P] = u & 255; --P >= 0 && (M *= 256); ) this[p + P] = u / M & 255;
        return p + v;
      }, a.prototype.writeUint8 = a.prototype.writeUInt8 = function(u, p, v) {
        return u = +u, p = p >>> 0, v || G(this, u, p, 1, 255, 0), this[p] = u & 255, p + 1;
      }, a.prototype.writeUint16LE = a.prototype.writeUInt16LE = function(u, p, v) {
        return u = +u, p = p >>> 0, v || G(this, u, p, 2, 65535, 0), this[p] = u & 255, this[p + 1] = u >>> 8, p + 2;
      }, a.prototype.writeUint16BE = a.prototype.writeUInt16BE = function(u, p, v) {
        return u = +u, p = p >>> 0, v || G(this, u, p, 2, 65535, 0), this[p] = u >>> 8, this[p + 1] = u & 255, p + 2;
      }, a.prototype.writeUint32LE = a.prototype.writeUInt32LE = function(u, p, v) {
        return u = +u, p = p >>> 0, v || G(this, u, p, 4, 4294967295, 0), this[p + 3] = u >>> 24, this[p + 2] = u >>> 16, this[p + 1] = u >>> 8, this[p] = u & 255, p + 4;
      }, a.prototype.writeUint32BE = a.prototype.writeUInt32BE = function(u, p, v) {
        return u = +u, p = p >>> 0, v || G(this, u, p, 4, 4294967295, 0), this[p] = u >>> 24, this[p + 1] = u >>> 16, this[p + 2] = u >>> 8, this[p + 3] = u & 255, p + 4;
      };
      function it(y, u, p, v, _) {
        re(u, v, _, y, p, 7);
        let P = Number(u & BigInt(4294967295));
        y[p++] = P, P = P >> 8, y[p++] = P, P = P >> 8, y[p++] = P, P = P >> 8, y[p++] = P;
        let M = Number(u >> BigInt(32) & BigInt(4294967295));
        return y[p++] = M, M = M >> 8, y[p++] = M, M = M >> 8, y[p++] = M, M = M >> 8, y[p++] = M, p;
      }
      function Nt(y, u, p, v, _) {
        re(u, v, _, y, p, 7);
        let P = Number(u & BigInt(4294967295));
        y[p + 7] = P, P = P >> 8, y[p + 6] = P, P = P >> 8, y[p + 5] = P, P = P >> 8, y[p + 4] = P;
        let M = Number(u >> BigInt(32) & BigInt(4294967295));
        return y[p + 3] = M, M = M >> 8, y[p + 2] = M, M = M >> 8, y[p + 1] = M, M = M >> 8, y[p] = M, p + 8;
      }
      a.prototype.writeBigUInt64LE = Kt(function(u, p = 0) {
        return it(this, u, p, BigInt(0), BigInt("0xffffffffffffffff"));
      }), a.prototype.writeBigUInt64BE = Kt(function(u, p = 0) {
        return Nt(this, u, p, BigInt(0), BigInt("0xffffffffffffffff"));
      }), a.prototype.writeIntLE = function(u, p, v, _) {
        if (u = +u, p = p >>> 0, !_) {
          const ht = Math.pow(2, 8 * v - 1);
          G(this, u, p, v, ht - 1, -ht);
        }
        let P = 0, M = 1, W = 0;
        for (this[p] = u & 255; ++P < v && (M *= 256); ) u < 0 && W === 0 && this[p + P - 1] !== 0 && (W = 1), this[p + P] = (u / M >> 0) - W & 255;
        return p + v;
      }, a.prototype.writeIntBE = function(u, p, v, _) {
        if (u = +u, p = p >>> 0, !_) {
          const ht = Math.pow(2, 8 * v - 1);
          G(this, u, p, v, ht - 1, -ht);
        }
        let P = v - 1, M = 1, W = 0;
        for (this[p + P] = u & 255; --P >= 0 && (M *= 256); ) u < 0 && W === 0 && this[p + P + 1] !== 0 && (W = 1), this[p + P] = (u / M >> 0) - W & 255;
        return p + v;
      }, a.prototype.writeInt8 = function(u, p, v) {
        return u = +u, p = p >>> 0, v || G(this, u, p, 1, 127, -128), u < 0 && (u = 255 + u + 1), this[p] = u & 255, p + 1;
      }, a.prototype.writeInt16LE = function(u, p, v) {
        return u = +u, p = p >>> 0, v || G(this, u, p, 2, 32767, -32768), this[p] = u & 255, this[p + 1] = u >>> 8, p + 2;
      }, a.prototype.writeInt16BE = function(u, p, v) {
        return u = +u, p = p >>> 0, v || G(this, u, p, 2, 32767, -32768), this[p] = u >>> 8, this[p + 1] = u & 255, p + 2;
      }, a.prototype.writeInt32LE = function(u, p, v) {
        return u = +u, p = p >>> 0, v || G(this, u, p, 4, 2147483647, -2147483648), this[p] = u & 255, this[p + 1] = u >>> 8, this[p + 2] = u >>> 16, this[p + 3] = u >>> 24, p + 4;
      }, a.prototype.writeInt32BE = function(u, p, v) {
        return u = +u, p = p >>> 0, v || G(this, u, p, 4, 2147483647, -2147483648), u < 0 && (u = 4294967295 + u + 1), this[p] = u >>> 24, this[p + 1] = u >>> 16, this[p + 2] = u >>> 8, this[p + 3] = u & 255, p + 4;
      }, a.prototype.writeBigInt64LE = Kt(function(u, p = 0) {
        return it(this, u, p, -BigInt("0x8000000000000000"), BigInt("0x7fffffffffffffff"));
      }), a.prototype.writeBigInt64BE = Kt(function(u, p = 0) {
        return Nt(this, u, p, -BigInt("0x8000000000000000"), BigInt("0x7fffffffffffffff"));
      });
      function Yt(y, u, p, v, _, P) {
        if (p + v > y.length) throw new RangeError("Index out of range");
        if (p < 0) throw new RangeError("Index out of range");
      }
      function _t74(y, u, p, v, _) {
        return u = +u, p = p >>> 0, _ || Yt(y, u, p, 4), e.write(y, u, p, v, 23, 4), p + 4;
      }
      a.prototype.writeFloatLE = function(u, p, v) {
        return _t74(this, u, p, true, v);
      }, a.prototype.writeFloatBE = function(u, p, v) {
        return _t74(this, u, p, false, v);
      };
      function at(y, u, p, v, _) {
        return u = +u, p = p >>> 0, _ || Yt(y, u, p, 8), e.write(y, u, p, v, 52, 8), p + 8;
      }
      a.prototype.writeDoubleLE = function(u, p, v) {
        return at(this, u, p, true, v);
      }, a.prototype.writeDoubleBE = function(u, p, v) {
        return at(this, u, p, false, v);
      }, a.prototype.copy = function(u, p, v, _) {
        if (!a.isBuffer(u)) throw new TypeError("argument should be a Buffer");
        if (v || (v = 0), !_ && _ !== 0 && (_ = this.length), p >= u.length && (p = u.length), p || (p = 0), _ > 0 && _ < v && (_ = v), _ === v || u.length === 0 || this.length === 0) return 0;
        if (p < 0) throw new RangeError("targetStart out of bounds");
        if (v < 0 || v >= this.length) throw new RangeError("Index out of range");
        if (_ < 0) throw new RangeError("sourceEnd out of bounds");
        _ > this.length && (_ = this.length), u.length - p < _ - v && (_ = u.length - p + v);
        const P = _ - v;
        return this === u && typeof Uint8Array.prototype.copyWithin == "function" ? this.copyWithin(p, v, _) : Uint8Array.prototype.set.call(u, this.subarray(v, _), p), P;
      }, a.prototype.fill = function(u, p, v, _) {
        if (typeof u == "string") {
          if (typeof p == "string" ? (_ = p, p = 0, v = this.length) : typeof v == "string" && (_ = v, v = this.length), _ !== void 0 && typeof _ != "string") throw new TypeError("encoding must be a string");
          if (typeof _ == "string" && !a.isEncoding(_)) throw new TypeError("Unknown encoding: " + _);
          if (u.length === 1) {
            const M = u.charCodeAt(0);
            (_ === "utf8" && M < 128 || _ === "latin1") && (u = M);
          }
        } else typeof u == "number" ? u = u & 255 : typeof u == "boolean" && (u = Number(u));
        if (p < 0 || this.length < p || this.length < v) throw new RangeError("Out of range index");
        if (v <= p) return this;
        p = p >>> 0, v = v === void 0 ? this.length : v >>> 0, u || (u = 0);
        let P;
        if (typeof u == "number") for (P = p; P < v; ++P) this[P] = u;
        else {
          const M = a.isBuffer(u) ? u : a.from(u, _), W = M.length;
          if (W === 0) throw new TypeError('The value "' + u + '" is invalid for argument "value"');
          for (P = 0; P < v - p; ++P) this[P + p] = M[P % W];
        }
        return this;
      };
      const It = {};
      function Vt(y, u, p) {
        It[y] = class extends p {
          constructor() {
            super(), Object.defineProperty(this, "message", {
              value: u.apply(this, arguments),
              writable: true,
              configurable: true
            }), this.name = `${this.name} [${y}]`, this.stack, delete this.name;
          }
          get code() {
            return y;
          }
          set code(_) {
            Object.defineProperty(this, "code", {
              configurable: true,
              enumerable: true,
              value: _,
              writable: true
            });
          }
          toString() {
            return `${this.name} [${y}]: ${this.message}`;
          }
        };
      }
      Vt("ERR_BUFFER_OUT_OF_BOUNDS", function(y) {
        return y ? `${y} is outside of buffer bounds` : "Attempt to access memory outside buffer bounds";
      }, RangeError), Vt("ERR_INVALID_ARG_TYPE", function(y, u) {
        return `The "${y}" argument must be of type number. Received type ${typeof u}`;
      }, TypeError), Vt("ERR_OUT_OF_RANGE", function(y, u, p) {
        let v = `The value of "${y}" is out of range.`, _ = p;
        return Number.isInteger(p) && Math.abs(p) > 2 ** 32 ? _ = Ne(String(p)) : typeof p == "bigint" && (_ = String(p), (p > BigInt(2) ** BigInt(32) || p < -(BigInt(2) ** BigInt(32))) && (_ = Ne(_)), _ += "n"), v += ` It must be ${u}. Received ${_}`, v;
      }, RangeError);
      function Ne(y) {
        let u = "", p = y.length;
        const v = y[0] === "-" ? 1 : 0;
        for (; p >= v + 4; p -= 3) u = `_${y.slice(p - 3, p)}${u}`;
        return `${y.slice(0, p)}${u}`;
      }
      function fi(y, u, p) {
        Ot(u, "offset"), (y[u] === void 0 || y[u + p] === void 0) && qt(u, y.length - (p + 1));
      }
      function re(y, u, p, v, _, P) {
        if (y > p || y < u) {
          const M = typeof u == "bigint" ? "n" : "";
          let W;
          throw u === 0 || u === BigInt(0) ? W = `>= 0${M} and < 2${M} ** ${(P + 1) * 8}${M}` : W = `>= -(2${M} ** ${(P + 1) * 8 - 1}${M}) and < 2 ** ${(P + 1) * 8 - 1}${M}`, new It.ERR_OUT_OF_RANGE("value", W, y);
        }
        fi(v, _, P);
      }
      function Ot(y, u) {
        if (typeof y != "number") throw new It.ERR_INVALID_ARG_TYPE(u, "number", y);
      }
      function qt(y, u, p) {
        throw Math.floor(y) !== y ? (Ot(y, p), new It.ERR_OUT_OF_RANGE("offset", "an integer", y)) : u < 0 ? new It.ERR_BUFFER_OUT_OF_BOUNDS() : new It.ERR_OUT_OF_RANGE("offset", `>= 0 and <= ${u}`, y);
      }
      const pi = /[^+/0-9A-Za-z-_]/g;
      function gn(y) {
        if (y = y.split("=")[0], y = y.trim().replace(pi, ""), y.length < 2) return "";
        for (; y.length % 4 !== 0; ) y = y + "=";
        return y;
      }
      function gi(y, u) {
        u = u || 1 / 0;
        let p;
        const v = y.length;
        let _ = null;
        const P = [];
        for (let M = 0; M < v; ++M) {
          if (p = y.charCodeAt(M), p > 55295 && p < 57344) {
            if (!_) {
              if (p > 56319) {
                (u -= 3) > -1 && P.push(239, 191, 189);
                continue;
              } else if (M + 1 === v) {
                (u -= 3) > -1 && P.push(239, 191, 189);
                continue;
              }
              _ = p;
              continue;
            }
            if (p < 56320) {
              (u -= 3) > -1 && P.push(239, 191, 189), _ = p;
              continue;
            }
            p = (_ - 55296 << 10 | p - 56320) + 65536;
          } else _ && (u -= 3) > -1 && P.push(239, 191, 189);
          if (_ = null, p < 128) {
            if ((u -= 1) < 0) break;
            P.push(p);
          } else if (p < 2048) {
            if ((u -= 2) < 0) break;
            P.push(p >> 6 | 192, p & 63 | 128);
          } else if (p < 65536) {
            if ((u -= 3) < 0) break;
            P.push(p >> 12 | 224, p >> 6 & 63 | 128, p & 63 | 128);
          } else if (p < 1114112) {
            if ((u -= 4) < 0) break;
            P.push(p >> 18 | 240, p >> 12 & 63 | 128, p >> 6 & 63 | 128, p & 63 | 128);
          } else throw new Error("Invalid code point");
        }
        return P;
      }
      function mn(y) {
        const u = [];
        for (let p = 0; p < y.length; ++p) u.push(y.charCodeAt(p) & 255);
        return u;
      }
      function bn(y, u) {
        let p, v, _;
        const P = [];
        for (let M = 0; M < y.length && !((u -= 2) < 0); ++M) p = y.charCodeAt(M), v = p >> 8, _ = p % 256, P.push(_), P.push(v);
        return P;
      }
      function ss(y) {
        return t.toByteArray(gn(y));
      }
      function Oe(y, u, p, v) {
        let _;
        for (_ = 0; _ < v && !(_ + p >= u.length || _ >= y.length); ++_) u[_ + p] = y[_];
        return _;
      }
      function Ut(y, u) {
        return y instanceof u || y != null && y.constructor != null && y.constructor.name != null && y.constructor.name === u.name;
      }
      function mi(y) {
        return y !== y;
      }
      const yn = (function() {
        const y = "0123456789abcdef", u = new Array(256);
        for (let p = 0; p < 16; ++p) {
          const v = p * 16;
          for (let _ = 0; _ < 16; ++_) u[v + _] = y[p] + y[_];
        }
        return u;
      })();
      function Kt(y) {
        return typeof BigInt > "u" ? An : y;
      }
      function An() {
        throw new Error("BigInt not supported");
      }
    })(bi)), bi;
  }
  var os = En();
  let xt, Ci, yi, Pt, Te, Ti, gt, oe, ye;
  xt = typeof process == "object" && process + "" == "[object process]" && !process.versions.nw && !(process.versions.electron && process.type && process.type !== "browser");
  Ci = [
    1e-3,
    0,
    0,
    1e-3,
    0,
    0
  ];
  yi = 1.35;
  Pt = {
    ANY: 1,
    DISPLAY: 2,
    PRINT: 4,
    ANNOTATIONS_FORMS: 16,
    ANNOTATIONS_STORAGE: 32,
    ANNOTATIONS_DISABLE: 64,
    IS_EDITING: 128,
    OPLIST: 256
  };
  Jt = {
    DISABLE: 0,
    ENABLE: 1,
    ENABLE_FORMS: 2,
    ENABLE_STORAGE: 3
  };
  Te = "pdfjs_internal_editor_";
  $ = {
    DISABLE: -1,
    NONE: 0,
    FREETEXT: 3,
    HIGHLIGHT: 9,
    STAMP: 13,
    INK: 15,
    POPUP: 16,
    SIGNATURE: 101,
    COMMENT: 102
  };
  X = {
    RESIZE: 1,
    CREATE: 2,
    FREETEXT_SIZE: 11,
    FREETEXT_COLOR: 12,
    FREETEXT_OPACITY: 13,
    INK_COLOR: 21,
    INK_THICKNESS: 22,
    INK_OPACITY: 23,
    HIGHLIGHT_COLOR: 31,
    HIGHLIGHT_THICKNESS: 32,
    HIGHLIGHT_FREE: 33,
    HIGHLIGHT_SHOW_ALL: 34,
    DRAW_STEP: 41
  };
  Sn = {
    PRINT: 4,
    MODIFY_CONTENTS: 8,
    COPY: 16,
    MODIFY_ANNOTATIONS: 32,
    FILL_INTERACTIVE_FORMS: 256,
    COPY_FOR_ACCESSIBILITY: 512,
    ASSEMBLE: 1024,
    PRINT_HIGH_QUALITY: 2048
  };
  Ti = {
    TRIANGLES: 1,
    LATTICE: 2
  };
  gt = {
    FILL: 0,
    STROKE: 1,
    FILL_STROKE: 2,
    INVISIBLE: 3,
    FILL_STROKE_MASK: 3,
    ADD_TO_PATH_FLAG: 4
  };
  qe = {
    GRAYSCALE_1BPP: 1,
    RGB_24BPP: 2,
    RGBA_32BPP: 3
  };
  pt = {
    TEXT: 1,
    LINK: 2,
    FREETEXT: 3,
    LINE: 4,
    SQUARE: 5,
    CIRCLE: 6,
    POLYGON: 7,
    POLYLINE: 8,
    HIGHLIGHT: 9,
    UNDERLINE: 10,
    SQUIGGLY: 11,
    STRIKEOUT: 12,
    STAMP: 13,
    CARET: 14,
    INK: 15,
    POPUP: 16,
    FILEATTACHMENT: 17,
    SOUND: 18,
    MOVIE: 19,
    WIDGET: 20,
    SCREEN: 21,
    PRINTERMARK: 22,
    TRAPNET: 23,
    WATERMARK: 24,
    THREED: 25,
    REDACT: 26
  };
  oe = {
    SOLID: 1,
    DASHED: 2,
    BEVELED: 3,
    INSET: 4,
    UNDERLINE: 5
  };
  Ze = {
    ERRORS: 0,
    WARNINGS: 1,
    INFOS: 5
  };
  Pe = {
    dependency: 1,
    setLineWidth: 2,
    setLineCap: 3,
    setLineJoin: 4,
    setMiterLimit: 5,
    setDash: 6,
    setRenderingIntent: 7,
    setFlatness: 8,
    setGState: 9,
    save: 10,
    restore: 11,
    transform: 12,
    moveTo: 13,
    lineTo: 14,
    curveTo: 15,
    curveTo2: 16,
    curveTo3: 17,
    closePath: 18,
    rectangle: 19,
    stroke: 20,
    closeStroke: 21,
    fill: 22,
    eoFill: 23,
    fillStroke: 24,
    eoFillStroke: 25,
    closeFillStroke: 26,
    closeEOFillStroke: 27,
    endPath: 28,
    clip: 29,
    eoClip: 30,
    beginText: 31,
    endText: 32,
    setCharSpacing: 33,
    setWordSpacing: 34,
    setHScale: 35,
    setLeading: 36,
    setFont: 37,
    setTextRenderingMode: 38,
    setTextRise: 39,
    moveText: 40,
    setLeadingMoveText: 41,
    setTextMatrix: 42,
    nextLine: 43,
    showText: 44,
    showSpacedText: 45,
    nextLineShowText: 46,
    nextLineSetSpacingShowText: 47,
    setCharWidth: 48,
    setCharWidthAndBounds: 49,
    setStrokeColorSpace: 50,
    setFillColorSpace: 51,
    setStrokeColor: 52,
    setStrokeColorN: 53,
    setFillColor: 54,
    setFillColorN: 55,
    setStrokeGray: 56,
    setFillGray: 57,
    setStrokeRGBColor: 58,
    setFillRGBColor: 59,
    setStrokeCMYKColor: 60,
    setFillCMYKColor: 61,
    shadingFill: 62,
    beginInlineImage: 63,
    beginImageData: 64,
    endInlineImage: 65,
    paintXObject: 66,
    markPoint: 67,
    markPointProps: 68,
    beginMarkedContent: 69,
    beginMarkedContentProps: 70,
    endMarkedContent: 71,
    beginCompat: 72,
    endCompat: 73,
    paintFormXObjectBegin: 74,
    paintFormXObjectEnd: 75,
    beginGroup: 76,
    endGroup: 77,
    beginAnnotation: 80,
    endAnnotation: 81,
    paintImageMaskXObject: 83,
    paintImageMaskXObjectGroup: 84,
    paintImageXObject: 85,
    paintInlineImageXObject: 86,
    paintInlineImageXObjectGroup: 87,
    paintImageXObjectRepeat: 88,
    paintImageMaskXObjectRepeat: 89,
    paintSolidColorImageMask: 90,
    constructPath: 91,
    setStrokeTransparent: 92,
    setFillTransparent: 93,
    rawFillPath: 94
  };
  ye = {
    moveTo: 0,
    lineTo: 1,
    curveTo: 2,
    quadraticCurveTo: 3,
    closePath: 4
  };
  xn = {
    NEED_PASSWORD: 1,
    INCORRECT_PASSWORD: 2
  };
  let ti = Ze.WARNINGS;
  function _n(d) {
    Number.isInteger(d) && (ti = d);
  }
  function Cn() {
    return ti;
  }
  function ei(d) {
    ti >= Ze.INFOS && console.info(`Info: ${d}`);
  }
  function j(d) {
    ti >= Ze.WARNINGS && console.warn(`Warning: ${d}`);
  }
  function Z(d) {
    throw new Error(d);
  }
  function K(d, t) {
    d || Z(t);
  }
  function Tn(d) {
    switch (d == null ? void 0 : d.protocol) {
      case "http:":
      case "https:":
      case "ftp:":
      case "mailto:":
      case "tel:":
        return true;
      default:
        return false;
    }
  }
  Bs = function(d, t = null, e = null) {
    var _a29;
    if (!d) return null;
    if (e && typeof d == "string" && (e.addDefaultProtocol && d.startsWith("www.") && ((_a29 = d.match(/\./g)) == null ? void 0 : _a29.length) >= 2 && (d = `http://${d}`), e.tryConvertEncoding)) try {
      d = Ln(d);
    } catch {
    }
    const i = t ? URL.parse(d, t) : URL.parse(d);
    return Tn(i) ? i : null;
  };
  Ns = function(d, t, e = false) {
    const i = URL.parse(d);
    return i ? (i.hash = t, i.href) : e && Bs(d, "http://example.com") ? d.split("#", 1)[0] + `${t ? `#${t}` : ""}` : "";
  };
  function Pi(d) {
    return d.substring(d.lastIndexOf("/") + 1);
  }
  H = function(d, t, e, i = false) {
    return Object.defineProperty(d, t, {
      value: e,
      enumerable: !i,
      configurable: true,
      writable: false
    }), e;
  };
  const se = (function() {
    function t(e, i) {
      this.message = e, this.name = i;
    }
    return t.prototype = new Error(), t.constructor = t, t;
  })();
  class ls extends se {
    constructor(t, e) {
      super(t, "PasswordException"), this.code = e;
    }
  }
  class Ai extends se {
    constructor(t, e) {
      super(t, "UnknownErrorException"), this.details = e;
    }
  }
  ki = class extends se {
    constructor(t) {
      super(t, "InvalidPDFException");
    }
  };
  Ke = class extends se {
    constructor(t, e, i) {
      super(t, "ResponseException"), this.status = e, this.missing = i;
    }
  };
  class Pn extends se {
    constructor(t) {
      super(t, "FormatError");
    }
  }
  Qt = class extends se {
    constructor(t) {
      super(t, "AbortException");
    }
  };
  function kn(d) {
    (typeof d != "object" || (d == null ? void 0 : d.length) === void 0) && Z("Invalid argument for bytesToString");
    const t = d.length, e = 8192;
    if (t < e) return String.fromCharCode.apply(null, d);
    const i = [];
    for (let s = 0; s < t; s += e) {
      const n = Math.min(s + e, t), r = d.subarray(s, n);
      i.push(String.fromCharCode.apply(null, r));
    }
    return i.join("");
  }
  function ii(d) {
    typeof d != "string" && Z("Invalid argument for stringToBytes");
    const t = d.length, e = new Uint8Array(t);
    for (let i = 0; i < t; ++i) e[i] = d.charCodeAt(i) & 255;
    return e;
  }
  function Mn(d) {
    return String.fromCharCode(d >> 24 & 255, d >> 16 & 255, d >> 8 & 255, d & 255);
  }
  function In() {
    const d = new Uint8Array(4);
    return d[0] = 1, new Uint32Array(d.buffer, 0, 1)[0] === 1;
  }
  function Dn() {
    try {
      return new Function(""), true;
    } catch {
      return false;
    }
  }
  mt = class {
    static get isLittleEndian() {
      return H(this, "isLittleEndian", In());
    }
    static get isEvalSupported() {
      return H(this, "isEvalSupported", Dn());
    }
    static get isOffscreenCanvasSupported() {
      return H(this, "isOffscreenCanvasSupported", typeof OffscreenCanvas < "u");
    }
    static get isImageDecoderSupported() {
      return H(this, "isImageDecoderSupported", typeof ImageDecoder < "u");
    }
    static get isFloat16ArraySupported() {
      return H(this, "isFloat16ArraySupported", typeof Float16Array < "u");
    }
    static get isSanitizerSupported() {
      return H(this, "isSanitizerSupported", typeof Sanitizer < "u");
    }
    static get platform() {
      const { platform: t, userAgent: e } = navigator;
      return H(this, "platform", {
        isAndroid: e.includes("Android"),
        isLinux: t.includes("Linux"),
        isMac: t.includes("Mac"),
        isWindows: t.includes("Win"),
        isFirefox: e.includes("Firefox")
      });
    }
    static get isCSSRoundSupported() {
      var _a29, _b7;
      return H(this, "isCSSRoundSupported", (_b7 = (_a29 = globalThis.CSS) == null ? void 0 : _a29.supports) == null ? void 0 : _b7.call(_a29, "width: round(1.5px, 1px)"));
    }
  };
  const wi = Array.from(Array(256).keys(), (d) => d.toString(16).padStart(2, "0"));
  R = (_a = class {
    static makeHexColor(t, e, i) {
      return `#${wi[t]}${wi[e]}${wi[i]}`;
    }
    static domMatrixToTransform(t) {
      return [
        t.a,
        t.b,
        t.c,
        t.d,
        t.e,
        t.f
      ];
    }
    static scaleMinMax(t, e) {
      let i;
      t[0] ? (t[0] < 0 && (i = e[0], e[0] = e[2], e[2] = i), e[0] *= t[0], e[2] *= t[0], t[3] < 0 && (i = e[1], e[1] = e[3], e[3] = i), e[1] *= t[3], e[3] *= t[3]) : (i = e[0], e[0] = e[1], e[1] = i, i = e[2], e[2] = e[3], e[3] = i, t[1] < 0 && (i = e[1], e[1] = e[3], e[3] = i), e[1] *= t[1], e[3] *= t[1], t[2] < 0 && (i = e[0], e[0] = e[2], e[2] = i), e[0] *= t[2], e[2] *= t[2]), e[0] += t[4], e[1] += t[5], e[2] += t[4], e[3] += t[5];
    }
    static transform(t, e) {
      return [
        t[0] * e[0] + t[2] * e[1],
        t[1] * e[0] + t[3] * e[1],
        t[0] * e[2] + t[2] * e[3],
        t[1] * e[2] + t[3] * e[3],
        t[0] * e[4] + t[2] * e[5] + t[4],
        t[1] * e[4] + t[3] * e[5] + t[5]
      ];
    }
    static multiplyByDOMMatrix(t, e) {
      return [
        t[0] * e.a + t[2] * e.b,
        t[1] * e.a + t[3] * e.b,
        t[0] * e.c + t[2] * e.d,
        t[1] * e.c + t[3] * e.d,
        t[0] * e.e + t[2] * e.f + t[4],
        t[1] * e.e + t[3] * e.f + t[5]
      ];
    }
    static applyTransform(t, e, i = 0) {
      const s = t[i], n = t[i + 1];
      t[i] = s * e[0] + n * e[2] + e[4], t[i + 1] = s * e[1] + n * e[3] + e[5];
    }
    static applyTransformToBezier(t, e, i = 0) {
      const s = e[0], n = e[1], r = e[2], a = e[3], o = e[4], l = e[5];
      for (let h = 0; h < 6; h += 2) {
        const c = t[i + h], f = t[i + h + 1];
        t[i + h] = c * s + f * r + o, t[i + h + 1] = c * n + f * a + l;
      }
    }
    static applyInverseTransform(t, e) {
      const i = t[0], s = t[1], n = e[0] * e[3] - e[1] * e[2];
      t[0] = (i * e[3] - s * e[2] + e[2] * e[5] - e[4] * e[3]) / n, t[1] = (-i * e[1] + s * e[0] + e[4] * e[1] - e[5] * e[0]) / n;
    }
    static axialAlignedBoundingBox(t, e, i) {
      const s = e[0], n = e[1], r = e[2], a = e[3], o = e[4], l = e[5], h = t[0], c = t[1], f = t[2], g = t[3];
      let b = s * h + o, m = b, w = s * f + o, A = w, S = a * c + l, E = S, C = a * g + l, x = C;
      if (n !== 0 || r !== 0) {
        const T = n * h, k = n * f, I = r * c, D = r * g;
        b += I, A += I, w += D, m += D, S += T, x += T, C += k, E += k;
      }
      i[0] = Math.min(i[0], b, w, m, A), i[1] = Math.min(i[1], S, C, E, x), i[2] = Math.max(i[2], b, w, m, A), i[3] = Math.max(i[3], S, C, E, x);
    }
    static inverseTransform(t) {
      const e = t[0] * t[3] - t[1] * t[2];
      return [
        t[3] / e,
        -t[1] / e,
        -t[2] / e,
        t[0] / e,
        (t[2] * t[5] - t[4] * t[3]) / e,
        (t[4] * t[1] - t[5] * t[0]) / e
      ];
    }
    static singularValueDecompose2dScale(t, e) {
      const i = t[0], s = t[1], n = t[2], r = t[3], a = i ** 2 + s ** 2, o = i * n + s * r, l = n ** 2 + r ** 2, h = (a + l) / 2, c = Math.sqrt(h ** 2 - (a * l - o ** 2));
      e[0] = Math.sqrt(h + c || 1), e[1] = Math.sqrt(h - c || 1);
    }
    static normalizeRect(t) {
      const e = t.slice(0);
      return t[0] > t[2] && (e[0] = t[2], e[2] = t[0]), t[1] > t[3] && (e[1] = t[3], e[3] = t[1]), e;
    }
    static intersect(t, e) {
      const i = Math.max(Math.min(t[0], t[2]), Math.min(e[0], e[2])), s = Math.min(Math.max(t[0], t[2]), Math.max(e[0], e[2]));
      if (i > s) return null;
      const n = Math.max(Math.min(t[1], t[3]), Math.min(e[1], e[3])), r = Math.min(Math.max(t[1], t[3]), Math.max(e[1], e[3]));
      return n > r ? null : [
        i,
        n,
        s,
        r
      ];
    }
    static pointBoundingBox(t, e, i) {
      i[0] = Math.min(i[0], t), i[1] = Math.min(i[1], e), i[2] = Math.max(i[2], t), i[3] = Math.max(i[3], e);
    }
    static rectBoundingBox(t, e, i, s, n) {
      n[0] = Math.min(n[0], t, i), n[1] = Math.min(n[1], e, s), n[2] = Math.max(n[2], t, i), n[3] = Math.max(n[3], e, s);
    }
    static bezierBoundingBox(t, e, i, s, n, r, a, o, l) {
      l[0] = Math.min(l[0], t, a), l[1] = Math.min(l[1], e, o), l[2] = Math.max(l[2], t, a), l[3] = Math.max(l[3], e, o), __privateMethod(this, _R_static, e_fn).call(this, t, i, n, a, e, s, r, o, 3 * (-t + 3 * (i - n) + a), 6 * (t - 2 * i + n), 3 * (i - t), l), __privateMethod(this, _R_static, e_fn).call(this, t, i, n, a, e, s, r, o, 3 * (-e + 3 * (s - r) + o), 6 * (e - 2 * s + r), 3 * (s - e), l);
    }
  }, _R_static = new WeakSet(), t_fn = function(t, e, i, s, n, r, a, o, l, h) {
    if (l <= 0 || l >= 1) return;
    const c = 1 - l, f = l * l, g = f * l, b = c * (c * (c * t + 3 * l * e) + 3 * f * i) + g * s, m = c * (c * (c * n + 3 * l * r) + 3 * f * a) + g * o;
    h[0] = Math.min(h[0], b), h[1] = Math.min(h[1], m), h[2] = Math.max(h[2], b), h[3] = Math.max(h[3], m);
  }, e_fn = function(t, e, i, s, n, r, a, o, l, h, c, f) {
    if (Math.abs(l) < 1e-12) {
      Math.abs(h) >= 1e-12 && __privateMethod(this, _R_static, t_fn).call(this, t, e, i, s, n, r, a, o, -c / h, f);
      return;
    }
    const g = h ** 2 - 4 * c * l;
    if (g < 0) return;
    const b = Math.sqrt(g), m = 2 * l;
    __privateMethod(this, _R_static, t_fn).call(this, t, e, i, s, n, r, a, o, (-h + b) / m, f), __privateMethod(this, _R_static, t_fn).call(this, t, e, i, s, n, r, a, o, (-h - b) / m, f);
  }, __privateAdd(_a, _R_static), _a);
  function Ln(d) {
    return decodeURIComponent(escape(d));
  }
  let vi = null, hs = null;
  Rn = function(d) {
    return vi || (vi = /([\u00a0\u00b5\u037e\u0eb3\u2000-\u200a\u202f\u2126\ufb00-\ufb04\ufb06\ufb20-\ufb36\ufb38-\ufb3c\ufb3e\ufb40-\ufb41\ufb43-\ufb44\ufb46-\ufba1\ufba4-\ufba9\ufbae-\ufbb1\ufbd3-\ufbdc\ufbde-\ufbe7\ufbea-\ufbf8\ufbfc-\ufbfd\ufc00-\ufc5d\ufc64-\ufcf1\ufcf5-\ufd3d\ufd88\ufdf4\ufdfa-\ufdfb\ufe71\ufe77\ufe79\ufe7b\ufe7d]+)|(\ufb05+)/gu, hs = /* @__PURE__ */ new Map([
      [
        "\uFB05",
        "\u017Ft"
      ]
    ])), d.replaceAll(vi, (t, e, i) => e ? e.normalize("NFKC") : hs.get(i));
  };
  Os = function() {
    if (typeof crypto.randomUUID == "function") return crypto.randomUUID();
    const d = new Uint8Array(32);
    return crypto.getRandomValues(d), kn(d);
  };
  const ce = "pdfjs_internal_id_";
  function Fn(d, t, e) {
    if (!Array.isArray(e) || e.length < 2) return false;
    const [i, s, ...n] = e;
    if (!d(i) && !Number.isInteger(i) || !t(s)) return false;
    const r = n.length;
    let a = true;
    switch (s.name) {
      case "XYZ":
        if (r < 2 || r > 3) return false;
        break;
      case "Fit":
      case "FitB":
        return r === 0;
      case "FitH":
      case "FitBH":
      case "FitV":
      case "FitBV":
        if (r > 1) return false;
        break;
      case "FitR":
        if (r !== 4) return false;
        a = false;
        break;
      default:
        return false;
    }
    for (const o of n) if (!(typeof o == "number" || a && o === null)) return false;
    return true;
  }
  Us = () => [];
  $i = () => /* @__PURE__ */ new Map();
  Mi = () => /* @__PURE__ */ Object.create(null);
  At = function(d, t, e) {
    return Math.min(Math.max(d, t), e);
  };
  typeof Math.sumPrecise != "function" && (Math.sumPrecise = function(d) {
    return d.reduce((t, e) => t + e, 0);
  });
  class ke {
    static textContent(t) {
      const e = [], i = {
        items: e,
        styles: /* @__PURE__ */ Object.create(null)
      };
      function s(n) {
        var _a29;
        if (!n) return;
        let r = null;
        const a = n.name;
        if (a === "#text") r = n.value;
        else if (ke.shouldBuildText(a)) ((_a29 = n == null ? void 0 : n.attributes) == null ? void 0 : _a29.textContent) ? r = n.attributes.textContent : n.value && (r = n.value);
        else return;
        if (r !== null && e.push({
          str: r
        }), !!n.children) for (const o of n.children) s(o);
      }
      return s(t), i;
    }
    static shouldBuildText(t) {
      return !(t === "textarea" || t === "input" || t === "option" || t === "select");
    }
  }
  Hs = class {
    static setupStorage(t, e, i, s, n) {
      const r = s.getValue(e, {
        value: null
      });
      switch (i.name) {
        case "textarea":
          if (r.value !== null && (t.textContent = r.value), n === "print") break;
          t.addEventListener("input", (a) => {
            s.setValue(e, {
              value: a.target.value
            });
          });
          break;
        case "input":
          if (i.attributes.type === "radio" || i.attributes.type === "checkbox") {
            if (r.value === i.attributes.xfaOn ? t.setAttribute("checked", true) : r.value === i.attributes.xfaOff && t.removeAttribute("checked"), n === "print") break;
            t.addEventListener("change", (a) => {
              s.setValue(e, {
                value: a.target.checked ? a.target.getAttribute("xfaOn") : a.target.getAttribute("xfaOff")
              });
            });
          } else {
            if (r.value !== null && t.setAttribute("value", r.value), n === "print") break;
            t.addEventListener("input", (a) => {
              s.setValue(e, {
                value: a.target.value
              });
            });
          }
          break;
        case "select":
          if (r.value !== null) {
            t.setAttribute("value", r.value);
            for (const a of i.children) a.attributes.value === r.value ? a.attributes.selected = true : a.attributes.hasOwnProperty("selected") && delete a.attributes.selected;
          }
          t.addEventListener("input", (a) => {
            const o = a.target.options, l = o.selectedIndex === -1 ? "" : o[o.selectedIndex].value;
            s.setValue(e, {
              value: l
            });
          });
          break;
      }
    }
    static setAttributes({ html: t, element: e, storage: i = null, intent: s, linkService: n }) {
      const { attributes: r } = e, a = t instanceof HTMLAnchorElement;
      r.type === "radio" && (r.name = `${r.name}-${s}`);
      for (const [o, l] of Object.entries(r)) if (l != null) switch (o) {
        case "class":
          l.length && t.setAttribute(o, l.join(" "));
          break;
        case "dataId":
          break;
        case "id":
          t.setAttribute("data-element-id", l);
          break;
        case "style":
          Object.assign(t.style, l);
          break;
        case "textContent":
          t.textContent = l;
          break;
        default:
          (!a || o !== "href" && o !== "newWindow") && t.setAttribute(o, l);
      }
      a && n.addLinkAttributes(t, r.href, r.newWindow), i && r.dataId && this.setupStorage(t, r.dataId, e, i);
    }
    static render(t) {
      var _a29, _b7;
      const e = t.annotationStorage, i = t.linkService, s = t.xfaHtml, n = t.intent || "display", r = document.createElement(s.name);
      s.attributes && this.setAttributes({
        html: r,
        element: s,
        intent: n,
        linkService: i
      });
      const a = n !== "richText", o = t.div;
      if (o.append(r), t.viewport) {
        const c = `matrix(${t.viewport.transform.join(",")})`;
        o.style.transform = c;
      }
      a && o.setAttribute("class", "xfaLayer xfaFont");
      const l = [];
      if (s.children.length === 0) {
        if (s.value) {
          const c = document.createTextNode(s.value);
          r.append(c), a && ke.shouldBuildText(s.name) && l.push(c);
        }
        return {
          textDivs: l
        };
      }
      const h = [
        [
          s,
          -1,
          r
        ]
      ];
      for (; h.length > 0; ) {
        const [c, f, g] = h.at(-1);
        if (f + 1 === c.children.length) {
          h.pop();
          continue;
        }
        const b = c.children[++h.at(-1)[1]];
        if (b === null) continue;
        const { name: m } = b;
        if (m === "#text") {
          const A = document.createTextNode(b.value);
          l.push(A), g.append(A);
          continue;
        }
        const w = ((_a29 = b == null ? void 0 : b.attributes) == null ? void 0 : _a29.xmlns) ? document.createElementNS(b.attributes.xmlns, m) : document.createElement(m);
        if (g.append(w), b.attributes && this.setAttributes({
          html: w,
          element: b,
          storage: e,
          intent: n,
          linkService: i
        }), ((_b7 = b.children) == null ? void 0 : _b7.length) > 0) h.push([
          b,
          -1,
          w
        ]);
        else if (b.value) {
          const A = document.createTextNode(b.value);
          a && ke.shouldBuildText(m) && l.push(A), w.append(A);
        }
      }
      for (const c of o.querySelectorAll(".xfaNonInteractive input, .xfaNonInteractive textarea")) c.setAttribute("readOnly", true);
      return {
        textDivs: l
      };
    }
    static update(t) {
      const e = `matrix(${t.viewport.transform.join(",")})`;
      t.div.style.transform = e, t.div.hidden = false;
    }
  };
  const Wt = "http://www.w3.org/2000/svg";
  me = (_b = class {
  }, __publicField(_b, "CSS", 96), __publicField(_b, "PDF", 72), __publicField(_b, "PDF_TO_CSS_UNITS", _b.CSS / _b.PDF), _b);
  De = async function(d, t = "text") {
    if (Ee(d, document.baseURI)) {
      const e = await fetch(d);
      if (!e.ok) throw new Error(e.statusText);
      switch (t) {
        case "blob":
          return e.blob();
        case "bytes":
          return e.bytes();
        case "json":
          return e.json();
      }
      return e.text();
    }
    return new Promise((e, i) => {
      const s = new XMLHttpRequest();
      s.open("GET", d, true), s.responseType = t === "bytes" ? "arraybuffer" : t, s.onreadystatechange = () => {
        if (s.readyState === XMLHttpRequest.DONE) {
          if (s.status === 200 || s.status === 0) {
            switch (t) {
              case "bytes":
                e(new Uint8Array(s.response));
                return;
              case "blob":
              case "json":
                e(s.response);
                return;
            }
            e(s.responseText);
            return;
          }
          i(new Error(s.statusText));
        }
      }, s.send(null);
    });
  };
  class Le {
    constructor({ viewBox: t, userUnit: e, scale: i, rotation: s, offsetX: n = 0, offsetY: r = 0, dontFlip: a = false }) {
      this.viewBox = t, this.userUnit = e, this.scale = i, this.rotation = s, this.offsetX = n, this.offsetY = r, i *= e;
      const o = (t[2] + t[0]) / 2, l = (t[3] + t[1]) / 2;
      let h, c, f, g;
      switch (s %= 360, s < 0 && (s += 360), s) {
        case 180:
          h = -1, c = 0, f = 0, g = 1;
          break;
        case 90:
          h = 0, c = 1, f = 1, g = 0;
          break;
        case 270:
          h = 0, c = -1, f = -1, g = 0;
          break;
        case 0:
          h = 1, c = 0, f = 0, g = -1;
          break;
        default:
          throw new Error("PageViewport: Invalid rotation, must be a multiple of 90 degrees.");
      }
      a && (f = -f, g = -g);
      let b, m, w, A;
      h === 0 ? (b = Math.abs(l - t[1]) * i + n, m = Math.abs(o - t[0]) * i + r, w = (t[3] - t[1]) * i, A = (t[2] - t[0]) * i) : (b = Math.abs(o - t[0]) * i + n, m = Math.abs(l - t[1]) * i + r, w = (t[2] - t[0]) * i, A = (t[3] - t[1]) * i), this.transform = [
        h * i,
        c * i,
        f * i,
        g * i,
        b - h * i * o - f * i * l,
        m - c * i * o - g * i * l
      ], this.width = w, this.height = A;
    }
    get rawDims() {
      const t = this.viewBox;
      return H(this, "rawDims", {
        pageWidth: t[2] - t[0],
        pageHeight: t[3] - t[1],
        pageX: t[0],
        pageY: t[1]
      });
    }
    clone({ scale: t = this.scale, rotation: e = this.rotation, offsetX: i = this.offsetX, offsetY: s = this.offsetY, dontFlip: n = false } = {}) {
      return new Le({
        viewBox: this.viewBox.slice(),
        userUnit: this.userUnit,
        scale: t,
        rotation: e,
        offsetX: i,
        offsetY: s,
        dontFlip: n
      });
    }
    convertToViewportPoint(t, e) {
      const i = [
        t,
        e
      ];
      return R.applyTransform(i, this.transform), i;
    }
    convertToViewportRectangle(t) {
      const e = [
        t[0],
        t[1]
      ];
      R.applyTransform(e, this.transform);
      const i = [
        t[2],
        t[3]
      ];
      return R.applyTransform(i, this.transform), [
        e[0],
        e[1],
        i[0],
        i[1]
      ];
    }
    convertToPdfPoint(t, e) {
      const i = [
        t,
        e
      ];
      return R.applyInverseTransform(i, this.transform), i;
    }
  }
  ji = class extends se {
    constructor(t, e = 0) {
      super(t, "RenderingCancelledException"), this.extraDelay = e;
    }
  };
  si = function(d) {
    const t = d.length;
    let e = 0;
    for (; e < t && d[e].trim() === ""; ) e++;
    return d.substring(e, e + 5).toLowerCase() === "data:";
  };
  Gi = function(d) {
    return typeof d == "string" && /\.pdf$/i.test(d);
  };
  Bn = function(d) {
    return [d] = d.split(/[#?]/, 1), Pi(d);
  };
  Nn = function(d, t = "document.pdf") {
    if (typeof d != "string") return t;
    if (si(d)) return j('getPdfFilenameFromUrl: ignore "data:"-URL for performance reasons.'), t;
    const i = ((a) => {
      try {
        return new URL(a);
      } catch {
        try {
          return new URL(decodeURIComponent(a));
        } catch {
          try {
            return new URL(a, "https://foo.bar");
          } catch {
            try {
              return new URL(decodeURIComponent(a), "https://foo.bar");
            } catch {
              return null;
            }
          }
        }
      }
    })(d);
    if (!i) return t;
    const s = (a) => {
      try {
        let o = decodeURIComponent(a);
        return o.includes("/") && (o = Pi(o), /^\.pdf$/i.test(o)) ? a : o;
      } catch {
        return a;
      }
    }, n = /\.pdf$/i, r = Pi(i.pathname);
    if (n.test(r)) return s(r);
    if (i.searchParams.size > 0) {
      const a = (l) => [
        ...l
      ].findLast((h) => n.test(h)), o = a(i.searchParams.values()) ?? a(i.searchParams.keys());
      if (o) return s(o);
    }
    if (i.hash) {
      const o = /[^/?#=]+\.pdf\b(?!.*\.pdf\b)/i.exec(i.hash);
      if (o) return s(o[0]);
    }
    return t;
  };
  class cs {
    constructor() {
      __publicField(this, "started", /* @__PURE__ */ Object.create(null));
      __publicField(this, "times", []);
    }
    time(t) {
      t in this.started && j(`Timer is already running for ${t}`), this.started[t] = Date.now();
    }
    timeEnd(t) {
      t in this.started || j(`Timer has not been started for ${t}`), this.times.push({
        name: t,
        start: this.started[t],
        end: Date.now()
      }), delete this.started[t];
    }
    toString() {
      const t = [];
      let e = 0;
      for (const { name: i } of this.times) e = Math.max(i.length, e);
      for (const { name: i, start: s, end: n } of this.times) t.push(`${i.padEnd(e)} ${n - s}ms
`);
      return t.join("");
    }
  }
  function Ee(d, t) {
    const e = t ? URL.parse(d, t) : URL.parse(d);
    return /https?:/.test((e == null ? void 0 : e.protocol) ?? "");
  }
  Ft = function(d) {
    d.preventDefault();
  };
  dt = function(d) {
    d.preventDefault(), d.stopPropagation();
  };
  function $s(d) {
    console.log("Deprecated API usage: " + d);
  }
  Ii = (_c = class {
    static toDateObject(t) {
      if (t instanceof Date) return t;
      if (!t || typeof t != "string") return null;
      __privateGet(this, _t) || __privateSet(this, _t, new RegExp("^D:(\\d{4})(\\d{2})?(\\d{2})?(\\d{2})?(\\d{2})?(\\d{2})?([Z|+|-])?(\\d{2})?'?(\\d{2})?'?"));
      const e = __privateGet(this, _t).exec(t);
      if (!e) return null;
      const i = parseInt(e[1], 10);
      let s = parseInt(e[2], 10);
      s = s >= 1 && s <= 12 ? s - 1 : 0;
      let n = parseInt(e[3], 10);
      n = n >= 1 && n <= 31 ? n : 1;
      let r = parseInt(e[4], 10);
      r = r >= 0 && r <= 23 ? r : 0;
      let a = parseInt(e[5], 10);
      a = a >= 0 && a <= 59 ? a : 0;
      let o = parseInt(e[6], 10);
      o = o >= 0 && o <= 59 ? o : 0;
      const l = e[7] || "Z";
      let h = parseInt(e[8], 10);
      h = h >= 0 && h <= 23 ? h : 0;
      let c = parseInt(e[9], 10) || 0;
      return c = c >= 0 && c <= 59 ? c : 0, l === "-" ? (r += h, a += c) : l === "+" && (r -= h, a -= c), new Date(Date.UTC(i, s, n, r, a, o));
    }
  }, _t = new WeakMap(), __privateAdd(_c, _t), _c);
  On = function(d, { scale: t = 1, rotation: e = 0 }) {
    const { width: i, height: s } = d.attributes.style, n = [
      0,
      0,
      parseInt(i),
      parseInt(s)
    ];
    return new Le({
      viewBox: n,
      userUnit: 1,
      scale: t,
      rotation: e
    });
  };
  Re = function(d) {
    if (d.startsWith("#")) {
      const t = parseInt(d.slice(1), 16);
      return [
        (t & 16711680) >> 16,
        (t & 65280) >> 8,
        t & 255
      ];
    }
    return d.startsWith("rgb(") ? d.slice(4, -1).split(",").map((t) => parseInt(t)) : d.startsWith("rgba(") ? d.slice(5, -1).split(",").map((t) => parseInt(t)).slice(0, 3) : (j(`Not a valid color format: "${d}"`), [
      0,
      0,
      0
    ]);
  };
  function Un(d) {
    const t = document.createElement("span");
    t.style.visibility = "hidden", t.style.colorScheme = "only light", document.body.append(t);
    for (const e of d.keys()) {
      t.style.color = e;
      const i = window.getComputedStyle(t).color;
      d.set(e, Re(i));
    }
    t.remove();
  }
  function ot(d) {
    const { a: t, b: e, c: i, d: s, e: n, f: r } = d.getTransform();
    return [
      t,
      e,
      i,
      s,
      n,
      r
    ];
  }
  function Ht(d) {
    const { a: t, b: e, c: i, d: s, e: n, f: r } = d.getTransform().invertSelf();
    return [
      t,
      e,
      i,
      s,
      n,
      r
    ];
  }
  ee = function(d, t, e = false, i = true) {
    if (t instanceof Le) {
      const { pageWidth: s, pageHeight: n } = t.rawDims, { style: r } = d, a = mt.isCSSRoundSupported, o = `var(--total-scale-factor) * ${s}px`, l = `var(--total-scale-factor) * ${n}px`, h = a ? `round(down, ${o}, var(--scale-round-x))` : `calc(${o})`, c = a ? `round(down, ${l}, var(--scale-round-y))` : `calc(${l})`;
      !e || t.rotation % 180 === 0 ? (r.width = h, r.height = c) : (r.width = c, r.height = h);
    }
    i && d.setAttribute("data-main-rotation", t.rotation);
  };
  zt = class {
    constructor() {
      const { pixelRatio: t } = zt;
      this.sx = t, this.sy = t;
    }
    get scaled() {
      return this.sx !== 1 || this.sy !== 1;
    }
    get symmetric() {
      return this.sx === this.sy;
    }
    limitCanvas(t, e, i, s, n = -1) {
      let r = 1 / 0, a = 1 / 0, o = 1 / 0;
      i = zt.capPixels(i, n), i > 0 && (r = Math.sqrt(i / (t * e))), s !== -1 && (a = s / t, o = s / e);
      const l = Math.min(r, a, o);
      return this.sx > l || this.sy > l ? (this.sx = l, this.sy = l, true) : false;
    }
    static get pixelRatio() {
      return globalThis.devicePixelRatio || 1;
    }
    static capPixels(t, e) {
      if (e >= 0) {
        const i = Math.ceil(window.screen.availWidth * window.screen.availHeight * this.pixelRatio ** 2 * (1 + e / 100));
        return t > 0 ? Math.min(t, i) : i;
      }
      return t;
    }
  };
  Di = [
    "image/apng",
    "image/avif",
    "image/bmp",
    "image/gif",
    "image/jpeg",
    "image/png",
    "image/svg+xml",
    "image/webp",
    "image/x-icon"
  ];
  class Hn {
    static get isDarkMode() {
      var _a29;
      return H(this, "isDarkMode", !!((_a29 = window == null ? void 0 : window.matchMedia) == null ? void 0 : _a29.call(window, "(prefers-color-scheme: dark)").matches));
    }
  }
  $n = class {
    static get commentForegroundColor() {
      const t = document.createElement("span");
      t.classList.add("comment", "sidebar");
      const { style: e } = t;
      e.width = e.height = "0", e.display = "none", e.color = "var(--comment-fg-color)", document.body.append(t);
      const { color: i } = window.getComputedStyle(t);
      return t.remove(), H(this, "commentForegroundColor", Re(i));
    }
  };
  jn = function(d, t, e, i) {
    i = At(i ?? 1, 0, 1);
    const s = 255 * (1 - i);
    return d = Math.round(d * i + s), t = Math.round(t * i + s), e = Math.round(e * i + s), [
      d,
      t,
      e
    ];
  };
  function ds(d, t) {
    const e = d[0] / 255, i = d[1] / 255, s = d[2] / 255, n = Math.max(e, i, s), r = Math.min(e, i, s), a = (n + r) / 2;
    if (n === r) t[0] = t[1] = 0;
    else {
      const o = n - r;
      switch (t[1] = a < 0.5 ? o / (n + r) : o / (2 - n - r), n) {
        case e:
          t[0] = ((i - s) / o + (i < s ? 6 : 0)) * 60;
          break;
        case i:
          t[0] = ((s - e) / o + 2) * 60;
          break;
        case s:
          t[0] = ((e - i) / o + 4) * 60;
          break;
      }
    }
    t[2] = a;
  }
  function Li(d, t) {
    const e = d[0], i = d[1], s = d[2], n = (1 - Math.abs(2 * s - 1)) * i, r = n * (1 - Math.abs(e / 60 % 2 - 1)), a = s - n / 2;
    switch (Math.floor(e / 60)) {
      case 0:
        t[0] = n + a, t[1] = r + a, t[2] = a;
        break;
      case 1:
        t[0] = r + a, t[1] = n + a, t[2] = a;
        break;
      case 2:
        t[0] = a, t[1] = n + a, t[2] = r + a;
        break;
      case 3:
        t[0] = a, t[1] = r + a, t[2] = n + a;
        break;
      case 4:
        t[0] = r + a, t[1] = a, t[2] = n + a;
        break;
      case 5:
      case 6:
        t[0] = n + a, t[1] = a, t[2] = r + a;
        break;
    }
  }
  function us(d) {
    return d <= 0.03928 ? d / 12.92 : ((d + 0.055) / 1.055) ** 2.4;
  }
  function fs(d, t, e) {
    Li(d, e), e.map(us);
    const i = 0.2126 * e[0] + 0.7152 * e[1] + 0.0722 * e[2];
    Li(t, e), e.map(us);
    const s = 0.2126 * e[0] + 0.7152 * e[1] + 0.0722 * e[2];
    return i > s ? (i + 0.05) / (s + 0.05) : (s + 0.05) / (i + 0.05);
  }
  const ps = /* @__PURE__ */ new Map();
  Gn = function(d, t) {
    const e = d[0] + d[1] * 256 + d[2] * 65536 + t[0] * 16777216 + t[1] * 4294967296 + t[2] * 1099511627776;
    let i = ps.get(e);
    if (i) return i;
    const s = new Float32Array(9), n = s.subarray(0, 3), r = s.subarray(3, 6);
    ds(d, r);
    const a = s.subarray(6, 9);
    ds(t, a);
    const o = a[2] < 0.5, l = o ? 12 : 4.5;
    if (r[2] = o ? Math.sqrt(r[2]) : 1 - Math.sqrt(1 - r[2]), fs(r, a, n) < l) {
      let h, c;
      o ? (h = r[2], c = 1) : (h = 0, c = r[2]);
      const f = 5e-3;
      for (; c - h > f; ) {
        const g = r[2] = (h + c) / 2;
        o === fs(r, a, n) < l ? h = g : c = g;
      }
      r[2] = o ? c : h;
    }
    return Li(r, n), i = R.makeHexColor(Math.round(n[0] * 255), Math.round(n[1] * 255), Math.round(n[2] * 255)), ps.set(e, i), i;
  };
  js = function({ html: d, dir: t, className: e }, i) {
    const s = document.createDocumentFragment();
    if (typeof d == "string") {
      const n = document.createElement("p");
      n.dir = t || "auto";
      const r = d.split(/(?:\r\n?|\n)/);
      for (let a = 0, o = r.length; a < o; ++a) {
        const l = r[a];
        n.append(document.createTextNode(l)), a < o - 1 && n.append(document.createElement("br"));
      }
      s.append(n);
    } else Hs.render({
      xfaHtml: d,
      div: s,
      intent: "richText"
    });
    s.firstElementChild.classList.add("richText", e), i.append(s);
  };
  function Gs(d) {
    const t = new Path2D();
    if (!d) return t;
    for (let e = 0, i = d.length; e < i; ) switch (d[e++]) {
      case ye.moveTo:
        t.moveTo(d[e++], d[e++]);
        break;
      case ye.lineTo:
        t.lineTo(d[e++], d[e++]);
        break;
      case ye.curveTo:
        t.bezierCurveTo(d[e++], d[e++], d[e++], d[e++], d[e++], d[e++]);
        break;
      case ye.quadraticCurveTo:
        t.quadraticCurveTo(d[e++], d[e++], d[e++], d[e++]);
        break;
      case ye.closePath:
        t.closePath();
        break;
      default:
        j(`Unrecognized drawing path operator: ${d[e - 1]}`);
        break;
    }
    return t;
  }
  class zn {
    constructor() {
      __privateAdd(this, _zn_instances);
      __privateAdd(this, _t2, null);
      __privateAdd(this, _e2, null);
      __privateAdd(this, _s2, null);
      __privateAdd(this, _i2, 0);
      __privateAdd(this, _a2, []);
      __privateAdd(this, _r2, null);
      __privateAdd(this, _n2, null);
    }
    get pagesNumber() {
      return __privateGet(this, _i2);
    }
    set pagesNumber(t) {
      __privateGet(this, _i2) !== t && (__privateSet(this, _i2, t), __privateMethod(this, _zn_instances, o_fn).call(this));
    }
    addListener(t) {
      __privateGet(this, _a2).push(t);
    }
    removeListener(t) {
      const e = __privateGet(this, _a2).indexOf(t);
      e >= 0 && __privateGet(this, _a2).splice(e, 1);
    }
    movePages(t, e, i) {
      __privateMethod(this, _zn_instances, l_fn).call(this, true);
      const s = __privateGet(this, _e2), n = __privateGet(this, _t2), r = e.length, a = new Uint32Array(r);
      let o = 0;
      for (let f = 0; f < r; f++) {
        const g = e[f] - 1;
        a[f] = s[g], g < i && (o += 1);
      }
      const l = __privateGet(this, _i2);
      let h = i - o;
      const c = l - r;
      h = At(h, 0, c);
      for (let f = 0, g = 0; f < l; f++) t.has(f + 1) || (s[g++] = s[f]);
      s.copyWithin(h + r, h, c), s.set(a, h), __privateMethod(this, _zn_instances, d_fn).call(this, n, null), __privateMethod(this, _zn_instances, u_fn).call(this), __privateMethod(this, _zn_instances, h_fn).call(this, {
        type: "move"
      }), s.every((f, g) => f === g + 1) && __privateMethod(this, _zn_instances, o_fn).call(this);
    }
    deletePages(t) {
      __privateMethod(this, _zn_instances, l_fn).call(this, true);
      const e = __privateGet(this, _e2), i = __privateGet(this, _t2);
      this.pagesNumber -= t.length, __privateMethod(this, _zn_instances, l_fn).call(this, false);
      const s = __privateGet(this, _e2);
      let n = 0, r = 0;
      for (const a of t) {
        const o = a - 1;
        o !== n && (s.set(e.subarray(n, o), r), r += o - n), n = o + 1;
      }
      n < e.length && s.set(e.subarray(n), r), __privateMethod(this, _zn_instances, d_fn).call(this, i, null), __privateMethod(this, _zn_instances, u_fn).call(this), __privateMethod(this, _zn_instances, h_fn).call(this, {
        type: "delete",
        pageNumbers: t
      });
    }
    copyPages(t) {
      __privateMethod(this, _zn_instances, l_fn).call(this, true), __privateSet(this, _n2, t), __privateSet(this, _r2, t.map((e) => __privateGet(this, _e2)[e - 1])), __privateMethod(this, _zn_instances, h_fn).call(this, {
        type: "copy",
        pageNumbers: t
      });
    }
    pastePages(t) {
      __privateMethod(this, _zn_instances, l_fn).call(this, true);
      const e = __privateGet(this, _e2), i = __privateGet(this, _t2), s = __privateGet(this, _n2), n = /* @__PURE__ */ new Map();
      let r = t;
      for (const o of s) n.set(++r, o);
      this.pagesNumber += s.length, __privateMethod(this, _zn_instances, l_fn).call(this, false);
      const a = __privateGet(this, _e2);
      a.set(e.subarray(0, t), 0), a.set(__privateGet(this, _r2), t), a.set(e.subarray(t), t + s.length), __privateMethod(this, _zn_instances, d_fn).call(this, i, n), __privateMethod(this, _zn_instances, u_fn).call(this), __privateMethod(this, _zn_instances, h_fn).call(this, {
        type: "paste"
      }), __privateSet(this, _r2, null);
    }
    hasBeenAltered() {
      return __privateGet(this, _e2) !== null;
    }
    getPageMappingForSaving() {
      const t = __privateGet(this, _t2);
      let e = 0;
      for (const s of t.values()) e = Math.max(e, s.length);
      const i = new Array(e);
      for (let s = 0; s < e; s++) i[s] = {
        document: null,
        pageIndices: [],
        includePages: []
      };
      for (const [s, n] of t) for (let r = 0, a = n.length; r < a; r++) i[r].includePages.push([
        s - 1,
        n[r] - 1
      ]);
      for (const { includePages: s, pageIndices: n } of i) {
        s.sort((r, a) => r[0] - a[0]);
        for (let r = 0, a = s.length; r < a; r++) n.push(s[r][1]), s[r] = s[r][0];
      }
      return i;
    }
    getPrevPageNumber(t) {
      return __privateGet(this, _s2)[t - 1] ?? 0;
    }
    getPageNumber(t) {
      var _a29;
      return __privateGet(this, _t2) ? ((_a29 = __privateGet(this, _t2).get(t)) == null ? void 0 : _a29[0]) ?? 0 : t;
    }
    getPageId(t) {
      var _a29;
      return ((_a29 = __privateGet(this, _e2)) == null ? void 0 : _a29[t - 1]) ?? t;
    }
    getMapping() {
      return __privateGet(this, _e2).subarray(0, this.pagesNumber);
    }
  }
  _t2 = new WeakMap();
  _e2 = new WeakMap();
  _s2 = new WeakMap();
  _i2 = new WeakMap();
  _a2 = new WeakMap();
  _r2 = new WeakMap();
  _n2 = new WeakMap();
  _zn_instances = new WeakSet();
  o_fn = function() {
    __privateSet(this, _e2, null), __privateSet(this, _t2, null);
  };
  h_fn = function(t) {
    for (const e of __privateGet(this, _a2)) e(t);
  };
  l_fn = function(t) {
    if (__privateGet(this, _e2)) return;
    const e = __privateGet(this, _i2), i = __privateSet(this, _e2, new Uint32Array(e));
    __privateSet(this, _s2, new Int32Array(i));
    const s = __privateSet(this, _t2, /* @__PURE__ */ new Map());
    if (t) for (let n = 1; n <= e; n++) i[n - 1] = n, s.set(n, [
      n
    ]);
  };
  u_fn = function() {
    const t = __privateGet(this, _t2), e = __privateGet(this, _e2);
    t.clear();
    for (let i = 0, s = __privateGet(this, _i2); i < s; i++) {
      const n = e[i], r = t.get(n);
      r ? r.push(i + 1) : t.set(n, [
        i + 1
      ]);
    }
  };
  d_fn = function(t, e) {
    var _a29;
    const i = __privateGet(this, _s2), s = __privateGet(this, _e2), n = /* @__PURE__ */ new Map();
    for (let r = 0, a = __privateGet(this, _i2); r < a; r++) {
      const o = e == null ? void 0 : e.get(r + 1);
      if (o) {
        i[r] = -o;
        continue;
      }
      const l = s[r], h = n.get(l) || 0;
      i[r] = (_a29 = t.get(l)) == null ? void 0 : _a29[h], n.set(l, h + 1);
    }
  };
  const __e = class __e {
    constructor(t) {
      __privateAdd(this, __e_instances);
      __privateAdd(this, _t3, null);
      __privateAdd(this, _e3, null);
      __privateAdd(this, _s3);
      __privateAdd(this, _i3, null);
      __privateAdd(this, _a3, null);
      __privateAdd(this, _r3, null);
      __privateAdd(this, _n3, null);
      __privateAdd(this, _o, null);
      __privateSet(this, _s3, t), __privateGet(__e, _h) || __privateSet(__e, _h, Object.freeze({
        freetext: "pdfjs-editor-remove-freetext-button",
        highlight: "pdfjs-editor-remove-highlight-button",
        ink: "pdfjs-editor-remove-ink-button",
        stamp: "pdfjs-editor-remove-stamp-button",
        signature: "pdfjs-editor-remove-signature-button"
      }));
    }
    render() {
      const t = __privateSet(this, _t3, document.createElement("div"));
      t.classList.add("editToolbar", "hidden"), t.setAttribute("role", "toolbar");
      const e = __privateGet(this, _s3)._uiManager._signal;
      e instanceof AbortSignal && !e.aborted && (t.addEventListener("contextmenu", Ft, {
        signal: e
      }), t.addEventListener("pointerdown", __privateMethod(__e, __e_static, l_fn2), {
        signal: e
      }));
      const i = __privateSet(this, _i3, document.createElement("div"));
      i.className = "buttons", t.append(i);
      const s = __privateGet(this, _s3).toolbarPosition;
      if (s) {
        const { style: n } = t, r = __privateGet(this, _s3)._uiManager.direction === "ltr" ? 1 - s[0] : s[0];
        n.insetInlineEnd = `${100 * r}%`, n.top = `calc(${100 * s[1]}% + var(--editor-toolbar-vert-offset))`;
      }
      return t;
    }
    get div() {
      return __privateGet(this, _t3);
    }
    hide() {
      var _a29;
      __privateGet(this, _t3).classList.add("hidden"), (_a29 = __privateGet(this, _e3)) == null ? void 0 : _a29.hideDropdown();
    }
    show() {
      var _a29, _b7;
      __privateGet(this, _t3).classList.remove("hidden"), (_a29 = __privateGet(this, _a3)) == null ? void 0 : _a29.shown(), (_b7 = __privateGet(this, _r3)) == null ? void 0 : _b7.shown();
    }
    addDeleteButton() {
      const { editorType: t, _uiManager: e } = __privateGet(this, _s3), i = document.createElement("button");
      i.classList.add("basic", "deleteButton"), i.tabIndex = 0, i.setAttribute("data-l10n-id", __privateGet(__e, _h)[t]), __privateMethod(this, __e_instances, f_fn).call(this, i) && i.addEventListener("click", (s) => {
        e.delete();
      }, {
        signal: e._signal
      }), __privateGet(this, _i3).append(i);
    }
    async addAltText(t) {
      const e = await t.render();
      __privateMethod(this, __e_instances, f_fn).call(this, e), __privateGet(this, _i3).append(e, __privateGet(this, __e_instances, m_get)), __privateSet(this, _a3, t);
    }
    addComment(t, e = null) {
      if (__privateGet(this, _r3)) return;
      const i = t.renderForToolbar();
      if (!i) return;
      __privateMethod(this, __e_instances, f_fn).call(this, i);
      const s = __privateSet(this, _n3, __privateGet(this, __e_instances, m_get));
      e ? (__privateGet(this, _i3).insertBefore(i, e), __privateGet(this, _i3).insertBefore(s, e)) : __privateGet(this, _i3).append(i, s), __privateSet(this, _r3, t), t.toolbar = this;
    }
    addColorPicker(t) {
      if (__privateGet(this, _e3)) return;
      __privateSet(this, _e3, t);
      const e = t.renderButton();
      __privateMethod(this, __e_instances, f_fn).call(this, e), __privateGet(this, _i3).append(e, __privateGet(this, __e_instances, m_get));
    }
    async addEditSignatureButton(t) {
      const e = __privateSet(this, _o, await t.renderEditButton(__privateGet(this, _s3)));
      __privateMethod(this, __e_instances, f_fn).call(this, e), __privateGet(this, _i3).append(e, __privateGet(this, __e_instances, m_get));
    }
    removeButton(t) {
      var _a29, _b7;
      t === "comment" && ((_a29 = __privateGet(this, _r3)) == null ? void 0 : _a29.removeToolbarCommentButton(), __privateSet(this, _r3, null), (_b7 = __privateGet(this, _n3)) == null ? void 0 : _b7.remove(), __privateSet(this, _n3, null));
    }
    async addButton(t, e) {
      switch (t) {
        case "colorPicker":
          e && this.addColorPicker(e);
          break;
        case "altText":
          e && await this.addAltText(e);
          break;
        case "editSignature":
          e && await this.addEditSignatureButton(e);
          break;
        case "delete":
          this.addDeleteButton();
          break;
        case "comment":
          e && this.addComment(e);
          break;
      }
    }
    async addButtonBefore(t, e, i) {
      if (!e && t === "comment") return;
      const s = __privateGet(this, _i3).querySelector(i);
      s && t === "comment" && this.addComment(e, s);
    }
    updateEditSignatureButton(t) {
      __privateGet(this, _o) && (__privateGet(this, _o).title = t);
    }
    remove() {
      var _a29;
      __privateGet(this, _t3).remove(), (_a29 = __privateGet(this, _e3)) == null ? void 0 : _a29.destroy(), __privateSet(this, _e3, null);
    }
  };
  _t3 = new WeakMap();
  _e3 = new WeakMap();
  _s3 = new WeakMap();
  _i3 = new WeakMap();
  _a3 = new WeakMap();
  _r3 = new WeakMap();
  _n3 = new WeakMap();
  _o = new WeakMap();
  _h = new WeakMap();
  __e_static = new WeakSet();
  l_fn2 = function(t) {
    t.stopPropagation();
  };
  __e_instances = new WeakSet();
  u_fn2 = function(t) {
    __privateGet(this, _s3)._focusEventsAllowed = false, dt(t);
  };
  d_fn2 = function(t) {
    __privateGet(this, _s3)._focusEventsAllowed = true, dt(t);
  };
  f_fn = function(t) {
    const e = __privateGet(this, _s3)._uiManager._signal;
    return !(e instanceof AbortSignal) || e.aborted ? false : (t.addEventListener("focusin", __privateMethod(this, __e_instances, u_fn2).bind(this), {
      capture: true,
      signal: e
    }), t.addEventListener("focusout", __privateMethod(this, __e_instances, d_fn2).bind(this), {
      capture: true,
      signal: e
    }), t.addEventListener("contextmenu", Ft, {
      signal: e
    }), true);
  };
  m_get = function() {
    const t = document.createElement("div");
    return t.className = "divider", t;
  };
  __privateAdd(__e, __e_static);
  __privateAdd(__e, _h, null);
  let _e = __e;
  class Vn {
    constructor(t) {
      __privateAdd(this, _Vn_instances);
      __privateAdd(this, _t4, null);
      __privateAdd(this, _e4, null);
      __privateAdd(this, _s4);
      __privateSet(this, _s4, t);
    }
    show(t, e, i) {
      const [s, n] = __privateMethod(this, _Vn_instances, a_fn).call(this, e, i), { style: r } = __privateGet(this, _e4) || __privateSet(this, _e4, __privateMethod(this, _Vn_instances, i_fn).call(this));
      t.append(__privateGet(this, _e4)), r.insetInlineEnd = `${100 * s}%`, r.top = `calc(${100 * n}% + var(--editor-toolbar-vert-offset))`;
    }
    hide() {
      __privateGet(this, _e4).remove();
    }
  }
  _t4 = new WeakMap();
  _e4 = new WeakMap();
  _s4 = new WeakMap();
  _Vn_instances = new WeakSet();
  i_fn = function() {
    const t = __privateSet(this, _e4, document.createElement("div"));
    t.className = "editToolbar", t.setAttribute("role", "toolbar");
    const e = __privateGet(this, _s4)._signal;
    e instanceof AbortSignal && !e.aborted && t.addEventListener("contextmenu", Ft, {
      signal: e
    });
    const i = __privateSet(this, _t4, document.createElement("div"));
    return i.className = "buttons", t.append(i), __privateGet(this, _s4).hasCommentManager() && __privateMethod(this, _Vn_instances, r_fn).call(this, "commentButton", "pdfjs-comment-floating-button", "pdfjs-comment-floating-button-label", () => {
      __privateGet(this, _s4).commentSelection("floating_button");
    }), __privateMethod(this, _Vn_instances, r_fn).call(this, "highlightButton", "pdfjs-highlight-floating-button1", "pdfjs-highlight-floating-button-label", () => {
      __privateGet(this, _s4).highlightSelection("floating_button");
    }), t;
  };
  a_fn = function(t, e) {
    let i = 0, s = 0;
    for (const n of t) {
      const r = n.y + n.height;
      if (r < i) continue;
      const a = n.x + (e ? n.width : 0);
      if (r > i) {
        s = a, i = r;
        continue;
      }
      e ? a > s && (s = a) : a < s && (s = a);
    }
    return [
      e ? 1 - s : s,
      i
    ];
  };
  r_fn = function(t, e, i, s) {
    const n = document.createElement("button");
    n.classList.add("basic", t), n.tabIndex = 0, n.setAttribute("data-l10n-id", e);
    const r = document.createElement("span");
    n.append(r), r.className = "visuallyHidden", r.setAttribute("data-l10n-id", i);
    const a = __privateGet(this, _s4)._signal;
    a instanceof AbortSignal && !a.aborted && (n.addEventListener("contextmenu", Ft, {
      signal: a
    }), n.addEventListener("click", s, {
      signal: a
    })), __privateGet(this, _t4).append(n);
  };
  function zs(d, t, e) {
    for (const i of e) t.addEventListener(i, d[i].bind(d));
  }
  const _Q = class _Q {
    static initializeAndAddPointerId(t) {
      (__privateGet(_Q, _e5) || __privateSet(_Q, _e5, /* @__PURE__ */ new Set())).add(t);
    }
    static setPointer(t, e) {
      __privateGet(_Q, _t5) || __privateSet(_Q, _t5, e), __privateGet(_Q, _i4) ?? __privateSet(_Q, _i4, t);
    }
    static setTimeStamp(t) {
      __privateSet(_Q, _s5, t);
    }
    static isSamePointerId(t) {
      return __privateGet(_Q, _t5) === t;
    }
    static isSamePointerIdOrRemove(t) {
      var _a29;
      return __privateGet(_Q, _t5) === t ? true : ((_a29 = __privateGet(_Q, _e5)) == null ? void 0 : _a29.delete(t), false);
    }
    static isSamePointerType(t) {
      return __privateGet(_Q, _i4) === t;
    }
    static isInitializedAndDifferentPointerType(t) {
      return __privateGet(_Q, _i4) !== null && !_Q.isSamePointerType(t);
    }
    static isSameTimeStamp(t) {
      return __privateGet(_Q, _s5) === t;
    }
    static isUsingMultiplePointers() {
      var _a29;
      return ((_a29 = __privateGet(_Q, _e5)) == null ? void 0 : _a29.size) >= 1;
    }
    static clearPointerType() {
      __privateSet(_Q, _i4, null);
    }
    static clearPointerIds() {
      __privateSet(_Q, _t5, NaN), __privateSet(_Q, _e5, null);
    }
    static clearTimeStamp() {
      __privateSet(_Q, _s5, NaN);
    }
  };
  _t5 = new WeakMap();
  _e5 = new WeakMap();
  _s5 = new WeakMap();
  _i4 = new WeakMap();
  __privateAdd(_Q, _t5, NaN);
  __privateAdd(_Q, _e5, null);
  __privateAdd(_Q, _s5, NaN);
  __privateAdd(_Q, _i4, null);
  let Q = _Q;
  class Wn {
    constructor() {
      __privateAdd(this, _t6, 0);
    }
    get id() {
      return `${Te}${__privateWrapper(this, _t6)._++}`;
    }
  }
  _t6 = new WeakMap();
  const _zi = class _zi {
    constructor() {
      __privateAdd(this, _zi_instances);
      __privateAdd(this, _t7, Os());
      __privateAdd(this, _e6, 0);
      __privateAdd(this, _s6, null);
    }
    static get _isSVGFittingCanvas() {
      const t = 'data:image/svg+xml;charset=UTF-8,<svg viewBox="0 0 1 1" width="1" height="1" xmlns="http://www.w3.org/2000/svg"><rect width="1" height="1" style="fill:red;"/></svg>', i = new OffscreenCanvas(1, 3).getContext("2d", {
        willReadFrequently: true
      }), s = new Image();
      s.src = t;
      const n = s.decode().then(() => (i.drawImage(s, 0, 0, 1, 1, 0, 0, 1, 3), new Uint32Array(i.getImageData(0, 0, 1, 1).data.buffer)[0] === 0));
      return H(this, "_isSVGFittingCanvas", n);
    }
    async getFromFile(t) {
      const { lastModified: e, name: i, size: s, type: n } = t;
      return __privateMethod(this, _zi_instances, i_fn2).call(this, `${e}_${i}_${s}_${n}`, t);
    }
    async getFromUrl(t) {
      return __privateMethod(this, _zi_instances, i_fn2).call(this, t, t);
    }
    async getFromBlob(t, e) {
      const i = await e;
      return __privateMethod(this, _zi_instances, i_fn2).call(this, t, i);
    }
    async getFromId(t) {
      __privateGet(this, _s6) || __privateSet(this, _s6, /* @__PURE__ */ new Map());
      const e = __privateGet(this, _s6).get(t);
      if (!e) return null;
      if (e.bitmap) return e.refCounter += 1, e;
      if (e.file) return this.getFromFile(e.file);
      if (e.blobPromise) {
        const { blobPromise: i } = e;
        return delete e.blobPromise, this.getFromBlob(e.id, i);
      }
      return this.getFromUrl(e.url);
    }
    getFromCanvas(t, e) {
      __privateGet(this, _s6) || __privateSet(this, _s6, /* @__PURE__ */ new Map());
      let i = __privateGet(this, _s6).get(t);
      if (i == null ? void 0 : i.bitmap) return i.refCounter += 1, i;
      const s = new OffscreenCanvas(e.width, e.height);
      return s.getContext("2d").drawImage(e, 0, 0), i = {
        bitmap: s.transferToImageBitmap(),
        id: `image_${__privateGet(this, _t7)}_${__privateWrapper(this, _e6)._++}`,
        refCounter: 1,
        isSvg: false
      }, __privateGet(this, _s6).set(t, i), __privateGet(this, _s6).set(i.id, i), i;
    }
    getSvgUrl(t) {
      const e = __privateGet(this, _s6).get(t);
      return (e == null ? void 0 : e.isSvg) ? e.svgUrl : null;
    }
    deleteId(t) {
      var _a29;
      __privateGet(this, _s6) || __privateSet(this, _s6, /* @__PURE__ */ new Map());
      const e = __privateGet(this, _s6).get(t);
      if (!e || (e.refCounter -= 1, e.refCounter !== 0)) return;
      const { bitmap: i } = e;
      if (!e.url && !e.file) {
        const s = new OffscreenCanvas(i.width, i.height);
        s.getContext("bitmaprenderer").transferFromImageBitmap(i), e.blobPromise = s.convertToBlob();
      }
      (_a29 = i.close) == null ? void 0 : _a29.call(i), e.bitmap = null;
    }
    isValidId(t) {
      return t.startsWith(`image_${__privateGet(this, _t7)}_`);
    }
  };
  _t7 = new WeakMap();
  _e6 = new WeakMap();
  _s6 = new WeakMap();
  _zi_instances = new WeakSet();
  i_fn2 = async function(t, e) {
    __privateGet(this, _s6) || __privateSet(this, _s6, /* @__PURE__ */ new Map());
    let i = __privateGet(this, _s6).get(t);
    if (i === null) return null;
    if (i == null ? void 0 : i.bitmap) return i.refCounter += 1, i;
    try {
      i || (i = {
        bitmap: null,
        id: `image_${__privateGet(this, _t7)}_${__privateWrapper(this, _e6)._++}`,
        refCounter: 0,
        isSvg: false
      });
      let s;
      if (typeof e == "string" ? (i.url = e, s = await De(e, "blob")) : e instanceof File ? s = i.file = e : e instanceof Blob && (s = e), s.type === "image/svg+xml") {
        const n = _zi._isSVGFittingCanvas, r = new FileReader(), a = new Image(), o = new Promise((l, h) => {
          a.onload = () => {
            i.bitmap = a, i.isSvg = true, l();
          }, r.onload = async () => {
            const c = i.svgUrl = r.result;
            a.src = await n ? `${c}#svgView(preserveAspectRatio(none))` : c;
          }, a.onerror = r.onerror = h;
        });
        r.readAsDataURL(s), await o;
      } else i.bitmap = await createImageBitmap(s);
      i.refCounter = 1;
    } catch (s) {
      j(s), i = null;
    }
    return __privateGet(this, _s6).set(t, i), i && __privateGet(this, _s6).set(i.id, i), i;
  };
  let zi = _zi;
  class Xn {
    constructor(t = 128) {
      __privateAdd(this, _t8, []);
      __privateAdd(this, _e7, false);
      __privateAdd(this, _s7);
      __privateAdd(this, _i5, -1);
      __privateSet(this, _s7, t);
    }
    add({ cmd: t, undo: e, post: i, mustExec: s, type: n = NaN, overwriteIfSameType: r = false, keepUndo: a = false }) {
      if (s && t(), __privateGet(this, _e7)) return;
      const o = {
        cmd: t,
        undo: e,
        post: i,
        type: n
      };
      if (__privateGet(this, _i5) === -1) {
        __privateGet(this, _t8).length > 0 && (__privateGet(this, _t8).length = 0), __privateSet(this, _i5, 0), __privateGet(this, _t8).push(o);
        return;
      }
      if (r && __privateGet(this, _t8)[__privateGet(this, _i5)].type === n) {
        a && (o.undo = __privateGet(this, _t8)[__privateGet(this, _i5)].undo), __privateGet(this, _t8)[__privateGet(this, _i5)] = o;
        return;
      }
      const l = __privateGet(this, _i5) + 1;
      l === __privateGet(this, _s7) ? __privateGet(this, _t8).splice(0, 1) : (__privateSet(this, _i5, l), l < __privateGet(this, _t8).length && __privateGet(this, _t8).splice(l)), __privateGet(this, _t8).push(o);
    }
    undo() {
      if (__privateGet(this, _i5) === -1) return;
      __privateSet(this, _e7, true);
      const { undo: t, post: e } = __privateGet(this, _t8)[__privateGet(this, _i5)];
      t(), e == null ? void 0 : e(), __privateSet(this, _e7, false), __privateSet(this, _i5, __privateGet(this, _i5) - 1);
    }
    redo() {
      if (__privateGet(this, _i5) < __privateGet(this, _t8).length - 1) {
        __privateSet(this, _i5, __privateGet(this, _i5) + 1), __privateSet(this, _e7, true);
        const { cmd: t, post: e } = __privateGet(this, _t8)[__privateGet(this, _i5)];
        t(), e == null ? void 0 : e(), __privateSet(this, _e7, false);
      }
    }
    hasSomethingToUndo() {
      return __privateGet(this, _i5) !== -1;
    }
    hasSomethingToRedo() {
      return __privateGet(this, _i5) < __privateGet(this, _t8).length - 1;
    }
    cleanType(t) {
      if (__privateGet(this, _i5) !== -1) {
        for (let e = __privateGet(this, _i5); e >= 0; e--) if (__privateGet(this, _t8)[e].type !== t) {
          __privateGet(this, _t8).splice(e + 1, __privateGet(this, _i5) - e), __privateSet(this, _i5, e);
          return;
        }
        __privateGet(this, _t8).length = 0, __privateSet(this, _i5, -1);
      }
    }
    destroy() {
      __privateSet(this, _t8, null);
    }
  }
  _t8 = new WeakMap();
  _e7 = new WeakMap();
  _s7 = new WeakMap();
  _i5 = new WeakMap();
  class Fe {
    constructor(t) {
      __privateAdd(this, _Fe_instances);
      this.buffer = [], this.callbacks = /* @__PURE__ */ new Map(), this.allKeys = /* @__PURE__ */ new Set();
      const { isMac: e } = mt.platform;
      for (const [i, s, n = {}] of t) for (const r of i) {
        const a = r.startsWith("mac+");
        e && a ? (this.callbacks.set(r.slice(4), {
          callback: s,
          options: n
        }), this.allKeys.add(r.split("+").at(-1))) : !e && !a && (this.callbacks.set(r, {
          callback: s,
          options: n
        }), this.allKeys.add(r.split("+").at(-1)));
      }
    }
    exec(t, e) {
      if (!this.allKeys.has(e.key)) return;
      const i = this.callbacks.get(__privateMethod(this, _Fe_instances, t_fn2).call(this, e));
      if (!i) return;
      const { callback: s, options: { bubbles: n = false, args: r = [], checker: a = null } } = i;
      a && !a(t, e) || (s.bind(t, ...r, e)(), n || dt(e));
    }
  }
  _Fe_instances = new WeakSet();
  t_fn2 = function(t) {
    t.altKey && this.buffer.push("alt"), t.ctrlKey && this.buffer.push("ctrl"), t.metaKey && this.buffer.push("meta"), t.shiftKey && this.buffer.push("shift"), this.buffer.push(t.key);
    const e = this.buffer.join("+");
    return this.buffer.length = 0, e;
  };
  const _Vi = class _Vi {
    get _colors() {
      const t = /* @__PURE__ */ new Map([
        [
          "CanvasText",
          null
        ],
        [
          "Canvas",
          null
        ]
      ]);
      return Un(t), H(this, "_colors", t);
    }
    convert(t) {
      const e = Re(t);
      if (!window.matchMedia("(forced-colors: active)").matches) return e;
      for (const [i, s] of this._colors) if (s.every((n, r) => n === e[r])) return _Vi._colorsMapping.get(i);
      return e;
    }
    getHexCode(t) {
      const e = this._colors.get(t);
      return e ? R.makeHexColor(...e) : t;
    }
  };
  __publicField(_Vi, "_colorsMapping", /* @__PURE__ */ new Map([
    [
      "CanvasText",
      [
        0,
        0,
        0
      ]
    ],
    [
      "Canvas",
      [
        255,
        255,
        255
      ]
    ]
  ]));
  let Vi = _Vi;
  Zt = (_d2 = class {
    constructor(t, e, i, s, n, r, a, o, l, h, c, f, g, b, m, w) {
      __privateAdd(this, _Zt_instances);
      __privateAdd(this, _t9, new AbortController());
      __privateAdd(this, _e8, null);
      __privateAdd(this, _s8, null);
      __privateAdd(this, _i6, /* @__PURE__ */ new Map());
      __privateAdd(this, _a4, /* @__PURE__ */ new Map());
      __privateAdd(this, _r4, null);
      __privateAdd(this, _n4, null);
      __privateAdd(this, _o2, null);
      __privateAdd(this, _h2, new Xn());
      __privateAdd(this, _l, null);
      __privateAdd(this, _u, null);
      __privateAdd(this, _d, null);
      __privateAdd(this, _f, 0);
      __privateAdd(this, _m, /* @__PURE__ */ new Set());
      __privateAdd(this, _g, null);
      __privateAdd(this, _c2, null);
      __privateAdd(this, _p, /* @__PURE__ */ new Set());
      __publicField(this, "_editorUndoBar", null);
      __privateAdd(this, _b2, false);
      __privateAdd(this, _A, false);
      __privateAdd(this, _y, false);
      __privateAdd(this, __, null);
      __privateAdd(this, _S, null);
      __privateAdd(this, _v, null);
      __privateAdd(this, _T, null);
      __privateAdd(this, _w, false);
      __privateAdd(this, _x, null);
      __privateAdd(this, _M, new Wn());
      __privateAdd(this, _P, false);
      __privateAdd(this, _k, false);
      __privateAdd(this, _N, false);
      __privateAdd(this, _D, null);
      __privateAdd(this, _R, null);
      __privateAdd(this, _O, null);
      __privateAdd(this, _F, null);
      __privateAdd(this, _z, null);
      __privateAdd(this, _C, $.NONE);
      __privateAdd(this, _E, /* @__PURE__ */ new Set());
      __privateAdd(this, _L, null);
      __privateAdd(this, _U, null);
      __privateAdd(this, _$, null);
      __privateAdd(this, _X, null);
      __privateAdd(this, _W, null);
      __privateAdd(this, _Y, {
        isEditing: false,
        isEmpty: true,
        hasSomethingToUndo: false,
        hasSomethingToRedo: false,
        hasSelectedEditor: false,
        hasSelectedText: false
      });
      __privateAdd(this, _j, [
        0,
        0
      ]);
      __privateAdd(this, _B, null);
      __privateAdd(this, _V, null);
      __privateAdd(this, _Q2, null);
      __privateAdd(this, _Z, null);
      __privateAdd(this, _H, null);
      const A = this._signal = __privateGet(this, _t9).signal;
      __privateSet(this, _V, t), __privateSet(this, _Q2, e), __privateSet(this, _Z, i), __privateSet(this, _r4, s), __privateSet(this, _l, n), __privateSet(this, _U, r), __privateSet(this, _W, o), this._eventBus = a, a._on("editingaction", this.onEditingAction.bind(this), {
        signal: A
      }), a._on("pagechanging", this.onPageChanging.bind(this), {
        signal: A
      }), a._on("scalechanging", this.onScaleChanging.bind(this), {
        signal: A
      }), a._on("rotationchanging", this.onRotationChanging.bind(this), {
        signal: A
      }), a._on("setpreference", this.onSetPreference.bind(this), {
        signal: A
      }), a._on("switchannotationeditorparams", (S) => this.updateParams(S.type, S.value), {
        signal: A
      }), window.addEventListener("pointerdown", () => {
        __privateSet(this, _k, true);
      }, {
        capture: true,
        signal: A
      }), window.addEventListener("pointerup", () => {
        __privateSet(this, _k, false);
      }, {
        capture: true,
        signal: A
      }), window.addEventListener("beforeunload", __privateMethod(this, _Zt_instances, nt_fn).bind(this), {
        capture: true,
        signal: A
      }), __privateMethod(this, _Zt_instances, ot_fn).call(this), __privateMethod(this, _Zt_instances, ft_fn).call(this), __privateMethod(this, _Zt_instances, et_fn).call(this), __privateSet(this, _n4, o.annotationStorage), __privateSet(this, __, o.filterFactory), __privateSet(this, _$, l), __privateSet(this, _T, h || null), __privateSet(this, _b2, c), __privateSet(this, _A, f), __privateSet(this, _y, g), __privateSet(this, _z, b || null), this.viewParameters = {
        realScale: me.PDF_TO_CSS_UNITS,
        rotation: 0
      }, this.isShiftKeyDown = false, this._editorUndoBar = m || null, this._supportsPinchToZoom = w !== false, n == null ? void 0 : n.setSidebarUiManager(this);
    }
    static get _keyboardManager() {
      const t = Zt.prototype, e = (r) => __privateGet(r, _V).contains(document.activeElement) && document.activeElement.tagName !== "BUTTON" && r.hasSomethingToControl(), i = (r, { target: a }) => {
        if (a instanceof HTMLInputElement) {
          const { type: o } = a;
          return o !== "text" && o !== "number";
        }
        return true;
      }, s = this.TRANSLATE_SMALL, n = this.TRANSLATE_BIG;
      return H(this, "_keyboardManager", new Fe([
        [
          [
            "ctrl+a",
            "mac+meta+a"
          ],
          t.selectAll,
          {
            checker: i
          }
        ],
        [
          [
            "ctrl+z",
            "mac+meta+z"
          ],
          t.undo,
          {
            checker: i
          }
        ],
        [
          [
            "ctrl+y",
            "ctrl+shift+z",
            "mac+meta+shift+z",
            "ctrl+shift+Z",
            "mac+meta+shift+Z"
          ],
          t.redo,
          {
            checker: i
          }
        ],
        [
          [
            "Backspace",
            "alt+Backspace",
            "ctrl+Backspace",
            "shift+Backspace",
            "mac+Backspace",
            "mac+alt+Backspace",
            "mac+ctrl+Backspace",
            "Delete",
            "ctrl+Delete",
            "shift+Delete",
            "mac+Delete"
          ],
          t.delete,
          {
            checker: i
          }
        ],
        [
          [
            "Enter",
            "mac+Enter"
          ],
          t.addNewEditorFromKeyboard,
          {
            checker: (r, { target: a }) => !(a instanceof HTMLButtonElement) && __privateGet(r, _V).contains(a) && !r.isEnterHandled
          }
        ],
        [
          [
            " ",
            "mac+ "
          ],
          t.addNewEditorFromKeyboard,
          {
            checker: (r, { target: a }) => !(a instanceof HTMLButtonElement) && __privateGet(r, _V).contains(document.activeElement)
          }
        ],
        [
          [
            "Escape",
            "mac+Escape"
          ],
          t.unselectAll
        ],
        [
          [
            "ArrowLeft",
            "mac+ArrowLeft"
          ],
          t.translateSelectedEditors,
          {
            args: [
              -s,
              0
            ],
            checker: e
          }
        ],
        [
          [
            "ctrl+ArrowLeft",
            "mac+shift+ArrowLeft"
          ],
          t.translateSelectedEditors,
          {
            args: [
              -n,
              0
            ],
            checker: e
          }
        ],
        [
          [
            "ArrowRight",
            "mac+ArrowRight"
          ],
          t.translateSelectedEditors,
          {
            args: [
              s,
              0
            ],
            checker: e
          }
        ],
        [
          [
            "ctrl+ArrowRight",
            "mac+shift+ArrowRight"
          ],
          t.translateSelectedEditors,
          {
            args: [
              n,
              0
            ],
            checker: e
          }
        ],
        [
          [
            "ArrowUp",
            "mac+ArrowUp"
          ],
          t.translateSelectedEditors,
          {
            args: [
              0,
              -s
            ],
            checker: e
          }
        ],
        [
          [
            "ctrl+ArrowUp",
            "mac+shift+ArrowUp"
          ],
          t.translateSelectedEditors,
          {
            args: [
              0,
              -n
            ],
            checker: e
          }
        ],
        [
          [
            "ArrowDown",
            "mac+ArrowDown"
          ],
          t.translateSelectedEditors,
          {
            args: [
              0,
              s
            ],
            checker: e
          }
        ],
        [
          [
            "ctrl+ArrowDown",
            "mac+shift+ArrowDown"
          ],
          t.translateSelectedEditors,
          {
            args: [
              0,
              n
            ],
            checker: e
          }
        ]
      ]));
    }
    destroy() {
      var _a29, _b7, _c10, _d12, _e54, _f11, _g10, _h18, _i40;
      (_a29 = __privateGet(this, _H)) == null ? void 0 : _a29.resolve(), __privateSet(this, _H, null), (_b7 = __privateGet(this, _t9)) == null ? void 0 : _b7.abort(), __privateSet(this, _t9, null), this._signal = null;
      for (const t of __privateGet(this, _a4).values()) t.destroy();
      __privateGet(this, _a4).clear(), __privateGet(this, _i6).clear(), __privateGet(this, _p).clear(), (_c10 = __privateGet(this, _F)) == null ? void 0 : _c10.clear(), __privateSet(this, _e8, null), __privateGet(this, _E).clear(), __privateGet(this, _h2).destroy(), (_d12 = __privateGet(this, _r4)) == null ? void 0 : _d12.destroy(), (_e54 = __privateGet(this, _l)) == null ? void 0 : _e54.destroy(), (_f11 = __privateGet(this, _U)) == null ? void 0 : _f11.destroy(), (_g10 = __privateGet(this, _x)) == null ? void 0 : _g10.hide(), __privateSet(this, _x, null), (_h18 = __privateGet(this, _O)) == null ? void 0 : _h18.destroy(), __privateSet(this, _O, null), __privateSet(this, _s8, null), __privateGet(this, _S) && (clearTimeout(__privateGet(this, _S)), __privateSet(this, _S, null)), __privateGet(this, _B) && (clearTimeout(__privateGet(this, _B)), __privateSet(this, _B, null)), (_i40 = this._editorUndoBar) == null ? void 0 : _i40.destroy(), __privateSet(this, _W, null);
    }
    combinedSignal(t) {
      return AbortSignal.any([
        this._signal,
        t.signal
      ]);
    }
    get mlManager() {
      return __privateGet(this, _z);
    }
    get useNewAltTextFlow() {
      return __privateGet(this, _A);
    }
    get useNewAltTextWhenAddingImage() {
      return __privateGet(this, _y);
    }
    get hcmFilter() {
      return H(this, "hcmFilter", __privateGet(this, _$) ? __privateGet(this, __).addHCMFilter(__privateGet(this, _$).foreground, __privateGet(this, _$).background) : "none");
    }
    get direction() {
      return H(this, "direction", getComputedStyle(__privateGet(this, _V)).direction);
    }
    get _highlightColors() {
      return H(this, "_highlightColors", __privateGet(this, _T) ? new Map(__privateGet(this, _T).split(",").map((t) => (t = t.split("=").map((e) => e.trim()), t[1] = t[1].toUpperCase(), t))) : null);
    }
    get highlightColors() {
      const { _highlightColors: t } = this;
      if (!t) return H(this, "highlightColors", null);
      const e = /* @__PURE__ */ new Map(), i = !!__privateGet(this, _$);
      for (const [s, n] of t) {
        const r = s.endsWith("_HCM");
        if (i && r) {
          e.set(s.replace("_HCM", ""), n);
          continue;
        }
        !i && !r && e.set(s, n);
      }
      return H(this, "highlightColors", e);
    }
    get highlightColorNames() {
      return H(this, "highlightColorNames", this.highlightColors ? new Map(Array.from(this.highlightColors, (t) => t.reverse())) : null);
    }
    getNonHCMColor(t) {
      if (!this._highlightColors) return t;
      const e = this.highlightColorNames.get(t);
      return this._highlightColors.get(e) || t;
    }
    getNonHCMColorName(t) {
      return this.highlightColorNames.get(t) || t;
    }
    setCurrentDrawingSession(t) {
      t ? (this.unselectAll(), this.disableUserSelect(true)) : this.disableUserSelect(false), __privateSet(this, _d, t);
    }
    setMainHighlightColorPicker(t) {
      __privateSet(this, _O, t);
    }
    editAltText(t, e = false) {
      var _a29;
      (_a29 = __privateGet(this, _r4)) == null ? void 0 : _a29.editAltText(this, t, e);
    }
    hasCommentManager() {
      return !!__privateGet(this, _l);
    }
    editComment(t, e, i, s) {
      var _a29;
      (_a29 = __privateGet(this, _l)) == null ? void 0 : _a29.showDialog(this, t, e, i, s);
    }
    selectComment(t, e) {
      var _a29, _b7;
      (_b7 = (_a29 = __privateGet(this, _a4).get(t)) == null ? void 0 : _a29.getEditorByUID(e)) == null ? void 0 : _b7.toggleComment(true, true);
    }
    updateComment(t) {
      var _a29;
      (_a29 = __privateGet(this, _l)) == null ? void 0 : _a29.updateComment(t.getData());
    }
    updatePopupColor(t) {
      var _a29;
      (_a29 = __privateGet(this, _l)) == null ? void 0 : _a29.updatePopupColor(t);
    }
    removeComment(t) {
      var _a29;
      (_a29 = __privateGet(this, _l)) == null ? void 0 : _a29.removeComments([
        t.uid
      ]);
    }
    deleteComment(t, e) {
      const i = () => {
        t.comment = e;
      }, s = () => {
        var _a29;
        (_a29 = this._editorUndoBar) == null ? void 0 : _a29.show(i, "comment"), this.toggleComment(null), t.comment = null;
      };
      this.addCommands({
        cmd: s,
        undo: i,
        mustExec: true
      });
    }
    toggleComment(t, e, i = void 0) {
      var _a29;
      (_a29 = __privateGet(this, _l)) == null ? void 0 : _a29.toggleCommentPopup(t, e, i);
    }
    makeCommentColor(t, e) {
      var _a29;
      return t && ((_a29 = __privateGet(this, _l)) == null ? void 0 : _a29.makeCommentColor(t, e)) || null;
    }
    getCommentDialogElement() {
      var _a29;
      return ((_a29 = __privateGet(this, _l)) == null ? void 0 : _a29.dialogElement) || null;
    }
    async waitForEditorsRendered(t) {
      if (__privateGet(this, _a4).has(t - 1)) return;
      const { resolve: e, promise: i } = Promise.withResolvers(), s = (n) => {
        n.pageNumber === t && (this._eventBus._off("editorsrendered", s), e());
      };
      this._eventBus.on("editorsrendered", s), await i;
    }
    getSignature(t) {
      var _a29;
      (_a29 = __privateGet(this, _U)) == null ? void 0 : _a29.getSignature({
        uiManager: this,
        editor: t
      });
    }
    get signatureManager() {
      return __privateGet(this, _U);
    }
    switchToMode(t, e) {
      this._eventBus.on("annotationeditormodechanged", e, {
        once: true,
        signal: this._signal
      }), this._eventBus.dispatch("showannotationeditorui", {
        source: this,
        mode: t
      });
    }
    setPreference(t, e) {
      this._eventBus.dispatch("setpreference", {
        source: this,
        name: t,
        value: e
      });
    }
    onSetPreference({ name: t, value: e }) {
      t === "enableNewAltTextWhenAddingImage" && __privateSet(this, _y, e);
    }
    onPageChanging({ pageNumber: t }) {
      __privateSet(this, _f, t - 1);
    }
    deletePage(t) {
      for (const e of this.getEditors(t)) e.remove();
      __privateGet(this, _a4).delete(t), __privateGet(this, _f) === t && __privateSet(this, _f, 0);
    }
    focusMainContainer() {
      __privateGet(this, _V).focus();
    }
    findParent(t, e) {
      for (const i of __privateGet(this, _a4).values()) {
        const { x: s, y: n, width: r, height: a } = i.div.getBoundingClientRect();
        if (t >= s && t <= s + r && e >= n && e <= n + a) return i;
      }
      return null;
    }
    disableUserSelect(t = false) {
      __privateGet(this, _Q2).classList.toggle("noUserSelect", t);
    }
    addShouldRescale(t) {
      __privateGet(this, _p).add(t);
    }
    removeShouldRescale(t) {
      __privateGet(this, _p).delete(t);
    }
    onScaleChanging({ scale: t }) {
      var _a29;
      this.commitOrRemove(), this.viewParameters.realScale = t * me.PDF_TO_CSS_UNITS;
      for (const e of __privateGet(this, _p)) e.onScaleChanging();
      (_a29 = __privateGet(this, _d)) == null ? void 0 : _a29.onScaleChanging();
    }
    onRotationChanging({ pagesRotation: t }) {
      this.commitOrRemove(), this.viewParameters.rotation = t;
    }
    highlightSelection(t = "", e = false) {
      const i = document.getSelection();
      if (!i || i.isCollapsed) return;
      const { anchorNode: s, anchorOffset: n, focusNode: r, focusOffset: a } = i, o = i.toString(), h = __privateMethod(this, _Zt_instances, J_fn).call(this, i).closest(".textLayer"), c = this.getSelectionBoxes(h);
      if (!c) return;
      i.empty();
      const f = __privateMethod(this, _Zt_instances, tt_fn).call(this, h), g = __privateGet(this, _C) === $.NONE, b = () => {
        const m = f == null ? void 0 : f.createAndAddNewEditor({
          x: 0,
          y: 0
        }, false, {
          methodOfCreation: t,
          boxes: c,
          anchorNode: s,
          anchorOffset: n,
          focusNode: r,
          focusOffset: a,
          text: o
        });
        g && this.showAllEditors("highlight", true, true), e && (m == null ? void 0 : m.editComment());
      };
      if (g) {
        this.switchToMode($.HIGHLIGHT, b);
        return;
      }
      b();
    }
    commentSelection(t = "") {
      this.highlightSelection(t, true);
    }
    getAndRemoveDataFromAnnotationStorage(t) {
      if (!__privateGet(this, _n4)) return null;
      const e = `${Te}${t}`, i = __privateGet(this, _n4).getRawValue(e);
      return i && __privateGet(this, _n4).remove(e), i;
    }
    addToAnnotationStorage(t) {
      !t.isEmpty() && __privateGet(this, _n4) && !__privateGet(this, _n4).has(t.id) && __privateGet(this, _n4).setValue(t.id, t);
    }
    a11yAlert(t, e = null) {
      const i = __privateGet(this, _Z);
      i && (i.setAttribute("data-l10n-id", t), e ? i.setAttribute("data-l10n-args", JSON.stringify(e)) : i.removeAttribute("data-l10n-args"));
    }
    blur() {
      if (this.isShiftKeyDown = false, __privateGet(this, _w) && (__privateSet(this, _w, false), __privateMethod(this, _Zt_instances, q_fn).call(this, "main_toolbar")), !this.hasSelection) return;
      const { activeElement: t } = document;
      for (const e of __privateGet(this, _E)) if (e.div.contains(t)) {
        __privateSet(this, _R, [
          e,
          t
        ]), e._focusEventsAllowed = false;
        break;
      }
    }
    focus() {
      if (!__privateGet(this, _R)) return;
      const [t, e] = __privateGet(this, _R);
      __privateSet(this, _R, null), e.addEventListener("focusin", () => {
        t._focusEventsAllowed = true;
      }, {
        once: true,
        signal: this._signal
      }), e.focus();
    }
    addEditListeners() {
      __privateMethod(this, _Zt_instances, et_fn).call(this), this.setEditingState(true);
    }
    removeEditListeners() {
      __privateMethod(this, _Zt_instances, ct_fn).call(this), this.setEditingState(false);
    }
    dragOver(t) {
      for (const { type: e } of t.dataTransfer.items) for (const i of __privateGet(this, _c2)) if (i.isHandlingMimeForPasting(e)) {
        t.dataTransfer.dropEffect = "copy", t.preventDefault();
        return;
      }
    }
    drop(t) {
      for (const e of t.dataTransfer.items) for (const i of __privateGet(this, _c2)) if (i.isHandlingMimeForPasting(e.type)) {
        i.paste(e, this.currentLayer), t.preventDefault();
        return;
      }
    }
    copy(t) {
      var _a29;
      if (t.preventDefault(), (_a29 = __privateGet(this, _e8)) == null ? void 0 : _a29.commitOrRemove(), !this.hasSelection) return;
      const e = [];
      for (const i of __privateGet(this, _E)) {
        const s = i.serialize(true);
        s && e.push(s);
      }
      e.length !== 0 && t.clipboardData.setData("application/pdfjs", JSON.stringify(e));
    }
    cut(t) {
      this.copy(t), this.delete();
    }
    async paste(t) {
      t.preventDefault();
      const { clipboardData: e } = t;
      for (const n of e.items) for (const r of __privateGet(this, _c2)) if (r.isHandlingMimeForPasting(n.type)) {
        r.paste(n, this.currentLayer);
        return;
      }
      let i = e.getData("application/pdfjs");
      if (!i) return;
      try {
        i = JSON.parse(i);
      } catch (n) {
        j(`paste: "${n.message}".`);
        return;
      }
      if (!Array.isArray(i)) return;
      this.unselectAll();
      const s = this.currentLayer;
      try {
        const n = [];
        for (const o of i) {
          const l = await s.deserialize(o);
          if (!l) return;
          n.push(l);
        }
        const r = () => {
          for (const o of n) __privateMethod(this, _Zt_instances, it_fn).call(this, o);
          __privateMethod(this, _Zt_instances, st_fn).call(this, n);
        }, a = () => {
          for (const o of n) o.remove();
        };
        this.addCommands({
          cmd: r,
          undo: a,
          mustExec: true
        });
      } catch (n) {
        j(`paste: "${n.message}".`);
      }
    }
    keydown(t) {
      !this.isShiftKeyDown && t.key === "Shift" && (this.isShiftKeyDown = true), __privateGet(this, _C) !== $.NONE && !this.isEditorHandlingKeyboard && Zt._keyboardManager.exec(this, t);
    }
    keyup(t) {
      this.isShiftKeyDown && t.key === "Shift" && (this.isShiftKeyDown = false, __privateGet(this, _w) && (__privateSet(this, _w, false), __privateMethod(this, _Zt_instances, q_fn).call(this, "main_toolbar")));
    }
    onEditingAction({ name: t }) {
      switch (t) {
        case "undo":
        case "redo":
        case "delete":
        case "selectAll":
          this[t]();
          break;
        case "highlightSelection":
          this.highlightSelection("context_menu");
          break;
        case "commentSelection":
          this.commentSelection("context_menu");
          break;
      }
    }
    setEditingState(t) {
      t ? (__privateMethod(this, _Zt_instances, lt_fn).call(this), __privateMethod(this, _Zt_instances, dt_fn).call(this), __privateMethod(this, _Zt_instances, I_fn).call(this, {
        isEditing: __privateGet(this, _C) !== $.NONE,
        isEmpty: __privateMethod(this, _Zt_instances, K_fn).call(this),
        hasSomethingToUndo: __privateGet(this, _h2).hasSomethingToUndo(),
        hasSomethingToRedo: __privateGet(this, _h2).hasSomethingToRedo(),
        hasSelectedEditor: false
      })) : (__privateMethod(this, _Zt_instances, ht_fn).call(this), __privateMethod(this, _Zt_instances, ut_fn).call(this), __privateMethod(this, _Zt_instances, I_fn).call(this, {
        isEditing: false
      }), this.disableUserSelect(false));
    }
    registerEditorTypes(t) {
      if (!__privateGet(this, _c2)) {
        __privateSet(this, _c2, t);
        for (const e of __privateGet(this, _c2)) __privateMethod(this, _Zt_instances, G_fn).call(this, e.defaultPropertiesToUpdate);
      }
    }
    getId() {
      return __privateGet(this, _M).id;
    }
    get currentLayer() {
      return __privateGet(this, _a4).get(__privateGet(this, _f));
    }
    getLayer(t) {
      return __privateGet(this, _a4).get(t);
    }
    get currentPageIndex() {
      return __privateGet(this, _f);
    }
    addLayer(t) {
      __privateGet(this, _a4).set(t.pageIndex, t), __privateGet(this, _P) ? t.enable() : t.disable();
    }
    removeLayer(t) {
      __privateGet(this, _a4).delete(t.pageIndex);
    }
    async updateMode(t, e = null, i = false, s = false, n = false, r = false) {
      var _a29, _b7, _c10, _d12, _e54, _f11;
      if (__privateGet(this, _C) !== t && !(__privateGet(this, _H) && (await __privateGet(this, _H).promise, !__privateGet(this, _H)))) {
        if (__privateSet(this, _H, Promise.withResolvers()), (_a29 = __privateGet(this, _d)) == null ? void 0 : _a29.commitOrRemove(), __privateGet(this, _C) === $.POPUP && ((_b7 = __privateGet(this, _l)) == null ? void 0 : _b7.hideSidebar()), (_c10 = __privateGet(this, _l)) == null ? void 0 : _c10.destroyPopup(), __privateSet(this, _C, t), t === $.NONE) {
          this.setEditingState(false), __privateMethod(this, _Zt_instances, gt_fn).call(this);
          for (const a of __privateGet(this, _i6).values()) a.hideStandaloneCommentButton();
          (_d12 = this._editorUndoBar) == null ? void 0 : _d12.hide(), this.toggleComment(null), __privateGet(this, _H).resolve();
          return;
        }
        for (const a of __privateGet(this, _i6).values()) a.addStandaloneCommentButton();
        t === $.SIGNATURE && await ((_e54 = __privateGet(this, _U)) == null ? void 0 : _e54.loadSignatures()), i && Q.clearPointerType(), this.setEditingState(true), await __privateMethod(this, _Zt_instances, pt_fn).call(this), this.unselectAll();
        for (const a of __privateGet(this, _a4).values()) a.updateMode(t);
        if (t === $.POPUP) {
          __privateGet(this, _s8) || __privateSet(this, _s8, await __privateGet(this, _W).getAnnotationsByType(new Set(__privateGet(this, _c2).map((l) => l._editorType))));
          const a = /* @__PURE__ */ new Set(), o = [];
          for (const l of __privateGet(this, _i6).values()) {
            const { annotationElementId: h, hasComment: c, deleted: f } = l;
            h && a.add(h), c && !f && o.push(l.getData());
          }
          for (const l of __privateGet(this, _s8)) {
            const { id: h, popupRef: c, contentsObj: f } = l;
            c && (f == null ? void 0 : f.str) && !a.has(h) && !__privateGet(this, _m).has(h) && o.push(l);
          }
          (_f11 = __privateGet(this, _l)) == null ? void 0 : _f11.showSidebar(o);
        }
        if (!e) {
          s && this.addNewEditorFromKeyboard(), __privateGet(this, _H).resolve();
          return;
        }
        for (const a of __privateGet(this, _i6).values()) a.uid === e ? (this.setSelected(a), r ? a.editComment() : n ? a.enterInEditMode() : a.focus()) : a.unselect();
        __privateGet(this, _H).resolve();
      }
    }
    addNewEditorFromKeyboard() {
      this.currentLayer.canCreateNewEmptyEditor() && this.currentLayer.addNewEditor();
    }
    updateToolbar(t) {
      t.mode !== __privateGet(this, _C) && this._eventBus.dispatch("switchannotationeditormode", {
        source: this,
        ...t
      });
    }
    updateParams(t, e) {
      if (__privateGet(this, _c2)) {
        switch (t) {
          case X.CREATE:
            this.currentLayer.addNewEditor(e);
            return;
          case X.HIGHLIGHT_SHOW_ALL:
            this._eventBus.dispatch("reporttelemetry", {
              source: this,
              details: {
                type: "editing",
                data: {
                  type: "highlight",
                  action: "toggle_visibility"
                }
              }
            }), (__privateGet(this, _X) || __privateSet(this, _X, /* @__PURE__ */ new Map())).set(t, e), this.showAllEditors("highlight", e);
            break;
        }
        if (this.hasSelection) for (const i of __privateGet(this, _E)) i.updateParams(t, e);
        else for (const i of __privateGet(this, _c2)) i.updateDefaultParams(t, e);
      }
    }
    showAllEditors(t, e, i = false) {
      var _a29;
      for (const n of __privateGet(this, _i6).values()) n.editorType === t && n.show(e);
      (((_a29 = __privateGet(this, _X)) == null ? void 0 : _a29.get(X.HIGHLIGHT_SHOW_ALL)) ?? true) !== e && __privateMethod(this, _Zt_instances, G_fn).call(this, [
        [
          X.HIGHLIGHT_SHOW_ALL,
          e
        ]
      ]);
    }
    enableWaiting(t = false) {
      if (__privateGet(this, _N) !== t) {
        __privateSet(this, _N, t);
        for (const e of __privateGet(this, _a4).values()) t ? e.disableClick() : e.enableClick(), e.div.classList.toggle("waiting", t);
      }
    }
    *getEditors(t) {
      for (const e of __privateGet(this, _i6).values()) e.pageIndex === t && (yield e);
    }
    getEditor(t) {
      return __privateGet(this, _i6).get(t);
    }
    addEditor(t) {
      __privateGet(this, _i6).set(t.id, t);
    }
    removeEditor(t) {
      var _a29, _b7;
      t.div.contains(document.activeElement) && (__privateGet(this, _S) && clearTimeout(__privateGet(this, _S)), __privateSet(this, _S, setTimeout(() => {
        this.focusMainContainer(), __privateSet(this, _S, null);
      }, 0))), __privateGet(this, _i6).delete(t.id), t.annotationElementId && ((_a29 = __privateGet(this, _F)) == null ? void 0 : _a29.delete(t.annotationElementId)), this.unselect(t), (!t.annotationElementId || !__privateGet(this, _m).has(t.annotationElementId)) && ((_b7 = __privateGet(this, _n4)) == null ? void 0 : _b7.remove(t.id));
    }
    addDeletedAnnotationElement(t) {
      __privateGet(this, _m).add(t.annotationElementId), this.addChangedExistingAnnotation(t), t.deleted = true;
    }
    isDeletedAnnotationElement(t) {
      return __privateGet(this, _m).has(t);
    }
    removeDeletedAnnotationElement(t) {
      __privateGet(this, _m).delete(t.annotationElementId), this.removeChangedExistingAnnotation(t), t.deleted = false;
    }
    setActiveEditor(t) {
      __privateGet(this, _e8) !== t && (__privateSet(this, _e8, t), t && __privateMethod(this, _Zt_instances, G_fn).call(this, t.propertiesToUpdate));
    }
    updateUI(t) {
      __privateGet(this, _Zt_instances, mt_get) === t && __privateMethod(this, _Zt_instances, G_fn).call(this, t.propertiesToUpdate);
    }
    updateUIForDefaultProperties(t) {
      __privateMethod(this, _Zt_instances, G_fn).call(this, t.defaultPropertiesToUpdate);
    }
    toggleSelected(t) {
      if (__privateGet(this, _E).has(t)) {
        __privateGet(this, _E).delete(t), t.unselect(), __privateMethod(this, _Zt_instances, I_fn).call(this, {
          hasSelectedEditor: this.hasSelection
        });
        return;
      }
      __privateGet(this, _E).add(t), t.select(), __privateMethod(this, _Zt_instances, G_fn).call(this, t.propertiesToUpdate), __privateMethod(this, _Zt_instances, I_fn).call(this, {
        hasSelectedEditor: true
      });
    }
    setSelected(t) {
      var _a29;
      this.updateToolbar({
        mode: t.mode,
        editId: t.uid
      }), (_a29 = __privateGet(this, _d)) == null ? void 0 : _a29.commitOrRemove();
      for (const e of __privateGet(this, _E)) e !== t && e.unselect();
      __privateGet(this, _E).clear(), __privateGet(this, _E).add(t), t.select(), __privateMethod(this, _Zt_instances, G_fn).call(this, t.propertiesToUpdate), __privateMethod(this, _Zt_instances, I_fn).call(this, {
        hasSelectedEditor: true
      });
    }
    isSelected(t) {
      return __privateGet(this, _E).has(t);
    }
    get firstSelectedEditor() {
      return __privateGet(this, _E).values().next().value;
    }
    unselect(t) {
      t.unselect(), __privateGet(this, _E).delete(t), __privateMethod(this, _Zt_instances, I_fn).call(this, {
        hasSelectedEditor: this.hasSelection
      });
    }
    get hasSelection() {
      return __privateGet(this, _E).size !== 0;
    }
    get isEnterHandled() {
      return __privateGet(this, _E).size === 1 && this.firstSelectedEditor.isEnterHandled;
    }
    undo() {
      var _a29;
      __privateGet(this, _h2).undo(), __privateMethod(this, _Zt_instances, I_fn).call(this, {
        hasSomethingToUndo: __privateGet(this, _h2).hasSomethingToUndo(),
        hasSomethingToRedo: true,
        isEmpty: __privateMethod(this, _Zt_instances, K_fn).call(this)
      }), (_a29 = this._editorUndoBar) == null ? void 0 : _a29.hide();
    }
    redo() {
      __privateGet(this, _h2).redo(), __privateMethod(this, _Zt_instances, I_fn).call(this, {
        hasSomethingToUndo: true,
        hasSomethingToRedo: __privateGet(this, _h2).hasSomethingToRedo(),
        isEmpty: __privateMethod(this, _Zt_instances, K_fn).call(this)
      });
    }
    addCommands(t) {
      __privateGet(this, _h2).add(t), __privateMethod(this, _Zt_instances, I_fn).call(this, {
        hasSomethingToUndo: true,
        hasSomethingToRedo: false,
        isEmpty: __privateMethod(this, _Zt_instances, K_fn).call(this)
      });
    }
    cleanUndoStack(t) {
      __privateGet(this, _h2).cleanType(t);
    }
    delete() {
      var _a29;
      this.commitOrRemove();
      const t = (_a29 = this.currentLayer) == null ? void 0 : _a29.endDrawingSession(true);
      if (!this.hasSelection && !t) return;
      const e = t ? [
        t
      ] : [
        ...__privateGet(this, _E)
      ], i = () => {
        var _a30;
        (_a30 = this._editorUndoBar) == null ? void 0 : _a30.show(s, e.length === 1 ? e[0].editorType : e.length);
        for (const n of e) n.remove();
      }, s = () => {
        for (const n of e) __privateMethod(this, _Zt_instances, it_fn).call(this, n);
      };
      this.addCommands({
        cmd: i,
        undo: s,
        mustExec: true
      });
    }
    commitOrRemove() {
      var _a29;
      (_a29 = __privateGet(this, _e8)) == null ? void 0 : _a29.commitOrRemove();
    }
    hasSomethingToControl() {
      return __privateGet(this, _e8) || this.hasSelection;
    }
    selectAll() {
      for (const t of __privateGet(this, _E)) t.commit();
      __privateMethod(this, _Zt_instances, st_fn).call(this, __privateGet(this, _i6).values());
    }
    unselectAll() {
      var _a29;
      if (!(__privateGet(this, _e8) && (__privateGet(this, _e8).commitOrRemove(), __privateGet(this, _C) !== $.NONE)) && !((_a29 = __privateGet(this, _d)) == null ? void 0 : _a29.commitOrRemove()) && this.hasSelection) {
        for (const t of __privateGet(this, _E)) t.unselect();
        __privateGet(this, _E).clear(), __privateMethod(this, _Zt_instances, I_fn).call(this, {
          hasSelectedEditor: false
        });
      }
    }
    translateSelectedEditors(t, e, i = false) {
      if (i || this.commitOrRemove(), !this.hasSelection) return;
      __privateGet(this, _j)[0] += t, __privateGet(this, _j)[1] += e;
      const [s, n] = __privateGet(this, _j), r = [
        ...__privateGet(this, _E)
      ], a = 1e3;
      __privateGet(this, _B) && clearTimeout(__privateGet(this, _B)), __privateSet(this, _B, setTimeout(() => {
        __privateSet(this, _B, null), __privateGet(this, _j)[0] = __privateGet(this, _j)[1] = 0, this.addCommands({
          cmd: () => {
            for (const o of r) __privateGet(this, _i6).has(o.id) && (o.translateInPage(s, n), o.translationDone());
          },
          undo: () => {
            for (const o of r) __privateGet(this, _i6).has(o.id) && (o.translateInPage(-s, -n), o.translationDone());
          },
          mustExec: false
        });
      }, a));
      for (const o of r) o.translateInPage(t, e), o.translationDone();
    }
    setUpDragSession() {
      if (this.hasSelection) {
        this.disableUserSelect(true), __privateSet(this, _g, /* @__PURE__ */ new Map());
        for (const t of __privateGet(this, _E)) __privateGet(this, _g).set(t, {
          savedX: t.x,
          savedY: t.y,
          savedPageIndex: t.pageIndex,
          newX: 0,
          newY: 0,
          newPageIndex: -1
        });
      }
    }
    endDragSession() {
      if (!__privateGet(this, _g)) return false;
      this.disableUserSelect(false);
      const t = __privateGet(this, _g);
      __privateSet(this, _g, null);
      let e = false;
      for (const [{ x: s, y: n, pageIndex: r }, a] of t) a.newX = s, a.newY = n, a.newPageIndex = r, e || (e = s !== a.savedX || n !== a.savedY || r !== a.savedPageIndex);
      if (!e) return false;
      const i = (s, n, r, a) => {
        if (__privateGet(this, _i6).has(s.id)) {
          const o = __privateGet(this, _a4).get(a);
          o ? s._setParentAndPosition(o, n, r) : (s.pageIndex = a, s.x = n, s.y = r);
        }
      };
      return this.addCommands({
        cmd: () => {
          for (const [s, { newX: n, newY: r, newPageIndex: a }] of t) i(s, n, r, a);
        },
        undo: () => {
          for (const [s, { savedX: n, savedY: r, savedPageIndex: a }] of t) i(s, n, r, a);
        },
        mustExec: true
      }), true;
    }
    dragSelectedEditors(t, e) {
      if (__privateGet(this, _g)) for (const i of __privateGet(this, _g).keys()) i.drag(t, e);
    }
    rebuild(t) {
      if (t.parent === null) {
        const e = this.getLayer(t.pageIndex);
        e ? (e.changeParent(t), e.addOrRebuild(t)) : (this.addEditor(t), this.addToAnnotationStorage(t), t.rebuild());
      } else t.parent.addOrRebuild(t);
    }
    get isEditorHandlingKeyboard() {
      var _a29;
      return ((_a29 = this.getActive()) == null ? void 0 : _a29.shouldGetKeyboardEvents()) || __privateGet(this, _E).size === 1 && this.firstSelectedEditor.shouldGetKeyboardEvents();
    }
    isActive(t) {
      return __privateGet(this, _e8) === t;
    }
    getActive() {
      return __privateGet(this, _e8);
    }
    getMode() {
      return __privateGet(this, _C);
    }
    isEditingMode() {
      return __privateGet(this, _C) !== $.NONE;
    }
    get imageManager() {
      return H(this, "imageManager", new zi());
    }
    getSelectionBoxes(t) {
      if (!t) return null;
      const e = document.getSelection();
      for (let l = 0, h = e.rangeCount; l < h; l++) if (!t.contains(e.getRangeAt(l).commonAncestorContainer)) return null;
      const { x: i, y: s, width: n, height: r } = t.getBoundingClientRect();
      let a;
      switch (t.getAttribute("data-main-rotation")) {
        case "90":
          a = (l, h, c, f) => ({
            x: (h - s) / r,
            y: 1 - (l + c - i) / n,
            width: f / r,
            height: c / n
          });
          break;
        case "180":
          a = (l, h, c, f) => ({
            x: 1 - (l + c - i) / n,
            y: 1 - (h + f - s) / r,
            width: c / n,
            height: f / r
          });
          break;
        case "270":
          a = (l, h, c, f) => ({
            x: 1 - (h + f - s) / r,
            y: (l - i) / n,
            width: f / r,
            height: c / n
          });
          break;
        default:
          a = (l, h, c, f) => ({
            x: (l - i) / n,
            y: (h - s) / r,
            width: c / n,
            height: f / r
          });
          break;
      }
      const o = [];
      for (let l = 0, h = e.rangeCount; l < h; l++) {
        const c = e.getRangeAt(l);
        if (!c.collapsed) for (const { x: f, y: g, width: b, height: m } of c.getClientRects()) b === 0 || m === 0 || o.push(a(f, g, b, m));
      }
      return o.length === 0 ? null : o;
    }
    addChangedExistingAnnotation({ annotationElementId: t, id: e }) {
      (__privateGet(this, _o2) || __privateSet(this, _o2, /* @__PURE__ */ new Map())).set(t, e);
    }
    removeChangedExistingAnnotation({ annotationElementId: t }) {
      var _a29;
      (_a29 = __privateGet(this, _o2)) == null ? void 0 : _a29.delete(t);
    }
    renderAnnotationElement(t) {
      var _a29;
      const e = (_a29 = __privateGet(this, _o2)) == null ? void 0 : _a29.get(t.data.id);
      if (!e) return;
      const i = __privateGet(this, _n4).getRawValue(e);
      i && (__privateGet(this, _C) === $.NONE && !i.hasBeenModified || i.renderAnnotationElement(t));
    }
    setMissingCanvas(t, e, i) {
      var _a29;
      const s = (_a29 = __privateGet(this, _F)) == null ? void 0 : _a29.get(t);
      s && (s.setCanvas(e, i), __privateGet(this, _F).delete(t));
    }
    addMissingCanvas(t, e) {
      (__privateGet(this, _F) || __privateSet(this, _F, /* @__PURE__ */ new Map())).set(t, e);
    }
  }, _t9 = new WeakMap(), _e8 = new WeakMap(), _s8 = new WeakMap(), _i6 = new WeakMap(), _a4 = new WeakMap(), _r4 = new WeakMap(), _n4 = new WeakMap(), _o2 = new WeakMap(), _h2 = new WeakMap(), _l = new WeakMap(), _u = new WeakMap(), _d = new WeakMap(), _f = new WeakMap(), _m = new WeakMap(), _g = new WeakMap(), _c2 = new WeakMap(), _p = new WeakMap(), _b2 = new WeakMap(), _A = new WeakMap(), _y = new WeakMap(), __ = new WeakMap(), _S = new WeakMap(), _v = new WeakMap(), _T = new WeakMap(), _w = new WeakMap(), _x = new WeakMap(), _M = new WeakMap(), _P = new WeakMap(), _k = new WeakMap(), _N = new WeakMap(), _D = new WeakMap(), _R = new WeakMap(), _O = new WeakMap(), _F = new WeakMap(), _z = new WeakMap(), _C = new WeakMap(), _E = new WeakMap(), _L = new WeakMap(), _U = new WeakMap(), _$ = new WeakMap(), _X = new WeakMap(), _W = new WeakMap(), _Y = new WeakMap(), _j = new WeakMap(), _B = new WeakMap(), _V = new WeakMap(), _Q2 = new WeakMap(), _Z = new WeakMap(), _H = new WeakMap(), _Zt_instances = new WeakSet(), J_fn = function({ anchorNode: t }) {
    return t.nodeType === Node.TEXT_NODE ? t.parentElement : t;
  }, tt_fn = function(t) {
    const { currentLayer: e } = this;
    if (e.hasTextLayer(t)) return e;
    for (const i of __privateGet(this, _a4).values()) if (i.hasTextLayer(t)) return i;
    return null;
  }, nt_fn = function(t) {
    var _a29;
    this.commitOrRemove(), (_a29 = this.currentLayer) == null ? void 0 : _a29.endDrawingSession(false);
  }, rt_fn = function() {
    const t = document.getSelection();
    if (!t || t.isCollapsed) return;
    const i = __privateMethod(this, _Zt_instances, J_fn).call(this, t).closest(".textLayer"), s = this.getSelectionBoxes(i);
    s && (__privateGet(this, _x) || __privateSet(this, _x, new Vn(this)), __privateGet(this, _x).show(i, s, this.direction === "ltr"));
  }, at_fn = function() {
    var _a29, _b7, _c10;
    const t = document.getSelection();
    if (!t || t.isCollapsed) {
      __privateGet(this, _L) && ((_a29 = __privateGet(this, _x)) == null ? void 0 : _a29.hide(), __privateSet(this, _L, null), __privateMethod(this, _Zt_instances, I_fn).call(this, {
        hasSelectedText: false
      }));
      return;
    }
    const { anchorNode: e } = t;
    if (e === __privateGet(this, _L)) return;
    const s = __privateMethod(this, _Zt_instances, J_fn).call(this, t).closest(".textLayer");
    if (!s) {
      __privateGet(this, _L) && ((_b7 = __privateGet(this, _x)) == null ? void 0 : _b7.hide(), __privateSet(this, _L, null), __privateMethod(this, _Zt_instances, I_fn).call(this, {
        hasSelectedText: false
      }));
      return;
    }
    if ((_c10 = __privateGet(this, _x)) == null ? void 0 : _c10.hide(), __privateSet(this, _L, e), __privateMethod(this, _Zt_instances, I_fn).call(this, {
      hasSelectedText: true
    }), !(__privateGet(this, _C) !== $.HIGHLIGHT && __privateGet(this, _C) !== $.NONE) && (__privateGet(this, _C) === $.HIGHLIGHT && this.showAllEditors("highlight", true, true), __privateSet(this, _w, this.isShiftKeyDown), !this.isShiftKeyDown)) {
      const n = __privateGet(this, _C) === $.HIGHLIGHT ? __privateMethod(this, _Zt_instances, tt_fn).call(this, s) : null;
      if (n == null ? void 0 : n.toggleDrawing(), __privateGet(this, _k)) {
        const r = new AbortController(), a = this.combinedSignal(r), o = (l) => {
          l.type === "pointerup" && l.button !== 0 || (r.abort(), n == null ? void 0 : n.toggleDrawing(true), l.type === "pointerup" && __privateMethod(this, _Zt_instances, q_fn).call(this, "main_toolbar"));
        };
        window.addEventListener("pointerup", o, {
          signal: a
        }), window.addEventListener("blur", o, {
          signal: a
        });
      } else n == null ? void 0 : n.toggleDrawing(true), __privateMethod(this, _Zt_instances, q_fn).call(this, "main_toolbar");
    }
  }, q_fn = function(t = "") {
    __privateGet(this, _C) === $.HIGHLIGHT ? this.highlightSelection(t) : __privateGet(this, _b2) && __privateMethod(this, _Zt_instances, rt_fn).call(this);
  }, ot_fn = function() {
    document.addEventListener("selectionchange", __privateMethod(this, _Zt_instances, at_fn).bind(this), {
      signal: this._signal
    });
  }, lt_fn = function() {
    if (__privateGet(this, _v)) return;
    __privateSet(this, _v, new AbortController());
    const t = this.combinedSignal(__privateGet(this, _v));
    window.addEventListener("focus", this.focus.bind(this), {
      signal: t
    }), window.addEventListener("blur", this.blur.bind(this), {
      signal: t
    });
  }, ht_fn = function() {
    var _a29;
    (_a29 = __privateGet(this, _v)) == null ? void 0 : _a29.abort(), __privateSet(this, _v, null);
  }, et_fn = function() {
    if (__privateGet(this, _D)) return;
    __privateSet(this, _D, new AbortController());
    const t = this.combinedSignal(__privateGet(this, _D));
    window.addEventListener("keydown", this.keydown.bind(this), {
      signal: t
    }), window.addEventListener("keyup", this.keyup.bind(this), {
      signal: t
    });
  }, ct_fn = function() {
    var _a29;
    (_a29 = __privateGet(this, _D)) == null ? void 0 : _a29.abort(), __privateSet(this, _D, null);
  }, dt_fn = function() {
    if (__privateGet(this, _u)) return;
    __privateSet(this, _u, new AbortController());
    const t = this.combinedSignal(__privateGet(this, _u));
    document.addEventListener("copy", this.copy.bind(this), {
      signal: t
    }), document.addEventListener("cut", this.cut.bind(this), {
      signal: t
    }), document.addEventListener("paste", this.paste.bind(this), {
      signal: t
    });
  }, ut_fn = function() {
    var _a29;
    (_a29 = __privateGet(this, _u)) == null ? void 0 : _a29.abort(), __privateSet(this, _u, null);
  }, ft_fn = function() {
    const t = this._signal;
    document.addEventListener("dragover", this.dragOver.bind(this), {
      signal: t
    }), document.addEventListener("drop", this.drop.bind(this), {
      signal: t
    });
  }, I_fn = function(t) {
    Object.entries(t).some(([i, s]) => __privateGet(this, _Y)[i] !== s) && (this._eventBus.dispatch("annotationeditorstateschanged", {
      source: this,
      details: Object.assign(__privateGet(this, _Y), t)
    }), __privateGet(this, _C) === $.HIGHLIGHT && t.hasSelectedEditor === false && __privateMethod(this, _Zt_instances, G_fn).call(this, [
      [
        X.HIGHLIGHT_FREE,
        true
      ]
    ]));
  }, G_fn = function(t) {
    this._eventBus.dispatch("annotationeditorparamschanged", {
      source: this,
      details: t
    });
  }, pt_fn = async function() {
    if (!__privateGet(this, _P)) {
      __privateSet(this, _P, true);
      const t = [];
      for (const e of __privateGet(this, _a4).values()) t.push(e.enable());
      await Promise.all(t);
      for (const e of __privateGet(this, _i6).values()) e.enable();
    }
  }, gt_fn = function() {
    if (this.unselectAll(), __privateGet(this, _P)) {
      __privateSet(this, _P, false);
      for (const t of __privateGet(this, _a4).values()) t.disable();
      for (const t of __privateGet(this, _i6).values()) t.disable();
    }
  }, it_fn = function(t) {
    const e = __privateGet(this, _a4).get(t.pageIndex);
    e ? e.addOrRebuild(t) : (this.addEditor(t), this.addToAnnotationStorage(t));
  }, mt_get = function() {
    let t = null;
    for (t of __privateGet(this, _E)) ;
    return t;
  }, K_fn = function() {
    if (__privateGet(this, _i6).size === 0) return true;
    if (__privateGet(this, _i6).size === 1) for (const t of __privateGet(this, _i6).values()) return t.isEmpty();
    return false;
  }, st_fn = function(t) {
    for (const e of __privateGet(this, _E)) e.unselect();
    __privateGet(this, _E).clear();
    for (const e of t) e.isEmpty() || (__privateGet(this, _E).add(e), e.select());
    __privateMethod(this, _Zt_instances, I_fn).call(this, {
      hasSelectedEditor: this.hasSelection
    });
  }, __publicField(_d2, "TRANSLATE_SMALL", 1), __publicField(_d2, "TRANSLATE_BIG", 10), _d2);
  const _Gt = class _Gt {
    constructor(t) {
      __privateAdd(this, _Gt_instances);
      __privateAdd(this, _t10, null);
      __privateAdd(this, _e9, false);
      __privateAdd(this, _s9, null);
      __privateAdd(this, _i7, null);
      __privateAdd(this, _a5, null);
      __privateAdd(this, _r5, null);
      __privateAdd(this, _n5, false);
      __privateAdd(this, _o3, null);
      __privateAdd(this, _h3, null);
      __privateAdd(this, _l2, null);
      __privateAdd(this, _u2, null);
      __privateAdd(this, _d3, false);
      __privateSet(this, _h3, t), __privateSet(this, _d3, t._uiManager.useNewAltTextFlow), __privateGet(_Gt, _f2) || __privateSet(_Gt, _f2, Object.freeze({
        added: "pdfjs-editor-new-alt-text-added-button",
        "added-label": "pdfjs-editor-new-alt-text-added-button-label",
        missing: "pdfjs-editor-new-alt-text-missing-button",
        "missing-label": "pdfjs-editor-new-alt-text-missing-button-label",
        review: "pdfjs-editor-new-alt-text-to-review-button",
        "review-label": "pdfjs-editor-new-alt-text-to-review-button-label"
      }));
    }
    static initialize(t) {
      _Gt._l10n ?? (_Gt._l10n = t);
    }
    async render() {
      const t = __privateSet(this, _s9, document.createElement("button"));
      t.className = "altText", t.tabIndex = "0";
      const e = __privateSet(this, _i7, document.createElement("span"));
      t.append(e), __privateGet(this, _d3) ? (t.classList.add("new"), t.setAttribute("data-l10n-id", __privateGet(_Gt, _f2).missing), e.setAttribute("data-l10n-id", __privateGet(_Gt, _f2)["missing-label"])) : (t.setAttribute("data-l10n-id", "pdfjs-editor-alt-text-button"), e.setAttribute("data-l10n-id", "pdfjs-editor-alt-text-button-label"));
      const i = __privateGet(this, _h3)._uiManager._signal;
      t.addEventListener("contextmenu", Ft, {
        signal: i
      }), t.addEventListener("pointerdown", (n) => n.stopPropagation(), {
        signal: i
      });
      const s = (n) => {
        n.preventDefault(), __privateGet(this, _h3)._uiManager.editAltText(__privateGet(this, _h3)), __privateGet(this, _d3) && __privateGet(this, _h3)._reportTelemetry({
          action: "pdfjs.image.alt_text.image_status_label_clicked",
          data: {
            label: __privateGet(this, _Gt_instances, m_get2)
          }
        });
      };
      return t.addEventListener("click", s, {
        capture: true,
        signal: i
      }), t.addEventListener("keydown", (n) => {
        n.target === t && n.key === "Enter" && (__privateSet(this, _n5, true), s(n));
      }, {
        signal: i
      }), await __privateMethod(this, _Gt_instances, g_fn).call(this), t;
    }
    finish() {
      __privateGet(this, _s9) && (__privateGet(this, _s9).focus({
        focusVisible: __privateGet(this, _n5)
      }), __privateSet(this, _n5, false));
    }
    isEmpty() {
      return __privateGet(this, _d3) ? __privateGet(this, _t10) === null : !__privateGet(this, _t10) && !__privateGet(this, _e9);
    }
    hasData() {
      return __privateGet(this, _d3) ? __privateGet(this, _t10) !== null || !!__privateGet(this, _l2) : this.isEmpty();
    }
    get guessedText() {
      return __privateGet(this, _l2);
    }
    async setGuessedText(t) {
      __privateGet(this, _t10) === null && (__privateSet(this, _l2, t), __privateSet(this, _u2, await _Gt._l10n.get("pdfjs-editor-new-alt-text-generated-alt-text-with-disclaimer", {
        generatedAltText: t
      })), __privateMethod(this, _Gt_instances, g_fn).call(this));
    }
    toggleAltTextBadge(t = false) {
      var _a29;
      if (!__privateGet(this, _d3) || __privateGet(this, _t10)) {
        (_a29 = __privateGet(this, _o3)) == null ? void 0 : _a29.remove(), __privateSet(this, _o3, null);
        return;
      }
      if (!__privateGet(this, _o3)) {
        const e = __privateSet(this, _o3, document.createElement("div"));
        e.className = "noAltTextBadge", __privateGet(this, _h3).div.append(e);
      }
      __privateGet(this, _o3).classList.toggle("hidden", !t);
    }
    serialize(t) {
      let e = __privateGet(this, _t10);
      return !t && __privateGet(this, _l2) === e && (e = __privateGet(this, _u2)), {
        altText: e,
        decorative: __privateGet(this, _e9),
        guessedText: __privateGet(this, _l2),
        textWithDisclaimer: __privateGet(this, _u2)
      };
    }
    get data() {
      return {
        altText: __privateGet(this, _t10),
        decorative: __privateGet(this, _e9)
      };
    }
    set data({ altText: t, decorative: e, guessedText: i, textWithDisclaimer: s, cancel: n = false }) {
      i && (__privateSet(this, _l2, i), __privateSet(this, _u2, s)), !(__privateGet(this, _t10) === t && __privateGet(this, _e9) === e) && (n || (__privateSet(this, _t10, t), __privateSet(this, _e9, e)), __privateMethod(this, _Gt_instances, g_fn).call(this));
    }
    toggle(t = false) {
      __privateGet(this, _s9) && (!t && __privateGet(this, _r5) && (clearTimeout(__privateGet(this, _r5)), __privateSet(this, _r5, null)), __privateGet(this, _s9).disabled = !t);
    }
    shown() {
      __privateGet(this, _h3)._reportTelemetry({
        action: "pdfjs.image.alt_text.image_status_label_displayed",
        data: {
          label: __privateGet(this, _Gt_instances, m_get2)
        }
      });
    }
    destroy() {
      var _a29, _b7;
      (_a29 = __privateGet(this, _s9)) == null ? void 0 : _a29.remove(), __privateSet(this, _s9, null), __privateSet(this, _i7, null), __privateSet(this, _a5, null), (_b7 = __privateGet(this, _o3)) == null ? void 0 : _b7.remove(), __privateSet(this, _o3, null);
    }
  };
  _t10 = new WeakMap();
  _e9 = new WeakMap();
  _s9 = new WeakMap();
  _i7 = new WeakMap();
  _a5 = new WeakMap();
  _r5 = new WeakMap();
  _n5 = new WeakMap();
  _o3 = new WeakMap();
  _h3 = new WeakMap();
  _l2 = new WeakMap();
  _u2 = new WeakMap();
  _d3 = new WeakMap();
  _f2 = new WeakMap();
  _Gt_instances = new WeakSet();
  m_get2 = function() {
    return __privateGet(this, _t10) && "added" || __privateGet(this, _t10) === null && this.guessedText && "review" || "missing";
  };
  g_fn = async function() {
    var _a29, _b7, _c10, _d12;
    const t = __privateGet(this, _s9);
    if (!t) return;
    if (__privateGet(this, _d3)) {
      if (t.classList.toggle("done", !!__privateGet(this, _t10)), t.setAttribute("data-l10n-id", __privateGet(_Gt, _f2)[__privateGet(this, _Gt_instances, m_get2)]), (_a29 = __privateGet(this, _i7)) == null ? void 0 : _a29.setAttribute("data-l10n-id", __privateGet(_Gt, _f2)[`${__privateGet(this, _Gt_instances, m_get2)}-label`]), !__privateGet(this, _t10)) {
        (_b7 = __privateGet(this, _a5)) == null ? void 0 : _b7.remove();
        return;
      }
    } else {
      if (!__privateGet(this, _t10) && !__privateGet(this, _e9)) {
        t.classList.remove("done"), (_c10 = __privateGet(this, _a5)) == null ? void 0 : _c10.remove();
        return;
      }
      t.classList.add("done"), t.setAttribute("data-l10n-id", "pdfjs-editor-alt-text-edit-button");
    }
    let e = __privateGet(this, _a5);
    if (!e) {
      __privateSet(this, _a5, e = document.createElement("span")), e.className = "tooltip", e.setAttribute("role", "tooltip"), e.id = `alt-text-tooltip-${__privateGet(this, _h3).id}`;
      const s = 100, n = __privateGet(this, _h3)._uiManager._signal;
      n.addEventListener("abort", () => {
        clearTimeout(__privateGet(this, _r5)), __privateSet(this, _r5, null);
      }, {
        once: true
      }), t.addEventListener("mouseenter", () => {
        __privateSet(this, _r5, setTimeout(() => {
          __privateSet(this, _r5, null), __privateGet(this, _a5).classList.add("show"), __privateGet(this, _h3)._reportTelemetry({
            action: "alt_text_tooltip"
          });
        }, s));
      }, {
        signal: n
      }), t.addEventListener("mouseleave", () => {
        var _a30;
        __privateGet(this, _r5) && (clearTimeout(__privateGet(this, _r5)), __privateSet(this, _r5, null)), (_a30 = __privateGet(this, _a5)) == null ? void 0 : _a30.classList.remove("show");
      }, {
        signal: n
      });
    }
    __privateGet(this, _e9) ? e.setAttribute("data-l10n-id", "pdfjs-editor-alt-text-decorative-tooltip") : (e.removeAttribute("data-l10n-id"), e.textContent = __privateGet(this, _t10)), e.parentNode || t.append(e), (_d12 = __privateGet(this, _h3).getElementForAltText()) == null ? void 0 : _d12.setAttribute("aria-describedby", e.id);
  };
  __privateAdd(_Gt, _f2, null);
  __publicField(_Gt, "_l10n", null);
  let Gt = _Gt;
  class He {
    constructor(t) {
      __privateAdd(this, _He_instances);
      __privateAdd(this, _t11, null);
      __privateAdd(this, _e10, null);
      __privateAdd(this, _s10, false);
      __privateAdd(this, _i8, null);
      __privateAdd(this, _a6, null);
      __privateAdd(this, _r6, null);
      __privateAdd(this, _n6, null);
      __privateAdd(this, _o4, null);
      __privateAdd(this, _h4, false);
      __privateAdd(this, _l3, null);
      __privateSet(this, _i8, t);
    }
    renderForToolbar() {
      const t = __privateSet(this, _e10, document.createElement("button"));
      return t.className = "comment", __privateMethod(this, _He_instances, u_fn3).call(this, t, false);
    }
    renderForStandalone() {
      const t = __privateSet(this, _t11, document.createElement("button"));
      t.className = "annotationCommentButton";
      const e = __privateGet(this, _i8).commentButtonPosition;
      if (e) {
        const { style: i } = t;
        i.insetInlineEnd = `calc(${100 * (__privateGet(this, _i8)._uiManager.direction === "ltr" ? 1 - e[0] : e[0])}% - var(--comment-button-dim))`, i.top = `calc(${100 * e[1]}% - var(--comment-button-dim))`;
        const s = __privateGet(this, _i8).commentButtonColor;
        s && (i.backgroundColor = s);
      }
      return __privateMethod(this, _He_instances, u_fn3).call(this, t, true);
    }
    focusButton() {
      setTimeout(() => {
        var _a29;
        (_a29 = __privateGet(this, _t11) ?? __privateGet(this, _e10)) == null ? void 0 : _a29.focus();
      }, 0);
    }
    onUpdatedColor() {
      if (!__privateGet(this, _t11)) return;
      const t = __privateGet(this, _i8).commentButtonColor;
      t && (__privateGet(this, _t11).style.backgroundColor = t), __privateGet(this, _i8)._uiManager.updatePopupColor(__privateGet(this, _i8));
    }
    get commentButtonWidth() {
      var _a29;
      return (((_a29 = __privateGet(this, _t11)) == null ? void 0 : _a29.getBoundingClientRect().width) ?? 0) / __privateGet(this, _i8).parent.boundingClientRect.width;
    }
    get commentPopupPositionInLayer() {
      if (__privateGet(this, _l3)) return __privateGet(this, _l3);
      if (!__privateGet(this, _t11)) return null;
      const { x: t, y: e, height: i } = __privateGet(this, _t11).getBoundingClientRect(), { x: s, y: n, width: r, height: a } = __privateGet(this, _i8).parent.boundingClientRect;
      return [
        (t - s) / r,
        (e + i - n) / a
      ];
    }
    set commentPopupPositionInLayer(t) {
      __privateSet(this, _l3, t);
    }
    hasDefaultPopupPosition() {
      return __privateGet(this, _l3) === null;
    }
    removeStandaloneCommentButton() {
      var _a29;
      (_a29 = __privateGet(this, _t11)) == null ? void 0 : _a29.remove(), __privateSet(this, _t11, null);
    }
    removeToolbarCommentButton() {
      var _a29;
      (_a29 = __privateGet(this, _e10)) == null ? void 0 : _a29.remove(), __privateSet(this, _e10, null);
    }
    setCommentButtonStates({ selected: t, hasPopup: e }) {
      __privateGet(this, _t11) && (__privateGet(this, _t11).classList.toggle("selected", t), __privateGet(this, _t11).ariaExpanded = e);
    }
    edit(t) {
      const e = this.commentPopupPositionInLayer;
      let i, s;
      if (e) [i, s] = e;
      else {
        [i, s] = __privateGet(this, _i8).commentButtonPosition;
        const { width: h, height: c, x: f, y: g } = __privateGet(this, _i8);
        i = f + i * h, s = g + s * c;
      }
      const n = __privateGet(this, _i8).parent.boundingClientRect, { x: r, y: a, width: o, height: l } = n;
      __privateGet(this, _i8)._uiManager.editComment(__privateGet(this, _i8), r + i * o, a + s * l, {
        ...t,
        parentDimensions: n
      });
    }
    finish() {
      __privateGet(this, _e10) && (__privateGet(this, _e10).focus({
        focusVisible: __privateGet(this, _s10)
      }), __privateSet(this, _s10, false));
    }
    isDeleted() {
      return __privateGet(this, _h4) || __privateGet(this, _n6) === "";
    }
    isEmpty() {
      return __privateGet(this, _n6) === null;
    }
    hasBeenEdited() {
      return this.isDeleted() || __privateGet(this, _n6) !== __privateGet(this, _a6);
    }
    serialize() {
      return this.data;
    }
    get data() {
      return {
        text: __privateGet(this, _n6),
        richText: __privateGet(this, _r6),
        date: __privateGet(this, _o4),
        deleted: this.isDeleted()
      };
    }
    set data(t) {
      if (t !== __privateGet(this, _n6) && __privateSet(this, _r6, null), t === null) {
        __privateSet(this, _n6, ""), __privateSet(this, _h4, true);
        return;
      }
      __privateSet(this, _n6, t), __privateSet(this, _o4, /* @__PURE__ */ new Date()), __privateSet(this, _h4, false);
    }
    restoreData({ text: t, richText: e, date: i }) {
      __privateSet(this, _n6, t), __privateSet(this, _r6, e), __privateSet(this, _o4, i), __privateSet(this, _h4, false);
    }
    setInitialText(t, e = null) {
      __privateSet(this, _a6, t), this.data = t, __privateSet(this, _o4, null), __privateSet(this, _r6, e);
    }
    shown() {
    }
    destroy() {
      var _a29, _b7;
      (_a29 = __privateGet(this, _e10)) == null ? void 0 : _a29.remove(), __privateSet(this, _e10, null), (_b7 = __privateGet(this, _t11)) == null ? void 0 : _b7.remove(), __privateSet(this, _t11, null), __privateSet(this, _n6, ""), __privateSet(this, _r6, null), __privateSet(this, _o4, null), __privateSet(this, _i8, null), __privateSet(this, _s10, false), __privateSet(this, _h4, false);
    }
  }
  _t11 = new WeakMap();
  _e10 = new WeakMap();
  _s10 = new WeakMap();
  _i8 = new WeakMap();
  _a6 = new WeakMap();
  _r6 = new WeakMap();
  _n6 = new WeakMap();
  _o4 = new WeakMap();
  _h4 = new WeakMap();
  _l3 = new WeakMap();
  _He_instances = new WeakSet();
  u_fn3 = function(t, e) {
    if (!__privateGet(this, _i8)._uiManager.hasCommentManager()) return null;
    t.tabIndex = "0", t.ariaHasPopup = "dialog", e ? (t.ariaControls = "commentPopup", t.setAttribute("data-l10n-id", "pdfjs-show-comment-button")) : (t.ariaControlsElements = [
      __privateGet(this, _i8)._uiManager.getCommentDialogElement()
    ], t.setAttribute("data-l10n-id", "pdfjs-editor-add-comment-button"));
    const i = __privateGet(this, _i8)._uiManager._signal;
    if (!(i instanceof AbortSignal) || i.aborted) return t;
    t.addEventListener("contextmenu", Ft, {
      signal: i
    }), e && (t.addEventListener("focusin", (n) => {
      __privateGet(this, _i8)._focusEventsAllowed = false, dt(n);
    }, {
      capture: true,
      signal: i
    }), t.addEventListener("focusout", (n) => {
      __privateGet(this, _i8)._focusEventsAllowed = true, dt(n);
    }, {
      capture: true,
      signal: i
    })), t.addEventListener("pointerdown", (n) => n.stopPropagation(), {
      signal: i
    });
    const s = (n) => {
      n.preventDefault(), t === __privateGet(this, _e10) ? this.edit() : __privateGet(this, _i8).toggleComment(true);
    };
    return t.addEventListener("click", s, {
      capture: true,
      signal: i
    }), t.addEventListener("keydown", (n) => {
      n.target === t && n.key === "Enter" && (__privateSet(this, _s10, true), s(n));
    }, {
      signal: i
    }), t.addEventListener("pointerenter", () => {
      __privateGet(this, _i8).toggleComment(false, true);
    }, {
      signal: i
    }), t.addEventListener("pointerleave", () => {
      __privateGet(this, _i8).toggleComment(false, false);
    }, {
      signal: i
    }), t;
  };
  ni = (_e12 = class {
    constructor({ container: t, isPinchingDisabled: e = null, isPinchingStopped: i = null, onPinchStart: s = null, onPinching: n = null, onPinchEnd: r = null, signal: a }) {
      __privateAdd(this, _ni_instances);
      __privateAdd(this, _t12);
      __privateAdd(this, _e11, false);
      __privateAdd(this, _s11, null);
      __privateAdd(this, _i9);
      __privateAdd(this, _a7);
      __privateAdd(this, _r7);
      __privateAdd(this, _n7);
      __privateAdd(this, _o5, null);
      __privateAdd(this, _h5);
      __privateAdd(this, _l4, null);
      __privateAdd(this, _u3);
      __privateAdd(this, _d4, null);
      __privateSet(this, _t12, t), __privateSet(this, _s11, i), __privateSet(this, _i9, e), __privateSet(this, _a7, s), __privateSet(this, _r7, n), __privateSet(this, _n7, r), __privateSet(this, _u3, new AbortController()), __privateSet(this, _h5, AbortSignal.any([
        a,
        __privateGet(this, _u3).signal
      ])), t.addEventListener("touchstart", __privateMethod(this, _ni_instances, f_fn2).bind(this), {
        passive: false,
        signal: __privateGet(this, _h5)
      });
    }
    get MIN_TOUCH_DISTANCE_TO_PINCH() {
      return 35 / zt.pixelRatio;
    }
    destroy() {
      var _a29, _b7;
      (_a29 = __privateGet(this, _u3)) == null ? void 0 : _a29.abort(), __privateSet(this, _u3, null), (_b7 = __privateGet(this, _o5)) == null ? void 0 : _b7.abort(), __privateSet(this, _o5, null);
    }
  }, _t12 = new WeakMap(), _e11 = new WeakMap(), _s11 = new WeakMap(), _i9 = new WeakMap(), _a7 = new WeakMap(), _r7 = new WeakMap(), _n7 = new WeakMap(), _o5 = new WeakMap(), _h5 = new WeakMap(), _l4 = new WeakMap(), _u3 = new WeakMap(), _d4 = new WeakMap(), _ni_instances = new WeakSet(), f_fn2 = function(t) {
    var _a29, _b7, _c10;
    if ((_a29 = __privateGet(this, _i9)) == null ? void 0 : _a29.call(this)) return;
    if (t.touches.length === 1) {
      if (__privateGet(this, _o5)) return;
      const s = __privateSet(this, _o5, new AbortController()), n = AbortSignal.any([
        __privateGet(this, _h5),
        s.signal
      ]), r = __privateGet(this, _t12), a = {
        capture: true,
        signal: n,
        passive: false
      }, o = (l) => {
        var _a30;
        l.pointerType === "touch" && ((_a30 = __privateGet(this, _o5)) == null ? void 0 : _a30.abort(), __privateSet(this, _o5, null));
      };
      r.addEventListener("pointerdown", (l) => {
        l.pointerType === "touch" && (dt(l), o(l));
      }, a), r.addEventListener("pointerup", o, a), r.addEventListener("pointercancel", o, a);
      return;
    }
    if (!__privateGet(this, _d4)) {
      __privateSet(this, _d4, new AbortController());
      const s = AbortSignal.any([
        __privateGet(this, _h5),
        __privateGet(this, _d4).signal
      ]), n = __privateGet(this, _t12), r = {
        signal: s,
        capture: false,
        passive: false
      };
      n.addEventListener("touchmove", __privateMethod(this, _ni_instances, m_fn).bind(this), r);
      const a = __privateMethod(this, _ni_instances, g_fn2).bind(this);
      n.addEventListener("touchend", a, r), n.addEventListener("touchcancel", a, r), r.capture = true, n.addEventListener("pointerdown", dt, r), n.addEventListener("pointermove", dt, r), n.addEventListener("pointercancel", dt, r), n.addEventListener("pointerup", dt, r), (_b7 = __privateGet(this, _a7)) == null ? void 0 : _b7.call(this);
    }
    if (dt(t), t.touches.length !== 2 || ((_c10 = __privateGet(this, _s11)) == null ? void 0 : _c10.call(this))) {
      __privateSet(this, _l4, null);
      return;
    }
    let [e, i] = t.touches;
    e.identifier > i.identifier && ([e, i] = [
      i,
      e
    ]), __privateSet(this, _l4, {
      touch0X: e.screenX,
      touch0Y: e.screenY,
      touch1X: i.screenX,
      touch1Y: i.screenY
    });
  }, m_fn = function(t) {
    var _a29;
    if (!__privateGet(this, _l4) || t.touches.length !== 2) return;
    dt(t);
    let [e, i] = t.touches;
    e.identifier > i.identifier && ([e, i] = [
      i,
      e
    ]);
    const { screenX: s, screenY: n } = e, { screenX: r, screenY: a } = i, o = __privateGet(this, _l4), { touch0X: l, touch0Y: h, touch1X: c, touch1Y: f } = o, g = c - l, b = f - h, m = r - s, w = a - n, A = Math.hypot(m, w) || 1, S = Math.hypot(g, b) || 1;
    if (!__privateGet(this, _e11) && Math.abs(S - A) <= ni.MIN_TOUCH_DISTANCE_TO_PINCH) return;
    if (o.touch0X = s, o.touch0Y = n, o.touch1X = r, o.touch1Y = a, !__privateGet(this, _e11)) {
      __privateSet(this, _e11, true);
      return;
    }
    const E = [
      (s + r) / 2,
      (n + a) / 2
    ];
    (_a29 = __privateGet(this, _r7)) == null ? void 0 : _a29.call(this, E, S, A);
  }, g_fn2 = function(t) {
    var _a29;
    t.touches.length >= 2 || (__privateGet(this, _d4) && (__privateGet(this, _d4).abort(), __privateSet(this, _d4, null), (_a29 = __privateGet(this, _n7)) == null ? void 0 : _a29.call(this)), __privateGet(this, _l4) && (dt(t), __privateSet(this, _l4, null), __privateSet(this, _e11, false)));
  }, _e12);
  const _U2 = class _U2 {
    constructor(t) {
      __privateAdd(this, _U_instances);
      __privateAdd(this, _t13, null);
      __privateAdd(this, _e13, null);
      __privateAdd(this, _s12, null);
      __privateAdd(this, _i10, null);
      __privateAdd(this, _a8, null);
      __privateAdd(this, _r8, false);
      __privateAdd(this, _n8, null);
      __privateAdd(this, _o6, "");
      __privateAdd(this, _h6, null);
      __privateAdd(this, _l5, null);
      __privateAdd(this, _u4, null);
      __privateAdd(this, _d5, null);
      __privateAdd(this, _f3, null);
      __privateAdd(this, _m2, "");
      __privateAdd(this, _g2, false);
      __privateAdd(this, _c3, null);
      __privateAdd(this, _p2, false);
      __privateAdd(this, _b3, false);
      __privateAdd(this, _A2, false);
      __privateAdd(this, _y2, null);
      __privateAdd(this, __2, 0);
      __privateAdd(this, _S2, 0);
      __privateAdd(this, _v2, null);
      __privateAdd(this, _T2, null);
      __publicField(this, "isSelected", false);
      __publicField(this, "_isCopy", false);
      __publicField(this, "_editToolbar", null);
      __publicField(this, "_initialOptions", /* @__PURE__ */ Object.create(null));
      __publicField(this, "_initialData", null);
      __publicField(this, "_isVisible", true);
      __publicField(this, "_uiManager", null);
      __publicField(this, "_focusEventsAllowed", true);
      __privateAdd(this, _w2, false);
      __privateAdd(this, _x2, _U2._zIndex++);
      this.parent = t.parent, this.id = t.id, this.width = this.height = null, this.pageIndex = t.parent.pageIndex, this.name = t.name, this.div = null, this._uiManager = t.uiManager, this.annotationElementId = null, this._willKeepAspectRatio = false, this._initialOptions.isCentered = t.isCentered, this._structTreeParentId = null, this.annotationElementId = t.annotationElementId || null, this.creationDate = t.creationDate || /* @__PURE__ */ new Date(), this.modificationDate = t.modificationDate || null, this.canAddComment = true;
      const { rotation: e, rawDims: { pageWidth: i, pageHeight: s, pageX: n, pageY: r } } = this.parent.viewport;
      this.rotation = e, this.pageRotation = (360 + e - this._uiManager.viewParameters.rotation) % 360, this.pageDimensions = [
        i,
        s
      ], this.pageTranslation = [
        n,
        r
      ];
      const [a, o] = this.parentDimensions;
      this.x = t.x / a, this.y = t.y / o, this.isAttachedToDOM = false, this.deleted = false;
    }
    static get _resizerKeyboardManager() {
      const t = _U2.prototype._resizeWithKeyboard, e = Zt.TRANSLATE_SMALL, i = Zt.TRANSLATE_BIG;
      return H(this, "_resizerKeyboardManager", new Fe([
        [
          [
            "ArrowLeft",
            "mac+ArrowLeft"
          ],
          t,
          {
            args: [
              -e,
              0
            ]
          }
        ],
        [
          [
            "ctrl+ArrowLeft",
            "mac+shift+ArrowLeft"
          ],
          t,
          {
            args: [
              -i,
              0
            ]
          }
        ],
        [
          [
            "ArrowRight",
            "mac+ArrowRight"
          ],
          t,
          {
            args: [
              e,
              0
            ]
          }
        ],
        [
          [
            "ctrl+ArrowRight",
            "mac+shift+ArrowRight"
          ],
          t,
          {
            args: [
              i,
              0
            ]
          }
        ],
        [
          [
            "ArrowUp",
            "mac+ArrowUp"
          ],
          t,
          {
            args: [
              0,
              -e
            ]
          }
        ],
        [
          [
            "ctrl+ArrowUp",
            "mac+shift+ArrowUp"
          ],
          t,
          {
            args: [
              0,
              -i
            ]
          }
        ],
        [
          [
            "ArrowDown",
            "mac+ArrowDown"
          ],
          t,
          {
            args: [
              0,
              e
            ]
          }
        ],
        [
          [
            "ctrl+ArrowDown",
            "mac+shift+ArrowDown"
          ],
          t,
          {
            args: [
              0,
              i
            ]
          }
        ],
        [
          [
            "Escape",
            "mac+Escape"
          ],
          _U2.prototype._stopResizingWithKeyboard
        ]
      ]));
    }
    updatePageIndex(t) {
      this.pageIndex = t;
    }
    get editorType() {
      return Object.getPrototypeOf(this).constructor._type;
    }
    get mode() {
      return Object.getPrototypeOf(this).constructor._editorType;
    }
    static get isDrawer() {
      return false;
    }
    static get _defaultLineColor() {
      return H(this, "_defaultLineColor", this._colorManager.getHexCode("CanvasText"));
    }
    static deleteAnnotationElement(t) {
      const e = new Yn({
        id: t.parent.getNextId(),
        parent: t.parent,
        uiManager: t._uiManager
      });
      e.annotationElementId = t.annotationElementId, e.deleted = true, e._uiManager.addToAnnotationStorage(e);
    }
    static initialize(t, e) {
      if (_U2._l10n ?? (_U2._l10n = t), _U2._l10nResizer || (_U2._l10nResizer = Object.freeze({
        topLeft: "pdfjs-editor-resizer-top-left",
        topMiddle: "pdfjs-editor-resizer-top-middle",
        topRight: "pdfjs-editor-resizer-top-right",
        middleRight: "pdfjs-editor-resizer-middle-right",
        bottomRight: "pdfjs-editor-resizer-bottom-right",
        bottomMiddle: "pdfjs-editor-resizer-bottom-middle",
        bottomLeft: "pdfjs-editor-resizer-bottom-left",
        middleLeft: "pdfjs-editor-resizer-middle-left"
      })), _U2._borderLineWidth !== -1) return;
      const i = getComputedStyle(document.documentElement);
      _U2._borderLineWidth = parseFloat(i.getPropertyValue("--outline-width")) || 0;
    }
    static updateDefaultParams(t, e) {
    }
    static get defaultPropertiesToUpdate() {
      return [];
    }
    static isHandlingMimeForPasting(t) {
      return false;
    }
    static paste(t, e) {
      Z("Not implemented");
    }
    get propertiesToUpdate() {
      return [];
    }
    get _isDraggable() {
      return __privateGet(this, _w2);
    }
    set _isDraggable(t) {
      var _a29;
      __privateSet(this, _w2, t), (_a29 = this.div) == null ? void 0 : _a29.classList.toggle("draggable", t);
    }
    get uid() {
      return this.annotationElementId || this.id;
    }
    get isEnterHandled() {
      return true;
    }
    center() {
      const [t, e] = this.pageDimensions;
      switch (this.parentRotation) {
        case 90:
          this.x -= this.height * e / (t * 2), this.y += this.width * t / (e * 2);
          break;
        case 180:
          this.x += this.width / 2, this.y += this.height / 2;
          break;
        case 270:
          this.x += this.height * e / (t * 2), this.y -= this.width * t / (e * 2);
          break;
        default:
          this.x -= this.width / 2, this.y -= this.height / 2;
          break;
      }
      this.fixAndSetPosition();
    }
    addCommands(t) {
      this._uiManager.addCommands(t);
    }
    get currentLayer() {
      return this._uiManager.currentLayer;
    }
    setInBackground() {
      this.div.style.zIndex = 0;
    }
    setInForeground() {
      this.div.style.zIndex = __privateGet(this, _x2);
    }
    setParent(t) {
      var _a29;
      t !== null ? (this.pageIndex = t.pageIndex, this.pageDimensions = t.pageDimensions) : (__privateMethod(this, _U_instances, B_fn).call(this), (_a29 = __privateGet(this, _d5)) == null ? void 0 : _a29.remove(), __privateSet(this, _d5, null)), this.parent = t;
    }
    focusin(t) {
      this._focusEventsAllowed && (__privateGet(this, _g2) ? __privateSet(this, _g2, false) : this.parent.setSelected(this));
    }
    focusout(t) {
      var _a29, _b7;
      !this._focusEventsAllowed || !this.isAttachedToDOM || ((_a29 = t.relatedTarget) == null ? void 0 : _a29.closest(`#${this.id}`)) || (t.preventDefault(), ((_b7 = this.parent) == null ? void 0 : _b7.isMultipleSelection) || this.commitOrRemove());
    }
    commitOrRemove() {
      this.isEmpty() ? this.remove() : this.commit();
    }
    commit() {
      this.isInEditMode() && this.addToAnnotationStorage();
    }
    addToAnnotationStorage() {
      this._uiManager.addToAnnotationStorage(this);
    }
    setAt(t, e, i, s) {
      const [n, r] = this.parentDimensions;
      [i, s] = this.screenToPageTranslation(i, s), this.x = (t + i) / n, this.y = (e + s) / r, this.fixAndSetPosition();
    }
    _moveAfterPaste(t, e) {
      const [i, s] = this.parentDimensions;
      this.setAt(t * i, e * s, this.width * i, this.height * s), this._onTranslated();
    }
    translate(t, e) {
      __privateMethod(this, _U_instances, M_fn).call(this, this.parentDimensions, t, e);
    }
    translateInPage(t, e) {
      __privateGet(this, _c3) || __privateSet(this, _c3, [
        this.x,
        this.y,
        this.width,
        this.height
      ]), __privateMethod(this, _U_instances, M_fn).call(this, this.pageDimensions, t, e), this.div.scrollIntoView({
        block: "nearest"
      });
    }
    translationDone() {
      this._onTranslated(this.x, this.y);
    }
    drag(t, e) {
      __privateGet(this, _c3) || __privateSet(this, _c3, [
        this.x,
        this.y,
        this.width,
        this.height
      ]);
      const { div: i, parentDimensions: [s, n] } = this;
      if (this.x += t / s, this.y += e / n, this.parent && (this.x < 0 || this.x > 1 || this.y < 0 || this.y > 1)) {
        const { x: c, y: f } = this.div.getBoundingClientRect();
        this.parent.findNewParent(this, c, f) && (this.x -= Math.floor(this.x), this.y -= Math.floor(this.y));
      }
      let { x: r, y: a } = this;
      const [o, l] = this.getBaseTranslation();
      r += o, a += l;
      const { style: h } = i;
      h.left = `${(100 * r).toFixed(2)}%`, h.top = `${(100 * a).toFixed(2)}%`, this._onTranslating(r, a), i.scrollIntoView({
        block: "nearest"
      });
    }
    _onTranslating(t, e) {
    }
    _onTranslated(t, e) {
    }
    get _hasBeenMoved() {
      return !!__privateGet(this, _c3) && (__privateGet(this, _c3)[0] !== this.x || __privateGet(this, _c3)[1] !== this.y);
    }
    get _hasBeenResized() {
      return !!__privateGet(this, _c3) && (__privateGet(this, _c3)[2] !== this.width || __privateGet(this, _c3)[3] !== this.height);
    }
    getBaseTranslation() {
      const [t, e] = this.parentDimensions, { _borderLineWidth: i } = _U2, s = i / t, n = i / e;
      switch (this.rotation) {
        case 90:
          return [
            -s,
            n
          ];
        case 180:
          return [
            s,
            n
          ];
        case 270:
          return [
            s,
            -n
          ];
        default:
          return [
            -s,
            -n
          ];
      }
    }
    get _mustFixPosition() {
      return true;
    }
    fixAndSetPosition(t = this.rotation) {
      const { div: { style: e }, pageDimensions: [i, s] } = this;
      let { x: n, y: r, width: a, height: o } = this;
      if (a *= i, o *= s, n *= i, r *= s, this._mustFixPosition) switch (t) {
        case 0:
          n = At(n, 0, i - a), r = At(r, 0, s - o);
          break;
        case 90:
          n = At(n, 0, i - o), r = At(r, a, s);
          break;
        case 180:
          n = At(n, a, i), r = At(r, o, s);
          break;
        case 270:
          n = At(n, o, i), r = At(r, 0, s - a);
          break;
      }
      this.x = n /= i, this.y = r /= s;
      const [l, h] = this.getBaseTranslation();
      n += l, r += h, e.left = `${(100 * n).toFixed(2)}%`, e.top = `${(100 * r).toFixed(2)}%`, this.moveInDOM();
    }
    screenToPageTranslation(t, e) {
      var _a29;
      return __privateMethod(_a29 = _U2, _U_static, P_fn).call(_a29, t, e, this.parentRotation);
    }
    pageTranslationToScreen(t, e) {
      var _a29;
      return __privateMethod(_a29 = _U2, _U_static, P_fn).call(_a29, t, e, 360 - this.parentRotation);
    }
    get parentScale() {
      return this._uiManager.viewParameters.realScale;
    }
    get parentRotation() {
      return (this._uiManager.viewParameters.rotation + this.pageRotation) % 360;
    }
    get parentDimensions() {
      const { parentScale: t, pageDimensions: [e, i] } = this;
      return [
        e * t,
        i * t
      ];
    }
    setDims() {
      const { div: { style: t }, width: e, height: i } = this;
      t.width = `${(100 * e).toFixed(2)}%`, t.height = `${(100 * i).toFixed(2)}%`;
    }
    getInitialTranslation() {
      return [
        0,
        0
      ];
    }
    _onResized() {
    }
    static _round(t) {
      return Math.round(t * 1e4) / 1e4;
    }
    _onResizing() {
    }
    altTextFinish() {
      var _a29;
      (_a29 = __privateGet(this, _s12)) == null ? void 0 : _a29.finish();
    }
    get toolbarButtons() {
      return null;
    }
    async addEditToolbar() {
      if (this._editToolbar || __privateGet(this, _b3)) return this._editToolbar;
      this._editToolbar = new _e(this), this.div.append(this._editToolbar.render());
      const { toolbarButtons: t } = this;
      if (t) for (const [e, i] of t) await this._editToolbar.addButton(e, i);
      return this.hasComment || this._editToolbar.addButton("comment", this.addCommentButton()), this._editToolbar.addButton("delete"), this._editToolbar;
    }
    addCommentButtonInToolbar() {
      var _a29;
      (_a29 = this._editToolbar) == null ? void 0 : _a29.addButtonBefore("comment", this.addCommentButton(), ".deleteButton");
    }
    removeCommentButtonFromToolbar() {
      var _a29;
      (_a29 = this._editToolbar) == null ? void 0 : _a29.removeButton("comment");
    }
    removeEditToolbar() {
      var _a29, _b7;
      (_a29 = this._editToolbar) == null ? void 0 : _a29.remove(), this._editToolbar = null, (_b7 = __privateGet(this, _s12)) == null ? void 0 : _b7.destroy();
    }
    addContainer(t) {
      var _a29;
      const e = (_a29 = this._editToolbar) == null ? void 0 : _a29.div;
      e ? e.before(t) : this.div.append(t);
    }
    getClientDimensions() {
      return this.div.getBoundingClientRect();
    }
    createAltText() {
      return __privateGet(this, _s12) || (Gt.initialize(_U2._l10n), __privateSet(this, _s12, new Gt(this)), __privateGet(this, _t13) && (__privateGet(this, _s12).data = __privateGet(this, _t13), __privateSet(this, _t13, null))), __privateGet(this, _s12);
    }
    get altTextData() {
      var _a29;
      return (_a29 = __privateGet(this, _s12)) == null ? void 0 : _a29.data;
    }
    set altTextData(t) {
      __privateGet(this, _s12) && (__privateGet(this, _s12).data = t);
    }
    get guessedAltText() {
      var _a29;
      return (_a29 = __privateGet(this, _s12)) == null ? void 0 : _a29.guessedText;
    }
    async setGuessedAltText(t) {
      var _a29;
      await ((_a29 = __privateGet(this, _s12)) == null ? void 0 : _a29.setGuessedText(t));
    }
    serializeAltText(t) {
      var _a29;
      return (_a29 = __privateGet(this, _s12)) == null ? void 0 : _a29.serialize(t);
    }
    hasAltText() {
      return !!__privateGet(this, _s12) && !__privateGet(this, _s12).isEmpty();
    }
    hasAltTextData() {
      var _a29;
      return ((_a29 = __privateGet(this, _s12)) == null ? void 0 : _a29.hasData()) ?? false;
    }
    focusCommentButton() {
      var _a29;
      (_a29 = __privateGet(this, _i10)) == null ? void 0 : _a29.focusButton();
    }
    addCommentButton() {
      return this.canAddComment ? __privateGet(this, _i10) || __privateSet(this, _i10, new He(this)) : null;
    }
    addStandaloneCommentButton() {
      if (this._uiManager.hasCommentManager()) {
        if (__privateGet(this, _a8)) {
          this._uiManager.isEditingMode() && __privateGet(this, _a8).classList.remove("hidden");
          return;
        }
        this.hasComment && (__privateSet(this, _a8, __privateGet(this, _i10).renderForStandalone()), this.div.append(__privateGet(this, _a8)));
      }
    }
    removeStandaloneCommentButton() {
      __privateGet(this, _i10).removeStandaloneCommentButton(), __privateSet(this, _a8, null);
    }
    hideStandaloneCommentButton() {
      var _a29;
      (_a29 = __privateGet(this, _a8)) == null ? void 0 : _a29.classList.add("hidden");
    }
    get comment() {
      if (!__privateGet(this, _i10)) return null;
      const { data: { richText: t, text: e, date: i, deleted: s } } = __privateGet(this, _i10);
      return {
        text: e,
        richText: t,
        date: i,
        deleted: s,
        color: this.getNonHCMColor(),
        opacity: this.opacity ?? 1
      };
    }
    set comment(t) {
      __privateGet(this, _i10) || __privateSet(this, _i10, new He(this)), typeof t == "object" && t !== null ? __privateGet(this, _i10).restoreData(t) : __privateGet(this, _i10).data = t, this.hasComment ? (this.removeCommentButtonFromToolbar(), this.addStandaloneCommentButton(), this._uiManager.updateComment(this)) : (this.addCommentButtonInToolbar(), this.removeStandaloneCommentButton(), this._uiManager.removeComment(this));
    }
    setCommentData({ comment: t, popupRef: e, richText: i }) {
      if (!e || (__privateGet(this, _i10) || __privateSet(this, _i10, new He(this)), __privateGet(this, _i10).setInitialText(t, i), !this.annotationElementId)) return;
      const s = this._uiManager.getAndRemoveDataFromAnnotationStorage(this.annotationElementId);
      s && this.updateFromAnnotationLayer(s);
    }
    get hasEditedComment() {
      var _a29;
      return (_a29 = __privateGet(this, _i10)) == null ? void 0 : _a29.hasBeenEdited();
    }
    get hasDeletedComment() {
      var _a29;
      return (_a29 = __privateGet(this, _i10)) == null ? void 0 : _a29.isDeleted();
    }
    get hasComment() {
      return !!__privateGet(this, _i10) && !__privateGet(this, _i10).isEmpty() && !__privateGet(this, _i10).isDeleted();
    }
    async editComment(t) {
      __privateGet(this, _i10) || __privateSet(this, _i10, new He(this)), __privateGet(this, _i10).edit(t);
    }
    toggleComment(t, e = void 0) {
      this.hasComment && this._uiManager.toggleComment(this, t, e);
    }
    setSelectedCommentButton(t) {
      __privateGet(this, _i10).setSelectedButton(t);
    }
    addComment(t) {
      if (this.hasEditedComment) {
        const [, , , s] = t.rect, [n] = this.pageDimensions, [r] = this.pageTranslation, a = r + n + 1, o = s - 100, l = a + 180;
        t.popup = {
          contents: this.comment.text,
          deleted: this.comment.deleted,
          rect: [
            a,
            o,
            l,
            s
          ]
        };
      }
    }
    updateFromAnnotationLayer({ popup: { contents: t, deleted: e } }) {
      __privateGet(this, _i10).data = e ? null : t;
    }
    get parentBoundingClientRect() {
      return this.parent.boundingClientRect;
    }
    render() {
      var _a29;
      const t = this.div = document.createElement("div");
      t.setAttribute("data-editor-rotation", (360 - this.rotation) % 360), t.className = this.name, t.setAttribute("id", this.id), t.tabIndex = __privateGet(this, _r8) ? -1 : 0, t.setAttribute("role", "application"), this.defaultL10nId && t.setAttribute("data-l10n-id", this.defaultL10nId), this._isVisible || t.classList.add("hidden"), this.setInForeground(), __privateMethod(this, _U_instances, $_fn).call(this);
      const [e, i] = this.parentDimensions;
      this.parentRotation % 180 !== 0 && (t.style.maxWidth = `${(100 * i / e).toFixed(2)}%`, t.style.maxHeight = `${(100 * e / i).toFixed(2)}%`);
      const [s, n] = this.getInitialTranslation();
      return this.translate(s, n), zs(this, t, [
        "keydown",
        "pointerdown",
        "dblclick"
      ]), this.isResizable && this._uiManager._supportsPinchToZoom && (__privateGet(this, _T2) || __privateSet(this, _T2, new ni({
        container: t,
        isPinchingDisabled: () => !this.isSelected,
        onPinchStart: __privateMethod(this, _U_instances, z_fn).bind(this),
        onPinching: __privateMethod(this, _U_instances, C_fn).bind(this),
        onPinchEnd: __privateMethod(this, _U_instances, E_fn).bind(this),
        signal: this._uiManager._signal
      }))), this.addStandaloneCommentButton(), (_a29 = this._uiManager._editorUndoBar) == null ? void 0 : _a29.hide(), t;
    }
    pointerdown(t) {
      const { isMac: e } = mt.platform;
      if (t.button !== 0 || t.ctrlKey && e) {
        t.preventDefault();
        return;
      }
      if (__privateSet(this, _g2, true), this._isDraggable) {
        __privateMethod(this, _U_instances, U_fn).call(this, t);
        return;
      }
      __privateMethod(this, _U_instances, L_fn).call(this, t);
    }
    _onStartDragging() {
    }
    _onStopDragging() {
    }
    moveInDOM() {
      __privateGet(this, _y2) && clearTimeout(__privateGet(this, _y2)), __privateSet(this, _y2, setTimeout(() => {
        var _a29;
        __privateSet(this, _y2, null), (_a29 = this.parent) == null ? void 0 : _a29.moveEditorInDOM(this);
      }, 0));
    }
    _setParentAndPosition(t, e, i) {
      t.changeParent(this), this.x = e, this.y = i, this.fixAndSetPosition(), this._onTranslated();
    }
    getRect(t, e, i = this.rotation) {
      const s = this.parentScale, [n, r] = this.pageDimensions, [a, o] = this.pageTranslation, l = t / s, h = e / s, c = this.x * n, f = this.y * r, g = this.width * n, b = this.height * r;
      switch (i) {
        case 0:
          return [
            c + l + a,
            r - f - h - b + o,
            c + l + g + a,
            r - f - h + o
          ];
        case 90:
          return [
            c + h + a,
            r - f + l + o,
            c + h + b + a,
            r - f + l + g + o
          ];
        case 180:
          return [
            c - l - g + a,
            r - f + h + o,
            c - l + a,
            r - f + h + b + o
          ];
        case 270:
          return [
            c - h - b + a,
            r - f - l - g + o,
            c - h + a,
            r - f - l + o
          ];
        default:
          throw new Error("Invalid rotation");
      }
    }
    getRectInCurrentCoords(t, e) {
      const [i, s, n, r] = t, a = n - i, o = r - s;
      switch (this.rotation) {
        case 0:
          return [
            i,
            e - r,
            a,
            o
          ];
        case 90:
          return [
            i,
            e - s,
            o,
            a
          ];
        case 180:
          return [
            n,
            e - s,
            a,
            o
          ];
        case 270:
          return [
            n,
            e - r,
            o,
            a
          ];
        default:
          throw new Error("Invalid rotation");
      }
    }
    getPDFRect() {
      return this.getRect(0, 0);
    }
    getNonHCMColor() {
      return this.color && _U2._colorManager.convert(this._uiManager.getNonHCMColor(this.color));
    }
    onUpdatedColor() {
      var _a29;
      (_a29 = __privateGet(this, _i10)) == null ? void 0 : _a29.onUpdatedColor();
    }
    getData() {
      const { comment: { text: t, color: e, date: i, opacity: s, deleted: n, richText: r }, uid: a, pageIndex: o, creationDate: l, modificationDate: h } = this;
      return {
        id: a,
        pageIndex: o,
        rect: this.getPDFRect(),
        richText: r,
        contentsObj: {
          str: t
        },
        creationDate: l,
        modificationDate: i || h,
        popupRef: !n,
        color: e,
        opacity: s
      };
    }
    onceAdded(t) {
    }
    isEmpty() {
      return false;
    }
    enableEditMode() {
      return this.isInEditMode() ? false : (this.parent.setEditingState(false), __privateSet(this, _b3, true), true);
    }
    disableEditMode() {
      return this.isInEditMode() ? (this.parent.setEditingState(true), __privateSet(this, _b3, false), true) : false;
    }
    isInEditMode() {
      return __privateGet(this, _b3);
    }
    shouldGetKeyboardEvents() {
      return __privateGet(this, _A2);
    }
    needsToBeRebuilt() {
      return this.div && !this.isAttachedToDOM;
    }
    get isOnScreen() {
      const { top: t, left: e, bottom: i, right: s } = this.getClientDimensions(), { innerHeight: n, innerWidth: r } = window;
      return e < r && s > 0 && t < n && i > 0;
    }
    rebuild() {
      __privateMethod(this, _U_instances, $_fn).call(this);
    }
    rotate(t) {
    }
    resize() {
    }
    serializeDeleted() {
      var _a29;
      return {
        id: this.annotationElementId,
        deleted: true,
        pageIndex: this.pageIndex,
        popupRef: ((_a29 = this._initialData) == null ? void 0 : _a29.popupRef) || ""
      };
    }
    serialize(t = false, e = null) {
      var _a29;
      return {
        annotationType: this.mode,
        pageIndex: this.pageIndex,
        rect: this.getPDFRect(),
        rotation: this.rotation,
        structTreeParentId: this._structTreeParentId,
        popupRef: ((_a29 = this._initialData) == null ? void 0 : _a29.popupRef) || ""
      };
    }
    static async deserialize(t, e, i) {
      const s = new this.prototype.constructor({
        parent: e,
        id: e.getNextId(),
        uiManager: i,
        annotationElementId: t.annotationElementId,
        creationDate: t.creationDate,
        modificationDate: t.modificationDate
      });
      s.rotation = t.rotation, __privateSet(s, _t13, t.accessibilityData), s._isCopy = t.isCopy || false;
      const [n, r] = s.pageDimensions, [a, o, l, h] = s.getRectInCurrentCoords(t.rect, r);
      return s.x = a / n, s.y = o / r, s.width = l / n, s.height = h / r, s;
    }
    get hasBeenModified() {
      return !!this.annotationElementId && (this.deleted || this.serialize() !== null);
    }
    remove() {
      var _a29, _b7, _c10;
      if ((_a29 = __privateGet(this, _f3)) == null ? void 0 : _a29.abort(), __privateSet(this, _f3, null), this.isEmpty() || this.commit(), this.parent ? this.parent.remove(this) : this._uiManager.removeEditor(this), this.hideCommentPopup(), __privateGet(this, _y2) && (clearTimeout(__privateGet(this, _y2)), __privateSet(this, _y2, null)), __privateMethod(this, _U_instances, B_fn).call(this), this.removeEditToolbar(), __privateGet(this, _v2)) {
        for (const t of __privateGet(this, _v2).values()) clearTimeout(t);
        __privateSet(this, _v2, null);
      }
      this.parent = null, (_b7 = __privateGet(this, _T2)) == null ? void 0 : _b7.destroy(), __privateSet(this, _T2, null), (_c10 = __privateGet(this, _d5)) == null ? void 0 : _c10.remove(), __privateSet(this, _d5, null);
    }
    get isResizable() {
      return false;
    }
    makeResizable() {
      this.isResizable && (__privateMethod(this, _U_instances, N_fn).call(this), __privateGet(this, _h6).classList.remove("hidden"));
    }
    get toolbarPosition() {
      return null;
    }
    get commentButtonPosition() {
      return this._uiManager.direction === "ltr" ? [
        1,
        0
      ] : [
        0,
        0
      ];
    }
    get commentButtonPositionInPage() {
      const { commentButtonPosition: [t, e] } = this, [i, s, n, r] = this.getPDFRect();
      return [
        _U2._round(i + (n - i) * t),
        _U2._round(s + (r - s) * (1 - e))
      ];
    }
    get commentButtonColor() {
      return this._uiManager.makeCommentColor(this.getNonHCMColor(), this.opacity);
    }
    get commentPopupPosition() {
      return __privateGet(this, _i10).commentPopupPositionInLayer;
    }
    set commentPopupPosition(t) {
      __privateGet(this, _i10).commentPopupPositionInLayer = t;
    }
    hasDefaultPopupPosition() {
      return __privateGet(this, _i10).hasDefaultPopupPosition();
    }
    get commentButtonWidth() {
      return __privateGet(this, _i10).commentButtonWidth;
    }
    get elementBeforePopup() {
      return this.div;
    }
    setCommentButtonStates(t) {
      var _a29;
      (_a29 = __privateGet(this, _i10)) == null ? void 0 : _a29.setCommentButtonStates(t);
    }
    keydown(t) {
      if (!this.isResizable || t.target !== this.div || t.key !== "Enter") return;
      this._uiManager.setSelected(this), __privateSet(this, _u4, {
        savedX: this.x,
        savedY: this.y,
        savedWidth: this.width,
        savedHeight: this.height
      });
      const e = __privateGet(this, _h6).children;
      if (!__privateGet(this, _e13)) {
        __privateSet(this, _e13, Array.from(e));
        const r = __privateMethod(this, _U_instances, X_fn).bind(this), a = __privateMethod(this, _U_instances, W_fn).bind(this), o = this._uiManager._signal;
        for (const l of __privateGet(this, _e13)) {
          const h = l.getAttribute("data-resizer-name");
          l.setAttribute("role", "spinbutton"), l.addEventListener("keydown", r, {
            signal: o
          }), l.addEventListener("blur", a, {
            signal: o
          }), l.addEventListener("focus", __privateMethod(this, _U_instances, Y_fn).bind(this, h), {
            signal: o
          }), l.setAttribute("data-l10n-id", _U2._l10nResizer[h]);
        }
      }
      const i = __privateGet(this, _e13)[0];
      let s = 0;
      for (const r of e) {
        if (r === i) break;
        s++;
      }
      const n = (360 - this.rotation + this.parentRotation) % 360 / 90 * (__privateGet(this, _e13).length / 4);
      if (n !== s) {
        if (n < s) for (let a = 0; a < s - n; a++) __privateGet(this, _h6).append(__privateGet(this, _h6).firstElementChild);
        else if (n > s) for (let a = 0; a < n - s; a++) __privateGet(this, _h6).firstElementChild.before(__privateGet(this, _h6).lastElementChild);
        let r = 0;
        for (const a of e) {
          const l = __privateGet(this, _e13)[r++].getAttribute("data-resizer-name");
          a.setAttribute("data-l10n-id", _U2._l10nResizer[l]);
        }
      }
      __privateMethod(this, _U_instances, j_fn).call(this, 0), __privateSet(this, _A2, true), __privateGet(this, _h6).firstElementChild.focus({
        focusVisible: true
      }), t.preventDefault(), t.stopImmediatePropagation();
    }
    _resizeWithKeyboard(t, e) {
      __privateGet(this, _A2) && __privateMethod(this, _U_instances, F_fn).call(this, __privateGet(this, _m2), {
        deltaX: t,
        deltaY: e,
        fromKeyboard: true
      });
    }
    _stopResizingWithKeyboard() {
      __privateMethod(this, _U_instances, B_fn).call(this), this.div.focus();
    }
    select() {
      var _a29, _b7, _c10;
      if (this.isSelected && this._editToolbar) {
        this._editToolbar.show();
        return;
      }
      if (this.isSelected = true, this.makeResizable(), (_a29 = this.div) == null ? void 0 : _a29.classList.add("selectedEditor"), !this._editToolbar) {
        this.addEditToolbar().then(() => {
          var _a30, _b8;
          ((_a30 = this.div) == null ? void 0 : _a30.classList.contains("selectedEditor")) && ((_b8 = this._editToolbar) == null ? void 0 : _b8.show());
        });
        return;
      }
      (_b7 = this._editToolbar) == null ? void 0 : _b7.show(), (_c10 = __privateGet(this, _s12)) == null ? void 0 : _c10.toggleAltTextBadge(false);
    }
    focus() {
      this.div && !this.div.contains(document.activeElement) && setTimeout(() => {
        var _a29;
        return (_a29 = this.div) == null ? void 0 : _a29.focus({
          preventScroll: true
        });
      }, 0);
    }
    unselect() {
      var _a29, _b7, _c10, _d12, _e54;
      this.isSelected && (this.isSelected = false, (_a29 = __privateGet(this, _h6)) == null ? void 0 : _a29.classList.add("hidden"), (_b7 = this.div) == null ? void 0 : _b7.classList.remove("selectedEditor"), ((_c10 = this.div) == null ? void 0 : _c10.contains(document.activeElement)) && this._uiManager.currentLayer.div.focus({
        preventScroll: true
      }), (_d12 = this._editToolbar) == null ? void 0 : _d12.hide(), (_e54 = __privateGet(this, _s12)) == null ? void 0 : _e54.toggleAltTextBadge(true), this.hideCommentPopup());
    }
    hideCommentPopup() {
      this.hasComment && this._uiManager.toggleComment(null);
    }
    updateParams(t, e) {
    }
    disableEditing() {
    }
    enableEditing() {
    }
    get canChangeContent() {
      return false;
    }
    enterInEditMode() {
      this.canChangeContent && (this.enableEditMode(), this.div.focus());
    }
    dblclick(t) {
      t.target.nodeName !== "BUTTON" && (this.enterInEditMode(), this.parent.updateToolbar({
        mode: this.constructor._editorType,
        editId: this.uid
      }));
    }
    getElementForAltText() {
      return this.div;
    }
    get contentDiv() {
      return this.div;
    }
    get isEditing() {
      return __privateGet(this, _p2);
    }
    set isEditing(t) {
      __privateSet(this, _p2, t), this.parent && (t ? (this.parent.setSelected(this), this.parent.setActiveEditor(this)) : this.parent.setActiveEditor(null));
    }
    static get MIN_SIZE() {
      return 16;
    }
    static canCreateNewEmptyEditor() {
      return true;
    }
    get telemetryInitialData() {
      return {
        action: "added"
      };
    }
    get telemetryFinalData() {
      return null;
    }
    _reportTelemetry(t, e = false) {
      if (e) {
        __privateGet(this, _v2) || __privateSet(this, _v2, /* @__PURE__ */ new Map());
        const { action: i } = t;
        let s = __privateGet(this, _v2).get(i);
        s && clearTimeout(s), s = setTimeout(() => {
          this._reportTelemetry(t), __privateGet(this, _v2).delete(i), __privateGet(this, _v2).size === 0 && __privateSet(this, _v2, null);
        }, _U2._telemetryTimeout), __privateGet(this, _v2).set(i, s);
        return;
      }
      t.type || (t.type = this.editorType), this._uiManager._eventBus.dispatch("reporttelemetry", {
        source: this,
        details: {
          type: "editing",
          data: t
        }
      });
    }
    show(t = this._isVisible) {
      this.div.classList.toggle("hidden", !t), this._isVisible = t;
    }
    enable() {
      this.div && (this.div.tabIndex = 0), __privateSet(this, _r8, false);
    }
    disable() {
      this.div && (this.div.tabIndex = -1), __privateSet(this, _r8, true);
    }
    updateFakeAnnotationElement(t) {
      if (!__privateGet(this, _d5) && !this.deleted) {
        __privateSet(this, _d5, t.addFakeAnnotation(this));
        return;
      }
      if (this.deleted) {
        __privateGet(this, _d5).remove(), __privateSet(this, _d5, null);
        return;
      }
      (this.hasEditedComment || this._hasBeenMoved || this._hasBeenResized) && __privateGet(this, _d5).updateEdited({
        rect: this.getPDFRect(),
        popup: this.comment
      });
    }
    renderAnnotationElement(t) {
      if (this.deleted) return t.hide(), null;
      let e = t.container.querySelector(".annotationContent");
      if (!e) e = document.createElement("div"), e.classList.add("annotationContent", this.editorType), t.container.prepend(e);
      else if (e.nodeName === "CANVAS") {
        const i = e;
        e = document.createElement("div"), e.classList.add("annotationContent", this.editorType), i.before(e);
      }
      return e;
    }
    resetAnnotationElement(t) {
      const { firstElementChild: e } = t.container;
      (e == null ? void 0 : e.nodeName) === "DIV" && e.classList.contains("annotationContent") && e.remove();
    }
  };
  _t13 = new WeakMap();
  _e13 = new WeakMap();
  _s12 = new WeakMap();
  _i10 = new WeakMap();
  _a8 = new WeakMap();
  _r8 = new WeakMap();
  _n8 = new WeakMap();
  _o6 = new WeakMap();
  _h6 = new WeakMap();
  _l5 = new WeakMap();
  _u4 = new WeakMap();
  _d5 = new WeakMap();
  _f3 = new WeakMap();
  _m2 = new WeakMap();
  _g2 = new WeakMap();
  _c3 = new WeakMap();
  _p2 = new WeakMap();
  _b3 = new WeakMap();
  _A2 = new WeakMap();
  _y2 = new WeakMap();
  __2 = new WeakMap();
  _S2 = new WeakMap();
  _v2 = new WeakMap();
  _T2 = new WeakMap();
  _w2 = new WeakMap();
  _x2 = new WeakMap();
  _U_instances = new WeakSet();
  M_fn = function([t, e], i, s) {
    [i, s] = this.screenToPageTranslation(i, s), this.x += i / t, this.y += s / e, this._onTranslating(this.x, this.y), this.fixAndSetPosition();
  };
  _U_static = new WeakSet();
  P_fn = function(t, e, i) {
    switch (i) {
      case 90:
        return [
          e,
          -t
        ];
      case 180:
        return [
          -t,
          -e
        ];
      case 270:
        return [
          -e,
          t
        ];
      default:
        return [
          t,
          e
        ];
    }
  };
  k_fn = function(t) {
    switch (t) {
      case 90: {
        const [e, i] = this.pageDimensions;
        return [
          0,
          -e / i,
          i / e,
          0
        ];
      }
      case 180:
        return [
          -1,
          0,
          0,
          -1
        ];
      case 270: {
        const [e, i] = this.pageDimensions;
        return [
          0,
          e / i,
          -i / e,
          0
        ];
      }
      default:
        return [
          1,
          0,
          0,
          1
        ];
    }
  };
  N_fn = function() {
    if (__privateGet(this, _h6)) return;
    __privateSet(this, _h6, document.createElement("div")), __privateGet(this, _h6).classList.add("resizers");
    const t = this._willKeepAspectRatio ? [
      "topLeft",
      "topRight",
      "bottomRight",
      "bottomLeft"
    ] : [
      "topLeft",
      "topMiddle",
      "topRight",
      "middleRight",
      "bottomRight",
      "bottomMiddle",
      "bottomLeft",
      "middleLeft"
    ], e = this._uiManager._signal;
    for (const i of t) {
      const s = document.createElement("div");
      __privateGet(this, _h6).append(s), s.classList.add("resizer", i), s.setAttribute("data-resizer-name", i), s.addEventListener("pointerdown", __privateMethod(this, _U_instances, D_fn).bind(this, i), {
        signal: e
      }), s.addEventListener("contextmenu", Ft, {
        signal: e
      }), s.tabIndex = -1;
    }
    this.div.prepend(__privateGet(this, _h6));
  };
  D_fn = function(t, e) {
    var _a29;
    e.preventDefault();
    const { isMac: i } = mt.platform;
    if (e.button !== 0 || e.ctrlKey && i) return;
    (_a29 = __privateGet(this, _s12)) == null ? void 0 : _a29.toggle(false);
    const s = this._isDraggable;
    this._isDraggable = false, __privateSet(this, _l5, [
      e.screenX,
      e.screenY
    ]);
    const n = new AbortController(), r = this._uiManager.combinedSignal(n);
    this.parent.togglePointerEvents(false), window.addEventListener("pointermove", __privateMethod(this, _U_instances, F_fn).bind(this, t), {
      passive: true,
      capture: true,
      signal: r
    }), window.addEventListener("touchmove", dt, {
      passive: false,
      signal: r
    }), window.addEventListener("contextmenu", Ft, {
      signal: r
    }), __privateSet(this, _u4, {
      savedX: this.x,
      savedY: this.y,
      savedWidth: this.width,
      savedHeight: this.height
    });
    const a = this.parent.div.style.cursor, o = this.div.style.cursor;
    this.div.style.cursor = this.parent.div.style.cursor = window.getComputedStyle(e.target).cursor;
    const l = () => {
      var _a30;
      n.abort(), this.parent.togglePointerEvents(true), (_a30 = __privateGet(this, _s12)) == null ? void 0 : _a30.toggle(true), this._isDraggable = s, this.parent.div.style.cursor = a, this.div.style.cursor = o, __privateMethod(this, _U_instances, O_fn).call(this);
    };
    window.addEventListener("pointerup", l, {
      signal: r
    }), window.addEventListener("blur", l, {
      signal: r
    });
  };
  R_fn = function(t, e, i, s) {
    this.width = i, this.height = s, this.x = t, this.y = e, this.setDims(), this.fixAndSetPosition(), this._onResized();
  };
  O_fn = function() {
    if (!__privateGet(this, _u4)) return;
    const { savedX: t, savedY: e, savedWidth: i, savedHeight: s } = __privateGet(this, _u4);
    __privateSet(this, _u4, null);
    const n = this.x, r = this.y, a = this.width, o = this.height;
    n === t && r === e && a === i && o === s || this.addCommands({
      cmd: __privateMethod(this, _U_instances, R_fn).bind(this, n, r, a, o),
      undo: __privateMethod(this, _U_instances, R_fn).bind(this, t, e, i, s),
      mustExec: true
    });
  };
  F_fn = function(t, e) {
    const [i, s] = this.parentDimensions, n = this.x, r = this.y, a = this.width, o = this.height, l = _U2.MIN_SIZE / i, h = _U2.MIN_SIZE / s, c = __privateMethod(this, _U_instances, k_fn).call(this, this.rotation), f = (N, O) => [
      c[0] * N + c[2] * O,
      c[1] * N + c[3] * O
    ], g = __privateMethod(this, _U_instances, k_fn).call(this, 360 - this.rotation), b = (N, O) => [
      g[0] * N + g[2] * O,
      g[1] * N + g[3] * O
    ];
    let m, w, A = false, S = false;
    switch (t) {
      case "topLeft":
        A = true, m = (N, O) => [
          0,
          0
        ], w = (N, O) => [
          N,
          O
        ];
        break;
      case "topMiddle":
        m = (N, O) => [
          N / 2,
          0
        ], w = (N, O) => [
          N / 2,
          O
        ];
        break;
      case "topRight":
        A = true, m = (N, O) => [
          N,
          0
        ], w = (N, O) => [
          0,
          O
        ];
        break;
      case "middleRight":
        S = true, m = (N, O) => [
          N,
          O / 2
        ], w = (N, O) => [
          0,
          O / 2
        ];
        break;
      case "bottomRight":
        A = true, m = (N, O) => [
          N,
          O
        ], w = (N, O) => [
          0,
          0
        ];
        break;
      case "bottomMiddle":
        m = (N, O) => [
          N / 2,
          O
        ], w = (N, O) => [
          N / 2,
          0
        ];
        break;
      case "bottomLeft":
        A = true, m = (N, O) => [
          0,
          O
        ], w = (N, O) => [
          N,
          0
        ];
        break;
      case "middleLeft":
        S = true, m = (N, O) => [
          0,
          O / 2
        ], w = (N, O) => [
          N,
          O / 2
        ];
        break;
    }
    const E = m(a, o), C = w(a, o);
    let x = f(...C);
    const T = _U2._round(n + x[0]), k = _U2._round(r + x[1]);
    let I = 1, D = 1, B, L;
    if (e.fromKeyboard) ({ deltaX: B, deltaY: L } = e);
    else {
      const { screenX: N, screenY: O } = e, [q, St] = __privateGet(this, _l5);
      [B, L] = this.screenToPageTranslation(N - q, O - St), __privateGet(this, _l5)[0] = N, __privateGet(this, _l5)[1] = O;
    }
    if ([B, L] = b(B / i, L / s), A) {
      const N = Math.hypot(a, o);
      I = D = Math.max(Math.min(Math.hypot(C[0] - E[0] - B, C[1] - E[1] - L) / N, 1 / a, 1 / o), l / a, h / o);
    } else S ? I = At(Math.abs(C[0] - E[0] - B), l, 1) / a : D = At(Math.abs(C[1] - E[1] - L), h, 1) / o;
    const Y = _U2._round(a * I), tt = _U2._round(o * D);
    x = f(...w(Y, tt));
    const V = T - x[0], rt = k - x[1];
    __privateGet(this, _c3) || __privateSet(this, _c3, [
      this.x,
      this.y,
      this.width,
      this.height
    ]), this.width = Y, this.height = tt, this.x = V, this.y = rt, this.setDims(), this.fixAndSetPosition(), this._onResizing();
  };
  z_fn = function() {
    var _a29;
    __privateSet(this, _u4, {
      savedX: this.x,
      savedY: this.y,
      savedWidth: this.width,
      savedHeight: this.height
    }), (_a29 = __privateGet(this, _s12)) == null ? void 0 : _a29.toggle(false), this.parent.togglePointerEvents(false);
  };
  C_fn = function(t, e, i) {
    let n = 0.7 * (i / e) + 1 - 0.7;
    if (n === 1) return;
    const r = __privateMethod(this, _U_instances, k_fn).call(this, this.rotation), a = (T, k) => [
      r[0] * T + r[2] * k,
      r[1] * T + r[3] * k
    ], [o, l] = this.parentDimensions, h = this.x, c = this.y, f = this.width, g = this.height, b = _U2.MIN_SIZE / o, m = _U2.MIN_SIZE / l;
    n = Math.max(Math.min(n, 1 / f, 1 / g), b / f, m / g);
    const w = _U2._round(f * n), A = _U2._round(g * n);
    if (w === f && A === g) return;
    __privateGet(this, _c3) || __privateSet(this, _c3, [
      h,
      c,
      f,
      g
    ]);
    const S = a(f / 2, g / 2), E = _U2._round(h + S[0]), C = _U2._round(c + S[1]), x = a(w / 2, A / 2);
    this.x = E - x[0], this.y = C - x[1], this.width = w, this.height = A, this.setDims(), this.fixAndSetPosition(), this._onResizing();
  };
  E_fn = function() {
    var _a29;
    (_a29 = __privateGet(this, _s12)) == null ? void 0 : _a29.toggle(true), this.parent.togglePointerEvents(true), __privateMethod(this, _U_instances, O_fn).call(this);
  };
  L_fn = function(t) {
    const { isMac: e } = mt.platform;
    t.ctrlKey && !e || t.shiftKey || t.metaKey && e ? this.parent.toggleSelected(this) : this.parent.setSelected(this);
  };
  U_fn = function(t) {
    const { isSelected: e } = this;
    this._uiManager.setUpDragSession();
    let i = false;
    const s = new AbortController(), n = this._uiManager.combinedSignal(s), r = {
      capture: true,
      passive: false,
      signal: n
    }, a = (l) => {
      s.abort(), __privateSet(this, _n8, null), __privateSet(this, _g2, false), this._uiManager.endDragSession() || __privateMethod(this, _U_instances, L_fn).call(this, l), i && this._onStopDragging();
    };
    e && (__privateSet(this, __2, t.clientX), __privateSet(this, _S2, t.clientY), __privateSet(this, _n8, t.pointerId), __privateSet(this, _o6, t.pointerType), window.addEventListener("pointermove", (l) => {
      i || (i = true, this._uiManager.toggleComment(this, true, false), this._onStartDragging());
      const { clientX: h, clientY: c, pointerId: f } = l;
      if (f !== __privateGet(this, _n8)) {
        dt(l);
        return;
      }
      const [g, b] = this.screenToPageTranslation(h - __privateGet(this, __2), c - __privateGet(this, _S2));
      __privateSet(this, __2, h), __privateSet(this, _S2, c), this._uiManager.dragSelectedEditors(g, b);
    }, r), window.addEventListener("touchmove", dt, r), window.addEventListener("pointerdown", (l) => {
      l.pointerType === __privateGet(this, _o6) && (__privateGet(this, _T2) || l.isPrimary) && a(l), dt(l);
    }, r));
    const o = (l) => {
      if (!__privateGet(this, _n8) || __privateGet(this, _n8) === l.pointerId) {
        a(l);
        return;
      }
      dt(l);
    };
    window.addEventListener("pointerup", o, {
      signal: n
    }), window.addEventListener("blur", o, {
      signal: n
    });
  };
  $_fn = function() {
    if (__privateGet(this, _f3) || !this.div) return;
    __privateSet(this, _f3, new AbortController());
    const t = this._uiManager.combinedSignal(__privateGet(this, _f3));
    this.div.addEventListener("focusin", this.focusin.bind(this), {
      signal: t
    }), this.div.addEventListener("focusout", this.focusout.bind(this), {
      signal: t
    });
  };
  X_fn = function(t) {
    _U2._resizerKeyboardManager.exec(this, t);
  };
  W_fn = function(t) {
    var _a29;
    __privateGet(this, _A2) && ((_a29 = t.relatedTarget) == null ? void 0 : _a29.parentNode) !== __privateGet(this, _h6) && __privateMethod(this, _U_instances, B_fn).call(this);
  };
  Y_fn = function(t) {
    __privateSet(this, _m2, __privateGet(this, _A2) ? t : "");
  };
  j_fn = function(t) {
    if (__privateGet(this, _e13)) for (const e of __privateGet(this, _e13)) e.tabIndex = t;
  };
  B_fn = function() {
    __privateSet(this, _A2, false), __privateMethod(this, _U_instances, j_fn).call(this, -1), __privateMethod(this, _U_instances, O_fn).call(this);
  };
  __privateAdd(_U2, _U_static);
  __publicField(_U2, "_l10n", null);
  __publicField(_U2, "_l10nResizer", null);
  __publicField(_U2, "_borderLineWidth", -1);
  __publicField(_U2, "_colorManager", new Vi());
  __publicField(_U2, "_zIndex", 1);
  __publicField(_U2, "_telemetryTimeout", 1e3);
  let U = _U2;
  class Yn extends U {
    constructor(t) {
      super(t), this.annotationElementId = t.annotationElementId, this.deleted = true;
    }
    serialize() {
      return this.serializeDeleted();
    }
  }
  const gs = 3285377520, Dt = 4294901760, $t = 65535;
  class Vs {
    constructor(t) {
      this.h1 = t ? t & 4294967295 : gs, this.h2 = t ? t & 4294967295 : gs;
    }
    update(t) {
      let e, i;
      if (typeof t == "string") {
        e = new Uint8Array(t.length * 2), i = 0;
        for (let m = 0, w = t.length; m < w; m++) {
          const A = t.charCodeAt(m);
          A <= 255 ? e[i++] = A : (e[i++] = A >>> 8, e[i++] = A & 255);
        }
      } else if (ArrayBuffer.isView(t)) e = t.slice(), i = e.byteLength;
      else throw new Error("Invalid data format, must be a string or TypedArray.");
      const s = i >> 2, n = i - s * 4, r = new Uint32Array(e.buffer, 0, s);
      let a = 0, o = 0, l = this.h1, h = this.h2;
      const c = 3432918353, f = 461845907, g = c & $t, b = f & $t;
      for (let m = 0; m < s; m++) m & 1 ? (a = r[m], a = a * c & Dt | a * g & $t, a = a << 15 | a >>> 17, a = a * f & Dt | a * b & $t, l ^= a, l = l << 13 | l >>> 19, l = l * 5 + 3864292196) : (o = r[m], o = o * c & Dt | o * g & $t, o = o << 15 | o >>> 17, o = o * f & Dt | o * b & $t, h ^= o, h = h << 13 | h >>> 19, h = h * 5 + 3864292196);
      switch (a = 0, n) {
        case 3:
          a ^= e[s * 4 + 2] << 16;
        case 2:
          a ^= e[s * 4 + 1] << 8;
        case 1:
          a ^= e[s * 4], a = a * c & Dt | a * g & $t, a = a << 15 | a >>> 17, a = a * f & Dt | a * b & $t, s & 1 ? l ^= a : h ^= a;
      }
      this.h1 = l, this.h2 = h;
    }
    hexdigest() {
      let t = this.h1, e = this.h2;
      return t ^= e >>> 1, t = t * 3981806797 & Dt | t * 36045 & $t, e = e * 4283543511 & Dt | ((e << 16 | t >>> 16) * 2950163797 & Dt) >>> 16, t ^= e >>> 1, t = t * 444984403 & Dt | t * 60499 & $t, e = e * 3301882366 & Dt | ((e << 16 | t >>> 16) * 3120437893 & Dt) >>> 16, t ^= e >>> 1, (t >>> 0).toString(16).padStart(8, "0") + (e >>> 0).toString(16).padStart(8, "0");
    }
  }
  const Me = Object.freeze({
    map: null,
    hash: "",
    transfer: void 0
  });
  class Wi {
    constructor() {
      __privateAdd(this, _Wi_instances);
      __privateAdd(this, _t14, false);
      __privateAdd(this, _e14, null);
      __privateAdd(this, _s13, null);
      __privateAdd(this, _i11, /* @__PURE__ */ new Map());
      __publicField(this, "onSetModified", null);
      __publicField(this, "onResetModified", null);
      __publicField(this, "onAnnotationEditor", null);
    }
    getValue(t, e) {
      const i = __privateGet(this, _i11).get(t);
      return i === void 0 ? e : Object.assign(e, i);
    }
    getRawValue(t) {
      return __privateGet(this, _i11).get(t);
    }
    remove(t) {
      const e = __privateGet(this, _i11).get(t);
      if (e !== void 0 && (e instanceof U && __privateGet(this, _s13).delete(e.annotationElementId), __privateGet(this, _i11).delete(t), __privateGet(this, _i11).size === 0 && this.resetModified(), typeof this.onAnnotationEditor == "function")) {
        for (const i of __privateGet(this, _i11).values()) if (i instanceof U) return;
        this.onAnnotationEditor(null);
      }
    }
    setValue(t, e) {
      const i = __privateGet(this, _i11).get(t);
      let s = false;
      if (i !== void 0) for (const [n, r] of Object.entries(e)) i[n] !== r && (s = true, i[n] = r);
      else s = true, __privateGet(this, _i11).set(t, e);
      s && __privateMethod(this, _Wi_instances, a_fn2).call(this), e instanceof U && ((__privateGet(this, _s13) || __privateSet(this, _s13, /* @__PURE__ */ new Map())).set(e.annotationElementId, e), typeof this.onAnnotationEditor == "function" && this.onAnnotationEditor(e.constructor._type));
    }
    has(t) {
      return __privateGet(this, _i11).has(t);
    }
    get size() {
      return __privateGet(this, _i11).size;
    }
    resetModified() {
      __privateGet(this, _t14) && (__privateSet(this, _t14, false), typeof this.onResetModified == "function" && this.onResetModified());
    }
    get print() {
      return new Ws(this);
    }
    get serializable() {
      if (__privateGet(this, _i11).size === 0) return Me;
      const t = /* @__PURE__ */ new Map(), e = new Vs(), i = [], s = /* @__PURE__ */ Object.create(null);
      let n = false;
      for (const [r, a] of __privateGet(this, _i11)) {
        const o = a instanceof U ? a.serialize(false, s) : a;
        a.page && (a.pageIndex = a.page._pageIndex, delete a.page), o && (t.set(r, o), e.update(`${r}:${JSON.stringify(o)}`), n || (n = !!o.bitmap));
      }
      if (n) for (const r of t.values()) r.bitmap && i.push(r.bitmap);
      return t.size > 0 ? {
        map: t,
        hash: e.hexdigest(),
        transfer: i
      } : Me;
    }
    get editorStats() {
      let t = null;
      const e = /* @__PURE__ */ new Map();
      let i = 0, s = 0;
      for (const n of __privateGet(this, _i11).values()) {
        if (!(n instanceof U)) {
          n.popup && (n.popup.deleted ? s += 1 : i += 1);
          continue;
        }
        n.isCommentDeleted ? s += 1 : n.hasEditedComment && (i += 1);
        const r = n.telemetryFinalData;
        if (!r) continue;
        const { type: a } = r;
        e.has(a) || e.set(a, Object.getPrototypeOf(n).constructor), t || (t = /* @__PURE__ */ Object.create(null));
        const o = t[a] || (t[a] = /* @__PURE__ */ new Map());
        for (const [l, h] of Object.entries(r)) {
          if (l === "type") continue;
          const c = o.getOrInsertComputed(l, $i);
          c.set(h, (c.get(h) ?? 0) + 1);
        }
      }
      if ((s > 0 || i > 0) && (t || (t = /* @__PURE__ */ Object.create(null)), t.comments = {
        deleted: s,
        edited: i
      }), !t) return null;
      for (const [n, r] of e) t[n] = r.computeTelemetryFinalData(t[n]);
      return t;
    }
    resetModifiedIds() {
      __privateSet(this, _e14, null);
    }
    updateEditor(t, e) {
      var _a29;
      const i = (_a29 = __privateGet(this, _s13)) == null ? void 0 : _a29.get(t);
      return i ? (i.updateFromAnnotationLayer(e), true) : false;
    }
    getEditor(t) {
      var _a29;
      return ((_a29 = __privateGet(this, _s13)) == null ? void 0 : _a29.get(t)) || null;
    }
    get modifiedIds() {
      if (__privateGet(this, _e14)) return __privateGet(this, _e14);
      const t = [];
      if (__privateGet(this, _s13)) for (const e of __privateGet(this, _s13).values()) e.serialize() && t.push(e.annotationElementId);
      return __privateSet(this, _e14, {
        ids: new Set(t),
        hash: t.join(",")
      });
    }
    [Symbol.iterator]() {
      return __privateGet(this, _i11).entries();
    }
  }
  _t14 = new WeakMap();
  _e14 = new WeakMap();
  _s13 = new WeakMap();
  _i11 = new WeakMap();
  _Wi_instances = new WeakSet();
  a_fn2 = function() {
    __privateGet(this, _t14) || (__privateSet(this, _t14, true), typeof this.onSetModified == "function" && this.onSetModified());
  };
  class Ws extends Wi {
    constructor(t) {
      super();
      __privateAdd(this, _t15, Me);
      const { serializable: e } = t;
      if (e === Me) return;
      const { map: i, hash: s, transfer: n } = e, r = structuredClone(i, n ? {
        transfer: n
      } : null);
      __privateSet(this, _t15, {
        map: r,
        hash: s,
        transfer: []
      });
    }
    get print() {
      Z("Should not call PrintAnnotationStorage.print");
    }
    get serializable() {
      return __privateGet(this, _t15);
    }
    get modifiedIds() {
      return H(this, "modifiedIds", {
        ids: /* @__PURE__ */ new Set(),
        hash: ""
      });
    }
  }
  _t15 = new WeakMap();
  class qn {
    constructor({ ownerDocument: t = globalThis.document, styleElement: e = null }) {
      __privateAdd(this, _t16, /* @__PURE__ */ new Set());
      this._document = t, this.nativeFontFaces = /* @__PURE__ */ new Set(), this.styleElement = null, this.loadingRequests = [], this.loadTestFontId = 0;
    }
    addNativeFontFace(t) {
      this.nativeFontFaces.add(t), this._document.fonts.add(t);
    }
    removeNativeFontFace(t) {
      this.nativeFontFaces.delete(t), this._document.fonts.delete(t);
    }
    insertRule(t) {
      this.styleElement || (this.styleElement = this._document.createElement("style"), this._document.documentElement.getElementsByTagName("head")[0].append(this.styleElement));
      const e = this.styleElement.sheet;
      e.insertRule(t, e.cssRules.length);
    }
    clear() {
      for (const t of this.nativeFontFaces) this._document.fonts.delete(t);
      this.nativeFontFaces.clear(), __privateGet(this, _t16).clear(), this.styleElement && (this.styleElement.remove(), this.styleElement = null);
    }
    async loadSystemFont({ systemFontInfo: t, disableFontFace: e, _inspectFont: i }) {
      if (!(!t || __privateGet(this, _t16).has(t.loadedName))) {
        if (K(!e, "loadSystemFont shouldn't be called when `disableFontFace` is set."), this.isFontLoadingAPISupported) {
          const { loadedName: s, src: n, style: r } = t, a = new FontFace(s, n, r);
          this.addNativeFontFace(a);
          try {
            await a.load(), __privateGet(this, _t16).add(s), i == null ? void 0 : i(t);
          } catch {
            j(`Cannot load system font: ${t.baseFontName}, installing it could help to improve PDF rendering.`), this.removeNativeFontFace(a);
          }
          return;
        }
        Z("Not implemented: loadSystemFont without the Font Loading API.");
      }
    }
    async bind(t) {
      if (t.attached || t.missingFile && !t.systemFontInfo) return;
      if (t.attached = true, t.systemFontInfo) {
        await this.loadSystemFont(t);
        return;
      }
      if (this.isFontLoadingAPISupported) {
        const i = t.createNativeFontFace();
        if (i) {
          this.addNativeFontFace(i);
          try {
            await i.loaded;
          } catch (s) {
            throw j(`Failed to load font '${i.family}': '${s}'.`), t.disableFontFace = true, s;
          }
        }
        return;
      }
      const e = t.createFontFaceRule();
      if (e) {
        if (this.insertRule(e), this.isSyncFontLoadingSupported) return;
        await new Promise((i) => {
          const s = this._queueLoadingCallback(i);
          this._prepareFontLoadEvent(t, s);
        });
      }
    }
    get isFontLoadingAPISupported() {
      var _a29;
      const t = !!((_a29 = this._document) == null ? void 0 : _a29.fonts);
      return H(this, "isFontLoadingAPISupported", t);
    }
    get isSyncFontLoadingSupported() {
      return H(this, "isSyncFontLoadingSupported", xt || mt.platform.isFirefox);
    }
    _queueLoadingCallback(t) {
      function e() {
        for (K(!s.done, "completeRequest() cannot be called twice."), s.done = true; i.length > 0 && i[0].done; ) {
          const n = i.shift();
          setTimeout(n.callback, 0);
        }
      }
      const { loadingRequests: i } = this, s = {
        done: false,
        complete: e,
        callback: t
      };
      return i.push(s), s;
    }
    get _loadTestFont() {
      const t = atob("T1RUTwALAIAAAwAwQ0ZGIDHtZg4AAAOYAAAAgUZGVE1lkzZwAAAEHAAAABxHREVGABQAFQAABDgAAAAeT1MvMlYNYwkAAAEgAAAAYGNtYXABDQLUAAACNAAAAUJoZWFk/xVFDQAAALwAAAA2aGhlYQdkA+oAAAD0AAAAJGhtdHgD6AAAAAAEWAAAAAZtYXhwAAJQAAAAARgAAAAGbmFtZVjmdH4AAAGAAAAAsXBvc3T/hgAzAAADeAAAACAAAQAAAAEAALZRFsRfDzz1AAsD6AAAAADOBOTLAAAAAM4KHDwAAAAAA+gDIQAAAAgAAgAAAAAAAAABAAADIQAAAFoD6AAAAAAD6AABAAAAAAAAAAAAAAAAAAAAAQAAUAAAAgAAAAQD6AH0AAUAAAKKArwAAACMAooCvAAAAeAAMQECAAACAAYJAAAAAAAAAAAAAQAAAAAAAAAAAAAAAFBmRWQAwAAuAC4DIP84AFoDIQAAAAAAAQAAAAAAAAAAACAAIAABAAAADgCuAAEAAAAAAAAAAQAAAAEAAAAAAAEAAQAAAAEAAAAAAAIAAQAAAAEAAAAAAAMAAQAAAAEAAAAAAAQAAQAAAAEAAAAAAAUAAQAAAAEAAAAAAAYAAQAAAAMAAQQJAAAAAgABAAMAAQQJAAEAAgABAAMAAQQJAAIAAgABAAMAAQQJAAMAAgABAAMAAQQJAAQAAgABAAMAAQQJAAUAAgABAAMAAQQJAAYAAgABWABYAAAAAAAAAwAAAAMAAAAcAAEAAAAAADwAAwABAAAAHAAEACAAAAAEAAQAAQAAAC7//wAAAC7////TAAEAAAAAAAABBgAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMAAAAAAAD/gwAyAAAAAQAAAAAAAAAAAAAAAAAAAAABAAQEAAEBAQJYAAEBASH4DwD4GwHEAvgcA/gXBIwMAYuL+nz5tQXkD5j3CBLnEQACAQEBIVhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYAAABAQAADwACAQEEE/t3Dov6fAH6fAT+fPp8+nwHDosMCvm1Cvm1DAz6fBQAAAAAAAABAAAAAMmJbzEAAAAAzgTjFQAAAADOBOQpAAEAAAAAAAAADAAUAAQAAAABAAAAAgABAAAAAAAAAAAD6AAAAAAAAA==");
      return H(this, "_loadTestFont", t);
    }
    _prepareFontLoadEvent(t, e) {
      function i(C, x) {
        return C.charCodeAt(x) << 24 | C.charCodeAt(x + 1) << 16 | C.charCodeAt(x + 2) << 8 | C.charCodeAt(x + 3) & 255;
      }
      function s(C, x, T, k) {
        const I = C.substring(0, x), D = C.substring(x + T);
        return I + k + D;
      }
      let n, r;
      const a = this._document.createElement("canvas");
      a.width = 1, a.height = 1;
      const o = a.getContext("2d");
      let l = 0;
      function h(C, x) {
        if (++l > 30) {
          j("Load test font never loaded."), x();
          return;
        }
        if (o.font = "30px " + C, o.fillText(".", 0, 20), o.getImageData(0, 0, 1, 1).data[3] > 0) {
          x();
          return;
        }
        setTimeout(h.bind(null, C, x));
      }
      const c = `lt${Date.now()}${this.loadTestFontId++}`;
      let f = this._loadTestFont;
      f = s(f, 976, c.length, c);
      const b = 16, m = 1482184792;
      let w = i(f, b);
      for (n = 0, r = c.length - 3; n < r; n += 4) w = w - m + i(c, n) | 0;
      n < c.length && (w = w - m + i(c + "XXX", n) | 0), f = s(f, b, 4, Mn(w));
      const A = `url(data:font/opentype;base64,${btoa(f)});`, S = `@font-face {font-family:"${c}";src:${A}}`;
      this.insertRule(S);
      const E = this._document.createElement("div");
      E.style.visibility = "hidden", E.style.width = E.style.height = "10px", E.style.position = "absolute", E.style.top = E.style.left = "0px";
      for (const C of [
        t.loadedName,
        c
      ]) {
        const x = this._document.createElement("span");
        x.textContent = "Hi", x.style.fontFamily = C, E.append(x);
      }
      this._document.body.append(E), h(c, () => {
        E.remove(), e.complete();
      });
    }
  }
  _t16 = new WeakMap();
  class Kn {
    constructor(t, e = null, i, s) {
      __privateAdd(this, _t17);
      this.compiledGlyphs = /* @__PURE__ */ Object.create(null), __privateSet(this, _t17, t), this._inspectFont = e, i && Object.assign(this, i), s && (this.charProcOperatorList = s);
    }
    createNativeFontFace() {
      var _a29;
      if (!this.data || this.disableFontFace) return null;
      let t;
      if (!this.cssFontInfo) t = new FontFace(this.loadedName, this.data, {});
      else {
        const e = {
          weight: this.cssFontInfo.fontWeight
        };
        this.cssFontInfo.italicAngle && (e.style = `oblique ${this.cssFontInfo.italicAngle}deg`), t = new FontFace(this.cssFontInfo.fontFamily, this.data, e);
      }
      return (_a29 = this._inspectFont) == null ? void 0 : _a29.call(this, this), t;
    }
    createFontFaceRule() {
      var _a29;
      if (!this.data || this.disableFontFace) return null;
      const t = `url(data:${this.mimetype};base64,${this.data.toBase64()});`;
      let e;
      if (!this.cssFontInfo) e = `@font-face {font-family:"${this.loadedName}";src:${t}}`;
      else {
        let i = `font-weight: ${this.cssFontInfo.fontWeight};`;
        this.cssFontInfo.italicAngle && (i += `font-style: oblique ${this.cssFontInfo.italicAngle}deg;`), e = `@font-face {font-family:"${this.cssFontInfo.fontFamily}";${i}src:${t}}`;
      }
      return (_a29 = this._inspectFont) == null ? void 0 : _a29.call(this, this, t), e;
    }
    getPathGenerator(t, e) {
      if (this.compiledGlyphs[e] !== void 0) return this.compiledGlyphs[e];
      const i = this.loadedName + "_path_" + e;
      let s;
      try {
        s = t.get(i);
      } catch (r) {
        j(`getPathGenerator - ignoring character: "${r}".`);
      }
      const n = Gs(s == null ? void 0 : s.path);
      return this.fontExtraProperties || t.delete(i), this.compiledGlyphs[e] = n;
    }
    get black() {
      return __privateGet(this, _t17).black;
    }
    get bold() {
      return __privateGet(this, _t17).bold;
    }
    get disableFontFace() {
      return __privateGet(this, _t17).disableFontFace ?? false;
    }
    set disableFontFace(t) {
      H(this, "disableFontFace", !!t);
    }
    get fontExtraProperties() {
      return __privateGet(this, _t17).fontExtraProperties ?? false;
    }
    get isInvalidPDFjsFont() {
      return __privateGet(this, _t17).isInvalidPDFjsFont;
    }
    get isType3Font() {
      return __privateGet(this, _t17).isType3Font;
    }
    get italic() {
      return __privateGet(this, _t17).italic;
    }
    get missingFile() {
      return __privateGet(this, _t17).missingFile;
    }
    get remeasure() {
      return __privateGet(this, _t17).remeasure;
    }
    get vertical() {
      return __privateGet(this, _t17).vertical;
    }
    get ascent() {
      return __privateGet(this, _t17).ascent;
    }
    get defaultWidth() {
      return __privateGet(this, _t17).defaultWidth;
    }
    get descent() {
      return __privateGet(this, _t17).descent;
    }
    get bbox() {
      return __privateGet(this, _t17).bbox;
    }
    set bbox(t) {
      H(this, "bbox", t);
    }
    get fontMatrix() {
      return __privateGet(this, _t17).fontMatrix;
    }
    get fallbackName() {
      return __privateGet(this, _t17).fallbackName;
    }
    get loadedName() {
      return __privateGet(this, _t17).loadedName;
    }
    get mimetype() {
      return __privateGet(this, _t17).mimetype;
    }
    get name() {
      return __privateGet(this, _t17).name;
    }
    get data() {
      return __privateGet(this, _t17).data;
    }
    clearData() {
      __privateGet(this, _t17).clearData();
    }
    get cssFontInfo() {
      return __privateGet(this, _t17).cssFontInfo;
    }
    get systemFontInfo() {
      return __privateGet(this, _t17).systemFontInfo;
    }
    get defaultVMetrics() {
      return __privateGet(this, _t17).defaultVMetrics;
    }
  }
  _t17 = new WeakMap();
  const _fe = class _fe {
    constructor(t) {
      __privateAdd(this, _fe_instances);
      __privateAdd(this, _t18);
      __privateAdd(this, _e15);
      __privateAdd(this, _s14);
      __privateSet(this, _t18, t), __privateSet(this, _e15, new DataView(__privateGet(this, _t18))), __privateSet(this, _s14, new TextDecoder());
    }
    static write(t) {
      const e = new TextEncoder(), i = {};
      let s = 0;
      for (const l of _fe.strings) {
        const h = e.encode(t[l]);
        i[l] = h, s += 4 + h.length;
      }
      const n = new ArrayBuffer(s), r = new Uint8Array(n), a = new DataView(n);
      let o = 0;
      for (const l of _fe.strings) {
        const h = i[l], c = h.length;
        a.setUint32(o, c), r.set(h, o + 4), o += 4 + c;
      }
      return K(o === n.byteLength, "CssFontInfo.write: Buffer overflow"), n;
    }
    get fontFamily() {
      return __privateMethod(this, _fe_instances, i_fn3).call(this, 0);
    }
    get fontWeight() {
      return __privateMethod(this, _fe_instances, i_fn3).call(this, 1);
    }
    get italicAngle() {
      return __privateMethod(this, _fe_instances, i_fn3).call(this, 2);
    }
  };
  _t18 = new WeakMap();
  _e15 = new WeakMap();
  _s14 = new WeakMap();
  _fe_instances = new WeakSet();
  i_fn3 = function(t) {
    K(t < _fe.strings.length, "Invalid string index");
    let e = 0;
    for (let s = 0; s < t; s++) e += __privateGet(this, _e15).getUint32(e) + 4;
    const i = __privateGet(this, _e15).getUint32(e);
    return __privateGet(this, _s14).decode(new Uint8Array(__privateGet(this, _t18), e + 4, i));
  };
  __publicField(_fe, "strings", [
    "fontFamily",
    "fontWeight",
    "italicAngle"
  ]);
  let fe = _fe;
  const _pe = class _pe {
    constructor(t) {
      __privateAdd(this, _pe_instances);
      __privateAdd(this, _t19);
      __privateAdd(this, _e16);
      __privateAdd(this, _s15);
      __privateSet(this, _t19, t), __privateSet(this, _e16, new DataView(__privateGet(this, _t19))), __privateSet(this, _s15, new TextDecoder());
    }
    static write(t) {
      const e = new TextEncoder(), i = {};
      let s = 0;
      for (const f of _pe.strings) {
        const g = e.encode(t[f]);
        i[f] = g, s += 4 + g.length;
      }
      s += 4;
      let n, r, a = 1 + s;
      t.style && (n = e.encode(t.style.style), r = e.encode(t.style.weight), a += 4 + n.length + 4 + r.length);
      const o = new ArrayBuffer(a), l = new Uint8Array(o), h = new DataView(o);
      let c = 0;
      h.setUint8(c++, t.guessFallback ? 1 : 0), h.setUint32(c, 0), c += 4, s = 0;
      for (const f of _pe.strings) {
        const g = i[f], b = g.length;
        s += 4 + b, h.setUint32(c, b), l.set(g, c + 4), c += 4 + b;
      }
      return h.setUint32(c - s - 4, s), t.style && (h.setUint32(c, n.length), l.set(n, c + 4), c += 4 + n.length, h.setUint32(c, r.length), l.set(r, c + 4), c += 4 + r.length), K(c <= o.byteLength, "SubstitionInfo.write: Buffer overflow"), o.transferToFixedLength(c);
    }
    get guessFallback() {
      return __privateGet(this, _e16).getUint8(0) !== 0;
    }
    get css() {
      return __privateMethod(this, _pe_instances, i_fn4).call(this, 0);
    }
    get loadedName() {
      return __privateMethod(this, _pe_instances, i_fn4).call(this, 1);
    }
    get baseFontName() {
      return __privateMethod(this, _pe_instances, i_fn4).call(this, 2);
    }
    get src() {
      return __privateMethod(this, _pe_instances, i_fn4).call(this, 3);
    }
    get style() {
      let t = 1;
      t += 4 + __privateGet(this, _e16).getUint32(t);
      const e = __privateGet(this, _e16).getUint32(t), i = __privateGet(this, _s15).decode(new Uint8Array(__privateGet(this, _t19), t + 4, e));
      t += 4 + e;
      const s = __privateGet(this, _e16).getUint32(t), n = __privateGet(this, _s15).decode(new Uint8Array(__privateGet(this, _t19), t + 4, s));
      return {
        style: i,
        weight: n
      };
    }
  };
  _t19 = new WeakMap();
  _e16 = new WeakMap();
  _s15 = new WeakMap();
  _pe_instances = new WeakSet();
  i_fn4 = function(t) {
    K(t < _pe.strings.length, "Invalid string index");
    let e = 5;
    for (let s = 0; s < t; s++) e += __privateGet(this, _e16).getUint32(e) + 4;
    const i = __privateGet(this, _e16).getUint32(e);
    return __privateGet(this, _s15).decode(new Uint8Array(__privateGet(this, _t19), e + 4, i));
  };
  __publicField(_pe, "strings", [
    "css",
    "loadedName",
    "baseFontName",
    "src"
  ]);
  let pe = _pe;
  const _et = class _et {
    constructor({ data: t, extra: e }) {
      __privateAdd(this, _et_instances);
      __privateAdd(this, _r9);
      __privateAdd(this, _n9);
      __privateAdd(this, _o7);
      __privateSet(this, _r9, t), __privateSet(this, _n9, new TextDecoder()), __privateSet(this, _o7, new DataView(__privateGet(this, _r9))), e && Object.assign(this, e);
    }
    get black() {
      return __privateMethod(this, _et_instances, h_fn2).call(this, 0);
    }
    get bold() {
      return __privateMethod(this, _et_instances, h_fn2).call(this, 1);
    }
    get disableFontFace() {
      return __privateMethod(this, _et_instances, h_fn2).call(this, 2);
    }
    get fontExtraProperties() {
      return __privateMethod(this, _et_instances, h_fn2).call(this, 3);
    }
    get isInvalidPDFjsFont() {
      return __privateMethod(this, _et_instances, h_fn2).call(this, 4);
    }
    get isType3Font() {
      return __privateMethod(this, _et_instances, h_fn2).call(this, 5);
    }
    get italic() {
      return __privateMethod(this, _et_instances, h_fn2).call(this, 6);
    }
    get missingFile() {
      return __privateMethod(this, _et_instances, h_fn2).call(this, 7);
    }
    get remeasure() {
      return __privateMethod(this, _et_instances, h_fn2).call(this, 8);
    }
    get vertical() {
      return __privateMethod(this, _et_instances, h_fn2).call(this, 9);
    }
    get ascent() {
      return __privateMethod(this, _et_instances, l_fn3).call(this, 0);
    }
    get defaultWidth() {
      return __privateMethod(this, _et_instances, l_fn3).call(this, 1);
    }
    get descent() {
      return __privateMethod(this, _et_instances, l_fn3).call(this, 2);
    }
    get bbox() {
      let t = __privateGet(_et, _e17);
      if (__privateGet(this, _o7).getUint8(t) === 0) return;
      t += 1;
      const i = [];
      for (let s = 0; s < 4; s++) i.push(__privateGet(this, _o7).getInt16(t, true)), t += 2;
      return i;
    }
    get fontMatrix() {
      let t = __privateGet(_et, _s16);
      if (__privateGet(this, _o7).getUint8(t) === 0) return;
      t += 1;
      const i = [];
      for (let s = 0; s < 6; s++) i.push(__privateGet(this, _o7).getFloat64(t, true)), t += 8;
      return i;
    }
    get defaultVMetrics() {
      let t = __privateGet(_et, _i12);
      if (__privateGet(this, _o7).getUint8(t) === 0) return;
      t += 1;
      const i = [];
      for (let s = 0; s < 3; s++) i.push(__privateGet(this, _o7).getInt16(t, true)), t += 2;
      return i;
    }
    get fallbackName() {
      return __privateMethod(this, _et_instances, u_fn4).call(this, 0);
    }
    get loadedName() {
      return __privateMethod(this, _et_instances, u_fn4).call(this, 1);
    }
    get mimetype() {
      return __privateMethod(this, _et_instances, u_fn4).call(this, 2);
    }
    get name() {
      return __privateMethod(this, _et_instances, u_fn4).call(this, 3);
    }
    get data() {
      let t = __privateGet(_et, _a9);
      const e = __privateGet(this, _o7).getUint32(t);
      t += 4 + e;
      const i = __privateGet(this, _o7).getUint32(t);
      t += 4 + i;
      const s = __privateGet(this, _o7).getUint32(t);
      t += 4 + s;
      const n = __privateGet(this, _o7).getUint32(t);
      if (n !== 0) return new Uint8Array(__privateGet(this, _r9), t + 4, n);
    }
    clearData() {
      let t = __privateGet(_et, _a9);
      const e = __privateGet(this, _o7).getUint32(t);
      t += 4 + e;
      const i = __privateGet(this, _o7).getUint32(t);
      t += 4 + i;
      const s = __privateGet(this, _o7).getUint32(t);
      t += 4 + s;
      const n = __privateGet(this, _o7).getUint32(t);
      new Uint8Array(__privateGet(this, _r9), t + 4, n).fill(0), __privateGet(this, _o7).setUint32(t, 0);
    }
    get cssFontInfo() {
      let t = __privateGet(_et, _a9);
      const e = __privateGet(this, _o7).getUint32(t);
      t += 4 + e;
      const i = __privateGet(this, _o7).getUint32(t);
      t += 4 + i;
      const s = __privateGet(this, _o7).getUint32(t);
      if (s === 0) return null;
      const n = new Uint8Array(s);
      return n.set(new Uint8Array(__privateGet(this, _r9), t + 4, s)), new fe(n.buffer);
    }
    get systemFontInfo() {
      let t = __privateGet(_et, _a9);
      const e = __privateGet(this, _o7).getUint32(t);
      t += 4 + e;
      const i = __privateGet(this, _o7).getUint32(t);
      if (i === 0) return null;
      const s = new Uint8Array(i);
      return s.set(new Uint8Array(__privateGet(this, _r9), t + 4, i)), new pe(s.buffer);
    }
    static write(t) {
      const e = t.systemFontInfo ? pe.write(t.systemFontInfo) : null, i = t.cssFontInfo ? fe.write(t.cssFontInfo) : null, s = new TextEncoder(), n = {};
      let r = 0;
      for (const m of _et.strings) n[m] = s.encode(t[m]), r += 4 + n[m].length;
      const a = __privateGet(_et, _a9) + 4 + r + 4 + (e ? e.byteLength : 0) + 4 + (i ? i.byteLength : 0) + 4 + (t.data ? t.data.length : 0), o = new ArrayBuffer(a), l = new Uint8Array(o), h = new DataView(o);
      let c = 0;
      const f = _et.bools.length;
      let g = 0, b = 0;
      for (let m = 0; m < f; m++) {
        const w = t[_et.bools[m]];
        g |= (w === void 0 ? 0 : w ? 2 : 1) << b, b += 2, (b === 8 || m === f - 1) && (h.setUint8(c++, g), g = 0, b = 0);
      }
      K(c === __privateGet(_et, _t20), "FontInfo.write: Boolean properties offset mismatch");
      for (const m of _et.numbers) h.setFloat64(c, t[m]), c += 8;
      if (K(c === __privateGet(_et, _e17), "FontInfo.write: Number properties offset mismatch"), t.bbox) {
        h.setUint8(c++, 4);
        for (const m of t.bbox) h.setInt16(c, m, true), c += 2;
      } else h.setUint8(c++, 0), c += 8;
      if (K(c === __privateGet(_et, _s16), "FontInfo.write: BBox properties offset mismatch"), t.fontMatrix) {
        h.setUint8(c++, 6);
        for (const m of t.fontMatrix) h.setFloat64(c, m, true), c += 8;
      } else h.setUint8(c++, 0), c += 48;
      if (K(c === __privateGet(_et, _i12), "FontInfo.write: FontMatrix properties offset mismatch"), t.defaultVMetrics) {
        h.setUint8(c++, 1);
        for (const m of t.defaultVMetrics) h.setInt16(c, m, true), c += 2;
      } else h.setUint8(c++, 0), c += 6;
      K(c === __privateGet(_et, _a9), "FontInfo.write: DefaultVMetrics properties offset mismatch"), h.setUint32(__privateGet(_et, _a9), 0), c += 4;
      for (const m of _et.strings) {
        const w = n[m], A = w.length;
        h.setUint32(c, A), l.set(w, c + 4), c += 4 + A;
      }
      if (h.setUint32(__privateGet(_et, _a9), c - __privateGet(_et, _a9) - 4), !e) h.setUint32(c, 0), c += 4;
      else {
        const m = e.byteLength;
        h.setUint32(c, m), K(c + 4 + m <= o.byteLength, "FontInfo.write: Buffer overflow at systemFontInfo"), l.set(new Uint8Array(e), c + 4), c += 4 + m;
      }
      if (!i) h.setUint32(c, 0), c += 4;
      else {
        const m = i.byteLength;
        h.setUint32(c, m), K(c + 4 + m <= o.byteLength, "FontInfo.write: Buffer overflow at cssFontInfo"), l.set(new Uint8Array(i), c + 4), c += 4 + m;
      }
      return t.data === void 0 ? (h.setUint32(c, 0), c += 4) : (h.setUint32(c, t.data.length), l.set(t.data, c + 4), c += 4 + t.data.length), K(c <= o.byteLength, "FontInfo.write: Buffer overflow"), o.transferToFixedLength(c);
    }
  };
  _t20 = new WeakMap();
  _e17 = new WeakMap();
  _s16 = new WeakMap();
  _i12 = new WeakMap();
  _a9 = new WeakMap();
  _r9 = new WeakMap();
  _n9 = new WeakMap();
  _o7 = new WeakMap();
  _et_instances = new WeakSet();
  h_fn2 = function(t) {
    K(t < _et.bools.length, "Invalid boolean index");
    const e = Math.floor(t / 4), i = t * 2 % 8, s = __privateGet(this, _o7).getUint8(e) >> i & 3;
    return s === 0 ? void 0 : s === 2;
  };
  l_fn3 = function(t) {
    return K(t < _et.numbers.length, "Invalid number index"), __privateGet(this, _o7).getFloat64(__privateGet(_et, _t20) + t * 8);
  };
  u_fn4 = function(t) {
    K(t < _et.strings.length, "Invalid string index");
    let e = __privateGet(_et, _a9) + 4;
    for (let n = 0; n < t; n++) e += __privateGet(this, _o7).getUint32(e) + 4;
    const i = __privateGet(this, _o7).getUint32(e), s = new Uint8Array(i);
    return s.set(new Uint8Array(__privateGet(this, _r9), e + 4, i)), __privateGet(this, _n9).decode(s);
  };
  __publicField(_et, "bools", [
    "black",
    "bold",
    "disableFontFace",
    "fontExtraProperties",
    "isInvalidPDFjsFont",
    "isType3Font",
    "italic",
    "missingFile",
    "remeasure",
    "vertical"
  ]);
  __publicField(_et, "numbers", [
    "ascent",
    "defaultWidth",
    "descent"
  ]);
  __publicField(_et, "strings", [
    "fallbackName",
    "loadedName",
    "mimetype",
    "name"
  ]);
  __privateAdd(_et, _t20, Math.ceil(_et.bools.length * 2 / 8));
  __privateAdd(_et, _e17, __privateGet(_et, _t20) + _et.numbers.length * 8);
  __privateAdd(_et, _s16, __privateGet(_et, _e17) + 1 + 8);
  __privateAdd(_et, _i12, __privateGet(_et, _s16) + 1 + 48);
  __privateAdd(_et, _a9, __privateGet(_et, _i12) + 1 + 6);
  let et = _et;
  const _bt = class _bt {
    constructor(t) {
      this.buffer = t, this.view = new DataView(t), this.data = new Uint8Array(t);
    }
    static write(t) {
      let e, i = null, s = [], n = [], r = [], a = [], o = null, l = null;
      switch (t[0]) {
        case "RadialAxial":
          e = t[1] === "axial" ? 1 : 2, i = t[2], r = t[3], e === 1 ? s.push(...t[4], ...t[5]) : s.push(t[4][0], t[4][1], t[6], t[5][0], t[5][1], t[7]);
          break;
        case "Mesh":
          e = 3, o = t[1], s = t[2], n = t[3], a = t[4] || [], i = t[6], l = t[7];
          break;
        default:
          throw new Error(`Unsupported pattern type: ${t[0]}`);
      }
      const h = Math.floor(s.length / 2), c = Math.floor(n.length / 3), f = r.length, g = a.length;
      let b = 0;
      for (const x of a) b += 1, b = Math.ceil(b / 4) * 4, b += 4 + x.coords.length * 4, b += 4 + x.colors.length * 4, x.verticesPerRow !== void 0 && (b += 4);
      const m = 20 + h * 8 + c * 3 + f * 8 + (i ? 16 : 0) + (l ? 3 : 0) + b, w = new ArrayBuffer(m), A = new DataView(w), S = new Uint8Array(w);
      A.setUint8(__privateGet(_bt, _t21), e), A.setUint8(__privateGet(_bt, _e18), i ? 1 : 0), A.setUint8(__privateGet(_bt, _s17), l ? 1 : 0), A.setUint8(__privateGet(_bt, _i13), o), A.setUint32(__privateGet(_bt, _a10), h, true), A.setUint32(__privateGet(_bt, _r10), c, true), A.setUint32(__privateGet(_bt, _n10), f, true), A.setUint32(__privateGet(_bt, _o8), g, true);
      let E = 20;
      new Float32Array(w, E, h * 2).set(s), E += h * 8, S.set(n, E), E += c * 3;
      for (const [x, T] of r) A.setFloat32(E, x, true), E += 4, A.setUint32(E, parseInt(T.slice(1), 16), true), E += 4;
      if (i) for (const x of i) A.setFloat32(E, x, true), E += 4;
      l && (S.set(l, E), E += 3);
      for (let x = 0; x < a.length; x++) {
        const T = a[x];
        A.setUint8(E, T.type), E += 1, E = Math.ceil(E / 4) * 4, A.setUint32(E, T.coords.length, true), E += 4, new Int32Array(w, E, T.coords.length).set(T.coords), E += T.coords.length * 4, A.setUint32(E, T.colors.length, true), E += 4, new Int32Array(w, E, T.colors.length).set(T.colors), E += T.colors.length * 4, T.verticesPerRow !== void 0 && (A.setUint32(E, T.verticesPerRow, true), E += 4);
      }
      return w;
    }
    getIR() {
      const t = this.view, e = this.data[__privateGet(_bt, _t21)], i = !!this.data[__privateGet(_bt, _e18)], s = !!this.data[__privateGet(_bt, _s17)], n = t.getUint32(__privateGet(_bt, _a10), true), r = t.getUint32(__privateGet(_bt, _r10), true), a = t.getUint32(__privateGet(_bt, _n10), true), o = t.getUint32(__privateGet(_bt, _o8), true);
      let l = 20;
      const h = new Float32Array(this.buffer, l, n * 2);
      l += n * 8;
      const c = new Uint8Array(this.buffer, l, r * 3);
      l += r * 3;
      const f = [];
      for (let w = 0; w < a; ++w) {
        const A = t.getFloat32(l, true);
        l += 4;
        const S = t.getUint32(l, true);
        l += 4, f.push([
          A,
          `#${S.toString(16).padStart(6, "0")}`
        ]);
      }
      let g = null;
      if (i) {
        g = [];
        for (let w = 0; w < 4; ++w) g.push(t.getFloat32(l, true)), l += 4;
      }
      let b = null;
      s && (b = new Uint8Array(this.buffer, l, 3), l += 3);
      const m = [];
      for (let w = 0; w < o; ++w) {
        const A = t.getUint8(l);
        l += 1, l = Math.ceil(l / 4) * 4;
        const S = t.getUint32(l, true);
        l += 4;
        const E = new Int32Array(this.buffer, l, S);
        l += S * 4;
        const C = t.getUint32(l, true);
        l += 4;
        const x = new Int32Array(this.buffer, l, C);
        l += C * 4;
        const T = {
          type: A,
          coords: E,
          colors: x
        };
        A === Ti.LATTICE && (T.verticesPerRow = t.getUint32(l, true), l += 4), m.push(T);
      }
      if (e === 1) return [
        "RadialAxial",
        "axial",
        g,
        f,
        Array.from(h.slice(0, 2)),
        Array.from(h.slice(2, 4)),
        null,
        null
      ];
      if (e === 2) return [
        "RadialAxial",
        "radial",
        g,
        f,
        [
          h[0],
          h[1]
        ],
        [
          h[3],
          h[4]
        ],
        h[2],
        h[5]
      ];
      if (e === 3) {
        const w = this.data[__privateGet(_bt, _i13)];
        let A = null;
        if (h.length > 0) {
          let S = h[0], E = h[0], C = h[1], x = h[1];
          for (let T = 0; T < h.length; T += 2) {
            const k = h[T], I = h[T + 1];
            S = S > k ? k : S, C = C > I ? I : C, E = E < k ? k : E, x = x < I ? I : x;
          }
          A = [
            S,
            C,
            E,
            x
          ];
        }
        return [
          "Mesh",
          w,
          h,
          c,
          m,
          A,
          g,
          b
        ];
      }
      throw new Error(`Unsupported pattern kind: ${e}`);
    }
  };
  _t21 = new WeakMap();
  _e18 = new WeakMap();
  _s17 = new WeakMap();
  _i13 = new WeakMap();
  _a10 = new WeakMap();
  _r10 = new WeakMap();
  _n10 = new WeakMap();
  _o8 = new WeakMap();
  __privateAdd(_bt, _t21, 0);
  __privateAdd(_bt, _e18, 1);
  __privateAdd(_bt, _s17, 2);
  __privateAdd(_bt, _i13, 3);
  __privateAdd(_bt, _a10, 4);
  __privateAdd(_bt, _r10, 8);
  __privateAdd(_bt, _n10, 12);
  __privateAdd(_bt, _o8, 16);
  let bt = _bt;
  class Jn {
    constructor(t) {
      __privateAdd(this, _t22);
      __privateSet(this, _t22, t);
    }
    static write(t) {
      let e, i;
      return mt.isFloat16ArraySupported ? (i = new ArrayBuffer(t.length * 2), e = new Float16Array(i)) : (i = new ArrayBuffer(t.length * 4), e = new Float32Array(i)), e.set(t), i;
    }
    get path() {
      return mt.isFloat16ArraySupported ? new Float16Array(__privateGet(this, _t22)) : new Float32Array(__privateGet(this, _t22));
    }
  }
  _t22 = new WeakMap();
  function Qn(d) {
    if (d instanceof URL) return d;
    if (typeof d == "string") {
      if (xt) {
        if (/^[a-z][a-z0-9\-+.]+:/i.test(d)) return new URL(d);
        const e = process.getBuiltinModule("url");
        return new URL(e.pathToFileURL(d));
      }
      const t = URL.parse(d, window.location);
      if (t) return t;
    }
    throw new Error("Invalid PDF url data: either string or URL-object is expected in the url property.");
  }
  function Zn(d) {
    if (xt && typeof os.Buffer < "u" && d instanceof os.Buffer) throw new Error("Please provide binary data as `Uint8Array`, rather than `Buffer`.");
    if (d instanceof Uint8Array && d.byteLength === d.buffer.byteLength) return d;
    if (typeof d == "string") return ii(d);
    if (d instanceof ArrayBuffer || ArrayBuffer.isView(d) || typeof d == "object" && !isNaN(d == null ? void 0 : d.length)) return new Uint8Array(d);
    throw new Error("Invalid PDF binary data: either TypedArray, string, or array-like object is expected in the data property.");
  }
  function $e(d) {
    if (typeof d != "string") return null;
    if (d.endsWith("/")) return d;
    throw new Error(`Invalid factory url: "${d}" must include trailing slash.`);
  }
  let Ri, tr;
  Ri = (d) => typeof d == "object" && Number.isInteger(d == null ? void 0 : d.num) && d.num >= 0 && Number.isInteger(d == null ? void 0 : d.gen) && d.gen >= 0;
  tr = (d) => typeof d == "object" && typeof (d == null ? void 0 : d.name) == "string";
  er = Fn.bind(null, Ri, tr);
  class ir {
    constructor() {
      __privateAdd(this, _t23, /* @__PURE__ */ new Map());
      __privateAdd(this, _e19, Promise.resolve());
    }
    postMessage(t, e) {
      const i = {
        data: structuredClone(t, e ? {
          transfer: e
        } : null)
      };
      __privateGet(this, _e19).then(() => {
        for (const [s] of __privateGet(this, _t23)) s.call(this, i);
      });
    }
    addEventListener(t, e, i = null) {
      let s = null;
      if ((i == null ? void 0 : i.signal) instanceof AbortSignal) {
        const { signal: n } = i;
        if (n.aborted) {
          j("LoopbackPort - cannot use an `aborted` signal.");
          return;
        }
        const r = () => this.removeEventListener(t, e);
        s = () => n.removeEventListener("abort", r), n.addEventListener("abort", r);
      }
      __privateGet(this, _t23).set(e, s);
    }
    removeEventListener(t, e) {
      var _a29;
      (_a29 = __privateGet(this, _t23).get(e)) == null ? void 0 : _a29(), __privateGet(this, _t23).delete(e);
    }
    terminate() {
      for (const [, t] of __privateGet(this, _t23)) t == null ? void 0 : t();
      __privateGet(this, _t23).clear();
    }
  }
  _t23 = new WeakMap();
  _e19 = new WeakMap();
  const je = {
    DATA: 1,
    ERROR: 2
  }, ft = {
    CANCEL: 1,
    CANCEL_COMPLETE: 2,
    CLOSE: 3,
    ENQUEUE: 4,
    ERROR: 5,
    PULL: 6,
    PULL_COMPLETE: 7,
    START_COMPLETE: 8
  };
  function ms() {
  }
  function Ct(d) {
    if (d instanceof Qt || d instanceof ki || d instanceof ls || d instanceof Ke || d instanceof Ai) return d;
    switch (d instanceof Error || typeof d == "object" && d !== null || Z('wrapReason: Expected "reason" to be a (possibly cloned) Error.'), d.name) {
      case "AbortException":
        return new Qt(d.message);
      case "InvalidPDFException":
        return new ki(d.message);
      case "PasswordException":
        return new ls(d.message, d.code);
      case "ResponseException":
        return new Ke(d.message, d.status, d.missing);
      case "UnknownErrorException":
        return new Ai(d.message, d.details);
    }
    return new Ai(d.message, d.toString());
  }
  class Se {
    constructor(t, e, i) {
      __privateAdd(this, _Se_instances);
      __privateAdd(this, _t24, new AbortController());
      this.sourceName = t, this.targetName = e, this.comObj = i, this.callbackId = 1, this.streamId = 1, this.streamSinks = /* @__PURE__ */ Object.create(null), this.streamControllers = /* @__PURE__ */ Object.create(null), this.callbackCapabilities = /* @__PURE__ */ Object.create(null), this.actionHandler = /* @__PURE__ */ Object.create(null), i.addEventListener("message", __privateMethod(this, _Se_instances, e_fn2).bind(this), {
        signal: __privateGet(this, _t24).signal
      });
    }
    on(t, e) {
      const i = this.actionHandler;
      if (i[t]) throw new Error(`There is already an actionName called "${t}"`);
      i[t] = e;
    }
    send(t, e, i) {
      this.comObj.postMessage({
        sourceName: this.sourceName,
        targetName: this.targetName,
        action: t,
        data: e
      }, i);
    }
    sendWithPromise(t, e, i) {
      const s = this.callbackId++, n = Promise.withResolvers();
      this.callbackCapabilities[s] = n;
      try {
        this.comObj.postMessage({
          sourceName: this.sourceName,
          targetName: this.targetName,
          action: t,
          callbackId: s,
          data: e
        }, i);
      } catch (r) {
        n.reject(r);
      }
      return n.promise;
    }
    sendWithStream(t, e, i, s) {
      const n = this.streamId++, r = this.sourceName, a = this.targetName, o = this.comObj;
      return new ReadableStream({
        start: (l) => {
          const h = Promise.withResolvers();
          return this.streamControllers[n] = {
            controller: l,
            startCall: h,
            pullCall: null,
            cancelCall: null,
            isClosed: false
          }, o.postMessage({
            sourceName: r,
            targetName: a,
            action: t,
            streamId: n,
            data: e,
            desiredSize: l.desiredSize
          }, s), h.promise;
        },
        pull: (l) => {
          const h = Promise.withResolvers();
          return this.streamControllers[n].pullCall = h, o.postMessage({
            sourceName: r,
            targetName: a,
            stream: ft.PULL,
            streamId: n,
            desiredSize: l.desiredSize
          }), h.promise;
        },
        cancel: (l) => {
          K(l instanceof Error, "cancel must have a valid reason");
          const h = Promise.withResolvers();
          return this.streamControllers[n].cancelCall = h, this.streamControllers[n].isClosed = true, o.postMessage({
            sourceName: r,
            targetName: a,
            stream: ft.CANCEL,
            streamId: n,
            reason: Ct(l)
          }), h.promise;
        }
      }, i);
    }
    destroy() {
      var _a29;
      (_a29 = __privateGet(this, _t24)) == null ? void 0 : _a29.abort(), __privateSet(this, _t24, null);
    }
  }
  _t24 = new WeakMap();
  _Se_instances = new WeakSet();
  e_fn2 = function({ data: t }) {
    if (t.targetName !== this.sourceName) return;
    if (t.stream) {
      __privateMethod(this, _Se_instances, i_fn5).call(this, t);
      return;
    }
    if (t.callback) {
      const i = t.callbackId, s = this.callbackCapabilities[i];
      if (!s) throw new Error(`Cannot resolve callback ${i}`);
      if (delete this.callbackCapabilities[i], t.callback === je.DATA) s.resolve(t.data);
      else if (t.callback === je.ERROR) s.reject(Ct(t.reason));
      else throw new Error("Unexpected callback case");
      return;
    }
    const e = this.actionHandler[t.action];
    if (!e) throw new Error(`Unknown action from worker: ${t.action}`);
    if (t.callbackId) {
      const i = this.sourceName, s = t.sourceName, n = this.comObj;
      Promise.try(e, t.data).then(function(r) {
        n.postMessage({
          sourceName: i,
          targetName: s,
          callback: je.DATA,
          callbackId: t.callbackId,
          data: r
        });
      }, function(r) {
        n.postMessage({
          sourceName: i,
          targetName: s,
          callback: je.ERROR,
          callbackId: t.callbackId,
          reason: Ct(r)
        });
      });
      return;
    }
    if (t.streamId) {
      __privateMethod(this, _Se_instances, s_fn).call(this, t);
      return;
    }
    e(t.data);
  };
  s_fn = function(t) {
    const e = t.streamId, i = this.sourceName, s = t.sourceName, n = this.comObj, r = this, a = this.actionHandler[t.action], o = {
      enqueue(l, h = 1, c) {
        if (this.isCancelled) return;
        const f = this.desiredSize;
        this.desiredSize -= h, f > 0 && this.desiredSize <= 0 && (this.sinkCapability = Promise.withResolvers(), this.ready = this.sinkCapability.promise), n.postMessage({
          sourceName: i,
          targetName: s,
          stream: ft.ENQUEUE,
          streamId: e,
          chunk: l
        }, c);
      },
      close() {
        this.isCancelled || (this.isCancelled = true, n.postMessage({
          sourceName: i,
          targetName: s,
          stream: ft.CLOSE,
          streamId: e
        }), delete r.streamSinks[e]);
      },
      error(l) {
        K(l instanceof Error, "error must have a valid reason"), !this.isCancelled && (this.isCancelled = true, n.postMessage({
          sourceName: i,
          targetName: s,
          stream: ft.ERROR,
          streamId: e,
          reason: Ct(l)
        }));
      },
      sinkCapability: Promise.withResolvers(),
      onPull: null,
      onCancel: null,
      isCancelled: false,
      desiredSize: t.desiredSize,
      ready: null
    };
    o.sinkCapability.resolve(), o.ready = o.sinkCapability.promise, this.streamSinks[e] = o, Promise.try(a, t.data, o).then(function() {
      n.postMessage({
        sourceName: i,
        targetName: s,
        stream: ft.START_COMPLETE,
        streamId: e,
        success: true
      });
    }, function(l) {
      n.postMessage({
        sourceName: i,
        targetName: s,
        stream: ft.START_COMPLETE,
        streamId: e,
        reason: Ct(l)
      });
    });
  };
  i_fn5 = function(t) {
    const e = t.streamId, i = this.sourceName, s = t.sourceName, n = this.comObj, r = this.streamControllers[e], a = this.streamSinks[e];
    switch (t.stream) {
      case ft.START_COMPLETE:
        t.success ? r.startCall.resolve() : r.startCall.reject(Ct(t.reason));
        break;
      case ft.PULL_COMPLETE:
        t.success ? r.pullCall.resolve() : r.pullCall.reject(Ct(t.reason));
        break;
      case ft.PULL:
        if (!a) {
          n.postMessage({
            sourceName: i,
            targetName: s,
            stream: ft.PULL_COMPLETE,
            streamId: e,
            success: true
          });
          break;
        }
        a.desiredSize <= 0 && t.desiredSize > 0 && a.sinkCapability.resolve(), a.desiredSize = t.desiredSize, Promise.try(a.onPull || ms).then(function() {
          n.postMessage({
            sourceName: i,
            targetName: s,
            stream: ft.PULL_COMPLETE,
            streamId: e,
            success: true
          });
        }, function(l) {
          n.postMessage({
            sourceName: i,
            targetName: s,
            stream: ft.PULL_COMPLETE,
            streamId: e,
            reason: Ct(l)
          });
        });
        break;
      case ft.ENQUEUE:
        if (K(r, "enqueue should have stream controller"), r.isClosed) break;
        r.controller.enqueue(t.chunk);
        break;
      case ft.CLOSE:
        if (K(r, "close should have stream controller"), r.isClosed) break;
        r.isClosed = true, r.controller.close(), __privateMethod(this, _Se_instances, a_fn3).call(this, r, e);
        break;
      case ft.ERROR:
        K(r, "error should have stream controller"), r.controller.error(Ct(t.reason)), __privateMethod(this, _Se_instances, a_fn3).call(this, r, e);
        break;
      case ft.CANCEL_COMPLETE:
        t.success ? r.cancelCall.resolve() : r.cancelCall.reject(Ct(t.reason)), __privateMethod(this, _Se_instances, a_fn3).call(this, r, e);
        break;
      case ft.CANCEL:
        if (!a) break;
        const o = Ct(t.reason);
        Promise.try(a.onCancel || ms, o).then(function() {
          n.postMessage({
            sourceName: i,
            targetName: s,
            stream: ft.CANCEL_COMPLETE,
            streamId: e,
            success: true
          });
        }, function(l) {
          n.postMessage({
            sourceName: i,
            targetName: s,
            stream: ft.CANCEL_COMPLETE,
            streamId: e,
            reason: Ct(l)
          });
        }), a.sinkCapability.reject(o), a.isCancelled = true, delete this.streamSinks[e];
        break;
      default:
        throw new Error("Unexpected stream case");
    }
  };
  a_fn3 = async function(t, e) {
    var _a29, _b7, _c10;
    await Promise.allSettled([
      (_a29 = t.startCall) == null ? void 0 : _a29.promise,
      (_b7 = t.pullCall) == null ? void 0 : _b7.promise,
      (_c10 = t.cancelCall) == null ? void 0 : _c10.promise
    ]), delete this.streamControllers[e];
  };
  class Xs {
    constructor({ enableHWA: t = false }) {
      __privateAdd(this, _t25, false);
      __privateSet(this, _t25, t);
    }
    create(t, e) {
      if (t <= 0 || e <= 0) throw new Error("Invalid canvas size");
      const i = this._createCanvas(t, e);
      return {
        canvas: i,
        context: i.getContext("2d", {
          willReadFrequently: !__privateGet(this, _t25)
        })
      };
    }
    reset(t, e, i) {
      if (!t.canvas) throw new Error("Canvas is not specified");
      if (e <= 0 || i <= 0) throw new Error("Invalid canvas size");
      t.canvas.width = e, t.canvas.height = i;
    }
    destroy(t) {
      if (!t.canvas) throw new Error("Canvas is not specified");
      t.canvas.width = 0, t.canvas.height = 0, t.canvas = null, t.context = null;
    }
    _createCanvas(t, e) {
      Z("Abstract method `_createCanvas` called.");
    }
  }
  _t25 = new WeakMap();
  class sr extends Xs {
    constructor({ ownerDocument: t = globalThis.document, enableHWA: e = false }) {
      super({
        enableHWA: e
      }), this._document = t;
    }
    _createCanvas(t, e) {
      const i = this._document.createElement("canvas");
      return i.width = t, i.height = e, i;
    }
  }
  class Ys {
    constructor({ baseUrl: t = null, isCompressed: e = true }) {
      this.baseUrl = t, this.isCompressed = e;
    }
    async fetch({ name: t }) {
      if (!this.baseUrl) throw new Error("Ensure that the `cMapUrl` and `cMapPacked` API parameters are provided.");
      if (!t) throw new Error("CMap name must be specified.");
      const e = this.baseUrl + t + (this.isCompressed ? ".bcmap" : "");
      return this._fetch(e).then((i) => ({
        cMapData: i,
        isCompressed: this.isCompressed
      })).catch((i) => {
        throw new Error(`Unable to load ${this.isCompressed ? "binary " : ""}CMap at: ${e}`);
      });
    }
    async _fetch(t) {
      Z("Abstract method `_fetch` called.");
    }
  }
  class bs extends Ys {
    async _fetch(t) {
      const e = await De(t, this.isCompressed ? "bytes" : "text");
      return e instanceof Uint8Array ? e : ii(e);
    }
  }
  class qs {
    addFilter(t) {
      return "none";
    }
    addHCMFilter(t, e) {
      return "none";
    }
    addAlphaFilter(t) {
      return "none";
    }
    addLuminosityFilter(t) {
      return "none";
    }
    addHighlightHCMFilter(t, e, i, s, n) {
      return "none";
    }
    destroy(t = false) {
    }
  }
  class nr extends qs {
    constructor({ docId: t, ownerDocument: e = globalThis.document }) {
      super();
      __privateAdd(this, _nr_instances);
      __privateAdd(this, _t26);
      __privateAdd(this, _e20);
      __privateAdd(this, _s18);
      __privateAdd(this, _i14);
      __privateAdd(this, _a11);
      __privateAdd(this, _r11);
      __privateAdd(this, _n11, 0);
      __privateSet(this, _i14, t), __privateSet(this, _a11, e);
    }
    addFilter(t) {
      if (!t) return "none";
      let e = __privateGet(this, _nr_instances, o_get).get(t);
      if (e) return e;
      const [i, s, n] = __privateMethod(this, _nr_instances, u_fn5).call(this, t), r = t.length === 1 ? i : `${i}${s}${n}`;
      if (e = __privateGet(this, _nr_instances, o_get).get(r), e) return __privateGet(this, _nr_instances, o_get).set(t, e), e;
      const a = `g_${__privateGet(this, _i14)}_transfer_map_${__privateWrapper(this, _n11)._++}`, o = __privateMethod(this, _nr_instances, d_fn3).call(this, a);
      __privateGet(this, _nr_instances, o_get).set(t, o), __privateGet(this, _nr_instances, o_get).set(r, o);
      const l = __privateMethod(this, _nr_instances, g_fn3).call(this, a);
      return __privateMethod(this, _nr_instances, p_fn).call(this, i, s, n, l), o;
    }
    addHCMFilter(t, e) {
      var _a29;
      const i = `${t}-${e}`, s = "base";
      let n = __privateGet(this, _nr_instances, h_get).get(s);
      if ((n == null ? void 0 : n.key) === i || (n ? ((_a29 = n.filter) == null ? void 0 : _a29.remove(), n.key = i, n.url = "none", n.filter = null) : (n = {
        key: i,
        url: "none",
        filter: null
      }, __privateGet(this, _nr_instances, h_get).set(s, n)), !t || !e)) return n.url;
      const r = __privateMethod(this, _nr_instances, A_fn).call(this, t);
      t = R.makeHexColor(...r);
      const a = __privateMethod(this, _nr_instances, A_fn).call(this, e);
      if (e = R.makeHexColor(...a), __privateGet(this, _nr_instances, l_get).style.color = "", t === "#000000" && e === "#ffffff" || t === e) return n.url;
      const o = new Array(256);
      for (let g = 0; g <= 255; g++) {
        const b = g / 255;
        o[g] = b <= 0.03928 ? b / 12.92 : ((b + 0.055) / 1.055) ** 2.4;
      }
      const l = o.join(","), h = `g_${__privateGet(this, _i14)}_hcm_filter`, c = n.filter = __privateMethod(this, _nr_instances, g_fn3).call(this, h);
      __privateMethod(this, _nr_instances, p_fn).call(this, l, l, l, c), __privateMethod(this, _nr_instances, m_fn2).call(this, c);
      const f = (g, b) => {
        const m = r[g] / 255, w = a[g] / 255, A = new Array(b + 1);
        for (let S = 0; S <= b; S++) A[S] = m + S / b * (w - m);
        return A.join(",");
      };
      return __privateMethod(this, _nr_instances, p_fn).call(this, f(0, 5), f(1, 5), f(2, 5), c), n.url = __privateMethod(this, _nr_instances, d_fn3).call(this, h), n.url;
    }
    addAlphaFilter(t) {
      let e = __privateGet(this, _nr_instances, o_get).get(t);
      if (e) return e;
      const [i] = __privateMethod(this, _nr_instances, u_fn5).call(this, [
        t
      ]), s = `alpha_${i}`;
      if (e = __privateGet(this, _nr_instances, o_get).get(s), e) return __privateGet(this, _nr_instances, o_get).set(t, e), e;
      const n = `g_${__privateGet(this, _i14)}_alpha_map_${__privateWrapper(this, _n11)._++}`, r = __privateMethod(this, _nr_instances, d_fn3).call(this, n);
      __privateGet(this, _nr_instances, o_get).set(t, r), __privateGet(this, _nr_instances, o_get).set(s, r);
      const a = __privateMethod(this, _nr_instances, g_fn3).call(this, n);
      return __privateMethod(this, _nr_instances, b_fn).call(this, i, a), r;
    }
    addLuminosityFilter(t) {
      let e = __privateGet(this, _nr_instances, o_get).get(t || "luminosity");
      if (e) return e;
      let i, s;
      if (t ? ([i] = __privateMethod(this, _nr_instances, u_fn5).call(this, [
        t
      ]), s = `luminosity_${i}`) : s = "luminosity", e = __privateGet(this, _nr_instances, o_get).get(s), e) return __privateGet(this, _nr_instances, o_get).set(t, e), e;
      const n = `g_${__privateGet(this, _i14)}_luminosity_map_${__privateWrapper(this, _n11)._++}`, r = __privateMethod(this, _nr_instances, d_fn3).call(this, n);
      __privateGet(this, _nr_instances, o_get).set(t, r), __privateGet(this, _nr_instances, o_get).set(s, r);
      const a = __privateMethod(this, _nr_instances, g_fn3).call(this, n);
      return __privateMethod(this, _nr_instances, f_fn3).call(this, a), t && __privateMethod(this, _nr_instances, b_fn).call(this, i, a), r;
    }
    addHighlightHCMFilter(t, e, i, s, n) {
      var _a29;
      const r = `${e}-${i}-${s}-${n}`;
      let a = __privateGet(this, _nr_instances, h_get).get(t);
      if ((a == null ? void 0 : a.key) === r || (a ? ((_a29 = a.filter) == null ? void 0 : _a29.remove(), a.key = r, a.url = "none", a.filter = null) : (a = {
        key: r,
        url: "none",
        filter: null
      }, __privateGet(this, _nr_instances, h_get).set(t, a)), !e || !i)) return a.url;
      const [o, l] = [
        e,
        i
      ].map(__privateMethod(this, _nr_instances, A_fn).bind(this));
      let h = Math.round(0.2126 * o[0] + 0.7152 * o[1] + 0.0722 * o[2]), c = Math.round(0.2126 * l[0] + 0.7152 * l[1] + 0.0722 * l[2]), [f, g] = [
        s,
        n
      ].map(__privateMethod(this, _nr_instances, A_fn).bind(this));
      c < h && ([h, c, f, g] = [
        c,
        h,
        g,
        f
      ]), __privateGet(this, _nr_instances, l_get).style.color = "";
      const b = (A, S, E) => {
        const C = new Array(256), x = (c - h) / E, T = A / 255, k = (S - A) / (255 * E);
        let I = 0;
        for (let D = 0; D <= E; D++) {
          const B = Math.round(h + D * x), L = T + D * k;
          for (let Y = I; Y <= B; Y++) C[Y] = L;
          I = B + 1;
        }
        for (let D = I; D < 256; D++) C[D] = C[I - 1];
        return C.join(",");
      }, m = `g_${__privateGet(this, _i14)}_hcm_${t}_filter`, w = a.filter = __privateMethod(this, _nr_instances, g_fn3).call(this, m);
      return __privateMethod(this, _nr_instances, m_fn2).call(this, w), __privateMethod(this, _nr_instances, p_fn).call(this, b(f[0], g[0], 5), b(f[1], g[1], 5), b(f[2], g[2], 5), w), a.url = __privateMethod(this, _nr_instances, d_fn3).call(this, m), a.url;
    }
    destroy(t = false) {
      var _a29, _b7, _c10, _d12;
      t && ((_a29 = __privateGet(this, _r11)) == null ? void 0 : _a29.size) || ((_b7 = __privateGet(this, _s18)) == null ? void 0 : _b7.parentNode.parentNode.remove(), __privateSet(this, _s18, null), (_c10 = __privateGet(this, _e20)) == null ? void 0 : _c10.clear(), __privateSet(this, _e20, null), (_d12 = __privateGet(this, _r11)) == null ? void 0 : _d12.clear(), __privateSet(this, _r11, null), __privateSet(this, _n11, 0));
    }
  }
  _t26 = new WeakMap();
  _e20 = new WeakMap();
  _s18 = new WeakMap();
  _i14 = new WeakMap();
  _a11 = new WeakMap();
  _r11 = new WeakMap();
  _n11 = new WeakMap();
  _nr_instances = new WeakSet();
  o_get = function() {
    return __privateGet(this, _e20) || __privateSet(this, _e20, /* @__PURE__ */ new Map());
  };
  h_get = function() {
    return __privateGet(this, _r11) || __privateSet(this, _r11, /* @__PURE__ */ new Map());
  };
  l_get = function() {
    if (!__privateGet(this, _s18)) {
      const t = __privateGet(this, _a11).createElement("div"), { style: e } = t;
      e.visibility = "hidden", e.contain = "strict", e.width = e.height = 0, e.position = "absolute", e.top = e.left = 0, e.zIndex = -1;
      const i = __privateGet(this, _a11).createElementNS(Wt, "svg");
      i.setAttribute("width", 0), i.setAttribute("height", 0), __privateSet(this, _s18, __privateGet(this, _a11).createElementNS(Wt, "defs")), t.append(i), i.append(__privateGet(this, _s18)), __privateGet(this, _a11).body.append(t);
    }
    return __privateGet(this, _s18);
  };
  u_fn5 = function(t) {
    if (t.length === 1) {
      const o = t[0], l = new Array(256);
      for (let c = 0; c < 256; c++) l[c] = o[c] / 255;
      const h = l.join(",");
      return [
        h,
        h,
        h
      ];
    }
    const [e, i, s] = t, n = new Array(256), r = new Array(256), a = new Array(256);
    for (let o = 0; o < 256; o++) n[o] = e[o] / 255, r[o] = i[o] / 255, a[o] = s[o] / 255;
    return [
      n.join(","),
      r.join(","),
      a.join(",")
    ];
  };
  d_fn3 = function(t) {
    if (__privateGet(this, _t26) === void 0) {
      __privateSet(this, _t26, "");
      const e = __privateGet(this, _a11).URL;
      e !== __privateGet(this, _a11).baseURI && (si(e) ? j('#createUrl: ignore "data:"-URL for performance reasons.') : __privateSet(this, _t26, Ns(e, "")));
    }
    return `url(${__privateGet(this, _t26)}#${t})`;
  };
  f_fn3 = function(t) {
    const e = __privateGet(this, _a11).createElementNS(Wt, "feColorMatrix");
    e.setAttribute("type", "matrix"), e.setAttribute("values", "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.3 0.59 0.11 0 0"), t.append(e);
  };
  m_fn2 = function(t) {
    const e = __privateGet(this, _a11).createElementNS(Wt, "feColorMatrix");
    e.setAttribute("type", "matrix"), e.setAttribute("values", "0.2126 0.7152 0.0722 0 0 0.2126 0.7152 0.0722 0 0 0.2126 0.7152 0.0722 0 0 0 0 0 1 0"), t.append(e);
  };
  g_fn3 = function(t) {
    const e = __privateGet(this, _a11).createElementNS(Wt, "filter");
    return e.setAttribute("color-interpolation-filters", "sRGB"), e.setAttribute("id", t), __privateGet(this, _nr_instances, l_get).append(e), e;
  };
  c_fn = function(t, e, i) {
    const s = __privateGet(this, _a11).createElementNS(Wt, e);
    s.setAttribute("type", "discrete"), s.setAttribute("tableValues", i), t.append(s);
  };
  p_fn = function(t, e, i, s) {
    const n = __privateGet(this, _a11).createElementNS(Wt, "feComponentTransfer");
    s.append(n), __privateMethod(this, _nr_instances, c_fn).call(this, n, "feFuncR", t), __privateMethod(this, _nr_instances, c_fn).call(this, n, "feFuncG", e), __privateMethod(this, _nr_instances, c_fn).call(this, n, "feFuncB", i);
  };
  b_fn = function(t, e) {
    const i = __privateGet(this, _a11).createElementNS(Wt, "feComponentTransfer");
    e.append(i), __privateMethod(this, _nr_instances, c_fn).call(this, i, "feFuncA", t);
  };
  A_fn = function(t) {
    return __privateGet(this, _nr_instances, l_get).style.color = t, Re(getComputedStyle(__privateGet(this, _nr_instances, l_get)).getPropertyValue("color"));
  };
  class Ks {
    constructor({ baseUrl: t = null }) {
      this.baseUrl = t;
    }
    async fetch({ filename: t }) {
      if (!this.baseUrl) throw new Error("Ensure that the `standardFontDataUrl` API parameter is provided.");
      if (!t) throw new Error("Font filename must be specified.");
      const e = `${this.baseUrl}${t}`;
      return this._fetch(e).catch((i) => {
        throw new Error(`Unable to load font data at: ${e}`);
      });
    }
    async _fetch(t) {
      Z("Abstract method `_fetch` called.");
    }
  }
  class ys extends Ks {
    async _fetch(t) {
      return De(t, "bytes");
    }
  }
  class Js {
    constructor({ baseUrl: t = null }) {
      this.baseUrl = t;
    }
    async fetch({ filename: t }) {
      if (!this.baseUrl) throw new Error("Ensure that the `wasmUrl` API parameter is provided.");
      if (!t) throw new Error("Wasm filename must be specified.");
      const e = `${this.baseUrl}${t}`;
      return this._fetch(e).catch((i) => {
        throw new Error(`Unable to load wasm data at: ${e}`);
      });
    }
    async _fetch(t) {
      Z("Abstract method `_fetch` called.");
    }
  }
  class As extends Js {
    async _fetch(t) {
      return De(t, "bytes");
    }
  }
  xt && j("Please use the `legacy` build in Node.js environments.");
  async function Xi(d) {
    const e = await process.getBuiltinModule("fs").promises.readFile(d);
    return new Uint8Array(e);
  }
  class rr extends qs {
  }
  class ar extends Xs {
    _createCanvas(t, e) {
      return process.getBuiltinModule("module").createRequire(import.meta.url)("@napi-rs/canvas").createCanvas(t, e);
    }
  }
  class or extends Ys {
    async _fetch(t) {
      return Xi(t);
    }
  }
  class lr extends Ks {
    async _fetch(t) {
      return Xi(t);
    }
  }
  class hr extends Js {
    async _fetch(t) {
      return Xi(t);
    }
  }
  const ae = "__forcedDependency", { floor: ws, ceil: vs } = Math;
  function Ge(d, t, e, i, s, n) {
    d[t * 4 + 0] = Math.min(d[t * 4 + 0], e), d[t * 4 + 1] = Math.min(d[t * 4 + 1], i), d[t * 4 + 2] = Math.max(d[t * 4 + 2], s), d[t * 4 + 3] = Math.max(d[t * 4 + 3], n);
  }
  const Fi = new Uint32Array(new Uint8Array([
    255,
    255,
    0,
    0
  ]).buffer)[0];
  class cr {
    constructor(t, e) {
      __privateAdd(this, _t27);
      __privateAdd(this, _e21);
      __privateSet(this, _t27, t), __privateSet(this, _e21, e);
    }
    get length() {
      return __privateGet(this, _t27).length;
    }
    isEmpty(t) {
      return __privateGet(this, _t27)[t] === Fi;
    }
    minX(t) {
      return __privateGet(this, _e21)[t * 4 + 0] / 256;
    }
    minY(t) {
      return __privateGet(this, _e21)[t * 4 + 1] / 256;
    }
    maxX(t) {
      return (__privateGet(this, _e21)[t * 4 + 2] + 1) / 256;
    }
    maxY(t) {
      return (__privateGet(this, _e21)[t * 4 + 3] + 1) / 256;
    }
  }
  _t27 = new WeakMap();
  _e21 = new WeakMap();
  const ze = (d, t) => d == null ? void 0 : d.getOrInsertComputed(t, () => ({
    dependencies: /* @__PURE__ */ new Set(),
    isRenderingOperation: false
  }));
  class dr {
    constructor(t, e, i = false) {
      __privateAdd(this, _dr_instances);
      __privateAdd(this, _t28, {
        __proto__: null
      });
      __privateAdd(this, _e22, {
        __proto__: null,
        transform: [],
        moveText: [],
        sameLineText: [],
        [ae]: []
      });
      __privateAdd(this, _s19, /* @__PURE__ */ new Map());
      __privateAdd(this, _i15, []);
      __privateAdd(this, _a12, []);
      __privateAdd(this, _r12, [
        [
          1,
          0,
          0,
          1,
          0,
          0
        ]
      ]);
      __privateAdd(this, _n12, [
        -1 / 0,
        -1 / 0,
        1 / 0,
        1 / 0
      ]);
      __privateAdd(this, _o9, new Float64Array([
        1 / 0,
        1 / 0,
        -1 / 0,
        -1 / 0
      ]));
      __privateAdd(this, _h7, -1);
      __privateAdd(this, _l6, /* @__PURE__ */ new Set());
      __privateAdd(this, _u5, /* @__PURE__ */ new Map());
      __privateAdd(this, _d6, /* @__PURE__ */ new Map());
      __privateAdd(this, _f4);
      __privateAdd(this, _m3);
      __privateAdd(this, _g3);
      __privateAdd(this, _c4);
      __privateAdd(this, _p3);
      __privateSet(this, _f4, t.width), __privateSet(this, _m3, t.height), __privateMethod(this, _dr_instances, b_fn2).call(this, e), i && __privateSet(this, _p3, /* @__PURE__ */ new Map());
    }
    growOperationsCount(t) {
      t >= __privateGet(this, _c4).length && __privateMethod(this, _dr_instances, b_fn2).call(this, t, __privateGet(this, _c4));
    }
    save(t) {
      return __privateSet(this, _t28, {
        __proto__: __privateGet(this, _t28)
      }), __privateSet(this, _e22, {
        __proto__: __privateGet(this, _e22),
        transform: {
          __proto__: __privateGet(this, _e22).transform
        },
        moveText: {
          __proto__: __privateGet(this, _e22).moveText
        },
        sameLineText: {
          __proto__: __privateGet(this, _e22).sameLineText
        },
        [ae]: {
          __proto__: __privateGet(this, _e22)[ae]
        }
      }), __privateSet(this, _n12, {
        __proto__: __privateGet(this, _n12)
      }), __privateGet(this, _i15).push(t), this;
    }
    restore(t) {
      var _a29;
      const e = Object.getPrototypeOf(__privateGet(this, _t28));
      if (e === null) return this;
      __privateSet(this, _t28, e), __privateSet(this, _e22, Object.getPrototypeOf(__privateGet(this, _e22))), __privateSet(this, _n12, Object.getPrototypeOf(__privateGet(this, _n12)));
      const i = __privateGet(this, _i15).pop();
      return i !== void 0 && ((_a29 = ze(__privateGet(this, _p3), t)) == null ? void 0 : _a29.dependencies.add(i), __privateGet(this, _c4)[t] = __privateGet(this, _c4)[i]), this;
    }
    recordOpenMarker(t) {
      return __privateGet(this, _i15).push(t), this;
    }
    getOpenMarker() {
      return __privateGet(this, _i15).length === 0 ? null : __privateGet(this, _i15).at(-1);
    }
    recordCloseMarker(t) {
      var _a29;
      const e = __privateGet(this, _i15).pop();
      return e !== void 0 && ((_a29 = ze(__privateGet(this, _p3), t)) == null ? void 0 : _a29.dependencies.add(e), __privateGet(this, _c4)[t] = __privateGet(this, _c4)[e]), this;
    }
    beginMarkedContent(t) {
      return __privateGet(this, _a12).push(t), this;
    }
    endMarkedContent(t) {
      var _a29;
      const e = __privateGet(this, _a12).pop();
      return e !== void 0 && ((_a29 = ze(__privateGet(this, _p3), t)) == null ? void 0 : _a29.dependencies.add(e), __privateGet(this, _c4)[t] = __privateGet(this, _c4)[e]), this;
    }
    pushBaseTransform(t) {
      return __privateGet(this, _r12).push(R.multiplyByDOMMatrix(__privateGet(this, _r12).at(-1), t.getTransform())), this;
    }
    popBaseTransform() {
      return __privateGet(this, _r12).length > 1 && __privateGet(this, _r12).pop(), this;
    }
    recordSimpleData(t, e) {
      return __privateGet(this, _t28)[t] = e, this;
    }
    recordIncrementalData(t, e) {
      return __privateGet(this, _e22)[t].push(e), this;
    }
    resetIncrementalData(t, e) {
      return __privateGet(this, _e22)[t].length = 0, this;
    }
    recordNamedData(t, e) {
      return __privateGet(this, _s19).set(t, e), this;
    }
    recordSimpleDataFromNamed(t, e, i) {
      __privateGet(this, _t28)[t] = __privateGet(this, _s19).get(e) ?? i;
    }
    recordFutureForcedDependency(t, e) {
      return this.recordIncrementalData(ae, e), this;
    }
    inheritSimpleDataAsFutureForcedDependencies(t) {
      for (const e of t) e in __privateGet(this, _t28) && this.recordFutureForcedDependency(e, __privateGet(this, _t28)[e]);
      return this;
    }
    inheritPendingDependenciesAsFutureForcedDependencies() {
      for (const t of __privateGet(this, _l6)) this.recordFutureForcedDependency(ae, t);
      return this;
    }
    resetBBox(t) {
      return __privateGet(this, _h7) !== t && (__privateSet(this, _h7, t), __privateGet(this, _o9)[0] = 1 / 0, __privateGet(this, _o9)[1] = 1 / 0, __privateGet(this, _o9)[2] = -1 / 0, __privateGet(this, _o9)[3] = -1 / 0), this;
    }
    recordClipBox(t, e, i, s, n, r) {
      const a = R.multiplyByDOMMatrix(__privateGet(this, _r12).at(-1), e.getTransform()), o = [
        1 / 0,
        1 / 0,
        -1 / 0,
        -1 / 0
      ];
      R.axialAlignedBoundingBox([
        i,
        n,
        s,
        r
      ], a, o);
      const l = R.intersect(__privateGet(this, _n12), o);
      return l ? (__privateGet(this, _n12)[0] = l[0], __privateGet(this, _n12)[1] = l[1], __privateGet(this, _n12)[2] = l[2], __privateGet(this, _n12)[3] = l[3]) : (__privateGet(this, _n12)[0] = __privateGet(this, _n12)[1] = 1 / 0, __privateGet(this, _n12)[2] = __privateGet(this, _n12)[3] = -1 / 0), this;
    }
    recordBBox(t, e, i, s, n, r) {
      const a = __privateGet(this, _n12);
      if (a[0] === 1 / 0) return this;
      const o = R.multiplyByDOMMatrix(__privateGet(this, _r12).at(-1), e.getTransform());
      if (a[0] === -1 / 0) return R.axialAlignedBoundingBox([
        i,
        n,
        s,
        r
      ], o, __privateGet(this, _o9)), this;
      const l = [
        1 / 0,
        1 / 0,
        -1 / 0,
        -1 / 0
      ];
      return R.axialAlignedBoundingBox([
        i,
        n,
        s,
        r
      ], o, l), __privateGet(this, _o9)[0] = Math.min(__privateGet(this, _o9)[0], Math.max(l[0], a[0])), __privateGet(this, _o9)[1] = Math.min(__privateGet(this, _o9)[1], Math.max(l[1], a[1])), __privateGet(this, _o9)[2] = Math.max(__privateGet(this, _o9)[2], Math.min(l[2], a[2])), __privateGet(this, _o9)[3] = Math.max(__privateGet(this, _o9)[3], Math.min(l[3], a[3])), this;
    }
    recordCharacterBBox(t, e, i, s = 1, n = 0, r = 0, a) {
      const o = i.bbox;
      let l, h;
      if (o && (l = o[2] !== o[0] && o[3] !== o[1] && __privateGet(this, _d6).get(i), l !== false && (h = [
        0,
        0,
        0,
        0
      ], R.axialAlignedBoundingBox(o, i.fontMatrix, h), (s !== 1 || n !== 0 || r !== 0) && R.scaleMinMax([
        s,
        0,
        0,
        -s,
        n,
        r
      ], h), l))) return this.recordBBox(t, e, h[0], h[2], h[1], h[3]);
      if (!a) return this.recordFullPageBBox(t);
      const c = a();
      return o && h && l === void 0 && (l = h[0] <= n - c.actualBoundingBoxLeft && h[2] >= n + c.actualBoundingBoxRight && h[1] <= r - c.actualBoundingBoxAscent && h[3] >= r + c.actualBoundingBoxDescent, __privateGet(this, _d6).set(i, l), l) ? this.recordBBox(t, e, h[0], h[2], h[1], h[3]) : this.recordBBox(t, e, n - c.actualBoundingBoxLeft, n + c.actualBoundingBoxRight, r - c.actualBoundingBoxAscent, r + c.actualBoundingBoxDescent);
    }
    recordFullPageBBox(t) {
      return __privateGet(this, _o9)[0] = Math.max(0, __privateGet(this, _n12)[0]), __privateGet(this, _o9)[1] = Math.max(0, __privateGet(this, _n12)[1]), __privateGet(this, _o9)[2] = Math.min(__privateGet(this, _f4), __privateGet(this, _n12)[2]), __privateGet(this, _o9)[3] = Math.min(__privateGet(this, _m3), __privateGet(this, _n12)[3]), this;
    }
    getSimpleIndex(t) {
      return __privateGet(this, _t28)[t];
    }
    recordDependencies(t, e) {
      const i = __privateGet(this, _l6), s = __privateGet(this, _t28), n = __privateGet(this, _e22);
      for (const r of e) r in __privateGet(this, _t28) ? i.add(s[r]) : r in n && n[r].forEach(i.add, i);
      return this;
    }
    recordNamedDependency(t, e) {
      return __privateGet(this, _s19).has(e) && __privateGet(this, _l6).add(__privateGet(this, _s19).get(e)), this;
    }
    recordOperation(t, e = false) {
      if (this.recordDependencies(t, [
        ae
      ]), __privateGet(this, _p3)) {
        const i = ze(__privateGet(this, _p3), t), { dependencies: s } = i;
        __privateGet(this, _l6).forEach(s.add, s), __privateGet(this, _i15).forEach(s.add, s), __privateGet(this, _a12).forEach(s.add, s), s.delete(t), i.isRenderingOperation = true;
      }
      if (__privateGet(this, _h7) === t) {
        const i = ws(__privateGet(this, _o9)[0] * 256 / __privateGet(this, _f4)), s = ws(__privateGet(this, _o9)[1] * 256 / __privateGet(this, _m3)), n = vs(__privateGet(this, _o9)[2] * 256 / __privateGet(this, _f4)), r = vs(__privateGet(this, _o9)[3] * 256 / __privateGet(this, _m3));
        Ge(__privateGet(this, _g3), t, i, s, n, r);
        for (const a of __privateGet(this, _l6)) a !== t && Ge(__privateGet(this, _g3), a, i, s, n, r);
        for (const a of __privateGet(this, _i15)) a !== t && Ge(__privateGet(this, _g3), a, i, s, n, r);
        for (const a of __privateGet(this, _a12)) a !== t && Ge(__privateGet(this, _g3), a, i, s, n, r);
        e || (__privateGet(this, _l6).clear(), __privateSet(this, _h7, -1));
      }
      return this;
    }
    recordShowTextOperation(t, e = false) {
      const i = Array.from(__privateGet(this, _l6));
      this.recordOperation(t, e), this.recordIncrementalData("sameLineText", t);
      for (const s of i) this.recordIncrementalData("sameLineText", s);
      return this;
    }
    bboxToClipBoxDropOperation(t, e = false) {
      return __privateGet(this, _h7) === t && (__privateSet(this, _h7, -1), __privateGet(this, _n12)[0] = Math.max(__privateGet(this, _n12)[0], __privateGet(this, _o9)[0]), __privateGet(this, _n12)[1] = Math.max(__privateGet(this, _n12)[1], __privateGet(this, _o9)[1]), __privateGet(this, _n12)[2] = Math.min(__privateGet(this, _n12)[2], __privateGet(this, _o9)[2]), __privateGet(this, _n12)[3] = Math.min(__privateGet(this, _n12)[3], __privateGet(this, _o9)[3]), e || __privateGet(this, _l6).clear()), this;
    }
    _takePendingDependencies() {
      const t = __privateGet(this, _l6);
      return __privateSet(this, _l6, /* @__PURE__ */ new Set()), t;
    }
    _extractOperation(t) {
      const e = __privateGet(this, _u5).get(t);
      return __privateGet(this, _u5).delete(t), e;
    }
    _pushPendingDependencies(t) {
      for (const e of t) __privateGet(this, _l6).add(e);
    }
    take() {
      return __privateGet(this, _d6).clear(), new cr(__privateGet(this, _c4), __privateGet(this, _g3));
    }
    takeDebugMetadata() {
      return __privateGet(this, _p3);
    }
  }
  _t28 = new WeakMap();
  _e22 = new WeakMap();
  _s19 = new WeakMap();
  _i15 = new WeakMap();
  _a12 = new WeakMap();
  _r12 = new WeakMap();
  _n12 = new WeakMap();
  _o9 = new WeakMap();
  _h7 = new WeakMap();
  _l6 = new WeakMap();
  _u5 = new WeakMap();
  _d6 = new WeakMap();
  _f4 = new WeakMap();
  _m3 = new WeakMap();
  _g3 = new WeakMap();
  _c4 = new WeakMap();
  _p3 = new WeakMap();
  _dr_instances = new WeakSet();
  b_fn2 = function(t, e) {
    const i = new ArrayBuffer(t * 4);
    __privateSet(this, _g3, new Uint8ClampedArray(i)), __privateSet(this, _c4, new Uint32Array(i)), e && e.length > 0 ? (__privateGet(this, _c4).set(e), __privateGet(this, _c4).fill(Fi, e.length)) : __privateGet(this, _c4).fill(Fi);
  };
  const _Je = class _Je {
    constructor(t, e, i) {
      __privateAdd(this, _t29);
      __privateAdd(this, _e23);
      __privateAdd(this, _s20);
      __privateAdd(this, _i16, 0);
      __privateAdd(this, _a13, 0);
      if (t instanceof _Je && __privateGet(t, _s20) === !!i) return t;
      __privateSet(this, _t29, t), __privateSet(this, _e23, e), __privateSet(this, _s20, !!i);
    }
    growOperationsCount() {
      throw new Error("Unreachable");
    }
    save(t) {
      return __privateWrapper(this, _a13)._++, __privateGet(this, _t29).save(__privateGet(this, _e23)), this;
    }
    restore(t) {
      return __privateGet(this, _a13) > 0 && (__privateGet(this, _t29).restore(__privateGet(this, _e23)), __privateWrapper(this, _a13)._--), this;
    }
    recordOpenMarker(t) {
      return __privateWrapper(this, _i16)._++, this;
    }
    getOpenMarker() {
      return __privateGet(this, _i16) > 0 ? __privateGet(this, _e23) : __privateGet(this, _t29).getOpenMarker();
    }
    recordCloseMarker(t) {
      return __privateWrapper(this, _i16)._--, this;
    }
    beginMarkedContent(t) {
      return this;
    }
    endMarkedContent(t) {
      return this;
    }
    pushBaseTransform(t) {
      return __privateGet(this, _t29).pushBaseTransform(t), this;
    }
    popBaseTransform() {
      return __privateGet(this, _t29).popBaseTransform(), this;
    }
    recordSimpleData(t, e) {
      return __privateGet(this, _t29).recordSimpleData(t, __privateGet(this, _e23)), this;
    }
    recordIncrementalData(t, e) {
      return __privateGet(this, _t29).recordIncrementalData(t, __privateGet(this, _e23)), this;
    }
    resetIncrementalData(t, e) {
      return __privateGet(this, _t29).resetIncrementalData(t, __privateGet(this, _e23)), this;
    }
    recordNamedData(t, e) {
      return this;
    }
    recordSimpleDataFromNamed(t, e, i) {
      return __privateGet(this, _t29).recordSimpleDataFromNamed(t, e, __privateGet(this, _e23)), this;
    }
    recordFutureForcedDependency(t, e) {
      return __privateGet(this, _t29).recordFutureForcedDependency(t, __privateGet(this, _e23)), this;
    }
    inheritSimpleDataAsFutureForcedDependencies(t) {
      return __privateGet(this, _t29).inheritSimpleDataAsFutureForcedDependencies(t), this;
    }
    inheritPendingDependenciesAsFutureForcedDependencies() {
      return __privateGet(this, _t29).inheritPendingDependenciesAsFutureForcedDependencies(), this;
    }
    resetBBox(t) {
      return __privateGet(this, _s20) || __privateGet(this, _t29).resetBBox(__privateGet(this, _e23)), this;
    }
    recordClipBox(t, e, i, s, n, r) {
      return __privateGet(this, _s20) || __privateGet(this, _t29).recordClipBox(__privateGet(this, _e23), e, i, s, n, r), this;
    }
    recordBBox(t, e, i, s, n, r) {
      return __privateGet(this, _s20) || __privateGet(this, _t29).recordBBox(__privateGet(this, _e23), e, i, s, n, r), this;
    }
    recordCharacterBBox(t, e, i, s, n, r, a) {
      return __privateGet(this, _s20) || __privateGet(this, _t29).recordCharacterBBox(__privateGet(this, _e23), e, i, s, n, r, a), this;
    }
    recordFullPageBBox(t) {
      return __privateGet(this, _s20) || __privateGet(this, _t29).recordFullPageBBox(__privateGet(this, _e23)), this;
    }
    getSimpleIndex(t) {
      return __privateGet(this, _t29).getSimpleIndex(t);
    }
    recordDependencies(t, e) {
      return __privateGet(this, _t29).recordDependencies(__privateGet(this, _e23), e), this;
    }
    recordNamedDependency(t, e) {
      return __privateGet(this, _t29).recordNamedDependency(__privateGet(this, _e23), e), this;
    }
    recordOperation(t) {
      return __privateGet(this, _t29).recordOperation(__privateGet(this, _e23), true), this;
    }
    recordShowTextOperation(t) {
      return __privateGet(this, _t29).recordShowTextOperation(__privateGet(this, _e23), true), this;
    }
    bboxToClipBoxDropOperation(t) {
      return __privateGet(this, _s20) || __privateGet(this, _t29).bboxToClipBoxDropOperation(__privateGet(this, _e23), true), this;
    }
    take() {
      throw new Error("Unreachable");
    }
    takeDebugMetadata() {
      throw new Error("Unreachable");
    }
  };
  _t29 = new WeakMap();
  _e23 = new WeakMap();
  _s20 = new WeakMap();
  _i16 = new WeakMap();
  _a13 = new WeakMap();
  let Je = _Je;
  const Lt = {
    stroke: [
      "path",
      "transform",
      "filter",
      "strokeColor",
      "strokeAlpha",
      "lineWidth",
      "lineCap",
      "lineJoin",
      "miterLimit",
      "dash"
    ],
    fill: [
      "path",
      "transform",
      "filter",
      "fillColor",
      "fillAlpha",
      "globalCompositeOperation",
      "SMask"
    ],
    imageXObject: [
      "transform",
      "SMask",
      "filter",
      "fillAlpha",
      "strokeAlpha",
      "globalCompositeOperation"
    ],
    rawFillPath: [
      "filter",
      "fillColor",
      "fillAlpha"
    ],
    showText: [
      "transform",
      "leading",
      "charSpacing",
      "wordSpacing",
      "hScale",
      "textRise",
      "moveText",
      "textMatrix",
      "font",
      "fontObj",
      "filter",
      "fillColor",
      "textRenderingMode",
      "SMask",
      "fillAlpha",
      "strokeAlpha",
      "globalCompositeOperation",
      "sameLineText"
    ],
    transform: [
      "transform"
    ],
    transformAndFill: [
      "transform",
      "fillColor"
    ]
  }, Et = {
    FILL: "Fill",
    STROKE: "Stroke",
    SHADING: "Shading"
  };
  function Bi(d, t) {
    if (!t) return;
    const e = t[2] - t[0], i = t[3] - t[1], s = new Path2D();
    s.rect(t[0], t[1], e, i), d.clip(s);
  }
  class Yi {
    isModifyingCurrentTransform() {
      return false;
    }
    getPattern() {
      Z("Abstract method `getPattern` called.");
    }
  }
  class ur extends Yi {
    constructor(t) {
      super(), this._type = t[1], this._bbox = t[2], this._colorStops = t[3], this._p0 = t[4], this._p1 = t[5], this._r0 = t[6], this._r1 = t[7], this.matrix = null;
    }
    isOriginBased() {
      return this._p0[0] === 0 && this._p0[1] === 0 && (!this.isRadial() || this._p1[0] === 0 && this._p1[1] === 0);
    }
    isRadial() {
      return this._type === "radial";
    }
    _createGradient(t, e = null) {
      let i, s = this._p0, n = this._p1;
      if (e && (s = s.slice(), n = n.slice(), R.applyTransform(s, e), R.applyTransform(n, e)), this._type === "axial") i = t.createLinearGradient(s[0], s[1], n[0], n[1]);
      else if (this._type === "radial") {
        let r = this._r0, a = this._r1;
        if (e) {
          const o = new Float32Array(2);
          R.singularValueDecompose2dScale(e, o), r *= o[0], a *= o[0];
        }
        i = t.createRadialGradient(s[0], s[1], r, n[0], n[1], a);
      }
      for (const r of this._colorStops) i.addColorStop(r[0], r[1]);
      return i;
    }
    getPattern(t, e, i, s) {
      let n;
      if (s === Et.STROKE || s === Et.FILL) {
        if (this.isOriginBased()) {
          let f = R.transform(i, e.baseTransform);
          this.matrix && (f = R.transform(f, this.matrix));
          const g = 1e-3, b = Math.hypot(f[0], f[1]), m = Math.hypot(f[2], f[3]), w = (f[0] * f[2] + f[1] * f[3]) / (b * m);
          if (Math.abs(w) < g) if (this.isRadial()) {
            if (Math.abs(b - m) < g) return this._createGradient(t, f);
          } else return this._createGradient(t, f);
        }
        const r = e.current.getClippedPathBoundingBox(s, ot(t)) || [
          0,
          0,
          0,
          0
        ], a = Math.ceil(r[2] - r[0]) || 1, o = Math.ceil(r[3] - r[1]) || 1, l = e.cachedCanvases.getCanvas("pattern", a, o), h = l.context;
        h.clearRect(0, 0, h.canvas.width, h.canvas.height), h.beginPath(), h.rect(0, 0, h.canvas.width, h.canvas.height), h.translate(-r[0], -r[1]), i = R.transform(i, [
          1,
          0,
          0,
          1,
          r[0],
          r[1]
        ]), h.transform(...e.baseTransform), this.matrix && h.transform(...this.matrix), Bi(h, this._bbox), h.fillStyle = this._createGradient(h), h.fill(), n = t.createPattern(l.canvas, "no-repeat");
        const c = new DOMMatrix(i);
        n.setTransform(c);
      } else Bi(t, this._bbox), n = this._createGradient(t);
      return n;
    }
  }
  function Ei(d, t, e, i, s, n, r, a) {
    const o = t.coords, l = t.colors, h = d.data, c = d.width * 4;
    let f;
    o[e + 1] > o[i + 1] && (f = e, e = i, i = f, f = n, n = r, r = f), o[i + 1] > o[s + 1] && (f = i, i = s, s = f, f = r, r = a, a = f), o[e + 1] > o[i + 1] && (f = e, e = i, i = f, f = n, n = r, r = f);
    const g = (o[e] + t.offsetX) * t.scaleX, b = (o[e + 1] + t.offsetY) * t.scaleY, m = (o[i] + t.offsetX) * t.scaleX, w = (o[i + 1] + t.offsetY) * t.scaleY, A = (o[s] + t.offsetX) * t.scaleX, S = (o[s + 1] + t.offsetY) * t.scaleY;
    if (b >= S) return;
    const E = l[n], C = l[n + 1], x = l[n + 2], T = l[r], k = l[r + 1], I = l[r + 2], D = l[a], B = l[a + 1], L = l[a + 2], Y = Math.round(b), tt = Math.round(S);
    let V, rt, N, O, q, St, Bt, z;
    for (let G = Y; G <= tt; G++) {
      if (G < w) {
        const at = G < b ? 0 : (b - G) / (b - w);
        V = g - (g - m) * at, rt = E - (E - T) * at, N = C - (C - k) * at, O = x - (x - I) * at;
      } else {
        let at;
        G > S ? at = 1 : w === S ? at = 0 : at = (w - G) / (w - S), V = m - (m - A) * at, rt = T - (T - D) * at, N = k - (k - B) * at, O = I - (I - L) * at;
      }
      let it;
      G < b ? it = 0 : G > S ? it = 1 : it = (b - G) / (b - S), q = g - (g - A) * it, St = E - (E - D) * it, Bt = C - (C - B) * it, z = x - (x - L) * it;
      const Nt = Math.round(Math.min(V, q)), Yt = Math.round(Math.max(V, q));
      let _t74 = c * G + Nt * 4;
      for (let at = Nt; at <= Yt; at++) it = (V - at) / (V - q), it < 0 ? it = 0 : it > 1 && (it = 1), h[_t74++] = rt - (rt - St) * it | 0, h[_t74++] = N - (N - Bt) * it | 0, h[_t74++] = O - (O - z) * it | 0, h[_t74++] = 255;
    }
  }
  function fr(d, t, e) {
    const i = t.coords, s = t.colors;
    let n, r;
    switch (t.type) {
      case Ti.LATTICE:
        const a = t.verticesPerRow, o = Math.floor(i.length / a) - 1, l = a - 1;
        for (n = 0; n < o; n++) {
          let h = n * a;
          for (let c = 0; c < l; c++, h++) Ei(d, e, i[h], i[h + 1], i[h + a], s[h], s[h + 1], s[h + a]), Ei(d, e, i[h + a + 1], i[h + 1], i[h + a], s[h + a + 1], s[h + 1], s[h + a]);
        }
        break;
      case Ti.TRIANGLES:
        for (n = 0, r = i.length; n < r; n += 3) Ei(d, e, i[n], i[n + 1], i[n + 2], s[n], s[n + 1], s[n + 2]);
        break;
      default:
        throw new Error("illegal figure");
    }
  }
  class pr extends Yi {
    constructor(t) {
      super(), this._coords = t[2], this._colors = t[3], this._figures = t[4], this._bounds = t[5], this._bbox = t[6], this._background = t[7], this.matrix = null;
    }
    _createMeshCanvas(t, e, i) {
      const a = Math.floor(this._bounds[0]), o = Math.floor(this._bounds[1]), l = Math.ceil(this._bounds[2]) - a, h = Math.ceil(this._bounds[3]) - o, c = Math.min(Math.ceil(Math.abs(l * t[0] * 1.1)), 3e3), f = Math.min(Math.ceil(Math.abs(h * t[1] * 1.1)), 3e3), g = l / c, b = h / f, m = {
        coords: this._coords,
        colors: this._colors,
        offsetX: -a,
        offsetY: -o,
        scaleX: 1 / g,
        scaleY: 1 / b
      }, w = c + 4, A = f + 4, S = i.getCanvas("mesh", w, A), E = S.context, C = E.createImageData(c, f);
      if (e) {
        const T = C.data;
        for (let k = 0, I = T.length; k < I; k += 4) T[k] = e[0], T[k + 1] = e[1], T[k + 2] = e[2], T[k + 3] = 255;
      }
      for (const T of this._figures) fr(C, T, m);
      return E.putImageData(C, 2, 2), {
        canvas: S.canvas,
        offsetX: a - 2 * g,
        offsetY: o - 2 * b,
        scaleX: g,
        scaleY: b
      };
    }
    isModifyingCurrentTransform() {
      return true;
    }
    getPattern(t, e, i, s) {
      Bi(t, this._bbox);
      const n = new Float32Array(2);
      if (s === Et.SHADING) R.singularValueDecompose2dScale(ot(t), n);
      else if (this.matrix) {
        R.singularValueDecompose2dScale(this.matrix, n);
        const [a, o] = n;
        R.singularValueDecompose2dScale(e.baseTransform, n), n[0] *= a, n[1] *= o;
      } else R.singularValueDecompose2dScale(e.baseTransform, n);
      const r = this._createMeshCanvas(n, s === Et.SHADING ? null : this._background, e.cachedCanvases);
      return s !== Et.SHADING && (t.setTransform(...e.baseTransform), this.matrix && t.transform(...this.matrix)), t.translate(r.offsetX, r.offsetY), t.scale(r.scaleX, r.scaleY), t.createPattern(r.canvas, "no-repeat");
    }
  }
  class gr extends Yi {
    getPattern() {
      return "hotpink";
    }
  }
  function mr(d) {
    switch (d[0]) {
      case "RadialAxial":
        return new ur(d);
      case "Mesh":
        return new pr(d);
      case "Dummy":
        return new gr();
    }
    throw new Error(`Unknown IR type: ${d[0]}`);
  }
  const Es = {
    COLORED: 1,
    UNCOLORED: 2
  };
  const _qi = class _qi {
    constructor(t, e, i, s) {
      this.color = t[1], this.operatorList = t[2], this.matrix = t[3], this.bbox = t[4], this.xstep = t[5], this.ystep = t[6], this.paintType = t[7], this.tilingType = t[8], this.ctx = e, this.canvasGraphicsFactory = i, this.baseTransform = s;
    }
    createPatternCanvas(t, e) {
      var _a29, _b7;
      const { bbox: i, operatorList: s, paintType: n, tilingType: r, color: a, canvasGraphicsFactory: o } = this;
      let { xstep: l, ystep: h } = this;
      l = Math.abs(l), h = Math.abs(h), ei("TilingType: " + r);
      const c = i[0], f = i[1], g = i[2], b = i[3], m = g - c, w = b - f, A = new Float32Array(2);
      R.singularValueDecompose2dScale(this.matrix, A);
      const [S, E] = A;
      R.singularValueDecompose2dScale(this.baseTransform, A);
      const C = S * A[0], x = E * A[1];
      let T = m, k = w, I = false, D = false;
      const B = Math.ceil(l * C), L = Math.ceil(h * x), Y = Math.ceil(m * C), tt = Math.ceil(w * x);
      B >= Y ? T = l : I = true, L >= tt ? k = h : D = true;
      const V = this.getSizeAndScale(T, this.ctx.canvas.width, C), rt = this.getSizeAndScale(k, this.ctx.canvas.height, x), N = t.cachedCanvases.getCanvas("pattern", V.size, rt.size), O = N.context, q = o.createCanvasGraphics(O, e);
      if (q.groupLevel = t.groupLevel, this.setFillAndStrokeStyleToContext(q, n, a), O.translate(-V.scale * c, -rt.scale * f), q.transform(0, V.scale, 0, 0, rt.scale, 0, 0), O.save(), (_a29 = q.dependencyTracker) == null ? void 0 : _a29.save(), this.clipBbox(q, c, f, g, b), q.baseTransform = ot(q.ctx), q.executeOperatorList(s), q.endDrawing(), (_b7 = q.dependencyTracker) == null ? void 0 : _b7.restore(), O.restore(), I || D) {
        const St = N.canvas;
        I && (T = l), D && (k = h);
        const Bt = this.getSizeAndScale(T, this.ctx.canvas.width, C), z = this.getSizeAndScale(k, this.ctx.canvas.height, x), G = Bt.size, it = z.size, Nt = t.cachedCanvases.getCanvas("pattern-workaround", G, it), Yt = Nt.context, _t74 = I ? Math.floor(m / l) : 0, at = D ? Math.floor(w / h) : 0;
        for (let It = 0; It <= _t74; It++) for (let Vt = 0; Vt <= at; Vt++) Yt.drawImage(St, G * It, it * Vt, G, it, 0, 0, G, it);
        return {
          canvas: Nt.canvas,
          scaleX: Bt.scale,
          scaleY: z.scale,
          offsetX: c,
          offsetY: f
        };
      }
      return {
        canvas: N.canvas,
        scaleX: V.scale,
        scaleY: rt.scale,
        offsetX: c,
        offsetY: f
      };
    }
    getSizeAndScale(t, e, i) {
      const s = Math.max(_qi.MAX_PATTERN_SIZE, e);
      let n = Math.ceil(t * i);
      return n >= s ? n = s : i = n / t, {
        scale: i,
        size: n
      };
    }
    clipBbox(t, e, i, s, n) {
      const r = s - e, a = n - i;
      t.ctx.rect(e, i, r, a), R.axialAlignedBoundingBox([
        e,
        i,
        s,
        n
      ], ot(t.ctx), t.current.minMax), t.clip(), t.endPath();
    }
    setFillAndStrokeStyleToContext(t, e, i) {
      const s = t.ctx, n = t.current;
      switch (e) {
        case Es.COLORED:
          const { fillStyle: r, strokeStyle: a } = this.ctx;
          s.fillStyle = n.fillColor = r, s.strokeStyle = n.strokeColor = a;
          break;
        case Es.UNCOLORED:
          s.fillStyle = s.strokeStyle = i, n.fillColor = n.strokeColor = i;
          break;
        default:
          throw new Pn(`Unsupported paint type: ${e}`);
      }
    }
    isModifyingCurrentTransform() {
      return false;
    }
    getPattern(t, e, i, s, n) {
      let r = i;
      s !== Et.SHADING && (r = R.transform(r, e.baseTransform), this.matrix && (r = R.transform(r, this.matrix)));
      const a = this.createPatternCanvas(e, n);
      let o = new DOMMatrix(r);
      o = o.translate(a.offsetX, a.offsetY), o = o.scale(1 / a.scaleX, 1 / a.scaleY);
      const l = t.createPattern(a.canvas, "repeat");
      return l.setTransform(o), l;
    }
  };
  __publicField(_qi, "MAX_PATTERN_SIZE", 3e3);
  let qi = _qi;
  function br({ src: d, srcPos: t = 0, dest: e, width: i, height: s, nonBlackColor: n = 4294967295, inverseDecode: r = false }) {
    const a = mt.isLittleEndian ? 4278190080 : 255, [o, l] = r ? [
      n,
      a
    ] : [
      a,
      n
    ], h = i >> 3, c = i & 7, f = o ^ l, g = d.length;
    e = new Uint32Array(e.buffer);
    let b = 0;
    for (let m = 0; m < s; ++m) {
      for (const A = t + h; t < A; ++t, b += 8) {
        const S = d[t];
        e[b] = o ^ -(S >> 7 & 1) & f, e[b + 1] = o ^ -(S >> 6 & 1) & f, e[b + 2] = o ^ -(S >> 5 & 1) & f, e[b + 3] = o ^ -(S >> 4 & 1) & f, e[b + 4] = o ^ -(S >> 3 & 1) & f, e[b + 5] = o ^ -(S >> 2 & 1) & f, e[b + 6] = o ^ -(S >> 1 & 1) & f, e[b + 7] = o ^ -(S & 1) & f;
      }
      if (c === 0) continue;
      const w = t < g ? d[t++] : 255;
      for (let A = 0; A < c; ++A, ++b) e[b] = o ^ -(w >> 7 - A & 1) & f;
    }
    return {
      srcPos: t,
      destPos: b
    };
  }
  const Ss = 16, xs = 100, yr = 15, _s = 10, Tt = 16, Si = new DOMMatrix(), Mt = new Float32Array(2), de = new Float32Array([
    1 / 0,
    1 / 0,
    -1 / 0,
    -1 / 0
  ]);
  function Ar(d, t) {
    if (d._removeMirroring) throw new Error("Context is already forwarding operations.");
    d.__originalSave = d.save, d.__originalRestore = d.restore, d.__originalRotate = d.rotate, d.__originalScale = d.scale, d.__originalTranslate = d.translate, d.__originalTransform = d.transform, d.__originalSetTransform = d.setTransform, d.__originalResetTransform = d.resetTransform, d.__originalClip = d.clip, d.__originalMoveTo = d.moveTo, d.__originalLineTo = d.lineTo, d.__originalBezierCurveTo = d.bezierCurveTo, d.__originalRect = d.rect, d.__originalClosePath = d.closePath, d.__originalBeginPath = d.beginPath, d._removeMirroring = () => {
      d.save = d.__originalSave, d.restore = d.__originalRestore, d.rotate = d.__originalRotate, d.scale = d.__originalScale, d.translate = d.__originalTranslate, d.transform = d.__originalTransform, d.setTransform = d.__originalSetTransform, d.resetTransform = d.__originalResetTransform, d.clip = d.__originalClip, d.moveTo = d.__originalMoveTo, d.lineTo = d.__originalLineTo, d.bezierCurveTo = d.__originalBezierCurveTo, d.rect = d.__originalRect, d.closePath = d.__originalClosePath, d.beginPath = d.__originalBeginPath, delete d._removeMirroring;
    }, d.save = function() {
      t.save(), this.__originalSave();
    }, d.restore = function() {
      t.restore(), this.__originalRestore();
    }, d.translate = function(e, i) {
      t.translate(e, i), this.__originalTranslate(e, i);
    }, d.scale = function(e, i) {
      t.scale(e, i), this.__originalScale(e, i);
    }, d.transform = function(e, i, s, n, r, a) {
      t.transform(e, i, s, n, r, a), this.__originalTransform(e, i, s, n, r, a);
    }, d.setTransform = function(e, i, s, n, r, a) {
      t.setTransform(e, i, s, n, r, a), this.__originalSetTransform(e, i, s, n, r, a);
    }, d.resetTransform = function() {
      t.resetTransform(), this.__originalResetTransform();
    }, d.rotate = function(e) {
      t.rotate(e), this.__originalRotate(e);
    }, d.clip = function(e) {
      t.clip(e), this.__originalClip(e);
    }, d.moveTo = function(e, i) {
      t.moveTo(e, i), this.__originalMoveTo(e, i);
    }, d.lineTo = function(e, i) {
      t.lineTo(e, i), this.__originalLineTo(e, i);
    }, d.bezierCurveTo = function(e, i, s, n, r, a) {
      t.bezierCurveTo(e, i, s, n, r, a), this.__originalBezierCurveTo(e, i, s, n, r, a);
    }, d.rect = function(e, i, s, n) {
      t.rect(e, i, s, n), this.__originalRect(e, i, s, n);
    }, d.closePath = function() {
      t.closePath(), this.__originalClosePath();
    }, d.beginPath = function() {
      t.beginPath(), this.__originalBeginPath();
    };
  }
  class wr {
    constructor(t) {
      this.canvasFactory = t, this.cache = /* @__PURE__ */ Object.create(null);
    }
    getCanvas(t, e, i) {
      let s;
      return this.cache[t] !== void 0 ? (s = this.cache[t], this.canvasFactory.reset(s, e, i)) : (s = this.canvasFactory.create(e, i), this.cache[t] = s), s;
    }
    delete(t) {
      delete this.cache[t];
    }
    clear() {
      for (const t in this.cache) {
        const e = this.cache[t];
        this.canvasFactory.destroy(e), delete this.cache[t];
      }
    }
  }
  function Ve(d, t, e, i, s, n, r, a, o, l) {
    const [h, c, f, g, b, m] = ot(d);
    if (c === 0 && f === 0) {
      const S = r * h + b, E = Math.round(S), C = a * g + m, x = Math.round(C), T = (r + o) * h + b, k = Math.abs(Math.round(T) - E) || 1, I = (a + l) * g + m, D = Math.abs(Math.round(I) - x) || 1;
      return d.setTransform(Math.sign(h), 0, 0, Math.sign(g), E, x), d.drawImage(t, e, i, s, n, 0, 0, k, D), d.setTransform(h, c, f, g, b, m), [
        k,
        D
      ];
    }
    if (h === 0 && g === 0) {
      const S = a * f + b, E = Math.round(S), C = r * c + m, x = Math.round(C), T = (a + l) * f + b, k = Math.abs(Math.round(T) - E) || 1, I = (r + o) * c + m, D = Math.abs(Math.round(I) - x) || 1;
      return d.setTransform(0, Math.sign(c), Math.sign(f), 0, E, x), d.drawImage(t, e, i, s, n, 0, 0, D, k), d.setTransform(h, c, f, g, b, m), [
        D,
        k
      ];
    }
    d.drawImage(t, e, i, s, n, r, a, o, l);
    const w = Math.hypot(h, c), A = Math.hypot(f, g);
    return [
      w * o,
      A * l
    ];
  }
  class Cs {
    constructor(t, e, i) {
      __publicField(this, "alphaIsShape", false);
      __publicField(this, "fontSize", 0);
      __publicField(this, "fontSizeScale", 1);
      __publicField(this, "textMatrix", null);
      __publicField(this, "textMatrixScale", 1);
      __publicField(this, "fontMatrix", Ci);
      __publicField(this, "leading", 0);
      __publicField(this, "x", 0);
      __publicField(this, "y", 0);
      __publicField(this, "lineX", 0);
      __publicField(this, "lineY", 0);
      __publicField(this, "charSpacing", 0);
      __publicField(this, "wordSpacing", 0);
      __publicField(this, "textHScale", 1);
      __publicField(this, "textRenderingMode", gt.FILL);
      __publicField(this, "textRise", 0);
      __publicField(this, "fillColor", "#000000");
      __publicField(this, "strokeColor", "#000000");
      __publicField(this, "patternFill", false);
      __publicField(this, "patternStroke", false);
      __publicField(this, "fillAlpha", 1);
      __publicField(this, "strokeAlpha", 1);
      __publicField(this, "lineWidth", 1);
      __publicField(this, "activeSMask", null);
      __publicField(this, "transferMaps", "none");
      i == null ? void 0 : i(this), this.clipBox = new Float32Array([
        0,
        0,
        t,
        e
      ]), this.minMax = de.slice();
    }
    clone() {
      const t = Object.create(this);
      return t.clipBox = this.clipBox.slice(), t.minMax = this.minMax.slice(), t;
    }
    getPathBoundingBox(t = Et.FILL, e = null) {
      const i = this.minMax.slice();
      if (t === Et.STROKE) {
        e || Z("Stroke bounding box must include transform."), R.singularValueDecompose2dScale(e, Mt);
        const s = Mt[0] * this.lineWidth / 2, n = Mt[1] * this.lineWidth / 2;
        i[0] -= s, i[1] -= n, i[2] += s, i[3] += n;
      }
      return i;
    }
    updateClipFromPath() {
      const t = R.intersect(this.clipBox, this.getPathBoundingBox());
      this.startNewPathAndClipBox(t || [
        0,
        0,
        0,
        0
      ]);
    }
    isEmptyClip() {
      return this.minMax[0] === 1 / 0;
    }
    startNewPathAndClipBox(t) {
      this.clipBox.set(t, 0), this.minMax.set(de, 0);
    }
    getClippedPathBoundingBox(t = Et.FILL, e = null) {
      return R.intersect(this.clipBox, this.getPathBoundingBox(t, e));
    }
  }
  function Ts(d, t) {
    if (t instanceof ImageData) {
      d.putImageData(t, 0, 0);
      return;
    }
    const e = t.height, i = t.width, s = e % Tt, n = (e - s) / Tt, r = s === 0 ? n : n + 1, a = d.createImageData(i, Tt);
    let o = 0, l;
    const h = t.data, c = a.data;
    let f, g, b, m;
    if (t.kind === qe.GRAYSCALE_1BPP) {
      const w = h.byteLength, A = new Uint32Array(c.buffer, 0, c.byteLength >> 2), S = A.length, E = i + 7 >> 3, C = 4294967295, x = mt.isLittleEndian ? 4278190080 : 255;
      for (f = 0; f < r; f++) {
        for (b = f < n ? Tt : s, l = 0, g = 0; g < b; g++) {
          const T = w - o;
          let k = 0;
          const I = T > E ? i : T * 8 - 7, D = I & -8;
          let B = 0, L = 0;
          for (; k < D; k += 8) L = h[o++], A[l++] = L & 128 ? C : x, A[l++] = L & 64 ? C : x, A[l++] = L & 32 ? C : x, A[l++] = L & 16 ? C : x, A[l++] = L & 8 ? C : x, A[l++] = L & 4 ? C : x, A[l++] = L & 2 ? C : x, A[l++] = L & 1 ? C : x;
          for (; k < I; k++) B === 0 && (L = h[o++], B = 128), A[l++] = L & B ? C : x, B >>= 1;
        }
        for (; l < S; ) A[l++] = 0;
        d.putImageData(a, 0, f * Tt);
      }
    } else if (t.kind === qe.RGBA_32BPP) {
      for (g = 0, m = i * Tt * 4, f = 0; f < n; f++) c.set(h.subarray(o, o + m)), o += m, d.putImageData(a, 0, g), g += Tt;
      f < r && (m = i * s * 4, c.set(h.subarray(o, o + m)), d.putImageData(a, 0, g));
    } else if (t.kind === qe.RGB_24BPP) for (b = Tt, m = i * b, f = 0; f < r; f++) {
      for (f >= n && (b = s, m = i * b), l = 0, g = m; g--; ) c[l++] = h[o++], c[l++] = h[o++], c[l++] = h[o++], c[l++] = 255;
      d.putImageData(a, 0, f * Tt);
    }
    else throw new Error(`bad image kind: ${t.kind}`);
  }
  function Ps(d, t) {
    if (t.bitmap) {
      d.drawImage(t.bitmap, 0, 0);
      return;
    }
    const e = t.height, i = t.width, s = e % Tt, n = (e - s) / Tt, r = s === 0 ? n : n + 1, a = d.createImageData(i, Tt);
    let o = 0;
    const l = t.data, h = a.data;
    for (let c = 0; c < r; c++) {
      const f = c < n ? Tt : s;
      ({ srcPos: o } = br({
        src: l,
        srcPos: o,
        dest: h,
        width: i,
        height: f,
        nonBlackColor: 0
      })), d.putImageData(a, 0, c * Tt);
    }
  }
  function Ae(d, t) {
    const e = [
      "strokeStyle",
      "fillStyle",
      "fillRule",
      "globalAlpha",
      "lineWidth",
      "lineCap",
      "lineJoin",
      "miterLimit",
      "globalCompositeOperation",
      "font",
      "filter"
    ];
    for (const i of e) d[i] !== void 0 && (t[i] = d[i]);
    d.setLineDash !== void 0 && (t.setLineDash(d.getLineDash()), t.lineDashOffset = d.lineDashOffset);
  }
  function We(d) {
    d.strokeStyle = d.fillStyle = "#000000", d.fillRule = "nonzero", d.globalAlpha = 1, d.lineWidth = 1, d.lineCap = "butt", d.lineJoin = "miter", d.miterLimit = 10, d.globalCompositeOperation = "source-over", d.font = "10px sans-serif", d.setLineDash !== void 0 && (d.setLineDash([]), d.lineDashOffset = 0);
    const { filter: t } = d;
    t !== "none" && t !== "" && (d.filter = "none");
  }
  function ks(d, t) {
    if (t) return true;
    R.singularValueDecompose2dScale(d, Mt);
    const e = Math.fround(zt.pixelRatio * me.PDF_TO_CSS_UNITS);
    return Mt[0] <= e && Mt[1] <= e;
  }
  const vr = [
    "butt",
    "round",
    "square"
  ], Er = [
    "miter",
    "round",
    "bevel"
  ], Sr = {}, Ms = {};
  const _ge = class _ge {
    constructor(t, e, i, s, n, { optionalContentConfig: r, markedContentStack: a = null }, o, l, h) {
      __privateAdd(this, _ge_instances);
      this.ctx = t, this.current = new Cs(this.ctx.canvas.width, this.ctx.canvas.height), this.stateStack = [], this.pendingClip = null, this.pendingEOFill = false, this.commonObjs = e, this.objs = i, this.canvasFactory = s, this.filterFactory = n, this.groupStack = [], this.baseTransform = null, this.baseTransformStack = [], this.groupLevel = 0, this.smaskStack = [], this.smaskCounter = 0, this.tempSMask = null, this.suspendedCtx = null, this.contentVisible = true, this.markedContentStack = a || [], this.optionalContentConfig = r, this.cachedCanvases = new wr(this.canvasFactory), this.cachedPatterns = /* @__PURE__ */ new Map(), this.annotationCanvasMap = o, this.viewportScale = 1, this.outputScaleX = 1, this.outputScaleY = 1, this.pageColors = l, this._cachedScaleForStroking = [
        -1,
        0
      ], this._cachedGetSinglePixelWidth = null, this._cachedBitmapsMap = /* @__PURE__ */ new Map(), this.dependencyTracker = h ?? null;
    }
    getObject(t, e, i = null) {
      var _a29;
      return typeof e == "string" ? ((_a29 = this.dependencyTracker) == null ? void 0 : _a29.recordNamedDependency(t, e), e.startsWith("g_") ? this.commonObjs.get(e) : this.objs.get(e)) : i;
    }
    beginDrawing({ transform: t, viewport: e, transparency: i = false, background: s = null }) {
      const n = this.ctx.canvas.width, r = this.ctx.canvas.height, a = this.ctx.fillStyle;
      if (this.ctx.fillStyle = s || "#ffffff", this.ctx.fillRect(0, 0, n, r), this.ctx.fillStyle = a, i) {
        const o = this.cachedCanvases.getCanvas("transparent", n, r);
        this.compositeCtx = this.ctx, this.transparentCanvas = o.canvas, this.ctx = o.context, this.ctx.save(), this.ctx.transform(...ot(this.compositeCtx));
      }
      this.ctx.save(), We(this.ctx), t && (this.ctx.transform(...t), this.outputScaleX = t[0], this.outputScaleY = t[0]), this.ctx.transform(...e.transform), this.viewportScale = e.scale, this.baseTransform = ot(this.ctx);
    }
    executeOperatorList(t, e, i, s, n) {
      var _a29;
      const r = t.argsArray, a = t.fnArray;
      let o = e || 0;
      const l = r.length;
      if (l === o) return o;
      const h = l - o > _s && typeof i == "function", c = h ? Date.now() + yr : 0;
      let f = 0;
      const g = this.commonObjs, b = this.objs;
      let m, w;
      for (; ; ) {
        if (s !== void 0 && o === s.nextBreakPoint) return s.breakIt(o, i), o;
        if (!n || n(o)) if (m = a[o], w = r[o] ?? null, m !== Pe.dependency) w === null ? this[m](o) : this[m](o, ...w);
        else for (const A of w) {
          (_a29 = this.dependencyTracker) == null ? void 0 : _a29.recordNamedData(A, o);
          const S = A.startsWith("g_") ? g : b;
          if (!S.has(A)) return S.get(A, i), o;
        }
        if (o++, o === l) return o;
        if (h && ++f > _s) {
          if (Date.now() > c) return i(), o;
          f = 0;
        }
      }
    }
    endDrawing() {
      __privateMethod(this, _ge_instances, t_fn3).call(this), this.cachedCanvases.clear(), this.cachedPatterns.clear();
      for (const t of this._cachedBitmapsMap.values()) {
        for (const e of t.values()) typeof HTMLCanvasElement < "u" && e instanceof HTMLCanvasElement && (e.width = e.height = 0);
        t.clear();
      }
      this._cachedBitmapsMap.clear(), __privateMethod(this, _ge_instances, e_fn3).call(this);
    }
    _scaleImage(t, e) {
      const i = t.width ?? t.displayWidth, s = t.height ?? t.displayHeight;
      let n = Math.max(Math.hypot(e[0], e[1]), 1), r = Math.max(Math.hypot(e[2], e[3]), 1), a = i, o = s, l = "prescale1", h, c;
      for (; n > 2 && a > 1 || r > 2 && o > 1; ) {
        let f = a, g = o;
        n > 2 && a > 1 && (f = a >= 16384 ? Math.floor(a / 2) - 1 || 1 : Math.ceil(a / 2), n /= a / f), r > 2 && o > 1 && (g = o >= 16384 ? Math.floor(o / 2) - 1 || 1 : Math.ceil(o) / 2, r /= o / g), h = this.cachedCanvases.getCanvas(l, f, g), c = h.context, c.clearRect(0, 0, f, g), c.drawImage(t, 0, 0, a, o, 0, 0, f, g), t = h.canvas, a = f, o = g, l = l === "prescale1" ? "prescale2" : "prescale1";
      }
      return {
        img: t,
        paintWidth: a,
        paintHeight: o
      };
    }
    _createMaskCanvas(t, e) {
      var _a29, _b7;
      const i = this.ctx, { width: s, height: n } = e, r = this.current.fillColor, a = this.current.patternFill, o = ot(i);
      let l, h, c, f;
      if ((e.bitmap || e.data) && e.count > 1) {
        const B = e.bitmap || e.data.buffer;
        h = JSON.stringify(a ? o : [
          o.slice(0, 4),
          r
        ]), l = this._cachedBitmapsMap.getOrInsertComputed(B, $i);
        const L = l.get(h);
        if (L && !a) {
          const Y = Math.round(Math.min(o[0], o[2]) + o[4]), tt = Math.round(Math.min(o[1], o[3]) + o[5]);
          return (_a29 = this.dependencyTracker) == null ? void 0 : _a29.recordDependencies(t, Lt.transformAndFill), {
            canvas: L,
            offsetX: Y,
            offsetY: tt
          };
        }
        c = L;
      }
      c || (f = this.cachedCanvases.getCanvas("maskCanvas", s, n), Ps(f.context, e));
      let g = R.transform(o, [
        1 / s,
        0,
        0,
        -1 / n,
        0,
        0
      ]);
      g = R.transform(g, [
        1,
        0,
        0,
        1,
        0,
        -n
      ]);
      const b = de.slice();
      R.axialAlignedBoundingBox([
        0,
        0,
        s,
        n
      ], g, b);
      const [m, w, A, S] = b, E = Math.round(A - m) || 1, C = Math.round(S - w) || 1, x = this.cachedCanvases.getCanvas("fillCanvas", E, C), T = x.context, k = m, I = w;
      T.translate(-k, -I), T.transform(...g), c || (c = this._scaleImage(f.canvas, Ht(T)), c = c.img, l && a && l.set(h, c)), T.imageSmoothingEnabled = ks(ot(T), e.interpolate), Ve(T, c, 0, 0, c.width, c.height, 0, 0, s, n), T.globalCompositeOperation = "source-in";
      const D = R.transform(Ht(T), [
        1,
        0,
        0,
        1,
        -k,
        -I
      ]);
      return T.fillStyle = a ? r.getPattern(i, this, D, Et.FILL, t) : r, T.fillRect(0, 0, s, n), l && !a && (this.cachedCanvases.delete("fillCanvas"), l.set(h, x.canvas)), (_b7 = this.dependencyTracker) == null ? void 0 : _b7.recordDependencies(t, Lt.transformAndFill), {
        canvas: x.canvas,
        offsetX: Math.round(k),
        offsetY: Math.round(I)
      };
    }
    setLineWidth(t, e) {
      var _a29;
      (_a29 = this.dependencyTracker) == null ? void 0 : _a29.recordSimpleData("lineWidth", t), e !== this.current.lineWidth && (this._cachedScaleForStroking[0] = -1), this.current.lineWidth = e, this.ctx.lineWidth = e;
    }
    setLineCap(t, e) {
      var _a29;
      (_a29 = this.dependencyTracker) == null ? void 0 : _a29.recordSimpleData("lineCap", t), this.ctx.lineCap = vr[e];
    }
    setLineJoin(t, e) {
      var _a29;
      (_a29 = this.dependencyTracker) == null ? void 0 : _a29.recordSimpleData("lineJoin", t), this.ctx.lineJoin = Er[e];
    }
    setMiterLimit(t, e) {
      var _a29;
      (_a29 = this.dependencyTracker) == null ? void 0 : _a29.recordSimpleData("miterLimit", t), this.ctx.miterLimit = e;
    }
    setDash(t, e, i) {
      var _a29;
      (_a29 = this.dependencyTracker) == null ? void 0 : _a29.recordSimpleData("dash", t);
      const s = this.ctx;
      s.setLineDash !== void 0 && (s.setLineDash(e), s.lineDashOffset = i);
    }
    setRenderingIntent(t, e) {
    }
    setFlatness(t, e) {
    }
    setGState(t, e) {
      var _a29, _b7, _c10, _d12, _e54;
      for (const [i, s] of e) switch (i) {
        case "LW":
          this.setLineWidth(t, s);
          break;
        case "LC":
          this.setLineCap(t, s);
          break;
        case "LJ":
          this.setLineJoin(t, s);
          break;
        case "ML":
          this.setMiterLimit(t, s);
          break;
        case "D":
          this.setDash(t, s[0], s[1]);
          break;
        case "RI":
          this.setRenderingIntent(t, s);
          break;
        case "FL":
          this.setFlatness(t, s);
          break;
        case "Font":
          this.setFont(t, s[0], s[1]);
          break;
        case "CA":
          (_a29 = this.dependencyTracker) == null ? void 0 : _a29.recordSimpleData("strokeAlpha", t), this.current.strokeAlpha = s;
          break;
        case "ca":
          (_b7 = this.dependencyTracker) == null ? void 0 : _b7.recordSimpleData("fillAlpha", t), this.ctx.globalAlpha = this.current.fillAlpha = s;
          break;
        case "BM":
          (_c10 = this.dependencyTracker) == null ? void 0 : _c10.recordSimpleData("globalCompositeOperation", t), this.ctx.globalCompositeOperation = s;
          break;
        case "SMask":
          (_d12 = this.dependencyTracker) == null ? void 0 : _d12.recordSimpleData("SMask", t), this.current.activeSMask = s ? this.tempSMask : null, this.tempSMask = null, this.checkSMaskState();
          break;
        case "TR":
          (_e54 = this.dependencyTracker) == null ? void 0 : _e54.recordSimpleData("filter", t), this.ctx.filter = this.current.transferMaps = this.filterFactory.addFilter(s);
          break;
      }
    }
    get inSMaskMode() {
      return !!this.suspendedCtx;
    }
    checkSMaskState() {
      const t = this.inSMaskMode;
      this.current.activeSMask && !t ? this.beginSMaskMode() : !this.current.activeSMask && t && this.endSMaskMode();
    }
    beginSMaskMode(t) {
      if (this.inSMaskMode) throw new Error("beginSMaskMode called while already in smask mode");
      const e = this.ctx.canvas.width, i = this.ctx.canvas.height, s = "smaskGroupAt" + this.groupLevel, n = this.cachedCanvases.getCanvas(s, e, i);
      this.suspendedCtx = this.ctx;
      const r = this.ctx = n.context;
      r.setTransform(this.suspendedCtx.getTransform()), Ae(this.suspendedCtx, r), Ar(r, this.suspendedCtx), this.setGState(t, [
        [
          "BM",
          "source-over"
        ]
      ]);
    }
    endSMaskMode() {
      if (!this.inSMaskMode) throw new Error("endSMaskMode called while not in smask mode");
      this.ctx._removeMirroring(), Ae(this.ctx, this.suspendedCtx), this.ctx = this.suspendedCtx, this.suspendedCtx = null;
    }
    compose(t) {
      if (!this.current.activeSMask) return;
      t ? (t[0] = Math.floor(t[0]), t[1] = Math.floor(t[1]), t[2] = Math.ceil(t[2]), t[3] = Math.ceil(t[3])) : t = [
        0,
        0,
        this.ctx.canvas.width,
        this.ctx.canvas.height
      ];
      const e = this.current.activeSMask, i = this.suspendedCtx;
      this.composeSMask(i, e, this.ctx, t), this.ctx.save(), this.ctx.setTransform(1, 0, 0, 1, 0, 0), this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height), this.ctx.restore();
    }
    composeSMask(t, e, i, s) {
      const n = s[0], r = s[1], a = s[2] - n, o = s[3] - r;
      a === 0 || o === 0 || (this.genericComposeSMask(e.context, i, a, o, e.subtype, e.backdrop, e.transferMap, n, r, e.offsetX, e.offsetY), t.save(), t.globalAlpha = 1, t.globalCompositeOperation = "source-over", t.setTransform(1, 0, 0, 1, 0, 0), t.drawImage(i.canvas, 0, 0), t.restore());
    }
    genericComposeSMask(t, e, i, s, n, r, a, o, l, h, c) {
      let f = t.canvas, g = o - h, b = l - c;
      if (r) if (g < 0 || b < 0 || g + i > f.width || b + s > f.height) {
        const w = this.cachedCanvases.getCanvas("maskExtension", i, s), A = w.context;
        A.drawImage(f, -g, -b), A.globalCompositeOperation = "destination-atop", A.fillStyle = r, A.fillRect(0, 0, i, s), A.globalCompositeOperation = "source-over", f = w.canvas, g = b = 0;
      } else {
        t.save(), t.globalAlpha = 1, t.setTransform(1, 0, 0, 1, 0, 0);
        const w = new Path2D();
        w.rect(g, b, i, s), t.clip(w), t.globalCompositeOperation = "destination-atop", t.fillStyle = r, t.fillRect(g, b, i, s), t.restore();
      }
      e.save(), e.globalAlpha = 1, e.setTransform(1, 0, 0, 1, 0, 0), n === "Alpha" && a ? e.filter = this.filterFactory.addAlphaFilter(a) : n === "Luminosity" && (e.filter = this.filterFactory.addLuminosityFilter(a));
      const m = new Path2D();
      m.rect(o, l, i, s), e.clip(m), e.globalCompositeOperation = "destination-in", e.drawImage(f, g, b, i, s, o, l, i, s), e.restore();
    }
    save(t) {
      var _a29;
      this.inSMaskMode && Ae(this.ctx, this.suspendedCtx), this.ctx.save();
      const e = this.current;
      this.stateStack.push(e), this.current = e.clone(), (_a29 = this.dependencyTracker) == null ? void 0 : _a29.save(t);
    }
    restore(t) {
      var _a29;
      if ((_a29 = this.dependencyTracker) == null ? void 0 : _a29.restore(t), this.stateStack.length === 0) {
        this.inSMaskMode && this.endSMaskMode();
        return;
      }
      this.current = this.stateStack.pop(), this.ctx.restore(), this.inSMaskMode && Ae(this.suspendedCtx, this.ctx), this.checkSMaskState(), this.pendingClip = null, this._cachedScaleForStroking[0] = -1, this._cachedGetSinglePixelWidth = null;
    }
    transform(t, e, i, s, n, r, a) {
      var _a29;
      (_a29 = this.dependencyTracker) == null ? void 0 : _a29.recordIncrementalData("transform", t), this.ctx.transform(e, i, s, n, r, a), this._cachedScaleForStroking[0] = -1, this._cachedGetSinglePixelWidth = null;
    }
    constructPath(t, e, i, s) {
      let [n] = i;
      if (!s) {
        n || (n = i[0] = new Path2D()), this[e](t, n);
        return;
      }
      if (this.dependencyTracker !== null) {
        const r = e === Pe.stroke ? this.current.lineWidth / 2 : 0;
        this.dependencyTracker.resetBBox(t).recordBBox(t, this.ctx, s[0] - r, s[2] + r, s[1] - r, s[3] + r).recordDependencies(t, [
          "transform"
        ]);
      }
      n instanceof Path2D || (n = i[0] = Gs(n)), R.axialAlignedBoundingBox(s, ot(this.ctx), this.current.minMax), this[e](t, n), this._pathStartIdx = t;
    }
    closePath(t) {
      this.ctx.closePath();
    }
    stroke(t, e, i = true) {
      var _a29;
      const s = this.ctx, n = this.current.strokeColor;
      if (s.globalAlpha = this.current.strokeAlpha, this.contentVisible) if (typeof n == "object" && (n == null ? void 0 : n.getPattern)) {
        const r = n.isModifyingCurrentTransform() ? s.getTransform() : null;
        if (s.save(), s.strokeStyle = n.getPattern(s, this, Ht(s), Et.STROKE, t), r) {
          const a = new Path2D();
          a.addPath(e, s.getTransform().invertSelf().multiplySelf(r)), e = a;
        }
        this.rescaleAndStroke(e, false), s.restore();
      } else this.rescaleAndStroke(e, true);
      (_a29 = this.dependencyTracker) == null ? void 0 : _a29.recordDependencies(t, Lt.stroke), i && this.consumePath(t, e, this.current.getClippedPathBoundingBox(Et.STROKE, ot(this.ctx))), s.globalAlpha = this.current.fillAlpha;
    }
    closeStroke(t, e) {
      this.stroke(t, e);
    }
    fill(t, e, i = true) {
      var _a29, _b7, _c10;
      const s = this.ctx, n = this.current.fillColor, r = this.current.patternFill;
      let a = false;
      if (r) {
        const l = n.isModifyingCurrentTransform() ? s.getTransform() : null;
        if ((_a29 = this.dependencyTracker) == null ? void 0 : _a29.save(t), s.save(), s.fillStyle = n.getPattern(s, this, Ht(s), Et.FILL, t), l) {
          const h = new Path2D();
          h.addPath(e, s.getTransform().invertSelf().multiplySelf(l)), e = h;
        }
        a = true;
      }
      const o = this.current.getClippedPathBoundingBox();
      this.contentVisible && o !== null && (this.pendingEOFill ? (s.fill(e, "evenodd"), this.pendingEOFill = false) : s.fill(e)), (_b7 = this.dependencyTracker) == null ? void 0 : _b7.recordDependencies(t, Lt.fill), a && (s.restore(), (_c10 = this.dependencyTracker) == null ? void 0 : _c10.restore(t)), i && this.consumePath(t, e, o);
    }
    eoFill(t, e) {
      this.pendingEOFill = true, this.fill(t, e);
    }
    fillStroke(t, e) {
      this.fill(t, e, false), this.stroke(t, e, false), this.consumePath(t, e);
    }
    eoFillStroke(t, e) {
      this.pendingEOFill = true, this.fillStroke(t, e);
    }
    closeFillStroke(t, e) {
      this.fillStroke(t, e);
    }
    closeEOFillStroke(t, e) {
      this.pendingEOFill = true, this.fillStroke(t, e);
    }
    endPath(t, e) {
      this.consumePath(t, e);
    }
    rawFillPath(t, e) {
      var _a29;
      this.ctx.fill(e), (_a29 = this.dependencyTracker) == null ? void 0 : _a29.recordDependencies(t, Lt.rawFillPath).recordOperation(t);
    }
    clip(t) {
      var _a29;
      (_a29 = this.dependencyTracker) == null ? void 0 : _a29.recordFutureForcedDependency("clipMode", t), this.pendingClip = Sr;
    }
    eoClip(t) {
      var _a29;
      (_a29 = this.dependencyTracker) == null ? void 0 : _a29.recordFutureForcedDependency("clipMode", t), this.pendingClip = Ms;
    }
    beginText(t) {
      var _a29;
      this.current.textMatrix = null, this.current.textMatrixScale = 1, this.current.x = this.current.lineX = 0, this.current.y = this.current.lineY = 0, (_a29 = this.dependencyTracker) == null ? void 0 : _a29.recordOpenMarker(t).resetIncrementalData("sameLineText").resetIncrementalData("moveText", t);
    }
    endText(t) {
      const e = this.pendingTextPaths, i = this.ctx;
      if (this.dependencyTracker) {
        const { dependencyTracker: s } = this;
        e !== void 0 && s.recordFutureForcedDependency("textClip", s.getOpenMarker()).recordFutureForcedDependency("textClip", t), s.recordCloseMarker(t);
      }
      if (e !== void 0) {
        const s = new Path2D(), n = i.getTransform().invertSelf();
        for (const { transform: r, x: a, y: o, fontSize: l, path: h } of e) h && s.addPath(h, new DOMMatrix(r).preMultiplySelf(n).translate(a, o).scale(l, -l));
        i.clip(s);
      }
      delete this.pendingTextPaths;
    }
    setCharSpacing(t, e) {
      var _a29;
      (_a29 = this.dependencyTracker) == null ? void 0 : _a29.recordSimpleData("charSpacing", t), this.current.charSpacing = e;
    }
    setWordSpacing(t, e) {
      var _a29;
      (_a29 = this.dependencyTracker) == null ? void 0 : _a29.recordSimpleData("wordSpacing", t), this.current.wordSpacing = e;
    }
    setHScale(t, e) {
      var _a29;
      (_a29 = this.dependencyTracker) == null ? void 0 : _a29.recordSimpleData("hScale", t), this.current.textHScale = e / 100;
    }
    setLeading(t, e) {
      var _a29;
      (_a29 = this.dependencyTracker) == null ? void 0 : _a29.recordSimpleData("leading", t), this.current.leading = -e;
    }
    setFont(t, e, i) {
      var _a29, _b7;
      (_a29 = this.dependencyTracker) == null ? void 0 : _a29.recordSimpleData("font", t).recordSimpleDataFromNamed("fontObj", e, t);
      const s = this.commonObjs.get(e), n = this.current;
      if (!s) throw new Error(`Can't find font for ${e}`);
      if (n.fontMatrix = s.fontMatrix || Ci, (n.fontMatrix[0] === 0 || n.fontMatrix[3] === 0) && j("Invalid font matrix for font " + e), i < 0 ? (i = -i, n.fontDirection = -1) : n.fontDirection = 1, this.current.font = s, this.current.fontSize = i, s.isType3Font) return;
      const r = s.loadedName || "sans-serif", a = ((_b7 = s.systemFontInfo) == null ? void 0 : _b7.css) || `"${r}", ${s.fallbackName}`;
      let o = "normal";
      s.black ? o = "900" : s.bold && (o = "bold");
      const l = s.italic ? "italic" : "normal";
      let h = i;
      i < Ss ? h = Ss : i > xs && (h = xs), this.current.fontSizeScale = i / h, this.ctx.font = `${l} ${o} ${h}px ${a}`;
    }
    setTextRenderingMode(t, e) {
      var _a29;
      (_a29 = this.dependencyTracker) == null ? void 0 : _a29.recordSimpleData("textRenderingMode", t), this.current.textRenderingMode = e;
    }
    setTextRise(t, e) {
      var _a29;
      (_a29 = this.dependencyTracker) == null ? void 0 : _a29.recordSimpleData("textRise", t), this.current.textRise = e;
    }
    moveText(t, e, i) {
      var _a29;
      (_a29 = this.dependencyTracker) == null ? void 0 : _a29.resetIncrementalData("sameLineText").recordIncrementalData("moveText", t), this.current.x = this.current.lineX += e, this.current.y = this.current.lineY += i;
    }
    setLeadingMoveText(t, e, i) {
      this.setLeading(t, -i), this.moveText(t, e, i);
    }
    setTextMatrix(t, e) {
      var _a29;
      (_a29 = this.dependencyTracker) == null ? void 0 : _a29.resetIncrementalData("sameLineText").recordSimpleData("textMatrix", t);
      const { current: i } = this;
      i.textMatrix = e, i.textMatrixScale = Math.hypot(e[0], e[1]), i.x = i.lineX = 0, i.y = i.lineY = 0;
    }
    nextLine(t) {
      var _a29;
      this.moveText(t, 0, this.current.leading), (_a29 = this.dependencyTracker) == null ? void 0 : _a29.recordIncrementalData("moveText", this.dependencyTracker.getSimpleIndex("leading") ?? t);
    }
    paintChar(t, e, i, s, n, r) {
      var _a29, _b7, _c10, _d12;
      const a = this.ctx, o = this.current, l = o.font, h = o.textRenderingMode, c = o.fontSize / o.fontSizeScale, f = h & gt.FILL_STROKE_MASK, g = !!(h & gt.ADD_TO_PATH_FLAG), b = o.patternFill && !l.missingFile, m = o.patternStroke && !l.missingFile;
      let w;
      if ((l.disableFontFace || g || b || m) && !l.missingFile && (w = l.getPathGenerator(this.commonObjs, e)), w && (l.disableFontFace || b || m)) {
        a.save(), a.translate(i, s), a.scale(c, -c), (_a29 = this.dependencyTracker) == null ? void 0 : _a29.recordCharacterBBox(t, a, l);
        let A;
        if (f === gt.FILL || f === gt.FILL_STROKE) if (n) {
          A = a.getTransform(), a.setTransform(...n);
          const S = __privateMethod(this, _ge_instances, s_fn2).call(this, w, A, n);
          a.fill(S);
        } else a.fill(w);
        if (f === gt.STROKE || f === gt.FILL_STROKE) if (r) {
          A || (A = a.getTransform()), a.setTransform(...r);
          const { a: S, b: E, c: C, d: x } = A, T = R.inverseTransform(r), k = R.transform([
            S,
            E,
            C,
            x,
            0,
            0
          ], T);
          R.singularValueDecompose2dScale(k, Mt), a.lineWidth *= Math.max(Mt[0], Mt[1]) / c, a.stroke(__privateMethod(this, _ge_instances, s_fn2).call(this, w, A, r));
        } else a.lineWidth /= c, a.stroke(w);
        a.restore();
      } else (f === gt.FILL || f === gt.FILL_STROKE) && (a.fillText(e, i, s), (_b7 = this.dependencyTracker) == null ? void 0 : _b7.recordCharacterBBox(t, a, l, c, i, s, () => a.measureText(e))), (f === gt.STROKE || f === gt.FILL_STROKE) && (this.dependencyTracker && ((_c10 = this.dependencyTracker) == null ? void 0 : _c10.recordCharacterBBox(t, a, l, c, i, s, () => a.measureText(e)).recordDependencies(t, Lt.stroke)), a.strokeText(e, i, s));
      g && ((this.pendingTextPaths || (this.pendingTextPaths = [])).push({
        transform: ot(a),
        x: i,
        y: s,
        fontSize: c,
        path: w
      }), (_d12 = this.dependencyTracker) == null ? void 0 : _d12.recordCharacterBBox(t, a, l, c, i, s));
    }
    get isFontSubpixelAAEnabled() {
      const { context: t } = this.cachedCanvases.getCanvas("isFontSubpixelAAEnabled", 10, 10);
      t.scale(1.5, 1), t.fillText("I", 0, 10);
      const e = t.getImageData(0, 0, 10, 10).data;
      let i = false;
      for (let s = 3; s < e.length; s += 4) if (e[s] > 0 && e[s] < 255) {
        i = true;
        break;
      }
      return H(this, "isFontSubpixelAAEnabled", i);
    }
    showText(t, e) {
      var _a29, _b7, _c10, _d12;
      this.dependencyTracker && (this.dependencyTracker.recordDependencies(t, Lt.showText).resetBBox(t), this.current.textRenderingMode & gt.ADD_TO_PATH_FLAG && this.dependencyTracker.recordFutureForcedDependency("textClip", t).inheritPendingDependenciesAsFutureForcedDependencies());
      const i = this.current, s = i.font;
      if (s.isType3Font) {
        this.showType3Text(t, e), (_a29 = this.dependencyTracker) == null ? void 0 : _a29.recordShowTextOperation(t);
        return;
      }
      const n = i.fontSize;
      if (n === 0) {
        (_b7 = this.dependencyTracker) == null ? void 0 : _b7.recordOperation(t);
        return;
      }
      const r = this.ctx, a = i.fontSizeScale, o = i.charSpacing, l = i.wordSpacing, h = i.fontDirection, c = i.textHScale * h, f = e.length, g = s.vertical, b = g ? 1 : -1, m = s.defaultVMetrics, w = n * i.fontMatrix[0], A = i.textRenderingMode === gt.FILL && !s.disableFontFace && !i.patternFill;
      r.save(), i.textMatrix && r.transform(...i.textMatrix), r.translate(i.x, i.y + i.textRise), h > 0 ? r.scale(c, -1) : r.scale(c, 1);
      let S, E;
      const C = i.textRenderingMode & gt.FILL_STROKE_MASK, x = C === gt.FILL || C === gt.FILL_STROKE, T = C === gt.STROKE || C === gt.FILL_STROKE;
      if (x && i.patternFill) {
        r.save();
        const L = i.fillColor.getPattern(r, this, Ht(r), Et.FILL, t);
        S = ot(r), r.restore(), r.fillStyle = L;
      }
      if (T && i.patternStroke) {
        r.save();
        const L = i.strokeColor.getPattern(r, this, Ht(r), Et.STROKE, t);
        E = ot(r), r.restore(), r.strokeStyle = L;
      }
      let k = i.lineWidth;
      const I = i.textMatrixScale;
      if (I === 0 || k === 0 ? T && (k = this.getSinglePixelWidth()) : k /= I, a !== 1 && (r.scale(a, a), k /= a), r.lineWidth = k, s.isInvalidPDFjsFont) {
        const L = [];
        let Y = 0;
        for (const V of e) L.push(V.unicode), Y += V.width;
        const tt = L.join("");
        if (r.fillText(tt, 0, 0), this.dependencyTracker !== null) {
          const V = r.measureText(tt);
          this.dependencyTracker.recordBBox(t, this.ctx, -V.actualBoundingBoxLeft, V.actualBoundingBoxRight, -V.actualBoundingBoxAscent, V.actualBoundingBoxDescent).recordShowTextOperation(t);
        }
        i.x += Y * w * c, r.restore(), this.compose();
        return;
      }
      let D = 0, B;
      for (B = 0; B < f; ++B) {
        const L = e[B];
        if (typeof L == "number") {
          D += b * L * n / 1e3;
          continue;
        }
        let Y = false;
        const tt = (L.isSpace ? l : 0) + o, V = L.fontChar, rt = L.accent;
        let N, O, q = L.width;
        if (g) {
          const z = L.vmetric || m, G = -(L.vmetric ? z[1] : q * 0.5) * w, it = z[2] * w;
          q = z ? -z[0] : q, N = G / a, O = (D + it) / a;
        } else N = D / a, O = 0;
        let St;
        if (s.remeasure && q > 0) {
          St = r.measureText(V);
          const z = St.width * 1e3 / n * a;
          if (q < z && this.isFontSubpixelAAEnabled) {
            const G = q / z;
            Y = true, r.save(), r.scale(G, 1), N /= G;
          } else q !== z && (N += (q - z) / 2e3 * n / a);
        }
        if (this.contentVisible && (L.isInFont || s.missingFile)) {
          if (A && !rt) r.fillText(V, N, O), (_c10 = this.dependencyTracker) == null ? void 0 : _c10.recordCharacterBBox(t, r, St ? {
            bbox: null
          } : s, n / a, N, O, () => St ?? r.measureText(V));
          else if (this.paintChar(t, V, N, O, S, E), rt) {
            const z = N + n * rt.offset.x / a, G = O - n * rt.offset.y / a;
            this.paintChar(t, rt.fontChar, z, G, S, E);
          }
        }
        const Bt = g ? q * w - tt * h : q * w + tt * h;
        D += Bt, Y && r.restore();
      }
      g ? i.y -= D : i.x += D * c, r.restore(), this.compose(), (_d12 = this.dependencyTracker) == null ? void 0 : _d12.recordShowTextOperation(t);
    }
    showType3Text(t, e) {
      const i = this.ctx, s = this.current, n = s.font, r = s.fontSize, a = s.fontDirection, o = n.vertical ? 1 : -1, l = s.charSpacing, h = s.wordSpacing, c = s.textHScale * a, f = s.fontMatrix || Ci, g = e.length, b = s.textRenderingMode === gt.INVISIBLE;
      let m, w, A, S;
      if (b || r === 0) return;
      this._cachedScaleForStroking[0] = -1, this._cachedGetSinglePixelWidth = null, i.save(), s.textMatrix && i.transform(...s.textMatrix), i.translate(s.x, s.y + s.textRise), i.scale(c, a);
      const E = this.dependencyTracker;
      for (this.dependencyTracker = E ? new Je(E, t) : null, m = 0; m < g; ++m) {
        if (w = e[m], typeof w == "number") {
          S = o * w * r / 1e3, this.ctx.translate(S, 0), s.x += S * c;
          continue;
        }
        const C = (w.isSpace ? h : 0) + l, x = n.charProcOperatorList[w.operatorListId];
        x ? this.contentVisible && (this.save(), i.scale(r, r), i.transform(...f), this.executeOperatorList(x), this.restore()) : j(`Type3 character "${w.operatorListId}" is not available.`);
        const T = [
          w.width,
          0
        ];
        R.applyTransform(T, f), A = T[0] * r + C, i.translate(A, 0), s.x += A * c;
      }
      i.restore(), E && (this.dependencyTracker = E);
    }
    setCharWidth(t, e, i) {
    }
    setCharWidthAndBounds(t, e, i, s, n, r, a) {
      var _a29;
      const o = new Path2D();
      o.rect(s, n, r - s, a - n), this.ctx.clip(o), (_a29 = this.dependencyTracker) == null ? void 0 : _a29.recordBBox(t, this.ctx, s, r, n, a).recordClipBox(t, this.ctx, s, r, n, a), this.endPath(t);
    }
    getColorN_Pattern(t, e) {
      let i;
      if (e[0] === "TilingPattern") {
        const s = this.baseTransform || ot(this.ctx), n = {
          createCanvasGraphics: (r, a) => new _ge(r, this.commonObjs, this.objs, this.canvasFactory, this.filterFactory, {
            optionalContentConfig: this.optionalContentConfig,
            markedContentStack: this.markedContentStack
          }, void 0, void 0, this.dependencyTracker ? new Je(this.dependencyTracker, a, true) : null)
        };
        i = new qi(e, this.ctx, n, s);
      } else i = this._getPattern(t, e[1], e[2]);
      return i;
    }
    setStrokeColorN(t, ...e) {
      var _a29;
      (_a29 = this.dependencyTracker) == null ? void 0 : _a29.recordSimpleData("strokeColor", t), this.current.strokeColor = this.getColorN_Pattern(t, e), this.current.patternStroke = true;
    }
    setFillColorN(t, ...e) {
      var _a29;
      (_a29 = this.dependencyTracker) == null ? void 0 : _a29.recordSimpleData("fillColor", t), this.current.fillColor = this.getColorN_Pattern(t, e), this.current.patternFill = true;
    }
    setStrokeRGBColor(t, e) {
      var _a29;
      (_a29 = this.dependencyTracker) == null ? void 0 : _a29.recordSimpleData("strokeColor", t), this.ctx.strokeStyle = this.current.strokeColor = e, this.current.patternStroke = false;
    }
    setStrokeTransparent(t) {
      var _a29;
      (_a29 = this.dependencyTracker) == null ? void 0 : _a29.recordSimpleData("strokeColor", t), this.ctx.strokeStyle = this.current.strokeColor = "transparent", this.current.patternStroke = false;
    }
    setFillRGBColor(t, e) {
      var _a29;
      (_a29 = this.dependencyTracker) == null ? void 0 : _a29.recordSimpleData("fillColor", t), this.ctx.fillStyle = this.current.fillColor = e, this.current.patternFill = false;
    }
    setFillTransparent(t) {
      var _a29;
      (_a29 = this.dependencyTracker) == null ? void 0 : _a29.recordSimpleData("fillColor", t), this.ctx.fillStyle = this.current.fillColor = "transparent", this.current.patternFill = false;
    }
    _getPattern(t, e, i = null) {
      let s;
      return this.cachedPatterns.has(e) ? s = this.cachedPatterns.get(e) : (s = mr(this.getObject(t, e)), this.cachedPatterns.set(e, s)), i && (s.matrix = i), s;
    }
    shadingFill(t, e) {
      var _a29;
      if (!this.contentVisible) return;
      const i = this.ctx;
      this.save(t);
      const s = this._getPattern(t, e);
      i.fillStyle = s.getPattern(i, this, Ht(i), Et.SHADING, t);
      const n = Ht(i);
      if (n) {
        const { width: r, height: a } = i.canvas, o = de.slice();
        R.axialAlignedBoundingBox([
          0,
          0,
          r,
          a
        ], n, o);
        const [l, h, c, f] = o;
        this.ctx.fillRect(l, h, c - l, f - h);
      } else this.ctx.fillRect(-1e10, -1e10, 2e10, 2e10);
      (_a29 = this.dependencyTracker) == null ? void 0 : _a29.resetBBox(t).recordFullPageBBox(t).recordDependencies(t, Lt.transform).recordDependencies(t, Lt.fill).recordOperation(t), this.compose(this.current.getClippedPathBoundingBox()), this.restore(t);
    }
    beginInlineImage() {
      Z("Should not call beginInlineImage");
    }
    beginImageData() {
      Z("Should not call beginImageData");
    }
    paintFormXObjectBegin(t, e, i) {
      var _a29;
      if (this.contentVisible && (this.save(t), this.baseTransformStack.push(this.baseTransform), e && this.transform(t, ...e), this.baseTransform = ot(this.ctx), i)) {
        R.axialAlignedBoundingBox(i, this.baseTransform, this.current.minMax);
        const [s, n, r, a] = i, o = new Path2D();
        o.rect(s, n, r - s, a - n), this.ctx.clip(o), (_a29 = this.dependencyTracker) == null ? void 0 : _a29.recordClipBox(t, this.ctx, s, r, n, a), this.endPath(t);
      }
    }
    paintFormXObjectEnd(t) {
      this.contentVisible && (this.restore(t), this.baseTransform = this.baseTransformStack.pop());
    }
    beginGroup(t, e) {
      var _a29;
      if (!this.contentVisible) return;
      this.save(t), this.inSMaskMode && (this.endSMaskMode(), this.current.activeSMask = null);
      const i = this.ctx;
      e.isolated || ei("TODO: Support non-isolated groups."), e.knockout && j("Knockout groups not supported.");
      const s = ot(i);
      if (e.matrix && i.transform(...e.matrix), !e.bbox) throw new Error("Bounding box is required.");
      let n = de.slice();
      R.axialAlignedBoundingBox(e.bbox, ot(i), n);
      const r = [
        0,
        0,
        i.canvas.width,
        i.canvas.height
      ];
      n = R.intersect(n, r) || [
        0,
        0,
        0,
        0
      ];
      const a = Math.floor(n[0]), o = Math.floor(n[1]), l = Math.max(Math.ceil(n[2]) - a, 1), h = Math.max(Math.ceil(n[3]) - o, 1);
      this.current.startNewPathAndClipBox([
        0,
        0,
        l,
        h
      ]);
      let c = "groupAt" + this.groupLevel;
      e.smask && (c += "_smask_" + this.smaskCounter++ % 2);
      const f = this.cachedCanvases.getCanvas(c, l, h), g = f.context;
      g.translate(-a, -o), g.transform(...s);
      let b = new Path2D();
      const [m, w, A, S] = e.bbox;
      if (b.rect(m, w, A - m, S - w), e.matrix) {
        const E = new Path2D();
        E.addPath(b, new DOMMatrix(e.matrix)), b = E;
      }
      g.clip(b), e.smask && this.smaskStack.push({
        canvas: f.canvas,
        context: g,
        offsetX: a,
        offsetY: o,
        subtype: e.smask.subtype,
        backdrop: e.smask.backdrop,
        transferMap: e.smask.transferMap || null,
        startTransformInverse: null
      }), (!e.smask || this.dependencyTracker) && (i.setTransform(1, 0, 0, 1, 0, 0), i.translate(a, o), i.save()), Ae(i, g), this.ctx = g, (_a29 = this.dependencyTracker) == null ? void 0 : _a29.inheritSimpleDataAsFutureForcedDependencies([
        "fillAlpha",
        "strokeAlpha",
        "globalCompositeOperation"
      ]).pushBaseTransform(i), this.setGState(t, [
        [
          "BM",
          "source-over"
        ],
        [
          "ca",
          1
        ],
        [
          "CA",
          1
        ],
        [
          "TR",
          null
        ]
      ]), this.groupStack.push(i), this.groupLevel++;
    }
    endGroup(t, e) {
      var _a29;
      if (!this.contentVisible) return;
      this.groupLevel--;
      const i = this.ctx, s = this.groupStack.pop();
      if (this.ctx = s, this.ctx.imageSmoothingEnabled = false, (_a29 = this.dependencyTracker) == null ? void 0 : _a29.popBaseTransform(), e.smask) this.tempSMask = this.smaskStack.pop(), this.restore(t), this.dependencyTracker && this.ctx.restore();
      else {
        this.ctx.restore();
        const n = ot(this.ctx);
        this.restore(t), this.ctx.save(), this.ctx.setTransform(...n);
        const r = de.slice();
        R.axialAlignedBoundingBox([
          0,
          0,
          i.canvas.width,
          i.canvas.height
        ], n, r), this.ctx.drawImage(i.canvas, 0, 0), this.ctx.restore(), this.compose(r);
      }
    }
    beginAnnotation(t, e, i, s, n, r) {
      if (__privateMethod(this, _ge_instances, t_fn3).call(this), We(this.ctx), this.ctx.save(), this.save(t), this.baseTransform && this.ctx.setTransform(...this.baseTransform), i) {
        const a = i[2] - i[0], o = i[3] - i[1];
        if (r && this.annotationCanvasMap) {
          s = s.slice(), s[4] -= i[0], s[5] -= i[1], i = i.slice(), i[0] = i[1] = 0, i[2] = a, i[3] = o, R.singularValueDecompose2dScale(ot(this.ctx), Mt);
          const { viewportScale: l } = this, h = Math.ceil(a * this.outputScaleX * l), c = Math.ceil(o * this.outputScaleY * l);
          this.annotationCanvas = this.canvasFactory.create(h, c);
          const { canvas: f, context: g } = this.annotationCanvas;
          this.annotationCanvasMap.set(e, f), this.annotationCanvas.savedCtx = this.ctx, this.ctx = g, this.ctx.save(), this.ctx.setTransform(Mt[0], 0, 0, -Mt[1], 0, o * Mt[1]), We(this.ctx);
        } else {
          We(this.ctx), this.endPath(t);
          const l = new Path2D();
          l.rect(i[0], i[1], a, o), this.ctx.clip(l);
        }
      }
      this.current = new Cs(this.ctx.canvas.width, this.ctx.canvas.height), this.transform(t, ...s), this.transform(t, ...n);
    }
    endAnnotation(t) {
      this.annotationCanvas && (this.ctx.restore(), __privateMethod(this, _ge_instances, e_fn3).call(this), this.ctx = this.annotationCanvas.savedCtx, delete this.annotationCanvas.savedCtx, delete this.annotationCanvas);
    }
    paintImageMaskXObject(t, e) {
      var _a29;
      if (!this.contentVisible) return;
      const i = e.count;
      e = this.getObject(t, e.data, e), e.count = i;
      const s = this.ctx, n = this._createMaskCanvas(t, e), r = n.canvas;
      s.save(), s.setTransform(1, 0, 0, 1, 0, 0), s.drawImage(r, n.offsetX, n.offsetY), (_a29 = this.dependencyTracker) == null ? void 0 : _a29.resetBBox(t).recordBBox(t, this.ctx, n.offsetX, n.offsetX + r.width, n.offsetY, n.offsetY + r.height).recordOperation(t), s.restore(), this.compose();
    }
    paintImageMaskXObjectRepeat(t, e, i, s = 0, n = 0, r, a) {
      var _a29, _b7, _c10;
      if (!this.contentVisible) return;
      e = this.getObject(t, e.data, e);
      const o = this.ctx;
      o.save();
      const l = ot(o);
      o.transform(i, s, n, r, 0, 0);
      const h = this._createMaskCanvas(t, e);
      o.setTransform(1, 0, 0, 1, h.offsetX - l[4], h.offsetY - l[5]), (_a29 = this.dependencyTracker) == null ? void 0 : _a29.resetBBox(t);
      for (let c = 0, f = a.length; c < f; c += 2) {
        const g = R.transform(l, [
          i,
          s,
          n,
          r,
          a[c],
          a[c + 1]
        ]);
        o.drawImage(h.canvas, g[4], g[5]), (_b7 = this.dependencyTracker) == null ? void 0 : _b7.recordBBox(t, this.ctx, g[4], g[4] + h.canvas.width, g[5], g[5] + h.canvas.height);
      }
      o.restore(), this.compose(), (_c10 = this.dependencyTracker) == null ? void 0 : _c10.recordOperation(t);
    }
    paintImageMaskXObjectGroup(t, e) {
      var _a29, _b7, _c10;
      if (!this.contentVisible) return;
      const i = this.ctx, s = this.current.fillColor, n = this.current.patternFill;
      (_a29 = this.dependencyTracker) == null ? void 0 : _a29.resetBBox(t).recordDependencies(t, Lt.transformAndFill);
      for (const r of e) {
        const { data: a, width: o, height: l, transform: h } = r, c = this.cachedCanvases.getCanvas("maskCanvas", o, l), f = c.context;
        f.save();
        const g = this.getObject(t, a, r);
        Ps(f, g), f.globalCompositeOperation = "source-in", f.fillStyle = n ? s.getPattern(f, this, Ht(i), Et.FILL, t) : s, f.fillRect(0, 0, o, l), f.restore(), i.save(), i.transform(...h), i.scale(1, -1), Ve(i, c.canvas, 0, 0, o, l, 0, -1, 1, 1), (_b7 = this.dependencyTracker) == null ? void 0 : _b7.recordBBox(t, i, 0, o, 0, l), i.restore();
      }
      this.compose(), (_c10 = this.dependencyTracker) == null ? void 0 : _c10.recordOperation(t);
    }
    paintImageXObject(t, e) {
      if (!this.contentVisible) return;
      const i = this.getObject(t, e);
      if (!i) {
        j("Dependent image isn't ready yet");
        return;
      }
      this.paintInlineImageXObject(t, i);
    }
    paintImageXObjectRepeat(t, e, i, s, n) {
      if (!this.contentVisible) return;
      const r = this.getObject(t, e);
      if (!r) {
        j("Dependent image isn't ready yet");
        return;
      }
      const a = r.width, o = r.height, l = [];
      for (let h = 0, c = n.length; h < c; h += 2) l.push({
        transform: [
          i,
          0,
          0,
          s,
          n[h],
          n[h + 1]
        ],
        x: 0,
        y: 0,
        w: a,
        h: o
      });
      this.paintInlineImageXObjectGroup(t, r, l);
    }
    applyTransferMapsToCanvas(t) {
      return this.current.transferMaps !== "none" && (t.filter = this.current.transferMaps, t.drawImage(t.canvas, 0, 0), t.filter = "none"), t.canvas;
    }
    applyTransferMapsToBitmap(t) {
      if (this.current.transferMaps === "none") return t.bitmap;
      const { bitmap: e, width: i, height: s } = t, n = this.cachedCanvases.getCanvas("inlineImage", i, s), r = n.context;
      return r.filter = this.current.transferMaps, r.drawImage(e, 0, 0), r.filter = "none", n.canvas;
    }
    paintInlineImageXObject(t, e) {
      var _a29;
      if (!this.contentVisible) return;
      const i = e.width, s = e.height, n = this.ctx;
      this.save(t);
      const { filter: r } = n;
      r !== "none" && r !== "" && (n.filter = "none"), n.scale(1 / i, -1 / s);
      let a;
      if (e.bitmap) a = this.applyTransferMapsToBitmap(e);
      else if (typeof HTMLElement == "function" && e instanceof HTMLElement || !e.data) a = e;
      else {
        const h = this.cachedCanvases.getCanvas("inlineImage", i, s).context;
        Ts(h, e), a = this.applyTransferMapsToCanvas(h);
      }
      const o = this._scaleImage(a, Ht(n));
      n.imageSmoothingEnabled = ks(ot(n), e.interpolate), (_a29 = this.dependencyTracker) == null ? void 0 : _a29.resetBBox(t).recordBBox(t, n, 0, i, -s, 0).recordDependencies(t, Lt.imageXObject).recordOperation(t), Ve(n, o.img, 0, 0, o.paintWidth, o.paintHeight, 0, -s, i, s), this.compose(), this.restore(t);
    }
    paintInlineImageXObjectGroup(t, e, i) {
      var _a29, _b7, _c10;
      if (!this.contentVisible) return;
      const s = this.ctx;
      let n;
      if (e.bitmap) n = e.bitmap;
      else {
        const r = e.width, a = e.height, l = this.cachedCanvases.getCanvas("inlineImage", r, a).context;
        Ts(l, e), n = this.applyTransferMapsToCanvas(l);
      }
      (_a29 = this.dependencyTracker) == null ? void 0 : _a29.resetBBox(t);
      for (const r of i) s.save(), s.transform(...r.transform), s.scale(1, -1), Ve(s, n, r.x, r.y, r.w, r.h, 0, -1, 1, 1), (_b7 = this.dependencyTracker) == null ? void 0 : _b7.recordBBox(t, s, 0, 1, -1, 0), s.restore();
      (_c10 = this.dependencyTracker) == null ? void 0 : _c10.recordOperation(t), this.compose();
    }
    paintSolidColorImageMask(t) {
      var _a29;
      this.contentVisible && ((_a29 = this.dependencyTracker) == null ? void 0 : _a29.resetBBox(t).recordBBox(t, this.ctx, 0, 1, 0, 1).recordDependencies(t, Lt.fill).recordOperation(t), this.ctx.fillRect(0, 0, 1, 1), this.compose());
    }
    markPoint(t, e) {
    }
    markPointProps(t, e, i) {
    }
    beginMarkedContent(t, e) {
      var _a29;
      (_a29 = this.dependencyTracker) == null ? void 0 : _a29.beginMarkedContent(t), this.markedContentStack.push({
        visible: true
      });
    }
    beginMarkedContentProps(t, e, i) {
      var _a29;
      (_a29 = this.dependencyTracker) == null ? void 0 : _a29.beginMarkedContent(t), e === "OC" ? this.markedContentStack.push({
        visible: this.optionalContentConfig.isVisible(i)
      }) : this.markedContentStack.push({
        visible: true
      }), this.contentVisible = this.isContentVisible();
    }
    endMarkedContent(t) {
      var _a29;
      (_a29 = this.dependencyTracker) == null ? void 0 : _a29.endMarkedContent(t), this.markedContentStack.pop(), this.contentVisible = this.isContentVisible();
    }
    beginCompat(t) {
    }
    endCompat(t) {
    }
    consumePath(t, e, i) {
      var _a29, _b7;
      const s = this.current.isEmptyClip();
      this.pendingClip && this.current.updateClipFromPath(), this.pendingClip || this.compose(i);
      const n = this.ctx;
      this.pendingClip ? (s || (this.pendingClip === Ms ? n.clip(e, "evenodd") : n.clip(e)), this.pendingClip = null, (_a29 = this.dependencyTracker) == null ? void 0 : _a29.bboxToClipBoxDropOperation(t).recordFutureForcedDependency("clipPath", t)) : (_b7 = this.dependencyTracker) == null ? void 0 : _b7.recordOperation(t), this.current.startNewPathAndClipBox(this.current.clipBox);
    }
    getSinglePixelWidth() {
      if (!this._cachedGetSinglePixelWidth) {
        const t = ot(this.ctx);
        if (t[1] === 0 && t[2] === 0) this._cachedGetSinglePixelWidth = 1 / Math.min(Math.abs(t[0]), Math.abs(t[3]));
        else {
          const e = Math.abs(t[0] * t[3] - t[2] * t[1]), i = Math.hypot(t[0], t[2]), s = Math.hypot(t[1], t[3]);
          this._cachedGetSinglePixelWidth = Math.max(i, s) / e;
        }
      }
      return this._cachedGetSinglePixelWidth;
    }
    getScaleForStroking() {
      if (this._cachedScaleForStroking[0] === -1) {
        const { lineWidth: t } = this.current, { a: e, b: i, c: s, d: n } = this.ctx.getTransform();
        let r, a;
        if (i === 0 && s === 0) {
          const o = Math.abs(e), l = Math.abs(n);
          if (o === l) if (t === 0) r = a = 1 / o;
          else {
            const h = o * t;
            r = a = h < 1 ? 1 / h : 1;
          }
          else if (t === 0) r = 1 / o, a = 1 / l;
          else {
            const h = o * t, c = l * t;
            r = h < 1 ? 1 / h : 1, a = c < 1 ? 1 / c : 1;
          }
        } else {
          const o = Math.abs(e * n - i * s), l = Math.hypot(e, i), h = Math.hypot(s, n);
          if (t === 0) r = h / o, a = l / o;
          else {
            const c = t * o;
            r = h > c ? h / c : 1, a = l > c ? l / c : 1;
          }
        }
        this._cachedScaleForStroking[0] = r, this._cachedScaleForStroking[1] = a;
      }
      return this._cachedScaleForStroking;
    }
    rescaleAndStroke(t, e) {
      const { ctx: i, current: { lineWidth: s } } = this, [n, r] = this.getScaleForStroking();
      if (n === r) {
        i.lineWidth = (s || 1) * n, i.stroke(t);
        return;
      }
      const a = i.getLineDash();
      e && i.save(), i.scale(n, r), Si.a = 1 / n, Si.d = 1 / r;
      const o = new Path2D();
      if (o.addPath(t, Si), a.length > 0) {
        const l = Math.max(n, r);
        i.setLineDash(a.map((h) => h / l)), i.lineDashOffset /= l;
      }
      i.lineWidth = s || 1, i.stroke(o), e && i.restore();
    }
    isContentVisible() {
      for (let t = this.markedContentStack.length - 1; t >= 0; t--) if (!this.markedContentStack[t].visible) return false;
      return true;
    }
  };
  _ge_instances = new WeakSet();
  t_fn3 = function() {
    for (; this.stateStack.length || this.inSMaskMode; ) this.restore();
    this.current.activeSMask = null, this.ctx.restore(), this.transparentCanvas && (this.ctx = this.compositeCtx, this.ctx.save(), this.ctx.setTransform(1, 0, 0, 1, 0, 0), this.ctx.drawImage(this.transparentCanvas, 0, 0), this.ctx.restore(), this.transparentCanvas = null);
  };
  e_fn3 = function() {
    if (this.pageColors) {
      const t = this.filterFactory.addHCMFilter(this.pageColors.foreground, this.pageColors.background);
      if (t !== "none") {
        const e = this.ctx.filter;
        this.ctx.filter = t, this.ctx.drawImage(this.ctx.canvas, 0, 0), this.ctx.filter = e;
      }
    }
  };
  s_fn2 = function(t, e, i) {
    const s = new Path2D();
    return s.addPath(t, new DOMMatrix(i).invertSelf().multiplySelf(e)), s;
  };
  let ge = _ge;
  for (const d in Pe) ge.prototype[d] !== void 0 && (ge.prototype[Pe[d]] = ge.prototype[d]);
  Ce = (_f5 = class {
    static get workerPort() {
      return __privateGet(this, _t30);
    }
    static set workerPort(t) {
      if (!(typeof Worker < "u" && t instanceof Worker) && t !== null) throw new Error("Invalid `workerPort` type.");
      __privateSet(this, _t30, t);
    }
    static get workerSrc() {
      return __privateGet(this, _e24);
    }
    static set workerSrc(t) {
      if (typeof t != "string") throw new Error("Invalid `workerSrc` type.");
      __privateSet(this, _e24, t);
    }
  }, _t30 = new WeakMap(), _e24 = new WeakMap(), __privateAdd(_f5, _t30, null), __privateAdd(_f5, _e24, ""), _f5);
  class xr {
    constructor({ parsedData: t, rawData: e }) {
      __privateAdd(this, _t31);
      __privateAdd(this, _e25);
      __privateSet(this, _t31, t), __privateSet(this, _e25, e);
    }
    getRaw() {
      return __privateGet(this, _e25);
    }
    get(t) {
      return __privateGet(this, _t31).get(t) ?? null;
    }
    [Symbol.iterator]() {
      return __privateGet(this, _t31).entries();
    }
  }
  _t31 = new WeakMap();
  _e25 = new WeakMap();
  const le = /* @__PURE__ */ Symbol("INTERNAL");
  class _r {
    constructor(t, { name: e, intent: i, usage: s, rbGroups: n }) {
      __privateAdd(this, _t32, false);
      __privateAdd(this, _e26, false);
      __privateAdd(this, _s21, false);
      __privateAdd(this, _i17, true);
      __privateSet(this, _t32, !!(t & Pt.DISPLAY)), __privateSet(this, _e26, !!(t & Pt.PRINT)), this.name = e, this.intent = i, this.usage = s, this.rbGroups = n;
    }
    get visible() {
      if (__privateGet(this, _s21)) return __privateGet(this, _i17);
      if (!__privateGet(this, _i17)) return false;
      const { print: t, view: e } = this.usage;
      return __privateGet(this, _t32) ? (e == null ? void 0 : e.viewState) !== "OFF" : __privateGet(this, _e26) ? (t == null ? void 0 : t.printState) !== "OFF" : true;
    }
    _setVisible(t, e, i = false) {
      t !== le && Z("Internal method `_setVisible` called."), __privateSet(this, _s21, i), __privateSet(this, _i17, e);
    }
  }
  _t32 = new WeakMap();
  _e26 = new WeakMap();
  _s21 = new WeakMap();
  _i17 = new WeakMap();
  class Cr {
    constructor(t, e = Pt.DISPLAY) {
      __privateAdd(this, _Cr_instances);
      __privateAdd(this, _t33, null);
      __privateAdd(this, _e27, /* @__PURE__ */ new Map());
      __privateAdd(this, _s22, null);
      __privateAdd(this, _i18, null);
      if (this.renderingIntent = e, this.name = null, this.creator = null, t !== null) {
        this.name = t.name, this.creator = t.creator, __privateSet(this, _i18, t.order);
        for (const i of t.groups) __privateGet(this, _e27).set(i.id, new _r(e, i));
        if (t.baseState === "OFF") for (const i of __privateGet(this, _e27).values()) i._setVisible(le, false);
        for (const i of t.on) __privateGet(this, _e27).get(i)._setVisible(le, true);
        for (const i of t.off) __privateGet(this, _e27).get(i)._setVisible(le, false);
        __privateSet(this, _s22, this.getHash());
      }
    }
    isVisible(t) {
      if (__privateGet(this, _e27).size === 0) return true;
      if (!t) return ei("Optional content group not defined."), true;
      if (t.type === "OCG") return __privateGet(this, _e27).has(t.id) ? __privateGet(this, _e27).get(t.id).visible : (j(`Optional content group not found: ${t.id}`), true);
      if (t.type === "OCMD") {
        if (t.expression) return __privateMethod(this, _Cr_instances, a_fn4).call(this, t.expression);
        if (!t.policy || t.policy === "AnyOn") {
          for (const e of t.ids) {
            if (!__privateGet(this, _e27).has(e)) return j(`Optional content group not found: ${e}`), true;
            if (__privateGet(this, _e27).get(e).visible) return true;
          }
          return false;
        } else if (t.policy === "AllOn") {
          for (const e of t.ids) {
            if (!__privateGet(this, _e27).has(e)) return j(`Optional content group not found: ${e}`), true;
            if (!__privateGet(this, _e27).get(e).visible) return false;
          }
          return true;
        } else if (t.policy === "AnyOff") {
          for (const e of t.ids) {
            if (!__privateGet(this, _e27).has(e)) return j(`Optional content group not found: ${e}`), true;
            if (!__privateGet(this, _e27).get(e).visible) return true;
          }
          return false;
        } else if (t.policy === "AllOff") {
          for (const e of t.ids) {
            if (!__privateGet(this, _e27).has(e)) return j(`Optional content group not found: ${e}`), true;
            if (__privateGet(this, _e27).get(e).visible) return false;
          }
          return true;
        }
        return j(`Unknown optional content policy ${t.policy}.`), true;
      }
      return j(`Unknown group type ${t.type}.`), true;
    }
    setVisibility(t, e = true, i = true) {
      var _a29;
      const s = __privateGet(this, _e27).get(t);
      if (!s) {
        j(`Optional content group not found: ${t}`);
        return;
      }
      if (i && e && s.rbGroups.length) for (const n of s.rbGroups) for (const r of n) r !== t && ((_a29 = __privateGet(this, _e27).get(r)) == null ? void 0 : _a29._setVisible(le, false, true));
      s._setVisible(le, !!e, true), __privateSet(this, _t33, null);
    }
    setOCGState({ state: t, preserveRB: e }) {
      let i;
      for (const s of t) {
        switch (s) {
          case "ON":
          case "OFF":
          case "Toggle":
            i = s;
            continue;
        }
        const n = __privateGet(this, _e27).get(s);
        if (n) switch (i) {
          case "ON":
            this.setVisibility(s, true, e);
            break;
          case "OFF":
            this.setVisibility(s, false, e);
            break;
          case "Toggle":
            this.setVisibility(s, !n.visible, e);
            break;
        }
      }
      __privateSet(this, _t33, null);
    }
    get hasInitialVisibility() {
      return __privateGet(this, _s22) === null || this.getHash() === __privateGet(this, _s22);
    }
    getOrder() {
      return __privateGet(this, _e27).size ? __privateGet(this, _i18) ? __privateGet(this, _i18).slice() : [
        ...__privateGet(this, _e27).keys()
      ] : null;
    }
    getGroup(t) {
      return __privateGet(this, _e27).get(t) || null;
    }
    getHash() {
      if (__privateGet(this, _t33) !== null) return __privateGet(this, _t33);
      const t = new Vs();
      for (const [e, i] of __privateGet(this, _e27)) t.update(`${e}:${i.visible}`);
      return __privateSet(this, _t33, t.hexdigest());
    }
    [Symbol.iterator]() {
      return __privateGet(this, _e27).entries();
    }
  }
  _t33 = new WeakMap();
  _e27 = new WeakMap();
  _s22 = new WeakMap();
  _i18 = new WeakMap();
  _Cr_instances = new WeakSet();
  a_fn4 = function(t) {
    const e = t.length;
    if (e < 2) return true;
    const i = t[0];
    for (let s = 1; s < e; s++) {
      const n = t[s];
      let r;
      if (Array.isArray(n)) r = __privateMethod(this, _Cr_instances, a_fn4).call(this, n);
      else if (__privateGet(this, _e27).has(n)) r = __privateGet(this, _e27).get(n).visible;
      else return j(`Optional content group not found: ${n}`), true;
      switch (i) {
        case "And":
          if (!r) return false;
          break;
        case "Or":
          if (r) return true;
          break;
        case "Not":
          return !r;
        default:
          return true;
      }
    }
    return i === "And";
  };
  class ri {
    constructor(t, e, i) {
      __privateAdd(this, _t34, null);
      __privateAdd(this, _e28, null);
      __publicField(this, "_fullReader", null);
      __publicField(this, "_rangeReaders", /* @__PURE__ */ new Set());
      __publicField(this, "_source", null);
      this._source = t, __privateSet(this, _t34, e), __privateSet(this, _e28, i);
    }
    get _progressiveDataLength() {
      var _a29;
      return ((_a29 = this._fullReader) == null ? void 0 : _a29._loaded) ?? 0;
    }
    getFullReader() {
      return K(!this._fullReader, "BasePDFStream.getFullReader can only be called once."), this._fullReader = new (__privateGet(this, _t34))(this);
    }
    getRangeReader(t, e) {
      if (e <= this._progressiveDataLength) return null;
      const i = new (__privateGet(this, _e28))(this, t, e);
      return this._rangeReaders.add(i), i;
    }
    cancelAllRequests(t) {
      var _a29;
      (_a29 = this._fullReader) == null ? void 0 : _a29.cancel(t);
      for (const e of new Set(this._rangeReaders)) e.cancel(t);
    }
  }
  _t34 = new WeakMap();
  _e28 = new WeakMap();
  class ai {
    constructor(t) {
      __publicField(this, "onProgress", null);
      __publicField(this, "_contentLength", 0);
      __publicField(this, "_filename", null);
      __publicField(this, "_headersCapability", Promise.withResolvers());
      __publicField(this, "_isRangeSupported", false);
      __publicField(this, "_isStreamingSupported", false);
      __publicField(this, "_loaded", 0);
      __publicField(this, "_stream", null);
      this._stream = t;
    }
    _callOnProgress() {
      var _a29;
      (_a29 = this.onProgress) == null ? void 0 : _a29.call(this, {
        loaded: this._loaded,
        total: this._contentLength
      });
    }
    get headersReady() {
      return this._headersCapability.promise;
    }
    get filename() {
      return this._filename;
    }
    get contentLength() {
      return this._contentLength;
    }
    get isRangeSupported() {
      return this._isRangeSupported;
    }
    get isStreamingSupported() {
      return this._isStreamingSupported;
    }
    async read() {
      Z("Abstract method `read` called");
    }
    cancel(t) {
      Z("Abstract method `cancel` called");
    }
  }
  class oi {
    constructor(t, e, i) {
      __publicField(this, "_stream", null);
      this._stream = t;
    }
    async read() {
      Z("Abstract method `read` called");
    }
    cancel(t) {
      Z("Abstract method `cancel` called");
    }
  }
  function Is(d) {
    return d instanceof Uint8Array && d.byteLength === d.buffer.byteLength ? d.buffer : new Uint8Array(d).buffer;
  }
  function li() {
    for (const d of this._requests) d.resolve({
      value: void 0,
      done: true
    });
    this._requests.length = 0;
  }
  class Tr extends ri {
    constructor(t) {
      super(t, Pr, kr);
      __privateAdd(this, _Tr_instances);
      __publicField(this, "_progressiveDone", false);
      __publicField(this, "_queuedChunks", []);
      const { pdfDataRangeTransport: e } = t, { initialData: i, progressiveDone: s } = e;
      if ((i == null ? void 0 : i.length) > 0) {
        const n = Is(i);
        this._queuedChunks.push(n);
      }
      this._progressiveDone = s, e.addRangeListener((n, r) => {
        __privateMethod(this, _Tr_instances, t_fn4).call(this, n, r);
      }), e.addProgressiveReadListener((n) => {
        __privateMethod(this, _Tr_instances, t_fn4).call(this, void 0, n);
      }), e.addProgressiveDoneListener(() => {
        var _a29;
        (_a29 = this._fullReader) == null ? void 0 : _a29.progressiveDone(), this._progressiveDone = true;
      }), e.transportReady();
    }
    getFullReader() {
      const t = super.getFullReader();
      return this._queuedChunks = null, t;
    }
    getRangeReader(t, e) {
      const i = super.getRangeReader(t, e);
      return i && (i.onDone = () => this._rangeReaders.delete(i), this._source.pdfDataRangeTransport.requestDataRange(t, e)), i;
    }
    cancelAllRequests(t) {
      super.cancelAllRequests(t), this._source.pdfDataRangeTransport.abort();
    }
  }
  _Tr_instances = new WeakSet();
  t_fn4 = function(t, e) {
    const i = Is(e);
    if (t === void 0) this._fullReader ? this._fullReader._enqueue(i) : this._queuedChunks.push(i);
    else {
      const s = this._rangeReaders.keys().find((n) => n._begin === t);
      K(s, "#onReceiveData - no `PDFDataTransportStreamRangeReader` instance found."), s._enqueue(i);
    }
  };
  class Pr extends ai {
    constructor(t) {
      super(t);
      __privateAdd(this, _t35, li.bind(this));
      __publicField(this, "_done", false);
      __publicField(this, "_queuedChunks", null);
      __publicField(this, "_requests", []);
      const { pdfDataRangeTransport: e, disableRange: i, disableStream: s } = t._source, { length: n, contentDispositionFilename: r } = e;
      this._queuedChunks = t._queuedChunks || [];
      for (const o of this._queuedChunks) this._loaded += o.byteLength;
      this._done = t._progressiveDone, this._contentLength = n, this._isStreamingSupported = !s, this._isRangeSupported = !i, Gi(r) && (this._filename = r), this._headersCapability.resolve();
      const a = this._loaded;
      Promise.resolve().then(() => {
        a > 0 && this._loaded === a && this._callOnProgress();
      });
    }
    _enqueue(t) {
      this._done || (this._requests.length > 0 ? this._requests.shift().resolve({
        value: t,
        done: false
      }) : this._queuedChunks.push(t), this._loaded += t.byteLength, this._callOnProgress());
    }
    async read() {
      if (this._queuedChunks.length > 0) return {
        value: this._queuedChunks.shift(),
        done: false
      };
      if (this._done) return {
        value: void 0,
        done: true
      };
      const t = Promise.withResolvers();
      return this._requests.push(t), t.promise;
    }
    cancel(t) {
      this._done = true, __privateGet(this, _t35).call(this);
    }
    progressiveDone() {
      this._done || (this._done = true), this._queuedChunks.length === 0 && __privateGet(this, _t35).call(this);
    }
  }
  _t35 = new WeakMap();
  class kr extends oi {
    constructor(t, e, i) {
      super(t, e, i);
      __privateAdd(this, _t36, li.bind(this));
      __publicField(this, "onDone", null);
      __publicField(this, "_begin", -1);
      __publicField(this, "_done", false);
      __publicField(this, "_queuedChunk", null);
      __publicField(this, "_requests", []);
      this._begin = e;
    }
    _enqueue(t) {
      var _a29;
      this._done || (this._requests.length === 0 ? this._queuedChunk = t : (this._requests.shift().resolve({
        value: t,
        done: false
      }), __privateGet(this, _t36).call(this)), this._done = true, (_a29 = this.onDone) == null ? void 0 : _a29.call(this));
    }
    async read() {
      if (this._queuedChunk) {
        const e = this._queuedChunk;
        return this._queuedChunk = null, {
          value: e,
          done: false
        };
      }
      if (this._done) return {
        value: void 0,
        done: true
      };
      const t = Promise.withResolvers();
      return this._requests.push(t), t.promise;
    }
    cancel(t) {
      var _a29;
      this._done = true, __privateGet(this, _t36).call(this), (_a29 = this.onDone) == null ? void 0 : _a29.call(this);
    }
  }
  _t36 = new WeakMap();
  function Mr(d) {
    let t = true, e = i("filename\\*", "i").exec(d);
    if (e) {
      e = e[1];
      let h = a(e);
      return h = unescape(h), h = o(h), h = l(h), n(h);
    }
    if (e = r(d), e) {
      const h = l(e);
      return n(h);
    }
    if (e = i("filename", "i").exec(d), e) {
      e = e[1];
      let h = a(e);
      return h = l(h), n(h);
    }
    function i(h, c) {
      return new RegExp("(?:^|;)\\s*" + h + '\\s*=\\s*([^";\\s][^;\\s]*|"(?:[^"\\\\]|\\\\"?)+"?)', c);
    }
    function s(h, c) {
      if (h) {
        if (!/^[\x00-\xFF]+$/.test(c)) return c;
        try {
          const f = new TextDecoder(h, {
            fatal: true
          }), g = ii(c);
          c = f.decode(g), t = false;
        } catch {
        }
      }
      return c;
    }
    function n(h) {
      return t && /[\x80-\xff]/.test(h) && (h = s("utf-8", h), t && (h = s("iso-8859-1", h))), h;
    }
    function r(h) {
      const c = [];
      let f;
      const g = i("filename\\*((?!0\\d)\\d+)(\\*?)", "ig");
      for (; (f = g.exec(h)) !== null; ) {
        let [, m, w, A] = f;
        if (m = parseInt(m, 10), m in c) {
          if (m === 0) break;
          continue;
        }
        c[m] = [
          w,
          A
        ];
      }
      const b = [];
      for (let m = 0; m < c.length && m in c; ++m) {
        let [w, A] = c[m];
        A = a(A), w && (A = unescape(A), m === 0 && (A = o(A))), b.push(A);
      }
      return b.join("");
    }
    function a(h) {
      if (h.startsWith('"')) {
        const c = h.slice(1).split('\\"');
        for (let f = 0; f < c.length; ++f) {
          const g = c[f].indexOf('"');
          g !== -1 && (c[f] = c[f].slice(0, g), c.length = f + 1), c[f] = c[f].replaceAll(/\\(.)/g, "$1");
        }
        h = c.join('"');
      }
      return h;
    }
    function o(h) {
      const c = h.indexOf("'");
      if (c === -1) return h;
      const f = h.slice(0, c), b = h.slice(c + 1).replace(/^[^']*'/, "");
      return s(f, b);
    }
    function l(h) {
      return !h.startsWith("=?") || /[\x00-\x19\x80-\xff]/.test(h) ? h : h.replaceAll(/=\?([\w-]*)\?([QqBb])\?((?:[^?]|\?(?!=))*)\?=/g, function(c, f, g, b) {
        if (g === "q" || g === "Q") return b = b.replaceAll("_", " "), b = b.replaceAll(/=([0-9a-fA-F]{2})/g, function(m, w) {
          return String.fromCharCode(parseInt(w, 16));
        }), s(f, b);
        try {
          b = atob(b);
        } catch {
        }
        return s(f, b);
      });
    }
    return "";
  }
  function Qs(d, t) {
    const e = new Headers();
    if (!d || !t || typeof t != "object") return e;
    for (const i in t) {
      const s = t[i];
      s !== void 0 && e.append(i, s);
    }
    return e;
  }
  function hi(d) {
    var _a29;
    return ((_a29 = URL.parse(d)) == null ? void 0 : _a29.origin) ?? null;
  }
  function Zs({ responseHeaders: d, isHttp: t, rangeChunkSize: e, disableRange: i }) {
    const s = {
      allowRangeRequests: false,
      suggestedLength: void 0
    }, n = parseInt(d.get("Content-Length"), 10);
    return !Number.isInteger(n) || (s.suggestedLength = n, n <= 2 * e) || i || !t || d.get("Accept-Ranges") !== "bytes" || (d.get("Content-Encoding") || "identity") !== "identity" || (s.allowRangeRequests = true), s;
  }
  function tn(d) {
    const t = d.get("Content-Disposition");
    if (t) {
      let e = Mr(t);
      if (e.includes("%")) try {
        e = decodeURIComponent(e);
      } catch {
      }
      if (Gi(e)) return e;
    }
    return null;
  }
  function ci(d, t) {
    return new Ke(`Unexpected server response (${d}) while retrieving PDF "${t.href}".`, d, d === 404 || d === 0 && t.protocol === "file:");
  }
  function en(d, t) {
    if (d !== t) throw new Error(`Expected range response-origin "${d}" to match "${t}".`);
  }
  function sn(d, t, e, i) {
    return fetch(d, {
      method: "GET",
      headers: t,
      signal: i.signal,
      mode: "cors",
      credentials: e ? "include" : "same-origin",
      redirect: "follow"
    });
  }
  function nn(d, t) {
    if (d !== 200 && d !== 206) throw ci(d, t);
  }
  function di(d) {
    if (d instanceof Uint8Array) return d.buffer;
    if (d instanceof ArrayBuffer) return d;
    throw new Error(`getArrayBuffer - unexpected data: ${d}`);
  }
  class Ir extends ri {
    constructor(t) {
      super(t, Dr, Lr);
      __publicField(this, "_responseOrigin", null);
      const { httpHeaders: e, url: i } = t;
      K(/https?:/.test(i.protocol), "PDFFetchStream only supports http(s):// URLs."), this.headers = Qs(true, e);
    }
  }
  class Dr extends ai {
    constructor(t) {
      super(t);
      __publicField(this, "_abortController", new AbortController());
      __publicField(this, "_reader", null);
      const { disableRange: e, disableStream: i, length: s, rangeChunkSize: n, url: r, withCredentials: a } = t._source;
      this._contentLength = s, this._isStreamingSupported = !i, this._isRangeSupported = !e;
      const o = new Headers(t.headers);
      sn(r, o, a, this._abortController).then((l) => {
        t._responseOrigin = hi(l.url), nn(l.status, r), this._reader = l.body.getReader();
        const h = l.headers, { allowRangeRequests: c, suggestedLength: f } = Zs({
          responseHeaders: h,
          isHttp: true,
          rangeChunkSize: n,
          disableRange: e
        });
        this._isRangeSupported = c, this._contentLength = f || this._contentLength, this._filename = tn(h), !this._isStreamingSupported && this._isRangeSupported && this.cancel(new Qt("Streaming is disabled.")), this._headersCapability.resolve();
      }).catch(this._headersCapability.reject);
    }
    async read() {
      await this._headersCapability.promise;
      const { value: t, done: e } = await this._reader.read();
      return e ? {
        value: t,
        done: e
      } : (this._loaded += t.byteLength, this._callOnProgress(), {
        value: di(t),
        done: false
      });
    }
    cancel(t) {
      var _a29;
      (_a29 = this._reader) == null ? void 0 : _a29.cancel(t), this._abortController.abort();
    }
  }
  class Lr extends oi {
    constructor(t, e, i) {
      super(t, e, i);
      __publicField(this, "_abortController", new AbortController());
      __publicField(this, "_readCapability", Promise.withResolvers());
      __publicField(this, "_reader", null);
      const { url: s, withCredentials: n } = t._source, r = new Headers(t.headers);
      r.append("Range", `bytes=${e}-${i - 1}`), sn(s, r, n, this._abortController).then((a) => {
        const o = hi(a.url);
        en(o, t._responseOrigin), nn(a.status, s), this._reader = a.body.getReader(), this._readCapability.resolve();
      }).catch(this._readCapability.reject);
    }
    async read() {
      await this._readCapability.promise;
      const { value: t, done: e } = await this._reader.read();
      return e ? {
        value: t,
        done: e
      } : {
        value: di(t),
        done: false
      };
    }
    cancel(t) {
      var _a29;
      (_a29 = this._reader) == null ? void 0 : _a29.cancel(t), this._abortController.abort();
    }
  }
  const xi = 200, Ds = 206;
  function Rr(d) {
    return typeof d != "string" ? d : ii(d).buffer;
  }
  class Fr extends ri {
    constructor(t) {
      super(t, Br, Nr);
      __privateAdd(this, _Fr_instances);
      __privateAdd(this, _t37, /* @__PURE__ */ new WeakMap());
      __publicField(this, "_responseOrigin", null);
      const { httpHeaders: e, url: i } = t;
      this.url = i, this.isHttp = /https?:/.test(i.protocol), this.headers = Qs(this.isHttp, e);
    }
    _request(t) {
      const e = new XMLHttpRequest(), i = {
        validateStatus: null,
        onHeadersReceived: t.onHeadersReceived,
        onDone: t.onDone,
        onError: t.onError,
        onProgress: t.onProgress
      };
      __privateGet(this, _t37).set(e, i), e.open("GET", this.url), e.withCredentials = this._source.withCredentials;
      for (const [s, n] of this.headers) e.setRequestHeader(s, n);
      return this.isHttp && "begin" in t && "end" in t ? (e.setRequestHeader("Range", `bytes=${t.begin}-${t.end - 1}`), i.validateStatus = (s) => s === Ds || s === xi) : i.validateStatus = (s) => s === xi, e.responseType = "arraybuffer", K(t.onError, "Expected `onError` callback to be provided."), e.onerror = () => t.onError(e.status), e.onreadystatechange = __privateMethod(this, _Fr_instances, s_fn3).bind(this, e), e.onprogress = __privateMethod(this, _Fr_instances, e_fn4).bind(this, e), e.send(null), e;
    }
    _abortRequest(t) {
      __privateGet(this, _t37).has(t) && (__privateGet(this, _t37).delete(t), t.abort());
    }
    getRangeReader(t, e) {
      const i = super.getRangeReader(t, e);
      return i && (i.onClosed = () => this._rangeReaders.delete(i)), i;
    }
  }
  _t37 = new WeakMap();
  _Fr_instances = new WeakSet();
  e_fn4 = function(t, e) {
    var _a29, _b7;
    (_b7 = (_a29 = __privateGet(this, _t37).get(t)) == null ? void 0 : _a29.onProgress) == null ? void 0 : _b7.call(_a29, e);
  };
  s_fn3 = function(t, e) {
    const i = __privateGet(this, _t37).get(t);
    if (!i || (t.readyState >= 2 && i.onHeadersReceived && (i.onHeadersReceived(), delete i.onHeadersReceived), t.readyState !== 4) || !__privateGet(this, _t37).has(t)) return;
    if (__privateGet(this, _t37).delete(t), t.status === 0 && this.isHttp) {
      i.onError(t.status);
      return;
    }
    const s = t.status || xi;
    if (!i.validateStatus(s)) {
      i.onError(t.status);
      return;
    }
    const n = Rr(t.response);
    if (s === Ds) {
      const r = t.getResponseHeader("Content-Range");
      /bytes (\d+)-(\d+)\/(\d+)/.test(r) ? i.onDone(n) : (j('Missing or invalid "Content-Range" header.'), i.onError(0));
    } else n ? i.onDone(n) : i.onError(t.status);
  };
  class Br extends ai {
    constructor(t) {
      super(t);
      __privateAdd(this, _Br_instances);
      __privateAdd(this, _t38, li.bind(this));
      __publicField(this, "_cachedChunks", []);
      __publicField(this, "_done", false);
      __publicField(this, "_requests", []);
      __publicField(this, "_storedError", null);
      const { length: e } = t._source;
      this._contentLength = e, this._fullRequestXhr = t._request({
        onHeadersReceived: __privateMethod(this, _Br_instances, e_fn5).bind(this),
        onDone: __privateMethod(this, _Br_instances, s_fn4).bind(this),
        onError: __privateMethod(this, _Br_instances, i_fn6).bind(this),
        onProgress: __privateMethod(this, _Br_instances, a_fn5).bind(this)
      });
    }
    async read() {
      if (await this._headersCapability.promise, this._storedError) throw this._storedError;
      if (this._cachedChunks.length > 0) return {
        value: this._cachedChunks.shift(),
        done: false
      };
      if (this._done) return {
        value: void 0,
        done: true
      };
      const t = Promise.withResolvers();
      return this._requests.push(t), t.promise;
    }
    cancel(t) {
      this._done = true, this._headersCapability.reject(t), __privateGet(this, _t38).call(this), this._stream._abortRequest(this._fullRequestXhr), this._fullRequestXhr = null;
    }
  }
  _t38 = new WeakMap();
  _Br_instances = new WeakSet();
  e_fn5 = function() {
    const t = this._stream, { disableRange: e, rangeChunkSize: i } = t._source, s = this._fullRequestXhr;
    t._responseOrigin = hi(s.responseURL);
    const n = s.getAllResponseHeaders(), r = new Headers(n ? n.trimStart().replace(/[^\S ]+$/, "").split(/[\r\n]+/).map((l) => {
      const [h, ...c] = l.split(": ");
      return [
        h,
        c.join(": ")
      ];
    }) : []), { allowRangeRequests: a, suggestedLength: o } = Zs({
      responseHeaders: r,
      isHttp: t.isHttp,
      rangeChunkSize: i,
      disableRange: e
    });
    a && (this._isRangeSupported = true), this._contentLength = o || this._contentLength, this._filename = tn(r), this._isRangeSupported && t._abortRequest(s), this._headersCapability.resolve();
  };
  s_fn4 = function(t) {
    this._requests.length > 0 ? this._requests.shift().resolve({
      value: t,
      done: false
    }) : this._cachedChunks.push(t), this._done = true, this._cachedChunks.length === 0 && __privateGet(this, _t38).call(this);
  };
  i_fn6 = function(t) {
    this._storedError = ci(t, this._stream.url), this._headersCapability.reject(this._storedError);
    for (const e of this._requests) e.reject(this._storedError);
    this._requests.length = 0, this._cachedChunks.length = 0;
  };
  a_fn5 = function(t) {
    var _a29;
    (_a29 = this.onProgress) == null ? void 0 : _a29.call(this, {
      loaded: t.loaded,
      total: t.lengthComputable ? t.total : this._contentLength
    });
  };
  class Nr extends oi {
    constructor(t, e, i) {
      super(t, e, i);
      __privateAdd(this, _Nr_instances);
      __privateAdd(this, _t39, li.bind(this));
      __publicField(this, "onClosed", null);
      __publicField(this, "_done", false);
      __publicField(this, "_queuedChunk", null);
      __publicField(this, "_requests", []);
      __publicField(this, "_storedError", null);
      this._requestXhr = t._request({
        begin: e,
        end: i,
        onHeadersReceived: __privateMethod(this, _Nr_instances, e_fn6).bind(this),
        onDone: __privateMethod(this, _Nr_instances, s_fn5).bind(this),
        onError: __privateMethod(this, _Nr_instances, i_fn7).bind(this),
        onProgress: null
      });
    }
    async read() {
      if (this._storedError) throw this._storedError;
      if (this._queuedChunk !== null) {
        const e = this._queuedChunk;
        return this._queuedChunk = null, {
          value: e,
          done: false
        };
      }
      if (this._done) return {
        value: void 0,
        done: true
      };
      const t = Promise.withResolvers();
      return this._requests.push(t), t.promise;
    }
    cancel(t) {
      var _a29;
      this._done = true, __privateGet(this, _t39).call(this), this._stream._abortRequest(this._requestXhr), (_a29 = this.onClosed) == null ? void 0 : _a29.call(this);
    }
  }
  _t39 = new WeakMap();
  _Nr_instances = new WeakSet();
  e_fn6 = function() {
    var _a29;
    const t = hi((_a29 = this._requestXhr) == null ? void 0 : _a29.responseURL);
    try {
      en(t, this._stream._responseOrigin);
    } catch (e) {
      this._storedError = e, __privateMethod(this, _Nr_instances, i_fn7).call(this, 0);
    }
  };
  s_fn5 = function(t) {
    var _a29;
    this._requests.length > 0 ? this._requests.shift().resolve({
      value: t,
      done: false
    }) : this._queuedChunk = t, this._done = true, __privateGet(this, _t39).call(this), (_a29 = this.onClosed) == null ? void 0 : _a29.call(this);
  };
  i_fn7 = function(t) {
    this._storedError ?? (this._storedError = ci(t, this._stream.url));
    for (const e of this._requests) e.reject(this._storedError);
    this._requests.length = 0, this._queuedChunk = null;
  };
  function rn(d) {
    const { Readable: t } = process.getBuiltinModule("stream");
    return typeof t.toWeb == "function" ? t.toWeb(d) : process.getBuiltinModule("module").createRequire(import.meta.url)("node-readable-to-web-readable-stream").makeDefaultReadableStreamFromNodeReadable(d);
  }
  class Or extends ri {
    constructor(t) {
      super(t, Ur, Hr);
      const { url: e } = t;
      K(e.protocol === "file:", "PDFNodeStream only supports file:// URLs.");
    }
  }
  class Ur extends ai {
    constructor(t) {
      super(t);
      __publicField(this, "_reader", null);
      const { disableRange: e, disableStream: i, length: s, rangeChunkSize: n, url: r } = t._source;
      this._contentLength = s, this._isStreamingSupported = !i, this._isRangeSupported = !e;
      const a = process.getBuiltinModule("fs");
      a.promises.lstat(r).then((o) => {
        const l = a.createReadStream(r), h = rn(l);
        this._reader = h.getReader();
        const { size: c } = o;
        c <= 2 * n && (this._isRangeSupported = false), this._contentLength = c, !this._isStreamingSupported && this._isRangeSupported && this.cancel(new Qt("Streaming is disabled.")), this._headersCapability.resolve();
      }).catch((o) => {
        o.code === "ENOENT" && (o = ci(0, r)), this._headersCapability.reject(o);
      });
    }
    async read() {
      await this._headersCapability.promise;
      const { value: t, done: e } = await this._reader.read();
      return e ? {
        value: t,
        done: e
      } : (this._loaded += t.byteLength, this._callOnProgress(), {
        value: di(t),
        done: false
      });
    }
    cancel(t) {
      var _a29;
      (_a29 = this._reader) == null ? void 0 : _a29.cancel(t);
    }
  }
  class Hr extends oi {
    constructor(t, e, i) {
      super(t, e, i);
      __publicField(this, "_readCapability", Promise.withResolvers());
      __publicField(this, "_reader", null);
      const { url: s } = t._source, n = process.getBuiltinModule("fs");
      try {
        const r = n.createReadStream(s, {
          start: e,
          end: i - 1
        }), a = rn(r);
        this._reader = a.getReader(), this._readCapability.resolve();
      } catch (r) {
        this._readCapability.reject(r);
      }
    }
    async read() {
      await this._readCapability.promise;
      const { value: t, done: e } = await this._reader.read();
      return e ? {
        value: t,
        done: e
      } : {
        value: di(t),
        done: false
      };
    }
    cancel(t) {
      var _a29;
      (_a29 = this._reader) == null ? void 0 : _a29.cancel(t);
    }
  }
  const xe = /* @__PURE__ */ Symbol("INITIAL_DATA"), $r = () => ({
    ...Promise.withResolvers(),
    data: xe
  });
  class an {
    constructor() {
      __privateAdd(this, _an_instances);
      __privateAdd(this, _t40, /* @__PURE__ */ new Map());
    }
    get(t, e = null) {
      if (e) {
        const s = __privateMethod(this, _an_instances, e_fn7).call(this, t);
        return s.promise.then(() => e(s.data)), null;
      }
      const i = __privateGet(this, _t40).get(t);
      if (!i || i.data === xe) throw new Error(`Requesting object that isn't resolved yet ${t}.`);
      return i.data;
    }
    has(t) {
      const e = __privateGet(this, _t40).get(t);
      return !!e && e.data !== xe;
    }
    delete(t) {
      const e = __privateGet(this, _t40).get(t);
      return !e || e.data === xe ? false : (__privateGet(this, _t40).delete(t), true);
    }
    resolve(t, e = null) {
      const i = __privateMethod(this, _an_instances, e_fn7).call(this, t);
      i.data = e, i.resolve();
    }
    clear() {
      var _a29;
      for (const { data: t } of __privateGet(this, _t40).values()) (_a29 = t == null ? void 0 : t.bitmap) == null ? void 0 : _a29.close();
      __privateGet(this, _t40).clear();
    }
    *[Symbol.iterator]() {
      for (const [t, { data: e }] of __privateGet(this, _t40)) e !== xe && (yield [
        t,
        e
      ]);
    }
  }
  _t40 = new WeakMap();
  _an_instances = new WeakSet();
  e_fn7 = function(t) {
    return __privateGet(this, _t40).getOrInsertComputed(t, $r);
  };
  const jr = 1e5, Ls = 30;
  kt = (_h9 = class {
    constructor({ textContentSource: t, container: e, viewport: i }) {
      __privateAdd(this, _kt_instances);
      __privateAdd(this, _t41, Promise.withResolvers());
      __privateAdd(this, _e29, null);
      __privateAdd(this, _s23, false);
      __privateAdd(this, _i19, !!((_g4 = globalThis.FontInspector) == null ? void 0 : _g4.enabled));
      __privateAdd(this, _a14, null);
      __privateAdd(this, _r13, null);
      __privateAdd(this, _n13, 0);
      __privateAdd(this, _o10, 0);
      __privateAdd(this, _h8, null);
      __privateAdd(this, _l7, null);
      __privateAdd(this, _u6, 0);
      __privateAdd(this, _d7, 0);
      __privateAdd(this, _f6, /* @__PURE__ */ Object.create(null));
      __privateAdd(this, _m4, []);
      __privateAdd(this, _g5, null);
      __privateAdd(this, _c5, []);
      __privateAdd(this, _p4, /* @__PURE__ */ new WeakMap());
      __privateAdd(this, _b4, null);
      var _a29;
      if (t instanceof ReadableStream) __privateSet(this, _g5, t);
      else if (typeof t == "object") __privateSet(this, _g5, new ReadableStream({
        start(o) {
          o.enqueue(t), o.close();
        }
      }));
      else throw new Error('No "textContentSource" parameter specified.');
      __privateSet(this, _e29, __privateSet(this, _l7, e)), __privateSet(this, _d7, i.scale * zt.pixelRatio), __privateSet(this, _u6, i.rotation), __privateSet(this, _r13, {
        div: null,
        properties: null,
        ctx: null
      });
      const { pageWidth: s, pageHeight: n, pageX: r, pageY: a } = i.rawDims;
      __privateSet(this, _b4, [
        1,
        0,
        0,
        -1,
        -r,
        a + n
      ]), __privateSet(this, _o10, s), __privateSet(this, _n13, n), __privateMethod(_a29 = kt, _kt_static, k_fn2).call(_a29), e.style.setProperty("--min-font-size", __privateGet(kt, _S3)), ee(e, i), __privateGet(this, _t41).promise.finally(() => {
        __privateGet(kt, _v3).delete(this), __privateSet(this, _r13, null), __privateSet(this, _f6, null);
      }).catch(() => {
      });
    }
    static get fontFamilyMap() {
      const { isWindows: t, isFirefox: e } = mt.platform;
      return H(this, "fontFamilyMap", /* @__PURE__ */ new Map([
        [
          "sans-serif",
          `${t && e ? "Calibri, " : ""}sans-serif`
        ],
        [
          "monospace",
          `${t && e ? "Lucida Console, " : ""}monospace`
        ]
      ]));
    }
    render() {
      const t = () => {
        __privateGet(this, _h8).read().then(({ value: e, done: i }) => {
          if (i) {
            __privateGet(this, _t41).resolve();
            return;
          }
          __privateGet(this, _a14) ?? __privateSet(this, _a14, e.lang), Object.assign(__privateGet(this, _f6), e.styles), __privateMethod(this, _kt_instances, T_fn).call(this, e.items), t();
        }, __privateGet(this, _t41).reject);
      };
      return __privateSet(this, _h8, __privateGet(this, _g5).getReader()), __privateGet(kt, _v3).add(this), t(), __privateGet(this, _t41).promise;
    }
    update({ viewport: t, onBefore: e = null }) {
      var _a29;
      const i = t.scale * zt.pixelRatio, s = t.rotation;
      if (s !== __privateGet(this, _u6) && (e == null ? void 0 : e(), __privateSet(this, _u6, s), ee(__privateGet(this, _l7), {
        rotation: s
      })), i !== __privateGet(this, _d7)) {
        e == null ? void 0 : e(), __privateSet(this, _d7, i);
        const n = {
          div: null,
          properties: null,
          ctx: __privateMethod(_a29 = kt, _kt_static, M_fn2).call(_a29, __privateGet(this, _a14))
        };
        for (const r of __privateGet(this, _c5)) n.properties = __privateGet(this, _p4).get(r), n.div = r, __privateMethod(this, _kt_instances, x_fn).call(this, n);
      }
    }
    cancel() {
      var _a29;
      const t = new Qt("TextLayer task cancelled.");
      (_a29 = __privateGet(this, _h8)) == null ? void 0 : _a29.cancel(t).catch(() => {
      }), __privateSet(this, _h8, null), __privateGet(this, _t41).reject(t);
    }
    get textDivs() {
      return __privateGet(this, _c5);
    }
    get textContentItemsStr() {
      return __privateGet(this, _m4);
    }
    static cleanup() {
      if (!(__privateGet(this, _v3).size > 0)) {
        __privateGet(this, _A3).clear();
        for (const { canvas: t } of __privateGet(this, _y3).values()) t.remove();
        __privateGet(this, _y3).clear();
      }
    }
  }, _t41 = new WeakMap(), _e29 = new WeakMap(), _s23 = new WeakMap(), _i19 = new WeakMap(), _a14 = new WeakMap(), _r13 = new WeakMap(), _n13 = new WeakMap(), _o10 = new WeakMap(), _h8 = new WeakMap(), _l7 = new WeakMap(), _u6 = new WeakMap(), _d7 = new WeakMap(), _f6 = new WeakMap(), _m4 = new WeakMap(), _g5 = new WeakMap(), _c5 = new WeakMap(), _p4 = new WeakMap(), _b4 = new WeakMap(), _A3 = new WeakMap(), _y3 = new WeakMap(), __3 = new WeakMap(), _S3 = new WeakMap(), _v3 = new WeakMap(), _kt_instances = new WeakSet(), T_fn = function(t) {
    var _a29, _b7;
    if (__privateGet(this, _s23)) return;
    (_b7 = __privateGet(this, _r13)).ctx ?? (_b7.ctx = __privateMethod(_a29 = kt, _kt_static, M_fn2).call(_a29, __privateGet(this, _a14)));
    const e = __privateGet(this, _c5), i = __privateGet(this, _m4);
    for (const s of t) {
      if (e.length > jr) {
        j("Ignoring additional textDivs for performance reasons."), __privateSet(this, _s23, true);
        return;
      }
      if (s.str === void 0) {
        if (s.type === "beginMarkedContentProps" || s.type === "beginMarkedContent") {
          const n = __privateGet(this, _e29);
          __privateSet(this, _e29, document.createElement("span")), __privateGet(this, _e29).classList.add("markedContent"), s.id && __privateGet(this, _e29).setAttribute("id", `${s.id}`), s.tag === "Artifact" && (__privateGet(this, _e29).ariaHidden = true), n.append(__privateGet(this, _e29));
        } else s.type === "endMarkedContent" && __privateSet(this, _e29, __privateGet(this, _e29).parentNode);
        continue;
      }
      i.push(s.str), __privateMethod(this, _kt_instances, w_fn).call(this, s);
    }
  }, w_fn = function(t) {
    var _a29;
    const e = document.createElement("span"), i = {
      angle: 0,
      canvasWidth: 0,
      hasText: t.str !== "",
      hasEOL: t.hasEOL,
      fontSize: 0
    };
    __privateGet(this, _c5).push(e);
    const s = R.transform(__privateGet(this, _b4), t.transform);
    let n = Math.atan2(s[1], s[0]);
    const r = __privateGet(this, _f6)[t.fontName];
    r.vertical && (n += Math.PI / 2);
    let a = __privateGet(this, _i19) && r.fontSubstitution || r.fontFamily;
    a = kt.fontFamilyMap.get(a) || a;
    const o = Math.hypot(s[2], s[3]), l = o * __privateMethod(_a29 = kt, _kt_static, N_fn2).call(_a29, a, r, __privateGet(this, _a14));
    let h, c;
    n === 0 ? (h = s[4], c = s[5] - l) : (h = s[4] + l * Math.sin(n), c = s[5] - l * Math.cos(n));
    const f = e.style;
    f.left = `${(100 * h / __privateGet(this, _o10)).toFixed(2)}%`, f.top = `${(100 * c / __privateGet(this, _n13)).toFixed(2)}%`, f.setProperty("--font-height", `${o.toFixed(2)}px`), f.fontFamily = a, i.fontSize = o, e.setAttribute("role", "presentation"), e.textContent = t.str, e.dir = t.dir, __privateGet(this, _i19) && (e.dataset.fontName = r.fontSubstitutionLoadedName || t.fontName), n !== 0 && (i.angle = n * (180 / Math.PI));
    let g = false;
    if (t.str.length > 1) g = true;
    else if (t.str !== " " && t.transform[0] !== t.transform[3]) {
      const b = Math.abs(t.transform[0]), m = Math.abs(t.transform[3]);
      b !== m && Math.max(b, m) / Math.min(b, m) > 1.5 && (g = true);
    }
    if (g && (i.canvasWidth = r.vertical ? t.height : t.width), __privateGet(this, _p4).set(e, i), __privateGet(this, _r13).div = e, __privateGet(this, _r13).properties = i, __privateMethod(this, _kt_instances, x_fn).call(this, __privateGet(this, _r13)), i.hasText && __privateGet(this, _e29).append(e), i.hasEOL) {
      const b = document.createElement("br");
      b.setAttribute("role", "presentation"), __privateGet(this, _e29).append(b);
    }
  }, x_fn = function(t) {
    var _a29;
    const { div: e, properties: i, ctx: s } = t, { style: n } = e;
    if (i.canvasWidth !== 0 && i.hasText) {
      const { fontFamily: r } = n, { canvasWidth: a, fontSize: o } = i;
      __privateMethod(_a29 = kt, _kt_static, P_fn2).call(_a29, s, o * __privateGet(this, _d7), r);
      const { width: l } = s.measureText(e.textContent);
      l > 0 && n.setProperty("--scale-x", a * __privateGet(this, _d7) / l);
    }
    i.angle !== 0 && n.setProperty("--rotate", `${i.angle}deg`);
  }, _kt_static = new WeakSet(), M_fn2 = function(t = null) {
    let e = __privateGet(this, _y3).get(t || (t = ""));
    if (!e) {
      const i = document.createElement("canvas");
      i.className = "hiddenCanvasElement", i.lang = t, document.body.append(i), e = i.getContext("2d", {
        alpha: false,
        willReadFrequently: true
      }), __privateGet(this, _y3).set(t, e), __privateGet(this, __3).set(e, {
        size: 0,
        family: ""
      });
    }
    return e;
  }, P_fn2 = function(t, e, i) {
    const s = __privateGet(this, __3).get(t);
    e === s.size && i === s.family || (t.font = `${e}px ${i}`, s.size = e, s.family = i);
  }, k_fn2 = function() {
    if (__privateGet(this, _S3) !== null) return;
    const t = document.createElement("div");
    t.style.opacity = 0, t.style.lineHeight = 1, t.style.fontSize = "1px", t.style.position = "absolute", t.textContent = "X", document.body.append(t), __privateSet(this, _S3, t.getBoundingClientRect().height), t.remove();
  }, N_fn2 = function(t, e, i) {
    const s = __privateGet(this, _A3).get(t);
    if (s) return s;
    const n = __privateMethod(this, _kt_static, M_fn2).call(this, i);
    n.canvas.width = n.canvas.height = Ls, __privateMethod(this, _kt_static, P_fn2).call(this, n, Ls, t);
    const r = n.measureText(""), a = r.fontBoundingBoxAscent, o = Math.abs(r.fontBoundingBoxDescent);
    n.canvas.width = n.canvas.height = 0;
    let l = 0.8;
    return a ? l = a / (a + o) : (mt.platform.isFirefox && j("Enable the `dom.textMetrics.fontBoundingBox.enabled` preference in `about:config` to improve TextLayer rendering."), e.ascent ? l = e.ascent : e.descent && (l = 1 + e.descent)), __privateGet(this, _A3).set(t, l), l;
  }, __privateAdd(_h9, _kt_static), __privateAdd(_h9, _A3, /* @__PURE__ */ new Map()), __privateAdd(_h9, _y3, /* @__PURE__ */ new Map()), __privateAdd(_h9, __3, /* @__PURE__ */ new WeakMap()), __privateAdd(_h9, _S3, null), __privateAdd(_h9, _v3, /* @__PURE__ */ new Set()), _h9);
  const Gr = 100;
  zr = function(d = {}) {
    typeof d == "string" || d instanceof URL ? d = {
      url: d
    } : (d instanceof ArrayBuffer || ArrayBuffer.isView(d)) && (d = {
      data: d
    });
    const t = new Ki(), { docId: e } = t, i = d.url ? Qn(d.url) : null, s = d.data ? Zn(d.data) : null, n = d.httpHeaders || null, r = d.withCredentials === true, a = d.password ?? null, o = d.range instanceof on ? d.range : null, l = Number.isInteger(d.rangeChunkSize) && d.rangeChunkSize > 0 ? d.rangeChunkSize : 2 ** 16;
    let h = d.worker instanceof vt ? d.worker : null;
    const c = d.verbosity, f = typeof d.docBaseUrl == "string" && !si(d.docBaseUrl) ? d.docBaseUrl : null, g = $e(d.cMapUrl), b = d.cMapPacked !== false, m = d.CMapReaderFactory || (xt ? or : bs), w = $e(d.iccUrl), A = $e(d.standardFontDataUrl), S = d.StandardFontDataFactory || (xt ? lr : ys), E = $e(d.wasmUrl), C = d.WasmFactory || (xt ? hr : As), x = d.stopAtErrors !== true, T = Number.isInteger(d.maxImageSize) && d.maxImageSize > -1 ? d.maxImageSize : -1, k = d.isEvalSupported !== false, I = typeof d.isOffscreenCanvasSupported == "boolean" ? d.isOffscreenCanvasSupported : !xt, D = typeof d.isImageDecoderSupported == "boolean" ? d.isImageDecoderSupported : !xt && (mt.platform.isFirefox || !globalThis.chrome), B = Number.isInteger(d.canvasMaxAreaInBytes) ? d.canvasMaxAreaInBytes : -1, L = typeof d.disableFontFace == "boolean" ? d.disableFontFace : xt, Y = d.fontExtraProperties === true, tt = d.enableXfa === true, V = d.ownerDocument || globalThis.document, rt = d.disableRange === true, N = d.disableStream === true, O = d.disableAutoFetch === true, q = d.pdfBug === true, St = d.CanvasFactory || (xt ? ar : sr), Bt = d.FilterFactory || (xt ? rr : nr), z = d.enableHWA === true, G = d.useWasm !== false, it = d.pagesMapper || new zn(), Nt = o ? o.length : d.length ?? NaN, Yt = typeof d.useSystemFonts == "boolean" ? d.useSystemFonts : !xt && !L, _t74 = typeof d.useWorkerFetch == "boolean" ? d.useWorkerFetch : !!(m === bs && S === ys && C === As && g && A && E && Ee(g, document.baseURI) && Ee(A, document.baseURI) && Ee(E, document.baseURI)), at = null;
    _n(c);
    const It = {
      canvasFactory: new St({
        ownerDocument: V,
        enableHWA: z
      }),
      filterFactory: new Bt({
        docId: e,
        ownerDocument: V
      }),
      cMapReaderFactory: _t74 ? null : new m({
        baseUrl: g,
        isCompressed: b
      }),
      standardFontDataFactory: _t74 ? null : new S({
        baseUrl: A
      }),
      wasmFactory: _t74 ? null : new C({
        baseUrl: E
      })
    };
    h || (h = vt.create({
      verbosity: c,
      port: Ce.workerPort
    }), t._worker = h);
    const Vt = {
      docId: e,
      apiVersion: "5.5.207",
      data: s,
      password: a,
      disableAutoFetch: O,
      rangeChunkSize: l,
      length: Nt,
      docBaseUrl: f,
      enableXfa: tt,
      evaluatorOptions: {
        maxImageSize: T,
        disableFontFace: L,
        ignoreErrors: x,
        isEvalSupported: k,
        isOffscreenCanvasSupported: I,
        isImageDecoderSupported: D,
        canvasMaxAreaInBytes: B,
        fontExtraProperties: Y,
        useSystemFonts: Yt,
        useWasm: G,
        useWorkerFetch: _t74,
        cMapUrl: g,
        iccUrl: w,
        standardFontDataUrl: A,
        wasmUrl: E
      }
    }, Ne = {
      ownerDocument: V,
      pdfBug: q,
      styleElement: at,
      enableHWA: z,
      loadingParams: {
        disableAutoFetch: O,
        enableXfa: tt
      }
    };
    return h.promise.then(function() {
      if (t.destroyed) throw new Error("Loading aborted");
      if (h.destroyed) throw new Error("Worker was destroyed");
      const fi = h.messageHandler.sendWithPromise("GetDocRequest", Vt, s ? [
        s.buffer
      ] : null);
      let re;
      if (o) re = new Tr({
        pdfDataRangeTransport: o,
        disableRange: rt,
        disableStream: N
      });
      else if (!s) {
        if (!i) throw new Error("getDocument - no `url` parameter provided.");
        const Ot = Ee(i) ? Ir : xt ? Or : Fr;
        re = new Ot({
          url: i,
          length: Nt,
          httpHeaders: n,
          withCredentials: r,
          rangeChunkSize: l,
          disableRange: rt,
          disableStream: N
        });
      }
      return fi.then((Ot) => {
        if (t.destroyed) throw new Error("Loading aborted");
        if (h.destroyed) throw new Error("Worker was destroyed");
        const qt = new Se(e, Ot, h.port), pi = new Xr(qt, t, re, Ne, It, it);
        t._transport = pi, qt.send("Ready", null);
      });
    }).catch(t._capability.reject), t;
  };
  const _Ki = class _Ki {
    constructor() {
      __publicField(this, "_capability", Promise.withResolvers());
      __publicField(this, "_transport", null);
      __publicField(this, "_worker", null);
      __publicField(this, "docId", `d${__privateWrapper(_Ki, _t42)._++}`);
      __publicField(this, "destroyed", false);
      __publicField(this, "onPassword", null);
      __publicField(this, "onProgress", null);
    }
    get promise() {
      return this._capability.promise;
    }
    async destroy() {
      var _a29, _b7, _c10, _d12;
      this.destroyed = true;
      try {
        ((_a29 = this._worker) == null ? void 0 : _a29.port) && (this._worker._pendingDestroy = true), await ((_b7 = this._transport) == null ? void 0 : _b7.destroy());
      } catch (t) {
        throw ((_c10 = this._worker) == null ? void 0 : _c10.port) && delete this._worker._pendingDestroy, t;
      }
      this._transport = null, (_d12 = this._worker) == null ? void 0 : _d12.destroy(), this._worker = null;
    }
    async getData() {
      return this._transport.getData();
    }
  };
  _t42 = new WeakMap();
  __privateAdd(_Ki, _t42, 0);
  let Ki = _Ki;
  on = (_i21 = class {
    constructor(t, e, i = false, s = null) {
      __privateAdd(this, _t43, Promise.withResolvers());
      __privateAdd(this, _e30, []);
      __privateAdd(this, _s24, []);
      __privateAdd(this, _i20, []);
      this.length = t, this.initialData = e, this.progressiveDone = i, this.contentDispositionFilename = s, Object.defineProperty(this, "onDataProgress", {
        value: () => {
          $s("`PDFDataRangeTransport.prototype.onDataProgress` - method was removed, since loading progress is now reported automatically through the `PDFDataTransportStream` class (and related code).");
        }
      });
    }
    addRangeListener(t) {
      __privateGet(this, _i20).push(t);
    }
    addProgressiveReadListener(t) {
      __privateGet(this, _s24).push(t);
    }
    addProgressiveDoneListener(t) {
      __privateGet(this, _e30).push(t);
    }
    onDataRange(t, e) {
      for (const i of __privateGet(this, _i20)) i(t, e);
    }
    onDataProgressiveRead(t) {
      __privateGet(this, _t43).promise.then(() => {
        for (const e of __privateGet(this, _s24)) e(t);
      });
    }
    onDataProgressiveDone() {
      __privateGet(this, _t43).promise.then(() => {
        for (const t of __privateGet(this, _e30)) t();
      });
    }
    transportReady() {
      __privateGet(this, _t43).resolve();
    }
    requestDataRange(t, e) {
      Z("Abstract method PDFDataRangeTransport.requestDataRange");
    }
    abort() {
    }
  }, _t43 = new WeakMap(), _e30 = new WeakMap(), _s24 = new WeakMap(), _i20 = new WeakMap(), _i21);
  class Vr {
    constructor(t, e) {
      this._pdfInfo = t, this._transport = e;
    }
    get pagesMapper() {
      return this._transport.pagesMapper;
    }
    get annotationStorage() {
      return this._transport.annotationStorage;
    }
    get canvasFactory() {
      return this._transport.canvasFactory;
    }
    get filterFactory() {
      return this._transport.filterFactory;
    }
    get numPages() {
      return this._pdfInfo.numPages;
    }
    get fingerprints() {
      return this._pdfInfo.fingerprints;
    }
    get isPureXfa() {
      return H(this, "isPureXfa", !!this._transport._htmlForXfa);
    }
    get allXfaHtml() {
      return this._transport._htmlForXfa;
    }
    getPage(t) {
      return this._transport.getPage(t);
    }
    getPageIndex(t) {
      return this._transport.getPageIndex(t);
    }
    getDestinations() {
      return this._transport.getDestinations();
    }
    getDestination(t) {
      return this._transport.getDestination(t);
    }
    getPageLabels() {
      return this._transport.getPageLabels();
    }
    getPageLayout() {
      return this._transport.getPageLayout();
    }
    getPageMode() {
      return this._transport.getPageMode();
    }
    getViewerPreferences() {
      return this._transport.getViewerPreferences();
    }
    getOpenAction() {
      return this._transport.getOpenAction();
    }
    getAttachments() {
      return this._transport.getAttachments();
    }
    getAnnotationsByType(t, e) {
      return this._transport.getAnnotationsByType(t, e);
    }
    getJSActions() {
      return this._transport.getDocJSActions();
    }
    getOutline() {
      return this._transport.getOutline();
    }
    getOptionalContentConfig({ intent: t = "display" } = {}) {
      const { renderingIntent: e } = this._transport.getRenderingIntent(t);
      return this._transport.getOptionalContentConfig(e);
    }
    getPermissions() {
      return this._transport.getPermissions();
    }
    getMetadata() {
      return this._transport.getMetadata();
    }
    getMarkInfo() {
      return this._transport.getMarkInfo();
    }
    getData() {
      return this._transport.getData();
    }
    saveDocument() {
      return this._transport.saveDocument();
    }
    extractPages(t) {
      return this._transport.extractPages(t);
    }
    getDownloadInfo() {
      return this._transport.downloadInfoCapability.promise;
    }
    cleanup(t = false) {
      return this._transport.startCleanup(t || this.isPureXfa);
    }
    destroy() {
      return this.loadingTask.destroy();
    }
    cachedPageNumber(t) {
      return this._transport.cachedPageNumber(t);
    }
    get loadingParams() {
      return this._transport.loadingParams;
    }
    get loadingTask() {
      return this._transport.loadingTask;
    }
    getFieldObjects() {
      return this._transport.getFieldObjects();
    }
    hasJSActions() {
      return this._transport.hasJSActions();
    }
    getCalculationOrderIds() {
      return this._transport.getCalculationOrderIds();
    }
  }
  class Wr {
    constructor(t, e, i, s, n = false) {
      __privateAdd(this, _Wr_instances);
      __privateAdd(this, _t44, false);
      __privateAdd(this, _e31, null);
      this._pageIndex = t, this._pageInfo = e, this._transport = i, this._stats = n ? new cs() : null, this._pdfBug = n, this.commonObjs = i.commonObjs, this.objs = new an(), this._intentStates = /* @__PURE__ */ new Map(), this.destroyed = false, this.recordedBBoxes = null, __privateSet(this, _e31, s);
    }
    get pageNumber() {
      return this._pageIndex + 1;
    }
    set pageNumber(t) {
      this._pageIndex = t - 1;
    }
    get rotate() {
      return this._pageInfo.rotate;
    }
    get ref() {
      return this._pageInfo.ref;
    }
    get userUnit() {
      return this._pageInfo.userUnit;
    }
    get view() {
      return this._pageInfo.view;
    }
    getViewport({ scale: t, rotation: e = this.rotate, offsetX: i = 0, offsetY: s = 0, dontFlip: n = false } = {}) {
      return new Le({
        viewBox: this.view,
        userUnit: this.userUnit,
        scale: t,
        rotation: e,
        offsetX: i,
        offsetY: s,
        dontFlip: n
      });
    }
    getAnnotations({ intent: t = "display" } = {}) {
      const { renderingIntent: e } = this._transport.getRenderingIntent(t);
      return this._transport.getAnnotations(this._pageIndex, e);
    }
    getJSActions() {
      return this._transport.getPageJSActions(this._pageIndex);
    }
    get filterFactory() {
      return this._transport.filterFactory;
    }
    get isPureXfa() {
      return H(this, "isPureXfa", !!this._transport._htmlForXfa);
    }
    async getXfa() {
      var _a29;
      return ((_a29 = this._transport._htmlForXfa) == null ? void 0 : _a29.children[this._pageIndex]) || null;
    }
    render({ canvasContext: t, canvas: e = t.canvas, viewport: i, intent: s = "display", annotationMode: n = Jt.ENABLE, transform: r = null, background: a = null, optionalContentConfigPromise: o = null, annotationCanvasMap: l = null, pageColors: h = null, printAnnotationStorage: c = null, isEditing: f = false, recordOperations: g = false, operationsFilter: b = null }) {
      var _a29, _b7, _c10;
      (_a29 = this._stats) == null ? void 0 : _a29.time("Overall");
      const m = this._transport.getRenderingIntent(s, n, c, f), { renderingIntent: w, cacheKey: A } = m;
      __privateSet(this, _t44, false), o || (o = this._transport.getOptionalContentConfig(w));
      const S = this._intentStates.getOrInsertComputed(A, Mi);
      S.streamReaderCancelTimeout && (clearTimeout(S.streamReaderCancelTimeout), S.streamReaderCancelTimeout = null);
      const E = !!(w & Pt.PRINT);
      S.displayReadyCapability || (S.displayReadyCapability = Promise.withResolvers(), S.operatorList = {
        fnArray: [],
        argsArray: [],
        lastChunk: false,
        separateAnnots: null
      }, (_b7 = this._stats) == null ? void 0 : _b7.time("Page Request"), this._pumpOperatorList(m));
      const C = !!(this._pdfBug && ((_c10 = globalThis.StepperManager) == null ? void 0 : _c10.enabled)), x = !this.recordedBBoxes && (g || C), T = (D) => {
        var _a30, _b8;
        if (S.renderTasks.delete(k), x) {
          const B = (_a30 = k.gfx) == null ? void 0 : _a30.dependencyTracker.take();
          B && (k.stepper && k.stepper.setOperatorBBoxes(B, k.gfx.dependencyTracker.takeDebugMetadata()), g && (this.recordedBBoxes = B));
        }
        E && __privateSet(this, _t44, true), __privateMethod(this, _Wr_instances, s_fn6).call(this), D ? (k.capability.reject(D), this._abortOperatorList({
          intentState: S,
          reason: D instanceof Error ? D : new Error(D)
        })) : k.capability.resolve(), this._stats && (this._stats.timeEnd("Rendering"), this._stats.timeEnd("Overall"), ((_b8 = globalThis.Stats) == null ? void 0 : _b8.enabled) && globalThis.Stats.add(this.pageNumber, this._stats));
      }, k = new ue({
        callback: T,
        params: {
          canvas: e,
          canvasContext: t,
          dependencyTracker: x ? new dr(e, S.operatorList.length, C) : null,
          viewport: i,
          transform: r,
          background: a
        },
        objs: this.objs,
        commonObjs: this.commonObjs,
        annotationCanvasMap: l,
        operatorList: S.operatorList,
        pageIndex: this._pageIndex,
        canvasFactory: this._transport.canvasFactory,
        filterFactory: this._transport.filterFactory,
        useRequestAnimationFrame: !E,
        pdfBug: this._pdfBug,
        pageColors: h,
        enableHWA: this._transport.enableHWA,
        operationsFilter: b
      });
      (S.renderTasks || (S.renderTasks = /* @__PURE__ */ new Set())).add(k);
      const I = k.task;
      return Promise.all([
        S.displayReadyCapability.promise,
        o
      ]).then(([D, B]) => {
        var _a30;
        if (this.destroyed) {
          T();
          return;
        }
        if ((_a30 = this._stats) == null ? void 0 : _a30.time("Rendering"), !(B.renderingIntent & w)) throw new Error("Must use the same `intent`-argument when calling the `PDFPageProxy.render` and `PDFDocumentProxy.getOptionalContentConfig` methods.");
        k.initializeGraphics({
          transparency: D,
          optionalContentConfig: B
        }), k.operatorListChanged();
      }).catch(T), I;
    }
    getOperatorList({ intent: t = "display", annotationMode: e = Jt.ENABLE, printAnnotationStorage: i = null, isEditing: s = false } = {}) {
      var _a29;
      function n() {
        a.operatorList.lastChunk && (a.opListReadCapability.resolve(a.operatorList), a.renderTasks.delete(o));
      }
      const r = this._transport.getRenderingIntent(t, e, i, s, true), a = this._intentStates.getOrInsertComputed(r.cacheKey, Mi);
      let o;
      return a.opListReadCapability || (o = /* @__PURE__ */ Object.create(null), o.operatorListChanged = n, a.opListReadCapability = Promise.withResolvers(), (a.renderTasks || (a.renderTasks = /* @__PURE__ */ new Set())).add(o), a.operatorList = {
        fnArray: [],
        argsArray: [],
        lastChunk: false,
        separateAnnots: null
      }, (_a29 = this._stats) == null ? void 0 : _a29.time("Page Request"), this._pumpOperatorList(r)), a.opListReadCapability.promise;
    }
    streamTextContent({ includeMarkedContent: t = false, disableNormalization: e = false } = {}) {
      return this._transport.messageHandler.sendWithStream("GetTextContent", {
        pageId: __privateGet(this, _e31).getPageId(this._pageIndex + 1) - 1,
        pageIndex: this._pageIndex,
        includeMarkedContent: t === true,
        disableNormalization: e === true
      }, {
        highWaterMark: 100,
        size(s) {
          return s.items.length;
        }
      });
    }
    async getTextContent(t = {}) {
      if (this._transport._htmlForXfa) return this.getXfa().then((s) => ke.textContent(s));
      const e = this.streamTextContent(t), i = {
        items: [],
        styles: /* @__PURE__ */ Object.create(null),
        lang: null
      };
      for await (const s of e) i.lang ?? (i.lang = s.lang), Object.assign(i.styles, s.styles), i.items.push(...s.items);
      return i;
    }
    getStructTree() {
      return this._transport.getStructTree(this._pageIndex);
    }
    _destroy() {
      this.destroyed = true;
      const t = [];
      for (const e of this._intentStates.values()) if (this._abortOperatorList({
        intentState: e,
        reason: new Error("Page was destroyed."),
        force: true
      }), !e.opListReadCapability) for (const i of e.renderTasks) t.push(i.completed), i.cancel();
      return this.objs.clear(), __privateSet(this, _t44, false), Promise.all(t);
    }
    cleanup(t = false) {
      __privateSet(this, _t44, true);
      const e = __privateMethod(this, _Wr_instances, s_fn6).call(this);
      return t && e && (this._stats && (this._stats = new cs())), e;
    }
    _startRenderPage(t, e) {
      var _a29, _b7;
      const i = this._intentStates.get(e);
      i && ((_a29 = this._stats) == null ? void 0 : _a29.timeEnd("Page Request"), (_b7 = i.displayReadyCapability) == null ? void 0 : _b7.resolve(t));
    }
    _renderPageChunk(t, e) {
      for (let i = 0, s = t.length; i < s; i++) e.operatorList.fnArray.push(t.fnArray[i]), e.operatorList.argsArray.push(t.argsArray[i]);
      e.operatorList.lastChunk = t.lastChunk, e.operatorList.separateAnnots = t.separateAnnots;
      for (const i of e.renderTasks) i.operatorListChanged();
      t.lastChunk && __privateMethod(this, _Wr_instances, s_fn6).call(this);
    }
    _pumpOperatorList({ renderingIntent: t, cacheKey: e, annotationStorageSerializable: i, modifiedIds: s }) {
      const { map: n, transfer: r } = i, o = this._transport.messageHandler.sendWithStream("GetOperatorList", {
        pageId: __privateGet(this, _e31).getPageId(this._pageIndex + 1) - 1,
        pageIndex: this._pageIndex,
        intent: t,
        cacheKey: e,
        annotationStorage: n,
        modifiedIds: s
      }, void 0, r).getReader(), l = this._intentStates.get(e);
      l.streamReader = o;
      const h = () => {
        o.read().then(({ value: c, done: f }) => {
          if (f) {
            l.streamReader = null;
            return;
          }
          this._transport.destroyed || (this._renderPageChunk(c, l), h());
        }, (c) => {
          if (l.streamReader = null, !this._transport.destroyed) {
            if (l.operatorList) {
              l.operatorList.lastChunk = true;
              for (const f of l.renderTasks) f.operatorListChanged();
              __privateMethod(this, _Wr_instances, s_fn6).call(this);
            }
            if (l.displayReadyCapability) l.displayReadyCapability.reject(c);
            else if (l.opListReadCapability) l.opListReadCapability.reject(c);
            else throw c;
          }
        });
      };
      h();
    }
    _abortOperatorList({ intentState: t, reason: e, force: i = false }) {
      if (t.streamReader) {
        if (t.streamReaderCancelTimeout && (clearTimeout(t.streamReaderCancelTimeout), t.streamReaderCancelTimeout = null), !i) {
          if (t.renderTasks.size > 0) return;
          if (e instanceof ji) {
            let s = Gr;
            e.extraDelay > 0 && e.extraDelay < 1e3 && (s += e.extraDelay), t.streamReaderCancelTimeout = setTimeout(() => {
              t.streamReaderCancelTimeout = null, this._abortOperatorList({
                intentState: t,
                reason: e,
                force: true
              });
            }, s);
            return;
          }
        }
        if (t.streamReader.cancel(new Qt(e.message)).catch(() => {
        }), t.streamReader = null, !this._transport.destroyed) {
          for (const [s, n] of this._intentStates) if (n === t) {
            this._intentStates.delete(s);
            break;
          }
          this.cleanup();
        }
      }
    }
    get stats() {
      return this._stats;
    }
  }
  _t44 = new WeakMap();
  _e31 = new WeakMap();
  _Wr_instances = new WeakSet();
  s_fn6 = function() {
    if (!__privateGet(this, _t44) || this.destroyed) return false;
    for (const { renderTasks: t, operatorList: e } of this._intentStates.values()) if (t.size > 0 || !e.lastChunk) return false;
    return this._intentStates.clear(), this.objs.clear(), __privateSet(this, _t44, false), true;
  };
  vt = (_j2 = class {
    constructor({ name: t = null, port: e = null, verbosity: i = Cn() } = {}) {
      __privateAdd(this, __this_instances);
      __privateAdd(this, _t45, Promise.withResolvers());
      __privateAdd(this, _e32, null);
      __privateAdd(this, _s25, null);
      __privateAdd(this, _i22, null);
      if (this.name = t, this.destroyed = false, this.verbosity = i, e) {
        if (__privateGet(vt, _n14).has(e)) throw new Error("Cannot use more than one PDFWorker per port.");
        __privateGet(vt, _n14).set(e, this), __privateMethod(this, __this_instances, h_fn3).call(this, e);
      } else __privateMethod(this, __this_instances, l_fn4).call(this);
    }
    get promise() {
      return __privateGet(this, _t45).promise;
    }
    get port() {
      return __privateGet(this, _s25);
    }
    get messageHandler() {
      return __privateGet(this, _e32);
    }
    destroy() {
      var _a29, _b7;
      this.destroyed = true, (_a29 = __privateGet(this, _i22)) == null ? void 0 : _a29.terminate(), __privateSet(this, _i22, null), __privateGet(vt, _n14).delete(__privateGet(this, _s25)), __privateSet(this, _s25, null), (_b7 = __privateGet(this, _e32)) == null ? void 0 : _b7.destroy(), __privateSet(this, _e32, null);
    }
    static create(t) {
      const e = __privateGet(this, _n14).get(t == null ? void 0 : t.port);
      if (e) {
        if (e._pendingDestroy) throw new Error("PDFWorker.create - the worker is being destroyed.\nPlease remember to await `PDFDocumentLoadingTask.destroy()`-calls.");
        return e;
      }
      return new vt(t);
    }
    static get workerSrc() {
      if (Ce.workerSrc) return Ce.workerSrc;
      throw new Error('No "GlobalWorkerOptions.workerSrc" specified.');
    }
    static get _setupFakeWorkerGlobal() {
      return H(this, "_setupFakeWorkerGlobal", (async () => __privateGet(this, __this_static, d_get) ? __privateGet(this, __this_static, d_get) : (await import(this.workerSrc).then(async (m) => {
        await m.__tla;
        return m;
      })).WorkerMessageHandler)());
    }
  }, _t45 = new WeakMap(), _e32 = new WeakMap(), _s25 = new WeakMap(), _i22 = new WeakMap(), _a15 = new WeakMap(), _r14 = new WeakMap(), _n14 = new WeakMap(), __this_instances = new WeakSet(), o_fn2 = function() {
    __privateGet(this, _t45).resolve(), __privateGet(this, _e32).send("configure", {
      verbosity: this.verbosity
    });
  }, h_fn3 = function(t) {
    __privateSet(this, _s25, t), __privateSet(this, _e32, new Se("main", "worker", t)), __privateGet(this, _e32).on("ready", () => {
    }), __privateMethod(this, __this_instances, o_fn2).call(this);
  }, l_fn4 = function() {
    if (__privateGet(vt, _r14) || __privateGet(vt, __this_static, d_get)) {
      __privateMethod(this, __this_instances, u_fn6).call(this);
      return;
    }
    let { workerSrc: t } = vt;
    try {
      vt._isSameOrigin(window.location, t) || (t = vt._createCDNWrapper(new URL(t, window.location).href));
      const e = new Worker(t, {
        type: "module"
      }), i = new Se("main", "worker", e), s = () => {
        n.abort(), i.destroy(), e.terminate(), this.destroyed ? __privateGet(this, _t45).reject(new Error("Worker was destroyed")) : __privateMethod(this, __this_instances, u_fn6).call(this);
      }, n = new AbortController();
      e.addEventListener("error", () => {
        __privateGet(this, _i22) || s();
      }, {
        signal: n.signal
      }), i.on("test", (a) => {
        if (n.abort(), this.destroyed || !a) {
          s();
          return;
        }
        __privateSet(this, _e32, i), __privateSet(this, _s25, e), __privateSet(this, _i22, e), __privateMethod(this, __this_instances, o_fn2).call(this);
      }), i.on("ready", (a) => {
        if (n.abort(), this.destroyed) {
          s();
          return;
        }
        try {
          r();
        } catch {
          __privateMethod(this, __this_instances, u_fn6).call(this);
        }
      });
      const r = () => {
        const a = new Uint8Array();
        i.send("test", a, [
          a.buffer
        ]);
      };
      r();
      return;
    } catch {
      ei("The worker has been disabled.");
    }
    __privateMethod(this, __this_instances, u_fn6).call(this);
  }, u_fn6 = function() {
    __privateGet(vt, _r14) || (j("Setting up fake worker."), __privateSet(vt, _r14, true)), vt._setupFakeWorkerGlobal.then((t) => {
      if (this.destroyed) {
        __privateGet(this, _t45).reject(new Error("Worker was destroyed"));
        return;
      }
      const e = new ir();
      __privateSet(this, _s25, e);
      const i = `fake${__privateWrapper(vt, _a15)._++}`, s = new Se(i + "_worker", i, e);
      t.setup(s, e), __privateSet(this, _e32, new Se(i, i + "_worker", e)), __privateMethod(this, __this_instances, o_fn2).call(this);
    }).catch((t) => {
      __privateGet(this, _t45).reject(new Error(`Setting up fake worker failed: "${t.message}".`));
    });
  }, __this_static = new WeakSet(), d_get = function() {
    var _a29;
    try {
      return ((_a29 = globalThis.pdfjsWorker) == null ? void 0 : _a29.WorkerMessageHandler) || null;
    } catch {
      return null;
    }
  }, __privateAdd(_j2, __this_static), __privateAdd(_j2, _a15, 0), __privateAdd(_j2, _r14, false), __privateAdd(_j2, _n14, /* @__PURE__ */ new WeakMap()), xt && (__privateSet(_j2, _r14, true), Ce.workerSrc || (Ce.workerSrc = "./pdf.worker.mjs")), _j2._isSameOrigin = (t, e) => {
    const i = URL.parse(t);
    if (!(i == null ? void 0 : i.origin) || i.origin === "null") return false;
    const s = new URL(e, i);
    return i.origin === s.origin;
  }, _j2._createCDNWrapper = (t) => {
    const e = `await import("${t}");`;
    return URL.createObjectURL(new Blob([
      e
    ], {
      type: "text/javascript"
    }));
  }, _j2.fromPort = (t) => {
    if ($s("`PDFWorker.fromPort` - please use `PDFWorker.create` instead."), !(t == null ? void 0 : t.port)) throw new Error("PDFWorker.fromPort - invalid method signature.");
    return _j2.create(t);
  }, _j2);
  class Xr {
    constructor(t, e, i, s, n, r) {
      __privateAdd(this, _Xr_instances);
      __publicField(this, "downloadInfoCapability", Promise.withResolvers());
      __privateAdd(this, _t46, null);
      __privateAdd(this, _e33, /* @__PURE__ */ new Map());
      __privateAdd(this, _s26, null);
      __privateAdd(this, _i23, /* @__PURE__ */ new Map());
      __privateAdd(this, _a16, /* @__PURE__ */ new Map());
      __privateAdd(this, _r15, /* @__PURE__ */ new Map());
      __privateAdd(this, _n15, null);
      __privateAdd(this, _o11, null);
      this.messageHandler = t, this.loadingTask = e, __privateSet(this, _s26, i), this.commonObjs = new an(), this.fontLoader = new qn({
        ownerDocument: s.ownerDocument,
        styleElement: s.styleElement
      }), this.enableHWA = s.enableHWA, this.loadingParams = s.loadingParams, this._params = s, this.canvasFactory = n.canvasFactory, this.filterFactory = n.filterFactory, this.cMapReaderFactory = n.cMapReaderFactory, this.standardFontDataFactory = n.standardFontDataFactory, this.wasmFactory = n.wasmFactory, this.destroyed = false, this.destroyCapability = null, this.setupMessageHandler(), this.pagesMapper = r, this.pagesMapper.addListener(__privateMethod(this, _Xr_instances, h_fn4).bind(this));
    }
    get annotationStorage() {
      return H(this, "annotationStorage", new Wi());
    }
    getRenderingIntent(t, e = Jt.ENABLE, i = null, s = false, n = false) {
      let r = Pt.DISPLAY, a = Me;
      switch (t) {
        case "any":
          r = Pt.ANY;
          break;
        case "display":
          break;
        case "print":
          r = Pt.PRINT;
          break;
        default:
          j(`getRenderingIntent - invalid intent: ${t}`);
      }
      const o = r & Pt.PRINT && i instanceof Ws ? i : this.annotationStorage;
      switch (e) {
        case Jt.DISABLE:
          r += Pt.ANNOTATIONS_DISABLE;
          break;
        case Jt.ENABLE:
          break;
        case Jt.ENABLE_FORMS:
          r += Pt.ANNOTATIONS_FORMS;
          break;
        case Jt.ENABLE_STORAGE:
          r += Pt.ANNOTATIONS_STORAGE, a = o.serializable;
          break;
        default:
          j(`getRenderingIntent - invalid annotationMode: ${e}`);
      }
      s && (r += Pt.IS_EDITING), n && (r += Pt.OPLIST);
      const { ids: l, hash: h } = o.modifiedIds, c = [
        r,
        a.hash,
        h
      ];
      return {
        renderingIntent: r,
        cacheKey: c.join("_"),
        annotationStorageSerializable: a,
        modifiedIds: l
      };
    }
    destroy() {
      var _a29;
      if (this.destroyCapability) return this.destroyCapability.promise;
      this.destroyed = true, this.destroyCapability = Promise.withResolvers(), (_a29 = __privateGet(this, _n15)) == null ? void 0 : _a29.reject(new Error("Worker was destroyed during onPassword callback"));
      const t = [];
      for (const i of __privateGet(this, _i23).values()) t.push(i._destroy());
      __privateGet(this, _i23).clear(), __privateGet(this, _a16).clear(), __privateGet(this, _r15).clear(), this.hasOwnProperty("annotationStorage") && this.annotationStorage.resetModified();
      const e = this.messageHandler.sendWithPromise("Terminate", null);
      return t.push(e), Promise.all(t).then(() => {
        var _a30, _b7;
        this.commonObjs.clear(), this.fontLoader.clear(), __privateGet(this, _e33).clear(), this.filterFactory.destroy(), kt.cleanup(), (_a30 = __privateGet(this, _s26)) == null ? void 0 : _a30.cancelAllRequests(new Qt("Worker was terminated.")), (_b7 = this.messageHandler) == null ? void 0 : _b7.destroy(), this.messageHandler = null, this.destroyCapability.resolve();
      }, this.destroyCapability.reject), this.destroyCapability.promise;
    }
    setupMessageHandler() {
      const { messageHandler: t, loadingTask: e } = this;
      t.on("GetReader", (i, s) => {
        K(__privateGet(this, _s26), "GetReader - no `BasePDFStream` instance available."), __privateSet(this, _t46, __privateGet(this, _s26).getFullReader()), __privateGet(this, _t46).onProgress = (n) => __privateMethod(this, _Xr_instances, u_fn7).call(this, n), s.onPull = () => {
          __privateGet(this, _t46).read().then(function({ value: n, done: r }) {
            if (r) {
              s.close();
              return;
            }
            K(n instanceof ArrayBuffer, "GetReader - expected an ArrayBuffer."), s.enqueue(new Uint8Array(n), 1, [
              n
            ]);
          }).catch((n) => {
            s.error(n);
          });
        }, s.onCancel = (n) => {
          __privateGet(this, _t46).cancel(n), s.ready.catch((r) => {
            if (!this.destroyed) throw r;
          });
        };
      }), t.on("ReaderHeadersReady", async (i) => {
        await __privateGet(this, _t46).headersReady;
        const { isStreamingSupported: s, isRangeSupported: n, contentLength: r } = __privateGet(this, _t46);
        return s && n && (__privateGet(this, _t46).onProgress = null), {
          isStreamingSupported: s,
          isRangeSupported: n,
          contentLength: r
        };
      }), t.on("GetRangeReader", (i, s) => {
        K(__privateGet(this, _s26), "GetRangeReader - no `BasePDFStream` instance available.");
        const n = __privateGet(this, _s26).getRangeReader(i.begin, i.end);
        if (!n) {
          s.close();
          return;
        }
        s.onPull = () => {
          n.read().then(function({ value: r, done: a }) {
            if (a) {
              s.close();
              return;
            }
            K(r instanceof ArrayBuffer, "GetRangeReader - expected an ArrayBuffer."), s.enqueue(new Uint8Array(r), 1, [
              r
            ]);
          }).catch((r) => {
            s.error(r);
          });
        }, s.onCancel = (r) => {
          n.cancel(r), s.ready.catch((a) => {
            if (!this.destroyed) throw a;
          });
        };
      }), t.on("GetDoc", ({ pdfInfo: i }) => {
        this.pagesMapper.pagesNumber = i.numPages, this._numPages = i.numPages, this._htmlForXfa = i.htmlForXfa, delete i.htmlForXfa, e._capability.resolve(new Vr(i, this));
      }), t.on("DocException", (i) => {
        e._capability.reject(Ct(i));
      }), t.on("PasswordRequest", (i) => {
        __privateSet(this, _n15, Promise.withResolvers());
        try {
          if (!e.onPassword) throw Ct(i);
          const s = (n) => {
            n instanceof Error ? __privateGet(this, _n15).reject(n) : __privateGet(this, _n15).resolve({
              password: n
            });
          };
          e.onPassword(s, i.code);
        } catch (s) {
          __privateGet(this, _n15).reject(s);
        }
        return __privateGet(this, _n15).promise;
      }), t.on("DataLoaded", (i) => {
        __privateMethod(this, _Xr_instances, u_fn7).call(this, {
          loaded: i.length,
          total: i.length
        }), this.downloadInfoCapability.resolve(i);
      }), t.on("StartRenderPage", (i) => {
        if (this.destroyed) return;
        __privateGet(this, _i23).get(i.pageIndex)._startRenderPage(i.transparency, i.cacheKey);
      }), t.on("commonobj", ([i, s, n]) => {
        var _a29;
        if (this.destroyed || this.commonObjs.has(i)) return null;
        switch (s) {
          case "Font":
            if ("error" in n) {
              const c = n.error;
              j(`Error during font loading: ${c}`), this.commonObjs.resolve(i, c);
              break;
            }
            const r = new et(n), a = this._params.pdfBug && ((_a29 = globalThis.FontInspector) == null ? void 0 : _a29.enabled) ? (c, f) => globalThis.FontInspector.fontAdded(c, f) : null, o = new Kn(r, a, n.extra, n.charProcOperatorList);
            this.fontLoader.bind(o).catch(() => t.sendWithPromise("FontFallback", {
              id: i
            })).finally(() => {
              !o.fontExtraProperties && o.data && o.clearData(), this.commonObjs.resolve(i, o);
            });
            break;
          case "CopyLocalImage":
            const { imageRef: l } = n;
            K(l, "The imageRef must be defined.");
            for (const c of __privateGet(this, _i23).values()) for (const [, f] of c.objs) if ((f == null ? void 0 : f.ref) === l) return f.dataLen ? (this.commonObjs.resolve(i, structuredClone(f)), f.dataLen) : null;
            break;
          case "FontPath":
            this.commonObjs.resolve(i, new Jn(n));
            break;
          case "Image":
            this.commonObjs.resolve(i, n);
            break;
          case "Pattern":
            const h = new bt(n);
            this.commonObjs.resolve(i, h.getIR());
            break;
          default:
            throw new Error(`Got unknown common object type ${s}`);
        }
        return null;
      }), t.on("obj", ([i, s, n, r]) => {
        var _a29;
        if (this.destroyed) return;
        const a = __privateGet(this, _i23).get(s);
        if (!a.objs.has(i)) {
          if (a._intentStates.size === 0) {
            (_a29 = r == null ? void 0 : r.bitmap) == null ? void 0 : _a29.close();
            return;
          }
          switch (n) {
            case "Image":
            case "Pattern":
              a.objs.resolve(i, r);
              break;
            default:
              throw new Error(`Got unknown object type ${n}`);
          }
        }
      }), t.on("DocProgress", (i) => {
        this.destroyed || __privateMethod(this, _Xr_instances, u_fn7).call(this, i);
      }), t.on("FetchBinaryData", async (i) => {
        if (this.destroyed) throw new Error("Worker was destroyed.");
        const s = this[i.type];
        if (!s) throw new Error(`${i.type} not initialized, see the \`useWorkerFetch\` parameter.`);
        return s.fetch(i);
      });
    }
    getData() {
      return this.messageHandler.sendWithPromise("GetData", null);
    }
    saveDocument() {
      var _a29;
      this.annotationStorage.size <= 0 && j("saveDocument called while `annotationStorage` is empty, please use the getData-method instead.");
      const { map: t, transfer: e } = this.annotationStorage.serializable;
      return this.messageHandler.sendWithPromise("SaveDocument", {
        isPureXfa: !!this._htmlForXfa,
        numPages: this._numPages,
        annotationStorage: t,
        filename: ((_a29 = __privateGet(this, _t46)) == null ? void 0 : _a29.filename) ?? null
      }, e).finally(() => {
        this.annotationStorage.resetModified();
      });
    }
    extractPages(t) {
      return this.messageHandler.sendWithPromise("ExtractPages", {
        pageInfos: t
      });
    }
    getPage(t) {
      if (!Number.isInteger(t) || t <= 0 || t > this.pagesMapper.pagesNumber) return Promise.reject(new Error("Invalid page request."));
      const e = t - 1, i = this.pagesMapper.getPageId(t) - 1, s = __privateGet(this, _a16).get(e);
      if (s) return s;
      const n = this.messageHandler.sendWithPromise("GetPage", {
        pageIndex: i
      }).then((r) => {
        if (this.destroyed) throw new Error("Transport destroyed");
        r.refStr && __privateGet(this, _r15).set(r.refStr, i);
        const a = new Wr(e, r, this, this.pagesMapper, this._params.pdfBug);
        return __privateGet(this, _i23).set(e, a), a;
      });
      return __privateGet(this, _a16).set(e, n), n;
    }
    async getPageIndex(t) {
      if (!Ri(t)) throw new Error("Invalid pageIndex request.");
      const e = await this.messageHandler.sendWithPromise("GetPageIndex", {
        num: t.num,
        gen: t.gen
      }), i = this.pagesMapper.getPageNumber(e + 1);
      if (i === 0) throw new Error("GetPageIndex: page has been removed.");
      return i - 1;
    }
    getAnnotations(t, e) {
      return this.messageHandler.sendWithPromise("GetAnnotations", {
        pageIndex: this.pagesMapper.getPageId(t + 1) - 1,
        intent: e
      });
    }
    getFieldObjects() {
      return __privateMethod(this, _Xr_instances, l_fn5).call(this, "GetFieldObjects");
    }
    hasJSActions() {
      return __privateMethod(this, _Xr_instances, l_fn5).call(this, "HasJSActions");
    }
    getCalculationOrderIds() {
      return this.messageHandler.sendWithPromise("GetCalculationOrderIds", null);
    }
    getDestinations() {
      return this.messageHandler.sendWithPromise("GetDestinations", null);
    }
    getDestination(t) {
      return typeof t != "string" ? Promise.reject(new Error("Invalid destination request.")) : this.messageHandler.sendWithPromise("GetDestination", {
        id: t
      });
    }
    getPageLabels() {
      return this.messageHandler.sendWithPromise("GetPageLabels", null);
    }
    getPageLayout() {
      return this.messageHandler.sendWithPromise("GetPageLayout", null);
    }
    getPageMode() {
      return this.messageHandler.sendWithPromise("GetPageMode", null);
    }
    getViewerPreferences() {
      return this.messageHandler.sendWithPromise("GetViewerPreferences", null);
    }
    getOpenAction() {
      return this.messageHandler.sendWithPromise("GetOpenAction", null);
    }
    getAttachments() {
      return this.messageHandler.sendWithPromise("GetAttachments", null);
    }
    getAnnotationsByType(t, e) {
      return this.messageHandler.sendWithPromise("GetAnnotationsByType", {
        types: t,
        pageIndexesToSkip: e
      });
    }
    getDocJSActions() {
      return __privateMethod(this, _Xr_instances, l_fn5).call(this, "GetDocJSActions");
    }
    getPageJSActions(t) {
      return this.messageHandler.sendWithPromise("GetPageJSActions", {
        pageIndex: this.pagesMapper.getPageId(t + 1) - 1
      });
    }
    getStructTree(t) {
      return this.messageHandler.sendWithPromise("GetStructTree", {
        pageIndex: this.pagesMapper.getPageId(t + 1) - 1
      });
    }
    getOutline() {
      return this.messageHandler.sendWithPromise("GetOutline", null);
    }
    getOptionalContentConfig(t) {
      return __privateMethod(this, _Xr_instances, l_fn5).call(this, "GetOptionalContentConfig").then((e) => new Cr(e, t));
    }
    getPermissions() {
      return this.messageHandler.sendWithPromise("GetPermissions", null);
    }
    getMetadata() {
      const t = "GetMetadata";
      return __privateGet(this, _e33).getOrInsertComputed(t, () => this.messageHandler.sendWithPromise(t, null).then((e) => {
        var _a29, _b7;
        return {
          info: e[0],
          metadata: e[1] ? new xr(e[1]) : null,
          contentDispositionFilename: ((_a29 = __privateGet(this, _t46)) == null ? void 0 : _a29.filename) ?? null,
          contentLength: ((_b7 = __privateGet(this, _t46)) == null ? void 0 : _b7.contentLength) ?? null,
          hasStructTree: e[2]
        };
      }));
    }
    getMarkInfo() {
      return this.messageHandler.sendWithPromise("GetMarkInfo", null);
    }
    async startCleanup(t = false) {
      if (!this.destroyed) {
        await this.messageHandler.sendWithPromise("Cleanup", null);
        for (const e of __privateGet(this, _i23).values()) if (!e.cleanup()) throw new Error(`startCleanup: Page ${e.pageNumber} is currently rendering.`);
        this.commonObjs.clear(), t || this.fontLoader.clear(), __privateGet(this, _e33).clear(), this.filterFactory.destroy(true), kt.cleanup();
      }
    }
    cachedPageNumber(t) {
      if (!Ri(t)) return null;
      const e = t.gen === 0 ? `${t.num}R` : `${t.num}R${t.gen}`, i = __privateGet(this, _r15).get(e);
      if (i >= 0) {
        const s = this.pagesMapper.getPageNumber(i + 1);
        if (s !== 0) return s;
      }
      return null;
    }
  }
  _t46 = new WeakMap();
  _e33 = new WeakMap();
  _s26 = new WeakMap();
  _i23 = new WeakMap();
  _a16 = new WeakMap();
  _r15 = new WeakMap();
  _n15 = new WeakMap();
  _o11 = new WeakMap();
  _Xr_instances = new WeakSet();
  h_fn4 = function({ type: t, pageNumbers: e }) {
    var _a29;
    if (t === "copy") {
      __privateSet(this, _o11, /* @__PURE__ */ new Map());
      for (const r of e) __privateGet(this, _o11).set(r, {
        proxy: __privateGet(this, _i23).get(r - 1) || null,
        promise: __privateGet(this, _a16).get(r - 1) || null
      });
      return;
    }
    if (t === "delete") for (const r of e) __privateGet(this, _i23).delete(r - 1), __privateGet(this, _a16).delete(r - 1);
    const i = /* @__PURE__ */ new Map(), s = /* @__PURE__ */ new Map(), { pagesMapper: n } = this;
    for (let r = 0, a = n.pagesNumber; r < a; r++) {
      const o = n.getPrevPageNumber(r + 1);
      if (o < 0) {
        const { proxy: f, promise: g } = ((_a29 = __privateGet(this, _o11)) == null ? void 0 : _a29.get(-o)) || {};
        f && i.set(r, f), g && s.set(r, g);
        continue;
      }
      const l = o - 1, h = __privateGet(this, _i23).get(l);
      h && i.set(r, h);
      const c = __privateGet(this, _a16).get(l);
      c && s.set(r, c);
    }
    __privateSet(this, _i23, i), __privateSet(this, _a16, s);
  };
  l_fn5 = function(t, e = null) {
    return __privateGet(this, _e33).getOrInsertComputed(t, () => this.messageHandler.sendWithPromise(t, e));
  };
  u_fn7 = function({ loaded: t, total: e }) {
    var _a29, _b7;
    (_b7 = (_a29 = this.loadingTask).onProgress) == null ? void 0 : _b7.call(_a29, {
      loaded: t,
      total: e,
      percent: At(Math.round(t / e * 100), 0, 100)
    });
  };
  class Yr {
    constructor(t) {
      __publicField(this, "_internalRenderTask", null);
      __publicField(this, "onContinue", null);
      __publicField(this, "onError", null);
      this._internalRenderTask = t;
    }
    get promise() {
      return this._internalRenderTask.capability.promise;
    }
    cancel(t = 0) {
      this._internalRenderTask.cancel(null, t);
    }
    get separateAnnots() {
      const { separateAnnots: t } = this._internalRenderTask.operatorList;
      if (!t) return false;
      const { annotationCanvasMap: e } = this._internalRenderTask;
      return t.form || t.canvas && (e == null ? void 0 : e.size) > 0;
    }
  }
  const _ue = class _ue {
    constructor({ callback: t, params: e, objs: i, commonObjs: s, annotationCanvasMap: n, operatorList: r, pageIndex: a, canvasFactory: o, filterFactory: l, useRequestAnimationFrame: h = false, pdfBug: c = false, pageColors: f = null, enableHWA: g = false, operationsFilter: b = null }) {
      __privateAdd(this, _t47, null);
      this.callback = t, this.params = e, this.objs = i, this.commonObjs = s, this.annotationCanvasMap = n, this.operatorListIdx = null, this.operatorList = r, this._pageIndex = a, this.canvasFactory = o, this.filterFactory = l, this._pdfBug = c, this.pageColors = f, this.running = false, this.graphicsReadyCallback = null, this.graphicsReady = false, this._useRequestAnimationFrame = h === true && typeof window < "u", this.cancelled = false, this.capability = Promise.withResolvers(), this.task = new Yr(this), this._cancelBound = this.cancel.bind(this), this._continueBound = this._continue.bind(this), this._scheduleNextBound = this._scheduleNext.bind(this), this._nextBound = this._next.bind(this), this._canvas = e.canvas, this._canvasContext = e.canvas ? null : e.canvasContext, this._enableHWA = g, this._dependencyTracker = e.dependencyTracker, this._operationsFilter = b;
    }
    get completed() {
      return this.capability.promise.catch(function() {
      });
    }
    initializeGraphics({ transparency: t = false, optionalContentConfig: e }) {
      var _a29, _b7;
      if (this.cancelled) return;
      if (this._canvas) {
        if (__privateGet(_ue, _e34).has(this._canvas)) throw new Error("Cannot use the same canvas during multiple render() operations. Use different canvas or ensure previous operations were cancelled or completed.");
        __privateGet(_ue, _e34).add(this._canvas);
      }
      this._pdfBug && ((_a29 = globalThis.StepperManager) == null ? void 0 : _a29.enabled) && (this.stepper = globalThis.StepperManager.create(this._pageIndex), this.stepper.init(this.operatorList), this.stepper.nextBreakPoint = this.stepper.getNextBreakPoint());
      const { viewport: i, transform: s, background: n, dependencyTracker: r } = this.params, a = this._canvasContext || this._canvas.getContext("2d", {
        alpha: false,
        willReadFrequently: !this._enableHWA
      });
      this.gfx = new ge(a, this.commonObjs, this.objs, this.canvasFactory, this.filterFactory, {
        optionalContentConfig: e
      }, this.annotationCanvasMap, this.pageColors, r), this.gfx.beginDrawing({
        transform: s,
        viewport: i,
        transparency: t,
        background: n
      }), this.operatorListIdx = 0, this.graphicsReady = true, (_b7 = this.graphicsReadyCallback) == null ? void 0 : _b7.call(this);
    }
    cancel(t = null, e = 0) {
      var _a29, _b7, _c10;
      this.running = false, this.cancelled = true, (_a29 = this.gfx) == null ? void 0 : _a29.endDrawing(), __privateGet(this, _t47) && (window.cancelAnimationFrame(__privateGet(this, _t47)), __privateSet(this, _t47, null)), __privateGet(_ue, _e34).delete(this._canvas), t || (t = new ji(`Rendering cancelled, page ${this._pageIndex + 1}`, e)), this.callback(t), (_c10 = (_b7 = this.task).onError) == null ? void 0 : _c10.call(_b7, t);
    }
    operatorListChanged() {
      var _a29, _b7;
      if (!this.graphicsReady) {
        this.graphicsReadyCallback || (this.graphicsReadyCallback = this._continueBound);
        return;
      }
      (_a29 = this.gfx.dependencyTracker) == null ? void 0 : _a29.growOperationsCount(this.operatorList.fnArray.length), (_b7 = this.stepper) == null ? void 0 : _b7.updateOperatorList(this.operatorList), !this.running && this._continue();
    }
    _continue() {
      this.running = true, !this.cancelled && (this.task.onContinue ? this.task.onContinue(this._scheduleNextBound) : this._scheduleNext());
    }
    _scheduleNext() {
      this._useRequestAnimationFrame ? __privateSet(this, _t47, window.requestAnimationFrame(() => {
        __privateSet(this, _t47, null), this._nextBound().catch(this._cancelBound);
      })) : Promise.resolve().then(this._nextBound).catch(this._cancelBound);
    }
    async _next() {
      this.cancelled || (this.operatorListIdx = this.gfx.executeOperatorList(this.operatorList, this.operatorListIdx, this._continueBound, this.stepper, this._operationsFilter), this.operatorListIdx === this.operatorList.argsArray.length && (this.running = false, this.operatorList.lastChunk && (this.gfx.endDrawing(), __privateGet(_ue, _e34).delete(this._canvas), this.callback())));
    }
  };
  _t47 = new WeakMap();
  _e34 = new WeakMap();
  __privateAdd(_ue, _e34, /* @__PURE__ */ new WeakSet());
  let ue = _ue;
  qr = "5.5.207";
  Kr = "527964698";
  Rt = (_k2 = class {
    constructor({ editor: t = null, uiManager: e = null }) {
      __privateAdd(this, _Rt_instances);
      __privateAdd(this, _t48, null);
      __privateAdd(this, _e35, null);
      __privateAdd(this, _s27);
      __privateAdd(this, _i24, null);
      __privateAdd(this, _a17, false);
      __privateAdd(this, _r16, false);
      __privateAdd(this, _n16, null);
      __privateAdd(this, _o12);
      __privateAdd(this, _h10, null);
      __privateAdd(this, _l8, null);
      var _a29, _b7;
      t ? (__privateSet(this, _r16, false), __privateSet(this, _n16, t)) : __privateSet(this, _r16, true), __privateSet(this, _l8, (t == null ? void 0 : t._uiManager) || e), __privateSet(this, _o12, __privateGet(this, _l8)._eventBus), __privateSet(this, _s27, ((_a29 = t == null ? void 0 : t.color) == null ? void 0 : _a29.toUpperCase()) || ((_b7 = __privateGet(this, _l8)) == null ? void 0 : _b7.highlightColors.values().next().value) || "#FFFF98"), __privateGet(Rt, _u7) || __privateSet(Rt, _u7, Object.freeze({
        blue: "pdfjs-editor-colorpicker-blue",
        green: "pdfjs-editor-colorpicker-green",
        pink: "pdfjs-editor-colorpicker-pink",
        red: "pdfjs-editor-colorpicker-red",
        yellow: "pdfjs-editor-colorpicker-yellow"
      }));
    }
    static get _keyboardManager() {
      return H(this, "_keyboardManager", new Fe([
        [
          [
            "Escape",
            "mac+Escape"
          ],
          Rt.prototype._hideDropdownFromKeyboard
        ],
        [
          [
            " ",
            "mac+ "
          ],
          Rt.prototype._colorSelectFromKeyboard
        ],
        [
          [
            "ArrowDown",
            "ArrowRight",
            "mac+ArrowDown",
            "mac+ArrowRight"
          ],
          Rt.prototype._moveToNext
        ],
        [
          [
            "ArrowUp",
            "ArrowLeft",
            "mac+ArrowUp",
            "mac+ArrowLeft"
          ],
          Rt.prototype._moveToPrevious
        ],
        [
          [
            "Home",
            "mac+Home"
          ],
          Rt.prototype._moveToBeginning
        ],
        [
          [
            "End",
            "mac+End"
          ],
          Rt.prototype._moveToEnd
        ]
      ]));
    }
    renderButton() {
      const t = __privateSet(this, _t48, document.createElement("button"));
      t.className = "colorPicker", t.tabIndex = "0", t.setAttribute("data-l10n-id", "pdfjs-editor-colorpicker-button"), t.ariaHasPopup = "true", __privateGet(this, _n16) && (t.ariaControls = `${__privateGet(this, _n16).id}_colorpicker_dropdown`);
      const e = __privateGet(this, _l8)._signal;
      t.addEventListener("click", __privateMethod(this, _Rt_instances, g_fn4).bind(this), {
        signal: e
      }), t.addEventListener("keydown", __privateMethod(this, _Rt_instances, m_fn3).bind(this), {
        signal: e
      });
      const i = __privateSet(this, _e35, document.createElement("span"));
      return i.className = "swatch", i.ariaHidden = "true", i.style.backgroundColor = __privateGet(this, _s27), t.append(i), t;
    }
    renderMainDropdown() {
      const t = __privateSet(this, _i24, __privateMethod(this, _Rt_instances, d_fn4).call(this));
      return t.ariaOrientation = "horizontal", t.ariaLabelledBy = "highlightColorPickerLabel", t;
    }
    _colorSelectFromKeyboard(t) {
      if (t.target === __privateGet(this, _t48)) {
        __privateMethod(this, _Rt_instances, g_fn4).call(this, t);
        return;
      }
      const e = t.target.getAttribute("data-color");
      e && __privateMethod(this, _Rt_instances, f_fn4).call(this, e, t);
    }
    _moveToNext(t) {
      var _a29, _b7;
      if (!__privateGet(this, _Rt_instances, p_get)) {
        __privateMethod(this, _Rt_instances, g_fn4).call(this, t);
        return;
      }
      if (t.target === __privateGet(this, _t48)) {
        (_a29 = __privateGet(this, _i24).firstElementChild) == null ? void 0 : _a29.focus();
        return;
      }
      (_b7 = t.target.nextSibling) == null ? void 0 : _b7.focus();
    }
    _moveToPrevious(t) {
      var _a29, _b7;
      if (t.target === ((_a29 = __privateGet(this, _i24)) == null ? void 0 : _a29.firstElementChild) || t.target === __privateGet(this, _t48)) {
        __privateGet(this, _Rt_instances, p_get) && this._hideDropdownFromKeyboard();
        return;
      }
      __privateGet(this, _Rt_instances, p_get) || __privateMethod(this, _Rt_instances, g_fn4).call(this, t), (_b7 = t.target.previousSibling) == null ? void 0 : _b7.focus();
    }
    _moveToBeginning(t) {
      var _a29;
      if (!__privateGet(this, _Rt_instances, p_get)) {
        __privateMethod(this, _Rt_instances, g_fn4).call(this, t);
        return;
      }
      (_a29 = __privateGet(this, _i24).firstElementChild) == null ? void 0 : _a29.focus();
    }
    _moveToEnd(t) {
      var _a29;
      if (!__privateGet(this, _Rt_instances, p_get)) {
        __privateMethod(this, _Rt_instances, g_fn4).call(this, t);
        return;
      }
      (_a29 = __privateGet(this, _i24).lastElementChild) == null ? void 0 : _a29.focus();
    }
    hideDropdown() {
      var _a29, _b7;
      (_a29 = __privateGet(this, _i24)) == null ? void 0 : _a29.classList.add("hidden"), __privateGet(this, _t48).ariaExpanded = "false", (_b7 = __privateGet(this, _h10)) == null ? void 0 : _b7.abort(), __privateSet(this, _h10, null);
    }
    _hideDropdownFromKeyboard() {
      var _a29;
      if (!__privateGet(this, _r16)) {
        if (!__privateGet(this, _Rt_instances, p_get)) {
          (_a29 = __privateGet(this, _n16)) == null ? void 0 : _a29.unselect();
          return;
        }
        this.hideDropdown(), __privateGet(this, _t48).focus({
          preventScroll: true,
          focusVisible: __privateGet(this, _a17)
        });
      }
    }
    updateColor(t) {
      if (__privateGet(this, _e35) && (__privateGet(this, _e35).style.backgroundColor = t), !__privateGet(this, _i24)) return;
      const e = __privateGet(this, _l8).highlightColors.values();
      for (const i of __privateGet(this, _i24).children) i.ariaSelected = e.next().value === t.toUpperCase();
    }
    destroy() {
      var _a29, _b7;
      (_a29 = __privateGet(this, _t48)) == null ? void 0 : _a29.remove(), __privateSet(this, _t48, null), __privateSet(this, _e35, null), (_b7 = __privateGet(this, _i24)) == null ? void 0 : _b7.remove(), __privateSet(this, _i24, null);
    }
  }, _t48 = new WeakMap(), _e35 = new WeakMap(), _s27 = new WeakMap(), _i24 = new WeakMap(), _a17 = new WeakMap(), _r16 = new WeakMap(), _n16 = new WeakMap(), _o12 = new WeakMap(), _h10 = new WeakMap(), _l8 = new WeakMap(), _u7 = new WeakMap(), _Rt_instances = new WeakSet(), d_fn4 = function() {
    const t = document.createElement("div"), e = __privateGet(this, _l8)._signal;
    t.addEventListener("contextmenu", Ft, {
      signal: e
    }), t.className = "dropdown", t.role = "listbox", t.ariaMultiSelectable = "false", t.ariaOrientation = "vertical", t.setAttribute("data-l10n-id", "pdfjs-editor-colorpicker-dropdown"), __privateGet(this, _n16) && (t.id = `${__privateGet(this, _n16).id}_colorpicker_dropdown`);
    for (const [i, s] of __privateGet(this, _l8).highlightColors) {
      const n = document.createElement("button");
      n.tabIndex = "0", n.role = "option", n.setAttribute("data-color", s), n.title = i, n.setAttribute("data-l10n-id", __privateGet(Rt, _u7)[i]);
      const r = document.createElement("span");
      n.append(r), r.className = "swatch", r.style.backgroundColor = s, n.ariaSelected = s === __privateGet(this, _s27), n.addEventListener("click", __privateMethod(this, _Rt_instances, f_fn4).bind(this, s), {
        signal: e
      }), t.append(n);
    }
    return t.addEventListener("keydown", __privateMethod(this, _Rt_instances, m_fn3).bind(this), {
      signal: e
    }), t;
  }, f_fn4 = function(t, e) {
    e.stopPropagation(), __privateGet(this, _o12).dispatch("switchannotationeditorparams", {
      source: this,
      type: X.HIGHLIGHT_COLOR,
      value: t
    }), this.updateColor(t);
  }, m_fn3 = function(t) {
    Rt._keyboardManager.exec(this, t);
  }, g_fn4 = function(t) {
    if (__privateGet(this, _Rt_instances, p_get)) {
      this.hideDropdown();
      return;
    }
    if (__privateSet(this, _a17, t.detail === 0), __privateGet(this, _h10) || (__privateSet(this, _h10, new AbortController()), window.addEventListener("pointerdown", __privateMethod(this, _Rt_instances, c_fn2).bind(this), {
      signal: __privateGet(this, _l8).combinedSignal(__privateGet(this, _h10))
    })), __privateGet(this, _t48).ariaExpanded = "true", __privateGet(this, _i24)) {
      __privateGet(this, _i24).classList.remove("hidden");
      return;
    }
    const e = __privateSet(this, _i24, __privateMethod(this, _Rt_instances, d_fn4).call(this));
    __privateGet(this, _t48).append(e);
  }, c_fn2 = function(t) {
    var _a29;
    ((_a29 = __privateGet(this, _i24)) == null ? void 0 : _a29.contains(t.target)) || this.hideDropdown();
  }, p_get = function() {
    return __privateGet(this, _i24) && !__privateGet(this, _i24).classList.contains("hidden");
  }, __privateAdd(_k2, _u7, null), _k2);
  const _Ie = class _Ie {
    constructor(t) {
      __privateAdd(this, _t49, null);
      __privateAdd(this, _e36, null);
      __privateAdd(this, _s28, null);
      __privateSet(this, _e36, t), __privateSet(this, _s28, t._uiManager), __privateGet(_Ie, _i25) || __privateSet(_Ie, _i25, Object.freeze({
        freetext: "pdfjs-editor-color-picker-free-text-input",
        ink: "pdfjs-editor-color-picker-ink-input"
      }));
    }
    renderButton() {
      if (__privateGet(this, _t49)) return __privateGet(this, _t49);
      const { editorType: t, colorType: e, color: i } = __privateGet(this, _e36), s = __privateSet(this, _t49, document.createElement("input"));
      return s.type = "color", s.value = i || "#000000", s.className = "basicColorPicker", s.tabIndex = 0, s.setAttribute("data-l10n-id", __privateGet(_Ie, _i25)[t]), s.addEventListener("input", () => {
        __privateGet(this, _s28).updateParams(e, s.value);
      }, {
        signal: __privateGet(this, _s28)._signal
      }), s;
    }
    update(t) {
      __privateGet(this, _t49) && (__privateGet(this, _t49).value = t);
    }
    destroy() {
      var _a29;
      (_a29 = __privateGet(this, _t49)) == null ? void 0 : _a29.remove(), __privateSet(this, _t49, null);
    }
    hideDropdown() {
    }
  };
  _t49 = new WeakMap();
  _e36 = new WeakMap();
  _s28 = new WeakMap();
  _i25 = new WeakMap();
  __privateAdd(_Ie, _i25, null);
  let Ie = _Ie;
  function Rs(d) {
    return Math.floor(Math.max(0, Math.min(1, d)) * 255).toString(16).padStart(2, "0");
  }
  function we(d) {
    return Math.max(0, Math.min(255, 255 * d));
  }
  class Fs {
    static CMYK_G([t, e, i, s]) {
      return [
        "G",
        1 - Math.min(1, 0.3 * t + 0.59 * i + 0.11 * e + s)
      ];
    }
    static G_CMYK([t]) {
      return [
        "CMYK",
        0,
        0,
        0,
        1 - t
      ];
    }
    static G_RGB([t]) {
      return [
        "RGB",
        t,
        t,
        t
      ];
    }
    static G_rgb([t]) {
      return t = we(t), [
        t,
        t,
        t
      ];
    }
    static G_HTML([t]) {
      const e = Rs(t);
      return `#${e}${e}${e}`;
    }
    static RGB_G([t, e, i]) {
      return [
        "G",
        0.3 * t + 0.59 * e + 0.11 * i
      ];
    }
    static RGB_rgb(t) {
      return t.map(we);
    }
    static RGB_HTML(t) {
      return `#${t.map(Rs).join("")}`;
    }
    static T_HTML() {
      return "#00000000";
    }
    static T_rgb() {
      return [
        null
      ];
    }
    static CMYK_RGB([t, e, i, s]) {
      return [
        "RGB",
        1 - Math.min(1, t + s),
        1 - Math.min(1, i + s),
        1 - Math.min(1, e + s)
      ];
    }
    static CMYK_rgb([t, e, i, s]) {
      return [
        we(1 - Math.min(1, t + s)),
        we(1 - Math.min(1, i + s)),
        we(1 - Math.min(1, e + s))
      ];
    }
    static CMYK_HTML(t) {
      const e = this.CMYK_RGB(t).slice(1);
      return this.RGB_HTML(e);
    }
    static RGB_CMYK([t, e, i]) {
      const s = 1 - t, n = 1 - e, r = 1 - i, a = Math.min(s, n, r);
      return [
        "CMYK",
        s,
        n,
        r,
        a
      ];
    }
  }
  class Jr {
    create(t, e, i = false) {
      if (t <= 0 || e <= 0) throw new Error("Invalid SVG dimensions");
      const s = this._createSVG("svg:svg");
      return s.setAttribute("version", "1.1"), i || (s.setAttribute("width", `${t}px`), s.setAttribute("height", `${e}px`)), s.setAttribute("preserveAspectRatio", "none"), s.setAttribute("viewBox", `0 0 ${t} ${e}`), s;
    }
    createElement(t) {
      if (typeof t != "string") throw new Error("Invalid SVG element type");
      return this._createSVG(t);
    }
    _createSVG(t) {
      Z("Abstract method `_createSVG` called.");
    }
  }
  Qe = class extends Jr {
    _createSVG(t) {
      return document.createElementNS(Wt, t);
    }
  };
  const Qr = 9, ie = /* @__PURE__ */ new WeakSet(), Zr = (/* @__PURE__ */ new Date()).getTimezoneOffset() * 60 * 1e3;
  class _i {
    static create(t) {
      switch (t.data.annotationType) {
        case pt.LINK:
          return new Ji(t);
        case pt.TEXT:
          return new ea(t);
        case pt.WIDGET:
          switch (t.data.fieldType) {
            case "Tx":
              return new ia(t);
            case "Btn":
              return t.data.radioButton ? new ln(t) : t.data.checkBox ? new na(t) : new ra(t);
            case "Ch":
              return new aa(t);
            case "Sig":
              return new sa(t);
          }
          return new ne(t);
        case pt.POPUP:
          return new Ni(t);
        case pt.FREETEXT:
          return new hn(t);
        case pt.LINE:
          return new la(t);
        case pt.SQUARE:
          return new ha(t);
        case pt.CIRCLE:
          return new ca(t);
        case pt.POLYLINE:
          return new cn(t);
        case pt.CARET:
          return new ua(t);
        case pt.INK:
          return new Qi(t);
        case pt.POLYGON:
          return new da(t);
        case pt.HIGHLIGHT:
          return new dn(t);
        case pt.UNDERLINE:
          return new fa(t);
        case pt.SQUIGGLY:
          return new pa(t);
        case pt.STRIKEOUT:
          return new ga(t);
        case pt.STAMP:
          return new un(t);
        case pt.FILEATTACHMENT:
          return new ma(t);
        default:
          return new lt(t);
      }
    }
  }
  const _lt = class _lt {
    constructor(t, { isRenderable: e = false, ignoreBorder: i = false, createQuadrilaterals: s = false } = {}) {
      __privateAdd(this, _lt_instances);
      __privateAdd(this, _t50, null);
      __privateAdd(this, _e37, false);
      __privateAdd(this, _s29, null);
      this.isRenderable = e, this.data = t.data, this.layer = t.layer, this.linkService = t.linkService, this.downloadManager = t.downloadManager, this.imageResourcesPath = t.imageResourcesPath, this.renderForms = t.renderForms, this.svgFactory = t.svgFactory, this.annotationStorage = t.annotationStorage, this.enableComment = t.enableComment, this.enableScripting = t.enableScripting, this.hasJSActions = t.hasJSActions, this._fieldObjects = t.fieldObjects, this.parent = t.parent, this.hasOwnCommentButton = false, e && (this.contentElement = this.container = this._createContainer(i)), s && this._createQuadrilaterals();
    }
    static _hasPopupData({ contentsObj: t, richText: e }) {
      return !!((t == null ? void 0 : t.str) || (e == null ? void 0 : e.str));
    }
    get _isEditable() {
      return this.data.isEditable;
    }
    get hasPopupData() {
      return _lt._hasPopupData(this.data) || this.enableComment && !!this.commentText;
    }
    get commentData() {
      var _a29;
      const { data: t } = this, e = (_a29 = this.annotationStorage) == null ? void 0 : _a29.getEditor(t.id);
      return e ? e.getData() : t;
    }
    get hasCommentButton() {
      return this.enableComment && this.hasPopupElement;
    }
    get commentButtonPosition() {
      var _a29;
      const t = (_a29 = this.annotationStorage) == null ? void 0 : _a29.getEditor(this.data.id);
      if (t) return t.commentButtonPositionInPage;
      const { quadPoints: e, inkLists: i, rect: s } = this.data;
      let n = -1 / 0, r = -1 / 0;
      if ((e == null ? void 0 : e.length) >= 8) {
        for (let a = 0; a < e.length; a += 8) e[a + 1] > r ? (r = e[a + 1], n = e[a + 2]) : e[a + 1] === r && (n = Math.max(n, e[a + 2]));
        return [
          n,
          r
        ];
      }
      if ((i == null ? void 0 : i.length) >= 1) {
        for (const a of i) for (let o = 0, l = a.length; o < l; o += 2) a[o + 1] > r ? (r = a[o + 1], n = a[o]) : a[o + 1] === r && (n = Math.max(n, a[o]));
        if (n !== 1 / 0) return [
          n,
          r
        ];
      }
      return s ? [
        s[2],
        s[3]
      ] : null;
    }
    _normalizePoint(t) {
      const { page: { view: e }, viewport: { rawDims: { pageWidth: i, pageHeight: s, pageX: n, pageY: r } } } = this.parent;
      return t[1] = e[3] - t[1] + e[1], t[0] = 100 * (t[0] - n) / i, t[1] = 100 * (t[1] - r) / s, t;
    }
    get commentText() {
      var _a29, _b7, _c10;
      const { data: t } = this;
      return ((_b7 = (_a29 = this.annotationStorage.getRawValue(`${Te}${t.id}`)) == null ? void 0 : _a29.popup) == null ? void 0 : _b7.contents) || ((_c10 = t.contentsObj) == null ? void 0 : _c10.str) || "";
    }
    set commentText(t) {
      const { data: e } = this, i = {
        deleted: !t,
        contents: t || ""
      };
      this.annotationStorage.updateEditor(e.id, {
        popup: i
      }) || this.annotationStorage.setValue(`${Te}${e.id}`, {
        id: e.id,
        annotationType: e.annotationType,
        page: this.parent.page,
        popup: i,
        popupRef: e.popupRef,
        modificationDate: /* @__PURE__ */ new Date()
      }), t || this.removePopup();
    }
    removePopup() {
      var _a29, _b7;
      (_b7 = ((_a29 = __privateGet(this, _s29)) == null ? void 0 : _a29.popup) || this.popup) == null ? void 0 : _b7.remove(), __privateSet(this, _s29, this.popup = null);
    }
    updateEdited(t) {
      var _a29;
      if (!this.container) return;
      t.rect && (__privateGet(this, _t50) || __privateSet(this, _t50, {
        rect: this.data.rect.slice(0)
      }));
      const { rect: e, popup: i } = t;
      e && __privateMethod(this, _lt_instances, i_fn8).call(this, e);
      let s = ((_a29 = __privateGet(this, _s29)) == null ? void 0 : _a29.popup) || this.popup;
      !s && (i == null ? void 0 : i.text) && (this._createPopup(i), s = __privateGet(this, _s29).popup), s && (s.updateEdited(t), (i == null ? void 0 : i.deleted) && (s.remove(), __privateSet(this, _s29, null), this.popup = null));
    }
    resetEdited() {
      var _a29;
      __privateGet(this, _t50) && (__privateMethod(this, _lt_instances, i_fn8).call(this, __privateGet(this, _t50).rect), (_a29 = __privateGet(this, _s29)) == null ? void 0 : _a29.popup.resetEdited(), __privateSet(this, _t50, null));
    }
    _createContainer(t) {
      const { data: e, parent: { page: i, viewport: s } } = this, n = document.createElement("section");
      n.setAttribute("data-annotation-id", e.id), !(this instanceof ne) && !(this instanceof Ji) && (n.tabIndex = 0);
      const { style: r } = n;
      if (r.zIndex = this.parent.zIndex, this.parent.zIndex += 2, e.alternativeText && (n.title = e.alternativeText), e.noRotate && n.classList.add("norotate"), !e.rect || this instanceof Ni) {
        const { rotation: m } = e;
        return !e.hasOwnCanvas && m !== 0 && this.setRotation(m, n), n;
      }
      const { width: a, height: o } = this;
      if (!t && e.borderStyle.width > 0) {
        r.borderWidth = `${e.borderStyle.width}px`;
        const m = e.borderStyle.horizontalCornerRadius, w = e.borderStyle.verticalCornerRadius;
        if (m > 0 || w > 0) {
          const S = `calc(${m}px * var(--total-scale-factor)) / calc(${w}px * var(--total-scale-factor))`;
          r.borderRadius = S;
        } else if (this instanceof ln) {
          const S = `calc(${a}px * var(--total-scale-factor)) / calc(${o}px * var(--total-scale-factor))`;
          r.borderRadius = S;
        }
        switch (e.borderStyle.style) {
          case oe.SOLID:
            r.borderStyle = "solid";
            break;
          case oe.DASHED:
            r.borderStyle = "dashed";
            break;
          case oe.BEVELED:
            j("Unimplemented border style: beveled");
            break;
          case oe.INSET:
            j("Unimplemented border style: inset");
            break;
          case oe.UNDERLINE:
            r.borderBottomStyle = "solid";
            break;
        }
        const A = e.borderColor || null;
        A ? (__privateSet(this, _e37, true), r.borderColor = R.makeHexColor(A[0] | 0, A[1] | 0, A[2] | 0)) : r.borderWidth = 0;
      }
      const l = R.normalizeRect([
        e.rect[0],
        i.view[3] - e.rect[1] + i.view[1],
        e.rect[2],
        i.view[3] - e.rect[3] + i.view[1]
      ]), { pageWidth: h, pageHeight: c, pageX: f, pageY: g } = s.rawDims;
      r.left = `${100 * (l[0] - f) / h}%`, r.top = `${100 * (l[1] - g) / c}%`;
      const { rotation: b } = e;
      return e.hasOwnCanvas || b === 0 ? (r.width = `${100 * a / h}%`, r.height = `${100 * o / c}%`) : this.setRotation(b, n), n;
    }
    setRotation(t, e = this.container) {
      if (!this.data.rect) return;
      const { pageWidth: i, pageHeight: s } = this.parent.viewport.rawDims;
      let { width: n, height: r } = this;
      t % 180 !== 0 && ([n, r] = [
        r,
        n
      ]), e.style.width = `${100 * n / i}%`, e.style.height = `${100 * r / s}%`, e.setAttribute("data-main-rotation", (360 - t) % 360);
    }
    get _commonActions() {
      const t = (e, i, s) => {
        const n = s.detail[e], r = n[0], a = n.slice(1);
        s.target.style[i] = Fs[`${r}_HTML`](a), this.annotationStorage.setValue(this.data.id, {
          [i]: Fs[`${r}_rgb`](a)
        });
      };
      return H(this, "_commonActions", {
        display: (e) => {
          const { display: i } = e.detail, s = i % 2 === 1;
          this.container.style.visibility = s ? "hidden" : "visible", this.annotationStorage.setValue(this.data.id, {
            noView: s,
            noPrint: i === 1 || i === 2
          });
        },
        print: (e) => {
          this.annotationStorage.setValue(this.data.id, {
            noPrint: !e.detail.print
          });
        },
        hidden: (e) => {
          const { hidden: i } = e.detail;
          this.container.style.visibility = i ? "hidden" : "visible", this.annotationStorage.setValue(this.data.id, {
            noPrint: i,
            noView: i
          });
        },
        focus: (e) => {
          setTimeout(() => e.target.focus({
            preventScroll: false
          }), 0);
        },
        userName: (e) => {
          e.target.title = e.detail.userName;
        },
        readonly: (e) => {
          e.target.disabled = e.detail.readonly;
        },
        required: (e) => {
          this._setRequired(e.target, e.detail.required);
        },
        bgColor: (e) => {
          t("bgColor", "backgroundColor", e);
        },
        fillColor: (e) => {
          t("fillColor", "backgroundColor", e);
        },
        fgColor: (e) => {
          t("fgColor", "color", e);
        },
        textColor: (e) => {
          t("textColor", "color", e);
        },
        borderColor: (e) => {
          t("borderColor", "borderColor", e);
        },
        strokeColor: (e) => {
          t("strokeColor", "borderColor", e);
        },
        rotation: (e) => {
          const i = e.detail.rotation;
          this.setRotation(i), this.annotationStorage.setValue(this.data.id, {
            rotation: i
          });
        }
      });
    }
    _dispatchEventFromSandbox(t, e) {
      var _a29;
      const i = this._commonActions;
      for (const s of Object.keys(e.detail)) (_a29 = t[s] || i[s]) == null ? void 0 : _a29(e);
    }
    _setDefaultPropertiesFromJS(t) {
      if (!this.enableScripting) return;
      const e = this.annotationStorage.getRawValue(this.data.id);
      if (!e) return;
      const i = this._commonActions;
      for (const [s, n] of Object.entries(e)) {
        const r = i[s];
        if (r) {
          const a = {
            detail: {
              [s]: n
            },
            target: t
          };
          r(a), delete e[s];
        }
      }
    }
    _createQuadrilaterals() {
      if (!this.container) return;
      const { quadPoints: t } = this.data;
      if (!t) return;
      const [e, i, s, n] = this.data.rect.map((m) => Math.fround(m));
      if (t.length === 8) {
        const [m, w, A, S] = t.subarray(2, 6);
        if (s === m && n === w && e === A && i === S) return;
      }
      const { style: r } = this.container;
      let a;
      if (__privateGet(this, _e37)) {
        const { borderColor: m, borderWidth: w } = r;
        r.borderWidth = 0, a = [
          "url('data:image/svg+xml;utf8,",
          '<svg xmlns="http://www.w3.org/2000/svg"',
          ' preserveAspectRatio="none" viewBox="0 0 1 1">',
          `<g fill="transparent" stroke="${m}" stroke-width="${w}">`
        ], this.container.classList.add("hasBorder");
      }
      const o = s - e, l = n - i, { svgFactory: h } = this, c = h.createElement("svg");
      c.classList.add("quadrilateralsContainer"), c.setAttribute("width", 0), c.setAttribute("height", 0), c.role = "none";
      const f = h.createElement("defs");
      c.append(f);
      const g = h.createElement("clipPath"), b = `clippath_${this.data.id}`;
      g.setAttribute("id", b), g.setAttribute("clipPathUnits", "objectBoundingBox"), f.append(g);
      for (let m = 2, w = t.length; m < w; m += 8) {
        const A = t[m], S = t[m + 1], E = t[m + 2], C = t[m + 3], x = h.createElement("rect"), T = (E - e) / o, k = (n - S) / l, I = (A - E) / o, D = (S - C) / l;
        x.setAttribute("x", T), x.setAttribute("y", k), x.setAttribute("width", I), x.setAttribute("height", D), g.append(x), a == null ? void 0 : a.push(`<rect vector-effect="non-scaling-stroke" x="${T}" y="${k}" width="${I}" height="${D}"/>`);
      }
      __privateGet(this, _e37) && (a.push("</g></svg>')"), r.backgroundImage = a.join("")), this.container.append(c), this.container.style.clipPath = `url(#${b})`;
    }
    _createPopup(t = null) {
      const { data: e } = this;
      let i, s;
      t ? (i = {
        str: t.text
      }, s = t.date) : (i = e.contentsObj, s = e.modificationDate), __privateSet(this, _s29, new Ni({
        data: {
          color: e.color,
          titleObj: e.titleObj,
          modificationDate: s,
          contentsObj: i,
          richText: e.richText,
          parentRect: e.rect,
          borderStyle: 0,
          id: `popup_${e.id}`,
          rotation: e.rotation,
          noRotate: true
        },
        linkService: this.linkService,
        parent: this.parent,
        elements: [
          this
        ]
      }));
    }
    get hasPopupElement() {
      return !!(__privateGet(this, _s29) || this.popup || this.data.popupRef);
    }
    get extraPopupElement() {
      return __privateGet(this, _s29);
    }
    render() {
      Z("Abstract method `AnnotationElement.render` called");
    }
    _getElementsByName(t, e = null) {
      const i = [];
      if (this._fieldObjects) {
        const s = this._fieldObjects[t];
        if (s) for (const { page: n, id: r, exportValues: a } of s) {
          if (n === -1 || r === e) continue;
          const o = typeof a == "string" ? a : null, l = document.querySelector(`[data-element-id="${r}"]`);
          if (l && !ie.has(l)) {
            j(`_getElementsByName - element not allowed: ${r}`);
            continue;
          }
          i.push({
            id: r,
            exportValue: o,
            domElement: l
          });
        }
        return i;
      }
      for (const s of document.getElementsByName(t)) {
        const { exportValue: n } = s, r = s.getAttribute("data-element-id");
        r !== e && ie.has(s) && i.push({
          id: r,
          exportValue: n,
          domElement: s
        });
      }
      return i;
    }
    show() {
      var _a29;
      this.container && (this.container.hidden = false), (_a29 = this.popup) == null ? void 0 : _a29.maybeShow();
    }
    hide() {
      var _a29;
      this.container && (this.container.hidden = true), (_a29 = this.popup) == null ? void 0 : _a29.forceHide();
    }
    getElementsToTriggerPopup() {
      return this.container;
    }
    addHighlightArea() {
      const t = this.getElementsToTriggerPopup();
      if (Array.isArray(t)) for (const e of t) e.classList.add("highlightArea");
      else t.classList.add("highlightArea");
    }
    _editOnDoubleClick() {
      if (!this._isEditable) return;
      const { annotationEditorType: t, data: { id: e } } = this;
      this.container.addEventListener("dblclick", () => {
        var _a29;
        (_a29 = this.linkService.eventBus) == null ? void 0 : _a29.dispatch("switchannotationeditormode", {
          source: this,
          mode: t,
          editId: e,
          mustEnterInEditMode: true
        });
      });
    }
    get width() {
      return this.data.rect[2] - this.data.rect[0];
    }
    get height() {
      return this.data.rect[3] - this.data.rect[1];
    }
  };
  _t50 = new WeakMap();
  _e37 = new WeakMap();
  _s29 = new WeakMap();
  _lt_instances = new WeakSet();
  i_fn8 = function(t) {
    const { container: { style: e }, data: { rect: i, rotation: s }, parent: { viewport: { rawDims: { pageWidth: n, pageHeight: r, pageX: a, pageY: o } } } } = this;
    i == null ? void 0 : i.splice(0, 4, ...t), e.left = `${100 * (t[0] - a) / n}%`, e.top = `${100 * (r - t[3] + o) / r}%`, s === 0 ? (e.width = `${100 * (t[2] - t[0]) / n}%`, e.height = `${100 * (t[3] - t[1]) / r}%`) : this.setRotation(s);
  };
  let lt = _lt;
  class ta extends lt {
    constructor(t) {
      super(t, {
        isRenderable: true,
        ignoreBorder: true
      }), this.editor = t.editor;
    }
    render() {
      return this.container.className = "editorAnnotation", this.container;
    }
    createOrUpdatePopup() {
      const { editor: t } = this;
      t.hasComment && this._createPopup(t.comment);
    }
    get hasCommentButton() {
      return this.enableComment && this.editor.hasComment;
    }
    get commentButtonPosition() {
      return this.editor.commentButtonPositionInPage;
    }
    get commentText() {
      return this.editor.comment.text;
    }
    set commentText(t) {
      this.editor.comment = t, t || this.removePopup();
    }
    get commentData() {
      return this.editor.getData();
    }
    remove() {
      this.parent.removeAnnotation(this.data.id), this.container.remove(), this.container = null, this.removePopup();
    }
  }
  class Ji extends lt {
    constructor(t, e = null) {
      super(t, {
        isRenderable: true,
        ignoreBorder: !!(e == null ? void 0 : e.ignoreBorder),
        createQuadrilaterals: true
      });
      __privateAdd(this, _Ji_instances);
      this.isTooltipOnly = t.data.isTooltipOnly;
    }
    render() {
      const { data: t, linkService: e } = this, i = document.createElement("a");
      i.setAttribute("data-element-id", t.id);
      let s = false;
      return t.url ? (e.addLinkAttributes(i, t.url, t.newWindow), s = true) : t.action ? (this._bindNamedAction(i, t.action, t.overlaidText), s = true) : t.attachment ? (__privateMethod(this, _Ji_instances, e_fn8).call(this, i, t.attachment, t.overlaidText, t.attachmentDest), s = true) : t.setOCGState ? (__privateMethod(this, _Ji_instances, s_fn7).call(this, i, t.setOCGState, t.overlaidText), s = true) : t.dest ? (this._bindLink(i, t.dest, t.overlaidText), s = true) : (t.actions && (t.actions.Action || t.actions["Mouse Up"] || t.actions["Mouse Down"]) && this.enableScripting && this.hasJSActions && (this._bindJSAction(i, t), s = true), t.resetForm ? (this._bindResetFormAction(i, t.resetForm), s = true) : this.isTooltipOnly && !s && (this._bindLink(i, ""), s = true)), this.container.classList.add("linkAnnotation"), s && (this.contentElement = i, this.container.append(i)), this.container;
    }
    _bindLink(t, e, i = "") {
      t.href = this.linkService.getDestinationHash(e), t.onclick = () => (e && this.linkService.goToDestination(e), false), (e || e === "") && __privateMethod(this, _Ji_instances, t_fn5).call(this), i && (t.title = i);
    }
    _bindNamedAction(t, e, i = "") {
      t.href = this.linkService.getAnchorUrl(""), t.onclick = () => (this.linkService.executeNamedAction(e), false), i && (t.title = i), __privateMethod(this, _Ji_instances, t_fn5).call(this);
    }
    _bindJSAction(t, e) {
      t.href = this.linkService.getAnchorUrl("");
      const i = /* @__PURE__ */ new Map([
        [
          "Action",
          "onclick"
        ],
        [
          "Mouse Up",
          "onmouseup"
        ],
        [
          "Mouse Down",
          "onmousedown"
        ]
      ]);
      for (const s of Object.keys(e.actions)) {
        const n = i.get(s);
        n && (t[n] = () => {
          var _a29;
          return (_a29 = this.linkService.eventBus) == null ? void 0 : _a29.dispatch("dispatcheventinsandbox", {
            source: this,
            detail: {
              id: e.id,
              name: s
            }
          }), false;
        });
      }
      e.overlaidText && (t.title = e.overlaidText), t.onclick || (t.onclick = () => false), __privateMethod(this, _Ji_instances, t_fn5).call(this);
    }
    _bindResetFormAction(t, e) {
      const i = t.onclick;
      if (i || (t.href = this.linkService.getAnchorUrl("")), __privateMethod(this, _Ji_instances, t_fn5).call(this), !this._fieldObjects) {
        j('_bindResetFormAction - "resetForm" action not supported, ensure that the `fieldObjects` parameter is provided.'), i || (t.onclick = () => false);
        return;
      }
      t.onclick = () => {
        var _a29;
        i == null ? void 0 : i();
        const { fields: s, refs: n, include: r } = e, a = [];
        if (s.length !== 0 || n.length !== 0) {
          const h = new Set(n);
          for (const c of s) {
            const f = this._fieldObjects[c] || [];
            for (const { id: g } of f) h.add(g);
          }
          for (const c of Object.values(this._fieldObjects)) for (const f of c) h.has(f.id) === r && a.push(f);
        } else for (const h of Object.values(this._fieldObjects)) a.push(...h);
        const o = this.annotationStorage, l = [];
        for (const h of a) {
          const { id: c } = h;
          switch (l.push(c), h.type) {
            case "text": {
              const g = h.defaultValue || "";
              o.setValue(c, {
                value: g
              });
              break;
            }
            case "checkbox":
            case "radiobutton": {
              const g = h.defaultValue === h.exportValues;
              o.setValue(c, {
                value: g
              });
              break;
            }
            case "combobox":
            case "listbox": {
              const g = h.defaultValue || "";
              o.setValue(c, {
                value: g
              });
              break;
            }
            default:
              continue;
          }
          const f = document.querySelector(`[data-element-id="${c}"]`);
          if (f) {
            if (!ie.has(f)) {
              j(`_bindResetFormAction - element not allowed: ${c}`);
              continue;
            }
          } else continue;
          f.dispatchEvent(new Event("resetform"));
        }
        return this.enableScripting && ((_a29 = this.linkService.eventBus) == null ? void 0 : _a29.dispatch("dispatcheventinsandbox", {
          source: this,
          detail: {
            id: "app",
            ids: l,
            name: "ResetForm"
          }
        })), false;
      };
    }
  }
  _Ji_instances = new WeakSet();
  t_fn5 = function() {
    this.container.setAttribute("data-internal-link", "");
  };
  e_fn8 = function(t, e, i = "", s = null) {
    t.href = this.linkService.getAnchorUrl(""), e.description ? t.title = e.description : i && (t.title = i), t.onclick = () => {
      var _a29;
      return (_a29 = this.downloadManager) == null ? void 0 : _a29.openOrDownloadData(e.content, e.filename, s), false;
    }, __privateMethod(this, _Ji_instances, t_fn5).call(this);
  };
  s_fn7 = function(t, e, i = "") {
    t.href = this.linkService.getAnchorUrl(""), t.onclick = () => (this.linkService.executeSetOCGState(e), false), i && (t.title = i), __privateMethod(this, _Ji_instances, t_fn5).call(this);
  };
  class ea extends lt {
    constructor(t) {
      super(t, {
        isRenderable: true
      });
    }
    render() {
      this.container.classList.add("textAnnotation");
      const t = document.createElement("img");
      return t.src = this.imageResourcesPath + "annotation-" + this.data.name.toLowerCase() + ".svg", t.setAttribute("data-l10n-id", "pdfjs-text-annotation-type"), t.setAttribute("data-l10n-args", JSON.stringify({
        type: this.data.name
      })), !this.data.popupRef && this.hasPopupData && (this.hasOwnCommentButton = true, this._createPopup()), this.container.append(t), this.container;
    }
  }
  class ne extends lt {
    render() {
      return this.container;
    }
    showElementAndHideCanvas(t) {
      var _a29;
      this.data.hasOwnCanvas && (((_a29 = t.previousSibling) == null ? void 0 : _a29.nodeName) === "CANVAS" && (t.previousSibling.hidden = true), t.hidden = false);
    }
    _getKeyModifier(t) {
      return mt.platform.isMac ? t.metaKey : t.ctrlKey;
    }
    _setEventListener(t, e, i, s, n) {
      i.includes("mouse") ? t.addEventListener(i, (r) => {
        var _a29;
        (_a29 = this.linkService.eventBus) == null ? void 0 : _a29.dispatch("dispatcheventinsandbox", {
          source: this,
          detail: {
            id: this.data.id,
            name: s,
            value: n(r),
            shift: r.shiftKey,
            modifier: this._getKeyModifier(r)
          }
        });
      }) : t.addEventListener(i, (r) => {
        var _a29;
        if (i === "blur") {
          if (!e.focused || !r.relatedTarget) return;
          e.focused = false;
        } else if (i === "focus") {
          if (e.focused) return;
          e.focused = true;
        }
        n && ((_a29 = this.linkService.eventBus) == null ? void 0 : _a29.dispatch("dispatcheventinsandbox", {
          source: this,
          detail: {
            id: this.data.id,
            name: s,
            value: n(r)
          }
        }));
      });
    }
    _setEventListeners(t, e, i, s) {
      var _a29, _b7, _c10;
      for (const [n, r] of i) (r === "Action" || ((_a29 = this.data.actions) == null ? void 0 : _a29[r])) && ((r === "Focus" || r === "Blur") && (e || (e = {
        focused: false
      })), this._setEventListener(t, e, n, r, s), r === "Focus" && !((_b7 = this.data.actions) == null ? void 0 : _b7.Blur) ? this._setEventListener(t, e, "blur", "Blur", null) : r === "Blur" && !((_c10 = this.data.actions) == null ? void 0 : _c10.Focus) && this._setEventListener(t, e, "focus", "Focus", null));
    }
    _setBackgroundColor(t) {
      const e = this.data.backgroundColor || null;
      t.style.backgroundColor = e === null ? "transparent" : R.makeHexColor(e[0], e[1], e[2]);
    }
    _setTextStyle(t) {
      const e = [
        "left",
        "center",
        "right"
      ], { fontColor: i } = this.data.defaultAppearanceData, s = this.data.defaultAppearanceData.fontSize || Qr, n = t.style;
      let r;
      const a = 2, o = (l) => Math.round(10 * l) / 10;
      if (this.data.multiLine) {
        const l = Math.abs(this.data.rect[3] - this.data.rect[1] - a), h = Math.round(l / (yi * s)) || 1, c = l / h;
        r = Math.min(s, o(c / yi));
      } else {
        const l = Math.abs(this.data.rect[3] - this.data.rect[1] - a);
        r = Math.min(s, o(l / yi));
      }
      n.fontSize = `calc(${r}px * var(--total-scale-factor))`, n.color = R.makeHexColor(i[0], i[1], i[2]), this.data.textAlignment !== null && (n.textAlign = e[this.data.textAlignment]);
    }
    _setRequired(t, e) {
      e ? t.setAttribute("required", true) : t.removeAttribute("required"), t.setAttribute("aria-required", e);
    }
  }
  class ia extends ne {
    constructor(t) {
      const e = t.renderForms || t.data.hasOwnCanvas || !t.data.hasAppearance && !!t.data.fieldValue;
      super(t, {
        isRenderable: e
      });
    }
    setPropertyOnSiblings(t, e, i, s) {
      const n = this.annotationStorage;
      for (const r of this._getElementsByName(t.name, t.id)) r.domElement && (r.domElement[e] = i), n.setValue(r.id, {
        [s]: i
      });
    }
    render() {
      var _a29, _b7;
      const t = this.annotationStorage, e = this.data.id;
      this.container.classList.add("textWidgetAnnotation");
      let i = null;
      if (this.renderForms) {
        const s = t.getValue(e, {
          value: this.data.fieldValue
        });
        let n = s.value || "";
        const r = t.getValue(e, {
          charLimit: this.data.maxLen
        }).charLimit;
        r && n.length > r && (n = n.slice(0, r));
        let a = s.formattedValue || ((_a29 = this.data.textContent) == null ? void 0 : _a29.join(`
`)) || null;
        a && this.data.comb && (a = a.replaceAll(/\s+/g, ""));
        const o = {
          userValue: n,
          formattedValue: a,
          lastCommittedValue: null,
          commitKey: 1,
          focused: false
        };
        this.data.multiLine ? (i = document.createElement("textarea"), i.textContent = a ?? n, this.data.doNotScroll && (i.style.overflowY = "hidden")) : (i = document.createElement("input"), i.type = this.data.password ? "password" : "text", i.setAttribute("value", a ?? n), this.data.doNotScroll && (i.style.overflowX = "hidden")), this.data.hasOwnCanvas && (i.hidden = true), ie.add(i), this.contentElement = i, i.setAttribute("data-element-id", e), i.disabled = this.data.readOnly, i.name = this.data.fieldName, i.tabIndex = 0;
        const { datetimeFormat: l, datetimeType: h, timeStep: c } = this.data, f = !!h && this.enableScripting;
        l && (i.title = l), this._setRequired(i, this.data.required), r && (i.maxLength = r), i.addEventListener("input", (b) => {
          t.setValue(e, {
            value: b.target.value
          }), this.setPropertyOnSiblings(i, "value", b.target.value, "value"), o.formattedValue = null;
        }), i.addEventListener("resetform", (b) => {
          const m = this.data.defaultFieldValue ?? "";
          i.value = o.userValue = m, o.formattedValue = null;
        });
        let g = (b) => {
          const { formattedValue: m } = o;
          m != null && (b.target.value = m), b.target.scrollLeft = 0;
        };
        if (this.enableScripting && this.hasJSActions) {
          i.addEventListener("focus", (m) => {
            var _a30;
            if (o.focused) return;
            const { target: w } = m;
            if (f && (w.type = h, c && (w.step = c)), o.userValue) {
              const A = o.userValue;
              if (f) if (h === "time") {
                const S = new Date(A), E = [
                  S.getHours(),
                  S.getMinutes(),
                  S.getSeconds()
                ];
                w.value = E.map((C) => C.toString().padStart(2, "0")).join(":");
              } else w.value = new Date(A - Zr).toISOString().split(h === "date" ? "T" : ".", 1)[0];
              else w.value = A;
            }
            o.lastCommittedValue = w.value, o.commitKey = 1, ((_a30 = this.data.actions) == null ? void 0 : _a30.Focus) || (o.focused = true);
          }), i.addEventListener("updatefromsandbox", (m) => {
            this.showElementAndHideCanvas(m.target);
            const w = {
              value(A) {
                o.userValue = A.detail.value ?? "", f || t.setValue(e, {
                  value: o.userValue.toString()
                }), A.target.value = o.userValue;
              },
              formattedValue(A) {
                const { formattedValue: S } = A.detail;
                o.formattedValue = S, S != null && A.target !== document.activeElement && (A.target.value = S);
                const E = {
                  formattedValue: S
                };
                f && (E.value = S), t.setValue(e, E);
              },
              selRange(A) {
                A.target.setSelectionRange(...A.detail.selRange);
              },
              charLimit: (A) => {
                var _a30;
                const { charLimit: S } = A.detail, { target: E } = A;
                if (S === 0) {
                  E.removeAttribute("maxLength");
                  return;
                }
                E.setAttribute("maxLength", S);
                let C = o.userValue;
                !C || C.length <= S || (C = C.slice(0, S), E.value = o.userValue = C, t.setValue(e, {
                  value: C
                }), (_a30 = this.linkService.eventBus) == null ? void 0 : _a30.dispatch("dispatcheventinsandbox", {
                  source: this,
                  detail: {
                    id: e,
                    name: "Keystroke",
                    value: C,
                    willCommit: true,
                    commitKey: 1,
                    selStart: E.selectionStart,
                    selEnd: E.selectionEnd
                  }
                }));
              }
            };
            this._dispatchEventFromSandbox(w, m);
          }), i.addEventListener("keydown", (m) => {
            var _a30;
            o.commitKey = 1;
            let w = -1;
            if (m.key === "Escape" ? w = 0 : m.key === "Enter" && !this.data.multiLine ? w = 2 : m.key === "Tab" && (o.commitKey = 3), w === -1) return;
            const { value: A } = m.target;
            o.lastCommittedValue !== A && (o.lastCommittedValue = A, o.userValue = A, (_a30 = this.linkService.eventBus) == null ? void 0 : _a30.dispatch("dispatcheventinsandbox", {
              source: this,
              detail: {
                id: e,
                name: "Keystroke",
                value: A,
                willCommit: true,
                commitKey: w,
                selStart: m.target.selectionStart,
                selEnd: m.target.selectionEnd
              }
            }));
          });
          const b = g;
          g = null, i.addEventListener("blur", (m) => {
            var _a30, _b8;
            if (!o.focused || !m.relatedTarget) return;
            ((_a30 = this.data.actions) == null ? void 0 : _a30.Blur) || (o.focused = false);
            const { target: w } = m;
            let { value: A } = w;
            if (f) {
              if (A && h === "time") {
                const S = A.split(":").map((E) => parseInt(E, 10));
                A = new Date(2e3, 0, 1, S[0], S[1], S[2] || 0).valueOf(), w.step = "";
              } else A.includes("T") || (A = `${A}T00:00`), A = new Date(A).valueOf();
              w.type = "text";
            }
            o.userValue = A, o.lastCommittedValue !== A && ((_b8 = this.linkService.eventBus) == null ? void 0 : _b8.dispatch("dispatcheventinsandbox", {
              source: this,
              detail: {
                id: e,
                name: "Keystroke",
                value: A,
                willCommit: true,
                commitKey: o.commitKey,
                selStart: m.target.selectionStart,
                selEnd: m.target.selectionEnd
              }
            })), b(m);
          }), ((_b7 = this.data.actions) == null ? void 0 : _b7.Keystroke) && i.addEventListener("beforeinput", (m) => {
            var _a30;
            o.lastCommittedValue = null;
            const { data: w, target: A } = m, { value: S, selectionStart: E, selectionEnd: C } = A;
            let x = E, T = C;
            switch (m.inputType) {
              case "deleteWordBackward": {
                const k = S.substring(0, E).match(/\w*[^\w]*$/);
                k && (x -= k[0].length);
                break;
              }
              case "deleteWordForward": {
                const k = S.substring(E).match(/^[^\w]*\w*/);
                k && (T += k[0].length);
                break;
              }
              case "deleteContentBackward":
                E === C && (x -= 1);
                break;
              case "deleteContentForward":
                E === C && (T += 1);
                break;
            }
            m.preventDefault(), (_a30 = this.linkService.eventBus) == null ? void 0 : _a30.dispatch("dispatcheventinsandbox", {
              source: this,
              detail: {
                id: e,
                name: "Keystroke",
                value: S,
                change: w || "",
                willCommit: false,
                selStart: x,
                selEnd: T
              }
            });
          }), this._setEventListeners(i, o, [
            [
              "focus",
              "Focus"
            ],
            [
              "blur",
              "Blur"
            ],
            [
              "mousedown",
              "Mouse Down"
            ],
            [
              "mouseenter",
              "Mouse Enter"
            ],
            [
              "mouseleave",
              "Mouse Exit"
            ],
            [
              "mouseup",
              "Mouse Up"
            ]
          ], (m) => m.target.value);
        }
        if (g && i.addEventListener("blur", g), this.data.comb) {
          const m = (this.data.rect[2] - this.data.rect[0]) / r;
          i.classList.add("comb"), i.style.letterSpacing = `calc(${m}px * var(--total-scale-factor) - 1ch)`;
        }
      } else i = document.createElement("div"), i.textContent = this.data.fieldValue, i.style.verticalAlign = "middle", i.style.display = "table-cell", this.data.hasOwnCanvas && (i.hidden = true);
      return this._setTextStyle(i), this._setBackgroundColor(i), this._setDefaultPropertiesFromJS(i), this.container.append(i), this.container;
    }
  }
  class sa extends ne {
    constructor(t) {
      super(t, {
        isRenderable: !!t.data.hasOwnCanvas
      });
    }
  }
  class na extends ne {
    constructor(t) {
      super(t, {
        isRenderable: t.renderForms
      });
    }
    render() {
      const t = this.annotationStorage, e = this.data, i = e.id;
      let s = t.getValue(i, {
        value: e.exportValue === e.fieldValue
      }).value;
      typeof s == "string" && (s = s !== "Off", t.setValue(i, {
        value: s
      })), this.container.classList.add("buttonWidgetAnnotation", "checkBox");
      const n = document.createElement("input");
      return ie.add(n), n.setAttribute("data-element-id", i), n.disabled = e.readOnly, this._setRequired(n, this.data.required), n.type = "checkbox", n.name = e.fieldName, s && n.setAttribute("checked", true), n.setAttribute("exportValue", e.exportValue), n.tabIndex = 0, n.addEventListener("change", (r) => {
        const { name: a, checked: o } = r.target;
        for (const l of this._getElementsByName(a, i)) {
          const h = o && l.exportValue === e.exportValue;
          l.domElement && (l.domElement.checked = h), t.setValue(l.id, {
            value: h
          });
        }
        t.setValue(i, {
          value: o
        });
      }), n.addEventListener("resetform", (r) => {
        const a = e.defaultFieldValue || "Off";
        r.target.checked = a === e.exportValue;
      }), this.enableScripting && this.hasJSActions && (n.addEventListener("updatefromsandbox", (r) => {
        const a = {
          value(o) {
            o.target.checked = o.detail.value !== "Off", t.setValue(i, {
              value: o.target.checked
            });
          }
        };
        this._dispatchEventFromSandbox(a, r);
      }), this._setEventListeners(n, null, [
        [
          "change",
          "Validate"
        ],
        [
          "change",
          "Action"
        ],
        [
          "focus",
          "Focus"
        ],
        [
          "blur",
          "Blur"
        ],
        [
          "mousedown",
          "Mouse Down"
        ],
        [
          "mouseenter",
          "Mouse Enter"
        ],
        [
          "mouseleave",
          "Mouse Exit"
        ],
        [
          "mouseup",
          "Mouse Up"
        ]
      ], (r) => r.target.checked)), this._setBackgroundColor(n), this._setDefaultPropertiesFromJS(n), this.container.append(n), this.container;
    }
  }
  class ln extends ne {
    constructor(t) {
      super(t, {
        isRenderable: t.renderForms
      });
    }
    render() {
      this.container.classList.add("buttonWidgetAnnotation", "radioButton");
      const t = this.annotationStorage, e = this.data, i = e.id;
      let s = t.getValue(i, {
        value: e.fieldValue === e.buttonValue
      }).value;
      if (typeof s == "string" && (s = s !== e.buttonValue, t.setValue(i, {
        value: s
      })), s) for (const r of this._getElementsByName(e.fieldName, i)) t.setValue(r.id, {
        value: false
      });
      const n = document.createElement("input");
      if (ie.add(n), n.setAttribute("data-element-id", i), n.disabled = e.readOnly, this._setRequired(n, this.data.required), n.type = "radio", n.name = e.fieldName, s && n.setAttribute("checked", true), n.tabIndex = 0, n.addEventListener("change", (r) => {
        const { name: a, checked: o } = r.target;
        for (const l of this._getElementsByName(a, i)) t.setValue(l.id, {
          value: false
        });
        t.setValue(i, {
          value: o
        });
      }), n.addEventListener("resetform", (r) => {
        const a = e.defaultFieldValue;
        r.target.checked = a != null && a === e.buttonValue;
      }), this.enableScripting && this.hasJSActions) {
        const r = e.buttonValue;
        n.addEventListener("updatefromsandbox", (a) => {
          const o = {
            value: (l) => {
              const h = r === l.detail.value;
              for (const c of this._getElementsByName(l.target.name)) {
                const f = h && c.id === i;
                c.domElement && (c.domElement.checked = f), t.setValue(c.id, {
                  value: f
                });
              }
            }
          };
          this._dispatchEventFromSandbox(o, a);
        }), this._setEventListeners(n, null, [
          [
            "change",
            "Validate"
          ],
          [
            "change",
            "Action"
          ],
          [
            "focus",
            "Focus"
          ],
          [
            "blur",
            "Blur"
          ],
          [
            "mousedown",
            "Mouse Down"
          ],
          [
            "mouseenter",
            "Mouse Enter"
          ],
          [
            "mouseleave",
            "Mouse Exit"
          ],
          [
            "mouseup",
            "Mouse Up"
          ]
        ], (a) => a.target.checked);
      }
      return this._setBackgroundColor(n), this._setDefaultPropertiesFromJS(n), this.container.append(n), this.container;
    }
  }
  class ra extends Ji {
    constructor(t) {
      super(t, {
        ignoreBorder: t.data.hasAppearance
      });
    }
    render() {
      const t = super.render();
      t.classList.add("buttonWidgetAnnotation", "pushButton");
      const e = t.lastChild;
      return this.enableScripting && this.hasJSActions && e && (this._setDefaultPropertiesFromJS(e), e.addEventListener("updatefromsandbox", (i) => {
        this._dispatchEventFromSandbox({}, i);
      })), t;
    }
  }
  class aa extends ne {
    constructor(t) {
      super(t, {
        isRenderable: t.renderForms
      });
    }
    render() {
      this.container.classList.add("choiceWidgetAnnotation");
      const t = this.annotationStorage, e = this.data.id, i = t.getValue(e, {
        value: this.data.fieldValue
      }), s = document.createElement("select");
      ie.add(s), s.setAttribute("data-element-id", e), s.disabled = this.data.readOnly, this._setRequired(s, this.data.required), s.name = this.data.fieldName, s.tabIndex = 0;
      let n = this.data.combo && this.data.options.length > 0;
      this.data.combo || (s.size = this.data.options.length, this.data.multiSelect && (s.multiple = true)), s.addEventListener("resetform", (h) => {
        const c = this.data.defaultFieldValue;
        for (const f of s.options) f.selected = f.value === c;
      });
      for (const h of this.data.options) {
        const c = document.createElement("option");
        c.textContent = h.displayValue, c.value = h.exportValue, i.value.includes(h.exportValue) && (c.setAttribute("selected", true), n = false), s.append(c);
      }
      let r = null;
      if (n) {
        const h = document.createElement("option");
        h.value = " ", h.setAttribute("hidden", true), h.setAttribute("selected", true), s.prepend(h), r = () => {
          h.remove(), s.removeEventListener("input", r), r = null;
        }, s.addEventListener("input", r);
      }
      const a = (h) => {
        const c = h ? "value" : "textContent", { options: f, multiple: g } = s;
        return g ? Array.prototype.filter.call(f, (b) => b.selected).map((b) => b[c]) : f.selectedIndex === -1 ? null : f[f.selectedIndex][c];
      };
      let o = a(false);
      const l = (h) => {
        const c = h.target.options;
        return Array.prototype.map.call(c, (f) => ({
          displayValue: f.textContent,
          exportValue: f.value
        }));
      };
      return this.enableScripting && this.hasJSActions ? (s.addEventListener("updatefromsandbox", (h) => {
        const c = {
          value(f) {
            r == null ? void 0 : r();
            const g = f.detail.value, b = new Set(Array.isArray(g) ? g : [
              g
            ]);
            for (const m of s.options) m.selected = b.has(m.value);
            t.setValue(e, {
              value: a(true)
            }), o = a(false);
          },
          multipleSelection(f) {
            s.multiple = true;
          },
          remove(f) {
            const g = s.options, b = f.detail.remove;
            g[b].selected = false, s.remove(b), g.length > 0 && Array.prototype.findIndex.call(g, (w) => w.selected) === -1 && (g[0].selected = true), t.setValue(e, {
              value: a(true),
              items: l(f)
            }), o = a(false);
          },
          clear(f) {
            for (; s.length !== 0; ) s.remove(0);
            t.setValue(e, {
              value: null,
              items: []
            }), o = a(false);
          },
          insert(f) {
            const { index: g, displayValue: b, exportValue: m } = f.detail.insert, w = s.children[g], A = document.createElement("option");
            A.textContent = b, A.value = m, w ? w.before(A) : s.append(A), t.setValue(e, {
              value: a(true),
              items: l(f)
            }), o = a(false);
          },
          items(f) {
            const { items: g } = f.detail;
            for (; s.length !== 0; ) s.remove(0);
            for (const b of g) {
              const { displayValue: m, exportValue: w } = b, A = document.createElement("option");
              A.textContent = m, A.value = w, s.append(A);
            }
            s.options.length > 0 && (s.options[0].selected = true), t.setValue(e, {
              value: a(true),
              items: l(f)
            }), o = a(false);
          },
          indices(f) {
            const g = new Set(f.detail.indices);
            for (const b of f.target.options) b.selected = g.has(b.index);
            t.setValue(e, {
              value: a(true)
            }), o = a(false);
          },
          editable(f) {
            f.target.disabled = !f.detail.editable;
          }
        };
        this._dispatchEventFromSandbox(c, h);
      }), s.addEventListener("input", (h) => {
        var _a29;
        const c = a(true), f = a(false);
        t.setValue(e, {
          value: c
        }), h.preventDefault(), (_a29 = this.linkService.eventBus) == null ? void 0 : _a29.dispatch("dispatcheventinsandbox", {
          source: this,
          detail: {
            id: e,
            name: "Keystroke",
            value: o,
            change: f,
            changeEx: c,
            willCommit: false,
            commitKey: 1,
            keyDown: false
          }
        });
      }), this._setEventListeners(s, null, [
        [
          "focus",
          "Focus"
        ],
        [
          "blur",
          "Blur"
        ],
        [
          "mousedown",
          "Mouse Down"
        ],
        [
          "mouseenter",
          "Mouse Enter"
        ],
        [
          "mouseleave",
          "Mouse Exit"
        ],
        [
          "mouseup",
          "Mouse Up"
        ],
        [
          "input",
          "Action"
        ],
        [
          "input",
          "Validate"
        ]
      ], (h) => h.target.value)) : s.addEventListener("input", function(h) {
        t.setValue(e, {
          value: a(true)
        });
      }), this.data.combo && this._setTextStyle(s), this._setBackgroundColor(s), this._setDefaultPropertiesFromJS(s), this.container.append(s), this.container;
    }
  }
  class Ni extends lt {
    constructor(t) {
      const { data: e, elements: i, parent: s } = t, n = !!s._commentManager;
      super(t, {
        isRenderable: !n && lt._hasPopupData(e)
      });
      __privateAdd(this, _Ni_instances);
      if (this.elements = i, n && lt._hasPopupData(e)) {
        const r = this.popup = __privateMethod(this, _Ni_instances, t_fn6).call(this);
        for (const a of i) a.popup = r;
      } else this.popup = null;
    }
    render() {
      const { container: t } = this;
      t.classList.add("popupAnnotation"), t.role = "comment";
      const e = this.popup = __privateMethod(this, _Ni_instances, t_fn6).call(this), i = [];
      for (const s of this.elements) s.popup = e, s.container.ariaHasPopup = "dialog", i.push(s.data.id), s.addHighlightArea();
      return this.container.setAttribute("aria-controls", i.map((s) => `${ce}${s}`).join(",")), this.container;
    }
  }
  _Ni_instances = new WeakSet();
  t_fn6 = function() {
    return new oa({
      container: this.container,
      color: this.data.color,
      titleObj: this.data.titleObj,
      modificationDate: this.data.modificationDate || this.data.creationDate,
      contentsObj: this.data.contentsObj,
      richText: this.data.richText,
      rect: this.data.rect,
      parentRect: this.data.parentRect || null,
      parent: this.parent,
      elements: this.elements,
      open: this.data.open,
      commentManager: this.parent._commentManager
    });
  };
  class oa {
    constructor({ container: t, color: e, elements: i, titleObj: s, modificationDate: n, contentsObj: r, richText: a, parent: o, rect: l, parentRect: h, open: c, commentManager: f = null }) {
      __privateAdd(this, _oa_instances);
      __privateAdd(this, _t51, null);
      __privateAdd(this, _e38, __privateMethod(this, _oa_instances, z_fn2).bind(this));
      __privateAdd(this, _s30, __privateMethod(this, _oa_instances, U_fn2).bind(this));
      __privateAdd(this, _i26, __privateMethod(this, _oa_instances, L_fn2).bind(this));
      __privateAdd(this, _a18, __privateMethod(this, _oa_instances, E_fn2).bind(this));
      __privateAdd(this, _r17, null);
      __privateAdd(this, _n17, null);
      __privateAdd(this, _o13, null);
      __privateAdd(this, _h11, null);
      __privateAdd(this, _l9, null);
      __privateAdd(this, _u8, null);
      __privateAdd(this, _d8, null);
      __privateAdd(this, _f7, false);
      __privateAdd(this, _m5, null);
      __privateAdd(this, _g6, null);
      __privateAdd(this, _c6, null);
      __privateAdd(this, _p5, null);
      __privateAdd(this, _b5, null);
      __privateAdd(this, _A4, null);
      __privateAdd(this, _y4, null);
      __privateAdd(this, __4, null);
      __privateAdd(this, _S4, null);
      __privateAdd(this, _v4, null);
      __privateAdd(this, _T3, false);
      __privateAdd(this, _w3, null);
      __privateAdd(this, _x3, null);
      __privateSet(this, _n17, t), __privateSet(this, _S4, s), __privateSet(this, _o13, r), __privateSet(this, __4, a), __privateSet(this, _u8, o), __privateSet(this, _r17, e), __privateSet(this, _y4, l), __privateSet(this, _d8, h), __privateSet(this, _l9, i), __privateSet(this, _t51, f), __privateSet(this, _w3, i[0]), __privateSet(this, _h11, Ii.toDateObject(n)), this.trigger = i.flatMap((g) => g.getElementsToTriggerPopup()), f || (__privateMethod(this, _oa_instances, M_fn3).call(this), __privateGet(this, _n17).hidden = true, c && __privateMethod(this, _oa_instances, E_fn2).call(this));
    }
    renderCommentButton() {
      if (__privateGet(this, _p5)) {
        __privateGet(this, _p5).parentNode || __privateGet(this, _w3).container.after(__privateGet(this, _p5));
        return;
      }
      if (__privateGet(this, _b5) || __privateMethod(this, _oa_instances, P_fn3).call(this), !__privateGet(this, _b5)) return;
      const { signal: t } = __privateSet(this, _g6, new AbortController()), e = __privateGet(this, _w3).hasOwnCommentButton, i = () => {
        __privateGet(this, _t51).toggleCommentPopup(this, true, void 0, !e);
      }, s = () => {
        __privateGet(this, _t51).toggleCommentPopup(this, false, true, !e);
      }, n = () => {
        __privateGet(this, _t51).toggleCommentPopup(this, false, false);
      };
      if (e) {
        __privateSet(this, _p5, __privateGet(this, _w3).container);
        for (const r of this.trigger) r.ariaHasPopup = "dialog", r.ariaControls = "commentPopup", r.addEventListener("keydown", __privateGet(this, _e38), {
          signal: t
        }), r.addEventListener("click", i, {
          signal: t
        }), r.addEventListener("pointerenter", s, {
          signal: t
        }), r.addEventListener("pointerleave", n, {
          signal: t
        }), r.classList.add("popupTriggerArea");
      } else {
        const r = __privateSet(this, _p5, document.createElement("button"));
        r.className = "annotationCommentButton";
        const a = __privateGet(this, _w3).container;
        r.style.zIndex = a.style.zIndex + 1, r.tabIndex = 0, r.ariaHasPopup = "dialog", r.ariaControls = "commentPopup", r.setAttribute("data-l10n-id", "pdfjs-show-comment-button"), __privateMethod(this, _oa_instances, N_fn3).call(this), __privateMethod(this, _oa_instances, k_fn3).call(this), r.addEventListener("keydown", __privateGet(this, _e38), {
          signal: t
        }), r.addEventListener("click", i, {
          signal: t
        }), r.addEventListener("pointerenter", s, {
          signal: t
        }), r.addEventListener("pointerleave", n, {
          signal: t
        }), a.after(r);
      }
    }
    get commentButtonColor() {
      const { color: t, opacity: e } = __privateGet(this, _w3).commentData;
      return t ? __privateGet(this, _u8)._commentManager.makeCommentColor(t, e) : null;
    }
    focusCommentButton() {
      setTimeout(() => {
        var _a29;
        (_a29 = __privateGet(this, _p5)) == null ? void 0 : _a29.focus();
      }, 0);
    }
    getData() {
      const { richText: t, color: e, opacity: i, creationDate: s, modificationDate: n } = __privateGet(this, _w3).commentData;
      return {
        contentsObj: {
          str: this.comment
        },
        richText: t,
        color: e,
        opacity: i,
        creationDate: s,
        modificationDate: n
      };
    }
    get elementBeforePopup() {
      return __privateGet(this, _p5);
    }
    get comment() {
      return __privateGet(this, _x3) || __privateSet(this, _x3, __privateGet(this, _w3).commentText), __privateGet(this, _x3);
    }
    set comment(t) {
      t !== this.comment && (__privateGet(this, _w3).commentText = __privateSet(this, _x3, t));
    }
    focus() {
      var _a29;
      (_a29 = __privateGet(this, _w3).container) == null ? void 0 : _a29.focus();
    }
    get parentBoundingClientRect() {
      return __privateGet(this, _w3).layer.getBoundingClientRect();
    }
    setCommentButtonStates({ selected: t, hasPopup: e }) {
      __privateGet(this, _p5) && (__privateGet(this, _p5).classList.toggle("selected", t), __privateGet(this, _p5).ariaExpanded = e);
    }
    setSelectedCommentButton(t) {
      __privateGet(this, _p5).classList.toggle("selected", t);
    }
    get commentPopupPosition() {
      if (__privateGet(this, _A4)) return __privateGet(this, _A4);
      const { x: t, y: e, height: i } = __privateGet(this, _p5).getBoundingClientRect(), { x: s, y: n, width: r, height: a } = __privateGet(this, _w3).layer.getBoundingClientRect();
      return [
        (t - s) / r,
        (e + i - n) / a
      ];
    }
    set commentPopupPosition(t) {
      __privateSet(this, _A4, t);
    }
    hasDefaultPopupPosition() {
      return __privateGet(this, _A4) === null;
    }
    get commentButtonPosition() {
      return __privateGet(this, _b5);
    }
    get commentButtonWidth() {
      return __privateGet(this, _p5).getBoundingClientRect().width / this.parentBoundingClientRect.width;
    }
    editComment(t) {
      const [e, i] = __privateGet(this, _A4) || this.commentButtonPosition.map((l) => l / 100), s = this.parentBoundingClientRect, { x: n, y: r, width: a, height: o } = s;
      __privateGet(this, _t51).showDialog(null, this, n + e * a, r + i * o, {
        ...t,
        parentDimensions: s
      });
    }
    render() {
      var _a29, _b7;
      if (__privateGet(this, _m5)) return;
      const t = __privateSet(this, _m5, document.createElement("div"));
      if (t.className = "popup", __privateGet(this, _r17)) {
        const i = t.style.outlineColor = R.makeHexColor(...__privateGet(this, _r17));
        t.style.backgroundColor = `color-mix(in srgb, ${i} 30%, white)`;
      }
      const e = document.createElement("span");
      if (e.className = "header", (_a29 = __privateGet(this, _S4)) == null ? void 0 : _a29.str) {
        const i = document.createElement("span");
        i.className = "title", e.append(i), { dir: i.dir, str: i.textContent } = __privateGet(this, _S4);
      }
      if (t.append(e), __privateGet(this, _h11)) {
        const i = document.createElement("time");
        i.className = "popupDate", i.setAttribute("data-l10n-id", "pdfjs-annotation-date-time-string"), i.setAttribute("data-l10n-args", JSON.stringify({
          dateObj: __privateGet(this, _h11).valueOf()
        })), i.dateTime = __privateGet(this, _h11).toISOString(), e.append(i);
      }
      js({
        html: __privateGet(this, _oa_instances, D_get) || __privateGet(this, _o13).str,
        dir: (_b7 = __privateGet(this, _o13)) == null ? void 0 : _b7.dir,
        className: "popupContent"
      }, t), __privateGet(this, _n17).append(t);
    }
    updateEdited({ rect: t, popup: e, deleted: i }) {
      var _a29;
      if (__privateGet(this, _t51)) {
        i ? (this.remove(), __privateSet(this, _x3, null)) : e && (e.deleted ? this.remove() : (__privateMethod(this, _oa_instances, N_fn3).call(this), __privateSet(this, _x3, e.text))), t && (__privateSet(this, _b5, null), __privateMethod(this, _oa_instances, P_fn3).call(this), __privateMethod(this, _oa_instances, k_fn3).call(this));
        return;
      }
      if (i || (e == null ? void 0 : e.deleted)) {
        this.remove();
        return;
      }
      __privateMethod(this, _oa_instances, M_fn3).call(this), __privateGet(this, _v4) || __privateSet(this, _v4, {
        contentsObj: __privateGet(this, _o13),
        richText: __privateGet(this, __4)
      }), t && __privateSet(this, _c6, null), e && e.text && (__privateSet(this, __4, __privateMethod(this, _oa_instances, F_fn2).call(this, e.text)), __privateSet(this, _h11, Ii.toDateObject(e.date)), __privateSet(this, _o13, null)), (_a29 = __privateGet(this, _m5)) == null ? void 0 : _a29.remove(), __privateSet(this, _m5, null);
    }
    resetEdited() {
      var _a29;
      __privateGet(this, _v4) && ({ contentsObj: __privateWrapper(this, _o13)._, richText: __privateWrapper(this, __4)._ } = __privateGet(this, _v4), __privateSet(this, _v4, null), (_a29 = __privateGet(this, _m5)) == null ? void 0 : _a29.remove(), __privateSet(this, _m5, null), __privateSet(this, _c6, null));
    }
    remove() {
      var _a29, _b7, _c10;
      if ((_a29 = __privateGet(this, _g6)) == null ? void 0 : _a29.abort(), __privateSet(this, _g6, null), (_b7 = __privateGet(this, _m5)) == null ? void 0 : _b7.remove(), __privateSet(this, _m5, null), __privateSet(this, _T3, false), __privateSet(this, _f7, false), (_c10 = __privateGet(this, _p5)) == null ? void 0 : _c10.remove(), __privateSet(this, _p5, null), this.trigger) for (const t of this.trigger) t.classList.remove("popupTriggerArea");
    }
    forceHide() {
      __privateSet(this, _T3, this.isVisible), __privateGet(this, _T3) && (__privateGet(this, _n17).hidden = true);
    }
    maybeShow() {
      __privateGet(this, _t51) || (__privateMethod(this, _oa_instances, M_fn3).call(this), __privateGet(this, _T3) && (__privateGet(this, _m5) || __privateMethod(this, _oa_instances, L_fn2).call(this), __privateSet(this, _T3, false), __privateGet(this, _n17).hidden = false));
    }
    get isVisible() {
      return __privateGet(this, _t51) ? false : __privateGet(this, _n17).hidden === false;
    }
  }
  _t51 = new WeakMap();
  _e38 = new WeakMap();
  _s30 = new WeakMap();
  _i26 = new WeakMap();
  _a18 = new WeakMap();
  _r17 = new WeakMap();
  _n17 = new WeakMap();
  _o13 = new WeakMap();
  _h11 = new WeakMap();
  _l9 = new WeakMap();
  _u8 = new WeakMap();
  _d8 = new WeakMap();
  _f7 = new WeakMap();
  _m5 = new WeakMap();
  _g6 = new WeakMap();
  _c6 = new WeakMap();
  _p5 = new WeakMap();
  _b5 = new WeakMap();
  _A4 = new WeakMap();
  _y4 = new WeakMap();
  __4 = new WeakMap();
  _S4 = new WeakMap();
  _v4 = new WeakMap();
  _T3 = new WeakMap();
  _w3 = new WeakMap();
  _x3 = new WeakMap();
  _oa_instances = new WeakSet();
  M_fn3 = function() {
    var _a29;
    if (__privateGet(this, _g6)) return;
    __privateSet(this, _g6, new AbortController());
    const { signal: t } = __privateGet(this, _g6);
    for (const e of this.trigger) e.addEventListener("click", __privateGet(this, _a18), {
      signal: t
    }), e.addEventListener("pointerenter", __privateGet(this, _i26), {
      signal: t
    }), e.addEventListener("pointerleave", __privateGet(this, _s30), {
      signal: t
    }), e.classList.add("popupTriggerArea");
    for (const e of __privateGet(this, _l9)) (_a29 = e.container) == null ? void 0 : _a29.addEventListener("keydown", __privateGet(this, _e38), {
      signal: t
    });
  };
  P_fn3 = function() {
    const t = __privateGet(this, _l9).find((e) => e.hasCommentButton);
    t && __privateSet(this, _b5, t._normalizePoint(t.commentButtonPosition));
  };
  k_fn3 = function() {
    if (__privateGet(this, _w3).extraPopupElement && !__privateGet(this, _w3).editor) return;
    __privateGet(this, _p5) || this.renderCommentButton();
    const [t, e] = __privateGet(this, _b5), { style: i } = __privateGet(this, _p5);
    i.left = `calc(${t}%)`, i.top = `calc(${e}% - var(--comment-button-dim))`;
  };
  N_fn3 = function() {
    __privateGet(this, _w3).extraPopupElement || (__privateGet(this, _p5) || this.renderCommentButton(), __privateGet(this, _p5).style.backgroundColor = this.commentButtonColor || "");
  };
  D_get = function() {
    const t = __privateGet(this, __4), e = __privateGet(this, _o13);
    return (t == null ? void 0 : t.str) && (!(e == null ? void 0 : e.str) || e.str === t.str) && __privateGet(this, __4).html || null;
  };
  R_get = function() {
    var _a29, _b7, _c10;
    return ((_c10 = (_b7 = (_a29 = __privateGet(this, _oa_instances, D_get)) == null ? void 0 : _a29.attributes) == null ? void 0 : _b7.style) == null ? void 0 : _c10.fontSize) || 0;
  };
  O_get = function() {
    var _a29, _b7, _c10;
    return ((_c10 = (_b7 = (_a29 = __privateGet(this, _oa_instances, D_get)) == null ? void 0 : _a29.attributes) == null ? void 0 : _b7.style) == null ? void 0 : _c10.color) || null;
  };
  F_fn2 = function(t) {
    const e = [], i = {
      str: t,
      html: {
        name: "div",
        attributes: {
          dir: "auto"
        },
        children: [
          {
            name: "p",
            children: e
          }
        ]
      }
    }, s = {
      style: {
        color: __privateGet(this, _oa_instances, O_get),
        fontSize: __privateGet(this, _oa_instances, R_get) ? `calc(${__privateGet(this, _oa_instances, R_get)}px * var(--total-scale-factor))` : ""
      }
    };
    for (const n of t.split(`
`)) e.push({
      name: "span",
      value: n,
      attributes: s
    });
    return i;
  };
  z_fn2 = function(t) {
    t.altKey || t.shiftKey || t.ctrlKey || t.metaKey || (t.key === "Enter" || t.key === "Escape" && __privateGet(this, _f7)) && __privateMethod(this, _oa_instances, E_fn2).call(this);
  };
  C_fn2 = function() {
    if (__privateGet(this, _c6) !== null) return;
    const { page: { view: t }, viewport: { rawDims: { pageWidth: e, pageHeight: i, pageX: s, pageY: n } } } = __privateGet(this, _u8);
    let r = !!__privateGet(this, _d8), a = r ? __privateGet(this, _d8) : __privateGet(this, _y4);
    for (const b of __privateGet(this, _l9)) if (!a || R.intersect(b.data.rect, a) !== null) {
      a = b.data.rect, r = true;
      break;
    }
    const o = R.normalizeRect([
      a[0],
      t[3] - a[1] + t[1],
      a[2],
      t[3] - a[3] + t[1]
    ]), h = r ? a[2] - a[0] + 5 : 0, c = o[0] + h, f = o[1];
    __privateSet(this, _c6, [
      100 * (c - s) / e,
      100 * (f - n) / i
    ]);
    const { style: g } = __privateGet(this, _n17);
    g.left = `${__privateGet(this, _c6)[0]}%`, g.top = `${__privateGet(this, _c6)[1]}%`;
  };
  E_fn2 = function() {
    if (__privateGet(this, _t51)) {
      __privateGet(this, _t51).toggleCommentPopup(this, false);
      return;
    }
    __privateSet(this, _f7, !__privateGet(this, _f7)), __privateGet(this, _f7) ? (__privateMethod(this, _oa_instances, L_fn2).call(this), __privateGet(this, _n17).addEventListener("click", __privateGet(this, _a18)), __privateGet(this, _n17).addEventListener("keydown", __privateGet(this, _e38))) : (__privateMethod(this, _oa_instances, U_fn2).call(this), __privateGet(this, _n17).removeEventListener("click", __privateGet(this, _a18)), __privateGet(this, _n17).removeEventListener("keydown", __privateGet(this, _e38)));
  };
  L_fn2 = function() {
    __privateGet(this, _m5) || this.render(), this.isVisible ? __privateGet(this, _f7) && __privateGet(this, _n17).classList.add("focused") : (__privateMethod(this, _oa_instances, C_fn2).call(this), __privateGet(this, _n17).hidden = false, __privateGet(this, _n17).style.zIndex = parseInt(__privateGet(this, _n17).style.zIndex) + 1e3);
  };
  U_fn2 = function() {
    __privateGet(this, _n17).classList.remove("focused"), !(__privateGet(this, _f7) || !this.isVisible) && (__privateGet(this, _n17).hidden = true, __privateGet(this, _n17).style.zIndex = parseInt(__privateGet(this, _n17).style.zIndex) - 1e3);
  };
  class hn extends lt {
    constructor(t) {
      super(t, {
        isRenderable: true,
        ignoreBorder: true
      }), this.textContent = t.data.textContent, this.textPosition = t.data.textPosition, this.annotationEditorType = $.FREETEXT;
    }
    render() {
      if (this.container.classList.add("freeTextAnnotation"), this.textContent) {
        const t = this.contentElement = document.createElement("div");
        t.classList.add("annotationTextContent"), t.setAttribute("role", "comment");
        for (const e of this.textContent) {
          const i = document.createElement("span");
          i.textContent = e, t.append(i);
        }
        this.container.append(t);
      }
      return !this.data.popupRef && this.hasPopupData && (this.hasOwnCommentButton = true, this._createPopup()), this._editOnDoubleClick(), this.container;
    }
  }
  class la extends lt {
    constructor(t) {
      super(t, {
        isRenderable: true,
        ignoreBorder: true
      });
      __privateAdd(this, _t52, null);
    }
    render() {
      this.container.classList.add("lineAnnotation");
      const { data: t, width: e, height: i } = this, s = this.svgFactory.create(e, i, true), n = __privateSet(this, _t52, this.svgFactory.createElement("svg:line"));
      return n.setAttribute("x1", t.rect[2] - t.lineCoordinates[0]), n.setAttribute("y1", t.rect[3] - t.lineCoordinates[1]), n.setAttribute("x2", t.rect[2] - t.lineCoordinates[2]), n.setAttribute("y2", t.rect[3] - t.lineCoordinates[3]), n.setAttribute("stroke-width", t.borderStyle.width || 1), n.setAttribute("stroke", "transparent"), n.setAttribute("fill", "transparent"), s.append(n), this.container.append(s), !t.popupRef && this.hasPopupData && (this.hasOwnCommentButton = true, this._createPopup()), this.container;
    }
    getElementsToTriggerPopup() {
      return __privateGet(this, _t52);
    }
    addHighlightArea() {
      this.container.classList.add("highlightArea");
    }
  }
  _t52 = new WeakMap();
  class ha extends lt {
    constructor(t) {
      super(t, {
        isRenderable: true,
        ignoreBorder: true
      });
      __privateAdd(this, _t53, null);
    }
    render() {
      this.container.classList.add("squareAnnotation");
      const { data: t, width: e, height: i } = this, s = this.svgFactory.create(e, i, true), n = t.borderStyle.width, r = __privateSet(this, _t53, this.svgFactory.createElement("svg:rect"));
      return r.setAttribute("x", n / 2), r.setAttribute("y", n / 2), r.setAttribute("width", e - n), r.setAttribute("height", i - n), r.setAttribute("stroke-width", n || 1), r.setAttribute("stroke", "transparent"), r.setAttribute("fill", "transparent"), s.append(r), this.container.append(s), !t.popupRef && this.hasPopupData && (this.hasOwnCommentButton = true, this._createPopup()), this.container;
    }
    getElementsToTriggerPopup() {
      return __privateGet(this, _t53);
    }
    addHighlightArea() {
      this.container.classList.add("highlightArea");
    }
  }
  _t53 = new WeakMap();
  class ca extends lt {
    constructor(t) {
      super(t, {
        isRenderable: true,
        ignoreBorder: true
      });
      __privateAdd(this, _t54, null);
    }
    render() {
      this.container.classList.add("circleAnnotation");
      const { data: t, width: e, height: i } = this, s = this.svgFactory.create(e, i, true), n = t.borderStyle.width, r = __privateSet(this, _t54, this.svgFactory.createElement("svg:ellipse"));
      return r.setAttribute("cx", e / 2), r.setAttribute("cy", i / 2), r.setAttribute("rx", e / 2 - n / 2), r.setAttribute("ry", i / 2 - n / 2), r.setAttribute("stroke-width", n || 1), r.setAttribute("stroke", "transparent"), r.setAttribute("fill", "transparent"), s.append(r), this.container.append(s), !t.popupRef && this.hasPopupData && (this.hasOwnCommentButton = true, this._createPopup()), this.container;
    }
    getElementsToTriggerPopup() {
      return __privateGet(this, _t54);
    }
    addHighlightArea() {
      this.container.classList.add("highlightArea");
    }
  }
  _t54 = new WeakMap();
  class cn extends lt {
    constructor(t) {
      super(t, {
        isRenderable: true,
        ignoreBorder: true
      });
      __privateAdd(this, _t55, null);
      this.containerClassName = "polylineAnnotation", this.svgElementName = "svg:polyline";
    }
    render() {
      this.container.classList.add(this.containerClassName);
      const { data: { rect: t, vertices: e, borderStyle: i, popupRef: s }, width: n, height: r } = this;
      if (!e) return this.container;
      const a = this.svgFactory.create(n, r, true);
      let o = [];
      for (let h = 0, c = e.length; h < c; h += 2) {
        const f = e[h] - t[0], g = t[3] - e[h + 1];
        o.push(`${f},${g}`);
      }
      o = o.join(" ");
      const l = __privateSet(this, _t55, this.svgFactory.createElement(this.svgElementName));
      return l.setAttribute("points", o), l.setAttribute("stroke-width", i.width || 1), l.setAttribute("stroke", "transparent"), l.setAttribute("fill", "transparent"), a.append(l), this.container.append(a), !s && this.hasPopupData && (this.hasOwnCommentButton = true, this._createPopup()), this.container;
    }
    getElementsToTriggerPopup() {
      return __privateGet(this, _t55);
    }
    addHighlightArea() {
      this.container.classList.add("highlightArea");
    }
  }
  _t55 = new WeakMap();
  class da extends cn {
    constructor(t) {
      super(t), this.containerClassName = "polygonAnnotation", this.svgElementName = "svg:polygon";
    }
  }
  class ua extends lt {
    constructor(t) {
      super(t, {
        isRenderable: true,
        ignoreBorder: true
      });
    }
    render() {
      return this.container.classList.add("caretAnnotation"), !this.data.popupRef && this.hasPopupData && (this.hasOwnCommentButton = true, this._createPopup()), this.container;
    }
  }
  class Qi extends lt {
    constructor(t) {
      super(t, {
        isRenderable: true,
        ignoreBorder: true
      });
      __privateAdd(this, _Qi_instances);
      __privateAdd(this, _t56, null);
      __privateAdd(this, _e39, []);
      this.containerClassName = "inkAnnotation", this.svgElementName = "svg:polyline", this.annotationEditorType = this.data.it === "InkHighlight" ? $.HIGHLIGHT : $.INK;
    }
    render() {
      this.container.classList.add(this.containerClassName);
      const { data: { rect: t, rotation: e, inkLists: i, borderStyle: s, popupRef: n } } = this, { transform: r, width: a, height: o } = __privateMethod(this, _Qi_instances, s_fn8).call(this, e, t), l = this.svgFactory.create(a, o, true), h = __privateSet(this, _t56, this.svgFactory.createElement("svg:g"));
      l.append(h), h.setAttribute("stroke-width", s.width || 1), h.setAttribute("stroke-linecap", "round"), h.setAttribute("stroke-linejoin", "round"), h.setAttribute("stroke-miterlimit", 10), h.setAttribute("stroke", "transparent"), h.setAttribute("fill", "transparent"), h.setAttribute("transform", r);
      for (let c = 0, f = i.length; c < f; c++) {
        const g = this.svgFactory.createElement(this.svgElementName);
        __privateGet(this, _e39).push(g), g.setAttribute("points", i[c].join(",")), h.append(g);
      }
      return !n && this.hasPopupData && (this.hasOwnCommentButton = true, this._createPopup()), this.container.append(l), this._editOnDoubleClick(), this.container;
    }
    updateEdited(t) {
      super.updateEdited(t);
      const { thickness: e, points: i, rect: s } = t, n = __privateGet(this, _t56);
      if (e >= 0 && n.setAttribute("stroke-width", e || 1), i) for (let r = 0, a = __privateGet(this, _e39).length; r < a; r++) __privateGet(this, _e39)[r].setAttribute("points", i[r].join(","));
      if (s) {
        const { transform: r, width: a, height: o } = __privateMethod(this, _Qi_instances, s_fn8).call(this, this.data.rotation, s);
        n.parentElement.setAttribute("viewBox", `0 0 ${a} ${o}`), n.setAttribute("transform", r);
      }
    }
    getElementsToTriggerPopup() {
      return __privateGet(this, _e39);
    }
    addHighlightArea() {
      this.container.classList.add("highlightArea");
    }
  }
  _t56 = new WeakMap();
  _e39 = new WeakMap();
  _Qi_instances = new WeakSet();
  s_fn8 = function(t, e) {
    switch (t) {
      case 90:
        return {
          transform: `rotate(90) translate(${-e[0]},${e[1]}) scale(1,-1)`,
          width: e[3] - e[1],
          height: e[2] - e[0]
        };
      case 180:
        return {
          transform: `rotate(180) translate(${-e[2]},${e[1]}) scale(1,-1)`,
          width: e[2] - e[0],
          height: e[3] - e[1]
        };
      case 270:
        return {
          transform: `rotate(270) translate(${-e[2]},${e[3]}) scale(1,-1)`,
          width: e[3] - e[1],
          height: e[2] - e[0]
        };
      default:
        return {
          transform: `translate(${-e[0]},${e[3]}) scale(1,-1)`,
          width: e[2] - e[0],
          height: e[3] - e[1]
        };
    }
  };
  class dn extends lt {
    constructor(t) {
      super(t, {
        isRenderable: true,
        ignoreBorder: true,
        createQuadrilaterals: true
      }), this.annotationEditorType = $.HIGHLIGHT;
    }
    render() {
      const { data: { overlaidText: t, popupRef: e } } = this;
      if (!e && this.hasPopupData && (this.hasOwnCommentButton = true, this._createPopup()), this.container.classList.add("highlightAnnotation"), this._editOnDoubleClick(), t) {
        const i = document.createElement("mark");
        i.classList.add("overlaidText"), i.textContent = t, this.container.append(i);
      }
      return this.container;
    }
  }
  class fa extends lt {
    constructor(t) {
      super(t, {
        isRenderable: true,
        ignoreBorder: true,
        createQuadrilaterals: true
      });
    }
    render() {
      const { data: { overlaidText: t, popupRef: e } } = this;
      if (!e && this.hasPopupData && (this.hasOwnCommentButton = true, this._createPopup()), this.container.classList.add("underlineAnnotation"), t) {
        const i = document.createElement("u");
        i.classList.add("overlaidText"), i.textContent = t, this.container.append(i);
      }
      return this.container;
    }
  }
  class pa extends lt {
    constructor(t) {
      super(t, {
        isRenderable: true,
        ignoreBorder: true,
        createQuadrilaterals: true
      });
    }
    render() {
      const { data: { overlaidText: t, popupRef: e } } = this;
      if (!e && this.hasPopupData && (this.hasOwnCommentButton = true, this._createPopup()), this.container.classList.add("squigglyAnnotation"), t) {
        const i = document.createElement("u");
        i.classList.add("overlaidText"), i.textContent = t, this.container.append(i);
      }
      return this.container;
    }
  }
  class ga extends lt {
    constructor(t) {
      super(t, {
        isRenderable: true,
        ignoreBorder: true,
        createQuadrilaterals: true
      });
    }
    render() {
      const { data: { overlaidText: t, popupRef: e } } = this;
      if (!e && this.hasPopupData && (this.hasOwnCommentButton = true, this._createPopup()), this.container.classList.add("strikeoutAnnotation"), t) {
        const i = document.createElement("s");
        i.classList.add("overlaidText"), i.textContent = t, this.container.append(i);
      }
      return this.container;
    }
  }
  class un extends lt {
    constructor(t) {
      super(t, {
        isRenderable: true,
        ignoreBorder: true
      }), this.annotationEditorType = $.STAMP;
    }
    render() {
      return this.container.classList.add("stampAnnotation"), this.container.setAttribute("role", "img"), !this.data.popupRef && this.hasPopupData && (this.hasOwnCommentButton = true, this._createPopup()), this._editOnDoubleClick(), this.container;
    }
  }
  class ma extends lt {
    constructor(t) {
      var _a29;
      super(t, {
        isRenderable: true
      });
      __privateAdd(this, _ma_instances);
      __privateAdd(this, _t57, null);
      const { file: e } = this.data;
      this.filename = e.filename, this.content = e.content, (_a29 = this.linkService.eventBus) == null ? void 0 : _a29.dispatch("fileattachmentannotation", {
        source: this,
        ...e
      });
    }
    render() {
      this.container.classList.add("fileAttachmentAnnotation");
      const { container: t, data: e } = this;
      let i;
      e.hasAppearance || e.fillAlpha === 0 ? i = document.createElement("div") : (i = document.createElement("img"), i.src = `${this.imageResourcesPath}annotation-${/paperclip/i.test(e.name) ? "paperclip" : "pushpin"}.svg`, e.fillAlpha && e.fillAlpha < 1 && (i.style = `filter: opacity(${Math.round(e.fillAlpha * 100)}%);`)), i.addEventListener("dblclick", __privateMethod(this, _ma_instances, e_fn9).bind(this)), __privateSet(this, _t57, i);
      const { isMac: s } = mt.platform;
      return t.addEventListener("keydown", (n) => {
        n.key === "Enter" && (s ? n.metaKey : n.ctrlKey) && __privateMethod(this, _ma_instances, e_fn9).call(this);
      }), !e.popupRef && this.hasPopupData ? (this.hasOwnCommentButton = true, this._createPopup()) : i.classList.add("popupTriggerArea"), t.append(i), t;
    }
    getElementsToTriggerPopup() {
      return __privateGet(this, _t57);
    }
    addHighlightArea() {
      this.container.classList.add("highlightArea");
    }
  }
  _t57 = new WeakMap();
  _ma_instances = new WeakSet();
  e_fn9 = function() {
    var _a29;
    (_a29 = this.downloadManager) == null ? void 0 : _a29.openOrDownloadData(this.content, this.filename);
  };
  Zi = (_l10 = class {
    constructor({ div: t, accessibilityManager: e, annotationCanvasMap: i, annotationEditorUIManager: s, page: n, viewport: r, structTreeLayer: a, commentManager: o, linkService: l, annotationStorage: h }) {
      __privateAdd(this, _Zi_instances);
      __privateAdd(this, _t58, null);
      __privateAdd(this, _e40, null);
      __privateAdd(this, _s31, null);
      __privateAdd(this, _i27, /* @__PURE__ */ new Map());
      __privateAdd(this, _a19, null);
      __privateAdd(this, _r18, null);
      __privateAdd(this, _n18, []);
      __privateAdd(this, _o14, false);
      this.div = t, __privateSet(this, _t58, e), __privateSet(this, _e40, i), __privateSet(this, _a19, a || null), __privateSet(this, _r18, l || null), __privateSet(this, _s31, h || new Wi()), this.page = n, this.viewport = r, this.zIndex = 0, this._annotationEditorUIManager = s, this._commentManager = o || null;
    }
    hasEditableAnnotations() {
      return __privateGet(this, _i27).size > 0;
    }
    async render(t) {
      var _a29;
      const { annotations: e } = t, i = this.div;
      ee(i, this.viewport);
      const s = /* @__PURE__ */ new Map(), n = [], r = {
        data: null,
        layer: i,
        linkService: __privateGet(this, _r18),
        downloadManager: t.downloadManager,
        imageResourcesPath: t.imageResourcesPath || "",
        renderForms: t.renderForms !== false,
        svgFactory: new Qe(),
        annotationStorage: __privateGet(this, _s31),
        enableComment: t.enableComment === true,
        enableScripting: t.enableScripting === true,
        hasJSActions: t.hasJSActions,
        fieldObjects: t.fieldObjects,
        parent: this,
        elements: null
      };
      for (const a of e) {
        if (a.noHTML) continue;
        const o = a.annotationType === pt.POPUP;
        if (o) {
          const c = s.get(a.id);
          if (!c) continue;
          if (!this._commentManager) {
            n.push(a);
            continue;
          }
          r.elements = c;
        } else if (a.rect[2] === a.rect[0] || a.rect[3] === a.rect[1]) continue;
        r.data = a;
        const l = _i.create(r);
        if (!l.isRenderable) continue;
        o || (__privateGet(this, _n18).push(l), a.popupRef && s.getOrInsertComputed(a.popupRef, Us).push(l));
        const h = l.render();
        a.hidden && (h.style.visibility = "hidden"), l._isEditable && (__privateGet(this, _i27).set(l.data.id, l), (_a29 = this._annotationEditorUIManager) == null ? void 0 : _a29.renderAnnotationElement(l));
      }
      await __privateMethod(this, _Zi_instances, h_fn5).call(this);
      for (const a of n) {
        const o = r.elements = s.get(a.id);
        r.data = a;
        const l = _i.create(r);
        if (!l.isRenderable) continue;
        const h = l.render();
        l.contentElement.id = `${ce}${a.id}`, a.hidden && (h.style.visibility = "hidden"), o.at(-1).container.after(h);
      }
      __privateMethod(this, _Zi_instances, l_fn6).call(this);
    }
    async addLinkAnnotations(t) {
      const e = {
        data: null,
        layer: this.div,
        linkService: __privateGet(this, _r18),
        svgFactory: new Qe(),
        parent: this
      };
      for (const i of t) {
        i.borderStyle || (i.borderStyle = Zi._defaultBorderStyle), e.data = i;
        const s = _i.create(e);
        s.isRenderable && (s.render(), s.contentElement.id = `${ce}${i.id}`, __privateGet(this, _n18).push(s));
      }
      await __privateMethod(this, _Zi_instances, h_fn5).call(this);
    }
    update({ viewport: t }) {
      const e = this.div;
      this.viewport = t, ee(e, {
        rotation: t.rotation
      }), __privateMethod(this, _Zi_instances, l_fn6).call(this), e.hidden = false;
    }
    getEditableAnnotations() {
      return Array.from(__privateGet(this, _i27).values());
    }
    getEditableAnnotation(t) {
      return __privateGet(this, _i27).get(t);
    }
    addFakeAnnotation(t) {
      const { div: e } = this, { id: i, rotation: s } = t, n = new ta({
        data: {
          id: i,
          rect: t.getPDFRect(),
          rotation: s
        },
        editor: t,
        layer: e,
        parent: this,
        enableComment: !!this._commentManager,
        linkService: __privateGet(this, _r18),
        annotationStorage: __privateGet(this, _s31)
      });
      return n.render(), n.contentElement.id = `${ce}${i}`, n.createOrUpdatePopup(), __privateGet(this, _n18).push(n), n;
    }
    removeAnnotation(t) {
      var _a29;
      const e = __privateGet(this, _n18).findIndex((s) => s.data.id === t);
      if (e < 0) return;
      const [i] = __privateGet(this, _n18).splice(e, 1);
      (_a29 = __privateGet(this, _t58)) == null ? void 0 : _a29.removePointerInTextLayer(i.contentElement);
    }
    updateFakeAnnotations(t) {
      if (t.length !== 0) {
        for (const e of t) e.updateFakeAnnotationElement(this);
        __privateMethod(this, _Zi_instances, h_fn5).call(this);
      }
    }
    togglePointerEvents(t = false) {
      this.div.classList.toggle("disabled", !t);
    }
    static get _defaultBorderStyle() {
      return H(this, "_defaultBorderStyle", Object.freeze({
        width: 1,
        rawWidth: 1,
        style: oe.SOLID,
        dashArray: [
          3
        ],
        horizontalCornerRadius: 0,
        verticalCornerRadius: 0
      }));
    }
  }, _t58 = new WeakMap(), _e40 = new WeakMap(), _s31 = new WeakMap(), _i27 = new WeakMap(), _a19 = new WeakMap(), _r18 = new WeakMap(), _n18 = new WeakMap(), _o14 = new WeakMap(), _Zi_instances = new WeakSet(), h_fn5 = async function() {
    var _a29, _b7, _c10;
    if (__privateGet(this, _n18).length === 0) return;
    this.div.replaceChildren();
    const t = [];
    if (!__privateGet(this, _o14)) {
      __privateSet(this, _o14, true);
      for (const { contentElement: i, data: { id: s } } of __privateGet(this, _n18)) {
        const n = i.id = `${ce}${s}`;
        t.push((_a29 = __privateGet(this, _a19)) == null ? void 0 : _a29.getAriaAttributes(n).then((r) => {
          if (r) for (const [a, o] of r) i.setAttribute(a, o);
        }));
      }
    }
    __privateGet(this, _n18).sort(({ data: { rect: [i, s, n, r] } }, { data: { rect: [a, o, l, h] } }) => {
      if (i === n && s === r) return 1;
      if (a === l && o === h) return -1;
      const c = r, f = s, g = (s + r) / 2, b = h, m = o, w = (o + h) / 2;
      if (g >= b && w <= f) return -1;
      if (w >= c && g <= m) return 1;
      const A = (i + n) / 2, S = (a + l) / 2;
      return A - S;
    });
    const e = document.createDocumentFragment();
    for (const i of __privateGet(this, _n18)) e.append(i.container), this._commentManager ? (_c10 = ((_b7 = i.extraPopupElement) == null ? void 0 : _b7.popup) || i.popup) == null ? void 0 : _c10.renderCommentButton() : i.extraPopupElement && e.append(i.extraPopupElement.render());
    if (this.div.append(e), await Promise.all(t), __privateGet(this, _t58)) for (const i of __privateGet(this, _n18)) __privateGet(this, _t58).addPointerInTextLayer(i.contentElement, false);
  }, l_fn6 = function() {
    var _a29;
    if (!__privateGet(this, _e40)) return;
    const t = this.div;
    for (const [e, i] of __privateGet(this, _e40)) {
      const s = t.querySelector(`[data-annotation-id="${e}"]`);
      if (!s) continue;
      i.className = "annotationContent";
      const { firstChild: n } = s;
      n ? n.nodeName === "CANVAS" ? n.replaceWith(i) : n.classList.contains("annotationContent") ? n.after(i) : n.before(i) : s.append(i);
      const r = __privateGet(this, _i27).get(e);
      r && (r._hasNoCanvas ? ((_a29 = this._annotationEditorUIManager) == null ? void 0 : _a29.setMissingCanvas(e, s.id, i), r._hasNoCanvas = false) : r.canvas = i);
    }
    __privateGet(this, _e40).clear();
  }, _l10);
  const Xe = /\r\n?|\n/g;
  const _yt = class _yt extends U {
    constructor(t) {
      super({
        ...t,
        name: "freeTextEditor"
      });
      __privateAdd(this, _yt_instances);
      __privateAdd(this, _t59, "");
      __privateAdd(this, _e41, `${this.id}-editor`);
      __privateAdd(this, _s32, null);
      __privateAdd(this, _i28);
      __publicField(this, "_colorPicker", null);
      this.color = t.color || _yt._defaultColor || U._defaultLineColor, __privateSet(this, _i28, t.fontSize || _yt._defaultFontSize), this.annotationElementId || this._uiManager.a11yAlert("pdfjs-editor-freetext-added-alert"), this.canAddComment = false;
    }
    static get _keyboardManager() {
      const t = _yt.prototype, e = (n) => n.isEmpty(), i = Zt.TRANSLATE_SMALL, s = Zt.TRANSLATE_BIG;
      return H(this, "_keyboardManager", new Fe([
        [
          [
            "ctrl+s",
            "mac+meta+s",
            "ctrl+p",
            "mac+meta+p"
          ],
          t.commitOrRemove,
          {
            bubbles: true
          }
        ],
        [
          [
            "ctrl+Enter",
            "mac+meta+Enter",
            "Escape",
            "mac+Escape"
          ],
          t.commitOrRemove
        ],
        [
          [
            "ArrowLeft",
            "mac+ArrowLeft"
          ],
          t._translateEmpty,
          {
            args: [
              -i,
              0
            ],
            checker: e
          }
        ],
        [
          [
            "ctrl+ArrowLeft",
            "mac+shift+ArrowLeft"
          ],
          t._translateEmpty,
          {
            args: [
              -s,
              0
            ],
            checker: e
          }
        ],
        [
          [
            "ArrowRight",
            "mac+ArrowRight"
          ],
          t._translateEmpty,
          {
            args: [
              i,
              0
            ],
            checker: e
          }
        ],
        [
          [
            "ctrl+ArrowRight",
            "mac+shift+ArrowRight"
          ],
          t._translateEmpty,
          {
            args: [
              s,
              0
            ],
            checker: e
          }
        ],
        [
          [
            "ArrowUp",
            "mac+ArrowUp"
          ],
          t._translateEmpty,
          {
            args: [
              0,
              -i
            ],
            checker: e
          }
        ],
        [
          [
            "ctrl+ArrowUp",
            "mac+shift+ArrowUp"
          ],
          t._translateEmpty,
          {
            args: [
              0,
              -s
            ],
            checker: e
          }
        ],
        [
          [
            "ArrowDown",
            "mac+ArrowDown"
          ],
          t._translateEmpty,
          {
            args: [
              0,
              i
            ],
            checker: e
          }
        ],
        [
          [
            "ctrl+ArrowDown",
            "mac+shift+ArrowDown"
          ],
          t._translateEmpty,
          {
            args: [
              0,
              s
            ],
            checker: e
          }
        ]
      ]));
    }
    static initialize(t, e) {
      U.initialize(t, e);
      const i = getComputedStyle(document.documentElement);
      this._internalPadding = parseFloat(i.getPropertyValue("--freetext-padding"));
    }
    static updateDefaultParams(t, e) {
      switch (t) {
        case X.FREETEXT_SIZE:
          _yt._defaultFontSize = e;
          break;
        case X.FREETEXT_COLOR:
          _yt._defaultColor = e;
          break;
      }
    }
    updateParams(t, e) {
      switch (t) {
        case X.FREETEXT_SIZE:
          __privateMethod(this, _yt_instances, a_fn6).call(this, e);
          break;
        case X.FREETEXT_COLOR:
          __privateMethod(this, _yt_instances, r_fn2).call(this, e);
          break;
      }
    }
    static get defaultPropertiesToUpdate() {
      return [
        [
          X.FREETEXT_SIZE,
          _yt._defaultFontSize
        ],
        [
          X.FREETEXT_COLOR,
          _yt._defaultColor || U._defaultLineColor
        ]
      ];
    }
    get propertiesToUpdate() {
      return [
        [
          X.FREETEXT_SIZE,
          __privateGet(this, _i28)
        ],
        [
          X.FREETEXT_COLOR,
          this.color
        ]
      ];
    }
    get toolbarButtons() {
      return this._colorPicker || (this._colorPicker = new Ie(this)), [
        [
          "colorPicker",
          this._colorPicker
        ]
      ];
    }
    get colorType() {
      return X.FREETEXT_COLOR;
    }
    onUpdatedColor() {
      var _a29;
      this.editorDiv.style.color = this.color, (_a29 = this._colorPicker) == null ? void 0 : _a29.update(this.color), super.onUpdatedColor();
    }
    _translateEmpty(t, e) {
      this._uiManager.translateSelectedEditors(t, e, true);
    }
    getInitialTranslation() {
      const t = this.parentScale;
      return [
        -_yt._internalPadding * t,
        -(_yt._internalPadding + __privateGet(this, _i28)) * t
      ];
    }
    rebuild() {
      this.parent && (super.rebuild(), this.div !== null && (this.isAttachedToDOM || this.parent.add(this)));
    }
    enableEditMode() {
      if (!super.enableEditMode()) return false;
      this.overlayDiv.classList.remove("enabled"), this.editorDiv.contentEditable = true, this._isDraggable = false, this.div.removeAttribute("aria-activedescendant"), __privateSet(this, _s32, new AbortController());
      const t = this._uiManager.combinedSignal(__privateGet(this, _s32));
      return this.editorDiv.addEventListener("keydown", this.editorDivKeydown.bind(this), {
        signal: t
      }), this.editorDiv.addEventListener("focus", this.editorDivFocus.bind(this), {
        signal: t
      }), this.editorDiv.addEventListener("blur", this.editorDivBlur.bind(this), {
        signal: t
      }), this.editorDiv.addEventListener("input", this.editorDivInput.bind(this), {
        signal: t
      }), this.editorDiv.addEventListener("paste", this.editorDivPaste.bind(this), {
        signal: t
      }), true;
    }
    disableEditMode() {
      var _a29;
      return super.disableEditMode() ? (this.overlayDiv.classList.add("enabled"), this.editorDiv.contentEditable = false, this.div.setAttribute("aria-activedescendant", __privateGet(this, _e41)), this._isDraggable = true, (_a29 = __privateGet(this, _s32)) == null ? void 0 : _a29.abort(), __privateSet(this, _s32, null), this.div.focus({
        preventScroll: true
      }), this.isEditing = false, this.parent.div.classList.add("freetextEditing"), true) : false;
    }
    focusin(t) {
      this._focusEventsAllowed && (super.focusin(t), t.target !== this.editorDiv && this.editorDiv.focus());
    }
    onceAdded(t) {
      var _a29;
      this.width || (this.enableEditMode(), t && this.editorDiv.focus(), ((_a29 = this._initialOptions) == null ? void 0 : _a29.isCentered) && this.center(), this._initialOptions = null);
    }
    isEmpty() {
      return !this.editorDiv || this.editorDiv.innerText.trim() === "";
    }
    remove() {
      this.isEditing = false, this.parent && (this.parent.setEditingState(true), this.parent.div.classList.add("freetextEditing")), super.remove();
    }
    commit() {
      if (!this.isInEditMode()) return;
      super.commit(), this.disableEditMode();
      const t = __privateGet(this, _t59), e = __privateSet(this, _t59, __privateMethod(this, _yt_instances, n_fn).call(this).trimEnd());
      if (t === e) return;
      const i = (s) => {
        if (__privateSet(this, _t59, s), !s) {
          this.remove();
          return;
        }
        __privateMethod(this, _yt_instances, l_fn7).call(this), this._uiManager.rebuild(this), __privateMethod(this, _yt_instances, o_fn3).call(this);
      };
      this.addCommands({
        cmd: () => {
          i(e);
        },
        undo: () => {
          i(t);
        },
        mustExec: false
      }), __privateMethod(this, _yt_instances, o_fn3).call(this);
    }
    shouldGetKeyboardEvents() {
      return this.isInEditMode();
    }
    enterInEditMode() {
      this.enableEditMode(), this.editorDiv.focus();
    }
    keydown(t) {
      t.target === this.div && t.key === "Enter" && (this.enterInEditMode(), t.preventDefault());
    }
    editorDivKeydown(t) {
      _yt._keyboardManager.exec(this, t);
    }
    editorDivFocus(t) {
      this.isEditing = true;
    }
    editorDivBlur(t) {
      this.isEditing = false;
    }
    editorDivInput(t) {
      this.parent.div.classList.toggle("freetextEditing", this.isEmpty());
    }
    disableEditing() {
      this.editorDiv.setAttribute("role", "comment"), this.editorDiv.removeAttribute("aria-multiline");
    }
    enableEditing() {
      this.editorDiv.setAttribute("role", "textbox"), this.editorDiv.setAttribute("aria-multiline", true);
    }
    get canChangeContent() {
      return true;
    }
    render() {
      if (this.div) return this.div;
      let t, e;
      (this._isCopy || this.annotationElementId) && (t = this.x, e = this.y), super.render(), this.editorDiv = document.createElement("div"), this.editorDiv.className = "internal", this.editorDiv.setAttribute("id", __privateGet(this, _e41)), this.editorDiv.setAttribute("data-l10n-id", "pdfjs-free-text2"), this.editorDiv.setAttribute("data-l10n-attrs", "default-content"), this.enableEditing(), this.editorDiv.contentEditable = true;
      const { style: i } = this.editorDiv;
      if (i.fontSize = `calc(${__privateGet(this, _i28)}px * var(--total-scale-factor))`, i.color = this.color, this.div.append(this.editorDiv), this.overlayDiv = document.createElement("div"), this.overlayDiv.classList.add("overlay", "enabled"), this.div.append(this.overlayDiv), this._isCopy || this.annotationElementId) {
        const [s, n] = this.parentDimensions;
        if (this.annotationElementId) {
          const { position: r } = this._initialData;
          let [a, o] = this.getInitialTranslation();
          [a, o] = this.pageTranslationToScreen(a, o);
          const [l, h] = this.pageDimensions, [c, f] = this.pageTranslation;
          let g, b;
          switch (this.rotation) {
            case 0:
              g = t + (r[0] - c) / l, b = e + this.height - (r[1] - f) / h;
              break;
            case 90:
              g = t + (r[0] - c) / l, b = e - (r[1] - f) / h, [a, o] = [
                o,
                -a
              ];
              break;
            case 180:
              g = t - this.width + (r[0] - c) / l, b = e - (r[1] - f) / h, [a, o] = [
                -a,
                -o
              ];
              break;
            case 270:
              g = t + (r[0] - c - this.height * h) / l, b = e + (r[1] - f - this.width * l) / h, [a, o] = [
                -o,
                a
              ];
              break;
          }
          this.setAt(g * s, b * n, a, o);
        } else this._moveAfterPaste(t, e);
        __privateMethod(this, _yt_instances, l_fn7).call(this), this._isDraggable = true, this.editorDiv.contentEditable = false;
      } else this._isDraggable = false, this.editorDiv.contentEditable = true;
      return this.div;
    }
    editorDivPaste(t) {
      var _a29, _b7, _c10;
      const e = t.clipboardData || window.clipboardData, { types: i } = e;
      if (i.length === 1 && i[0] === "text/plain") return;
      t.preventDefault();
      const s = __privateMethod(_a29 = _yt, _yt_static, d_fn5).call(_a29, e.getData("text") || "").replaceAll(Xe, `
`);
      if (!s) return;
      const n = window.getSelection();
      if (!n.rangeCount) return;
      this.editorDiv.normalize(), n.deleteFromDocument();
      const r = n.getRangeAt(0);
      if (!s.includes(`
`)) {
        r.insertNode(document.createTextNode(s)), this.editorDiv.normalize(), n.collapseToStart();
        return;
      }
      const { startContainer: a, startOffset: o } = r, l = [], h = [];
      if (a.nodeType === Node.TEXT_NODE) {
        const g = a.parentElement;
        if (h.push(a.nodeValue.slice(o).replaceAll(Xe, "")), g !== this.editorDiv) {
          let b = l;
          for (const m of this.editorDiv.childNodes) {
            if (m === g) {
              b = h;
              continue;
            }
            b.push(__privateMethod(_b7 = _yt, _yt_static, h_fn6).call(_b7, m));
          }
        }
        l.push(a.nodeValue.slice(0, o).replaceAll(Xe, ""));
      } else if (a === this.editorDiv) {
        let g = l, b = 0;
        for (const m of this.editorDiv.childNodes) b++ === o && (g = h), g.push(__privateMethod(_c10 = _yt, _yt_static, h_fn6).call(_c10, m));
      }
      __privateSet(this, _t59, `${l.join(`
`)}${s}${h.join(`
`)}`), __privateMethod(this, _yt_instances, l_fn7).call(this);
      const c = new Range();
      let f = Math.sumPrecise(l.map((g) => g.length));
      for (const { firstChild: g } of this.editorDiv.childNodes) if (g.nodeType === Node.TEXT_NODE) {
        const b = g.nodeValue.length;
        if (f <= b) {
          c.setStart(g, f), c.setEnd(g, f);
          break;
        }
        f -= b;
      }
      n.removeAllRanges(), n.addRange(c);
    }
    get contentDiv() {
      return this.editorDiv;
    }
    getPDFRect() {
      const t = _yt._internalPadding * this.parentScale;
      return this.getRect(t, t);
    }
    static async deserialize(t, e, i) {
      var _a29;
      let s = null;
      if (t instanceof hn) {
        const { data: { defaultAppearanceData: { fontSize: r, fontColor: a }, rect: o, rotation: l, id: h, popupRef: c, richText: f, contentsObj: g, creationDate: b, modificationDate: m }, textContent: w, textPosition: A, parent: { page: { pageNumber: S } } } = t;
        if (!w || w.length === 0) return null;
        s = t = {
          annotationType: $.FREETEXT,
          color: Array.from(a),
          fontSize: r,
          value: w.join(`
`),
          position: A,
          pageIndex: S - 1,
          rect: o.slice(0),
          rotation: l,
          annotationElementId: h,
          id: h,
          deleted: false,
          popupRef: c,
          comment: (g == null ? void 0 : g.str) || null,
          richText: f,
          creationDate: b,
          modificationDate: m
        };
      }
      const n = await super.deserialize(t, e, i);
      return __privateSet(n, _i28, t.fontSize), n.color = R.makeHexColor(...t.color), __privateSet(n, _t59, __privateMethod(_a29 = _yt, _yt_static, d_fn5).call(_a29, t.value)), n._initialData = s, t.comment && n.setCommentData(t), n;
    }
    serialize(t = false) {
      if (this.isEmpty()) return null;
      if (this.deleted) return this.serializeDeleted();
      const e = U._colorManager.convert(this.isAttachedToDOM ? getComputedStyle(this.editorDiv).color : this.color), i = Object.assign(super.serialize(t), {
        color: e,
        fontSize: __privateGet(this, _i28),
        value: __privateMethod(this, _yt_instances, u_fn8).call(this)
      });
      return this.addComment(i), t ? (i.isCopy = true, i) : this.annotationElementId && !__privateMethod(this, _yt_instances, f_fn5).call(this, i) ? null : (i.id = this.annotationElementId, i);
    }
    renderAnnotationElement(t) {
      const e = super.renderAnnotationElement(t);
      if (!e) return null;
      const { style: i } = e;
      i.fontSize = `calc(${__privateGet(this, _i28)}px * var(--total-scale-factor))`, i.color = this.color, e.replaceChildren();
      for (const s of __privateGet(this, _t59).split(`
`)) {
        const n = document.createElement("div");
        n.append(s ? document.createTextNode(s) : document.createElement("br")), e.append(n);
      }
      return t.updateEdited({
        rect: this.getPDFRect(),
        popup: this._uiManager.hasCommentManager() || this.hasEditedComment ? this.comment : {
          text: __privateGet(this, _t59)
        }
      }), e;
    }
    resetAnnotationElement(t) {
      super.resetAnnotationElement(t), t.resetEdited();
    }
  };
  _t59 = new WeakMap();
  _e41 = new WeakMap();
  _s32 = new WeakMap();
  _i28 = new WeakMap();
  _yt_instances = new WeakSet();
  a_fn6 = function(t) {
    const e = (s) => {
      this.editorDiv.style.fontSize = `calc(${s}px * var(--total-scale-factor))`, this.translate(0, -(s - __privateGet(this, _i28)) * this.parentScale), __privateSet(this, _i28, s), __privateMethod(this, _yt_instances, o_fn3).call(this);
    }, i = __privateGet(this, _i28);
    this.addCommands({
      cmd: e.bind(this, t),
      undo: e.bind(this, i),
      post: this._uiManager.updateUI.bind(this._uiManager, this),
      mustExec: true,
      type: X.FREETEXT_SIZE,
      overwriteIfSameType: true,
      keepUndo: true
    });
  };
  r_fn2 = function(t) {
    const e = (s) => {
      this.color = s, this.onUpdatedColor();
    }, i = this.color;
    this.addCommands({
      cmd: e.bind(this, t),
      undo: e.bind(this, i),
      post: this._uiManager.updateUI.bind(this._uiManager, this),
      mustExec: true,
      type: X.FREETEXT_COLOR,
      overwriteIfSameType: true,
      keepUndo: true
    });
  };
  n_fn = function() {
    var _a29;
    const t = [];
    this.editorDiv.normalize();
    let e = null;
    for (const i of this.editorDiv.childNodes) (e == null ? void 0 : e.nodeType) === Node.TEXT_NODE && i.nodeName === "BR" || (t.push(__privateMethod(_a29 = _yt, _yt_static, h_fn6).call(_a29, i)), e = i);
    return t.join(`
`);
  };
  o_fn3 = function() {
    const [t, e] = this.parentDimensions;
    let i;
    if (this.isAttachedToDOM) i = this.div.getBoundingClientRect();
    else {
      const { currentLayer: s, div: n } = this, r = n.style.display, a = n.classList.contains("hidden");
      n.classList.remove("hidden"), n.style.display = "hidden", s.div.append(this.div), i = n.getBoundingClientRect(), n.remove(), n.style.display = r, n.classList.toggle("hidden", a);
    }
    this.rotation % 180 === this.parentRotation % 180 ? (this.width = i.width / t, this.height = i.height / e) : (this.width = i.height / t, this.height = i.width / e), this.fixAndSetPosition();
  };
  _yt_static = new WeakSet();
  h_fn6 = function(t) {
    return (t.nodeType === Node.TEXT_NODE ? t.nodeValue : t.innerText).replaceAll(Xe, "");
  };
  l_fn7 = function() {
    if (this.editorDiv.replaceChildren(), !!__privateGet(this, _t59)) for (const t of __privateGet(this, _t59).split(`
`)) {
      const e = document.createElement("div");
      e.append(t ? document.createTextNode(t) : document.createElement("br")), this.editorDiv.append(e);
    }
  };
  u_fn8 = function() {
    return __privateGet(this, _t59).replaceAll("\xA0", " ");
  };
  d_fn5 = function(t) {
    return t.replaceAll(" ", "\xA0");
  };
  f_fn5 = function(t) {
    const { value: e, fontSize: i, color: s, pageIndex: n } = this._initialData;
    return this.hasEditedComment || this._hasBeenMoved || t.value !== e || t.fontSize !== i || t.color.some((r, a) => r !== s[a]) || t.pageIndex !== n;
  };
  __privateAdd(_yt, _yt_static);
  __publicField(_yt, "_freeTextDefaultContent", "");
  __publicField(_yt, "_internalPadding", 0);
  __publicField(_yt, "_defaultColor", null);
  __publicField(_yt, "_defaultFontSize", 10);
  __publicField(_yt, "_type", "freetext");
  __publicField(_yt, "_editorType", $.FREETEXT);
  let yt = _yt;
  class F {
    toSVGPath() {
      Z("Abstract method `toSVGPath` must be implemented.");
    }
    get box() {
      Z("Abstract getter `box` must be implemented.");
    }
    serialize(t, e) {
      Z("Abstract method `serialize` must be implemented.");
    }
    static _rescale(t, e, i, s, n, r) {
      r || (r = new Float32Array(t.length));
      for (let a = 0, o = t.length; a < o; a += 2) r[a] = e + t[a] * s, r[a + 1] = i + t[a + 1] * n;
      return r;
    }
    static _rescaleAndSwap(t, e, i, s, n, r) {
      r || (r = new Float32Array(t.length));
      for (let a = 0, o = t.length; a < o; a += 2) r[a] = e + t[a + 1] * s, r[a + 1] = i + t[a] * n;
      return r;
    }
    static _translate(t, e, i, s) {
      s || (s = new Float32Array(t.length));
      for (let n = 0, r = t.length; n < r; n += 2) s[n] = e + t[n], s[n + 1] = i + t[n + 1];
      return s;
    }
    static svgRound(t) {
      return Math.round(t * 1e4);
    }
    static _normalizePoint(t, e, i, s, n) {
      switch (n) {
        case 90:
          return [
            1 - e / i,
            t / s
          ];
        case 180:
          return [
            1 - t / i,
            1 - e / s
          ];
        case 270:
          return [
            e / i,
            1 - t / s
          ];
        default:
          return [
            t / i,
            e / s
          ];
      }
    }
    static _normalizePagePoint(t, e, i) {
      switch (i) {
        case 90:
          return [
            1 - e,
            t
          ];
        case 180:
          return [
            1 - t,
            1 - e
          ];
        case 270:
          return [
            e,
            1 - t
          ];
        default:
          return [
            t,
            e
          ];
      }
    }
    static createBezierPoints(t, e, i, s, n, r) {
      return [
        (t + 5 * i) / 6,
        (e + 5 * s) / 6,
        (5 * i + n) / 6,
        (5 * s + r) / 6,
        (i + n) / 2,
        (s + r) / 2
      ];
    }
  }
  __publicField(F, "PRECISION", 1e-4);
  const _te = class _te {
    constructor({ x: t, y: e }, i, s, n, r, a = 0) {
      __privateAdd(this, _te_instances);
      __privateAdd(this, _t60);
      __privateAdd(this, _e42, []);
      __privateAdd(this, _s33);
      __privateAdd(this, _i29);
      __privateAdd(this, _a20, []);
      __privateAdd(this, _r19, new Float32Array(18));
      __privateAdd(this, _n19);
      __privateAdd(this, _o15);
      __privateAdd(this, _h12);
      __privateAdd(this, _l11);
      __privateAdd(this, _u9);
      __privateAdd(this, _d9);
      __privateAdd(this, _f8, []);
      __privateSet(this, _t60, i), __privateSet(this, _d9, n * s), __privateSet(this, _i29, r), __privateGet(this, _r19).set([
        NaN,
        NaN,
        NaN,
        NaN,
        t,
        e
      ], 6), __privateSet(this, _s33, a), __privateSet(this, _l11, __privateGet(_te, _m6) * s), __privateSet(this, _h12, __privateGet(_te, _c7) * s), __privateSet(this, _u9, s), __privateGet(this, _f8).push(t, e);
    }
    isEmpty() {
      return isNaN(__privateGet(this, _r19)[8]);
    }
    add({ x: t, y: e }) {
      var _a29;
      __privateSet(this, _n19, t), __privateSet(this, _o15, e);
      const [i, s, n, r] = __privateGet(this, _t60);
      let [a, o, l, h] = __privateGet(this, _r19).subarray(8, 12);
      const c = t - l, f = e - h, g = Math.hypot(c, f);
      if (g < __privateGet(this, _h12)) return false;
      const b = g - __privateGet(this, _l11), m = b / g, w = m * c, A = m * f;
      let S = a, E = o;
      a = l, o = h, l += w, h += A, (_a29 = __privateGet(this, _f8)) == null ? void 0 : _a29.push(t, e);
      const C = -A / b, x = w / b, T = C * __privateGet(this, _d9), k = x * __privateGet(this, _d9);
      return __privateGet(this, _r19).set(__privateGet(this, _r19).subarray(2, 8), 0), __privateGet(this, _r19).set([
        l + T,
        h + k
      ], 4), __privateGet(this, _r19).set(__privateGet(this, _r19).subarray(14, 18), 12), __privateGet(this, _r19).set([
        l - T,
        h - k
      ], 16), isNaN(__privateGet(this, _r19)[6]) ? (__privateGet(this, _a20).length === 0 && (__privateGet(this, _r19).set([
        a + T,
        o + k
      ], 2), __privateGet(this, _a20).push(NaN, NaN, NaN, NaN, (a + T - i) / n, (o + k - s) / r), __privateGet(this, _r19).set([
        a - T,
        o - k
      ], 14), __privateGet(this, _e42).push(NaN, NaN, NaN, NaN, (a - T - i) / n, (o - k - s) / r)), __privateGet(this, _r19).set([
        S,
        E,
        a,
        o,
        l,
        h
      ], 6), !this.isEmpty()) : (__privateGet(this, _r19).set([
        S,
        E,
        a,
        o,
        l,
        h
      ], 6), Math.abs(Math.atan2(E - o, S - a) - Math.atan2(A, w)) < Math.PI / 2 ? ([a, o, l, h] = __privateGet(this, _r19).subarray(2, 6), __privateGet(this, _a20).push(NaN, NaN, NaN, NaN, ((a + l) / 2 - i) / n, ((o + h) / 2 - s) / r), [a, o, S, E] = __privateGet(this, _r19).subarray(14, 18), __privateGet(this, _e42).push(NaN, NaN, NaN, NaN, ((S + a) / 2 - i) / n, ((E + o) / 2 - s) / r), true) : ([S, E, a, o, l, h] = __privateGet(this, _r19).subarray(0, 6), __privateGet(this, _a20).push(((S + 5 * a) / 6 - i) / n, ((E + 5 * o) / 6 - s) / r, ((5 * a + l) / 6 - i) / n, ((5 * o + h) / 6 - s) / r, ((a + l) / 2 - i) / n, ((o + h) / 2 - s) / r), [l, h, a, o, S, E] = __privateGet(this, _r19).subarray(12, 18), __privateGet(this, _e42).push(((S + 5 * a) / 6 - i) / n, ((E + 5 * o) / 6 - s) / r, ((5 * a + l) / 6 - i) / n, ((5 * o + h) / 6 - s) / r, ((a + l) / 2 - i) / n, ((o + h) / 2 - s) / r), true));
    }
    toSVGPath() {
      if (this.isEmpty()) return "";
      const t = __privateGet(this, _a20), e = __privateGet(this, _e42);
      if (isNaN(__privateGet(this, _r19)[6]) && !this.isEmpty()) return __privateMethod(this, _te_instances, b_fn3).call(this);
      const i = [];
      i.push(`M${t[4]} ${t[5]}`);
      for (let s = 6; s < t.length; s += 6) isNaN(t[s]) ? i.push(`L${t[s + 4]} ${t[s + 5]}`) : i.push(`C${t[s]} ${t[s + 1]} ${t[s + 2]} ${t[s + 3]} ${t[s + 4]} ${t[s + 5]}`);
      __privateMethod(this, _te_instances, y_fn).call(this, i);
      for (let s = e.length - 6; s >= 6; s -= 6) isNaN(e[s]) ? i.push(`L${e[s + 4]} ${e[s + 5]}`) : i.push(`C${e[s]} ${e[s + 1]} ${e[s + 2]} ${e[s + 3]} ${e[s + 4]} ${e[s + 5]}`);
      return __privateMethod(this, _te_instances, A_fn2).call(this, i), i.join(" ");
    }
    newFreeDrawOutline(t, e, i, s, n, r) {
      return new fn(t, e, i, s, n, r);
    }
    getOutlines() {
      var _a29;
      const t = __privateGet(this, _a20), e = __privateGet(this, _e42), i = __privateGet(this, _r19), [s, n, r, a] = __privateGet(this, _t60), o = new Float32Array((((_a29 = __privateGet(this, _f8)) == null ? void 0 : _a29.length) ?? 0) + 2);
      for (let c = 0, f = o.length - 2; c < f; c += 2) o[c] = (__privateGet(this, _f8)[c] - s) / r, o[c + 1] = (__privateGet(this, _f8)[c + 1] - n) / a;
      if (o[o.length - 2] = (__privateGet(this, _n19) - s) / r, o[o.length - 1] = (__privateGet(this, _o15) - n) / a, isNaN(i[6]) && !this.isEmpty()) return __privateMethod(this, _te_instances, __fn).call(this, o);
      const l = new Float32Array(__privateGet(this, _a20).length + 24 + __privateGet(this, _e42).length);
      let h = t.length;
      for (let c = 0; c < h; c += 2) {
        if (isNaN(t[c])) {
          l[c] = l[c + 1] = NaN;
          continue;
        }
        l[c] = t[c], l[c + 1] = t[c + 1];
      }
      h = __privateMethod(this, _te_instances, v_fn).call(this, l, h);
      for (let c = e.length - 6; c >= 6; c -= 6) for (let f = 0; f < 6; f += 2) {
        if (isNaN(e[c + f])) {
          l[h] = l[h + 1] = NaN, h += 2;
          continue;
        }
        l[h] = e[c + f], l[h + 1] = e[c + f + 1], h += 2;
      }
      return __privateMethod(this, _te_instances, S_fn).call(this, l, h), this.newFreeDrawOutline(l, o, __privateGet(this, _t60), __privateGet(this, _u9), __privateGet(this, _s33), __privateGet(this, _i29));
    }
  };
  _t60 = new WeakMap();
  _e42 = new WeakMap();
  _s33 = new WeakMap();
  _i29 = new WeakMap();
  _a20 = new WeakMap();
  _r19 = new WeakMap();
  _n19 = new WeakMap();
  _o15 = new WeakMap();
  _h12 = new WeakMap();
  _l11 = new WeakMap();
  _u9 = new WeakMap();
  _d9 = new WeakMap();
  _f8 = new WeakMap();
  _m6 = new WeakMap();
  _g7 = new WeakMap();
  _c7 = new WeakMap();
  _te_instances = new WeakSet();
  p_fn2 = function() {
    const t = __privateGet(this, _r19).subarray(4, 6), e = __privateGet(this, _r19).subarray(16, 18), [i, s, n, r] = __privateGet(this, _t60);
    return [
      (__privateGet(this, _n19) + (t[0] - e[0]) / 2 - i) / n,
      (__privateGet(this, _o15) + (t[1] - e[1]) / 2 - s) / r,
      (__privateGet(this, _n19) + (e[0] - t[0]) / 2 - i) / n,
      (__privateGet(this, _o15) + (e[1] - t[1]) / 2 - s) / r
    ];
  };
  b_fn3 = function() {
    const [t, e, i, s] = __privateGet(this, _t60), [n, r, a, o] = __privateMethod(this, _te_instances, p_fn2).call(this);
    return `M${(__privateGet(this, _r19)[2] - t) / i} ${(__privateGet(this, _r19)[3] - e) / s} L${(__privateGet(this, _r19)[4] - t) / i} ${(__privateGet(this, _r19)[5] - e) / s} L${n} ${r} L${a} ${o} L${(__privateGet(this, _r19)[16] - t) / i} ${(__privateGet(this, _r19)[17] - e) / s} L${(__privateGet(this, _r19)[14] - t) / i} ${(__privateGet(this, _r19)[15] - e) / s} Z`;
  };
  A_fn2 = function(t) {
    const e = __privateGet(this, _e42);
    t.push(`L${e[4]} ${e[5]} Z`);
  };
  y_fn = function(t) {
    const [e, i, s, n] = __privateGet(this, _t60), r = __privateGet(this, _r19).subarray(4, 6), a = __privateGet(this, _r19).subarray(16, 18), [o, l, h, c] = __privateMethod(this, _te_instances, p_fn2).call(this);
    t.push(`L${(r[0] - e) / s} ${(r[1] - i) / n} L${o} ${l} L${h} ${c} L${(a[0] - e) / s} ${(a[1] - i) / n}`);
  };
  __fn = function(t) {
    const e = __privateGet(this, _r19), [i, s, n, r] = __privateGet(this, _t60), [a, o, l, h] = __privateMethod(this, _te_instances, p_fn2).call(this), c = new Float32Array(36);
    return c.set([
      NaN,
      NaN,
      NaN,
      NaN,
      (e[2] - i) / n,
      (e[3] - s) / r,
      NaN,
      NaN,
      NaN,
      NaN,
      (e[4] - i) / n,
      (e[5] - s) / r,
      NaN,
      NaN,
      NaN,
      NaN,
      a,
      o,
      NaN,
      NaN,
      NaN,
      NaN,
      l,
      h,
      NaN,
      NaN,
      NaN,
      NaN,
      (e[16] - i) / n,
      (e[17] - s) / r,
      NaN,
      NaN,
      NaN,
      NaN,
      (e[14] - i) / n,
      (e[15] - s) / r
    ], 0), this.newFreeDrawOutline(c, t, __privateGet(this, _t60), __privateGet(this, _u9), __privateGet(this, _s33), __privateGet(this, _i29));
  };
  S_fn = function(t, e) {
    const i = __privateGet(this, _e42);
    return t.set([
      NaN,
      NaN,
      NaN,
      NaN,
      i[4],
      i[5]
    ], e), e += 6;
  };
  v_fn = function(t, e) {
    const i = __privateGet(this, _r19).subarray(4, 6), s = __privateGet(this, _r19).subarray(16, 18), [n, r, a, o] = __privateGet(this, _t60), [l, h, c, f] = __privateMethod(this, _te_instances, p_fn2).call(this);
    return t.set([
      NaN,
      NaN,
      NaN,
      NaN,
      (i[0] - n) / a,
      (i[1] - r) / o,
      NaN,
      NaN,
      NaN,
      NaN,
      l,
      h,
      NaN,
      NaN,
      NaN,
      NaN,
      c,
      f,
      NaN,
      NaN,
      NaN,
      NaN,
      (s[0] - n) / a,
      (s[1] - r) / o
    ], e), e += 24;
  };
  __privateAdd(_te, _m6, 8);
  __privateAdd(_te, _g7, 2);
  __privateAdd(_te, _c7, __privateGet(_te, _m6) + __privateGet(_te, _g7));
  let te = _te;
  class fn extends F {
    constructor(t, e, i, s, n, r) {
      super();
      __privateAdd(this, _fn_instances);
      __privateAdd(this, _t61);
      __privateAdd(this, _e43, new Float32Array(4));
      __privateAdd(this, _s34);
      __privateAdd(this, _i30);
      __privateAdd(this, _a21);
      __privateAdd(this, _r20);
      __privateAdd(this, _n20);
      __privateSet(this, _n20, t), __privateSet(this, _a21, e), __privateSet(this, _t61, i), __privateSet(this, _r20, s), __privateSet(this, _s34, n), __privateSet(this, _i30, r), this.firstPoint = [
        NaN,
        NaN
      ], this.lastPoint = [
        NaN,
        NaN
      ], __privateMethod(this, _fn_instances, o_fn4).call(this, r);
      const [a, o, l, h] = __privateGet(this, _e43);
      for (let c = 0, f = t.length; c < f; c += 2) t[c] = (t[c] - a) / l, t[c + 1] = (t[c + 1] - o) / h;
      for (let c = 0, f = e.length; c < f; c += 2) e[c] = (e[c] - a) / l, e[c + 1] = (e[c + 1] - o) / h;
    }
    toSVGPath() {
      const t = [
        `M${__privateGet(this, _n20)[4]} ${__privateGet(this, _n20)[5]}`
      ];
      for (let e = 6, i = __privateGet(this, _n20).length; e < i; e += 6) {
        if (isNaN(__privateGet(this, _n20)[e])) {
          t.push(`L${__privateGet(this, _n20)[e + 4]} ${__privateGet(this, _n20)[e + 5]}`);
          continue;
        }
        t.push(`C${__privateGet(this, _n20)[e]} ${__privateGet(this, _n20)[e + 1]} ${__privateGet(this, _n20)[e + 2]} ${__privateGet(this, _n20)[e + 3]} ${__privateGet(this, _n20)[e + 4]} ${__privateGet(this, _n20)[e + 5]}`);
      }
      return t.push("Z"), t.join(" ");
    }
    serialize([t, e, i, s], n) {
      const r = i - t, a = s - e;
      let o, l;
      switch (n) {
        case 0:
          o = F._rescale(__privateGet(this, _n20), t, s, r, -a), l = F._rescale(__privateGet(this, _a21), t, s, r, -a);
          break;
        case 90:
          o = F._rescaleAndSwap(__privateGet(this, _n20), t, e, r, a), l = F._rescaleAndSwap(__privateGet(this, _a21), t, e, r, a);
          break;
        case 180:
          o = F._rescale(__privateGet(this, _n20), i, e, -r, a), l = F._rescale(__privateGet(this, _a21), i, e, -r, a);
          break;
        case 270:
          o = F._rescaleAndSwap(__privateGet(this, _n20), i, s, -r, -a), l = F._rescaleAndSwap(__privateGet(this, _a21), i, s, -r, -a);
          break;
      }
      return {
        outline: Array.from(o),
        points: [
          Array.from(l)
        ]
      };
    }
    get box() {
      return __privateGet(this, _e43);
    }
    newOutliner(t, e, i, s, n, r = 0) {
      return new te(t, e, i, s, n, r);
    }
    getNewOutline(t, e) {
      const [i, s, n, r] = __privateGet(this, _e43), [a, o, l, h] = __privateGet(this, _t61), c = n * l, f = r * h, g = i * l + a, b = s * h + o, m = this.newOutliner({
        x: __privateGet(this, _a21)[0] * c + g,
        y: __privateGet(this, _a21)[1] * f + b
      }, __privateGet(this, _t61), __privateGet(this, _r20), t, __privateGet(this, _i30), e ?? __privateGet(this, _s34));
      for (let w = 2; w < __privateGet(this, _a21).length; w += 2) m.add({
        x: __privateGet(this, _a21)[w] * c + g,
        y: __privateGet(this, _a21)[w + 1] * f + b
      });
      return m.getOutlines();
    }
  }
  _t61 = new WeakMap();
  _e43 = new WeakMap();
  _s34 = new WeakMap();
  _i30 = new WeakMap();
  _a21 = new WeakMap();
  _r20 = new WeakMap();
  _n20 = new WeakMap();
  _fn_instances = new WeakSet();
  o_fn4 = function(t) {
    const e = __privateGet(this, _n20);
    let i = e[4], s = e[5];
    const n = [
      i,
      s,
      i,
      s
    ];
    let r = i, a = s, o = i, l = s;
    const h = t ? Math.max : Math.min, c = new Float32Array(4);
    for (let g = 6, b = e.length; g < b; g += 6) {
      const m = e[g + 4], w = e[g + 5];
      isNaN(e[g]) ? (R.pointBoundingBox(m, w, n), a > w ? (r = m, a = w) : a === w && (r = h(r, m)), l < w ? (o = m, l = w) : l === w && (o = h(o, m))) : (c[0] = c[1] = 1 / 0, c[2] = c[3] = -1 / 0, R.bezierBoundingBox(i, s, ...e.slice(g, g + 6), c), R.rectBoundingBox(c[0], c[1], c[2], c[3], n), a > c[1] ? (r = c[0], a = c[1]) : a === c[1] && (r = h(r, c[0])), l < c[3] ? (o = c[2], l = c[3]) : l === c[3] && (o = h(o, c[2]))), i = m, s = w;
    }
    const f = __privateGet(this, _e43);
    f[0] = n[0] - __privateGet(this, _s34), f[1] = n[1] - __privateGet(this, _s34), f[2] = n[2] - n[0] + 2 * __privateGet(this, _s34), f[3] = n[3] - n[1] + 2 * __privateGet(this, _s34), this.firstPoint = [
      r,
      a
    ], this.lastPoint = [
      o,
      l
    ];
  };
  class Oi {
    constructor(t, e = 0, i = 0, s = true) {
      __privateAdd(this, _Oi_instances);
      __privateAdd(this, _t62);
      __privateAdd(this, _e44);
      __privateAdd(this, _s35);
      __privateAdd(this, _i31, []);
      __privateAdd(this, _a22, []);
      const n = [
        1 / 0,
        1 / 0,
        -1 / 0,
        -1 / 0
      ], r = 10 ** -4;
      for (const { x: m, y: w, width: A, height: S } of t) {
        const E = Math.floor((m - e) / r) * r, C = Math.ceil((m + A + e) / r) * r, x = Math.floor((w - e) / r) * r, T = Math.ceil((w + S + e) / r) * r, k = [
          E,
          x,
          T,
          true
        ], I = [
          C,
          x,
          T,
          false
        ];
        __privateGet(this, _i31).push(k, I), R.rectBoundingBox(E, x, C, T, n);
      }
      const a = n[2] - n[0] + 2 * i, o = n[3] - n[1] + 2 * i, l = n[0] - i, h = n[1] - i;
      let c = s ? -1 / 0 : 1 / 0, f = 1 / 0;
      const g = __privateGet(this, _i31).at(s ? -1 : -2), b = [
        g[0],
        g[2]
      ];
      for (const m of __privateGet(this, _i31)) {
        const [w, A, S, E] = m;
        !E && s ? A < f ? (f = A, c = w) : A === f && (c = Math.max(c, w)) : E && !s && (A < f ? (f = A, c = w) : A === f && (c = Math.min(c, w))), m[0] = (w - l) / a, m[1] = (A - h) / o, m[2] = (S - h) / o;
      }
      __privateSet(this, _t62, new Float32Array([
        l,
        h,
        a,
        o
      ])), __privateSet(this, _e44, [
        c,
        f
      ]), __privateSet(this, _s35, b);
    }
    getOutlines() {
      __privateGet(this, _i31).sort((e, i) => e[0] - i[0] || e[1] - i[1] || e[2] - i[2]);
      const t = [];
      for (const e of __privateGet(this, _i31)) e[3] ? (t.push(...__privateMethod(this, _Oi_instances, l_fn8).call(this, e)), __privateMethod(this, _Oi_instances, o_fn5).call(this, e)) : (__privateMethod(this, _Oi_instances, h_fn7).call(this, e), t.push(...__privateMethod(this, _Oi_instances, l_fn8).call(this, e)));
      return __privateMethod(this, _Oi_instances, r_fn3).call(this, t);
    }
  }
  _t62 = new WeakMap();
  _e44 = new WeakMap();
  _s35 = new WeakMap();
  _i31 = new WeakMap();
  _a22 = new WeakMap();
  _Oi_instances = new WeakSet();
  r_fn3 = function(t) {
    const e = [], i = /* @__PURE__ */ new Set();
    for (const r of t) {
      const [a, o, l] = r;
      e.push([
        a,
        o,
        r
      ], [
        a,
        l,
        r
      ]);
    }
    e.sort((r, a) => r[1] - a[1] || r[0] - a[0]);
    for (let r = 0, a = e.length; r < a; r += 2) {
      const o = e[r][2], l = e[r + 1][2];
      o.push(l), l.push(o), i.add(o), i.add(l);
    }
    const s = [];
    let n;
    for (; i.size > 0; ) {
      const r = i.values().next().value;
      let [a, o, l, h, c] = r;
      i.delete(r);
      let f = a, g = o;
      for (n = [
        a,
        l
      ], s.push(n); ; ) {
        let b;
        if (i.has(h)) b = h;
        else if (i.has(c)) b = c;
        else break;
        i.delete(b), [a, o, l, h, c] = b, f !== a && (n.push(f, g, a, g === o ? o : l), f = a), g = g === o ? l : o;
      }
      n.push(f, g);
    }
    return new ba(s, __privateGet(this, _t62), __privateGet(this, _e44), __privateGet(this, _s35));
  };
  n_fn2 = function(t) {
    const e = __privateGet(this, _a22);
    let i = 0, s = e.length - 1;
    for (; i <= s; ) {
      const n = i + s >> 1, r = e[n][0];
      if (r === t) return n;
      r < t ? i = n + 1 : s = n - 1;
    }
    return s + 1;
  };
  o_fn5 = function([, t, e]) {
    const i = __privateMethod(this, _Oi_instances, n_fn2).call(this, t);
    __privateGet(this, _a22).splice(i, 0, [
      t,
      e
    ]);
  };
  h_fn7 = function([, t, e]) {
    const i = __privateMethod(this, _Oi_instances, n_fn2).call(this, t);
    for (let s = i; s < __privateGet(this, _a22).length; s++) {
      const [n, r] = __privateGet(this, _a22)[s];
      if (n !== t) break;
      if (n === t && r === e) {
        __privateGet(this, _a22).splice(s, 1);
        return;
      }
    }
    for (let s = i - 1; s >= 0; s--) {
      const [n, r] = __privateGet(this, _a22)[s];
      if (n !== t) break;
      if (n === t && r === e) {
        __privateGet(this, _a22).splice(s, 1);
        return;
      }
    }
  };
  l_fn8 = function(t) {
    const [e, i, s] = t, n = [
      [
        e,
        i,
        s
      ]
    ], r = __privateMethod(this, _Oi_instances, n_fn2).call(this, s);
    for (let a = 0; a < r; a++) {
      const [o, l] = __privateGet(this, _a22)[a];
      for (let h = 0, c = n.length; h < c; h++) {
        const [, f, g] = n[h];
        if (!(l <= f || g <= o)) {
          if (f >= o) {
            if (g > l) n[h][1] = l;
            else {
              if (c === 1) return [];
              n.splice(h, 1), h--, c--;
            }
            continue;
          }
          n[h][2] = o, g > l && n.push([
            e,
            l,
            g
          ]);
        }
      }
    }
    return n;
  };
  class ba extends F {
    constructor(t, e, i, s) {
      super();
      __privateAdd(this, _t63);
      __privateAdd(this, _e45);
      __privateSet(this, _e45, t), __privateSet(this, _t63, e), this.firstPoint = i, this.lastPoint = s;
    }
    toSVGPath() {
      const t = [];
      for (const e of __privateGet(this, _e45)) {
        let [i, s] = e;
        t.push(`M${i} ${s}`);
        for (let n = 2; n < e.length; n += 2) {
          const r = e[n], a = e[n + 1];
          r === i ? (t.push(`V${a}`), s = a) : a === s && (t.push(`H${r}`), i = r);
        }
        t.push("Z");
      }
      return t.join(" ");
    }
    serialize([t, e, i, s], n) {
      const r = [], a = i - t, o = s - e;
      for (const l of __privateGet(this, _e45)) {
        const h = new Array(l.length);
        for (let c = 0; c < l.length; c += 2) h[c] = t + l[c] * a, h[c + 1] = s - l[c + 1] * o;
        r.push(h);
      }
      return r;
    }
    get box() {
      return __privateGet(this, _t63);
    }
    get classNamesForOutlining() {
      return [
        "highlightOutline"
      ];
    }
  }
  _t63 = new WeakMap();
  _e45 = new WeakMap();
  class Ui extends te {
    newFreeDrawOutline(t, e, i, s, n, r) {
      return new ya(t, e, i, s, n, r);
    }
  }
  class ya extends fn {
    newOutliner(t, e, i, s, n, r = 0) {
      return new Ui(t, e, i, s, n, r);
    }
  }
  const _ut = class _ut extends U {
    constructor(t) {
      super({
        ...t,
        name: "highlightEditor"
      });
      __privateAdd(this, _ut_instances);
      __privateAdd(this, _t64, null);
      __privateAdd(this, _e46, 0);
      __privateAdd(this, _s36);
      __privateAdd(this, _i32, null);
      __privateAdd(this, _a23, null);
      __privateAdd(this, _r21, null);
      __privateAdd(this, _n21, null);
      __privateAdd(this, _o16, 0);
      __privateAdd(this, _h13, null);
      __privateAdd(this, _l12, null);
      __privateAdd(this, _u10, null);
      __privateAdd(this, _d10, false);
      __privateAdd(this, _f9, null);
      __privateAdd(this, _m7, null);
      __privateAdd(this, _g8, null);
      __privateAdd(this, _c8, "");
      __privateAdd(this, _p6);
      __privateAdd(this, _b6, "");
      this.color = t.color || _ut._defaultColor, __privateSet(this, _p6, t.thickness || _ut._defaultThickness), this.opacity = t.opacity || _ut._defaultOpacity, __privateSet(this, _s36, t.boxes || null), __privateSet(this, _b6, t.methodOfCreation || ""), __privateSet(this, _c8, t.text || ""), this._isDraggable = false, this.defaultL10nId = "pdfjs-editor-highlight-editor", t.highlightId > -1 ? (__privateSet(this, _d10, true), __privateMethod(this, _ut_instances, y_fn2).call(this, t), __privateMethod(this, _ut_instances, w_fn2).call(this)) : __privateGet(this, _s36) && (__privateSet(this, _t64, t.anchorNode), __privateSet(this, _e46, t.anchorOffset), __privateSet(this, _n21, t.focusNode), __privateSet(this, _o16, t.focusOffset), __privateMethod(this, _ut_instances, A_fn3).call(this), __privateMethod(this, _ut_instances, w_fn2).call(this), this.rotate(this.rotation)), this.annotationElementId || this._uiManager.a11yAlert("pdfjs-editor-highlight-added-alert");
    }
    static get _keyboardManager() {
      const t = _ut.prototype;
      return H(this, "_keyboardManager", new Fe([
        [
          [
            "ArrowLeft",
            "mac+ArrowLeft"
          ],
          t._moveCaret,
          {
            args: [
              0
            ]
          }
        ],
        [
          [
            "ArrowRight",
            "mac+ArrowRight"
          ],
          t._moveCaret,
          {
            args: [
              1
            ]
          }
        ],
        [
          [
            "ArrowUp",
            "mac+ArrowUp"
          ],
          t._moveCaret,
          {
            args: [
              2
            ]
          }
        ],
        [
          [
            "ArrowDown",
            "mac+ArrowDown"
          ],
          t._moveCaret,
          {
            args: [
              3
            ]
          }
        ]
      ]));
    }
    get telemetryInitialData() {
      return {
        action: "added",
        type: __privateGet(this, _d10) ? "free_highlight" : "highlight",
        color: this._uiManager.getNonHCMColorName(this.color),
        thickness: __privateGet(this, _p6),
        methodOfCreation: __privateGet(this, _b6)
      };
    }
    get telemetryFinalData() {
      return {
        type: "highlight",
        color: this._uiManager.getNonHCMColorName(this.color)
      };
    }
    static computeTelemetryFinalData(t) {
      return {
        numberOfColors: t.get("color").size
      };
    }
    static initialize(t, e) {
      var _a29;
      U.initialize(t, e), _ut._defaultColor || (_ut._defaultColor = ((_a29 = e.highlightColors) == null ? void 0 : _a29.values().next().value) || "#fff066");
    }
    static updateDefaultParams(t, e) {
      switch (t) {
        case X.HIGHLIGHT_COLOR:
          _ut._defaultColor = e;
          break;
        case X.HIGHLIGHT_THICKNESS:
          _ut._defaultThickness = e;
          break;
      }
    }
    translateInPage(t, e) {
    }
    get toolbarPosition() {
      return __privateGet(this, _m7);
    }
    get commentButtonPosition() {
      return __privateGet(this, _f9);
    }
    updateParams(t, e) {
      switch (t) {
        case X.HIGHLIGHT_COLOR:
          __privateMethod(this, _ut_instances, __fn2).call(this, e);
          break;
        case X.HIGHLIGHT_THICKNESS:
          __privateMethod(this, _ut_instances, S_fn2).call(this, e);
          break;
      }
    }
    static get defaultPropertiesToUpdate() {
      return [
        [
          X.HIGHLIGHT_COLOR,
          _ut._defaultColor
        ],
        [
          X.HIGHLIGHT_THICKNESS,
          _ut._defaultThickness
        ]
      ];
    }
    get propertiesToUpdate() {
      return [
        [
          X.HIGHLIGHT_COLOR,
          this.color || _ut._defaultColor
        ],
        [
          X.HIGHLIGHT_THICKNESS,
          __privateGet(this, _p6) || _ut._defaultThickness
        ],
        [
          X.HIGHLIGHT_FREE,
          __privateGet(this, _d10)
        ]
      ];
    }
    onUpdatedColor() {
      var _a29, _b7;
      (_a29 = this.parent) == null ? void 0 : _a29.drawLayer.updateProperties(__privateGet(this, _u10), {
        root: {
          fill: this.color,
          "fill-opacity": this.opacity
        }
      }), (_b7 = __privateGet(this, _a23)) == null ? void 0 : _b7.updateColor(this.color), super.onUpdatedColor();
    }
    get toolbarButtons() {
      return this._uiManager.highlightColors ? [
        [
          "colorPicker",
          __privateSet(this, _a23, new Rt({
            editor: this
          }))
        ]
      ] : super.toolbarButtons;
    }
    disableEditing() {
      super.disableEditing(), this.div.classList.toggle("disabled", true);
    }
    enableEditing() {
      super.enableEditing(), this.div.classList.toggle("disabled", false);
    }
    fixAndSetPosition() {
      return super.fixAndSetPosition(__privateMethod(this, _ut_instances, k_fn4).call(this));
    }
    getBaseTranslation() {
      return [
        0,
        0
      ];
    }
    getRect(t, e) {
      return super.getRect(t, e, __privateMethod(this, _ut_instances, k_fn4).call(this));
    }
    onceAdded(t) {
      this.annotationElementId || this.parent.addUndoableEditor(this), t && this.div.focus();
    }
    remove() {
      __privateMethod(this, _ut_instances, T_fn2).call(this), this._reportTelemetry({
        action: "deleted"
      }), super.remove();
    }
    rebuild() {
      this.parent && (super.rebuild(), this.div !== null && (__privateMethod(this, _ut_instances, w_fn2).call(this), this.isAttachedToDOM || this.parent.add(this)));
    }
    setParent(t) {
      var _a29;
      let e = false;
      this.parent && !t ? __privateMethod(this, _ut_instances, T_fn2).call(this) : t && (__privateMethod(this, _ut_instances, w_fn2).call(this, t), e = !this.parent && ((_a29 = this.div) == null ? void 0 : _a29.classList.contains("selectedEditor"))), super.setParent(t), this.show(this._isVisible), e && this.select();
    }
    rotate(t) {
      var _a29, _b7, _c10;
      const { drawLayer: e } = this.parent;
      let i;
      __privateGet(this, _d10) ? (t = (t - this.rotation + 360) % 360, i = __privateMethod(_a29 = _ut, _ut_static, x_fn2).call(_a29, __privateGet(this, _l12).box, t)) : i = __privateMethod(_b7 = _ut, _ut_static, x_fn2).call(_b7, [
        this.x,
        this.y,
        this.width,
        this.height
      ], t), e.updateProperties(__privateGet(this, _u10), {
        bbox: i,
        root: {
          "data-main-rotation": t
        }
      }), e.updateProperties(__privateGet(this, _g8), {
        bbox: __privateMethod(_c10 = _ut, _ut_static, x_fn2).call(_c10, __privateGet(this, _r21).box, t),
        root: {
          "data-main-rotation": t
        }
      });
    }
    render() {
      if (this.div) return this.div;
      const t = super.render();
      __privateGet(this, _c8) && (t.setAttribute("aria-label", __privateGet(this, _c8)), t.setAttribute("role", "mark")), __privateGet(this, _d10) ? t.classList.add("free") : this.div.addEventListener("keydown", __privateMethod(this, _ut_instances, M_fn4).bind(this), {
        signal: this._uiManager._signal
      });
      const e = __privateSet(this, _h13, document.createElement("div"));
      return t.append(e), e.setAttribute("aria-hidden", "true"), e.className = "internal", e.style.clipPath = __privateGet(this, _i32), this.setDims(), zs(this, __privateGet(this, _h13), [
        "pointerover",
        "pointerleave"
      ]), this.enableEditing(), t;
    }
    pointerover() {
      var _a29;
      this.isSelected || ((_a29 = this.parent) == null ? void 0 : _a29.drawLayer.updateProperties(__privateGet(this, _g8), {
        rootClass: {
          hovered: true
        }
      }));
    }
    pointerleave() {
      var _a29;
      this.isSelected || ((_a29 = this.parent) == null ? void 0 : _a29.drawLayer.updateProperties(__privateGet(this, _g8), {
        rootClass: {
          hovered: false
        }
      }));
    }
    _moveCaret(t) {
      switch (this.parent.unselect(this), t) {
        case 0:
        case 2:
          __privateMethod(this, _ut_instances, P_fn4).call(this, true);
          break;
        case 1:
        case 3:
          __privateMethod(this, _ut_instances, P_fn4).call(this, false);
          break;
      }
    }
    select() {
      var _a29;
      super.select(), __privateGet(this, _g8) && ((_a29 = this.parent) == null ? void 0 : _a29.drawLayer.updateProperties(__privateGet(this, _g8), {
        rootClass: {
          hovered: false,
          selected: true
        }
      }));
    }
    unselect() {
      var _a29;
      super.unselect(), __privateGet(this, _g8) && ((_a29 = this.parent) == null ? void 0 : _a29.drawLayer.updateProperties(__privateGet(this, _g8), {
        rootClass: {
          selected: false
        }
      }), __privateGet(this, _d10) || __privateMethod(this, _ut_instances, P_fn4).call(this, false));
    }
    get _mustFixPosition() {
      return !__privateGet(this, _d10);
    }
    show(t = this._isVisible) {
      super.show(t), this.parent && (this.parent.drawLayer.updateProperties(__privateGet(this, _u10), {
        rootClass: {
          hidden: !t
        }
      }), this.parent.drawLayer.updateProperties(__privateGet(this, _g8), {
        rootClass: {
          hidden: !t
        }
      }));
    }
    static startHighlighting(t, e, { target: i, x: s, y: n }) {
      const { x: r, y: a, width: o, height: l } = i.getBoundingClientRect(), h = new AbortController(), c = t.combinedSignal(h), f = (g) => {
        h.abort(), __privateMethod(this, _ut_static, O_fn2).call(this, t, g);
      };
      window.addEventListener("blur", f, {
        signal: c
      }), window.addEventListener("pointerup", f, {
        signal: c
      }), window.addEventListener("pointerdown", dt, {
        capture: true,
        passive: false,
        signal: c
      }), window.addEventListener("contextmenu", Ft, {
        signal: c
      }), i.addEventListener("pointermove", __privateMethod(this, _ut_static, R_fn2).bind(this, t), {
        signal: c
      }), this._freeHighlight = new Ui({
        x: s,
        y: n
      }, [
        r,
        a,
        o,
        l
      ], t.scale, this._defaultThickness / 2, e, 1e-3), { id: this._freeHighlightId, clipPathId: this._freeHighlightClipId } = t.drawLayer.draw({
        bbox: [
          0,
          0,
          1,
          1
        ],
        root: {
          viewBox: "0 0 1 1",
          fill: this._defaultColor,
          "fill-opacity": this._defaultOpacity
        },
        rootClass: {
          highlight: true,
          free: true
        },
        path: {
          d: this._freeHighlight.toSVGPath()
        }
      }, true, true);
    }
    static async deserialize(t, e, i) {
      var _a29, _b7, _c10, _d12;
      let s = null;
      if (t instanceof dn) {
        const { data: { quadPoints: b, rect: m, rotation: w, id: A, color: S, opacity: E, popupRef: C, richText: x, contentsObj: T, creationDate: k, modificationDate: I }, parent: { page: { pageNumber: D } } } = t;
        s = t = {
          annotationType: $.HIGHLIGHT,
          color: Array.from(S),
          opacity: E,
          quadPoints: b,
          boxes: null,
          pageIndex: D - 1,
          rect: m.slice(0),
          rotation: w,
          annotationElementId: A,
          id: A,
          deleted: false,
          popupRef: C,
          richText: x,
          comment: (T == null ? void 0 : T.str) || null,
          creationDate: k,
          modificationDate: I
        };
      } else if (t instanceof Qi) {
        const { data: { inkLists: b, rect: m, rotation: w, id: A, color: S, borderStyle: { rawWidth: E }, popupRef: C, richText: x, contentsObj: T, creationDate: k, modificationDate: I }, parent: { page: { pageNumber: D } } } = t;
        s = t = {
          annotationType: $.HIGHLIGHT,
          color: Array.from(S),
          thickness: E,
          inkLists: b,
          boxes: null,
          pageIndex: D - 1,
          rect: m.slice(0),
          rotation: w,
          annotationElementId: A,
          id: A,
          deleted: false,
          popupRef: C,
          richText: x,
          comment: (T == null ? void 0 : T.str) || null,
          creationDate: k,
          modificationDate: I
        };
      }
      const { color: n, quadPoints: r, inkLists: a, opacity: o } = t, l = await super.deserialize(t, e, i);
      l.color = R.makeHexColor(...n), l.opacity = o || 1, a && __privateSet(l, _p6, t.thickness), l._initialData = s, t.comment && l.setCommentData(t);
      const [h, c] = l.pageDimensions, [f, g] = l.pageTranslation;
      if (r) {
        const b = __privateSet(l, _s36, []);
        for (let m = 0; m < r.length; m += 8) b.push({
          x: (r[m] - f) / h,
          y: 1 - (r[m + 1] - g) / c,
          width: (r[m + 2] - r[m]) / h,
          height: (r[m + 1] - r[m + 5]) / c
        });
        __privateMethod(_a29 = l, _ut_instances, A_fn3).call(_a29), __privateMethod(_b7 = l, _ut_instances, w_fn2).call(_b7), l.rotate(l.rotation);
      } else if (a) {
        __privateSet(l, _d10, true);
        const b = a[0], m = {
          x: b[0] - f,
          y: c - (b[1] - g)
        }, w = new Ui(m, [
          0,
          0,
          h,
          c
        ], 1, __privateGet(l, _p6) / 2, true, 1e-3);
        for (let E = 0, C = b.length; E < C; E += 2) m.x = b[E] - f, m.y = c - (b[E + 1] - g), w.add(m);
        const { id: A, clipPathId: S } = e.drawLayer.draw({
          bbox: [
            0,
            0,
            1,
            1
          ],
          root: {
            viewBox: "0 0 1 1",
            fill: l.color,
            "fill-opacity": l._defaultOpacity
          },
          rootClass: {
            highlight: true,
            free: true
          },
          path: {
            d: w.toSVGPath()
          }
        }, true, true);
        __privateMethod(_c10 = l, _ut_instances, y_fn2).call(_c10, {
          highlightOutlines: w.getOutlines(),
          highlightId: A,
          clipPathId: S
        }), __privateMethod(_d12 = l, _ut_instances, w_fn2).call(_d12), l.rotate(l.parentRotation);
      }
      return l;
    }
    serialize(t = false) {
      if (this.isEmpty() || t) return null;
      if (this.deleted) return this.serializeDeleted();
      const e = U._colorManager.convert(this._uiManager.getNonHCMColor(this.color)), i = super.serialize(t);
      return Object.assign(i, {
        color: e,
        opacity: this.opacity,
        thickness: __privateGet(this, _p6),
        quadPoints: __privateMethod(this, _ut_instances, N_fn4).call(this),
        outlines: __privateMethod(this, _ut_instances, D_fn2).call(this, i.rect)
      }), this.addComment(i), this.annotationElementId && !__privateMethod(this, _ut_instances, F_fn3).call(this, i) ? null : (i.id = this.annotationElementId, i);
    }
    renderAnnotationElement(t) {
      return this.deleted ? (t.hide(), null) : (t.updateEdited({
        rect: this.getPDFRect(),
        popup: this.comment
      }), null);
    }
    static canCreateNewEmptyEditor() {
      return false;
    }
  };
  _t64 = new WeakMap();
  _e46 = new WeakMap();
  _s36 = new WeakMap();
  _i32 = new WeakMap();
  _a23 = new WeakMap();
  _r21 = new WeakMap();
  _n21 = new WeakMap();
  _o16 = new WeakMap();
  _h13 = new WeakMap();
  _l12 = new WeakMap();
  _u10 = new WeakMap();
  _d10 = new WeakMap();
  _f9 = new WeakMap();
  _m7 = new WeakMap();
  _g8 = new WeakMap();
  _c8 = new WeakMap();
  _p6 = new WeakMap();
  _b6 = new WeakMap();
  _ut_instances = new WeakSet();
  A_fn3 = function() {
    const t = new Oi(__privateGet(this, _s36), 1e-3);
    __privateSet(this, _l12, t.getOutlines()), [this.x, this.y, this.width, this.height] = __privateGet(this, _l12).box;
    const e = new Oi(__privateGet(this, _s36), 25e-4, 1e-3, this._uiManager.direction === "ltr");
    __privateSet(this, _r21, e.getOutlines());
    const { firstPoint: i } = __privateGet(this, _l12);
    __privateSet(this, _f9, [
      (i[0] - this.x) / this.width,
      (i[1] - this.y) / this.height
    ]);
    const { lastPoint: s } = __privateGet(this, _r21);
    __privateSet(this, _m7, [
      (s[0] - this.x) / this.width,
      (s[1] - this.y) / this.height
    ]);
  };
  y_fn2 = function({ highlightOutlines: t, highlightId: e, clipPathId: i }) {
    var _a29, _b7;
    __privateSet(this, _l12, t);
    const s = 1.5;
    if (__privateSet(this, _r21, t.getNewOutline(__privateGet(this, _p6) / 2 + s, 25e-4)), e >= 0) __privateSet(this, _u10, e), __privateSet(this, _i32, i), this.parent.drawLayer.finalizeDraw(e, {
      bbox: t.box,
      path: {
        d: t.toSVGPath()
      }
    }), __privateSet(this, _g8, this.parent.drawLayer.drawOutline({
      rootClass: {
        highlightOutline: true,
        free: true
      },
      bbox: __privateGet(this, _r21).box,
      path: {
        d: __privateGet(this, _r21).toSVGPath()
      }
    }, true));
    else if (this.parent) {
      const c = this.parent.viewport.rotation;
      this.parent.drawLayer.updateProperties(__privateGet(this, _u10), {
        bbox: __privateMethod(_a29 = _ut, _ut_static, x_fn2).call(_a29, __privateGet(this, _l12).box, (c - this.rotation + 360) % 360),
        path: {
          d: t.toSVGPath()
        }
      }), this.parent.drawLayer.updateProperties(__privateGet(this, _g8), {
        bbox: __privateMethod(_b7 = _ut, _ut_static, x_fn2).call(_b7, __privateGet(this, _r21).box, c),
        path: {
          d: __privateGet(this, _r21).toSVGPath()
        }
      });
    }
    const [n, r, a, o] = t.box;
    switch (this.rotation) {
      case 0:
        this.x = n, this.y = r, this.width = a, this.height = o;
        break;
      case 90: {
        const [c, f] = this.parentDimensions;
        this.x = r, this.y = 1 - n, this.width = a * f / c, this.height = o * c / f;
        break;
      }
      case 180:
        this.x = 1 - n, this.y = 1 - r, this.width = a, this.height = o;
        break;
      case 270: {
        const [c, f] = this.parentDimensions;
        this.x = 1 - r, this.y = n, this.width = a * f / c, this.height = o * c / f;
        break;
      }
    }
    const { firstPoint: l } = t;
    __privateSet(this, _f9, [
      (l[0] - n) / a,
      (l[1] - r) / o
    ]);
    const { lastPoint: h } = __privateGet(this, _r21);
    __privateSet(this, _m7, [
      (h[0] - n) / a,
      (h[1] - r) / o
    ]);
  };
  __fn2 = function(t) {
    const e = (n, r) => {
      this.color = n, this.opacity = r, this.onUpdatedColor();
    }, i = this.color, s = this.opacity;
    this.addCommands({
      cmd: e.bind(this, t, _ut._defaultOpacity),
      undo: e.bind(this, i, s),
      post: this._uiManager.updateUI.bind(this._uiManager, this),
      mustExec: true,
      type: X.HIGHLIGHT_COLOR,
      overwriteIfSameType: true,
      keepUndo: true
    }), this._reportTelemetry({
      action: "color_changed",
      color: this._uiManager.getNonHCMColorName(t)
    }, true);
  };
  S_fn2 = function(t) {
    const e = __privateGet(this, _p6), i = (s) => {
      __privateSet(this, _p6, s), __privateMethod(this, _ut_instances, v_fn2).call(this, s);
    };
    this.addCommands({
      cmd: i.bind(this, t),
      undo: i.bind(this, e),
      post: this._uiManager.updateUI.bind(this._uiManager, this),
      mustExec: true,
      type: X.INK_THICKNESS,
      overwriteIfSameType: true,
      keepUndo: true
    }), this._reportTelemetry({
      action: "thickness_changed",
      thickness: t
    }, true);
  };
  v_fn2 = function(t) {
    __privateGet(this, _d10) && (__privateMethod(this, _ut_instances, y_fn2).call(this, {
      highlightOutlines: __privateGet(this, _l12).getNewOutline(t / 2)
    }), this.fixAndSetPosition(), this.setDims());
  };
  T_fn2 = function() {
    __privateGet(this, _u10) === null || !this.parent || (this.parent.drawLayer.remove(__privateGet(this, _u10)), __privateSet(this, _u10, null), this.parent.drawLayer.remove(__privateGet(this, _g8)), __privateSet(this, _g8, null));
  };
  w_fn2 = function(t = this.parent) {
    __privateGet(this, _u10) === null && ({ id: __privateWrapper(this, _u10)._, clipPathId: __privateWrapper(this, _i32)._ } = t.drawLayer.draw({
      bbox: __privateGet(this, _l12).box,
      root: {
        viewBox: "0 0 1 1",
        fill: this.color,
        "fill-opacity": this.opacity
      },
      rootClass: {
        highlight: true,
        free: __privateGet(this, _d10)
      },
      path: {
        d: __privateGet(this, _l12).toSVGPath()
      }
    }, false, true), __privateSet(this, _g8, t.drawLayer.drawOutline({
      rootClass: {
        highlightOutline: true,
        free: __privateGet(this, _d10)
      },
      bbox: __privateGet(this, _r21).box,
      path: {
        d: __privateGet(this, _r21).toSVGPath()
      }
    }, __privateGet(this, _d10))), __privateGet(this, _h13) && (__privateGet(this, _h13).style.clipPath = __privateGet(this, _i32)));
  };
  _ut_static = new WeakSet();
  x_fn2 = function([t, e, i, s], n) {
    switch (n) {
      case 90:
        return [
          1 - e - s,
          t,
          s,
          i
        ];
      case 180:
        return [
          1 - t - i,
          1 - e - s,
          i,
          s
        ];
      case 270:
        return [
          e,
          1 - t - i,
          s,
          i
        ];
    }
    return [
      t,
      e,
      i,
      s
    ];
  };
  M_fn4 = function(t) {
    _ut._keyboardManager.exec(this, t);
  };
  P_fn4 = function(t) {
    if (!__privateGet(this, _t64)) return;
    const e = window.getSelection();
    t ? e.setPosition(__privateGet(this, _t64), __privateGet(this, _e46)) : e.setPosition(__privateGet(this, _n21), __privateGet(this, _o16));
  };
  k_fn4 = function() {
    return __privateGet(this, _d10) ? this.rotation : 0;
  };
  N_fn4 = function() {
    if (__privateGet(this, _d10)) return null;
    const [t, e] = this.pageDimensions, [i, s] = this.pageTranslation, n = __privateGet(this, _s36), r = new Float32Array(n.length * 8);
    let a = 0;
    for (const { x: o, y: l, width: h, height: c } of n) {
      const f = o * t + i, g = (1 - l) * e + s;
      r[a] = r[a + 4] = f, r[a + 1] = r[a + 3] = g, r[a + 2] = r[a + 6] = f + h * t, r[a + 5] = r[a + 7] = g - c * e, a += 8;
    }
    return r;
  };
  D_fn2 = function(t) {
    return __privateGet(this, _l12).serialize(t, __privateMethod(this, _ut_instances, k_fn4).call(this));
  };
  R_fn2 = function(t, e) {
    this._freeHighlight.add(e) && t.drawLayer.updateProperties(this._freeHighlightId, {
      path: {
        d: this._freeHighlight.toSVGPath()
      }
    });
  };
  O_fn2 = function(t, e) {
    this._freeHighlight.isEmpty() ? t.drawLayer.remove(this._freeHighlightId) : t.createAndAddNewEditor(e, false, {
      highlightId: this._freeHighlightId,
      highlightOutlines: this._freeHighlight.getOutlines(),
      clipPathId: this._freeHighlightClipId,
      methodOfCreation: "main_toolbar"
    }), this._freeHighlightId = -1, this._freeHighlight = null, this._freeHighlightClipId = "";
  };
  F_fn3 = function(t) {
    const { color: e } = this._initialData;
    return this.hasEditedComment || t.color.some((i, s) => i !== e[s]);
  };
  __privateAdd(_ut, _ut_static);
  __publicField(_ut, "_defaultColor", null);
  __publicField(_ut, "_defaultOpacity", 1);
  __publicField(_ut, "_defaultThickness", 12);
  __publicField(_ut, "_type", "highlight");
  __publicField(_ut, "_editorType", $.HIGHLIGHT);
  __publicField(_ut, "_freeHighlightId", -1);
  __publicField(_ut, "_freeHighlight", null);
  __publicField(_ut, "_freeHighlightClipId", "");
  let ut = _ut;
  class pn {
    constructor() {
      __privateAdd(this, _t65, /* @__PURE__ */ Object.create(null));
    }
    updateProperty(t, e) {
      this[t] = e, this.updateSVGProperty(t, e);
    }
    updateProperties(t) {
      if (t) for (const [e, i] of Object.entries(t)) e.startsWith("_") || this.updateProperty(e, i);
    }
    updateSVGProperty(t, e) {
      __privateGet(this, _t65)[t] = e;
    }
    toSVGProperties() {
      const t = __privateGet(this, _t65);
      return __privateSet(this, _t65, /* @__PURE__ */ Object.create(null)), {
        root: t
      };
    }
    reset() {
      __privateSet(this, _t65, /* @__PURE__ */ Object.create(null));
    }
    updateAll(t = this) {
      this.updateProperties(t);
    }
    clone() {
      Z("Not implemented");
    }
  }
  _t65 = new WeakMap();
  const _J = class _J extends U {
    constructor(t) {
      super(t);
      __privateAdd(this, _J_instances);
      __privateAdd(this, _t66, null);
      __privateAdd(this, _e47);
      __publicField(this, "_colorPicker", null);
      __publicField(this, "_drawId", null);
      __privateSet(this, _e47, t.mustBeCommitted || false), this._addOutlines(t);
    }
    onUpdatedColor() {
      var _a29;
      (_a29 = this._colorPicker) == null ? void 0 : _a29.update(this.color), super.onUpdatedColor();
    }
    _addOutlines(t) {
      t.drawOutlines && (__privateMethod(this, _J_instances, r_fn4).call(this, t), __privateMethod(this, _J_instances, h_fn8).call(this));
    }
    static _mergeSVGProperties(t, e) {
      const i = new Set(Object.keys(t));
      for (const [s, n] of Object.entries(e)) i.has(s) ? Object.assign(t[s], n) : t[s] = n;
      return t;
    }
    static getDefaultDrawingOptions(t) {
      Z("Not implemented");
    }
    static get typesMap() {
      Z("Not implemented");
    }
    static get isDrawer() {
      return true;
    }
    static get supportMultipleDrawings() {
      return false;
    }
    static updateDefaultParams(t, e) {
      const i = this.typesMap.get(t);
      i && this._defaultDrawingOptions.updateProperty(i, e), this._currentParent && (__privateGet(_J, _s37).updateProperty(i, e), this._currentParent.drawLayer.updateProperties(this._currentDrawId, this._defaultDrawingOptions.toSVGProperties()));
    }
    updateParams(t, e) {
      const i = this.constructor.typesMap.get(t);
      i && this._updateProperty(t, i, e);
    }
    static get defaultPropertiesToUpdate() {
      const t = [], e = this._defaultDrawingOptions;
      for (const [i, s] of this.typesMap) t.push([
        i,
        e[s]
      ]);
      return t;
    }
    get propertiesToUpdate() {
      const t = [], { _drawingOptions: e } = this;
      for (const [i, s] of this.constructor.typesMap) t.push([
        i,
        e[s]
      ]);
      return t;
    }
    _updateProperty(t, e, i) {
      const s = this._drawingOptions, n = s[e], r = (a) => {
        var _a29;
        s.updateProperty(e, a);
        const o = __privateGet(this, _t66).updateProperty(e, a);
        o && __privateMethod(this, _J_instances, d_fn6).call(this, o), (_a29 = this.parent) == null ? void 0 : _a29.drawLayer.updateProperties(this._drawId, s.toSVGProperties()), t === this.colorType && this.onUpdatedColor();
      };
      this.addCommands({
        cmd: r.bind(this, i),
        undo: r.bind(this, n),
        post: this._uiManager.updateUI.bind(this._uiManager, this),
        mustExec: true,
        type: t,
        overwriteIfSameType: true,
        keepUndo: true
      });
    }
    _onResizing() {
      var _a29;
      (_a29 = this.parent) == null ? void 0 : _a29.drawLayer.updateProperties(this._drawId, _J._mergeSVGProperties(__privateGet(this, _t66).getPathResizingSVGProperties(__privateMethod(this, _J_instances, u_fn9).call(this)), {
        bbox: __privateMethod(this, _J_instances, f_fn6).call(this)
      }));
    }
    _onResized() {
      var _a29;
      (_a29 = this.parent) == null ? void 0 : _a29.drawLayer.updateProperties(this._drawId, _J._mergeSVGProperties(__privateGet(this, _t66).getPathResizedSVGProperties(__privateMethod(this, _J_instances, u_fn9).call(this)), {
        bbox: __privateMethod(this, _J_instances, f_fn6).call(this)
      }));
    }
    _onTranslating(t, e) {
      var _a29;
      (_a29 = this.parent) == null ? void 0 : _a29.drawLayer.updateProperties(this._drawId, {
        bbox: __privateMethod(this, _J_instances, f_fn6).call(this)
      });
    }
    _onTranslated() {
      var _a29;
      (_a29 = this.parent) == null ? void 0 : _a29.drawLayer.updateProperties(this._drawId, _J._mergeSVGProperties(__privateGet(this, _t66).getPathTranslatedSVGProperties(__privateMethod(this, _J_instances, u_fn9).call(this), this.parentDimensions), {
        bbox: __privateMethod(this, _J_instances, f_fn6).call(this)
      }));
    }
    _onStartDragging() {
      var _a29;
      (_a29 = this.parent) == null ? void 0 : _a29.drawLayer.updateProperties(this._drawId, {
        rootClass: {
          moving: true
        }
      });
    }
    _onStopDragging() {
      var _a29;
      (_a29 = this.parent) == null ? void 0 : _a29.drawLayer.updateProperties(this._drawId, {
        rootClass: {
          moving: false
        }
      });
    }
    commit() {
      super.commit(), this.disableEditMode(), this.disableEditing();
    }
    disableEditing() {
      super.disableEditing(), this.div.classList.toggle("disabled", true);
    }
    enableEditing() {
      super.enableEditing(), this.div.classList.toggle("disabled", false);
    }
    getBaseTranslation() {
      return [
        0,
        0
      ];
    }
    get isResizable() {
      return true;
    }
    onceAdded(t) {
      this.annotationElementId || this.parent.addUndoableEditor(this), this._isDraggable = true, __privateGet(this, _e47) && (__privateSet(this, _e47, false), this.commit(), this.parent.setSelected(this), t && this.isOnScreen && this.div.focus());
    }
    remove() {
      __privateMethod(this, _J_instances, o_fn6).call(this), super.remove();
    }
    rebuild() {
      this.parent && (super.rebuild(), this.div !== null && (__privateMethod(this, _J_instances, h_fn8).call(this), __privateMethod(this, _J_instances, d_fn6).call(this, __privateGet(this, _t66).box), this.isAttachedToDOM || this.parent.add(this)));
    }
    setParent(t) {
      var _a29;
      let e = false;
      this.parent && !t ? (this._uiManager.removeShouldRescale(this), __privateMethod(this, _J_instances, o_fn6).call(this)) : t && (this._uiManager.addShouldRescale(this), __privateMethod(this, _J_instances, h_fn8).call(this, t), e = !this.parent && ((_a29 = this.div) == null ? void 0 : _a29.classList.contains("selectedEditor"))), super.setParent(t), e && this.select();
    }
    rotate() {
      this.parent && this.parent.drawLayer.updateProperties(this._drawId, _J._mergeSVGProperties({
        bbox: __privateMethod(this, _J_instances, f_fn6).call(this)
      }, __privateGet(this, _t66).updateRotation((this.parentRotation - this.rotation + 360) % 360)));
    }
    onScaleChanging() {
      this.parent && __privateMethod(this, _J_instances, d_fn6).call(this, __privateGet(this, _t66).updateParentDimensions(this.parentDimensions, this.parent.scale));
    }
    static onScaleChangingWhenDrawing() {
    }
    render() {
      if (this.div) return this.div;
      let t, e;
      this._isCopy && (t = this.x, e = this.y);
      const i = super.render();
      i.classList.add("draw");
      const s = document.createElement("div");
      return i.append(s), s.setAttribute("aria-hidden", "true"), s.className = "internal", this.setDims(), this._uiManager.addShouldRescale(this), this.disableEditing(), this._isCopy && this._moveAfterPaste(t, e), i;
    }
    static createDrawerInstance(t, e, i, s, n) {
      Z("Not implemented");
    }
    static startDrawing(t, e, i, s) {
      var _a29;
      const { target: n, offsetX: r, offsetY: a, pointerId: o, pointerType: l } = s;
      if (Q.isInitializedAndDifferentPointerType(l)) return;
      const { viewport: { rotation: h } } = t, { width: c, height: f } = n.getBoundingClientRect(), g = __privateSet(_J, _i33, new AbortController()), b = t.combinedSignal(g);
      if (Q.setPointer(l, o), window.addEventListener("pointerup", (m) => {
        Q.isSamePointerIdOrRemove(m.pointerId) && this._endDraw(m);
      }, {
        signal: b
      }), window.addEventListener("pointercancel", (m) => {
        Q.isSamePointerIdOrRemove(m.pointerId) && this._currentParent.endDrawingSession();
      }, {
        signal: b
      }), window.addEventListener("pointerdown", (m) => {
        Q.isSamePointerType(m.pointerType) && (Q.initializeAndAddPointerId(m.pointerId), __privateGet(_J, _s37).isCancellable() && (__privateGet(_J, _s37).removeLastElement(), __privateGet(_J, _s37).isEmpty() ? this._currentParent.endDrawingSession(true) : this._endDraw(null)));
      }, {
        capture: true,
        passive: false,
        signal: b
      }), window.addEventListener("contextmenu", Ft, {
        signal: b
      }), n.addEventListener("pointermove", this._drawMove.bind(this), {
        signal: b
      }), n.addEventListener("touchmove", (m) => {
        Q.isSameTimeStamp(m.timeStamp) && dt(m);
      }, {
        signal: b
      }), t.toggleDrawing(), (_a29 = e._editorUndoBar) == null ? void 0 : _a29.hide(), __privateGet(_J, _s37)) {
        t.drawLayer.updateProperties(this._currentDrawId, __privateGet(_J, _s37).startNew(r, a, c, f, h));
        return;
      }
      e.updateUIForDefaultProperties(this), __privateSet(_J, _s37, this.createDrawerInstance(r, a, c, f, h)), __privateSet(_J, _a24, this.getDefaultDrawingOptions()), this._currentParent = t, { id: this._currentDrawId } = t.drawLayer.draw(this._mergeSVGProperties(__privateGet(_J, _a24).toSVGProperties(), __privateGet(_J, _s37).defaultSVGProperties), true, false);
    }
    static _drawMove(t) {
      if (Q.isSameTimeStamp(t.timeStamp), !__privateGet(_J, _s37)) return;
      const { offsetX: e, offsetY: i, pointerId: s } = t;
      if (Q.isSamePointerId(s)) {
        if (Q.isUsingMultiplePointers()) {
          this._endDraw(t);
          return;
        }
        this._currentParent.drawLayer.updateProperties(this._currentDrawId, __privateGet(_J, _s37).add(e, i)), Q.setTimeStamp(t.timeStamp), dt(t);
      }
    }
    static _cleanup(t) {
      t && (this._currentDrawId = -1, this._currentParent = null, __privateSet(_J, _s37, null), __privateSet(_J, _a24, null), Q.clearTimeStamp()), __privateGet(_J, _i33) && (__privateGet(_J, _i33).abort(), __privateSet(_J, _i33, null), Q.clearPointerIds());
    }
    static _endDraw(t) {
      const e = this._currentParent;
      if (e) {
        if (e.toggleDrawing(true), this._cleanup(false), (t == null ? void 0 : t.target) === e.div && e.drawLayer.updateProperties(this._currentDrawId, __privateGet(_J, _s37).end(t.offsetX, t.offsetY)), this.supportMultipleDrawings) {
          const i = __privateGet(_J, _s37), s = this._currentDrawId, n = i.getLastElement();
          e.addCommands({
            cmd: () => {
              e.drawLayer.updateProperties(s, i.setLastElement(n));
            },
            undo: () => {
              e.drawLayer.updateProperties(s, i.removeLastElement());
            },
            mustExec: false,
            type: X.DRAW_STEP
          });
          return;
        }
        this.endDrawing(false);
      }
    }
    static endDrawing(t) {
      const e = this._currentParent;
      if (!e) return null;
      if (e.toggleDrawing(true), e.cleanUndoStack(X.DRAW_STEP), !__privateGet(_J, _s37).isEmpty()) {
        const { pageDimensions: [i, s], scale: n } = e, r = e.createAndAddNewEditor({
          offsetX: 0,
          offsetY: 0
        }, false, {
          drawId: this._currentDrawId,
          drawOutlines: __privateGet(_J, _s37).getOutlines(i * n, s * n, n, this._INNER_MARGIN),
          drawingOptions: __privateGet(_J, _a24),
          mustBeCommitted: !t
        });
        return this._cleanup(true), r;
      }
      return e.drawLayer.remove(this._currentDrawId), this._cleanup(true), null;
    }
    createDrawingOptions(t) {
    }
    static deserializeDraw(t, e, i, s, n, r) {
      Z("Not implemented");
    }
    static async deserialize(t, e, i) {
      var _a29, _b7;
      const { rawDims: { pageWidth: s, pageHeight: n, pageX: r, pageY: a } } = e.viewport, o = this.deserializeDraw(r, a, s, n, this._INNER_MARGIN, t), l = await super.deserialize(t, e, i);
      return l.createDrawingOptions(t), __privateMethod(_a29 = l, _J_instances, r_fn4).call(_a29, {
        drawOutlines: o
      }), __privateMethod(_b7 = l, _J_instances, h_fn8).call(_b7), l.onScaleChanging(), l.rotate(), l;
    }
    serializeDraw(t) {
      const [e, i] = this.pageTranslation, [s, n] = this.pageDimensions;
      return __privateGet(this, _t66).serialize([
        e,
        i,
        s,
        n
      ], t);
    }
    renderAnnotationElement(t) {
      return t.updateEdited({
        rect: this.getPDFRect()
      }), null;
    }
    static canCreateNewEmptyEditor() {
      return false;
    }
  };
  _t66 = new WeakMap();
  _e47 = new WeakMap();
  _s37 = new WeakMap();
  _i33 = new WeakMap();
  _a24 = new WeakMap();
  _J_instances = new WeakSet();
  r_fn4 = function({ drawOutlines: t, drawId: e, drawingOptions: i }) {
    __privateSet(this, _t66, t), this._drawingOptions || (this._drawingOptions = i), this.annotationElementId || this._uiManager.a11yAlert(`pdfjs-editor-${this.editorType}-added-alert`), e >= 0 ? (this._drawId = e, this.parent.drawLayer.finalizeDraw(e, t.defaultProperties)) : this._drawId = __privateMethod(this, _J_instances, n_fn3).call(this, t, this.parent), __privateMethod(this, _J_instances, d_fn6).call(this, t.box);
  };
  n_fn3 = function(t, e) {
    const { id: i } = e.drawLayer.draw(_J._mergeSVGProperties(this._drawingOptions.toSVGProperties(), t.defaultSVGProperties), false, false);
    return i;
  };
  o_fn6 = function() {
    this._drawId === null || !this.parent || (this.parent.drawLayer.remove(this._drawId), this._drawId = null, this._drawingOptions.reset());
  };
  h_fn8 = function(t = this.parent) {
    if (!(this._drawId !== null && this.parent === t)) {
      if (this._drawId !== null) {
        this.parent.drawLayer.updateParent(this._drawId, t.drawLayer);
        return;
      }
      this._drawingOptions.updateAll(), this._drawId = __privateMethod(this, _J_instances, n_fn3).call(this, __privateGet(this, _t66), t);
    }
  };
  l_fn9 = function([t, e, i, s]) {
    const { parentDimensions: [n, r], rotation: a } = this;
    switch (a) {
      case 90:
        return [
          e,
          1 - t,
          i * (r / n),
          s * (n / r)
        ];
      case 180:
        return [
          1 - t,
          1 - e,
          i,
          s
        ];
      case 270:
        return [
          1 - e,
          t,
          i * (r / n),
          s * (n / r)
        ];
      default:
        return [
          t,
          e,
          i,
          s
        ];
    }
  };
  u_fn9 = function() {
    const { x: t, y: e, width: i, height: s, parentDimensions: [n, r], rotation: a } = this;
    switch (a) {
      case 90:
        return [
          1 - e,
          t,
          i * (n / r),
          s * (r / n)
        ];
      case 180:
        return [
          1 - t,
          1 - e,
          i,
          s
        ];
      case 270:
        return [
          e,
          1 - t,
          i * (n / r),
          s * (r / n)
        ];
      default:
        return [
          t,
          e,
          i,
          s
        ];
    }
  };
  d_fn6 = function(t) {
    [this.x, this.y, this.width, this.height] = __privateMethod(this, _J_instances, l_fn9).call(this, t), this.div && (this.fixAndSetPosition(), this.setDims()), this._onResized();
  };
  f_fn6 = function() {
    const { x: t, y: e, width: i, height: s, rotation: n, parentRotation: r, parentDimensions: [a, o] } = this;
    switch ((n * 4 + r) / 90) {
      case 1:
        return [
          1 - e - s,
          t,
          s,
          i
        ];
      case 2:
        return [
          1 - t - i,
          1 - e - s,
          i,
          s
        ];
      case 3:
        return [
          e,
          1 - t - i,
          s,
          i
        ];
      case 4:
        return [
          t,
          e - i * (a / o),
          s * (o / a),
          i * (a / o)
        ];
      case 5:
        return [
          1 - e,
          t,
          i * (a / o),
          s * (o / a)
        ];
      case 6:
        return [
          1 - t - s * (o / a),
          1 - e,
          s * (o / a),
          i * (a / o)
        ];
      case 7:
        return [
          e - i * (a / o),
          1 - t - s * (o / a),
          i * (a / o),
          s * (o / a)
        ];
      case 8:
        return [
          t - i,
          e - s,
          i,
          s
        ];
      case 9:
        return [
          1 - e,
          t - i,
          s,
          i
        ];
      case 10:
        return [
          1 - t,
          1 - e,
          i,
          s
        ];
      case 11:
        return [
          e - s,
          1 - t,
          s,
          i
        ];
      case 12:
        return [
          t - s * (o / a),
          e,
          s * (o / a),
          i * (a / o)
        ];
      case 13:
        return [
          1 - e - i * (a / o),
          t - s * (o / a),
          i * (a / o),
          s * (o / a)
        ];
      case 14:
        return [
          1 - t,
          1 - e - i * (a / o),
          s * (o / a),
          i * (a / o)
        ];
      case 15:
        return [
          e,
          1 - t,
          i * (a / o),
          s * (o / a)
        ];
      default:
        return [
          t,
          e,
          i,
          s
        ];
    }
  };
  __publicField(_J, "_currentDrawId", -1);
  __publicField(_J, "_currentParent", null);
  __privateAdd(_J, _s37, null);
  __privateAdd(_J, _i33, null);
  __privateAdd(_J, _a24, null);
  __publicField(_J, "_INNER_MARGIN", 3);
  let J = _J;
  class Aa {
    constructor(t, e, i, s, n, r) {
      __privateAdd(this, _Aa_instances);
      __privateAdd(this, _t67, new Float64Array(6));
      __privateAdd(this, _e48);
      __privateAdd(this, _s38);
      __privateAdd(this, _i34);
      __privateAdd(this, _a25);
      __privateAdd(this, _r22);
      __privateAdd(this, _n22, "");
      __privateAdd(this, _o17, 0);
      __privateAdd(this, _h14, new Be());
      __privateAdd(this, _l13);
      __privateAdd(this, _u11);
      __privateSet(this, _l13, i), __privateSet(this, _u11, s), __privateSet(this, _i34, n), __privateSet(this, _a25, r), [t, e] = __privateMethod(this, _Aa_instances, d_fn7).call(this, t, e);
      const a = __privateSet(this, _e48, [
        NaN,
        NaN,
        NaN,
        NaN,
        t,
        e
      ]);
      __privateSet(this, _r22, [
        t,
        e
      ]), __privateSet(this, _s38, [
        {
          line: a,
          points: __privateGet(this, _r22)
        }
      ]), __privateGet(this, _t67).set(a, 0);
    }
    updateProperty(t, e) {
      t === "stroke-width" && __privateSet(this, _a25, e);
    }
    isEmpty() {
      return !__privateGet(this, _s38) || __privateGet(this, _s38).length === 0;
    }
    isCancellable() {
      return __privateGet(this, _r22).length <= 10;
    }
    add(t, e) {
      [t, e] = __privateMethod(this, _Aa_instances, d_fn7).call(this, t, e);
      const [i, s, n, r] = __privateGet(this, _t67).subarray(2, 6), a = t - n, o = e - r;
      return Math.hypot(__privateGet(this, _l13) * a, __privateGet(this, _u11) * o) <= 2 ? null : (__privateGet(this, _r22).push(t, e), isNaN(i) ? (__privateGet(this, _t67).set([
        n,
        r,
        t,
        e
      ], 2), __privateGet(this, _e48).push(NaN, NaN, NaN, NaN, t, e), {
        path: {
          d: this.toSVGPath()
        }
      }) : (isNaN(__privateGet(this, _t67)[0]) && __privateGet(this, _e48).splice(6, 6), __privateGet(this, _t67).set([
        i,
        s,
        n,
        r,
        t,
        e
      ], 0), __privateGet(this, _e48).push(...F.createBezierPoints(i, s, n, r, t, e)), {
        path: {
          d: this.toSVGPath()
        }
      }));
    }
    end(t, e) {
      const i = this.add(t, e);
      return i || (__privateGet(this, _r22).length === 2 ? {
        path: {
          d: this.toSVGPath()
        }
      } : null);
    }
    startNew(t, e, i, s, n) {
      __privateSet(this, _l13, i), __privateSet(this, _u11, s), __privateSet(this, _i34, n), [t, e] = __privateMethod(this, _Aa_instances, d_fn7).call(this, t, e);
      const r = __privateSet(this, _e48, [
        NaN,
        NaN,
        NaN,
        NaN,
        t,
        e
      ]);
      __privateSet(this, _r22, [
        t,
        e
      ]);
      const a = __privateGet(this, _s38).at(-1);
      return a && (a.line = new Float32Array(a.line), a.points = new Float32Array(a.points)), __privateGet(this, _s38).push({
        line: r,
        points: __privateGet(this, _r22)
      }), __privateGet(this, _t67).set(r, 0), __privateSet(this, _o17, 0), this.toSVGPath(), null;
    }
    getLastElement() {
      return __privateGet(this, _s38).at(-1);
    }
    setLastElement(t) {
      return __privateGet(this, _s38) ? (__privateGet(this, _s38).push(t), __privateSet(this, _e48, t.line), __privateSet(this, _r22, t.points), __privateSet(this, _o17, 0), {
        path: {
          d: this.toSVGPath()
        }
      }) : __privateGet(this, _h14).setLastElement(t);
    }
    removeLastElement() {
      if (!__privateGet(this, _s38)) return __privateGet(this, _h14).removeLastElement();
      __privateGet(this, _s38).pop(), __privateSet(this, _n22, "");
      for (let t = 0, e = __privateGet(this, _s38).length; t < e; t++) {
        const { line: i, points: s } = __privateGet(this, _s38)[t];
        __privateSet(this, _e48, i), __privateSet(this, _r22, s), __privateSet(this, _o17, 0), this.toSVGPath();
      }
      return {
        path: {
          d: __privateGet(this, _n22)
        }
      };
    }
    toSVGPath() {
      const t = F.svgRound(__privateGet(this, _e48)[4]), e = F.svgRound(__privateGet(this, _e48)[5]);
      if (__privateGet(this, _r22).length === 2) return __privateSet(this, _n22, `${__privateGet(this, _n22)} M ${t} ${e} Z`), __privateGet(this, _n22);
      if (__privateGet(this, _r22).length <= 6) {
        const s = __privateGet(this, _n22).lastIndexOf("M");
        __privateSet(this, _n22, `${__privateGet(this, _n22).slice(0, s)} M ${t} ${e}`), __privateSet(this, _o17, 6);
      }
      if (__privateGet(this, _r22).length === 4) {
        const s = F.svgRound(__privateGet(this, _e48)[10]), n = F.svgRound(__privateGet(this, _e48)[11]);
        return __privateSet(this, _n22, `${__privateGet(this, _n22)} L ${s} ${n}`), __privateSet(this, _o17, 12), __privateGet(this, _n22);
      }
      const i = [];
      __privateGet(this, _o17) === 0 && (i.push(`M ${t} ${e}`), __privateSet(this, _o17, 6));
      for (let s = __privateGet(this, _o17), n = __privateGet(this, _e48).length; s < n; s += 6) {
        const [r, a, o, l, h, c] = __privateGet(this, _e48).slice(s, s + 6).map(F.svgRound);
        i.push(`C${r} ${a} ${o} ${l} ${h} ${c}`);
      }
      return __privateSet(this, _n22, __privateGet(this, _n22) + i.join(" ")), __privateSet(this, _o17, __privateGet(this, _e48).length), __privateGet(this, _n22);
    }
    getOutlines(t, e, i, s) {
      const n = __privateGet(this, _s38).at(-1);
      return n.line = new Float32Array(n.line), n.points = new Float32Array(n.points), __privateGet(this, _h14).build(__privateGet(this, _s38), t, e, i, __privateGet(this, _i34), __privateGet(this, _a25), s), __privateSet(this, _t67, null), __privateSet(this, _e48, null), __privateSet(this, _s38, null), __privateSet(this, _n22, null), __privateGet(this, _h14);
    }
    get defaultSVGProperties() {
      return {
        root: {
          viewBox: "0 0 10000 10000"
        },
        rootClass: {
          draw: true
        },
        bbox: [
          0,
          0,
          1,
          1
        ]
      };
    }
  }
  _t67 = new WeakMap();
  _e48 = new WeakMap();
  _s38 = new WeakMap();
  _i34 = new WeakMap();
  _a25 = new WeakMap();
  _r22 = new WeakMap();
  _n22 = new WeakMap();
  _o17 = new WeakMap();
  _h14 = new WeakMap();
  _l13 = new WeakMap();
  _u11 = new WeakMap();
  _Aa_instances = new WeakSet();
  d_fn7 = function(t, e) {
    return F._normalizePoint(t, e, __privateGet(this, _l13), __privateGet(this, _u11), __privateGet(this, _i34));
  };
  class Be extends F {
    constructor() {
      super(...arguments);
      __privateAdd(this, _Be_instances);
      __privateAdd(this, _t68);
      __privateAdd(this, _e49, 0);
      __privateAdd(this, _s39);
      __privateAdd(this, _i35);
      __privateAdd(this, _a26);
      __privateAdd(this, _r23);
      __privateAdd(this, _n23);
      __privateAdd(this, _o18);
      __privateAdd(this, _h15);
    }
    build(t, e, i, s, n, r, a) {
      __privateSet(this, _a26, e), __privateSet(this, _r23, i), __privateSet(this, _n23, s), __privateSet(this, _o18, n), __privateSet(this, _h15, r), __privateSet(this, _s39, a ?? 0), __privateSet(this, _i35, t), __privateMethod(this, _Be_instances, d_fn8).call(this);
    }
    get thickness() {
      return __privateGet(this, _h15);
    }
    setLastElement(t) {
      return __privateGet(this, _i35).push(t), {
        path: {
          d: this.toSVGPath()
        }
      };
    }
    removeLastElement() {
      return __privateGet(this, _i35).pop(), {
        path: {
          d: this.toSVGPath()
        }
      };
    }
    toSVGPath() {
      const t = [];
      for (const { line: e } of __privateGet(this, _i35)) {
        if (t.push(`M${F.svgRound(e[4])} ${F.svgRound(e[5])}`), e.length === 6) {
          t.push("Z");
          continue;
        }
        if (e.length === 12 && isNaN(e[6])) {
          t.push(`L${F.svgRound(e[10])} ${F.svgRound(e[11])}`);
          continue;
        }
        for (let i = 6, s = e.length; i < s; i += 6) {
          const [n, r, a, o, l, h] = e.subarray(i, i + 6).map(F.svgRound);
          t.push(`C${n} ${r} ${a} ${o} ${l} ${h}`);
        }
      }
      return t.join("");
    }
    serialize([t, e, i, s], n) {
      const r = [], a = [], [o, l, h, c] = __privateMethod(this, _Be_instances, u_fn10).call(this);
      let f, g, b, m, w, A, S, E, C;
      switch (__privateGet(this, _o18)) {
        case 0:
          C = F._rescale, f = t, g = e + s, b = i, m = -s, w = t + o * i, A = e + (1 - l - c) * s, S = t + (o + h) * i, E = e + (1 - l) * s;
          break;
        case 90:
          C = F._rescaleAndSwap, f = t, g = e, b = i, m = s, w = t + l * i, A = e + o * s, S = t + (l + c) * i, E = e + (o + h) * s;
          break;
        case 180:
          C = F._rescale, f = t + i, g = e, b = -i, m = s, w = t + (1 - o - h) * i, A = e + l * s, S = t + (1 - o) * i, E = e + (l + c) * s;
          break;
        case 270:
          C = F._rescaleAndSwap, f = t + i, g = e + s, b = -i, m = -s, w = t + (1 - l - c) * i, A = e + (1 - o - h) * s, S = t + (1 - l) * i, E = e + (1 - o) * s;
          break;
      }
      for (const { line: x, points: T } of __privateGet(this, _i35)) r.push(C(x, f, g, b, m, n ? new Array(x.length) : null)), a.push(C(T, f, g, b, m, n ? new Array(T.length) : null));
      return {
        lines: r,
        points: a,
        rect: [
          w,
          A,
          S,
          E
        ]
      };
    }
    static deserialize(t, e, i, s, n, { paths: { lines: r, points: a }, rotation: o, thickness: l }) {
      const h = [];
      let c, f, g, b, m;
      switch (o) {
        case 0:
          m = F._rescale, c = -t / i, f = e / s + 1, g = 1 / i, b = -1 / s;
          break;
        case 90:
          m = F._rescaleAndSwap, c = -e / s, f = -t / i, g = 1 / s, b = 1 / i;
          break;
        case 180:
          m = F._rescale, c = t / i + 1, f = -e / s, g = -1 / i, b = 1 / s;
          break;
        case 270:
          m = F._rescaleAndSwap, c = e / s + 1, f = t / i + 1, g = -1 / s, b = -1 / i;
          break;
      }
      if (!r) {
        r = [];
        for (const A of a) {
          const S = A.length;
          if (S === 2) {
            r.push(new Float32Array([
              NaN,
              NaN,
              NaN,
              NaN,
              A[0],
              A[1]
            ]));
            continue;
          }
          if (S === 4) {
            r.push(new Float32Array([
              NaN,
              NaN,
              NaN,
              NaN,
              A[0],
              A[1],
              NaN,
              NaN,
              NaN,
              NaN,
              A[2],
              A[3]
            ]));
            continue;
          }
          const E = new Float32Array(3 * (S - 2));
          r.push(E);
          let [C, x, T, k] = A.subarray(0, 4);
          E.set([
            NaN,
            NaN,
            NaN,
            NaN,
            C,
            x
          ], 0);
          for (let I = 4; I < S; I += 2) {
            const D = A[I], B = A[I + 1];
            E.set(F.createBezierPoints(C, x, T, k, D, B), (I - 2) * 3), [C, x, T, k] = [
              T,
              k,
              D,
              B
            ];
          }
        }
      }
      for (let A = 0, S = r.length; A < S; A++) h.push({
        line: m(r[A].map((E) => E ?? NaN), c, f, g, b),
        points: m(a[A].map((E) => E ?? NaN), c, f, g, b)
      });
      const w = new this.prototype.constructor();
      return w.build(h, i, s, 1, o, l, n), w;
    }
    get box() {
      return __privateGet(this, _t68);
    }
    updateProperty(t, e) {
      return t === "stroke-width" ? __privateMethod(this, _Be_instances, f_fn7).call(this, e) : null;
    }
    updateParentDimensions([t, e], i) {
      const [s, n] = __privateMethod(this, _Be_instances, l_fn10).call(this);
      __privateSet(this, _a26, t), __privateSet(this, _r23, e), __privateSet(this, _n23, i);
      const [r, a] = __privateMethod(this, _Be_instances, l_fn10).call(this), o = r - s, l = a - n, h = __privateGet(this, _t68);
      return h[0] -= o, h[1] -= l, h[2] += 2 * o, h[3] += 2 * l, h;
    }
    updateRotation(t) {
      return __privateSet(this, _e49, t), {
        path: {
          transform: this.rotationTransform
        }
      };
    }
    get viewBox() {
      return __privateGet(this, _t68).map(F.svgRound).join(" ");
    }
    get defaultProperties() {
      const [t, e] = __privateGet(this, _t68);
      return {
        root: {
          viewBox: this.viewBox
        },
        path: {
          "transform-origin": `${F.svgRound(t)} ${F.svgRound(e)}`
        }
      };
    }
    get rotationTransform() {
      const [, , t, e] = __privateGet(this, _t68);
      let i = 0, s = 0, n = 0, r = 0, a = 0, o = 0;
      switch (__privateGet(this, _e49)) {
        case 90:
          s = e / t, n = -t / e, a = t;
          break;
        case 180:
          i = -1, r = -1, a = t, o = e;
          break;
        case 270:
          s = -e / t, n = t / e, o = e;
          break;
        default:
          return "";
      }
      return `matrix(${i} ${s} ${n} ${r} ${F.svgRound(a)} ${F.svgRound(o)})`;
    }
    getPathResizingSVGProperties([t, e, i, s]) {
      const [n, r] = __privateMethod(this, _Be_instances, l_fn10).call(this), [a, o, l, h] = __privateGet(this, _t68);
      if (Math.abs(l - n) <= F.PRECISION || Math.abs(h - r) <= F.PRECISION) {
        const m = t + i / 2 - (a + l / 2), w = e + s / 2 - (o + h / 2);
        return {
          path: {
            "transform-origin": `${F.svgRound(t)} ${F.svgRound(e)}`,
            transform: `${this.rotationTransform} translate(${m} ${w})`
          }
        };
      }
      const c = (i - 2 * n) / (l - 2 * n), f = (s - 2 * r) / (h - 2 * r), g = l / i, b = h / s;
      return {
        path: {
          "transform-origin": `${F.svgRound(a)} ${F.svgRound(o)}`,
          transform: `${this.rotationTransform} scale(${g} ${b}) translate(${F.svgRound(n)} ${F.svgRound(r)}) scale(${c} ${f}) translate(${F.svgRound(-n)} ${F.svgRound(-r)})`
        }
      };
    }
    getPathResizedSVGProperties([t, e, i, s]) {
      const [n, r] = __privateMethod(this, _Be_instances, l_fn10).call(this), a = __privateGet(this, _t68), [o, l, h, c] = a;
      if (a[0] = t, a[1] = e, a[2] = i, a[3] = s, Math.abs(h - n) <= F.PRECISION || Math.abs(c - r) <= F.PRECISION) {
        const w = t + i / 2 - (o + h / 2), A = e + s / 2 - (l + c / 2);
        for (const { line: S, points: E } of __privateGet(this, _i35)) F._translate(S, w, A, S), F._translate(E, w, A, E);
        return {
          root: {
            viewBox: this.viewBox
          },
          path: {
            "transform-origin": `${F.svgRound(t)} ${F.svgRound(e)}`,
            transform: this.rotationTransform || null,
            d: this.toSVGPath()
          }
        };
      }
      const f = (i - 2 * n) / (h - 2 * n), g = (s - 2 * r) / (c - 2 * r), b = -f * (o + n) + t + n, m = -g * (l + r) + e + r;
      if (f !== 1 || g !== 1 || b !== 0 || m !== 0) for (const { line: w, points: A } of __privateGet(this, _i35)) F._rescale(w, b, m, f, g, w), F._rescale(A, b, m, f, g, A);
      return {
        root: {
          viewBox: this.viewBox
        },
        path: {
          "transform-origin": `${F.svgRound(t)} ${F.svgRound(e)}`,
          transform: this.rotationTransform || null,
          d: this.toSVGPath()
        }
      };
    }
    getPathTranslatedSVGProperties([t, e], i) {
      const [s, n] = i, r = __privateGet(this, _t68), a = t - r[0], o = e - r[1];
      if (__privateGet(this, _a26) === s && __privateGet(this, _r23) === n) for (const { line: l, points: h } of __privateGet(this, _i35)) F._translate(l, a, o, l), F._translate(h, a, o, h);
      else {
        const l = __privateGet(this, _a26) / s, h = __privateGet(this, _r23) / n;
        __privateSet(this, _a26, s), __privateSet(this, _r23, n);
        for (const { line: c, points: f } of __privateGet(this, _i35)) F._rescale(c, a, o, l, h, c), F._rescale(f, a, o, l, h, f);
        r[2] *= l, r[3] *= h;
      }
      return r[0] = t, r[1] = e, {
        root: {
          viewBox: this.viewBox
        },
        path: {
          d: this.toSVGPath(),
          "transform-origin": `${F.svgRound(t)} ${F.svgRound(e)}`
        }
      };
    }
    get defaultSVGProperties() {
      const t = __privateGet(this, _t68);
      return {
        root: {
          viewBox: this.viewBox
        },
        rootClass: {
          draw: true
        },
        path: {
          d: this.toSVGPath(),
          "transform-origin": `${F.svgRound(t[0])} ${F.svgRound(t[1])}`,
          transform: this.rotationTransform || null
        },
        bbox: t
      };
    }
  }
  _t68 = new WeakMap();
  _e49 = new WeakMap();
  _s39 = new WeakMap();
  _i35 = new WeakMap();
  _a26 = new WeakMap();
  _r23 = new WeakMap();
  _n23 = new WeakMap();
  _o18 = new WeakMap();
  _h15 = new WeakMap();
  _Be_instances = new WeakSet();
  l_fn10 = function(t = __privateGet(this, _h15)) {
    const e = __privateGet(this, _s39) + t / 2 * __privateGet(this, _n23);
    return __privateGet(this, _o18) % 180 === 0 ? [
      e / __privateGet(this, _a26),
      e / __privateGet(this, _r23)
    ] : [
      e / __privateGet(this, _r23),
      e / __privateGet(this, _a26)
    ];
  };
  u_fn10 = function() {
    const [t, e, i, s] = __privateGet(this, _t68), [n, r] = __privateMethod(this, _Be_instances, l_fn10).call(this, 0);
    return [
      t + n,
      e + r,
      i - 2 * n,
      s - 2 * r
    ];
  };
  d_fn8 = function() {
    const t = __privateSet(this, _t68, new Float32Array([
      1 / 0,
      1 / 0,
      -1 / 0,
      -1 / 0
    ]));
    for (const { line: s } of __privateGet(this, _i35)) {
      if (s.length <= 12) {
        for (let a = 4, o = s.length; a < o; a += 6) R.pointBoundingBox(s[a], s[a + 1], t);
        continue;
      }
      let n = s[4], r = s[5];
      for (let a = 6, o = s.length; a < o; a += 6) {
        const [l, h, c, f, g, b] = s.subarray(a, a + 6);
        R.bezierBoundingBox(n, r, l, h, c, f, g, b, t), n = g, r = b;
      }
    }
    const [e, i] = __privateMethod(this, _Be_instances, l_fn10).call(this);
    t[0] = At(t[0] - e, 0, 1), t[1] = At(t[1] - i, 0, 1), t[2] = At(t[2] + e, 0, 1), t[3] = At(t[3] + i, 0, 1), t[2] -= t[0], t[3] -= t[1];
  };
  f_fn7 = function(t) {
    const [e, i] = __privateMethod(this, _Be_instances, l_fn10).call(this);
    __privateSet(this, _h15, t);
    const [s, n] = __privateMethod(this, _Be_instances, l_fn10).call(this), [r, a] = [
      s - e,
      n - i
    ], o = __privateGet(this, _t68);
    return o[0] -= r, o[1] -= a, o[2] += 2 * r, o[3] += 2 * a, o;
  };
  class ui extends pn {
    constructor(t) {
      super(), this._viewParameters = t, super.updateProperties({
        fill: "none",
        stroke: U._defaultLineColor,
        "stroke-opacity": 1,
        "stroke-width": 1,
        "stroke-linecap": "round",
        "stroke-linejoin": "round",
        "stroke-miterlimit": 10
      });
    }
    updateSVGProperty(t, e) {
      t === "stroke-width" && (e ?? (e = this["stroke-width"]), e *= this._viewParameters.realScale), super.updateSVGProperty(t, e);
    }
    clone() {
      const t = new ui(this._viewParameters);
      return t.updateAll(this), t;
    }
  }
  const _ts = class _ts extends J {
    constructor(t) {
      super({
        ...t,
        name: "inkEditor"
      });
      __privateAdd(this, _ts_instances);
      this._willKeepAspectRatio = true, this.defaultL10nId = "pdfjs-editor-ink-editor";
    }
    static initialize(t, e) {
      U.initialize(t, e), this._defaultDrawingOptions = new ui(e.viewParameters);
    }
    static getDefaultDrawingOptions(t) {
      const e = this._defaultDrawingOptions.clone();
      return e.updateProperties(t), e;
    }
    static get supportMultipleDrawings() {
      return true;
    }
    static get typesMap() {
      return H(this, "typesMap", /* @__PURE__ */ new Map([
        [
          X.INK_THICKNESS,
          "stroke-width"
        ],
        [
          X.INK_COLOR,
          "stroke"
        ],
        [
          X.INK_OPACITY,
          "stroke-opacity"
        ]
      ]));
    }
    static createDrawerInstance(t, e, i, s, n) {
      return new Aa(t, e, i, s, n, this._defaultDrawingOptions["stroke-width"]);
    }
    static deserializeDraw(t, e, i, s, n, r) {
      return Be.deserialize(t, e, i, s, n, r);
    }
    static async deserialize(t, e, i) {
      let s = null;
      if (t instanceof Qi) {
        const { data: { inkLists: r, rect: a, rotation: o, id: l, color: h, opacity: c, borderStyle: { rawWidth: f }, popupRef: g, richText: b, contentsObj: m, creationDate: w, modificationDate: A }, parent: { page: { pageNumber: S } } } = t;
        s = t = {
          annotationType: $.INK,
          color: Array.from(h),
          thickness: f,
          opacity: c,
          paths: {
            points: r
          },
          boxes: null,
          pageIndex: S - 1,
          rect: a.slice(0),
          rotation: o,
          annotationElementId: l,
          id: l,
          deleted: false,
          popupRef: g,
          richText: b,
          comment: (m == null ? void 0 : m.str) || null,
          creationDate: w,
          modificationDate: A
        };
      }
      const n = await super.deserialize(t, e, i);
      return n._initialData = s, t.comment && n.setCommentData(t), n;
    }
    get toolbarButtons() {
      return this._colorPicker || (this._colorPicker = new Ie(this)), [
        [
          "colorPicker",
          this._colorPicker
        ]
      ];
    }
    get colorType() {
      return X.INK_COLOR;
    }
    get color() {
      return this._drawingOptions.stroke;
    }
    get opacity() {
      return this._drawingOptions["stroke-opacity"];
    }
    onScaleChanging() {
      if (!this.parent) return;
      super.onScaleChanging();
      const { _drawId: t, _drawingOptions: e, parent: i } = this;
      e.updateSVGProperty("stroke-width"), i.drawLayer.updateProperties(t, e.toSVGProperties());
    }
    static onScaleChangingWhenDrawing() {
      const t = this._currentParent;
      t && (super.onScaleChangingWhenDrawing(), this._defaultDrawingOptions.updateSVGProperty("stroke-width"), t.drawLayer.updateProperties(this._currentDrawId, this._defaultDrawingOptions.toSVGProperties()));
    }
    createDrawingOptions({ color: t, thickness: e, opacity: i }) {
      this._drawingOptions = _ts.getDefaultDrawingOptions({
        stroke: R.makeHexColor(...t),
        "stroke-width": e,
        "stroke-opacity": i
      });
    }
    serialize(t = false) {
      if (this.isEmpty()) return null;
      if (this.deleted) return this.serializeDeleted();
      const { lines: e, points: i } = this.serializeDraw(t), { _drawingOptions: { stroke: s, "stroke-opacity": n, "stroke-width": r } } = this, a = Object.assign(super.serialize(t), {
        color: U._colorManager.convert(s),
        opacity: n,
        thickness: r,
        paths: {
          lines: e,
          points: i
        }
      });
      return this.addComment(a), t ? (a.isCopy = true, a) : this.annotationElementId && !__privateMethod(this, _ts_instances, t_fn7).call(this, a) ? null : (a.id = this.annotationElementId, a);
    }
    renderAnnotationElement(t) {
      if (this.deleted) return t.hide(), null;
      const { points: e, rect: i } = this.serializeDraw(false);
      return t.updateEdited({
        rect: i,
        thickness: this._drawingOptions["stroke-width"],
        points: e,
        popup: this.comment
      }), null;
    }
  };
  _ts_instances = new WeakSet();
  t_fn7 = function(t) {
    const { color: e, thickness: i, opacity: s, pageIndex: n } = this._initialData;
    return this.hasEditedComment || this._hasBeenMoved || this._hasBeenResized || t.color.some((r, a) => r !== e[a]) || t.thickness !== i || t.opacity !== s || t.pageIndex !== n;
  };
  __publicField(_ts, "_type", "ink");
  __publicField(_ts, "_editorType", $.INK);
  __publicField(_ts, "_defaultDrawingOptions", null);
  let ts = _ts;
  class Hi extends Be {
    toSVGPath() {
      let t = super.toSVGPath();
      return t.endsWith("Z") || (t += "Z"), t;
    }
  }
  const Ye = 8, ve = 3;
  he = (_m8 = class {
    static extractContoursFromText(t, { fontFamily: e, fontStyle: i, fontWeight: s }, n, r, a, o) {
      let l = new OffscreenCanvas(1, 1), h = l.getContext("2d", {
        alpha: false
      });
      const c = 200, f = h.font = `${i} ${s} ${c}px ${e}`, { actualBoundingBoxLeft: g, actualBoundingBoxRight: b, actualBoundingBoxAscent: m, actualBoundingBoxDescent: w, fontBoundingBoxAscent: A, fontBoundingBoxDescent: S, width: E } = h.measureText(t), C = 1.5, x = Math.ceil(Math.max(Math.abs(g) + Math.abs(b) || 0, E) * C), T = Math.ceil(Math.max(Math.abs(m) + Math.abs(w) || c, Math.abs(A) + Math.abs(S) || c) * C);
      l = new OffscreenCanvas(x, T), h = l.getContext("2d", {
        alpha: true,
        willReadFrequently: true
      }), h.font = f, h.filter = "grayscale(1)", h.fillStyle = "white", h.fillRect(0, 0, x, T), h.fillStyle = "black", h.fillText(t, x * (C - 1) / 2, T * (3 - C) / 2);
      const k = __privateMethod(this, _he_static, u_fn11).call(this, h.getImageData(0, 0, x, T).data), I = __privateMethod(this, _he_static, l_fn11).call(this, k), D = __privateMethod(this, _he_static, d_fn9).call(this, I), B = __privateMethod(this, _he_static, r_fn5).call(this, k, x, T, D);
      return this.processDrawnLines({
        lines: {
          curves: B,
          width: x,
          height: T
        },
        pageWidth: n,
        pageHeight: r,
        rotation: a,
        innerMargin: o,
        mustSmooth: true,
        areContours: true
      });
    }
    static process(t, e, i, s, n) {
      const [r, a, o] = __privateMethod(this, _he_static, f_fn8).call(this, t), [l, h] = __privateMethod(this, _he_static, h_fn9).call(this, r, a, o, Math.hypot(a, o) * __privateGet(this, _t69).sigmaSFactor, __privateGet(this, _t69).sigmaR, __privateGet(this, _t69).kernelSize), c = __privateMethod(this, _he_static, d_fn9).call(this, h), f = __privateMethod(this, _he_static, r_fn5).call(this, l, a, o, c);
      return this.processDrawnLines({
        lines: {
          curves: f,
          width: a,
          height: o
        },
        pageWidth: e,
        pageHeight: i,
        rotation: s,
        innerMargin: n,
        mustSmooth: true,
        areContours: true
      });
    }
    static processDrawnLines({ lines: t, pageWidth: e, pageHeight: i, rotation: s, innerMargin: n, mustSmooth: r, areContours: a }) {
      s % 180 !== 0 && ([e, i] = [
        i,
        e
      ]);
      const { curves: o, width: l, height: h } = t, c = t.thickness ?? 0, f = [], g = Math.min(e / l, i / h), b = g / e, m = g / i, w = [];
      for (const { points: S } of o) {
        const E = r ? __privateMethod(this, _he_static, o_fn7).call(this, S) : S;
        if (!E) continue;
        w.push(E);
        const C = E.length, x = new Float32Array(C), T = new Float32Array(3 * (C === 2 ? 2 : C - 2));
        if (f.push({
          line: T,
          points: x
        }), C === 2) {
          x[0] = E[0] * b, x[1] = E[1] * m, T.set([
            NaN,
            NaN,
            NaN,
            NaN,
            x[0],
            x[1]
          ], 0);
          continue;
        }
        let [k, I, D, B] = E;
        k *= b, I *= m, D *= b, B *= m, x.set([
          k,
          I,
          D,
          B
        ], 0), T.set([
          NaN,
          NaN,
          NaN,
          NaN,
          k,
          I
        ], 0);
        for (let L = 4; L < C; L += 2) {
          const Y = x[L] = E[L] * b, tt = x[L + 1] = E[L + 1] * m;
          T.set(F.createBezierPoints(k, I, D, B, Y, tt), (L - 2) * 3), [k, I, D, B] = [
            D,
            B,
            Y,
            tt
          ];
        }
      }
      if (f.length === 0) return null;
      const A = a ? new Hi() : new Be();
      return A.build(f, e, i, 1, s, a ? 0 : c, n), {
        outline: A,
        newCurves: w,
        areContours: a,
        thickness: c,
        width: l,
        height: h
      };
    }
    static async compressSignature({ outlines: t, areContours: e, thickness: i, width: s, height: n }) {
      let r = 1 / 0, a = -1 / 0, o = 0;
      for (const E of t) {
        o += E.length;
        for (let C = 2, x = E.length; C < x; C++) {
          const T = E[C] - E[C - 2];
          r = Math.min(r, T), a = Math.max(a, T);
        }
      }
      let l;
      r >= -128 && a <= 127 ? l = Int8Array : r >= -32768 && a <= 32767 ? l = Int16Array : l = Int32Array;
      const h = t.length, c = Ye + ve * h, f = new Uint32Array(c);
      let g = 0;
      f[g++] = c * Uint32Array.BYTES_PER_ELEMENT + (o - 2 * h) * l.BYTES_PER_ELEMENT, f[g++] = 0, f[g++] = s, f[g++] = n, f[g++] = e ? 0 : 1, f[g++] = Math.max(0, Math.floor(i ?? 0)), f[g++] = h, f[g++] = l.BYTES_PER_ELEMENT;
      for (const E of t) f[g++] = E.length - 2, f[g++] = E[0], f[g++] = E[1];
      const b = new CompressionStream("deflate-raw"), m = b.writable.getWriter();
      await m.ready, m.write(f);
      const w = l.prototype.constructor;
      for (const E of t) {
        const C = new w(E.length - 2);
        for (let x = 2, T = E.length; x < T; x++) C[x - 2] = E[x] - E[x - 2];
        m.write(C);
      }
      m.close();
      const A = await new Response(b.readable).arrayBuffer();
      return new Uint8Array(A).toBase64();
    }
    static async decompressSignature(t) {
      try {
        const e = Uint8Array.fromBase64(t), { readable: i, writable: s } = new DecompressionStream("deflate-raw"), n = s.getWriter();
        await n.ready, n.write(e).then(async () => {
          await n.ready, await n.close();
        }).catch(() => {
        });
        let r = null, a = 0;
        for await (const E of i) r || (r = new Uint8Array(new Uint32Array(E.buffer, 0, 4)[0])), r.set(E, a), a += E.length;
        const o = new Uint32Array(r.buffer, 0, r.length >> 2), l = o[1];
        if (l !== 0) throw new Error(`Invalid version: ${l}`);
        const h = o[2], c = o[3], f = o[4] === 0, g = o[5], b = o[6], m = o[7], w = [], A = (Ye + ve * b) * Uint32Array.BYTES_PER_ELEMENT;
        let S;
        switch (m) {
          case Int8Array.BYTES_PER_ELEMENT:
            S = new Int8Array(r.buffer, A);
            break;
          case Int16Array.BYTES_PER_ELEMENT:
            S = new Int16Array(r.buffer, A);
            break;
          case Int32Array.BYTES_PER_ELEMENT:
            S = new Int32Array(r.buffer, A);
            break;
        }
        a = 0;
        for (let E = 0; E < b; E++) {
          const C = o[ve * E + Ye], x = new Float32Array(C + 2);
          w.push(x);
          for (let T = 0; T < ve - 1; T++) x[T] = o[ve * E + Ye + T + 1];
          for (let T = 0; T < C; T++) x[T + 2] = x[T] + S[a++];
        }
        return {
          areContours: f,
          thickness: g,
          outlines: w,
          width: h,
          height: c
        };
      } catch (e) {
        return j(`decompressSignature: ${e}`), null;
      }
    }
  }, _t69 = new WeakMap(), _he_static = new WeakSet(), e_fn10 = function(t, e, i, s) {
    return i -= t, s -= e, i === 0 ? s > 0 ? 0 : 4 : i === 1 ? s + 6 : 2 - s;
  }, _s40 = new WeakMap(), i_fn9 = function(t, e, i, s, n, r, a) {
    const o = __privateMethod(this, _he_static, e_fn10).call(this, i, s, n, r);
    for (let l = 0; l < 8; l++) {
      const h = (-l + o - a + 16) % 8, c = __privateGet(this, _s40)[2 * h], f = __privateGet(this, _s40)[2 * h + 1];
      if (t[(i + c) * e + (s + f)] !== 0) return h;
    }
    return -1;
  }, a_fn7 = function(t, e, i, s, n, r, a) {
    const o = __privateMethod(this, _he_static, e_fn10).call(this, i, s, n, r);
    for (let l = 0; l < 8; l++) {
      const h = (l + o + a + 16) % 8, c = __privateGet(this, _s40)[2 * h], f = __privateGet(this, _s40)[2 * h + 1];
      if (t[(i + c) * e + (s + f)] !== 0) return h;
    }
    return -1;
  }, r_fn5 = function(t, e, i, s) {
    const n = t.length, r = new Int32Array(n);
    for (let h = 0; h < n; h++) r[h] = t[h] <= s ? 1 : 0;
    for (let h = 1; h < i - 1; h++) r[h * e] = r[h * e + e - 1] = 0;
    for (let h = 0; h < e; h++) r[h] = r[e * i - 1 - h] = 0;
    let a = 1, o;
    const l = [];
    for (let h = 1; h < i - 1; h++) {
      o = 1;
      for (let c = 1; c < e - 1; c++) {
        const f = h * e + c, g = r[f];
        if (g === 0) continue;
        let b = h, m = c;
        if (g === 1 && r[f - 1] === 0) a += 1, m -= 1;
        else if (g >= 1 && r[f + 1] === 0) a += 1, m += 1, g > 1 && (o = g);
        else {
          g !== 1 && (o = Math.abs(g));
          continue;
        }
        const w = [
          c,
          h
        ], A = m === c + 1, S = {
          isHole: A,
          points: w,
          id: a,
          parent: 0
        };
        l.push(S);
        let E;
        for (const L of l) if (L.id === o) {
          E = L;
          break;
        }
        E ? E.isHole ? S.parent = A ? E.parent : o : S.parent = A ? o : E.parent : S.parent = A ? o : 0;
        const C = __privateMethod(this, _he_static, i_fn9).call(this, r, e, h, c, b, m, 0);
        if (C === -1) {
          r[f] = -a, r[f] !== 1 && (o = Math.abs(r[f]));
          continue;
        }
        let x = __privateGet(this, _s40)[2 * C], T = __privateGet(this, _s40)[2 * C + 1];
        const k = h + x, I = c + T;
        b = k, m = I;
        let D = h, B = c;
        for (; ; ) {
          const L = __privateMethod(this, _he_static, a_fn7).call(this, r, e, D, B, b, m, 1);
          x = __privateGet(this, _s40)[2 * L], T = __privateGet(this, _s40)[2 * L + 1];
          const Y = D + x, tt = B + T;
          w.push(tt, Y);
          const V = D * e + B;
          if (r[V + 1] === 0 ? r[V] = -a : r[V] === 1 && (r[V] = a), Y === h && tt === c && D === k && B === I) {
            r[f] !== 1 && (o = Math.abs(r[f]));
            break;
          } else b = D, m = B, D = Y, B = tt;
        }
      }
    }
    return l;
  }, n_fn4 = function(t, e, i, s) {
    if (i - e <= 4) {
      for (let k = e; k < i - 2; k += 2) s.push(t[k], t[k + 1]);
      return;
    }
    const n = t[e], r = t[e + 1], a = t[i - 4] - n, o = t[i - 3] - r, l = Math.hypot(a, o), h = a / l, c = o / l, f = h * r - c * n, g = o / a, b = 1 / l, m = Math.atan(g), w = Math.cos(m), A = Math.sin(m), S = b * (Math.abs(w) + Math.abs(A)), E = b * (1 - S + S ** 2), C = Math.max(Math.atan(Math.abs(A + w) * E), Math.atan(Math.abs(A - w) * E));
    let x = 0, T = e;
    for (let k = e + 2; k < i - 2; k += 2) {
      const I = Math.abs(f - h * t[k + 1] + c * t[k]);
      I > x && (T = k, x = I);
    }
    x > (l * C) ** 2 ? (__privateMethod(this, _he_static, n_fn4).call(this, t, e, T + 2, s), __privateMethod(this, _he_static, n_fn4).call(this, t, T, i, s)) : s.push(n, r);
  }, o_fn7 = function(t) {
    const e = [], i = t.length;
    return __privateMethod(this, _he_static, n_fn4).call(this, t, 0, i, e), e.push(t[i - 2], t[i - 1]), e.length <= 4 ? null : e;
  }, h_fn9 = function(t, e, i, s, n, r) {
    const a = new Float32Array(r ** 2), o = -2 * s ** 2, l = r >> 1;
    for (let m = 0; m < r; m++) {
      const w = (m - l) ** 2;
      for (let A = 0; A < r; A++) a[m * r + A] = Math.exp((w + (A - l) ** 2) / o);
    }
    const h = new Float32Array(256), c = -2 * n ** 2;
    for (let m = 0; m < 256; m++) h[m] = Math.exp(m ** 2 / c);
    const f = t.length, g = new Uint8Array(f), b = new Uint32Array(256);
    for (let m = 0; m < i; m++) for (let w = 0; w < e; w++) {
      const A = m * e + w, S = t[A];
      let E = 0, C = 0;
      for (let T = 0; T < r; T++) {
        const k = m + T - l;
        if (!(k < 0 || k >= i)) for (let I = 0; I < r; I++) {
          const D = w + I - l;
          if (D < 0 || D >= e) continue;
          const B = t[k * e + D], L = a[T * r + I] * h[Math.abs(B - S)];
          E += B * L, C += L;
        }
      }
      const x = g[A] = Math.round(E / C);
      b[x]++;
    }
    return [
      g,
      b
    ];
  }, l_fn11 = function(t) {
    const e = new Uint32Array(256);
    for (const i of t) e[i]++;
    return e;
  }, u_fn11 = function(t) {
    const e = t.length, i = new Uint8ClampedArray(e >> 2);
    let s = -1 / 0, n = 1 / 0;
    for (let a = 0, o = i.length; a < o; a++) {
      const l = i[a] = t[a << 2];
      s = Math.max(s, l), n = Math.min(n, l);
    }
    const r = 255 / (s - n);
    for (let a = 0, o = i.length; a < o; a++) i[a] = (i[a] - n) * r;
    return i;
  }, d_fn9 = function(t) {
    let e, i = -1 / 0, s = -1 / 0;
    const n = t.findIndex((o) => o !== 0);
    let r = n, a = n;
    for (e = n; e < 256; e++) {
      const o = t[e];
      o > i && (e - r > s && (s = e - r, a = e - 1), i = o, r = e);
    }
    for (e = a - 1; e >= 0 && !(t[e] > t[e + 1]); e--) ;
    return e;
  }, f_fn8 = function(t) {
    const e = t, { width: i, height: s } = t, { maxDim: n } = __privateGet(this, _t69);
    let r = i, a = s;
    if (i > n || s > n) {
      let f = i, g = s, b = Math.log2(Math.max(i, s) / n);
      const m = Math.floor(b);
      b = b === m ? m - 1 : m;
      for (let A = 0; A < b; A++) {
        r = Math.ceil(f / 2), a = Math.ceil(g / 2);
        const S = new OffscreenCanvas(r, a);
        S.getContext("2d").drawImage(t, 0, 0, f, g, 0, 0, r, a), f = r, g = a, t !== e && t.close(), t = S.transferToImageBitmap();
      }
      const w = Math.min(n / r, n / a);
      r = Math.round(r * w), a = Math.round(a * w);
    }
    const l = new OffscreenCanvas(r, a).getContext("2d", {
      willReadFrequently: true
    });
    l.fillStyle = "white", l.fillRect(0, 0, r, a), l.filter = "grayscale(1)", l.drawImage(t, 0, 0, t.width, t.height, 0, 0, r, a);
    const h = l.getImageData(0, 0, r, a).data;
    return [
      __privateMethod(this, _he_static, u_fn11).call(this, h),
      r,
      a
    ];
  }, __privateAdd(_m8, _he_static), __privateAdd(_m8, _t69, {
    maxDim: 512,
    sigmaSFactor: 0.02,
    sigmaR: 25,
    kernelSize: 16
  }), __privateAdd(_m8, _s40, new Int32Array([
    0,
    1,
    -1,
    1,
    -1,
    0,
    -1,
    -1,
    0,
    -1,
    1,
    -1,
    1,
    0,
    1,
    1
  ])), _m8);
  class es extends pn {
    constructor() {
      super(), super.updateProperties({
        fill: U._defaultLineColor,
        "stroke-width": 0
      });
    }
    clone() {
      const t = new es();
      return t.updateAll(this), t;
    }
  }
  class is extends ui {
    constructor(t) {
      super(t), super.updateProperties({
        stroke: U._defaultLineColor,
        "stroke-width": 1
      });
    }
    clone() {
      const t = new is(this._viewParameters);
      return t.updateAll(this), t;
    }
  }
  const _jt = class _jt extends J {
    constructor(t) {
      super({
        ...t,
        mustBeCommitted: true,
        name: "signatureEditor"
      });
      __privateAdd(this, _t70, false);
      __privateAdd(this, _e50, null);
      __privateAdd(this, _s41, null);
      __privateAdd(this, _i36, null);
      this._willKeepAspectRatio = true, __privateSet(this, _s41, t.signatureData || null), __privateSet(this, _e50, null), this.defaultL10nId = "pdfjs-editor-signature-editor1";
    }
    static initialize(t, e) {
      U.initialize(t, e), this._defaultDrawingOptions = new es(), this._defaultDrawnSignatureOptions = new is(e.viewParameters);
    }
    static getDefaultDrawingOptions(t) {
      const e = this._defaultDrawingOptions.clone();
      return e.updateProperties(t), e;
    }
    static get supportMultipleDrawings() {
      return false;
    }
    static get typesMap() {
      return H(this, "typesMap", /* @__PURE__ */ new Map());
    }
    static get isDrawer() {
      return false;
    }
    get telemetryFinalData() {
      return {
        type: "signature",
        hasDescription: !!__privateGet(this, _e50)
      };
    }
    static computeTelemetryFinalData(t) {
      const e = t.get("hasDescription");
      return {
        hasAltText: e.get(true) ?? 0,
        hasNoAltText: e.get(false) ?? 0
      };
    }
    get isResizable() {
      return true;
    }
    onScaleChanging() {
      this._drawId !== null && super.onScaleChanging();
    }
    render() {
      if (this.div) return this.div;
      let t, e;
      const { _isCopy: i } = this;
      if (i && (this._isCopy = false, t = this.x, e = this.y), super.render(), this._drawId === null) if (__privateGet(this, _s41)) {
        const { lines: s, mustSmooth: n, areContours: r, description: a, uuid: o, heightInPage: l } = __privateGet(this, _s41), { rawDims: { pageWidth: h, pageHeight: c }, rotation: f } = this.parent.viewport, g = he.processDrawnLines({
          lines: s,
          pageWidth: h,
          pageHeight: c,
          rotation: f,
          innerMargin: _jt._INNER_MARGIN,
          mustSmooth: n,
          areContours: r
        });
        this.addSignature(g, l, a, o);
      } else this.div.setAttribute("data-l10n-args", JSON.stringify({
        description: ""
      })), this.div.hidden = true, this._uiManager.getSignature(this);
      else this.div.setAttribute("data-l10n-args", JSON.stringify({
        description: __privateGet(this, _e50) || ""
      }));
      return i && (this._isCopy = true, this._moveAfterPaste(t, e)), this.div;
    }
    setUuid(t) {
      __privateSet(this, _i36, t), this.addEditToolbar();
    }
    getUuid() {
      return __privateGet(this, _i36);
    }
    get description() {
      return __privateGet(this, _e50);
    }
    set description(t) {
      __privateSet(this, _e50, t), this.div && (this.div.setAttribute("data-l10n-args", JSON.stringify({
        description: t
      })), super.addEditToolbar().then((e) => {
        e == null ? void 0 : e.updateEditSignatureButton(t);
      }));
    }
    getSignaturePreview() {
      const { newCurves: t, areContours: e, thickness: i, width: s, height: n } = __privateGet(this, _s41), r = Math.max(s, n), a = he.processDrawnLines({
        lines: {
          curves: t.map((o) => ({
            points: o
          })),
          thickness: i,
          width: s,
          height: n
        },
        pageWidth: r,
        pageHeight: r,
        rotation: 0,
        innerMargin: 0,
        mustSmooth: false,
        areContours: e
      });
      return {
        areContours: e,
        outline: a.outline
      };
    }
    get toolbarButtons() {
      return this._uiManager.signatureManager ? [
        [
          "editSignature",
          this._uiManager.signatureManager
        ]
      ] : super.toolbarButtons;
    }
    addSignature(t, e, i, s) {
      const { x: n, y: r } = this, { outline: a } = __privateSet(this, _s41, t);
      __privateSet(this, _t70, a instanceof Hi), this.description = i;
      let o;
      __privateGet(this, _t70) ? o = _jt.getDefaultDrawingOptions() : (o = _jt._defaultDrawnSignatureOptions.clone(), o.updateProperties({
        "stroke-width": a.thickness
      })), this._addOutlines({
        drawOutlines: a,
        drawingOptions: o
      });
      const [, l] = this.pageDimensions;
      let h = e / l;
      h = h >= 1 ? 0.5 : h, this.width *= h / this.height, this.width >= 1 && (h *= 0.9 / this.width, this.width = 0.9), this.height = h, this.setDims(), this.x = n, this.y = r, this.center(), this._onResized(), this.onScaleChanging(), this.rotate(), this._uiManager.addToAnnotationStorage(this), this.setUuid(s), this._reportTelemetry({
        action: "pdfjs.signature.inserted",
        data: {
          hasBeenSaved: !!s,
          hasDescription: !!i
        }
      }), this.div.hidden = false;
    }
    getFromImage(t) {
      const { rawDims: { pageWidth: e, pageHeight: i }, rotation: s } = this.parent.viewport;
      return he.process(t, e, i, s, _jt._INNER_MARGIN);
    }
    getFromText(t, e) {
      const { rawDims: { pageWidth: i, pageHeight: s }, rotation: n } = this.parent.viewport;
      return he.extractContoursFromText(t, e, i, s, n, _jt._INNER_MARGIN);
    }
    getDrawnSignature(t) {
      const { rawDims: { pageWidth: e, pageHeight: i }, rotation: s } = this.parent.viewport;
      return he.processDrawnLines({
        lines: t,
        pageWidth: e,
        pageHeight: i,
        rotation: s,
        innerMargin: _jt._INNER_MARGIN,
        mustSmooth: false,
        areContours: false
      });
    }
    createDrawingOptions({ areContours: t, thickness: e }) {
      t ? this._drawingOptions = _jt.getDefaultDrawingOptions() : (this._drawingOptions = _jt._defaultDrawnSignatureOptions.clone(), this._drawingOptions.updateProperties({
        "stroke-width": e
      }));
    }
    serialize(t = false) {
      if (this.isEmpty()) return null;
      const { lines: e, points: i } = this.serializeDraw(t), { _drawingOptions: { "stroke-width": s } } = this, n = Object.assign(super.serialize(t), {
        isSignature: true,
        areContours: __privateGet(this, _t70),
        color: [
          0,
          0,
          0
        ],
        thickness: __privateGet(this, _t70) ? 0 : s
      });
      return this.addComment(n), t ? (n.paths = {
        lines: e,
        points: i
      }, n.uuid = __privateGet(this, _i36), n.isCopy = true) : n.lines = e, __privateGet(this, _e50) && (n.accessibilityData = {
        type: "Figure",
        alt: __privateGet(this, _e50)
      }), n;
    }
    static deserializeDraw(t, e, i, s, n, r) {
      return r.areContours ? Hi.deserialize(t, e, i, s, n, r) : Be.deserialize(t, e, i, s, n, r);
    }
    static async deserialize(t, e, i) {
      var _a29;
      const s = await super.deserialize(t, e, i);
      return __privateSet(s, _t70, t.areContours), s.description = ((_a29 = t.accessibilityData) == null ? void 0 : _a29.alt) || "", __privateSet(s, _i36, t.uuid), s;
    }
  };
  _t70 = new WeakMap();
  _e50 = new WeakMap();
  _s41 = new WeakMap();
  _i36 = new WeakMap();
  __publicField(_jt, "_type", "signature");
  __publicField(_jt, "_editorType", $.SIGNATURE);
  __publicField(_jt, "_defaultDrawingOptions", null);
  let jt = _jt;
  class wa extends U {
    constructor(t) {
      super({
        ...t,
        name: "stampEditor"
      });
      __privateAdd(this, _wa_instances);
      __privateAdd(this, _t71, null);
      __privateAdd(this, _e51, null);
      __privateAdd(this, _s42, null);
      __privateAdd(this, _i37, null);
      __privateAdd(this, _a27, null);
      __privateAdd(this, _r24, "");
      __privateAdd(this, _n24, null);
      __privateAdd(this, _o19, false);
      __privateAdd(this, _h16, null);
      __privateAdd(this, _l14, false);
      __privateAdd(this, _u12, false);
      __privateSet(this, _i37, t.bitmapUrl), __privateSet(this, _a27, t.bitmapFile), this.defaultL10nId = "pdfjs-editor-stamp-editor";
    }
    static initialize(t, e) {
      U.initialize(t, e);
    }
    static isHandlingMimeForPasting(t) {
      return Di.includes(t);
    }
    static paste(t, e) {
      e.pasteEditor({
        mode: $.STAMP
      }, {
        bitmapFile: t.getAsFile()
      });
    }
    altTextFinish() {
      this._uiManager.useNewAltTextFlow && (this.div.hidden = false), super.altTextFinish();
    }
    get telemetryFinalData() {
      var _a29;
      return {
        type: "stamp",
        hasAltText: !!((_a29 = this.altTextData) == null ? void 0 : _a29.altText)
      };
    }
    static computeTelemetryFinalData(t) {
      const e = t.get("hasAltText");
      return {
        hasAltText: e.get(true) ?? 0,
        hasNoAltText: e.get(false) ?? 0
      };
    }
    async mlGuessAltText(t = null, e = true) {
      if (this.hasAltTextData()) return null;
      const { mlManager: i } = this._uiManager;
      if (!i) throw new Error("No ML.");
      if (!await i.isEnabledFor("altText")) throw new Error("ML isn't enabled for alt text.");
      const { data: s, width: n, height: r } = t || this.copyCanvas(null, null, true).imageData, a = await i.guess({
        name: "altText",
        request: {
          data: s,
          width: n,
          height: r,
          channels: s.length / (n * r)
        }
      });
      if (!a) throw new Error("No response from the AI service.");
      if (a.error) throw new Error("Error from the AI service.");
      if (a.cancel) return null;
      if (!a.output) throw new Error("No valid response from the AI service.");
      const o = a.output;
      return await this.setGuessedAltText(o), e && !this.hasAltTextData() && (this.altTextData = {
        alt: o,
        decorative: false
      }), o;
    }
    remove() {
      var _a29;
      __privateGet(this, _e51) && (__privateSet(this, _t71, null), this._uiManager.imageManager.deleteId(__privateGet(this, _e51)), (_a29 = __privateGet(this, _n24)) == null ? void 0 : _a29.remove(), __privateSet(this, _n24, null), __privateGet(this, _h16) && (clearTimeout(__privateGet(this, _h16)), __privateSet(this, _h16, null))), super.remove();
    }
    rebuild() {
      if (!this.parent) {
        __privateGet(this, _e51) && __privateMethod(this, _wa_instances, m_fn4).call(this);
        return;
      }
      super.rebuild(), this.div !== null && (__privateGet(this, _e51) && __privateGet(this, _n24) === null && __privateMethod(this, _wa_instances, m_fn4).call(this), this.isAttachedToDOM || this.parent.add(this));
    }
    onceAdded(t) {
      this._isDraggable = true, t && this.div.focus();
    }
    isEmpty() {
      return !(__privateGet(this, _s42) || __privateGet(this, _t71) || __privateGet(this, _i37) || __privateGet(this, _a27) || __privateGet(this, _e51) || __privateGet(this, _o19));
    }
    get toolbarButtons() {
      return [
        [
          "altText",
          this.createAltText()
        ]
      ];
    }
    get isResizable() {
      return true;
    }
    render() {
      if (this.div) return this.div;
      let t, e;
      return this._isCopy && (t = this.x, e = this.y), super.render(), this.div.hidden = true, this.createAltText(), __privateGet(this, _o19) || (__privateGet(this, _t71) ? __privateMethod(this, _wa_instances, g_fn5).call(this) : __privateMethod(this, _wa_instances, m_fn4).call(this)), this._isCopy && this._moveAfterPaste(t, e), this._uiManager.addShouldRescale(this), this.div;
    }
    setCanvas(t, e) {
      const { id: i, bitmap: s } = this._uiManager.imageManager.getFromCanvas(t, e);
      e.remove(), i && this._uiManager.imageManager.isValidId(i) && (__privateSet(this, _e51, i), s && __privateSet(this, _t71, s), __privateSet(this, _o19, false), __privateMethod(this, _wa_instances, g_fn5).call(this));
    }
    _onResized() {
      this.onScaleChanging();
    }
    onScaleChanging() {
      if (!this.parent) return;
      __privateGet(this, _h16) !== null && clearTimeout(__privateGet(this, _h16));
      const t = 200;
      __privateSet(this, _h16, setTimeout(() => {
        __privateSet(this, _h16, null), __privateMethod(this, _wa_instances, p_fn3).call(this);
      }, t));
    }
    copyCanvas(t, e, i = false) {
      t || (t = 224);
      const { width: s, height: n } = __privateGet(this, _t71), r = new zt();
      let a = __privateGet(this, _t71), o = s, l = n, h = null;
      if (e) {
        if (s > e || n > e) {
          const T = Math.min(e / s, e / n);
          o = Math.floor(s * T), l = Math.floor(n * T);
        }
        h = document.createElement("canvas");
        const f = h.width = Math.ceil(o * r.sx), g = h.height = Math.ceil(l * r.sy);
        __privateGet(this, _l14) || (a = __privateMethod(this, _wa_instances, c_fn3).call(this, f, g));
        const b = h.getContext("2d");
        b.filter = this._uiManager.hcmFilter;
        let m = "white", w = "#cfcfd8";
        this._uiManager.hcmFilter !== "none" ? w = "black" : Hn.isDarkMode && (m = "#8f8f9d", w = "#42414d");
        const A = 15, S = A * r.sx, E = A * r.sy, C = new OffscreenCanvas(S * 2, E * 2), x = C.getContext("2d");
        x.fillStyle = m, x.fillRect(0, 0, S * 2, E * 2), x.fillStyle = w, x.fillRect(0, 0, S, E), x.fillRect(S, E, S, E), b.fillStyle = b.createPattern(C, "repeat"), b.fillRect(0, 0, f, g), b.drawImage(a, 0, 0, a.width, a.height, 0, 0, f, g);
      }
      let c = null;
      if (i) {
        let f, g;
        if (r.symmetric && a.width < t && a.height < t) f = a.width, g = a.height;
        else if (a = __privateGet(this, _t71), s > t || n > t) {
          const w = Math.min(t / s, t / n);
          f = Math.floor(s * w), g = Math.floor(n * w), __privateGet(this, _l14) || (a = __privateMethod(this, _wa_instances, c_fn3).call(this, f, g));
        }
        const m = new OffscreenCanvas(f, g).getContext("2d", {
          willReadFrequently: true
        });
        m.drawImage(a, 0, 0, a.width, a.height, 0, 0, f, g), c = {
          width: f,
          height: g,
          data: m.getImageData(0, 0, f, g).data
        };
      }
      return {
        canvas: h,
        width: o,
        height: l,
        imageData: c
      };
    }
    static async deserialize(t, e, i) {
      var _a29;
      let s = null, n = false;
      if (t instanceof un) {
        const { data: { rect: m, rotation: w, id: A, structParent: S, popupRef: E, richText: C, contentsObj: x, creationDate: T, modificationDate: k }, container: I, parent: { page: { pageNumber: D } }, canvas: B } = t;
        let L, Y;
        B ? (delete t.canvas, { id: L, bitmap: Y } = i.imageManager.getFromCanvas(I.id, B), B.remove()) : (n = true, t._hasNoCanvas = true);
        const tt = ((_a29 = await e._structTree.getAriaAttributes(`${ce}${A}`)) == null ? void 0 : _a29.get("aria-label")) || "";
        s = t = {
          annotationType: $.STAMP,
          bitmapId: L,
          bitmap: Y,
          pageIndex: D - 1,
          rect: m.slice(0),
          rotation: w,
          annotationElementId: A,
          id: A,
          deleted: false,
          accessibilityData: {
            decorative: false,
            altText: tt
          },
          isSvg: false,
          structParent: S,
          popupRef: E,
          richText: C,
          comment: (x == null ? void 0 : x.str) || null,
          creationDate: T,
          modificationDate: k
        };
      }
      const r = await super.deserialize(t, e, i), { rect: a, bitmap: o, bitmapUrl: l, bitmapId: h, isSvg: c, accessibilityData: f } = t;
      n ? (i.addMissingCanvas(t.id, r), __privateSet(r, _o19, true)) : h && i.imageManager.isValidId(h) ? (__privateSet(r, _e51, h), o && __privateSet(r, _t71, o)) : __privateSet(r, _i37, l), __privateSet(r, _l14, c);
      const [g, b] = r.pageDimensions;
      return r.width = (a[2] - a[0]) / g, r.height = (a[3] - a[1]) / b, f && (r.altTextData = f), r._initialData = s, t.comment && r.setCommentData(t), __privateSet(r, _u12, !!s), r;
    }
    serialize(t = false, e = null) {
      if (this.isEmpty()) return null;
      if (this.deleted) return this.serializeDeleted();
      const i = Object.assign(super.serialize(t), {
        bitmapId: __privateGet(this, _e51),
        isSvg: __privateGet(this, _l14)
      });
      if (this.addComment(i), t) return i.bitmapUrl = __privateMethod(this, _wa_instances, b_fn4).call(this, true), i.accessibilityData = this.serializeAltText(true), i.isCopy = true, i;
      const { decorative: s, altText: n } = this.serializeAltText(false);
      if (!s && n && (i.accessibilityData = {
        type: "Figure",
        alt: n
      }), this.annotationElementId) {
        const a = __privateMethod(this, _wa_instances, A_fn4).call(this, i);
        return a.isSame ? null : (a.isSameAltText ? delete i.accessibilityData : i.accessibilityData.structParent = this._initialData.structParent ?? -1, i.id = this.annotationElementId, delete i.bitmapId, i);
      }
      if (e === null) return i;
      e.stamps || (e.stamps = /* @__PURE__ */ new Map());
      const r = __privateGet(this, _l14) ? (i.rect[2] - i.rect[0]) * (i.rect[3] - i.rect[1]) : null;
      if (!e.stamps.has(__privateGet(this, _e51))) e.stamps.set(__privateGet(this, _e51), {
        area: r,
        serialized: i
      }), i.bitmap = __privateMethod(this, _wa_instances, b_fn4).call(this, false);
      else if (__privateGet(this, _l14)) {
        const a = e.stamps.get(__privateGet(this, _e51));
        r > a.area && (a.area = r, a.serialized.bitmap.close(), a.serialized.bitmap = __privateMethod(this, _wa_instances, b_fn4).call(this, false));
      }
      return i;
    }
    renderAnnotationElement(t) {
      return this.deleted ? (t.hide(), null) : (t.updateEdited({
        rect: this.getPDFRect(),
        popup: this.comment
      }), null);
    }
  }
  _t71 = new WeakMap();
  _e51 = new WeakMap();
  _s42 = new WeakMap();
  _i37 = new WeakMap();
  _a27 = new WeakMap();
  _r24 = new WeakMap();
  _n24 = new WeakMap();
  _o19 = new WeakMap();
  _h16 = new WeakMap();
  _l14 = new WeakMap();
  _u12 = new WeakMap();
  _wa_instances = new WeakSet();
  d_fn10 = function(t, e = false) {
    if (!t) {
      this.remove();
      return;
    }
    __privateSet(this, _t71, t.bitmap), e || (__privateSet(this, _e51, t.id), __privateSet(this, _l14, t.isSvg)), t.file && __privateSet(this, _r24, t.file.name), __privateMethod(this, _wa_instances, g_fn5).call(this);
  };
  f_fn9 = function() {
    if (__privateSet(this, _s42, null), this._uiManager.enableWaiting(false), !!__privateGet(this, _n24)) {
      if (this._uiManager.useNewAltTextWhenAddingImage && this._uiManager.useNewAltTextFlow && __privateGet(this, _t71)) {
        this.addEditToolbar().then(() => {
          this._editToolbar.hide(), this._uiManager.editAltText(this, true);
        });
        return;
      }
      if (!this._uiManager.useNewAltTextWhenAddingImage && this._uiManager.useNewAltTextFlow && __privateGet(this, _t71)) {
        this._reportTelemetry({
          action: "pdfjs.image.image_added",
          data: {
            alt_text_modal: false,
            alt_text_type: "empty"
          }
        });
        try {
          this.mlGuessAltText();
        } catch {
        }
      }
      this.div.focus();
    }
  };
  m_fn4 = function() {
    if (__privateGet(this, _e51)) {
      this._uiManager.enableWaiting(true), this._uiManager.imageManager.getFromId(__privateGet(this, _e51)).then((i) => __privateMethod(this, _wa_instances, d_fn10).call(this, i, true)).finally(() => __privateMethod(this, _wa_instances, f_fn9).call(this));
      return;
    }
    if (__privateGet(this, _i37)) {
      const i = __privateGet(this, _i37);
      __privateSet(this, _i37, null), this._uiManager.enableWaiting(true), __privateSet(this, _s42, this._uiManager.imageManager.getFromUrl(i).then((s) => __privateMethod(this, _wa_instances, d_fn10).call(this, s)).finally(() => __privateMethod(this, _wa_instances, f_fn9).call(this)));
      return;
    }
    if (__privateGet(this, _a27)) {
      const i = __privateGet(this, _a27);
      __privateSet(this, _a27, null), this._uiManager.enableWaiting(true), __privateSet(this, _s42, this._uiManager.imageManager.getFromFile(i).then((s) => __privateMethod(this, _wa_instances, d_fn10).call(this, s)).finally(() => __privateMethod(this, _wa_instances, f_fn9).call(this)));
      return;
    }
    const t = document.createElement("input");
    t.type = "file", t.accept = Di.join(",");
    const e = this._uiManager._signal;
    __privateSet(this, _s42, new Promise((i) => {
      t.addEventListener("change", async () => {
        if (!t.files || t.files.length === 0) this.remove();
        else {
          this._uiManager.enableWaiting(true);
          const s = await this._uiManager.imageManager.getFromFile(t.files[0]);
          this._reportTelemetry({
            action: "pdfjs.image.image_selected",
            data: {
              alt_text_modal: this._uiManager.useNewAltTextFlow
            }
          }), __privateMethod(this, _wa_instances, d_fn10).call(this, s);
        }
        i();
      }, {
        signal: e
      }), t.addEventListener("cancel", () => {
        this.remove(), i();
      }, {
        signal: e
      });
    }).finally(() => __privateMethod(this, _wa_instances, f_fn9).call(this))), t.click();
  };
  g_fn5 = function() {
    var _a29;
    const { div: t } = this;
    let { width: e, height: i } = __privateGet(this, _t71);
    const [s, n] = this.pageDimensions, r = 0.75;
    if (this.width) e = this.width * s, i = this.height * n;
    else if (e > r * s || i > r * n) {
      const o = Math.min(r * s / e, r * n / i);
      e *= o, i *= o;
    }
    this._uiManager.enableWaiting(false);
    const a = __privateSet(this, _n24, document.createElement("canvas"));
    a.setAttribute("role", "img"), this.addContainer(a), this.width = e / s, this.height = i / n, this.setDims(), ((_a29 = this._initialOptions) == null ? void 0 : _a29.isCentered) ? this.center() : this.fixAndSetPosition(), this._initialOptions = null, (!this._uiManager.useNewAltTextWhenAddingImage || !this._uiManager.useNewAltTextFlow || this.annotationElementId) && (t.hidden = false), __privateMethod(this, _wa_instances, p_fn3).call(this), __privateGet(this, _u12) || (this.parent.addUndoableEditor(this), __privateSet(this, _u12, true)), this._reportTelemetry({
      action: "inserted_image"
    }), __privateGet(this, _r24) && this.div.setAttribute("aria-description", __privateGet(this, _r24)), this.annotationElementId || this._uiManager.a11yAlert("pdfjs-editor-stamp-added-alert");
  };
  c_fn3 = function(t, e) {
    const { width: i, height: s } = __privateGet(this, _t71);
    let n = i, r = s, a = __privateGet(this, _t71);
    for (; n > 2 * t || r > 2 * e; ) {
      const o = n, l = r;
      n > 2 * t && (n = n >= 16384 ? Math.floor(n / 2) - 1 : Math.ceil(n / 2)), r > 2 * e && (r = r >= 16384 ? Math.floor(r / 2) - 1 : Math.ceil(r / 2));
      const h = new OffscreenCanvas(n, r);
      h.getContext("2d").drawImage(a, 0, 0, o, l, 0, 0, n, r), a = h.transferToImageBitmap();
    }
    return a;
  };
  p_fn3 = function() {
    const [t, e] = this.parentDimensions, { width: i, height: s } = this, n = new zt(), r = Math.ceil(i * t * n.sx), a = Math.ceil(s * e * n.sy), o = __privateGet(this, _n24);
    if (!o || o.width === r && o.height === a) return;
    o.width = r, o.height = a;
    const l = __privateGet(this, _l14) ? __privateGet(this, _t71) : __privateMethod(this, _wa_instances, c_fn3).call(this, r, a), h = o.getContext("2d");
    h.filter = this._uiManager.hcmFilter, h.drawImage(l, 0, 0, l.width, l.height, 0, 0, r, a);
  };
  b_fn4 = function(t) {
    if (t) {
      if (__privateGet(this, _l14)) {
        const s = this._uiManager.imageManager.getSvgUrl(__privateGet(this, _e51));
        if (s) return s;
      }
      const e = document.createElement("canvas");
      return { width: e.width, height: e.height } = __privateGet(this, _t71), e.getContext("2d").drawImage(__privateGet(this, _t71), 0, 0), e.toDataURL();
    }
    if (__privateGet(this, _l14)) {
      const [e, i] = this.pageDimensions, s = Math.round(this.width * e * me.PDF_TO_CSS_UNITS), n = Math.round(this.height * i * me.PDF_TO_CSS_UNITS), r = new OffscreenCanvas(s, n);
      return r.getContext("2d").drawImage(__privateGet(this, _t71), 0, 0, __privateGet(this, _t71).width, __privateGet(this, _t71).height, 0, 0, s, n), r.transferToImageBitmap();
    }
    return structuredClone(__privateGet(this, _t71));
  };
  A_fn4 = function(t) {
    var _a29;
    const { pageIndex: e, accessibilityData: { altText: i } } = this._initialData, s = t.pageIndex === e, n = (((_a29 = t.accessibilityData) == null ? void 0 : _a29.alt) || "") === i;
    return {
      isSame: !this.hasEditedComment && !this._hasBeenMoved && !this._hasBeenResized && s && n,
      isSameAltText: n
    };
  };
  __publicField(wa, "_type", "stamp");
  __publicField(wa, "_editorType", $.STAMP);
  Xt = (_n26 = class {
    constructor({ uiManager: t, pageIndex: e, div: i, structTreeLayer: s, accessibilityManager: n, annotationLayer: r, drawLayer: a, textLayer: o, viewport: l, l10n: h }) {
      __privateAdd(this, _Xt_instances);
      __privateAdd(this, _t72);
      __privateAdd(this, _e52, false);
      __privateAdd(this, _s43, null);
      __privateAdd(this, _i38, null);
      __privateAdd(this, _a28, null);
      __privateAdd(this, _r25, /* @__PURE__ */ new Map());
      __privateAdd(this, _n25, false);
      __privateAdd(this, _o20, false);
      __privateAdd(this, _h17, false);
      __privateAdd(this, _l15, null);
      __privateAdd(this, _u13, null);
      __privateAdd(this, _d11, null);
      __privateAdd(this, _f10, null);
      __privateAdd(this, _m9, null);
      __privateAdd(this, _g9, -1);
      __privateAdd(this, _c9);
      const c = [
        ...__privateGet(Xt, _p7).values()
      ];
      if (!Xt._initialized) {
        Xt._initialized = true;
        for (const f of c) f.initialize(h, t);
      }
      t.registerEditorTypes(c), __privateSet(this, _c9, t), this.pageIndex = e, this.div = i, __privateSet(this, _t72, n), __privateSet(this, _s43, r), this.viewport = l, __privateSet(this, _d11, o), this.drawLayer = a, this._structTree = s, __privateGet(this, _c9).addLayer(this);
    }
    updatePageIndex(t) {
      for (const e of __privateGet(this, _Xt_instances, b_get)) e.updatePageIndex(t);
      this.pageIndex = t, __privateGet(this, _c9).addLayer(this);
    }
    async setClonedFrom(t) {
      if (!t) return;
      const e = [];
      for (const i of __privateGet(t, _Xt_instances, b_get)) {
        const s = i.serialize(true);
        s && (s.isCopy = false, e.push(this.deserialize(s).then((n) => {
          n && this.addOrRebuild(n);
        })));
      }
      await Promise.all(e);
    }
    get isEmpty() {
      return __privateGet(this, _r25).size === 0;
    }
    get isInvisible() {
      return this.isEmpty && __privateGet(this, _c9).getMode() === $.NONE;
    }
    updateToolbar(t) {
      __privateGet(this, _c9).updateToolbar(t);
    }
    updateMode(t = __privateGet(this, _c9).getMode()) {
      switch (__privateMethod(this, _Xt_instances, v_fn3).call(this), t) {
        case $.NONE:
          this.div.classList.toggle("nonEditing", true), this.disableTextSelection(), this.togglePointerEvents(false), this.toggleAnnotationLayerPointerEvents(true), this.disableClick();
          return;
        case $.INK:
          this.disableTextSelection(), this.togglePointerEvents(true), this.enableClick();
          break;
        case $.HIGHLIGHT:
          this.enableTextSelection(), this.togglePointerEvents(false), this.disableClick();
          break;
        default:
          this.disableTextSelection(), this.togglePointerEvents(true), this.enableClick();
      }
      this.toggleAnnotationLayerPointerEvents(false);
      const { classList: e } = this.div;
      if (e.toggle("nonEditing", false), t === $.POPUP) e.toggle("commentEditing", true);
      else {
        e.toggle("commentEditing", false);
        for (const i of __privateGet(Xt, _p7).values()) e.toggle(`${i._type}Editing`, t === i._editorType);
      }
      this.div.hidden = false;
    }
    hasTextLayer(t) {
      var _a29;
      return t === ((_a29 = __privateGet(this, _d11)) == null ? void 0 : _a29.div);
    }
    setEditingState(t) {
      __privateGet(this, _c9).setEditingState(t);
    }
    addCommands(t) {
      __privateGet(this, _c9).addCommands(t);
    }
    cleanUndoStack(t) {
      __privateGet(this, _c9).cleanUndoStack(t);
    }
    toggleDrawing(t = false) {
      this.div.classList.toggle("drawing", !t);
    }
    togglePointerEvents(t = false) {
      this.div.classList.toggle("disabled", !t);
    }
    toggleAnnotationLayerPointerEvents(t = false) {
      var _a29;
      (_a29 = __privateGet(this, _s43)) == null ? void 0 : _a29.togglePointerEvents(t);
    }
    async enable() {
      var _a29;
      __privateSet(this, _h17, true), this.div.tabIndex = 0, this.togglePointerEvents(true), this.div.classList.toggle("nonEditing", false), (_a29 = __privateGet(this, _m9)) == null ? void 0 : _a29.abort(), __privateSet(this, _m9, null);
      const t = /* @__PURE__ */ new Set();
      for (const i of __privateGet(this, _Xt_instances, b_get)) i.enableEditing(), i.show(true), i.annotationElementId && (__privateGet(this, _c9).removeChangedExistingAnnotation(i), t.add(i.annotationElementId));
      const e = __privateGet(this, _s43);
      if (e) for (const i of e.getEditableAnnotations()) {
        if (i.hide(), __privateGet(this, _c9).isDeletedAnnotationElement(i.data.id) || t.has(i.data.id)) continue;
        const s = await this.deserialize(i);
        s && (this.addOrRebuild(s), s.enableEditing());
      }
      __privateSet(this, _h17, false), __privateGet(this, _c9)._eventBus.dispatch("editorsrendered", {
        source: this,
        pageNumber: this.pageIndex + 1
      });
    }
    disable() {
      var _a29;
      if (__privateSet(this, _o20, true), this.div.tabIndex = -1, this.togglePointerEvents(false), this.div.classList.toggle("nonEditing", true), __privateGet(this, _d11) && !__privateGet(this, _m9)) {
        __privateSet(this, _m9, new AbortController());
        const s = __privateGet(this, _c9).combinedSignal(__privateGet(this, _m9));
        __privateGet(this, _d11).div.addEventListener("pointerdown", (n) => {
          const { clientX: a, clientY: o, timeStamp: l } = n, h = __privateGet(this, _g9);
          if (l - h > 500) {
            __privateSet(this, _g9, l);
            return;
          }
          __privateSet(this, _g9, -1);
          const { classList: c } = this.div;
          c.toggle("getElements", true);
          const f = document.elementsFromPoint(a, o);
          if (c.toggle("getElements", false), !this.div.contains(f[0])) return;
          let g;
          const b = new RegExp(`^${Te}[0-9]+$`);
          for (const w of f) if (b.test(w.id)) {
            g = w.id;
            break;
          }
          if (!g) return;
          const m = __privateGet(this, _r25).get(g);
          (m == null ? void 0 : m.annotationElementId) === null && (n.stopPropagation(), n.preventDefault(), m.dblclick(n));
        }, {
          signal: s,
          capture: true
        });
      }
      const t = __privateGet(this, _s43), e = [];
      if (t) {
        const s = /* @__PURE__ */ new Map(), n = /* @__PURE__ */ new Map();
        for (const a of __privateGet(this, _Xt_instances, b_get)) {
          if (a.disableEditing(), !a.annotationElementId) {
            e.push(a);
            continue;
          }
          if (a.serialize() !== null) {
            s.set(a.annotationElementId, a);
            continue;
          } else n.set(a.annotationElementId, a);
          (_a29 = this.getEditableAnnotation(a.annotationElementId)) == null ? void 0 : _a29.show(), a.remove();
        }
        const r = t.getEditableAnnotations();
        for (const a of r) {
          const { id: o } = a.data;
          if (__privateGet(this, _c9).isDeletedAnnotationElement(o)) {
            a.updateEdited({
              deleted: true
            });
            continue;
          }
          let l = n.get(o);
          if (l) {
            l.resetAnnotationElement(a), l.show(false), a.show();
            continue;
          }
          l = s.get(o), l && (__privateGet(this, _c9).addChangedExistingAnnotation(l), l.renderAnnotationElement(a) && l.show(false)), a.show();
        }
      }
      __privateMethod(this, _Xt_instances, v_fn3).call(this), this.isEmpty && (this.div.hidden = true);
      const { classList: i } = this.div;
      for (const s of __privateGet(Xt, _p7).values()) i.remove(`${s._type}Editing`);
      this.disableTextSelection(), this.toggleAnnotationLayerPointerEvents(true), t == null ? void 0 : t.updateFakeAnnotations(e), __privateSet(this, _o20, false);
    }
    getEditableAnnotation(t) {
      var _a29;
      return ((_a29 = __privateGet(this, _s43)) == null ? void 0 : _a29.getEditableAnnotation(t)) || null;
    }
    setActiveEditor(t) {
      __privateGet(this, _c9).getActive() !== t && __privateGet(this, _c9).setActiveEditor(t);
    }
    enableTextSelection() {
      var _a29;
      if (this.div.tabIndex = -1, ((_a29 = __privateGet(this, _d11)) == null ? void 0 : _a29.div) && !__privateGet(this, _f10)) {
        __privateSet(this, _f10, new AbortController());
        const t = __privateGet(this, _c9).combinedSignal(__privateGet(this, _f10));
        __privateGet(this, _d11).div.addEventListener("pointerdown", __privateMethod(this, _Xt_instances, A_fn5).bind(this), {
          signal: t
        }), __privateGet(this, _d11).div.classList.add("highlighting");
      }
    }
    disableTextSelection() {
      var _a29;
      this.div.tabIndex = 0, ((_a29 = __privateGet(this, _d11)) == null ? void 0 : _a29.div) && __privateGet(this, _f10) && (__privateGet(this, _f10).abort(), __privateSet(this, _f10, null), __privateGet(this, _d11).div.classList.remove("highlighting"));
    }
    enableClick() {
      if (__privateGet(this, _i38)) return;
      __privateSet(this, _i38, new AbortController());
      const t = __privateGet(this, _c9).combinedSignal(__privateGet(this, _i38));
      this.div.addEventListener("pointerdown", this.pointerdown.bind(this), {
        signal: t
      });
      const e = this.pointerup.bind(this);
      this.div.addEventListener("pointerup", e, {
        signal: t
      }), this.div.addEventListener("pointercancel", e, {
        signal: t
      });
    }
    disableClick() {
      var _a29;
      (_a29 = __privateGet(this, _i38)) == null ? void 0 : _a29.abort(), __privateSet(this, _i38, null);
    }
    attach(t) {
      __privateGet(this, _r25).set(t.id, t);
      const { annotationElementId: e } = t;
      e && __privateGet(this, _c9).isDeletedAnnotationElement(e) && __privateGet(this, _c9).removeDeletedAnnotationElement(t);
    }
    detach(t) {
      var _a29;
      __privateGet(this, _r25).delete(t.id), (_a29 = __privateGet(this, _t72)) == null ? void 0 : _a29.removePointerInTextLayer(t.contentDiv), !__privateGet(this, _o20) && t.annotationElementId && __privateGet(this, _c9).addDeletedAnnotationElement(t);
    }
    remove(t) {
      this.detach(t), __privateGet(this, _c9).removeEditor(t), t.div.remove(), t.isAttachedToDOM = false;
    }
    changeParent(t) {
      var _a29;
      t.parent !== this && (t.parent && t.annotationElementId && (__privateGet(this, _c9).addDeletedAnnotationElement(t), U.deleteAnnotationElement(t), t.annotationElementId = null), this.attach(t), (_a29 = t.parent) == null ? void 0 : _a29.detach(t), t.setParent(this), t.div && t.isAttachedToDOM && (t.div.remove(), this.div.append(t.div)));
    }
    add(t) {
      if (!(t.parent === this && t.isAttachedToDOM)) {
        if (this.changeParent(t), __privateGet(this, _c9).addEditor(t), this.attach(t), !t.isAttachedToDOM) {
          const e = t.render();
          this.div.append(e), t.isAttachedToDOM = true;
        }
        t.fixAndSetPosition(), t.onceAdded(!__privateGet(this, _h17)), __privateGet(this, _c9).addToAnnotationStorage(t), t._reportTelemetry(t.telemetryInitialData);
      }
    }
    moveEditorInDOM(t) {
      var _a29;
      if (!t.isAttachedToDOM) return;
      const { activeElement: e } = document;
      t.div.contains(e) && !__privateGet(this, _a28) && (t._focusEventsAllowed = false, __privateSet(this, _a28, setTimeout(() => {
        __privateSet(this, _a28, null), t.div.contains(document.activeElement) ? t._focusEventsAllowed = true : (t.div.addEventListener("focusin", () => {
          t._focusEventsAllowed = true;
        }, {
          once: true,
          signal: __privateGet(this, _c9)._signal
        }), e.focus());
      }, 0))), t._structTreeParentId = (_a29 = __privateGet(this, _t72)) == null ? void 0 : _a29.moveElementInDOM(this.div, t.div, t.contentDiv, true);
    }
    addOrRebuild(t) {
      t.needsToBeRebuilt() ? (t.parent || (t.parent = this), t.rebuild(), t.show()) : this.add(t);
    }
    addUndoableEditor(t) {
      const e = () => t._uiManager.rebuild(t), i = () => {
        t.remove();
      };
      this.addCommands({
        cmd: e,
        undo: i,
        mustExec: false
      });
    }
    getEditorByUID(t) {
      for (const e of __privateGet(this, _r25).values()) if (e.uid === t) return e;
      return null;
    }
    getNextId() {
      return __privateGet(this, _c9).getId();
    }
    combinedSignal(t) {
      return __privateGet(this, _c9).combinedSignal(t);
    }
    canCreateNewEmptyEditor() {
      var _a29;
      return (_a29 = __privateGet(this, _Xt_instances, y_get)) == null ? void 0 : _a29.canCreateNewEmptyEditor();
    }
    async pasteEditor(t, e) {
      this.updateToolbar(t), await __privateGet(this, _c9).updateMode(t.mode);
      const { offsetX: i, offsetY: s } = __privateMethod(this, _Xt_instances, S_fn3).call(this), n = this.getNextId(), r = __privateMethod(this, _Xt_instances, __fn3).call(this, {
        parent: this,
        id: n,
        x: i,
        y: s,
        uiManager: __privateGet(this, _c9),
        isCentered: true,
        ...e
      });
      r && this.add(r);
    }
    async deserialize(t) {
      var _a29;
      return await ((_a29 = __privateGet(Xt, _p7).get(t.annotationType ?? t.annotationEditorType)) == null ? void 0 : _a29.deserialize(t, this, __privateGet(this, _c9))) || null;
    }
    createAndAddNewEditor(t, e, i = {}) {
      const s = this.getNextId(), n = __privateMethod(this, _Xt_instances, __fn3).call(this, {
        parent: this,
        id: s,
        x: t.offsetX,
        y: t.offsetY,
        uiManager: __privateGet(this, _c9),
        isCentered: e,
        ...i
      });
      return n && this.add(n), n;
    }
    get boundingClientRect() {
      return this.div.getBoundingClientRect();
    }
    addNewEditor(t = {}) {
      this.createAndAddNewEditor(__privateMethod(this, _Xt_instances, S_fn3).call(this), true, t);
    }
    setSelected(t) {
      __privateGet(this, _c9).setSelected(t);
    }
    toggleSelected(t) {
      __privateGet(this, _c9).toggleSelected(t);
    }
    unselect(t) {
      __privateGet(this, _c9).unselect(t);
    }
    pointerup(t) {
      var _a29;
      const { isMac: e } = mt.platform;
      if (t.button !== 0 || t.ctrlKey && e || t.target !== this.div || !__privateGet(this, _n25) || (__privateSet(this, _n25, false), ((_a29 = __privateGet(this, _Xt_instances, y_get)) == null ? void 0 : _a29.isDrawer) && __privateGet(this, _Xt_instances, y_get).supportMultipleDrawings)) return;
      if (!__privateGet(this, _e52)) {
        __privateSet(this, _e52, true);
        return;
      }
      const i = __privateGet(this, _c9).getMode();
      if (i === $.STAMP || i === $.SIGNATURE) {
        __privateGet(this, _c9).unselectAll();
        return;
      }
      this.createAndAddNewEditor(t, false);
    }
    pointerdown(t) {
      var _a29;
      if (__privateGet(this, _c9).getMode() === $.HIGHLIGHT && this.enableTextSelection(), __privateGet(this, _n25)) {
        __privateSet(this, _n25, false);
        return;
      }
      const { isMac: e } = mt.platform;
      if (t.button !== 0 || t.ctrlKey && e || t.target !== this.div) return;
      if (__privateSet(this, _n25, true), (_a29 = __privateGet(this, _Xt_instances, y_get)) == null ? void 0 : _a29.isDrawer) {
        this.startDrawingSession(t);
        return;
      }
      const i = __privateGet(this, _c9).getActive();
      __privateSet(this, _e52, !i || i.isEmpty());
    }
    startDrawingSession(t) {
      if (this.div.focus({
        preventScroll: true
      }), __privateGet(this, _l15)) {
        __privateGet(this, _Xt_instances, y_get).startDrawing(this, __privateGet(this, _c9), false, t);
        return;
      }
      __privateGet(this, _c9).setCurrentDrawingSession(this), __privateSet(this, _l15, new AbortController());
      const e = __privateGet(this, _c9).combinedSignal(__privateGet(this, _l15));
      this.div.addEventListener("blur", ({ relatedTarget: i }) => {
        i && !this.div.contains(i) && (__privateSet(this, _u13, null), this.commitOrRemove());
      }, {
        signal: e
      }), __privateGet(this, _Xt_instances, y_get).startDrawing(this, __privateGet(this, _c9), false, t);
    }
    pause(t) {
      if (t) {
        const { activeElement: e } = document;
        this.div.contains(e) && __privateSet(this, _u13, e);
        return;
      }
      __privateGet(this, _u13) && setTimeout(() => {
        var _a29;
        (_a29 = __privateGet(this, _u13)) == null ? void 0 : _a29.focus(), __privateSet(this, _u13, null);
      }, 0);
    }
    endDrawingSession(t = false) {
      return __privateGet(this, _l15) ? (__privateGet(this, _c9).setCurrentDrawingSession(null), __privateGet(this, _l15).abort(), __privateSet(this, _l15, null), __privateSet(this, _u13, null), __privateGet(this, _Xt_instances, y_get).endDrawing(t)) : null;
    }
    findNewParent(t, e, i) {
      const s = __privateGet(this, _c9).findParent(e, i);
      return s === null || s === this ? false : (s.changeParent(t), true);
    }
    commitOrRemove() {
      return __privateGet(this, _l15) ? (this.endDrawingSession(), true) : false;
    }
    onScaleChanging() {
      __privateGet(this, _l15) && __privateGet(this, _Xt_instances, y_get).onScaleChangingWhenDrawing(this);
    }
    destroy() {
      var _a29, _b7;
      this.commitOrRemove(), ((_a29 = __privateGet(this, _c9).getActive()) == null ? void 0 : _a29.parent) === this && (__privateGet(this, _c9).commitOrRemove(), __privateGet(this, _c9).setActiveEditor(null)), __privateGet(this, _a28) && (clearTimeout(__privateGet(this, _a28)), __privateSet(this, _a28, null));
      for (const t of __privateGet(this, _r25).values()) (_b7 = __privateGet(this, _t72)) == null ? void 0 : _b7.removePointerInTextLayer(t.contentDiv), t.setParent(null), t.isAttachedToDOM = false, t.div.remove();
      this.div = null, __privateGet(this, _r25).clear(), __privateGet(this, _c9).removeLayer(this);
    }
    render({ viewport: t }) {
      this.viewport = t, ee(this.div, t);
      for (const e of __privateGet(this, _c9).getEditors(this.pageIndex)) this.add(e), e.rebuild();
      this.updateMode();
    }
    update({ viewport: t }) {
      __privateGet(this, _c9).commitOrRemove(), __privateMethod(this, _Xt_instances, v_fn3).call(this);
      const e = this.viewport.rotation, i = t.rotation;
      if (this.viewport = t, ee(this.div, {
        rotation: i
      }), e !== i) for (const s of __privateGet(this, _r25).values()) s.rotate(i);
    }
    get pageDimensions() {
      const { pageWidth: t, pageHeight: e } = this.viewport.rawDims;
      return [
        t,
        e
      ];
    }
    get scale() {
      return __privateGet(this, _c9).viewParameters.realScale;
    }
  }, _t72 = new WeakMap(), _e52 = new WeakMap(), _s43 = new WeakMap(), _i38 = new WeakMap(), _a28 = new WeakMap(), _r25 = new WeakMap(), _n25 = new WeakMap(), _o20 = new WeakMap(), _h17 = new WeakMap(), _l15 = new WeakMap(), _u13 = new WeakMap(), _d11 = new WeakMap(), _f10 = new WeakMap(), _m9 = new WeakMap(), _g9 = new WeakMap(), _c9 = new WeakMap(), _p7 = new WeakMap(), _Xt_instances = new WeakSet(), b_get = function() {
    return __privateGet(this, _r25).size !== 0 ? __privateGet(this, _r25).values() : __privateGet(this, _c9).getEditors(this.pageIndex);
  }, A_fn5 = function(t) {
    __privateGet(this, _c9).unselectAll();
    const { target: e } = t;
    if (e === __privateGet(this, _d11).div || (e.getAttribute("role") === "img" || e.classList.contains("endOfContent")) && __privateGet(this, _d11).div.contains(e)) {
      const { isMac: i } = mt.platform;
      if (t.button !== 0 || t.ctrlKey && i) return;
      __privateGet(this, _c9).showAllEditors("highlight", true, true), __privateGet(this, _d11).div.classList.add("free"), this.toggleDrawing(), ut.startHighlighting(this, __privateGet(this, _c9).direction === "ltr", {
        target: __privateGet(this, _d11).div,
        x: t.x,
        y: t.y
      }), __privateGet(this, _d11).div.addEventListener("pointerup", () => {
        __privateGet(this, _d11).div.classList.remove("free"), this.toggleDrawing(true);
      }, {
        once: true,
        signal: __privateGet(this, _c9)._signal
      }), t.preventDefault();
    }
  }, y_get = function() {
    return __privateGet(Xt, _p7).get(__privateGet(this, _c9).getMode());
  }, __fn3 = function(t) {
    const e = __privateGet(this, _Xt_instances, y_get);
    return e ? new e.prototype.constructor(t) : null;
  }, S_fn3 = function() {
    const { x: t, y: e, width: i, height: s } = this.boundingClientRect, n = Math.max(0, t), r = Math.max(0, e), a = Math.min(window.innerWidth, t + i), o = Math.min(window.innerHeight, e + s), l = (n + a) / 2 - t, h = (r + o) / 2 - e, [c, f] = this.viewport.rotation % 180 === 0 ? [
      l,
      h
    ] : [
      h,
      l
    ];
    return {
      offsetX: c,
      offsetY: f
    };
  }, v_fn3 = function() {
    for (const t of __privateGet(this, _r25).values()) t.isEmpty() && t.remove();
  }, __publicField(_n26, "_initialized", false), __privateAdd(_n26, _p7, new Map([
    yt,
    ts,
    wa,
    ut,
    jt
  ].map((t) => [
    t._editorType,
    t
  ]))), _n26);
  wt = (_o21 = class {
    constructor() {
      __privateAdd(this, _wt_instances);
      __privateAdd(this, _t73, null);
      __privateAdd(this, _e53, /* @__PURE__ */ new Map());
      __privateAdd(this, _s44, /* @__PURE__ */ new Map());
    }
    setParent(t) {
      if (!__privateGet(this, _t73)) {
        __privateSet(this, _t73, t);
        return;
      }
      if (__privateGet(this, _t73) !== t) {
        if (__privateGet(this, _e53).size > 0) for (const e of __privateGet(this, _e53).values()) e.remove(), t.append(e);
        __privateSet(this, _t73, t);
      }
    }
    static get _svgFactory() {
      return H(this, "_svgFactory", new Qe());
    }
    draw(t, e = false, i = false) {
      const s = __privateWrapper(wt, _i39)._++, n = __privateMethod(this, _wt_instances, r_fn6).call(this), r = wt._svgFactory.createElement("defs");
      n.append(r);
      const a = wt._svgFactory.createElement("path");
      r.append(a);
      const o = `path_${s}`;
      a.setAttribute("id", o), a.setAttribute("vector-effect", "non-scaling-stroke"), e && __privateGet(this, _s44).set(s, a);
      const l = i ? __privateMethod(this, _wt_instances, n_fn5).call(this, r, o) : null, h = wt._svgFactory.createElement("use");
      return n.append(h), h.setAttribute("href", `#${o}`), this.updateProperties(n, t), __privateGet(this, _e53).set(s, n), {
        id: s,
        clipPathId: `url(#${l})`
      };
    }
    drawOutline(t, e) {
      const i = __privateWrapper(wt, _i39)._++, s = __privateMethod(this, _wt_instances, r_fn6).call(this), n = wt._svgFactory.createElement("defs");
      s.append(n);
      const r = wt._svgFactory.createElement("path");
      n.append(r);
      const a = `path_${i}`;
      r.setAttribute("id", a), r.setAttribute("vector-effect", "non-scaling-stroke");
      let o;
      if (e) {
        const c = wt._svgFactory.createElement("mask");
        n.append(c), o = `mask_${i}`, c.setAttribute("id", o), c.setAttribute("maskUnits", "objectBoundingBox");
        const f = wt._svgFactory.createElement("rect");
        c.append(f), f.setAttribute("width", "1"), f.setAttribute("height", "1"), f.setAttribute("fill", "white");
        const g = wt._svgFactory.createElement("use");
        c.append(g), g.setAttribute("href", `#${a}`), g.setAttribute("stroke", "none"), g.setAttribute("fill", "black"), g.setAttribute("fill-rule", "nonzero"), g.classList.add("mask");
      }
      const l = wt._svgFactory.createElement("use");
      s.append(l), l.setAttribute("href", `#${a}`), o && l.setAttribute("mask", `url(#${o})`);
      const h = l.cloneNode();
      return s.append(h), l.classList.add("mainOutline"), h.classList.add("secondaryOutline"), this.updateProperties(s, t), __privateGet(this, _e53).set(i, s), i;
    }
    finalizeDraw(t, e) {
      __privateGet(this, _s44).delete(t), this.updateProperties(t, e);
    }
    updateProperties(t, e) {
      var _a29;
      if (!e) return;
      const { root: i, bbox: s, rootClass: n, path: r } = e, a = typeof t == "number" ? __privateGet(this, _e53).get(t) : t;
      if (a) {
        if (i && __privateMethod(this, _wt_instances, o_fn8).call(this, a, i), s && __privateMethod(_a29 = wt, _wt_static, a_fn8).call(_a29, a, s), n) {
          const { classList: o } = a;
          for (const [l, h] of Object.entries(n)) o.toggle(l, h);
        }
        if (r) {
          const l = a.firstElementChild.firstElementChild;
          __privateMethod(this, _wt_instances, o_fn8).call(this, l, r);
        }
      }
    }
    updateParent(t, e) {
      if (e === this) return;
      const i = __privateGet(this, _e53).get(t);
      i && (__privateGet(e, _t73).append(i), __privateGet(this, _e53).delete(t), __privateGet(e, _e53).set(t, i));
    }
    remove(t) {
      __privateGet(this, _s44).delete(t), __privateGet(this, _t73) !== null && (__privateGet(this, _e53).get(t).remove(), __privateGet(this, _e53).delete(t));
    }
    destroy() {
      __privateSet(this, _t73, null);
      for (const t of __privateGet(this, _e53).values()) t.remove();
      __privateGet(this, _e53).clear(), __privateGet(this, _s44).clear();
    }
  }, _t73 = new WeakMap(), _e53 = new WeakMap(), _s44 = new WeakMap(), _i39 = new WeakMap(), _wt_static = new WeakSet(), a_fn8 = function(t, [e, i, s, n]) {
    const { style: r } = t;
    r.top = `${100 * i}%`, r.left = `${100 * e}%`, r.width = `${100 * s}%`, r.height = `${100 * n}%`;
  }, _wt_instances = new WeakSet(), r_fn6 = function() {
    const t = wt._svgFactory.create(1, 1, true);
    return __privateGet(this, _t73).append(t), t.setAttribute("aria-hidden", true), t;
  }, n_fn5 = function(t, e) {
    const i = wt._svgFactory.createElement("clipPath");
    t.append(i);
    const s = `clip_${e}`;
    i.setAttribute("id", s), i.setAttribute("clipPathUnits", "objectBoundingBox");
    const n = wt._svgFactory.createElement("use");
    return i.append(n), n.setAttribute("href", `#${e}`), n.classList.add("clip"), s;
  }, o_fn8 = function(t, e) {
    for (const [i, s] of Object.entries(e)) s === null ? t.removeAttribute(i) : t.setAttribute(i, s);
  }, __privateAdd(_o21, _wt_static), __privateAdd(_o21, _i39, 0), _o21);
  globalThis._pdfjsTestingUtils = {
    HighlightOutliner: Oi
  };
  globalThis.pdfjsLib = {
    AbortException: Qt,
    AnnotationEditorLayer: Xt,
    AnnotationEditorParamsType: X,
    AnnotationEditorType: $,
    AnnotationEditorUIManager: Zt,
    AnnotationLayer: Zi,
    AnnotationMode: Jt,
    AnnotationType: pt,
    applyOpacity: jn,
    build: Kr,
    ColorPicker: Rt,
    createValidAbsoluteUrl: Bs,
    CSSConstants: $n,
    DOMSVGFactory: Qe,
    DrawLayer: wt,
    FeatureTest: mt,
    fetchData: De,
    findContrastColor: Gn,
    getDocument: zr,
    getFilenameFromUrl: Bn,
    getPdfFilenameFromUrl: Nn,
    getRGB: Re,
    getUuid: Os,
    getXfaPageViewport: On,
    GlobalWorkerOptions: Ce,
    ImageKind: qe,
    InvalidPDFException: ki,
    isDataScheme: si,
    isPdfFile: Gi,
    isValidExplicitDest: er,
    makeArr: Us,
    makeMap: $i,
    makeObj: Mi,
    MathClamp: At,
    noContextMenu: Ft,
    normalizeUnicode: Rn,
    OPS: Pe,
    OutputScale: zt,
    PasswordResponses: xn,
    PDFDataRangeTransport: on,
    PDFDateString: Ii,
    PDFWorker: vt,
    PermissionFlag: Sn,
    PixelsPerInch: me,
    RenderingCancelledException: ji,
    renderRichText: js,
    ResponseException: Ke,
    setLayerDimensions: ee,
    shadow: H,
    SignatureExtractor: he,
    stopEvent: dt,
    SupportedImageMimeTypes: Di,
    TextLayer: kt,
    TouchManager: ni,
    updateUrlHash: Ns,
    Util: R,
    VerbosityLevel: Ze,
    version: qr,
    XfaLayer: Hs
  };
})();
export {
  Qt as AbortException,
  Xt as AnnotationEditorLayer,
  X as AnnotationEditorParamsType,
  $ as AnnotationEditorType,
  Zt as AnnotationEditorUIManager,
  Zi as AnnotationLayer,
  Jt as AnnotationMode,
  pt as AnnotationType,
  $n as CSSConstants,
  Rt as ColorPicker,
  Qe as DOMSVGFactory,
  wt as DrawLayer,
  mt as FeatureTest,
  Ce as GlobalWorkerOptions,
  qe as ImageKind,
  ki as InvalidPDFException,
  At as MathClamp,
  Pe as OPS,
  zt as OutputScale,
  on as PDFDataRangeTransport,
  Ii as PDFDateString,
  vt as PDFWorker,
  xn as PasswordResponses,
  Sn as PermissionFlag,
  me as PixelsPerInch,
  ji as RenderingCancelledException,
  Ke as ResponseException,
  he as SignatureExtractor,
  Di as SupportedImageMimeTypes,
  kt as TextLayer,
  ni as TouchManager,
  R as Util,
  Ze as VerbosityLevel,
  Hs as XfaLayer,
  __tla,
  jn as applyOpacity,
  Kr as build,
  Bs as createValidAbsoluteUrl,
  De as fetchData,
  Gn as findContrastColor,
  zr as getDocument,
  Bn as getFilenameFromUrl,
  Nn as getPdfFilenameFromUrl,
  Re as getRGB,
  Os as getUuid,
  On as getXfaPageViewport,
  si as isDataScheme,
  Gi as isPdfFile,
  er as isValidExplicitDest,
  Us as makeArr,
  $i as makeMap,
  Mi as makeObj,
  Ft as noContextMenu,
  Rn as normalizeUnicode,
  js as renderRichText,
  ee as setLayerDimensions,
  H as shadow,
  dt as stopEvent,
  Ns as updateUrlHash,
  qr as version
};
