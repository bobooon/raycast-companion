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
  static createRelativeFromReference(reference, fragments) {
    let date = (0, import_dayjs2.default)(reference.getDateWithAdjustedTimezone());
    for (const key in fragments) {
      date = date.add(fragments[key], key);
    }
    const components = new _ParsingComponents(reference);
    components.addTag("result/relativeDate");
    if (fragments["hour"] || fragments["minute"] || fragments["second"]) {
      components.addTag("result/relativeDateAndTime");
      assignSimilarTime(components, date);
      assignSimilarDate(components, date);
      components.assign("timezoneOffset", reference.getTimezoneOffset());
    } else {
      implySimilarTime(components, date);
      components.imply("timezoneOffset", reference.getTimezoneOffset());
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

// node_modules/chrono-node/dist/esm/utils/dates.js
function implySimilarDate2(component, target) {
  component.imply("day", target.getDate());
  component.imply("month", target.getMonth() + 1);
  component.imply("year", target.getFullYear());
}

// node_modules/chrono-node/dist/esm/common/refiners/ForwardDateRefiner.js
var ForwardDateRefiner = class {
  refine(context, results) {
    if (!context.option.forwardDate) {
      return results;
    }
    results.forEach((result) => {
      let refMoment = (0, import_dayjs6.default)(context.reference.getDateWithAdjustedTimezone());
      if (result.start.isOnlyTime() && context.reference.instant > result.start.date()) {
        const refDate = context.reference.getDateWithAdjustedTimezone();
        const refFollowingDay = new Date(refDate);
        refFollowingDay.setDate(refFollowingDay.getDate() + 1);
        implySimilarDate2(result.start, refFollowingDay);
        context.debug(() => {
          console.log(`${this.constructor.name} adjusted ${result} time from the ref date (${refDate}) to the following day (${refFollowingDay})`);
        });
        if (result.end && result.end.isOnlyTime()) {
          implySimilarDate2(result.end, refFollowingDay);
          if (result.start.date() > result.end.date()) {
            refFollowingDay.setDate(refFollowingDay.getDate() + 1);
            implySimilarDate2(result.end, refFollowingDay);
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
var import_dayjs9 = __toESM(require_dayjs_min(), 1);

// node_modules/chrono-node/dist/esm/common/casualReferences.js
var import_dayjs7 = __toESM(require_dayjs_min(), 1);
function now(reference) {
  const targetDate = (0, import_dayjs7.default)(reference.getDateWithAdjustedTimezone());
  const component = new ParsingComponents(reference, {});
  assignSimilarDate(component, targetDate);
  assignSimilarTime(component, targetDate);
  component.assign("timezoneOffset", reference.getTimezoneOffset());
  component.addTag("casualReference/now");
  return component;
}
function today(reference) {
  const targetDate = (0, import_dayjs7.default)(reference.getDateWithAdjustedTimezone());
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
  let targetDate = (0, import_dayjs7.default)(reference.getDateWithAdjustedTimezone());
  const component = new ParsingComponents(reference, {});
  targetDate = targetDate.add(nDays, "day");
  assignSimilarDate(component, targetDate);
  implySimilarTime(component, targetDate);
  return component;
}
function tonight(reference, implyHour = 22) {
  const targetDate = (0, import_dayjs7.default)(reference.getDateWithAdjustedTimezone());
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
  const targetDate = (0, import_dayjs7.default)(reference.getDateWithAdjustedTimezone());
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
var PATTERN9 = /(now|today|tonight|tomorrow|overmorrow|tmr|tmrw|yesterday|last\s*night)(?=\W|$)/i;
var ENCasualDateParser = class extends AbstractParserWithWordBoundaryChecking {
  innerPattern(context) {
    return PATTERN9;
  }
  innerExtract(context, match) {
    let targetDate = (0, import_dayjs9.default)(context.refDate);
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
var import_dayjs11 = __toESM(require_dayjs_min(), 1);
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
    let date = (0, import_dayjs11.default)(context.reference.instant);
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

// src/datetime.tsx
var import_dayjs12 = __toESM(require_dayjs_min());
var import_advancedFormat = __toESM(require_advancedFormat());
var import_weekOfYear = __toESM(require_weekOfYear());
var import_utc = __toESM(require_utc());
var import_timezone3 = __toESM(require_timezone());
var import_relativeTime = __toESM(require_relativeTime());
var import_jsx_runtime = require("react/jsx-runtime");
import_dayjs12.default.extend(import_advancedFormat.default);
import_dayjs12.default.extend(import_weekOfYear.default);
import_dayjs12.default.extend(import_utc.default);
import_dayjs12.default.extend(import_timezone3.default);
import_dayjs12.default.extend(import_relativeTime.default);
function handleConversion(input, timezone) {
  if (input.match(/^\d+$/)) input = new Date(parseInt(input, 10) * 1e3).toString();
  const parsedDate = parseDate(input);
  if (!parsedDate || parsedDate.toString() === "Invalid Date") return [];
  const date = (0, import_dayjs12.default)(parsedDate).tz(timezone);
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
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vbm9kZV9tb2R1bGVzL2RheWpzL3BsdWdpbi9xdWFydGVyT2ZZZWFyLmpzIiwgIi4uL25vZGVfbW9kdWxlcy9kYXlqcy9kYXlqcy5taW4uanMiLCAiLi4vbm9kZV9tb2R1bGVzL2RheWpzL3BsdWdpbi9hZHZhbmNlZEZvcm1hdC5qcyIsICIuLi9ub2RlX21vZHVsZXMvZGF5anMvcGx1Z2luL3dlZWtPZlllYXIuanMiLCAiLi4vbm9kZV9tb2R1bGVzL2RheWpzL3BsdWdpbi91dGMuanMiLCAiLi4vbm9kZV9tb2R1bGVzL2RheWpzL3BsdWdpbi90aW1lem9uZS5qcyIsICIuLi9ub2RlX21vZHVsZXMvZGF5anMvcGx1Z2luL3JlbGF0aXZlVGltZS5qcyIsICIuLi9zcmMvZGF0ZXRpbWUudHN4IiwgIi4uL25vZGVfbW9kdWxlcy9jaHJvbm8tbm9kZS9zcmMvcmVzdWx0cy50cyIsICIuLi9ub2RlX21vZHVsZXMvY2hyb25vLW5vZGUvc3JjL3R5cGVzLnRzIiwgIi4uL25vZGVfbW9kdWxlcy9jaHJvbm8tbm9kZS9zcmMvdXRpbHMvZGF5anMudHMiLCAiLi4vbm9kZV9tb2R1bGVzL2Nocm9uby1ub2RlL3NyYy90aW1lem9uZS50cyIsICIuLi9ub2RlX21vZHVsZXMvY2hyb25vLW5vZGUvc3JjL3V0aWxzL3BhdHRlcm4udHMiLCAiLi4vbm9kZV9tb2R1bGVzL2Nocm9uby1ub2RlL3NyYy9jYWxjdWxhdGlvbi95ZWFycy50cyIsICIuLi9ub2RlX21vZHVsZXMvY2hyb25vLW5vZGUvc3JjL2xvY2FsZXMvZW4vY29uc3RhbnRzLnRzIiwgIi4uL25vZGVfbW9kdWxlcy9jaHJvbm8tbm9kZS9zcmMvY29tbW9uL3BhcnNlcnMvQWJzdHJhY3RQYXJzZXJXaXRoV29yZEJvdW5kYXJ5LnRzIiwgIi4uL25vZGVfbW9kdWxlcy9jaHJvbm8tbm9kZS9zcmMvbG9jYWxlcy9lbi9wYXJzZXJzL0VOVGltZVVuaXRXaXRoaW5Gb3JtYXRQYXJzZXIudHMiLCAiLi4vbm9kZV9tb2R1bGVzL2Nocm9uby1ub2RlL3NyYy9sb2NhbGVzL2VuL3BhcnNlcnMvRU5Nb250aE5hbWVMaXR0bGVFbmRpYW5QYXJzZXIudHMiLCAiLi4vbm9kZV9tb2R1bGVzL2Nocm9uby1ub2RlL3NyYy9sb2NhbGVzL2VuL3BhcnNlcnMvRU5Nb250aE5hbWVNaWRkbGVFbmRpYW5QYXJzZXIudHMiLCAiLi4vbm9kZV9tb2R1bGVzL2Nocm9uby1ub2RlL3NyYy9sb2NhbGVzL2VuL3BhcnNlcnMvRU5Nb250aE5hbWVQYXJzZXIudHMiLCAiLi4vbm9kZV9tb2R1bGVzL2Nocm9uby1ub2RlL3NyYy9sb2NhbGVzL2VuL3BhcnNlcnMvRU5ZZWFyTW9udGhEYXlQYXJzZXIudHMiLCAiLi4vbm9kZV9tb2R1bGVzL2Nocm9uby1ub2RlL3NyYy9sb2NhbGVzL2VuL3BhcnNlcnMvRU5TbGFzaE1vbnRoRm9ybWF0UGFyc2VyLnRzIiwgIi4uL25vZGVfbW9kdWxlcy9jaHJvbm8tbm9kZS9zcmMvY29tbW9uL3BhcnNlcnMvQWJzdHJhY3RUaW1lRXhwcmVzc2lvblBhcnNlci50cyIsICIuLi9ub2RlX21vZHVsZXMvY2hyb25vLW5vZGUvc3JjL2xvY2FsZXMvZW4vcGFyc2Vycy9FTlRpbWVFeHByZXNzaW9uUGFyc2VyLnRzIiwgIi4uL25vZGVfbW9kdWxlcy9jaHJvbm8tbm9kZS9zcmMvdXRpbHMvdGltZXVuaXRzLnRzIiwgIi4uL25vZGVfbW9kdWxlcy9jaHJvbm8tbm9kZS9zcmMvbG9jYWxlcy9lbi9wYXJzZXJzL0VOVGltZVVuaXRBZ29Gb3JtYXRQYXJzZXIudHMiLCAiLi4vbm9kZV9tb2R1bGVzL2Nocm9uby1ub2RlL3NyYy9sb2NhbGVzL2VuL3BhcnNlcnMvRU5UaW1lVW5pdExhdGVyRm9ybWF0UGFyc2VyLnRzIiwgIi4uL25vZGVfbW9kdWxlcy9jaHJvbm8tbm9kZS9zcmMvY29tbW9uL2Fic3RyYWN0UmVmaW5lcnMudHMiLCAiLi4vbm9kZV9tb2R1bGVzL2Nocm9uby1ub2RlL3NyYy9jb21tb24vcmVmaW5lcnMvQWJzdHJhY3RNZXJnZURhdGVSYW5nZVJlZmluZXIudHMiLCAiLi4vbm9kZV9tb2R1bGVzL2Nocm9uby1ub2RlL3NyYy9sb2NhbGVzL2VuL3JlZmluZXJzL0VOTWVyZ2VEYXRlUmFuZ2VSZWZpbmVyLnRzIiwgIi4uL25vZGVfbW9kdWxlcy9jaHJvbm8tbm9kZS9zcmMvY2FsY3VsYXRpb24vbWVyZ2luZ0NhbGN1bGF0aW9uLnRzIiwgIi4uL25vZGVfbW9kdWxlcy9jaHJvbm8tbm9kZS9zcmMvY29tbW9uL3JlZmluZXJzL0Fic3RyYWN0TWVyZ2VEYXRlVGltZVJlZmluZXIudHMiLCAiLi4vbm9kZV9tb2R1bGVzL2Nocm9uby1ub2RlL3NyYy9sb2NhbGVzL2VuL3JlZmluZXJzL0VOTWVyZ2VEYXRlVGltZVJlZmluZXIudHMiLCAiLi4vbm9kZV9tb2R1bGVzL2Nocm9uby1ub2RlL3NyYy9jb21tb24vcmVmaW5lcnMvRXh0cmFjdFRpbWV6b25lQWJiclJlZmluZXIudHMiLCAiLi4vbm9kZV9tb2R1bGVzL2Nocm9uby1ub2RlL3NyYy9jb21tb24vcmVmaW5lcnMvRXh0cmFjdFRpbWV6b25lT2Zmc2V0UmVmaW5lci50cyIsICIuLi9ub2RlX21vZHVsZXMvY2hyb25vLW5vZGUvc3JjL2NvbW1vbi9yZWZpbmVycy9PdmVybGFwUmVtb3ZhbFJlZmluZXIudHMiLCAiLi4vbm9kZV9tb2R1bGVzL2Nocm9uby1ub2RlL3NyYy9jb21tb24vcmVmaW5lcnMvRm9yd2FyZERhdGVSZWZpbmVyLnRzIiwgIi4uL25vZGVfbW9kdWxlcy9jaHJvbm8tbm9kZS9zcmMvdXRpbHMvZGF0ZXMudHMiLCAiLi4vbm9kZV9tb2R1bGVzL2Nocm9uby1ub2RlL3NyYy9jb21tb24vcmVmaW5lcnMvVW5saWtlbHlGb3JtYXRGaWx0ZXIudHMiLCAiLi4vbm9kZV9tb2R1bGVzL2Nocm9uby1ub2RlL3NyYy9jb21tb24vcGFyc2Vycy9JU09Gb3JtYXRQYXJzZXIudHMiLCAiLi4vbm9kZV9tb2R1bGVzL2Nocm9uby1ub2RlL3NyYy9jb21tb24vcmVmaW5lcnMvTWVyZ2VXZWVrZGF5Q29tcG9uZW50UmVmaW5lci50cyIsICIuLi9ub2RlX21vZHVsZXMvY2hyb25vLW5vZGUvc3JjL2NvbmZpZ3VyYXRpb25zLnRzIiwgIi4uL25vZGVfbW9kdWxlcy9jaHJvbm8tbm9kZS9zcmMvbG9jYWxlcy9lbi9wYXJzZXJzL0VOQ2FzdWFsRGF0ZVBhcnNlci50cyIsICIuLi9ub2RlX21vZHVsZXMvY2hyb25vLW5vZGUvc3JjL2NvbW1vbi9jYXN1YWxSZWZlcmVuY2VzLnRzIiwgIi4uL25vZGVfbW9kdWxlcy9jaHJvbm8tbm9kZS9zcmMvbG9jYWxlcy9lbi9wYXJzZXJzL0VOQ2FzdWFsVGltZVBhcnNlci50cyIsICIuLi9ub2RlX21vZHVsZXMvY2hyb25vLW5vZGUvc3JjL2NvbW1vbi9jYWxjdWxhdGlvbi93ZWVrZGF5cy50cyIsICIuLi9ub2RlX21vZHVsZXMvY2hyb25vLW5vZGUvc3JjL2xvY2FsZXMvZW4vcGFyc2Vycy9FTldlZWtkYXlQYXJzZXIudHMiLCAiLi4vbm9kZV9tb2R1bGVzL2Nocm9uby1ub2RlL3NyYy9sb2NhbGVzL2VuL3BhcnNlcnMvRU5SZWxhdGl2ZURhdGVGb3JtYXRQYXJzZXIudHMiLCAiLi4vbm9kZV9tb2R1bGVzL2Nocm9uby1ub2RlL3NyYy9jb21tb24vcGFyc2Vycy9TbGFzaERhdGVGb3JtYXRQYXJzZXIudHMiLCAiLi4vbm9kZV9tb2R1bGVzL2Nocm9uby1ub2RlL3NyYy9sb2NhbGVzL2VuL3BhcnNlcnMvRU5UaW1lVW5pdENhc3VhbFJlbGF0aXZlRm9ybWF0UGFyc2VyLnRzIiwgIi4uL25vZGVfbW9kdWxlcy9jaHJvbm8tbm9kZS9zcmMvbG9jYWxlcy9lbi9yZWZpbmVycy9FTk1lcmdlUmVsYXRpdmVBZnRlckRhdGVSZWZpbmVyLnRzIiwgIi4uL25vZGVfbW9kdWxlcy9jaHJvbm8tbm9kZS9zcmMvbG9jYWxlcy9lbi9yZWZpbmVycy9FTk1lcmdlUmVsYXRpdmVGb2xsb3dCeURhdGVSZWZpbmVyLnRzIiwgIi4uL25vZGVfbW9kdWxlcy9jaHJvbm8tbm9kZS9zcmMvbG9jYWxlcy9lbi9yZWZpbmVycy9FTkV4dHJhY3RZZWFyU3VmZml4UmVmaW5lci50cyIsICIuLi9ub2RlX21vZHVsZXMvY2hyb25vLW5vZGUvc3JjL2xvY2FsZXMvZW4vcmVmaW5lcnMvRU5Vbmxpa2VseUZvcm1hdEZpbHRlci50cyIsICIuLi9ub2RlX21vZHVsZXMvY2hyb25vLW5vZGUvc3JjL2xvY2FsZXMvZW4vY29uZmlndXJhdGlvbi50cyIsICIuLi9ub2RlX21vZHVsZXMvY2hyb25vLW5vZGUvc3JjL2Nocm9uby50cyIsICIuLi9ub2RlX21vZHVsZXMvY2hyb25vLW5vZGUvc3JjL2xvY2FsZXMvZW4vaW5kZXgudHMiLCAiLi4vbm9kZV9tb2R1bGVzL2Nocm9uby1ub2RlL3NyYy9pbmRleC50cyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiIWZ1bmN0aW9uKHQsbil7XCJvYmplY3RcIj09dHlwZW9mIGV4cG9ydHMmJlwidW5kZWZpbmVkXCIhPXR5cGVvZiBtb2R1bGU/bW9kdWxlLmV4cG9ydHM9bigpOlwiZnVuY3Rpb25cIj09dHlwZW9mIGRlZmluZSYmZGVmaW5lLmFtZD9kZWZpbmUobik6KHQ9XCJ1bmRlZmluZWRcIiE9dHlwZW9mIGdsb2JhbFRoaXM/Z2xvYmFsVGhpczp0fHxzZWxmKS5kYXlqc19wbHVnaW5fcXVhcnRlck9mWWVhcj1uKCl9KHRoaXMsKGZ1bmN0aW9uKCl7XCJ1c2Ugc3RyaWN0XCI7dmFyIHQ9XCJtb250aFwiLG49XCJxdWFydGVyXCI7cmV0dXJuIGZ1bmN0aW9uKGUsaSl7dmFyIHI9aS5wcm90b3R5cGU7ci5xdWFydGVyPWZ1bmN0aW9uKHQpe3JldHVybiB0aGlzLiR1dGlscygpLnUodCk/TWF0aC5jZWlsKCh0aGlzLm1vbnRoKCkrMSkvMyk6dGhpcy5tb250aCh0aGlzLm1vbnRoKCklMyszKih0LTEpKX07dmFyIHM9ci5hZGQ7ci5hZGQ9ZnVuY3Rpb24oZSxpKXtyZXR1cm4gZT1OdW1iZXIoZSksdGhpcy4kdXRpbHMoKS5wKGkpPT09bj90aGlzLmFkZCgzKmUsdCk6cy5iaW5kKHRoaXMpKGUsaSl9O3ZhciB1PXIuc3RhcnRPZjtyLnN0YXJ0T2Y9ZnVuY3Rpb24oZSxpKXt2YXIgcj10aGlzLiR1dGlscygpLHM9ISFyLnUoaSl8fGk7aWYoci5wKGUpPT09bil7dmFyIG89dGhpcy5xdWFydGVyKCktMTtyZXR1cm4gcz90aGlzLm1vbnRoKDMqbykuc3RhcnRPZih0KS5zdGFydE9mKFwiZGF5XCIpOnRoaXMubW9udGgoMypvKzIpLmVuZE9mKHQpLmVuZE9mKFwiZGF5XCIpfXJldHVybiB1LmJpbmQodGhpcykoZSxpKX19fSkpOyIsICIhZnVuY3Rpb24odCxlKXtcIm9iamVjdFwiPT10eXBlb2YgZXhwb3J0cyYmXCJ1bmRlZmluZWRcIiE9dHlwZW9mIG1vZHVsZT9tb2R1bGUuZXhwb3J0cz1lKCk6XCJmdW5jdGlvblwiPT10eXBlb2YgZGVmaW5lJiZkZWZpbmUuYW1kP2RlZmluZShlKToodD1cInVuZGVmaW5lZFwiIT10eXBlb2YgZ2xvYmFsVGhpcz9nbG9iYWxUaGlzOnR8fHNlbGYpLmRheWpzPWUoKX0odGhpcywoZnVuY3Rpb24oKXtcInVzZSBzdHJpY3RcIjt2YXIgdD0xZTMsZT02ZTQsbj0zNmU1LHI9XCJtaWxsaXNlY29uZFwiLGk9XCJzZWNvbmRcIixzPVwibWludXRlXCIsdT1cImhvdXJcIixhPVwiZGF5XCIsbz1cIndlZWtcIixjPVwibW9udGhcIixmPVwicXVhcnRlclwiLGg9XCJ5ZWFyXCIsZD1cImRhdGVcIixsPVwiSW52YWxpZCBEYXRlXCIsJD0vXihcXGR7NH0pWy0vXT8oXFxkezEsMn0pP1stL10/KFxcZHswLDJ9KVtUdFxcc10qKFxcZHsxLDJ9KT86PyhcXGR7MSwyfSk/Oj8oXFxkezEsMn0pP1suOl0/KFxcZCspPyQvLHk9L1xcWyhbXlxcXV0rKV18WXsxLDR9fE17MSw0fXxEezEsMn18ZHsxLDR9fEh7MSwyfXxoezEsMn18YXxBfG17MSwyfXxzezEsMn18WnsxLDJ9fFNTUy9nLE09e25hbWU6XCJlblwiLHdlZWtkYXlzOlwiU3VuZGF5X01vbmRheV9UdWVzZGF5X1dlZG5lc2RheV9UaHVyc2RheV9GcmlkYXlfU2F0dXJkYXlcIi5zcGxpdChcIl9cIiksbW9udGhzOlwiSmFudWFyeV9GZWJydWFyeV9NYXJjaF9BcHJpbF9NYXlfSnVuZV9KdWx5X0F1Z3VzdF9TZXB0ZW1iZXJfT2N0b2Jlcl9Ob3ZlbWJlcl9EZWNlbWJlclwiLnNwbGl0KFwiX1wiKSxvcmRpbmFsOmZ1bmN0aW9uKHQpe3ZhciBlPVtcInRoXCIsXCJzdFwiLFwibmRcIixcInJkXCJdLG49dCUxMDA7cmV0dXJuXCJbXCIrdCsoZVsobi0yMCklMTBdfHxlW25dfHxlWzBdKStcIl1cIn19LG09ZnVuY3Rpb24odCxlLG4pe3ZhciByPVN0cmluZyh0KTtyZXR1cm4hcnx8ci5sZW5ndGg+PWU/dDpcIlwiK0FycmF5KGUrMS1yLmxlbmd0aCkuam9pbihuKSt0fSx2PXtzOm0sejpmdW5jdGlvbih0KXt2YXIgZT0tdC51dGNPZmZzZXQoKSxuPU1hdGguYWJzKGUpLHI9TWF0aC5mbG9vcihuLzYwKSxpPW4lNjA7cmV0dXJuKGU8PTA/XCIrXCI6XCItXCIpK20ociwyLFwiMFwiKStcIjpcIittKGksMixcIjBcIil9LG06ZnVuY3Rpb24gdChlLG4pe2lmKGUuZGF0ZSgpPG4uZGF0ZSgpKXJldHVybi10KG4sZSk7dmFyIHI9MTIqKG4ueWVhcigpLWUueWVhcigpKSsobi5tb250aCgpLWUubW9udGgoKSksaT1lLmNsb25lKCkuYWRkKHIsYykscz1uLWk8MCx1PWUuY2xvbmUoKS5hZGQocisocz8tMToxKSxjKTtyZXR1cm4rKC0ocisobi1pKS8ocz9pLXU6dS1pKSl8fDApfSxhOmZ1bmN0aW9uKHQpe3JldHVybiB0PDA/TWF0aC5jZWlsKHQpfHwwOk1hdGguZmxvb3IodCl9LHA6ZnVuY3Rpb24odCl7cmV0dXJue006Yyx5OmgsdzpvLGQ6YSxEOmQsaDp1LG06cyxzOmksbXM6cixROmZ9W3RdfHxTdHJpbmcodHx8XCJcIikudG9Mb3dlckNhc2UoKS5yZXBsYWNlKC9zJC8sXCJcIil9LHU6ZnVuY3Rpb24odCl7cmV0dXJuIHZvaWQgMD09PXR9fSxnPVwiZW5cIixEPXt9O0RbZ109TTt2YXIgcD1cIiRpc0RheWpzT2JqZWN0XCIsUz1mdW5jdGlvbih0KXtyZXR1cm4gdCBpbnN0YW5jZW9mIF98fCEoIXR8fCF0W3BdKX0sdz1mdW5jdGlvbiB0KGUsbixyKXt2YXIgaTtpZighZSlyZXR1cm4gZztpZihcInN0cmluZ1wiPT10eXBlb2YgZSl7dmFyIHM9ZS50b0xvd2VyQ2FzZSgpO0Rbc10mJihpPXMpLG4mJihEW3NdPW4saT1zKTt2YXIgdT1lLnNwbGl0KFwiLVwiKTtpZighaSYmdS5sZW5ndGg+MSlyZXR1cm4gdCh1WzBdKX1lbHNle3ZhciBhPWUubmFtZTtEW2FdPWUsaT1hfXJldHVybiFyJiZpJiYoZz1pKSxpfHwhciYmZ30sTz1mdW5jdGlvbih0LGUpe2lmKFModCkpcmV0dXJuIHQuY2xvbmUoKTt2YXIgbj1cIm9iamVjdFwiPT10eXBlb2YgZT9lOnt9O3JldHVybiBuLmRhdGU9dCxuLmFyZ3M9YXJndW1lbnRzLG5ldyBfKG4pfSxiPXY7Yi5sPXcsYi5pPVMsYi53PWZ1bmN0aW9uKHQsZSl7cmV0dXJuIE8odCx7bG9jYWxlOmUuJEwsdXRjOmUuJHUseDplLiR4LCRvZmZzZXQ6ZS4kb2Zmc2V0fSl9O3ZhciBfPWZ1bmN0aW9uKCl7ZnVuY3Rpb24gTSh0KXt0aGlzLiRMPXcodC5sb2NhbGUsbnVsbCwhMCksdGhpcy5wYXJzZSh0KSx0aGlzLiR4PXRoaXMuJHh8fHQueHx8e30sdGhpc1twXT0hMH12YXIgbT1NLnByb3RvdHlwZTtyZXR1cm4gbS5wYXJzZT1mdW5jdGlvbih0KXt0aGlzLiRkPWZ1bmN0aW9uKHQpe3ZhciBlPXQuZGF0ZSxuPXQudXRjO2lmKG51bGw9PT1lKXJldHVybiBuZXcgRGF0ZShOYU4pO2lmKGIudShlKSlyZXR1cm4gbmV3IERhdGU7aWYoZSBpbnN0YW5jZW9mIERhdGUpcmV0dXJuIG5ldyBEYXRlKGUpO2lmKFwic3RyaW5nXCI9PXR5cGVvZiBlJiYhL1okL2kudGVzdChlKSl7dmFyIHI9ZS5tYXRjaCgkKTtpZihyKXt2YXIgaT1yWzJdLTF8fDAscz0ocls3XXx8XCIwXCIpLnN1YnN0cmluZygwLDMpO3JldHVybiBuP25ldyBEYXRlKERhdGUuVVRDKHJbMV0saSxyWzNdfHwxLHJbNF18fDAscls1XXx8MCxyWzZdfHwwLHMpKTpuZXcgRGF0ZShyWzFdLGksclszXXx8MSxyWzRdfHwwLHJbNV18fDAscls2XXx8MCxzKX19cmV0dXJuIG5ldyBEYXRlKGUpfSh0KSx0aGlzLmluaXQoKX0sbS5pbml0PWZ1bmN0aW9uKCl7dmFyIHQ9dGhpcy4kZDt0aGlzLiR5PXQuZ2V0RnVsbFllYXIoKSx0aGlzLiRNPXQuZ2V0TW9udGgoKSx0aGlzLiREPXQuZ2V0RGF0ZSgpLHRoaXMuJFc9dC5nZXREYXkoKSx0aGlzLiRIPXQuZ2V0SG91cnMoKSx0aGlzLiRtPXQuZ2V0TWludXRlcygpLHRoaXMuJHM9dC5nZXRTZWNvbmRzKCksdGhpcy4kbXM9dC5nZXRNaWxsaXNlY29uZHMoKX0sbS4kdXRpbHM9ZnVuY3Rpb24oKXtyZXR1cm4gYn0sbS5pc1ZhbGlkPWZ1bmN0aW9uKCl7cmV0dXJuISh0aGlzLiRkLnRvU3RyaW5nKCk9PT1sKX0sbS5pc1NhbWU9ZnVuY3Rpb24odCxlKXt2YXIgbj1PKHQpO3JldHVybiB0aGlzLnN0YXJ0T2YoZSk8PW4mJm48PXRoaXMuZW5kT2YoZSl9LG0uaXNBZnRlcj1mdW5jdGlvbih0LGUpe3JldHVybiBPKHQpPHRoaXMuc3RhcnRPZihlKX0sbS5pc0JlZm9yZT1mdW5jdGlvbih0LGUpe3JldHVybiB0aGlzLmVuZE9mKGUpPE8odCl9LG0uJGc9ZnVuY3Rpb24odCxlLG4pe3JldHVybiBiLnUodCk/dGhpc1tlXTp0aGlzLnNldChuLHQpfSxtLnVuaXg9ZnVuY3Rpb24oKXtyZXR1cm4gTWF0aC5mbG9vcih0aGlzLnZhbHVlT2YoKS8xZTMpfSxtLnZhbHVlT2Y9ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy4kZC5nZXRUaW1lKCl9LG0uc3RhcnRPZj1mdW5jdGlvbih0LGUpe3ZhciBuPXRoaXMscj0hIWIudShlKXx8ZSxmPWIucCh0KSxsPWZ1bmN0aW9uKHQsZSl7dmFyIGk9Yi53KG4uJHU/RGF0ZS5VVEMobi4keSxlLHQpOm5ldyBEYXRlKG4uJHksZSx0KSxuKTtyZXR1cm4gcj9pOmkuZW5kT2YoYSl9LCQ9ZnVuY3Rpb24odCxlKXtyZXR1cm4gYi53KG4udG9EYXRlKClbdF0uYXBwbHkobi50b0RhdGUoXCJzXCIpLChyP1swLDAsMCwwXTpbMjMsNTksNTksOTk5XSkuc2xpY2UoZSkpLG4pfSx5PXRoaXMuJFcsTT10aGlzLiRNLG09dGhpcy4kRCx2PVwic2V0XCIrKHRoaXMuJHU/XCJVVENcIjpcIlwiKTtzd2l0Y2goZil7Y2FzZSBoOnJldHVybiByP2woMSwwKTpsKDMxLDExKTtjYXNlIGM6cmV0dXJuIHI/bCgxLE0pOmwoMCxNKzEpO2Nhc2Ugbzp2YXIgZz10aGlzLiRsb2NhbGUoKS53ZWVrU3RhcnR8fDAsRD0oeTxnP3krNzp5KS1nO3JldHVybiBsKHI/bS1EOm0rKDYtRCksTSk7Y2FzZSBhOmNhc2UgZDpyZXR1cm4gJCh2K1wiSG91cnNcIiwwKTtjYXNlIHU6cmV0dXJuICQoditcIk1pbnV0ZXNcIiwxKTtjYXNlIHM6cmV0dXJuICQoditcIlNlY29uZHNcIiwyKTtjYXNlIGk6cmV0dXJuICQoditcIk1pbGxpc2Vjb25kc1wiLDMpO2RlZmF1bHQ6cmV0dXJuIHRoaXMuY2xvbmUoKX19LG0uZW5kT2Y9ZnVuY3Rpb24odCl7cmV0dXJuIHRoaXMuc3RhcnRPZih0LCExKX0sbS4kc2V0PWZ1bmN0aW9uKHQsZSl7dmFyIG4sbz1iLnAodCksZj1cInNldFwiKyh0aGlzLiR1P1wiVVRDXCI6XCJcIiksbD0obj17fSxuW2FdPWYrXCJEYXRlXCIsbltkXT1mK1wiRGF0ZVwiLG5bY109ZitcIk1vbnRoXCIsbltoXT1mK1wiRnVsbFllYXJcIixuW3VdPWYrXCJIb3Vyc1wiLG5bc109ZitcIk1pbnV0ZXNcIixuW2ldPWYrXCJTZWNvbmRzXCIsbltyXT1mK1wiTWlsbGlzZWNvbmRzXCIsbilbb10sJD1vPT09YT90aGlzLiREKyhlLXRoaXMuJFcpOmU7aWYobz09PWN8fG89PT1oKXt2YXIgeT10aGlzLmNsb25lKCkuc2V0KGQsMSk7eS4kZFtsXSgkKSx5LmluaXQoKSx0aGlzLiRkPXkuc2V0KGQsTWF0aC5taW4odGhpcy4kRCx5LmRheXNJbk1vbnRoKCkpKS4kZH1lbHNlIGwmJnRoaXMuJGRbbF0oJCk7cmV0dXJuIHRoaXMuaW5pdCgpLHRoaXN9LG0uc2V0PWZ1bmN0aW9uKHQsZSl7cmV0dXJuIHRoaXMuY2xvbmUoKS4kc2V0KHQsZSl9LG0uZ2V0PWZ1bmN0aW9uKHQpe3JldHVybiB0aGlzW2IucCh0KV0oKX0sbS5hZGQ9ZnVuY3Rpb24ocixmKXt2YXIgZCxsPXRoaXM7cj1OdW1iZXIocik7dmFyICQ9Yi5wKGYpLHk9ZnVuY3Rpb24odCl7dmFyIGU9TyhsKTtyZXR1cm4gYi53KGUuZGF0ZShlLmRhdGUoKStNYXRoLnJvdW5kKHQqcikpLGwpfTtpZigkPT09YylyZXR1cm4gdGhpcy5zZXQoYyx0aGlzLiRNK3IpO2lmKCQ9PT1oKXJldHVybiB0aGlzLnNldChoLHRoaXMuJHkrcik7aWYoJD09PWEpcmV0dXJuIHkoMSk7aWYoJD09PW8pcmV0dXJuIHkoNyk7dmFyIE09KGQ9e30sZFtzXT1lLGRbdV09bixkW2ldPXQsZClbJF18fDEsbT10aGlzLiRkLmdldFRpbWUoKStyKk07cmV0dXJuIGIudyhtLHRoaXMpfSxtLnN1YnRyYWN0PWZ1bmN0aW9uKHQsZSl7cmV0dXJuIHRoaXMuYWRkKC0xKnQsZSl9LG0uZm9ybWF0PWZ1bmN0aW9uKHQpe3ZhciBlPXRoaXMsbj10aGlzLiRsb2NhbGUoKTtpZighdGhpcy5pc1ZhbGlkKCkpcmV0dXJuIG4uaW52YWxpZERhdGV8fGw7dmFyIHI9dHx8XCJZWVlZLU1NLUREVEhIOm1tOnNzWlwiLGk9Yi56KHRoaXMpLHM9dGhpcy4kSCx1PXRoaXMuJG0sYT10aGlzLiRNLG89bi53ZWVrZGF5cyxjPW4ubW9udGhzLGY9bi5tZXJpZGllbSxoPWZ1bmN0aW9uKHQsbixpLHMpe3JldHVybiB0JiYodFtuXXx8dChlLHIpKXx8aVtuXS5zbGljZSgwLHMpfSxkPWZ1bmN0aW9uKHQpe3JldHVybiBiLnMocyUxMnx8MTIsdCxcIjBcIil9LCQ9Znx8ZnVuY3Rpb24odCxlLG4pe3ZhciByPXQ8MTI/XCJBTVwiOlwiUE1cIjtyZXR1cm4gbj9yLnRvTG93ZXJDYXNlKCk6cn07cmV0dXJuIHIucmVwbGFjZSh5LChmdW5jdGlvbih0LHIpe3JldHVybiByfHxmdW5jdGlvbih0KXtzd2l0Y2godCl7Y2FzZVwiWVlcIjpyZXR1cm4gU3RyaW5nKGUuJHkpLnNsaWNlKC0yKTtjYXNlXCJZWVlZXCI6cmV0dXJuIGIucyhlLiR5LDQsXCIwXCIpO2Nhc2VcIk1cIjpyZXR1cm4gYSsxO2Nhc2VcIk1NXCI6cmV0dXJuIGIucyhhKzEsMixcIjBcIik7Y2FzZVwiTU1NXCI6cmV0dXJuIGgobi5tb250aHNTaG9ydCxhLGMsMyk7Y2FzZVwiTU1NTVwiOnJldHVybiBoKGMsYSk7Y2FzZVwiRFwiOnJldHVybiBlLiREO2Nhc2VcIkREXCI6cmV0dXJuIGIucyhlLiRELDIsXCIwXCIpO2Nhc2VcImRcIjpyZXR1cm4gU3RyaW5nKGUuJFcpO2Nhc2VcImRkXCI6cmV0dXJuIGgobi53ZWVrZGF5c01pbixlLiRXLG8sMik7Y2FzZVwiZGRkXCI6cmV0dXJuIGgobi53ZWVrZGF5c1Nob3J0LGUuJFcsbywzKTtjYXNlXCJkZGRkXCI6cmV0dXJuIG9bZS4kV107Y2FzZVwiSFwiOnJldHVybiBTdHJpbmcocyk7Y2FzZVwiSEhcIjpyZXR1cm4gYi5zKHMsMixcIjBcIik7Y2FzZVwiaFwiOnJldHVybiBkKDEpO2Nhc2VcImhoXCI6cmV0dXJuIGQoMik7Y2FzZVwiYVwiOnJldHVybiAkKHMsdSwhMCk7Y2FzZVwiQVwiOnJldHVybiAkKHMsdSwhMSk7Y2FzZVwibVwiOnJldHVybiBTdHJpbmcodSk7Y2FzZVwibW1cIjpyZXR1cm4gYi5zKHUsMixcIjBcIik7Y2FzZVwic1wiOnJldHVybiBTdHJpbmcoZS4kcyk7Y2FzZVwic3NcIjpyZXR1cm4gYi5zKGUuJHMsMixcIjBcIik7Y2FzZVwiU1NTXCI6cmV0dXJuIGIucyhlLiRtcywzLFwiMFwiKTtjYXNlXCJaXCI6cmV0dXJuIGl9cmV0dXJuIG51bGx9KHQpfHxpLnJlcGxhY2UoXCI6XCIsXCJcIil9KSl9LG0udXRjT2Zmc2V0PWZ1bmN0aW9uKCl7cmV0dXJuIDE1Ki1NYXRoLnJvdW5kKHRoaXMuJGQuZ2V0VGltZXpvbmVPZmZzZXQoKS8xNSl9LG0uZGlmZj1mdW5jdGlvbihyLGQsbCl7dmFyICQseT10aGlzLE09Yi5wKGQpLG09TyhyKSx2PShtLnV0Y09mZnNldCgpLXRoaXMudXRjT2Zmc2V0KCkpKmUsZz10aGlzLW0sRD1mdW5jdGlvbigpe3JldHVybiBiLm0oeSxtKX07c3dpdGNoKE0pe2Nhc2UgaDokPUQoKS8xMjticmVhaztjYXNlIGM6JD1EKCk7YnJlYWs7Y2FzZSBmOiQ9RCgpLzM7YnJlYWs7Y2FzZSBvOiQ9KGctdikvNjA0OGU1O2JyZWFrO2Nhc2UgYTokPShnLXYpLzg2NGU1O2JyZWFrO2Nhc2UgdTokPWcvbjticmVhaztjYXNlIHM6JD1nL2U7YnJlYWs7Y2FzZSBpOiQ9Zy90O2JyZWFrO2RlZmF1bHQ6JD1nfXJldHVybiBsPyQ6Yi5hKCQpfSxtLmRheXNJbk1vbnRoPWZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuZW5kT2YoYykuJER9LG0uJGxvY2FsZT1mdW5jdGlvbigpe3JldHVybiBEW3RoaXMuJExdfSxtLmxvY2FsZT1mdW5jdGlvbih0LGUpe2lmKCF0KXJldHVybiB0aGlzLiRMO3ZhciBuPXRoaXMuY2xvbmUoKSxyPXcodCxlLCEwKTtyZXR1cm4gciYmKG4uJEw9ciksbn0sbS5jbG9uZT1mdW5jdGlvbigpe3JldHVybiBiLncodGhpcy4kZCx0aGlzKX0sbS50b0RhdGU9ZnVuY3Rpb24oKXtyZXR1cm4gbmV3IERhdGUodGhpcy52YWx1ZU9mKCkpfSxtLnRvSlNPTj1mdW5jdGlvbigpe3JldHVybiB0aGlzLmlzVmFsaWQoKT90aGlzLnRvSVNPU3RyaW5nKCk6bnVsbH0sbS50b0lTT1N0cmluZz1mdW5jdGlvbigpe3JldHVybiB0aGlzLiRkLnRvSVNPU3RyaW5nKCl9LG0udG9TdHJpbmc9ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy4kZC50b1VUQ1N0cmluZygpfSxNfSgpLGs9Xy5wcm90b3R5cGU7cmV0dXJuIE8ucHJvdG90eXBlPWssW1tcIiRtc1wiLHJdLFtcIiRzXCIsaV0sW1wiJG1cIixzXSxbXCIkSFwiLHVdLFtcIiRXXCIsYV0sW1wiJE1cIixjXSxbXCIkeVwiLGhdLFtcIiREXCIsZF1dLmZvckVhY2goKGZ1bmN0aW9uKHQpe2tbdFsxXV09ZnVuY3Rpb24oZSl7cmV0dXJuIHRoaXMuJGcoZSx0WzBdLHRbMV0pfX0pKSxPLmV4dGVuZD1mdW5jdGlvbih0LGUpe3JldHVybiB0LiRpfHwodChlLF8sTyksdC4kaT0hMCksT30sTy5sb2NhbGU9dyxPLmlzRGF5anM9UyxPLnVuaXg9ZnVuY3Rpb24odCl7cmV0dXJuIE8oMWUzKnQpfSxPLmVuPURbZ10sTy5Mcz1ELE8ucD17fSxPfSkpOyIsICIhZnVuY3Rpb24oZSx0KXtcIm9iamVjdFwiPT10eXBlb2YgZXhwb3J0cyYmXCJ1bmRlZmluZWRcIiE9dHlwZW9mIG1vZHVsZT9tb2R1bGUuZXhwb3J0cz10KCk6XCJmdW5jdGlvblwiPT10eXBlb2YgZGVmaW5lJiZkZWZpbmUuYW1kP2RlZmluZSh0KTooZT1cInVuZGVmaW5lZFwiIT10eXBlb2YgZ2xvYmFsVGhpcz9nbG9iYWxUaGlzOmV8fHNlbGYpLmRheWpzX3BsdWdpbl9hZHZhbmNlZEZvcm1hdD10KCl9KHRoaXMsKGZ1bmN0aW9uKCl7XCJ1c2Ugc3RyaWN0XCI7cmV0dXJuIGZ1bmN0aW9uKGUsdCl7dmFyIHI9dC5wcm90b3R5cGUsbj1yLmZvcm1hdDtyLmZvcm1hdD1mdW5jdGlvbihlKXt2YXIgdD10aGlzLHI9dGhpcy4kbG9jYWxlKCk7aWYoIXRoaXMuaXNWYWxpZCgpKXJldHVybiBuLmJpbmQodGhpcykoZSk7dmFyIHM9dGhpcy4kdXRpbHMoKSxhPShlfHxcIllZWVktTU0tRERUSEg6bW06c3NaXCIpLnJlcGxhY2UoL1xcWyhbXlxcXV0rKV18UXx3b3x3d3x3fFdXfFd8enp6fHp8Z2dnZ3xHR0dHfERvfFh8eHxrezEsMn18Uy9nLChmdW5jdGlvbihlKXtzd2l0Y2goZSl7Y2FzZVwiUVwiOnJldHVybiBNYXRoLmNlaWwoKHQuJE0rMSkvMyk7Y2FzZVwiRG9cIjpyZXR1cm4gci5vcmRpbmFsKHQuJEQpO2Nhc2VcImdnZ2dcIjpyZXR1cm4gdC53ZWVrWWVhcigpO2Nhc2VcIkdHR0dcIjpyZXR1cm4gdC5pc29XZWVrWWVhcigpO2Nhc2VcIndvXCI6cmV0dXJuIHIub3JkaW5hbCh0LndlZWsoKSxcIldcIik7Y2FzZVwid1wiOmNhc2VcInd3XCI6cmV0dXJuIHMucyh0LndlZWsoKSxcIndcIj09PWU/MToyLFwiMFwiKTtjYXNlXCJXXCI6Y2FzZVwiV1dcIjpyZXR1cm4gcy5zKHQuaXNvV2VlaygpLFwiV1wiPT09ZT8xOjIsXCIwXCIpO2Nhc2VcImtcIjpjYXNlXCJra1wiOnJldHVybiBzLnMoU3RyaW5nKDA9PT10LiRIPzI0OnQuJEgpLFwia1wiPT09ZT8xOjIsXCIwXCIpO2Nhc2VcIlhcIjpyZXR1cm4gTWF0aC5mbG9vcih0LiRkLmdldFRpbWUoKS8xZTMpO2Nhc2VcInhcIjpyZXR1cm4gdC4kZC5nZXRUaW1lKCk7Y2FzZVwielwiOnJldHVyblwiW1wiK3Qub2Zmc2V0TmFtZSgpK1wiXVwiO2Nhc2VcInp6elwiOnJldHVyblwiW1wiK3Qub2Zmc2V0TmFtZShcImxvbmdcIikrXCJdXCI7ZGVmYXVsdDpyZXR1cm4gZX19KSk7cmV0dXJuIG4uYmluZCh0aGlzKShhKX19fSkpOyIsICIhZnVuY3Rpb24oZSx0KXtcIm9iamVjdFwiPT10eXBlb2YgZXhwb3J0cyYmXCJ1bmRlZmluZWRcIiE9dHlwZW9mIG1vZHVsZT9tb2R1bGUuZXhwb3J0cz10KCk6XCJmdW5jdGlvblwiPT10eXBlb2YgZGVmaW5lJiZkZWZpbmUuYW1kP2RlZmluZSh0KTooZT1cInVuZGVmaW5lZFwiIT10eXBlb2YgZ2xvYmFsVGhpcz9nbG9iYWxUaGlzOmV8fHNlbGYpLmRheWpzX3BsdWdpbl93ZWVrT2ZZZWFyPXQoKX0odGhpcywoZnVuY3Rpb24oKXtcInVzZSBzdHJpY3RcIjt2YXIgZT1cIndlZWtcIix0PVwieWVhclwiO3JldHVybiBmdW5jdGlvbihpLG4scil7dmFyIGY9bi5wcm90b3R5cGU7Zi53ZWVrPWZ1bmN0aW9uKGkpe2lmKHZvaWQgMD09PWkmJihpPW51bGwpLG51bGwhPT1pKXJldHVybiB0aGlzLmFkZCg3KihpLXRoaXMud2VlaygpKSxcImRheVwiKTt2YXIgbj10aGlzLiRsb2NhbGUoKS55ZWFyU3RhcnR8fDE7aWYoMTE9PT10aGlzLm1vbnRoKCkmJnRoaXMuZGF0ZSgpPjI1KXt2YXIgZj1yKHRoaXMpLnN0YXJ0T2YodCkuYWRkKDEsdCkuZGF0ZShuKSxzPXIodGhpcykuZW5kT2YoZSk7aWYoZi5pc0JlZm9yZShzKSlyZXR1cm4gMX12YXIgYT1yKHRoaXMpLnN0YXJ0T2YodCkuZGF0ZShuKS5zdGFydE9mKGUpLnN1YnRyYWN0KDEsXCJtaWxsaXNlY29uZFwiKSxvPXRoaXMuZGlmZihhLGUsITApO3JldHVybiBvPDA/cih0aGlzKS5zdGFydE9mKFwid2Vla1wiKS53ZWVrKCk6TWF0aC5jZWlsKG8pfSxmLndlZWtzPWZ1bmN0aW9uKGUpe3JldHVybiB2b2lkIDA9PT1lJiYoZT1udWxsKSx0aGlzLndlZWsoZSl9fX0pKTsiLCAiIWZ1bmN0aW9uKHQsaSl7XCJvYmplY3RcIj09dHlwZW9mIGV4cG9ydHMmJlwidW5kZWZpbmVkXCIhPXR5cGVvZiBtb2R1bGU/bW9kdWxlLmV4cG9ydHM9aSgpOlwiZnVuY3Rpb25cIj09dHlwZW9mIGRlZmluZSYmZGVmaW5lLmFtZD9kZWZpbmUoaSk6KHQ9XCJ1bmRlZmluZWRcIiE9dHlwZW9mIGdsb2JhbFRoaXM/Z2xvYmFsVGhpczp0fHxzZWxmKS5kYXlqc19wbHVnaW5fdXRjPWkoKX0odGhpcywoZnVuY3Rpb24oKXtcInVzZSBzdHJpY3RcIjt2YXIgdD1cIm1pbnV0ZVwiLGk9L1srLV1cXGRcXGQoPzo6P1xcZFxcZCk/L2csZT0vKFsrLV18XFxkXFxkKS9nO3JldHVybiBmdW5jdGlvbihzLGYsbil7dmFyIHU9Zi5wcm90b3R5cGU7bi51dGM9ZnVuY3Rpb24odCl7dmFyIGk9e2RhdGU6dCx1dGM6ITAsYXJnczphcmd1bWVudHN9O3JldHVybiBuZXcgZihpKX0sdS51dGM9ZnVuY3Rpb24oaSl7dmFyIGU9bih0aGlzLnRvRGF0ZSgpLHtsb2NhbGU6dGhpcy4kTCx1dGM6ITB9KTtyZXR1cm4gaT9lLmFkZCh0aGlzLnV0Y09mZnNldCgpLHQpOmV9LHUubG9jYWw9ZnVuY3Rpb24oKXtyZXR1cm4gbih0aGlzLnRvRGF0ZSgpLHtsb2NhbGU6dGhpcy4kTCx1dGM6ITF9KX07dmFyIG89dS5wYXJzZTt1LnBhcnNlPWZ1bmN0aW9uKHQpe3QudXRjJiYodGhpcy4kdT0hMCksdGhpcy4kdXRpbHMoKS51KHQuJG9mZnNldCl8fCh0aGlzLiRvZmZzZXQ9dC4kb2Zmc2V0KSxvLmNhbGwodGhpcyx0KX07dmFyIHI9dS5pbml0O3UuaW5pdD1mdW5jdGlvbigpe2lmKHRoaXMuJHUpe3ZhciB0PXRoaXMuJGQ7dGhpcy4keT10LmdldFVUQ0Z1bGxZZWFyKCksdGhpcy4kTT10LmdldFVUQ01vbnRoKCksdGhpcy4kRD10LmdldFVUQ0RhdGUoKSx0aGlzLiRXPXQuZ2V0VVRDRGF5KCksdGhpcy4kSD10LmdldFVUQ0hvdXJzKCksdGhpcy4kbT10LmdldFVUQ01pbnV0ZXMoKSx0aGlzLiRzPXQuZ2V0VVRDU2Vjb25kcygpLHRoaXMuJG1zPXQuZ2V0VVRDTWlsbGlzZWNvbmRzKCl9ZWxzZSByLmNhbGwodGhpcyl9O3ZhciBhPXUudXRjT2Zmc2V0O3UudXRjT2Zmc2V0PWZ1bmN0aW9uKHMsZil7dmFyIG49dGhpcy4kdXRpbHMoKS51O2lmKG4ocykpcmV0dXJuIHRoaXMuJHU/MDpuKHRoaXMuJG9mZnNldCk/YS5jYWxsKHRoaXMpOnRoaXMuJG9mZnNldDtpZihcInN0cmluZ1wiPT10eXBlb2YgcyYmKHM9ZnVuY3Rpb24odCl7dm9pZCAwPT09dCYmKHQ9XCJcIik7dmFyIHM9dC5tYXRjaChpKTtpZighcylyZXR1cm4gbnVsbDt2YXIgZj0oXCJcIitzWzBdKS5tYXRjaChlKXx8W1wiLVwiLDAsMF0sbj1mWzBdLHU9NjAqK2ZbMV0rICtmWzJdO3JldHVybiAwPT09dT8wOlwiK1wiPT09bj91Oi11fShzKSxudWxsPT09cykpcmV0dXJuIHRoaXM7dmFyIHU9TWF0aC5hYnMocyk8PTE2PzYwKnM6cyxvPXRoaXM7aWYoZilyZXR1cm4gby4kb2Zmc2V0PXUsby4kdT0wPT09cyxvO2lmKDAhPT1zKXt2YXIgcj10aGlzLiR1P3RoaXMudG9EYXRlKCkuZ2V0VGltZXpvbmVPZmZzZXQoKTotMSp0aGlzLnV0Y09mZnNldCgpOyhvPXRoaXMubG9jYWwoKS5hZGQodStyLHQpKS4kb2Zmc2V0PXUsby4keC4kbG9jYWxPZmZzZXQ9cn1lbHNlIG89dGhpcy51dGMoKTtyZXR1cm4gb307dmFyIGg9dS5mb3JtYXQ7dS5mb3JtYXQ9ZnVuY3Rpb24odCl7dmFyIGk9dHx8KHRoaXMuJHU/XCJZWVlZLU1NLUREVEhIOm1tOnNzW1pdXCI6XCJcIik7cmV0dXJuIGguY2FsbCh0aGlzLGkpfSx1LnZhbHVlT2Y9ZnVuY3Rpb24oKXt2YXIgdD10aGlzLiR1dGlscygpLnUodGhpcy4kb2Zmc2V0KT8wOnRoaXMuJG9mZnNldCsodGhpcy4keC4kbG9jYWxPZmZzZXR8fHRoaXMuJGQuZ2V0VGltZXpvbmVPZmZzZXQoKSk7cmV0dXJuIHRoaXMuJGQudmFsdWVPZigpLTZlNCp0fSx1LmlzVVRDPWZ1bmN0aW9uKCl7cmV0dXJuISF0aGlzLiR1fSx1LnRvSVNPU3RyaW5nPWZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMudG9EYXRlKCkudG9JU09TdHJpbmcoKX0sdS50b1N0cmluZz1mdW5jdGlvbigpe3JldHVybiB0aGlzLnRvRGF0ZSgpLnRvVVRDU3RyaW5nKCl9O3ZhciBsPXUudG9EYXRlO3UudG9EYXRlPWZ1bmN0aW9uKHQpe3JldHVyblwic1wiPT09dCYmdGhpcy4kb2Zmc2V0P24odGhpcy5mb3JtYXQoXCJZWVlZLU1NLUREIEhIOm1tOnNzOlNTU1wiKSkudG9EYXRlKCk6bC5jYWxsKHRoaXMpfTt2YXIgYz11LmRpZmY7dS5kaWZmPWZ1bmN0aW9uKHQsaSxlKXtpZih0JiZ0aGlzLiR1PT09dC4kdSlyZXR1cm4gYy5jYWxsKHRoaXMsdCxpLGUpO3ZhciBzPXRoaXMubG9jYWwoKSxmPW4odCkubG9jYWwoKTtyZXR1cm4gYy5jYWxsKHMsZixpLGUpfX19KSk7IiwgIiFmdW5jdGlvbih0LGUpe1wib2JqZWN0XCI9PXR5cGVvZiBleHBvcnRzJiZcInVuZGVmaW5lZFwiIT10eXBlb2YgbW9kdWxlP21vZHVsZS5leHBvcnRzPWUoKTpcImZ1bmN0aW9uXCI9PXR5cGVvZiBkZWZpbmUmJmRlZmluZS5hbWQ/ZGVmaW5lKGUpOih0PVwidW5kZWZpbmVkXCIhPXR5cGVvZiBnbG9iYWxUaGlzP2dsb2JhbFRoaXM6dHx8c2VsZikuZGF5anNfcGx1Z2luX3RpbWV6b25lPWUoKX0odGhpcywoZnVuY3Rpb24oKXtcInVzZSBzdHJpY3RcIjt2YXIgdD17eWVhcjowLG1vbnRoOjEsZGF5OjIsaG91cjozLG1pbnV0ZTo0LHNlY29uZDo1fSxlPXt9O3JldHVybiBmdW5jdGlvbihuLGksbyl7dmFyIHIsYT1mdW5jdGlvbih0LG4saSl7dm9pZCAwPT09aSYmKGk9e30pO3ZhciBvPW5ldyBEYXRlKHQpLHI9ZnVuY3Rpb24odCxuKXt2b2lkIDA9PT1uJiYobj17fSk7dmFyIGk9bi50aW1lWm9uZU5hbWV8fFwic2hvcnRcIixvPXQrXCJ8XCIraSxyPWVbb107cmV0dXJuIHJ8fChyPW5ldyBJbnRsLkRhdGVUaW1lRm9ybWF0KFwiZW4tVVNcIix7aG91cjEyOiExLHRpbWVab25lOnQseWVhcjpcIm51bWVyaWNcIixtb250aDpcIjItZGlnaXRcIixkYXk6XCIyLWRpZ2l0XCIsaG91cjpcIjItZGlnaXRcIixtaW51dGU6XCIyLWRpZ2l0XCIsc2Vjb25kOlwiMi1kaWdpdFwiLHRpbWVab25lTmFtZTppfSksZVtvXT1yKSxyfShuLGkpO3JldHVybiByLmZvcm1hdFRvUGFydHMobyl9LHU9ZnVuY3Rpb24oZSxuKXtmb3IodmFyIGk9YShlLG4pLHI9W10sdT0wO3U8aS5sZW5ndGg7dSs9MSl7dmFyIGY9aVt1XSxzPWYudHlwZSxtPWYudmFsdWUsYz10W3NdO2M+PTAmJihyW2NdPXBhcnNlSW50KG0sMTApKX12YXIgZD1yWzNdLGw9MjQ9PT1kPzA6ZCxoPXJbMF0rXCItXCIrclsxXStcIi1cIityWzJdK1wiIFwiK2wrXCI6XCIrcls0XStcIjpcIityWzVdK1wiOjAwMFwiLHY9K2U7cmV0dXJuKG8udXRjKGgpLnZhbHVlT2YoKS0odi09diUxZTMpKS82ZTR9LGY9aS5wcm90b3R5cGU7Zi50ej1mdW5jdGlvbih0LGUpe3ZvaWQgMD09PXQmJih0PXIpO3ZhciBuLGk9dGhpcy51dGNPZmZzZXQoKSxhPXRoaXMudG9EYXRlKCksdT1hLnRvTG9jYWxlU3RyaW5nKFwiZW4tVVNcIix7dGltZVpvbmU6dH0pLGY9TWF0aC5yb3VuZCgoYS1uZXcgRGF0ZSh1KSkvMWUzLzYwKSxzPTE1Ki1NYXRoLnJvdW5kKGEuZ2V0VGltZXpvbmVPZmZzZXQoKS8xNSktZjtpZighTnVtYmVyKHMpKW49dGhpcy51dGNPZmZzZXQoMCxlKTtlbHNlIGlmKG49byh1LHtsb2NhbGU6dGhpcy4kTH0pLiRzZXQoXCJtaWxsaXNlY29uZFwiLHRoaXMuJG1zKS51dGNPZmZzZXQocywhMCksZSl7dmFyIG09bi51dGNPZmZzZXQoKTtuPW4uYWRkKGktbSxcIm1pbnV0ZVwiKX1yZXR1cm4gbi4keC4kdGltZXpvbmU9dCxufSxmLm9mZnNldE5hbWU9ZnVuY3Rpb24odCl7dmFyIGU9dGhpcy4keC4kdGltZXpvbmV8fG8udHouZ3Vlc3MoKSxuPWEodGhpcy52YWx1ZU9mKCksZSx7dGltZVpvbmVOYW1lOnR9KS5maW5kKChmdW5jdGlvbih0KXtyZXR1cm5cInRpbWV6b25lbmFtZVwiPT09dC50eXBlLnRvTG93ZXJDYXNlKCl9KSk7cmV0dXJuIG4mJm4udmFsdWV9O3ZhciBzPWYuc3RhcnRPZjtmLnN0YXJ0T2Y9ZnVuY3Rpb24odCxlKXtpZighdGhpcy4keHx8IXRoaXMuJHguJHRpbWV6b25lKXJldHVybiBzLmNhbGwodGhpcyx0LGUpO3ZhciBuPW8odGhpcy5mb3JtYXQoXCJZWVlZLU1NLUREIEhIOm1tOnNzOlNTU1wiKSx7bG9jYWxlOnRoaXMuJEx9KTtyZXR1cm4gcy5jYWxsKG4sdCxlKS50eih0aGlzLiR4LiR0aW1lem9uZSwhMCl9LG8udHo9ZnVuY3Rpb24odCxlLG4pe3ZhciBpPW4mJmUsYT1ufHxlfHxyLGY9dSgrbygpLGEpO2lmKFwic3RyaW5nXCIhPXR5cGVvZiB0KXJldHVybiBvKHQpLnR6KGEpO3ZhciBzPWZ1bmN0aW9uKHQsZSxuKXt2YXIgaT10LTYwKmUqMWUzLG89dShpLG4pO2lmKGU9PT1vKXJldHVybltpLGVdO3ZhciByPXUoaS09NjAqKG8tZSkqMWUzLG4pO3JldHVybiBvPT09cj9baSxvXTpbdC02MCpNYXRoLm1pbihvLHIpKjFlMyxNYXRoLm1heChvLHIpXX0oby51dGModCxpKS52YWx1ZU9mKCksZixhKSxtPXNbMF0sYz1zWzFdLGQ9byhtKS51dGNPZmZzZXQoYyk7cmV0dXJuIGQuJHguJHRpbWV6b25lPWEsZH0sby50ei5ndWVzcz1mdW5jdGlvbigpe3JldHVybiBJbnRsLkRhdGVUaW1lRm9ybWF0KCkucmVzb2x2ZWRPcHRpb25zKCkudGltZVpvbmV9LG8udHouc2V0RGVmYXVsdD1mdW5jdGlvbih0KXtyPXR9fX0pKTsiLCAiIWZ1bmN0aW9uKHIsZSl7XCJvYmplY3RcIj09dHlwZW9mIGV4cG9ydHMmJlwidW5kZWZpbmVkXCIhPXR5cGVvZiBtb2R1bGU/bW9kdWxlLmV4cG9ydHM9ZSgpOlwiZnVuY3Rpb25cIj09dHlwZW9mIGRlZmluZSYmZGVmaW5lLmFtZD9kZWZpbmUoZSk6KHI9XCJ1bmRlZmluZWRcIiE9dHlwZW9mIGdsb2JhbFRoaXM/Z2xvYmFsVGhpczpyfHxzZWxmKS5kYXlqc19wbHVnaW5fcmVsYXRpdmVUaW1lPWUoKX0odGhpcywoZnVuY3Rpb24oKXtcInVzZSBzdHJpY3RcIjtyZXR1cm4gZnVuY3Rpb24ocixlLHQpe3I9cnx8e307dmFyIG49ZS5wcm90b3R5cGUsbz17ZnV0dXJlOlwiaW4gJXNcIixwYXN0OlwiJXMgYWdvXCIsczpcImEgZmV3IHNlY29uZHNcIixtOlwiYSBtaW51dGVcIixtbTpcIiVkIG1pbnV0ZXNcIixoOlwiYW4gaG91clwiLGhoOlwiJWQgaG91cnNcIixkOlwiYSBkYXlcIixkZDpcIiVkIGRheXNcIixNOlwiYSBtb250aFwiLE1NOlwiJWQgbW9udGhzXCIseTpcImEgeWVhclwiLHl5OlwiJWQgeWVhcnNcIn07ZnVuY3Rpb24gaShyLGUsdCxvKXtyZXR1cm4gbi5mcm9tVG9CYXNlKHIsZSx0LG8pfXQuZW4ucmVsYXRpdmVUaW1lPW8sbi5mcm9tVG9CYXNlPWZ1bmN0aW9uKGUsbixpLGQsdSl7Zm9yKHZhciBmLGEscyxsPWkuJGxvY2FsZSgpLnJlbGF0aXZlVGltZXx8byxoPXIudGhyZXNob2xkc3x8W3tsOlwic1wiLHI6NDQsZDpcInNlY29uZFwifSx7bDpcIm1cIixyOjg5fSx7bDpcIm1tXCIscjo0NCxkOlwibWludXRlXCJ9LHtsOlwiaFwiLHI6ODl9LHtsOlwiaGhcIixyOjIxLGQ6XCJob3VyXCJ9LHtsOlwiZFwiLHI6MzV9LHtsOlwiZGRcIixyOjI1LGQ6XCJkYXlcIn0se2w6XCJNXCIscjo0NX0se2w6XCJNTVwiLHI6MTAsZDpcIm1vbnRoXCJ9LHtsOlwieVwiLHI6MTd9LHtsOlwieXlcIixkOlwieWVhclwifV0sbT1oLmxlbmd0aCxjPTA7YzxtO2MrPTEpe3ZhciB5PWhbY107eS5kJiYoZj1kP3QoZSkuZGlmZihpLHkuZCwhMCk6aS5kaWZmKGUseS5kLCEwKSk7dmFyIHA9KHIucm91bmRpbmd8fE1hdGgucm91bmQpKE1hdGguYWJzKGYpKTtpZihzPWY+MCxwPD15LnJ8fCF5LnIpe3A8PTEmJmM+MCYmKHk9aFtjLTFdKTt2YXIgdj1sW3kubF07dSYmKHA9dShcIlwiK3ApKSxhPVwic3RyaW5nXCI9PXR5cGVvZiB2P3YucmVwbGFjZShcIiVkXCIscCk6dihwLG4seS5sLHMpO2JyZWFrfX1pZihuKXJldHVybiBhO3ZhciBNPXM/bC5mdXR1cmU6bC5wYXN0O3JldHVyblwiZnVuY3Rpb25cIj09dHlwZW9mIE0/TShhKTpNLnJlcGxhY2UoXCIlc1wiLGEpfSxuLnRvPWZ1bmN0aW9uKHIsZSl7cmV0dXJuIGkocixlLHRoaXMsITApfSxuLmZyb209ZnVuY3Rpb24ocixlKXtyZXR1cm4gaShyLGUsdGhpcyl9O3ZhciBkPWZ1bmN0aW9uKHIpe3JldHVybiByLiR1P3QudXRjKCk6dCgpfTtuLnRvTm93PWZ1bmN0aW9uKHIpe3JldHVybiB0aGlzLnRvKGQodGhpcykscil9LG4uZnJvbU5vdz1mdW5jdGlvbihyKXtyZXR1cm4gdGhpcy5mcm9tKGQodGhpcykscil9fX0pKTsiLCAiaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IEFjdGlvbiwgQWN0aW9uUGFuZWwsIENvbG9yLCBMaXN0IH0gZnJvbSBcIkByYXljYXN0L2FwaVwiO1xuaW1wb3J0IHsgcGFyc2VEYXRlIH0gZnJvbSBcImNocm9uby1ub2RlXCI7XG5pbXBvcnQgZGF5anMgZnJvbSBcImRheWpzXCI7XG5pbXBvcnQgYWR2YW5jZWRGb3JtYXRQbHVnaW4gZnJvbSBcImRheWpzL3BsdWdpbi9hZHZhbmNlZEZvcm1hdFwiO1xuaW1wb3J0IHdlZWtPZlllYXJQbHVnaW4gZnJvbSBcImRheWpzL3BsdWdpbi93ZWVrT2ZZZWFyXCI7XG5pbXBvcnQgdXRjUGx1Z2luIGZyb20gXCJkYXlqcy9wbHVnaW4vdXRjXCI7XG5pbXBvcnQgdGltZXpvbmVQbHVnaW4gZnJvbSBcImRheWpzL3BsdWdpbi90aW1lem9uZVwiO1xuaW1wb3J0IHJlbGF0aXZlVGltZVBsdWdpbiBmcm9tIFwiZGF5anMvcGx1Z2luL3JlbGF0aXZlVGltZVwiO1xuXG5kYXlqcy5leHRlbmQoYWR2YW5jZWRGb3JtYXRQbHVnaW4pO1xuZGF5anMuZXh0ZW5kKHdlZWtPZlllYXJQbHVnaW4pO1xuZGF5anMuZXh0ZW5kKHV0Y1BsdWdpbik7XG5kYXlqcy5leHRlbmQodGltZXpvbmVQbHVnaW4pO1xuZGF5anMuZXh0ZW5kKHJlbGF0aXZlVGltZVBsdWdpbik7XG5cbmZ1bmN0aW9uIGhhbmRsZUNvbnZlcnNpb24oaW5wdXQ6IHN0cmluZywgdGltZXpvbmU6IHN0cmluZykge1xuICBpZiAoaW5wdXQubWF0Y2goL15cXGQrJC8pKSBpbnB1dCA9IG5ldyBEYXRlKHBhcnNlSW50KGlucHV0LCAxMCkgKiAxMDAwKS50b1N0cmluZygpO1xuICBjb25zdCBwYXJzZWREYXRlID0gcGFyc2VEYXRlKGlucHV0KTtcbiAgaWYgKCFwYXJzZWREYXRlIHx8IHBhcnNlZERhdGUudG9TdHJpbmcoKSA9PT0gXCJJbnZhbGlkIERhdGVcIikgcmV0dXJuIFtdO1xuXG4gIGNvbnN0IGRhdGUgPSBkYXlqcyhwYXJzZWREYXRlKS50eih0aW1lem9uZSk7XG4gIGNvbnN0IGZyb21Ob3cgPSBkYXRlLmZyb21Ob3coKTtcbiAgcmV0dXJuIFtcbiAgICB7IGxhYmVsOiBcIlVuaXggKHMpXCIsIHZhbHVlOiBkYXRlLnVuaXgoKSB9LFxuICAgIHsgbGFiZWw6IFwiVW5peCAobXMpXCIsIHZhbHVlOiBkYXRlLnZhbHVlT2YoKSB9LFxuICAgIHsgbGFiZWw6IFwiSHVtYW4gUmVhZGFibGVcIiwgdmFsdWU6IGRhdGUuZm9ybWF0KFwiTU1NTSBEbywgWVlZWSBbYXRdIGhoOm1tOnNzIEEgKHp6eilcIikgfSxcbiAgICB7IGxhYmVsOiBcIkRhdGVUaW1lXCIsIHZhbHVlOiBkYXRlLmZvcm1hdChcIllZWVktTU0tREQgSEg6bW06c3NcIikgfSxcbiAgICB7IGxhYmVsOiBcIlVUQ1wiLCB2YWx1ZTogZGF0ZS50b1N0cmluZygpIH0sXG4gICAgeyBsYWJlbDogXCJJU08gODYwMVwiLCB2YWx1ZTogZGF0ZS50b0lTT1N0cmluZygpIH0sXG4gICAgeyBsYWJlbDogXCJXZWVrIG9mIFllYXJcIiwgdmFsdWU6IGRhdGUuZm9ybWF0KFwid28gZGRkZCBbb2ZdIFlZWVlcIikgfSxcbiAgICB7IGxhYmVsOiBcIkluIC8gQWdvXCIsIHZhbHVlOiBTdHJpbmcoZnJvbU5vdykuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyBTdHJpbmcoZnJvbU5vdykuc2xpY2UoMSkgfSxcbiAgXTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRGF0ZVRpbWUoKSB7XG4gIGNvbnN0IFtpbnB1dCwgc2V0SW5wdXRdID0gdXNlU3RhdGUoXCJub3dcIik7XG4gIGNvbnN0IFt0aW1lem9uZSwgc2V0VGltZXpvbmVdID0gdXNlU3RhdGUoSW50bC5EYXRlVGltZUZvcm1hdCgpLnJlc29sdmVkT3B0aW9ucygpLnRpbWVab25lKTtcbiAgY29uc3QgW2l0ZW1zLCBzZXRJdGVtc10gPSB1c2VTdGF0ZTx7IGxhYmVsOiBzdHJpbmc7IHZhbHVlOiBzdHJpbmcgfCBudW1iZXIgfVtdPihbXSk7XG5cbiAgY29uc3Qgb25UaW1lem9uZUNoYW5nZSA9IGFzeW5jICh2YWx1ZTogc3RyaW5nKSA9PiB7XG4gICAgc2V0VGltZXpvbmUodmFsdWUpO1xuICAgIHNldEl0ZW1zKGhhbmRsZUNvbnZlcnNpb24oaW5wdXQsIHZhbHVlKSk7XG4gIH07XG5cbiAgY29uc3Qgb25TZWFyY2hUZXh0Q2hhbmdlID0gYXN5bmMgKHZhbHVlOiBzdHJpbmcpID0+IHtcbiAgICBzZXRJbnB1dCh2YWx1ZSk7XG4gICAgc2V0SXRlbXMoaGFuZGxlQ29udmVyc2lvbih2YWx1ZSwgdGltZXpvbmUpKTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxMaXN0XG4gICAgICBzZWFyY2hCYXJQbGFjZWhvbGRlcj1cIkRhdGVcIlxuICAgICAgZmlsdGVyaW5nPXtmYWxzZX1cbiAgICAgIHNlYXJjaFRleHQ9e2lucHV0fVxuICAgICAgb25TZWFyY2hUZXh0Q2hhbmdlPXtvblNlYXJjaFRleHRDaGFuZ2V9XG4gICAgICBzZWFyY2hCYXJBY2Nlc3Nvcnk9e1xuICAgICAgICA8TGlzdC5Ecm9wZG93biB0b29sdGlwPVwiVGltZXpvbmVcIiBvbkNoYW5nZT17b25UaW1lem9uZUNoYW5nZX0gZGVmYXVsdFZhbHVlPXt0aW1lem9uZX0+XG4gICAgICAgICAge0ludGwuc3VwcG9ydGVkVmFsdWVzT2YoXCJ0aW1lWm9uZVwiKS5tYXAoKHpvbmUsIGluZGV4KSA9PiAoXG4gICAgICAgICAgICA8TGlzdC5Ecm9wZG93bi5JdGVtIGtleT17aW5kZXh9IHZhbHVlPXt6b25lfSB0aXRsZT17em9uZX0gLz5cbiAgICAgICAgICApKX1cbiAgICAgICAgPC9MaXN0LkRyb3Bkb3duPlxuICAgICAgfVxuICAgID5cbiAgICAgIHtpdGVtcy5tYXAoKGl0ZW0sIGluZGV4KSA9PiAoXG4gICAgICAgIDxMaXN0Lkl0ZW1cbiAgICAgICAgICBrZXk9e2luZGV4fVxuICAgICAgICAgIHRpdGxlPXtTdHJpbmcoaXRlbS52YWx1ZSl9XG4gICAgICAgICAgYWNjZXNzb3JpZXM9e1t7IHRhZzogeyB2YWx1ZTogaXRlbS5sYWJlbCwgY29sb3I6IENvbG9yLlNlY29uZGFyeVRleHQgfSB9XX1cbiAgICAgICAgICBhY3Rpb25zPXtcbiAgICAgICAgICAgIDxBY3Rpb25QYW5lbD5cbiAgICAgICAgICAgICAgPEFjdGlvbi5Db3B5VG9DbGlwYm9hcmQgY29udGVudD17aXRlbS52YWx1ZX0gLz5cbiAgICAgICAgICAgICAgPEFjdGlvbi5QYXN0ZSBjb250ZW50PXtpdGVtLnZhbHVlfSAvPlxuICAgICAgICAgICAgPC9BY3Rpb25QYW5lbD5cbiAgICAgICAgICB9XG4gICAgICAgIC8+XG4gICAgICApKX1cbiAgICA8L0xpc3Q+XG4gICk7XG59XG4iLCAiaW1wb3J0IHsgQ29tcG9uZW50LCBQYXJzZWRDb21wb25lbnRzLCBQYXJzZWRSZXN1bHQsIFBhcnNpbmdSZWZlcmVuY2UgfSBmcm9tIFwiLi90eXBlc1wiO1xuXG5pbXBvcnQgcXVhcnRlck9mWWVhciBmcm9tIFwiZGF5anMvcGx1Z2luL3F1YXJ0ZXJPZlllYXJcIjtcbmltcG9ydCBkYXlqcywgeyBRVW5pdFR5cGUgfSBmcm9tIFwiZGF5anNcIjtcbmltcG9ydCB7IGFzc2lnblNpbWlsYXJEYXRlLCBhc3NpZ25TaW1pbGFyVGltZSwgaW1wbHlTaW1pbGFyVGltZSB9IGZyb20gXCIuL3V0aWxzL2RheWpzXCI7XG5pbXBvcnQgeyB0b1RpbWV6b25lT2Zmc2V0IH0gZnJvbSBcIi4vdGltZXpvbmVcIjtcbmRheWpzLmV4dGVuZChxdWFydGVyT2ZZZWFyKTtcblxuZXhwb3J0IGNsYXNzIFJlZmVyZW5jZVdpdGhUaW1lem9uZSB7XG4gICAgcmVhZG9ubHkgaW5zdGFudDogRGF0ZTtcbiAgICByZWFkb25seSB0aW1lem9uZU9mZnNldD86IG51bWJlciB8IG51bGw7XG5cbiAgICBjb25zdHJ1Y3RvcihpbnB1dD86IFBhcnNpbmdSZWZlcmVuY2UgfCBEYXRlKSB7XG4gICAgICAgIGlucHV0ID0gaW5wdXQgPz8gbmV3IERhdGUoKTtcbiAgICAgICAgaWYgKGlucHV0IGluc3RhbmNlb2YgRGF0ZSkge1xuICAgICAgICAgICAgdGhpcy5pbnN0YW50ID0gaW5wdXQ7XG4gICAgICAgICAgICB0aGlzLnRpbWV6b25lT2Zmc2V0ID0gbnVsbDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuaW5zdGFudCA9IGlucHV0Lmluc3RhbnQgPz8gbmV3IERhdGUoKTtcbiAgICAgICAgICAgIHRoaXMudGltZXpvbmVPZmZzZXQgPSB0b1RpbWV6b25lT2Zmc2V0KGlucHV0LnRpbWV6b25lLCB0aGlzLmluc3RhbnQpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyBhIEpTIGRhdGUgKHN5c3RlbSB0aW1lem9uZSkgd2l0aCB0aGUgeyB5ZWFyLCBtb250aCwgZGF5LCBob3VyLCBtaW51dGUsIHNlY29uZCB9IGVxdWFsIHRvIHRoZSByZWZlcmVuY2UuXG4gICAgICogVGhlIG91dHB1dCdzIGluc3RhbnQgaXMgTk9UIHRoZSByZWZlcmVuY2UncyBpbnN0YW50IHdoZW4gdGhlIHJlZmVyZW5jZSdzIGFuZCBzeXN0ZW0ncyB0aW1lem9uZSBhcmUgZGlmZmVyZW50LlxuICAgICAqL1xuICAgIGdldERhdGVXaXRoQWRqdXN0ZWRUaW1lem9uZSgpIHtcbiAgICAgICAgY29uc3QgZGF0ZSA9IG5ldyBEYXRlKHRoaXMuaW5zdGFudCk7XG4gICAgICAgIGlmICh0aGlzLnRpbWV6b25lT2Zmc2V0ICE9PSBudWxsKSB7XG4gICAgICAgICAgICBkYXRlLnNldE1pbnV0ZXMoZGF0ZS5nZXRNaW51dGVzKCkgLSB0aGlzLmdldFN5c3RlbVRpbWV6b25lQWRqdXN0bWVudE1pbnV0ZSh0aGlzLmluc3RhbnQpKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZGF0ZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRoZSBudW1iZXIgbWludXRlcyBkaWZmZXJlbmNlIGJldHdlZW4gdGhlIEpTIGRhdGUncyB0aW1lem9uZSBhbmQgdGhlIHJlZmVyZW5jZSB0aW1lem9uZS5cbiAgICAgKiBAcGFyYW0gZGF0ZVxuICAgICAqIEBwYXJhbSBvdmVycmlkZVRpbWV6b25lT2Zmc2V0XG4gICAgICovXG4gICAgZ2V0U3lzdGVtVGltZXpvbmVBZGp1c3RtZW50TWludXRlKGRhdGU/OiBEYXRlLCBvdmVycmlkZVRpbWV6b25lT2Zmc2V0PzogbnVtYmVyKTogbnVtYmVyIHtcbiAgICAgICAgaWYgKCFkYXRlIHx8IGRhdGUuZ2V0VGltZSgpIDwgMCkge1xuICAgICAgICAgICAgLy8gSmF2YXNjcmlwdCBkYXRlIHRpbWV6b25lIGNhbGN1bGF0aW9uIGdvdCBlZmZlY3Qgd2hlbiB0aGUgdGltZSBlcG9jaCA8IDBcbiAgICAgICAgICAgIC8vIGUuZy4gbmV3IERhdGUoJ1R1ZSBGZWIgMDIgMTMwMCAwMDowMDowMCBHTVQrMDkwMCAoSlNUKScpID0+IFR1ZSBGZWIgMDIgMTMwMCAwMDoxODo1OSBHTVQrMDkxOCAoSlNUKVxuICAgICAgICAgICAgZGF0ZSA9IG5ldyBEYXRlKCk7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBjdXJyZW50VGltZXpvbmVPZmZzZXQgPSAtZGF0ZS5nZXRUaW1lem9uZU9mZnNldCgpO1xuICAgICAgICBjb25zdCB0YXJnZXRUaW1lem9uZU9mZnNldCA9IG92ZXJyaWRlVGltZXpvbmVPZmZzZXQgPz8gdGhpcy50aW1lem9uZU9mZnNldCA/PyBjdXJyZW50VGltZXpvbmVPZmZzZXQ7XG4gICAgICAgIHJldHVybiBjdXJyZW50VGltZXpvbmVPZmZzZXQgLSB0YXJnZXRUaW1lem9uZU9mZnNldDtcbiAgICB9XG5cbiAgICBnZXRUaW1lem9uZU9mZnNldCgpOiBudW1iZXIge1xuICAgICAgICByZXR1cm4gdGhpcy50aW1lem9uZU9mZnNldCA/PyAtdGhpcy5pbnN0YW50LmdldFRpbWV6b25lT2Zmc2V0KCk7XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgUGFyc2luZ0NvbXBvbmVudHMgaW1wbGVtZW50cyBQYXJzZWRDb21wb25lbnRzIHtcbiAgICBwcml2YXRlIGtub3duVmFsdWVzOiB7IFtjIGluIENvbXBvbmVudF0/OiBudW1iZXIgfTtcbiAgICBwcml2YXRlIGltcGxpZWRWYWx1ZXM6IHsgW2MgaW4gQ29tcG9uZW50XT86IG51bWJlciB9O1xuICAgIHByaXZhdGUgcmVmZXJlbmNlOiBSZWZlcmVuY2VXaXRoVGltZXpvbmU7XG4gICAgcHJpdmF0ZSBfdGFncyA9IG5ldyBTZXQ8c3RyaW5nPigpO1xuXG4gICAgY29uc3RydWN0b3IocmVmZXJlbmNlOiBSZWZlcmVuY2VXaXRoVGltZXpvbmUsIGtub3duQ29tcG9uZW50cz86IHsgW2MgaW4gQ29tcG9uZW50XT86IG51bWJlciB9KSB7XG4gICAgICAgIHRoaXMucmVmZXJlbmNlID0gcmVmZXJlbmNlO1xuICAgICAgICB0aGlzLmtub3duVmFsdWVzID0ge307XG4gICAgICAgIHRoaXMuaW1wbGllZFZhbHVlcyA9IHt9O1xuICAgICAgICBpZiAoa25vd25Db21wb25lbnRzKSB7XG4gICAgICAgICAgICBmb3IgKGNvbnN0IGtleSBpbiBrbm93bkNvbXBvbmVudHMpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmtub3duVmFsdWVzW2tleSBhcyBDb21wb25lbnRdID0ga25vd25Db21wb25lbnRzW2tleSBhcyBDb21wb25lbnRdO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgcmVmRGF5SnMgPSByZWZlcmVuY2UuZ2V0RGF0ZVdpdGhBZGp1c3RlZFRpbWV6b25lKCk7XG4gICAgICAgIHRoaXMuaW1wbHkoXCJkYXlcIiwgcmVmRGF5SnMuZ2V0RGF0ZSgpKTtcbiAgICAgICAgdGhpcy5pbXBseShcIm1vbnRoXCIsIHJlZkRheUpzLmdldE1vbnRoKCkgKyAxKTtcbiAgICAgICAgdGhpcy5pbXBseShcInllYXJcIiwgcmVmRGF5SnMuZ2V0RnVsbFllYXIoKSk7XG4gICAgICAgIHRoaXMuaW1wbHkoXCJob3VyXCIsIDEyKTtcbiAgICAgICAgdGhpcy5pbXBseShcIm1pbnV0ZVwiLCAwKTtcbiAgICAgICAgdGhpcy5pbXBseShcInNlY29uZFwiLCAwKTtcbiAgICAgICAgdGhpcy5pbXBseShcIm1pbGxpc2Vjb25kXCIsIDApO1xuICAgIH1cblxuICAgIGdldChjb21wb25lbnQ6IENvbXBvbmVudCk6IG51bWJlciB8IG51bGwge1xuICAgICAgICBpZiAoY29tcG9uZW50IGluIHRoaXMua25vd25WYWx1ZXMpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmtub3duVmFsdWVzW2NvbXBvbmVudF07XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoY29tcG9uZW50IGluIHRoaXMuaW1wbGllZFZhbHVlcykge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuaW1wbGllZFZhbHVlc1tjb21wb25lbnRdO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgaXNDZXJ0YWluKGNvbXBvbmVudDogQ29tcG9uZW50KTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiBjb21wb25lbnQgaW4gdGhpcy5rbm93blZhbHVlcztcbiAgICB9XG5cbiAgICBnZXRDZXJ0YWluQ29tcG9uZW50cygpOiBBcnJheTxDb21wb25lbnQ+IHtcbiAgICAgICAgcmV0dXJuIE9iamVjdC5rZXlzKHRoaXMua25vd25WYWx1ZXMpIGFzIEFycmF5PENvbXBvbmVudD47XG4gICAgfVxuXG4gICAgaW1wbHkoY29tcG9uZW50OiBDb21wb25lbnQsIHZhbHVlOiBudW1iZXIpOiBQYXJzaW5nQ29tcG9uZW50cyB7XG4gICAgICAgIGlmIChjb21wb25lbnQgaW4gdGhpcy5rbm93blZhbHVlcykge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5pbXBsaWVkVmFsdWVzW2NvbXBvbmVudF0gPSB2YWx1ZTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgYXNzaWduKGNvbXBvbmVudDogQ29tcG9uZW50LCB2YWx1ZTogbnVtYmVyKTogUGFyc2luZ0NvbXBvbmVudHMge1xuICAgICAgICB0aGlzLmtub3duVmFsdWVzW2NvbXBvbmVudF0gPSB2YWx1ZTtcbiAgICAgICAgZGVsZXRlIHRoaXMuaW1wbGllZFZhbHVlc1tjb21wb25lbnRdO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBkZWxldGUoY29tcG9uZW50OiBDb21wb25lbnQpIHtcbiAgICAgICAgZGVsZXRlIHRoaXMua25vd25WYWx1ZXNbY29tcG9uZW50XTtcbiAgICAgICAgZGVsZXRlIHRoaXMuaW1wbGllZFZhbHVlc1tjb21wb25lbnRdO1xuICAgIH1cblxuICAgIGNsb25lKCk6IFBhcnNpbmdDb21wb25lbnRzIHtcbiAgICAgICAgY29uc3QgY29tcG9uZW50ID0gbmV3IFBhcnNpbmdDb21wb25lbnRzKHRoaXMucmVmZXJlbmNlKTtcbiAgICAgICAgY29tcG9uZW50Lmtub3duVmFsdWVzID0ge307XG4gICAgICAgIGNvbXBvbmVudC5pbXBsaWVkVmFsdWVzID0ge307XG5cbiAgICAgICAgZm9yIChjb25zdCBrZXkgaW4gdGhpcy5rbm93blZhbHVlcykge1xuICAgICAgICAgICAgY29tcG9uZW50Lmtub3duVmFsdWVzW2tleSBhcyBDb21wb25lbnRdID0gdGhpcy5rbm93blZhbHVlc1trZXkgYXMgQ29tcG9uZW50XTtcbiAgICAgICAgfVxuXG4gICAgICAgIGZvciAoY29uc3Qga2V5IGluIHRoaXMuaW1wbGllZFZhbHVlcykge1xuICAgICAgICAgICAgY29tcG9uZW50LmltcGxpZWRWYWx1ZXNba2V5IGFzIENvbXBvbmVudF0gPSB0aGlzLmltcGxpZWRWYWx1ZXNba2V5IGFzIENvbXBvbmVudF07XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gY29tcG9uZW50O1xuICAgIH1cblxuICAgIGlzT25seURhdGUoKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiAhdGhpcy5pc0NlcnRhaW4oXCJob3VyXCIpICYmICF0aGlzLmlzQ2VydGFpbihcIm1pbnV0ZVwiKSAmJiAhdGhpcy5pc0NlcnRhaW4oXCJzZWNvbmRcIik7XG4gICAgfVxuXG4gICAgaXNPbmx5VGltZSgpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICF0aGlzLmlzQ2VydGFpbihcIndlZWtkYXlcIikgJiYgIXRoaXMuaXNDZXJ0YWluKFwiZGF5XCIpICYmICF0aGlzLmlzQ2VydGFpbihcIm1vbnRoXCIpICYmICF0aGlzLmlzQ2VydGFpbihcInllYXJcIilcbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICBpc09ubHlXZWVrZGF5Q29tcG9uZW50KCk6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gdGhpcy5pc0NlcnRhaW4oXCJ3ZWVrZGF5XCIpICYmICF0aGlzLmlzQ2VydGFpbihcImRheVwiKSAmJiAhdGhpcy5pc0NlcnRhaW4oXCJtb250aFwiKTtcbiAgICB9XG5cbiAgICBpc0RhdGVXaXRoVW5rbm93blllYXIoKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiB0aGlzLmlzQ2VydGFpbihcIm1vbnRoXCIpICYmICF0aGlzLmlzQ2VydGFpbihcInllYXJcIik7XG4gICAgfVxuXG4gICAgaXNWYWxpZERhdGUoKTogYm9vbGVhbiB7XG4gICAgICAgIGNvbnN0IGRhdGUgPSB0aGlzLmRhdGVXaXRob3V0VGltZXpvbmVBZGp1c3RtZW50KCk7XG5cbiAgICAgICAgaWYgKGRhdGUuZ2V0RnVsbFllYXIoKSAhPT0gdGhpcy5nZXQoXCJ5ZWFyXCIpKSByZXR1cm4gZmFsc2U7XG4gICAgICAgIGlmIChkYXRlLmdldE1vbnRoKCkgIT09IHRoaXMuZ2V0KFwibW9udGhcIikgLSAxKSByZXR1cm4gZmFsc2U7XG4gICAgICAgIGlmIChkYXRlLmdldERhdGUoKSAhPT0gdGhpcy5nZXQoXCJkYXlcIikpIHJldHVybiBmYWxzZTtcbiAgICAgICAgaWYgKHRoaXMuZ2V0KFwiaG91clwiKSAhPSBudWxsICYmIGRhdGUuZ2V0SG91cnMoKSAhPSB0aGlzLmdldChcImhvdXJcIikpIHJldHVybiBmYWxzZTtcbiAgICAgICAgaWYgKHRoaXMuZ2V0KFwibWludXRlXCIpICE9IG51bGwgJiYgZGF0ZS5nZXRNaW51dGVzKCkgIT0gdGhpcy5nZXQoXCJtaW51dGVcIikpIHJldHVybiBmYWxzZTtcblxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICB0b1N0cmluZygpIHtcbiAgICAgICAgcmV0dXJuIGBbUGFyc2luZ0NvbXBvbmVudHMge1xuICAgICAgICAgICAgdGFnczogJHtKU09OLnN0cmluZ2lmeShBcnJheS5mcm9tKHRoaXMuX3RhZ3MpLnNvcnQoKSl9LCBcbiAgICAgICAgICAgIGtub3duVmFsdWVzOiAke0pTT04uc3RyaW5naWZ5KHRoaXMua25vd25WYWx1ZXMpfSwgXG4gICAgICAgICAgICBpbXBsaWVkVmFsdWVzOiAke0pTT04uc3RyaW5naWZ5KHRoaXMuaW1wbGllZFZhbHVlcyl9fSwgXG4gICAgICAgICAgICByZWZlcmVuY2U6ICR7SlNPTi5zdHJpbmdpZnkodGhpcy5yZWZlcmVuY2UpfV1gO1xuICAgIH1cblxuICAgIGRheWpzKCkge1xuICAgICAgICByZXR1cm4gZGF5anModGhpcy5kYXRlV2l0aG91dFRpbWV6b25lQWRqdXN0bWVudCgpKTtcbiAgICB9XG5cbiAgICBkYXRlKCk6IERhdGUge1xuICAgICAgICBjb25zdCBkYXRlID0gdGhpcy5kYXRlV2l0aG91dFRpbWV6b25lQWRqdXN0bWVudCgpO1xuICAgICAgICBjb25zdCB0aW1lem9uZUFkanVzdG1lbnQgPSB0aGlzLnJlZmVyZW5jZS5nZXRTeXN0ZW1UaW1lem9uZUFkanVzdG1lbnRNaW51dGUoZGF0ZSwgdGhpcy5nZXQoXCJ0aW1lem9uZU9mZnNldFwiKSk7XG4gICAgICAgIHJldHVybiBuZXcgRGF0ZShkYXRlLmdldFRpbWUoKSArIHRpbWV6b25lQWRqdXN0bWVudCAqIDYwMDAwKTtcbiAgICB9XG5cbiAgICBhZGRUYWcodGFnOiBzdHJpbmcpOiBQYXJzaW5nQ29tcG9uZW50cyB7XG4gICAgICAgIHRoaXMuX3RhZ3MuYWRkKHRhZyk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIGFkZFRhZ3ModGFnczogc3RyaW5nW10gfCBTZXQ8c3RyaW5nPik6IFBhcnNpbmdDb21wb25lbnRzIHtcbiAgICAgICAgZm9yIChjb25zdCB0YWcgb2YgdGFncykge1xuICAgICAgICAgICAgdGhpcy5fdGFncy5hZGQodGFnKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICB0YWdzKCk6IFNldDxzdHJpbmc+IHtcbiAgICAgICAgcmV0dXJuIG5ldyBTZXQodGhpcy5fdGFncyk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBkYXRlV2l0aG91dFRpbWV6b25lQWRqdXN0bWVudCgpIHtcbiAgICAgICAgY29uc3QgZGF0ZSA9IG5ldyBEYXRlKFxuICAgICAgICAgICAgdGhpcy5nZXQoXCJ5ZWFyXCIpLFxuICAgICAgICAgICAgdGhpcy5nZXQoXCJtb250aFwiKSAtIDEsXG4gICAgICAgICAgICB0aGlzLmdldChcImRheVwiKSxcbiAgICAgICAgICAgIHRoaXMuZ2V0KFwiaG91clwiKSxcbiAgICAgICAgICAgIHRoaXMuZ2V0KFwibWludXRlXCIpLFxuICAgICAgICAgICAgdGhpcy5nZXQoXCJzZWNvbmRcIiksXG4gICAgICAgICAgICB0aGlzLmdldChcIm1pbGxpc2Vjb25kXCIpXG4gICAgICAgICk7XG5cbiAgICAgICAgZGF0ZS5zZXRGdWxsWWVhcih0aGlzLmdldChcInllYXJcIikpO1xuICAgICAgICByZXR1cm4gZGF0ZTtcbiAgICB9XG5cbiAgICBzdGF0aWMgY3JlYXRlUmVsYXRpdmVGcm9tUmVmZXJlbmNlKFxuICAgICAgICByZWZlcmVuY2U6IFJlZmVyZW5jZVdpdGhUaW1lem9uZSxcbiAgICAgICAgZnJhZ21lbnRzOiB7IFtjIGluIFFVbml0VHlwZV0/OiBudW1iZXIgfVxuICAgICk6IFBhcnNpbmdDb21wb25lbnRzIHtcbiAgICAgICAgbGV0IGRhdGUgPSBkYXlqcyhyZWZlcmVuY2UuZ2V0RGF0ZVdpdGhBZGp1c3RlZFRpbWV6b25lKCkpO1xuICAgICAgICBmb3IgKGNvbnN0IGtleSBpbiBmcmFnbWVudHMpIHtcbiAgICAgICAgICAgIGRhdGUgPSBkYXRlLmFkZChmcmFnbWVudHNba2V5IGFzIFFVbml0VHlwZV0sIGtleSBhcyBRVW5pdFR5cGUpO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgY29tcG9uZW50cyA9IG5ldyBQYXJzaW5nQ29tcG9uZW50cyhyZWZlcmVuY2UpO1xuICAgICAgICBjb21wb25lbnRzLmFkZFRhZyhcInJlc3VsdC9yZWxhdGl2ZURhdGVcIik7XG4gICAgICAgIGlmIChmcmFnbWVudHNbXCJob3VyXCJdIHx8IGZyYWdtZW50c1tcIm1pbnV0ZVwiXSB8fCBmcmFnbWVudHNbXCJzZWNvbmRcIl0pIHtcbiAgICAgICAgICAgIGNvbXBvbmVudHMuYWRkVGFnKFwicmVzdWx0L3JlbGF0aXZlRGF0ZUFuZFRpbWVcIik7XG4gICAgICAgICAgICBhc3NpZ25TaW1pbGFyVGltZShjb21wb25lbnRzLCBkYXRlKTtcbiAgICAgICAgICAgIGFzc2lnblNpbWlsYXJEYXRlKGNvbXBvbmVudHMsIGRhdGUpO1xuICAgICAgICAgICAgY29tcG9uZW50cy5hc3NpZ24oXCJ0aW1lem9uZU9mZnNldFwiLCByZWZlcmVuY2UuZ2V0VGltZXpvbmVPZmZzZXQoKSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpbXBseVNpbWlsYXJUaW1lKGNvbXBvbmVudHMsIGRhdGUpO1xuICAgICAgICAgICAgY29tcG9uZW50cy5pbXBseShcInRpbWV6b25lT2Zmc2V0XCIsIHJlZmVyZW5jZS5nZXRUaW1lem9uZU9mZnNldCgpKTtcblxuICAgICAgICAgICAgaWYgKGZyYWdtZW50c1tcImRcIl0pIHtcbiAgICAgICAgICAgICAgICBjb21wb25lbnRzLmFzc2lnbihcImRheVwiLCBkYXRlLmRhdGUoKSk7XG4gICAgICAgICAgICAgICAgY29tcG9uZW50cy5hc3NpZ24oXCJtb250aFwiLCBkYXRlLm1vbnRoKCkgKyAxKTtcbiAgICAgICAgICAgICAgICBjb21wb25lbnRzLmFzc2lnbihcInllYXJcIiwgZGF0ZS55ZWFyKCkpO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChmcmFnbWVudHNbXCJ3ZWVrXCJdKSB7XG4gICAgICAgICAgICAgICAgY29tcG9uZW50cy5hc3NpZ24oXCJkYXlcIiwgZGF0ZS5kYXRlKCkpO1xuICAgICAgICAgICAgICAgIGNvbXBvbmVudHMuYXNzaWduKFwibW9udGhcIiwgZGF0ZS5tb250aCgpICsgMSk7XG4gICAgICAgICAgICAgICAgY29tcG9uZW50cy5hc3NpZ24oXCJ5ZWFyXCIsIGRhdGUueWVhcigpKTtcbiAgICAgICAgICAgICAgICBjb21wb25lbnRzLmltcGx5KFwid2Vla2RheVwiLCBkYXRlLmRheSgpKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgY29tcG9uZW50cy5pbXBseShcImRheVwiLCBkYXRlLmRhdGUoKSk7XG4gICAgICAgICAgICAgICAgaWYgKGZyYWdtZW50c1tcIm1vbnRoXCJdKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudHMuYXNzaWduKFwibW9udGhcIiwgZGF0ZS5tb250aCgpICsgMSk7XG4gICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudHMuYXNzaWduKFwieWVhclwiLCBkYXRlLnllYXIoKSk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50cy5pbXBseShcIm1vbnRoXCIsIGRhdGUubW9udGgoKSArIDEpO1xuICAgICAgICAgICAgICAgICAgICBpZiAoZnJhZ21lbnRzW1wieWVhclwiXSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50cy5hc3NpZ24oXCJ5ZWFyXCIsIGRhdGUueWVhcigpKTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudHMuaW1wbHkoXCJ5ZWFyXCIsIGRhdGUueWVhcigpKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBjb21wb25lbnRzO1xuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIFBhcnNpbmdSZXN1bHQgaW1wbGVtZW50cyBQYXJzZWRSZXN1bHQge1xuICAgIHJlZkRhdGU6IERhdGU7XG4gICAgaW5kZXg6IG51bWJlcjtcbiAgICB0ZXh0OiBzdHJpbmc7XG5cbiAgICByZWZlcmVuY2U6IFJlZmVyZW5jZVdpdGhUaW1lem9uZTtcblxuICAgIHN0YXJ0OiBQYXJzaW5nQ29tcG9uZW50cztcbiAgICBlbmQ/OiBQYXJzaW5nQ29tcG9uZW50cztcblxuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICByZWZlcmVuY2U6IFJlZmVyZW5jZVdpdGhUaW1lem9uZSxcbiAgICAgICAgaW5kZXg6IG51bWJlcixcbiAgICAgICAgdGV4dDogc3RyaW5nLFxuICAgICAgICBzdGFydD86IFBhcnNpbmdDb21wb25lbnRzLFxuICAgICAgICBlbmQ/OiBQYXJzaW5nQ29tcG9uZW50c1xuICAgICkge1xuICAgICAgICB0aGlzLnJlZmVyZW5jZSA9IHJlZmVyZW5jZTtcbiAgICAgICAgdGhpcy5yZWZEYXRlID0gcmVmZXJlbmNlLmluc3RhbnQ7XG4gICAgICAgIHRoaXMuaW5kZXggPSBpbmRleDtcbiAgICAgICAgdGhpcy50ZXh0ID0gdGV4dDtcbiAgICAgICAgdGhpcy5zdGFydCA9IHN0YXJ0IHx8IG5ldyBQYXJzaW5nQ29tcG9uZW50cyhyZWZlcmVuY2UpO1xuICAgICAgICB0aGlzLmVuZCA9IGVuZDtcbiAgICB9XG5cbiAgICBjbG9uZSgpIHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gbmV3IFBhcnNpbmdSZXN1bHQodGhpcy5yZWZlcmVuY2UsIHRoaXMuaW5kZXgsIHRoaXMudGV4dCk7XG4gICAgICAgIHJlc3VsdC5zdGFydCA9IHRoaXMuc3RhcnQgPyB0aGlzLnN0YXJ0LmNsb25lKCkgOiBudWxsO1xuICAgICAgICByZXN1bHQuZW5kID0gdGhpcy5lbmQgPyB0aGlzLmVuZC5jbG9uZSgpIDogbnVsbDtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG5cbiAgICBkYXRlKCk6IERhdGUge1xuICAgICAgICByZXR1cm4gdGhpcy5zdGFydC5kYXRlKCk7XG4gICAgfVxuXG4gICAgYWRkVGFnKHRhZzogc3RyaW5nKTogUGFyc2luZ1Jlc3VsdCB7XG4gICAgICAgIHRoaXMuc3RhcnQuYWRkVGFnKHRhZyk7XG4gICAgICAgIGlmICh0aGlzLmVuZCkge1xuICAgICAgICAgICAgdGhpcy5lbmQuYWRkVGFnKHRhZyk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgYWRkVGFncyh0YWdzOiBzdHJpbmdbXSB8IFNldDxzdHJpbmc+KTogUGFyc2luZ1Jlc3VsdCB7XG4gICAgICAgIHRoaXMuc3RhcnQuYWRkVGFncyh0YWdzKTtcbiAgICAgICAgaWYgKHRoaXMuZW5kKSB7XG4gICAgICAgICAgICB0aGlzLmVuZC5hZGRUYWdzKHRhZ3MpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIHRhZ3MoKTogU2V0PHN0cmluZz4ge1xuICAgICAgICBjb25zdCBjb21iaW5lZFRhZ3M6IFNldDxzdHJpbmc+ID0gbmV3IFNldCh0aGlzLnN0YXJ0LnRhZ3MoKSk7XG4gICAgICAgIGlmICh0aGlzLmVuZCkge1xuICAgICAgICAgICAgZm9yIChjb25zdCB0YWcgb2YgdGhpcy5lbmQudGFncygpKSB7XG4gICAgICAgICAgICAgICAgY29tYmluZWRUYWdzLmFkZCh0YWcpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBjb21iaW5lZFRhZ3M7XG4gICAgfVxuXG4gICAgdG9TdHJpbmcoKSB7XG4gICAgICAgIGNvbnN0IHRhZ3MgPSBBcnJheS5mcm9tKHRoaXMudGFncygpKS5zb3J0KCk7XG4gICAgICAgIHJldHVybiBgW1BhcnNpbmdSZXN1bHQge2luZGV4OiAke3RoaXMuaW5kZXh9LCB0ZXh0OiAnJHt0aGlzLnRleHR9JywgdGFnczogJHtKU09OLnN0cmluZ2lmeSh0YWdzKX0gLi4ufV1gO1xuICAgIH1cbn1cbiIsICJpbXBvcnQgeyBEZWJ1Z0NvbnN1bWUsIERlYnVnSGFuZGxlciB9IGZyb20gXCIuL2RlYnVnZ2luZ1wiO1xuXG5leHBvcnQgaW50ZXJmYWNlIFBhcnNpbmdPcHRpb24ge1xuICAgIC8qKlxuICAgICAqIFRvIHBhcnNlIG9ubHkgZm9yd2FyZCBkYXRlcyAodGhlIHJlc3VsdHMgc2hvdWxkIGJlIGFmdGVyIHRoZSByZWZlcmVuY2UgZGF0ZSkuXG4gICAgICogVGhpcyBlZmZlY3RzIGRhdGUvdGltZSBpbXBsaWNhdGlvbiAoZS5nLiB3ZWVrZGF5IG9yIHRpbWUgbWVudGlvbmluZylcbiAgICAgKi9cbiAgICBmb3J3YXJkRGF0ZT86IGJvb2xlYW47XG5cbiAgICAvKipcbiAgICAgKiBBZGRpdGlvbmFsIHRpbWV6b25lIGtleXdvcmRzIGZvciB0aGUgcGFyc2VycyB0byByZWNvZ25pemUuXG4gICAgICogQW55IHZhbHVlIHByb3ZpZGVkIHdpbGwgb3ZlcnJpZGUgdGhlIGRlZmF1bHQgaGFuZGxpbmcgb2YgdGhhdCB2YWx1ZS5cbiAgICAgKi9cbiAgICB0aW1lem9uZXM/OiBUaW1lem9uZUFiYnJNYXA7XG5cbiAgICAvKipcbiAgICAgKiBJbnRlcm5hbCBkZWJ1ZyBldmVudCBoYW5kbGVyLlxuICAgICAqIEBpbnRlcm5hbFxuICAgICAqL1xuICAgIGRlYnVnPzogRGVidWdIYW5kbGVyIHwgRGVidWdDb25zdW1lO1xufVxuXG4vKipcbiAqIFNvbWUgdGltZXpvbmUgYWJicmV2aWF0aW9ucyBhcmUgYW1iaWd1b3VzIGluIHRoYXQgdGhleSByZWZlciB0byBkaWZmZXJlbnQgb2Zmc2V0c1xuICogZGVwZW5kaW5nIG9uIHRoZSB0aW1lIG9mIHllYXIgXHUyMDE0IGRheWxpZ2h0IHNhdmluZ3MgdGltZSAoRFNUKSwgb3Igbm9uLURTVC4gVGhpcyBpbnRlcmZhY2VcbiAqIGFsbG93cyBkZWZpbmluZyBzdWNoIHRpbWV6b25lc1xuICovXG5leHBvcnQgaW50ZXJmYWNlIEFtYmlndW91c1RpbWV6b25lTWFwIHtcbiAgICB0aW1lem9uZU9mZnNldER1cmluZ0RzdDogbnVtYmVyO1xuICAgIHRpbWV6b25lT2Zmc2V0Tm9uRHN0OiBudW1iZXI7XG4gICAgLyoqXG4gICAgICogUmV0dXJuIHRoZSBzdGFydCBkYXRlIG9mIERTVCBmb3IgdGhlIGdpdmVuIHllYXIuXG4gICAgICogdGltZXpvbmUudHMgY29udGFpbnMgaGVscGVyIG1ldGhvZHMgZm9yIGNvbW1vbiBzdWNoIHJ1bGVzLlxuICAgICAqL1xuICAgIGRzdFN0YXJ0OiAoeWVhcjogbnVtYmVyKSA9PiBEYXRlO1xuICAgIC8qKlxuICAgICAqIFJldHVybiB0aGUgZW5kIGRhdGUgb2YgRFNUIGZvciB0aGUgZ2l2ZW4geWVhci5cbiAgICAgKiB0aW1lem9uZS50cyBjb250YWlucyBoZWxwZXIgbWV0aG9kcyBmb3IgY29tbW9uIHN1Y2ggcnVsZXMuXG4gICAgICovXG4gICAgZHN0RW5kOiAoeWVhcjogbnVtYmVyKSA9PiBEYXRlO1xufVxuXG4vKipcbiAqIEEgbWFwIGRlc2NyaWJpbmcgaG93IHRpbWV6b25lIGFiYnJldmlhdGlvbnMgc2hvdWxkIG1hcCB0byB0aW1lIG9mZnNldHMuXG4gKiBTdXBwb3J0cyBib3RoIHVuYW1iaWdvdXMgbWFwcGluZ3MgYWJicmV2aWF0aW9uID0+IG9mZnNldCxcbiAqIGFuZCBhbWJpZ3VvdXMgbWFwcGluZ3MsIHdoZXJlIHRoZSBvZmZzZXQgd2lsbCBkZXBlbmQgb24gd2hldGhlciB0aGVcbiAqIHRpbWUgaW4gcXVlc3Rpb24gaXMgZHVyaW5nIGRheWxpZ2h0IHNhdmluZ3MgdGltZSBvciBub3QuXG4gKi9cbmV4cG9ydCB0eXBlIFRpbWV6b25lQWJick1hcCA9IHsgW2tleTogc3RyaW5nXTogbnVtYmVyIHwgQW1iaWd1b3VzVGltZXpvbmVNYXAgfTtcblxuZXhwb3J0IGludGVyZmFjZSBQYXJzaW5nUmVmZXJlbmNlIHtcbiAgICAvKipcbiAgICAgKiBSZWZlcmVuY2UgZGF0ZS4gVGhlIGluc3RhbnQgKEphdmFTY3JpcHQgRGF0ZSBvYmplY3QpIHdoZW4gdGhlIGlucHV0IGlzIHdyaXR0ZW4gb3IgbWVudGlvbi5cbiAgICAgKiBUaGlzIGVmZmVjdCBkYXRlL3RpbWUgaW1wbGljYXRpb24gKGUuZy4gd2Vla2RheSBvciB0aW1lIG1lbnRpb25pbmcpLlxuICAgICAqIChkZWZhdWx0ID0gbm93KVxuICAgICAqL1xuICAgIGluc3RhbnQ/OiBEYXRlO1xuXG4gICAgLyoqXG4gICAgICogUmVmZXJlbmNlIHRpbWV6b25lLiBUaGUgdGltZXpvbmUgd2hlcmUgdGhlIGlucHV0IGlzIHdyaXR0ZW4gb3IgbWVudGlvbi5cbiAgICAgKiBEYXRlL3RpbWUgaW1wbGljYXRpb24gd2lsbCBhY2NvdW50IHRoZSBkaWZmZXJlbmNlIGJldHdlZW4gaW5wdXQgdGltZXpvbmUgYW5kIHRoZSBjdXJyZW50IHN5c3RlbSB0aW1lem9uZS5cbiAgICAgKiAoZGVmYXVsdCA9IGN1cnJlbnQgdGltZXpvbmUpXG4gICAgICovXG4gICAgdGltZXpvbmU/OiBzdHJpbmcgfCBudW1iZXI7XG59XG5cbi8qKlxuICogUGFyc2VkIHJlc3VsdCBvciBmaW5hbCBvdXRwdXQuXG4gKiBFYWNoIHJlc3VsdCBvYmplY3QgcmVwcmVzZW50cyBhIGRhdGUvdGltZSAob3IgZGF0ZS90aW1lLXJhbmdlKSBtZW50aW9uaW5nIGluIHRoZSBpbnB1dC5cbiAqL1xuZXhwb3J0IGludGVyZmFjZSBQYXJzZWRSZXN1bHQge1xuICAgIHJlYWRvbmx5IHJlZkRhdGU6IERhdGU7XG4gICAgcmVhZG9ubHkgaW5kZXg6IG51bWJlcjtcbiAgICByZWFkb25seSB0ZXh0OiBzdHJpbmc7XG5cbiAgICByZWFkb25seSBzdGFydDogUGFyc2VkQ29tcG9uZW50cztcbiAgICByZWFkb25seSBlbmQ/OiBQYXJzZWRDb21wb25lbnRzO1xuXG4gICAgLyoqXG4gICAgICogQHJldHVybiBhIGphdmFzY3JpcHQgZGF0ZSBvYmplY3QgY3JlYXRlZCBmcm9tIHRoZSBgcmVzdWx0LnN0YXJ0YC5cbiAgICAgKi9cbiAgICBkYXRlKCk6IERhdGU7XG5cbiAgICAvKipcbiAgICAgKiBAcmV0dXJuIGRlYnVnZ2luZyB0YWdzIGNvbWJpbmVkIG9mIHRoZSBgcmVzdWx0LnN0YXJ0YCBhbmQgYHJlc3VsdC5lbmRgLlxuICAgICAqL1xuICAgIHRhZ3MoKTogU2V0PHN0cmluZz47XG59XG5cbi8qKlxuICogQSBjb2xsZWN0aW9uIG9mIHBhcnNlZCBkYXRlL3RpbWUgY29tcG9uZW50cyAoZS5nLiBkYXksIGhvdXIsIG1pbnV0ZSwgLi4uLCBldGMpLlxuICpcbiAqIEVhY2ggcGFyc2VkIGNvbXBvbmVudCBoYXMgdGhyZWUgZGlmZmVyZW50IGxldmVscyBvZiBjZXJ0YWludHkuXG4gKiAtICpDZXJ0YWluKiAob3IgKktub3duKik6IFRoZSBjb21wb25lbnQgaXMgZGlyZWN0bHkgbWVudGlvbmVkIGFuZCBwYXJzZWQuXG4gKiAtICpJbXBsaWVkKjogVGhlIGNvbXBvbmVudCBpcyBub3QgZGlyZWN0bHkgbWVudGlvbmVkLCBidXQgaW1wbGllZCBieSBvdGhlciBwYXJzZWQgaW5mb3JtYXRpb24uXG4gKiAtICpVbmtub3duKjogQ29tcGxldGVseSBubyBtZW50aW9uIG9mIHRoZSBjb21wb25lbnQuXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgUGFyc2VkQ29tcG9uZW50cyB7XG4gICAgLyoqXG4gICAgICogQ2hlY2sgdGhlIGNvbXBvbmVudCBjZXJ0YWlubHkgaWYgdGhlIGNvbXBvbmVudCBpcyAqQ2VydGFpbiogKG9yICpLbm93biopXG4gICAgICovXG4gICAgaXNDZXJ0YWluKGNvbXBvbmVudDogQ29tcG9uZW50KTogYm9vbGVhbjtcblxuICAgIC8qKlxuICAgICAqIEdldCB0aGUgY29tcG9uZW50IHZhbHVlIGZvciBlaXRoZXIgKkNlcnRhaW4qIG9yICpJbXBsaWVkKiB2YWx1ZS5cbiAgICAgKi9cbiAgICBnZXQoY29tcG9uZW50OiBDb21wb25lbnQpOiBudW1iZXIgfCBudWxsO1xuXG4gICAgLyoqXG4gICAgICogQHJldHVybiBhIGphdmFzY3JpcHQgZGF0ZSBvYmplY3QuXG4gICAgICovXG4gICAgZGF0ZSgpOiBEYXRlO1xuXG4gICAgLyoqXG4gICAgICogQHJldHVybiBkZWJ1Z2dpbmcgdGFncyBvZiB0aGUgcGFyc2VkIGNvbXBvbmVudC5cbiAgICAgKi9cbiAgICB0YWdzKCk6IFNldDxzdHJpbmc+O1xufVxuXG5leHBvcnQgdHlwZSBDb21wb25lbnQgPVxuICAgIHwgXCJ5ZWFyXCJcbiAgICB8IFwibW9udGhcIlxuICAgIHwgXCJkYXlcIlxuICAgIHwgXCJ3ZWVrZGF5XCJcbiAgICB8IFwiaG91clwiXG4gICAgfCBcIm1pbnV0ZVwiXG4gICAgfCBcInNlY29uZFwiXG4gICAgfCBcIm1pbGxpc2Vjb25kXCJcbiAgICB8IFwibWVyaWRpZW1cIlxuICAgIHwgXCJ0aW1lem9uZU9mZnNldFwiO1xuXG5leHBvcnQgZW51bSBNZXJpZGllbSB7XG4gICAgQU0gPSAwLFxuICAgIFBNID0gMSxcbn1cblxuZXhwb3J0IGVudW0gV2Vla2RheSB7XG4gICAgU1VOREFZID0gMCxcbiAgICBNT05EQVkgPSAxLFxuICAgIFRVRVNEQVkgPSAyLFxuICAgIFdFRE5FU0RBWSA9IDMsXG4gICAgVEhVUlNEQVkgPSA0LFxuICAgIEZSSURBWSA9IDUsXG4gICAgU0FUVVJEQVkgPSA2LFxufVxuXG5leHBvcnQgZW51bSBNb250aCB7XG4gICAgSkFOVUFSWSA9IDEsXG4gICAgRkVCUlVBUlkgPSAyLFxuICAgIE1BUkNIID0gMyxcbiAgICBBUFJJTCA9IDQsXG4gICAgTUFZID0gNSxcbiAgICBKVU5FID0gNixcbiAgICBKVUxZID0gNyxcbiAgICBBVUdVU1QgPSA4LFxuICAgIFNFUFRFTUJFUiA9IDksXG4gICAgT0NUT0JFUiA9IDEwLFxuICAgIE5PVkVNQkVSID0gMTEsXG4gICAgREVDRU1CRVIgPSAxMixcbn1cbiIsICJpbXBvcnQgeyBQYXJzaW5nQ29tcG9uZW50cyB9IGZyb20gXCIuLi9yZXN1bHRzXCI7XG5pbXBvcnQgZGF5anMgZnJvbSBcImRheWpzXCI7XG5pbXBvcnQgeyBNZXJpZGllbSB9IGZyb20gXCIuLi90eXBlc1wiO1xuXG5leHBvcnQgZnVuY3Rpb24gYXNzaWduVGhlTmV4dERheShjb21wb25lbnQ6IFBhcnNpbmdDb21wb25lbnRzLCB0YXJnZXREYXlKczogZGF5anMuRGF5anMpIHtcbiAgICB0YXJnZXREYXlKcyA9IHRhcmdldERheUpzLmFkZCgxLCBcImRheVwiKTtcbiAgICBhc3NpZ25TaW1pbGFyRGF0ZShjb21wb25lbnQsIHRhcmdldERheUpzKTtcbiAgICBpbXBseVNpbWlsYXJUaW1lKGNvbXBvbmVudCwgdGFyZ2V0RGF5SnMpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaW1wbHlUaGVOZXh0RGF5KGNvbXBvbmVudDogUGFyc2luZ0NvbXBvbmVudHMsIHRhcmdldERheUpzOiBkYXlqcy5EYXlqcykge1xuICAgIHRhcmdldERheUpzID0gdGFyZ2V0RGF5SnMuYWRkKDEsIFwiZGF5XCIpO1xuICAgIGltcGx5U2ltaWxhckRhdGUoY29tcG9uZW50LCB0YXJnZXREYXlKcyk7XG4gICAgaW1wbHlTaW1pbGFyVGltZShjb21wb25lbnQsIHRhcmdldERheUpzKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFzc2lnblNpbWlsYXJEYXRlKGNvbXBvbmVudDogUGFyc2luZ0NvbXBvbmVudHMsIHRhcmdldERheUpzOiBkYXlqcy5EYXlqcykge1xuICAgIGNvbXBvbmVudC5hc3NpZ24oXCJkYXlcIiwgdGFyZ2V0RGF5SnMuZGF0ZSgpKTtcbiAgICBjb21wb25lbnQuYXNzaWduKFwibW9udGhcIiwgdGFyZ2V0RGF5SnMubW9udGgoKSArIDEpO1xuICAgIGNvbXBvbmVudC5hc3NpZ24oXCJ5ZWFyXCIsIHRhcmdldERheUpzLnllYXIoKSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhc3NpZ25TaW1pbGFyVGltZShjb21wb25lbnQ6IFBhcnNpbmdDb21wb25lbnRzLCB0YXJnZXREYXlKczogZGF5anMuRGF5anMpIHtcbiAgICBjb21wb25lbnQuYXNzaWduKFwiaG91clwiLCB0YXJnZXREYXlKcy5ob3VyKCkpO1xuICAgIGNvbXBvbmVudC5hc3NpZ24oXCJtaW51dGVcIiwgdGFyZ2V0RGF5SnMubWludXRlKCkpO1xuICAgIGNvbXBvbmVudC5hc3NpZ24oXCJzZWNvbmRcIiwgdGFyZ2V0RGF5SnMuc2Vjb25kKCkpO1xuICAgIGNvbXBvbmVudC5hc3NpZ24oXCJtaWxsaXNlY29uZFwiLCB0YXJnZXREYXlKcy5taWxsaXNlY29uZCgpKTtcbiAgICBpZiAoY29tcG9uZW50LmdldChcImhvdXJcIikgPCAxMikge1xuICAgICAgICBjb21wb25lbnQuYXNzaWduKFwibWVyaWRpZW1cIiwgTWVyaWRpZW0uQU0pO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbXBvbmVudC5hc3NpZ24oXCJtZXJpZGllbVwiLCBNZXJpZGllbS5QTSk7XG4gICAgfVxufVxuXG4vKipcbiAqIEBkZXByZWNhdGVkIFVzZSBgZGF0ZXMuaW1wbHlTaW1pbGFyRGF0ZWAgd2l0aCBub3JtYWwgSmF2YXNjcmlwdCBEYXRlIGluc3RlYWQuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBpbXBseVNpbWlsYXJEYXRlKGNvbXBvbmVudDogUGFyc2luZ0NvbXBvbmVudHMsIHRhcmdldERheUpzOiBkYXlqcy5EYXlqcykge1xuICAgIGNvbXBvbmVudC5pbXBseShcImRheVwiLCB0YXJnZXREYXlKcy5kYXRlKCkpO1xuICAgIGNvbXBvbmVudC5pbXBseShcIm1vbnRoXCIsIHRhcmdldERheUpzLm1vbnRoKCkgKyAxKTtcbiAgICBjb21wb25lbnQuaW1wbHkoXCJ5ZWFyXCIsIHRhcmdldERheUpzLnllYXIoKSk7XG59XG5cbi8qKlxuICogQGRlcHJlY2F0ZWQgVXNlIGBkYXRlcy5pbXBseVNpbWlsYXJUaW1lYCB3aXRoIG5vcm1hbCBKYXZhc2NyaXB0IERhdGUgaW5zdGVhZC5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGltcGx5U2ltaWxhclRpbWUoY29tcG9uZW50OiBQYXJzaW5nQ29tcG9uZW50cywgdGFyZ2V0RGF5SnM6IGRheWpzLkRheWpzKSB7XG4gICAgY29tcG9uZW50LmltcGx5KFwiaG91clwiLCB0YXJnZXREYXlKcy5ob3VyKCkpO1xuICAgIGNvbXBvbmVudC5pbXBseShcIm1pbnV0ZVwiLCB0YXJnZXREYXlKcy5taW51dGUoKSk7XG4gICAgY29tcG9uZW50LmltcGx5KFwic2Vjb25kXCIsIHRhcmdldERheUpzLnNlY29uZCgpKTtcbiAgICBjb21wb25lbnQuaW1wbHkoXCJtaWxsaXNlY29uZFwiLCB0YXJnZXREYXlKcy5taWxsaXNlY29uZCgpKTtcbn1cbiIsICJpbXBvcnQgZGF5anMgZnJvbSBcImRheWpzXCI7XG5pbXBvcnQgeyBUaW1lem9uZUFiYnJNYXAsIFdlZWtkYXksIE1vbnRoIH0gZnJvbSBcIi4vdHlwZXNcIjtcblxuZXhwb3J0IGNvbnN0IFRJTUVaT05FX0FCQlJfTUFQOiBUaW1lem9uZUFiYnJNYXAgPSB7XG4gICAgQUNEVDogNjMwLFxuICAgIEFDU1Q6IDU3MCxcbiAgICBBRFQ6IC0xODAsXG4gICAgQUVEVDogNjYwLFxuICAgIEFFU1Q6IDYwMCxcbiAgICBBRlQ6IDI3MCxcbiAgICBBS0RUOiAtNDgwLFxuICAgIEFLU1Q6IC01NDAsXG4gICAgQUxNVDogMzYwLFxuICAgIEFNU1Q6IC0xODAsXG4gICAgQU1UOiAtMjQwLFxuICAgIEFOQVNUOiA3MjAsXG4gICAgQU5BVDogNzIwLFxuICAgIEFRVFQ6IDMwMCxcbiAgICBBUlQ6IC0xODAsXG4gICAgQVNUOiAtMjQwLFxuICAgIEFXRFQ6IDU0MCxcbiAgICBBV1NUOiA0ODAsXG4gICAgQVpPU1Q6IDAsXG4gICAgQVpPVDogLTYwLFxuICAgIEFaU1Q6IDMwMCxcbiAgICBBWlQ6IDI0MCxcbiAgICBCTlQ6IDQ4MCxcbiAgICBCT1Q6IC0yNDAsXG4gICAgQlJTVDogLTEyMCxcbiAgICBCUlQ6IC0xODAsXG4gICAgQlNUOiA2MCxcbiAgICBCVFQ6IDM2MCxcbiAgICBDQVNUOiA0ODAsXG4gICAgQ0FUOiAxMjAsXG4gICAgQ0NUOiAzOTAsXG4gICAgQ0RUOiAtMzAwLFxuICAgIENFU1Q6IDEyMCxcbiAgICAvLyBOb3RlOiBNYW55IHNvdXJjZXMgZGVmaW5lIENFVCBhcyBhIGNvbnN0YW50IFVUQysxLiBJbiBjb21tb24gdXNhZ2UsIGhvd2V2ZXIsXG4gICAgLy8gQ0VUIHVzdWFsbHkgcmVmZXJzIHRvIHRoZSB0aW1lIG9ic2VydmVkIGluIG1vc3Qgb2YgRXVyb3BlLCBiZSBpdCBzdGFuZGFyZCB0aW1lIG9yIGRheWxpZ2h0IHNhdmluZyB0aW1lLlxuICAgIENFVDoge1xuICAgICAgICB0aW1lem9uZU9mZnNldER1cmluZ0RzdDogMiAqIDYwLFxuICAgICAgICB0aW1lem9uZU9mZnNldE5vbkRzdDogNjAsXG4gICAgICAgIGRzdFN0YXJ0OiAoeWVhcjogbnVtYmVyKSA9PiBnZXRMYXN0V2Vla2RheU9mTW9udGgoeWVhciwgTW9udGguTUFSQ0gsIFdlZWtkYXkuU1VOREFZLCAyKSxcbiAgICAgICAgZHN0RW5kOiAoeWVhcjogbnVtYmVyKSA9PiBnZXRMYXN0V2Vla2RheU9mTW9udGgoeWVhciwgTW9udGguT0NUT0JFUiwgV2Vla2RheS5TVU5EQVksIDMpLFxuICAgIH0sXG4gICAgQ0hBRFQ6IDgyNSxcbiAgICBDSEFTVDogNzY1LFxuICAgIENLVDogLTYwMCxcbiAgICBDTFNUOiAtMTgwLFxuICAgIENMVDogLTI0MCxcbiAgICBDT1Q6IC0zMDAsXG4gICAgQ1NUOiAtMzYwLFxuICAgIENUOiB7XG4gICAgICAgIHRpbWV6b25lT2Zmc2V0RHVyaW5nRHN0OiAtNSAqIDYwLFxuICAgICAgICB0aW1lem9uZU9mZnNldE5vbkRzdDogLTYgKiA2MCxcbiAgICAgICAgZHN0U3RhcnQ6ICh5ZWFyOiBudW1iZXIpID0+IGdldE50aFdlZWtkYXlPZk1vbnRoKHllYXIsIE1vbnRoLk1BUkNILCBXZWVrZGF5LlNVTkRBWSwgMiwgMiksXG4gICAgICAgIGRzdEVuZDogKHllYXI6IG51bWJlcikgPT4gZ2V0TnRoV2Vla2RheU9mTW9udGgoeWVhciwgTW9udGguTk9WRU1CRVIsIFdlZWtkYXkuU1VOREFZLCAxLCAyKSxcbiAgICB9LFxuICAgIENWVDogLTYwLFxuICAgIENYVDogNDIwLFxuICAgIENoU1Q6IDYwMCxcbiAgICBEQVZUOiA0MjAsXG4gICAgRUFTU1Q6IC0zMDAsXG4gICAgRUFTVDogLTM2MCxcbiAgICBFQVQ6IDE4MCxcbiAgICBFQ1Q6IC0zMDAsXG4gICAgRURUOiAtMjQwLFxuICAgIEVFU1Q6IDE4MCxcbiAgICBFRVQ6IDEyMCxcbiAgICBFR1NUOiAwLFxuICAgIEVHVDogLTYwLFxuICAgIEVTVDogLTMwMCxcbiAgICBFVDoge1xuICAgICAgICB0aW1lem9uZU9mZnNldER1cmluZ0RzdDogLTQgKiA2MCxcbiAgICAgICAgdGltZXpvbmVPZmZzZXROb25Ec3Q6IC01ICogNjAsXG4gICAgICAgIGRzdFN0YXJ0OiAoeWVhcjogbnVtYmVyKSA9PiBnZXROdGhXZWVrZGF5T2ZNb250aCh5ZWFyLCBNb250aC5NQVJDSCwgV2Vla2RheS5TVU5EQVksIDIsIDIpLFxuICAgICAgICBkc3RFbmQ6ICh5ZWFyOiBudW1iZXIpID0+IGdldE50aFdlZWtkYXlPZk1vbnRoKHllYXIsIE1vbnRoLk5PVkVNQkVSLCBXZWVrZGF5LlNVTkRBWSwgMSwgMiksXG4gICAgfSxcbiAgICBGSlNUOiA3ODAsXG4gICAgRkpUOiA3MjAsXG4gICAgRktTVDogLTE4MCxcbiAgICBGS1Q6IC0yNDAsXG4gICAgRk5UOiAtMTIwLFxuICAgIEdBTFQ6IC0zNjAsXG4gICAgR0FNVDogLTU0MCxcbiAgICBHRVQ6IDI0MCxcbiAgICBHRlQ6IC0xODAsXG4gICAgR0lMVDogNzIwLFxuICAgIEdNVDogMCxcbiAgICBHU1Q6IDI0MCxcbiAgICBHWVQ6IC0yNDAsXG4gICAgSEFBOiAtMTgwLFxuICAgIEhBQzogLTMwMCxcbiAgICBIQURUOiAtNTQwLFxuICAgIEhBRTogLTI0MCxcbiAgICBIQVA6IC00MjAsXG4gICAgSEFSOiAtMzYwLFxuICAgIEhBU1Q6IC02MDAsXG4gICAgSEFUOiAtOTAsXG4gICAgSEFZOiAtNDgwLFxuICAgIEhLVDogNDgwLFxuICAgIEhMVjogLTIxMCxcbiAgICBITkE6IC0yNDAsXG4gICAgSE5DOiAtMzYwLFxuICAgIEhORTogLTMwMCxcbiAgICBITlA6IC00ODAsXG4gICAgSE5SOiAtNDIwLFxuICAgIEhOVDogLTE1MCxcbiAgICBITlk6IC01NDAsXG4gICAgSE9WVDogNDIwLFxuICAgIElDVDogNDIwLFxuICAgIElEVDogMTgwLFxuICAgIElPVDogMzYwLFxuICAgIElSRFQ6IDI3MCxcbiAgICBJUktTVDogNTQwLFxuICAgIElSS1Q6IDU0MCxcbiAgICBJUlNUOiAyMTAsXG4gICAgSVNUOiAzMzAsXG4gICAgSlNUOiA1NDAsXG4gICAgS0dUOiAzNjAsXG4gICAgS1JBU1Q6IDQ4MCxcbiAgICBLUkFUOiA0ODAsXG4gICAgS1NUOiA1NDAsXG4gICAgS1VZVDogMjQwLFxuICAgIExIRFQ6IDY2MCxcbiAgICBMSFNUOiA2MzAsXG4gICAgTElOVDogODQwLFxuICAgIE1BR1NUOiA3MjAsXG4gICAgTUFHVDogNzIwLFxuICAgIE1BUlQ6IC01MTAsXG4gICAgTUFXVDogMzAwLFxuICAgIE1EVDogLTM2MCxcbiAgICBNRVNaOiAxMjAsXG4gICAgTUVaOiA2MCxcbiAgICBNSFQ6IDcyMCxcbiAgICBNTVQ6IDM5MCxcbiAgICBNU0Q6IDI0MCxcbiAgICBNU0s6IDE4MCxcbiAgICBNU1Q6IC00MjAsXG4gICAgTVQ6IHtcbiAgICAgICAgdGltZXpvbmVPZmZzZXREdXJpbmdEc3Q6IC02ICogNjAsXG4gICAgICAgIHRpbWV6b25lT2Zmc2V0Tm9uRHN0OiAtNyAqIDYwLFxuICAgICAgICBkc3RTdGFydDogKHllYXI6IG51bWJlcikgPT4gZ2V0TnRoV2Vla2RheU9mTW9udGgoeWVhciwgTW9udGguTUFSQ0gsIFdlZWtkYXkuU1VOREFZLCAyLCAyKSxcbiAgICAgICAgZHN0RW5kOiAoeWVhcjogbnVtYmVyKSA9PiBnZXROdGhXZWVrZGF5T2ZNb250aCh5ZWFyLCBNb250aC5OT1ZFTUJFUiwgV2Vla2RheS5TVU5EQVksIDEsIDIpLFxuICAgIH0sXG4gICAgTVVUOiAyNDAsXG4gICAgTVZUOiAzMDAsXG4gICAgTVlUOiA0ODAsXG4gICAgTkNUOiA2NjAsXG4gICAgTkRUOiAtOTAsXG4gICAgTkZUOiA2OTAsXG4gICAgTk9WU1Q6IDQyMCxcbiAgICBOT1ZUOiAzNjAsXG4gICAgTlBUOiAzNDUsXG4gICAgTlNUOiAtMTUwLFxuICAgIE5VVDogLTY2MCxcbiAgICBOWkRUOiA3ODAsXG4gICAgTlpTVDogNzIwLFxuICAgIE9NU1NUOiA0MjAsXG4gICAgT01TVDogNDIwLFxuICAgIFBEVDogLTQyMCxcbiAgICBQRVQ6IC0zMDAsXG4gICAgUEVUU1Q6IDcyMCxcbiAgICBQRVRUOiA3MjAsXG4gICAgUEdUOiA2MDAsXG4gICAgUEhPVDogNzgwLFxuICAgIFBIVDogNDgwLFxuICAgIFBLVDogMzAwLFxuICAgIFBNRFQ6IC0xMjAsXG4gICAgUE1TVDogLTE4MCxcbiAgICBQT05UOiA2NjAsXG4gICAgUFNUOiAtNDgwLFxuICAgIFBUOiB7XG4gICAgICAgIHRpbWV6b25lT2Zmc2V0RHVyaW5nRHN0OiAtNyAqIDYwLFxuICAgICAgICB0aW1lem9uZU9mZnNldE5vbkRzdDogLTggKiA2MCxcbiAgICAgICAgZHN0U3RhcnQ6ICh5ZWFyOiBudW1iZXIpID0+IGdldE50aFdlZWtkYXlPZk1vbnRoKHllYXIsIE1vbnRoLk1BUkNILCBXZWVrZGF5LlNVTkRBWSwgMiwgMiksXG4gICAgICAgIGRzdEVuZDogKHllYXI6IG51bWJlcikgPT4gZ2V0TnRoV2Vla2RheU9mTW9udGgoeWVhciwgTW9udGguTk9WRU1CRVIsIFdlZWtkYXkuU1VOREFZLCAxLCAyKSxcbiAgICB9LFxuICAgIFBXVDogNTQwLFxuICAgIFBZU1Q6IC0xODAsXG4gICAgUFlUOiAtMjQwLFxuICAgIFJFVDogMjQwLFxuICAgIFNBTVQ6IDI0MCxcbiAgICBTQVNUOiAxMjAsXG4gICAgU0JUOiA2NjAsXG4gICAgU0NUOiAyNDAsXG4gICAgU0dUOiA0ODAsXG4gICAgU1JUOiAtMTgwLFxuICAgIFNTVDogLTY2MCxcbiAgICBUQUhUOiAtNjAwLFxuICAgIFRGVDogMzAwLFxuICAgIFRKVDogMzAwLFxuICAgIFRLVDogNzgwLFxuICAgIFRMVDogNTQwLFxuICAgIFRNVDogMzAwLFxuICAgIFRWVDogNzIwLFxuICAgIFVMQVQ6IDQ4MCxcbiAgICBVVEM6IDAsXG4gICAgVVlTVDogLTEyMCxcbiAgICBVWVQ6IC0xODAsXG4gICAgVVpUOiAzMDAsXG4gICAgVkVUOiAtMjEwLFxuICAgIFZMQVNUOiA2NjAsXG4gICAgVkxBVDogNjYwLFxuICAgIFZVVDogNjYwLFxuICAgIFdBU1Q6IDEyMCxcbiAgICBXQVQ6IDYwLFxuICAgIFdFU1Q6IDYwLFxuICAgIFdFU1o6IDYwLFxuICAgIFdFVDogMCxcbiAgICBXRVo6IDAsXG4gICAgV0ZUOiA3MjAsXG4gICAgV0dTVDogLTEyMCxcbiAgICBXR1Q6IC0xODAsXG4gICAgV0lCOiA0MjAsXG4gICAgV0lUOiA1NDAsXG4gICAgV0lUQTogNDgwLFxuICAgIFdTVDogNzgwLFxuICAgIFdUOiAwLFxuICAgIFlBS1NUOiA2MDAsXG4gICAgWUFLVDogNjAwLFxuICAgIFlBUFQ6IDYwMCxcbiAgICBZRUtTVDogMzYwLFxuICAgIFlFS1Q6IDM2MCxcbn07XG5cbi8qKlxuICogR2V0IHRoZSBkYXRlIHdoaWNoIGlzIHRoZSBudGggb2NjdXJlbmNlIG9mIGEgZ2l2ZW4gd2Vla2RheSBpbiBhIGdpdmVuIG1vbnRoIGFuZCB5ZWFyLlxuICpcbiAqIEBwYXJhbSB5ZWFyIFRoZSB5ZWFyIGZvciB3aGljaCB0byBmaW5kIHRoZSBkYXRlXG4gKiBAcGFyYW0gbW9udGggVGhlIG1vbnRoIGluIHdoaWNoIHRoZSBkYXRlIG9jY3Vyc1xuICogQHBhcmFtIHdlZWtkYXkgVGhlIHdlZWtkYXkgb24gd2hpY2ggdGhlIGRhdGUgb2NjdXJzXG4gKiBAcGFyYW0gbiBUaGUgbnRoIG9jY3VyZW5jZSBvZiB0aGUgZ2l2ZW4gd2Vla2RheSBvbiB0aGUgbW9udGggdG8gcmV0dXJuXG4gKiBAcGFyYW0gaG91ciBUaGUgaG91ciBvZiBkYXkgd2hpY2ggc2hvdWxkIGJlIHNldCBvbiB0aGUgcmV0dXJuZWQgZGF0ZVxuICogQHJldHVybiBUaGUgZGF0ZSB3aGljaCBpcyB0aGUgbnRoIG9jY3VyZW5jZSBvZiBhIGdpdmVuIHdlZWtkYXkgaW4gYSBnaXZlblxuICogICAgICAgICBtb250aCBhbmQgeWVhciwgYXQgdGhlIGdpdmVuIGhvdXIgb2YgZGF5XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBnZXROdGhXZWVrZGF5T2ZNb250aCh5ZWFyOiBudW1iZXIsIG1vbnRoOiBNb250aCwgd2Vla2RheTogV2Vla2RheSwgbjogMSB8IDIgfCAzIHwgNCwgaG91ciA9IDApOiBEYXRlIHtcbiAgICBsZXQgZGF5T2ZNb250aCA9IDA7XG4gICAgbGV0IGkgPSAwO1xuICAgIHdoaWxlIChpIDwgbikge1xuICAgICAgICBkYXlPZk1vbnRoKys7XG4gICAgICAgIGNvbnN0IGRhdGUgPSBuZXcgRGF0ZSh5ZWFyLCBtb250aCAtIDEsIGRheU9mTW9udGgpO1xuICAgICAgICBpZiAoZGF0ZS5nZXREYXkoKSA9PT0gd2Vla2RheSkgaSsrO1xuICAgIH1cbiAgICByZXR1cm4gbmV3IERhdGUoeWVhciwgbW9udGggLSAxLCBkYXlPZk1vbnRoLCBob3VyKTtcbn1cblxuLyoqXG4gKiBHZXQgdGhlIGRhdGUgd2hpY2ggaXMgdGhlIGxhc3Qgb2NjdXJlbmNlIG9mIGEgZ2l2ZW4gd2Vla2RheSBpbiBhIGdpdmVuIG1vbnRoIGFuZCB5ZWFyLlxuICpcbiAqIEBwYXJhbSB5ZWFyIFRoZSB5ZWFyIGZvciB3aGljaCB0byBmaW5kIHRoZSBkYXRlXG4gKiBAcGFyYW0gbW9udGggVGhlIG1vbnRoIGluIHdoaWNoIHRoZSBkYXRlIG9jY3Vyc1xuICogQHBhcmFtIHdlZWtkYXkgVGhlIHdlZWtkYXkgb24gd2hpY2ggdGhlIGRhdGUgb2NjdXJzXG4gKiBAcGFyYW0gaG91ciBUaGUgaG91ciBvZiBkYXkgd2hpY2ggc2hvdWxkIGJlIHNldCBvbiB0aGUgcmV0dXJuZWQgZGF0ZVxuICogQHJldHVybiBUaGUgZGF0ZSB3aGljaCBpcyB0aGUgbGFzdCBvY2N1cmVuY2Ugb2YgYSBnaXZlbiB3ZWVrZGF5IGluIGEgZ2l2ZW5cbiAqICAgICAgICAgbW9udGggYW5kIHllYXIsIGF0IHRoZSBnaXZlbiBob3VyIG9mIGRheVxuICovXG5leHBvcnQgZnVuY3Rpb24gZ2V0TGFzdFdlZWtkYXlPZk1vbnRoKHllYXI6IG51bWJlciwgbW9udGg6IE1vbnRoLCB3ZWVrZGF5OiBXZWVrZGF5LCBob3VyID0gMCk6IERhdGUge1xuICAgIC8vIFByb2NlZHVyZTogRmluZCB0aGUgZmlyc3Qgd2Vla2RheSBvZiB0aGUgbmV4dCBtb250aCwgY29tcGFyZSB3aXRoIHRoZSBnaXZlbiB3ZWVrZGF5LFxuICAgIC8vIGFuZCB1c2UgdGhlIGRpZmZlcmVuY2UgdG8gZGV0ZXJtaW5lIGhvdyBtYW55IGRheXMgdG8gc3VidHJhY3QgZnJvbSB0aGUgZmlyc3Qgb2YgdGhlIG5leHQgbW9udGguXG4gICAgY29uc3Qgb25lSW5kZXhlZFdlZWtkYXkgPSB3ZWVrZGF5ID09PSAwID8gNyA6IHdlZWtkYXk7XG4gICAgY29uc3QgZGF0ZSA9IG5ldyBEYXRlKHllYXIsIG1vbnRoIC0gMSArIDEsIDEsIDEyKTtcbiAgICBjb25zdCBmaXJzdFdlZWtkYXlOZXh0TW9udGggPSBkYXRlLmdldERheSgpID09PSAwID8gNyA6IGRhdGUuZ2V0RGF5KCk7XG4gICAgbGV0IGRheURpZmY7XG4gICAgaWYgKGZpcnN0V2Vla2RheU5leHRNb250aCA9PT0gb25lSW5kZXhlZFdlZWtkYXkpIGRheURpZmYgPSA3O1xuICAgIGVsc2UgaWYgKGZpcnN0V2Vla2RheU5leHRNb250aCA8IG9uZUluZGV4ZWRXZWVrZGF5KSBkYXlEaWZmID0gNyArIGZpcnN0V2Vla2RheU5leHRNb250aCAtIG9uZUluZGV4ZWRXZWVrZGF5O1xuICAgIGVsc2UgZGF5RGlmZiA9IGZpcnN0V2Vla2RheU5leHRNb250aCAtIG9uZUluZGV4ZWRXZWVrZGF5O1xuICAgIGRhdGUuc2V0RGF0ZShkYXRlLmdldERhdGUoKSAtIGRheURpZmYpO1xuICAgIHJldHVybiBuZXcgRGF0ZSh5ZWFyLCBtb250aCAtIDEsIGRhdGUuZ2V0RGF0ZSgpLCBob3VyKTtcbn1cblxuLyoqXG4gKiBGaW5kcyBhbmQgcmV0dXJucyB0aW1lem9uZSBvZmZzZXQuIElmIHRpbWV6b25lSW5wdXQgaXMgbnVtZXJpYywgaXQgaXMgcmV0dXJuZWQuIE90aGVyd2lzZSwgbG9vayBmb3IgdGltZXpvbmUgb2Zmc2V0c1xuICogaW4gdGhlIGZvbGxvd2luZyBvcmRlcjogdGltZXpvbmVPdmVycmlkZXMgLT4ge0BsaW5rIFRJTUVaT05FX0FCQlJfTUFQfS5cbiAqXG4gKiBAcGFyYW0gdGltZXpvbmVJbnB1dCBVcHBlcmNhc2UgdGltZXpvbmUgYWJicmV2aWF0aW9uIG9yIG51bWVyaWMgb2Zmc2V0IGluIG1pbnV0ZXNcbiAqIEBwYXJhbSBkYXRlIFRoZSBkYXRlIHRvIHVzZSB0byBkZXRlcm1pbmUgd2hldGhlciB0byByZXR1cm4gRFNUIG9mZnNldHMgZm9yIGFtYmlndW91cyB0aW1lem9uZXNcbiAqIEBwYXJhbSB0aW1lem9uZU92ZXJyaWRlcyBPdmVycmlkZXMgZm9yIHRpbWV6b25lc1xuICogQHJldHVybiB0aW1lem9uZSBvZmZzZXQgaW4gbWludXRlc1xuICovXG5leHBvcnQgZnVuY3Rpb24gdG9UaW1lem9uZU9mZnNldChcbiAgICB0aW1lem9uZUlucHV0Pzogc3RyaW5nIHwgbnVtYmVyLFxuICAgIGRhdGU/OiBEYXRlLFxuICAgIHRpbWV6b25lT3ZlcnJpZGVzOiBUaW1lem9uZUFiYnJNYXAgPSB7fVxuKTogbnVtYmVyIHwgbnVsbCB7XG4gICAgaWYgKHRpbWV6b25lSW5wdXQgPT0gbnVsbCkge1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIHRpbWV6b25lSW5wdXQgPT09IFwibnVtYmVyXCIpIHtcbiAgICAgICAgcmV0dXJuIHRpbWV6b25lSW5wdXQ7XG4gICAgfVxuXG4gICAgY29uc3QgbWF0Y2hlZFRpbWV6b25lID0gdGltZXpvbmVPdmVycmlkZXNbdGltZXpvbmVJbnB1dF0gPz8gVElNRVpPTkVfQUJCUl9NQVBbdGltZXpvbmVJbnB1dF07XG4gICAgaWYgKG1hdGNoZWRUaW1lem9uZSA9PSBudWxsKSB7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICAvLyBUaGlzIG1lYW5zIHRoYXQgd2UgaGF2ZSBtYXRjaGVkIGFuIHVuYW1iaWd1b3VzIHRpbWV6b25lXG4gICAgaWYgKHR5cGVvZiBtYXRjaGVkVGltZXpvbmUgPT0gXCJudW1iZXJcIikge1xuICAgICAgICByZXR1cm4gbWF0Y2hlZFRpbWV6b25lO1xuICAgIH1cblxuICAgIC8vIFRoZSBtYXRjaGVkIHRpbWV6b25lIGlzIGFuIGFtYmlndW91cyB0aW1lem9uZSwgd2hlcmUgdGhlIG9mZnNldCBkZXBlbmRzIG9uIHdoZXRoZXIgdGhlIGNvbnRleHQgKHJlZkRhdGUpXG4gICAgLy8gaXMgZHVyaW5nIGRheWxpZ2h0IHNhdmluZ3Mgb3Igbm90LlxuXG4gICAgLy8gV2l0aG91dCByZWZEYXRlIGFzIGNvbnRleHQsIHRoZXJlJ3Mgbm8gd2F5IHRvIGtub3cgaWYgRFNUIG9yIG5vbi1EU1Qgb2Zmc2V0IHNob3VsZCBiZSB1c2VkLiBSZXR1cm4gbnVsbCBpbnN0ZWFkLlxuICAgIGlmIChkYXRlID09IG51bGwpIHtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgLy8gUmV0dXJuIERTVCBvZmZzZXQgaWYgdGhlIHJlZkRhdGUgaXMgZHVyaW5nIGRheWxpZ2h0IHNhdmluZ3NcbiAgICBpZiAoXG4gICAgICAgIGRheWpzKGRhdGUpLmlzQWZ0ZXIobWF0Y2hlZFRpbWV6b25lLmRzdFN0YXJ0KGRhdGUuZ2V0RnVsbFllYXIoKSkpICYmXG4gICAgICAgICFkYXlqcyhkYXRlKS5pc0FmdGVyKG1hdGNoZWRUaW1lem9uZS5kc3RFbmQoZGF0ZS5nZXRGdWxsWWVhcigpKSlcbiAgICApIHtcbiAgICAgICAgcmV0dXJuIG1hdGNoZWRUaW1lem9uZS50aW1lem9uZU9mZnNldER1cmluZ0RzdDtcbiAgICB9XG5cbiAgICAvLyByZWZEYXRlIGlzIG5vdCBkdXJpbmcgRFNUID0+IHJldHVybiBub24tRFNUIG9mZnNldFxuICAgIHJldHVybiBtYXRjaGVkVGltZXpvbmUudGltZXpvbmVPZmZzZXROb25Ec3Q7XG59XG4iLCAidHlwZSBEaWN0aW9uYXJ5TGlrZSA9IHN0cmluZ1tdIHwgeyBbd29yZDogc3RyaW5nXTogdW5rbm93biB9IHwgTWFwPHN0cmluZywgdW5rbm93bj47XG5cbmV4cG9ydCBmdW5jdGlvbiByZXBlYXRlZFRpbWV1bml0UGF0dGVybihcbiAgICBwcmVmaXg6IHN0cmluZyxcbiAgICBzaW5nbGVUaW1ldW5pdFBhdHRlcm46IHN0cmluZyxcbiAgICBjb25uZWN0b3JQYXR0ZXJuID0gXCJcXFxcc3swLDV9LD9cXFxcc3swLDV9XCJcbik6IHN0cmluZyB7XG4gICAgY29uc3Qgc2luZ2xlVGltZXVuaXRQYXR0ZXJuTm9DYXB0dXJlID0gc2luZ2xlVGltZXVuaXRQYXR0ZXJuLnJlcGxhY2UoL1xcKCg/IVxcPykvZywgXCIoPzpcIik7XG4gICAgcmV0dXJuIGAke3ByZWZpeH0ke3NpbmdsZVRpbWV1bml0UGF0dGVybk5vQ2FwdHVyZX0oPzoke2Nvbm5lY3RvclBhdHRlcm59JHtzaW5nbGVUaW1ldW5pdFBhdHRlcm5Ob0NhcHR1cmV9KXswLDEwfWA7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBleHRyYWN0VGVybXMoZGljdGlvbmFyeTogRGljdGlvbmFyeUxpa2UpOiBzdHJpbmdbXSB7XG4gICAgbGV0IGtleXM6IHN0cmluZ1tdO1xuICAgIGlmIChkaWN0aW9uYXJ5IGluc3RhbmNlb2YgQXJyYXkpIHtcbiAgICAgICAga2V5cyA9IFsuLi5kaWN0aW9uYXJ5XTtcbiAgICB9IGVsc2UgaWYgKGRpY3Rpb25hcnkgaW5zdGFuY2VvZiBNYXApIHtcbiAgICAgICAga2V5cyA9IEFycmF5LmZyb20oKGRpY3Rpb25hcnkgYXMgTWFwPHN0cmluZywgdW5rbm93bj4pLmtleXMoKSk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAga2V5cyA9IE9iamVjdC5rZXlzKGRpY3Rpb25hcnkpO1xuICAgIH1cblxuICAgIHJldHVybiBrZXlzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbWF0Y2hBbnlQYXR0ZXJuKGRpY3Rpb25hcnk6IERpY3Rpb25hcnlMaWtlKTogc3RyaW5nIHtcbiAgICAvLyBUT0RPOiBNb3JlIGVmZmljaWVudCByZWdleCBwYXR0ZXJuIGJ5IGNvbnNpZGVyaW5nIGR1cGxpY2F0ZWQgcHJlZml4XG5cbiAgICBjb25zdCBqb2luZWRUZXJtcyA9IGV4dHJhY3RUZXJtcyhkaWN0aW9uYXJ5KVxuICAgICAgICAuc29ydCgoYSwgYikgPT4gYi5sZW5ndGggLSBhLmxlbmd0aClcbiAgICAgICAgLmpvaW4oXCJ8XCIpXG4gICAgICAgIC5yZXBsYWNlKC9cXC4vZywgXCJcXFxcLlwiKTtcblxuICAgIHJldHVybiBgKD86JHtqb2luZWRUZXJtc30pYDtcbn1cbiIsICJpbXBvcnQgZGF5anMgZnJvbSBcImRheWpzXCI7XG5cbi8qKlxuICogRmluZCB0aGUgbW9zdCBsaWtlbHkgeWVhciwgZnJvbSBhIHJhdyBudW1iZXIuIEZvciBleGFtcGxlOlxuICogMTk5NyA9PiAxOTk3XG4gKiA5NyA9PiAxOTk3XG4gKiAxMiA9PiAyMDEyXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBmaW5kTW9zdExpa2VseUFEWWVhcih5ZWFyTnVtYmVyOiBudW1iZXIpOiBudW1iZXIge1xuICAgIGlmICh5ZWFyTnVtYmVyIDwgMTAwKSB7XG4gICAgICAgIGlmICh5ZWFyTnVtYmVyID4gNTApIHtcbiAgICAgICAgICAgIHllYXJOdW1iZXIgPSB5ZWFyTnVtYmVyICsgMTkwMDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHllYXJOdW1iZXIgPSB5ZWFyTnVtYmVyICsgMjAwMDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB5ZWFyTnVtYmVyO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZmluZFllYXJDbG9zZXN0VG9SZWYocmVmRGF0ZTogRGF0ZSwgZGF5OiBudW1iZXIsIG1vbnRoOiBudW1iZXIpOiBudW1iZXIge1xuICAgIC8vRmluZCB0aGUgbW9zdCBhcHByb3ByaWF0ZWQgeWVhclxuICAgIGNvbnN0IHJlZk1vbWVudCA9IGRheWpzKHJlZkRhdGUpO1xuICAgIGxldCBkYXRlTW9tZW50ID0gcmVmTW9tZW50O1xuICAgIGRhdGVNb21lbnQgPSBkYXRlTW9tZW50Lm1vbnRoKG1vbnRoIC0gMSk7XG4gICAgZGF0ZU1vbWVudCA9IGRhdGVNb21lbnQuZGF0ZShkYXkpO1xuICAgIGRhdGVNb21lbnQgPSBkYXRlTW9tZW50LnllYXIocmVmTW9tZW50LnllYXIoKSk7XG5cbiAgICBjb25zdCBuZXh0WWVhciA9IGRhdGVNb21lbnQuYWRkKDEsIFwieVwiKTtcbiAgICBjb25zdCBsYXN0WWVhciA9IGRhdGVNb21lbnQuYWRkKC0xLCBcInlcIik7XG4gICAgaWYgKE1hdGguYWJzKG5leHRZZWFyLmRpZmYocmVmTW9tZW50KSkgPCBNYXRoLmFicyhkYXRlTW9tZW50LmRpZmYocmVmTW9tZW50KSkpIHtcbiAgICAgICAgZGF0ZU1vbWVudCA9IG5leHRZZWFyO1xuICAgIH0gZWxzZSBpZiAoTWF0aC5hYnMobGFzdFllYXIuZGlmZihyZWZNb21lbnQpKSA8IE1hdGguYWJzKGRhdGVNb21lbnQuZGlmZihyZWZNb21lbnQpKSkge1xuICAgICAgICBkYXRlTW9tZW50ID0gbGFzdFllYXI7XG4gICAgfVxuXG4gICAgcmV0dXJuIGRhdGVNb21lbnQueWVhcigpO1xufVxuIiwgImltcG9ydCB7IE9wVW5pdFR5cGUsIFFVbml0VHlwZSB9IGZyb20gXCJkYXlqc1wiO1xuaW1wb3J0IHsgbWF0Y2hBbnlQYXR0ZXJuLCByZXBlYXRlZFRpbWV1bml0UGF0dGVybiB9IGZyb20gXCIuLi8uLi91dGlscy9wYXR0ZXJuXCI7XG5pbXBvcnQgeyBmaW5kTW9zdExpa2VseUFEWWVhciB9IGZyb20gXCIuLi8uLi9jYWxjdWxhdGlvbi95ZWFyc1wiO1xuaW1wb3J0IHsgVGltZVVuaXRzIH0gZnJvbSBcIi4uLy4uL3V0aWxzL3RpbWV1bml0c1wiO1xuaW1wb3J0IHsgV2Vla2RheSB9IGZyb20gXCIuLi8uLi90eXBlc1wiO1xuXG5leHBvcnQgY29uc3QgV0VFS0RBWV9ESUNUSU9OQVJZOiB7IFt3b3JkOiBzdHJpbmddOiBXZWVrZGF5IH0gPSB7XG4gICAgc3VuZGF5OiAwLFxuICAgIHN1bjogMCxcbiAgICBcInN1bi5cIjogMCxcbiAgICBtb25kYXk6IDEsXG4gICAgbW9uOiAxLFxuICAgIFwibW9uLlwiOiAxLFxuICAgIHR1ZXNkYXk6IDIsXG4gICAgdHVlOiAyLFxuICAgIFwidHVlLlwiOiAyLFxuICAgIHdlZG5lc2RheTogMyxcbiAgICB3ZWQ6IDMsXG4gICAgXCJ3ZWQuXCI6IDMsXG4gICAgdGh1cnNkYXk6IDQsXG4gICAgdGh1cnM6IDQsXG4gICAgXCJ0aHVycy5cIjogNCxcbiAgICB0aHVyOiA0LFxuICAgIFwidGh1ci5cIjogNCxcbiAgICB0aHU6IDQsXG4gICAgXCJ0aHUuXCI6IDQsXG4gICAgZnJpZGF5OiA1LFxuICAgIGZyaTogNSxcbiAgICBcImZyaS5cIjogNSxcbiAgICBzYXR1cmRheTogNixcbiAgICBzYXQ6IDYsXG4gICAgXCJzYXQuXCI6IDYsXG59O1xuXG5leHBvcnQgY29uc3QgRlVMTF9NT05USF9OQU1FX0RJQ1RJT05BUlk6IHsgW3dvcmQ6IHN0cmluZ106IG51bWJlciB9ID0ge1xuICAgIGphbnVhcnk6IDEsXG4gICAgZmVicnVhcnk6IDIsXG4gICAgbWFyY2g6IDMsXG4gICAgYXByaWw6IDQsXG4gICAgbWF5OiA1LFxuICAgIGp1bmU6IDYsXG4gICAganVseTogNyxcbiAgICBhdWd1c3Q6IDgsXG4gICAgc2VwdGVtYmVyOiA5LFxuICAgIG9jdG9iZXI6IDEwLFxuICAgIG5vdmVtYmVyOiAxMSxcbiAgICBkZWNlbWJlcjogMTIsXG59O1xuXG5leHBvcnQgY29uc3QgTU9OVEhfRElDVElPTkFSWTogeyBbd29yZDogc3RyaW5nXTogbnVtYmVyIH0gPSB7XG4gICAgLi4uRlVMTF9NT05USF9OQU1FX0RJQ1RJT05BUlksXG4gICAgamFuOiAxLFxuICAgIFwiamFuLlwiOiAxLFxuICAgIGZlYjogMixcbiAgICBcImZlYi5cIjogMixcbiAgICBtYXI6IDMsXG4gICAgXCJtYXIuXCI6IDMsXG4gICAgYXByOiA0LFxuICAgIFwiYXByLlwiOiA0LFxuICAgIGp1bjogNixcbiAgICBcImp1bi5cIjogNixcbiAgICBqdWw6IDcsXG4gICAgXCJqdWwuXCI6IDcsXG4gICAgYXVnOiA4LFxuICAgIFwiYXVnLlwiOiA4LFxuICAgIHNlcDogOSxcbiAgICBcInNlcC5cIjogOSxcbiAgICBzZXB0OiA5LFxuICAgIFwic2VwdC5cIjogOSxcbiAgICBvY3Q6IDEwLFxuICAgIFwib2N0LlwiOiAxMCxcbiAgICBub3Y6IDExLFxuICAgIFwibm92LlwiOiAxMSxcbiAgICBkZWM6IDEyLFxuICAgIFwiZGVjLlwiOiAxMixcbn07XG5cbmV4cG9ydCBjb25zdCBJTlRFR0VSX1dPUkRfRElDVElPTkFSWTogeyBbd29yZDogc3RyaW5nXTogbnVtYmVyIH0gPSB7XG4gICAgb25lOiAxLFxuICAgIHR3bzogMixcbiAgICB0aHJlZTogMyxcbiAgICBmb3VyOiA0LFxuICAgIGZpdmU6IDUsXG4gICAgc2l4OiA2LFxuICAgIHNldmVuOiA3LFxuICAgIGVpZ2h0OiA4LFxuICAgIG5pbmU6IDksXG4gICAgdGVuOiAxMCxcbiAgICBlbGV2ZW46IDExLFxuICAgIHR3ZWx2ZTogMTIsXG59O1xuXG5leHBvcnQgY29uc3QgT1JESU5BTF9XT1JEX0RJQ1RJT05BUlk6IHsgW3dvcmQ6IHN0cmluZ106IG51bWJlciB9ID0ge1xuICAgIGZpcnN0OiAxLFxuICAgIHNlY29uZDogMixcbiAgICB0aGlyZDogMyxcbiAgICBmb3VydGg6IDQsXG4gICAgZmlmdGg6IDUsXG4gICAgc2l4dGg6IDYsXG4gICAgc2V2ZW50aDogNyxcbiAgICBlaWdodGg6IDgsXG4gICAgbmludGg6IDksXG4gICAgdGVudGg6IDEwLFxuICAgIGVsZXZlbnRoOiAxMSxcbiAgICB0d2VsZnRoOiAxMixcbiAgICB0aGlydGVlbnRoOiAxMyxcbiAgICBmb3VydGVlbnRoOiAxNCxcbiAgICBmaWZ0ZWVudGg6IDE1LFxuICAgIHNpeHRlZW50aDogMTYsXG4gICAgc2V2ZW50ZWVudGg6IDE3LFxuICAgIGVpZ2h0ZWVudGg6IDE4LFxuICAgIG5pbmV0ZWVudGg6IDE5LFxuICAgIHR3ZW50aWV0aDogMjAsXG4gICAgXCJ0d2VudHkgZmlyc3RcIjogMjEsXG4gICAgXCJ0d2VudHktZmlyc3RcIjogMjEsXG4gICAgXCJ0d2VudHkgc2Vjb25kXCI6IDIyLFxuICAgIFwidHdlbnR5LXNlY29uZFwiOiAyMixcbiAgICBcInR3ZW50eSB0aGlyZFwiOiAyMyxcbiAgICBcInR3ZW50eS10aGlyZFwiOiAyMyxcbiAgICBcInR3ZW50eSBmb3VydGhcIjogMjQsXG4gICAgXCJ0d2VudHktZm91cnRoXCI6IDI0LFxuICAgIFwidHdlbnR5IGZpZnRoXCI6IDI1LFxuICAgIFwidHdlbnR5LWZpZnRoXCI6IDI1LFxuICAgIFwidHdlbnR5IHNpeHRoXCI6IDI2LFxuICAgIFwidHdlbnR5LXNpeHRoXCI6IDI2LFxuICAgIFwidHdlbnR5IHNldmVudGhcIjogMjcsXG4gICAgXCJ0d2VudHktc2V2ZW50aFwiOiAyNyxcbiAgICBcInR3ZW50eSBlaWdodGhcIjogMjgsXG4gICAgXCJ0d2VudHktZWlnaHRoXCI6IDI4LFxuICAgIFwidHdlbnR5IG5pbnRoXCI6IDI5LFxuICAgIFwidHdlbnR5LW5pbnRoXCI6IDI5LFxuICAgIFwidGhpcnRpZXRoXCI6IDMwLFxuICAgIFwidGhpcnR5IGZpcnN0XCI6IDMxLFxuICAgIFwidGhpcnR5LWZpcnN0XCI6IDMxLFxufTtcblxuZXhwb3J0IGNvbnN0IFRJTUVfVU5JVF9ESUNUSU9OQVJZX05PX0FCQlI6IHsgW3dvcmQ6IHN0cmluZ106IE9wVW5pdFR5cGUgfCBRVW5pdFR5cGUgfSA9IHtcbiAgICBzZWNvbmQ6IFwic2Vjb25kXCIsXG4gICAgc2Vjb25kczogXCJzZWNvbmRcIixcbiAgICBtaW51dGU6IFwibWludXRlXCIsXG4gICAgbWludXRlczogXCJtaW51dGVcIixcbiAgICBob3VyOiBcImhvdXJcIixcbiAgICBob3VyczogXCJob3VyXCIsXG4gICAgZGF5OiBcImRcIixcbiAgICBkYXlzOiBcImRcIixcbiAgICB3ZWVrOiBcIndlZWtcIixcbiAgICB3ZWVrczogXCJ3ZWVrXCIsXG4gICAgbW9udGg6IFwibW9udGhcIixcbiAgICBtb250aHM6IFwibW9udGhcIixcbiAgICBxdWFydGVyOiBcInF1YXJ0ZXJcIixcbiAgICBxdWFydGVyczogXCJxdWFydGVyXCIsXG4gICAgeWVhcjogXCJ5ZWFyXCIsXG4gICAgeWVhcnM6IFwieWVhclwiLFxufTtcblxuZXhwb3J0IGNvbnN0IFRJTUVfVU5JVF9ESUNUSU9OQVJZOiB7IFt3b3JkOiBzdHJpbmddOiBPcFVuaXRUeXBlIHwgUVVuaXRUeXBlIH0gPSB7XG4gICAgczogXCJzZWNvbmRcIixcbiAgICBzZWM6IFwic2Vjb25kXCIsXG4gICAgc2Vjb25kOiBcInNlY29uZFwiLFxuICAgIHNlY29uZHM6IFwic2Vjb25kXCIsXG4gICAgbTogXCJtaW51dGVcIixcbiAgICBtaW46IFwibWludXRlXCIsXG4gICAgbWluczogXCJtaW51dGVcIixcbiAgICBtaW51dGU6IFwibWludXRlXCIsXG4gICAgbWludXRlczogXCJtaW51dGVcIixcbiAgICBoOiBcImhvdXJcIixcbiAgICBocjogXCJob3VyXCIsXG4gICAgaHJzOiBcImhvdXJcIixcbiAgICBob3VyOiBcImhvdXJcIixcbiAgICBob3VyczogXCJob3VyXCIsXG4gICAgZDogXCJkXCIsXG4gICAgZGF5OiBcImRcIixcbiAgICBkYXlzOiBcImRcIixcbiAgICB3OiBcIndcIixcbiAgICB3ZWVrOiBcIndlZWtcIixcbiAgICB3ZWVrczogXCJ3ZWVrXCIsXG4gICAgbW86IFwibW9udGhcIixcbiAgICBtb246IFwibW9udGhcIixcbiAgICBtb3M6IFwibW9udGhcIixcbiAgICBtb250aDogXCJtb250aFwiLFxuICAgIG1vbnRoczogXCJtb250aFwiLFxuICAgIHF0cjogXCJxdWFydGVyXCIsXG4gICAgcXVhcnRlcjogXCJxdWFydGVyXCIsXG4gICAgcXVhcnRlcnM6IFwicXVhcnRlclwiLFxuICAgIHk6IFwieWVhclwiLFxuICAgIHlyOiBcInllYXJcIixcbiAgICB5ZWFyOiBcInllYXJcIixcbiAgICB5ZWFyczogXCJ5ZWFyXCIsXG4gICAgLy8gQWxzbywgbWVyZ2UgdGhlIGVudHJpZXMgZnJvbSB0aGUgZnVsbC1uYW1lIGRpY3Rpb25hcnkuXG4gICAgLy8gV2UgbGVhdmUgdGhlIGR1cGxpY2F0ZWQgZW50cmllcyBmb3IgcmVhZGFiaWxpdHkuXG4gICAgLi4uVElNRV9VTklUX0RJQ1RJT05BUllfTk9fQUJCUixcbn07XG5cbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuZXhwb3J0IGNvbnN0IE5VTUJFUl9QQVRURVJOID0gYCg/OiR7bWF0Y2hBbnlQYXR0ZXJuKFxuICAgIElOVEVHRVJfV09SRF9ESUNUSU9OQVJZXG4pfXxbMC05XSt8WzAtOV0rXFxcXC5bMC05XSt8aGFsZig/OlxcXFxzezAsMn1hbj8pP3xhbj9cXFxcYig/OlxcXFxzezAsMn1mZXcpP3xmZXd8c2V2ZXJhbHx0aGV8YT9cXFxcc3swLDJ9Y291cGxlXFxcXHN7MCwyfSg/Om9mKT8pYDtcblxuZXhwb3J0IGZ1bmN0aW9uIHBhcnNlTnVtYmVyUGF0dGVybihtYXRjaDogc3RyaW5nKTogbnVtYmVyIHtcbiAgICBjb25zdCBudW0gPSBtYXRjaC50b0xvd2VyQ2FzZSgpO1xuICAgIGlmIChJTlRFR0VSX1dPUkRfRElDVElPTkFSWVtudW1dICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgcmV0dXJuIElOVEVHRVJfV09SRF9ESUNUSU9OQVJZW251bV07XG4gICAgfSBlbHNlIGlmIChudW0gPT09IFwiYVwiIHx8IG51bSA9PT0gXCJhblwiIHx8IG51bSA9PSBcInRoZVwiKSB7XG4gICAgICAgIHJldHVybiAxO1xuICAgIH0gZWxzZSBpZiAobnVtLm1hdGNoKC9mZXcvKSkge1xuICAgICAgICByZXR1cm4gMztcbiAgICB9IGVsc2UgaWYgKG51bS5tYXRjaCgvaGFsZi8pKSB7XG4gICAgICAgIHJldHVybiAwLjU7XG4gICAgfSBlbHNlIGlmIChudW0ubWF0Y2goL2NvdXBsZS8pKSB7XG4gICAgICAgIHJldHVybiAyO1xuICAgIH0gZWxzZSBpZiAobnVtLm1hdGNoKC9zZXZlcmFsLykpIHtcbiAgICAgICAgcmV0dXJuIDc7XG4gICAgfVxuXG4gICAgcmV0dXJuIHBhcnNlRmxvYXQobnVtKTtcbn1cblxuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG5leHBvcnQgY29uc3QgT1JESU5BTF9OVU1CRVJfUEFUVEVSTiA9IGAoPzoke21hdGNoQW55UGF0dGVybihPUkRJTkFMX1dPUkRfRElDVElPTkFSWSl9fFswLTldezEsMn0oPzpzdHxuZHxyZHx0aCk/KWA7XG5leHBvcnQgZnVuY3Rpb24gcGFyc2VPcmRpbmFsTnVtYmVyUGF0dGVybihtYXRjaDogc3RyaW5nKTogbnVtYmVyIHtcbiAgICBsZXQgbnVtID0gbWF0Y2gudG9Mb3dlckNhc2UoKTtcbiAgICBpZiAoT1JESU5BTF9XT1JEX0RJQ1RJT05BUllbbnVtXSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHJldHVybiBPUkRJTkFMX1dPUkRfRElDVElPTkFSWVtudW1dO1xuICAgIH1cblxuICAgIG51bSA9IG51bS5yZXBsYWNlKC8oPzpzdHxuZHxyZHx0aCkkL2ksIFwiXCIpO1xuICAgIHJldHVybiBwYXJzZUludChudW0pO1xufVxuXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbmV4cG9ydCBjb25zdCBZRUFSX1BBVFRFUk4gPSBgKD86WzEtOV1bMC05XXswLDN9XFxcXHN7MCwyfSg/OkJFfEFEfEJDfEJDRXxDRSl8WzEtMl1bMC05XXszfXxbNS05XVswLTldfDJbMC01XSlgO1xuZXhwb3J0IGZ1bmN0aW9uIHBhcnNlWWVhcihtYXRjaDogc3RyaW5nKTogbnVtYmVyIHtcbiAgICBpZiAoL0JFL2kudGVzdChtYXRjaCkpIHtcbiAgICAgICAgLy8gQnVkZGhpc3QgRXJhXG4gICAgICAgIG1hdGNoID0gbWF0Y2gucmVwbGFjZSgvQkUvaSwgXCJcIik7XG4gICAgICAgIHJldHVybiBwYXJzZUludChtYXRjaCkgLSA1NDM7XG4gICAgfVxuXG4gICAgaWYgKC9CQ0U/L2kudGVzdChtYXRjaCkpIHtcbiAgICAgICAgLy8gQmVmb3JlIENocmlzdCwgQmVmb3JlIENvbW1vbiBFcmFcbiAgICAgICAgbWF0Y2ggPSBtYXRjaC5yZXBsYWNlKC9CQ0U/L2ksIFwiXCIpO1xuICAgICAgICByZXR1cm4gLXBhcnNlSW50KG1hdGNoKTtcbiAgICB9XG5cbiAgICBpZiAoLyhBRHxDRSkvaS50ZXN0KG1hdGNoKSkge1xuICAgICAgICAvLyBBbm5vIERvbWluaSwgQ29tbW9uIEVyYVxuICAgICAgICBtYXRjaCA9IG1hdGNoLnJlcGxhY2UoLyhBRHxDRSkvaSwgXCJcIik7XG4gICAgICAgIHJldHVybiBwYXJzZUludChtYXRjaCk7XG4gICAgfVxuXG4gICAgY29uc3QgcmF3WWVhck51bWJlciA9IHBhcnNlSW50KG1hdGNoKTtcbiAgICByZXR1cm4gZmluZE1vc3RMaWtlbHlBRFllYXIocmF3WWVhck51bWJlcik7XG59XG5cbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuY29uc3QgU0lOR0xFX1RJTUVfVU5JVF9QQVRURVJOID0gYCgke05VTUJFUl9QQVRURVJOfSlcXFxcc3swLDN9KCR7bWF0Y2hBbnlQYXR0ZXJuKFRJTUVfVU5JVF9ESUNUSU9OQVJZKX0pYDtcbmNvbnN0IFNJTkdMRV9USU1FX1VOSVRfUkVHRVggPSBuZXcgUmVnRXhwKFNJTkdMRV9USU1FX1VOSVRfUEFUVEVSTiwgXCJpXCIpO1xuXG5jb25zdCBTSU5HTEVfVElNRV9VTklUX05PX0FCQlJfUEFUVEVSTiA9IGAoJHtOVU1CRVJfUEFUVEVSTn0pXFxcXHN7MCwzfSgke21hdGNoQW55UGF0dGVybihcbiAgICBUSU1FX1VOSVRfRElDVElPTkFSWV9OT19BQkJSXG4pfSlgO1xuXG5jb25zdCBUSU1FX1VOSVRfQ09OTkVDVE9SX1BBVFRFUk4gPSBgXFxcXHN7MCw1fSw/KD86XFxcXHMqYW5kKT9cXFxcc3swLDV9YDtcblxuZXhwb3J0IGNvbnN0IFRJTUVfVU5JVFNfUEFUVEVSTiA9IHJlcGVhdGVkVGltZXVuaXRQYXR0ZXJuKFxuICAgIGAoPzooPzphYm91dHxhcm91bmQpXFxcXHN7MCwzfSk/YCxcbiAgICBTSU5HTEVfVElNRV9VTklUX1BBVFRFUk4sXG4gICAgVElNRV9VTklUX0NPTk5FQ1RPUl9QQVRURVJOXG4pO1xuZXhwb3J0IGNvbnN0IFRJTUVfVU5JVFNfTk9fQUJCUl9QQVRURVJOID0gcmVwZWF0ZWRUaW1ldW5pdFBhdHRlcm4oXG4gICAgYCg/Oig/OmFib3V0fGFyb3VuZClcXFxcc3swLDN9KT9gLFxuICAgIFNJTkdMRV9USU1FX1VOSVRfTk9fQUJCUl9QQVRURVJOLFxuICAgIFRJTUVfVU5JVF9DT05ORUNUT1JfUEFUVEVSTlxuKTtcblxuZXhwb3J0IGZ1bmN0aW9uIHBhcnNlVGltZVVuaXRzKHRpbWV1bml0VGV4dCk6IG51bGwgfCBUaW1lVW5pdHMge1xuICAgIGNvbnN0IGZyYWdtZW50cyA9IHt9O1xuICAgIGxldCByZW1haW5pbmdUZXh0ID0gdGltZXVuaXRUZXh0O1xuICAgIGxldCBtYXRjaCA9IFNJTkdMRV9USU1FX1VOSVRfUkVHRVguZXhlYyhyZW1haW5pbmdUZXh0KTtcbiAgICB3aGlsZSAobWF0Y2gpIHtcbiAgICAgICAgY29sbGVjdERhdGVUaW1lRnJhZ21lbnQoZnJhZ21lbnRzLCBtYXRjaCk7XG4gICAgICAgIHJlbWFpbmluZ1RleHQgPSByZW1haW5pbmdUZXh0LnN1YnN0cmluZyhtYXRjaFswXS5sZW5ndGgpLnRyaW0oKTtcbiAgICAgICAgbWF0Y2ggPSBTSU5HTEVfVElNRV9VTklUX1JFR0VYLmV4ZWMocmVtYWluaW5nVGV4dCk7XG4gICAgfVxuICAgIGlmIChPYmplY3Qua2V5cyhmcmFnbWVudHMpLmxlbmd0aCA9PSAwKSB7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICByZXR1cm4gZnJhZ21lbnRzO1xufVxuXG5mdW5jdGlvbiBjb2xsZWN0RGF0ZVRpbWVGcmFnbWVudChmcmFnbWVudHMsIG1hdGNoKSB7XG4gICAgaWYgKG1hdGNoWzBdLm1hdGNoKC9eW2EtekEtWl0rJC8pKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3QgbnVtID0gcGFyc2VOdW1iZXJQYXR0ZXJuKG1hdGNoWzFdKTtcbiAgICBjb25zdCB1bml0ID0gVElNRV9VTklUX0RJQ1RJT05BUllbbWF0Y2hbMl0udG9Mb3dlckNhc2UoKV07XG4gICAgZnJhZ21lbnRzW3VuaXRdID0gbnVtO1xufVxuIiwgImltcG9ydCB7IFBhcnNlciwgUGFyc2luZ0NvbnRleHQgfSBmcm9tIFwiLi4vLi4vY2hyb25vXCI7XG5pbXBvcnQgeyBQYXJzaW5nQ29tcG9uZW50cywgUGFyc2luZ1Jlc3VsdCB9IGZyb20gXCIuLi8uLi9yZXN1bHRzXCI7XG5pbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tIFwiLi4vLi4vdHlwZXNcIjtcblxuLyoqXG4gKiBBIHBhcnNlciB0aGF0IGNoZWNrcyBmb3Igd29yZCBib3VuZGFyeSBhbmQgYXBwbHlpbmcgdGhlIGlubmVyIHBhdHRlcm4gYW5kIGV4dHJhY3Rpb24uXG4gKi9cbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBBYnN0cmFjdFBhcnNlcldpdGhXb3JkQm91bmRhcnlDaGVja2luZyBpbXBsZW1lbnRzIFBhcnNlciB7XG4gICAgYWJzdHJhY3QgaW5uZXJQYXR0ZXJuKGNvbnRleHQ6IFBhcnNpbmdDb250ZXh0KTogUmVnRXhwO1xuICAgIGFic3RyYWN0IGlubmVyRXh0cmFjdChcbiAgICAgICAgY29udGV4dDogUGFyc2luZ0NvbnRleHQsXG4gICAgICAgIG1hdGNoOiBSZWdFeHBNYXRjaEFycmF5XG4gICAgKTogUGFyc2luZ0NvbXBvbmVudHMgfCBQYXJzaW5nUmVzdWx0IHwgeyBbYyBpbiBDb21wb25lbnRdPzogbnVtYmVyIH0gfCBudWxsO1xuXG4gICAgLy8gT3ZlcnJpZGVzIHRoaXMgbWV0aG9kIGlmIHRoZXJlIGlzIG1vcmUgZWZmaWNpZW50IHdheSB0byBjaGVjayBmb3IgaW5uZXIgcGF0dGVybiBjaGFuZ2UuXG4gICAgaW5uZXJQYXR0ZXJuSGFzQ2hhbmdlKGNvbnRleHQ6IFBhcnNpbmdDb250ZXh0LCBjdXJyZW50SW5uZXJQYXR0ZXJuOiBSZWdFeHApOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaW5uZXJQYXR0ZXJuKGNvbnRleHQpICE9PSBjdXJyZW50SW5uZXJQYXR0ZXJuO1xuICAgIH1cblxuICAgIHBhdHRlcm5MZWZ0Qm91bmRhcnkoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIGAoXFxcXFd8XilgO1xuICAgIH1cblxuICAgIHByaXZhdGUgY2FjaGVkSW5uZXJQYXR0ZXJuPzogUmVnRXhwID0gbnVsbDtcbiAgICBwcml2YXRlIGNhY2hlZFBhdHRlcm4/OiBSZWdFeHAgPSBudWxsO1xuXG4gICAgcGF0dGVybihjb250ZXh0OiBQYXJzaW5nQ29udGV4dCk6IFJlZ0V4cCB7XG4gICAgICAgIGlmICh0aGlzLmNhY2hlZElubmVyUGF0dGVybikge1xuICAgICAgICAgICAgaWYgKCF0aGlzLmlubmVyUGF0dGVybkhhc0NoYW5nZShjb250ZXh0LCB0aGlzLmNhY2hlZElubmVyUGF0dGVybikpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5jYWNoZWRQYXR0ZXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHRoaXMuY2FjaGVkSW5uZXJQYXR0ZXJuID0gdGhpcy5pbm5lclBhdHRlcm4oY29udGV4dCk7XG4gICAgICAgIHRoaXMuY2FjaGVkUGF0dGVybiA9IG5ldyBSZWdFeHAoXG4gICAgICAgICAgICBgJHt0aGlzLnBhdHRlcm5MZWZ0Qm91bmRhcnkoKX0ke3RoaXMuY2FjaGVkSW5uZXJQYXR0ZXJuLnNvdXJjZX1gLFxuICAgICAgICAgICAgdGhpcy5jYWNoZWRJbm5lclBhdHRlcm4uZmxhZ3NcbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIHRoaXMuY2FjaGVkUGF0dGVybjtcbiAgICB9XG5cbiAgICBleHRyYWN0KGNvbnRleHQ6IFBhcnNpbmdDb250ZXh0LCBtYXRjaDogUmVnRXhwTWF0Y2hBcnJheSkge1xuICAgICAgICBjb25zdCBoZWFkZXIgPSBtYXRjaFsxXSA/PyBcIlwiO1xuICAgICAgICBtYXRjaC5pbmRleCA9IG1hdGNoLmluZGV4ICsgaGVhZGVyLmxlbmd0aDtcbiAgICAgICAgbWF0Y2hbMF0gPSBtYXRjaFswXS5zdWJzdHJpbmcoaGVhZGVyLmxlbmd0aCk7XG4gICAgICAgIGZvciAobGV0IGkgPSAyOyBpIDwgbWF0Y2gubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIG1hdGNoW2kgLSAxXSA9IG1hdGNoW2ldO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRoaXMuaW5uZXJFeHRyYWN0KGNvbnRleHQsIG1hdGNoKTtcbiAgICB9XG59XG4iLCAiaW1wb3J0IHsgVElNRV9VTklUU19QQVRURVJOLCBwYXJzZVRpbWVVbml0cywgVElNRV9VTklUU19OT19BQkJSX1BBVFRFUk4gfSBmcm9tIFwiLi4vY29uc3RhbnRzXCI7XG5pbXBvcnQgeyBQYXJzaW5nQ29udGV4dCB9IGZyb20gXCIuLi8uLi8uLi9jaHJvbm9cIjtcbmltcG9ydCB7IFBhcnNpbmdDb21wb25lbnRzIH0gZnJvbSBcIi4uLy4uLy4uL3Jlc3VsdHNcIjtcbmltcG9ydCB7IEFic3RyYWN0UGFyc2VyV2l0aFdvcmRCb3VuZGFyeUNoZWNraW5nIH0gZnJvbSBcIi4uLy4uLy4uL2NvbW1vbi9wYXJzZXJzL0Fic3RyYWN0UGFyc2VyV2l0aFdvcmRCb3VuZGFyeVwiO1xuXG5jb25zdCBQQVRURVJOX1dJVEhfT1BUSU9OQUxfUFJFRklYID0gbmV3IFJlZ0V4cChcbiAgICBgKD86KD86d2l0aGlufGlufGZvcilcXFxccyopP2AgK1xuICAgICAgICBgKD86KD86YWJvdXR8YXJvdW5kfHJvdWdobHl8YXBwcm94aW1hdGVseXxqdXN0KVxcXFxzKig/On5cXFxccyopPyk/KCR7VElNRV9VTklUU19QQVRURVJOfSkoPz1cXFxcV3wkKWAsXG4gICAgXCJpXCJcbik7XG5cbmNvbnN0IFBBVFRFUk5fV0lUSF9QUkVGSVggPSBuZXcgUmVnRXhwKFxuICAgIGAoPzp3aXRoaW58aW58Zm9yKVxcXFxzKmAgK1xuICAgICAgICBgKD86KD86YWJvdXR8YXJvdW5kfHJvdWdobHl8YXBwcm94aW1hdGVseXxqdXN0KVxcXFxzKig/On5cXFxccyopPyk/KCR7VElNRV9VTklUU19QQVRURVJOfSkoPz1cXFxcV3wkKWAsXG4gICAgXCJpXCJcbik7XG5cbmNvbnN0IFBBVFRFUk5fV0lUSF9QUkVGSVhfU1RSSUNUID0gbmV3IFJlZ0V4cChcbiAgICBgKD86d2l0aGlufGlufGZvcilcXFxccypgICtcbiAgICAgICAgYCg/Oig/OmFib3V0fGFyb3VuZHxyb3VnaGx5fGFwcHJveGltYXRlbHl8anVzdClcXFxccyooPzp+XFxcXHMqKT8pPygke1RJTUVfVU5JVFNfTk9fQUJCUl9QQVRURVJOfSkoPz1cXFxcV3wkKWAsXG4gICAgXCJpXCJcbik7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEVOVGltZVVuaXRXaXRoaW5Gb3JtYXRQYXJzZXIgZXh0ZW5kcyBBYnN0cmFjdFBhcnNlcldpdGhXb3JkQm91bmRhcnlDaGVja2luZyB7XG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBzdHJpY3RNb2RlOiBib29sZWFuKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgfVxuXG4gICAgaW5uZXJQYXR0ZXJuKGNvbnRleHQ6IFBhcnNpbmdDb250ZXh0KTogUmVnRXhwIHtcbiAgICAgICAgaWYgKHRoaXMuc3RyaWN0TW9kZSkge1xuICAgICAgICAgICAgcmV0dXJuIFBBVFRFUk5fV0lUSF9QUkVGSVhfU1RSSUNUO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBjb250ZXh0Lm9wdGlvbi5mb3J3YXJkRGF0ZSA/IFBBVFRFUk5fV0lUSF9PUFRJT05BTF9QUkVGSVggOiBQQVRURVJOX1dJVEhfUFJFRklYO1xuICAgIH1cblxuICAgIGlubmVyRXh0cmFjdChjb250ZXh0OiBQYXJzaW5nQ29udGV4dCwgbWF0Y2g6IFJlZ0V4cE1hdGNoQXJyYXkpIHtcbiAgICAgICAgLy8gRXhjbHVkZSBcImZvciB0aGUgdW5pdFwiIHBoYXNlcywgZS5nLiBcImZvciB0aGUgeWVhclwiXG4gICAgICAgIGlmIChtYXRjaFswXS5tYXRjaCgvXmZvclxccyp0aGVcXHMqXFx3Ky8pKSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCB0aW1lVW5pdHMgPSBwYXJzZVRpbWVVbml0cyhtYXRjaFsxXSk7XG4gICAgICAgIGlmICghdGltZVVuaXRzKSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gUGFyc2luZ0NvbXBvbmVudHMuY3JlYXRlUmVsYXRpdmVGcm9tUmVmZXJlbmNlKGNvbnRleHQucmVmZXJlbmNlLCB0aW1lVW5pdHMpO1xuICAgIH1cbn1cbiIsICJpbXBvcnQgeyBQYXJzaW5nQ29udGV4dCB9IGZyb20gXCIuLi8uLi8uLi9jaHJvbm9cIjtcbmltcG9ydCB7IFBhcnNpbmdSZXN1bHQgfSBmcm9tIFwiLi4vLi4vLi4vcmVzdWx0c1wiO1xuaW1wb3J0IHsgZmluZFllYXJDbG9zZXN0VG9SZWYgfSBmcm9tIFwiLi4vLi4vLi4vY2FsY3VsYXRpb24veWVhcnNcIjtcbmltcG9ydCB7IE1PTlRIX0RJQ1RJT05BUlkgfSBmcm9tIFwiLi4vY29uc3RhbnRzXCI7XG5pbXBvcnQgeyBZRUFSX1BBVFRFUk4sIHBhcnNlWWVhciB9IGZyb20gXCIuLi9jb25zdGFudHNcIjtcbmltcG9ydCB7IE9SRElOQUxfTlVNQkVSX1BBVFRFUk4sIHBhcnNlT3JkaW5hbE51bWJlclBhdHRlcm4gfSBmcm9tIFwiLi4vY29uc3RhbnRzXCI7XG5pbXBvcnQgeyBtYXRjaEFueVBhdHRlcm4gfSBmcm9tIFwiLi4vLi4vLi4vdXRpbHMvcGF0dGVyblwiO1xuaW1wb3J0IHsgQWJzdHJhY3RQYXJzZXJXaXRoV29yZEJvdW5kYXJ5Q2hlY2tpbmcgfSBmcm9tIFwiLi4vLi4vLi4vY29tbW9uL3BhcnNlcnMvQWJzdHJhY3RQYXJzZXJXaXRoV29yZEJvdW5kYXJ5XCI7XG5cbi8vIHByZXR0aWVyLWlnbm9yZVxuY29uc3QgUEFUVEVSTiA9IG5ldyBSZWdFeHAoXG4gICAgYCg/Om9uXFxcXHN7MCwzfSk/YCArXG4gICAgICAgIGAoJHtPUkRJTkFMX05VTUJFUl9QQVRURVJOfSlgICtcbiAgICAgICAgYCg/OmAgK1xuICAgICAgICAgICAgYFxcXFxzezAsM30oPzp0b3xcXFxcLXxcXFxcXHUyMDEzfHVudGlsfHRocm91Z2h8dGlsbCk/XFxcXHN7MCwzfWAgK1xuICAgICAgICAgICAgYCgke09SRElOQUxfTlVNQkVSX1BBVFRFUk59KWAgK1xuICAgICAgICBcIik/XCIgK1xuICAgICAgICBgKD86LXwvfFxcXFxzezAsM30oPzpvZik/XFxcXHN7MCwzfSlgICtcbiAgICAgICAgYCgke21hdGNoQW55UGF0dGVybihNT05USF9ESUNUSU9OQVJZKX0pYCArXG4gICAgICAgIFwiKD86XCIgK1xuICAgICAgICAgICAgYCg/Oi18L3wsP1xcXFxzezAsM30pYCArXG4gICAgICAgICAgICBgKCR7WUVBUl9QQVRURVJOfSg/IVxcXFx3KSlgICtcbiAgICAgICAgXCIpP1wiICtcbiAgICAgICAgXCIoPz1cXFxcV3wkKVwiLFxuICAgIFwiaVwiXG4pO1xuXG5jb25zdCBEQVRFX0dST1VQID0gMTtcbmNvbnN0IERBVEVfVE9fR1JPVVAgPSAyO1xuY29uc3QgTU9OVEhfTkFNRV9HUk9VUCA9IDM7XG5jb25zdCBZRUFSX0dST1VQID0gNDtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRU5Nb250aE5hbWVMaXR0bGVFbmRpYW5QYXJzZXIgZXh0ZW5kcyBBYnN0cmFjdFBhcnNlcldpdGhXb3JkQm91bmRhcnlDaGVja2luZyB7XG4gICAgaW5uZXJQYXR0ZXJuKCk6IFJlZ0V4cCB7XG4gICAgICAgIHJldHVybiBQQVRURVJOO1xuICAgIH1cblxuICAgIGlubmVyRXh0cmFjdChjb250ZXh0OiBQYXJzaW5nQ29udGV4dCwgbWF0Y2g6IFJlZ0V4cE1hdGNoQXJyYXkpOiBQYXJzaW5nUmVzdWx0IHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gY29udGV4dC5jcmVhdGVQYXJzaW5nUmVzdWx0KG1hdGNoLmluZGV4LCBtYXRjaFswXSk7XG5cbiAgICAgICAgY29uc3QgbW9udGggPSBNT05USF9ESUNUSU9OQVJZW21hdGNoW01PTlRIX05BTUVfR1JPVVBdLnRvTG93ZXJDYXNlKCldO1xuICAgICAgICBjb25zdCBkYXkgPSBwYXJzZU9yZGluYWxOdW1iZXJQYXR0ZXJuKG1hdGNoW0RBVEVfR1JPVVBdKTtcbiAgICAgICAgaWYgKGRheSA+IDMxKSB7XG4gICAgICAgICAgICAvLyBlLmcuIFwiWzk2IEF1Z11cIiA9PiBcIjlbNiBBdWddXCIsIHdlIG5lZWQgdG8gc2hpZnQgYXdheSBmcm9tIHRoZSBuZXh0IG51bWJlclxuICAgICAgICAgICAgbWF0Y2guaW5kZXggPSBtYXRjaC5pbmRleCArIG1hdGNoW0RBVEVfR1JPVVBdLmxlbmd0aDtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG5cbiAgICAgICAgcmVzdWx0LnN0YXJ0LmFzc2lnbihcIm1vbnRoXCIsIG1vbnRoKTtcbiAgICAgICAgcmVzdWx0LnN0YXJ0LmFzc2lnbihcImRheVwiLCBkYXkpO1xuXG4gICAgICAgIGlmIChtYXRjaFtZRUFSX0dST1VQXSkge1xuICAgICAgICAgICAgY29uc3QgeWVhck51bWJlciA9IHBhcnNlWWVhcihtYXRjaFtZRUFSX0dST1VQXSk7XG4gICAgICAgICAgICByZXN1bHQuc3RhcnQuYXNzaWduKFwieWVhclwiLCB5ZWFyTnVtYmVyKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbnN0IHllYXIgPSBmaW5kWWVhckNsb3Nlc3RUb1JlZihjb250ZXh0LnJlZkRhdGUsIGRheSwgbW9udGgpO1xuICAgICAgICAgICAgcmVzdWx0LnN0YXJ0LmltcGx5KFwieWVhclwiLCB5ZWFyKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChtYXRjaFtEQVRFX1RPX0dST1VQXSkge1xuICAgICAgICAgICAgY29uc3QgZW5kRGF0ZSA9IHBhcnNlT3JkaW5hbE51bWJlclBhdHRlcm4obWF0Y2hbREFURV9UT19HUk9VUF0pO1xuXG4gICAgICAgICAgICByZXN1bHQuZW5kID0gcmVzdWx0LnN0YXJ0LmNsb25lKCk7XG4gICAgICAgICAgICByZXN1bHQuZW5kLmFzc2lnbihcImRheVwiLCBlbmREYXRlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxufVxuIiwgImltcG9ydCB7IFBhcnNpbmdDb250ZXh0IH0gZnJvbSBcIi4uLy4uLy4uL2Nocm9ub1wiO1xuaW1wb3J0IHsgZmluZFllYXJDbG9zZXN0VG9SZWYgfSBmcm9tIFwiLi4vLi4vLi4vY2FsY3VsYXRpb24veWVhcnNcIjtcbmltcG9ydCB7IE1PTlRIX0RJQ1RJT05BUlkgfSBmcm9tIFwiLi4vY29uc3RhbnRzXCI7XG5pbXBvcnQgeyBPUkRJTkFMX05VTUJFUl9QQVRURVJOLCBwYXJzZU9yZGluYWxOdW1iZXJQYXR0ZXJuIH0gZnJvbSBcIi4uL2NvbnN0YW50c1wiO1xuaW1wb3J0IHsgWUVBUl9QQVRURVJOLCBwYXJzZVllYXIgfSBmcm9tIFwiLi4vY29uc3RhbnRzXCI7XG5pbXBvcnQgeyBtYXRjaEFueVBhdHRlcm4gfSBmcm9tIFwiLi4vLi4vLi4vdXRpbHMvcGF0dGVyblwiO1xuaW1wb3J0IHsgQWJzdHJhY3RQYXJzZXJXaXRoV29yZEJvdW5kYXJ5Q2hlY2tpbmcgfSBmcm9tIFwiLi4vLi4vLi4vY29tbW9uL3BhcnNlcnMvQWJzdHJhY3RQYXJzZXJXaXRoV29yZEJvdW5kYXJ5XCI7XG5cbi8vIHByZXR0aWVyLWlnbm9yZVxuY29uc3QgUEFUVEVSTiA9IG5ldyBSZWdFeHAoXG4gICAgYCgke21hdGNoQW55UGF0dGVybihNT05USF9ESUNUSU9OQVJZKX0pYCArXG4gICAgICAgIFwiKD86LXwvfFxcXFxzKiw/XFxcXHMqKVwiICtcbiAgICAgICAgYCgke09SRElOQUxfTlVNQkVSX1BBVFRFUk59KSg/IVxcXFxzKig/OmFtfHBtKSlcXFxccypgICtcbiAgICAgICAgXCIoPzpcIiArXG4gICAgICAgICAgICBcIig/OnRvfFxcXFwtKVxcXFxzKlwiICtcbiAgICAgICAgICAgIGAoJHtPUkRJTkFMX05VTUJFUl9QQVRURVJOfSlcXFxccypgICtcbiAgICAgICAgXCIpP1wiICtcbiAgICAgICAgXCIoPzpcIiArXG4gICAgICAgICAgICBgKD86LXwvfFxcXFxzKixcXFxccyp8XFxcXHMrKWAgK1xuICAgICAgICAgICAgYCgke1lFQVJfUEFUVEVSTn0pYCArXG4gICAgICAgIFwiKT9cIiArXG4gICAgICAgIFwiKD89XFxcXFd8JCkoPyFcXFxcOlxcXFxkKVwiLFxuICAgIFwiaVwiXG4pO1xuXG5jb25zdCBNT05USF9OQU1FX0dST1VQID0gMTtcbmNvbnN0IERBVEVfR1JPVVAgPSAyO1xuY29uc3QgREFURV9UT19HUk9VUCA9IDM7XG5jb25zdCBZRUFSX0dST1VQID0gNDtcblxuLyoqXG4gKiBUaGUgcGFyc2VyIGZvciBwYXJzaW5nIFVTJ3MgZGF0ZSBmb3JtYXQgdGhhdCBiZWdpbiB3aXRoIG1vbnRoJ3MgbmFtZS5cbiAqICAtIEphbnVhcnkgMTNcbiAqICAtIEphbnVhcnkgMTMsIDIwMTJcbiAqICAtIEphbnVhcnkgMTMgLSAxNSwgMjAxMlxuICogTm90ZTogV2F0Y2ggb3V0IGZvcjpcbiAqICAtIEphbnVhcnkgMTI6MDBcbiAqICAtIEphbnVhcnkgMTIuNDRcbiAqICAtIEphbnVhcnkgMTIyMjM0NFxuICogIC0gSmFudWFyeSAyMSAod2hlbiBzaG91bGRTa2lwWWVhckxpa2VEYXRlPXRydWUpXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEVOTW9udGhOYW1lTWlkZGxlRW5kaWFuUGFyc2VyIGV4dGVuZHMgQWJzdHJhY3RQYXJzZXJXaXRoV29yZEJvdW5kYXJ5Q2hlY2tpbmcge1xuICAgIHNob3VsZFNraXBZZWFyTGlrZURhdGU6IGJvb2xlYW47XG5cbiAgICBjb25zdHJ1Y3RvcihzaG91bGRTa2lwWWVhckxpa2VEYXRlOiBib29sZWFuKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMuc2hvdWxkU2tpcFllYXJMaWtlRGF0ZSA9IHNob3VsZFNraXBZZWFyTGlrZURhdGU7XG4gICAgfVxuXG4gICAgaW5uZXJQYXR0ZXJuKCk6IFJlZ0V4cCB7XG4gICAgICAgIHJldHVybiBQQVRURVJOO1xuICAgIH1cblxuICAgIGlubmVyRXh0cmFjdChjb250ZXh0OiBQYXJzaW5nQ29udGV4dCwgbWF0Y2g6IFJlZ0V4cE1hdGNoQXJyYXkpIHtcbiAgICAgICAgY29uc3QgbW9udGggPSBNT05USF9ESUNUSU9OQVJZW21hdGNoW01PTlRIX05BTUVfR1JPVVBdLnRvTG93ZXJDYXNlKCldO1xuICAgICAgICBjb25zdCBkYXkgPSBwYXJzZU9yZGluYWxOdW1iZXJQYXR0ZXJuKG1hdGNoW0RBVEVfR1JPVVBdKTtcbiAgICAgICAgaWYgKGRheSA+IDMxKSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFNraXAgdGhlIGNhc2Ugd2hlcmUgdGhlIGRheSBsb29rcyBsaWtlIGEgeWVhciAoZXg6IEphbnVhcnkgMjEpXG4gICAgICAgIGlmICh0aGlzLnNob3VsZFNraXBZZWFyTGlrZURhdGUpIHtcbiAgICAgICAgICAgIGlmICghbWF0Y2hbREFURV9UT19HUk9VUF0gJiYgIW1hdGNoW1lFQVJfR1JPVVBdICYmIG1hdGNoW0RBVEVfR1JPVVBdLm1hdGNoKC9eMlswLTVdJC8pKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgY29tcG9uZW50cyA9IGNvbnRleHRcbiAgICAgICAgICAgIC5jcmVhdGVQYXJzaW5nQ29tcG9uZW50cyh7XG4gICAgICAgICAgICAgICAgZGF5OiBkYXksXG4gICAgICAgICAgICAgICAgbW9udGg6IG1vbnRoLFxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5hZGRUYWcoXCJwYXJzZXIvRU5Nb250aE5hbWVNaWRkbGVFbmRpYW5QYXJzZXJcIik7XG5cbiAgICAgICAgaWYgKG1hdGNoW1lFQVJfR1JPVVBdKSB7XG4gICAgICAgICAgICBjb25zdCB5ZWFyID0gcGFyc2VZZWFyKG1hdGNoW1lFQVJfR1JPVVBdKTtcbiAgICAgICAgICAgIGNvbXBvbmVudHMuYXNzaWduKFwieWVhclwiLCB5ZWFyKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbnN0IHllYXIgPSBmaW5kWWVhckNsb3Nlc3RUb1JlZihjb250ZXh0LnJlZkRhdGUsIGRheSwgbW9udGgpO1xuICAgICAgICAgICAgY29tcG9uZW50cy5pbXBseShcInllYXJcIiwgeWVhcik7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFtYXRjaFtEQVRFX1RPX0dST1VQXSkge1xuICAgICAgICAgICAgcmV0dXJuIGNvbXBvbmVudHM7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBUZXh0IGNhbiBiZSAncmFuZ2UnIHZhbHVlLiBTdWNoIGFzICdKYW51YXJ5IDEyIC0gMTMsIDIwMTInXG4gICAgICAgIGNvbnN0IGVuZERhdGUgPSBwYXJzZU9yZGluYWxOdW1iZXJQYXR0ZXJuKG1hdGNoW0RBVEVfVE9fR1JPVVBdKTtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gY29udGV4dC5jcmVhdGVQYXJzaW5nUmVzdWx0KG1hdGNoLmluZGV4LCBtYXRjaFswXSk7XG4gICAgICAgIHJlc3VsdC5zdGFydCA9IGNvbXBvbmVudHM7XG4gICAgICAgIHJlc3VsdC5lbmQgPSBjb21wb25lbnRzLmNsb25lKCk7XG4gICAgICAgIHJlc3VsdC5lbmQuYXNzaWduKFwiZGF5XCIsIGVuZERhdGUpO1xuXG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxufVxuIiwgImltcG9ydCB7IEZVTExfTU9OVEhfTkFNRV9ESUNUSU9OQVJZLCBNT05USF9ESUNUSU9OQVJZIH0gZnJvbSBcIi4uL2NvbnN0YW50c1wiO1xuaW1wb3J0IHsgUGFyc2luZ0NvbnRleHQgfSBmcm9tIFwiLi4vLi4vLi4vY2hyb25vXCI7XG5pbXBvcnQgeyBmaW5kWWVhckNsb3Nlc3RUb1JlZiB9IGZyb20gXCIuLi8uLi8uLi9jYWxjdWxhdGlvbi95ZWFyc1wiO1xuaW1wb3J0IHsgbWF0Y2hBbnlQYXR0ZXJuIH0gZnJvbSBcIi4uLy4uLy4uL3V0aWxzL3BhdHRlcm5cIjtcbmltcG9ydCB7IFlFQVJfUEFUVEVSTiwgcGFyc2VZZWFyIH0gZnJvbSBcIi4uL2NvbnN0YW50c1wiO1xuaW1wb3J0IHsgQWJzdHJhY3RQYXJzZXJXaXRoV29yZEJvdW5kYXJ5Q2hlY2tpbmcgfSBmcm9tIFwiLi4vLi4vLi4vY29tbW9uL3BhcnNlcnMvQWJzdHJhY3RQYXJzZXJXaXRoV29yZEJvdW5kYXJ5XCI7XG5cbmNvbnN0IFBBVFRFUk4gPSBuZXcgUmVnRXhwKFxuICAgIGAoKD86aW4pXFxcXHMqKT9gICtcbiAgICAgICAgYCgke21hdGNoQW55UGF0dGVybihNT05USF9ESUNUSU9OQVJZKX0pYCArXG4gICAgICAgIGBcXFxccypgICtcbiAgICAgICAgYCg/OmAgK1xuICAgICAgICBgKD86LHwtfG9mKT9cXFxccyooJHtZRUFSX1BBVFRFUk59KT9gICtcbiAgICAgICAgXCIpP1wiICtcbiAgICAgICAgXCIoPz1bXlxcXFxzXFxcXHddfFxcXFxzK1teMC05XXxcXFxccyskfCQpXCIsXG4gICAgXCJpXCJcbik7XG5cbmNvbnN0IFBSRUZJWF9HUk9VUCA9IDE7XG5jb25zdCBNT05USF9OQU1FX0dST1VQID0gMjtcbmNvbnN0IFlFQVJfR1JPVVAgPSAzO1xuXG4vKipcbiAqIFRoZSBwYXJzZXIgZm9yIHBhcnNpbmcgbW9udGggbmFtZSBhbmQgeWVhci5cbiAqIC0gSmFudWFyeSwgMjAxMlxuICogLSBKYW51YXJ5IDIwMTJcbiAqIC0gSmFudWFyeVxuICogKGluKSBKYW5cbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRU5Nb250aE5hbWVQYXJzZXIgZXh0ZW5kcyBBYnN0cmFjdFBhcnNlcldpdGhXb3JkQm91bmRhcnlDaGVja2luZyB7XG4gICAgaW5uZXJQYXR0ZXJuKCk6IFJlZ0V4cCB7XG4gICAgICAgIHJldHVybiBQQVRURVJOO1xuICAgIH1cblxuICAgIGlubmVyRXh0cmFjdChjb250ZXh0OiBQYXJzaW5nQ29udGV4dCwgbWF0Y2g6IFJlZ0V4cE1hdGNoQXJyYXkpIHtcbiAgICAgICAgY29uc3QgbW9udGhOYW1lID0gbWF0Y2hbTU9OVEhfTkFNRV9HUk9VUF0udG9Mb3dlckNhc2UoKTtcblxuICAgICAgICAvLyBza2lwIHNvbWUgdW5saWtlbHkgd29yZHMgXCJqYW5cIiwgXCJtYXJcIiwgLi5cbiAgICAgICAgaWYgKG1hdGNoWzBdLmxlbmd0aCA8PSAzICYmICFGVUxMX01PTlRIX05BTUVfRElDVElPTkFSWVttb250aE5hbWVdKSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IGNvbnRleHQuY3JlYXRlUGFyc2luZ1Jlc3VsdChcbiAgICAgICAgICAgIG1hdGNoLmluZGV4ICsgKG1hdGNoW1BSRUZJWF9HUk9VUF0gfHwgXCJcIikubGVuZ3RoLFxuICAgICAgICAgICAgbWF0Y2guaW5kZXggKyBtYXRjaFswXS5sZW5ndGhcbiAgICAgICAgKTtcbiAgICAgICAgcmVzdWx0LnN0YXJ0LmltcGx5KFwiZGF5XCIsIDEpO1xuICAgICAgICByZXN1bHQuc3RhcnQuYWRkVGFnKFwicGFyc2VyL0VOTW9udGhOYW1lUGFyc2VyXCIpO1xuXG4gICAgICAgIGNvbnN0IG1vbnRoID0gTU9OVEhfRElDVElPTkFSWVttb250aE5hbWVdO1xuICAgICAgICByZXN1bHQuc3RhcnQuYXNzaWduKFwibW9udGhcIiwgbW9udGgpO1xuXG4gICAgICAgIGlmIChtYXRjaFtZRUFSX0dST1VQXSkge1xuICAgICAgICAgICAgY29uc3QgeWVhciA9IHBhcnNlWWVhcihtYXRjaFtZRUFSX0dST1VQXSk7XG4gICAgICAgICAgICByZXN1bHQuc3RhcnQuYXNzaWduKFwieWVhclwiLCB5ZWFyKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbnN0IHllYXIgPSBmaW5kWWVhckNsb3Nlc3RUb1JlZihjb250ZXh0LnJlZkRhdGUsIDEsIG1vbnRoKTtcbiAgICAgICAgICAgIHJlc3VsdC5zdGFydC5pbXBseShcInllYXJcIiwgeWVhcik7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbn1cbiIsICJpbXBvcnQgeyBQYXJzaW5nQ29udGV4dCB9IGZyb20gXCIuLi8uLi8uLi9jaHJvbm9cIjtcbmltcG9ydCB7IE1PTlRIX0RJQ1RJT05BUlkgfSBmcm9tIFwiLi4vY29uc3RhbnRzXCI7XG5pbXBvcnQgeyBtYXRjaEFueVBhdHRlcm4gfSBmcm9tIFwiLi4vLi4vLi4vdXRpbHMvcGF0dGVyblwiO1xuaW1wb3J0IHsgQWJzdHJhY3RQYXJzZXJXaXRoV29yZEJvdW5kYXJ5Q2hlY2tpbmcgfSBmcm9tIFwiLi4vLi4vLi4vY29tbW9uL3BhcnNlcnMvQWJzdHJhY3RQYXJzZXJXaXRoV29yZEJvdW5kYXJ5XCI7XG5cbi8qXG4gICAgRGF0ZSBmb3JtYXQgd2l0aCBzbGFzaCBcIi9cIiBiZXR3ZWVuIG51bWJlcnMgbGlrZSBFTlNsYXNoRGF0ZUZvcm1hdFBhcnNlcixcbiAgICBidXQgdGhpcyBwYXJzZXIgZXhwZWN0IHllYXIgYmVmb3JlIG1vbnRoIGFuZCBkYXRlLlxuICAgIC0gWVlZWS9NTS9ERFxuICAgIC0gWVlZWS1NTS1ERFxuICAgIC0gWVlZWS5NTS5ERFxuKi9cbmNvbnN0IFBBVFRFUk4gPSBuZXcgUmVnRXhwKFxuICAgIGAoWzAtOV17NH0pWy1cXFxcLlxcXFwvXFxcXHNdYCArXG4gICAgICAgIGAoPzooJHttYXRjaEFueVBhdHRlcm4oTU9OVEhfRElDVElPTkFSWSl9KXwoWzAtOV17MSwyfSkpWy1cXFxcLlxcXFwvXFxcXHNdYCArXG4gICAgICAgIGAoWzAtOV17MSwyfSlgICtcbiAgICAgICAgXCIoPz1cXFxcV3wkKVwiLFxuICAgIFwiaVwiXG4pO1xuXG5jb25zdCBZRUFSX05VTUJFUl9HUk9VUCA9IDE7XG5jb25zdCBNT05USF9OQU1FX0dST1VQID0gMjtcbmNvbnN0IE1PTlRIX05VTUJFUl9HUk9VUCA9IDM7XG5jb25zdCBEQVRFX05VTUJFUl9HUk9VUCA9IDQ7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEVOWWVhck1vbnRoRGF5UGFyc2VyIGV4dGVuZHMgQWJzdHJhY3RQYXJzZXJXaXRoV29yZEJvdW5kYXJ5Q2hlY2tpbmcge1xuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgc3RyaWN0TW9udGhEYXRlT3JkZXI6IGJvb2xlYW4pIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICB9XG5cbiAgICBpbm5lclBhdHRlcm4oKTogUmVnRXhwIHtcbiAgICAgICAgcmV0dXJuIFBBVFRFUk47XG4gICAgfVxuXG4gICAgaW5uZXJFeHRyYWN0KGNvbnRleHQ6IFBhcnNpbmdDb250ZXh0LCBtYXRjaDogUmVnRXhwTWF0Y2hBcnJheSkge1xuICAgICAgICBjb25zdCB5ZWFyID0gcGFyc2VJbnQobWF0Y2hbWUVBUl9OVU1CRVJfR1JPVVBdKTtcbiAgICAgICAgbGV0IGRheSA9IHBhcnNlSW50KG1hdGNoW0RBVEVfTlVNQkVSX0dST1VQXSk7XG4gICAgICAgIGxldCBtb250aCA9IG1hdGNoW01PTlRIX05VTUJFUl9HUk9VUF1cbiAgICAgICAgICAgID8gcGFyc2VJbnQobWF0Y2hbTU9OVEhfTlVNQkVSX0dST1VQXSlcbiAgICAgICAgICAgIDogTU9OVEhfRElDVElPTkFSWVttYXRjaFtNT05USF9OQU1FX0dST1VQXS50b0xvd2VyQ2FzZSgpXTtcblxuICAgICAgICBpZiAobW9udGggPCAxIHx8IG1vbnRoID4gMTIpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnN0cmljdE1vbnRoRGF0ZU9yZGVyKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoZGF5ID49IDEgJiYgZGF5IDw9IDEyKSB7XG4gICAgICAgICAgICAgICAgW21vbnRoLCBkYXldID0gW2RheSwgbW9udGhdO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmIChkYXkgPCAxIHx8IGRheSA+IDMxKSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBkYXk6IGRheSxcbiAgICAgICAgICAgIG1vbnRoOiBtb250aCxcbiAgICAgICAgICAgIHllYXI6IHllYXIsXG4gICAgICAgIH07XG4gICAgfVxufVxuIiwgImltcG9ydCB7IFBhcnNpbmdDb250ZXh0IH0gZnJvbSBcIi4uLy4uLy4uL2Nocm9ub1wiO1xuaW1wb3J0IHsgUGFyc2luZ0NvbXBvbmVudHMgfSBmcm9tIFwiLi4vLi4vLi4vcmVzdWx0c1wiO1xuaW1wb3J0IHsgQWJzdHJhY3RQYXJzZXJXaXRoV29yZEJvdW5kYXJ5Q2hlY2tpbmcgfSBmcm9tIFwiLi4vLi4vLi4vY29tbW9uL3BhcnNlcnMvQWJzdHJhY3RQYXJzZXJXaXRoV29yZEJvdW5kYXJ5XCI7XG5cbmNvbnN0IFBBVFRFUk4gPSBuZXcgUmVnRXhwKFwiKFswLTldfDBbMS05XXwxWzAxMl0pLyhbMC05XXs0fSlcIiArIFwiXCIsIFwiaVwiKTtcblxuY29uc3QgTU9OVEhfR1JPVVAgPSAxO1xuY29uc3QgWUVBUl9HUk9VUCA9IDI7XG5cbi8qKlxuICogTW9udGgvWWVhciBkYXRlIGZvcm1hdCB3aXRoIHNsYXNoIFwiL1wiIChhbHNvIFwiLVwiIGFuZCBcIi5cIikgYmV0d2VlbiBudW1iZXJzXG4gKiAtIDExLzA1XG4gKiAtIDA2LzIwMDVcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRU5TbGFzaE1vbnRoRm9ybWF0UGFyc2VyIGV4dGVuZHMgQWJzdHJhY3RQYXJzZXJXaXRoV29yZEJvdW5kYXJ5Q2hlY2tpbmcge1xuICAgIGlubmVyUGF0dGVybigpOiBSZWdFeHAge1xuICAgICAgICByZXR1cm4gUEFUVEVSTjtcbiAgICB9XG5cbiAgICBpbm5lckV4dHJhY3QoY29udGV4dDogUGFyc2luZ0NvbnRleHQsIG1hdGNoOiBSZWdFeHBNYXRjaEFycmF5KTogUGFyc2luZ0NvbXBvbmVudHMge1xuICAgICAgICBjb25zdCB5ZWFyID0gcGFyc2VJbnQobWF0Y2hbWUVBUl9HUk9VUF0pO1xuICAgICAgICBjb25zdCBtb250aCA9IHBhcnNlSW50KG1hdGNoW01PTlRIX0dST1VQXSk7XG5cbiAgICAgICAgcmV0dXJuIGNvbnRleHQuY3JlYXRlUGFyc2luZ0NvbXBvbmVudHMoKS5pbXBseShcImRheVwiLCAxKS5hc3NpZ24oXCJtb250aFwiLCBtb250aCkuYXNzaWduKFwieWVhclwiLCB5ZWFyKTtcbiAgICB9XG59XG4iLCAiaW1wb3J0IHsgUGFyc2VyLCBQYXJzaW5nQ29udGV4dCB9IGZyb20gXCIuLi8uLi9jaHJvbm9cIjtcbmltcG9ydCB7IFBhcnNpbmdDb21wb25lbnRzLCBQYXJzaW5nUmVzdWx0IH0gZnJvbSBcIi4uLy4uL3Jlc3VsdHNcIjtcbmltcG9ydCB7IE1lcmlkaWVtIH0gZnJvbSBcIi4uLy4uL3R5cGVzXCI7XG5cbi8vIHByZXR0aWVyLWlnbm9yZVxuZnVuY3Rpb24gcHJpbWFyeVRpbWVQYXR0ZXJuKGxlZnRCb3VuZGFyeTogc3RyaW5nLCBwcmltYXJ5UHJlZml4OiBzdHJpbmcsIHByaW1hcnlTdWZmaXg6IHN0cmluZywgZmxhZ3M6IHN0cmluZykge1xuICAgIHJldHVybiBuZXcgUmVnRXhwKFxuICAgICAgICAgICAgYCR7bGVmdEJvdW5kYXJ5fWAgK1xuICAgICAgICAgICAgYCR7cHJpbWFyeVByZWZpeH1gICtcbiAgICAgICAgICAgIGAoXFxcXGR7MSw0fSlgICtcbiAgICAgICAgICAgIGAoPzpgICtcbiAgICAgICAgICAgICAgICBgKD86XFxcXC58OnxcdUZGMUEpYCArXG4gICAgICAgICAgICAgICAgYChcXFxcZHsxLDJ9KWAgK1xuICAgICAgICAgICAgICAgIGAoPzpgICtcbiAgICAgICAgICAgICAgICAgICAgYCg/Ojp8XHVGRjFBKWAgK1xuICAgICAgICAgICAgICAgICAgICBgKFxcXFxkezJ9KWAgK1xuICAgICAgICAgICAgICAgICAgICBgKD86XFxcXC4oXFxcXGR7MSw2fSkpP2AgK1xuICAgICAgICAgICAgICAgIGApP2AgK1xuICAgICAgICAgICAgYCk/YCArXG4gICAgICAgICAgICBgKD86XFxcXHMqKGFcXFxcLm1cXFxcLnxwXFxcXC5tXFxcXC58YW0/fHBtPykpP2AgK1xuICAgICAgICAgICAgYCR7cHJpbWFyeVN1ZmZpeH1gLFxuICAgICAgICBmbGFnc1xuICAgICk7XG59XG5cbi8vIHByZXR0aWVyLWlnbm9yZVxuZnVuY3Rpb24gZm9sbG93aW5nVGltZVBhdHRlbihmb2xsb3dpbmdQaGFzZTogc3RyaW5nLCBmb2xsb3dpbmdTdWZmaXg6IHN0cmluZykge1xuICAgIHJldHVybiBuZXcgUmVnRXhwKFxuICAgICAgICBgXigke2ZvbGxvd2luZ1BoYXNlfSlgICtcbiAgICAgICAgICAgIGAoXFxcXGR7MSw0fSlgICtcbiAgICAgICAgICAgIGAoPzpgICtcbiAgICAgICAgICAgICAgICBgKD86XFxcXC58XFxcXDp8XFxcXFx1RkYxQSlgICtcbiAgICAgICAgICAgICAgICBgKFxcXFxkezEsMn0pYCArXG4gICAgICAgICAgICAgICAgYCg/OmAgK1xuICAgICAgICAgICAgICAgICAgICBgKD86XFxcXC58XFxcXDp8XFxcXFx1RkYxQSlgICtcbiAgICAgICAgICAgICAgICAgICAgYChcXFxcZHsxLDJ9KSg/OlxcXFwuKFxcXFxkezEsNn0pKT9gICtcbiAgICAgICAgICAgICAgICBgKT9gICtcbiAgICAgICAgICAgIGApP2AgK1xuICAgICAgICAgICAgYCg/OlxcXFxzKihhXFxcXC5tXFxcXC58cFxcXFwubVxcXFwufGFtP3xwbT8pKT9gICtcbiAgICAgICAgICAgIGAke2ZvbGxvd2luZ1N1ZmZpeH1gLFxuICAgICAgICBcImlcIlxuICAgICk7XG59XG5cbmNvbnN0IEhPVVJfR1JPVVAgPSAyO1xuY29uc3QgTUlOVVRFX0dST1VQID0gMztcbmNvbnN0IFNFQ09ORF9HUk9VUCA9IDQ7XG5jb25zdCBNSUxMSV9TRUNPTkRfR1JPVVAgPSA1O1xuY29uc3QgQU1fUE1fSE9VUl9HUk9VUCA9IDY7XG5cbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBBYnN0cmFjdFRpbWVFeHByZXNzaW9uUGFyc2VyIGltcGxlbWVudHMgUGFyc2VyIHtcbiAgICBhYnN0cmFjdCBwcmltYXJ5UHJlZml4KCk6IHN0cmluZztcbiAgICBhYnN0cmFjdCBmb2xsb3dpbmdQaGFzZSgpOiBzdHJpbmc7XG4gICAgc3RyaWN0TW9kZTogYm9vbGVhbjtcblxuICAgIGNvbnN0cnVjdG9yKHN0cmljdE1vZGUgPSBmYWxzZSkge1xuICAgICAgICB0aGlzLnN0cmljdE1vZGUgPSBzdHJpY3RNb2RlO1xuICAgIH1cblxuICAgIHBhdHRlcm5GbGFncygpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gXCJpXCI7XG4gICAgfVxuXG4gICAgcHJpbWFyeVBhdHRlcm5MZWZ0Qm91bmRhcnkoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIGAoXnxcXFxcc3xUfFxcXFxiKWA7XG4gICAgfVxuXG4gICAgcHJpbWFyeVN1ZmZpeCgpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gYCg/IS8pKD89XFxcXFd8JClgO1xuICAgIH1cblxuICAgIGZvbGxvd2luZ1N1ZmZpeCgpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gYCg/IS8pKD89XFxcXFd8JClgO1xuICAgIH1cblxuICAgIHBhdHRlcm4oY29udGV4dDogUGFyc2luZ0NvbnRleHQpOiBSZWdFeHAge1xuICAgICAgICByZXR1cm4gdGhpcy5nZXRQcmltYXJ5VGltZVBhdHRlcm5UaHJvdWdoQ2FjaGUoKTtcbiAgICB9XG5cbiAgICBleHRyYWN0KGNvbnRleHQ6IFBhcnNpbmdDb250ZXh0LCBtYXRjaDogUmVnRXhwTWF0Y2hBcnJheSk6IFBhcnNpbmdSZXN1bHQge1xuICAgICAgICBjb25zdCBzdGFydENvbXBvbmVudHMgPSB0aGlzLmV4dHJhY3RQcmltYXJ5VGltZUNvbXBvbmVudHMoY29udGV4dCwgbWF0Y2gpO1xuICAgICAgICBpZiAoIXN0YXJ0Q29tcG9uZW50cykge1xuICAgICAgICAgICAgLy8gSWYgdGhlIG1hdGNoIHNlZW0gbGlrZSBhIHllYXIgZS5nLiBcIjIwMTMuMTI6Li4uXCIsXG4gICAgICAgICAgICAvLyB0aGVuIHNraXBzIHRoZSB5ZWFyIHBhcnQgYW5kIHRyeSBtYXRjaGluZyBhZ2Fpbi5cbiAgICAgICAgICAgIGlmIChtYXRjaFswXS5tYXRjaCgvXlxcZHs0fS8pKSB7XG4gICAgICAgICAgICAgICAgbWF0Y2guaW5kZXggKz0gNDsgLy8gU2tpcCBvdmVyIHBvdGVudGlhbCBvdmVybGFwcGluZyBwYXR0ZXJuXG4gICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIG1hdGNoLmluZGV4ICs9IG1hdGNoWzBdLmxlbmd0aDsgLy8gU2tpcCBvdmVyIHBvdGVudGlhbCBvdmVybGFwcGluZyBwYXR0ZXJuXG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGluZGV4ID0gbWF0Y2guaW5kZXggKyBtYXRjaFsxXS5sZW5ndGg7XG4gICAgICAgIGNvbnN0IHRleHQgPSBtYXRjaFswXS5zdWJzdHJpbmcobWF0Y2hbMV0ubGVuZ3RoKTtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gY29udGV4dC5jcmVhdGVQYXJzaW5nUmVzdWx0KGluZGV4LCB0ZXh0LCBzdGFydENvbXBvbmVudHMpO1xuICAgICAgICBtYXRjaC5pbmRleCArPSBtYXRjaFswXS5sZW5ndGg7IC8vIFNraXAgb3ZlciBwb3RlbnRpYWwgb3ZlcmxhcHBpbmcgcGF0dGVyblxuXG4gICAgICAgIGNvbnN0IHJlbWFpbmluZ1RleHQgPSBjb250ZXh0LnRleHQuc3Vic3RyaW5nKG1hdGNoLmluZGV4KTtcbiAgICAgICAgY29uc3QgZm9sbG93aW5nUGF0dGVybiA9IHRoaXMuZ2V0Rm9sbG93aW5nVGltZVBhdHRlcm5UaHJvdWdoQ2FjaGUoKTtcbiAgICAgICAgY29uc3QgZm9sbG93aW5nTWF0Y2ggPSBmb2xsb3dpbmdQYXR0ZXJuLmV4ZWMocmVtYWluaW5nVGV4dCk7XG5cbiAgICAgICAgLy8gUGF0dGVybiBcIjQ1Ni0xMlwiLCBcIjIwMjItMTJcIiBzaG91bGQgbm90IGJlIHRpbWUgd2l0aG91dCBwcm9wZXIgY29udGV4dFxuICAgICAgICBpZiAodGV4dC5tYXRjaCgvXlxcZHszLDR9LykgJiYgZm9sbG93aW5nTWF0Y2gpIHtcbiAgICAgICAgICAgIC8vIGUuZy4gXCIyMDIyLTEyXCJcbiAgICAgICAgICAgIGlmIChmb2xsb3dpbmdNYXRjaFswXS5tYXRjaCgvXlxccyooWystXSlcXHMqXFxkezIsNH0kLykpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIGUuZy4gXCIyMDIyLTEyOjAxLi4uXCJcbiAgICAgICAgICAgIGlmIChmb2xsb3dpbmdNYXRjaFswXS5tYXRjaCgvXlxccyooWystXSlcXHMqXFxkezJ9XFxXXFxkezJ9LykpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChcbiAgICAgICAgICAgICFmb2xsb3dpbmdNYXRjaCB8fFxuICAgICAgICAgICAgLy8gUGF0dGVybiBcIllZLllZIC1YWFhYXCIgaXMgbW9yZSBsaWtlIHRpbWV6b25lIG9mZnNldFxuICAgICAgICAgICAgZm9sbG93aW5nTWF0Y2hbMF0ubWF0Y2goL15cXHMqKFsrLV0pXFxzKlxcZHszLDR9JC8pXG4gICAgICAgICkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuY2hlY2tBbmRSZXR1cm5XaXRob3V0Rm9sbG93aW5nUGF0dGVybihyZXN1bHQpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmVzdWx0LmVuZCA9IHRoaXMuZXh0cmFjdEZvbGxvd2luZ1RpbWVDb21wb25lbnRzKGNvbnRleHQsIGZvbGxvd2luZ01hdGNoLCByZXN1bHQpO1xuICAgICAgICBpZiAocmVzdWx0LmVuZCkge1xuICAgICAgICAgICAgcmVzdWx0LnRleHQgKz0gZm9sbG93aW5nTWF0Y2hbMF07XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGhpcy5jaGVja0FuZFJldHVybldpdGhGb2xsb3dpbmdQYXR0ZXJuKHJlc3VsdCk7XG4gICAgfVxuXG4gICAgZXh0cmFjdFByaW1hcnlUaW1lQ29tcG9uZW50cyhcbiAgICAgICAgY29udGV4dDogUGFyc2luZ0NvbnRleHQsXG4gICAgICAgIG1hdGNoOiBSZWdFeHBNYXRjaEFycmF5LFxuICAgICAgICBzdHJpY3QgPSBmYWxzZVxuICAgICk6IG51bGwgfCBQYXJzaW5nQ29tcG9uZW50cyB7XG4gICAgICAgIGNvbnN0IGNvbXBvbmVudHMgPSBjb250ZXh0LmNyZWF0ZVBhcnNpbmdDb21wb25lbnRzKCk7XG4gICAgICAgIGxldCBtaW51dGUgPSAwO1xuICAgICAgICBsZXQgbWVyaWRpZW0gPSBudWxsO1xuXG4gICAgICAgIC8vIC0tLS0tIEhvdXJzXG4gICAgICAgIGxldCBob3VyID0gcGFyc2VJbnQobWF0Y2hbSE9VUl9HUk9VUF0pO1xuICAgICAgICBpZiAoaG91ciA+IDEwMCkge1xuICAgICAgICAgICAgaWYgKHRoaXMuc3RyaWN0TW9kZSB8fCBtYXRjaFtNSU5VVEVfR1JPVVBdICE9IG51bGwpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgbWludXRlID0gaG91ciAlIDEwMDtcbiAgICAgICAgICAgIGhvdXIgPSBNYXRoLmZsb29yKGhvdXIgLyAxMDApO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGhvdXIgPiAyNCkge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cblxuICAgICAgICAvLyAtLS0tLSBNaW51dGVzXG4gICAgICAgIGlmIChtYXRjaFtNSU5VVEVfR1JPVVBdICE9IG51bGwpIHtcbiAgICAgICAgICAgIGlmIChtYXRjaFtNSU5VVEVfR1JPVVBdLmxlbmd0aCA9PSAxICYmICFtYXRjaFtBTV9QTV9IT1VSX0dST1VQXSkge1xuICAgICAgICAgICAgICAgIC8vIFNraXAgc2luZ2xlIGRpZ2l0IG1pbnV0ZSBlLmcuIFwiYXQgMS4xIHh4XCJcbiAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgbWludXRlID0gcGFyc2VJbnQobWF0Y2hbTUlOVVRFX0dST1VQXSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAobWludXRlID49IDYwKSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChob3VyID4gMTIpIHtcbiAgICAgICAgICAgIG1lcmlkaWVtID0gTWVyaWRpZW0uUE07XG4gICAgICAgIH1cblxuICAgICAgICAvLyAtLS0tLSBBTSAmIFBNXG4gICAgICAgIGlmIChtYXRjaFtBTV9QTV9IT1VSX0dST1VQXSAhPSBudWxsKSB7XG4gICAgICAgICAgICBpZiAoaG91ciA+IDEyKSByZXR1cm4gbnVsbDtcbiAgICAgICAgICAgIGNvbnN0IGFtcG0gPSBtYXRjaFtBTV9QTV9IT1VSX0dST1VQXVswXS50b0xvd2VyQ2FzZSgpO1xuICAgICAgICAgICAgaWYgKGFtcG0gPT0gXCJhXCIpIHtcbiAgICAgICAgICAgICAgICBtZXJpZGllbSA9IE1lcmlkaWVtLkFNO1xuICAgICAgICAgICAgICAgIGlmIChob3VyID09IDEyKSB7XG4gICAgICAgICAgICAgICAgICAgIGhvdXIgPSAwO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKGFtcG0gPT0gXCJwXCIpIHtcbiAgICAgICAgICAgICAgICBtZXJpZGllbSA9IE1lcmlkaWVtLlBNO1xuICAgICAgICAgICAgICAgIGlmIChob3VyICE9IDEyKSB7XG4gICAgICAgICAgICAgICAgICAgIGhvdXIgKz0gMTI7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgY29tcG9uZW50cy5hc3NpZ24oXCJob3VyXCIsIGhvdXIpO1xuICAgICAgICBjb21wb25lbnRzLmFzc2lnbihcIm1pbnV0ZVwiLCBtaW51dGUpO1xuXG4gICAgICAgIGlmIChtZXJpZGllbSAhPT0gbnVsbCkge1xuICAgICAgICAgICAgY29tcG9uZW50cy5hc3NpZ24oXCJtZXJpZGllbVwiLCBtZXJpZGllbSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpZiAoaG91ciA8IDEyKSB7XG4gICAgICAgICAgICAgICAgY29tcG9uZW50cy5pbXBseShcIm1lcmlkaWVtXCIsIE1lcmlkaWVtLkFNKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgY29tcG9uZW50cy5pbXBseShcIm1lcmlkaWVtXCIsIE1lcmlkaWVtLlBNKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8vIC0tLS0tIE1pbGxpc2Vjb25kXG4gICAgICAgIGlmIChtYXRjaFtNSUxMSV9TRUNPTkRfR1JPVVBdICE9IG51bGwpIHtcbiAgICAgICAgICAgIGNvbnN0IG1pbGxpc2Vjb25kID0gcGFyc2VJbnQobWF0Y2hbTUlMTElfU0VDT05EX0dST1VQXS5zdWJzdHJpbmcoMCwgMykpO1xuICAgICAgICAgICAgaWYgKG1pbGxpc2Vjb25kID49IDEwMDApIHJldHVybiBudWxsO1xuXG4gICAgICAgICAgICBjb21wb25lbnRzLmFzc2lnbihcIm1pbGxpc2Vjb25kXCIsIG1pbGxpc2Vjb25kKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIC0tLS0tIFNlY29uZFxuICAgICAgICBpZiAobWF0Y2hbU0VDT05EX0dST1VQXSAhPSBudWxsKSB7XG4gICAgICAgICAgICBjb25zdCBzZWNvbmQgPSBwYXJzZUludChtYXRjaFtTRUNPTkRfR1JPVVBdKTtcbiAgICAgICAgICAgIGlmIChzZWNvbmQgPj0gNjApIHJldHVybiBudWxsO1xuXG4gICAgICAgICAgICBjb21wb25lbnRzLmFzc2lnbihcInNlY29uZFwiLCBzZWNvbmQpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGNvbXBvbmVudHM7XG4gICAgfVxuXG4gICAgZXh0cmFjdEZvbGxvd2luZ1RpbWVDb21wb25lbnRzKFxuICAgICAgICBjb250ZXh0OiBQYXJzaW5nQ29udGV4dCxcbiAgICAgICAgbWF0Y2g6IFJlZ0V4cE1hdGNoQXJyYXksXG4gICAgICAgIHJlc3VsdDogUGFyc2luZ1Jlc3VsdFxuICAgICk6IG51bGwgfCBQYXJzaW5nQ29tcG9uZW50cyB7XG4gICAgICAgIGNvbnN0IGNvbXBvbmVudHMgPSBjb250ZXh0LmNyZWF0ZVBhcnNpbmdDb21wb25lbnRzKCk7XG5cbiAgICAgICAgLy8gLS0tLS0gTWlsbGlzZWNvbmRcbiAgICAgICAgaWYgKG1hdGNoW01JTExJX1NFQ09ORF9HUk9VUF0gIT0gbnVsbCkge1xuICAgICAgICAgICAgY29uc3QgbWlsbGlzZWNvbmQgPSBwYXJzZUludChtYXRjaFtNSUxMSV9TRUNPTkRfR1JPVVBdLnN1YnN0cmluZygwLCAzKSk7XG4gICAgICAgICAgICBpZiAobWlsbGlzZWNvbmQgPj0gMTAwMCkgcmV0dXJuIG51bGw7XG5cbiAgICAgICAgICAgIGNvbXBvbmVudHMuYXNzaWduKFwibWlsbGlzZWNvbmRcIiwgbWlsbGlzZWNvbmQpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gLS0tLS0gU2Vjb25kXG4gICAgICAgIGlmIChtYXRjaFtTRUNPTkRfR1JPVVBdICE9IG51bGwpIHtcbiAgICAgICAgICAgIGNvbnN0IHNlY29uZCA9IHBhcnNlSW50KG1hdGNoW1NFQ09ORF9HUk9VUF0pO1xuICAgICAgICAgICAgaWYgKHNlY29uZCA+PSA2MCkgcmV0dXJuIG51bGw7XG5cbiAgICAgICAgICAgIGNvbXBvbmVudHMuYXNzaWduKFwic2Vjb25kXCIsIHNlY29uZCk7XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgaG91ciA9IHBhcnNlSW50KG1hdGNoW0hPVVJfR1JPVVBdKTtcbiAgICAgICAgbGV0IG1pbnV0ZSA9IDA7XG4gICAgICAgIGxldCBtZXJpZGllbSA9IC0xO1xuXG4gICAgICAgIC8vIC0tLS0tIE1pbnV0ZVxuICAgICAgICBpZiAobWF0Y2hbTUlOVVRFX0dST1VQXSAhPSBudWxsKSB7XG4gICAgICAgICAgICBtaW51dGUgPSBwYXJzZUludChtYXRjaFtNSU5VVEVfR1JPVVBdKTtcbiAgICAgICAgfSBlbHNlIGlmIChob3VyID4gMTAwKSB7XG4gICAgICAgICAgICBtaW51dGUgPSBob3VyICUgMTAwO1xuICAgICAgICAgICAgaG91ciA9IE1hdGguZmxvb3IoaG91ciAvIDEwMCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAobWludXRlID49IDYwIHx8IGhvdXIgPiAyNCkge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoaG91ciA+PSAxMikge1xuICAgICAgICAgICAgbWVyaWRpZW0gPSBNZXJpZGllbS5QTTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIC0tLS0tIEFNICYgUE1cbiAgICAgICAgaWYgKG1hdGNoW0FNX1BNX0hPVVJfR1JPVVBdICE9IG51bGwpIHtcbiAgICAgICAgICAgIGlmIChob3VyID4gMTIpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY29uc3QgYW1wbSA9IG1hdGNoW0FNX1BNX0hPVVJfR1JPVVBdWzBdLnRvTG93ZXJDYXNlKCk7XG4gICAgICAgICAgICBpZiAoYW1wbSA9PSBcImFcIikge1xuICAgICAgICAgICAgICAgIG1lcmlkaWVtID0gTWVyaWRpZW0uQU07XG4gICAgICAgICAgICAgICAgaWYgKGhvdXIgPT0gMTIpIHtcbiAgICAgICAgICAgICAgICAgICAgaG91ciA9IDA7XG4gICAgICAgICAgICAgICAgICAgIGlmICghY29tcG9uZW50cy5pc0NlcnRhaW4oXCJkYXlcIikpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudHMuaW1wbHkoXCJkYXlcIiwgY29tcG9uZW50cy5nZXQoXCJkYXlcIikgKyAxKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKGFtcG0gPT0gXCJwXCIpIHtcbiAgICAgICAgICAgICAgICBtZXJpZGllbSA9IE1lcmlkaWVtLlBNO1xuICAgICAgICAgICAgICAgIGlmIChob3VyICE9IDEyKSBob3VyICs9IDEyO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoIXJlc3VsdC5zdGFydC5pc0NlcnRhaW4oXCJtZXJpZGllbVwiKSkge1xuICAgICAgICAgICAgICAgIGlmIChtZXJpZGllbSA9PSBNZXJpZGllbS5BTSkge1xuICAgICAgICAgICAgICAgICAgICByZXN1bHQuc3RhcnQuaW1wbHkoXCJtZXJpZGllbVwiLCBNZXJpZGllbS5BTSk7XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKHJlc3VsdC5zdGFydC5nZXQoXCJob3VyXCIpID09IDEyKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXN1bHQuc3RhcnQuYXNzaWduKFwiaG91clwiLCAwKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdC5zdGFydC5pbXBseShcIm1lcmlkaWVtXCIsIE1lcmlkaWVtLlBNKTtcblxuICAgICAgICAgICAgICAgICAgICBpZiAocmVzdWx0LnN0YXJ0LmdldChcImhvdXJcIikgIT0gMTIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdC5zdGFydC5hc3NpZ24oXCJob3VyXCIsIHJlc3VsdC5zdGFydC5nZXQoXCJob3VyXCIpICsgMTIpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgY29tcG9uZW50cy5hc3NpZ24oXCJob3VyXCIsIGhvdXIpO1xuICAgICAgICBjb21wb25lbnRzLmFzc2lnbihcIm1pbnV0ZVwiLCBtaW51dGUpO1xuXG4gICAgICAgIGlmIChtZXJpZGllbSA+PSAwKSB7XG4gICAgICAgICAgICBjb21wb25lbnRzLmFzc2lnbihcIm1lcmlkaWVtXCIsIG1lcmlkaWVtKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbnN0IHN0YXJ0QXRQTSA9IHJlc3VsdC5zdGFydC5pc0NlcnRhaW4oXCJtZXJpZGllbVwiKSAmJiByZXN1bHQuc3RhcnQuZ2V0KFwiaG91clwiKSA+IDEyO1xuICAgICAgICAgICAgaWYgKHN0YXJ0QXRQTSkge1xuICAgICAgICAgICAgICAgIGlmIChyZXN1bHQuc3RhcnQuZ2V0KFwiaG91clwiKSAtIDEyID4gaG91cikge1xuICAgICAgICAgICAgICAgICAgICAvLyAxMHBtIC0gMSAoYW0pXG4gICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudHMuaW1wbHkoXCJtZXJpZGllbVwiLCBNZXJpZGllbS5BTSk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChob3VyIDw9IDEyKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudHMuYXNzaWduKFwiaG91clwiLCBob3VyICsgMTIpO1xuICAgICAgICAgICAgICAgICAgICBjb21wb25lbnRzLmFzc2lnbihcIm1lcmlkaWVtXCIsIE1lcmlkaWVtLlBNKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGhvdXIgPiAxMikge1xuICAgICAgICAgICAgICAgIGNvbXBvbmVudHMuaW1wbHkoXCJtZXJpZGllbVwiLCBNZXJpZGllbS5QTSk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGhvdXIgPD0gMTIpIHtcbiAgICAgICAgICAgICAgICBjb21wb25lbnRzLmltcGx5KFwibWVyaWRpZW1cIiwgTWVyaWRpZW0uQU0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGNvbXBvbmVudHMuZGF0ZSgpLmdldFRpbWUoKSA8IHJlc3VsdC5zdGFydC5kYXRlKCkuZ2V0VGltZSgpKSB7XG4gICAgICAgICAgICBjb21wb25lbnRzLmltcGx5KFwiZGF5XCIsIGNvbXBvbmVudHMuZ2V0KFwiZGF5XCIpICsgMSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gY29tcG9uZW50cztcbiAgICB9XG5cbiAgICBwcml2YXRlIGNoZWNrQW5kUmV0dXJuV2l0aG91dEZvbGxvd2luZ1BhdHRlcm4ocmVzdWx0KSB7XG4gICAgICAgIC8vIFNpbmdsZSBkaWdpdCAoZS5nIFwiMVwiKSBzaG91bGQgbm90IGJlIGNvdW50ZWQgYXMgdGltZSBleHByZXNzaW9uICh3aXRob3V0IHByb3BlciBjb250ZXh0KVxuICAgICAgICBpZiAocmVzdWx0LnRleHQubWF0Y2goL15cXGQkLykpIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gVGhyZWUgb3IgbW9yZSBkaWdpdCAoZS5nLiBcIjIwM1wiLCBcIjIwMTRcIikgc2hvdWxkIG5vdCBiZSBjb3VudGVkIGFzIHRpbWUgZXhwcmVzc2lvbiAod2l0aG91dCBwcm9wZXIgY29udGV4dClcbiAgICAgICAgaWYgKHJlc3VsdC50ZXh0Lm1hdGNoKC9eXFxkXFxkXFxkKyQvKSkge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBJbnN0ZWFkIG9mIFwiYW0vcG1cIiwgaXQgZW5kcyB3aXRoIFwiYVwiIG9yIFwicFwiIChlLmcgXCIxYVwiLCBcIjEyM3BcIiksIHRoaXMgc2VlbXMgdW5saWtlbHlcbiAgICAgICAgaWYgKHJlc3VsdC50ZXh0Lm1hdGNoKC9cXGRbYXBBUF0kLykpIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gSWYgaXQgZW5kcyBvbmx5IHdpdGggbnVtYmVycyBvciBkb3RzXG4gICAgICAgIGNvbnN0IGVuZGluZ1dpdGhOdW1iZXJzID0gcmVzdWx0LnRleHQubWF0Y2goL1teXFxkOi5dKFxcZFtcXGQuXSspJC8pO1xuICAgICAgICBpZiAoZW5kaW5nV2l0aE51bWJlcnMpIHtcbiAgICAgICAgICAgIGNvbnN0IGVuZGluZ051bWJlcnM6IHN0cmluZyA9IGVuZGluZ1dpdGhOdW1iZXJzWzFdO1xuXG4gICAgICAgICAgICAvLyBJbiBzdHJpY3QgbW9kZSAoZS5nLiBcImF0IDFcIiBvciBcImF0IDEuMlwiKSwgdGhpcyBzaG91bGQgbm90IGJlIGFjY2VwdGVkXG4gICAgICAgICAgICBpZiAodGhpcy5zdHJpY3RNb2RlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIElmIGl0IGVuZHMgb25seSB3aXRoIGRvdCBzaW5nbGUgZGlnaXQsIGUuZy4gXCJhdCAxLjJcIlxuICAgICAgICAgICAgaWYgKGVuZGluZ051bWJlcnMuaW5jbHVkZXMoXCIuXCIpICYmICFlbmRpbmdOdW1iZXJzLm1hdGNoKC9cXGQoXFwuXFxkezJ9KSskLykpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gSWYgaXQgZW5kcyBvbmx5IHdpdGggbnVtYmVycyBhYm92ZSAyNCwgZS5nLiBcImF0IDI1XCJcbiAgICAgICAgICAgIGNvbnN0IGVuZGluZ051bWJlclZhbCA9IHBhcnNlSW50KGVuZGluZ051bWJlcnMpO1xuICAgICAgICAgICAgaWYgKGVuZGluZ051bWJlclZhbCA+IDI0KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cblxuICAgIHByaXZhdGUgY2hlY2tBbmRSZXR1cm5XaXRoRm9sbG93aW5nUGF0dGVybihyZXN1bHQpIHtcbiAgICAgICAgaWYgKHJlc3VsdC50ZXh0Lm1hdGNoKC9eXFxkKy1cXGQrJC8pKSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIElmIGl0IGVuZHMgb25seSB3aXRoIG51bWJlcnMgb3IgZG90c1xuICAgICAgICBjb25zdCBlbmRpbmdXaXRoTnVtYmVycyA9IHJlc3VsdC50ZXh0Lm1hdGNoKC9bXlxcZDouXShcXGRbXFxkLl0rKVxccyotXFxzKihcXGRbXFxkLl0rKSQvKTtcbiAgICAgICAgaWYgKGVuZGluZ1dpdGhOdW1iZXJzKSB7XG4gICAgICAgICAgICAvLyBJbiBzdHJpY3QgbW9kZSAoZS5nLiBcImF0IDEtM1wiIG9yIFwiYXQgMS4yIC0gMi4zXCIpLCB0aGlzIHNob3VsZCBub3QgYmUgYWNjZXB0ZWRcbiAgICAgICAgICAgIGlmICh0aGlzLnN0cmljdE1vZGUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY29uc3Qgc3RhcnRpbmdOdW1iZXJzOiBzdHJpbmcgPSBlbmRpbmdXaXRoTnVtYmVyc1sxXTtcbiAgICAgICAgICAgIGNvbnN0IGVuZGluZ051bWJlcnM6IHN0cmluZyA9IGVuZGluZ1dpdGhOdW1iZXJzWzJdO1xuICAgICAgICAgICAgLy8gSWYgaXQgZW5kcyBvbmx5IHdpdGggZG90IHNpbmdsZSBkaWdpdCwgZS5nLiBcImF0IDEuMlwiXG4gICAgICAgICAgICBpZiAoZW5kaW5nTnVtYmVycy5pbmNsdWRlcyhcIi5cIikgJiYgIWVuZGluZ051bWJlcnMubWF0Y2goL1xcZChcXC5cXGR7Mn0pKyQvKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBJZiBpdCBlbmRzIG9ubHkgd2l0aCBudW1iZXJzIGFib3ZlIDI0LCBlLmcuIFwiYXQgMjVcIlxuICAgICAgICAgICAgY29uc3QgZW5kaW5nTnVtYmVyVmFsID0gcGFyc2VJbnQoZW5kaW5nTnVtYmVycyk7XG4gICAgICAgICAgICBjb25zdCBzdGFydGluZ051bWJlclZhbCA9IHBhcnNlSW50KHN0YXJ0aW5nTnVtYmVycyk7XG4gICAgICAgICAgICBpZiAoZW5kaW5nTnVtYmVyVmFsID4gMjQgfHwgc3RhcnRpbmdOdW1iZXJWYWwgPiAyNCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG5cbiAgICBwcml2YXRlIGNhY2hlZFByaW1hcnlQcmVmaXggPSBudWxsO1xuICAgIHByaXZhdGUgY2FjaGVkUHJpbWFyeVN1ZmZpeCA9IG51bGw7XG4gICAgcHJpdmF0ZSBjYWNoZWRQcmltYXJ5VGltZVBhdHRlcm4gPSBudWxsO1xuXG4gICAgZ2V0UHJpbWFyeVRpbWVQYXR0ZXJuVGhyb3VnaENhY2hlKCkge1xuICAgICAgICBjb25zdCBwcmltYXJ5UHJlZml4ID0gdGhpcy5wcmltYXJ5UHJlZml4KCk7XG4gICAgICAgIGNvbnN0IHByaW1hcnlTdWZmaXggPSB0aGlzLnByaW1hcnlTdWZmaXgoKTtcblxuICAgICAgICBpZiAodGhpcy5jYWNoZWRQcmltYXJ5UHJlZml4ID09PSBwcmltYXJ5UHJlZml4ICYmIHRoaXMuY2FjaGVkUHJpbWFyeVN1ZmZpeCA9PT0gcHJpbWFyeVN1ZmZpeCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuY2FjaGVkUHJpbWFyeVRpbWVQYXR0ZXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5jYWNoZWRQcmltYXJ5VGltZVBhdHRlcm4gPSBwcmltYXJ5VGltZVBhdHRlcm4oXG4gICAgICAgICAgICB0aGlzLnByaW1hcnlQYXR0ZXJuTGVmdEJvdW5kYXJ5KCksXG4gICAgICAgICAgICBwcmltYXJ5UHJlZml4LFxuICAgICAgICAgICAgcHJpbWFyeVN1ZmZpeCxcbiAgICAgICAgICAgIHRoaXMucGF0dGVybkZsYWdzKClcbiAgICAgICAgKTtcbiAgICAgICAgdGhpcy5jYWNoZWRQcmltYXJ5UHJlZml4ID0gcHJpbWFyeVByZWZpeDtcbiAgICAgICAgdGhpcy5jYWNoZWRQcmltYXJ5U3VmZml4ID0gcHJpbWFyeVN1ZmZpeDtcbiAgICAgICAgcmV0dXJuIHRoaXMuY2FjaGVkUHJpbWFyeVRpbWVQYXR0ZXJuO1xuICAgIH1cblxuICAgIHByaXZhdGUgY2FjaGVkRm9sbG93aW5nUGhhc2UgPSBudWxsO1xuICAgIHByaXZhdGUgY2FjaGVkRm9sbG93aW5nU3VmZml4ID0gbnVsbDtcbiAgICBwcml2YXRlIGNhY2hlZEZvbGxvd2luZ1RpbWVQYXR0ZW4gPSBudWxsO1xuXG4gICAgZ2V0Rm9sbG93aW5nVGltZVBhdHRlcm5UaHJvdWdoQ2FjaGUoKSB7XG4gICAgICAgIGNvbnN0IGZvbGxvd2luZ1BoYXNlID0gdGhpcy5mb2xsb3dpbmdQaGFzZSgpO1xuICAgICAgICBjb25zdCBmb2xsb3dpbmdTdWZmaXggPSB0aGlzLmZvbGxvd2luZ1N1ZmZpeCgpO1xuXG4gICAgICAgIGlmICh0aGlzLmNhY2hlZEZvbGxvd2luZ1BoYXNlID09PSBmb2xsb3dpbmdQaGFzZSAmJiB0aGlzLmNhY2hlZEZvbGxvd2luZ1N1ZmZpeCA9PT0gZm9sbG93aW5nU3VmZml4KSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5jYWNoZWRGb2xsb3dpbmdUaW1lUGF0dGVuO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5jYWNoZWRGb2xsb3dpbmdUaW1lUGF0dGVuID0gZm9sbG93aW5nVGltZVBhdHRlbihmb2xsb3dpbmdQaGFzZSwgZm9sbG93aW5nU3VmZml4KTtcbiAgICAgICAgdGhpcy5jYWNoZWRGb2xsb3dpbmdQaGFzZSA9IGZvbGxvd2luZ1BoYXNlO1xuICAgICAgICB0aGlzLmNhY2hlZEZvbGxvd2luZ1N1ZmZpeCA9IGZvbGxvd2luZ1N1ZmZpeDtcbiAgICAgICAgcmV0dXJuIHRoaXMuY2FjaGVkRm9sbG93aW5nVGltZVBhdHRlbjtcbiAgICB9XG59XG4iLCAiaW1wb3J0IHsgUGFyc2luZ0NvbnRleHQgfSBmcm9tIFwiLi4vLi4vLi4vY2hyb25vXCI7XG5pbXBvcnQgeyBQYXJzaW5nQ29tcG9uZW50cywgUGFyc2luZ1Jlc3VsdCB9IGZyb20gXCIuLi8uLi8uLi9yZXN1bHRzXCI7XG5pbXBvcnQgeyBNZXJpZGllbSB9IGZyb20gXCIuLi8uLi8uLi90eXBlc1wiO1xuaW1wb3J0IHsgQWJzdHJhY3RUaW1lRXhwcmVzc2lvblBhcnNlciB9IGZyb20gXCIuLi8uLi8uLi9jb21tb24vcGFyc2Vycy9BYnN0cmFjdFRpbWVFeHByZXNzaW9uUGFyc2VyXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEVOVGltZUV4cHJlc3Npb25QYXJzZXIgZXh0ZW5kcyBBYnN0cmFjdFRpbWVFeHByZXNzaW9uUGFyc2VyIHtcbiAgICBjb25zdHJ1Y3RvcihzdHJpY3RNb2RlKSB7XG4gICAgICAgIHN1cGVyKHN0cmljdE1vZGUpO1xuICAgIH1cblxuICAgIGZvbGxvd2luZ1BoYXNlKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiBcIlxcXFxzKig/OlxcXFwtfFxcXFxcdTIwMTN8XFxcXH58XFxcXFx1MzAxQ3x0b3x1bnRpbHx0aHJvdWdofHRpbGx8XFxcXD8pXFxcXHMqXCI7XG4gICAgfVxuXG4gICAgcHJpbWFyeVByZWZpeCgpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gXCIoPzooPzphdHxmcm9tKVxcXFxzKik/P1wiO1xuICAgIH1cblxuICAgIHByaW1hcnlTdWZmaXgoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIFwiKD86XFxcXHMqKD86b1xcXFxXKmNsb2NrfGF0XFxcXHMqbmlnaHR8aW5cXFxccyp0aGVcXFxccyooPzptb3JuaW5nfGFmdGVybm9vbikpKT8oPyEvKSg/PVxcXFxXfCQpXCI7XG4gICAgfVxuXG4gICAgZXh0cmFjdFByaW1hcnlUaW1lQ29tcG9uZW50cyhjb250ZXh0OiBQYXJzaW5nQ29udGV4dCwgbWF0Y2g6IFJlZ0V4cE1hdGNoQXJyYXkpOiBudWxsIHwgUGFyc2luZ0NvbXBvbmVudHMge1xuICAgICAgICBjb25zdCBjb21wb25lbnRzID0gc3VwZXIuZXh0cmFjdFByaW1hcnlUaW1lQ29tcG9uZW50cyhjb250ZXh0LCBtYXRjaCk7XG4gICAgICAgIGlmICghY29tcG9uZW50cykge1xuICAgICAgICAgICAgcmV0dXJuIGNvbXBvbmVudHM7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAobWF0Y2hbMF0uZW5kc1dpdGgoXCJuaWdodFwiKSkge1xuICAgICAgICAgICAgY29uc3QgaG91ciA9IGNvbXBvbmVudHMuZ2V0KFwiaG91clwiKTtcbiAgICAgICAgICAgIGlmIChob3VyID49IDYgJiYgaG91ciA8IDEyKSB7XG4gICAgICAgICAgICAgICAgY29tcG9uZW50cy5hc3NpZ24oXCJob3VyXCIsIGNvbXBvbmVudHMuZ2V0KFwiaG91clwiKSArIDEyKTtcbiAgICAgICAgICAgICAgICBjb21wb25lbnRzLmFzc2lnbihcIm1lcmlkaWVtXCIsIE1lcmlkaWVtLlBNKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoaG91ciA8IDYpIHtcbiAgICAgICAgICAgICAgICBjb21wb25lbnRzLmFzc2lnbihcIm1lcmlkaWVtXCIsIE1lcmlkaWVtLkFNKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChtYXRjaFswXS5lbmRzV2l0aChcImFmdGVybm9vblwiKSkge1xuICAgICAgICAgICAgY29tcG9uZW50cy5hc3NpZ24oXCJtZXJpZGllbVwiLCBNZXJpZGllbS5QTSk7XG4gICAgICAgICAgICBjb25zdCBob3VyID0gY29tcG9uZW50cy5nZXQoXCJob3VyXCIpO1xuICAgICAgICAgICAgaWYgKGhvdXIgPj0gMCAmJiBob3VyIDw9IDYpIHtcbiAgICAgICAgICAgICAgICBjb21wb25lbnRzLmFzc2lnbihcImhvdXJcIiwgY29tcG9uZW50cy5nZXQoXCJob3VyXCIpICsgMTIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKG1hdGNoWzBdLmVuZHNXaXRoKFwibW9ybmluZ1wiKSkge1xuICAgICAgICAgICAgY29tcG9uZW50cy5hc3NpZ24oXCJtZXJpZGllbVwiLCBNZXJpZGllbS5BTSk7XG4gICAgICAgICAgICBjb25zdCBob3VyID0gY29tcG9uZW50cy5nZXQoXCJob3VyXCIpO1xuICAgICAgICAgICAgaWYgKGhvdXIgPCAxMikge1xuICAgICAgICAgICAgICAgIGNvbXBvbmVudHMuYXNzaWduKFwiaG91clwiLCBjb21wb25lbnRzLmdldChcImhvdXJcIikpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGNvbXBvbmVudHMuYWRkVGFnKFwicGFyc2VyL0VOVGltZUV4cHJlc3Npb25QYXJzZXJcIik7XG4gICAgfVxuXG4gICAgZXh0cmFjdEZvbGxvd2luZ1RpbWVDb21wb25lbnRzKFxuICAgICAgICBjb250ZXh0OiBQYXJzaW5nQ29udGV4dCxcbiAgICAgICAgbWF0Y2g6IFJlZ0V4cE1hdGNoQXJyYXksXG4gICAgICAgIHJlc3VsdDogUGFyc2luZ1Jlc3VsdFxuICAgICk6IFBhcnNpbmdDb21wb25lbnRzIHwgbnVsbCB7XG4gICAgICAgIGNvbnN0IGZvbGxvd2luZ0NvbXBvbmVudHMgPSBzdXBlci5leHRyYWN0Rm9sbG93aW5nVGltZUNvbXBvbmVudHMoY29udGV4dCwgbWF0Y2gsIHJlc3VsdCk7XG4gICAgICAgIGlmIChmb2xsb3dpbmdDb21wb25lbnRzKSB7XG4gICAgICAgICAgICBmb2xsb3dpbmdDb21wb25lbnRzLmFkZFRhZyhcInBhcnNlci9FTlRpbWVFeHByZXNzaW9uUGFyc2VyXCIpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmb2xsb3dpbmdDb21wb25lbnRzO1xuICAgIH1cbn1cbiIsICJpbXBvcnQgeyBPcFVuaXRUeXBlLCBRVW5pdFR5cGUgfSBmcm9tIFwiZGF5anNcIjtcbmltcG9ydCB7IFBhcnNpbmdDb21wb25lbnRzIH0gZnJvbSBcIi4uL3Jlc3VsdHNcIjtcblxuZXhwb3J0IHR5cGUgVGltZVVuaXRzID0geyBbYyBpbiBPcFVuaXRUeXBlIHwgUVVuaXRUeXBlXT86IG51bWJlciB9O1xuXG5leHBvcnQgZnVuY3Rpb24gcmV2ZXJzZVRpbWVVbml0cyh0aW1lVW5pdHM6IFRpbWVVbml0cyk6IFRpbWVVbml0cyB7XG4gICAgY29uc3QgcmV2ZXJzZWQgPSB7fTtcbiAgICBmb3IgKGNvbnN0IGtleSBpbiB0aW1lVW5pdHMpIHtcbiAgICAgICAgLy8gbm9pbnNwZWN0aW9uIEpTVW5maWx0ZXJlZEZvckluTG9vcFxuICAgICAgICByZXZlcnNlZFtrZXldID0gLXRpbWVVbml0c1trZXldO1xuICAgIH1cblxuICAgIHJldHVybiByZXZlcnNlZCBhcyBUaW1lVW5pdHM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhZGRJbXBsaWVkVGltZVVuaXRzKGNvbXBvbmVudHM6IFBhcnNpbmdDb21wb25lbnRzLCB0aW1lVW5pdHM6IFRpbWVVbml0cyk6IFBhcnNpbmdDb21wb25lbnRzIHtcbiAgICBjb25zdCBvdXRwdXQgPSBjb21wb25lbnRzLmNsb25lKCk7XG5cbiAgICBsZXQgZGF0ZSA9IGNvbXBvbmVudHMuZGF5anMoKTtcbiAgICBmb3IgKGNvbnN0IGtleSBpbiB0aW1lVW5pdHMpIHtcbiAgICAgICAgLy8gbm9pbnNwZWN0aW9uIEpTVW5maWx0ZXJlZEZvckluTG9vcCxUeXBlU2NyaXB0VmFsaWRhdGVUeXBlc1xuICAgICAgICBkYXRlID0gZGF0ZS5hZGQodGltZVVuaXRzW2tleV0sIGtleSBhcyBRVW5pdFR5cGUpO1xuICAgIH1cblxuICAgIGlmIChcImRheVwiIGluIHRpbWVVbml0cyB8fCBcImRcIiBpbiB0aW1lVW5pdHMgfHwgXCJ3ZWVrXCIgaW4gdGltZVVuaXRzIHx8IFwibW9udGhcIiBpbiB0aW1lVW5pdHMgfHwgXCJ5ZWFyXCIgaW4gdGltZVVuaXRzKSB7XG4gICAgICAgIG91dHB1dC5pbXBseShcImRheVwiLCBkYXRlLmRhdGUoKSk7XG4gICAgICAgIG91dHB1dC5pbXBseShcIm1vbnRoXCIsIGRhdGUubW9udGgoKSArIDEpO1xuICAgICAgICBvdXRwdXQuaW1wbHkoXCJ5ZWFyXCIsIGRhdGUueWVhcigpKTtcbiAgICB9XG5cbiAgICBpZiAoXCJzZWNvbmRcIiBpbiB0aW1lVW5pdHMgfHwgXCJtaW51dGVcIiBpbiB0aW1lVW5pdHMgfHwgXCJob3VyXCIgaW4gdGltZVVuaXRzKSB7XG4gICAgICAgIG91dHB1dC5pbXBseShcInNlY29uZFwiLCBkYXRlLnNlY29uZCgpKTtcbiAgICAgICAgb3V0cHV0LmltcGx5KFwibWludXRlXCIsIGRhdGUubWludXRlKCkpO1xuICAgICAgICBvdXRwdXQuaW1wbHkoXCJob3VyXCIsIGRhdGUuaG91cigpKTtcbiAgICB9XG5cbiAgICByZXR1cm4gb3V0cHV0O1xufVxuIiwgImltcG9ydCB7IFBhcnNpbmdDb250ZXh0IH0gZnJvbSBcIi4uLy4uLy4uL2Nocm9ub1wiO1xuaW1wb3J0IHsgcGFyc2VUaW1lVW5pdHMsIFRJTUVfVU5JVFNfTk9fQUJCUl9QQVRURVJOLCBUSU1FX1VOSVRTX1BBVFRFUk4gfSBmcm9tIFwiLi4vY29uc3RhbnRzXCI7XG5pbXBvcnQgeyBQYXJzaW5nQ29tcG9uZW50cyB9IGZyb20gXCIuLi8uLi8uLi9yZXN1bHRzXCI7XG5pbXBvcnQgeyBBYnN0cmFjdFBhcnNlcldpdGhXb3JkQm91bmRhcnlDaGVja2luZyB9IGZyb20gXCIuLi8uLi8uLi9jb21tb24vcGFyc2Vycy9BYnN0cmFjdFBhcnNlcldpdGhXb3JkQm91bmRhcnlcIjtcbmltcG9ydCB7IHJldmVyc2VUaW1lVW5pdHMgfSBmcm9tIFwiLi4vLi4vLi4vdXRpbHMvdGltZXVuaXRzXCI7XG5cbmNvbnN0IFBBVFRFUk4gPSBuZXcgUmVnRXhwKGAoJHtUSU1FX1VOSVRTX1BBVFRFUk59KVxcXFxzezAsNX0oPzphZ298YmVmb3JlfGVhcmxpZXIpKD89XFxcXFd8JClgLCBcImlcIik7XG5jb25zdCBTVFJJQ1RfUEFUVEVSTiA9IG5ldyBSZWdFeHAoYCgke1RJTUVfVU5JVFNfTk9fQUJCUl9QQVRURVJOfSlcXFxcc3swLDV9KD86YWdvfGJlZm9yZXxlYXJsaWVyKSg/PVxcXFxXfCQpYCwgXCJpXCIpO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBFTlRpbWVVbml0QWdvRm9ybWF0UGFyc2VyIGV4dGVuZHMgQWJzdHJhY3RQYXJzZXJXaXRoV29yZEJvdW5kYXJ5Q2hlY2tpbmcge1xuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgc3RyaWN0TW9kZTogYm9vbGVhbikge1xuICAgICAgICBzdXBlcigpO1xuICAgIH1cblxuICAgIGlubmVyUGF0dGVybigpOiBSZWdFeHAge1xuICAgICAgICByZXR1cm4gdGhpcy5zdHJpY3RNb2RlID8gU1RSSUNUX1BBVFRFUk4gOiBQQVRURVJOO1xuICAgIH1cblxuICAgIGlubmVyRXh0cmFjdChjb250ZXh0OiBQYXJzaW5nQ29udGV4dCwgbWF0Y2g6IFJlZ0V4cE1hdGNoQXJyYXkpIHtcbiAgICAgICAgY29uc3QgdGltZVVuaXRzID0gcGFyc2VUaW1lVW5pdHMobWF0Y2hbMV0pO1xuICAgICAgICBpZiAoIXRpbWVVbml0cykge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3Qgb3V0cHV0VGltZVVuaXRzID0gcmV2ZXJzZVRpbWVVbml0cyh0aW1lVW5pdHMpO1xuICAgICAgICByZXR1cm4gUGFyc2luZ0NvbXBvbmVudHMuY3JlYXRlUmVsYXRpdmVGcm9tUmVmZXJlbmNlKGNvbnRleHQucmVmZXJlbmNlLCBvdXRwdXRUaW1lVW5pdHMpO1xuICAgIH1cbn1cbiIsICJpbXBvcnQgeyBQYXJzaW5nQ29udGV4dCB9IGZyb20gXCIuLi8uLi8uLi9jaHJvbm9cIjtcbmltcG9ydCB7IHBhcnNlVGltZVVuaXRzLCBUSU1FX1VOSVRTX05PX0FCQlJfUEFUVEVSTiwgVElNRV9VTklUU19QQVRURVJOIH0gZnJvbSBcIi4uL2NvbnN0YW50c1wiO1xuaW1wb3J0IHsgUGFyc2luZ0NvbXBvbmVudHMgfSBmcm9tIFwiLi4vLi4vLi4vcmVzdWx0c1wiO1xuaW1wb3J0IHsgQWJzdHJhY3RQYXJzZXJXaXRoV29yZEJvdW5kYXJ5Q2hlY2tpbmcgfSBmcm9tIFwiLi4vLi4vLi4vY29tbW9uL3BhcnNlcnMvQWJzdHJhY3RQYXJzZXJXaXRoV29yZEJvdW5kYXJ5XCI7XG5cbmNvbnN0IFBBVFRFUk4gPSBuZXcgUmVnRXhwKFxuICAgIGAoJHtUSU1FX1VOSVRTX1BBVFRFUk59KVxcXFxzezAsNX0oPzpsYXRlcnxhZnRlcnxmcm9tIG5vd3xoZW5jZWZvcnRofGZvcndhcmR8b3V0KWAgKyBcIig/PSg/OlxcXFxXfCQpKVwiLFxuICAgIFwiaVwiXG4pO1xuXG5jb25zdCBTVFJJQ1RfUEFUVEVSTiA9IG5ldyBSZWdFeHAoYCgke1RJTUVfVU5JVFNfTk9fQUJCUl9QQVRURVJOfSlcXFxcc3swLDV9KGxhdGVyfGFmdGVyfGZyb20gbm93KSg/PVxcXFxXfCQpYCwgXCJpXCIpO1xuY29uc3QgR1JPVVBfTlVNX1RJTUVVTklUUyA9IDE7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEVOVGltZVVuaXRMYXRlckZvcm1hdFBhcnNlciBleHRlbmRzIEFic3RyYWN0UGFyc2VyV2l0aFdvcmRCb3VuZGFyeUNoZWNraW5nIHtcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHN0cmljdE1vZGU6IGJvb2xlYW4pIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICB9XG5cbiAgICBpbm5lclBhdHRlcm4oKTogUmVnRXhwIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc3RyaWN0TW9kZSA/IFNUUklDVF9QQVRURVJOIDogUEFUVEVSTjtcbiAgICB9XG5cbiAgICBpbm5lckV4dHJhY3QoY29udGV4dDogUGFyc2luZ0NvbnRleHQsIG1hdGNoOiBSZWdFeHBNYXRjaEFycmF5KSB7XG4gICAgICAgIGNvbnN0IHRpbWVVbml0cyA9IHBhcnNlVGltZVVuaXRzKG1hdGNoW0dST1VQX05VTV9USU1FVU5JVFNdKTtcbiAgICAgICAgaWYgKCF0aW1lVW5pdHMpIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBQYXJzaW5nQ29tcG9uZW50cy5jcmVhdGVSZWxhdGl2ZUZyb21SZWZlcmVuY2UoY29udGV4dC5yZWZlcmVuY2UsIHRpbWVVbml0cyk7XG4gICAgfVxufVxuIiwgImltcG9ydCB7IFBhcnNpbmdDb250ZXh0LCBSZWZpbmVyIH0gZnJvbSBcIi4uL2Nocm9ub1wiO1xuaW1wb3J0IHsgUGFyc2luZ1Jlc3VsdCB9IGZyb20gXCIuLi9yZXN1bHRzXCI7XG5cbi8qKlxuICogQSBzcGVjaWFsIHR5cGUgb2Yge0BsaW5rIFJlZmluZXJ9IHRvIGZpbHRlciB0aGUgcmVzdWx0c1xuICovXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgRmlsdGVyIGltcGxlbWVudHMgUmVmaW5lciB7XG4gICAgYWJzdHJhY3QgaXNWYWxpZChjb250ZXh0OiBQYXJzaW5nQ29udGV4dCwgcmVzdWx0OiBQYXJzaW5nUmVzdWx0KTogYm9vbGVhbjtcblxuICAgIHJlZmluZShjb250ZXh0OiBQYXJzaW5nQ29udGV4dCwgcmVzdWx0czogUGFyc2luZ1Jlc3VsdFtdKTogUGFyc2luZ1Jlc3VsdFtdIHtcbiAgICAgICAgcmV0dXJuIHJlc3VsdHMuZmlsdGVyKChyKSA9PiB0aGlzLmlzVmFsaWQoY29udGV4dCwgcikpO1xuICAgIH1cbn1cblxuLyoqXG4gKiBBIHNwZWNpYWwgdHlwZSBvZiB7QGxpbmsgUmVmaW5lcn0gdG8gbWVyZ2UgY29uc2VjdXRpdmUgcmVzdWx0c1xuICovXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgTWVyZ2luZ1JlZmluZXIgaW1wbGVtZW50cyBSZWZpbmVyIHtcbiAgICBhYnN0cmFjdCBzaG91bGRNZXJnZVJlc3VsdHMoXG4gICAgICAgIHRleHRCZXR3ZWVuOiBzdHJpbmcsXG4gICAgICAgIGN1cnJlbnRSZXN1bHQ6IFBhcnNpbmdSZXN1bHQsXG4gICAgICAgIG5leHRSZXN1bHQ6IFBhcnNpbmdSZXN1bHQsXG4gICAgICAgIGNvbnRleHQ6IFBhcnNpbmdDb250ZXh0XG4gICAgKTogYm9vbGVhbjtcblxuICAgIGFic3RyYWN0IG1lcmdlUmVzdWx0cyhcbiAgICAgICAgdGV4dEJldHdlZW46IHN0cmluZyxcbiAgICAgICAgY3VycmVudFJlc3VsdDogUGFyc2luZ1Jlc3VsdCxcbiAgICAgICAgbmV4dFJlc3VsdDogUGFyc2luZ1Jlc3VsdCxcbiAgICAgICAgY29udGV4dDogUGFyc2luZ0NvbnRleHRcbiAgICApOiBQYXJzaW5nUmVzdWx0O1xuXG4gICAgcmVmaW5lKGNvbnRleHQ6IFBhcnNpbmdDb250ZXh0LCByZXN1bHRzOiBQYXJzaW5nUmVzdWx0W10pOiBQYXJzaW5nUmVzdWx0W10ge1xuICAgICAgICBpZiAocmVzdWx0cy5sZW5ndGggPCAyKSB7XG4gICAgICAgICAgICByZXR1cm4gcmVzdWx0cztcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IG1lcmdlZFJlc3VsdHM6IFBhcnNpbmdSZXN1bHRbXSA9IFtdO1xuICAgICAgICBsZXQgY3VyUmVzdWx0ID0gcmVzdWx0c1swXTtcbiAgICAgICAgbGV0IG5leHRSZXN1bHQgPSBudWxsO1xuXG4gICAgICAgIGZvciAobGV0IGkgPSAxOyBpIDwgcmVzdWx0cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgbmV4dFJlc3VsdCA9IHJlc3VsdHNbaV07XG5cbiAgICAgICAgICAgIGNvbnN0IHRleHRCZXR3ZWVuID0gY29udGV4dC50ZXh0LnN1YnN0cmluZyhjdXJSZXN1bHQuaW5kZXggKyBjdXJSZXN1bHQudGV4dC5sZW5ndGgsIG5leHRSZXN1bHQuaW5kZXgpO1xuICAgICAgICAgICAgaWYgKCF0aGlzLnNob3VsZE1lcmdlUmVzdWx0cyh0ZXh0QmV0d2VlbiwgY3VyUmVzdWx0LCBuZXh0UmVzdWx0LCBjb250ZXh0KSkge1xuICAgICAgICAgICAgICAgIG1lcmdlZFJlc3VsdHMucHVzaChjdXJSZXN1bHQpO1xuICAgICAgICAgICAgICAgIGN1clJlc3VsdCA9IG5leHRSZXN1bHQ7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGNvbnN0IGxlZnQgPSBjdXJSZXN1bHQ7XG4gICAgICAgICAgICAgICAgY29uc3QgcmlnaHQgPSBuZXh0UmVzdWx0O1xuICAgICAgICAgICAgICAgIGNvbnN0IG1lcmdlZFJlc3VsdCA9IHRoaXMubWVyZ2VSZXN1bHRzKHRleHRCZXR3ZWVuLCBsZWZ0LCByaWdodCwgY29udGV4dCk7XG4gICAgICAgICAgICAgICAgY29udGV4dC5kZWJ1ZygoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGAke3RoaXMuY29uc3RydWN0b3IubmFtZX0gbWVyZ2VkICR7bGVmdH0gYW5kICR7cmlnaHR9IGludG8gJHttZXJnZWRSZXN1bHR9YCk7XG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICBjdXJSZXN1bHQgPSBtZXJnZWRSZXN1bHQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoY3VyUmVzdWx0ICE9IG51bGwpIHtcbiAgICAgICAgICAgIG1lcmdlZFJlc3VsdHMucHVzaChjdXJSZXN1bHQpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIG1lcmdlZFJlc3VsdHM7XG4gICAgfVxufVxuIiwgIi8qXG4gIFxuKi9cblxuaW1wb3J0IHsgUGFyc2luZ1Jlc3VsdCB9IGZyb20gXCIuLi8uLi9yZXN1bHRzXCI7XG5pbXBvcnQgeyBNZXJnaW5nUmVmaW5lciB9IGZyb20gXCIuLi9hYnN0cmFjdFJlZmluZXJzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGFic3RyYWN0IGNsYXNzIEFic3RyYWN0TWVyZ2VEYXRlUmFuZ2VSZWZpbmVyIGV4dGVuZHMgTWVyZ2luZ1JlZmluZXIge1xuICAgIGFic3RyYWN0IHBhdHRlcm5CZXR3ZWVuKCk6IFJlZ0V4cDtcblxuICAgIHNob3VsZE1lcmdlUmVzdWx0cyh0ZXh0QmV0d2VlbiwgY3VycmVudFJlc3VsdCwgbmV4dFJlc3VsdCk6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gIWN1cnJlbnRSZXN1bHQuZW5kICYmICFuZXh0UmVzdWx0LmVuZCAmJiB0ZXh0QmV0d2Vlbi5tYXRjaCh0aGlzLnBhdHRlcm5CZXR3ZWVuKCkpICE9IG51bGw7XG4gICAgfVxuXG4gICAgbWVyZ2VSZXN1bHRzKHRleHRCZXR3ZWVuLCBmcm9tUmVzdWx0LCB0b1Jlc3VsdCk6IFBhcnNpbmdSZXN1bHQge1xuICAgICAgICBpZiAoIWZyb21SZXN1bHQuc3RhcnQuaXNPbmx5V2Vla2RheUNvbXBvbmVudCgpICYmICF0b1Jlc3VsdC5zdGFydC5pc09ubHlXZWVrZGF5Q29tcG9uZW50KCkpIHtcbiAgICAgICAgICAgIHRvUmVzdWx0LnN0YXJ0LmdldENlcnRhaW5Db21wb25lbnRzKCkuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKCFmcm9tUmVzdWx0LnN0YXJ0LmlzQ2VydGFpbihrZXkpKSB7XG4gICAgICAgICAgICAgICAgICAgIGZyb21SZXN1bHQuc3RhcnQuaW1wbHkoa2V5LCB0b1Jlc3VsdC5zdGFydC5nZXQoa2V5KSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIGZyb21SZXN1bHQuc3RhcnQuZ2V0Q2VydGFpbkNvbXBvbmVudHMoKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoIXRvUmVzdWx0LnN0YXJ0LmlzQ2VydGFpbihrZXkpKSB7XG4gICAgICAgICAgICAgICAgICAgIHRvUmVzdWx0LnN0YXJ0LmltcGx5KGtleSwgZnJvbVJlc3VsdC5zdGFydC5nZXQoa2V5KSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZnJvbVJlc3VsdC5zdGFydC5kYXRlKCkuZ2V0VGltZSgpID4gdG9SZXN1bHQuc3RhcnQuZGF0ZSgpLmdldFRpbWUoKSkge1xuICAgICAgICAgICAgbGV0IGZyb21Nb21lbnQgPSBmcm9tUmVzdWx0LnN0YXJ0LmRheWpzKCk7XG4gICAgICAgICAgICBsZXQgdG9Nb21lbnQgPSB0b1Jlc3VsdC5zdGFydC5kYXlqcygpO1xuICAgICAgICAgICAgaWYgKHRvUmVzdWx0LnN0YXJ0LmlzT25seVdlZWtkYXlDb21wb25lbnQoKSAmJiB0b01vbWVudC5hZGQoNywgXCJkYXlzXCIpLmlzQWZ0ZXIoZnJvbU1vbWVudCkpIHtcbiAgICAgICAgICAgICAgICB0b01vbWVudCA9IHRvTW9tZW50LmFkZCg3LCBcImRheXNcIik7XG4gICAgICAgICAgICAgICAgdG9SZXN1bHQuc3RhcnQuaW1wbHkoXCJkYXlcIiwgdG9Nb21lbnQuZGF0ZSgpKTtcbiAgICAgICAgICAgICAgICB0b1Jlc3VsdC5zdGFydC5pbXBseShcIm1vbnRoXCIsIHRvTW9tZW50Lm1vbnRoKCkgKyAxKTtcbiAgICAgICAgICAgICAgICB0b1Jlc3VsdC5zdGFydC5pbXBseShcInllYXJcIiwgdG9Nb21lbnQueWVhcigpKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoZnJvbVJlc3VsdC5zdGFydC5pc09ubHlXZWVrZGF5Q29tcG9uZW50KCkgJiYgZnJvbU1vbWVudC5hZGQoLTcsIFwiZGF5c1wiKS5pc0JlZm9yZSh0b01vbWVudCkpIHtcbiAgICAgICAgICAgICAgICBmcm9tTW9tZW50ID0gZnJvbU1vbWVudC5hZGQoLTcsIFwiZGF5c1wiKTtcbiAgICAgICAgICAgICAgICBmcm9tUmVzdWx0LnN0YXJ0LmltcGx5KFwiZGF5XCIsIGZyb21Nb21lbnQuZGF0ZSgpKTtcbiAgICAgICAgICAgICAgICBmcm9tUmVzdWx0LnN0YXJ0LmltcGx5KFwibW9udGhcIiwgZnJvbU1vbWVudC5tb250aCgpICsgMSk7XG4gICAgICAgICAgICAgICAgZnJvbVJlc3VsdC5zdGFydC5pbXBseShcInllYXJcIiwgZnJvbU1vbWVudC55ZWFyKCkpO1xuICAgICAgICAgICAgfSBlbHNlIGlmICh0b1Jlc3VsdC5zdGFydC5pc0RhdGVXaXRoVW5rbm93blllYXIoKSAmJiB0b01vbWVudC5hZGQoMSwgXCJ5ZWFyc1wiKS5pc0FmdGVyKGZyb21Nb21lbnQpKSB7XG4gICAgICAgICAgICAgICAgdG9Nb21lbnQgPSB0b01vbWVudC5hZGQoMSwgXCJ5ZWFyc1wiKTtcbiAgICAgICAgICAgICAgICB0b1Jlc3VsdC5zdGFydC5pbXBseShcInllYXJcIiwgdG9Nb21lbnQueWVhcigpKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoZnJvbVJlc3VsdC5zdGFydC5pc0RhdGVXaXRoVW5rbm93blllYXIoKSAmJiBmcm9tTW9tZW50LmFkZCgtMSwgXCJ5ZWFyc1wiKS5pc0JlZm9yZSh0b01vbWVudCkpIHtcbiAgICAgICAgICAgICAgICBmcm9tTW9tZW50ID0gZnJvbU1vbWVudC5hZGQoLTEsIFwieWVhcnNcIik7XG4gICAgICAgICAgICAgICAgZnJvbVJlc3VsdC5zdGFydC5pbXBseShcInllYXJcIiwgZnJvbU1vbWVudC55ZWFyKCkpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBbdG9SZXN1bHQsIGZyb21SZXN1bHRdID0gW2Zyb21SZXN1bHQsIHRvUmVzdWx0XTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IGZyb21SZXN1bHQuY2xvbmUoKTtcbiAgICAgICAgcmVzdWx0LnN0YXJ0ID0gZnJvbVJlc3VsdC5zdGFydDtcbiAgICAgICAgcmVzdWx0LmVuZCA9IHRvUmVzdWx0LnN0YXJ0O1xuICAgICAgICByZXN1bHQuaW5kZXggPSBNYXRoLm1pbihmcm9tUmVzdWx0LmluZGV4LCB0b1Jlc3VsdC5pbmRleCk7XG4gICAgICAgIGlmIChmcm9tUmVzdWx0LmluZGV4IDwgdG9SZXN1bHQuaW5kZXgpIHtcbiAgICAgICAgICAgIHJlc3VsdC50ZXh0ID0gZnJvbVJlc3VsdC50ZXh0ICsgdGV4dEJldHdlZW4gKyB0b1Jlc3VsdC50ZXh0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmVzdWx0LnRleHQgPSB0b1Jlc3VsdC50ZXh0ICsgdGV4dEJldHdlZW4gKyBmcm9tUmVzdWx0LnRleHQ7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbn1cbiIsICIvKlxuICBcbiovXG5cbmltcG9ydCBBYnN0cmFjdE1lcmdlRGF0ZVJhbmdlUmVmaW5lciBmcm9tIFwiLi4vLi4vLi4vY29tbW9uL3JlZmluZXJzL0Fic3RyYWN0TWVyZ2VEYXRlUmFuZ2VSZWZpbmVyXCI7XG5cbi8qKlxuICogTWVyZ2luZyBiZWZvcmUgYW5kIGFmdGVyIHJlc3VsdHMgKHNlZS4gQWJzdHJhY3RNZXJnZURhdGVSYW5nZVJlZmluZXIpXG4gKiBUaGlzIGltcGxlbWVudGF0aW9uIHNob3VsZCBwcm92aWRlIEVuZ2xpc2ggY29ubmVjdGluZyBwaGFzZXNcbiAqIC0gMjAyMC0wMi0xMyBbdG9dIDIwMjAtMDItMTNcbiAqIC0gV2VkbmVzZGF5IFstXSBGcmlkYXlcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRU5NZXJnZURhdGVSYW5nZVJlZmluZXIgZXh0ZW5kcyBBYnN0cmFjdE1lcmdlRGF0ZVJhbmdlUmVmaW5lciB7XG4gICAgcGF0dGVybkJldHdlZW4oKTogUmVnRXhwIHtcbiAgICAgICAgcmV0dXJuIC9eXFxzKih0b3wtfFx1MjAxM3x1bnRpbHx0aHJvdWdofHRpbGwpXFxzKiQvaTtcbiAgICB9XG59XG4iLCAiaW1wb3J0IHsgUGFyc2luZ0NvbXBvbmVudHMsIFBhcnNpbmdSZXN1bHQgfSBmcm9tIFwiLi4vcmVzdWx0c1wiO1xuaW1wb3J0IHsgTWVyaWRpZW0gfSBmcm9tIFwiLi4vdHlwZXNcIjtcbmltcG9ydCB7IGFzc2lnblNpbWlsYXJEYXRlLCBpbXBseVNpbWlsYXJEYXRlIH0gZnJvbSBcIi4uL3V0aWxzL2RheWpzXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBtZXJnZURhdGVUaW1lUmVzdWx0KGRhdGVSZXN1bHQ6IFBhcnNpbmdSZXN1bHQsIHRpbWVSZXN1bHQ6IFBhcnNpbmdSZXN1bHQpOiBQYXJzaW5nUmVzdWx0IHtcbiAgICBjb25zdCByZXN1bHQgPSBkYXRlUmVzdWx0LmNsb25lKCk7XG4gICAgY29uc3QgYmVnaW5EYXRlID0gZGF0ZVJlc3VsdC5zdGFydDtcbiAgICBjb25zdCBiZWdpblRpbWUgPSB0aW1lUmVzdWx0LnN0YXJ0O1xuXG4gICAgcmVzdWx0LnN0YXJ0ID0gbWVyZ2VEYXRlVGltZUNvbXBvbmVudChiZWdpbkRhdGUsIGJlZ2luVGltZSk7XG4gICAgaWYgKGRhdGVSZXN1bHQuZW5kICE9IG51bGwgfHwgdGltZVJlc3VsdC5lbmQgIT0gbnVsbCkge1xuICAgICAgICBjb25zdCBlbmREYXRlID0gZGF0ZVJlc3VsdC5lbmQgPT0gbnVsbCA/IGRhdGVSZXN1bHQuc3RhcnQgOiBkYXRlUmVzdWx0LmVuZDtcbiAgICAgICAgY29uc3QgZW5kVGltZSA9IHRpbWVSZXN1bHQuZW5kID09IG51bGwgPyB0aW1lUmVzdWx0LnN0YXJ0IDogdGltZVJlc3VsdC5lbmQ7XG4gICAgICAgIGNvbnN0IGVuZERhdGVUaW1lID0gbWVyZ2VEYXRlVGltZUNvbXBvbmVudChlbmREYXRlLCBlbmRUaW1lKTtcblxuICAgICAgICBpZiAoZGF0ZVJlc3VsdC5lbmQgPT0gbnVsbCAmJiBlbmREYXRlVGltZS5kYXRlKCkuZ2V0VGltZSgpIDwgcmVzdWx0LnN0YXJ0LmRhdGUoKS5nZXRUaW1lKCkpIHtcbiAgICAgICAgICAgIC8vIEZvciBleGFtcGxlLCAgXCJUdWVzZGF5IDlwbSAtIDFhbVwiIHRoZSBlbmRpbmcgc2hvdWxkIGFjdHVhbGx5IGJlIDFhbSBvbiB0aGUgbmV4dCBkYXkuXG4gICAgICAgICAgICAvLyBXZSBuZWVkIHRvIGFkZCB0byBlbmRpbmcgYnkgYW5vdGhlciBkYXkuXG4gICAgICAgICAgICBjb25zdCBuZXh0RGF5SnMgPSBlbmREYXRlVGltZS5kYXlqcygpLmFkZCgxLCBcImRheVwiKTtcbiAgICAgICAgICAgIGlmIChlbmREYXRlVGltZS5pc0NlcnRhaW4oXCJkYXlcIikpIHtcbiAgICAgICAgICAgICAgICBhc3NpZ25TaW1pbGFyRGF0ZShlbmREYXRlVGltZSwgbmV4dERheUpzKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgaW1wbHlTaW1pbGFyRGF0ZShlbmREYXRlVGltZSwgbmV4dERheUpzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJlc3VsdC5lbmQgPSBlbmREYXRlVGltZTtcbiAgICB9XG5cbiAgICByZXR1cm4gcmVzdWx0O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbWVyZ2VEYXRlVGltZUNvbXBvbmVudChcbiAgICBkYXRlQ29tcG9uZW50OiBQYXJzaW5nQ29tcG9uZW50cyxcbiAgICB0aW1lQ29tcG9uZW50OiBQYXJzaW5nQ29tcG9uZW50c1xuKTogUGFyc2luZ0NvbXBvbmVudHMge1xuICAgIGNvbnN0IGRhdGVUaW1lQ29tcG9uZW50ID0gZGF0ZUNvbXBvbmVudC5jbG9uZSgpO1xuXG4gICAgaWYgKHRpbWVDb21wb25lbnQuaXNDZXJ0YWluKFwiaG91clwiKSkge1xuICAgICAgICBkYXRlVGltZUNvbXBvbmVudC5hc3NpZ24oXCJob3VyXCIsIHRpbWVDb21wb25lbnQuZ2V0KFwiaG91clwiKSk7XG4gICAgICAgIGRhdGVUaW1lQ29tcG9uZW50LmFzc2lnbihcIm1pbnV0ZVwiLCB0aW1lQ29tcG9uZW50LmdldChcIm1pbnV0ZVwiKSk7XG5cbiAgICAgICAgaWYgKHRpbWVDb21wb25lbnQuaXNDZXJ0YWluKFwic2Vjb25kXCIpKSB7XG4gICAgICAgICAgICBkYXRlVGltZUNvbXBvbmVudC5hc3NpZ24oXCJzZWNvbmRcIiwgdGltZUNvbXBvbmVudC5nZXQoXCJzZWNvbmRcIikpO1xuXG4gICAgICAgICAgICBpZiAodGltZUNvbXBvbmVudC5pc0NlcnRhaW4oXCJtaWxsaXNlY29uZFwiKSkge1xuICAgICAgICAgICAgICAgIGRhdGVUaW1lQ29tcG9uZW50LmFzc2lnbihcIm1pbGxpc2Vjb25kXCIsIHRpbWVDb21wb25lbnQuZ2V0KFwibWlsbGlzZWNvbmRcIikpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBkYXRlVGltZUNvbXBvbmVudC5pbXBseShcIm1pbGxpc2Vjb25kXCIsIHRpbWVDb21wb25lbnQuZ2V0KFwibWlsbGlzZWNvbmRcIikpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZGF0ZVRpbWVDb21wb25lbnQuaW1wbHkoXCJzZWNvbmRcIiwgdGltZUNvbXBvbmVudC5nZXQoXCJzZWNvbmRcIikpO1xuICAgICAgICAgICAgZGF0ZVRpbWVDb21wb25lbnQuaW1wbHkoXCJtaWxsaXNlY29uZFwiLCB0aW1lQ29tcG9uZW50LmdldChcIm1pbGxpc2Vjb25kXCIpKTtcbiAgICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICAgIGRhdGVUaW1lQ29tcG9uZW50LmltcGx5KFwiaG91clwiLCB0aW1lQ29tcG9uZW50LmdldChcImhvdXJcIikpO1xuICAgICAgICBkYXRlVGltZUNvbXBvbmVudC5pbXBseShcIm1pbnV0ZVwiLCB0aW1lQ29tcG9uZW50LmdldChcIm1pbnV0ZVwiKSk7XG4gICAgICAgIGRhdGVUaW1lQ29tcG9uZW50LmltcGx5KFwic2Vjb25kXCIsIHRpbWVDb21wb25lbnQuZ2V0KFwic2Vjb25kXCIpKTtcbiAgICAgICAgZGF0ZVRpbWVDb21wb25lbnQuaW1wbHkoXCJtaWxsaXNlY29uZFwiLCB0aW1lQ29tcG9uZW50LmdldChcIm1pbGxpc2Vjb25kXCIpKTtcbiAgICB9XG5cbiAgICBpZiAodGltZUNvbXBvbmVudC5pc0NlcnRhaW4oXCJ0aW1lem9uZU9mZnNldFwiKSkge1xuICAgICAgICBkYXRlVGltZUNvbXBvbmVudC5hc3NpZ24oXCJ0aW1lem9uZU9mZnNldFwiLCB0aW1lQ29tcG9uZW50LmdldChcInRpbWV6b25lT2Zmc2V0XCIpKTtcbiAgICB9XG5cbiAgICBpZiAodGltZUNvbXBvbmVudC5pc0NlcnRhaW4oXCJtZXJpZGllbVwiKSkge1xuICAgICAgICBkYXRlVGltZUNvbXBvbmVudC5hc3NpZ24oXCJtZXJpZGllbVwiLCB0aW1lQ29tcG9uZW50LmdldChcIm1lcmlkaWVtXCIpKTtcbiAgICB9IGVsc2UgaWYgKHRpbWVDb21wb25lbnQuZ2V0KFwibWVyaWRpZW1cIikgIT0gbnVsbCAmJiBkYXRlVGltZUNvbXBvbmVudC5nZXQoXCJtZXJpZGllbVwiKSA9PSBudWxsKSB7XG4gICAgICAgIGRhdGVUaW1lQ29tcG9uZW50LmltcGx5KFwibWVyaWRpZW1cIiwgdGltZUNvbXBvbmVudC5nZXQoXCJtZXJpZGllbVwiKSk7XG4gICAgfVxuXG4gICAgaWYgKGRhdGVUaW1lQ29tcG9uZW50LmdldChcIm1lcmlkaWVtXCIpID09IE1lcmlkaWVtLlBNICYmIGRhdGVUaW1lQ29tcG9uZW50LmdldChcImhvdXJcIikgPCAxMikge1xuICAgICAgICBpZiAodGltZUNvbXBvbmVudC5pc0NlcnRhaW4oXCJob3VyXCIpKSB7XG4gICAgICAgICAgICBkYXRlVGltZUNvbXBvbmVudC5hc3NpZ24oXCJob3VyXCIsIGRhdGVUaW1lQ29tcG9uZW50LmdldChcImhvdXJcIikgKyAxMik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBkYXRlVGltZUNvbXBvbmVudC5pbXBseShcImhvdXJcIiwgZGF0ZVRpbWVDb21wb25lbnQuZ2V0KFwiaG91clwiKSArIDEyKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGRhdGVUaW1lQ29tcG9uZW50LmFkZFRhZ3MoZGF0ZUNvbXBvbmVudC50YWdzKCkpO1xuICAgIGRhdGVUaW1lQ29tcG9uZW50LmFkZFRhZ3ModGltZUNvbXBvbmVudC50YWdzKCkpO1xuICAgIHJldHVybiBkYXRlVGltZUNvbXBvbmVudDtcbn1cbiIsICIvKlxuXG4qL1xuXG5pbXBvcnQgeyBNZXJnaW5nUmVmaW5lciB9IGZyb20gXCIuLi9hYnN0cmFjdFJlZmluZXJzXCI7XG5pbXBvcnQgeyBQYXJzaW5nUmVzdWx0IH0gZnJvbSBcIi4uLy4uL3Jlc3VsdHNcIjtcbmltcG9ydCB7IG1lcmdlRGF0ZVRpbWVSZXN1bHQgfSBmcm9tIFwiLi4vLi4vY2FsY3VsYXRpb24vbWVyZ2luZ0NhbGN1bGF0aW9uXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGFic3RyYWN0IGNsYXNzIEFic3RyYWN0TWVyZ2VEYXRlVGltZVJlZmluZXIgZXh0ZW5kcyBNZXJnaW5nUmVmaW5lciB7XG4gICAgYWJzdHJhY3QgcGF0dGVybkJldHdlZW4oKTogUmVnRXhwO1xuXG4gICAgc2hvdWxkTWVyZ2VSZXN1bHRzKHRleHRCZXR3ZWVuOiBzdHJpbmcsIGN1cnJlbnRSZXN1bHQ6IFBhcnNpbmdSZXN1bHQsIG5leHRSZXN1bHQ6IFBhcnNpbmdSZXN1bHQpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICgoY3VycmVudFJlc3VsdC5zdGFydC5pc09ubHlEYXRlKCkgJiYgbmV4dFJlc3VsdC5zdGFydC5pc09ubHlUaW1lKCkpIHx8XG4gICAgICAgICAgICAgICAgKG5leHRSZXN1bHQuc3RhcnQuaXNPbmx5RGF0ZSgpICYmIGN1cnJlbnRSZXN1bHQuc3RhcnQuaXNPbmx5VGltZSgpKSkgJiZcbiAgICAgICAgICAgIHRleHRCZXR3ZWVuLm1hdGNoKHRoaXMucGF0dGVybkJldHdlZW4oKSkgIT0gbnVsbFxuICAgICAgICApO1xuICAgIH1cblxuICAgIG1lcmdlUmVzdWx0cyh0ZXh0QmV0d2Vlbjogc3RyaW5nLCBjdXJyZW50UmVzdWx0OiBQYXJzaW5nUmVzdWx0LCBuZXh0UmVzdWx0OiBQYXJzaW5nUmVzdWx0KTogUGFyc2luZ1Jlc3VsdCB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IGN1cnJlbnRSZXN1bHQuc3RhcnQuaXNPbmx5RGF0ZSgpXG4gICAgICAgICAgICA/IG1lcmdlRGF0ZVRpbWVSZXN1bHQoY3VycmVudFJlc3VsdCwgbmV4dFJlc3VsdClcbiAgICAgICAgICAgIDogbWVyZ2VEYXRlVGltZVJlc3VsdChuZXh0UmVzdWx0LCBjdXJyZW50UmVzdWx0KTtcblxuICAgICAgICByZXN1bHQuaW5kZXggPSBjdXJyZW50UmVzdWx0LmluZGV4O1xuICAgICAgICByZXN1bHQudGV4dCA9IGN1cnJlbnRSZXN1bHQudGV4dCArIHRleHRCZXR3ZWVuICsgbmV4dFJlc3VsdC50ZXh0O1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbn1cbiIsICJpbXBvcnQgQWJzdHJhY3RNZXJnZURhdGVUaW1lUmVmaW5lciBmcm9tIFwiLi4vLi4vLi4vY29tbW9uL3JlZmluZXJzL0Fic3RyYWN0TWVyZ2VEYXRlVGltZVJlZmluZXJcIjtcblxuLyoqXG4gKiBNZXJnaW5nIGRhdGUtb25seSByZXN1bHQgYW5kIHRpbWUtb25seSByZXN1bHQgKHNlZS4gQWJzdHJhY3RNZXJnZURhdGVUaW1lUmVmaW5lcikuXG4gKiBUaGlzIGltcGxlbWVudGF0aW9uIHNob3VsZCBwcm92aWRlIEVuZ2xpc2ggY29ubmVjdGluZyBwaGFzZXNcbiAqIC0gMjAyMC0wMi0xMyBbYXRdIDZwbVxuICogLSBUb21vcnJvdyBbYWZ0ZXJdIDdhbVxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBFTk1lcmdlRGF0ZVRpbWVSZWZpbmVyIGV4dGVuZHMgQWJzdHJhY3RNZXJnZURhdGVUaW1lUmVmaW5lciB7XG4gICAgcGF0dGVybkJldHdlZW4oKTogUmVnRXhwIHtcbiAgICAgICAgcmV0dXJuIG5ldyBSZWdFeHAoXCJeXFxcXHMqKFR8YXR8YWZ0ZXJ8YmVmb3JlfG9ufG9mfCx8LXxcXFxcLnxcdTIyMTl8Oik/XFxcXHMqJFwiKTtcbiAgICB9XG59XG4iLCAiLy8gTWFwIEFCQlIgLT4gT2Zmc2V0IGluIG1pbnV0ZVxuaW1wb3J0IHsgUGFyc2luZ0NvbnRleHQsIFJlZmluZXIgfSBmcm9tIFwiLi4vLi4vY2hyb25vXCI7XG5pbXBvcnQgeyBUaW1lem9uZUFiYnJNYXAgfSBmcm9tIFwiLi4vLi4vdHlwZXNcIjtcbmltcG9ydCB7IFBhcnNpbmdSZXN1bHQgfSBmcm9tIFwiLi4vLi4vcmVzdWx0c1wiO1xuaW1wb3J0IHsgdG9UaW1lem9uZU9mZnNldCB9IGZyb20gXCIuLi8uLi90aW1lem9uZVwiO1xuXG5jb25zdCBUSU1FWk9ORV9OQU1FX1BBVFRFUk4gPSBuZXcgUmVnRXhwKFwiXlxcXFxzKiw/XFxcXHMqXFxcXCg/KFtBLVpdezIsNH0pXFxcXCk/KD89XFxcXFd8JClcIiwgXCJpXCIpO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBFeHRyYWN0VGltZXpvbmVBYmJyUmVmaW5lciBpbXBsZW1lbnRzIFJlZmluZXIge1xuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgcmVhZG9ubHkgdGltZXpvbmVPdmVycmlkZXM/OiBUaW1lem9uZUFiYnJNYXApIHt9XG5cbiAgICByZWZpbmUoY29udGV4dDogUGFyc2luZ0NvbnRleHQsIHJlc3VsdHM6IFBhcnNpbmdSZXN1bHRbXSk6IFBhcnNpbmdSZXN1bHRbXSB7XG4gICAgICAgIGNvbnN0IHRpbWV6b25lT3ZlcnJpZGVzID0gY29udGV4dC5vcHRpb24udGltZXpvbmVzID8/IHt9O1xuXG4gICAgICAgIHJlc3VsdHMuZm9yRWFjaCgocmVzdWx0KSA9PiB7XG4gICAgICAgICAgICBjb25zdCBzdWZmaXggPSBjb250ZXh0LnRleHQuc3Vic3RyaW5nKHJlc3VsdC5pbmRleCArIHJlc3VsdC50ZXh0Lmxlbmd0aCk7XG4gICAgICAgICAgICBjb25zdCBtYXRjaCA9IFRJTUVaT05FX05BTUVfUEFUVEVSTi5leGVjKHN1ZmZpeCk7XG4gICAgICAgICAgICBpZiAoIW1hdGNoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjb25zdCB0aW1lem9uZUFiYnIgPSBtYXRjaFsxXS50b1VwcGVyQ2FzZSgpO1xuICAgICAgICAgICAgY29uc3QgcmVmRGF0ZSA9IHJlc3VsdC5zdGFydC5kYXRlKCkgPz8gcmVzdWx0LnJlZkRhdGUgPz8gbmV3IERhdGUoKTtcbiAgICAgICAgICAgIGNvbnN0IHR6T3ZlcnJpZGVzID0geyAuLi50aGlzLnRpbWV6b25lT3ZlcnJpZGVzLCAuLi50aW1lem9uZU92ZXJyaWRlcyB9O1xuICAgICAgICAgICAgY29uc3QgZXh0cmFjdGVkVGltZXpvbmVPZmZzZXQgPSB0b1RpbWV6b25lT2Zmc2V0KHRpbWV6b25lQWJiciwgcmVmRGF0ZSwgdHpPdmVycmlkZXMpO1xuICAgICAgICAgICAgaWYgKGV4dHJhY3RlZFRpbWV6b25lT2Zmc2V0ID09IG51bGwpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb250ZXh0LmRlYnVnKCgpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcbiAgICAgICAgICAgICAgICAgICAgYEV4dHJhY3RpbmcgdGltZXpvbmU6ICcke3RpbWV6b25lQWJicn0nIGludG86ICR7ZXh0cmFjdGVkVGltZXpvbmVPZmZzZXR9IGZvcjogJHtyZXN1bHQuc3RhcnR9YFxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgY29uc3QgY3VycmVudFRpbWV6b25lT2Zmc2V0ID0gcmVzdWx0LnN0YXJ0LmdldChcInRpbWV6b25lT2Zmc2V0XCIpO1xuICAgICAgICAgICAgaWYgKGN1cnJlbnRUaW1lem9uZU9mZnNldCAhPT0gbnVsbCAmJiBleHRyYWN0ZWRUaW1lem9uZU9mZnNldCAhPSBjdXJyZW50VGltZXpvbmVPZmZzZXQpIHtcbiAgICAgICAgICAgICAgICAvLyBXZSBtYXkgYWxyZWFkeSBoYXZlIGV4dHJhY3RlZCB0aGUgdGltZXpvbmUgb2Zmc2V0IGUuZy4gXCIxMSBhbSBHTVQrMDkwMCAoSlNUKVwiXG4gICAgICAgICAgICAgICAgLy8gLSBpZiB0aGV5IGFyZSBlcXVhbCwgd2UgYWxzbyB3YW50IHRvIHRha2UgdGhlIGFiYnJldmlhdGlvbiB0ZXh0IGludG8gcmVzdWx0XG4gICAgICAgICAgICAgICAgLy8gLSBpZiB0aGV5IGFyZSBub3QgZXF1YWwsIHdlIHRydXN0IHRoZSBvZmZzZXQgbW9yZVxuICAgICAgICAgICAgICAgIGlmIChyZXN1bHQuc3RhcnQuaXNDZXJ0YWluKFwidGltZXpvbmVPZmZzZXRcIikpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC8vIFRoaXMgaXMgb2Z0ZW4gYmVjYXVzZSBpdCdzIHJlbGF0aXZlIHRpbWUgd2l0aCBpbmZlcnJlZCB0aW1lem9uZSAoZS5nLiBpbiAxIGhvdXIsIHRvbW9ycm93KVxuICAgICAgICAgICAgICAgIC8vIFRoZW4sIHdlIHdhbnQgdG8gZG91YmxlLWNoZWNrIHRoZSBhYmJyIGNhc2UgKGUuZy4gXCJHRVRcIiBub3QgXCJnZXRcIilcbiAgICAgICAgICAgICAgICBpZiAodGltZXpvbmVBYmJyICE9IG1hdGNoWzFdKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChyZXN1bHQuc3RhcnQuaXNPbmx5RGF0ZSgpKSB7XG4gICAgICAgICAgICAgICAgLy8gSWYgdGhlIHRpbWUgaXMgbm90IGV4cGxpY2l0bHkgbWVudGlvbmVkLFxuICAgICAgICAgICAgICAgIC8vIFRoZW4sIHdlIGFsc28gd2FudCB0byBkb3VibGUtY2hlY2sgdGhlIGFiYnIgY2FzZSAoZS5nLiBcIkdFVFwiIG5vdCBcImdldFwiKVxuICAgICAgICAgICAgICAgIGlmICh0aW1lem9uZUFiYnIgIT0gbWF0Y2hbMV0pIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmVzdWx0LnRleHQgKz0gbWF0Y2hbMF07XG5cbiAgICAgICAgICAgIGlmICghcmVzdWx0LnN0YXJ0LmlzQ2VydGFpbihcInRpbWV6b25lT2Zmc2V0XCIpKSB7XG4gICAgICAgICAgICAgICAgcmVzdWx0LnN0YXJ0LmFzc2lnbihcInRpbWV6b25lT2Zmc2V0XCIsIGV4dHJhY3RlZFRpbWV6b25lT2Zmc2V0KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHJlc3VsdC5lbmQgIT0gbnVsbCAmJiAhcmVzdWx0LmVuZC5pc0NlcnRhaW4oXCJ0aW1lem9uZU9mZnNldFwiKSkge1xuICAgICAgICAgICAgICAgIHJlc3VsdC5lbmQuYXNzaWduKFwidGltZXpvbmVPZmZzZXRcIiwgZXh0cmFjdGVkVGltZXpvbmVPZmZzZXQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gcmVzdWx0cztcbiAgICB9XG59XG4iLCAiaW1wb3J0IHsgUGFyc2luZ0NvbnRleHQsIFJlZmluZXIgfSBmcm9tIFwiLi4vLi4vY2hyb25vXCI7XG5pbXBvcnQgeyBQYXJzaW5nUmVzdWx0IH0gZnJvbSBcIi4uLy4uL3Jlc3VsdHNcIjtcblxuY29uc3QgVElNRVpPTkVfT0ZGU0VUX1BBVFRFUk4gPSBuZXcgUmVnRXhwKFwiXlxcXFxzKig/OlxcXFwoPyg/OkdNVHxVVEMpXFxcXHM/KT8oWystXSkoXFxcXGR7MSwyfSkoPzo6PyhcXFxcZHsyfSkpP1xcXFwpP1wiLCBcImlcIik7XG5jb25zdCBUSU1FWk9ORV9PRkZTRVRfU0lHTl9HUk9VUCA9IDE7XG5jb25zdCBUSU1FWk9ORV9PRkZTRVRfSE9VUl9PRkZTRVRfR1JPVVAgPSAyO1xuY29uc3QgVElNRVpPTkVfT0ZGU0VUX01JTlVURV9PRkZTRVRfR1JPVVAgPSAzO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBFeHRyYWN0VGltZXpvbmVPZmZzZXRSZWZpbmVyIGltcGxlbWVudHMgUmVmaW5lciB7XG4gICAgcmVmaW5lKGNvbnRleHQ6IFBhcnNpbmdDb250ZXh0LCByZXN1bHRzOiBQYXJzaW5nUmVzdWx0W10pOiBQYXJzaW5nUmVzdWx0W10ge1xuICAgICAgICByZXN1bHRzLmZvckVhY2goZnVuY3Rpb24gKHJlc3VsdCkge1xuICAgICAgICAgICAgaWYgKHJlc3VsdC5zdGFydC5pc0NlcnRhaW4oXCJ0aW1lem9uZU9mZnNldFwiKSkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY29uc3Qgc3VmZml4ID0gY29udGV4dC50ZXh0LnN1YnN0cmluZyhyZXN1bHQuaW5kZXggKyByZXN1bHQudGV4dC5sZW5ndGgpO1xuICAgICAgICAgICAgY29uc3QgbWF0Y2ggPSBUSU1FWk9ORV9PRkZTRVRfUEFUVEVSTi5leGVjKHN1ZmZpeCk7XG4gICAgICAgICAgICBpZiAoIW1hdGNoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjb250ZXh0LmRlYnVnKCgpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhgRXh0cmFjdGluZyB0aW1lem9uZTogJyR7bWF0Y2hbMF19JyBpbnRvIDogJHtyZXN1bHR9YCk7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgY29uc3QgaG91ck9mZnNldCA9IHBhcnNlSW50KG1hdGNoW1RJTUVaT05FX09GRlNFVF9IT1VSX09GRlNFVF9HUk9VUF0pO1xuICAgICAgICAgICAgY29uc3QgbWludXRlT2Zmc2V0ID0gcGFyc2VJbnQobWF0Y2hbVElNRVpPTkVfT0ZGU0VUX01JTlVURV9PRkZTRVRfR1JPVVBdIHx8IFwiMFwiKTtcbiAgICAgICAgICAgIGxldCB0aW1lem9uZU9mZnNldCA9IGhvdXJPZmZzZXQgKiA2MCArIG1pbnV0ZU9mZnNldDtcbiAgICAgICAgICAgIC8vIE5vIHRpbWV6b25lcyBoYXZlIG9mZnNldHMgZ3JlYXRlciB0aGFuIDE0IGhvdXJzLCBzbyBkaXNyZWdhcmQgdGhpcyBtYXRjaFxuICAgICAgICAgICAgaWYgKHRpbWV6b25lT2Zmc2V0ID4gMTQgKiA2MCkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChtYXRjaFtUSU1FWk9ORV9PRkZTRVRfU0lHTl9HUk9VUF0gPT09IFwiLVwiKSB7XG4gICAgICAgICAgICAgICAgdGltZXpvbmVPZmZzZXQgPSAtdGltZXpvbmVPZmZzZXQ7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChyZXN1bHQuZW5kICE9IG51bGwpIHtcbiAgICAgICAgICAgICAgICByZXN1bHQuZW5kLmFzc2lnbihcInRpbWV6b25lT2Zmc2V0XCIsIHRpbWV6b25lT2Zmc2V0KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmVzdWx0LnN0YXJ0LmFzc2lnbihcInRpbWV6b25lT2Zmc2V0XCIsIHRpbWV6b25lT2Zmc2V0KTtcbiAgICAgICAgICAgIHJlc3VsdC50ZXh0ICs9IG1hdGNoWzBdO1xuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gcmVzdWx0cztcbiAgICB9XG59XG4iLCAiLypcbiAgXG4qL1xuXG5pbXBvcnQgeyBQYXJzaW5nQ29udGV4dCwgUmVmaW5lciB9IGZyb20gXCIuLi8uLi9jaHJvbm9cIjtcbmltcG9ydCB7IFBhcnNpbmdSZXN1bHQgfSBmcm9tIFwiLi4vLi4vcmVzdWx0c1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBPdmVybGFwUmVtb3ZhbFJlZmluZXIgaW1wbGVtZW50cyBSZWZpbmVyIHtcbiAgICByZWZpbmUoY29udGV4dDogUGFyc2luZ0NvbnRleHQsIHJlc3VsdHM6IFBhcnNpbmdSZXN1bHRbXSk6IFBhcnNpbmdSZXN1bHRbXSB7XG4gICAgICAgIGlmIChyZXN1bHRzLmxlbmd0aCA8IDIpIHtcbiAgICAgICAgICAgIHJldHVybiByZXN1bHRzO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgZmlsdGVyZWRSZXN1bHRzID0gW107XG4gICAgICAgIGxldCBwcmV2UmVzdWx0ID0gcmVzdWx0c1swXTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDE7IGkgPCByZXN1bHRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBjb25zdCByZXN1bHQgPSByZXN1bHRzW2ldO1xuICAgICAgICAgICAgaWYgKHJlc3VsdC5pbmRleCA+PSBwcmV2UmVzdWx0LmluZGV4ICsgcHJldlJlc3VsdC50ZXh0Lmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIGZpbHRlcmVkUmVzdWx0cy5wdXNoKHByZXZSZXN1bHQpO1xuICAgICAgICAgICAgICAgIHByZXZSZXN1bHQgPSByZXN1bHQ7XG4gICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIElmIG92ZXJsYXAsIGNvbXBhcmUgdGhlIGxlbmd0aCBhbmQgZGlzY2FyZCB0aGUgc2hvcnRlciBvbmVcbiAgICAgICAgICAgIGxldCBrZXB0ID0gbnVsbDtcbiAgICAgICAgICAgIGxldCByZW1vdmVkID0gbnVsbDtcbiAgICAgICAgICAgIGlmIChyZXN1bHQudGV4dC5sZW5ndGggPiBwcmV2UmVzdWx0LnRleHQubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAga2VwdCA9IHJlc3VsdDtcbiAgICAgICAgICAgICAgICByZW1vdmVkID0gcHJldlJlc3VsdDtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAga2VwdCA9IHByZXZSZXN1bHQ7XG4gICAgICAgICAgICAgICAgcmVtb3ZlZCA9IHJlc3VsdDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnRleHQuZGVidWcoKCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGAke3RoaXMuY29uc3RydWN0b3IubmFtZX0gcmVtb3ZlICR7cmVtb3ZlZH0gYnkgJHtrZXB0fWApO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBwcmV2UmVzdWx0ID0ga2VwdDtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFRoZSBsYXN0IG9uZVxuICAgICAgICBpZiAocHJldlJlc3VsdCAhPSBudWxsKSB7XG4gICAgICAgICAgICBmaWx0ZXJlZFJlc3VsdHMucHVzaChwcmV2UmVzdWx0KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBmaWx0ZXJlZFJlc3VsdHM7XG4gICAgfVxufVxuIiwgIi8qXG4gICAgRW5mb3JjZSAnZm9yd2FyZERhdGUnIG9wdGlvbiB0byBvbiB0aGUgcmVzdWx0cy4gV2hlbiB0aGVyZSBhcmUgbWlzc2luZyBjb21wb25lbnQsXG4gICAgZS5nLiBcIk1hcmNoIDEyLTEzICh3aXRob3V0IHllYXIpXCIgb3IgXCJUaHVyc2RheVwiLCB0aGUgcmVmaW5lciB3aWxsIHRyeSB0byBhZGp1c3QgdGhlIHJlc3VsdFxuICAgIGludG8gdGhlIGZ1dHVyZSBpbnN0ZWFkIG9mIHRoZSBwYXN0LlxuKi9cblxuaW1wb3J0IHsgUGFyc2luZ0NvbnRleHQsIFJlZmluZXIgfSBmcm9tIFwiLi4vLi4vY2hyb25vXCI7XG5pbXBvcnQgeyBQYXJzaW5nUmVzdWx0IH0gZnJvbSBcIi4uLy4uL3Jlc3VsdHNcIjtcbmltcG9ydCBkYXlqcyBmcm9tIFwiZGF5anNcIjtcbmltcG9ydCB7IGltcGx5U2ltaWxhckRhdGUgfSBmcm9tIFwiLi4vLi4vdXRpbHMvZGF5anNcIjtcbmltcG9ydCAqIGFzIGRhdGVzIGZyb20gXCIuLi8uLi91dGlscy9kYXRlc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGb3J3YXJkRGF0ZVJlZmluZXIgaW1wbGVtZW50cyBSZWZpbmVyIHtcbiAgICByZWZpbmUoY29udGV4dDogUGFyc2luZ0NvbnRleHQsIHJlc3VsdHM6IFBhcnNpbmdSZXN1bHRbXSk6IFBhcnNpbmdSZXN1bHRbXSB7XG4gICAgICAgIGlmICghY29udGV4dC5vcHRpb24uZm9yd2FyZERhdGUpIHtcbiAgICAgICAgICAgIHJldHVybiByZXN1bHRzO1xuICAgICAgICB9XG5cbiAgICAgICAgcmVzdWx0cy5mb3JFYWNoKChyZXN1bHQpID0+IHtcbiAgICAgICAgICAgIGxldCByZWZNb21lbnQgPSBkYXlqcyhjb250ZXh0LnJlZmVyZW5jZS5nZXREYXRlV2l0aEFkanVzdGVkVGltZXpvbmUoKSk7XG5cbiAgICAgICAgICAgIGlmIChyZXN1bHQuc3RhcnQuaXNPbmx5VGltZSgpICYmIGNvbnRleHQucmVmZXJlbmNlLmluc3RhbnQgPiByZXN1bHQuc3RhcnQuZGF0ZSgpKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgcmVmRGF0ZSA9IGNvbnRleHQucmVmZXJlbmNlLmdldERhdGVXaXRoQWRqdXN0ZWRUaW1lem9uZSgpO1xuICAgICAgICAgICAgICAgIGNvbnN0IHJlZkZvbGxvd2luZ0RheSA9IG5ldyBEYXRlKHJlZkRhdGUpO1xuICAgICAgICAgICAgICAgIHJlZkZvbGxvd2luZ0RheS5zZXREYXRlKHJlZkZvbGxvd2luZ0RheS5nZXREYXRlKCkgKyAxKTtcblxuICAgICAgICAgICAgICAgIGRhdGVzLmltcGx5U2ltaWxhckRhdGUocmVzdWx0LnN0YXJ0LCByZWZGb2xsb3dpbmdEYXkpO1xuICAgICAgICAgICAgICAgIGNvbnRleHQuZGVidWcoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcbiAgICAgICAgICAgICAgICAgICAgICAgIGAke3RoaXMuY29uc3RydWN0b3IubmFtZX0gYWRqdXN0ZWQgJHtyZXN1bHR9IHRpbWUgZnJvbSB0aGUgcmVmIGRhdGUgKCR7cmVmRGF0ZX0pIHRvIHRoZSBmb2xsb3dpbmcgZGF5ICgke3JlZkZvbGxvd2luZ0RheX0pYFxuICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIGlmIChyZXN1bHQuZW5kICYmIHJlc3VsdC5lbmQuaXNPbmx5VGltZSgpKSB7XG4gICAgICAgICAgICAgICAgICAgIGRhdGVzLmltcGx5U2ltaWxhckRhdGUocmVzdWx0LmVuZCwgcmVmRm9sbG93aW5nRGF5KTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHJlc3VsdC5zdGFydC5kYXRlKCkgPiByZXN1bHQuZW5kLmRhdGUoKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVmRm9sbG93aW5nRGF5LnNldERhdGUocmVmRm9sbG93aW5nRGF5LmdldERhdGUoKSArIDEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgZGF0ZXMuaW1wbHlTaW1pbGFyRGF0ZShyZXN1bHQuZW5kLCByZWZGb2xsb3dpbmdEYXkpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAocmVzdWx0LnN0YXJ0LmlzT25seVdlZWtkYXlDb21wb25lbnQoKSAmJiByZWZNb21lbnQuaXNBZnRlcihyZXN1bHQuc3RhcnQuZGF5anMoKSkpIHtcbiAgICAgICAgICAgICAgICBpZiAocmVmTW9tZW50LmRheSgpID49IHJlc3VsdC5zdGFydC5nZXQoXCJ3ZWVrZGF5XCIpKSB7XG4gICAgICAgICAgICAgICAgICAgIHJlZk1vbWVudCA9IHJlZk1vbWVudC5kYXkocmVzdWx0LnN0YXJ0LmdldChcIndlZWtkYXlcIikgKyA3KTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICByZWZNb21lbnQgPSByZWZNb21lbnQuZGF5KDxudW1iZXI+cmVzdWx0LnN0YXJ0LmdldChcIndlZWtkYXlcIikpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHJlc3VsdC5zdGFydC5pbXBseShcImRheVwiLCByZWZNb21lbnQuZGF0ZSgpKTtcbiAgICAgICAgICAgICAgICByZXN1bHQuc3RhcnQuaW1wbHkoXCJtb250aFwiLCByZWZNb21lbnQubW9udGgoKSArIDEpO1xuICAgICAgICAgICAgICAgIHJlc3VsdC5zdGFydC5pbXBseShcInllYXJcIiwgcmVmTW9tZW50LnllYXIoKSk7XG4gICAgICAgICAgICAgICAgY29udGV4dC5kZWJ1ZygoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGAke3RoaXMuY29uc3RydWN0b3IubmFtZX0gYWRqdXN0ZWQgJHtyZXN1bHR9IHdlZWtkYXkgKCR7cmVzdWx0LnN0YXJ0fSlgKTtcbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgIGlmIChyZXN1bHQuZW5kICYmIHJlc3VsdC5lbmQuaXNPbmx5V2Vla2RheUNvbXBvbmVudCgpKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIEFkanVzdCBkYXRlIHRvIHRoZSBjb21pbmcgd2Vla1xuICAgICAgICAgICAgICAgICAgICBpZiAocmVmTW9tZW50LmRheSgpID4gcmVzdWx0LmVuZC5nZXQoXCJ3ZWVrZGF5XCIpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZWZNb21lbnQgPSByZWZNb21lbnQuZGF5KHJlc3VsdC5lbmQuZ2V0KFwid2Vla2RheVwiKSArIDcpO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVmTW9tZW50ID0gcmVmTW9tZW50LmRheSg8bnVtYmVyPnJlc3VsdC5lbmQuZ2V0KFwid2Vla2RheVwiKSk7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICByZXN1bHQuZW5kLmltcGx5KFwiZGF5XCIsIHJlZk1vbWVudC5kYXRlKCkpO1xuICAgICAgICAgICAgICAgICAgICByZXN1bHQuZW5kLmltcGx5KFwibW9udGhcIiwgcmVmTW9tZW50Lm1vbnRoKCkgKyAxKTtcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0LmVuZC5pbXBseShcInllYXJcIiwgcmVmTW9tZW50LnllYXIoKSk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnRleHQuZGVidWcoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coYCR7dGhpcy5jb25zdHJ1Y3Rvci5uYW1lfSBhZGp1c3RlZCAke3Jlc3VsdH0gd2Vla2RheSAoJHtyZXN1bHQuZW5kfSlgKTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBJbiBjYXNlIHdoZXJlIHdlIGtub3cgdGhlIG1vbnRoLCBidXQgbm90IHdoaWNoIHllYXIgKGUuZy4gXCJpbiBEZWNlbWJlclwiLCBcIjI1dGggRGVjZW1iZXJcIiksXG4gICAgICAgICAgICAvLyB0cnkgbW92ZSB0byBhbm90aGVyIHllYXJcbiAgICAgICAgICAgIGlmIChyZXN1bHQuc3RhcnQuaXNEYXRlV2l0aFVua25vd25ZZWFyKCkgJiYgcmVmTW9tZW50LmlzQWZ0ZXIocmVzdWx0LnN0YXJ0LmRheWpzKCkpKSB7XG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCAzICYmIHJlZk1vbWVudC5pc0FmdGVyKHJlc3VsdC5zdGFydC5kYXlqcygpKTsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdC5zdGFydC5pbXBseShcInllYXJcIiwgcmVzdWx0LnN0YXJ0LmdldChcInllYXJcIikgKyAxKTtcbiAgICAgICAgICAgICAgICAgICAgY29udGV4dC5kZWJ1ZygoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhgJHt0aGlzLmNvbnN0cnVjdG9yLm5hbWV9IGFkanVzdGVkICR7cmVzdWx0fSB5ZWFyICgke3Jlc3VsdC5zdGFydH0pYCk7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgICAgIGlmIChyZXN1bHQuZW5kICYmICFyZXN1bHQuZW5kLmlzQ2VydGFpbihcInllYXJcIikpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdC5lbmQuaW1wbHkoXCJ5ZWFyXCIsIHJlc3VsdC5lbmQuZ2V0KFwieWVhclwiKSArIDEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29udGV4dC5kZWJ1ZygoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coYCR7dGhpcy5jb25zdHJ1Y3Rvci5uYW1lfSBhZGp1c3RlZCAke3Jlc3VsdH0gbW9udGggKCR7cmVzdWx0LnN0YXJ0fSlgKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gcmVzdWx0cztcbiAgICB9XG59XG4iLCAiaW1wb3J0IHsgUGFyc2luZ0NvbXBvbmVudHMgfSBmcm9tIFwiLi4vcmVzdWx0c1wiO1xuXG4vKipcbiAqIEltcGx5ICh3ZWFrbHkgdXBkYXRlKSB0aGUgcGFyc2luZyBjb21wb25lbnQgdG8gdGhlIHNhbWUgZGF5IGFzIHRoZSBgdGFyZ2V0YC5cbiAqIEBwYXJhbSBjb21wb25lbnQgdGhlIGNvbXBvbmVudCB0byBiZSB1cGRhdGVkLlxuICogQHBhcmFtIHRhcmdldCB0aGUgdGFyZ2V0IGRhdGUgd2l0aCB0aW1lem9uZSBhZGp1c3RlZC5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGltcGx5U2ltaWxhckRhdGUoY29tcG9uZW50OiBQYXJzaW5nQ29tcG9uZW50cywgdGFyZ2V0OiBEYXRlKSB7XG4gICAgY29tcG9uZW50LmltcGx5KFwiZGF5XCIsIHRhcmdldC5nZXREYXRlKCkpO1xuICAgIGNvbXBvbmVudC5pbXBseShcIm1vbnRoXCIsIHRhcmdldC5nZXRNb250aCgpICsgMSk7XG4gICAgY29tcG9uZW50LmltcGx5KFwieWVhclwiLCB0YXJnZXQuZ2V0RnVsbFllYXIoKSk7XG59XG5cbi8qKlxuICogSW1wbHkgKHdlYWtseSB1cGRhdGUpIHRoZSBwYXJzaW5nIGNvbXBvbmVudCB0byB0aGUgc2FtZSB0aW1lIGFzIHRoZSBgdGFyZ2V0YC5cbiAqIEBwYXJhbSBjb21wb25lbnQgdGhlIGNvbXBvbmVudCB0byBiZSB1cGRhdGVkLlxuICogQHBhcmFtIHRhcmdldCB0aGUgdGFyZ2V0IGRhdGUgd2l0aCB0aW1lem9uZSBhZGp1c3RlZC5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGltcGx5U2ltaWxhclRpbWUoY29tcG9uZW50OiBQYXJzaW5nQ29tcG9uZW50cywgdGFyZ2V0OiBEYXRlKSB7XG4gICAgY29tcG9uZW50LmltcGx5KFwiaG91clwiLCB0YXJnZXQuZ2V0SG91cnMoKSk7XG4gICAgY29tcG9uZW50LmltcGx5KFwibWludXRlXCIsIHRhcmdldC5nZXRNaW51dGVzKCkpO1xuICAgIGNvbXBvbmVudC5pbXBseShcInNlY29uZFwiLCB0YXJnZXQuZ2V0U2Vjb25kcygpKTtcbiAgICBjb21wb25lbnQuaW1wbHkoXCJtaWxsaXNlY29uZFwiLCB0YXJnZXQuZ2V0TWlsbGlzZWNvbmRzKCkpO1xufVxuIiwgImltcG9ydCB7IEZpbHRlciB9IGZyb20gXCIuLi9hYnN0cmFjdFJlZmluZXJzXCI7XG5pbXBvcnQgeyBQYXJzaW5nUmVzdWx0IH0gZnJvbSBcIi4uLy4uL3Jlc3VsdHNcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVW5saWtlbHlGb3JtYXRGaWx0ZXIgZXh0ZW5kcyBGaWx0ZXIge1xuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgc3RyaWN0TW9kZTogYm9vbGVhbikge1xuICAgICAgICBzdXBlcigpO1xuICAgIH1cblxuICAgIGlzVmFsaWQoY29udGV4dCwgcmVzdWx0OiBQYXJzaW5nUmVzdWx0KTogYm9vbGVhbiB7XG4gICAgICAgIGlmIChyZXN1bHQudGV4dC5yZXBsYWNlKFwiIFwiLCBcIlwiKS5tYXRjaCgvXlxcZCooXFwuXFxkKik/JC8pKSB7XG4gICAgICAgICAgICBjb250ZXh0LmRlYnVnKCgpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhgUmVtb3ZpbmcgdW5saWtlbHkgcmVzdWx0ICcke3Jlc3VsdC50ZXh0fSdgKTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIXJlc3VsdC5zdGFydC5pc1ZhbGlkRGF0ZSgpKSB7XG4gICAgICAgICAgICBjb250ZXh0LmRlYnVnKCgpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhgUmVtb3ZpbmcgaW52YWxpZCByZXN1bHQ6ICR7cmVzdWx0fSAoJHtyZXN1bHQuc3RhcnR9KWApO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChyZXN1bHQuZW5kICYmICFyZXN1bHQuZW5kLmlzVmFsaWREYXRlKCkpIHtcbiAgICAgICAgICAgIGNvbnRleHQuZGVidWcoKCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGBSZW1vdmluZyBpbnZhbGlkIHJlc3VsdDogJHtyZXN1bHR9ICgke3Jlc3VsdC5lbmR9KWApO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLnN0cmljdE1vZGUpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmlzU3RyaWN0TW9kZVZhbGlkKGNvbnRleHQsIHJlc3VsdCk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGlzU3RyaWN0TW9kZVZhbGlkKGNvbnRleHQsIHJlc3VsdDogUGFyc2luZ1Jlc3VsdCkge1xuICAgICAgICBpZiAocmVzdWx0LnN0YXJ0LmlzT25seVdlZWtkYXlDb21wb25lbnQoKSkge1xuICAgICAgICAgICAgY29udGV4dC5kZWJ1ZygoKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coYChTdHJpY3QpIFJlbW92aW5nIHdlZWtkYXkgb25seSBjb21wb25lbnQ6ICR7cmVzdWx0fSAoJHtyZXN1bHQuZW5kfSlgKTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAocmVzdWx0LnN0YXJ0LmlzT25seVRpbWUoKSAmJiAoIXJlc3VsdC5zdGFydC5pc0NlcnRhaW4oXCJob3VyXCIpIHx8ICFyZXN1bHQuc3RhcnQuaXNDZXJ0YWluKFwibWludXRlXCIpKSkge1xuICAgICAgICAgICAgY29udGV4dC5kZWJ1ZygoKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coYChTdHJpY3QpIFJlbW92aW5nIHVuY2VydGFpbiB0aW1lIGNvbXBvbmVudDogJHtyZXN1bHR9ICgke3Jlc3VsdC5lbmR9KWApO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbn1cbiIsICJpbXBvcnQgeyBQYXJzaW5nQ29udGV4dCB9IGZyb20gXCIuLi8uLi9jaHJvbm9cIjtcbmltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gXCIuLi8uLi90eXBlc1wiO1xuaW1wb3J0IHsgQWJzdHJhY3RQYXJzZXJXaXRoV29yZEJvdW5kYXJ5Q2hlY2tpbmcgfSBmcm9tIFwiLi9BYnN0cmFjdFBhcnNlcldpdGhXb3JkQm91bmRhcnlcIjtcblxuLy8gSVNPIDg2MDFcbi8vIGh0dHA6Ly93d3cudzMub3JnL1RSL05PVEUtZGF0ZXRpbWVcbi8vIC0gWVlZWS1NTS1ERFxuLy8gLSBZWVlZLU1NLUREVGhoOm1tVFpEXG4vLyAtIFlZWVktTU0tRERUaGg6bW06c3NUWkRcbi8vIC0gWVlZWS1NTS1ERFRoaDptbTpzcy5zVFpEXG4vLyAtIFRaRCA9IChaIG9yICtoaDptbSBvciAtaGg6bW0pXG5cbi8vIHByZXR0aWVyLWlnbm9yZVxuY29uc3QgUEFUVEVSTiA9IG5ldyBSZWdFeHAoXG4gICAgXCIoWzAtOV17NH0pXFxcXC0oWzAtOV17MSwyfSlcXFxcLShbMC05XXsxLDJ9KVwiICtcbiAgICBcIig/OlRcIiArIC8vLi5cbiAgICAgICAgXCIoWzAtOV17MSwyfSk6KFswLTldezEsMn0pXCIgKyAvLyBoaDptbVxuICAgICAgICBcIig/OlwiICtcbiAgICAgICAgICAgIFwiOihbMC05XXsxLDJ9KSg/OlxcXFwuKFxcXFxkezEsNH0pKT9cIiArXG4gICAgICAgIFwiKT9cIiArIC8vIDpzcy5zXG4gICAgICAgIFwiKFwiICtcbiAgICAgICAgICAgIFwiWnwoWystXVxcXFxkezJ9KTo/KFxcXFxkezJ9KT9cIiArXG4gICAgICAgIFwiKT9cIiArIC8vIFRaRCAoWiBvciBcdTAwQjFoaDptbSBvciBcdTAwQjFoaG1tIG9yIFx1MDBCMWhoKVxuICAgIFwiKT9cIiArXG4gICAgXCIoPz1cXFxcV3wkKVwiLFxuICAgIFwiaVwiXG4pO1xuXG5jb25zdCBZRUFSX05VTUJFUl9HUk9VUCA9IDE7XG5jb25zdCBNT05USF9OVU1CRVJfR1JPVVAgPSAyO1xuY29uc3QgREFURV9OVU1CRVJfR1JPVVAgPSAzO1xuY29uc3QgSE9VUl9OVU1CRVJfR1JPVVAgPSA0O1xuY29uc3QgTUlOVVRFX05VTUJFUl9HUk9VUCA9IDU7XG5jb25zdCBTRUNPTkRfTlVNQkVSX0dST1VQID0gNjtcbmNvbnN0IE1JTExJU0VDT05EX05VTUJFUl9HUk9VUCA9IDc7XG5jb25zdCBUWkRfR1JPVVAgPSA4O1xuY29uc3QgVFpEX0hPVVJfT0ZGU0VUX0dST1VQID0gOTtcbmNvbnN0IFRaRF9NSU5VVEVfT0ZGU0VUX0dST1VQID0gMTA7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIElTT0Zvcm1hdFBhcnNlciBleHRlbmRzIEFic3RyYWN0UGFyc2VyV2l0aFdvcmRCb3VuZGFyeUNoZWNraW5nIHtcbiAgICBpbm5lclBhdHRlcm4oKTogUmVnRXhwIHtcbiAgICAgICAgcmV0dXJuIFBBVFRFUk47XG4gICAgfVxuXG4gICAgaW5uZXJFeHRyYWN0KGNvbnRleHQ6IFBhcnNpbmdDb250ZXh0LCBtYXRjaDogUmVnRXhwTWF0Y2hBcnJheSkge1xuICAgICAgICBjb25zdCBjb21wb25lbnRzID0gY29udGV4dC5jcmVhdGVQYXJzaW5nQ29tcG9uZW50cyh7XG4gICAgICAgICAgICBcInllYXJcIjogcGFyc2VJbnQobWF0Y2hbWUVBUl9OVU1CRVJfR1JPVVBdKSxcbiAgICAgICAgICAgIFwibW9udGhcIjogcGFyc2VJbnQobWF0Y2hbTU9OVEhfTlVNQkVSX0dST1VQXSksXG4gICAgICAgICAgICBcImRheVwiOiBwYXJzZUludChtYXRjaFtEQVRFX05VTUJFUl9HUk9VUF0pLFxuICAgICAgICB9KTtcbiAgICAgICAgaWYgKG1hdGNoW0hPVVJfTlVNQkVSX0dST1VQXSAhPSBudWxsKSB7XG4gICAgICAgICAgICBjb21wb25lbnRzLmFzc2lnbihcImhvdXJcIiwgcGFyc2VJbnQobWF0Y2hbSE9VUl9OVU1CRVJfR1JPVVBdKSk7XG4gICAgICAgICAgICBjb21wb25lbnRzLmFzc2lnbihcIm1pbnV0ZVwiLCBwYXJzZUludChtYXRjaFtNSU5VVEVfTlVNQkVSX0dST1VQXSkpO1xuXG4gICAgICAgICAgICBpZiAobWF0Y2hbU0VDT05EX05VTUJFUl9HUk9VUF0gIT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIGNvbXBvbmVudHMuYXNzaWduKFwic2Vjb25kXCIsIHBhcnNlSW50KG1hdGNoW1NFQ09ORF9OVU1CRVJfR1JPVVBdKSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChtYXRjaFtNSUxMSVNFQ09ORF9OVU1CRVJfR1JPVVBdICE9IG51bGwpIHtcbiAgICAgICAgICAgICAgICBjb21wb25lbnRzLmFzc2lnbihcIm1pbGxpc2Vjb25kXCIsIHBhcnNlSW50KG1hdGNoW01JTExJU0VDT05EX05VTUJFUl9HUk9VUF0pKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChtYXRjaFtUWkRfR1JPVVBdICE9IG51bGwpIHtcbiAgICAgICAgICAgICAgICAvLyBUaGUgWnVsdSB0aW1lIHpvbmUgKFopIGlzIGVxdWl2YWxlbnQgdG8gVVRDXG4gICAgICAgICAgICAgICAgbGV0IG9mZnNldCA9IDA7XG4gICAgICAgICAgICAgICAgaWYgKG1hdGNoW1RaRF9IT1VSX09GRlNFVF9HUk9VUF0pIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgaG91ck9mZnNldCA9IHBhcnNlSW50KG1hdGNoW1RaRF9IT1VSX09GRlNFVF9HUk9VUF0pO1xuICAgICAgICAgICAgICAgICAgICBsZXQgbWludXRlT2Zmc2V0ID0gMDtcbiAgICAgICAgICAgICAgICAgICAgaWYgKG1hdGNoW1RaRF9NSU5VVEVfT0ZGU0VUX0dST1VQXSAhPSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBtaW51dGVPZmZzZXQgPSBwYXJzZUludChtYXRjaFtUWkRfTUlOVVRFX09GRlNFVF9HUk9VUF0pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIG9mZnNldCA9IGhvdXJPZmZzZXQgKiA2MDtcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9mZnNldCA8IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG9mZnNldCAtPSBtaW51dGVPZmZzZXQ7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBvZmZzZXQgKz0gbWludXRlT2Zmc2V0O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNvbXBvbmVudHMuYXNzaWduKFwidGltZXpvbmVPZmZzZXRcIiwgb2Zmc2V0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gY29tcG9uZW50cy5hZGRUYWcoXCJwYXJzZXIvSVNPRm9ybWF0UGFyc2VyXCIpO1xuICAgIH1cbn1cbiIsICIvKlxuICBcbiovXG5cbmltcG9ydCB7IE1lcmdpbmdSZWZpbmVyIH0gZnJvbSBcIi4uL2Fic3RyYWN0UmVmaW5lcnNcIjtcbmltcG9ydCB7IFBhcnNpbmdSZXN1bHQgfSBmcm9tIFwiLi4vLi4vcmVzdWx0c1wiO1xuXG4vKipcbiAqIE1lcmdlIHdlZWtkYXkgY29tcG9uZW50IGludG8gbW9yZSBjb21wbGV0ZWQgZGF0YVxuICogLSBbU3VuZGF5XSBbMTIvNy8yMDE0XSA9PiBbU3VuZGF5IDEyLzcvMjAxNF1cbiAqIC0gW1R1ZXNkYXldLCBbSmFudWFyeSAxMywgMjAxMl0gPT4gW1N1bmRheSAxMi83LzIwMTRdXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1lcmdlV2Vla2RheUNvbXBvbmVudFJlZmluZXIgZXh0ZW5kcyBNZXJnaW5nUmVmaW5lciB7XG4gICAgbWVyZ2VSZXN1bHRzKHRleHRCZXR3ZWVuOiBzdHJpbmcsIGN1cnJlbnRSZXN1bHQ6IFBhcnNpbmdSZXN1bHQsIG5leHRSZXN1bHQ6IFBhcnNpbmdSZXN1bHQpOiBQYXJzaW5nUmVzdWx0IHtcbiAgICAgICAgY29uc3QgbmV3UmVzdWx0ID0gbmV4dFJlc3VsdC5jbG9uZSgpO1xuICAgICAgICBuZXdSZXN1bHQuaW5kZXggPSBjdXJyZW50UmVzdWx0LmluZGV4O1xuICAgICAgICBuZXdSZXN1bHQudGV4dCA9IGN1cnJlbnRSZXN1bHQudGV4dCArIHRleHRCZXR3ZWVuICsgbmV3UmVzdWx0LnRleHQ7XG5cbiAgICAgICAgbmV3UmVzdWx0LnN0YXJ0LmFzc2lnbihcIndlZWtkYXlcIiwgY3VycmVudFJlc3VsdC5zdGFydC5nZXQoXCJ3ZWVrZGF5XCIpKTtcbiAgICAgICAgaWYgKG5ld1Jlc3VsdC5lbmQpIHtcbiAgICAgICAgICAgIG5ld1Jlc3VsdC5lbmQuYXNzaWduKFwid2Vla2RheVwiLCBjdXJyZW50UmVzdWx0LnN0YXJ0LmdldChcIndlZWtkYXlcIikpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIG5ld1Jlc3VsdDtcbiAgICB9XG5cbiAgICBzaG91bGRNZXJnZVJlc3VsdHModGV4dEJldHdlZW46IHN0cmluZywgY3VycmVudFJlc3VsdDogUGFyc2luZ1Jlc3VsdCwgbmV4dFJlc3VsdDogUGFyc2luZ1Jlc3VsdCk6IGJvb2xlYW4ge1xuICAgICAgICBjb25zdCB3ZWVrZGF5VGhlbk5vcm1hbERhdGUgPVxuICAgICAgICAgICAgY3VycmVudFJlc3VsdC5zdGFydC5pc09ubHlXZWVrZGF5Q29tcG9uZW50KCkgJiZcbiAgICAgICAgICAgICFjdXJyZW50UmVzdWx0LnN0YXJ0LmlzQ2VydGFpbihcImhvdXJcIikgJiZcbiAgICAgICAgICAgIG5leHRSZXN1bHQuc3RhcnQuaXNDZXJ0YWluKFwiZGF5XCIpO1xuICAgICAgICByZXR1cm4gd2Vla2RheVRoZW5Ob3JtYWxEYXRlICYmIHRleHRCZXR3ZWVuLm1hdGNoKC9eLD9cXHMqJC8pICE9IG51bGw7XG4gICAgfVxufVxuIiwgImltcG9ydCB7IENvbmZpZ3VyYXRpb24sIFBhcnNlciwgUmVmaW5lciB9IGZyb20gXCIuL2Nocm9ub1wiO1xuXG5pbXBvcnQgRXh0cmFjdFRpbWV6b25lQWJiclJlZmluZXIgZnJvbSBcIi4vY29tbW9uL3JlZmluZXJzL0V4dHJhY3RUaW1lem9uZUFiYnJSZWZpbmVyXCI7XG5pbXBvcnQgRXh0cmFjdFRpbWV6b25lT2Zmc2V0UmVmaW5lciBmcm9tIFwiLi9jb21tb24vcmVmaW5lcnMvRXh0cmFjdFRpbWV6b25lT2Zmc2V0UmVmaW5lclwiO1xuaW1wb3J0IE92ZXJsYXBSZW1vdmFsUmVmaW5lciBmcm9tIFwiLi9jb21tb24vcmVmaW5lcnMvT3ZlcmxhcFJlbW92YWxSZWZpbmVyXCI7XG5pbXBvcnQgRm9yd2FyZERhdGVSZWZpbmVyIGZyb20gXCIuL2NvbW1vbi9yZWZpbmVycy9Gb3J3YXJkRGF0ZVJlZmluZXJcIjtcbmltcG9ydCBVbmxpa2VseUZvcm1hdEZpbHRlciBmcm9tIFwiLi9jb21tb24vcmVmaW5lcnMvVW5saWtlbHlGb3JtYXRGaWx0ZXJcIjtcbmltcG9ydCBJU09Gb3JtYXRQYXJzZXIgZnJvbSBcIi4vY29tbW9uL3BhcnNlcnMvSVNPRm9ybWF0UGFyc2VyXCI7XG5pbXBvcnQgTWVyZ2VXZWVrZGF5Q29tcG9uZW50UmVmaW5lciBmcm9tIFwiLi9jb21tb24vcmVmaW5lcnMvTWVyZ2VXZWVrZGF5Q29tcG9uZW50UmVmaW5lclwiO1xuXG5leHBvcnQgZnVuY3Rpb24gaW5jbHVkZUNvbW1vbkNvbmZpZ3VyYXRpb24oY29uZmlndXJhdGlvbjogQ29uZmlndXJhdGlvbiwgc3RyaWN0TW9kZSA9IGZhbHNlKTogQ29uZmlndXJhdGlvbiB7XG4gICAgY29uZmlndXJhdGlvbi5wYXJzZXJzLnVuc2hpZnQobmV3IElTT0Zvcm1hdFBhcnNlcigpKTtcblxuICAgIGNvbmZpZ3VyYXRpb24ucmVmaW5lcnMudW5zaGlmdChuZXcgTWVyZ2VXZWVrZGF5Q29tcG9uZW50UmVmaW5lcigpKTtcbiAgICBjb25maWd1cmF0aW9uLnJlZmluZXJzLnVuc2hpZnQobmV3IEV4dHJhY3RUaW1lem9uZU9mZnNldFJlZmluZXIoKSk7XG4gICAgY29uZmlndXJhdGlvbi5yZWZpbmVycy51bnNoaWZ0KG5ldyBPdmVybGFwUmVtb3ZhbFJlZmluZXIoKSk7XG5cbiAgICAvLyBVbmxpa2UgRXh0cmFjdFRpbWV6b25lT2Zmc2V0UmVmaW5lciwgdGhpcyByZWZpbmVyIHJlbGllcyBvbiBrbm93aW5nIGJvdGggZGF0ZSBhbmQgdGltZSBpbiBjYXNlcyB3aGVyZSB0aGUgdHpcbiAgICAvLyBpcyBhbWJpZ3VvdXMgKGluIHRlcm1zIG9mIERTVC9ub24tRFNUKS4gSXQgdGhlcmVmb3JlIG5lZWRzIHRvIGJlIGFwcGxpZWQgYXMgbGF0ZSBhcyBwb3NzaWJsZSBpbiB0aGUgcGFyc2luZy5cbiAgICBjb25maWd1cmF0aW9uLnJlZmluZXJzLnB1c2gobmV3IEV4dHJhY3RUaW1lem9uZUFiYnJSZWZpbmVyKCkpO1xuICAgIGNvbmZpZ3VyYXRpb24ucmVmaW5lcnMucHVzaChuZXcgT3ZlcmxhcFJlbW92YWxSZWZpbmVyKCkpO1xuICAgIGNvbmZpZ3VyYXRpb24ucmVmaW5lcnMucHVzaChuZXcgRm9yd2FyZERhdGVSZWZpbmVyKCkpO1xuICAgIGNvbmZpZ3VyYXRpb24ucmVmaW5lcnMucHVzaChuZXcgVW5saWtlbHlGb3JtYXRGaWx0ZXIoc3RyaWN0TW9kZSkpO1xuICAgIHJldHVybiBjb25maWd1cmF0aW9uO1xufVxuIiwgImltcG9ydCB7IFBhcnNpbmdDb250ZXh0IH0gZnJvbSBcIi4uLy4uLy4uL2Nocm9ub1wiO1xuaW1wb3J0IHsgUGFyc2luZ0NvbXBvbmVudHMsIFBhcnNpbmdSZXN1bHQgfSBmcm9tIFwiLi4vLi4vLi4vcmVzdWx0c1wiO1xuaW1wb3J0IGRheWpzIGZyb20gXCJkYXlqc1wiO1xuaW1wb3J0IHsgQWJzdHJhY3RQYXJzZXJXaXRoV29yZEJvdW5kYXJ5Q2hlY2tpbmcgfSBmcm9tIFwiLi4vLi4vLi4vY29tbW9uL3BhcnNlcnMvQWJzdHJhY3RQYXJzZXJXaXRoV29yZEJvdW5kYXJ5XCI7XG5pbXBvcnQgeyBhc3NpZ25TaW1pbGFyRGF0ZSB9IGZyb20gXCIuLi8uLi8uLi91dGlscy9kYXlqc1wiO1xuaW1wb3J0ICogYXMgcmVmZXJlbmNlcyBmcm9tIFwiLi4vLi4vLi4vY29tbW9uL2Nhc3VhbFJlZmVyZW5jZXNcIjtcblxuY29uc3QgUEFUVEVSTiA9IC8obm93fHRvZGF5fHRvbmlnaHR8dG9tb3Jyb3d8b3Zlcm1vcnJvd3x0bXJ8dG1yd3x5ZXN0ZXJkYXl8bGFzdFxccypuaWdodCkoPz1cXFd8JCkvaTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRU5DYXN1YWxEYXRlUGFyc2VyIGV4dGVuZHMgQWJzdHJhY3RQYXJzZXJXaXRoV29yZEJvdW5kYXJ5Q2hlY2tpbmcge1xuICAgIGlubmVyUGF0dGVybihjb250ZXh0OiBQYXJzaW5nQ29udGV4dCk6IFJlZ0V4cCB7XG4gICAgICAgIHJldHVybiBQQVRURVJOO1xuICAgIH1cblxuICAgIGlubmVyRXh0cmFjdChjb250ZXh0OiBQYXJzaW5nQ29udGV4dCwgbWF0Y2g6IFJlZ0V4cE1hdGNoQXJyYXkpOiBQYXJzaW5nQ29tcG9uZW50cyB8IFBhcnNpbmdSZXN1bHQge1xuICAgICAgICBsZXQgdGFyZ2V0RGF0ZSA9IGRheWpzKGNvbnRleHQucmVmRGF0ZSk7XG4gICAgICAgIGNvbnN0IGxvd2VyVGV4dCA9IG1hdGNoWzBdLnRvTG93ZXJDYXNlKCk7XG4gICAgICAgIGxldCBjb21wb25lbnQgPSBjb250ZXh0LmNyZWF0ZVBhcnNpbmdDb21wb25lbnRzKCk7XG5cbiAgICAgICAgc3dpdGNoIChsb3dlclRleHQpIHtcbiAgICAgICAgICAgIGNhc2UgXCJub3dcIjpcbiAgICAgICAgICAgICAgICBjb21wb25lbnQgPSByZWZlcmVuY2VzLm5vdyhjb250ZXh0LnJlZmVyZW5jZSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIGNhc2UgXCJ0b2RheVwiOlxuICAgICAgICAgICAgICAgIGNvbXBvbmVudCA9IHJlZmVyZW5jZXMudG9kYXkoY29udGV4dC5yZWZlcmVuY2UpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICBjYXNlIFwieWVzdGVyZGF5XCI6XG4gICAgICAgICAgICAgICAgY29tcG9uZW50ID0gcmVmZXJlbmNlcy55ZXN0ZXJkYXkoY29udGV4dC5yZWZlcmVuY2UpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICBjYXNlIFwidG9tb3Jyb3dcIjpcbiAgICAgICAgICAgIGNhc2UgXCJ0bXJcIjpcbiAgICAgICAgICAgIGNhc2UgXCJ0bXJ3XCI6XG4gICAgICAgICAgICAgICAgY29tcG9uZW50ID0gcmVmZXJlbmNlcy50b21vcnJvdyhjb250ZXh0LnJlZmVyZW5jZSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIGNhc2UgXCJ0b25pZ2h0XCI6XG4gICAgICAgICAgICAgICAgY29tcG9uZW50ID0gcmVmZXJlbmNlcy50b25pZ2h0KGNvbnRleHQucmVmZXJlbmNlKTtcbiAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgY2FzZSBcIm92ZXJtb3Jyb3dcIjpcbiAgICAgICAgICAgICAgICBjb21wb25lbnQgPSByZWZlcmVuY2VzLnRoZURheUFmdGVyKGNvbnRleHQucmVmZXJlbmNlLCAyKTtcbiAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICBpZiAobG93ZXJUZXh0Lm1hdGNoKC9sYXN0XFxzKm5pZ2h0LykpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRhcmdldERhdGUuaG91cigpID4gNikge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0RGF0ZSA9IHRhcmdldERhdGUuYWRkKC0xLCBcImRheVwiKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIGFzc2lnblNpbWlsYXJEYXRlKGNvbXBvbmVudCwgdGFyZ2V0RGF0ZSk7XG4gICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudC5pbXBseShcImhvdXJcIiwgMCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICAgIGNvbXBvbmVudC5hZGRUYWcoXCJwYXJzZXIvRU5DYXN1YWxEYXRlUGFyc2VyXCIpO1xuICAgICAgICByZXR1cm4gY29tcG9uZW50O1xuICAgIH1cbn1cbiIsICJpbXBvcnQgeyBQYXJzaW5nQ29tcG9uZW50cywgUmVmZXJlbmNlV2l0aFRpbWV6b25lIH0gZnJvbSBcIi4uL3Jlc3VsdHNcIjtcbmltcG9ydCBkYXlqcyBmcm9tIFwiZGF5anNcIjtcbmltcG9ydCB7XG4gICAgYXNzaWduU2ltaWxhckRhdGUsXG4gICAgYXNzaWduU2ltaWxhclRpbWUsXG4gICAgaW1wbHlTaW1pbGFyRGF0ZSxcbiAgICBpbXBseVNpbWlsYXJUaW1lLFxuICAgIGltcGx5VGhlTmV4dERheSxcbn0gZnJvbSBcIi4uL3V0aWxzL2RheWpzXCI7XG5pbXBvcnQgeyBNZXJpZGllbSB9IGZyb20gXCIuLi90eXBlc1wiO1xuXG5leHBvcnQgZnVuY3Rpb24gbm93KHJlZmVyZW5jZTogUmVmZXJlbmNlV2l0aFRpbWV6b25lKTogUGFyc2luZ0NvbXBvbmVudHMge1xuICAgIGNvbnN0IHRhcmdldERhdGUgPSBkYXlqcyhyZWZlcmVuY2UuZ2V0RGF0ZVdpdGhBZGp1c3RlZFRpbWV6b25lKCkpO1xuICAgIGNvbnN0IGNvbXBvbmVudCA9IG5ldyBQYXJzaW5nQ29tcG9uZW50cyhyZWZlcmVuY2UsIHt9KTtcbiAgICBhc3NpZ25TaW1pbGFyRGF0ZShjb21wb25lbnQsIHRhcmdldERhdGUpO1xuICAgIGFzc2lnblNpbWlsYXJUaW1lKGNvbXBvbmVudCwgdGFyZ2V0RGF0ZSk7XG4gICAgY29tcG9uZW50LmFzc2lnbihcInRpbWV6b25lT2Zmc2V0XCIsIHJlZmVyZW5jZS5nZXRUaW1lem9uZU9mZnNldCgpKTtcbiAgICBjb21wb25lbnQuYWRkVGFnKFwiY2FzdWFsUmVmZXJlbmNlL25vd1wiKTtcbiAgICByZXR1cm4gY29tcG9uZW50O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdG9kYXkocmVmZXJlbmNlOiBSZWZlcmVuY2VXaXRoVGltZXpvbmUpOiBQYXJzaW5nQ29tcG9uZW50cyB7XG4gICAgY29uc3QgdGFyZ2V0RGF0ZSA9IGRheWpzKHJlZmVyZW5jZS5nZXREYXRlV2l0aEFkanVzdGVkVGltZXpvbmUoKSk7XG4gICAgY29uc3QgY29tcG9uZW50ID0gbmV3IFBhcnNpbmdDb21wb25lbnRzKHJlZmVyZW5jZSwge30pO1xuICAgIGFzc2lnblNpbWlsYXJEYXRlKGNvbXBvbmVudCwgdGFyZ2V0RGF0ZSk7XG4gICAgaW1wbHlTaW1pbGFyVGltZShjb21wb25lbnQsIHRhcmdldERhdGUpO1xuICAgIGNvbXBvbmVudC5hZGRUYWcoXCJjYXN1YWxSZWZlcmVuY2UvdG9kYXlcIik7XG4gICAgcmV0dXJuIGNvbXBvbmVudDtcbn1cblxuLyoqXG4gKiBUaGUgcHJldmlvdXMgZGF5LiBJbXBseSB0aGUgc2FtZSB0aW1lLlxuICovXG5leHBvcnQgZnVuY3Rpb24geWVzdGVyZGF5KHJlZmVyZW5jZTogUmVmZXJlbmNlV2l0aFRpbWV6b25lKTogUGFyc2luZ0NvbXBvbmVudHMge1xuICAgIHJldHVybiB0aGVEYXlCZWZvcmUocmVmZXJlbmNlLCAxKS5hZGRUYWcoXCJjYXN1YWxSZWZlcmVuY2UveWVzdGVyZGF5XCIpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdGhlRGF5QmVmb3JlKHJlZmVyZW5jZTogUmVmZXJlbmNlV2l0aFRpbWV6b25lLCBudW1EYXk6IG51bWJlcik6IFBhcnNpbmdDb21wb25lbnRzIHtcbiAgICByZXR1cm4gdGhlRGF5QWZ0ZXIocmVmZXJlbmNlLCAtbnVtRGF5KTtcbn1cblxuLyoqXG4gKiBUaGUgZm9sbG93aW5nIGRheSB3aXRoIGRheWpzLmFzc2lnblRoZU5leHREYXkoKVxuICovXG5leHBvcnQgZnVuY3Rpb24gdG9tb3Jyb3cocmVmZXJlbmNlOiBSZWZlcmVuY2VXaXRoVGltZXpvbmUpOiBQYXJzaW5nQ29tcG9uZW50cyB7XG4gICAgcmV0dXJuIHRoZURheUFmdGVyKHJlZmVyZW5jZSwgMSkuYWRkVGFnKFwiY2FzdWFsUmVmZXJlbmNlL3RvbW9ycm93XCIpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdGhlRGF5QWZ0ZXIocmVmZXJlbmNlOiBSZWZlcmVuY2VXaXRoVGltZXpvbmUsIG5EYXlzOiBudW1iZXIpOiBQYXJzaW5nQ29tcG9uZW50cyB7XG4gICAgbGV0IHRhcmdldERhdGUgPSBkYXlqcyhyZWZlcmVuY2UuZ2V0RGF0ZVdpdGhBZGp1c3RlZFRpbWV6b25lKCkpO1xuICAgIGNvbnN0IGNvbXBvbmVudCA9IG5ldyBQYXJzaW5nQ29tcG9uZW50cyhyZWZlcmVuY2UsIHt9KTtcbiAgICB0YXJnZXREYXRlID0gdGFyZ2V0RGF0ZS5hZGQobkRheXMsIFwiZGF5XCIpO1xuICAgIGFzc2lnblNpbWlsYXJEYXRlKGNvbXBvbmVudCwgdGFyZ2V0RGF0ZSk7XG4gICAgaW1wbHlTaW1pbGFyVGltZShjb21wb25lbnQsIHRhcmdldERhdGUpO1xuICAgIHJldHVybiBjb21wb25lbnQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0b25pZ2h0KHJlZmVyZW5jZTogUmVmZXJlbmNlV2l0aFRpbWV6b25lLCBpbXBseUhvdXIgPSAyMik6IFBhcnNpbmdDb21wb25lbnRzIHtcbiAgICBjb25zdCB0YXJnZXREYXRlID0gZGF5anMocmVmZXJlbmNlLmdldERhdGVXaXRoQWRqdXN0ZWRUaW1lem9uZSgpKTtcbiAgICBjb25zdCBjb21wb25lbnQgPSBuZXcgUGFyc2luZ0NvbXBvbmVudHMocmVmZXJlbmNlLCB7fSk7XG4gICAgYXNzaWduU2ltaWxhckRhdGUoY29tcG9uZW50LCB0YXJnZXREYXRlKTtcbiAgICBjb21wb25lbnQuaW1wbHkoXCJob3VyXCIsIGltcGx5SG91cik7XG4gICAgY29tcG9uZW50LmltcGx5KFwibWVyaWRpZW1cIiwgTWVyaWRpZW0uUE0pO1xuICAgIGNvbXBvbmVudC5hZGRUYWcoXCJjYXN1YWxSZWZlcmVuY2UvdG9uaWdodFwiKTtcbiAgICByZXR1cm4gY29tcG9uZW50O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbGFzdE5pZ2h0KHJlZmVyZW5jZTogUmVmZXJlbmNlV2l0aFRpbWV6b25lLCBpbXBseUhvdXIgPSAwKTogUGFyc2luZ0NvbXBvbmVudHMge1xuICAgIGxldCB0YXJnZXREYXRlID0gZGF5anMocmVmZXJlbmNlLmdldERhdGVXaXRoQWRqdXN0ZWRUaW1lem9uZSgpKTtcbiAgICBjb25zdCBjb21wb25lbnQgPSBuZXcgUGFyc2luZ0NvbXBvbmVudHMocmVmZXJlbmNlLCB7fSk7XG4gICAgaWYgKHRhcmdldERhdGUuaG91cigpIDwgNikge1xuICAgICAgICB0YXJnZXREYXRlID0gdGFyZ2V0RGF0ZS5hZGQoLTEsIFwiZGF5XCIpO1xuICAgIH1cbiAgICBhc3NpZ25TaW1pbGFyRGF0ZShjb21wb25lbnQsIHRhcmdldERhdGUpO1xuICAgIGNvbXBvbmVudC5pbXBseShcImhvdXJcIiwgaW1wbHlIb3VyKTtcbiAgICByZXR1cm4gY29tcG9uZW50O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZXZlbmluZyhyZWZlcmVuY2U6IFJlZmVyZW5jZVdpdGhUaW1lem9uZSwgaW1wbHlIb3VyID0gMjApOiBQYXJzaW5nQ29tcG9uZW50cyB7XG4gICAgY29uc3QgY29tcG9uZW50ID0gbmV3IFBhcnNpbmdDb21wb25lbnRzKHJlZmVyZW5jZSwge30pO1xuICAgIGNvbXBvbmVudC5pbXBseShcIm1lcmlkaWVtXCIsIE1lcmlkaWVtLlBNKTtcbiAgICBjb21wb25lbnQuaW1wbHkoXCJob3VyXCIsIGltcGx5SG91cik7XG4gICAgY29tcG9uZW50LmFkZFRhZyhcImNhc3VhbFJlZmVyZW5jZS9ldmVuaW5nXCIpO1xuICAgIHJldHVybiBjb21wb25lbnQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB5ZXN0ZXJkYXlFdmVuaW5nKHJlZmVyZW5jZTogUmVmZXJlbmNlV2l0aFRpbWV6b25lLCBpbXBseUhvdXIgPSAyMCk6IFBhcnNpbmdDb21wb25lbnRzIHtcbiAgICBsZXQgdGFyZ2V0RGF0ZSA9IGRheWpzKHJlZmVyZW5jZS5nZXREYXRlV2l0aEFkanVzdGVkVGltZXpvbmUoKSk7XG4gICAgY29uc3QgY29tcG9uZW50ID0gbmV3IFBhcnNpbmdDb21wb25lbnRzKHJlZmVyZW5jZSwge30pO1xuICAgIHRhcmdldERhdGUgPSB0YXJnZXREYXRlLmFkZCgtMSwgXCJkYXlcIik7XG4gICAgYXNzaWduU2ltaWxhckRhdGUoY29tcG9uZW50LCB0YXJnZXREYXRlKTtcbiAgICBjb21wb25lbnQuaW1wbHkoXCJob3VyXCIsIGltcGx5SG91cik7XG4gICAgY29tcG9uZW50LmltcGx5KFwibWVyaWRpZW1cIiwgTWVyaWRpZW0uUE0pO1xuICAgIGNvbXBvbmVudC5hZGRUYWcoXCJjYXN1YWxSZWZlcmVuY2UveWVzdGVyZGF5XCIpO1xuICAgIGNvbXBvbmVudC5hZGRUYWcoXCJjYXN1YWxSZWZlcmVuY2UvZXZlbmluZ1wiKTtcbiAgICByZXR1cm4gY29tcG9uZW50O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbWlkbmlnaHQocmVmZXJlbmNlOiBSZWZlcmVuY2VXaXRoVGltZXpvbmUpOiBQYXJzaW5nQ29tcG9uZW50cyB7XG4gICAgY29uc3QgY29tcG9uZW50ID0gbmV3IFBhcnNpbmdDb21wb25lbnRzKHJlZmVyZW5jZSwge30pO1xuICAgIGNvbnN0IHRhcmdldERhdGUgPSBkYXlqcyhyZWZlcmVuY2UuZ2V0RGF0ZVdpdGhBZGp1c3RlZFRpbWV6b25lKCkpO1xuICAgIGlmICh0YXJnZXREYXRlLmhvdXIoKSA+IDIpIHtcbiAgICAgICAgLy8gVW5sZXNzIGl0J3MgdmVyeSBlYXJseSBtb3JuaW5nICgwfjJBTSksIHdlIGFzc3VtZSB0aGUgbWlkbmlnaHQgaXMgdGhlIGNvbWluZyBtaWRuaWdodC5cbiAgICAgICAgLy8gVGh1cywgaW5jcmVhc2luZyB0aGUgZGF5IGJ5IDEuXG4gICAgICAgIGltcGx5VGhlTmV4dERheShjb21wb25lbnQsIHRhcmdldERhdGUpO1xuICAgIH1cbiAgICBjb21wb25lbnQuYXNzaWduKFwiaG91clwiLCAwKTtcbiAgICBjb21wb25lbnQuaW1wbHkoXCJtaW51dGVcIiwgMCk7XG4gICAgY29tcG9uZW50LmltcGx5KFwic2Vjb25kXCIsIDApO1xuICAgIGNvbXBvbmVudC5pbXBseShcIm1pbGxpc2Vjb25kXCIsIDApO1xuICAgIGNvbXBvbmVudC5hZGRUYWcoXCJjYXN1YWxSZWZlcmVuY2UvbWlkbmlnaHRcIik7XG4gICAgcmV0dXJuIGNvbXBvbmVudDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG1vcm5pbmcocmVmZXJlbmNlOiBSZWZlcmVuY2VXaXRoVGltZXpvbmUsIGltcGx5SG91ciA9IDYpOiBQYXJzaW5nQ29tcG9uZW50cyB7XG4gICAgY29uc3QgY29tcG9uZW50ID0gbmV3IFBhcnNpbmdDb21wb25lbnRzKHJlZmVyZW5jZSwge30pO1xuICAgIGNvbXBvbmVudC5pbXBseShcIm1lcmlkaWVtXCIsIE1lcmlkaWVtLkFNKTtcbiAgICBjb21wb25lbnQuaW1wbHkoXCJob3VyXCIsIGltcGx5SG91cik7XG4gICAgY29tcG9uZW50LmltcGx5KFwibWludXRlXCIsIDApO1xuICAgIGNvbXBvbmVudC5pbXBseShcInNlY29uZFwiLCAwKTtcbiAgICBjb21wb25lbnQuaW1wbHkoXCJtaWxsaXNlY29uZFwiLCAwKTtcbiAgICBjb21wb25lbnQuYWRkVGFnKFwiY2FzdWFsUmVmZXJlbmNlL21vcm5pbmdcIik7XG4gICAgcmV0dXJuIGNvbXBvbmVudDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFmdGVybm9vbihyZWZlcmVuY2U6IFJlZmVyZW5jZVdpdGhUaW1lem9uZSwgaW1wbHlIb3VyID0gMTUpOiBQYXJzaW5nQ29tcG9uZW50cyB7XG4gICAgY29uc3QgY29tcG9uZW50ID0gbmV3IFBhcnNpbmdDb21wb25lbnRzKHJlZmVyZW5jZSwge30pO1xuICAgIGNvbXBvbmVudC5pbXBseShcIm1lcmlkaWVtXCIsIE1lcmlkaWVtLlBNKTtcbiAgICBjb21wb25lbnQuaW1wbHkoXCJob3VyXCIsIGltcGx5SG91cik7XG4gICAgY29tcG9uZW50LmltcGx5KFwibWludXRlXCIsIDApO1xuICAgIGNvbXBvbmVudC5pbXBseShcInNlY29uZFwiLCAwKTtcbiAgICBjb21wb25lbnQuaW1wbHkoXCJtaWxsaXNlY29uZFwiLCAwKTtcbiAgICBjb21wb25lbnQuYWRkVGFnKFwiY2FzdWFsUmVmZXJlbmNlL2FmdGVybm9vblwiKTtcbiAgICByZXR1cm4gY29tcG9uZW50O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbm9vbihyZWZlcmVuY2U6IFJlZmVyZW5jZVdpdGhUaW1lem9uZSk6IFBhcnNpbmdDb21wb25lbnRzIHtcbiAgICBjb25zdCBjb21wb25lbnQgPSBuZXcgUGFyc2luZ0NvbXBvbmVudHMocmVmZXJlbmNlLCB7fSk7XG4gICAgY29tcG9uZW50LmltcGx5KFwibWVyaWRpZW1cIiwgTWVyaWRpZW0uQU0pO1xuICAgIGNvbXBvbmVudC5pbXBseShcImhvdXJcIiwgMTIpO1xuICAgIGNvbXBvbmVudC5pbXBseShcIm1pbnV0ZVwiLCAwKTtcbiAgICBjb21wb25lbnQuaW1wbHkoXCJzZWNvbmRcIiwgMCk7XG4gICAgY29tcG9uZW50LmltcGx5KFwibWlsbGlzZWNvbmRcIiwgMCk7XG4gICAgY29tcG9uZW50LmFkZFRhZyhcImNhc3VhbFJlZmVyZW5jZS9ub29uXCIpO1xuICAgIHJldHVybiBjb21wb25lbnQ7XG59XG4iLCAiaW1wb3J0IHsgUGFyc2luZ0NvbnRleHQgfSBmcm9tIFwiLi4vLi4vLi4vY2hyb25vXCI7XG5pbXBvcnQgeyBBYnN0cmFjdFBhcnNlcldpdGhXb3JkQm91bmRhcnlDaGVja2luZyB9IGZyb20gXCIuLi8uLi8uLi9jb21tb24vcGFyc2Vycy9BYnN0cmFjdFBhcnNlcldpdGhXb3JkQm91bmRhcnlcIjtcbmltcG9ydCAqIGFzIGNhc3VhbFJlZmVyZW5jZXMgZnJvbSBcIi4uLy4uLy4uL2NvbW1vbi9jYXN1YWxSZWZlcmVuY2VzXCI7XG5cbmNvbnN0IFBBVFRFUk4gPSAvKD86dGhpcyk/XFxzezAsM30obW9ybmluZ3xhZnRlcm5vb258ZXZlbmluZ3xuaWdodHxtaWRuaWdodHxtaWRkYXl8bm9vbikoPz1cXFd8JCkvaTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRU5DYXN1YWxUaW1lUGFyc2VyIGV4dGVuZHMgQWJzdHJhY3RQYXJzZXJXaXRoV29yZEJvdW5kYXJ5Q2hlY2tpbmcge1xuICAgIGlubmVyUGF0dGVybigpIHtcbiAgICAgICAgcmV0dXJuIFBBVFRFUk47XG4gICAgfVxuICAgIGlubmVyRXh0cmFjdChjb250ZXh0OiBQYXJzaW5nQ29udGV4dCwgbWF0Y2g6IFJlZ0V4cE1hdGNoQXJyYXkpIHtcbiAgICAgICAgbGV0IGNvbXBvbmVudCA9IG51bGw7XG4gICAgICAgIHN3aXRjaCAobWF0Y2hbMV0udG9Mb3dlckNhc2UoKSkge1xuICAgICAgICAgICAgY2FzZSBcImFmdGVybm9vblwiOlxuICAgICAgICAgICAgICAgIGNvbXBvbmVudCA9IGNhc3VhbFJlZmVyZW5jZXMuYWZ0ZXJub29uKGNvbnRleHQucmVmZXJlbmNlKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCJldmVuaW5nXCI6XG4gICAgICAgICAgICBjYXNlIFwibmlnaHRcIjpcbiAgICAgICAgICAgICAgICBjb21wb25lbnQgPSBjYXN1YWxSZWZlcmVuY2VzLmV2ZW5pbmcoY29udGV4dC5yZWZlcmVuY2UpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcIm1pZG5pZ2h0XCI6XG4gICAgICAgICAgICAgICAgY29tcG9uZW50ID0gY2FzdWFsUmVmZXJlbmNlcy5taWRuaWdodChjb250ZXh0LnJlZmVyZW5jZSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwibW9ybmluZ1wiOlxuICAgICAgICAgICAgICAgIGNvbXBvbmVudCA9IGNhc3VhbFJlZmVyZW5jZXMubW9ybmluZyhjb250ZXh0LnJlZmVyZW5jZSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwibm9vblwiOlxuICAgICAgICAgICAgY2FzZSBcIm1pZGRheVwiOlxuICAgICAgICAgICAgICAgIGNvbXBvbmVudCA9IGNhc3VhbFJlZmVyZW5jZXMubm9vbihjb250ZXh0LnJlZmVyZW5jZSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNvbXBvbmVudCkge1xuICAgICAgICAgICAgY29tcG9uZW50LmFkZFRhZyhcInBhcnNlci9FTkNhc3VhbFRpbWVQYXJzZXJcIik7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGNvbXBvbmVudDtcbiAgICB9XG59XG4iLCAiaW1wb3J0IHsgV2Vla2RheSB9IGZyb20gXCIuLi8uLi90eXBlc1wiO1xuaW1wb3J0IHsgUGFyc2luZ0NvbXBvbmVudHMsIFJlZmVyZW5jZVdpdGhUaW1lem9uZSB9IGZyb20gXCIuLi8uLi9yZXN1bHRzXCI7XG5pbXBvcnQgeyBhZGRJbXBsaWVkVGltZVVuaXRzIH0gZnJvbSBcIi4uLy4uL3V0aWxzL3RpbWV1bml0c1wiO1xuXG4vKipcbiAqIFJldHVybnMgdGhlIHBhcnNpbmcgY29tcG9uZW50cyBhdCB0aGUgd2Vla2RheSAoY29uc2lkZXJpbmcgdGhlIG1vZGlmaWVyKS4gVGhlIHRpbWUgYW5kIHRpbWV6b25lIGlzIGFzc3VtZSB0byBiZVxuICogc2ltaWxhciB0byB0aGUgcmVmZXJlbmNlLlxuICogQHBhcmFtIHJlZmVyZW5jZVxuICogQHBhcmFtIHdlZWtkYXlcbiAqIEBwYXJhbSBtb2RpZmllciBcInRoaXNcIiwgXCJuZXh0XCIsIFwibGFzdFwiIG1vZGlmaWVyIHdvcmQuIElmIGVtcHR5LCByZXR1cm5zIHRoZSB3ZWVrZGF5IGNsb3Nlc3QgdG8gdGhlIGByZWZEYXRlYC5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVBhcnNpbmdDb21wb25lbnRzQXRXZWVrZGF5KFxuICAgIHJlZmVyZW5jZTogUmVmZXJlbmNlV2l0aFRpbWV6b25lLFxuICAgIHdlZWtkYXk6IFdlZWtkYXksXG4gICAgbW9kaWZpZXI/OiBcInRoaXNcIiB8IFwibmV4dFwiIHwgXCJsYXN0XCJcbik6IFBhcnNpbmdDb21wb25lbnRzIHtcbiAgICBjb25zdCByZWZEYXRlID0gcmVmZXJlbmNlLmdldERhdGVXaXRoQWRqdXN0ZWRUaW1lem9uZSgpO1xuICAgIGNvbnN0IGRheXNUb1dlZWtkYXkgPSBnZXREYXlzVG9XZWVrZGF5KHJlZkRhdGUsIHdlZWtkYXksIG1vZGlmaWVyKTtcblxuICAgIGxldCBjb21wb25lbnRzID0gbmV3IFBhcnNpbmdDb21wb25lbnRzKHJlZmVyZW5jZSk7XG4gICAgY29tcG9uZW50cyA9IGFkZEltcGxpZWRUaW1lVW5pdHMoY29tcG9uZW50cywgeyBcImRheVwiOiBkYXlzVG9XZWVrZGF5IH0pO1xuICAgIGNvbXBvbmVudHMuYXNzaWduKFwid2Vla2RheVwiLCB3ZWVrZGF5KTtcblxuICAgIHJldHVybiBjb21wb25lbnRzO1xufVxuXG4vKipcbiAqIFJldHVybnMgbnVtYmVyIG9mIGRheXMgZnJvbSByZWZEYXRlIHRvIHRoZSB3ZWVrZGF5LiBUaGUgcmVmRGF0ZSBkYXRlIGFuZCB0aW1lem9uZSBpbmZvcm1hdGlvbiBpcyB1c2VkLlxuICogQHBhcmFtIHJlZkRhdGVcbiAqIEBwYXJhbSB3ZWVrZGF5XG4gKiBAcGFyYW0gbW9kaWZpZXIgXCJ0aGlzXCIsIFwibmV4dFwiLCBcImxhc3RcIiBtb2RpZmllciB3b3JkLiBJZiBlbXB0eSwgcmV0dXJucyB0aGUgd2Vla2RheSBjbG9zZXN0IHRvIHRoZSBgcmVmRGF0ZWAuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBnZXREYXlzVG9XZWVrZGF5KHJlZkRhdGU6IERhdGUsIHdlZWtkYXk6IFdlZWtkYXksIG1vZGlmaWVyPzogXCJ0aGlzXCIgfCBcIm5leHRcIiB8IFwibGFzdFwiKTogbnVtYmVyIHtcbiAgICBjb25zdCByZWZXZWVrZGF5ID0gcmVmRGF0ZS5nZXREYXkoKSBhcyBXZWVrZGF5O1xuICAgIHN3aXRjaCAobW9kaWZpZXIpIHtcbiAgICAgICAgY2FzZSBcInRoaXNcIjpcbiAgICAgICAgICAgIHJldHVybiBnZXREYXlzRm9yd2FyZFRvV2Vla2RheShyZWZEYXRlLCB3ZWVrZGF5KTtcbiAgICAgICAgY2FzZSBcImxhc3RcIjpcbiAgICAgICAgICAgIHJldHVybiBnZXRCYWNrd2FyZERheXNUb1dlZWtkYXkocmVmRGF0ZSwgd2Vla2RheSk7XG4gICAgICAgIGNhc2UgXCJuZXh0XCI6XG4gICAgICAgICAgICAvLyBGcm9tIFN1bmRheSwgdGhlIG5leHQgU3VuZGF5IGlzIDcgZGF5cyBsYXRlci5cbiAgICAgICAgICAgIC8vIE90aGVyd2lzZSwgbmV4dCBNb24gaXMgMSBkYXlzIGxhdGVyLCBuZXh0IFR1ZXMgaXMgMiBkYXlzIGxhdGVyLCBhbmQgc28gb24uLi4sIChyZXR1cm4gZW51bSB2YWx1ZSlcbiAgICAgICAgICAgIGlmIChyZWZXZWVrZGF5ID09IFdlZWtkYXkuU1VOREFZKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHdlZWtkYXkgPT0gV2Vla2RheS5TVU5EQVkgPyA3IDogd2Vla2RheTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIEZyb20gU2F0dXJkYXksIHRoZSBuZXh0IFNhdHVyZGF5IGlzIDcgZGF5cyBsYXRlciwgdGhlIG5leHQgU3VuZGF5IGlzIDgtZGF5cyBsYXRlci5cbiAgICAgICAgICAgIC8vIE90aGVyd2lzZSwgbmV4dCBNb24gaXMgKDEgKyAxKSBkYXlzIGxhdGVyLCBuZXh0IFR1ZXMgaXMgKDEgKyAyKSBkYXlzIGxhdGVyLCBhbmQgc28gb24uLi4sXG4gICAgICAgICAgICAvLyAocmV0dXJuLCAyICsgW2VudW0gdmFsdWVdIGRheXMpXG4gICAgICAgICAgICBpZiAocmVmV2Vla2RheSA9PSBXZWVrZGF5LlNBVFVSREFZKSB7XG4gICAgICAgICAgICAgICAgaWYgKHdlZWtkYXkgPT0gV2Vla2RheS5TQVRVUkRBWSkgcmV0dXJuIDc7XG4gICAgICAgICAgICAgICAgaWYgKHdlZWtkYXkgPT0gV2Vla2RheS5TVU5EQVkpIHJldHVybiA4O1xuICAgICAgICAgICAgICAgIHJldHVybiAxICsgd2Vla2RheTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIEZyb20gd2Vla2RheXMsIG5leHQgTW9uIGlzIHRoZSBmb2xsb3dpbmcgd2VlaydzIE1vbiwgbmV4dCBUdWVzIHRoZSBmb2xsb3dpbmcgd2VlaydzIFR1ZXMsIGFuZCBzbyBvbi4uLlxuICAgICAgICAgICAgLy8gSWYgdGhlIHdlZWsncyB3ZWVrZGF5IGFscmVhZHkgcGFzc2VkICh3ZWVrZGF5IDwgcmVmV2Vla2RheSksIHdlIHNpbXBseSBjb3VudCBmb3J3YXJkIHRvIG5leHQgd2Vla1xuICAgICAgICAgICAgLy8gKHNpbWlsYXIgdG8gJ3RoaXMnKS4gT3RoZXJ3aXNlLCBjb3VudCBmb3J3YXJkIHRvIHRoaXMgd2VlaywgdGhlbiBhZGQgYW5vdGhlciA3IGRheXMuXG4gICAgICAgICAgICBpZiAod2Vla2RheSA8IHJlZldlZWtkYXkgJiYgd2Vla2RheSAhPSBXZWVrZGF5LlNVTkRBWSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBnZXREYXlzRm9yd2FyZFRvV2Vla2RheShyZWZEYXRlLCB3ZWVrZGF5KTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGdldERheXNGb3J3YXJkVG9XZWVrZGF5KHJlZkRhdGUsIHdlZWtkYXkpICsgNztcbiAgICAgICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGdldERheXNUb1dlZWtkYXlDbG9zZXN0KHJlZkRhdGUsIHdlZWtkYXkpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0RGF5c1RvV2Vla2RheUNsb3Nlc3QocmVmRGF0ZTogRGF0ZSwgd2Vla2RheTogV2Vla2RheSk6IG51bWJlciB7XG4gICAgY29uc3QgYmFja3dhcmQgPSBnZXRCYWNrd2FyZERheXNUb1dlZWtkYXkocmVmRGF0ZSwgd2Vla2RheSk7XG4gICAgY29uc3QgZm9yd2FyZCA9IGdldERheXNGb3J3YXJkVG9XZWVrZGF5KHJlZkRhdGUsIHdlZWtkYXkpO1xuXG4gICAgcmV0dXJuIGZvcndhcmQgPCAtYmFja3dhcmQgPyBmb3J3YXJkIDogYmFja3dhcmQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXREYXlzRm9yd2FyZFRvV2Vla2RheShyZWZEYXRlOiBEYXRlLCB3ZWVrZGF5OiBXZWVrZGF5KTogbnVtYmVyIHtcbiAgICBjb25zdCByZWZXZWVrZGF5ID0gcmVmRGF0ZS5nZXREYXkoKTtcbiAgICBsZXQgZm9yd2FyZENvdW50ID0gd2Vla2RheSAtIHJlZldlZWtkYXk7XG4gICAgaWYgKGZvcndhcmRDb3VudCA8IDApIHtcbiAgICAgICAgZm9yd2FyZENvdW50ICs9IDc7XG4gICAgfVxuICAgIHJldHVybiBmb3J3YXJkQ291bnQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRCYWNrd2FyZERheXNUb1dlZWtkYXkocmVmRGF0ZTogRGF0ZSwgd2Vla2RheTogV2Vla2RheSk6IG51bWJlciB7XG4gICAgY29uc3QgcmVmV2Vla2RheSA9IHJlZkRhdGUuZ2V0RGF5KCk7XG4gICAgbGV0IGJhY2t3YXJkQ291bnQgPSB3ZWVrZGF5IC0gcmVmV2Vla2RheTtcbiAgICBpZiAoYmFja3dhcmRDb3VudCA+PSAwKSB7XG4gICAgICAgIGJhY2t3YXJkQ291bnQgLT0gNztcbiAgICB9XG4gICAgcmV0dXJuIGJhY2t3YXJkQ291bnQ7XG59XG4iLCAiaW1wb3J0IHsgUGFyc2luZ0NvbnRleHQgfSBmcm9tIFwiLi4vLi4vLi4vY2hyb25vXCI7XG5pbXBvcnQgeyBQYXJzaW5nQ29tcG9uZW50cyB9IGZyb20gXCIuLi8uLi8uLi9yZXN1bHRzXCI7XG5pbXBvcnQgeyBXRUVLREFZX0RJQ1RJT05BUlkgfSBmcm9tIFwiLi4vY29uc3RhbnRzXCI7XG5pbXBvcnQgeyBtYXRjaEFueVBhdHRlcm4gfSBmcm9tIFwiLi4vLi4vLi4vdXRpbHMvcGF0dGVyblwiO1xuaW1wb3J0IHsgQWJzdHJhY3RQYXJzZXJXaXRoV29yZEJvdW5kYXJ5Q2hlY2tpbmcgfSBmcm9tIFwiLi4vLi4vLi4vY29tbW9uL3BhcnNlcnMvQWJzdHJhY3RQYXJzZXJXaXRoV29yZEJvdW5kYXJ5XCI7XG5pbXBvcnQgeyBjcmVhdGVQYXJzaW5nQ29tcG9uZW50c0F0V2Vla2RheSB9IGZyb20gXCIuLi8uLi8uLi9jb21tb24vY2FsY3VsYXRpb24vd2Vla2RheXNcIjtcbmltcG9ydCB7IFdlZWtkYXkgfSBmcm9tIFwiLi4vLi4vLi4vdHlwZXNcIjtcblxuY29uc3QgUEFUVEVSTiA9IG5ldyBSZWdFeHAoXG4gICAgXCIoPzooPzpcXFxcLHxcXFxcKHxcXFxcXHVGRjA4KVxcXFxzKik/XCIgK1xuICAgICAgICBcIig/Om9uXFxcXHMqPyk/XCIgK1xuICAgICAgICBcIig/Oih0aGlzfGxhc3R8cGFzdHxuZXh0KVxcXFxzKik/XCIgK1xuICAgICAgICBgKCR7bWF0Y2hBbnlQYXR0ZXJuKFdFRUtEQVlfRElDVElPTkFSWSl9fHdlZWtlbmR8d2Vla2RheSlgICtcbiAgICAgICAgXCIoPzpcXFxccyooPzpcXFxcLHxcXFxcKXxcXFxcXHVGRjA5KSk/XCIgK1xuICAgICAgICBcIig/OlxcXFxzKih0aGlzfGxhc3R8cGFzdHxuZXh0KVxcXFxzKndlZWspP1wiICtcbiAgICAgICAgXCIoPz1cXFxcV3wkKVwiLFxuICAgIFwiaVwiXG4pO1xuXG5jb25zdCBQUkVGSVhfR1JPVVAgPSAxO1xuY29uc3QgV0VFS0RBWV9HUk9VUCA9IDI7XG5jb25zdCBQT1NURklYX0dST1VQID0gMztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRU5XZWVrZGF5UGFyc2VyIGV4dGVuZHMgQWJzdHJhY3RQYXJzZXJXaXRoV29yZEJvdW5kYXJ5Q2hlY2tpbmcge1xuICAgIGlubmVyUGF0dGVybigpOiBSZWdFeHAge1xuICAgICAgICByZXR1cm4gUEFUVEVSTjtcbiAgICB9XG5cbiAgICBpbm5lckV4dHJhY3QoY29udGV4dDogUGFyc2luZ0NvbnRleHQsIG1hdGNoOiBSZWdFeHBNYXRjaEFycmF5KTogUGFyc2luZ0NvbXBvbmVudHMgfCBudWxsIHtcbiAgICAgICAgY29uc3QgcHJlZml4ID0gbWF0Y2hbUFJFRklYX0dST1VQXTtcbiAgICAgICAgY29uc3QgcG9zdGZpeCA9IG1hdGNoW1BPU1RGSVhfR1JPVVBdO1xuICAgICAgICBsZXQgbW9kaWZpZXJXb3JkID0gcHJlZml4IHx8IHBvc3RmaXg7XG4gICAgICAgIG1vZGlmaWVyV29yZCA9IG1vZGlmaWVyV29yZCB8fCBcIlwiO1xuICAgICAgICBtb2RpZmllcldvcmQgPSBtb2RpZmllcldvcmQudG9Mb3dlckNhc2UoKTtcblxuICAgICAgICBsZXQgbW9kaWZpZXIgPSBudWxsO1xuICAgICAgICBpZiAobW9kaWZpZXJXb3JkID09IFwibGFzdFwiIHx8IG1vZGlmaWVyV29yZCA9PSBcInBhc3RcIikge1xuICAgICAgICAgICAgbW9kaWZpZXIgPSBcImxhc3RcIjtcbiAgICAgICAgfSBlbHNlIGlmIChtb2RpZmllcldvcmQgPT0gXCJuZXh0XCIpIHtcbiAgICAgICAgICAgIG1vZGlmaWVyID0gXCJuZXh0XCI7XG4gICAgICAgIH0gZWxzZSBpZiAobW9kaWZpZXJXb3JkID09IFwidGhpc1wiKSB7XG4gICAgICAgICAgICBtb2RpZmllciA9IFwidGhpc1wiO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3Qgd2Vla2RheV93b3JkID0gbWF0Y2hbV0VFS0RBWV9HUk9VUF0udG9Mb3dlckNhc2UoKTtcbiAgICAgICAgbGV0IHdlZWtkYXk7XG4gICAgICAgIGlmIChXRUVLREFZX0RJQ1RJT05BUllbd2Vla2RheV93b3JkXSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICB3ZWVrZGF5ID0gV0VFS0RBWV9ESUNUSU9OQVJZW3dlZWtkYXlfd29yZF07XG4gICAgICAgIH0gZWxzZSBpZiAod2Vla2RheV93b3JkID09IFwid2Vla2VuZFwiKSB7XG4gICAgICAgICAgICAvLyBUaGlzIGRlcGVuZHMgb24gd2hhdCBkYXlzIGFyZSB3ZWVrZW5kIHNldHRpbmcsIGJ1dCB0eXBpY2FsbHk6XG4gICAgICAgICAgICAvLyAnVGhpcy9uZXh0IHdlZWtlbmQnIG1lYW5zIHRoZSBjb21pbmcgU2F0dXJkYXksICdsYXN0IHdlZWtlbmQnIG1lYW5zIGxhc3QgU3VuZGF5LlxuICAgICAgICAgICAgd2Vla2RheSA9IG1vZGlmaWVyID09IFwibGFzdFwiID8gV2Vla2RheS5TVU5EQVkgOiBXZWVrZGF5LlNBVFVSREFZO1xuICAgICAgICB9IGVsc2UgaWYgKHdlZWtkYXlfd29yZCA9PSBcIndlZWtkYXlcIikge1xuICAgICAgICAgICAgLy8gSW4gRW5nbGlzaCwgdGhlIFwid2Vla2RheVwiIG1lYW5zIGFueSBkYXkgb2YgdGhlIHdlZWsgZXhjZXB0IHdlZWtlbmQuXG4gICAgICAgICAgICAvLyBUaGlzIGFsc28gZGVwZW5kcyBvbiB3aGF0IGRheXMgYXJlIHdlZWtlbmQgc2V0dGluZywgYnV0IHR5cGljYWxseTpcbiAgICAgICAgICAgIC8vIC0gT24gd2Vla2VuZCByZWYsIHRoaXMgbWVhbnMgdGhlIGNvbWluZyBNb25kYXkgb3IgbGFzdCBGcmlkYXkuXG4gICAgICAgICAgICAvLyAtIE9uIHdlZWtkYXkgcmVmLCB0aGlzIG1lYW5zIHRoZSBuZXh0L2xhc3Qgd29ya2luZyBkYXkuXG4gICAgICAgICAgICBjb25zdCByZWZXZWVrZGF5ID0gY29udGV4dC5yZWZlcmVuY2UuZ2V0RGF0ZVdpdGhBZGp1c3RlZFRpbWV6b25lKCkuZ2V0RGF5KCk7XG4gICAgICAgICAgICBpZiAocmVmV2Vla2RheSA9PSBXZWVrZGF5LlNVTkRBWSB8fCByZWZXZWVrZGF5ID09IFdlZWtkYXkuU0FUVVJEQVkpIHtcbiAgICAgICAgICAgICAgICB3ZWVrZGF5ID0gbW9kaWZpZXIgPT0gXCJsYXN0XCIgPyBXZWVrZGF5LkZSSURBWSA6IFdlZWtkYXkuTU9OREFZO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB3ZWVrZGF5ID0gcmVmV2Vla2RheSAtIDE7XG4gICAgICAgICAgICAgICAgd2Vla2RheSA9IG1vZGlmaWVyID09IFwibGFzdFwiID8gd2Vla2RheSAtIDEgOiB3ZWVrZGF5ICsgMTtcbiAgICAgICAgICAgICAgICB3ZWVrZGF5ID0gKHdlZWtkYXkgJSA1KSArIDE7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBjcmVhdGVQYXJzaW5nQ29tcG9uZW50c0F0V2Vla2RheShjb250ZXh0LnJlZmVyZW5jZSwgd2Vla2RheSwgbW9kaWZpZXIpO1xuICAgIH1cbn1cbiIsICJpbXBvcnQgeyBUSU1FX1VOSVRfRElDVElPTkFSWSB9IGZyb20gXCIuLi9jb25zdGFudHNcIjtcbmltcG9ydCB7IFBhcnNpbmdDb250ZXh0IH0gZnJvbSBcIi4uLy4uLy4uL2Nocm9ub1wiO1xuaW1wb3J0IHsgUGFyc2luZ0NvbXBvbmVudHMgfSBmcm9tIFwiLi4vLi4vLi4vcmVzdWx0c1wiO1xuaW1wb3J0IGRheWpzIGZyb20gXCJkYXlqc1wiO1xuaW1wb3J0IHsgQWJzdHJhY3RQYXJzZXJXaXRoV29yZEJvdW5kYXJ5Q2hlY2tpbmcgfSBmcm9tIFwiLi4vLi4vLi4vY29tbW9uL3BhcnNlcnMvQWJzdHJhY3RQYXJzZXJXaXRoV29yZEJvdW5kYXJ5XCI7XG5pbXBvcnQgeyBtYXRjaEFueVBhdHRlcm4gfSBmcm9tIFwiLi4vLi4vLi4vdXRpbHMvcGF0dGVyblwiO1xuXG5jb25zdCBQQVRURVJOID0gbmV3IFJlZ0V4cChcbiAgICBgKHRoaXN8bGFzdHxwYXN0fG5leHR8YWZ0ZXJcXFxccyp0aGlzKVxcXFxzKigke21hdGNoQW55UGF0dGVybihUSU1FX1VOSVRfRElDVElPTkFSWSl9KSg/PVxcXFxzKilgICsgXCIoPz1cXFxcV3wkKVwiLFxuICAgIFwiaVwiXG4pO1xuXG5jb25zdCBNT0RJRklFUl9XT1JEX0dST1VQID0gMTtcbmNvbnN0IFJFTEFUSVZFX1dPUkRfR1JPVVAgPSAyO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBFTlJlbGF0aXZlRGF0ZUZvcm1hdFBhcnNlciBleHRlbmRzIEFic3RyYWN0UGFyc2VyV2l0aFdvcmRCb3VuZGFyeUNoZWNraW5nIHtcbiAgICBpbm5lclBhdHRlcm4oKTogUmVnRXhwIHtcbiAgICAgICAgcmV0dXJuIFBBVFRFUk47XG4gICAgfVxuXG4gICAgaW5uZXJFeHRyYWN0KGNvbnRleHQ6IFBhcnNpbmdDb250ZXh0LCBtYXRjaDogUmVnRXhwTWF0Y2hBcnJheSk6IFBhcnNpbmdDb21wb25lbnRzIHtcbiAgICAgICAgY29uc3QgbW9kaWZpZXIgPSBtYXRjaFtNT0RJRklFUl9XT1JEX0dST1VQXS50b0xvd2VyQ2FzZSgpO1xuICAgICAgICBjb25zdCB1bml0V29yZCA9IG1hdGNoW1JFTEFUSVZFX1dPUkRfR1JPVVBdLnRvTG93ZXJDYXNlKCk7XG4gICAgICAgIGNvbnN0IHRpbWV1bml0ID0gVElNRV9VTklUX0RJQ1RJT05BUllbdW5pdFdvcmRdO1xuXG4gICAgICAgIGlmIChtb2RpZmllciA9PSBcIm5leHRcIiB8fCBtb2RpZmllci5zdGFydHNXaXRoKFwiYWZ0ZXJcIikpIHtcbiAgICAgICAgICAgIGNvbnN0IHRpbWVVbml0cyA9IHt9O1xuICAgICAgICAgICAgdGltZVVuaXRzW3RpbWV1bml0XSA9IDE7XG4gICAgICAgICAgICByZXR1cm4gUGFyc2luZ0NvbXBvbmVudHMuY3JlYXRlUmVsYXRpdmVGcm9tUmVmZXJlbmNlKGNvbnRleHQucmVmZXJlbmNlLCB0aW1lVW5pdHMpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKG1vZGlmaWVyID09IFwibGFzdFwiIHx8IG1vZGlmaWVyID09IFwicGFzdFwiKSB7XG4gICAgICAgICAgICBjb25zdCB0aW1lVW5pdHMgPSB7fTtcbiAgICAgICAgICAgIHRpbWVVbml0c1t0aW1ldW5pdF0gPSAtMTtcbiAgICAgICAgICAgIHJldHVybiBQYXJzaW5nQ29tcG9uZW50cy5jcmVhdGVSZWxhdGl2ZUZyb21SZWZlcmVuY2UoY29udGV4dC5yZWZlcmVuY2UsIHRpbWVVbml0cyk7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBjb21wb25lbnRzID0gY29udGV4dC5jcmVhdGVQYXJzaW5nQ29tcG9uZW50cygpO1xuICAgICAgICBsZXQgZGF0ZSA9IGRheWpzKGNvbnRleHQucmVmZXJlbmNlLmluc3RhbnQpO1xuXG4gICAgICAgIC8vIFRoaXMgd2Vla1xuICAgICAgICBpZiAodW5pdFdvcmQubWF0Y2goL3dlZWsvaSkpIHtcbiAgICAgICAgICAgIGRhdGUgPSBkYXRlLmFkZCgtZGF0ZS5nZXQoXCJkXCIpLCBcImRcIik7XG4gICAgICAgICAgICBjb21wb25lbnRzLmltcGx5KFwiZGF5XCIsIGRhdGUuZGF0ZSgpKTtcbiAgICAgICAgICAgIGNvbXBvbmVudHMuaW1wbHkoXCJtb250aFwiLCBkYXRlLm1vbnRoKCkgKyAxKTtcbiAgICAgICAgICAgIGNvbXBvbmVudHMuaW1wbHkoXCJ5ZWFyXCIsIGRhdGUueWVhcigpKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFRoaXMgbW9udGhcbiAgICAgICAgZWxzZSBpZiAodW5pdFdvcmQubWF0Y2goL21vbnRoL2kpKSB7XG4gICAgICAgICAgICBkYXRlID0gZGF0ZS5hZGQoLWRhdGUuZGF0ZSgpICsgMSwgXCJkXCIpO1xuICAgICAgICAgICAgY29tcG9uZW50cy5pbXBseShcImRheVwiLCBkYXRlLmRhdGUoKSk7XG4gICAgICAgICAgICBjb21wb25lbnRzLmFzc2lnbihcInllYXJcIiwgZGF0ZS55ZWFyKCkpO1xuICAgICAgICAgICAgY29tcG9uZW50cy5hc3NpZ24oXCJtb250aFwiLCBkYXRlLm1vbnRoKCkgKyAxKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFRoaXMgeWVhclxuICAgICAgICBlbHNlIGlmICh1bml0V29yZC5tYXRjaCgveWVhci9pKSkge1xuICAgICAgICAgICAgZGF0ZSA9IGRhdGUuYWRkKC1kYXRlLmRhdGUoKSArIDEsIFwiZFwiKTtcbiAgICAgICAgICAgIGRhdGUgPSBkYXRlLmFkZCgtZGF0ZS5tb250aCgpLCBcIm1vbnRoXCIpO1xuXG4gICAgICAgICAgICBjb21wb25lbnRzLmltcGx5KFwiZGF5XCIsIGRhdGUuZGF0ZSgpKTtcbiAgICAgICAgICAgIGNvbXBvbmVudHMuaW1wbHkoXCJtb250aFwiLCBkYXRlLm1vbnRoKCkgKyAxKTtcbiAgICAgICAgICAgIGNvbXBvbmVudHMuYXNzaWduKFwieWVhclwiLCBkYXRlLnllYXIoKSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gY29tcG9uZW50cztcbiAgICB9XG59XG4iLCAiaW1wb3J0IHsgUGFyc2VyLCBQYXJzaW5nQ29udGV4dCB9IGZyb20gXCIuLi8uLi9jaHJvbm9cIjtcbmltcG9ydCB7IFBhcnNpbmdSZXN1bHQgfSBmcm9tIFwiLi4vLi4vcmVzdWx0c1wiO1xuaW1wb3J0IHsgZmluZE1vc3RMaWtlbHlBRFllYXIsIGZpbmRZZWFyQ2xvc2VzdFRvUmVmIH0gZnJvbSBcIi4uLy4uL2NhbGN1bGF0aW9uL3llYXJzXCI7XG5cbi8qKlxuICogRGF0ZSBmb3JtYXQgd2l0aCBzbGFzaCBcIi9cIiAob3IgZG90IFwiLlwiKSBiZXR3ZWVuIG51bWJlcnMuXG4gKiBGb3IgZXhhbXBsZXM6XG4gKiAtIDcvMTBcbiAqIC0gNy8xMi8yMDIwXG4gKiAtIDcuMTIuMjAyMFxuICovXG5jb25zdCBQQVRURVJOID0gbmV3IFJlZ0V4cChcbiAgICBcIihbXlxcXFxkXXxeKVwiICtcbiAgICAgICAgXCIoWzAtM117MCwxfVswLTldezF9KVtcXFxcL1xcXFwuXFxcXC1dKFswLTNdezAsMX1bMC05XXsxfSlcIiArXG4gICAgICAgIFwiKD86W1xcXFwvXFxcXC5cXFxcLV0oWzAtOV17NH18WzAtOV17Mn0pKT9cIiArXG4gICAgICAgIFwiKFxcXFxXfCQpXCIsXG4gICAgXCJpXCJcbik7XG5cbmNvbnN0IE9QRU5JTkdfR1JPVVAgPSAxO1xuY29uc3QgRU5ESU5HX0dST1VQID0gNTtcblxuY29uc3QgRklSU1RfTlVNQkVSU19HUk9VUCA9IDI7XG5jb25zdCBTRUNPTkRfTlVNQkVSU19HUk9VUCA9IDM7XG5cbmNvbnN0IFlFQVJfR1JPVVAgPSA0O1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTbGFzaERhdGVGb3JtYXRQYXJzZXIgaW1wbGVtZW50cyBQYXJzZXIge1xuICAgIGdyb3VwTnVtYmVyTW9udGg6IG51bWJlcjtcbiAgICBncm91cE51bWJlckRheTogbnVtYmVyO1xuXG4gICAgY29uc3RydWN0b3IobGl0dGxlRW5kaWFuOiBib29sZWFuKSB7XG4gICAgICAgIHRoaXMuZ3JvdXBOdW1iZXJNb250aCA9IGxpdHRsZUVuZGlhbiA/IFNFQ09ORF9OVU1CRVJTX0dST1VQIDogRklSU1RfTlVNQkVSU19HUk9VUDtcbiAgICAgICAgdGhpcy5ncm91cE51bWJlckRheSA9IGxpdHRsZUVuZGlhbiA/IEZJUlNUX05VTUJFUlNfR1JPVVAgOiBTRUNPTkRfTlVNQkVSU19HUk9VUDtcbiAgICB9XG5cbiAgICBwYXR0ZXJuKCk6IFJlZ0V4cCB7XG4gICAgICAgIHJldHVybiBQQVRURVJOO1xuICAgIH1cblxuICAgIGV4dHJhY3QoY29udGV4dDogUGFyc2luZ0NvbnRleHQsIG1hdGNoOiBSZWdFeHBNYXRjaEFycmF5KTogUGFyc2luZ1Jlc3VsdCB7XG4gICAgICAgIC8vIEJlY2F1c2Ugb2YgaG93IHBhdHRlcm4gaXMgZXhlY3V0ZWQgb24gcmVtYWluaW5nIHRleHQgaW4gYGNocm9uby50c2AsIHRoZSBjaGFyYWN0ZXIgYmVmb3JlIHRoZSBtYXRjaCBjb3VsZFxuICAgICAgICAvLyBzdGlsbCBiZSBhIG51bWJlciAoZS5nLiBYW1gvWVkvWlpdIG9yIFhYWy9ZWS9aWl0gb3IgW1hYL1lZL11aWikuIFdlIHdhbnQgdG8gY2hlY2sgYW5kIHNraXAgdGhlbS5cbiAgICAgICAgY29uc3QgaW5kZXggPSBtYXRjaC5pbmRleCArIG1hdGNoW09QRU5JTkdfR1JPVVBdLmxlbmd0aDtcbiAgICAgICAgY29uc3QgaW5kZXhFbmQgPSBtYXRjaC5pbmRleCArIG1hdGNoWzBdLmxlbmd0aCAtIG1hdGNoW0VORElOR19HUk9VUF0ubGVuZ3RoO1xuICAgICAgICBpZiAoaW5kZXggPiAwKSB7XG4gICAgICAgICAgICBjb25zdCB0ZXh0QmVmb3JlID0gY29udGV4dC50ZXh0LnN1YnN0cmluZygwLCBpbmRleCk7XG4gICAgICAgICAgICBpZiAodGV4dEJlZm9yZS5tYXRjaChcIlxcXFxkLz8kXCIpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmIChpbmRleEVuZCA8IGNvbnRleHQudGV4dC5sZW5ndGgpIHtcbiAgICAgICAgICAgIGNvbnN0IHRleHRBZnRlciA9IGNvbnRleHQudGV4dC5zdWJzdHJpbmcoaW5kZXhFbmQpO1xuICAgICAgICAgICAgaWYgKHRleHRBZnRlci5tYXRjaChcIl4vP1xcXFxkXCIpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgdGV4dCA9IGNvbnRleHQudGV4dC5zdWJzdHJpbmcoaW5kZXgsIGluZGV4RW5kKTtcblxuICAgICAgICAvLyAnMS4xMicsICcxLjEyLjEyJyBpcyBtb3JlIGxpa2UgYSB2ZXJzaW9uIG51bWJlcnNcbiAgICAgICAgaWYgKHRleHQubWF0Y2goL15cXGRcXC5cXGQkLykgfHwgdGV4dC5tYXRjaCgvXlxcZFxcLlxcZHsxLDJ9XFwuXFxkezEsMn1cXHMqJC8pKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICAvLyBNTS9kZCAtPiBPS1xuICAgICAgICAvLyBNTS5kZCAtPiBOR1xuICAgICAgICBpZiAoIW1hdGNoW1lFQVJfR1JPVVBdICYmIHRleHQuaW5kZXhPZihcIi9cIikgPCAwKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCByZXN1bHQgPSBjb250ZXh0LmNyZWF0ZVBhcnNpbmdSZXN1bHQoaW5kZXgsIHRleHQpO1xuICAgICAgICBsZXQgbW9udGggPSBwYXJzZUludChtYXRjaFt0aGlzLmdyb3VwTnVtYmVyTW9udGhdKTtcbiAgICAgICAgbGV0IGRheSA9IHBhcnNlSW50KG1hdGNoW3RoaXMuZ3JvdXBOdW1iZXJEYXldKTtcbiAgICAgICAgaWYgKG1vbnRoIDwgMSB8fCBtb250aCA+IDEyKSB7XG4gICAgICAgICAgICBpZiAobW9udGggPiAxMikge1xuICAgICAgICAgICAgICAgIGlmIChkYXkgPj0gMSAmJiBkYXkgPD0gMTIgJiYgbW9udGggPD0gMzEpIHtcbiAgICAgICAgICAgICAgICAgICAgW2RheSwgbW9udGhdID0gW21vbnRoLCBkYXldO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChkYXkgPCAxIHx8IGRheSA+IDMxKSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuXG4gICAgICAgIHJlc3VsdC5zdGFydC5hc3NpZ24oXCJkYXlcIiwgZGF5KTtcbiAgICAgICAgcmVzdWx0LnN0YXJ0LmFzc2lnbihcIm1vbnRoXCIsIG1vbnRoKTtcblxuICAgICAgICBpZiAobWF0Y2hbWUVBUl9HUk9VUF0pIHtcbiAgICAgICAgICAgIGNvbnN0IHJhd1llYXJOdW1iZXIgPSBwYXJzZUludChtYXRjaFtZRUFSX0dST1VQXSk7XG4gICAgICAgICAgICBjb25zdCB5ZWFyID0gZmluZE1vc3RMaWtlbHlBRFllYXIocmF3WWVhck51bWJlcik7XG4gICAgICAgICAgICByZXN1bHQuc3RhcnQuYXNzaWduKFwieWVhclwiLCB5ZWFyKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbnN0IHllYXIgPSBmaW5kWWVhckNsb3Nlc3RUb1JlZihjb250ZXh0LnJlZkRhdGUsIGRheSwgbW9udGgpO1xuICAgICAgICAgICAgcmVzdWx0LnN0YXJ0LmltcGx5KFwieWVhclwiLCB5ZWFyKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiByZXN1bHQuYWRkVGFnKFwicGFyc2VyL1NsYXNoRGF0ZUZvcm1hdFBhcnNlclwiKTtcbiAgICB9XG59XG4iLCAiaW1wb3J0IHsgVElNRV9VTklUU19QQVRURVJOLCBwYXJzZVRpbWVVbml0cywgVElNRV9VTklUU19OT19BQkJSX1BBVFRFUk4gfSBmcm9tIFwiLi4vY29uc3RhbnRzXCI7XG5pbXBvcnQgeyBQYXJzaW5nQ29udGV4dCB9IGZyb20gXCIuLi8uLi8uLi9jaHJvbm9cIjtcbmltcG9ydCB7IFBhcnNpbmdDb21wb25lbnRzIH0gZnJvbSBcIi4uLy4uLy4uL3Jlc3VsdHNcIjtcbmltcG9ydCB7IEFic3RyYWN0UGFyc2VyV2l0aFdvcmRCb3VuZGFyeUNoZWNraW5nIH0gZnJvbSBcIi4uLy4uLy4uL2NvbW1vbi9wYXJzZXJzL0Fic3RyYWN0UGFyc2VyV2l0aFdvcmRCb3VuZGFyeVwiO1xuaW1wb3J0IHsgcmV2ZXJzZVRpbWVVbml0cyB9IGZyb20gXCIuLi8uLi8uLi91dGlscy90aW1ldW5pdHNcIjtcblxuY29uc3QgUEFUVEVSTiA9IG5ldyBSZWdFeHAoYCh0aGlzfGxhc3R8cGFzdHxuZXh0fGFmdGVyfFxcXFwrfC0pXFxcXHMqKCR7VElNRV9VTklUU19QQVRURVJOfSkoPz1cXFxcV3wkKWAsIFwiaVwiKTtcbmNvbnN0IFBBVFRFUk5fTk9fQUJCUiA9IG5ldyBSZWdFeHAoXG4gICAgYCh0aGlzfGxhc3R8cGFzdHxuZXh0fGFmdGVyfFxcXFwrfC0pXFxcXHMqKCR7VElNRV9VTklUU19OT19BQkJSX1BBVFRFUk59KSg/PVxcXFxXfCQpYCxcbiAgICBcImlcIlxuKTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRU5UaW1lVW5pdENhc3VhbFJlbGF0aXZlRm9ybWF0UGFyc2VyIGV4dGVuZHMgQWJzdHJhY3RQYXJzZXJXaXRoV29yZEJvdW5kYXJ5Q2hlY2tpbmcge1xuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgYWxsb3dBYmJyZXZpYXRpb25zOiBib29sZWFuID0gdHJ1ZSkge1xuICAgICAgICBzdXBlcigpO1xuICAgIH1cblxuICAgIGlubmVyUGF0dGVybigpOiBSZWdFeHAge1xuICAgICAgICByZXR1cm4gdGhpcy5hbGxvd0FiYnJldmlhdGlvbnMgPyBQQVRURVJOIDogUEFUVEVSTl9OT19BQkJSO1xuICAgIH1cblxuICAgIGlubmVyRXh0cmFjdChjb250ZXh0OiBQYXJzaW5nQ29udGV4dCwgbWF0Y2g6IFJlZ0V4cE1hdGNoQXJyYXkpIHtcbiAgICAgICAgY29uc3QgcHJlZml4ID0gbWF0Y2hbMV0udG9Mb3dlckNhc2UoKTtcbiAgICAgICAgbGV0IHRpbWVVbml0cyA9IHBhcnNlVGltZVVuaXRzKG1hdGNoWzJdKTtcbiAgICAgICAgaWYgKCF0aW1lVW5pdHMpIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG4gICAgICAgIHN3aXRjaCAocHJlZml4KSB7XG4gICAgICAgICAgICBjYXNlIFwibGFzdFwiOlxuICAgICAgICAgICAgY2FzZSBcInBhc3RcIjpcbiAgICAgICAgICAgIGNhc2UgXCItXCI6XG4gICAgICAgICAgICAgICAgdGltZVVuaXRzID0gcmV2ZXJzZVRpbWVVbml0cyh0aW1lVW5pdHMpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBQYXJzaW5nQ29tcG9uZW50cy5jcmVhdGVSZWxhdGl2ZUZyb21SZWZlcmVuY2UoY29udGV4dC5yZWZlcmVuY2UsIHRpbWVVbml0cyk7XG4gICAgfVxufVxuIiwgImltcG9ydCB7IE1lcmdpbmdSZWZpbmVyIH0gZnJvbSBcIi4uLy4uLy4uL2NvbW1vbi9hYnN0cmFjdFJlZmluZXJzXCI7XG5pbXBvcnQgeyBQYXJzaW5nQ29tcG9uZW50cywgUGFyc2luZ1Jlc3VsdCwgUmVmZXJlbmNlV2l0aFRpbWV6b25lIH0gZnJvbSBcIi4uLy4uLy4uL3Jlc3VsdHNcIjtcbmltcG9ydCB7IHBhcnNlVGltZVVuaXRzIH0gZnJvbSBcIi4uL2NvbnN0YW50c1wiO1xuaW1wb3J0IHsgcmV2ZXJzZVRpbWVVbml0cyB9IGZyb20gXCIuLi8uLi8uLi91dGlscy90aW1ldW5pdHNcIjtcblxuZnVuY3Rpb24gSXNQb3NpdGl2ZUZvbGxvd2luZ1JlZmVyZW5jZShyZXN1bHQ6IFBhcnNpbmdSZXN1bHQpOiBib29sZWFuIHtcbiAgICByZXR1cm4gcmVzdWx0LnRleHQubWF0Y2goL15bKy1dL2kpICE9IG51bGw7XG59XG5cbmZ1bmN0aW9uIElzTmVnYXRpdmVGb2xsb3dpbmdSZWZlcmVuY2UocmVzdWx0OiBQYXJzaW5nUmVzdWx0KTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHJlc3VsdC50ZXh0Lm1hdGNoKC9eLS9pKSAhPSBudWxsO1xufVxuXG4vKipcbiAqIE1lcmdlcyBhIHJlbGF0aXZlIGRhdGEvdGltZSB0aGF0IGNvbWVzIGFmdGVyIGFuIGFic29sdXRlIGRhdGUuXG4gKiAtIFsyMDIwLTAyLTEzXSBbKzIgd2Vla3NdXG4gKiAtIFtuZXh0IHR1ZXNkYXldIFsrMTAgZGF5c11cbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRU5NZXJnZVJlbGF0aXZlQWZ0ZXJEYXRlUmVmaW5lciBleHRlbmRzIE1lcmdpbmdSZWZpbmVyIHtcbiAgICBzaG91bGRNZXJnZVJlc3VsdHModGV4dEJldHdlZW46IHN0cmluZywgY3VycmVudFJlc3VsdDogUGFyc2luZ1Jlc3VsdCwgbmV4dFJlc3VsdDogUGFyc2luZ1Jlc3VsdCk6IGJvb2xlYW4ge1xuICAgICAgICBpZiAoIXRleHRCZXR3ZWVuLm1hdGNoKC9eXFxzKiQvaSkpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBJc1Bvc2l0aXZlRm9sbG93aW5nUmVmZXJlbmNlKG5leHRSZXN1bHQpIHx8IElzTmVnYXRpdmVGb2xsb3dpbmdSZWZlcmVuY2UobmV4dFJlc3VsdCk7XG4gICAgfVxuXG4gICAgbWVyZ2VSZXN1bHRzKHRleHRCZXR3ZWVuOiBzdHJpbmcsIGN1cnJlbnRSZXN1bHQ6IFBhcnNpbmdSZXN1bHQsIG5leHRSZXN1bHQ6IFBhcnNpbmdSZXN1bHQsIGNvbnRleHQpOiBQYXJzaW5nUmVzdWx0IHtcbiAgICAgICAgbGV0IHRpbWVVbml0cyA9IHBhcnNlVGltZVVuaXRzKG5leHRSZXN1bHQudGV4dCk7XG4gICAgICAgIGlmIChJc05lZ2F0aXZlRm9sbG93aW5nUmVmZXJlbmNlKG5leHRSZXN1bHQpKSB7XG4gICAgICAgICAgICB0aW1lVW5pdHMgPSByZXZlcnNlVGltZVVuaXRzKHRpbWVVbml0cyk7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBjb21wb25lbnRzID0gUGFyc2luZ0NvbXBvbmVudHMuY3JlYXRlUmVsYXRpdmVGcm9tUmVmZXJlbmNlKFxuICAgICAgICAgICAgbmV3IFJlZmVyZW5jZVdpdGhUaW1lem9uZShjdXJyZW50UmVzdWx0LnN0YXJ0LmRhdGUoKSksXG4gICAgICAgICAgICB0aW1lVW5pdHNcbiAgICAgICAgKTtcblxuICAgICAgICByZXR1cm4gbmV3IFBhcnNpbmdSZXN1bHQoXG4gICAgICAgICAgICBjdXJyZW50UmVzdWx0LnJlZmVyZW5jZSxcbiAgICAgICAgICAgIGN1cnJlbnRSZXN1bHQuaW5kZXgsXG4gICAgICAgICAgICBgJHtjdXJyZW50UmVzdWx0LnRleHR9JHt0ZXh0QmV0d2Vlbn0ke25leHRSZXN1bHQudGV4dH1gLFxuICAgICAgICAgICAgY29tcG9uZW50c1xuICAgICAgICApO1xuICAgIH1cbn1cbiIsICJpbXBvcnQgeyBNZXJnaW5nUmVmaW5lciB9IGZyb20gXCIuLi8uLi8uLi9jb21tb24vYWJzdHJhY3RSZWZpbmVyc1wiO1xuaW1wb3J0IHsgUGFyc2luZ0NvbXBvbmVudHMsIFBhcnNpbmdSZXN1bHQsIFJlZmVyZW5jZVdpdGhUaW1lem9uZSB9IGZyb20gXCIuLi8uLi8uLi9yZXN1bHRzXCI7XG5pbXBvcnQgeyBwYXJzZVRpbWVVbml0cyB9IGZyb20gXCIuLi9jb25zdGFudHNcIjtcbmltcG9ydCB7IHJldmVyc2VUaW1lVW5pdHMgfSBmcm9tIFwiLi4vLi4vLi4vdXRpbHMvdGltZXVuaXRzXCI7XG5cbmZ1bmN0aW9uIGhhc0ltcGxpZWRFYXJsaWVyUmVmZXJlbmNlRGF0ZShyZXN1bHQ6IFBhcnNpbmdSZXN1bHQpOiBib29sZWFuIHtcbiAgICByZXR1cm4gcmVzdWx0LnRleHQubWF0Y2goL1xccysoYmVmb3JlfGZyb20pJC9pKSAhPSBudWxsO1xufVxuXG5mdW5jdGlvbiBoYXNJbXBsaWVkTGF0ZXJSZWZlcmVuY2VEYXRlKHJlc3VsdDogUGFyc2luZ1Jlc3VsdCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiByZXN1bHQudGV4dC5tYXRjaCgvXFxzKyhhZnRlcnxzaW5jZSkkL2kpICE9IG51bGw7XG59XG5cbi8qKlxuICogTWVyZ2VzIGEgcmVsYXRpdmUgZGF0YS90aW1lIHRoYXQgZm9sbG93IGJ5IGFuIGFic29sdXRlIGRhdGUuXG4gKiAtIFsyIHdlZWtzIGJlZm9yZV0gWzIwMjAtMDItMTNdXG4gKiAtIFsyIGRheXMgYWZ0ZXJdIFtuZXh0IEZyaWRheV1cbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRU5NZXJnZVJlbGF0aXZlRm9sbG93QnlEYXRlUmVmaW5lciBleHRlbmRzIE1lcmdpbmdSZWZpbmVyIHtcbiAgICBwYXR0ZXJuQmV0d2VlbigpOiBSZWdFeHAge1xuICAgICAgICByZXR1cm4gL15cXHMqJC9pO1xuICAgIH1cblxuICAgIHNob3VsZE1lcmdlUmVzdWx0cyh0ZXh0QmV0d2Vlbjogc3RyaW5nLCBjdXJyZW50UmVzdWx0OiBQYXJzaW5nUmVzdWx0LCBuZXh0UmVzdWx0OiBQYXJzaW5nUmVzdWx0KTogYm9vbGVhbiB7XG4gICAgICAgIC8vIERhdGVzIG5lZWQgdG8gYmUgbmV4dCB0byBlYWNoIG90aGVyIHRvIGdldCBtZXJnZWRcbiAgICAgICAgaWYgKCF0ZXh0QmV0d2Vlbi5tYXRjaCh0aGlzLnBhdHRlcm5CZXR3ZWVuKCkpKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBDaGVjayBpZiBhbnkgcmVsYXRpdmUgdG9rZW5zIHdlcmUgc3dhbGxvd2VkIGJ5IHRoZSBmaXJzdCBkYXRlLlxuICAgICAgICAvLyBFLmcuIFs8cmVsYXRpdmVfZGF0ZTE+IGZyb21dIFs8ZGF0ZTI+XVxuICAgICAgICBpZiAoIWhhc0ltcGxpZWRFYXJsaWVyUmVmZXJlbmNlRGF0ZShjdXJyZW50UmVzdWx0KSAmJiAhaGFzSW1wbGllZExhdGVyUmVmZXJlbmNlRGF0ZShjdXJyZW50UmVzdWx0KSkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gbWFrZSBzdXJlIHRoYXQgPGRhdGUyPiBpbXBsaWVzIGFuIGFic29sdXRlIGRhdGVcbiAgICAgICAgcmV0dXJuICEhbmV4dFJlc3VsdC5zdGFydC5nZXQoXCJkYXlcIikgJiYgISFuZXh0UmVzdWx0LnN0YXJ0LmdldChcIm1vbnRoXCIpICYmICEhbmV4dFJlc3VsdC5zdGFydC5nZXQoXCJ5ZWFyXCIpO1xuICAgIH1cblxuICAgIG1lcmdlUmVzdWx0cyh0ZXh0QmV0d2Vlbjogc3RyaW5nLCBjdXJyZW50UmVzdWx0OiBQYXJzaW5nUmVzdWx0LCBuZXh0UmVzdWx0OiBQYXJzaW5nUmVzdWx0KTogUGFyc2luZ1Jlc3VsdCB7XG4gICAgICAgIGxldCB0aW1lVW5pdHMgPSBwYXJzZVRpbWVVbml0cyhjdXJyZW50UmVzdWx0LnRleHQpO1xuICAgICAgICBpZiAoaGFzSW1wbGllZEVhcmxpZXJSZWZlcmVuY2VEYXRlKGN1cnJlbnRSZXN1bHQpKSB7XG4gICAgICAgICAgICB0aW1lVW5pdHMgPSByZXZlcnNlVGltZVVuaXRzKHRpbWVVbml0cyk7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBjb21wb25lbnRzID0gUGFyc2luZ0NvbXBvbmVudHMuY3JlYXRlUmVsYXRpdmVGcm9tUmVmZXJlbmNlKFxuICAgICAgICAgICAgbmV3IFJlZmVyZW5jZVdpdGhUaW1lem9uZShuZXh0UmVzdWx0LnN0YXJ0LmRhdGUoKSksXG4gICAgICAgICAgICB0aW1lVW5pdHNcbiAgICAgICAgKTtcblxuICAgICAgICByZXR1cm4gbmV3IFBhcnNpbmdSZXN1bHQoXG4gICAgICAgICAgICBuZXh0UmVzdWx0LnJlZmVyZW5jZSxcbiAgICAgICAgICAgIGN1cnJlbnRSZXN1bHQuaW5kZXgsXG4gICAgICAgICAgICBgJHtjdXJyZW50UmVzdWx0LnRleHR9JHt0ZXh0QmV0d2Vlbn0ke25leHRSZXN1bHQudGV4dH1gLFxuICAgICAgICAgICAgY29tcG9uZW50c1xuICAgICAgICApO1xuICAgIH1cbn1cbiIsICJpbXBvcnQgeyBQYXJzaW5nQ29udGV4dCwgUmVmaW5lciB9IGZyb20gXCIuLi8uLi8uLi9jaHJvbm9cIjtcbmltcG9ydCB7IFBhcnNpbmdSZXN1bHQgfSBmcm9tIFwiLi4vLi4vLi4vcmVzdWx0c1wiO1xuaW1wb3J0IHsgWUVBUl9QQVRURVJOLCBwYXJzZVllYXIgfSBmcm9tIFwiLi4vY29uc3RhbnRzXCI7XG5cbmNvbnN0IFlFQVJfU1VGRklYX1BBVFRFUk4gPSBuZXcgUmVnRXhwKGBeXFxcXHMqKCR7WUVBUl9QQVRURVJOfSlgLCBcImlcIik7XG5jb25zdCBZRUFSX0dST1VQID0gMTtcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEVORXh0cmFjdFllYXJTdWZmaXhSZWZpbmVyIGltcGxlbWVudHMgUmVmaW5lciB7XG4gICAgcmVmaW5lKGNvbnRleHQ6IFBhcnNpbmdDb250ZXh0LCByZXN1bHRzOiBQYXJzaW5nUmVzdWx0W10pOiBQYXJzaW5nUmVzdWx0W10ge1xuICAgICAgICByZXN1bHRzLmZvckVhY2goZnVuY3Rpb24gKHJlc3VsdCkge1xuICAgICAgICAgICAgaWYgKCFyZXN1bHQuc3RhcnQuaXNEYXRlV2l0aFVua25vd25ZZWFyKCkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGNvbnN0IHN1ZmZpeCA9IGNvbnRleHQudGV4dC5zdWJzdHJpbmcocmVzdWx0LmluZGV4ICsgcmVzdWx0LnRleHQubGVuZ3RoKTtcbiAgICAgICAgICAgIGNvbnN0IG1hdGNoID0gWUVBUl9TVUZGSVhfUEFUVEVSTi5leGVjKHN1ZmZpeCk7XG4gICAgICAgICAgICBpZiAoIW1hdGNoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjb250ZXh0LmRlYnVnKCgpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhgRXh0cmFjdGluZyB5ZWFyOiAnJHttYXRjaFswXX0nIGludG8gOiAke3Jlc3VsdH1gKTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBjb25zdCB5ZWFyID0gcGFyc2VZZWFyKG1hdGNoW1lFQVJfR1JPVVBdKTtcbiAgICAgICAgICAgIGlmIChyZXN1bHQuZW5kICE9IG51bGwpIHtcbiAgICAgICAgICAgICAgICByZXN1bHQuZW5kLmFzc2lnbihcInllYXJcIiwgeWVhcik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXN1bHQuc3RhcnQuYXNzaWduKFwieWVhclwiLCB5ZWFyKTtcbiAgICAgICAgICAgIHJlc3VsdC50ZXh0ICs9IG1hdGNoWzBdO1xuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gcmVzdWx0cztcbiAgICB9XG59XG4iLCAiaW1wb3J0IHsgRmlsdGVyIH0gZnJvbSBcIi4uLy4uLy4uL2NvbW1vbi9hYnN0cmFjdFJlZmluZXJzXCI7XG5pbXBvcnQgeyBQYXJzaW5nUmVzdWx0IH0gZnJvbSBcIi4uLy4uLy4uL3Jlc3VsdHNcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRU5Vbmxpa2VseUZvcm1hdEZpbHRlciBleHRlbmRzIEZpbHRlciB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgfVxuXG4gICAgaXNWYWxpZChjb250ZXh0LCByZXN1bHQ6IFBhcnNpbmdSZXN1bHQpOiBib29sZWFuIHtcbiAgICAgICAgY29uc3QgdGV4dCA9IHJlc3VsdC50ZXh0LnRyaW0oKTtcblxuICAgICAgICAvLyBJZiB0aGUgcmVzdWx0IGlzIGNvbnNpc3RzIG9mIHRoZSB3aG9sZSB0ZXh0IChlLmcuIFwiMjAyNFwiLCBcIk1heVwiLCBldGMpLFxuICAgICAgICAvLyB0aGVuIGl0IGlzIHVubGlrZWx5IHRvIGJlIGEgZGF0ZS5cbiAgICAgICAgaWYgKHRleHQgPT09IGNvbnRleHQudGV4dC50cmltKCkpIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gSW4gRW5nbGlzaCwgdGhlIHdvcmQgXCJtYXlcIiBpcyBhIG1vbnRoIG5hbWUsIGJ1dCBpdCBpcyBhbHNvIGEgbW9kYWwgdmVyYi5cbiAgICAgICAgLy8gQ2hlY2sgaWYgdGhlIHRleHQgYmVmb3JlIFwibWF5XCIgZm9sbG93cyBzb21lIGFsbG93ZWQgcGF0dGVybnMuXG4gICAgICAgIGlmICh0ZXh0LnRvTG93ZXJDYXNlKCkgPT09IFwibWF5XCIpIHtcbiAgICAgICAgICAgIGNvbnN0IHRleHRCZWZvcmUgPSBjb250ZXh0LnRleHQuc3Vic3RyaW5nKDAsIHJlc3VsdC5pbmRleCkudHJpbSgpO1xuICAgICAgICAgICAgaWYgKCF0ZXh0QmVmb3JlLm1hdGNoKC9cXGIoaW4pJC9pKSkge1xuICAgICAgICAgICAgICAgIGNvbnRleHQuZGVidWcoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhgUmVtb3ZpbmcgdW5saWtlbHkgcmVzdWx0OiAke3Jlc3VsdH1gKTtcbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8vIEluIEVuZ2xpc2gsIFwidGhlIHNlY29uZFwiIGNvdWxkIHJlZmVyIHRvIHRoZSBvcmRpbmFsIG51bWJlciBvciB0aW1ldW5pdC5cbiAgICAgICAgaWYgKHRleHQudG9Mb3dlckNhc2UoKS5lbmRzV2l0aChcInRoZSBzZWNvbmRcIikpIHtcbiAgICAgICAgICAgIGNvbnN0IHRleHRBZnRlciA9IGNvbnRleHQudGV4dC5zdWJzdHJpbmcocmVzdWx0LmluZGV4ICsgcmVzdWx0LnRleHQubGVuZ3RoKS50cmltKCk7XG4gICAgICAgICAgICBpZiAodGV4dEFmdGVyLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICBjb250ZXh0LmRlYnVnKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coYFJlbW92aW5nIHVubGlrZWx5IHJlc3VsdDogJHtyZXN1bHR9YCk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG59XG4iLCAiaW1wb3J0IHsgQ29uZmlndXJhdGlvbiB9IGZyb20gXCIuLi8uLi9jaHJvbm9cIjtcblxuaW1wb3J0IEVOVGltZVVuaXRXaXRoaW5Gb3JtYXRQYXJzZXIgZnJvbSBcIi4vcGFyc2Vycy9FTlRpbWVVbml0V2l0aGluRm9ybWF0UGFyc2VyXCI7XG5pbXBvcnQgRU5Nb250aE5hbWVMaXR0bGVFbmRpYW5QYXJzZXIgZnJvbSBcIi4vcGFyc2Vycy9FTk1vbnRoTmFtZUxpdHRsZUVuZGlhblBhcnNlclwiO1xuaW1wb3J0IEVOTW9udGhOYW1lTWlkZGxlRW5kaWFuUGFyc2VyIGZyb20gXCIuL3BhcnNlcnMvRU5Nb250aE5hbWVNaWRkbGVFbmRpYW5QYXJzZXJcIjtcbmltcG9ydCBFTk1vbnRoTmFtZVBhcnNlciBmcm9tIFwiLi9wYXJzZXJzL0VOTW9udGhOYW1lUGFyc2VyXCI7XG5pbXBvcnQgRU5ZZWFyTW9udGhEYXlQYXJzZXIgZnJvbSBcIi4vcGFyc2Vycy9FTlllYXJNb250aERheVBhcnNlclwiO1xuaW1wb3J0IEVOU2xhc2hNb250aEZvcm1hdFBhcnNlciBmcm9tIFwiLi9wYXJzZXJzL0VOU2xhc2hNb250aEZvcm1hdFBhcnNlclwiO1xuaW1wb3J0IEVOVGltZUV4cHJlc3Npb25QYXJzZXIgZnJvbSBcIi4vcGFyc2Vycy9FTlRpbWVFeHByZXNzaW9uUGFyc2VyXCI7XG5pbXBvcnQgRU5UaW1lVW5pdEFnb0Zvcm1hdFBhcnNlciBmcm9tIFwiLi9wYXJzZXJzL0VOVGltZVVuaXRBZ29Gb3JtYXRQYXJzZXJcIjtcbmltcG9ydCBFTlRpbWVVbml0TGF0ZXJGb3JtYXRQYXJzZXIgZnJvbSBcIi4vcGFyc2Vycy9FTlRpbWVVbml0TGF0ZXJGb3JtYXRQYXJzZXJcIjtcbmltcG9ydCBFTk1lcmdlRGF0ZVJhbmdlUmVmaW5lciBmcm9tIFwiLi9yZWZpbmVycy9FTk1lcmdlRGF0ZVJhbmdlUmVmaW5lclwiO1xuaW1wb3J0IEVOTWVyZ2VEYXRlVGltZVJlZmluZXIgZnJvbSBcIi4vcmVmaW5lcnMvRU5NZXJnZURhdGVUaW1lUmVmaW5lclwiO1xuXG5pbXBvcnQgeyBpbmNsdWRlQ29tbW9uQ29uZmlndXJhdGlvbiB9IGZyb20gXCIuLi8uLi9jb25maWd1cmF0aW9uc1wiO1xuaW1wb3J0IEVOQ2FzdWFsRGF0ZVBhcnNlciBmcm9tIFwiLi9wYXJzZXJzL0VOQ2FzdWFsRGF0ZVBhcnNlclwiO1xuaW1wb3J0IEVOQ2FzdWFsVGltZVBhcnNlciBmcm9tIFwiLi9wYXJzZXJzL0VOQ2FzdWFsVGltZVBhcnNlclwiO1xuaW1wb3J0IEVOV2Vla2RheVBhcnNlciBmcm9tIFwiLi9wYXJzZXJzL0VOV2Vla2RheVBhcnNlclwiO1xuaW1wb3J0IEVOUmVsYXRpdmVEYXRlRm9ybWF0UGFyc2VyIGZyb20gXCIuL3BhcnNlcnMvRU5SZWxhdGl2ZURhdGVGb3JtYXRQYXJzZXJcIjtcblxuaW1wb3J0IFNsYXNoRGF0ZUZvcm1hdFBhcnNlciBmcm9tIFwiLi4vLi4vY29tbW9uL3BhcnNlcnMvU2xhc2hEYXRlRm9ybWF0UGFyc2VyXCI7XG5pbXBvcnQgRU5UaW1lVW5pdENhc3VhbFJlbGF0aXZlRm9ybWF0UGFyc2VyIGZyb20gXCIuL3BhcnNlcnMvRU5UaW1lVW5pdENhc3VhbFJlbGF0aXZlRm9ybWF0UGFyc2VyXCI7XG5pbXBvcnQgRU5NZXJnZVJlbGF0aXZlQWZ0ZXJEYXRlUmVmaW5lciBmcm9tIFwiLi9yZWZpbmVycy9FTk1lcmdlUmVsYXRpdmVBZnRlckRhdGVSZWZpbmVyXCI7XG5pbXBvcnQgRU5NZXJnZVJlbGF0aXZlRm9sbG93QnlEYXRlUmVmaW5lciBmcm9tIFwiLi9yZWZpbmVycy9FTk1lcmdlUmVsYXRpdmVGb2xsb3dCeURhdGVSZWZpbmVyXCI7XG5pbXBvcnQgT3ZlcmxhcFJlbW92YWxSZWZpbmVyIGZyb20gXCIuLi8uLi9jb21tb24vcmVmaW5lcnMvT3ZlcmxhcFJlbW92YWxSZWZpbmVyXCI7XG5pbXBvcnQgRU5FeHRyYWN0WWVhclN1ZmZpeFJlZmluZXIgZnJvbSBcIi4vcmVmaW5lcnMvRU5FeHRyYWN0WWVhclN1ZmZpeFJlZmluZXJcIjtcbmltcG9ydCBFTlVubGlrZWx5Rm9ybWF0RmlsdGVyIGZyb20gXCIuL3JlZmluZXJzL0VOVW5saWtlbHlGb3JtYXRGaWx0ZXJcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRU5EZWZhdWx0Q29uZmlndXJhdGlvbiB7XG4gICAgLyoqXG4gICAgICogQ3JlYXRlIGEgZGVmYXVsdCAqY2FzdWFsKiB7QExpbmsgQ29uZmlndXJhdGlvbn0gZm9yIEVuZ2xpc2ggY2hyb25vLlxuICAgICAqIEl0IGNhbGxzIHtATGluayBjcmVhdGVDb25maWd1cmF0aW9ufSBhbmQgaW5jbHVkZXMgYWRkaXRpb25hbCBwYXJzZXJzLlxuICAgICAqL1xuICAgIGNyZWF0ZUNhc3VhbENvbmZpZ3VyYXRpb24obGl0dGxlRW5kaWFuID0gZmFsc2UpOiBDb25maWd1cmF0aW9uIHtcbiAgICAgICAgY29uc3Qgb3B0aW9uID0gdGhpcy5jcmVhdGVDb25maWd1cmF0aW9uKGZhbHNlLCBsaXR0bGVFbmRpYW4pO1xuICAgICAgICBvcHRpb24ucGFyc2Vycy5wdXNoKG5ldyBFTkNhc3VhbERhdGVQYXJzZXIoKSk7XG4gICAgICAgIG9wdGlvbi5wYXJzZXJzLnB1c2gobmV3IEVOQ2FzdWFsVGltZVBhcnNlcigpKTtcbiAgICAgICAgb3B0aW9uLnBhcnNlcnMucHVzaChuZXcgRU5Nb250aE5hbWVQYXJzZXIoKSk7XG4gICAgICAgIG9wdGlvbi5wYXJzZXJzLnB1c2gobmV3IEVOUmVsYXRpdmVEYXRlRm9ybWF0UGFyc2VyKCkpO1xuICAgICAgICBvcHRpb24ucGFyc2Vycy5wdXNoKG5ldyBFTlRpbWVVbml0Q2FzdWFsUmVsYXRpdmVGb3JtYXRQYXJzZXIoKSk7XG4gICAgICAgIG9wdGlvbi5yZWZpbmVycy5wdXNoKG5ldyBFTlVubGlrZWx5Rm9ybWF0RmlsdGVyKCkpO1xuICAgICAgICByZXR1cm4gb3B0aW9uO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENyZWF0ZSBhIGRlZmF1bHQge0BMaW5rIENvbmZpZ3VyYXRpb259IGZvciBFbmdsaXNoIGNocm9ub1xuICAgICAqXG4gICAgICogQHBhcmFtIHN0cmljdE1vZGUgSWYgdGhlIHRpbWV1bml0IG1lbnRpb25pbmcgc2hvdWxkIGJlIHN0cmljdCwgbm90IGNhc3VhbFxuICAgICAqIEBwYXJhbSBsaXR0bGVFbmRpYW4gSWYgZm9ybWF0IHNob3VsZCBiZSBkYXRlLWZpcnN0L2xpdHRsZUVuZGlhbiAoZS5nLiBlbl9VSyksIG5vdCBtb250aC1maXJzdC9taWRkbGVFbmRpYW4gKGUuZy4gZW5fVVMpXG4gICAgICovXG4gICAgY3JlYXRlQ29uZmlndXJhdGlvbihzdHJpY3RNb2RlID0gdHJ1ZSwgbGl0dGxlRW5kaWFuID0gZmFsc2UpOiBDb25maWd1cmF0aW9uIHtcbiAgICAgICAgY29uc3Qgb3B0aW9ucyA9IGluY2x1ZGVDb21tb25Db25maWd1cmF0aW9uKFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHBhcnNlcnM6IFtcbiAgICAgICAgICAgICAgICAgICAgbmV3IFNsYXNoRGF0ZUZvcm1hdFBhcnNlcihsaXR0bGVFbmRpYW4pLFxuICAgICAgICAgICAgICAgICAgICBuZXcgRU5UaW1lVW5pdFdpdGhpbkZvcm1hdFBhcnNlcihzdHJpY3RNb2RlKSxcbiAgICAgICAgICAgICAgICAgICAgbmV3IEVOTW9udGhOYW1lTGl0dGxlRW5kaWFuUGFyc2VyKCksXG4gICAgICAgICAgICAgICAgICAgIG5ldyBFTk1vbnRoTmFtZU1pZGRsZUVuZGlhblBhcnNlcigvKnNob3VsZFNraXBZZWFyTGlrZURhdGU9Ki8gbGl0dGxlRW5kaWFuKSxcbiAgICAgICAgICAgICAgICAgICAgbmV3IEVOV2Vla2RheVBhcnNlcigpLFxuICAgICAgICAgICAgICAgICAgICBuZXcgRU5TbGFzaE1vbnRoRm9ybWF0UGFyc2VyKCksXG4gICAgICAgICAgICAgICAgICAgIG5ldyBFTlRpbWVFeHByZXNzaW9uUGFyc2VyKHN0cmljdE1vZGUpLFxuICAgICAgICAgICAgICAgICAgICBuZXcgRU5UaW1lVW5pdEFnb0Zvcm1hdFBhcnNlcihzdHJpY3RNb2RlKSxcbiAgICAgICAgICAgICAgICAgICAgbmV3IEVOVGltZVVuaXRMYXRlckZvcm1hdFBhcnNlcihzdHJpY3RNb2RlKSxcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIHJlZmluZXJzOiBbbmV3IEVOTWVyZ2VEYXRlVGltZVJlZmluZXIoKV0sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgc3RyaWN0TW9kZVxuICAgICAgICApO1xuICAgICAgICBvcHRpb25zLnBhcnNlcnMudW5zaGlmdChuZXcgRU5ZZWFyTW9udGhEYXlQYXJzZXIoLypzdHJpY3RNb250aERhdGVPcmRlcj0qLyBzdHJpY3RNb2RlKSk7XG5cbiAgICAgICAgLy8gVGhlc2UgcmVsYXRpdmUtZGF0ZXMgY29uc2lkZXJhdGlvbiBzaG91bGQgYmUgZG9uZSBiZWZvcmUgb3RoZXIgY29tbW9uIHJlZmluZXJzLlxuICAgICAgICBvcHRpb25zLnJlZmluZXJzLnVuc2hpZnQobmV3IEVOTWVyZ2VSZWxhdGl2ZUZvbGxvd0J5RGF0ZVJlZmluZXIoKSk7XG4gICAgICAgIG9wdGlvbnMucmVmaW5lcnMudW5zaGlmdChuZXcgRU5NZXJnZVJlbGF0aXZlQWZ0ZXJEYXRlUmVmaW5lcigpKTtcbiAgICAgICAgb3B0aW9ucy5yZWZpbmVycy51bnNoaWZ0KG5ldyBPdmVybGFwUmVtb3ZhbFJlZmluZXIoKSk7XG5cbiAgICAgICAgLy8gUmUtYXBwbHkgdGhlIGRhdGUgdGltZSByZWZpbmVyIGFnYWluIGFmdGVyIHRoZSB0aW1lem9uZSByZWZpbmVtZW50IGFuZCBleGNsdXNpb24gaW4gY29tbW9uIHJlZmluZXJzLlxuICAgICAgICBvcHRpb25zLnJlZmluZXJzLnB1c2gobmV3IEVOTWVyZ2VEYXRlVGltZVJlZmluZXIoKSk7XG5cbiAgICAgICAgLy8gRXh0cmFjdCB5ZWFyIGFmdGVyIG1lcmdpbmcgZGF0ZSBhbmQgdGltZVxuICAgICAgICBvcHRpb25zLnJlZmluZXJzLnB1c2gobmV3IEVORXh0cmFjdFllYXJTdWZmaXhSZWZpbmVyKCkpO1xuXG4gICAgICAgIC8vIEtlZXAgdGhlIGRhdGUgcmFuZ2UgcmVmaW5lciBhdCB0aGUgZW5kIChhZnRlciBhbGwgb3RoZXIgcmVmaW5lbWVudHMpLlxuICAgICAgICBvcHRpb25zLnJlZmluZXJzLnB1c2gobmV3IEVOTWVyZ2VEYXRlUmFuZ2VSZWZpbmVyKCkpO1xuICAgICAgICByZXR1cm4gb3B0aW9ucztcbiAgICB9XG59XG4iLCAiaW1wb3J0IHsgUmVmZXJlbmNlV2l0aFRpbWV6b25lLCBQYXJzaW5nQ29tcG9uZW50cywgUGFyc2luZ1Jlc3VsdCB9IGZyb20gXCIuL3Jlc3VsdHNcIjtcbmltcG9ydCB7IENvbXBvbmVudCwgUGFyc2VkUmVzdWx0LCBQYXJzaW5nT3B0aW9uLCBQYXJzaW5nUmVmZXJlbmNlIH0gZnJvbSBcIi4vdHlwZXNcIjtcbmltcG9ydCB7IEFzeW5jRGVidWdCbG9jaywgRGVidWdIYW5kbGVyIH0gZnJvbSBcIi4vZGVidWdnaW5nXCI7XG5pbXBvcnQgRU5EZWZhdWx0Q29uZmlndXJhdGlvbiBmcm9tIFwiLi9sb2NhbGVzL2VuL2NvbmZpZ3VyYXRpb25cIjtcblxuLyoqXG4gKiBDaHJvbm8gY29uZmlndXJhdGlvbi5cbiAqIEl0IGlzIHNpbXBseSBhbiBvcmRlcmVkIGxpc3Qgb2YgcGFyc2VycyBhbmQgcmVmaW5lcnNcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBDb25maWd1cmF0aW9uIHtcbiAgICBwYXJzZXJzOiBQYXJzZXJbXTtcbiAgICByZWZpbmVyczogUmVmaW5lcltdO1xufVxuXG4vKipcbiAqIEFuIGFic3RyYWN0aW9uIGZvciBDaHJvbm8gKlBhcnNlciouXG4gKlxuICogRWFjaCBwYXJzZXIgc2hvdWxkIHJlY29nbml6ZSBhbmQgaGFuZGxlIGEgY2VydGFpbiBkYXRlIGZvcm1hdC5cbiAqIENocm9ubyB1c2VzIG11bHRpcGxlIHBhcnNlcyAoYW5kIHJlZmluZXJzKSB0b2dldGhlciBmb3IgcGFyc2luZyB0aGUgaW5wdXQuXG4gKlxuICogVGhlIHBhcnNlciBpbXBsZW1lbnRhdGlvbiBtdXN0IHByb3ZpZGUge0BMaW5rIHBhdHRlcm4gfCBwYXR0ZXJuKCl9IGZvciB0aGUgZGF0ZSBmb3JtYXQuXG4gKlxuICogVGhlIHtATGluayBleHRyYWN0IHwgZXh0cmFjdCgpfSBtZXRob2QgaXMgY2FsbGVkIHdpdGggdGhlIHBhdHRlcm4ncyAqbWF0Y2gqLlxuICogVGhlIG1hdGNoaW5nIGFuZCBleHRyYWN0aW5nIGlzIGNvbnRyb2xsZWQgYW5kIGFkanVzdGVkIHRvIGF2b2lkIGZvciBvdmVybGFwcGluZyByZXN1bHRzLlxuICovXG5leHBvcnQgaW50ZXJmYWNlIFBhcnNlciB7XG4gICAgcGF0dGVybihjb250ZXh0OiBQYXJzaW5nQ29udGV4dCk6IFJlZ0V4cDtcbiAgICBleHRyYWN0KFxuICAgICAgICBjb250ZXh0OiBQYXJzaW5nQ29udGV4dCxcbiAgICAgICAgbWF0Y2g6IFJlZ0V4cE1hdGNoQXJyYXlcbiAgICApOiBQYXJzaW5nQ29tcG9uZW50cyB8IFBhcnNpbmdSZXN1bHQgfCB7IFtjIGluIENvbXBvbmVudF0/OiBudW1iZXIgfSB8IG51bGw7XG59XG5cbi8qKlxuICogQSBhYnN0cmFjdGlvbiBmb3IgQ2hyb25vICpSZWZpbmVyKi5cbiAqXG4gKiBFYWNoIHJlZmluZXIgdGFrZXMgdGhlIGxpc3Qgb2YgcmVzdWx0cyAoZnJvbSBwYXJzZXJzIG9yIG90aGVyIHJlZmluZXJzKSBhbmQgcmV0dXJucyBhbm90aGVyIGxpc3Qgb2YgcmVzdWx0cy5cbiAqIENocm9ubyBhcHBsaWVzIGVhY2ggcmVmaW5lciBpbiBvcmRlciBhbmQgcmV0dXJuIHRoZSBvdXRwdXQgZnJvbSB0aGUgbGFzdCByZWZpbmVyLlxuICovXG5leHBvcnQgaW50ZXJmYWNlIFJlZmluZXIge1xuICAgIHJlZmluZTogKGNvbnRleHQ6IFBhcnNpbmdDb250ZXh0LCByZXN1bHRzOiBQYXJzaW5nUmVzdWx0W10pID0+IFBhcnNpbmdSZXN1bHRbXTtcbn1cblxuLyoqXG4gKiBUaGUgQ2hyb25vIG9iamVjdC5cbiAqL1xuZXhwb3J0IGNsYXNzIENocm9ubyB7XG4gICAgcGFyc2VyczogQXJyYXk8UGFyc2VyPjtcbiAgICByZWZpbmVyczogQXJyYXk8UmVmaW5lcj47XG5cbiAgICBkZWZhdWx0Q29uZmlnID0gbmV3IEVORGVmYXVsdENvbmZpZ3VyYXRpb24oKTtcblxuICAgIGNvbnN0cnVjdG9yKGNvbmZpZ3VyYXRpb24/OiBDb25maWd1cmF0aW9uKSB7XG4gICAgICAgIGNvbmZpZ3VyYXRpb24gPSBjb25maWd1cmF0aW9uIHx8IHRoaXMuZGVmYXVsdENvbmZpZy5jcmVhdGVDYXN1YWxDb25maWd1cmF0aW9uKCk7XG4gICAgICAgIHRoaXMucGFyc2VycyA9IFsuLi5jb25maWd1cmF0aW9uLnBhcnNlcnNdO1xuICAgICAgICB0aGlzLnJlZmluZXJzID0gWy4uLmNvbmZpZ3VyYXRpb24ucmVmaW5lcnNdO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENyZWF0ZSBhIHNoYWxsb3cgY29weSBvZiB0aGUgQ2hyb25vIG9iamVjdCB3aXRoIHRoZSBzYW1lIGNvbmZpZ3VyYXRpb24gKGBwYXJzZXJzYCBhbmQgYHJlZmluZXJzYClcbiAgICAgKi9cbiAgICBjbG9uZSgpOiBDaHJvbm8ge1xuICAgICAgICByZXR1cm4gbmV3IENocm9ubyh7XG4gICAgICAgICAgICBwYXJzZXJzOiBbLi4udGhpcy5wYXJzZXJzXSxcbiAgICAgICAgICAgIHJlZmluZXJzOiBbLi4udGhpcy5yZWZpbmVyc10sXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEEgc2hvcnRjdXQgZm9yIGNhbGxpbmcge0BMaW5rIHBhcnNlIHwgcGFyc2UoKSB9IHRoZW4gdHJhbnNmb3JtIHRoZSByZXN1bHQgaW50byBKYXZhc2NyaXB0J3MgRGF0ZSBvYmplY3RcbiAgICAgKiBAcmV0dXJuIERhdGUgb2JqZWN0IGNyZWF0ZWQgZnJvbSB0aGUgZmlyc3QgcGFyc2UgcmVzdWx0XG4gICAgICovXG4gICAgcGFyc2VEYXRlKHRleHQ6IHN0cmluZywgcmVmZXJlbmNlRGF0ZT86IFBhcnNpbmdSZWZlcmVuY2UgfCBEYXRlLCBvcHRpb24/OiBQYXJzaW5nT3B0aW9uKTogRGF0ZSB8IG51bGwge1xuICAgICAgICBjb25zdCByZXN1bHRzID0gdGhpcy5wYXJzZSh0ZXh0LCByZWZlcmVuY2VEYXRlLCBvcHRpb24pO1xuICAgICAgICByZXR1cm4gcmVzdWx0cy5sZW5ndGggPiAwID8gcmVzdWx0c1swXS5zdGFydC5kYXRlKCkgOiBudWxsO1xuICAgIH1cblxuICAgIHBhcnNlKHRleHQ6IHN0cmluZywgcmVmZXJlbmNlRGF0ZT86IFBhcnNpbmdSZWZlcmVuY2UgfCBEYXRlLCBvcHRpb24/OiBQYXJzaW5nT3B0aW9uKTogUGFyc2VkUmVzdWx0W10ge1xuICAgICAgICBjb25zdCBjb250ZXh0ID0gbmV3IFBhcnNpbmdDb250ZXh0KHRleHQsIHJlZmVyZW5jZURhdGUsIG9wdGlvbik7XG5cbiAgICAgICAgbGV0IHJlc3VsdHMgPSBbXTtcbiAgICAgICAgdGhpcy5wYXJzZXJzLmZvckVhY2goKHBhcnNlcikgPT4ge1xuICAgICAgICAgICAgY29uc3QgcGFyc2VkUmVzdWx0cyA9IENocm9uby5leGVjdXRlUGFyc2VyKGNvbnRleHQsIHBhcnNlcik7XG4gICAgICAgICAgICByZXN1bHRzID0gcmVzdWx0cy5jb25jYXQocGFyc2VkUmVzdWx0cyk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJlc3VsdHMuc29ydCgoYSwgYikgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIGEuaW5kZXggLSBiLmluZGV4O1xuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLnJlZmluZXJzLmZvckVhY2goZnVuY3Rpb24gKHJlZmluZXIpIHtcbiAgICAgICAgICAgIHJlc3VsdHMgPSByZWZpbmVyLnJlZmluZShjb250ZXh0LCByZXN1bHRzKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdHM7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBzdGF0aWMgZXhlY3V0ZVBhcnNlcihjb250ZXh0OiBQYXJzaW5nQ29udGV4dCwgcGFyc2VyOiBQYXJzZXIpIHtcbiAgICAgICAgY29uc3QgcmVzdWx0cyA9IFtdO1xuICAgICAgICBjb25zdCBwYXR0ZXJuID0gcGFyc2VyLnBhdHRlcm4oY29udGV4dCk7XG5cbiAgICAgICAgY29uc3Qgb3JpZ2luYWxUZXh0ID0gY29udGV4dC50ZXh0O1xuICAgICAgICBsZXQgcmVtYWluaW5nVGV4dCA9IGNvbnRleHQudGV4dDtcbiAgICAgICAgbGV0IG1hdGNoID0gcGF0dGVybi5leGVjKHJlbWFpbmluZ1RleHQpO1xuXG4gICAgICAgIHdoaWxlIChtYXRjaCkge1xuICAgICAgICAgICAgLy8gQ2FsY3VsYXRlIG1hdGNoIGluZGV4IG9uIHRoZSBmdWxsIHRleHQ7XG4gICAgICAgICAgICBjb25zdCBpbmRleCA9IG1hdGNoLmluZGV4ICsgb3JpZ2luYWxUZXh0Lmxlbmd0aCAtIHJlbWFpbmluZ1RleHQubGVuZ3RoO1xuICAgICAgICAgICAgbWF0Y2guaW5kZXggPSBpbmRleDtcblxuICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gcGFyc2VyLmV4dHJhY3QoY29udGV4dCwgbWF0Y2gpO1xuICAgICAgICAgICAgaWYgKCFyZXN1bHQpIHtcbiAgICAgICAgICAgICAgICAvLyBJZiBmYWlscywgbW92ZSBvbiBieSAxXG4gICAgICAgICAgICAgICAgcmVtYWluaW5nVGV4dCA9IG9yaWdpbmFsVGV4dC5zdWJzdHJpbmcobWF0Y2guaW5kZXggKyAxKTtcbiAgICAgICAgICAgICAgICBtYXRjaCA9IHBhdHRlcm4uZXhlYyhyZW1haW5pbmdUZXh0KTtcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgbGV0IHBhcnNlZFJlc3VsdDogUGFyc2luZ1Jlc3VsdCA9IG51bGw7XG4gICAgICAgICAgICBpZiAocmVzdWx0IGluc3RhbmNlb2YgUGFyc2luZ1Jlc3VsdCkge1xuICAgICAgICAgICAgICAgIHBhcnNlZFJlc3VsdCA9IHJlc3VsdDtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAocmVzdWx0IGluc3RhbmNlb2YgUGFyc2luZ0NvbXBvbmVudHMpIHtcbiAgICAgICAgICAgICAgICBwYXJzZWRSZXN1bHQgPSBjb250ZXh0LmNyZWF0ZVBhcnNpbmdSZXN1bHQobWF0Y2guaW5kZXgsIG1hdGNoWzBdKTtcbiAgICAgICAgICAgICAgICBwYXJzZWRSZXN1bHQuc3RhcnQgPSByZXN1bHQ7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHBhcnNlZFJlc3VsdCA9IGNvbnRleHQuY3JlYXRlUGFyc2luZ1Jlc3VsdChtYXRjaC5pbmRleCwgbWF0Y2hbMF0sIHJlc3VsdCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGNvbnN0IHBhcnNlZEluZGV4ID0gcGFyc2VkUmVzdWx0LmluZGV4O1xuICAgICAgICAgICAgY29uc3QgcGFyc2VkVGV4dCA9IHBhcnNlZFJlc3VsdC50ZXh0O1xuICAgICAgICAgICAgY29udGV4dC5kZWJ1ZygoKSA9PlxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGAke3BhcnNlci5jb25zdHJ1Y3Rvci5uYW1lfSBleHRyYWN0ZWQgKGF0IGluZGV4PSR7cGFyc2VkSW5kZXh9KSAnJHtwYXJzZWRUZXh0fSdgKVxuICAgICAgICAgICAgKTtcblxuICAgICAgICAgICAgcmVzdWx0cy5wdXNoKHBhcnNlZFJlc3VsdCk7XG4gICAgICAgICAgICByZW1haW5pbmdUZXh0ID0gb3JpZ2luYWxUZXh0LnN1YnN0cmluZyhwYXJzZWRJbmRleCArIHBhcnNlZFRleHQubGVuZ3RoKTtcbiAgICAgICAgICAgIG1hdGNoID0gcGF0dGVybi5leGVjKHJlbWFpbmluZ1RleHQpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdHM7XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgUGFyc2luZ0NvbnRleHQgaW1wbGVtZW50cyBEZWJ1Z0hhbmRsZXIge1xuICAgIHJlYWRvbmx5IHRleHQ6IHN0cmluZztcbiAgICByZWFkb25seSBvcHRpb246IFBhcnNpbmdPcHRpb247XG4gICAgcmVhZG9ubHkgcmVmZXJlbmNlOiBSZWZlcmVuY2VXaXRoVGltZXpvbmU7XG5cbiAgICAvKipcbiAgICAgKiBAZGVwcmVjYXRlZC4gVXNlIGByZWZlcmVuY2UuaW5zdGFudGAgaW5zdGVhZC5cbiAgICAgKi9cbiAgICByZWFkb25seSByZWZEYXRlOiBEYXRlO1xuXG4gICAgY29uc3RydWN0b3IodGV4dDogc3RyaW5nLCByZWZEYXRlPzogUGFyc2luZ1JlZmVyZW5jZSB8IERhdGUsIG9wdGlvbj86IFBhcnNpbmdPcHRpb24pIHtcbiAgICAgICAgdGhpcy50ZXh0ID0gdGV4dDtcbiAgICAgICAgdGhpcy5yZWZlcmVuY2UgPSBuZXcgUmVmZXJlbmNlV2l0aFRpbWV6b25lKHJlZkRhdGUpO1xuICAgICAgICB0aGlzLm9wdGlvbiA9IG9wdGlvbiA/PyB7fTtcblxuICAgICAgICB0aGlzLnJlZkRhdGUgPSB0aGlzLnJlZmVyZW5jZS5pbnN0YW50O1xuICAgIH1cblxuICAgIGNyZWF0ZVBhcnNpbmdDb21wb25lbnRzKGNvbXBvbmVudHM/OiB7IFtjIGluIENvbXBvbmVudF0/OiBudW1iZXIgfSB8IFBhcnNpbmdDb21wb25lbnRzKTogUGFyc2luZ0NvbXBvbmVudHMge1xuICAgICAgICBpZiAoY29tcG9uZW50cyBpbnN0YW5jZW9mIFBhcnNpbmdDb21wb25lbnRzKSB7XG4gICAgICAgICAgICByZXR1cm4gY29tcG9uZW50cztcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBuZXcgUGFyc2luZ0NvbXBvbmVudHModGhpcy5yZWZlcmVuY2UsIGNvbXBvbmVudHMpO1xuICAgIH1cblxuICAgIGNyZWF0ZVBhcnNpbmdSZXN1bHQoXG4gICAgICAgIGluZGV4OiBudW1iZXIsXG4gICAgICAgIHRleHRPckVuZEluZGV4OiBudW1iZXIgfCBzdHJpbmcsXG4gICAgICAgIHN0YXJ0Q29tcG9uZW50cz86IHsgW2MgaW4gQ29tcG9uZW50XT86IG51bWJlciB9IHwgUGFyc2luZ0NvbXBvbmVudHMsXG4gICAgICAgIGVuZENvbXBvbmVudHM/OiB7IFtjIGluIENvbXBvbmVudF0/OiBudW1iZXIgfSB8IFBhcnNpbmdDb21wb25lbnRzXG4gICAgKTogUGFyc2luZ1Jlc3VsdCB7XG4gICAgICAgIGNvbnN0IHRleHQgPSB0eXBlb2YgdGV4dE9yRW5kSW5kZXggPT09IFwic3RyaW5nXCIgPyB0ZXh0T3JFbmRJbmRleCA6IHRoaXMudGV4dC5zdWJzdHJpbmcoaW5kZXgsIHRleHRPckVuZEluZGV4KTtcblxuICAgICAgICBjb25zdCBzdGFydCA9IHN0YXJ0Q29tcG9uZW50cyA/IHRoaXMuY3JlYXRlUGFyc2luZ0NvbXBvbmVudHMoc3RhcnRDb21wb25lbnRzKSA6IG51bGw7XG4gICAgICAgIGNvbnN0IGVuZCA9IGVuZENvbXBvbmVudHMgPyB0aGlzLmNyZWF0ZVBhcnNpbmdDb21wb25lbnRzKGVuZENvbXBvbmVudHMpIDogbnVsbDtcblxuICAgICAgICByZXR1cm4gbmV3IFBhcnNpbmdSZXN1bHQodGhpcy5yZWZlcmVuY2UsIGluZGV4LCB0ZXh0LCBzdGFydCwgZW5kKTtcbiAgICB9XG5cbiAgICBkZWJ1ZyhibG9jazogQXN5bmNEZWJ1Z0Jsb2NrKTogdm9pZCB7XG4gICAgICAgIGlmICh0aGlzLm9wdGlvbi5kZWJ1Zykge1xuICAgICAgICAgICAgaWYgKHRoaXMub3B0aW9uLmRlYnVnIGluc3RhbmNlb2YgRnVuY3Rpb24pIHtcbiAgICAgICAgICAgICAgICB0aGlzLm9wdGlvbi5kZWJ1ZyhibG9jayk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGNvbnN0IGhhbmRsZXI6IERlYnVnSGFuZGxlciA9IDxEZWJ1Z0hhbmRsZXI+dGhpcy5vcHRpb24uZGVidWc7XG4gICAgICAgICAgICAgICAgaGFuZGxlci5kZWJ1ZyhibG9jayk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG4iLCAiLyoqXG4gKiBDaHJvbm8gY29tcG9uZW50cyBmb3IgRW5nbGlzaCBzdXBwb3J0ICgqcGFyc2VycyosICpyZWZpbmVycyosIGFuZCAqY29uZmlndXJhdGlvbiopXG4gKlxuICogQG1vZHVsZVxuICovXG5cbmltcG9ydCB7IENocm9ubywgUGFyc2VyLCBSZWZpbmVyIH0gZnJvbSBcIi4uLy4uL2Nocm9ub1wiO1xuaW1wb3J0IHsgUGFyc2luZ1Jlc3VsdCwgUGFyc2luZ0NvbXBvbmVudHMsIFJlZmVyZW5jZVdpdGhUaW1lem9uZSB9IGZyb20gXCIuLi8uLi9yZXN1bHRzXCI7XG5pbXBvcnQgeyBDb21wb25lbnQsIFBhcnNlZFJlc3VsdCwgUGFyc2luZ09wdGlvbiwgUGFyc2luZ1JlZmVyZW5jZSwgTWVyaWRpZW0sIFdlZWtkYXkgfSBmcm9tIFwiLi4vLi4vdHlwZXNcIjtcblxuaW1wb3J0IEVORGVmYXVsdENvbmZpZ3VyYXRpb24gZnJvbSBcIi4vY29uZmlndXJhdGlvblwiO1xuXG5leHBvcnQgeyBDaHJvbm8sIFBhcnNlciwgUmVmaW5lciwgUGFyc2luZ1Jlc3VsdCwgUGFyc2luZ0NvbXBvbmVudHMsIFJlZmVyZW5jZVdpdGhUaW1lem9uZSB9O1xuZXhwb3J0IHsgQ29tcG9uZW50LCBQYXJzZWRSZXN1bHQsIFBhcnNpbmdPcHRpb24sIFBhcnNpbmdSZWZlcmVuY2UsIE1lcmlkaWVtLCBXZWVrZGF5IH07XG5cbmV4cG9ydCBjb25zdCBjb25maWd1cmF0aW9uID0gbmV3IEVORGVmYXVsdENvbmZpZ3VyYXRpb24oKTtcblxuLyoqXG4gKiBDaHJvbm8gb2JqZWN0IGNvbmZpZ3VyZWQgZm9yIHBhcnNpbmcgKmNhc3VhbCogRW5nbGlzaFxuICovXG5leHBvcnQgY29uc3QgY2FzdWFsID0gbmV3IENocm9ubyhjb25maWd1cmF0aW9uLmNyZWF0ZUNhc3VhbENvbmZpZ3VyYXRpb24oZmFsc2UpKTtcblxuLyoqXG4gKiBDaHJvbm8gb2JqZWN0IGNvbmZpZ3VyZWQgZm9yIHBhcnNpbmcgKnN0cmljdCogRW5nbGlzaFxuICovXG5leHBvcnQgY29uc3Qgc3RyaWN0ID0gbmV3IENocm9ubyhjb25maWd1cmF0aW9uLmNyZWF0ZUNvbmZpZ3VyYXRpb24odHJ1ZSwgZmFsc2UpKTtcblxuLyoqXG4gKiBDaHJvbm8gb2JqZWN0IGNvbmZpZ3VyZWQgZm9yIHBhcnNpbmcgKlVLLXN0eWxlKiBFbmdsaXNoXG4gKi9cbmV4cG9ydCBjb25zdCBHQiA9IG5ldyBDaHJvbm8oY29uZmlndXJhdGlvbi5jcmVhdGVDYXN1YWxDb25maWd1cmF0aW9uKHRydWUpKTtcblxuLyoqXG4gKiBBIHNob3J0Y3V0IGZvciBlbi5jYXN1YWwucGFyc2UoKVxuICovXG5leHBvcnQgZnVuY3Rpb24gcGFyc2UodGV4dDogc3RyaW5nLCByZWY/OiBQYXJzaW5nUmVmZXJlbmNlIHwgRGF0ZSwgb3B0aW9uPzogUGFyc2luZ09wdGlvbik6IFBhcnNlZFJlc3VsdFtdIHtcbiAgICByZXR1cm4gY2FzdWFsLnBhcnNlKHRleHQsIHJlZiwgb3B0aW9uKTtcbn1cblxuLyoqXG4gKiBBIHNob3J0Y3V0IGZvciBlbi5jYXN1YWwucGFyc2VEYXRlKClcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHBhcnNlRGF0ZSh0ZXh0OiBzdHJpbmcsIHJlZj86IFBhcnNpbmdSZWZlcmVuY2UgfCBEYXRlLCBvcHRpb24/OiBQYXJzaW5nT3B0aW9uKTogRGF0ZSB7XG4gICAgcmV0dXJuIGNhc3VhbC5wYXJzZURhdGUodGV4dCwgcmVmLCBvcHRpb24pO1xufVxuIiwgImltcG9ydCAqIGFzIGVuIGZyb20gXCIuL2xvY2FsZXMvZW5cIjtcbmltcG9ydCB7IENocm9ubywgUGFyc2VyLCBSZWZpbmVyIH0gZnJvbSBcIi4vY2hyb25vXCI7XG5pbXBvcnQgeyBQYXJzaW5nUmVzdWx0LCBQYXJzaW5nQ29tcG9uZW50cywgUmVmZXJlbmNlV2l0aFRpbWV6b25lIH0gZnJvbSBcIi4vcmVzdWx0c1wiO1xuaW1wb3J0IHsgQ29tcG9uZW50LCBQYXJzZWRDb21wb25lbnRzLCBQYXJzZWRSZXN1bHQsIFBhcnNpbmdPcHRpb24sIFBhcnNpbmdSZWZlcmVuY2UsIE1lcmlkaWVtLCBXZWVrZGF5IH0gZnJvbSBcIi4vdHlwZXNcIjtcblxuZXhwb3J0IHsgZW4sIENocm9ubywgUGFyc2VyLCBSZWZpbmVyLCBQYXJzaW5nUmVzdWx0LCBQYXJzaW5nQ29tcG9uZW50cywgUmVmZXJlbmNlV2l0aFRpbWV6b25lIH07XG5leHBvcnQgeyBDb21wb25lbnQsIFBhcnNlZENvbXBvbmVudHMsIFBhcnNlZFJlc3VsdCwgUGFyc2luZ09wdGlvbiwgUGFyc2luZ1JlZmVyZW5jZSwgTWVyaWRpZW0sIFdlZWtkYXkgfTtcblxuLy8gRXhwb3J0IGFsbCBsb2NhbGVzXG5pbXBvcnQgKiBhcyBkZSBmcm9tIFwiLi9sb2NhbGVzL2RlXCI7XG5pbXBvcnQgKiBhcyBmciBmcm9tIFwiLi9sb2NhbGVzL2ZyXCI7XG5pbXBvcnQgKiBhcyBqYSBmcm9tIFwiLi9sb2NhbGVzL2phXCI7XG5pbXBvcnQgKiBhcyBwdCBmcm9tIFwiLi9sb2NhbGVzL3B0XCI7XG5pbXBvcnQgKiBhcyBubCBmcm9tIFwiLi9sb2NhbGVzL25sXCI7XG5pbXBvcnQgKiBhcyB6aCBmcm9tIFwiLi9sb2NhbGVzL3poXCI7XG5pbXBvcnQgKiBhcyBydSBmcm9tIFwiLi9sb2NhbGVzL3J1XCI7XG5pbXBvcnQgKiBhcyBlcyBmcm9tIFwiLi9sb2NhbGVzL2VzXCI7XG5pbXBvcnQgKiBhcyB1ayBmcm9tIFwiLi9sb2NhbGVzL3VrXCI7XG5cbmV4cG9ydCB7IGRlLCBmciwgamEsIHB0LCBubCwgemgsIHJ1LCBlcywgdWsgfTtcblxuLyoqXG4gKiBBIHNob3J0Y3V0IGZvciB7QGxpbmsgZW4gfCBjaHJvbm8uZW4uc3RyaWN0fVxuICovXG5leHBvcnQgY29uc3Qgc3RyaWN0ID0gZW4uc3RyaWN0O1xuXG4vKipcbiAqIEEgc2hvcnRjdXQgZm9yIHtAbGluayBlbiB8IGNocm9uby5lbi5jYXN1YWx9XG4gKi9cbmV4cG9ydCBjb25zdCBjYXN1YWwgPSBlbi5jYXN1YWw7XG5cbi8qKlxuICogQSBzaG9ydGN1dCBmb3Ige0BsaW5rIGVuIHwgY2hyb25vLmVuLmNhc3VhbC5wYXJzZSgpfVxuICovXG5leHBvcnQgZnVuY3Rpb24gcGFyc2UodGV4dDogc3RyaW5nLCByZWY/OiBQYXJzaW5nUmVmZXJlbmNlIHwgRGF0ZSwgb3B0aW9uPzogUGFyc2luZ09wdGlvbik6IFBhcnNlZFJlc3VsdFtdIHtcbiAgICByZXR1cm4gY2FzdWFsLnBhcnNlKHRleHQsIHJlZiwgb3B0aW9uKTtcbn1cblxuLyoqXG4gKiBBIHNob3J0Y3V0IGZvciB7QGxpbmsgZW4gfCBjaHJvbm8uZW4uY2FzdWFsLnBhcnNlRGF0ZSgpfVxuICovXG5leHBvcnQgZnVuY3Rpb24gcGFyc2VEYXRlKHRleHQ6IHN0cmluZywgcmVmPzogUGFyc2luZ1JlZmVyZW5jZSB8IERhdGUsIG9wdGlvbj86IFBhcnNpbmdPcHRpb24pOiBEYXRlIHwgbnVsbCB7XG4gICAgcmV0dXJuIGNhc3VhbC5wYXJzZURhdGUodGV4dCwgcmVmLCBvcHRpb24pO1xufVxuIl0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFBQSwrQ0FBQUEsVUFBQUMsU0FBQTtBQUFBLEtBQUMsU0FBUyxHQUFFLEdBQUU7QUFBQyxrQkFBVSxPQUFPRCxZQUFTLGVBQWEsT0FBT0MsVUFBT0EsUUFBTyxVQUFRLEVBQUUsSUFBRSxjQUFZLE9BQU8sVUFBUSxPQUFPLE1BQUksT0FBTyxDQUFDLEtBQUcsSUFBRSxlQUFhLE9BQU8sYUFBVyxhQUFXLEtBQUcsTUFBTSw2QkFBMkIsRUFBRTtBQUFBLElBQUMsRUFBRUQsVUFBTSxXQUFVO0FBQUM7QUFBYSxVQUFJLElBQUUsU0FBUSxJQUFFO0FBQVUsYUFBTyxTQUFTLEdBQUUsR0FBRTtBQUFDLFlBQUksSUFBRSxFQUFFO0FBQVUsVUFBRSxVQUFRLFNBQVNFLElBQUU7QUFBQyxpQkFBTyxLQUFLLE9BQU8sRUFBRSxFQUFFQSxFQUFDLElBQUUsS0FBSyxNQUFNLEtBQUssTUFBTSxJQUFFLEtBQUcsQ0FBQyxJQUFFLEtBQUssTUFBTSxLQUFLLE1BQU0sSUFBRSxJQUFFLEtBQUdBLEtBQUUsRUFBRTtBQUFBLFFBQUM7QUFBRSxZQUFJLElBQUUsRUFBRTtBQUFJLFVBQUUsTUFBSSxTQUFTQyxJQUFFQyxJQUFFO0FBQUMsaUJBQU9ELEtBQUUsT0FBT0EsRUFBQyxHQUFF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RTtBQUFBLFFBQUUsR0FBRUEsR0FBRSxVQUFRLFdBQVU7QUFBQyxpQkFBTyxFQUFFLEtBQUssRUFBRTtBQUFBLFFBQUMsR0FBRUEsR0FBRSxTQUFPLFNBQVNULElBQUVDLElBQUU7QUFBQyxjQUFHLENBQUNELEdBQUUsUUFBTyxLQUFLO0FBQUcsY0FBSUUsS0FBRSxLQUFLLE1BQU0sR0FBRUMsS0FBRSxFQUFFSCxJQUFFQyxJQUFFLElBQUU7QUFBRSxpQkFBT0UsT0FBSUQsR0FBRSxLQUFHQyxLQUFHRDtBQUFBLFFBQUMsR0FBRU8sR0FBRSxRQUFNLFdBQVU7QUFBQyxpQkFBTyxFQUFFLEVBQUUsS0FBSyxJQUFHLElBQUk7QUFBQSxRQUFDLEdBQUVBLEdBQUUsU0FBTyxXQUFVO0FBQUMsaUJBQU8sSUFBSSxLQUFLLEtBQUssUUFBUSxDQUFDO0FBQUEsUUFBQyxHQUFFQSxHQUFFLFNBQU8sV0FBVTtBQUFDLGlCQUFPLEtBQUssUUFBUSxJQUFFLEtBQUssWUFBWSxJQUFFO0FBQUEsUUFBSSxHQUFFQSxHQUFFLGNBQVksV0FBVTtBQUFDLGlCQUFPLEtBQUssR0FBRyxZQUFZO0FBQUEsUUFBQyxHQUFFQSxHQUFFLFdBQVMsV0FBVTtBQUFDLGlCQUFPLEtBQUssR0FBRyxZQUFZO0FBQUEsUUFBQyxHQUFFRDtBQUFBLE1BQUMsRUFBRSxHQUFFLElBQUUsRUFBRTtBQUFVLGFBQU8sRUFBRSxZQUFVLEdBQUUsQ0FBQyxDQUFDLE9BQU0sQ0FBQyxHQUFFLENBQUMsTUFBSyxDQUFDLEdBQUUsQ0FBQyxNQUFLLENBQUMsR0FBRSxDQUFDLE1BQUssQ0FBQyxHQUFFLENBQUMsTUFBSyxDQUFDLEdBQUUsQ0FBQyxNQUFLLENBQUMsR0FBRSxDQUFDLE1BQUssQ0FBQyxHQUFFLENBQUMsTUFBSyxDQUFDLENBQUMsRUFBRSxRQUFTLFNBQVNSLElBQUU7QUFBQyxVQUFFQSxHQUFFLENBQUMsQ0FBQyxJQUFFLFNBQVNDLElBQUU7QUFBQyxpQkFBTyxLQUFLLEdBQUdBLElBQUVELEdBQUUsQ0FBQyxHQUFFQSxHQUFFLENBQUMs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SDtBQUVKOyIsCiAgIm5hbWVzIjogWyJleHBvcnRzIiwgIm1vZHVsZSIsICJ0IiwgImUiLCAiaSIsICJyIiwgInMiLCAiZXhwb3J0cyIsICJtb2R1bGUiLCAidCIsICJlIiwgIm4iLCAiciIsICJpIiwgInMiLCAidSIsICJhIiwgIk0iLCAibSIsICJmIiwgImwiLCAiJCIsICJ5IiwgInYiLCAiZyIsICJEIiwgIm8iLCAiZCIsICJjIiwgImgiLCAiZXhwb3J0cyIsICJtb2R1bGUiLCAiZSIsICJ0IiwgInIiLCAiZXhwb3J0cyIsICJtb2R1bGUiLCAiaSIsICJuIiwgImYiLCAiZSIsICJleHBvcnRzIiwgIm1vZHVsZSIsICJ0IiwgImkiLCAiZSIsICJzIiwgImYiLCAibiIsICJ1IiwgIm8iLCAiciIsICJleHBvcnRzIiwgIm1vZHVsZSIsICJ0IiwgIm4iLCAiaSIsICJvIiwgInIiLCAiZSIsICJ1IiwgImYiLCAicyIsICJhIiwgImV4cG9ydHMiLCAibW9kdWxlIiwgInIiLCAiZSIsICJ0IiwgIm8iLCAibiIsICJpIiwgImQiLCAiaW1wb3J0X2RheWpzIiwgIk1lcmlkaWVtIiwgIldlZWtkYXkiLCAiTW9udGgiLCAiZGF5anMiLCAiZGF5anMiLCAicXVhcnRlck9mWWVhciIsICJpbXBvcnRfZGF5anMiLCAiZGF5anMiLCAiUEFUVEVSTiIsICJNT05USF9OQU1FX0dST1VQIiwgIkRBVEVfR1JPVVAiLCAiREFURV9UT19HUk9VUCIsICJZRUFSX0dST1VQIiwgIlBBVFRFUk4iLCAiTU9OVEhfTkFNRV9HUk9VUCIsICJZRUFSX0dST1VQIiwgIlBBVFRFUk4iLCAiTU9OVEhfTkFNRV9HUk9VUCIsICJQQVRURVJOIiwgIllFQVJfR1JPVVAiLCAic3RyaWN0IiwgIlBBVFRFUk4iLCAiUEFUVEVSTiIsICJTVFJJQ1RfUEFUVEVSTiIsICJpbXBvcnRfZGF5anMiLCAiaW1wbHlTaW1pbGFyRGF0ZSIsICJkYXlqcyIsICJpbXBseVNpbWlsYXJEYXRlIiwgIlBBVFRFUk4iLCAiWUVBUl9OVU1CRVJfR1JPVVAiLCAiTU9OVEhfTlVNQkVSX0dST1VQIiwgIkRBVEVfTlVNQkVSX0dST1VQIiwgImNvbmZpZ3VyYXRpb24iLCAiaW1wb3J0X2RheWpzIiwgImltcG9ydF9kYXlqcyIsICJkYXlqcyIsICJkYXlqcyIsICJQQVRURVJOIiwgImRheWpzIiwgIlBBVFRFUk4iLCAiUEFUVEVSTiIsICJQUkVGSVhfR1JPVVAiLCAiaW1wb3J0X2RheWpzIiwgIlBBVFRFUk4iLCAiZGF5anMiLCAiUEFUVEVSTiIsICJZRUFSX0dST1VQIiwgIlBBVFRFUk4iLCAiWUVBUl9HUk9VUCIsICJjb25maWd1cmF0aW9uIiwgImNhc3VhbCIsICJjYXN1YWwiLCAiaW1wb3J0X2RheWpzIiwgImltcG9ydF90aW1lem9uZSIsICJkYXlqcyIsICJhZHZhbmNlZEZvcm1hdFBsdWdpbiIsICJ3ZWVrT2ZZZWFyUGx1Z2luIiwgInV0Y1BsdWdpbiIsICJ0aW1lem9uZVBsdWdpbiIsICJyZWxhdGl2ZVRpbWVQbHVnaW4iXQp9Cg==
