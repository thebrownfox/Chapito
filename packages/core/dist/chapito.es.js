function fe(u) {
  if (u === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return u;
}
function Xs(u, t) {
  u.prototype = Object.create(t.prototype), u.prototype.constructor = u, u.__proto__ = t;
}
/*!
 * GSAP 3.13.0
 * https://gsap.com
 *
 * @license Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/
var Nt = {
  autoSleep: 120,
  force3D: "auto",
  nullTargetWarn: 1,
  units: {
    lineHeight: ""
  }
}, pi = {
  duration: 0.5,
  overwrite: !1,
  delay: 0
}, Mn, wt, et, Ht = 1e8, tt = 1 / Ht, Jr = Math.PI * 2, ga = Jr / 4, ma = 0, Ys = Math.sqrt, ya = Math.cos, xa = Math.sin, yt = function(t) {
  return typeof t == "string";
}, ot = function(t) {
  return typeof t == "function";
}, pe = function(t) {
  return typeof t == "number";
}, Dn = function(t) {
  return typeof t > "u";
}, ae = function(t) {
  return typeof t == "object";
}, kt = function(t) {
  return t !== !1;
}, On = function() {
  return typeof window < "u";
}, or = function(t) {
  return ot(t) || yt(t);
}, Bs = typeof ArrayBuffer == "function" && ArrayBuffer.isView || function() {
}, St = Array.isArray, tn = /(?:-?\.?\d|\.)+/gi, $s = /[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g, oi = /[-+=.]*\d+[.e-]*\d*[a-z%]*/g, Ir = /[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi, Vs = /[+-]=-?[.\d]+/, Ws = /[^,'"\[\]\s]+/gi, va = /^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i, it, re, en, En, It = {}, pr = {}, Us, Hs = function(t) {
  return (pr = gi(t, It)) && Ot;
}, Rn = function(t, e) {
  return console.warn("Invalid property", t, "set to", e, "Missing plugin? gsap.registerPlugin()");
}, Ui = function(t, e) {
  return !e && console.warn(t);
}, Gs = function(t, e) {
  return t && (It[t] = e) && pr && (pr[t] = e) || It;
}, Hi = function() {
  return 0;
}, wa = {
  suppressEvents: !0,
  isStart: !0,
  kill: !1
}, ur = {
  suppressEvents: !0,
  kill: !1
}, Ta = {
  suppressEvents: !0
}, An = {}, Me = [], rn = {}, qs, Rt = {}, zr = {}, ss = 30, fr = [], Ln = "", Fn = function(t) {
  var e = t[0], i, r;
  if (ae(e) || ot(e) || (t = [t]), !(i = (e._gsap || {}).harness)) {
    for (r = fr.length; r-- && !fr[r].targetTest(e); )
      ;
    i = fr[r];
  }
  for (r = t.length; r--; )
    t[r] && (t[r]._gsap || (t[r]._gsap = new xo(t[r], i))) || t.splice(r, 1);
  return t;
}, Ue = function(t) {
  return t._gsap || Fn(Gt(t))[0]._gsap;
}, Qs = function(t, e, i) {
  return (i = t[e]) && ot(i) ? t[e]() : Dn(i) && t.getAttribute && t.getAttribute(e) || i;
}, Ct = function(t, e) {
  return (t = t.split(",")).forEach(e) || t;
}, ut = function(t) {
  return Math.round(t * 1e5) / 1e5 || 0;
}, dt = function(t) {
  return Math.round(t * 1e7) / 1e7 || 0;
}, ui = function(t, e) {
  var i = e.charAt(0), r = parseFloat(e.substr(2));
  return t = parseFloat(t), i === "+" ? t + r : i === "-" ? t - r : i === "*" ? t * r : t / r;
}, ba = function(t, e) {
  for (var i = e.length, r = 0; t.indexOf(e[r]) < 0 && ++r < i; )
    ;
  return r < i;
}, gr = function() {
  var t = Me.length, e = Me.slice(0), i, r;
  for (rn = {}, Me.length = 0, i = 0; i < t; i++)
    r = e[i], r && r._lazy && (r.render(r._lazy[0], r._lazy[1], !0)._lazy = 0);
}, Nn = function(t) {
  return !!(t._initted || t._startAt || t.add);
}, Ks = function(t, e, i, r) {
  Me.length && !wt && gr(), t.render(e, i, !!(wt && e < 0 && Nn(t))), Me.length && !wt && gr();
}, js = function(t) {
  var e = parseFloat(t);
  return (e || e === 0) && (t + "").match(Ws).length < 2 ? e : yt(t) ? t.trim() : t;
}, Zs = function(t) {
  return t;
}, zt = function(t, e) {
  for (var i in e)
    i in t || (t[i] = e[i]);
  return t;
}, Sa = function(t) {
  return function(e, i) {
    for (var r in i)
      r in e || r === "duration" && t || r === "ease" || (e[r] = i[r]);
  };
}, gi = function(t, e) {
  for (var i in e)
    t[i] = e[i];
  return t;
}, os = function u(t, e) {
  for (var i in e)
    i !== "__proto__" && i !== "constructor" && i !== "prototype" && (t[i] = ae(e[i]) ? u(t[i] || (t[i] = {}), e[i]) : e[i]);
  return t;
}, mr = function(t, e) {
  var i = {}, r;
  for (r in t)
    r in e || (i[r] = t[r]);
  return i;
}, Ni = function(t) {
  var e = t.parent || it, i = t.keyframes ? Sa(St(t.keyframes)) : zt;
  if (kt(t.inherit))
    for (; e; )
      i(t, e.vars.defaults), e = e.parent || e._dp;
  return t;
}, Pa = function(t, e) {
  for (var i = t.length, r = i === e.length; r && i-- && t[i] === e[i]; )
    ;
  return i < 0;
}, Js = function(t, e, i, r, n) {
  var s = t[r], o;
  if (n)
    for (o = e[n]; s && s[n] > o; )
      s = s._prev;
  return s ? (e._next = s._next, s._next = e) : (e._next = t[i], t[i] = e), e._next ? e._next._prev = e : t[r] = e, e._prev = s, e.parent = e._dp = t, e;
}, kr = function(t, e, i, r) {
  i === void 0 && (i = "_first"), r === void 0 && (r = "_last");
  var n = e._prev, s = e._next;
  n ? n._next = s : t[i] === e && (t[i] = s), s ? s._prev = n : t[r] === e && (t[r] = n), e._next = e._prev = e.parent = null;
}, Ee = function(t, e) {
  t.parent && (!e || t.parent.autoRemoveChildren) && t.parent.remove && t.parent.remove(t), t._act = 0;
}, He = function(t, e) {
  if (t && (!e || e._end > t._dur || e._start < 0))
    for (var i = t; i; )
      i._dirty = 1, i = i.parent;
  return t;
}, ka = function(t) {
  for (var e = t.parent; e && e.parent; )
    e._dirty = 1, e.totalDuration(), e = e.parent;
  return t;
}, nn = function(t, e, i, r) {
  return t._startAt && (wt ? t._startAt.revert(ur) : t.vars.immediateRender && !t.vars.autoRevert || t._startAt.render(e, !0, r));
}, Ca = function u(t) {
  return !t || t._ts && u(t.parent);
}, as = function(t) {
  return t._repeat ? mi(t._tTime, t = t.duration() + t._rDelay) * t : 0;
}, mi = function(t, e) {
  var i = Math.floor(t = dt(t / e));
  return t && i === t ? i - 1 : i;
}, yr = function(t, e) {
  return (t - e._start) * e._ts + (e._ts >= 0 ? 0 : e._dirty ? e.totalDuration() : e._tDur);
}, Cr = function(t) {
  return t._end = dt(t._start + (t._tDur / Math.abs(t._ts || t._rts || tt) || 0));
}, Mr = function(t, e) {
  var i = t._dp;
  return i && i.smoothChildTiming && t._ts && (t._start = dt(i._time - (t._ts > 0 ? e / t._ts : ((t._dirty ? t.totalDuration() : t._tDur) - e) / -t._ts)), Cr(t), i._dirty || He(i, t)), t;
}, to = function(t, e) {
  var i;
  if ((e._time || !e._dur && e._initted || e._start < t._time && (e._dur || !e.add)) && (i = yr(t.rawTime(), e), (!e._dur || er(0, e.totalDuration(), i) - e._tTime > tt) && e.render(i, !0)), He(t, e)._dp && t._initted && t._time >= t._dur && t._ts) {
    if (t._dur < t.duration())
      for (i = t; i._dp; )
        i.rawTime() >= 0 && i.totalTime(i._tTime), i = i._dp;
    t._zTime = -tt;
  }
}, se = function(t, e, i, r) {
  return e.parent && Ee(e), e._start = dt((pe(i) ? i : i || t !== it ? Ut(t, i, e) : t._time) + e._delay), e._end = dt(e._start + (e.totalDuration() / Math.abs(e.timeScale()) || 0)), Js(t, e, "_first", "_last", t._sort ? "_start" : 0), sn(e) || (t._recent = e), r || to(t, e), t._ts < 0 && Mr(t, t._tTime), t;
}, eo = function(t, e) {
  return (It.ScrollTrigger || Rn("scrollTrigger", e)) && It.ScrollTrigger.create(e, t);
}, io = function(t, e, i, r, n) {
  if (zn(t, e, n), !t._initted)
    return 1;
  if (!i && t._pt && !wt && (t._dur && t.vars.lazy !== !1 || !t._dur && t.vars.lazy) && qs !== At.frame)
    return Me.push(t), t._lazy = [n, r], 1;
}, Ma = function u(t) {
  var e = t.parent;
  return e && e._ts && e._initted && !e._lock && (e.rawTime() < 0 || u(e));
}, sn = function(t) {
  var e = t.data;
  return e === "isFromStart" || e === "isStart";
}, Da = function(t, e, i, r) {
  var n = t.ratio, s = e < 0 || !e && (!t._start && Ma(t) && !(!t._initted && sn(t)) || (t._ts < 0 || t._dp._ts < 0) && !sn(t)) ? 0 : 1, o = t._rDelay, f = 0, l, h, d;
  if (o && t._repeat && (f = er(0, t._tDur, e), h = mi(f, o), t._yoyo && h & 1 && (s = 1 - s), h !== mi(t._tTime, o) && (n = 1 - s, t.vars.repeatRefresh && t._initted && t.invalidate())), s !== n || wt || r || t._zTime === tt || !e && t._zTime) {
    if (!t._initted && io(t, e, r, i, f))
      return;
    for (d = t._zTime, t._zTime = e || (i ? tt : 0), i || (i = e && !d), t.ratio = s, t._from && (s = 1 - s), t._time = 0, t._tTime = f, l = t._pt; l; )
      l.r(s, l.d), l = l._next;
    e < 0 && nn(t, e, i, !0), t._onUpdate && !i && Ft(t, "onUpdate"), f && t._repeat && !i && t.parent && Ft(t, "onRepeat"), (e >= t._tDur || e < 0) && t.ratio === s && (s && Ee(t, 1), !i && !wt && (Ft(t, s ? "onComplete" : "onReverseComplete", !0), t._prom && t._prom()));
  } else t._zTime || (t._zTime = e);
}, Oa = function(t, e, i) {
  var r;
  if (i > e)
    for (r = t._first; r && r._start <= i; ) {
      if (r.data === "isPause" && r._start > e)
        return r;
      r = r._next;
    }
  else
    for (r = t._last; r && r._start >= i; ) {
      if (r.data === "isPause" && r._start < e)
        return r;
      r = r._prev;
    }
}, yi = function(t, e, i, r) {
  var n = t._repeat, s = dt(e) || 0, o = t._tTime / t._tDur;
  return o && !r && (t._time *= s / t._dur), t._dur = s, t._tDur = n ? n < 0 ? 1e10 : dt(s * (n + 1) + t._rDelay * n) : s, o > 0 && !r && Mr(t, t._tTime = t._tDur * o), t.parent && Cr(t), i || He(t.parent, t), t;
}, ls = function(t) {
  return t instanceof Pt ? He(t) : yi(t, t._dur);
}, Ea = {
  _start: 0,
  endTime: Hi,
  totalDuration: Hi
}, Ut = function u(t, e, i) {
  var r = t.labels, n = t._recent || Ea, s = t.duration() >= Ht ? n.endTime(!1) : t._dur, o, f, l;
  return yt(e) && (isNaN(e) || e in r) ? (f = e.charAt(0), l = e.substr(-1) === "%", o = e.indexOf("="), f === "<" || f === ">" ? (o >= 0 && (e = e.replace(/=/, "")), (f === "<" ? n._start : n.endTime(n._repeat >= 0)) + (parseFloat(e.substr(1)) || 0) * (l ? (o < 0 ? n : i).totalDuration() / 100 : 1)) : o < 0 ? (e in r || (r[e] = s), r[e]) : (f = parseFloat(e.charAt(o - 1) + e.substr(o + 1)), l && i && (f = f / 100 * (St(i) ? i[0] : i).totalDuration()), o > 1 ? u(t, e.substr(0, o - 1), i) + f : s + f)) : e == null ? s : +e;
}, Ii = function(t, e, i) {
  var r = pe(e[1]), n = (r ? 2 : 1) + (t < 2 ? 0 : 1), s = e[n], o, f;
  if (r && (s.duration = e[1]), s.parent = i, t) {
    for (o = s, f = i; f && !("immediateRender" in o); )
      o = f.vars.defaults || {}, f = kt(f.vars.inherit) && f.parent;
    s.immediateRender = kt(o.immediateRender), t < 2 ? s.runBackwards = 1 : s.startAt = e[n - 1];
  }
  return new ct(e[0], s, e[n + 1]);
}, Ae = function(t, e) {
  return t || t === 0 ? e(t) : e;
}, er = function(t, e, i) {
  return i < t ? t : i > e ? e : i;
}, bt = function(t, e) {
  return !yt(t) || !(e = va.exec(t)) ? "" : e[1];
}, Ra = function(t, e, i) {
  return Ae(i, function(r) {
    return er(t, e, r);
  });
}, on = [].slice, ro = function(t, e) {
  return t && ae(t) && "length" in t && (!e && !t.length || t.length - 1 in t && ae(t[0])) && !t.nodeType && t !== re;
}, Aa = function(t, e, i) {
  return i === void 0 && (i = []), t.forEach(function(r) {
    var n;
    return yt(r) && !e || ro(r, 1) ? (n = i).push.apply(n, Gt(r)) : i.push(r);
  }) || i;
}, Gt = function(t, e, i) {
  return et && !e && et.selector ? et.selector(t) : yt(t) && !i && (en || !xi()) ? on.call((e || En).querySelectorAll(t), 0) : St(t) ? Aa(t, i) : ro(t) ? on.call(t, 0) : t ? [t] : [];
}, an = function(t) {
  return t = Gt(t)[0] || Ui("Invalid scope") || {}, function(e) {
    var i = t.current || t.nativeElement || t;
    return Gt(e, i.querySelectorAll ? i : i === t ? Ui("Invalid scope") || En.createElement("div") : t);
  };
}, no = function(t) {
  return t.sort(function() {
    return 0.5 - Math.random();
  });
}, so = function(t) {
  if (ot(t))
    return t;
  var e = ae(t) ? t : {
    each: t
  }, i = Ge(e.ease), r = e.from || 0, n = parseFloat(e.base) || 0, s = {}, o = r > 0 && r < 1, f = isNaN(r) || o, l = e.axis, h = r, d = r;
  return yt(r) ? h = d = {
    center: 0.5,
    edges: 0.5,
    end: 1
  }[r] || 0 : !o && f && (h = r[0], d = r[1]), function(_, a, p) {
    var c = (p || e).length, m = s[c], v, w, T, P, y, b, k, S, M;
    if (!m) {
      if (M = e.grid === "auto" ? 0 : (e.grid || [1, Ht])[1], !M) {
        for (k = -Ht; k < (k = p[M++].getBoundingClientRect().left) && M < c; )
          ;
        M < c && M--;
      }
      for (m = s[c] = [], v = f ? Math.min(M, c) * h - 0.5 : r % M, w = M === Ht ? 0 : f ? c * d / M - 0.5 : r / M | 0, k = 0, S = Ht, b = 0; b < c; b++)
        T = b % M - v, P = w - (b / M | 0), m[b] = y = l ? Math.abs(l === "y" ? P : T) : Ys(T * T + P * P), y > k && (k = y), y < S && (S = y);
      r === "random" && no(m), m.max = k - S, m.min = S, m.v = c = (parseFloat(e.amount) || parseFloat(e.each) * (M > c ? c - 1 : l ? l === "y" ? c / M : M : Math.max(M, c / M)) || 0) * (r === "edges" ? -1 : 1), m.b = c < 0 ? n - c : n, m.u = bt(e.amount || e.each) || 0, i = i && c < 0 ? go(i) : i;
    }
    return c = (m[_] - m.min) / m.max || 0, dt(m.b + (i ? i(c) : c) * m.v) + m.u;
  };
}, ln = function(t) {
  var e = Math.pow(10, ((t + "").split(".")[1] || "").length);
  return function(i) {
    var r = dt(Math.round(parseFloat(i) / t) * t * e);
    return (r - r % 1) / e + (pe(i) ? 0 : bt(i));
  };
}, oo = function(t, e) {
  var i = St(t), r, n;
  return !i && ae(t) && (r = i = t.radius || Ht, t.values ? (t = Gt(t.values), (n = !pe(t[0])) && (r *= r)) : t = ln(t.increment)), Ae(e, i ? ot(t) ? function(s) {
    return n = t(s), Math.abs(n - s) <= r ? n : s;
  } : function(s) {
    for (var o = parseFloat(n ? s.x : s), f = parseFloat(n ? s.y : 0), l = Ht, h = 0, d = t.length, _, a; d--; )
      n ? (_ = t[d].x - o, a = t[d].y - f, _ = _ * _ + a * a) : _ = Math.abs(t[d] - o), _ < l && (l = _, h = d);
    return h = !r || l <= r ? t[h] : s, n || h === s || pe(s) ? h : h + bt(s);
  } : ln(t));
}, ao = function(t, e, i, r) {
  return Ae(St(t) ? !e : i === !0 ? !!(i = 0) : !r, function() {
    return St(t) ? t[~~(Math.random() * t.length)] : (i = i || 1e-5) && (r = i < 1 ? Math.pow(10, (i + "").length - 2) : 1) && Math.floor(Math.round((t - i / 2 + Math.random() * (e - t + i * 0.99)) / i) * i * r) / r;
  });
}, La = function() {
  for (var t = arguments.length, e = new Array(t), i = 0; i < t; i++)
    e[i] = arguments[i];
  return function(r) {
    return e.reduce(function(n, s) {
      return s(n);
    }, r);
  };
}, Fa = function(t, e) {
  return function(i) {
    return t(parseFloat(i)) + (e || bt(i));
  };
}, Na = function(t, e, i) {
  return uo(t, e, 0, 1, i);
}, lo = function(t, e, i) {
  return Ae(i, function(r) {
    return t[~~e(r)];
  });
}, Ia = function u(t, e, i) {
  var r = e - t;
  return St(t) ? lo(t, u(0, t.length), e) : Ae(i, function(n) {
    return (r + (n - t) % r) % r + t;
  });
}, za = function u(t, e, i) {
  var r = e - t, n = r * 2;
  return St(t) ? lo(t, u(0, t.length - 1), e) : Ae(i, function(s) {
    return s = (n + (s - t) % n) % n || 0, t + (s > r ? n - s : s);
  });
}, Gi = function(t) {
  for (var e = 0, i = "", r, n, s, o; ~(r = t.indexOf("random(", e)); )
    s = t.indexOf(")", r), o = t.charAt(r + 7) === "[", n = t.substr(r + 7, s - r - 7).match(o ? Ws : tn), i += t.substr(e, r - e) + ao(o ? n : +n[0], o ? 0 : +n[1], +n[2] || 1e-5), e = s + 1;
  return i + t.substr(e, t.length - e);
}, uo = function(t, e, i, r, n) {
  var s = e - t, o = r - i;
  return Ae(n, function(f) {
    return i + ((f - t) / s * o || 0);
  });
}, Xa = function u(t, e, i, r) {
  var n = isNaN(t + e) ? 0 : function(a) {
    return (1 - a) * t + a * e;
  };
  if (!n) {
    var s = yt(t), o = {}, f, l, h, d, _;
    if (i === !0 && (r = 1) && (i = null), s)
      t = {
        p: t
      }, e = {
        p: e
      };
    else if (St(t) && !St(e)) {
      for (h = [], d = t.length, _ = d - 2, l = 1; l < d; l++)
        h.push(u(t[l - 1], t[l]));
      d--, n = function(p) {
        p *= d;
        var c = Math.min(_, ~~p);
        return h[c](p - c);
      }, i = e;
    } else r || (t = gi(St(t) ? [] : {}, t));
    if (!h) {
      for (f in e)
        In.call(o, t, f, "get", e[f]);
      n = function(p) {
        return Bn(p, o) || (s ? t.p : t);
      };
    }
  }
  return Ae(i, n);
}, us = function(t, e, i) {
  var r = t.labels, n = Ht, s, o, f;
  for (s in r)
    o = r[s] - e, o < 0 == !!i && o && n > (o = Math.abs(o)) && (f = s, n = o);
  return f;
}, Ft = function(t, e, i) {
  var r = t.vars, n = r[e], s = et, o = t._ctx, f, l, h;
  if (n)
    return f = r[e + "Params"], l = r.callbackScope || t, i && Me.length && gr(), o && (et = o), h = f ? n.apply(l, f) : n.call(l), et = s, h;
}, Di = function(t) {
  return Ee(t), t.scrollTrigger && t.scrollTrigger.kill(!!wt), t.progress() < 1 && Ft(t, "onInterrupt"), t;
}, ai, fo = [], ho = function(t) {
  if (t)
    if (t = !t.name && t.default || t, On() || t.headless) {
      var e = t.name, i = ot(t), r = e && !i && t.init ? function() {
        this._props = [];
      } : t, n = {
        init: Hi,
        render: Bn,
        add: In,
        kill: el,
        modifier: tl,
        rawVars: 0
      }, s = {
        targetTest: 0,
        get: 0,
        getSetter: Yn,
        aliases: {},
        register: 0
      };
      if (xi(), t !== r) {
        if (Rt[e])
          return;
        zt(r, zt(mr(t, n), s)), gi(r.prototype, gi(n, mr(t, s))), Rt[r.prop = e] = r, t.targetTest && (fr.push(r), An[e] = 1), e = (e === "css" ? "CSS" : e.charAt(0).toUpperCase() + e.substr(1)) + "Plugin";
      }
      Gs(e, r), t.register && t.register(Ot, r, Mt);
    } else
      fo.push(t);
}, Z = 255, Oi = {
  aqua: [0, Z, Z],
  lime: [0, Z, 0],
  silver: [192, 192, 192],
  black: [0, 0, 0],
  maroon: [128, 0, 0],
  teal: [0, 128, 128],
  blue: [0, 0, Z],
  navy: [0, 0, 128],
  white: [Z, Z, Z],
  olive: [128, 128, 0],
  yellow: [Z, Z, 0],
  orange: [Z, 165, 0],
  gray: [128, 128, 128],
  purple: [128, 0, 128],
  green: [0, 128, 0],
  red: [Z, 0, 0],
  pink: [Z, 192, 203],
  cyan: [0, Z, Z],
  transparent: [Z, Z, Z, 0]
}, Xr = function(t, e, i) {
  return t += t < 0 ? 1 : t > 1 ? -1 : 0, (t * 6 < 1 ? e + (i - e) * t * 6 : t < 0.5 ? i : t * 3 < 2 ? e + (i - e) * (2 / 3 - t) * 6 : e) * Z + 0.5 | 0;
}, co = function(t, e, i) {
  var r = t ? pe(t) ? [t >> 16, t >> 8 & Z, t & Z] : 0 : Oi.black, n, s, o, f, l, h, d, _, a, p;
  if (!r) {
    if (t.substr(-1) === "," && (t = t.substr(0, t.length - 1)), Oi[t])
      r = Oi[t];
    else if (t.charAt(0) === "#") {
      if (t.length < 6 && (n = t.charAt(1), s = t.charAt(2), o = t.charAt(3), t = "#" + n + n + s + s + o + o + (t.length === 5 ? t.charAt(4) + t.charAt(4) : "")), t.length === 9)
        return r = parseInt(t.substr(1, 6), 16), [r >> 16, r >> 8 & Z, r & Z, parseInt(t.substr(7), 16) / 255];
      t = parseInt(t.substr(1), 16), r = [t >> 16, t >> 8 & Z, t & Z];
    } else if (t.substr(0, 3) === "hsl") {
      if (r = p = t.match(tn), !e)
        f = +r[0] % 360 / 360, l = +r[1] / 100, h = +r[2] / 100, s = h <= 0.5 ? h * (l + 1) : h + l - h * l, n = h * 2 - s, r.length > 3 && (r[3] *= 1), r[0] = Xr(f + 1 / 3, n, s), r[1] = Xr(f, n, s), r[2] = Xr(f - 1 / 3, n, s);
      else if (~t.indexOf("="))
        return r = t.match($s), i && r.length < 4 && (r[3] = 1), r;
    } else
      r = t.match(tn) || Oi.transparent;
    r = r.map(Number);
  }
  return e && !p && (n = r[0] / Z, s = r[1] / Z, o = r[2] / Z, d = Math.max(n, s, o), _ = Math.min(n, s, o), h = (d + _) / 2, d === _ ? f = l = 0 : (a = d - _, l = h > 0.5 ? a / (2 - d - _) : a / (d + _), f = d === n ? (s - o) / a + (s < o ? 6 : 0) : d === s ? (o - n) / a + 2 : (n - s) / a + 4, f *= 60), r[0] = ~~(f + 0.5), r[1] = ~~(l * 100 + 0.5), r[2] = ~~(h * 100 + 0.5)), i && r.length < 4 && (r[3] = 1), r;
}, _o = function(t) {
  var e = [], i = [], r = -1;
  return t.split(De).forEach(function(n) {
    var s = n.match(oi) || [];
    e.push.apply(e, s), i.push(r += s.length + 1);
  }), e.c = i, e;
}, fs = function(t, e, i) {
  var r = "", n = (t + r).match(De), s = e ? "hsla(" : "rgba(", o = 0, f, l, h, d;
  if (!n)
    return t;
  if (n = n.map(function(_) {
    return (_ = co(_, e, 1)) && s + (e ? _[0] + "," + _[1] + "%," + _[2] + "%," + _[3] : _.join(",")) + ")";
  }), i && (h = _o(t), f = i.c, f.join(r) !== h.c.join(r)))
    for (l = t.replace(De, "1").split(oi), d = l.length - 1; o < d; o++)
      r += l[o] + (~f.indexOf(o) ? n.shift() || s + "0,0,0,0)" : (h.length ? h : n.length ? n : i).shift());
  if (!l)
    for (l = t.split(De), d = l.length - 1; o < d; o++)
      r += l[o] + n[o];
  return r + l[d];
}, De = (function() {
  var u = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b", t;
  for (t in Oi)
    u += "|" + t + "\\b";
  return new RegExp(u + ")", "gi");
})(), Ya = /hsl[a]?\(/, po = function(t) {
  var e = t.join(" "), i;
  if (De.lastIndex = 0, De.test(e))
    return i = Ya.test(e), t[1] = fs(t[1], i), t[0] = fs(t[0], i, _o(t[1])), !0;
}, qi, At = (function() {
  var u = Date.now, t = 500, e = 33, i = u(), r = i, n = 1e3 / 240, s = n, o = [], f, l, h, d, _, a, p = function c(m) {
    var v = u() - r, w = m === !0, T, P, y, b;
    if ((v > t || v < 0) && (i += v - e), r += v, y = r - i, T = y - s, (T > 0 || w) && (b = ++d.frame, _ = y - d.time * 1e3, d.time = y = y / 1e3, s += T + (T >= n ? 4 : n - T), P = 1), w || (f = l(c)), P)
      for (a = 0; a < o.length; a++)
        o[a](y, _, b, m);
  };
  return d = {
    time: 0,
    frame: 0,
    tick: function() {
      p(!0);
    },
    deltaRatio: function(m) {
      return _ / (1e3 / (m || 60));
    },
    wake: function() {
      Us && (!en && On() && (re = en = window, En = re.document || {}, It.gsap = Ot, (re.gsapVersions || (re.gsapVersions = [])).push(Ot.version), Hs(pr || re.GreenSockGlobals || !re.gsap && re || {}), fo.forEach(ho)), h = typeof requestAnimationFrame < "u" && requestAnimationFrame, f && d.sleep(), l = h || function(m) {
        return setTimeout(m, s - d.time * 1e3 + 1 | 0);
      }, qi = 1, p(2));
    },
    sleep: function() {
      (h ? cancelAnimationFrame : clearTimeout)(f), qi = 0, l = Hi;
    },
    lagSmoothing: function(m, v) {
      t = m || 1 / 0, e = Math.min(v || 33, t);
    },
    fps: function(m) {
      n = 1e3 / (m || 240), s = d.time * 1e3 + n;
    },
    add: function(m, v, w) {
      var T = v ? function(P, y, b, k) {
        m(P, y, b, k), d.remove(T);
      } : m;
      return d.remove(m), o[w ? "unshift" : "push"](T), xi(), T;
    },
    remove: function(m, v) {
      ~(v = o.indexOf(m)) && o.splice(v, 1) && a >= v && a--;
    },
    _listeners: o
  }, d;
})(), xi = function() {
  return !qi && At.wake();
}, $ = {}, Ba = /^[\d.\-M][\d.\-,\s]/, $a = /["']/g, Va = function(t) {
  for (var e = {}, i = t.substr(1, t.length - 3).split(":"), r = i[0], n = 1, s = i.length, o, f, l; n < s; n++)
    f = i[n], o = n !== s - 1 ? f.lastIndexOf(",") : f.length, l = f.substr(0, o), e[r] = isNaN(l) ? l.replace($a, "").trim() : +l, r = f.substr(o + 1).trim();
  return e;
}, Wa = function(t) {
  var e = t.indexOf("(") + 1, i = t.indexOf(")"), r = t.indexOf("(", e);
  return t.substring(e, ~r && r < i ? t.indexOf(")", i + 1) : i);
}, Ua = function(t) {
  var e = (t + "").split("("), i = $[e[0]];
  return i && e.length > 1 && i.config ? i.config.apply(null, ~t.indexOf("{") ? [Va(e[1])] : Wa(t).split(",").map(js)) : $._CE && Ba.test(t) ? $._CE("", t) : i;
}, go = function(t) {
  return function(e) {
    return 1 - t(1 - e);
  };
}, mo = function u(t, e) {
  for (var i = t._first, r; i; )
    i instanceof Pt ? u(i, e) : i.vars.yoyoEase && (!i._yoyo || !i._repeat) && i._yoyo !== e && (i.timeline ? u(i.timeline, e) : (r = i._ease, i._ease = i._yEase, i._yEase = r, i._yoyo = e)), i = i._next;
}, Ge = function(t, e) {
  return t && (ot(t) ? t : $[t] || Ua(t)) || e;
}, ei = function(t, e, i, r) {
  i === void 0 && (i = function(f) {
    return 1 - e(1 - f);
  }), r === void 0 && (r = function(f) {
    return f < 0.5 ? e(f * 2) / 2 : 1 - e((1 - f) * 2) / 2;
  });
  var n = {
    easeIn: e,
    easeOut: i,
    easeInOut: r
  }, s;
  return Ct(t, function(o) {
    $[o] = It[o] = n, $[s = o.toLowerCase()] = i;
    for (var f in n)
      $[s + (f === "easeIn" ? ".in" : f === "easeOut" ? ".out" : ".inOut")] = $[o + "." + f] = n[f];
  }), n;
}, yo = function(t) {
  return function(e) {
    return e < 0.5 ? (1 - t(1 - e * 2)) / 2 : 0.5 + t((e - 0.5) * 2) / 2;
  };
}, Yr = function u(t, e, i) {
  var r = e >= 1 ? e : 1, n = (i || (t ? 0.3 : 0.45)) / (e < 1 ? e : 1), s = n / Jr * (Math.asin(1 / r) || 0), o = function(h) {
    return h === 1 ? 1 : r * Math.pow(2, -10 * h) * xa((h - s) * n) + 1;
  }, f = t === "out" ? o : t === "in" ? function(l) {
    return 1 - o(1 - l);
  } : yo(o);
  return n = Jr / n, f.config = function(l, h) {
    return u(t, l, h);
  }, f;
}, Br = function u(t, e) {
  e === void 0 && (e = 1.70158);
  var i = function(s) {
    return s ? --s * s * ((e + 1) * s + e) + 1 : 0;
  }, r = t === "out" ? i : t === "in" ? function(n) {
    return 1 - i(1 - n);
  } : yo(i);
  return r.config = function(n) {
    return u(t, n);
  }, r;
};
Ct("Linear,Quad,Cubic,Quart,Quint,Strong", function(u, t) {
  var e = t < 5 ? t + 1 : t;
  ei(u + ",Power" + (e - 1), t ? function(i) {
    return Math.pow(i, e);
  } : function(i) {
    return i;
  }, function(i) {
    return 1 - Math.pow(1 - i, e);
  }, function(i) {
    return i < 0.5 ? Math.pow(i * 2, e) / 2 : 1 - Math.pow((1 - i) * 2, e) / 2;
  });
});
$.Linear.easeNone = $.none = $.Linear.easeIn;
ei("Elastic", Yr("in"), Yr("out"), Yr());
(function(u, t) {
  var e = 1 / t, i = 2 * e, r = 2.5 * e, n = function(o) {
    return o < e ? u * o * o : o < i ? u * Math.pow(o - 1.5 / t, 2) + 0.75 : o < r ? u * (o -= 2.25 / t) * o + 0.9375 : u * Math.pow(o - 2.625 / t, 2) + 0.984375;
  };
  ei("Bounce", function(s) {
    return 1 - n(1 - s);
  }, n);
})(7.5625, 2.75);
ei("Expo", function(u) {
  return Math.pow(2, 10 * (u - 1)) * u + u * u * u * u * u * u * (1 - u);
});
ei("Circ", function(u) {
  return -(Ys(1 - u * u) - 1);
});
ei("Sine", function(u) {
  return u === 1 ? 1 : -ya(u * ga) + 1;
});
ei("Back", Br("in"), Br("out"), Br());
$.SteppedEase = $.steps = It.SteppedEase = {
  config: function(t, e) {
    t === void 0 && (t = 1);
    var i = 1 / t, r = t + (e ? 0 : 1), n = e ? 1 : 0, s = 1 - tt;
    return function(o) {
      return ((r * er(0, s, o) | 0) + n) * i;
    };
  }
};
pi.ease = $["quad.out"];
Ct("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt", function(u) {
  return Ln += u + "," + u + "Params,";
});
var xo = function(t, e) {
  this.id = ma++, t._gsap = this, this.target = t, this.harness = e, this.get = e ? e.get : Qs, this.set = e ? e.getSetter : Yn;
}, Qi = /* @__PURE__ */ (function() {
  function u(e) {
    this.vars = e, this._delay = +e.delay || 0, (this._repeat = e.repeat === 1 / 0 ? -2 : e.repeat || 0) && (this._rDelay = e.repeatDelay || 0, this._yoyo = !!e.yoyo || !!e.yoyoEase), this._ts = 1, yi(this, +e.duration, 1, 1), this.data = e.data, et && (this._ctx = et, et.data.push(this)), qi || At.wake();
  }
  var t = u.prototype;
  return t.delay = function(i) {
    return i || i === 0 ? (this.parent && this.parent.smoothChildTiming && this.startTime(this._start + i - this._delay), this._delay = i, this) : this._delay;
  }, t.duration = function(i) {
    return arguments.length ? this.totalDuration(this._repeat > 0 ? i + (i + this._rDelay) * this._repeat : i) : this.totalDuration() && this._dur;
  }, t.totalDuration = function(i) {
    return arguments.length ? (this._dirty = 0, yi(this, this._repeat < 0 ? i : (i - this._repeat * this._rDelay) / (this._repeat + 1))) : this._tDur;
  }, t.totalTime = function(i, r) {
    if (xi(), !arguments.length)
      return this._tTime;
    var n = this._dp;
    if (n && n.smoothChildTiming && this._ts) {
      for (Mr(this, i), !n._dp || n.parent || to(n, this); n && n.parent; )
        n.parent._time !== n._start + (n._ts >= 0 ? n._tTime / n._ts : (n.totalDuration() - n._tTime) / -n._ts) && n.totalTime(n._tTime, !0), n = n.parent;
      !this.parent && this._dp.autoRemoveChildren && (this._ts > 0 && i < this._tDur || this._ts < 0 && i > 0 || !this._tDur && !i) && se(this._dp, this, this._start - this._delay);
    }
    return (this._tTime !== i || !this._dur && !r || this._initted && Math.abs(this._zTime) === tt || !i && !this._initted && (this.add || this._ptLookup)) && (this._ts || (this._pTime = i), Ks(this, i, r)), this;
  }, t.time = function(i, r) {
    return arguments.length ? this.totalTime(Math.min(this.totalDuration(), i + as(this)) % (this._dur + this._rDelay) || (i ? this._dur : 0), r) : this._time;
  }, t.totalProgress = function(i, r) {
    return arguments.length ? this.totalTime(this.totalDuration() * i, r) : this.totalDuration() ? Math.min(1, this._tTime / this._tDur) : this.rawTime() >= 0 && this._initted ? 1 : 0;
  }, t.progress = function(i, r) {
    return arguments.length ? this.totalTime(this.duration() * (this._yoyo && !(this.iteration() & 1) ? 1 - i : i) + as(this), r) : this.duration() ? Math.min(1, this._time / this._dur) : this.rawTime() > 0 ? 1 : 0;
  }, t.iteration = function(i, r) {
    var n = this.duration() + this._rDelay;
    return arguments.length ? this.totalTime(this._time + (i - 1) * n, r) : this._repeat ? mi(this._tTime, n) + 1 : 1;
  }, t.timeScale = function(i, r) {
    if (!arguments.length)
      return this._rts === -tt ? 0 : this._rts;
    if (this._rts === i)
      return this;
    var n = this.parent && this._ts ? yr(this.parent._time, this) : this._tTime;
    return this._rts = +i || 0, this._ts = this._ps || i === -tt ? 0 : this._rts, this.totalTime(er(-Math.abs(this._delay), this.totalDuration(), n), r !== !1), Cr(this), ka(this);
  }, t.paused = function(i) {
    return arguments.length ? (this._ps !== i && (this._ps = i, i ? (this._pTime = this._tTime || Math.max(-this._delay, this.rawTime()), this._ts = this._act = 0) : (xi(), this._ts = this._rts, this.totalTime(this.parent && !this.parent.smoothChildTiming ? this.rawTime() : this._tTime || this._pTime, this.progress() === 1 && Math.abs(this._zTime) !== tt && (this._tTime -= tt)))), this) : this._ps;
  }, t.startTime = function(i) {
    if (arguments.length) {
      this._start = i;
      var r = this.parent || this._dp;
      return r && (r._sort || !this.parent) && se(r, this, i - this._delay), this;
    }
    return this._start;
  }, t.endTime = function(i) {
    return this._start + (kt(i) ? this.totalDuration() : this.duration()) / Math.abs(this._ts || 1);
  }, t.rawTime = function(i) {
    var r = this.parent || this._dp;
    return r ? i && (!this._ts || this._repeat && this._time && this.totalProgress() < 1) ? this._tTime % (this._dur + this._rDelay) : this._ts ? yr(r.rawTime(i), this) : this._tTime : this._tTime;
  }, t.revert = function(i) {
    i === void 0 && (i = Ta);
    var r = wt;
    return wt = i, Nn(this) && (this.timeline && this.timeline.revert(i), this.totalTime(-0.01, i.suppressEvents)), this.data !== "nested" && i.kill !== !1 && this.kill(), wt = r, this;
  }, t.globalTime = function(i) {
    for (var r = this, n = arguments.length ? i : r.rawTime(); r; )
      n = r._start + n / (Math.abs(r._ts) || 1), r = r._dp;
    return !this.parent && this._sat ? this._sat.globalTime(i) : n;
  }, t.repeat = function(i) {
    return arguments.length ? (this._repeat = i === 1 / 0 ? -2 : i, ls(this)) : this._repeat === -2 ? 1 / 0 : this._repeat;
  }, t.repeatDelay = function(i) {
    if (arguments.length) {
      var r = this._time;
      return this._rDelay = i, ls(this), r ? this.time(r) : this;
    }
    return this._rDelay;
  }, t.yoyo = function(i) {
    return arguments.length ? (this._yoyo = i, this) : this._yoyo;
  }, t.seek = function(i, r) {
    return this.totalTime(Ut(this, i), kt(r));
  }, t.restart = function(i, r) {
    return this.play().totalTime(i ? -this._delay : 0, kt(r)), this._dur || (this._zTime = -tt), this;
  }, t.play = function(i, r) {
    return i != null && this.seek(i, r), this.reversed(!1).paused(!1);
  }, t.reverse = function(i, r) {
    return i != null && this.seek(i || this.totalDuration(), r), this.reversed(!0).paused(!1);
  }, t.pause = function(i, r) {
    return i != null && this.seek(i, r), this.paused(!0);
  }, t.resume = function() {
    return this.paused(!1);
  }, t.reversed = function(i) {
    return arguments.length ? (!!i !== this.reversed() && this.timeScale(-this._rts || (i ? -tt : 0)), this) : this._rts < 0;
  }, t.invalidate = function() {
    return this._initted = this._act = 0, this._zTime = -tt, this;
  }, t.isActive = function() {
    var i = this.parent || this._dp, r = this._start, n;
    return !!(!i || this._ts && this._initted && i.isActive() && (n = i.rawTime(!0)) >= r && n < this.endTime(!0) - tt);
  }, t.eventCallback = function(i, r, n) {
    var s = this.vars;
    return arguments.length > 1 ? (r ? (s[i] = r, n && (s[i + "Params"] = n), i === "onUpdate" && (this._onUpdate = r)) : delete s[i], this) : s[i];
  }, t.then = function(i) {
    var r = this;
    return new Promise(function(n) {
      var s = ot(i) ? i : Zs, o = function() {
        var l = r.then;
        r.then = null, ot(s) && (s = s(r)) && (s.then || s === r) && (r.then = l), n(s), r.then = l;
      };
      r._initted && r.totalProgress() === 1 && r._ts >= 0 || !r._tTime && r._ts < 0 ? o() : r._prom = o;
    });
  }, t.kill = function() {
    Di(this);
  }, u;
})();
zt(Qi.prototype, {
  _time: 0,
  _start: 0,
  _end: 0,
  _tTime: 0,
  _tDur: 0,
  _dirty: 0,
  _repeat: 0,
  _yoyo: !1,
  parent: null,
  _initted: !1,
  _rDelay: 0,
  _ts: 1,
  _dp: 0,
  ratio: 0,
  _zTime: -tt,
  _prom: 0,
  _ps: !1,
  _rts: 1
});
var Pt = /* @__PURE__ */ (function(u) {
  Xs(t, u);
  function t(i, r) {
    var n;
    return i === void 0 && (i = {}), n = u.call(this, i) || this, n.labels = {}, n.smoothChildTiming = !!i.smoothChildTiming, n.autoRemoveChildren = !!i.autoRemoveChildren, n._sort = kt(i.sortChildren), it && se(i.parent || it, fe(n), r), i.reversed && n.reverse(), i.paused && n.paused(!0), i.scrollTrigger && eo(fe(n), i.scrollTrigger), n;
  }
  var e = t.prototype;
  return e.to = function(r, n, s) {
    return Ii(0, arguments, this), this;
  }, e.from = function(r, n, s) {
    return Ii(1, arguments, this), this;
  }, e.fromTo = function(r, n, s, o) {
    return Ii(2, arguments, this), this;
  }, e.set = function(r, n, s) {
    return n.duration = 0, n.parent = this, Ni(n).repeatDelay || (n.repeat = 0), n.immediateRender = !!n.immediateRender, new ct(r, n, Ut(this, s), 1), this;
  }, e.call = function(r, n, s) {
    return se(this, ct.delayedCall(0, r, n), s);
  }, e.staggerTo = function(r, n, s, o, f, l, h) {
    return s.duration = n, s.stagger = s.stagger || o, s.onComplete = l, s.onCompleteParams = h, s.parent = this, new ct(r, s, Ut(this, f)), this;
  }, e.staggerFrom = function(r, n, s, o, f, l, h) {
    return s.runBackwards = 1, Ni(s).immediateRender = kt(s.immediateRender), this.staggerTo(r, n, s, o, f, l, h);
  }, e.staggerFromTo = function(r, n, s, o, f, l, h, d) {
    return o.startAt = s, Ni(o).immediateRender = kt(o.immediateRender), this.staggerTo(r, n, o, f, l, h, d);
  }, e.render = function(r, n, s) {
    var o = this._time, f = this._dirty ? this.totalDuration() : this._tDur, l = this._dur, h = r <= 0 ? 0 : dt(r), d = this._zTime < 0 != r < 0 && (this._initted || !l), _, a, p, c, m, v, w, T, P, y, b, k;
    if (this !== it && h > f && r >= 0 && (h = f), h !== this._tTime || s || d) {
      if (o !== this._time && l && (h += this._time - o, r += this._time - o), _ = h, P = this._start, T = this._ts, v = !T, d && (l || (o = this._zTime), (r || !n) && (this._zTime = r)), this._repeat) {
        if (b = this._yoyo, m = l + this._rDelay, this._repeat < -1 && r < 0)
          return this.totalTime(m * 100 + r, n, s);
        if (_ = dt(h % m), h === f ? (c = this._repeat, _ = l) : (y = dt(h / m), c = ~~y, c && c === y && (_ = l, c--), _ > l && (_ = l)), y = mi(this._tTime, m), !o && this._tTime && y !== c && this._tTime - y * m - this._dur <= 0 && (y = c), b && c & 1 && (_ = l - _, k = 1), c !== y && !this._lock) {
          var S = b && y & 1, M = S === (b && c & 1);
          if (c < y && (S = !S), o = S ? 0 : h % l ? l : h, this._lock = 1, this.render(o || (k ? 0 : dt(c * m)), n, !l)._lock = 0, this._tTime = h, !n && this.parent && Ft(this, "onRepeat"), this.vars.repeatRefresh && !k && (this.invalidate()._lock = 1), o && o !== this._time || v !== !this._ts || this.vars.onRepeat && !this.parent && !this._act)
            return this;
          if (l = this._dur, f = this._tDur, M && (this._lock = 2, o = S ? l : -1e-4, this.render(o, !0), this.vars.repeatRefresh && !k && this.invalidate()), this._lock = 0, !this._ts && !v)
            return this;
          mo(this, k);
        }
      }
      if (this._hasPause && !this._forcing && this._lock < 2 && (w = Oa(this, dt(o), dt(_)), w && (h -= _ - (_ = w._start))), this._tTime = h, this._time = _, this._act = !T, this._initted || (this._onUpdate = this.vars.onUpdate, this._initted = 1, this._zTime = r, o = 0), !o && h && !n && !y && (Ft(this, "onStart"), this._tTime !== h))
        return this;
      if (_ >= o && r >= 0)
        for (a = this._first; a; ) {
          if (p = a._next, (a._act || _ >= a._start) && a._ts && w !== a) {
            if (a.parent !== this)
              return this.render(r, n, s);
            if (a.render(a._ts > 0 ? (_ - a._start) * a._ts : (a._dirty ? a.totalDuration() : a._tDur) + (_ - a._start) * a._ts, n, s), _ !== this._time || !this._ts && !v) {
              w = 0, p && (h += this._zTime = -tt);
              break;
            }
          }
          a = p;
        }
      else {
        a = this._last;
        for (var I = r < 0 ? r : _; a; ) {
          if (p = a._prev, (a._act || I <= a._end) && a._ts && w !== a) {
            if (a.parent !== this)
              return this.render(r, n, s);
            if (a.render(a._ts > 0 ? (I - a._start) * a._ts : (a._dirty ? a.totalDuration() : a._tDur) + (I - a._start) * a._ts, n, s || wt && Nn(a)), _ !== this._time || !this._ts && !v) {
              w = 0, p && (h += this._zTime = I ? -tt : tt);
              break;
            }
          }
          a = p;
        }
      }
      if (w && !n && (this.pause(), w.render(_ >= o ? 0 : -tt)._zTime = _ >= o ? 1 : -1, this._ts))
        return this._start = P, Cr(this), this.render(r, n, s);
      this._onUpdate && !n && Ft(this, "onUpdate", !0), (h === f && this._tTime >= this.totalDuration() || !h && o) && (P === this._start || Math.abs(T) !== Math.abs(this._ts)) && (this._lock || ((r || !l) && (h === f && this._ts > 0 || !h && this._ts < 0) && Ee(this, 1), !n && !(r < 0 && !o) && (h || o || !f) && (Ft(this, h === f && r >= 0 ? "onComplete" : "onReverseComplete", !0), this._prom && !(h < f && this.timeScale() > 0) && this._prom())));
    }
    return this;
  }, e.add = function(r, n) {
    var s = this;
    if (pe(n) || (n = Ut(this, n, r)), !(r instanceof Qi)) {
      if (St(r))
        return r.forEach(function(o) {
          return s.add(o, n);
        }), this;
      if (yt(r))
        return this.addLabel(r, n);
      if (ot(r))
        r = ct.delayedCall(0, r);
      else
        return this;
    }
    return this !== r ? se(this, r, n) : this;
  }, e.getChildren = function(r, n, s, o) {
    r === void 0 && (r = !0), n === void 0 && (n = !0), s === void 0 && (s = !0), o === void 0 && (o = -Ht);
    for (var f = [], l = this._first; l; )
      l._start >= o && (l instanceof ct ? n && f.push(l) : (s && f.push(l), r && f.push.apply(f, l.getChildren(!0, n, s)))), l = l._next;
    return f;
  }, e.getById = function(r) {
    for (var n = this.getChildren(1, 1, 1), s = n.length; s--; )
      if (n[s].vars.id === r)
        return n[s];
  }, e.remove = function(r) {
    return yt(r) ? this.removeLabel(r) : ot(r) ? this.killTweensOf(r) : (r.parent === this && kr(this, r), r === this._recent && (this._recent = this._last), He(this));
  }, e.totalTime = function(r, n) {
    return arguments.length ? (this._forcing = 1, !this._dp && this._ts && (this._start = dt(At.time - (this._ts > 0 ? r / this._ts : (this.totalDuration() - r) / -this._ts))), u.prototype.totalTime.call(this, r, n), this._forcing = 0, this) : this._tTime;
  }, e.addLabel = function(r, n) {
    return this.labels[r] = Ut(this, n), this;
  }, e.removeLabel = function(r) {
    return delete this.labels[r], this;
  }, e.addPause = function(r, n, s) {
    var o = ct.delayedCall(0, n || Hi, s);
    return o.data = "isPause", this._hasPause = 1, se(this, o, Ut(this, r));
  }, e.removePause = function(r) {
    var n = this._first;
    for (r = Ut(this, r); n; )
      n._start === r && n.data === "isPause" && Ee(n), n = n._next;
  }, e.killTweensOf = function(r, n, s) {
    for (var o = this.getTweensOf(r, s), f = o.length; f--; )
      Se !== o[f] && o[f].kill(r, n);
    return this;
  }, e.getTweensOf = function(r, n) {
    for (var s = [], o = Gt(r), f = this._first, l = pe(n), h; f; )
      f instanceof ct ? ba(f._targets, o) && (l ? (!Se || f._initted && f._ts) && f.globalTime(0) <= n && f.globalTime(f.totalDuration()) > n : !n || f.isActive()) && s.push(f) : (h = f.getTweensOf(o, n)).length && s.push.apply(s, h), f = f._next;
    return s;
  }, e.tweenTo = function(r, n) {
    n = n || {};
    var s = this, o = Ut(s, r), f = n, l = f.startAt, h = f.onStart, d = f.onStartParams, _ = f.immediateRender, a, p = ct.to(s, zt({
      ease: n.ease || "none",
      lazy: !1,
      immediateRender: !1,
      time: o,
      overwrite: "auto",
      duration: n.duration || Math.abs((o - (l && "time" in l ? l.time : s._time)) / s.timeScale()) || tt,
      onStart: function() {
        if (s.pause(), !a) {
          var m = n.duration || Math.abs((o - (l && "time" in l ? l.time : s._time)) / s.timeScale());
          p._dur !== m && yi(p, m, 0, 1).render(p._time, !0, !0), a = 1;
        }
        h && h.apply(p, d || []);
      }
    }, n));
    return _ ? p.render(0) : p;
  }, e.tweenFromTo = function(r, n, s) {
    return this.tweenTo(n, zt({
      startAt: {
        time: Ut(this, r)
      }
    }, s));
  }, e.recent = function() {
    return this._recent;
  }, e.nextLabel = function(r) {
    return r === void 0 && (r = this._time), us(this, Ut(this, r));
  }, e.previousLabel = function(r) {
    return r === void 0 && (r = this._time), us(this, Ut(this, r), 1);
  }, e.currentLabel = function(r) {
    return arguments.length ? this.seek(r, !0) : this.previousLabel(this._time + tt);
  }, e.shiftChildren = function(r, n, s) {
    s === void 0 && (s = 0);
    for (var o = this._first, f = this.labels, l; o; )
      o._start >= s && (o._start += r, o._end += r), o = o._next;
    if (n)
      for (l in f)
        f[l] >= s && (f[l] += r);
    return He(this);
  }, e.invalidate = function(r) {
    var n = this._first;
    for (this._lock = 0; n; )
      n.invalidate(r), n = n._next;
    return u.prototype.invalidate.call(this, r);
  }, e.clear = function(r) {
    r === void 0 && (r = !0);
    for (var n = this._first, s; n; )
      s = n._next, this.remove(n), n = s;
    return this._dp && (this._time = this._tTime = this._pTime = 0), r && (this.labels = {}), He(this);
  }, e.totalDuration = function(r) {
    var n = 0, s = this, o = s._last, f = Ht, l, h, d;
    if (arguments.length)
      return s.timeScale((s._repeat < 0 ? s.duration() : s.totalDuration()) / (s.reversed() ? -r : r));
    if (s._dirty) {
      for (d = s.parent; o; )
        l = o._prev, o._dirty && o.totalDuration(), h = o._start, h > f && s._sort && o._ts && !s._lock ? (s._lock = 1, se(s, o, h - o._delay, 1)._lock = 0) : f = h, h < 0 && o._ts && (n -= h, (!d && !s._dp || d && d.smoothChildTiming) && (s._start += h / s._ts, s._time -= h, s._tTime -= h), s.shiftChildren(-h, !1, -1 / 0), f = 0), o._end > n && o._ts && (n = o._end), o = l;
      yi(s, s === it && s._time > n ? s._time : n, 1, 1), s._dirty = 0;
    }
    return s._tDur;
  }, t.updateRoot = function(r) {
    if (it._ts && (Ks(it, yr(r, it)), qs = At.frame), At.frame >= ss) {
      ss += Nt.autoSleep || 120;
      var n = it._first;
      if ((!n || !n._ts) && Nt.autoSleep && At._listeners.length < 2) {
        for (; n && !n._ts; )
          n = n._next;
        n || At.sleep();
      }
    }
  }, t;
})(Qi);
zt(Pt.prototype, {
  _lock: 0,
  _hasPause: 0,
  _forcing: 0
});
var Ha = function(t, e, i, r, n, s, o) {
  var f = new Mt(this._pt, t, e, 0, 1, Po, null, n), l = 0, h = 0, d, _, a, p, c, m, v, w;
  for (f.b = i, f.e = r, i += "", r += "", (v = ~r.indexOf("random(")) && (r = Gi(r)), s && (w = [i, r], s(w, t, e), i = w[0], r = w[1]), _ = i.match(Ir) || []; d = Ir.exec(r); )
    p = d[0], c = r.substring(l, d.index), a ? a = (a + 1) % 5 : c.substr(-5) === "rgba(" && (a = 1), p !== _[h++] && (m = parseFloat(_[h - 1]) || 0, f._pt = {
      _next: f._pt,
      p: c || h === 1 ? c : ",",
      //note: SVG spec allows omission of comma/space when a negative sign is wedged between two numbers, like 2.5-5.3 instead of 2.5,-5.3 but when tweening, the negative value may switch to positive, so we insert the comma just in case.
      s: m,
      c: p.charAt(1) === "=" ? ui(m, p) - m : parseFloat(p) - m,
      m: a && a < 4 ? Math.round : 0
    }, l = Ir.lastIndex);
  return f.c = l < r.length ? r.substring(l, r.length) : "", f.fp = o, (Vs.test(r) || v) && (f.e = 0), this._pt = f, f;
}, In = function(t, e, i, r, n, s, o, f, l, h) {
  ot(r) && (r = r(n || 0, t, s));
  var d = t[e], _ = i !== "get" ? i : ot(d) ? l ? t[e.indexOf("set") || !ot(t["get" + e.substr(3)]) ? e : "get" + e.substr(3)](l) : t[e]() : d, a = ot(d) ? l ? ja : bo : Xn, p;
  if (yt(r) && (~r.indexOf("random(") && (r = Gi(r)), r.charAt(1) === "=" && (p = ui(_, r) + (bt(_) || 0), (p || p === 0) && (r = p))), !h || _ !== r || un)
    return !isNaN(_ * r) && r !== "" ? (p = new Mt(this._pt, t, e, +_ || 0, r - (_ || 0), typeof d == "boolean" ? Ja : So, 0, a), l && (p.fp = l), o && p.modifier(o, this, t), this._pt = p) : (!d && !(e in t) && Rn(e, r), Ha.call(this, t, e, _, r, a, f || Nt.stringFilter, l));
}, Ga = function(t, e, i, r, n) {
  if (ot(t) && (t = zi(t, n, e, i, r)), !ae(t) || t.style && t.nodeType || St(t) || Bs(t))
    return yt(t) ? zi(t, n, e, i, r) : t;
  var s = {}, o;
  for (o in t)
    s[o] = zi(t[o], n, e, i, r);
  return s;
}, vo = function(t, e, i, r, n, s) {
  var o, f, l, h;
  if (Rt[t] && (o = new Rt[t]()).init(n, o.rawVars ? e[t] : Ga(e[t], r, n, s, i), i, r, s) !== !1 && (i._pt = f = new Mt(i._pt, n, t, 0, 1, o.render, o, 0, o.priority), i !== ai))
    for (l = i._ptLookup[i._targets.indexOf(n)], h = o._props.length; h--; )
      l[o._props[h]] = f;
  return o;
}, Se, un, zn = function u(t, e, i) {
  var r = t.vars, n = r.ease, s = r.startAt, o = r.immediateRender, f = r.lazy, l = r.onUpdate, h = r.runBackwards, d = r.yoyoEase, _ = r.keyframes, a = r.autoRevert, p = t._dur, c = t._startAt, m = t._targets, v = t.parent, w = v && v.data === "nested" ? v.vars.targets : m, T = t._overwrite === "auto" && !Mn, P = t.timeline, y, b, k, S, M, I, A, N, E, U, W, z, X;
  if (P && (!_ || !n) && (n = "none"), t._ease = Ge(n, pi.ease), t._yEase = d ? go(Ge(d === !0 ? n : d, pi.ease)) : 0, d && t._yoyo && !t._repeat && (d = t._yEase, t._yEase = t._ease, t._ease = d), t._from = !P && !!r.runBackwards, !P || _ && !r.stagger) {
    if (N = m[0] ? Ue(m[0]).harness : 0, z = N && r[N.prop], y = mr(r, An), c && (c._zTime < 0 && c.progress(1), e < 0 && h && o && !a ? c.render(-1, !0) : c.revert(h && p ? ur : wa), c._lazy = 0), s) {
      if (Ee(t._startAt = ct.set(m, zt({
        data: "isStart",
        overwrite: !1,
        parent: v,
        immediateRender: !0,
        lazy: !c && kt(f),
        startAt: null,
        delay: 0,
        onUpdate: l && function() {
          return Ft(t, "onUpdate");
        },
        stagger: 0
      }, s))), t._startAt._dp = 0, t._startAt._sat = t, e < 0 && (wt || !o && !a) && t._startAt.revert(ur), o && p && e <= 0 && i <= 0) {
        e && (t._zTime = e);
        return;
      }
    } else if (h && p && !c) {
      if (e && (o = !1), k = zt({
        overwrite: !1,
        data: "isFromStart",
        //we tag the tween with as "isFromStart" so that if [inside a plugin] we need to only do something at the very END of a tween, we have a way of identifying this tween as merely the one that's setting the beginning values for a "from()" tween. For example, clearProps in CSSPlugin should only get applied at the very END of a tween and without this tag, from(...{height:100, clearProps:"height", delay:1}) would wipe the height at the beginning of the tween and after 1 second, it'd kick back in.
        lazy: o && !c && kt(f),
        immediateRender: o,
        //zero-duration tweens render immediately by default, but if we're not specifically instructed to render this tween immediately, we should skip this and merely _init() to record the starting values (rendering them immediately would push them to completion which is wasteful in that case - we'd have to render(-1) immediately after)
        stagger: 0,
        parent: v
        //ensures that nested tweens that had a stagger are handled properly, like gsap.from(".class", {y: gsap.utils.wrap([-100,100]), stagger: 0.5})
      }, y), z && (k[N.prop] = z), Ee(t._startAt = ct.set(m, k)), t._startAt._dp = 0, t._startAt._sat = t, e < 0 && (wt ? t._startAt.revert(ur) : t._startAt.render(-1, !0)), t._zTime = e, !o)
        u(t._startAt, tt, tt);
      else if (!e)
        return;
    }
    for (t._pt = t._ptCache = 0, f = p && kt(f) || f && !p, b = 0; b < m.length; b++) {
      if (M = m[b], A = M._gsap || Fn(m)[b]._gsap, t._ptLookup[b] = U = {}, rn[A.id] && Me.length && gr(), W = w === m ? b : w.indexOf(M), N && (E = new N()).init(M, z || y, t, W, w) !== !1 && (t._pt = S = new Mt(t._pt, M, E.name, 0, 1, E.render, E, 0, E.priority), E._props.forEach(function(_t) {
        U[_t] = S;
      }), E.priority && (I = 1)), !N || z)
        for (k in y)
          Rt[k] && (E = vo(k, y, t, W, M, w)) ? E.priority && (I = 1) : U[k] = S = In.call(t, M, k, "get", y[k], W, w, 0, r.stringFilter);
      t._op && t._op[b] && t.kill(M, t._op[b]), T && t._pt && (Se = t, it.killTweensOf(M, U, t.globalTime(e)), X = !t.parent, Se = 0), t._pt && f && (rn[A.id] = 1);
    }
    I && ko(t), t._onInit && t._onInit(t);
  }
  t._onUpdate = l, t._initted = (!t._op || t._pt) && !X, _ && e <= 0 && P.render(Ht, !0, !0);
}, qa = function(t, e, i, r, n, s, o, f) {
  var l = (t._pt && t._ptCache || (t._ptCache = {}))[e], h, d, _, a;
  if (!l)
    for (l = t._ptCache[e] = [], _ = t._ptLookup, a = t._targets.length; a--; ) {
      if (h = _[a][e], h && h.d && h.d._pt)
        for (h = h.d._pt; h && h.p !== e && h.fp !== e; )
          h = h._next;
      if (!h)
        return un = 1, t.vars[e] = "+=0", zn(t, o), un = 0, f ? Ui(e + " not eligible for reset") : 1;
      l.push(h);
    }
  for (a = l.length; a--; )
    d = l[a], h = d._pt || d, h.s = (r || r === 0) && !n ? r : h.s + (r || 0) + s * h.c, h.c = i - h.s, d.e && (d.e = ut(i) + bt(d.e)), d.b && (d.b = h.s + bt(d.b));
}, Qa = function(t, e) {
  var i = t[0] ? Ue(t[0]).harness : 0, r = i && i.aliases, n, s, o, f;
  if (!r)
    return e;
  n = gi({}, e);
  for (s in r)
    if (s in n)
      for (f = r[s].split(","), o = f.length; o--; )
        n[f[o]] = n[s];
  return n;
}, Ka = function(t, e, i, r) {
  var n = e.ease || r || "power1.inOut", s, o;
  if (St(e))
    o = i[t] || (i[t] = []), e.forEach(function(f, l) {
      return o.push({
        t: l / (e.length - 1) * 100,
        v: f,
        e: n
      });
    });
  else
    for (s in e)
      o = i[s] || (i[s] = []), s === "ease" || o.push({
        t: parseFloat(t),
        v: e[s],
        e: n
      });
}, zi = function(t, e, i, r, n) {
  return ot(t) ? t.call(e, i, r, n) : yt(t) && ~t.indexOf("random(") ? Gi(t) : t;
}, wo = Ln + "repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert", To = {};
Ct(wo + ",id,stagger,delay,duration,paused,scrollTrigger", function(u) {
  return To[u] = 1;
});
var ct = /* @__PURE__ */ (function(u) {
  Xs(t, u);
  function t(i, r, n, s) {
    var o;
    typeof r == "number" && (n.duration = r, r = n, n = null), o = u.call(this, s ? r : Ni(r)) || this;
    var f = o.vars, l = f.duration, h = f.delay, d = f.immediateRender, _ = f.stagger, a = f.overwrite, p = f.keyframes, c = f.defaults, m = f.scrollTrigger, v = f.yoyoEase, w = r.parent || it, T = (St(i) || Bs(i) ? pe(i[0]) : "length" in r) ? [i] : Gt(i), P, y, b, k, S, M, I, A;
    if (o._targets = T.length ? Fn(T) : Ui("GSAP target " + i + " not found. https://gsap.com", !Nt.nullTargetWarn) || [], o._ptLookup = [], o._overwrite = a, p || _ || or(l) || or(h)) {
      if (r = o.vars, P = o.timeline = new Pt({
        data: "nested",
        defaults: c || {},
        targets: w && w.data === "nested" ? w.vars.targets : T
      }), P.kill(), P.parent = P._dp = fe(o), P._start = 0, _ || or(l) || or(h)) {
        if (k = T.length, I = _ && so(_), ae(_))
          for (S in _)
            ~wo.indexOf(S) && (A || (A = {}), A[S] = _[S]);
        for (y = 0; y < k; y++)
          b = mr(r, To), b.stagger = 0, v && (b.yoyoEase = v), A && gi(b, A), M = T[y], b.duration = +zi(l, fe(o), y, M, T), b.delay = (+zi(h, fe(o), y, M, T) || 0) - o._delay, !_ && k === 1 && b.delay && (o._delay = h = b.delay, o._start += h, b.delay = 0), P.to(M, b, I ? I(y, M, T) : 0), P._ease = $.none;
        P.duration() ? l = h = 0 : o.timeline = 0;
      } else if (p) {
        Ni(zt(P.vars.defaults, {
          ease: "none"
        })), P._ease = Ge(p.ease || r.ease || "none");
        var N = 0, E, U, W;
        if (St(p))
          p.forEach(function(z) {
            return P.to(T, z, ">");
          }), P.duration();
        else {
          b = {};
          for (S in p)
            S === "ease" || S === "easeEach" || Ka(S, p[S], b, p.easeEach);
          for (S in b)
            for (E = b[S].sort(function(z, X) {
              return z.t - X.t;
            }), N = 0, y = 0; y < E.length; y++)
              U = E[y], W = {
                ease: U.e,
                duration: (U.t - (y ? E[y - 1].t : 0)) / 100 * l
              }, W[S] = U.v, P.to(T, W, N), N += W.duration;
          P.duration() < l && P.to({}, {
            duration: l - P.duration()
          });
        }
      }
      l || o.duration(l = P.duration());
    } else
      o.timeline = 0;
    return a === !0 && !Mn && (Se = fe(o), it.killTweensOf(T), Se = 0), se(w, fe(o), n), r.reversed && o.reverse(), r.paused && o.paused(!0), (d || !l && !p && o._start === dt(w._time) && kt(d) && Ca(fe(o)) && w.data !== "nested") && (o._tTime = -tt, o.render(Math.max(0, -h) || 0)), m && eo(fe(o), m), o;
  }
  var e = t.prototype;
  return e.render = function(r, n, s) {
    var o = this._time, f = this._tDur, l = this._dur, h = r < 0, d = r > f - tt && !h ? f : r < tt ? 0 : r, _, a, p, c, m, v, w, T, P;
    if (!l)
      Da(this, r, n, s);
    else if (d !== this._tTime || !r || s || !this._initted && this._tTime || this._startAt && this._zTime < 0 !== h || this._lazy) {
      if (_ = d, T = this.timeline, this._repeat) {
        if (c = l + this._rDelay, this._repeat < -1 && h)
          return this.totalTime(c * 100 + r, n, s);
        if (_ = dt(d % c), d === f ? (p = this._repeat, _ = l) : (m = dt(d / c), p = ~~m, p && p === m ? (_ = l, p--) : _ > l && (_ = l)), v = this._yoyo && p & 1, v && (P = this._yEase, _ = l - _), m = mi(this._tTime, c), _ === o && !s && this._initted && p === m)
          return this._tTime = d, this;
        p !== m && (T && this._yEase && mo(T, v), this.vars.repeatRefresh && !v && !this._lock && _ !== c && this._initted && (this._lock = s = 1, this.render(dt(c * p), !0).invalidate()._lock = 0));
      }
      if (!this._initted) {
        if (io(this, h ? r : _, s, n, d))
          return this._tTime = 0, this;
        if (o !== this._time && !(s && this.vars.repeatRefresh && p !== m))
          return this;
        if (l !== this._dur)
          return this.render(r, n, s);
      }
      if (this._tTime = d, this._time = _, !this._act && this._ts && (this._act = 1, this._lazy = 0), this.ratio = w = (P || this._ease)(_ / l), this._from && (this.ratio = w = 1 - w), !o && d && !n && !m && (Ft(this, "onStart"), this._tTime !== d))
        return this;
      for (a = this._pt; a; )
        a.r(w, a.d), a = a._next;
      T && T.render(r < 0 ? r : T._dur * T._ease(_ / this._dur), n, s) || this._startAt && (this._zTime = r), this._onUpdate && !n && (h && nn(this, r, n, s), Ft(this, "onUpdate")), this._repeat && p !== m && this.vars.onRepeat && !n && this.parent && Ft(this, "onRepeat"), (d === this._tDur || !d) && this._tTime === d && (h && !this._onUpdate && nn(this, r, !0, !0), (r || !l) && (d === this._tDur && this._ts > 0 || !d && this._ts < 0) && Ee(this, 1), !n && !(h && !o) && (d || o || v) && (Ft(this, d === f ? "onComplete" : "onReverseComplete", !0), this._prom && !(d < f && this.timeScale() > 0) && this._prom()));
    }
    return this;
  }, e.targets = function() {
    return this._targets;
  }, e.invalidate = function(r) {
    return (!r || !this.vars.runBackwards) && (this._startAt = 0), this._pt = this._op = this._onUpdate = this._lazy = this.ratio = 0, this._ptLookup = [], this.timeline && this.timeline.invalidate(r), u.prototype.invalidate.call(this, r);
  }, e.resetTo = function(r, n, s, o, f) {
    qi || At.wake(), this._ts || this.play();
    var l = Math.min(this._dur, (this._dp._time - this._start) * this._ts), h;
    return this._initted || zn(this, l), h = this._ease(l / this._dur), qa(this, r, n, s, o, h, l, f) ? this.resetTo(r, n, s, o, 1) : (Mr(this, 0), this.parent || Js(this._dp, this, "_first", "_last", this._dp._sort ? "_start" : 0), this.render(0));
  }, e.kill = function(r, n) {
    if (n === void 0 && (n = "all"), !r && (!n || n === "all"))
      return this._lazy = this._pt = 0, this.parent ? Di(this) : this.scrollTrigger && this.scrollTrigger.kill(!!wt), this;
    if (this.timeline) {
      var s = this.timeline.totalDuration();
      return this.timeline.killTweensOf(r, n, Se && Se.vars.overwrite !== !0)._first || Di(this), this.parent && s !== this.timeline.totalDuration() && yi(this, this._dur * this.timeline._tDur / s, 0, 1), this;
    }
    var o = this._targets, f = r ? Gt(r) : o, l = this._ptLookup, h = this._pt, d, _, a, p, c, m, v;
    if ((!n || n === "all") && Pa(o, f))
      return n === "all" && (this._pt = 0), Di(this);
    for (d = this._op = this._op || [], n !== "all" && (yt(n) && (c = {}, Ct(n, function(w) {
      return c[w] = 1;
    }), n = c), n = Qa(o, n)), v = o.length; v--; )
      if (~f.indexOf(o[v])) {
        _ = l[v], n === "all" ? (d[v] = n, p = _, a = {}) : (a = d[v] = d[v] || {}, p = n);
        for (c in p)
          m = _ && _[c], m && ((!("kill" in m.d) || m.d.kill(c) === !0) && kr(this, m, "_pt"), delete _[c]), a !== "all" && (a[c] = 1);
      }
    return this._initted && !this._pt && h && Di(this), this;
  }, t.to = function(r, n) {
    return new t(r, n, arguments[2]);
  }, t.from = function(r, n) {
    return Ii(1, arguments);
  }, t.delayedCall = function(r, n, s, o) {
    return new t(n, 0, {
      immediateRender: !1,
      lazy: !1,
      overwrite: !1,
      delay: r,
      onComplete: n,
      onReverseComplete: n,
      onCompleteParams: s,
      onReverseCompleteParams: s,
      callbackScope: o
    });
  }, t.fromTo = function(r, n, s) {
    return Ii(2, arguments);
  }, t.set = function(r, n) {
    return n.duration = 0, n.repeatDelay || (n.repeat = 0), new t(r, n);
  }, t.killTweensOf = function(r, n, s) {
    return it.killTweensOf(r, n, s);
  }, t;
})(Qi);
zt(ct.prototype, {
  _targets: [],
  _lazy: 0,
  _startAt: 0,
  _op: 0,
  _onInit: 0
});
Ct("staggerTo,staggerFrom,staggerFromTo", function(u) {
  ct[u] = function() {
    var t = new Pt(), e = on.call(arguments, 0);
    return e.splice(u === "staggerFromTo" ? 5 : 4, 0, 0), t[u].apply(t, e);
  };
});
var Xn = function(t, e, i) {
  return t[e] = i;
}, bo = function(t, e, i) {
  return t[e](i);
}, ja = function(t, e, i, r) {
  return t[e](r.fp, i);
}, Za = function(t, e, i) {
  return t.setAttribute(e, i);
}, Yn = function(t, e) {
  return ot(t[e]) ? bo : Dn(t[e]) && t.setAttribute ? Za : Xn;
}, So = function(t, e) {
  return e.set(e.t, e.p, Math.round((e.s + e.c * t) * 1e6) / 1e6, e);
}, Ja = function(t, e) {
  return e.set(e.t, e.p, !!(e.s + e.c * t), e);
}, Po = function(t, e) {
  var i = e._pt, r = "";
  if (!t && e.b)
    r = e.b;
  else if (t === 1 && e.e)
    r = e.e;
  else {
    for (; i; )
      r = i.p + (i.m ? i.m(i.s + i.c * t) : Math.round((i.s + i.c * t) * 1e4) / 1e4) + r, i = i._next;
    r += e.c;
  }
  e.set(e.t, e.p, r, e);
}, Bn = function(t, e) {
  for (var i = e._pt; i; )
    i.r(t, i.d), i = i._next;
}, tl = function(t, e, i, r) {
  for (var n = this._pt, s; n; )
    s = n._next, n.p === r && n.modifier(t, e, i), n = s;
}, el = function(t) {
  for (var e = this._pt, i, r; e; )
    r = e._next, e.p === t && !e.op || e.op === t ? kr(this, e, "_pt") : e.dep || (i = 1), e = r;
  return !i;
}, il = function(t, e, i, r) {
  r.mSet(t, e, r.m.call(r.tween, i, r.mt), r);
}, ko = function(t) {
  for (var e = t._pt, i, r, n, s; e; ) {
    for (i = e._next, r = n; r && r.pr > e.pr; )
      r = r._next;
    (e._prev = r ? r._prev : s) ? e._prev._next = e : n = e, (e._next = r) ? r._prev = e : s = e, e = i;
  }
  t._pt = n;
}, Mt = /* @__PURE__ */ (function() {
  function u(e, i, r, n, s, o, f, l, h) {
    this.t = i, this.s = n, this.c = s, this.p = r, this.r = o || So, this.d = f || this, this.set = l || Xn, this.pr = h || 0, this._next = e, e && (e._prev = this);
  }
  var t = u.prototype;
  return t.modifier = function(i, r, n) {
    this.mSet = this.mSet || this.set, this.set = il, this.m = i, this.mt = n, this.tween = r;
  }, u;
})();
Ct(Ln + "parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger", function(u) {
  return An[u] = 1;
});
It.TweenMax = It.TweenLite = ct;
It.TimelineLite = It.TimelineMax = Pt;
it = new Pt({
  sortChildren: !1,
  defaults: pi,
  autoRemoveChildren: !0,
  id: "root",
  smoothChildTiming: !0
});
Nt.stringFilter = po;
var qe = [], hr = {}, rl = [], hs = 0, nl = 0, $r = function(t) {
  return (hr[t] || rl).map(function(e) {
    return e();
  });
}, fn = function() {
  var t = Date.now(), e = [];
  t - hs > 2 && ($r("matchMediaInit"), qe.forEach(function(i) {
    var r = i.queries, n = i.conditions, s, o, f, l;
    for (o in r)
      s = re.matchMedia(r[o]).matches, s && (f = 1), s !== n[o] && (n[o] = s, l = 1);
    l && (i.revert(), f && e.push(i));
  }), $r("matchMediaRevert"), e.forEach(function(i) {
    return i.onMatch(i, function(r) {
      return i.add(null, r);
    });
  }), hs = t, $r("matchMedia"));
}, Co = /* @__PURE__ */ (function() {
  function u(e, i) {
    this.selector = i && an(i), this.data = [], this._r = [], this.isReverted = !1, this.id = nl++, e && this.add(e);
  }
  var t = u.prototype;
  return t.add = function(i, r, n) {
    ot(i) && (n = r, r = i, i = ot);
    var s = this, o = function() {
      var l = et, h = s.selector, d;
      return l && l !== s && l.data.push(s), n && (s.selector = an(n)), et = s, d = r.apply(s, arguments), ot(d) && s._r.push(d), et = l, s.selector = h, s.isReverted = !1, d;
    };
    return s.last = o, i === ot ? o(s, function(f) {
      return s.add(null, f);
    }) : i ? s[i] = o : o;
  }, t.ignore = function(i) {
    var r = et;
    et = null, i(this), et = r;
  }, t.getTweens = function() {
    var i = [];
    return this.data.forEach(function(r) {
      return r instanceof u ? i.push.apply(i, r.getTweens()) : r instanceof ct && !(r.parent && r.parent.data === "nested") && i.push(r);
    }), i;
  }, t.clear = function() {
    this._r.length = this.data.length = 0;
  }, t.kill = function(i, r) {
    var n = this;
    if (i ? (function() {
      for (var o = n.getTweens(), f = n.data.length, l; f--; )
        l = n.data[f], l.data === "isFlip" && (l.revert(), l.getChildren(!0, !0, !1).forEach(function(h) {
          return o.splice(o.indexOf(h), 1);
        }));
      for (o.map(function(h) {
        return {
          g: h._dur || h._delay || h._sat && !h._sat.vars.immediateRender ? h.globalTime(0) : -1 / 0,
          t: h
        };
      }).sort(function(h, d) {
        return d.g - h.g || -1 / 0;
      }).forEach(function(h) {
        return h.t.revert(i);
      }), f = n.data.length; f--; )
        l = n.data[f], l instanceof Pt ? l.data !== "nested" && (l.scrollTrigger && l.scrollTrigger.revert(), l.kill()) : !(l instanceof ct) && l.revert && l.revert(i);
      n._r.forEach(function(h) {
        return h(i, n);
      }), n.isReverted = !0;
    })() : this.data.forEach(function(o) {
      return o.kill && o.kill();
    }), this.clear(), r)
      for (var s = qe.length; s--; )
        qe[s].id === this.id && qe.splice(s, 1);
  }, t.revert = function(i) {
    this.kill(i || {});
  }, u;
})(), sl = /* @__PURE__ */ (function() {
  function u(e) {
    this.contexts = [], this.scope = e, et && et.data.push(this);
  }
  var t = u.prototype;
  return t.add = function(i, r, n) {
    ae(i) || (i = {
      matches: i
    });
    var s = new Co(0, n || this.scope), o = s.conditions = {}, f, l, h;
    et && !s.selector && (s.selector = et.selector), this.contexts.push(s), r = s.add("onMatch", r), s.queries = i;
    for (l in i)
      l === "all" ? h = 1 : (f = re.matchMedia(i[l]), f && (qe.indexOf(s) < 0 && qe.push(s), (o[l] = f.matches) && (h = 1), f.addListener ? f.addListener(fn) : f.addEventListener("change", fn)));
    return h && r(s, function(d) {
      return s.add(null, d);
    }), this;
  }, t.revert = function(i) {
    this.kill(i || {});
  }, t.kill = function(i) {
    this.contexts.forEach(function(r) {
      return r.kill(i, !0);
    });
  }, u;
})(), xr = {
  registerPlugin: function() {
    for (var t = arguments.length, e = new Array(t), i = 0; i < t; i++)
      e[i] = arguments[i];
    e.forEach(function(r) {
      return ho(r);
    });
  },
  timeline: function(t) {
    return new Pt(t);
  },
  getTweensOf: function(t, e) {
    return it.getTweensOf(t, e);
  },
  getProperty: function(t, e, i, r) {
    yt(t) && (t = Gt(t)[0]);
    var n = Ue(t || {}).get, s = i ? Zs : js;
    return i === "native" && (i = ""), t && (e ? s((Rt[e] && Rt[e].get || n)(t, e, i, r)) : function(o, f, l) {
      return s((Rt[o] && Rt[o].get || n)(t, o, f, l));
    });
  },
  quickSetter: function(t, e, i) {
    if (t = Gt(t), t.length > 1) {
      var r = t.map(function(h) {
        return Ot.quickSetter(h, e, i);
      }), n = r.length;
      return function(h) {
        for (var d = n; d--; )
          r[d](h);
      };
    }
    t = t[0] || {};
    var s = Rt[e], o = Ue(t), f = o.harness && (o.harness.aliases || {})[e] || e, l = s ? function(h) {
      var d = new s();
      ai._pt = 0, d.init(t, i ? h + i : h, ai, 0, [t]), d.render(1, d), ai._pt && Bn(1, ai);
    } : o.set(t, f);
    return s ? l : function(h) {
      return l(t, f, i ? h + i : h, o, 1);
    };
  },
  quickTo: function(t, e, i) {
    var r, n = Ot.to(t, zt((r = {}, r[e] = "+=0.1", r.paused = !0, r.stagger = 0, r), i || {})), s = function(f, l, h) {
      return n.resetTo(e, f, l, h);
    };
    return s.tween = n, s;
  },
  isTweening: function(t) {
    return it.getTweensOf(t, !0).length > 0;
  },
  defaults: function(t) {
    return t && t.ease && (t.ease = Ge(t.ease, pi.ease)), os(pi, t || {});
  },
  config: function(t) {
    return os(Nt, t || {});
  },
  registerEffect: function(t) {
    var e = t.name, i = t.effect, r = t.plugins, n = t.defaults, s = t.extendTimeline;
    (r || "").split(",").forEach(function(o) {
      return o && !Rt[o] && !It[o] && Ui(e + " effect requires " + o + " plugin.");
    }), zr[e] = function(o, f, l) {
      return i(Gt(o), zt(f || {}, n), l);
    }, s && (Pt.prototype[e] = function(o, f, l) {
      return this.add(zr[e](o, ae(f) ? f : (l = f) && {}, this), l);
    });
  },
  registerEase: function(t, e) {
    $[t] = Ge(e);
  },
  parseEase: function(t, e) {
    return arguments.length ? Ge(t, e) : $;
  },
  getById: function(t) {
    return it.getById(t);
  },
  exportRoot: function(t, e) {
    t === void 0 && (t = {});
    var i = new Pt(t), r, n;
    for (i.smoothChildTiming = kt(t.smoothChildTiming), it.remove(i), i._dp = 0, i._time = i._tTime = it._time, r = it._first; r; )
      n = r._next, (e || !(!r._dur && r instanceof ct && r.vars.onComplete === r._targets[0])) && se(i, r, r._start - r._delay), r = n;
    return se(it, i, 0), i;
  },
  context: function(t, e) {
    return t ? new Co(t, e) : et;
  },
  matchMedia: function(t) {
    return new sl(t);
  },
  matchMediaRefresh: function() {
    return qe.forEach(function(t) {
      var e = t.conditions, i, r;
      for (r in e)
        e[r] && (e[r] = !1, i = 1);
      i && t.revert();
    }) || fn();
  },
  addEventListener: function(t, e) {
    var i = hr[t] || (hr[t] = []);
    ~i.indexOf(e) || i.push(e);
  },
  removeEventListener: function(t, e) {
    var i = hr[t], r = i && i.indexOf(e);
    r >= 0 && i.splice(r, 1);
  },
  utils: {
    wrap: Ia,
    wrapYoyo: za,
    distribute: so,
    random: ao,
    snap: oo,
    normalize: Na,
    getUnit: bt,
    clamp: Ra,
    splitColor: co,
    toArray: Gt,
    selector: an,
    mapRange: uo,
    pipe: La,
    unitize: Fa,
    interpolate: Xa,
    shuffle: no
  },
  install: Hs,
  effects: zr,
  ticker: At,
  updateRoot: Pt.updateRoot,
  plugins: Rt,
  globalTimeline: it,
  core: {
    PropTween: Mt,
    globals: Gs,
    Tween: ct,
    Timeline: Pt,
    Animation: Qi,
    getCache: Ue,
    _removeLinkedListItem: kr,
    reverting: function() {
      return wt;
    },
    context: function(t) {
      return t && et && (et.data.push(t), t._ctx = et), et;
    },
    suppressOverwrites: function(t) {
      return Mn = t;
    }
  }
};
Ct("to,from,fromTo,delayedCall,set,killTweensOf", function(u) {
  return xr[u] = ct[u];
});
At.add(Pt.updateRoot);
ai = xr.to({}, {
  duration: 0
});
var ol = function(t, e) {
  for (var i = t._pt; i && i.p !== e && i.op !== e && i.fp !== e; )
    i = i._next;
  return i;
}, al = function(t, e) {
  var i = t._targets, r, n, s;
  for (r in e)
    for (n = i.length; n--; )
      s = t._ptLookup[n][r], s && (s = s.d) && (s._pt && (s = ol(s, r)), s && s.modifier && s.modifier(e[r], t, i[n], r));
}, Vr = function(t, e) {
  return {
    name: t,
    headless: 1,
    rawVars: 1,
    //don't pre-process function-based values or "random()" strings.
    init: function(r, n, s) {
      s._onInit = function(o) {
        var f, l;
        if (yt(n) && (f = {}, Ct(n, function(h) {
          return f[h] = 1;
        }), n = f), e) {
          f = {};
          for (l in n)
            f[l] = e(n[l]);
          n = f;
        }
        al(o, n);
      };
    }
  };
}, Ot = xr.registerPlugin({
  name: "attr",
  init: function(t, e, i, r, n) {
    var s, o, f;
    this.tween = i;
    for (s in e)
      f = t.getAttribute(s) || "", o = this.add(t, "setAttribute", (f || 0) + "", e[s], r, n, 0, 0, s), o.op = s, o.b = f, this._props.push(s);
  },
  render: function(t, e) {
    for (var i = e._pt; i; )
      wt ? i.set(i.t, i.p, i.b, i) : i.r(t, i.d), i = i._next;
  }
}, {
  name: "endArray",
  headless: 1,
  init: function(t, e) {
    for (var i = e.length; i--; )
      this.add(t, i, t[i] || 0, e[i], 0, 0, 0, 0, 0, 1);
  }
}, Vr("roundProps", ln), Vr("modifiers"), Vr("snap", oo)) || xr;
ct.version = Pt.version = Ot.version = "3.13.0";
Us = 1;
On() && xi();
$.Power0;
$.Power1;
$.Power2;
$.Power3;
$.Power4;
$.Linear;
$.Quad;
$.Cubic;
$.Quart;
$.Quint;
$.Strong;
$.Elastic;
$.Back;
$.SteppedEase;
$.Bounce;
$.Sine;
$.Expo;
$.Circ;
/*!
 * CSSPlugin 3.13.0
 * https://gsap.com
 *
 * Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/
var cs, Pe, fi, $n, We, ds, Vn, ll = function() {
  return typeof window < "u";
}, ge = {}, $e = 180 / Math.PI, hi = Math.PI / 180, ii = Math.atan2, _s = 1e8, Wn = /([A-Z])/g, ul = /(left|right|width|margin|padding|x)/i, fl = /[\s,\(]\S/, oe = {
  autoAlpha: "opacity,visibility",
  scale: "scaleX,scaleY",
  alpha: "opacity"
}, hn = function(t, e) {
  return e.set(e.t, e.p, Math.round((e.s + e.c * t) * 1e4) / 1e4 + e.u, e);
}, hl = function(t, e) {
  return e.set(e.t, e.p, t === 1 ? e.e : Math.round((e.s + e.c * t) * 1e4) / 1e4 + e.u, e);
}, cl = function(t, e) {
  return e.set(e.t, e.p, t ? Math.round((e.s + e.c * t) * 1e4) / 1e4 + e.u : e.b, e);
}, dl = function(t, e) {
  var i = e.s + e.c * t;
  e.set(e.t, e.p, ~~(i + (i < 0 ? -0.5 : 0.5)) + e.u, e);
}, Mo = function(t, e) {
  return e.set(e.t, e.p, t ? e.e : e.b, e);
}, Do = function(t, e) {
  return e.set(e.t, e.p, t !== 1 ? e.b : e.e, e);
}, _l = function(t, e, i) {
  return t.style[e] = i;
}, pl = function(t, e, i) {
  return t.style.setProperty(e, i);
}, gl = function(t, e, i) {
  return t._gsap[e] = i;
}, ml = function(t, e, i) {
  return t._gsap.scaleX = t._gsap.scaleY = i;
}, yl = function(t, e, i, r, n) {
  var s = t._gsap;
  s.scaleX = s.scaleY = i, s.renderTransform(n, s);
}, xl = function(t, e, i, r, n) {
  var s = t._gsap;
  s[e] = i, s.renderTransform(n, s);
}, rt = "transform", Dt = rt + "Origin", vl = function u(t, e) {
  var i = this, r = this.target, n = r.style, s = r._gsap;
  if (t in ge && n) {
    if (this.tfm = this.tfm || {}, t !== "transform")
      t = oe[t] || t, ~t.indexOf(",") ? t.split(",").forEach(function(o) {
        return i.tfm[o] = he(r, o);
      }) : this.tfm[t] = s.x ? s[t] : he(r, t), t === Dt && (this.tfm.zOrigin = s.zOrigin);
    else
      return oe.transform.split(",").forEach(function(o) {
        return u.call(i, o, e);
      });
    if (this.props.indexOf(rt) >= 0)
      return;
    s.svg && (this.svgo = r.getAttribute("data-svg-origin"), this.props.push(Dt, e, "")), t = rt;
  }
  (n || e) && this.props.push(t, e, n[t]);
}, Oo = function(t) {
  t.translate && (t.removeProperty("translate"), t.removeProperty("scale"), t.removeProperty("rotate"));
}, wl = function() {
  var t = this.props, e = this.target, i = e.style, r = e._gsap, n, s;
  for (n = 0; n < t.length; n += 3)
    t[n + 1] ? t[n + 1] === 2 ? e[t[n]](t[n + 2]) : e[t[n]] = t[n + 2] : t[n + 2] ? i[t[n]] = t[n + 2] : i.removeProperty(t[n].substr(0, 2) === "--" ? t[n] : t[n].replace(Wn, "-$1").toLowerCase());
  if (this.tfm) {
    for (s in this.tfm)
      r[s] = this.tfm[s];
    r.svg && (r.renderTransform(), e.setAttribute("data-svg-origin", this.svgo || "")), n = Vn(), (!n || !n.isStart) && !i[rt] && (Oo(i), r.zOrigin && i[Dt] && (i[Dt] += " " + r.zOrigin + "px", r.zOrigin = 0, r.renderTransform()), r.uncache = 1);
  }
}, Eo = function(t, e) {
  var i = {
    target: t,
    props: [],
    revert: wl,
    save: vl
  };
  return t._gsap || Ot.core.getCache(t), e && t.style && t.nodeType && e.split(",").forEach(function(r) {
    return i.save(r);
  }), i;
}, Ro, cn = function(t, e) {
  var i = Pe.createElementNS ? Pe.createElementNS((e || "http://www.w3.org/1999/xhtml").replace(/^https/, "http"), t) : Pe.createElement(t);
  return i && i.style ? i : Pe.createElement(t);
}, qt = function u(t, e, i) {
  var r = getComputedStyle(t);
  return r[e] || r.getPropertyValue(e.replace(Wn, "-$1").toLowerCase()) || r.getPropertyValue(e) || !i && u(t, vi(e) || e, 1) || "";
}, ps = "O,Moz,ms,Ms,Webkit".split(","), vi = function(t, e, i) {
  var r = e || We, n = r.style, s = 5;
  if (t in n && !i)
    return t;
  for (t = t.charAt(0).toUpperCase() + t.substr(1); s-- && !(ps[s] + t in n); )
    ;
  return s < 0 ? null : (s === 3 ? "ms" : s >= 0 ? ps[s] : "") + t;
}, dn = function() {
  ll() && window.document && (cs = window, Pe = cs.document, fi = Pe.documentElement, We = cn("div") || {
    style: {}
  }, cn("div"), rt = vi(rt), Dt = rt + "Origin", We.style.cssText = "border-width:0;line-height:0;position:absolute;padding:0", Ro = !!vi("perspective"), Vn = Ot.core.reverting, $n = 1);
}, gs = function(t) {
  var e = t.ownerSVGElement, i = cn("svg", e && e.getAttribute("xmlns") || "http://www.w3.org/2000/svg"), r = t.cloneNode(!0), n;
  r.style.display = "block", i.appendChild(r), fi.appendChild(i);
  try {
    n = r.getBBox();
  } catch {
  }
  return i.removeChild(r), fi.removeChild(i), n;
}, ms = function(t, e) {
  for (var i = e.length; i--; )
    if (t.hasAttribute(e[i]))
      return t.getAttribute(e[i]);
}, Ao = function(t) {
  var e, i;
  try {
    e = t.getBBox();
  } catch {
    e = gs(t), i = 1;
  }
  return e && (e.width || e.height) || i || (e = gs(t)), e && !e.width && !e.x && !e.y ? {
    x: +ms(t, ["x", "cx", "x1"]) || 0,
    y: +ms(t, ["y", "cy", "y1"]) || 0,
    width: 0,
    height: 0
  } : e;
}, Lo = function(t) {
  return !!(t.getCTM && (!t.parentNode || t.ownerSVGElement) && Ao(t));
}, Ze = function(t, e) {
  if (e) {
    var i = t.style, r;
    e in ge && e !== Dt && (e = rt), i.removeProperty ? (r = e.substr(0, 2), (r === "ms" || e.substr(0, 6) === "webkit") && (e = "-" + e), i.removeProperty(r === "--" ? e : e.replace(Wn, "-$1").toLowerCase())) : i.removeAttribute(e);
  }
}, ke = function(t, e, i, r, n, s) {
  var o = new Mt(t._pt, e, i, 0, 1, s ? Do : Mo);
  return t._pt = o, o.b = r, o.e = n, t._props.push(i), o;
}, ys = {
  deg: 1,
  rad: 1,
  turn: 1
}, Tl = {
  grid: 1,
  flex: 1
}, Re = function u(t, e, i, r) {
  var n = parseFloat(i) || 0, s = (i + "").trim().substr((n + "").length) || "px", o = We.style, f = ul.test(e), l = t.tagName.toLowerCase() === "svg", h = (l ? "client" : "offset") + (f ? "Width" : "Height"), d = 100, _ = r === "px", a = r === "%", p, c, m, v;
  if (r === s || !n || ys[r] || ys[s])
    return n;
  if (s !== "px" && !_ && (n = u(t, e, i, "px")), v = t.getCTM && Lo(t), (a || s === "%") && (ge[e] || ~e.indexOf("adius")))
    return p = v ? t.getBBox()[f ? "width" : "height"] : t[h], ut(a ? n / p * d : n / 100 * p);
  if (o[f ? "width" : "height"] = d + (_ ? s : r), c = r !== "rem" && ~e.indexOf("adius") || r === "em" && t.appendChild && !l ? t : t.parentNode, v && (c = (t.ownerSVGElement || {}).parentNode), (!c || c === Pe || !c.appendChild) && (c = Pe.body), m = c._gsap, m && a && m.width && f && m.time === At.time && !m.uncache)
    return ut(n / m.width * d);
  if (a && (e === "height" || e === "width")) {
    var w = t.style[e];
    t.style[e] = d + r, p = t[h], w ? t.style[e] = w : Ze(t, e);
  } else
    (a || s === "%") && !Tl[qt(c, "display")] && (o.position = qt(t, "position")), c === t && (o.position = "static"), c.appendChild(We), p = We[h], c.removeChild(We), o.position = "absolute";
  return f && a && (m = Ue(c), m.time = At.time, m.width = c[h]), ut(_ ? p * n / d : p && n ? d / p * n : 0);
}, he = function(t, e, i, r) {
  var n;
  return $n || dn(), e in oe && e !== "transform" && (e = oe[e], ~e.indexOf(",") && (e = e.split(",")[0])), ge[e] && e !== "transform" ? (n = ji(t, r), n = e !== "transformOrigin" ? n[e] : n.svg ? n.origin : wr(qt(t, Dt)) + " " + n.zOrigin + "px") : (n = t.style[e], (!n || n === "auto" || r || ~(n + "").indexOf("calc(")) && (n = vr[e] && vr[e](t, e, i) || qt(t, e) || Qs(t, e) || (e === "opacity" ? 1 : 0))), i && !~(n + "").trim().indexOf(" ") ? Re(t, e, n, i) + i : n;
}, bl = function(t, e, i, r) {
  if (!i || i === "none") {
    var n = vi(e, t, 1), s = n && qt(t, n, 1);
    s && s !== i ? (e = n, i = s) : e === "borderColor" && (i = qt(t, "borderTopColor"));
  }
  var o = new Mt(this._pt, t.style, e, 0, 1, Po), f = 0, l = 0, h, d, _, a, p, c, m, v, w, T, P, y;
  if (o.b = i, o.e = r, i += "", r += "", r.substring(0, 6) === "var(--" && (r = qt(t, r.substring(4, r.indexOf(")")))), r === "auto" && (c = t.style[e], t.style[e] = r, r = qt(t, e) || r, c ? t.style[e] = c : Ze(t, e)), h = [i, r], po(h), i = h[0], r = h[1], _ = i.match(oi) || [], y = r.match(oi) || [], y.length) {
    for (; d = oi.exec(r); )
      m = d[0], w = r.substring(f, d.index), p ? p = (p + 1) % 5 : (w.substr(-5) === "rgba(" || w.substr(-5) === "hsla(") && (p = 1), m !== (c = _[l++] || "") && (a = parseFloat(c) || 0, P = c.substr((a + "").length), m.charAt(1) === "=" && (m = ui(a, m) + P), v = parseFloat(m), T = m.substr((v + "").length), f = oi.lastIndex - T.length, T || (T = T || Nt.units[e] || P, f === r.length && (r += T, o.e += T)), P !== T && (a = Re(t, e, c, T) || 0), o._pt = {
        _next: o._pt,
        p: w || l === 1 ? w : ",",
        //note: SVG spec allows omission of comma/space when a negative sign is wedged between two numbers, like 2.5-5.3 instead of 2.5,-5.3 but when tweening, the negative value may switch to positive, so we insert the comma just in case.
        s: a,
        c: v - a,
        m: p && p < 4 || e === "zIndex" ? Math.round : 0
      });
    o.c = f < r.length ? r.substring(f, r.length) : "";
  } else
    o.r = e === "display" && r === "none" ? Do : Mo;
  return Vs.test(r) && (o.e = 0), this._pt = o, o;
}, xs = {
  top: "0%",
  bottom: "100%",
  left: "0%",
  right: "100%",
  center: "50%"
}, Sl = function(t) {
  var e = t.split(" "), i = e[0], r = e[1] || "50%";
  return (i === "top" || i === "bottom" || r === "left" || r === "right") && (t = i, i = r, r = t), e[0] = xs[i] || i, e[1] = xs[r] || r, e.join(" ");
}, Pl = function(t, e) {
  if (e.tween && e.tween._time === e.tween._dur) {
    var i = e.t, r = i.style, n = e.u, s = i._gsap, o, f, l;
    if (n === "all" || n === !0)
      r.cssText = "", f = 1;
    else
      for (n = n.split(","), l = n.length; --l > -1; )
        o = n[l], ge[o] && (f = 1, o = o === "transformOrigin" ? Dt : rt), Ze(i, o);
    f && (Ze(i, rt), s && (s.svg && i.removeAttribute("transform"), r.scale = r.rotate = r.translate = "none", ji(i, 1), s.uncache = 1, Oo(r)));
  }
}, vr = {
  clearProps: function(t, e, i, r, n) {
    if (n.data !== "isFromStart") {
      var s = t._pt = new Mt(t._pt, e, i, 0, 0, Pl);
      return s.u = r, s.pr = -10, s.tween = n, t._props.push(i), 1;
    }
  }
  /* className feature (about 0.4kb gzipped).
  , className(plugin, target, property, endValue, tween) {
  	let _renderClassName = (ratio, data) => {
  			data.css.render(ratio, data.css);
  			if (!ratio || ratio === 1) {
  				let inline = data.rmv,
  					target = data.t,
  					p;
  				target.setAttribute("class", ratio ? data.e : data.b);
  				for (p in inline) {
  					_removeProperty(target, p);
  				}
  			}
  		},
  		_getAllStyles = (target) => {
  			let styles = {},
  				computed = getComputedStyle(target),
  				p;
  			for (p in computed) {
  				if (isNaN(p) && p !== "cssText" && p !== "length") {
  					styles[p] = computed[p];
  				}
  			}
  			_setDefaults(styles, _parseTransform(target, 1));
  			return styles;
  		},
  		startClassList = target.getAttribute("class"),
  		style = target.style,
  		cssText = style.cssText,
  		cache = target._gsap,
  		classPT = cache.classPT,
  		inlineToRemoveAtEnd = {},
  		data = {t:target, plugin:plugin, rmv:inlineToRemoveAtEnd, b:startClassList, e:(endValue.charAt(1) !== "=") ? endValue : startClassList.replace(new RegExp("(?:\\s|^)" + endValue.substr(2) + "(?![\\w-])"), "") + ((endValue.charAt(0) === "+") ? " " + endValue.substr(2) : "")},
  		changingVars = {},
  		startVars = _getAllStyles(target),
  		transformRelated = /(transform|perspective)/i,
  		endVars, p;
  	if (classPT) {
  		classPT.r(1, classPT.d);
  		_removeLinkedListItem(classPT.d.plugin, classPT, "_pt");
  	}
  	target.setAttribute("class", data.e);
  	endVars = _getAllStyles(target, true);
  	target.setAttribute("class", startClassList);
  	for (p in endVars) {
  		if (endVars[p] !== startVars[p] && !transformRelated.test(p)) {
  			changingVars[p] = endVars[p];
  			if (!style[p] && style[p] !== "0") {
  				inlineToRemoveAtEnd[p] = 1;
  			}
  		}
  	}
  	cache.classPT = plugin._pt = new PropTween(plugin._pt, target, "className", 0, 0, _renderClassName, data, 0, -11);
  	if (style.cssText !== cssText) { //only apply if things change. Otherwise, in cases like a background-image that's pulled dynamically, it could cause a refresh. See https://gsap.com/forums/topic/20368-possible-gsap-bug-switching-classnames-in-chrome/.
  		style.cssText = cssText; //we recorded cssText before we swapped classes and ran _getAllStyles() because in cases when a className tween is overwritten, we remove all the related tweening properties from that class change (otherwise class-specific stuff can't override properties we've directly set on the target's style object due to specificity).
  	}
  	_parseTransform(target, true); //to clear the caching of transforms
  	data.css = new gsap.plugins.css();
  	data.css.init(target, changingVars, tween);
  	plugin._props.push(...data.css._props);
  	return 1;
  }
  */
}, Ki = [1, 0, 0, 1, 0, 0], Fo = {}, No = function(t) {
  return t === "matrix(1, 0, 0, 1, 0, 0)" || t === "none" || !t;
}, vs = function(t) {
  var e = qt(t, rt);
  return No(e) ? Ki : e.substr(7).match($s).map(ut);
}, Un = function(t, e) {
  var i = t._gsap || Ue(t), r = t.style, n = vs(t), s, o, f, l;
  return i.svg && t.getAttribute("transform") ? (f = t.transform.baseVal.consolidate().matrix, n = [f.a, f.b, f.c, f.d, f.e, f.f], n.join(",") === "1,0,0,1,0,0" ? Ki : n) : (n === Ki && !t.offsetParent && t !== fi && !i.svg && (f = r.display, r.display = "block", s = t.parentNode, (!s || !t.offsetParent && !t.getBoundingClientRect().width) && (l = 1, o = t.nextElementSibling, fi.appendChild(t)), n = vs(t), f ? r.display = f : Ze(t, "display"), l && (o ? s.insertBefore(t, o) : s ? s.appendChild(t) : fi.removeChild(t))), e && n.length > 6 ? [n[0], n[1], n[4], n[5], n[12], n[13]] : n);
}, _n = function(t, e, i, r, n, s) {
  var o = t._gsap, f = n || Un(t, !0), l = o.xOrigin || 0, h = o.yOrigin || 0, d = o.xOffset || 0, _ = o.yOffset || 0, a = f[0], p = f[1], c = f[2], m = f[3], v = f[4], w = f[5], T = e.split(" "), P = parseFloat(T[0]) || 0, y = parseFloat(T[1]) || 0, b, k, S, M;
  i ? f !== Ki && (k = a * m - p * c) && (S = P * (m / k) + y * (-c / k) + (c * w - m * v) / k, M = P * (-p / k) + y * (a / k) - (a * w - p * v) / k, P = S, y = M) : (b = Ao(t), P = b.x + (~T[0].indexOf("%") ? P / 100 * b.width : P), y = b.y + (~(T[1] || T[0]).indexOf("%") ? y / 100 * b.height : y)), r || r !== !1 && o.smooth ? (v = P - l, w = y - h, o.xOffset = d + (v * a + w * c) - v, o.yOffset = _ + (v * p + w * m) - w) : o.xOffset = o.yOffset = 0, o.xOrigin = P, o.yOrigin = y, o.smooth = !!r, o.origin = e, o.originIsAbsolute = !!i, t.style[Dt] = "0px 0px", s && (ke(s, o, "xOrigin", l, P), ke(s, o, "yOrigin", h, y), ke(s, o, "xOffset", d, o.xOffset), ke(s, o, "yOffset", _, o.yOffset)), t.setAttribute("data-svg-origin", P + " " + y);
}, ji = function(t, e) {
  var i = t._gsap || new xo(t);
  if ("x" in i && !e && !i.uncache)
    return i;
  var r = t.style, n = i.scaleX < 0, s = "px", o = "deg", f = getComputedStyle(t), l = qt(t, Dt) || "0", h, d, _, a, p, c, m, v, w, T, P, y, b, k, S, M, I, A, N, E, U, W, z, X, _t, Le, me, Q, H, nt, G, Xt;
  return h = d = _ = c = m = v = w = T = P = 0, a = p = 1, i.svg = !!(t.getCTM && Lo(t)), f.translate && ((f.translate !== "none" || f.scale !== "none" || f.rotate !== "none") && (r[rt] = (f.translate !== "none" ? "translate3d(" + (f.translate + " 0 0").split(" ").slice(0, 3).join(", ") + ") " : "") + (f.rotate !== "none" ? "rotate(" + f.rotate + ") " : "") + (f.scale !== "none" ? "scale(" + f.scale.split(" ").join(",") + ") " : "") + (f[rt] !== "none" ? f[rt] : "")), r.scale = r.rotate = r.translate = "none"), k = Un(t, i.svg), i.svg && (i.uncache ? (_t = t.getBBox(), l = i.xOrigin - _t.x + "px " + (i.yOrigin - _t.y) + "px", X = "") : X = !e && t.getAttribute("data-svg-origin"), _n(t, X || l, !!X || i.originIsAbsolute, i.smooth !== !1, k)), y = i.xOrigin || 0, b = i.yOrigin || 0, k !== Ki && (A = k[0], N = k[1], E = k[2], U = k[3], h = W = k[4], d = z = k[5], k.length === 6 ? (a = Math.sqrt(A * A + N * N), p = Math.sqrt(U * U + E * E), c = A || N ? ii(N, A) * $e : 0, w = E || U ? ii(E, U) * $e + c : 0, w && (p *= Math.abs(Math.cos(w * hi))), i.svg && (h -= y - (y * A + b * E), d -= b - (y * N + b * U))) : (Xt = k[6], nt = k[7], me = k[8], Q = k[9], H = k[10], G = k[11], h = k[12], d = k[13], _ = k[14], S = ii(Xt, H), m = S * $e, S && (M = Math.cos(-S), I = Math.sin(-S), X = W * M + me * I, _t = z * M + Q * I, Le = Xt * M + H * I, me = W * -I + me * M, Q = z * -I + Q * M, H = Xt * -I + H * M, G = nt * -I + G * M, W = X, z = _t, Xt = Le), S = ii(-E, H), v = S * $e, S && (M = Math.cos(-S), I = Math.sin(-S), X = A * M - me * I, _t = N * M - Q * I, Le = E * M - H * I, G = U * I + G * M, A = X, N = _t, E = Le), S = ii(N, A), c = S * $e, S && (M = Math.cos(S), I = Math.sin(S), X = A * M + N * I, _t = W * M + z * I, N = N * M - A * I, z = z * M - W * I, A = X, W = _t), m && Math.abs(m) + Math.abs(c) > 359.9 && (m = c = 0, v = 180 - v), a = ut(Math.sqrt(A * A + N * N + E * E)), p = ut(Math.sqrt(z * z + Xt * Xt)), S = ii(W, z), w = Math.abs(S) > 2e-4 ? S * $e : 0, P = G ? 1 / (G < 0 ? -G : G) : 0), i.svg && (X = t.getAttribute("transform"), i.forceCSS = t.setAttribute("transform", "") || !No(qt(t, rt)), X && t.setAttribute("transform", X))), Math.abs(w) > 90 && Math.abs(w) < 270 && (n ? (a *= -1, w += c <= 0 ? 180 : -180, c += c <= 0 ? 180 : -180) : (p *= -1, w += w <= 0 ? 180 : -180)), e = e || i.uncache, i.x = h - ((i.xPercent = h && (!e && i.xPercent || (Math.round(t.offsetWidth / 2) === Math.round(-h) ? -50 : 0))) ? t.offsetWidth * i.xPercent / 100 : 0) + s, i.y = d - ((i.yPercent = d && (!e && i.yPercent || (Math.round(t.offsetHeight / 2) === Math.round(-d) ? -50 : 0))) ? t.offsetHeight * i.yPercent / 100 : 0) + s, i.z = _ + s, i.scaleX = ut(a), i.scaleY = ut(p), i.rotation = ut(c) + o, i.rotationX = ut(m) + o, i.rotationY = ut(v) + o, i.skewX = w + o, i.skewY = T + o, i.transformPerspective = P + s, (i.zOrigin = parseFloat(l.split(" ")[2]) || !e && i.zOrigin || 0) && (r[Dt] = wr(l)), i.xOffset = i.yOffset = 0, i.force3D = Nt.force3D, i.renderTransform = i.svg ? Cl : Ro ? Io : kl, i.uncache = 0, i;
}, wr = function(t) {
  return (t = t.split(" "))[0] + " " + t[1];
}, Wr = function(t, e, i) {
  var r = bt(e);
  return ut(parseFloat(e) + parseFloat(Re(t, "x", i + "px", r))) + r;
}, kl = function(t, e) {
  e.z = "0px", e.rotationY = e.rotationX = "0deg", e.force3D = 0, Io(t, e);
}, ze = "0deg", Ci = "0px", Xe = ") ", Io = function(t, e) {
  var i = e || this, r = i.xPercent, n = i.yPercent, s = i.x, o = i.y, f = i.z, l = i.rotation, h = i.rotationY, d = i.rotationX, _ = i.skewX, a = i.skewY, p = i.scaleX, c = i.scaleY, m = i.transformPerspective, v = i.force3D, w = i.target, T = i.zOrigin, P = "", y = v === "auto" && t && t !== 1 || v === !0;
  if (T && (d !== ze || h !== ze)) {
    var b = parseFloat(h) * hi, k = Math.sin(b), S = Math.cos(b), M;
    b = parseFloat(d) * hi, M = Math.cos(b), s = Wr(w, s, k * M * -T), o = Wr(w, o, -Math.sin(b) * -T), f = Wr(w, f, S * M * -T + T);
  }
  m !== Ci && (P += "perspective(" + m + Xe), (r || n) && (P += "translate(" + r + "%, " + n + "%) "), (y || s !== Ci || o !== Ci || f !== Ci) && (P += f !== Ci || y ? "translate3d(" + s + ", " + o + ", " + f + ") " : "translate(" + s + ", " + o + Xe), l !== ze && (P += "rotate(" + l + Xe), h !== ze && (P += "rotateY(" + h + Xe), d !== ze && (P += "rotateX(" + d + Xe), (_ !== ze || a !== ze) && (P += "skew(" + _ + ", " + a + Xe), (p !== 1 || c !== 1) && (P += "scale(" + p + ", " + c + Xe), w.style[rt] = P || "translate(0, 0)";
}, Cl = function(t, e) {
  var i = e || this, r = i.xPercent, n = i.yPercent, s = i.x, o = i.y, f = i.rotation, l = i.skewX, h = i.skewY, d = i.scaleX, _ = i.scaleY, a = i.target, p = i.xOrigin, c = i.yOrigin, m = i.xOffset, v = i.yOffset, w = i.forceCSS, T = parseFloat(s), P = parseFloat(o), y, b, k, S, M;
  f = parseFloat(f), l = parseFloat(l), h = parseFloat(h), h && (h = parseFloat(h), l += h, f += h), f || l ? (f *= hi, l *= hi, y = Math.cos(f) * d, b = Math.sin(f) * d, k = Math.sin(f - l) * -_, S = Math.cos(f - l) * _, l && (h *= hi, M = Math.tan(l - h), M = Math.sqrt(1 + M * M), k *= M, S *= M, h && (M = Math.tan(h), M = Math.sqrt(1 + M * M), y *= M, b *= M)), y = ut(y), b = ut(b), k = ut(k), S = ut(S)) : (y = d, S = _, b = k = 0), (T && !~(s + "").indexOf("px") || P && !~(o + "").indexOf("px")) && (T = Re(a, "x", s, "px"), P = Re(a, "y", o, "px")), (p || c || m || v) && (T = ut(T + p - (p * y + c * k) + m), P = ut(P + c - (p * b + c * S) + v)), (r || n) && (M = a.getBBox(), T = ut(T + r / 100 * M.width), P = ut(P + n / 100 * M.height)), M = "matrix(" + y + "," + b + "," + k + "," + S + "," + T + "," + P + ")", a.setAttribute("transform", M), w && (a.style[rt] = M);
}, Ml = function(t, e, i, r, n) {
  var s = 360, o = yt(n), f = parseFloat(n) * (o && ~n.indexOf("rad") ? $e : 1), l = f - r, h = r + l + "deg", d, _;
  return o && (d = n.split("_")[1], d === "short" && (l %= s, l !== l % (s / 2) && (l += l < 0 ? s : -s)), d === "cw" && l < 0 ? l = (l + s * _s) % s - ~~(l / s) * s : d === "ccw" && l > 0 && (l = (l - s * _s) % s - ~~(l / s) * s)), t._pt = _ = new Mt(t._pt, e, i, r, l, hl), _.e = h, _.u = "deg", t._props.push(i), _;
}, ws = function(t, e) {
  for (var i in e)
    t[i] = e[i];
  return t;
}, Dl = function(t, e, i) {
  var r = ws({}, i._gsap), n = "perspective,force3D,transformOrigin,svgOrigin", s = i.style, o, f, l, h, d, _, a, p;
  r.svg ? (l = i.getAttribute("transform"), i.setAttribute("transform", ""), s[rt] = e, o = ji(i, 1), Ze(i, rt), i.setAttribute("transform", l)) : (l = getComputedStyle(i)[rt], s[rt] = e, o = ji(i, 1), s[rt] = l);
  for (f in ge)
    l = r[f], h = o[f], l !== h && n.indexOf(f) < 0 && (a = bt(l), p = bt(h), d = a !== p ? Re(i, f, l, p) : parseFloat(l), _ = parseFloat(h), t._pt = new Mt(t._pt, o, f, d, _ - d, hn), t._pt.u = p || 0, t._props.push(f));
  ws(o, r);
};
Ct("padding,margin,Width,Radius", function(u, t) {
  var e = "Top", i = "Right", r = "Bottom", n = "Left", s = (t < 3 ? [e, i, r, n] : [e + n, e + i, r + i, r + n]).map(function(o) {
    return t < 2 ? u + o : "border" + o + u;
  });
  vr[t > 1 ? "border" + u : u] = function(o, f, l, h, d) {
    var _, a;
    if (arguments.length < 4)
      return _ = s.map(function(p) {
        return he(o, p, l);
      }), a = _.join(" "), a.split(_[0]).length === 5 ? _[0] : a;
    _ = (h + "").split(" "), a = {}, s.forEach(function(p, c) {
      return a[p] = _[c] = _[c] || _[(c - 1) / 2 | 0];
    }), o.init(f, a, d);
  };
});
var zo = {
  name: "css",
  register: dn,
  targetTest: function(t) {
    return t.style && t.nodeType;
  },
  init: function(t, e, i, r, n) {
    var s = this._props, o = t.style, f = i.vars.startAt, l, h, d, _, a, p, c, m, v, w, T, P, y, b, k, S;
    $n || dn(), this.styles = this.styles || Eo(t), S = this.styles.props, this.tween = i;
    for (c in e)
      if (c !== "autoRound" && (h = e[c], !(Rt[c] && vo(c, e, i, r, t, n)))) {
        if (a = typeof h, p = vr[c], a === "function" && (h = h.call(i, r, t, n), a = typeof h), a === "string" && ~h.indexOf("random(") && (h = Gi(h)), p)
          p(this, t, c, h, i) && (k = 1);
        else if (c.substr(0, 2) === "--")
          l = (getComputedStyle(t).getPropertyValue(c) + "").trim(), h += "", De.lastIndex = 0, De.test(l) || (m = bt(l), v = bt(h)), v ? m !== v && (l = Re(t, c, l, v) + v) : m && (h += m), this.add(o, "setProperty", l, h, r, n, 0, 0, c), s.push(c), S.push(c, 0, o[c]);
        else if (a !== "undefined") {
          if (f && c in f ? (l = typeof f[c] == "function" ? f[c].call(i, r, t, n) : f[c], yt(l) && ~l.indexOf("random(") && (l = Gi(l)), bt(l + "") || l === "auto" || (l += Nt.units[c] || bt(he(t, c)) || ""), (l + "").charAt(1) === "=" && (l = he(t, c))) : l = he(t, c), _ = parseFloat(l), w = a === "string" && h.charAt(1) === "=" && h.substr(0, 2), w && (h = h.substr(2)), d = parseFloat(h), c in oe && (c === "autoAlpha" && (_ === 1 && he(t, "visibility") === "hidden" && d && (_ = 0), S.push("visibility", 0, o.visibility), ke(this, o, "visibility", _ ? "inherit" : "hidden", d ? "inherit" : "hidden", !d)), c !== "scale" && c !== "transform" && (c = oe[c], ~c.indexOf(",") && (c = c.split(",")[0]))), T = c in ge, T) {
            if (this.styles.save(c), a === "string" && h.substring(0, 6) === "var(--" && (h = qt(t, h.substring(4, h.indexOf(")"))), d = parseFloat(h)), P || (y = t._gsap, y.renderTransform && !e.parseTransform || ji(t, e.parseTransform), b = e.smoothOrigin !== !1 && y.smooth, P = this._pt = new Mt(this._pt, o, rt, 0, 1, y.renderTransform, y, 0, -1), P.dep = 1), c === "scale")
              this._pt = new Mt(this._pt, y, "scaleY", y.scaleY, (w ? ui(y.scaleY, w + d) : d) - y.scaleY || 0, hn), this._pt.u = 0, s.push("scaleY", c), c += "X";
            else if (c === "transformOrigin") {
              S.push(Dt, 0, o[Dt]), h = Sl(h), y.svg ? _n(t, h, 0, b, 0, this) : (v = parseFloat(h.split(" ")[2]) || 0, v !== y.zOrigin && ke(this, y, "zOrigin", y.zOrigin, v), ke(this, o, c, wr(l), wr(h)));
              continue;
            } else if (c === "svgOrigin") {
              _n(t, h, 1, b, 0, this);
              continue;
            } else if (c in Fo) {
              Ml(this, y, c, _, w ? ui(_, w + h) : h);
              continue;
            } else if (c === "smoothOrigin") {
              ke(this, y, "smooth", y.smooth, h);
              continue;
            } else if (c === "force3D") {
              y[c] = h;
              continue;
            } else if (c === "transform") {
              Dl(this, h, t);
              continue;
            }
          } else c in o || (c = vi(c) || c);
          if (T || (d || d === 0) && (_ || _ === 0) && !fl.test(h) && c in o)
            m = (l + "").substr((_ + "").length), d || (d = 0), v = bt(h) || (c in Nt.units ? Nt.units[c] : m), m !== v && (_ = Re(t, c, l, v)), this._pt = new Mt(this._pt, T ? y : o, c, _, (w ? ui(_, w + d) : d) - _, !T && (v === "px" || c === "zIndex") && e.autoRound !== !1 ? dl : hn), this._pt.u = v || 0, m !== v && v !== "%" && (this._pt.b = l, this._pt.r = cl);
          else if (c in o)
            bl.call(this, t, c, l, w ? w + h : h);
          else if (c in t)
            this.add(t, c, l || t[c], w ? w + h : h, r, n);
          else if (c !== "parseTransform") {
            Rn(c, h);
            continue;
          }
          T || (c in o ? S.push(c, 0, o[c]) : typeof t[c] == "function" ? S.push(c, 2, t[c]()) : S.push(c, 1, l || t[c])), s.push(c);
        }
      }
    k && ko(this);
  },
  render: function(t, e) {
    if (e.tween._time || !Vn())
      for (var i = e._pt; i; )
        i.r(t, i.d), i = i._next;
    else
      e.styles.revert();
  },
  get: he,
  aliases: oe,
  getSetter: function(t, e, i) {
    var r = oe[e];
    return r && r.indexOf(",") < 0 && (e = r), e in ge && e !== Dt && (t._gsap.x || he(t, "x")) ? i && ds === i ? e === "scale" ? ml : gl : (ds = i || {}) && (e === "scale" ? yl : xl) : t.style && !Dn(t.style[e]) ? _l : ~e.indexOf("-") ? pl : Yn(t, e);
  },
  core: {
    _removeProperty: Ze,
    _getMatrix: Un
  }
};
Ot.utils.checkPrefix = vi;
Ot.core.getStyleSaver = Eo;
(function(u, t, e, i) {
  var r = Ct(u + "," + t + "," + e, function(n) {
    ge[n] = 1;
  });
  Ct(t, function(n) {
    Nt.units[n] = "deg", Fo[n] = 1;
  }), oe[r[13]] = u + "," + t, Ct(i, function(n) {
    var s = n.split(":");
    oe[s[1]] = r[s[0]];
  });
})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent", "rotation,rotationX,rotationY,skewX,skewY", "transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective", "0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");
Ct("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective", function(u) {
  Nt.units[u] = "px";
});
Ot.registerPlugin(zo);
var st = Ot.registerPlugin(zo) || Ot;
st.core.Tween;
/*!
 * matrix 3.13.0
 * https://gsap.com
 *
 * Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/
var de, Qe, Hn, Dr, Ei, cr, Tr, Xi, te = "transform", pn = te + "Origin", Xo, Yo = function(t) {
  var e = t.ownerDocument || t;
  for (!(te in t.style) && ("msTransform" in t.style) && (te = "msTransform", pn = te + "Origin"); e.parentNode && (e = e.parentNode); )
    ;
  if (Qe = window, Tr = new Je(), e) {
    de = e, Hn = e.documentElement, Dr = e.body, Xi = de.createElementNS("http://www.w3.org/2000/svg", "g"), Xi.style.transform = "none";
    var i = e.createElement("div"), r = e.createElement("div"), n = e && (e.body || e.firstElementChild);
    n && n.appendChild && (n.appendChild(i), i.appendChild(r), i.setAttribute("style", "position:static;transform:translate3d(0,0,1px)"), Xo = r.offsetParent !== i, n.removeChild(i));
  }
  return e;
}, Ol = function(t) {
  for (var e, i; t && t !== Dr; )
    i = t._gsap, i && i.uncache && i.get(t, "x"), i && !i.scaleX && !i.scaleY && i.renderTransform && (i.scaleX = i.scaleY = 1e-4, i.renderTransform(1, i), e ? e.push(i) : e = [i]), t = t.parentNode;
  return e;
}, Bo = [], $o = [], El = function() {
  return Qe.pageYOffset || de.scrollTop || Hn.scrollTop || Dr.scrollTop || 0;
}, Rl = function() {
  return Qe.pageXOffset || de.scrollLeft || Hn.scrollLeft || Dr.scrollLeft || 0;
}, Gn = function(t) {
  return t.ownerSVGElement || ((t.tagName + "").toLowerCase() === "svg" ? t : null);
}, Al = function u(t) {
  if (Qe.getComputedStyle(t).position === "fixed")
    return !0;
  if (t = t.parentNode, t && t.nodeType === 1)
    return u(t);
}, Ur = function u(t, e) {
  if (t.parentNode && (de || Yo(t))) {
    var i = Gn(t), r = i ? i.getAttribute("xmlns") || "http://www.w3.org/2000/svg" : "http://www.w3.org/1999/xhtml", n = i ? e ? "rect" : "g" : "div", s = e !== 2 ? 0 : 100, o = e === 3 ? 100 : 0, f = "position:absolute;display:block;pointer-events:none;margin:0;padding:0;", l = de.createElementNS ? de.createElementNS(r.replace(/^https/, "http"), n) : de.createElement(n);
    return e && (i ? (cr || (cr = u(t)), l.setAttribute("width", 0.01), l.setAttribute("height", 0.01), l.setAttribute("transform", "translate(" + s + "," + o + ")"), cr.appendChild(l)) : (Ei || (Ei = u(t), Ei.style.cssText = f), l.style.cssText = f + "width:0.1px;height:0.1px;top:" + o + "px;left:" + s + "px", Ei.appendChild(l))), l;
  }
  throw "Need document and parent.";
}, Ll = function(t) {
  for (var e = new Je(), i = 0; i < t.numberOfItems; i++)
    e.multiply(t.getItem(i).matrix);
  return e;
}, Fl = function(t) {
  var e = t.getCTM(), i;
  return e || (i = t.style[te], t.style[te] = "none", t.appendChild(Xi), e = Xi.getCTM(), t.removeChild(Xi), i ? t.style[te] = i : t.style.removeProperty(te.replace(/([A-Z])/g, "-$1").toLowerCase())), e || Tr.clone();
}, Nl = function(t, e) {
  var i = Gn(t), r = t === i, n = i ? Bo : $o, s = t.parentNode, o = s && !i && s.shadowRoot && s.shadowRoot.appendChild ? s.shadowRoot : s, f, l, h, d, _, a;
  if (t === Qe)
    return t;
  if (n.length || n.push(Ur(t, 1), Ur(t, 2), Ur(t, 3)), f = i ? cr : Ei, i)
    r ? (h = Fl(t), d = -h.e / h.a, _ = -h.f / h.d, l = Tr) : t.getBBox ? (h = t.getBBox(), l = t.transform ? t.transform.baseVal : {}, l = l.numberOfItems ? l.numberOfItems > 1 ? Ll(l) : l.getItem(0).matrix : Tr, d = l.a * h.x + l.c * h.y, _ = l.b * h.x + l.d * h.y) : (l = new Je(), d = _ = 0), (r ? i : s).appendChild(f), f.setAttribute("transform", "matrix(" + l.a + "," + l.b + "," + l.c + "," + l.d + "," + (l.e + d) + "," + (l.f + _) + ")");
  else {
    if (d = _ = 0, Xo)
      for (l = t.offsetParent, h = t; h && (h = h.parentNode) && h !== l && h.parentNode; )
        (Qe.getComputedStyle(h)[te] + "").length > 4 && (d = h.offsetLeft, _ = h.offsetTop, h = 0);
    if (a = Qe.getComputedStyle(t), a.position !== "absolute" && a.position !== "fixed")
      for (l = t.offsetParent; s && s !== l; )
        d += s.scrollLeft || 0, _ += s.scrollTop || 0, s = s.parentNode;
    h = f.style, h.top = t.offsetTop - _ + "px", h.left = t.offsetLeft - d + "px", h[te] = a[te], h[pn] = a[pn], h.position = a.position === "fixed" ? "fixed" : "absolute", o.appendChild(f);
  }
  return f;
}, Hr = function(t, e, i, r, n, s, o) {
  return t.a = e, t.b = i, t.c = r, t.d = n, t.e = s, t.f = o, t;
}, Je = /* @__PURE__ */ (function() {
  function u(e, i, r, n, s, o) {
    e === void 0 && (e = 1), i === void 0 && (i = 0), r === void 0 && (r = 0), n === void 0 && (n = 1), s === void 0 && (s = 0), o === void 0 && (o = 0), Hr(this, e, i, r, n, s, o);
  }
  var t = u.prototype;
  return t.inverse = function() {
    var i = this.a, r = this.b, n = this.c, s = this.d, o = this.e, f = this.f, l = i * s - r * n || 1e-10;
    return Hr(this, s / l, -r / l, -n / l, i / l, (n * f - s * o) / l, -(i * f - r * o) / l);
  }, t.multiply = function(i) {
    var r = this.a, n = this.b, s = this.c, o = this.d, f = this.e, l = this.f, h = i.a, d = i.c, _ = i.b, a = i.d, p = i.e, c = i.f;
    return Hr(this, h * r + _ * s, h * n + _ * o, d * r + a * s, d * n + a * o, f + p * r + c * s, l + p * n + c * o);
  }, t.clone = function() {
    return new u(this.a, this.b, this.c, this.d, this.e, this.f);
  }, t.equals = function(i) {
    var r = this.a, n = this.b, s = this.c, o = this.d, f = this.e, l = this.f;
    return r === i.a && n === i.b && s === i.c && o === i.d && f === i.e && l === i.f;
  }, t.apply = function(i, r) {
    r === void 0 && (r = {});
    var n = i.x, s = i.y, o = this.a, f = this.b, l = this.c, h = this.d, d = this.e, _ = this.f;
    return r.x = n * o + s * l + d || 0, r.y = n * f + s * h + _ || 0, r;
  }, u;
})();
function Ve(u, t, e, i) {
  if (!u || !u.parentNode || (de || Yo(u)).documentElement === u)
    return new Je();
  var r = Ol(u), n = Gn(u), s = n ? Bo : $o, o = Nl(u), f = s[0].getBoundingClientRect(), l = s[1].getBoundingClientRect(), h = s[2].getBoundingClientRect(), d = o.parentNode, _ = Al(u), a = new Je((l.left - f.left) / 100, (l.top - f.top) / 100, (h.left - f.left) / 100, (h.top - f.top) / 100, f.left + (_ ? 0 : Rl()), f.top + (_ ? 0 : El()));
  if (d.removeChild(o), r)
    for (f = r.length; f--; )
      l = r[f], l.scaleX = l.scaleY = 0, l.renderTransform(1, l);
  return t ? a.inverse() : a;
}
function Ts(u) {
  if (u === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return u;
}
function Il(u, t) {
  u.prototype = Object.create(t.prototype), u.prototype.constructor = u, u.__proto__ = t;
}
var B, J, Lt, ee, _e, Gr, ce, gn, Ri, Ce, Vo, mn, Zi, qn, Ai, Zt, Li, dr, Wo, yn, br = 0, Uo = function() {
  return typeof window < "u";
}, Ho = function() {
  return B || Uo() && (B = window.gsap) && B.registerPlugin && B;
}, be = function(t) {
  return typeof t == "function";
}, Yi = function(t) {
  return typeof t == "object";
}, Jt = function(t) {
  return typeof t > "u";
}, _r = function() {
  return !1;
}, Bi = "transform", xn = "transformOrigin", we = function(t) {
  return Math.round(t * 1e4) / 1e4;
}, Mi = Array.isArray, ar = function(t, e) {
  var i = Lt.createElementNS ? Lt.createElementNS("http://www.w3.org/1999/xhtml".replace(/^https/, "http"), t) : Lt.createElement(t);
  return i.style ? i : Lt.createElement(t);
}, bs = 180 / Math.PI, Ye = 1e20, zl = new Je(), Te = Date.now || function() {
  return (/* @__PURE__ */ new Date()).getTime();
}, Ke = [], ci = {}, Xl = 0, Yl = /^(?:a|input|textarea|button|select)$/i, Ss = 0, ri = {}, ue = {}, Go = function(t, e) {
  var i = {}, r;
  for (r in t)
    i[r] = e ? t[r] * e : t[r];
  return i;
}, Bl = function(t, e) {
  for (var i in e)
    i in t || (t[i] = e[i]);
  return t;
}, Ps = function u(t, e) {
  for (var i = t.length, r; i--; )
    e ? t[i].style.touchAction = e : t[i].style.removeProperty("touch-action"), r = t[i].children, r && r.length && u(r, e);
}, qo = function() {
  return Ke.forEach(function(t) {
    return t();
  });
}, $l = function(t) {
  Ke.push(t), Ke.length === 1 && B.ticker.add(qo);
}, ks = function() {
  return !Ke.length && B.ticker.remove(qo);
}, Cs = function(t) {
  for (var e = Ke.length; e--; )
    Ke[e] === t && Ke.splice(e, 1);
  B.to(ks, {
    overwrite: !0,
    delay: 15,
    duration: 0,
    onComplete: ks,
    data: "_draggable"
  });
}, Vl = function(t, e) {
  for (var i in e)
    i in t || (t[i] = e[i]);
  return t;
}, pt = function(t, e, i, r) {
  if (t.addEventListener) {
    var n = Zi[e];
    r = r || (Vo ? {
      passive: !1
    } : null), t.addEventListener(n || e, i, r), n && e !== n && t.addEventListener(e, i, r);
  }
}, ht = function(t, e, i, r) {
  if (t.removeEventListener) {
    var n = Zi[e];
    t.removeEventListener(n || e, i, r), n && e !== n && t.removeEventListener(e, i, r);
  }
}, Vt = function(t) {
  t.preventDefault && t.preventDefault(), t.preventManipulation && t.preventManipulation();
}, Wl = function(t, e) {
  for (var i = t.length; i--; )
    if (t[i].identifier === e)
      return !0;
}, Ul = function u(t) {
  qn = t.touches && br < t.touches.length, ht(t.target, "touchend", u);
}, Ms = function(t) {
  qn = t.touches && br < t.touches.length, pt(t.target, "touchend", Ul);
}, di = function(t) {
  return J.pageYOffset || t.scrollTop || t.documentElement.scrollTop || t.body.scrollTop || 0;
}, _i = function(t) {
  return J.pageXOffset || t.scrollLeft || t.documentElement.scrollLeft || t.body.scrollLeft || 0;
}, Ds = function u(t, e) {
  pt(t, "scroll", e), wi(t.parentNode) || u(t.parentNode, e);
}, Os = function u(t, e) {
  ht(t, "scroll", e), wi(t.parentNode) || u(t.parentNode, e);
}, wi = function(t) {
  return !t || t === ee || t.nodeType === 9 || t === Lt.body || t === J || !t.nodeType || !t.parentNode;
}, Es = function(t, e) {
  var i = e === "x" ? "Width" : "Height", r = "scroll" + i, n = "client" + i;
  return Math.max(0, wi(t) ? Math.max(ee[r], _e[r]) - (J["inner" + i] || ee[n] || _e[n]) : t[r] - t[n]);
}, qr = function u(t, e) {
  var i = Es(t, "x"), r = Es(t, "y");
  wi(t) ? t = ue : u(t.parentNode, e), t._gsMaxScrollX = i, t._gsMaxScrollY = r, e || (t._gsScrollX = t.scrollLeft || 0, t._gsScrollY = t.scrollTop || 0);
}, Qr = function(t, e, i) {
  var r = t.style;
  r && (Jt(r[e]) && (e = Ri(e, t) || e), i == null ? r.removeProperty && r.removeProperty(e.replace(/([A-Z])/g, "-$1").toLowerCase()) : r[e] = i);
}, Ji = function(t) {
  return J.getComputedStyle(t instanceof Element ? t : t.host || (t.parentNode || {}).host || t);
}, Be = {}, ni = function(t) {
  if (t === J)
    return Be.left = Be.top = 0, Be.width = Be.right = ee.clientWidth || t.innerWidth || _e.clientWidth || 0, Be.height = Be.bottom = (t.innerHeight || 0) - 20 < ee.clientHeight ? ee.clientHeight : t.innerHeight || _e.clientHeight || 0, Be;
  var e = t.ownerDocument || Lt, i = Jt(t.pageX) ? !t.nodeType && !Jt(t.left) && !Jt(t.top) ? t : Ce(t)[0].getBoundingClientRect() : {
    left: t.pageX - _i(e),
    top: t.pageY - di(e),
    right: t.pageX - _i(e) + 1,
    bottom: t.pageY - di(e) + 1
  };
  return Jt(i.right) && !Jt(i.width) ? (i.right = i.left + i.width, i.bottom = i.top + i.height) : Jt(i.width) && (i = {
    width: i.right - i.left,
    height: i.bottom - i.top,
    right: i.right,
    left: i.left,
    bottom: i.bottom,
    top: i.top
  }), i;
}, lt = function(t, e, i) {
  var r = t.vars, n = r[i], s = t._listeners[e], o;
  return be(n) && (o = n.apply(r.callbackScope || t, r[i + "Params"] || [t.pointerEvent])), s && t.dispatchEvent(e) === !1 && (o = !1), o;
}, Rs = function(t, e) {
  var i = Ce(t)[0], r, n, s;
  return !i.nodeType && i !== J ? Jt(t.left) ? (n = t.min || t.minX || t.minRotation || 0, r = t.min || t.minY || 0, {
    left: n,
    top: r,
    width: (t.max || t.maxX || t.maxRotation || 0) - n,
    height: (t.max || t.maxY || 0) - r
  }) : (s = {
    x: 0,
    y: 0
  }, {
    left: t.left - s.x,
    top: t.top - s.y,
    width: t.width,
    height: t.height
  }) : Hl(i, e);
}, Wt = {}, Hl = function(t, e) {
  e = Ce(e)[0];
  var i = t.getBBox && t.ownerSVGElement, r = t.ownerDocument || Lt, n, s, o, f, l, h, d, _, a, p, c, m, v;
  if (t === J)
    o = di(r), n = _i(r), s = n + (r.documentElement.clientWidth || t.innerWidth || r.body.clientWidth || 0), f = o + ((t.innerHeight || 0) - 20 < r.documentElement.clientHeight ? r.documentElement.clientHeight : t.innerHeight || r.body.clientHeight || 0);
  else {
    if (e === J || Jt(e))
      return t.getBoundingClientRect();
    n = o = 0, i ? (p = t.getBBox(), c = p.width, m = p.height) : (t.viewBox && (p = t.viewBox.baseVal) && (n = p.x || 0, o = p.y || 0, c = p.width, m = p.height), c || (v = Ji(t), p = v.boxSizing === "border-box", c = (parseFloat(v.width) || t.clientWidth || 0) + (p ? 0 : parseFloat(v.borderLeftWidth) + parseFloat(v.borderRightWidth)), m = (parseFloat(v.height) || t.clientHeight || 0) + (p ? 0 : parseFloat(v.borderTopWidth) + parseFloat(v.borderBottomWidth)))), s = c, f = m;
  }
  return t === e ? {
    left: n,
    top: o,
    width: s - n,
    height: f - o
  } : (l = Ve(e, !0).multiply(Ve(t)), h = l.apply({
    x: n,
    y: o
  }), d = l.apply({
    x: s,
    y: o
  }), _ = l.apply({
    x: s,
    y: f
  }), a = l.apply({
    x: n,
    y: f
  }), n = Math.min(h.x, d.x, _.x, a.x), o = Math.min(h.y, d.y, _.y, a.y), {
    left: n,
    top: o,
    width: Math.max(h.x, d.x, _.x, a.x) - n,
    height: Math.max(h.y, d.y, _.y, a.y) - o
  });
}, Kr = function(t, e, i, r, n, s) {
  var o = {}, f, l, h;
  if (e)
    if (n !== 1 && e instanceof Array) {
      if (o.end = f = [], h = e.length, Yi(e[0]))
        for (l = 0; l < h; l++)
          f[l] = Go(e[l], n);
      else
        for (l = 0; l < h; l++)
          f[l] = e[l] * n;
      i += 1.1, r -= 1.1;
    } else be(e) ? o.end = function(d) {
      var _ = e.call(t, d), a, p;
      if (n !== 1)
        if (Yi(_)) {
          a = {};
          for (p in _)
            a[p] = _[p] * n;
          _ = a;
        } else
          _ *= n;
      return _;
    } : o.end = e;
  return (i || i === 0) && (o.max = i), (r || r === 0) && (o.min = r), s && (o.velocity = 0), o;
}, Gl = function u(t) {
  var e;
  return !t || !t.getAttribute || t === _e ? !1 : (e = t.getAttribute("data-clickable")) === "true" || e !== "false" && (Yl.test(t.nodeName + "") || t.getAttribute("contentEditable") === "true") ? !0 : u(t.parentNode);
}, lr = function(t, e) {
  for (var i = t.length, r; i--; )
    r = t[i], r.ondragstart = r.onselectstart = e ? null : _r, B.set(r, {
      lazy: !0,
      userSelect: e ? "text" : "none"
    });
}, ql = function u(t) {
  if (Ji(t).position === "fixed")
    return !0;
  if (t = t.parentNode, t && t.nodeType === 1)
    return u(t);
}, Qo, vn, Ql = function(t, e) {
  t = B.utils.toArray(t)[0], e = e || {};
  var i = document.createElement("div"), r = i.style, n = t.firstChild, s = 0, o = 0, f = t.scrollTop, l = t.scrollLeft, h = t.scrollWidth, d = t.scrollHeight, _ = 0, a = 0, p = 0, c, m, v, w, T, P;
  Qo && e.force3D !== !1 ? (T = "translate3d(", P = "px,0px)") : Bi && (T = "translate(", P = "px)"), this.scrollTop = function(y, b) {
    if (!arguments.length)
      return -this.top();
    this.top(-y, b);
  }, this.scrollLeft = function(y, b) {
    if (!arguments.length)
      return -this.left();
    this.left(-y, b);
  }, this.left = function(y, b) {
    if (!arguments.length)
      return -(t.scrollLeft + o);
    var k = t.scrollLeft - l, S = o;
    if ((k > 2 || k < -2) && !b) {
      l = t.scrollLeft, B.killTweensOf(this, {
        left: 1,
        scrollLeft: 1
      }), this.left(-l), e.onKill && e.onKill();
      return;
    }
    y = -y, y < 0 ? (o = y - 0.5 | 0, y = 0) : y > a ? (o = y - a | 0, y = a) : o = 0, (o || S) && (this._skip || (r[Bi] = T + -o + "px," + -s + P), o + _ >= 0 && (r.paddingRight = o + _ + "px")), t.scrollLeft = y | 0, l = t.scrollLeft;
  }, this.top = function(y, b) {
    if (!arguments.length)
      return -(t.scrollTop + s);
    var k = t.scrollTop - f, S = s;
    if ((k > 2 || k < -2) && !b) {
      f = t.scrollTop, B.killTweensOf(this, {
        top: 1,
        scrollTop: 1
      }), this.top(-f), e.onKill && e.onKill();
      return;
    }
    y = -y, y < 0 ? (s = y - 0.5 | 0, y = 0) : y > p ? (s = y - p | 0, y = p) : s = 0, (s || S) && (this._skip || (r[Bi] = T + -o + "px," + -s + P)), t.scrollTop = y | 0, f = t.scrollTop;
  }, this.maxScrollTop = function() {
    return p;
  }, this.maxScrollLeft = function() {
    return a;
  }, this.disable = function() {
    for (n = i.firstChild; n; )
      w = n.nextSibling, t.appendChild(n), n = w;
    t === i.parentNode && t.removeChild(i);
  }, this.enable = function() {
    if (n = t.firstChild, n !== i) {
      for (; n; )
        w = n.nextSibling, i.appendChild(n), n = w;
      t.appendChild(i), this.calibrate();
    }
  }, this.calibrate = function(y) {
    var b = t.clientWidth === c, k, S, M;
    f = t.scrollTop, l = t.scrollLeft, !(b && t.clientHeight === m && i.offsetHeight === v && h === t.scrollWidth && d === t.scrollHeight && !y) && ((s || o) && (S = this.left(), M = this.top(), this.left(-t.scrollLeft), this.top(-t.scrollTop)), k = Ji(t), (!b || y) && (r.display = "block", r.width = "auto", r.paddingRight = "0px", _ = Math.max(0, t.scrollWidth - t.clientWidth), _ && (_ += parseFloat(k.paddingLeft) + (vn ? parseFloat(k.paddingRight) : 0))), r.display = "inline-block", r.position = "relative", r.overflow = "visible", r.verticalAlign = "top", r.boxSizing = "content-box", r.width = "100%", r.paddingRight = _ + "px", vn && (r.paddingBottom = k.paddingBottom), c = t.clientWidth, m = t.clientHeight, h = t.scrollWidth, d = t.scrollHeight, a = t.scrollWidth - c, p = t.scrollHeight - m, v = i.offsetHeight, r.display = "block", (S || M) && (this.left(S), this.top(M)));
  }, this.content = i, this.element = t, this._skip = !1, this.enable();
}, jr = function(t) {
  if (Uo() && document.body) {
    var e = window && window.navigator;
    J = window, Lt = document, ee = Lt.documentElement, _e = Lt.body, Gr = ar("div"), dr = !!window.PointerEvent, ce = ar("div"), ce.style.cssText = "visibility:hidden;height:1px;top:-1px;pointer-events:none;position:relative;clear:both;cursor:grab", Li = ce.style.cursor === "grab" ? "grab" : "move", Ai = e && e.userAgent.toLowerCase().indexOf("android") !== -1, mn = "ontouchstart" in ee && "orientation" in J || e && (e.MaxTouchPoints > 0 || e.msMaxTouchPoints > 0), vn = (function() {
      var i = ar("div"), r = ar("div"), n = r.style, s = _e, o;
      return n.display = "inline-block", n.position = "relative", i.style.cssText = "width:90px;height:40px;padding:10px;overflow:auto;visibility:hidden", i.appendChild(r), s.appendChild(i), o = r.offsetHeight + 18 > i.scrollHeight, s.removeChild(i), o;
    })(), Zi = (function(i) {
      for (var r = i.split(","), n = ("onpointerdown" in Gr ? "pointerdown,pointermove,pointerup,pointercancel" : "onmspointerdown" in Gr ? "MSPointerDown,MSPointerMove,MSPointerUp,MSPointerCancel" : i).split(","), s = {}, o = 4; --o > -1; )
        s[r[o]] = n[o], s[n[o]] = r[o];
      try {
        ee.addEventListener("test", null, Object.defineProperty({}, "passive", {
          get: function() {
            Vo = 1;
          }
        }));
      } catch {
      }
      return s;
    })("touchstart,touchmove,touchend,touchcancel"), pt(Lt, "touchcancel", _r), pt(J, "touchmove", _r), _e && _e.addEventListener("touchstart", _r), pt(Lt, "contextmenu", function() {
      for (var i in ci)
        ci[i].isPressed && ci[i].endDrag();
    }), B = gn = Ho();
  }
  B ? (Zt = B.plugins.inertia, Wo = B.core.context || function() {
  }, Ri = B.utils.checkPrefix, Bi = Ri(Bi), xn = Ri(xn), Ce = B.utils.toArray, yn = B.core.getStyleSaver, Qo = !!Ri("perspective")) : t && console.warn("Please gsap.registerPlugin(Draggable)");
}, Kl = /* @__PURE__ */ (function() {
  function u(e) {
    this._listeners = {}, this.target = e || this;
  }
  var t = u.prototype;
  return t.addEventListener = function(i, r) {
    var n = this._listeners[i] || (this._listeners[i] = []);
    ~n.indexOf(r) || n.push(r);
  }, t.removeEventListener = function(i, r) {
    var n = this._listeners[i], s = n && n.indexOf(r);
    s >= 0 && n.splice(s, 1);
  }, t.dispatchEvent = function(i) {
    var r = this, n;
    return (this._listeners[i] || []).forEach(function(s) {
      return s.call(r, {
        type: i,
        target: r.target
      }) === !1 && (n = !1);
    }), n;
  }, u;
})(), ti = /* @__PURE__ */ (function(u) {
  Il(t, u);
  function t(e, i) {
    var r;
    r = u.call(this) || this, gn || jr(1), e = Ce(e)[0], r.styles = yn && yn(e, "transform,left,top"), Zt || (Zt = B.plugins.inertia), r.vars = i = Go(i || {}), r.target = e, r.x = r.y = r.rotation = 0, r.dragResistance = parseFloat(i.dragResistance) || 0, r.edgeResistance = isNaN(i.edgeResistance) ? 1 : parseFloat(i.edgeResistance) || 0, r.lockAxis = i.lockAxis, r.autoScroll = i.autoScroll || 0, r.lockedAxis = null, r.allowEventDefault = !!i.allowEventDefault, B.getProperty(e, "x");
    var n = (i.type || "x,y").toLowerCase(), s = ~n.indexOf("x") || ~n.indexOf("y"), o = n.indexOf("rotation") !== -1, f = o ? "rotation" : s ? "x" : "left", l = s ? "y" : "top", h = !!(~n.indexOf("x") || ~n.indexOf("left") || n === "scroll"), d = !!(~n.indexOf("y") || ~n.indexOf("top") || n === "scroll"), _ = i.minimumMovement || 2, a = Ts(r), p = Ce(i.trigger || i.handle || e), c = {}, m = 0, v = !1, w = i.autoScrollMarginTop || 40, T = i.autoScrollMarginRight || 40, P = i.autoScrollMarginBottom || 40, y = i.autoScrollMarginLeft || 40, b = i.clickableTest || Gl, k = 0, S = e._gsap || B.core.getCache(e), M = ql(e), I = function(g, C) {
      return parseFloat(S.get(e, g, C));
    }, A = e.ownerDocument || Lt, N, E, U, W, z, X, _t, Le, me, Q, H, nt, G, Xt, Yt, Ti, mt, Or, ye, xe, Fe, bi, xt, q, Zn, Bt, Qt, Er, Rr, Jn, Et, ts, rr, es = function(g) {
      return Vt(g), g.stopImmediatePropagation && g.stopImmediatePropagation(), !1;
    }, ie = function F(g) {
      if (a.autoScroll && a.isDragging && (v || mt)) {
        var C = e, x = a.autoScroll * 15, D, O, R, Y, L, K, V, j;
        for (v = !1, ue.scrollTop = J.pageYOffset != null ? J.pageYOffset : A.documentElement.scrollTop != null ? A.documentElement.scrollTop : A.body.scrollTop, ue.scrollLeft = J.pageXOffset != null ? J.pageXOffset : A.documentElement.scrollLeft != null ? A.documentElement.scrollLeft : A.body.scrollLeft, Y = a.pointerX - ue.scrollLeft, L = a.pointerY - ue.scrollTop; C && !O; )
          O = wi(C.parentNode), D = O ? ue : C.parentNode, R = O ? {
            bottom: Math.max(ee.clientHeight, J.innerHeight || 0),
            right: Math.max(ee.clientWidth, J.innerWidth || 0),
            left: 0,
            top: 0
          } : D.getBoundingClientRect(), K = V = 0, d && (j = D._gsMaxScrollY - D.scrollTop, j < 0 ? V = j : L > R.bottom - P && j ? (v = !0, V = Math.min(j, x * (1 - Math.max(0, R.bottom - L) / P) | 0)) : L < R.top + w && D.scrollTop && (v = !0, V = -Math.min(D.scrollTop, x * (1 - Math.max(0, L - R.top) / w) | 0)), V && (D.scrollTop += V)), h && (j = D._gsMaxScrollX - D.scrollLeft, j < 0 ? K = j : Y > R.right - T && j ? (v = !0, K = Math.min(j, x * (1 - Math.max(0, R.right - Y) / T) | 0)) : Y < R.left + y && D.scrollLeft && (v = !0, K = -Math.min(D.scrollLeft, x * (1 - Math.max(0, Y - R.left) / y) | 0)), K && (D.scrollLeft += K)), O && (K || V) && (J.scrollTo(D.scrollLeft, D.scrollTop), ki(a.pointerX + K, a.pointerY + V)), C = D;
      }
      if (mt) {
        var at = a.x, Tt = a.y;
        o ? (a.deltaX = at - parseFloat(S.rotation), a.rotation = at, S.rotation = at + "deg", S.renderTransform(1, S)) : E ? (d && (a.deltaY = Tt - E.top(), E.top(Tt)), h && (a.deltaX = at - E.left(), E.left(at))) : s ? (d && (a.deltaY = Tt - parseFloat(S.y), S.y = Tt + "px"), h && (a.deltaX = at - parseFloat(S.x), S.x = at + "px"), S.renderTransform(1, S)) : (d && (a.deltaY = Tt - parseFloat(e.style.top || 0), e.style.top = Tt + "px"), h && (a.deltaX = at - parseFloat(e.style.left || 0), e.style.left = at + "px")), Le && !g && !Er && (Er = !0, lt(a, "drag", "onDrag") === !1 && (h && (a.x -= a.deltaX), d && (a.y -= a.deltaY), F(!0)), Er = !1);
      }
      mt = !1;
    }, Ne = function(g, C) {
      var x = a.x, D = a.y, O, R;
      e._gsap || (S = B.core.getCache(e)), S.uncache && B.getProperty(e, "x"), s ? (a.x = parseFloat(S.x), a.y = parseFloat(S.y)) : o ? a.x = a.rotation = parseFloat(S.rotation) : E ? (a.y = E.top(), a.x = E.left()) : (a.y = parseFloat(e.style.top || (R = Ji(e)) && R.top) || 0, a.x = parseFloat(e.style.left || (R || {}).left) || 0), (ye || xe || Fe) && !C && (a.isDragging || a.isThrowing) && (Fe && (ri.x = a.x, ri.y = a.y, O = Fe(ri), O.x !== a.x && (a.x = O.x, mt = !0), O.y !== a.y && (a.y = O.y, mt = !0)), ye && (O = ye(a.x), O !== a.x && (a.x = O, o && (a.rotation = O), mt = !0)), xe && (O = xe(a.y), O !== a.y && (a.y = O), mt = !0)), mt && ie(!0), g || (a.deltaX = a.x - x, a.deltaY = a.y - D, lt(a, "throwupdate", "onThrowUpdate"));
    }, Ar = function(g, C, x, D) {
      return C == null && (C = -Ye), x == null && (x = Ye), be(g) ? function(O) {
        var R = a.isPressed ? 1 - a.edgeResistance : 1;
        return g.call(a, (O > x ? x + (O - x) * R : O < C ? C + (O - C) * R : O) * D) * D;
      } : Mi(g) ? function(O) {
        for (var R = g.length, Y = 0, L = Ye, K, V; --R > -1; )
          K = g[R], V = K - O, V < 0 && (V = -V), V < L && K >= C && K <= x && (Y = R, L = V);
        return g[Y];
      } : isNaN(g) ? function(O) {
        return O;
      } : function() {
        return g * D;
      };
    }, ca = function(g, C, x, D, O, R, Y) {
      return R = R && R < Ye ? R * R : Ye, be(g) ? function(L) {
        var K = a.isPressed ? 1 - a.edgeResistance : 1, V = L.x, j = L.y, at, Tt, le;
        return L.x = V = V > x ? x + (V - x) * K : V < C ? C + (V - C) * K : V, L.y = j = j > O ? O + (j - O) * K : j < D ? D + (j - D) * K : j, at = g.call(a, L), at !== L && (L.x = at.x, L.y = at.y), Y !== 1 && (L.x *= Y, L.y *= Y), R < Ye && (Tt = L.x - V, le = L.y - j, Tt * Tt + le * le > R && (L.x = V, L.y = j)), L;
      } : Mi(g) ? function(L) {
        for (var K = g.length, V = 0, j = Ye, at, Tt, le, $t; --K > -1; )
          le = g[K], at = le.x - L.x, Tt = le.y - L.y, $t = at * at + Tt * Tt, $t < j && (V = K, j = $t);
        return j <= R ? g[V] : L;
      } : function(L) {
        return L;
      };
    }, Lr = function() {
      var g, C, x, D;
      _t = !1, E ? (E.calibrate(), a.minX = H = -E.maxScrollLeft(), a.minY = G = -E.maxScrollTop(), a.maxX = Q = a.maxY = nt = 0, _t = !0) : i.bounds && (g = Rs(i.bounds, e.parentNode), o ? (a.minX = H = g.left, a.maxX = Q = g.left + g.width, a.minY = G = a.maxY = nt = 0) : !Jt(i.bounds.maxX) || !Jt(i.bounds.maxY) ? (g = i.bounds, a.minX = H = g.minX, a.minY = G = g.minY, a.maxX = Q = g.maxX, a.maxY = nt = g.maxY) : (C = Rs(e, e.parentNode), a.minX = H = Math.round(I(f, "px") + g.left - C.left), a.minY = G = Math.round(I(l, "px") + g.top - C.top), a.maxX = Q = Math.round(H + (g.width - C.width)), a.maxY = nt = Math.round(G + (g.height - C.height))), H > Q && (a.minX = Q, a.maxX = Q = H, H = a.minX), G > nt && (a.minY = nt, a.maxY = nt = G, G = a.minY), o && (a.minRotation = H, a.maxRotation = Q), _t = !0), i.liveSnap && (x = i.liveSnap === !0 ? i.snap || {} : i.liveSnap, D = Mi(x) || be(x), o ? (ye = Ar(D ? x : x.rotation, H, Q, 1), xe = null) : x.points ? Fe = ca(D ? x : x.points, H, Q, G, nt, x.radius, E ? -1 : 1) : (h && (ye = Ar(D ? x : x.x || x.left || x.scrollLeft, H, Q, E ? -1 : 1)), d && (xe = Ar(D ? x : x.y || x.top || x.scrollTop, G, nt, E ? -1 : 1))));
    }, da = function() {
      a.isThrowing = !1, lt(a, "throwcomplete", "onThrowComplete");
    }, _a = function() {
      a.isThrowing = !1;
    }, Fr = function(g, C) {
      var x, D, O, R;
      g && Zt ? (g === !0 && (x = i.snap || i.liveSnap || {}, D = Mi(x) || be(x), g = {
        resistance: (i.throwResistance || i.resistance || 1e3) / (o ? 10 : 1)
      }, o ? g.rotation = Kr(a, D ? x : x.rotation, Q, H, 1, C) : (h && (g[f] = Kr(a, D ? x : x.points || x.x || x.left, Q, H, E ? -1 : 1, C || a.lockedAxis === "x")), d && (g[l] = Kr(a, D ? x : x.points || x.y || x.top, nt, G, E ? -1 : 1, C || a.lockedAxis === "y")), (x.points || Mi(x) && Yi(x[0])) && (g.linkedProps = f + "," + l, g.radius = x.radius))), a.isThrowing = !0, R = isNaN(i.overshootTolerance) ? i.edgeResistance === 1 ? 0 : 1 - a.edgeResistance + 0.2 : i.overshootTolerance, g.duration || (g.duration = {
        max: Math.max(i.minDuration || 0, "maxDuration" in i ? i.maxDuration : 2),
        min: isNaN(i.minDuration) ? R === 0 || Yi(g) && g.resistance > 1e3 ? 0 : 0.5 : i.minDuration,
        overshoot: R
      }), a.tween = O = B.to(E || e, {
        inertia: g,
        data: "_draggable",
        inherit: !1,
        onComplete: da,
        onInterrupt: _a,
        onUpdate: i.fastMode ? lt : Ne,
        onUpdateParams: i.fastMode ? [a, "onthrowupdate", "onThrowUpdate"] : x && x.radius ? [!1, !0] : []
      }), i.fastMode || (E && (E._skip = !0), O.render(1e9, !0, !0), Ne(!0, !0), a.endX = a.x, a.endY = a.y, o && (a.endRotation = a.x), O.play(0), Ne(!0, !0), E && (E._skip = !1))) : _t && a.applyBounds();
    }, is = function(g) {
      var C = q, x;
      q = Ve(e.parentNode, !0), g && a.isPressed && !q.equals(C || new Je()) && (x = C.inverse().apply({
        x: U,
        y: W
      }), q.apply(x, x), U = x.x, W = x.y), q.equals(zl) && (q = null);
    }, nr = function() {
      var g = 1 - a.edgeResistance, C = M ? _i(A) : 0, x = M ? di(A) : 0, D, O, R;
      s && (S.x = I(f, "px") + "px", S.y = I(l, "px") + "px", S.renderTransform()), is(!1), Wt.x = a.pointerX - C, Wt.y = a.pointerY - x, q && q.apply(Wt, Wt), U = Wt.x, W = Wt.y, mt && (ki(a.pointerX, a.pointerY), ie(!0)), ts = Ve(e), E ? (Lr(), X = E.top(), z = E.left()) : (Si() ? (Ne(!0, !0), Lr()) : a.applyBounds(), o ? (D = e.ownerSVGElement ? [S.xOrigin - e.getBBox().x, S.yOrigin - e.getBBox().y] : (Ji(e)[xn] || "0 0").split(" "), Ti = a.rotationOrigin = Ve(e).apply({
        x: parseFloat(D[0]) || 0,
        y: parseFloat(D[1]) || 0
      }), Ne(!0, !0), O = a.pointerX - Ti.x - C, R = Ti.y - a.pointerY + x, z = a.x, X = a.y = Math.atan2(R, O) * bs) : (X = I(l, "px"), z = I(f, "px"))), _t && g && (z > Q ? z = Q + (z - Q) / g : z < H && (z = H - (H - z) / g), o || (X > nt ? X = nt + (X - nt) / g : X < G && (X = G - (G - X) / g))), a.startX = z = we(z), a.startY = X = we(X);
    }, Si = function() {
      return a.tween && a.tween.isActive();
    }, pa = function() {
      ce.parentNode && !Si() && !a.isDragging && ce.parentNode.removeChild(ce);
    }, Pi = function(g, C) {
      var x;
      if (!N || a.isPressed || !g || (g.type === "mousedown" || g.type === "pointerdown") && !C && Te() - k < 30 && Zi[a.pointerEvent.type]) {
        Et && g && N && Vt(g);
        return;
      }
      if (Zn = Si(), rr = !1, a.pointerEvent = g, Zi[g.type] ? (xt = ~g.type.indexOf("touch") ? g.currentTarget || g.target : A, pt(xt, "touchend", Kt), pt(xt, "touchmove", Ie), pt(xt, "touchcancel", Kt), pt(A, "touchstart", Ms)) : (xt = null, pt(A, "mousemove", Ie)), Qt = null, (!dr || !xt) && (pt(A, "mouseup", Kt), g && g.target && pt(g.target, "mouseup", Kt)), bi = b.call(a, g.target) && i.dragClickables === !1 && !C, bi) {
        pt(g.target, "change", Kt), lt(a, "pressInit", "onPressInit"), lt(a, "press", "onPress"), lr(p, !0), Et = !1;
        return;
      }
      if (Bt = !xt || h === d || a.vars.allowNativeTouchScrolling === !1 || a.vars.allowContextMenu && g && (g.ctrlKey || g.which > 2) ? !1 : h ? "y" : "x", Et = !Bt && !a.allowEventDefault, Et && (Vt(g), pt(J, "touchforcechange", Vt)), g.changedTouches ? (g = Xt = g.changedTouches[0], Yt = g.identifier) : g.pointerId ? Yt = g.pointerId : Xt = Yt = null, br++, $l(ie), W = a.pointerY = g.pageY, U = a.pointerX = g.pageX, lt(a, "pressInit", "onPressInit"), (Bt || a.autoScroll) && qr(e.parentNode), e.parentNode && a.autoScroll && !E && !o && e.parentNode._gsMaxScrollX && !ce.parentNode && !e.getBBox && (ce.style.width = e.parentNode.scrollWidth + "px", e.parentNode.appendChild(ce)), nr(), a.tween && a.tween.kill(), a.isThrowing = !1, B.killTweensOf(E || e, c, !0), E && B.killTweensOf(e, {
        scrollTo: 1
      }, !0), a.tween = a.lockedAxis = null, (i.zIndexBoost || !o && !E && i.zIndexBoost !== !1) && (e.style.zIndex = t.zIndex++), a.isPressed = !0, Le = !!(i.onDrag || a._listeners.drag), me = !!(i.onMove || a._listeners.move), i.cursor !== !1 || i.activeCursor)
        for (x = p.length; --x > -1; )
          B.set(p[x], {
            cursor: i.activeCursor || i.cursor || (Li === "grab" ? "grabbing" : Li)
          });
      lt(a, "press", "onPress");
    }, Ie = function(g) {
      var C = g, x, D, O, R, Y, L;
      if (!N || qn || !a.isPressed || !g) {
        Et && g && N && Vt(g);
        return;
      }
      if (a.pointerEvent = g, x = g.changedTouches, x) {
        if (g = x[0], g !== Xt && g.identifier !== Yt) {
          for (R = x.length; --R > -1 && (g = x[R]).identifier !== Yt && g.target !== e; )
            ;
          if (R < 0)
            return;
        }
      } else if (g.pointerId && Yt && g.pointerId !== Yt)
        return;
      if (xt && Bt && !Qt && (Wt.x = g.pageX - (M ? _i(A) : 0), Wt.y = g.pageY - (M ? di(A) : 0), q && q.apply(Wt, Wt), D = Wt.x, O = Wt.y, Y = Math.abs(D - U), L = Math.abs(O - W), (Y !== L && (Y > _ || L > _) || Ai && Bt === Qt) && (Qt = Y > L && h ? "x" : "y", Bt && Qt !== Bt && pt(J, "touchforcechange", Vt), a.vars.lockAxisOnTouchScroll !== !1 && h && d && (a.lockedAxis = Qt === "x" ? "y" : "x", be(a.vars.onLockAxis) && a.vars.onLockAxis.call(a, C)), Ai && Bt === Qt))) {
        Kt(C);
        return;
      }
      !a.allowEventDefault && (!Bt || Qt && Bt !== Qt) && C.cancelable !== !1 ? (Vt(C), Et = !0) : Et && (Et = !1), a.autoScroll && (v = !0), ki(g.pageX, g.pageY, me);
    }, ki = function(g, C, x) {
      var D = 1 - a.dragResistance, O = 1 - a.edgeResistance, R = a.pointerX, Y = a.pointerY, L = X, K = a.x, V = a.y, j = a.endX, at = a.endY, Tt = a.endRotation, le = mt, $t, ve, vt, ft, Nr, jt;
      a.pointerX = g, a.pointerY = C, M && (g -= _i(A), C -= di(A)), o ? (ft = Math.atan2(Ti.y - C, g - Ti.x) * bs, Nr = a.y - ft, Nr > 180 ? (X -= 360, a.y = ft) : Nr < -180 && (X += 360, a.y = ft), a.x !== z || Math.max(Math.abs(U - g), Math.abs(W - C)) > _ ? (a.y = ft, vt = z + (X - ft) * D) : vt = z) : (q && (jt = g * q.a + C * q.c + q.e, C = g * q.b + C * q.d + q.f, g = jt), ve = C - W, $t = g - U, ve < _ && ve > -_ && (ve = 0), $t < _ && $t > -_ && ($t = 0), (a.lockAxis || a.lockedAxis) && ($t || ve) && (jt = a.lockedAxis, jt || (a.lockedAxis = jt = h && Math.abs($t) > Math.abs(ve) ? "y" : d ? "x" : null, jt && be(a.vars.onLockAxis) && a.vars.onLockAxis.call(a, a.pointerEvent)), jt === "y" ? ve = 0 : jt === "x" && ($t = 0)), vt = we(z + $t * D), ft = we(X + ve * D)), (ye || xe || Fe) && (a.x !== vt || a.y !== ft && !o) && (Fe && (ri.x = vt, ri.y = ft, jt = Fe(ri), vt = we(jt.x), ft = we(jt.y)), ye && (vt = we(ye(vt))), xe && (ft = we(xe(ft)))), _t && (vt > Q ? vt = Q + Math.round((vt - Q) * O) : vt < H && (vt = H + Math.round((vt - H) * O)), o || (ft > nt ? ft = Math.round(nt + (ft - nt) * O) : ft < G && (ft = Math.round(G + (ft - G) * O)))), (a.x !== vt || a.y !== ft && !o) && (o ? (a.endRotation = a.x = a.endX = vt, mt = !0) : (d && (a.y = a.endY = ft, mt = !0), h && (a.x = a.endX = vt, mt = !0)), !x || lt(a, "move", "onMove") !== !1 ? !a.isDragging && a.isPressed && (a.isDragging = rr = !0, lt(a, "dragstart", "onDragStart")) : (a.pointerX = R, a.pointerY = Y, X = L, a.x = K, a.y = V, a.endX = j, a.endY = at, a.endRotation = Tt, mt = le));
    }, Kt = function F(g, C) {
      if (!N || !a.isPressed || g && Yt != null && !C && (g.pointerId && g.pointerId !== Yt && g.target !== e || g.changedTouches && !Wl(g.changedTouches, Yt))) {
        Et && g && N && Vt(g);
        return;
      }
      a.isPressed = !1;
      var x = g, D = a.isDragging, O = a.vars.allowContextMenu && g && (g.ctrlKey || g.which > 2), R = B.delayedCall(1e-3, pa), Y, L, K, V, j;
      if (xt ? (ht(xt, "touchend", F), ht(xt, "touchmove", Ie), ht(xt, "touchcancel", F), ht(A, "touchstart", Ms)) : ht(A, "mousemove", Ie), ht(J, "touchforcechange", Vt), (!dr || !xt) && (ht(A, "mouseup", F), g && g.target && ht(g.target, "mouseup", F)), mt = !1, D && (m = Ss = Te(), a.isDragging = !1), Cs(ie), bi && !O) {
        g && (ht(g.target, "change", F), a.pointerEvent = x), lr(p, !1), lt(a, "release", "onRelease"), lt(a, "click", "onClick"), bi = !1;
        return;
      }
      for (L = p.length; --L > -1; )
        Qr(p[L], "cursor", i.cursor || (i.cursor !== !1 ? Li : null));
      if (br--, g) {
        if (Y = g.changedTouches, Y && (g = Y[0], g !== Xt && g.identifier !== Yt)) {
          for (L = Y.length; --L > -1 && (g = Y[L]).identifier !== Yt && g.target !== e; )
            ;
          if (L < 0 && !C)
            return;
        }
        a.pointerEvent = x, a.pointerX = g.pageX, a.pointerY = g.pageY;
      }
      return O && x ? (Vt(x), Et = !0, lt(a, "release", "onRelease")) : x && !D ? (Et = !1, Zn && (i.snap || i.bounds) && Fr(i.inertia || i.throwProps), lt(a, "release", "onRelease"), (!Ai || x.type !== "touchmove") && x.type.indexOf("cancel") === -1 && (lt(a, "click", "onClick"), Te() - k < 300 && lt(a, "doubleclick", "onDoubleClick"), V = x.target || e, k = Te(), j = function() {
        k !== Rr && a.enabled() && !a.isPressed && !x.defaultPrevented && (V.click ? V.click() : A.createEvent && (K = A.createEvent("MouseEvents"), K.initMouseEvent("click", !0, !0, J, 1, a.pointerEvent.screenX, a.pointerEvent.screenY, a.pointerX, a.pointerY, !1, !1, !1, !1, 0, null), V.dispatchEvent(K)));
      }, !Ai && !x.defaultPrevented && B.delayedCall(0.05, j))) : (Fr(i.inertia || i.throwProps), !a.allowEventDefault && x && (i.dragClickables !== !1 || !b.call(a, x.target)) && D && (!Bt || Qt && Bt === Qt) && x.cancelable !== !1 ? (Et = !0, Vt(x)) : Et = !1, lt(a, "release", "onRelease")), Si() && R.duration(a.tween.duration()), D && lt(a, "dragend", "onDragEnd"), !0;
    }, sr = function(g) {
      if (g && a.isDragging && !E) {
        var C = g.target || e.parentNode, x = C.scrollLeft - C._gsScrollX, D = C.scrollTop - C._gsScrollY;
        (x || D) && (q ? (U -= x * q.a + D * q.c, W -= D * q.d + x * q.b) : (U -= x, W -= D), C._gsScrollX += x, C._gsScrollY += D, ki(a.pointerX, a.pointerY));
      }
    }, rs = function(g) {
      var C = Te(), x = C - k < 100, D = C - m < 50, O = x && Rr === k, R = a.pointerEvent && a.pointerEvent.defaultPrevented, Y = x && Jn === k, L = g.isTrusted || g.isTrusted == null && x && O;
      if ((O || D && a.vars.suppressClickOnDrag !== !1) && g.stopImmediatePropagation && g.stopImmediatePropagation(), x && !(a.pointerEvent && a.pointerEvent.defaultPrevented) && (!O || L && !Y)) {
        L && O && (Jn = k), Rr = k;
        return;
      }
      (a.isPressed || D || x) && (!L || !g.detail || !x || R) && Vt(g), !x && !D && !rr && (g && g.target && (a.pointerEvent = g), lt(a, "click", "onClick"));
    }, ns = function(g) {
      return q ? {
        x: g.x * q.a + g.y * q.c + q.e,
        y: g.x * q.b + g.y * q.d + q.f
      } : {
        x: g.x,
        y: g.y
      };
    };
    return Or = t.get(e), Or && Or.kill(), r.startDrag = function(F, g) {
      var C, x, D, O;
      Pi(F || a.pointerEvent, !0), g && !a.hitTest(F || a.pointerEvent) && (C = ni(F || a.pointerEvent), x = ni(e), D = ns({
        x: C.left + C.width / 2,
        y: C.top + C.height / 2
      }), O = ns({
        x: x.left + x.width / 2,
        y: x.top + x.height / 2
      }), U -= D.x - O.x, W -= D.y - O.y), a.isDragging || (a.isDragging = rr = !0, lt(a, "dragstart", "onDragStart"));
    }, r.drag = Ie, r.endDrag = function(F) {
      return Kt(F || a.pointerEvent, !0);
    }, r.timeSinceDrag = function() {
      return a.isDragging ? 0 : (Te() - m) / 1e3;
    }, r.timeSinceClick = function() {
      return (Te() - k) / 1e3;
    }, r.hitTest = function(F, g) {
      return t.hitTest(a.target, F, g);
    }, r.getDirection = function(F, g) {
      var C = F === "velocity" && Zt ? F : Yi(F) && !o ? "element" : "start", x, D, O, R, Y, L;
      return C === "element" && (Y = ni(a.target), L = ni(F)), x = C === "start" ? a.x - z : C === "velocity" ? Zt.getVelocity(e, f) : Y.left + Y.width / 2 - (L.left + L.width / 2), o ? x < 0 ? "counter-clockwise" : "clockwise" : (g = g || 2, D = C === "start" ? a.y - X : C === "velocity" ? Zt.getVelocity(e, l) : Y.top + Y.height / 2 - (L.top + L.height / 2), O = Math.abs(x / D), R = O < 1 / g ? "" : x < 0 ? "left" : "right", O < g && (R !== "" && (R += "-"), R += D < 0 ? "up" : "down"), R);
    }, r.applyBounds = function(F, g) {
      var C, x, D, O, R, Y;
      if (F && i.bounds !== F)
        return i.bounds = F, a.update(!0, g);
      if (Ne(!0), Lr(), _t && !Si()) {
        if (C = a.x, x = a.y, C > Q ? C = Q : C < H && (C = H), x > nt ? x = nt : x < G && (x = G), (a.x !== C || a.y !== x) && (D = !0, a.x = a.endX = C, o ? a.endRotation = C : a.y = a.endY = x, mt = !0, ie(!0), a.autoScroll && !a.isDragging))
          for (qr(e.parentNode), O = e, ue.scrollTop = J.pageYOffset != null ? J.pageYOffset : A.documentElement.scrollTop != null ? A.documentElement.scrollTop : A.body.scrollTop, ue.scrollLeft = J.pageXOffset != null ? J.pageXOffset : A.documentElement.scrollLeft != null ? A.documentElement.scrollLeft : A.body.scrollLeft; O && !Y; )
            Y = wi(O.parentNode), R = Y ? ue : O.parentNode, d && R.scrollTop > R._gsMaxScrollY && (R.scrollTop = R._gsMaxScrollY), h && R.scrollLeft > R._gsMaxScrollX && (R.scrollLeft = R._gsMaxScrollX), O = R;
        a.isThrowing && (D || a.endX > Q || a.endX < H || a.endY > nt || a.endY < G) && Fr(i.inertia || i.throwProps, D);
      }
      return a;
    }, r.update = function(F, g, C) {
      if (g && a.isPressed) {
        var x = Ve(e), D = ts.apply({
          x: a.x - z,
          y: a.y - X
        }), O = Ve(e.parentNode, !0);
        O.apply({
          x: x.e - D.x,
          y: x.f - D.y
        }, D), a.x -= D.x - O.e, a.y -= D.y - O.f, ie(!0), nr();
      }
      var R = a.x, Y = a.y;
      return is(!g), F ? a.applyBounds() : (mt && C && ie(!0), Ne(!0)), g && (ki(a.pointerX, a.pointerY), mt && ie(!0)), a.isPressed && !g && (h && Math.abs(R - a.x) > 0.01 || d && Math.abs(Y - a.y) > 0.01 && !o) && nr(), a.autoScroll && (qr(e.parentNode, a.isDragging), v = a.isDragging, ie(!0), Os(e, sr), Ds(e, sr)), a;
    }, r.enable = function(F) {
      var g = {
        lazy: !0
      }, C, x, D;
      if (i.cursor !== !1 && (g.cursor = i.cursor || Li), B.utils.checkPrefix("touchCallout") && (g.touchCallout = "none"), F !== "soft") {
        for (Ps(p, h === d ? "none" : i.allowNativeTouchScrolling && e.scrollHeight === e.clientHeight == (e.scrollWidth === e.clientHeight) || i.allowEventDefault ? "manipulation" : h ? "pan-y" : "pan-x"), x = p.length; --x > -1; )
          D = p[x], dr || pt(D, "mousedown", Pi), pt(D, "touchstart", Pi), pt(D, "click", rs, !0), B.set(D, g), D.getBBox && D.ownerSVGElement && h !== d && B.set(D.ownerSVGElement, {
            touchAction: i.allowNativeTouchScrolling || i.allowEventDefault ? "manipulation" : h ? "pan-y" : "pan-x"
          }), i.allowContextMenu || pt(D, "contextmenu", es);
        lr(p, !1);
      }
      return Ds(e, sr), N = !0, Zt && F !== "soft" && Zt.track(E || e, s ? "x,y" : o ? "rotation" : "top,left"), e._gsDragID = C = e._gsDragID || "d" + Xl++, ci[C] = a, E && (E.enable(), E.element._gsDragID = C), (i.bounds || o) && nr(), i.bounds && a.applyBounds(), a;
    }, r.disable = function(F) {
      for (var g = a.isDragging, C = p.length, x; --C > -1; )
        Qr(p[C], "cursor", null);
      if (F !== "soft") {
        for (Ps(p, null), C = p.length; --C > -1; )
          x = p[C], Qr(x, "touchCallout", null), ht(x, "mousedown", Pi), ht(x, "touchstart", Pi), ht(x, "click", rs, !0), ht(x, "contextmenu", es);
        lr(p, !0), xt && (ht(xt, "touchcancel", Kt), ht(xt, "touchend", Kt), ht(xt, "touchmove", Ie)), ht(A, "mouseup", Kt), ht(A, "mousemove", Ie);
      }
      return Os(e, sr), N = !1, Zt && F !== "soft" && (Zt.untrack(E || e, s ? "x,y" : o ? "rotation" : "top,left"), a.tween && a.tween.kill()), E && E.disable(), Cs(ie), a.isDragging = a.isPressed = bi = !1, g && lt(a, "dragend", "onDragEnd"), a;
    }, r.enabled = function(F, g) {
      return arguments.length ? F ? a.enable(g) : a.disable(g) : N;
    }, r.kill = function() {
      return a.isThrowing = !1, a.tween && a.tween.kill(), a.disable(), B.set(p, {
        clearProps: "userSelect"
      }), delete ci[e._gsDragID], a;
    }, r.revert = function() {
      this.kill(), this.styles && this.styles.revert();
    }, ~n.indexOf("scroll") && (E = r.scrollProxy = new Ql(e, Bl({
      onKill: function() {
        a.isPressed && Kt(null);
      }
    }, i)), e.style.overflowY = d && !mn ? "auto" : "hidden", e.style.overflowX = h && !mn ? "auto" : "hidden", e = E.content), o ? c.rotation = 1 : (h && (c[f] = 1), d && (c[l] = 1)), S.force3D = "force3D" in i ? i.force3D : !0, Wo(Ts(r)), r.enable(), r;
  }
  return t.register = function(i) {
    B = i, jr();
  }, t.create = function(i, r) {
    return gn || jr(!0), Ce(i).map(function(n) {
      return new t(n, r);
    });
  }, t.get = function(i) {
    return ci[(Ce(i)[0] || {})._gsDragID];
  }, t.timeSinceDrag = function() {
    return (Te() - Ss) / 1e3;
  }, t.hitTest = function(i, r, n) {
    if (i === r)
      return !1;
    var s = ni(i), o = ni(r), f = s.top, l = s.left, h = s.right, d = s.bottom, _ = s.width, a = s.height, p = o.left > h || o.right < l || o.top > d || o.bottom < f, c, m, v;
    return p || !n ? !p : (v = (n + "").indexOf("%") !== -1, n = parseFloat(n) || 0, c = {
      left: Math.max(l, o.left),
      top: Math.max(f, o.top)
    }, c.width = Math.min(h, o.right) - c.left, c.height = Math.min(d, o.bottom) - c.top, c.width < 0 || c.height < 0 ? !1 : v ? (n *= 0.01, m = c.width * c.height, m >= _ * a * n || m >= o.width * o.height * n) : c.width > n && c.height > n);
  }, t;
})(Kl);
Vl(ti.prototype, {
  pointerX: 0,
  pointerY: 0,
  startX: 0,
  startY: 0,
  deltaX: 0,
  deltaY: 0,
  isDragging: !1,
  isPressed: !1
});
ti.zIndex = 1e3;
ti.version = "3.13.0";
Ho() && B.registerPlugin(ti);
/*!
 * VelocityTracker: 3.13.0
 * https://gsap.com
 *
 * Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/
var ne, wn, $i, Ko, si, li, Tn, jo, Zo = function() {
  return ne || typeof window < "u" && (ne = window.gsap);
}, bn = {}, jl = function(t) {
  return Math.round(t * 1e4) / 1e4;
}, Sn = function(t) {
  return jo(t).id;
}, Fi = function(t) {
  return bn[Sn(typeof t == "string" ? $i(t)[0] : t)];
}, As = function(t) {
  var e = si, i;
  if (t - Tn >= 0.05)
    for (Tn = t; e; )
      i = e.g(e.t, e.p), (i !== e.v1 || t - e.t1 > 0.2) && (e.v2 = e.v1, e.v1 = i, e.t2 = e.t1, e.t1 = t), e = e._next;
}, Zl = {
  deg: 360,
  rad: Math.PI * 2
}, Zr = function() {
  ne = Zo(), ne && ($i = ne.utils.toArray, Ko = ne.utils.getUnit, jo = ne.core.getCache, li = ne.ticker, wn = 1);
}, Jl = function(t, e, i, r) {
  this.t = t, this.p = e, this.g = t._gsap.get, this.rCap = Zl[i || Ko(this.g(t, e))], this.v1 = this.v2 = 0, this.t1 = this.t2 = li.time, r && (this._next = r, r._prev = this);
}, ir = /* @__PURE__ */ (function() {
  function u(e, i) {
    wn || Zr(), this.target = $i(e)[0], bn[Sn(this.target)] = this, this._props = {}, i && this.add(i);
  }
  u.register = function(i) {
    ne = i, Zr();
  };
  var t = u.prototype;
  return t.get = function(i, r) {
    var n = this._props[i] || console.warn("Not tracking " + i + " velocity."), s, o, f;
    return s = parseFloat(r ? n.v1 : n.g(n.t, n.p)), o = s - parseFloat(n.v2), f = n.rCap, f && (o = o % f, o !== o % (f / 2) && (o = o < 0 ? o + f : o - f)), jl(o / ((r ? n.t1 : li.time) - n.t2));
  }, t.getAll = function() {
    var i = {}, r = this._props, n;
    for (n in r)
      i[n] = this.get(n);
    return i;
  }, t.isTracking = function(i) {
    return i in this._props;
  }, t.add = function(i, r) {
    i in this._props || (si || (li.add(As), Tn = li.time), si = this._props[i] = new Jl(this.target, i, r, si));
  }, t.remove = function(i) {
    var r = this._props[i], n, s;
    r && (n = r._prev, s = r._next, n && (n._next = s), s ? s._prev = n : si === r && (li.remove(As), si = 0), delete this._props[i]);
  }, t.kill = function(i) {
    for (var r in this._props)
      this.remove(r);
    i || delete bn[Sn(this.target)];
  }, u.track = function(i, r, n) {
    wn || Zr();
    for (var s = [], o = $i(i), f = r.split(","), l = (n || "").split(","), h = o.length, d, _; h--; ) {
      for (d = Fi(o[h]) || new u(o[h]), _ = f.length; _--; )
        d.add(f[_], l[_] || l[0]);
      s.push(d);
    }
    return s;
  }, u.untrack = function(i, r) {
    var n = (r || "").split(",");
    $i(i).forEach(function(s) {
      var o = Fi(s);
      o && (n.length ? n.forEach(function(f) {
        return o.remove(f);
      }) : o.kill(1));
    });
  }, u.isTracking = function(i, r) {
    var n = Fi(i);
    return n && n.isTracking(r);
  }, u.getVelocity = function(i, r) {
    var n = Fi(i);
    return !n || !n.isTracking(r) ? console.warn("Not tracking velocity of " + r) : n.get(r);
  }, u;
})();
ir.getByTarget = Fi;
Zo() && ne.registerPlugin(ir);
/*!
 * InertiaPlugin 3.13.0
 * https://gsap.com
 *
 * @license Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/
var gt, Jo, Ls, ta, Pn, Vi, ea, ia, ra, Qn, na, Wi, kn, sa, Sr = ir.getByTarget, oa = function() {
  return gt || typeof window < "u" && (gt = window.gsap) && gt.registerPlugin && gt;
}, tu = function(t) {
  return typeof t == "string";
}, tr = function(t) {
  return typeof t == "number";
}, Oe = function(t) {
  return typeof t == "object";
}, Cn = function(t) {
  return typeof t == "function";
}, eu = 1, aa = Array.isArray, iu = function(t) {
  return t;
}, je = 1e10, Fs = 1 / je, la = 0.05, ru = function(t) {
  return Math.round(t * 1e4) / 1e4;
}, nu = function(t, e, i) {
  for (var r in e)
    !(r in t) && r !== i && (t[r] = e[r]);
  return t;
}, su = function u(t) {
  var e = {}, i, r;
  for (i in t)
    e[i] = Oe(r = t[i]) && !aa(r) ? u(r) : r;
  return e;
}, Ns = function(t, e, i, r, n) {
  var s = e.length, o = 0, f = je, l, h, d, _;
  if (Oe(t)) {
    for (; s--; ) {
      l = e[s], h = 0;
      for (d in t)
        _ = l[d] - t[d], h += _ * _;
      h < f && (o = s, f = h);
    }
    if ((n || je) < je && n < Math.sqrt(f))
      return t;
  } else
    for (; s--; )
      l = e[s], h = l - t, h < 0 && (h = -h), h < f && l >= r && l <= i && (o = s, f = h);
  return e[o];
}, ua = function(t, e, i, r, n, s, o) {
  if (t.end === "auto")
    return t;
  var f = t.end, l, h;
  if (i = isNaN(i) ? je : i, r = isNaN(r) ? -je : r, Oe(e)) {
    if (l = e.calculated ? e : (Cn(f) ? f(e, o) : Ns(e, f, i, r, s)) || e, !e.calculated) {
      for (h in l)
        e[h] = l[h];
      e.calculated = !0;
    }
    l = l[n];
  } else
    l = Cn(f) ? f(e, o) : aa(f) ? Ns(e, f, i, r, s) : parseFloat(f);
  return l > i ? l = i : l < r && (l = r), {
    max: l,
    min: l,
    unitFactor: t.unitFactor
  };
}, Pr = function(t, e, i) {
  return isNaN(t[e]) ? i : +t[e];
}, Kn = function(t, e) {
  return e * la * t / Qn;
}, Is = function(t, e, i) {
  return Math.abs((e - t) * Qn / i / la);
}, fa = {
  resistance: 1,
  checkpoint: 1,
  preventOvershoot: 1,
  linkedProps: 1,
  radius: 1,
  duration: 1
}, ha = function(t, e, i, r) {
  if (e.linkedProps) {
    var n = e.linkedProps.split(","), s = {}, o, f, l, h, d, _;
    for (o = 0; o < n.length; o++)
      f = n[o], l = e[f], l && (tr(l.velocity) ? h = l.velocity : (d = d || Sr(t), h = d && d.isTracking(f) ? d.get(f) : 0), _ = Math.abs(h / Pr(l, "resistance", r)), s[f] = parseFloat(i(t, f)) + Kn(h, _));
    return s;
  }
}, ou = function(t, e, i, r, n, s) {
  if (i === void 0 && (i = 10), r === void 0 && (r = 0.2), n === void 0 && (n = 1), tu(t) && (t = ta(t)[0]), !t)
    return 0;
  var o = 0, f = je, l = e.inertia || e, h = ra(t).get, d = Pr(l, "resistance", Vi.resistance), _, a, p, c, m, v, w, T, P, y;
  y = ha(t, l, h, d);
  for (_ in l)
    fa[_] || (a = l[_], Oe(a) || (T = T || Sr(t), T && T.isTracking(_) ? a = tr(a) ? {
      velocity: a
    } : {
      velocity: T.get(_)
    } : (c = +a || 0, p = Math.abs(c / d))), Oe(a) && (tr(a.velocity) ? c = a.velocity : (T = T || Sr(t), c = T && T.isTracking(_) ? T.get(_) : 0), p = na(r, i, Math.abs(c / Pr(a, "resistance", d))), m = parseFloat(h(t, _)) || 0, v = m + Kn(c, p), "end" in a && (a = ua(a, y && _ in y ? y : v, a.max, a.min, _, l.radius, c), Wi === e && (Wi = l = su(e)), l[_] = nu(a, l[_], "end")), "max" in a && v > +a.max + Fs ? (P = a.unitFactor || Vi.unitFactors[_] || 1, w = m > a.max && a.min !== a.max || c * P > -15 && c * P < 45 ? r + (i - r) * 0.1 : Is(m, a.max, c), w + n < f && (f = w + n)) : "min" in a && v < +a.min - Fs && (P = a.unitFactor || Vi.unitFactors[_] || 1, w = m < a.min && a.min !== a.max || c * P > -45 && c * P < 15 ? r + (i - r) * 0.1 : Is(m, a.min, c), w + n < f && (f = w + n)), w > o && (o = w)), p > o && (o = p));
  return o > f && (o = f), o > i ? i : o < r ? r : o;
}, zs = function() {
  gt = oa(), gt && (Ls = gt.parseEase, ta = gt.utils.toArray, ea = gt.utils.getUnit, ra = gt.core.getCache, na = gt.utils.clamp, kn = gt.core.getStyleSaver, sa = gt.core.reverting || function() {
  }, Pn = Ls("power3"), Qn = Pn(0.05), ia = gt.core.PropTween, gt.config({
    resistance: 100,
    unitFactors: {
      time: 1e3,
      totalTime: 1e3,
      progress: 1e3,
      totalProgress: 1e3
    }
  }), Vi = gt.config(), gt.registerPlugin(ir), Jo = 1);
}, jn = {
  version: "3.13.0",
  name: "inertia",
  register: function(t) {
    gt = t, zs();
  },
  init: function(t, e, i, r, n) {
    Jo || zs();
    var s = Sr(t);
    if (e === "auto") {
      if (!s) {
        console.warn("No inertia tracking on " + t + ". InertiaPlugin.track(target) first.");
        return;
      }
      e = s.getAll();
    }
    this.styles = kn && typeof t.style == "object" && kn(t), this.target = t, this.tween = i, Wi = e;
    var o = t._gsap, f = o.get, l = e.duration, h = Oe(l), d = e.preventOvershoot || h && l.overshoot === 0, _ = Pr(e, "resistance", Vi.resistance), a = tr(l) ? l : ou(t, e, h && l.max || 10, h && l.min || 0.2, h && "overshoot" in l ? +l.overshoot : d ? 0 : 1), p, c, m, v, w, T, P, y, b;
    e = Wi, Wi = 0, b = ha(t, e, f, _);
    for (p in e)
      fa[p] || (c = e[p], Cn(c) && (c = c(r, t, n)), tr(c) ? w = c : Oe(c) && !isNaN(c.velocity) ? w = +c.velocity : s && s.isTracking(p) ? w = s.get(p) : console.warn("ERROR: No velocity was defined for " + t + " property: " + p), T = Kn(w, a), y = 0, m = f(t, p), v = ea(m), m = parseFloat(m), Oe(c) && (P = m + T, "end" in c && (c = ua(c, b && p in b ? b : P, c.max, c.min, p, e.radius, w)), "max" in c && +c.max < P ? d || c.preventOvershoot ? T = c.max - m : y = c.max - m - T : "min" in c && +c.min > P && (d || c.preventOvershoot ? T = c.min - m : y = c.min - m - T)), this._props.push(p), this.styles && this.styles.save(p), this._pt = new ia(this._pt, t, p, m, 0, iu, 0, o.set(t, p, this)), this._pt.u = v || 0, this._pt.c1 = T, this._pt.c2 = y);
    return i.duration(a), eu;
  },
  render: function(t, e) {
    var i = e._pt;
    if (t = Pn(e.tween._time / e.tween._dur), t || !sa())
      for (; i; )
        i.set(i.t, i.p, ru(i.s + i.c1 * t + i.c2 * t * t) + i.u, i.d, t), i = i._next;
    else
      e.styles.revert();
  }
};
"track,untrack,isTracking,getVelocity,getByTarget".split(",").forEach(function(u) {
  return jn[u] = ir[u];
});
oa() && gt.registerPlugin(jn);
st.registerPlugin(ti, jn);
function au(u, t = {}) {
  const e = st.utils.toArray(u);
  let i = st.timeline({
    repeat: t.repeat || -1,
    reversed: t.reversed,
    paused: t.paused,
    defaults: { ease: "none" },
    onReverseComplete: () => {
      i.totalTime(i.rawTime() + i.duration() * 100);
    }
  }), r = e.length, n = e[0].offsetLeft, s = [], o = [], f = [], l = 0, h = (t.speed || 50) * 10, d = t.snap === !1 ? (y) => y : st.utils.snap(t.snap || 1), _, a, p, c, m, v;
  const w = () => e.forEach((y, b) => {
    o[b] = parseFloat(st.getProperty(y, "width", "px")), f[b] = d(parseFloat(st.getProperty(y, "x", "px")) / o[b] * 100 + st.getProperty(y, "xPercent"));
  }), T = () => e[r - 1].offsetLeft + f[r - 1] / 100 * o[r - 1] - n + e[r - 1].offsetWidth * st.getProperty(e[r - 1], "scaleX") + (parseFloat(t.paddingRight) || 0);
  for (w(), st.set(e, {
    xPercent: (y, b) => {
      let k = o[y] = parseFloat(st.getProperty(b, "width", "px"));
      return f[y] = d(parseFloat(st.getProperty(b, "x", "px")) / k * 100 + parseFloat(st.getProperty(b, "xPercent"))), f[y];
    }
  }), st.set(e, { x: 0 }), _ = T(), v = 0; v < r; v++)
    m = e[v], a = f[v] / 100 * o[v], p = m.offsetLeft + a - n, c = p + o[v] * st.getProperty(m, "scaleX"), i.to(m, { xPercent: d((a - c) / o[v] * 100), duration: c / h }, 0).fromTo(m, { xPercent: d((a - c + _) / o[v] * 100) }, { xPercent: f[v], duration: (a - c + _ - a) / h, immediateRender: !1 }, c / h).add("label" + v, p / h), s[v] = p / h;
  function P(y, b) {
    b = b || {}, Math.abs(y - l) > r / 2 && (y += y > l ? -r : r);
    let k = st.utils.wrap(0, r, y), S = s[k];
    return S > i.time() != y > l && (b.modifiers = { time: st.utils.wrap(0, i.duration()) }, S += i.duration() * (y > l ? 1 : -1)), l = k, b.overwrite = !0, i.tweenTo(S, b);
  }
  if (i.next = (y) => P(l + 1, y), i.previous = (y) => P(l - 1, y), i.current = () => l, i.toIndex = (y, b) => P(y, b), i.updateIndex = () => l = Math.round(i.progress() * (e.length - 1)), i.times = s, i.progress(1, !0).progress(0, !0), t.reversed && (i.vars.onReverseComplete?.(), i.reverse()), t.draggable && typeof ti == "function") {
    let y = document.createElement("div"), b = st.utils.wrap(0, 1), k, S, M, I, A = !1, N = null, E = !1;
    const U = () => {
      i.progress(b(S + (M.startX - M.x) * k));
    }, W = () => {
      i.updateIndex();
    }, z = e[0]?.parentElement;
    if (!z)
      return console.warn("Chapito: Could not find container element for draggable functionality"), i;
    M = ti.create(y, {
      trigger: z,
      type: "x",
      onPress() {
        A = !0, N && (N.kill(), N = null), S = i.progress(), i.progress(0), w(), _ = T(), k = 1 / _, I = _ / e.length, Math.pow(10, ((I + "").split(".")[1] || "").length), i.progress(S), i.timeScale(0);
      },
      onDrag: U,
      onThrowUpdate: U,
      inertia: !0,
      onRelease: () => {
        A && (W(), M.isThrowing || (N = st.to(i, {
          timeScale: t.reversed ? -1 : 1,
          duration: 0.6,
          ease: "power2.out"
        })));
      },
      onThrowComplete: () => {
        A = !1, W(), E || (N = st.to(i, {
          timeScale: t.reversed ? -1 : 1,
          duration: 0.6,
          ease: "power2.out"
        }));
      }
    })[0], i.setHoverState = (X) => {
      E = X;
    }, i.draggable = M;
  }
  return i;
}
class lu {
  constructor(t, e = {}) {
    this.container = t, this.options = {
      speed: 50,
      gap: 0,
      direction: "left",
      draggable: !1,
      pauseOnHover: !0,
      ...e
    }, this.init();
  }
  timeline = null;
  items = [];
  isHovered = !1;
  options;
  init() {
    const t = typeof this.container == "string" ? document.querySelector(this.container) : this.container;
    if (!t)
      throw new Error("Chapito: Container element not found");
    const e = t.children;
    this.items = [];
    for (let i = 0; i < e.length; i++)
      this.items.push(e[i]);
    if (this.items.length === 0) {
      console.warn("Chapito: No items found in container");
      return;
    }
    this.timeline = au(this.items, {
      repeat: -1,
      speed: this.options.speed,
      paddingRight: this.options.gap,
      reversed: this.options.direction === "right",
      draggable: this.options.draggable
    }), this.options.pauseOnHover && this.setupHoverEvents();
  }
  setupHoverEvents() {
    if (this.timeline)
      for (const t of this.items)
        t.addEventListener("mouseenter", () => {
          this.isHovered = !0, this.timeline && st.to(this.timeline, { timeScale: 0, overwrite: !0 }), this.timeline.setHoverState && this.timeline.setHoverState(!0);
        }), t.addEventListener("mouseleave", () => {
          if (this.isHovered = !1, this.timeline) {
            const e = this.options.direction === "right" ? -1 : 1;
            st.to(this.timeline, { timeScale: e, overwrite: !0 });
          }
          this.timeline.setHoverState && this.timeline.setHoverState(!1);
        });
  }
  // Public API methods
  play() {
    this.timeline && this.timeline.play();
  }
  pause() {
    this.timeline && this.timeline.pause();
  }
  reverse() {
    this.timeline && this.timeline.reverse();
  }
  next() {
    this.timeline && this.timeline.next && this.timeline.next();
  }
  previous() {
    this.timeline && this.timeline.previous && this.timeline.previous();
  }
  goTo(t) {
    this.timeline && this.timeline.toIndex && this.timeline.toIndex(t);
  }
  getCurrentIndex() {
    return this.timeline && this.timeline.current ? this.timeline.current() : 0;
  }
  destroy() {
    if (this.timeline && (this.timeline.kill(), this.timeline = null), this.options.pauseOnHover)
      for (const t of this.items)
        t.removeEventListener("mouseenter", () => {
        }), t.removeEventListener("mouseleave", () => {
        });
    this.timeline && this.timeline.draggable && this.timeline.draggable.kill();
  }
  updateOptions(t) {
    this.options = { ...this.options, ...t }, this.destroy(), this.init();
  }
}
function uu(u, t) {
  return new lu(u, t);
}
export {
  lu as Chapito,
  uu as createChapito
};
//# sourceMappingURL=chapito.es.js.map
