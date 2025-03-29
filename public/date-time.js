"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// node_modules/dayjs/plugin/quarterOfYear.js
var require_quarterOfYear = __commonJS({
  "node_modules/dayjs/plugin/quarterOfYear.js"(exports2, module2) {
    !function(t, n) {
      "object" == typeof exports2 && "undefined" != typeof module2 ? module2.exports = n() : "function" == typeof define && define.amd ? define(n) : (t = "undefined" != typeof globalThis ? globalThis : t || self).dayjs_plugin_quarterOfYear = n();
    }(exports2, function() {
      "use strict";
      var t = "month", n = "quarter";
      return function(e, i) {
        var r = i.prototype;
        r.quarter = function(t2) {
          return this.$utils().u(t2) ? Math.ceil((this.month() + 1) / 3) : this.month(this.month() % 3 + 3 * (t2 - 1));
        };
        var s = r.add;
        r.add = function(e2, i2) {
          return e2 = Number(e2), this.$utils().p(i2) === n ? this.add(3 * e2, t) : s.bind(this)(e2, i2);
        };
        var u = r.startOf;
        r.startOf = function(e2, i2) {
          var r2 = this.$utils(), s2 = !!r2.u(i2) || i2;
          if (r2.p(e2) === n) {
            var o = this.quarter() - 1;
            return s2 ? this.month(3 * o).startOf(t).startOf("day") : this.month(3 * o + 2).endOf(t).endOf("day");
          }
          return u.bind(this)(e2, i2);
        };
      };
    });
  }
});

// node_modules/dayjs/dayjs.min.js
var require_dayjs_min = __commonJS({
  "node_modules/dayjs/dayjs.min.js"(exports2, module2) {
    !function(t, e) {
      "object" == typeof exports2 && "undefined" != typeof module2 ? module2.exports = e() : "function" == typeof define && define.amd ? define(e) : (t = "undefined" != typeof globalThis ? globalThis : t || self).dayjs = e();
    }(exports2, function() {
      "use strict";
      var t = 1e3, e = 6e4, n = 36e5, r = "millisecond", i = "second", s = "minute", u = "hour", a = "day", o = "week", c = "month", f = "quarter", h = "year", d = "date", l = "Invalid Date", $ = /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/, y = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g, M = { name: "en", weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"), ordinal: function(t2) {
        var e2 = ["th", "st", "nd", "rd"], n2 = t2 % 100;
        return "[" + t2 + (e2[(n2 - 20) % 10] || e2[n2] || e2[0]) + "]";
      } }, m = function(t2, e2, n2) {
        var r2 = String(t2);
        return !r2 || r2.length >= e2 ? t2 : "" + Array(e2 + 1 - r2.length).join(n2) + t2;
      }, v = { s: m, z: function(t2) {
        var e2 = -t2.utcOffset(), n2 = Math.abs(e2), r2 = Math.floor(n2 / 60), i2 = n2 % 60;
        return (e2 <= 0 ? "+" : "-") + m(r2, 2, "0") + ":" + m(i2, 2, "0");
      }, m: function t2(e2, n2) {
        if (e2.date() < n2.date()) return -t2(n2, e2);
        var r2 = 12 * (n2.year() - e2.year()) + (n2.month() - e2.month()), i2 = e2.clone().add(r2, c), s2 = n2 - i2 < 0, u2 = e2.clone().add(r2 + (s2 ? -1 : 1), c);
        return +(-(r2 + (n2 - i2) / (s2 ? i2 - u2 : u2 - i2)) || 0);
      }, a: function(t2) {
        return t2 < 0 ? Math.ceil(t2) || 0 : Math.floor(t2);
      }, p: function(t2) {
        return { M: c, y: h, w: o, d: a, D: d, h: u, m: s, s: i, ms: r, Q: f }[t2] || String(t2 || "").toLowerCase().replace(/s$/, "");
      }, u: function(t2) {
        return void 0 === t2;
      } }, g = "en", D = {};
      D[g] = M;
      var p = "$isDayjsObject", S = function(t2) {
        return t2 instanceof _ || !(!t2 || !t2[p]);
      }, w = function t2(e2, n2, r2) {
        var i2;
        if (!e2) return g;
        if ("string" == typeof e2) {
          var s2 = e2.toLowerCase();
          D[s2] && (i2 = s2), n2 && (D[s2] = n2, i2 = s2);
          var u2 = e2.split("-");
          if (!i2 && u2.length > 1) return t2(u2[0]);
        } else {
          var a2 = e2.name;
          D[a2] = e2, i2 = a2;
        }
        return !r2 && i2 && (g = i2), i2 || !r2 && g;
      }, O = function(t2, e2) {
        if (S(t2)) return t2.clone();
        var n2 = "object" == typeof e2 ? e2 : {};
        return n2.date = t2, n2.args = arguments, new _(n2);
      }, b = v;
      b.l = w, b.i = S, b.w = function(t2, e2) {
        return O(t2, { locale: e2.$L, utc: e2.$u, x: e2.$x, $offset: e2.$offset });
      };
      var _ = function() {
        function M2(t2) {
          this.$L = w(t2.locale, null, true), this.parse(t2), this.$x = this.$x || t2.x || {}, this[p] = true;
        }
        var m2 = M2.prototype;
        return m2.parse = function(t2) {
          this.$d = function(t3) {
            var e2 = t3.date, n2 = t3.utc;
            if (null === e2) return /* @__PURE__ */ new Date(NaN);
            if (b.u(e2)) return /* @__PURE__ */ new Date();
            if (e2 instanceof Date) return new Date(e2);
            if ("string" == typeof e2 && !/Z$/i.test(e2)) {
              var r2 = e2.match($);
              if (r2) {
                var i2 = r2[2] - 1 || 0, s2 = (r2[7] || "0").substring(0, 3);
                return n2 ? new Date(Date.UTC(r2[1], i2, r2[3] || 1, r2[4] || 0, r2[5] || 0, r2[6] || 0, s2)) : new Date(r2[1], i2, r2[3] || 1, r2[4] || 0, r2[5] || 0, r2[6] || 0, s2);
              }
            }
            return new Date(e2);
          }(t2), this.init();
        }, m2.init = function() {
          var t2 = this.$d;
          this.$y = t2.getFullYear(), this.$M = t2.getMonth(), this.$D = t2.getDate(), this.$W = t2.getDay(), this.$H = t2.getHours(), this.$m = t2.getMinutes(), this.$s = t2.getSeconds(), this.$ms = t2.getMilliseconds();
        }, m2.$utils = function() {
          return b;
        }, m2.isValid = function() {
          return !(this.$d.toString() === l);
        }, m2.isSame = function(t2, e2) {
          var n2 = O(t2);
          return this.startOf(e2) <= n2 && n2 <= this.endOf(e2);
        }, m2.isAfter = function(t2, e2) {
          return O(t2) < this.startOf(e2);
        }, m2.isBefore = function(t2, e2) {
          return this.endOf(e2) < O(t2);
        }, m2.$g = function(t2, e2, n2) {
          return b.u(t2) ? this[e2] : this.set(n2, t2);
        }, m2.unix = function() {
          return Math.floor(this.valueOf() / 1e3);
        }, m2.valueOf = function() {
          return this.$d.getTime();
        }, m2.startOf = function(t2, e2) {
          var n2 = this, r2 = !!b.u(e2) || e2, f2 = b.p(t2), l2 = function(t3, e3) {
            var i2 = b.w(n2.$u ? Date.UTC(n2.$y, e3, t3) : new Date(n2.$y, e3, t3), n2);
            return r2 ? i2 : i2.endOf(a);
          }, $2 = function(t3, e3) {
            return b.w(n2.toDate()[t3].apply(n2.toDate("s"), (r2 ? [0, 0, 0, 0] : [23, 59, 59, 999]).slice(e3)), n2);
          }, y2 = this.$W, M3 = this.$M, m3 = this.$D, v2 = "set" + (this.$u ? "UTC" : "");
          switch (f2) {
            case h:
              return r2 ? l2(1, 0) : l2(31, 11);
            case c:
              return r2 ? l2(1, M3) : l2(0, M3 + 1);
            case o:
              var g2 = this.$locale().weekStart || 0, D2 = (y2 < g2 ? y2 + 7 : y2) - g2;
              return l2(r2 ? m3 - D2 : m3 + (6 - D2), M3);
            case a:
            case d:
              return $2(v2 + "Hours", 0);
            case u:
              return $2(v2 + "Minutes", 1);
            case s:
              return $2(v2 + "Seconds", 2);
            case i:
              return $2(v2 + "Milliseconds", 3);
            default:
              return this.clone();
          }
        }, m2.endOf = function(t2) {
          return this.startOf(t2, false);
        }, m2.$set = function(t2, e2) {
          var n2, o2 = b.p(t2), f2 = "set" + (this.$u ? "UTC" : ""), l2 = (n2 = {}, n2[a] = f2 + "Date", n2[d] = f2 + "Date", n2[c] = f2 + "Month", n2[h] = f2 + "FullYear", n2[u] = f2 + "Hours", n2[s] = f2 + "Minutes", n2[i] = f2 + "Seconds", n2[r] = f2 + "Milliseconds", n2)[o2], $2 = o2 === a ? this.$D + (e2 - this.$W) : e2;
          if (o2 === c || o2 === h) {
            var y2 = this.clone().set(d, 1);
            y2.$d[l2]($2), y2.init(), this.$d = y2.set(d, Math.min(this.$D, y2.daysInMonth())).$d;
          } else l2 && this.$d[l2]($2);
          return this.init(), this;
        }, m2.set = function(t2, e2) {
          return this.clone().$set(t2, e2);
        }, m2.get = function(t2) {
          return this[b.p(t2)]();
        }, m2.add = function(r2, f2) {
          var d2, l2 = this;
          r2 = Number(r2);
          var $2 = b.p(f2), y2 = function(t2) {
            var e2 = O(l2);
            return b.w(e2.date(e2.date() + Math.round(t2 * r2)), l2);
          };
          if ($2 === c) return this.set(c, this.$M + r2);
          if ($2 === h) return this.set(h, this.$y + r2);
          if ($2 === a) return y2(1);
          if ($2 === o) return y2(7);
          var M3 = (d2 = {}, d2[s] = e, d2[u] = n, d2[i] = t, d2)[$2] || 1, m3 = this.$d.getTime() + r2 * M3;
          return b.w(m3, this);
        }, m2.subtract = function(t2, e2) {
          return this.add(-1 * t2, e2);
        }, m2.format = function(t2) {
          var e2 = this, n2 = this.$locale();
          if (!this.isValid()) return n2.invalidDate || l;
          var r2 = t2 || "YYYY-MM-DDTHH:mm:ssZ", i2 = b.z(this), s2 = this.$H, u2 = this.$m, a2 = this.$M, o2 = n2.weekdays, c2 = n2.months, f2 = n2.meridiem, h2 = function(t3, n3, i3, s3) {
            return t3 && (t3[n3] || t3(e2, r2)) || i3[n3].slice(0, s3);
          }, d2 = function(t3) {
            return b.s(s2 % 12 || 12, t3, "0");
          }, $2 = f2 || function(t3, e3, n3) {
            var r3 = t3 < 12 ? "AM" : "PM";
            return n3 ? r3.toLowerCase() : r3;
          };
          return r2.replace(y, function(t3, r3) {
            return r3 || function(t4) {
              switch (t4) {
                case "YY":
                  return String(e2.$y).slice(-2);
                case "YYYY":
                  return b.s(e2.$y, 4, "0");
                case "M":
                  return a2 + 1;
                case "MM":
                  return b.s(a2 + 1, 2, "0");
                case "MMM":
                  return h2(n2.monthsShort, a2, c2, 3);
                case "MMMM":
                  return h2(c2, a2);
                case "D":
                  return e2.$D;
                case "DD":
                  return b.s(e2.$D, 2, "0");
                case "d":
                  return String(e2.$W);
                case "dd":
                  return h2(n2.weekdaysMin, e2.$W, o2, 2);
                case "ddd":
                  return h2(n2.weekdaysShort, e2.$W, o2, 3);
                case "dddd":
                  return o2[e2.$W];
                case "H":
                  return String(s2);
                case "HH":
                  return b.s(s2, 2, "0");
                case "h":
                  return d2(1);
                case "hh":
                  return d2(2);
                case "a":
                  return $2(s2, u2, true);
                case "A":
                  return $2(s2, u2, false);
                case "m":
                  return String(u2);
                case "mm":
                  return b.s(u2, 2, "0");
                case "s":
                  return String(e2.$s);
                case "ss":
                  return b.s(e2.$s, 2, "0");
                case "SSS":
                  return b.s(e2.$ms, 3, "0");
                case "Z":
                  return i2;
              }
              return null;
            }(t3) || i2.replace(":", "");
          });
        }, m2.utcOffset = function() {
          return 15 * -Math.round(this.$d.getTimezoneOffset() / 15);
        }, m2.diff = function(r2, d2, l2) {
          var $2, y2 = this, M3 = b.p(d2), m3 = O(r2), v2 = (m3.utcOffset() - this.utcOffset()) * e, g2 = this - m3, D2 = function() {
            return b.m(y2, m3);
          };
          switch (M3) {
            case h:
              $2 = D2() / 12;
              break;
            case c:
              $2 = D2();
              break;
            case f:
              $2 = D2() / 3;
              break;
            case o:
              $2 = (g2 - v2) / 6048e5;
              break;
            case a:
              $2 = (g2 - v2) / 864e5;
              break;
            case u:
              $2 = g2 / n;
              break;
            case s:
              $2 = g2 / e;
              break;
            case i:
              $2 = g2 / t;
              break;
            default:
              $2 = g2;
          }
          return l2 ? $2 : b.a($2);
        }, m2.daysInMonth = function() {
          return this.endOf(c).$D;
        }, m2.$locale = function() {
          return D[this.$L];
        }, m2.locale = function(t2, e2) {
          if (!t2) return this.$L;
          var n2 = this.clone(), r2 = w(t2, e2, true);
          return r2 && (n2.$L = r2), n2;
        }, m2.clone = function() {
          return b.w(this.$d, this);
        }, m2.toDate = function() {
          return new Date(this.valueOf());
        }, m2.toJSON = function() {
          return this.isValid() ? this.toISOString() : null;
        }, m2.toISOString = function() {
          return this.$d.toISOString();
        }, m2.toString = function() {
          return this.$d.toUTCString();
        }, M2;
      }(), k = _.prototype;
      return O.prototype = k, [["$ms", r], ["$s", i], ["$m", s], ["$H", u], ["$W", a], ["$M", c], ["$y", h], ["$D", d]].forEach(function(t2) {
        k[t2[1]] = function(e2) {
          return this.$g(e2, t2[0], t2[1]);
        };
      }), O.extend = function(t2, e2) {
        return t2.$i || (t2(e2, _, O), t2.$i = true), O;
      }, O.locale = w, O.isDayjs = S, O.unix = function(t2) {
        return O(1e3 * t2);
      }, O.en = D[g], O.Ls = D, O.p = {}, O;
    });
  }
});

// node_modules/dayjs/plugin/advancedFormat.js
var require_advancedFormat = __commonJS({
  "node_modules/dayjs/plugin/advancedFormat.js"(exports2, module2) {
    !function(e, t) {
      "object" == typeof exports2 && "undefined" != typeof module2 ? module2.exports = t() : "function" == typeof define && define.amd ? define(t) : (e = "undefined" != typeof globalThis ? globalThis : e || self).dayjs_plugin_advancedFormat = t();
    }(exports2, function() {
      "use strict";
      return function(e, t) {
        var r = t.prototype, n = r.format;
        r.format = function(e2) {
          var t2 = this, r2 = this.$locale();
          if (!this.isValid()) return n.bind(this)(e2);
          var s = this.$utils(), a = (e2 || "YYYY-MM-DDTHH:mm:ssZ").replace(/\[([^\]]+)]|Q|wo|ww|w|WW|W|zzz|z|gggg|GGGG|Do|X|x|k{1,2}|S/g, function(e3) {
            switch (e3) {
              case "Q":
                return Math.ceil((t2.$M + 1) / 3);
              case "Do":
                return r2.ordinal(t2.$D);
              case "gggg":
                return t2.weekYear();
              case "GGGG":
                return t2.isoWeekYear();
              case "wo":
                return r2.ordinal(t2.week(), "W");
              case "w":
              case "ww":
                return s.s(t2.week(), "w" === e3 ? 1 : 2, "0");
              case "W":
              case "WW":
                return s.s(t2.isoWeek(), "W" === e3 ? 1 : 2, "0");
              case "k":
              case "kk":
                return s.s(String(0 === t2.$H ? 24 : t2.$H), "k" === e3 ? 1 : 2, "0");
              case "X":
                return Math.floor(t2.$d.getTime() / 1e3);
              case "x":
                return t2.$d.getTime();
              case "z":
                return "[" + t2.offsetName() + "]";
              case "zzz":
                return "[" + t2.offsetName("long") + "]";
              default:
                return e3;
            }
          });
          return n.bind(this)(a);
        };
      };
    });
  }
});

// node_modules/dayjs/plugin/weekOfYear.js
var require_weekOfYear = __commonJS({
  "node_modules/dayjs/plugin/weekOfYear.js"(exports2, module2) {
    !function(e, t) {
      "object" == typeof exports2 && "undefined" != typeof module2 ? module2.exports = t() : "function" == typeof define && define.amd ? define(t) : (e = "undefined" != typeof globalThis ? globalThis : e || self).dayjs_plugin_weekOfYear = t();
    }(exports2, function() {
      "use strict";
      var e = "week", t = "year";
      return function(i, n, r) {
        var f = n.prototype;
        f.week = function(i2) {
          if (void 0 === i2 && (i2 = null), null !== i2) return this.add(7 * (i2 - this.week()), "day");
          var n2 = this.$locale().yearStart || 1;
          if (11 === this.month() && this.date() > 25) {
            var f2 = r(this).startOf(t).add(1, t).date(n2), s = r(this).endOf(e);
            if (f2.isBefore(s)) return 1;
          }
          var a = r(this).startOf(t).date(n2).startOf(e).subtract(1, "millisecond"), o = this.diff(a, e, true);
          return o < 0 ? r(this).startOf("week").week() : Math.ceil(o);
        }, f.weeks = function(e2) {
          return void 0 === e2 && (e2 = null), this.week(e2);
        };
      };
    });
  }
});

// node_modules/dayjs/plugin/utc.js
var require_utc = __commonJS({
  "node_modules/dayjs/plugin/utc.js"(exports2, module2) {
    !function(t, i) {
      "object" == typeof exports2 && "undefined" != typeof module2 ? module2.exports = i() : "function" == typeof define && define.amd ? define(i) : (t = "undefined" != typeof globalThis ? globalThis : t || self).dayjs_plugin_utc = i();
    }(exports2, function() {
      "use strict";
      var t = "minute", i = /[+-]\d\d(?::?\d\d)?/g, e = /([+-]|\d\d)/g;
      return function(s, f, n) {
        var u = f.prototype;
        n.utc = function(t2) {
          var i2 = { date: t2, utc: true, args: arguments };
          return new f(i2);
        }, u.utc = function(i2) {
          var e2 = n(this.toDate(), { locale: this.$L, utc: true });
          return i2 ? e2.add(this.utcOffset(), t) : e2;
        }, u.local = function() {
          return n(this.toDate(), { locale: this.$L, utc: false });
        };
        var o = u.parse;
        u.parse = function(t2) {
          t2.utc && (this.$u = true), this.$utils().u(t2.$offset) || (this.$offset = t2.$offset), o.call(this, t2);
        };
        var r = u.init;
        u.init = function() {
          if (this.$u) {
            var t2 = this.$d;
            this.$y = t2.getUTCFullYear(), this.$M = t2.getUTCMonth(), this.$D = t2.getUTCDate(), this.$W = t2.getUTCDay(), this.$H = t2.getUTCHours(), this.$m = t2.getUTCMinutes(), this.$s = t2.getUTCSeconds(), this.$ms = t2.getUTCMilliseconds();
          } else r.call(this);
        };
        var a = u.utcOffset;
        u.utcOffset = function(s2, f2) {
          var n2 = this.$utils().u;
          if (n2(s2)) return this.$u ? 0 : n2(this.$offset) ? a.call(this) : this.$offset;
          if ("string" == typeof s2 && (s2 = function(t2) {
            void 0 === t2 && (t2 = "");
            var s3 = t2.match(i);
            if (!s3) return null;
            var f3 = ("" + s3[0]).match(e) || ["-", 0, 0], n3 = f3[0], u3 = 60 * +f3[1] + +f3[2];
            return 0 === u3 ? 0 : "+" === n3 ? u3 : -u3;
          }(s2), null === s2)) return this;
          var u2 = Math.abs(s2) <= 16 ? 60 * s2 : s2, o2 = this;
          if (f2) return o2.$offset = u2, o2.$u = 0 === s2, o2;
          if (0 !== s2) {
            var r2 = this.$u ? this.toDate().getTimezoneOffset() : -1 * this.utcOffset();
            (o2 = this.local().add(u2 + r2, t)).$offset = u2, o2.$x.$localOffset = r2;
          } else o2 = this.utc();
          return o2;
        };
        var h = u.format;
        u.format = function(t2) {
          var i2 = t2 || (this.$u ? "YYYY-MM-DDTHH:mm:ss[Z]" : "");
          return h.call(this, i2);
        }, u.valueOf = function() {
          var t2 = this.$utils().u(this.$offset) ? 0 : this.$offset + (this.$x.$localOffset || this.$d.getTimezoneOffset());
          return this.$d.valueOf() - 6e4 * t2;
        }, u.isUTC = function() {
          return !!this.$u;
        }, u.toISOString = function() {
          return this.toDate().toISOString();
        }, u.toString = function() {
          return this.toDate().toUTCString();
        };
        var l = u.toDate;
        u.toDate = function(t2) {
          return "s" === t2 && this.$offset ? n(this.format("YYYY-MM-DD HH:mm:ss:SSS")).toDate() : l.call(this);
        };
        var c = u.diff;
        u.diff = function(t2, i2, e2) {
          if (t2 && this.$u === t2.$u) return c.call(this, t2, i2, e2);
          var s2 = this.local(), f2 = n(t2).local();
          return c.call(s2, f2, i2, e2);
        };
      };
    });
  }
});

// node_modules/dayjs/plugin/timezone.js
var require_timezone = __commonJS({
  "node_modules/dayjs/plugin/timezone.js"(exports2, module2) {
    !function(t, e) {
      "object" == typeof exports2 && "undefined" != typeof module2 ? module2.exports = e() : "function" == typeof define && define.amd ? define(e) : (t = "undefined" != typeof globalThis ? globalThis : t || self).dayjs_plugin_timezone = e();
    }(exports2, function() {
      "use strict";
      var t = { year: 0, month: 1, day: 2, hour: 3, minute: 4, second: 5 }, e = {};
      return function(n, i, o) {
        var r, a = function(t2, n2, i2) {
          void 0 === i2 && (i2 = {});
          var o2 = new Date(t2), r2 = function(t3, n3) {
            void 0 === n3 && (n3 = {});
            var i3 = n3.timeZoneName || "short", o3 = t3 + "|" + i3, r3 = e[o3];
            return r3 || (r3 = new Intl.DateTimeFormat("en-US", { hour12: false, timeZone: t3, year: "numeric", month: "2-digit", day: "2-digit", hour: "2-digit", minute: "2-digit", second: "2-digit", timeZoneName: i3 }), e[o3] = r3), r3;
          }(n2, i2);
          return r2.formatToParts(o2);
        }, u = function(e2, n2) {
          for (var i2 = a(e2, n2), r2 = [], u2 = 0; u2 < i2.length; u2 += 1) {
            var f2 = i2[u2], s2 = f2.type, m = f2.value, c = t[s2];
            c >= 0 && (r2[c] = parseInt(m, 10));
          }
          var d = r2[3], l = 24 === d ? 0 : d, h = r2[0] + "-" + r2[1] + "-" + r2[2] + " " + l + ":" + r2[4] + ":" + r2[5] + ":000", v = +e2;
          return (o.utc(h).valueOf() - (v -= v % 1e3)) / 6e4;
        }, f = i.prototype;
        f.tz = function(t2, e2) {
          void 0 === t2 && (t2 = r);
          var n2, i2 = this.utcOffset(), a2 = this.toDate(), u2 = a2.toLocaleString("en-US", { timeZone: t2 }), f2 = Math.round((a2 - new Date(u2)) / 1e3 / 60), s2 = 15 * -Math.round(a2.getTimezoneOffset() / 15) - f2;
          if (!Number(s2)) n2 = this.utcOffset(0, e2);
          else if (n2 = o(u2, { locale: this.$L }).$set("millisecond", this.$ms).utcOffset(s2, true), e2) {
            var m = n2.utcOffset();
            n2 = n2.add(i2 - m, "minute");
          }
          return n2.$x.$timezone = t2, n2;
        }, f.offsetName = function(t2) {
          var e2 = this.$x.$timezone || o.tz.guess(), n2 = a(this.valueOf(), e2, { timeZoneName: t2 }).find(function(t3) {
            return "timezonename" === t3.type.toLowerCase();
          });
          return n2 && n2.value;
        };
        var s = f.startOf;
        f.startOf = function(t2, e2) {
          if (!this.$x || !this.$x.$timezone) return s.call(this, t2, e2);
          var n2 = o(this.format("YYYY-MM-DD HH:mm:ss:SSS"), { locale: this.$L });
          return s.call(n2, t2, e2).tz(this.$x.$timezone, true);
        }, o.tz = function(t2, e2, n2) {
          var i2 = n2 && e2, a2 = n2 || e2 || r, f2 = u(+o(), a2);
          if ("string" != typeof t2) return o(t2).tz(a2);
          var s2 = function(t3, e3, n3) {
            var i3 = t3 - 60 * e3 * 1e3, o2 = u(i3, n3);
            if (e3 === o2) return [i3, e3];
            var r2 = u(i3 -= 60 * (o2 - e3) * 1e3, n3);
            return o2 === r2 ? [i3, o2] : [t3 - 60 * Math.min(o2, r2) * 1e3, Math.max(o2, r2)];
          }(o.utc(t2, i2).valueOf(), f2, a2), m = s2[0], c = s2[1], d = o(m).utcOffset(c);
          return d.$x.$timezone = a2, d;
        }, o.tz.guess = function() {
          return Intl.DateTimeFormat().resolvedOptions().timeZone;
        }, o.tz.setDefault = function(t2) {
          r = t2;
        };
      };
    });
  }
});

// node_modules/dayjs/plugin/relativeTime.js
var require_relativeTime = __commonJS({
  "node_modules/dayjs/plugin/relativeTime.js"(exports2, module2) {
    !function(r, e) {
      "object" == typeof exports2 && "undefined" != typeof module2 ? module2.exports = e() : "function" == typeof define && define.amd ? define(e) : (r = "undefined" != typeof globalThis ? globalThis : r || self).dayjs_plugin_relativeTime = e();
    }(exports2, function() {
      "use strict";
      return function(r, e, t) {
        r = r || {};
        var n = e.prototype, o = { future: "in %s", past: "%s ago", s: "a few seconds", m: "a minute", mm: "%d minutes", h: "an hour", hh: "%d hours", d: "a day", dd: "%d days", M: "a month", MM: "%d months", y: "a year", yy: "%d years" };
        function i(r2, e2, t2, o2) {
          return n.fromToBase(r2, e2, t2, o2);
        }
        t.en.relativeTime = o, n.fromToBase = function(e2, n2, i2, d2, u) {
          for (var f, a, s, l = i2.$locale().relativeTime || o, h = r.thresholds || [{ l: "s", r: 44, d: "second" }, { l: "m", r: 89 }, { l: "mm", r: 44, d: "minute" }, { l: "h", r: 89 }, { l: "hh", r: 21, d: "hour" }, { l: "d", r: 35 }, { l: "dd", r: 25, d: "day" }, { l: "M", r: 45 }, { l: "MM", r: 10, d: "month" }, { l: "y", r: 17 }, { l: "yy", d: "year" }], m = h.length, c = 0; c < m; c += 1) {
            var y = h[c];
            y.d && (f = d2 ? t(e2).diff(i2, y.d, true) : i2.diff(e2, y.d, true));
            var p = (r.rounding || Math.round)(Math.abs(f));
            if (s = f > 0, p <= y.r || !y.r) {
              p <= 1 && c > 0 && (y = h[c - 1]);
              var v = l[y.l];
              u && (p = u("" + p)), a = "string" == typeof v ? v.replace("%d", p) : v(p, n2, y.l, s);
              break;
            }
          }
          if (n2) return a;
          var M = s ? l.future : l.past;
          return "function" == typeof M ? M(a) : M.replace("%s", a);
        }, n.to = function(r2, e2) {
          return i(r2, e2, this, true);
        }, n.from = function(r2, e2) {
          return i(r2, e2, this);
        };
        var d = function(r2) {
          return r2.$u ? t.utc() : t();
        };
        n.toNow = function(r2) {
          return this.to(d(this), r2);
        }, n.fromNow = function(r2) {
          return this.from(d(this), r2);
        };
      };
    });
  }
});

// src/date-time.tsx
var date_time_exports = {};
__export(date_time_exports, {
  default: () => DateTime
});
module.exports = __toCommonJS(date_time_exports);
var import_react = require("react");
var import_api = require("@raycast/api");

// node_modules/chrono-node/dist/esm/results.js
var import_quarterOfYear = __toESM(require_quarterOfYear(), 1);
var import_dayjs2 = __toESM(require_dayjs_min(), 1);

// node_modules/chrono-node/dist/esm/types.js
var Meridiem;
(function(Meridiem2) {
  Meridiem2[Meridiem2["AM"] = 0] = "AM";
  Meridiem2[Meridiem2["PM"] = 1] = "PM";
})(Meridiem || (Meridiem = {}));
var Weekday;
(function(Weekday2) {
  Weekday2[Weekday2["SUNDAY"] = 0] = "SUNDAY";
  Weekday2[Weekday2["MONDAY"] = 1] = "MONDAY";
  Weekday2[Weekday2["TUESDAY"] = 2] = "TUESDAY";
  Weekday2[Weekday2["WEDNESDAY"] = 3] = "WEDNESDAY";
  Weekday2[Weekday2["THURSDAY"] = 4] = "THURSDAY";
  Weekday2[Weekday2["FRIDAY"] = 5] = "FRIDAY";
  Weekday2[Weekday2["SATURDAY"] = 6] = "SATURDAY";
})(Weekday || (Weekday = {}));
var Month;
(function(Month2) {
  Month2[Month2["JANUARY"] = 1] = "JANUARY";
  Month2[Month2["FEBRUARY"] = 2] = "FEBRUARY";
  Month2[Month2["MARCH"] = 3] = "MARCH";
  Month2[Month2["APRIL"] = 4] = "APRIL";
  Month2[Month2["MAY"] = 5] = "MAY";
  Month2[Month2["JUNE"] = 6] = "JUNE";
  Month2[Month2["JULY"] = 7] = "JULY";
  Month2[Month2["AUGUST"] = 8] = "AUGUST";
  Month2[Month2["SEPTEMBER"] = 9] = "SEPTEMBER";
  Month2[Month2["OCTOBER"] = 10] = "OCTOBER";
  Month2[Month2["NOVEMBER"] = 11] = "NOVEMBER";
  Month2[Month2["DECEMBER"] = 12] = "DECEMBER";
})(Month || (Month = {}));

// node_modules/chrono-node/dist/esm/utils/dayjs.js
function implyTheNextDay(component, targetDayJs) {
  targetDayJs = targetDayJs.add(1, "day");
  implySimilarDate(component, targetDayJs);
  implySimilarTime(component, targetDayJs);
}
function assignSimilarDate(component, targetDayJs) {
  component.assign("day", targetDayJs.date());
  component.assign("month", targetDayJs.month() + 1);
  component.assign("year", targetDayJs.year());
}
function assignSimilarTime(component, targetDayJs) {
  component.assign("hour", targetDayJs.hour());
  component.assign("minute", targetDayJs.minute());
  component.assign("second", targetDayJs.second());
  component.assign("millisecond", targetDayJs.millisecond());
  if (component.get("hour") < 12) {
    component.assign("meridiem", Meridiem.AM);
  } else {
    component.assign("meridiem", Meridiem.PM);
  }
}
function implySimilarDate(component, targetDayJs) {
  component.imply("day", targetDayJs.date());
  component.imply("month", targetDayJs.month() + 1);
  component.imply("year", targetDayJs.year());
}
function implySimilarTime(component, targetDayJs) {
  component.imply("hour", targetDayJs.hour());
  component.imply("minute", targetDayJs.minute());
  component.imply("second", targetDayJs.second());
  component.imply("millisecond", targetDayJs.millisecond());
}

// node_modules/chrono-node/dist/esm/timezone.js
var import_dayjs = __toESM(require_dayjs_min(), 1);
var TIMEZONE_ABBR_MAP = {
  ACDT: 630,
  ACST: 570,
  ADT: -180,
  AEDT: 660,
  AEST: 600,
  AFT: 270,
  AKDT: -480,
  AKST: -540,
  ALMT: 360,
  AMST: -180,
  AMT: -240,
  ANAST: 720,
  ANAT: 720,
  AQTT: 300,
  ART: -180,
  AST: -240,
  AWDT: 540,
  AWST: 480,
  AZOST: 0,
  AZOT: -60,
  AZST: 300,
  AZT: 240,
  BNT: 480,
  BOT: -240,
  BRST: -120,
  BRT: -180,
  BST: 60,
  BTT: 360,
  CAST: 480,
  CAT: 120,
  CCT: 390,
  CDT: -300,
  CEST: 120,
  CET: {
    timezoneOffsetDuringDst: 2 * 60,
    timezoneOffsetNonDst: 60,
    dstStart: (year) => getLastWeekdayOfMonth(year, Month.MARCH, Weekday.SUNDAY, 2),
    dstEnd: (year) => getLastWeekdayOfMonth(year, Month.OCTOBER, Weekday.SUNDAY, 3)
  },
  CHADT: 825,
  CHAST: 765,
  CKT: -600,
  CLST: -180,
  CLT: -240,
  COT: -300,
  CST: -360,
  CT: {
    timezoneOffsetDuringDst: -5 * 60,
    timezoneOffsetNonDst: -6 * 60,
    dstStart: (year) => getNthWeekdayOfMonth(year, Month.MARCH, Weekday.SUNDAY, 2, 2),
    dstEnd: (year) => getNthWeekdayOfMonth(year, Month.NOVEMBER, Weekday.SUNDAY, 1, 2)
  },
  CVT: -60,
  CXT: 420,
  ChST: 600,
  DAVT: 420,
  EASST: -300,
  EAST: -360,
  EAT: 180,
  ECT: -300,
  EDT: -240,
  EEST: 180,
  EET: 120,
  EGST: 0,
  EGT: -60,
  EST: -300,
  ET: {
    timezoneOffsetDuringDst: -4 * 60,
    timezoneOffsetNonDst: -5 * 60,
    dstStart: (year) => getNthWeekdayOfMonth(year, Month.MARCH, Weekday.SUNDAY, 2, 2),
    dstEnd: (year) => getNthWeekdayOfMonth(year, Month.NOVEMBER, Weekday.SUNDAY, 1, 2)
  },
  FJST: 780,
  FJT: 720,
  FKST: -180,
  FKT: -240,
  FNT: -120,
  GALT: -360,
  GAMT: -540,
  GET: 240,
  GFT: -180,
  GILT: 720,
  GMT: 0,
  GST: 240,
  GYT: -240,
  HAA: -180,
  HAC: -300,
  HADT: -540,
  HAE: -240,
  HAP: -420,
  HAR: -360,
  HAST: -600,
  HAT: -90,
  HAY: -480,
  HKT: 480,
  HLV: -210,
  HNA: -240,
  HNC: -360,
  HNE: -300,
  HNP: -480,
  HNR: -420,
  HNT: -150,
  HNY: -540,
  HOVT: 420,
  ICT: 420,
  IDT: 180,
  IOT: 360,
  IRDT: 270,
  IRKST: 540,
  IRKT: 540,
  IRST: 210,
  IST: 330,
  JST: 540,
  KGT: 360,
  KRAST: 480,
  KRAT: 480,
  KST: 540,
  KUYT: 240,
  LHDT: 660,
  LHST: 630,
  LINT: 840,
  MAGST: 720,
  MAGT: 720,
  MART: -510,
  MAWT: 300,
  MDT: -360,
  MESZ: 120,
  MEZ: 60,
  MHT: 720,
  MMT: 390,
  MSD: 240,
  MSK: 180,
  MST: -420,
  MT: {
    timezoneOffsetDuringDst: -6 * 60,
    timezoneOffsetNonDst: -7 * 60,
    dstStart: (year) => getNthWeekdayOfMonth(year, Month.MARCH, Weekday.SUNDAY, 2, 2),
    dstEnd: (year) => getNthWeekdayOfMonth(year, Month.NOVEMBER, Weekday.SUNDAY, 1, 2)
  },
  MUT: 240,
  MVT: 300,
  MYT: 480,
  NCT: 660,
  NDT: -90,
  NFT: 690,
  NOVST: 420,
  NOVT: 360,
  NPT: 345,
  NST: -150,
  NUT: -660,
  NZDT: 780,
  NZST: 720,
  OMSST: 420,
  OMST: 420,
  PDT: -420,
  PET: -300,
  PETST: 720,
  PETT: 720,
  PGT: 600,
  PHOT: 780,
  PHT: 480,
  PKT: 300,
  PMDT: -120,
  PMST: -180,
  PONT: 660,
  PST: -480,
  PT: {
    timezoneOffsetDuringDst: -7 * 60,
    timezoneOffsetNonDst: -8 * 60,
    dstStart: (year) => getNthWeekdayOfMonth(year, Month.MARCH, Weekday.SUNDAY, 2, 2),
    dstEnd: (year) => getNthWeekdayOfMonth(year, Month.NOVEMBER, Weekday.SUNDAY, 1, 2)
  },
  PWT: 540,
  PYST: -180,
  PYT: -240,
  RET: 240,
  SAMT: 240,
  SAST: 120,
  SBT: 660,
  SCT: 240,
  SGT: 480,
  SRT: -180,
  SST: -660,
  TAHT: -600,
  TFT: 300,
  TJT: 300,
  TKT: 780,
  TLT: 540,
  TMT: 300,
  TVT: 720,
  ULAT: 480,
  UTC: 0,
  UYST: -120,
  UYT: -180,
  UZT: 300,
  VET: -210,
  VLAST: 660,
  VLAT: 660,
  VUT: 660,
  WAST: 120,
  WAT: 60,
  WEST: 60,
  WESZ: 60,
  WET: 0,
  WEZ: 0,
  WFT: 720,
  WGST: -120,
  WGT: -180,
  WIB: 420,
  WIT: 540,
  WITA: 480,
  WST: 780,
  WT: 0,
  YAKST: 600,
  YAKT: 600,
  YAPT: 600,
  YEKST: 360,
  YEKT: 360
};
function getNthWeekdayOfMonth(year, month, weekday, n, hour = 0) {
  let dayOfMonth = 0;
  let i = 0;
  while (i < n) {
    dayOfMonth++;
    const date = new Date(year, month - 1, dayOfMonth);
    if (date.getDay() === weekday)
      i++;
  }
  return new Date(year, month - 1, dayOfMonth, hour);
}
function getLastWeekdayOfMonth(year, month, weekday, hour = 0) {
  const oneIndexedWeekday = weekday === 0 ? 7 : weekday;
  const date = new Date(year, month - 1 + 1, 1, 12);
  const firstWeekdayNextMonth = date.getDay() === 0 ? 7 : date.getDay();
  let dayDiff;
  if (firstWeekdayNextMonth === oneIndexedWeekday)
    dayDiff = 7;
  else if (firstWeekdayNextMonth < oneIndexedWeekday)
    dayDiff = 7 + firstWeekdayNextMonth - oneIndexedWeekday;
  else
    dayDiff = firstWeekdayNextMonth - oneIndexedWeekday;
  date.setDate(date.getDate() - dayDiff);
  return new Date(year, month - 1, date.getDate(), hour);
}
function toTimezoneOffset(timezoneInput, date, timezoneOverrides = {}) {
  if (timezoneInput == null) {
    return null;
  }
  if (typeof timezoneInput === "number") {
    return timezoneInput;
  }
  const matchedTimezone = timezoneOverrides[timezoneInput] ?? TIMEZONE_ABBR_MAP[timezoneInput];
  if (matchedTimezone == null) {
    return null;
  }
  if (typeof matchedTimezone == "number") {
    return matchedTimezone;
  }
  if (date == null) {
    return null;
  }
  if ((0, import_dayjs.default)(date).isAfter(matchedTimezone.dstStart(date.getFullYear())) && !(0, import_dayjs.default)(date).isAfter(matchedTimezone.dstEnd(date.getFullYear()))) {
    return matchedTimezone.timezoneOffsetDuringDst;
  }
  return matchedTimezone.timezoneOffsetNonDst;
}

// node_modules/chrono-node/dist/esm/results.js
import_dayjs2.default.extend(import_quarterOfYear.default);
var ReferenceWithTimezone = class {
  constructor(input) {
    input = input ?? /* @__PURE__ */ new Date();
    if (input instanceof Date) {
      this.instant = input;
    } else {
      this.instant = input.instant ?? /* @__PURE__ */ new Date();
      this.timezoneOffset = toTimezoneOffset(input.timezone, this.instant);
    }
  }
  getDateWithAdjustedTimezone() {
    return new Date(this.instant.getTime() + this.getSystemTimezoneAdjustmentMinute(this.instant) * 6e4);
  }
  getSystemTimezoneAdjustmentMinute(date, overrideTimezoneOffset) {
    if (!date || date.getTime() < 0) {
      date = /* @__PURE__ */ new Date();
    }
    const currentTimezoneOffset = -date.getTimezoneOffset();
    const targetTimezoneOffset = overrideTimezoneOffset ?? this.timezoneOffset ?? currentTimezoneOffset;
    return currentTimezoneOffset - targetTimezoneOffset;
  }
};
var ParsingComponents = class _ParsingComponents {
  constructor(reference, knownComponents) {
    this._tags = /* @__PURE__ */ new Set();
    this.reference = reference;
    this.knownValues = {};
    this.impliedValues = {};
    if (knownComponents) {
      for (const key in knownComponents) {
        this.knownValues[key] = knownComponents[key];
      }
    }
    const refDayJs = (0, import_dayjs2.default)(reference.instant);
    this.imply("day", refDayJs.date());
    this.imply("month", refDayJs.month() + 1);
    this.imply("year", refDayJs.year());
    this.imply("hour", 12);
    this.imply("minute", 0);
    this.imply("second", 0);
    this.imply("millisecond", 0);
  }
  get(component) {
    if (component in this.knownValues) {
      return this.knownValues[component];
    }
    if (component in this.impliedValues) {
      return this.impliedValues[component];
    }
    return null;
  }
  isCertain(component) {
    return component in this.knownValues;
  }
  getCertainComponents() {
    return Object.keys(this.knownValues);
  }
  imply(component, value) {
    if (component in this.knownValues) {
      return this;
    }
    this.impliedValues[component] = value;
    return this;
  }
  assign(component, value) {
    this.knownValues[component] = value;
    delete this.impliedValues[component];
    return this;
  }
  delete(component) {
    delete this.knownValues[component];
    delete this.impliedValues[component];
  }
  clone() {
    const component = new _ParsingComponents(this.reference);
    component.knownValues = {};
    component.impliedValues = {};
    for (const key in this.knownValues) {
      component.knownValues[key] = this.knownValues[key];
    }
    for (const key in this.impliedValues) {
      component.impliedValues[key] = this.impliedValues[key];
    }
    return component;
  }
  isOnlyDate() {
    return !this.isCertain("hour") && !this.isCertain("minute") && !this.isCertain("second");
  }
  isOnlyTime() {
    return !this.isCertain("weekday") && !this.isCertain("day") && !this.isCertain("month") && !this.isCertain("year");
  }
  isOnlyWeekdayComponent() {
    return this.isCertain("weekday") && !this.isCertain("day") && !this.isCertain("month");
  }
  isDateWithUnknownYear() {
    return this.isCertain("month") && !this.isCertain("year");
  }
  isValidDate() {
    const date = this.dateWithoutTimezoneAdjustment();
    if (date.getFullYear() !== this.get("year"))
      return false;
    if (date.getMonth() !== this.get("month") - 1)
      return false;
    if (date.getDate() !== this.get("day"))
      return false;
    if (this.get("hour") != null && date.getHours() != this.get("hour"))
      return false;
    if (this.get("minute") != null && date.getMinutes() != this.get("minute"))
      return false;
    return true;
  }
  toString() {
    return `[ParsingComponents {
            tags: ${JSON.stringify(Array.from(this._tags).sort())}, 
            knownValues: ${JSON.stringify(this.knownValues)}, 
            impliedValues: ${JSON.stringify(this.impliedValues)}}, 
            reference: ${JSON.stringify(this.reference)}]`;
  }
  dayjs() {
    return (0, import_dayjs2.default)(this.date());
  }
  date() {
    const date = this.dateWithoutTimezoneAdjustment();
    const timezoneAdjustment = this.reference.getSystemTimezoneAdjustmentMinute(date, this.get("timezoneOffset"));
    return new Date(date.getTime() + timezoneAdjustment * 6e4);
  }
  addTag(tag) {
    this._tags.add(tag);
    return this;
  }
  addTags(tags) {
    for (const tag of tags) {
      this._tags.add(tag);
    }
    return this;
  }
  tags() {
    return new Set(this._tags);
  }
  dateWithoutTimezoneAdjustment() {
    const date = new Date(this.get("year"), this.get("month") - 1, this.get("day"), this.get("hour"), this.get("minute"), this.get("second"), this.get("millisecond"));
    date.setFullYear(this.get("year"));
    return date;
  }
  static createRelativeFromReference(reference, fragments) {
    let date = (0, import_dayjs2.default)(reference.instant);
    for (const key in fragments) {
      date = date.add(fragments[key], key);
    }
    const components = new _ParsingComponents(reference);
    components.addTag("result/relativeDate");
    if (fragments["hour"] || fragments["minute"] || fragments["second"]) {
      components.addTag("result/relativeDateAndTime");
      assignSimilarTime(components, date);
      assignSimilarDate(components, date);
      if (reference.timezoneOffset !== null) {
        components.assign("timezoneOffset", -reference.instant.getTimezoneOffset());
      }
    } else {
      implySimilarTime(components, date);
      if (reference.timezoneOffset !== null) {
        components.imply("timezoneOffset", -reference.instant.getTimezoneOffset());
      }
      if (fragments["d"]) {
        components.assign("day", date.date());
        components.assign("month", date.month() + 1);
        components.assign("year", date.year());
      } else if (fragments["week"]) {
        components.assign("day", date.date());
        components.assign("month", date.month() + 1);
        components.assign("year", date.year());
        components.imply("weekday", date.day());
      } else {
        components.imply("day", date.date());
        if (fragments["month"]) {
          components.assign("month", date.month() + 1);
          components.assign("year", date.year());
        } else {
          components.imply("month", date.month() + 1);
          if (fragments["year"]) {
            components.assign("year", date.year());
          } else {
            components.imply("year", date.year());
          }
        }
      }
    }
    return components;
  }
};
var ParsingResult = class _ParsingResult {
  constructor(reference, index, text, start, end) {
    this.reference = reference;
    this.refDate = reference.instant;
    this.index = index;
    this.text = text;
    this.start = start || new ParsingComponents(reference);
    this.end = end;
  }
  clone() {
    const result = new _ParsingResult(this.reference, this.index, this.text);
    result.start = this.start ? this.start.clone() : null;
    result.end = this.end ? this.end.clone() : null;
    return result;
  }
  date() {
    return this.start.date();
  }
  addTag(tag) {
    this.start.addTag(tag);
    if (this.end) {
      this.end.addTag(tag);
    }
    return this;
  }
  addTags(tags) {
    this.start.addTags(tags);
    if (this.end) {
      this.end.addTags(tags);
    }
    return this;
  }
  tags() {
    const combinedTags = new Set(this.start.tags());
    if (this.end) {
      for (const tag of this.end.tags()) {
        combinedTags.add(tag);
      }
    }
    return combinedTags;
  }
  toString() {
    const tags = Array.from(this.tags()).sort();
    return `[ParsingResult {index: ${this.index}, text: '${this.text}', tags: ${JSON.stringify(tags)} ...}]`;
  }
};

// node_modules/chrono-node/dist/esm/utils/pattern.js
function repeatedTimeunitPattern(prefix, singleTimeunitPattern, connectorPattern = "\\s{0,5},?\\s{0,5}") {
  const singleTimeunitPatternNoCapture = singleTimeunitPattern.replace(/\((?!\?)/g, "(?:");
  return `${prefix}${singleTimeunitPatternNoCapture}(?:${connectorPattern}${singleTimeunitPatternNoCapture}){0,10}`;
}
function extractTerms(dictionary) {
  let keys;
  if (dictionary instanceof Array) {
    keys = [...dictionary];
  } else if (dictionary instanceof Map) {
    keys = Array.from(dictionary.keys());
  } else {
    keys = Object.keys(dictionary);
  }
  return keys;
}
function matchAnyPattern(dictionary) {
  const joinedTerms = extractTerms(dictionary).sort((a, b) => b.length - a.length).join("|").replace(/\./g, "\\.");
  return `(?:${joinedTerms})`;
}

// node_modules/chrono-node/dist/esm/calculation/years.js
var import_dayjs4 = __toESM(require_dayjs_min(), 1);
function findMostLikelyADYear(yearNumber) {
  if (yearNumber < 100) {
    if (yearNumber > 50) {
      yearNumber = yearNumber + 1900;
    } else {
      yearNumber = yearNumber + 2e3;
    }
  }
  return yearNumber;
}
function findYearClosestToRef(refDate, day, month) {
  const refMoment = (0, import_dayjs4.default)(refDate);
  let dateMoment = refMoment;
  dateMoment = dateMoment.month(month - 1);
  dateMoment = dateMoment.date(day);
  dateMoment = dateMoment.year(refMoment.year());
  const nextYear = dateMoment.add(1, "y");
  const lastYear = dateMoment.add(-1, "y");
  if (Math.abs(nextYear.diff(refMoment)) < Math.abs(dateMoment.diff(refMoment))) {
    dateMoment = nextYear;
  } else if (Math.abs(lastYear.diff(refMoment)) < Math.abs(dateMoment.diff(refMoment))) {
    dateMoment = lastYear;
  }
  return dateMoment.year();
}

// node_modules/chrono-node/dist/esm/locales/en/constants.js
var WEEKDAY_DICTIONARY = {
  sunday: 0,
  sun: 0,
  "sun.": 0,
  monday: 1,
  mon: 1,
  "mon.": 1,
  tuesday: 2,
  tue: 2,
  "tue.": 2,
  wednesday: 3,
  wed: 3,
  "wed.": 3,
  thursday: 4,
  thurs: 4,
  "thurs.": 4,
  thur: 4,
  "thur.": 4,
  thu: 4,
  "thu.": 4,
  friday: 5,
  fri: 5,
  "fri.": 5,
  saturday: 6,
  sat: 6,
  "sat.": 6
};
var FULL_MONTH_NAME_DICTIONARY = {
  january: 1,
  february: 2,
  march: 3,
  april: 4,
  may: 5,
  june: 6,
  july: 7,
  august: 8,
  september: 9,
  october: 10,
  november: 11,
  december: 12
};
var MONTH_DICTIONARY = {
  ...FULL_MONTH_NAME_DICTIONARY,
  jan: 1,
  "jan.": 1,
  feb: 2,
  "feb.": 2,
  mar: 3,
  "mar.": 3,
  apr: 4,
  "apr.": 4,
  jun: 6,
  "jun.": 6,
  jul: 7,
  "jul.": 7,
  aug: 8,
  "aug.": 8,
  sep: 9,
  "sep.": 9,
  sept: 9,
  "sept.": 9,
  oct: 10,
  "oct.": 10,
  nov: 11,
  "nov.": 11,
  dec: 12,
  "dec.": 12
};
var INTEGER_WORD_DICTIONARY = {
  one: 1,
  two: 2,
  three: 3,
  four: 4,
  five: 5,
  six: 6,
  seven: 7,
  eight: 8,
  nine: 9,
  ten: 10,
  eleven: 11,
  twelve: 12
};
var ORDINAL_WORD_DICTIONARY = {
  first: 1,
  second: 2,
  third: 3,
  fourth: 4,
  fifth: 5,
  sixth: 6,
  seventh: 7,
  eighth: 8,
  ninth: 9,
  tenth: 10,
  eleventh: 11,
  twelfth: 12,
  thirteenth: 13,
  fourteenth: 14,
  fifteenth: 15,
  sixteenth: 16,
  seventeenth: 17,
  eighteenth: 18,
  nineteenth: 19,
  twentieth: 20,
  "twenty first": 21,
  "twenty-first": 21,
  "twenty second": 22,
  "twenty-second": 22,
  "twenty third": 23,
  "twenty-third": 23,
  "twenty fourth": 24,
  "twenty-fourth": 24,
  "twenty fifth": 25,
  "twenty-fifth": 25,
  "twenty sixth": 26,
  "twenty-sixth": 26,
  "twenty seventh": 27,
  "twenty-seventh": 27,
  "twenty eighth": 28,
  "twenty-eighth": 28,
  "twenty ninth": 29,
  "twenty-ninth": 29,
  "thirtieth": 30,
  "thirty first": 31,
  "thirty-first": 31
};
var TIME_UNIT_DICTIONARY_NO_ABBR = {
  second: "second",
  seconds: "second",
  minute: "minute",
  minutes: "minute",
  hour: "hour",
  hours: "hour",
  day: "d",
  days: "d",
  week: "week",
  weeks: "week",
  month: "month",
  months: "month",
  quarter: "quarter",
  quarters: "quarter",
  year: "year",
  years: "year"
};
var TIME_UNIT_DICTIONARY = {
  s: "second",
  sec: "second",
  second: "second",
  seconds: "second",
  m: "minute",
  min: "minute",
  mins: "minute",
  minute: "minute",
  minutes: "minute",
  h: "hour",
  hr: "hour",
  hrs: "hour",
  hour: "hour",
  hours: "hour",
  d: "d",
  day: "d",
  days: "d",
  w: "w",
  week: "week",
  weeks: "week",
  mo: "month",
  mon: "month",
  mos: "month",
  month: "month",
  months: "month",
  qtr: "quarter",
  quarter: "quarter",
  quarters: "quarter",
  y: "year",
  yr: "year",
  year: "year",
  years: "year",
  ...TIME_UNIT_DICTIONARY_NO_ABBR
};
var NUMBER_PATTERN = `(?:${matchAnyPattern(INTEGER_WORD_DICTIONARY)}|[0-9]+|[0-9]+\\.[0-9]+|half(?:\\s{0,2}an?)?|an?\\b(?:\\s{0,2}few)?|few|several|the|a?\\s{0,2}couple\\s{0,2}(?:of)?)`;
function parseNumberPattern(match) {
  const num = match.toLowerCase();
  if (INTEGER_WORD_DICTIONARY[num] !== void 0) {
    return INTEGER_WORD_DICTIONARY[num];
  } else if (num === "a" || num === "an" || num == "the") {
    return 1;
  } else if (num.match(/few/)) {
    return 3;
  } else if (num.match(/half/)) {
    return 0.5;
  } else if (num.match(/couple/)) {
    return 2;
  } else if (num.match(/several/)) {
    return 7;
  }
  return parseFloat(num);
}
var ORDINAL_NUMBER_PATTERN = `(?:${matchAnyPattern(ORDINAL_WORD_DICTIONARY)}|[0-9]{1,2}(?:st|nd|rd|th)?)`;
function parseOrdinalNumberPattern(match) {
  let num = match.toLowerCase();
  if (ORDINAL_WORD_DICTIONARY[num] !== void 0) {
    return ORDINAL_WORD_DICTIONARY[num];
  }
  num = num.replace(/(?:st|nd|rd|th)$/i, "");
  return parseInt(num);
}
var YEAR_PATTERN = `(?:[1-9][0-9]{0,3}\\s{0,2}(?:BE|AD|BC|BCE|CE)|[1-2][0-9]{3}|[5-9][0-9]|2[0-5])`;
function parseYear(match) {
  if (/BE/i.test(match)) {
    match = match.replace(/BE/i, "");
    return parseInt(match) - 543;
  }
  if (/BCE?/i.test(match)) {
    match = match.replace(/BCE?/i, "");
    return -parseInt(match);
  }
  if (/(AD|CE)/i.test(match)) {
    match = match.replace(/(AD|CE)/i, "");
    return parseInt(match);
  }
  const rawYearNumber = parseInt(match);
  return findMostLikelyADYear(rawYearNumber);
}
var SINGLE_TIME_UNIT_PATTERN = `(${NUMBER_PATTERN})\\s{0,3}(${matchAnyPattern(TIME_UNIT_DICTIONARY)})`;
var SINGLE_TIME_UNIT_REGEX = new RegExp(SINGLE_TIME_UNIT_PATTERN, "i");
var SINGLE_TIME_UNIT_NO_ABBR_PATTERN = `(${NUMBER_PATTERN})\\s{0,3}(${matchAnyPattern(TIME_UNIT_DICTIONARY_NO_ABBR)})`;
var TIME_UNIT_CONNECTOR_PATTERN = `\\s{0,5},?(?:\\s*and)?\\s{0,5}`;
var TIME_UNITS_PATTERN = repeatedTimeunitPattern(`(?:(?:about|around)\\s{0,3})?`, SINGLE_TIME_UNIT_PATTERN, TIME_UNIT_CONNECTOR_PATTERN);
var TIME_UNITS_NO_ABBR_PATTERN = repeatedTimeunitPattern(`(?:(?:about|around)\\s{0,3})?`, SINGLE_TIME_UNIT_NO_ABBR_PATTERN, TIME_UNIT_CONNECTOR_PATTERN);
function parseTimeUnits(timeunitText) {
  const fragments = {};
  let remainingText = timeunitText;
  let match = SINGLE_TIME_UNIT_REGEX.exec(remainingText);
  while (match) {
    collectDateTimeFragment(fragments, match);
    remainingText = remainingText.substring(match[0].length).trim();
    match = SINGLE_TIME_UNIT_REGEX.exec(remainingText);
  }
  if (Object.keys(fragments).length == 0) {
    return null;
  }
  return fragments;
}
function collectDateTimeFragment(fragments, match) {
  if (match[0].match(/^[a-zA-Z]+$/)) {
    return;
  }
  const num = parseNumberPattern(match[1]);
  const unit = TIME_UNIT_DICTIONARY[match[2].toLowerCase()];
  fragments[unit] = num;
}

// node_modules/chrono-node/dist/esm/common/parsers/AbstractParserWithWordBoundary.js
var AbstractParserWithWordBoundaryChecking = class {
  constructor() {
    this.cachedInnerPattern = null;
    this.cachedPattern = null;
  }
  innerPatternHasChange(context, currentInnerPattern) {
    return this.innerPattern(context) !== currentInnerPattern;
  }
  patternLeftBoundary() {
    return `(\\W|^)`;
  }
  pattern(context) {
    if (this.cachedInnerPattern) {
      if (!this.innerPatternHasChange(context, this.cachedInnerPattern)) {
        return this.cachedPattern;
      }
    }
    this.cachedInnerPattern = this.innerPattern(context);
    this.cachedPattern = new RegExp(`${this.patternLeftBoundary()}${this.cachedInnerPattern.source}`, this.cachedInnerPattern.flags);
    return this.cachedPattern;
  }
  extract(context, match) {
    const header = match[1] ?? "";
    match.index = match.index + header.length;
    match[0] = match[0].substring(header.length);
    for (let i = 2; i < match.length; i++) {
      match[i - 1] = match[i];
    }
    return this.innerExtract(context, match);
  }
};

// node_modules/chrono-node/dist/esm/locales/en/parsers/ENTimeUnitWithinFormatParser.js
var PATTERN_WITH_OPTIONAL_PREFIX = new RegExp(`(?:(?:within|in|for)\\s*)?(?:(?:about|around|roughly|approximately|just)\\s*(?:~\\s*)?)?(${TIME_UNITS_PATTERN})(?=\\W|$)`, "i");
var PATTERN_WITH_PREFIX = new RegExp(`(?:within|in|for)\\s*(?:(?:about|around|roughly|approximately|just)\\s*(?:~\\s*)?)?(${TIME_UNITS_PATTERN})(?=\\W|$)`, "i");
var PATTERN_WITH_PREFIX_STRICT = new RegExp(`(?:within|in|for)\\s*(?:(?:about|around|roughly|approximately|just)\\s*(?:~\\s*)?)?(${TIME_UNITS_NO_ABBR_PATTERN})(?=\\W|$)`, "i");
var ENTimeUnitWithinFormatParser = class extends AbstractParserWithWordBoundaryChecking {
  constructor(strictMode) {
    super();
    this.strictMode = strictMode;
  }
  innerPattern(context) {
    if (this.strictMode) {
      return PATTERN_WITH_PREFIX_STRICT;
    }
    return context.option.forwardDate ? PATTERN_WITH_OPTIONAL_PREFIX : PATTERN_WITH_PREFIX;
  }
  innerExtract(context, match) {
    if (match[0].match(/^for\s*the\s*\w+/)) {
      return null;
    }
    const timeUnits = parseTimeUnits(match[1]);
    if (!timeUnits) {
      return null;
    }
    return ParsingComponents.createRelativeFromReference(context.reference, timeUnits);
  }
};

// node_modules/chrono-node/dist/esm/locales/en/parsers/ENMonthNameLittleEndianParser.js
var PATTERN = new RegExp(`(?:on\\s{0,3})?(${ORDINAL_NUMBER_PATTERN})(?:\\s{0,3}(?:to|\\-|\\\u2013|until|through|till)?\\s{0,3}(${ORDINAL_NUMBER_PATTERN}))?(?:-|/|\\s{0,3}(?:of)?\\s{0,3})(${matchAnyPattern(MONTH_DICTIONARY)})(?:(?:-|/|,?\\s{0,3})(${YEAR_PATTERN}(?!\\w)))?(?=\\W|$)`, "i");
var DATE_GROUP = 1;
var DATE_TO_GROUP = 2;
var MONTH_NAME_GROUP = 3;
var YEAR_GROUP = 4;
var ENMonthNameLittleEndianParser = class extends AbstractParserWithWordBoundaryChecking {
  innerPattern() {
    return PATTERN;
  }
  innerExtract(context, match) {
    const result = context.createParsingResult(match.index, match[0]);
    const month = MONTH_DICTIONARY[match[MONTH_NAME_GROUP].toLowerCase()];
    const day = parseOrdinalNumberPattern(match[DATE_GROUP]);
    if (day > 31) {
      match.index = match.index + match[DATE_GROUP].length;
      return null;
    }
    result.start.assign("month", month);
    result.start.assign("day", day);
    if (match[YEAR_GROUP]) {
      const yearNumber = parseYear(match[YEAR_GROUP]);
      result.start.assign("year", yearNumber);
    } else {
      const year = findYearClosestToRef(context.refDate, day, month);
      result.start.imply("year", year);
    }
    if (match[DATE_TO_GROUP]) {
      const endDate = parseOrdinalNumberPattern(match[DATE_TO_GROUP]);
      result.end = result.start.clone();
      result.end.assign("day", endDate);
    }
    return result;
  }
};

// node_modules/chrono-node/dist/esm/locales/en/parsers/ENMonthNameMiddleEndianParser.js
var PATTERN2 = new RegExp(`(${matchAnyPattern(MONTH_DICTIONARY)})(?:-|/|\\s*,?\\s*)(${ORDINAL_NUMBER_PATTERN})(?!\\s*(?:am|pm))\\s*(?:(?:to|\\-)\\s*(${ORDINAL_NUMBER_PATTERN})\\s*)?(?:(?:-|/|\\s*,\\s*|\\s+)(${YEAR_PATTERN}))?(?=\\W|$)(?!\\:\\d)`, "i");
var MONTH_NAME_GROUP2 = 1;
var DATE_GROUP2 = 2;
var DATE_TO_GROUP2 = 3;
var YEAR_GROUP2 = 4;
var ENMonthNameMiddleEndianParser = class extends AbstractParserWithWordBoundaryChecking {
  constructor(shouldSkipYearLikeDate) {
    super();
    this.shouldSkipYearLikeDate = shouldSkipYearLikeDate;
  }
  innerPattern() {
    return PATTERN2;
  }
  innerExtract(context, match) {
    const month = MONTH_DICTIONARY[match[MONTH_NAME_GROUP2].toLowerCase()];
    const day = parseOrdinalNumberPattern(match[DATE_GROUP2]);
    if (day > 31) {
      return null;
    }
    if (this.shouldSkipYearLikeDate) {
      if (!match[DATE_TO_GROUP2] && !match[YEAR_GROUP2] && match[DATE_GROUP2].match(/^2[0-5]$/)) {
        return null;
      }
    }
    const components = context.createParsingComponents({
      day,
      month
    }).addTag("parser/ENMonthNameMiddleEndianParser");
    if (match[YEAR_GROUP2]) {
      const year = parseYear(match[YEAR_GROUP2]);
      components.assign("year", year);
    } else {
      const year = findYearClosestToRef(context.refDate, day, month);
      components.imply("year", year);
    }
    if (!match[DATE_TO_GROUP2]) {
      return components;
    }
    const endDate = parseOrdinalNumberPattern(match[DATE_TO_GROUP2]);
    const result = context.createParsingResult(match.index, match[0]);
    result.start = components;
    result.end = components.clone();
    result.end.assign("day", endDate);
    return result;
  }
};

// node_modules/chrono-node/dist/esm/locales/en/parsers/ENMonthNameParser.js
var PATTERN3 = new RegExp(`((?:in)\\s*)?(${matchAnyPattern(MONTH_DICTIONARY)})\\s*(?:(?:,|-|of)?\\s*(${YEAR_PATTERN})?)?(?=[^\\s\\w]|\\s+[^0-9]|\\s+$|$)`, "i");
var PREFIX_GROUP = 1;
var MONTH_NAME_GROUP3 = 2;
var YEAR_GROUP3 = 3;
var ENMonthNameParser = class extends AbstractParserWithWordBoundaryChecking {
  innerPattern() {
    return PATTERN3;
  }
  innerExtract(context, match) {
    const monthName = match[MONTH_NAME_GROUP3].toLowerCase();
    if (match[0].length <= 3 && !FULL_MONTH_NAME_DICTIONARY[monthName]) {
      return null;
    }
    const result = context.createParsingResult(match.index + (match[PREFIX_GROUP] || "").length, match.index + match[0].length);
    result.start.imply("day", 1);
    result.start.addTag("parser/ENMonthNameParser");
    const month = MONTH_DICTIONARY[monthName];
    result.start.assign("month", month);
    if (match[YEAR_GROUP3]) {
      const year = parseYear(match[YEAR_GROUP3]);
      result.start.assign("year", year);
    } else {
      const year = findYearClosestToRef(context.refDate, 1, month);
      result.start.imply("year", year);
    }
    return result;
  }
};

// node_modules/chrono-node/dist/esm/locales/en/parsers/ENYearMonthDayParser.js
var PATTERN4 = new RegExp(`([0-9]{4})[-\\.\\/\\s](?:(${matchAnyPattern(MONTH_DICTIONARY)})|([0-9]{1,2}))[-\\.\\/\\s]([0-9]{1,2})(?=\\W|$)`, "i");
var YEAR_NUMBER_GROUP = 1;
var MONTH_NAME_GROUP4 = 2;
var MONTH_NUMBER_GROUP = 3;
var DATE_NUMBER_GROUP = 4;
var ENYearMonthDayParser = class extends AbstractParserWithWordBoundaryChecking {
  constructor(strictMonthDateOrder) {
    super();
    this.strictMonthDateOrder = strictMonthDateOrder;
  }
  innerPattern() {
    return PATTERN4;
  }
  innerExtract(context, match) {
    const year = parseInt(match[YEAR_NUMBER_GROUP]);
    let day = parseInt(match[DATE_NUMBER_GROUP]);
    let month = match[MONTH_NUMBER_GROUP] ? parseInt(match[MONTH_NUMBER_GROUP]) : MONTH_DICTIONARY[match[MONTH_NAME_GROUP4].toLowerCase()];
    if (month < 1 || month > 12) {
      if (this.strictMonthDateOrder) {
        return null;
      }
      if (day >= 1 && day <= 12) {
        [month, day] = [day, month];
      }
    }
    if (day < 1 || day > 31) {
      return null;
    }
    return {
      day,
      month,
      year
    };
  }
};

// node_modules/chrono-node/dist/esm/locales/en/parsers/ENSlashMonthFormatParser.js
var PATTERN5 = new RegExp("([0-9]|0[1-9]|1[012])/([0-9]{4})", "i");
var MONTH_GROUP = 1;
var YEAR_GROUP4 = 2;
var ENSlashMonthFormatParser = class extends AbstractParserWithWordBoundaryChecking {
  innerPattern() {
    return PATTERN5;
  }
  innerExtract(context, match) {
    const year = parseInt(match[YEAR_GROUP4]);
    const month = parseInt(match[MONTH_GROUP]);
    return context.createParsingComponents().imply("day", 1).assign("month", month).assign("year", year);
  }
};

// node_modules/chrono-node/dist/esm/common/parsers/AbstractTimeExpressionParser.js
function primaryTimePattern(leftBoundary, primaryPrefix, primarySuffix, flags) {
  return new RegExp(`${leftBoundary}${primaryPrefix}(\\d{1,4})(?:(?:\\.|:|\uFF1A)(\\d{1,2})(?:(?::|\uFF1A)(\\d{2})(?:\\.(\\d{1,6}))?)?)?(?:\\s*(a\\.m\\.|p\\.m\\.|am?|pm?))?${primarySuffix}`, flags);
}
function followingTimePatten(followingPhase, followingSuffix) {
  return new RegExp(`^(${followingPhase})(\\d{1,4})(?:(?:\\.|\\:|\\\uFF1A)(\\d{1,2})(?:(?:\\.|\\:|\\\uFF1A)(\\d{1,2})(?:\\.(\\d{1,6}))?)?)?(?:\\s*(a\\.m\\.|p\\.m\\.|am?|pm?))?${followingSuffix}`, "i");
}
var HOUR_GROUP = 2;
var MINUTE_GROUP = 3;
var SECOND_GROUP = 4;
var MILLI_SECOND_GROUP = 5;
var AM_PM_HOUR_GROUP = 6;
var AbstractTimeExpressionParser = class {
  constructor(strictMode = false) {
    this.cachedPrimaryPrefix = null;
    this.cachedPrimarySuffix = null;
    this.cachedPrimaryTimePattern = null;
    this.cachedFollowingPhase = null;
    this.cachedFollowingSuffix = null;
    this.cachedFollowingTimePatten = null;
    this.strictMode = strictMode;
  }
  patternFlags() {
    return "i";
  }
  primaryPatternLeftBoundary() {
    return `(^|\\s|T|\\b)`;
  }
  primarySuffix() {
    return `(?!/)(?=\\W|$)`;
  }
  followingSuffix() {
    return `(?!/)(?=\\W|$)`;
  }
  pattern(context) {
    return this.getPrimaryTimePatternThroughCache();
  }
  extract(context, match) {
    const startComponents = this.extractPrimaryTimeComponents(context, match);
    if (!startComponents) {
      if (match[0].match(/^\d{4}/)) {
        match.index += 4;
        return null;
      }
      match.index += match[0].length;
      return null;
    }
    const index = match.index + match[1].length;
    const text = match[0].substring(match[1].length);
    const result = context.createParsingResult(index, text, startComponents);
    match.index += match[0].length;
    const remainingText = context.text.substring(match.index);
    const followingPattern = this.getFollowingTimePatternThroughCache();
    const followingMatch = followingPattern.exec(remainingText);
    if (text.match(/^\d{3,4}/) && followingMatch) {
      if (followingMatch[0].match(/^\s*([+-])\s*\d{2,4}$/)) {
        return null;
      }
      if (followingMatch[0].match(/^\s*([+-])\s*\d{2}\W\d{2}/)) {
        return null;
      }
    }
    if (!followingMatch || followingMatch[0].match(/^\s*([+-])\s*\d{3,4}$/)) {
      return this.checkAndReturnWithoutFollowingPattern(result);
    }
    result.end = this.extractFollowingTimeComponents(context, followingMatch, result);
    if (result.end) {
      result.text += followingMatch[0];
    }
    return this.checkAndReturnWithFollowingPattern(result);
  }
  extractPrimaryTimeComponents(context, match, strict2 = false) {
    const components = context.createParsingComponents();
    let minute = 0;
    let meridiem = null;
    let hour = parseInt(match[HOUR_GROUP]);
    if (hour > 100) {
      if (this.strictMode || match[MINUTE_GROUP] != null) {
        return null;
      }
      minute = hour % 100;
      hour = Math.floor(hour / 100);
    }
    if (hour > 24) {
      return null;
    }
    if (match[MINUTE_GROUP] != null) {
      if (match[MINUTE_GROUP].length == 1 && !match[AM_PM_HOUR_GROUP]) {
        return null;
      }
      minute = parseInt(match[MINUTE_GROUP]);
    }
    if (minute >= 60) {
      return null;
    }
    if (hour > 12) {
      meridiem = Meridiem.PM;
    }
    if (match[AM_PM_HOUR_GROUP] != null) {
      if (hour > 12)
        return null;
      const ampm = match[AM_PM_HOUR_GROUP][0].toLowerCase();
      if (ampm == "a") {
        meridiem = Meridiem.AM;
        if (hour == 12) {
          hour = 0;
        }
      }
      if (ampm == "p") {
        meridiem = Meridiem.PM;
        if (hour != 12) {
          hour += 12;
        }
      }
    }
    components.assign("hour", hour);
    components.assign("minute", minute);
    if (meridiem !== null) {
      components.assign("meridiem", meridiem);
    } else {
      if (hour < 12) {
        components.imply("meridiem", Meridiem.AM);
      } else {
        components.imply("meridiem", Meridiem.PM);
      }
    }
    if (match[MILLI_SECOND_GROUP] != null) {
      const millisecond = parseInt(match[MILLI_SECOND_GROUP].substring(0, 3));
      if (millisecond >= 1e3)
        return null;
      components.assign("millisecond", millisecond);
    }
    if (match[SECOND_GROUP] != null) {
      const second = parseInt(match[SECOND_GROUP]);
      if (second >= 60)
        return null;
      components.assign("second", second);
    }
    return components;
  }
  extractFollowingTimeComponents(context, match, result) {
    const components = context.createParsingComponents();
    if (match[MILLI_SECOND_GROUP] != null) {
      const millisecond = parseInt(match[MILLI_SECOND_GROUP].substring(0, 3));
      if (millisecond >= 1e3)
        return null;
      components.assign("millisecond", millisecond);
    }
    if (match[SECOND_GROUP] != null) {
      const second = parseInt(match[SECOND_GROUP]);
      if (second >= 60)
        return null;
      components.assign("second", second);
    }
    let hour = parseInt(match[HOUR_GROUP]);
    let minute = 0;
    let meridiem = -1;
    if (match[MINUTE_GROUP] != null) {
      minute = parseInt(match[MINUTE_GROUP]);
    } else if (hour > 100) {
      minute = hour % 100;
      hour = Math.floor(hour / 100);
    }
    if (minute >= 60 || hour > 24) {
      return null;
    }
    if (hour >= 12) {
      meridiem = Meridiem.PM;
    }
    if (match[AM_PM_HOUR_GROUP] != null) {
      if (hour > 12) {
        return null;
      }
      const ampm = match[AM_PM_HOUR_GROUP][0].toLowerCase();
      if (ampm == "a") {
        meridiem = Meridiem.AM;
        if (hour == 12) {
          hour = 0;
          if (!components.isCertain("day")) {
            components.imply("day", components.get("day") + 1);
          }
        }
      }
      if (ampm == "p") {
        meridiem = Meridiem.PM;
        if (hour != 12)
          hour += 12;
      }
      if (!result.start.isCertain("meridiem")) {
        if (meridiem == Meridiem.AM) {
          result.start.imply("meridiem", Meridiem.AM);
          if (result.start.get("hour") == 12) {
            result.start.assign("hour", 0);
          }
        } else {
          result.start.imply("meridiem", Meridiem.PM);
          if (result.start.get("hour") != 12) {
            result.start.assign("hour", result.start.get("hour") + 12);
          }
        }
      }
    }
    components.assign("hour", hour);
    components.assign("minute", minute);
    if (meridiem >= 0) {
      components.assign("meridiem", meridiem);
    } else {
      const startAtPM = result.start.isCertain("meridiem") && result.start.get("hour") > 12;
      if (startAtPM) {
        if (result.start.get("hour") - 12 > hour) {
          components.imply("meridiem", Meridiem.AM);
        } else if (hour <= 12) {
          components.assign("hour", hour + 12);
          components.assign("meridiem", Meridiem.PM);
        }
      } else if (hour > 12) {
        components.imply("meridiem", Meridiem.PM);
      } else if (hour <= 12) {
        components.imply("meridiem", Meridiem.AM);
      }
    }
    if (components.date().getTime() < result.start.date().getTime()) {
      components.imply("day", components.get("day") + 1);
    }
    return components;
  }
  checkAndReturnWithoutFollowingPattern(result) {
    if (result.text.match(/^\d$/)) {
      return null;
    }
    if (result.text.match(/^\d\d\d+$/)) {
      return null;
    }
    if (result.text.match(/\d[apAP]$/)) {
      return null;
    }
    const endingWithNumbers = result.text.match(/[^\d:.](\d[\d.]+)$/);
    if (endingWithNumbers) {
      const endingNumbers = endingWithNumbers[1];
      if (this.strictMode) {
        return null;
      }
      if (endingNumbers.includes(".") && !endingNumbers.match(/\d(\.\d{2})+$/)) {
        return null;
      }
      const endingNumberVal = parseInt(endingNumbers);
      if (endingNumberVal > 24) {
        return null;
      }
    }
    return result;
  }
  checkAndReturnWithFollowingPattern(result) {
    if (result.text.match(/^\d+-\d+$/)) {
      return null;
    }
    const endingWithNumbers = result.text.match(/[^\d:.](\d[\d.]+)\s*-\s*(\d[\d.]+)$/);
    if (endingWithNumbers) {
      if (this.strictMode) {
        return null;
      }
      const startingNumbers = endingWithNumbers[1];
      const endingNumbers = endingWithNumbers[2];
      if (endingNumbers.includes(".") && !endingNumbers.match(/\d(\.\d{2})+$/)) {
        return null;
      }
      const endingNumberVal = parseInt(endingNumbers);
      const startingNumberVal = parseInt(startingNumbers);
      if (endingNumberVal > 24 || startingNumberVal > 24) {
        return null;
      }
    }
    return result;
  }
  getPrimaryTimePatternThroughCache() {
    const primaryPrefix = this.primaryPrefix();
    const primarySuffix = this.primarySuffix();
    if (this.cachedPrimaryPrefix === primaryPrefix && this.cachedPrimarySuffix === primarySuffix) {
      return this.cachedPrimaryTimePattern;
    }
    this.cachedPrimaryTimePattern = primaryTimePattern(this.primaryPatternLeftBoundary(), primaryPrefix, primarySuffix, this.patternFlags());
    this.cachedPrimaryPrefix = primaryPrefix;
    this.cachedPrimarySuffix = primarySuffix;
    return this.cachedPrimaryTimePattern;
  }
  getFollowingTimePatternThroughCache() {
    const followingPhase = this.followingPhase();
    const followingSuffix = this.followingSuffix();
    if (this.cachedFollowingPhase === followingPhase && this.cachedFollowingSuffix === followingSuffix) {
      return this.cachedFollowingTimePatten;
    }
    this.cachedFollowingTimePatten = followingTimePatten(followingPhase, followingSuffix);
    this.cachedFollowingPhase = followingPhase;
    this.cachedFollowingSuffix = followingSuffix;
    return this.cachedFollowingTimePatten;
  }
};

// node_modules/chrono-node/dist/esm/locales/en/parsers/ENTimeExpressionParser.js
var ENTimeExpressionParser = class extends AbstractTimeExpressionParser {
  constructor(strictMode) {
    super(strictMode);
  }
  followingPhase() {
    return "\\s*(?:\\-|\\\u2013|\\~|\\\u301C|to|until|through|till|\\?)\\s*";
  }
  primaryPrefix() {
    return "(?:(?:at|from)\\s*)??";
  }
  primarySuffix() {
    return "(?:\\s*(?:o\\W*clock|at\\s*night|in\\s*the\\s*(?:morning|afternoon)))?(?!/)(?=\\W|$)";
  }
  extractPrimaryTimeComponents(context, match) {
    const components = super.extractPrimaryTimeComponents(context, match);
    if (!components) {
      return components;
    }
    if (match[0].endsWith("night")) {
      const hour = components.get("hour");
      if (hour >= 6 && hour < 12) {
        components.assign("hour", components.get("hour") + 12);
        components.assign("meridiem", Meridiem.PM);
      } else if (hour < 6) {
        components.assign("meridiem", Meridiem.AM);
      }
    }
    if (match[0].endsWith("afternoon")) {
      components.assign("meridiem", Meridiem.PM);
      const hour = components.get("hour");
      if (hour >= 0 && hour <= 6) {
        components.assign("hour", components.get("hour") + 12);
      }
    }
    if (match[0].endsWith("morning")) {
      components.assign("meridiem", Meridiem.AM);
      const hour = components.get("hour");
      if (hour < 12) {
        components.assign("hour", components.get("hour"));
      }
    }
    return components.addTag("parser/ENTimeExpressionParser");
  }
  extractFollowingTimeComponents(context, match, result) {
    const followingComponents = super.extractFollowingTimeComponents(context, match, result);
    if (followingComponents) {
      followingComponents.addTag("parser/ENTimeExpressionParser");
    }
    return followingComponents;
  }
};

// node_modules/chrono-node/dist/esm/utils/timeunits.js
function reverseTimeUnits(timeUnits) {
  const reversed = {};
  for (const key in timeUnits) {
    reversed[key] = -timeUnits[key];
  }
  return reversed;
}
function addImpliedTimeUnits(components, timeUnits) {
  const output = components.clone();
  let date = components.dayjs();
  for (const key in timeUnits) {
    date = date.add(timeUnits[key], key);
  }
  if ("day" in timeUnits || "d" in timeUnits || "week" in timeUnits || "month" in timeUnits || "year" in timeUnits) {
    output.imply("day", date.date());
    output.imply("month", date.month() + 1);
    output.imply("year", date.year());
  }
  if ("second" in timeUnits || "minute" in timeUnits || "hour" in timeUnits) {
    output.imply("second", date.second());
    output.imply("minute", date.minute());
    output.imply("hour", date.hour());
  }
  return output;
}

// node_modules/chrono-node/dist/esm/locales/en/parsers/ENTimeUnitAgoFormatParser.js
var PATTERN6 = new RegExp(`(${TIME_UNITS_PATTERN})\\s{0,5}(?:ago|before|earlier)(?=\\W|$)`, "i");
var STRICT_PATTERN = new RegExp(`(${TIME_UNITS_NO_ABBR_PATTERN})\\s{0,5}(?:ago|before|earlier)(?=\\W|$)`, "i");
var ENTimeUnitAgoFormatParser = class extends AbstractParserWithWordBoundaryChecking {
  constructor(strictMode) {
    super();
    this.strictMode = strictMode;
  }
  innerPattern() {
    return this.strictMode ? STRICT_PATTERN : PATTERN6;
  }
  innerExtract(context, match) {
    const timeUnits = parseTimeUnits(match[1]);
    if (!timeUnits) {
      return null;
    }
    const outputTimeUnits = reverseTimeUnits(timeUnits);
    return ParsingComponents.createRelativeFromReference(context.reference, outputTimeUnits);
  }
};

// node_modules/chrono-node/dist/esm/locales/en/parsers/ENTimeUnitLaterFormatParser.js
var PATTERN7 = new RegExp(`(${TIME_UNITS_PATTERN})\\s{0,5}(?:later|after|from now|henceforth|forward|out)(?=(?:\\W|$))`, "i");
var STRICT_PATTERN2 = new RegExp(`(${TIME_UNITS_NO_ABBR_PATTERN})\\s{0,5}(later|after|from now)(?=\\W|$)`, "i");
var GROUP_NUM_TIMEUNITS = 1;
var ENTimeUnitLaterFormatParser = class extends AbstractParserWithWordBoundaryChecking {
  constructor(strictMode) {
    super();
    this.strictMode = strictMode;
  }
  innerPattern() {
    return this.strictMode ? STRICT_PATTERN2 : PATTERN7;
  }
  innerExtract(context, match) {
    const timeUnits = parseTimeUnits(match[GROUP_NUM_TIMEUNITS]);
    if (!timeUnits) {
      return null;
    }
    return ParsingComponents.createRelativeFromReference(context.reference, timeUnits);
  }
};

// node_modules/chrono-node/dist/esm/common/abstractRefiners.js
var Filter = class {
  refine(context, results) {
    return results.filter((r) => this.isValid(context, r));
  }
};
var MergingRefiner = class {
  refine(context, results) {
    if (results.length < 2) {
      return results;
    }
    const mergedResults = [];
    let curResult = results[0];
    let nextResult = null;
    for (let i = 1; i < results.length; i++) {
      nextResult = results[i];
      const textBetween = context.text.substring(curResult.index + curResult.text.length, nextResult.index);
      if (!this.shouldMergeResults(textBetween, curResult, nextResult, context)) {
        mergedResults.push(curResult);
        curResult = nextResult;
      } else {
        const left = curResult;
        const right = nextResult;
        const mergedResult = this.mergeResults(textBetween, left, right, context);
        context.debug(() => {
          console.log(`${this.constructor.name} merged ${left} and ${right} into ${mergedResult}`);
        });
        curResult = mergedResult;
      }
    }
    if (curResult != null) {
      mergedResults.push(curResult);
    }
    return mergedResults;
  }
};

// node_modules/chrono-node/dist/esm/common/refiners/AbstractMergeDateRangeRefiner.js
var AbstractMergeDateRangeRefiner = class extends MergingRefiner {
  shouldMergeResults(textBetween, currentResult, nextResult) {
    return !currentResult.end && !nextResult.end && textBetween.match(this.patternBetween()) != null;
  }
  mergeResults(textBetween, fromResult, toResult) {
    if (!fromResult.start.isOnlyWeekdayComponent() && !toResult.start.isOnlyWeekdayComponent()) {
      toResult.start.getCertainComponents().forEach((key) => {
        if (!fromResult.start.isCertain(key)) {
          fromResult.start.imply(key, toResult.start.get(key));
        }
      });
      fromResult.start.getCertainComponents().forEach((key) => {
        if (!toResult.start.isCertain(key)) {
          toResult.start.imply(key, fromResult.start.get(key));
        }
      });
    }
    if (fromResult.start.date().getTime() > toResult.start.date().getTime()) {
      let fromMoment = fromResult.start.dayjs();
      let toMoment = toResult.start.dayjs();
      if (toResult.start.isOnlyWeekdayComponent() && toMoment.add(7, "days").isAfter(fromMoment)) {
        toMoment = toMoment.add(7, "days");
        toResult.start.imply("day", toMoment.date());
        toResult.start.imply("month", toMoment.month() + 1);
        toResult.start.imply("year", toMoment.year());
      } else if (fromResult.start.isOnlyWeekdayComponent() && fromMoment.add(-7, "days").isBefore(toMoment)) {
        fromMoment = fromMoment.add(-7, "days");
        fromResult.start.imply("day", fromMoment.date());
        fromResult.start.imply("month", fromMoment.month() + 1);
        fromResult.start.imply("year", fromMoment.year());
      } else if (toResult.start.isDateWithUnknownYear() && toMoment.add(1, "years").isAfter(fromMoment)) {
        toMoment = toMoment.add(1, "years");
        toResult.start.imply("year", toMoment.year());
      } else if (fromResult.start.isDateWithUnknownYear() && fromMoment.add(-1, "years").isBefore(toMoment)) {
        fromMoment = fromMoment.add(-1, "years");
        fromResult.start.imply("year", fromMoment.year());
      } else {
        [toResult, fromResult] = [fromResult, toResult];
      }
    }
    const result = fromResult.clone();
    result.start = fromResult.start;
    result.end = toResult.start;
    result.index = Math.min(fromResult.index, toResult.index);
    if (fromResult.index < toResult.index) {
      result.text = fromResult.text + textBetween + toResult.text;
    } else {
      result.text = toResult.text + textBetween + fromResult.text;
    }
    return result;
  }
};

// node_modules/chrono-node/dist/esm/locales/en/refiners/ENMergeDateRangeRefiner.js
var ENMergeDateRangeRefiner = class extends AbstractMergeDateRangeRefiner {
  patternBetween() {
    return /^\s*(to|-|–|until|through|till)\s*$/i;
  }
};

// node_modules/chrono-node/dist/esm/calculation/mergingCalculation.js
function mergeDateTimeResult(dateResult, timeResult) {
  const result = dateResult.clone();
  const beginDate = dateResult.start;
  const beginTime = timeResult.start;
  result.start = mergeDateTimeComponent(beginDate, beginTime);
  if (dateResult.end != null || timeResult.end != null) {
    const endDate = dateResult.end == null ? dateResult.start : dateResult.end;
    const endTime = timeResult.end == null ? timeResult.start : timeResult.end;
    const endDateTime = mergeDateTimeComponent(endDate, endTime);
    if (dateResult.end == null && endDateTime.date().getTime() < result.start.date().getTime()) {
      const nextDayJs = endDateTime.dayjs().add(1, "day");
      if (endDateTime.isCertain("day")) {
        assignSimilarDate(endDateTime, nextDayJs);
      } else {
        implySimilarDate(endDateTime, nextDayJs);
      }
    }
    result.end = endDateTime;
  }
  return result;
}
function mergeDateTimeComponent(dateComponent, timeComponent) {
  const dateTimeComponent = dateComponent.clone();
  if (timeComponent.isCertain("hour")) {
    dateTimeComponent.assign("hour", timeComponent.get("hour"));
    dateTimeComponent.assign("minute", timeComponent.get("minute"));
    if (timeComponent.isCertain("second")) {
      dateTimeComponent.assign("second", timeComponent.get("second"));
      if (timeComponent.isCertain("millisecond")) {
        dateTimeComponent.assign("millisecond", timeComponent.get("millisecond"));
      } else {
        dateTimeComponent.imply("millisecond", timeComponent.get("millisecond"));
      }
    } else {
      dateTimeComponent.imply("second", timeComponent.get("second"));
      dateTimeComponent.imply("millisecond", timeComponent.get("millisecond"));
    }
  } else {
    dateTimeComponent.imply("hour", timeComponent.get("hour"));
    dateTimeComponent.imply("minute", timeComponent.get("minute"));
    dateTimeComponent.imply("second", timeComponent.get("second"));
    dateTimeComponent.imply("millisecond", timeComponent.get("millisecond"));
  }
  if (timeComponent.isCertain("timezoneOffset")) {
    dateTimeComponent.assign("timezoneOffset", timeComponent.get("timezoneOffset"));
  }
  if (timeComponent.isCertain("meridiem")) {
    dateTimeComponent.assign("meridiem", timeComponent.get("meridiem"));
  } else if (timeComponent.get("meridiem") != null && dateTimeComponent.get("meridiem") == null) {
    dateTimeComponent.imply("meridiem", timeComponent.get("meridiem"));
  }
  if (dateTimeComponent.get("meridiem") == Meridiem.PM && dateTimeComponent.get("hour") < 12) {
    if (timeComponent.isCertain("hour")) {
      dateTimeComponent.assign("hour", dateTimeComponent.get("hour") + 12);
    } else {
      dateTimeComponent.imply("hour", dateTimeComponent.get("hour") + 12);
    }
  }
  dateTimeComponent.addTags(dateComponent.tags());
  dateTimeComponent.addTags(timeComponent.tags());
  return dateTimeComponent;
}

// node_modules/chrono-node/dist/esm/common/refiners/AbstractMergeDateTimeRefiner.js
var AbstractMergeDateTimeRefiner = class extends MergingRefiner {
  shouldMergeResults(textBetween, currentResult, nextResult) {
    return (currentResult.start.isOnlyDate() && nextResult.start.isOnlyTime() || nextResult.start.isOnlyDate() && currentResult.start.isOnlyTime()) && textBetween.match(this.patternBetween()) != null;
  }
  mergeResults(textBetween, currentResult, nextResult) {
    const result = currentResult.start.isOnlyDate() ? mergeDateTimeResult(currentResult, nextResult) : mergeDateTimeResult(nextResult, currentResult);
    result.index = currentResult.index;
    result.text = currentResult.text + textBetween + nextResult.text;
    return result;
  }
};

// node_modules/chrono-node/dist/esm/locales/en/refiners/ENMergeDateTimeRefiner.js
var ENMergeDateTimeRefiner = class extends AbstractMergeDateTimeRefiner {
  patternBetween() {
    return new RegExp("^\\s*(T|at|after|before|on|of|,|-|\\.|\u2219|:)?\\s*$");
  }
};

// node_modules/chrono-node/dist/esm/common/refiners/ExtractTimezoneAbbrRefiner.js
var TIMEZONE_NAME_PATTERN = new RegExp("^\\s*,?\\s*\\(?([A-Z]{2,4})\\)?(?=\\W|$)", "i");
var ExtractTimezoneAbbrRefiner = class {
  constructor(timezoneOverrides) {
    this.timezoneOverrides = timezoneOverrides;
  }
  refine(context, results) {
    const timezoneOverrides = context.option.timezones ?? {};
    results.forEach((result) => {
      const suffix = context.text.substring(result.index + result.text.length);
      const match = TIMEZONE_NAME_PATTERN.exec(suffix);
      if (!match) {
        return;
      }
      const timezoneAbbr = match[1].toUpperCase();
      const refDate = result.start.date() ?? result.refDate ?? /* @__PURE__ */ new Date();
      const tzOverrides = { ...this.timezoneOverrides, ...timezoneOverrides };
      const extractedTimezoneOffset = toTimezoneOffset(timezoneAbbr, refDate, tzOverrides);
      if (extractedTimezoneOffset == null) {
        return;
      }
      context.debug(() => {
        console.log(`Extracting timezone: '${timezoneAbbr}' into: ${extractedTimezoneOffset} for: ${result.start}`);
      });
      const currentTimezoneOffset = result.start.get("timezoneOffset");
      if (currentTimezoneOffset !== null && extractedTimezoneOffset != currentTimezoneOffset) {
        if (result.start.isCertain("timezoneOffset")) {
          return;
        }
        if (timezoneAbbr != match[1]) {
          return;
        }
      }
      if (result.start.isOnlyDate()) {
        if (timezoneAbbr != match[1]) {
          return;
        }
      }
      result.text += match[0];
      if (!result.start.isCertain("timezoneOffset")) {
        result.start.assign("timezoneOffset", extractedTimezoneOffset);
      }
      if (result.end != null && !result.end.isCertain("timezoneOffset")) {
        result.end.assign("timezoneOffset", extractedTimezoneOffset);
      }
    });
    return results;
  }
};

// node_modules/chrono-node/dist/esm/common/refiners/ExtractTimezoneOffsetRefiner.js
var TIMEZONE_OFFSET_PATTERN = new RegExp("^\\s*(?:\\(?(?:GMT|UTC)\\s?)?([+-])(\\d{1,2})(?::?(\\d{2}))?\\)?", "i");
var TIMEZONE_OFFSET_SIGN_GROUP = 1;
var TIMEZONE_OFFSET_HOUR_OFFSET_GROUP = 2;
var TIMEZONE_OFFSET_MINUTE_OFFSET_GROUP = 3;
var ExtractTimezoneOffsetRefiner = class {
  refine(context, results) {
    results.forEach(function(result) {
      if (result.start.isCertain("timezoneOffset")) {
        return;
      }
      const suffix = context.text.substring(result.index + result.text.length);
      const match = TIMEZONE_OFFSET_PATTERN.exec(suffix);
      if (!match) {
        return;
      }
      context.debug(() => {
        console.log(`Extracting timezone: '${match[0]}' into : ${result}`);
      });
      const hourOffset = parseInt(match[TIMEZONE_OFFSET_HOUR_OFFSET_GROUP]);
      const minuteOffset = parseInt(match[TIMEZONE_OFFSET_MINUTE_OFFSET_GROUP] || "0");
      let timezoneOffset = hourOffset * 60 + minuteOffset;
      if (timezoneOffset > 14 * 60) {
        return;
      }
      if (match[TIMEZONE_OFFSET_SIGN_GROUP] === "-") {
        timezoneOffset = -timezoneOffset;
      }
      if (result.end != null) {
        result.end.assign("timezoneOffset", timezoneOffset);
      }
      result.start.assign("timezoneOffset", timezoneOffset);
      result.text += match[0];
    });
    return results;
  }
};

// node_modules/chrono-node/dist/esm/common/refiners/OverlapRemovalRefiner.js
var OverlapRemovalRefiner = class {
  refine(context, results) {
    if (results.length < 2) {
      return results;
    }
    const filteredResults = [];
    let prevResult = results[0];
    for (let i = 1; i < results.length; i++) {
      const result = results[i];
      if (result.index >= prevResult.index + prevResult.text.length) {
        filteredResults.push(prevResult);
        prevResult = result;
        continue;
      }
      let kept = null;
      let removed = null;
      if (result.text.length > prevResult.text.length) {
        kept = result;
        removed = prevResult;
      } else {
        kept = prevResult;
        removed = result;
      }
      context.debug(() => {
        console.log(`${this.constructor.name} remove ${removed} by ${kept}`);
      });
      prevResult = kept;
    }
    if (prevResult != null) {
      filteredResults.push(prevResult);
    }
    return filteredResults;
  }
};

// node_modules/chrono-node/dist/esm/common/refiners/ForwardDateRefiner.js
var import_dayjs6 = __toESM(require_dayjs_min(), 1);
var ForwardDateRefiner = class {
  refine(context, results) {
    if (!context.option.forwardDate) {
      return results;
    }
    results.forEach((result) => {
      let refMoment = (0, import_dayjs6.default)(context.refDate);
      if (result.start.isOnlyTime() && refMoment.isAfter(result.start.dayjs())) {
        refMoment = refMoment.add(1, "day");
        implySimilarDate(result.start, refMoment);
        if (result.end && result.end.isOnlyTime()) {
          implySimilarDate(result.end, refMoment);
          if (result.start.dayjs().isAfter(result.end.dayjs())) {
            refMoment = refMoment.add(1, "day");
            implySimilarDate(result.end, refMoment);
          }
        }
        context.debug(() => {
          console.log(`${this.constructor.name} adjusted ${result} time result (${result.start})`);
        });
      }
      if (result.start.isOnlyWeekdayComponent() && refMoment.isAfter(result.start.dayjs())) {
        if (refMoment.day() >= result.start.get("weekday")) {
          refMoment = refMoment.day(result.start.get("weekday") + 7);
        } else {
          refMoment = refMoment.day(result.start.get("weekday"));
        }
        result.start.imply("day", refMoment.date());
        result.start.imply("month", refMoment.month() + 1);
        result.start.imply("year", refMoment.year());
        context.debug(() => {
          console.log(`${this.constructor.name} adjusted ${result} weekday (${result.start})`);
        });
        if (result.end && result.end.isOnlyWeekdayComponent()) {
          if (refMoment.day() > result.end.get("weekday")) {
            refMoment = refMoment.day(result.end.get("weekday") + 7);
          } else {
            refMoment = refMoment.day(result.end.get("weekday"));
          }
          result.end.imply("day", refMoment.date());
          result.end.imply("month", refMoment.month() + 1);
          result.end.imply("year", refMoment.year());
          context.debug(() => {
            console.log(`${this.constructor.name} adjusted ${result} weekday (${result.end})`);
          });
        }
      }
      if (result.start.isDateWithUnknownYear() && refMoment.isAfter(result.start.dayjs())) {
        for (let i = 0; i < 3 && refMoment.isAfter(result.start.dayjs()); i++) {
          result.start.imply("year", result.start.get("year") + 1);
          context.debug(() => {
            console.log(`${this.constructor.name} adjusted ${result} year (${result.start})`);
          });
          if (result.end && !result.end.isCertain("year")) {
            result.end.imply("year", result.end.get("year") + 1);
            context.debug(() => {
              console.log(`${this.constructor.name} adjusted ${result} month (${result.start})`);
            });
          }
        }
      }
    });
    return results;
  }
};

// node_modules/chrono-node/dist/esm/common/refiners/UnlikelyFormatFilter.js
var UnlikelyFormatFilter = class extends Filter {
  constructor(strictMode) {
    super();
    this.strictMode = strictMode;
  }
  isValid(context, result) {
    if (result.text.replace(" ", "").match(/^\d*(\.\d*)?$/)) {
      context.debug(() => {
        console.log(`Removing unlikely result '${result.text}'`);
      });
      return false;
    }
    if (!result.start.isValidDate()) {
      context.debug(() => {
        console.log(`Removing invalid result: ${result} (${result.start})`);
      });
      return false;
    }
    if (result.end && !result.end.isValidDate()) {
      context.debug(() => {
        console.log(`Removing invalid result: ${result} (${result.end})`);
      });
      return false;
    }
    if (this.strictMode) {
      return this.isStrictModeValid(context, result);
    }
    return true;
  }
  isStrictModeValid(context, result) {
    if (result.start.isOnlyWeekdayComponent()) {
      context.debug(() => {
        console.log(`(Strict) Removing weekday only component: ${result} (${result.end})`);
      });
      return false;
    }
    if (result.start.isOnlyTime() && (!result.start.isCertain("hour") || !result.start.isCertain("minute"))) {
      context.debug(() => {
        console.log(`(Strict) Removing uncertain time component: ${result} (${result.end})`);
      });
      return false;
    }
    return true;
  }
};

// node_modules/chrono-node/dist/esm/common/parsers/ISOFormatParser.js
var PATTERN8 = new RegExp("([0-9]{4})\\-([0-9]{1,2})\\-([0-9]{1,2})(?:T([0-9]{1,2}):([0-9]{1,2})(?::([0-9]{1,2})(?:\\.(\\d{1,4}))?)?(Z|([+-]\\d{2}):?(\\d{2})?)?)?(?=\\W|$)", "i");
var YEAR_NUMBER_GROUP2 = 1;
var MONTH_NUMBER_GROUP2 = 2;
var DATE_NUMBER_GROUP2 = 3;
var HOUR_NUMBER_GROUP = 4;
var MINUTE_NUMBER_GROUP = 5;
var SECOND_NUMBER_GROUP = 6;
var MILLISECOND_NUMBER_GROUP = 7;
var TZD_GROUP = 8;
var TZD_HOUR_OFFSET_GROUP = 9;
var TZD_MINUTE_OFFSET_GROUP = 10;
var ISOFormatParser = class extends AbstractParserWithWordBoundaryChecking {
  innerPattern() {
    return PATTERN8;
  }
  innerExtract(context, match) {
    const components = context.createParsingComponents({
      "year": parseInt(match[YEAR_NUMBER_GROUP2]),
      "month": parseInt(match[MONTH_NUMBER_GROUP2]),
      "day": parseInt(match[DATE_NUMBER_GROUP2])
    });
    if (match[HOUR_NUMBER_GROUP] != null) {
      components.assign("hour", parseInt(match[HOUR_NUMBER_GROUP]));
      components.assign("minute", parseInt(match[MINUTE_NUMBER_GROUP]));
      if (match[SECOND_NUMBER_GROUP] != null) {
        components.assign("second", parseInt(match[SECOND_NUMBER_GROUP]));
      }
      if (match[MILLISECOND_NUMBER_GROUP] != null) {
        components.assign("millisecond", parseInt(match[MILLISECOND_NUMBER_GROUP]));
      }
      if (match[TZD_GROUP] != null) {
        let offset = 0;
        if (match[TZD_HOUR_OFFSET_GROUP]) {
          const hourOffset = parseInt(match[TZD_HOUR_OFFSET_GROUP]);
          let minuteOffset = 0;
          if (match[TZD_MINUTE_OFFSET_GROUP] != null) {
            minuteOffset = parseInt(match[TZD_MINUTE_OFFSET_GROUP]);
          }
          offset = hourOffset * 60;
          if (offset < 0) {
            offset -= minuteOffset;
          } else {
            offset += minuteOffset;
          }
        }
        components.assign("timezoneOffset", offset);
      }
    }
    return components.addTag("parser/ISOFormatParser");
  }
};

// node_modules/chrono-node/dist/esm/common/refiners/MergeWeekdayComponentRefiner.js
var MergeWeekdayComponentRefiner = class extends MergingRefiner {
  mergeResults(textBetween, currentResult, nextResult) {
    const newResult = nextResult.clone();
    newResult.index = currentResult.index;
    newResult.text = currentResult.text + textBetween + newResult.text;
    newResult.start.assign("weekday", currentResult.start.get("weekday"));
    if (newResult.end) {
      newResult.end.assign("weekday", currentResult.start.get("weekday"));
    }
    return newResult;
  }
  shouldMergeResults(textBetween, currentResult, nextResult) {
    const weekdayThenNormalDate = currentResult.start.isOnlyWeekdayComponent() && !currentResult.start.isCertain("hour") && nextResult.start.isCertain("day");
    return weekdayThenNormalDate && textBetween.match(/^,?\s*$/) != null;
  }
};

// node_modules/chrono-node/dist/esm/configurations.js
function includeCommonConfiguration(configuration2, strictMode = false) {
  configuration2.parsers.unshift(new ISOFormatParser());
  configuration2.refiners.unshift(new MergeWeekdayComponentRefiner());
  configuration2.refiners.unshift(new ExtractTimezoneOffsetRefiner());
  configuration2.refiners.unshift(new OverlapRemovalRefiner());
  configuration2.refiners.push(new ExtractTimezoneAbbrRefiner());
  configuration2.refiners.push(new OverlapRemovalRefiner());
  configuration2.refiners.push(new ForwardDateRefiner());
  configuration2.refiners.push(new UnlikelyFormatFilter(strictMode));
  return configuration2;
}

// node_modules/chrono-node/dist/esm/locales/en/parsers/ENCasualDateParser.js
var import_dayjs10 = __toESM(require_dayjs_min(), 1);

// node_modules/chrono-node/dist/esm/common/casualReferences.js
var import_dayjs8 = __toESM(require_dayjs_min(), 1);
function now(reference) {
  const targetDate = (0, import_dayjs8.default)(reference.instant);
  const component = new ParsingComponents(reference, {});
  assignSimilarDate(component, targetDate);
  assignSimilarTime(component, targetDate);
  if (reference.timezoneOffset !== null) {
    component.assign("timezoneOffset", targetDate.utcOffset());
  }
  component.addTag("casualReference/now");
  return component;
}
function today(reference) {
  const targetDate = (0, import_dayjs8.default)(reference.instant);
  const component = new ParsingComponents(reference, {});
  assignSimilarDate(component, targetDate);
  implySimilarTime(component, targetDate);
  component.addTag("casualReference/today");
  return component;
}
function yesterday(reference) {
  return theDayBefore(reference, 1).addTag("casualReference/yesterday");
}
function theDayBefore(reference, numDay) {
  return theDayAfter(reference, -numDay);
}
function tomorrow(reference) {
  return theDayAfter(reference, 1).addTag("casualReference/tomorrow");
}
function theDayAfter(reference, nDays) {
  let targetDate = (0, import_dayjs8.default)(reference.instant);
  const component = new ParsingComponents(reference, {});
  targetDate = targetDate.add(nDays, "day");
  assignSimilarDate(component, targetDate);
  implySimilarTime(component, targetDate);
  return component;
}
function tonight(reference, implyHour = 22) {
  const targetDate = (0, import_dayjs8.default)(reference.instant);
  const component = new ParsingComponents(reference, {});
  assignSimilarDate(component, targetDate);
  component.imply("hour", implyHour);
  component.imply("meridiem", Meridiem.PM);
  component.addTag("casualReference/tonight");
  return component;
}
function evening(reference, implyHour = 20) {
  const component = new ParsingComponents(reference, {});
  component.imply("meridiem", Meridiem.PM);
  component.imply("hour", implyHour);
  component.addTag("casualReference/evening");
  return component;
}
function midnight(reference) {
  const component = new ParsingComponents(reference, {});
  const targetDate = (0, import_dayjs8.default)(reference.instant);
  if (targetDate.hour() > 2) {
    implyTheNextDay(component, targetDate);
  }
  component.assign("hour", 0);
  component.imply("minute", 0);
  component.imply("second", 0);
  component.imply("millisecond", 0);
  component.addTag("casualReference/midnight");
  return component;
}
function morning(reference, implyHour = 6) {
  const component = new ParsingComponents(reference, {});
  component.imply("meridiem", Meridiem.AM);
  component.imply("hour", implyHour);
  component.imply("minute", 0);
  component.imply("second", 0);
  component.imply("millisecond", 0);
  component.addTag("casualReference/morning");
  return component;
}
function afternoon(reference, implyHour = 15) {
  const component = new ParsingComponents(reference, {});
  component.imply("meridiem", Meridiem.PM);
  component.imply("hour", implyHour);
  component.imply("minute", 0);
  component.imply("second", 0);
  component.imply("millisecond", 0);
  component.addTag("casualReference/afternoon");
  return component;
}
function noon(reference) {
  const component = new ParsingComponents(reference, {});
  component.imply("meridiem", Meridiem.AM);
  component.imply("hour", 12);
  component.imply("minute", 0);
  component.imply("second", 0);
  component.imply("millisecond", 0);
  component.addTag("casualReference/noon");
  return component;
}

// node_modules/chrono-node/dist/esm/locales/en/parsers/ENCasualDateParser.js
var PATTERN9 = /(now|today|tonight|tomorrow|tmr|tmrw|yesterday|last\s*night)(?=\W|$)/i;
var ENCasualDateParser = class extends AbstractParserWithWordBoundaryChecking {
  innerPattern(context) {
    return PATTERN9;
  }
  innerExtract(context, match) {
    let targetDate = (0, import_dayjs10.default)(context.refDate);
    const lowerText = match[0].toLowerCase();
    let component = context.createParsingComponents();
    switch (lowerText) {
      case "now":
        component = now(context.reference);
        break;
      case "today":
        component = today(context.reference);
        break;
      case "yesterday":
        component = yesterday(context.reference);
        break;
      case "tomorrow":
      case "tmr":
      case "tmrw":
        component = tomorrow(context.reference);
        break;
      case "tonight":
        component = tonight(context.reference);
        break;
      default:
        if (lowerText.match(/last\s*night/)) {
          if (targetDate.hour() > 6) {
            targetDate = targetDate.add(-1, "day");
          }
          assignSimilarDate(component, targetDate);
          component.imply("hour", 0);
        }
        break;
    }
    component.addTag("parser/ENCasualDateParser");
    return component;
  }
};

// node_modules/chrono-node/dist/esm/locales/en/parsers/ENCasualTimeParser.js
var PATTERN10 = /(?:this)?\s{0,3}(morning|afternoon|evening|night|midnight|midday|noon)(?=\W|$)/i;
var ENCasualTimeParser = class extends AbstractParserWithWordBoundaryChecking {
  innerPattern() {
    return PATTERN10;
  }
  innerExtract(context, match) {
    let component = null;
    switch (match[1].toLowerCase()) {
      case "afternoon":
        component = afternoon(context.reference);
        break;
      case "evening":
      case "night":
        component = evening(context.reference);
        break;
      case "midnight":
        component = midnight(context.reference);
        break;
      case "morning":
        component = morning(context.reference);
        break;
      case "noon":
      case "midday":
        component = noon(context.reference);
        break;
    }
    if (component) {
      component.addTag("parser/ENCasualTimeParser");
    }
    return component;
  }
};

// node_modules/chrono-node/dist/esm/common/calculation/weekdays.js
function createParsingComponentsAtWeekday(reference, weekday, modifier) {
  const refDate = reference.getDateWithAdjustedTimezone();
  const daysToWeekday = getDaysToWeekday(refDate, weekday, modifier);
  let components = new ParsingComponents(reference);
  components = addImpliedTimeUnits(components, { "day": daysToWeekday });
  components.assign("weekday", weekday);
  return components;
}
function getDaysToWeekday(refDate, weekday, modifier) {
  const refWeekday = refDate.getDay();
  switch (modifier) {
    case "this":
      return getDaysForwardToWeekday(refDate, weekday);
    case "last":
      return getBackwardDaysToWeekday(refDate, weekday);
    case "next":
      if (refWeekday == Weekday.SUNDAY) {
        return weekday == Weekday.SUNDAY ? 7 : weekday;
      }
      if (refWeekday == Weekday.SATURDAY) {
        if (weekday == Weekday.SATURDAY)
          return 7;
        if (weekday == Weekday.SUNDAY)
          return 8;
        return 1 + weekday;
      }
      if (weekday < refWeekday && weekday != Weekday.SUNDAY) {
        return getDaysForwardToWeekday(refDate, weekday);
      } else {
        return getDaysForwardToWeekday(refDate, weekday) + 7;
      }
  }
  return getDaysToWeekdayClosest(refDate, weekday);
}
function getDaysToWeekdayClosest(refDate, weekday) {
  const backward = getBackwardDaysToWeekday(refDate, weekday);
  const forward = getDaysForwardToWeekday(refDate, weekday);
  return forward < -backward ? forward : backward;
}
function getDaysForwardToWeekday(refDate, weekday) {
  const refWeekday = refDate.getDay();
  let forwardCount = weekday - refWeekday;
  if (forwardCount < 0) {
    forwardCount += 7;
  }
  return forwardCount;
}
function getBackwardDaysToWeekday(refDate, weekday) {
  const refWeekday = refDate.getDay();
  let backwardCount = weekday - refWeekday;
  if (backwardCount >= 0) {
    backwardCount -= 7;
  }
  return backwardCount;
}

// node_modules/chrono-node/dist/esm/locales/en/parsers/ENWeekdayParser.js
var PATTERN11 = new RegExp(`(?:(?:\\,|\\(|\\\uFF08)\\s*)?(?:on\\s*?)?(?:(this|last|past|next)\\s*)?(${matchAnyPattern(WEEKDAY_DICTIONARY)}|weekend|weekday)(?:\\s*(?:\\,|\\)|\\\uFF09))?(?:\\s*(this|last|past|next)\\s*week)?(?=\\W|$)`, "i");
var PREFIX_GROUP2 = 1;
var WEEKDAY_GROUP = 2;
var POSTFIX_GROUP = 3;
var ENWeekdayParser = class extends AbstractParserWithWordBoundaryChecking {
  innerPattern() {
    return PATTERN11;
  }
  innerExtract(context, match) {
    const prefix = match[PREFIX_GROUP2];
    const postfix = match[POSTFIX_GROUP];
    let modifierWord = prefix || postfix;
    modifierWord = modifierWord || "";
    modifierWord = modifierWord.toLowerCase();
    let modifier = null;
    if (modifierWord == "last" || modifierWord == "past") {
      modifier = "last";
    } else if (modifierWord == "next") {
      modifier = "next";
    } else if (modifierWord == "this") {
      modifier = "this";
    }
    const weekday_word = match[WEEKDAY_GROUP].toLowerCase();
    let weekday;
    if (WEEKDAY_DICTIONARY[weekday_word] !== void 0) {
      weekday = WEEKDAY_DICTIONARY[weekday_word];
    } else if (weekday_word == "weekend") {
      weekday = modifier == "last" ? Weekday.SUNDAY : Weekday.SATURDAY;
    } else if (weekday_word == "weekday") {
      const refWeekday = context.reference.getDateWithAdjustedTimezone().getDay();
      if (refWeekday == Weekday.SUNDAY || refWeekday == Weekday.SATURDAY) {
        weekday = modifier == "last" ? Weekday.FRIDAY : Weekday.MONDAY;
      } else {
        weekday = refWeekday - 1;
        weekday = modifier == "last" ? weekday - 1 : weekday + 1;
        weekday = weekday % 5 + 1;
      }
    } else {
      return null;
    }
    return createParsingComponentsAtWeekday(context.reference, weekday, modifier);
  }
};

// node_modules/chrono-node/dist/esm/locales/en/parsers/ENRelativeDateFormatParser.js
var import_dayjs12 = __toESM(require_dayjs_min(), 1);
var PATTERN12 = new RegExp(`(this|last|past|next|after\\s*this)\\s*(${matchAnyPattern(TIME_UNIT_DICTIONARY)})(?=\\s*)(?=\\W|$)`, "i");
var MODIFIER_WORD_GROUP = 1;
var RELATIVE_WORD_GROUP = 2;
var ENRelativeDateFormatParser = class extends AbstractParserWithWordBoundaryChecking {
  innerPattern() {
    return PATTERN12;
  }
  innerExtract(context, match) {
    const modifier = match[MODIFIER_WORD_GROUP].toLowerCase();
    const unitWord = match[RELATIVE_WORD_GROUP].toLowerCase();
    const timeunit = TIME_UNIT_DICTIONARY[unitWord];
    if (modifier == "next" || modifier.startsWith("after")) {
      const timeUnits = {};
      timeUnits[timeunit] = 1;
      return ParsingComponents.createRelativeFromReference(context.reference, timeUnits);
    }
    if (modifier == "last" || modifier == "past") {
      const timeUnits = {};
      timeUnits[timeunit] = -1;
      return ParsingComponents.createRelativeFromReference(context.reference, timeUnits);
    }
    const components = context.createParsingComponents();
    let date = (0, import_dayjs12.default)(context.reference.instant);
    if (unitWord.match(/week/i)) {
      date = date.add(-date.get("d"), "d");
      components.imply("day", date.date());
      components.imply("month", date.month() + 1);
      components.imply("year", date.year());
    } else if (unitWord.match(/month/i)) {
      date = date.add(-date.date() + 1, "d");
      components.imply("day", date.date());
      components.assign("year", date.year());
      components.assign("month", date.month() + 1);
    } else if (unitWord.match(/year/i)) {
      date = date.add(-date.date() + 1, "d");
      date = date.add(-date.month(), "month");
      components.imply("day", date.date());
      components.imply("month", date.month() + 1);
      components.assign("year", date.year());
    }
    return components;
  }
};

// node_modules/chrono-node/dist/esm/common/parsers/SlashDateFormatParser.js
var PATTERN13 = new RegExp("([^\\d]|^)([0-3]{0,1}[0-9]{1})[\\/\\.\\-]([0-3]{0,1}[0-9]{1})(?:[\\/\\.\\-]([0-9]{4}|[0-9]{2}))?(\\W|$)", "i");
var OPENING_GROUP = 1;
var ENDING_GROUP = 5;
var FIRST_NUMBERS_GROUP = 2;
var SECOND_NUMBERS_GROUP = 3;
var YEAR_GROUP5 = 4;
var SlashDateFormatParser = class {
  constructor(littleEndian) {
    this.groupNumberMonth = littleEndian ? SECOND_NUMBERS_GROUP : FIRST_NUMBERS_GROUP;
    this.groupNumberDay = littleEndian ? FIRST_NUMBERS_GROUP : SECOND_NUMBERS_GROUP;
  }
  pattern() {
    return PATTERN13;
  }
  extract(context, match) {
    const index = match.index + match[OPENING_GROUP].length;
    const indexEnd = match.index + match[0].length - match[ENDING_GROUP].length;
    if (index > 0) {
      const textBefore = context.text.substring(0, index);
      if (textBefore.match("\\d/?$")) {
        return;
      }
    }
    if (indexEnd < context.text.length) {
      const textAfter = context.text.substring(indexEnd);
      if (textAfter.match("^/?\\d")) {
        return;
      }
    }
    const text = context.text.substring(index, indexEnd);
    if (text.match(/^\d\.\d$/) || text.match(/^\d\.\d{1,2}\.\d{1,2}\s*$/)) {
      return;
    }
    if (!match[YEAR_GROUP5] && text.indexOf("/") < 0) {
      return;
    }
    const result = context.createParsingResult(index, text);
    let month = parseInt(match[this.groupNumberMonth]);
    let day = parseInt(match[this.groupNumberDay]);
    if (month < 1 || month > 12) {
      if (month > 12) {
        if (day >= 1 && day <= 12 && month <= 31) {
          [day, month] = [month, day];
        } else {
          return null;
        }
      }
    }
    if (day < 1 || day > 31) {
      return null;
    }
    result.start.assign("day", day);
    result.start.assign("month", month);
    if (match[YEAR_GROUP5]) {
      const rawYearNumber = parseInt(match[YEAR_GROUP5]);
      const year = findMostLikelyADYear(rawYearNumber);
      result.start.assign("year", year);
    } else {
      const year = findYearClosestToRef(context.refDate, day, month);
      result.start.imply("year", year);
    }
    return result.addTag("parser/SlashDateFormatParser");
  }
};

// node_modules/chrono-node/dist/esm/locales/en/parsers/ENTimeUnitCasualRelativeFormatParser.js
var PATTERN14 = new RegExp(`(this|last|past|next|after|\\+|-)\\s*(${TIME_UNITS_PATTERN})(?=\\W|$)`, "i");
var PATTERN_NO_ABBR = new RegExp(`(this|last|past|next|after|\\+|-)\\s*(${TIME_UNITS_NO_ABBR_PATTERN})(?=\\W|$)`, "i");
var ENTimeUnitCasualRelativeFormatParser = class extends AbstractParserWithWordBoundaryChecking {
  constructor(allowAbbreviations = true) {
    super();
    this.allowAbbreviations = allowAbbreviations;
  }
  innerPattern() {
    return this.allowAbbreviations ? PATTERN14 : PATTERN_NO_ABBR;
  }
  innerExtract(context, match) {
    const prefix = match[1].toLowerCase();
    let timeUnits = parseTimeUnits(match[2]);
    if (!timeUnits) {
      return null;
    }
    switch (prefix) {
      case "last":
      case "past":
      case "-":
        timeUnits = reverseTimeUnits(timeUnits);
        break;
    }
    return ParsingComponents.createRelativeFromReference(context.reference, timeUnits);
  }
};

// node_modules/chrono-node/dist/esm/locales/en/refiners/ENMergeRelativeAfterDateRefiner.js
function IsPositiveFollowingReference(result) {
  return result.text.match(/^[+-]/i) != null;
}
function IsNegativeFollowingReference(result) {
  return result.text.match(/^-/i) != null;
}
var ENMergeRelativeAfterDateRefiner = class extends MergingRefiner {
  shouldMergeResults(textBetween, currentResult, nextResult) {
    if (!textBetween.match(/^\s*$/i)) {
      return false;
    }
    return IsPositiveFollowingReference(nextResult) || IsNegativeFollowingReference(nextResult);
  }
  mergeResults(textBetween, currentResult, nextResult, context) {
    let timeUnits = parseTimeUnits(nextResult.text);
    if (IsNegativeFollowingReference(nextResult)) {
      timeUnits = reverseTimeUnits(timeUnits);
    }
    const components = ParsingComponents.createRelativeFromReference(new ReferenceWithTimezone(currentResult.start.date()), timeUnits);
    return new ParsingResult(currentResult.reference, currentResult.index, `${currentResult.text}${textBetween}${nextResult.text}`, components);
  }
};

// node_modules/chrono-node/dist/esm/locales/en/refiners/ENMergeRelativeFollowByDateRefiner.js
function hasImpliedEarlierReferenceDate(result) {
  return result.text.match(/\s+(before|from)$/i) != null;
}
function hasImpliedLaterReferenceDate(result) {
  return result.text.match(/\s+(after|since)$/i) != null;
}
var ENMergeRelativeFollowByDateRefiner = class extends MergingRefiner {
  patternBetween() {
    return /^\s*$/i;
  }
  shouldMergeResults(textBetween, currentResult, nextResult) {
    if (!textBetween.match(this.patternBetween())) {
      return false;
    }
    if (!hasImpliedEarlierReferenceDate(currentResult) && !hasImpliedLaterReferenceDate(currentResult)) {
      return false;
    }
    return !!nextResult.start.get("day") && !!nextResult.start.get("month") && !!nextResult.start.get("year");
  }
  mergeResults(textBetween, currentResult, nextResult) {
    let timeUnits = parseTimeUnits(currentResult.text);
    if (hasImpliedEarlierReferenceDate(currentResult)) {
      timeUnits = reverseTimeUnits(timeUnits);
    }
    const components = ParsingComponents.createRelativeFromReference(new ReferenceWithTimezone(nextResult.start.date()), timeUnits);
    return new ParsingResult(nextResult.reference, currentResult.index, `${currentResult.text}${textBetween}${nextResult.text}`, components);
  }
};

// node_modules/chrono-node/dist/esm/locales/en/refiners/ENExtractYearSuffixRefiner.js
var YEAR_SUFFIX_PATTERN = new RegExp(`^\\s*(${YEAR_PATTERN})`, "i");
var YEAR_GROUP6 = 1;
var ENExtractYearSuffixRefiner = class {
  refine(context, results) {
    results.forEach(function(result) {
      if (!result.start.isDateWithUnknownYear()) {
        return;
      }
      const suffix = context.text.substring(result.index + result.text.length);
      const match = YEAR_SUFFIX_PATTERN.exec(suffix);
      if (!match) {
        return;
      }
      context.debug(() => {
        console.log(`Extracting year: '${match[0]}' into : ${result}`);
      });
      const year = parseYear(match[YEAR_GROUP6]);
      if (result.end != null) {
        result.end.assign("year", year);
      }
      result.start.assign("year", year);
      result.text += match[0];
    });
    return results;
  }
};

// node_modules/chrono-node/dist/esm/locales/en/refiners/ENUnlikelyFormatFilter.js
var ENUnlikelyFormatFilter = class extends Filter {
  constructor() {
    super();
  }
  isValid(context, result) {
    const text = result.text.trim();
    if (text === context.text.trim()) {
      return true;
    }
    if (text.toLowerCase() === "may") {
      const textBefore = context.text.substring(0, result.index).trim();
      if (!textBefore.match(/\b(in)$/i)) {
        context.debug(() => {
          console.log(`Removing unlikely result: ${result}`);
        });
        return false;
      }
    }
    if (text.toLowerCase().endsWith("the second")) {
      const textAfter = context.text.substring(result.index + result.text.length).trim();
      if (textAfter.length > 0) {
        context.debug(() => {
          console.log(`Removing unlikely result: ${result}`);
        });
      }
      return false;
    }
    return true;
  }
};

// node_modules/chrono-node/dist/esm/locales/en/configuration.js
var ENDefaultConfiguration = class {
  createCasualConfiguration(littleEndian = false) {
    const option = this.createConfiguration(false, littleEndian);
    option.parsers.push(new ENCasualDateParser());
    option.parsers.push(new ENCasualTimeParser());
    option.parsers.push(new ENMonthNameParser());
    option.parsers.push(new ENRelativeDateFormatParser());
    option.parsers.push(new ENTimeUnitCasualRelativeFormatParser());
    option.refiners.push(new ENUnlikelyFormatFilter());
    return option;
  }
  createConfiguration(strictMode = true, littleEndian = false) {
    const options = includeCommonConfiguration({
      parsers: [
        new SlashDateFormatParser(littleEndian),
        new ENTimeUnitWithinFormatParser(strictMode),
        new ENMonthNameLittleEndianParser(),
        new ENMonthNameMiddleEndianParser(littleEndian),
        new ENWeekdayParser(),
        new ENSlashMonthFormatParser(),
        new ENTimeExpressionParser(strictMode),
        new ENTimeUnitAgoFormatParser(strictMode),
        new ENTimeUnitLaterFormatParser(strictMode)
      ],
      refiners: [new ENMergeDateTimeRefiner()]
    }, strictMode);
    options.parsers.unshift(new ENYearMonthDayParser(strictMode));
    options.refiners.unshift(new ENMergeRelativeFollowByDateRefiner());
    options.refiners.unshift(new ENMergeRelativeAfterDateRefiner());
    options.refiners.unshift(new OverlapRemovalRefiner());
    options.refiners.push(new ENMergeDateTimeRefiner());
    options.refiners.push(new ENExtractYearSuffixRefiner());
    options.refiners.push(new ENMergeDateRangeRefiner());
    return options;
  }
};

// node_modules/chrono-node/dist/esm/chrono.js
var Chrono = class _Chrono {
  constructor(configuration2) {
    this.defaultConfig = new ENDefaultConfiguration();
    configuration2 = configuration2 || this.defaultConfig.createCasualConfiguration();
    this.parsers = [...configuration2.parsers];
    this.refiners = [...configuration2.refiners];
  }
  clone() {
    return new _Chrono({
      parsers: [...this.parsers],
      refiners: [...this.refiners]
    });
  }
  parseDate(text, referenceDate, option) {
    const results = this.parse(text, referenceDate, option);
    return results.length > 0 ? results[0].start.date() : null;
  }
  parse(text, referenceDate, option) {
    const context = new ParsingContext(text, referenceDate, option);
    let results = [];
    this.parsers.forEach((parser) => {
      const parsedResults = _Chrono.executeParser(context, parser);
      results = results.concat(parsedResults);
    });
    results.sort((a, b) => {
      return a.index - b.index;
    });
    this.refiners.forEach(function(refiner) {
      results = refiner.refine(context, results);
    });
    return results;
  }
  static executeParser(context, parser) {
    const results = [];
    const pattern = parser.pattern(context);
    const originalText = context.text;
    let remainingText = context.text;
    let match = pattern.exec(remainingText);
    while (match) {
      const index = match.index + originalText.length - remainingText.length;
      match.index = index;
      const result = parser.extract(context, match);
      if (!result) {
        remainingText = originalText.substring(match.index + 1);
        match = pattern.exec(remainingText);
        continue;
      }
      let parsedResult = null;
      if (result instanceof ParsingResult) {
        parsedResult = result;
      } else if (result instanceof ParsingComponents) {
        parsedResult = context.createParsingResult(match.index, match[0]);
        parsedResult.start = result;
      } else {
        parsedResult = context.createParsingResult(match.index, match[0], result);
      }
      const parsedIndex = parsedResult.index;
      const parsedText = parsedResult.text;
      context.debug(() => console.log(`${parser.constructor.name} extracted (at index=${parsedIndex}) '${parsedText}'`));
      results.push(parsedResult);
      remainingText = originalText.substring(parsedIndex + parsedText.length);
      match = pattern.exec(remainingText);
    }
    return results;
  }
};
var ParsingContext = class {
  constructor(text, refDate, option) {
    this.text = text;
    this.reference = new ReferenceWithTimezone(refDate);
    this.option = option ?? {};
    this.refDate = this.reference.instant;
  }
  createParsingComponents(components) {
    if (components instanceof ParsingComponents) {
      return components;
    }
    return new ParsingComponents(this.reference, components);
  }
  createParsingResult(index, textOrEndIndex, startComponents, endComponents) {
    const text = typeof textOrEndIndex === "string" ? textOrEndIndex : this.text.substring(index, textOrEndIndex);
    const start = startComponents ? this.createParsingComponents(startComponents) : null;
    const end = endComponents ? this.createParsingComponents(endComponents) : null;
    return new ParsingResult(this.reference, index, text, start, end);
  }
  debug(block) {
    if (this.option.debug) {
      if (this.option.debug instanceof Function) {
        this.option.debug(block);
      } else {
        const handler = this.option.debug;
        handler.debug(block);
      }
    }
  }
};

// node_modules/chrono-node/dist/esm/locales/en/index.js
var configuration = new ENDefaultConfiguration();
var casual = new Chrono(configuration.createCasualConfiguration(false));
var strict = new Chrono(configuration.createConfiguration(true, false));
var GB = new Chrono(configuration.createCasualConfiguration(true));

// node_modules/chrono-node/dist/esm/index.js
var casual2 = casual;
function parseDate(text, ref, option) {
  return casual2.parseDate(text, ref, option);
}

// src/date-time.tsx
var import_dayjs13 = __toESM(require_dayjs_min());
var import_advancedFormat = __toESM(require_advancedFormat());
var import_weekOfYear = __toESM(require_weekOfYear());
var import_utc = __toESM(require_utc());
var import_timezone3 = __toESM(require_timezone());
var import_relativeTime = __toESM(require_relativeTime());
var import_jsx_runtime = require("react/jsx-runtime");
import_dayjs13.default.extend(import_advancedFormat.default);
import_dayjs13.default.extend(import_weekOfYear.default);
import_dayjs13.default.extend(import_utc.default);
import_dayjs13.default.extend(import_timezone3.default);
import_dayjs13.default.extend(import_relativeTime.default);
function handleConversion(input, timezone) {
  if (input.match(/^\d+$/)) input = new Date(parseInt(input, 10) * 1e3).toString();
  const parsedDate = parseDate(input);
  if (!parsedDate || parsedDate.toString() === "Invalid Date") return [];
  const date = (0, import_dayjs13.default)(parsedDate).tz(timezone);
  const fromNow = date.fromNow();
  return [
    { label: "Unix (s)", value: date.unix() },
    { label: "Unix (ms)", value: date.valueOf() },
    { label: "Human Readable", value: date.format("MMMM Do, YYYY [at] hh:mm:ss A (zzz)") },
    { label: "DateTime", value: date.format("YYYY-MM-DD HH:mm:ss") },
    { label: "UTC", value: date.toString() },
    { label: "ISO 8601", value: date.toISOString() },
    { label: "Week of Year", value: date.format("wo dddd [of] YYYY") },
    { label: "In / Ago", value: String(fromNow).charAt(0).toUpperCase() + String(fromNow).slice(1) }
  ];
}
function DateTime() {
  const [input, setInput] = (0, import_react.useState)("now");
  const [timezone, setTimezone] = (0, import_react.useState)(Intl.DateTimeFormat().resolvedOptions().timeZone);
  const [items, setItems] = (0, import_react.useState)([]);
  const onTimezoneChange = async (value) => {
    setTimezone(value);
    setItems(handleConversion(input, value));
  };
  const onSearchTextChange = async (value) => {
    setInput(value);
    setItems(handleConversion(value, timezone));
  };
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
    import_api.List,
    {
      searchBarPlaceholder: "Date",
      filtering: false,
      searchText: input,
      onSearchTextChange,
      searchBarAccessory: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_api.List.Dropdown, { tooltip: "Timezone", onChange: onTimezoneChange, defaultValue: timezone, children: Intl.supportedValuesOf("timeZone").map((zone, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_api.List.Dropdown.Item, { value: zone, title: zone }, index)) }),
      children: items.map((item, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
        import_api.List.Item,
        {
          title: String(item.value),
          accessories: [{ tag: { value: item.label, color: import_api.Color.SecondaryText } }],
          actions: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_api.ActionPanel, { children: [
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_api.Action.CopyToClipboard, { content: item.value }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_api.Action.Paste, { content: item.value })
          ] })
        },
        index
      ))
    }
  );
}
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vbm9kZV9tb2R1bGVzL2RheWpzL3BsdWdpbi9xdWFydGVyT2ZZZWFyLmpzIiwgIi4uL25vZGVfbW9kdWxlcy9kYXlqcy9kYXlqcy5taW4uanMiLCAiLi4vbm9kZV9tb2R1bGVzL2RheWpzL3BsdWdpbi9hZHZhbmNlZEZvcm1hdC5qcyIsICIuLi9ub2RlX21vZHVsZXMvZGF5anMvcGx1Z2luL3dlZWtPZlllYXIuanMiLCAiLi4vbm9kZV9tb2R1bGVzL2RheWpzL3BsdWdpbi91dGMuanMiLCAiLi4vbm9kZV9tb2R1bGVzL2RheWpzL3BsdWdpbi90aW1lem9uZS5qcyIsICIuLi9ub2RlX21vZHVsZXMvZGF5anMvcGx1Z2luL3JlbGF0aXZlVGltZS5qcyIsICIuLi9zcmMvZGF0ZS10aW1lLnRzeCIsICIuLi9ub2RlX21vZHVsZXMvY2hyb25vLW5vZGUvc3JjL3Jlc3VsdHMudHMiLCAiLi4vbm9kZV9tb2R1bGVzL2Nocm9uby1ub2RlL3NyYy90eXBlcy50cyIsICIuLi9ub2RlX21vZHVsZXMvY2hyb25vLW5vZGUvc3JjL3V0aWxzL2RheWpzLnRzIiwgIi4uL25vZGVfbW9kdWxlcy9jaHJvbm8tbm9kZS9zcmMvdGltZXpvbmUudHMiLCAiLi4vbm9kZV9tb2R1bGVzL2Nocm9uby1ub2RlL3NyYy91dGlscy9wYXR0ZXJuLnRzIiwgIi4uL25vZGVfbW9kdWxlcy9jaHJvbm8tbm9kZS9zcmMvY2FsY3VsYXRpb24veWVhcnMudHMiLCAiLi4vbm9kZV9tb2R1bGVzL2Nocm9uby1ub2RlL3NyYy9sb2NhbGVzL2VuL2NvbnN0YW50cy50cyIsICIuLi9ub2RlX21vZHVsZXMvY2hyb25vLW5vZGUvc3JjL2NvbW1vbi9wYXJzZXJzL0Fic3RyYWN0UGFyc2VyV2l0aFdvcmRCb3VuZGFyeS50cyIsICIuLi9ub2RlX21vZHVsZXMvY2hyb25vLW5vZGUvc3JjL2xvY2FsZXMvZW4vcGFyc2Vycy9FTlRpbWVVbml0V2l0aGluRm9ybWF0UGFyc2VyLnRzIiwgIi4uL25vZGVfbW9kdWxlcy9jaHJvbm8tbm9kZS9zcmMvbG9jYWxlcy9lbi9wYXJzZXJzL0VOTW9udGhOYW1lTGl0dGxlRW5kaWFuUGFyc2VyLnRzIiwgIi4uL25vZGVfbW9kdWxlcy9jaHJvbm8tbm9kZS9zcmMvbG9jYWxlcy9lbi9wYXJzZXJzL0VOTW9udGhOYW1lTWlkZGxlRW5kaWFuUGFyc2VyLnRzIiwgIi4uL25vZGVfbW9kdWxlcy9jaHJvbm8tbm9kZS9zcmMvbG9jYWxlcy9lbi9wYXJzZXJzL0VOTW9udGhOYW1lUGFyc2VyLnRzIiwgIi4uL25vZGVfbW9kdWxlcy9jaHJvbm8tbm9kZS9zcmMvbG9jYWxlcy9lbi9wYXJzZXJzL0VOWWVhck1vbnRoRGF5UGFyc2VyLnRzIiwgIi4uL25vZGVfbW9kdWxlcy9jaHJvbm8tbm9kZS9zcmMvbG9jYWxlcy9lbi9wYXJzZXJzL0VOU2xhc2hNb250aEZvcm1hdFBhcnNlci50cyIsICIuLi9ub2RlX21vZHVsZXMvY2hyb25vLW5vZGUvc3JjL2NvbW1vbi9wYXJzZXJzL0Fic3RyYWN0VGltZUV4cHJlc3Npb25QYXJzZXIudHMiLCAiLi4vbm9kZV9tb2R1bGVzL2Nocm9uby1ub2RlL3NyYy9sb2NhbGVzL2VuL3BhcnNlcnMvRU5UaW1lRXhwcmVzc2lvblBhcnNlci50cyIsICIuLi9ub2RlX21vZHVsZXMvY2hyb25vLW5vZGUvc3JjL3V0aWxzL3RpbWV1bml0cy50cyIsICIuLi9ub2RlX21vZHVsZXMvY2hyb25vLW5vZGUvc3JjL2xvY2FsZXMvZW4vcGFyc2Vycy9FTlRpbWVVbml0QWdvRm9ybWF0UGFyc2VyLnRzIiwgIi4uL25vZGVfbW9kdWxlcy9jaHJvbm8tbm9kZS9zcmMvbG9jYWxlcy9lbi9wYXJzZXJzL0VOVGltZVVuaXRMYXRlckZvcm1hdFBhcnNlci50cyIsICIuLi9ub2RlX21vZHVsZXMvY2hyb25vLW5vZGUvc3JjL2NvbW1vbi9hYnN0cmFjdFJlZmluZXJzLnRzIiwgIi4uL25vZGVfbW9kdWxlcy9jaHJvbm8tbm9kZS9zcmMvY29tbW9uL3JlZmluZXJzL0Fic3RyYWN0TWVyZ2VEYXRlUmFuZ2VSZWZpbmVyLnRzIiwgIi4uL25vZGVfbW9kdWxlcy9jaHJvbm8tbm9kZS9zcmMvbG9jYWxlcy9lbi9yZWZpbmVycy9FTk1lcmdlRGF0ZVJhbmdlUmVmaW5lci50cyIsICIuLi9ub2RlX21vZHVsZXMvY2hyb25vLW5vZGUvc3JjL2NhbGN1bGF0aW9uL21lcmdpbmdDYWxjdWxhdGlvbi50cyIsICIuLi9ub2RlX21vZHVsZXMvY2hyb25vLW5vZGUvc3JjL2NvbW1vbi9yZWZpbmVycy9BYnN0cmFjdE1lcmdlRGF0ZVRpbWVSZWZpbmVyLnRzIiwgIi4uL25vZGVfbW9kdWxlcy9jaHJvbm8tbm9kZS9zcmMvbG9jYWxlcy9lbi9yZWZpbmVycy9FTk1lcmdlRGF0ZVRpbWVSZWZpbmVyLnRzIiwgIi4uL25vZGVfbW9kdWxlcy9jaHJvbm8tbm9kZS9zcmMvY29tbW9uL3JlZmluZXJzL0V4dHJhY3RUaW1lem9uZUFiYnJSZWZpbmVyLnRzIiwgIi4uL25vZGVfbW9kdWxlcy9jaHJvbm8tbm9kZS9zcmMvY29tbW9uL3JlZmluZXJzL0V4dHJhY3RUaW1lem9uZU9mZnNldFJlZmluZXIudHMiLCAiLi4vbm9kZV9tb2R1bGVzL2Nocm9uby1ub2RlL3NyYy9jb21tb24vcmVmaW5lcnMvT3ZlcmxhcFJlbW92YWxSZWZpbmVyLnRzIiwgIi4uL25vZGVfbW9kdWxlcy9jaHJvbm8tbm9kZS9zcmMvY29tbW9uL3JlZmluZXJzL0ZvcndhcmREYXRlUmVmaW5lci50cyIsICIuLi9ub2RlX21vZHVsZXMvY2hyb25vLW5vZGUvc3JjL2NvbW1vbi9yZWZpbmVycy9Vbmxpa2VseUZvcm1hdEZpbHRlci50cyIsICIuLi9ub2RlX21vZHVsZXMvY2hyb25vLW5vZGUvc3JjL2NvbW1vbi9wYXJzZXJzL0lTT0Zvcm1hdFBhcnNlci50cyIsICIuLi9ub2RlX21vZHVsZXMvY2hyb25vLW5vZGUvc3JjL2NvbW1vbi9yZWZpbmVycy9NZXJnZVdlZWtkYXlDb21wb25lbnRSZWZpbmVyLnRzIiwgIi4uL25vZGVfbW9kdWxlcy9jaHJvbm8tbm9kZS9zcmMvY29uZmlndXJhdGlvbnMudHMiLCAiLi4vbm9kZV9tb2R1bGVzL2Nocm9uby1ub2RlL3NyYy9sb2NhbGVzL2VuL3BhcnNlcnMvRU5DYXN1YWxEYXRlUGFyc2VyLnRzIiwgIi4uL25vZGVfbW9kdWxlcy9jaHJvbm8tbm9kZS9zcmMvY29tbW9uL2Nhc3VhbFJlZmVyZW5jZXMudHMiLCAiLi4vbm9kZV9tb2R1bGVzL2Nocm9uby1ub2RlL3NyYy9sb2NhbGVzL2VuL3BhcnNlcnMvRU5DYXN1YWxUaW1lUGFyc2VyLnRzIiwgIi4uL25vZGVfbW9kdWxlcy9jaHJvbm8tbm9kZS9zcmMvY29tbW9uL2NhbGN1bGF0aW9uL3dlZWtkYXlzLnRzIiwgIi4uL25vZGVfbW9kdWxlcy9jaHJvbm8tbm9kZS9zcmMvbG9jYWxlcy9lbi9wYXJzZXJzL0VOV2Vla2RheVBhcnNlci50cyIsICIuLi9ub2RlX21vZHVsZXMvY2hyb25vLW5vZGUvc3JjL2xvY2FsZXMvZW4vcGFyc2Vycy9FTlJlbGF0aXZlRGF0ZUZvcm1hdFBhcnNlci50cyIsICIuLi9ub2RlX21vZHVsZXMvY2hyb25vLW5vZGUvc3JjL2NvbW1vbi9wYXJzZXJzL1NsYXNoRGF0ZUZvcm1hdFBhcnNlci50cyIsICIuLi9ub2RlX21vZHVsZXMvY2hyb25vLW5vZGUvc3JjL2xvY2FsZXMvZW4vcGFyc2Vycy9FTlRpbWVVbml0Q2FzdWFsUmVsYXRpdmVGb3JtYXRQYXJzZXIudHMiLCAiLi4vbm9kZV9tb2R1bGVzL2Nocm9uby1ub2RlL3NyYy9sb2NhbGVzL2VuL3JlZmluZXJzL0VOTWVyZ2VSZWxhdGl2ZUFmdGVyRGF0ZVJlZmluZXIudHMiLCAiLi4vbm9kZV9tb2R1bGVzL2Nocm9uby1ub2RlL3NyYy9sb2NhbGVzL2VuL3JlZmluZXJzL0VOTWVyZ2VSZWxhdGl2ZUZvbGxvd0J5RGF0ZVJlZmluZXIudHMiLCAiLi4vbm9kZV9tb2R1bGVzL2Nocm9uby1ub2RlL3NyYy9sb2NhbGVzL2VuL3JlZmluZXJzL0VORXh0cmFjdFllYXJTdWZmaXhSZWZpbmVyLnRzIiwgIi4uL25vZGVfbW9kdWxlcy9jaHJvbm8tbm9kZS9zcmMvbG9jYWxlcy9lbi9yZWZpbmVycy9FTlVubGlrZWx5Rm9ybWF0RmlsdGVyLnRzIiwgIi4uL25vZGVfbW9kdWxlcy9jaHJvbm8tbm9kZS9zcmMvbG9jYWxlcy9lbi9jb25maWd1cmF0aW9uLnRzIiwgIi4uL25vZGVfbW9kdWxlcy9jaHJvbm8tbm9kZS9zcmMvY2hyb25vLnRzIiwgIi4uL25vZGVfbW9kdWxlcy9jaHJvbm8tbm9kZS9zcmMvbG9jYWxlcy9lbi9pbmRleC50cyIsICIuLi9ub2RlX21vZHVsZXMvY2hyb25vLW5vZGUvc3JjL2luZGV4LnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyIhZnVuY3Rpb24odCxuKXtcIm9iamVjdFwiPT10eXBlb2YgZXhwb3J0cyYmXCJ1bmRlZmluZWRcIiE9dHlwZW9mIG1vZHVsZT9tb2R1bGUuZXhwb3J0cz1uKCk6XCJmdW5jdGlvblwiPT10eXBlb2YgZGVmaW5lJiZkZWZpbmUuYW1kP2RlZmluZShuKToodD1cInVuZGVmaW5lZFwiIT10eXBlb2YgZ2xvYmFsVGhpcz9nbG9iYWxUaGlzOnR8fHNlbGYpLmRheWpzX3BsdWdpbl9xdWFydGVyT2ZZZWFyPW4oKX0odGhpcywoZnVuY3Rpb24oKXtcInVzZSBzdHJpY3RcIjt2YXIgdD1cIm1vbnRoXCIsbj1cInF1YXJ0ZXJcIjtyZXR1cm4gZnVuY3Rpb24oZSxpKXt2YXIgcj1pLnByb3RvdHlwZTtyLnF1YXJ0ZXI9ZnVuY3Rpb24odCl7cmV0dXJuIHRoaXMuJHV0aWxzKCkudSh0KT9NYXRoLmNlaWwoKHRoaXMubW9udGgoKSsxKS8zKTp0aGlzLm1vbnRoKHRoaXMubW9udGgoKSUzKzMqKHQtMSkpfTt2YXIgcz1yLmFkZDtyLmFkZD1mdW5jdGlvbihlLGkpe3JldHVybiBlPU51bWJlcihlKSx0aGlzLiR1dGlscygpLnAoaSk9PT1uP3RoaXMuYWRkKDMqZSx0KTpzLmJpbmQodGhpcykoZSxpKX07dmFyIHU9ci5zdGFydE9mO3Iuc3RhcnRPZj1mdW5jdGlvbihlLGkpe3ZhciByPXRoaXMuJHV0aWxzKCkscz0hIXIudShpKXx8aTtpZihyLnAoZSk9PT1uKXt2YXIgbz10aGlzLnF1YXJ0ZXIoKS0xO3JldHVybiBzP3RoaXMubW9udGgoMypvKS5zdGFydE9mKHQpLnN0YXJ0T2YoXCJkYXlcIik6dGhpcy5tb250aCgzKm8rMikuZW5kT2YodCkuZW5kT2YoXCJkYXlcIil9cmV0dXJuIHUuYmluZCh0aGlzKShlLGkpfX19KSk7IiwgIiFmdW5jdGlvbih0LGUpe1wib2JqZWN0XCI9PXR5cGVvZiBleHBvcnRzJiZcInVuZGVmaW5lZFwiIT10eXBlb2YgbW9kdWxlP21vZHVsZS5leHBvcnRzPWUoKTpcImZ1bmN0aW9uXCI9PXR5cGVvZiBkZWZpbmUmJmRlZmluZS5hbWQ/ZGVmaW5lKGUpOih0PVwidW5kZWZpbmVkXCIhPXR5cGVvZiBnbG9iYWxUaGlzP2dsb2JhbFRoaXM6dHx8c2VsZikuZGF5anM9ZSgpfSh0aGlzLChmdW5jdGlvbigpe1widXNlIHN0cmljdFwiO3ZhciB0PTFlMyxlPTZlNCxuPTM2ZTUscj1cIm1pbGxpc2Vjb25kXCIsaT1cInNlY29uZFwiLHM9XCJtaW51dGVcIix1PVwiaG91clwiLGE9XCJkYXlcIixvPVwid2Vla1wiLGM9XCJtb250aFwiLGY9XCJxdWFydGVyXCIsaD1cInllYXJcIixkPVwiZGF0ZVwiLGw9XCJJbnZhbGlkIERhdGVcIiwkPS9eKFxcZHs0fSlbLS9dPyhcXGR7MSwyfSk/Wy0vXT8oXFxkezAsMn0pW1R0XFxzXSooXFxkezEsMn0pPzo/KFxcZHsxLDJ9KT86PyhcXGR7MSwyfSk/Wy46XT8oXFxkKyk/JC8seT0vXFxbKFteXFxdXSspXXxZezEsNH18TXsxLDR9fER7MSwyfXxkezEsNH18SHsxLDJ9fGh7MSwyfXxhfEF8bXsxLDJ9fHN7MSwyfXxaezEsMn18U1NTL2csTT17bmFtZTpcImVuXCIsd2Vla2RheXM6XCJTdW5kYXlfTW9uZGF5X1R1ZXNkYXlfV2VkbmVzZGF5X1RodXJzZGF5X0ZyaWRheV9TYXR1cmRheVwiLnNwbGl0KFwiX1wiKSxtb250aHM6XCJKYW51YXJ5X0ZlYnJ1YXJ5X01hcmNoX0FwcmlsX01heV9KdW5lX0p1bHlfQXVndXN0X1NlcHRlbWJlcl9PY3RvYmVyX05vdmVtYmVyX0RlY2VtYmVyXCIuc3BsaXQoXCJfXCIpLG9yZGluYWw6ZnVuY3Rpb24odCl7dmFyIGU9W1widGhcIixcInN0XCIsXCJuZFwiLFwicmRcIl0sbj10JTEwMDtyZXR1cm5cIltcIit0KyhlWyhuLTIwKSUxMF18fGVbbl18fGVbMF0pK1wiXVwifX0sbT1mdW5jdGlvbih0LGUsbil7dmFyIHI9U3RyaW5nKHQpO3JldHVybiFyfHxyLmxlbmd0aD49ZT90OlwiXCIrQXJyYXkoZSsxLXIubGVuZ3RoKS5qb2luKG4pK3R9LHY9e3M6bSx6OmZ1bmN0aW9uKHQpe3ZhciBlPS10LnV0Y09mZnNldCgpLG49TWF0aC5hYnMoZSkscj1NYXRoLmZsb29yKG4vNjApLGk9biU2MDtyZXR1cm4oZTw9MD9cIitcIjpcIi1cIikrbShyLDIsXCIwXCIpK1wiOlwiK20oaSwyLFwiMFwiKX0sbTpmdW5jdGlvbiB0KGUsbil7aWYoZS5kYXRlKCk8bi5kYXRlKCkpcmV0dXJuLXQobixlKTt2YXIgcj0xMioobi55ZWFyKCktZS55ZWFyKCkpKyhuLm1vbnRoKCktZS5tb250aCgpKSxpPWUuY2xvbmUoKS5hZGQocixjKSxzPW4taTwwLHU9ZS5jbG9uZSgpLmFkZChyKyhzPy0xOjEpLGMpO3JldHVybisoLShyKyhuLWkpLyhzP2ktdTp1LWkpKXx8MCl9LGE6ZnVuY3Rpb24odCl7cmV0dXJuIHQ8MD9NYXRoLmNlaWwodCl8fDA6TWF0aC5mbG9vcih0KX0scDpmdW5jdGlvbih0KXtyZXR1cm57TTpjLHk6aCx3Om8sZDphLEQ6ZCxoOnUsbTpzLHM6aSxtczpyLFE6Zn1bdF18fFN0cmluZyh0fHxcIlwiKS50b0xvd2VyQ2FzZSgpLnJlcGxhY2UoL3MkLyxcIlwiKX0sdTpmdW5jdGlvbih0KXtyZXR1cm4gdm9pZCAwPT09dH19LGc9XCJlblwiLEQ9e307RFtnXT1NO3ZhciBwPVwiJGlzRGF5anNPYmplY3RcIixTPWZ1bmN0aW9uKHQpe3JldHVybiB0IGluc3RhbmNlb2YgX3x8ISghdHx8IXRbcF0pfSx3PWZ1bmN0aW9uIHQoZSxuLHIpe3ZhciBpO2lmKCFlKXJldHVybiBnO2lmKFwic3RyaW5nXCI9PXR5cGVvZiBlKXt2YXIgcz1lLnRvTG93ZXJDYXNlKCk7RFtzXSYmKGk9cyksbiYmKERbc109bixpPXMpO3ZhciB1PWUuc3BsaXQoXCItXCIpO2lmKCFpJiZ1Lmxlbmd0aD4xKXJldHVybiB0KHVbMF0pfWVsc2V7dmFyIGE9ZS5uYW1lO0RbYV09ZSxpPWF9cmV0dXJuIXImJmkmJihnPWkpLGl8fCFyJiZnfSxPPWZ1bmN0aW9uKHQsZSl7aWYoUyh0KSlyZXR1cm4gdC5jbG9uZSgpO3ZhciBuPVwib2JqZWN0XCI9PXR5cGVvZiBlP2U6e307cmV0dXJuIG4uZGF0ZT10LG4uYXJncz1hcmd1bWVudHMsbmV3IF8obil9LGI9djtiLmw9dyxiLmk9UyxiLnc9ZnVuY3Rpb24odCxlKXtyZXR1cm4gTyh0LHtsb2NhbGU6ZS4kTCx1dGM6ZS4kdSx4OmUuJHgsJG9mZnNldDplLiRvZmZzZXR9KX07dmFyIF89ZnVuY3Rpb24oKXtmdW5jdGlvbiBNKHQpe3RoaXMuJEw9dyh0LmxvY2FsZSxudWxsLCEwKSx0aGlzLnBhcnNlKHQpLHRoaXMuJHg9dGhpcy4keHx8dC54fHx7fSx0aGlzW3BdPSEwfXZhciBtPU0ucHJvdG90eXBlO3JldHVybiBtLnBhcnNlPWZ1bmN0aW9uKHQpe3RoaXMuJGQ9ZnVuY3Rpb24odCl7dmFyIGU9dC5kYXRlLG49dC51dGM7aWYobnVsbD09PWUpcmV0dXJuIG5ldyBEYXRlKE5hTik7aWYoYi51KGUpKXJldHVybiBuZXcgRGF0ZTtpZihlIGluc3RhbmNlb2YgRGF0ZSlyZXR1cm4gbmV3IERhdGUoZSk7aWYoXCJzdHJpbmdcIj09dHlwZW9mIGUmJiEvWiQvaS50ZXN0KGUpKXt2YXIgcj1lLm1hdGNoKCQpO2lmKHIpe3ZhciBpPXJbMl0tMXx8MCxzPShyWzddfHxcIjBcIikuc3Vic3RyaW5nKDAsMyk7cmV0dXJuIG4/bmV3IERhdGUoRGF0ZS5VVEMoclsxXSxpLHJbM118fDEscls0XXx8MCxyWzVdfHwwLHJbNl18fDAscykpOm5ldyBEYXRlKHJbMV0saSxyWzNdfHwxLHJbNF18fDAscls1XXx8MCxyWzZdfHwwLHMpfX1yZXR1cm4gbmV3IERhdGUoZSl9KHQpLHRoaXMuaW5pdCgpfSxtLmluaXQ9ZnVuY3Rpb24oKXt2YXIgdD10aGlzLiRkO3RoaXMuJHk9dC5nZXRGdWxsWWVhcigpLHRoaXMuJE09dC5nZXRNb250aCgpLHRoaXMuJEQ9dC5nZXREYXRlKCksdGhpcy4kVz10LmdldERheSgpLHRoaXMuJEg9dC5nZXRIb3VycygpLHRoaXMuJG09dC5nZXRNaW51dGVzKCksdGhpcy4kcz10LmdldFNlY29uZHMoKSx0aGlzLiRtcz10LmdldE1pbGxpc2Vjb25kcygpfSxtLiR1dGlscz1mdW5jdGlvbigpe3JldHVybiBifSxtLmlzVmFsaWQ9ZnVuY3Rpb24oKXtyZXR1cm4hKHRoaXMuJGQudG9TdHJpbmcoKT09PWwpfSxtLmlzU2FtZT1mdW5jdGlvbih0LGUpe3ZhciBuPU8odCk7cmV0dXJuIHRoaXMuc3RhcnRPZihlKTw9biYmbjw9dGhpcy5lbmRPZihlKX0sbS5pc0FmdGVyPWZ1bmN0aW9uKHQsZSl7cmV0dXJuIE8odCk8dGhpcy5zdGFydE9mKGUpfSxtLmlzQmVmb3JlPWZ1bmN0aW9uKHQsZSl7cmV0dXJuIHRoaXMuZW5kT2YoZSk8Tyh0KX0sbS4kZz1mdW5jdGlvbih0LGUsbil7cmV0dXJuIGIudSh0KT90aGlzW2VdOnRoaXMuc2V0KG4sdCl9LG0udW5peD1mdW5jdGlvbigpe3JldHVybiBNYXRoLmZsb29yKHRoaXMudmFsdWVPZigpLzFlMyl9LG0udmFsdWVPZj1mdW5jdGlvbigpe3JldHVybiB0aGlzLiRkLmdldFRpbWUoKX0sbS5zdGFydE9mPWZ1bmN0aW9uKHQsZSl7dmFyIG49dGhpcyxyPSEhYi51KGUpfHxlLGY9Yi5wKHQpLGw9ZnVuY3Rpb24odCxlKXt2YXIgaT1iLncobi4kdT9EYXRlLlVUQyhuLiR5LGUsdCk6bmV3IERhdGUobi4keSxlLHQpLG4pO3JldHVybiByP2k6aS5lbmRPZihhKX0sJD1mdW5jdGlvbih0LGUpe3JldHVybiBiLncobi50b0RhdGUoKVt0XS5hcHBseShuLnRvRGF0ZShcInNcIiksKHI/WzAsMCwwLDBdOlsyMyw1OSw1OSw5OTldKS5zbGljZShlKSksbil9LHk9dGhpcy4kVyxNPXRoaXMuJE0sbT10aGlzLiRELHY9XCJzZXRcIisodGhpcy4kdT9cIlVUQ1wiOlwiXCIpO3N3aXRjaChmKXtjYXNlIGg6cmV0dXJuIHI/bCgxLDApOmwoMzEsMTEpO2Nhc2UgYzpyZXR1cm4gcj9sKDEsTSk6bCgwLE0rMSk7Y2FzZSBvOnZhciBnPXRoaXMuJGxvY2FsZSgpLndlZWtTdGFydHx8MCxEPSh5PGc/eSs3OnkpLWc7cmV0dXJuIGwocj9tLUQ6bSsoNi1EKSxNKTtjYXNlIGE6Y2FzZSBkOnJldHVybiAkKHYrXCJIb3Vyc1wiLDApO2Nhc2UgdTpyZXR1cm4gJCh2K1wiTWludXRlc1wiLDEpO2Nhc2UgczpyZXR1cm4gJCh2K1wiU2Vjb25kc1wiLDIpO2Nhc2UgaTpyZXR1cm4gJCh2K1wiTWlsbGlzZWNvbmRzXCIsMyk7ZGVmYXVsdDpyZXR1cm4gdGhpcy5jbG9uZSgpfX0sbS5lbmRPZj1mdW5jdGlvbih0KXtyZXR1cm4gdGhpcy5zdGFydE9mKHQsITEpfSxtLiRzZXQ9ZnVuY3Rpb24odCxlKXt2YXIgbixvPWIucCh0KSxmPVwic2V0XCIrKHRoaXMuJHU/XCJVVENcIjpcIlwiKSxsPShuPXt9LG5bYV09ZitcIkRhdGVcIixuW2RdPWYrXCJEYXRlXCIsbltjXT1mK1wiTW9udGhcIixuW2hdPWYrXCJGdWxsWWVhclwiLG5bdV09ZitcIkhvdXJzXCIsbltzXT1mK1wiTWludXRlc1wiLG5baV09ZitcIlNlY29uZHNcIixuW3JdPWYrXCJNaWxsaXNlY29uZHNcIixuKVtvXSwkPW89PT1hP3RoaXMuJEQrKGUtdGhpcy4kVyk6ZTtpZihvPT09Y3x8bz09PWgpe3ZhciB5PXRoaXMuY2xvbmUoKS5zZXQoZCwxKTt5LiRkW2xdKCQpLHkuaW5pdCgpLHRoaXMuJGQ9eS5zZXQoZCxNYXRoLm1pbih0aGlzLiRELHkuZGF5c0luTW9udGgoKSkpLiRkfWVsc2UgbCYmdGhpcy4kZFtsXSgkKTtyZXR1cm4gdGhpcy5pbml0KCksdGhpc30sbS5zZXQ9ZnVuY3Rpb24odCxlKXtyZXR1cm4gdGhpcy5jbG9uZSgpLiRzZXQodCxlKX0sbS5nZXQ9ZnVuY3Rpb24odCl7cmV0dXJuIHRoaXNbYi5wKHQpXSgpfSxtLmFkZD1mdW5jdGlvbihyLGYpe3ZhciBkLGw9dGhpcztyPU51bWJlcihyKTt2YXIgJD1iLnAoZikseT1mdW5jdGlvbih0KXt2YXIgZT1PKGwpO3JldHVybiBiLncoZS5kYXRlKGUuZGF0ZSgpK01hdGgucm91bmQodCpyKSksbCl9O2lmKCQ9PT1jKXJldHVybiB0aGlzLnNldChjLHRoaXMuJE0rcik7aWYoJD09PWgpcmV0dXJuIHRoaXMuc2V0KGgsdGhpcy4keStyKTtpZigkPT09YSlyZXR1cm4geSgxKTtpZigkPT09bylyZXR1cm4geSg3KTt2YXIgTT0oZD17fSxkW3NdPWUsZFt1XT1uLGRbaV09dCxkKVskXXx8MSxtPXRoaXMuJGQuZ2V0VGltZSgpK3IqTTtyZXR1cm4gYi53KG0sdGhpcyl9LG0uc3VidHJhY3Q9ZnVuY3Rpb24odCxlKXtyZXR1cm4gdGhpcy5hZGQoLTEqdCxlKX0sbS5mb3JtYXQ9ZnVuY3Rpb24odCl7dmFyIGU9dGhpcyxuPXRoaXMuJGxvY2FsZSgpO2lmKCF0aGlzLmlzVmFsaWQoKSlyZXR1cm4gbi5pbnZhbGlkRGF0ZXx8bDt2YXIgcj10fHxcIllZWVktTU0tRERUSEg6bW06c3NaXCIsaT1iLnoodGhpcykscz10aGlzLiRILHU9dGhpcy4kbSxhPXRoaXMuJE0sbz1uLndlZWtkYXlzLGM9bi5tb250aHMsZj1uLm1lcmlkaWVtLGg9ZnVuY3Rpb24odCxuLGkscyl7cmV0dXJuIHQmJih0W25dfHx0KGUscikpfHxpW25dLnNsaWNlKDAscyl9LGQ9ZnVuY3Rpb24odCl7cmV0dXJuIGIucyhzJTEyfHwxMix0LFwiMFwiKX0sJD1mfHxmdW5jdGlvbih0LGUsbil7dmFyIHI9dDwxMj9cIkFNXCI6XCJQTVwiO3JldHVybiBuP3IudG9Mb3dlckNhc2UoKTpyfTtyZXR1cm4gci5yZXBsYWNlKHksKGZ1bmN0aW9uKHQscil7cmV0dXJuIHJ8fGZ1bmN0aW9uKHQpe3N3aXRjaCh0KXtjYXNlXCJZWVwiOnJldHVybiBTdHJpbmcoZS4keSkuc2xpY2UoLTIpO2Nhc2VcIllZWVlcIjpyZXR1cm4gYi5zKGUuJHksNCxcIjBcIik7Y2FzZVwiTVwiOnJldHVybiBhKzE7Y2FzZVwiTU1cIjpyZXR1cm4gYi5zKGErMSwyLFwiMFwiKTtjYXNlXCJNTU1cIjpyZXR1cm4gaChuLm1vbnRoc1Nob3J0LGEsYywzKTtjYXNlXCJNTU1NXCI6cmV0dXJuIGgoYyxhKTtjYXNlXCJEXCI6cmV0dXJuIGUuJEQ7Y2FzZVwiRERcIjpyZXR1cm4gYi5zKGUuJEQsMixcIjBcIik7Y2FzZVwiZFwiOnJldHVybiBTdHJpbmcoZS4kVyk7Y2FzZVwiZGRcIjpyZXR1cm4gaChuLndlZWtkYXlzTWluLGUuJFcsbywyKTtjYXNlXCJkZGRcIjpyZXR1cm4gaChuLndlZWtkYXlzU2hvcnQsZS4kVyxvLDMpO2Nhc2VcImRkZGRcIjpyZXR1cm4gb1tlLiRXXTtjYXNlXCJIXCI6cmV0dXJuIFN0cmluZyhzKTtjYXNlXCJISFwiOnJldHVybiBiLnMocywyLFwiMFwiKTtjYXNlXCJoXCI6cmV0dXJuIGQoMSk7Y2FzZVwiaGhcIjpyZXR1cm4gZCgyKTtjYXNlXCJhXCI6cmV0dXJuICQocyx1LCEwKTtjYXNlXCJBXCI6cmV0dXJuICQocyx1LCExKTtjYXNlXCJtXCI6cmV0dXJuIFN0cmluZyh1KTtjYXNlXCJtbVwiOnJldHVybiBiLnModSwyLFwiMFwiKTtjYXNlXCJzXCI6cmV0dXJuIFN0cmluZyhlLiRzKTtjYXNlXCJzc1wiOnJldHVybiBiLnMoZS4kcywyLFwiMFwiKTtjYXNlXCJTU1NcIjpyZXR1cm4gYi5zKGUuJG1zLDMsXCIwXCIpO2Nhc2VcIlpcIjpyZXR1cm4gaX1yZXR1cm4gbnVsbH0odCl8fGkucmVwbGFjZShcIjpcIixcIlwiKX0pKX0sbS51dGNPZmZzZXQ9ZnVuY3Rpb24oKXtyZXR1cm4gMTUqLU1hdGgucm91bmQodGhpcy4kZC5nZXRUaW1lem9uZU9mZnNldCgpLzE1KX0sbS5kaWZmPWZ1bmN0aW9uKHIsZCxsKXt2YXIgJCx5PXRoaXMsTT1iLnAoZCksbT1PKHIpLHY9KG0udXRjT2Zmc2V0KCktdGhpcy51dGNPZmZzZXQoKSkqZSxnPXRoaXMtbSxEPWZ1bmN0aW9uKCl7cmV0dXJuIGIubSh5LG0pfTtzd2l0Y2goTSl7Y2FzZSBoOiQ9RCgpLzEyO2JyZWFrO2Nhc2UgYzokPUQoKTticmVhaztjYXNlIGY6JD1EKCkvMzticmVhaztjYXNlIG86JD0oZy12KS82MDQ4ZTU7YnJlYWs7Y2FzZSBhOiQ9KGctdikvODY0ZTU7YnJlYWs7Y2FzZSB1OiQ9Zy9uO2JyZWFrO2Nhc2UgczokPWcvZTticmVhaztjYXNlIGk6JD1nL3Q7YnJlYWs7ZGVmYXVsdDokPWd9cmV0dXJuIGw/JDpiLmEoJCl9LG0uZGF5c0luTW9udGg9ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5lbmRPZihjKS4kRH0sbS4kbG9jYWxlPWZ1bmN0aW9uKCl7cmV0dXJuIERbdGhpcy4kTF19LG0ubG9jYWxlPWZ1bmN0aW9uKHQsZSl7aWYoIXQpcmV0dXJuIHRoaXMuJEw7dmFyIG49dGhpcy5jbG9uZSgpLHI9dyh0LGUsITApO3JldHVybiByJiYobi4kTD1yKSxufSxtLmNsb25lPWZ1bmN0aW9uKCl7cmV0dXJuIGIudyh0aGlzLiRkLHRoaXMpfSxtLnRvRGF0ZT1mdW5jdGlvbigpe3JldHVybiBuZXcgRGF0ZSh0aGlzLnZhbHVlT2YoKSl9LG0udG9KU09OPWZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuaXNWYWxpZCgpP3RoaXMudG9JU09TdHJpbmcoKTpudWxsfSxtLnRvSVNPU3RyaW5nPWZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuJGQudG9JU09TdHJpbmcoKX0sbS50b1N0cmluZz1mdW5jdGlvbigpe3JldHVybiB0aGlzLiRkLnRvVVRDU3RyaW5nKCl9LE19KCksaz1fLnByb3RvdHlwZTtyZXR1cm4gTy5wcm90b3R5cGU9ayxbW1wiJG1zXCIscl0sW1wiJHNcIixpXSxbXCIkbVwiLHNdLFtcIiRIXCIsdV0sW1wiJFdcIixhXSxbXCIkTVwiLGNdLFtcIiR5XCIsaF0sW1wiJERcIixkXV0uZm9yRWFjaCgoZnVuY3Rpb24odCl7a1t0WzFdXT1mdW5jdGlvbihlKXtyZXR1cm4gdGhpcy4kZyhlLHRbMF0sdFsxXSl9fSkpLE8uZXh0ZW5kPWZ1bmN0aW9uKHQsZSl7cmV0dXJuIHQuJGl8fCh0KGUsXyxPKSx0LiRpPSEwKSxPfSxPLmxvY2FsZT13LE8uaXNEYXlqcz1TLE8udW5peD1mdW5jdGlvbih0KXtyZXR1cm4gTygxZTMqdCl9LE8uZW49RFtnXSxPLkxzPUQsTy5wPXt9LE99KSk7IiwgIiFmdW5jdGlvbihlLHQpe1wib2JqZWN0XCI9PXR5cGVvZiBleHBvcnRzJiZcInVuZGVmaW5lZFwiIT10eXBlb2YgbW9kdWxlP21vZHVsZS5leHBvcnRzPXQoKTpcImZ1bmN0aW9uXCI9PXR5cGVvZiBkZWZpbmUmJmRlZmluZS5hbWQ/ZGVmaW5lKHQpOihlPVwidW5kZWZpbmVkXCIhPXR5cGVvZiBnbG9iYWxUaGlzP2dsb2JhbFRoaXM6ZXx8c2VsZikuZGF5anNfcGx1Z2luX2FkdmFuY2VkRm9ybWF0PXQoKX0odGhpcywoZnVuY3Rpb24oKXtcInVzZSBzdHJpY3RcIjtyZXR1cm4gZnVuY3Rpb24oZSx0KXt2YXIgcj10LnByb3RvdHlwZSxuPXIuZm9ybWF0O3IuZm9ybWF0PWZ1bmN0aW9uKGUpe3ZhciB0PXRoaXMscj10aGlzLiRsb2NhbGUoKTtpZighdGhpcy5pc1ZhbGlkKCkpcmV0dXJuIG4uYmluZCh0aGlzKShlKTt2YXIgcz10aGlzLiR1dGlscygpLGE9KGV8fFwiWVlZWS1NTS1ERFRISDptbTpzc1pcIikucmVwbGFjZSgvXFxbKFteXFxdXSspXXxRfHdvfHd3fHd8V1d8V3x6enp8enxnZ2dnfEdHR0d8RG98WHx4fGt7MSwyfXxTL2csKGZ1bmN0aW9uKGUpe3N3aXRjaChlKXtjYXNlXCJRXCI6cmV0dXJuIE1hdGguY2VpbCgodC4kTSsxKS8zKTtjYXNlXCJEb1wiOnJldHVybiByLm9yZGluYWwodC4kRCk7Y2FzZVwiZ2dnZ1wiOnJldHVybiB0LndlZWtZZWFyKCk7Y2FzZVwiR0dHR1wiOnJldHVybiB0Lmlzb1dlZWtZZWFyKCk7Y2FzZVwid29cIjpyZXR1cm4gci5vcmRpbmFsKHQud2VlaygpLFwiV1wiKTtjYXNlXCJ3XCI6Y2FzZVwid3dcIjpyZXR1cm4gcy5zKHQud2VlaygpLFwid1wiPT09ZT8xOjIsXCIwXCIpO2Nhc2VcIldcIjpjYXNlXCJXV1wiOnJldHVybiBzLnModC5pc29XZWVrKCksXCJXXCI9PT1lPzE6MixcIjBcIik7Y2FzZVwia1wiOmNhc2VcImtrXCI6cmV0dXJuIHMucyhTdHJpbmcoMD09PXQuJEg/MjQ6dC4kSCksXCJrXCI9PT1lPzE6MixcIjBcIik7Y2FzZVwiWFwiOnJldHVybiBNYXRoLmZsb29yKHQuJGQuZ2V0VGltZSgpLzFlMyk7Y2FzZVwieFwiOnJldHVybiB0LiRkLmdldFRpbWUoKTtjYXNlXCJ6XCI6cmV0dXJuXCJbXCIrdC5vZmZzZXROYW1lKCkrXCJdXCI7Y2FzZVwienp6XCI6cmV0dXJuXCJbXCIrdC5vZmZzZXROYW1lKFwibG9uZ1wiKStcIl1cIjtkZWZhdWx0OnJldHVybiBlfX0pKTtyZXR1cm4gbi5iaW5kKHRoaXMpKGEpfX19KSk7IiwgIiFmdW5jdGlvbihlLHQpe1wib2JqZWN0XCI9PXR5cGVvZiBleHBvcnRzJiZcInVuZGVmaW5lZFwiIT10eXBlb2YgbW9kdWxlP21vZHVsZS5leHBvcnRzPXQoKTpcImZ1bmN0aW9uXCI9PXR5cGVvZiBkZWZpbmUmJmRlZmluZS5hbWQ/ZGVmaW5lKHQpOihlPVwidW5kZWZpbmVkXCIhPXR5cGVvZiBnbG9iYWxUaGlzP2dsb2JhbFRoaXM6ZXx8c2VsZikuZGF5anNfcGx1Z2luX3dlZWtPZlllYXI9dCgpfSh0aGlzLChmdW5jdGlvbigpe1widXNlIHN0cmljdFwiO3ZhciBlPVwid2Vla1wiLHQ9XCJ5ZWFyXCI7cmV0dXJuIGZ1bmN0aW9uKGksbixyKXt2YXIgZj1uLnByb3RvdHlwZTtmLndlZWs9ZnVuY3Rpb24oaSl7aWYodm9pZCAwPT09aSYmKGk9bnVsbCksbnVsbCE9PWkpcmV0dXJuIHRoaXMuYWRkKDcqKGktdGhpcy53ZWVrKCkpLFwiZGF5XCIpO3ZhciBuPXRoaXMuJGxvY2FsZSgpLnllYXJTdGFydHx8MTtpZigxMT09PXRoaXMubW9udGgoKSYmdGhpcy5kYXRlKCk+MjUpe3ZhciBmPXIodGhpcykuc3RhcnRPZih0KS5hZGQoMSx0KS5kYXRlKG4pLHM9cih0aGlzKS5lbmRPZihlKTtpZihmLmlzQmVmb3JlKHMpKXJldHVybiAxfXZhciBhPXIodGhpcykuc3RhcnRPZih0KS5kYXRlKG4pLnN0YXJ0T2YoZSkuc3VidHJhY3QoMSxcIm1pbGxpc2Vjb25kXCIpLG89dGhpcy5kaWZmKGEsZSwhMCk7cmV0dXJuIG88MD9yKHRoaXMpLnN0YXJ0T2YoXCJ3ZWVrXCIpLndlZWsoKTpNYXRoLmNlaWwobyl9LGYud2Vla3M9ZnVuY3Rpb24oZSl7cmV0dXJuIHZvaWQgMD09PWUmJihlPW51bGwpLHRoaXMud2VlayhlKX19fSkpOyIsICIhZnVuY3Rpb24odCxpKXtcIm9iamVjdFwiPT10eXBlb2YgZXhwb3J0cyYmXCJ1bmRlZmluZWRcIiE9dHlwZW9mIG1vZHVsZT9tb2R1bGUuZXhwb3J0cz1pKCk6XCJmdW5jdGlvblwiPT10eXBlb2YgZGVmaW5lJiZkZWZpbmUuYW1kP2RlZmluZShpKToodD1cInVuZGVmaW5lZFwiIT10eXBlb2YgZ2xvYmFsVGhpcz9nbG9iYWxUaGlzOnR8fHNlbGYpLmRheWpzX3BsdWdpbl91dGM9aSgpfSh0aGlzLChmdW5jdGlvbigpe1widXNlIHN0cmljdFwiO3ZhciB0PVwibWludXRlXCIsaT0vWystXVxcZFxcZCg/Ojo/XFxkXFxkKT8vZyxlPS8oWystXXxcXGRcXGQpL2c7cmV0dXJuIGZ1bmN0aW9uKHMsZixuKXt2YXIgdT1mLnByb3RvdHlwZTtuLnV0Yz1mdW5jdGlvbih0KXt2YXIgaT17ZGF0ZTp0LHV0YzohMCxhcmdzOmFyZ3VtZW50c307cmV0dXJuIG5ldyBmKGkpfSx1LnV0Yz1mdW5jdGlvbihpKXt2YXIgZT1uKHRoaXMudG9EYXRlKCkse2xvY2FsZTp0aGlzLiRMLHV0YzohMH0pO3JldHVybiBpP2UuYWRkKHRoaXMudXRjT2Zmc2V0KCksdCk6ZX0sdS5sb2NhbD1mdW5jdGlvbigpe3JldHVybiBuKHRoaXMudG9EYXRlKCkse2xvY2FsZTp0aGlzLiRMLHV0YzohMX0pfTt2YXIgbz11LnBhcnNlO3UucGFyc2U9ZnVuY3Rpb24odCl7dC51dGMmJih0aGlzLiR1PSEwKSx0aGlzLiR1dGlscygpLnUodC4kb2Zmc2V0KXx8KHRoaXMuJG9mZnNldD10LiRvZmZzZXQpLG8uY2FsbCh0aGlzLHQpfTt2YXIgcj11LmluaXQ7dS5pbml0PWZ1bmN0aW9uKCl7aWYodGhpcy4kdSl7dmFyIHQ9dGhpcy4kZDt0aGlzLiR5PXQuZ2V0VVRDRnVsbFllYXIoKSx0aGlzLiRNPXQuZ2V0VVRDTW9udGgoKSx0aGlzLiREPXQuZ2V0VVRDRGF0ZSgpLHRoaXMuJFc9dC5nZXRVVENEYXkoKSx0aGlzLiRIPXQuZ2V0VVRDSG91cnMoKSx0aGlzLiRtPXQuZ2V0VVRDTWludXRlcygpLHRoaXMuJHM9dC5nZXRVVENTZWNvbmRzKCksdGhpcy4kbXM9dC5nZXRVVENNaWxsaXNlY29uZHMoKX1lbHNlIHIuY2FsbCh0aGlzKX07dmFyIGE9dS51dGNPZmZzZXQ7dS51dGNPZmZzZXQ9ZnVuY3Rpb24ocyxmKXt2YXIgbj10aGlzLiR1dGlscygpLnU7aWYobihzKSlyZXR1cm4gdGhpcy4kdT8wOm4odGhpcy4kb2Zmc2V0KT9hLmNhbGwodGhpcyk6dGhpcy4kb2Zmc2V0O2lmKFwic3RyaW5nXCI9PXR5cGVvZiBzJiYocz1mdW5jdGlvbih0KXt2b2lkIDA9PT10JiYodD1cIlwiKTt2YXIgcz10Lm1hdGNoKGkpO2lmKCFzKXJldHVybiBudWxsO3ZhciBmPShcIlwiK3NbMF0pLm1hdGNoKGUpfHxbXCItXCIsMCwwXSxuPWZbMF0sdT02MCorZlsxXSsgK2ZbMl07cmV0dXJuIDA9PT11PzA6XCIrXCI9PT1uP3U6LXV9KHMpLG51bGw9PT1zKSlyZXR1cm4gdGhpczt2YXIgdT1NYXRoLmFicyhzKTw9MTY/NjAqczpzLG89dGhpcztpZihmKXJldHVybiBvLiRvZmZzZXQ9dSxvLiR1PTA9PT1zLG87aWYoMCE9PXMpe3ZhciByPXRoaXMuJHU/dGhpcy50b0RhdGUoKS5nZXRUaW1lem9uZU9mZnNldCgpOi0xKnRoaXMudXRjT2Zmc2V0KCk7KG89dGhpcy5sb2NhbCgpLmFkZCh1K3IsdCkpLiRvZmZzZXQ9dSxvLiR4LiRsb2NhbE9mZnNldD1yfWVsc2Ugbz10aGlzLnV0YygpO3JldHVybiBvfTt2YXIgaD11LmZvcm1hdDt1LmZvcm1hdD1mdW5jdGlvbih0KXt2YXIgaT10fHwodGhpcy4kdT9cIllZWVktTU0tRERUSEg6bW06c3NbWl1cIjpcIlwiKTtyZXR1cm4gaC5jYWxsKHRoaXMsaSl9LHUudmFsdWVPZj1mdW5jdGlvbigpe3ZhciB0PXRoaXMuJHV0aWxzKCkudSh0aGlzLiRvZmZzZXQpPzA6dGhpcy4kb2Zmc2V0Kyh0aGlzLiR4LiRsb2NhbE9mZnNldHx8dGhpcy4kZC5nZXRUaW1lem9uZU9mZnNldCgpKTtyZXR1cm4gdGhpcy4kZC52YWx1ZU9mKCktNmU0KnR9LHUuaXNVVEM9ZnVuY3Rpb24oKXtyZXR1cm4hIXRoaXMuJHV9LHUudG9JU09TdHJpbmc9ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy50b0RhdGUoKS50b0lTT1N0cmluZygpfSx1LnRvU3RyaW5nPWZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMudG9EYXRlKCkudG9VVENTdHJpbmcoKX07dmFyIGw9dS50b0RhdGU7dS50b0RhdGU9ZnVuY3Rpb24odCl7cmV0dXJuXCJzXCI9PT10JiZ0aGlzLiRvZmZzZXQ/bih0aGlzLmZvcm1hdChcIllZWVktTU0tREQgSEg6bW06c3M6U1NTXCIpKS50b0RhdGUoKTpsLmNhbGwodGhpcyl9O3ZhciBjPXUuZGlmZjt1LmRpZmY9ZnVuY3Rpb24odCxpLGUpe2lmKHQmJnRoaXMuJHU9PT10LiR1KXJldHVybiBjLmNhbGwodGhpcyx0LGksZSk7dmFyIHM9dGhpcy5sb2NhbCgpLGY9bih0KS5sb2NhbCgpO3JldHVybiBjLmNhbGwocyxmLGksZSl9fX0pKTsiLCAiIWZ1bmN0aW9uKHQsZSl7XCJvYmplY3RcIj09dHlwZW9mIGV4cG9ydHMmJlwidW5kZWZpbmVkXCIhPXR5cGVvZiBtb2R1bGU/bW9kdWxlLmV4cG9ydHM9ZSgpOlwiZnVuY3Rpb25cIj09dHlwZW9mIGRlZmluZSYmZGVmaW5lLmFtZD9kZWZpbmUoZSk6KHQ9XCJ1bmRlZmluZWRcIiE9dHlwZW9mIGdsb2JhbFRoaXM/Z2xvYmFsVGhpczp0fHxzZWxmKS5kYXlqc19wbHVnaW5fdGltZXpvbmU9ZSgpfSh0aGlzLChmdW5jdGlvbigpe1widXNlIHN0cmljdFwiO3ZhciB0PXt5ZWFyOjAsbW9udGg6MSxkYXk6Mixob3VyOjMsbWludXRlOjQsc2Vjb25kOjV9LGU9e307cmV0dXJuIGZ1bmN0aW9uKG4saSxvKXt2YXIgcixhPWZ1bmN0aW9uKHQsbixpKXt2b2lkIDA9PT1pJiYoaT17fSk7dmFyIG89bmV3IERhdGUodCkscj1mdW5jdGlvbih0LG4pe3ZvaWQgMD09PW4mJihuPXt9KTt2YXIgaT1uLnRpbWVab25lTmFtZXx8XCJzaG9ydFwiLG89dCtcInxcIitpLHI9ZVtvXTtyZXR1cm4gcnx8KHI9bmV3IEludGwuRGF0ZVRpbWVGb3JtYXQoXCJlbi1VU1wiLHtob3VyMTI6ITEsdGltZVpvbmU6dCx5ZWFyOlwibnVtZXJpY1wiLG1vbnRoOlwiMi1kaWdpdFwiLGRheTpcIjItZGlnaXRcIixob3VyOlwiMi1kaWdpdFwiLG1pbnV0ZTpcIjItZGlnaXRcIixzZWNvbmQ6XCIyLWRpZ2l0XCIsdGltZVpvbmVOYW1lOml9KSxlW29dPXIpLHJ9KG4saSk7cmV0dXJuIHIuZm9ybWF0VG9QYXJ0cyhvKX0sdT1mdW5jdGlvbihlLG4pe2Zvcih2YXIgaT1hKGUsbikscj1bXSx1PTA7dTxpLmxlbmd0aDt1Kz0xKXt2YXIgZj1pW3VdLHM9Zi50eXBlLG09Zi52YWx1ZSxjPXRbc107Yz49MCYmKHJbY109cGFyc2VJbnQobSwxMCkpfXZhciBkPXJbM10sbD0yND09PWQ/MDpkLGg9clswXStcIi1cIityWzFdK1wiLVwiK3JbMl0rXCIgXCIrbCtcIjpcIityWzRdK1wiOlwiK3JbNV0rXCI6MDAwXCIsdj0rZTtyZXR1cm4oby51dGMoaCkudmFsdWVPZigpLSh2LT12JTFlMykpLzZlNH0sZj1pLnByb3RvdHlwZTtmLnR6PWZ1bmN0aW9uKHQsZSl7dm9pZCAwPT09dCYmKHQ9cik7dmFyIG4saT10aGlzLnV0Y09mZnNldCgpLGE9dGhpcy50b0RhdGUoKSx1PWEudG9Mb2NhbGVTdHJpbmcoXCJlbi1VU1wiLHt0aW1lWm9uZTp0fSksZj1NYXRoLnJvdW5kKChhLW5ldyBEYXRlKHUpKS8xZTMvNjApLHM9MTUqLU1hdGgucm91bmQoYS5nZXRUaW1lem9uZU9mZnNldCgpLzE1KS1mO2lmKCFOdW1iZXIocykpbj10aGlzLnV0Y09mZnNldCgwLGUpO2Vsc2UgaWYobj1vKHUse2xvY2FsZTp0aGlzLiRMfSkuJHNldChcIm1pbGxpc2Vjb25kXCIsdGhpcy4kbXMpLnV0Y09mZnNldChzLCEwKSxlKXt2YXIgbT1uLnV0Y09mZnNldCgpO249bi5hZGQoaS1tLFwibWludXRlXCIpfXJldHVybiBuLiR4LiR0aW1lem9uZT10LG59LGYub2Zmc2V0TmFtZT1mdW5jdGlvbih0KXt2YXIgZT10aGlzLiR4LiR0aW1lem9uZXx8by50ei5ndWVzcygpLG49YSh0aGlzLnZhbHVlT2YoKSxlLHt0aW1lWm9uZU5hbWU6dH0pLmZpbmQoKGZ1bmN0aW9uKHQpe3JldHVyblwidGltZXpvbmVuYW1lXCI9PT10LnR5cGUudG9Mb3dlckNhc2UoKX0pKTtyZXR1cm4gbiYmbi52YWx1ZX07dmFyIHM9Zi5zdGFydE9mO2Yuc3RhcnRPZj1mdW5jdGlvbih0LGUpe2lmKCF0aGlzLiR4fHwhdGhpcy4keC4kdGltZXpvbmUpcmV0dXJuIHMuY2FsbCh0aGlzLHQsZSk7dmFyIG49byh0aGlzLmZvcm1hdChcIllZWVktTU0tREQgSEg6bW06c3M6U1NTXCIpLHtsb2NhbGU6dGhpcy4kTH0pO3JldHVybiBzLmNhbGwobix0LGUpLnR6KHRoaXMuJHguJHRpbWV6b25lLCEwKX0sby50ej1mdW5jdGlvbih0LGUsbil7dmFyIGk9biYmZSxhPW58fGV8fHIsZj11KCtvKCksYSk7aWYoXCJzdHJpbmdcIiE9dHlwZW9mIHQpcmV0dXJuIG8odCkudHooYSk7dmFyIHM9ZnVuY3Rpb24odCxlLG4pe3ZhciBpPXQtNjAqZSoxZTMsbz11KGksbik7aWYoZT09PW8pcmV0dXJuW2ksZV07dmFyIHI9dShpLT02MCooby1lKSoxZTMsbik7cmV0dXJuIG89PT1yP1tpLG9dOlt0LTYwKk1hdGgubWluKG8scikqMWUzLE1hdGgubWF4KG8scildfShvLnV0Yyh0LGkpLnZhbHVlT2YoKSxmLGEpLG09c1swXSxjPXNbMV0sZD1vKG0pLnV0Y09mZnNldChjKTtyZXR1cm4gZC4keC4kdGltZXpvbmU9YSxkfSxvLnR6Lmd1ZXNzPWZ1bmN0aW9uKCl7cmV0dXJuIEludGwuRGF0ZVRpbWVGb3JtYXQoKS5yZXNvbHZlZE9wdGlvbnMoKS50aW1lWm9uZX0sby50ei5zZXREZWZhdWx0PWZ1bmN0aW9uKHQpe3I9dH19fSkpOyIsICIhZnVuY3Rpb24ocixlKXtcIm9iamVjdFwiPT10eXBlb2YgZXhwb3J0cyYmXCJ1bmRlZmluZWRcIiE9dHlwZW9mIG1vZHVsZT9tb2R1bGUuZXhwb3J0cz1lKCk6XCJmdW5jdGlvblwiPT10eXBlb2YgZGVmaW5lJiZkZWZpbmUuYW1kP2RlZmluZShlKToocj1cInVuZGVmaW5lZFwiIT10eXBlb2YgZ2xvYmFsVGhpcz9nbG9iYWxUaGlzOnJ8fHNlbGYpLmRheWpzX3BsdWdpbl9yZWxhdGl2ZVRpbWU9ZSgpfSh0aGlzLChmdW5jdGlvbigpe1widXNlIHN0cmljdFwiO3JldHVybiBmdW5jdGlvbihyLGUsdCl7cj1yfHx7fTt2YXIgbj1lLnByb3RvdHlwZSxvPXtmdXR1cmU6XCJpbiAlc1wiLHBhc3Q6XCIlcyBhZ29cIixzOlwiYSBmZXcgc2Vjb25kc1wiLG06XCJhIG1pbnV0ZVwiLG1tOlwiJWQgbWludXRlc1wiLGg6XCJhbiBob3VyXCIsaGg6XCIlZCBob3Vyc1wiLGQ6XCJhIGRheVwiLGRkOlwiJWQgZGF5c1wiLE06XCJhIG1vbnRoXCIsTU06XCIlZCBtb250aHNcIix5OlwiYSB5ZWFyXCIseXk6XCIlZCB5ZWFyc1wifTtmdW5jdGlvbiBpKHIsZSx0LG8pe3JldHVybiBuLmZyb21Ub0Jhc2UocixlLHQsbyl9dC5lbi5yZWxhdGl2ZVRpbWU9byxuLmZyb21Ub0Jhc2U9ZnVuY3Rpb24oZSxuLGksZCx1KXtmb3IodmFyIGYsYSxzLGw9aS4kbG9jYWxlKCkucmVsYXRpdmVUaW1lfHxvLGg9ci50aHJlc2hvbGRzfHxbe2w6XCJzXCIscjo0NCxkOlwic2Vjb25kXCJ9LHtsOlwibVwiLHI6ODl9LHtsOlwibW1cIixyOjQ0LGQ6XCJtaW51dGVcIn0se2w6XCJoXCIscjo4OX0se2w6XCJoaFwiLHI6MjEsZDpcImhvdXJcIn0se2w6XCJkXCIscjozNX0se2w6XCJkZFwiLHI6MjUsZDpcImRheVwifSx7bDpcIk1cIixyOjQ1fSx7bDpcIk1NXCIscjoxMCxkOlwibW9udGhcIn0se2w6XCJ5XCIscjoxN30se2w6XCJ5eVwiLGQ6XCJ5ZWFyXCJ9XSxtPWgubGVuZ3RoLGM9MDtjPG07Yys9MSl7dmFyIHk9aFtjXTt5LmQmJihmPWQ/dChlKS5kaWZmKGkseS5kLCEwKTppLmRpZmYoZSx5LmQsITApKTt2YXIgcD0oci5yb3VuZGluZ3x8TWF0aC5yb3VuZCkoTWF0aC5hYnMoZikpO2lmKHM9Zj4wLHA8PXkucnx8IXkucil7cDw9MSYmYz4wJiYoeT1oW2MtMV0pO3ZhciB2PWxbeS5sXTt1JiYocD11KFwiXCIrcCkpLGE9XCJzdHJpbmdcIj09dHlwZW9mIHY/di5yZXBsYWNlKFwiJWRcIixwKTp2KHAsbix5Lmwscyk7YnJlYWt9fWlmKG4pcmV0dXJuIGE7dmFyIE09cz9sLmZ1dHVyZTpsLnBhc3Q7cmV0dXJuXCJmdW5jdGlvblwiPT10eXBlb2YgTT9NKGEpOk0ucmVwbGFjZShcIiVzXCIsYSl9LG4udG89ZnVuY3Rpb24ocixlKXtyZXR1cm4gaShyLGUsdGhpcywhMCl9LG4uZnJvbT1mdW5jdGlvbihyLGUpe3JldHVybiBpKHIsZSx0aGlzKX07dmFyIGQ9ZnVuY3Rpb24ocil7cmV0dXJuIHIuJHU/dC51dGMoKTp0KCl9O24udG9Ob3c9ZnVuY3Rpb24ocil7cmV0dXJuIHRoaXMudG8oZCh0aGlzKSxyKX0sbi5mcm9tTm93PWZ1bmN0aW9uKHIpe3JldHVybiB0aGlzLmZyb20oZCh0aGlzKSxyKX19fSkpOyIsICJpbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgQWN0aW9uLCBBY3Rpb25QYW5lbCwgQ29sb3IsIExpc3QgfSBmcm9tIFwiQHJheWNhc3QvYXBpXCI7XG5pbXBvcnQgeyBwYXJzZURhdGUgfSBmcm9tIFwiY2hyb25vLW5vZGVcIjtcbmltcG9ydCBkYXlqcyBmcm9tIFwiZGF5anNcIjtcbmltcG9ydCBhZHZhbmNlZEZvcm1hdFBsdWdpbiBmcm9tIFwiZGF5anMvcGx1Z2luL2FkdmFuY2VkRm9ybWF0XCI7XG5pbXBvcnQgd2Vla09mWWVhclBsdWdpbiBmcm9tIFwiZGF5anMvcGx1Z2luL3dlZWtPZlllYXJcIjtcbmltcG9ydCB1dGNQbHVnaW4gZnJvbSBcImRheWpzL3BsdWdpbi91dGNcIjtcbmltcG9ydCB0aW1lem9uZVBsdWdpbiBmcm9tIFwiZGF5anMvcGx1Z2luL3RpbWV6b25lXCI7XG5pbXBvcnQgcmVsYXRpdmVUaW1lUGx1Z2luIGZyb20gXCJkYXlqcy9wbHVnaW4vcmVsYXRpdmVUaW1lXCI7XG5cbmRheWpzLmV4dGVuZChhZHZhbmNlZEZvcm1hdFBsdWdpbik7XG5kYXlqcy5leHRlbmQod2Vla09mWWVhclBsdWdpbik7XG5kYXlqcy5leHRlbmQodXRjUGx1Z2luKTtcbmRheWpzLmV4dGVuZCh0aW1lem9uZVBsdWdpbik7XG5kYXlqcy5leHRlbmQocmVsYXRpdmVUaW1lUGx1Z2luKTtcblxuZnVuY3Rpb24gaGFuZGxlQ29udmVyc2lvbihpbnB1dDogc3RyaW5nLCB0aW1lem9uZTogc3RyaW5nKSB7XG4gIGlmIChpbnB1dC5tYXRjaCgvXlxcZCskLykpIGlucHV0ID0gbmV3IERhdGUocGFyc2VJbnQoaW5wdXQsIDEwKSAqIDEwMDApLnRvU3RyaW5nKCk7XG4gIGNvbnN0IHBhcnNlZERhdGUgPSBwYXJzZURhdGUoaW5wdXQpO1xuICBpZiAoIXBhcnNlZERhdGUgfHwgcGFyc2VkRGF0ZS50b1N0cmluZygpID09PSBcIkludmFsaWQgRGF0ZVwiKSByZXR1cm4gW107XG5cbiAgY29uc3QgZGF0ZSA9IGRheWpzKHBhcnNlZERhdGUpLnR6KHRpbWV6b25lKTtcbiAgY29uc3QgZnJvbU5vdyA9IGRhdGUuZnJvbU5vdygpO1xuICByZXR1cm4gW1xuICAgIHsgbGFiZWw6IFwiVW5peCAocylcIiwgdmFsdWU6IGRhdGUudW5peCgpIH0sXG4gICAgeyBsYWJlbDogXCJVbml4IChtcylcIiwgdmFsdWU6IGRhdGUudmFsdWVPZigpIH0sXG4gICAgeyBsYWJlbDogXCJIdW1hbiBSZWFkYWJsZVwiLCB2YWx1ZTogZGF0ZS5mb3JtYXQoXCJNTU1NIERvLCBZWVlZIFthdF0gaGg6bW06c3MgQSAoenp6KVwiKSB9LFxuICAgIHsgbGFiZWw6IFwiRGF0ZVRpbWVcIiwgdmFsdWU6IGRhdGUuZm9ybWF0KFwiWVlZWS1NTS1ERCBISDptbTpzc1wiKSB9LFxuICAgIHsgbGFiZWw6IFwiVVRDXCIsIHZhbHVlOiBkYXRlLnRvU3RyaW5nKCkgfSxcbiAgICB7IGxhYmVsOiBcIklTTyA4NjAxXCIsIHZhbHVlOiBkYXRlLnRvSVNPU3RyaW5nKCkgfSxcbiAgICB7IGxhYmVsOiBcIldlZWsgb2YgWWVhclwiLCB2YWx1ZTogZGF0ZS5mb3JtYXQoXCJ3byBkZGRkIFtvZl0gWVlZWVwiKSB9LFxuICAgIHsgbGFiZWw6IFwiSW4gLyBBZ29cIiwgdmFsdWU6IFN0cmluZyhmcm9tTm93KS5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIFN0cmluZyhmcm9tTm93KS5zbGljZSgxKSB9LFxuICBdO1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBEYXRlVGltZSgpIHtcbiAgY29uc3QgW2lucHV0LCBzZXRJbnB1dF0gPSB1c2VTdGF0ZShcIm5vd1wiKTtcbiAgY29uc3QgW3RpbWV6b25lLCBzZXRUaW1lem9uZV0gPSB1c2VTdGF0ZShJbnRsLkRhdGVUaW1lRm9ybWF0KCkucmVzb2x2ZWRPcHRpb25zKCkudGltZVpvbmUpO1xuICBjb25zdCBbaXRlbXMsIHNldEl0ZW1zXSA9IHVzZVN0YXRlPHsgbGFiZWw6IHN0cmluZzsgdmFsdWU6IHN0cmluZyB8IG51bWJlciB9W10+KFtdKTtcblxuICBjb25zdCBvblRpbWV6b25lQ2hhbmdlID0gYXN5bmMgKHZhbHVlOiBzdHJpbmcpID0+IHtcbiAgICBzZXRUaW1lem9uZSh2YWx1ZSk7XG4gICAgc2V0SXRlbXMoaGFuZGxlQ29udmVyc2lvbihpbnB1dCwgdmFsdWUpKTtcbiAgfTtcblxuICBjb25zdCBvblNlYXJjaFRleHRDaGFuZ2UgPSBhc3luYyAodmFsdWU6IHN0cmluZykgPT4ge1xuICAgIHNldElucHV0KHZhbHVlKTtcbiAgICBzZXRJdGVtcyhoYW5kbGVDb252ZXJzaW9uKHZhbHVlLCB0aW1lem9uZSkpO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPExpc3RcbiAgICAgIHNlYXJjaEJhclBsYWNlaG9sZGVyPVwiRGF0ZVwiXG4gICAgICBmaWx0ZXJpbmc9e2ZhbHNlfVxuICAgICAgc2VhcmNoVGV4dD17aW5wdXR9XG4gICAgICBvblNlYXJjaFRleHRDaGFuZ2U9e29uU2VhcmNoVGV4dENoYW5nZX1cbiAgICAgIHNlYXJjaEJhckFjY2Vzc29yeT17XG4gICAgICAgIDxMaXN0LkRyb3Bkb3duIHRvb2x0aXA9XCJUaW1lem9uZVwiIG9uQ2hhbmdlPXtvblRpbWV6b25lQ2hhbmdlfSBkZWZhdWx0VmFsdWU9e3RpbWV6b25lfT5cbiAgICAgICAgICB7SW50bC5zdXBwb3J0ZWRWYWx1ZXNPZihcInRpbWVab25lXCIpLm1hcCgoem9uZSwgaW5kZXgpID0+IChcbiAgICAgICAgICAgIDxMaXN0LkRyb3Bkb3duLkl0ZW0ga2V5PXtpbmRleH0gdmFsdWU9e3pvbmV9IHRpdGxlPXt6b25lfSAvPlxuICAgICAgICAgICkpfVxuICAgICAgICA8L0xpc3QuRHJvcGRvd24+XG4gICAgICB9XG4gICAgPlxuICAgICAge2l0ZW1zLm1hcCgoaXRlbSwgaW5kZXgpID0+IChcbiAgICAgICAgPExpc3QuSXRlbVxuICAgICAgICAgIGtleT17aW5kZXh9XG4gICAgICAgICAgdGl0bGU9e1N0cmluZyhpdGVtLnZhbHVlKX1cbiAgICAgICAgICBhY2Nlc3Nvcmllcz17W3sgdGFnOiB7IHZhbHVlOiBpdGVtLmxhYmVsLCBjb2xvcjogQ29sb3IuU2Vjb25kYXJ5VGV4dCB9IH1dfVxuICAgICAgICAgIGFjdGlvbnM9e1xuICAgICAgICAgICAgPEFjdGlvblBhbmVsPlxuICAgICAgICAgICAgICA8QWN0aW9uLkNvcHlUb0NsaXBib2FyZCBjb250ZW50PXtpdGVtLnZhbHVlfSAvPlxuICAgICAgICAgICAgICA8QWN0aW9uLlBhc3RlIGNvbnRlbnQ9e2l0ZW0udmFsdWV9IC8+XG4gICAgICAgICAgICA8L0FjdGlvblBhbmVsPlxuICAgICAgICAgIH1cbiAgICAgICAgLz5cbiAgICAgICkpfVxuICAgIDwvTGlzdD5cbiAgKTtcbn1cbiIsICJpbXBvcnQgeyBDb21wb25lbnQsIFBhcnNlZENvbXBvbmVudHMsIFBhcnNlZFJlc3VsdCwgUGFyc2luZ1JlZmVyZW5jZSB9IGZyb20gXCIuL3R5cGVzXCI7XG5cbmltcG9ydCBxdWFydGVyT2ZZZWFyIGZyb20gXCJkYXlqcy9wbHVnaW4vcXVhcnRlck9mWWVhclwiO1xuaW1wb3J0IGRheWpzLCB7IFFVbml0VHlwZSB9IGZyb20gXCJkYXlqc1wiO1xuaW1wb3J0IHsgYXNzaWduU2ltaWxhckRhdGUsIGFzc2lnblNpbWlsYXJUaW1lLCBpbXBseVNpbWlsYXJUaW1lIH0gZnJvbSBcIi4vdXRpbHMvZGF5anNcIjtcbmltcG9ydCB7IHRvVGltZXpvbmVPZmZzZXQgfSBmcm9tIFwiLi90aW1lem9uZVwiO1xuZGF5anMuZXh0ZW5kKHF1YXJ0ZXJPZlllYXIpO1xuXG5leHBvcnQgY2xhc3MgUmVmZXJlbmNlV2l0aFRpbWV6b25lIHtcbiAgICByZWFkb25seSBpbnN0YW50OiBEYXRlO1xuICAgIHJlYWRvbmx5IHRpbWV6b25lT2Zmc2V0PzogbnVtYmVyIHwgbnVsbDtcblxuICAgIGNvbnN0cnVjdG9yKGlucHV0PzogUGFyc2luZ1JlZmVyZW5jZSB8IERhdGUpIHtcbiAgICAgICAgaW5wdXQgPSBpbnB1dCA/PyBuZXcgRGF0ZSgpO1xuICAgICAgICBpZiAoaW5wdXQgaW5zdGFuY2VvZiBEYXRlKSB7XG4gICAgICAgICAgICB0aGlzLmluc3RhbnQgPSBpbnB1dDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuaW5zdGFudCA9IGlucHV0Lmluc3RhbnQgPz8gbmV3IERhdGUoKTtcbiAgICAgICAgICAgIHRoaXMudGltZXpvbmVPZmZzZXQgPSB0b1RpbWV6b25lT2Zmc2V0KGlucHV0LnRpbWV6b25lLCB0aGlzLmluc3RhbnQpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyBhIEpTIGRhdGUgKHN5c3RlbSB0aW1lem9uZSkgd2l0aCB0aGUgeyB5ZWFyLCBtb250aCwgZGF5LCBob3VyLCBtaW51dGUsIHNlY29uZCB9IGVxdWFsIHRvIHRoZSByZWZlcmVuY2UuXG4gICAgICogVGhlIG91dHB1dCdzIGluc3RhbnQgaXMgTk9UIHRoZSByZWZlcmVuY2UncyBpbnN0YW50IHdoZW4gdGhlIHJlZmVyZW5jZSdzIGFuZCBzeXN0ZW0ncyB0aW1lem9uZSBhcmUgZGlmZmVyZW50LlxuICAgICAqL1xuICAgIGdldERhdGVXaXRoQWRqdXN0ZWRUaW1lem9uZSgpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBEYXRlKHRoaXMuaW5zdGFudC5nZXRUaW1lKCkgKyB0aGlzLmdldFN5c3RlbVRpbWV6b25lQWRqdXN0bWVudE1pbnV0ZSh0aGlzLmluc3RhbnQpICogNjAwMDApO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgdGhlIG51bWJlciBtaW51dGVzIGRpZmZlcmVuY2UgYmV0d2VlbiB0aGUgSlMgZGF0ZSdzIHRpbWV6b25lIGFuZCB0aGUgcmVmZXJlbmNlIHRpbWV6b25lLlxuICAgICAqIEBwYXJhbSBkYXRlXG4gICAgICogQHBhcmFtIG92ZXJyaWRlVGltZXpvbmVPZmZzZXRcbiAgICAgKi9cbiAgICBnZXRTeXN0ZW1UaW1lem9uZUFkanVzdG1lbnRNaW51dGUoZGF0ZT86IERhdGUsIG92ZXJyaWRlVGltZXpvbmVPZmZzZXQ/OiBudW1iZXIpOiBudW1iZXIge1xuICAgICAgICBpZiAoIWRhdGUgfHwgZGF0ZS5nZXRUaW1lKCkgPCAwKSB7XG4gICAgICAgICAgICAvLyBKYXZhc2NyaXB0IGRhdGUgdGltZXpvbmUgY2FsY3VsYXRpb24gZ290IGVmZmVjdCB3aGVuIHRoZSB0aW1lIGVwb2NoIDwgMFxuICAgICAgICAgICAgLy8gZS5nLiBuZXcgRGF0ZSgnVHVlIEZlYiAwMiAxMzAwIDAwOjAwOjAwIEdNVCswOTAwIChKU1QpJykgPT4gVHVlIEZlYiAwMiAxMzAwIDAwOjE4OjU5IEdNVCswOTE4IChKU1QpXG4gICAgICAgICAgICBkYXRlID0gbmV3IERhdGUoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGN1cnJlbnRUaW1lem9uZU9mZnNldCA9IC1kYXRlLmdldFRpbWV6b25lT2Zmc2V0KCk7XG4gICAgICAgIGNvbnN0IHRhcmdldFRpbWV6b25lT2Zmc2V0ID0gb3ZlcnJpZGVUaW1lem9uZU9mZnNldCA/PyB0aGlzLnRpbWV6b25lT2Zmc2V0ID8/IGN1cnJlbnRUaW1lem9uZU9mZnNldDtcbiAgICAgICAgcmV0dXJuIGN1cnJlbnRUaW1lem9uZU9mZnNldCAtIHRhcmdldFRpbWV6b25lT2Zmc2V0O1xuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIFBhcnNpbmdDb21wb25lbnRzIGltcGxlbWVudHMgUGFyc2VkQ29tcG9uZW50cyB7XG4gICAgcHJpdmF0ZSBrbm93blZhbHVlczogeyBbYyBpbiBDb21wb25lbnRdPzogbnVtYmVyIH07XG4gICAgcHJpdmF0ZSBpbXBsaWVkVmFsdWVzOiB7IFtjIGluIENvbXBvbmVudF0/OiBudW1iZXIgfTtcbiAgICBwcml2YXRlIHJlZmVyZW5jZTogUmVmZXJlbmNlV2l0aFRpbWV6b25lO1xuICAgIHByaXZhdGUgX3RhZ3MgPSBuZXcgU2V0PHN0cmluZz4oKTtcblxuICAgIGNvbnN0cnVjdG9yKHJlZmVyZW5jZTogUmVmZXJlbmNlV2l0aFRpbWV6b25lLCBrbm93bkNvbXBvbmVudHM/OiB7IFtjIGluIENvbXBvbmVudF0/OiBudW1iZXIgfSkge1xuICAgICAgICB0aGlzLnJlZmVyZW5jZSA9IHJlZmVyZW5jZTtcbiAgICAgICAgdGhpcy5rbm93blZhbHVlcyA9IHt9O1xuICAgICAgICB0aGlzLmltcGxpZWRWYWx1ZXMgPSB7fTtcbiAgICAgICAgaWYgKGtub3duQ29tcG9uZW50cykge1xuICAgICAgICAgICAgZm9yIChjb25zdCBrZXkgaW4ga25vd25Db21wb25lbnRzKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5rbm93blZhbHVlc1trZXkgYXMgQ29tcG9uZW50XSA9IGtub3duQ29tcG9uZW50c1trZXkgYXMgQ29tcG9uZW50XTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHJlZkRheUpzID0gZGF5anMocmVmZXJlbmNlLmluc3RhbnQpO1xuICAgICAgICB0aGlzLmltcGx5KFwiZGF5XCIsIHJlZkRheUpzLmRhdGUoKSk7XG4gICAgICAgIHRoaXMuaW1wbHkoXCJtb250aFwiLCByZWZEYXlKcy5tb250aCgpICsgMSk7XG4gICAgICAgIHRoaXMuaW1wbHkoXCJ5ZWFyXCIsIHJlZkRheUpzLnllYXIoKSk7XG4gICAgICAgIHRoaXMuaW1wbHkoXCJob3VyXCIsIDEyKTtcbiAgICAgICAgdGhpcy5pbXBseShcIm1pbnV0ZVwiLCAwKTtcbiAgICAgICAgdGhpcy5pbXBseShcInNlY29uZFwiLCAwKTtcbiAgICAgICAgdGhpcy5pbXBseShcIm1pbGxpc2Vjb25kXCIsIDApO1xuICAgIH1cblxuICAgIGdldChjb21wb25lbnQ6IENvbXBvbmVudCk6IG51bWJlciB8IG51bGwge1xuICAgICAgICBpZiAoY29tcG9uZW50IGluIHRoaXMua25vd25WYWx1ZXMpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmtub3duVmFsdWVzW2NvbXBvbmVudF07XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoY29tcG9uZW50IGluIHRoaXMuaW1wbGllZFZhbHVlcykge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuaW1wbGllZFZhbHVlc1tjb21wb25lbnRdO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgaXNDZXJ0YWluKGNvbXBvbmVudDogQ29tcG9uZW50KTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiBjb21wb25lbnQgaW4gdGhpcy5rbm93blZhbHVlcztcbiAgICB9XG5cbiAgICBnZXRDZXJ0YWluQ29tcG9uZW50cygpOiBBcnJheTxDb21wb25lbnQ+IHtcbiAgICAgICAgcmV0dXJuIE9iamVjdC5rZXlzKHRoaXMua25vd25WYWx1ZXMpIGFzIEFycmF5PENvbXBvbmVudD47XG4gICAgfVxuXG4gICAgaW1wbHkoY29tcG9uZW50OiBDb21wb25lbnQsIHZhbHVlOiBudW1iZXIpOiBQYXJzaW5nQ29tcG9uZW50cyB7XG4gICAgICAgIGlmIChjb21wb25lbnQgaW4gdGhpcy5rbm93blZhbHVlcykge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5pbXBsaWVkVmFsdWVzW2NvbXBvbmVudF0gPSB2YWx1ZTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgYXNzaWduKGNvbXBvbmVudDogQ29tcG9uZW50LCB2YWx1ZTogbnVtYmVyKTogUGFyc2luZ0NvbXBvbmVudHMge1xuICAgICAgICB0aGlzLmtub3duVmFsdWVzW2NvbXBvbmVudF0gPSB2YWx1ZTtcbiAgICAgICAgZGVsZXRlIHRoaXMuaW1wbGllZFZhbHVlc1tjb21wb25lbnRdO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBkZWxldGUoY29tcG9uZW50OiBDb21wb25lbnQpIHtcbiAgICAgICAgZGVsZXRlIHRoaXMua25vd25WYWx1ZXNbY29tcG9uZW50XTtcbiAgICAgICAgZGVsZXRlIHRoaXMuaW1wbGllZFZhbHVlc1tjb21wb25lbnRdO1xuICAgIH1cblxuICAgIGNsb25lKCk6IFBhcnNpbmdDb21wb25lbnRzIHtcbiAgICAgICAgY29uc3QgY29tcG9uZW50ID0gbmV3IFBhcnNpbmdDb21wb25lbnRzKHRoaXMucmVmZXJlbmNlKTtcbiAgICAgICAgY29tcG9uZW50Lmtub3duVmFsdWVzID0ge307XG4gICAgICAgIGNvbXBvbmVudC5pbXBsaWVkVmFsdWVzID0ge307XG5cbiAgICAgICAgZm9yIChjb25zdCBrZXkgaW4gdGhpcy5rbm93blZhbHVlcykge1xuICAgICAgICAgICAgY29tcG9uZW50Lmtub3duVmFsdWVzW2tleSBhcyBDb21wb25lbnRdID0gdGhpcy5rbm93blZhbHVlc1trZXkgYXMgQ29tcG9uZW50XTtcbiAgICAgICAgfVxuXG4gICAgICAgIGZvciAoY29uc3Qga2V5IGluIHRoaXMuaW1wbGllZFZhbHVlcykge1xuICAgICAgICAgICAgY29tcG9uZW50LmltcGxpZWRWYWx1ZXNba2V5IGFzIENvbXBvbmVudF0gPSB0aGlzLmltcGxpZWRWYWx1ZXNba2V5IGFzIENvbXBvbmVudF07XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gY29tcG9uZW50O1xuICAgIH1cblxuICAgIGlzT25seURhdGUoKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiAhdGhpcy5pc0NlcnRhaW4oXCJob3VyXCIpICYmICF0aGlzLmlzQ2VydGFpbihcIm1pbnV0ZVwiKSAmJiAhdGhpcy5pc0NlcnRhaW4oXCJzZWNvbmRcIik7XG4gICAgfVxuXG4gICAgaXNPbmx5VGltZSgpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICF0aGlzLmlzQ2VydGFpbihcIndlZWtkYXlcIikgJiYgIXRoaXMuaXNDZXJ0YWluKFwiZGF5XCIpICYmICF0aGlzLmlzQ2VydGFpbihcIm1vbnRoXCIpICYmICF0aGlzLmlzQ2VydGFpbihcInllYXJcIilcbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICBpc09ubHlXZWVrZGF5Q29tcG9uZW50KCk6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gdGhpcy5pc0NlcnRhaW4oXCJ3ZWVrZGF5XCIpICYmICF0aGlzLmlzQ2VydGFpbihcImRheVwiKSAmJiAhdGhpcy5pc0NlcnRhaW4oXCJtb250aFwiKTtcbiAgICB9XG5cbiAgICBpc0RhdGVXaXRoVW5rbm93blllYXIoKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiB0aGlzLmlzQ2VydGFpbihcIm1vbnRoXCIpICYmICF0aGlzLmlzQ2VydGFpbihcInllYXJcIik7XG4gICAgfVxuXG4gICAgaXNWYWxpZERhdGUoKTogYm9vbGVhbiB7XG4gICAgICAgIGNvbnN0IGRhdGUgPSB0aGlzLmRhdGVXaXRob3V0VGltZXpvbmVBZGp1c3RtZW50KCk7XG5cbiAgICAgICAgaWYgKGRhdGUuZ2V0RnVsbFllYXIoKSAhPT0gdGhpcy5nZXQoXCJ5ZWFyXCIpKSByZXR1cm4gZmFsc2U7XG4gICAgICAgIGlmIChkYXRlLmdldE1vbnRoKCkgIT09IHRoaXMuZ2V0KFwibW9udGhcIikgLSAxKSByZXR1cm4gZmFsc2U7XG4gICAgICAgIGlmIChkYXRlLmdldERhdGUoKSAhPT0gdGhpcy5nZXQoXCJkYXlcIikpIHJldHVybiBmYWxzZTtcbiAgICAgICAgaWYgKHRoaXMuZ2V0KFwiaG91clwiKSAhPSBudWxsICYmIGRhdGUuZ2V0SG91cnMoKSAhPSB0aGlzLmdldChcImhvdXJcIikpIHJldHVybiBmYWxzZTtcbiAgICAgICAgaWYgKHRoaXMuZ2V0KFwibWludXRlXCIpICE9IG51bGwgJiYgZGF0ZS5nZXRNaW51dGVzKCkgIT0gdGhpcy5nZXQoXCJtaW51dGVcIikpIHJldHVybiBmYWxzZTtcblxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICB0b1N0cmluZygpIHtcbiAgICAgICAgcmV0dXJuIGBbUGFyc2luZ0NvbXBvbmVudHMge1xuICAgICAgICAgICAgdGFnczogJHtKU09OLnN0cmluZ2lmeShBcnJheS5mcm9tKHRoaXMuX3RhZ3MpLnNvcnQoKSl9LCBcbiAgICAgICAgICAgIGtub3duVmFsdWVzOiAke0pTT04uc3RyaW5naWZ5KHRoaXMua25vd25WYWx1ZXMpfSwgXG4gICAgICAgICAgICBpbXBsaWVkVmFsdWVzOiAke0pTT04uc3RyaW5naWZ5KHRoaXMuaW1wbGllZFZhbHVlcyl9fSwgXG4gICAgICAgICAgICByZWZlcmVuY2U6ICR7SlNPTi5zdHJpbmdpZnkodGhpcy5yZWZlcmVuY2UpfV1gO1xuICAgIH1cblxuICAgIGRheWpzKCkge1xuICAgICAgICByZXR1cm4gZGF5anModGhpcy5kYXRlKCkpO1xuICAgIH1cblxuICAgIGRhdGUoKTogRGF0ZSB7XG4gICAgICAgIGNvbnN0IGRhdGUgPSB0aGlzLmRhdGVXaXRob3V0VGltZXpvbmVBZGp1c3RtZW50KCk7XG4gICAgICAgIGNvbnN0IHRpbWV6b25lQWRqdXN0bWVudCA9IHRoaXMucmVmZXJlbmNlLmdldFN5c3RlbVRpbWV6b25lQWRqdXN0bWVudE1pbnV0ZShkYXRlLCB0aGlzLmdldChcInRpbWV6b25lT2Zmc2V0XCIpKTtcbiAgICAgICAgcmV0dXJuIG5ldyBEYXRlKGRhdGUuZ2V0VGltZSgpICsgdGltZXpvbmVBZGp1c3RtZW50ICogNjAwMDApO1xuICAgIH1cblxuICAgIGFkZFRhZyh0YWc6IHN0cmluZyk6IFBhcnNpbmdDb21wb25lbnRzIHtcbiAgICAgICAgdGhpcy5fdGFncy5hZGQodGFnKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgYWRkVGFncyh0YWdzOiBzdHJpbmdbXSB8IFNldDxzdHJpbmc+KTogUGFyc2luZ0NvbXBvbmVudHMge1xuICAgICAgICBmb3IgKGNvbnN0IHRhZyBvZiB0YWdzKSB7XG4gICAgICAgICAgICB0aGlzLl90YWdzLmFkZCh0YWcpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIHRhZ3MoKTogU2V0PHN0cmluZz4ge1xuICAgICAgICByZXR1cm4gbmV3IFNldCh0aGlzLl90YWdzKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGRhdGVXaXRob3V0VGltZXpvbmVBZGp1c3RtZW50KCkge1xuICAgICAgICBjb25zdCBkYXRlID0gbmV3IERhdGUoXG4gICAgICAgICAgICB0aGlzLmdldChcInllYXJcIiksXG4gICAgICAgICAgICB0aGlzLmdldChcIm1vbnRoXCIpIC0gMSxcbiAgICAgICAgICAgIHRoaXMuZ2V0KFwiZGF5XCIpLFxuICAgICAgICAgICAgdGhpcy5nZXQoXCJob3VyXCIpLFxuICAgICAgICAgICAgdGhpcy5nZXQoXCJtaW51dGVcIiksXG4gICAgICAgICAgICB0aGlzLmdldChcInNlY29uZFwiKSxcbiAgICAgICAgICAgIHRoaXMuZ2V0KFwibWlsbGlzZWNvbmRcIilcbiAgICAgICAgKTtcblxuICAgICAgICBkYXRlLnNldEZ1bGxZZWFyKHRoaXMuZ2V0KFwieWVhclwiKSk7XG4gICAgICAgIHJldHVybiBkYXRlO1xuICAgIH1cblxuICAgIHN0YXRpYyBjcmVhdGVSZWxhdGl2ZUZyb21SZWZlcmVuY2UoXG4gICAgICAgIHJlZmVyZW5jZTogUmVmZXJlbmNlV2l0aFRpbWV6b25lLFxuICAgICAgICBmcmFnbWVudHM6IHsgW2MgaW4gUVVuaXRUeXBlXT86IG51bWJlciB9XG4gICAgKTogUGFyc2luZ0NvbXBvbmVudHMge1xuICAgICAgICBsZXQgZGF0ZSA9IGRheWpzKHJlZmVyZW5jZS5pbnN0YW50KTtcbiAgICAgICAgZm9yIChjb25zdCBrZXkgaW4gZnJhZ21lbnRzKSB7XG4gICAgICAgICAgICBkYXRlID0gZGF0ZS5hZGQoZnJhZ21lbnRzW2tleSBhcyBRVW5pdFR5cGVdLCBrZXkgYXMgUVVuaXRUeXBlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGNvbXBvbmVudHMgPSBuZXcgUGFyc2luZ0NvbXBvbmVudHMocmVmZXJlbmNlKTtcbiAgICAgICAgY29tcG9uZW50cy5hZGRUYWcoXCJyZXN1bHQvcmVsYXRpdmVEYXRlXCIpO1xuICAgICAgICBpZiAoZnJhZ21lbnRzW1wiaG91clwiXSB8fCBmcmFnbWVudHNbXCJtaW51dGVcIl0gfHwgZnJhZ21lbnRzW1wic2Vjb25kXCJdKSB7XG4gICAgICAgICAgICBjb21wb25lbnRzLmFkZFRhZyhcInJlc3VsdC9yZWxhdGl2ZURhdGVBbmRUaW1lXCIpO1xuICAgICAgICAgICAgYXNzaWduU2ltaWxhclRpbWUoY29tcG9uZW50cywgZGF0ZSk7XG4gICAgICAgICAgICBhc3NpZ25TaW1pbGFyRGF0ZShjb21wb25lbnRzLCBkYXRlKTtcbiAgICAgICAgICAgIGlmIChyZWZlcmVuY2UudGltZXpvbmVPZmZzZXQgIT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICBjb21wb25lbnRzLmFzc2lnbihcInRpbWV6b25lT2Zmc2V0XCIsIC1yZWZlcmVuY2UuaW5zdGFudC5nZXRUaW1lem9uZU9mZnNldCgpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGltcGx5U2ltaWxhclRpbWUoY29tcG9uZW50cywgZGF0ZSk7XG4gICAgICAgICAgICBpZiAocmVmZXJlbmNlLnRpbWV6b25lT2Zmc2V0ICE9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgY29tcG9uZW50cy5pbXBseShcInRpbWV6b25lT2Zmc2V0XCIsIC1yZWZlcmVuY2UuaW5zdGFudC5nZXRUaW1lem9uZU9mZnNldCgpKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKGZyYWdtZW50c1tcImRcIl0pIHtcbiAgICAgICAgICAgICAgICBjb21wb25lbnRzLmFzc2lnbihcImRheVwiLCBkYXRlLmRhdGUoKSk7XG4gICAgICAgICAgICAgICAgY29tcG9uZW50cy5hc3NpZ24oXCJtb250aFwiLCBkYXRlLm1vbnRoKCkgKyAxKTtcbiAgICAgICAgICAgICAgICBjb21wb25lbnRzLmFzc2lnbihcInllYXJcIiwgZGF0ZS55ZWFyKCkpO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChmcmFnbWVudHNbXCJ3ZWVrXCJdKSB7XG4gICAgICAgICAgICAgICAgY29tcG9uZW50cy5hc3NpZ24oXCJkYXlcIiwgZGF0ZS5kYXRlKCkpO1xuICAgICAgICAgICAgICAgIGNvbXBvbmVudHMuYXNzaWduKFwibW9udGhcIiwgZGF0ZS5tb250aCgpICsgMSk7XG4gICAgICAgICAgICAgICAgY29tcG9uZW50cy5hc3NpZ24oXCJ5ZWFyXCIsIGRhdGUueWVhcigpKTtcbiAgICAgICAgICAgICAgICBjb21wb25lbnRzLmltcGx5KFwid2Vla2RheVwiLCBkYXRlLmRheSgpKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgY29tcG9uZW50cy5pbXBseShcImRheVwiLCBkYXRlLmRhdGUoKSk7XG4gICAgICAgICAgICAgICAgaWYgKGZyYWdtZW50c1tcIm1vbnRoXCJdKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudHMuYXNzaWduKFwibW9udGhcIiwgZGF0ZS5tb250aCgpICsgMSk7XG4gICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudHMuYXNzaWduKFwieWVhclwiLCBkYXRlLnllYXIoKSk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50cy5pbXBseShcIm1vbnRoXCIsIGRhdGUubW9udGgoKSArIDEpO1xuICAgICAgICAgICAgICAgICAgICBpZiAoZnJhZ21lbnRzW1wieWVhclwiXSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50cy5hc3NpZ24oXCJ5ZWFyXCIsIGRhdGUueWVhcigpKTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudHMuaW1wbHkoXCJ5ZWFyXCIsIGRhdGUueWVhcigpKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBjb21wb25lbnRzO1xuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIFBhcnNpbmdSZXN1bHQgaW1wbGVtZW50cyBQYXJzZWRSZXN1bHQge1xuICAgIHJlZkRhdGU6IERhdGU7XG4gICAgaW5kZXg6IG51bWJlcjtcbiAgICB0ZXh0OiBzdHJpbmc7XG5cbiAgICByZWZlcmVuY2U6IFJlZmVyZW5jZVdpdGhUaW1lem9uZTtcblxuICAgIHN0YXJ0OiBQYXJzaW5nQ29tcG9uZW50cztcbiAgICBlbmQ/OiBQYXJzaW5nQ29tcG9uZW50cztcblxuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICByZWZlcmVuY2U6IFJlZmVyZW5jZVdpdGhUaW1lem9uZSxcbiAgICAgICAgaW5kZXg6IG51bWJlcixcbiAgICAgICAgdGV4dDogc3RyaW5nLFxuICAgICAgICBzdGFydD86IFBhcnNpbmdDb21wb25lbnRzLFxuICAgICAgICBlbmQ/OiBQYXJzaW5nQ29tcG9uZW50c1xuICAgICkge1xuICAgICAgICB0aGlzLnJlZmVyZW5jZSA9IHJlZmVyZW5jZTtcbiAgICAgICAgdGhpcy5yZWZEYXRlID0gcmVmZXJlbmNlLmluc3RhbnQ7XG4gICAgICAgIHRoaXMuaW5kZXggPSBpbmRleDtcbiAgICAgICAgdGhpcy50ZXh0ID0gdGV4dDtcbiAgICAgICAgdGhpcy5zdGFydCA9IHN0YXJ0IHx8IG5ldyBQYXJzaW5nQ29tcG9uZW50cyhyZWZlcmVuY2UpO1xuICAgICAgICB0aGlzLmVuZCA9IGVuZDtcbiAgICB9XG5cbiAgICBjbG9uZSgpIHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gbmV3IFBhcnNpbmdSZXN1bHQodGhpcy5yZWZlcmVuY2UsIHRoaXMuaW5kZXgsIHRoaXMudGV4dCk7XG4gICAgICAgIHJlc3VsdC5zdGFydCA9IHRoaXMuc3RhcnQgPyB0aGlzLnN0YXJ0LmNsb25lKCkgOiBudWxsO1xuICAgICAgICByZXN1bHQuZW5kID0gdGhpcy5lbmQgPyB0aGlzLmVuZC5jbG9uZSgpIDogbnVsbDtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG5cbiAgICBkYXRlKCk6IERhdGUge1xuICAgICAgICByZXR1cm4gdGhpcy5zdGFydC5kYXRlKCk7XG4gICAgfVxuXG4gICAgYWRkVGFnKHRhZzogc3RyaW5nKTogUGFyc2luZ1Jlc3VsdCB7XG4gICAgICAgIHRoaXMuc3RhcnQuYWRkVGFnKHRhZyk7XG4gICAgICAgIGlmICh0aGlzLmVuZCkge1xuICAgICAgICAgICAgdGhpcy5lbmQuYWRkVGFnKHRhZyk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgYWRkVGFncyh0YWdzOiBzdHJpbmdbXSB8IFNldDxzdHJpbmc+KTogUGFyc2luZ1Jlc3VsdCB7XG4gICAgICAgIHRoaXMuc3RhcnQuYWRkVGFncyh0YWdzKTtcbiAgICAgICAgaWYgKHRoaXMuZW5kKSB7XG4gICAgICAgICAgICB0aGlzLmVuZC5hZGRUYWdzKHRhZ3MpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIHRhZ3MoKTogU2V0PHN0cmluZz4ge1xuICAgICAgICBjb25zdCBjb21iaW5lZFRhZ3M6IFNldDxzdHJpbmc+ID0gbmV3IFNldCh0aGlzLnN0YXJ0LnRhZ3MoKSk7XG4gICAgICAgIGlmICh0aGlzLmVuZCkge1xuICAgICAgICAgICAgZm9yIChjb25zdCB0YWcgb2YgdGhpcy5lbmQudGFncygpKSB7XG4gICAgICAgICAgICAgICAgY29tYmluZWRUYWdzLmFkZCh0YWcpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBjb21iaW5lZFRhZ3M7XG4gICAgfVxuXG4gICAgdG9TdHJpbmcoKSB7XG4gICAgICAgIGNvbnN0IHRhZ3MgPSBBcnJheS5mcm9tKHRoaXMudGFncygpKS5zb3J0KCk7XG4gICAgICAgIHJldHVybiBgW1BhcnNpbmdSZXN1bHQge2luZGV4OiAke3RoaXMuaW5kZXh9LCB0ZXh0OiAnJHt0aGlzLnRleHR9JywgdGFnczogJHtKU09OLnN0cmluZ2lmeSh0YWdzKX0gLi4ufV1gO1xuICAgIH1cbn1cbiIsICJpbXBvcnQgeyBEZWJ1Z0NvbnN1bWUsIERlYnVnSGFuZGxlciB9IGZyb20gXCIuL2RlYnVnZ2luZ1wiO1xuXG5leHBvcnQgaW50ZXJmYWNlIFBhcnNpbmdPcHRpb24ge1xuICAgIC8qKlxuICAgICAqIFRvIHBhcnNlIG9ubHkgZm9yd2FyZCBkYXRlcyAodGhlIHJlc3VsdHMgc2hvdWxkIGJlIGFmdGVyIHRoZSByZWZlcmVuY2UgZGF0ZSkuXG4gICAgICogVGhpcyBlZmZlY3RzIGRhdGUvdGltZSBpbXBsaWNhdGlvbiAoZS5nLiB3ZWVrZGF5IG9yIHRpbWUgbWVudGlvbmluZylcbiAgICAgKi9cbiAgICBmb3J3YXJkRGF0ZT86IGJvb2xlYW47XG5cbiAgICAvKipcbiAgICAgKiBBZGRpdGlvbmFsIHRpbWV6b25lIGtleXdvcmRzIGZvciB0aGUgcGFyc2VycyB0byByZWNvZ25pemUuXG4gICAgICogQW55IHZhbHVlIHByb3ZpZGVkIHdpbGwgb3ZlcnJpZGUgdGhlIGRlZmF1bHQgaGFuZGxpbmcgb2YgdGhhdCB2YWx1ZS5cbiAgICAgKi9cbiAgICB0aW1lem9uZXM/OiBUaW1lem9uZUFiYnJNYXA7XG5cbiAgICAvKipcbiAgICAgKiBJbnRlcm5hbCBkZWJ1ZyBldmVudCBoYW5kbGVyLlxuICAgICAqIEBpbnRlcm5hbFxuICAgICAqL1xuICAgIGRlYnVnPzogRGVidWdIYW5kbGVyIHwgRGVidWdDb25zdW1lO1xufVxuXG4vKipcbiAqIFNvbWUgdGltZXpvbmUgYWJicmV2aWF0aW9ucyBhcmUgYW1iaWd1b3VzIGluIHRoYXQgdGhleSByZWZlciB0byBkaWZmZXJlbnQgb2Zmc2V0c1xuICogZGVwZW5kaW5nIG9uIHRoZSB0aW1lIG9mIHllYXIgXHUyMDE0IGRheWxpZ2h0IHNhdmluZ3MgdGltZSAoRFNUKSwgb3Igbm9uLURTVC4gVGhpcyBpbnRlcmZhY2VcbiAqIGFsbG93cyBkZWZpbmluZyBzdWNoIHRpbWV6b25lc1xuICovXG5leHBvcnQgaW50ZXJmYWNlIEFtYmlndW91c1RpbWV6b25lTWFwIHtcbiAgICB0aW1lem9uZU9mZnNldER1cmluZ0RzdDogbnVtYmVyO1xuICAgIHRpbWV6b25lT2Zmc2V0Tm9uRHN0OiBudW1iZXI7XG4gICAgLyoqXG4gICAgICogUmV0dXJuIHRoZSBzdGFydCBkYXRlIG9mIERTVCBmb3IgdGhlIGdpdmVuIHllYXIuXG4gICAgICogdGltZXpvbmUudHMgY29udGFpbnMgaGVscGVyIG1ldGhvZHMgZm9yIGNvbW1vbiBzdWNoIHJ1bGVzLlxuICAgICAqL1xuICAgIGRzdFN0YXJ0OiAoeWVhcjogbnVtYmVyKSA9PiBEYXRlO1xuICAgIC8qKlxuICAgICAqIFJldHVybiB0aGUgZW5kIGRhdGUgb2YgRFNUIGZvciB0aGUgZ2l2ZW4geWVhci5cbiAgICAgKiB0aW1lem9uZS50cyBjb250YWlucyBoZWxwZXIgbWV0aG9kcyBmb3IgY29tbW9uIHN1Y2ggcnVsZXMuXG4gICAgICovXG4gICAgZHN0RW5kOiAoeWVhcjogbnVtYmVyKSA9PiBEYXRlO1xufVxuXG4vKipcbiAqIEEgbWFwIGRlc2NyaWJpbmcgaG93IHRpbWV6b25lIGFiYnJldmlhdGlvbnMgc2hvdWxkIG1hcCB0byB0aW1lIG9mZnNldHMuXG4gKiBTdXBwb3J0cyBib3RoIHVuYW1iaWdvdXMgbWFwcGluZ3MgYWJicmV2aWF0aW9uID0+IG9mZnNldCxcbiAqIGFuZCBhbWJpZ3VvdXMgbWFwcGluZ3MsIHdoZXJlIHRoZSBvZmZzZXQgd2lsbCBkZXBlbmQgb24gd2hldGhlciB0aGVcbiAqIHRpbWUgaW4gcXVlc3Rpb24gaXMgZHVyaW5nIGRheWxpZ2h0IHNhdmluZ3MgdGltZSBvciBub3QuXG4gKi9cbmV4cG9ydCB0eXBlIFRpbWV6b25lQWJick1hcCA9IHsgW2tleTogc3RyaW5nXTogbnVtYmVyIHwgQW1iaWd1b3VzVGltZXpvbmVNYXAgfTtcblxuZXhwb3J0IGludGVyZmFjZSBQYXJzaW5nUmVmZXJlbmNlIHtcbiAgICAvKipcbiAgICAgKiBSZWZlcmVuY2UgZGF0ZS4gVGhlIGluc3RhbnQgKEphdmFTY3JpcHQgRGF0ZSBvYmplY3QpIHdoZW4gdGhlIGlucHV0IGlzIHdyaXR0ZW4gb3IgbWVudGlvbi5cbiAgICAgKiBUaGlzIGVmZmVjdCBkYXRlL3RpbWUgaW1wbGljYXRpb24gKGUuZy4gd2Vla2RheSBvciB0aW1lIG1lbnRpb25pbmcpLlxuICAgICAqIChkZWZhdWx0ID0gbm93KVxuICAgICAqL1xuICAgIGluc3RhbnQ/OiBEYXRlO1xuXG4gICAgLyoqXG4gICAgICogUmVmZXJlbmNlIHRpbWV6b25lLiBUaGUgdGltZXpvbmUgd2hlcmUgdGhlIGlucHV0IGlzIHdyaXR0ZW4gb3IgbWVudGlvbi5cbiAgICAgKiBEYXRlL3RpbWUgaW1wbGljYXRpb24gd2lsbCBhY2NvdW50IHRoZSBkaWZmZXJlbmNlIGJldHdlZW4gaW5wdXQgdGltZXpvbmUgYW5kIHRoZSBjdXJyZW50IHN5c3RlbSB0aW1lem9uZS5cbiAgICAgKiAoZGVmYXVsdCA9IGN1cnJlbnQgdGltZXpvbmUpXG4gICAgICovXG4gICAgdGltZXpvbmU/OiBzdHJpbmcgfCBudW1iZXI7XG59XG5cbi8qKlxuICogUGFyc2VkIHJlc3VsdCBvciBmaW5hbCBvdXRwdXQuXG4gKiBFYWNoIHJlc3VsdCBvYmplY3QgcmVwcmVzZW50cyBhIGRhdGUvdGltZSAob3IgZGF0ZS90aW1lLXJhbmdlKSBtZW50aW9uaW5nIGluIHRoZSBpbnB1dC5cbiAqL1xuZXhwb3J0IGludGVyZmFjZSBQYXJzZWRSZXN1bHQge1xuICAgIHJlYWRvbmx5IHJlZkRhdGU6IERhdGU7XG4gICAgcmVhZG9ubHkgaW5kZXg6IG51bWJlcjtcbiAgICByZWFkb25seSB0ZXh0OiBzdHJpbmc7XG5cbiAgICByZWFkb25seSBzdGFydDogUGFyc2VkQ29tcG9uZW50cztcbiAgICByZWFkb25seSBlbmQ/OiBQYXJzZWRDb21wb25lbnRzO1xuXG4gICAgLyoqXG4gICAgICogQHJldHVybiBhIGphdmFzY3JpcHQgZGF0ZSBvYmplY3QgY3JlYXRlZCBmcm9tIHRoZSBgcmVzdWx0LnN0YXJ0YC5cbiAgICAgKi9cbiAgICBkYXRlKCk6IERhdGU7XG5cbiAgICAvKipcbiAgICAgKiBAcmV0dXJuIGRlYnVnZ2luZyB0YWdzIGNvbWJpbmVkIG9mIHRoZSBgcmVzdWx0LnN0YXJ0YCBhbmQgYHJlc3VsdC5lbmRgLlxuICAgICAqL1xuICAgIHRhZ3MoKTogU2V0PHN0cmluZz47XG59XG5cbi8qKlxuICogQSBjb2xsZWN0aW9uIG9mIHBhcnNlZCBkYXRlL3RpbWUgY29tcG9uZW50cyAoZS5nLiBkYXksIGhvdXIsIG1pbnV0ZSwgLi4uLCBldGMpLlxuICpcbiAqIEVhY2ggcGFyc2VkIGNvbXBvbmVudCBoYXMgdGhyZWUgZGlmZmVyZW50IGxldmVscyBvZiBjZXJ0YWludHkuXG4gKiAtICpDZXJ0YWluKiAob3IgKktub3duKik6IFRoZSBjb21wb25lbnQgaXMgZGlyZWN0bHkgbWVudGlvbmVkIGFuZCBwYXJzZWQuXG4gKiAtICpJbXBsaWVkKjogVGhlIGNvbXBvbmVudCBpcyBub3QgZGlyZWN0bHkgbWVudGlvbmVkLCBidXQgaW1wbGllZCBieSBvdGhlciBwYXJzZWQgaW5mb3JtYXRpb24uXG4gKiAtICpVbmtub3duKjogQ29tcGxldGVseSBubyBtZW50aW9uIG9mIHRoZSBjb21wb25lbnQuXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgUGFyc2VkQ29tcG9uZW50cyB7XG4gICAgLyoqXG4gICAgICogQ2hlY2sgdGhlIGNvbXBvbmVudCBjZXJ0YWlubHkgaWYgdGhlIGNvbXBvbmVudCBpcyAqQ2VydGFpbiogKG9yICpLbm93biopXG4gICAgICovXG4gICAgaXNDZXJ0YWluKGNvbXBvbmVudDogQ29tcG9uZW50KTogYm9vbGVhbjtcblxuICAgIC8qKlxuICAgICAqIEdldCB0aGUgY29tcG9uZW50IHZhbHVlIGZvciBlaXRoZXIgKkNlcnRhaW4qIG9yICpJbXBsaWVkKiB2YWx1ZS5cbiAgICAgKi9cbiAgICBnZXQoY29tcG9uZW50OiBDb21wb25lbnQpOiBudW1iZXIgfCBudWxsO1xuXG4gICAgLyoqXG4gICAgICogQHJldHVybiBhIGphdmFzY3JpcHQgZGF0ZSBvYmplY3QuXG4gICAgICovXG4gICAgZGF0ZSgpOiBEYXRlO1xuXG4gICAgLyoqXG4gICAgICogQHJldHVybiBkZWJ1Z2dpbmcgdGFncyBvZiB0aGUgcGFyc2VkIGNvbXBvbmVudC5cbiAgICAgKi9cbiAgICB0YWdzKCk6IFNldDxzdHJpbmc+O1xufVxuXG5leHBvcnQgdHlwZSBDb21wb25lbnQgPVxuICAgIHwgXCJ5ZWFyXCJcbiAgICB8IFwibW9udGhcIlxuICAgIHwgXCJkYXlcIlxuICAgIHwgXCJ3ZWVrZGF5XCJcbiAgICB8IFwiaG91clwiXG4gICAgfCBcIm1pbnV0ZVwiXG4gICAgfCBcInNlY29uZFwiXG4gICAgfCBcIm1pbGxpc2Vjb25kXCJcbiAgICB8IFwibWVyaWRpZW1cIlxuICAgIHwgXCJ0aW1lem9uZU9mZnNldFwiO1xuXG5leHBvcnQgZW51bSBNZXJpZGllbSB7XG4gICAgQU0gPSAwLFxuICAgIFBNID0gMSxcbn1cblxuZXhwb3J0IGVudW0gV2Vla2RheSB7XG4gICAgU1VOREFZID0gMCxcbiAgICBNT05EQVkgPSAxLFxuICAgIFRVRVNEQVkgPSAyLFxuICAgIFdFRE5FU0RBWSA9IDMsXG4gICAgVEhVUlNEQVkgPSA0LFxuICAgIEZSSURBWSA9IDUsXG4gICAgU0FUVVJEQVkgPSA2LFxufVxuXG5leHBvcnQgZW51bSBNb250aCB7XG4gICAgSkFOVUFSWSA9IDEsXG4gICAgRkVCUlVBUlkgPSAyLFxuICAgIE1BUkNIID0gMyxcbiAgICBBUFJJTCA9IDQsXG4gICAgTUFZID0gNSxcbiAgICBKVU5FID0gNixcbiAgICBKVUxZID0gNyxcbiAgICBBVUdVU1QgPSA4LFxuICAgIFNFUFRFTUJFUiA9IDksXG4gICAgT0NUT0JFUiA9IDEwLFxuICAgIE5PVkVNQkVSID0gMTEsXG4gICAgREVDRU1CRVIgPSAxMixcbn1cbiIsICJpbXBvcnQgeyBQYXJzaW5nQ29tcG9uZW50cyB9IGZyb20gXCIuLi9yZXN1bHRzXCI7XG5pbXBvcnQgZGF5anMgZnJvbSBcImRheWpzXCI7XG5pbXBvcnQgeyBNZXJpZGllbSB9IGZyb20gXCIuLi90eXBlc1wiO1xuXG5leHBvcnQgZnVuY3Rpb24gYXNzaWduVGhlTmV4dERheShjb21wb25lbnQ6IFBhcnNpbmdDb21wb25lbnRzLCB0YXJnZXREYXlKczogZGF5anMuRGF5anMpIHtcbiAgICB0YXJnZXREYXlKcyA9IHRhcmdldERheUpzLmFkZCgxLCBcImRheVwiKTtcbiAgICBhc3NpZ25TaW1pbGFyRGF0ZShjb21wb25lbnQsIHRhcmdldERheUpzKTtcbiAgICBpbXBseVNpbWlsYXJUaW1lKGNvbXBvbmVudCwgdGFyZ2V0RGF5SnMpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaW1wbHlUaGVOZXh0RGF5KGNvbXBvbmVudDogUGFyc2luZ0NvbXBvbmVudHMsIHRhcmdldERheUpzOiBkYXlqcy5EYXlqcykge1xuICAgIHRhcmdldERheUpzID0gdGFyZ2V0RGF5SnMuYWRkKDEsIFwiZGF5XCIpO1xuICAgIGltcGx5U2ltaWxhckRhdGUoY29tcG9uZW50LCB0YXJnZXREYXlKcyk7XG4gICAgaW1wbHlTaW1pbGFyVGltZShjb21wb25lbnQsIHRhcmdldERheUpzKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFzc2lnblNpbWlsYXJEYXRlKGNvbXBvbmVudDogUGFyc2luZ0NvbXBvbmVudHMsIHRhcmdldERheUpzOiBkYXlqcy5EYXlqcykge1xuICAgIGNvbXBvbmVudC5hc3NpZ24oXCJkYXlcIiwgdGFyZ2V0RGF5SnMuZGF0ZSgpKTtcbiAgICBjb21wb25lbnQuYXNzaWduKFwibW9udGhcIiwgdGFyZ2V0RGF5SnMubW9udGgoKSArIDEpO1xuICAgIGNvbXBvbmVudC5hc3NpZ24oXCJ5ZWFyXCIsIHRhcmdldERheUpzLnllYXIoKSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhc3NpZ25TaW1pbGFyVGltZShjb21wb25lbnQ6IFBhcnNpbmdDb21wb25lbnRzLCB0YXJnZXREYXlKczogZGF5anMuRGF5anMpIHtcbiAgICBjb21wb25lbnQuYXNzaWduKFwiaG91clwiLCB0YXJnZXREYXlKcy5ob3VyKCkpO1xuICAgIGNvbXBvbmVudC5hc3NpZ24oXCJtaW51dGVcIiwgdGFyZ2V0RGF5SnMubWludXRlKCkpO1xuICAgIGNvbXBvbmVudC5hc3NpZ24oXCJzZWNvbmRcIiwgdGFyZ2V0RGF5SnMuc2Vjb25kKCkpO1xuICAgIGNvbXBvbmVudC5hc3NpZ24oXCJtaWxsaXNlY29uZFwiLCB0YXJnZXREYXlKcy5taWxsaXNlY29uZCgpKTtcbiAgICBpZiAoY29tcG9uZW50LmdldChcImhvdXJcIikgPCAxMikge1xuICAgICAgICBjb21wb25lbnQuYXNzaWduKFwibWVyaWRpZW1cIiwgTWVyaWRpZW0uQU0pO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbXBvbmVudC5hc3NpZ24oXCJtZXJpZGllbVwiLCBNZXJpZGllbS5QTSk7XG4gICAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gaW1wbHlTaW1pbGFyRGF0ZShjb21wb25lbnQ6IFBhcnNpbmdDb21wb25lbnRzLCB0YXJnZXREYXlKczogZGF5anMuRGF5anMpIHtcbiAgICBjb21wb25lbnQuaW1wbHkoXCJkYXlcIiwgdGFyZ2V0RGF5SnMuZGF0ZSgpKTtcbiAgICBjb21wb25lbnQuaW1wbHkoXCJtb250aFwiLCB0YXJnZXREYXlKcy5tb250aCgpICsgMSk7XG4gICAgY29tcG9uZW50LmltcGx5KFwieWVhclwiLCB0YXJnZXREYXlKcy55ZWFyKCkpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaW1wbHlTaW1pbGFyVGltZShjb21wb25lbnQ6IFBhcnNpbmdDb21wb25lbnRzLCB0YXJnZXREYXlKczogZGF5anMuRGF5anMpIHtcbiAgICBjb21wb25lbnQuaW1wbHkoXCJob3VyXCIsIHRhcmdldERheUpzLmhvdXIoKSk7XG4gICAgY29tcG9uZW50LmltcGx5KFwibWludXRlXCIsIHRhcmdldERheUpzLm1pbnV0ZSgpKTtcbiAgICBjb21wb25lbnQuaW1wbHkoXCJzZWNvbmRcIiwgdGFyZ2V0RGF5SnMuc2Vjb25kKCkpO1xuICAgIGNvbXBvbmVudC5pbXBseShcIm1pbGxpc2Vjb25kXCIsIHRhcmdldERheUpzLm1pbGxpc2Vjb25kKCkpO1xufVxuIiwgImltcG9ydCBkYXlqcyBmcm9tIFwiZGF5anNcIjtcbmltcG9ydCB7IFRpbWV6b25lQWJick1hcCwgV2Vla2RheSwgTW9udGggfSBmcm9tIFwiLi90eXBlc1wiO1xuXG5leHBvcnQgY29uc3QgVElNRVpPTkVfQUJCUl9NQVA6IFRpbWV6b25lQWJick1hcCA9IHtcbiAgICBBQ0RUOiA2MzAsXG4gICAgQUNTVDogNTcwLFxuICAgIEFEVDogLTE4MCxcbiAgICBBRURUOiA2NjAsXG4gICAgQUVTVDogNjAwLFxuICAgIEFGVDogMjcwLFxuICAgIEFLRFQ6IC00ODAsXG4gICAgQUtTVDogLTU0MCxcbiAgICBBTE1UOiAzNjAsXG4gICAgQU1TVDogLTE4MCxcbiAgICBBTVQ6IC0yNDAsXG4gICAgQU5BU1Q6IDcyMCxcbiAgICBBTkFUOiA3MjAsXG4gICAgQVFUVDogMzAwLFxuICAgIEFSVDogLTE4MCxcbiAgICBBU1Q6IC0yNDAsXG4gICAgQVdEVDogNTQwLFxuICAgIEFXU1Q6IDQ4MCxcbiAgICBBWk9TVDogMCxcbiAgICBBWk9UOiAtNjAsXG4gICAgQVpTVDogMzAwLFxuICAgIEFaVDogMjQwLFxuICAgIEJOVDogNDgwLFxuICAgIEJPVDogLTI0MCxcbiAgICBCUlNUOiAtMTIwLFxuICAgIEJSVDogLTE4MCxcbiAgICBCU1Q6IDYwLFxuICAgIEJUVDogMzYwLFxuICAgIENBU1Q6IDQ4MCxcbiAgICBDQVQ6IDEyMCxcbiAgICBDQ1Q6IDM5MCxcbiAgICBDRFQ6IC0zMDAsXG4gICAgQ0VTVDogMTIwLFxuICAgIC8vIE5vdGU6IE1hbnkgc291cmNlcyBkZWZpbmUgQ0VUIGFzIGEgY29uc3RhbnQgVVRDKzEuIEluIGNvbW1vbiB1c2FnZSwgaG93ZXZlcixcbiAgICAvLyBDRVQgdXN1YWxseSByZWZlcnMgdG8gdGhlIHRpbWUgb2JzZXJ2ZWQgaW4gbW9zdCBvZiBFdXJvcGUsIGJlIGl0IHN0YW5kYXJkIHRpbWUgb3IgZGF5bGlnaHQgc2F2aW5nIHRpbWUuXG4gICAgQ0VUOiB7XG4gICAgICAgIHRpbWV6b25lT2Zmc2V0RHVyaW5nRHN0OiAyICogNjAsXG4gICAgICAgIHRpbWV6b25lT2Zmc2V0Tm9uRHN0OiA2MCxcbiAgICAgICAgZHN0U3RhcnQ6ICh5ZWFyOiBudW1iZXIpID0+IGdldExhc3RXZWVrZGF5T2ZNb250aCh5ZWFyLCBNb250aC5NQVJDSCwgV2Vla2RheS5TVU5EQVksIDIpLFxuICAgICAgICBkc3RFbmQ6ICh5ZWFyOiBudW1iZXIpID0+IGdldExhc3RXZWVrZGF5T2ZNb250aCh5ZWFyLCBNb250aC5PQ1RPQkVSLCBXZWVrZGF5LlNVTkRBWSwgMyksXG4gICAgfSxcbiAgICBDSEFEVDogODI1LFxuICAgIENIQVNUOiA3NjUsXG4gICAgQ0tUOiAtNjAwLFxuICAgIENMU1Q6IC0xODAsXG4gICAgQ0xUOiAtMjQwLFxuICAgIENPVDogLTMwMCxcbiAgICBDU1Q6IC0zNjAsXG4gICAgQ1Q6IHtcbiAgICAgICAgdGltZXpvbmVPZmZzZXREdXJpbmdEc3Q6IC01ICogNjAsXG4gICAgICAgIHRpbWV6b25lT2Zmc2V0Tm9uRHN0OiAtNiAqIDYwLFxuICAgICAgICBkc3RTdGFydDogKHllYXI6IG51bWJlcikgPT4gZ2V0TnRoV2Vla2RheU9mTW9udGgoeWVhciwgTW9udGguTUFSQ0gsIFdlZWtkYXkuU1VOREFZLCAyLCAyKSxcbiAgICAgICAgZHN0RW5kOiAoeWVhcjogbnVtYmVyKSA9PiBnZXROdGhXZWVrZGF5T2ZNb250aCh5ZWFyLCBNb250aC5OT1ZFTUJFUiwgV2Vla2RheS5TVU5EQVksIDEsIDIpLFxuICAgIH0sXG4gICAgQ1ZUOiAtNjAsXG4gICAgQ1hUOiA0MjAsXG4gICAgQ2hTVDogNjAwLFxuICAgIERBVlQ6IDQyMCxcbiAgICBFQVNTVDogLTMwMCxcbiAgICBFQVNUOiAtMzYwLFxuICAgIEVBVDogMTgwLFxuICAgIEVDVDogLTMwMCxcbiAgICBFRFQ6IC0yNDAsXG4gICAgRUVTVDogMTgwLFxuICAgIEVFVDogMTIwLFxuICAgIEVHU1Q6IDAsXG4gICAgRUdUOiAtNjAsXG4gICAgRVNUOiAtMzAwLFxuICAgIEVUOiB7XG4gICAgICAgIHRpbWV6b25lT2Zmc2V0RHVyaW5nRHN0OiAtNCAqIDYwLFxuICAgICAgICB0aW1lem9uZU9mZnNldE5vbkRzdDogLTUgKiA2MCxcbiAgICAgICAgZHN0U3RhcnQ6ICh5ZWFyOiBudW1iZXIpID0+IGdldE50aFdlZWtkYXlPZk1vbnRoKHllYXIsIE1vbnRoLk1BUkNILCBXZWVrZGF5LlNVTkRBWSwgMiwgMiksXG4gICAgICAgIGRzdEVuZDogKHllYXI6IG51bWJlcikgPT4gZ2V0TnRoV2Vla2RheU9mTW9udGgoeWVhciwgTW9udGguTk9WRU1CRVIsIFdlZWtkYXkuU1VOREFZLCAxLCAyKSxcbiAgICB9LFxuICAgIEZKU1Q6IDc4MCxcbiAgICBGSlQ6IDcyMCxcbiAgICBGS1NUOiAtMTgwLFxuICAgIEZLVDogLTI0MCxcbiAgICBGTlQ6IC0xMjAsXG4gICAgR0FMVDogLTM2MCxcbiAgICBHQU1UOiAtNTQwLFxuICAgIEdFVDogMjQwLFxuICAgIEdGVDogLTE4MCxcbiAgICBHSUxUOiA3MjAsXG4gICAgR01UOiAwLFxuICAgIEdTVDogMjQwLFxuICAgIEdZVDogLTI0MCxcbiAgICBIQUE6IC0xODAsXG4gICAgSEFDOiAtMzAwLFxuICAgIEhBRFQ6IC01NDAsXG4gICAgSEFFOiAtMjQwLFxuICAgIEhBUDogLTQyMCxcbiAgICBIQVI6IC0zNjAsXG4gICAgSEFTVDogLTYwMCxcbiAgICBIQVQ6IC05MCxcbiAgICBIQVk6IC00ODAsXG4gICAgSEtUOiA0ODAsXG4gICAgSExWOiAtMjEwLFxuICAgIEhOQTogLTI0MCxcbiAgICBITkM6IC0zNjAsXG4gICAgSE5FOiAtMzAwLFxuICAgIEhOUDogLTQ4MCxcbiAgICBITlI6IC00MjAsXG4gICAgSE5UOiAtMTUwLFxuICAgIEhOWTogLTU0MCxcbiAgICBIT1ZUOiA0MjAsXG4gICAgSUNUOiA0MjAsXG4gICAgSURUOiAxODAsXG4gICAgSU9UOiAzNjAsXG4gICAgSVJEVDogMjcwLFxuICAgIElSS1NUOiA1NDAsXG4gICAgSVJLVDogNTQwLFxuICAgIElSU1Q6IDIxMCxcbiAgICBJU1Q6IDMzMCxcbiAgICBKU1Q6IDU0MCxcbiAgICBLR1Q6IDM2MCxcbiAgICBLUkFTVDogNDgwLFxuICAgIEtSQVQ6IDQ4MCxcbiAgICBLU1Q6IDU0MCxcbiAgICBLVVlUOiAyNDAsXG4gICAgTEhEVDogNjYwLFxuICAgIExIU1Q6IDYzMCxcbiAgICBMSU5UOiA4NDAsXG4gICAgTUFHU1Q6IDcyMCxcbiAgICBNQUdUOiA3MjAsXG4gICAgTUFSVDogLTUxMCxcbiAgICBNQVdUOiAzMDAsXG4gICAgTURUOiAtMzYwLFxuICAgIE1FU1o6IDEyMCxcbiAgICBNRVo6IDYwLFxuICAgIE1IVDogNzIwLFxuICAgIE1NVDogMzkwLFxuICAgIE1TRDogMjQwLFxuICAgIE1TSzogMTgwLFxuICAgIE1TVDogLTQyMCxcbiAgICBNVDoge1xuICAgICAgICB0aW1lem9uZU9mZnNldER1cmluZ0RzdDogLTYgKiA2MCxcbiAgICAgICAgdGltZXpvbmVPZmZzZXROb25Ec3Q6IC03ICogNjAsXG4gICAgICAgIGRzdFN0YXJ0OiAoeWVhcjogbnVtYmVyKSA9PiBnZXROdGhXZWVrZGF5T2ZNb250aCh5ZWFyLCBNb250aC5NQVJDSCwgV2Vla2RheS5TVU5EQVksIDIsIDIpLFxuICAgICAgICBkc3RFbmQ6ICh5ZWFyOiBudW1iZXIpID0+IGdldE50aFdlZWtkYXlPZk1vbnRoKHllYXIsIE1vbnRoLk5PVkVNQkVSLCBXZWVrZGF5LlNVTkRBWSwgMSwgMiksXG4gICAgfSxcbiAgICBNVVQ6IDI0MCxcbiAgICBNVlQ6IDMwMCxcbiAgICBNWVQ6IDQ4MCxcbiAgICBOQ1Q6IDY2MCxcbiAgICBORFQ6IC05MCxcbiAgICBORlQ6IDY5MCxcbiAgICBOT1ZTVDogNDIwLFxuICAgIE5PVlQ6IDM2MCxcbiAgICBOUFQ6IDM0NSxcbiAgICBOU1Q6IC0xNTAsXG4gICAgTlVUOiAtNjYwLFxuICAgIE5aRFQ6IDc4MCxcbiAgICBOWlNUOiA3MjAsXG4gICAgT01TU1Q6IDQyMCxcbiAgICBPTVNUOiA0MjAsXG4gICAgUERUOiAtNDIwLFxuICAgIFBFVDogLTMwMCxcbiAgICBQRVRTVDogNzIwLFxuICAgIFBFVFQ6IDcyMCxcbiAgICBQR1Q6IDYwMCxcbiAgICBQSE9UOiA3ODAsXG4gICAgUEhUOiA0ODAsXG4gICAgUEtUOiAzMDAsXG4gICAgUE1EVDogLTEyMCxcbiAgICBQTVNUOiAtMTgwLFxuICAgIFBPTlQ6IDY2MCxcbiAgICBQU1Q6IC00ODAsXG4gICAgUFQ6IHtcbiAgICAgICAgdGltZXpvbmVPZmZzZXREdXJpbmdEc3Q6IC03ICogNjAsXG4gICAgICAgIHRpbWV6b25lT2Zmc2V0Tm9uRHN0OiAtOCAqIDYwLFxuICAgICAgICBkc3RTdGFydDogKHllYXI6IG51bWJlcikgPT4gZ2V0TnRoV2Vla2RheU9mTW9udGgoeWVhciwgTW9udGguTUFSQ0gsIFdlZWtkYXkuU1VOREFZLCAyLCAyKSxcbiAgICAgICAgZHN0RW5kOiAoeWVhcjogbnVtYmVyKSA9PiBnZXROdGhXZWVrZGF5T2ZNb250aCh5ZWFyLCBNb250aC5OT1ZFTUJFUiwgV2Vla2RheS5TVU5EQVksIDEsIDIpLFxuICAgIH0sXG4gICAgUFdUOiA1NDAsXG4gICAgUFlTVDogLTE4MCxcbiAgICBQWVQ6IC0yNDAsXG4gICAgUkVUOiAyNDAsXG4gICAgU0FNVDogMjQwLFxuICAgIFNBU1Q6IDEyMCxcbiAgICBTQlQ6IDY2MCxcbiAgICBTQ1Q6IDI0MCxcbiAgICBTR1Q6IDQ4MCxcbiAgICBTUlQ6IC0xODAsXG4gICAgU1NUOiAtNjYwLFxuICAgIFRBSFQ6IC02MDAsXG4gICAgVEZUOiAzMDAsXG4gICAgVEpUOiAzMDAsXG4gICAgVEtUOiA3ODAsXG4gICAgVExUOiA1NDAsXG4gICAgVE1UOiAzMDAsXG4gICAgVFZUOiA3MjAsXG4gICAgVUxBVDogNDgwLFxuICAgIFVUQzogMCxcbiAgICBVWVNUOiAtMTIwLFxuICAgIFVZVDogLTE4MCxcbiAgICBVWlQ6IDMwMCxcbiAgICBWRVQ6IC0yMTAsXG4gICAgVkxBU1Q6IDY2MCxcbiAgICBWTEFUOiA2NjAsXG4gICAgVlVUOiA2NjAsXG4gICAgV0FTVDogMTIwLFxuICAgIFdBVDogNjAsXG4gICAgV0VTVDogNjAsXG4gICAgV0VTWjogNjAsXG4gICAgV0VUOiAwLFxuICAgIFdFWjogMCxcbiAgICBXRlQ6IDcyMCxcbiAgICBXR1NUOiAtMTIwLFxuICAgIFdHVDogLTE4MCxcbiAgICBXSUI6IDQyMCxcbiAgICBXSVQ6IDU0MCxcbiAgICBXSVRBOiA0ODAsXG4gICAgV1NUOiA3ODAsXG4gICAgV1Q6IDAsXG4gICAgWUFLU1Q6IDYwMCxcbiAgICBZQUtUOiA2MDAsXG4gICAgWUFQVDogNjAwLFxuICAgIFlFS1NUOiAzNjAsXG4gICAgWUVLVDogMzYwLFxufTtcblxuLyoqXG4gKiBHZXQgdGhlIGRhdGUgd2hpY2ggaXMgdGhlIG50aCBvY2N1cmVuY2Ugb2YgYSBnaXZlbiB3ZWVrZGF5IGluIGEgZ2l2ZW4gbW9udGggYW5kIHllYXIuXG4gKlxuICogQHBhcmFtIHllYXIgVGhlIHllYXIgZm9yIHdoaWNoIHRvIGZpbmQgdGhlIGRhdGVcbiAqIEBwYXJhbSBtb250aCBUaGUgbW9udGggaW4gd2hpY2ggdGhlIGRhdGUgb2NjdXJzXG4gKiBAcGFyYW0gd2Vla2RheSBUaGUgd2Vla2RheSBvbiB3aGljaCB0aGUgZGF0ZSBvY2N1cnNcbiAqIEBwYXJhbSBuIFRoZSBudGggb2NjdXJlbmNlIG9mIHRoZSBnaXZlbiB3ZWVrZGF5IG9uIHRoZSBtb250aCB0byByZXR1cm5cbiAqIEBwYXJhbSBob3VyIFRoZSBob3VyIG9mIGRheSB3aGljaCBzaG91bGQgYmUgc2V0IG9uIHRoZSByZXR1cm5lZCBkYXRlXG4gKiBAcmV0dXJuIFRoZSBkYXRlIHdoaWNoIGlzIHRoZSBudGggb2NjdXJlbmNlIG9mIGEgZ2l2ZW4gd2Vla2RheSBpbiBhIGdpdmVuXG4gKiAgICAgICAgIG1vbnRoIGFuZCB5ZWFyLCBhdCB0aGUgZ2l2ZW4gaG91ciBvZiBkYXlcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdldE50aFdlZWtkYXlPZk1vbnRoKHllYXI6IG51bWJlciwgbW9udGg6IE1vbnRoLCB3ZWVrZGF5OiBXZWVrZGF5LCBuOiAxIHwgMiB8IDMgfCA0LCBob3VyID0gMCk6IERhdGUge1xuICAgIGxldCBkYXlPZk1vbnRoID0gMDtcbiAgICBsZXQgaSA9IDA7XG4gICAgd2hpbGUgKGkgPCBuKSB7XG4gICAgICAgIGRheU9mTW9udGgrKztcbiAgICAgICAgY29uc3QgZGF0ZSA9IG5ldyBEYXRlKHllYXIsIG1vbnRoIC0gMSwgZGF5T2ZNb250aCk7XG4gICAgICAgIGlmIChkYXRlLmdldERheSgpID09PSB3ZWVrZGF5KSBpKys7XG4gICAgfVxuICAgIHJldHVybiBuZXcgRGF0ZSh5ZWFyLCBtb250aCAtIDEsIGRheU9mTW9udGgsIGhvdXIpO1xufVxuXG4vKipcbiAqIEdldCB0aGUgZGF0ZSB3aGljaCBpcyB0aGUgbGFzdCBvY2N1cmVuY2Ugb2YgYSBnaXZlbiB3ZWVrZGF5IGluIGEgZ2l2ZW4gbW9udGggYW5kIHllYXIuXG4gKlxuICogQHBhcmFtIHllYXIgVGhlIHllYXIgZm9yIHdoaWNoIHRvIGZpbmQgdGhlIGRhdGVcbiAqIEBwYXJhbSBtb250aCBUaGUgbW9udGggaW4gd2hpY2ggdGhlIGRhdGUgb2NjdXJzXG4gKiBAcGFyYW0gd2Vla2RheSBUaGUgd2Vla2RheSBvbiB3aGljaCB0aGUgZGF0ZSBvY2N1cnNcbiAqIEBwYXJhbSBob3VyIFRoZSBob3VyIG9mIGRheSB3aGljaCBzaG91bGQgYmUgc2V0IG9uIHRoZSByZXR1cm5lZCBkYXRlXG4gKiBAcmV0dXJuIFRoZSBkYXRlIHdoaWNoIGlzIHRoZSBsYXN0IG9jY3VyZW5jZSBvZiBhIGdpdmVuIHdlZWtkYXkgaW4gYSBnaXZlblxuICogICAgICAgICBtb250aCBhbmQgeWVhciwgYXQgdGhlIGdpdmVuIGhvdXIgb2YgZGF5XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBnZXRMYXN0V2Vla2RheU9mTW9udGgoeWVhcjogbnVtYmVyLCBtb250aDogTW9udGgsIHdlZWtkYXk6IFdlZWtkYXksIGhvdXIgPSAwKTogRGF0ZSB7XG4gICAgLy8gUHJvY2VkdXJlOiBGaW5kIHRoZSBmaXJzdCB3ZWVrZGF5IG9mIHRoZSBuZXh0IG1vbnRoLCBjb21wYXJlIHdpdGggdGhlIGdpdmVuIHdlZWtkYXksXG4gICAgLy8gYW5kIHVzZSB0aGUgZGlmZmVyZW5jZSB0byBkZXRlcm1pbmUgaG93IG1hbnkgZGF5cyB0byBzdWJ0cmFjdCBmcm9tIHRoZSBmaXJzdCBvZiB0aGUgbmV4dCBtb250aC5cbiAgICBjb25zdCBvbmVJbmRleGVkV2Vla2RheSA9IHdlZWtkYXkgPT09IDAgPyA3IDogd2Vla2RheTtcbiAgICBjb25zdCBkYXRlID0gbmV3IERhdGUoeWVhciwgbW9udGggLSAxICsgMSwgMSwgMTIpO1xuICAgIGNvbnN0IGZpcnN0V2Vla2RheU5leHRNb250aCA9IGRhdGUuZ2V0RGF5KCkgPT09IDAgPyA3IDogZGF0ZS5nZXREYXkoKTtcbiAgICBsZXQgZGF5RGlmZjtcbiAgICBpZiAoZmlyc3RXZWVrZGF5TmV4dE1vbnRoID09PSBvbmVJbmRleGVkV2Vla2RheSkgZGF5RGlmZiA9IDc7XG4gICAgZWxzZSBpZiAoZmlyc3RXZWVrZGF5TmV4dE1vbnRoIDwgb25lSW5kZXhlZFdlZWtkYXkpIGRheURpZmYgPSA3ICsgZmlyc3RXZWVrZGF5TmV4dE1vbnRoIC0gb25lSW5kZXhlZFdlZWtkYXk7XG4gICAgZWxzZSBkYXlEaWZmID0gZmlyc3RXZWVrZGF5TmV4dE1vbnRoIC0gb25lSW5kZXhlZFdlZWtkYXk7XG4gICAgZGF0ZS5zZXREYXRlKGRhdGUuZ2V0RGF0ZSgpIC0gZGF5RGlmZik7XG4gICAgcmV0dXJuIG5ldyBEYXRlKHllYXIsIG1vbnRoIC0gMSwgZGF0ZS5nZXREYXRlKCksIGhvdXIpO1xufVxuXG4vKipcbiAqIEZpbmRzIGFuZCByZXR1cm5zIHRpbWV6b25lIG9mZnNldC4gSWYgdGltZXpvbmVJbnB1dCBpcyBudW1lcmljLCBpdCBpcyByZXR1cm5lZC4gT3RoZXJ3aXNlLCBsb29rIGZvciB0aW1lem9uZSBvZmZzZXRzXG4gKiBpbiB0aGUgZm9sbG93aW5nIG9yZGVyOiB0aW1lem9uZU92ZXJyaWRlcyAtPiB7QGxpbmsgVElNRVpPTkVfQUJCUl9NQVB9LlxuICpcbiAqIEBwYXJhbSB0aW1lem9uZUlucHV0IFVwcGVyY2FzZSB0aW1lem9uZSBhYmJyZXZpYXRpb24gb3IgbnVtZXJpYyBvZmZzZXQgaW4gbWludXRlc1xuICogQHBhcmFtIGRhdGUgVGhlIGRhdGUgdG8gdXNlIHRvIGRldGVybWluZSB3aGV0aGVyIHRvIHJldHVybiBEU1Qgb2Zmc2V0cyBmb3IgYW1iaWd1b3VzIHRpbWV6b25lc1xuICogQHBhcmFtIHRpbWV6b25lT3ZlcnJpZGVzIE92ZXJyaWRlcyBmb3IgdGltZXpvbmVzXG4gKiBAcmV0dXJuIHRpbWV6b25lIG9mZnNldCBpbiBtaW51dGVzXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB0b1RpbWV6b25lT2Zmc2V0KFxuICAgIHRpbWV6b25lSW5wdXQ/OiBzdHJpbmcgfCBudW1iZXIsXG4gICAgZGF0ZT86IERhdGUsXG4gICAgdGltZXpvbmVPdmVycmlkZXM6IFRpbWV6b25lQWJick1hcCA9IHt9XG4pOiBudW1iZXIgfCBudWxsIHtcbiAgICBpZiAodGltZXpvbmVJbnB1dCA9PSBudWxsKSB7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIGlmICh0eXBlb2YgdGltZXpvbmVJbnB1dCA9PT0gXCJudW1iZXJcIikge1xuICAgICAgICByZXR1cm4gdGltZXpvbmVJbnB1dDtcbiAgICB9XG5cbiAgICBjb25zdCBtYXRjaGVkVGltZXpvbmUgPSB0aW1lem9uZU92ZXJyaWRlc1t0aW1lem9uZUlucHV0XSA/PyBUSU1FWk9ORV9BQkJSX01BUFt0aW1lem9uZUlucHV0XTtcbiAgICBpZiAobWF0Y2hlZFRpbWV6b25lID09IG51bGwpIHtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIC8vIFRoaXMgbWVhbnMgdGhhdCB3ZSBoYXZlIG1hdGNoZWQgYW4gdW5hbWJpZ3VvdXMgdGltZXpvbmVcbiAgICBpZiAodHlwZW9mIG1hdGNoZWRUaW1lem9uZSA9PSBcIm51bWJlclwiKSB7XG4gICAgICAgIHJldHVybiBtYXRjaGVkVGltZXpvbmU7XG4gICAgfVxuXG4gICAgLy8gVGhlIG1hdGNoZWQgdGltZXpvbmUgaXMgYW4gYW1iaWd1b3VzIHRpbWV6b25lLCB3aGVyZSB0aGUgb2Zmc2V0IGRlcGVuZHMgb24gd2hldGhlciB0aGUgY29udGV4dCAocmVmRGF0ZSlcbiAgICAvLyBpcyBkdXJpbmcgZGF5bGlnaHQgc2F2aW5ncyBvciBub3QuXG5cbiAgICAvLyBXaXRob3V0IHJlZkRhdGUgYXMgY29udGV4dCwgdGhlcmUncyBubyB3YXkgdG8ga25vdyBpZiBEU1Qgb3Igbm9uLURTVCBvZmZzZXQgc2hvdWxkIGJlIHVzZWQuIFJldHVybiBudWxsIGluc3RlYWQuXG4gICAgaWYgKGRhdGUgPT0gbnVsbCkge1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICAvLyBSZXR1cm4gRFNUIG9mZnNldCBpZiB0aGUgcmVmRGF0ZSBpcyBkdXJpbmcgZGF5bGlnaHQgc2F2aW5nc1xuICAgIGlmIChcbiAgICAgICAgZGF5anMoZGF0ZSkuaXNBZnRlcihtYXRjaGVkVGltZXpvbmUuZHN0U3RhcnQoZGF0ZS5nZXRGdWxsWWVhcigpKSkgJiZcbiAgICAgICAgIWRheWpzKGRhdGUpLmlzQWZ0ZXIobWF0Y2hlZFRpbWV6b25lLmRzdEVuZChkYXRlLmdldEZ1bGxZZWFyKCkpKVxuICAgICkge1xuICAgICAgICByZXR1cm4gbWF0Y2hlZFRpbWV6b25lLnRpbWV6b25lT2Zmc2V0RHVyaW5nRHN0O1xuICAgIH1cblxuICAgIC8vIHJlZkRhdGUgaXMgbm90IGR1cmluZyBEU1QgPT4gcmV0dXJuIG5vbi1EU1Qgb2Zmc2V0XG4gICAgcmV0dXJuIG1hdGNoZWRUaW1lem9uZS50aW1lem9uZU9mZnNldE5vbkRzdDtcbn1cbiIsICJ0eXBlIERpY3Rpb25hcnlMaWtlID0gc3RyaW5nW10gfCB7IFt3b3JkOiBzdHJpbmddOiB1bmtub3duIH0gfCBNYXA8c3RyaW5nLCB1bmtub3duPjtcblxuZXhwb3J0IGZ1bmN0aW9uIHJlcGVhdGVkVGltZXVuaXRQYXR0ZXJuKFxuICAgIHByZWZpeDogc3RyaW5nLFxuICAgIHNpbmdsZVRpbWV1bml0UGF0dGVybjogc3RyaW5nLFxuICAgIGNvbm5lY3RvclBhdHRlcm4gPSBcIlxcXFxzezAsNX0sP1xcXFxzezAsNX1cIlxuKTogc3RyaW5nIHtcbiAgICBjb25zdCBzaW5nbGVUaW1ldW5pdFBhdHRlcm5Ob0NhcHR1cmUgPSBzaW5nbGVUaW1ldW5pdFBhdHRlcm4ucmVwbGFjZSgvXFwoKD8hXFw/KS9nLCBcIig/OlwiKTtcbiAgICByZXR1cm4gYCR7cHJlZml4fSR7c2luZ2xlVGltZXVuaXRQYXR0ZXJuTm9DYXB0dXJlfSg/OiR7Y29ubmVjdG9yUGF0dGVybn0ke3NpbmdsZVRpbWV1bml0UGF0dGVybk5vQ2FwdHVyZX0pezAsMTB9YDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGV4dHJhY3RUZXJtcyhkaWN0aW9uYXJ5OiBEaWN0aW9uYXJ5TGlrZSk6IHN0cmluZ1tdIHtcbiAgICBsZXQga2V5czogc3RyaW5nW107XG4gICAgaWYgKGRpY3Rpb25hcnkgaW5zdGFuY2VvZiBBcnJheSkge1xuICAgICAgICBrZXlzID0gWy4uLmRpY3Rpb25hcnldO1xuICAgIH0gZWxzZSBpZiAoZGljdGlvbmFyeSBpbnN0YW5jZW9mIE1hcCkge1xuICAgICAgICBrZXlzID0gQXJyYXkuZnJvbSgoZGljdGlvbmFyeSBhcyBNYXA8c3RyaW5nLCB1bmtub3duPikua2V5cygpKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBrZXlzID0gT2JqZWN0LmtleXMoZGljdGlvbmFyeSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGtleXM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBtYXRjaEFueVBhdHRlcm4oZGljdGlvbmFyeTogRGljdGlvbmFyeUxpa2UpOiBzdHJpbmcge1xuICAgIC8vIFRPRE86IE1vcmUgZWZmaWNpZW50IHJlZ2V4IHBhdHRlcm4gYnkgY29uc2lkZXJpbmcgZHVwbGljYXRlZCBwcmVmaXhcblxuICAgIGNvbnN0IGpvaW5lZFRlcm1zID0gZXh0cmFjdFRlcm1zKGRpY3Rpb25hcnkpXG4gICAgICAgIC5zb3J0KChhLCBiKSA9PiBiLmxlbmd0aCAtIGEubGVuZ3RoKVxuICAgICAgICAuam9pbihcInxcIilcbiAgICAgICAgLnJlcGxhY2UoL1xcLi9nLCBcIlxcXFwuXCIpO1xuXG4gICAgcmV0dXJuIGAoPzoke2pvaW5lZFRlcm1zfSlgO1xufVxuIiwgImltcG9ydCBkYXlqcyBmcm9tIFwiZGF5anNcIjtcblxuLyoqXG4gKiBGaW5kIHRoZSBtb3N0IGxpa2VseSB5ZWFyLCBmcm9tIGEgcmF3IG51bWJlci4gRm9yIGV4YW1wbGU6XG4gKiAxOTk3ID0+IDE5OTdcbiAqIDk3ID0+IDE5OTdcbiAqIDEyID0+IDIwMTJcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGZpbmRNb3N0TGlrZWx5QURZZWFyKHllYXJOdW1iZXI6IG51bWJlcik6IG51bWJlciB7XG4gICAgaWYgKHllYXJOdW1iZXIgPCAxMDApIHtcbiAgICAgICAgaWYgKHllYXJOdW1iZXIgPiA1MCkge1xuICAgICAgICAgICAgeWVhck51bWJlciA9IHllYXJOdW1iZXIgKyAxOTAwO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgeWVhck51bWJlciA9IHllYXJOdW1iZXIgKyAyMDAwO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHllYXJOdW1iZXI7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBmaW5kWWVhckNsb3Nlc3RUb1JlZihyZWZEYXRlOiBEYXRlLCBkYXk6IG51bWJlciwgbW9udGg6IG51bWJlcik6IG51bWJlciB7XG4gICAgLy9GaW5kIHRoZSBtb3N0IGFwcHJvcHJpYXRlZCB5ZWFyXG4gICAgY29uc3QgcmVmTW9tZW50ID0gZGF5anMocmVmRGF0ZSk7XG4gICAgbGV0IGRhdGVNb21lbnQgPSByZWZNb21lbnQ7XG4gICAgZGF0ZU1vbWVudCA9IGRhdGVNb21lbnQubW9udGgobW9udGggLSAxKTtcbiAgICBkYXRlTW9tZW50ID0gZGF0ZU1vbWVudC5kYXRlKGRheSk7XG4gICAgZGF0ZU1vbWVudCA9IGRhdGVNb21lbnQueWVhcihyZWZNb21lbnQueWVhcigpKTtcblxuICAgIGNvbnN0IG5leHRZZWFyID0gZGF0ZU1vbWVudC5hZGQoMSwgXCJ5XCIpO1xuICAgIGNvbnN0IGxhc3RZZWFyID0gZGF0ZU1vbWVudC5hZGQoLTEsIFwieVwiKTtcbiAgICBpZiAoTWF0aC5hYnMobmV4dFllYXIuZGlmZihyZWZNb21lbnQpKSA8IE1hdGguYWJzKGRhdGVNb21lbnQuZGlmZihyZWZNb21lbnQpKSkge1xuICAgICAgICBkYXRlTW9tZW50ID0gbmV4dFllYXI7XG4gICAgfSBlbHNlIGlmIChNYXRoLmFicyhsYXN0WWVhci5kaWZmKHJlZk1vbWVudCkpIDwgTWF0aC5hYnMoZGF0ZU1vbWVudC5kaWZmKHJlZk1vbWVudCkpKSB7XG4gICAgICAgIGRhdGVNb21lbnQgPSBsYXN0WWVhcjtcbiAgICB9XG5cbiAgICByZXR1cm4gZGF0ZU1vbWVudC55ZWFyKCk7XG59XG4iLCAiaW1wb3J0IHsgT3BVbml0VHlwZSwgUVVuaXRUeXBlIH0gZnJvbSBcImRheWpzXCI7XG5pbXBvcnQgeyBtYXRjaEFueVBhdHRlcm4sIHJlcGVhdGVkVGltZXVuaXRQYXR0ZXJuIH0gZnJvbSBcIi4uLy4uL3V0aWxzL3BhdHRlcm5cIjtcbmltcG9ydCB7IGZpbmRNb3N0TGlrZWx5QURZZWFyIH0gZnJvbSBcIi4uLy4uL2NhbGN1bGF0aW9uL3llYXJzXCI7XG5pbXBvcnQgeyBUaW1lVW5pdHMgfSBmcm9tIFwiLi4vLi4vdXRpbHMvdGltZXVuaXRzXCI7XG5pbXBvcnQgeyBXZWVrZGF5IH0gZnJvbSBcIi4uLy4uL3R5cGVzXCI7XG5cbmV4cG9ydCBjb25zdCBXRUVLREFZX0RJQ1RJT05BUlk6IHsgW3dvcmQ6IHN0cmluZ106IFdlZWtkYXkgfSA9IHtcbiAgICBzdW5kYXk6IDAsXG4gICAgc3VuOiAwLFxuICAgIFwic3VuLlwiOiAwLFxuICAgIG1vbmRheTogMSxcbiAgICBtb246IDEsXG4gICAgXCJtb24uXCI6IDEsXG4gICAgdHVlc2RheTogMixcbiAgICB0dWU6IDIsXG4gICAgXCJ0dWUuXCI6IDIsXG4gICAgd2VkbmVzZGF5OiAzLFxuICAgIHdlZDogMyxcbiAgICBcIndlZC5cIjogMyxcbiAgICB0aHVyc2RheTogNCxcbiAgICB0aHVyczogNCxcbiAgICBcInRodXJzLlwiOiA0LFxuICAgIHRodXI6IDQsXG4gICAgXCJ0aHVyLlwiOiA0LFxuICAgIHRodTogNCxcbiAgICBcInRodS5cIjogNCxcbiAgICBmcmlkYXk6IDUsXG4gICAgZnJpOiA1LFxuICAgIFwiZnJpLlwiOiA1LFxuICAgIHNhdHVyZGF5OiA2LFxuICAgIHNhdDogNixcbiAgICBcInNhdC5cIjogNixcbn07XG5cbmV4cG9ydCBjb25zdCBGVUxMX01PTlRIX05BTUVfRElDVElPTkFSWTogeyBbd29yZDogc3RyaW5nXTogbnVtYmVyIH0gPSB7XG4gICAgamFudWFyeTogMSxcbiAgICBmZWJydWFyeTogMixcbiAgICBtYXJjaDogMyxcbiAgICBhcHJpbDogNCxcbiAgICBtYXk6IDUsXG4gICAganVuZTogNixcbiAgICBqdWx5OiA3LFxuICAgIGF1Z3VzdDogOCxcbiAgICBzZXB0ZW1iZXI6IDksXG4gICAgb2N0b2JlcjogMTAsXG4gICAgbm92ZW1iZXI6IDExLFxuICAgIGRlY2VtYmVyOiAxMixcbn07XG5cbmV4cG9ydCBjb25zdCBNT05USF9ESUNUSU9OQVJZOiB7IFt3b3JkOiBzdHJpbmddOiBudW1iZXIgfSA9IHtcbiAgICAuLi5GVUxMX01PTlRIX05BTUVfRElDVElPTkFSWSxcbiAgICBqYW46IDEsXG4gICAgXCJqYW4uXCI6IDEsXG4gICAgZmViOiAyLFxuICAgIFwiZmViLlwiOiAyLFxuICAgIG1hcjogMyxcbiAgICBcIm1hci5cIjogMyxcbiAgICBhcHI6IDQsXG4gICAgXCJhcHIuXCI6IDQsXG4gICAganVuOiA2LFxuICAgIFwianVuLlwiOiA2LFxuICAgIGp1bDogNyxcbiAgICBcImp1bC5cIjogNyxcbiAgICBhdWc6IDgsXG4gICAgXCJhdWcuXCI6IDgsXG4gICAgc2VwOiA5LFxuICAgIFwic2VwLlwiOiA5LFxuICAgIHNlcHQ6IDksXG4gICAgXCJzZXB0LlwiOiA5LFxuICAgIG9jdDogMTAsXG4gICAgXCJvY3QuXCI6IDEwLFxuICAgIG5vdjogMTEsXG4gICAgXCJub3YuXCI6IDExLFxuICAgIGRlYzogMTIsXG4gICAgXCJkZWMuXCI6IDEyLFxufTtcblxuZXhwb3J0IGNvbnN0IElOVEVHRVJfV09SRF9ESUNUSU9OQVJZOiB7IFt3b3JkOiBzdHJpbmddOiBudW1iZXIgfSA9IHtcbiAgICBvbmU6IDEsXG4gICAgdHdvOiAyLFxuICAgIHRocmVlOiAzLFxuICAgIGZvdXI6IDQsXG4gICAgZml2ZTogNSxcbiAgICBzaXg6IDYsXG4gICAgc2V2ZW46IDcsXG4gICAgZWlnaHQ6IDgsXG4gICAgbmluZTogOSxcbiAgICB0ZW46IDEwLFxuICAgIGVsZXZlbjogMTEsXG4gICAgdHdlbHZlOiAxMixcbn07XG5cbmV4cG9ydCBjb25zdCBPUkRJTkFMX1dPUkRfRElDVElPTkFSWTogeyBbd29yZDogc3RyaW5nXTogbnVtYmVyIH0gPSB7XG4gICAgZmlyc3Q6IDEsXG4gICAgc2Vjb25kOiAyLFxuICAgIHRoaXJkOiAzLFxuICAgIGZvdXJ0aDogNCxcbiAgICBmaWZ0aDogNSxcbiAgICBzaXh0aDogNixcbiAgICBzZXZlbnRoOiA3LFxuICAgIGVpZ2h0aDogOCxcbiAgICBuaW50aDogOSxcbiAgICB0ZW50aDogMTAsXG4gICAgZWxldmVudGg6IDExLFxuICAgIHR3ZWxmdGg6IDEyLFxuICAgIHRoaXJ0ZWVudGg6IDEzLFxuICAgIGZvdXJ0ZWVudGg6IDE0LFxuICAgIGZpZnRlZW50aDogMTUsXG4gICAgc2l4dGVlbnRoOiAxNixcbiAgICBzZXZlbnRlZW50aDogMTcsXG4gICAgZWlnaHRlZW50aDogMTgsXG4gICAgbmluZXRlZW50aDogMTksXG4gICAgdHdlbnRpZXRoOiAyMCxcbiAgICBcInR3ZW50eSBmaXJzdFwiOiAyMSxcbiAgICBcInR3ZW50eS1maXJzdFwiOiAyMSxcbiAgICBcInR3ZW50eSBzZWNvbmRcIjogMjIsXG4gICAgXCJ0d2VudHktc2Vjb25kXCI6IDIyLFxuICAgIFwidHdlbnR5IHRoaXJkXCI6IDIzLFxuICAgIFwidHdlbnR5LXRoaXJkXCI6IDIzLFxuICAgIFwidHdlbnR5IGZvdXJ0aFwiOiAyNCxcbiAgICBcInR3ZW50eS1mb3VydGhcIjogMjQsXG4gICAgXCJ0d2VudHkgZmlmdGhcIjogMjUsXG4gICAgXCJ0d2VudHktZmlmdGhcIjogMjUsXG4gICAgXCJ0d2VudHkgc2l4dGhcIjogMjYsXG4gICAgXCJ0d2VudHktc2l4dGhcIjogMjYsXG4gICAgXCJ0d2VudHkgc2V2ZW50aFwiOiAyNyxcbiAgICBcInR3ZW50eS1zZXZlbnRoXCI6IDI3LFxuICAgIFwidHdlbnR5IGVpZ2h0aFwiOiAyOCxcbiAgICBcInR3ZW50eS1laWdodGhcIjogMjgsXG4gICAgXCJ0d2VudHkgbmludGhcIjogMjksXG4gICAgXCJ0d2VudHktbmludGhcIjogMjksXG4gICAgXCJ0aGlydGlldGhcIjogMzAsXG4gICAgXCJ0aGlydHkgZmlyc3RcIjogMzEsXG4gICAgXCJ0aGlydHktZmlyc3RcIjogMzEsXG59O1xuXG5leHBvcnQgY29uc3QgVElNRV9VTklUX0RJQ1RJT05BUllfTk9fQUJCUjogeyBbd29yZDogc3RyaW5nXTogT3BVbml0VHlwZSB8IFFVbml0VHlwZSB9ID0ge1xuICAgIHNlY29uZDogXCJzZWNvbmRcIixcbiAgICBzZWNvbmRzOiBcInNlY29uZFwiLFxuICAgIG1pbnV0ZTogXCJtaW51dGVcIixcbiAgICBtaW51dGVzOiBcIm1pbnV0ZVwiLFxuICAgIGhvdXI6IFwiaG91clwiLFxuICAgIGhvdXJzOiBcImhvdXJcIixcbiAgICBkYXk6IFwiZFwiLFxuICAgIGRheXM6IFwiZFwiLFxuICAgIHdlZWs6IFwid2Vla1wiLFxuICAgIHdlZWtzOiBcIndlZWtcIixcbiAgICBtb250aDogXCJtb250aFwiLFxuICAgIG1vbnRoczogXCJtb250aFwiLFxuICAgIHF1YXJ0ZXI6IFwicXVhcnRlclwiLFxuICAgIHF1YXJ0ZXJzOiBcInF1YXJ0ZXJcIixcbiAgICB5ZWFyOiBcInllYXJcIixcbiAgICB5ZWFyczogXCJ5ZWFyXCIsXG59O1xuXG5leHBvcnQgY29uc3QgVElNRV9VTklUX0RJQ1RJT05BUlk6IHsgW3dvcmQ6IHN0cmluZ106IE9wVW5pdFR5cGUgfCBRVW5pdFR5cGUgfSA9IHtcbiAgICBzOiBcInNlY29uZFwiLFxuICAgIHNlYzogXCJzZWNvbmRcIixcbiAgICBzZWNvbmQ6IFwic2Vjb25kXCIsXG4gICAgc2Vjb25kczogXCJzZWNvbmRcIixcbiAgICBtOiBcIm1pbnV0ZVwiLFxuICAgIG1pbjogXCJtaW51dGVcIixcbiAgICBtaW5zOiBcIm1pbnV0ZVwiLFxuICAgIG1pbnV0ZTogXCJtaW51dGVcIixcbiAgICBtaW51dGVzOiBcIm1pbnV0ZVwiLFxuICAgIGg6IFwiaG91clwiLFxuICAgIGhyOiBcImhvdXJcIixcbiAgICBocnM6IFwiaG91clwiLFxuICAgIGhvdXI6IFwiaG91clwiLFxuICAgIGhvdXJzOiBcImhvdXJcIixcbiAgICBkOiBcImRcIixcbiAgICBkYXk6IFwiZFwiLFxuICAgIGRheXM6IFwiZFwiLFxuICAgIHc6IFwid1wiLFxuICAgIHdlZWs6IFwid2Vla1wiLFxuICAgIHdlZWtzOiBcIndlZWtcIixcbiAgICBtbzogXCJtb250aFwiLFxuICAgIG1vbjogXCJtb250aFwiLFxuICAgIG1vczogXCJtb250aFwiLFxuICAgIG1vbnRoOiBcIm1vbnRoXCIsXG4gICAgbW9udGhzOiBcIm1vbnRoXCIsXG4gICAgcXRyOiBcInF1YXJ0ZXJcIixcbiAgICBxdWFydGVyOiBcInF1YXJ0ZXJcIixcbiAgICBxdWFydGVyczogXCJxdWFydGVyXCIsXG4gICAgeTogXCJ5ZWFyXCIsXG4gICAgeXI6IFwieWVhclwiLFxuICAgIHllYXI6IFwieWVhclwiLFxuICAgIHllYXJzOiBcInllYXJcIixcbiAgICAvLyBBbHNvLCBtZXJnZSB0aGUgZW50cmllcyBmcm9tIHRoZSBmdWxsLW5hbWUgZGljdGlvbmFyeS5cbiAgICAvLyBXZSBsZWF2ZSB0aGUgZHVwbGljYXRlZCBlbnRyaWVzIGZvciByZWFkYWJpbGl0eS5cbiAgICAuLi5USU1FX1VOSVRfRElDVElPTkFSWV9OT19BQkJSLFxufTtcblxuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG5leHBvcnQgY29uc3QgTlVNQkVSX1BBVFRFUk4gPSBgKD86JHttYXRjaEFueVBhdHRlcm4oXG4gICAgSU5URUdFUl9XT1JEX0RJQ1RJT05BUllcbil9fFswLTldK3xbMC05XStcXFxcLlswLTldK3xoYWxmKD86XFxcXHN7MCwyfWFuPyk/fGFuP1xcXFxiKD86XFxcXHN7MCwyfWZldyk/fGZld3xzZXZlcmFsfHRoZXxhP1xcXFxzezAsMn1jb3VwbGVcXFxcc3swLDJ9KD86b2YpPylgO1xuXG5leHBvcnQgZnVuY3Rpb24gcGFyc2VOdW1iZXJQYXR0ZXJuKG1hdGNoOiBzdHJpbmcpOiBudW1iZXIge1xuICAgIGNvbnN0IG51bSA9IG1hdGNoLnRvTG93ZXJDYXNlKCk7XG4gICAgaWYgKElOVEVHRVJfV09SRF9ESUNUSU9OQVJZW251bV0gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICByZXR1cm4gSU5URUdFUl9XT1JEX0RJQ1RJT05BUllbbnVtXTtcbiAgICB9IGVsc2UgaWYgKG51bSA9PT0gXCJhXCIgfHwgbnVtID09PSBcImFuXCIgfHwgbnVtID09IFwidGhlXCIpIHtcbiAgICAgICAgcmV0dXJuIDE7XG4gICAgfSBlbHNlIGlmIChudW0ubWF0Y2goL2Zldy8pKSB7XG4gICAgICAgIHJldHVybiAzO1xuICAgIH0gZWxzZSBpZiAobnVtLm1hdGNoKC9oYWxmLykpIHtcbiAgICAgICAgcmV0dXJuIDAuNTtcbiAgICB9IGVsc2UgaWYgKG51bS5tYXRjaCgvY291cGxlLykpIHtcbiAgICAgICAgcmV0dXJuIDI7XG4gICAgfSBlbHNlIGlmIChudW0ubWF0Y2goL3NldmVyYWwvKSkge1xuICAgICAgICByZXR1cm4gNztcbiAgICB9XG5cbiAgICByZXR1cm4gcGFyc2VGbG9hdChudW0pO1xufVxuXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbmV4cG9ydCBjb25zdCBPUkRJTkFMX05VTUJFUl9QQVRURVJOID0gYCg/OiR7bWF0Y2hBbnlQYXR0ZXJuKE9SRElOQUxfV09SRF9ESUNUSU9OQVJZKX18WzAtOV17MSwyfSg/OnN0fG5kfHJkfHRoKT8pYDtcbmV4cG9ydCBmdW5jdGlvbiBwYXJzZU9yZGluYWxOdW1iZXJQYXR0ZXJuKG1hdGNoOiBzdHJpbmcpOiBudW1iZXIge1xuICAgIGxldCBudW0gPSBtYXRjaC50b0xvd2VyQ2FzZSgpO1xuICAgIGlmIChPUkRJTkFMX1dPUkRfRElDVElPTkFSWVtudW1dICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgcmV0dXJuIE9SRElOQUxfV09SRF9ESUNUSU9OQVJZW251bV07XG4gICAgfVxuXG4gICAgbnVtID0gbnVtLnJlcGxhY2UoLyg/OnN0fG5kfHJkfHRoKSQvaSwgXCJcIik7XG4gICAgcmV0dXJuIHBhcnNlSW50KG51bSk7XG59XG5cbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuZXhwb3J0IGNvbnN0IFlFQVJfUEFUVEVSTiA9IGAoPzpbMS05XVswLTldezAsM31cXFxcc3swLDJ9KD86QkV8QUR8QkN8QkNFfENFKXxbMS0yXVswLTldezN9fFs1LTldWzAtOV18MlswLTVdKWA7XG5leHBvcnQgZnVuY3Rpb24gcGFyc2VZZWFyKG1hdGNoOiBzdHJpbmcpOiBudW1iZXIge1xuICAgIGlmICgvQkUvaS50ZXN0KG1hdGNoKSkge1xuICAgICAgICAvLyBCdWRkaGlzdCBFcmFcbiAgICAgICAgbWF0Y2ggPSBtYXRjaC5yZXBsYWNlKC9CRS9pLCBcIlwiKTtcbiAgICAgICAgcmV0dXJuIHBhcnNlSW50KG1hdGNoKSAtIDU0MztcbiAgICB9XG5cbiAgICBpZiAoL0JDRT8vaS50ZXN0KG1hdGNoKSkge1xuICAgICAgICAvLyBCZWZvcmUgQ2hyaXN0LCBCZWZvcmUgQ29tbW9uIEVyYVxuICAgICAgICBtYXRjaCA9IG1hdGNoLnJlcGxhY2UoL0JDRT8vaSwgXCJcIik7XG4gICAgICAgIHJldHVybiAtcGFyc2VJbnQobWF0Y2gpO1xuICAgIH1cblxuICAgIGlmICgvKEFEfENFKS9pLnRlc3QobWF0Y2gpKSB7XG4gICAgICAgIC8vIEFubm8gRG9taW5pLCBDb21tb24gRXJhXG4gICAgICAgIG1hdGNoID0gbWF0Y2gucmVwbGFjZSgvKEFEfENFKS9pLCBcIlwiKTtcbiAgICAgICAgcmV0dXJuIHBhcnNlSW50KG1hdGNoKTtcbiAgICB9XG5cbiAgICBjb25zdCByYXdZZWFyTnVtYmVyID0gcGFyc2VJbnQobWF0Y2gpO1xuICAgIHJldHVybiBmaW5kTW9zdExpa2VseUFEWWVhcihyYXdZZWFyTnVtYmVyKTtcbn1cblxuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG5jb25zdCBTSU5HTEVfVElNRV9VTklUX1BBVFRFUk4gPSBgKCR7TlVNQkVSX1BBVFRFUk59KVxcXFxzezAsM30oJHttYXRjaEFueVBhdHRlcm4oVElNRV9VTklUX0RJQ1RJT05BUlkpfSlgO1xuY29uc3QgU0lOR0xFX1RJTUVfVU5JVF9SRUdFWCA9IG5ldyBSZWdFeHAoU0lOR0xFX1RJTUVfVU5JVF9QQVRURVJOLCBcImlcIik7XG5cbmNvbnN0IFNJTkdMRV9USU1FX1VOSVRfTk9fQUJCUl9QQVRURVJOID0gYCgke05VTUJFUl9QQVRURVJOfSlcXFxcc3swLDN9KCR7bWF0Y2hBbnlQYXR0ZXJuKFxuICAgIFRJTUVfVU5JVF9ESUNUSU9OQVJZX05PX0FCQlJcbil9KWA7XG5cbmNvbnN0IFRJTUVfVU5JVF9DT05ORUNUT1JfUEFUVEVSTiA9IGBcXFxcc3swLDV9LD8oPzpcXFxccyphbmQpP1xcXFxzezAsNX1gO1xuXG5leHBvcnQgY29uc3QgVElNRV9VTklUU19QQVRURVJOID0gcmVwZWF0ZWRUaW1ldW5pdFBhdHRlcm4oXG4gICAgYCg/Oig/OmFib3V0fGFyb3VuZClcXFxcc3swLDN9KT9gLFxuICAgIFNJTkdMRV9USU1FX1VOSVRfUEFUVEVSTixcbiAgICBUSU1FX1VOSVRfQ09OTkVDVE9SX1BBVFRFUk5cbik7XG5leHBvcnQgY29uc3QgVElNRV9VTklUU19OT19BQkJSX1BBVFRFUk4gPSByZXBlYXRlZFRpbWV1bml0UGF0dGVybihcbiAgICBgKD86KD86YWJvdXR8YXJvdW5kKVxcXFxzezAsM30pP2AsXG4gICAgU0lOR0xFX1RJTUVfVU5JVF9OT19BQkJSX1BBVFRFUk4sXG4gICAgVElNRV9VTklUX0NPTk5FQ1RPUl9QQVRURVJOXG4pO1xuXG5leHBvcnQgZnVuY3Rpb24gcGFyc2VUaW1lVW5pdHModGltZXVuaXRUZXh0KTogbnVsbCB8IFRpbWVVbml0cyB7XG4gICAgY29uc3QgZnJhZ21lbnRzID0ge307XG4gICAgbGV0IHJlbWFpbmluZ1RleHQgPSB0aW1ldW5pdFRleHQ7XG4gICAgbGV0IG1hdGNoID0gU0lOR0xFX1RJTUVfVU5JVF9SRUdFWC5leGVjKHJlbWFpbmluZ1RleHQpO1xuICAgIHdoaWxlIChtYXRjaCkge1xuICAgICAgICBjb2xsZWN0RGF0ZVRpbWVGcmFnbWVudChmcmFnbWVudHMsIG1hdGNoKTtcbiAgICAgICAgcmVtYWluaW5nVGV4dCA9IHJlbWFpbmluZ1RleHQuc3Vic3RyaW5nKG1hdGNoWzBdLmxlbmd0aCkudHJpbSgpO1xuICAgICAgICBtYXRjaCA9IFNJTkdMRV9USU1FX1VOSVRfUkVHRVguZXhlYyhyZW1haW5pbmdUZXh0KTtcbiAgICB9XG4gICAgaWYgKE9iamVjdC5rZXlzKGZyYWdtZW50cykubGVuZ3RoID09IDApIHtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIHJldHVybiBmcmFnbWVudHM7XG59XG5cbmZ1bmN0aW9uIGNvbGxlY3REYXRlVGltZUZyYWdtZW50KGZyYWdtZW50cywgbWF0Y2gpIHtcbiAgICBpZiAobWF0Y2hbMF0ubWF0Y2goL15bYS16QS1aXSskLykpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCBudW0gPSBwYXJzZU51bWJlclBhdHRlcm4obWF0Y2hbMV0pO1xuICAgIGNvbnN0IHVuaXQgPSBUSU1FX1VOSVRfRElDVElPTkFSWVttYXRjaFsyXS50b0xvd2VyQ2FzZSgpXTtcbiAgICBmcmFnbWVudHNbdW5pdF0gPSBudW07XG59XG4iLCAiaW1wb3J0IHsgUGFyc2VyLCBQYXJzaW5nQ29udGV4dCB9IGZyb20gXCIuLi8uLi9jaHJvbm9cIjtcbmltcG9ydCB7IFBhcnNpbmdDb21wb25lbnRzLCBQYXJzaW5nUmVzdWx0IH0gZnJvbSBcIi4uLy4uL3Jlc3VsdHNcIjtcbmltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gXCIuLi8uLi90eXBlc1wiO1xuXG4vKipcbiAqIEEgcGFyc2VyIHRoYXQgY2hlY2tzIGZvciB3b3JkIGJvdW5kYXJ5IGFuZCBhcHBseWluZyB0aGUgaW5uZXIgcGF0dGVybiBhbmQgZXh0cmFjdGlvbi5cbiAqL1xuZXhwb3J0IGFic3RyYWN0IGNsYXNzIEFic3RyYWN0UGFyc2VyV2l0aFdvcmRCb3VuZGFyeUNoZWNraW5nIGltcGxlbWVudHMgUGFyc2VyIHtcbiAgICBhYnN0cmFjdCBpbm5lclBhdHRlcm4oY29udGV4dDogUGFyc2luZ0NvbnRleHQpOiBSZWdFeHA7XG4gICAgYWJzdHJhY3QgaW5uZXJFeHRyYWN0KFxuICAgICAgICBjb250ZXh0OiBQYXJzaW5nQ29udGV4dCxcbiAgICAgICAgbWF0Y2g6IFJlZ0V4cE1hdGNoQXJyYXlcbiAgICApOiBQYXJzaW5nQ29tcG9uZW50cyB8IFBhcnNpbmdSZXN1bHQgfCB7IFtjIGluIENvbXBvbmVudF0/OiBudW1iZXIgfSB8IG51bGw7XG5cbiAgICAvLyBPdmVycmlkZXMgdGhpcyBtZXRob2QgaWYgdGhlcmUgaXMgbW9yZSBlZmZpY2llbnQgd2F5IHRvIGNoZWNrIGZvciBpbm5lciBwYXR0ZXJuIGNoYW5nZS5cbiAgICBpbm5lclBhdHRlcm5IYXNDaGFuZ2UoY29udGV4dDogUGFyc2luZ0NvbnRleHQsIGN1cnJlbnRJbm5lclBhdHRlcm46IFJlZ0V4cCk6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gdGhpcy5pbm5lclBhdHRlcm4oY29udGV4dCkgIT09IGN1cnJlbnRJbm5lclBhdHRlcm47XG4gICAgfVxuXG4gICAgcGF0dGVybkxlZnRCb3VuZGFyeSgpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gYChcXFxcV3xeKWA7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBjYWNoZWRJbm5lclBhdHRlcm4/OiBSZWdFeHAgPSBudWxsO1xuICAgIHByaXZhdGUgY2FjaGVkUGF0dGVybj86IFJlZ0V4cCA9IG51bGw7XG5cbiAgICBwYXR0ZXJuKGNvbnRleHQ6IFBhcnNpbmdDb250ZXh0KTogUmVnRXhwIHtcbiAgICAgICAgaWYgKHRoaXMuY2FjaGVkSW5uZXJQYXR0ZXJuKSB7XG4gICAgICAgICAgICBpZiAoIXRoaXMuaW5uZXJQYXR0ZXJuSGFzQ2hhbmdlKGNvbnRleHQsIHRoaXMuY2FjaGVkSW5uZXJQYXR0ZXJuKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmNhY2hlZFBhdHRlcm47XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5jYWNoZWRJbm5lclBhdHRlcm4gPSB0aGlzLmlubmVyUGF0dGVybihjb250ZXh0KTtcbiAgICAgICAgdGhpcy5jYWNoZWRQYXR0ZXJuID0gbmV3IFJlZ0V4cChcbiAgICAgICAgICAgIGAke3RoaXMucGF0dGVybkxlZnRCb3VuZGFyeSgpfSR7dGhpcy5jYWNoZWRJbm5lclBhdHRlcm4uc291cmNlfWAsXG4gICAgICAgICAgICB0aGlzLmNhY2hlZElubmVyUGF0dGVybi5mbGFnc1xuICAgICAgICApO1xuICAgICAgICByZXR1cm4gdGhpcy5jYWNoZWRQYXR0ZXJuO1xuICAgIH1cblxuICAgIGV4dHJhY3QoY29udGV4dDogUGFyc2luZ0NvbnRleHQsIG1hdGNoOiBSZWdFeHBNYXRjaEFycmF5KSB7XG4gICAgICAgIGNvbnN0IGhlYWRlciA9IG1hdGNoWzFdID8/IFwiXCI7XG4gICAgICAgIG1hdGNoLmluZGV4ID0gbWF0Y2guaW5kZXggKyBoZWFkZXIubGVuZ3RoO1xuICAgICAgICBtYXRjaFswXSA9IG1hdGNoWzBdLnN1YnN0cmluZyhoZWFkZXIubGVuZ3RoKTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDI7IGkgPCBtYXRjaC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgbWF0Y2hbaSAtIDFdID0gbWF0Y2hbaV07XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGhpcy5pbm5lckV4dHJhY3QoY29udGV4dCwgbWF0Y2gpO1xuICAgIH1cbn1cbiIsICJpbXBvcnQgeyBUSU1FX1VOSVRTX1BBVFRFUk4sIHBhcnNlVGltZVVuaXRzLCBUSU1FX1VOSVRTX05PX0FCQlJfUEFUVEVSTiB9IGZyb20gXCIuLi9jb25zdGFudHNcIjtcbmltcG9ydCB7IFBhcnNpbmdDb250ZXh0IH0gZnJvbSBcIi4uLy4uLy4uL2Nocm9ub1wiO1xuaW1wb3J0IHsgUGFyc2luZ0NvbXBvbmVudHMgfSBmcm9tIFwiLi4vLi4vLi4vcmVzdWx0c1wiO1xuaW1wb3J0IHsgQWJzdHJhY3RQYXJzZXJXaXRoV29yZEJvdW5kYXJ5Q2hlY2tpbmcgfSBmcm9tIFwiLi4vLi4vLi4vY29tbW9uL3BhcnNlcnMvQWJzdHJhY3RQYXJzZXJXaXRoV29yZEJvdW5kYXJ5XCI7XG5cbmNvbnN0IFBBVFRFUk5fV0lUSF9PUFRJT05BTF9QUkVGSVggPSBuZXcgUmVnRXhwKFxuICAgIGAoPzooPzp3aXRoaW58aW58Zm9yKVxcXFxzKik/YCArXG4gICAgICAgIGAoPzooPzphYm91dHxhcm91bmR8cm91Z2hseXxhcHByb3hpbWF0ZWx5fGp1c3QpXFxcXHMqKD86flxcXFxzKik/KT8oJHtUSU1FX1VOSVRTX1BBVFRFUk59KSg/PVxcXFxXfCQpYCxcbiAgICBcImlcIlxuKTtcblxuY29uc3QgUEFUVEVSTl9XSVRIX1BSRUZJWCA9IG5ldyBSZWdFeHAoXG4gICAgYCg/OndpdGhpbnxpbnxmb3IpXFxcXHMqYCArXG4gICAgICAgIGAoPzooPzphYm91dHxhcm91bmR8cm91Z2hseXxhcHByb3hpbWF0ZWx5fGp1c3QpXFxcXHMqKD86flxcXFxzKik/KT8oJHtUSU1FX1VOSVRTX1BBVFRFUk59KSg/PVxcXFxXfCQpYCxcbiAgICBcImlcIlxuKTtcblxuY29uc3QgUEFUVEVSTl9XSVRIX1BSRUZJWF9TVFJJQ1QgPSBuZXcgUmVnRXhwKFxuICAgIGAoPzp3aXRoaW58aW58Zm9yKVxcXFxzKmAgK1xuICAgICAgICBgKD86KD86YWJvdXR8YXJvdW5kfHJvdWdobHl8YXBwcm94aW1hdGVseXxqdXN0KVxcXFxzKig/On5cXFxccyopPyk/KCR7VElNRV9VTklUU19OT19BQkJSX1BBVFRFUk59KSg/PVxcXFxXfCQpYCxcbiAgICBcImlcIlxuKTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRU5UaW1lVW5pdFdpdGhpbkZvcm1hdFBhcnNlciBleHRlbmRzIEFic3RyYWN0UGFyc2VyV2l0aFdvcmRCb3VuZGFyeUNoZWNraW5nIHtcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHN0cmljdE1vZGU6IGJvb2xlYW4pIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICB9XG5cbiAgICBpbm5lclBhdHRlcm4oY29udGV4dDogUGFyc2luZ0NvbnRleHQpOiBSZWdFeHAge1xuICAgICAgICBpZiAodGhpcy5zdHJpY3RNb2RlKSB7XG4gICAgICAgICAgICByZXR1cm4gUEFUVEVSTl9XSVRIX1BSRUZJWF9TVFJJQ1Q7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGNvbnRleHQub3B0aW9uLmZvcndhcmREYXRlID8gUEFUVEVSTl9XSVRIX09QVElPTkFMX1BSRUZJWCA6IFBBVFRFUk5fV0lUSF9QUkVGSVg7XG4gICAgfVxuXG4gICAgaW5uZXJFeHRyYWN0KGNvbnRleHQ6IFBhcnNpbmdDb250ZXh0LCBtYXRjaDogUmVnRXhwTWF0Y2hBcnJheSkge1xuICAgICAgICAvLyBFeGNsdWRlIFwiZm9yIHRoZSB1bml0XCIgcGhhc2VzLCBlLmcuIFwiZm9yIHRoZSB5ZWFyXCJcbiAgICAgICAgaWYgKG1hdGNoWzBdLm1hdGNoKC9eZm9yXFxzKnRoZVxccypcXHcrLykpIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHRpbWVVbml0cyA9IHBhcnNlVGltZVVuaXRzKG1hdGNoWzFdKTtcbiAgICAgICAgaWYgKCF0aW1lVW5pdHMpIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBQYXJzaW5nQ29tcG9uZW50cy5jcmVhdGVSZWxhdGl2ZUZyb21SZWZlcmVuY2UoY29udGV4dC5yZWZlcmVuY2UsIHRpbWVVbml0cyk7XG4gICAgfVxufVxuIiwgImltcG9ydCB7IFBhcnNpbmdDb250ZXh0IH0gZnJvbSBcIi4uLy4uLy4uL2Nocm9ub1wiO1xuaW1wb3J0IHsgUGFyc2luZ1Jlc3VsdCB9IGZyb20gXCIuLi8uLi8uLi9yZXN1bHRzXCI7XG5pbXBvcnQgeyBmaW5kWWVhckNsb3Nlc3RUb1JlZiB9IGZyb20gXCIuLi8uLi8uLi9jYWxjdWxhdGlvbi95ZWFyc1wiO1xuaW1wb3J0IHsgTU9OVEhfRElDVElPTkFSWSB9IGZyb20gXCIuLi9jb25zdGFudHNcIjtcbmltcG9ydCB7IFlFQVJfUEFUVEVSTiwgcGFyc2VZZWFyIH0gZnJvbSBcIi4uL2NvbnN0YW50c1wiO1xuaW1wb3J0IHsgT1JESU5BTF9OVU1CRVJfUEFUVEVSTiwgcGFyc2VPcmRpbmFsTnVtYmVyUGF0dGVybiB9IGZyb20gXCIuLi9jb25zdGFudHNcIjtcbmltcG9ydCB7IG1hdGNoQW55UGF0dGVybiB9IGZyb20gXCIuLi8uLi8uLi91dGlscy9wYXR0ZXJuXCI7XG5pbXBvcnQgeyBBYnN0cmFjdFBhcnNlcldpdGhXb3JkQm91bmRhcnlDaGVja2luZyB9IGZyb20gXCIuLi8uLi8uLi9jb21tb24vcGFyc2Vycy9BYnN0cmFjdFBhcnNlcldpdGhXb3JkQm91bmRhcnlcIjtcblxuLy8gcHJldHRpZXItaWdub3JlXG5jb25zdCBQQVRURVJOID0gbmV3IFJlZ0V4cChcbiAgICBgKD86b25cXFxcc3swLDN9KT9gICtcbiAgICAgICAgYCgke09SRElOQUxfTlVNQkVSX1BBVFRFUk59KWAgK1xuICAgICAgICBgKD86YCArXG4gICAgICAgICAgICBgXFxcXHN7MCwzfSg/OnRvfFxcXFwtfFxcXFxcdTIwMTN8dW50aWx8dGhyb3VnaHx0aWxsKT9cXFxcc3swLDN9YCArXG4gICAgICAgICAgICBgKCR7T1JESU5BTF9OVU1CRVJfUEFUVEVSTn0pYCArXG4gICAgICAgIFwiKT9cIiArXG4gICAgICAgIGAoPzotfC98XFxcXHN7MCwzfSg/Om9mKT9cXFxcc3swLDN9KWAgK1xuICAgICAgICBgKCR7bWF0Y2hBbnlQYXR0ZXJuKE1PTlRIX0RJQ1RJT05BUlkpfSlgICtcbiAgICAgICAgXCIoPzpcIiArXG4gICAgICAgICAgICBgKD86LXwvfCw/XFxcXHN7MCwzfSlgICtcbiAgICAgICAgICAgIGAoJHtZRUFSX1BBVFRFUk59KD8hXFxcXHcpKWAgK1xuICAgICAgICBcIik/XCIgK1xuICAgICAgICBcIig/PVxcXFxXfCQpXCIsXG4gICAgXCJpXCJcbik7XG5cbmNvbnN0IERBVEVfR1JPVVAgPSAxO1xuY29uc3QgREFURV9UT19HUk9VUCA9IDI7XG5jb25zdCBNT05USF9OQU1FX0dST1VQID0gMztcbmNvbnN0IFlFQVJfR1JPVVAgPSA0O1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBFTk1vbnRoTmFtZUxpdHRsZUVuZGlhblBhcnNlciBleHRlbmRzIEFic3RyYWN0UGFyc2VyV2l0aFdvcmRCb3VuZGFyeUNoZWNraW5nIHtcbiAgICBpbm5lclBhdHRlcm4oKTogUmVnRXhwIHtcbiAgICAgICAgcmV0dXJuIFBBVFRFUk47XG4gICAgfVxuXG4gICAgaW5uZXJFeHRyYWN0KGNvbnRleHQ6IFBhcnNpbmdDb250ZXh0LCBtYXRjaDogUmVnRXhwTWF0Y2hBcnJheSk6IFBhcnNpbmdSZXN1bHQge1xuICAgICAgICBjb25zdCByZXN1bHQgPSBjb250ZXh0LmNyZWF0ZVBhcnNpbmdSZXN1bHQobWF0Y2guaW5kZXgsIG1hdGNoWzBdKTtcblxuICAgICAgICBjb25zdCBtb250aCA9IE1PTlRIX0RJQ1RJT05BUllbbWF0Y2hbTU9OVEhfTkFNRV9HUk9VUF0udG9Mb3dlckNhc2UoKV07XG4gICAgICAgIGNvbnN0IGRheSA9IHBhcnNlT3JkaW5hbE51bWJlclBhdHRlcm4obWF0Y2hbREFURV9HUk9VUF0pO1xuICAgICAgICBpZiAoZGF5ID4gMzEpIHtcbiAgICAgICAgICAgIC8vIGUuZy4gXCJbOTYgQXVnXVwiID0+IFwiOVs2IEF1Z11cIiwgd2UgbmVlZCB0byBzaGlmdCBhd2F5IGZyb20gdGhlIG5leHQgbnVtYmVyXG4gICAgICAgICAgICBtYXRjaC5pbmRleCA9IG1hdGNoLmluZGV4ICsgbWF0Y2hbREFURV9HUk9VUF0ubGVuZ3RoO1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cblxuICAgICAgICByZXN1bHQuc3RhcnQuYXNzaWduKFwibW9udGhcIiwgbW9udGgpO1xuICAgICAgICByZXN1bHQuc3RhcnQuYXNzaWduKFwiZGF5XCIsIGRheSk7XG5cbiAgICAgICAgaWYgKG1hdGNoW1lFQVJfR1JPVVBdKSB7XG4gICAgICAgICAgICBjb25zdCB5ZWFyTnVtYmVyID0gcGFyc2VZZWFyKG1hdGNoW1lFQVJfR1JPVVBdKTtcbiAgICAgICAgICAgIHJlc3VsdC5zdGFydC5hc3NpZ24oXCJ5ZWFyXCIsIHllYXJOdW1iZXIpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29uc3QgeWVhciA9IGZpbmRZZWFyQ2xvc2VzdFRvUmVmKGNvbnRleHQucmVmRGF0ZSwgZGF5LCBtb250aCk7XG4gICAgICAgICAgICByZXN1bHQuc3RhcnQuaW1wbHkoXCJ5ZWFyXCIsIHllYXIpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKG1hdGNoW0RBVEVfVE9fR1JPVVBdKSB7XG4gICAgICAgICAgICBjb25zdCBlbmREYXRlID0gcGFyc2VPcmRpbmFsTnVtYmVyUGF0dGVybihtYXRjaFtEQVRFX1RPX0dST1VQXSk7XG5cbiAgICAgICAgICAgIHJlc3VsdC5lbmQgPSByZXN1bHQuc3RhcnQuY2xvbmUoKTtcbiAgICAgICAgICAgIHJlc3VsdC5lbmQuYXNzaWduKFwiZGF5XCIsIGVuZERhdGUpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG59XG4iLCAiaW1wb3J0IHsgUGFyc2luZ0NvbnRleHQgfSBmcm9tIFwiLi4vLi4vLi4vY2hyb25vXCI7XG5pbXBvcnQgeyBmaW5kWWVhckNsb3Nlc3RUb1JlZiB9IGZyb20gXCIuLi8uLi8uLi9jYWxjdWxhdGlvbi95ZWFyc1wiO1xuaW1wb3J0IHsgTU9OVEhfRElDVElPTkFSWSB9IGZyb20gXCIuLi9jb25zdGFudHNcIjtcbmltcG9ydCB7IE9SRElOQUxfTlVNQkVSX1BBVFRFUk4sIHBhcnNlT3JkaW5hbE51bWJlclBhdHRlcm4gfSBmcm9tIFwiLi4vY29uc3RhbnRzXCI7XG5pbXBvcnQgeyBZRUFSX1BBVFRFUk4sIHBhcnNlWWVhciB9IGZyb20gXCIuLi9jb25zdGFudHNcIjtcbmltcG9ydCB7IG1hdGNoQW55UGF0dGVybiB9IGZyb20gXCIuLi8uLi8uLi91dGlscy9wYXR0ZXJuXCI7XG5pbXBvcnQgeyBBYnN0cmFjdFBhcnNlcldpdGhXb3JkQm91bmRhcnlDaGVja2luZyB9IGZyb20gXCIuLi8uLi8uLi9jb21tb24vcGFyc2Vycy9BYnN0cmFjdFBhcnNlcldpdGhXb3JkQm91bmRhcnlcIjtcblxuLy8gcHJldHRpZXItaWdub3JlXG5jb25zdCBQQVRURVJOID0gbmV3IFJlZ0V4cChcbiAgICBgKCR7bWF0Y2hBbnlQYXR0ZXJuKE1PTlRIX0RJQ1RJT05BUlkpfSlgICtcbiAgICAgICAgXCIoPzotfC98XFxcXHMqLD9cXFxccyopXCIgK1xuICAgICAgICBgKCR7T1JESU5BTF9OVU1CRVJfUEFUVEVSTn0pKD8hXFxcXHMqKD86YW18cG0pKVxcXFxzKmAgK1xuICAgICAgICBcIig/OlwiICtcbiAgICAgICAgICAgIFwiKD86dG98XFxcXC0pXFxcXHMqXCIgK1xuICAgICAgICAgICAgYCgke09SRElOQUxfTlVNQkVSX1BBVFRFUk59KVxcXFxzKmAgK1xuICAgICAgICBcIik/XCIgK1xuICAgICAgICBcIig/OlwiICtcbiAgICAgICAgICAgIGAoPzotfC98XFxcXHMqLFxcXFxzKnxcXFxccyspYCArXG4gICAgICAgICAgICBgKCR7WUVBUl9QQVRURVJOfSlgICtcbiAgICAgICAgXCIpP1wiICtcbiAgICAgICAgXCIoPz1cXFxcV3wkKSg/IVxcXFw6XFxcXGQpXCIsXG4gICAgXCJpXCJcbik7XG5cbmNvbnN0IE1PTlRIX05BTUVfR1JPVVAgPSAxO1xuY29uc3QgREFURV9HUk9VUCA9IDI7XG5jb25zdCBEQVRFX1RPX0dST1VQID0gMztcbmNvbnN0IFlFQVJfR1JPVVAgPSA0O1xuXG4vKipcbiAqIFRoZSBwYXJzZXIgZm9yIHBhcnNpbmcgVVMncyBkYXRlIGZvcm1hdCB0aGF0IGJlZ2luIHdpdGggbW9udGgncyBuYW1lLlxuICogIC0gSmFudWFyeSAxM1xuICogIC0gSmFudWFyeSAxMywgMjAxMlxuICogIC0gSmFudWFyeSAxMyAtIDE1LCAyMDEyXG4gKiBOb3RlOiBXYXRjaCBvdXQgZm9yOlxuICogIC0gSmFudWFyeSAxMjowMFxuICogIC0gSmFudWFyeSAxMi40NFxuICogIC0gSmFudWFyeSAxMjIyMzQ0XG4gKiAgLSBKYW51YXJ5IDIxICh3aGVuIHNob3VsZFNraXBZZWFyTGlrZURhdGU9dHJ1ZSlcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRU5Nb250aE5hbWVNaWRkbGVFbmRpYW5QYXJzZXIgZXh0ZW5kcyBBYnN0cmFjdFBhcnNlcldpdGhXb3JkQm91bmRhcnlDaGVja2luZyB7XG4gICAgc2hvdWxkU2tpcFllYXJMaWtlRGF0ZTogYm9vbGVhbjtcblxuICAgIGNvbnN0cnVjdG9yKHNob3VsZFNraXBZZWFyTGlrZURhdGU6IGJvb2xlYW4pIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5zaG91bGRTa2lwWWVhckxpa2VEYXRlID0gc2hvdWxkU2tpcFllYXJMaWtlRGF0ZTtcbiAgICB9XG5cbiAgICBpbm5lclBhdHRlcm4oKTogUmVnRXhwIHtcbiAgICAgICAgcmV0dXJuIFBBVFRFUk47XG4gICAgfVxuXG4gICAgaW5uZXJFeHRyYWN0KGNvbnRleHQ6IFBhcnNpbmdDb250ZXh0LCBtYXRjaDogUmVnRXhwTWF0Y2hBcnJheSkge1xuICAgICAgICBjb25zdCBtb250aCA9IE1PTlRIX0RJQ1RJT05BUllbbWF0Y2hbTU9OVEhfTkFNRV9HUk9VUF0udG9Mb3dlckNhc2UoKV07XG4gICAgICAgIGNvbnN0IGRheSA9IHBhcnNlT3JkaW5hbE51bWJlclBhdHRlcm4obWF0Y2hbREFURV9HUk9VUF0pO1xuICAgICAgICBpZiAoZGF5ID4gMzEpIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gU2tpcCB0aGUgY2FzZSB3aGVyZSB0aGUgZGF5IGxvb2tzIGxpa2UgYSB5ZWFyIChleDogSmFudWFyeSAyMSlcbiAgICAgICAgaWYgKHRoaXMuc2hvdWxkU2tpcFllYXJMaWtlRGF0ZSkge1xuICAgICAgICAgICAgaWYgKCFtYXRjaFtEQVRFX1RPX0dST1VQXSAmJiAhbWF0Y2hbWUVBUl9HUk9VUF0gJiYgbWF0Y2hbREFURV9HUk9VUF0ubWF0Y2goL14yWzAtNV0kLykpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBjb25zdCBjb21wb25lbnRzID0gY29udGV4dFxuICAgICAgICAgICAgLmNyZWF0ZVBhcnNpbmdDb21wb25lbnRzKHtcbiAgICAgICAgICAgICAgICBkYXk6IGRheSxcbiAgICAgICAgICAgICAgICBtb250aDogbW9udGgsXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLmFkZFRhZyhcInBhcnNlci9FTk1vbnRoTmFtZU1pZGRsZUVuZGlhblBhcnNlclwiKTtcblxuICAgICAgICBpZiAobWF0Y2hbWUVBUl9HUk9VUF0pIHtcbiAgICAgICAgICAgIGNvbnN0IHllYXIgPSBwYXJzZVllYXIobWF0Y2hbWUVBUl9HUk9VUF0pO1xuICAgICAgICAgICAgY29tcG9uZW50cy5hc3NpZ24oXCJ5ZWFyXCIsIHllYXIpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29uc3QgeWVhciA9IGZpbmRZZWFyQ2xvc2VzdFRvUmVmKGNvbnRleHQucmVmRGF0ZSwgZGF5LCBtb250aCk7XG4gICAgICAgICAgICBjb21wb25lbnRzLmltcGx5KFwieWVhclwiLCB5ZWFyKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIW1hdGNoW0RBVEVfVE9fR1JPVVBdKSB7XG4gICAgICAgICAgICByZXR1cm4gY29tcG9uZW50cztcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFRleHQgY2FuIGJlICdyYW5nZScgdmFsdWUuIFN1Y2ggYXMgJ0phbnVhcnkgMTIgLSAxMywgMjAxMidcbiAgICAgICAgY29uc3QgZW5kRGF0ZSA9IHBhcnNlT3JkaW5hbE51bWJlclBhdHRlcm4obWF0Y2hbREFURV9UT19HUk9VUF0pO1xuICAgICAgICBjb25zdCByZXN1bHQgPSBjb250ZXh0LmNyZWF0ZVBhcnNpbmdSZXN1bHQobWF0Y2guaW5kZXgsIG1hdGNoWzBdKTtcbiAgICAgICAgcmVzdWx0LnN0YXJ0ID0gY29tcG9uZW50cztcbiAgICAgICAgcmVzdWx0LmVuZCA9IGNvbXBvbmVudHMuY2xvbmUoKTtcbiAgICAgICAgcmVzdWx0LmVuZC5hc3NpZ24oXCJkYXlcIiwgZW5kRGF0ZSk7XG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG59XG4iLCAiaW1wb3J0IHsgRlVMTF9NT05USF9OQU1FX0RJQ1RJT05BUlksIE1PTlRIX0RJQ1RJT05BUlkgfSBmcm9tIFwiLi4vY29uc3RhbnRzXCI7XG5pbXBvcnQgeyBQYXJzaW5nQ29udGV4dCB9IGZyb20gXCIuLi8uLi8uLi9jaHJvbm9cIjtcbmltcG9ydCB7IGZpbmRZZWFyQ2xvc2VzdFRvUmVmIH0gZnJvbSBcIi4uLy4uLy4uL2NhbGN1bGF0aW9uL3llYXJzXCI7XG5pbXBvcnQgeyBtYXRjaEFueVBhdHRlcm4gfSBmcm9tIFwiLi4vLi4vLi4vdXRpbHMvcGF0dGVyblwiO1xuaW1wb3J0IHsgWUVBUl9QQVRURVJOLCBwYXJzZVllYXIgfSBmcm9tIFwiLi4vY29uc3RhbnRzXCI7XG5pbXBvcnQgeyBBYnN0cmFjdFBhcnNlcldpdGhXb3JkQm91bmRhcnlDaGVja2luZyB9IGZyb20gXCIuLi8uLi8uLi9jb21tb24vcGFyc2Vycy9BYnN0cmFjdFBhcnNlcldpdGhXb3JkQm91bmRhcnlcIjtcblxuY29uc3QgUEFUVEVSTiA9IG5ldyBSZWdFeHAoXG4gICAgYCgoPzppbilcXFxccyopP2AgK1xuICAgICAgICBgKCR7bWF0Y2hBbnlQYXR0ZXJuKE1PTlRIX0RJQ1RJT05BUlkpfSlgICtcbiAgICAgICAgYFxcXFxzKmAgK1xuICAgICAgICBgKD86YCArXG4gICAgICAgIGAoPzosfC18b2YpP1xcXFxzKigke1lFQVJfUEFUVEVSTn0pP2AgK1xuICAgICAgICBcIik/XCIgK1xuICAgICAgICBcIig/PVteXFxcXHNcXFxcd118XFxcXHMrW14wLTldfFxcXFxzKyR8JClcIixcbiAgICBcImlcIlxuKTtcblxuY29uc3QgUFJFRklYX0dST1VQID0gMTtcbmNvbnN0IE1PTlRIX05BTUVfR1JPVVAgPSAyO1xuY29uc3QgWUVBUl9HUk9VUCA9IDM7XG5cbi8qKlxuICogVGhlIHBhcnNlciBmb3IgcGFyc2luZyBtb250aCBuYW1lIGFuZCB5ZWFyLlxuICogLSBKYW51YXJ5LCAyMDEyXG4gKiAtIEphbnVhcnkgMjAxMlxuICogLSBKYW51YXJ5XG4gKiAoaW4pIEphblxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBFTk1vbnRoTmFtZVBhcnNlciBleHRlbmRzIEFic3RyYWN0UGFyc2VyV2l0aFdvcmRCb3VuZGFyeUNoZWNraW5nIHtcbiAgICBpbm5lclBhdHRlcm4oKTogUmVnRXhwIHtcbiAgICAgICAgcmV0dXJuIFBBVFRFUk47XG4gICAgfVxuXG4gICAgaW5uZXJFeHRyYWN0KGNvbnRleHQ6IFBhcnNpbmdDb250ZXh0LCBtYXRjaDogUmVnRXhwTWF0Y2hBcnJheSkge1xuICAgICAgICBjb25zdCBtb250aE5hbWUgPSBtYXRjaFtNT05USF9OQU1FX0dST1VQXS50b0xvd2VyQ2FzZSgpO1xuXG4gICAgICAgIC8vIHNraXAgc29tZSB1bmxpa2VseSB3b3JkcyBcImphblwiLCBcIm1hclwiLCAuLlxuICAgICAgICBpZiAobWF0Y2hbMF0ubGVuZ3RoIDw9IDMgJiYgIUZVTExfTU9OVEhfTkFNRV9ESUNUSU9OQVJZW21vbnRoTmFtZV0pIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgcmVzdWx0ID0gY29udGV4dC5jcmVhdGVQYXJzaW5nUmVzdWx0KFxuICAgICAgICAgICAgbWF0Y2guaW5kZXggKyAobWF0Y2hbUFJFRklYX0dST1VQXSB8fCBcIlwiKS5sZW5ndGgsXG4gICAgICAgICAgICBtYXRjaC5pbmRleCArIG1hdGNoWzBdLmxlbmd0aFxuICAgICAgICApO1xuICAgICAgICByZXN1bHQuc3RhcnQuaW1wbHkoXCJkYXlcIiwgMSk7XG4gICAgICAgIHJlc3VsdC5zdGFydC5hZGRUYWcoXCJwYXJzZXIvRU5Nb250aE5hbWVQYXJzZXJcIik7XG5cbiAgICAgICAgY29uc3QgbW9udGggPSBNT05USF9ESUNUSU9OQVJZW21vbnRoTmFtZV07XG4gICAgICAgIHJlc3VsdC5zdGFydC5hc3NpZ24oXCJtb250aFwiLCBtb250aCk7XG5cbiAgICAgICAgaWYgKG1hdGNoW1lFQVJfR1JPVVBdKSB7XG4gICAgICAgICAgICBjb25zdCB5ZWFyID0gcGFyc2VZZWFyKG1hdGNoW1lFQVJfR1JPVVBdKTtcbiAgICAgICAgICAgIHJlc3VsdC5zdGFydC5hc3NpZ24oXCJ5ZWFyXCIsIHllYXIpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29uc3QgeWVhciA9IGZpbmRZZWFyQ2xvc2VzdFRvUmVmKGNvbnRleHQucmVmRGF0ZSwgMSwgbW9udGgpO1xuICAgICAgICAgICAgcmVzdWx0LnN0YXJ0LmltcGx5KFwieWVhclwiLCB5ZWFyKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxufVxuIiwgImltcG9ydCB7IFBhcnNpbmdDb250ZXh0IH0gZnJvbSBcIi4uLy4uLy4uL2Nocm9ub1wiO1xuaW1wb3J0IHsgTU9OVEhfRElDVElPTkFSWSB9IGZyb20gXCIuLi9jb25zdGFudHNcIjtcbmltcG9ydCB7IG1hdGNoQW55UGF0dGVybiB9IGZyb20gXCIuLi8uLi8uLi91dGlscy9wYXR0ZXJuXCI7XG5pbXBvcnQgeyBBYnN0cmFjdFBhcnNlcldpdGhXb3JkQm91bmRhcnlDaGVja2luZyB9IGZyb20gXCIuLi8uLi8uLi9jb21tb24vcGFyc2Vycy9BYnN0cmFjdFBhcnNlcldpdGhXb3JkQm91bmRhcnlcIjtcblxuLypcbiAgICBEYXRlIGZvcm1hdCB3aXRoIHNsYXNoIFwiL1wiIGJldHdlZW4gbnVtYmVycyBsaWtlIEVOU2xhc2hEYXRlRm9ybWF0UGFyc2VyLFxuICAgIGJ1dCB0aGlzIHBhcnNlciBleHBlY3QgeWVhciBiZWZvcmUgbW9udGggYW5kIGRhdGUuXG4gICAgLSBZWVlZL01NL0REXG4gICAgLSBZWVlZLU1NLUREXG4gICAgLSBZWVlZLk1NLkREXG4qL1xuY29uc3QgUEFUVEVSTiA9IG5ldyBSZWdFeHAoXG4gICAgYChbMC05XXs0fSlbLVxcXFwuXFxcXC9cXFxcc11gICtcbiAgICAgICAgYCg/Oigke21hdGNoQW55UGF0dGVybihNT05USF9ESUNUSU9OQVJZKX0pfChbMC05XXsxLDJ9KSlbLVxcXFwuXFxcXC9cXFxcc11gICtcbiAgICAgICAgYChbMC05XXsxLDJ9KWAgK1xuICAgICAgICBcIig/PVxcXFxXfCQpXCIsXG4gICAgXCJpXCJcbik7XG5cbmNvbnN0IFlFQVJfTlVNQkVSX0dST1VQID0gMTtcbmNvbnN0IE1PTlRIX05BTUVfR1JPVVAgPSAyO1xuY29uc3QgTU9OVEhfTlVNQkVSX0dST1VQID0gMztcbmNvbnN0IERBVEVfTlVNQkVSX0dST1VQID0gNDtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRU5ZZWFyTW9udGhEYXlQYXJzZXIgZXh0ZW5kcyBBYnN0cmFjdFBhcnNlcldpdGhXb3JkQm91bmRhcnlDaGVja2luZyB7XG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBzdHJpY3RNb250aERhdGVPcmRlcjogYm9vbGVhbikge1xuICAgICAgICBzdXBlcigpO1xuICAgIH1cblxuICAgIGlubmVyUGF0dGVybigpOiBSZWdFeHAge1xuICAgICAgICByZXR1cm4gUEFUVEVSTjtcbiAgICB9XG5cbiAgICBpbm5lckV4dHJhY3QoY29udGV4dDogUGFyc2luZ0NvbnRleHQsIG1hdGNoOiBSZWdFeHBNYXRjaEFycmF5KSB7XG4gICAgICAgIGNvbnN0IHllYXIgPSBwYXJzZUludChtYXRjaFtZRUFSX05VTUJFUl9HUk9VUF0pO1xuICAgICAgICBsZXQgZGF5ID0gcGFyc2VJbnQobWF0Y2hbREFURV9OVU1CRVJfR1JPVVBdKTtcbiAgICAgICAgbGV0IG1vbnRoID0gbWF0Y2hbTU9OVEhfTlVNQkVSX0dST1VQXVxuICAgICAgICAgICAgPyBwYXJzZUludChtYXRjaFtNT05USF9OVU1CRVJfR1JPVVBdKVxuICAgICAgICAgICAgOiBNT05USF9ESUNUSU9OQVJZW21hdGNoW01PTlRIX05BTUVfR1JPVVBdLnRvTG93ZXJDYXNlKCldO1xuXG4gICAgICAgIGlmIChtb250aCA8IDEgfHwgbW9udGggPiAxMikge1xuICAgICAgICAgICAgaWYgKHRoaXMuc3RyaWN0TW9udGhEYXRlT3JkZXIpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChkYXkgPj0gMSAmJiBkYXkgPD0gMTIpIHtcbiAgICAgICAgICAgICAgICBbbW9udGgsIGRheV0gPSBbZGF5LCBtb250aF07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGRheSA8IDEgfHwgZGF5ID4gMzEpIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGRheTogZGF5LFxuICAgICAgICAgICAgbW9udGg6IG1vbnRoLFxuICAgICAgICAgICAgeWVhcjogeWVhcixcbiAgICAgICAgfTtcbiAgICB9XG59XG4iLCAiaW1wb3J0IHsgUGFyc2luZ0NvbnRleHQgfSBmcm9tIFwiLi4vLi4vLi4vY2hyb25vXCI7XG5pbXBvcnQgeyBQYXJzaW5nQ29tcG9uZW50cyB9IGZyb20gXCIuLi8uLi8uLi9yZXN1bHRzXCI7XG5pbXBvcnQgeyBBYnN0cmFjdFBhcnNlcldpdGhXb3JkQm91bmRhcnlDaGVja2luZyB9IGZyb20gXCIuLi8uLi8uLi9jb21tb24vcGFyc2Vycy9BYnN0cmFjdFBhcnNlcldpdGhXb3JkQm91bmRhcnlcIjtcblxuY29uc3QgUEFUVEVSTiA9IG5ldyBSZWdFeHAoXCIoWzAtOV18MFsxLTldfDFbMDEyXSkvKFswLTldezR9KVwiICsgXCJcIiwgXCJpXCIpO1xuXG5jb25zdCBNT05USF9HUk9VUCA9IDE7XG5jb25zdCBZRUFSX0dST1VQID0gMjtcblxuLyoqXG4gKiBNb250aC9ZZWFyIGRhdGUgZm9ybWF0IHdpdGggc2xhc2ggXCIvXCIgKGFsc28gXCItXCIgYW5kIFwiLlwiKSBiZXR3ZWVuIG51bWJlcnNcbiAqIC0gMTEvMDVcbiAqIC0gMDYvMjAwNVxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBFTlNsYXNoTW9udGhGb3JtYXRQYXJzZXIgZXh0ZW5kcyBBYnN0cmFjdFBhcnNlcldpdGhXb3JkQm91bmRhcnlDaGVja2luZyB7XG4gICAgaW5uZXJQYXR0ZXJuKCk6IFJlZ0V4cCB7XG4gICAgICAgIHJldHVybiBQQVRURVJOO1xuICAgIH1cblxuICAgIGlubmVyRXh0cmFjdChjb250ZXh0OiBQYXJzaW5nQ29udGV4dCwgbWF0Y2g6IFJlZ0V4cE1hdGNoQXJyYXkpOiBQYXJzaW5nQ29tcG9uZW50cyB7XG4gICAgICAgIGNvbnN0IHllYXIgPSBwYXJzZUludChtYXRjaFtZRUFSX0dST1VQXSk7XG4gICAgICAgIGNvbnN0IG1vbnRoID0gcGFyc2VJbnQobWF0Y2hbTU9OVEhfR1JPVVBdKTtcblxuICAgICAgICByZXR1cm4gY29udGV4dC5jcmVhdGVQYXJzaW5nQ29tcG9uZW50cygpLmltcGx5KFwiZGF5XCIsIDEpLmFzc2lnbihcIm1vbnRoXCIsIG1vbnRoKS5hc3NpZ24oXCJ5ZWFyXCIsIHllYXIpO1xuICAgIH1cbn1cbiIsICJpbXBvcnQgeyBQYXJzZXIsIFBhcnNpbmdDb250ZXh0IH0gZnJvbSBcIi4uLy4uL2Nocm9ub1wiO1xuaW1wb3J0IHsgUGFyc2luZ0NvbXBvbmVudHMsIFBhcnNpbmdSZXN1bHQgfSBmcm9tIFwiLi4vLi4vcmVzdWx0c1wiO1xuaW1wb3J0IHsgTWVyaWRpZW0gfSBmcm9tIFwiLi4vLi4vdHlwZXNcIjtcblxuLy8gcHJldHRpZXItaWdub3JlXG5mdW5jdGlvbiBwcmltYXJ5VGltZVBhdHRlcm4obGVmdEJvdW5kYXJ5OiBzdHJpbmcsIHByaW1hcnlQcmVmaXg6IHN0cmluZywgcHJpbWFyeVN1ZmZpeDogc3RyaW5nLCBmbGFnczogc3RyaW5nKSB7XG4gICAgcmV0dXJuIG5ldyBSZWdFeHAoXG4gICAgICAgICAgICBgJHtsZWZ0Qm91bmRhcnl9YCArXG4gICAgICAgICAgICBgJHtwcmltYXJ5UHJlZml4fWAgK1xuICAgICAgICAgICAgYChcXFxcZHsxLDR9KWAgK1xuICAgICAgICAgICAgYCg/OmAgK1xuICAgICAgICAgICAgICAgIGAoPzpcXFxcLnw6fFx1RkYxQSlgICtcbiAgICAgICAgICAgICAgICBgKFxcXFxkezEsMn0pYCArXG4gICAgICAgICAgICAgICAgYCg/OmAgK1xuICAgICAgICAgICAgICAgICAgICBgKD86OnxcdUZGMUEpYCArXG4gICAgICAgICAgICAgICAgICAgIGAoXFxcXGR7Mn0pYCArXG4gICAgICAgICAgICAgICAgICAgIGAoPzpcXFxcLihcXFxcZHsxLDZ9KSk/YCArXG4gICAgICAgICAgICAgICAgYCk/YCArXG4gICAgICAgICAgICBgKT9gICtcbiAgICAgICAgICAgIGAoPzpcXFxccyooYVxcXFwubVxcXFwufHBcXFxcLm1cXFxcLnxhbT98cG0/KSk/YCArXG4gICAgICAgICAgICBgJHtwcmltYXJ5U3VmZml4fWAsXG4gICAgICAgIGZsYWdzXG4gICAgKTtcbn1cblxuLy8gcHJldHRpZXItaWdub3JlXG5mdW5jdGlvbiBmb2xsb3dpbmdUaW1lUGF0dGVuKGZvbGxvd2luZ1BoYXNlOiBzdHJpbmcsIGZvbGxvd2luZ1N1ZmZpeDogc3RyaW5nKSB7XG4gICAgcmV0dXJuIG5ldyBSZWdFeHAoXG4gICAgICAgIGBeKCR7Zm9sbG93aW5nUGhhc2V9KWAgK1xuICAgICAgICAgICAgYChcXFxcZHsxLDR9KWAgK1xuICAgICAgICAgICAgYCg/OmAgK1xuICAgICAgICAgICAgICAgIGAoPzpcXFxcLnxcXFxcOnxcXFxcXHVGRjFBKWAgK1xuICAgICAgICAgICAgICAgIGAoXFxcXGR7MSwyfSlgICtcbiAgICAgICAgICAgICAgICBgKD86YCArXG4gICAgICAgICAgICAgICAgICAgIGAoPzpcXFxcLnxcXFxcOnxcXFxcXHVGRjFBKWAgK1xuICAgICAgICAgICAgICAgICAgICBgKFxcXFxkezEsMn0pKD86XFxcXC4oXFxcXGR7MSw2fSkpP2AgK1xuICAgICAgICAgICAgICAgIGApP2AgK1xuICAgICAgICAgICAgYCk/YCArXG4gICAgICAgICAgICBgKD86XFxcXHMqKGFcXFxcLm1cXFxcLnxwXFxcXC5tXFxcXC58YW0/fHBtPykpP2AgK1xuICAgICAgICAgICAgYCR7Zm9sbG93aW5nU3VmZml4fWAsXG4gICAgICAgIFwiaVwiXG4gICAgKTtcbn1cblxuY29uc3QgSE9VUl9HUk9VUCA9IDI7XG5jb25zdCBNSU5VVEVfR1JPVVAgPSAzO1xuY29uc3QgU0VDT05EX0dST1VQID0gNDtcbmNvbnN0IE1JTExJX1NFQ09ORF9HUk9VUCA9IDU7XG5jb25zdCBBTV9QTV9IT1VSX0dST1VQID0gNjtcblxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIEFic3RyYWN0VGltZUV4cHJlc3Npb25QYXJzZXIgaW1wbGVtZW50cyBQYXJzZXIge1xuICAgIGFic3RyYWN0IHByaW1hcnlQcmVmaXgoKTogc3RyaW5nO1xuICAgIGFic3RyYWN0IGZvbGxvd2luZ1BoYXNlKCk6IHN0cmluZztcbiAgICBzdHJpY3RNb2RlOiBib29sZWFuO1xuXG4gICAgY29uc3RydWN0b3Ioc3RyaWN0TW9kZSA9IGZhbHNlKSB7XG4gICAgICAgIHRoaXMuc3RyaWN0TW9kZSA9IHN0cmljdE1vZGU7XG4gICAgfVxuXG4gICAgcGF0dGVybkZsYWdzKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiBcImlcIjtcbiAgICB9XG5cbiAgICBwcmltYXJ5UGF0dGVybkxlZnRCb3VuZGFyeSgpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gYChefFxcXFxzfFR8XFxcXGIpYDtcbiAgICB9XG5cbiAgICBwcmltYXJ5U3VmZml4KCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiBgKD8hLykoPz1cXFxcV3wkKWA7XG4gICAgfVxuXG4gICAgZm9sbG93aW5nU3VmZml4KCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiBgKD8hLykoPz1cXFxcV3wkKWA7XG4gICAgfVxuXG4gICAgcGF0dGVybihjb250ZXh0OiBQYXJzaW5nQ29udGV4dCk6IFJlZ0V4cCB7XG4gICAgICAgIHJldHVybiB0aGlzLmdldFByaW1hcnlUaW1lUGF0dGVyblRocm91Z2hDYWNoZSgpO1xuICAgIH1cblxuICAgIGV4dHJhY3QoY29udGV4dDogUGFyc2luZ0NvbnRleHQsIG1hdGNoOiBSZWdFeHBNYXRjaEFycmF5KTogUGFyc2luZ1Jlc3VsdCB7XG4gICAgICAgIGNvbnN0IHN0YXJ0Q29tcG9uZW50cyA9IHRoaXMuZXh0cmFjdFByaW1hcnlUaW1lQ29tcG9uZW50cyhjb250ZXh0LCBtYXRjaCk7XG4gICAgICAgIGlmICghc3RhcnRDb21wb25lbnRzKSB7XG4gICAgICAgICAgICAvLyBJZiB0aGUgbWF0Y2ggc2VlbSBsaWtlIGEgeWVhciBlLmcuIFwiMjAxMy4xMjouLi5cIixcbiAgICAgICAgICAgIC8vIHRoZW4gc2tpcHMgdGhlIHllYXIgcGFydCBhbmQgdHJ5IG1hdGNoaW5nIGFnYWluLlxuICAgICAgICAgICAgaWYgKG1hdGNoWzBdLm1hdGNoKC9eXFxkezR9LykpIHtcbiAgICAgICAgICAgICAgICBtYXRjaC5pbmRleCArPSA0OyAvLyBTa2lwIG92ZXIgcG90ZW50aWFsIG92ZXJsYXBwaW5nIHBhdHRlcm5cbiAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgbWF0Y2guaW5kZXggKz0gbWF0Y2hbMF0ubGVuZ3RoOyAvLyBTa2lwIG92ZXIgcG90ZW50aWFsIG92ZXJsYXBwaW5nIHBhdHRlcm5cbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgaW5kZXggPSBtYXRjaC5pbmRleCArIG1hdGNoWzFdLmxlbmd0aDtcbiAgICAgICAgY29uc3QgdGV4dCA9IG1hdGNoWzBdLnN1YnN0cmluZyhtYXRjaFsxXS5sZW5ndGgpO1xuICAgICAgICBjb25zdCByZXN1bHQgPSBjb250ZXh0LmNyZWF0ZVBhcnNpbmdSZXN1bHQoaW5kZXgsIHRleHQsIHN0YXJ0Q29tcG9uZW50cyk7XG4gICAgICAgIG1hdGNoLmluZGV4ICs9IG1hdGNoWzBdLmxlbmd0aDsgLy8gU2tpcCBvdmVyIHBvdGVudGlhbCBvdmVybGFwcGluZyBwYXR0ZXJuXG5cbiAgICAgICAgY29uc3QgcmVtYWluaW5nVGV4dCA9IGNvbnRleHQudGV4dC5zdWJzdHJpbmcobWF0Y2guaW5kZXgpO1xuICAgICAgICBjb25zdCBmb2xsb3dpbmdQYXR0ZXJuID0gdGhpcy5nZXRGb2xsb3dpbmdUaW1lUGF0dGVyblRocm91Z2hDYWNoZSgpO1xuICAgICAgICBjb25zdCBmb2xsb3dpbmdNYXRjaCA9IGZvbGxvd2luZ1BhdHRlcm4uZXhlYyhyZW1haW5pbmdUZXh0KTtcblxuICAgICAgICAvLyBQYXR0ZXJuIFwiNDU2LTEyXCIsIFwiMjAyMi0xMlwiIHNob3VsZCBub3QgYmUgdGltZSB3aXRob3V0IHByb3BlciBjb250ZXh0XG4gICAgICAgIGlmICh0ZXh0Lm1hdGNoKC9eXFxkezMsNH0vKSAmJiBmb2xsb3dpbmdNYXRjaCkge1xuICAgICAgICAgICAgLy8gZS5nLiBcIjIwMjItMTJcIlxuICAgICAgICAgICAgaWYgKGZvbGxvd2luZ01hdGNoWzBdLm1hdGNoKC9eXFxzKihbKy1dKVxccypcXGR7Miw0fSQvKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gZS5nLiBcIjIwMjItMTI6MDEuLi5cIlxuICAgICAgICAgICAgaWYgKGZvbGxvd2luZ01hdGNoWzBdLm1hdGNoKC9eXFxzKihbKy1dKVxccypcXGR7Mn1cXFdcXGR7Mn0vKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKFxuICAgICAgICAgICAgIWZvbGxvd2luZ01hdGNoIHx8XG4gICAgICAgICAgICAvLyBQYXR0ZXJuIFwiWVkuWVkgLVhYWFhcIiBpcyBtb3JlIGxpa2UgdGltZXpvbmUgb2Zmc2V0XG4gICAgICAgICAgICBmb2xsb3dpbmdNYXRjaFswXS5tYXRjaCgvXlxccyooWystXSlcXHMqXFxkezMsNH0kLylcbiAgICAgICAgKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5jaGVja0FuZFJldHVybldpdGhvdXRGb2xsb3dpbmdQYXR0ZXJuKHJlc3VsdCk7XG4gICAgICAgIH1cblxuICAgICAgICByZXN1bHQuZW5kID0gdGhpcy5leHRyYWN0Rm9sbG93aW5nVGltZUNvbXBvbmVudHMoY29udGV4dCwgZm9sbG93aW5nTWF0Y2gsIHJlc3VsdCk7XG4gICAgICAgIGlmIChyZXN1bHQuZW5kKSB7XG4gICAgICAgICAgICByZXN1bHQudGV4dCArPSBmb2xsb3dpbmdNYXRjaFswXTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0aGlzLmNoZWNrQW5kUmV0dXJuV2l0aEZvbGxvd2luZ1BhdHRlcm4ocmVzdWx0KTtcbiAgICB9XG5cbiAgICBleHRyYWN0UHJpbWFyeVRpbWVDb21wb25lbnRzKFxuICAgICAgICBjb250ZXh0OiBQYXJzaW5nQ29udGV4dCxcbiAgICAgICAgbWF0Y2g6IFJlZ0V4cE1hdGNoQXJyYXksXG4gICAgICAgIHN0cmljdCA9IGZhbHNlXG4gICAgKTogbnVsbCB8IFBhcnNpbmdDb21wb25lbnRzIHtcbiAgICAgICAgY29uc3QgY29tcG9uZW50cyA9IGNvbnRleHQuY3JlYXRlUGFyc2luZ0NvbXBvbmVudHMoKTtcbiAgICAgICAgbGV0IG1pbnV0ZSA9IDA7XG4gICAgICAgIGxldCBtZXJpZGllbSA9IG51bGw7XG5cbiAgICAgICAgLy8gLS0tLS0gSG91cnNcbiAgICAgICAgbGV0IGhvdXIgPSBwYXJzZUludChtYXRjaFtIT1VSX0dST1VQXSk7XG4gICAgICAgIGlmIChob3VyID4gMTAwKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5zdHJpY3RNb2RlIHx8IG1hdGNoW01JTlVURV9HUk9VUF0gIT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBtaW51dGUgPSBob3VyICUgMTAwO1xuICAgICAgICAgICAgaG91ciA9IE1hdGguZmxvb3IoaG91ciAvIDEwMCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoaG91ciA+IDI0KSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIC0tLS0tIE1pbnV0ZXNcbiAgICAgICAgaWYgKG1hdGNoW01JTlVURV9HUk9VUF0gIT0gbnVsbCkge1xuICAgICAgICAgICAgaWYgKG1hdGNoW01JTlVURV9HUk9VUF0ubGVuZ3RoID09IDEgJiYgIW1hdGNoW0FNX1BNX0hPVVJfR1JPVVBdKSB7XG4gICAgICAgICAgICAgICAgLy8gU2tpcCBzaW5nbGUgZGlnaXQgbWludXRlIGUuZy4gXCJhdCAxLjEgeHhcIlxuICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBtaW51dGUgPSBwYXJzZUludChtYXRjaFtNSU5VVEVfR1JPVVBdKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChtaW51dGUgPj0gNjApIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGhvdXIgPiAxMikge1xuICAgICAgICAgICAgbWVyaWRpZW0gPSBNZXJpZGllbS5QTTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIC0tLS0tIEFNICYgUE1cbiAgICAgICAgaWYgKG1hdGNoW0FNX1BNX0hPVVJfR1JPVVBdICE9IG51bGwpIHtcbiAgICAgICAgICAgIGlmIChob3VyID4gMTIpIHJldHVybiBudWxsO1xuICAgICAgICAgICAgY29uc3QgYW1wbSA9IG1hdGNoW0FNX1BNX0hPVVJfR1JPVVBdWzBdLnRvTG93ZXJDYXNlKCk7XG4gICAgICAgICAgICBpZiAoYW1wbSA9PSBcImFcIikge1xuICAgICAgICAgICAgICAgIG1lcmlkaWVtID0gTWVyaWRpZW0uQU07XG4gICAgICAgICAgICAgICAgaWYgKGhvdXIgPT0gMTIpIHtcbiAgICAgICAgICAgICAgICAgICAgaG91ciA9IDA7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoYW1wbSA9PSBcInBcIikge1xuICAgICAgICAgICAgICAgIG1lcmlkaWVtID0gTWVyaWRpZW0uUE07XG4gICAgICAgICAgICAgICAgaWYgKGhvdXIgIT0gMTIpIHtcbiAgICAgICAgICAgICAgICAgICAgaG91ciArPSAxMjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBjb21wb25lbnRzLmFzc2lnbihcImhvdXJcIiwgaG91cik7XG4gICAgICAgIGNvbXBvbmVudHMuYXNzaWduKFwibWludXRlXCIsIG1pbnV0ZSk7XG5cbiAgICAgICAgaWYgKG1lcmlkaWVtICE9PSBudWxsKSB7XG4gICAgICAgICAgICBjb21wb25lbnRzLmFzc2lnbihcIm1lcmlkaWVtXCIsIG1lcmlkaWVtKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGlmIChob3VyIDwgMTIpIHtcbiAgICAgICAgICAgICAgICBjb21wb25lbnRzLmltcGx5KFwibWVyaWRpZW1cIiwgTWVyaWRpZW0uQU0pO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBjb21wb25lbnRzLmltcGx5KFwibWVyaWRpZW1cIiwgTWVyaWRpZW0uUE0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gLS0tLS0gTWlsbGlzZWNvbmRcbiAgICAgICAgaWYgKG1hdGNoW01JTExJX1NFQ09ORF9HUk9VUF0gIT0gbnVsbCkge1xuICAgICAgICAgICAgY29uc3QgbWlsbGlzZWNvbmQgPSBwYXJzZUludChtYXRjaFtNSUxMSV9TRUNPTkRfR1JPVVBdLnN1YnN0cmluZygwLCAzKSk7XG4gICAgICAgICAgICBpZiAobWlsbGlzZWNvbmQgPj0gMTAwMCkgcmV0dXJuIG51bGw7XG5cbiAgICAgICAgICAgIGNvbXBvbmVudHMuYXNzaWduKFwibWlsbGlzZWNvbmRcIiwgbWlsbGlzZWNvbmQpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gLS0tLS0gU2Vjb25kXG4gICAgICAgIGlmIChtYXRjaFtTRUNPTkRfR1JPVVBdICE9IG51bGwpIHtcbiAgICAgICAgICAgIGNvbnN0IHNlY29uZCA9IHBhcnNlSW50KG1hdGNoW1NFQ09ORF9HUk9VUF0pO1xuICAgICAgICAgICAgaWYgKHNlY29uZCA+PSA2MCkgcmV0dXJuIG51bGw7XG5cbiAgICAgICAgICAgIGNvbXBvbmVudHMuYXNzaWduKFwic2Vjb25kXCIsIHNlY29uZCk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gY29tcG9uZW50cztcbiAgICB9XG5cbiAgICBleHRyYWN0Rm9sbG93aW5nVGltZUNvbXBvbmVudHMoXG4gICAgICAgIGNvbnRleHQ6IFBhcnNpbmdDb250ZXh0LFxuICAgICAgICBtYXRjaDogUmVnRXhwTWF0Y2hBcnJheSxcbiAgICAgICAgcmVzdWx0OiBQYXJzaW5nUmVzdWx0XG4gICAgKTogbnVsbCB8IFBhcnNpbmdDb21wb25lbnRzIHtcbiAgICAgICAgY29uc3QgY29tcG9uZW50cyA9IGNvbnRleHQuY3JlYXRlUGFyc2luZ0NvbXBvbmVudHMoKTtcblxuICAgICAgICAvLyAtLS0tLSBNaWxsaXNlY29uZFxuICAgICAgICBpZiAobWF0Y2hbTUlMTElfU0VDT05EX0dST1VQXSAhPSBudWxsKSB7XG4gICAgICAgICAgICBjb25zdCBtaWxsaXNlY29uZCA9IHBhcnNlSW50KG1hdGNoW01JTExJX1NFQ09ORF9HUk9VUF0uc3Vic3RyaW5nKDAsIDMpKTtcbiAgICAgICAgICAgIGlmIChtaWxsaXNlY29uZCA+PSAxMDAwKSByZXR1cm4gbnVsbDtcblxuICAgICAgICAgICAgY29tcG9uZW50cy5hc3NpZ24oXCJtaWxsaXNlY29uZFwiLCBtaWxsaXNlY29uZCk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyAtLS0tLSBTZWNvbmRcbiAgICAgICAgaWYgKG1hdGNoW1NFQ09ORF9HUk9VUF0gIT0gbnVsbCkge1xuICAgICAgICAgICAgY29uc3Qgc2Vjb25kID0gcGFyc2VJbnQobWF0Y2hbU0VDT05EX0dST1VQXSk7XG4gICAgICAgICAgICBpZiAoc2Vjb25kID49IDYwKSByZXR1cm4gbnVsbDtcblxuICAgICAgICAgICAgY29tcG9uZW50cy5hc3NpZ24oXCJzZWNvbmRcIiwgc2Vjb25kKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBob3VyID0gcGFyc2VJbnQobWF0Y2hbSE9VUl9HUk9VUF0pO1xuICAgICAgICBsZXQgbWludXRlID0gMDtcbiAgICAgICAgbGV0IG1lcmlkaWVtID0gLTE7XG5cbiAgICAgICAgLy8gLS0tLS0gTWludXRlXG4gICAgICAgIGlmIChtYXRjaFtNSU5VVEVfR1JPVVBdICE9IG51bGwpIHtcbiAgICAgICAgICAgIG1pbnV0ZSA9IHBhcnNlSW50KG1hdGNoW01JTlVURV9HUk9VUF0pO1xuICAgICAgICB9IGVsc2UgaWYgKGhvdXIgPiAxMDApIHtcbiAgICAgICAgICAgIG1pbnV0ZSA9IGhvdXIgJSAxMDA7XG4gICAgICAgICAgICBob3VyID0gTWF0aC5mbG9vcihob3VyIC8gMTAwKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChtaW51dGUgPj0gNjAgfHwgaG91ciA+IDI0KSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChob3VyID49IDEyKSB7XG4gICAgICAgICAgICBtZXJpZGllbSA9IE1lcmlkaWVtLlBNO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gLS0tLS0gQU0gJiBQTVxuICAgICAgICBpZiAobWF0Y2hbQU1fUE1fSE9VUl9HUk9VUF0gIT0gbnVsbCkge1xuICAgICAgICAgICAgaWYgKGhvdXIgPiAxMikge1xuICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjb25zdCBhbXBtID0gbWF0Y2hbQU1fUE1fSE9VUl9HUk9VUF1bMF0udG9Mb3dlckNhc2UoKTtcbiAgICAgICAgICAgIGlmIChhbXBtID09IFwiYVwiKSB7XG4gICAgICAgICAgICAgICAgbWVyaWRpZW0gPSBNZXJpZGllbS5BTTtcbiAgICAgICAgICAgICAgICBpZiAoaG91ciA9PSAxMikge1xuICAgICAgICAgICAgICAgICAgICBob3VyID0gMDtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFjb21wb25lbnRzLmlzQ2VydGFpbihcImRheVwiKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50cy5pbXBseShcImRheVwiLCBjb21wb25lbnRzLmdldChcImRheVwiKSArIDEpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoYW1wbSA9PSBcInBcIikge1xuICAgICAgICAgICAgICAgIG1lcmlkaWVtID0gTWVyaWRpZW0uUE07XG4gICAgICAgICAgICAgICAgaWYgKGhvdXIgIT0gMTIpIGhvdXIgKz0gMTI7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICghcmVzdWx0LnN0YXJ0LmlzQ2VydGFpbihcIm1lcmlkaWVtXCIpKSB7XG4gICAgICAgICAgICAgICAgaWYgKG1lcmlkaWVtID09IE1lcmlkaWVtLkFNKSB7XG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdC5zdGFydC5pbXBseShcIm1lcmlkaWVtXCIsIE1lcmlkaWVtLkFNKTtcblxuICAgICAgICAgICAgICAgICAgICBpZiAocmVzdWx0LnN0YXJ0LmdldChcImhvdXJcIikgPT0gMTIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdC5zdGFydC5hc3NpZ24oXCJob3VyXCIsIDApO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0LnN0YXJ0LmltcGx5KFwibWVyaWRpZW1cIiwgTWVyaWRpZW0uUE0pO1xuXG4gICAgICAgICAgICAgICAgICAgIGlmIChyZXN1bHQuc3RhcnQuZ2V0KFwiaG91clwiKSAhPSAxMikge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0LnN0YXJ0LmFzc2lnbihcImhvdXJcIiwgcmVzdWx0LnN0YXJ0LmdldChcImhvdXJcIikgKyAxMik7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBjb21wb25lbnRzLmFzc2lnbihcImhvdXJcIiwgaG91cik7XG4gICAgICAgIGNvbXBvbmVudHMuYXNzaWduKFwibWludXRlXCIsIG1pbnV0ZSk7XG5cbiAgICAgICAgaWYgKG1lcmlkaWVtID49IDApIHtcbiAgICAgICAgICAgIGNvbXBvbmVudHMuYXNzaWduKFwibWVyaWRpZW1cIiwgbWVyaWRpZW0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29uc3Qgc3RhcnRBdFBNID0gcmVzdWx0LnN0YXJ0LmlzQ2VydGFpbihcIm1lcmlkaWVtXCIpICYmIHJlc3VsdC5zdGFydC5nZXQoXCJob3VyXCIpID4gMTI7XG4gICAgICAgICAgICBpZiAoc3RhcnRBdFBNKSB7XG4gICAgICAgICAgICAgICAgaWYgKHJlc3VsdC5zdGFydC5nZXQoXCJob3VyXCIpIC0gMTIgPiBob3VyKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIDEwcG0gLSAxIChhbSlcbiAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50cy5pbXBseShcIm1lcmlkaWVtXCIsIE1lcmlkaWVtLkFNKTtcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGhvdXIgPD0gMTIpIHtcbiAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50cy5hc3NpZ24oXCJob3VyXCIsIGhvdXIgKyAxMik7XG4gICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudHMuYXNzaWduKFwibWVyaWRpZW1cIiwgTWVyaWRpZW0uUE0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSBpZiAoaG91ciA+IDEyKSB7XG4gICAgICAgICAgICAgICAgY29tcG9uZW50cy5pbXBseShcIm1lcmlkaWVtXCIsIE1lcmlkaWVtLlBNKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoaG91ciA8PSAxMikge1xuICAgICAgICAgICAgICAgIGNvbXBvbmVudHMuaW1wbHkoXCJtZXJpZGllbVwiLCBNZXJpZGllbS5BTSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoY29tcG9uZW50cy5kYXRlKCkuZ2V0VGltZSgpIDwgcmVzdWx0LnN0YXJ0LmRhdGUoKS5nZXRUaW1lKCkpIHtcbiAgICAgICAgICAgIGNvbXBvbmVudHMuaW1wbHkoXCJkYXlcIiwgY29tcG9uZW50cy5nZXQoXCJkYXlcIikgKyAxKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBjb21wb25lbnRzO1xuICAgIH1cblxuICAgIHByaXZhdGUgY2hlY2tBbmRSZXR1cm5XaXRob3V0Rm9sbG93aW5nUGF0dGVybihyZXN1bHQpIHtcbiAgICAgICAgLy8gU2luZ2xlIGRpZ2l0IChlLmcgXCIxXCIpIHNob3VsZCBub3QgYmUgY291bnRlZCBhcyB0aW1lIGV4cHJlc3Npb24gKHdpdGhvdXQgcHJvcGVyIGNvbnRleHQpXG4gICAgICAgIGlmIChyZXN1bHQudGV4dC5tYXRjaCgvXlxcZCQvKSkge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBUaHJlZSBvciBtb3JlIGRpZ2l0IChlLmcuIFwiMjAzXCIsIFwiMjAxNFwiKSBzaG91bGQgbm90IGJlIGNvdW50ZWQgYXMgdGltZSBleHByZXNzaW9uICh3aXRob3V0IHByb3BlciBjb250ZXh0KVxuICAgICAgICBpZiAocmVzdWx0LnRleHQubWF0Y2goL15cXGRcXGRcXGQrJC8pKSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIEluc3RlYWQgb2YgXCJhbS9wbVwiLCBpdCBlbmRzIHdpdGggXCJhXCIgb3IgXCJwXCIgKGUuZyBcIjFhXCIsIFwiMTIzcFwiKSwgdGhpcyBzZWVtcyB1bmxpa2VseVxuICAgICAgICBpZiAocmVzdWx0LnRleHQubWF0Y2goL1xcZFthcEFQXSQvKSkge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBJZiBpdCBlbmRzIG9ubHkgd2l0aCBudW1iZXJzIG9yIGRvdHNcbiAgICAgICAgY29uc3QgZW5kaW5nV2l0aE51bWJlcnMgPSByZXN1bHQudGV4dC5tYXRjaCgvW15cXGQ6Ll0oXFxkW1xcZC5dKykkLyk7XG4gICAgICAgIGlmIChlbmRpbmdXaXRoTnVtYmVycykge1xuICAgICAgICAgICAgY29uc3QgZW5kaW5nTnVtYmVyczogc3RyaW5nID0gZW5kaW5nV2l0aE51bWJlcnNbMV07XG5cbiAgICAgICAgICAgIC8vIEluIHN0cmljdCBtb2RlIChlLmcuIFwiYXQgMVwiIG9yIFwiYXQgMS4yXCIpLCB0aGlzIHNob3VsZCBub3QgYmUgYWNjZXB0ZWRcbiAgICAgICAgICAgIGlmICh0aGlzLnN0cmljdE1vZGUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gSWYgaXQgZW5kcyBvbmx5IHdpdGggZG90IHNpbmdsZSBkaWdpdCwgZS5nLiBcImF0IDEuMlwiXG4gICAgICAgICAgICBpZiAoZW5kaW5nTnVtYmVycy5pbmNsdWRlcyhcIi5cIikgJiYgIWVuZGluZ051bWJlcnMubWF0Y2goL1xcZChcXC5cXGR7Mn0pKyQvKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBJZiBpdCBlbmRzIG9ubHkgd2l0aCBudW1iZXJzIGFib3ZlIDI0LCBlLmcuIFwiYXQgMjVcIlxuICAgICAgICAgICAgY29uc3QgZW5kaW5nTnVtYmVyVmFsID0gcGFyc2VJbnQoZW5kaW5nTnVtYmVycyk7XG4gICAgICAgICAgICBpZiAoZW5kaW5nTnVtYmVyVmFsID4gMjQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBjaGVja0FuZFJldHVybldpdGhGb2xsb3dpbmdQYXR0ZXJuKHJlc3VsdCkge1xuICAgICAgICBpZiAocmVzdWx0LnRleHQubWF0Y2goL15cXGQrLVxcZCskLykpIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gSWYgaXQgZW5kcyBvbmx5IHdpdGggbnVtYmVycyBvciBkb3RzXG4gICAgICAgIGNvbnN0IGVuZGluZ1dpdGhOdW1iZXJzID0gcmVzdWx0LnRleHQubWF0Y2goL1teXFxkOi5dKFxcZFtcXGQuXSspXFxzKi1cXHMqKFxcZFtcXGQuXSspJC8pO1xuICAgICAgICBpZiAoZW5kaW5nV2l0aE51bWJlcnMpIHtcbiAgICAgICAgICAgIC8vIEluIHN0cmljdCBtb2RlIChlLmcuIFwiYXQgMS0zXCIgb3IgXCJhdCAxLjIgLSAyLjNcIiksIHRoaXMgc2hvdWxkIG5vdCBiZSBhY2NlcHRlZFxuICAgICAgICAgICAgaWYgKHRoaXMuc3RyaWN0TW9kZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjb25zdCBzdGFydGluZ051bWJlcnM6IHN0cmluZyA9IGVuZGluZ1dpdGhOdW1iZXJzWzFdO1xuICAgICAgICAgICAgY29uc3QgZW5kaW5nTnVtYmVyczogc3RyaW5nID0gZW5kaW5nV2l0aE51bWJlcnNbMl07XG4gICAgICAgICAgICAvLyBJZiBpdCBlbmRzIG9ubHkgd2l0aCBkb3Qgc2luZ2xlIGRpZ2l0LCBlLmcuIFwiYXQgMS4yXCJcbiAgICAgICAgICAgIGlmIChlbmRpbmdOdW1iZXJzLmluY2x1ZGVzKFwiLlwiKSAmJiAhZW5kaW5nTnVtYmVycy5tYXRjaCgvXFxkKFxcLlxcZHsyfSkrJC8pKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIElmIGl0IGVuZHMgb25seSB3aXRoIG51bWJlcnMgYWJvdmUgMjQsIGUuZy4gXCJhdCAyNVwiXG4gICAgICAgICAgICBjb25zdCBlbmRpbmdOdW1iZXJWYWwgPSBwYXJzZUludChlbmRpbmdOdW1iZXJzKTtcbiAgICAgICAgICAgIGNvbnN0IHN0YXJ0aW5nTnVtYmVyVmFsID0gcGFyc2VJbnQoc3RhcnRpbmdOdW1iZXJzKTtcbiAgICAgICAgICAgIGlmIChlbmRpbmdOdW1iZXJWYWwgPiAyNCB8fCBzdGFydGluZ051bWJlclZhbCA+IDI0KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cblxuICAgIHByaXZhdGUgY2FjaGVkUHJpbWFyeVByZWZpeCA9IG51bGw7XG4gICAgcHJpdmF0ZSBjYWNoZWRQcmltYXJ5U3VmZml4ID0gbnVsbDtcbiAgICBwcml2YXRlIGNhY2hlZFByaW1hcnlUaW1lUGF0dGVybiA9IG51bGw7XG5cbiAgICBnZXRQcmltYXJ5VGltZVBhdHRlcm5UaHJvdWdoQ2FjaGUoKSB7XG4gICAgICAgIGNvbnN0IHByaW1hcnlQcmVmaXggPSB0aGlzLnByaW1hcnlQcmVmaXgoKTtcbiAgICAgICAgY29uc3QgcHJpbWFyeVN1ZmZpeCA9IHRoaXMucHJpbWFyeVN1ZmZpeCgpO1xuXG4gICAgICAgIGlmICh0aGlzLmNhY2hlZFByaW1hcnlQcmVmaXggPT09IHByaW1hcnlQcmVmaXggJiYgdGhpcy5jYWNoZWRQcmltYXJ5U3VmZml4ID09PSBwcmltYXJ5U3VmZml4KSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5jYWNoZWRQcmltYXJ5VGltZVBhdHRlcm47XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmNhY2hlZFByaW1hcnlUaW1lUGF0dGVybiA9IHByaW1hcnlUaW1lUGF0dGVybihcbiAgICAgICAgICAgIHRoaXMucHJpbWFyeVBhdHRlcm5MZWZ0Qm91bmRhcnkoKSxcbiAgICAgICAgICAgIHByaW1hcnlQcmVmaXgsXG4gICAgICAgICAgICBwcmltYXJ5U3VmZml4LFxuICAgICAgICAgICAgdGhpcy5wYXR0ZXJuRmxhZ3MoKVxuICAgICAgICApO1xuICAgICAgICB0aGlzLmNhY2hlZFByaW1hcnlQcmVmaXggPSBwcmltYXJ5UHJlZml4O1xuICAgICAgICB0aGlzLmNhY2hlZFByaW1hcnlTdWZmaXggPSBwcmltYXJ5U3VmZml4O1xuICAgICAgICByZXR1cm4gdGhpcy5jYWNoZWRQcmltYXJ5VGltZVBhdHRlcm47XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBjYWNoZWRGb2xsb3dpbmdQaGFzZSA9IG51bGw7XG4gICAgcHJpdmF0ZSBjYWNoZWRGb2xsb3dpbmdTdWZmaXggPSBudWxsO1xuICAgIHByaXZhdGUgY2FjaGVkRm9sbG93aW5nVGltZVBhdHRlbiA9IG51bGw7XG5cbiAgICBnZXRGb2xsb3dpbmdUaW1lUGF0dGVyblRocm91Z2hDYWNoZSgpIHtcbiAgICAgICAgY29uc3QgZm9sbG93aW5nUGhhc2UgPSB0aGlzLmZvbGxvd2luZ1BoYXNlKCk7XG4gICAgICAgIGNvbnN0IGZvbGxvd2luZ1N1ZmZpeCA9IHRoaXMuZm9sbG93aW5nU3VmZml4KCk7XG5cbiAgICAgICAgaWYgKHRoaXMuY2FjaGVkRm9sbG93aW5nUGhhc2UgPT09IGZvbGxvd2luZ1BoYXNlICYmIHRoaXMuY2FjaGVkRm9sbG93aW5nU3VmZml4ID09PSBmb2xsb3dpbmdTdWZmaXgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmNhY2hlZEZvbGxvd2luZ1RpbWVQYXR0ZW47XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmNhY2hlZEZvbGxvd2luZ1RpbWVQYXR0ZW4gPSBmb2xsb3dpbmdUaW1lUGF0dGVuKGZvbGxvd2luZ1BoYXNlLCBmb2xsb3dpbmdTdWZmaXgpO1xuICAgICAgICB0aGlzLmNhY2hlZEZvbGxvd2luZ1BoYXNlID0gZm9sbG93aW5nUGhhc2U7XG4gICAgICAgIHRoaXMuY2FjaGVkRm9sbG93aW5nU3VmZml4ID0gZm9sbG93aW5nU3VmZml4O1xuICAgICAgICByZXR1cm4gdGhpcy5jYWNoZWRGb2xsb3dpbmdUaW1lUGF0dGVuO1xuICAgIH1cbn1cbiIsICJpbXBvcnQgeyBQYXJzaW5nQ29udGV4dCB9IGZyb20gXCIuLi8uLi8uLi9jaHJvbm9cIjtcbmltcG9ydCB7IFBhcnNpbmdDb21wb25lbnRzLCBQYXJzaW5nUmVzdWx0IH0gZnJvbSBcIi4uLy4uLy4uL3Jlc3VsdHNcIjtcbmltcG9ydCB7IE1lcmlkaWVtIH0gZnJvbSBcIi4uLy4uLy4uL3R5cGVzXCI7XG5pbXBvcnQgeyBBYnN0cmFjdFRpbWVFeHByZXNzaW9uUGFyc2VyIH0gZnJvbSBcIi4uLy4uLy4uL2NvbW1vbi9wYXJzZXJzL0Fic3RyYWN0VGltZUV4cHJlc3Npb25QYXJzZXJcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRU5UaW1lRXhwcmVzc2lvblBhcnNlciBleHRlbmRzIEFic3RyYWN0VGltZUV4cHJlc3Npb25QYXJzZXIge1xuICAgIGNvbnN0cnVjdG9yKHN0cmljdE1vZGUpIHtcbiAgICAgICAgc3VwZXIoc3RyaWN0TW9kZSk7XG4gICAgfVxuXG4gICAgZm9sbG93aW5nUGhhc2UoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIFwiXFxcXHMqKD86XFxcXC18XFxcXFx1MjAxM3xcXFxcfnxcXFxcXHUzMDFDfHRvfHVudGlsfHRocm91Z2h8dGlsbHxcXFxcPylcXFxccypcIjtcbiAgICB9XG5cbiAgICBwcmltYXJ5UHJlZml4KCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiBcIig/Oig/OmF0fGZyb20pXFxcXHMqKT8/XCI7XG4gICAgfVxuXG4gICAgcHJpbWFyeVN1ZmZpeCgpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gXCIoPzpcXFxccyooPzpvXFxcXFcqY2xvY2t8YXRcXFxccypuaWdodHxpblxcXFxzKnRoZVxcXFxzKig/Om1vcm5pbmd8YWZ0ZXJub29uKSkpPyg/IS8pKD89XFxcXFd8JClcIjtcbiAgICB9XG5cbiAgICBleHRyYWN0UHJpbWFyeVRpbWVDb21wb25lbnRzKGNvbnRleHQ6IFBhcnNpbmdDb250ZXh0LCBtYXRjaDogUmVnRXhwTWF0Y2hBcnJheSk6IG51bGwgfCBQYXJzaW5nQ29tcG9uZW50cyB7XG4gICAgICAgIGNvbnN0IGNvbXBvbmVudHMgPSBzdXBlci5leHRyYWN0UHJpbWFyeVRpbWVDb21wb25lbnRzKGNvbnRleHQsIG1hdGNoKTtcbiAgICAgICAgaWYgKCFjb21wb25lbnRzKSB7XG4gICAgICAgICAgICByZXR1cm4gY29tcG9uZW50cztcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChtYXRjaFswXS5lbmRzV2l0aChcIm5pZ2h0XCIpKSB7XG4gICAgICAgICAgICBjb25zdCBob3VyID0gY29tcG9uZW50cy5nZXQoXCJob3VyXCIpO1xuICAgICAgICAgICAgaWYgKGhvdXIgPj0gNiAmJiBob3VyIDwgMTIpIHtcbiAgICAgICAgICAgICAgICBjb21wb25lbnRzLmFzc2lnbihcImhvdXJcIiwgY29tcG9uZW50cy5nZXQoXCJob3VyXCIpICsgMTIpO1xuICAgICAgICAgICAgICAgIGNvbXBvbmVudHMuYXNzaWduKFwibWVyaWRpZW1cIiwgTWVyaWRpZW0uUE0pO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChob3VyIDwgNikge1xuICAgICAgICAgICAgICAgIGNvbXBvbmVudHMuYXNzaWduKFwibWVyaWRpZW1cIiwgTWVyaWRpZW0uQU0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKG1hdGNoWzBdLmVuZHNXaXRoKFwiYWZ0ZXJub29uXCIpKSB7XG4gICAgICAgICAgICBjb21wb25lbnRzLmFzc2lnbihcIm1lcmlkaWVtXCIsIE1lcmlkaWVtLlBNKTtcbiAgICAgICAgICAgIGNvbnN0IGhvdXIgPSBjb21wb25lbnRzLmdldChcImhvdXJcIik7XG4gICAgICAgICAgICBpZiAoaG91ciA+PSAwICYmIGhvdXIgPD0gNikge1xuICAgICAgICAgICAgICAgIGNvbXBvbmVudHMuYXNzaWduKFwiaG91clwiLCBjb21wb25lbnRzLmdldChcImhvdXJcIikgKyAxMik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAobWF0Y2hbMF0uZW5kc1dpdGgoXCJtb3JuaW5nXCIpKSB7XG4gICAgICAgICAgICBjb21wb25lbnRzLmFzc2lnbihcIm1lcmlkaWVtXCIsIE1lcmlkaWVtLkFNKTtcbiAgICAgICAgICAgIGNvbnN0IGhvdXIgPSBjb21wb25lbnRzLmdldChcImhvdXJcIik7XG4gICAgICAgICAgICBpZiAoaG91ciA8IDEyKSB7XG4gICAgICAgICAgICAgICAgY29tcG9uZW50cy5hc3NpZ24oXCJob3VyXCIsIGNvbXBvbmVudHMuZ2V0KFwiaG91clwiKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gY29tcG9uZW50cy5hZGRUYWcoXCJwYXJzZXIvRU5UaW1lRXhwcmVzc2lvblBhcnNlclwiKTtcbiAgICB9XG5cbiAgICBleHRyYWN0Rm9sbG93aW5nVGltZUNvbXBvbmVudHMoXG4gICAgICAgIGNvbnRleHQ6IFBhcnNpbmdDb250ZXh0LFxuICAgICAgICBtYXRjaDogUmVnRXhwTWF0Y2hBcnJheSxcbiAgICAgICAgcmVzdWx0OiBQYXJzaW5nUmVzdWx0XG4gICAgKTogUGFyc2luZ0NvbXBvbmVudHMgfCBudWxsIHtcbiAgICAgICAgY29uc3QgZm9sbG93aW5nQ29tcG9uZW50cyA9IHN1cGVyLmV4dHJhY3RGb2xsb3dpbmdUaW1lQ29tcG9uZW50cyhjb250ZXh0LCBtYXRjaCwgcmVzdWx0KTtcbiAgICAgICAgaWYgKGZvbGxvd2luZ0NvbXBvbmVudHMpIHtcbiAgICAgICAgICAgIGZvbGxvd2luZ0NvbXBvbmVudHMuYWRkVGFnKFwicGFyc2VyL0VOVGltZUV4cHJlc3Npb25QYXJzZXJcIik7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZvbGxvd2luZ0NvbXBvbmVudHM7XG4gICAgfVxufVxuIiwgImltcG9ydCB7IE9wVW5pdFR5cGUsIFFVbml0VHlwZSB9IGZyb20gXCJkYXlqc1wiO1xuaW1wb3J0IHsgUGFyc2luZ0NvbXBvbmVudHMgfSBmcm9tIFwiLi4vcmVzdWx0c1wiO1xuXG5leHBvcnQgdHlwZSBUaW1lVW5pdHMgPSB7IFtjIGluIE9wVW5pdFR5cGUgfCBRVW5pdFR5cGVdPzogbnVtYmVyIH07XG5cbmV4cG9ydCBmdW5jdGlvbiByZXZlcnNlVGltZVVuaXRzKHRpbWVVbml0czogVGltZVVuaXRzKTogVGltZVVuaXRzIHtcbiAgICBjb25zdCByZXZlcnNlZCA9IHt9O1xuICAgIGZvciAoY29uc3Qga2V5IGluIHRpbWVVbml0cykge1xuICAgICAgICAvLyBub2luc3BlY3Rpb24gSlNVbmZpbHRlcmVkRm9ySW5Mb29wXG4gICAgICAgIHJldmVyc2VkW2tleV0gPSAtdGltZVVuaXRzW2tleV07XG4gICAgfVxuXG4gICAgcmV0dXJuIHJldmVyc2VkIGFzIFRpbWVVbml0cztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFkZEltcGxpZWRUaW1lVW5pdHMoY29tcG9uZW50czogUGFyc2luZ0NvbXBvbmVudHMsIHRpbWVVbml0czogVGltZVVuaXRzKTogUGFyc2luZ0NvbXBvbmVudHMge1xuICAgIGNvbnN0IG91dHB1dCA9IGNvbXBvbmVudHMuY2xvbmUoKTtcblxuICAgIGxldCBkYXRlID0gY29tcG9uZW50cy5kYXlqcygpO1xuICAgIGZvciAoY29uc3Qga2V5IGluIHRpbWVVbml0cykge1xuICAgICAgICAvLyBub2luc3BlY3Rpb24gSlNVbmZpbHRlcmVkRm9ySW5Mb29wLFR5cGVTY3JpcHRWYWxpZGF0ZVR5cGVzXG4gICAgICAgIGRhdGUgPSBkYXRlLmFkZCh0aW1lVW5pdHNba2V5XSwga2V5IGFzIFFVbml0VHlwZSk7XG4gICAgfVxuXG4gICAgaWYgKFwiZGF5XCIgaW4gdGltZVVuaXRzIHx8IFwiZFwiIGluIHRpbWVVbml0cyB8fCBcIndlZWtcIiBpbiB0aW1lVW5pdHMgfHwgXCJtb250aFwiIGluIHRpbWVVbml0cyB8fCBcInllYXJcIiBpbiB0aW1lVW5pdHMpIHtcbiAgICAgICAgb3V0cHV0LmltcGx5KFwiZGF5XCIsIGRhdGUuZGF0ZSgpKTtcbiAgICAgICAgb3V0cHV0LmltcGx5KFwibW9udGhcIiwgZGF0ZS5tb250aCgpICsgMSk7XG4gICAgICAgIG91dHB1dC5pbXBseShcInllYXJcIiwgZGF0ZS55ZWFyKCkpO1xuICAgIH1cblxuICAgIGlmIChcInNlY29uZFwiIGluIHRpbWVVbml0cyB8fCBcIm1pbnV0ZVwiIGluIHRpbWVVbml0cyB8fCBcImhvdXJcIiBpbiB0aW1lVW5pdHMpIHtcbiAgICAgICAgb3V0cHV0LmltcGx5KFwic2Vjb25kXCIsIGRhdGUuc2Vjb25kKCkpO1xuICAgICAgICBvdXRwdXQuaW1wbHkoXCJtaW51dGVcIiwgZGF0ZS5taW51dGUoKSk7XG4gICAgICAgIG91dHB1dC5pbXBseShcImhvdXJcIiwgZGF0ZS5ob3VyKCkpO1xuICAgIH1cblxuICAgIHJldHVybiBvdXRwdXQ7XG59XG4iLCAiaW1wb3J0IHsgUGFyc2luZ0NvbnRleHQgfSBmcm9tIFwiLi4vLi4vLi4vY2hyb25vXCI7XG5pbXBvcnQgeyBwYXJzZVRpbWVVbml0cywgVElNRV9VTklUU19OT19BQkJSX1BBVFRFUk4sIFRJTUVfVU5JVFNfUEFUVEVSTiB9IGZyb20gXCIuLi9jb25zdGFudHNcIjtcbmltcG9ydCB7IFBhcnNpbmdDb21wb25lbnRzIH0gZnJvbSBcIi4uLy4uLy4uL3Jlc3VsdHNcIjtcbmltcG9ydCB7IEFic3RyYWN0UGFyc2VyV2l0aFdvcmRCb3VuZGFyeUNoZWNraW5nIH0gZnJvbSBcIi4uLy4uLy4uL2NvbW1vbi9wYXJzZXJzL0Fic3RyYWN0UGFyc2VyV2l0aFdvcmRCb3VuZGFyeVwiO1xuaW1wb3J0IHsgcmV2ZXJzZVRpbWVVbml0cyB9IGZyb20gXCIuLi8uLi8uLi91dGlscy90aW1ldW5pdHNcIjtcblxuY29uc3QgUEFUVEVSTiA9IG5ldyBSZWdFeHAoYCgke1RJTUVfVU5JVFNfUEFUVEVSTn0pXFxcXHN7MCw1fSg/OmFnb3xiZWZvcmV8ZWFybGllcikoPz1cXFxcV3wkKWAsIFwiaVwiKTtcbmNvbnN0IFNUUklDVF9QQVRURVJOID0gbmV3IFJlZ0V4cChgKCR7VElNRV9VTklUU19OT19BQkJSX1BBVFRFUk59KVxcXFxzezAsNX0oPzphZ298YmVmb3JlfGVhcmxpZXIpKD89XFxcXFd8JClgLCBcImlcIik7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEVOVGltZVVuaXRBZ29Gb3JtYXRQYXJzZXIgZXh0ZW5kcyBBYnN0cmFjdFBhcnNlcldpdGhXb3JkQm91bmRhcnlDaGVja2luZyB7XG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBzdHJpY3RNb2RlOiBib29sZWFuKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgfVxuXG4gICAgaW5uZXJQYXR0ZXJuKCk6IFJlZ0V4cCB7XG4gICAgICAgIHJldHVybiB0aGlzLnN0cmljdE1vZGUgPyBTVFJJQ1RfUEFUVEVSTiA6IFBBVFRFUk47XG4gICAgfVxuXG4gICAgaW5uZXJFeHRyYWN0KGNvbnRleHQ6IFBhcnNpbmdDb250ZXh0LCBtYXRjaDogUmVnRXhwTWF0Y2hBcnJheSkge1xuICAgICAgICBjb25zdCB0aW1lVW5pdHMgPSBwYXJzZVRpbWVVbml0cyhtYXRjaFsxXSk7XG4gICAgICAgIGlmICghdGltZVVuaXRzKSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBvdXRwdXRUaW1lVW5pdHMgPSByZXZlcnNlVGltZVVuaXRzKHRpbWVVbml0cyk7XG4gICAgICAgIHJldHVybiBQYXJzaW5nQ29tcG9uZW50cy5jcmVhdGVSZWxhdGl2ZUZyb21SZWZlcmVuY2UoY29udGV4dC5yZWZlcmVuY2UsIG91dHB1dFRpbWVVbml0cyk7XG4gICAgfVxufVxuIiwgImltcG9ydCB7IFBhcnNpbmdDb250ZXh0IH0gZnJvbSBcIi4uLy4uLy4uL2Nocm9ub1wiO1xuaW1wb3J0IHsgcGFyc2VUaW1lVW5pdHMsIFRJTUVfVU5JVFNfTk9fQUJCUl9QQVRURVJOLCBUSU1FX1VOSVRTX1BBVFRFUk4gfSBmcm9tIFwiLi4vY29uc3RhbnRzXCI7XG5pbXBvcnQgeyBQYXJzaW5nQ29tcG9uZW50cyB9IGZyb20gXCIuLi8uLi8uLi9yZXN1bHRzXCI7XG5pbXBvcnQgeyBBYnN0cmFjdFBhcnNlcldpdGhXb3JkQm91bmRhcnlDaGVja2luZyB9IGZyb20gXCIuLi8uLi8uLi9jb21tb24vcGFyc2Vycy9BYnN0cmFjdFBhcnNlcldpdGhXb3JkQm91bmRhcnlcIjtcblxuY29uc3QgUEFUVEVSTiA9IG5ldyBSZWdFeHAoXG4gICAgYCgke1RJTUVfVU5JVFNfUEFUVEVSTn0pXFxcXHN7MCw1fSg/OmxhdGVyfGFmdGVyfGZyb20gbm93fGhlbmNlZm9ydGh8Zm9yd2FyZHxvdXQpYCArIFwiKD89KD86XFxcXFd8JCkpXCIsXG4gICAgXCJpXCJcbik7XG5cbmNvbnN0IFNUUklDVF9QQVRURVJOID0gbmV3IFJlZ0V4cChgKCR7VElNRV9VTklUU19OT19BQkJSX1BBVFRFUk59KVxcXFxzezAsNX0obGF0ZXJ8YWZ0ZXJ8ZnJvbSBub3cpKD89XFxcXFd8JClgLCBcImlcIik7XG5jb25zdCBHUk9VUF9OVU1fVElNRVVOSVRTID0gMTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRU5UaW1lVW5pdExhdGVyRm9ybWF0UGFyc2VyIGV4dGVuZHMgQWJzdHJhY3RQYXJzZXJXaXRoV29yZEJvdW5kYXJ5Q2hlY2tpbmcge1xuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgc3RyaWN0TW9kZTogYm9vbGVhbikge1xuICAgICAgICBzdXBlcigpO1xuICAgIH1cblxuICAgIGlubmVyUGF0dGVybigpOiBSZWdFeHAge1xuICAgICAgICByZXR1cm4gdGhpcy5zdHJpY3RNb2RlID8gU1RSSUNUX1BBVFRFUk4gOiBQQVRURVJOO1xuICAgIH1cblxuICAgIGlubmVyRXh0cmFjdChjb250ZXh0OiBQYXJzaW5nQ29udGV4dCwgbWF0Y2g6IFJlZ0V4cE1hdGNoQXJyYXkpIHtcbiAgICAgICAgY29uc3QgdGltZVVuaXRzID0gcGFyc2VUaW1lVW5pdHMobWF0Y2hbR1JPVVBfTlVNX1RJTUVVTklUU10pO1xuICAgICAgICBpZiAoIXRpbWVVbml0cykge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIFBhcnNpbmdDb21wb25lbnRzLmNyZWF0ZVJlbGF0aXZlRnJvbVJlZmVyZW5jZShjb250ZXh0LnJlZmVyZW5jZSwgdGltZVVuaXRzKTtcbiAgICB9XG59XG4iLCAiaW1wb3J0IHsgUGFyc2luZ0NvbnRleHQsIFJlZmluZXIgfSBmcm9tIFwiLi4vY2hyb25vXCI7XG5pbXBvcnQgeyBQYXJzaW5nUmVzdWx0IH0gZnJvbSBcIi4uL3Jlc3VsdHNcIjtcblxuLyoqXG4gKiBBIHNwZWNpYWwgdHlwZSBvZiB7QGxpbmsgUmVmaW5lcn0gdG8gZmlsdGVyIHRoZSByZXN1bHRzXG4gKi9cbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBGaWx0ZXIgaW1wbGVtZW50cyBSZWZpbmVyIHtcbiAgICBhYnN0cmFjdCBpc1ZhbGlkKGNvbnRleHQ6IFBhcnNpbmdDb250ZXh0LCByZXN1bHQ6IFBhcnNpbmdSZXN1bHQpOiBib29sZWFuO1xuXG4gICAgcmVmaW5lKGNvbnRleHQ6IFBhcnNpbmdDb250ZXh0LCByZXN1bHRzOiBQYXJzaW5nUmVzdWx0W10pOiBQYXJzaW5nUmVzdWx0W10ge1xuICAgICAgICByZXR1cm4gcmVzdWx0cy5maWx0ZXIoKHIpID0+IHRoaXMuaXNWYWxpZChjb250ZXh0LCByKSk7XG4gICAgfVxufVxuXG4vKipcbiAqIEEgc3BlY2lhbCB0eXBlIG9mIHtAbGluayBSZWZpbmVyfSB0byBtZXJnZSBjb25zZWN1dGl2ZSByZXN1bHRzXG4gKi9cbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBNZXJnaW5nUmVmaW5lciBpbXBsZW1lbnRzIFJlZmluZXIge1xuICAgIGFic3RyYWN0IHNob3VsZE1lcmdlUmVzdWx0cyhcbiAgICAgICAgdGV4dEJldHdlZW46IHN0cmluZyxcbiAgICAgICAgY3VycmVudFJlc3VsdDogUGFyc2luZ1Jlc3VsdCxcbiAgICAgICAgbmV4dFJlc3VsdDogUGFyc2luZ1Jlc3VsdCxcbiAgICAgICAgY29udGV4dDogUGFyc2luZ0NvbnRleHRcbiAgICApOiBib29sZWFuO1xuXG4gICAgYWJzdHJhY3QgbWVyZ2VSZXN1bHRzKFxuICAgICAgICB0ZXh0QmV0d2Vlbjogc3RyaW5nLFxuICAgICAgICBjdXJyZW50UmVzdWx0OiBQYXJzaW5nUmVzdWx0LFxuICAgICAgICBuZXh0UmVzdWx0OiBQYXJzaW5nUmVzdWx0LFxuICAgICAgICBjb250ZXh0OiBQYXJzaW5nQ29udGV4dFxuICAgICk6IFBhcnNpbmdSZXN1bHQ7XG5cbiAgICByZWZpbmUoY29udGV4dDogUGFyc2luZ0NvbnRleHQsIHJlc3VsdHM6IFBhcnNpbmdSZXN1bHRbXSk6IFBhcnNpbmdSZXN1bHRbXSB7XG4gICAgICAgIGlmIChyZXN1bHRzLmxlbmd0aCA8IDIpIHtcbiAgICAgICAgICAgIHJldHVybiByZXN1bHRzO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgbWVyZ2VkUmVzdWx0czogUGFyc2luZ1Jlc3VsdFtdID0gW107XG4gICAgICAgIGxldCBjdXJSZXN1bHQgPSByZXN1bHRzWzBdO1xuICAgICAgICBsZXQgbmV4dFJlc3VsdCA9IG51bGw7XG5cbiAgICAgICAgZm9yIChsZXQgaSA9IDE7IGkgPCByZXN1bHRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBuZXh0UmVzdWx0ID0gcmVzdWx0c1tpXTtcblxuICAgICAgICAgICAgY29uc3QgdGV4dEJldHdlZW4gPSBjb250ZXh0LnRleHQuc3Vic3RyaW5nKGN1clJlc3VsdC5pbmRleCArIGN1clJlc3VsdC50ZXh0Lmxlbmd0aCwgbmV4dFJlc3VsdC5pbmRleCk7XG4gICAgICAgICAgICBpZiAoIXRoaXMuc2hvdWxkTWVyZ2VSZXN1bHRzKHRleHRCZXR3ZWVuLCBjdXJSZXN1bHQsIG5leHRSZXN1bHQsIGNvbnRleHQpKSB7XG4gICAgICAgICAgICAgICAgbWVyZ2VkUmVzdWx0cy5wdXNoKGN1clJlc3VsdCk7XG4gICAgICAgICAgICAgICAgY3VyUmVzdWx0ID0gbmV4dFJlc3VsdDtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgY29uc3QgbGVmdCA9IGN1clJlc3VsdDtcbiAgICAgICAgICAgICAgICBjb25zdCByaWdodCA9IG5leHRSZXN1bHQ7XG4gICAgICAgICAgICAgICAgY29uc3QgbWVyZ2VkUmVzdWx0ID0gdGhpcy5tZXJnZVJlc3VsdHModGV4dEJldHdlZW4sIGxlZnQsIHJpZ2h0LCBjb250ZXh0KTtcbiAgICAgICAgICAgICAgICBjb250ZXh0LmRlYnVnKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coYCR7dGhpcy5jb25zdHJ1Y3Rvci5uYW1lfSBtZXJnZWQgJHtsZWZ0fSBhbmQgJHtyaWdodH0gaW50byAke21lcmdlZFJlc3VsdH1gKTtcbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgIGN1clJlc3VsdCA9IG1lcmdlZFJlc3VsdDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChjdXJSZXN1bHQgIT0gbnVsbCkge1xuICAgICAgICAgICAgbWVyZ2VkUmVzdWx0cy5wdXNoKGN1clJlc3VsdCk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gbWVyZ2VkUmVzdWx0cztcbiAgICB9XG59XG4iLCAiLypcbiAgXG4qL1xuXG5pbXBvcnQgeyBQYXJzaW5nUmVzdWx0IH0gZnJvbSBcIi4uLy4uL3Jlc3VsdHNcIjtcbmltcG9ydCB7IE1lcmdpbmdSZWZpbmVyIH0gZnJvbSBcIi4uL2Fic3RyYWN0UmVmaW5lcnNcIjtcblxuZXhwb3J0IGRlZmF1bHQgYWJzdHJhY3QgY2xhc3MgQWJzdHJhY3RNZXJnZURhdGVSYW5nZVJlZmluZXIgZXh0ZW5kcyBNZXJnaW5nUmVmaW5lciB7XG4gICAgYWJzdHJhY3QgcGF0dGVybkJldHdlZW4oKTogUmVnRXhwO1xuXG4gICAgc2hvdWxkTWVyZ2VSZXN1bHRzKHRleHRCZXR3ZWVuLCBjdXJyZW50UmVzdWx0LCBuZXh0UmVzdWx0KTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiAhY3VycmVudFJlc3VsdC5lbmQgJiYgIW5leHRSZXN1bHQuZW5kICYmIHRleHRCZXR3ZWVuLm1hdGNoKHRoaXMucGF0dGVybkJldHdlZW4oKSkgIT0gbnVsbDtcbiAgICB9XG5cbiAgICBtZXJnZVJlc3VsdHModGV4dEJldHdlZW4sIGZyb21SZXN1bHQsIHRvUmVzdWx0KTogUGFyc2luZ1Jlc3VsdCB7XG4gICAgICAgIGlmICghZnJvbVJlc3VsdC5zdGFydC5pc09ubHlXZWVrZGF5Q29tcG9uZW50KCkgJiYgIXRvUmVzdWx0LnN0YXJ0LmlzT25seVdlZWtkYXlDb21wb25lbnQoKSkge1xuICAgICAgICAgICAgdG9SZXN1bHQuc3RhcnQuZ2V0Q2VydGFpbkNvbXBvbmVudHMoKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoIWZyb21SZXN1bHQuc3RhcnQuaXNDZXJ0YWluKGtleSkpIHtcbiAgICAgICAgICAgICAgICAgICAgZnJvbVJlc3VsdC5zdGFydC5pbXBseShrZXksIHRvUmVzdWx0LnN0YXJ0LmdldChrZXkpKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgZnJvbVJlc3VsdC5zdGFydC5nZXRDZXJ0YWluQ29tcG9uZW50cygpLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgICAgICAgICAgIGlmICghdG9SZXN1bHQuc3RhcnQuaXNDZXJ0YWluKGtleSkpIHtcbiAgICAgICAgICAgICAgICAgICAgdG9SZXN1bHQuc3RhcnQuaW1wbHkoa2V5LCBmcm9tUmVzdWx0LnN0YXJ0LmdldChrZXkpKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChmcm9tUmVzdWx0LnN0YXJ0LmRhdGUoKS5nZXRUaW1lKCkgPiB0b1Jlc3VsdC5zdGFydC5kYXRlKCkuZ2V0VGltZSgpKSB7XG4gICAgICAgICAgICBsZXQgZnJvbU1vbWVudCA9IGZyb21SZXN1bHQuc3RhcnQuZGF5anMoKTtcbiAgICAgICAgICAgIGxldCB0b01vbWVudCA9IHRvUmVzdWx0LnN0YXJ0LmRheWpzKCk7XG4gICAgICAgICAgICBpZiAodG9SZXN1bHQuc3RhcnQuaXNPbmx5V2Vla2RheUNvbXBvbmVudCgpICYmIHRvTW9tZW50LmFkZCg3LCBcImRheXNcIikuaXNBZnRlcihmcm9tTW9tZW50KSkge1xuICAgICAgICAgICAgICAgIHRvTW9tZW50ID0gdG9Nb21lbnQuYWRkKDcsIFwiZGF5c1wiKTtcbiAgICAgICAgICAgICAgICB0b1Jlc3VsdC5zdGFydC5pbXBseShcImRheVwiLCB0b01vbWVudC5kYXRlKCkpO1xuICAgICAgICAgICAgICAgIHRvUmVzdWx0LnN0YXJ0LmltcGx5KFwibW9udGhcIiwgdG9Nb21lbnQubW9udGgoKSArIDEpO1xuICAgICAgICAgICAgICAgIHRvUmVzdWx0LnN0YXJ0LmltcGx5KFwieWVhclwiLCB0b01vbWVudC55ZWFyKCkpO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChmcm9tUmVzdWx0LnN0YXJ0LmlzT25seVdlZWtkYXlDb21wb25lbnQoKSAmJiBmcm9tTW9tZW50LmFkZCgtNywgXCJkYXlzXCIpLmlzQmVmb3JlKHRvTW9tZW50KSkge1xuICAgICAgICAgICAgICAgIGZyb21Nb21lbnQgPSBmcm9tTW9tZW50LmFkZCgtNywgXCJkYXlzXCIpO1xuICAgICAgICAgICAgICAgIGZyb21SZXN1bHQuc3RhcnQuaW1wbHkoXCJkYXlcIiwgZnJvbU1vbWVudC5kYXRlKCkpO1xuICAgICAgICAgICAgICAgIGZyb21SZXN1bHQuc3RhcnQuaW1wbHkoXCJtb250aFwiLCBmcm9tTW9tZW50Lm1vbnRoKCkgKyAxKTtcbiAgICAgICAgICAgICAgICBmcm9tUmVzdWx0LnN0YXJ0LmltcGx5KFwieWVhclwiLCBmcm9tTW9tZW50LnllYXIoKSk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHRvUmVzdWx0LnN0YXJ0LmlzRGF0ZVdpdGhVbmtub3duWWVhcigpICYmIHRvTW9tZW50LmFkZCgxLCBcInllYXJzXCIpLmlzQWZ0ZXIoZnJvbU1vbWVudCkpIHtcbiAgICAgICAgICAgICAgICB0b01vbWVudCA9IHRvTW9tZW50LmFkZCgxLCBcInllYXJzXCIpO1xuICAgICAgICAgICAgICAgIHRvUmVzdWx0LnN0YXJ0LmltcGx5KFwieWVhclwiLCB0b01vbWVudC55ZWFyKCkpO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChmcm9tUmVzdWx0LnN0YXJ0LmlzRGF0ZVdpdGhVbmtub3duWWVhcigpICYmIGZyb21Nb21lbnQuYWRkKC0xLCBcInllYXJzXCIpLmlzQmVmb3JlKHRvTW9tZW50KSkge1xuICAgICAgICAgICAgICAgIGZyb21Nb21lbnQgPSBmcm9tTW9tZW50LmFkZCgtMSwgXCJ5ZWFyc1wiKTtcbiAgICAgICAgICAgICAgICBmcm9tUmVzdWx0LnN0YXJ0LmltcGx5KFwieWVhclwiLCBmcm9tTW9tZW50LnllYXIoKSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIFt0b1Jlc3VsdCwgZnJvbVJlc3VsdF0gPSBbZnJvbVJlc3VsdCwgdG9SZXN1bHRdO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgcmVzdWx0ID0gZnJvbVJlc3VsdC5jbG9uZSgpO1xuICAgICAgICByZXN1bHQuc3RhcnQgPSBmcm9tUmVzdWx0LnN0YXJ0O1xuICAgICAgICByZXN1bHQuZW5kID0gdG9SZXN1bHQuc3RhcnQ7XG4gICAgICAgIHJlc3VsdC5pbmRleCA9IE1hdGgubWluKGZyb21SZXN1bHQuaW5kZXgsIHRvUmVzdWx0LmluZGV4KTtcbiAgICAgICAgaWYgKGZyb21SZXN1bHQuaW5kZXggPCB0b1Jlc3VsdC5pbmRleCkge1xuICAgICAgICAgICAgcmVzdWx0LnRleHQgPSBmcm9tUmVzdWx0LnRleHQgKyB0ZXh0QmV0d2VlbiArIHRvUmVzdWx0LnRleHQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXN1bHQudGV4dCA9IHRvUmVzdWx0LnRleHQgKyB0ZXh0QmV0d2VlbiArIGZyb21SZXN1bHQudGV4dDtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxufVxuIiwgIi8qXG4gIFxuKi9cblxuaW1wb3J0IEFic3RyYWN0TWVyZ2VEYXRlUmFuZ2VSZWZpbmVyIGZyb20gXCIuLi8uLi8uLi9jb21tb24vcmVmaW5lcnMvQWJzdHJhY3RNZXJnZURhdGVSYW5nZVJlZmluZXJcIjtcblxuLyoqXG4gKiBNZXJnaW5nIGJlZm9yZSBhbmQgYWZ0ZXIgcmVzdWx0cyAoc2VlLiBBYnN0cmFjdE1lcmdlRGF0ZVJhbmdlUmVmaW5lcilcbiAqIFRoaXMgaW1wbGVtZW50YXRpb24gc2hvdWxkIHByb3ZpZGUgRW5nbGlzaCBjb25uZWN0aW5nIHBoYXNlc1xuICogLSAyMDIwLTAyLTEzIFt0b10gMjAyMC0wMi0xM1xuICogLSBXZWRuZXNkYXkgWy1dIEZyaWRheVxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBFTk1lcmdlRGF0ZVJhbmdlUmVmaW5lciBleHRlbmRzIEFic3RyYWN0TWVyZ2VEYXRlUmFuZ2VSZWZpbmVyIHtcbiAgICBwYXR0ZXJuQmV0d2VlbigpOiBSZWdFeHAge1xuICAgICAgICByZXR1cm4gL15cXHMqKHRvfC18XHUyMDEzfHVudGlsfHRocm91Z2h8dGlsbClcXHMqJC9pO1xuICAgIH1cbn1cbiIsICJpbXBvcnQgeyBQYXJzaW5nQ29tcG9uZW50cywgUGFyc2luZ1Jlc3VsdCB9IGZyb20gXCIuLi9yZXN1bHRzXCI7XG5pbXBvcnQgeyBNZXJpZGllbSB9IGZyb20gXCIuLi90eXBlc1wiO1xuaW1wb3J0IHsgYXNzaWduU2ltaWxhckRhdGUsIGltcGx5U2ltaWxhckRhdGUgfSBmcm9tIFwiLi4vdXRpbHMvZGF5anNcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIG1lcmdlRGF0ZVRpbWVSZXN1bHQoZGF0ZVJlc3VsdDogUGFyc2luZ1Jlc3VsdCwgdGltZVJlc3VsdDogUGFyc2luZ1Jlc3VsdCk6IFBhcnNpbmdSZXN1bHQge1xuICAgIGNvbnN0IHJlc3VsdCA9IGRhdGVSZXN1bHQuY2xvbmUoKTtcbiAgICBjb25zdCBiZWdpbkRhdGUgPSBkYXRlUmVzdWx0LnN0YXJ0O1xuICAgIGNvbnN0IGJlZ2luVGltZSA9IHRpbWVSZXN1bHQuc3RhcnQ7XG5cbiAgICByZXN1bHQuc3RhcnQgPSBtZXJnZURhdGVUaW1lQ29tcG9uZW50KGJlZ2luRGF0ZSwgYmVnaW5UaW1lKTtcbiAgICBpZiAoZGF0ZVJlc3VsdC5lbmQgIT0gbnVsbCB8fCB0aW1lUmVzdWx0LmVuZCAhPSBudWxsKSB7XG4gICAgICAgIGNvbnN0IGVuZERhdGUgPSBkYXRlUmVzdWx0LmVuZCA9PSBudWxsID8gZGF0ZVJlc3VsdC5zdGFydCA6IGRhdGVSZXN1bHQuZW5kO1xuICAgICAgICBjb25zdCBlbmRUaW1lID0gdGltZVJlc3VsdC5lbmQgPT0gbnVsbCA/IHRpbWVSZXN1bHQuc3RhcnQgOiB0aW1lUmVzdWx0LmVuZDtcbiAgICAgICAgY29uc3QgZW5kRGF0ZVRpbWUgPSBtZXJnZURhdGVUaW1lQ29tcG9uZW50KGVuZERhdGUsIGVuZFRpbWUpO1xuXG4gICAgICAgIGlmIChkYXRlUmVzdWx0LmVuZCA9PSBudWxsICYmIGVuZERhdGVUaW1lLmRhdGUoKS5nZXRUaW1lKCkgPCByZXN1bHQuc3RhcnQuZGF0ZSgpLmdldFRpbWUoKSkge1xuICAgICAgICAgICAgLy8gRm9yIGV4YW1wbGUsICBcIlR1ZXNkYXkgOXBtIC0gMWFtXCIgdGhlIGVuZGluZyBzaG91bGQgYWN0dWFsbHkgYmUgMWFtIG9uIHRoZSBuZXh0IGRheS5cbiAgICAgICAgICAgIC8vIFdlIG5lZWQgdG8gYWRkIHRvIGVuZGluZyBieSBhbm90aGVyIGRheS5cbiAgICAgICAgICAgIGNvbnN0IG5leHREYXlKcyA9IGVuZERhdGVUaW1lLmRheWpzKCkuYWRkKDEsIFwiZGF5XCIpO1xuICAgICAgICAgICAgaWYgKGVuZERhdGVUaW1lLmlzQ2VydGFpbihcImRheVwiKSkge1xuICAgICAgICAgICAgICAgIGFzc2lnblNpbWlsYXJEYXRlKGVuZERhdGVUaW1lLCBuZXh0RGF5SnMpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBpbXBseVNpbWlsYXJEYXRlKGVuZERhdGVUaW1lLCBuZXh0RGF5SnMpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmVzdWx0LmVuZCA9IGVuZERhdGVUaW1lO1xuICAgIH1cblxuICAgIHJldHVybiByZXN1bHQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBtZXJnZURhdGVUaW1lQ29tcG9uZW50KFxuICAgIGRhdGVDb21wb25lbnQ6IFBhcnNpbmdDb21wb25lbnRzLFxuICAgIHRpbWVDb21wb25lbnQ6IFBhcnNpbmdDb21wb25lbnRzXG4pOiBQYXJzaW5nQ29tcG9uZW50cyB7XG4gICAgY29uc3QgZGF0ZVRpbWVDb21wb25lbnQgPSBkYXRlQ29tcG9uZW50LmNsb25lKCk7XG5cbiAgICBpZiAodGltZUNvbXBvbmVudC5pc0NlcnRhaW4oXCJob3VyXCIpKSB7XG4gICAgICAgIGRhdGVUaW1lQ29tcG9uZW50LmFzc2lnbihcImhvdXJcIiwgdGltZUNvbXBvbmVudC5nZXQoXCJob3VyXCIpKTtcbiAgICAgICAgZGF0ZVRpbWVDb21wb25lbnQuYXNzaWduKFwibWludXRlXCIsIHRpbWVDb21wb25lbnQuZ2V0KFwibWludXRlXCIpKTtcblxuICAgICAgICBpZiAodGltZUNvbXBvbmVudC5pc0NlcnRhaW4oXCJzZWNvbmRcIikpIHtcbiAgICAgICAgICAgIGRhdGVUaW1lQ29tcG9uZW50LmFzc2lnbihcInNlY29uZFwiLCB0aW1lQ29tcG9uZW50LmdldChcInNlY29uZFwiKSk7XG5cbiAgICAgICAgICAgIGlmICh0aW1lQ29tcG9uZW50LmlzQ2VydGFpbihcIm1pbGxpc2Vjb25kXCIpKSB7XG4gICAgICAgICAgICAgICAgZGF0ZVRpbWVDb21wb25lbnQuYXNzaWduKFwibWlsbGlzZWNvbmRcIiwgdGltZUNvbXBvbmVudC5nZXQoXCJtaWxsaXNlY29uZFwiKSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGRhdGVUaW1lQ29tcG9uZW50LmltcGx5KFwibWlsbGlzZWNvbmRcIiwgdGltZUNvbXBvbmVudC5nZXQoXCJtaWxsaXNlY29uZFwiKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBkYXRlVGltZUNvbXBvbmVudC5pbXBseShcInNlY29uZFwiLCB0aW1lQ29tcG9uZW50LmdldChcInNlY29uZFwiKSk7XG4gICAgICAgICAgICBkYXRlVGltZUNvbXBvbmVudC5pbXBseShcIm1pbGxpc2Vjb25kXCIsIHRpbWVDb21wb25lbnQuZ2V0KFwibWlsbGlzZWNvbmRcIikpO1xuICAgICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgICAgZGF0ZVRpbWVDb21wb25lbnQuaW1wbHkoXCJob3VyXCIsIHRpbWVDb21wb25lbnQuZ2V0KFwiaG91clwiKSk7XG4gICAgICAgIGRhdGVUaW1lQ29tcG9uZW50LmltcGx5KFwibWludXRlXCIsIHRpbWVDb21wb25lbnQuZ2V0KFwibWludXRlXCIpKTtcbiAgICAgICAgZGF0ZVRpbWVDb21wb25lbnQuaW1wbHkoXCJzZWNvbmRcIiwgdGltZUNvbXBvbmVudC5nZXQoXCJzZWNvbmRcIikpO1xuICAgICAgICBkYXRlVGltZUNvbXBvbmVudC5pbXBseShcIm1pbGxpc2Vjb25kXCIsIHRpbWVDb21wb25lbnQuZ2V0KFwibWlsbGlzZWNvbmRcIikpO1xuICAgIH1cblxuICAgIGlmICh0aW1lQ29tcG9uZW50LmlzQ2VydGFpbihcInRpbWV6b25lT2Zmc2V0XCIpKSB7XG4gICAgICAgIGRhdGVUaW1lQ29tcG9uZW50LmFzc2lnbihcInRpbWV6b25lT2Zmc2V0XCIsIHRpbWVDb21wb25lbnQuZ2V0KFwidGltZXpvbmVPZmZzZXRcIikpO1xuICAgIH1cblxuICAgIGlmICh0aW1lQ29tcG9uZW50LmlzQ2VydGFpbihcIm1lcmlkaWVtXCIpKSB7XG4gICAgICAgIGRhdGVUaW1lQ29tcG9uZW50LmFzc2lnbihcIm1lcmlkaWVtXCIsIHRpbWVDb21wb25lbnQuZ2V0KFwibWVyaWRpZW1cIikpO1xuICAgIH0gZWxzZSBpZiAodGltZUNvbXBvbmVudC5nZXQoXCJtZXJpZGllbVwiKSAhPSBudWxsICYmIGRhdGVUaW1lQ29tcG9uZW50LmdldChcIm1lcmlkaWVtXCIpID09IG51bGwpIHtcbiAgICAgICAgZGF0ZVRpbWVDb21wb25lbnQuaW1wbHkoXCJtZXJpZGllbVwiLCB0aW1lQ29tcG9uZW50LmdldChcIm1lcmlkaWVtXCIpKTtcbiAgICB9XG5cbiAgICBpZiAoZGF0ZVRpbWVDb21wb25lbnQuZ2V0KFwibWVyaWRpZW1cIikgPT0gTWVyaWRpZW0uUE0gJiYgZGF0ZVRpbWVDb21wb25lbnQuZ2V0KFwiaG91clwiKSA8IDEyKSB7XG4gICAgICAgIGlmICh0aW1lQ29tcG9uZW50LmlzQ2VydGFpbihcImhvdXJcIikpIHtcbiAgICAgICAgICAgIGRhdGVUaW1lQ29tcG9uZW50LmFzc2lnbihcImhvdXJcIiwgZGF0ZVRpbWVDb21wb25lbnQuZ2V0KFwiaG91clwiKSArIDEyKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGRhdGVUaW1lQ29tcG9uZW50LmltcGx5KFwiaG91clwiLCBkYXRlVGltZUNvbXBvbmVudC5nZXQoXCJob3VyXCIpICsgMTIpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZGF0ZVRpbWVDb21wb25lbnQuYWRkVGFncyhkYXRlQ29tcG9uZW50LnRhZ3MoKSk7XG4gICAgZGF0ZVRpbWVDb21wb25lbnQuYWRkVGFncyh0aW1lQ29tcG9uZW50LnRhZ3MoKSk7XG4gICAgcmV0dXJuIGRhdGVUaW1lQ29tcG9uZW50O1xufVxuIiwgIi8qXG5cbiovXG5cbmltcG9ydCB7IE1lcmdpbmdSZWZpbmVyIH0gZnJvbSBcIi4uL2Fic3RyYWN0UmVmaW5lcnNcIjtcbmltcG9ydCB7IFBhcnNpbmdSZXN1bHQgfSBmcm9tIFwiLi4vLi4vcmVzdWx0c1wiO1xuaW1wb3J0IHsgbWVyZ2VEYXRlVGltZVJlc3VsdCB9IGZyb20gXCIuLi8uLi9jYWxjdWxhdGlvbi9tZXJnaW5nQ2FsY3VsYXRpb25cIjtcblxuZXhwb3J0IGRlZmF1bHQgYWJzdHJhY3QgY2xhc3MgQWJzdHJhY3RNZXJnZURhdGVUaW1lUmVmaW5lciBleHRlbmRzIE1lcmdpbmdSZWZpbmVyIHtcbiAgICBhYnN0cmFjdCBwYXR0ZXJuQmV0d2VlbigpOiBSZWdFeHA7XG5cbiAgICBzaG91bGRNZXJnZVJlc3VsdHModGV4dEJldHdlZW46IHN0cmluZywgY3VycmVudFJlc3VsdDogUGFyc2luZ1Jlc3VsdCwgbmV4dFJlc3VsdDogUGFyc2luZ1Jlc3VsdCk6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgKChjdXJyZW50UmVzdWx0LnN0YXJ0LmlzT25seURhdGUoKSAmJiBuZXh0UmVzdWx0LnN0YXJ0LmlzT25seVRpbWUoKSkgfHxcbiAgICAgICAgICAgICAgICAobmV4dFJlc3VsdC5zdGFydC5pc09ubHlEYXRlKCkgJiYgY3VycmVudFJlc3VsdC5zdGFydC5pc09ubHlUaW1lKCkpKSAmJlxuICAgICAgICAgICAgdGV4dEJldHdlZW4ubWF0Y2godGhpcy5wYXR0ZXJuQmV0d2VlbigpKSAhPSBudWxsXG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgbWVyZ2VSZXN1bHRzKHRleHRCZXR3ZWVuOiBzdHJpbmcsIGN1cnJlbnRSZXN1bHQ6IFBhcnNpbmdSZXN1bHQsIG5leHRSZXN1bHQ6IFBhcnNpbmdSZXN1bHQpOiBQYXJzaW5nUmVzdWx0IHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gY3VycmVudFJlc3VsdC5zdGFydC5pc09ubHlEYXRlKClcbiAgICAgICAgICAgID8gbWVyZ2VEYXRlVGltZVJlc3VsdChjdXJyZW50UmVzdWx0LCBuZXh0UmVzdWx0KVxuICAgICAgICAgICAgOiBtZXJnZURhdGVUaW1lUmVzdWx0KG5leHRSZXN1bHQsIGN1cnJlbnRSZXN1bHQpO1xuXG4gICAgICAgIHJlc3VsdC5pbmRleCA9IGN1cnJlbnRSZXN1bHQuaW5kZXg7XG4gICAgICAgIHJlc3VsdC50ZXh0ID0gY3VycmVudFJlc3VsdC50ZXh0ICsgdGV4dEJldHdlZW4gKyBuZXh0UmVzdWx0LnRleHQ7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxufVxuIiwgImltcG9ydCBBYnN0cmFjdE1lcmdlRGF0ZVRpbWVSZWZpbmVyIGZyb20gXCIuLi8uLi8uLi9jb21tb24vcmVmaW5lcnMvQWJzdHJhY3RNZXJnZURhdGVUaW1lUmVmaW5lclwiO1xuXG4vKipcbiAqIE1lcmdpbmcgZGF0ZS1vbmx5IHJlc3VsdCBhbmQgdGltZS1vbmx5IHJlc3VsdCAoc2VlLiBBYnN0cmFjdE1lcmdlRGF0ZVRpbWVSZWZpbmVyKS5cbiAqIFRoaXMgaW1wbGVtZW50YXRpb24gc2hvdWxkIHByb3ZpZGUgRW5nbGlzaCBjb25uZWN0aW5nIHBoYXNlc1xuICogLSAyMDIwLTAyLTEzIFthdF0gNnBtXG4gKiAtIFRvbW9ycm93IFthZnRlcl0gN2FtXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEVOTWVyZ2VEYXRlVGltZVJlZmluZXIgZXh0ZW5kcyBBYnN0cmFjdE1lcmdlRGF0ZVRpbWVSZWZpbmVyIHtcbiAgICBwYXR0ZXJuQmV0d2VlbigpOiBSZWdFeHAge1xuICAgICAgICByZXR1cm4gbmV3IFJlZ0V4cChcIl5cXFxccyooVHxhdHxhZnRlcnxiZWZvcmV8b258b2Z8LHwtfFxcXFwufFx1MjIxOXw6KT9cXFxccyokXCIpO1xuICAgIH1cbn1cbiIsICIvLyBNYXAgQUJCUiAtPiBPZmZzZXQgaW4gbWludXRlXG5pbXBvcnQgeyBQYXJzaW5nQ29udGV4dCwgUmVmaW5lciB9IGZyb20gXCIuLi8uLi9jaHJvbm9cIjtcbmltcG9ydCB7IFRpbWV6b25lQWJick1hcCB9IGZyb20gXCIuLi8uLi90eXBlc1wiO1xuaW1wb3J0IHsgUGFyc2luZ1Jlc3VsdCB9IGZyb20gXCIuLi8uLi9yZXN1bHRzXCI7XG5pbXBvcnQgeyB0b1RpbWV6b25lT2Zmc2V0IH0gZnJvbSBcIi4uLy4uL3RpbWV6b25lXCI7XG5cbmNvbnN0IFRJTUVaT05FX05BTUVfUEFUVEVSTiA9IG5ldyBSZWdFeHAoXCJeXFxcXHMqLD9cXFxccypcXFxcKD8oW0EtWl17Miw0fSlcXFxcKT8oPz1cXFxcV3wkKVwiLCBcImlcIik7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEV4dHJhY3RUaW1lem9uZUFiYnJSZWZpbmVyIGltcGxlbWVudHMgUmVmaW5lciB7XG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSByZWFkb25seSB0aW1lem9uZU92ZXJyaWRlcz86IFRpbWV6b25lQWJick1hcCkge31cblxuICAgIHJlZmluZShjb250ZXh0OiBQYXJzaW5nQ29udGV4dCwgcmVzdWx0czogUGFyc2luZ1Jlc3VsdFtdKTogUGFyc2luZ1Jlc3VsdFtdIHtcbiAgICAgICAgY29uc3QgdGltZXpvbmVPdmVycmlkZXMgPSBjb250ZXh0Lm9wdGlvbi50aW1lem9uZXMgPz8ge307XG5cbiAgICAgICAgcmVzdWx0cy5mb3JFYWNoKChyZXN1bHQpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHN1ZmZpeCA9IGNvbnRleHQudGV4dC5zdWJzdHJpbmcocmVzdWx0LmluZGV4ICsgcmVzdWx0LnRleHQubGVuZ3RoKTtcbiAgICAgICAgICAgIGNvbnN0IG1hdGNoID0gVElNRVpPTkVfTkFNRV9QQVRURVJOLmV4ZWMoc3VmZml4KTtcbiAgICAgICAgICAgIGlmICghbWF0Y2gpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGNvbnN0IHRpbWV6b25lQWJiciA9IG1hdGNoWzFdLnRvVXBwZXJDYXNlKCk7XG4gICAgICAgICAgICBjb25zdCByZWZEYXRlID0gcmVzdWx0LnN0YXJ0LmRhdGUoKSA/PyByZXN1bHQucmVmRGF0ZSA/PyBuZXcgRGF0ZSgpO1xuICAgICAgICAgICAgY29uc3QgdHpPdmVycmlkZXMgPSB7IC4uLnRoaXMudGltZXpvbmVPdmVycmlkZXMsIC4uLnRpbWV6b25lT3ZlcnJpZGVzIH07XG4gICAgICAgICAgICBjb25zdCBleHRyYWN0ZWRUaW1lem9uZU9mZnNldCA9IHRvVGltZXpvbmVPZmZzZXQodGltZXpvbmVBYmJyLCByZWZEYXRlLCB0ek92ZXJyaWRlcyk7XG4gICAgICAgICAgICBpZiAoZXh0cmFjdGVkVGltZXpvbmVPZmZzZXQgPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnRleHQuZGVidWcoKCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFxuICAgICAgICAgICAgICAgICAgICBgRXh0cmFjdGluZyB0aW1lem9uZTogJyR7dGltZXpvbmVBYmJyfScgaW50bzogJHtleHRyYWN0ZWRUaW1lem9uZU9mZnNldH0gZm9yOiAke3Jlc3VsdC5zdGFydH1gXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBjb25zdCBjdXJyZW50VGltZXpvbmVPZmZzZXQgPSByZXN1bHQuc3RhcnQuZ2V0KFwidGltZXpvbmVPZmZzZXRcIik7XG4gICAgICAgICAgICBpZiAoY3VycmVudFRpbWV6b25lT2Zmc2V0ICE9PSBudWxsICYmIGV4dHJhY3RlZFRpbWV6b25lT2Zmc2V0ICE9IGN1cnJlbnRUaW1lem9uZU9mZnNldCkge1xuICAgICAgICAgICAgICAgIC8vIFdlIG1heSBhbHJlYWR5IGhhdmUgZXh0cmFjdGVkIHRoZSB0aW1lem9uZSBvZmZzZXQgZS5nLiBcIjExIGFtIEdNVCswOTAwIChKU1QpXCJcbiAgICAgICAgICAgICAgICAvLyAtIGlmIHRoZXkgYXJlIGVxdWFsLCB3ZSBhbHNvIHdhbnQgdG8gdGFrZSB0aGUgYWJicmV2aWF0aW9uIHRleHQgaW50byByZXN1bHRcbiAgICAgICAgICAgICAgICAvLyAtIGlmIHRoZXkgYXJlIG5vdCBlcXVhbCwgd2UgdHJ1c3QgdGhlIG9mZnNldCBtb3JlXG4gICAgICAgICAgICAgICAgaWYgKHJlc3VsdC5zdGFydC5pc0NlcnRhaW4oXCJ0aW1lem9uZU9mZnNldFwiKSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLy8gVGhpcyBpcyBvZnRlbiBiZWNhdXNlIGl0J3MgcmVsYXRpdmUgdGltZSB3aXRoIGluZmVycmVkIHRpbWV6b25lIChlLmcuIGluIDEgaG91ciwgdG9tb3Jyb3cpXG4gICAgICAgICAgICAgICAgLy8gVGhlbiwgd2Ugd2FudCB0byBkb3VibGUtY2hlY2sgdGhlIGFiYnIgY2FzZSAoZS5nLiBcIkdFVFwiIG5vdCBcImdldFwiKVxuICAgICAgICAgICAgICAgIGlmICh0aW1lem9uZUFiYnIgIT0gbWF0Y2hbMV0pIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHJlc3VsdC5zdGFydC5pc09ubHlEYXRlKCkpIHtcbiAgICAgICAgICAgICAgICAvLyBJZiB0aGUgdGltZSBpcyBub3QgZXhwbGljaXRseSBtZW50aW9uZWQsXG4gICAgICAgICAgICAgICAgLy8gVGhlbiwgd2UgYWxzbyB3YW50IHRvIGRvdWJsZS1jaGVjayB0aGUgYWJiciBjYXNlIChlLmcuIFwiR0VUXCIgbm90IFwiZ2V0XCIpXG4gICAgICAgICAgICAgICAgaWYgKHRpbWV6b25lQWJiciAhPSBtYXRjaFsxXSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXN1bHQudGV4dCArPSBtYXRjaFswXTtcblxuICAgICAgICAgICAgaWYgKCFyZXN1bHQuc3RhcnQuaXNDZXJ0YWluKFwidGltZXpvbmVPZmZzZXRcIikpIHtcbiAgICAgICAgICAgICAgICByZXN1bHQuc3RhcnQuYXNzaWduKFwidGltZXpvbmVPZmZzZXRcIiwgZXh0cmFjdGVkVGltZXpvbmVPZmZzZXQpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAocmVzdWx0LmVuZCAhPSBudWxsICYmICFyZXN1bHQuZW5kLmlzQ2VydGFpbihcInRpbWV6b25lT2Zmc2V0XCIpKSB7XG4gICAgICAgICAgICAgICAgcmVzdWx0LmVuZC5hc3NpZ24oXCJ0aW1lem9uZU9mZnNldFwiLCBleHRyYWN0ZWRUaW1lem9uZU9mZnNldCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiByZXN1bHRzO1xuICAgIH1cbn1cbiIsICJpbXBvcnQgeyBQYXJzaW5nQ29udGV4dCwgUmVmaW5lciB9IGZyb20gXCIuLi8uLi9jaHJvbm9cIjtcbmltcG9ydCB7IFBhcnNpbmdSZXN1bHQgfSBmcm9tIFwiLi4vLi4vcmVzdWx0c1wiO1xuXG5jb25zdCBUSU1FWk9ORV9PRkZTRVRfUEFUVEVSTiA9IG5ldyBSZWdFeHAoXCJeXFxcXHMqKD86XFxcXCg/KD86R01UfFVUQylcXFxccz8pPyhbKy1dKShcXFxcZHsxLDJ9KSg/Ojo/KFxcXFxkezJ9KSk/XFxcXCk/XCIsIFwiaVwiKTtcbmNvbnN0IFRJTUVaT05FX09GRlNFVF9TSUdOX0dST1VQID0gMTtcbmNvbnN0IFRJTUVaT05FX09GRlNFVF9IT1VSX09GRlNFVF9HUk9VUCA9IDI7XG5jb25zdCBUSU1FWk9ORV9PRkZTRVRfTUlOVVRFX09GRlNFVF9HUk9VUCA9IDM7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEV4dHJhY3RUaW1lem9uZU9mZnNldFJlZmluZXIgaW1wbGVtZW50cyBSZWZpbmVyIHtcbiAgICByZWZpbmUoY29udGV4dDogUGFyc2luZ0NvbnRleHQsIHJlc3VsdHM6IFBhcnNpbmdSZXN1bHRbXSk6IFBhcnNpbmdSZXN1bHRbXSB7XG4gICAgICAgIHJlc3VsdHMuZm9yRWFjaChmdW5jdGlvbiAocmVzdWx0KSB7XG4gICAgICAgICAgICBpZiAocmVzdWx0LnN0YXJ0LmlzQ2VydGFpbihcInRpbWV6b25lT2Zmc2V0XCIpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjb25zdCBzdWZmaXggPSBjb250ZXh0LnRleHQuc3Vic3RyaW5nKHJlc3VsdC5pbmRleCArIHJlc3VsdC50ZXh0Lmxlbmd0aCk7XG4gICAgICAgICAgICBjb25zdCBtYXRjaCA9IFRJTUVaT05FX09GRlNFVF9QQVRURVJOLmV4ZWMoc3VmZml4KTtcbiAgICAgICAgICAgIGlmICghbWF0Y2gpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGNvbnRleHQuZGVidWcoKCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGBFeHRyYWN0aW5nIHRpbWV6b25lOiAnJHttYXRjaFswXX0nIGludG8gOiAke3Jlc3VsdH1gKTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBjb25zdCBob3VyT2Zmc2V0ID0gcGFyc2VJbnQobWF0Y2hbVElNRVpPTkVfT0ZGU0VUX0hPVVJfT0ZGU0VUX0dST1VQXSk7XG4gICAgICAgICAgICBjb25zdCBtaW51dGVPZmZzZXQgPSBwYXJzZUludChtYXRjaFtUSU1FWk9ORV9PRkZTRVRfTUlOVVRFX09GRlNFVF9HUk9VUF0gfHwgXCIwXCIpO1xuICAgICAgICAgICAgbGV0IHRpbWV6b25lT2Zmc2V0ID0gaG91ck9mZnNldCAqIDYwICsgbWludXRlT2Zmc2V0O1xuICAgICAgICAgICAgLy8gTm8gdGltZXpvbmVzIGhhdmUgb2Zmc2V0cyBncmVhdGVyIHRoYW4gMTQgaG91cnMsIHNvIGRpc3JlZ2FyZCB0aGlzIG1hdGNoXG4gICAgICAgICAgICBpZiAodGltZXpvbmVPZmZzZXQgPiAxNCAqIDYwKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKG1hdGNoW1RJTUVaT05FX09GRlNFVF9TSUdOX0dST1VQXSA9PT0gXCItXCIpIHtcbiAgICAgICAgICAgICAgICB0aW1lem9uZU9mZnNldCA9IC10aW1lem9uZU9mZnNldDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHJlc3VsdC5lbmQgIT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIHJlc3VsdC5lbmQuYXNzaWduKFwidGltZXpvbmVPZmZzZXRcIiwgdGltZXpvbmVPZmZzZXQpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXN1bHQuc3RhcnQuYXNzaWduKFwidGltZXpvbmVPZmZzZXRcIiwgdGltZXpvbmVPZmZzZXQpO1xuICAgICAgICAgICAgcmVzdWx0LnRleHQgKz0gbWF0Y2hbMF07XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiByZXN1bHRzO1xuICAgIH1cbn1cbiIsICIvKlxuICBcbiovXG5cbmltcG9ydCB7IFBhcnNpbmdDb250ZXh0LCBSZWZpbmVyIH0gZnJvbSBcIi4uLy4uL2Nocm9ub1wiO1xuaW1wb3J0IHsgUGFyc2luZ1Jlc3VsdCB9IGZyb20gXCIuLi8uLi9yZXN1bHRzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE92ZXJsYXBSZW1vdmFsUmVmaW5lciBpbXBsZW1lbnRzIFJlZmluZXIge1xuICAgIHJlZmluZShjb250ZXh0OiBQYXJzaW5nQ29udGV4dCwgcmVzdWx0czogUGFyc2luZ1Jlc3VsdFtdKTogUGFyc2luZ1Jlc3VsdFtdIHtcbiAgICAgICAgaWYgKHJlc3VsdHMubGVuZ3RoIDwgMikge1xuICAgICAgICAgICAgcmV0dXJuIHJlc3VsdHM7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBmaWx0ZXJlZFJlc3VsdHMgPSBbXTtcbiAgICAgICAgbGV0IHByZXZSZXN1bHQgPSByZXN1bHRzWzBdO1xuICAgICAgICBmb3IgKGxldCBpID0gMTsgaSA8IHJlc3VsdHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IHJlc3VsdHNbaV07XG4gICAgICAgICAgICBpZiAocmVzdWx0LmluZGV4ID49IHByZXZSZXN1bHQuaW5kZXggKyBwcmV2UmVzdWx0LnRleHQubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgZmlsdGVyZWRSZXN1bHRzLnB1c2gocHJldlJlc3VsdCk7XG4gICAgICAgICAgICAgICAgcHJldlJlc3VsdCA9IHJlc3VsdDtcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gSWYgb3ZlcmxhcCwgY29tcGFyZSB0aGUgbGVuZ3RoIGFuZCBkaXNjYXJkIHRoZSBzaG9ydGVyIG9uZVxuICAgICAgICAgICAgbGV0IGtlcHQgPSBudWxsO1xuICAgICAgICAgICAgbGV0IHJlbW92ZWQgPSBudWxsO1xuICAgICAgICAgICAgaWYgKHJlc3VsdC50ZXh0Lmxlbmd0aCA+IHByZXZSZXN1bHQudGV4dC5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICBrZXB0ID0gcmVzdWx0O1xuICAgICAgICAgICAgICAgIHJlbW92ZWQgPSBwcmV2UmVzdWx0O1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBrZXB0ID0gcHJldlJlc3VsdDtcbiAgICAgICAgICAgICAgICByZW1vdmVkID0gcmVzdWx0O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29udGV4dC5kZWJ1ZygoKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coYCR7dGhpcy5jb25zdHJ1Y3Rvci5uYW1lfSByZW1vdmUgJHtyZW1vdmVkfSBieSAke2tlcHR9YCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHByZXZSZXN1bHQgPSBrZXB0O1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gVGhlIGxhc3Qgb25lXG4gICAgICAgIGlmIChwcmV2UmVzdWx0ICE9IG51bGwpIHtcbiAgICAgICAgICAgIGZpbHRlcmVkUmVzdWx0cy5wdXNoKHByZXZSZXN1bHQpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGZpbHRlcmVkUmVzdWx0cztcbiAgICB9XG59XG4iLCAiLypcbiAgICBFbmZvcmNlICdmb3J3YXJkRGF0ZScgb3B0aW9uIHRvIG9uIHRoZSByZXN1bHRzLiBXaGVuIHRoZXJlIGFyZSBtaXNzaW5nIGNvbXBvbmVudCxcbiAgICBlLmcuIFwiTWFyY2ggMTItMTMgKHdpdGhvdXQgeWVhcilcIiBvciBcIlRodXJzZGF5XCIsIHRoZSByZWZpbmVyIHdpbGwgdHJ5IHRvIGFkanVzdCB0aGUgcmVzdWx0XG4gICAgaW50byB0aGUgZnV0dXJlIGluc3RlYWQgb2YgdGhlIHBhc3QuXG4qL1xuXG5pbXBvcnQgeyBQYXJzaW5nQ29udGV4dCwgUmVmaW5lciB9IGZyb20gXCIuLi8uLi9jaHJvbm9cIjtcbmltcG9ydCB7IFBhcnNpbmdSZXN1bHQgfSBmcm9tIFwiLi4vLi4vcmVzdWx0c1wiO1xuaW1wb3J0IGRheWpzIGZyb20gXCJkYXlqc1wiO1xuaW1wb3J0IHsgaW1wbHlTaW1pbGFyRGF0ZSB9IGZyb20gXCIuLi8uLi91dGlscy9kYXlqc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGb3J3YXJkRGF0ZVJlZmluZXIgaW1wbGVtZW50cyBSZWZpbmVyIHtcbiAgICByZWZpbmUoY29udGV4dDogUGFyc2luZ0NvbnRleHQsIHJlc3VsdHM6IFBhcnNpbmdSZXN1bHRbXSk6IFBhcnNpbmdSZXN1bHRbXSB7XG4gICAgICAgIGlmICghY29udGV4dC5vcHRpb24uZm9yd2FyZERhdGUpIHtcbiAgICAgICAgICAgIHJldHVybiByZXN1bHRzO1xuICAgICAgICB9XG5cbiAgICAgICAgcmVzdWx0cy5mb3JFYWNoKChyZXN1bHQpID0+IHtcbiAgICAgICAgICAgIGxldCByZWZNb21lbnQgPSBkYXlqcyhjb250ZXh0LnJlZkRhdGUpO1xuXG4gICAgICAgICAgICBpZiAocmVzdWx0LnN0YXJ0LmlzT25seVRpbWUoKSAmJiByZWZNb21lbnQuaXNBZnRlcihyZXN1bHQuc3RhcnQuZGF5anMoKSkpIHtcbiAgICAgICAgICAgICAgICByZWZNb21lbnQgPSByZWZNb21lbnQuYWRkKDEsIFwiZGF5XCIpO1xuICAgICAgICAgICAgICAgIGltcGx5U2ltaWxhckRhdGUocmVzdWx0LnN0YXJ0LCByZWZNb21lbnQpO1xuICAgICAgICAgICAgICAgIGlmIChyZXN1bHQuZW5kICYmIHJlc3VsdC5lbmQuaXNPbmx5VGltZSgpKSB7XG4gICAgICAgICAgICAgICAgICAgIGltcGx5U2ltaWxhckRhdGUocmVzdWx0LmVuZCwgcmVmTW9tZW50KTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHJlc3VsdC5zdGFydC5kYXlqcygpLmlzQWZ0ZXIocmVzdWx0LmVuZC5kYXlqcygpKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVmTW9tZW50ID0gcmVmTW9tZW50LmFkZCgxLCBcImRheVwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGltcGx5U2ltaWxhckRhdGUocmVzdWx0LmVuZCwgcmVmTW9tZW50KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjb250ZXh0LmRlYnVnKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coYCR7dGhpcy5jb25zdHJ1Y3Rvci5uYW1lfSBhZGp1c3RlZCAke3Jlc3VsdH0gdGltZSByZXN1bHQgKCR7cmVzdWx0LnN0YXJ0fSlgKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHJlc3VsdC5zdGFydC5pc09ubHlXZWVrZGF5Q29tcG9uZW50KCkgJiYgcmVmTW9tZW50LmlzQWZ0ZXIocmVzdWx0LnN0YXJ0LmRheWpzKCkpKSB7XG4gICAgICAgICAgICAgICAgaWYgKHJlZk1vbWVudC5kYXkoKSA+PSByZXN1bHQuc3RhcnQuZ2V0KFwid2Vla2RheVwiKSkge1xuICAgICAgICAgICAgICAgICAgICByZWZNb21lbnQgPSByZWZNb21lbnQuZGF5KHJlc3VsdC5zdGFydC5nZXQoXCJ3ZWVrZGF5XCIpICsgNyk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgcmVmTW9tZW50ID0gcmVmTW9tZW50LmRheSg8bnVtYmVyPnJlc3VsdC5zdGFydC5nZXQoXCJ3ZWVrZGF5XCIpKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICByZXN1bHQuc3RhcnQuaW1wbHkoXCJkYXlcIiwgcmVmTW9tZW50LmRhdGUoKSk7XG4gICAgICAgICAgICAgICAgcmVzdWx0LnN0YXJ0LmltcGx5KFwibW9udGhcIiwgcmVmTW9tZW50Lm1vbnRoKCkgKyAxKTtcbiAgICAgICAgICAgICAgICByZXN1bHQuc3RhcnQuaW1wbHkoXCJ5ZWFyXCIsIHJlZk1vbWVudC55ZWFyKCkpO1xuICAgICAgICAgICAgICAgIGNvbnRleHQuZGVidWcoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhgJHt0aGlzLmNvbnN0cnVjdG9yLm5hbWV9IGFkanVzdGVkICR7cmVzdWx0fSB3ZWVrZGF5ICgke3Jlc3VsdC5zdGFydH0pYCk7XG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICBpZiAocmVzdWx0LmVuZCAmJiByZXN1bHQuZW5kLmlzT25seVdlZWtkYXlDb21wb25lbnQoKSkge1xuICAgICAgICAgICAgICAgICAgICAvLyBBZGp1c3QgZGF0ZSB0byB0aGUgY29taW5nIHdlZWtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHJlZk1vbWVudC5kYXkoKSA+IHJlc3VsdC5lbmQuZ2V0KFwid2Vla2RheVwiKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVmTW9tZW50ID0gcmVmTW9tZW50LmRheShyZXN1bHQuZW5kLmdldChcIndlZWtkYXlcIikgKyA3KTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlZk1vbWVudCA9IHJlZk1vbWVudC5kYXkoPG51bWJlcj5yZXN1bHQuZW5kLmdldChcIndlZWtkYXlcIikpO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0LmVuZC5pbXBseShcImRheVwiLCByZWZNb21lbnQuZGF0ZSgpKTtcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0LmVuZC5pbXBseShcIm1vbnRoXCIsIHJlZk1vbWVudC5tb250aCgpICsgMSk7XG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdC5lbmQuaW1wbHkoXCJ5ZWFyXCIsIHJlZk1vbWVudC55ZWFyKCkpO1xuICAgICAgICAgICAgICAgICAgICBjb250ZXh0LmRlYnVnKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGAke3RoaXMuY29uc3RydWN0b3IubmFtZX0gYWRqdXN0ZWQgJHtyZXN1bHR9IHdlZWtkYXkgKCR7cmVzdWx0LmVuZH0pYCk7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gSW4gY2FzZSB3aGVyZSB3ZSBrbm93IHRoZSBtb250aCwgYnV0IG5vdCB3aGljaCB5ZWFyIChlLmcuIFwiaW4gRGVjZW1iZXJcIiwgXCIyNXRoIERlY2VtYmVyXCIpLFxuICAgICAgICAgICAgLy8gdHJ5IG1vdmUgdG8gYW5vdGhlciB5ZWFyXG4gICAgICAgICAgICBpZiAocmVzdWx0LnN0YXJ0LmlzRGF0ZVdpdGhVbmtub3duWWVhcigpICYmIHJlZk1vbWVudC5pc0FmdGVyKHJlc3VsdC5zdGFydC5kYXlqcygpKSkge1xuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMyAmJiByZWZNb21lbnQuaXNBZnRlcihyZXN1bHQuc3RhcnQuZGF5anMoKSk7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICByZXN1bHQuc3RhcnQuaW1wbHkoXCJ5ZWFyXCIsIHJlc3VsdC5zdGFydC5nZXQoXCJ5ZWFyXCIpICsgMSk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnRleHQuZGVidWcoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coYCR7dGhpcy5jb25zdHJ1Y3Rvci5uYW1lfSBhZGp1c3RlZCAke3Jlc3VsdH0geWVhciAoJHtyZXN1bHQuc3RhcnR9KWApO1xuICAgICAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgICAgICBpZiAocmVzdWx0LmVuZCAmJiAhcmVzdWx0LmVuZC5pc0NlcnRhaW4oXCJ5ZWFyXCIpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXN1bHQuZW5kLmltcGx5KFwieWVhclwiLCByZXN1bHQuZW5kLmdldChcInllYXJcIikgKyAxKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRleHQuZGVidWcoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGAke3RoaXMuY29uc3RydWN0b3IubmFtZX0gYWRqdXN0ZWQgJHtyZXN1bHR9IG1vbnRoICgke3Jlc3VsdC5zdGFydH0pYCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdHM7XG4gICAgfVxufVxuIiwgImltcG9ydCB7IEZpbHRlciB9IGZyb20gXCIuLi9hYnN0cmFjdFJlZmluZXJzXCI7XG5pbXBvcnQgeyBQYXJzaW5nUmVzdWx0IH0gZnJvbSBcIi4uLy4uL3Jlc3VsdHNcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVW5saWtlbHlGb3JtYXRGaWx0ZXIgZXh0ZW5kcyBGaWx0ZXIge1xuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgc3RyaWN0TW9kZTogYm9vbGVhbikge1xuICAgICAgICBzdXBlcigpO1xuICAgIH1cblxuICAgIGlzVmFsaWQoY29udGV4dCwgcmVzdWx0OiBQYXJzaW5nUmVzdWx0KTogYm9vbGVhbiB7XG4gICAgICAgIGlmIChyZXN1bHQudGV4dC5yZXBsYWNlKFwiIFwiLCBcIlwiKS5tYXRjaCgvXlxcZCooXFwuXFxkKik/JC8pKSB7XG4gICAgICAgICAgICBjb250ZXh0LmRlYnVnKCgpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhgUmVtb3ZpbmcgdW5saWtlbHkgcmVzdWx0ICcke3Jlc3VsdC50ZXh0fSdgKTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIXJlc3VsdC5zdGFydC5pc1ZhbGlkRGF0ZSgpKSB7XG4gICAgICAgICAgICBjb250ZXh0LmRlYnVnKCgpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhgUmVtb3ZpbmcgaW52YWxpZCByZXN1bHQ6ICR7cmVzdWx0fSAoJHtyZXN1bHQuc3RhcnR9KWApO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChyZXN1bHQuZW5kICYmICFyZXN1bHQuZW5kLmlzVmFsaWREYXRlKCkpIHtcbiAgICAgICAgICAgIGNvbnRleHQuZGVidWcoKCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGBSZW1vdmluZyBpbnZhbGlkIHJlc3VsdDogJHtyZXN1bHR9ICgke3Jlc3VsdC5lbmR9KWApO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLnN0cmljdE1vZGUpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmlzU3RyaWN0TW9kZVZhbGlkKGNvbnRleHQsIHJlc3VsdCk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGlzU3RyaWN0TW9kZVZhbGlkKGNvbnRleHQsIHJlc3VsdDogUGFyc2luZ1Jlc3VsdCkge1xuICAgICAgICBpZiAocmVzdWx0LnN0YXJ0LmlzT25seVdlZWtkYXlDb21wb25lbnQoKSkge1xuICAgICAgICAgICAgY29udGV4dC5kZWJ1ZygoKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coYChTdHJpY3QpIFJlbW92aW5nIHdlZWtkYXkgb25seSBjb21wb25lbnQ6ICR7cmVzdWx0fSAoJHtyZXN1bHQuZW5kfSlgKTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAocmVzdWx0LnN0YXJ0LmlzT25seVRpbWUoKSAmJiAoIXJlc3VsdC5zdGFydC5pc0NlcnRhaW4oXCJob3VyXCIpIHx8ICFyZXN1bHQuc3RhcnQuaXNDZXJ0YWluKFwibWludXRlXCIpKSkge1xuICAgICAgICAgICAgY29udGV4dC5kZWJ1ZygoKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coYChTdHJpY3QpIFJlbW92aW5nIHVuY2VydGFpbiB0aW1lIGNvbXBvbmVudDogJHtyZXN1bHR9ICgke3Jlc3VsdC5lbmR9KWApO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbn1cbiIsICJpbXBvcnQgeyBQYXJzaW5nQ29udGV4dCB9IGZyb20gXCIuLi8uLi9jaHJvbm9cIjtcbmltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gXCIuLi8uLi90eXBlc1wiO1xuaW1wb3J0IHsgQWJzdHJhY3RQYXJzZXJXaXRoV29yZEJvdW5kYXJ5Q2hlY2tpbmcgfSBmcm9tIFwiLi9BYnN0cmFjdFBhcnNlcldpdGhXb3JkQm91bmRhcnlcIjtcblxuLy8gSVNPIDg2MDFcbi8vIGh0dHA6Ly93d3cudzMub3JnL1RSL05PVEUtZGF0ZXRpbWVcbi8vIC0gWVlZWS1NTS1ERFxuLy8gLSBZWVlZLU1NLUREVGhoOm1tVFpEXG4vLyAtIFlZWVktTU0tRERUaGg6bW06c3NUWkRcbi8vIC0gWVlZWS1NTS1ERFRoaDptbTpzcy5zVFpEXG4vLyAtIFRaRCA9IChaIG9yICtoaDptbSBvciAtaGg6bW0pXG5cbi8vIHByZXR0aWVyLWlnbm9yZVxuY29uc3QgUEFUVEVSTiA9IG5ldyBSZWdFeHAoXG4gICAgXCIoWzAtOV17NH0pXFxcXC0oWzAtOV17MSwyfSlcXFxcLShbMC05XXsxLDJ9KVwiICtcbiAgICBcIig/OlRcIiArIC8vLi5cbiAgICAgICAgXCIoWzAtOV17MSwyfSk6KFswLTldezEsMn0pXCIgKyAvLyBoaDptbVxuICAgICAgICBcIig/OlwiICtcbiAgICAgICAgICAgIFwiOihbMC05XXsxLDJ9KSg/OlxcXFwuKFxcXFxkezEsNH0pKT9cIiArXG4gICAgICAgIFwiKT9cIiArIC8vIDpzcy5zXG4gICAgICAgIFwiKFwiICtcbiAgICAgICAgICAgIFwiWnwoWystXVxcXFxkezJ9KTo/KFxcXFxkezJ9KT9cIiArXG4gICAgICAgIFwiKT9cIiArIC8vIFRaRCAoWiBvciBcdTAwQjFoaDptbSBvciBcdTAwQjFoaG1tIG9yIFx1MDBCMWhoKVxuICAgIFwiKT9cIiArXG4gICAgXCIoPz1cXFxcV3wkKVwiLFxuICAgIFwiaVwiXG4pO1xuXG5jb25zdCBZRUFSX05VTUJFUl9HUk9VUCA9IDE7XG5jb25zdCBNT05USF9OVU1CRVJfR1JPVVAgPSAyO1xuY29uc3QgREFURV9OVU1CRVJfR1JPVVAgPSAzO1xuY29uc3QgSE9VUl9OVU1CRVJfR1JPVVAgPSA0O1xuY29uc3QgTUlOVVRFX05VTUJFUl9HUk9VUCA9IDU7XG5jb25zdCBTRUNPTkRfTlVNQkVSX0dST1VQID0gNjtcbmNvbnN0IE1JTExJU0VDT05EX05VTUJFUl9HUk9VUCA9IDc7XG5jb25zdCBUWkRfR1JPVVAgPSA4O1xuY29uc3QgVFpEX0hPVVJfT0ZGU0VUX0dST1VQID0gOTtcbmNvbnN0IFRaRF9NSU5VVEVfT0ZGU0VUX0dST1VQID0gMTA7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIElTT0Zvcm1hdFBhcnNlciBleHRlbmRzIEFic3RyYWN0UGFyc2VyV2l0aFdvcmRCb3VuZGFyeUNoZWNraW5nIHtcbiAgICBpbm5lclBhdHRlcm4oKTogUmVnRXhwIHtcbiAgICAgICAgcmV0dXJuIFBBVFRFUk47XG4gICAgfVxuXG4gICAgaW5uZXJFeHRyYWN0KGNvbnRleHQ6IFBhcnNpbmdDb250ZXh0LCBtYXRjaDogUmVnRXhwTWF0Y2hBcnJheSkge1xuICAgICAgICBjb25zdCBjb21wb25lbnRzID0gY29udGV4dC5jcmVhdGVQYXJzaW5nQ29tcG9uZW50cyh7XG4gICAgICAgICAgICBcInllYXJcIjogcGFyc2VJbnQobWF0Y2hbWUVBUl9OVU1CRVJfR1JPVVBdKSxcbiAgICAgICAgICAgIFwibW9udGhcIjogcGFyc2VJbnQobWF0Y2hbTU9OVEhfTlVNQkVSX0dST1VQXSksXG4gICAgICAgICAgICBcImRheVwiOiBwYXJzZUludChtYXRjaFtEQVRFX05VTUJFUl9HUk9VUF0pLFxuICAgICAgICB9KTtcbiAgICAgICAgaWYgKG1hdGNoW0hPVVJfTlVNQkVSX0dST1VQXSAhPSBudWxsKSB7XG4gICAgICAgICAgICBjb21wb25lbnRzLmFzc2lnbihcImhvdXJcIiwgcGFyc2VJbnQobWF0Y2hbSE9VUl9OVU1CRVJfR1JPVVBdKSk7XG4gICAgICAgICAgICBjb21wb25lbnRzLmFzc2lnbihcIm1pbnV0ZVwiLCBwYXJzZUludChtYXRjaFtNSU5VVEVfTlVNQkVSX0dST1VQXSkpO1xuXG4gICAgICAgICAgICBpZiAobWF0Y2hbU0VDT05EX05VTUJFUl9HUk9VUF0gIT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIGNvbXBvbmVudHMuYXNzaWduKFwic2Vjb25kXCIsIHBhcnNlSW50KG1hdGNoW1NFQ09ORF9OVU1CRVJfR1JPVVBdKSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChtYXRjaFtNSUxMSVNFQ09ORF9OVU1CRVJfR1JPVVBdICE9IG51bGwpIHtcbiAgICAgICAgICAgICAgICBjb21wb25lbnRzLmFzc2lnbihcIm1pbGxpc2Vjb25kXCIsIHBhcnNlSW50KG1hdGNoW01JTExJU0VDT05EX05VTUJFUl9HUk9VUF0pKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChtYXRjaFtUWkRfR1JPVVBdICE9IG51bGwpIHtcbiAgICAgICAgICAgICAgICAvLyBUaGUgWnVsdSB0aW1lIHpvbmUgKFopIGlzIGVxdWl2YWxlbnQgdG8gVVRDXG4gICAgICAgICAgICAgICAgbGV0IG9mZnNldCA9IDA7XG4gICAgICAgICAgICAgICAgaWYgKG1hdGNoW1RaRF9IT1VSX09GRlNFVF9HUk9VUF0pIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgaG91ck9mZnNldCA9IHBhcnNlSW50KG1hdGNoW1RaRF9IT1VSX09GRlNFVF9HUk9VUF0pO1xuICAgICAgICAgICAgICAgICAgICBsZXQgbWludXRlT2Zmc2V0ID0gMDtcbiAgICAgICAgICAgICAgICAgICAgaWYgKG1hdGNoW1RaRF9NSU5VVEVfT0ZGU0VUX0dST1VQXSAhPSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBtaW51dGVPZmZzZXQgPSBwYXJzZUludChtYXRjaFtUWkRfTUlOVVRFX09GRlNFVF9HUk9VUF0pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIG9mZnNldCA9IGhvdXJPZmZzZXQgKiA2MDtcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9mZnNldCA8IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG9mZnNldCAtPSBtaW51dGVPZmZzZXQ7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBvZmZzZXQgKz0gbWludXRlT2Zmc2V0O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNvbXBvbmVudHMuYXNzaWduKFwidGltZXpvbmVPZmZzZXRcIiwgb2Zmc2V0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gY29tcG9uZW50cy5hZGRUYWcoXCJwYXJzZXIvSVNPRm9ybWF0UGFyc2VyXCIpO1xuICAgIH1cbn1cbiIsICIvKlxuICBcbiovXG5cbmltcG9ydCB7IE1lcmdpbmdSZWZpbmVyIH0gZnJvbSBcIi4uL2Fic3RyYWN0UmVmaW5lcnNcIjtcbmltcG9ydCB7IFBhcnNpbmdSZXN1bHQgfSBmcm9tIFwiLi4vLi4vcmVzdWx0c1wiO1xuXG4vKipcbiAqIE1lcmdlIHdlZWtkYXkgY29tcG9uZW50IGludG8gbW9yZSBjb21wbGV0ZWQgZGF0YVxuICogLSBbU3VuZGF5XSBbMTIvNy8yMDE0XSA9PiBbU3VuZGF5IDEyLzcvMjAxNF1cbiAqIC0gW1R1ZXNkYXldLCBbSmFudWFyeSAxMywgMjAxMl0gPT4gW1N1bmRheSAxMi83LzIwMTRdXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1lcmdlV2Vla2RheUNvbXBvbmVudFJlZmluZXIgZXh0ZW5kcyBNZXJnaW5nUmVmaW5lciB7XG4gICAgbWVyZ2VSZXN1bHRzKHRleHRCZXR3ZWVuOiBzdHJpbmcsIGN1cnJlbnRSZXN1bHQ6IFBhcnNpbmdSZXN1bHQsIG5leHRSZXN1bHQ6IFBhcnNpbmdSZXN1bHQpOiBQYXJzaW5nUmVzdWx0IHtcbiAgICAgICAgY29uc3QgbmV3UmVzdWx0ID0gbmV4dFJlc3VsdC5jbG9uZSgpO1xuICAgICAgICBuZXdSZXN1bHQuaW5kZXggPSBjdXJyZW50UmVzdWx0LmluZGV4O1xuICAgICAgICBuZXdSZXN1bHQudGV4dCA9IGN1cnJlbnRSZXN1bHQudGV4dCArIHRleHRCZXR3ZWVuICsgbmV3UmVzdWx0LnRleHQ7XG5cbiAgICAgICAgbmV3UmVzdWx0LnN0YXJ0LmFzc2lnbihcIndlZWtkYXlcIiwgY3VycmVudFJlc3VsdC5zdGFydC5nZXQoXCJ3ZWVrZGF5XCIpKTtcbiAgICAgICAgaWYgKG5ld1Jlc3VsdC5lbmQpIHtcbiAgICAgICAgICAgIG5ld1Jlc3VsdC5lbmQuYXNzaWduKFwid2Vla2RheVwiLCBjdXJyZW50UmVzdWx0LnN0YXJ0LmdldChcIndlZWtkYXlcIikpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIG5ld1Jlc3VsdDtcbiAgICB9XG5cbiAgICBzaG91bGRNZXJnZVJlc3VsdHModGV4dEJldHdlZW46IHN0cmluZywgY3VycmVudFJlc3VsdDogUGFyc2luZ1Jlc3VsdCwgbmV4dFJlc3VsdDogUGFyc2luZ1Jlc3VsdCk6IGJvb2xlYW4ge1xuICAgICAgICBjb25zdCB3ZWVrZGF5VGhlbk5vcm1hbERhdGUgPVxuICAgICAgICAgICAgY3VycmVudFJlc3VsdC5zdGFydC5pc09ubHlXZWVrZGF5Q29tcG9uZW50KCkgJiZcbiAgICAgICAgICAgICFjdXJyZW50UmVzdWx0LnN0YXJ0LmlzQ2VydGFpbihcImhvdXJcIikgJiZcbiAgICAgICAgICAgIG5leHRSZXN1bHQuc3RhcnQuaXNDZXJ0YWluKFwiZGF5XCIpO1xuICAgICAgICByZXR1cm4gd2Vla2RheVRoZW5Ob3JtYWxEYXRlICYmIHRleHRCZXR3ZWVuLm1hdGNoKC9eLD9cXHMqJC8pICE9IG51bGw7XG4gICAgfVxufVxuIiwgImltcG9ydCB7IENvbmZpZ3VyYXRpb24sIFBhcnNlciwgUmVmaW5lciB9IGZyb20gXCIuL2Nocm9ub1wiO1xuXG5pbXBvcnQgRXh0cmFjdFRpbWV6b25lQWJiclJlZmluZXIgZnJvbSBcIi4vY29tbW9uL3JlZmluZXJzL0V4dHJhY3RUaW1lem9uZUFiYnJSZWZpbmVyXCI7XG5pbXBvcnQgRXh0cmFjdFRpbWV6b25lT2Zmc2V0UmVmaW5lciBmcm9tIFwiLi9jb21tb24vcmVmaW5lcnMvRXh0cmFjdFRpbWV6b25lT2Zmc2V0UmVmaW5lclwiO1xuaW1wb3J0IE92ZXJsYXBSZW1vdmFsUmVmaW5lciBmcm9tIFwiLi9jb21tb24vcmVmaW5lcnMvT3ZlcmxhcFJlbW92YWxSZWZpbmVyXCI7XG5pbXBvcnQgRm9yd2FyZERhdGVSZWZpbmVyIGZyb20gXCIuL2NvbW1vbi9yZWZpbmVycy9Gb3J3YXJkRGF0ZVJlZmluZXJcIjtcbmltcG9ydCBVbmxpa2VseUZvcm1hdEZpbHRlciBmcm9tIFwiLi9jb21tb24vcmVmaW5lcnMvVW5saWtlbHlGb3JtYXRGaWx0ZXJcIjtcbmltcG9ydCBJU09Gb3JtYXRQYXJzZXIgZnJvbSBcIi4vY29tbW9uL3BhcnNlcnMvSVNPRm9ybWF0UGFyc2VyXCI7XG5pbXBvcnQgTWVyZ2VXZWVrZGF5Q29tcG9uZW50UmVmaW5lciBmcm9tIFwiLi9jb21tb24vcmVmaW5lcnMvTWVyZ2VXZWVrZGF5Q29tcG9uZW50UmVmaW5lclwiO1xuXG5leHBvcnQgZnVuY3Rpb24gaW5jbHVkZUNvbW1vbkNvbmZpZ3VyYXRpb24oY29uZmlndXJhdGlvbjogQ29uZmlndXJhdGlvbiwgc3RyaWN0TW9kZSA9IGZhbHNlKTogQ29uZmlndXJhdGlvbiB7XG4gICAgY29uZmlndXJhdGlvbi5wYXJzZXJzLnVuc2hpZnQobmV3IElTT0Zvcm1hdFBhcnNlcigpKTtcblxuICAgIGNvbmZpZ3VyYXRpb24ucmVmaW5lcnMudW5zaGlmdChuZXcgTWVyZ2VXZWVrZGF5Q29tcG9uZW50UmVmaW5lcigpKTtcbiAgICBjb25maWd1cmF0aW9uLnJlZmluZXJzLnVuc2hpZnQobmV3IEV4dHJhY3RUaW1lem9uZU9mZnNldFJlZmluZXIoKSk7XG4gICAgY29uZmlndXJhdGlvbi5yZWZpbmVycy51bnNoaWZ0KG5ldyBPdmVybGFwUmVtb3ZhbFJlZmluZXIoKSk7XG5cbiAgICAvLyBVbmxpa2UgRXh0cmFjdFRpbWV6b25lT2Zmc2V0UmVmaW5lciwgdGhpcyByZWZpbmVyIHJlbGllcyBvbiBrbm93aW5nIGJvdGggZGF0ZSBhbmQgdGltZSBpbiBjYXNlcyB3aGVyZSB0aGUgdHpcbiAgICAvLyBpcyBhbWJpZ3VvdXMgKGluIHRlcm1zIG9mIERTVC9ub24tRFNUKS4gSXQgdGhlcmVmb3JlIG5lZWRzIHRvIGJlIGFwcGxpZWQgYXMgbGF0ZSBhcyBwb3NzaWJsZSBpbiB0aGUgcGFyc2luZy5cbiAgICBjb25maWd1cmF0aW9uLnJlZmluZXJzLnB1c2gobmV3IEV4dHJhY3RUaW1lem9uZUFiYnJSZWZpbmVyKCkpO1xuICAgIGNvbmZpZ3VyYXRpb24ucmVmaW5lcnMucHVzaChuZXcgT3ZlcmxhcFJlbW92YWxSZWZpbmVyKCkpO1xuICAgIGNvbmZpZ3VyYXRpb24ucmVmaW5lcnMucHVzaChuZXcgRm9yd2FyZERhdGVSZWZpbmVyKCkpO1xuICAgIGNvbmZpZ3VyYXRpb24ucmVmaW5lcnMucHVzaChuZXcgVW5saWtlbHlGb3JtYXRGaWx0ZXIoc3RyaWN0TW9kZSkpO1xuICAgIHJldHVybiBjb25maWd1cmF0aW9uO1xufVxuIiwgImltcG9ydCB7IFBhcnNpbmdDb250ZXh0IH0gZnJvbSBcIi4uLy4uLy4uL2Nocm9ub1wiO1xuaW1wb3J0IHsgUGFyc2luZ0NvbXBvbmVudHMsIFBhcnNpbmdSZXN1bHQgfSBmcm9tIFwiLi4vLi4vLi4vcmVzdWx0c1wiO1xuaW1wb3J0IGRheWpzIGZyb20gXCJkYXlqc1wiO1xuaW1wb3J0IHsgQWJzdHJhY3RQYXJzZXJXaXRoV29yZEJvdW5kYXJ5Q2hlY2tpbmcgfSBmcm9tIFwiLi4vLi4vLi4vY29tbW9uL3BhcnNlcnMvQWJzdHJhY3RQYXJzZXJXaXRoV29yZEJvdW5kYXJ5XCI7XG5pbXBvcnQgeyBhc3NpZ25TaW1pbGFyRGF0ZSB9IGZyb20gXCIuLi8uLi8uLi91dGlscy9kYXlqc1wiO1xuaW1wb3J0ICogYXMgcmVmZXJlbmNlcyBmcm9tIFwiLi4vLi4vLi4vY29tbW9uL2Nhc3VhbFJlZmVyZW5jZXNcIjtcblxuY29uc3QgUEFUVEVSTiA9IC8obm93fHRvZGF5fHRvbmlnaHR8dG9tb3Jyb3d8dG1yfHRtcnd8eWVzdGVyZGF5fGxhc3RcXHMqbmlnaHQpKD89XFxXfCQpL2k7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEVOQ2FzdWFsRGF0ZVBhcnNlciBleHRlbmRzIEFic3RyYWN0UGFyc2VyV2l0aFdvcmRCb3VuZGFyeUNoZWNraW5nIHtcbiAgICBpbm5lclBhdHRlcm4oY29udGV4dDogUGFyc2luZ0NvbnRleHQpOiBSZWdFeHAge1xuICAgICAgICByZXR1cm4gUEFUVEVSTjtcbiAgICB9XG5cbiAgICBpbm5lckV4dHJhY3QoY29udGV4dDogUGFyc2luZ0NvbnRleHQsIG1hdGNoOiBSZWdFeHBNYXRjaEFycmF5KTogUGFyc2luZ0NvbXBvbmVudHMgfCBQYXJzaW5nUmVzdWx0IHtcbiAgICAgICAgbGV0IHRhcmdldERhdGUgPSBkYXlqcyhjb250ZXh0LnJlZkRhdGUpO1xuICAgICAgICBjb25zdCBsb3dlclRleHQgPSBtYXRjaFswXS50b0xvd2VyQ2FzZSgpO1xuICAgICAgICBsZXQgY29tcG9uZW50ID0gY29udGV4dC5jcmVhdGVQYXJzaW5nQ29tcG9uZW50cygpO1xuXG4gICAgICAgIHN3aXRjaCAobG93ZXJUZXh0KSB7XG4gICAgICAgICAgICBjYXNlIFwibm93XCI6XG4gICAgICAgICAgICAgICAgY29tcG9uZW50ID0gcmVmZXJlbmNlcy5ub3coY29udGV4dC5yZWZlcmVuY2UpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICBjYXNlIFwidG9kYXlcIjpcbiAgICAgICAgICAgICAgICBjb21wb25lbnQgPSByZWZlcmVuY2VzLnRvZGF5KGNvbnRleHQucmVmZXJlbmNlKTtcbiAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgY2FzZSBcInllc3RlcmRheVwiOlxuICAgICAgICAgICAgICAgIGNvbXBvbmVudCA9IHJlZmVyZW5jZXMueWVzdGVyZGF5KGNvbnRleHQucmVmZXJlbmNlKTtcbiAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgY2FzZSBcInRvbW9ycm93XCI6XG4gICAgICAgICAgICBjYXNlIFwidG1yXCI6XG4gICAgICAgICAgICBjYXNlIFwidG1yd1wiOlxuICAgICAgICAgICAgICAgIGNvbXBvbmVudCA9IHJlZmVyZW5jZXMudG9tb3Jyb3coY29udGV4dC5yZWZlcmVuY2UpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICBjYXNlIFwidG9uaWdodFwiOlxuICAgICAgICAgICAgICAgIGNvbXBvbmVudCA9IHJlZmVyZW5jZXMudG9uaWdodChjb250ZXh0LnJlZmVyZW5jZSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgaWYgKGxvd2VyVGV4dC5tYXRjaCgvbGFzdFxccypuaWdodC8pKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0YXJnZXREYXRlLmhvdXIoKSA+IDYpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldERhdGUgPSB0YXJnZXREYXRlLmFkZCgtMSwgXCJkYXlcIik7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBhc3NpZ25TaW1pbGFyRGF0ZShjb21wb25lbnQsIHRhcmdldERhdGUpO1xuICAgICAgICAgICAgICAgICAgICBjb21wb25lbnQuaW1wbHkoXCJob3VyXCIsIDApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgICBjb21wb25lbnQuYWRkVGFnKFwicGFyc2VyL0VOQ2FzdWFsRGF0ZVBhcnNlclwiKTtcbiAgICAgICAgcmV0dXJuIGNvbXBvbmVudDtcbiAgICB9XG59XG4iLCAiaW1wb3J0IHsgUGFyc2luZ0NvbXBvbmVudHMsIFJlZmVyZW5jZVdpdGhUaW1lem9uZSB9IGZyb20gXCIuLi9yZXN1bHRzXCI7XG5pbXBvcnQgZGF5anMgZnJvbSBcImRheWpzXCI7XG5pbXBvcnQge1xuICAgIGFzc2lnblNpbWlsYXJEYXRlLFxuICAgIGFzc2lnblNpbWlsYXJUaW1lLFxuICAgIGltcGx5U2ltaWxhckRhdGUsXG4gICAgaW1wbHlTaW1pbGFyVGltZSxcbiAgICBpbXBseVRoZU5leHREYXksXG59IGZyb20gXCIuLi91dGlscy9kYXlqc1wiO1xuaW1wb3J0IHsgTWVyaWRpZW0gfSBmcm9tIFwiLi4vdHlwZXNcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIG5vdyhyZWZlcmVuY2U6IFJlZmVyZW5jZVdpdGhUaW1lem9uZSk6IFBhcnNpbmdDb21wb25lbnRzIHtcbiAgICBjb25zdCB0YXJnZXREYXRlID0gZGF5anMocmVmZXJlbmNlLmluc3RhbnQpO1xuICAgIGNvbnN0IGNvbXBvbmVudCA9IG5ldyBQYXJzaW5nQ29tcG9uZW50cyhyZWZlcmVuY2UsIHt9KTtcbiAgICBhc3NpZ25TaW1pbGFyRGF0ZShjb21wb25lbnQsIHRhcmdldERhdGUpO1xuICAgIGFzc2lnblNpbWlsYXJUaW1lKGNvbXBvbmVudCwgdGFyZ2V0RGF0ZSk7XG4gICAgaWYgKHJlZmVyZW5jZS50aW1lem9uZU9mZnNldCAhPT0gbnVsbCkge1xuICAgICAgICBjb21wb25lbnQuYXNzaWduKFwidGltZXpvbmVPZmZzZXRcIiwgdGFyZ2V0RGF0ZS51dGNPZmZzZXQoKSk7XG4gICAgfVxuICAgIGNvbXBvbmVudC5hZGRUYWcoXCJjYXN1YWxSZWZlcmVuY2Uvbm93XCIpO1xuICAgIHJldHVybiBjb21wb25lbnQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0b2RheShyZWZlcmVuY2U6IFJlZmVyZW5jZVdpdGhUaW1lem9uZSk6IFBhcnNpbmdDb21wb25lbnRzIHtcbiAgICBjb25zdCB0YXJnZXREYXRlID0gZGF5anMocmVmZXJlbmNlLmluc3RhbnQpO1xuICAgIGNvbnN0IGNvbXBvbmVudCA9IG5ldyBQYXJzaW5nQ29tcG9uZW50cyhyZWZlcmVuY2UsIHt9KTtcbiAgICBhc3NpZ25TaW1pbGFyRGF0ZShjb21wb25lbnQsIHRhcmdldERhdGUpO1xuICAgIGltcGx5U2ltaWxhclRpbWUoY29tcG9uZW50LCB0YXJnZXREYXRlKTtcbiAgICBjb21wb25lbnQuYWRkVGFnKFwiY2FzdWFsUmVmZXJlbmNlL3RvZGF5XCIpO1xuICAgIHJldHVybiBjb21wb25lbnQ7XG59XG5cbi8qKlxuICogVGhlIHByZXZpb3VzIGRheS4gSW1wbHkgdGhlIHNhbWUgdGltZS5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHllc3RlcmRheShyZWZlcmVuY2U6IFJlZmVyZW5jZVdpdGhUaW1lem9uZSk6IFBhcnNpbmdDb21wb25lbnRzIHtcbiAgICByZXR1cm4gdGhlRGF5QmVmb3JlKHJlZmVyZW5jZSwgMSkuYWRkVGFnKFwiY2FzdWFsUmVmZXJlbmNlL3llc3RlcmRheVwiKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRoZURheUJlZm9yZShyZWZlcmVuY2U6IFJlZmVyZW5jZVdpdGhUaW1lem9uZSwgbnVtRGF5OiBudW1iZXIpOiBQYXJzaW5nQ29tcG9uZW50cyB7XG4gICAgcmV0dXJuIHRoZURheUFmdGVyKHJlZmVyZW5jZSwgLW51bURheSk7XG59XG5cbi8qKlxuICogVGhlIGZvbGxvd2luZyBkYXkgd2l0aCBkYXlqcy5hc3NpZ25UaGVOZXh0RGF5KClcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHRvbW9ycm93KHJlZmVyZW5jZTogUmVmZXJlbmNlV2l0aFRpbWV6b25lKTogUGFyc2luZ0NvbXBvbmVudHMge1xuICAgIHJldHVybiB0aGVEYXlBZnRlcihyZWZlcmVuY2UsIDEpLmFkZFRhZyhcImNhc3VhbFJlZmVyZW5jZS90b21vcnJvd1wiKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRoZURheUFmdGVyKHJlZmVyZW5jZTogUmVmZXJlbmNlV2l0aFRpbWV6b25lLCBuRGF5czogbnVtYmVyKTogUGFyc2luZ0NvbXBvbmVudHMge1xuICAgIGxldCB0YXJnZXREYXRlID0gZGF5anMocmVmZXJlbmNlLmluc3RhbnQpO1xuICAgIGNvbnN0IGNvbXBvbmVudCA9IG5ldyBQYXJzaW5nQ29tcG9uZW50cyhyZWZlcmVuY2UsIHt9KTtcbiAgICB0YXJnZXREYXRlID0gdGFyZ2V0RGF0ZS5hZGQobkRheXMsIFwiZGF5XCIpO1xuICAgIGFzc2lnblNpbWlsYXJEYXRlKGNvbXBvbmVudCwgdGFyZ2V0RGF0ZSk7XG4gICAgaW1wbHlTaW1pbGFyVGltZShjb21wb25lbnQsIHRhcmdldERhdGUpO1xuICAgIHJldHVybiBjb21wb25lbnQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0b25pZ2h0KHJlZmVyZW5jZTogUmVmZXJlbmNlV2l0aFRpbWV6b25lLCBpbXBseUhvdXIgPSAyMik6IFBhcnNpbmdDb21wb25lbnRzIHtcbiAgICBjb25zdCB0YXJnZXREYXRlID0gZGF5anMocmVmZXJlbmNlLmluc3RhbnQpO1xuICAgIGNvbnN0IGNvbXBvbmVudCA9IG5ldyBQYXJzaW5nQ29tcG9uZW50cyhyZWZlcmVuY2UsIHt9KTtcbiAgICBhc3NpZ25TaW1pbGFyRGF0ZShjb21wb25lbnQsIHRhcmdldERhdGUpO1xuICAgIGNvbXBvbmVudC5pbXBseShcImhvdXJcIiwgaW1wbHlIb3VyKTtcbiAgICBjb21wb25lbnQuaW1wbHkoXCJtZXJpZGllbVwiLCBNZXJpZGllbS5QTSk7XG4gICAgY29tcG9uZW50LmFkZFRhZyhcImNhc3VhbFJlZmVyZW5jZS90b25pZ2h0XCIpO1xuICAgIHJldHVybiBjb21wb25lbnQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBsYXN0TmlnaHQocmVmZXJlbmNlOiBSZWZlcmVuY2VXaXRoVGltZXpvbmUsIGltcGx5SG91ciA9IDApOiBQYXJzaW5nQ29tcG9uZW50cyB7XG4gICAgbGV0IHRhcmdldERhdGUgPSBkYXlqcyhyZWZlcmVuY2UuaW5zdGFudCk7XG4gICAgY29uc3QgY29tcG9uZW50ID0gbmV3IFBhcnNpbmdDb21wb25lbnRzKHJlZmVyZW5jZSwge30pO1xuICAgIGlmICh0YXJnZXREYXRlLmhvdXIoKSA8IDYpIHtcbiAgICAgICAgdGFyZ2V0RGF0ZSA9IHRhcmdldERhdGUuYWRkKC0xLCBcImRheVwiKTtcbiAgICB9XG4gICAgYXNzaWduU2ltaWxhckRhdGUoY29tcG9uZW50LCB0YXJnZXREYXRlKTtcbiAgICBjb21wb25lbnQuaW1wbHkoXCJob3VyXCIsIGltcGx5SG91cik7XG4gICAgcmV0dXJuIGNvbXBvbmVudDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGV2ZW5pbmcocmVmZXJlbmNlOiBSZWZlcmVuY2VXaXRoVGltZXpvbmUsIGltcGx5SG91ciA9IDIwKTogUGFyc2luZ0NvbXBvbmVudHMge1xuICAgIGNvbnN0IGNvbXBvbmVudCA9IG5ldyBQYXJzaW5nQ29tcG9uZW50cyhyZWZlcmVuY2UsIHt9KTtcbiAgICBjb21wb25lbnQuaW1wbHkoXCJtZXJpZGllbVwiLCBNZXJpZGllbS5QTSk7XG4gICAgY29tcG9uZW50LmltcGx5KFwiaG91clwiLCBpbXBseUhvdXIpO1xuICAgIGNvbXBvbmVudC5hZGRUYWcoXCJjYXN1YWxSZWZlcmVuY2UvZXZlbmluZ1wiKTtcbiAgICByZXR1cm4gY29tcG9uZW50O1xufVxuXG5leHBvcnQgZnVuY3Rpb24geWVzdGVyZGF5RXZlbmluZyhyZWZlcmVuY2U6IFJlZmVyZW5jZVdpdGhUaW1lem9uZSwgaW1wbHlIb3VyID0gMjApOiBQYXJzaW5nQ29tcG9uZW50cyB7XG4gICAgbGV0IHRhcmdldERhdGUgPSBkYXlqcyhyZWZlcmVuY2UuaW5zdGFudCk7XG4gICAgY29uc3QgY29tcG9uZW50ID0gbmV3IFBhcnNpbmdDb21wb25lbnRzKHJlZmVyZW5jZSwge30pO1xuICAgIHRhcmdldERhdGUgPSB0YXJnZXREYXRlLmFkZCgtMSwgXCJkYXlcIik7XG4gICAgYXNzaWduU2ltaWxhckRhdGUoY29tcG9uZW50LCB0YXJnZXREYXRlKTtcbiAgICBjb21wb25lbnQuaW1wbHkoXCJob3VyXCIsIGltcGx5SG91cik7XG4gICAgY29tcG9uZW50LmltcGx5KFwibWVyaWRpZW1cIiwgTWVyaWRpZW0uUE0pO1xuICAgIGNvbXBvbmVudC5hZGRUYWcoXCJjYXN1YWxSZWZlcmVuY2UveWVzdGVyZGF5XCIpO1xuICAgIGNvbXBvbmVudC5hZGRUYWcoXCJjYXN1YWxSZWZlcmVuY2UvZXZlbmluZ1wiKTtcbiAgICByZXR1cm4gY29tcG9uZW50O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbWlkbmlnaHQocmVmZXJlbmNlOiBSZWZlcmVuY2VXaXRoVGltZXpvbmUpOiBQYXJzaW5nQ29tcG9uZW50cyB7XG4gICAgY29uc3QgY29tcG9uZW50ID0gbmV3IFBhcnNpbmdDb21wb25lbnRzKHJlZmVyZW5jZSwge30pO1xuICAgIGNvbnN0IHRhcmdldERhdGUgPSBkYXlqcyhyZWZlcmVuY2UuaW5zdGFudCk7XG4gICAgaWYgKHRhcmdldERhdGUuaG91cigpID4gMikge1xuICAgICAgICAvLyBVbmxlc3MgaXQncyB2ZXJ5IGVhcmx5IG1vcm5pbmcgKDB+MkFNKSwgd2UgYXNzdW1lIHRoZSBtaWRuaWdodCBpcyB0aGUgY29taW5nIG1pZG5pZ2h0LlxuICAgICAgICAvLyBUaHVzLCBpbmNyZWFzaW5nIHRoZSBkYXkgYnkgMS5cbiAgICAgICAgaW1wbHlUaGVOZXh0RGF5KGNvbXBvbmVudCwgdGFyZ2V0RGF0ZSk7XG4gICAgfVxuICAgIGNvbXBvbmVudC5hc3NpZ24oXCJob3VyXCIsIDApO1xuICAgIGNvbXBvbmVudC5pbXBseShcIm1pbnV0ZVwiLCAwKTtcbiAgICBjb21wb25lbnQuaW1wbHkoXCJzZWNvbmRcIiwgMCk7XG4gICAgY29tcG9uZW50LmltcGx5KFwibWlsbGlzZWNvbmRcIiwgMCk7XG4gICAgY29tcG9uZW50LmFkZFRhZyhcImNhc3VhbFJlZmVyZW5jZS9taWRuaWdodFwiKTtcbiAgICByZXR1cm4gY29tcG9uZW50O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbW9ybmluZyhyZWZlcmVuY2U6IFJlZmVyZW5jZVdpdGhUaW1lem9uZSwgaW1wbHlIb3VyID0gNik6IFBhcnNpbmdDb21wb25lbnRzIHtcbiAgICBjb25zdCBjb21wb25lbnQgPSBuZXcgUGFyc2luZ0NvbXBvbmVudHMocmVmZXJlbmNlLCB7fSk7XG4gICAgY29tcG9uZW50LmltcGx5KFwibWVyaWRpZW1cIiwgTWVyaWRpZW0uQU0pO1xuICAgIGNvbXBvbmVudC5pbXBseShcImhvdXJcIiwgaW1wbHlIb3VyKTtcbiAgICBjb21wb25lbnQuaW1wbHkoXCJtaW51dGVcIiwgMCk7XG4gICAgY29tcG9uZW50LmltcGx5KFwic2Vjb25kXCIsIDApO1xuICAgIGNvbXBvbmVudC5pbXBseShcIm1pbGxpc2Vjb25kXCIsIDApO1xuICAgIGNvbXBvbmVudC5hZGRUYWcoXCJjYXN1YWxSZWZlcmVuY2UvbW9ybmluZ1wiKTtcbiAgICByZXR1cm4gY29tcG9uZW50O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYWZ0ZXJub29uKHJlZmVyZW5jZTogUmVmZXJlbmNlV2l0aFRpbWV6b25lLCBpbXBseUhvdXIgPSAxNSk6IFBhcnNpbmdDb21wb25lbnRzIHtcbiAgICBjb25zdCBjb21wb25lbnQgPSBuZXcgUGFyc2luZ0NvbXBvbmVudHMocmVmZXJlbmNlLCB7fSk7XG4gICAgY29tcG9uZW50LmltcGx5KFwibWVyaWRpZW1cIiwgTWVyaWRpZW0uUE0pO1xuICAgIGNvbXBvbmVudC5pbXBseShcImhvdXJcIiwgaW1wbHlIb3VyKTtcbiAgICBjb21wb25lbnQuaW1wbHkoXCJtaW51dGVcIiwgMCk7XG4gICAgY29tcG9uZW50LmltcGx5KFwic2Vjb25kXCIsIDApO1xuICAgIGNvbXBvbmVudC5pbXBseShcIm1pbGxpc2Vjb25kXCIsIDApO1xuICAgIGNvbXBvbmVudC5hZGRUYWcoXCJjYXN1YWxSZWZlcmVuY2UvYWZ0ZXJub29uXCIpO1xuICAgIHJldHVybiBjb21wb25lbnQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBub29uKHJlZmVyZW5jZTogUmVmZXJlbmNlV2l0aFRpbWV6b25lKTogUGFyc2luZ0NvbXBvbmVudHMge1xuICAgIGNvbnN0IGNvbXBvbmVudCA9IG5ldyBQYXJzaW5nQ29tcG9uZW50cyhyZWZlcmVuY2UsIHt9KTtcbiAgICBjb21wb25lbnQuaW1wbHkoXCJtZXJpZGllbVwiLCBNZXJpZGllbS5BTSk7XG4gICAgY29tcG9uZW50LmltcGx5KFwiaG91clwiLCAxMik7XG4gICAgY29tcG9uZW50LmltcGx5KFwibWludXRlXCIsIDApO1xuICAgIGNvbXBvbmVudC5pbXBseShcInNlY29uZFwiLCAwKTtcbiAgICBjb21wb25lbnQuaW1wbHkoXCJtaWxsaXNlY29uZFwiLCAwKTtcbiAgICBjb21wb25lbnQuYWRkVGFnKFwiY2FzdWFsUmVmZXJlbmNlL25vb25cIik7XG4gICAgcmV0dXJuIGNvbXBvbmVudDtcbn1cbiIsICJpbXBvcnQgeyBQYXJzaW5nQ29udGV4dCB9IGZyb20gXCIuLi8uLi8uLi9jaHJvbm9cIjtcbmltcG9ydCB7IEFic3RyYWN0UGFyc2VyV2l0aFdvcmRCb3VuZGFyeUNoZWNraW5nIH0gZnJvbSBcIi4uLy4uLy4uL2NvbW1vbi9wYXJzZXJzL0Fic3RyYWN0UGFyc2VyV2l0aFdvcmRCb3VuZGFyeVwiO1xuaW1wb3J0ICogYXMgY2FzdWFsUmVmZXJlbmNlcyBmcm9tIFwiLi4vLi4vLi4vY29tbW9uL2Nhc3VhbFJlZmVyZW5jZXNcIjtcblxuY29uc3QgUEFUVEVSTiA9IC8oPzp0aGlzKT9cXHN7MCwzfShtb3JuaW5nfGFmdGVybm9vbnxldmVuaW5nfG5pZ2h0fG1pZG5pZ2h0fG1pZGRheXxub29uKSg/PVxcV3wkKS9pO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBFTkNhc3VhbFRpbWVQYXJzZXIgZXh0ZW5kcyBBYnN0cmFjdFBhcnNlcldpdGhXb3JkQm91bmRhcnlDaGVja2luZyB7XG4gICAgaW5uZXJQYXR0ZXJuKCkge1xuICAgICAgICByZXR1cm4gUEFUVEVSTjtcbiAgICB9XG4gICAgaW5uZXJFeHRyYWN0KGNvbnRleHQ6IFBhcnNpbmdDb250ZXh0LCBtYXRjaDogUmVnRXhwTWF0Y2hBcnJheSkge1xuICAgICAgICBsZXQgY29tcG9uZW50ID0gbnVsbDtcbiAgICAgICAgc3dpdGNoIChtYXRjaFsxXS50b0xvd2VyQ2FzZSgpKSB7XG4gICAgICAgICAgICBjYXNlIFwiYWZ0ZXJub29uXCI6XG4gICAgICAgICAgICAgICAgY29tcG9uZW50ID0gY2FzdWFsUmVmZXJlbmNlcy5hZnRlcm5vb24oY29udGV4dC5yZWZlcmVuY2UpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcImV2ZW5pbmdcIjpcbiAgICAgICAgICAgIGNhc2UgXCJuaWdodFwiOlxuICAgICAgICAgICAgICAgIGNvbXBvbmVudCA9IGNhc3VhbFJlZmVyZW5jZXMuZXZlbmluZyhjb250ZXh0LnJlZmVyZW5jZSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwibWlkbmlnaHRcIjpcbiAgICAgICAgICAgICAgICBjb21wb25lbnQgPSBjYXN1YWxSZWZlcmVuY2VzLm1pZG5pZ2h0KGNvbnRleHQucmVmZXJlbmNlKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCJtb3JuaW5nXCI6XG4gICAgICAgICAgICAgICAgY29tcG9uZW50ID0gY2FzdWFsUmVmZXJlbmNlcy5tb3JuaW5nKGNvbnRleHQucmVmZXJlbmNlKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCJub29uXCI6XG4gICAgICAgICAgICBjYXNlIFwibWlkZGF5XCI6XG4gICAgICAgICAgICAgICAgY29tcG9uZW50ID0gY2FzdWFsUmVmZXJlbmNlcy5ub29uKGNvbnRleHQucmVmZXJlbmNlKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgICBpZiAoY29tcG9uZW50KSB7XG4gICAgICAgICAgICBjb21wb25lbnQuYWRkVGFnKFwicGFyc2VyL0VOQ2FzdWFsVGltZVBhcnNlclwiKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gY29tcG9uZW50O1xuICAgIH1cbn1cbiIsICJpbXBvcnQgeyBXZWVrZGF5IH0gZnJvbSBcIi4uLy4uL3R5cGVzXCI7XG5pbXBvcnQgeyBQYXJzaW5nQ29tcG9uZW50cywgUmVmZXJlbmNlV2l0aFRpbWV6b25lIH0gZnJvbSBcIi4uLy4uL3Jlc3VsdHNcIjtcbmltcG9ydCB7IGFkZEltcGxpZWRUaW1lVW5pdHMgfSBmcm9tIFwiLi4vLi4vdXRpbHMvdGltZXVuaXRzXCI7XG5cbi8qKlxuICogUmV0dXJucyB0aGUgcGFyc2luZyBjb21wb25lbnRzIGF0IHRoZSB3ZWVrZGF5IChjb25zaWRlcmluZyB0aGUgbW9kaWZpZXIpLiBUaGUgdGltZSBhbmQgdGltZXpvbmUgaXMgYXNzdW1lIHRvIGJlXG4gKiBzaW1pbGFyIHRvIHRoZSByZWZlcmVuY2UuXG4gKiBAcGFyYW0gcmVmZXJlbmNlXG4gKiBAcGFyYW0gd2Vla2RheVxuICogQHBhcmFtIG1vZGlmaWVyIFwidGhpc1wiLCBcIm5leHRcIiwgXCJsYXN0XCIgbW9kaWZpZXIgd29yZC4gSWYgZW1wdHksIHJldHVybnMgdGhlIHdlZWtkYXkgY2xvc2VzdCB0byB0aGUgYHJlZkRhdGVgLlxuICovXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlUGFyc2luZ0NvbXBvbmVudHNBdFdlZWtkYXkoXG4gICAgcmVmZXJlbmNlOiBSZWZlcmVuY2VXaXRoVGltZXpvbmUsXG4gICAgd2Vla2RheTogV2Vla2RheSxcbiAgICBtb2RpZmllcj86IFwidGhpc1wiIHwgXCJuZXh0XCIgfCBcImxhc3RcIlxuKTogUGFyc2luZ0NvbXBvbmVudHMge1xuICAgIGNvbnN0IHJlZkRhdGUgPSByZWZlcmVuY2UuZ2V0RGF0ZVdpdGhBZGp1c3RlZFRpbWV6b25lKCk7XG4gICAgY29uc3QgZGF5c1RvV2Vla2RheSA9IGdldERheXNUb1dlZWtkYXkocmVmRGF0ZSwgd2Vla2RheSwgbW9kaWZpZXIpO1xuXG4gICAgbGV0IGNvbXBvbmVudHMgPSBuZXcgUGFyc2luZ0NvbXBvbmVudHMocmVmZXJlbmNlKTtcbiAgICBjb21wb25lbnRzID0gYWRkSW1wbGllZFRpbWVVbml0cyhjb21wb25lbnRzLCB7IFwiZGF5XCI6IGRheXNUb1dlZWtkYXkgfSk7XG4gICAgY29tcG9uZW50cy5hc3NpZ24oXCJ3ZWVrZGF5XCIsIHdlZWtkYXkpO1xuXG4gICAgcmV0dXJuIGNvbXBvbmVudHM7XG59XG5cbi8qKlxuICogUmV0dXJucyBudW1iZXIgb2YgZGF5cyBmcm9tIHJlZkRhdGUgdG8gdGhlIHdlZWtkYXkuIFRoZSByZWZEYXRlIGRhdGUgYW5kIHRpbWV6b25lIGluZm9ybWF0aW9uIGlzIHVzZWQuXG4gKiBAcGFyYW0gcmVmRGF0ZVxuICogQHBhcmFtIHdlZWtkYXlcbiAqIEBwYXJhbSBtb2RpZmllciBcInRoaXNcIiwgXCJuZXh0XCIsIFwibGFzdFwiIG1vZGlmaWVyIHdvcmQuIElmIGVtcHR5LCByZXR1cm5zIHRoZSB3ZWVrZGF5IGNsb3Nlc3QgdG8gdGhlIGByZWZEYXRlYC5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdldERheXNUb1dlZWtkYXkocmVmRGF0ZTogRGF0ZSwgd2Vla2RheTogV2Vla2RheSwgbW9kaWZpZXI/OiBcInRoaXNcIiB8IFwibmV4dFwiIHwgXCJsYXN0XCIpOiBudW1iZXIge1xuICAgIGNvbnN0IHJlZldlZWtkYXkgPSByZWZEYXRlLmdldERheSgpIGFzIFdlZWtkYXk7XG4gICAgc3dpdGNoIChtb2RpZmllcikge1xuICAgICAgICBjYXNlIFwidGhpc1wiOlxuICAgICAgICAgICAgcmV0dXJuIGdldERheXNGb3J3YXJkVG9XZWVrZGF5KHJlZkRhdGUsIHdlZWtkYXkpO1xuICAgICAgICBjYXNlIFwibGFzdFwiOlxuICAgICAgICAgICAgcmV0dXJuIGdldEJhY2t3YXJkRGF5c1RvV2Vla2RheShyZWZEYXRlLCB3ZWVrZGF5KTtcbiAgICAgICAgY2FzZSBcIm5leHRcIjpcbiAgICAgICAgICAgIC8vIEZyb20gU3VuZGF5LCB0aGUgbmV4dCBTdW5kYXkgaXMgNyBkYXlzIGxhdGVyLlxuICAgICAgICAgICAgLy8gT3RoZXJ3aXNlLCBuZXh0IE1vbiBpcyAxIGRheXMgbGF0ZXIsIG5leHQgVHVlcyBpcyAyIGRheXMgbGF0ZXIsIGFuZCBzbyBvbi4uLiwgKHJldHVybiBlbnVtIHZhbHVlKVxuICAgICAgICAgICAgaWYgKHJlZldlZWtkYXkgPT0gV2Vla2RheS5TVU5EQVkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gd2Vla2RheSA9PSBXZWVrZGF5LlNVTkRBWSA/IDcgOiB3ZWVrZGF5O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gRnJvbSBTYXR1cmRheSwgdGhlIG5leHQgU2F0dXJkYXkgaXMgNyBkYXlzIGxhdGVyLCB0aGUgbmV4dCBTdW5kYXkgaXMgOC1kYXlzIGxhdGVyLlxuICAgICAgICAgICAgLy8gT3RoZXJ3aXNlLCBuZXh0IE1vbiBpcyAoMSArIDEpIGRheXMgbGF0ZXIsIG5leHQgVHVlcyBpcyAoMSArIDIpIGRheXMgbGF0ZXIsIGFuZCBzbyBvbi4uLixcbiAgICAgICAgICAgIC8vIChyZXR1cm4sIDIgKyBbZW51bSB2YWx1ZV0gZGF5cylcbiAgICAgICAgICAgIGlmIChyZWZXZWVrZGF5ID09IFdlZWtkYXkuU0FUVVJEQVkpIHtcbiAgICAgICAgICAgICAgICBpZiAod2Vla2RheSA9PSBXZWVrZGF5LlNBVFVSREFZKSByZXR1cm4gNztcbiAgICAgICAgICAgICAgICBpZiAod2Vla2RheSA9PSBXZWVrZGF5LlNVTkRBWSkgcmV0dXJuIDg7XG4gICAgICAgICAgICAgICAgcmV0dXJuIDEgKyB3ZWVrZGF5O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gRnJvbSB3ZWVrZGF5cywgbmV4dCBNb24gaXMgdGhlIGZvbGxvd2luZyB3ZWVrJ3MgTW9uLCBuZXh0IFR1ZXMgdGhlIGZvbGxvd2luZyB3ZWVrJ3MgVHVlcywgYW5kIHNvIG9uLi4uXG4gICAgICAgICAgICAvLyBJZiB0aGUgd2VlaydzIHdlZWtkYXkgYWxyZWFkeSBwYXNzZWQgKHdlZWtkYXkgPCByZWZXZWVrZGF5KSwgd2Ugc2ltcGx5IGNvdW50IGZvcndhcmQgdG8gbmV4dCB3ZWVrXG4gICAgICAgICAgICAvLyAoc2ltaWxhciB0byAndGhpcycpLiBPdGhlcndpc2UsIGNvdW50IGZvcndhcmQgdG8gdGhpcyB3ZWVrLCB0aGVuIGFkZCBhbm90aGVyIDcgZGF5cy5cbiAgICAgICAgICAgIGlmICh3ZWVrZGF5IDwgcmVmV2Vla2RheSAmJiB3ZWVrZGF5ICE9IFdlZWtkYXkuU1VOREFZKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGdldERheXNGb3J3YXJkVG9XZWVrZGF5KHJlZkRhdGUsIHdlZWtkYXkpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZ2V0RGF5c0ZvcndhcmRUb1dlZWtkYXkocmVmRGF0ZSwgd2Vla2RheSkgKyA3O1xuICAgICAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gZ2V0RGF5c1RvV2Vla2RheUNsb3Nlc3QocmVmRGF0ZSwgd2Vla2RheSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXREYXlzVG9XZWVrZGF5Q2xvc2VzdChyZWZEYXRlOiBEYXRlLCB3ZWVrZGF5OiBXZWVrZGF5KTogbnVtYmVyIHtcbiAgICBjb25zdCBiYWNrd2FyZCA9IGdldEJhY2t3YXJkRGF5c1RvV2Vla2RheShyZWZEYXRlLCB3ZWVrZGF5KTtcbiAgICBjb25zdCBmb3J3YXJkID0gZ2V0RGF5c0ZvcndhcmRUb1dlZWtkYXkocmVmRGF0ZSwgd2Vla2RheSk7XG5cbiAgICByZXR1cm4gZm9yd2FyZCA8IC1iYWNrd2FyZCA/IGZvcndhcmQgOiBiYWNrd2FyZDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldERheXNGb3J3YXJkVG9XZWVrZGF5KHJlZkRhdGU6IERhdGUsIHdlZWtkYXk6IFdlZWtkYXkpOiBudW1iZXIge1xuICAgIGNvbnN0IHJlZldlZWtkYXkgPSByZWZEYXRlLmdldERheSgpO1xuICAgIGxldCBmb3J3YXJkQ291bnQgPSB3ZWVrZGF5IC0gcmVmV2Vla2RheTtcbiAgICBpZiAoZm9yd2FyZENvdW50IDwgMCkge1xuICAgICAgICBmb3J3YXJkQ291bnQgKz0gNztcbiAgICB9XG4gICAgcmV0dXJuIGZvcndhcmRDb3VudDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldEJhY2t3YXJkRGF5c1RvV2Vla2RheShyZWZEYXRlOiBEYXRlLCB3ZWVrZGF5OiBXZWVrZGF5KTogbnVtYmVyIHtcbiAgICBjb25zdCByZWZXZWVrZGF5ID0gcmVmRGF0ZS5nZXREYXkoKTtcbiAgICBsZXQgYmFja3dhcmRDb3VudCA9IHdlZWtkYXkgLSByZWZXZWVrZGF5O1xuICAgIGlmIChiYWNrd2FyZENvdW50ID49IDApIHtcbiAgICAgICAgYmFja3dhcmRDb3VudCAtPSA3O1xuICAgIH1cbiAgICByZXR1cm4gYmFja3dhcmRDb3VudDtcbn1cbiIsICJpbXBvcnQgeyBQYXJzaW5nQ29udGV4dCB9IGZyb20gXCIuLi8uLi8uLi9jaHJvbm9cIjtcbmltcG9ydCB7IFBhcnNpbmdDb21wb25lbnRzIH0gZnJvbSBcIi4uLy4uLy4uL3Jlc3VsdHNcIjtcbmltcG9ydCB7IFdFRUtEQVlfRElDVElPTkFSWSB9IGZyb20gXCIuLi9jb25zdGFudHNcIjtcbmltcG9ydCB7IG1hdGNoQW55UGF0dGVybiB9IGZyb20gXCIuLi8uLi8uLi91dGlscy9wYXR0ZXJuXCI7XG5pbXBvcnQgeyBBYnN0cmFjdFBhcnNlcldpdGhXb3JkQm91bmRhcnlDaGVja2luZyB9IGZyb20gXCIuLi8uLi8uLi9jb21tb24vcGFyc2Vycy9BYnN0cmFjdFBhcnNlcldpdGhXb3JkQm91bmRhcnlcIjtcbmltcG9ydCB7IGNyZWF0ZVBhcnNpbmdDb21wb25lbnRzQXRXZWVrZGF5IH0gZnJvbSBcIi4uLy4uLy4uL2NvbW1vbi9jYWxjdWxhdGlvbi93ZWVrZGF5c1wiO1xuaW1wb3J0IHsgV2Vla2RheSB9IGZyb20gXCIuLi8uLi8uLi90eXBlc1wiO1xuXG5jb25zdCBQQVRURVJOID0gbmV3IFJlZ0V4cChcbiAgICBcIig/Oig/OlxcXFwsfFxcXFwofFxcXFxcdUZGMDgpXFxcXHMqKT9cIiArXG4gICAgICAgIFwiKD86b25cXFxccyo/KT9cIiArXG4gICAgICAgIFwiKD86KHRoaXN8bGFzdHxwYXN0fG5leHQpXFxcXHMqKT9cIiArXG4gICAgICAgIGAoJHttYXRjaEFueVBhdHRlcm4oV0VFS0RBWV9ESUNUSU9OQVJZKX18d2Vla2VuZHx3ZWVrZGF5KWAgK1xuICAgICAgICBcIig/OlxcXFxzKig/OlxcXFwsfFxcXFwpfFxcXFxcdUZGMDkpKT9cIiArXG4gICAgICAgIFwiKD86XFxcXHMqKHRoaXN8bGFzdHxwYXN0fG5leHQpXFxcXHMqd2Vlayk/XCIgK1xuICAgICAgICBcIig/PVxcXFxXfCQpXCIsXG4gICAgXCJpXCJcbik7XG5cbmNvbnN0IFBSRUZJWF9HUk9VUCA9IDE7XG5jb25zdCBXRUVLREFZX0dST1VQID0gMjtcbmNvbnN0IFBPU1RGSVhfR1JPVVAgPSAzO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBFTldlZWtkYXlQYXJzZXIgZXh0ZW5kcyBBYnN0cmFjdFBhcnNlcldpdGhXb3JkQm91bmRhcnlDaGVja2luZyB7XG4gICAgaW5uZXJQYXR0ZXJuKCk6IFJlZ0V4cCB7XG4gICAgICAgIHJldHVybiBQQVRURVJOO1xuICAgIH1cblxuICAgIGlubmVyRXh0cmFjdChjb250ZXh0OiBQYXJzaW5nQ29udGV4dCwgbWF0Y2g6IFJlZ0V4cE1hdGNoQXJyYXkpOiBQYXJzaW5nQ29tcG9uZW50cyB8IG51bGwge1xuICAgICAgICBjb25zdCBwcmVmaXggPSBtYXRjaFtQUkVGSVhfR1JPVVBdO1xuICAgICAgICBjb25zdCBwb3N0Zml4ID0gbWF0Y2hbUE9TVEZJWF9HUk9VUF07XG4gICAgICAgIGxldCBtb2RpZmllcldvcmQgPSBwcmVmaXggfHwgcG9zdGZpeDtcbiAgICAgICAgbW9kaWZpZXJXb3JkID0gbW9kaWZpZXJXb3JkIHx8IFwiXCI7XG4gICAgICAgIG1vZGlmaWVyV29yZCA9IG1vZGlmaWVyV29yZC50b0xvd2VyQ2FzZSgpO1xuXG4gICAgICAgIGxldCBtb2RpZmllciA9IG51bGw7XG4gICAgICAgIGlmIChtb2RpZmllcldvcmQgPT0gXCJsYXN0XCIgfHwgbW9kaWZpZXJXb3JkID09IFwicGFzdFwiKSB7XG4gICAgICAgICAgICBtb2RpZmllciA9IFwibGFzdFwiO1xuICAgICAgICB9IGVsc2UgaWYgKG1vZGlmaWVyV29yZCA9PSBcIm5leHRcIikge1xuICAgICAgICAgICAgbW9kaWZpZXIgPSBcIm5leHRcIjtcbiAgICAgICAgfSBlbHNlIGlmIChtb2RpZmllcldvcmQgPT0gXCJ0aGlzXCIpIHtcbiAgICAgICAgICAgIG1vZGlmaWVyID0gXCJ0aGlzXCI7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCB3ZWVrZGF5X3dvcmQgPSBtYXRjaFtXRUVLREFZX0dST1VQXS50b0xvd2VyQ2FzZSgpO1xuICAgICAgICBsZXQgd2Vla2RheTtcbiAgICAgICAgaWYgKFdFRUtEQVlfRElDVElPTkFSWVt3ZWVrZGF5X3dvcmRdICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHdlZWtkYXkgPSBXRUVLREFZX0RJQ1RJT05BUllbd2Vla2RheV93b3JkXTtcbiAgICAgICAgfSBlbHNlIGlmICh3ZWVrZGF5X3dvcmQgPT0gXCJ3ZWVrZW5kXCIpIHtcbiAgICAgICAgICAgIC8vIFRoaXMgZGVwZW5kcyBvbiB3aGF0IGRheXMgYXJlIHdlZWtlbmQgc2V0dGluZywgYnV0IHR5cGljYWxseTpcbiAgICAgICAgICAgIC8vICdUaGlzL25leHQgd2Vla2VuZCcgbWVhbnMgdGhlIGNvbWluZyBTYXR1cmRheSwgJ2xhc3Qgd2Vla2VuZCcgbWVhbnMgbGFzdCBTdW5kYXkuXG4gICAgICAgICAgICB3ZWVrZGF5ID0gbW9kaWZpZXIgPT0gXCJsYXN0XCIgPyBXZWVrZGF5LlNVTkRBWSA6IFdlZWtkYXkuU0FUVVJEQVk7XG4gICAgICAgIH0gZWxzZSBpZiAod2Vla2RheV93b3JkID09IFwid2Vla2RheVwiKSB7XG4gICAgICAgICAgICAvLyBJbiBFbmdsaXNoLCB0aGUgXCJ3ZWVrZGF5XCIgbWVhbnMgYW55IGRheSBvZiB0aGUgd2VlayBleGNlcHQgd2Vla2VuZC5cbiAgICAgICAgICAgIC8vIFRoaXMgYWxzbyBkZXBlbmRzIG9uIHdoYXQgZGF5cyBhcmUgd2Vla2VuZCBzZXR0aW5nLCBidXQgdHlwaWNhbGx5OlxuICAgICAgICAgICAgLy8gLSBPbiB3ZWVrZW5kIHJlZiwgdGhpcyBtZWFucyB0aGUgY29taW5nIE1vbmRheSBvciBsYXN0IEZyaWRheS5cbiAgICAgICAgICAgIC8vIC0gT24gd2Vla2RheSByZWYsIHRoaXMgbWVhbnMgdGhlIG5leHQvbGFzdCB3b3JraW5nIGRheS5cbiAgICAgICAgICAgIGNvbnN0IHJlZldlZWtkYXkgPSBjb250ZXh0LnJlZmVyZW5jZS5nZXREYXRlV2l0aEFkanVzdGVkVGltZXpvbmUoKS5nZXREYXkoKTtcbiAgICAgICAgICAgIGlmIChyZWZXZWVrZGF5ID09IFdlZWtkYXkuU1VOREFZIHx8IHJlZldlZWtkYXkgPT0gV2Vla2RheS5TQVRVUkRBWSkge1xuICAgICAgICAgICAgICAgIHdlZWtkYXkgPSBtb2RpZmllciA9PSBcImxhc3RcIiA/IFdlZWtkYXkuRlJJREFZIDogV2Vla2RheS5NT05EQVk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHdlZWtkYXkgPSByZWZXZWVrZGF5IC0gMTtcbiAgICAgICAgICAgICAgICB3ZWVrZGF5ID0gbW9kaWZpZXIgPT0gXCJsYXN0XCIgPyB3ZWVrZGF5IC0gMSA6IHdlZWtkYXkgKyAxO1xuICAgICAgICAgICAgICAgIHdlZWtkYXkgPSAod2Vla2RheSAlIDUpICsgMTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGNyZWF0ZVBhcnNpbmdDb21wb25lbnRzQXRXZWVrZGF5KGNvbnRleHQucmVmZXJlbmNlLCB3ZWVrZGF5LCBtb2RpZmllcik7XG4gICAgfVxufVxuIiwgImltcG9ydCB7IFRJTUVfVU5JVF9ESUNUSU9OQVJZIH0gZnJvbSBcIi4uL2NvbnN0YW50c1wiO1xuaW1wb3J0IHsgUGFyc2luZ0NvbnRleHQgfSBmcm9tIFwiLi4vLi4vLi4vY2hyb25vXCI7XG5pbXBvcnQgeyBQYXJzaW5nQ29tcG9uZW50cyB9IGZyb20gXCIuLi8uLi8uLi9yZXN1bHRzXCI7XG5pbXBvcnQgZGF5anMgZnJvbSBcImRheWpzXCI7XG5pbXBvcnQgeyBBYnN0cmFjdFBhcnNlcldpdGhXb3JkQm91bmRhcnlDaGVja2luZyB9IGZyb20gXCIuLi8uLi8uLi9jb21tb24vcGFyc2Vycy9BYnN0cmFjdFBhcnNlcldpdGhXb3JkQm91bmRhcnlcIjtcbmltcG9ydCB7IG1hdGNoQW55UGF0dGVybiB9IGZyb20gXCIuLi8uLi8uLi91dGlscy9wYXR0ZXJuXCI7XG5cbmNvbnN0IFBBVFRFUk4gPSBuZXcgUmVnRXhwKFxuICAgIGAodGhpc3xsYXN0fHBhc3R8bmV4dHxhZnRlclxcXFxzKnRoaXMpXFxcXHMqKCR7bWF0Y2hBbnlQYXR0ZXJuKFRJTUVfVU5JVF9ESUNUSU9OQVJZKX0pKD89XFxcXHMqKWAgKyBcIig/PVxcXFxXfCQpXCIsXG4gICAgXCJpXCJcbik7XG5cbmNvbnN0IE1PRElGSUVSX1dPUkRfR1JPVVAgPSAxO1xuY29uc3QgUkVMQVRJVkVfV09SRF9HUk9VUCA9IDI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEVOUmVsYXRpdmVEYXRlRm9ybWF0UGFyc2VyIGV4dGVuZHMgQWJzdHJhY3RQYXJzZXJXaXRoV29yZEJvdW5kYXJ5Q2hlY2tpbmcge1xuICAgIGlubmVyUGF0dGVybigpOiBSZWdFeHAge1xuICAgICAgICByZXR1cm4gUEFUVEVSTjtcbiAgICB9XG5cbiAgICBpbm5lckV4dHJhY3QoY29udGV4dDogUGFyc2luZ0NvbnRleHQsIG1hdGNoOiBSZWdFeHBNYXRjaEFycmF5KTogUGFyc2luZ0NvbXBvbmVudHMge1xuICAgICAgICBjb25zdCBtb2RpZmllciA9IG1hdGNoW01PRElGSUVSX1dPUkRfR1JPVVBdLnRvTG93ZXJDYXNlKCk7XG4gICAgICAgIGNvbnN0IHVuaXRXb3JkID0gbWF0Y2hbUkVMQVRJVkVfV09SRF9HUk9VUF0udG9Mb3dlckNhc2UoKTtcbiAgICAgICAgY29uc3QgdGltZXVuaXQgPSBUSU1FX1VOSVRfRElDVElPTkFSWVt1bml0V29yZF07XG5cbiAgICAgICAgaWYgKG1vZGlmaWVyID09IFwibmV4dFwiIHx8IG1vZGlmaWVyLnN0YXJ0c1dpdGgoXCJhZnRlclwiKSkge1xuICAgICAgICAgICAgY29uc3QgdGltZVVuaXRzID0ge307XG4gICAgICAgICAgICB0aW1lVW5pdHNbdGltZXVuaXRdID0gMTtcbiAgICAgICAgICAgIHJldHVybiBQYXJzaW5nQ29tcG9uZW50cy5jcmVhdGVSZWxhdGl2ZUZyb21SZWZlcmVuY2UoY29udGV4dC5yZWZlcmVuY2UsIHRpbWVVbml0cyk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAobW9kaWZpZXIgPT0gXCJsYXN0XCIgfHwgbW9kaWZpZXIgPT0gXCJwYXN0XCIpIHtcbiAgICAgICAgICAgIGNvbnN0IHRpbWVVbml0cyA9IHt9O1xuICAgICAgICAgICAgdGltZVVuaXRzW3RpbWV1bml0XSA9IC0xO1xuICAgICAgICAgICAgcmV0dXJuIFBhcnNpbmdDb21wb25lbnRzLmNyZWF0ZVJlbGF0aXZlRnJvbVJlZmVyZW5jZShjb250ZXh0LnJlZmVyZW5jZSwgdGltZVVuaXRzKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGNvbXBvbmVudHMgPSBjb250ZXh0LmNyZWF0ZVBhcnNpbmdDb21wb25lbnRzKCk7XG4gICAgICAgIGxldCBkYXRlID0gZGF5anMoY29udGV4dC5yZWZlcmVuY2UuaW5zdGFudCk7XG5cbiAgICAgICAgLy8gVGhpcyB3ZWVrXG4gICAgICAgIGlmICh1bml0V29yZC5tYXRjaCgvd2Vlay9pKSkge1xuICAgICAgICAgICAgZGF0ZSA9IGRhdGUuYWRkKC1kYXRlLmdldChcImRcIiksIFwiZFwiKTtcbiAgICAgICAgICAgIGNvbXBvbmVudHMuaW1wbHkoXCJkYXlcIiwgZGF0ZS5kYXRlKCkpO1xuICAgICAgICAgICAgY29tcG9uZW50cy5pbXBseShcIm1vbnRoXCIsIGRhdGUubW9udGgoKSArIDEpO1xuICAgICAgICAgICAgY29tcG9uZW50cy5pbXBseShcInllYXJcIiwgZGF0ZS55ZWFyKCkpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gVGhpcyBtb250aFxuICAgICAgICBlbHNlIGlmICh1bml0V29yZC5tYXRjaCgvbW9udGgvaSkpIHtcbiAgICAgICAgICAgIGRhdGUgPSBkYXRlLmFkZCgtZGF0ZS5kYXRlKCkgKyAxLCBcImRcIik7XG4gICAgICAgICAgICBjb21wb25lbnRzLmltcGx5KFwiZGF5XCIsIGRhdGUuZGF0ZSgpKTtcbiAgICAgICAgICAgIGNvbXBvbmVudHMuYXNzaWduKFwieWVhclwiLCBkYXRlLnllYXIoKSk7XG4gICAgICAgICAgICBjb21wb25lbnRzLmFzc2lnbihcIm1vbnRoXCIsIGRhdGUubW9udGgoKSArIDEpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gVGhpcyB5ZWFyXG4gICAgICAgIGVsc2UgaWYgKHVuaXRXb3JkLm1hdGNoKC95ZWFyL2kpKSB7XG4gICAgICAgICAgICBkYXRlID0gZGF0ZS5hZGQoLWRhdGUuZGF0ZSgpICsgMSwgXCJkXCIpO1xuICAgICAgICAgICAgZGF0ZSA9IGRhdGUuYWRkKC1kYXRlLm1vbnRoKCksIFwibW9udGhcIik7XG5cbiAgICAgICAgICAgIGNvbXBvbmVudHMuaW1wbHkoXCJkYXlcIiwgZGF0ZS5kYXRlKCkpO1xuICAgICAgICAgICAgY29tcG9uZW50cy5pbXBseShcIm1vbnRoXCIsIGRhdGUubW9udGgoKSArIDEpO1xuICAgICAgICAgICAgY29tcG9uZW50cy5hc3NpZ24oXCJ5ZWFyXCIsIGRhdGUueWVhcigpKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBjb21wb25lbnRzO1xuICAgIH1cbn1cbiIsICJpbXBvcnQgeyBQYXJzZXIsIFBhcnNpbmdDb250ZXh0IH0gZnJvbSBcIi4uLy4uL2Nocm9ub1wiO1xuaW1wb3J0IHsgUGFyc2luZ1Jlc3VsdCB9IGZyb20gXCIuLi8uLi9yZXN1bHRzXCI7XG5pbXBvcnQgeyBmaW5kTW9zdExpa2VseUFEWWVhciwgZmluZFllYXJDbG9zZXN0VG9SZWYgfSBmcm9tIFwiLi4vLi4vY2FsY3VsYXRpb24veWVhcnNcIjtcblxuLyoqXG4gKiBEYXRlIGZvcm1hdCB3aXRoIHNsYXNoIFwiL1wiIChvciBkb3QgXCIuXCIpIGJldHdlZW4gbnVtYmVycy5cbiAqIEZvciBleGFtcGxlczpcbiAqIC0gNy8xMFxuICogLSA3LzEyLzIwMjBcbiAqIC0gNy4xMi4yMDIwXG4gKi9cbmNvbnN0IFBBVFRFUk4gPSBuZXcgUmVnRXhwKFxuICAgIFwiKFteXFxcXGRdfF4pXCIgK1xuICAgICAgICBcIihbMC0zXXswLDF9WzAtOV17MX0pW1xcXFwvXFxcXC5cXFxcLV0oWzAtM117MCwxfVswLTldezF9KVwiICtcbiAgICAgICAgXCIoPzpbXFxcXC9cXFxcLlxcXFwtXShbMC05XXs0fXxbMC05XXsyfSkpP1wiICtcbiAgICAgICAgXCIoXFxcXFd8JClcIixcbiAgICBcImlcIlxuKTtcblxuY29uc3QgT1BFTklOR19HUk9VUCA9IDE7XG5jb25zdCBFTkRJTkdfR1JPVVAgPSA1O1xuXG5jb25zdCBGSVJTVF9OVU1CRVJTX0dST1VQID0gMjtcbmNvbnN0IFNFQ09ORF9OVU1CRVJTX0dST1VQID0gMztcblxuY29uc3QgWUVBUl9HUk9VUCA9IDQ7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNsYXNoRGF0ZUZvcm1hdFBhcnNlciBpbXBsZW1lbnRzIFBhcnNlciB7XG4gICAgZ3JvdXBOdW1iZXJNb250aDogbnVtYmVyO1xuICAgIGdyb3VwTnVtYmVyRGF5OiBudW1iZXI7XG5cbiAgICBjb25zdHJ1Y3RvcihsaXR0bGVFbmRpYW46IGJvb2xlYW4pIHtcbiAgICAgICAgdGhpcy5ncm91cE51bWJlck1vbnRoID0gbGl0dGxlRW5kaWFuID8gU0VDT05EX05VTUJFUlNfR1JPVVAgOiBGSVJTVF9OVU1CRVJTX0dST1VQO1xuICAgICAgICB0aGlzLmdyb3VwTnVtYmVyRGF5ID0gbGl0dGxlRW5kaWFuID8gRklSU1RfTlVNQkVSU19HUk9VUCA6IFNFQ09ORF9OVU1CRVJTX0dST1VQO1xuICAgIH1cblxuICAgIHBhdHRlcm4oKTogUmVnRXhwIHtcbiAgICAgICAgcmV0dXJuIFBBVFRFUk47XG4gICAgfVxuXG4gICAgZXh0cmFjdChjb250ZXh0OiBQYXJzaW5nQ29udGV4dCwgbWF0Y2g6IFJlZ0V4cE1hdGNoQXJyYXkpOiBQYXJzaW5nUmVzdWx0IHtcbiAgICAgICAgLy8gQmVjYXVzZSBvZiBob3cgcGF0dGVybiBpcyBleGVjdXRlZCBvbiByZW1haW5pbmcgdGV4dCBpbiBgY2hyb25vLnRzYCwgdGhlIGNoYXJhY3RlciBiZWZvcmUgdGhlIG1hdGNoIGNvdWxkXG4gICAgICAgIC8vIHN0aWxsIGJlIGEgbnVtYmVyIChlLmcuIFhbWC9ZWS9aWl0gb3IgWFhbL1lZL1paXSBvciBbWFgvWVkvXVpaKS4gV2Ugd2FudCB0byBjaGVjayBhbmQgc2tpcCB0aGVtLlxuICAgICAgICBjb25zdCBpbmRleCA9IG1hdGNoLmluZGV4ICsgbWF0Y2hbT1BFTklOR19HUk9VUF0ubGVuZ3RoO1xuICAgICAgICBjb25zdCBpbmRleEVuZCA9IG1hdGNoLmluZGV4ICsgbWF0Y2hbMF0ubGVuZ3RoIC0gbWF0Y2hbRU5ESU5HX0dST1VQXS5sZW5ndGg7XG4gICAgICAgIGlmIChpbmRleCA+IDApIHtcbiAgICAgICAgICAgIGNvbnN0IHRleHRCZWZvcmUgPSBjb250ZXh0LnRleHQuc3Vic3RyaW5nKDAsIGluZGV4KTtcbiAgICAgICAgICAgIGlmICh0ZXh0QmVmb3JlLm1hdGNoKFwiXFxcXGQvPyRcIikpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGluZGV4RW5kIDwgY29udGV4dC50ZXh0Lmxlbmd0aCkge1xuICAgICAgICAgICAgY29uc3QgdGV4dEFmdGVyID0gY29udGV4dC50ZXh0LnN1YnN0cmluZyhpbmRleEVuZCk7XG4gICAgICAgICAgICBpZiAodGV4dEFmdGVyLm1hdGNoKFwiXi8/XFxcXGRcIikpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCB0ZXh0ID0gY29udGV4dC50ZXh0LnN1YnN0cmluZyhpbmRleCwgaW5kZXhFbmQpO1xuXG4gICAgICAgIC8vICcxLjEyJywgJzEuMTIuMTInIGlzIG1vcmUgbGlrZSBhIHZlcnNpb24gbnVtYmVyc1xuICAgICAgICBpZiAodGV4dC5tYXRjaCgvXlxcZFxcLlxcZCQvKSB8fCB0ZXh0Lm1hdGNoKC9eXFxkXFwuXFxkezEsMn1cXC5cXGR7MSwyfVxccyokLykpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIE1NL2RkIC0+IE9LXG4gICAgICAgIC8vIE1NLmRkIC0+IE5HXG4gICAgICAgIGlmICghbWF0Y2hbWUVBUl9HUk9VUF0gJiYgdGV4dC5pbmRleE9mKFwiL1wiKSA8IDApIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IGNvbnRleHQuY3JlYXRlUGFyc2luZ1Jlc3VsdChpbmRleCwgdGV4dCk7XG4gICAgICAgIGxldCBtb250aCA9IHBhcnNlSW50KG1hdGNoW3RoaXMuZ3JvdXBOdW1iZXJNb250aF0pO1xuICAgICAgICBsZXQgZGF5ID0gcGFyc2VJbnQobWF0Y2hbdGhpcy5ncm91cE51bWJlckRheV0pO1xuICAgICAgICBpZiAobW9udGggPCAxIHx8IG1vbnRoID4gMTIpIHtcbiAgICAgICAgICAgIGlmIChtb250aCA+IDEyKSB7XG4gICAgICAgICAgICAgICAgaWYgKGRheSA+PSAxICYmIGRheSA8PSAxMiAmJiBtb250aCA8PSAzMSkge1xuICAgICAgICAgICAgICAgICAgICBbZGF5LCBtb250aF0gPSBbbW9udGgsIGRheV07XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGRheSA8IDEgfHwgZGF5ID4gMzEpIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG5cbiAgICAgICAgcmVzdWx0LnN0YXJ0LmFzc2lnbihcImRheVwiLCBkYXkpO1xuICAgICAgICByZXN1bHQuc3RhcnQuYXNzaWduKFwibW9udGhcIiwgbW9udGgpO1xuXG4gICAgICAgIGlmIChtYXRjaFtZRUFSX0dST1VQXSkge1xuICAgICAgICAgICAgY29uc3QgcmF3WWVhck51bWJlciA9IHBhcnNlSW50KG1hdGNoW1lFQVJfR1JPVVBdKTtcbiAgICAgICAgICAgIGNvbnN0IHllYXIgPSBmaW5kTW9zdExpa2VseUFEWWVhcihyYXdZZWFyTnVtYmVyKTtcbiAgICAgICAgICAgIHJlc3VsdC5zdGFydC5hc3NpZ24oXCJ5ZWFyXCIsIHllYXIpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29uc3QgeWVhciA9IGZpbmRZZWFyQ2xvc2VzdFRvUmVmKGNvbnRleHQucmVmRGF0ZSwgZGF5LCBtb250aCk7XG4gICAgICAgICAgICByZXN1bHQuc3RhcnQuaW1wbHkoXCJ5ZWFyXCIsIHllYXIpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdC5hZGRUYWcoXCJwYXJzZXIvU2xhc2hEYXRlRm9ybWF0UGFyc2VyXCIpO1xuICAgIH1cbn1cbiIsICJpbXBvcnQgeyBUSU1FX1VOSVRTX1BBVFRFUk4sIHBhcnNlVGltZVVuaXRzLCBUSU1FX1VOSVRTX05PX0FCQlJfUEFUVEVSTiB9IGZyb20gXCIuLi9jb25zdGFudHNcIjtcbmltcG9ydCB7IFBhcnNpbmdDb250ZXh0IH0gZnJvbSBcIi4uLy4uLy4uL2Nocm9ub1wiO1xuaW1wb3J0IHsgUGFyc2luZ0NvbXBvbmVudHMgfSBmcm9tIFwiLi4vLi4vLi4vcmVzdWx0c1wiO1xuaW1wb3J0IHsgQWJzdHJhY3RQYXJzZXJXaXRoV29yZEJvdW5kYXJ5Q2hlY2tpbmcgfSBmcm9tIFwiLi4vLi4vLi4vY29tbW9uL3BhcnNlcnMvQWJzdHJhY3RQYXJzZXJXaXRoV29yZEJvdW5kYXJ5XCI7XG5pbXBvcnQgeyByZXZlcnNlVGltZVVuaXRzIH0gZnJvbSBcIi4uLy4uLy4uL3V0aWxzL3RpbWV1bml0c1wiO1xuXG5jb25zdCBQQVRURVJOID0gbmV3IFJlZ0V4cChgKHRoaXN8bGFzdHxwYXN0fG5leHR8YWZ0ZXJ8XFxcXCt8LSlcXFxccyooJHtUSU1FX1VOSVRTX1BBVFRFUk59KSg/PVxcXFxXfCQpYCwgXCJpXCIpO1xuY29uc3QgUEFUVEVSTl9OT19BQkJSID0gbmV3IFJlZ0V4cChcbiAgICBgKHRoaXN8bGFzdHxwYXN0fG5leHR8YWZ0ZXJ8XFxcXCt8LSlcXFxccyooJHtUSU1FX1VOSVRTX05PX0FCQlJfUEFUVEVSTn0pKD89XFxcXFd8JClgLFxuICAgIFwiaVwiXG4pO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBFTlRpbWVVbml0Q2FzdWFsUmVsYXRpdmVGb3JtYXRQYXJzZXIgZXh0ZW5kcyBBYnN0cmFjdFBhcnNlcldpdGhXb3JkQm91bmRhcnlDaGVja2luZyB7XG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBhbGxvd0FiYnJldmlhdGlvbnM6IGJvb2xlYW4gPSB0cnVlKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgfVxuXG4gICAgaW5uZXJQYXR0ZXJuKCk6IFJlZ0V4cCB7XG4gICAgICAgIHJldHVybiB0aGlzLmFsbG93QWJicmV2aWF0aW9ucyA/IFBBVFRFUk4gOiBQQVRURVJOX05PX0FCQlI7XG4gICAgfVxuXG4gICAgaW5uZXJFeHRyYWN0KGNvbnRleHQ6IFBhcnNpbmdDb250ZXh0LCBtYXRjaDogUmVnRXhwTWF0Y2hBcnJheSkge1xuICAgICAgICBjb25zdCBwcmVmaXggPSBtYXRjaFsxXS50b0xvd2VyQ2FzZSgpO1xuICAgICAgICBsZXQgdGltZVVuaXRzID0gcGFyc2VUaW1lVW5pdHMobWF0Y2hbMl0pO1xuICAgICAgICBpZiAoIXRpbWVVbml0cykge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgc3dpdGNoIChwcmVmaXgpIHtcbiAgICAgICAgICAgIGNhc2UgXCJsYXN0XCI6XG4gICAgICAgICAgICBjYXNlIFwicGFzdFwiOlxuICAgICAgICAgICAgY2FzZSBcIi1cIjpcbiAgICAgICAgICAgICAgICB0aW1lVW5pdHMgPSByZXZlcnNlVGltZVVuaXRzKHRpbWVVbml0cyk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIFBhcnNpbmdDb21wb25lbnRzLmNyZWF0ZVJlbGF0aXZlRnJvbVJlZmVyZW5jZShjb250ZXh0LnJlZmVyZW5jZSwgdGltZVVuaXRzKTtcbiAgICB9XG59XG4iLCAiaW1wb3J0IHsgTWVyZ2luZ1JlZmluZXIgfSBmcm9tIFwiLi4vLi4vLi4vY29tbW9uL2Fic3RyYWN0UmVmaW5lcnNcIjtcbmltcG9ydCB7IFBhcnNpbmdDb21wb25lbnRzLCBQYXJzaW5nUmVzdWx0LCBSZWZlcmVuY2VXaXRoVGltZXpvbmUgfSBmcm9tIFwiLi4vLi4vLi4vcmVzdWx0c1wiO1xuaW1wb3J0IHsgcGFyc2VUaW1lVW5pdHMgfSBmcm9tIFwiLi4vY29uc3RhbnRzXCI7XG5pbXBvcnQgeyByZXZlcnNlVGltZVVuaXRzIH0gZnJvbSBcIi4uLy4uLy4uL3V0aWxzL3RpbWV1bml0c1wiO1xuXG5mdW5jdGlvbiBJc1Bvc2l0aXZlRm9sbG93aW5nUmVmZXJlbmNlKHJlc3VsdDogUGFyc2luZ1Jlc3VsdCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiByZXN1bHQudGV4dC5tYXRjaCgvXlsrLV0vaSkgIT0gbnVsbDtcbn1cblxuZnVuY3Rpb24gSXNOZWdhdGl2ZUZvbGxvd2luZ1JlZmVyZW5jZShyZXN1bHQ6IFBhcnNpbmdSZXN1bHQpOiBib29sZWFuIHtcbiAgICByZXR1cm4gcmVzdWx0LnRleHQubWF0Y2goL14tL2kpICE9IG51bGw7XG59XG5cbi8qKlxuICogTWVyZ2VzIGEgcmVsYXRpdmUgZGF0YS90aW1lIHRoYXQgY29tZXMgYWZ0ZXIgYW4gYWJzb2x1dGUgZGF0ZS5cbiAqIC0gWzIwMjAtMDItMTNdIFsrMiB3ZWVrc11cbiAqIC0gW25leHQgdHVlc2RheV0gWysxMCBkYXlzXVxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBFTk1lcmdlUmVsYXRpdmVBZnRlckRhdGVSZWZpbmVyIGV4dGVuZHMgTWVyZ2luZ1JlZmluZXIge1xuICAgIHNob3VsZE1lcmdlUmVzdWx0cyh0ZXh0QmV0d2Vlbjogc3RyaW5nLCBjdXJyZW50UmVzdWx0OiBQYXJzaW5nUmVzdWx0LCBuZXh0UmVzdWx0OiBQYXJzaW5nUmVzdWx0KTogYm9vbGVhbiB7XG4gICAgICAgIGlmICghdGV4dEJldHdlZW4ubWF0Y2goL15cXHMqJC9pKSkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIElzUG9zaXRpdmVGb2xsb3dpbmdSZWZlcmVuY2UobmV4dFJlc3VsdCkgfHwgSXNOZWdhdGl2ZUZvbGxvd2luZ1JlZmVyZW5jZShuZXh0UmVzdWx0KTtcbiAgICB9XG5cbiAgICBtZXJnZVJlc3VsdHModGV4dEJldHdlZW46IHN0cmluZywgY3VycmVudFJlc3VsdDogUGFyc2luZ1Jlc3VsdCwgbmV4dFJlc3VsdDogUGFyc2luZ1Jlc3VsdCwgY29udGV4dCk6IFBhcnNpbmdSZXN1bHQge1xuICAgICAgICBsZXQgdGltZVVuaXRzID0gcGFyc2VUaW1lVW5pdHMobmV4dFJlc3VsdC50ZXh0KTtcbiAgICAgICAgaWYgKElzTmVnYXRpdmVGb2xsb3dpbmdSZWZlcmVuY2UobmV4dFJlc3VsdCkpIHtcbiAgICAgICAgICAgIHRpbWVVbml0cyA9IHJldmVyc2VUaW1lVW5pdHModGltZVVuaXRzKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGNvbXBvbmVudHMgPSBQYXJzaW5nQ29tcG9uZW50cy5jcmVhdGVSZWxhdGl2ZUZyb21SZWZlcmVuY2UoXG4gICAgICAgICAgICBuZXcgUmVmZXJlbmNlV2l0aFRpbWV6b25lKGN1cnJlbnRSZXN1bHQuc3RhcnQuZGF0ZSgpKSxcbiAgICAgICAgICAgIHRpbWVVbml0c1xuICAgICAgICApO1xuXG4gICAgICAgIHJldHVybiBuZXcgUGFyc2luZ1Jlc3VsdChcbiAgICAgICAgICAgIGN1cnJlbnRSZXN1bHQucmVmZXJlbmNlLFxuICAgICAgICAgICAgY3VycmVudFJlc3VsdC5pbmRleCxcbiAgICAgICAgICAgIGAke2N1cnJlbnRSZXN1bHQudGV4dH0ke3RleHRCZXR3ZWVufSR7bmV4dFJlc3VsdC50ZXh0fWAsXG4gICAgICAgICAgICBjb21wb25lbnRzXG4gICAgICAgICk7XG4gICAgfVxufVxuIiwgImltcG9ydCB7IE1lcmdpbmdSZWZpbmVyIH0gZnJvbSBcIi4uLy4uLy4uL2NvbW1vbi9hYnN0cmFjdFJlZmluZXJzXCI7XG5pbXBvcnQgeyBQYXJzaW5nQ29tcG9uZW50cywgUGFyc2luZ1Jlc3VsdCwgUmVmZXJlbmNlV2l0aFRpbWV6b25lIH0gZnJvbSBcIi4uLy4uLy4uL3Jlc3VsdHNcIjtcbmltcG9ydCB7IHBhcnNlVGltZVVuaXRzIH0gZnJvbSBcIi4uL2NvbnN0YW50c1wiO1xuaW1wb3J0IHsgcmV2ZXJzZVRpbWVVbml0cyB9IGZyb20gXCIuLi8uLi8uLi91dGlscy90aW1ldW5pdHNcIjtcblxuZnVuY3Rpb24gaGFzSW1wbGllZEVhcmxpZXJSZWZlcmVuY2VEYXRlKHJlc3VsdDogUGFyc2luZ1Jlc3VsdCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiByZXN1bHQudGV4dC5tYXRjaCgvXFxzKyhiZWZvcmV8ZnJvbSkkL2kpICE9IG51bGw7XG59XG5cbmZ1bmN0aW9uIGhhc0ltcGxpZWRMYXRlclJlZmVyZW5jZURhdGUocmVzdWx0OiBQYXJzaW5nUmVzdWx0KTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHJlc3VsdC50ZXh0Lm1hdGNoKC9cXHMrKGFmdGVyfHNpbmNlKSQvaSkgIT0gbnVsbDtcbn1cblxuLyoqXG4gKiBNZXJnZXMgYSByZWxhdGl2ZSBkYXRhL3RpbWUgdGhhdCBmb2xsb3cgYnkgYW4gYWJzb2x1dGUgZGF0ZS5cbiAqIC0gWzIgd2Vla3MgYmVmb3JlXSBbMjAyMC0wMi0xM11cbiAqIC0gWzIgZGF5cyBhZnRlcl0gW25leHQgRnJpZGF5XVxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBFTk1lcmdlUmVsYXRpdmVGb2xsb3dCeURhdGVSZWZpbmVyIGV4dGVuZHMgTWVyZ2luZ1JlZmluZXIge1xuICAgIHBhdHRlcm5CZXR3ZWVuKCk6IFJlZ0V4cCB7XG4gICAgICAgIHJldHVybiAvXlxccyokL2k7XG4gICAgfVxuXG4gICAgc2hvdWxkTWVyZ2VSZXN1bHRzKHRleHRCZXR3ZWVuOiBzdHJpbmcsIGN1cnJlbnRSZXN1bHQ6IFBhcnNpbmdSZXN1bHQsIG5leHRSZXN1bHQ6IFBhcnNpbmdSZXN1bHQpOiBib29sZWFuIHtcbiAgICAgICAgLy8gRGF0ZXMgbmVlZCB0byBiZSBuZXh0IHRvIGVhY2ggb3RoZXIgdG8gZ2V0IG1lcmdlZFxuICAgICAgICBpZiAoIXRleHRCZXR3ZWVuLm1hdGNoKHRoaXMucGF0dGVybkJldHdlZW4oKSkpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIENoZWNrIGlmIGFueSByZWxhdGl2ZSB0b2tlbnMgd2VyZSBzd2FsbG93ZWQgYnkgdGhlIGZpcnN0IGRhdGUuXG4gICAgICAgIC8vIEUuZy4gWzxyZWxhdGl2ZV9kYXRlMT4gZnJvbV0gWzxkYXRlMj5dXG4gICAgICAgIGlmICghaGFzSW1wbGllZEVhcmxpZXJSZWZlcmVuY2VEYXRlKGN1cnJlbnRSZXN1bHQpICYmICFoYXNJbXBsaWVkTGF0ZXJSZWZlcmVuY2VEYXRlKGN1cnJlbnRSZXN1bHQpKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBtYWtlIHN1cmUgdGhhdCA8ZGF0ZTI+IGltcGxpZXMgYW4gYWJzb2x1dGUgZGF0ZVxuICAgICAgICByZXR1cm4gISFuZXh0UmVzdWx0LnN0YXJ0LmdldChcImRheVwiKSAmJiAhIW5leHRSZXN1bHQuc3RhcnQuZ2V0KFwibW9udGhcIikgJiYgISFuZXh0UmVzdWx0LnN0YXJ0LmdldChcInllYXJcIik7XG4gICAgfVxuXG4gICAgbWVyZ2VSZXN1bHRzKHRleHRCZXR3ZWVuOiBzdHJpbmcsIGN1cnJlbnRSZXN1bHQ6IFBhcnNpbmdSZXN1bHQsIG5leHRSZXN1bHQ6IFBhcnNpbmdSZXN1bHQpOiBQYXJzaW5nUmVzdWx0IHtcbiAgICAgICAgbGV0IHRpbWVVbml0cyA9IHBhcnNlVGltZVVuaXRzKGN1cnJlbnRSZXN1bHQudGV4dCk7XG4gICAgICAgIGlmIChoYXNJbXBsaWVkRWFybGllclJlZmVyZW5jZURhdGUoY3VycmVudFJlc3VsdCkpIHtcbiAgICAgICAgICAgIHRpbWVVbml0cyA9IHJldmVyc2VUaW1lVW5pdHModGltZVVuaXRzKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGNvbXBvbmVudHMgPSBQYXJzaW5nQ29tcG9uZW50cy5jcmVhdGVSZWxhdGl2ZUZyb21SZWZlcmVuY2UoXG4gICAgICAgICAgICBuZXcgUmVmZXJlbmNlV2l0aFRpbWV6b25lKG5leHRSZXN1bHQuc3RhcnQuZGF0ZSgpKSxcbiAgICAgICAgICAgIHRpbWVVbml0c1xuICAgICAgICApO1xuXG4gICAgICAgIHJldHVybiBuZXcgUGFyc2luZ1Jlc3VsdChcbiAgICAgICAgICAgIG5leHRSZXN1bHQucmVmZXJlbmNlLFxuICAgICAgICAgICAgY3VycmVudFJlc3VsdC5pbmRleCxcbiAgICAgICAgICAgIGAke2N1cnJlbnRSZXN1bHQudGV4dH0ke3RleHRCZXR3ZWVufSR7bmV4dFJlc3VsdC50ZXh0fWAsXG4gICAgICAgICAgICBjb21wb25lbnRzXG4gICAgICAgICk7XG4gICAgfVxufVxuIiwgImltcG9ydCB7IFBhcnNpbmdDb250ZXh0LCBSZWZpbmVyIH0gZnJvbSBcIi4uLy4uLy4uL2Nocm9ub1wiO1xuaW1wb3J0IHsgUGFyc2luZ1Jlc3VsdCB9IGZyb20gXCIuLi8uLi8uLi9yZXN1bHRzXCI7XG5pbXBvcnQgeyBZRUFSX1BBVFRFUk4sIHBhcnNlWWVhciB9IGZyb20gXCIuLi9jb25zdGFudHNcIjtcblxuY29uc3QgWUVBUl9TVUZGSVhfUEFUVEVSTiA9IG5ldyBSZWdFeHAoYF5cXFxccyooJHtZRUFSX1BBVFRFUk59KWAsIFwiaVwiKTtcbmNvbnN0IFlFQVJfR1JPVVAgPSAxO1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRU5FeHRyYWN0WWVhclN1ZmZpeFJlZmluZXIgaW1wbGVtZW50cyBSZWZpbmVyIHtcbiAgICByZWZpbmUoY29udGV4dDogUGFyc2luZ0NvbnRleHQsIHJlc3VsdHM6IFBhcnNpbmdSZXN1bHRbXSk6IFBhcnNpbmdSZXN1bHRbXSB7XG4gICAgICAgIHJlc3VsdHMuZm9yRWFjaChmdW5jdGlvbiAocmVzdWx0KSB7XG4gICAgICAgICAgICBpZiAoIXJlc3VsdC5zdGFydC5pc0RhdGVXaXRoVW5rbm93blllYXIoKSkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY29uc3Qgc3VmZml4ID0gY29udGV4dC50ZXh0LnN1YnN0cmluZyhyZXN1bHQuaW5kZXggKyByZXN1bHQudGV4dC5sZW5ndGgpO1xuICAgICAgICAgICAgY29uc3QgbWF0Y2ggPSBZRUFSX1NVRkZJWF9QQVRURVJOLmV4ZWMoc3VmZml4KTtcbiAgICAgICAgICAgIGlmICghbWF0Y2gpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGNvbnRleHQuZGVidWcoKCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGBFeHRyYWN0aW5nIHllYXI6ICcke21hdGNoWzBdfScgaW50byA6ICR7cmVzdWx0fWApO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIGNvbnN0IHllYXIgPSBwYXJzZVllYXIobWF0Y2hbWUVBUl9HUk9VUF0pO1xuICAgICAgICAgICAgaWYgKHJlc3VsdC5lbmQgIT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIHJlc3VsdC5lbmQuYXNzaWduKFwieWVhclwiLCB5ZWFyKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJlc3VsdC5zdGFydC5hc3NpZ24oXCJ5ZWFyXCIsIHllYXIpO1xuICAgICAgICAgICAgcmVzdWx0LnRleHQgKz0gbWF0Y2hbMF07XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiByZXN1bHRzO1xuICAgIH1cbn1cbiIsICJpbXBvcnQgeyBGaWx0ZXIgfSBmcm9tIFwiLi4vLi4vLi4vY29tbW9uL2Fic3RyYWN0UmVmaW5lcnNcIjtcbmltcG9ydCB7IFBhcnNpbmdSZXN1bHQgfSBmcm9tIFwiLi4vLi4vLi4vcmVzdWx0c1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBFTlVubGlrZWx5Rm9ybWF0RmlsdGVyIGV4dGVuZHMgRmlsdGVyIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICB9XG5cbiAgICBpc1ZhbGlkKGNvbnRleHQsIHJlc3VsdDogUGFyc2luZ1Jlc3VsdCk6IGJvb2xlYW4ge1xuICAgICAgICBjb25zdCB0ZXh0ID0gcmVzdWx0LnRleHQudHJpbSgpO1xuXG4gICAgICAgIC8vIElmIHRoZSByZXN1bHQgaXMgY29uc2lzdHMgb2YgdGhlIHdob2xlIHRleHQgKGUuZy4gXCIyMDI0XCIsIFwiTWF5XCIsIGV0YyksXG4gICAgICAgIC8vIHRoZW4gaXQgaXMgdW5saWtlbHkgdG8gYmUgYSBkYXRlLlxuICAgICAgICBpZiAodGV4dCA9PT0gY29udGV4dC50ZXh0LnRyaW0oKSkge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBJbiBFbmdsaXNoLCB0aGUgd29yZCBcIm1heVwiIGlzIGEgbW9udGggbmFtZSwgYnV0IGl0IGlzIGFsc28gYSBtb2RhbCB2ZXJiLlxuICAgICAgICAvLyBDaGVjayBpZiB0aGUgdGV4dCBiZWZvcmUgXCJtYXlcIiBmb2xsb3dzIHNvbWUgYWxsb3dlZCBwYXR0ZXJucy5cbiAgICAgICAgaWYgKHRleHQudG9Mb3dlckNhc2UoKSA9PT0gXCJtYXlcIikge1xuICAgICAgICAgICAgY29uc3QgdGV4dEJlZm9yZSA9IGNvbnRleHQudGV4dC5zdWJzdHJpbmcoMCwgcmVzdWx0LmluZGV4KS50cmltKCk7XG4gICAgICAgICAgICBpZiAoIXRleHRCZWZvcmUubWF0Y2goL1xcYihpbikkL2kpKSB7XG4gICAgICAgICAgICAgICAgY29udGV4dC5kZWJ1ZygoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGBSZW1vdmluZyB1bmxpa2VseSByZXN1bHQ6ICR7cmVzdWx0fWApO1xuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gSW4gRW5nbGlzaCwgXCJ0aGUgc2Vjb25kXCIgY291bGQgcmVmZXIgdG8gdGhlIG9yZGluYWwgbnVtYmVyIG9yIHRpbWV1bml0LlxuICAgICAgICBpZiAodGV4dC50b0xvd2VyQ2FzZSgpLmVuZHNXaXRoKFwidGhlIHNlY29uZFwiKSkge1xuICAgICAgICAgICAgY29uc3QgdGV4dEFmdGVyID0gY29udGV4dC50ZXh0LnN1YnN0cmluZyhyZXN1bHQuaW5kZXggKyByZXN1bHQudGV4dC5sZW5ndGgpLnRyaW0oKTtcbiAgICAgICAgICAgIGlmICh0ZXh0QWZ0ZXIubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgIGNvbnRleHQuZGVidWcoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhgUmVtb3ZpbmcgdW5saWtlbHkgcmVzdWx0OiAke3Jlc3VsdH1gKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbn1cbiIsICJpbXBvcnQgeyBDb25maWd1cmF0aW9uIH0gZnJvbSBcIi4uLy4uL2Nocm9ub1wiO1xuXG5pbXBvcnQgRU5UaW1lVW5pdFdpdGhpbkZvcm1hdFBhcnNlciBmcm9tIFwiLi9wYXJzZXJzL0VOVGltZVVuaXRXaXRoaW5Gb3JtYXRQYXJzZXJcIjtcbmltcG9ydCBFTk1vbnRoTmFtZUxpdHRsZUVuZGlhblBhcnNlciBmcm9tIFwiLi9wYXJzZXJzL0VOTW9udGhOYW1lTGl0dGxlRW5kaWFuUGFyc2VyXCI7XG5pbXBvcnQgRU5Nb250aE5hbWVNaWRkbGVFbmRpYW5QYXJzZXIgZnJvbSBcIi4vcGFyc2Vycy9FTk1vbnRoTmFtZU1pZGRsZUVuZGlhblBhcnNlclwiO1xuaW1wb3J0IEVOTW9udGhOYW1lUGFyc2VyIGZyb20gXCIuL3BhcnNlcnMvRU5Nb250aE5hbWVQYXJzZXJcIjtcbmltcG9ydCBFTlllYXJNb250aERheVBhcnNlciBmcm9tIFwiLi9wYXJzZXJzL0VOWWVhck1vbnRoRGF5UGFyc2VyXCI7XG5pbXBvcnQgRU5TbGFzaE1vbnRoRm9ybWF0UGFyc2VyIGZyb20gXCIuL3BhcnNlcnMvRU5TbGFzaE1vbnRoRm9ybWF0UGFyc2VyXCI7XG5pbXBvcnQgRU5UaW1lRXhwcmVzc2lvblBhcnNlciBmcm9tIFwiLi9wYXJzZXJzL0VOVGltZUV4cHJlc3Npb25QYXJzZXJcIjtcbmltcG9ydCBFTlRpbWVVbml0QWdvRm9ybWF0UGFyc2VyIGZyb20gXCIuL3BhcnNlcnMvRU5UaW1lVW5pdEFnb0Zvcm1hdFBhcnNlclwiO1xuaW1wb3J0IEVOVGltZVVuaXRMYXRlckZvcm1hdFBhcnNlciBmcm9tIFwiLi9wYXJzZXJzL0VOVGltZVVuaXRMYXRlckZvcm1hdFBhcnNlclwiO1xuaW1wb3J0IEVOTWVyZ2VEYXRlUmFuZ2VSZWZpbmVyIGZyb20gXCIuL3JlZmluZXJzL0VOTWVyZ2VEYXRlUmFuZ2VSZWZpbmVyXCI7XG5pbXBvcnQgRU5NZXJnZURhdGVUaW1lUmVmaW5lciBmcm9tIFwiLi9yZWZpbmVycy9FTk1lcmdlRGF0ZVRpbWVSZWZpbmVyXCI7XG5cbmltcG9ydCB7IGluY2x1ZGVDb21tb25Db25maWd1cmF0aW9uIH0gZnJvbSBcIi4uLy4uL2NvbmZpZ3VyYXRpb25zXCI7XG5pbXBvcnQgRU5DYXN1YWxEYXRlUGFyc2VyIGZyb20gXCIuL3BhcnNlcnMvRU5DYXN1YWxEYXRlUGFyc2VyXCI7XG5pbXBvcnQgRU5DYXN1YWxUaW1lUGFyc2VyIGZyb20gXCIuL3BhcnNlcnMvRU5DYXN1YWxUaW1lUGFyc2VyXCI7XG5pbXBvcnQgRU5XZWVrZGF5UGFyc2VyIGZyb20gXCIuL3BhcnNlcnMvRU5XZWVrZGF5UGFyc2VyXCI7XG5pbXBvcnQgRU5SZWxhdGl2ZURhdGVGb3JtYXRQYXJzZXIgZnJvbSBcIi4vcGFyc2Vycy9FTlJlbGF0aXZlRGF0ZUZvcm1hdFBhcnNlclwiO1xuXG5pbXBvcnQgU2xhc2hEYXRlRm9ybWF0UGFyc2VyIGZyb20gXCIuLi8uLi9jb21tb24vcGFyc2Vycy9TbGFzaERhdGVGb3JtYXRQYXJzZXJcIjtcbmltcG9ydCBFTlRpbWVVbml0Q2FzdWFsUmVsYXRpdmVGb3JtYXRQYXJzZXIgZnJvbSBcIi4vcGFyc2Vycy9FTlRpbWVVbml0Q2FzdWFsUmVsYXRpdmVGb3JtYXRQYXJzZXJcIjtcbmltcG9ydCBFTk1lcmdlUmVsYXRpdmVBZnRlckRhdGVSZWZpbmVyIGZyb20gXCIuL3JlZmluZXJzL0VOTWVyZ2VSZWxhdGl2ZUFmdGVyRGF0ZVJlZmluZXJcIjtcbmltcG9ydCBFTk1lcmdlUmVsYXRpdmVGb2xsb3dCeURhdGVSZWZpbmVyIGZyb20gXCIuL3JlZmluZXJzL0VOTWVyZ2VSZWxhdGl2ZUZvbGxvd0J5RGF0ZVJlZmluZXJcIjtcbmltcG9ydCBPdmVybGFwUmVtb3ZhbFJlZmluZXIgZnJvbSBcIi4uLy4uL2NvbW1vbi9yZWZpbmVycy9PdmVybGFwUmVtb3ZhbFJlZmluZXJcIjtcbmltcG9ydCBFTkV4dHJhY3RZZWFyU3VmZml4UmVmaW5lciBmcm9tIFwiLi9yZWZpbmVycy9FTkV4dHJhY3RZZWFyU3VmZml4UmVmaW5lclwiO1xuaW1wb3J0IEVOVW5saWtlbHlGb3JtYXRGaWx0ZXIgZnJvbSBcIi4vcmVmaW5lcnMvRU5Vbmxpa2VseUZvcm1hdEZpbHRlclwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBFTkRlZmF1bHRDb25maWd1cmF0aW9uIHtcbiAgICAvKipcbiAgICAgKiBDcmVhdGUgYSBkZWZhdWx0ICpjYXN1YWwqIHtATGluayBDb25maWd1cmF0aW9ufSBmb3IgRW5nbGlzaCBjaHJvbm8uXG4gICAgICogSXQgY2FsbHMge0BMaW5rIGNyZWF0ZUNvbmZpZ3VyYXRpb259IGFuZCBpbmNsdWRlcyBhZGRpdGlvbmFsIHBhcnNlcnMuXG4gICAgICovXG4gICAgY3JlYXRlQ2FzdWFsQ29uZmlndXJhdGlvbihsaXR0bGVFbmRpYW4gPSBmYWxzZSk6IENvbmZpZ3VyYXRpb24ge1xuICAgICAgICBjb25zdCBvcHRpb24gPSB0aGlzLmNyZWF0ZUNvbmZpZ3VyYXRpb24oZmFsc2UsIGxpdHRsZUVuZGlhbik7XG4gICAgICAgIG9wdGlvbi5wYXJzZXJzLnB1c2gobmV3IEVOQ2FzdWFsRGF0ZVBhcnNlcigpKTtcbiAgICAgICAgb3B0aW9uLnBhcnNlcnMucHVzaChuZXcgRU5DYXN1YWxUaW1lUGFyc2VyKCkpO1xuICAgICAgICBvcHRpb24ucGFyc2Vycy5wdXNoKG5ldyBFTk1vbnRoTmFtZVBhcnNlcigpKTtcbiAgICAgICAgb3B0aW9uLnBhcnNlcnMucHVzaChuZXcgRU5SZWxhdGl2ZURhdGVGb3JtYXRQYXJzZXIoKSk7XG4gICAgICAgIG9wdGlvbi5wYXJzZXJzLnB1c2gobmV3IEVOVGltZVVuaXRDYXN1YWxSZWxhdGl2ZUZvcm1hdFBhcnNlcigpKTtcbiAgICAgICAgb3B0aW9uLnJlZmluZXJzLnB1c2gobmV3IEVOVW5saWtlbHlGb3JtYXRGaWx0ZXIoKSk7XG4gICAgICAgIHJldHVybiBvcHRpb247XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ3JlYXRlIGEgZGVmYXVsdCB7QExpbmsgQ29uZmlndXJhdGlvbn0gZm9yIEVuZ2xpc2ggY2hyb25vXG4gICAgICpcbiAgICAgKiBAcGFyYW0gc3RyaWN0TW9kZSBJZiB0aGUgdGltZXVuaXQgbWVudGlvbmluZyBzaG91bGQgYmUgc3RyaWN0LCBub3QgY2FzdWFsXG4gICAgICogQHBhcmFtIGxpdHRsZUVuZGlhbiBJZiBmb3JtYXQgc2hvdWxkIGJlIGRhdGUtZmlyc3QvbGl0dGxlRW5kaWFuIChlLmcuIGVuX1VLKSwgbm90IG1vbnRoLWZpcnN0L21pZGRsZUVuZGlhbiAoZS5nLiBlbl9VUylcbiAgICAgKi9cbiAgICBjcmVhdGVDb25maWd1cmF0aW9uKHN0cmljdE1vZGUgPSB0cnVlLCBsaXR0bGVFbmRpYW4gPSBmYWxzZSk6IENvbmZpZ3VyYXRpb24ge1xuICAgICAgICBjb25zdCBvcHRpb25zID0gaW5jbHVkZUNvbW1vbkNvbmZpZ3VyYXRpb24oXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgcGFyc2VyczogW1xuICAgICAgICAgICAgICAgICAgICBuZXcgU2xhc2hEYXRlRm9ybWF0UGFyc2VyKGxpdHRsZUVuZGlhbiksXG4gICAgICAgICAgICAgICAgICAgIG5ldyBFTlRpbWVVbml0V2l0aGluRm9ybWF0UGFyc2VyKHN0cmljdE1vZGUpLFxuICAgICAgICAgICAgICAgICAgICBuZXcgRU5Nb250aE5hbWVMaXR0bGVFbmRpYW5QYXJzZXIoKSxcbiAgICAgICAgICAgICAgICAgICAgbmV3IEVOTW9udGhOYW1lTWlkZGxlRW5kaWFuUGFyc2VyKC8qc2hvdWxkU2tpcFllYXJMaWtlRGF0ZT0qLyBsaXR0bGVFbmRpYW4pLFxuICAgICAgICAgICAgICAgICAgICBuZXcgRU5XZWVrZGF5UGFyc2VyKCksXG4gICAgICAgICAgICAgICAgICAgIG5ldyBFTlNsYXNoTW9udGhGb3JtYXRQYXJzZXIoKSxcbiAgICAgICAgICAgICAgICAgICAgbmV3IEVOVGltZUV4cHJlc3Npb25QYXJzZXIoc3RyaWN0TW9kZSksXG4gICAgICAgICAgICAgICAgICAgIG5ldyBFTlRpbWVVbml0QWdvRm9ybWF0UGFyc2VyKHN0cmljdE1vZGUpLFxuICAgICAgICAgICAgICAgICAgICBuZXcgRU5UaW1lVW5pdExhdGVyRm9ybWF0UGFyc2VyKHN0cmljdE1vZGUpLFxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgcmVmaW5lcnM6IFtuZXcgRU5NZXJnZURhdGVUaW1lUmVmaW5lcigpXSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBzdHJpY3RNb2RlXG4gICAgICAgICk7XG4gICAgICAgIG9wdGlvbnMucGFyc2Vycy51bnNoaWZ0KG5ldyBFTlllYXJNb250aERheVBhcnNlcigvKnN0cmljdE1vbnRoRGF0ZU9yZGVyPSovIHN0cmljdE1vZGUpKTtcblxuICAgICAgICAvLyBUaGVzZSByZWxhdGl2ZS1kYXRlcyBjb25zaWRlcmF0aW9uIHNob3VsZCBiZSBkb25lIGJlZm9yZSBvdGhlciBjb21tb24gcmVmaW5lcnMuXG4gICAgICAgIG9wdGlvbnMucmVmaW5lcnMudW5zaGlmdChuZXcgRU5NZXJnZVJlbGF0aXZlRm9sbG93QnlEYXRlUmVmaW5lcigpKTtcbiAgICAgICAgb3B0aW9ucy5yZWZpbmVycy51bnNoaWZ0KG5ldyBFTk1lcmdlUmVsYXRpdmVBZnRlckRhdGVSZWZpbmVyKCkpO1xuICAgICAgICBvcHRpb25zLnJlZmluZXJzLnVuc2hpZnQobmV3IE92ZXJsYXBSZW1vdmFsUmVmaW5lcigpKTtcblxuICAgICAgICAvLyBSZS1hcHBseSB0aGUgZGF0ZSB0aW1lIHJlZmluZXIgYWdhaW4gYWZ0ZXIgdGhlIHRpbWV6b25lIHJlZmluZW1lbnQgYW5kIGV4Y2x1c2lvbiBpbiBjb21tb24gcmVmaW5lcnMuXG4gICAgICAgIG9wdGlvbnMucmVmaW5lcnMucHVzaChuZXcgRU5NZXJnZURhdGVUaW1lUmVmaW5lcigpKTtcblxuICAgICAgICAvLyBFeHRyYWN0IHllYXIgYWZ0ZXIgbWVyZ2luZyBkYXRlIGFuZCB0aW1lXG4gICAgICAgIG9wdGlvbnMucmVmaW5lcnMucHVzaChuZXcgRU5FeHRyYWN0WWVhclN1ZmZpeFJlZmluZXIoKSk7XG5cbiAgICAgICAgLy8gS2VlcCB0aGUgZGF0ZSByYW5nZSByZWZpbmVyIGF0IHRoZSBlbmQgKGFmdGVyIGFsbCBvdGhlciByZWZpbmVtZW50cykuXG4gICAgICAgIG9wdGlvbnMucmVmaW5lcnMucHVzaChuZXcgRU5NZXJnZURhdGVSYW5nZVJlZmluZXIoKSk7XG4gICAgICAgIHJldHVybiBvcHRpb25zO1xuICAgIH1cbn1cbiIsICJpbXBvcnQgeyBSZWZlcmVuY2VXaXRoVGltZXpvbmUsIFBhcnNpbmdDb21wb25lbnRzLCBQYXJzaW5nUmVzdWx0IH0gZnJvbSBcIi4vcmVzdWx0c1wiO1xuaW1wb3J0IHsgQ29tcG9uZW50LCBQYXJzZWRSZXN1bHQsIFBhcnNpbmdPcHRpb24sIFBhcnNpbmdSZWZlcmVuY2UgfSBmcm9tIFwiLi90eXBlc1wiO1xuaW1wb3J0IHsgQXN5bmNEZWJ1Z0Jsb2NrLCBEZWJ1Z0hhbmRsZXIgfSBmcm9tIFwiLi9kZWJ1Z2dpbmdcIjtcbmltcG9ydCBFTkRlZmF1bHRDb25maWd1cmF0aW9uIGZyb20gXCIuL2xvY2FsZXMvZW4vY29uZmlndXJhdGlvblwiO1xuXG4vKipcbiAqIENocm9ubyBjb25maWd1cmF0aW9uLlxuICogSXQgaXMgc2ltcGx5IGFuIG9yZGVyZWQgbGlzdCBvZiBwYXJzZXJzIGFuZCByZWZpbmVyc1xuICovXG5leHBvcnQgaW50ZXJmYWNlIENvbmZpZ3VyYXRpb24ge1xuICAgIHBhcnNlcnM6IFBhcnNlcltdO1xuICAgIHJlZmluZXJzOiBSZWZpbmVyW107XG59XG5cbi8qKlxuICogQW4gYWJzdHJhY3Rpb24gZm9yIENocm9ubyAqUGFyc2VyKi5cbiAqXG4gKiBFYWNoIHBhcnNlciBzaG91bGQgcmVjb2duaXplIGFuZCBoYW5kbGUgYSBjZXJ0YWluIGRhdGUgZm9ybWF0LlxuICogQ2hyb25vIHVzZXMgbXVsdGlwbGUgcGFyc2VzIChhbmQgcmVmaW5lcnMpIHRvZ2V0aGVyIGZvciBwYXJzaW5nIHRoZSBpbnB1dC5cbiAqXG4gKiBUaGUgcGFyc2VyIGltcGxlbWVudGF0aW9uIG11c3QgcHJvdmlkZSB7QExpbmsgcGF0dGVybiB8IHBhdHRlcm4oKX0gZm9yIHRoZSBkYXRlIGZvcm1hdC5cbiAqXG4gKiBUaGUge0BMaW5rIGV4dHJhY3QgfCBleHRyYWN0KCl9IG1ldGhvZCBpcyBjYWxsZWQgd2l0aCB0aGUgcGF0dGVybidzICptYXRjaCouXG4gKiBUaGUgbWF0Y2hpbmcgYW5kIGV4dHJhY3RpbmcgaXMgY29udHJvbGxlZCBhbmQgYWRqdXN0ZWQgdG8gYXZvaWQgZm9yIG92ZXJsYXBwaW5nIHJlc3VsdHMuXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgUGFyc2VyIHtcbiAgICBwYXR0ZXJuKGNvbnRleHQ6IFBhcnNpbmdDb250ZXh0KTogUmVnRXhwO1xuICAgIGV4dHJhY3QoXG4gICAgICAgIGNvbnRleHQ6IFBhcnNpbmdDb250ZXh0LFxuICAgICAgICBtYXRjaDogUmVnRXhwTWF0Y2hBcnJheVxuICAgICk6IFBhcnNpbmdDb21wb25lbnRzIHwgUGFyc2luZ1Jlc3VsdCB8IHsgW2MgaW4gQ29tcG9uZW50XT86IG51bWJlciB9IHwgbnVsbDtcbn1cblxuLyoqXG4gKiBBIGFic3RyYWN0aW9uIGZvciBDaHJvbm8gKlJlZmluZXIqLlxuICpcbiAqIEVhY2ggcmVmaW5lciB0YWtlcyB0aGUgbGlzdCBvZiByZXN1bHRzIChmcm9tIHBhcnNlcnMgb3Igb3RoZXIgcmVmaW5lcnMpIGFuZCByZXR1cm5zIGFub3RoZXIgbGlzdCBvZiByZXN1bHRzLlxuICogQ2hyb25vIGFwcGxpZXMgZWFjaCByZWZpbmVyIGluIG9yZGVyIGFuZCByZXR1cm4gdGhlIG91dHB1dCBmcm9tIHRoZSBsYXN0IHJlZmluZXIuXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgUmVmaW5lciB7XG4gICAgcmVmaW5lOiAoY29udGV4dDogUGFyc2luZ0NvbnRleHQsIHJlc3VsdHM6IFBhcnNpbmdSZXN1bHRbXSkgPT4gUGFyc2luZ1Jlc3VsdFtdO1xufVxuXG4vKipcbiAqIFRoZSBDaHJvbm8gb2JqZWN0LlxuICovXG5leHBvcnQgY2xhc3MgQ2hyb25vIHtcbiAgICBwYXJzZXJzOiBBcnJheTxQYXJzZXI+O1xuICAgIHJlZmluZXJzOiBBcnJheTxSZWZpbmVyPjtcblxuICAgIGRlZmF1bHRDb25maWcgPSBuZXcgRU5EZWZhdWx0Q29uZmlndXJhdGlvbigpO1xuXG4gICAgY29uc3RydWN0b3IoY29uZmlndXJhdGlvbj86IENvbmZpZ3VyYXRpb24pIHtcbiAgICAgICAgY29uZmlndXJhdGlvbiA9IGNvbmZpZ3VyYXRpb24gfHwgdGhpcy5kZWZhdWx0Q29uZmlnLmNyZWF0ZUNhc3VhbENvbmZpZ3VyYXRpb24oKTtcbiAgICAgICAgdGhpcy5wYXJzZXJzID0gWy4uLmNvbmZpZ3VyYXRpb24ucGFyc2Vyc107XG4gICAgICAgIHRoaXMucmVmaW5lcnMgPSBbLi4uY29uZmlndXJhdGlvbi5yZWZpbmVyc107XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ3JlYXRlIGEgc2hhbGxvdyBjb3B5IG9mIHRoZSBDaHJvbm8gb2JqZWN0IHdpdGggdGhlIHNhbWUgY29uZmlndXJhdGlvbiAoYHBhcnNlcnNgIGFuZCBgcmVmaW5lcnNgKVxuICAgICAqL1xuICAgIGNsb25lKCk6IENocm9ubyB7XG4gICAgICAgIHJldHVybiBuZXcgQ2hyb25vKHtcbiAgICAgICAgICAgIHBhcnNlcnM6IFsuLi50aGlzLnBhcnNlcnNdLFxuICAgICAgICAgICAgcmVmaW5lcnM6IFsuLi50aGlzLnJlZmluZXJzXSxcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQSBzaG9ydGN1dCBmb3IgY2FsbGluZyB7QExpbmsgcGFyc2UgfCBwYXJzZSgpIH0gdGhlbiB0cmFuc2Zvcm0gdGhlIHJlc3VsdCBpbnRvIEphdmFzY3JpcHQncyBEYXRlIG9iamVjdFxuICAgICAqIEByZXR1cm4gRGF0ZSBvYmplY3QgY3JlYXRlZCBmcm9tIHRoZSBmaXJzdCBwYXJzZSByZXN1bHRcbiAgICAgKi9cbiAgICBwYXJzZURhdGUodGV4dDogc3RyaW5nLCByZWZlcmVuY2VEYXRlPzogUGFyc2luZ1JlZmVyZW5jZSB8IERhdGUsIG9wdGlvbj86IFBhcnNpbmdPcHRpb24pOiBEYXRlIHwgbnVsbCB7XG4gICAgICAgIGNvbnN0IHJlc3VsdHMgPSB0aGlzLnBhcnNlKHRleHQsIHJlZmVyZW5jZURhdGUsIG9wdGlvbik7XG4gICAgICAgIHJldHVybiByZXN1bHRzLmxlbmd0aCA+IDAgPyByZXN1bHRzWzBdLnN0YXJ0LmRhdGUoKSA6IG51bGw7XG4gICAgfVxuXG4gICAgcGFyc2UodGV4dDogc3RyaW5nLCByZWZlcmVuY2VEYXRlPzogUGFyc2luZ1JlZmVyZW5jZSB8IERhdGUsIG9wdGlvbj86IFBhcnNpbmdPcHRpb24pOiBQYXJzZWRSZXN1bHRbXSB7XG4gICAgICAgIGNvbnN0IGNvbnRleHQgPSBuZXcgUGFyc2luZ0NvbnRleHQodGV4dCwgcmVmZXJlbmNlRGF0ZSwgb3B0aW9uKTtcblxuICAgICAgICBsZXQgcmVzdWx0cyA9IFtdO1xuICAgICAgICB0aGlzLnBhcnNlcnMuZm9yRWFjaCgocGFyc2VyKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBwYXJzZWRSZXN1bHRzID0gQ2hyb25vLmV4ZWN1dGVQYXJzZXIoY29udGV4dCwgcGFyc2VyKTtcbiAgICAgICAgICAgIHJlc3VsdHMgPSByZXN1bHRzLmNvbmNhdChwYXJzZWRSZXN1bHRzKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmVzdWx0cy5zb3J0KChhLCBiKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gYS5pbmRleCAtIGIuaW5kZXg7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMucmVmaW5lcnMuZm9yRWFjaChmdW5jdGlvbiAocmVmaW5lcikge1xuICAgICAgICAgICAgcmVzdWx0cyA9IHJlZmluZXIucmVmaW5lKGNvbnRleHQsIHJlc3VsdHMpO1xuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gcmVzdWx0cztcbiAgICB9XG5cbiAgICBwcml2YXRlIHN0YXRpYyBleGVjdXRlUGFyc2VyKGNvbnRleHQ6IFBhcnNpbmdDb250ZXh0LCBwYXJzZXI6IFBhcnNlcikge1xuICAgICAgICBjb25zdCByZXN1bHRzID0gW107XG4gICAgICAgIGNvbnN0IHBhdHRlcm4gPSBwYXJzZXIucGF0dGVybihjb250ZXh0KTtcblxuICAgICAgICBjb25zdCBvcmlnaW5hbFRleHQgPSBjb250ZXh0LnRleHQ7XG4gICAgICAgIGxldCByZW1haW5pbmdUZXh0ID0gY29udGV4dC50ZXh0O1xuICAgICAgICBsZXQgbWF0Y2ggPSBwYXR0ZXJuLmV4ZWMocmVtYWluaW5nVGV4dCk7XG5cbiAgICAgICAgd2hpbGUgKG1hdGNoKSB7XG4gICAgICAgICAgICAvLyBDYWxjdWxhdGUgbWF0Y2ggaW5kZXggb24gdGhlIGZ1bGwgdGV4dDtcbiAgICAgICAgICAgIGNvbnN0IGluZGV4ID0gbWF0Y2guaW5kZXggKyBvcmlnaW5hbFRleHQubGVuZ3RoIC0gcmVtYWluaW5nVGV4dC5sZW5ndGg7XG4gICAgICAgICAgICBtYXRjaC5pbmRleCA9IGluZGV4O1xuXG4gICAgICAgICAgICBjb25zdCByZXN1bHQgPSBwYXJzZXIuZXh0cmFjdChjb250ZXh0LCBtYXRjaCk7XG4gICAgICAgICAgICBpZiAoIXJlc3VsdCkge1xuICAgICAgICAgICAgICAgIC8vIElmIGZhaWxzLCBtb3ZlIG9uIGJ5IDFcbiAgICAgICAgICAgICAgICByZW1haW5pbmdUZXh0ID0gb3JpZ2luYWxUZXh0LnN1YnN0cmluZyhtYXRjaC5pbmRleCArIDEpO1xuICAgICAgICAgICAgICAgIG1hdGNoID0gcGF0dGVybi5leGVjKHJlbWFpbmluZ1RleHQpO1xuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBsZXQgcGFyc2VkUmVzdWx0OiBQYXJzaW5nUmVzdWx0ID0gbnVsbDtcbiAgICAgICAgICAgIGlmIChyZXN1bHQgaW5zdGFuY2VvZiBQYXJzaW5nUmVzdWx0KSB7XG4gICAgICAgICAgICAgICAgcGFyc2VkUmVzdWx0ID0gcmVzdWx0O1xuICAgICAgICAgICAgfSBlbHNlIGlmIChyZXN1bHQgaW5zdGFuY2VvZiBQYXJzaW5nQ29tcG9uZW50cykge1xuICAgICAgICAgICAgICAgIHBhcnNlZFJlc3VsdCA9IGNvbnRleHQuY3JlYXRlUGFyc2luZ1Jlc3VsdChtYXRjaC5pbmRleCwgbWF0Y2hbMF0pO1xuICAgICAgICAgICAgICAgIHBhcnNlZFJlc3VsdC5zdGFydCA9IHJlc3VsdDtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcGFyc2VkUmVzdWx0ID0gY29udGV4dC5jcmVhdGVQYXJzaW5nUmVzdWx0KG1hdGNoLmluZGV4LCBtYXRjaFswXSwgcmVzdWx0KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY29uc3QgcGFyc2VkSW5kZXggPSBwYXJzZWRSZXN1bHQuaW5kZXg7XG4gICAgICAgICAgICBjb25zdCBwYXJzZWRUZXh0ID0gcGFyc2VkUmVzdWx0LnRleHQ7XG4gICAgICAgICAgICBjb250ZXh0LmRlYnVnKCgpID0+XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coYCR7cGFyc2VyLmNvbnN0cnVjdG9yLm5hbWV9IGV4dHJhY3RlZCAoYXQgaW5kZXg9JHtwYXJzZWRJbmRleH0pICcke3BhcnNlZFRleHR9J2ApXG4gICAgICAgICAgICApO1xuXG4gICAgICAgICAgICByZXN1bHRzLnB1c2gocGFyc2VkUmVzdWx0KTtcbiAgICAgICAgICAgIHJlbWFpbmluZ1RleHQgPSBvcmlnaW5hbFRleHQuc3Vic3RyaW5nKHBhcnNlZEluZGV4ICsgcGFyc2VkVGV4dC5sZW5ndGgpO1xuICAgICAgICAgICAgbWF0Y2ggPSBwYXR0ZXJuLmV4ZWMocmVtYWluaW5nVGV4dCk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gcmVzdWx0cztcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBQYXJzaW5nQ29udGV4dCBpbXBsZW1lbnRzIERlYnVnSGFuZGxlciB7XG4gICAgcmVhZG9ubHkgdGV4dDogc3RyaW5nO1xuICAgIHJlYWRvbmx5IG9wdGlvbjogUGFyc2luZ09wdGlvbjtcbiAgICByZWFkb25seSByZWZlcmVuY2U6IFJlZmVyZW5jZVdpdGhUaW1lem9uZTtcblxuICAgIC8qKlxuICAgICAqIEBkZXByZWNhdGVkLiBVc2UgYHJlZmVyZW5jZS5pbnN0YW50YCBpbnN0ZWFkLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IHJlZkRhdGU6IERhdGU7XG5cbiAgICBjb25zdHJ1Y3Rvcih0ZXh0OiBzdHJpbmcsIHJlZkRhdGU/OiBQYXJzaW5nUmVmZXJlbmNlIHwgRGF0ZSwgb3B0aW9uPzogUGFyc2luZ09wdGlvbikge1xuICAgICAgICB0aGlzLnRleHQgPSB0ZXh0O1xuICAgICAgICB0aGlzLnJlZmVyZW5jZSA9IG5ldyBSZWZlcmVuY2VXaXRoVGltZXpvbmUocmVmRGF0ZSk7XG4gICAgICAgIHRoaXMub3B0aW9uID0gb3B0aW9uID8/IHt9O1xuXG4gICAgICAgIHRoaXMucmVmRGF0ZSA9IHRoaXMucmVmZXJlbmNlLmluc3RhbnQ7XG4gICAgfVxuXG4gICAgY3JlYXRlUGFyc2luZ0NvbXBvbmVudHMoY29tcG9uZW50cz86IHsgW2MgaW4gQ29tcG9uZW50XT86IG51bWJlciB9IHwgUGFyc2luZ0NvbXBvbmVudHMpOiBQYXJzaW5nQ29tcG9uZW50cyB7XG4gICAgICAgIGlmIChjb21wb25lbnRzIGluc3RhbmNlb2YgUGFyc2luZ0NvbXBvbmVudHMpIHtcbiAgICAgICAgICAgIHJldHVybiBjb21wb25lbnRzO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIG5ldyBQYXJzaW5nQ29tcG9uZW50cyh0aGlzLnJlZmVyZW5jZSwgY29tcG9uZW50cyk7XG4gICAgfVxuXG4gICAgY3JlYXRlUGFyc2luZ1Jlc3VsdChcbiAgICAgICAgaW5kZXg6IG51bWJlcixcbiAgICAgICAgdGV4dE9yRW5kSW5kZXg6IG51bWJlciB8IHN0cmluZyxcbiAgICAgICAgc3RhcnRDb21wb25lbnRzPzogeyBbYyBpbiBDb21wb25lbnRdPzogbnVtYmVyIH0gfCBQYXJzaW5nQ29tcG9uZW50cyxcbiAgICAgICAgZW5kQ29tcG9uZW50cz86IHsgW2MgaW4gQ29tcG9uZW50XT86IG51bWJlciB9IHwgUGFyc2luZ0NvbXBvbmVudHNcbiAgICApOiBQYXJzaW5nUmVzdWx0IHtcbiAgICAgICAgY29uc3QgdGV4dCA9IHR5cGVvZiB0ZXh0T3JFbmRJbmRleCA9PT0gXCJzdHJpbmdcIiA/IHRleHRPckVuZEluZGV4IDogdGhpcy50ZXh0LnN1YnN0cmluZyhpbmRleCwgdGV4dE9yRW5kSW5kZXgpO1xuXG4gICAgICAgIGNvbnN0IHN0YXJ0ID0gc3RhcnRDb21wb25lbnRzID8gdGhpcy5jcmVhdGVQYXJzaW5nQ29tcG9uZW50cyhzdGFydENvbXBvbmVudHMpIDogbnVsbDtcbiAgICAgICAgY29uc3QgZW5kID0gZW5kQ29tcG9uZW50cyA/IHRoaXMuY3JlYXRlUGFyc2luZ0NvbXBvbmVudHMoZW5kQ29tcG9uZW50cykgOiBudWxsO1xuXG4gICAgICAgIHJldHVybiBuZXcgUGFyc2luZ1Jlc3VsdCh0aGlzLnJlZmVyZW5jZSwgaW5kZXgsIHRleHQsIHN0YXJ0LCBlbmQpO1xuICAgIH1cblxuICAgIGRlYnVnKGJsb2NrOiBBc3luY0RlYnVnQmxvY2spOiB2b2lkIHtcbiAgICAgICAgaWYgKHRoaXMub3B0aW9uLmRlYnVnKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5vcHRpb24uZGVidWcgaW5zdGFuY2VvZiBGdW5jdGlvbikge1xuICAgICAgICAgICAgICAgIHRoaXMub3B0aW9uLmRlYnVnKGJsb2NrKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgY29uc3QgaGFuZGxlcjogRGVidWdIYW5kbGVyID0gPERlYnVnSGFuZGxlcj50aGlzLm9wdGlvbi5kZWJ1ZztcbiAgICAgICAgICAgICAgICBoYW5kbGVyLmRlYnVnKGJsb2NrKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cbiIsICIvKipcbiAqIENocm9ubyBjb21wb25lbnRzIGZvciBFbmdsaXNoIHN1cHBvcnQgKCpwYXJzZXJzKiwgKnJlZmluZXJzKiwgYW5kICpjb25maWd1cmF0aW9uKilcbiAqXG4gKiBAbW9kdWxlXG4gKi9cblxuaW1wb3J0IHsgQ2hyb25vLCBQYXJzZXIsIFJlZmluZXIgfSBmcm9tIFwiLi4vLi4vY2hyb25vXCI7XG5pbXBvcnQgeyBQYXJzaW5nUmVzdWx0LCBQYXJzaW5nQ29tcG9uZW50cywgUmVmZXJlbmNlV2l0aFRpbWV6b25lIH0gZnJvbSBcIi4uLy4uL3Jlc3VsdHNcIjtcbmltcG9ydCB7IENvbXBvbmVudCwgUGFyc2VkUmVzdWx0LCBQYXJzaW5nT3B0aW9uLCBQYXJzaW5nUmVmZXJlbmNlLCBNZXJpZGllbSwgV2Vla2RheSB9IGZyb20gXCIuLi8uLi90eXBlc1wiO1xuXG5pbXBvcnQgRU5EZWZhdWx0Q29uZmlndXJhdGlvbiBmcm9tIFwiLi9jb25maWd1cmF0aW9uXCI7XG5cbmV4cG9ydCB7IENocm9ubywgUGFyc2VyLCBSZWZpbmVyLCBQYXJzaW5nUmVzdWx0LCBQYXJzaW5nQ29tcG9uZW50cywgUmVmZXJlbmNlV2l0aFRpbWV6b25lIH07XG5leHBvcnQgeyBDb21wb25lbnQsIFBhcnNlZFJlc3VsdCwgUGFyc2luZ09wdGlvbiwgUGFyc2luZ1JlZmVyZW5jZSwgTWVyaWRpZW0sIFdlZWtkYXkgfTtcblxuZXhwb3J0IGNvbnN0IGNvbmZpZ3VyYXRpb24gPSBuZXcgRU5EZWZhdWx0Q29uZmlndXJhdGlvbigpO1xuXG4vKipcbiAqIENocm9ubyBvYmplY3QgY29uZmlndXJlZCBmb3IgcGFyc2luZyAqY2FzdWFsKiBFbmdsaXNoXG4gKi9cbmV4cG9ydCBjb25zdCBjYXN1YWwgPSBuZXcgQ2hyb25vKGNvbmZpZ3VyYXRpb24uY3JlYXRlQ2FzdWFsQ29uZmlndXJhdGlvbihmYWxzZSkpO1xuXG4vKipcbiAqIENocm9ubyBvYmplY3QgY29uZmlndXJlZCBmb3IgcGFyc2luZyAqc3RyaWN0KiBFbmdsaXNoXG4gKi9cbmV4cG9ydCBjb25zdCBzdHJpY3QgPSBuZXcgQ2hyb25vKGNvbmZpZ3VyYXRpb24uY3JlYXRlQ29uZmlndXJhdGlvbih0cnVlLCBmYWxzZSkpO1xuXG4vKipcbiAqIENocm9ubyBvYmplY3QgY29uZmlndXJlZCBmb3IgcGFyc2luZyAqVUstc3R5bGUqIEVuZ2xpc2hcbiAqL1xuZXhwb3J0IGNvbnN0IEdCID0gbmV3IENocm9ubyhjb25maWd1cmF0aW9uLmNyZWF0ZUNhc3VhbENvbmZpZ3VyYXRpb24odHJ1ZSkpO1xuXG4vKipcbiAqIEEgc2hvcnRjdXQgZm9yIGVuLmNhc3VhbC5wYXJzZSgpXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBwYXJzZSh0ZXh0OiBzdHJpbmcsIHJlZj86IFBhcnNpbmdSZWZlcmVuY2UgfCBEYXRlLCBvcHRpb24/OiBQYXJzaW5nT3B0aW9uKTogUGFyc2VkUmVzdWx0W10ge1xuICAgIHJldHVybiBjYXN1YWwucGFyc2UodGV4dCwgcmVmLCBvcHRpb24pO1xufVxuXG4vKipcbiAqIEEgc2hvcnRjdXQgZm9yIGVuLmNhc3VhbC5wYXJzZURhdGUoKVxuICovXG5leHBvcnQgZnVuY3Rpb24gcGFyc2VEYXRlKHRleHQ6IHN0cmluZywgcmVmPzogUGFyc2luZ1JlZmVyZW5jZSB8IERhdGUsIG9wdGlvbj86IFBhcnNpbmdPcHRpb24pOiBEYXRlIHtcbiAgICByZXR1cm4gY2FzdWFsLnBhcnNlRGF0ZSh0ZXh0LCByZWYsIG9wdGlvbik7XG59XG4iLCAiaW1wb3J0ICogYXMgZW4gZnJvbSBcIi4vbG9jYWxlcy9lblwiO1xuaW1wb3J0IHsgQ2hyb25vLCBQYXJzZXIsIFJlZmluZXIgfSBmcm9tIFwiLi9jaHJvbm9cIjtcbmltcG9ydCB7IFBhcnNpbmdSZXN1bHQsIFBhcnNpbmdDb21wb25lbnRzLCBSZWZlcmVuY2VXaXRoVGltZXpvbmUgfSBmcm9tIFwiLi9yZXN1bHRzXCI7XG5pbXBvcnQgeyBDb21wb25lbnQsIFBhcnNlZENvbXBvbmVudHMsIFBhcnNlZFJlc3VsdCwgUGFyc2luZ09wdGlvbiwgUGFyc2luZ1JlZmVyZW5jZSwgTWVyaWRpZW0sIFdlZWtkYXkgfSBmcm9tIFwiLi90eXBlc1wiO1xuXG5leHBvcnQgeyBlbiwgQ2hyb25vLCBQYXJzZXIsIFJlZmluZXIsIFBhcnNpbmdSZXN1bHQsIFBhcnNpbmdDb21wb25lbnRzLCBSZWZlcmVuY2VXaXRoVGltZXpvbmUgfTtcbmV4cG9ydCB7IENvbXBvbmVudCwgUGFyc2VkQ29tcG9uZW50cywgUGFyc2VkUmVzdWx0LCBQYXJzaW5nT3B0aW9uLCBQYXJzaW5nUmVmZXJlbmNlLCBNZXJpZGllbSwgV2Vla2RheSB9O1xuXG4vLyBFeHBvcnQgYWxsIGxvY2FsZXNcbmltcG9ydCAqIGFzIGRlIGZyb20gXCIuL2xvY2FsZXMvZGVcIjtcbmltcG9ydCAqIGFzIGZyIGZyb20gXCIuL2xvY2FsZXMvZnJcIjtcbmltcG9ydCAqIGFzIGphIGZyb20gXCIuL2xvY2FsZXMvamFcIjtcbmltcG9ydCAqIGFzIHB0IGZyb20gXCIuL2xvY2FsZXMvcHRcIjtcbmltcG9ydCAqIGFzIG5sIGZyb20gXCIuL2xvY2FsZXMvbmxcIjtcbmltcG9ydCAqIGFzIHpoIGZyb20gXCIuL2xvY2FsZXMvemhcIjtcbmltcG9ydCAqIGFzIHJ1IGZyb20gXCIuL2xvY2FsZXMvcnVcIjtcbmltcG9ydCAqIGFzIGVzIGZyb20gXCIuL2xvY2FsZXMvZXNcIjtcbmltcG9ydCAqIGFzIHVrIGZyb20gXCIuL2xvY2FsZXMvdWtcIjtcblxuZXhwb3J0IHsgZGUsIGZyLCBqYSwgcHQsIG5sLCB6aCwgcnUsIGVzLCB1ayB9O1xuXG4vKipcbiAqIEEgc2hvcnRjdXQgZm9yIHtAbGluayBlbiB8IGNocm9uby5lbi5zdHJpY3R9XG4gKi9cbmV4cG9ydCBjb25zdCBzdHJpY3QgPSBlbi5zdHJpY3Q7XG5cbi8qKlxuICogQSBzaG9ydGN1dCBmb3Ige0BsaW5rIGVuIHwgY2hyb25vLmVuLmNhc3VhbH1cbiAqL1xuZXhwb3J0IGNvbnN0IGNhc3VhbCA9IGVuLmNhc3VhbDtcblxuLyoqXG4gKiBBIHNob3J0Y3V0IGZvciB7QGxpbmsgZW4gfCBjaHJvbm8uZW4uY2FzdWFsLnBhcnNlKCl9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBwYXJzZSh0ZXh0OiBzdHJpbmcsIHJlZj86IFBhcnNpbmdSZWZlcmVuY2UgfCBEYXRlLCBvcHRpb24/OiBQYXJzaW5nT3B0aW9uKTogUGFyc2VkUmVzdWx0W10ge1xuICAgIHJldHVybiBjYXN1YWwucGFyc2UodGV4dCwgcmVmLCBvcHRpb24pO1xufVxuXG4vKipcbiAqIEEgc2hvcnRjdXQgZm9yIHtAbGluayBlbiB8IGNocm9uby5lbi5jYXN1YWwucGFyc2VEYXRlKCl9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBwYXJzZURhdGUodGV4dDogc3RyaW5nLCByZWY/OiBQYXJzaW5nUmVmZXJlbmNlIHwgRGF0ZSwgb3B0aW9uPzogUGFyc2luZ09wdGlvbik6IERhdGUgfCBudWxsIHtcbiAgICByZXR1cm4gY2FzdWFs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LE1BQUcsRUFBQyxHQUFFLElBQUUsU0FBU0QsSUFBRUMsSUFBRUMsSUFBRTtBQUFDLFlBQUlDLEtBQUUsT0FBT0gsRUFBQztBQUFFLGVBQU0sQ0FBQ0csTUFBR0EsR0FBRSxVQUFRRixLQUFFRCxLQUFFLEtBQUcsTUFBTUMsS0FBRSxJQUFFRSxHQUFFLE1BQU0sRUFBRSxLQUFLRCxFQUFDLElBQUVGO0FBQUEsTUFBQyxHQUFFLElBQUUsRUFBQyxHQUFFLEdBQUUsR0FBRSxTQUFTQSxJQUFFO0FBQUMsWUFBSUMsS0FBRSxDQUFDRCxHQUFFLFVBQVUsR0FBRUUsS0FBRSxLQUFLLElBQUlELEVBQUMsR0FBRUUsS0FBRSxLQUFLLE1BQU1ELEtBQUUsRUFBRSxHQUFFRSxLQUFFRixLQUFFO0FBQUcsZ0JBQU9ELE1BQUcsSUFBRSxNQUFJLE9BQUssRUFBRUUsSUFBRSxHQUFFLEdBQUcsSUFBRSxNQUFJLEVBQUVDLElBQUUsR0FBRSxHQUFHO0FBQUEsTUFBQyxHQUFFLEdBQUUsU0FBU0osR0FBRUMsSUFBRUMsSUFBRTtBQUFDLFlBQUdELEdBQUUsS0FBSyxJQUFFQyxHQUFFLEtBQUssRUFBRSxRQUFNLENBQUNGLEdBQUVFLElBQUVELEVBQUM7QUFBRSxZQUFJRSxLQUFFLE1BQUlELEdBQUUsS0FBSyxJQUFFRCxHQUFFLEtBQUssTUFBSUMsR0FBRSxNQUFNLElBQUVELEdBQUUsTUFBTSxJQUFHRyxLQUFFSCxHQUFFLE1BQU0sRUFBRSxJQUFJRSxJQUFFLENBQUMsR0FBRUUsS0FBRUgsS0FBRUUsS0FBRSxHQUFFRSxLQUFFTCxHQUFFLE1BQU0sRUFBRSxJQUFJRSxNQUFHRSxLQUFFLEtBQUcsSUFBRyxDQUFDO0FBQUUsZUFBTSxFQUFFLEVBQUVGLE1BQUdELEtBQUVFLE9BQUlDLEtBQUVELEtBQUVFLEtBQUVBLEtBQUVGLFFBQUs7QUFBQSxNQUFFLEdBQUUsR0FBRSxTQUFTSixJQUFFO0FBQUMsZUFBT0EsS0FBRSxJQUFFLEtBQUssS0FBS0EsRUFBQyxLQUFHLElBQUUsS0FBSyxNQUFNQSxFQUFDO0FBQUEsTUFB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RSxZQUFJLElBQUUsRUFBRSxXQUFVLElBQUUsRUFBQyxRQUFPLFNBQVEsTUFBSyxVQUFTLEdBQUUsaUJBQWdCLEdBQUUsWUFBVyxJQUFHLGNBQWEsR0FBRSxXQUFVLElBQUcsWUFBVyxHQUFFLFNBQVEsSUFBRyxXQUFVLEdBQUUsV0FBVSxJQUFHLGFBQVksR0FBRSxVQUFTLElBQUcsV0FBVTtBQUFFLGlCQUFTLEVBQUVFLElBQUVDLElBQUVDLElBQUVDLElBQUU7QUFBQyxpQkFBTyxFQUFFLFdBQVdILElBQUVDLElBQUVDLElBQUVDLEVBQUM7QUFBQSxRQUFDO0FBQUMsVUFBRSxHQUFHLGVBQWEsR0FBRSxFQUFFLGFBQVcsU0FBU0YsSUFBRUcsSUFBRUMsSUFBRUMsSUFBRSxHQUFFO0FBQUMsbUJBQVEsR0FBRSxHQUFFLEdBQUUsSUFBRUQsR0FBRSxRQUFRLEVBQUUsZ0JBQWMsR0FBRSxJQUFFLEVBQUUsY0FBWSxDQUFDLEVBQUMsR0FBRSxLQUFJLEdBQUUsSUFBRyxHQUFFLFNBQVEsR0FBRSxFQUFDLEdBQUUsS0FBSSxHQUFFLEdBQUUsR0FBRSxFQUFDLEdBQUUsTUFBSyxHQUFFLElBQUcsR0FBRSxTQUFRLEdBQUUsRUFBQyxHQUFFLEtBQUksR0FBRSxHQUFFLEdBQUUsRUFBQyxHQUFFLE1BQUssR0FBRSxJQUFHLEdBQUUsT0FBTSxHQUFFLEVBQUMsR0FBRSxLQUFJLEdBQUUsR0FBRSxHQUFFLEVBQUMsR0FBRSxNQUFLLEdBQUUsSUFBRyxHQUFFLE1BQUssR0FBRSxFQUFDLEdBQUUsS0FBSSxHQUFFLEdBQUUsR0FBRSxFQUFDLEdBQUUsTUFBSyxHQUFFLElBQUcsR0FBRSxRQUFPLEdBQUUsRUFBQyxHQUFFLEtBQUksR0FBRSxHQUFFLEdBQUUsRUFBQyxHQUFFLE1BQUssR0FBRSxPQUFNLENBQUMsR0FBRSxJQUFFLEVBQUUsUUFBTyxJQUFFLEdBQUUsSUFBRSxHQUFFLEtBQUcsR0FBRTtBQUFDLGdCQUFJLElBQUUsRUFBRSxDQUFDO0FBQUUsY0FBRSxNQUFJLElBQUVDLEtBQUUsRUFBRUwsRUFBQyxF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LEtBQUs7QUFBQSxVQUN4QixhQUFhLENBQUMsRUFBRSxLQUFLLEVBQUUsT0FBTyxLQUFLLE9BQU8sT0FBTyxpQkFBTSxjQUFjLEVBQUUsQ0FBQztBQUFBLFVBQ3hFLFNBQ0UsNkNBQUMsMEJBQ0M7QUFBQSx3REFBQyxrQkFBTyxpQkFBUCxFQUF1QixTQUFTLEtBQUssT0FBTztBQUFBLFlBQzdDLDRDQUFDLGtCQUFPLE9BQVAsRUFBYSxTQUFTLEtBQUssT0FBTztBQUFBLGFBQ3JDO0FBQUE7QUFBQSxRQVBHO0FBQUEsTUFTUCxDQUNEO0FBQUE7QUFBQSxFQUNIO0FBRUo7IiwKICAibmFtZXMiOiBbImV4cG9ydHMiLCAibW9kdWxlIiwgInQiLCAiZSIsICJpIiwgInIiLCAicyIsICJleHBvcnRzIiwgIm1vZHVsZSIsICJ0IiwgImUiLCAibiIsICJyIiwgImkiLCAicyIsICJ1IiwgImEiLCAiTSIsICJtIiwgImYiLCAibCIsICIkIiwgInkiLCAidiIsICJnIiwgIkQiLCAibyIsICJkIiwgImMiLCAiaCIsICJleHBvcnRzIiwgIm1vZHVsZSIsICJlIiwgInQiLCAiciIsICJleHBvcnRzIiwgIm1vZHVsZSIsICJpIiwgIm4iLCAiZiIsICJlIiwgImV4cG9ydHMiLCAibW9kdWxlIiwgInQiLCAiaSIsICJlIiwgInMiLCAiZiIsICJuIiwgInUiLCAibyIsICJyIiwgImV4cG9ydHMiLCAibW9kdWxlIiwgInQiLCAibiIsICJpIiwgIm8iLCAiciIsICJlIiwgInUiLCAiZiIsICJzIiwgImEiLCAiZXhwb3J0cyIsICJtb2R1bGUiLCAiciIsICJlIiwgInQiLCAibyIsICJuIiwgImkiLCAiZCIsICJpbXBvcnRfZGF5anMiLCAiTWVyaWRpZW0iLCAiV2Vla2RheSIsICJNb250aCIsICJkYXlqcyIsICJkYXlqcyIsICJxdWFydGVyT2ZZZWFyIiwgImltcG9ydF9kYXlqcyIsICJkYXlqcyIsICJQQVRURVJOIiwgIk1PTlRIX05BTUVfR1JPVVAiLCAiREFURV9HUk9VUCIsICJEQVRFX1RPX0dST1VQIiwgIllFQVJfR1JPVVAiLCAiUEFUVEVSTiIsICJNT05USF9OQU1FX0dST1VQIiwgIllFQVJfR1JPVVAiLCAiUEFUVEVSTiIsICJNT05USF9OQU1FX0dST1VQIiwgIlBBVFRFUk4iLCAiWUVBUl9HUk9VUCIsICJzdHJpY3QiLCAiUEFUVEVSTiIsICJQQVRURVJOIiwgIlNUUklDVF9QQVRURVJOIiwgImltcG9ydF9kYXlqcyIsICJkYXlqcyIsICJQQVRURVJOIiwgIllFQVJfTlVNQkVSX0dST1VQIiwgIk1PTlRIX05VTUJFUl9HUk9VUCIsICJEQVRFX05VTUJFUl9HUk9VUCIsICJjb25maWd1cmF0aW9uIiwgImltcG9ydF9kYXlqcyIsICJpbXBvcnRfZGF5anMiLCAiZGF5anMiLCAiZGF5anMiLCAiUEFUVEVSTiIsICJkYXlqcyIsICJQQVRURVJOIiwgIlBBVFRFUk4iLCAiUFJFRklYX0dST1VQIiwgImltcG9ydF9kYXlqcyIsICJQQVRURVJOIiwgImRheWpzIiwgIlBBVFRFUk4iLCAiWUVBUl9HUk9VUCIsICJQQVRURVJOIiwgIllFQVJfR1JPVVAiLCAiY29uZmlndXJhdGlvbiIsICJjYXN1YWwiLCAiY2FzdWFsIiwgImltcG9ydF9kYXlqcyIsICJpbXBvcnRfdGltZXpvbmUiLCAiZGF5anMiLCAiYWR2YW5jZWRGb3JtYXRQbHVnaW4iLCAid2Vla09mWWVhclBsdWdpbiIsICJ1dGNQbHVnaW4iLCAidGltZXpvbmVQbHVnaW4iLCAicmVsYXRpdmVUaW1lUGx1Z2luIl0KfQo=
