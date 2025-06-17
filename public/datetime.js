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

// src/datetime.tsx
var datetime_exports = {};
__export(datetime_exports, {
  default: () => DateTime
});
module.exports = __toCommonJS(datetime_exports);
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

// node_modules/chrono-node/dist/esm/utils/dates.js
function assignSimilarDate(component, target) {
  component.assign("day", target.getDate());
  component.assign("month", target.getMonth() + 1);
  component.assign("year", target.getFullYear());
}
function assignSimilarTime(component, target) {
  component.assign("hour", target.getHours());
  component.assign("minute", target.getMinutes());
  component.assign("second", target.getSeconds());
  component.assign("millisecond", target.getMilliseconds());
  component.assign("meridiem", target.getHours() < 12 ? Meridiem.AM : Meridiem.PM);
}
function implySimilarDate(component, target) {
  component.imply("day", target.getDate());
  component.imply("month", target.getMonth() + 1);
  component.imply("year", target.getFullYear());
}
function implySimilarTime(component, target) {
  component.imply("hour", target.getHours());
  component.imply("minute", target.getMinutes());
  component.imply("second", target.getSeconds());
  component.imply("millisecond", target.getMilliseconds());
  component.imply("meridiem", target.getHours() < 12 ? Meridiem.AM : Meridiem.PM);
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

// node_modules/chrono-node/dist/esm/calculation/duration.js
function addDuration(ref, duration) {
  let date = new Date(ref);
  if (duration["y"]) {
    duration["year"] = duration["y"];
    delete duration["y"];
  }
  if (duration["mo"]) {
    duration["month"] = duration["mo"];
    delete duration["mo"];
  }
  if (duration["M"]) {
    duration["month"] = duration["M"];
    delete duration["M"];
  }
  if (duration["w"]) {
    duration["week"] = duration["w"];
    delete duration["w"];
  }
  if (duration["d"]) {
    duration["day"] = duration["d"];
    delete duration["d"];
  }
  if (duration["h"]) {
    duration["hour"] = duration["h"];
    delete duration["h"];
  }
  if (duration["m"]) {
    duration["minute"] = duration["m"];
    delete duration["m"];
  }
  if (duration["s"]) {
    duration["second"] = duration["s"];
    delete duration["s"];
  }
  if (duration["ms"]) {
    duration["millisecond"] = duration["ms"];
    delete duration["ms"];
  }
  if ("year" in duration) {
    const floor = Math.floor(duration["year"]);
    date.setFullYear(date.getFullYear() + floor);
    const remainingFraction = duration["year"] - floor;
    if (remainingFraction > 0) {
      duration.month = duration?.month ?? 0;
      duration.month += remainingFraction * 12;
    }
  }
  if ("quarter" in duration) {
    const floor = Math.floor(duration["quarter"]);
    date.setMonth(date.getMonth() + floor * 3);
  }
  if ("month" in duration) {
    const floor = Math.floor(duration["month"]);
    date.setMonth(date.getMonth() + floor);
    const remainingFraction = duration["month"] - floor;
    if (remainingFraction > 0) {
      duration.week = duration?.week ?? 0;
      duration.week += remainingFraction * 4;
    }
  }
  if ("week" in duration) {
    const floor = Math.floor(duration["week"]);
    date.setDate(date.getDate() + floor * 7);
    const remainingFraction = duration["week"] - floor;
    if (remainingFraction > 0) {
      duration.day = duration?.day ?? 0;
      duration.day += Math.round(remainingFraction * 7);
    }
  }
  if ("day" in duration) {
    const floor = Math.floor(duration["day"]);
    date.setDate(date.getDate() + floor);
    const remainingFraction = duration["day"] - floor;
    if (remainingFraction > 0) {
      duration.hour = duration?.hour ?? 0;
      duration.hour += Math.round(remainingFraction * 24);
    }
  }
  if ("hour" in duration) {
    const floor = Math.floor(duration["hour"]);
    date.setHours(date.getHours() + floor);
    const remainingFraction = duration["hour"] - floor;
    if (remainingFraction > 0) {
      duration.minute = duration?.minute ?? 0;
      duration.minute += Math.round(remainingFraction * 60);
    }
  }
  if ("minute" in duration) {
    const floor = Math.floor(duration["minute"]);
    date.setMinutes(date.getMinutes() + floor);
    const remainingFraction = duration["minute"] - floor;
    if (remainingFraction > 0) {
      duration.second = duration?.second ?? 0;
      duration.second += Math.round(remainingFraction * 60);
    }
  }
  if ("second" in duration) {
    const floor = Math.floor(duration["second"]);
    date.setSeconds(date.getSeconds() + floor);
    const remainingFraction = duration["second"] - floor;
    if (remainingFraction > 0) {
      duration.millisecond = duration?.millisecond ?? 0;
      duration.millisecond += Math.round(remainingFraction * 1e3);
    }
  }
  if ("millisecond" in duration) {
    const floor = Math.floor(duration["millisecond"]);
    date.setMilliseconds(date.getMilliseconds() + floor);
  }
  return date;
}
function reverseDuration(duration) {
  const reversed = {};
  for (const key in duration) {
    reversed[key] = -duration[key];
  }
  return reversed;
}

// node_modules/chrono-node/dist/esm/results.js
import_dayjs2.default.extend(import_quarterOfYear.default);
var ReferenceWithTimezone = class {
  instant;
  timezoneOffset;
  constructor(input) {
    input = input ?? /* @__PURE__ */ new Date();
    if (input instanceof Date) {
      this.instant = input;
      this.timezoneOffset = null;
    } else {
      this.instant = input.instant ?? /* @__PURE__ */ new Date();
      this.timezoneOffset = toTimezoneOffset(input.timezone, this.instant);
    }
  }
  getDateWithAdjustedTimezone() {
    const date = new Date(this.instant);
    if (this.timezoneOffset !== null) {
      date.setMinutes(date.getMinutes() - this.getSystemTimezoneAdjustmentMinute(this.instant));
    }
    return date;
  }
  getSystemTimezoneAdjustmentMinute(date, overrideTimezoneOffset) {
    if (!date || date.getTime() < 0) {
      date = /* @__PURE__ */ new Date();
    }
    const currentTimezoneOffset = -date.getTimezoneOffset();
    const targetTimezoneOffset = overrideTimezoneOffset ?? this.timezoneOffset ?? currentTimezoneOffset;
    return currentTimezoneOffset - targetTimezoneOffset;
  }
  getTimezoneOffset() {
    return this.timezoneOffset ?? -this.instant.getTimezoneOffset();
  }
};
var ParsingComponents = class _ParsingComponents {
  knownValues;
  impliedValues;
  reference;
  _tags = /* @__PURE__ */ new Set();
  constructor(reference, knownComponents) {
    this.reference = reference;
    this.knownValues = {};
    this.impliedValues = {};
    if (knownComponents) {
      for (const key in knownComponents) {
        this.knownValues[key] = knownComponents[key];
      }
    }
    const refDayJs = reference.getDateWithAdjustedTimezone();
    this.imply("day", refDayJs.getDate());
    this.imply("month", refDayJs.getMonth() + 1);
    this.imply("year", refDayJs.getFullYear());
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
    return (0, import_dayjs2.default)(this.dateWithoutTimezoneAdjustment());
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
  static createRelativeFromReference(reference, duration) {
    let date = addDuration(reference.getDateWithAdjustedTimezone(), duration);
    const components = new _ParsingComponents(reference);
    components.addTag("result/relativeDate");
    if (duration["hour"] || duration["minute"] || duration["second"]) {
      components.addTag("result/relativeDateAndTime");
      assignSimilarTime(components, date);
      assignSimilarDate(components, date);
      components.assign("timezoneOffset", reference.getTimezoneOffset());
    } else {
      implySimilarTime(components, date);
      components.imply("timezoneOffset", reference.getTimezoneOffset());
      if (duration["day"]) {
        components.assign("day", date.getDate());
        components.assign("month", date.getMonth() + 1);
        components.assign("year", date.getFullYear());
        components.assign("weekday", date.getDay());
      } else if (duration["week"]) {
        components.assign("day", date.getDate());
        components.assign("month", date.getMonth() + 1);
        components.assign("year", date.getFullYear());
        components.imply("weekday", date.getDay());
      } else {
        components.imply("day", date.getDate());
        if (duration["month"]) {
          components.assign("month", date.getMonth() + 1);
          components.assign("year", date.getFullYear());
        } else {
          components.imply("month", date.getMonth() + 1);
          if (duration["year"]) {
            components.assign("year", date.getFullYear());
          } else {
            components.imply("year", date.getFullYear());
          }
        }
      }
    }
    return components;
  }
};
var ParsingResult = class _ParsingResult {
  refDate;
  index;
  text;
  reference;
  start;
  end;
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
var import_dayjs3 = __toESM(require_dayjs_min(), 1);
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
  const refMoment = (0, import_dayjs3.default)(refDate);
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
  innerPatternHasChange(context, currentInnerPattern) {
    return this.innerPattern(context) !== currentInnerPattern;
  }
  patternLeftBoundary() {
    return `(\\W|^)`;
  }
  cachedInnerPattern = null;
  cachedPattern = null;
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
  strictMode;
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
    context.debug(() => {
      console.log(timeUnits);
      console.log(ParsingComponents.createRelativeFromReference(context.reference, timeUnits));
    });
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
  shouldSkipYearLikeDate;
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
  strictMonthDateOrder;
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
  strictMode;
  constructor(strictMode = false) {
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
  cachedPrimaryPrefix = null;
  cachedPrimarySuffix = null;
  cachedPrimaryTimePattern = null;
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
  cachedFollowingPhase = null;
  cachedFollowingSuffix = null;
  cachedFollowingTimePatten = null;
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

// node_modules/chrono-node/dist/esm/locales/en/parsers/ENTimeUnitAgoFormatParser.js
var PATTERN6 = new RegExp(`(${TIME_UNITS_PATTERN})\\s{0,5}(?:ago|before|earlier)(?=\\W|$)`, "i");
var STRICT_PATTERN = new RegExp(`(${TIME_UNITS_NO_ABBR_PATTERN})\\s{0,5}(?:ago|before|earlier)(?=\\W|$)`, "i");
var ENTimeUnitAgoFormatParser = class extends AbstractParserWithWordBoundaryChecking {
  strictMode;
  constructor(strictMode) {
    super();
    this.strictMode = strictMode;
  }
  innerPattern() {
    return this.strictMode ? STRICT_PATTERN : PATTERN6;
  }
  innerExtract(context, match) {
    const duration = parseTimeUnits(match[1]);
    if (!duration) {
      return null;
    }
    return ParsingComponents.createRelativeFromReference(context.reference, reverseDuration(duration));
  }
};

// node_modules/chrono-node/dist/esm/locales/en/parsers/ENTimeUnitLaterFormatParser.js
var PATTERN7 = new RegExp(`(${TIME_UNITS_PATTERN})\\s{0,5}(?:later|after|from now|henceforth|forward|out)(?=(?:\\W|$))`, "i");
var STRICT_PATTERN2 = new RegExp(`(${TIME_UNITS_NO_ABBR_PATTERN})\\s{0,5}(later|after|from now)(?=\\W|$)`, "i");
var GROUP_NUM_TIMEUNITS = 1;
var ENTimeUnitLaterFormatParser = class extends AbstractParserWithWordBoundaryChecking {
  strictMode;
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

// node_modules/chrono-node/dist/esm/utils/dayjs.js
function implyTheNextDay(component, targetDayJs) {
  targetDayJs = targetDayJs.add(1, "day");
  implySimilarDate2(component, targetDayJs);
  implySimilarTime2(component, targetDayJs);
}
function assignSimilarDate2(component, targetDayJs) {
  component.assign("day", targetDayJs.date());
  component.assign("month", targetDayJs.month() + 1);
  component.assign("year", targetDayJs.year());
}
function assignSimilarTime2(component, targetDayJs) {
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
function implySimilarDate2(component, targetDayJs) {
  component.imply("day", targetDayJs.date());
  component.imply("month", targetDayJs.month() + 1);
  component.imply("year", targetDayJs.year());
}
function implySimilarTime2(component, targetDayJs) {
  component.imply("hour", targetDayJs.hour());
  component.imply("minute", targetDayJs.minute());
  component.imply("second", targetDayJs.second());
  component.imply("millisecond", targetDayJs.millisecond());
}

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
        assignSimilarDate2(endDateTime, nextDayJs);
      } else {
        implySimilarDate2(endDateTime, nextDayJs);
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
  timezoneOverrides;
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
var import_dayjs5 = __toESM(require_dayjs_min(), 1);
var ForwardDateRefiner = class {
  refine(context, results) {
    if (!context.option.forwardDate) {
      return results;
    }
    results.forEach((result) => {
      let refMoment = (0, import_dayjs5.default)(context.reference.getDateWithAdjustedTimezone());
      if (result.start.isOnlyTime() && context.reference.instant > result.start.date()) {
        const refDate = context.reference.getDateWithAdjustedTimezone();
        const refFollowingDay = new Date(refDate);
        refFollowingDay.setDate(refFollowingDay.getDate() + 1);
        implySimilarDate(result.start, refFollowingDay);
        context.debug(() => {
          console.log(`${this.constructor.name} adjusted ${result} time from the ref date (${refDate}) to the following day (${refFollowingDay})`);
        });
        if (result.end && result.end.isOnlyTime()) {
          implySimilarDate(result.end, refFollowingDay);
          if (result.start.date() > result.end.date()) {
            refFollowingDay.setDate(refFollowingDay.getDate() + 1);
            implySimilarDate(result.end, refFollowingDay);
          }
        }
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
  strictMode;
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
var import_dayjs8 = __toESM(require_dayjs_min(), 1);

// node_modules/chrono-node/dist/esm/common/casualReferences.js
var import_dayjs6 = __toESM(require_dayjs_min(), 1);
function now(reference) {
  const targetDate = (0, import_dayjs6.default)(reference.getDateWithAdjustedTimezone());
  const component = new ParsingComponents(reference, {});
  assignSimilarDate2(component, targetDate);
  assignSimilarTime2(component, targetDate);
  component.assign("timezoneOffset", reference.getTimezoneOffset());
  component.addTag("casualReference/now");
  return component;
}
function today(reference) {
  const targetDate = (0, import_dayjs6.default)(reference.getDateWithAdjustedTimezone());
  const component = new ParsingComponents(reference, {});
  assignSimilarDate2(component, targetDate);
  implySimilarTime2(component, targetDate);
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
  let targetDate = (0, import_dayjs6.default)(reference.getDateWithAdjustedTimezone());
  const component = new ParsingComponents(reference, {});
  targetDate = targetDate.add(nDays, "day");
  assignSimilarDate2(component, targetDate);
  implySimilarTime2(component, targetDate);
  return component;
}
function tonight(reference, implyHour = 22) {
  const targetDate = (0, import_dayjs6.default)(reference.getDateWithAdjustedTimezone());
  const component = new ParsingComponents(reference, {});
  assignSimilarDate2(component, targetDate);
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
  const targetDate = (0, import_dayjs6.default)(reference.getDateWithAdjustedTimezone());
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
  component.assign("hour", 12);
  component.imply("minute", 0);
  component.imply("second", 0);
  component.imply("millisecond", 0);
  component.addTag("casualReference/noon");
  return component;
}

// node_modules/chrono-node/dist/esm/locales/en/parsers/ENCasualDateParser.js
var PATTERN9 = /(now|today|tonight|tomorrow|overmorrow|tmr|tmrw|yesterday|last\s*night)(?=\W|$)/i;
var ENCasualDateParser = class extends AbstractParserWithWordBoundaryChecking {
  innerPattern(context) {
    return PATTERN9;
  }
  innerExtract(context, match) {
    let targetDate = (0, import_dayjs8.default)(context.refDate);
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
      case "overmorrow":
        component = theDayAfter(context.reference, 2);
        break;
      default:
        if (lowerText.match(/last\s*night/)) {
          if (targetDate.hour() > 6) {
            targetDate = targetDate.add(-1, "day");
          }
          assignSimilarDate2(component, targetDate);
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

// node_modules/chrono-node/dist/esm/calculation/weekdays.js
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
var import_dayjs10 = __toESM(require_dayjs_min(), 1);
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
    let date = (0, import_dayjs10.default)(context.reference.instant);
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
  groupNumberMonth;
  groupNumberDay;
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
  allowAbbreviations;
  constructor(allowAbbreviations = true) {
    super();
    this.allowAbbreviations = allowAbbreviations;
  }
  innerPattern() {
    return this.allowAbbreviations ? PATTERN14 : PATTERN_NO_ABBR;
  }
  innerExtract(context, match) {
    const prefix = match[1].toLowerCase();
    let duration = parseTimeUnits(match[2]);
    if (!duration) {
      return null;
    }
    switch (prefix) {
      case "last":
      case "past":
      case "-":
        duration = reverseDuration(duration);
        break;
    }
    return ParsingComponents.createRelativeFromReference(context.reference, duration);
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
    let duration = parseTimeUnits(currentResult.text);
    if (hasImpliedEarlierReferenceDate(currentResult)) {
      duration = reverseDuration(duration);
    }
    const components = ParsingComponents.createRelativeFromReference(new ReferenceWithTimezone(nextResult.start.date()), duration);
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
      if (match[0].trim().length <= 3) {
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
  parsers;
  refiners;
  defaultConfig = new ENDefaultConfiguration();
  constructor(configuration2) {
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
  text;
  option;
  reference;
  refDate;
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

// src/datetime.tsx
var import_dayjs11 = __toESM(require_dayjs_min());
var import_advancedFormat = __toESM(require_advancedFormat());
var import_weekOfYear = __toESM(require_weekOfYear());
var import_utc = __toESM(require_utc());
var import_timezone3 = __toESM(require_timezone());
var import_relativeTime = __toESM(require_relativeTime());
var import_jsx_runtime = require("react/jsx-runtime");
import_dayjs11.default.extend(import_advancedFormat.default);
import_dayjs11.default.extend(import_weekOfYear.default);
import_dayjs11.default.extend(import_utc.default);
import_dayjs11.default.extend(import_timezone3.default);
import_dayjs11.default.extend(import_relativeTime.default);
function handleConversion(input, timezone) {
  if (input.match(/^\d+$/)) input = new Date(parseInt(input, 10) * 1e3).toString();
  const parsedDate = parseDate(input);
  if (!parsedDate || parsedDate.toString() === "Invalid Date") return [];
  const date = (0, import_dayjs11.default)(parsedDate).tz(timezone);
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
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vLi4vLi4vLi4vLi4vLi4vVm9sdW1lcy9EYXRhL2hvbWUvcGx1Z2lucy9jb2xsZWN0aW9uL3JheWNhc3QvY29tcGFuaW9uL25vZGVfbW9kdWxlcy9kYXlqcy9wbHVnaW4vcXVhcnRlck9mWWVhci5qcyIsICIuLi8uLi8uLi8uLi8uLi8uLi9Wb2x1bWVzL0RhdGEvaG9tZS9wbHVnaW5zL2NvbGxlY3Rpb24vcmF5Y2FzdC9jb21wYW5pb24vbm9kZV9tb2R1bGVzL2RheWpzL2RheWpzLm1pbi5qcyIsICIuLi8uLi8uLi8uLi8uLi8uLi9Wb2x1bWVzL0RhdGEvaG9tZS9wbHVnaW5zL2NvbGxlY3Rpb24vcmF5Y2FzdC9jb21wYW5pb24vbm9kZV9tb2R1bGVzL2RheWpzL3BsdWdpbi9hZHZhbmNlZEZvcm1hdC5qcyIsICIuLi8uLi8uLi8uLi8uLi8uLi9Wb2x1bWVzL0RhdGEvaG9tZS9wbHVnaW5zL2NvbGxlY3Rpb24vcmF5Y2FzdC9jb21wYW5pb24vbm9kZV9tb2R1bGVzL2RheWpzL3BsdWdpbi93ZWVrT2ZZZWFyLmpzIiwgIi4uLy4uLy4uLy4uLy4uLy4uL1ZvbHVtZXMvRGF0YS9ob21lL3BsdWdpbnMvY29sbGVjdGlvbi9yYXljYXN0L2NvbXBhbmlvbi9ub2RlX21vZHVsZXMvZGF5anMvcGx1Z2luL3V0Yy5qcyIsICIuLi8uLi8uLi8uLi8uLi8uLi9Wb2x1bWVzL0RhdGEvaG9tZS9wbHVnaW5zL2NvbGxlY3Rpb24vcmF5Y2FzdC9jb21wYW5pb24vbm9kZV9tb2R1bGVzL2RheWpzL3BsdWdpbi90aW1lem9uZS5qcyIsICIuLi8uLi8uLi8uLi8uLi8uLi9Wb2x1bWVzL0RhdGEvaG9tZS9wbHVnaW5zL2NvbGxlY3Rpb24vcmF5Y2FzdC9jb21wYW5pb24vbm9kZV9tb2R1bGVzL2RheWpzL3BsdWdpbi9yZWxhdGl2ZVRpbWUuanMiLCAiLi4vLi4vLi4vLi4vLi4vLi4vVm9sdW1lcy9EYXRhL2hvbWUvcGx1Z2lucy9jb2xsZWN0aW9uL3JheWNhc3QvY29tcGFuaW9uL3NyYy9kYXRldGltZS50c3giLCAiLi4vLi4vLi4vLi4vLi4vLi4vVm9sdW1lcy9EYXRhL2hvbWUvcGx1Z2lucy9jb2xsZWN0aW9uL3JheWNhc3QvY29tcGFuaW9uL25vZGVfbW9kdWxlcy9jaHJvbm8tbm9kZS9zcmMvcmVzdWx0cy50cyIsICIuLi8uLi8uLi8uLi8uLi8uLi9Wb2x1bWVzL0RhdGEvaG9tZS9wbHVnaW5zL2NvbGxlY3Rpb24vcmF5Y2FzdC9jb21wYW5pb24vbm9kZV9tb2R1bGVzL2Nocm9uby1ub2RlL3NyYy90eXBlcy50cyIsICIuLi8uLi8uLi8uLi8uLi8uLi9Wb2x1bWVzL0RhdGEvaG9tZS9wbHVnaW5zL2NvbGxlY3Rpb24vcmF5Y2FzdC9jb21wYW5pb24vbm9kZV9tb2R1bGVzL2Nocm9uby1ub2RlL3NyYy91dGlscy9kYXRlcy50cyIsICIuLi8uLi8uLi8uLi8uLi8uLi9Wb2x1bWVzL0RhdGEvaG9tZS9wbHVnaW5zL2NvbGxlY3Rpb24vcmF5Y2FzdC9jb21wYW5pb24vbm9kZV9tb2R1bGVzL2Nocm9uby1ub2RlL3NyYy90aW1lem9uZS50cyIsICIuLi8uLi8uLi8uLi8uLi8uLi9Wb2x1bWVzL0RhdGEvaG9tZS9wbHVnaW5zL2NvbGxlY3Rpb24vcmF5Y2FzdC9jb21wYW5pb24vbm9kZV9tb2R1bGVzL2Nocm9uby1ub2RlL3NyYy9jYWxjdWxhdGlvbi9kdXJhdGlvbi50cyIsICIuLi8uLi8uLi8uLi8uLi8uLi9Wb2x1bWVzL0RhdGEvaG9tZS9wbHVnaW5zL2NvbGxlY3Rpb24vcmF5Y2FzdC9jb21wYW5pb24vbm9kZV9tb2R1bGVzL2Nocm9uby1ub2RlL3NyYy91dGlscy9wYXR0ZXJuLnRzIiwgIi4uLy4uLy4uLy4uLy4uLy4uL1ZvbHVtZXMvRGF0YS9ob21lL3BsdWdpbnMvY29sbGVjdGlvbi9yYXljYXN0L2NvbXBhbmlvbi9ub2RlX21vZHVsZXMvY2hyb25vLW5vZGUvc3JjL2NhbGN1bGF0aW9uL3llYXJzLnRzIiwgIi4uLy4uLy4uLy4uLy4uLy4uL1ZvbHVtZXMvRGF0YS9ob21lL3BsdWdpbnMvY29sbGVjdGlvbi9yYXljYXN0L2NvbXBhbmlvbi9ub2RlX21vZHVsZXMvY2hyb25vLW5vZGUvc3JjL2xvY2FsZXMvZW4vY29uc3RhbnRzLnRzIiwgIi4uLy4uLy4uLy4uLy4uLy4uL1ZvbHVtZXMvRGF0YS9ob21lL3BsdWdpbnMvY29sbGVjdGlvbi9yYXljYXN0L2NvbXBhbmlvbi9ub2RlX21vZHVsZXMvY2hyb25vLW5vZGUvc3JjL2NvbW1vbi9wYXJzZXJzL0Fic3RyYWN0UGFyc2VyV2l0aFdvcmRCb3VuZGFyeS50cyIsICIuLi8uLi8uLi8uLi8uLi8uLi9Wb2x1bWVzL0RhdGEvaG9tZS9wbHVnaW5zL2NvbGxlY3Rpb24vcmF5Y2FzdC9jb21wYW5pb24vbm9kZV9tb2R1bGVzL2Nocm9uby1ub2RlL3NyYy9sb2NhbGVzL2VuL3BhcnNlcnMvRU5UaW1lVW5pdFdpdGhpbkZvcm1hdFBhcnNlci50cyIsICIuLi8uLi8uLi8uLi8uLi8uLi9Wb2x1bWVzL0RhdGEvaG9tZS9wbHVnaW5zL2NvbGxlY3Rpb24vcmF5Y2FzdC9jb21wYW5pb24vbm9kZV9tb2R1bGVzL2Nocm9uby1ub2RlL3NyYy9sb2NhbGVzL2VuL3BhcnNlcnMvRU5Nb250aE5hbWVMaXR0bGVFbmRpYW5QYXJzZXIudHMiLCAiLi4vLi4vLi4vLi4vLi4vLi4vVm9sdW1lcy9EYXRhL2hvbWUvcGx1Z2lucy9jb2xsZWN0aW9uL3JheWNhc3QvY29tcGFuaW9uL25vZGVfbW9kdWxlcy9jaHJvbm8tbm9kZS9zcmMvbG9jYWxlcy9lbi9wYXJzZXJzL0VOTW9udGhOYW1lTWlkZGxlRW5kaWFuUGFyc2VyLnRzIiwgIi4uLy4uLy4uLy4uLy4uLy4uL1ZvbHVtZXMvRGF0YS9ob21lL3BsdWdpbnMvY29sbGVjdGlvbi9yYXljYXN0L2NvbXBhbmlvbi9ub2RlX21vZHVsZXMvY2hyb25vLW5vZGUvc3JjL2xvY2FsZXMvZW4vcGFyc2Vycy9FTk1vbnRoTmFtZVBhcnNlci50cyIsICIuLi8uLi8uLi8uLi8uLi8uLi9Wb2x1bWVzL0RhdGEvaG9tZS9wbHVnaW5zL2NvbGxlY3Rpb24vcmF5Y2FzdC9jb21wYW5pb24vbm9kZV9tb2R1bGVzL2Nocm9uby1ub2RlL3NyYy9sb2NhbGVzL2VuL3BhcnNlcnMvRU5ZZWFyTW9udGhEYXlQYXJzZXIudHMiLCAiLi4vLi4vLi4vLi4vLi4vLi4vVm9sdW1lcy9EYXRhL2hvbWUvcGx1Z2lucy9jb2xsZWN0aW9uL3JheWNhc3QvY29tcGFuaW9uL25vZGVfbW9kdWxlcy9jaHJvbm8tbm9kZS9zcmMvbG9jYWxlcy9lbi9wYXJzZXJzL0VOU2xhc2hNb250aEZvcm1hdFBhcnNlci50cyIsICIuLi8uLi8uLi8uLi8uLi8uLi9Wb2x1bWVzL0RhdGEvaG9tZS9wbHVnaW5zL2NvbGxlY3Rpb24vcmF5Y2FzdC9jb21wYW5pb24vbm9kZV9tb2R1bGVzL2Nocm9uby1ub2RlL3NyYy9jb21tb24vcGFyc2Vycy9BYnN0cmFjdFRpbWVFeHByZXNzaW9uUGFyc2VyLnRzIiwgIi4uLy4uLy4uLy4uLy4uLy4uL1ZvbHVtZXMvRGF0YS9ob21lL3BsdWdpbnMvY29sbGVjdGlvbi9yYXljYXN0L2NvbXBhbmlvbi9ub2RlX21vZHVsZXMvY2hyb25vLW5vZGUvc3JjL2xvY2FsZXMvZW4vcGFyc2Vycy9FTlRpbWVFeHByZXNzaW9uUGFyc2VyLnRzIiwgIi4uLy4uLy4uLy4uLy4uLy4uL1ZvbHVtZXMvRGF0YS9ob21lL3BsdWdpbnMvY29sbGVjdGlvbi9yYXljYXN0L2NvbXBhbmlvbi9ub2RlX21vZHVsZXMvY2hyb25vLW5vZGUvc3JjL2xvY2FsZXMvZW4vcGFyc2Vycy9FTlRpbWVVbml0QWdvRm9ybWF0UGFyc2VyLnRzIiwgIi4uLy4uLy4uLy4uLy4uLy4uL1ZvbHVtZXMvRGF0YS9ob21lL3BsdWdpbnMvY29sbGVjdGlvbi9yYXljYXN0L2NvbXBhbmlvbi9ub2RlX21vZHVsZXMvY2hyb25vLW5vZGUvc3JjL2xvY2FsZXMvZW4vcGFyc2Vycy9FTlRpbWVVbml0TGF0ZXJGb3JtYXRQYXJzZXIudHMiLCAiLi4vLi4vLi4vLi4vLi4vLi4vVm9sdW1lcy9EYXRhL2hvbWUvcGx1Z2lucy9jb2xsZWN0aW9uL3JheWNhc3QvY29tcGFuaW9uL25vZGVfbW9kdWxlcy9jaHJvbm8tbm9kZS9zcmMvY29tbW9uL2Fic3RyYWN0UmVmaW5lcnMudHMiLCAiLi4vLi4vLi4vLi4vLi4vLi4vVm9sdW1lcy9EYXRhL2hvbWUvcGx1Z2lucy9jb2xsZWN0aW9uL3JheWNhc3QvY29tcGFuaW9uL25vZGVfbW9kdWxlcy9jaHJvbm8tbm9kZS9zcmMvY29tbW9uL3JlZmluZXJzL0Fic3RyYWN0TWVyZ2VEYXRlUmFuZ2VSZWZpbmVyLnRzIiwgIi4uLy4uLy4uLy4uLy4uLy4uL1ZvbHVtZXMvRGF0YS9ob21lL3BsdWdpbnMvY29sbGVjdGlvbi9yYXljYXN0L2NvbXBhbmlvbi9ub2RlX21vZHVsZXMvY2hyb25vLW5vZGUvc3JjL2xvY2FsZXMvZW4vcmVmaW5lcnMvRU5NZXJnZURhdGVSYW5nZVJlZmluZXIudHMiLCAiLi4vLi4vLi4vLi4vLi4vLi4vVm9sdW1lcy9EYXRhL2hvbWUvcGx1Z2lucy9jb2xsZWN0aW9uL3JheWNhc3QvY29tcGFuaW9uL25vZGVfbW9kdWxlcy9jaHJvbm8tbm9kZS9zcmMvdXRpbHMvZGF5anMudHMiLCAiLi4vLi4vLi4vLi4vLi4vLi4vVm9sdW1lcy9EYXRhL2hvbWUvcGx1Z2lucy9jb2xsZWN0aW9uL3JheWNhc3QvY29tcGFuaW9uL25vZGVfbW9kdWxlcy9jaHJvbm8tbm9kZS9zcmMvY2FsY3VsYXRpb24vbWVyZ2luZ0NhbGN1bGF0aW9uLnRzIiwgIi4uLy4uLy4uLy4uLy4uLy4uL1ZvbHVtZXMvRGF0YS9ob21lL3BsdWdpbnMvY29sbGVjdGlvbi9yYXljYXN0L2NvbXBhbmlvbi9ub2RlX21vZHVsZXMvY2hyb25vLW5vZGUvc3JjL2NvbW1vbi9yZWZpbmVycy9BYnN0cmFjdE1lcmdlRGF0ZVRpbWVSZWZpbmVyLnRzIiwgIi4uLy4uLy4uLy4uLy4uLy4uL1ZvbHVtZXMvRGF0YS9ob21lL3BsdWdpbnMvY29sbGVjdGlvbi9yYXljYXN0L2NvbXBhbmlvbi9ub2RlX21vZHVsZXMvY2hyb25vLW5vZGUvc3JjL2xvY2FsZXMvZW4vcmVmaW5lcnMvRU5NZXJnZURhdGVUaW1lUmVmaW5lci50cyIsICIuLi8uLi8uLi8uLi8uLi8uLi9Wb2x1bWVzL0RhdGEvaG9tZS9wbHVnaW5zL2NvbGxlY3Rpb24vcmF5Y2FzdC9jb21wYW5pb24vbm9kZV9tb2R1bGVzL2Nocm9uby1ub2RlL3NyYy9jb21tb24vcmVmaW5lcnMvRXh0cmFjdFRpbWV6b25lQWJiclJlZmluZXIudHMiLCAiLi4vLi4vLi4vLi4vLi4vLi4vVm9sdW1lcy9EYXRhL2hvbWUvcGx1Z2lucy9jb2xsZWN0aW9uL3JheWNhc3QvY29tcGFuaW9uL25vZGVfbW9kdWxlcy9jaHJvbm8tbm9kZS9zcmMvY29tbW9uL3JlZmluZXJzL0V4dHJhY3RUaW1lem9uZU9mZnNldFJlZmluZXIudHMiLCAiLi4vLi4vLi4vLi4vLi4vLi4vVm9sdW1lcy9EYXRhL2hvbWUvcGx1Z2lucy9jb2xsZWN0aW9uL3JheWNhc3QvY29tcGFuaW9uL25vZGVfbW9kdWxlcy9jaHJvbm8tbm9kZS9zcmMvY29tbW9uL3JlZmluZXJzL092ZXJsYXBSZW1vdmFsUmVmaW5lci50cyIsICIuLi8uLi8uLi8uLi8uLi8uLi9Wb2x1bWVzL0RhdGEvaG9tZS9wbHVnaW5zL2NvbGxlY3Rpb24vcmF5Y2FzdC9jb21wYW5pb24vbm9kZV9tb2R1bGVzL2Nocm9uby1ub2RlL3NyYy9jb21tb24vcmVmaW5lcnMvRm9yd2FyZERhdGVSZWZpbmVyLnRzIiwgIi4uLy4uLy4uLy4uLy4uLy4uL1ZvbHVtZXMvRGF0YS9ob21lL3BsdWdpbnMvY29sbGVjdGlvbi9yYXljYXN0L2NvbXBhbmlvbi9ub2RlX21vZHVsZXMvY2hyb25vLW5vZGUvc3JjL2NvbW1vbi9yZWZpbmVycy9Vbmxpa2VseUZvcm1hdEZpbHRlci50cyIsICIuLi8uLi8uLi8uLi8uLi8uLi9Wb2x1bWVzL0RhdGEvaG9tZS9wbHVnaW5zL2NvbGxlY3Rpb24vcmF5Y2FzdC9jb21wYW5pb24vbm9kZV9tb2R1bGVzL2Nocm9uby1ub2RlL3NyYy9jb21tb24vcGFyc2Vycy9JU09Gb3JtYXRQYXJzZXIudHMiLCAiLi4vLi4vLi4vLi4vLi4vLi4vVm9sdW1lcy9EYXRhL2hvbWUvcGx1Z2lucy9jb2xsZWN0aW9uL3JheWNhc3QvY29tcGFuaW9uL25vZGVfbW9kdWxlcy9jaHJvbm8tbm9kZS9zcmMvY29tbW9uL3JlZmluZXJzL01lcmdlV2Vla2RheUNvbXBvbmVudFJlZmluZXIudHMiLCAiLi4vLi4vLi4vLi4vLi4vLi4vVm9sdW1lcy9EYXRhL2hvbWUvcGx1Z2lucy9jb2xsZWN0aW9uL3JheWNhc3QvY29tcGFuaW9uL25vZGVfbW9kdWxlcy9jaHJvbm8tbm9kZS9zcmMvY29uZmlndXJhdGlvbnMudHMiLCAiLi4vLi4vLi4vLi4vLi4vLi4vVm9sdW1lcy9EYXRhL2hvbWUvcGx1Z2lucy9jb2xsZWN0aW9uL3JheWNhc3QvY29tcGFuaW9uL25vZGVfbW9kdWxlcy9jaHJvbm8tbm9kZS9zcmMvbG9jYWxlcy9lbi9wYXJzZXJzL0VOQ2FzdWFsRGF0ZVBhcnNlci50cyIsICIuLi8uLi8uLi8uLi8uLi8uLi9Wb2x1bWVzL0RhdGEvaG9tZS9wbHVnaW5zL2NvbGxlY3Rpb24vcmF5Y2FzdC9jb21wYW5pb24vbm9kZV9tb2R1bGVzL2Nocm9uby1ub2RlL3NyYy9jb21tb24vY2FzdWFsUmVmZXJlbmNlcy50cyIsICIuLi8uLi8uLi8uLi8uLi8uLi9Wb2x1bWVzL0RhdGEvaG9tZS9wbHVnaW5zL2NvbGxlY3Rpb24vcmF5Y2FzdC9jb21wYW5pb24vbm9kZV9tb2R1bGVzL2Nocm9uby1ub2RlL3NyYy9sb2NhbGVzL2VuL3BhcnNlcnMvRU5DYXN1YWxUaW1lUGFyc2VyLnRzIiwgIi4uLy4uLy4uLy4uLy4uLy4uL1ZvbHVtZXMvRGF0YS9ob21lL3BsdWdpbnMvY29sbGVjdGlvbi9yYXljYXN0L2NvbXBhbmlvbi9ub2RlX21vZHVsZXMvY2hyb25vLW5vZGUvc3JjL3V0aWxzL3RpbWV1bml0cy50cyIsICIuLi8uLi8uLi8uLi8uLi8uLi9Wb2x1bWVzL0RhdGEvaG9tZS9wbHVnaW5zL2NvbGxlY3Rpb24vcmF5Y2FzdC9jb21wYW5pb24vbm9kZV9tb2R1bGVzL2Nocm9uby1ub2RlL3NyYy9jYWxjdWxhdGlvbi93ZWVrZGF5cy50cyIsICIuLi8uLi8uLi8uLi8uLi8uLi9Wb2x1bWVzL0RhdGEvaG9tZS9wbHVnaW5zL2NvbGxlY3Rpb24vcmF5Y2FzdC9jb21wYW5pb24vbm9kZV9tb2R1bGVzL2Nocm9uby1ub2RlL3NyYy9sb2NhbGVzL2VuL3BhcnNlcnMvRU5XZWVrZGF5UGFyc2VyLnRzIiwgIi4uLy4uLy4uLy4uLy4uLy4uL1ZvbHVtZXMvRGF0YS9ob21lL3BsdWdpbnMvY29sbGVjdGlvbi9yYXljYXN0L2NvbXBhbmlvbi9ub2RlX21vZHVsZXMvY2hyb25vLW5vZGUvc3JjL2xvY2FsZXMvZW4vcGFyc2Vycy9FTlJlbGF0aXZlRGF0ZUZvcm1hdFBhcnNlci50cyIsICIuLi8uLi8uLi8uLi8uLi8uLi9Wb2x1bWVzL0RhdGEvaG9tZS9wbHVnaW5zL2NvbGxlY3Rpb24vcmF5Y2FzdC9jb21wYW5pb24vbm9kZV9tb2R1bGVzL2Nocm9uby1ub2RlL3NyYy9jb21tb24vcGFyc2Vycy9TbGFzaERhdGVGb3JtYXRQYXJzZXIudHMiLCAiLi4vLi4vLi4vLi4vLi4vLi4vVm9sdW1lcy9EYXRhL2hvbWUvcGx1Z2lucy9jb2xsZWN0aW9uL3JheWNhc3QvY29tcGFuaW9uL25vZGVfbW9kdWxlcy9jaHJvbm8tbm9kZS9zcmMvbG9jYWxlcy9lbi9wYXJzZXJzL0VOVGltZVVuaXRDYXN1YWxSZWxhdGl2ZUZvcm1hdFBhcnNlci50cyIsICIuLi8uLi8uLi8uLi8uLi8uLi9Wb2x1bWVzL0RhdGEvaG9tZS9wbHVnaW5zL2NvbGxlY3Rpb24vcmF5Y2FzdC9jb21wYW5pb24vbm9kZV9tb2R1bGVzL2Nocm9uby1ub2RlL3NyYy9sb2NhbGVzL2VuL3JlZmluZXJzL0VOTWVyZ2VSZWxhdGl2ZUFmdGVyRGF0ZVJlZmluZXIudHMiLCAiLi4vLi4vLi4vLi4vLi4vLi4vVm9sdW1lcy9EYXRhL2hvbWUvcGx1Z2lucy9jb2xsZWN0aW9uL3JheWNhc3QvY29tcGFuaW9uL25vZGVfbW9kdWxlcy9jaHJvbm8tbm9kZS9zcmMvbG9jYWxlcy9lbi9yZWZpbmVycy9FTk1lcmdlUmVsYXRpdmVGb2xsb3dCeURhdGVSZWZpbmVyLnRzIiwgIi4uLy4uLy4uLy4uLy4uLy4uL1ZvbHVtZXMvRGF0YS9ob21lL3BsdWdpbnMvY29sbGVjdGlvbi9yYXljYXN0L2NvbXBhbmlvbi9ub2RlX21vZHVsZXMvY2hyb25vLW5vZGUvc3JjL2xvY2FsZXMvZW4vcmVmaW5lcnMvRU5FeHRyYWN0WWVhclN1ZmZpeFJlZmluZXIudHMiLCAiLi4vLi4vLi4vLi4vLi4vLi4vVm9sdW1lcy9EYXRhL2hvbWUvcGx1Z2lucy9jb2xsZWN0aW9uL3JheWNhc3QvY29tcGFuaW9uL25vZGVfbW9kdWxlcy9jaHJvbm8tbm9kZS9zcmMvbG9jYWxlcy9lbi9yZWZpbmVycy9FTlVubGlrZWx5Rm9ybWF0RmlsdGVyLnRzIiwgIi4uLy4uLy4uLy4uLy4uLy4uL1ZvbHVtZXMvRGF0YS9ob21lL3BsdWdpbnMvY29sbGVjdGlvbi9yYXljYXN0L2NvbXBhbmlvbi9ub2RlX21vZHVsZXMvY2hyb25vLW5vZGUvc3JjL2xvY2FsZXMvZW4vY29uZmlndXJhdGlvbi50cyIsICIuLi8uLi8uLi8uLi8uLi8uLi9Wb2x1bWVzL0RhdGEvaG9tZS9wbHVnaW5zL2NvbGxlY3Rpb24vcmF5Y2FzdC9jb21wYW5pb24vbm9kZV9tb2R1bGVzL2Nocm9uby1ub2RlL3NyYy9jaHJvbm8udHMiLCAiLi4vLi4vLi4vLi4vLi4vLi4vVm9sdW1lcy9EYXRhL2hvbWUvcGx1Z2lucy9jb2xsZWN0aW9uL3JheWNhc3QvY29tcGFuaW9uL25vZGVfbW9kdWxlcy9jaHJvbm8tbm9kZS9zcmMvbG9jYWxlcy9lbi9pbmRleC50cyIsICIuLi8uLi8uLi8uLi8uLi8uLi9Wb2x1bWVzL0RhdGEvaG9tZS9wbHVnaW5zL2NvbGxlY3Rpb24vcmF5Y2FzdC9jb21wYW5pb24vbm9kZV9tb2R1bGVzL2Nocm9uby1ub2RlL3NyYy9pbmRleC50cyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiIWZ1bmN0aW9uKHQsbil7XCJvYmplY3RcIj09dHlwZW9mIGV4cG9ydHMmJlwidW5kZWZpbmVkXCIhPXR5cGVvZiBtb2R1bGU/bW9kdWxlLmV4cG9ydHM9bigpOlwiZnVuY3Rpb25cIj09dHlwZW9mIGRlZmluZSYmZGVmaW5lLmFtZD9kZWZpbmUobik6KHQ9XCJ1bmRlZmluZWRcIiE9dHlwZW9mIGdsb2JhbFRoaXM/Z2xvYmFsVGhpczp0fHxzZWxmKS5kYXlqc19wbHVnaW5fcXVhcnRlck9mWWVhcj1uKCl9KHRoaXMsKGZ1bmN0aW9uKCl7XCJ1c2Ugc3RyaWN0XCI7dmFyIHQ9XCJtb250aFwiLG49XCJxdWFydGVyXCI7cmV0dXJuIGZ1bmN0aW9uKGUsaSl7dmFyIHI9aS5wcm90b3R5cGU7ci5xdWFydGVyPWZ1bmN0aW9uKHQpe3JldHVybiB0aGlzLiR1dGlscygpLnUodCk/TWF0aC5jZWlsKCh0aGlzLm1vbnRoKCkrMSkvMyk6dGhpcy5tb250aCh0aGlzLm1vbnRoKCklMyszKih0LTEpKX07dmFyIHM9ci5hZGQ7ci5hZGQ9ZnVuY3Rpb24oZSxpKXtyZXR1cm4gZT1OdW1iZXIoZSksdGhpcy4kdXRpbHMoKS5wKGkpPT09bj90aGlzLmFkZCgzKmUsdCk6cy5iaW5kKHRoaXMpKGUsaSl9O3ZhciB1PXIuc3RhcnRPZjtyLnN0YXJ0T2Y9ZnVuY3Rpb24oZSxpKXt2YXIgcj10aGlzLiR1dGlscygpLHM9ISFyLnUoaSl8fGk7aWYoci5wKGUpPT09bil7dmFyIG89dGhpcy5xdWFydGVyKCktMTtyZXR1cm4gcz90aGlzLm1vbnRoKDMqbykuc3RhcnRPZih0KS5zdGFydE9mKFwiZGF5XCIpOnRoaXMubW9udGgoMypvKzIpLmVuZE9mKHQpLmVuZE9mKFwiZGF5XCIpfXJldHVybiB1LmJpbmQodGhpcykoZSxpKX19fSkpOyIsICIhZnVuY3Rpb24odCxlKXtcIm9iamVjdFwiPT10eXBlb2YgZXhwb3J0cyYmXCJ1bmRlZmluZWRcIiE9dHlwZW9mIG1vZHVsZT9tb2R1bGUuZXhwb3J0cz1lKCk6XCJmdW5jdGlvblwiPT10eXBlb2YgZGVmaW5lJiZkZWZpbmUuYW1kP2RlZmluZShlKToodD1cInVuZGVmaW5lZFwiIT10eXBlb2YgZ2xvYmFsVGhpcz9nbG9iYWxUaGlzOnR8fHNlbGYpLmRheWpzPWUoKX0odGhpcywoZnVuY3Rpb24oKXtcInVzZSBzdHJpY3RcIjt2YXIgdD0xZTMsZT02ZTQsbj0zNmU1LHI9XCJtaWxsaXNlY29uZFwiLGk9XCJzZWNvbmRcIixzPVwibWludXRlXCIsdT1cImhvdXJcIixhPVwiZGF5XCIsbz1cIndlZWtcIixjPVwibW9udGhcIixmPVwicXVhcnRlclwiLGg9XCJ5ZWFyXCIsZD1cImRhdGVcIixsPVwiSW52YWxpZCBEYXRlXCIsJD0vXihcXGR7NH0pWy0vXT8oXFxkezEsMn0pP1stL10/KFxcZHswLDJ9KVtUdFxcc10qKFxcZHsxLDJ9KT86PyhcXGR7MSwyfSk/Oj8oXFxkezEsMn0pP1suOl0/KFxcZCspPyQvLHk9L1xcWyhbXlxcXV0rKV18WXsxLDR9fE17MSw0fXxEezEsMn18ZHsxLDR9fEh7MSwyfXxoezEsMn18YXxBfG17MSwyfXxzezEsMn18WnsxLDJ9fFNTUy9nLE09e25hbWU6XCJlblwiLHdlZWtkYXlzOlwiU3VuZGF5X01vbmRheV9UdWVzZGF5X1dlZG5lc2RheV9UaHVyc2RheV9GcmlkYXlfU2F0dXJkYXlcIi5zcGxpdChcIl9cIiksbW9udGhzOlwiSmFudWFyeV9GZWJydWFyeV9NYXJjaF9BcHJpbF9NYXlfSnVuZV9KdWx5X0F1Z3VzdF9TZXB0ZW1iZXJfT2N0b2Jlcl9Ob3ZlbWJlcl9EZWNlbWJlclwiLnNwbGl0KFwiX1wiKSxvcmRpbmFsOmZ1bmN0aW9uKHQpe3ZhciBlPVtcInRoXCIsXCJzdFwiLFwibmRcIixcInJkXCJdLG49dCUxMDA7cmV0dXJuXCJbXCIrdCsoZVsobi0yMCklMTBdfHxlW25dfHxlWzBdKStcIl1cIn19LG09ZnVuY3Rpb24odCxlLG4pe3ZhciByPVN0cmluZyh0KTtyZXR1cm4hcnx8ci5sZW5ndGg+PWU/dDpcIlwiK0FycmF5KGUrMS1yLmxlbmd0aCkuam9pbihuKSt0fSx2PXtzOm0sejpmdW5jdGlvbih0KXt2YXIgZT0tdC51dGNPZmZzZXQoKSxuPU1hdGguYWJzKGUpLHI9TWF0aC5mbG9vcihuLzYwKSxpPW4lNjA7cmV0dXJuKGU8PTA/XCIrXCI6XCItXCIpK20ociwyLFwiMFwiKStcIjpcIittKGksMixcIjBcIil9LG06ZnVuY3Rpb24gdChlLG4pe2lmKGUuZGF0ZSgpPG4uZGF0ZSgpKXJldHVybi10KG4sZSk7dmFyIHI9MTIqKG4ueWVhcigpLWUueWVhcigpKSsobi5tb250aCgpLWUubW9udGgoKSksaT1lLmNsb25lKCkuYWRkKHIsYykscz1uLWk8MCx1PWUuY2xvbmUoKS5hZGQocisocz8tMToxKSxjKTtyZXR1cm4rKC0ocisobi1pKS8ocz9pLXU6dS1pKSl8fDApfSxhOmZ1bmN0aW9uKHQpe3JldHVybiB0PDA/TWF0aC5jZWlsKHQpfHwwOk1hdGguZmxvb3IodCl9LHA6ZnVuY3Rpb24odCl7cmV0dXJue006Yyx5OmgsdzpvLGQ6YSxEOmQsaDp1LG06cyxzOmksbXM6cixROmZ9W3RdfHxTdHJpbmcodHx8XCJcIikudG9Mb3dlckNhc2UoKS5yZXBsYWNlKC9zJC8sXCJcIil9LHU6ZnVuY3Rpb24odCl7cmV0dXJuIHZvaWQgMD09PXR9fSxnPVwiZW5cIixEPXt9O0RbZ109TTt2YXIgcD1cIiRpc0RheWpzT2JqZWN0XCIsUz1mdW5jdGlvbih0KXtyZXR1cm4gdCBpbnN0YW5jZW9mIF98fCEoIXR8fCF0W3BdKX0sdz1mdW5jdGlvbiB0KGUsbixyKXt2YXIgaTtpZighZSlyZXR1cm4gZztpZihcInN0cmluZ1wiPT10eXBlb2YgZSl7dmFyIHM9ZS50b0xvd2VyQ2FzZSgpO0Rbc10mJihpPXMpLG4mJihEW3NdPW4saT1zKTt2YXIgdT1lLnNwbGl0KFwiLVwiKTtpZighaSYmdS5sZW5ndGg+MSlyZXR1cm4gdCh1WzBdKX1lbHNle3ZhciBhPWUubmFtZTtEW2FdPWUsaT1hfXJldHVybiFyJiZpJiYoZz1pKSxpfHwhciYmZ30sTz1mdW5jdGlvbih0LGUpe2lmKFModCkpcmV0dXJuIHQuY2xvbmUoKTt2YXIgbj1cIm9iamVjdFwiPT10eXBlb2YgZT9lOnt9O3JldHVybiBuLmRhdGU9dCxuLmFyZ3M9YXJndW1lbnRzLG5ldyBfKG4pfSxiPXY7Yi5sPXcsYi5pPVMsYi53PWZ1bmN0aW9uKHQsZSl7cmV0dXJuIE8odCx7bG9jYWxlOmUuJEwsdXRjOmUuJHUseDplLiR4LCRvZmZzZXQ6ZS4kb2Zmc2V0fSl9O3ZhciBfPWZ1bmN0aW9uKCl7ZnVuY3Rpb24gTSh0KXt0aGlzLiRMPXcodC5sb2NhbGUsbnVsbCwhMCksdGhpcy5wYXJzZSh0KSx0aGlzLiR4PXRoaXMuJHh8fHQueHx8e30sdGhpc1twXT0hMH12YXIgbT1NLnByb3RvdHlwZTtyZXR1cm4gbS5wYXJzZT1mdW5jdGlvbih0KXt0aGlzLiRkPWZ1bmN0aW9uKHQpe3ZhciBlPXQuZGF0ZSxuPXQudXRjO2lmKG51bGw9PT1lKXJldHVybiBuZXcgRGF0ZShOYU4pO2lmKGIudShlKSlyZXR1cm4gbmV3IERhdGU7aWYoZSBpbnN0YW5jZW9mIERhdGUpcmV0dXJuIG5ldyBEYXRlKGUpO2lmKFwic3RyaW5nXCI9PXR5cGVvZiBlJiYhL1okL2kudGVzdChlKSl7dmFyIHI9ZS5tYXRjaCgkKTtpZihyKXt2YXIgaT1yWzJdLTF8fDAscz0ocls3XXx8XCIwXCIpLnN1YnN0cmluZygwLDMpO3JldHVybiBuP25ldyBEYXRlKERhdGUuVVRDKHJbMV0saSxyWzNdfHwxLHJbNF18fDAscls1XXx8MCxyWzZdfHwwLHMpKTpuZXcgRGF0ZShyWzFdLGksclszXXx8MSxyWzRdfHwwLHJbNV18fDAscls2XXx8MCxzKX19cmV0dXJuIG5ldyBEYXRlKGUpfSh0KSx0aGlzLmluaXQoKX0sbS5pbml0PWZ1bmN0aW9uKCl7dmFyIHQ9dGhpcy4kZDt0aGlzLiR5PXQuZ2V0RnVsbFllYXIoKSx0aGlzLiRNPXQuZ2V0TW9udGgoKSx0aGlzLiREPXQuZ2V0RGF0ZSgpLHRoaXMuJFc9dC5nZXREYXkoKSx0aGlzLiRIPXQuZ2V0SG91cnMoKSx0aGlzLiRtPXQuZ2V0TWludXRlcygpLHRoaXMuJHM9dC5nZXRTZWNvbmRzKCksdGhpcy4kbXM9dC5nZXRNaWxsaXNlY29uZHMoKX0sbS4kdXRpbHM9ZnVuY3Rpb24oKXtyZXR1cm4gYn0sbS5pc1ZhbGlkPWZ1bmN0aW9uKCl7cmV0dXJuISh0aGlzLiRkLnRvU3RyaW5nKCk9PT1sKX0sbS5pc1NhbWU9ZnVuY3Rpb24odCxlKXt2YXIgbj1PKHQpO3JldHVybiB0aGlzLnN0YXJ0T2YoZSk8PW4mJm48PXRoaXMuZW5kT2YoZSl9LG0uaXNBZnRlcj1mdW5jdGlvbih0LGUpe3JldHVybiBPKHQpPHRoaXMuc3RhcnRPZihlKX0sbS5pc0JlZm9yZT1mdW5jdGlvbih0LGUpe3JldHVybiB0aGlzLmVuZE9mKGUpPE8odCl9LG0uJGc9ZnVuY3Rpb24odCxlLG4pe3JldHVybiBiLnUodCk/dGhpc1tlXTp0aGlzLnNldChuLHQpfSxtLnVuaXg9ZnVuY3Rpb24oKXtyZXR1cm4gTWF0aC5mbG9vcih0aGlzLnZhbHVlT2YoKS8xZTMpfSxtLnZhbHVlT2Y9ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy4kZC5nZXRUaW1lKCl9LG0uc3RhcnRPZj1mdW5jdGlvbih0LGUpe3ZhciBuPXRoaXMscj0hIWIudShlKXx8ZSxmPWIucCh0KSxsPWZ1bmN0aW9uKHQsZSl7dmFyIGk9Yi53KG4uJHU/RGF0ZS5VVEMobi4keSxlLHQpOm5ldyBEYXRlKG4uJHksZSx0KSxuKTtyZXR1cm4gcj9pOmkuZW5kT2YoYSl9LCQ9ZnVuY3Rpb24odCxlKXtyZXR1cm4gYi53KG4udG9EYXRlKClbdF0uYXBwbHkobi50b0RhdGUoXCJzXCIpLChyP1swLDAsMCwwXTpbMjMsNTksNTksOTk5XSkuc2xpY2UoZSkpLG4pfSx5PXRoaXMuJFcsTT10aGlzLiRNLG09dGhpcy4kRCx2PVwic2V0XCIrKHRoaXMuJHU/XCJVVENcIjpcIlwiKTtzd2l0Y2goZil7Y2FzZSBoOnJldHVybiByP2woMSwwKTpsKDMxLDExKTtjYXNlIGM6cmV0dXJuIHI/bCgxLE0pOmwoMCxNKzEpO2Nhc2Ugbzp2YXIgZz10aGlzLiRsb2NhbGUoKS53ZWVrU3RhcnR8fDAsRD0oeTxnP3krNzp5KS1nO3JldHVybiBsKHI/bS1EOm0rKDYtRCksTSk7Y2FzZSBhOmNhc2UgZDpyZXR1cm4gJCh2K1wiSG91cnNcIiwwKTtjYXNlIHU6cmV0dXJuICQoditcIk1pbnV0ZXNcIiwxKTtjYXNlIHM6cmV0dXJuICQoditcIlNlY29uZHNcIiwyKTtjYXNlIGk6cmV0dXJuICQoditcIk1pbGxpc2Vjb25kc1wiLDMpO2RlZmF1bHQ6cmV0dXJuIHRoaXMuY2xvbmUoKX19LG0uZW5kT2Y9ZnVuY3Rpb24odCl7cmV0dXJuIHRoaXMuc3RhcnRPZih0LCExKX0sbS4kc2V0PWZ1bmN0aW9uKHQsZSl7dmFyIG4sbz1iLnAodCksZj1cInNldFwiKyh0aGlzLiR1P1wiVVRDXCI6XCJcIiksbD0obj17fSxuW2FdPWYrXCJEYXRlXCIsbltkXT1mK1wiRGF0ZVwiLG5bY109ZitcIk1vbnRoXCIsbltoXT1mK1wiRnVsbFllYXJcIixuW3VdPWYrXCJIb3Vyc1wiLG5bc109ZitcIk1pbnV0ZXNcIixuW2ldPWYrXCJTZWNvbmRzXCIsbltyXT1mK1wiTWlsbGlzZWNvbmRzXCIsbilbb10sJD1vPT09YT90aGlzLiREKyhlLXRoaXMuJFcpOmU7aWYobz09PWN8fG89PT1oKXt2YXIgeT10aGlzLmNsb25lKCkuc2V0KGQsMSk7eS4kZFtsXSgkKSx5LmluaXQoKSx0aGlzLiRkPXkuc2V0KGQsTWF0aC5taW4odGhpcy4kRCx5LmRheXNJbk1vbnRoKCkpKS4kZH1lbHNlIGwmJnRoaXMuJGRbbF0oJCk7cmV0dXJuIHRoaXMuaW5pdCgpLHRoaXN9LG0uc2V0PWZ1bmN0aW9uKHQsZSl7cmV0dXJuIHRoaXMuY2xvbmUoKS4kc2V0KHQsZSl9LG0uZ2V0PWZ1bmN0aW9uKHQpe3JldHVybiB0aGlzW2IucCh0KV0oKX0sbS5hZGQ9ZnVuY3Rpb24ocixmKXt2YXIgZCxsPXRoaXM7cj1OdW1iZXIocik7dmFyICQ9Yi5wKGYpLHk9ZnVuY3Rpb24odCl7dmFyIGU9TyhsKTtyZXR1cm4gYi53KGUuZGF0ZShlLmRhdGUoKStNYXRoLnJvdW5kKHQqcikpLGwpfTtpZigkPT09YylyZXR1cm4gdGhpcy5zZXQoYyx0aGlzLiRNK3IpO2lmKCQ9PT1oKXJldHVybiB0aGlzLnNldChoLHRoaXMuJHkrcik7aWYoJD09PWEpcmV0dXJuIHkoMSk7aWYoJD09PW8pcmV0dXJuIHkoNyk7dmFyIE09KGQ9e30sZFtzXT1lLGRbdV09bixkW2ldPXQsZClbJF18fDEsbT10aGlzLiRkLmdldFRpbWUoKStyKk07cmV0dXJuIGIudyhtLHRoaXMpfSxtLnN1YnRyYWN0PWZ1bmN0aW9uKHQsZSl7cmV0dXJuIHRoaXMuYWRkKC0xKnQsZSl9LG0uZm9ybWF0PWZ1bmN0aW9uKHQpe3ZhciBlPXRoaXMsbj10aGlzLiRsb2NhbGUoKTtpZighdGhpcy5pc1ZhbGlkKCkpcmV0dXJuIG4uaW52YWxpZERhdGV8fGw7dmFyIHI9dHx8XCJZWVlZLU1NLUREVEhIOm1tOnNzWlwiLGk9Yi56KHRoaXMpLHM9dGhpcy4kSCx1PXRoaXMuJG0sYT10aGlzLiRNLG89bi53ZWVrZGF5cyxjPW4ubW9udGhzLGY9bi5tZXJpZGllbSxoPWZ1bmN0aW9uKHQsbixpLHMpe3JldHVybiB0JiYodFtuXXx8dChlLHIpKXx8aVtuXS5zbGljZSgwLHMpfSxkPWZ1bmN0aW9uKHQpe3JldHVybiBiLnMocyUxMnx8MTIsdCxcIjBcIil9LCQ9Znx8ZnVuY3Rpb24odCxlLG4pe3ZhciByPXQ8MTI/XCJBTVwiOlwiUE1cIjtyZXR1cm4gbj9yLnRvTG93ZXJDYXNlKCk6cn07cmV0dXJuIHIucmVwbGFjZSh5LChmdW5jdGlvbih0LHIpe3JldHVybiByfHxmdW5jdGlvbih0KXtzd2l0Y2godCl7Y2FzZVwiWVlcIjpyZXR1cm4gU3RyaW5nKGUuJHkpLnNsaWNlKC0yKTtjYXNlXCJZWVlZXCI6cmV0dXJuIGIucyhlLiR5LDQsXCIwXCIpO2Nhc2VcIk1cIjpyZXR1cm4gYSsxO2Nhc2VcIk1NXCI6cmV0dXJuIGIucyhhKzEsMixcIjBcIik7Y2FzZVwiTU1NXCI6cmV0dXJuIGgobi5tb250aHNTaG9ydCxhLGMsMyk7Y2FzZVwiTU1NTVwiOnJldHVybiBoKGMsYSk7Y2FzZVwiRFwiOnJldHVybiBlLiREO2Nhc2VcIkREXCI6cmV0dXJuIGIucyhlLiRELDIsXCIwXCIpO2Nhc2VcImRcIjpyZXR1cm4gU3RyaW5nKGUuJFcpO2Nhc2VcImRkXCI6cmV0dXJuIGgobi53ZWVrZGF5c01pbixlLiRXLG8sMik7Y2FzZVwiZGRkXCI6cmV0dXJuIGgobi53ZWVrZGF5c1Nob3J0LGUuJFcsbywzKTtjYXNlXCJkZGRkXCI6cmV0dXJuIG9bZS4kV107Y2FzZVwiSFwiOnJldHVybiBTdHJpbmcocyk7Y2FzZVwiSEhcIjpyZXR1cm4gYi5zKHMsMixcIjBcIik7Y2FzZVwiaFwiOnJldHVybiBkKDEpO2Nhc2VcImhoXCI6cmV0dXJuIGQoMik7Y2FzZVwiYVwiOnJldHVybiAkKHMsdSwhMCk7Y2FzZVwiQVwiOnJldHVybiAkKHMsdSwhMSk7Y2FzZVwibVwiOnJldHVybiBTdHJpbmcodSk7Y2FzZVwibW1cIjpyZXR1cm4gYi5zKHUsMixcIjBcIik7Y2FzZVwic1wiOnJldHVybiBTdHJpbmcoZS4kcyk7Y2FzZVwic3NcIjpyZXR1cm4gYi5zKGUuJHMsMixcIjBcIik7Y2FzZVwiU1NTXCI6cmV0dXJuIGIucyhlLiRtcywzLFwiMFwiKTtjYXNlXCJaXCI6cmV0dXJuIGl9cmV0dXJuIG51bGx9KHQpfHxpLnJlcGxhY2UoXCI6XCIsXCJcIil9KSl9LG0udXRjT2Zmc2V0PWZ1bmN0aW9uKCl7cmV0dXJuIDE1Ki1NYXRoLnJvdW5kKHRoaXMuJGQuZ2V0VGltZXpvbmVPZmZzZXQoKS8xNSl9LG0uZGlmZj1mdW5jdGlvbihyLGQsbCl7dmFyICQseT10aGlzLE09Yi5wKGQpLG09TyhyKSx2PShtLnV0Y09mZnNldCgpLXRoaXMudXRjT2Zmc2V0KCkpKmUsZz10aGlzLW0sRD1mdW5jdGlvbigpe3JldHVybiBiLm0oeSxtKX07c3dpdGNoKE0pe2Nhc2UgaDokPUQoKS8xMjticmVhaztjYXNlIGM6JD1EKCk7YnJlYWs7Y2FzZSBmOiQ9RCgpLzM7YnJlYWs7Y2FzZSBvOiQ9KGctdikvNjA0OGU1O2JyZWFrO2Nhc2UgYTokPShnLXYpLzg2NGU1O2JyZWFrO2Nhc2UgdTokPWcvbjticmVhaztjYXNlIHM6JD1nL2U7YnJlYWs7Y2FzZSBpOiQ9Zy90O2JyZWFrO2RlZmF1bHQ6JD1nfXJldHVybiBsPyQ6Yi5hKCQpfSxtLmRheXNJbk1vbnRoPWZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuZW5kT2YoYykuJER9LG0uJGxvY2FsZT1mdW5jdGlvbigpe3JldHVybiBEW3RoaXMuJExdfSxtLmxvY2FsZT1mdW5jdGlvbih0LGUpe2lmKCF0KXJldHVybiB0aGlzLiRMO3ZhciBuPXRoaXMuY2xvbmUoKSxyPXcodCxlLCEwKTtyZXR1cm4gciYmKG4uJEw9ciksbn0sbS5jbG9uZT1mdW5jdGlvbigpe3JldHVybiBiLncodGhpcy4kZCx0aGlzKX0sbS50b0RhdGU9ZnVuY3Rpb24oKXtyZXR1cm4gbmV3IERhdGUodGhpcy52YWx1ZU9mKCkpfSxtLnRvSlNPTj1mdW5jdGlvbigpe3JldHVybiB0aGlzLmlzVmFsaWQoKT90aGlzLnRvSVNPU3RyaW5nKCk6bnVsbH0sbS50b0lTT1N0cmluZz1mdW5jdGlvbigpe3JldHVybiB0aGlzLiRkLnRvSVNPU3RyaW5nKCl9LG0udG9TdHJpbmc9ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy4kZC50b1VUQ1N0cmluZygpfSxNfSgpLGs9Xy5wcm90b3R5cGU7cmV0dXJuIE8ucHJvdG90eXBlPWssW1tcIiRtc1wiLHJdLFtcIiRzXCIsaV0sW1wiJG1cIixzXSxbXCIkSFwiLHVdLFtcIiRXXCIsYV0sW1wiJE1cIixjXSxbXCIkeVwiLGhdLFtcIiREXCIsZF1dLmZvckVhY2goKGZ1bmN0aW9uKHQpe2tbdFsxXV09ZnVuY3Rpb24oZSl7cmV0dXJuIHRoaXMuJGcoZSx0WzBdLHRbMV0pfX0pKSxPLmV4dGVuZD1mdW5jdGlvbih0LGUpe3JldHVybiB0LiRpfHwodChlLF8sTyksdC4kaT0hMCksT30sTy5sb2NhbGU9dyxPLmlzRGF5anM9UyxPLnVuaXg9ZnVuY3Rpb24odCl7cmV0dXJuIE8oMWUzKnQpfSxPLmVuPURbZ10sTy5Mcz1ELE8ucD17fSxPfSkpOyIsICIhZnVuY3Rpb24oZSx0KXtcIm9iamVjdFwiPT10eXBlb2YgZXhwb3J0cyYmXCJ1bmRlZmluZWRcIiE9dHlwZW9mIG1vZHVsZT9tb2R1bGUuZXhwb3J0cz10KCk6XCJmdW5jdGlvblwiPT10eXBlb2YgZGVmaW5lJiZkZWZpbmUuYW1kP2RlZmluZSh0KTooZT1cInVuZGVmaW5lZFwiIT10eXBlb2YgZ2xvYmFsVGhpcz9nbG9iYWxUaGlzOmV8fHNlbGYpLmRheWpzX3BsdWdpbl9hZHZhbmNlZEZvcm1hdD10KCl9KHRoaXMsKGZ1bmN0aW9uKCl7XCJ1c2Ugc3RyaWN0XCI7cmV0dXJuIGZ1bmN0aW9uKGUsdCl7dmFyIHI9dC5wcm90b3R5cGUsbj1yLmZvcm1hdDtyLmZvcm1hdD1mdW5jdGlvbihlKXt2YXIgdD10aGlzLHI9dGhpcy4kbG9jYWxlKCk7aWYoIXRoaXMuaXNWYWxpZCgpKXJldHVybiBuLmJpbmQodGhpcykoZSk7dmFyIHM9dGhpcy4kdXRpbHMoKSxhPShlfHxcIllZWVktTU0tRERUSEg6bW06c3NaXCIpLnJlcGxhY2UoL1xcWyhbXlxcXV0rKV18UXx3b3x3d3x3fFdXfFd8enp6fHp8Z2dnZ3xHR0dHfERvfFh8eHxrezEsMn18Uy9nLChmdW5jdGlvbihlKXtzd2l0Y2goZSl7Y2FzZVwiUVwiOnJldHVybiBNYXRoLmNlaWwoKHQuJE0rMSkvMyk7Y2FzZVwiRG9cIjpyZXR1cm4gci5vcmRpbmFsKHQuJEQpO2Nhc2VcImdnZ2dcIjpyZXR1cm4gdC53ZWVrWWVhcigpO2Nhc2VcIkdHR0dcIjpyZXR1cm4gdC5pc29XZWVrWWVhcigpO2Nhc2VcIndvXCI6cmV0dXJuIHIub3JkaW5hbCh0LndlZWsoKSxcIldcIik7Y2FzZVwid1wiOmNhc2VcInd3XCI6cmV0dXJuIHMucyh0LndlZWsoKSxcIndcIj09PWU/MToyLFwiMFwiKTtjYXNlXCJXXCI6Y2FzZVwiV1dcIjpyZXR1cm4gcy5zKHQuaXNvV2VlaygpLFwiV1wiPT09ZT8xOjIsXCIwXCIpO2Nhc2VcImtcIjpjYXNlXCJra1wiOnJldHVybiBzLnMoU3RyaW5nKDA9PT10LiRIPzI0OnQuJEgpLFwia1wiPT09ZT8xOjIsXCIwXCIpO2Nhc2VcIlhcIjpyZXR1cm4gTWF0aC5mbG9vcih0LiRkLmdldFRpbWUoKS8xZTMpO2Nhc2VcInhcIjpyZXR1cm4gdC4kZC5nZXRUaW1lKCk7Y2FzZVwielwiOnJldHVyblwiW1wiK3Qub2Zmc2V0TmFtZSgpK1wiXVwiO2Nhc2VcInp6elwiOnJldHVyblwiW1wiK3Qub2Zmc2V0TmFtZShcImxvbmdcIikrXCJdXCI7ZGVmYXVsdDpyZXR1cm4gZX19KSk7cmV0dXJuIG4uYmluZCh0aGlzKShhKX19fSkpOyIsICIhZnVuY3Rpb24oZSx0KXtcIm9iamVjdFwiPT10eXBlb2YgZXhwb3J0cyYmXCJ1bmRlZmluZWRcIiE9dHlwZW9mIG1vZHVsZT9tb2R1bGUuZXhwb3J0cz10KCk6XCJmdW5jdGlvblwiPT10eXBlb2YgZGVmaW5lJiZkZWZpbmUuYW1kP2RlZmluZSh0KTooZT1cInVuZGVmaW5lZFwiIT10eXBlb2YgZ2xvYmFsVGhpcz9nbG9iYWxUaGlzOmV8fHNlbGYpLmRheWpzX3BsdWdpbl93ZWVrT2ZZZWFyPXQoKX0odGhpcywoZnVuY3Rpb24oKXtcInVzZSBzdHJpY3RcIjt2YXIgZT1cIndlZWtcIix0PVwieWVhclwiO3JldHVybiBmdW5jdGlvbihpLG4scil7dmFyIGY9bi5wcm90b3R5cGU7Zi53ZWVrPWZ1bmN0aW9uKGkpe2lmKHZvaWQgMD09PWkmJihpPW51bGwpLG51bGwhPT1pKXJldHVybiB0aGlzLmFkZCg3KihpLXRoaXMud2VlaygpKSxcImRheVwiKTt2YXIgbj10aGlzLiRsb2NhbGUoKS55ZWFyU3RhcnR8fDE7aWYoMTE9PT10aGlzLm1vbnRoKCkmJnRoaXMuZGF0ZSgpPjI1KXt2YXIgZj1yKHRoaXMpLnN0YXJ0T2YodCkuYWRkKDEsdCkuZGF0ZShuKSxzPXIodGhpcykuZW5kT2YoZSk7aWYoZi5pc0JlZm9yZShzKSlyZXR1cm4gMX12YXIgYT1yKHRoaXMpLnN0YXJ0T2YodCkuZGF0ZShuKS5zdGFydE9mKGUpLnN1YnRyYWN0KDEsXCJtaWxsaXNlY29uZFwiKSxvPXRoaXMuZGlmZihhLGUsITApO3JldHVybiBvPDA/cih0aGlzKS5zdGFydE9mKFwid2Vla1wiKS53ZWVrKCk6TWF0aC5jZWlsKG8pfSxmLndlZWtzPWZ1bmN0aW9uKGUpe3JldHVybiB2b2lkIDA9PT1lJiYoZT1udWxsKSx0aGlzLndlZWsoZSl9fX0pKTsiLCAiIWZ1bmN0aW9uKHQsaSl7XCJvYmplY3RcIj09dHlwZW9mIGV4cG9ydHMmJlwidW5kZWZpbmVkXCIhPXR5cGVvZiBtb2R1bGU/bW9kdWxlLmV4cG9ydHM9aSgpOlwiZnVuY3Rpb25cIj09dHlwZW9mIGRlZmluZSYmZGVmaW5lLmFtZD9kZWZpbmUoaSk6KHQ9XCJ1bmRlZmluZWRcIiE9dHlwZW9mIGdsb2JhbFRoaXM/Z2xvYmFsVGhpczp0fHxzZWxmKS5kYXlqc19wbHVnaW5fdXRjPWkoKX0odGhpcywoZnVuY3Rpb24oKXtcInVzZSBzdHJpY3RcIjt2YXIgdD1cIm1pbnV0ZVwiLGk9L1srLV1cXGRcXGQoPzo6P1xcZFxcZCk/L2csZT0vKFsrLV18XFxkXFxkKS9nO3JldHVybiBmdW5jdGlvbihzLGYsbil7dmFyIHU9Zi5wcm90b3R5cGU7bi51dGM9ZnVuY3Rpb24odCl7dmFyIGk9e2RhdGU6dCx1dGM6ITAsYXJnczphcmd1bWVudHN9O3JldHVybiBuZXcgZihpKX0sdS51dGM9ZnVuY3Rpb24oaSl7dmFyIGU9bih0aGlzLnRvRGF0ZSgpLHtsb2NhbGU6dGhpcy4kTCx1dGM6ITB9KTtyZXR1cm4gaT9lLmFkZCh0aGlzLnV0Y09mZnNldCgpLHQpOmV9LHUubG9jYWw9ZnVuY3Rpb24oKXtyZXR1cm4gbih0aGlzLnRvRGF0ZSgpLHtsb2NhbGU6dGhpcy4kTCx1dGM6ITF9KX07dmFyIG89dS5wYXJzZTt1LnBhcnNlPWZ1bmN0aW9uKHQpe3QudXRjJiYodGhpcy4kdT0hMCksdGhpcy4kdXRpbHMoKS51KHQuJG9mZnNldCl8fCh0aGlzLiRvZmZzZXQ9dC4kb2Zmc2V0KSxvLmNhbGwodGhpcyx0KX07dmFyIHI9dS5pbml0O3UuaW5pdD1mdW5jdGlvbigpe2lmKHRoaXMuJHUpe3ZhciB0PXRoaXMuJGQ7dGhpcy4keT10LmdldFVUQ0Z1bGxZZWFyKCksdGhpcy4kTT10LmdldFVUQ01vbnRoKCksdGhpcy4kRD10LmdldFVUQ0RhdGUoKSx0aGlzLiRXPXQuZ2V0VVRDRGF5KCksdGhpcy4kSD10LmdldFVUQ0hvdXJzKCksdGhpcy4kbT10LmdldFVUQ01pbnV0ZXMoKSx0aGlzLiRzPXQuZ2V0VVRDU2Vjb25kcygpLHRoaXMuJG1zPXQuZ2V0VVRDTWlsbGlzZWNvbmRzKCl9ZWxzZSByLmNhbGwodGhpcyl9O3ZhciBhPXUudXRjT2Zmc2V0O3UudXRjT2Zmc2V0PWZ1bmN0aW9uKHMsZil7dmFyIG49dGhpcy4kdXRpbHMoKS51O2lmKG4ocykpcmV0dXJuIHRoaXMuJHU/MDpuKHRoaXMuJG9mZnNldCk/YS5jYWxsKHRoaXMpOnRoaXMuJG9mZnNldDtpZihcInN0cmluZ1wiPT10eXBlb2YgcyYmKHM9ZnVuY3Rpb24odCl7dm9pZCAwPT09dCYmKHQ9XCJcIik7dmFyIHM9dC5tYXRjaChpKTtpZighcylyZXR1cm4gbnVsbDt2YXIgZj0oXCJcIitzWzBdKS5tYXRjaChlKXx8W1wiLVwiLDAsMF0sbj1mWzBdLHU9NjAqK2ZbMV0rICtmWzJdO3JldHVybiAwPT09dT8wOlwiK1wiPT09bj91Oi11fShzKSxudWxsPT09cykpcmV0dXJuIHRoaXM7dmFyIHU9TWF0aC5hYnMocyk8PTE2PzYwKnM6cyxvPXRoaXM7aWYoZilyZXR1cm4gby4kb2Zmc2V0PXUsby4kdT0wPT09cyxvO2lmKDAhPT1zKXt2YXIgcj10aGlzLiR1P3RoaXMudG9EYXRlKCkuZ2V0VGltZXpvbmVPZmZzZXQoKTotMSp0aGlzLnV0Y09mZnNldCgpOyhvPXRoaXMubG9jYWwoKS5hZGQodStyLHQpKS4kb2Zmc2V0PXUsby4keC4kbG9jYWxPZmZzZXQ9cn1lbHNlIG89dGhpcy51dGMoKTtyZXR1cm4gb307dmFyIGg9dS5mb3JtYXQ7dS5mb3JtYXQ9ZnVuY3Rpb24odCl7dmFyIGk9dHx8KHRoaXMuJHU/XCJZWVlZLU1NLUREVEhIOm1tOnNzW1pdXCI6XCJcIik7cmV0dXJuIGguY2FsbCh0aGlzLGkpfSx1LnZhbHVlT2Y9ZnVuY3Rpb24oKXt2YXIgdD10aGlzLiR1dGlscygpLnUodGhpcy4kb2Zmc2V0KT8wOnRoaXMuJG9mZnNldCsodGhpcy4keC4kbG9jYWxPZmZzZXR8fHRoaXMuJGQuZ2V0VGltZXpvbmVPZmZzZXQoKSk7cmV0dXJuIHRoaXMuJGQudmFsdWVPZigpLTZlNCp0fSx1LmlzVVRDPWZ1bmN0aW9uKCl7cmV0dXJuISF0aGlzLiR1fSx1LnRvSVNPU3RyaW5nPWZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMudG9EYXRlKCkudG9JU09TdHJpbmcoKX0sdS50b1N0cmluZz1mdW5jdGlvbigpe3JldHVybiB0aGlzLnRvRGF0ZSgpLnRvVVRDU3RyaW5nKCl9O3ZhciBsPXUudG9EYXRlO3UudG9EYXRlPWZ1bmN0aW9uKHQpe3JldHVyblwic1wiPT09dCYmdGhpcy4kb2Zmc2V0P24odGhpcy5mb3JtYXQoXCJZWVlZLU1NLUREIEhIOm1tOnNzOlNTU1wiKSkudG9EYXRlKCk6bC5jYWxsKHRoaXMpfTt2YXIgYz11LmRpZmY7dS5kaWZmPWZ1bmN0aW9uKHQsaSxlKXtpZih0JiZ0aGlzLiR1PT09dC4kdSlyZXR1cm4gYy5jYWxsKHRoaXMsdCxpLGUpO3ZhciBzPXRoaXMubG9jYWwoKSxmPW4odCkubG9jYWwoKTtyZXR1cm4gYy5jYWxsKHMsZixpLGUpfX19KSk7IiwgIiFmdW5jdGlvbih0LGUpe1wib2JqZWN0XCI9PXR5cGVvZiBleHBvcnRzJiZcInVuZGVmaW5lZFwiIT10eXBlb2YgbW9kdWxlP21vZHVsZS5leHBvcnRzPWUoKTpcImZ1bmN0aW9uXCI9PXR5cGVvZiBkZWZpbmUmJmRlZmluZS5hbWQ/ZGVmaW5lKGUpOih0PVwidW5kZWZpbmVkXCIhPXR5cGVvZiBnbG9iYWxUaGlzP2dsb2JhbFRoaXM6dHx8c2VsZikuZGF5anNfcGx1Z2luX3RpbWV6b25lPWUoKX0odGhpcywoZnVuY3Rpb24oKXtcInVzZSBzdHJpY3RcIjt2YXIgdD17eWVhcjowLG1vbnRoOjEsZGF5OjIsaG91cjozLG1pbnV0ZTo0LHNlY29uZDo1fSxlPXt9O3JldHVybiBmdW5jdGlvbihuLGksbyl7dmFyIHIsYT1mdW5jdGlvbih0LG4saSl7dm9pZCAwPT09aSYmKGk9e30pO3ZhciBvPW5ldyBEYXRlKHQpLHI9ZnVuY3Rpb24odCxuKXt2b2lkIDA9PT1uJiYobj17fSk7dmFyIGk9bi50aW1lWm9uZU5hbWV8fFwic2hvcnRcIixvPXQrXCJ8XCIraSxyPWVbb107cmV0dXJuIHJ8fChyPW5ldyBJbnRsLkRhdGVUaW1lRm9ybWF0KFwiZW4tVVNcIix7aG91cjEyOiExLHRpbWVab25lOnQseWVhcjpcIm51bWVyaWNcIixtb250aDpcIjItZGlnaXRcIixkYXk6XCIyLWRpZ2l0XCIsaG91cjpcIjItZGlnaXRcIixtaW51dGU6XCIyLWRpZ2l0XCIsc2Vjb25kOlwiMi1kaWdpdFwiLHRpbWVab25lTmFtZTppfSksZVtvXT1yKSxyfShuLGkpO3JldHVybiByLmZvcm1hdFRvUGFydHMobyl9LHU9ZnVuY3Rpb24oZSxuKXtmb3IodmFyIGk9YShlLG4pLHI9W10sdT0wO3U8aS5sZW5ndGg7dSs9MSl7dmFyIGY9aVt1XSxzPWYudHlwZSxtPWYudmFsdWUsYz10W3NdO2M+PTAmJihyW2NdPXBhcnNlSW50KG0sMTApKX12YXIgZD1yWzNdLGw9MjQ9PT1kPzA6ZCxoPXJbMF0rXCItXCIrclsxXStcIi1cIityWzJdK1wiIFwiK2wrXCI6XCIrcls0XStcIjpcIityWzVdK1wiOjAwMFwiLHY9K2U7cmV0dXJuKG8udXRjKGgpLnZhbHVlT2YoKS0odi09diUxZTMpKS82ZTR9LGY9aS5wcm90b3R5cGU7Zi50ej1mdW5jdGlvbih0LGUpe3ZvaWQgMD09PXQmJih0PXIpO3ZhciBuLGk9dGhpcy51dGNPZmZzZXQoKSxhPXRoaXMudG9EYXRlKCksdT1hLnRvTG9jYWxlU3RyaW5nKFwiZW4tVVNcIix7dGltZVpvbmU6dH0pLGY9TWF0aC5yb3VuZCgoYS1uZXcgRGF0ZSh1KSkvMWUzLzYwKSxzPTE1Ki1NYXRoLnJvdW5kKGEuZ2V0VGltZXpvbmVPZmZzZXQoKS8xNSktZjtpZighTnVtYmVyKHMpKW49dGhpcy51dGNPZmZzZXQoMCxlKTtlbHNlIGlmKG49byh1LHtsb2NhbGU6dGhpcy4kTH0pLiRzZXQoXCJtaWxsaXNlY29uZFwiLHRoaXMuJG1zKS51dGNPZmZzZXQocywhMCksZSl7dmFyIG09bi51dGNPZmZzZXQoKTtuPW4uYWRkKGktbSxcIm1pbnV0ZVwiKX1yZXR1cm4gbi4keC4kdGltZXpvbmU9dCxufSxmLm9mZnNldE5hbWU9ZnVuY3Rpb24odCl7dmFyIGU9dGhpcy4keC4kdGltZXpvbmV8fG8udHouZ3Vlc3MoKSxuPWEodGhpcy52YWx1ZU9mKCksZSx7dGltZVpvbmVOYW1lOnR9KS5maW5kKChmdW5jdGlvbih0KXtyZXR1cm5cInRpbWV6b25lbmFtZVwiPT09dC50eXBlLnRvTG93ZXJDYXNlKCl9KSk7cmV0dXJuIG4mJm4udmFsdWV9O3ZhciBzPWYuc3RhcnRPZjtmLnN0YXJ0T2Y9ZnVuY3Rpb24odCxlKXtpZighdGhpcy4keHx8IXRoaXMuJHguJHRpbWV6b25lKXJldHVybiBzLmNhbGwodGhpcyx0LGUpO3ZhciBuPW8odGhpcy5mb3JtYXQoXCJZWVlZLU1NLUREIEhIOm1tOnNzOlNTU1wiKSx7bG9jYWxlOnRoaXMuJEx9KTtyZXR1cm4gcy5jYWxsKG4sdCxlKS50eih0aGlzLiR4LiR0aW1lem9uZSwhMCl9LG8udHo9ZnVuY3Rpb24odCxlLG4pe3ZhciBpPW4mJmUsYT1ufHxlfHxyLGY9dSgrbygpLGEpO2lmKFwic3RyaW5nXCIhPXR5cGVvZiB0KXJldHVybiBvKHQpLnR6KGEpO3ZhciBzPWZ1bmN0aW9uKHQsZSxuKXt2YXIgaT10LTYwKmUqMWUzLG89dShpLG4pO2lmKGU9PT1vKXJldHVybltpLGVdO3ZhciByPXUoaS09NjAqKG8tZSkqMWUzLG4pO3JldHVybiBvPT09cj9baSxvXTpbdC02MCpNYXRoLm1pbihvLHIpKjFlMyxNYXRoLm1heChvLHIpXX0oby51dGModCxpKS52YWx1ZU9mKCksZixhKSxtPXNbMF0sYz1zWzFdLGQ9byhtKS51dGNPZmZzZXQoYyk7cmV0dXJuIGQuJHguJHRpbWV6b25lPWEsZH0sby50ei5ndWVzcz1mdW5jdGlvbigpe3JldHVybiBJbnRsLkRhdGVUaW1lRm9ybWF0KCkucmVzb2x2ZWRPcHRpb25zKCkudGltZVpvbmV9LG8udHouc2V0RGVmYXVsdD1mdW5jdGlvbih0KXtyPXR9fX0pKTsiLCAiIWZ1bmN0aW9uKHIsZSl7XCJvYmplY3RcIj09dHlwZW9mIGV4cG9ydHMmJlwidW5kZWZpbmVkXCIhPXR5cGVvZiBtb2R1bGU/bW9kdWxlLmV4cG9ydHM9ZSgpOlwiZnVuY3Rpb25cIj09dHlwZW9mIGRlZmluZSYmZGVmaW5lLmFtZD9kZWZpbmUoZSk6KHI9XCJ1bmRlZmluZWRcIiE9dHlwZW9mIGdsb2JhbFRoaXM/Z2xvYmFsVGhpczpyfHxzZWxmKS5kYXlqc19wbHVnaW5fcmVsYXRpdmVUaW1lPWUoKX0odGhpcywoZnVuY3Rpb24oKXtcInVzZSBzdHJpY3RcIjtyZXR1cm4gZnVuY3Rpb24ocixlLHQpe3I9cnx8e307dmFyIG49ZS5wcm90b3R5cGUsbz17ZnV0dXJlOlwiaW4gJXNcIixwYXN0OlwiJXMgYWdvXCIsczpcImEgZmV3IHNlY29uZHNcIixtOlwiYSBtaW51dGVcIixtbTpcIiVkIG1pbnV0ZXNcIixoOlwiYW4gaG91clwiLGhoOlwiJWQgaG91cnNcIixkOlwiYSBkYXlcIixkZDpcIiVkIGRheXNcIixNOlwiYSBtb250aFwiLE1NOlwiJWQgbW9udGhzXCIseTpcImEgeWVhclwiLHl5OlwiJWQgeWVhcnNcIn07ZnVuY3Rpb24gaShyLGUsdCxvKXtyZXR1cm4gbi5mcm9tVG9CYXNlKHIsZSx0LG8pfXQuZW4ucmVsYXRpdmVUaW1lPW8sbi5mcm9tVG9CYXNlPWZ1bmN0aW9uKGUsbixpLGQsdSl7Zm9yKHZhciBmLGEscyxsPWkuJGxvY2FsZSgpLnJlbGF0aXZlVGltZXx8byxoPXIudGhyZXNob2xkc3x8W3tsOlwic1wiLHI6NDQsZDpcInNlY29uZFwifSx7bDpcIm1cIixyOjg5fSx7bDpcIm1tXCIscjo0NCxkOlwibWludXRlXCJ9LHtsOlwiaFwiLHI6ODl9LHtsOlwiaGhcIixyOjIxLGQ6XCJob3VyXCJ9LHtsOlwiZFwiLHI6MzV9LHtsOlwiZGRcIixyOjI1LGQ6XCJkYXlcIn0se2w6XCJNXCIscjo0NX0se2w6XCJNTVwiLHI6MTAsZDpcIm1vbnRoXCJ9LHtsOlwieVwiLHI6MTd9LHtsOlwieXlcIixkOlwieWVhclwifV0sbT1oLmxlbmd0aCxjPTA7YzxtO2MrPTEpe3ZhciB5PWhbY107eS5kJiYoZj1kP3QoZSkuZGlmZihpLHkuZCwhMCk6aS5kaWZmKGUseS5kLCEwKSk7dmFyIHA9KHIucm91bmRpbmd8fE1hdGgucm91bmQpKE1hdGguYWJzKGYpKTtpZihzPWY+MCxwPD15LnJ8fCF5LnIpe3A8PTEmJmM+MCYmKHk9aFtjLTFdKTt2YXIgdj1sW3kubF07dSYmKHA9dShcIlwiK3ApKSxhPVwic3RyaW5nXCI9PXR5cGVvZiB2P3YucmVwbGFjZShcIiVkXCIscCk6dihwLG4seS5sLHMpO2JyZWFrfX1pZihuKXJldHVybiBhO3ZhciBNPXM/bC5mdXR1cmU6bC5wYXN0O3JldHVyblwiZnVuY3Rpb25cIj09dHlwZW9mIE0/TShhKTpNLnJlcGxhY2UoXCIlc1wiLGEpfSxuLnRvPWZ1bmN0aW9uKHIsZSl7cmV0dXJuIGkocixlLHRoaXMsITApfSxuLmZyb209ZnVuY3Rpb24ocixlKXtyZXR1cm4gaShyLGUsdGhpcyl9O3ZhciBkPWZ1bmN0aW9uKHIpe3JldHVybiByLiR1P3QudXRjKCk6dCgpfTtuLnRvTm93PWZ1bmN0aW9uKHIpe3JldHVybiB0aGlzLnRvKGQodGhpcykscil9LG4uZnJvbU5vdz1mdW5jdGlvbihyKXtyZXR1cm4gdGhpcy5mcm9tKGQodGhpcykscil9fX0pKTsiLCAiaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IEFjdGlvbiwgQWN0aW9uUGFuZWwsIENvbG9yLCBMaXN0IH0gZnJvbSBcIkByYXljYXN0L2FwaVwiO1xuaW1wb3J0IHsgcGFyc2VEYXRlIH0gZnJvbSBcImNocm9uby1ub2RlXCI7XG5pbXBvcnQgZGF5anMgZnJvbSBcImRheWpzXCI7XG5pbXBvcnQgYWR2YW5jZWRGb3JtYXRQbHVnaW4gZnJvbSBcImRheWpzL3BsdWdpbi9hZHZhbmNlZEZvcm1hdFwiO1xuaW1wb3J0IHdlZWtPZlllYXJQbHVnaW4gZnJvbSBcImRheWpzL3BsdWdpbi93ZWVrT2ZZZWFyXCI7XG5pbXBvcnQgdXRjUGx1Z2luIGZyb20gXCJkYXlqcy9wbHVnaW4vdXRjXCI7XG5pbXBvcnQgdGltZXpvbmVQbHVnaW4gZnJvbSBcImRheWpzL3BsdWdpbi90aW1lem9uZVwiO1xuaW1wb3J0IHJlbGF0aXZlVGltZVBsdWdpbiBmcm9tIFwiZGF5anMvcGx1Z2luL3JlbGF0aXZlVGltZVwiO1xuXG5kYXlqcy5leHRlbmQoYWR2YW5jZWRGb3JtYXRQbHVnaW4pO1xuZGF5anMuZXh0ZW5kKHdlZWtPZlllYXJQbHVnaW4pO1xuZGF5anMuZXh0ZW5kKHV0Y1BsdWdpbik7XG5kYXlqcy5leHRlbmQodGltZXpvbmVQbHVnaW4pO1xuZGF5anMuZXh0ZW5kKHJlbGF0aXZlVGltZVBsdWdpbik7XG5cbmZ1bmN0aW9uIGhhbmRsZUNvbnZlcnNpb24oaW5wdXQ6IHN0cmluZywgdGltZXpvbmU6IHN0cmluZykge1xuICBpZiAoaW5wdXQubWF0Y2goL15cXGQrJC8pKSBpbnB1dCA9IG5ldyBEYXRlKHBhcnNlSW50KGlucHV0LCAxMCkgKiAxMDAwKS50b1N0cmluZygpO1xuICBjb25zdCBwYXJzZWREYXRlID0gcGFyc2VEYXRlKGlucHV0KTtcbiAgaWYgKCFwYXJzZWREYXRlIHx8IHBhcnNlZERhdGUudG9TdHJpbmcoKSA9PT0gXCJJbnZhbGlkIERhdGVcIikgcmV0dXJuIFtdO1xuXG4gIGNvbnN0IGRhdGUgPSBkYXlqcyhwYXJzZWREYXRlKS50eih0aW1lem9uZSk7XG4gIGNvbnN0IGZyb21Ob3cgPSBkYXRlLmZyb21Ob3coKTtcbiAgcmV0dXJuIFtcbiAgICB7IGxhYmVsOiBcIlVuaXggKHMpXCIsIHZhbHVlOiBkYXRlLnVuaXgoKSB9LFxuICAgIHsgbGFiZWw6IFwiVW5peCAobXMpXCIsIHZhbHVlOiBkYXRlLnZhbHVlT2YoKSB9LFxuICAgIHsgbGFiZWw6IFwiSHVtYW4gUmVhZGFibGVcIiwgdmFsdWU6IGRhdGUuZm9ybWF0KFwiTU1NTSBEbywgWVlZWSBbYXRdIGhoOm1tOnNzIEEgKHp6eilcIikgfSxcbiAgICB7IGxhYmVsOiBcIkRhdGVUaW1lXCIsIHZhbHVlOiBkYXRlLmZvcm1hdChcIllZWVktTU0tREQgSEg6bW06c3NcIikgfSxcbiAgICB7IGxhYmVsOiBcIlVUQ1wiLCB2YWx1ZTogZGF0ZS50b1N0cmluZygpIH0sXG4gICAgeyBsYWJlbDogXCJJU08gODYwMVwiLCB2YWx1ZTogZGF0ZS50b0lTT1N0cmluZygpIH0sXG4gICAgeyBsYWJlbDogXCJXZWVrIG9mIFllYXJcIiwgdmFsdWU6IGRhdGUuZm9ybWF0KFwid28gZGRkZCBbb2ZdIFlZWVlcIikgfSxcbiAgICB7IGxhYmVsOiBcIkluIC8gQWdvXCIsIHZhbHVlOiBTdHJpbmcoZnJvbU5vdykuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyBTdHJpbmcoZnJvbU5vdykuc2xpY2UoMSkgfSxcbiAgXTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRGF0ZVRpbWUoKSB7XG4gIGNvbnN0IFtpbnB1dCwgc2V0SW5wdXRdID0gdXNlU3RhdGUoXCJub3dcIik7XG4gIGNvbnN0IFt0aW1lem9uZSwgc2V0VGltZXpvbmVdID0gdXNlU3RhdGUoSW50bC5EYXRlVGltZUZvcm1hdCgpLnJlc29sdmVkT3B0aW9ucygpLnRpbWVab25lKTtcbiAgY29uc3QgW2l0ZW1zLCBzZXRJdGVtc10gPSB1c2VTdGF0ZTx7IGxhYmVsOiBzdHJpbmc7IHZhbHVlOiBzdHJpbmcgfCBudW1iZXIgfVtdPihbXSk7XG5cbiAgY29uc3Qgb25UaW1lem9uZUNoYW5nZSA9IGFzeW5jICh2YWx1ZTogc3RyaW5nKSA9PiB7XG4gICAgc2V0VGltZXpvbmUodmFsdWUpO1xuICAgIHNldEl0ZW1zKGhhbmRsZUNvbnZlcnNpb24oaW5wdXQsIHZhbHVlKSk7XG4gIH07XG5cbiAgY29uc3Qgb25TZWFyY2hUZXh0Q2hhbmdlID0gYXN5bmMgKHZhbHVlOiBzdHJpbmcpID0+IHtcbiAgICBzZXRJbnB1dCh2YWx1ZSk7XG4gICAgc2V0SXRlbXMoaGFuZGxlQ29udmVyc2lvbih2YWx1ZSwgdGltZXpvbmUpKTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxMaXN0XG4gICAgICBzZWFyY2hCYXJQbGFjZWhvbGRlcj1cIkRhdGVcIlxuICAgICAgZmlsdGVyaW5nPXtmYWxzZX1cbiAgICAgIHNlYXJjaFRleHQ9e2lucHV0fVxuICAgICAgb25TZWFyY2hUZXh0Q2hhbmdlPXtvblNlYXJjaFRleHRDaGFuZ2V9XG4gICAgICBzZWFyY2hCYXJBY2Nlc3Nvcnk9e1xuICAgICAgICA8TGlzdC5Ecm9wZG93biB0b29sdGlwPVwiVGltZXpvbmVcIiBvbkNoYW5nZT17b25UaW1lem9uZUNoYW5nZX0gZGVmYXVsdFZhbHVlPXt0aW1lem9uZX0+XG4gICAgICAgICAge0ludGwuc3VwcG9ydGVkVmFsdWVzT2YoXCJ0aW1lWm9uZVwiKS5tYXAoKHpvbmUsIGluZGV4KSA9PiAoXG4gICAgICAgICAgICA8TGlzdC5Ecm9wZG93bi5JdGVtIGtleT17aW5kZXh9IHZhbHVlPXt6b25lfSB0aXRsZT17em9uZX0gLz5cbiAgICAgICAgICApKX1cbiAgICAgICAgPC9MaXN0LkRyb3Bkb3duPlxuICAgICAgfVxuICAgID5cbiAgICAgIHtpdGVtcy5tYXAoKGl0ZW0sIGluZGV4KSA9PiAoXG4gICAgICAgIDxMaXN0Lkl0ZW1cbiAgICAgICAgICBrZXk9e2luZGV4fVxuICAgICAgICAgIHRpdGxlPXtTdHJpbmcoaXRlbS52YWx1ZSl9XG4gICAgICAgICAgYWNjZXNzb3JpZXM9e1t7IHRhZzogeyB2YWx1ZTogaXRlbS5sYWJlbCwgY29sb3I6IENvbG9yLlNlY29uZGFyeVRleHQgfSB9XX1cbiAgICAgICAgICBhY3Rpb25zPXtcbiAgICAgICAgICAgIDxBY3Rpb25QYW5lbD5cbiAgICAgICAgICAgICAgPEFjdGlvbi5Db3B5VG9DbGlwYm9hcmQgY29udGVudD17aXRlbS52YWx1ZX0gLz5cbiAgICAgICAgICAgICAgPEFjdGlvbi5QYXN0ZSBjb250ZW50PXtpdGVtLnZhbHVlfSAvPlxuICAgICAgICAgICAgPC9BY3Rpb25QYW5lbD5cbiAgICAgICAgICB9XG4gICAgICAgIC8+XG4gICAgICApKX1cbiAgICA8L0xpc3Q+XG4gICk7XG59XG4iLCAiaW1wb3J0IHsgQ29tcG9uZW50LCBQYXJzZWRDb21wb25lbnRzLCBQYXJzZWRSZXN1bHQsIFBhcnNpbmdSZWZlcmVuY2UgfSBmcm9tIFwiLi90eXBlc1wiO1xuXG5pbXBvcnQgcXVhcnRlck9mWWVhciBmcm9tIFwiZGF5anMvcGx1Z2luL3F1YXJ0ZXJPZlllYXJcIjtcbmltcG9ydCBkYXlqcywgeyBRVW5pdFR5cGUgfSBmcm9tIFwiZGF5anNcIjtcbmltcG9ydCB7IGFzc2lnblNpbWlsYXJEYXRlLCBhc3NpZ25TaW1pbGFyVGltZSwgaW1wbHlTaW1pbGFyVGltZSB9IGZyb20gXCIuL3V0aWxzL2RhdGVzXCI7XG5pbXBvcnQgeyB0b1RpbWV6b25lT2Zmc2V0IH0gZnJvbSBcIi4vdGltZXpvbmVcIjtcbmltcG9ydCB7IGFkZER1cmF0aW9uLCBEdXJhdGlvbiB9IGZyb20gXCIuL2NhbGN1bGF0aW9uL2R1cmF0aW9uXCI7XG5kYXlqcy5leHRlbmQocXVhcnRlck9mWWVhcik7XG5cbmV4cG9ydCBjbGFzcyBSZWZlcmVuY2VXaXRoVGltZXpvbmUge1xuICAgIHJlYWRvbmx5IGluc3RhbnQ6IERhdGU7XG4gICAgcmVhZG9ubHkgdGltZXpvbmVPZmZzZXQ/OiBudW1iZXIgfCBudWxsO1xuXG4gICAgY29uc3RydWN0b3IoaW5wdXQ/OiBQYXJzaW5nUmVmZXJlbmNlIHwgRGF0ZSkge1xuICAgICAgICBpbnB1dCA9IGlucHV0ID8/IG5ldyBEYXRlKCk7XG4gICAgICAgIGlmIChpbnB1dCBpbnN0YW5jZW9mIERhdGUpIHtcbiAgICAgICAgICAgIHRoaXMuaW5zdGFudCA9IGlucHV0O1xuICAgICAgICAgICAgdGhpcy50aW1lem9uZU9mZnNldCA9IG51bGw7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmluc3RhbnQgPSBpbnB1dC5pbnN0YW50ID8/IG5ldyBEYXRlKCk7XG4gICAgICAgICAgICB0aGlzLnRpbWV6b25lT2Zmc2V0ID0gdG9UaW1lem9uZU9mZnNldChpbnB1dC50aW1lem9uZSwgdGhpcy5pbnN0YW50KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgYSBKUyBkYXRlIChzeXN0ZW0gdGltZXpvbmUpIHdpdGggdGhlIHsgeWVhciwgbW9udGgsIGRheSwgaG91ciwgbWludXRlLCBzZWNvbmQgfSBlcXVhbCB0byB0aGUgcmVmZXJlbmNlLlxuICAgICAqIFRoZSBvdXRwdXQncyBpbnN0YW50IGlzIE5PVCB0aGUgcmVmZXJlbmNlJ3MgaW5zdGFudCB3aGVuIHRoZSByZWZlcmVuY2UncyBhbmQgc3lzdGVtJ3MgdGltZXpvbmUgYXJlIGRpZmZlcmVudC5cbiAgICAgKi9cbiAgICBnZXREYXRlV2l0aEFkanVzdGVkVGltZXpvbmUoKSB7XG4gICAgICAgIGNvbnN0IGRhdGUgPSBuZXcgRGF0ZSh0aGlzLmluc3RhbnQpO1xuICAgICAgICBpZiAodGhpcy50aW1lem9uZU9mZnNldCAhPT0gbnVsbCkge1xuICAgICAgICAgICAgZGF0ZS5zZXRNaW51dGVzKGRhdGUuZ2V0TWludXRlcygpIC0gdGhpcy5nZXRTeXN0ZW1UaW1lem9uZUFkanVzdG1lbnRNaW51dGUodGhpcy5pbnN0YW50KSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGRhdGU7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0aGUgbnVtYmVyIG1pbnV0ZXMgZGlmZmVyZW5jZSBiZXR3ZWVuIHRoZSBKUyBkYXRlJ3MgdGltZXpvbmUgYW5kIHRoZSByZWZlcmVuY2UgdGltZXpvbmUuXG4gICAgICogQHBhcmFtIGRhdGVcbiAgICAgKiBAcGFyYW0gb3ZlcnJpZGVUaW1lem9uZU9mZnNldFxuICAgICAqL1xuICAgIGdldFN5c3RlbVRpbWV6b25lQWRqdXN0bWVudE1pbnV0ZShkYXRlPzogRGF0ZSwgb3ZlcnJpZGVUaW1lem9uZU9mZnNldD86IG51bWJlcik6IG51bWJlciB7XG4gICAgICAgIGlmICghZGF0ZSB8fCBkYXRlLmdldFRpbWUoKSA8IDApIHtcbiAgICAgICAgICAgIC8vIEphdmFzY3JpcHQgZGF0ZSB0aW1lem9uZSBjYWxjdWxhdGlvbiBnb3QgZWZmZWN0IHdoZW4gdGhlIHRpbWUgZXBvY2ggPCAwXG4gICAgICAgICAgICAvLyBlLmcuIG5ldyBEYXRlKCdUdWUgRmViIDAyIDEzMDAgMDA6MDA6MDAgR01UKzA5MDAgKEpTVCknKSA9PiBUdWUgRmViIDAyIDEzMDAgMDA6MTg6NTkgR01UKzA5MTggKEpTVClcbiAgICAgICAgICAgIGRhdGUgPSBuZXcgRGF0ZSgpO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgY3VycmVudFRpbWV6b25lT2Zmc2V0ID0gLWRhdGUuZ2V0VGltZXpvbmVPZmZzZXQoKTtcbiAgICAgICAgY29uc3QgdGFyZ2V0VGltZXpvbmVPZmZzZXQgPSBvdmVycmlkZVRpbWV6b25lT2Zmc2V0ID8/IHRoaXMudGltZXpvbmVPZmZzZXQgPz8gY3VycmVudFRpbWV6b25lT2Zmc2V0O1xuICAgICAgICByZXR1cm4gY3VycmVudFRpbWV6b25lT2Zmc2V0IC0gdGFyZ2V0VGltZXpvbmVPZmZzZXQ7XG4gICAgfVxuXG4gICAgZ2V0VGltZXpvbmVPZmZzZXQoKTogbnVtYmVyIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudGltZXpvbmVPZmZzZXQgPz8gLXRoaXMuaW5zdGFudC5nZXRUaW1lem9uZU9mZnNldCgpO1xuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIFBhcnNpbmdDb21wb25lbnRzIGltcGxlbWVudHMgUGFyc2VkQ29tcG9uZW50cyB7XG4gICAgcHJpdmF0ZSBrbm93blZhbHVlczogeyBbYyBpbiBDb21wb25lbnRdPzogbnVtYmVyIH07XG4gICAgcHJpdmF0ZSBpbXBsaWVkVmFsdWVzOiB7IFtjIGluIENvbXBvbmVudF0/OiBudW1iZXIgfTtcbiAgICBwcml2YXRlIHJlZmVyZW5jZTogUmVmZXJlbmNlV2l0aFRpbWV6b25lO1xuICAgIHByaXZhdGUgX3RhZ3MgPSBuZXcgU2V0PHN0cmluZz4oKTtcblxuICAgIGNvbnN0cnVjdG9yKHJlZmVyZW5jZTogUmVmZXJlbmNlV2l0aFRpbWV6b25lLCBrbm93bkNvbXBvbmVudHM/OiB7IFtjIGluIENvbXBvbmVudF0/OiBudW1iZXIgfSkge1xuICAgICAgICB0aGlzLnJlZmVyZW5jZSA9IHJlZmVyZW5jZTtcbiAgICAgICAgdGhpcy5rbm93blZhbHVlcyA9IHt9O1xuICAgICAgICB0aGlzLmltcGxpZWRWYWx1ZXMgPSB7fTtcbiAgICAgICAgaWYgKGtub3duQ29tcG9uZW50cykge1xuICAgICAgICAgICAgZm9yIChjb25zdCBrZXkgaW4ga25vd25Db21wb25lbnRzKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5rbm93blZhbHVlc1trZXkgYXMgQ29tcG9uZW50XSA9IGtub3duQ29tcG9uZW50c1trZXkgYXMgQ29tcG9uZW50XTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHJlZkRheUpzID0gcmVmZXJlbmNlLmdldERhdGVXaXRoQWRqdXN0ZWRUaW1lem9uZSgpO1xuICAgICAgICB0aGlzLmltcGx5KFwiZGF5XCIsIHJlZkRheUpzLmdldERhdGUoKSk7XG4gICAgICAgIHRoaXMuaW1wbHkoXCJtb250aFwiLCByZWZEYXlKcy5nZXRNb250aCgpICsgMSk7XG4gICAgICAgIHRoaXMuaW1wbHkoXCJ5ZWFyXCIsIHJlZkRheUpzLmdldEZ1bGxZZWFyKCkpO1xuICAgICAgICB0aGlzLmltcGx5KFwiaG91clwiLCAxMik7XG4gICAgICAgIHRoaXMuaW1wbHkoXCJtaW51dGVcIiwgMCk7XG4gICAgICAgIHRoaXMuaW1wbHkoXCJzZWNvbmRcIiwgMCk7XG4gICAgICAgIHRoaXMuaW1wbHkoXCJtaWxsaXNlY29uZFwiLCAwKTtcbiAgICB9XG5cbiAgICBnZXQoY29tcG9uZW50OiBDb21wb25lbnQpOiBudW1iZXIgfCBudWxsIHtcbiAgICAgICAgaWYgKGNvbXBvbmVudCBpbiB0aGlzLmtub3duVmFsdWVzKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5rbm93blZhbHVlc1tjb21wb25lbnRdO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGNvbXBvbmVudCBpbiB0aGlzLmltcGxpZWRWYWx1ZXMpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmltcGxpZWRWYWx1ZXNbY29tcG9uZW50XTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIGlzQ2VydGFpbihjb21wb25lbnQ6IENvbXBvbmVudCk6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gY29tcG9uZW50IGluIHRoaXMua25vd25WYWx1ZXM7XG4gICAgfVxuXG4gICAgZ2V0Q2VydGFpbkNvbXBvbmVudHMoKTogQXJyYXk8Q29tcG9uZW50PiB7XG4gICAgICAgIHJldHVybiBPYmplY3Qua2V5cyh0aGlzLmtub3duVmFsdWVzKSBhcyBBcnJheTxDb21wb25lbnQ+O1xuICAgIH1cblxuICAgIGltcGx5KGNvbXBvbmVudDogQ29tcG9uZW50LCB2YWx1ZTogbnVtYmVyKTogUGFyc2luZ0NvbXBvbmVudHMge1xuICAgICAgICBpZiAoY29tcG9uZW50IGluIHRoaXMua25vd25WYWx1ZXMpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuaW1wbGllZFZhbHVlc1tjb21wb25lbnRdID0gdmFsdWU7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIGFzc2lnbihjb21wb25lbnQ6IENvbXBvbmVudCwgdmFsdWU6IG51bWJlcik6IFBhcnNpbmdDb21wb25lbnRzIHtcbiAgICAgICAgdGhpcy5rbm93blZhbHVlc1tjb21wb25lbnRdID0gdmFsdWU7XG4gICAgICAgIGRlbGV0ZSB0aGlzLmltcGxpZWRWYWx1ZXNbY29tcG9uZW50XTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgZGVsZXRlKGNvbXBvbmVudDogQ29tcG9uZW50KSB7XG4gICAgICAgIGRlbGV0ZSB0aGlzLmtub3duVmFsdWVzW2NvbXBvbmVudF07XG4gICAgICAgIGRlbGV0ZSB0aGlzLmltcGxpZWRWYWx1ZXNbY29tcG9uZW50XTtcbiAgICB9XG5cbiAgICBjbG9uZSgpOiBQYXJzaW5nQ29tcG9uZW50cyB7XG4gICAgICAgIGNvbnN0IGNvbXBvbmVudCA9IG5ldyBQYXJzaW5nQ29tcG9uZW50cyh0aGlzLnJlZmVyZW5jZSk7XG4gICAgICAgIGNvbXBvbmVudC5rbm93blZhbHVlcyA9IHt9O1xuICAgICAgICBjb21wb25lbnQuaW1wbGllZFZhbHVlcyA9IHt9O1xuXG4gICAgICAgIGZvciAoY29uc3Qga2V5IGluIHRoaXMua25vd25WYWx1ZXMpIHtcbiAgICAgICAgICAgIGNvbXBvbmVudC5rbm93blZhbHVlc1trZXkgYXMgQ29tcG9uZW50XSA9IHRoaXMua25vd25WYWx1ZXNba2V5IGFzIENvbXBvbmVudF07XG4gICAgICAgIH1cblxuICAgICAgICBmb3IgKGNvbnN0IGtleSBpbiB0aGlzLmltcGxpZWRWYWx1ZXMpIHtcbiAgICAgICAgICAgIGNvbXBvbmVudC5pbXBsaWVkVmFsdWVzW2tleSBhcyBDb21wb25lbnRdID0gdGhpcy5pbXBsaWVkVmFsdWVzW2tleSBhcyBDb21wb25lbnRdO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGNvbXBvbmVudDtcbiAgICB9XG5cbiAgICBpc09ubHlEYXRlKCk6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gIXRoaXMuaXNDZXJ0YWluKFwiaG91clwiKSAmJiAhdGhpcy5pc0NlcnRhaW4oXCJtaW51dGVcIikgJiYgIXRoaXMuaXNDZXJ0YWluKFwic2Vjb25kXCIpO1xuICAgIH1cblxuICAgIGlzT25seVRpbWUoKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAhdGhpcy5pc0NlcnRhaW4oXCJ3ZWVrZGF5XCIpICYmICF0aGlzLmlzQ2VydGFpbihcImRheVwiKSAmJiAhdGhpcy5pc0NlcnRhaW4oXCJtb250aFwiKSAmJiAhdGhpcy5pc0NlcnRhaW4oXCJ5ZWFyXCIpXG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgaXNPbmx5V2Vla2RheUNvbXBvbmVudCgpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaXNDZXJ0YWluKFwid2Vla2RheVwiKSAmJiAhdGhpcy5pc0NlcnRhaW4oXCJkYXlcIikgJiYgIXRoaXMuaXNDZXJ0YWluKFwibW9udGhcIik7XG4gICAgfVxuXG4gICAgaXNEYXRlV2l0aFVua25vd25ZZWFyKCk6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gdGhpcy5pc0NlcnRhaW4oXCJtb250aFwiKSAmJiAhdGhpcy5pc0NlcnRhaW4oXCJ5ZWFyXCIpO1xuICAgIH1cblxuICAgIGlzVmFsaWREYXRlKCk6IGJvb2xlYW4ge1xuICAgICAgICBjb25zdCBkYXRlID0gdGhpcy5kYXRlV2l0aG91dFRpbWV6b25lQWRqdXN0bWVudCgpO1xuXG4gICAgICAgIGlmIChkYXRlLmdldEZ1bGxZZWFyKCkgIT09IHRoaXMuZ2V0KFwieWVhclwiKSkgcmV0dXJuIGZhbHNlO1xuICAgICAgICBpZiAoZGF0ZS5nZXRNb250aCgpICE9PSB0aGlzLmdldChcIm1vbnRoXCIpIC0gMSkgcmV0dXJuIGZhbHNlO1xuICAgICAgICBpZiAoZGF0ZS5nZXREYXRlKCkgIT09IHRoaXMuZ2V0KFwiZGF5XCIpKSByZXR1cm4gZmFsc2U7XG4gICAgICAgIGlmICh0aGlzLmdldChcImhvdXJcIikgIT0gbnVsbCAmJiBkYXRlLmdldEhvdXJzKCkgIT0gdGhpcy5nZXQoXCJob3VyXCIpKSByZXR1cm4gZmFsc2U7XG4gICAgICAgIGlmICh0aGlzLmdldChcIm1pbnV0ZVwiKSAhPSBudWxsICYmIGRhdGUuZ2V0TWludXRlcygpICE9IHRoaXMuZ2V0KFwibWludXRlXCIpKSByZXR1cm4gZmFsc2U7XG5cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgdG9TdHJpbmcoKSB7XG4gICAgICAgIHJldHVybiBgW1BhcnNpbmdDb21wb25lbnRzIHtcbiAgICAgICAgICAgIHRhZ3M6ICR7SlNPTi5zdHJpbmdpZnkoQXJyYXkuZnJvbSh0aGlzLl90YWdzKS5zb3J0KCkpfSwgXG4gICAgICAgICAgICBrbm93blZhbHVlczogJHtKU09OLnN0cmluZ2lmeSh0aGlzLmtub3duVmFsdWVzKX0sIFxuICAgICAgICAgICAgaW1wbGllZFZhbHVlczogJHtKU09OLnN0cmluZ2lmeSh0aGlzLmltcGxpZWRWYWx1ZXMpfX0sIFxuICAgICAgICAgICAgcmVmZXJlbmNlOiAke0pTT04uc3RyaW5naWZ5KHRoaXMucmVmZXJlbmNlKX1dYDtcbiAgICB9XG5cbiAgICBkYXlqcygpIHtcbiAgICAgICAgcmV0dXJuIGRheWpzKHRoaXMuZGF0ZVdpdGhvdXRUaW1lem9uZUFkanVzdG1lbnQoKSk7XG4gICAgfVxuXG4gICAgZGF0ZSgpOiBEYXRlIHtcbiAgICAgICAgY29uc3QgZGF0ZSA9IHRoaXMuZGF0ZVdpdGhvdXRUaW1lem9uZUFkanVzdG1lbnQoKTtcbiAgICAgICAgY29uc3QgdGltZXpvbmVBZGp1c3RtZW50ID0gdGhpcy5yZWZlcmVuY2UuZ2V0U3lzdGVtVGltZXpvbmVBZGp1c3RtZW50TWludXRlKGRhdGUsIHRoaXMuZ2V0KFwidGltZXpvbmVPZmZzZXRcIikpO1xuICAgICAgICByZXR1cm4gbmV3IERhdGUoZGF0ZS5nZXRUaW1lKCkgKyB0aW1lem9uZUFkanVzdG1lbnQgKiA2MDAwMCk7XG4gICAgfVxuXG4gICAgYWRkVGFnKHRhZzogc3RyaW5nKTogUGFyc2luZ0NvbXBvbmVudHMge1xuICAgICAgICB0aGlzLl90YWdzLmFkZCh0YWcpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBhZGRUYWdzKHRhZ3M6IHN0cmluZ1tdIHwgU2V0PHN0cmluZz4pOiBQYXJzaW5nQ29tcG9uZW50cyB7XG4gICAgICAgIGZvciAoY29uc3QgdGFnIG9mIHRhZ3MpIHtcbiAgICAgICAgICAgIHRoaXMuX3RhZ3MuYWRkKHRhZyk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgdGFncygpOiBTZXQ8c3RyaW5nPiB7XG4gICAgICAgIHJldHVybiBuZXcgU2V0KHRoaXMuX3RhZ3MpO1xuICAgIH1cblxuICAgIHByaXZhdGUgZGF0ZVdpdGhvdXRUaW1lem9uZUFkanVzdG1lbnQoKSB7XG4gICAgICAgIGNvbnN0IGRhdGUgPSBuZXcgRGF0ZShcbiAgICAgICAgICAgIHRoaXMuZ2V0KFwieWVhclwiKSxcbiAgICAgICAgICAgIHRoaXMuZ2V0KFwibW9udGhcIikgLSAxLFxuICAgICAgICAgICAgdGhpcy5nZXQoXCJkYXlcIiksXG4gICAgICAgICAgICB0aGlzLmdldChcImhvdXJcIiksXG4gICAgICAgICAgICB0aGlzLmdldChcIm1pbnV0ZVwiKSxcbiAgICAgICAgICAgIHRoaXMuZ2V0KFwic2Vjb25kXCIpLFxuICAgICAgICAgICAgdGhpcy5nZXQoXCJtaWxsaXNlY29uZFwiKVxuICAgICAgICApO1xuXG4gICAgICAgIGRhdGUuc2V0RnVsbFllYXIodGhpcy5nZXQoXCJ5ZWFyXCIpKTtcbiAgICAgICAgcmV0dXJuIGRhdGU7XG4gICAgfVxuXG4gICAgc3RhdGljIGNyZWF0ZVJlbGF0aXZlRnJvbVJlZmVyZW5jZShyZWZlcmVuY2U6IFJlZmVyZW5jZVdpdGhUaW1lem9uZSwgZHVyYXRpb246IER1cmF0aW9uKTogUGFyc2luZ0NvbXBvbmVudHMge1xuICAgICAgICBsZXQgZGF0ZSA9IGFkZER1cmF0aW9uKHJlZmVyZW5jZS5nZXREYXRlV2l0aEFkanVzdGVkVGltZXpvbmUoKSwgZHVyYXRpb24pO1xuXG4gICAgICAgIGNvbnN0IGNvbXBvbmVudHMgPSBuZXcgUGFyc2luZ0NvbXBvbmVudHMocmVmZXJlbmNlKTtcbiAgICAgICAgY29tcG9uZW50cy5hZGRUYWcoXCJyZXN1bHQvcmVsYXRpdmVEYXRlXCIpO1xuICAgICAgICBpZiAoZHVyYXRpb25bXCJob3VyXCJdIHx8IGR1cmF0aW9uW1wibWludXRlXCJdIHx8IGR1cmF0aW9uW1wic2Vjb25kXCJdKSB7XG4gICAgICAgICAgICBjb21wb25lbnRzLmFkZFRhZyhcInJlc3VsdC9yZWxhdGl2ZURhdGVBbmRUaW1lXCIpO1xuICAgICAgICAgICAgYXNzaWduU2ltaWxhclRpbWUoY29tcG9uZW50cywgZGF0ZSk7XG4gICAgICAgICAgICBhc3NpZ25TaW1pbGFyRGF0ZShjb21wb25lbnRzLCBkYXRlKTtcbiAgICAgICAgICAgIGNvbXBvbmVudHMuYXNzaWduKFwidGltZXpvbmVPZmZzZXRcIiwgcmVmZXJlbmNlLmdldFRpbWV6b25lT2Zmc2V0KCkpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaW1wbHlTaW1pbGFyVGltZShjb21wb25lbnRzLCBkYXRlKTtcbiAgICAgICAgICAgIGNvbXBvbmVudHMuaW1wbHkoXCJ0aW1lem9uZU9mZnNldFwiLCByZWZlcmVuY2UuZ2V0VGltZXpvbmVPZmZzZXQoKSk7XG5cbiAgICAgICAgICAgIGlmIChkdXJhdGlvbltcImRheVwiXSkge1xuICAgICAgICAgICAgICAgIGNvbXBvbmVudHMuYXNzaWduKFwiZGF5XCIsIGRhdGUuZ2V0RGF0ZSgpKTtcbiAgICAgICAgICAgICAgICBjb21wb25lbnRzLmFzc2lnbihcIm1vbnRoXCIsIGRhdGUuZ2V0TW9udGgoKSArIDEpO1xuICAgICAgICAgICAgICAgIGNvbXBvbmVudHMuYXNzaWduKFwieWVhclwiLCBkYXRlLmdldEZ1bGxZZWFyKCkpO1xuICAgICAgICAgICAgICAgIGNvbXBvbmVudHMuYXNzaWduKFwid2Vla2RheVwiLCBkYXRlLmdldERheSgpKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoZHVyYXRpb25bXCJ3ZWVrXCJdKSB7XG4gICAgICAgICAgICAgICAgY29tcG9uZW50cy5hc3NpZ24oXCJkYXlcIiwgZGF0ZS5nZXREYXRlKCkpO1xuICAgICAgICAgICAgICAgIGNvbXBvbmVudHMuYXNzaWduKFwibW9udGhcIiwgZGF0ZS5nZXRNb250aCgpICsgMSk7XG4gICAgICAgICAgICAgICAgY29tcG9uZW50cy5hc3NpZ24oXCJ5ZWFyXCIsIGRhdGUuZ2V0RnVsbFllYXIoKSk7XG4gICAgICAgICAgICAgICAgY29tcG9uZW50cy5pbXBseShcIndlZWtkYXlcIiwgZGF0ZS5nZXREYXkoKSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGNvbXBvbmVudHMuaW1wbHkoXCJkYXlcIiwgZGF0ZS5nZXREYXRlKCkpO1xuICAgICAgICAgICAgICAgIGlmIChkdXJhdGlvbltcIm1vbnRoXCJdKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudHMuYXNzaWduKFwibW9udGhcIiwgZGF0ZS5nZXRNb250aCgpICsgMSk7XG4gICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudHMuYXNzaWduKFwieWVhclwiLCBkYXRlLmdldEZ1bGxZZWFyKCkpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudHMuaW1wbHkoXCJtb250aFwiLCBkYXRlLmdldE1vbnRoKCkgKyAxKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGR1cmF0aW9uW1wieWVhclwiXSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50cy5hc3NpZ24oXCJ5ZWFyXCIsIGRhdGUuZ2V0RnVsbFllYXIoKSk7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb21wb25lbnRzLmltcGx5KFwieWVhclwiLCBkYXRlLmdldEZ1bGxZZWFyKCkpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGNvbXBvbmVudHM7XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgUGFyc2luZ1Jlc3VsdCBpbXBsZW1lbnRzIFBhcnNlZFJlc3VsdCB7XG4gICAgcmVmRGF0ZTogRGF0ZTtcbiAgICBpbmRleDogbnVtYmVyO1xuICAgIHRleHQ6IHN0cmluZztcblxuICAgIHJlZmVyZW5jZTogUmVmZXJlbmNlV2l0aFRpbWV6b25lO1xuXG4gICAgc3RhcnQ6IFBhcnNpbmdDb21wb25lbnRzO1xuICAgIGVuZD86IFBhcnNpbmdDb21wb25lbnRzO1xuXG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIHJlZmVyZW5jZTogUmVmZXJlbmNlV2l0aFRpbWV6b25lLFxuICAgICAgICBpbmRleDogbnVtYmVyLFxuICAgICAgICB0ZXh0OiBzdHJpbmcsXG4gICAgICAgIHN0YXJ0PzogUGFyc2luZ0NvbXBvbmVudHMsXG4gICAgICAgIGVuZD86IFBhcnNpbmdDb21wb25lbnRzXG4gICAgKSB7XG4gICAgICAgIHRoaXMucmVmZXJlbmNlID0gcmVmZXJlbmNlO1xuICAgICAgICB0aGlzLnJlZkRhdGUgPSByZWZlcmVuY2UuaW5zdGFudDtcbiAgICAgICAgdGhpcy5pbmRleCA9IGluZGV4O1xuICAgICAgICB0aGlzLnRleHQgPSB0ZXh0O1xuICAgICAgICB0aGlzLnN0YXJ0ID0gc3RhcnQgfHwgbmV3IFBhcnNpbmdDb21wb25lbnRzKHJlZmVyZW5jZSk7XG4gICAgICAgIHRoaXMuZW5kID0gZW5kO1xuICAgIH1cblxuICAgIGNsb25lKCkge1xuICAgICAgICBjb25zdCByZXN1bHQgPSBuZXcgUGFyc2luZ1Jlc3VsdCh0aGlzLnJlZmVyZW5jZSwgdGhpcy5pbmRleCwgdGhpcy50ZXh0KTtcbiAgICAgICAgcmVzdWx0LnN0YXJ0ID0gdGhpcy5zdGFydCA/IHRoaXMuc3RhcnQuY2xvbmUoKSA6IG51bGw7XG4gICAgICAgIHJlc3VsdC5lbmQgPSB0aGlzLmVuZCA/IHRoaXMuZW5kLmNsb25lKCkgOiBudWxsO1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cblxuICAgIGRhdGUoKTogRGF0ZSB7XG4gICAgICAgIHJldHVybiB0aGlzLnN0YXJ0LmRhdGUoKTtcbiAgICB9XG5cbiAgICBhZGRUYWcodGFnOiBzdHJpbmcpOiBQYXJzaW5nUmVzdWx0IHtcbiAgICAgICAgdGhpcy5zdGFydC5hZGRUYWcodGFnKTtcbiAgICAgICAgaWYgKHRoaXMuZW5kKSB7XG4gICAgICAgICAgICB0aGlzLmVuZC5hZGRUYWcodGFnKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBhZGRUYWdzKHRhZ3M6IHN0cmluZ1tdIHwgU2V0PHN0cmluZz4pOiBQYXJzaW5nUmVzdWx0IHtcbiAgICAgICAgdGhpcy5zdGFydC5hZGRUYWdzKHRhZ3MpO1xuICAgICAgICBpZiAodGhpcy5lbmQpIHtcbiAgICAgICAgICAgIHRoaXMuZW5kLmFkZFRhZ3ModGFncyk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgdGFncygpOiBTZXQ8c3RyaW5nPiB7XG4gICAgICAgIGNvbnN0IGNvbWJpbmVkVGFnczogU2V0PHN0cmluZz4gPSBuZXcgU2V0KHRoaXMuc3RhcnQudGFncygpKTtcbiAgICAgICAgaWYgKHRoaXMuZW5kKSB7XG4gICAgICAgICAgICBmb3IgKGNvbnN0IHRhZyBvZiB0aGlzLmVuZC50YWdzKCkpIHtcbiAgICAgICAgICAgICAgICBjb21iaW5lZFRhZ3MuYWRkKHRhZyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGNvbWJpbmVkVGFncztcbiAgICB9XG5cbiAgICB0b1N0cmluZygpIHtcbiAgICAgICAgY29uc3QgdGFncyA9IEFycmF5LmZyb20odGhpcy50YWdzKCkpLnNvcnQoKTtcbiAgICAgICAgcmV0dXJuIGBbUGFyc2luZ1Jlc3VsdCB7aW5kZXg6ICR7dGhpcy5pbmRleH0sIHRleHQ6ICcke3RoaXMudGV4dH0nLCB0YWdzOiAke0pTT04uc3RyaW5naWZ5KHRhZ3MpfSAuLi59XWA7XG4gICAgfVxufVxuIiwgImltcG9ydCB7IERlYnVnQ29uc3VtZSwgRGVidWdIYW5kbGVyIH0gZnJvbSBcIi4vZGVidWdnaW5nXCI7XG5cbmV4cG9ydCBpbnRlcmZhY2UgUGFyc2luZ09wdGlvbiB7XG4gICAgLyoqXG4gICAgICogVG8gcGFyc2Ugb25seSBmb3J3YXJkIGRhdGVzICh0aGUgcmVzdWx0cyBzaG91bGQgYmUgYWZ0ZXIgdGhlIHJlZmVyZW5jZSBkYXRlKS5cbiAgICAgKiBUaGlzIGVmZmVjdHMgZGF0ZS90aW1lIGltcGxpY2F0aW9uIChlLmcuIHdlZWtkYXkgb3IgdGltZSBtZW50aW9uaW5nKVxuICAgICAqL1xuICAgIGZvcndhcmREYXRlPzogYm9vbGVhbjtcblxuICAgIC8qKlxuICAgICAqIEFkZGl0aW9uYWwgdGltZXpvbmUga2V5d29yZHMgZm9yIHRoZSBwYXJzZXJzIHRvIHJlY29nbml6ZS5cbiAgICAgKiBBbnkgdmFsdWUgcHJvdmlkZWQgd2lsbCBvdmVycmlkZSB0aGUgZGVmYXVsdCBoYW5kbGluZyBvZiB0aGF0IHZhbHVlLlxuICAgICAqL1xuICAgIHRpbWV6b25lcz86IFRpbWV6b25lQWJick1hcDtcblxuICAgIC8qKlxuICAgICAqIEludGVybmFsIGRlYnVnIGV2ZW50IGhhbmRsZXIuXG4gICAgICogQGludGVybmFsXG4gICAgICovXG4gICAgZGVidWc/OiBEZWJ1Z0hhbmRsZXIgfCBEZWJ1Z0NvbnN1bWU7XG59XG5cbi8qKlxuICogU29tZSB0aW1lem9uZSBhYmJyZXZpYXRpb25zIGFyZSBhbWJpZ3VvdXMgaW4gdGhhdCB0aGV5IHJlZmVyIHRvIGRpZmZlcmVudCBvZmZzZXRzXG4gKiBkZXBlbmRpbmcgb24gdGhlIHRpbWUgb2YgeWVhciBcdTIwMTQgZGF5bGlnaHQgc2F2aW5ncyB0aW1lIChEU1QpLCBvciBub24tRFNULiBUaGlzIGludGVyZmFjZVxuICogYWxsb3dzIGRlZmluaW5nIHN1Y2ggdGltZXpvbmVzXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgQW1iaWd1b3VzVGltZXpvbmVNYXAge1xuICAgIHRpbWV6b25lT2Zmc2V0RHVyaW5nRHN0OiBudW1iZXI7XG4gICAgdGltZXpvbmVPZmZzZXROb25Ec3Q6IG51bWJlcjtcbiAgICAvKipcbiAgICAgKiBSZXR1cm4gdGhlIHN0YXJ0IGRhdGUgb2YgRFNUIGZvciB0aGUgZ2l2ZW4geWVhci5cbiAgICAgKiB0aW1lem9uZS50cyBjb250YWlucyBoZWxwZXIgbWV0aG9kcyBmb3IgY29tbW9uIHN1Y2ggcnVsZXMuXG4gICAgICovXG4gICAgZHN0U3RhcnQ6ICh5ZWFyOiBudW1iZXIpID0+IERhdGU7XG4gICAgLyoqXG4gICAgICogUmV0dXJuIHRoZSBlbmQgZGF0ZSBvZiBEU1QgZm9yIHRoZSBnaXZlbiB5ZWFyLlxuICAgICAqIHRpbWV6b25lLnRzIGNvbnRhaW5zIGhlbHBlciBtZXRob2RzIGZvciBjb21tb24gc3VjaCBydWxlcy5cbiAgICAgKi9cbiAgICBkc3RFbmQ6ICh5ZWFyOiBudW1iZXIpID0+IERhdGU7XG59XG5cbi8qKlxuICogQSBtYXAgZGVzY3JpYmluZyBob3cgdGltZXpvbmUgYWJicmV2aWF0aW9ucyBzaG91bGQgbWFwIHRvIHRpbWUgb2Zmc2V0cy5cbiAqIFN1cHBvcnRzIGJvdGggdW5hbWJpZ291cyBtYXBwaW5ncyBhYmJyZXZpYXRpb24gPT4gb2Zmc2V0LFxuICogYW5kIGFtYmlndW91cyBtYXBwaW5ncywgd2hlcmUgdGhlIG9mZnNldCB3aWxsIGRlcGVuZCBvbiB3aGV0aGVyIHRoZVxuICogdGltZSBpbiBxdWVzdGlvbiBpcyBkdXJpbmcgZGF5bGlnaHQgc2F2aW5ncyB0aW1lIG9yIG5vdC5cbiAqL1xuZXhwb3J0IHR5cGUgVGltZXpvbmVBYmJyTWFwID0geyBba2V5OiBzdHJpbmddOiBudW1iZXIgfCBBbWJpZ3VvdXNUaW1lem9uZU1hcCB9O1xuXG5leHBvcnQgaW50ZXJmYWNlIFBhcnNpbmdSZWZlcmVuY2Uge1xuICAgIC8qKlxuICAgICAqIFJlZmVyZW5jZSBkYXRlLiBUaGUgaW5zdGFudCAoSmF2YVNjcmlwdCBEYXRlIG9iamVjdCkgd2hlbiB0aGUgaW5wdXQgaXMgd3JpdHRlbiBvciBtZW50aW9uLlxuICAgICAqIFRoaXMgZWZmZWN0IGRhdGUvdGltZSBpbXBsaWNhdGlvbiAoZS5nLiB3ZWVrZGF5IG9yIHRpbWUgbWVudGlvbmluZykuXG4gICAgICogKGRlZmF1bHQgPSBub3cpXG4gICAgICovXG4gICAgaW5zdGFudD86IERhdGU7XG5cbiAgICAvKipcbiAgICAgKiBSZWZlcmVuY2UgdGltZXpvbmUuIFRoZSB0aW1lem9uZSB3aGVyZSB0aGUgaW5wdXQgaXMgd3JpdHRlbiBvciBtZW50aW9uLlxuICAgICAqIERhdGUvdGltZSBpbXBsaWNhdGlvbiB3aWxsIGFjY291bnQgdGhlIGRpZmZlcmVuY2UgYmV0d2VlbiBpbnB1dCB0aW1lem9uZSBhbmQgdGhlIGN1cnJlbnQgc3lzdGVtIHRpbWV6b25lLlxuICAgICAqIChkZWZhdWx0ID0gY3VycmVudCB0aW1lem9uZSlcbiAgICAgKi9cbiAgICB0aW1lem9uZT86IHN0cmluZyB8IG51bWJlcjtcbn1cblxuLyoqXG4gKiBQYXJzZWQgcmVzdWx0IG9yIGZpbmFsIG91dHB1dC5cbiAqIEVhY2ggcmVzdWx0IG9iamVjdCByZXByZXNlbnRzIGEgZGF0ZS90aW1lIChvciBkYXRlL3RpbWUtcmFuZ2UpIG1lbnRpb25pbmcgaW4gdGhlIGlucHV0LlxuICovXG5leHBvcnQgaW50ZXJmYWNlIFBhcnNlZFJlc3VsdCB7XG4gICAgcmVhZG9ubHkgcmVmRGF0ZTogRGF0ZTtcbiAgICByZWFkb25seSBpbmRleDogbnVtYmVyO1xuICAgIHJlYWRvbmx5IHRleHQ6IHN0cmluZztcblxuICAgIHJlYWRvbmx5IHN0YXJ0OiBQYXJzZWRDb21wb25lbnRzO1xuICAgIHJlYWRvbmx5IGVuZD86IFBhcnNlZENvbXBvbmVudHM7XG5cbiAgICAvKipcbiAgICAgKiBAcmV0dXJuIGEgamF2YXNjcmlwdCBkYXRlIG9iamVjdCBjcmVhdGVkIGZyb20gdGhlIGByZXN1bHQuc3RhcnRgLlxuICAgICAqL1xuICAgIGRhdGUoKTogRGF0ZTtcblxuICAgIC8qKlxuICAgICAqIEByZXR1cm4gZGVidWdnaW5nIHRhZ3MgY29tYmluZWQgb2YgdGhlIGByZXN1bHQuc3RhcnRgIGFuZCBgcmVzdWx0LmVuZGAuXG4gICAgICovXG4gICAgdGFncygpOiBTZXQ8c3RyaW5nPjtcbn1cblxuLyoqXG4gKiBBIGNvbGxlY3Rpb24gb2YgcGFyc2VkIGRhdGUvdGltZSBjb21wb25lbnRzIChlLmcuIGRheSwgaG91ciwgbWludXRlLCAuLi4sIGV0YykuXG4gKlxuICogRWFjaCBwYXJzZWQgY29tcG9uZW50IGhhcyB0aHJlZSBkaWZmZXJlbnQgbGV2ZWxzIG9mIGNlcnRhaW50eS5cbiAqIC0gKkNlcnRhaW4qIChvciAqS25vd24qKTogVGhlIGNvbXBvbmVudCBpcyBkaXJlY3RseSBtZW50aW9uZWQgYW5kIHBhcnNlZC5cbiAqIC0gKkltcGxpZWQqOiBUaGUgY29tcG9uZW50IGlzIG5vdCBkaXJlY3RseSBtZW50aW9uZWQsIGJ1dCBpbXBsaWVkIGJ5IG90aGVyIHBhcnNlZCBpbmZvcm1hdGlvbi5cbiAqIC0gKlVua25vd24qOiBDb21wbGV0ZWx5IG5vIG1lbnRpb24gb2YgdGhlIGNvbXBvbmVudC5cbiAqL1xuZXhwb3J0IGludGVyZmFjZSBQYXJzZWRDb21wb25lbnRzIHtcbiAgICAvKipcbiAgICAgKiBDaGVjayB0aGUgY29tcG9uZW50IGNlcnRhaW5seSBpZiB0aGUgY29tcG9uZW50IGlzICpDZXJ0YWluKiAob3IgKktub3duKilcbiAgICAgKi9cbiAgICBpc0NlcnRhaW4oY29tcG9uZW50OiBDb21wb25lbnQpOiBib29sZWFuO1xuXG4gICAgLyoqXG4gICAgICogR2V0IHRoZSBjb21wb25lbnQgdmFsdWUgZm9yIGVpdGhlciAqQ2VydGFpbiogb3IgKkltcGxpZWQqIHZhbHVlLlxuICAgICAqL1xuICAgIGdldChjb21wb25lbnQ6IENvbXBvbmVudCk6IG51bWJlciB8IG51bGw7XG5cbiAgICAvKipcbiAgICAgKiBAcmV0dXJuIGEgamF2YXNjcmlwdCBkYXRlIG9iamVjdC5cbiAgICAgKi9cbiAgICBkYXRlKCk6IERhdGU7XG5cbiAgICAvKipcbiAgICAgKiBAcmV0dXJuIGRlYnVnZ2luZyB0YWdzIG9mIHRoZSBwYXJzZWQgY29tcG9uZW50LlxuICAgICAqL1xuICAgIHRhZ3MoKTogU2V0PHN0cmluZz47XG59XG5cbmV4cG9ydCB0eXBlIENvbXBvbmVudCA9XG4gICAgfCBcInllYXJcIlxuICAgIHwgXCJtb250aFwiXG4gICAgfCBcImRheVwiXG4gICAgfCBcIndlZWtkYXlcIlxuICAgIHwgXCJob3VyXCJcbiAgICB8IFwibWludXRlXCJcbiAgICB8IFwic2Vjb25kXCJcbiAgICB8IFwibWlsbGlzZWNvbmRcIlxuICAgIHwgXCJtZXJpZGllbVwiXG4gICAgfCBcInRpbWV6b25lT2Zmc2V0XCI7XG5cbmV4cG9ydCB0eXBlIFRpbWV1bml0ID0gXCJ5ZWFyXCIgfCBcIm1vbnRoXCIgfCBcIndlZWtcIiB8IFwiZGF5XCIgfCBcImhvdXJcIiB8IFwibWludXRlXCIgfCBcInNlY29uZFwiIHwgXCJtaWxsaXNlY29uZFwiO1xuXG5leHBvcnQgZW51bSBNZXJpZGllbSB7XG4gICAgQU0gPSAwLFxuICAgIFBNID0gMSxcbn1cblxuZXhwb3J0IGVudW0gV2Vla2RheSB7XG4gICAgU1VOREFZID0gMCxcbiAgICBNT05EQVkgPSAxLFxuICAgIFRVRVNEQVkgPSAyLFxuICAgIFdFRE5FU0RBWSA9IDMsXG4gICAgVEhVUlNEQVkgPSA0LFxuICAgIEZSSURBWSA9IDUsXG4gICAgU0FUVVJEQVkgPSA2LFxufVxuXG5leHBvcnQgZW51bSBNb250aCB7XG4gICAgSkFOVUFSWSA9IDEsXG4gICAgRkVCUlVBUlkgPSAyLFxuICAgIE1BUkNIID0gMyxcbiAgICBBUFJJTCA9IDQsXG4gICAgTUFZID0gNSxcbiAgICBKVU5FID0gNixcbiAgICBKVUxZID0gNyxcbiAgICBBVUdVU1QgPSA4LFxuICAgIFNFUFRFTUJFUiA9IDksXG4gICAgT0NUT0JFUiA9IDEwLFxuICAgIE5PVkVNQkVSID0gMTEsXG4gICAgREVDRU1CRVIgPSAxMixcbn1cbiIsICJpbXBvcnQgeyBQYXJzaW5nQ29tcG9uZW50cyB9IGZyb20gXCIuLi9yZXN1bHRzXCI7XG5pbXBvcnQgeyBNZXJpZGllbSB9IGZyb20gXCIuLi90eXBlc1wiO1xuXG4vKipcbiAqIEFzc2lnbiAoZm9yY2UgdXBkYXRlKSB0aGUgcGFyc2luZyBjb21wb25lbnQgdG8gdGhlIHNhbWUgZGF5IGFzIHRoZSBgdGFyZ2V0YC5cbiAqIEBwYXJhbSBjb21wb25lbnQgdGhlIGNvbXBvbmVudCB0byBiZSB1cGRhdGVkLlxuICogQHBhcmFtIHRhcmdldCB0aGUgdGFyZ2V0IGRhdGUgd2l0aCB0aW1lem9uZSBhZGp1c3RlZC5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGFzc2lnblNpbWlsYXJEYXRlKGNvbXBvbmVudDogUGFyc2luZ0NvbXBvbmVudHMsIHRhcmdldDogRGF0ZSkge1xuICAgIGNvbXBvbmVudC5hc3NpZ24oXCJkYXlcIiwgdGFyZ2V0LmdldERhdGUoKSk7XG4gICAgY29tcG9uZW50LmFzc2lnbihcIm1vbnRoXCIsIHRhcmdldC5nZXRNb250aCgpICsgMSk7XG4gICAgY29tcG9uZW50LmFzc2lnbihcInllYXJcIiwgdGFyZ2V0LmdldEZ1bGxZZWFyKCkpO1xufVxuXG4vKipcbiAqIEFzc2lnbiAoZm9yY2UgdXBkYXRlKSB0aGUgcGFyc2luZyBjb21wb25lbnQgdG8gdGhlIHNhbWUgdGltZSBhcyB0aGUgYHRhcmdldGAuXG4gKiBAcGFyYW0gY29tcG9uZW50IHRoZSBjb21wb25lbnQgdG8gYmUgdXBkYXRlZC5cbiAqIEBwYXJhbSB0YXJnZXQgdGhlIHRhcmdldCBkYXRlIHdpdGggdGltZXpvbmUgYWRqdXN0ZWQuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBhc3NpZ25TaW1pbGFyVGltZShjb21wb25lbnQ6IFBhcnNpbmdDb21wb25lbnRzLCB0YXJnZXQ6IERhdGUpIHtcbiAgICBjb21wb25lbnQuYXNzaWduKFwiaG91clwiLCB0YXJnZXQuZ2V0SG91cnMoKSk7XG4gICAgY29tcG9uZW50LmFzc2lnbihcIm1pbnV0ZVwiLCB0YXJnZXQuZ2V0TWludXRlcygpKTtcbiAgICBjb21wb25lbnQuYXNzaWduKFwic2Vjb25kXCIsIHRhcmdldC5nZXRTZWNvbmRzKCkpO1xuICAgIGNvbXBvbmVudC5hc3NpZ24oXCJtaWxsaXNlY29uZFwiLCB0YXJnZXQuZ2V0TWlsbGlzZWNvbmRzKCkpO1xuICAgIGNvbXBvbmVudC5hc3NpZ24oXCJtZXJpZGllbVwiLCB0YXJnZXQuZ2V0SG91cnMoKSA8IDEyID8gTWVyaWRpZW0uQU0gOiBNZXJpZGllbS5QTSk7XG59XG5cbi8qKlxuICogSW1wbHkgKHdlYWtseSB1cGRhdGUpIHRoZSBwYXJzaW5nIGNvbXBvbmVudCB0byB0aGUgc2FtZSBkYXkgYXMgdGhlIGB0YXJnZXRgLlxuICogQHBhcmFtIGNvbXBvbmVudCB0aGUgY29tcG9uZW50IHRvIGJlIHVwZGF0ZWQuXG4gKiBAcGFyYW0gdGFyZ2V0IHRoZSB0YXJnZXQgZGF0ZSB3aXRoIHRpbWV6b25lIGFkanVzdGVkLlxuICovXG5leHBvcnQgZnVuY3Rpb24gaW1wbHlTaW1pbGFyRGF0ZShjb21wb25lbnQ6IFBhcnNpbmdDb21wb25lbnRzLCB0YXJnZXQ6IERhdGUpIHtcbiAgICBjb21wb25lbnQuaW1wbHkoXCJkYXlcIiwgdGFyZ2V0LmdldERhdGUoKSk7XG4gICAgY29tcG9uZW50LmltcGx5KFwibW9udGhcIiwgdGFyZ2V0LmdldE1vbnRoKCkgKyAxKTtcbiAgICBjb21wb25lbnQuaW1wbHkoXCJ5ZWFyXCIsIHRhcmdldC5nZXRGdWxsWWVhcigpKTtcbn1cblxuLyoqXG4gKiBJbXBseSAod2Vha2x5IHVwZGF0ZSkgdGhlIHBhcnNpbmcgY29tcG9uZW50IHRvIHRoZSBzYW1lIHRpbWUgYXMgdGhlIGB0YXJnZXRgLlxuICogQHBhcmFtIGNvbXBvbmVudCB0aGUgY29tcG9uZW50IHRvIGJlIHVwZGF0ZWQuXG4gKiBAcGFyYW0gdGFyZ2V0IHRoZSB0YXJnZXQgZGF0ZSB3aXRoIHRpbWV6b25lIGFkanVzdGVkLlxuICovXG5leHBvcnQgZnVuY3Rpb24gaW1wbHlTaW1pbGFyVGltZShjb21wb25lbnQ6IFBhcnNpbmdDb21wb25lbnRzLCB0YXJnZXQ6IERhdGUpIHtcbiAgICBjb21wb25lbnQuaW1wbHkoXCJob3VyXCIsIHRhcmdldC5nZXRIb3VycygpKTtcbiAgICBjb21wb25lbnQuaW1wbHkoXCJtaW51dGVcIiwgdGFyZ2V0LmdldE1pbnV0ZXMoKSk7XG4gICAgY29tcG9uZW50LmltcGx5KFwic2Vjb25kXCIsIHRhcmdldC5nZXRTZWNvbmRzKCkpO1xuICAgIGNvbXBvbmVudC5pbXBseShcIm1pbGxpc2Vjb25kXCIsIHRhcmdldC5nZXRNaWxsaXNlY29uZHMoKSk7XG4gICAgY29tcG9uZW50LmltcGx5KFwibWVyaWRpZW1cIiwgdGFyZ2V0LmdldEhvdXJzKCkgPCAxMiA/IE1lcmlkaWVtLkFNIDogTWVyaWRpZW0uUE0pO1xufVxuIiwgImltcG9ydCBkYXlqcyBmcm9tIFwiZGF5anNcIjtcbmltcG9ydCB7IFRpbWV6b25lQWJick1hcCwgV2Vla2RheSwgTW9udGggfSBmcm9tIFwiLi90eXBlc1wiO1xuXG5leHBvcnQgY29uc3QgVElNRVpPTkVfQUJCUl9NQVA6IFRpbWV6b25lQWJick1hcCA9IHtcbiAgICBBQ0RUOiA2MzAsXG4gICAgQUNTVDogNTcwLFxuICAgIEFEVDogLTE4MCxcbiAgICBBRURUOiA2NjAsXG4gICAgQUVTVDogNjAwLFxuICAgIEFGVDogMjcwLFxuICAgIEFLRFQ6IC00ODAsXG4gICAgQUtTVDogLTU0MCxcbiAgICBBTE1UOiAzNjAsXG4gICAgQU1TVDogLTE4MCxcbiAgICBBTVQ6IC0yNDAsXG4gICAgQU5BU1Q6IDcyMCxcbiAgICBBTkFUOiA3MjAsXG4gICAgQVFUVDogMzAwLFxuICAgIEFSVDogLTE4MCxcbiAgICBBU1Q6IC0yNDAsXG4gICAgQVdEVDogNTQwLFxuICAgIEFXU1Q6IDQ4MCxcbiAgICBBWk9TVDogMCxcbiAgICBBWk9UOiAtNjAsXG4gICAgQVpTVDogMzAwLFxuICAgIEFaVDogMjQwLFxuICAgIEJOVDogNDgwLFxuICAgIEJPVDogLTI0MCxcbiAgICBCUlNUOiAtMTIwLFxuICAgIEJSVDogLTE4MCxcbiAgICBCU1Q6IDYwLFxuICAgIEJUVDogMzYwLFxuICAgIENBU1Q6IDQ4MCxcbiAgICBDQVQ6IDEyMCxcbiAgICBDQ1Q6IDM5MCxcbiAgICBDRFQ6IC0zMDAsXG4gICAgQ0VTVDogMTIwLFxuICAgIC8vIE5vdGU6IE1hbnkgc291cmNlcyBkZWZpbmUgQ0VUIGFzIGEgY29uc3RhbnQgVVRDKzEuIEluIGNvbW1vbiB1c2FnZSwgaG93ZXZlcixcbiAgICAvLyBDRVQgdXN1YWxseSByZWZlcnMgdG8gdGhlIHRpbWUgb2JzZXJ2ZWQgaW4gbW9zdCBvZiBFdXJvcGUsIGJlIGl0IHN0YW5kYXJkIHRpbWUgb3IgZGF5bGlnaHQgc2F2aW5nIHRpbWUuXG4gICAgQ0VUOiB7XG4gICAgICAgIHRpbWV6b25lT2Zmc2V0RHVyaW5nRHN0OiAyICogNjAsXG4gICAgICAgIHRpbWV6b25lT2Zmc2V0Tm9uRHN0OiA2MCxcbiAgICAgICAgZHN0U3RhcnQ6ICh5ZWFyOiBudW1iZXIpID0+IGdldExhc3RXZWVrZGF5T2ZNb250aCh5ZWFyLCBNb250aC5NQVJDSCwgV2Vla2RheS5TVU5EQVksIDIpLFxuICAgICAgICBkc3RFbmQ6ICh5ZWFyOiBudW1iZXIpID0+IGdldExhc3RXZWVrZGF5T2ZNb250aCh5ZWFyLCBNb250aC5PQ1RPQkVSLCBXZWVrZGF5LlNVTkRBWSwgMyksXG4gICAgfSxcbiAgICBDSEFEVDogODI1LFxuICAgIENIQVNUOiA3NjUsXG4gICAgQ0tUOiAtNjAwLFxuICAgIENMU1Q6IC0xODAsXG4gICAgQ0xUOiAtMjQwLFxuICAgIENPVDogLTMwMCxcbiAgICBDU1Q6IC0zNjAsXG4gICAgQ1Q6IHtcbiAgICAgICAgdGltZXpvbmVPZmZzZXREdXJpbmdEc3Q6IC01ICogNjAsXG4gICAgICAgIHRpbWV6b25lT2Zmc2V0Tm9uRHN0OiAtNiAqIDYwLFxuICAgICAgICBkc3RTdGFydDogKHllYXI6IG51bWJlcikgPT4gZ2V0TnRoV2Vla2RheU9mTW9udGgoeWVhciwgTW9udGguTUFSQ0gsIFdlZWtkYXkuU1VOREFZLCAyLCAyKSxcbiAgICAgICAgZHN0RW5kOiAoeWVhcjogbnVtYmVyKSA9PiBnZXROdGhXZWVrZGF5T2ZNb250aCh5ZWFyLCBNb250aC5OT1ZFTUJFUiwgV2Vla2RheS5TVU5EQVksIDEsIDIpLFxuICAgIH0sXG4gICAgQ1ZUOiAtNjAsXG4gICAgQ1hUOiA0MjAsXG4gICAgQ2hTVDogNjAwLFxuICAgIERBVlQ6IDQyMCxcbiAgICBFQVNTVDogLTMwMCxcbiAgICBFQVNUOiAtMzYwLFxuICAgIEVBVDogMTgwLFxuICAgIEVDVDogLTMwMCxcbiAgICBFRFQ6IC0yNDAsXG4gICAgRUVTVDogMTgwLFxuICAgIEVFVDogMTIwLFxuICAgIEVHU1Q6IDAsXG4gICAgRUdUOiAtNjAsXG4gICAgRVNUOiAtMzAwLFxuICAgIEVUOiB7XG4gICAgICAgIHRpbWV6b25lT2Zmc2V0RHVyaW5nRHN0OiAtNCAqIDYwLFxuICAgICAgICB0aW1lem9uZU9mZnNldE5vbkRzdDogLTUgKiA2MCxcbiAgICAgICAgZHN0U3RhcnQ6ICh5ZWFyOiBudW1iZXIpID0+IGdldE50aFdlZWtkYXlPZk1vbnRoKHllYXIsIE1vbnRoLk1BUkNILCBXZWVrZGF5LlNVTkRBWSwgMiwgMiksXG4gICAgICAgIGRzdEVuZDogKHllYXI6IG51bWJlcikgPT4gZ2V0TnRoV2Vla2RheU9mTW9udGgoeWVhciwgTW9udGguTk9WRU1CRVIsIFdlZWtkYXkuU1VOREFZLCAxLCAyKSxcbiAgICB9LFxuICAgIEZKU1Q6IDc4MCxcbiAgICBGSlQ6IDcyMCxcbiAgICBGS1NUOiAtMTgwLFxuICAgIEZLVDogLTI0MCxcbiAgICBGTlQ6IC0xMjAsXG4gICAgR0FMVDogLTM2MCxcbiAgICBHQU1UOiAtNTQwLFxuICAgIEdFVDogMjQwLFxuICAgIEdGVDogLTE4MCxcbiAgICBHSUxUOiA3MjAsXG4gICAgR01UOiAwLFxuICAgIEdTVDogMjQwLFxuICAgIEdZVDogLTI0MCxcbiAgICBIQUE6IC0xODAsXG4gICAgSEFDOiAtMzAwLFxuICAgIEhBRFQ6IC01NDAsXG4gICAgSEFFOiAtMjQwLFxuICAgIEhBUDogLTQyMCxcbiAgICBIQVI6IC0zNjAsXG4gICAgSEFTVDogLTYwMCxcbiAgICBIQVQ6IC05MCxcbiAgICBIQVk6IC00ODAsXG4gICAgSEtUOiA0ODAsXG4gICAgSExWOiAtMjEwLFxuICAgIEhOQTogLTI0MCxcbiAgICBITkM6IC0zNjAsXG4gICAgSE5FOiAtMzAwLFxuICAgIEhOUDogLTQ4MCxcbiAgICBITlI6IC00MjAsXG4gICAgSE5UOiAtMTUwLFxuICAgIEhOWTogLTU0MCxcbiAgICBIT1ZUOiA0MjAsXG4gICAgSUNUOiA0MjAsXG4gICAgSURUOiAxODAsXG4gICAgSU9UOiAzNjAsXG4gICAgSVJEVDogMjcwLFxuICAgIElSS1NUOiA1NDAsXG4gICAgSVJLVDogNTQwLFxuICAgIElSU1Q6IDIxMCxcbiAgICBJU1Q6IDMzMCxcbiAgICBKU1Q6IDU0MCxcbiAgICBLR1Q6IDM2MCxcbiAgICBLUkFTVDogNDgwLFxuICAgIEtSQVQ6IDQ4MCxcbiAgICBLU1Q6IDU0MCxcbiAgICBLVVlUOiAyNDAsXG4gICAgTEhEVDogNjYwLFxuICAgIExIU1Q6IDYzMCxcbiAgICBMSU5UOiA4NDAsXG4gICAgTUFHU1Q6IDcyMCxcbiAgICBNQUdUOiA3MjAsXG4gICAgTUFSVDogLTUxMCxcbiAgICBNQVdUOiAzMDAsXG4gICAgTURUOiAtMzYwLFxuICAgIE1FU1o6IDEyMCxcbiAgICBNRVo6IDYwLFxuICAgIE1IVDogNzIwLFxuICAgIE1NVDogMzkwLFxuICAgIE1TRDogMjQwLFxuICAgIE1TSzogMTgwLFxuICAgIE1TVDogLTQyMCxcbiAgICBNVDoge1xuICAgICAgICB0aW1lem9uZU9mZnNldER1cmluZ0RzdDogLTYgKiA2MCxcbiAgICAgICAgdGltZXpvbmVPZmZzZXROb25Ec3Q6IC03ICogNjAsXG4gICAgICAgIGRzdFN0YXJ0OiAoeWVhcjogbnVtYmVyKSA9PiBnZXROdGhXZWVrZGF5T2ZNb250aCh5ZWFyLCBNb250aC5NQVJDSCwgV2Vla2RheS5TVU5EQVksIDIsIDIpLFxuICAgICAgICBkc3RFbmQ6ICh5ZWFyOiBudW1iZXIpID0+IGdldE50aFdlZWtkYXlPZk1vbnRoKHllYXIsIE1vbnRoLk5PVkVNQkVSLCBXZWVrZGF5LlNVTkRBWSwgMSwgMiksXG4gICAgfSxcbiAgICBNVVQ6IDI0MCxcbiAgICBNVlQ6IDMwMCxcbiAgICBNWVQ6IDQ4MCxcbiAgICBOQ1Q6IDY2MCxcbiAgICBORFQ6IC05MCxcbiAgICBORlQ6IDY5MCxcbiAgICBOT1ZTVDogNDIwLFxuICAgIE5PVlQ6IDM2MCxcbiAgICBOUFQ6IDM0NSxcbiAgICBOU1Q6IC0xNTAsXG4gICAgTlVUOiAtNjYwLFxuICAgIE5aRFQ6IDc4MCxcbiAgICBOWlNUOiA3MjAsXG4gICAgT01TU1Q6IDQyMCxcbiAgICBPTVNUOiA0MjAsXG4gICAgUERUOiAtNDIwLFxuICAgIFBFVDogLTMwMCxcbiAgICBQRVRTVDogNzIwLFxuICAgIFBFVFQ6IDcyMCxcbiAgICBQR1Q6IDYwMCxcbiAgICBQSE9UOiA3ODAsXG4gICAgUEhUOiA0ODAsXG4gICAgUEtUOiAzMDAsXG4gICAgUE1EVDogLTEyMCxcbiAgICBQTVNUOiAtMTgwLFxuICAgIFBPTlQ6IDY2MCxcbiAgICBQU1Q6IC00ODAsXG4gICAgUFQ6IHtcbiAgICAgICAgdGltZXpvbmVPZmZzZXREdXJpbmdEc3Q6IC03ICogNjAsXG4gICAgICAgIHRpbWV6b25lT2Zmc2V0Tm9uRHN0OiAtOCAqIDYwLFxuICAgICAgICBkc3RTdGFydDogKHllYXI6IG51bWJlcikgPT4gZ2V0TnRoV2Vla2RheU9mTW9udGgoeWVhciwgTW9udGguTUFSQ0gsIFdlZWtkYXkuU1VOREFZLCAyLCAyKSxcbiAgICAgICAgZHN0RW5kOiAoeWVhcjogbnVtYmVyKSA9PiBnZXROdGhXZWVrZGF5T2ZNb250aCh5ZWFyLCBNb250aC5OT1ZFTUJFUiwgV2Vla2RheS5TVU5EQVksIDEsIDIpLFxuICAgIH0sXG4gICAgUFdUOiA1NDAsXG4gICAgUFlTVDogLTE4MCxcbiAgICBQWVQ6IC0yNDAsXG4gICAgUkVUOiAyNDAsXG4gICAgU0FNVDogMjQwLFxuICAgIFNBU1Q6IDEyMCxcbiAgICBTQlQ6IDY2MCxcbiAgICBTQ1Q6IDI0MCxcbiAgICBTR1Q6IDQ4MCxcbiAgICBTUlQ6IC0xODAsXG4gICAgU1NUOiAtNjYwLFxuICAgIFRBSFQ6IC02MDAsXG4gICAgVEZUOiAzMDAsXG4gICAgVEpUOiAzMDAsXG4gICAgVEtUOiA3ODAsXG4gICAgVExUOiA1NDAsXG4gICAgVE1UOiAzMDAsXG4gICAgVFZUOiA3MjAsXG4gICAgVUxBVDogNDgwLFxuICAgIFVUQzogMCxcbiAgICBVWVNUOiAtMTIwLFxuICAgIFVZVDogLTE4MCxcbiAgICBVWlQ6IDMwMCxcbiAgICBWRVQ6IC0yMTAsXG4gICAgVkxBU1Q6IDY2MCxcbiAgICBWTEFUOiA2NjAsXG4gICAgVlVUOiA2NjAsXG4gICAgV0FTVDogMTIwLFxuICAgIFdBVDogNjAsXG4gICAgV0VTVDogNjAsXG4gICAgV0VTWjogNjAsXG4gICAgV0VUOiAwLFxuICAgIFdFWjogMCxcbiAgICBXRlQ6IDcyMCxcbiAgICBXR1NUOiAtMTIwLFxuICAgIFdHVDogLTE4MCxcbiAgICBXSUI6IDQyMCxcbiAgICBXSVQ6IDU0MCxcbiAgICBXSVRBOiA0ODAsXG4gICAgV1NUOiA3ODAsXG4gICAgV1Q6IDAsXG4gICAgWUFLU1Q6IDYwMCxcbiAgICBZQUtUOiA2MDAsXG4gICAgWUFQVDogNjAwLFxuICAgIFlFS1NUOiAzNjAsXG4gICAgWUVLVDogMzYwLFxufTtcblxuLyoqXG4gKiBHZXQgdGhlIGRhdGUgd2hpY2ggaXMgdGhlIG50aCBvY2N1cmVuY2Ugb2YgYSBnaXZlbiB3ZWVrZGF5IGluIGEgZ2l2ZW4gbW9udGggYW5kIHllYXIuXG4gKlxuICogQHBhcmFtIHllYXIgVGhlIHllYXIgZm9yIHdoaWNoIHRvIGZpbmQgdGhlIGRhdGVcbiAqIEBwYXJhbSBtb250aCBUaGUgbW9udGggaW4gd2hpY2ggdGhlIGRhdGUgb2NjdXJzXG4gKiBAcGFyYW0gd2Vla2RheSBUaGUgd2Vla2RheSBvbiB3aGljaCB0aGUgZGF0ZSBvY2N1cnNcbiAqIEBwYXJhbSBuIFRoZSBudGggb2NjdXJlbmNlIG9mIHRoZSBnaXZlbiB3ZWVrZGF5IG9uIHRoZSBtb250aCB0byByZXR1cm5cbiAqIEBwYXJhbSBob3VyIFRoZSBob3VyIG9mIGRheSB3aGljaCBzaG91bGQgYmUgc2V0IG9uIHRoZSByZXR1cm5lZCBkYXRlXG4gKiBAcmV0dXJuIFRoZSBkYXRlIHdoaWNoIGlzIHRoZSBudGggb2NjdXJlbmNlIG9mIGEgZ2l2ZW4gd2Vla2RheSBpbiBhIGdpdmVuXG4gKiAgICAgICAgIG1vbnRoIGFuZCB5ZWFyLCBhdCB0aGUgZ2l2ZW4gaG91ciBvZiBkYXlcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdldE50aFdlZWtkYXlPZk1vbnRoKHllYXI6IG51bWJlciwgbW9udGg6IE1vbnRoLCB3ZWVrZGF5OiBXZWVrZGF5LCBuOiAxIHwgMiB8IDMgfCA0LCBob3VyID0gMCk6IERhdGUge1xuICAgIGxldCBkYXlPZk1vbnRoID0gMDtcbiAgICBsZXQgaSA9IDA7XG4gICAgd2hpbGUgKGkgPCBuKSB7XG4gICAgICAgIGRheU9mTW9udGgrKztcbiAgICAgICAgY29uc3QgZGF0ZSA9IG5ldyBEYXRlKHllYXIsIG1vbnRoIC0gMSwgZGF5T2ZNb250aCk7XG4gICAgICAgIGlmIChkYXRlLmdldERheSgpID09PSB3ZWVrZGF5KSBpKys7XG4gICAgfVxuICAgIHJldHVybiBuZXcgRGF0ZSh5ZWFyLCBtb250aCAtIDEsIGRheU9mTW9udGgsIGhvdXIpO1xufVxuXG4vKipcbiAqIEdldCB0aGUgZGF0ZSB3aGljaCBpcyB0aGUgbGFzdCBvY2N1cmVuY2Ugb2YgYSBnaXZlbiB3ZWVrZGF5IGluIGEgZ2l2ZW4gbW9udGggYW5kIHllYXIuXG4gKlxuICogQHBhcmFtIHllYXIgVGhlIHllYXIgZm9yIHdoaWNoIHRvIGZpbmQgdGhlIGRhdGVcbiAqIEBwYXJhbSBtb250aCBUaGUgbW9udGggaW4gd2hpY2ggdGhlIGRhdGUgb2NjdXJzXG4gKiBAcGFyYW0gd2Vla2RheSBUaGUgd2Vla2RheSBvbiB3aGljaCB0aGUgZGF0ZSBvY2N1cnNcbiAqIEBwYXJhbSBob3VyIFRoZSBob3VyIG9mIGRheSB3aGljaCBzaG91bGQgYmUgc2V0IG9uIHRoZSByZXR1cm5lZCBkYXRlXG4gKiBAcmV0dXJuIFRoZSBkYXRlIHdoaWNoIGlzIHRoZSBsYXN0IG9jY3VyZW5jZSBvZiBhIGdpdmVuIHdlZWtkYXkgaW4gYSBnaXZlblxuICogICAgICAgICBtb250aCBhbmQgeWVhciwgYXQgdGhlIGdpdmVuIGhvdXIgb2YgZGF5XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBnZXRMYXN0V2Vla2RheU9mTW9udGgoeWVhcjogbnVtYmVyLCBtb250aDogTW9udGgsIHdlZWtkYXk6IFdlZWtkYXksIGhvdXIgPSAwKTogRGF0ZSB7XG4gICAgLy8gUHJvY2VkdXJlOiBGaW5kIHRoZSBmaXJzdCB3ZWVrZGF5IG9mIHRoZSBuZXh0IG1vbnRoLCBjb21wYXJlIHdpdGggdGhlIGdpdmVuIHdlZWtkYXksXG4gICAgLy8gYW5kIHVzZSB0aGUgZGlmZmVyZW5jZSB0byBkZXRlcm1pbmUgaG93IG1hbnkgZGF5cyB0byBzdWJ0cmFjdCBmcm9tIHRoZSBmaXJzdCBvZiB0aGUgbmV4dCBtb250aC5cbiAgICBjb25zdCBvbmVJbmRleGVkV2Vla2RheSA9IHdlZWtkYXkgPT09IDAgPyA3IDogd2Vla2RheTtcbiAgICBjb25zdCBkYXRlID0gbmV3IERhdGUoeWVhciwgbW9udGggLSAxICsgMSwgMSwgMTIpO1xuICAgIGNvbnN0IGZpcnN0V2Vla2RheU5leHRNb250aCA9IGRhdGUuZ2V0RGF5KCkgPT09IDAgPyA3IDogZGF0ZS5nZXREYXkoKTtcbiAgICBsZXQgZGF5RGlmZjtcbiAgICBpZiAoZmlyc3RXZWVrZGF5TmV4dE1vbnRoID09PSBvbmVJbmRleGVkV2Vla2RheSkgZGF5RGlmZiA9IDc7XG4gICAgZWxzZSBpZiAoZmlyc3RXZWVrZGF5TmV4dE1vbnRoIDwgb25lSW5kZXhlZFdlZWtkYXkpIGRheURpZmYgPSA3ICsgZmlyc3RXZWVrZGF5TmV4dE1vbnRoIC0gb25lSW5kZXhlZFdlZWtkYXk7XG4gICAgZWxzZSBkYXlEaWZmID0gZmlyc3RXZWVrZGF5TmV4dE1vbnRoIC0gb25lSW5kZXhlZFdlZWtkYXk7XG4gICAgZGF0ZS5zZXREYXRlKGRhdGUuZ2V0RGF0ZSgpIC0gZGF5RGlmZik7XG4gICAgcmV0dXJuIG5ldyBEYXRlKHllYXIsIG1vbnRoIC0gMSwgZGF0ZS5nZXREYXRlKCksIGhvdXIpO1xufVxuXG4vKipcbiAqIEZpbmRzIGFuZCByZXR1cm5zIHRpbWV6b25lIG9mZnNldC4gSWYgdGltZXpvbmVJbnB1dCBpcyBudW1lcmljLCBpdCBpcyByZXR1cm5lZC4gT3RoZXJ3aXNlLCBsb29rIGZvciB0aW1lem9uZSBvZmZzZXRzXG4gKiBpbiB0aGUgZm9sbG93aW5nIG9yZGVyOiB0aW1lem9uZU92ZXJyaWRlcyAtPiB7QGxpbmsgVElNRVpPTkVfQUJCUl9NQVB9LlxuICpcbiAqIEBwYXJhbSB0aW1lem9uZUlucHV0IFVwcGVyY2FzZSB0aW1lem9uZSBhYmJyZXZpYXRpb24gb3IgbnVtZXJpYyBvZmZzZXQgaW4gbWludXRlc1xuICogQHBhcmFtIGRhdGUgVGhlIGRhdGUgdG8gdXNlIHRvIGRldGVybWluZSB3aGV0aGVyIHRvIHJldHVybiBEU1Qgb2Zmc2V0cyBmb3IgYW1iaWd1b3VzIHRpbWV6b25lc1xuICogQHBhcmFtIHRpbWV6b25lT3ZlcnJpZGVzIE92ZXJyaWRlcyBmb3IgdGltZXpvbmVzXG4gKiBAcmV0dXJuIHRpbWV6b25lIG9mZnNldCBpbiBtaW51dGVzXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB0b1RpbWV6b25lT2Zmc2V0KFxuICAgIHRpbWV6b25lSW5wdXQ/OiBzdHJpbmcgfCBudW1iZXIsXG4gICAgZGF0ZT86IERhdGUsXG4gICAgdGltZXpvbmVPdmVycmlkZXM6IFRpbWV6b25lQWJick1hcCA9IHt9XG4pOiBudW1iZXIgfCBudWxsIHtcbiAgICBpZiAodGltZXpvbmVJbnB1dCA9PSBudWxsKSB7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIGlmICh0eXBlb2YgdGltZXpvbmVJbnB1dCA9PT0gXCJudW1iZXJcIikge1xuICAgICAgICByZXR1cm4gdGltZXpvbmVJbnB1dDtcbiAgICB9XG5cbiAgICBjb25zdCBtYXRjaGVkVGltZXpvbmUgPSB0aW1lem9uZU92ZXJyaWRlc1t0aW1lem9uZUlucHV0XSA/PyBUSU1FWk9ORV9BQkJSX01BUFt0aW1lem9uZUlucHV0XTtcbiAgICBpZiAobWF0Y2hlZFRpbWV6b25lID09IG51bGwpIHtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIC8vIFRoaXMgbWVhbnMgdGhhdCB3ZSBoYXZlIG1hdGNoZWQgYW4gdW5hbWJpZ3VvdXMgdGltZXpvbmVcbiAgICBpZiAodHlwZW9mIG1hdGNoZWRUaW1lem9uZSA9PSBcIm51bWJlclwiKSB7XG4gICAgICAgIHJldHVybiBtYXRjaGVkVGltZXpvbmU7XG4gICAgfVxuXG4gICAgLy8gVGhlIG1hdGNoZWQgdGltZXpvbmUgaXMgYW4gYW1iaWd1b3VzIHRpbWV6b25lLCB3aGVyZSB0aGUgb2Zmc2V0IGRlcGVuZHMgb24gd2hldGhlciB0aGUgY29udGV4dCAocmVmRGF0ZSlcbiAgICAvLyBpcyBkdXJpbmcgZGF5bGlnaHQgc2F2aW5ncyBvciBub3QuXG5cbiAgICAvLyBXaXRob3V0IHJlZkRhdGUgYXMgY29udGV4dCwgdGhlcmUncyBubyB3YXkgdG8ga25vdyBpZiBEU1Qgb3Igbm9uLURTVCBvZmZzZXQgc2hvdWxkIGJlIHVzZWQuIFJldHVybiBudWxsIGluc3RlYWQuXG4gICAgaWYgKGRhdGUgPT0gbnVsbCkge1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICAvLyBSZXR1cm4gRFNUIG9mZnNldCBpZiB0aGUgcmVmRGF0ZSBpcyBkdXJpbmcgZGF5bGlnaHQgc2F2aW5nc1xuICAgIGlmIChcbiAgICAgICAgZGF5anMoZGF0ZSkuaXNBZnRlcihtYXRjaGVkVGltZXpvbmUuZHN0U3RhcnQoZGF0ZS5nZXRGdWxsWWVhcigpKSkgJiZcbiAgICAgICAgIWRheWpzKGRhdGUpLmlzQWZ0ZXIobWF0Y2hlZFRpbWV6b25lLmRzdEVuZChkYXRlLmdldEZ1bGxZZWFyKCkpKVxuICAgICkge1xuICAgICAgICByZXR1cm4gbWF0Y2hlZFRpbWV6b25lLnRpbWV6b25lT2Zmc2V0RHVyaW5nRHN0O1xuICAgIH1cblxuICAgIC8vIHJlZkRhdGUgaXMgbm90IGR1cmluZyBEU1QgPT4gcmV0dXJuIG5vbi1EU1Qgb2Zmc2V0XG4gICAgcmV0dXJuIG1hdGNoZWRUaW1lem9uZS50aW1lem9uZU9mZnNldE5vbkRzdDtcbn1cbiIsICJpbXBvcnQgeyBUaW1ldW5pdCB9IGZyb20gXCIuLi90eXBlc1wiO1xuXG5leHBvcnQgdHlwZSBUaW1ldW5pdFNob3J0ZW4gPSBcInlcIiB8IFwibW9cIiB8IFwiTVwiIHwgXCJ3XCIgfCBcImRcIiB8IFwiaFwiIHwgXCJtXCIgfCBcInNcIiB8IFwibXNcIjtcbmV4cG9ydCB0eXBlIFRpbWV1bml0U3BlY2lhbCA9IFwicXVhcnRlclwiO1xuXG4vKipcbiAqIEEgdHlwZSByZXByZXNlbnQgYSBkaXJlY3RlZCB0aW1lIGR1cmF0aW9uIGFzIGEgc2V0IG9mIHZhbHVlcyBieSB0aW1ldW5pdHMuXG4gKiBUaGUgcG9zaXRpdmUgdmFsdWVzIG1lYW4gdGhlIHRpbWUgZHVyYXRpb24gaW50byB0aGUgZnV0dXJlLlxuICovXG5leHBvcnQgdHlwZSBEdXJhdGlvbiA9IHsgW2MgaW4gVGltZXVuaXQgfCBUaW1ldW5pdFNwZWNpYWwgfCBUaW1ldW5pdFNob3J0ZW5dPzogbnVtYmVyIH07XG5cbi8qKlxuICogUmV0dXJucyB0aGUgZGF0ZSBhZnRlciBhZGRpbmcgdGhlIGdpdmVuIGBkdXJhdGlvbmAgdG8gYHJlZmAuXG4gKiBAcGFyYW0gcmVmXG4gKiBAcGFyYW0gZHVyYXRpb25cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGFkZER1cmF0aW9uKHJlZjogRGF0ZSwgZHVyYXRpb246IER1cmF0aW9uKTogRGF0ZSB7XG4gICAgbGV0IGRhdGUgPSBuZXcgRGF0ZShyZWYpO1xuXG4gICAgLy8gUmVwbGFjZSBzaG9ydCB0aW1ldW5pdCBrZXlzIHdpdGggZnVsbCB0aW1ldW5pdCBrZXlzXG4gICAgaWYgKGR1cmF0aW9uW1wieVwiXSkge1xuICAgICAgICBkdXJhdGlvbltcInllYXJcIl0gPSBkdXJhdGlvbltcInlcIl07XG4gICAgICAgIGRlbGV0ZSBkdXJhdGlvbltcInlcIl07XG4gICAgfVxuICAgIGlmIChkdXJhdGlvbltcIm1vXCJdKSB7XG4gICAgICAgIGR1cmF0aW9uW1wibW9udGhcIl0gPSBkdXJhdGlvbltcIm1vXCJdO1xuICAgICAgICBkZWxldGUgZHVyYXRpb25bXCJtb1wiXTtcbiAgICB9XG4gICAgaWYgKGR1cmF0aW9uW1wiTVwiXSkge1xuICAgICAgICBkdXJhdGlvbltcIm1vbnRoXCJdID0gZHVyYXRpb25bXCJNXCJdO1xuICAgICAgICBkZWxldGUgZHVyYXRpb25bXCJNXCJdO1xuICAgIH1cbiAgICBpZiAoZHVyYXRpb25bXCJ3XCJdKSB7XG4gICAgICAgIGR1cmF0aW9uW1wid2Vla1wiXSA9IGR1cmF0aW9uW1wid1wiXTtcbiAgICAgICAgZGVsZXRlIGR1cmF0aW9uW1wid1wiXTtcbiAgICB9XG4gICAgaWYgKGR1cmF0aW9uW1wiZFwiXSkge1xuICAgICAgICBkdXJhdGlvbltcImRheVwiXSA9IGR1cmF0aW9uW1wiZFwiXTtcbiAgICAgICAgZGVsZXRlIGR1cmF0aW9uW1wiZFwiXTtcbiAgICB9XG4gICAgaWYgKGR1cmF0aW9uW1wiaFwiXSkge1xuICAgICAgICBkdXJhdGlvbltcImhvdXJcIl0gPSBkdXJhdGlvbltcImhcIl07XG4gICAgICAgIGRlbGV0ZSBkdXJhdGlvbltcImhcIl07XG4gICAgfVxuICAgIGlmIChkdXJhdGlvbltcIm1cIl0pIHtcbiAgICAgICAgZHVyYXRpb25bXCJtaW51dGVcIl0gPSBkdXJhdGlvbltcIm1cIl07XG4gICAgICAgIGRlbGV0ZSBkdXJhdGlvbltcIm1cIl07XG4gICAgfVxuICAgIGlmIChkdXJhdGlvbltcInNcIl0pIHtcbiAgICAgICAgZHVyYXRpb25bXCJzZWNvbmRcIl0gPSBkdXJhdGlvbltcInNcIl07XG4gICAgICAgIGRlbGV0ZSBkdXJhdGlvbltcInNcIl07XG4gICAgfVxuICAgIGlmIChkdXJhdGlvbltcIm1zXCJdKSB7XG4gICAgICAgIGR1cmF0aW9uW1wibWlsbGlzZWNvbmRcIl0gPSBkdXJhdGlvbltcIm1zXCJdO1xuICAgICAgICBkZWxldGUgZHVyYXRpb25bXCJtc1wiXTtcbiAgICB9XG5cbiAgICBpZiAoXCJ5ZWFyXCIgaW4gZHVyYXRpb24pIHtcbiAgICAgICAgY29uc3QgZmxvb3IgPSBNYXRoLmZsb29yKGR1cmF0aW9uW1wieWVhclwiXSk7XG4gICAgICAgIGRhdGUuc2V0RnVsbFllYXIoZGF0ZS5nZXRGdWxsWWVhcigpICsgZmxvb3IpO1xuICAgICAgICBjb25zdCByZW1haW5pbmdGcmFjdGlvbiA9IGR1cmF0aW9uW1wieWVhclwiXSAtIGZsb29yO1xuICAgICAgICBpZiAocmVtYWluaW5nRnJhY3Rpb24gPiAwKSB7XG4gICAgICAgICAgICBkdXJhdGlvbi5tb250aCA9IGR1cmF0aW9uPy5tb250aCA/PyAwO1xuICAgICAgICAgICAgZHVyYXRpb24ubW9udGggKz0gcmVtYWluaW5nRnJhY3Rpb24gKiAxMjtcbiAgICAgICAgfVxuICAgIH1cbiAgICBpZiAoXCJxdWFydGVyXCIgaW4gZHVyYXRpb24pIHtcbiAgICAgICAgY29uc3QgZmxvb3IgPSBNYXRoLmZsb29yKGR1cmF0aW9uW1wicXVhcnRlclwiXSk7XG4gICAgICAgIGRhdGUuc2V0TW9udGgoZGF0ZS5nZXRNb250aCgpICsgZmxvb3IgKiAzKTtcbiAgICB9XG4gICAgaWYgKFwibW9udGhcIiBpbiBkdXJhdGlvbikge1xuICAgICAgICBjb25zdCBmbG9vciA9IE1hdGguZmxvb3IoZHVyYXRpb25bXCJtb250aFwiXSk7XG4gICAgICAgIGRhdGUuc2V0TW9udGgoZGF0ZS5nZXRNb250aCgpICsgZmxvb3IpO1xuICAgICAgICBjb25zdCByZW1haW5pbmdGcmFjdGlvbiA9IGR1cmF0aW9uW1wibW9udGhcIl0gLSBmbG9vcjtcbiAgICAgICAgaWYgKHJlbWFpbmluZ0ZyYWN0aW9uID4gMCkge1xuICAgICAgICAgICAgZHVyYXRpb24ud2VlayA9IGR1cmF0aW9uPy53ZWVrID8/IDA7XG4gICAgICAgICAgICBkdXJhdGlvbi53ZWVrICs9IHJlbWFpbmluZ0ZyYWN0aW9uICogNDtcbiAgICAgICAgfVxuICAgIH1cbiAgICBpZiAoXCJ3ZWVrXCIgaW4gZHVyYXRpb24pIHtcbiAgICAgICAgY29uc3QgZmxvb3IgPSBNYXRoLmZsb29yKGR1cmF0aW9uW1wid2Vla1wiXSk7XG4gICAgICAgIGRhdGUuc2V0RGF0ZShkYXRlLmdldERhdGUoKSArIGZsb29yICogNyk7XG4gICAgICAgIGNvbnN0IHJlbWFpbmluZ0ZyYWN0aW9uID0gZHVyYXRpb25bXCJ3ZWVrXCJdIC0gZmxvb3I7XG4gICAgICAgIGlmIChyZW1haW5pbmdGcmFjdGlvbiA+IDApIHtcbiAgICAgICAgICAgIGR1cmF0aW9uLmRheSA9IGR1cmF0aW9uPy5kYXkgPz8gMDtcbiAgICAgICAgICAgIGR1cmF0aW9uLmRheSArPSBNYXRoLnJvdW5kKHJlbWFpbmluZ0ZyYWN0aW9uICogNyk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgaWYgKFwiZGF5XCIgaW4gZHVyYXRpb24pIHtcbiAgICAgICAgY29uc3QgZmxvb3IgPSBNYXRoLmZsb29yKGR1cmF0aW9uW1wiZGF5XCJdKTtcbiAgICAgICAgZGF0ZS5zZXREYXRlKGRhdGUuZ2V0RGF0ZSgpICsgZmxvb3IpO1xuICAgICAgICBjb25zdCByZW1haW5pbmdGcmFjdGlvbiA9IGR1cmF0aW9uW1wiZGF5XCJdIC0gZmxvb3I7XG4gICAgICAgIGlmIChyZW1haW5pbmdGcmFjdGlvbiA+IDApIHtcbiAgICAgICAgICAgIGR1cmF0aW9uLmhvdXIgPSBkdXJhdGlvbj8uaG91ciA/PyAwO1xuICAgICAgICAgICAgZHVyYXRpb24uaG91ciArPSBNYXRoLnJvdW5kKHJlbWFpbmluZ0ZyYWN0aW9uICogMjQpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGlmIChcImhvdXJcIiBpbiBkdXJhdGlvbikge1xuICAgICAgICBjb25zdCBmbG9vciA9IE1hdGguZmxvb3IoZHVyYXRpb25bXCJob3VyXCJdKTtcbiAgICAgICAgZGF0ZS5zZXRIb3VycyhkYXRlLmdldEhvdXJzKCkgKyBmbG9vcik7XG4gICAgICAgIGNvbnN0IHJlbWFpbmluZ0ZyYWN0aW9uID0gZHVyYXRpb25bXCJob3VyXCJdIC0gZmxvb3I7XG4gICAgICAgIGlmIChyZW1haW5pbmdGcmFjdGlvbiA+IDApIHtcbiAgICAgICAgICAgIGR1cmF0aW9uLm1pbnV0ZSA9IGR1cmF0aW9uPy5taW51dGUgPz8gMDtcbiAgICAgICAgICAgIGR1cmF0aW9uLm1pbnV0ZSArPSBNYXRoLnJvdW5kKHJlbWFpbmluZ0ZyYWN0aW9uICogNjApO1xuICAgICAgICB9XG4gICAgfVxuICAgIGlmIChcIm1pbnV0ZVwiIGluIGR1cmF0aW9uKSB7XG4gICAgICAgIGNvbnN0IGZsb29yID0gTWF0aC5mbG9vcihkdXJhdGlvbltcIm1pbnV0ZVwiXSk7XG4gICAgICAgIGRhdGUuc2V0TWludXRlcyhkYXRlLmdldE1pbnV0ZXMoKSArIGZsb29yKTtcbiAgICAgICAgY29uc3QgcmVtYWluaW5nRnJhY3Rpb24gPSBkdXJhdGlvbltcIm1pbnV0ZVwiXSAtIGZsb29yO1xuICAgICAgICBpZiAocmVtYWluaW5nRnJhY3Rpb24gPiAwKSB7XG4gICAgICAgICAgICBkdXJhdGlvbi5zZWNvbmQgPSBkdXJhdGlvbj8uc2Vjb25kID8/IDA7XG4gICAgICAgICAgICBkdXJhdGlvbi5zZWNvbmQgKz0gTWF0aC5yb3VuZChyZW1haW5pbmdGcmFjdGlvbiAqIDYwKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBpZiAoXCJzZWNvbmRcIiBpbiBkdXJhdGlvbikge1xuICAgICAgICBjb25zdCBmbG9vciA9IE1hdGguZmxvb3IoZHVyYXRpb25bXCJzZWNvbmRcIl0pO1xuICAgICAgICBkYXRlLnNldFNlY29uZHMoZGF0ZS5nZXRTZWNvbmRzKCkgKyBmbG9vcik7XG4gICAgICAgIGNvbnN0IHJlbWFpbmluZ0ZyYWN0aW9uID0gZHVyYXRpb25bXCJzZWNvbmRcIl0gLSBmbG9vcjtcbiAgICAgICAgaWYgKHJlbWFpbmluZ0ZyYWN0aW9uID4gMCkge1xuICAgICAgICAgICAgZHVyYXRpb24ubWlsbGlzZWNvbmQgPSBkdXJhdGlvbj8ubWlsbGlzZWNvbmQgPz8gMDtcbiAgICAgICAgICAgIGR1cmF0aW9uLm1pbGxpc2Vjb25kICs9IE1hdGgucm91bmQocmVtYWluaW5nRnJhY3Rpb24gKiAxMDAwKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBpZiAoXCJtaWxsaXNlY29uZFwiIGluIGR1cmF0aW9uKSB7XG4gICAgICAgIGNvbnN0IGZsb29yID0gTWF0aC5mbG9vcihkdXJhdGlvbltcIm1pbGxpc2Vjb25kXCJdKTtcbiAgICAgICAgZGF0ZS5zZXRNaWxsaXNlY29uZHMoZGF0ZS5nZXRNaWxsaXNlY29uZHMoKSArIGZsb29yKTtcbiAgICB9XG4gICAgcmV0dXJuIGRhdGU7XG59XG5cbi8qKlxuICogUmV0dXJuIHRoZSByZXZlcnNlZCBkdXJhdGlvbiAoZS5nLiBiYWNrIGludG8gdGhlIHBhc3QsIGluc3RlYWQgb2YgZnV0dXJlKVxuICogQHBhcmFtIGR1cmF0aW9uXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiByZXZlcnNlRHVyYXRpb24oZHVyYXRpb246IER1cmF0aW9uKTogRHVyYXRpb24ge1xuICAgIGNvbnN0IHJldmVyc2VkID0ge307XG4gICAgZm9yIChjb25zdCBrZXkgaW4gZHVyYXRpb24pIHtcbiAgICAgICAgLy8gbm9pbnNwZWN0aW9uIEpTVW5maWx0ZXJlZEZvckluTG9vcFxuICAgICAgICByZXZlcnNlZFtrZXldID0gLWR1cmF0aW9uW2tleV07XG4gICAgfVxuICAgIHJldHVybiByZXZlcnNlZCBhcyBEdXJhdGlvbjtcbn1cbiIsICJ0eXBlIERpY3Rpb25hcnlMaWtlID0gc3RyaW5nW10gfCB7IFt3b3JkOiBzdHJpbmddOiB1bmtub3duIH0gfCBNYXA8c3RyaW5nLCB1bmtub3duPjtcblxuZXhwb3J0IGZ1bmN0aW9uIHJlcGVhdGVkVGltZXVuaXRQYXR0ZXJuKFxuICAgIHByZWZpeDogc3RyaW5nLFxuICAgIHNpbmdsZVRpbWV1bml0UGF0dGVybjogc3RyaW5nLFxuICAgIGNvbm5lY3RvclBhdHRlcm4gPSBcIlxcXFxzezAsNX0sP1xcXFxzezAsNX1cIlxuKTogc3RyaW5nIHtcbiAgICBjb25zdCBzaW5nbGVUaW1ldW5pdFBhdHRlcm5Ob0NhcHR1cmUgPSBzaW5nbGVUaW1ldW5pdFBhdHRlcm4ucmVwbGFjZSgvXFwoKD8hXFw/KS9nLCBcIig/OlwiKTtcbiAgICByZXR1cm4gYCR7cHJlZml4fSR7c2luZ2xlVGltZXVuaXRQYXR0ZXJuTm9DYXB0dXJlfSg/OiR7Y29ubmVjdG9yUGF0dGVybn0ke3NpbmdsZVRpbWV1bml0UGF0dGVybk5vQ2FwdHVyZX0pezAsMTB9YDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGV4dHJhY3RUZXJtcyhkaWN0aW9uYXJ5OiBEaWN0aW9uYXJ5TGlrZSk6IHN0cmluZ1tdIHtcbiAgICBsZXQga2V5czogc3RyaW5nW107XG4gICAgaWYgKGRpY3Rpb25hcnkgaW5zdGFuY2VvZiBBcnJheSkge1xuICAgICAgICBrZXlzID0gWy4uLmRpY3Rpb25hcnldO1xuICAgIH0gZWxzZSBpZiAoZGljdGlvbmFyeSBpbnN0YW5jZW9mIE1hcCkge1xuICAgICAgICBrZXlzID0gQXJyYXkuZnJvbSgoZGljdGlvbmFyeSBhcyBNYXA8c3RyaW5nLCB1bmtub3duPikua2V5cygpKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBrZXlzID0gT2JqZWN0LmtleXMoZGljdGlvbmFyeSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGtleXM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBtYXRjaEFueVBhdHRlcm4oZGljdGlvbmFyeTogRGljdGlvbmFyeUxpa2UpOiBzdHJpbmcge1xuICAgIC8vIFRPRE86IE1vcmUgZWZmaWNpZW50IHJlZ2V4IHBhdHRlcm4gYnkgY29uc2lkZXJpbmcgZHVwbGljYXRlZCBwcmVmaXhcblxuICAgIGNvbnN0IGpvaW5lZFRlcm1zID0gZXh0cmFjdFRlcm1zKGRpY3Rpb25hcnkpXG4gICAgICAgIC5zb3J0KChhLCBiKSA9PiBiLmxlbmd0aCAtIGEubGVuZ3RoKVxuICAgICAgICAuam9pbihcInxcIilcbiAgICAgICAgLnJlcGxhY2UoL1xcLi9nLCBcIlxcXFwuXCIpO1xuXG4gICAgcmV0dXJuIGAoPzoke2pvaW5lZFRlcm1zfSlgO1xufVxuIiwgImltcG9ydCBkYXlqcyBmcm9tIFwiZGF5anNcIjtcblxuLyoqXG4gKiBGaW5kIHRoZSBtb3N0IGxpa2VseSB5ZWFyLCBmcm9tIGEgcmF3IG51bWJlci4gRm9yIGV4YW1wbGU6XG4gKiAxOTk3ID0+IDE5OTdcbiAqIDk3ID0+IDE5OTdcbiAqIDEyID0+IDIwMTJcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGZpbmRNb3N0TGlrZWx5QURZZWFyKHllYXJOdW1iZXI6IG51bWJlcik6IG51bWJlciB7XG4gICAgaWYgKHllYXJOdW1iZXIgPCAxMDApIHtcbiAgICAgICAgaWYgKHllYXJOdW1iZXIgPiA1MCkge1xuICAgICAgICAgICAgeWVhck51bWJlciA9IHllYXJOdW1iZXIgKyAxOTAwO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgeWVhck51bWJlciA9IHllYXJOdW1iZXIgKyAyMDAwO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHllYXJOdW1iZXI7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBmaW5kWWVhckNsb3Nlc3RUb1JlZihyZWZEYXRlOiBEYXRlLCBkYXk6IG51bWJlciwgbW9udGg6IG51bWJlcik6IG51bWJlciB7XG4gICAgLy9GaW5kIHRoZSBtb3N0IGFwcHJvcHJpYXRlZCB5ZWFyXG4gICAgY29uc3QgcmVmTW9tZW50ID0gZGF5anMocmVmRGF0ZSk7XG4gICAgbGV0IGRhdGVNb21lbnQgPSByZWZNb21lbnQ7XG4gICAgZGF0ZU1vbWVudCA9IGRhdGVNb21lbnQubW9udGgobW9udGggLSAxKTtcbiAgICBkYXRlTW9tZW50ID0gZGF0ZU1vbWVudC5kYXRlKGRheSk7XG4gICAgZGF0ZU1vbWVudCA9IGRhdGVNb21lbnQueWVhcihyZWZNb21lbnQueWVhcigpKTtcblxuICAgIGNvbnN0IG5leHRZZWFyID0gZGF0ZU1vbWVudC5hZGQoMSwgXCJ5XCIpO1xuICAgIGNvbnN0IGxhc3RZZWFyID0gZGF0ZU1vbWVudC5hZGQoLTEsIFwieVwiKTtcbiAgICBpZiAoTWF0aC5hYnMobmV4dFllYXIuZGlmZihyZWZNb21lbnQpKSA8IE1hdGguYWJzKGRhdGVNb21lbnQuZGlmZihyZWZNb21lbnQpKSkge1xuICAgICAgICBkYXRlTW9tZW50ID0gbmV4dFllYXI7XG4gICAgfSBlbHNlIGlmIChNYXRoLmFicyhsYXN0WWVhci5kaWZmKHJlZk1vbWVudCkpIDwgTWF0aC5hYnMoZGF0ZU1vbWVudC5kaWZmKHJlZk1vbWVudCkpKSB7XG4gICAgICAgIGRhdGVNb21lbnQgPSBsYXN0WWVhcjtcbiAgICB9XG5cbiAgICByZXR1cm4gZGF0ZU1vbWVudC55ZWFyKCk7XG59XG4iLCAiaW1wb3J0IHsgT3BVbml0VHlwZSwgUVVuaXRUeXBlIH0gZnJvbSBcImRheWpzXCI7XG5pbXBvcnQgeyBtYXRjaEFueVBhdHRlcm4sIHJlcGVhdGVkVGltZXVuaXRQYXR0ZXJuIH0gZnJvbSBcIi4uLy4uL3V0aWxzL3BhdHRlcm5cIjtcbmltcG9ydCB7IGZpbmRNb3N0TGlrZWx5QURZZWFyIH0gZnJvbSBcIi4uLy4uL2NhbGN1bGF0aW9uL3llYXJzXCI7XG5pbXBvcnQgeyBUaW1lVW5pdHMgfSBmcm9tIFwiLi4vLi4vdXRpbHMvdGltZXVuaXRzXCI7XG5pbXBvcnQgeyBXZWVrZGF5IH0gZnJvbSBcIi4uLy4uL3R5cGVzXCI7XG5cbmV4cG9ydCBjb25zdCBXRUVLREFZX0RJQ1RJT05BUlk6IHsgW3dvcmQ6IHN0cmluZ106IFdlZWtkYXkgfSA9IHtcbiAgICBzdW5kYXk6IDAsXG4gICAgc3VuOiAwLFxuICAgIFwic3VuLlwiOiAwLFxuICAgIG1vbmRheTogMSxcbiAgICBtb246IDEsXG4gICAgXCJtb24uXCI6IDEsXG4gICAgdHVlc2RheTogMixcbiAgICB0dWU6IDIsXG4gICAgXCJ0dWUuXCI6IDIsXG4gICAgd2VkbmVzZGF5OiAzLFxuICAgIHdlZDogMyxcbiAgICBcIndlZC5cIjogMyxcbiAgICB0aHVyc2RheTogNCxcbiAgICB0aHVyczogNCxcbiAgICBcInRodXJzLlwiOiA0LFxuICAgIHRodXI6IDQsXG4gICAgXCJ0aHVyLlwiOiA0LFxuICAgIHRodTogNCxcbiAgICBcInRodS5cIjogNCxcbiAgICBmcmlkYXk6IDUsXG4gICAgZnJpOiA1LFxuICAgIFwiZnJpLlwiOiA1LFxuICAgIHNhdHVyZGF5OiA2LFxuICAgIHNhdDogNixcbiAgICBcInNhdC5cIjogNixcbn07XG5cbmV4cG9ydCBjb25zdCBGVUxMX01PTlRIX05BTUVfRElDVElPTkFSWTogeyBbd29yZDogc3RyaW5nXTogbnVtYmVyIH0gPSB7XG4gICAgamFudWFyeTogMSxcbiAgICBmZWJydWFyeTogMixcbiAgICBtYXJjaDogMyxcbiAgICBhcHJpbDogNCxcbiAgICBtYXk6IDUsXG4gICAganVuZTogNixcbiAgICBqdWx5OiA3LFxuICAgIGF1Z3VzdDogOCxcbiAgICBzZXB0ZW1iZXI6IDksXG4gICAgb2N0b2JlcjogMTAsXG4gICAgbm92ZW1iZXI6IDExLFxuICAgIGRlY2VtYmVyOiAxMixcbn07XG5cbmV4cG9ydCBjb25zdCBNT05USF9ESUNUSU9OQVJZOiB7IFt3b3JkOiBzdHJpbmddOiBudW1iZXIgfSA9IHtcbiAgICAuLi5GVUxMX01PTlRIX05BTUVfRElDVElPTkFSWSxcbiAgICBqYW46IDEsXG4gICAgXCJqYW4uXCI6IDEsXG4gICAgZmViOiAyLFxuICAgIFwiZmViLlwiOiAyLFxuICAgIG1hcjogMyxcbiAgICBcIm1hci5cIjogMyxcbiAgICBhcHI6IDQsXG4gICAgXCJhcHIuXCI6IDQsXG4gICAganVuOiA2LFxuICAgIFwianVuLlwiOiA2LFxuICAgIGp1bDogNyxcbiAgICBcImp1bC5cIjogNyxcbiAgICBhdWc6IDgsXG4gICAgXCJhdWcuXCI6IDgsXG4gICAgc2VwOiA5LFxuICAgIFwic2VwLlwiOiA5LFxuICAgIHNlcHQ6IDksXG4gICAgXCJzZXB0LlwiOiA5LFxuICAgIG9jdDogMTAsXG4gICAgXCJvY3QuXCI6IDEwLFxuICAgIG5vdjogMTEsXG4gICAgXCJub3YuXCI6IDExLFxuICAgIGRlYzogMTIsXG4gICAgXCJkZWMuXCI6IDEyLFxufTtcblxuZXhwb3J0IGNvbnN0IElOVEVHRVJfV09SRF9ESUNUSU9OQVJZOiB7IFt3b3JkOiBzdHJpbmddOiBudW1iZXIgfSA9IHtcbiAgICBvbmU6IDEsXG4gICAgdHdvOiAyLFxuICAgIHRocmVlOiAzLFxuICAgIGZvdXI6IDQsXG4gICAgZml2ZTogNSxcbiAgICBzaXg6IDYsXG4gICAgc2V2ZW46IDcsXG4gICAgZWlnaHQ6IDgsXG4gICAgbmluZTogOSxcbiAgICB0ZW46IDEwLFxuICAgIGVsZXZlbjogMTEsXG4gICAgdHdlbHZlOiAxMixcbn07XG5cbmV4cG9ydCBjb25zdCBPUkRJTkFMX1dPUkRfRElDVElPTkFSWTogeyBbd29yZDogc3RyaW5nXTogbnVtYmVyIH0gPSB7XG4gICAgZmlyc3Q6IDEsXG4gICAgc2Vjb25kOiAyLFxuICAgIHRoaXJkOiAzLFxuICAgIGZvdXJ0aDogNCxcbiAgICBmaWZ0aDogNSxcbiAgICBzaXh0aDogNixcbiAgICBzZXZlbnRoOiA3LFxuICAgIGVpZ2h0aDogOCxcbiAgICBuaW50aDogOSxcbiAgICB0ZW50aDogMTAsXG4gICAgZWxldmVudGg6IDExLFxuICAgIHR3ZWxmdGg6IDEyLFxuICAgIHRoaXJ0ZWVudGg6IDEzLFxuICAgIGZvdXJ0ZWVudGg6IDE0LFxuICAgIGZpZnRlZW50aDogMTUsXG4gICAgc2l4dGVlbnRoOiAxNixcbiAgICBzZXZlbnRlZW50aDogMTcsXG4gICAgZWlnaHRlZW50aDogMTgsXG4gICAgbmluZXRlZW50aDogMTksXG4gICAgdHdlbnRpZXRoOiAyMCxcbiAgICBcInR3ZW50eSBmaXJzdFwiOiAyMSxcbiAgICBcInR3ZW50eS1maXJzdFwiOiAyMSxcbiAgICBcInR3ZW50eSBzZWNvbmRcIjogMjIsXG4gICAgXCJ0d2VudHktc2Vjb25kXCI6IDIyLFxuICAgIFwidHdlbnR5IHRoaXJkXCI6IDIzLFxuICAgIFwidHdlbnR5LXRoaXJkXCI6IDIzLFxuICAgIFwidHdlbnR5IGZvdXJ0aFwiOiAyNCxcbiAgICBcInR3ZW50eS1mb3VydGhcIjogMjQsXG4gICAgXCJ0d2VudHkgZmlmdGhcIjogMjUsXG4gICAgXCJ0d2VudHktZmlmdGhcIjogMjUsXG4gICAgXCJ0d2VudHkgc2l4dGhcIjogMjYsXG4gICAgXCJ0d2VudHktc2l4dGhcIjogMjYsXG4gICAgXCJ0d2VudHkgc2V2ZW50aFwiOiAyNyxcbiAgICBcInR3ZW50eS1zZXZlbnRoXCI6IDI3LFxuICAgIFwidHdlbnR5IGVpZ2h0aFwiOiAyOCxcbiAgICBcInR3ZW50eS1laWdodGhcIjogMjgsXG4gICAgXCJ0d2VudHkgbmludGhcIjogMjksXG4gICAgXCJ0d2VudHktbmludGhcIjogMjksXG4gICAgXCJ0aGlydGlldGhcIjogMzAsXG4gICAgXCJ0aGlydHkgZmlyc3RcIjogMzEsXG4gICAgXCJ0aGlydHktZmlyc3RcIjogMzEsXG59O1xuXG5leHBvcnQgY29uc3QgVElNRV9VTklUX0RJQ1RJT05BUllfTk9fQUJCUjogeyBbd29yZDogc3RyaW5nXTogT3BVbml0VHlwZSB8IFFVbml0VHlwZSB9ID0ge1xuICAgIHNlY29uZDogXCJzZWNvbmRcIixcbiAgICBzZWNvbmRzOiBcInNlY29uZFwiLFxuICAgIG1pbnV0ZTogXCJtaW51dGVcIixcbiAgICBtaW51dGVzOiBcIm1pbnV0ZVwiLFxuICAgIGhvdXI6IFwiaG91clwiLFxuICAgIGhvdXJzOiBcImhvdXJcIixcbiAgICBkYXk6IFwiZFwiLFxuICAgIGRheXM6IFwiZFwiLFxuICAgIHdlZWs6IFwid2Vla1wiLFxuICAgIHdlZWtzOiBcIndlZWtcIixcbiAgICBtb250aDogXCJtb250aFwiLFxuICAgIG1vbnRoczogXCJtb250aFwiLFxuICAgIHF1YXJ0ZXI6IFwicXVhcnRlclwiLFxuICAgIHF1YXJ0ZXJzOiBcInF1YXJ0ZXJcIixcbiAgICB5ZWFyOiBcInllYXJcIixcbiAgICB5ZWFyczogXCJ5ZWFyXCIsXG59O1xuXG5leHBvcnQgY29uc3QgVElNRV9VTklUX0RJQ1RJT05BUlk6IHsgW3dvcmQ6IHN0cmluZ106IE9wVW5pdFR5cGUgfCBRVW5pdFR5cGUgfSA9IHtcbiAgICBzOiBcInNlY29uZFwiLFxuICAgIHNlYzogXCJzZWNvbmRcIixcbiAgICBzZWNvbmQ6IFwic2Vjb25kXCIsXG4gICAgc2Vjb25kczogXCJzZWNvbmRcIixcbiAgICBtOiBcIm1pbnV0ZVwiLFxuICAgIG1pbjogXCJtaW51dGVcIixcbiAgICBtaW5zOiBcIm1pbnV0ZVwiLFxuICAgIG1pbnV0ZTogXCJtaW51dGVcIixcbiAgICBtaW51dGVzOiBcIm1pbnV0ZVwiLFxuICAgIGg6IFwiaG91clwiLFxuICAgIGhyOiBcImhvdXJcIixcbiAgICBocnM6IFwiaG91clwiLFxuICAgIGhvdXI6IFwiaG91clwiLFxuICAgIGhvdXJzOiBcImhvdXJcIixcbiAgICBkOiBcImRcIixcbiAgICBkYXk6IFwiZFwiLFxuICAgIGRheXM6IFwiZFwiLFxuICAgIHc6IFwid1wiLFxuICAgIHdlZWs6IFwid2Vla1wiLFxuICAgIHdlZWtzOiBcIndlZWtcIixcbiAgICBtbzogXCJtb250aFwiLFxuICAgIG1vbjogXCJtb250aFwiLFxuICAgIG1vczogXCJtb250aFwiLFxuICAgIG1vbnRoOiBcIm1vbnRoXCIsXG4gICAgbW9udGhzOiBcIm1vbnRoXCIsXG4gICAgcXRyOiBcInF1YXJ0ZXJcIixcbiAgICBxdWFydGVyOiBcInF1YXJ0ZXJcIixcbiAgICBxdWFydGVyczogXCJxdWFydGVyXCIsXG4gICAgeTogXCJ5ZWFyXCIsXG4gICAgeXI6IFwieWVhclwiLFxuICAgIHllYXI6IFwieWVhclwiLFxuICAgIHllYXJzOiBcInllYXJcIixcbiAgICAvLyBBbHNvLCBtZXJnZSB0aGUgZW50cmllcyBmcm9tIHRoZSBmdWxsLW5hbWUgZGljdGlvbmFyeS5cbiAgICAvLyBXZSBsZWF2ZSB0aGUgZHVwbGljYXRlZCBlbnRyaWVzIGZvciByZWFkYWJpbGl0eS5cbiAgICAuLi5USU1FX1VOSVRfRElDVElPTkFSWV9OT19BQkJSLFxufTtcblxuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG5leHBvcnQgY29uc3QgTlVNQkVSX1BBVFRFUk4gPSBgKD86JHttYXRjaEFueVBhdHRlcm4oXG4gICAgSU5URUdFUl9XT1JEX0RJQ1RJT05BUllcbil9fFswLTldK3xbMC05XStcXFxcLlswLTldK3xoYWxmKD86XFxcXHN7MCwyfWFuPyk/fGFuP1xcXFxiKD86XFxcXHN7MCwyfWZldyk/fGZld3xzZXZlcmFsfHRoZXxhP1xcXFxzezAsMn1jb3VwbGVcXFxcc3swLDJ9KD86b2YpPylgO1xuXG5leHBvcnQgZnVuY3Rpb24gcGFyc2VOdW1iZXJQYXR0ZXJuKG1hdGNoOiBzdHJpbmcpOiBudW1iZXIge1xuICAgIGNvbnN0IG51bSA9IG1hdGNoLnRvTG93ZXJDYXNlKCk7XG4gICAgaWYgKElOVEVHRVJfV09SRF9ESUNUSU9OQVJZW251bV0gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICByZXR1cm4gSU5URUdFUl9XT1JEX0RJQ1RJT05BUllbbnVtXTtcbiAgICB9IGVsc2UgaWYgKG51bSA9PT0gXCJhXCIgfHwgbnVtID09PSBcImFuXCIgfHwgbnVtID09IFwidGhlXCIpIHtcbiAgICAgICAgcmV0dXJuIDE7XG4gICAgfSBlbHNlIGlmIChudW0ubWF0Y2goL2Zldy8pKSB7XG4gICAgICAgIHJldHVybiAzO1xuICAgIH0gZWxzZSBpZiAobnVtLm1hdGNoKC9oYWxmLykpIHtcbiAgICAgICAgcmV0dXJuIDAuNTtcbiAgICB9IGVsc2UgaWYgKG51bS5tYXRjaCgvY291cGxlLykpIHtcbiAgICAgICAgcmV0dXJuIDI7XG4gICAgfSBlbHNlIGlmIChudW0ubWF0Y2goL3NldmVyYWwvKSkge1xuICAgICAgICByZXR1cm4gNztcbiAgICB9XG5cbiAgICByZXR1cm4gcGFyc2VGbG9hdChudW0pO1xufVxuXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbmV4cG9ydCBjb25zdCBPUkRJTkFMX05VTUJFUl9QQVRURVJOID0gYCg/OiR7bWF0Y2hBbnlQYXR0ZXJuKE9SRElOQUxfV09SRF9ESUNUSU9OQVJZKX18WzAtOV17MSwyfSg/OnN0fG5kfHJkfHRoKT8pYDtcbmV4cG9ydCBmdW5jdGlvbiBwYXJzZU9yZGluYWxOdW1iZXJQYXR0ZXJuKG1hdGNoOiBzdHJpbmcpOiBudW1iZXIge1xuICAgIGxldCBudW0gPSBtYXRjaC50b0xvd2VyQ2FzZSgpO1xuICAgIGlmIChPUkRJTkFMX1dPUkRfRElDVElPTkFSWVtudW1dICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgcmV0dXJuIE9SRElOQUxfV09SRF9ESUNUSU9OQVJZW251bV07XG4gICAgfVxuXG4gICAgbnVtID0gbnVtLnJlcGxhY2UoLyg/OnN0fG5kfHJkfHRoKSQvaSwgXCJcIik7XG4gICAgcmV0dXJuIHBhcnNlSW50KG51bSk7XG59XG5cbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuZXhwb3J0IGNvbnN0IFlFQVJfUEFUVEVSTiA9IGAoPzpbMS05XVswLTldezAsM31cXFxcc3swLDJ9KD86QkV8QUR8QkN8QkNFfENFKXxbMS0yXVswLTldezN9fFs1LTldWzAtOV18MlswLTVdKWA7XG5leHBvcnQgZnVuY3Rpb24gcGFyc2VZZWFyKG1hdGNoOiBzdHJpbmcpOiBudW1iZXIge1xuICAgIGlmICgvQkUvaS50ZXN0KG1hdGNoKSkge1xuICAgICAgICAvLyBCdWRkaGlzdCBFcmFcbiAgICAgICAgbWF0Y2ggPSBtYXRjaC5yZXBsYWNlKC9CRS9pLCBcIlwiKTtcbiAgICAgICAgcmV0dXJuIHBhcnNlSW50KG1hdGNoKSAtIDU0MztcbiAgICB9XG5cbiAgICBpZiAoL0JDRT8vaS50ZXN0KG1hdGNoKSkge1xuICAgICAgICAvLyBCZWZvcmUgQ2hyaXN0LCBCZWZvcmUgQ29tbW9uIEVyYVxuICAgICAgICBtYXRjaCA9IG1hdGNoLnJlcGxhY2UoL0JDRT8vaSwgXCJcIik7XG4gICAgICAgIHJldHVybiAtcGFyc2VJbnQobWF0Y2gpO1xuICAgIH1cblxuICAgIGlmICgvKEFEfENFKS9pLnRlc3QobWF0Y2gpKSB7XG4gICAgICAgIC8vIEFubm8gRG9taW5pLCBDb21tb24gRXJhXG4gICAgICAgIG1hdGNoID0gbWF0Y2gucmVwbGFjZSgvKEFEfENFKS9pLCBcIlwiKTtcbiAgICAgICAgcmV0dXJuIHBhcnNlSW50KG1hdGNoKTtcbiAgICB9XG5cbiAgICBjb25zdCByYXdZZWFyTnVtYmVyID0gcGFyc2VJbnQobWF0Y2gpO1xuICAgIHJldHVybiBmaW5kTW9zdExpa2VseUFEWWVhcihyYXdZZWFyTnVtYmVyKTtcbn1cblxuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG5jb25zdCBTSU5HTEVfVElNRV9VTklUX1BBVFRFUk4gPSBgKCR7TlVNQkVSX1BBVFRFUk59KVxcXFxzezAsM30oJHttYXRjaEFueVBhdHRlcm4oVElNRV9VTklUX0RJQ1RJT05BUlkpfSlgO1xuY29uc3QgU0lOR0xFX1RJTUVfVU5JVF9SRUdFWCA9IG5ldyBSZWdFeHAoU0lOR0xFX1RJTUVfVU5JVF9QQVRURVJOLCBcImlcIik7XG5cbmNvbnN0IFNJTkdMRV9USU1FX1VOSVRfTk9fQUJCUl9QQVRURVJOID0gYCgke05VTUJFUl9QQVRURVJOfSlcXFxcc3swLDN9KCR7bWF0Y2hBbnlQYXR0ZXJuKFxuICAgIFRJTUVfVU5JVF9ESUNUSU9OQVJZX05PX0FCQlJcbil9KWA7XG5cbmNvbnN0IFRJTUVfVU5JVF9DT05ORUNUT1JfUEFUVEVSTiA9IGBcXFxcc3swLDV9LD8oPzpcXFxccyphbmQpP1xcXFxzezAsNX1gO1xuXG5leHBvcnQgY29uc3QgVElNRV9VTklUU19QQVRURVJOID0gcmVwZWF0ZWRUaW1ldW5pdFBhdHRlcm4oXG4gICAgYCg/Oig/OmFib3V0fGFyb3VuZClcXFxcc3swLDN9KT9gLFxuICAgIFNJTkdMRV9USU1FX1VOSVRfUEFUVEVSTixcbiAgICBUSU1FX1VOSVRfQ09OTkVDVE9SX1BBVFRFUk5cbik7XG5leHBvcnQgY29uc3QgVElNRV9VTklUU19OT19BQkJSX1BBVFRFUk4gPSByZXBlYXRlZFRpbWV1bml0UGF0dGVybihcbiAgICBgKD86KD86YWJvdXR8YXJvdW5kKVxcXFxzezAsM30pP2AsXG4gICAgU0lOR0xFX1RJTUVfVU5JVF9OT19BQkJSX1BBVFRFUk4sXG4gICAgVElNRV9VTklUX0NPTk5FQ1RPUl9QQVRURVJOXG4pO1xuXG5leHBvcnQgZnVuY3Rpb24gcGFyc2VUaW1lVW5pdHModGltZXVuaXRUZXh0KTogbnVsbCB8IFRpbWVVbml0cyB7XG4gICAgY29uc3QgZnJhZ21lbnRzID0ge307XG4gICAgbGV0IHJlbWFpbmluZ1RleHQgPSB0aW1ldW5pdFRleHQ7XG4gICAgbGV0IG1hdGNoID0gU0lOR0xFX1RJTUVfVU5JVF9SRUdFWC5leGVjKHJlbWFpbmluZ1RleHQpO1xuICAgIHdoaWxlIChtYXRjaCkge1xuICAgICAgICBjb2xsZWN0RGF0ZVRpbWVGcmFnbWVudChmcmFnbWVudHMsIG1hdGNoKTtcbiAgICAgICAgcmVtYWluaW5nVGV4dCA9IHJlbWFpbmluZ1RleHQuc3Vic3RyaW5nKG1hdGNoWzBdLmxlbmd0aCkudHJpbSgpO1xuICAgICAgICBtYXRjaCA9IFNJTkdMRV9USU1FX1VOSVRfUkVHRVguZXhlYyhyZW1haW5pbmdUZXh0KTtcbiAgICB9XG4gICAgaWYgKE9iamVjdC5rZXlzKGZyYWdtZW50cykubGVuZ3RoID09IDApIHtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIHJldHVybiBmcmFnbWVudHM7XG59XG5cbmZ1bmN0aW9uIGNvbGxlY3REYXRlVGltZUZyYWdtZW50KGZyYWdtZW50cywgbWF0Y2gpIHtcbiAgICBpZiAobWF0Y2hbMF0ubWF0Y2goL15bYS16QS1aXSskLykpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCBudW0gPSBwYXJzZU51bWJlclBhdHRlcm4obWF0Y2hbMV0pO1xuICAgIGNvbnN0IHVuaXQgPSBUSU1FX1VOSVRfRElDVElPTkFSWVttYXRjaFsyXS50b0xvd2VyQ2FzZSgpXTtcbiAgICBmcmFnbWVudHNbdW5pdF0gPSBudW07XG59XG4iLCAiaW1wb3J0IHsgUGFyc2VyLCBQYXJzaW5nQ29udGV4dCB9IGZyb20gXCIuLi8uLi9jaHJvbm9cIjtcbmltcG9ydCB7IFBhcnNpbmdDb21wb25lbnRzLCBQYXJzaW5nUmVzdWx0IH0gZnJvbSBcIi4uLy4uL3Jlc3VsdHNcIjtcbmltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gXCIuLi8uLi90eXBlc1wiO1xuXG4vKipcbiAqIEEgcGFyc2VyIHRoYXQgY2hlY2tzIGZvciB3b3JkIGJvdW5kYXJ5IGFuZCBhcHBseWluZyB0aGUgaW5uZXIgcGF0dGVybiBhbmQgZXh0cmFjdGlvbi5cbiAqL1xuZXhwb3J0IGFic3RyYWN0IGNsYXNzIEFic3RyYWN0UGFyc2VyV2l0aFdvcmRCb3VuZGFyeUNoZWNraW5nIGltcGxlbWVudHMgUGFyc2VyIHtcbiAgICBhYnN0cmFjdCBpbm5lclBhdHRlcm4oY29udGV4dDogUGFyc2luZ0NvbnRleHQpOiBSZWdFeHA7XG4gICAgYWJzdHJhY3QgaW5uZXJFeHRyYWN0KFxuICAgICAgICBjb250ZXh0OiBQYXJzaW5nQ29udGV4dCxcbiAgICAgICAgbWF0Y2g6IFJlZ0V4cE1hdGNoQXJyYXlcbiAgICApOiBQYXJzaW5nQ29tcG9uZW50cyB8IFBhcnNpbmdSZXN1bHQgfCB7IFtjIGluIENvbXBvbmVudF0/OiBudW1iZXIgfSB8IG51bGw7XG5cbiAgICAvLyBPdmVycmlkZXMgdGhpcyBtZXRob2QgaWYgdGhlcmUgaXMgbW9yZSBlZmZpY2llbnQgd2F5IHRvIGNoZWNrIGZvciBpbm5lciBwYXR0ZXJuIGNoYW5nZS5cbiAgICBpbm5lclBhdHRlcm5IYXNDaGFuZ2UoY29udGV4dDogUGFyc2luZ0NvbnRleHQsIGN1cnJlbnRJbm5lclBhdHRlcm46IFJlZ0V4cCk6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gdGhpcy5pbm5lclBhdHRlcm4oY29udGV4dCkgIT09IGN1cnJlbnRJbm5lclBhdHRlcm47XG4gICAgfVxuXG4gICAgcGF0dGVybkxlZnRCb3VuZGFyeSgpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gYChcXFxcV3xeKWA7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBjYWNoZWRJbm5lclBhdHRlcm4/OiBSZWdFeHAgPSBudWxsO1xuICAgIHByaXZhdGUgY2FjaGVkUGF0dGVybj86IFJlZ0V4cCA9IG51bGw7XG5cbiAgICBwYXR0ZXJuKGNvbnRleHQ6IFBhcnNpbmdDb250ZXh0KTogUmVnRXhwIHtcbiAgICAgICAgaWYgKHRoaXMuY2FjaGVkSW5uZXJQYXR0ZXJuKSB7XG4gICAgICAgICAgICBpZiAoIXRoaXMuaW5uZXJQYXR0ZXJuSGFzQ2hhbmdlKGNvbnRleHQsIHRoaXMuY2FjaGVkSW5uZXJQYXR0ZXJuKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmNhY2hlZFBhdHRlcm47XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5jYWNoZWRJbm5lclBhdHRlcm4gPSB0aGlzLmlubmVyUGF0dGVybihjb250ZXh0KTtcbiAgICAgICAgdGhpcy5jYWNoZWRQYXR0ZXJuID0gbmV3IFJlZ0V4cChcbiAgICAgICAgICAgIGAke3RoaXMucGF0dGVybkxlZnRCb3VuZGFyeSgpfSR7dGhpcy5jYWNoZWRJbm5lclBhdHRlcm4uc291cmNlfWAsXG4gICAgICAgICAgICB0aGlzLmNhY2hlZElubmVyUGF0dGVybi5mbGFnc1xuICAgICAgICApO1xuICAgICAgICByZXR1cm4gdGhpcy5jYWNoZWRQYXR0ZXJuO1xuICAgIH1cblxuICAgIGV4dHJhY3QoY29udGV4dDogUGFyc2luZ0NvbnRleHQsIG1hdGNoOiBSZWdFeHBNYXRjaEFycmF5KSB7XG4gICAgICAgIGNvbnN0IGhlYWRlciA9IG1hdGNoWzFdID8/IFwiXCI7XG4gICAgICAgIG1hdGNoLmluZGV4ID0gbWF0Y2guaW5kZXggKyBoZWFkZXIubGVuZ3RoO1xuICAgICAgICBtYXRjaFswXSA9IG1hdGNoWzBdLnN1YnN0cmluZyhoZWFkZXIubGVuZ3RoKTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDI7IGkgPCBtYXRjaC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgbWF0Y2hbaSAtIDFdID0gbWF0Y2hbaV07XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGhpcy5pbm5lckV4dHJhY3QoY29udGV4dCwgbWF0Y2gpO1xuICAgIH1cbn1cbiIsICJpbXBvcnQgeyBUSU1FX1VOSVRTX1BBVFRFUk4sIHBhcnNlVGltZVVuaXRzLCBUSU1FX1VOSVRTX05PX0FCQlJfUEFUVEVSTiB9IGZyb20gXCIuLi9jb25zdGFudHNcIjtcbmltcG9ydCB7IFBhcnNpbmdDb250ZXh0IH0gZnJvbSBcIi4uLy4uLy4uL2Nocm9ub1wiO1xuaW1wb3J0IHsgUGFyc2luZ0NvbXBvbmVudHMgfSBmcm9tIFwiLi4vLi4vLi4vcmVzdWx0c1wiO1xuaW1wb3J0IHsgQWJzdHJhY3RQYXJzZXJXaXRoV29yZEJvdW5kYXJ5Q2hlY2tpbmcgfSBmcm9tIFwiLi4vLi4vLi4vY29tbW9uL3BhcnNlcnMvQWJzdHJhY3RQYXJzZXJXaXRoV29yZEJvdW5kYXJ5XCI7XG5cbmNvbnN0IFBBVFRFUk5fV0lUSF9PUFRJT05BTF9QUkVGSVggPSBuZXcgUmVnRXhwKFxuICAgIGAoPzooPzp3aXRoaW58aW58Zm9yKVxcXFxzKik/YCArXG4gICAgICAgIGAoPzooPzphYm91dHxhcm91bmR8cm91Z2hseXxhcHByb3hpbWF0ZWx5fGp1c3QpXFxcXHMqKD86flxcXFxzKik/KT8oJHtUSU1FX1VOSVRTX1BBVFRFUk59KSg/PVxcXFxXfCQpYCxcbiAgICBcImlcIlxuKTtcblxuY29uc3QgUEFUVEVSTl9XSVRIX1BSRUZJWCA9IG5ldyBSZWdFeHAoXG4gICAgYCg/OndpdGhpbnxpbnxmb3IpXFxcXHMqYCArXG4gICAgICAgIGAoPzooPzphYm91dHxhcm91bmR8cm91Z2hseXxhcHByb3hpbWF0ZWx5fGp1c3QpXFxcXHMqKD86flxcXFxzKik/KT8oJHtUSU1FX1VOSVRTX1BBVFRFUk59KSg/PVxcXFxXfCQpYCxcbiAgICBcImlcIlxuKTtcblxuY29uc3QgUEFUVEVSTl9XSVRIX1BSRUZJWF9TVFJJQ1QgPSBuZXcgUmVnRXhwKFxuICAgIGAoPzp3aXRoaW58aW58Zm9yKVxcXFxzKmAgK1xuICAgICAgICBgKD86KD86YWJvdXR8YXJvdW5kfHJvdWdobHl8YXBwcm94aW1hdGVseXxqdXN0KVxcXFxzKig/On5cXFxccyopPyk/KCR7VElNRV9VTklUU19OT19BQkJSX1BBVFRFUk59KSg/PVxcXFxXfCQpYCxcbiAgICBcImlcIlxuKTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRU5UaW1lVW5pdFdpdGhpbkZvcm1hdFBhcnNlciBleHRlbmRzIEFic3RyYWN0UGFyc2VyV2l0aFdvcmRCb3VuZGFyeUNoZWNraW5nIHtcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHN0cmljdE1vZGU6IGJvb2xlYW4pIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICB9XG5cbiAgICBpbm5lclBhdHRlcm4oY29udGV4dDogUGFyc2luZ0NvbnRleHQpOiBSZWdFeHAge1xuICAgICAgICBpZiAodGhpcy5zdHJpY3RNb2RlKSB7XG4gICAgICAgICAgICByZXR1cm4gUEFUVEVSTl9XSVRIX1BSRUZJWF9TVFJJQ1Q7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGNvbnRleHQub3B0aW9uLmZvcndhcmREYXRlID8gUEFUVEVSTl9XSVRIX09QVElPTkFMX1BSRUZJWCA6IFBBVFRFUk5fV0lUSF9QUkVGSVg7XG4gICAgfVxuXG4gICAgaW5uZXJFeHRyYWN0KGNvbnRleHQ6IFBhcnNpbmdDb250ZXh0LCBtYXRjaDogUmVnRXhwTWF0Y2hBcnJheSkge1xuICAgICAgICAvLyBFeGNsdWRlIFwiZm9yIHRoZSB1bml0XCIgcGhhc2VzLCBlLmcuIFwiZm9yIHRoZSB5ZWFyXCJcbiAgICAgICAgaWYgKG1hdGNoWzBdLm1hdGNoKC9eZm9yXFxzKnRoZVxccypcXHcrLykpIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHRpbWVVbml0cyA9IHBhcnNlVGltZVVuaXRzKG1hdGNoWzFdKTtcbiAgICAgICAgaWYgKCF0aW1lVW5pdHMpIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG4gICAgICAgIGNvbnRleHQuZGVidWcoKCkgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2codGltZVVuaXRzKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFBhcnNpbmdDb21wb25lbnRzLmNyZWF0ZVJlbGF0aXZlRnJvbVJlZmVyZW5jZShjb250ZXh0LnJlZmVyZW5jZSwgdGltZVVuaXRzKSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiBQYXJzaW5nQ29tcG9uZW50cy5jcmVhdGVSZWxhdGl2ZUZyb21SZWZlcmVuY2UoY29udGV4dC5yZWZlcmVuY2UsIHRpbWVVbml0cyk7XG4gICAgfVxufVxuIiwgImltcG9ydCB7IFBhcnNpbmdDb250ZXh0IH0gZnJvbSBcIi4uLy4uLy4uL2Nocm9ub1wiO1xuaW1wb3J0IHsgUGFyc2luZ1Jlc3VsdCB9IGZyb20gXCIuLi8uLi8uLi9yZXN1bHRzXCI7XG5pbXBvcnQgeyBmaW5kWWVhckNsb3Nlc3RUb1JlZiB9IGZyb20gXCIuLi8uLi8uLi9jYWxjdWxhdGlvbi95ZWFyc1wiO1xuaW1wb3J0IHsgTU9OVEhfRElDVElPTkFSWSB9IGZyb20gXCIuLi9jb25zdGFudHNcIjtcbmltcG9ydCB7IFlFQVJfUEFUVEVSTiwgcGFyc2VZZWFyIH0gZnJvbSBcIi4uL2NvbnN0YW50c1wiO1xuaW1wb3J0IHsgT1JESU5BTF9OVU1CRVJfUEFUVEVSTiwgcGFyc2VPcmRpbmFsTnVtYmVyUGF0dGVybiB9IGZyb20gXCIuLi9jb25zdGFudHNcIjtcbmltcG9ydCB7IG1hdGNoQW55UGF0dGVybiB9IGZyb20gXCIuLi8uLi8uLi91dGlscy9wYXR0ZXJuXCI7XG5pbXBvcnQgeyBBYnN0cmFjdFBhcnNlcldpdGhXb3JkQm91bmRhcnlDaGVja2luZyB9IGZyb20gXCIuLi8uLi8uLi9jb21tb24vcGFyc2Vycy9BYnN0cmFjdFBhcnNlcldpdGhXb3JkQm91bmRhcnlcIjtcblxuLy8gcHJldHRpZXItaWdub3JlXG5jb25zdCBQQVRURVJOID0gbmV3IFJlZ0V4cChcbiAgICBgKD86b25cXFxcc3swLDN9KT9gICtcbiAgICAgICAgYCgke09SRElOQUxfTlVNQkVSX1BBVFRFUk59KWAgK1xuICAgICAgICBgKD86YCArXG4gICAgICAgICAgICBgXFxcXHN7MCwzfSg/OnRvfFxcXFwtfFxcXFxcdTIwMTN8dW50aWx8dGhyb3VnaHx0aWxsKT9cXFxcc3swLDN9YCArXG4gICAgICAgICAgICBgKCR7T1JESU5BTF9OVU1CRVJfUEFUVEVSTn0pYCArXG4gICAgICAgIFwiKT9cIiArXG4gICAgICAgIGAoPzotfC98XFxcXHN7MCwzfSg/Om9mKT9cXFxcc3swLDN9KWAgK1xuICAgICAgICBgKCR7bWF0Y2hBbnlQYXR0ZXJuKE1PTlRIX0RJQ1RJT05BUlkpfSlgICtcbiAgICAgICAgXCIoPzpcIiArXG4gICAgICAgICAgICBgKD86LXwvfCw/XFxcXHN7MCwzfSlgICtcbiAgICAgICAgICAgIGAoJHtZRUFSX1BBVFRFUk59KD8hXFxcXHcpKWAgK1xuICAgICAgICBcIik/XCIgK1xuICAgICAgICBcIig/PVxcXFxXfCQpXCIsXG4gICAgXCJpXCJcbik7XG5cbmNvbnN0IERBVEVfR1JPVVAgPSAxO1xuY29uc3QgREFURV9UT19HUk9VUCA9IDI7XG5jb25zdCBNT05USF9OQU1FX0dST1VQID0gMztcbmNvbnN0IFlFQVJfR1JPVVAgPSA0O1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBFTk1vbnRoTmFtZUxpdHRsZUVuZGlhblBhcnNlciBleHRlbmRzIEFic3RyYWN0UGFyc2VyV2l0aFdvcmRCb3VuZGFyeUNoZWNraW5nIHtcbiAgICBpbm5lclBhdHRlcm4oKTogUmVnRXhwIHtcbiAgICAgICAgcmV0dXJuIFBBVFRFUk47XG4gICAgfVxuXG4gICAgaW5uZXJFeHRyYWN0KGNvbnRleHQ6IFBhcnNpbmdDb250ZXh0LCBtYXRjaDogUmVnRXhwTWF0Y2hBcnJheSk6IFBhcnNpbmdSZXN1bHQge1xuICAgICAgICBjb25zdCByZXN1bHQgPSBjb250ZXh0LmNyZWF0ZVBhcnNpbmdSZXN1bHQobWF0Y2guaW5kZXgsIG1hdGNoWzBdKTtcblxuICAgICAgICBjb25zdCBtb250aCA9IE1PTlRIX0RJQ1RJT05BUllbbWF0Y2hbTU9OVEhfTkFNRV9HUk9VUF0udG9Mb3dlckNhc2UoKV07XG4gICAgICAgIGNvbnN0IGRheSA9IHBhcnNlT3JkaW5hbE51bWJlclBhdHRlcm4obWF0Y2hbREFURV9HUk9VUF0pO1xuICAgICAgICBpZiAoZGF5ID4gMzEpIHtcbiAgICAgICAgICAgIC8vIGUuZy4gXCJbOTYgQXVnXVwiID0+IFwiOVs2IEF1Z11cIiwgd2UgbmVlZCB0byBzaGlmdCBhd2F5IGZyb20gdGhlIG5leHQgbnVtYmVyXG4gICAgICAgICAgICBtYXRjaC5pbmRleCA9IG1hdGNoLmluZGV4ICsgbWF0Y2hbREFURV9HUk9VUF0ubGVuZ3RoO1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cblxuICAgICAgICByZXN1bHQuc3RhcnQuYXNzaWduKFwibW9udGhcIiwgbW9udGgpO1xuICAgICAgICByZXN1bHQuc3RhcnQuYXNzaWduKFwiZGF5XCIsIGRheSk7XG5cbiAgICAgICAgaWYgKG1hdGNoW1lFQVJfR1JPVVBdKSB7XG4gICAgICAgICAgICBjb25zdCB5ZWFyTnVtYmVyID0gcGFyc2VZZWFyKG1hdGNoW1lFQVJfR1JPVVBdKTtcbiAgICAgICAgICAgIHJlc3VsdC5zdGFydC5hc3NpZ24oXCJ5ZWFyXCIsIHllYXJOdW1iZXIpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29uc3QgeWVhciA9IGZpbmRZZWFyQ2xvc2VzdFRvUmVmKGNvbnRleHQucmVmRGF0ZSwgZGF5LCBtb250aCk7XG4gICAgICAgICAgICByZXN1bHQuc3RhcnQuaW1wbHkoXCJ5ZWFyXCIsIHllYXIpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKG1hdGNoW0RBVEVfVE9fR1JPVVBdKSB7XG4gICAgICAgICAgICBjb25zdCBlbmREYXRlID0gcGFyc2VPcmRpbmFsTnVtYmVyUGF0dGVybihtYXRjaFtEQVRFX1RPX0dST1VQXSk7XG5cbiAgICAgICAgICAgIHJlc3VsdC5lbmQgPSByZXN1bHQuc3RhcnQuY2xvbmUoKTtcbiAgICAgICAgICAgIHJlc3VsdC5lbmQuYXNzaWduKFwiZGF5XCIsIGVuZERhdGUpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG59XG4iLCAiaW1wb3J0IHsgUGFyc2luZ0NvbnRleHQgfSBmcm9tIFwiLi4vLi4vLi4vY2hyb25vXCI7XG5pbXBvcnQgeyBmaW5kWWVhckNsb3Nlc3RUb1JlZiB9IGZyb20gXCIuLi8uLi8uLi9jYWxjdWxhdGlvbi95ZWFyc1wiO1xuaW1wb3J0IHsgTU9OVEhfRElDVElPTkFSWSB9IGZyb20gXCIuLi9jb25zdGFudHNcIjtcbmltcG9ydCB7IE9SRElOQUxfTlVNQkVSX1BBVFRFUk4sIHBhcnNlT3JkaW5hbE51bWJlclBhdHRlcm4gfSBmcm9tIFwiLi4vY29uc3RhbnRzXCI7XG5pbXBvcnQgeyBZRUFSX1BBVFRFUk4sIHBhcnNlWWVhciB9IGZyb20gXCIuLi9jb25zdGFudHNcIjtcbmltcG9ydCB7IG1hdGNoQW55UGF0dGVybiB9IGZyb20gXCIuLi8uLi8uLi91dGlscy9wYXR0ZXJuXCI7XG5pbXBvcnQgeyBBYnN0cmFjdFBhcnNlcldpdGhXb3JkQm91bmRhcnlDaGVja2luZyB9IGZyb20gXCIuLi8uLi8uLi9jb21tb24vcGFyc2Vycy9BYnN0cmFjdFBhcnNlcldpdGhXb3JkQm91bmRhcnlcIjtcblxuLy8gcHJldHRpZXItaWdub3JlXG5jb25zdCBQQVRURVJOID0gbmV3IFJlZ0V4cChcbiAgICBgKCR7bWF0Y2hBbnlQYXR0ZXJuKE1PTlRIX0RJQ1RJT05BUlkpfSlgICtcbiAgICAgICAgXCIoPzotfC98XFxcXHMqLD9cXFxccyopXCIgK1xuICAgICAgICBgKCR7T1JESU5BTF9OVU1CRVJfUEFUVEVSTn0pKD8hXFxcXHMqKD86YW18cG0pKVxcXFxzKmAgK1xuICAgICAgICBcIig/OlwiICtcbiAgICAgICAgICAgIFwiKD86dG98XFxcXC0pXFxcXHMqXCIgK1xuICAgICAgICAgICAgYCgke09SRElOQUxfTlVNQkVSX1BBVFRFUk59KVxcXFxzKmAgK1xuICAgICAgICBcIik/XCIgK1xuICAgICAgICBcIig/OlwiICtcbiAgICAgICAgICAgIGAoPzotfC98XFxcXHMqLFxcXFxzKnxcXFxccyspYCArXG4gICAgICAgICAgICBgKCR7WUVBUl9QQVRURVJOfSlgICtcbiAgICAgICAgXCIpP1wiICtcbiAgICAgICAgXCIoPz1cXFxcV3wkKSg/IVxcXFw6XFxcXGQpXCIsXG4gICAgXCJpXCJcbik7XG5cbmNvbnN0IE1PTlRIX05BTUVfR1JPVVAgPSAxO1xuY29uc3QgREFURV9HUk9VUCA9IDI7XG5jb25zdCBEQVRFX1RPX0dST1VQID0gMztcbmNvbnN0IFlFQVJfR1JPVVAgPSA0O1xuXG4vKipcbiAqIFRoZSBwYXJzZXIgZm9yIHBhcnNpbmcgVVMncyBkYXRlIGZvcm1hdCB0aGF0IGJlZ2luIHdpdGggbW9udGgncyBuYW1lLlxuICogIC0gSmFudWFyeSAxM1xuICogIC0gSmFudWFyeSAxMywgMjAxMlxuICogIC0gSmFudWFyeSAxMyAtIDE1LCAyMDEyXG4gKiBOb3RlOiBXYXRjaCBvdXQgZm9yOlxuICogIC0gSmFudWFyeSAxMjowMFxuICogIC0gSmFudWFyeSAxMi40NFxuICogIC0gSmFudWFyeSAxMjIyMzQ0XG4gKiAgLSBKYW51YXJ5IDIxICh3aGVuIHNob3VsZFNraXBZZWFyTGlrZURhdGU9dHJ1ZSlcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRU5Nb250aE5hbWVNaWRkbGVFbmRpYW5QYXJzZXIgZXh0ZW5kcyBBYnN0cmFjdFBhcnNlcldpdGhXb3JkQm91bmRhcnlDaGVja2luZyB7XG4gICAgc2hvdWxkU2tpcFllYXJMaWtlRGF0ZTogYm9vbGVhbjtcblxuICAgIGNvbnN0cnVjdG9yKHNob3VsZFNraXBZZWFyTGlrZURhdGU6IGJvb2xlYW4pIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5zaG91bGRTa2lwWWVhckxpa2VEYXRlID0gc2hvdWxkU2tpcFllYXJMaWtlRGF0ZTtcbiAgICB9XG5cbiAgICBpbm5lclBhdHRlcm4oKTogUmVnRXhwIHtcbiAgICAgICAgcmV0dXJuIFBBVFRFUk47XG4gICAgfVxuXG4gICAgaW5uZXJFeHRyYWN0KGNvbnRleHQ6IFBhcnNpbmdDb250ZXh0LCBtYXRjaDogUmVnRXhwTWF0Y2hBcnJheSkge1xuICAgICAgICBjb25zdCBtb250aCA9IE1PTlRIX0RJQ1RJT05BUllbbWF0Y2hbTU9OVEhfTkFNRV9HUk9VUF0udG9Mb3dlckNhc2UoKV07XG4gICAgICAgIGNvbnN0IGRheSA9IHBhcnNlT3JkaW5hbE51bWJlclBhdHRlcm4obWF0Y2hbREFURV9HUk9VUF0pO1xuICAgICAgICBpZiAoZGF5ID4gMzEpIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gU2tpcCB0aGUgY2FzZSB3aGVyZSB0aGUgZGF5IGxvb2tzIGxpa2UgYSB5ZWFyIChleDogSmFudWFyeSAyMSlcbiAgICAgICAgaWYgKHRoaXMuc2hvdWxkU2tpcFllYXJMaWtlRGF0ZSkge1xuICAgICAgICAgICAgaWYgKCFtYXRjaFtEQVRFX1RPX0dST1VQXSAmJiAhbWF0Y2hbWUVBUl9HUk9VUF0gJiYgbWF0Y2hbREFURV9HUk9VUF0ubWF0Y2goL14yWzAtNV0kLykpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBjb25zdCBjb21wb25lbnRzID0gY29udGV4dFxuICAgICAgICAgICAgLmNyZWF0ZVBhcnNpbmdDb21wb25lbnRzKHtcbiAgICAgICAgICAgICAgICBkYXk6IGRheSxcbiAgICAgICAgICAgICAgICBtb250aDogbW9udGgsXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLmFkZFRhZyhcInBhcnNlci9FTk1vbnRoTmFtZU1pZGRsZUVuZGlhblBhcnNlclwiKTtcblxuICAgICAgICBpZiAobWF0Y2hbWUVBUl9HUk9VUF0pIHtcbiAgICAgICAgICAgIGNvbnN0IHllYXIgPSBwYXJzZVllYXIobWF0Y2hbWUVBUl9HUk9VUF0pO1xuICAgICAgICAgICAgY29tcG9uZW50cy5hc3NpZ24oXCJ5ZWFyXCIsIHllYXIpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29uc3QgeWVhciA9IGZpbmRZZWFyQ2xvc2VzdFRvUmVmKGNvbnRleHQucmVmRGF0ZSwgZGF5LCBtb250aCk7XG4gICAgICAgICAgICBjb21wb25lbnRzLmltcGx5KFwieWVhclwiLCB5ZWFyKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIW1hdGNoW0RBVEVfVE9fR1JPVVBdKSB7XG4gICAgICAgICAgICByZXR1cm4gY29tcG9uZW50cztcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFRleHQgY2FuIGJlICdyYW5nZScgdmFsdWUuIFN1Y2ggYXMgJ0phbnVhcnkgMTIgLSAxMywgMjAxMidcbiAgICAgICAgY29uc3QgZW5kRGF0ZSA9IHBhcnNlT3JkaW5hbE51bWJlclBhdHRlcm4obWF0Y2hbREFURV9UT19HUk9VUF0pO1xuICAgICAgICBjb25zdCByZXN1bHQgPSBjb250ZXh0LmNyZWF0ZVBhcnNpbmdSZXN1bHQobWF0Y2guaW5kZXgsIG1hdGNoWzBdKTtcbiAgICAgICAgcmVzdWx0LnN0YXJ0ID0gY29tcG9uZW50cztcbiAgICAgICAgcmVzdWx0LmVuZCA9IGNvbXBvbmVudHMuY2xvbmUoKTtcbiAgICAgICAgcmVzdWx0LmVuZC5hc3NpZ24oXCJkYXlcIiwgZW5kRGF0ZSk7XG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG59XG4iLCAiaW1wb3J0IHsgRlVMTF9NT05USF9OQU1FX0RJQ1RJT05BUlksIE1PTlRIX0RJQ1RJT05BUlkgfSBmcm9tIFwiLi4vY29uc3RhbnRzXCI7XG5pbXBvcnQgeyBQYXJzaW5nQ29udGV4dCB9IGZyb20gXCIuLi8uLi8uLi9jaHJvbm9cIjtcbmltcG9ydCB7IGZpbmRZZWFyQ2xvc2VzdFRvUmVmIH0gZnJvbSBcIi4uLy4uLy4uL2NhbGN1bGF0aW9uL3llYXJzXCI7XG5pbXBvcnQgeyBtYXRjaEFueVBhdHRlcm4gfSBmcm9tIFwiLi4vLi4vLi4vdXRpbHMvcGF0dGVyblwiO1xuaW1wb3J0IHsgWUVBUl9QQVRURVJOLCBwYXJzZVllYXIgfSBmcm9tIFwiLi4vY29uc3RhbnRzXCI7XG5pbXBvcnQgeyBBYnN0cmFjdFBhcnNlcldpdGhXb3JkQm91bmRhcnlDaGVja2luZyB9IGZyb20gXCIuLi8uLi8uLi9jb21tb24vcGFyc2Vycy9BYnN0cmFjdFBhcnNlcldpdGhXb3JkQm91bmRhcnlcIjtcblxuY29uc3QgUEFUVEVSTiA9IG5ldyBSZWdFeHAoXG4gICAgYCgoPzppbilcXFxccyopP2AgK1xuICAgICAgICBgKCR7bWF0Y2hBbnlQYXR0ZXJuKE1PTlRIX0RJQ1RJT05BUlkpfSlgICtcbiAgICAgICAgYFxcXFxzKmAgK1xuICAgICAgICBgKD86YCArXG4gICAgICAgIGAoPzosfC18b2YpP1xcXFxzKigke1lFQVJfUEFUVEVSTn0pP2AgK1xuICAgICAgICBcIik/XCIgK1xuICAgICAgICBcIig/PVteXFxcXHNcXFxcd118XFxcXHMrW14wLTldfFxcXFxzKyR8JClcIixcbiAgICBcImlcIlxuKTtcblxuY29uc3QgUFJFRklYX0dST1VQID0gMTtcbmNvbnN0IE1PTlRIX05BTUVfR1JPVVAgPSAyO1xuY29uc3QgWUVBUl9HUk9VUCA9IDM7XG5cbi8qKlxuICogVGhlIHBhcnNlciBmb3IgcGFyc2luZyBtb250aCBuYW1lIGFuZCB5ZWFyLlxuICogLSBKYW51YXJ5LCAyMDEyXG4gKiAtIEphbnVhcnkgMjAxMlxuICogLSBKYW51YXJ5XG4gKiAoaW4pIEphblxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBFTk1vbnRoTmFtZVBhcnNlciBleHRlbmRzIEFic3RyYWN0UGFyc2VyV2l0aFdvcmRCb3VuZGFyeUNoZWNraW5nIHtcbiAgICBpbm5lclBhdHRlcm4oKTogUmVnRXhwIHtcbiAgICAgICAgcmV0dXJuIFBBVFRFUk47XG4gICAgfVxuXG4gICAgaW5uZXJFeHRyYWN0KGNvbnRleHQ6IFBhcnNpbmdDb250ZXh0LCBtYXRjaDogUmVnRXhwTWF0Y2hBcnJheSkge1xuICAgICAgICBjb25zdCBtb250aE5hbWUgPSBtYXRjaFtNT05USF9OQU1FX0dST1VQXS50b0xvd2VyQ2FzZSgpO1xuXG4gICAgICAgIC8vIHNraXAgc29tZSB1bmxpa2VseSB3b3JkcyBcImphblwiLCBcIm1hclwiLCAuLlxuICAgICAgICBpZiAobWF0Y2hbMF0ubGVuZ3RoIDw9IDMgJiYgIUZVTExfTU9OVEhfTkFNRV9ESUNUSU9OQVJZW21vbnRoTmFtZV0pIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgcmVzdWx0ID0gY29udGV4dC5jcmVhdGVQYXJzaW5nUmVzdWx0KFxuICAgICAgICAgICAgbWF0Y2guaW5kZXggKyAobWF0Y2hbUFJFRklYX0dST1VQXSB8fCBcIlwiKS5sZW5ndGgsXG4gICAgICAgICAgICBtYXRjaC5pbmRleCArIG1hdGNoWzBdLmxlbmd0aFxuICAgICAgICApO1xuICAgICAgICByZXN1bHQuc3RhcnQuaW1wbHkoXCJkYXlcIiwgMSk7XG4gICAgICAgIHJlc3VsdC5zdGFydC5hZGRUYWcoXCJwYXJzZXIvRU5Nb250aE5hbWVQYXJzZXJcIik7XG5cbiAgICAgICAgY29uc3QgbW9udGggPSBNT05USF9ESUNUSU9OQVJZW21vbnRoTmFtZV07XG4gICAgICAgIHJlc3VsdC5zdGFydC5hc3NpZ24oXCJtb250aFwiLCBtb250aCk7XG5cbiAgICAgICAgaWYgKG1hdGNoW1lFQVJfR1JPVVBdKSB7XG4gICAgICAgICAgICBjb25zdCB5ZWFyID0gcGFyc2VZZWFyKG1hdGNoW1lFQVJfR1JPVVBdKTtcbiAgICAgICAgICAgIHJlc3VsdC5zdGFydC5hc3NpZ24oXCJ5ZWFyXCIsIHllYXIpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29uc3QgeWVhciA9IGZpbmRZZWFyQ2xvc2VzdFRvUmVmKGNvbnRleHQucmVmRGF0ZSwgMSwgbW9udGgpO1xuICAgICAgICAgICAgcmVzdWx0LnN0YXJ0LmltcGx5KFwieWVhclwiLCB5ZWFyKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxufVxuIiwgImltcG9ydCB7IFBhcnNpbmdDb250ZXh0IH0gZnJvbSBcIi4uLy4uLy4uL2Nocm9ub1wiO1xuaW1wb3J0IHsgTU9OVEhfRElDVElPTkFSWSB9IGZyb20gXCIuLi9jb25zdGFudHNcIjtcbmltcG9ydCB7IG1hdGNoQW55UGF0dGVybiB9IGZyb20gXCIuLi8uLi8uLi91dGlscy9wYXR0ZXJuXCI7XG5pbXBvcnQgeyBBYnN0cmFjdFBhcnNlcldpdGhXb3JkQm91bmRhcnlDaGVja2luZyB9IGZyb20gXCIuLi8uLi8uLi9jb21tb24vcGFyc2Vycy9BYnN0cmFjdFBhcnNlcldpdGhXb3JkQm91bmRhcnlcIjtcblxuLypcbiAgICBEYXRlIGZvcm1hdCB3aXRoIHNsYXNoIFwiL1wiIGJldHdlZW4gbnVtYmVycyBsaWtlIEVOU2xhc2hEYXRlRm9ybWF0UGFyc2VyLFxuICAgIGJ1dCB0aGlzIHBhcnNlciBleHBlY3QgeWVhciBiZWZvcmUgbW9udGggYW5kIGRhdGUuXG4gICAgLSBZWVlZL01NL0REXG4gICAgLSBZWVlZLU1NLUREXG4gICAgLSBZWVlZLk1NLkREXG4qL1xuY29uc3QgUEFUVEVSTiA9IG5ldyBSZWdFeHAoXG4gICAgYChbMC05XXs0fSlbLVxcXFwuXFxcXC9cXFxcc11gICtcbiAgICAgICAgYCg/Oigke21hdGNoQW55UGF0dGVybihNT05USF9ESUNUSU9OQVJZKX0pfChbMC05XXsxLDJ9KSlbLVxcXFwuXFxcXC9cXFxcc11gICtcbiAgICAgICAgYChbMC05XXsxLDJ9KWAgK1xuICAgICAgICBcIig/PVxcXFxXfCQpXCIsXG4gICAgXCJpXCJcbik7XG5cbmNvbnN0IFlFQVJfTlVNQkVSX0dST1VQID0gMTtcbmNvbnN0IE1PTlRIX05BTUVfR1JPVVAgPSAyO1xuY29uc3QgTU9OVEhfTlVNQkVSX0dST1VQID0gMztcbmNvbnN0IERBVEVfTlVNQkVSX0dST1VQID0gNDtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRU5ZZWFyTW9udGhEYXlQYXJzZXIgZXh0ZW5kcyBBYnN0cmFjdFBhcnNlcldpdGhXb3JkQm91bmRhcnlDaGVja2luZyB7XG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBzdHJpY3RNb250aERhdGVPcmRlcjogYm9vbGVhbikge1xuICAgICAgICBzdXBlcigpO1xuICAgIH1cblxuICAgIGlubmVyUGF0dGVybigpOiBSZWdFeHAge1xuICAgICAgICByZXR1cm4gUEFUVEVSTjtcbiAgICB9XG5cbiAgICBpbm5lckV4dHJhY3QoY29udGV4dDogUGFyc2luZ0NvbnRleHQsIG1hdGNoOiBSZWdFeHBNYXRjaEFycmF5KSB7XG4gICAgICAgIGNvbnN0IHllYXIgPSBwYXJzZUludChtYXRjaFtZRUFSX05VTUJFUl9HUk9VUF0pO1xuICAgICAgICBsZXQgZGF5ID0gcGFyc2VJbnQobWF0Y2hbREFURV9OVU1CRVJfR1JPVVBdKTtcbiAgICAgICAgbGV0IG1vbnRoID0gbWF0Y2hbTU9OVEhfTlVNQkVSX0dST1VQXVxuICAgICAgICAgICAgPyBwYXJzZUludChtYXRjaFtNT05USF9OVU1CRVJfR1JPVVBdKVxuICAgICAgICAgICAgOiBNT05USF9ESUNUSU9OQVJZW21hdGNoW01PTlRIX05BTUVfR1JPVVBdLnRvTG93ZXJDYXNlKCldO1xuXG4gICAgICAgIGlmIChtb250aCA8IDEgfHwgbW9udGggPiAxMikge1xuICAgICAgICAgICAgaWYgKHRoaXMuc3RyaWN0TW9udGhEYXRlT3JkZXIpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChkYXkgPj0gMSAmJiBkYXkgPD0gMTIpIHtcbiAgICAgICAgICAgICAgICBbbW9udGgsIGRheV0gPSBbZGF5LCBtb250aF07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGRheSA8IDEgfHwgZGF5ID4gMzEpIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGRheTogZGF5LFxuICAgICAgICAgICAgbW9udGg6IG1vbnRoLFxuICAgICAgICAgICAgeWVhcjogeWVhcixcbiAgICAgICAgfTtcbiAgICB9XG59XG4iLCAiaW1wb3J0IHsgUGFyc2luZ0NvbnRleHQgfSBmcm9tIFwiLi4vLi4vLi4vY2hyb25vXCI7XG5pbXBvcnQgeyBQYXJzaW5nQ29tcG9uZW50cyB9IGZyb20gXCIuLi8uLi8uLi9yZXN1bHRzXCI7XG5pbXBvcnQgeyBBYnN0cmFjdFBhcnNlcldpdGhXb3JkQm91bmRhcnlDaGVja2luZyB9IGZyb20gXCIuLi8uLi8uLi9jb21tb24vcGFyc2Vycy9BYnN0cmFjdFBhcnNlcldpdGhXb3JkQm91bmRhcnlcIjtcblxuY29uc3QgUEFUVEVSTiA9IG5ldyBSZWdFeHAoXCIoWzAtOV18MFsxLTldfDFbMDEyXSkvKFswLTldezR9KVwiICsgXCJcIiwgXCJpXCIpO1xuXG5jb25zdCBNT05USF9HUk9VUCA9IDE7XG5jb25zdCBZRUFSX0dST1VQID0gMjtcblxuLyoqXG4gKiBNb250aC9ZZWFyIGRhdGUgZm9ybWF0IHdpdGggc2xhc2ggXCIvXCIgKGFsc28gXCItXCIgYW5kIFwiLlwiKSBiZXR3ZWVuIG51bWJlcnNcbiAqIC0gMTEvMDVcbiAqIC0gMDYvMjAwNVxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBFTlNsYXNoTW9udGhGb3JtYXRQYXJzZXIgZXh0ZW5kcyBBYnN0cmFjdFBhcnNlcldpdGhXb3JkQm91bmRhcnlDaGVja2luZyB7XG4gICAgaW5uZXJQYXR0ZXJuKCk6IFJlZ0V4cCB7XG4gICAgICAgIHJldHVybiBQQVRURVJOO1xuICAgIH1cblxuICAgIGlubmVyRXh0cmFjdChjb250ZXh0OiBQYXJzaW5nQ29udGV4dCwgbWF0Y2g6IFJlZ0V4cE1hdGNoQXJyYXkpOiBQYXJzaW5nQ29tcG9uZW50cyB7XG4gICAgICAgIGNvbnN0IHllYXIgPSBwYXJzZUludChtYXRjaFtZRUFSX0dST1VQXSk7XG4gICAgICAgIGNvbnN0IG1vbnRoID0gcGFyc2VJbnQobWF0Y2hbTU9OVEhfR1JPVVBdKTtcblxuICAgICAgICByZXR1cm4gY29udGV4dC5jcmVhdGVQYXJzaW5nQ29tcG9uZW50cygpLmltcGx5KFwiZGF5XCIsIDEpLmFzc2lnbihcIm1vbnRoXCIsIG1vbnRoKS5hc3NpZ24oXCJ5ZWFyXCIsIHllYXIpO1xuICAgIH1cbn1cbiIsICJpbXBvcnQgeyBQYXJzZXIsIFBhcnNpbmdDb250ZXh0IH0gZnJvbSBcIi4uLy4uL2Nocm9ub1wiO1xuaW1wb3J0IHsgUGFyc2luZ0NvbXBvbmVudHMsIFBhcnNpbmdSZXN1bHQgfSBmcm9tIFwiLi4vLi4vcmVzdWx0c1wiO1xuaW1wb3J0IHsgTWVyaWRpZW0gfSBmcm9tIFwiLi4vLi4vdHlwZXNcIjtcblxuLy8gcHJldHRpZXItaWdub3JlXG5mdW5jdGlvbiBwcmltYXJ5VGltZVBhdHRlcm4obGVmdEJvdW5kYXJ5OiBzdHJpbmcsIHByaW1hcnlQcmVmaXg6IHN0cmluZywgcHJpbWFyeVN1ZmZpeDogc3RyaW5nLCBmbGFnczogc3RyaW5nKSB7XG4gICAgcmV0dXJuIG5ldyBSZWdFeHAoXG4gICAgICAgICAgICBgJHtsZWZ0Qm91bmRhcnl9YCArXG4gICAgICAgICAgICBgJHtwcmltYXJ5UHJlZml4fWAgK1xuICAgICAgICAgICAgYChcXFxcZHsxLDR9KWAgK1xuICAgICAgICAgICAgYCg/OmAgK1xuICAgICAgICAgICAgICAgIGAoPzpcXFxcLnw6fFx1RkYxQSlgICtcbiAgICAgICAgICAgICAgICBgKFxcXFxkezEsMn0pYCArXG4gICAgICAgICAgICAgICAgYCg/OmAgK1xuICAgICAgICAgICAgICAgICAgICBgKD86OnxcdUZGMUEpYCArXG4gICAgICAgICAgICAgICAgICAgIGAoXFxcXGR7Mn0pYCArXG4gICAgICAgICAgICAgICAgICAgIGAoPzpcXFxcLihcXFxcZHsxLDZ9KSk/YCArXG4gICAgICAgICAgICAgICAgYCk/YCArXG4gICAgICAgICAgICBgKT9gICtcbiAgICAgICAgICAgIGAoPzpcXFxccyooYVxcXFwubVxcXFwufHBcXFxcLm1cXFxcLnxhbT98cG0/KSk/YCArXG4gICAgICAgICAgICBgJHtwcmltYXJ5U3VmZml4fWAsXG4gICAgICAgIGZsYWdzXG4gICAgKTtcbn1cblxuLy8gcHJldHRpZXItaWdub3JlXG5mdW5jdGlvbiBmb2xsb3dpbmdUaW1lUGF0dGVuKGZvbGxvd2luZ1BoYXNlOiBzdHJpbmcsIGZvbGxvd2luZ1N1ZmZpeDogc3RyaW5nKSB7XG4gICAgcmV0dXJuIG5ldyBSZWdFeHAoXG4gICAgICAgIGBeKCR7Zm9sbG93aW5nUGhhc2V9KWAgK1xuICAgICAgICAgICAgYChcXFxcZHsxLDR9KWAgK1xuICAgICAgICAgICAgYCg/OmAgK1xuICAgICAgICAgICAgICAgIGAoPzpcXFxcLnxcXFxcOnxcXFxcXHVGRjFBKWAgK1xuICAgICAgICAgICAgICAgIGAoXFxcXGR7MSwyfSlgICtcbiAgICAgICAgICAgICAgICBgKD86YCArXG4gICAgICAgICAgICAgICAgICAgIGAoPzpcXFxcLnxcXFxcOnxcXFxcXHVGRjFBKWAgK1xuICAgICAgICAgICAgICAgICAgICBgKFxcXFxkezEsMn0pKD86XFxcXC4oXFxcXGR7MSw2fSkpP2AgK1xuICAgICAgICAgICAgICAgIGApP2AgK1xuICAgICAgICAgICAgYCk/YCArXG4gICAgICAgICAgICBgKD86XFxcXHMqKGFcXFxcLm1cXFxcLnxwXFxcXC5tXFxcXC58YW0/fHBtPykpP2AgK1xuICAgICAgICAgICAgYCR7Zm9sbG93aW5nU3VmZml4fWAsXG4gICAgICAgIFwiaVwiXG4gICAgKTtcbn1cblxuY29uc3QgSE9VUl9HUk9VUCA9IDI7XG5jb25zdCBNSU5VVEVfR1JPVVAgPSAzO1xuY29uc3QgU0VDT05EX0dST1VQID0gNDtcbmNvbnN0IE1JTExJX1NFQ09ORF9HUk9VUCA9IDU7XG5jb25zdCBBTV9QTV9IT1VSX0dST1VQID0gNjtcblxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIEFic3RyYWN0VGltZUV4cHJlc3Npb25QYXJzZXIgaW1wbGVtZW50cyBQYXJzZXIge1xuICAgIGFic3RyYWN0IHByaW1hcnlQcmVmaXgoKTogc3RyaW5nO1xuICAgIGFic3RyYWN0IGZvbGxvd2luZ1BoYXNlKCk6IHN0cmluZztcbiAgICBzdHJpY3RNb2RlOiBib29sZWFuO1xuXG4gICAgY29uc3RydWN0b3Ioc3RyaWN0TW9kZSA9IGZhbHNlKSB7XG4gICAgICAgIHRoaXMuc3RyaWN0TW9kZSA9IHN0cmljdE1vZGU7XG4gICAgfVxuXG4gICAgcGF0dGVybkZsYWdzKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiBcImlcIjtcbiAgICB9XG5cbiAgICBwcmltYXJ5UGF0dGVybkxlZnRCb3VuZGFyeSgpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gYChefFxcXFxzfFR8XFxcXGIpYDtcbiAgICB9XG5cbiAgICBwcmltYXJ5U3VmZml4KCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiBgKD8hLykoPz1cXFxcV3wkKWA7XG4gICAgfVxuXG4gICAgZm9sbG93aW5nU3VmZml4KCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiBgKD8hLykoPz1cXFxcV3wkKWA7XG4gICAgfVxuXG4gICAgcGF0dGVybihjb250ZXh0OiBQYXJzaW5nQ29udGV4dCk6IFJlZ0V4cCB7XG4gICAgICAgIHJldHVybiB0aGlzLmdldFByaW1hcnlUaW1lUGF0dGVyblRocm91Z2hDYWNoZSgpO1xuICAgIH1cblxuICAgIGV4dHJhY3QoY29udGV4dDogUGFyc2luZ0NvbnRleHQsIG1hdGNoOiBSZWdFeHBNYXRjaEFycmF5KTogUGFyc2luZ1Jlc3VsdCB7XG4gICAgICAgIGNvbnN0IHN0YXJ0Q29tcG9uZW50cyA9IHRoaXMuZXh0cmFjdFByaW1hcnlUaW1lQ29tcG9uZW50cyhjb250ZXh0LCBtYXRjaCk7XG4gICAgICAgIGlmICghc3RhcnRDb21wb25lbnRzKSB7XG4gICAgICAgICAgICAvLyBJZiB0aGUgbWF0Y2ggc2VlbSBsaWtlIGEgeWVhciBlLmcuIFwiMjAxMy4xMjouLi5cIixcbiAgICAgICAgICAgIC8vIHRoZW4gc2tpcHMgdGhlIHllYXIgcGFydCBhbmQgdHJ5IG1hdGNoaW5nIGFnYWluLlxuICAgICAgICAgICAgaWYgKG1hdGNoWzBdLm1hdGNoKC9eXFxkezR9LykpIHtcbiAgICAgICAgICAgICAgICBtYXRjaC5pbmRleCArPSA0OyAvLyBTa2lwIG92ZXIgcG90ZW50aWFsIG92ZXJsYXBwaW5nIHBhdHRlcm5cbiAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgbWF0Y2guaW5kZXggKz0gbWF0Y2hbMF0ubGVuZ3RoOyAvLyBTa2lwIG92ZXIgcG90ZW50aWFsIG92ZXJsYXBwaW5nIHBhdHRlcm5cbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgaW5kZXggPSBtYXRjaC5pbmRleCArIG1hdGNoWzFdLmxlbmd0aDtcbiAgICAgICAgY29uc3QgdGV4dCA9IG1hdGNoWzBdLnN1YnN0cmluZyhtYXRjaFsxXS5sZW5ndGgpO1xuICAgICAgICBjb25zdCByZXN1bHQgPSBjb250ZXh0LmNyZWF0ZVBhcnNpbmdSZXN1bHQoaW5kZXgsIHRleHQsIHN0YXJ0Q29tcG9uZW50cyk7XG4gICAgICAgIG1hdGNoLmluZGV4ICs9IG1hdGNoWzBdLmxlbmd0aDsgLy8gU2tpcCBvdmVyIHBvdGVudGlhbCBvdmVybGFwcGluZyBwYXR0ZXJuXG5cbiAgICAgICAgY29uc3QgcmVtYWluaW5nVGV4dCA9IGNvbnRleHQudGV4dC5zdWJzdHJpbmcobWF0Y2guaW5kZXgpO1xuICAgICAgICBjb25zdCBmb2xsb3dpbmdQYXR0ZXJuID0gdGhpcy5nZXRGb2xsb3dpbmdUaW1lUGF0dGVyblRocm91Z2hDYWNoZSgpO1xuICAgICAgICBjb25zdCBmb2xsb3dpbmdNYXRjaCA9IGZvbGxvd2luZ1BhdHRlcm4uZXhlYyhyZW1haW5pbmdUZXh0KTtcblxuICAgICAgICAvLyBQYXR0ZXJuIFwiNDU2LTEyXCIsIFwiMjAyMi0xMlwiIHNob3VsZCBub3QgYmUgdGltZSB3aXRob3V0IHByb3BlciBjb250ZXh0XG4gICAgICAgIGlmICh0ZXh0Lm1hdGNoKC9eXFxkezMsNH0vKSAmJiBmb2xsb3dpbmdNYXRjaCkge1xuICAgICAgICAgICAgLy8gZS5nLiBcIjIwMjItMTJcIlxuICAgICAgICAgICAgaWYgKGZvbGxvd2luZ01hdGNoWzBdLm1hdGNoKC9eXFxzKihbKy1dKVxccypcXGR7Miw0fSQvKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gZS5nLiBcIjIwMjItMTI6MDEuLi5cIlxuICAgICAgICAgICAgaWYgKGZvbGxvd2luZ01hdGNoWzBdLm1hdGNoKC9eXFxzKihbKy1dKVxccypcXGR7Mn1cXFdcXGR7Mn0vKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKFxuICAgICAgICAgICAgIWZvbGxvd2luZ01hdGNoIHx8XG4gICAgICAgICAgICAvLyBQYXR0ZXJuIFwiWVkuWVkgLVhYWFhcIiBpcyBtb3JlIGxpa2UgdGltZXpvbmUgb2Zmc2V0XG4gICAgICAgICAgICBmb2xsb3dpbmdNYXRjaFswXS5tYXRjaCgvXlxccyooWystXSlcXHMqXFxkezMsNH0kLylcbiAgICAgICAgKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5jaGVja0FuZFJldHVybldpdGhvdXRGb2xsb3dpbmdQYXR0ZXJuKHJlc3VsdCk7XG4gICAgICAgIH1cblxuICAgICAgICByZXN1bHQuZW5kID0gdGhpcy5leHRyYWN0Rm9sbG93aW5nVGltZUNvbXBvbmVudHMoY29udGV4dCwgZm9sbG93aW5nTWF0Y2gsIHJlc3VsdCk7XG4gICAgICAgIGlmIChyZXN1bHQuZW5kKSB7XG4gICAgICAgICAgICByZXN1bHQudGV4dCArPSBmb2xsb3dpbmdNYXRjaFswXTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0aGlzLmNoZWNrQW5kUmV0dXJuV2l0aEZvbGxvd2luZ1BhdHRlcm4ocmVzdWx0KTtcbiAgICB9XG5cbiAgICBleHRyYWN0UHJpbWFyeVRpbWVDb21wb25lbnRzKFxuICAgICAgICBjb250ZXh0OiBQYXJzaW5nQ29udGV4dCxcbiAgICAgICAgbWF0Y2g6IFJlZ0V4cE1hdGNoQXJyYXksXG4gICAgICAgIHN0cmljdCA9IGZhbHNlXG4gICAgKTogbnVsbCB8IFBhcnNpbmdDb21wb25lbnRzIHtcbiAgICAgICAgY29uc3QgY29tcG9uZW50cyA9IGNvbnRleHQuY3JlYXRlUGFyc2luZ0NvbXBvbmVudHMoKTtcbiAgICAgICAgbGV0IG1pbnV0ZSA9IDA7XG4gICAgICAgIGxldCBtZXJpZGllbSA9IG51bGw7XG5cbiAgICAgICAgLy8gLS0tLS0gSG91cnNcbiAgICAgICAgbGV0IGhvdXIgPSBwYXJzZUludChtYXRjaFtIT1VSX0dST1VQXSk7XG4gICAgICAgIGlmIChob3VyID4gMTAwKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5zdHJpY3RNb2RlIHx8IG1hdGNoW01JTlVURV9HUk9VUF0gIT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBtaW51dGUgPSBob3VyICUgMTAwO1xuICAgICAgICAgICAgaG91ciA9IE1hdGguZmxvb3IoaG91ciAvIDEwMCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoaG91ciA+IDI0KSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIC0tLS0tIE1pbnV0ZXNcbiAgICAgICAgaWYgKG1hdGNoW01JTlVURV9HUk9VUF0gIT0gbnVsbCkge1xuICAgICAgICAgICAgaWYgKG1hdGNoW01JTlVURV9HUk9VUF0ubGVuZ3RoID09IDEgJiYgIW1hdGNoW0FNX1BNX0hPVVJfR1JPVVBdKSB7XG4gICAgICAgICAgICAgICAgLy8gU2tpcCBzaW5nbGUgZGlnaXQgbWludXRlIGUuZy4gXCJhdCAxLjEgeHhcIlxuICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBtaW51dGUgPSBwYXJzZUludChtYXRjaFtNSU5VVEVfR1JPVVBdKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChtaW51dGUgPj0gNjApIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGhvdXIgPiAxMikge1xuICAgICAgICAgICAgbWVyaWRpZW0gPSBNZXJpZGllbS5QTTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIC0tLS0tIEFNICYgUE1cbiAgICAgICAgaWYgKG1hdGNoW0FNX1BNX0hPVVJfR1JPVVBdICE9IG51bGwpIHtcbiAgICAgICAgICAgIGlmIChob3VyID4gMTIpIHJldHVybiBudWxsO1xuICAgICAgICAgICAgY29uc3QgYW1wbSA9IG1hdGNoW0FNX1BNX0hPVVJfR1JPVVBdWzBdLnRvTG93ZXJDYXNlKCk7XG4gICAgICAgICAgICBpZiAoYW1wbSA9PSBcImFcIikge1xuICAgICAgICAgICAgICAgIG1lcmlkaWVtID0gTWVyaWRpZW0uQU07XG4gICAgICAgICAgICAgICAgaWYgKGhvdXIgPT0gMTIpIHtcbiAgICAgICAgICAgICAgICAgICAgaG91ciA9IDA7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoYW1wbSA9PSBcInBcIikge1xuICAgICAgICAgICAgICAgIG1lcmlkaWVtID0gTWVyaWRpZW0uUE07XG4gICAgICAgICAgICAgICAgaWYgKGhvdXIgIT0gMTIpIHtcbiAgICAgICAgICAgICAgICAgICAgaG91ciArPSAxMjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBjb21wb25lbnRzLmFzc2lnbihcImhvdXJcIiwgaG91cik7XG4gICAgICAgIGNvbXBvbmVudHMuYXNzaWduKFwibWludXRlXCIsIG1pbnV0ZSk7XG5cbiAgICAgICAgaWYgKG1lcmlkaWVtICE9PSBudWxsKSB7XG4gICAgICAgICAgICBjb21wb25lbnRzLmFzc2lnbihcIm1lcmlkaWVtXCIsIG1lcmlkaWVtKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGlmIChob3VyIDwgMTIpIHtcbiAgICAgICAgICAgICAgICBjb21wb25lbnRzLmltcGx5KFwibWVyaWRpZW1cIiwgTWVyaWRpZW0uQU0pO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBjb21wb25lbnRzLmltcGx5KFwibWVyaWRpZW1cIiwgTWVyaWRpZW0uUE0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gLS0tLS0gTWlsbGlzZWNvbmRcbiAgICAgICAgaWYgKG1hdGNoW01JTExJX1NFQ09ORF9HUk9VUF0gIT0gbnVsbCkge1xuICAgICAgICAgICAgY29uc3QgbWlsbGlzZWNvbmQgPSBwYXJzZUludChtYXRjaFtNSUxMSV9TRUNPTkRfR1JPVVBdLnN1YnN0cmluZygwLCAzKSk7XG4gICAgICAgICAgICBpZiAobWlsbGlzZWNvbmQgPj0gMTAwMCkgcmV0dXJuIG51bGw7XG5cbiAgICAgICAgICAgIGNvbXBvbmVudHMuYXNzaWduKFwibWlsbGlzZWNvbmRcIiwgbWlsbGlzZWNvbmQpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gLS0tLS0gU2Vjb25kXG4gICAgICAgIGlmIChtYXRjaFtTRUNPTkRfR1JPVVBdICE9IG51bGwpIHtcbiAgICAgICAgICAgIGNvbnN0IHNlY29uZCA9IHBhcnNlSW50KG1hdGNoW1NFQ09ORF9HUk9VUF0pO1xuICAgICAgICAgICAgaWYgKHNlY29uZCA+PSA2MCkgcmV0dXJuIG51bGw7XG5cbiAgICAgICAgICAgIGNvbXBvbmVudHMuYXNzaWduKFwic2Vjb25kXCIsIHNlY29uZCk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gY29tcG9uZW50cztcbiAgICB9XG5cbiAgICBleHRyYWN0Rm9sbG93aW5nVGltZUNvbXBvbmVudHMoXG4gICAgICAgIGNvbnRleHQ6IFBhcnNpbmdDb250ZXh0LFxuICAgICAgICBtYXRjaDogUmVnRXhwTWF0Y2hBcnJheSxcbiAgICAgICAgcmVzdWx0OiBQYXJzaW5nUmVzdWx0XG4gICAgKTogbnVsbCB8IFBhcnNpbmdDb21wb25lbnRzIHtcbiAgICAgICAgY29uc3QgY29tcG9uZW50cyA9IGNvbnRleHQuY3JlYXRlUGFyc2luZ0NvbXBvbmVudHMoKTtcblxuICAgICAgICAvLyAtLS0tLSBNaWxsaXNlY29uZFxuICAgICAgICBpZiAobWF0Y2hbTUlMTElfU0VDT05EX0dST1VQXSAhPSBudWxsKSB7XG4gICAgICAgICAgICBjb25zdCBtaWxsaXNlY29uZCA9IHBhcnNlSW50KG1hdGNoW01JTExJX1NFQ09ORF9HUk9VUF0uc3Vic3RyaW5nKDAsIDMpKTtcbiAgICAgICAgICAgIGlmIChtaWxsaXNlY29uZCA+PSAxMDAwKSByZXR1cm4gbnVsbDtcblxuICAgICAgICAgICAgY29tcG9uZW50cy5hc3NpZ24oXCJtaWxsaXNlY29uZFwiLCBtaWxsaXNlY29uZCk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyAtLS0tLSBTZWNvbmRcbiAgICAgICAgaWYgKG1hdGNoW1NFQ09ORF9HUk9VUF0gIT0gbnVsbCkge1xuICAgICAgICAgICAgY29uc3Qgc2Vjb25kID0gcGFyc2VJbnQobWF0Y2hbU0VDT05EX0dST1VQXSk7XG4gICAgICAgICAgICBpZiAoc2Vjb25kID49IDYwKSByZXR1cm4gbnVsbDtcblxuICAgICAgICAgICAgY29tcG9uZW50cy5hc3NpZ24oXCJzZWNvbmRcIiwgc2Vjb25kKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBob3VyID0gcGFyc2VJbnQobWF0Y2hbSE9VUl9HUk9VUF0pO1xuICAgICAgICBsZXQgbWludXRlID0gMDtcbiAgICAgICAgbGV0IG1lcmlkaWVtID0gLTE7XG5cbiAgICAgICAgLy8gLS0tLS0gTWludXRlXG4gICAgICAgIGlmIChtYXRjaFtNSU5VVEVfR1JPVVBdICE9IG51bGwpIHtcbiAgICAgICAgICAgIG1pbnV0ZSA9IHBhcnNlSW50KG1hdGNoW01JTlVURV9HUk9VUF0pO1xuICAgICAgICB9IGVsc2UgaWYgKGhvdXIgPiAxMDApIHtcbiAgICAgICAgICAgIG1pbnV0ZSA9IGhvdXIgJSAxMDA7XG4gICAgICAgICAgICBob3VyID0gTWF0aC5mbG9vcihob3VyIC8gMTAwKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChtaW51dGUgPj0gNjAgfHwgaG91ciA+IDI0KSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChob3VyID49IDEyKSB7XG4gICAgICAgICAgICBtZXJpZGllbSA9IE1lcmlkaWVtLlBNO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gLS0tLS0gQU0gJiBQTVxuICAgICAgICBpZiAobWF0Y2hbQU1fUE1fSE9VUl9HUk9VUF0gIT0gbnVsbCkge1xuICAgICAgICAgICAgaWYgKGhvdXIgPiAxMikge1xuICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjb25zdCBhbXBtID0gbWF0Y2hbQU1fUE1fSE9VUl9HUk9VUF1bMF0udG9Mb3dlckNhc2UoKTtcbiAgICAgICAgICAgIGlmIChhbXBtID09IFwiYVwiKSB7XG4gICAgICAgICAgICAgICAgbWVyaWRpZW0gPSBNZXJpZGllbS5BTTtcbiAgICAgICAgICAgICAgICBpZiAoaG91ciA9PSAxMikge1xuICAgICAgICAgICAgICAgICAgICBob3VyID0gMDtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFjb21wb25lbnRzLmlzQ2VydGFpbihcImRheVwiKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50cy5pbXBseShcImRheVwiLCBjb21wb25lbnRzLmdldChcImRheVwiKSArIDEpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoYW1wbSA9PSBcInBcIikge1xuICAgICAgICAgICAgICAgIG1lcmlkaWVtID0gTWVyaWRpZW0uUE07XG4gICAgICAgICAgICAgICAgaWYgKGhvdXIgIT0gMTIpIGhvdXIgKz0gMTI7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICghcmVzdWx0LnN0YXJ0LmlzQ2VydGFpbihcIm1lcmlkaWVtXCIpKSB7XG4gICAgICAgICAgICAgICAgaWYgKG1lcmlkaWVtID09IE1lcmlkaWVtLkFNKSB7XG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdC5zdGFydC5pbXBseShcIm1lcmlkaWVtXCIsIE1lcmlkaWVtLkFNKTtcblxuICAgICAgICAgICAgICAgICAgICBpZiAocmVzdWx0LnN0YXJ0LmdldChcImhvdXJcIikgPT0gMTIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdC5zdGFydC5hc3NpZ24oXCJob3VyXCIsIDApO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0LnN0YXJ0LmltcGx5KFwibWVyaWRpZW1cIiwgTWVyaWRpZW0uUE0pO1xuXG4gICAgICAgICAgICAgICAgICAgIGlmIChyZXN1bHQuc3RhcnQuZ2V0KFwiaG91clwiKSAhPSAxMikge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0LnN0YXJ0LmFzc2lnbihcImhvdXJcIiwgcmVzdWx0LnN0YXJ0LmdldChcImhvdXJcIikgKyAxMik7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBjb21wb25lbnRzLmFzc2lnbihcImhvdXJcIiwgaG91cik7XG4gICAgICAgIGNvbXBvbmVudHMuYXNzaWduKFwibWludXRlXCIsIG1pbnV0ZSk7XG5cbiAgICAgICAgaWYgKG1lcmlkaWVtID49IDApIHtcbiAgICAgICAgICAgIGNvbXBvbmVudHMuYXNzaWduKFwibWVyaWRpZW1cIiwgbWVyaWRpZW0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29uc3Qgc3RhcnRBdFBNID0gcmVzdWx0LnN0YXJ0LmlzQ2VydGFpbihcIm1lcmlkaWVtXCIpICYmIHJlc3VsdC5zdGFydC5nZXQoXCJob3VyXCIpID4gMTI7XG4gICAgICAgICAgICBpZiAoc3RhcnRBdFBNKSB7XG4gICAgICAgICAgICAgICAgaWYgKHJlc3VsdC5zdGFydC5nZXQoXCJob3VyXCIpIC0gMTIgPiBob3VyKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIDEwcG0gLSAxIChhbSlcbiAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50cy5pbXBseShcIm1lcmlkaWVtXCIsIE1lcmlkaWVtLkFNKTtcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGhvdXIgPD0gMTIpIHtcbiAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50cy5hc3NpZ24oXCJob3VyXCIsIGhvdXIgKyAxMik7XG4gICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudHMuYXNzaWduKFwibWVyaWRpZW1cIiwgTWVyaWRpZW0uUE0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSBpZiAoaG91ciA+IDEyKSB7XG4gICAgICAgICAgICAgICAgY29tcG9uZW50cy5pbXBseShcIm1lcmlkaWVtXCIsIE1lcmlkaWVtLlBNKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoaG91ciA8PSAxMikge1xuICAgICAgICAgICAgICAgIGNvbXBvbmVudHMuaW1wbHkoXCJtZXJpZGllbVwiLCBNZXJpZGllbS5BTSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoY29tcG9uZW50cy5kYXRlKCkuZ2V0VGltZSgpIDwgcmVzdWx0LnN0YXJ0LmRhdGUoKS5nZXRUaW1lKCkpIHtcbiAgICAgICAgICAgIGNvbXBvbmVudHMuaW1wbHkoXCJkYXlcIiwgY29tcG9uZW50cy5nZXQoXCJkYXlcIikgKyAxKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBjb21wb25lbnRzO1xuICAgIH1cblxuICAgIHByaXZhdGUgY2hlY2tBbmRSZXR1cm5XaXRob3V0Rm9sbG93aW5nUGF0dGVybihyZXN1bHQpIHtcbiAgICAgICAgLy8gU2luZ2xlIGRpZ2l0IChlLmcgXCIxXCIpIHNob3VsZCBub3QgYmUgY291bnRlZCBhcyB0aW1lIGV4cHJlc3Npb24gKHdpdGhvdXQgcHJvcGVyIGNvbnRleHQpXG4gICAgICAgIGlmIChyZXN1bHQudGV4dC5tYXRjaCgvXlxcZCQvKSkge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBUaHJlZSBvciBtb3JlIGRpZ2l0IChlLmcuIFwiMjAzXCIsIFwiMjAxNFwiKSBzaG91bGQgbm90IGJlIGNvdW50ZWQgYXMgdGltZSBleHByZXNzaW9uICh3aXRob3V0IHByb3BlciBjb250ZXh0KVxuICAgICAgICBpZiAocmVzdWx0LnRleHQubWF0Y2goL15cXGRcXGRcXGQrJC8pKSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIEluc3RlYWQgb2YgXCJhbS9wbVwiLCBpdCBlbmRzIHdpdGggXCJhXCIgb3IgXCJwXCIgKGUuZyBcIjFhXCIsIFwiMTIzcFwiKSwgdGhpcyBzZWVtcyB1bmxpa2VseVxuICAgICAgICBpZiAocmVzdWx0LnRleHQubWF0Y2goL1xcZFthcEFQXSQvKSkge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBJZiBpdCBlbmRzIG9ubHkgd2l0aCBudW1iZXJzIG9yIGRvdHNcbiAgICAgICAgY29uc3QgZW5kaW5nV2l0aE51bWJlcnMgPSByZXN1bHQudGV4dC5tYXRjaCgvW15cXGQ6Ll0oXFxkW1xcZC5dKykkLyk7XG4gICAgICAgIGlmIChlbmRpbmdXaXRoTnVtYmVycykge1xuICAgICAgICAgICAgY29uc3QgZW5kaW5nTnVtYmVyczogc3RyaW5nID0gZW5kaW5nV2l0aE51bWJlcnNbMV07XG5cbiAgICAgICAgICAgIC8vIEluIHN0cmljdCBtb2RlIChlLmcuIFwiYXQgMVwiIG9yIFwiYXQgMS4yXCIpLCB0aGlzIHNob3VsZCBub3QgYmUgYWNjZXB0ZWRcbiAgICAgICAgICAgIGlmICh0aGlzLnN0cmljdE1vZGUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gSWYgaXQgZW5kcyBvbmx5IHdpdGggZG90IHNpbmdsZSBkaWdpdCwgZS5nLiBcImF0IDEuMlwiXG4gICAgICAgICAgICBpZiAoZW5kaW5nTnVtYmVycy5pbmNsdWRlcyhcIi5cIikgJiYgIWVuZGluZ051bWJlcnMubWF0Y2goL1xcZChcXC5cXGR7Mn0pKyQvKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBJZiBpdCBlbmRzIG9ubHkgd2l0aCBudW1iZXJzIGFib3ZlIDI0LCBlLmcuIFwiYXQgMjVcIlxuICAgICAgICAgICAgY29uc3QgZW5kaW5nTnVtYmVyVmFsID0gcGFyc2VJbnQoZW5kaW5nTnVtYmVycyk7XG4gICAgICAgICAgICBpZiAoZW5kaW5nTnVtYmVyVmFsID4gMjQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBjaGVja0FuZFJldHVybldpdGhGb2xsb3dpbmdQYXR0ZXJuKHJlc3VsdCkge1xuICAgICAgICBpZiAocmVzdWx0LnRleHQubWF0Y2goL15cXGQrLVxcZCskLykpIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gSWYgaXQgZW5kcyBvbmx5IHdpdGggbnVtYmVycyBvciBkb3RzXG4gICAgICAgIGNvbnN0IGVuZGluZ1dpdGhOdW1iZXJzID0gcmVzdWx0LnRleHQubWF0Y2goL1teXFxkOi5dKFxcZFtcXGQuXSspXFxzKi1cXHMqKFxcZFtcXGQuXSspJC8pO1xuICAgICAgICBpZiAoZW5kaW5nV2l0aE51bWJlcnMpIHtcbiAgICAgICAgICAgIC8vIEluIHN0cmljdCBtb2RlIChlLmcuIFwiYXQgMS0zXCIgb3IgXCJhdCAxLjIgLSAyLjNcIiksIHRoaXMgc2hvdWxkIG5vdCBiZSBhY2NlcHRlZFxuICAgICAgICAgICAgaWYgKHRoaXMuc3RyaWN0TW9kZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjb25zdCBzdGFydGluZ051bWJlcnM6IHN0cmluZyA9IGVuZGluZ1dpdGhOdW1iZXJzWzFdO1xuICAgICAgICAgICAgY29uc3QgZW5kaW5nTnVtYmVyczogc3RyaW5nID0gZW5kaW5nV2l0aE51bWJlcnNbMl07XG4gICAgICAgICAgICAvLyBJZiBpdCBlbmRzIG9ubHkgd2l0aCBkb3Qgc2luZ2xlIGRpZ2l0LCBlLmcuIFwiYXQgMS4yXCJcbiAgICAgICAgICAgIGlmIChlbmRpbmdOdW1iZXJzLmluY2x1ZGVzKFwiLlwiKSAmJiAhZW5kaW5nTnVtYmVycy5tYXRjaCgvXFxkKFxcLlxcZHsyfSkrJC8pKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIElmIGl0IGVuZHMgb25seSB3aXRoIG51bWJlcnMgYWJvdmUgMjQsIGUuZy4gXCJhdCAyNVwiXG4gICAgICAgICAgICBjb25zdCBlbmRpbmdOdW1iZXJWYWwgPSBwYXJzZUludChlbmRpbmdOdW1iZXJzKTtcbiAgICAgICAgICAgIGNvbnN0IHN0YXJ0aW5nTnVtYmVyVmFsID0gcGFyc2VJbnQoc3RhcnRpbmdOdW1iZXJzKTtcbiAgICAgICAgICAgIGlmIChlbmRpbmdOdW1iZXJWYWwgPiAyNCB8fCBzdGFydGluZ051bWJlclZhbCA+IDI0KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cblxuICAgIHByaXZhdGUgY2FjaGVkUHJpbWFyeVByZWZpeCA9IG51bGw7XG4gICAgcHJpdmF0ZSBjYWNoZWRQcmltYXJ5U3VmZml4ID0gbnVsbDtcbiAgICBwcml2YXRlIGNhY2hlZFByaW1hcnlUaW1lUGF0dGVybiA9IG51bGw7XG5cbiAgICBnZXRQcmltYXJ5VGltZVBhdHRlcm5UaHJvdWdoQ2FjaGUoKSB7XG4gICAgICAgIGNvbnN0IHByaW1hcnlQcmVmaXggPSB0aGlzLnByaW1hcnlQcmVmaXgoKTtcbiAgICAgICAgY29uc3QgcHJpbWFyeVN1ZmZpeCA9IHRoaXMucHJpbWFyeVN1ZmZpeCgpO1xuXG4gICAgICAgIGlmICh0aGlzLmNhY2hlZFByaW1hcnlQcmVmaXggPT09IHByaW1hcnlQcmVmaXggJiYgdGhpcy5jYWNoZWRQcmltYXJ5U3VmZml4ID09PSBwcmltYXJ5U3VmZml4KSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5jYWNoZWRQcmltYXJ5VGltZVBhdHRlcm47XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmNhY2hlZFByaW1hcnlUaW1lUGF0dGVybiA9IHByaW1hcnlUaW1lUGF0dGVybihcbiAgICAgICAgICAgIHRoaXMucHJpbWFyeVBhdHRlcm5MZWZ0Qm91bmRhcnkoKSxcbiAgICAgICAgICAgIHByaW1hcnlQcmVmaXgsXG4gICAgICAgICAgICBwcmltYXJ5U3VmZml4LFxuICAgICAgICAgICAgdGhpcy5wYXR0ZXJuRmxhZ3MoKVxuICAgICAgICApO1xuICAgICAgICB0aGlzLmNhY2hlZFByaW1hcnlQcmVmaXggPSBwcmltYXJ5UHJlZml4O1xuICAgICAgICB0aGlzLmNhY2hlZFByaW1hcnlTdWZmaXggPSBwcmltYXJ5U3VmZml4O1xuICAgICAgICByZXR1cm4gdGhpcy5jYWNoZWRQcmltYXJ5VGltZVBhdHRlcm47XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBjYWNoZWRGb2xsb3dpbmdQaGFzZSA9IG51bGw7XG4gICAgcHJpdmF0ZSBjYWNoZWRGb2xsb3dpbmdTdWZmaXggPSBudWxsO1xuICAgIHByaXZhdGUgY2FjaGVkRm9sbG93aW5nVGltZVBhdHRlbiA9IG51bGw7XG5cbiAgICBnZXRGb2xsb3dpbmdUaW1lUGF0dGVyblRocm91Z2hDYWNoZSgpIHtcbiAgICAgICAgY29uc3QgZm9sbG93aW5nUGhhc2UgPSB0aGlzLmZvbGxvd2luZ1BoYXNlKCk7XG4gICAgICAgIGNvbnN0IGZvbGxvd2luZ1N1ZmZpeCA9IHRoaXMuZm9sbG93aW5nU3VmZml4KCk7XG5cbiAgICAgICAgaWYgKHRoaXMuY2FjaGVkRm9sbG93aW5nUGhhc2UgPT09IGZvbGxvd2luZ1BoYXNlICYmIHRoaXMuY2FjaGVkRm9sbG93aW5nU3VmZml4ID09PSBmb2xsb3dpbmdTdWZmaXgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmNhY2hlZEZvbGxvd2luZ1RpbWVQYXR0ZW47XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmNhY2hlZEZvbGxvd2luZ1RpbWVQYXR0ZW4gPSBmb2xsb3dpbmdUaW1lUGF0dGVuKGZvbGxvd2luZ1BoYXNlLCBmb2xsb3dpbmdTdWZmaXgpO1xuICAgICAgICB0aGlzLmNhY2hlZEZvbGxvd2luZ1BoYXNlID0gZm9sbG93aW5nUGhhc2U7XG4gICAgICAgIHRoaXMuY2FjaGVkRm9sbG93aW5nU3VmZml4ID0gZm9sbG93aW5nU3VmZml4O1xuICAgICAgICByZXR1cm4gdGhpcy5jYWNoZWRGb2xsb3dpbmdUaW1lUGF0dGVuO1xuICAgIH1cbn1cbiIsICJpbXBvcnQgeyBQYXJzaW5nQ29udGV4dCB9IGZyb20gXCIuLi8uLi8uLi9jaHJvbm9cIjtcbmltcG9ydCB7IFBhcnNpbmdDb21wb25lbnRzLCBQYXJzaW5nUmVzdWx0IH0gZnJvbSBcIi4uLy4uLy4uL3Jlc3VsdHNcIjtcbmltcG9ydCB7IE1lcmlkaWVtIH0gZnJvbSBcIi4uLy4uLy4uL3R5cGVzXCI7XG5pbXBvcnQgeyBBYnN0cmFjdFRpbWVFeHByZXNzaW9uUGFyc2VyIH0gZnJvbSBcIi4uLy4uLy4uL2NvbW1vbi9wYXJzZXJzL0Fic3RyYWN0VGltZUV4cHJlc3Npb25QYXJzZXJcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRU5UaW1lRXhwcmVzc2lvblBhcnNlciBleHRlbmRzIEFic3RyYWN0VGltZUV4cHJlc3Npb25QYXJzZXIge1xuICAgIGNvbnN0cnVjdG9yKHN0cmljdE1vZGUpIHtcbiAgICAgICAgc3VwZXIoc3RyaWN0TW9kZSk7XG4gICAgfVxuXG4gICAgZm9sbG93aW5nUGhhc2UoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIFwiXFxcXHMqKD86XFxcXC18XFxcXFx1MjAxM3xcXFxcfnxcXFxcXHUzMDFDfHRvfHVudGlsfHRocm91Z2h8dGlsbHxcXFxcPylcXFxccypcIjtcbiAgICB9XG5cbiAgICBwcmltYXJ5UHJlZml4KCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiBcIig/Oig/OmF0fGZyb20pXFxcXHMqKT8/XCI7XG4gICAgfVxuXG4gICAgcHJpbWFyeVN1ZmZpeCgpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gXCIoPzpcXFxccyooPzpvXFxcXFcqY2xvY2t8YXRcXFxccypuaWdodHxpblxcXFxzKnRoZVxcXFxzKig/Om1vcm5pbmd8YWZ0ZXJub29uKSkpPyg/IS8pKD89XFxcXFd8JClcIjtcbiAgICB9XG5cbiAgICBleHRyYWN0UHJpbWFyeVRpbWVDb21wb25lbnRzKGNvbnRleHQ6IFBhcnNpbmdDb250ZXh0LCBtYXRjaDogUmVnRXhwTWF0Y2hBcnJheSk6IG51bGwgfCBQYXJzaW5nQ29tcG9uZW50cyB7XG4gICAgICAgIGNvbnN0IGNvbXBvbmVudHMgPSBzdXBlci5leHRyYWN0UHJpbWFyeVRpbWVDb21wb25lbnRzKGNvbnRleHQsIG1hdGNoKTtcbiAgICAgICAgaWYgKCFjb21wb25lbnRzKSB7XG4gICAgICAgICAgICByZXR1cm4gY29tcG9uZW50cztcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChtYXRjaFswXS5lbmRzV2l0aChcIm5pZ2h0XCIpKSB7XG4gICAgICAgICAgICBjb25zdCBob3VyID0gY29tcG9uZW50cy5nZXQoXCJob3VyXCIpO1xuICAgICAgICAgICAgaWYgKGhvdXIgPj0gNiAmJiBob3VyIDwgMTIpIHtcbiAgICAgICAgICAgICAgICBjb21wb25lbnRzLmFzc2lnbihcImhvdXJcIiwgY29tcG9uZW50cy5nZXQoXCJob3VyXCIpICsgMTIpO1xuICAgICAgICAgICAgICAgIGNvbXBvbmVudHMuYXNzaWduKFwibWVyaWRpZW1cIiwgTWVyaWRpZW0uUE0pO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChob3VyIDwgNikge1xuICAgICAgICAgICAgICAgIGNvbXBvbmVudHMuYXNzaWduKFwibWVyaWRpZW1cIiwgTWVyaWRpZW0uQU0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKG1hdGNoWzBdLmVuZHNXaXRoKFwiYWZ0ZXJub29uXCIpKSB7XG4gICAgICAgICAgICBjb21wb25lbnRzLmFzc2lnbihcIm1lcmlkaWVtXCIsIE1lcmlkaWVtLlBNKTtcbiAgICAgICAgICAgIGNvbnN0IGhvdXIgPSBjb21wb25lbnRzLmdldChcImhvdXJcIik7XG4gICAgICAgICAgICBpZiAoaG91ciA+PSAwICYmIGhvdXIgPD0gNikge1xuICAgICAgICAgICAgICAgIGNvbXBvbmVudHMuYXNzaWduKFwiaG91clwiLCBjb21wb25lbnRzLmdldChcImhvdXJcIikgKyAxMik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAobWF0Y2hbMF0uZW5kc1dpdGgoXCJtb3JuaW5nXCIpKSB7XG4gICAgICAgICAgICBjb21wb25lbnRzLmFzc2lnbihcIm1lcmlkaWVtXCIsIE1lcmlkaWVtLkFNKTtcbiAgICAgICAgICAgIGNvbnN0IGhvdXIgPSBjb21wb25lbnRzLmdldChcImhvdXJcIik7XG4gICAgICAgICAgICBpZiAoaG91ciA8IDEyKSB7XG4gICAgICAgICAgICAgICAgY29tcG9uZW50cy5hc3NpZ24oXCJob3VyXCIsIGNvbXBvbmVudHMuZ2V0KFwiaG91clwiKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gY29tcG9uZW50cy5hZGRUYWcoXCJwYXJzZXIvRU5UaW1lRXhwcmVzc2lvblBhcnNlclwiKTtcbiAgICB9XG5cbiAgICBleHRyYWN0Rm9sbG93aW5nVGltZUNvbXBvbmVudHMoXG4gICAgICAgIGNvbnRleHQ6IFBhcnNpbmdDb250ZXh0LFxuICAgICAgICBtYXRjaDogUmVnRXhwTWF0Y2hBcnJheSxcbiAgICAgICAgcmVzdWx0OiBQYXJzaW5nUmVzdWx0XG4gICAgKTogUGFyc2luZ0NvbXBvbmVudHMgfCBudWxsIHtcbiAgICAgICAgY29uc3QgZm9sbG93aW5nQ29tcG9uZW50cyA9IHN1cGVyLmV4dHJhY3RGb2xsb3dpbmdUaW1lQ29tcG9uZW50cyhjb250ZXh0LCBtYXRjaCwgcmVzdWx0KTtcbiAgICAgICAgaWYgKGZvbGxvd2luZ0NvbXBvbmVudHMpIHtcbiAgICAgICAgICAgIGZvbGxvd2luZ0NvbXBvbmVudHMuYWRkVGFnKFwicGFyc2VyL0VOVGltZUV4cHJlc3Npb25QYXJzZXJcIik7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZvbGxvd2luZ0NvbXBvbmVudHM7XG4gICAgfVxufVxuIiwgImltcG9ydCB7IFBhcnNpbmdDb250ZXh0IH0gZnJvbSBcIi4uLy4uLy4uL2Nocm9ub1wiO1xuaW1wb3J0IHsgcGFyc2VUaW1lVW5pdHMsIFRJTUVfVU5JVFNfTk9fQUJCUl9QQVRURVJOLCBUSU1FX1VOSVRTX1BBVFRFUk4gfSBmcm9tIFwiLi4vY29uc3RhbnRzXCI7XG5pbXBvcnQgeyBQYXJzaW5nQ29tcG9uZW50cyB9IGZyb20gXCIuLi8uLi8uLi9yZXN1bHRzXCI7XG5pbXBvcnQgeyBBYnN0cmFjdFBhcnNlcldpdGhXb3JkQm91bmRhcnlDaGVja2luZyB9IGZyb20gXCIuLi8uLi8uLi9jb21tb24vcGFyc2Vycy9BYnN0cmFjdFBhcnNlcldpdGhXb3JkQm91bmRhcnlcIjtcbmltcG9ydCB7IHJldmVyc2VEdXJhdGlvbiB9IGZyb20gXCIuLi8uLi8uLi9jYWxjdWxhdGlvbi9kdXJhdGlvblwiO1xuXG5jb25zdCBQQVRURVJOID0gbmV3IFJlZ0V4cChgKCR7VElNRV9VTklUU19QQVRURVJOfSlcXFxcc3swLDV9KD86YWdvfGJlZm9yZXxlYXJsaWVyKSg/PVxcXFxXfCQpYCwgXCJpXCIpO1xuY29uc3QgU1RSSUNUX1BBVFRFUk4gPSBuZXcgUmVnRXhwKGAoJHtUSU1FX1VOSVRTX05PX0FCQlJfUEFUVEVSTn0pXFxcXHN7MCw1fSg/OmFnb3xiZWZvcmV8ZWFybGllcikoPz1cXFxcV3wkKWAsIFwiaVwiKTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRU5UaW1lVW5pdEFnb0Zvcm1hdFBhcnNlciBleHRlbmRzIEFic3RyYWN0UGFyc2VyV2l0aFdvcmRCb3VuZGFyeUNoZWNraW5nIHtcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHN0cmljdE1vZGU6IGJvb2xlYW4pIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICB9XG5cbiAgICBpbm5lclBhdHRlcm4oKTogUmVnRXhwIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc3RyaWN0TW9kZSA/IFNUUklDVF9QQVRURVJOIDogUEFUVEVSTjtcbiAgICB9XG5cbiAgICBpbm5lckV4dHJhY3QoY29udGV4dDogUGFyc2luZ0NvbnRleHQsIG1hdGNoOiBSZWdFeHBNYXRjaEFycmF5KSB7XG4gICAgICAgIGNvbnN0IGR1cmF0aW9uID0gcGFyc2VUaW1lVW5pdHMobWF0Y2hbMV0pO1xuICAgICAgICBpZiAoIWR1cmF0aW9uKSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gUGFyc2luZ0NvbXBvbmVudHMuY3JlYXRlUmVsYXRpdmVGcm9tUmVmZXJlbmNlKGNvbnRleHQucmVmZXJlbmNlLCByZXZlcnNlRHVyYXRpb24oZHVyYXRpb24pKTtcbiAgICB9XG59XG4iLCAiaW1wb3J0IHsgUGFyc2luZ0NvbnRleHQgfSBmcm9tIFwiLi4vLi4vLi4vY2hyb25vXCI7XG5pbXBvcnQgeyBwYXJzZVRpbWVVbml0cywgVElNRV9VTklUU19OT19BQkJSX1BBVFRFUk4sIFRJTUVfVU5JVFNfUEFUVEVSTiB9IGZyb20gXCIuLi9jb25zdGFudHNcIjtcbmltcG9ydCB7IFBhcnNpbmdDb21wb25lbnRzIH0gZnJvbSBcIi4uLy4uLy4uL3Jlc3VsdHNcIjtcbmltcG9ydCB7IEFic3RyYWN0UGFyc2VyV2l0aFdvcmRCb3VuZGFyeUNoZWNraW5nIH0gZnJvbSBcIi4uLy4uLy4uL2NvbW1vbi9wYXJzZXJzL0Fic3RyYWN0UGFyc2VyV2l0aFdvcmRCb3VuZGFyeVwiO1xuXG5jb25zdCBQQVRURVJOID0gbmV3IFJlZ0V4cChcbiAgICBgKCR7VElNRV9VTklUU19QQVRURVJOfSlcXFxcc3swLDV9KD86bGF0ZXJ8YWZ0ZXJ8ZnJvbSBub3d8aGVuY2Vmb3J0aHxmb3J3YXJkfG91dClgICsgXCIoPz0oPzpcXFxcV3wkKSlcIixcbiAgICBcImlcIlxuKTtcblxuY29uc3QgU1RSSUNUX1BBVFRFUk4gPSBuZXcgUmVnRXhwKGAoJHtUSU1FX1VOSVRTX05PX0FCQlJfUEFUVEVSTn0pXFxcXHN7MCw1fShsYXRlcnxhZnRlcnxmcm9tIG5vdykoPz1cXFxcV3wkKWAsIFwiaVwiKTtcbmNvbnN0IEdST1VQX05VTV9USU1FVU5JVFMgPSAxO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBFTlRpbWVVbml0TGF0ZXJGb3JtYXRQYXJzZXIgZXh0ZW5kcyBBYnN0cmFjdFBhcnNlcldpdGhXb3JkQm91bmRhcnlDaGVja2luZyB7XG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBzdHJpY3RNb2RlOiBib29sZWFuKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgfVxuXG4gICAgaW5uZXJQYXR0ZXJuKCk6IFJlZ0V4cCB7XG4gICAgICAgIHJldHVybiB0aGlzLnN0cmljdE1vZGUgPyBTVFJJQ1RfUEFUVEVSTiA6IFBBVFRFUk47XG4gICAgfVxuXG4gICAgaW5uZXJFeHRyYWN0KGNvbnRleHQ6IFBhcnNpbmdDb250ZXh0LCBtYXRjaDogUmVnRXhwTWF0Y2hBcnJheSkge1xuICAgICAgICBjb25zdCB0aW1lVW5pdHMgPSBwYXJzZVRpbWVVbml0cyhtYXRjaFtHUk9VUF9OVU1fVElNRVVOSVRTXSk7XG4gICAgICAgIGlmICghdGltZVVuaXRzKSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gUGFyc2luZ0NvbXBvbmVudHMuY3JlYXRlUmVsYXRpdmVGcm9tUmVmZXJlbmNlKGNvbnRleHQucmVmZXJlbmNlLCB0aW1lVW5pdHMpO1xuICAgIH1cbn1cbiIsICJpbXBvcnQgeyBQYXJzaW5nQ29udGV4dCwgUmVmaW5lciB9IGZyb20gXCIuLi9jaHJvbm9cIjtcbmltcG9ydCB7IFBhcnNpbmdSZXN1bHQgfSBmcm9tIFwiLi4vcmVzdWx0c1wiO1xuXG4vKipcbiAqIEEgc3BlY2lhbCB0eXBlIG9mIHtAbGluayBSZWZpbmVyfSB0byBmaWx0ZXIgdGhlIHJlc3VsdHNcbiAqL1xuZXhwb3J0IGFic3RyYWN0IGNsYXNzIEZpbHRlciBpbXBsZW1lbnRzIFJlZmluZXIge1xuICAgIGFic3RyYWN0IGlzVmFsaWQoY29udGV4dDogUGFyc2luZ0NvbnRleHQsIHJlc3VsdDogUGFyc2luZ1Jlc3VsdCk6IGJvb2xlYW47XG5cbiAgICByZWZpbmUoY29udGV4dDogUGFyc2luZ0NvbnRleHQsIHJlc3VsdHM6IFBhcnNpbmdSZXN1bHRbXSk6IFBhcnNpbmdSZXN1bHRbXSB7XG4gICAgICAgIHJldHVybiByZXN1bHRzLmZpbHRlcigocikgPT4gdGhpcy5pc1ZhbGlkKGNvbnRleHQsIHIpKTtcbiAgICB9XG59XG5cbi8qKlxuICogQSBzcGVjaWFsIHR5cGUgb2Yge0BsaW5rIFJlZmluZXJ9IHRvIG1lcmdlIGNvbnNlY3V0aXZlIHJlc3VsdHNcbiAqL1xuZXhwb3J0IGFic3RyYWN0IGNsYXNzIE1lcmdpbmdSZWZpbmVyIGltcGxlbWVudHMgUmVmaW5lciB7XG4gICAgYWJzdHJhY3Qgc2hvdWxkTWVyZ2VSZXN1bHRzKFxuICAgICAgICB0ZXh0QmV0d2Vlbjogc3RyaW5nLFxuICAgICAgICBjdXJyZW50UmVzdWx0OiBQYXJzaW5nUmVzdWx0LFxuICAgICAgICBuZXh0UmVzdWx0OiBQYXJzaW5nUmVzdWx0LFxuICAgICAgICBjb250ZXh0OiBQYXJzaW5nQ29udGV4dFxuICAgICk6IGJvb2xlYW47XG5cbiAgICBhYnN0cmFjdCBtZXJnZVJlc3VsdHMoXG4gICAgICAgIHRleHRCZXR3ZWVuOiBzdHJpbmcsXG4gICAgICAgIGN1cnJlbnRSZXN1bHQ6IFBhcnNpbmdSZXN1bHQsXG4gICAgICAgIG5leHRSZXN1bHQ6IFBhcnNpbmdSZXN1bHQsXG4gICAgICAgIGNvbnRleHQ6IFBhcnNpbmdDb250ZXh0XG4gICAgKTogUGFyc2luZ1Jlc3VsdDtcblxuICAgIHJlZmluZShjb250ZXh0OiBQYXJzaW5nQ29udGV4dCwgcmVzdWx0czogUGFyc2luZ1Jlc3VsdFtdKTogUGFyc2luZ1Jlc3VsdFtdIHtcbiAgICAgICAgaWYgKHJlc3VsdHMubGVuZ3RoIDwgMikge1xuICAgICAgICAgICAgcmV0dXJuIHJlc3VsdHM7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBtZXJnZWRSZXN1bHRzOiBQYXJzaW5nUmVzdWx0W10gPSBbXTtcbiAgICAgICAgbGV0IGN1clJlc3VsdCA9IHJlc3VsdHNbMF07XG4gICAgICAgIGxldCBuZXh0UmVzdWx0ID0gbnVsbDtcblxuICAgICAgICBmb3IgKGxldCBpID0gMTsgaSA8IHJlc3VsdHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIG5leHRSZXN1bHQgPSByZXN1bHRzW2ldO1xuXG4gICAgICAgICAgICBjb25zdCB0ZXh0QmV0d2VlbiA9IGNvbnRleHQudGV4dC5zdWJzdHJpbmcoY3VyUmVzdWx0LmluZGV4ICsgY3VyUmVzdWx0LnRleHQubGVuZ3RoLCBuZXh0UmVzdWx0LmluZGV4KTtcbiAgICAgICAgICAgIGlmICghdGhpcy5zaG91bGRNZXJnZVJlc3VsdHModGV4dEJldHdlZW4sIGN1clJlc3VsdCwgbmV4dFJlc3VsdCwgY29udGV4dCkpIHtcbiAgICAgICAgICAgICAgICBtZXJnZWRSZXN1bHRzLnB1c2goY3VyUmVzdWx0KTtcbiAgICAgICAgICAgICAgICBjdXJSZXN1bHQgPSBuZXh0UmVzdWx0O1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBjb25zdCBsZWZ0ID0gY3VyUmVzdWx0O1xuICAgICAgICAgICAgICAgIGNvbnN0IHJpZ2h0ID0gbmV4dFJlc3VsdDtcbiAgICAgICAgICAgICAgICBjb25zdCBtZXJnZWRSZXN1bHQgPSB0aGlzLm1lcmdlUmVzdWx0cyh0ZXh0QmV0d2VlbiwgbGVmdCwgcmlnaHQsIGNvbnRleHQpO1xuICAgICAgICAgICAgICAgIGNvbnRleHQuZGVidWcoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhgJHt0aGlzLmNvbnN0cnVjdG9yLm5hbWV9IG1lcmdlZCAke2xlZnR9IGFuZCAke3JpZ2h0fSBpbnRvICR7bWVyZ2VkUmVzdWx0fWApO1xuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgY3VyUmVzdWx0ID0gbWVyZ2VkUmVzdWx0O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGN1clJlc3VsdCAhPSBudWxsKSB7XG4gICAgICAgICAgICBtZXJnZWRSZXN1bHRzLnB1c2goY3VyUmVzdWx0KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBtZXJnZWRSZXN1bHRzO1xuICAgIH1cbn1cbiIsICIvKlxuICBcbiovXG5cbmltcG9ydCB7IFBhcnNpbmdSZXN1bHQgfSBmcm9tIFwiLi4vLi4vcmVzdWx0c1wiO1xuaW1wb3J0IHsgTWVyZ2luZ1JlZmluZXIgfSBmcm9tIFwiLi4vYWJzdHJhY3RSZWZpbmVyc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBhYnN0cmFjdCBjbGFzcyBBYnN0cmFjdE1lcmdlRGF0ZVJhbmdlUmVmaW5lciBleHRlbmRzIE1lcmdpbmdSZWZpbmVyIHtcbiAgICBhYnN0cmFjdCBwYXR0ZXJuQmV0d2VlbigpOiBSZWdFeHA7XG5cbiAgICBzaG91bGRNZXJnZVJlc3VsdHModGV4dEJldHdlZW4sIGN1cnJlbnRSZXN1bHQsIG5leHRSZXN1bHQpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuICFjdXJyZW50UmVzdWx0LmVuZCAmJiAhbmV4dFJlc3VsdC5lbmQgJiYgdGV4dEJldHdlZW4ubWF0Y2godGhpcy5wYXR0ZXJuQmV0d2VlbigpKSAhPSBudWxsO1xuICAgIH1cblxuICAgIG1lcmdlUmVzdWx0cyh0ZXh0QmV0d2VlbiwgZnJvbVJlc3VsdCwgdG9SZXN1bHQpOiBQYXJzaW5nUmVzdWx0IHtcbiAgICAgICAgaWYgKCFmcm9tUmVzdWx0LnN0YXJ0LmlzT25seVdlZWtkYXlDb21wb25lbnQoKSAmJiAhdG9SZXN1bHQuc3RhcnQuaXNPbmx5V2Vla2RheUNvbXBvbmVudCgpKSB7XG4gICAgICAgICAgICB0b1Jlc3VsdC5zdGFydC5nZXRDZXJ0YWluQ29tcG9uZW50cygpLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgICAgICAgICAgIGlmICghZnJvbVJlc3VsdC5zdGFydC5pc0NlcnRhaW4oa2V5KSkge1xuICAgICAgICAgICAgICAgICAgICBmcm9tUmVzdWx0LnN0YXJ0LmltcGx5KGtleSwgdG9SZXN1bHQuc3RhcnQuZ2V0KGtleSkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBmcm9tUmVzdWx0LnN0YXJ0LmdldENlcnRhaW5Db21wb25lbnRzKCkuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKCF0b1Jlc3VsdC5zdGFydC5pc0NlcnRhaW4oa2V5KSkge1xuICAgICAgICAgICAgICAgICAgICB0b1Jlc3VsdC5zdGFydC5pbXBseShrZXksIGZyb21SZXN1bHQuc3RhcnQuZ2V0KGtleSkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGZyb21SZXN1bHQuc3RhcnQuZGF0ZSgpLmdldFRpbWUoKSA+IHRvUmVzdWx0LnN0YXJ0LmRhdGUoKS5nZXRUaW1lKCkpIHtcbiAgICAgICAgICAgIGxldCBmcm9tTW9tZW50ID0gZnJvbVJlc3VsdC5zdGFydC5kYXlqcygpO1xuICAgICAgICAgICAgbGV0IHRvTW9tZW50ID0gdG9SZXN1bHQuc3RhcnQuZGF5anMoKTtcbiAgICAgICAgICAgIGlmICh0b1Jlc3VsdC5zdGFydC5pc09ubHlXZWVrZGF5Q29tcG9uZW50KCkgJiYgdG9Nb21lbnQuYWRkKDcsIFwiZGF5c1wiKS5pc0FmdGVyKGZyb21Nb21lbnQpKSB7XG4gICAgICAgICAgICAgICAgdG9Nb21lbnQgPSB0b01vbWVudC5hZGQoNywgXCJkYXlzXCIpO1xuICAgICAgICAgICAgICAgIHRvUmVzdWx0LnN0YXJ0LmltcGx5KFwiZGF5XCIsIHRvTW9tZW50LmRhdGUoKSk7XG4gICAgICAgICAgICAgICAgdG9SZXN1bHQuc3RhcnQuaW1wbHkoXCJtb250aFwiLCB0b01vbWVudC5tb250aCgpICsgMSk7XG4gICAgICAgICAgICAgICAgdG9SZXN1bHQuc3RhcnQuaW1wbHkoXCJ5ZWFyXCIsIHRvTW9tZW50LnllYXIoKSk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGZyb21SZXN1bHQuc3RhcnQuaXNPbmx5V2Vla2RheUNvbXBvbmVudCgpICYmIGZyb21Nb21lbnQuYWRkKC03LCBcImRheXNcIikuaXNCZWZvcmUodG9Nb21lbnQpKSB7XG4gICAgICAgICAgICAgICAgZnJvbU1vbWVudCA9IGZyb21Nb21lbnQuYWRkKC03LCBcImRheXNcIik7XG4gICAgICAgICAgICAgICAgZnJvbVJlc3VsdC5zdGFydC5pbXBseShcImRheVwiLCBmcm9tTW9tZW50LmRhdGUoKSk7XG4gICAgICAgICAgICAgICAgZnJvbVJlc3VsdC5zdGFydC5pbXBseShcIm1vbnRoXCIsIGZyb21Nb21lbnQubW9udGgoKSArIDEpO1xuICAgICAgICAgICAgICAgIGZyb21SZXN1bHQuc3RhcnQuaW1wbHkoXCJ5ZWFyXCIsIGZyb21Nb21lbnQueWVhcigpKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodG9SZXN1bHQuc3RhcnQuaXNEYXRlV2l0aFVua25vd25ZZWFyKCkgJiYgdG9Nb21lbnQuYWRkKDEsIFwieWVhcnNcIikuaXNBZnRlcihmcm9tTW9tZW50KSkge1xuICAgICAgICAgICAgICAgIHRvTW9tZW50ID0gdG9Nb21lbnQuYWRkKDEsIFwieWVhcnNcIik7XG4gICAgICAgICAgICAgICAgdG9SZXN1bHQuc3RhcnQuaW1wbHkoXCJ5ZWFyXCIsIHRvTW9tZW50LnllYXIoKSk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGZyb21SZXN1bHQuc3RhcnQuaXNEYXRlV2l0aFVua25vd25ZZWFyKCkgJiYgZnJvbU1vbWVudC5hZGQoLTEsIFwieWVhcnNcIikuaXNCZWZvcmUodG9Nb21lbnQpKSB7XG4gICAgICAgICAgICAgICAgZnJvbU1vbWVudCA9IGZyb21Nb21lbnQuYWRkKC0xLCBcInllYXJzXCIpO1xuICAgICAgICAgICAgICAgIGZyb21SZXN1bHQuc3RhcnQuaW1wbHkoXCJ5ZWFyXCIsIGZyb21Nb21lbnQueWVhcigpKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgW3RvUmVzdWx0LCBmcm9tUmVzdWx0XSA9IFtmcm9tUmVzdWx0LCB0b1Jlc3VsdF07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCByZXN1bHQgPSBmcm9tUmVzdWx0LmNsb25lKCk7XG4gICAgICAgIHJlc3VsdC5zdGFydCA9IGZyb21SZXN1bHQuc3RhcnQ7XG4gICAgICAgIHJlc3VsdC5lbmQgPSB0b1Jlc3VsdC5zdGFydDtcbiAgICAgICAgcmVzdWx0LmluZGV4ID0gTWF0aC5taW4oZnJvbVJlc3VsdC5pbmRleCwgdG9SZXN1bHQuaW5kZXgpO1xuICAgICAgICBpZiAoZnJvbVJlc3VsdC5pbmRleCA8IHRvUmVzdWx0LmluZGV4KSB7XG4gICAgICAgICAgICByZXN1bHQudGV4dCA9IGZyb21SZXN1bHQudGV4dCArIHRleHRCZXR3ZWVuICsgdG9SZXN1bHQudGV4dDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJlc3VsdC50ZXh0ID0gdG9SZXN1bHQudGV4dCArIHRleHRCZXR3ZWVuICsgZnJvbVJlc3VsdC50ZXh0O1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG59XG4iLCAiLypcbiAgXG4qL1xuXG5pbXBvcnQgQWJzdHJhY3RNZXJnZURhdGVSYW5nZVJlZmluZXIgZnJvbSBcIi4uLy4uLy4uL2NvbW1vbi9yZWZpbmVycy9BYnN0cmFjdE1lcmdlRGF0ZVJhbmdlUmVmaW5lclwiO1xuXG4vKipcbiAqIE1lcmdpbmcgYmVmb3JlIGFuZCBhZnRlciByZXN1bHRzIChzZWUuIEFic3RyYWN0TWVyZ2VEYXRlUmFuZ2VSZWZpbmVyKVxuICogVGhpcyBpbXBsZW1lbnRhdGlvbiBzaG91bGQgcHJvdmlkZSBFbmdsaXNoIGNvbm5lY3RpbmcgcGhhc2VzXG4gKiAtIDIwMjAtMDItMTMgW3RvXSAyMDIwLTAyLTEzXG4gKiAtIFdlZG5lc2RheSBbLV0gRnJpZGF5XG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEVOTWVyZ2VEYXRlUmFuZ2VSZWZpbmVyIGV4dGVuZHMgQWJzdHJhY3RNZXJnZURhdGVSYW5nZVJlZmluZXIge1xuICAgIHBhdHRlcm5CZXR3ZWVuKCk6IFJlZ0V4cCB7XG4gICAgICAgIHJldHVybiAvXlxccyoodG98LXxcdTIwMTN8dW50aWx8dGhyb3VnaHx0aWxsKVxccyokL2k7XG4gICAgfVxufVxuIiwgImltcG9ydCB7IFBhcnNpbmdDb21wb25lbnRzIH0gZnJvbSBcIi4uL3Jlc3VsdHNcIjtcbmltcG9ydCBkYXlqcyBmcm9tIFwiZGF5anNcIjtcbmltcG9ydCB7IE1lcmlkaWVtIH0gZnJvbSBcIi4uL3R5cGVzXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBhc3NpZ25UaGVOZXh0RGF5KGNvbXBvbmVudDogUGFyc2luZ0NvbXBvbmVudHMsIHRhcmdldERheUpzOiBkYXlqcy5EYXlqcykge1xuICAgIHRhcmdldERheUpzID0gdGFyZ2V0RGF5SnMuYWRkKDEsIFwiZGF5XCIpO1xuICAgIGFzc2lnblNpbWlsYXJEYXRlKGNvbXBvbmVudCwgdGFyZ2V0RGF5SnMpO1xuICAgIGltcGx5U2ltaWxhclRpbWUoY29tcG9uZW50LCB0YXJnZXREYXlKcyk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpbXBseVRoZU5leHREYXkoY29tcG9uZW50OiBQYXJzaW5nQ29tcG9uZW50cywgdGFyZ2V0RGF5SnM6IGRheWpzLkRheWpzKSB7XG4gICAgdGFyZ2V0RGF5SnMgPSB0YXJnZXREYXlKcy5hZGQoMSwgXCJkYXlcIik7XG4gICAgaW1wbHlTaW1pbGFyRGF0ZShjb21wb25lbnQsIHRhcmdldERheUpzKTtcbiAgICBpbXBseVNpbWlsYXJUaW1lKGNvbXBvbmVudCwgdGFyZ2V0RGF5SnMpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYXNzaWduU2ltaWxhckRhdGUoY29tcG9uZW50OiBQYXJzaW5nQ29tcG9uZW50cywgdGFyZ2V0RGF5SnM6IGRheWpzLkRheWpzKSB7XG4gICAgY29tcG9uZW50LmFzc2lnbihcImRheVwiLCB0YXJnZXREYXlKcy5kYXRlKCkpO1xuICAgIGNvbXBvbmVudC5hc3NpZ24oXCJtb250aFwiLCB0YXJnZXREYXlKcy5tb250aCgpICsgMSk7XG4gICAgY29tcG9uZW50LmFzc2lnbihcInllYXJcIiwgdGFyZ2V0RGF5SnMueWVhcigpKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFzc2lnblNpbWlsYXJUaW1lKGNvbXBvbmVudDogUGFyc2luZ0NvbXBvbmVudHMsIHRhcmdldERheUpzOiBkYXlqcy5EYXlqcykge1xuICAgIGNvbXBvbmVudC5hc3NpZ24oXCJob3VyXCIsIHRhcmdldERheUpzLmhvdXIoKSk7XG4gICAgY29tcG9uZW50LmFzc2lnbihcIm1pbnV0ZVwiLCB0YXJnZXREYXlKcy5taW51dGUoKSk7XG4gICAgY29tcG9uZW50LmFzc2lnbihcInNlY29uZFwiLCB0YXJnZXREYXlKcy5zZWNvbmQoKSk7XG4gICAgY29tcG9uZW50LmFzc2lnbihcIm1pbGxpc2Vjb25kXCIsIHRhcmdldERheUpzLm1pbGxpc2Vjb25kKCkpO1xuICAgIGlmIChjb21wb25lbnQuZ2V0KFwiaG91clwiKSA8IDEyKSB7XG4gICAgICAgIGNvbXBvbmVudC5hc3NpZ24oXCJtZXJpZGllbVwiLCBNZXJpZGllbS5BTSk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgY29tcG9uZW50LmFzc2lnbihcIm1lcmlkaWVtXCIsIE1lcmlkaWVtLlBNKTtcbiAgICB9XG59XG5cbi8qKlxuICogQGRlcHJlY2F0ZWQgVXNlIGBkYXRlcy5pbXBseVNpbWlsYXJEYXRlYCB3aXRoIG5vcm1hbCBKYXZhc2NyaXB0IERhdGUgaW5zdGVhZC5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGltcGx5U2ltaWxhckRhdGUoY29tcG9uZW50OiBQYXJzaW5nQ29tcG9uZW50cywgdGFyZ2V0RGF5SnM6IGRheWpzLkRheWpzKSB7XG4gICAgY29tcG9uZW50LmltcGx5KFwiZGF5XCIsIHRhcmdldERheUpzLmRhdGUoKSk7XG4gICAgY29tcG9uZW50LmltcGx5KFwibW9udGhcIiwgdGFyZ2V0RGF5SnMubW9udGgoKSArIDEpO1xuICAgIGNvbXBvbmVudC5pbXBseShcInllYXJcIiwgdGFyZ2V0RGF5SnMueWVhcigpKTtcbn1cblxuLyoqXG4gKiBAZGVwcmVjYXRlZCBVc2UgYGRhdGVzLmltcGx5U2ltaWxhclRpbWVgIHdpdGggbm9ybWFsIEphdmFzY3JpcHQgRGF0ZSBpbnN0ZWFkLlxuICovXG5leHBvcnQgZnVuY3Rpb24gaW1wbHlTaW1pbGFyVGltZShjb21wb25lbnQ6IFBhcnNpbmdDb21wb25lbnRzLCB0YXJnZXREYXlKczogZGF5anMuRGF5anMpIHtcbiAgICBjb21wb25lbnQuaW1wbHkoXCJob3VyXCIsIHRhcmdldERheUpzLmhvdXIoKSk7XG4gICAgY29tcG9uZW50LmltcGx5KFwibWludXRlXCIsIHRhcmdldERheUpzLm1pbnV0ZSgpKTtcbiAgICBjb21wb25lbnQuaW1wbHkoXCJzZWNvbmRcIiwgdGFyZ2V0RGF5SnMuc2Vjb25kKCkpO1xuICAgIGNvbXBvbmVudC5pbXBseShcIm1pbGxpc2Vjb25kXCIsIHRhcmdldERheUpzLm1pbGxpc2Vjb25kKCkpO1xufVxuIiwgImltcG9ydCB7IFBhcnNpbmdDb21wb25lbnRzLCBQYXJzaW5nUmVzdWx0IH0gZnJvbSBcIi4uL3Jlc3VsdHNcIjtcbmltcG9ydCB7IE1lcmlkaWVtIH0gZnJvbSBcIi4uL3R5cGVzXCI7XG5pbXBvcnQgeyBhc3NpZ25TaW1pbGFyRGF0ZSwgaW1wbHlTaW1pbGFyRGF0ZSB9IGZyb20gXCIuLi91dGlscy9kYXlqc1wiO1xuXG5leHBvcnQgZnVuY3Rpb24gbWVyZ2VEYXRlVGltZVJlc3VsdChkYXRlUmVzdWx0OiBQYXJzaW5nUmVzdWx0LCB0aW1lUmVzdWx0OiBQYXJzaW5nUmVzdWx0KTogUGFyc2luZ1Jlc3VsdCB7XG4gICAgY29uc3QgcmVzdWx0ID0gZGF0ZVJlc3VsdC5jbG9uZSgpO1xuICAgIGNvbnN0IGJlZ2luRGF0ZSA9IGRhdGVSZXN1bHQuc3RhcnQ7XG4gICAgY29uc3QgYmVnaW5UaW1lID0gdGltZVJlc3VsdC5zdGFydDtcblxuICAgIHJlc3VsdC5zdGFydCA9IG1lcmdlRGF0ZVRpbWVDb21wb25lbnQoYmVnaW5EYXRlLCBiZWdpblRpbWUpO1xuICAgIGlmIChkYXRlUmVzdWx0LmVuZCAhPSBudWxsIHx8IHRpbWVSZXN1bHQuZW5kICE9IG51bGwpIHtcbiAgICAgICAgY29uc3QgZW5kRGF0ZSA9IGRhdGVSZXN1bHQuZW5kID09IG51bGwgPyBkYXRlUmVzdWx0LnN0YXJ0IDogZGF0ZVJlc3VsdC5lbmQ7XG4gICAgICAgIGNvbnN0IGVuZFRpbWUgPSB0aW1lUmVzdWx0LmVuZCA9PSBudWxsID8gdGltZVJlc3VsdC5zdGFydCA6IHRpbWVSZXN1bHQuZW5kO1xuICAgICAgICBjb25zdCBlbmREYXRlVGltZSA9IG1lcmdlRGF0ZVRpbWVDb21wb25lbnQoZW5kRGF0ZSwgZW5kVGltZSk7XG5cbiAgICAgICAgaWYgKGRhdGVSZXN1bHQuZW5kID09IG51bGwgJiYgZW5kRGF0ZVRpbWUuZGF0ZSgpLmdldFRpbWUoKSA8IHJlc3VsdC5zdGFydC5kYXRlKCkuZ2V0VGltZSgpKSB7XG4gICAgICAgICAgICAvLyBGb3IgZXhhbXBsZSwgIFwiVHVlc2RheSA5cG0gLSAxYW1cIiB0aGUgZW5kaW5nIHNob3VsZCBhY3R1YWxseSBiZSAxYW0gb24gdGhlIG5leHQgZGF5LlxuICAgICAgICAgICAgLy8gV2UgbmVlZCB0byBhZGQgdG8gZW5kaW5nIGJ5IGFub3RoZXIgZGF5LlxuICAgICAgICAgICAgY29uc3QgbmV4dERheUpzID0gZW5kRGF0ZVRpbWUuZGF5anMoKS5hZGQoMSwgXCJkYXlcIik7XG4gICAgICAgICAgICBpZiAoZW5kRGF0ZVRpbWUuaXNDZXJ0YWluKFwiZGF5XCIpKSB7XG4gICAgICAgICAgICAgICAgYXNzaWduU2ltaWxhckRhdGUoZW5kRGF0ZVRpbWUsIG5leHREYXlKcyk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGltcGx5U2ltaWxhckRhdGUoZW5kRGF0ZVRpbWUsIG5leHREYXlKcyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXN1bHQuZW5kID0gZW5kRGF0ZVRpbWU7XG4gICAgfVxuXG4gICAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG1lcmdlRGF0ZVRpbWVDb21wb25lbnQoXG4gICAgZGF0ZUNvbXBvbmVudDogUGFyc2luZ0NvbXBvbmVudHMsXG4gICAgdGltZUNvbXBvbmVudDogUGFyc2luZ0NvbXBvbmVudHNcbik6IFBhcnNpbmdDb21wb25lbnRzIHtcbiAgICBjb25zdCBkYXRlVGltZUNvbXBvbmVudCA9IGRhdGVDb21wb25lbnQuY2xvbmUoKTtcblxuICAgIGlmICh0aW1lQ29tcG9uZW50LmlzQ2VydGFpbihcImhvdXJcIikpIHtcbiAgICAgICAgZGF0ZVRpbWVDb21wb25lbnQuYXNzaWduKFwiaG91clwiLCB0aW1lQ29tcG9uZW50LmdldChcImhvdXJcIikpO1xuICAgICAgICBkYXRlVGltZUNvbXBvbmVudC5hc3NpZ24oXCJtaW51dGVcIiwgdGltZUNvbXBvbmVudC5nZXQoXCJtaW51dGVcIikpO1xuXG4gICAgICAgIGlmICh0aW1lQ29tcG9uZW50LmlzQ2VydGFpbihcInNlY29uZFwiKSkge1xuICAgICAgICAgICAgZGF0ZVRpbWVDb21wb25lbnQuYXNzaWduKFwic2Vjb25kXCIsIHRpbWVDb21wb25lbnQuZ2V0KFwic2Vjb25kXCIpKTtcblxuICAgICAgICAgICAgaWYgKHRpbWVDb21wb25lbnQuaXNDZXJ0YWluKFwibWlsbGlzZWNvbmRcIikpIHtcbiAgICAgICAgICAgICAgICBkYXRlVGltZUNvbXBvbmVudC5hc3NpZ24oXCJtaWxsaXNlY29uZFwiLCB0aW1lQ29tcG9uZW50LmdldChcIm1pbGxpc2Vjb25kXCIpKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgZGF0ZVRpbWVDb21wb25lbnQuaW1wbHkoXCJtaWxsaXNlY29uZFwiLCB0aW1lQ29tcG9uZW50LmdldChcIm1pbGxpc2Vjb25kXCIpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGRhdGVUaW1lQ29tcG9uZW50LmltcGx5KFwic2Vjb25kXCIsIHRpbWVDb21wb25lbnQuZ2V0KFwic2Vjb25kXCIpKTtcbiAgICAgICAgICAgIGRhdGVUaW1lQ29tcG9uZW50LmltcGx5KFwibWlsbGlzZWNvbmRcIiwgdGltZUNvbXBvbmVudC5nZXQoXCJtaWxsaXNlY29uZFwiKSk7XG4gICAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgICBkYXRlVGltZUNvbXBvbmVudC5pbXBseShcImhvdXJcIiwgdGltZUNvbXBvbmVudC5nZXQoXCJob3VyXCIpKTtcbiAgICAgICAgZGF0ZVRpbWVDb21wb25lbnQuaW1wbHkoXCJtaW51dGVcIiwgdGltZUNvbXBvbmVudC5nZXQoXCJtaW51dGVcIikpO1xuICAgICAgICBkYXRlVGltZUNvbXBvbmVudC5pbXBseShcInNlY29uZFwiLCB0aW1lQ29tcG9uZW50LmdldChcInNlY29uZFwiKSk7XG4gICAgICAgIGRhdGVUaW1lQ29tcG9uZW50LmltcGx5KFwibWlsbGlzZWNvbmRcIiwgdGltZUNvbXBvbmVudC5nZXQoXCJtaWxsaXNlY29uZFwiKSk7XG4gICAgfVxuXG4gICAgaWYgKHRpbWVDb21wb25lbnQuaXNDZXJ0YWluKFwidGltZXpvbmVPZmZzZXRcIikpIHtcbiAgICAgICAgZGF0ZVRpbWVDb21wb25lbnQuYXNzaWduKFwidGltZXpvbmVPZmZzZXRcIiwgdGltZUNvbXBvbmVudC5nZXQoXCJ0aW1lem9uZU9mZnNldFwiKSk7XG4gICAgfVxuXG4gICAgaWYgKHRpbWVDb21wb25lbnQuaXNDZXJ0YWluKFwibWVyaWRpZW1cIikpIHtcbiAgICAgICAgZGF0ZVRpbWVDb21wb25lbnQuYXNzaWduKFwibWVyaWRpZW1cIiwgdGltZUNvbXBvbmVudC5nZXQoXCJtZXJpZGllbVwiKSk7XG4gICAgfSBlbHNlIGlmICh0aW1lQ29tcG9uZW50LmdldChcIm1lcmlkaWVtXCIpICE9IG51bGwgJiYgZGF0ZVRpbWVDb21wb25lbnQuZ2V0KFwibWVyaWRpZW1cIikgPT0gbnVsbCkge1xuICAgICAgICBkYXRlVGltZUNvbXBvbmVudC5pbXBseShcIm1lcmlkaWVtXCIsIHRpbWVDb21wb25lbnQuZ2V0KFwibWVyaWRpZW1cIikpO1xuICAgIH1cblxuICAgIGlmIChkYXRlVGltZUNvbXBvbmVudC5nZXQoXCJtZXJpZGllbVwiKSA9PSBNZXJpZGllbS5QTSAmJiBkYXRlVGltZUNvbXBvbmVudC5nZXQoXCJob3VyXCIpIDwgMTIpIHtcbiAgICAgICAgaWYgKHRpbWVDb21wb25lbnQuaXNDZXJ0YWluKFwiaG91clwiKSkge1xuICAgICAgICAgICAgZGF0ZVRpbWVDb21wb25lbnQuYXNzaWduKFwiaG91clwiLCBkYXRlVGltZUNvbXBvbmVudC5nZXQoXCJob3VyXCIpICsgMTIpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZGF0ZVRpbWVDb21wb25lbnQuaW1wbHkoXCJob3VyXCIsIGRhdGVUaW1lQ29tcG9uZW50LmdldChcImhvdXJcIikgKyAxMik7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBkYXRlVGltZUNvbXBvbmVudC5hZGRUYWdzKGRhdGVDb21wb25lbnQudGFncygpKTtcbiAgICBkYXRlVGltZUNvbXBvbmVudC5hZGRUYWdzKHRpbWVDb21wb25lbnQudGFncygpKTtcbiAgICByZXR1cm4gZGF0ZVRpbWVDb21wb25lbnQ7XG59XG4iLCAiLypcblxuKi9cblxuaW1wb3J0IHsgTWVyZ2luZ1JlZmluZXIgfSBmcm9tIFwiLi4vYWJzdHJhY3RSZWZpbmVyc1wiO1xuaW1wb3J0IHsgUGFyc2luZ1Jlc3VsdCB9IGZyb20gXCIuLi8uLi9yZXN1bHRzXCI7XG5pbXBvcnQgeyBtZXJnZURhdGVUaW1lUmVzdWx0IH0gZnJvbSBcIi4uLy4uL2NhbGN1bGF0aW9uL21lcmdpbmdDYWxjdWxhdGlvblwiO1xuXG5leHBvcnQgZGVmYXVsdCBhYnN0cmFjdCBjbGFzcyBBYnN0cmFjdE1lcmdlRGF0ZVRpbWVSZWZpbmVyIGV4dGVuZHMgTWVyZ2luZ1JlZmluZXIge1xuICAgIGFic3RyYWN0IHBhdHRlcm5CZXR3ZWVuKCk6IFJlZ0V4cDtcblxuICAgIHNob3VsZE1lcmdlUmVzdWx0cyh0ZXh0QmV0d2Vlbjogc3RyaW5nLCBjdXJyZW50UmVzdWx0OiBQYXJzaW5nUmVzdWx0LCBuZXh0UmVzdWx0OiBQYXJzaW5nUmVzdWx0KTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAoKGN1cnJlbnRSZXN1bHQuc3RhcnQuaXNPbmx5RGF0ZSgpICYmIG5leHRSZXN1bHQuc3RhcnQuaXNPbmx5VGltZSgpKSB8fFxuICAgICAgICAgICAgICAgIChuZXh0UmVzdWx0LnN0YXJ0LmlzT25seURhdGUoKSAmJiBjdXJyZW50UmVzdWx0LnN0YXJ0LmlzT25seVRpbWUoKSkpICYmXG4gICAgICAgICAgICB0ZXh0QmV0d2Vlbi5tYXRjaCh0aGlzLnBhdHRlcm5CZXR3ZWVuKCkpICE9IG51bGxcbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICBtZXJnZVJlc3VsdHModGV4dEJldHdlZW46IHN0cmluZywgY3VycmVudFJlc3VsdDogUGFyc2luZ1Jlc3VsdCwgbmV4dFJlc3VsdDogUGFyc2luZ1Jlc3VsdCk6IFBhcnNpbmdSZXN1bHQge1xuICAgICAgICBjb25zdCByZXN1bHQgPSBjdXJyZW50UmVzdWx0LnN0YXJ0LmlzT25seURhdGUoKVxuICAgICAgICAgICAgPyBtZXJnZURhdGVUaW1lUmVzdWx0KGN1cnJlbnRSZXN1bHQsIG5leHRSZXN1bHQpXG4gICAgICAgICAgICA6IG1lcmdlRGF0ZVRpbWVSZXN1bHQobmV4dFJlc3VsdCwgY3VycmVudFJlc3VsdCk7XG5cbiAgICAgICAgcmVzdWx0LmluZGV4ID0gY3VycmVudFJlc3VsdC5pbmRleDtcbiAgICAgICAgcmVzdWx0LnRleHQgPSBjdXJyZW50UmVzdWx0LnRleHQgKyB0ZXh0QmV0d2VlbiArIG5leHRSZXN1bHQudGV4dDtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG59XG4iLCAiaW1wb3J0IEFic3RyYWN0TWVyZ2VEYXRlVGltZVJlZmluZXIgZnJvbSBcIi4uLy4uLy4uL2NvbW1vbi9yZWZpbmVycy9BYnN0cmFjdE1lcmdlRGF0ZVRpbWVSZWZpbmVyXCI7XG5cbi8qKlxuICogTWVyZ2luZyBkYXRlLW9ubHkgcmVzdWx0IGFuZCB0aW1lLW9ubHkgcmVzdWx0IChzZWUuIEFic3RyYWN0TWVyZ2VEYXRlVGltZVJlZmluZXIpLlxuICogVGhpcyBpbXBsZW1lbnRhdGlvbiBzaG91bGQgcHJvdmlkZSBFbmdsaXNoIGNvbm5lY3RpbmcgcGhhc2VzXG4gKiAtIDIwMjAtMDItMTMgW2F0XSA2cG1cbiAqIC0gVG9tb3Jyb3cgW2FmdGVyXSA3YW1cbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRU5NZXJnZURhdGVUaW1lUmVmaW5lciBleHRlbmRzIEFic3RyYWN0TWVyZ2VEYXRlVGltZVJlZmluZXIge1xuICAgIHBhdHRlcm5CZXR3ZWVuKCk6IFJlZ0V4cCB7XG4gICAgICAgIHJldHVybiBuZXcgUmVnRXhwKFwiXlxcXFxzKihUfGF0fGFmdGVyfGJlZm9yZXxvbnxvZnwsfC18XFxcXC58XHUyMjE5fDopP1xcXFxzKiRcIik7XG4gICAgfVxufVxuIiwgIi8vIE1hcCBBQkJSIC0+IE9mZnNldCBpbiBtaW51dGVcbmltcG9ydCB7IFBhcnNpbmdDb250ZXh0LCBSZWZpbmVyIH0gZnJvbSBcIi4uLy4uL2Nocm9ub1wiO1xuaW1wb3J0IHsgVGltZXpvbmVBYmJyTWFwIH0gZnJvbSBcIi4uLy4uL3R5cGVzXCI7XG5pbXBvcnQgeyBQYXJzaW5nUmVzdWx0IH0gZnJvbSBcIi4uLy4uL3Jlc3VsdHNcIjtcbmltcG9ydCB7IHRvVGltZXpvbmVPZmZzZXQgfSBmcm9tIFwiLi4vLi4vdGltZXpvbmVcIjtcblxuY29uc3QgVElNRVpPTkVfTkFNRV9QQVRURVJOID0gbmV3IFJlZ0V4cChcIl5cXFxccyosP1xcXFxzKlxcXFwoPyhbQS1aXXsyLDR9KVxcXFwpPyg/PVxcXFxXfCQpXCIsIFwiaVwiKTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRXh0cmFjdFRpbWV6b25lQWJiclJlZmluZXIgaW1wbGVtZW50cyBSZWZpbmVyIHtcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJlYWRvbmx5IHRpbWV6b25lT3ZlcnJpZGVzPzogVGltZXpvbmVBYmJyTWFwKSB7fVxuXG4gICAgcmVmaW5lKGNvbnRleHQ6IFBhcnNpbmdDb250ZXh0LCByZXN1bHRzOiBQYXJzaW5nUmVzdWx0W10pOiBQYXJzaW5nUmVzdWx0W10ge1xuICAgICAgICBjb25zdCB0aW1lem9uZU92ZXJyaWRlcyA9IGNvbnRleHQub3B0aW9uLnRpbWV6b25lcyA/PyB7fTtcblxuICAgICAgICByZXN1bHRzLmZvckVhY2goKHJlc3VsdCkgPT4ge1xuICAgICAgICAgICAgY29uc3Qgc3VmZml4ID0gY29udGV4dC50ZXh0LnN1YnN0cmluZyhyZXN1bHQuaW5kZXggKyByZXN1bHQudGV4dC5sZW5ndGgpO1xuICAgICAgICAgICAgY29uc3QgbWF0Y2ggPSBUSU1FWk9ORV9OQU1FX1BBVFRFUk4uZXhlYyhzdWZmaXgpO1xuICAgICAgICAgICAgaWYgKCFtYXRjaCkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY29uc3QgdGltZXpvbmVBYmJyID0gbWF0Y2hbMV0udG9VcHBlckNhc2UoKTtcbiAgICAgICAgICAgIGNvbnN0IHJlZkRhdGUgPSByZXN1bHQuc3RhcnQuZGF0ZSgpID8/IHJlc3VsdC5yZWZEYXRlID8/IG5ldyBEYXRlKCk7XG4gICAgICAgICAgICBjb25zdCB0ek92ZXJyaWRlcyA9IHsgLi4udGhpcy50aW1lem9uZU92ZXJyaWRlcywgLi4udGltZXpvbmVPdmVycmlkZXMgfTtcbiAgICAgICAgICAgIGNvbnN0IGV4dHJhY3RlZFRpbWV6b25lT2Zmc2V0ID0gdG9UaW1lem9uZU9mZnNldCh0aW1lem9uZUFiYnIsIHJlZkRhdGUsIHR6T3ZlcnJpZGVzKTtcbiAgICAgICAgICAgIGlmIChleHRyYWN0ZWRUaW1lem9uZU9mZnNldCA9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29udGV4dC5kZWJ1ZygoKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXG4gICAgICAgICAgICAgICAgICAgIGBFeHRyYWN0aW5nIHRpbWV6b25lOiAnJHt0aW1lem9uZUFiYnJ9JyBpbnRvOiAke2V4dHJhY3RlZFRpbWV6b25lT2Zmc2V0fSBmb3I6ICR7cmVzdWx0LnN0YXJ0fWBcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIGNvbnN0IGN1cnJlbnRUaW1lem9uZU9mZnNldCA9IHJlc3VsdC5zdGFydC5nZXQoXCJ0aW1lem9uZU9mZnNldFwiKTtcbiAgICAgICAgICAgIGlmIChjdXJyZW50VGltZXpvbmVPZmZzZXQgIT09IG51bGwgJiYgZXh0cmFjdGVkVGltZXpvbmVPZmZzZXQgIT0gY3VycmVudFRpbWV6b25lT2Zmc2V0KSB7XG4gICAgICAgICAgICAgICAgLy8gV2UgbWF5IGFscmVhZHkgaGF2ZSBleHRyYWN0ZWQgdGhlIHRpbWV6b25lIG9mZnNldCBlLmcuIFwiMTEgYW0gR01UKzA5MDAgKEpTVClcIlxuICAgICAgICAgICAgICAgIC8vIC0gaWYgdGhleSBhcmUgZXF1YWwsIHdlIGFsc28gd2FudCB0byB0YWtlIHRoZSBhYmJyZXZpYXRpb24gdGV4dCBpbnRvIHJlc3VsdFxuICAgICAgICAgICAgICAgIC8vIC0gaWYgdGhleSBhcmUgbm90IGVxdWFsLCB3ZSB0cnVzdCB0aGUgb2Zmc2V0IG1vcmVcbiAgICAgICAgICAgICAgICBpZiAocmVzdWx0LnN0YXJ0LmlzQ2VydGFpbihcInRpbWV6b25lT2Zmc2V0XCIpKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAvLyBUaGlzIGlzIG9mdGVuIGJlY2F1c2UgaXQncyByZWxhdGl2ZSB0aW1lIHdpdGggaW5mZXJyZWQgdGltZXpvbmUgKGUuZy4gaW4gMSBob3VyLCB0b21vcnJvdylcbiAgICAgICAgICAgICAgICAvLyBUaGVuLCB3ZSB3YW50IHRvIGRvdWJsZS1jaGVjayB0aGUgYWJiciBjYXNlIChlLmcuIFwiR0VUXCIgbm90IFwiZ2V0XCIpXG4gICAgICAgICAgICAgICAgaWYgKHRpbWV6b25lQWJiciAhPSBtYXRjaFsxXSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAocmVzdWx0LnN0YXJ0LmlzT25seURhdGUoKSkge1xuICAgICAgICAgICAgICAgIC8vIElmIHRoZSB0aW1lIGlzIG5vdCBleHBsaWNpdGx5IG1lbnRpb25lZCxcbiAgICAgICAgICAgICAgICAvLyBUaGVuLCB3ZSBhbHNvIHdhbnQgdG8gZG91YmxlLWNoZWNrIHRoZSBhYmJyIGNhc2UgKGUuZy4gXCJHRVRcIiBub3QgXCJnZXRcIilcbiAgICAgICAgICAgICAgICBpZiAodGltZXpvbmVBYmJyICE9IG1hdGNoWzFdKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJlc3VsdC50ZXh0ICs9IG1hdGNoWzBdO1xuXG4gICAgICAgICAgICBpZiAoIXJlc3VsdC5zdGFydC5pc0NlcnRhaW4oXCJ0aW1lem9uZU9mZnNldFwiKSkge1xuICAgICAgICAgICAgICAgIHJlc3VsdC5zdGFydC5hc3NpZ24oXCJ0aW1lem9uZU9mZnNldFwiLCBleHRyYWN0ZWRUaW1lem9uZU9mZnNldCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChyZXN1bHQuZW5kICE9IG51bGwgJiYgIXJlc3VsdC5lbmQuaXNDZXJ0YWluKFwidGltZXpvbmVPZmZzZXRcIikpIHtcbiAgICAgICAgICAgICAgICByZXN1bHQuZW5kLmFzc2lnbihcInRpbWV6b25lT2Zmc2V0XCIsIGV4dHJhY3RlZFRpbWV6b25lT2Zmc2V0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdHM7XG4gICAgfVxufVxuIiwgImltcG9ydCB7IFBhcnNpbmdDb250ZXh0LCBSZWZpbmVyIH0gZnJvbSBcIi4uLy4uL2Nocm9ub1wiO1xuaW1wb3J0IHsgUGFyc2luZ1Jlc3VsdCB9IGZyb20gXCIuLi8uLi9yZXN1bHRzXCI7XG5cbmNvbnN0IFRJTUVaT05FX09GRlNFVF9QQVRURVJOID0gbmV3IFJlZ0V4cChcIl5cXFxccyooPzpcXFxcKD8oPzpHTVR8VVRDKVxcXFxzPyk/KFsrLV0pKFxcXFxkezEsMn0pKD86Oj8oXFxcXGR7Mn0pKT9cXFxcKT9cIiwgXCJpXCIpO1xuY29uc3QgVElNRVpPTkVfT0ZGU0VUX1NJR05fR1JPVVAgPSAxO1xuY29uc3QgVElNRVpPTkVfT0ZGU0VUX0hPVVJfT0ZGU0VUX0dST1VQID0gMjtcbmNvbnN0IFRJTUVaT05FX09GRlNFVF9NSU5VVEVfT0ZGU0VUX0dST1VQID0gMztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRXh0cmFjdFRpbWV6b25lT2Zmc2V0UmVmaW5lciBpbXBsZW1lbnRzIFJlZmluZXIge1xuICAgIHJlZmluZShjb250ZXh0OiBQYXJzaW5nQ29udGV4dCwgcmVzdWx0czogUGFyc2luZ1Jlc3VsdFtdKTogUGFyc2luZ1Jlc3VsdFtdIHtcbiAgICAgICAgcmVzdWx0cy5mb3JFYWNoKGZ1bmN0aW9uIChyZXN1bHQpIHtcbiAgICAgICAgICAgIGlmIChyZXN1bHQuc3RhcnQuaXNDZXJ0YWluKFwidGltZXpvbmVPZmZzZXRcIikpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGNvbnN0IHN1ZmZpeCA9IGNvbnRleHQudGV4dC5zdWJzdHJpbmcocmVzdWx0LmluZGV4ICsgcmVzdWx0LnRleHQubGVuZ3RoKTtcbiAgICAgICAgICAgIGNvbnN0IG1hdGNoID0gVElNRVpPTkVfT0ZGU0VUX1BBVFRFUk4uZXhlYyhzdWZmaXgpO1xuICAgICAgICAgICAgaWYgKCFtYXRjaCkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY29udGV4dC5kZWJ1ZygoKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coYEV4dHJhY3RpbmcgdGltZXpvbmU6ICcke21hdGNoWzBdfScgaW50byA6ICR7cmVzdWx0fWApO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIGNvbnN0IGhvdXJPZmZzZXQgPSBwYXJzZUludChtYXRjaFtUSU1FWk9ORV9PRkZTRVRfSE9VUl9PRkZTRVRfR1JPVVBdKTtcbiAgICAgICAgICAgIGNvbnN0IG1pbnV0ZU9mZnNldCA9IHBhcnNlSW50KG1hdGNoW1RJTUVaT05FX09GRlNFVF9NSU5VVEVfT0ZGU0VUX0dST1VQXSB8fCBcIjBcIik7XG4gICAgICAgICAgICBsZXQgdGltZXpvbmVPZmZzZXQgPSBob3VyT2Zmc2V0ICogNjAgKyBtaW51dGVPZmZzZXQ7XG4gICAgICAgICAgICAvLyBObyB0aW1lem9uZXMgaGF2ZSBvZmZzZXRzIGdyZWF0ZXIgdGhhbiAxNCBob3Vycywgc28gZGlzcmVnYXJkIHRoaXMgbWF0Y2hcbiAgICAgICAgICAgIGlmICh0aW1lem9uZU9mZnNldCA+IDE0ICogNjApIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAobWF0Y2hbVElNRVpPTkVfT0ZGU0VUX1NJR05fR1JPVVBdID09PSBcIi1cIikge1xuICAgICAgICAgICAgICAgIHRpbWV6b25lT2Zmc2V0ID0gLXRpbWV6b25lT2Zmc2V0O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAocmVzdWx0LmVuZCAhPSBudWxsKSB7XG4gICAgICAgICAgICAgICAgcmVzdWx0LmVuZC5hc3NpZ24oXCJ0aW1lem9uZU9mZnNldFwiLCB0aW1lem9uZU9mZnNldCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJlc3VsdC5zdGFydC5hc3NpZ24oXCJ0aW1lem9uZU9mZnNldFwiLCB0aW1lem9uZU9mZnNldCk7XG4gICAgICAgICAgICByZXN1bHQudGV4dCArPSBtYXRjaFswXTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdHM7XG4gICAgfVxufVxuIiwgIi8qXG4gIFxuKi9cblxuaW1wb3J0IHsgUGFyc2luZ0NvbnRleHQsIFJlZmluZXIgfSBmcm9tIFwiLi4vLi4vY2hyb25vXCI7XG5pbXBvcnQgeyBQYXJzaW5nUmVzdWx0IH0gZnJvbSBcIi4uLy4uL3Jlc3VsdHNcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgT3ZlcmxhcFJlbW92YWxSZWZpbmVyIGltcGxlbWVudHMgUmVmaW5lciB7XG4gICAgcmVmaW5lKGNvbnRleHQ6IFBhcnNpbmdDb250ZXh0LCByZXN1bHRzOiBQYXJzaW5nUmVzdWx0W10pOiBQYXJzaW5nUmVzdWx0W10ge1xuICAgICAgICBpZiAocmVzdWx0cy5sZW5ndGggPCAyKSB7XG4gICAgICAgICAgICByZXR1cm4gcmVzdWx0cztcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGZpbHRlcmVkUmVzdWx0cyA9IFtdO1xuICAgICAgICBsZXQgcHJldlJlc3VsdCA9IHJlc3VsdHNbMF07XG4gICAgICAgIGZvciAobGV0IGkgPSAxOyBpIDwgcmVzdWx0cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gcmVzdWx0c1tpXTtcbiAgICAgICAgICAgIGlmIChyZXN1bHQuaW5kZXggPj0gcHJldlJlc3VsdC5pbmRleCArIHByZXZSZXN1bHQudGV4dC5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICBmaWx0ZXJlZFJlc3VsdHMucHVzaChwcmV2UmVzdWx0KTtcbiAgICAgICAgICAgICAgICBwcmV2UmVzdWx0ID0gcmVzdWx0O1xuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBJZiBvdmVybGFwLCBjb21wYXJlIHRoZSBsZW5ndGggYW5kIGRpc2NhcmQgdGhlIHNob3J0ZXIgb25lXG4gICAgICAgICAgICBsZXQga2VwdCA9IG51bGw7XG4gICAgICAgICAgICBsZXQgcmVtb3ZlZCA9IG51bGw7XG4gICAgICAgICAgICBpZiAocmVzdWx0LnRleHQubGVuZ3RoID4gcHJldlJlc3VsdC50ZXh0Lmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIGtlcHQgPSByZXN1bHQ7XG4gICAgICAgICAgICAgICAgcmVtb3ZlZCA9IHByZXZSZXN1bHQ7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGtlcHQgPSBwcmV2UmVzdWx0O1xuICAgICAgICAgICAgICAgIHJlbW92ZWQgPSByZXN1bHQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb250ZXh0LmRlYnVnKCgpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhgJHt0aGlzLmNvbnN0cnVjdG9yLm5hbWV9IHJlbW92ZSAke3JlbW92ZWR9IGJ5ICR7a2VwdH1gKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgcHJldlJlc3VsdCA9IGtlcHQ7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBUaGUgbGFzdCBvbmVcbiAgICAgICAgaWYgKHByZXZSZXN1bHQgIT0gbnVsbCkge1xuICAgICAgICAgICAgZmlsdGVyZWRSZXN1bHRzLnB1c2gocHJldlJlc3VsdCk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gZmlsdGVyZWRSZXN1bHRzO1xuICAgIH1cbn1cbiIsICIvKlxuICAgIEVuZm9yY2UgJ2ZvcndhcmREYXRlJyBvcHRpb24gdG8gb24gdGhlIHJlc3VsdHMuIFdoZW4gdGhlcmUgYXJlIG1pc3NpbmcgY29tcG9uZW50LFxuICAgIGUuZy4gXCJNYXJjaCAxMi0xMyAod2l0aG91dCB5ZWFyKVwiIG9yIFwiVGh1cnNkYXlcIiwgdGhlIHJlZmluZXIgd2lsbCB0cnkgdG8gYWRqdXN0IHRoZSByZXN1bHRcbiAgICBpbnRvIHRoZSBmdXR1cmUgaW5zdGVhZCBvZiB0aGUgcGFzdC5cbiovXG5cbmltcG9ydCB7IFBhcnNpbmdDb250ZXh0LCBSZWZpbmVyIH0gZnJvbSBcIi4uLy4uL2Nocm9ub1wiO1xuaW1wb3J0IHsgUGFyc2luZ1Jlc3VsdCB9IGZyb20gXCIuLi8uLi9yZXN1bHRzXCI7XG5pbXBvcnQgZGF5anMgZnJvbSBcImRheWpzXCI7XG5pbXBvcnQgKiBhcyBkYXRlcyBmcm9tIFwiLi4vLi4vdXRpbHMvZGF0ZXNcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRm9yd2FyZERhdGVSZWZpbmVyIGltcGxlbWVudHMgUmVmaW5lciB7XG4gICAgcmVmaW5lKGNvbnRleHQ6IFBhcnNpbmdDb250ZXh0LCByZXN1bHRzOiBQYXJzaW5nUmVzdWx0W10pOiBQYXJzaW5nUmVzdWx0W10ge1xuICAgICAgICBpZiAoIWNvbnRleHQub3B0aW9uLmZvcndhcmREYXRlKSB7XG4gICAgICAgICAgICByZXR1cm4gcmVzdWx0cztcbiAgICAgICAgfVxuXG4gICAgICAgIHJlc3VsdHMuZm9yRWFjaCgocmVzdWx0KSA9PiB7XG4gICAgICAgICAgICBsZXQgcmVmTW9tZW50ID0gZGF5anMoY29udGV4dC5yZWZlcmVuY2UuZ2V0RGF0ZVdpdGhBZGp1c3RlZFRpbWV6b25lKCkpO1xuXG4gICAgICAgICAgICBpZiAocmVzdWx0LnN0YXJ0LmlzT25seVRpbWUoKSAmJiBjb250ZXh0LnJlZmVyZW5jZS5pbnN0YW50ID4gcmVzdWx0LnN0YXJ0LmRhdGUoKSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHJlZkRhdGUgPSBjb250ZXh0LnJlZmVyZW5jZS5nZXREYXRlV2l0aEFkanVzdGVkVGltZXpvbmUoKTtcbiAgICAgICAgICAgICAgICBjb25zdCByZWZGb2xsb3dpbmdEYXkgPSBuZXcgRGF0ZShyZWZEYXRlKTtcbiAgICAgICAgICAgICAgICByZWZGb2xsb3dpbmdEYXkuc2V0RGF0ZShyZWZGb2xsb3dpbmdEYXkuZ2V0RGF0ZSgpICsgMSk7XG5cbiAgICAgICAgICAgICAgICBkYXRlcy5pbXBseVNpbWlsYXJEYXRlKHJlc3VsdC5zdGFydCwgcmVmRm9sbG93aW5nRGF5KTtcbiAgICAgICAgICAgICAgICBjb250ZXh0LmRlYnVnKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXG4gICAgICAgICAgICAgICAgICAgICAgICBgJHt0aGlzLmNvbnN0cnVjdG9yLm5hbWV9IGFkanVzdGVkICR7cmVzdWx0fSB0aW1lIGZyb20gdGhlIHJlZiBkYXRlICgke3JlZkRhdGV9KSB0byB0aGUgZm9sbG93aW5nIGRheSAoJHtyZWZGb2xsb3dpbmdEYXl9KWBcbiAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICBpZiAocmVzdWx0LmVuZCAmJiByZXN1bHQuZW5kLmlzT25seVRpbWUoKSkge1xuICAgICAgICAgICAgICAgICAgICBkYXRlcy5pbXBseVNpbWlsYXJEYXRlKHJlc3VsdC5lbmQsIHJlZkZvbGxvd2luZ0RheSk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChyZXN1bHQuc3RhcnQuZGF0ZSgpID4gcmVzdWx0LmVuZC5kYXRlKCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlZkZvbGxvd2luZ0RheS5zZXREYXRlKHJlZkZvbGxvd2luZ0RheS5nZXREYXRlKCkgKyAxKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGVzLmltcGx5U2ltaWxhckRhdGUocmVzdWx0LmVuZCwgcmVmRm9sbG93aW5nRGF5KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHJlc3VsdC5zdGFydC5pc09ubHlXZWVrZGF5Q29tcG9uZW50KCkgJiYgcmVmTW9tZW50LmlzQWZ0ZXIocmVzdWx0LnN0YXJ0LmRheWpzKCkpKSB7XG4gICAgICAgICAgICAgICAgaWYgKHJlZk1vbWVudC5kYXkoKSA+PSByZXN1bHQuc3RhcnQuZ2V0KFwid2Vla2RheVwiKSkge1xuICAgICAgICAgICAgICAgICAgICByZWZNb21lbnQgPSByZWZNb21lbnQuZGF5KHJlc3VsdC5zdGFydC5nZXQoXCJ3ZWVrZGF5XCIpICsgNyk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgcmVmTW9tZW50ID0gcmVmTW9tZW50LmRheSg8bnVtYmVyPnJlc3VsdC5zdGFydC5nZXQoXCJ3ZWVrZGF5XCIpKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICByZXN1bHQuc3RhcnQuaW1wbHkoXCJkYXlcIiwgcmVmTW9tZW50LmRhdGUoKSk7XG4gICAgICAgICAgICAgICAgcmVzdWx0LnN0YXJ0LmltcGx5KFwibW9udGhcIiwgcmVmTW9tZW50Lm1vbnRoKCkgKyAxKTtcbiAgICAgICAgICAgICAgICByZXN1bHQuc3RhcnQuaW1wbHkoXCJ5ZWFyXCIsIHJlZk1vbWVudC55ZWFyKCkpO1xuICAgICAgICAgICAgICAgIGNvbnRleHQuZGVidWcoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhgJHt0aGlzLmNvbnN0cnVjdG9yLm5hbWV9IGFkanVzdGVkICR7cmVzdWx0fSB3ZWVrZGF5ICgke3Jlc3VsdC5zdGFydH0pYCk7XG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICBpZiAocmVzdWx0LmVuZCAmJiByZXN1bHQuZW5kLmlzT25seVdlZWtkYXlDb21wb25lbnQoKSkge1xuICAgICAgICAgICAgICAgICAgICAvLyBBZGp1c3QgZGF0ZSB0byB0aGUgY29taW5nIHdlZWtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHJlZk1vbWVudC5kYXkoKSA+IHJlc3VsdC5lbmQuZ2V0KFwid2Vla2RheVwiKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVmTW9tZW50ID0gcmVmTW9tZW50LmRheShyZXN1bHQuZW5kLmdldChcIndlZWtkYXlcIikgKyA3KTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlZk1vbWVudCA9IHJlZk1vbWVudC5kYXkoPG51bWJlcj5yZXN1bHQuZW5kLmdldChcIndlZWtkYXlcIikpO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0LmVuZC5pbXBseShcImRheVwiLCByZWZNb21lbnQuZGF0ZSgpKTtcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0LmVuZC5pbXBseShcIm1vbnRoXCIsIHJlZk1vbWVudC5tb250aCgpICsgMSk7XG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdC5lbmQuaW1wbHkoXCJ5ZWFyXCIsIHJlZk1vbWVudC55ZWFyKCkpO1xuICAgICAgICAgICAgICAgICAgICBjb250ZXh0LmRlYnVnKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGAke3RoaXMuY29uc3RydWN0b3IubmFtZX0gYWRqdXN0ZWQgJHtyZXN1bHR9IHdlZWtkYXkgKCR7cmVzdWx0LmVuZH0pYCk7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gSW4gY2FzZSB3aGVyZSB3ZSBrbm93IHRoZSBtb250aCwgYnV0IG5vdCB3aGljaCB5ZWFyIChlLmcuIFwiaW4gRGVjZW1iZXJcIiwgXCIyNXRoIERlY2VtYmVyXCIpLFxuICAgICAgICAgICAgLy8gdHJ5IG1vdmUgdG8gYW5vdGhlciB5ZWFyXG4gICAgICAgICAgICBpZiAocmVzdWx0LnN0YXJ0LmlzRGF0ZVdpdGhVbmtub3duWWVhcigpICYmIHJlZk1vbWVudC5pc0FmdGVyKHJlc3VsdC5zdGFydC5kYXlqcygpKSkge1xuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMyAmJiByZWZNb21lbnQuaXNBZnRlcihyZXN1bHQuc3RhcnQuZGF5anMoKSk7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICByZXN1bHQuc3RhcnQuaW1wbHkoXCJ5ZWFyXCIsIHJlc3VsdC5zdGFydC5nZXQoXCJ5ZWFyXCIpICsgMSk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnRleHQuZGVidWcoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coYCR7dGhpcy5jb25zdHJ1Y3Rvci5uYW1lfSBhZGp1c3RlZCAke3Jlc3VsdH0geWVhciAoJHtyZXN1bHQuc3RhcnR9KWApO1xuICAgICAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgICAgICBpZiAocmVzdWx0LmVuZCAmJiAhcmVzdWx0LmVuZC5pc0NlcnRhaW4oXCJ5ZWFyXCIpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXN1bHQuZW5kLmltcGx5KFwieWVhclwiLCByZXN1bHQuZW5kLmdldChcInllYXJcIikgKyAxKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRleHQuZGVidWcoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGAke3RoaXMuY29uc3RydWN0b3IubmFtZX0gYWRqdXN0ZWQgJHtyZXN1bHR9IG1vbnRoICgke3Jlc3VsdC5zdGFydH0pYCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdHM7XG4gICAgfVxufVxuIiwgImltcG9ydCB7IEZpbHRlciB9IGZyb20gXCIuLi9hYnN0cmFjdFJlZmluZXJzXCI7XG5pbXBvcnQgeyBQYXJzaW5nUmVzdWx0IH0gZnJvbSBcIi4uLy4uL3Jlc3VsdHNcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVW5saWtlbHlGb3JtYXRGaWx0ZXIgZXh0ZW5kcyBGaWx0ZXIge1xuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgc3RyaWN0TW9kZTogYm9vbGVhbikge1xuICAgICAgICBzdXBlcigpO1xuICAgIH1cblxuICAgIGlzVmFsaWQoY29udGV4dCwgcmVzdWx0OiBQYXJzaW5nUmVzdWx0KTogYm9vbGVhbiB7XG4gICAgICAgIGlmIChyZXN1bHQudGV4dC5yZXBsYWNlKFwiIFwiLCBcIlwiKS5tYXRjaCgvXlxcZCooXFwuXFxkKik/JC8pKSB7XG4gICAgICAgICAgICBjb250ZXh0LmRlYnVnKCgpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhgUmVtb3ZpbmcgdW5saWtlbHkgcmVzdWx0ICcke3Jlc3VsdC50ZXh0fSdgKTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIXJlc3VsdC5zdGFydC5pc1ZhbGlkRGF0ZSgpKSB7XG4gICAgICAgICAgICBjb250ZXh0LmRlYnVnKCgpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhgUmVtb3ZpbmcgaW52YWxpZCByZXN1bHQ6ICR7cmVzdWx0fSAoJHtyZXN1bHQuc3RhcnR9KWApO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChyZXN1bHQuZW5kICYmICFyZXN1bHQuZW5kLmlzVmFsaWREYXRlKCkpIHtcbiAgICAgICAgICAgIGNvbnRleHQuZGVidWcoKCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGBSZW1vdmluZyBpbnZhbGlkIHJlc3VsdDogJHtyZXN1bHR9ICgke3Jlc3VsdC5lbmR9KWApO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLnN0cmljdE1vZGUpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmlzU3RyaWN0TW9kZVZhbGlkKGNvbnRleHQsIHJlc3VsdCk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGlzU3RyaWN0TW9kZVZhbGlkKGNvbnRleHQsIHJlc3VsdDogUGFyc2luZ1Jlc3VsdCkge1xuICAgICAgICBpZiAocmVzdWx0LnN0YXJ0LmlzT25seVdlZWtkYXlDb21wb25lbnQoKSkge1xuICAgICAgICAgICAgY29udGV4dC5kZWJ1ZygoKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coYChTdHJpY3QpIFJlbW92aW5nIHdlZWtkYXkgb25seSBjb21wb25lbnQ6ICR7cmVzdWx0fSAoJHtyZXN1bHQuZW5kfSlgKTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG59XG4iLCAiaW1wb3J0IHsgUGFyc2luZ0NvbnRleHQgfSBmcm9tIFwiLi4vLi4vY2hyb25vXCI7XG5pbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tIFwiLi4vLi4vdHlwZXNcIjtcbmltcG9ydCB7IEFic3RyYWN0UGFyc2VyV2l0aFdvcmRCb3VuZGFyeUNoZWNraW5nIH0gZnJvbSBcIi4vQWJzdHJhY3RQYXJzZXJXaXRoV29yZEJvdW5kYXJ5XCI7XG5cbi8vIElTTyA4NjAxXG4vLyBodHRwOi8vd3d3LnczLm9yZy9UUi9OT1RFLWRhdGV0aW1lXG4vLyAtIFlZWVktTU0tRERcbi8vIC0gWVlZWS1NTS1ERFRoaDptbVRaRFxuLy8gLSBZWVlZLU1NLUREVGhoOm1tOnNzVFpEXG4vLyAtIFlZWVktTU0tRERUaGg6bW06c3Muc1RaRFxuLy8gLSBUWkQgPSAoWiBvciAraGg6bW0gb3IgLWhoOm1tKVxuXG4vLyBwcmV0dGllci1pZ25vcmVcbmNvbnN0IFBBVFRFUk4gPSBuZXcgUmVnRXhwKFxuICAgIFwiKFswLTldezR9KVxcXFwtKFswLTldezEsMn0pXFxcXC0oWzAtOV17MSwyfSlcIiArXG4gICAgXCIoPzpUXCIgKyAvLy4uXG4gICAgICAgIFwiKFswLTldezEsMn0pOihbMC05XXsxLDJ9KVwiICsgLy8gaGg6bW1cbiAgICAgICAgXCIoPzpcIiArXG4gICAgICAgICAgICBcIjooWzAtOV17MSwyfSkoPzpcXFxcLihcXFxcZHsxLDR9KSk/XCIgK1xuICAgICAgICBcIik/XCIgKyAvLyA6c3Muc1xuICAgICAgICBcIihcIiArXG4gICAgICAgICAgICBcIlp8KFsrLV1cXFxcZHsyfSk6PyhcXFxcZHsyfSk/XCIgK1xuICAgICAgICBcIik/XCIgKyAvLyBUWkQgKFogb3IgXHUwMEIxaGg6bW0gb3IgXHUwMEIxaGhtbSBvciBcdTAwQjFoaClcbiAgICBcIik/XCIgK1xuICAgIFwiKD89XFxcXFd8JClcIixcbiAgICBcImlcIlxuKTtcblxuY29uc3QgWUVBUl9OVU1CRVJfR1JPVVAgPSAxO1xuY29uc3QgTU9OVEhfTlVNQkVSX0dST1VQID0gMjtcbmNvbnN0IERBVEVfTlVNQkVSX0dST1VQID0gMztcbmNvbnN0IEhPVVJfTlVNQkVSX0dST1VQID0gNDtcbmNvbnN0IE1JTlVURV9OVU1CRVJfR1JPVVAgPSA1O1xuY29uc3QgU0VDT05EX05VTUJFUl9HUk9VUCA9IDY7XG5jb25zdCBNSUxMSVNFQ09ORF9OVU1CRVJfR1JPVVAgPSA3O1xuY29uc3QgVFpEX0dST1VQID0gODtcbmNvbnN0IFRaRF9IT1VSX09GRlNFVF9HUk9VUCA9IDk7XG5jb25zdCBUWkRfTUlOVVRFX09GRlNFVF9HUk9VUCA9IDEwO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJU09Gb3JtYXRQYXJzZXIgZXh0ZW5kcyBBYnN0cmFjdFBhcnNlcldpdGhXb3JkQm91bmRhcnlDaGVja2luZyB7XG4gICAgaW5uZXJQYXR0ZXJuKCk6IFJlZ0V4cCB7XG4gICAgICAgIHJldHVybiBQQVRURVJOO1xuICAgIH1cblxuICAgIGlubmVyRXh0cmFjdChjb250ZXh0OiBQYXJzaW5nQ29udGV4dCwgbWF0Y2g6IFJlZ0V4cE1hdGNoQXJyYXkpIHtcbiAgICAgICAgY29uc3QgY29tcG9uZW50cyA9IGNvbnRleHQuY3JlYXRlUGFyc2luZ0NvbXBvbmVudHMoe1xuICAgICAgICAgICAgXCJ5ZWFyXCI6IHBhcnNlSW50KG1hdGNoW1lFQVJfTlVNQkVSX0dST1VQXSksXG4gICAgICAgICAgICBcIm1vbnRoXCI6IHBhcnNlSW50KG1hdGNoW01PTlRIX05VTUJFUl9HUk9VUF0pLFxuICAgICAgICAgICAgXCJkYXlcIjogcGFyc2VJbnQobWF0Y2hbREFURV9OVU1CRVJfR1JPVVBdKSxcbiAgICAgICAgfSk7XG4gICAgICAgIGlmIChtYXRjaFtIT1VSX05VTUJFUl9HUk9VUF0gIT0gbnVsbCkge1xuICAgICAgICAgICAgY29tcG9uZW50cy5hc3NpZ24oXCJob3VyXCIsIHBhcnNlSW50KG1hdGNoW0hPVVJfTlVNQkVSX0dST1VQXSkpO1xuICAgICAgICAgICAgY29tcG9uZW50cy5hc3NpZ24oXCJtaW51dGVcIiwgcGFyc2VJbnQobWF0Y2hbTUlOVVRFX05VTUJFUl9HUk9VUF0pKTtcblxuICAgICAgICAgICAgaWYgKG1hdGNoW1NFQ09ORF9OVU1CRVJfR1JPVVBdICE9IG51bGwpIHtcbiAgICAgICAgICAgICAgICBjb21wb25lbnRzLmFzc2lnbihcInNlY29uZFwiLCBwYXJzZUludChtYXRjaFtTRUNPTkRfTlVNQkVSX0dST1VQXSkpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAobWF0Y2hbTUlMTElTRUNPTkRfTlVNQkVSX0dST1VQXSAhPSBudWxsKSB7XG4gICAgICAgICAgICAgICAgY29tcG9uZW50cy5hc3NpZ24oXCJtaWxsaXNlY29uZFwiLCBwYXJzZUludChtYXRjaFtNSUxMSVNFQ09ORF9OVU1CRVJfR1JPVVBdKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAobWF0Y2hbVFpEX0dST1VQXSAhPSBudWxsKSB7XG4gICAgICAgICAgICAgICAgLy8gVGhlIFp1bHUgdGltZSB6b25lIChaKSBpcyBlcXVpdmFsZW50IHRvIFVUQ1xuICAgICAgICAgICAgICAgIGxldCBvZmZzZXQgPSAwO1xuICAgICAgICAgICAgICAgIGlmIChtYXRjaFtUWkRfSE9VUl9PRkZTRVRfR1JPVVBdKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGhvdXJPZmZzZXQgPSBwYXJzZUludChtYXRjaFtUWkRfSE9VUl9PRkZTRVRfR1JPVVBdKTtcbiAgICAgICAgICAgICAgICAgICAgbGV0IG1pbnV0ZU9mZnNldCA9IDA7XG4gICAgICAgICAgICAgICAgICAgIGlmIChtYXRjaFtUWkRfTUlOVVRFX09GRlNFVF9HUk9VUF0gIT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgbWludXRlT2Zmc2V0ID0gcGFyc2VJbnQobWF0Y2hbVFpEX01JTlVURV9PRkZTRVRfR1JPVVBdKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBvZmZzZXQgPSBob3VyT2Zmc2V0ICogNjA7XG4gICAgICAgICAgICAgICAgICAgIGlmIChvZmZzZXQgPCAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBvZmZzZXQgLT0gbWludXRlT2Zmc2V0O1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgb2Zmc2V0ICs9IG1pbnV0ZU9mZnNldDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjb21wb25lbnRzLmFzc2lnbihcInRpbWV6b25lT2Zmc2V0XCIsIG9mZnNldCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGNvbXBvbmVudHMuYWRkVGFnKFwicGFyc2VyL0lTT0Zvcm1hdFBhcnNlclwiKTtcbiAgICB9XG59XG4iLCAiLypcbiAgXG4qL1xuXG5pbXBvcnQgeyBNZXJnaW5nUmVmaW5lciB9IGZyb20gXCIuLi9hYnN0cmFjdFJlZmluZXJzXCI7XG5pbXBvcnQgeyBQYXJzaW5nUmVzdWx0IH0gZnJvbSBcIi4uLy4uL3Jlc3VsdHNcIjtcblxuLyoqXG4gKiBNZXJnZSB3ZWVrZGF5IGNvbXBvbmVudCBpbnRvIG1vcmUgY29tcGxldGVkIGRhdGFcbiAqIC0gW1N1bmRheV0gWzEyLzcvMjAxNF0gPT4gW1N1bmRheSAxMi83LzIwMTRdXG4gKiAtIFtUdWVzZGF5XSwgW0phbnVhcnkgMTMsIDIwMTJdID0+IFtTdW5kYXkgMTIvNy8yMDE0XVxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNZXJnZVdlZWtkYXlDb21wb25lbnRSZWZpbmVyIGV4dGVuZHMgTWVyZ2luZ1JlZmluZXIge1xuICAgIG1lcmdlUmVzdWx0cyh0ZXh0QmV0d2Vlbjogc3RyaW5nLCBjdXJyZW50UmVzdWx0OiBQYXJzaW5nUmVzdWx0LCBuZXh0UmVzdWx0OiBQYXJzaW5nUmVzdWx0KTogUGFyc2luZ1Jlc3VsdCB7XG4gICAgICAgIGNvbnN0IG5ld1Jlc3VsdCA9IG5leHRSZXN1bHQuY2xvbmUoKTtcbiAgICAgICAgbmV3UmVzdWx0LmluZGV4ID0gY3VycmVudFJlc3VsdC5pbmRleDtcbiAgICAgICAgbmV3UmVzdWx0LnRleHQgPSBjdXJyZW50UmVzdWx0LnRleHQgKyB0ZXh0QmV0d2VlbiArIG5ld1Jlc3VsdC50ZXh0O1xuXG4gICAgICAgIG5ld1Jlc3VsdC5zdGFydC5hc3NpZ24oXCJ3ZWVrZGF5XCIsIGN1cnJlbnRSZXN1bHQuc3RhcnQuZ2V0KFwid2Vla2RheVwiKSk7XG4gICAgICAgIGlmIChuZXdSZXN1bHQuZW5kKSB7XG4gICAgICAgICAgICBuZXdSZXN1bHQuZW5kLmFzc2lnbihcIndlZWtkYXlcIiwgY3VycmVudFJlc3VsdC5zdGFydC5nZXQoXCJ3ZWVrZGF5XCIpKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBuZXdSZXN1bHQ7XG4gICAgfVxuXG4gICAgc2hvdWxkTWVyZ2VSZXN1bHRzKHRleHRCZXR3ZWVuOiBzdHJpbmcsIGN1cnJlbnRSZXN1bHQ6IFBhcnNpbmdSZXN1bHQsIG5leHRSZXN1bHQ6IFBhcnNpbmdSZXN1bHQpOiBib29sZWFuIHtcbiAgICAgICAgY29uc3Qgd2Vla2RheVRoZW5Ob3JtYWxEYXRlID1cbiAgICAgICAgICAgIGN1cnJlbnRSZXN1bHQuc3RhcnQuaXNPbmx5V2Vla2RheUNvbXBvbmVudCgpICYmXG4gICAgICAgICAgICAhY3VycmVudFJlc3VsdC5zdGFydC5pc0NlcnRhaW4oXCJob3VyXCIpICYmXG4gICAgICAgICAgICBuZXh0UmVzdWx0LnN0YXJ0LmlzQ2VydGFpbihcImRheVwiKTtcbiAgICAgICAgcmV0dXJuIHdlZWtkYXlUaGVuTm9ybWFsRGF0ZSAmJiB0ZXh0QmV0d2Vlbi5tYXRjaCgvXiw/XFxzKiQvKSAhPSBudWxsO1xuICAgIH1cbn1cbiIsICJpbXBvcnQgeyBDb25maWd1cmF0aW9uLCBQYXJzZXIsIFJlZmluZXIgfSBmcm9tIFwiLi9jaHJvbm9cIjtcblxuaW1wb3J0IEV4dHJhY3RUaW1lem9uZUFiYnJSZWZpbmVyIGZyb20gXCIuL2NvbW1vbi9yZWZpbmVycy9FeHRyYWN0VGltZXpvbmVBYmJyUmVmaW5lclwiO1xuaW1wb3J0IEV4dHJhY3RUaW1lem9uZU9mZnNldFJlZmluZXIgZnJvbSBcIi4vY29tbW9uL3JlZmluZXJzL0V4dHJhY3RUaW1lem9uZU9mZnNldFJlZmluZXJcIjtcbmltcG9ydCBPdmVybGFwUmVtb3ZhbFJlZmluZXIgZnJvbSBcIi4vY29tbW9uL3JlZmluZXJzL092ZXJsYXBSZW1vdmFsUmVmaW5lclwiO1xuaW1wb3J0IEZvcndhcmREYXRlUmVmaW5lciBmcm9tIFwiLi9jb21tb24vcmVmaW5lcnMvRm9yd2FyZERhdGVSZWZpbmVyXCI7XG5pbXBvcnQgVW5saWtlbHlGb3JtYXRGaWx0ZXIgZnJvbSBcIi4vY29tbW9uL3JlZmluZXJzL1VubGlrZWx5Rm9ybWF0RmlsdGVyXCI7XG5pbXBvcnQgSVNPRm9ybWF0UGFyc2VyIGZyb20gXCIuL2NvbW1vbi9wYXJzZXJzL0lTT0Zvcm1hdFBhcnNlclwiO1xuaW1wb3J0IE1lcmdlV2Vla2RheUNvbXBvbmVudFJlZmluZXIgZnJvbSBcIi4vY29tbW9uL3JlZmluZXJzL01lcmdlV2Vla2RheUNvbXBvbmVudFJlZmluZXJcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIGluY2x1ZGVDb21tb25Db25maWd1cmF0aW9uKGNvbmZpZ3VyYXRpb246IENvbmZpZ3VyYXRpb24sIHN0cmljdE1vZGUgPSBmYWxzZSk6IENvbmZpZ3VyYXRpb24ge1xuICAgIGNvbmZpZ3VyYXRpb24ucGFyc2Vycy51bnNoaWZ0KG5ldyBJU09Gb3JtYXRQYXJzZXIoKSk7XG5cbiAgICBjb25maWd1cmF0aW9uLnJlZmluZXJzLnVuc2hpZnQobmV3IE1lcmdlV2Vla2RheUNvbXBvbmVudFJlZmluZXIoKSk7XG4gICAgY29uZmlndXJhdGlvbi5yZWZpbmVycy51bnNoaWZ0KG5ldyBFeHRyYWN0VGltZXpvbmVPZmZzZXRSZWZpbmVyKCkpO1xuICAgIGNvbmZpZ3VyYXRpb24ucmVmaW5lcnMudW5zaGlmdChuZXcgT3ZlcmxhcFJlbW92YWxSZWZpbmVyKCkpO1xuXG4gICAgLy8gVW5saWtlIEV4dHJhY3RUaW1lem9uZU9mZnNldFJlZmluZXIsIHRoaXMgcmVmaW5lciByZWxpZXMgb24ga25vd2luZyBib3RoIGRhdGUgYW5kIHRpbWUgaW4gY2FzZXMgd2hlcmUgdGhlIHR6XG4gICAgLy8gaXMgYW1iaWd1b3VzIChpbiB0ZXJtcyBvZiBEU1Qvbm9uLURTVCkuIEl0IHRoZXJlZm9yZSBuZWVkcyB0byBiZSBhcHBsaWVkIGFzIGxhdGUgYXMgcG9zc2libGUgaW4gdGhlIHBhcnNpbmcuXG4gICAgY29uZmlndXJhdGlvbi5yZWZpbmVycy5wdXNoKG5ldyBFeHRyYWN0VGltZXpvbmVBYmJyUmVmaW5lcigpKTtcbiAgICBjb25maWd1cmF0aW9uLnJlZmluZXJzLnB1c2gobmV3IE92ZXJsYXBSZW1vdmFsUmVmaW5lcigpKTtcbiAgICBjb25maWd1cmF0aW9uLnJlZmluZXJzLnB1c2gobmV3IEZvcndhcmREYXRlUmVmaW5lcigpKTtcbiAgICBjb25maWd1cmF0aW9uLnJlZmluZXJzLnB1c2gobmV3IFVubGlrZWx5Rm9ybWF0RmlsdGVyKHN0cmljdE1vZGUpKTtcbiAgICByZXR1cm4gY29uZmlndXJhdGlvbjtcbn1cbiIsICJpbXBvcnQgeyBQYXJzaW5nQ29udGV4dCB9IGZyb20gXCIuLi8uLi8uLi9jaHJvbm9cIjtcbmltcG9ydCB7IFBhcnNpbmdDb21wb25lbnRzLCBQYXJzaW5nUmVzdWx0IH0gZnJvbSBcIi4uLy4uLy4uL3Jlc3VsdHNcIjtcbmltcG9ydCBkYXlqcyBmcm9tIFwiZGF5anNcIjtcbmltcG9ydCB7IEFic3RyYWN0UGFyc2VyV2l0aFdvcmRCb3VuZGFyeUNoZWNraW5nIH0gZnJvbSBcIi4uLy4uLy4uL2NvbW1vbi9wYXJzZXJzL0Fic3RyYWN0UGFyc2VyV2l0aFdvcmRCb3VuZGFyeVwiO1xuaW1wb3J0IHsgYXNzaWduU2ltaWxhckRhdGUgfSBmcm9tIFwiLi4vLi4vLi4vdXRpbHMvZGF5anNcIjtcbmltcG9ydCAqIGFzIHJlZmVyZW5jZXMgZnJvbSBcIi4uLy4uLy4uL2NvbW1vbi9jYXN1YWxSZWZlcmVuY2VzXCI7XG5cbmNvbnN0IFBBVFRFUk4gPSAvKG5vd3x0b2RheXx0b25pZ2h0fHRvbW9ycm93fG92ZXJtb3Jyb3d8dG1yfHRtcnd8eWVzdGVyZGF5fGxhc3RcXHMqbmlnaHQpKD89XFxXfCQpL2k7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEVOQ2FzdWFsRGF0ZVBhcnNlciBleHRlbmRzIEFic3RyYWN0UGFyc2VyV2l0aFdvcmRCb3VuZGFyeUNoZWNraW5nIHtcbiAgICBpbm5lclBhdHRlcm4oY29udGV4dDogUGFyc2luZ0NvbnRleHQpOiBSZWdFeHAge1xuICAgICAgICByZXR1cm4gUEFUVEVSTjtcbiAgICB9XG5cbiAgICBpbm5lckV4dHJhY3QoY29udGV4dDogUGFyc2luZ0NvbnRleHQsIG1hdGNoOiBSZWdFeHBNYXRjaEFycmF5KTogUGFyc2luZ0NvbXBvbmVudHMgfCBQYXJzaW5nUmVzdWx0IHtcbiAgICAgICAgbGV0IHRhcmdldERhdGUgPSBkYXlqcyhjb250ZXh0LnJlZkRhdGUpO1xuICAgICAgICBjb25zdCBsb3dlclRleHQgPSBtYXRjaFswXS50b0xvd2VyQ2FzZSgpO1xuICAgICAgICBsZXQgY29tcG9uZW50ID0gY29udGV4dC5jcmVhdGVQYXJzaW5nQ29tcG9uZW50cygpO1xuXG4gICAgICAgIHN3aXRjaCAobG93ZXJUZXh0KSB7XG4gICAgICAgICAgICBjYXNlIFwibm93XCI6XG4gICAgICAgICAgICAgICAgY29tcG9uZW50ID0gcmVmZXJlbmNlcy5ub3coY29udGV4dC5yZWZlcmVuY2UpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICBjYXNlIFwidG9kYXlcIjpcbiAgICAgICAgICAgICAgICBjb21wb25lbnQgPSByZWZlcmVuY2VzLnRvZGF5KGNvbnRleHQucmVmZXJlbmNlKTtcbiAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgY2FzZSBcInllc3RlcmRheVwiOlxuICAgICAgICAgICAgICAgIGNvbXBvbmVudCA9IHJlZmVyZW5jZXMueWVzdGVyZGF5KGNvbnRleHQucmVmZXJlbmNlKTtcbiAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgY2FzZSBcInRvbW9ycm93XCI6XG4gICAgICAgICAgICBjYXNlIFwidG1yXCI6XG4gICAgICAgICAgICBjYXNlIFwidG1yd1wiOlxuICAgICAgICAgICAgICAgIGNvbXBvbmVudCA9IHJlZmVyZW5jZXMudG9tb3Jyb3coY29udGV4dC5yZWZlcmVuY2UpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICBjYXNlIFwidG9uaWdodFwiOlxuICAgICAgICAgICAgICAgIGNvbXBvbmVudCA9IHJlZmVyZW5jZXMudG9uaWdodChjb250ZXh0LnJlZmVyZW5jZSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIGNhc2UgXCJvdmVybW9ycm93XCI6XG4gICAgICAgICAgICAgICAgY29tcG9uZW50ID0gcmVmZXJlbmNlcy50aGVEYXlBZnRlcihjb250ZXh0LnJlZmVyZW5jZSwgMik7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgaWYgKGxvd2VyVGV4dC5tYXRjaCgvbGFzdFxccypuaWdodC8pKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0YXJnZXREYXRlLmhvdXIoKSA+IDYpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldERhdGUgPSB0YXJnZXREYXRlLmFkZCgtMSwgXCJkYXlcIik7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBhc3NpZ25TaW1pbGFyRGF0ZShjb21wb25lbnQsIHRhcmdldERhdGUpO1xuICAgICAgICAgICAgICAgICAgICBjb21wb25lbnQuaW1wbHkoXCJob3VyXCIsIDApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgICBjb21wb25lbnQuYWRkVGFnKFwicGFyc2VyL0VOQ2FzdWFsRGF0ZVBhcnNlclwiKTtcbiAgICAgICAgcmV0dXJuIGNvbXBvbmVudDtcbiAgICB9XG59XG4iLCAiaW1wb3J0IHsgUGFyc2luZ0NvbXBvbmVudHMsIFJlZmVyZW5jZVdpdGhUaW1lem9uZSB9IGZyb20gXCIuLi9yZXN1bHRzXCI7XG5pbXBvcnQgZGF5anMgZnJvbSBcImRheWpzXCI7XG5pbXBvcnQge1xuICAgIGFzc2lnblNpbWlsYXJEYXRlLFxuICAgIGFzc2lnblNpbWlsYXJUaW1lLFxuICAgIGltcGx5U2ltaWxhckRhdGUsXG4gICAgaW1wbHlTaW1pbGFyVGltZSxcbiAgICBpbXBseVRoZU5leHREYXksXG59IGZyb20gXCIuLi91dGlscy9kYXlqc1wiO1xuaW1wb3J0IHsgTWVyaWRpZW0gfSBmcm9tIFwiLi4vdHlwZXNcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIG5vdyhyZWZlcmVuY2U6IFJlZmVyZW5jZVdpdGhUaW1lem9uZSk6IFBhcnNpbmdDb21wb25lbnRzIHtcbiAgICBjb25zdCB0YXJnZXREYXRlID0gZGF5anMocmVmZXJlbmNlLmdldERhdGVXaXRoQWRqdXN0ZWRUaW1lem9uZSgpKTtcbiAgICBjb25zdCBjb21wb25lbnQgPSBuZXcgUGFyc2luZ0NvbXBvbmVudHMocmVmZXJlbmNlLCB7fSk7XG4gICAgYXNzaWduU2ltaWxhckRhdGUoY29tcG9uZW50LCB0YXJnZXREYXRlKTtcbiAgICBhc3NpZ25TaW1pbGFyVGltZShjb21wb25lbnQsIHRhcmdldERhdGUpO1xuICAgIGNvbXBvbmVudC5hc3NpZ24oXCJ0aW1lem9uZU9mZnNldFwiLCByZWZlcmVuY2UuZ2V0VGltZXpvbmVPZmZzZXQoKSk7XG4gICAgY29tcG9uZW50LmFkZFRhZyhcImNhc3VhbFJlZmVyZW5jZS9ub3dcIik7XG4gICAgcmV0dXJuIGNvbXBvbmVudDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRvZGF5KHJlZmVyZW5jZTogUmVmZXJlbmNlV2l0aFRpbWV6b25lKTogUGFyc2luZ0NvbXBvbmVudHMge1xuICAgIGNvbnN0IHRhcmdldERhdGUgPSBkYXlqcyhyZWZlcmVuY2UuZ2V0RGF0ZVdpdGhBZGp1c3RlZFRpbWV6b25lKCkpO1xuICAgIGNvbnN0IGNvbXBvbmVudCA9IG5ldyBQYXJzaW5nQ29tcG9uZW50cyhyZWZlcmVuY2UsIHt9KTtcbiAgICBhc3NpZ25TaW1pbGFyRGF0ZShjb21wb25lbnQsIHRhcmdldERhdGUpO1xuICAgIGltcGx5U2ltaWxhclRpbWUoY29tcG9uZW50LCB0YXJnZXREYXRlKTtcbiAgICBjb21wb25lbnQuYWRkVGFnKFwiY2FzdWFsUmVmZXJlbmNlL3RvZGF5XCIpO1xuICAgIHJldHVybiBjb21wb25lbnQ7XG59XG5cbi8qKlxuICogVGhlIHByZXZpb3VzIGRheS4gSW1wbHkgdGhlIHNhbWUgdGltZS5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHllc3RlcmRheShyZWZlcmVuY2U6IFJlZmVyZW5jZVdpdGhUaW1lem9uZSk6IFBhcnNpbmdDb21wb25lbnRzIHtcbiAgICByZXR1cm4gdGhlRGF5QmVmb3JlKHJlZmVyZW5jZSwgMSkuYWRkVGFnKFwiY2FzdWFsUmVmZXJlbmNlL3llc3RlcmRheVwiKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRoZURheUJlZm9yZShyZWZlcmVuY2U6IFJlZmVyZW5jZVdpdGhUaW1lem9uZSwgbnVtRGF5OiBudW1iZXIpOiBQYXJzaW5nQ29tcG9uZW50cyB7XG4gICAgcmV0dXJuIHRoZURheUFmdGVyKHJlZmVyZW5jZSwgLW51bURheSk7XG59XG5cbi8qKlxuICogVGhlIGZvbGxvd2luZyBkYXkgd2l0aCBkYXlqcy5hc3NpZ25UaGVOZXh0RGF5KClcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHRvbW9ycm93KHJlZmVyZW5jZTogUmVmZXJlbmNlV2l0aFRpbWV6b25lKTogUGFyc2luZ0NvbXBvbmVudHMge1xuICAgIHJldHVybiB0aGVEYXlBZnRlcihyZWZlcmVuY2UsIDEpLmFkZFRhZyhcImNhc3VhbFJlZmVyZW5jZS90b21vcnJvd1wiKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRoZURheUFmdGVyKHJlZmVyZW5jZTogUmVmZXJlbmNlV2l0aFRpbWV6b25lLCBuRGF5czogbnVtYmVyKTogUGFyc2luZ0NvbXBvbmVudHMge1xuICAgIGxldCB0YXJnZXREYXRlID0gZGF5anMocmVmZXJlbmNlLmdldERhdGVXaXRoQWRqdXN0ZWRUaW1lem9uZSgpKTtcbiAgICBjb25zdCBjb21wb25lbnQgPSBuZXcgUGFyc2luZ0NvbXBvbmVudHMocmVmZXJlbmNlLCB7fSk7XG4gICAgdGFyZ2V0RGF0ZSA9IHRhcmdldERhdGUuYWRkKG5EYXlzLCBcImRheVwiKTtcbiAgICBhc3NpZ25TaW1pbGFyRGF0ZShjb21wb25lbnQsIHRhcmdldERhdGUpO1xuICAgIGltcGx5U2ltaWxhclRpbWUoY29tcG9uZW50LCB0YXJnZXREYXRlKTtcbiAgICByZXR1cm4gY29tcG9uZW50O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdG9uaWdodChyZWZlcmVuY2U6IFJlZmVyZW5jZVdpdGhUaW1lem9uZSwgaW1wbHlIb3VyID0gMjIpOiBQYXJzaW5nQ29tcG9uZW50cyB7XG4gICAgY29uc3QgdGFyZ2V0RGF0ZSA9IGRheWpzKHJlZmVyZW5jZS5nZXREYXRlV2l0aEFkanVzdGVkVGltZXpvbmUoKSk7XG4gICAgY29uc3QgY29tcG9uZW50ID0gbmV3IFBhcnNpbmdDb21wb25lbnRzKHJlZmVyZW5jZSwge30pO1xuICAgIGFzc2lnblNpbWlsYXJEYXRlKGNvbXBvbmVudCwgdGFyZ2V0RGF0ZSk7XG4gICAgY29tcG9uZW50LmltcGx5KFwiaG91clwiLCBpbXBseUhvdXIpO1xuICAgIGNvbXBvbmVudC5pbXBseShcIm1lcmlkaWVtXCIsIE1lcmlkaWVtLlBNKTtcbiAgICBjb21wb25lbnQuYWRkVGFnKFwiY2FzdWFsUmVmZXJlbmNlL3RvbmlnaHRcIik7XG4gICAgcmV0dXJuIGNvbXBvbmVudDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGxhc3ROaWdodChyZWZlcmVuY2U6IFJlZmVyZW5jZVdpdGhUaW1lem9uZSwgaW1wbHlIb3VyID0gMCk6IFBhcnNpbmdDb21wb25lbnRzIHtcbiAgICBsZXQgdGFyZ2V0RGF0ZSA9IGRheWpzKHJlZmVyZW5jZS5nZXREYXRlV2l0aEFkanVzdGVkVGltZXpvbmUoKSk7XG4gICAgY29uc3QgY29tcG9uZW50ID0gbmV3IFBhcnNpbmdDb21wb25lbnRzKHJlZmVyZW5jZSwge30pO1xuICAgIGlmICh0YXJnZXREYXRlLmhvdXIoKSA8IDYpIHtcbiAgICAgICAgdGFyZ2V0RGF0ZSA9IHRhcmdldERhdGUuYWRkKC0xLCBcImRheVwiKTtcbiAgICB9XG4gICAgYXNzaWduU2ltaWxhckRhdGUoY29tcG9uZW50LCB0YXJnZXREYXRlKTtcbiAgICBjb21wb25lbnQuaW1wbHkoXCJob3VyXCIsIGltcGx5SG91cik7XG4gICAgcmV0dXJuIGNvbXBvbmVudDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGV2ZW5pbmcocmVmZXJlbmNlOiBSZWZlcmVuY2VXaXRoVGltZXpvbmUsIGltcGx5SG91ciA9IDIwKTogUGFyc2luZ0NvbXBvbmVudHMge1xuICAgIGNvbnN0IGNvbXBvbmVudCA9IG5ldyBQYXJzaW5nQ29tcG9uZW50cyhyZWZlcmVuY2UsIHt9KTtcbiAgICBjb21wb25lbnQuaW1wbHkoXCJtZXJpZGllbVwiLCBNZXJpZGllbS5QTSk7XG4gICAgY29tcG9uZW50LmltcGx5KFwiaG91clwiLCBpbXBseUhvdXIpO1xuICAgIGNvbXBvbmVudC5hZGRUYWcoXCJjYXN1YWxSZWZlcmVuY2UvZXZlbmluZ1wiKTtcbiAgICByZXR1cm4gY29tcG9uZW50O1xufVxuXG5leHBvcnQgZnVuY3Rpb24geWVzdGVyZGF5RXZlbmluZyhyZWZlcmVuY2U6IFJlZmVyZW5jZVdpdGhUaW1lem9uZSwgaW1wbHlIb3VyID0gMjApOiBQYXJzaW5nQ29tcG9uZW50cyB7XG4gICAgbGV0IHRhcmdldERhdGUgPSBkYXlqcyhyZWZlcmVuY2UuZ2V0RGF0ZVdpdGhBZGp1c3RlZFRpbWV6b25lKCkpO1xuICAgIGNvbnN0IGNvbXBvbmVudCA9IG5ldyBQYXJzaW5nQ29tcG9uZW50cyhyZWZlcmVuY2UsIHt9KTtcbiAgICB0YXJnZXREYXRlID0gdGFyZ2V0RGF0ZS5hZGQoLTEsIFwiZGF5XCIpO1xuICAgIGFzc2lnblNpbWlsYXJEYXRlKGNvbXBvbmVudCwgdGFyZ2V0RGF0ZSk7XG4gICAgY29tcG9uZW50LmltcGx5KFwiaG91clwiLCBpbXBseUhvdXIpO1xuICAgIGNvbXBvbmVudC5pbXBseShcIm1lcmlkaWVtXCIsIE1lcmlkaWVtLlBNKTtcbiAgICBjb21wb25lbnQuYWRkVGFnKFwiY2FzdWFsUmVmZXJlbmNlL3llc3RlcmRheVwiKTtcbiAgICBjb21wb25lbnQuYWRkVGFnKFwiY2FzdWFsUmVmZXJlbmNlL2V2ZW5pbmdcIik7XG4gICAgcmV0dXJuIGNvbXBvbmVudDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG1pZG5pZ2h0KHJlZmVyZW5jZTogUmVmZXJlbmNlV2l0aFRpbWV6b25lKTogUGFyc2luZ0NvbXBvbmVudHMge1xuICAgIGNvbnN0IGNvbXBvbmVudCA9IG5ldyBQYXJzaW5nQ29tcG9uZW50cyhyZWZlcmVuY2UsIHt9KTtcbiAgICBjb25zdCB0YXJnZXREYXRlID0gZGF5anMocmVmZXJlbmNlLmdldERhdGVXaXRoQWRqdXN0ZWRUaW1lem9uZSgpKTtcbiAgICBpZiAodGFyZ2V0RGF0ZS5ob3VyKCkgPiAyKSB7XG4gICAgICAgIC8vIFVubGVzcyBpdCdzIHZlcnkgZWFybHkgbW9ybmluZyAoMH4yQU0pLCB3ZSBhc3N1bWUgdGhlIG1pZG5pZ2h0IGlzIHRoZSBjb21pbmcgbWlkbmlnaHQuXG4gICAgICAgIC8vIFRodXMsIGluY3JlYXNpbmcgdGhlIGRheSBieSAxLlxuICAgICAgICBpbXBseVRoZU5leHREYXkoY29tcG9uZW50LCB0YXJnZXREYXRlKTtcbiAgICB9XG4gICAgY29tcG9uZW50LmFzc2lnbihcImhvdXJcIiwgMCk7XG4gICAgY29tcG9uZW50LmltcGx5KFwibWludXRlXCIsIDApO1xuICAgIGNvbXBvbmVudC5pbXBseShcInNlY29uZFwiLCAwKTtcbiAgICBjb21wb25lbnQuaW1wbHkoXCJtaWxsaXNlY29uZFwiLCAwKTtcbiAgICBjb21wb25lbnQuYWRkVGFnKFwiY2FzdWFsUmVmZXJlbmNlL21pZG5pZ2h0XCIpO1xuICAgIHJldHVybiBjb21wb25lbnQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBtb3JuaW5nKHJlZmVyZW5jZTogUmVmZXJlbmNlV2l0aFRpbWV6b25lLCBpbXBseUhvdXIgPSA2KTogUGFyc2luZ0NvbXBvbmVudHMge1xuICAgIGNvbnN0IGNvbXBvbmVudCA9IG5ldyBQYXJzaW5nQ29tcG9uZW50cyhyZWZlcmVuY2UsIHt9KTtcbiAgICBjb21wb25lbnQuaW1wbHkoXCJtZXJpZGllbVwiLCBNZXJpZGllbS5BTSk7XG4gICAgY29tcG9uZW50LmltcGx5KFwiaG91clwiLCBpbXBseUhvdXIpO1xuICAgIGNvbXBvbmVudC5pbXBseShcIm1pbnV0ZVwiLCAwKTtcbiAgICBjb21wb25lbnQuaW1wbHkoXCJzZWNvbmRcIiwgMCk7XG4gICAgY29tcG9uZW50LmltcGx5KFwibWlsbGlzZWNvbmRcIiwgMCk7XG4gICAgY29tcG9uZW50LmFkZFRhZyhcImNhc3VhbFJlZmVyZW5jZS9tb3JuaW5nXCIpO1xuICAgIHJldHVybiBjb21wb25lbnQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhZnRlcm5vb24ocmVmZXJlbmNlOiBSZWZlcmVuY2VXaXRoVGltZXpvbmUsIGltcGx5SG91ciA9IDE1KTogUGFyc2luZ0NvbXBvbmVudHMge1xuICAgIGNvbnN0IGNvbXBvbmVudCA9IG5ldyBQYXJzaW5nQ29tcG9uZW50cyhyZWZlcmVuY2UsIHt9KTtcbiAgICBjb21wb25lbnQuaW1wbHkoXCJtZXJpZGllbVwiLCBNZXJpZGllbS5QTSk7XG4gICAgY29tcG9uZW50LmltcGx5KFwiaG91clwiLCBpbXBseUhvdXIpO1xuICAgIGNvbXBvbmVudC5pbXBseShcIm1pbnV0ZVwiLCAwKTtcbiAgICBjb21wb25lbnQuaW1wbHkoXCJzZWNvbmRcIiwgMCk7XG4gICAgY29tcG9uZW50LmltcGx5KFwibWlsbGlzZWNvbmRcIiwgMCk7XG4gICAgY29tcG9uZW50LmFkZFRhZyhcImNhc3VhbFJlZmVyZW5jZS9hZnRlcm5vb25cIik7XG4gICAgcmV0dXJuIGNvbXBvbmVudDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG5vb24ocmVmZXJlbmNlOiBSZWZlcmVuY2VXaXRoVGltZXpvbmUpOiBQYXJzaW5nQ29tcG9uZW50cyB7XG4gICAgY29uc3QgY29tcG9uZW50ID0gbmV3IFBhcnNpbmdDb21wb25lbnRzKHJlZmVyZW5jZSwge30pO1xuICAgIGNvbXBvbmVudC5pbXBseShcIm1lcmlkaWVtXCIsIE1lcmlkaWVtLkFNKTtcbiAgICBjb21wb25lbnQuYXNzaWduKFwiaG91clwiLCAxMik7XG4gICAgY29tcG9uZW50LmltcGx5KFwibWludXRlXCIsIDApO1xuICAgIGNvbXBvbmVudC5pbXBseShcInNlY29uZFwiLCAwKTtcbiAgICBjb21wb25lbnQuaW1wbHkoXCJtaWxsaXNlY29uZFwiLCAwKTtcbiAgICBjb21wb25lbnQuYWRkVGFnKFwiY2FzdWFsUmVmZXJlbmNlL25vb25cIik7XG4gICAgcmV0dXJuIGNvbXBvbmVudDtcbn1cbiIsICJpbXBvcnQgeyBQYXJzaW5nQ29udGV4dCB9IGZyb20gXCIuLi8uLi8uLi9jaHJvbm9cIjtcbmltcG9ydCB7IEFic3RyYWN0UGFyc2VyV2l0aFdvcmRCb3VuZGFyeUNoZWNraW5nIH0gZnJvbSBcIi4uLy4uLy4uL2NvbW1vbi9wYXJzZXJzL0Fic3RyYWN0UGFyc2VyV2l0aFdvcmRCb3VuZGFyeVwiO1xuaW1wb3J0ICogYXMgY2FzdWFsUmVmZXJlbmNlcyBmcm9tIFwiLi4vLi4vLi4vY29tbW9uL2Nhc3VhbFJlZmVyZW5jZXNcIjtcblxuY29uc3QgUEFUVEVSTiA9IC8oPzp0aGlzKT9cXHN7MCwzfShtb3JuaW5nfGFmdGVybm9vbnxldmVuaW5nfG5pZ2h0fG1pZG5pZ2h0fG1pZGRheXxub29uKSg/PVxcV3wkKS9pO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBFTkNhc3VhbFRpbWVQYXJzZXIgZXh0ZW5kcyBBYnN0cmFjdFBhcnNlcldpdGhXb3JkQm91bmRhcnlDaGVja2luZyB7XG4gICAgaW5uZXJQYXR0ZXJuKCkge1xuICAgICAgICByZXR1cm4gUEFUVEVSTjtcbiAgICB9XG4gICAgaW5uZXJFeHRyYWN0KGNvbnRleHQ6IFBhcnNpbmdDb250ZXh0LCBtYXRjaDogUmVnRXhwTWF0Y2hBcnJheSkge1xuICAgICAgICBsZXQgY29tcG9uZW50ID0gbnVsbDtcbiAgICAgICAgc3dpdGNoIChtYXRjaFsxXS50b0xvd2VyQ2FzZSgpKSB7XG4gICAgICAgICAgICBjYXNlIFwiYWZ0ZXJub29uXCI6XG4gICAgICAgICAgICAgICAgY29tcG9uZW50ID0gY2FzdWFsUmVmZXJlbmNlcy5hZnRlcm5vb24oY29udGV4dC5yZWZlcmVuY2UpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcImV2ZW5pbmdcIjpcbiAgICAgICAgICAgIGNhc2UgXCJuaWdodFwiOlxuICAgICAgICAgICAgICAgIGNvbXBvbmVudCA9IGNhc3VhbFJlZmVyZW5jZXMuZXZlbmluZyhjb250ZXh0LnJlZmVyZW5jZSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwibWlkbmlnaHRcIjpcbiAgICAgICAgICAgICAgICBjb21wb25lbnQgPSBjYXN1YWxSZWZlcmVuY2VzLm1pZG5pZ2h0KGNvbnRleHQucmVmZXJlbmNlKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCJtb3JuaW5nXCI6XG4gICAgICAgICAgICAgICAgY29tcG9uZW50ID0gY2FzdWFsUmVmZXJlbmNlcy5tb3JuaW5nKGNvbnRleHQucmVmZXJlbmNlKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCJub29uXCI6XG4gICAgICAgICAgICBjYXNlIFwibWlkZGF5XCI6XG4gICAgICAgICAgICAgICAgY29tcG9uZW50ID0gY2FzdWFsUmVmZXJlbmNlcy5ub29uKGNvbnRleHQucmVmZXJlbmNlKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgICBpZiAoY29tcG9uZW50KSB7XG4gICAgICAgICAgICBjb21wb25lbnQuYWRkVGFnKFwicGFyc2VyL0VOQ2FzdWFsVGltZVBhcnNlclwiKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gY29tcG9uZW50O1xuICAgIH1cbn1cbiIsICJpbXBvcnQgeyBPcFVuaXRUeXBlLCBRVW5pdFR5cGUgfSBmcm9tIFwiZGF5anNcIjtcbmltcG9ydCB7IFBhcnNpbmdDb21wb25lbnRzIH0gZnJvbSBcIi4uL3Jlc3VsdHNcIjtcblxuLyoqXG4gKiBAZGVwcmVjYXRlZCBVc2UgYGNhbGN1bGF0aW9uLmR1cmF0aW9uLkR1cmF0aW9uYC5cbiAqL1xuZXhwb3J0IHR5cGUgVGltZVVuaXRzID0geyBbYyBpbiBPcFVuaXRUeXBlIHwgUVVuaXRUeXBlXT86IG51bWJlciB9O1xuXG4vKipcbiAqIEBkZXByZWNhdGVkIFVzZSBgY2FsY3VsYXRpb24uZHVyYXRpb24uKmAuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiByZXZlcnNlVGltZVVuaXRzKHRpbWVVbml0czogVGltZVVuaXRzKTogVGltZVVuaXRzIHtcbiAgICBjb25zdCByZXZlcnNlZCA9IHt9O1xuICAgIGZvciAoY29uc3Qga2V5IGluIHRpbWVVbml0cykge1xuICAgICAgICAvLyBub2luc3BlY3Rpb24gSlNVbmZpbHRlcmVkRm9ySW5Mb29wXG4gICAgICAgIHJldmVyc2VkW2tleV0gPSAtdGltZVVuaXRzW2tleV07XG4gICAgfVxuXG4gICAgcmV0dXJuIHJldmVyc2VkIGFzIFRpbWVVbml0cztcbn1cblxuLyoqXG4gKiBAZGVwcmVjYXRlZCBVc2UgYGNhbGN1bGF0aW9uLmR1cmF0aW9uLipgLlxuICovXG5leHBvcnQgZnVuY3Rpb24gYWRkSW1wbGllZFRpbWVVbml0cyhjb21wb25lbnRzOiBQYXJzaW5nQ29tcG9uZW50cywgdGltZVVuaXRzOiBUaW1lVW5pdHMpOiBQYXJzaW5nQ29tcG9uZW50cyB7XG4gICAgY29uc3Qgb3V0cHV0ID0gY29tcG9uZW50cy5jbG9uZSgpO1xuXG4gICAgbGV0IGRhdGUgPSBjb21wb25lbnRzLmRheWpzKCk7XG4gICAgZm9yIChjb25zdCBrZXkgaW4gdGltZVVuaXRzKSB7XG4gICAgICAgIC8vIG5vaW5zcGVjdGlvbiBKU1VuZmlsdGVyZWRGb3JJbkxvb3AsVHlwZVNjcmlwdFZhbGlkYXRlVHlwZXNcbiAgICAgICAgZGF0ZSA9IGRhdGUuYWRkKHRpbWVVbml0c1trZXldLCBrZXkgYXMgUVVuaXRUeXBlKTtcbiAgICB9XG5cbiAgICBpZiAoXCJkYXlcIiBpbiB0aW1lVW5pdHMgfHwgXCJkXCIgaW4gdGltZVVuaXRzIHx8IFwid2Vla1wiIGluIHRpbWVVbml0cyB8fCBcIm1vbnRoXCIgaW4gdGltZVVuaXRzIHx8IFwieWVhclwiIGluIHRpbWVVbml0cykge1xuICAgICAgICBvdXRwdXQuaW1wbHkoXCJkYXlcIiwgZGF0ZS5kYXRlKCkpO1xuICAgICAgICBvdXRwdXQuaW1wbHkoXCJtb250aFwiLCBkYXRlLm1vbnRoKCkgKyAxKTtcbiAgICAgICAgb3V0cHV0LmltcGx5KFwieWVhclwiLCBkYXRlLnllYXIoKSk7XG4gICAgfVxuXG4gICAgaWYgKFwic2Vjb25kXCIgaW4gdGltZVVuaXRzIHx8IFwibWludXRlXCIgaW4gdGltZVVuaXRzIHx8IFwiaG91clwiIGluIHRpbWVVbml0cykge1xuICAgICAgICBvdXRwdXQuaW1wbHkoXCJzZWNvbmRcIiwgZGF0ZS5zZWNvbmQoKSk7XG4gICAgICAgIG91dHB1dC5pbXBseShcIm1pbnV0ZVwiLCBkYXRlLm1pbnV0ZSgpKTtcbiAgICAgICAgb3V0cHV0LmltcGx5KFwiaG91clwiLCBkYXRlLmhvdXIoKSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIG91dHB1dDtcbn1cbiIsICJpbXBvcnQgeyBXZWVrZGF5IH0gZnJvbSBcIi4uL3R5cGVzXCI7XG5pbXBvcnQgeyBQYXJzaW5nQ29tcG9uZW50cywgUmVmZXJlbmNlV2l0aFRpbWV6b25lIH0gZnJvbSBcIi4uL3Jlc3VsdHNcIjtcbmltcG9ydCB7IGFkZEltcGxpZWRUaW1lVW5pdHMgfSBmcm9tIFwiLi4vdXRpbHMvdGltZXVuaXRzXCI7XG5cbi8qKlxuICogUmV0dXJucyB0aGUgcGFyc2luZyBjb21wb25lbnRzIGF0IHRoZSB3ZWVrZGF5IChjb25zaWRlcmluZyB0aGUgbW9kaWZpZXIpLiBUaGUgdGltZSBhbmQgdGltZXpvbmUgaXMgYXNzdW1lIHRvIGJlXG4gKiBzaW1pbGFyIHRvIHRoZSByZWZlcmVuY2UuXG4gKiBAcGFyYW0gcmVmZXJlbmNlXG4gKiBAcGFyYW0gd2Vla2RheVxuICogQHBhcmFtIG1vZGlmaWVyIFwidGhpc1wiLCBcIm5leHRcIiwgXCJsYXN0XCIgbW9kaWZpZXIgd29yZC4gSWYgZW1wdHksIHJldHVybnMgdGhlIHdlZWtkYXkgY2xvc2VzdCB0byB0aGUgYHJlZkRhdGVgLlxuICovXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlUGFyc2luZ0NvbXBvbmVudHNBdFdlZWtkYXkoXG4gICAgcmVmZXJlbmNlOiBSZWZlcmVuY2VXaXRoVGltZXpvbmUsXG4gICAgd2Vla2RheTogV2Vla2RheSxcbiAgICBtb2RpZmllcj86IFwidGhpc1wiIHwgXCJuZXh0XCIgfCBcImxhc3RcIlxuKTogUGFyc2luZ0NvbXBvbmVudHMge1xuICAgIGNvbnN0IHJlZkRhdGUgPSByZWZlcmVuY2UuZ2V0RGF0ZVdpdGhBZGp1c3RlZFRpbWV6b25lKCk7XG4gICAgY29uc3QgZGF5c1RvV2Vla2RheSA9IGdldERheXNUb1dlZWtkYXkocmVmRGF0ZSwgd2Vla2RheSwgbW9kaWZpZXIpO1xuXG4gICAgbGV0IGNvbXBvbmVudHMgPSBuZXcgUGFyc2luZ0NvbXBvbmVudHMocmVmZXJlbmNlKTtcbiAgICBjb21wb25lbnRzID0gYWRkSW1wbGllZFRpbWVVbml0cyhjb21wb25lbnRzLCB7IFwiZGF5XCI6IGRheXNUb1dlZWtkYXkgfSk7XG4gICAgY29tcG9uZW50cy5hc3NpZ24oXCJ3ZWVrZGF5XCIsIHdlZWtkYXkpO1xuXG4gICAgcmV0dXJuIGNvbXBvbmVudHM7XG59XG5cbi8qKlxuICogUmV0dXJucyBudW1iZXIgb2YgZGF5cyBmcm9tIHJlZkRhdGUgdG8gdGhlIHdlZWtkYXkuIFRoZSByZWZEYXRlIGRhdGUgYW5kIHRpbWV6b25lIGluZm9ybWF0aW9uIGlzIHVzZWQuXG4gKiBAcGFyYW0gcmVmRGF0ZVxuICogQHBhcmFtIHdlZWtkYXlcbiAqIEBwYXJhbSBtb2RpZmllciBcInRoaXNcIiwgXCJuZXh0XCIsIFwibGFzdFwiIG1vZGlmaWVyIHdvcmQuIElmIGVtcHR5LCByZXR1cm5zIHRoZSB3ZWVrZGF5IGNsb3Nlc3QgdG8gdGhlIGByZWZEYXRlYC5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdldERheXNUb1dlZWtkYXkocmVmRGF0ZTogRGF0ZSwgd2Vla2RheTogV2Vla2RheSwgbW9kaWZpZXI/OiBcInRoaXNcIiB8IFwibmV4dFwiIHwgXCJsYXN0XCIpOiBudW1iZXIge1xuICAgIGNvbnN0IHJlZldlZWtkYXkgPSByZWZEYXRlLmdldERheSgpIGFzIFdlZWtkYXk7XG4gICAgc3dpdGNoIChtb2RpZmllcikge1xuICAgICAgICBjYXNlIFwidGhpc1wiOlxuICAgICAgICAgICAgcmV0dXJuIGdldERheXNGb3J3YXJkVG9XZWVrZGF5KHJlZkRhdGUsIHdlZWtkYXkpO1xuICAgICAgICBjYXNlIFwibGFzdFwiOlxuICAgICAgICAgICAgcmV0dXJuIGdldEJhY2t3YXJkRGF5c1RvV2Vla2RheShyZWZEYXRlLCB3ZWVrZGF5KTtcbiAgICAgICAgY2FzZSBcIm5leHRcIjpcbiAgICAgICAgICAgIC8vIEZyb20gU3VuZGF5LCB0aGUgbmV4dCBTdW5kYXkgaXMgNyBkYXlzIGxhdGVyLlxuICAgICAgICAgICAgLy8gT3RoZXJ3aXNlLCBuZXh0IE1vbiBpcyAxIGRheXMgbGF0ZXIsIG5leHQgVHVlcyBpcyAyIGRheXMgbGF0ZXIsIGFuZCBzbyBvbi4uLiwgKHJldHVybiBlbnVtIHZhbHVlKVxuICAgICAgICAgICAgaWYgKHJlZldlZWtkYXkgPT0gV2Vla2RheS5TVU5EQVkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gd2Vla2RheSA9PSBXZWVrZGF5LlNVTkRBWSA/IDcgOiB3ZWVrZGF5O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gRnJvbSBTYXR1cmRheSwgdGhlIG5leHQgU2F0dXJkYXkgaXMgNyBkYXlzIGxhdGVyLCB0aGUgbmV4dCBTdW5kYXkgaXMgOC1kYXlzIGxhdGVyLlxuICAgICAgICAgICAgLy8gT3RoZXJ3aXNlLCBuZXh0IE1vbiBpcyAoMSArIDEpIGRheXMgbGF0ZXIsIG5leHQgVHVlcyBpcyAoMSArIDIpIGRheXMgbGF0ZXIsIGFuZCBzbyBvbi4uLixcbiAgICAgICAgICAgIC8vIChyZXR1cm4sIDIgKyBbZW51bSB2YWx1ZV0gZGF5cylcbiAgICAgICAgICAgIGlmIChyZWZXZWVrZGF5ID09IFdlZWtkYXkuU0FUVVJEQVkpIHtcbiAgICAgICAgICAgICAgICBpZiAod2Vla2RheSA9PSBXZWVrZGF5LlNBVFVSREFZKSByZXR1cm4gNztcbiAgICAgICAgICAgICAgICBpZiAod2Vla2RheSA9PSBXZWVrZGF5LlNVTkRBWSkgcmV0dXJuIDg7XG4gICAgICAgICAgICAgICAgcmV0dXJuIDEgKyB3ZWVrZGF5O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gRnJvbSB3ZWVrZGF5cywgbmV4dCBNb24gaXMgdGhlIGZvbGxvd2luZyB3ZWVrJ3MgTW9uLCBuZXh0IFR1ZXMgdGhlIGZvbGxvd2luZyB3ZWVrJ3MgVHVlcywgYW5kIHNvIG9uLi4uXG4gICAgICAgICAgICAvLyBJZiB0aGUgd2VlaydzIHdlZWtkYXkgYWxyZWFkeSBwYXNzZWQgKHdlZWtkYXkgPCByZWZXZWVrZGF5KSwgd2Ugc2ltcGx5IGNvdW50IGZvcndhcmQgdG8gbmV4dCB3ZWVrXG4gICAgICAgICAgICAvLyAoc2ltaWxhciB0byAndGhpcycpLiBPdGhlcndpc2UsIGNvdW50IGZvcndhcmQgdG8gdGhpcyB3ZWVrLCB0aGVuIGFkZCBhbm90aGVyIDcgZGF5cy5cbiAgICAgICAgICAgIGlmICh3ZWVrZGF5IDwgcmVmV2Vla2RheSAmJiB3ZWVrZGF5ICE9IFdlZWtkYXkuU1VOREFZKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGdldERheXNGb3J3YXJkVG9XZWVrZGF5KHJlZkRhdGUsIHdlZWtkYXkpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZ2V0RGF5c0ZvcndhcmRUb1dlZWtkYXkocmVmRGF0ZSwgd2Vla2RheSkgKyA3O1xuICAgICAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gZ2V0RGF5c1RvV2Vla2RheUNsb3Nlc3QocmVmRGF0ZSwgd2Vla2RheSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXREYXlzVG9XZWVrZGF5Q2xvc2VzdChyZWZEYXRlOiBEYXRlLCB3ZWVrZGF5OiBXZWVrZGF5KTogbnVtYmVyIHtcbiAgICBjb25zdCBiYWNrd2FyZCA9IGdldEJhY2t3YXJkRGF5c1RvV2Vla2RheShyZWZEYXRlLCB3ZWVrZGF5KTtcbiAgICBjb25zdCBmb3J3YXJkID0gZ2V0RGF5c0ZvcndhcmRUb1dlZWtkYXkocmVmRGF0ZSwgd2Vla2RheSk7XG5cbiAgICByZXR1cm4gZm9yd2FyZCA8IC1iYWNrd2FyZCA/IGZvcndhcmQgOiBiYWNrd2FyZDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldERheXNGb3J3YXJkVG9XZWVrZGF5KHJlZkRhdGU6IERhdGUsIHdlZWtkYXk6IFdlZWtkYXkpOiBudW1iZXIge1xuICAgIGNvbnN0IHJlZldlZWtkYXkgPSByZWZEYXRlLmdldERheSgpO1xuICAgIGxldCBmb3J3YXJkQ291bnQgPSB3ZWVrZGF5IC0gcmVmV2Vla2RheTtcbiAgICBpZiAoZm9yd2FyZENvdW50IDwgMCkge1xuICAgICAgICBmb3J3YXJkQ291bnQgKz0gNztcbiAgICB9XG4gICAgcmV0dXJuIGZvcndhcmRDb3VudDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldEJhY2t3YXJkRGF5c1RvV2Vla2RheShyZWZEYXRlOiBEYXRlLCB3ZWVrZGF5OiBXZWVrZGF5KTogbnVtYmVyIHtcbiAgICBjb25zdCByZWZXZWVrZGF5ID0gcmVmRGF0ZS5nZXREYXkoKTtcbiAgICBsZXQgYmFja3dhcmRDb3VudCA9IHdlZWtkYXkgLSByZWZXZWVrZGF5O1xuICAgIGlmIChiYWNrd2FyZENvdW50ID49IDApIHtcbiAgICAgICAgYmFja3dhcmRDb3VudCAtPSA3O1xuICAgIH1cbiAgICByZXR1cm4gYmFja3dhcmRDb3VudDtcbn1cbiIsICJpbXBvcnQgeyBQYXJzaW5nQ29udGV4dCB9IGZyb20gXCIuLi8uLi8uLi9jaHJvbm9cIjtcbmltcG9ydCB7IFBhcnNpbmdDb21wb25lbnRzIH0gZnJvbSBcIi4uLy4uLy4uL3Jlc3VsdHNcIjtcbmltcG9ydCB7IFdFRUtEQVlfRElDVElPTkFSWSB9IGZyb20gXCIuLi9jb25zdGFudHNcIjtcbmltcG9ydCB7IG1hdGNoQW55UGF0dGVybiB9IGZyb20gXCIuLi8uLi8uLi91dGlscy9wYXR0ZXJuXCI7XG5pbXBvcnQgeyBBYnN0cmFjdFBhcnNlcldpdGhXb3JkQm91bmRhcnlDaGVja2luZyB9IGZyb20gXCIuLi8uLi8uLi9jb21tb24vcGFyc2Vycy9BYnN0cmFjdFBhcnNlcldpdGhXb3JkQm91bmRhcnlcIjtcbmltcG9ydCB7IGNyZWF0ZVBhcnNpbmdDb21wb25lbnRzQXRXZWVrZGF5IH0gZnJvbSBcIi4uLy4uLy4uL2NhbGN1bGF0aW9uL3dlZWtkYXlzXCI7XG5pbXBvcnQgeyBXZWVrZGF5IH0gZnJvbSBcIi4uLy4uLy4uL3R5cGVzXCI7XG5cbmNvbnN0IFBBVFRFUk4gPSBuZXcgUmVnRXhwKFxuICAgIFwiKD86KD86XFxcXCx8XFxcXCh8XFxcXFx1RkYwOClcXFxccyopP1wiICtcbiAgICAgICAgXCIoPzpvblxcXFxzKj8pP1wiICtcbiAgICAgICAgXCIoPzoodGhpc3xsYXN0fHBhc3R8bmV4dClcXFxccyopP1wiICtcbiAgICAgICAgYCgke21hdGNoQW55UGF0dGVybihXRUVLREFZX0RJQ1RJT05BUlkpfXx3ZWVrZW5kfHdlZWtkYXkpYCArXG4gICAgICAgIFwiKD86XFxcXHMqKD86XFxcXCx8XFxcXCl8XFxcXFx1RkYwOSkpP1wiICtcbiAgICAgICAgXCIoPzpcXFxccyoodGhpc3xsYXN0fHBhc3R8bmV4dClcXFxccyp3ZWVrKT9cIiArXG4gICAgICAgIFwiKD89XFxcXFd8JClcIixcbiAgICBcImlcIlxuKTtcblxuY29uc3QgUFJFRklYX0dST1VQID0gMTtcbmNvbnN0IFdFRUtEQVlfR1JPVVAgPSAyO1xuY29uc3QgUE9TVEZJWF9HUk9VUCA9IDM7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEVOV2Vla2RheVBhcnNlciBleHRlbmRzIEFic3RyYWN0UGFyc2VyV2l0aFdvcmRCb3VuZGFyeUNoZWNraW5nIHtcbiAgICBpbm5lclBhdHRlcm4oKTogUmVnRXhwIHtcbiAgICAgICAgcmV0dXJuIFBBVFRFUk47XG4gICAgfVxuXG4gICAgaW5uZXJFeHRyYWN0KGNvbnRleHQ6IFBhcnNpbmdDb250ZXh0LCBtYXRjaDogUmVnRXhwTWF0Y2hBcnJheSk6IFBhcnNpbmdDb21wb25lbnRzIHwgbnVsbCB7XG4gICAgICAgIGNvbnN0IHByZWZpeCA9IG1hdGNoW1BSRUZJWF9HUk9VUF07XG4gICAgICAgIGNvbnN0IHBvc3RmaXggPSBtYXRjaFtQT1NURklYX0dST1VQXTtcbiAgICAgICAgbGV0IG1vZGlmaWVyV29yZCA9IHByZWZpeCB8fCBwb3N0Zml4O1xuICAgICAgICBtb2RpZmllcldvcmQgPSBtb2RpZmllcldvcmQgfHwgXCJcIjtcbiAgICAgICAgbW9kaWZpZXJXb3JkID0gbW9kaWZpZXJXb3JkLnRvTG93ZXJDYXNlKCk7XG5cbiAgICAgICAgbGV0IG1vZGlmaWVyID0gbnVsbDtcbiAgICAgICAgaWYgKG1vZGlmaWVyV29yZCA9PSBcImxhc3RcIiB8fCBtb2RpZmllcldvcmQgPT0gXCJwYXN0XCIpIHtcbiAgICAgICAgICAgIG1vZGlmaWVyID0gXCJsYXN0XCI7XG4gICAgICAgIH0gZWxzZSBpZiAobW9kaWZpZXJXb3JkID09IFwibmV4dFwiKSB7XG4gICAgICAgICAgICBtb2RpZmllciA9IFwibmV4dFwiO1xuICAgICAgICB9IGVsc2UgaWYgKG1vZGlmaWVyV29yZCA9PSBcInRoaXNcIikge1xuICAgICAgICAgICAgbW9kaWZpZXIgPSBcInRoaXNcIjtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHdlZWtkYXlfd29yZCA9IG1hdGNoW1dFRUtEQVlfR1JPVVBdLnRvTG93ZXJDYXNlKCk7XG4gICAgICAgIGxldCB3ZWVrZGF5O1xuICAgICAgICBpZiAoV0VFS0RBWV9ESUNUSU9OQVJZW3dlZWtkYXlfd29yZF0gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgd2Vla2RheSA9IFdFRUtEQVlfRElDVElPTkFSWVt3ZWVrZGF5X3dvcmRdO1xuICAgICAgICB9IGVsc2UgaWYgKHdlZWtkYXlfd29yZCA9PSBcIndlZWtlbmRcIikge1xuICAgICAgICAgICAgLy8gVGhpcyBkZXBlbmRzIG9uIHdoYXQgZGF5cyBhcmUgd2Vla2VuZCBzZXR0aW5nLCBidXQgdHlwaWNhbGx5OlxuICAgICAgICAgICAgLy8gJ1RoaXMvbmV4dCB3ZWVrZW5kJyBtZWFucyB0aGUgY29taW5nIFNhdHVyZGF5LCAnbGFzdCB3ZWVrZW5kJyBtZWFucyBsYXN0IFN1bmRheS5cbiAgICAgICAgICAgIHdlZWtkYXkgPSBtb2RpZmllciA9PSBcImxhc3RcIiA/IFdlZWtkYXkuU1VOREFZIDogV2Vla2RheS5TQVRVUkRBWTtcbiAgICAgICAgfSBlbHNlIGlmICh3ZWVrZGF5X3dvcmQgPT0gXCJ3ZWVrZGF5XCIpIHtcbiAgICAgICAgICAgIC8vIEluIEVuZ2xpc2gsIHRoZSBcIndlZWtkYXlcIiBtZWFucyBhbnkgZGF5IG9mIHRoZSB3ZWVrIGV4Y2VwdCB3ZWVrZW5kLlxuICAgICAgICAgICAgLy8gVGhpcyBhbHNvIGRlcGVuZHMgb24gd2hhdCBkYXlzIGFyZSB3ZWVrZW5kIHNldHRpbmcsIGJ1dCB0eXBpY2FsbHk6XG4gICAgICAgICAgICAvLyAtIE9uIHdlZWtlbmQgcmVmLCB0aGlzIG1lYW5zIHRoZSBjb21pbmcgTW9uZGF5IG9yIGxhc3QgRnJpZGF5LlxuICAgICAgICAgICAgLy8gLSBPbiB3ZWVrZGF5IHJlZiwgdGhpcyBtZWFucyB0aGUgbmV4dC9sYXN0IHdvcmtpbmcgZGF5LlxuICAgICAgICAgICAgY29uc3QgcmVmV2Vla2RheSA9IGNvbnRleHQucmVmZXJlbmNlLmdldERhdGVXaXRoQWRqdXN0ZWRUaW1lem9uZSgpLmdldERheSgpO1xuICAgICAgICAgICAgaWYgKHJlZldlZWtkYXkgPT0gV2Vla2RheS5TVU5EQVkgfHwgcmVmV2Vla2RheSA9PSBXZWVrZGF5LlNBVFVSREFZKSB7XG4gICAgICAgICAgICAgICAgd2Vla2RheSA9IG1vZGlmaWVyID09IFwibGFzdFwiID8gV2Vla2RheS5GUklEQVkgOiBXZWVrZGF5Lk1PTkRBWTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgd2Vla2RheSA9IHJlZldlZWtkYXkgLSAxO1xuICAgICAgICAgICAgICAgIHdlZWtkYXkgPSBtb2RpZmllciA9PSBcImxhc3RcIiA/IHdlZWtkYXkgLSAxIDogd2Vla2RheSArIDE7XG4gICAgICAgICAgICAgICAgd2Vla2RheSA9ICh3ZWVrZGF5ICUgNSkgKyAxO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gY3JlYXRlUGFyc2luZ0NvbXBvbmVudHNBdFdlZWtkYXkoY29udGV4dC5yZWZlcmVuY2UsIHdlZWtkYXksIG1vZGlmaWVyKTtcbiAgICB9XG59XG4iLCAiaW1wb3J0IHsgVElNRV9VTklUX0RJQ1RJT05BUlkgfSBmcm9tIFwiLi4vY29uc3RhbnRzXCI7XG5pbXBvcnQgeyBQYXJzaW5nQ29udGV4dCB9IGZyb20gXCIuLi8uLi8uLi9jaHJvbm9cIjtcbmltcG9ydCB7IFBhcnNpbmdDb21wb25lbnRzIH0gZnJvbSBcIi4uLy4uLy4uL3Jlc3VsdHNcIjtcbmltcG9ydCBkYXlqcyBmcm9tIFwiZGF5anNcIjtcbmltcG9ydCB7IEFic3RyYWN0UGFyc2VyV2l0aFdvcmRCb3VuZGFyeUNoZWNraW5nIH0gZnJvbSBcIi4uLy4uLy4uL2NvbW1vbi9wYXJzZXJzL0Fic3RyYWN0UGFyc2VyV2l0aFdvcmRCb3VuZGFyeVwiO1xuaW1wb3J0IHsgbWF0Y2hBbnlQYXR0ZXJuIH0gZnJvbSBcIi4uLy4uLy4uL3V0aWxzL3BhdHRlcm5cIjtcblxuY29uc3QgUEFUVEVSTiA9IG5ldyBSZWdFeHAoXG4gICAgYCh0aGlzfGxhc3R8cGFzdHxuZXh0fGFmdGVyXFxcXHMqdGhpcylcXFxccyooJHttYXRjaEFueVBhdHRlcm4oVElNRV9VTklUX0RJQ1RJT05BUlkpfSkoPz1cXFxccyopYCArIFwiKD89XFxcXFd8JClcIixcbiAgICBcImlcIlxuKTtcblxuY29uc3QgTU9ESUZJRVJfV09SRF9HUk9VUCA9IDE7XG5jb25zdCBSRUxBVElWRV9XT1JEX0dST1VQID0gMjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRU5SZWxhdGl2ZURhdGVGb3JtYXRQYXJzZXIgZXh0ZW5kcyBBYnN0cmFjdFBhcnNlcldpdGhXb3JkQm91bmRhcnlDaGVja2luZyB7XG4gICAgaW5uZXJQYXR0ZXJuKCk6IFJlZ0V4cCB7XG4gICAgICAgIHJldHVybiBQQVRURVJOO1xuICAgIH1cblxuICAgIGlubmVyRXh0cmFjdChjb250ZXh0OiBQYXJzaW5nQ29udGV4dCwgbWF0Y2g6IFJlZ0V4cE1hdGNoQXJyYXkpOiBQYXJzaW5nQ29tcG9uZW50cyB7XG4gICAgICAgIGNvbnN0IG1vZGlmaWVyID0gbWF0Y2hbTU9ESUZJRVJfV09SRF9HUk9VUF0udG9Mb3dlckNhc2UoKTtcbiAgICAgICAgY29uc3QgdW5pdFdvcmQgPSBtYXRjaFtSRUxBVElWRV9XT1JEX0dST1VQXS50b0xvd2VyQ2FzZSgpO1xuICAgICAgICBjb25zdCB0aW1ldW5pdCA9IFRJTUVfVU5JVF9ESUNUSU9OQVJZW3VuaXRXb3JkXTtcblxuICAgICAgICBpZiAobW9kaWZpZXIgPT0gXCJuZXh0XCIgfHwgbW9kaWZpZXIuc3RhcnRzV2l0aChcImFmdGVyXCIpKSB7XG4gICAgICAgICAgICBjb25zdCB0aW1lVW5pdHMgPSB7fTtcbiAgICAgICAgICAgIHRpbWVVbml0c1t0aW1ldW5pdF0gPSAxO1xuICAgICAgICAgICAgcmV0dXJuIFBhcnNpbmdDb21wb25lbnRzLmNyZWF0ZVJlbGF0aXZlRnJvbVJlZmVyZW5jZShjb250ZXh0LnJlZmVyZW5jZSwgdGltZVVuaXRzKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChtb2RpZmllciA9PSBcImxhc3RcIiB8fCBtb2RpZmllciA9PSBcInBhc3RcIikge1xuICAgICAgICAgICAgY29uc3QgdGltZVVuaXRzID0ge307XG4gICAgICAgICAgICB0aW1lVW5pdHNbdGltZXVuaXRdID0gLTE7XG4gICAgICAgICAgICByZXR1cm4gUGFyc2luZ0NvbXBvbmVudHMuY3JlYXRlUmVsYXRpdmVGcm9tUmVmZXJlbmNlKGNvbnRleHQucmVmZXJlbmNlLCB0aW1lVW5pdHMpO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgY29tcG9uZW50cyA9IGNvbnRleHQuY3JlYXRlUGFyc2luZ0NvbXBvbmVudHMoKTtcbiAgICAgICAgbGV0IGRhdGUgPSBkYXlqcyhjb250ZXh0LnJlZmVyZW5jZS5pbnN0YW50KTtcblxuICAgICAgICAvLyBUaGlzIHdlZWtcbiAgICAgICAgaWYgKHVuaXRXb3JkLm1hdGNoKC93ZWVrL2kpKSB7XG4gICAgICAgICAgICBkYXRlID0gZGF0ZS5hZGQoLWRhdGUuZ2V0KFwiZFwiKSwgXCJkXCIpO1xuICAgICAgICAgICAgY29tcG9uZW50cy5pbXBseShcImRheVwiLCBkYXRlLmRhdGUoKSk7XG4gICAgICAgICAgICBjb21wb25lbnRzLmltcGx5KFwibW9udGhcIiwgZGF0ZS5tb250aCgpICsgMSk7XG4gICAgICAgICAgICBjb21wb25lbnRzLmltcGx5KFwieWVhclwiLCBkYXRlLnllYXIoKSk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBUaGlzIG1vbnRoXG4gICAgICAgIGVsc2UgaWYgKHVuaXRXb3JkLm1hdGNoKC9tb250aC9pKSkge1xuICAgICAgICAgICAgZGF0ZSA9IGRhdGUuYWRkKC1kYXRlLmRhdGUoKSArIDEsIFwiZFwiKTtcbiAgICAgICAgICAgIGNvbXBvbmVudHMuaW1wbHkoXCJkYXlcIiwgZGF0ZS5kYXRlKCkpO1xuICAgICAgICAgICAgY29tcG9uZW50cy5hc3NpZ24oXCJ5ZWFyXCIsIGRhdGUueWVhcigpKTtcbiAgICAgICAgICAgIGNvbXBvbmVudHMuYXNzaWduKFwibW9udGhcIiwgZGF0ZS5tb250aCgpICsgMSk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBUaGlzIHllYXJcbiAgICAgICAgZWxzZSBpZiAodW5pdFdvcmQubWF0Y2goL3llYXIvaSkpIHtcbiAgICAgICAgICAgIGRhdGUgPSBkYXRlLmFkZCgtZGF0ZS5kYXRlKCkgKyAxLCBcImRcIik7XG4gICAgICAgICAgICBkYXRlID0gZGF0ZS5hZGQoLWRhdGUubW9udGgoKSwgXCJtb250aFwiKTtcblxuICAgICAgICAgICAgY29tcG9uZW50cy5pbXBseShcImRheVwiLCBkYXRlLmRhdGUoKSk7XG4gICAgICAgICAgICBjb21wb25lbnRzLmltcGx5KFwibW9udGhcIiwgZGF0ZS5tb250aCgpICsgMSk7XG4gICAgICAgICAgICBjb21wb25lbnRzLmFzc2lnbihcInllYXJcIiwgZGF0ZS55ZWFyKCkpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGNvbXBvbmVudHM7XG4gICAgfVxufVxuIiwgImltcG9ydCB7IFBhcnNlciwgUGFyc2luZ0NvbnRleHQgfSBmcm9tIFwiLi4vLi4vY2hyb25vXCI7XG5pbXBvcnQgeyBQYXJzaW5nUmVzdWx0IH0gZnJvbSBcIi4uLy4uL3Jlc3VsdHNcIjtcbmltcG9ydCB7IGZpbmRNb3N0TGlrZWx5QURZZWFyLCBmaW5kWWVhckNsb3Nlc3RUb1JlZiB9IGZyb20gXCIuLi8uLi9jYWxjdWxhdGlvbi95ZWFyc1wiO1xuXG4vKipcbiAqIERhdGUgZm9ybWF0IHdpdGggc2xhc2ggXCIvXCIgKG9yIGRvdCBcIi5cIikgYmV0d2VlbiBudW1iZXJzLlxuICogRm9yIGV4YW1wbGVzOlxuICogLSA3LzEwXG4gKiAtIDcvMTIvMjAyMFxuICogLSA3LjEyLjIwMjBcbiAqL1xuY29uc3QgUEFUVEVSTiA9IG5ldyBSZWdFeHAoXG4gICAgXCIoW15cXFxcZF18XilcIiArXG4gICAgICAgIFwiKFswLTNdezAsMX1bMC05XXsxfSlbXFxcXC9cXFxcLlxcXFwtXShbMC0zXXswLDF9WzAtOV17MX0pXCIgK1xuICAgICAgICBcIig/OltcXFxcL1xcXFwuXFxcXC1dKFswLTldezR9fFswLTldezJ9KSk/XCIgK1xuICAgICAgICBcIihcXFxcV3wkKVwiLFxuICAgIFwiaVwiXG4pO1xuXG5jb25zdCBPUEVOSU5HX0dST1VQID0gMTtcbmNvbnN0IEVORElOR19HUk9VUCA9IDU7XG5cbmNvbnN0IEZJUlNUX05VTUJFUlNfR1JPVVAgPSAyO1xuY29uc3QgU0VDT05EX05VTUJFUlNfR1JPVVAgPSAzO1xuXG5jb25zdCBZRUFSX0dST1VQID0gNDtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2xhc2hEYXRlRm9ybWF0UGFyc2VyIGltcGxlbWVudHMgUGFyc2VyIHtcbiAgICBncm91cE51bWJlck1vbnRoOiBudW1iZXI7XG4gICAgZ3JvdXBOdW1iZXJEYXk6IG51bWJlcjtcblxuICAgIGNvbnN0cnVjdG9yKGxpdHRsZUVuZGlhbjogYm9vbGVhbikge1xuICAgICAgICB0aGlzLmdyb3VwTnVtYmVyTW9udGggPSBsaXR0bGVFbmRpYW4gPyBTRUNPTkRfTlVNQkVSU19HUk9VUCA6IEZJUlNUX05VTUJFUlNfR1JPVVA7XG4gICAgICAgIHRoaXMuZ3JvdXBOdW1iZXJEYXkgPSBsaXR0bGVFbmRpYW4gPyBGSVJTVF9OVU1CRVJTX0dST1VQIDogU0VDT05EX05VTUJFUlNfR1JPVVA7XG4gICAgfVxuXG4gICAgcGF0dGVybigpOiBSZWdFeHAge1xuICAgICAgICByZXR1cm4gUEFUVEVSTjtcbiAgICB9XG5cbiAgICBleHRyYWN0KGNvbnRleHQ6IFBhcnNpbmdDb250ZXh0LCBtYXRjaDogUmVnRXhwTWF0Y2hBcnJheSk6IFBhcnNpbmdSZXN1bHQge1xuICAgICAgICAvLyBCZWNhdXNlIG9mIGhvdyBwYXR0ZXJuIGlzIGV4ZWN1dGVkIG9uIHJlbWFpbmluZyB0ZXh0IGluIGBjaHJvbm8udHNgLCB0aGUgY2hhcmFjdGVyIGJlZm9yZSB0aGUgbWF0Y2ggY291bGRcbiAgICAgICAgLy8gc3RpbGwgYmUgYSBudW1iZXIgKGUuZy4gWFtYL1lZL1paXSBvciBYWFsvWVkvWlpdIG9yIFtYWC9ZWS9dWlopLiBXZSB3YW50IHRvIGNoZWNrIGFuZCBza2lwIHRoZW0uXG4gICAgICAgIGNvbnN0IGluZGV4ID0gbWF0Y2guaW5kZXggKyBtYXRjaFtPUEVOSU5HX0dST1VQXS5sZW5ndGg7XG4gICAgICAgIGNvbnN0IGluZGV4RW5kID0gbWF0Y2guaW5kZXggKyBtYXRjaFswXS5sZW5ndGggLSBtYXRjaFtFTkRJTkdfR1JPVVBdLmxlbmd0aDtcbiAgICAgICAgaWYgKGluZGV4ID4gMCkge1xuICAgICAgICAgICAgY29uc3QgdGV4dEJlZm9yZSA9IGNvbnRleHQudGV4dC5zdWJzdHJpbmcoMCwgaW5kZXgpO1xuICAgICAgICAgICAgaWYgKHRleHRCZWZvcmUubWF0Y2goXCJcXFxcZC8/JFwiKSkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAoaW5kZXhFbmQgPCBjb250ZXh0LnRleHQubGVuZ3RoKSB7XG4gICAgICAgICAgICBjb25zdCB0ZXh0QWZ0ZXIgPSBjb250ZXh0LnRleHQuc3Vic3RyaW5nKGluZGV4RW5kKTtcbiAgICAgICAgICAgIGlmICh0ZXh0QWZ0ZXIubWF0Y2goXCJeLz9cXFxcZFwiKSkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHRleHQgPSBjb250ZXh0LnRleHQuc3Vic3RyaW5nKGluZGV4LCBpbmRleEVuZCk7XG5cbiAgICAgICAgLy8gJzEuMTInLCAnMS4xMi4xMicgaXMgbW9yZSBsaWtlIGEgdmVyc2lvbiBudW1iZXJzXG4gICAgICAgIGlmICh0ZXh0Lm1hdGNoKC9eXFxkXFwuXFxkJC8pIHx8IHRleHQubWF0Y2goL15cXGRcXC5cXGR7MSwyfVxcLlxcZHsxLDJ9XFxzKiQvKSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gTU0vZGQgLT4gT0tcbiAgICAgICAgLy8gTU0uZGQgLT4gTkdcbiAgICAgICAgaWYgKCFtYXRjaFtZRUFSX0dST1VQXSAmJiB0ZXh0LmluZGV4T2YoXCIvXCIpIDwgMCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgcmVzdWx0ID0gY29udGV4dC5jcmVhdGVQYXJzaW5nUmVzdWx0KGluZGV4LCB0ZXh0KTtcbiAgICAgICAgbGV0IG1vbnRoID0gcGFyc2VJbnQobWF0Y2hbdGhpcy5ncm91cE51bWJlck1vbnRoXSk7XG4gICAgICAgIGxldCBkYXkgPSBwYXJzZUludChtYXRjaFt0aGlzLmdyb3VwTnVtYmVyRGF5XSk7XG4gICAgICAgIGlmIChtb250aCA8IDEgfHwgbW9udGggPiAxMikge1xuICAgICAgICAgICAgaWYgKG1vbnRoID4gMTIpIHtcbiAgICAgICAgICAgICAgICBpZiAoZGF5ID49IDEgJiYgZGF5IDw9IDEyICYmIG1vbnRoIDw9IDMxKSB7XG4gICAgICAgICAgICAgICAgICAgIFtkYXksIG1vbnRoXSA9IFttb250aCwgZGF5XTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZGF5IDwgMSB8fCBkYXkgPiAzMSkge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cblxuICAgICAgICByZXN1bHQuc3RhcnQuYXNzaWduKFwiZGF5XCIsIGRheSk7XG4gICAgICAgIHJlc3VsdC5zdGFydC5hc3NpZ24oXCJtb250aFwiLCBtb250aCk7XG5cbiAgICAgICAgaWYgKG1hdGNoW1lFQVJfR1JPVVBdKSB7XG4gICAgICAgICAgICBjb25zdCByYXdZZWFyTnVtYmVyID0gcGFyc2VJbnQobWF0Y2hbWUVBUl9HUk9VUF0pO1xuICAgICAgICAgICAgY29uc3QgeWVhciA9IGZpbmRNb3N0TGlrZWx5QURZZWFyKHJhd1llYXJOdW1iZXIpO1xuICAgICAgICAgICAgcmVzdWx0LnN0YXJ0LmFzc2lnbihcInllYXJcIiwgeWVhcik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb25zdCB5ZWFyID0gZmluZFllYXJDbG9zZXN0VG9SZWYoY29udGV4dC5yZWZEYXRlLCBkYXksIG1vbnRoKTtcbiAgICAgICAgICAgIHJlc3VsdC5zdGFydC5pbXBseShcInllYXJcIiwgeWVhcik7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gcmVzdWx0LmFkZFRhZyhcInBhcnNlci9TbGFzaERhdGVGb3JtYXRQYXJzZXJcIik7XG4gICAgfVxufVxuIiwgImltcG9ydCB7IFRJTUVfVU5JVFNfUEFUVEVSTiwgcGFyc2VUaW1lVW5pdHMsIFRJTUVfVU5JVFNfTk9fQUJCUl9QQVRURVJOIH0gZnJvbSBcIi4uL2NvbnN0YW50c1wiO1xuaW1wb3J0IHsgUGFyc2luZ0NvbnRleHQgfSBmcm9tIFwiLi4vLi4vLi4vY2hyb25vXCI7XG5pbXBvcnQgeyBQYXJzaW5nQ29tcG9uZW50cyB9IGZyb20gXCIuLi8uLi8uLi9yZXN1bHRzXCI7XG5pbXBvcnQgeyBBYnN0cmFjdFBhcnNlcldpdGhXb3JkQm91bmRhcnlDaGVja2luZyB9IGZyb20gXCIuLi8uLi8uLi9jb21tb24vcGFyc2Vycy9BYnN0cmFjdFBhcnNlcldpdGhXb3JkQm91bmRhcnlcIjtcbmltcG9ydCB7IHJldmVyc2VEdXJhdGlvbiB9IGZyb20gXCIuLi8uLi8uLi9jYWxjdWxhdGlvbi9kdXJhdGlvblwiO1xuXG5jb25zdCBQQVRURVJOID0gbmV3IFJlZ0V4cChgKHRoaXN8bGFzdHxwYXN0fG5leHR8YWZ0ZXJ8XFxcXCt8LSlcXFxccyooJHtUSU1FX1VOSVRTX1BBVFRFUk59KSg/PVxcXFxXfCQpYCwgXCJpXCIpO1xuY29uc3QgUEFUVEVSTl9OT19BQkJSID0gbmV3IFJlZ0V4cChcbiAgICBgKHRoaXN8bGFzdHxwYXN0fG5leHR8YWZ0ZXJ8XFxcXCt8LSlcXFxccyooJHtUSU1FX1VOSVRTX05PX0FCQlJfUEFUVEVSTn0pKD89XFxcXFd8JClgLFxuICAgIFwiaVwiXG4pO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBFTlRpbWVVbml0Q2FzdWFsUmVsYXRpdmVGb3JtYXRQYXJzZXIgZXh0ZW5kcyBBYnN0cmFjdFBhcnNlcldpdGhXb3JkQm91bmRhcnlDaGVja2luZyB7XG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBhbGxvd0FiYnJldmlhdGlvbnM6IGJvb2xlYW4gPSB0cnVlKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgfVxuXG4gICAgaW5uZXJQYXR0ZXJuKCk6IFJlZ0V4cCB7XG4gICAgICAgIHJldHVybiB0aGlzLmFsbG93QWJicmV2aWF0aW9ucyA/IFBBVFRFUk4gOiBQQVRURVJOX05PX0FCQlI7XG4gICAgfVxuXG4gICAgaW5uZXJFeHRyYWN0KGNvbnRleHQ6IFBhcnNpbmdDb250ZXh0LCBtYXRjaDogUmVnRXhwTWF0Y2hBcnJheSkge1xuICAgICAgICBjb25zdCBwcmVmaXggPSBtYXRjaFsxXS50b0xvd2VyQ2FzZSgpO1xuICAgICAgICBsZXQgZHVyYXRpb24gPSBwYXJzZVRpbWVVbml0cyhtYXRjaFsyXSk7XG4gICAgICAgIGlmICghZHVyYXRpb24pIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG4gICAgICAgIHN3aXRjaCAocHJlZml4KSB7XG4gICAgICAgICAgICBjYXNlIFwibGFzdFwiOlxuICAgICAgICAgICAgY2FzZSBcInBhc3RcIjpcbiAgICAgICAgICAgIGNhc2UgXCItXCI6XG4gICAgICAgICAgICAgICAgZHVyYXRpb24gPSByZXZlcnNlRHVyYXRpb24oZHVyYXRpb24pO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBQYXJzaW5nQ29tcG9uZW50cy5jcmVhdGVSZWxhdGl2ZUZyb21SZWZlcmVuY2UoY29udGV4dC5yZWZlcmVuY2UsIGR1cmF0aW9uKTtcbiAgICB9XG59XG4iLCAiaW1wb3J0IHsgTWVyZ2luZ1JlZmluZXIgfSBmcm9tIFwiLi4vLi4vLi4vY29tbW9uL2Fic3RyYWN0UmVmaW5lcnNcIjtcbmltcG9ydCB7IFBhcnNpbmdDb21wb25lbnRzLCBQYXJzaW5nUmVzdWx0LCBSZWZlcmVuY2VXaXRoVGltZXpvbmUgfSBmcm9tIFwiLi4vLi4vLi4vcmVzdWx0c1wiO1xuaW1wb3J0IHsgcGFyc2VUaW1lVW5pdHMgfSBmcm9tIFwiLi4vY29uc3RhbnRzXCI7XG5pbXBvcnQgeyByZXZlcnNlVGltZVVuaXRzIH0gZnJvbSBcIi4uLy4uLy4uL3V0aWxzL3RpbWV1bml0c1wiO1xuXG5mdW5jdGlvbiBJc1Bvc2l0aXZlRm9sbG93aW5nUmVmZXJlbmNlKHJlc3VsdDogUGFyc2luZ1Jlc3VsdCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiByZXN1bHQudGV4dC5tYXRjaCgvXlsrLV0vaSkgIT0gbnVsbDtcbn1cblxuZnVuY3Rpb24gSXNOZWdhdGl2ZUZvbGxvd2luZ1JlZmVyZW5jZShyZXN1bHQ6IFBhcnNpbmdSZXN1bHQpOiBib29sZWFuIHtcbiAgICByZXR1cm4gcmVzdWx0LnRleHQubWF0Y2goL14tL2kpICE9IG51bGw7XG59XG5cbi8qKlxuICogTWVyZ2VzIGEgcmVsYXRpdmUgZGF0YS90aW1lIHRoYXQgY29tZXMgYWZ0ZXIgYW4gYWJzb2x1dGUgZGF0ZS5cbiAqIC0gWzIwMjAtMDItMTNdIFsrMiB3ZWVrc11cbiAqIC0gW25leHQgdHVlc2RheV0gWysxMCBkYXlzXVxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBFTk1lcmdlUmVsYXRpdmVBZnRlckRhdGVSZWZpbmVyIGV4dGVuZHMgTWVyZ2luZ1JlZmluZXIge1xuICAgIHNob3VsZE1lcmdlUmVzdWx0cyh0ZXh0QmV0d2Vlbjogc3RyaW5nLCBjdXJyZW50UmVzdWx0OiBQYXJzaW5nUmVzdWx0LCBuZXh0UmVzdWx0OiBQYXJzaW5nUmVzdWx0KTogYm9vbGVhbiB7XG4gICAgICAgIGlmICghdGV4dEJldHdlZW4ubWF0Y2goL15cXHMqJC9pKSkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIElzUG9zaXRpdmVGb2xsb3dpbmdSZWZlcmVuY2UobmV4dFJlc3VsdCkgfHwgSXNOZWdhdGl2ZUZvbGxvd2luZ1JlZmVyZW5jZShuZXh0UmVzdWx0KTtcbiAgICB9XG5cbiAgICBtZXJnZVJlc3VsdHModGV4dEJldHdlZW46IHN0cmluZywgY3VycmVudFJlc3VsdDogUGFyc2luZ1Jlc3VsdCwgbmV4dFJlc3VsdDogUGFyc2luZ1Jlc3VsdCwgY29udGV4dCk6IFBhcnNpbmdSZXN1bHQge1xuICAgICAgICBsZXQgdGltZVVuaXRzID0gcGFyc2VUaW1lVW5pdHMobmV4dFJlc3VsdC50ZXh0KTtcbiAgICAgICAgaWYgKElzTmVnYXRpdmVGb2xsb3dpbmdSZWZlcmVuY2UobmV4dFJlc3VsdCkpIHtcbiAgICAgICAgICAgIHRpbWVVbml0cyA9IHJldmVyc2VUaW1lVW5pdHModGltZVVuaXRzKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGNvbXBvbmVudHMgPSBQYXJzaW5nQ29tcG9uZW50cy5jcmVhdGVSZWxhdGl2ZUZyb21SZWZlcmVuY2UoXG4gICAgICAgICAgICBuZXcgUmVmZXJlbmNlV2l0aFRpbWV6b25lKGN1cnJlbnRSZXN1bHQuc3RhcnQuZGF0ZSgpKSxcbiAgICAgICAgICAgIHRpbWVVbml0c1xuICAgICAgICApO1xuXG4gICAgICAgIHJldHVybiBuZXcgUGFyc2luZ1Jlc3VsdChcbiAgICAgICAgICAgIGN1cnJlbnRSZXN1bHQucmVmZXJlbmNlLFxuICAgICAgICAgICAgY3VycmVudFJlc3VsdC5pbmRleCxcbiAgICAgICAgICAgIGAke2N1cnJlbnRSZXN1bHQudGV4dH0ke3RleHRCZXR3ZWVufSR7bmV4dFJlc3VsdC50ZXh0fWAsXG4gICAgICAgICAgICBjb21wb25lbnRzXG4gICAgICAgICk7XG4gICAgfVxufVxuIiwgImltcG9ydCB7IE1lcmdpbmdSZWZpbmVyIH0gZnJvbSBcIi4uLy4uLy4uL2NvbW1vbi9hYnN0cmFjdFJlZmluZXJzXCI7XG5pbXBvcnQgeyBQYXJzaW5nQ29tcG9uZW50cywgUGFyc2luZ1Jlc3VsdCwgUmVmZXJlbmNlV2l0aFRpbWV6b25lIH0gZnJvbSBcIi4uLy4uLy4uL3Jlc3VsdHNcIjtcbmltcG9ydCB7IHBhcnNlVGltZVVuaXRzIH0gZnJvbSBcIi4uL2NvbnN0YW50c1wiO1xuaW1wb3J0IHsgcmV2ZXJzZUR1cmF0aW9uIH0gZnJvbSBcIi4uLy4uLy4uL2NhbGN1bGF0aW9uL2R1cmF0aW9uXCI7XG5cbmZ1bmN0aW9uIGhhc0ltcGxpZWRFYXJsaWVyUmVmZXJlbmNlRGF0ZShyZXN1bHQ6IFBhcnNpbmdSZXN1bHQpOiBib29sZWFuIHtcbiAgICByZXR1cm4gcmVzdWx0LnRleHQubWF0Y2goL1xccysoYmVmb3JlfGZyb20pJC9pKSAhPSBudWxsO1xufVxuXG5mdW5jdGlvbiBoYXNJbXBsaWVkTGF0ZXJSZWZlcmVuY2VEYXRlKHJlc3VsdDogUGFyc2luZ1Jlc3VsdCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiByZXN1bHQudGV4dC5tYXRjaCgvXFxzKyhhZnRlcnxzaW5jZSkkL2kpICE9IG51bGw7XG59XG5cbi8qKlxuICogTWVyZ2VzIGEgcmVsYXRpdmUgZGF0YS90aW1lIHRoYXQgZm9sbG93IGJ5IGFuIGFic29sdXRlIGRhdGUuXG4gKiAtIFsyIHdlZWtzIGJlZm9yZV0gWzIwMjAtMDItMTNdXG4gKiAtIFsyIGRheXMgYWZ0ZXJdIFtuZXh0IEZyaWRheV1cbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRU5NZXJnZVJlbGF0aXZlRm9sbG93QnlEYXRlUmVmaW5lciBleHRlbmRzIE1lcmdpbmdSZWZpbmVyIHtcbiAgICBwYXR0ZXJuQmV0d2VlbigpOiBSZWdFeHAge1xuICAgICAgICByZXR1cm4gL15cXHMqJC9pO1xuICAgIH1cblxuICAgIHNob3VsZE1lcmdlUmVzdWx0cyh0ZXh0QmV0d2Vlbjogc3RyaW5nLCBjdXJyZW50UmVzdWx0OiBQYXJzaW5nUmVzdWx0LCBuZXh0UmVzdWx0OiBQYXJzaW5nUmVzdWx0KTogYm9vbGVhbiB7XG4gICAgICAgIC8vIERhdGVzIG5lZWQgdG8gYmUgbmV4dCB0byBlYWNoIG90aGVyIHRvIGdldCBtZXJnZWRcbiAgICAgICAgaWYgKCF0ZXh0QmV0d2Vlbi5tYXRjaCh0aGlzLnBhdHRlcm5CZXR3ZWVuKCkpKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBDaGVjayBpZiBhbnkgcmVsYXRpdmUgdG9rZW5zIHdlcmUgc3dhbGxvd2VkIGJ5IHRoZSBmaXJzdCBkYXRlLlxuICAgICAgICAvLyBFLmcuIFs8cmVsYXRpdmVfZGF0ZTE+IGZyb21dIFs8ZGF0ZTI+XVxuICAgICAgICBpZiAoIWhhc0ltcGxpZWRFYXJsaWVyUmVmZXJlbmNlRGF0ZShjdXJyZW50UmVzdWx0KSAmJiAhaGFzSW1wbGllZExhdGVyUmVmZXJlbmNlRGF0ZShjdXJyZW50UmVzdWx0KSkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gbWFrZSBzdXJlIHRoYXQgPGRhdGUyPiBpbXBsaWVzIGFuIGFic29sdXRlIGRhdGVcbiAgICAgICAgcmV0dXJuICEhbmV4dFJlc3VsdC5zdGFydC5nZXQoXCJkYXlcIikgJiYgISFuZXh0UmVzdWx0LnN0YXJ0LmdldChcIm1vbnRoXCIpICYmICEhbmV4dFJlc3VsdC5zdGFydC5nZXQoXCJ5ZWFyXCIpO1xuICAgIH1cblxuICAgIG1lcmdlUmVzdWx0cyh0ZXh0QmV0d2Vlbjogc3RyaW5nLCBjdXJyZW50UmVzdWx0OiBQYXJzaW5nUmVzdWx0LCBuZXh0UmVzdWx0OiBQYXJzaW5nUmVzdWx0KTogUGFyc2luZ1Jlc3VsdCB7XG4gICAgICAgIGxldCBkdXJhdGlvbiA9IHBhcnNlVGltZVVuaXRzKGN1cnJlbnRSZXN1bHQudGV4dCk7XG4gICAgICAgIGlmIChoYXNJbXBsaWVkRWFybGllclJlZmVyZW5jZURhdGUoY3VycmVudFJlc3VsdCkpIHtcbiAgICAgICAgICAgIGR1cmF0aW9uID0gcmV2ZXJzZUR1cmF0aW9uKGR1cmF0aW9uKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGNvbXBvbmVudHMgPSBQYXJzaW5nQ29tcG9uZW50cy5jcmVhdGVSZWxhdGl2ZUZyb21SZWZlcmVuY2UoXG4gICAgICAgICAgICBuZXcgUmVmZXJlbmNlV2l0aFRpbWV6b25lKG5leHRSZXN1bHQuc3RhcnQuZGF0ZSgpKSxcbiAgICAgICAgICAgIGR1cmF0aW9uXG4gICAgICAgICk7XG5cbiAgICAgICAgcmV0dXJuIG5ldyBQYXJzaW5nUmVzdWx0KFxuICAgICAgICAgICAgbmV4dFJlc3VsdC5yZWZlcmVuY2UsXG4gICAgICAgICAgICBjdXJyZW50UmVzdWx0LmluZGV4LFxuICAgICAgICAgICAgYCR7Y3VycmVudFJlc3VsdC50ZXh0fSR7dGV4dEJldHdlZW59JHtuZXh0UmVzdWx0LnRleHR9YCxcbiAgICAgICAgICAgIGNvbXBvbmVudHNcbiAgICAgICAgKTtcbiAgICB9XG59XG4iLCAiaW1wb3J0IHsgUGFyc2luZ0NvbnRleHQsIFJlZmluZXIgfSBmcm9tIFwiLi4vLi4vLi4vY2hyb25vXCI7XG5pbXBvcnQgeyBQYXJzaW5nUmVzdWx0IH0gZnJvbSBcIi4uLy4uLy4uL3Jlc3VsdHNcIjtcbmltcG9ydCB7IFlFQVJfUEFUVEVSTiwgcGFyc2VZZWFyIH0gZnJvbSBcIi4uL2NvbnN0YW50c1wiO1xuXG5jb25zdCBZRUFSX1NVRkZJWF9QQVRURVJOID0gbmV3IFJlZ0V4cChgXlxcXFxzKigke1lFQVJfUEFUVEVSTn0pYCwgXCJpXCIpO1xuY29uc3QgWUVBUl9HUk9VUCA9IDE7XG5leHBvcnQgZGVmYXVsdCBjbGFzcyBFTkV4dHJhY3RZZWFyU3VmZml4UmVmaW5lciBpbXBsZW1lbnRzIFJlZmluZXIge1xuICAgIHJlZmluZShjb250ZXh0OiBQYXJzaW5nQ29udGV4dCwgcmVzdWx0czogUGFyc2luZ1Jlc3VsdFtdKTogUGFyc2luZ1Jlc3VsdFtdIHtcbiAgICAgICAgcmVzdWx0cy5mb3JFYWNoKGZ1bmN0aW9uIChyZXN1bHQpIHtcbiAgICAgICAgICAgIGlmICghcmVzdWx0LnN0YXJ0LmlzRGF0ZVdpdGhVbmtub3duWWVhcigpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3Qgc3VmZml4ID0gY29udGV4dC50ZXh0LnN1YnN0cmluZyhyZXN1bHQuaW5kZXggKyByZXN1bHQudGV4dC5sZW5ndGgpO1xuICAgICAgICAgICAgY29uc3QgbWF0Y2ggPSBZRUFSX1NVRkZJWF9QQVRURVJOLmV4ZWMoc3VmZml4KTtcbiAgICAgICAgICAgIGlmICghbWF0Y2gpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBJZiB0aGUgc3VmZml4IG1hdGNoIGlzIGp1c3QgYSBzaG9ydCBudW1iZXIsIGUuZy4gXCIxNC80IDkwXCIsIGRvbid0IGFzc3VtZSBpdCB5ZWFyLlxuICAgICAgICAgICAgaWYgKG1hdGNoWzBdLnRyaW0oKS5sZW5ndGggPD0gMykge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnRleHQuZGVidWcoKCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGBFeHRyYWN0aW5nIHllYXI6ICcke21hdGNoWzBdfScgaW50byA6ICR7cmVzdWx0fWApO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBjb25zdCB5ZWFyID0gcGFyc2VZZWFyKG1hdGNoW1lFQVJfR1JPVVBdKTtcbiAgICAgICAgICAgIGlmIChyZXN1bHQuZW5kICE9IG51bGwpIHtcbiAgICAgICAgICAgICAgICByZXN1bHQuZW5kLmFzc2lnbihcInllYXJcIiwgeWVhcik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXN1bHQuc3RhcnQuYXNzaWduKFwieWVhclwiLCB5ZWFyKTtcbiAgICAgICAgICAgIHJlc3VsdC50ZXh0ICs9IG1hdGNoWzBdO1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdHM7XG4gICAgfVxufVxuIiwgImltcG9ydCB7IEZpbHRlciB9IGZyb20gXCIuLi8uLi8uLi9jb21tb24vYWJzdHJhY3RSZWZpbmVyc1wiO1xuaW1wb3J0IHsgUGFyc2luZ1Jlc3VsdCB9IGZyb20gXCIuLi8uLi8uLi9yZXN1bHRzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEVOVW5saWtlbHlGb3JtYXRGaWx0ZXIgZXh0ZW5kcyBGaWx0ZXIge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpO1xuICAgIH1cblxuICAgIGlzVmFsaWQoY29udGV4dCwgcmVzdWx0OiBQYXJzaW5nUmVzdWx0KTogYm9vbGVhbiB7XG4gICAgICAgIGNvbnN0IHRleHQgPSByZXN1bHQudGV4dC50cmltKCk7XG5cbiAgICAgICAgLy8gSWYgdGhlIHJlc3VsdCBpcyBjb25zaXN0cyBvZiB0aGUgd2hvbGUgdGV4dCAoZS5nLiBcIjIwMjRcIiwgXCJNYXlcIiwgZXRjKSxcbiAgICAgICAgLy8gdGhlbiBpdCBpcyB1bmxpa2VseSB0byBiZSBhIGRhdGUuXG4gICAgICAgIGlmICh0ZXh0ID09PSBjb250ZXh0LnRleHQudHJpbSgpKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIEluIEVuZ2xpc2gsIHRoZSB3b3JkIFwibWF5XCIgaXMgYSBtb250aCBuYW1lLCBidXQgaXQgaXMgYWxzbyBhIG1vZGFsIHZlcmIuXG4gICAgICAgIC8vIENoZWNrIGlmIHRoZSB0ZXh0IGJlZm9yZSBcIm1heVwiIGZvbGxvd3Mgc29tZSBhbGxvd2VkIHBhdHRlcm5zLlxuICAgICAgICBpZiAodGV4dC50b0xvd2VyQ2FzZSgpID09PSBcIm1heVwiKSB7XG4gICAgICAgICAgICBjb25zdCB0ZXh0QmVmb3JlID0gY29udGV4dC50ZXh0LnN1YnN0cmluZygwLCByZXN1bHQuaW5kZXgpLnRyaW0oKTtcbiAgICAgICAgICAgIGlmICghdGV4dEJlZm9yZS5tYXRjaCgvXFxiKGluKSQvaSkpIHtcbiAgICAgICAgICAgICAgICBjb250ZXh0LmRlYnVnKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coYFJlbW92aW5nIHVubGlrZWx5IHJlc3VsdDogJHtyZXN1bHR9YCk7XG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvLyBJbiBFbmdsaXNoLCBcInRoZSBzZWNvbmRcIiBjb3VsZCByZWZlciB0byB0aGUgb3JkaW5hbCBudW1iZXIgb3IgdGltZXVuaXQuXG4gICAgICAgIGlmICh0ZXh0LnRvTG93ZXJDYXNlKCkuZW5kc1dpdGgoXCJ0aGUgc2Vjb25kXCIpKSB7XG4gICAgICAgICAgICBjb25zdCB0ZXh0QWZ0ZXIgPSBjb250ZXh0LnRleHQuc3Vic3RyaW5nKHJlc3VsdC5pbmRleCArIHJlc3VsdC50ZXh0Lmxlbmd0aCkudHJpbSgpO1xuICAgICAgICAgICAgaWYgKHRleHRBZnRlci5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgY29udGV4dC5kZWJ1ZygoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGBSZW1vdmluZyB1bmxpa2VseSByZXN1bHQ6ICR7cmVzdWx0fWApO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxufVxuIiwgImltcG9ydCB7IENvbmZpZ3VyYXRpb24gfSBmcm9tIFwiLi4vLi4vY2hyb25vXCI7XG5cbmltcG9ydCBFTlRpbWVVbml0V2l0aGluRm9ybWF0UGFyc2VyIGZyb20gXCIuL3BhcnNlcnMvRU5UaW1lVW5pdFdpdGhpbkZvcm1hdFBhcnNlclwiO1xuaW1wb3J0IEVOTW9udGhOYW1lTGl0dGxlRW5kaWFuUGFyc2VyIGZyb20gXCIuL3BhcnNlcnMvRU5Nb250aE5hbWVMaXR0bGVFbmRpYW5QYXJzZXJcIjtcbmltcG9ydCBFTk1vbnRoTmFtZU1pZGRsZUVuZGlhblBhcnNlciBmcm9tIFwiLi9wYXJzZXJzL0VOTW9udGhOYW1lTWlkZGxlRW5kaWFuUGFyc2VyXCI7XG5pbXBvcnQgRU5Nb250aE5hbWVQYXJzZXIgZnJvbSBcIi4vcGFyc2Vycy9FTk1vbnRoTmFtZVBhcnNlclwiO1xuaW1wb3J0IEVOWWVhck1vbnRoRGF5UGFyc2VyIGZyb20gXCIuL3BhcnNlcnMvRU5ZZWFyTW9udGhEYXlQYXJzZXJcIjtcbmltcG9ydCBFTlNsYXNoTW9udGhGb3JtYXRQYXJzZXIgZnJvbSBcIi4vcGFyc2Vycy9FTlNsYXNoTW9udGhGb3JtYXRQYXJzZXJcIjtcbmltcG9ydCBFTlRpbWVFeHByZXNzaW9uUGFyc2VyIGZyb20gXCIuL3BhcnNlcnMvRU5UaW1lRXhwcmVzc2lvblBhcnNlclwiO1xuaW1wb3J0IEVOVGltZVVuaXRBZ29Gb3JtYXRQYXJzZXIgZnJvbSBcIi4vcGFyc2Vycy9FTlRpbWVVbml0QWdvRm9ybWF0UGFyc2VyXCI7XG5pbXBvcnQgRU5UaW1lVW5pdExhdGVyRm9ybWF0UGFyc2VyIGZyb20gXCIuL3BhcnNlcnMvRU5UaW1lVW5pdExhdGVyRm9ybWF0UGFyc2VyXCI7XG5pbXBvcnQgRU5NZXJnZURhdGVSYW5nZVJlZmluZXIgZnJvbSBcIi4vcmVmaW5lcnMvRU5NZXJnZURhdGVSYW5nZVJlZmluZXJcIjtcbmltcG9ydCBFTk1lcmdlRGF0ZVRpbWVSZWZpbmVyIGZyb20gXCIuL3JlZmluZXJzL0VOTWVyZ2VEYXRlVGltZVJlZmluZXJcIjtcblxuaW1wb3J0IHsgaW5jbHVkZUNvbW1vbkNvbmZpZ3VyYXRpb24gfSBmcm9tIFwiLi4vLi4vY29uZmlndXJhdGlvbnNcIjtcbmltcG9ydCBFTkNhc3VhbERhdGVQYXJzZXIgZnJvbSBcIi4vcGFyc2Vycy9FTkNhc3VhbERhdGVQYXJzZXJcIjtcbmltcG9ydCBFTkNhc3VhbFRpbWVQYXJzZXIgZnJvbSBcIi4vcGFyc2Vycy9FTkNhc3VhbFRpbWVQYXJzZXJcIjtcbmltcG9ydCBFTldlZWtkYXlQYXJzZXIgZnJvbSBcIi4vcGFyc2Vycy9FTldlZWtkYXlQYXJzZXJcIjtcbmltcG9ydCBFTlJlbGF0aXZlRGF0ZUZvcm1hdFBhcnNlciBmcm9tIFwiLi9wYXJzZXJzL0VOUmVsYXRpdmVEYXRlRm9ybWF0UGFyc2VyXCI7XG5cbmltcG9ydCBTbGFzaERhdGVGb3JtYXRQYXJzZXIgZnJvbSBcIi4uLy4uL2NvbW1vbi9wYXJzZXJzL1NsYXNoRGF0ZUZvcm1hdFBhcnNlclwiO1xuaW1wb3J0IEVOVGltZVVuaXRDYXN1YWxSZWxhdGl2ZUZvcm1hdFBhcnNlciBmcm9tIFwiLi9wYXJzZXJzL0VOVGltZVVuaXRDYXN1YWxSZWxhdGl2ZUZvcm1hdFBhcnNlclwiO1xuaW1wb3J0IEVOTWVyZ2VSZWxhdGl2ZUFmdGVyRGF0ZVJlZmluZXIgZnJvbSBcIi4vcmVmaW5lcnMvRU5NZXJnZVJlbGF0aXZlQWZ0ZXJEYXRlUmVmaW5lclwiO1xuaW1wb3J0IEVOTWVyZ2VSZWxhdGl2ZUZvbGxvd0J5RGF0ZVJlZmluZXIgZnJvbSBcIi4vcmVmaW5lcnMvRU5NZXJnZVJlbGF0aXZlRm9sbG93QnlEYXRlUmVmaW5lclwiO1xuaW1wb3J0IE92ZXJsYXBSZW1vdmFsUmVmaW5lciBmcm9tIFwiLi4vLi4vY29tbW9uL3JlZmluZXJzL092ZXJsYXBSZW1vdmFsUmVmaW5lclwiO1xuaW1wb3J0IEVORXh0cmFjdFllYXJTdWZmaXhSZWZpbmVyIGZyb20gXCIuL3JlZmluZXJzL0VORXh0cmFjdFllYXJTdWZmaXhSZWZpbmVyXCI7XG5pbXBvcnQgRU5Vbmxpa2VseUZvcm1hdEZpbHRlciBmcm9tIFwiLi9yZWZpbmVycy9FTlVubGlrZWx5Rm9ybWF0RmlsdGVyXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEVORGVmYXVsdENvbmZpZ3VyYXRpb24ge1xuICAgIC8qKlxuICAgICAqIENyZWF0ZSBhIGRlZmF1bHQgKmNhc3VhbCoge0BMaW5rIENvbmZpZ3VyYXRpb259IGZvciBFbmdsaXNoIGNocm9uby5cbiAgICAgKiBJdCBjYWxscyB7QExpbmsgY3JlYXRlQ29uZmlndXJhdGlvbn0gYW5kIGluY2x1ZGVzIGFkZGl0aW9uYWwgcGFyc2Vycy5cbiAgICAgKi9cbiAgICBjcmVhdGVDYXN1YWxDb25maWd1cmF0aW9uKGxpdHRsZUVuZGlhbiA9IGZhbHNlKTogQ29uZmlndXJhdGlvbiB7XG4gICAgICAgIGNvbnN0IG9wdGlvbiA9IHRoaXMuY3JlYXRlQ29uZmlndXJhdGlvbihmYWxzZSwgbGl0dGxlRW5kaWFuKTtcbiAgICAgICAgb3B0aW9uLnBhcnNlcnMucHVzaChuZXcgRU5DYXN1YWxEYXRlUGFyc2VyKCkpO1xuICAgICAgICBvcHRpb24ucGFyc2Vycy5wdXNoKG5ldyBFTkNhc3VhbFRpbWVQYXJzZXIoKSk7XG4gICAgICAgIG9wdGlvbi5wYXJzZXJzLnB1c2gobmV3IEVOTW9udGhOYW1lUGFyc2VyKCkpO1xuICAgICAgICBvcHRpb24ucGFyc2Vycy5wdXNoKG5ldyBFTlJlbGF0aXZlRGF0ZUZvcm1hdFBhcnNlcigpKTtcbiAgICAgICAgb3B0aW9uLnBhcnNlcnMucHVzaChuZXcgRU5UaW1lVW5pdENhc3VhbFJlbGF0aXZlRm9ybWF0UGFyc2VyKCkpO1xuICAgICAgICBvcHRpb24ucmVmaW5lcnMucHVzaChuZXcgRU5Vbmxpa2VseUZvcm1hdEZpbHRlcigpKTtcbiAgICAgICAgcmV0dXJuIG9wdGlvbjtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDcmVhdGUgYSBkZWZhdWx0IHtATGluayBDb25maWd1cmF0aW9ufSBmb3IgRW5nbGlzaCBjaHJvbm9cbiAgICAgKlxuICAgICAqIEBwYXJhbSBzdHJpY3RNb2RlIElmIHRoZSB0aW1ldW5pdCBtZW50aW9uaW5nIHNob3VsZCBiZSBzdHJpY3QsIG5vdCBjYXN1YWxcbiAgICAgKiBAcGFyYW0gbGl0dGxlRW5kaWFuIElmIGZvcm1hdCBzaG91bGQgYmUgZGF0ZS1maXJzdC9saXR0bGVFbmRpYW4gKGUuZy4gZW5fVUspLCBub3QgbW9udGgtZmlyc3QvbWlkZGxlRW5kaWFuIChlLmcuIGVuX1VTKVxuICAgICAqL1xuICAgIGNyZWF0ZUNvbmZpZ3VyYXRpb24oc3RyaWN0TW9kZSA9IHRydWUsIGxpdHRsZUVuZGlhbiA9IGZhbHNlKTogQ29uZmlndXJhdGlvbiB7XG4gICAgICAgIGNvbnN0IG9wdGlvbnMgPSBpbmNsdWRlQ29tbW9uQ29uZmlndXJhdGlvbihcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBwYXJzZXJzOiBbXG4gICAgICAgICAgICAgICAgICAgIG5ldyBTbGFzaERhdGVGb3JtYXRQYXJzZXIobGl0dGxlRW5kaWFuKSxcbiAgICAgICAgICAgICAgICAgICAgbmV3IEVOVGltZVVuaXRXaXRoaW5Gb3JtYXRQYXJzZXIoc3RyaWN0TW9kZSksXG4gICAgICAgICAgICAgICAgICAgIG5ldyBFTk1vbnRoTmFtZUxpdHRsZUVuZGlhblBhcnNlcigpLFxuICAgICAgICAgICAgICAgICAgICBuZXcgRU5Nb250aE5hbWVNaWRkbGVFbmRpYW5QYXJzZXIoLypzaG91bGRTa2lwWWVhckxpa2VEYXRlPSovIGxpdHRsZUVuZGlhbiksXG4gICAgICAgICAgICAgICAgICAgIG5ldyBFTldlZWtkYXlQYXJzZXIoKSxcbiAgICAgICAgICAgICAgICAgICAgbmV3IEVOU2xhc2hNb250aEZvcm1hdFBhcnNlcigpLFxuICAgICAgICAgICAgICAgICAgICBuZXcgRU5UaW1lRXhwcmVzc2lvblBhcnNlcihzdHJpY3RNb2RlKSxcbiAgICAgICAgICAgICAgICAgICAgbmV3IEVOVGltZVVuaXRBZ29Gb3JtYXRQYXJzZXIoc3RyaWN0TW9kZSksXG4gICAgICAgICAgICAgICAgICAgIG5ldyBFTlRpbWVVbml0TGF0ZXJGb3JtYXRQYXJzZXIoc3RyaWN0TW9kZSksXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICByZWZpbmVyczogW25ldyBFTk1lcmdlRGF0ZVRpbWVSZWZpbmVyKCldLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHN0cmljdE1vZGVcbiAgICAgICAgKTtcbiAgICAgICAgb3B0aW9ucy5wYXJzZXJzLnVuc2hpZnQobmV3IEVOWWVhck1vbnRoRGF5UGFyc2VyKC8qc3RyaWN0TW9udGhEYXRlT3JkZXI9Ki8gc3RyaWN0TW9kZSkpO1xuXG4gICAgICAgIC8vIFRoZXNlIHJlbGF0aXZlLWRhdGVzIGNvbnNpZGVyYXRpb24gc2hvdWxkIGJlIGRvbmUgYmVmb3JlIG90aGVyIGNvbW1vbiByZWZpbmVycy5cbiAgICAgICAgb3B0aW9ucy5yZWZpbmVycy51bnNoaWZ0KG5ldyBFTk1lcmdlUmVsYXRpdmVGb2xsb3dCeURhdGVSZWZpbmVyKCkpO1xuICAgICAgICBvcHRpb25zLnJlZmluZXJzLnVuc2hpZnQobmV3IEVOTWVyZ2VSZWxhdGl2ZUFmdGVyRGF0ZVJlZmluZXIoKSk7XG4gICAgICAgIG9wdGlvbnMucmVmaW5lcnMudW5zaGlmdChuZXcgT3ZlcmxhcFJlbW92YWxSZWZpbmVyKCkpO1xuXG4gICAgICAgIC8vIFJlLWFwcGx5IHRoZSBkYXRlIHRpbWUgcmVmaW5lciBhZ2FpbiBhZnRlciB0aGUgdGltZXpvbmUgcmVmaW5lbWVudCBhbmQgZXhjbHVzaW9uIGluIGNvbW1vbiByZWZpbmVycy5cbiAgICAgICAgb3B0aW9ucy5yZWZpbmVycy5wdXNoKG5ldyBFTk1lcmdlRGF0ZVRpbWVSZWZpbmVyKCkpO1xuXG4gICAgICAgIC8vIEV4dHJhY3QgeWVhciBhZnRlciBtZXJnaW5nIGRhdGUgYW5kIHRpbWVcbiAgICAgICAgb3B0aW9ucy5yZWZpbmVycy5wdXNoKG5ldyBFTkV4dHJhY3RZZWFyU3VmZml4UmVmaW5lcigpKTtcblxuICAgICAgICAvLyBLZWVwIHRoZSBkYXRlIHJhbmdlIHJlZmluZXIgYXQgdGhlIGVuZCAoYWZ0ZXIgYWxsIG90aGVyIHJlZmluZW1lbnRzKS5cbiAgICAgICAgb3B0aW9ucy5yZWZpbmVycy5wdXNoKG5ldyBFTk1lcmdlRGF0ZVJhbmdlUmVmaW5lcigpKTtcbiAgICAgICAgcmV0dXJuIG9wdGlvbnM7XG4gICAgfVxufVxuIiwgImltcG9ydCB7IFJlZmVyZW5jZVdpdGhUaW1lem9uZSwgUGFyc2luZ0NvbXBvbmVudHMsIFBhcnNpbmdSZXN1bHQgfSBmcm9tIFwiLi9yZXN1bHRzXCI7XG5pbXBvcnQgeyBDb21wb25lbnQsIFBhcnNlZFJlc3VsdCwgUGFyc2luZ09wdGlvbiwgUGFyc2luZ1JlZmVyZW5jZSB9IGZyb20gXCIuL3R5cGVzXCI7XG5pbXBvcnQgeyBBc3luY0RlYnVnQmxvY2ssIERlYnVnSGFuZGxlciB9IGZyb20gXCIuL2RlYnVnZ2luZ1wiO1xuaW1wb3J0IEVORGVmYXVsdENvbmZpZ3VyYXRpb24gZnJvbSBcIi4vbG9jYWxlcy9lbi9jb25maWd1cmF0aW9uXCI7XG5cbi8qKlxuICogQ2hyb25vIGNvbmZpZ3VyYXRpb24uXG4gKiBJdCBpcyBzaW1wbHkgYW4gb3JkZXJlZCBsaXN0IG9mIHBhcnNlcnMgYW5kIHJlZmluZXJzXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgQ29uZmlndXJhdGlvbiB7XG4gICAgcGFyc2VyczogUGFyc2VyW107XG4gICAgcmVmaW5lcnM6IFJlZmluZXJbXTtcbn1cblxuLyoqXG4gKiBBbiBhYnN0cmFjdGlvbiBmb3IgQ2hyb25vICpQYXJzZXIqLlxuICpcbiAqIEVhY2ggcGFyc2VyIHNob3VsZCByZWNvZ25pemUgYW5kIGhhbmRsZSBhIGNlcnRhaW4gZGF0ZSBmb3JtYXQuXG4gKiBDaHJvbm8gdXNlcyBtdWx0aXBsZSBwYXJzZXMgKGFuZCByZWZpbmVycykgdG9nZXRoZXIgZm9yIHBhcnNpbmcgdGhlIGlucHV0LlxuICpcbiAqIFRoZSBwYXJzZXIgaW1wbGVtZW50YXRpb24gbXVzdCBwcm92aWRlIHtATGluayBwYXR0ZXJuIHwgcGF0dGVybigpfSBmb3IgdGhlIGRhdGUgZm9ybWF0LlxuICpcbiAqIFRoZSB7QExpbmsgZXh0cmFjdCB8IGV4dHJhY3QoKX0gbWV0aG9kIGlzIGNhbGxlZCB3aXRoIHRoZSBwYXR0ZXJuJ3MgKm1hdGNoKi5cbiAqIFRoZSBtYXRjaGluZyBhbmQgZXh0cmFjdGluZyBpcyBjb250cm9sbGVkIGFuZCBhZGp1c3RlZCB0byBhdm9pZCBmb3Igb3ZlcmxhcHBpbmcgcmVzdWx0cy5cbiAqL1xuZXhwb3J0IGludGVyZmFjZSBQYXJzZXIge1xuICAgIHBhdHRlcm4oY29udGV4dDogUGFyc2luZ0NvbnRleHQpOiBSZWdFeHA7XG4gICAgZXh0cmFjdChcbiAgICAgICAgY29udGV4dDogUGFyc2luZ0NvbnRleHQsXG4gICAgICAgIG1hdGNoOiBSZWdFeHBNYXRjaEFycmF5XG4gICAgKTogUGFyc2luZ0NvbXBvbmVudHMgfCBQYXJzaW5nUmVzdWx0IHwgeyBbYyBpbiBDb21wb25lbnRdPzogbnVtYmVyIH0gfCBudWxsO1xufVxuXG4vKipcbiAqIEEgYWJzdHJhY3Rpb24gZm9yIENocm9ubyAqUmVmaW5lciouXG4gKlxuICogRWFjaCByZWZpbmVyIHRha2VzIHRoZSBsaXN0IG9mIHJlc3VsdHMgKGZyb20gcGFyc2VycyBvciBvdGhlciByZWZpbmVycykgYW5kIHJldHVybnMgYW5vdGhlciBsaXN0IG9mIHJlc3VsdHMuXG4gKiBDaHJvbm8gYXBwbGllcyBlYWNoIHJlZmluZXIgaW4gb3JkZXIgYW5kIHJldHVybiB0aGUgb3V0cHV0IGZyb20gdGhlIGxhc3QgcmVmaW5lci5cbiAqL1xuZXhwb3J0IGludGVyZmFjZSBSZWZpbmVyIHtcbiAgICByZWZpbmU6IChjb250ZXh0OiBQYXJzaW5nQ29udGV4dCwgcmVzdWx0czogUGFyc2luZ1Jlc3VsdFtdKSA9PiBQYXJzaW5nUmVzdWx0W107XG59XG5cbi8qKlxuICogVGhlIENocm9ubyBvYmplY3QuXG4gKi9cbmV4cG9ydCBjbGFzcyBDaHJvbm8ge1xuICAgIHBhcnNlcnM6IEFycmF5PFBhcnNlcj47XG4gICAgcmVmaW5lcnM6IEFycmF5PFJlZmluZXI+O1xuXG4gICAgZGVmYXVsdENvbmZpZyA9IG5ldyBFTkRlZmF1bHRDb25maWd1cmF0aW9uKCk7XG5cbiAgICBjb25zdHJ1Y3Rvcihjb25maWd1cmF0aW9uPzogQ29uZmlndXJhdGlvbikge1xuICAgICAgICBjb25maWd1cmF0aW9uID0gY29uZmlndXJhdGlvbiB8fCB0aGlzLmRlZmF1bHRDb25maWcuY3JlYXRlQ2FzdWFsQ29uZmlndXJhdGlvbigpO1xuICAgICAgICB0aGlzLnBhcnNlcnMgPSBbLi4uY29uZmlndXJhdGlvbi5wYXJzZXJzXTtcbiAgICAgICAgdGhpcy5yZWZpbmVycyA9IFsuLi5jb25maWd1cmF0aW9uLnJlZmluZXJzXTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDcmVhdGUgYSBzaGFsbG93IGNvcHkgb2YgdGhlIENocm9ubyBvYmplY3Qgd2l0aCB0aGUgc2FtZSBjb25maWd1cmF0aW9uIChgcGFyc2Vyc2AgYW5kIGByZWZpbmVyc2ApXG4gICAgICovXG4gICAgY2xvbmUoKTogQ2hyb25vIHtcbiAgICAgICAgcmV0dXJuIG5ldyBDaHJvbm8oe1xuICAgICAgICAgICAgcGFyc2VyczogWy4uLnRoaXMucGFyc2Vyc10sXG4gICAgICAgICAgICByZWZpbmVyczogWy4uLnRoaXMucmVmaW5lcnNdLFxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBBIHNob3J0Y3V0IGZvciBjYWxsaW5nIHtATGluayBwYXJzZSB8IHBhcnNlKCkgfSB0aGVuIHRyYW5zZm9ybSB0aGUgcmVzdWx0IGludG8gSmF2YXNjcmlwdCdzIERhdGUgb2JqZWN0XG4gICAgICogQHJldHVybiBEYXRlIG9iamVjdCBjcmVhdGVkIGZyb20gdGhlIGZpcnN0IHBhcnNlIHJlc3VsdFxuICAgICAqL1xuICAgIHBhcnNlRGF0ZSh0ZXh0OiBzdHJpbmcsIHJlZmVyZW5jZURhdGU/OiBQYXJzaW5nUmVmZXJlbmNlIHwgRGF0ZSwgb3B0aW9uPzogUGFyc2luZ09wdGlvbik6IERhdGUgfCBudWxsIHtcbiAgICAgICAgY29uc3QgcmVzdWx0cyA9IHRoaXMucGFyc2UodGV4dCwgcmVmZXJlbmNlRGF0ZSwgb3B0aW9uKTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdHMubGVuZ3RoID4gMCA/IHJlc3VsdHNbMF0uc3RhcnQuZGF0ZSgpIDogbnVsbDtcbiAgICB9XG5cbiAgICBwYXJzZSh0ZXh0OiBzdHJpbmcsIHJlZmVyZW5jZURhdGU/OiBQYXJzaW5nUmVmZXJlbmNlIHwgRGF0ZSwgb3B0aW9uPzogUGFyc2luZ09wdGlvbik6IFBhcnNlZFJlc3VsdFtdIHtcbiAgICAgICAgY29uc3QgY29udGV4dCA9IG5ldyBQYXJzaW5nQ29udGV4dCh0ZXh0LCByZWZlcmVuY2VEYXRlLCBvcHRpb24pO1xuXG4gICAgICAgIGxldCByZXN1bHRzID0gW107XG4gICAgICAgIHRoaXMucGFyc2Vycy5mb3JFYWNoKChwYXJzZXIpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHBhcnNlZFJlc3VsdHMgPSBDaHJvbm8uZXhlY3V0ZVBhcnNlcihjb250ZXh0LCBwYXJzZXIpO1xuICAgICAgICAgICAgcmVzdWx0cyA9IHJlc3VsdHMuY29uY2F0KHBhcnNlZFJlc3VsdHMpO1xuICAgICAgICB9KTtcblxuICAgICAgICByZXN1bHRzLnNvcnQoKGEsIGIpID0+IHtcbiAgICAgICAgICAgIHJldHVybiBhLmluZGV4IC0gYi5pbmRleDtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5yZWZpbmVycy5mb3JFYWNoKGZ1bmN0aW9uIChyZWZpbmVyKSB7XG4gICAgICAgICAgICByZXN1bHRzID0gcmVmaW5lci5yZWZpbmUoY29udGV4dCwgcmVzdWx0cyk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiByZXN1bHRzO1xuICAgIH1cblxuICAgIHByaXZhdGUgc3RhdGljIGV4ZWN1dGVQYXJzZXIoY29udGV4dDogUGFyc2luZ0NvbnRleHQsIHBhcnNlcjogUGFyc2VyKSB7XG4gICAgICAgIGNvbnN0IHJlc3VsdHMgPSBbXTtcbiAgICAgICAgY29uc3QgcGF0dGVybiA9IHBhcnNlci5wYXR0ZXJuKGNvbnRleHQpO1xuXG4gICAgICAgIGNvbnN0IG9yaWdpbmFsVGV4dCA9IGNvbnRleHQudGV4dDtcbiAgICAgICAgbGV0IHJlbWFpbmluZ1RleHQgPSBjb250ZXh0LnRleHQ7XG4gICAgICAgIGxldCBtYXRjaCA9IHBhdHRlcm4uZXhlYyhyZW1haW5pbmdUZXh0KTtcblxuICAgICAgICB3aGlsZSAobWF0Y2gpIHtcbiAgICAgICAgICAgIC8vIENhbGN1bGF0ZSBtYXRjaCBpbmRleCBvbiB0aGUgZnVsbCB0ZXh0O1xuICAgICAgICAgICAgY29uc3QgaW5kZXggPSBtYXRjaC5pbmRleCArIG9yaWdpbmFsVGV4dC5sZW5ndGggLSByZW1haW5pbmdUZXh0Lmxlbmd0aDtcbiAgICAgICAgICAgIG1hdGNoLmluZGV4ID0gaW5kZXg7XG5cbiAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IHBhcnNlci5leHRyYWN0KGNvbnRleHQsIG1hdGNoKTtcbiAgICAgICAgICAgIGlmICghcmVzdWx0KSB7XG4gICAgICAgICAgICAgICAgLy8gSWYgZmFpbHMsIG1vdmUgb24gYnkgMVxuICAgICAgICAgICAgICAgIHJlbWFpbmluZ1RleHQgPSBvcmlnaW5hbFRleHQuc3Vic3RyaW5nKG1hdGNoLmluZGV4ICsgMSk7XG4gICAgICAgICAgICAgICAgbWF0Y2ggPSBwYXR0ZXJuLmV4ZWMocmVtYWluaW5nVGV4dCk7XG4gICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGxldCBwYXJzZWRSZXN1bHQ6IFBhcnNpbmdSZXN1bHQgPSBudWxsO1xuICAgICAgICAgICAgaWYgKHJlc3VsdCBpbnN0YW5jZW9mIFBhcnNpbmdSZXN1bHQpIHtcbiAgICAgICAgICAgICAgICBwYXJzZWRSZXN1bHQgPSByZXN1bHQ7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHJlc3VsdCBpbnN0YW5jZW9mIFBhcnNpbmdDb21wb25lbnRzKSB7XG4gICAgICAgICAgICAgICAgcGFyc2VkUmVzdWx0ID0gY29udGV4dC5jcmVhdGVQYXJzaW5nUmVzdWx0KG1hdGNoLmluZGV4LCBtYXRjaFswXSk7XG4gICAgICAgICAgICAgICAgcGFyc2VkUmVzdWx0LnN0YXJ0ID0gcmVzdWx0O1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBwYXJzZWRSZXN1bHQgPSBjb250ZXh0LmNyZWF0ZVBhcnNpbmdSZXN1bHQobWF0Y2guaW5kZXgsIG1hdGNoWzBdLCByZXN1bHQpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjb25zdCBwYXJzZWRJbmRleCA9IHBhcnNlZFJlc3VsdC5pbmRleDtcbiAgICAgICAgICAgIGNvbnN0IHBhcnNlZFRleHQgPSBwYXJzZWRSZXN1bHQudGV4dDtcbiAgICAgICAgICAgIGNvbnRleHQuZGVidWcoKCkgPT5cbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhgJHtwYXJzZXIuY29uc3RydWN0b3IubmFtZX0gZXh0cmFjdGVkIChhdCBpbmRleD0ke3BhcnNlZEluZGV4fSkgJyR7cGFyc2VkVGV4dH0nYClcbiAgICAgICAgICAgICk7XG5cbiAgICAgICAgICAgIHJlc3VsdHMucHVzaChwYXJzZWRSZXN1bHQpO1xuICAgICAgICAgICAgcmVtYWluaW5nVGV4dCA9IG9yaWdpbmFsVGV4dC5zdWJzdHJpbmcocGFyc2VkSW5kZXggKyBwYXJzZWRUZXh0Lmxlbmd0aCk7XG4gICAgICAgICAgICBtYXRjaCA9IHBhdHRlcm4uZXhlYyhyZW1haW5pbmdUZXh0KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiByZXN1bHRzO1xuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIFBhcnNpbmdDb250ZXh0IGltcGxlbWVudHMgRGVidWdIYW5kbGVyIHtcbiAgICByZWFkb25seSB0ZXh0OiBzdHJpbmc7XG4gICAgcmVhZG9ubHkgb3B0aW9uOiBQYXJzaW5nT3B0aW9uO1xuICAgIHJlYWRvbmx5IHJlZmVyZW5jZTogUmVmZXJlbmNlV2l0aFRpbWV6b25lO1xuXG4gICAgLyoqXG4gICAgICogQGRlcHJlY2F0ZWQuIFVzZSBgcmVmZXJlbmNlLmluc3RhbnRgIGluc3RlYWQuXG4gICAgICovXG4gICAgcmVhZG9ubHkgcmVmRGF0ZTogRGF0ZTtcblxuICAgIGNvbnN0cnVjdG9yKHRleHQ6IHN0cmluZywgcmVmRGF0ZT86IFBhcnNpbmdSZWZlcmVuY2UgfCBEYXRlLCBvcHRpb24/OiBQYXJzaW5nT3B0aW9uKSB7XG4gICAgICAgIHRoaXMudGV4dCA9IHRleHQ7XG4gICAgICAgIHRoaXMucmVmZXJlbmNlID0gbmV3IFJlZmVyZW5jZVdpdGhUaW1lem9uZShyZWZEYXRlKTtcbiAgICAgICAgdGhpcy5vcHRpb24gPSBvcHRpb24gPz8ge307XG5cbiAgICAgICAgdGhpcy5yZWZEYXRlID0gdGhpcy5yZWZlcmVuY2UuaW5zdGFudDtcbiAgICB9XG5cbiAgICBjcmVhdGVQYXJzaW5nQ29tcG9uZW50cyhjb21wb25lbnRzPzogeyBbYyBpbiBDb21wb25lbnRdPzogbnVtYmVyIH0gfCBQYXJzaW5nQ29tcG9uZW50cyk6IFBhcnNpbmdDb21wb25lbnRzIHtcbiAgICAgICAgaWYgKGNvbXBvbmVudHMgaW5zdGFuY2VvZiBQYXJzaW5nQ29tcG9uZW50cykge1xuICAgICAgICAgICAgcmV0dXJuIGNvbXBvbmVudHM7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gbmV3IFBhcnNpbmdDb21wb25lbnRzKHRoaXMucmVmZXJlbmNlLCBjb21wb25lbnRzKTtcbiAgICB9XG5cbiAgICBjcmVhdGVQYXJzaW5nUmVzdWx0KFxuICAgICAgICBpbmRleDogbnVtYmVyLFxuICAgICAgICB0ZXh0T3JFbmRJbmRleDogbnVtYmVyIHwgc3RyaW5nLFxuICAgICAgICBzdGFydENvbXBvbmVudHM/OiB7IFtjIGluIENvbXBvbmVudF0/OiBudW1iZXIgfSB8IFBhcnNpbmdDb21wb25lbnRzLFxuICAgICAgICBlbmRDb21wb25lbnRzPzogeyBbYyBpbiBDb21wb25lbnRdPzogbnVtYmVyIH0gfCBQYXJzaW5nQ29tcG9uZW50c1xuICAgICk6IFBhcnNpbmdSZXN1bHQge1xuICAgICAgICBjb25zdCB0ZXh0ID0gdHlwZW9mIHRleHRPckVuZEluZGV4ID09PSBcInN0cmluZ1wiID8gdGV4dE9yRW5kSW5kZXggOiB0aGlzLnRleHQuc3Vic3RyaW5nKGluZGV4LCB0ZXh0T3JFbmRJbmRleCk7XG5cbiAgICAgICAgY29uc3Qgc3RhcnQgPSBzdGFydENvbXBvbmVudHMgPyB0aGlzLmNyZWF0ZVBhcnNpbmdDb21wb25lbnRzKHN0YXJ0Q29tcG9uZW50cykgOiBudWxsO1xuICAgICAgICBjb25zdCBlbmQgPSBlbmRDb21wb25lbnRzID8gdGhpcy5jcmVhdGVQYXJzaW5nQ29tcG9uZW50cyhlbmRDb21wb25lbnRzKSA6IG51bGw7XG5cbiAgICAgICAgcmV0dXJuIG5ldyBQYXJzaW5nUmVzdWx0KHRoaXMucmVmZXJlbmNlLCBpbmRleCwgdGV4dCwgc3RhcnQsIGVuZCk7XG4gICAgfVxuXG4gICAgZGVidWcoYmxvY2s6IEFzeW5jRGVidWdCbG9jayk6IHZvaWQge1xuICAgICAgICBpZiAodGhpcy5vcHRpb24uZGVidWcpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLm9wdGlvbi5kZWJ1ZyBpbnN0YW5jZW9mIEZ1bmN0aW9uKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5vcHRpb24uZGVidWcoYmxvY2spO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBjb25zdCBoYW5kbGVyOiBEZWJ1Z0hhbmRsZXIgPSA8RGVidWdIYW5kbGVyPnRoaXMub3B0aW9uLmRlYnVnO1xuICAgICAgICAgICAgICAgIGhhbmRsZXIuZGVidWcoYmxvY2spO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuIiwgIi8qKlxuICogQ2hyb25vIGNvbXBvbmVudHMgZm9yIEVuZ2xpc2ggc3VwcG9ydCAoKnBhcnNlcnMqLCAqcmVmaW5lcnMqLCBhbmQgKmNvbmZpZ3VyYXRpb24qKVxuICpcbiAqIEBtb2R1bGVcbiAqL1xuXG5pbXBvcnQgeyBDaHJvbm8sIFBhcnNlciwgUmVmaW5lciB9IGZyb20gXCIuLi8uLi9jaHJvbm9cIjtcbmltcG9ydCB7IFBhcnNpbmdSZXN1bHQsIFBhcnNpbmdDb21wb25lbnRzLCBSZWZlcmVuY2VXaXRoVGltZXpvbmUgfSBmcm9tIFwiLi4vLi4vcmVzdWx0c1wiO1xuaW1wb3J0IHsgQ29tcG9uZW50LCBQYXJzZWRSZXN1bHQsIFBhcnNpbmdPcHRpb24sIFBhcnNpbmdSZWZlcmVuY2UsIE1lcmlkaWVtLCBXZWVrZGF5IH0gZnJvbSBcIi4uLy4uL3R5cGVzXCI7XG5cbmltcG9ydCBFTkRlZmF1bHRDb25maWd1cmF0aW9uIGZyb20gXCIuL2NvbmZpZ3VyYXRpb25cIjtcblxuZXhwb3J0IHsgQ2hyb25vLCBQYXJzZXIsIFJlZmluZXIsIFBhcnNpbmdSZXN1bHQsIFBhcnNpbmdDb21wb25lbnRzLCBSZWZlcmVuY2VXaXRoVGltZXpvbmUgfTtcbmV4cG9ydCB7IENvbXBvbmVudCwgUGFyc2VkUmVzdWx0LCBQYXJzaW5nT3B0aW9uLCBQYXJzaW5nUmVmZXJlbmNlLCBNZXJpZGllbSwgV2Vla2RheSB9O1xuXG5leHBvcnQgY29uc3QgY29uZmlndXJhdGlvbiA9IG5ldyBFTkRlZmF1bHRDb25maWd1cmF0aW9uKCk7XG5cbi8qKlxuICogQ2hyb25vIG9iamVjdCBjb25maWd1cmVkIGZvciBwYXJzaW5nICpjYXN1YWwqIEVuZ2xpc2hcbiAqL1xuZXhwb3J0IGNvbnN0IGNhc3VhbCA9IG5ldyBDaHJvbm8oY29uZmlndXJhdGlvbi5jcmVhdGVDYXN1YWxDb25maWd1cmF0aW9uKGZhbHNlKSk7XG5cbi8qKlxuICogQ2hyb25vIG9iamVjdCBjb25maWd1cmVkIGZvciBwYXJzaW5nICpzdHJpY3QqIEVuZ2xpc2hcbiAqL1xuZXhwb3J0IGNvbnN0IHN0cmljdCA9IG5ldyBDaHJvbm8oY29uZmlndXJhdGlvbi5jcmVhdGVDb25maWd1cmF0aW9uKHRydWUsIGZhbHNlKSk7XG5cbi8qKlxuICogQ2hyb25vIG9iamVjdCBjb25maWd1cmVkIGZvciBwYXJzaW5nICpVSy1zdHlsZSogRW5nbGlzaFxuICovXG5leHBvcnQgY29uc3QgR0IgPSBuZXcgQ2hyb25vKGNvbmZpZ3VyYXRpb24uY3JlYXRlQ2FzdWFsQ29uZmlndXJhdGlvbih0cnVlKSk7XG5cbi8qKlxuICogQSBzaG9ydGN1dCBmb3IgZW4uY2FzdWFsLnBhcnNlKClcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHBhcnNlKHRleHQ6IHN0cmluZywgcmVmPzogUGFyc2luZ1JlZmVyZW5jZSB8IERhdGUsIG9wdGlvbj86IFBhcnNpbmdPcHRpb24pOiBQYXJzZWRSZXN1bHRbXSB7XG4gICAgcmV0dXJuIGNhc3VhbC5wYXJzZSh0ZXh0LCByZWYsIG9wdGlvbik7XG59XG5cbi8qKlxuICogQSBzaG9ydGN1dCBmb3IgZW4uY2FzdWFsLnBhcnNlRGF0ZSgpXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBwYXJzZURhdGUodGV4dDogc3RyaW5nLCByZWY/OiBQYXJzaW5nUmVmZXJlbmNlIHwgRGF0ZSwgb3B0aW9uPzogUGFyc2luZ09wdGlvbik6IERhdGUge1xuICAgIHJldHVybiBjYXN1YWwucGFyc2VEYXRlKHRleHQsIHJlZiwgb3B0aW9uKTtcbn1cbiIsICJpbXBvcnQgKiBhcyBlbiBmcm9tIFwiLi9sb2NhbGVzL2VuXCI7XG5pbXBvcnQgeyBDaHJvbm8sIFBhcnNlciwgUGFyc2luZ0NvbnRleHQsIFJlZmluZXIgfSBmcm9tIFwiLi9jaHJvbm9cIjtcbmltcG9ydCB7IFBhcnNpbmdSZXN1bHQsIFBhcnNpbmdDb21wb25lbnRzLCBSZWZlcmVuY2VXaXRoVGltZXpvbmUgfSBmcm9tIFwiLi9yZXN1bHRzXCI7XG5pbXBvcnQgeyBDb21wb25lbnQsIFBhcnNlZENvbXBvbmVudHMsIFBhcnNlZFJlc3VsdCwgUGFyc2luZ09wdGlvbiwgUGFyc2luZ1JlZmVyZW5jZSwgTWVyaWRpZW0sIFdlZWtkYXkgfSBmcm9tIFwiLi90eXBlc1wiO1xuXG5leHBvcnQgeyBlbiwgQ2hyb25vLCBQYXJzZXIsIFBhcnNpbmdDb250ZXh0LCBSZWZpbmVyLCBQYXJzaW5nUmVzdWx0LCBQYXJzaW5nQ29tcG9uZW50cywgUmVmZXJlbmNlV2l0aFRpbWV6b25lIH07XG5leHBvcnQgeyBDb21wb25lbnQsIFBhcnNlZENvbXBvbmVudHMsIFBhcnNlZFJlc3VsdCwgUGFyc2luZ09wdGlvbiwgUGFyc2luZ1JlZmVyZW5jZSwgTWVyaWRpZW0sIFdlZWtkYXkgfTtcblxuLy8gRXhwb3J0IGFsbCBsb2NhbGVzXG5pbXBvcnQgKiBhcyBkZSBmcm9tIFwiLi9sb2NhbGVzL2RlXCI7XG5pbXBvcnQgKiBhcyBmciBmcm9tIFwiLi9sb2NhbGVzL2ZyXCI7XG5pbXBvcnQgKiBhcyBqYSBmcm9tIFwiLi9sb2NhbGVzL2phXCI7XG5pbXBvcnQgKiBhcyBwdCBmcm9tIFwiLi9sb2NhbGVzL3B0XCI7XG5pbXBvcnQgKiBhcyBubCBmcm9tIFwiLi9sb2NhbGVzL25sXCI7XG5pbXBvcnQgKiBhcyB6aCBmcm9tIFwiLi9sb2NhbGVzL3poXCI7XG5pbXBvcnQgKiBhcyBydSBmcm9tIFwiLi9sb2NhbGVzL3J1XCI7XG5pbXBvcnQgKiBhcyBlcyBmcm9tIFwiLi9sb2NhbGVzL2VzXCI7XG5pbXBvcnQgKiBhcyB1ayBmcm9tIFwiLi9sb2NhbGVzL3VrXCI7XG5cbmV4cG9ydCB7IGRlLCBmciwgamEsIHB0LCBubCwgemgsIHJ1LCBlcywgdWsgfTtcblxuLyoqXG4gKiBBIHNob3J0Y3V0IGZvciB7QGxpbmsgZW4gfCBjaHJvbm8uZW4uc3RyaWN0fVxuICovXG5leHBvcnQgY29uc3Qgc3RyaWN0ID0gZW4uc3RyaWN0O1xuXG4vKipcbiAqIEEgc2hvcnRjdXQgZm9yIHtAbGluayBlbiB8IGNocm9uby5lbi5jYXN1YWx9XG4gKi9cbmV4cG9ydCBjb25zdCBjYXN1YWwgPSBlbi5jYXN1YWw7XG5cbi8qKlxuICogQSBzaG9ydGN1dCBmb3Ige0BsaW5rIGVuIHwgY2hyb25vLmVuLmNhc3VhbC5wYXJzZSgpfVxuICovXG5leHBvcnQgZnVuY3Rpb24gcGFyc2UodGV4dDogc3RyaW5nLCByZWY/OiBQYXJzaW5nUmVmZXJlbmNlIHwgRGF0ZSwgb3B0aW9uPzogUGFyc2luZ09wdGlvbik6IFBhcnNlZFJlc3VsdFtdIHtcbiAgICByZXR1cm4gY2FzdWFsLnBhcnNlKHRleHQsIHJlZiwgb3B0aW9uKTtcbn1cblxuLyoqXG4gKiBBIHNob3J0Y3V0IGZvciB7QGxpbmsgZW4gfCBjaHJvbm8uZW4uY2FzdWFsLnBhcnNlRGF0ZSgpfVxuICovXG5leHBvcnQgZnVuY3Rpb24gcGFyc2VEYXRlKHRleHQ6IHN0cmluZywgcmVmPzogUGFyc2luZ1JlZmVyZW5jZSB8IERhdGUsIG9wdGlvbj86IFBhcnNpbmdPcHRpb24pOiBEYXRlIHwgbnVsbCB7XG4gICAgcmV0dXJuIGNhc3VhbC5wYXJzZURhdGUodGV4dCwgcmVmLCBvcHRpb24pO1xufVxuIl0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFBQSwrQ0FBQUEsVUFBQUMsU0FBQTtBQUFBLEtBQUMsU0FBUyxHQUFFLEdBQUU7QUFBQyxrQkFBVSxPQUFPRCxZQUFTLGVBQWEsT0FBT0MsVUFBT0EsUUFBTyxVQUFRLEVBQUUsSUFBRSxjQUFZLE9BQU8sVUFBUSxPQUFPLE1BQUksT0FBTyxDQUFDLEtBQUcsSUFBRSxlQUFhLE9BQU8sYUFBVyxhQUFXLEtBQUcsTUFBTSw2QkFBMkIsRUFBRTtBQUFBLElBQUMsRUFBRUQsVUFBTSxXQUFVO0FBQUM7QUFBYSxVQUFJLElBQUUsU0FBUSxJQUFFO0FBQVUsYUFBTyxTQUFTLEdBQUUsR0FBRTtBQUFDLFlBQUksSUFBRSxFQUFFO0FBQVUsVUFBRSxVQUFRLFNBQVNFLElBQUU7QUFBQyxpQkFBTyxLQUFLLE9BQU8sRUFBRSxFQUFFQSxFQUFDLElBQUUsS0FBSyxNQUFNLEtBQUssTUFBTSxJQUFFLEtBQUcsQ0FBQyxJQUFFLEtBQUssTUFBTSxLQUFLLE1BQU0sSUFBRSxJQUFFLEtBQUdBLEtBQUUsRUFBRTtBQUFBLFFBQUM7QUFBRSxZQUFJLElBQUUsRUFBRTtBQUFJLFVBQUUsTUFBSSxTQUFTQyxJQUFFQyxJQUFFO0FBQUMsaUJBQU9ELEtBQUUsT0FBT0EsRUFBQyxHQUFFLEtBQUssT0FBTyxFQUFFLEVBQUVDLEVBQUMsTUFBSSxJQUFF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QUFVO0FBQUMsaUJBQU87QUFBQSxRQUFDLEdBQUVBLEdBQUUsVUFBUSxXQUFVO0FBQUMsaUJBQU0sRUFBRSxLQUFLLEdBQUcsU0FBUyxNQUFJO0FBQUEsUUFBRSxHQUFFQSxHQUFFLFNBQU8sU0FBU1QsSUFBRUMsSUFBRTtBQUFDLGNBQUlDLEtBQUUsRUFBRUYsRUFBQztBQUFFLGlCQUFPLEtBQUssUUFBUUMsRUFBQyxLQUFHQyxNQUFHQSxNQUFHLEtBQUssTUFBTUQsRUFBQztBQUFBLFFBQUMsR0FBRVEsR0FBRSxVQUFRLFNBQVNULElBQUVDLElBQUU7QUFBQyxpQkFBTyxFQUFFRCxFQUFDLElBQUUsS0FBSyxRQUFRQyxFQUFDO0FBQUEsUUFBQyxHQUFFUSxHQUFFLFdBQVMsU0FBU1QsSUFBRUMsSUFBRTtBQUFDLGlCQUFPLEtBQUssTUFBTUEsRUFBQyxJQUFFLEVBQUVELEVBQUM7QUFBQSxRQUFDLEdBQUVTLEdBQUUsS0FBRyxTQUFTVCxJQUFFQyxJQUFFQyxJQUFFO0FBQUMsaUJBQU8sRUFBRSxFQUFFRixFQUFDLElBQUUsS0FBS0MsRUFBQyxJQUFFLEtBQUssSUFBSUMsSUFBRUYsRUFBQztBQUFBLFFBQUMsR0FBRVMsR0FBRSxPQUFLLFdBQVU7QUFBQyxpQkFBTyxLQUFLLE1BQU0sS0FBSyxRQUFRLElBQUUsR0FBRztBQUFBLFFBQUMsR0FBRUEsR0FBRSxVQUFRLFdBQVU7QUFBQyxpQkFBTyxLQUFLLEdBQUcsUUFBUTtBQUFBLFFBQUMsR0FBRUEsR0FBRSxVQUFRLFNBQVNULElBQUVDLElBQUU7QUFBQyxjQUFJQyxLQUFFLE1BQUtDLEtBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRUYsRUFBQyxLQUFHQSxJQUFFUyxLQUFFLEVBQUUsRUFBRVYsRUFBQyxHQUFFVyxLQUFFLFNBQVNYLElBQUVDLElBQUU7QUFBQyxnQkFBSUcsS0FBRSxFQUFFLEVBQUVGLEdBQUUsS0FBRyxLQUFLLElBQUlBLEdBQUUsSUFBR0QsSUFBRUQsRUFBQyxJQUFFLElBQUksS0FBS0UsR0FBRSxJQUFHRCxJQUFFRCxFQUFDLEdB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QUFDLGtCQUFPLGlCQUFQLEVBQXVCLFNBQVMsS0FBSyxPQUFPO0FBQUEsWUFDN0MsNENBQUMsa0JBQU8sT0FBUCxFQUFhLFNBQVMsS0FBSyxPQUFPO0FBQUEsYUFDckM7QUFBQTtBQUFBLFFBUEc7QUFBQSxNQVNQLENBQ0Q7QUFBQTtBQUFBLEVBQ0g7QUFFSjsiLAogICJuYW1lcyI6IFsiZXhwb3J0cyIsICJtb2R1bGUiLCAidCIsICJlIiwgImkiLCAiciIsICJzIiwgImV4cG9ydHMiLCAibW9kdWxlIiwgInQiLCAiZSIsICJuIiwgInIiLCAiaSIsICJzIiwgInUiLCAiYSIsICJNIiwgIm0iLCAiZiIsICJsIiwgIiQiLCAieSIsICJ2IiwgImciLCAiRCIsICJvIiwgImQiLCAiYyIsICJoIiwgImV4cG9ydHMiLCAibW9kdWxlIiwgImUiLCAidCIsICJyIiwgImV4cG9ydHMiLCAibW9kdWxlIiwgImkiLCAibiIsICJmIiwgImUiLCAiZXhwb3J0cyIsICJtb2R1bGUiLCAidCIsICJpIiwgImUiLCAicyIsICJmIiwgIm4iLCAidSIsICJvIiwgInIiLCAiZXhwb3J0cyIsICJtb2R1bGUiLCAidCIsICJuIiwgImkiLCAibyIsICJyIiwgImUiLCAidSIsICJmIiwgInMiLCAiYSIsICJleHBvcnRzIiwgIm1vZHVsZSIsICJyIiwgImUiLCAidCIsICJvIiwgIm4iLCAiaSIsICJkIiwgImltcG9ydF9kYXlqcyIsICJNZXJpZGllbSIsICJXZWVrZGF5IiwgIk1vbnRoIiwgImRheWpzIiwgImRheWpzIiwgInF1YXJ0ZXJPZlllYXIiLCAiaW1wb3J0X2RheWpzIiwgImRheWpzIiwgIlBBVFRFUk4iLCAiTU9OVEhfTkFNRV9HUk9VUCIsICJEQVRFX0dST1VQIiwgIkRBVEVfVE9fR1JPVVAiLCAiWUVBUl9HUk9VUCIsICJQQVRURVJOIiwgIk1PTlRIX05BTUVfR1JPVVAiLCAiWUVBUl9HUk9VUCIsICJQQVRURVJOIiwgIk1PTlRIX05BTUVfR1JPVVAiLCAiUEFUVEVSTiIsICJZRUFSX0dST1VQIiwgInN0cmljdCIsICJQQVRURVJOIiwgIlBBVFRFUk4iLCAiU1RSSUNUX1BBVFRFUk4iLCAiaW1wbHlTaW1pbGFyRGF0ZSIsICJpbXBseVNpbWlsYXJUaW1lIiwgImFzc2lnblNpbWlsYXJEYXRlIiwgImFzc2lnblNpbWlsYXJUaW1lIiwgImFzc2lnblNpbWlsYXJEYXRlIiwgImltcGx5U2ltaWxhckRhdGUiLCAiaW1wb3J0X2RheWpzIiwgImRheWpzIiwgIlBBVFRFUk4iLCAiWUVBUl9OVU1CRVJfR1JPVVAiLCAiTU9OVEhfTlVNQkVSX0dST1VQIiwgIkRBVEVfTlVNQkVSX0dST1VQIiwgImNvbmZpZ3VyYXRpb24iLCAiaW1wb3J0X2RheWpzIiwgImltcG9ydF9kYXlqcyIsICJkYXlqcyIsICJhc3NpZ25TaW1pbGFyRGF0ZSIsICJhc3NpZ25TaW1pbGFyVGltZSIsICJpbXBseVNpbWlsYXJUaW1lIiwgImRheWpzIiwgIlBBVFRFUk4iLCAiZGF5anMiLCAiYXNzaWduU2ltaWxhckRhdGUiLCAiUEFUVEVSTiIsICJQQVRURVJOIiwgIlBSRUZJWF9HUk9VUCIsICJpbXBvcnRfZGF5anMiLCAiUEFUVEVSTiIsICJkYXlqcyIsICJQQVRURVJOIiwgIllFQVJfR1JPVVAiLCAiUEFUVEVSTiIsICJZRUFSX0dST1VQIiwgImNvbmZpZ3VyYXRpb24iLCAiY2FzdWFsIiwgImNhc3VhbCIsICJpbXBvcnRfZGF5anMiLCAiaW1wb3J0X3RpbWV6b25lIiwgImRheWpzIiwgImFkdmFuY2VkRm9ybWF0UGx1Z2luIiwgIndlZWtPZlllYXJQbHVnaW4iLCAidXRjUGx1Z2luIiwgInRpbWV6b25lUGx1Z2luIiwgInJlbGF0aXZlVGltZVBsdWdpbiJdCn0K
