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
var PATTERN9 = /(now|today|tonight|tomorrow|overmorrow|tmr|tmrw|yesterday|last\s*night)(?=\W|$)/i;
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

// src/datetime.tsx
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
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vbm9kZV9tb2R1bGVzL2RheWpzL3BsdWdpbi9xdWFydGVyT2ZZZWFyLmpzIiwgIi4uL25vZGVfbW9kdWxlcy9kYXlqcy9kYXlqcy5taW4uanMiLCAiLi4vbm9kZV9tb2R1bGVzL2RheWpzL3BsdWdpbi9hZHZhbmNlZEZvcm1hdC5qcyIsICIuLi9ub2RlX21vZHVsZXMvZGF5anMvcGx1Z2luL3dlZWtPZlllYXIuanMiLCAiLi4vbm9kZV9tb2R1bGVzL2RheWpzL3BsdWdpbi91dGMuanMiLCAiLi4vbm9kZV9tb2R1bGVzL2RheWpzL3BsdWdpbi90aW1lem9uZS5qcyIsICIuLi9ub2RlX21vZHVsZXMvZGF5anMvcGx1Z2luL3JlbGF0aXZlVGltZS5qcyIsICIuLi9zcmMvZGF0ZXRpbWUudHN4IiwgIi4uL25vZGVfbW9kdWxlcy9jaHJvbm8tbm9kZS9zcmMvcmVzdWx0cy50cyIsICIuLi9ub2RlX21vZHVsZXMvY2hyb25vLW5vZGUvc3JjL3R5cGVzLnRzIiwgIi4uL25vZGVfbW9kdWxlcy9jaHJvbm8tbm9kZS9zcmMvdXRpbHMvZGF5anMudHMiLCAiLi4vbm9kZV9tb2R1bGVzL2Nocm9uby1ub2RlL3NyYy90aW1lem9uZS50cyIsICIuLi9ub2RlX21vZHVsZXMvY2hyb25vLW5vZGUvc3JjL3V0aWxzL3BhdHRlcm4udHMiLCAiLi4vbm9kZV9tb2R1bGVzL2Nocm9uby1ub2RlL3NyYy9jYWxjdWxhdGlvbi95ZWFycy50cyIsICIuLi9ub2RlX21vZHVsZXMvY2hyb25vLW5vZGUvc3JjL2xvY2FsZXMvZW4vY29uc3RhbnRzLnRzIiwgIi4uL25vZGVfbW9kdWxlcy9jaHJvbm8tbm9kZS9zcmMvY29tbW9uL3BhcnNlcnMvQWJzdHJhY3RQYXJzZXJXaXRoV29yZEJvdW5kYXJ5LnRzIiwgIi4uL25vZGVfbW9kdWxlcy9jaHJvbm8tbm9kZS9zcmMvbG9jYWxlcy9lbi9wYXJzZXJzL0VOVGltZVVuaXRXaXRoaW5Gb3JtYXRQYXJzZXIudHMiLCAiLi4vbm9kZV9tb2R1bGVzL2Nocm9uby1ub2RlL3NyYy9sb2NhbGVzL2VuL3BhcnNlcnMvRU5Nb250aE5hbWVMaXR0bGVFbmRpYW5QYXJzZXIudHMiLCAiLi4vbm9kZV9tb2R1bGVzL2Nocm9uby1ub2RlL3NyYy9sb2NhbGVzL2VuL3BhcnNlcnMvRU5Nb250aE5hbWVNaWRkbGVFbmRpYW5QYXJzZXIudHMiLCAiLi4vbm9kZV9tb2R1bGVzL2Nocm9uby1ub2RlL3NyYy9sb2NhbGVzL2VuL3BhcnNlcnMvRU5Nb250aE5hbWVQYXJzZXIudHMiLCAiLi4vbm9kZV9tb2R1bGVzL2Nocm9uby1ub2RlL3NyYy9sb2NhbGVzL2VuL3BhcnNlcnMvRU5ZZWFyTW9udGhEYXlQYXJzZXIudHMiLCAiLi4vbm9kZV9tb2R1bGVzL2Nocm9uby1ub2RlL3NyYy9sb2NhbGVzL2VuL3BhcnNlcnMvRU5TbGFzaE1vbnRoRm9ybWF0UGFyc2VyLnRzIiwgIi4uL25vZGVfbW9kdWxlcy9jaHJvbm8tbm9kZS9zcmMvY29tbW9uL3BhcnNlcnMvQWJzdHJhY3RUaW1lRXhwcmVzc2lvblBhcnNlci50cyIsICIuLi9ub2RlX21vZHVsZXMvY2hyb25vLW5vZGUvc3JjL2xvY2FsZXMvZW4vcGFyc2Vycy9FTlRpbWVFeHByZXNzaW9uUGFyc2VyLnRzIiwgIi4uL25vZGVfbW9kdWxlcy9jaHJvbm8tbm9kZS9zcmMvdXRpbHMvdGltZXVuaXRzLnRzIiwgIi4uL25vZGVfbW9kdWxlcy9jaHJvbm8tbm9kZS9zcmMvbG9jYWxlcy9lbi9wYXJzZXJzL0VOVGltZVVuaXRBZ29Gb3JtYXRQYXJzZXIudHMiLCAiLi4vbm9kZV9tb2R1bGVzL2Nocm9uby1ub2RlL3NyYy9sb2NhbGVzL2VuL3BhcnNlcnMvRU5UaW1lVW5pdExhdGVyRm9ybWF0UGFyc2VyLnRzIiwgIi4uL25vZGVfbW9kdWxlcy9jaHJvbm8tbm9kZS9zcmMvY29tbW9uL2Fic3RyYWN0UmVmaW5lcnMudHMiLCAiLi4vbm9kZV9tb2R1bGVzL2Nocm9uby1ub2RlL3NyYy9jb21tb24vcmVmaW5lcnMvQWJzdHJhY3RNZXJnZURhdGVSYW5nZVJlZmluZXIudHMiLCAiLi4vbm9kZV9tb2R1bGVzL2Nocm9uby1ub2RlL3NyYy9sb2NhbGVzL2VuL3JlZmluZXJzL0VOTWVyZ2VEYXRlUmFuZ2VSZWZpbmVyLnRzIiwgIi4uL25vZGVfbW9kdWxlcy9jaHJvbm8tbm9kZS9zcmMvY2FsY3VsYXRpb24vbWVyZ2luZ0NhbGN1bGF0aW9uLnRzIiwgIi4uL25vZGVfbW9kdWxlcy9jaHJvbm8tbm9kZS9zcmMvY29tbW9uL3JlZmluZXJzL0Fic3RyYWN0TWVyZ2VEYXRlVGltZVJlZmluZXIudHMiLCAiLi4vbm9kZV9tb2R1bGVzL2Nocm9uby1ub2RlL3NyYy9sb2NhbGVzL2VuL3JlZmluZXJzL0VOTWVyZ2VEYXRlVGltZVJlZmluZXIudHMiLCAiLi4vbm9kZV9tb2R1bGVzL2Nocm9uby1ub2RlL3NyYy9jb21tb24vcmVmaW5lcnMvRXh0cmFjdFRpbWV6b25lQWJiclJlZmluZXIudHMiLCAiLi4vbm9kZV9tb2R1bGVzL2Nocm9uby1ub2RlL3NyYy9jb21tb24vcmVmaW5lcnMvRXh0cmFjdFRpbWV6b25lT2Zmc2V0UmVmaW5lci50cyIsICIuLi9ub2RlX21vZHVsZXMvY2hyb25vLW5vZGUvc3JjL2NvbW1vbi9yZWZpbmVycy9PdmVybGFwUmVtb3ZhbFJlZmluZXIudHMiLCAiLi4vbm9kZV9tb2R1bGVzL2Nocm9uby1ub2RlL3NyYy9jb21tb24vcmVmaW5lcnMvRm9yd2FyZERhdGVSZWZpbmVyLnRzIiwgIi4uL25vZGVfbW9kdWxlcy9jaHJvbm8tbm9kZS9zcmMvY29tbW9uL3JlZmluZXJzL1VubGlrZWx5Rm9ybWF0RmlsdGVyLnRzIiwgIi4uL25vZGVfbW9kdWxlcy9jaHJvbm8tbm9kZS9zcmMvY29tbW9uL3BhcnNlcnMvSVNPRm9ybWF0UGFyc2VyLnRzIiwgIi4uL25vZGVfbW9kdWxlcy9jaHJvbm8tbm9kZS9zcmMvY29tbW9uL3JlZmluZXJzL01lcmdlV2Vla2RheUNvbXBvbmVudFJlZmluZXIudHMiLCAiLi4vbm9kZV9tb2R1bGVzL2Nocm9uby1ub2RlL3NyYy9jb25maWd1cmF0aW9ucy50cyIsICIuLi9ub2RlX21vZHVsZXMvY2hyb25vLW5vZGUvc3JjL2xvY2FsZXMvZW4vcGFyc2Vycy9FTkNhc3VhbERhdGVQYXJzZXIudHMiLCAiLi4vbm9kZV9tb2R1bGVzL2Nocm9uby1ub2RlL3NyYy9jb21tb24vY2FzdWFsUmVmZXJlbmNlcy50cyIsICIuLi9ub2RlX21vZHVsZXMvY2hyb25vLW5vZGUvc3JjL2xvY2FsZXMvZW4vcGFyc2Vycy9FTkNhc3VhbFRpbWVQYXJzZXIudHMiLCAiLi4vbm9kZV9tb2R1bGVzL2Nocm9uby1ub2RlL3NyYy9jb21tb24vY2FsY3VsYXRpb24vd2Vla2RheXMudHMiLCAiLi4vbm9kZV9tb2R1bGVzL2Nocm9uby1ub2RlL3NyYy9sb2NhbGVzL2VuL3BhcnNlcnMvRU5XZWVrZGF5UGFyc2VyLnRzIiwgIi4uL25vZGVfbW9kdWxlcy9jaHJvbm8tbm9kZS9zcmMvbG9jYWxlcy9lbi9wYXJzZXJzL0VOUmVsYXRpdmVEYXRlRm9ybWF0UGFyc2VyLnRzIiwgIi4uL25vZGVfbW9kdWxlcy9jaHJvbm8tbm9kZS9zcmMvY29tbW9uL3BhcnNlcnMvU2xhc2hEYXRlRm9ybWF0UGFyc2VyLnRzIiwgIi4uL25vZGVfbW9kdWxlcy9jaHJvbm8tbm9kZS9zcmMvbG9jYWxlcy9lbi9wYXJzZXJzL0VOVGltZVVuaXRDYXN1YWxSZWxhdGl2ZUZvcm1hdFBhcnNlci50cyIsICIuLi9ub2RlX21vZHVsZXMvY2hyb25vLW5vZGUvc3JjL2xvY2FsZXMvZW4vcmVmaW5lcnMvRU5NZXJnZVJlbGF0aXZlQWZ0ZXJEYXRlUmVmaW5lci50cyIsICIuLi9ub2RlX21vZHVsZXMvY2hyb25vLW5vZGUvc3JjL2xvY2FsZXMvZW4vcmVmaW5lcnMvRU5NZXJnZVJlbGF0aXZlRm9sbG93QnlEYXRlUmVmaW5lci50cyIsICIuLi9ub2RlX21vZHVsZXMvY2hyb25vLW5vZGUvc3JjL2xvY2FsZXMvZW4vcmVmaW5lcnMvRU5FeHRyYWN0WWVhclN1ZmZpeFJlZmluZXIudHMiLCAiLi4vbm9kZV9tb2R1bGVzL2Nocm9uby1ub2RlL3NyYy9sb2NhbGVzL2VuL3JlZmluZXJzL0VOVW5saWtlbHlGb3JtYXRGaWx0ZXIudHMiLCAiLi4vbm9kZV9tb2R1bGVzL2Nocm9uby1ub2RlL3NyYy9sb2NhbGVzL2VuL2NvbmZpZ3VyYXRpb24udHMiLCAiLi4vbm9kZV9tb2R1bGVzL2Nocm9uby1ub2RlL3NyYy9jaHJvbm8udHMiLCAiLi4vbm9kZV9tb2R1bGVzL2Nocm9uby1ub2RlL3NyYy9sb2NhbGVzL2VuL2luZGV4LnRzIiwgIi4uL25vZGVfbW9kdWxlcy9jaHJvbm8tbm9kZS9zcmMvaW5kZXgudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbIiFmdW5jdGlvbih0LG4pe1wib2JqZWN0XCI9PXR5cGVvZiBleHBvcnRzJiZcInVuZGVmaW5lZFwiIT10eXBlb2YgbW9kdWxlP21vZHVsZS5leHBvcnRzPW4oKTpcImZ1bmN0aW9uXCI9PXR5cGVvZiBkZWZpbmUmJmRlZmluZS5hbWQ/ZGVmaW5lKG4pOih0PVwidW5kZWZpbmVkXCIhPXR5cGVvZiBnbG9iYWxUaGlzP2dsb2JhbFRoaXM6dHx8c2VsZikuZGF5anNfcGx1Z2luX3F1YXJ0ZXJPZlllYXI9bigpfSh0aGlzLChmdW5jdGlvbigpe1widXNlIHN0cmljdFwiO3ZhciB0PVwibW9udGhcIixuPVwicXVhcnRlclwiO3JldHVybiBmdW5jdGlvbihlLGkpe3ZhciByPWkucHJvdG90eXBlO3IucXVhcnRlcj1mdW5jdGlvbih0KXtyZXR1cm4gdGhpcy4kdXRpbHMoKS51KHQpP01hdGguY2VpbCgodGhpcy5tb250aCgpKzEpLzMpOnRoaXMubW9udGgodGhpcy5tb250aCgpJTMrMyoodC0xKSl9O3ZhciBzPXIuYWRkO3IuYWRkPWZ1bmN0aW9uKGUsaSl7cmV0dXJuIGU9TnVtYmVyKGUpLHRoaXMuJHV0aWxzKCkucChpKT09PW4/dGhpcy5hZGQoMyplLHQpOnMuYmluZCh0aGlzKShlLGkpfTt2YXIgdT1yLnN0YXJ0T2Y7ci5zdGFydE9mPWZ1bmN0aW9uKGUsaSl7dmFyIHI9dGhpcy4kdXRpbHMoKSxzPSEhci51KGkpfHxpO2lmKHIucChlKT09PW4pe3ZhciBvPXRoaXMucXVhcnRlcigpLTE7cmV0dXJuIHM/dGhpcy5tb250aCgzKm8pLnN0YXJ0T2YodCkuc3RhcnRPZihcImRheVwiKTp0aGlzLm1vbnRoKDMqbysyKS5lbmRPZih0KS5lbmRPZihcImRheVwiKX1yZXR1cm4gdS5iaW5kKHRoaXMpKGUsaSl9fX0pKTsiLCAiIWZ1bmN0aW9uKHQsZSl7XCJvYmplY3RcIj09dHlwZW9mIGV4cG9ydHMmJlwidW5kZWZpbmVkXCIhPXR5cGVvZiBtb2R1bGU/bW9kdWxlLmV4cG9ydHM9ZSgpOlwiZnVuY3Rpb25cIj09dHlwZW9mIGRlZmluZSYmZGVmaW5lLmFtZD9kZWZpbmUoZSk6KHQ9XCJ1bmRlZmluZWRcIiE9dHlwZW9mIGdsb2JhbFRoaXM/Z2xvYmFsVGhpczp0fHxzZWxmKS5kYXlqcz1lKCl9KHRoaXMsKGZ1bmN0aW9uKCl7XCJ1c2Ugc3RyaWN0XCI7dmFyIHQ9MWUzLGU9NmU0LG49MzZlNSxyPVwibWlsbGlzZWNvbmRcIixpPVwic2Vjb25kXCIscz1cIm1pbnV0ZVwiLHU9XCJob3VyXCIsYT1cImRheVwiLG89XCJ3ZWVrXCIsYz1cIm1vbnRoXCIsZj1cInF1YXJ0ZXJcIixoPVwieWVhclwiLGQ9XCJkYXRlXCIsbD1cIkludmFsaWQgRGF0ZVwiLCQ9L14oXFxkezR9KVstL10/KFxcZHsxLDJ9KT9bLS9dPyhcXGR7MCwyfSlbVHRcXHNdKihcXGR7MSwyfSk/Oj8oXFxkezEsMn0pPzo/KFxcZHsxLDJ9KT9bLjpdPyhcXGQrKT8kLyx5PS9cXFsoW15cXF1dKyldfFl7MSw0fXxNezEsNH18RHsxLDJ9fGR7MSw0fXxIezEsMn18aHsxLDJ9fGF8QXxtezEsMn18c3sxLDJ9fFp7MSwyfXxTU1MvZyxNPXtuYW1lOlwiZW5cIix3ZWVrZGF5czpcIlN1bmRheV9Nb25kYXlfVHVlc2RheV9XZWRuZXNkYXlfVGh1cnNkYXlfRnJpZGF5X1NhdHVyZGF5XCIuc3BsaXQoXCJfXCIpLG1vbnRoczpcIkphbnVhcnlfRmVicnVhcnlfTWFyY2hfQXByaWxfTWF5X0p1bmVfSnVseV9BdWd1c3RfU2VwdGVtYmVyX09jdG9iZXJfTm92ZW1iZXJfRGVjZW1iZXJcIi5zcGxpdChcIl9cIiksb3JkaW5hbDpmdW5jdGlvbih0KXt2YXIgZT1bXCJ0aFwiLFwic3RcIixcIm5kXCIsXCJyZFwiXSxuPXQlMTAwO3JldHVyblwiW1wiK3QrKGVbKG4tMjApJTEwXXx8ZVtuXXx8ZVswXSkrXCJdXCJ9fSxtPWZ1bmN0aW9uKHQsZSxuKXt2YXIgcj1TdHJpbmcodCk7cmV0dXJuIXJ8fHIubGVuZ3RoPj1lP3Q6XCJcIitBcnJheShlKzEtci5sZW5ndGgpLmpvaW4obikrdH0sdj17czptLHo6ZnVuY3Rpb24odCl7dmFyIGU9LXQudXRjT2Zmc2V0KCksbj1NYXRoLmFicyhlKSxyPU1hdGguZmxvb3Iobi82MCksaT1uJTYwO3JldHVybihlPD0wP1wiK1wiOlwiLVwiKSttKHIsMixcIjBcIikrXCI6XCIrbShpLDIsXCIwXCIpfSxtOmZ1bmN0aW9uIHQoZSxuKXtpZihlLmRhdGUoKTxuLmRhdGUoKSlyZXR1cm4tdChuLGUpO3ZhciByPTEyKihuLnllYXIoKS1lLnllYXIoKSkrKG4ubW9udGgoKS1lLm1vbnRoKCkpLGk9ZS5jbG9uZSgpLmFkZChyLGMpLHM9bi1pPDAsdT1lLmNsb25lKCkuYWRkKHIrKHM/LTE6MSksYyk7cmV0dXJuKygtKHIrKG4taSkvKHM/aS11OnUtaSkpfHwwKX0sYTpmdW5jdGlvbih0KXtyZXR1cm4gdDwwP01hdGguY2VpbCh0KXx8MDpNYXRoLmZsb29yKHQpfSxwOmZ1bmN0aW9uKHQpe3JldHVybntNOmMseTpoLHc6byxkOmEsRDpkLGg6dSxtOnMsczppLG1zOnIsUTpmfVt0XXx8U3RyaW5nKHR8fFwiXCIpLnRvTG93ZXJDYXNlKCkucmVwbGFjZSgvcyQvLFwiXCIpfSx1OmZ1bmN0aW9uKHQpe3JldHVybiB2b2lkIDA9PT10fX0sZz1cImVuXCIsRD17fTtEW2ddPU07dmFyIHA9XCIkaXNEYXlqc09iamVjdFwiLFM9ZnVuY3Rpb24odCl7cmV0dXJuIHQgaW5zdGFuY2VvZiBffHwhKCF0fHwhdFtwXSl9LHc9ZnVuY3Rpb24gdChlLG4scil7dmFyIGk7aWYoIWUpcmV0dXJuIGc7aWYoXCJzdHJpbmdcIj09dHlwZW9mIGUpe3ZhciBzPWUudG9Mb3dlckNhc2UoKTtEW3NdJiYoaT1zKSxuJiYoRFtzXT1uLGk9cyk7dmFyIHU9ZS5zcGxpdChcIi1cIik7aWYoIWkmJnUubGVuZ3RoPjEpcmV0dXJuIHQodVswXSl9ZWxzZXt2YXIgYT1lLm5hbWU7RFthXT1lLGk9YX1yZXR1cm4hciYmaSYmKGc9aSksaXx8IXImJmd9LE89ZnVuY3Rpb24odCxlKXtpZihTKHQpKXJldHVybiB0LmNsb25lKCk7dmFyIG49XCJvYmplY3RcIj09dHlwZW9mIGU/ZTp7fTtyZXR1cm4gbi5kYXRlPXQsbi5hcmdzPWFyZ3VtZW50cyxuZXcgXyhuKX0sYj12O2IubD13LGIuaT1TLGIudz1mdW5jdGlvbih0LGUpe3JldHVybiBPKHQse2xvY2FsZTplLiRMLHV0YzplLiR1LHg6ZS4keCwkb2Zmc2V0OmUuJG9mZnNldH0pfTt2YXIgXz1mdW5jdGlvbigpe2Z1bmN0aW9uIE0odCl7dGhpcy4kTD13KHQubG9jYWxlLG51bGwsITApLHRoaXMucGFyc2UodCksdGhpcy4keD10aGlzLiR4fHx0Lnh8fHt9LHRoaXNbcF09ITB9dmFyIG09TS5wcm90b3R5cGU7cmV0dXJuIG0ucGFyc2U9ZnVuY3Rpb24odCl7dGhpcy4kZD1mdW5jdGlvbih0KXt2YXIgZT10LmRhdGUsbj10LnV0YztpZihudWxsPT09ZSlyZXR1cm4gbmV3IERhdGUoTmFOKTtpZihiLnUoZSkpcmV0dXJuIG5ldyBEYXRlO2lmKGUgaW5zdGFuY2VvZiBEYXRlKXJldHVybiBuZXcgRGF0ZShlKTtpZihcInN0cmluZ1wiPT10eXBlb2YgZSYmIS9aJC9pLnRlc3QoZSkpe3ZhciByPWUubWF0Y2goJCk7aWYocil7dmFyIGk9clsyXS0xfHwwLHM9KHJbN118fFwiMFwiKS5zdWJzdHJpbmcoMCwzKTtyZXR1cm4gbj9uZXcgRGF0ZShEYXRlLlVUQyhyWzFdLGksclszXXx8MSxyWzRdfHwwLHJbNV18fDAscls2XXx8MCxzKSk6bmV3IERhdGUoclsxXSxpLHJbM118fDEscls0XXx8MCxyWzVdfHwwLHJbNl18fDAscyl9fXJldHVybiBuZXcgRGF0ZShlKX0odCksdGhpcy5pbml0KCl9LG0uaW5pdD1mdW5jdGlvbigpe3ZhciB0PXRoaXMuJGQ7dGhpcy4keT10LmdldEZ1bGxZZWFyKCksdGhpcy4kTT10LmdldE1vbnRoKCksdGhpcy4kRD10LmdldERhdGUoKSx0aGlzLiRXPXQuZ2V0RGF5KCksdGhpcy4kSD10LmdldEhvdXJzKCksdGhpcy4kbT10LmdldE1pbnV0ZXMoKSx0aGlzLiRzPXQuZ2V0U2Vjb25kcygpLHRoaXMuJG1zPXQuZ2V0TWlsbGlzZWNvbmRzKCl9LG0uJHV0aWxzPWZ1bmN0aW9uKCl7cmV0dXJuIGJ9LG0uaXNWYWxpZD1mdW5jdGlvbigpe3JldHVybiEodGhpcy4kZC50b1N0cmluZygpPT09bCl9LG0uaXNTYW1lPWZ1bmN0aW9uKHQsZSl7dmFyIG49Tyh0KTtyZXR1cm4gdGhpcy5zdGFydE9mKGUpPD1uJiZuPD10aGlzLmVuZE9mKGUpfSxtLmlzQWZ0ZXI9ZnVuY3Rpb24odCxlKXtyZXR1cm4gTyh0KTx0aGlzLnN0YXJ0T2YoZSl9LG0uaXNCZWZvcmU9ZnVuY3Rpb24odCxlKXtyZXR1cm4gdGhpcy5lbmRPZihlKTxPKHQpfSxtLiRnPWZ1bmN0aW9uKHQsZSxuKXtyZXR1cm4gYi51KHQpP3RoaXNbZV06dGhpcy5zZXQobix0KX0sbS51bml4PWZ1bmN0aW9uKCl7cmV0dXJuIE1hdGguZmxvb3IodGhpcy52YWx1ZU9mKCkvMWUzKX0sbS52YWx1ZU9mPWZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuJGQuZ2V0VGltZSgpfSxtLnN0YXJ0T2Y9ZnVuY3Rpb24odCxlKXt2YXIgbj10aGlzLHI9ISFiLnUoZSl8fGUsZj1iLnAodCksbD1mdW5jdGlvbih0LGUpe3ZhciBpPWIudyhuLiR1P0RhdGUuVVRDKG4uJHksZSx0KTpuZXcgRGF0ZShuLiR5LGUsdCksbik7cmV0dXJuIHI/aTppLmVuZE9mKGEpfSwkPWZ1bmN0aW9uKHQsZSl7cmV0dXJuIGIudyhuLnRvRGF0ZSgpW3RdLmFwcGx5KG4udG9EYXRlKFwic1wiKSwocj9bMCwwLDAsMF06WzIzLDU5LDU5LDk5OV0pLnNsaWNlKGUpKSxuKX0seT10aGlzLiRXLE09dGhpcy4kTSxtPXRoaXMuJEQsdj1cInNldFwiKyh0aGlzLiR1P1wiVVRDXCI6XCJcIik7c3dpdGNoKGYpe2Nhc2UgaDpyZXR1cm4gcj9sKDEsMCk6bCgzMSwxMSk7Y2FzZSBjOnJldHVybiByP2woMSxNKTpsKDAsTSsxKTtjYXNlIG86dmFyIGc9dGhpcy4kbG9jYWxlKCkud2Vla1N0YXJ0fHwwLEQ9KHk8Zz95Kzc6eSktZztyZXR1cm4gbChyP20tRDptKyg2LUQpLE0pO2Nhc2UgYTpjYXNlIGQ6cmV0dXJuICQoditcIkhvdXJzXCIsMCk7Y2FzZSB1OnJldHVybiAkKHYrXCJNaW51dGVzXCIsMSk7Y2FzZSBzOnJldHVybiAkKHYrXCJTZWNvbmRzXCIsMik7Y2FzZSBpOnJldHVybiAkKHYrXCJNaWxsaXNlY29uZHNcIiwzKTtkZWZhdWx0OnJldHVybiB0aGlzLmNsb25lKCl9fSxtLmVuZE9mPWZ1bmN0aW9uKHQpe3JldHVybiB0aGlzLnN0YXJ0T2YodCwhMSl9LG0uJHNldD1mdW5jdGlvbih0LGUpe3ZhciBuLG89Yi5wKHQpLGY9XCJzZXRcIisodGhpcy4kdT9cIlVUQ1wiOlwiXCIpLGw9KG49e30sblthXT1mK1wiRGF0ZVwiLG5bZF09ZitcIkRhdGVcIixuW2NdPWYrXCJNb250aFwiLG5baF09ZitcIkZ1bGxZZWFyXCIsblt1XT1mK1wiSG91cnNcIixuW3NdPWYrXCJNaW51dGVzXCIsbltpXT1mK1wiU2Vjb25kc1wiLG5bcl09ZitcIk1pbGxpc2Vjb25kc1wiLG4pW29dLCQ9bz09PWE/dGhpcy4kRCsoZS10aGlzLiRXKTplO2lmKG89PT1jfHxvPT09aCl7dmFyIHk9dGhpcy5jbG9uZSgpLnNldChkLDEpO3kuJGRbbF0oJCkseS5pbml0KCksdGhpcy4kZD15LnNldChkLE1hdGgubWluKHRoaXMuJEQseS5kYXlzSW5Nb250aCgpKSkuJGR9ZWxzZSBsJiZ0aGlzLiRkW2xdKCQpO3JldHVybiB0aGlzLmluaXQoKSx0aGlzfSxtLnNldD1mdW5jdGlvbih0LGUpe3JldHVybiB0aGlzLmNsb25lKCkuJHNldCh0LGUpfSxtLmdldD1mdW5jdGlvbih0KXtyZXR1cm4gdGhpc1tiLnAodCldKCl9LG0uYWRkPWZ1bmN0aW9uKHIsZil7dmFyIGQsbD10aGlzO3I9TnVtYmVyKHIpO3ZhciAkPWIucChmKSx5PWZ1bmN0aW9uKHQpe3ZhciBlPU8obCk7cmV0dXJuIGIudyhlLmRhdGUoZS5kYXRlKCkrTWF0aC5yb3VuZCh0KnIpKSxsKX07aWYoJD09PWMpcmV0dXJuIHRoaXMuc2V0KGMsdGhpcy4kTStyKTtpZigkPT09aClyZXR1cm4gdGhpcy5zZXQoaCx0aGlzLiR5K3IpO2lmKCQ9PT1hKXJldHVybiB5KDEpO2lmKCQ9PT1vKXJldHVybiB5KDcpO3ZhciBNPShkPXt9LGRbc109ZSxkW3VdPW4sZFtpXT10LGQpWyRdfHwxLG09dGhpcy4kZC5nZXRUaW1lKCkrcipNO3JldHVybiBiLncobSx0aGlzKX0sbS5zdWJ0cmFjdD1mdW5jdGlvbih0LGUpe3JldHVybiB0aGlzLmFkZCgtMSp0LGUpfSxtLmZvcm1hdD1mdW5jdGlvbih0KXt2YXIgZT10aGlzLG49dGhpcy4kbG9jYWxlKCk7aWYoIXRoaXMuaXNWYWxpZCgpKXJldHVybiBuLmludmFsaWREYXRlfHxsO3ZhciByPXR8fFwiWVlZWS1NTS1ERFRISDptbTpzc1pcIixpPWIueih0aGlzKSxzPXRoaXMuJEgsdT10aGlzLiRtLGE9dGhpcy4kTSxvPW4ud2Vla2RheXMsYz1uLm1vbnRocyxmPW4ubWVyaWRpZW0saD1mdW5jdGlvbih0LG4saSxzKXtyZXR1cm4gdCYmKHRbbl18fHQoZSxyKSl8fGlbbl0uc2xpY2UoMCxzKX0sZD1mdW5jdGlvbih0KXtyZXR1cm4gYi5zKHMlMTJ8fDEyLHQsXCIwXCIpfSwkPWZ8fGZ1bmN0aW9uKHQsZSxuKXt2YXIgcj10PDEyP1wiQU1cIjpcIlBNXCI7cmV0dXJuIG4/ci50b0xvd2VyQ2FzZSgpOnJ9O3JldHVybiByLnJlcGxhY2UoeSwoZnVuY3Rpb24odCxyKXtyZXR1cm4gcnx8ZnVuY3Rpb24odCl7c3dpdGNoKHQpe2Nhc2VcIllZXCI6cmV0dXJuIFN0cmluZyhlLiR5KS5zbGljZSgtMik7Y2FzZVwiWVlZWVwiOnJldHVybiBiLnMoZS4keSw0LFwiMFwiKTtjYXNlXCJNXCI6cmV0dXJuIGErMTtjYXNlXCJNTVwiOnJldHVybiBiLnMoYSsxLDIsXCIwXCIpO2Nhc2VcIk1NTVwiOnJldHVybiBoKG4ubW9udGhzU2hvcnQsYSxjLDMpO2Nhc2VcIk1NTU1cIjpyZXR1cm4gaChjLGEpO2Nhc2VcIkRcIjpyZXR1cm4gZS4kRDtjYXNlXCJERFwiOnJldHVybiBiLnMoZS4kRCwyLFwiMFwiKTtjYXNlXCJkXCI6cmV0dXJuIFN0cmluZyhlLiRXKTtjYXNlXCJkZFwiOnJldHVybiBoKG4ud2Vla2RheXNNaW4sZS4kVyxvLDIpO2Nhc2VcImRkZFwiOnJldHVybiBoKG4ud2Vla2RheXNTaG9ydCxlLiRXLG8sMyk7Y2FzZVwiZGRkZFwiOnJldHVybiBvW2UuJFddO2Nhc2VcIkhcIjpyZXR1cm4gU3RyaW5nKHMpO2Nhc2VcIkhIXCI6cmV0dXJuIGIucyhzLDIsXCIwXCIpO2Nhc2VcImhcIjpyZXR1cm4gZCgxKTtjYXNlXCJoaFwiOnJldHVybiBkKDIpO2Nhc2VcImFcIjpyZXR1cm4gJChzLHUsITApO2Nhc2VcIkFcIjpyZXR1cm4gJChzLHUsITEpO2Nhc2VcIm1cIjpyZXR1cm4gU3RyaW5nKHUpO2Nhc2VcIm1tXCI6cmV0dXJuIGIucyh1LDIsXCIwXCIpO2Nhc2VcInNcIjpyZXR1cm4gU3RyaW5nKGUuJHMpO2Nhc2VcInNzXCI6cmV0dXJuIGIucyhlLiRzLDIsXCIwXCIpO2Nhc2VcIlNTU1wiOnJldHVybiBiLnMoZS4kbXMsMyxcIjBcIik7Y2FzZVwiWlwiOnJldHVybiBpfXJldHVybiBudWxsfSh0KXx8aS5yZXBsYWNlKFwiOlwiLFwiXCIpfSkpfSxtLnV0Y09mZnNldD1mdW5jdGlvbigpe3JldHVybiAxNSotTWF0aC5yb3VuZCh0aGlzLiRkLmdldFRpbWV6b25lT2Zmc2V0KCkvMTUpfSxtLmRpZmY9ZnVuY3Rpb24ocixkLGwpe3ZhciAkLHk9dGhpcyxNPWIucChkKSxtPU8ociksdj0obS51dGNPZmZzZXQoKS10aGlzLnV0Y09mZnNldCgpKSplLGc9dGhpcy1tLEQ9ZnVuY3Rpb24oKXtyZXR1cm4gYi5tKHksbSl9O3N3aXRjaChNKXtjYXNlIGg6JD1EKCkvMTI7YnJlYWs7Y2FzZSBjOiQ9RCgpO2JyZWFrO2Nhc2UgZjokPUQoKS8zO2JyZWFrO2Nhc2UgbzokPShnLXYpLzYwNDhlNTticmVhaztjYXNlIGE6JD0oZy12KS84NjRlNTticmVhaztjYXNlIHU6JD1nL247YnJlYWs7Y2FzZSBzOiQ9Zy9lO2JyZWFrO2Nhc2UgaTokPWcvdDticmVhaztkZWZhdWx0OiQ9Z31yZXR1cm4gbD8kOmIuYSgkKX0sbS5kYXlzSW5Nb250aD1mdW5jdGlvbigpe3JldHVybiB0aGlzLmVuZE9mKGMpLiREfSxtLiRsb2NhbGU9ZnVuY3Rpb24oKXtyZXR1cm4gRFt0aGlzLiRMXX0sbS5sb2NhbGU9ZnVuY3Rpb24odCxlKXtpZighdClyZXR1cm4gdGhpcy4kTDt2YXIgbj10aGlzLmNsb25lKCkscj13KHQsZSwhMCk7cmV0dXJuIHImJihuLiRMPXIpLG59LG0uY2xvbmU9ZnVuY3Rpb24oKXtyZXR1cm4gYi53KHRoaXMuJGQsdGhpcyl9LG0udG9EYXRlPWZ1bmN0aW9uKCl7cmV0dXJuIG5ldyBEYXRlKHRoaXMudmFsdWVPZigpKX0sbS50b0pTT049ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5pc1ZhbGlkKCk/dGhpcy50b0lTT1N0cmluZygpOm51bGx9LG0udG9JU09TdHJpbmc9ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy4kZC50b0lTT1N0cmluZygpfSxtLnRvU3RyaW5nPWZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuJGQudG9VVENTdHJpbmcoKX0sTX0oKSxrPV8ucHJvdG90eXBlO3JldHVybiBPLnByb3RvdHlwZT1rLFtbXCIkbXNcIixyXSxbXCIkc1wiLGldLFtcIiRtXCIsc10sW1wiJEhcIix1XSxbXCIkV1wiLGFdLFtcIiRNXCIsY10sW1wiJHlcIixoXSxbXCIkRFwiLGRdXS5mb3JFYWNoKChmdW5jdGlvbih0KXtrW3RbMV1dPWZ1bmN0aW9uKGUpe3JldHVybiB0aGlzLiRnKGUsdFswXSx0WzFdKX19KSksTy5leHRlbmQ9ZnVuY3Rpb24odCxlKXtyZXR1cm4gdC4kaXx8KHQoZSxfLE8pLHQuJGk9ITApLE99LE8ubG9jYWxlPXcsTy5pc0RheWpzPVMsTy51bml4PWZ1bmN0aW9uKHQpe3JldHVybiBPKDFlMyp0KX0sTy5lbj1EW2ddLE8uTHM9RCxPLnA9e30sT30pKTsiLCAiIWZ1bmN0aW9uKGUsdCl7XCJvYmplY3RcIj09dHlwZW9mIGV4cG9ydHMmJlwidW5kZWZpbmVkXCIhPXR5cGVvZiBtb2R1bGU/bW9kdWxlLmV4cG9ydHM9dCgpOlwiZnVuY3Rpb25cIj09dHlwZW9mIGRlZmluZSYmZGVmaW5lLmFtZD9kZWZpbmUodCk6KGU9XCJ1bmRlZmluZWRcIiE9dHlwZW9mIGdsb2JhbFRoaXM/Z2xvYmFsVGhpczplfHxzZWxmKS5kYXlqc19wbHVnaW5fYWR2YW5jZWRGb3JtYXQ9dCgpfSh0aGlzLChmdW5jdGlvbigpe1widXNlIHN0cmljdFwiO3JldHVybiBmdW5jdGlvbihlLHQpe3ZhciByPXQucHJvdG90eXBlLG49ci5mb3JtYXQ7ci5mb3JtYXQ9ZnVuY3Rpb24oZSl7dmFyIHQ9dGhpcyxyPXRoaXMuJGxvY2FsZSgpO2lmKCF0aGlzLmlzVmFsaWQoKSlyZXR1cm4gbi5iaW5kKHRoaXMpKGUpO3ZhciBzPXRoaXMuJHV0aWxzKCksYT0oZXx8XCJZWVlZLU1NLUREVEhIOm1tOnNzWlwiKS5yZXBsYWNlKC9cXFsoW15cXF1dKyldfFF8d298d3d8d3xXV3xXfHp6enx6fGdnZ2d8R0dHR3xEb3xYfHh8a3sxLDJ9fFMvZywoZnVuY3Rpb24oZSl7c3dpdGNoKGUpe2Nhc2VcIlFcIjpyZXR1cm4gTWF0aC5jZWlsKCh0LiRNKzEpLzMpO2Nhc2VcIkRvXCI6cmV0dXJuIHIub3JkaW5hbCh0LiREKTtjYXNlXCJnZ2dnXCI6cmV0dXJuIHQud2Vla1llYXIoKTtjYXNlXCJHR0dHXCI6cmV0dXJuIHQuaXNvV2Vla1llYXIoKTtjYXNlXCJ3b1wiOnJldHVybiByLm9yZGluYWwodC53ZWVrKCksXCJXXCIpO2Nhc2VcIndcIjpjYXNlXCJ3d1wiOnJldHVybiBzLnModC53ZWVrKCksXCJ3XCI9PT1lPzE6MixcIjBcIik7Y2FzZVwiV1wiOmNhc2VcIldXXCI6cmV0dXJuIHMucyh0Lmlzb1dlZWsoKSxcIldcIj09PWU/MToyLFwiMFwiKTtjYXNlXCJrXCI6Y2FzZVwia2tcIjpyZXR1cm4gcy5zKFN0cmluZygwPT09dC4kSD8yNDp0LiRIKSxcImtcIj09PWU/MToyLFwiMFwiKTtjYXNlXCJYXCI6cmV0dXJuIE1hdGguZmxvb3IodC4kZC5nZXRUaW1lKCkvMWUzKTtjYXNlXCJ4XCI6cmV0dXJuIHQuJGQuZ2V0VGltZSgpO2Nhc2VcInpcIjpyZXR1cm5cIltcIit0Lm9mZnNldE5hbWUoKStcIl1cIjtjYXNlXCJ6enpcIjpyZXR1cm5cIltcIit0Lm9mZnNldE5hbWUoXCJsb25nXCIpK1wiXVwiO2RlZmF1bHQ6cmV0dXJuIGV9fSkpO3JldHVybiBuLmJpbmQodGhpcykoYSl9fX0pKTsiLCAiIWZ1bmN0aW9uKGUsdCl7XCJvYmplY3RcIj09dHlwZW9mIGV4cG9ydHMmJlwidW5kZWZpbmVkXCIhPXR5cGVvZiBtb2R1bGU/bW9kdWxlLmV4cG9ydHM9dCgpOlwiZnVuY3Rpb25cIj09dHlwZW9mIGRlZmluZSYmZGVmaW5lLmFtZD9kZWZpbmUodCk6KGU9XCJ1bmRlZmluZWRcIiE9dHlwZW9mIGdsb2JhbFRoaXM/Z2xvYmFsVGhpczplfHxzZWxmKS5kYXlqc19wbHVnaW5fd2Vla09mWWVhcj10KCl9KHRoaXMsKGZ1bmN0aW9uKCl7XCJ1c2Ugc3RyaWN0XCI7dmFyIGU9XCJ3ZWVrXCIsdD1cInllYXJcIjtyZXR1cm4gZnVuY3Rpb24oaSxuLHIpe3ZhciBmPW4ucHJvdG90eXBlO2Yud2Vlaz1mdW5jdGlvbihpKXtpZih2b2lkIDA9PT1pJiYoaT1udWxsKSxudWxsIT09aSlyZXR1cm4gdGhpcy5hZGQoNyooaS10aGlzLndlZWsoKSksXCJkYXlcIik7dmFyIG49dGhpcy4kbG9jYWxlKCkueWVhclN0YXJ0fHwxO2lmKDExPT09dGhpcy5tb250aCgpJiZ0aGlzLmRhdGUoKT4yNSl7dmFyIGY9cih0aGlzKS5zdGFydE9mKHQpLmFkZCgxLHQpLmRhdGUobikscz1yKHRoaXMpLmVuZE9mKGUpO2lmKGYuaXNCZWZvcmUocykpcmV0dXJuIDF9dmFyIGE9cih0aGlzKS5zdGFydE9mKHQpLmRhdGUobikuc3RhcnRPZihlKS5zdWJ0cmFjdCgxLFwibWlsbGlzZWNvbmRcIiksbz10aGlzLmRpZmYoYSxlLCEwKTtyZXR1cm4gbzwwP3IodGhpcykuc3RhcnRPZihcIndlZWtcIikud2VlaygpOk1hdGguY2VpbChvKX0sZi53ZWVrcz1mdW5jdGlvbihlKXtyZXR1cm4gdm9pZCAwPT09ZSYmKGU9bnVsbCksdGhpcy53ZWVrKGUpfX19KSk7IiwgIiFmdW5jdGlvbih0LGkpe1wib2JqZWN0XCI9PXR5cGVvZiBleHBvcnRzJiZcInVuZGVmaW5lZFwiIT10eXBlb2YgbW9kdWxlP21vZHVsZS5leHBvcnRzPWkoKTpcImZ1bmN0aW9uXCI9PXR5cGVvZiBkZWZpbmUmJmRlZmluZS5hbWQ/ZGVmaW5lKGkpOih0PVwidW5kZWZpbmVkXCIhPXR5cGVvZiBnbG9iYWxUaGlzP2dsb2JhbFRoaXM6dHx8c2VsZikuZGF5anNfcGx1Z2luX3V0Yz1pKCl9KHRoaXMsKGZ1bmN0aW9uKCl7XCJ1c2Ugc3RyaWN0XCI7dmFyIHQ9XCJtaW51dGVcIixpPS9bKy1dXFxkXFxkKD86Oj9cXGRcXGQpPy9nLGU9LyhbKy1dfFxcZFxcZCkvZztyZXR1cm4gZnVuY3Rpb24ocyxmLG4pe3ZhciB1PWYucHJvdG90eXBlO24udXRjPWZ1bmN0aW9uKHQpe3ZhciBpPXtkYXRlOnQsdXRjOiEwLGFyZ3M6YXJndW1lbnRzfTtyZXR1cm4gbmV3IGYoaSl9LHUudXRjPWZ1bmN0aW9uKGkpe3ZhciBlPW4odGhpcy50b0RhdGUoKSx7bG9jYWxlOnRoaXMuJEwsdXRjOiEwfSk7cmV0dXJuIGk/ZS5hZGQodGhpcy51dGNPZmZzZXQoKSx0KTplfSx1LmxvY2FsPWZ1bmN0aW9uKCl7cmV0dXJuIG4odGhpcy50b0RhdGUoKSx7bG9jYWxlOnRoaXMuJEwsdXRjOiExfSl9O3ZhciBvPXUucGFyc2U7dS5wYXJzZT1mdW5jdGlvbih0KXt0LnV0YyYmKHRoaXMuJHU9ITApLHRoaXMuJHV0aWxzKCkudSh0LiRvZmZzZXQpfHwodGhpcy4kb2Zmc2V0PXQuJG9mZnNldCksby5jYWxsKHRoaXMsdCl9O3ZhciByPXUuaW5pdDt1LmluaXQ9ZnVuY3Rpb24oKXtpZih0aGlzLiR1KXt2YXIgdD10aGlzLiRkO3RoaXMuJHk9dC5nZXRVVENGdWxsWWVhcigpLHRoaXMuJE09dC5nZXRVVENNb250aCgpLHRoaXMuJEQ9dC5nZXRVVENEYXRlKCksdGhpcy4kVz10LmdldFVUQ0RheSgpLHRoaXMuJEg9dC5nZXRVVENIb3VycygpLHRoaXMuJG09dC5nZXRVVENNaW51dGVzKCksdGhpcy4kcz10LmdldFVUQ1NlY29uZHMoKSx0aGlzLiRtcz10LmdldFVUQ01pbGxpc2Vjb25kcygpfWVsc2Ugci5jYWxsKHRoaXMpfTt2YXIgYT11LnV0Y09mZnNldDt1LnV0Y09mZnNldD1mdW5jdGlvbihzLGYpe3ZhciBuPXRoaXMuJHV0aWxzKCkudTtpZihuKHMpKXJldHVybiB0aGlzLiR1PzA6bih0aGlzLiRvZmZzZXQpP2EuY2FsbCh0aGlzKTp0aGlzLiRvZmZzZXQ7aWYoXCJzdHJpbmdcIj09dHlwZW9mIHMmJihzPWZ1bmN0aW9uKHQpe3ZvaWQgMD09PXQmJih0PVwiXCIpO3ZhciBzPXQubWF0Y2goaSk7aWYoIXMpcmV0dXJuIG51bGw7dmFyIGY9KFwiXCIrc1swXSkubWF0Y2goZSl8fFtcIi1cIiwwLDBdLG49ZlswXSx1PTYwKitmWzFdKyArZlsyXTtyZXR1cm4gMD09PXU/MDpcIitcIj09PW4/dTotdX0ocyksbnVsbD09PXMpKXJldHVybiB0aGlzO3ZhciB1PU1hdGguYWJzKHMpPD0xNj82MCpzOnMsbz10aGlzO2lmKGYpcmV0dXJuIG8uJG9mZnNldD11LG8uJHU9MD09PXMsbztpZigwIT09cyl7dmFyIHI9dGhpcy4kdT90aGlzLnRvRGF0ZSgpLmdldFRpbWV6b25lT2Zmc2V0KCk6LTEqdGhpcy51dGNPZmZzZXQoKTsobz10aGlzLmxvY2FsKCkuYWRkKHUrcix0KSkuJG9mZnNldD11LG8uJHguJGxvY2FsT2Zmc2V0PXJ9ZWxzZSBvPXRoaXMudXRjKCk7cmV0dXJuIG99O3ZhciBoPXUuZm9ybWF0O3UuZm9ybWF0PWZ1bmN0aW9uKHQpe3ZhciBpPXR8fCh0aGlzLiR1P1wiWVlZWS1NTS1ERFRISDptbTpzc1taXVwiOlwiXCIpO3JldHVybiBoLmNhbGwodGhpcyxpKX0sdS52YWx1ZU9mPWZ1bmN0aW9uKCl7dmFyIHQ9dGhpcy4kdXRpbHMoKS51KHRoaXMuJG9mZnNldCk/MDp0aGlzLiRvZmZzZXQrKHRoaXMuJHguJGxvY2FsT2Zmc2V0fHx0aGlzLiRkLmdldFRpbWV6b25lT2Zmc2V0KCkpO3JldHVybiB0aGlzLiRkLnZhbHVlT2YoKS02ZTQqdH0sdS5pc1VUQz1mdW5jdGlvbigpe3JldHVybiEhdGhpcy4kdX0sdS50b0lTT1N0cmluZz1mdW5jdGlvbigpe3JldHVybiB0aGlzLnRvRGF0ZSgpLnRvSVNPU3RyaW5nKCl9LHUudG9TdHJpbmc9ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy50b0RhdGUoKS50b1VUQ1N0cmluZygpfTt2YXIgbD11LnRvRGF0ZTt1LnRvRGF0ZT1mdW5jdGlvbih0KXtyZXR1cm5cInNcIj09PXQmJnRoaXMuJG9mZnNldD9uKHRoaXMuZm9ybWF0KFwiWVlZWS1NTS1ERCBISDptbTpzczpTU1NcIikpLnRvRGF0ZSgpOmwuY2FsbCh0aGlzKX07dmFyIGM9dS5kaWZmO3UuZGlmZj1mdW5jdGlvbih0LGksZSl7aWYodCYmdGhpcy4kdT09PXQuJHUpcmV0dXJuIGMuY2FsbCh0aGlzLHQsaSxlKTt2YXIgcz10aGlzLmxvY2FsKCksZj1uKHQpLmxvY2FsKCk7cmV0dXJuIGMuY2FsbChzLGYsaSxlKX19fSkpOyIsICIhZnVuY3Rpb24odCxlKXtcIm9iamVjdFwiPT10eXBlb2YgZXhwb3J0cyYmXCJ1bmRlZmluZWRcIiE9dHlwZW9mIG1vZHVsZT9tb2R1bGUuZXhwb3J0cz1lKCk6XCJmdW5jdGlvblwiPT10eXBlb2YgZGVmaW5lJiZkZWZpbmUuYW1kP2RlZmluZShlKToodD1cInVuZGVmaW5lZFwiIT10eXBlb2YgZ2xvYmFsVGhpcz9nbG9iYWxUaGlzOnR8fHNlbGYpLmRheWpzX3BsdWdpbl90aW1lem9uZT1lKCl9KHRoaXMsKGZ1bmN0aW9uKCl7XCJ1c2Ugc3RyaWN0XCI7dmFyIHQ9e3llYXI6MCxtb250aDoxLGRheToyLGhvdXI6MyxtaW51dGU6NCxzZWNvbmQ6NX0sZT17fTtyZXR1cm4gZnVuY3Rpb24obixpLG8pe3ZhciByLGE9ZnVuY3Rpb24odCxuLGkpe3ZvaWQgMD09PWkmJihpPXt9KTt2YXIgbz1uZXcgRGF0ZSh0KSxyPWZ1bmN0aW9uKHQsbil7dm9pZCAwPT09biYmKG49e30pO3ZhciBpPW4udGltZVpvbmVOYW1lfHxcInNob3J0XCIsbz10K1wifFwiK2kscj1lW29dO3JldHVybiByfHwocj1uZXcgSW50bC5EYXRlVGltZUZvcm1hdChcImVuLVVTXCIse2hvdXIxMjohMSx0aW1lWm9uZTp0LHllYXI6XCJudW1lcmljXCIsbW9udGg6XCIyLWRpZ2l0XCIsZGF5OlwiMi1kaWdpdFwiLGhvdXI6XCIyLWRpZ2l0XCIsbWludXRlOlwiMi1kaWdpdFwiLHNlY29uZDpcIjItZGlnaXRcIix0aW1lWm9uZU5hbWU6aX0pLGVbb109cikscn0obixpKTtyZXR1cm4gci5mb3JtYXRUb1BhcnRzKG8pfSx1PWZ1bmN0aW9uKGUsbil7Zm9yKHZhciBpPWEoZSxuKSxyPVtdLHU9MDt1PGkubGVuZ3RoO3UrPTEpe3ZhciBmPWlbdV0scz1mLnR5cGUsbT1mLnZhbHVlLGM9dFtzXTtjPj0wJiYocltjXT1wYXJzZUludChtLDEwKSl9dmFyIGQ9clszXSxsPTI0PT09ZD8wOmQsaD1yWzBdK1wiLVwiK3JbMV0rXCItXCIrclsyXStcIiBcIitsK1wiOlwiK3JbNF0rXCI6XCIrcls1XStcIjowMDBcIix2PStlO3JldHVybihvLnV0YyhoKS52YWx1ZU9mKCktKHYtPXYlMWUzKSkvNmU0fSxmPWkucHJvdG90eXBlO2YudHo9ZnVuY3Rpb24odCxlKXt2b2lkIDA9PT10JiYodD1yKTt2YXIgbixpPXRoaXMudXRjT2Zmc2V0KCksYT10aGlzLnRvRGF0ZSgpLHU9YS50b0xvY2FsZVN0cmluZyhcImVuLVVTXCIse3RpbWVab25lOnR9KSxmPU1hdGgucm91bmQoKGEtbmV3IERhdGUodSkpLzFlMy82MCkscz0xNSotTWF0aC5yb3VuZChhLmdldFRpbWV6b25lT2Zmc2V0KCkvMTUpLWY7aWYoIU51bWJlcihzKSluPXRoaXMudXRjT2Zmc2V0KDAsZSk7ZWxzZSBpZihuPW8odSx7bG9jYWxlOnRoaXMuJEx9KS4kc2V0KFwibWlsbGlzZWNvbmRcIix0aGlzLiRtcykudXRjT2Zmc2V0KHMsITApLGUpe3ZhciBtPW4udXRjT2Zmc2V0KCk7bj1uLmFkZChpLW0sXCJtaW51dGVcIil9cmV0dXJuIG4uJHguJHRpbWV6b25lPXQsbn0sZi5vZmZzZXROYW1lPWZ1bmN0aW9uKHQpe3ZhciBlPXRoaXMuJHguJHRpbWV6b25lfHxvLnR6Lmd1ZXNzKCksbj1hKHRoaXMudmFsdWVPZigpLGUse3RpbWVab25lTmFtZTp0fSkuZmluZCgoZnVuY3Rpb24odCl7cmV0dXJuXCJ0aW1lem9uZW5hbWVcIj09PXQudHlwZS50b0xvd2VyQ2FzZSgpfSkpO3JldHVybiBuJiZuLnZhbHVlfTt2YXIgcz1mLnN0YXJ0T2Y7Zi5zdGFydE9mPWZ1bmN0aW9uKHQsZSl7aWYoIXRoaXMuJHh8fCF0aGlzLiR4LiR0aW1lem9uZSlyZXR1cm4gcy5jYWxsKHRoaXMsdCxlKTt2YXIgbj1vKHRoaXMuZm9ybWF0KFwiWVlZWS1NTS1ERCBISDptbTpzczpTU1NcIikse2xvY2FsZTp0aGlzLiRMfSk7cmV0dXJuIHMuY2FsbChuLHQsZSkudHoodGhpcy4keC4kdGltZXpvbmUsITApfSxvLnR6PWZ1bmN0aW9uKHQsZSxuKXt2YXIgaT1uJiZlLGE9bnx8ZXx8cixmPXUoK28oKSxhKTtpZihcInN0cmluZ1wiIT10eXBlb2YgdClyZXR1cm4gbyh0KS50eihhKTt2YXIgcz1mdW5jdGlvbih0LGUsbil7dmFyIGk9dC02MCplKjFlMyxvPXUoaSxuKTtpZihlPT09bylyZXR1cm5baSxlXTt2YXIgcj11KGktPTYwKihvLWUpKjFlMyxuKTtyZXR1cm4gbz09PXI/W2ksb106W3QtNjAqTWF0aC5taW4obyxyKSoxZTMsTWF0aC5tYXgobyxyKV19KG8udXRjKHQsaSkudmFsdWVPZigpLGYsYSksbT1zWzBdLGM9c1sxXSxkPW8obSkudXRjT2Zmc2V0KGMpO3JldHVybiBkLiR4LiR0aW1lem9uZT1hLGR9LG8udHouZ3Vlc3M9ZnVuY3Rpb24oKXtyZXR1cm4gSW50bC5EYXRlVGltZUZvcm1hdCgpLnJlc29sdmVkT3B0aW9ucygpLnRpbWVab25lfSxvLnR6LnNldERlZmF1bHQ9ZnVuY3Rpb24odCl7cj10fX19KSk7IiwgIiFmdW5jdGlvbihyLGUpe1wib2JqZWN0XCI9PXR5cGVvZiBleHBvcnRzJiZcInVuZGVmaW5lZFwiIT10eXBlb2YgbW9kdWxlP21vZHVsZS5leHBvcnRzPWUoKTpcImZ1bmN0aW9uXCI9PXR5cGVvZiBkZWZpbmUmJmRlZmluZS5hbWQ/ZGVmaW5lKGUpOihyPVwidW5kZWZpbmVkXCIhPXR5cGVvZiBnbG9iYWxUaGlzP2dsb2JhbFRoaXM6cnx8c2VsZikuZGF5anNfcGx1Z2luX3JlbGF0aXZlVGltZT1lKCl9KHRoaXMsKGZ1bmN0aW9uKCl7XCJ1c2Ugc3RyaWN0XCI7cmV0dXJuIGZ1bmN0aW9uKHIsZSx0KXtyPXJ8fHt9O3ZhciBuPWUucHJvdG90eXBlLG89e2Z1dHVyZTpcImluICVzXCIscGFzdDpcIiVzIGFnb1wiLHM6XCJhIGZldyBzZWNvbmRzXCIsbTpcImEgbWludXRlXCIsbW06XCIlZCBtaW51dGVzXCIsaDpcImFuIGhvdXJcIixoaDpcIiVkIGhvdXJzXCIsZDpcImEgZGF5XCIsZGQ6XCIlZCBkYXlzXCIsTTpcImEgbW9udGhcIixNTTpcIiVkIG1vbnRoc1wiLHk6XCJhIHllYXJcIix5eTpcIiVkIHllYXJzXCJ9O2Z1bmN0aW9uIGkocixlLHQsbyl7cmV0dXJuIG4uZnJvbVRvQmFzZShyLGUsdCxvKX10LmVuLnJlbGF0aXZlVGltZT1vLG4uZnJvbVRvQmFzZT1mdW5jdGlvbihlLG4saSxkLHUpe2Zvcih2YXIgZixhLHMsbD1pLiRsb2NhbGUoKS5yZWxhdGl2ZVRpbWV8fG8saD1yLnRocmVzaG9sZHN8fFt7bDpcInNcIixyOjQ0LGQ6XCJzZWNvbmRcIn0se2w6XCJtXCIscjo4OX0se2w6XCJtbVwiLHI6NDQsZDpcIm1pbnV0ZVwifSx7bDpcImhcIixyOjg5fSx7bDpcImhoXCIscjoyMSxkOlwiaG91clwifSx7bDpcImRcIixyOjM1fSx7bDpcImRkXCIscjoyNSxkOlwiZGF5XCJ9LHtsOlwiTVwiLHI6NDV9LHtsOlwiTU1cIixyOjEwLGQ6XCJtb250aFwifSx7bDpcInlcIixyOjE3fSx7bDpcInl5XCIsZDpcInllYXJcIn1dLG09aC5sZW5ndGgsYz0wO2M8bTtjKz0xKXt2YXIgeT1oW2NdO3kuZCYmKGY9ZD90KGUpLmRpZmYoaSx5LmQsITApOmkuZGlmZihlLHkuZCwhMCkpO3ZhciBwPShyLnJvdW5kaW5nfHxNYXRoLnJvdW5kKShNYXRoLmFicyhmKSk7aWYocz1mPjAscDw9eS5yfHwheS5yKXtwPD0xJiZjPjAmJih5PWhbYy0xXSk7dmFyIHY9bFt5LmxdO3UmJihwPXUoXCJcIitwKSksYT1cInN0cmluZ1wiPT10eXBlb2Ygdj92LnJlcGxhY2UoXCIlZFwiLHApOnYocCxuLHkubCxzKTticmVha319aWYobilyZXR1cm4gYTt2YXIgTT1zP2wuZnV0dXJlOmwucGFzdDtyZXR1cm5cImZ1bmN0aW9uXCI9PXR5cGVvZiBNP00oYSk6TS5yZXBsYWNlKFwiJXNcIixhKX0sbi50bz1mdW5jdGlvbihyLGUpe3JldHVybiBpKHIsZSx0aGlzLCEwKX0sbi5mcm9tPWZ1bmN0aW9uKHIsZSl7cmV0dXJuIGkocixlLHRoaXMpfTt2YXIgZD1mdW5jdGlvbihyKXtyZXR1cm4gci4kdT90LnV0YygpOnQoKX07bi50b05vdz1mdW5jdGlvbihyKXtyZXR1cm4gdGhpcy50byhkKHRoaXMpLHIpfSxuLmZyb21Ob3c9ZnVuY3Rpb24ocil7cmV0dXJuIHRoaXMuZnJvbShkKHRoaXMpLHIpfX19KSk7IiwgImltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBBY3Rpb24sIEFjdGlvblBhbmVsLCBDb2xvciwgTGlzdCB9IGZyb20gXCJAcmF5Y2FzdC9hcGlcIjtcbmltcG9ydCB7IHBhcnNlRGF0ZSB9IGZyb20gXCJjaHJvbm8tbm9kZVwiO1xuaW1wb3J0IGRheWpzIGZyb20gXCJkYXlqc1wiO1xuaW1wb3J0IGFkdmFuY2VkRm9ybWF0UGx1Z2luIGZyb20gXCJkYXlqcy9wbHVnaW4vYWR2YW5jZWRGb3JtYXRcIjtcbmltcG9ydCB3ZWVrT2ZZZWFyUGx1Z2luIGZyb20gXCJkYXlqcy9wbHVnaW4vd2Vla09mWWVhclwiO1xuaW1wb3J0IHV0Y1BsdWdpbiBmcm9tIFwiZGF5anMvcGx1Z2luL3V0Y1wiO1xuaW1wb3J0IHRpbWV6b25lUGx1Z2luIGZyb20gXCJkYXlqcy9wbHVnaW4vdGltZXpvbmVcIjtcbmltcG9ydCByZWxhdGl2ZVRpbWVQbHVnaW4gZnJvbSBcImRheWpzL3BsdWdpbi9yZWxhdGl2ZVRpbWVcIjtcblxuZGF5anMuZXh0ZW5kKGFkdmFuY2VkRm9ybWF0UGx1Z2luKTtcbmRheWpzLmV4dGVuZCh3ZWVrT2ZZZWFyUGx1Z2luKTtcbmRheWpzLmV4dGVuZCh1dGNQbHVnaW4pO1xuZGF5anMuZXh0ZW5kKHRpbWV6b25lUGx1Z2luKTtcbmRheWpzLmV4dGVuZChyZWxhdGl2ZVRpbWVQbHVnaW4pO1xuXG5mdW5jdGlvbiBoYW5kbGVDb252ZXJzaW9uKGlucHV0OiBzdHJpbmcsIHRpbWV6b25lOiBzdHJpbmcpIHtcbiAgaWYgKGlucHV0Lm1hdGNoKC9eXFxkKyQvKSkgaW5wdXQgPSBuZXcgRGF0ZShwYXJzZUludChpbnB1dCwgMTApICogMTAwMCkudG9TdHJpbmcoKTtcbiAgY29uc3QgcGFyc2VkRGF0ZSA9IHBhcnNlRGF0ZShpbnB1dCk7XG4gIGlmICghcGFyc2VkRGF0ZSB8fCBwYXJzZWREYXRlLnRvU3RyaW5nKCkgPT09IFwiSW52YWxpZCBEYXRlXCIpIHJldHVybiBbXTtcblxuICBjb25zdCBkYXRlID0gZGF5anMocGFyc2VkRGF0ZSkudHoodGltZXpvbmUpO1xuICBjb25zdCBmcm9tTm93ID0gZGF0ZS5mcm9tTm93KCk7XG4gIHJldHVybiBbXG4gICAgeyBsYWJlbDogXCJVbml4IChzKVwiLCB2YWx1ZTogZGF0ZS51bml4KCkgfSxcbiAgICB7IGxhYmVsOiBcIlVuaXggKG1zKVwiLCB2YWx1ZTogZGF0ZS52YWx1ZU9mKCkgfSxcbiAgICB7IGxhYmVsOiBcIkh1bWFuIFJlYWRhYmxlXCIsIHZhbHVlOiBkYXRlLmZvcm1hdChcIk1NTU0gRG8sIFlZWVkgW2F0XSBoaDptbTpzcyBBICh6enopXCIpIH0sXG4gICAgeyBsYWJlbDogXCJEYXRlVGltZVwiLCB2YWx1ZTogZGF0ZS5mb3JtYXQoXCJZWVlZLU1NLUREIEhIOm1tOnNzXCIpIH0sXG4gICAgeyBsYWJlbDogXCJVVENcIiwgdmFsdWU6IGRhdGUudG9TdHJpbmcoKSB9LFxuICAgIHsgbGFiZWw6IFwiSVNPIDg2MDFcIiwgdmFsdWU6IGRhdGUudG9JU09TdHJpbmcoKSB9LFxuICAgIHsgbGFiZWw6IFwiV2VlayBvZiBZZWFyXCIsIHZhbHVlOiBkYXRlLmZvcm1hdChcIndvIGRkZGQgW29mXSBZWVlZXCIpIH0sXG4gICAgeyBsYWJlbDogXCJJbiAvIEFnb1wiLCB2YWx1ZTogU3RyaW5nKGZyb21Ob3cpLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgU3RyaW5nKGZyb21Ob3cpLnNsaWNlKDEpIH0sXG4gIF07XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIERhdGVUaW1lKCkge1xuICBjb25zdCBbaW5wdXQsIHNldElucHV0XSA9IHVzZVN0YXRlKFwibm93XCIpO1xuICBjb25zdCBbdGltZXpvbmUsIHNldFRpbWV6b25lXSA9IHVzZVN0YXRlKEludGwuRGF0ZVRpbWVGb3JtYXQoKS5yZXNvbHZlZE9wdGlvbnMoKS50aW1lWm9uZSk7XG4gIGNvbnN0IFtpdGVtcywgc2V0SXRlbXNdID0gdXNlU3RhdGU8eyBsYWJlbDogc3RyaW5nOyB2YWx1ZTogc3RyaW5nIHwgbnVtYmVyIH1bXT4oW10pO1xuXG4gIGNvbnN0IG9uVGltZXpvbmVDaGFuZ2UgPSBhc3luYyAodmFsdWU6IHN0cmluZykgPT4ge1xuICAgIHNldFRpbWV6b25lKHZhbHVlKTtcbiAgICBzZXRJdGVtcyhoYW5kbGVDb252ZXJzaW9uKGlucHV0LCB2YWx1ZSkpO1xuICB9O1xuXG4gIGNvbnN0IG9uU2VhcmNoVGV4dENoYW5nZSA9IGFzeW5jICh2YWx1ZTogc3RyaW5nKSA9PiB7XG4gICAgc2V0SW5wdXQodmFsdWUpO1xuICAgIHNldEl0ZW1zKGhhbmRsZUNvbnZlcnNpb24odmFsdWUsIHRpbWV6b25lKSk7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8TGlzdFxuICAgICAgc2VhcmNoQmFyUGxhY2Vob2xkZXI9XCJEYXRlXCJcbiAgICAgIGZpbHRlcmluZz17ZmFsc2V9XG4gICAgICBzZWFyY2hUZXh0PXtpbnB1dH1cbiAgICAgIG9uU2VhcmNoVGV4dENoYW5nZT17b25TZWFyY2hUZXh0Q2hhbmdlfVxuICAgICAgc2VhcmNoQmFyQWNjZXNzb3J5PXtcbiAgICAgICAgPExpc3QuRHJvcGRvd24gdG9vbHRpcD1cIlRpbWV6b25lXCIgb25DaGFuZ2U9e29uVGltZXpvbmVDaGFuZ2V9IGRlZmF1bHRWYWx1ZT17dGltZXpvbmV9PlxuICAgICAgICAgIHtJbnRsLnN1cHBvcnRlZFZhbHVlc09mKFwidGltZVpvbmVcIikubWFwKCh6b25lLCBpbmRleCkgPT4gKFxuICAgICAgICAgICAgPExpc3QuRHJvcGRvd24uSXRlbSBrZXk9e2luZGV4fSB2YWx1ZT17em9uZX0gdGl0bGU9e3pvbmV9IC8+XG4gICAgICAgICAgKSl9XG4gICAgICAgIDwvTGlzdC5Ecm9wZG93bj5cbiAgICAgIH1cbiAgICA+XG4gICAgICB7aXRlbXMubWFwKChpdGVtLCBpbmRleCkgPT4gKFxuICAgICAgICA8TGlzdC5JdGVtXG4gICAgICAgICAga2V5PXtpbmRleH1cbiAgICAgICAgICB0aXRsZT17U3RyaW5nKGl0ZW0udmFsdWUpfVxuICAgICAgICAgIGFjY2Vzc29yaWVzPXtbeyB0YWc6IHsgdmFsdWU6IGl0ZW0ubGFiZWwsIGNvbG9yOiBDb2xvci5TZWNvbmRhcnlUZXh0IH0gfV19XG4gICAgICAgICAgYWN0aW9ucz17XG4gICAgICAgICAgICA8QWN0aW9uUGFuZWw+XG4gICAgICAgICAgICAgIDxBY3Rpb24uQ29weVRvQ2xpcGJvYXJkIGNvbnRlbnQ9e2l0ZW0udmFsdWV9IC8+XG4gICAgICAgICAgICAgIDxBY3Rpb24uUGFzdGUgY29udGVudD17aXRlbS52YWx1ZX0gLz5cbiAgICAgICAgICAgIDwvQWN0aW9uUGFuZWw+XG4gICAgICAgICAgfVxuICAgICAgICAvPlxuICAgICAgKSl9XG4gICAgPC9MaXN0PlxuICApO1xufVxuIiwgImltcG9ydCB7IENvbXBvbmVudCwgUGFyc2VkQ29tcG9uZW50cywgUGFyc2VkUmVzdWx0LCBQYXJzaW5nUmVmZXJlbmNlIH0gZnJvbSBcIi4vdHlwZXNcIjtcblxuaW1wb3J0IHF1YXJ0ZXJPZlllYXIgZnJvbSBcImRheWpzL3BsdWdpbi9xdWFydGVyT2ZZZWFyXCI7XG5pbXBvcnQgZGF5anMsIHsgUVVuaXRUeXBlIH0gZnJvbSBcImRheWpzXCI7XG5pbXBvcnQgeyBhc3NpZ25TaW1pbGFyRGF0ZSwgYXNzaWduU2ltaWxhclRpbWUsIGltcGx5U2ltaWxhclRpbWUgfSBmcm9tIFwiLi91dGlscy9kYXlqc1wiO1xuaW1wb3J0IHsgdG9UaW1lem9uZU9mZnNldCB9IGZyb20gXCIuL3RpbWV6b25lXCI7XG5kYXlqcy5leHRlbmQocXVhcnRlck9mWWVhcik7XG5cbmV4cG9ydCBjbGFzcyBSZWZlcmVuY2VXaXRoVGltZXpvbmUge1xuICAgIHJlYWRvbmx5IGluc3RhbnQ6IERhdGU7XG4gICAgcmVhZG9ubHkgdGltZXpvbmVPZmZzZXQ/OiBudW1iZXIgfCBudWxsO1xuXG4gICAgY29uc3RydWN0b3IoaW5wdXQ/OiBQYXJzaW5nUmVmZXJlbmNlIHwgRGF0ZSkge1xuICAgICAgICBpbnB1dCA9IGlucHV0ID8/IG5ldyBEYXRlKCk7XG4gICAgICAgIGlmIChpbnB1dCBpbnN0YW5jZW9mIERhdGUpIHtcbiAgICAgICAgICAgIHRoaXMuaW5zdGFudCA9IGlucHV0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5pbnN0YW50ID0gaW5wdXQuaW5zdGFudCA/PyBuZXcgRGF0ZSgpO1xuICAgICAgICAgICAgdGhpcy50aW1lem9uZU9mZnNldCA9IHRvVGltZXpvbmVPZmZzZXQoaW5wdXQudGltZXpvbmUsIHRoaXMuaW5zdGFudCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIGEgSlMgZGF0ZSAoc3lzdGVtIHRpbWV6b25lKSB3aXRoIHRoZSB7IHllYXIsIG1vbnRoLCBkYXksIGhvdXIsIG1pbnV0ZSwgc2Vjb25kIH0gZXF1YWwgdG8gdGhlIHJlZmVyZW5jZS5cbiAgICAgKiBUaGUgb3V0cHV0J3MgaW5zdGFudCBpcyBOT1QgdGhlIHJlZmVyZW5jZSdzIGluc3RhbnQgd2hlbiB0aGUgcmVmZXJlbmNlJ3MgYW5kIHN5c3RlbSdzIHRpbWV6b25lIGFyZSBkaWZmZXJlbnQuXG4gICAgICovXG4gICAgZ2V0RGF0ZVdpdGhBZGp1c3RlZFRpbWV6b25lKCkge1xuICAgICAgICByZXR1cm4gbmV3IERhdGUodGhpcy5pbnN0YW50LmdldFRpbWUoKSArIHRoaXMuZ2V0U3lzdGVtVGltZXpvbmVBZGp1c3RtZW50TWludXRlKHRoaXMuaW5zdGFudCkgKiA2MDAwMCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0aGUgbnVtYmVyIG1pbnV0ZXMgZGlmZmVyZW5jZSBiZXR3ZWVuIHRoZSBKUyBkYXRlJ3MgdGltZXpvbmUgYW5kIHRoZSByZWZlcmVuY2UgdGltZXpvbmUuXG4gICAgICogQHBhcmFtIGRhdGVcbiAgICAgKiBAcGFyYW0gb3ZlcnJpZGVUaW1lem9uZU9mZnNldFxuICAgICAqL1xuICAgIGdldFN5c3RlbVRpbWV6b25lQWRqdXN0bWVudE1pbnV0ZShkYXRlPzogRGF0ZSwgb3ZlcnJpZGVUaW1lem9uZU9mZnNldD86IG51bWJlcik6IG51bWJlciB7XG4gICAgICAgIGlmICghZGF0ZSB8fCBkYXRlLmdldFRpbWUoKSA8IDApIHtcbiAgICAgICAgICAgIC8vIEphdmFzY3JpcHQgZGF0ZSB0aW1lem9uZSBjYWxjdWxhdGlvbiBnb3QgZWZmZWN0IHdoZW4gdGhlIHRpbWUgZXBvY2ggPCAwXG4gICAgICAgICAgICAvLyBlLmcuIG5ldyBEYXRlKCdUdWUgRmViIDAyIDEzMDAgMDA6MDA6MDAgR01UKzA5MDAgKEpTVCknKSA9PiBUdWUgRmViIDAyIDEzMDAgMDA6MTg6NTkgR01UKzA5MTggKEpTVClcbiAgICAgICAgICAgIGRhdGUgPSBuZXcgRGF0ZSgpO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgY3VycmVudFRpbWV6b25lT2Zmc2V0ID0gLWRhdGUuZ2V0VGltZXpvbmVPZmZzZXQoKTtcbiAgICAgICAgY29uc3QgdGFyZ2V0VGltZXpvbmVPZmZzZXQgPSBvdmVycmlkZVRpbWV6b25lT2Zmc2V0ID8/IHRoaXMudGltZXpvbmVPZmZzZXQgPz8gY3VycmVudFRpbWV6b25lT2Zmc2V0O1xuICAgICAgICByZXR1cm4gY3VycmVudFRpbWV6b25lT2Zmc2V0IC0gdGFyZ2V0VGltZXpvbmVPZmZzZXQ7XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgUGFyc2luZ0NvbXBvbmVudHMgaW1wbGVtZW50cyBQYXJzZWRDb21wb25lbnRzIHtcbiAgICBwcml2YXRlIGtub3duVmFsdWVzOiB7IFtjIGluIENvbXBvbmVudF0/OiBudW1iZXIgfTtcbiAgICBwcml2YXRlIGltcGxpZWRWYWx1ZXM6IHsgW2MgaW4gQ29tcG9uZW50XT86IG51bWJlciB9O1xuICAgIHByaXZhdGUgcmVmZXJlbmNlOiBSZWZlcmVuY2VXaXRoVGltZXpvbmU7XG4gICAgcHJpdmF0ZSBfdGFncyA9IG5ldyBTZXQ8c3RyaW5nPigpO1xuXG4gICAgY29uc3RydWN0b3IocmVmZXJlbmNlOiBSZWZlcmVuY2VXaXRoVGltZXpvbmUsIGtub3duQ29tcG9uZW50cz86IHsgW2MgaW4gQ29tcG9uZW50XT86IG51bWJlciB9KSB7XG4gICAgICAgIHRoaXMucmVmZXJlbmNlID0gcmVmZXJlbmNlO1xuICAgICAgICB0aGlzLmtub3duVmFsdWVzID0ge307XG4gICAgICAgIHRoaXMuaW1wbGllZFZhbHVlcyA9IHt9O1xuICAgICAgICBpZiAoa25vd25Db21wb25lbnRzKSB7XG4gICAgICAgICAgICBmb3IgKGNvbnN0IGtleSBpbiBrbm93bkNvbXBvbmVudHMpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmtub3duVmFsdWVzW2tleSBhcyBDb21wb25lbnRdID0ga25vd25Db21wb25lbnRzW2tleSBhcyBDb21wb25lbnRdO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgcmVmRGF5SnMgPSBkYXlqcyhyZWZlcmVuY2UuaW5zdGFudCk7XG4gICAgICAgIHRoaXMuaW1wbHkoXCJkYXlcIiwgcmVmRGF5SnMuZGF0ZSgpKTtcbiAgICAgICAgdGhpcy5pbXBseShcIm1vbnRoXCIsIHJlZkRheUpzLm1vbnRoKCkgKyAxKTtcbiAgICAgICAgdGhpcy5pbXBseShcInllYXJcIiwgcmVmRGF5SnMueWVhcigpKTtcbiAgICAgICAgdGhpcy5pbXBseShcImhvdXJcIiwgMTIpO1xuICAgICAgICB0aGlzLmltcGx5KFwibWludXRlXCIsIDApO1xuICAgICAgICB0aGlzLmltcGx5KFwic2Vjb25kXCIsIDApO1xuICAgICAgICB0aGlzLmltcGx5KFwibWlsbGlzZWNvbmRcIiwgMCk7XG4gICAgfVxuXG4gICAgZ2V0KGNvbXBvbmVudDogQ29tcG9uZW50KTogbnVtYmVyIHwgbnVsbCB7XG4gICAgICAgIGlmIChjb21wb25lbnQgaW4gdGhpcy5rbm93blZhbHVlcykge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMua25vd25WYWx1ZXNbY29tcG9uZW50XTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChjb21wb25lbnQgaW4gdGhpcy5pbXBsaWVkVmFsdWVzKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5pbXBsaWVkVmFsdWVzW2NvbXBvbmVudF07XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICBpc0NlcnRhaW4oY29tcG9uZW50OiBDb21wb25lbnQpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIGNvbXBvbmVudCBpbiB0aGlzLmtub3duVmFsdWVzO1xuICAgIH1cblxuICAgIGdldENlcnRhaW5Db21wb25lbnRzKCk6IEFycmF5PENvbXBvbmVudD4ge1xuICAgICAgICByZXR1cm4gT2JqZWN0LmtleXModGhpcy5rbm93blZhbHVlcykgYXMgQXJyYXk8Q29tcG9uZW50PjtcbiAgICB9XG5cbiAgICBpbXBseShjb21wb25lbnQ6IENvbXBvbmVudCwgdmFsdWU6IG51bWJlcik6IFBhcnNpbmdDb21wb25lbnRzIHtcbiAgICAgICAgaWYgKGNvbXBvbmVudCBpbiB0aGlzLmtub3duVmFsdWVzKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmltcGxpZWRWYWx1ZXNbY29tcG9uZW50XSA9IHZhbHVlO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBhc3NpZ24oY29tcG9uZW50OiBDb21wb25lbnQsIHZhbHVlOiBudW1iZXIpOiBQYXJzaW5nQ29tcG9uZW50cyB7XG4gICAgICAgIHRoaXMua25vd25WYWx1ZXNbY29tcG9uZW50XSA9IHZhbHVlO1xuICAgICAgICBkZWxldGUgdGhpcy5pbXBsaWVkVmFsdWVzW2NvbXBvbmVudF07XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIGRlbGV0ZShjb21wb25lbnQ6IENvbXBvbmVudCkge1xuICAgICAgICBkZWxldGUgdGhpcy5rbm93blZhbHVlc1tjb21wb25lbnRdO1xuICAgICAgICBkZWxldGUgdGhpcy5pbXBsaWVkVmFsdWVzW2NvbXBvbmVudF07XG4gICAgfVxuXG4gICAgY2xvbmUoKTogUGFyc2luZ0NvbXBvbmVudHMge1xuICAgICAgICBjb25zdCBjb21wb25lbnQgPSBuZXcgUGFyc2luZ0NvbXBvbmVudHModGhpcy5yZWZlcmVuY2UpO1xuICAgICAgICBjb21wb25lbnQua25vd25WYWx1ZXMgPSB7fTtcbiAgICAgICAgY29tcG9uZW50LmltcGxpZWRWYWx1ZXMgPSB7fTtcblxuICAgICAgICBmb3IgKGNvbnN0IGtleSBpbiB0aGlzLmtub3duVmFsdWVzKSB7XG4gICAgICAgICAgICBjb21wb25lbnQua25vd25WYWx1ZXNba2V5IGFzIENvbXBvbmVudF0gPSB0aGlzLmtub3duVmFsdWVzW2tleSBhcyBDb21wb25lbnRdO1xuICAgICAgICB9XG5cbiAgICAgICAgZm9yIChjb25zdCBrZXkgaW4gdGhpcy5pbXBsaWVkVmFsdWVzKSB7XG4gICAgICAgICAgICBjb21wb25lbnQuaW1wbGllZFZhbHVlc1trZXkgYXMgQ29tcG9uZW50XSA9IHRoaXMuaW1wbGllZFZhbHVlc1trZXkgYXMgQ29tcG9uZW50XTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBjb21wb25lbnQ7XG4gICAgfVxuXG4gICAgaXNPbmx5RGF0ZSgpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuICF0aGlzLmlzQ2VydGFpbihcImhvdXJcIikgJiYgIXRoaXMuaXNDZXJ0YWluKFwibWludXRlXCIpICYmICF0aGlzLmlzQ2VydGFpbihcInNlY29uZFwiKTtcbiAgICB9XG5cbiAgICBpc09ubHlUaW1lKCk6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgIXRoaXMuaXNDZXJ0YWluKFwid2Vla2RheVwiKSAmJiAhdGhpcy5pc0NlcnRhaW4oXCJkYXlcIikgJiYgIXRoaXMuaXNDZXJ0YWluKFwibW9udGhcIikgJiYgIXRoaXMuaXNDZXJ0YWluKFwieWVhclwiKVxuICAgICAgICApO1xuICAgIH1cblxuICAgIGlzT25seVdlZWtkYXlDb21wb25lbnQoKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiB0aGlzLmlzQ2VydGFpbihcIndlZWtkYXlcIikgJiYgIXRoaXMuaXNDZXJ0YWluKFwiZGF5XCIpICYmICF0aGlzLmlzQ2VydGFpbihcIm1vbnRoXCIpO1xuICAgIH1cblxuICAgIGlzRGF0ZVdpdGhVbmtub3duWWVhcigpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaXNDZXJ0YWluKFwibW9udGhcIikgJiYgIXRoaXMuaXNDZXJ0YWluKFwieWVhclwiKTtcbiAgICB9XG5cbiAgICBpc1ZhbGlkRGF0ZSgpOiBib29sZWFuIHtcbiAgICAgICAgY29uc3QgZGF0ZSA9IHRoaXMuZGF0ZVdpdGhvdXRUaW1lem9uZUFkanVzdG1lbnQoKTtcblxuICAgICAgICBpZiAoZGF0ZS5nZXRGdWxsWWVhcigpICE9PSB0aGlzLmdldChcInllYXJcIikpIHJldHVybiBmYWxzZTtcbiAgICAgICAgaWYgKGRhdGUuZ2V0TW9udGgoKSAhPT0gdGhpcy5nZXQoXCJtb250aFwiKSAtIDEpIHJldHVybiBmYWxzZTtcbiAgICAgICAgaWYgKGRhdGUuZ2V0RGF0ZSgpICE9PSB0aGlzLmdldChcImRheVwiKSkgcmV0dXJuIGZhbHNlO1xuICAgICAgICBpZiAodGhpcy5nZXQoXCJob3VyXCIpICE9IG51bGwgJiYgZGF0ZS5nZXRIb3VycygpICE9IHRoaXMuZ2V0KFwiaG91clwiKSkgcmV0dXJuIGZhbHNlO1xuICAgICAgICBpZiAodGhpcy5nZXQoXCJtaW51dGVcIikgIT0gbnVsbCAmJiBkYXRlLmdldE1pbnV0ZXMoKSAhPSB0aGlzLmdldChcIm1pbnV0ZVwiKSkgcmV0dXJuIGZhbHNlO1xuXG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIHRvU3RyaW5nKCkge1xuICAgICAgICByZXR1cm4gYFtQYXJzaW5nQ29tcG9uZW50cyB7XG4gICAgICAgICAgICB0YWdzOiAke0pTT04uc3RyaW5naWZ5KEFycmF5LmZyb20odGhpcy5fdGFncykuc29ydCgpKX0sIFxuICAgICAgICAgICAga25vd25WYWx1ZXM6ICR7SlNPTi5zdHJpbmdpZnkodGhpcy5rbm93blZhbHVlcyl9LCBcbiAgICAgICAgICAgIGltcGxpZWRWYWx1ZXM6ICR7SlNPTi5zdHJpbmdpZnkodGhpcy5pbXBsaWVkVmFsdWVzKX19LCBcbiAgICAgICAgICAgIHJlZmVyZW5jZTogJHtKU09OLnN0cmluZ2lmeSh0aGlzLnJlZmVyZW5jZSl9XWA7XG4gICAgfVxuXG4gICAgZGF5anMoKSB7XG4gICAgICAgIHJldHVybiBkYXlqcyh0aGlzLmRhdGUoKSk7XG4gICAgfVxuXG4gICAgZGF0ZSgpOiBEYXRlIHtcbiAgICAgICAgY29uc3QgZGF0ZSA9IHRoaXMuZGF0ZVdpdGhvdXRUaW1lem9uZUFkanVzdG1lbnQoKTtcbiAgICAgICAgY29uc3QgdGltZXpvbmVBZGp1c3RtZW50ID0gdGhpcy5yZWZlcmVuY2UuZ2V0U3lzdGVtVGltZXpvbmVBZGp1c3RtZW50TWludXRlKGRhdGUsIHRoaXMuZ2V0KFwidGltZXpvbmVPZmZzZXRcIikpO1xuICAgICAgICByZXR1cm4gbmV3IERhdGUoZGF0ZS5nZXRUaW1lKCkgKyB0aW1lem9uZUFkanVzdG1lbnQgKiA2MDAwMCk7XG4gICAgfVxuXG4gICAgYWRkVGFnKHRhZzogc3RyaW5nKTogUGFyc2luZ0NvbXBvbmVudHMge1xuICAgICAgICB0aGlzLl90YWdzLmFkZCh0YWcpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBhZGRUYWdzKHRhZ3M6IHN0cmluZ1tdIHwgU2V0PHN0cmluZz4pOiBQYXJzaW5nQ29tcG9uZW50cyB7XG4gICAgICAgIGZvciAoY29uc3QgdGFnIG9mIHRhZ3MpIHtcbiAgICAgICAgICAgIHRoaXMuX3RhZ3MuYWRkKHRhZyk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgdGFncygpOiBTZXQ8c3RyaW5nPiB7XG4gICAgICAgIHJldHVybiBuZXcgU2V0KHRoaXMuX3RhZ3MpO1xuICAgIH1cblxuICAgIHByaXZhdGUgZGF0ZVdpdGhvdXRUaW1lem9uZUFkanVzdG1lbnQoKSB7XG4gICAgICAgIGNvbnN0IGRhdGUgPSBuZXcgRGF0ZShcbiAgICAgICAgICAgIHRoaXMuZ2V0KFwieWVhclwiKSxcbiAgICAgICAgICAgIHRoaXMuZ2V0KFwibW9udGhcIikgLSAxLFxuICAgICAgICAgICAgdGhpcy5nZXQoXCJkYXlcIiksXG4gICAgICAgICAgICB0aGlzLmdldChcImhvdXJcIiksXG4gICAgICAgICAgICB0aGlzLmdldChcIm1pbnV0ZVwiKSxcbiAgICAgICAgICAgIHRoaXMuZ2V0KFwic2Vjb25kXCIpLFxuICAgICAgICAgICAgdGhpcy5nZXQoXCJtaWxsaXNlY29uZFwiKVxuICAgICAgICApO1xuXG4gICAgICAgIGRhdGUuc2V0RnVsbFllYXIodGhpcy5nZXQoXCJ5ZWFyXCIpKTtcbiAgICAgICAgcmV0dXJuIGRhdGU7XG4gICAgfVxuXG4gICAgc3RhdGljIGNyZWF0ZVJlbGF0aXZlRnJvbVJlZmVyZW5jZShcbiAgICAgICAgcmVmZXJlbmNlOiBSZWZlcmVuY2VXaXRoVGltZXpvbmUsXG4gICAgICAgIGZyYWdtZW50czogeyBbYyBpbiBRVW5pdFR5cGVdPzogbnVtYmVyIH1cbiAgICApOiBQYXJzaW5nQ29tcG9uZW50cyB7XG4gICAgICAgIGxldCBkYXRlID0gZGF5anMocmVmZXJlbmNlLmluc3RhbnQpO1xuICAgICAgICBmb3IgKGNvbnN0IGtleSBpbiBmcmFnbWVudHMpIHtcbiAgICAgICAgICAgIGRhdGUgPSBkYXRlLmFkZChmcmFnbWVudHNba2V5IGFzIFFVbml0VHlwZV0sIGtleSBhcyBRVW5pdFR5cGUpO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgY29tcG9uZW50cyA9IG5ldyBQYXJzaW5nQ29tcG9uZW50cyhyZWZlcmVuY2UpO1xuICAgICAgICBjb21wb25lbnRzLmFkZFRhZyhcInJlc3VsdC9yZWxhdGl2ZURhdGVcIik7XG4gICAgICAgIGlmIChmcmFnbWVudHNbXCJob3VyXCJdIHx8IGZyYWdtZW50c1tcIm1pbnV0ZVwiXSB8fCBmcmFnbWVudHNbXCJzZWNvbmRcIl0pIHtcbiAgICAgICAgICAgIGNvbXBvbmVudHMuYWRkVGFnKFwicmVzdWx0L3JlbGF0aXZlRGF0ZUFuZFRpbWVcIik7XG4gICAgICAgICAgICBhc3NpZ25TaW1pbGFyVGltZShjb21wb25lbnRzLCBkYXRlKTtcbiAgICAgICAgICAgIGFzc2lnblNpbWlsYXJEYXRlKGNvbXBvbmVudHMsIGRhdGUpO1xuICAgICAgICAgICAgaWYgKHJlZmVyZW5jZS50aW1lem9uZU9mZnNldCAhPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIGNvbXBvbmVudHMuYXNzaWduKFwidGltZXpvbmVPZmZzZXRcIiwgLXJlZmVyZW5jZS5pbnN0YW50LmdldFRpbWV6b25lT2Zmc2V0KCkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaW1wbHlTaW1pbGFyVGltZShjb21wb25lbnRzLCBkYXRlKTtcbiAgICAgICAgICAgIGlmIChyZWZlcmVuY2UudGltZXpvbmVPZmZzZXQgIT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICBjb21wb25lbnRzLmltcGx5KFwidGltZXpvbmVPZmZzZXRcIiwgLXJlZmVyZW5jZS5pbnN0YW50LmdldFRpbWV6b25lT2Zmc2V0KCkpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoZnJhZ21lbnRzW1wiZFwiXSkge1xuICAgICAgICAgICAgICAgIGNvbXBvbmVudHMuYXNzaWduKFwiZGF5XCIsIGRhdGUuZGF0ZSgpKTtcbiAgICAgICAgICAgICAgICBjb21wb25lbnRzLmFzc2lnbihcIm1vbnRoXCIsIGRhdGUubW9udGgoKSArIDEpO1xuICAgICAgICAgICAgICAgIGNvbXBvbmVudHMuYXNzaWduKFwieWVhclwiLCBkYXRlLnllYXIoKSk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGZyYWdtZW50c1tcIndlZWtcIl0pIHtcbiAgICAgICAgICAgICAgICBjb21wb25lbnRzLmFzc2lnbihcImRheVwiLCBkYXRlLmRhdGUoKSk7XG4gICAgICAgICAgICAgICAgY29tcG9uZW50cy5hc3NpZ24oXCJtb250aFwiLCBkYXRlLm1vbnRoKCkgKyAxKTtcbiAgICAgICAgICAgICAgICBjb21wb25lbnRzLmFzc2lnbihcInllYXJcIiwgZGF0ZS55ZWFyKCkpO1xuICAgICAgICAgICAgICAgIGNvbXBvbmVudHMuaW1wbHkoXCJ3ZWVrZGF5XCIsIGRhdGUuZGF5KCkpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBjb21wb25lbnRzLmltcGx5KFwiZGF5XCIsIGRhdGUuZGF0ZSgpKTtcbiAgICAgICAgICAgICAgICBpZiAoZnJhZ21lbnRzW1wibW9udGhcIl0pIHtcbiAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50cy5hc3NpZ24oXCJtb250aFwiLCBkYXRlLm1vbnRoKCkgKyAxKTtcbiAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50cy5hc3NpZ24oXCJ5ZWFyXCIsIGRhdGUueWVhcigpKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBjb21wb25lbnRzLmltcGx5KFwibW9udGhcIiwgZGF0ZS5tb250aCgpICsgMSk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChmcmFnbWVudHNbXCJ5ZWFyXCJdKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb21wb25lbnRzLmFzc2lnbihcInllYXJcIiwgZGF0ZS55ZWFyKCkpO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50cy5pbXBseShcInllYXJcIiwgZGF0ZS55ZWFyKCkpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGNvbXBvbmVudHM7XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgUGFyc2luZ1Jlc3VsdCBpbXBsZW1lbnRzIFBhcnNlZFJlc3VsdCB7XG4gICAgcmVmRGF0ZTogRGF0ZTtcbiAgICBpbmRleDogbnVtYmVyO1xuICAgIHRleHQ6IHN0cmluZztcblxuICAgIHJlZmVyZW5jZTogUmVmZXJlbmNlV2l0aFRpbWV6b25lO1xuXG4gICAgc3RhcnQ6IFBhcnNpbmdDb21wb25lbnRzO1xuICAgIGVuZD86IFBhcnNpbmdDb21wb25lbnRzO1xuXG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIHJlZmVyZW5jZTogUmVmZXJlbmNlV2l0aFRpbWV6b25lLFxuICAgICAgICBpbmRleDogbnVtYmVyLFxuICAgICAgICB0ZXh0OiBzdHJpbmcsXG4gICAgICAgIHN0YXJ0PzogUGFyc2luZ0NvbXBvbmVudHMsXG4gICAgICAgIGVuZD86IFBhcnNpbmdDb21wb25lbnRzXG4gICAgKSB7XG4gICAgICAgIHRoaXMucmVmZXJlbmNlID0gcmVmZXJlbmNlO1xuICAgICAgICB0aGlzLnJlZkRhdGUgPSByZWZlcmVuY2UuaW5zdGFudDtcbiAgICAgICAgdGhpcy5pbmRleCA9IGluZGV4O1xuICAgICAgICB0aGlzLnRleHQgPSB0ZXh0O1xuICAgICAgICB0aGlzLnN0YXJ0ID0gc3RhcnQgfHwgbmV3IFBhcnNpbmdDb21wb25lbnRzKHJlZmVyZW5jZSk7XG4gICAgICAgIHRoaXMuZW5kID0gZW5kO1xuICAgIH1cblxuICAgIGNsb25lKCkge1xuICAgICAgICBjb25zdCByZXN1bHQgPSBuZXcgUGFyc2luZ1Jlc3VsdCh0aGlzLnJlZmVyZW5jZSwgdGhpcy5pbmRleCwgdGhpcy50ZXh0KTtcbiAgICAgICAgcmVzdWx0LnN0YXJ0ID0gdGhpcy5zdGFydCA/IHRoaXMuc3RhcnQuY2xvbmUoKSA6IG51bGw7XG4gICAgICAgIHJlc3VsdC5lbmQgPSB0aGlzLmVuZCA/IHRoaXMuZW5kLmNsb25lKCkgOiBudWxsO1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cblxuICAgIGRhdGUoKTogRGF0ZSB7XG4gICAgICAgIHJldHVybiB0aGlzLnN0YXJ0LmRhdGUoKTtcbiAgICB9XG5cbiAgICBhZGRUYWcodGFnOiBzdHJpbmcpOiBQYXJzaW5nUmVzdWx0IHtcbiAgICAgICAgdGhpcy5zdGFydC5hZGRUYWcodGFnKTtcbiAgICAgICAgaWYgKHRoaXMuZW5kKSB7XG4gICAgICAgICAgICB0aGlzLmVuZC5hZGRUYWcodGFnKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBhZGRUYWdzKHRhZ3M6IHN0cmluZ1tdIHwgU2V0PHN0cmluZz4pOiBQYXJzaW5nUmVzdWx0IHtcbiAgICAgICAgdGhpcy5zdGFydC5hZGRUYWdzKHRhZ3MpO1xuICAgICAgICBpZiAodGhpcy5lbmQpIHtcbiAgICAgICAgICAgIHRoaXMuZW5kLmFkZFRhZ3ModGFncyk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgdGFncygpOiBTZXQ8c3RyaW5nPiB7XG4gICAgICAgIGNvbnN0IGNvbWJpbmVkVGFnczogU2V0PHN0cmluZz4gPSBuZXcgU2V0KHRoaXMuc3RhcnQudGFncygpKTtcbiAgICAgICAgaWYgKHRoaXMuZW5kKSB7XG4gICAgICAgICAgICBmb3IgKGNvbnN0IHRhZyBvZiB0aGlzLmVuZC50YWdzKCkpIHtcbiAgICAgICAgICAgICAgICBjb21iaW5lZFRhZ3MuYWRkKHRhZyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGNvbWJpbmVkVGFncztcbiAgICB9XG5cbiAgICB0b1N0cmluZygpIHtcbiAgICAgICAgY29uc3QgdGFncyA9IEFycmF5LmZyb20odGhpcy50YWdzKCkpLnNvcnQoKTtcbiAgICAgICAgcmV0dXJuIGBbUGFyc2luZ1Jlc3VsdCB7aW5kZXg6ICR7dGhpcy5pbmRleH0sIHRleHQ6ICcke3RoaXMudGV4dH0nLCB0YWdzOiAke0pTT04uc3RyaW5naWZ5KHRhZ3MpfSAuLi59XWA7XG4gICAgfVxufVxuIiwgImltcG9ydCB7IERlYnVnQ29uc3VtZSwgRGVidWdIYW5kbGVyIH0gZnJvbSBcIi4vZGVidWdnaW5nXCI7XG5cbmV4cG9ydCBpbnRlcmZhY2UgUGFyc2luZ09wdGlvbiB7XG4gICAgLyoqXG4gICAgICogVG8gcGFyc2Ugb25seSBmb3J3YXJkIGRhdGVzICh0aGUgcmVzdWx0cyBzaG91bGQgYmUgYWZ0ZXIgdGhlIHJlZmVyZW5jZSBkYXRlKS5cbiAgICAgKiBUaGlzIGVmZmVjdHMgZGF0ZS90aW1lIGltcGxpY2F0aW9uIChlLmcuIHdlZWtkYXkgb3IgdGltZSBtZW50aW9uaW5nKVxuICAgICAqL1xuICAgIGZvcndhcmREYXRlPzogYm9vbGVhbjtcblxuICAgIC8qKlxuICAgICAqIEFkZGl0aW9uYWwgdGltZXpvbmUga2V5d29yZHMgZm9yIHRoZSBwYXJzZXJzIHRvIHJlY29nbml6ZS5cbiAgICAgKiBBbnkgdmFsdWUgcHJvdmlkZWQgd2lsbCBvdmVycmlkZSB0aGUgZGVmYXVsdCBoYW5kbGluZyBvZiB0aGF0IHZhbHVlLlxuICAgICAqL1xuICAgIHRpbWV6b25lcz86IFRpbWV6b25lQWJick1hcDtcblxuICAgIC8qKlxuICAgICAqIEludGVybmFsIGRlYnVnIGV2ZW50IGhhbmRsZXIuXG4gICAgICogQGludGVybmFsXG4gICAgICovXG4gICAgZGVidWc/OiBEZWJ1Z0hhbmRsZXIgfCBEZWJ1Z0NvbnN1bWU7XG59XG5cbi8qKlxuICogU29tZSB0aW1lem9uZSBhYmJyZXZpYXRpb25zIGFyZSBhbWJpZ3VvdXMgaW4gdGhhdCB0aGV5IHJlZmVyIHRvIGRpZmZlcmVudCBvZmZzZXRzXG4gKiBkZXBlbmRpbmcgb24gdGhlIHRpbWUgb2YgeWVhciBcdTIwMTQgZGF5bGlnaHQgc2F2aW5ncyB0aW1lIChEU1QpLCBvciBub24tRFNULiBUaGlzIGludGVyZmFjZVxuICogYWxsb3dzIGRlZmluaW5nIHN1Y2ggdGltZXpvbmVzXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgQW1iaWd1b3VzVGltZXpvbmVNYXAge1xuICAgIHRpbWV6b25lT2Zmc2V0RHVyaW5nRHN0OiBudW1iZXI7XG4gICAgdGltZXpvbmVPZmZzZXROb25Ec3Q6IG51bWJlcjtcbiAgICAvKipcbiAgICAgKiBSZXR1cm4gdGhlIHN0YXJ0IGRhdGUgb2YgRFNUIGZvciB0aGUgZ2l2ZW4geWVhci5cbiAgICAgKiB0aW1lem9uZS50cyBjb250YWlucyBoZWxwZXIgbWV0aG9kcyBmb3IgY29tbW9uIHN1Y2ggcnVsZXMuXG4gICAgICovXG4gICAgZHN0U3RhcnQ6ICh5ZWFyOiBudW1iZXIpID0+IERhdGU7XG4gICAgLyoqXG4gICAgICogUmV0dXJuIHRoZSBlbmQgZGF0ZSBvZiBEU1QgZm9yIHRoZSBnaXZlbiB5ZWFyLlxuICAgICAqIHRpbWV6b25lLnRzIGNvbnRhaW5zIGhlbHBlciBtZXRob2RzIGZvciBjb21tb24gc3VjaCBydWxlcy5cbiAgICAgKi9cbiAgICBkc3RFbmQ6ICh5ZWFyOiBudW1iZXIpID0+IERhdGU7XG59XG5cbi8qKlxuICogQSBtYXAgZGVzY3JpYmluZyBob3cgdGltZXpvbmUgYWJicmV2aWF0aW9ucyBzaG91bGQgbWFwIHRvIHRpbWUgb2Zmc2V0cy5cbiAqIFN1cHBvcnRzIGJvdGggdW5hbWJpZ291cyBtYXBwaW5ncyBhYmJyZXZpYXRpb24gPT4gb2Zmc2V0LFxuICogYW5kIGFtYmlndW91cyBtYXBwaW5ncywgd2hlcmUgdGhlIG9mZnNldCB3aWxsIGRlcGVuZCBvbiB3aGV0aGVyIHRoZVxuICogdGltZSBpbiBxdWVzdGlvbiBpcyBkdXJpbmcgZGF5bGlnaHQgc2F2aW5ncyB0aW1lIG9yIG5vdC5cbiAqL1xuZXhwb3J0IHR5cGUgVGltZXpvbmVBYmJyTWFwID0geyBba2V5OiBzdHJpbmddOiBudW1iZXIgfCBBbWJpZ3VvdXNUaW1lem9uZU1hcCB9O1xuXG5leHBvcnQgaW50ZXJmYWNlIFBhcnNpbmdSZWZlcmVuY2Uge1xuICAgIC8qKlxuICAgICAqIFJlZmVyZW5jZSBkYXRlLiBUaGUgaW5zdGFudCAoSmF2YVNjcmlwdCBEYXRlIG9iamVjdCkgd2hlbiB0aGUgaW5wdXQgaXMgd3JpdHRlbiBvciBtZW50aW9uLlxuICAgICAqIFRoaXMgZWZmZWN0IGRhdGUvdGltZSBpbXBsaWNhdGlvbiAoZS5nLiB3ZWVrZGF5IG9yIHRpbWUgbWVudGlvbmluZykuXG4gICAgICogKGRlZmF1bHQgPSBub3cpXG4gICAgICovXG4gICAgaW5zdGFudD86IERhdGU7XG5cbiAgICAvKipcbiAgICAgKiBSZWZlcmVuY2UgdGltZXpvbmUuIFRoZSB0aW1lem9uZSB3aGVyZSB0aGUgaW5wdXQgaXMgd3JpdHRlbiBvciBtZW50aW9uLlxuICAgICAqIERhdGUvdGltZSBpbXBsaWNhdGlvbiB3aWxsIGFjY291bnQgdGhlIGRpZmZlcmVuY2UgYmV0d2VlbiBpbnB1dCB0aW1lem9uZSBhbmQgdGhlIGN1cnJlbnQgc3lzdGVtIHRpbWV6b25lLlxuICAgICAqIChkZWZhdWx0ID0gY3VycmVudCB0aW1lem9uZSlcbiAgICAgKi9cbiAgICB0aW1lem9uZT86IHN0cmluZyB8IG51bWJlcjtcbn1cblxuLyoqXG4gKiBQYXJzZWQgcmVzdWx0IG9yIGZpbmFsIG91dHB1dC5cbiAqIEVhY2ggcmVzdWx0IG9iamVjdCByZXByZXNlbnRzIGEgZGF0ZS90aW1lIChvciBkYXRlL3RpbWUtcmFuZ2UpIG1lbnRpb25pbmcgaW4gdGhlIGlucHV0LlxuICovXG5leHBvcnQgaW50ZXJmYWNlIFBhcnNlZFJlc3VsdCB7XG4gICAgcmVhZG9ubHkgcmVmRGF0ZTogRGF0ZTtcbiAgICByZWFkb25seSBpbmRleDogbnVtYmVyO1xuICAgIHJlYWRvbmx5IHRleHQ6IHN0cmluZztcblxuICAgIHJlYWRvbmx5IHN0YXJ0OiBQYXJzZWRDb21wb25lbnRzO1xuICAgIHJlYWRvbmx5IGVuZD86IFBhcnNlZENvbXBvbmVudHM7XG5cbiAgICAvKipcbiAgICAgKiBAcmV0dXJuIGEgamF2YXNjcmlwdCBkYXRlIG9iamVjdCBjcmVhdGVkIGZyb20gdGhlIGByZXN1bHQuc3RhcnRgLlxuICAgICAqL1xuICAgIGRhdGUoKTogRGF0ZTtcblxuICAgIC8qKlxuICAgICAqIEByZXR1cm4gZGVidWdnaW5nIHRhZ3MgY29tYmluZWQgb2YgdGhlIGByZXN1bHQuc3RhcnRgIGFuZCBgcmVzdWx0LmVuZGAuXG4gICAgICovXG4gICAgdGFncygpOiBTZXQ8c3RyaW5nPjtcbn1cblxuLyoqXG4gKiBBIGNvbGxlY3Rpb24gb2YgcGFyc2VkIGRhdGUvdGltZSBjb21wb25lbnRzIChlLmcuIGRheSwgaG91ciwgbWludXRlLCAuLi4sIGV0YykuXG4gKlxuICogRWFjaCBwYXJzZWQgY29tcG9uZW50IGhhcyB0aHJlZSBkaWZmZXJlbnQgbGV2ZWxzIG9mIGNlcnRhaW50eS5cbiAqIC0gKkNlcnRhaW4qIChvciAqS25vd24qKTogVGhlIGNvbXBvbmVudCBpcyBkaXJlY3RseSBtZW50aW9uZWQgYW5kIHBhcnNlZC5cbiAqIC0gKkltcGxpZWQqOiBUaGUgY29tcG9uZW50IGlzIG5vdCBkaXJlY3RseSBtZW50aW9uZWQsIGJ1dCBpbXBsaWVkIGJ5IG90aGVyIHBhcnNlZCBpbmZvcm1hdGlvbi5cbiAqIC0gKlVua25vd24qOiBDb21wbGV0ZWx5IG5vIG1lbnRpb24gb2YgdGhlIGNvbXBvbmVudC5cbiAqL1xuZXhwb3J0IGludGVyZmFjZSBQYXJzZWRDb21wb25lbnRzIHtcbiAgICAvKipcbiAgICAgKiBDaGVjayB0aGUgY29tcG9uZW50IGNlcnRhaW5seSBpZiB0aGUgY29tcG9uZW50IGlzICpDZXJ0YWluKiAob3IgKktub3duKilcbiAgICAgKi9cbiAgICBpc0NlcnRhaW4oY29tcG9uZW50OiBDb21wb25lbnQpOiBib29sZWFuO1xuXG4gICAgLyoqXG4gICAgICogR2V0IHRoZSBjb21wb25lbnQgdmFsdWUgZm9yIGVpdGhlciAqQ2VydGFpbiogb3IgKkltcGxpZWQqIHZhbHVlLlxuICAgICAqL1xuICAgIGdldChjb21wb25lbnQ6IENvbXBvbmVudCk6IG51bWJlciB8IG51bGw7XG5cbiAgICAvKipcbiAgICAgKiBAcmV0dXJuIGEgamF2YXNjcmlwdCBkYXRlIG9iamVjdC5cbiAgICAgKi9cbiAgICBkYXRlKCk6IERhdGU7XG5cbiAgICAvKipcbiAgICAgKiBAcmV0dXJuIGRlYnVnZ2luZyB0YWdzIG9mIHRoZSBwYXJzZWQgY29tcG9uZW50LlxuICAgICAqL1xuICAgIHRhZ3MoKTogU2V0PHN0cmluZz47XG59XG5cbmV4cG9ydCB0eXBlIENvbXBvbmVudCA9XG4gICAgfCBcInllYXJcIlxuICAgIHwgXCJtb250aFwiXG4gICAgfCBcImRheVwiXG4gICAgfCBcIndlZWtkYXlcIlxuICAgIHwgXCJob3VyXCJcbiAgICB8IFwibWludXRlXCJcbiAgICB8IFwic2Vjb25kXCJcbiAgICB8IFwibWlsbGlzZWNvbmRcIlxuICAgIHwgXCJtZXJpZGllbVwiXG4gICAgfCBcInRpbWV6b25lT2Zmc2V0XCI7XG5cbmV4cG9ydCBlbnVtIE1lcmlkaWVtIHtcbiAgICBBTSA9IDAsXG4gICAgUE0gPSAxLFxufVxuXG5leHBvcnQgZW51bSBXZWVrZGF5IHtcbiAgICBTVU5EQVkgPSAwLFxuICAgIE1PTkRBWSA9IDEsXG4gICAgVFVFU0RBWSA9IDIsXG4gICAgV0VETkVTREFZID0gMyxcbiAgICBUSFVSU0RBWSA9IDQsXG4gICAgRlJJREFZID0gNSxcbiAgICBTQVRVUkRBWSA9IDYsXG59XG5cbmV4cG9ydCBlbnVtIE1vbnRoIHtcbiAgICBKQU5VQVJZID0gMSxcbiAgICBGRUJSVUFSWSA9IDIsXG4gICAgTUFSQ0ggPSAzLFxuICAgIEFQUklMID0gNCxcbiAgICBNQVkgPSA1LFxuICAgIEpVTkUgPSA2LFxuICAgIEpVTFkgPSA3LFxuICAgIEFVR1VTVCA9IDgsXG4gICAgU0VQVEVNQkVSID0gOSxcbiAgICBPQ1RPQkVSID0gMTAsXG4gICAgTk9WRU1CRVIgPSAxMSxcbiAgICBERUNFTUJFUiA9IDEyLFxufVxuIiwgImltcG9ydCB7IFBhcnNpbmdDb21wb25lbnRzIH0gZnJvbSBcIi4uL3Jlc3VsdHNcIjtcbmltcG9ydCBkYXlqcyBmcm9tIFwiZGF5anNcIjtcbmltcG9ydCB7IE1lcmlkaWVtIH0gZnJvbSBcIi4uL3R5cGVzXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBhc3NpZ25UaGVOZXh0RGF5KGNvbXBvbmVudDogUGFyc2luZ0NvbXBvbmVudHMsIHRhcmdldERheUpzOiBkYXlqcy5EYXlqcykge1xuICAgIHRhcmdldERheUpzID0gdGFyZ2V0RGF5SnMuYWRkKDEsIFwiZGF5XCIpO1xuICAgIGFzc2lnblNpbWlsYXJEYXRlKGNvbXBvbmVudCwgdGFyZ2V0RGF5SnMpO1xuICAgIGltcGx5U2ltaWxhclRpbWUoY29tcG9uZW50LCB0YXJnZXREYXlKcyk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpbXBseVRoZU5leHREYXkoY29tcG9uZW50OiBQYXJzaW5nQ29tcG9uZW50cywgdGFyZ2V0RGF5SnM6IGRheWpzLkRheWpzKSB7XG4gICAgdGFyZ2V0RGF5SnMgPSB0YXJnZXREYXlKcy5hZGQoMSwgXCJkYXlcIik7XG4gICAgaW1wbHlTaW1pbGFyRGF0ZShjb21wb25lbnQsIHRhcmdldERheUpzKTtcbiAgICBpbXBseVNpbWlsYXJUaW1lKGNvbXBvbmVudCwgdGFyZ2V0RGF5SnMpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYXNzaWduU2ltaWxhckRhdGUoY29tcG9uZW50OiBQYXJzaW5nQ29tcG9uZW50cywgdGFyZ2V0RGF5SnM6IGRheWpzLkRheWpzKSB7XG4gICAgY29tcG9uZW50LmFzc2lnbihcImRheVwiLCB0YXJnZXREYXlKcy5kYXRlKCkpO1xuICAgIGNvbXBvbmVudC5hc3NpZ24oXCJtb250aFwiLCB0YXJnZXREYXlKcy5tb250aCgpICsgMSk7XG4gICAgY29tcG9uZW50LmFzc2lnbihcInllYXJcIiwgdGFyZ2V0RGF5SnMueWVhcigpKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFzc2lnblNpbWlsYXJUaW1lKGNvbXBvbmVudDogUGFyc2luZ0NvbXBvbmVudHMsIHRhcmdldERheUpzOiBkYXlqcy5EYXlqcykge1xuICAgIGNvbXBvbmVudC5hc3NpZ24oXCJob3VyXCIsIHRhcmdldERheUpzLmhvdXIoKSk7XG4gICAgY29tcG9uZW50LmFzc2lnbihcIm1pbnV0ZVwiLCB0YXJnZXREYXlKcy5taW51dGUoKSk7XG4gICAgY29tcG9uZW50LmFzc2lnbihcInNlY29uZFwiLCB0YXJnZXREYXlKcy5zZWNvbmQoKSk7XG4gICAgY29tcG9uZW50LmFzc2lnbihcIm1pbGxpc2Vjb25kXCIsIHRhcmdldERheUpzLm1pbGxpc2Vjb25kKCkpO1xuICAgIGlmIChjb21wb25lbnQuZ2V0KFwiaG91clwiKSA8IDEyKSB7XG4gICAgICAgIGNvbXBvbmVudC5hc3NpZ24oXCJtZXJpZGllbVwiLCBNZXJpZGllbS5BTSk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgY29tcG9uZW50LmFzc2lnbihcIm1lcmlkaWVtXCIsIE1lcmlkaWVtLlBNKTtcbiAgICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpbXBseVNpbWlsYXJEYXRlKGNvbXBvbmVudDogUGFyc2luZ0NvbXBvbmVudHMsIHRhcmdldERheUpzOiBkYXlqcy5EYXlqcykge1xuICAgIGNvbXBvbmVudC5pbXBseShcImRheVwiLCB0YXJnZXREYXlKcy5kYXRlKCkpO1xuICAgIGNvbXBvbmVudC5pbXBseShcIm1vbnRoXCIsIHRhcmdldERheUpzLm1vbnRoKCkgKyAxKTtcbiAgICBjb21wb25lbnQuaW1wbHkoXCJ5ZWFyXCIsIHRhcmdldERheUpzLnllYXIoKSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpbXBseVNpbWlsYXJUaW1lKGNvbXBvbmVudDogUGFyc2luZ0NvbXBvbmVudHMsIHRhcmdldERheUpzOiBkYXlqcy5EYXlqcykge1xuICAgIGNvbXBvbmVudC5pbXBseShcImhvdXJcIiwgdGFyZ2V0RGF5SnMuaG91cigpKTtcbiAgICBjb21wb25lbnQuaW1wbHkoXCJtaW51dGVcIiwgdGFyZ2V0RGF5SnMubWludXRlKCkpO1xuICAgIGNvbXBvbmVudC5pbXBseShcInNlY29uZFwiLCB0YXJnZXREYXlKcy5zZWNvbmQoKSk7XG4gICAgY29tcG9uZW50LmltcGx5KFwibWlsbGlzZWNvbmRcIiwgdGFyZ2V0RGF5SnMubWlsbGlzZWNvbmQoKSk7XG59XG4iLCAiaW1wb3J0IGRheWpzIGZyb20gXCJkYXlqc1wiO1xuaW1wb3J0IHsgVGltZXpvbmVBYmJyTWFwLCBXZWVrZGF5LCBNb250aCB9IGZyb20gXCIuL3R5cGVzXCI7XG5cbmV4cG9ydCBjb25zdCBUSU1FWk9ORV9BQkJSX01BUDogVGltZXpvbmVBYmJyTWFwID0ge1xuICAgIEFDRFQ6IDYzMCxcbiAgICBBQ1NUOiA1NzAsXG4gICAgQURUOiAtMTgwLFxuICAgIEFFRFQ6IDY2MCxcbiAgICBBRVNUOiA2MDAsXG4gICAgQUZUOiAyNzAsXG4gICAgQUtEVDogLTQ4MCxcbiAgICBBS1NUOiAtNTQwLFxuICAgIEFMTVQ6IDM2MCxcbiAgICBBTVNUOiAtMTgwLFxuICAgIEFNVDogLTI0MCxcbiAgICBBTkFTVDogNzIwLFxuICAgIEFOQVQ6IDcyMCxcbiAgICBBUVRUOiAzMDAsXG4gICAgQVJUOiAtMTgwLFxuICAgIEFTVDogLTI0MCxcbiAgICBBV0RUOiA1NDAsXG4gICAgQVdTVDogNDgwLFxuICAgIEFaT1NUOiAwLFxuICAgIEFaT1Q6IC02MCxcbiAgICBBWlNUOiAzMDAsXG4gICAgQVpUOiAyNDAsXG4gICAgQk5UOiA0ODAsXG4gICAgQk9UOiAtMjQwLFxuICAgIEJSU1Q6IC0xMjAsXG4gICAgQlJUOiAtMTgwLFxuICAgIEJTVDogNjAsXG4gICAgQlRUOiAzNjAsXG4gICAgQ0FTVDogNDgwLFxuICAgIENBVDogMTIwLFxuICAgIENDVDogMzkwLFxuICAgIENEVDogLTMwMCxcbiAgICBDRVNUOiAxMjAsXG4gICAgLy8gTm90ZTogTWFueSBzb3VyY2VzIGRlZmluZSBDRVQgYXMgYSBjb25zdGFudCBVVEMrMS4gSW4gY29tbW9uIHVzYWdlLCBob3dldmVyLFxuICAgIC8vIENFVCB1c3VhbGx5IHJlZmVycyB0byB0aGUgdGltZSBvYnNlcnZlZCBpbiBtb3N0IG9mIEV1cm9wZSwgYmUgaXQgc3RhbmRhcmQgdGltZSBvciBkYXlsaWdodCBzYXZpbmcgdGltZS5cbiAgICBDRVQ6IHtcbiAgICAgICAgdGltZXpvbmVPZmZzZXREdXJpbmdEc3Q6IDIgKiA2MCxcbiAgICAgICAgdGltZXpvbmVPZmZzZXROb25Ec3Q6IDYwLFxuICAgICAgICBkc3RTdGFydDogKHllYXI6IG51bWJlcikgPT4gZ2V0TGFzdFdlZWtkYXlPZk1vbnRoKHllYXIsIE1vbnRoLk1BUkNILCBXZWVrZGF5LlNVTkRBWSwgMiksXG4gICAgICAgIGRzdEVuZDogKHllYXI6IG51bWJlcikgPT4gZ2V0TGFzdFdlZWtkYXlPZk1vbnRoKHllYXIsIE1vbnRoLk9DVE9CRVIsIFdlZWtkYXkuU1VOREFZLCAzKSxcbiAgICB9LFxuICAgIENIQURUOiA4MjUsXG4gICAgQ0hBU1Q6IDc2NSxcbiAgICBDS1Q6IC02MDAsXG4gICAgQ0xTVDogLTE4MCxcbiAgICBDTFQ6IC0yNDAsXG4gICAgQ09UOiAtMzAwLFxuICAgIENTVDogLTM2MCxcbiAgICBDVDoge1xuICAgICAgICB0aW1lem9uZU9mZnNldER1cmluZ0RzdDogLTUgKiA2MCxcbiAgICAgICAgdGltZXpvbmVPZmZzZXROb25Ec3Q6IC02ICogNjAsXG4gICAgICAgIGRzdFN0YXJ0OiAoeWVhcjogbnVtYmVyKSA9PiBnZXROdGhXZWVrZGF5T2ZNb250aCh5ZWFyLCBNb250aC5NQVJDSCwgV2Vla2RheS5TVU5EQVksIDIsIDIpLFxuICAgICAgICBkc3RFbmQ6ICh5ZWFyOiBudW1iZXIpID0+IGdldE50aFdlZWtkYXlPZk1vbnRoKHllYXIsIE1vbnRoLk5PVkVNQkVSLCBXZWVrZGF5LlNVTkRBWSwgMSwgMiksXG4gICAgfSxcbiAgICBDVlQ6IC02MCxcbiAgICBDWFQ6IDQyMCxcbiAgICBDaFNUOiA2MDAsXG4gICAgREFWVDogNDIwLFxuICAgIEVBU1NUOiAtMzAwLFxuICAgIEVBU1Q6IC0zNjAsXG4gICAgRUFUOiAxODAsXG4gICAgRUNUOiAtMzAwLFxuICAgIEVEVDogLTI0MCxcbiAgICBFRVNUOiAxODAsXG4gICAgRUVUOiAxMjAsXG4gICAgRUdTVDogMCxcbiAgICBFR1Q6IC02MCxcbiAgICBFU1Q6IC0zMDAsXG4gICAgRVQ6IHtcbiAgICAgICAgdGltZXpvbmVPZmZzZXREdXJpbmdEc3Q6IC00ICogNjAsXG4gICAgICAgIHRpbWV6b25lT2Zmc2V0Tm9uRHN0OiAtNSAqIDYwLFxuICAgICAgICBkc3RTdGFydDogKHllYXI6IG51bWJlcikgPT4gZ2V0TnRoV2Vla2RheU9mTW9udGgoeWVhciwgTW9udGguTUFSQ0gsIFdlZWtkYXkuU1VOREFZLCAyLCAyKSxcbiAgICAgICAgZHN0RW5kOiAoeWVhcjogbnVtYmVyKSA9PiBnZXROdGhXZWVrZGF5T2ZNb250aCh5ZWFyLCBNb250aC5OT1ZFTUJFUiwgV2Vla2RheS5TVU5EQVksIDEsIDIpLFxuICAgIH0sXG4gICAgRkpTVDogNzgwLFxuICAgIEZKVDogNzIwLFxuICAgIEZLU1Q6IC0xODAsXG4gICAgRktUOiAtMjQwLFxuICAgIEZOVDogLTEyMCxcbiAgICBHQUxUOiAtMzYwLFxuICAgIEdBTVQ6IC01NDAsXG4gICAgR0VUOiAyNDAsXG4gICAgR0ZUOiAtMTgwLFxuICAgIEdJTFQ6IDcyMCxcbiAgICBHTVQ6IDAsXG4gICAgR1NUOiAyNDAsXG4gICAgR1lUOiAtMjQwLFxuICAgIEhBQTogLTE4MCxcbiAgICBIQUM6IC0zMDAsXG4gICAgSEFEVDogLTU0MCxcbiAgICBIQUU6IC0yNDAsXG4gICAgSEFQOiAtNDIwLFxuICAgIEhBUjogLTM2MCxcbiAgICBIQVNUOiAtNjAwLFxuICAgIEhBVDogLTkwLFxuICAgIEhBWTogLTQ4MCxcbiAgICBIS1Q6IDQ4MCxcbiAgICBITFY6IC0yMTAsXG4gICAgSE5BOiAtMjQwLFxuICAgIEhOQzogLTM2MCxcbiAgICBITkU6IC0zMDAsXG4gICAgSE5QOiAtNDgwLFxuICAgIEhOUjogLTQyMCxcbiAgICBITlQ6IC0xNTAsXG4gICAgSE5ZOiAtNTQwLFxuICAgIEhPVlQ6IDQyMCxcbiAgICBJQ1Q6IDQyMCxcbiAgICBJRFQ6IDE4MCxcbiAgICBJT1Q6IDM2MCxcbiAgICBJUkRUOiAyNzAsXG4gICAgSVJLU1Q6IDU0MCxcbiAgICBJUktUOiA1NDAsXG4gICAgSVJTVDogMjEwLFxuICAgIElTVDogMzMwLFxuICAgIEpTVDogNTQwLFxuICAgIEtHVDogMzYwLFxuICAgIEtSQVNUOiA0ODAsXG4gICAgS1JBVDogNDgwLFxuICAgIEtTVDogNTQwLFxuICAgIEtVWVQ6IDI0MCxcbiAgICBMSERUOiA2NjAsXG4gICAgTEhTVDogNjMwLFxuICAgIExJTlQ6IDg0MCxcbiAgICBNQUdTVDogNzIwLFxuICAgIE1BR1Q6IDcyMCxcbiAgICBNQVJUOiAtNTEwLFxuICAgIE1BV1Q6IDMwMCxcbiAgICBNRFQ6IC0zNjAsXG4gICAgTUVTWjogMTIwLFxuICAgIE1FWjogNjAsXG4gICAgTUhUOiA3MjAsXG4gICAgTU1UOiAzOTAsXG4gICAgTVNEOiAyNDAsXG4gICAgTVNLOiAxODAsXG4gICAgTVNUOiAtNDIwLFxuICAgIE1UOiB7XG4gICAgICAgIHRpbWV6b25lT2Zmc2V0RHVyaW5nRHN0OiAtNiAqIDYwLFxuICAgICAgICB0aW1lem9uZU9mZnNldE5vbkRzdDogLTcgKiA2MCxcbiAgICAgICAgZHN0U3RhcnQ6ICh5ZWFyOiBudW1iZXIpID0+IGdldE50aFdlZWtkYXlPZk1vbnRoKHllYXIsIE1vbnRoLk1BUkNILCBXZWVrZGF5LlNVTkRBWSwgMiwgMiksXG4gICAgICAgIGRzdEVuZDogKHllYXI6IG51bWJlcikgPT4gZ2V0TnRoV2Vla2RheU9mTW9udGgoeWVhciwgTW9udGguTk9WRU1CRVIsIFdlZWtkYXkuU1VOREFZLCAxLCAyKSxcbiAgICB9LFxuICAgIE1VVDogMjQwLFxuICAgIE1WVDogMzAwLFxuICAgIE1ZVDogNDgwLFxuICAgIE5DVDogNjYwLFxuICAgIE5EVDogLTkwLFxuICAgIE5GVDogNjkwLFxuICAgIE5PVlNUOiA0MjAsXG4gICAgTk9WVDogMzYwLFxuICAgIE5QVDogMzQ1LFxuICAgIE5TVDogLTE1MCxcbiAgICBOVVQ6IC02NjAsXG4gICAgTlpEVDogNzgwLFxuICAgIE5aU1Q6IDcyMCxcbiAgICBPTVNTVDogNDIwLFxuICAgIE9NU1Q6IDQyMCxcbiAgICBQRFQ6IC00MjAsXG4gICAgUEVUOiAtMzAwLFxuICAgIFBFVFNUOiA3MjAsXG4gICAgUEVUVDogNzIwLFxuICAgIFBHVDogNjAwLFxuICAgIFBIT1Q6IDc4MCxcbiAgICBQSFQ6IDQ4MCxcbiAgICBQS1Q6IDMwMCxcbiAgICBQTURUOiAtMTIwLFxuICAgIFBNU1Q6IC0xODAsXG4gICAgUE9OVDogNjYwLFxuICAgIFBTVDogLTQ4MCxcbiAgICBQVDoge1xuICAgICAgICB0aW1lem9uZU9mZnNldER1cmluZ0RzdDogLTcgKiA2MCxcbiAgICAgICAgdGltZXpvbmVPZmZzZXROb25Ec3Q6IC04ICogNjAsXG4gICAgICAgIGRzdFN0YXJ0OiAoeWVhcjogbnVtYmVyKSA9PiBnZXROdGhXZWVrZGF5T2ZNb250aCh5ZWFyLCBNb250aC5NQVJDSCwgV2Vla2RheS5TVU5EQVksIDIsIDIpLFxuICAgICAgICBkc3RFbmQ6ICh5ZWFyOiBudW1iZXIpID0+IGdldE50aFdlZWtkYXlPZk1vbnRoKHllYXIsIE1vbnRoLk5PVkVNQkVSLCBXZWVrZGF5LlNVTkRBWSwgMSwgMiksXG4gICAgfSxcbiAgICBQV1Q6IDU0MCxcbiAgICBQWVNUOiAtMTgwLFxuICAgIFBZVDogLTI0MCxcbiAgICBSRVQ6IDI0MCxcbiAgICBTQU1UOiAyNDAsXG4gICAgU0FTVDogMTIwLFxuICAgIFNCVDogNjYwLFxuICAgIFNDVDogMjQwLFxuICAgIFNHVDogNDgwLFxuICAgIFNSVDogLTE4MCxcbiAgICBTU1Q6IC02NjAsXG4gICAgVEFIVDogLTYwMCxcbiAgICBURlQ6IDMwMCxcbiAgICBUSlQ6IDMwMCxcbiAgICBUS1Q6IDc4MCxcbiAgICBUTFQ6IDU0MCxcbiAgICBUTVQ6IDMwMCxcbiAgICBUVlQ6IDcyMCxcbiAgICBVTEFUOiA0ODAsXG4gICAgVVRDOiAwLFxuICAgIFVZU1Q6IC0xMjAsXG4gICAgVVlUOiAtMTgwLFxuICAgIFVaVDogMzAwLFxuICAgIFZFVDogLTIxMCxcbiAgICBWTEFTVDogNjYwLFxuICAgIFZMQVQ6IDY2MCxcbiAgICBWVVQ6IDY2MCxcbiAgICBXQVNUOiAxMjAsXG4gICAgV0FUOiA2MCxcbiAgICBXRVNUOiA2MCxcbiAgICBXRVNaOiA2MCxcbiAgICBXRVQ6IDAsXG4gICAgV0VaOiAwLFxuICAgIFdGVDogNzIwLFxuICAgIFdHU1Q6IC0xMjAsXG4gICAgV0dUOiAtMTgwLFxuICAgIFdJQjogNDIwLFxuICAgIFdJVDogNTQwLFxuICAgIFdJVEE6IDQ4MCxcbiAgICBXU1Q6IDc4MCxcbiAgICBXVDogMCxcbiAgICBZQUtTVDogNjAwLFxuICAgIFlBS1Q6IDYwMCxcbiAgICBZQVBUOiA2MDAsXG4gICAgWUVLU1Q6IDM2MCxcbiAgICBZRUtUOiAzNjAsXG59O1xuXG4vKipcbiAqIEdldCB0aGUgZGF0ZSB3aGljaCBpcyB0aGUgbnRoIG9jY3VyZW5jZSBvZiBhIGdpdmVuIHdlZWtkYXkgaW4gYSBnaXZlbiBtb250aCBhbmQgeWVhci5cbiAqXG4gKiBAcGFyYW0geWVhciBUaGUgeWVhciBmb3Igd2hpY2ggdG8gZmluZCB0aGUgZGF0ZVxuICogQHBhcmFtIG1vbnRoIFRoZSBtb250aCBpbiB3aGljaCB0aGUgZGF0ZSBvY2N1cnNcbiAqIEBwYXJhbSB3ZWVrZGF5IFRoZSB3ZWVrZGF5IG9uIHdoaWNoIHRoZSBkYXRlIG9jY3Vyc1xuICogQHBhcmFtIG4gVGhlIG50aCBvY2N1cmVuY2Ugb2YgdGhlIGdpdmVuIHdlZWtkYXkgb24gdGhlIG1vbnRoIHRvIHJldHVyblxuICogQHBhcmFtIGhvdXIgVGhlIGhvdXIgb2YgZGF5IHdoaWNoIHNob3VsZCBiZSBzZXQgb24gdGhlIHJldHVybmVkIGRhdGVcbiAqIEByZXR1cm4gVGhlIGRhdGUgd2hpY2ggaXMgdGhlIG50aCBvY2N1cmVuY2Ugb2YgYSBnaXZlbiB3ZWVrZGF5IGluIGEgZ2l2ZW5cbiAqICAgICAgICAgbW9udGggYW5kIHllYXIsIGF0IHRoZSBnaXZlbiBob3VyIG9mIGRheVxuICovXG5leHBvcnQgZnVuY3Rpb24gZ2V0TnRoV2Vla2RheU9mTW9udGgoeWVhcjogbnVtYmVyLCBtb250aDogTW9udGgsIHdlZWtkYXk6IFdlZWtkYXksIG46IDEgfCAyIHwgMyB8IDQsIGhvdXIgPSAwKTogRGF0ZSB7XG4gICAgbGV0IGRheU9mTW9udGggPSAwO1xuICAgIGxldCBpID0gMDtcbiAgICB3aGlsZSAoaSA8IG4pIHtcbiAgICAgICAgZGF5T2ZNb250aCsrO1xuICAgICAgICBjb25zdCBkYXRlID0gbmV3IERhdGUoeWVhciwgbW9udGggLSAxLCBkYXlPZk1vbnRoKTtcbiAgICAgICAgaWYgKGRhdGUuZ2V0RGF5KCkgPT09IHdlZWtkYXkpIGkrKztcbiAgICB9XG4gICAgcmV0dXJuIG5ldyBEYXRlKHllYXIsIG1vbnRoIC0gMSwgZGF5T2ZNb250aCwgaG91cik7XG59XG5cbi8qKlxuICogR2V0IHRoZSBkYXRlIHdoaWNoIGlzIHRoZSBsYXN0IG9jY3VyZW5jZSBvZiBhIGdpdmVuIHdlZWtkYXkgaW4gYSBnaXZlbiBtb250aCBhbmQgeWVhci5cbiAqXG4gKiBAcGFyYW0geWVhciBUaGUgeWVhciBmb3Igd2hpY2ggdG8gZmluZCB0aGUgZGF0ZVxuICogQHBhcmFtIG1vbnRoIFRoZSBtb250aCBpbiB3aGljaCB0aGUgZGF0ZSBvY2N1cnNcbiAqIEBwYXJhbSB3ZWVrZGF5IFRoZSB3ZWVrZGF5IG9uIHdoaWNoIHRoZSBkYXRlIG9jY3Vyc1xuICogQHBhcmFtIGhvdXIgVGhlIGhvdXIgb2YgZGF5IHdoaWNoIHNob3VsZCBiZSBzZXQgb24gdGhlIHJldHVybmVkIGRhdGVcbiAqIEByZXR1cm4gVGhlIGRhdGUgd2hpY2ggaXMgdGhlIGxhc3Qgb2NjdXJlbmNlIG9mIGEgZ2l2ZW4gd2Vla2RheSBpbiBhIGdpdmVuXG4gKiAgICAgICAgIG1vbnRoIGFuZCB5ZWFyLCBhdCB0aGUgZ2l2ZW4gaG91ciBvZiBkYXlcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdldExhc3RXZWVrZGF5T2ZNb250aCh5ZWFyOiBudW1iZXIsIG1vbnRoOiBNb250aCwgd2Vla2RheTogV2Vla2RheSwgaG91ciA9IDApOiBEYXRlIHtcbiAgICAvLyBQcm9jZWR1cmU6IEZpbmQgdGhlIGZpcnN0IHdlZWtkYXkgb2YgdGhlIG5leHQgbW9udGgsIGNvbXBhcmUgd2l0aCB0aGUgZ2l2ZW4gd2Vla2RheSxcbiAgICAvLyBhbmQgdXNlIHRoZSBkaWZmZXJlbmNlIHRvIGRldGVybWluZSBob3cgbWFueSBkYXlzIHRvIHN1YnRyYWN0IGZyb20gdGhlIGZpcnN0IG9mIHRoZSBuZXh0IG1vbnRoLlxuICAgIGNvbnN0IG9uZUluZGV4ZWRXZWVrZGF5ID0gd2Vla2RheSA9PT0gMCA/IDcgOiB3ZWVrZGF5O1xuICAgIGNvbnN0IGRhdGUgPSBuZXcgRGF0ZSh5ZWFyLCBtb250aCAtIDEgKyAxLCAxLCAxMik7XG4gICAgY29uc3QgZmlyc3RXZWVrZGF5TmV4dE1vbnRoID0gZGF0ZS5nZXREYXkoKSA9PT0gMCA/IDcgOiBkYXRlLmdldERheSgpO1xuICAgIGxldCBkYXlEaWZmO1xuICAgIGlmIChmaXJzdFdlZWtkYXlOZXh0TW9udGggPT09IG9uZUluZGV4ZWRXZWVrZGF5KSBkYXlEaWZmID0gNztcbiAgICBlbHNlIGlmIChmaXJzdFdlZWtkYXlOZXh0TW9udGggPCBvbmVJbmRleGVkV2Vla2RheSkgZGF5RGlmZiA9IDcgKyBmaXJzdFdlZWtkYXlOZXh0TW9udGggLSBvbmVJbmRleGVkV2Vla2RheTtcbiAgICBlbHNlIGRheURpZmYgPSBmaXJzdFdlZWtkYXlOZXh0TW9udGggLSBvbmVJbmRleGVkV2Vla2RheTtcbiAgICBkYXRlLnNldERhdGUoZGF0ZS5nZXREYXRlKCkgLSBkYXlEaWZmKTtcbiAgICByZXR1cm4gbmV3IERhdGUoeWVhciwgbW9udGggLSAxLCBkYXRlLmdldERhdGUoKSwgaG91cik7XG59XG5cbi8qKlxuICogRmluZHMgYW5kIHJldHVybnMgdGltZXpvbmUgb2Zmc2V0LiBJZiB0aW1lem9uZUlucHV0IGlzIG51bWVyaWMsIGl0IGlzIHJldHVybmVkLiBPdGhlcndpc2UsIGxvb2sgZm9yIHRpbWV6b25lIG9mZnNldHNcbiAqIGluIHRoZSBmb2xsb3dpbmcgb3JkZXI6IHRpbWV6b25lT3ZlcnJpZGVzIC0+IHtAbGluayBUSU1FWk9ORV9BQkJSX01BUH0uXG4gKlxuICogQHBhcmFtIHRpbWV6b25lSW5wdXQgVXBwZXJjYXNlIHRpbWV6b25lIGFiYnJldmlhdGlvbiBvciBudW1lcmljIG9mZnNldCBpbiBtaW51dGVzXG4gKiBAcGFyYW0gZGF0ZSBUaGUgZGF0ZSB0byB1c2UgdG8gZGV0ZXJtaW5lIHdoZXRoZXIgdG8gcmV0dXJuIERTVCBvZmZzZXRzIGZvciBhbWJpZ3VvdXMgdGltZXpvbmVzXG4gKiBAcGFyYW0gdGltZXpvbmVPdmVycmlkZXMgT3ZlcnJpZGVzIGZvciB0aW1lem9uZXNcbiAqIEByZXR1cm4gdGltZXpvbmUgb2Zmc2V0IGluIG1pbnV0ZXNcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHRvVGltZXpvbmVPZmZzZXQoXG4gICAgdGltZXpvbmVJbnB1dD86IHN0cmluZyB8IG51bWJlcixcbiAgICBkYXRlPzogRGF0ZSxcbiAgICB0aW1lem9uZU92ZXJyaWRlczogVGltZXpvbmVBYmJyTWFwID0ge31cbik6IG51bWJlciB8IG51bGwge1xuICAgIGlmICh0aW1lem9uZUlucHV0ID09IG51bGwpIHtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiB0aW1lem9uZUlucHV0ID09PSBcIm51bWJlclwiKSB7XG4gICAgICAgIHJldHVybiB0aW1lem9uZUlucHV0O1xuICAgIH1cblxuICAgIGNvbnN0IG1hdGNoZWRUaW1lem9uZSA9IHRpbWV6b25lT3ZlcnJpZGVzW3RpbWV6b25lSW5wdXRdID8/IFRJTUVaT05FX0FCQlJfTUFQW3RpbWV6b25lSW5wdXRdO1xuICAgIGlmIChtYXRjaGVkVGltZXpvbmUgPT0gbnVsbCkge1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgLy8gVGhpcyBtZWFucyB0aGF0IHdlIGhhdmUgbWF0Y2hlZCBhbiB1bmFtYmlndW91cyB0aW1lem9uZVxuICAgIGlmICh0eXBlb2YgbWF0Y2hlZFRpbWV6b25lID09IFwibnVtYmVyXCIpIHtcbiAgICAgICAgcmV0dXJuIG1hdGNoZWRUaW1lem9uZTtcbiAgICB9XG5cbiAgICAvLyBUaGUgbWF0Y2hlZCB0aW1lem9uZSBpcyBhbiBhbWJpZ3VvdXMgdGltZXpvbmUsIHdoZXJlIHRoZSBvZmZzZXQgZGVwZW5kcyBvbiB3aGV0aGVyIHRoZSBjb250ZXh0IChyZWZEYXRlKVxuICAgIC8vIGlzIGR1cmluZyBkYXlsaWdodCBzYXZpbmdzIG9yIG5vdC5cblxuICAgIC8vIFdpdGhvdXQgcmVmRGF0ZSBhcyBjb250ZXh0LCB0aGVyZSdzIG5vIHdheSB0byBrbm93IGlmIERTVCBvciBub24tRFNUIG9mZnNldCBzaG91bGQgYmUgdXNlZC4gUmV0dXJuIG51bGwgaW5zdGVhZC5cbiAgICBpZiAoZGF0ZSA9PSBudWxsKSB7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIC8vIFJldHVybiBEU1Qgb2Zmc2V0IGlmIHRoZSByZWZEYXRlIGlzIGR1cmluZyBkYXlsaWdodCBzYXZpbmdzXG4gICAgaWYgKFxuICAgICAgICBkYXlqcyhkYXRlKS5pc0FmdGVyKG1hdGNoZWRUaW1lem9uZS5kc3RTdGFydChkYXRlLmdldEZ1bGxZZWFyKCkpKSAmJlxuICAgICAgICAhZGF5anMoZGF0ZSkuaXNBZnRlcihtYXRjaGVkVGltZXpvbmUuZHN0RW5kKGRhdGUuZ2V0RnVsbFllYXIoKSkpXG4gICAgKSB7XG4gICAgICAgIHJldHVybiBtYXRjaGVkVGltZXpvbmUudGltZXpvbmVPZmZzZXREdXJpbmdEc3Q7XG4gICAgfVxuXG4gICAgLy8gcmVmRGF0ZSBpcyBub3QgZHVyaW5nIERTVCA9PiByZXR1cm4gbm9uLURTVCBvZmZzZXRcbiAgICByZXR1cm4gbWF0Y2hlZFRpbWV6b25lLnRpbWV6b25lT2Zmc2V0Tm9uRHN0O1xufVxuIiwgInR5cGUgRGljdGlvbmFyeUxpa2UgPSBzdHJpbmdbXSB8IHsgW3dvcmQ6IHN0cmluZ106IHVua25vd24gfSB8IE1hcDxzdHJpbmcsIHVua25vd24+O1xuXG5leHBvcnQgZnVuY3Rpb24gcmVwZWF0ZWRUaW1ldW5pdFBhdHRlcm4oXG4gICAgcHJlZml4OiBzdHJpbmcsXG4gICAgc2luZ2xlVGltZXVuaXRQYXR0ZXJuOiBzdHJpbmcsXG4gICAgY29ubmVjdG9yUGF0dGVybiA9IFwiXFxcXHN7MCw1fSw/XFxcXHN7MCw1fVwiXG4pOiBzdHJpbmcge1xuICAgIGNvbnN0IHNpbmdsZVRpbWV1bml0UGF0dGVybk5vQ2FwdHVyZSA9IHNpbmdsZVRpbWV1bml0UGF0dGVybi5yZXBsYWNlKC9cXCgoPyFcXD8pL2csIFwiKD86XCIpO1xuICAgIHJldHVybiBgJHtwcmVmaXh9JHtzaW5nbGVUaW1ldW5pdFBhdHRlcm5Ob0NhcHR1cmV9KD86JHtjb25uZWN0b3JQYXR0ZXJufSR7c2luZ2xlVGltZXVuaXRQYXR0ZXJuTm9DYXB0dXJlfSl7MCwxMH1gO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZXh0cmFjdFRlcm1zKGRpY3Rpb25hcnk6IERpY3Rpb25hcnlMaWtlKTogc3RyaW5nW10ge1xuICAgIGxldCBrZXlzOiBzdHJpbmdbXTtcbiAgICBpZiAoZGljdGlvbmFyeSBpbnN0YW5jZW9mIEFycmF5KSB7XG4gICAgICAgIGtleXMgPSBbLi4uZGljdGlvbmFyeV07XG4gICAgfSBlbHNlIGlmIChkaWN0aW9uYXJ5IGluc3RhbmNlb2YgTWFwKSB7XG4gICAgICAgIGtleXMgPSBBcnJheS5mcm9tKChkaWN0aW9uYXJ5IGFzIE1hcDxzdHJpbmcsIHVua25vd24+KS5rZXlzKCkpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGtleXMgPSBPYmplY3Qua2V5cyhkaWN0aW9uYXJ5KTtcbiAgICB9XG5cbiAgICByZXR1cm4ga2V5cztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG1hdGNoQW55UGF0dGVybihkaWN0aW9uYXJ5OiBEaWN0aW9uYXJ5TGlrZSk6IHN0cmluZyB7XG4gICAgLy8gVE9ETzogTW9yZSBlZmZpY2llbnQgcmVnZXggcGF0dGVybiBieSBjb25zaWRlcmluZyBkdXBsaWNhdGVkIHByZWZpeFxuXG4gICAgY29uc3Qgam9pbmVkVGVybXMgPSBleHRyYWN0VGVybXMoZGljdGlvbmFyeSlcbiAgICAgICAgLnNvcnQoKGEsIGIpID0+IGIubGVuZ3RoIC0gYS5sZW5ndGgpXG4gICAgICAgIC5qb2luKFwifFwiKVxuICAgICAgICAucmVwbGFjZSgvXFwuL2csIFwiXFxcXC5cIik7XG5cbiAgICByZXR1cm4gYCg/OiR7am9pbmVkVGVybXN9KWA7XG59XG4iLCAiaW1wb3J0IGRheWpzIGZyb20gXCJkYXlqc1wiO1xuXG4vKipcbiAqIEZpbmQgdGhlIG1vc3QgbGlrZWx5IHllYXIsIGZyb20gYSByYXcgbnVtYmVyLiBGb3IgZXhhbXBsZTpcbiAqIDE5OTcgPT4gMTk5N1xuICogOTcgPT4gMTk5N1xuICogMTIgPT4gMjAxMlxuICovXG5leHBvcnQgZnVuY3Rpb24gZmluZE1vc3RMaWtlbHlBRFllYXIoeWVhck51bWJlcjogbnVtYmVyKTogbnVtYmVyIHtcbiAgICBpZiAoeWVhck51bWJlciA8IDEwMCkge1xuICAgICAgICBpZiAoeWVhck51bWJlciA+IDUwKSB7XG4gICAgICAgICAgICB5ZWFyTnVtYmVyID0geWVhck51bWJlciArIDE5MDA7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB5ZWFyTnVtYmVyID0geWVhck51bWJlciArIDIwMDA7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4geWVhck51bWJlcjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGZpbmRZZWFyQ2xvc2VzdFRvUmVmKHJlZkRhdGU6IERhdGUsIGRheTogbnVtYmVyLCBtb250aDogbnVtYmVyKTogbnVtYmVyIHtcbiAgICAvL0ZpbmQgdGhlIG1vc3QgYXBwcm9wcmlhdGVkIHllYXJcbiAgICBjb25zdCByZWZNb21lbnQgPSBkYXlqcyhyZWZEYXRlKTtcbiAgICBsZXQgZGF0ZU1vbWVudCA9IHJlZk1vbWVudDtcbiAgICBkYXRlTW9tZW50ID0gZGF0ZU1vbWVudC5tb250aChtb250aCAtIDEpO1xuICAgIGRhdGVNb21lbnQgPSBkYXRlTW9tZW50LmRhdGUoZGF5KTtcbiAgICBkYXRlTW9tZW50ID0gZGF0ZU1vbWVudC55ZWFyKHJlZk1vbWVudC55ZWFyKCkpO1xuXG4gICAgY29uc3QgbmV4dFllYXIgPSBkYXRlTW9tZW50LmFkZCgxLCBcInlcIik7XG4gICAgY29uc3QgbGFzdFllYXIgPSBkYXRlTW9tZW50LmFkZCgtMSwgXCJ5XCIpO1xuICAgIGlmIChNYXRoLmFicyhuZXh0WWVhci5kaWZmKHJlZk1vbWVudCkpIDwgTWF0aC5hYnMoZGF0ZU1vbWVudC5kaWZmKHJlZk1vbWVudCkpKSB7XG4gICAgICAgIGRhdGVNb21lbnQgPSBuZXh0WWVhcjtcbiAgICB9IGVsc2UgaWYgKE1hdGguYWJzKGxhc3RZZWFyLmRpZmYocmVmTW9tZW50KSkgPCBNYXRoLmFicyhkYXRlTW9tZW50LmRpZmYocmVmTW9tZW50KSkpIHtcbiAgICAgICAgZGF0ZU1vbWVudCA9IGxhc3RZZWFyO1xuICAgIH1cblxuICAgIHJldHVybiBkYXRlTW9tZW50LnllYXIoKTtcbn1cbiIsICJpbXBvcnQgeyBPcFVuaXRUeXBlLCBRVW5pdFR5cGUgfSBmcm9tIFwiZGF5anNcIjtcbmltcG9ydCB7IG1hdGNoQW55UGF0dGVybiwgcmVwZWF0ZWRUaW1ldW5pdFBhdHRlcm4gfSBmcm9tIFwiLi4vLi4vdXRpbHMvcGF0dGVyblwiO1xuaW1wb3J0IHsgZmluZE1vc3RMaWtlbHlBRFllYXIgfSBmcm9tIFwiLi4vLi4vY2FsY3VsYXRpb24veWVhcnNcIjtcbmltcG9ydCB7IFRpbWVVbml0cyB9IGZyb20gXCIuLi8uLi91dGlscy90aW1ldW5pdHNcIjtcbmltcG9ydCB7IFdlZWtkYXkgfSBmcm9tIFwiLi4vLi4vdHlwZXNcIjtcblxuZXhwb3J0IGNvbnN0IFdFRUtEQVlfRElDVElPTkFSWTogeyBbd29yZDogc3RyaW5nXTogV2Vla2RheSB9ID0ge1xuICAgIHN1bmRheTogMCxcbiAgICBzdW46IDAsXG4gICAgXCJzdW4uXCI6IDAsXG4gICAgbW9uZGF5OiAxLFxuICAgIG1vbjogMSxcbiAgICBcIm1vbi5cIjogMSxcbiAgICB0dWVzZGF5OiAyLFxuICAgIHR1ZTogMixcbiAgICBcInR1ZS5cIjogMixcbiAgICB3ZWRuZXNkYXk6IDMsXG4gICAgd2VkOiAzLFxuICAgIFwid2VkLlwiOiAzLFxuICAgIHRodXJzZGF5OiA0LFxuICAgIHRodXJzOiA0LFxuICAgIFwidGh1cnMuXCI6IDQsXG4gICAgdGh1cjogNCxcbiAgICBcInRodXIuXCI6IDQsXG4gICAgdGh1OiA0LFxuICAgIFwidGh1LlwiOiA0LFxuICAgIGZyaWRheTogNSxcbiAgICBmcmk6IDUsXG4gICAgXCJmcmkuXCI6IDUsXG4gICAgc2F0dXJkYXk6IDYsXG4gICAgc2F0OiA2LFxuICAgIFwic2F0LlwiOiA2LFxufTtcblxuZXhwb3J0IGNvbnN0IEZVTExfTU9OVEhfTkFNRV9ESUNUSU9OQVJZOiB7IFt3b3JkOiBzdHJpbmddOiBudW1iZXIgfSA9IHtcbiAgICBqYW51YXJ5OiAxLFxuICAgIGZlYnJ1YXJ5OiAyLFxuICAgIG1hcmNoOiAzLFxuICAgIGFwcmlsOiA0LFxuICAgIG1heTogNSxcbiAgICBqdW5lOiA2LFxuICAgIGp1bHk6IDcsXG4gICAgYXVndXN0OiA4LFxuICAgIHNlcHRlbWJlcjogOSxcbiAgICBvY3RvYmVyOiAxMCxcbiAgICBub3ZlbWJlcjogMTEsXG4gICAgZGVjZW1iZXI6IDEyLFxufTtcblxuZXhwb3J0IGNvbnN0IE1PTlRIX0RJQ1RJT05BUlk6IHsgW3dvcmQ6IHN0cmluZ106IG51bWJlciB9ID0ge1xuICAgIC4uLkZVTExfTU9OVEhfTkFNRV9ESUNUSU9OQVJZLFxuICAgIGphbjogMSxcbiAgICBcImphbi5cIjogMSxcbiAgICBmZWI6IDIsXG4gICAgXCJmZWIuXCI6IDIsXG4gICAgbWFyOiAzLFxuICAgIFwibWFyLlwiOiAzLFxuICAgIGFwcjogNCxcbiAgICBcImFwci5cIjogNCxcbiAgICBqdW46IDYsXG4gICAgXCJqdW4uXCI6IDYsXG4gICAganVsOiA3LFxuICAgIFwianVsLlwiOiA3LFxuICAgIGF1ZzogOCxcbiAgICBcImF1Zy5cIjogOCxcbiAgICBzZXA6IDksXG4gICAgXCJzZXAuXCI6IDksXG4gICAgc2VwdDogOSxcbiAgICBcInNlcHQuXCI6IDksXG4gICAgb2N0OiAxMCxcbiAgICBcIm9jdC5cIjogMTAsXG4gICAgbm92OiAxMSxcbiAgICBcIm5vdi5cIjogMTEsXG4gICAgZGVjOiAxMixcbiAgICBcImRlYy5cIjogMTIsXG59O1xuXG5leHBvcnQgY29uc3QgSU5URUdFUl9XT1JEX0RJQ1RJT05BUlk6IHsgW3dvcmQ6IHN0cmluZ106IG51bWJlciB9ID0ge1xuICAgIG9uZTogMSxcbiAgICB0d286IDIsXG4gICAgdGhyZWU6IDMsXG4gICAgZm91cjogNCxcbiAgICBmaXZlOiA1LFxuICAgIHNpeDogNixcbiAgICBzZXZlbjogNyxcbiAgICBlaWdodDogOCxcbiAgICBuaW5lOiA5LFxuICAgIHRlbjogMTAsXG4gICAgZWxldmVuOiAxMSxcbiAgICB0d2VsdmU6IDEyLFxufTtcblxuZXhwb3J0IGNvbnN0IE9SRElOQUxfV09SRF9ESUNUSU9OQVJZOiB7IFt3b3JkOiBzdHJpbmddOiBudW1iZXIgfSA9IHtcbiAgICBmaXJzdDogMSxcbiAgICBzZWNvbmQ6IDIsXG4gICAgdGhpcmQ6IDMsXG4gICAgZm91cnRoOiA0LFxuICAgIGZpZnRoOiA1LFxuICAgIHNpeHRoOiA2LFxuICAgIHNldmVudGg6IDcsXG4gICAgZWlnaHRoOiA4LFxuICAgIG5pbnRoOiA5LFxuICAgIHRlbnRoOiAxMCxcbiAgICBlbGV2ZW50aDogMTEsXG4gICAgdHdlbGZ0aDogMTIsXG4gICAgdGhpcnRlZW50aDogMTMsXG4gICAgZm91cnRlZW50aDogMTQsXG4gICAgZmlmdGVlbnRoOiAxNSxcbiAgICBzaXh0ZWVudGg6IDE2LFxuICAgIHNldmVudGVlbnRoOiAxNyxcbiAgICBlaWdodGVlbnRoOiAxOCxcbiAgICBuaW5ldGVlbnRoOiAxOSxcbiAgICB0d2VudGlldGg6IDIwLFxuICAgIFwidHdlbnR5IGZpcnN0XCI6IDIxLFxuICAgIFwidHdlbnR5LWZpcnN0XCI6IDIxLFxuICAgIFwidHdlbnR5IHNlY29uZFwiOiAyMixcbiAgICBcInR3ZW50eS1zZWNvbmRcIjogMjIsXG4gICAgXCJ0d2VudHkgdGhpcmRcIjogMjMsXG4gICAgXCJ0d2VudHktdGhpcmRcIjogMjMsXG4gICAgXCJ0d2VudHkgZm91cnRoXCI6IDI0LFxuICAgIFwidHdlbnR5LWZvdXJ0aFwiOiAyNCxcbiAgICBcInR3ZW50eSBmaWZ0aFwiOiAyNSxcbiAgICBcInR3ZW50eS1maWZ0aFwiOiAyNSxcbiAgICBcInR3ZW50eSBzaXh0aFwiOiAyNixcbiAgICBcInR3ZW50eS1zaXh0aFwiOiAyNixcbiAgICBcInR3ZW50eSBzZXZlbnRoXCI6IDI3LFxuICAgIFwidHdlbnR5LXNldmVudGhcIjogMjcsXG4gICAgXCJ0d2VudHkgZWlnaHRoXCI6IDI4LFxuICAgIFwidHdlbnR5LWVpZ2h0aFwiOiAyOCxcbiAgICBcInR3ZW50eSBuaW50aFwiOiAyOSxcbiAgICBcInR3ZW50eS1uaW50aFwiOiAyOSxcbiAgICBcInRoaXJ0aWV0aFwiOiAzMCxcbiAgICBcInRoaXJ0eSBmaXJzdFwiOiAzMSxcbiAgICBcInRoaXJ0eS1maXJzdFwiOiAzMSxcbn07XG5cbmV4cG9ydCBjb25zdCBUSU1FX1VOSVRfRElDVElPTkFSWV9OT19BQkJSOiB7IFt3b3JkOiBzdHJpbmddOiBPcFVuaXRUeXBlIHwgUVVuaXRUeXBlIH0gPSB7XG4gICAgc2Vjb25kOiBcInNlY29uZFwiLFxuICAgIHNlY29uZHM6IFwic2Vjb25kXCIsXG4gICAgbWludXRlOiBcIm1pbnV0ZVwiLFxuICAgIG1pbnV0ZXM6IFwibWludXRlXCIsXG4gICAgaG91cjogXCJob3VyXCIsXG4gICAgaG91cnM6IFwiaG91clwiLFxuICAgIGRheTogXCJkXCIsXG4gICAgZGF5czogXCJkXCIsXG4gICAgd2VlazogXCJ3ZWVrXCIsXG4gICAgd2Vla3M6IFwid2Vla1wiLFxuICAgIG1vbnRoOiBcIm1vbnRoXCIsXG4gICAgbW9udGhzOiBcIm1vbnRoXCIsXG4gICAgcXVhcnRlcjogXCJxdWFydGVyXCIsXG4gICAgcXVhcnRlcnM6IFwicXVhcnRlclwiLFxuICAgIHllYXI6IFwieWVhclwiLFxuICAgIHllYXJzOiBcInllYXJcIixcbn07XG5cbmV4cG9ydCBjb25zdCBUSU1FX1VOSVRfRElDVElPTkFSWTogeyBbd29yZDogc3RyaW5nXTogT3BVbml0VHlwZSB8IFFVbml0VHlwZSB9ID0ge1xuICAgIHM6IFwic2Vjb25kXCIsXG4gICAgc2VjOiBcInNlY29uZFwiLFxuICAgIHNlY29uZDogXCJzZWNvbmRcIixcbiAgICBzZWNvbmRzOiBcInNlY29uZFwiLFxuICAgIG06IFwibWludXRlXCIsXG4gICAgbWluOiBcIm1pbnV0ZVwiLFxuICAgIG1pbnM6IFwibWludXRlXCIsXG4gICAgbWludXRlOiBcIm1pbnV0ZVwiLFxuICAgIG1pbnV0ZXM6IFwibWludXRlXCIsXG4gICAgaDogXCJob3VyXCIsXG4gICAgaHI6IFwiaG91clwiLFxuICAgIGhyczogXCJob3VyXCIsXG4gICAgaG91cjogXCJob3VyXCIsXG4gICAgaG91cnM6IFwiaG91clwiLFxuICAgIGQ6IFwiZFwiLFxuICAgIGRheTogXCJkXCIsXG4gICAgZGF5czogXCJkXCIsXG4gICAgdzogXCJ3XCIsXG4gICAgd2VlazogXCJ3ZWVrXCIsXG4gICAgd2Vla3M6IFwid2Vla1wiLFxuICAgIG1vOiBcIm1vbnRoXCIsXG4gICAgbW9uOiBcIm1vbnRoXCIsXG4gICAgbW9zOiBcIm1vbnRoXCIsXG4gICAgbW9udGg6IFwibW9udGhcIixcbiAgICBtb250aHM6IFwibW9udGhcIixcbiAgICBxdHI6IFwicXVhcnRlclwiLFxuICAgIHF1YXJ0ZXI6IFwicXVhcnRlclwiLFxuICAgIHF1YXJ0ZXJzOiBcInF1YXJ0ZXJcIixcbiAgICB5OiBcInllYXJcIixcbiAgICB5cjogXCJ5ZWFyXCIsXG4gICAgeWVhcjogXCJ5ZWFyXCIsXG4gICAgeWVhcnM6IFwieWVhclwiLFxuICAgIC8vIEFsc28sIG1lcmdlIHRoZSBlbnRyaWVzIGZyb20gdGhlIGZ1bGwtbmFtZSBkaWN0aW9uYXJ5LlxuICAgIC8vIFdlIGxlYXZlIHRoZSBkdXBsaWNhdGVkIGVudHJpZXMgZm9yIHJlYWRhYmlsaXR5LlxuICAgIC4uLlRJTUVfVU5JVF9ESUNUSU9OQVJZX05PX0FCQlIsXG59O1xuXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbmV4cG9ydCBjb25zdCBOVU1CRVJfUEFUVEVSTiA9IGAoPzoke21hdGNoQW55UGF0dGVybihcbiAgICBJTlRFR0VSX1dPUkRfRElDVElPTkFSWVxuKX18WzAtOV0rfFswLTldK1xcXFwuWzAtOV0rfGhhbGYoPzpcXFxcc3swLDJ9YW4/KT98YW4/XFxcXGIoPzpcXFxcc3swLDJ9ZmV3KT98ZmV3fHNldmVyYWx8dGhlfGE/XFxcXHN7MCwyfWNvdXBsZVxcXFxzezAsMn0oPzpvZik/KWA7XG5cbmV4cG9ydCBmdW5jdGlvbiBwYXJzZU51bWJlclBhdHRlcm4obWF0Y2g6IHN0cmluZyk6IG51bWJlciB7XG4gICAgY29uc3QgbnVtID0gbWF0Y2gudG9Mb3dlckNhc2UoKTtcbiAgICBpZiAoSU5URUdFUl9XT1JEX0RJQ1RJT05BUllbbnVtXSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHJldHVybiBJTlRFR0VSX1dPUkRfRElDVElPTkFSWVtudW1dO1xuICAgIH0gZWxzZSBpZiAobnVtID09PSBcImFcIiB8fCBudW0gPT09IFwiYW5cIiB8fCBudW0gPT0gXCJ0aGVcIikge1xuICAgICAgICByZXR1cm4gMTtcbiAgICB9IGVsc2UgaWYgKG51bS5tYXRjaCgvZmV3LykpIHtcbiAgICAgICAgcmV0dXJuIDM7XG4gICAgfSBlbHNlIGlmIChudW0ubWF0Y2goL2hhbGYvKSkge1xuICAgICAgICByZXR1cm4gMC41O1xuICAgIH0gZWxzZSBpZiAobnVtLm1hdGNoKC9jb3VwbGUvKSkge1xuICAgICAgICByZXR1cm4gMjtcbiAgICB9IGVsc2UgaWYgKG51bS5tYXRjaCgvc2V2ZXJhbC8pKSB7XG4gICAgICAgIHJldHVybiA3O1xuICAgIH1cblxuICAgIHJldHVybiBwYXJzZUZsb2F0KG51bSk7XG59XG5cbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuZXhwb3J0IGNvbnN0IE9SRElOQUxfTlVNQkVSX1BBVFRFUk4gPSBgKD86JHttYXRjaEFueVBhdHRlcm4oT1JESU5BTF9XT1JEX0RJQ1RJT05BUlkpfXxbMC05XXsxLDJ9KD86c3R8bmR8cmR8dGgpPylgO1xuZXhwb3J0IGZ1bmN0aW9uIHBhcnNlT3JkaW5hbE51bWJlclBhdHRlcm4obWF0Y2g6IHN0cmluZyk6IG51bWJlciB7XG4gICAgbGV0IG51bSA9IG1hdGNoLnRvTG93ZXJDYXNlKCk7XG4gICAgaWYgKE9SRElOQUxfV09SRF9ESUNUSU9OQVJZW251bV0gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICByZXR1cm4gT1JESU5BTF9XT1JEX0RJQ1RJT05BUllbbnVtXTtcbiAgICB9XG5cbiAgICBudW0gPSBudW0ucmVwbGFjZSgvKD86c3R8bmR8cmR8dGgpJC9pLCBcIlwiKTtcbiAgICByZXR1cm4gcGFyc2VJbnQobnVtKTtcbn1cblxuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG5leHBvcnQgY29uc3QgWUVBUl9QQVRURVJOID0gYCg/OlsxLTldWzAtOV17MCwzfVxcXFxzezAsMn0oPzpCRXxBRHxCQ3xCQ0V8Q0UpfFsxLTJdWzAtOV17M318WzUtOV1bMC05XXwyWzAtNV0pYDtcbmV4cG9ydCBmdW5jdGlvbiBwYXJzZVllYXIobWF0Y2g6IHN0cmluZyk6IG51bWJlciB7XG4gICAgaWYgKC9CRS9pLnRlc3QobWF0Y2gpKSB7XG4gICAgICAgIC8vIEJ1ZGRoaXN0IEVyYVxuICAgICAgICBtYXRjaCA9IG1hdGNoLnJlcGxhY2UoL0JFL2ksIFwiXCIpO1xuICAgICAgICByZXR1cm4gcGFyc2VJbnQobWF0Y2gpIC0gNTQzO1xuICAgIH1cblxuICAgIGlmICgvQkNFPy9pLnRlc3QobWF0Y2gpKSB7XG4gICAgICAgIC8vIEJlZm9yZSBDaHJpc3QsIEJlZm9yZSBDb21tb24gRXJhXG4gICAgICAgIG1hdGNoID0gbWF0Y2gucmVwbGFjZSgvQkNFPy9pLCBcIlwiKTtcbiAgICAgICAgcmV0dXJuIC1wYXJzZUludChtYXRjaCk7XG4gICAgfVxuXG4gICAgaWYgKC8oQUR8Q0UpL2kudGVzdChtYXRjaCkpIHtcbiAgICAgICAgLy8gQW5ubyBEb21pbmksIENvbW1vbiBFcmFcbiAgICAgICAgbWF0Y2ggPSBtYXRjaC5yZXBsYWNlKC8oQUR8Q0UpL2ksIFwiXCIpO1xuICAgICAgICByZXR1cm4gcGFyc2VJbnQobWF0Y2gpO1xuICAgIH1cblxuICAgIGNvbnN0IHJhd1llYXJOdW1iZXIgPSBwYXJzZUludChtYXRjaCk7XG4gICAgcmV0dXJuIGZpbmRNb3N0TGlrZWx5QURZZWFyKHJhd1llYXJOdW1iZXIpO1xufVxuXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbmNvbnN0IFNJTkdMRV9USU1FX1VOSVRfUEFUVEVSTiA9IGAoJHtOVU1CRVJfUEFUVEVSTn0pXFxcXHN7MCwzfSgke21hdGNoQW55UGF0dGVybihUSU1FX1VOSVRfRElDVElPTkFSWSl9KWA7XG5jb25zdCBTSU5HTEVfVElNRV9VTklUX1JFR0VYID0gbmV3IFJlZ0V4cChTSU5HTEVfVElNRV9VTklUX1BBVFRFUk4sIFwiaVwiKTtcblxuY29uc3QgU0lOR0xFX1RJTUVfVU5JVF9OT19BQkJSX1BBVFRFUk4gPSBgKCR7TlVNQkVSX1BBVFRFUk59KVxcXFxzezAsM30oJHttYXRjaEFueVBhdHRlcm4oXG4gICAgVElNRV9VTklUX0RJQ1RJT05BUllfTk9fQUJCUlxuKX0pYDtcblxuY29uc3QgVElNRV9VTklUX0NPTk5FQ1RPUl9QQVRURVJOID0gYFxcXFxzezAsNX0sPyg/OlxcXFxzKmFuZCk/XFxcXHN7MCw1fWA7XG5cbmV4cG9ydCBjb25zdCBUSU1FX1VOSVRTX1BBVFRFUk4gPSByZXBlYXRlZFRpbWV1bml0UGF0dGVybihcbiAgICBgKD86KD86YWJvdXR8YXJvdW5kKVxcXFxzezAsM30pP2AsXG4gICAgU0lOR0xFX1RJTUVfVU5JVF9QQVRURVJOLFxuICAgIFRJTUVfVU5JVF9DT05ORUNUT1JfUEFUVEVSTlxuKTtcbmV4cG9ydCBjb25zdCBUSU1FX1VOSVRTX05PX0FCQlJfUEFUVEVSTiA9IHJlcGVhdGVkVGltZXVuaXRQYXR0ZXJuKFxuICAgIGAoPzooPzphYm91dHxhcm91bmQpXFxcXHN7MCwzfSk/YCxcbiAgICBTSU5HTEVfVElNRV9VTklUX05PX0FCQlJfUEFUVEVSTixcbiAgICBUSU1FX1VOSVRfQ09OTkVDVE9SX1BBVFRFUk5cbik7XG5cbmV4cG9ydCBmdW5jdGlvbiBwYXJzZVRpbWVVbml0cyh0aW1ldW5pdFRleHQpOiBudWxsIHwgVGltZVVuaXRzIHtcbiAgICBjb25zdCBmcmFnbWVudHMgPSB7fTtcbiAgICBsZXQgcmVtYWluaW5nVGV4dCA9IHRpbWV1bml0VGV4dDtcbiAgICBsZXQgbWF0Y2ggPSBTSU5HTEVfVElNRV9VTklUX1JFR0VYLmV4ZWMocmVtYWluaW5nVGV4dCk7XG4gICAgd2hpbGUgKG1hdGNoKSB7XG4gICAgICAgIGNvbGxlY3REYXRlVGltZUZyYWdtZW50KGZyYWdtZW50cywgbWF0Y2gpO1xuICAgICAgICByZW1haW5pbmdUZXh0ID0gcmVtYWluaW5nVGV4dC5zdWJzdHJpbmcobWF0Y2hbMF0ubGVuZ3RoKS50cmltKCk7XG4gICAgICAgIG1hdGNoID0gU0lOR0xFX1RJTUVfVU5JVF9SRUdFWC5leGVjKHJlbWFpbmluZ1RleHQpO1xuICAgIH1cbiAgICBpZiAoT2JqZWN0LmtleXMoZnJhZ21lbnRzKS5sZW5ndGggPT0gMCkge1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgcmV0dXJuIGZyYWdtZW50cztcbn1cblxuZnVuY3Rpb24gY29sbGVjdERhdGVUaW1lRnJhZ21lbnQoZnJhZ21lbnRzLCBtYXRjaCkge1xuICAgIGlmIChtYXRjaFswXS5tYXRjaCgvXlthLXpBLVpdKyQvKSkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IG51bSA9IHBhcnNlTnVtYmVyUGF0dGVybihtYXRjaFsxXSk7XG4gICAgY29uc3QgdW5pdCA9IFRJTUVfVU5JVF9ESUNUSU9OQVJZW21hdGNoWzJdLnRvTG93ZXJDYXNlKCldO1xuICAgIGZyYWdtZW50c1t1bml0XSA9IG51bTtcbn1cbiIsICJpbXBvcnQgeyBQYXJzZXIsIFBhcnNpbmdDb250ZXh0IH0gZnJvbSBcIi4uLy4uL2Nocm9ub1wiO1xuaW1wb3J0IHsgUGFyc2luZ0NvbXBvbmVudHMsIFBhcnNpbmdSZXN1bHQgfSBmcm9tIFwiLi4vLi4vcmVzdWx0c1wiO1xuaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSBcIi4uLy4uL3R5cGVzXCI7XG5cbi8qKlxuICogQSBwYXJzZXIgdGhhdCBjaGVja3MgZm9yIHdvcmQgYm91bmRhcnkgYW5kIGFwcGx5aW5nIHRoZSBpbm5lciBwYXR0ZXJuIGFuZCBleHRyYWN0aW9uLlxuICovXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgQWJzdHJhY3RQYXJzZXJXaXRoV29yZEJvdW5kYXJ5Q2hlY2tpbmcgaW1wbGVtZW50cyBQYXJzZXIge1xuICAgIGFic3RyYWN0IGlubmVyUGF0dGVybihjb250ZXh0OiBQYXJzaW5nQ29udGV4dCk6IFJlZ0V4cDtcbiAgICBhYnN0cmFjdCBpbm5lckV4dHJhY3QoXG4gICAgICAgIGNvbnRleHQ6IFBhcnNpbmdDb250ZXh0LFxuICAgICAgICBtYXRjaDogUmVnRXhwTWF0Y2hBcnJheVxuICAgICk6IFBhcnNpbmdDb21wb25lbnRzIHwgUGFyc2luZ1Jlc3VsdCB8IHsgW2MgaW4gQ29tcG9uZW50XT86IG51bWJlciB9IHwgbnVsbDtcblxuICAgIC8vIE92ZXJyaWRlcyB0aGlzIG1ldGhvZCBpZiB0aGVyZSBpcyBtb3JlIGVmZmljaWVudCB3YXkgdG8gY2hlY2sgZm9yIGlubmVyIHBhdHRlcm4gY2hhbmdlLlxuICAgIGlubmVyUGF0dGVybkhhc0NoYW5nZShjb250ZXh0OiBQYXJzaW5nQ29udGV4dCwgY3VycmVudElubmVyUGF0dGVybjogUmVnRXhwKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiB0aGlzLmlubmVyUGF0dGVybihjb250ZXh0KSAhPT0gY3VycmVudElubmVyUGF0dGVybjtcbiAgICB9XG5cbiAgICBwYXR0ZXJuTGVmdEJvdW5kYXJ5KCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiBgKFxcXFxXfF4pYDtcbiAgICB9XG5cbiAgICBwcml2YXRlIGNhY2hlZElubmVyUGF0dGVybj86IFJlZ0V4cCA9IG51bGw7XG4gICAgcHJpdmF0ZSBjYWNoZWRQYXR0ZXJuPzogUmVnRXhwID0gbnVsbDtcblxuICAgIHBhdHRlcm4oY29udGV4dDogUGFyc2luZ0NvbnRleHQpOiBSZWdFeHAge1xuICAgICAgICBpZiAodGhpcy5jYWNoZWRJbm5lclBhdHRlcm4pIHtcbiAgICAgICAgICAgIGlmICghdGhpcy5pbm5lclBhdHRlcm5IYXNDaGFuZ2UoY29udGV4dCwgdGhpcy5jYWNoZWRJbm5lclBhdHRlcm4pKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuY2FjaGVkUGF0dGVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB0aGlzLmNhY2hlZElubmVyUGF0dGVybiA9IHRoaXMuaW5uZXJQYXR0ZXJuKGNvbnRleHQpO1xuICAgICAgICB0aGlzLmNhY2hlZFBhdHRlcm4gPSBuZXcgUmVnRXhwKFxuICAgICAgICAgICAgYCR7dGhpcy5wYXR0ZXJuTGVmdEJvdW5kYXJ5KCl9JHt0aGlzLmNhY2hlZElubmVyUGF0dGVybi5zb3VyY2V9YCxcbiAgICAgICAgICAgIHRoaXMuY2FjaGVkSW5uZXJQYXR0ZXJuLmZsYWdzXG4gICAgICAgICk7XG4gICAgICAgIHJldHVybiB0aGlzLmNhY2hlZFBhdHRlcm47XG4gICAgfVxuXG4gICAgZXh0cmFjdChjb250ZXh0OiBQYXJzaW5nQ29udGV4dCwgbWF0Y2g6IFJlZ0V4cE1hdGNoQXJyYXkpIHtcbiAgICAgICAgY29uc3QgaGVhZGVyID0gbWF0Y2hbMV0gPz8gXCJcIjtcbiAgICAgICAgbWF0Y2guaW5kZXggPSBtYXRjaC5pbmRleCArIGhlYWRlci5sZW5ndGg7XG4gICAgICAgIG1hdGNoWzBdID0gbWF0Y2hbMF0uc3Vic3RyaW5nKGhlYWRlci5sZW5ndGgpO1xuICAgICAgICBmb3IgKGxldCBpID0gMjsgaSA8IG1hdGNoLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBtYXRjaFtpIC0gMV0gPSBtYXRjaFtpXTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0aGlzLmlubmVyRXh0cmFjdChjb250ZXh0LCBtYXRjaCk7XG4gICAgfVxufVxuIiwgImltcG9ydCB7IFRJTUVfVU5JVFNfUEFUVEVSTiwgcGFyc2VUaW1lVW5pdHMsIFRJTUVfVU5JVFNfTk9fQUJCUl9QQVRURVJOIH0gZnJvbSBcIi4uL2NvbnN0YW50c1wiO1xuaW1wb3J0IHsgUGFyc2luZ0NvbnRleHQgfSBmcm9tIFwiLi4vLi4vLi4vY2hyb25vXCI7XG5pbXBvcnQgeyBQYXJzaW5nQ29tcG9uZW50cyB9IGZyb20gXCIuLi8uLi8uLi9yZXN1bHRzXCI7XG5pbXBvcnQgeyBBYnN0cmFjdFBhcnNlcldpdGhXb3JkQm91bmRhcnlDaGVja2luZyB9IGZyb20gXCIuLi8uLi8uLi9jb21tb24vcGFyc2Vycy9BYnN0cmFjdFBhcnNlcldpdGhXb3JkQm91bmRhcnlcIjtcblxuY29uc3QgUEFUVEVSTl9XSVRIX09QVElPTkFMX1BSRUZJWCA9IG5ldyBSZWdFeHAoXG4gICAgYCg/Oig/OndpdGhpbnxpbnxmb3IpXFxcXHMqKT9gICtcbiAgICAgICAgYCg/Oig/OmFib3V0fGFyb3VuZHxyb3VnaGx5fGFwcHJveGltYXRlbHl8anVzdClcXFxccyooPzp+XFxcXHMqKT8pPygke1RJTUVfVU5JVFNfUEFUVEVSTn0pKD89XFxcXFd8JClgLFxuICAgIFwiaVwiXG4pO1xuXG5jb25zdCBQQVRURVJOX1dJVEhfUFJFRklYID0gbmV3IFJlZ0V4cChcbiAgICBgKD86d2l0aGlufGlufGZvcilcXFxccypgICtcbiAgICAgICAgYCg/Oig/OmFib3V0fGFyb3VuZHxyb3VnaGx5fGFwcHJveGltYXRlbHl8anVzdClcXFxccyooPzp+XFxcXHMqKT8pPygke1RJTUVfVU5JVFNfUEFUVEVSTn0pKD89XFxcXFd8JClgLFxuICAgIFwiaVwiXG4pO1xuXG5jb25zdCBQQVRURVJOX1dJVEhfUFJFRklYX1NUUklDVCA9IG5ldyBSZWdFeHAoXG4gICAgYCg/OndpdGhpbnxpbnxmb3IpXFxcXHMqYCArXG4gICAgICAgIGAoPzooPzphYm91dHxhcm91bmR8cm91Z2hseXxhcHByb3hpbWF0ZWx5fGp1c3QpXFxcXHMqKD86flxcXFxzKik/KT8oJHtUSU1FX1VOSVRTX05PX0FCQlJfUEFUVEVSTn0pKD89XFxcXFd8JClgLFxuICAgIFwiaVwiXG4pO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBFTlRpbWVVbml0V2l0aGluRm9ybWF0UGFyc2VyIGV4dGVuZHMgQWJzdHJhY3RQYXJzZXJXaXRoV29yZEJvdW5kYXJ5Q2hlY2tpbmcge1xuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgc3RyaWN0TW9kZTogYm9vbGVhbikge1xuICAgICAgICBzdXBlcigpO1xuICAgIH1cblxuICAgIGlubmVyUGF0dGVybihjb250ZXh0OiBQYXJzaW5nQ29udGV4dCk6IFJlZ0V4cCB7XG4gICAgICAgIGlmICh0aGlzLnN0cmljdE1vZGUpIHtcbiAgICAgICAgICAgIHJldHVybiBQQVRURVJOX1dJVEhfUFJFRklYX1NUUklDVDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gY29udGV4dC5vcHRpb24uZm9yd2FyZERhdGUgPyBQQVRURVJOX1dJVEhfT1BUSU9OQUxfUFJFRklYIDogUEFUVEVSTl9XSVRIX1BSRUZJWDtcbiAgICB9XG5cbiAgICBpbm5lckV4dHJhY3QoY29udGV4dDogUGFyc2luZ0NvbnRleHQsIG1hdGNoOiBSZWdFeHBNYXRjaEFycmF5KSB7XG4gICAgICAgIC8vIEV4Y2x1ZGUgXCJmb3IgdGhlIHVuaXRcIiBwaGFzZXMsIGUuZy4gXCJmb3IgdGhlIHllYXJcIlxuICAgICAgICBpZiAobWF0Y2hbMF0ubWF0Y2goL15mb3JcXHMqdGhlXFxzKlxcdysvKSkge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgdGltZVVuaXRzID0gcGFyc2VUaW1lVW5pdHMobWF0Y2hbMV0pO1xuICAgICAgICBpZiAoIXRpbWVVbml0cykge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIFBhcnNpbmdDb21wb25lbnRzLmNyZWF0ZVJlbGF0aXZlRnJvbVJlZmVyZW5jZShjb250ZXh0LnJlZmVyZW5jZSwgdGltZVVuaXRzKTtcbiAgICB9XG59XG4iLCAiaW1wb3J0IHsgUGFyc2luZ0NvbnRleHQgfSBmcm9tIFwiLi4vLi4vLi4vY2hyb25vXCI7XG5pbXBvcnQgeyBQYXJzaW5nUmVzdWx0IH0gZnJvbSBcIi4uLy4uLy4uL3Jlc3VsdHNcIjtcbmltcG9ydCB7IGZpbmRZZWFyQ2xvc2VzdFRvUmVmIH0gZnJvbSBcIi4uLy4uLy4uL2NhbGN1bGF0aW9uL3llYXJzXCI7XG5pbXBvcnQgeyBNT05USF9ESUNUSU9OQVJZIH0gZnJvbSBcIi4uL2NvbnN0YW50c1wiO1xuaW1wb3J0IHsgWUVBUl9QQVRURVJOLCBwYXJzZVllYXIgfSBmcm9tIFwiLi4vY29uc3RhbnRzXCI7XG5pbXBvcnQgeyBPUkRJTkFMX05VTUJFUl9QQVRURVJOLCBwYXJzZU9yZGluYWxOdW1iZXJQYXR0ZXJuIH0gZnJvbSBcIi4uL2NvbnN0YW50c1wiO1xuaW1wb3J0IHsgbWF0Y2hBbnlQYXR0ZXJuIH0gZnJvbSBcIi4uLy4uLy4uL3V0aWxzL3BhdHRlcm5cIjtcbmltcG9ydCB7IEFic3RyYWN0UGFyc2VyV2l0aFdvcmRCb3VuZGFyeUNoZWNraW5nIH0gZnJvbSBcIi4uLy4uLy4uL2NvbW1vbi9wYXJzZXJzL0Fic3RyYWN0UGFyc2VyV2l0aFdvcmRCb3VuZGFyeVwiO1xuXG4vLyBwcmV0dGllci1pZ25vcmVcbmNvbnN0IFBBVFRFUk4gPSBuZXcgUmVnRXhwKFxuICAgIGAoPzpvblxcXFxzezAsM30pP2AgK1xuICAgICAgICBgKCR7T1JESU5BTF9OVU1CRVJfUEFUVEVSTn0pYCArXG4gICAgICAgIGAoPzpgICtcbiAgICAgICAgICAgIGBcXFxcc3swLDN9KD86dG98XFxcXC18XFxcXFx1MjAxM3x1bnRpbHx0aHJvdWdofHRpbGwpP1xcXFxzezAsM31gICtcbiAgICAgICAgICAgIGAoJHtPUkRJTkFMX05VTUJFUl9QQVRURVJOfSlgICtcbiAgICAgICAgXCIpP1wiICtcbiAgICAgICAgYCg/Oi18L3xcXFxcc3swLDN9KD86b2YpP1xcXFxzezAsM30pYCArXG4gICAgICAgIGAoJHttYXRjaEFueVBhdHRlcm4oTU9OVEhfRElDVElPTkFSWSl9KWAgK1xuICAgICAgICBcIig/OlwiICtcbiAgICAgICAgICAgIGAoPzotfC98LD9cXFxcc3swLDN9KWAgK1xuICAgICAgICAgICAgYCgke1lFQVJfUEFUVEVSTn0oPyFcXFxcdykpYCArXG4gICAgICAgIFwiKT9cIiArXG4gICAgICAgIFwiKD89XFxcXFd8JClcIixcbiAgICBcImlcIlxuKTtcblxuY29uc3QgREFURV9HUk9VUCA9IDE7XG5jb25zdCBEQVRFX1RPX0dST1VQID0gMjtcbmNvbnN0IE1PTlRIX05BTUVfR1JPVVAgPSAzO1xuY29uc3QgWUVBUl9HUk9VUCA9IDQ7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEVOTW9udGhOYW1lTGl0dGxlRW5kaWFuUGFyc2VyIGV4dGVuZHMgQWJzdHJhY3RQYXJzZXJXaXRoV29yZEJvdW5kYXJ5Q2hlY2tpbmcge1xuICAgIGlubmVyUGF0dGVybigpOiBSZWdFeHAge1xuICAgICAgICByZXR1cm4gUEFUVEVSTjtcbiAgICB9XG5cbiAgICBpbm5lckV4dHJhY3QoY29udGV4dDogUGFyc2luZ0NvbnRleHQsIG1hdGNoOiBSZWdFeHBNYXRjaEFycmF5KTogUGFyc2luZ1Jlc3VsdCB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IGNvbnRleHQuY3JlYXRlUGFyc2luZ1Jlc3VsdChtYXRjaC5pbmRleCwgbWF0Y2hbMF0pO1xuXG4gICAgICAgIGNvbnN0IG1vbnRoID0gTU9OVEhfRElDVElPTkFSWVttYXRjaFtNT05USF9OQU1FX0dST1VQXS50b0xvd2VyQ2FzZSgpXTtcbiAgICAgICAgY29uc3QgZGF5ID0gcGFyc2VPcmRpbmFsTnVtYmVyUGF0dGVybihtYXRjaFtEQVRFX0dST1VQXSk7XG4gICAgICAgIGlmIChkYXkgPiAzMSkge1xuICAgICAgICAgICAgLy8gZS5nLiBcIls5NiBBdWddXCIgPT4gXCI5WzYgQXVnXVwiLCB3ZSBuZWVkIHRvIHNoaWZ0IGF3YXkgZnJvbSB0aGUgbmV4dCBudW1iZXJcbiAgICAgICAgICAgIG1hdGNoLmluZGV4ID0gbWF0Y2guaW5kZXggKyBtYXRjaFtEQVRFX0dST1VQXS5sZW5ndGg7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuXG4gICAgICAgIHJlc3VsdC5zdGFydC5hc3NpZ24oXCJtb250aFwiLCBtb250aCk7XG4gICAgICAgIHJlc3VsdC5zdGFydC5hc3NpZ24oXCJkYXlcIiwgZGF5KTtcblxuICAgICAgICBpZiAobWF0Y2hbWUVBUl9HUk9VUF0pIHtcbiAgICAgICAgICAgIGNvbnN0IHllYXJOdW1iZXIgPSBwYXJzZVllYXIobWF0Y2hbWUVBUl9HUk9VUF0pO1xuICAgICAgICAgICAgcmVzdWx0LnN0YXJ0LmFzc2lnbihcInllYXJcIiwgeWVhck51bWJlcik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb25zdCB5ZWFyID0gZmluZFllYXJDbG9zZXN0VG9SZWYoY29udGV4dC5yZWZEYXRlLCBkYXksIG1vbnRoKTtcbiAgICAgICAgICAgIHJlc3VsdC5zdGFydC5pbXBseShcInllYXJcIiwgeWVhcik7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAobWF0Y2hbREFURV9UT19HUk9VUF0pIHtcbiAgICAgICAgICAgIGNvbnN0IGVuZERhdGUgPSBwYXJzZU9yZGluYWxOdW1iZXJQYXR0ZXJuKG1hdGNoW0RBVEVfVE9fR1JPVVBdKTtcblxuICAgICAgICAgICAgcmVzdWx0LmVuZCA9IHJlc3VsdC5zdGFydC5jbG9uZSgpO1xuICAgICAgICAgICAgcmVzdWx0LmVuZC5hc3NpZ24oXCJkYXlcIiwgZW5kRGF0ZSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbn1cbiIsICJpbXBvcnQgeyBQYXJzaW5nQ29udGV4dCB9IGZyb20gXCIuLi8uLi8uLi9jaHJvbm9cIjtcbmltcG9ydCB7IGZpbmRZZWFyQ2xvc2VzdFRvUmVmIH0gZnJvbSBcIi4uLy4uLy4uL2NhbGN1bGF0aW9uL3llYXJzXCI7XG5pbXBvcnQgeyBNT05USF9ESUNUSU9OQVJZIH0gZnJvbSBcIi4uL2NvbnN0YW50c1wiO1xuaW1wb3J0IHsgT1JESU5BTF9OVU1CRVJfUEFUVEVSTiwgcGFyc2VPcmRpbmFsTnVtYmVyUGF0dGVybiB9IGZyb20gXCIuLi9jb25zdGFudHNcIjtcbmltcG9ydCB7IFlFQVJfUEFUVEVSTiwgcGFyc2VZZWFyIH0gZnJvbSBcIi4uL2NvbnN0YW50c1wiO1xuaW1wb3J0IHsgbWF0Y2hBbnlQYXR0ZXJuIH0gZnJvbSBcIi4uLy4uLy4uL3V0aWxzL3BhdHRlcm5cIjtcbmltcG9ydCB7IEFic3RyYWN0UGFyc2VyV2l0aFdvcmRCb3VuZGFyeUNoZWNraW5nIH0gZnJvbSBcIi4uLy4uLy4uL2NvbW1vbi9wYXJzZXJzL0Fic3RyYWN0UGFyc2VyV2l0aFdvcmRCb3VuZGFyeVwiO1xuXG4vLyBwcmV0dGllci1pZ25vcmVcbmNvbnN0IFBBVFRFUk4gPSBuZXcgUmVnRXhwKFxuICAgIGAoJHttYXRjaEFueVBhdHRlcm4oTU9OVEhfRElDVElPTkFSWSl9KWAgK1xuICAgICAgICBcIig/Oi18L3xcXFxccyosP1xcXFxzKilcIiArXG4gICAgICAgIGAoJHtPUkRJTkFMX05VTUJFUl9QQVRURVJOfSkoPyFcXFxccyooPzphbXxwbSkpXFxcXHMqYCArXG4gICAgICAgIFwiKD86XCIgK1xuICAgICAgICAgICAgXCIoPzp0b3xcXFxcLSlcXFxccypcIiArXG4gICAgICAgICAgICBgKCR7T1JESU5BTF9OVU1CRVJfUEFUVEVSTn0pXFxcXHMqYCArXG4gICAgICAgIFwiKT9cIiArXG4gICAgICAgIFwiKD86XCIgK1xuICAgICAgICAgICAgYCg/Oi18L3xcXFxccyosXFxcXHMqfFxcXFxzKylgICtcbiAgICAgICAgICAgIGAoJHtZRUFSX1BBVFRFUk59KWAgK1xuICAgICAgICBcIik/XCIgK1xuICAgICAgICBcIig/PVxcXFxXfCQpKD8hXFxcXDpcXFxcZClcIixcbiAgICBcImlcIlxuKTtcblxuY29uc3QgTU9OVEhfTkFNRV9HUk9VUCA9IDE7XG5jb25zdCBEQVRFX0dST1VQID0gMjtcbmNvbnN0IERBVEVfVE9fR1JPVVAgPSAzO1xuY29uc3QgWUVBUl9HUk9VUCA9IDQ7XG5cbi8qKlxuICogVGhlIHBhcnNlciBmb3IgcGFyc2luZyBVUydzIGRhdGUgZm9ybWF0IHRoYXQgYmVnaW4gd2l0aCBtb250aCdzIG5hbWUuXG4gKiAgLSBKYW51YXJ5IDEzXG4gKiAgLSBKYW51YXJ5IDEzLCAyMDEyXG4gKiAgLSBKYW51YXJ5IDEzIC0gMTUsIDIwMTJcbiAqIE5vdGU6IFdhdGNoIG91dCBmb3I6XG4gKiAgLSBKYW51YXJ5IDEyOjAwXG4gKiAgLSBKYW51YXJ5IDEyLjQ0XG4gKiAgLSBKYW51YXJ5IDEyMjIzNDRcbiAqICAtIEphbnVhcnkgMjEgKHdoZW4gc2hvdWxkU2tpcFllYXJMaWtlRGF0ZT10cnVlKVxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBFTk1vbnRoTmFtZU1pZGRsZUVuZGlhblBhcnNlciBleHRlbmRzIEFic3RyYWN0UGFyc2VyV2l0aFdvcmRCb3VuZGFyeUNoZWNraW5nIHtcbiAgICBzaG91bGRTa2lwWWVhckxpa2VEYXRlOiBib29sZWFuO1xuXG4gICAgY29uc3RydWN0b3Ioc2hvdWxkU2tpcFllYXJMaWtlRGF0ZTogYm9vbGVhbikge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLnNob3VsZFNraXBZZWFyTGlrZURhdGUgPSBzaG91bGRTa2lwWWVhckxpa2VEYXRlO1xuICAgIH1cblxuICAgIGlubmVyUGF0dGVybigpOiBSZWdFeHAge1xuICAgICAgICByZXR1cm4gUEFUVEVSTjtcbiAgICB9XG5cbiAgICBpbm5lckV4dHJhY3QoY29udGV4dDogUGFyc2luZ0NvbnRleHQsIG1hdGNoOiBSZWdFeHBNYXRjaEFycmF5KSB7XG4gICAgICAgIGNvbnN0IG1vbnRoID0gTU9OVEhfRElDVElPTkFSWVttYXRjaFtNT05USF9OQU1FX0dST1VQXS50b0xvd2VyQ2FzZSgpXTtcbiAgICAgICAgY29uc3QgZGF5ID0gcGFyc2VPcmRpbmFsTnVtYmVyUGF0dGVybihtYXRjaFtEQVRFX0dST1VQXSk7XG4gICAgICAgIGlmIChkYXkgPiAzMSkge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBTa2lwIHRoZSBjYXNlIHdoZXJlIHRoZSBkYXkgbG9va3MgbGlrZSBhIHllYXIgKGV4OiBKYW51YXJ5IDIxKVxuICAgICAgICBpZiAodGhpcy5zaG91bGRTa2lwWWVhckxpa2VEYXRlKSB7XG4gICAgICAgICAgICBpZiAoIW1hdGNoW0RBVEVfVE9fR1JPVVBdICYmICFtYXRjaFtZRUFSX0dST1VQXSAmJiBtYXRjaFtEQVRFX0dST1VQXS5tYXRjaCgvXjJbMC01XSQvKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGNvbXBvbmVudHMgPSBjb250ZXh0XG4gICAgICAgICAgICAuY3JlYXRlUGFyc2luZ0NvbXBvbmVudHMoe1xuICAgICAgICAgICAgICAgIGRheTogZGF5LFxuICAgICAgICAgICAgICAgIG1vbnRoOiBtb250aCxcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuYWRkVGFnKFwicGFyc2VyL0VOTW9udGhOYW1lTWlkZGxlRW5kaWFuUGFyc2VyXCIpO1xuXG4gICAgICAgIGlmIChtYXRjaFtZRUFSX0dST1VQXSkge1xuICAgICAgICAgICAgY29uc3QgeWVhciA9IHBhcnNlWWVhcihtYXRjaFtZRUFSX0dST1VQXSk7XG4gICAgICAgICAgICBjb21wb25lbnRzLmFzc2lnbihcInllYXJcIiwgeWVhcik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb25zdCB5ZWFyID0gZmluZFllYXJDbG9zZXN0VG9SZWYoY29udGV4dC5yZWZEYXRlLCBkYXksIG1vbnRoKTtcbiAgICAgICAgICAgIGNvbXBvbmVudHMuaW1wbHkoXCJ5ZWFyXCIsIHllYXIpO1xuICAgICAgICB9XG4gICAgICAgIGlmICghbWF0Y2hbREFURV9UT19HUk9VUF0pIHtcbiAgICAgICAgICAgIHJldHVybiBjb21wb25lbnRzO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gVGV4dCBjYW4gYmUgJ3JhbmdlJyB2YWx1ZS4gU3VjaCBhcyAnSmFudWFyeSAxMiAtIDEzLCAyMDEyJ1xuICAgICAgICBjb25zdCBlbmREYXRlID0gcGFyc2VPcmRpbmFsTnVtYmVyUGF0dGVybihtYXRjaFtEQVRFX1RPX0dST1VQXSk7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IGNvbnRleHQuY3JlYXRlUGFyc2luZ1Jlc3VsdChtYXRjaC5pbmRleCwgbWF0Y2hbMF0pO1xuICAgICAgICByZXN1bHQuc3RhcnQgPSBjb21wb25lbnRzO1xuICAgICAgICByZXN1bHQuZW5kID0gY29tcG9uZW50cy5jbG9uZSgpO1xuICAgICAgICByZXN1bHQuZW5kLmFzc2lnbihcImRheVwiLCBlbmREYXRlKTtcblxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbn1cbiIsICJpbXBvcnQgeyBGVUxMX01PTlRIX05BTUVfRElDVElPTkFSWSwgTU9OVEhfRElDVElPTkFSWSB9IGZyb20gXCIuLi9jb25zdGFudHNcIjtcbmltcG9ydCB7IFBhcnNpbmdDb250ZXh0IH0gZnJvbSBcIi4uLy4uLy4uL2Nocm9ub1wiO1xuaW1wb3J0IHsgZmluZFllYXJDbG9zZXN0VG9SZWYgfSBmcm9tIFwiLi4vLi4vLi4vY2FsY3VsYXRpb24veWVhcnNcIjtcbmltcG9ydCB7IG1hdGNoQW55UGF0dGVybiB9IGZyb20gXCIuLi8uLi8uLi91dGlscy9wYXR0ZXJuXCI7XG5pbXBvcnQgeyBZRUFSX1BBVFRFUk4sIHBhcnNlWWVhciB9IGZyb20gXCIuLi9jb25zdGFudHNcIjtcbmltcG9ydCB7IEFic3RyYWN0UGFyc2VyV2l0aFdvcmRCb3VuZGFyeUNoZWNraW5nIH0gZnJvbSBcIi4uLy4uLy4uL2NvbW1vbi9wYXJzZXJzL0Fic3RyYWN0UGFyc2VyV2l0aFdvcmRCb3VuZGFyeVwiO1xuXG5jb25zdCBQQVRURVJOID0gbmV3IFJlZ0V4cChcbiAgICBgKCg/OmluKVxcXFxzKik/YCArXG4gICAgICAgIGAoJHttYXRjaEFueVBhdHRlcm4oTU9OVEhfRElDVElPTkFSWSl9KWAgK1xuICAgICAgICBgXFxcXHMqYCArXG4gICAgICAgIGAoPzpgICtcbiAgICAgICAgYCg/Oix8LXxvZik/XFxcXHMqKCR7WUVBUl9QQVRURVJOfSk/YCArXG4gICAgICAgIFwiKT9cIiArXG4gICAgICAgIFwiKD89W15cXFxcc1xcXFx3XXxcXFxccytbXjAtOV18XFxcXHMrJHwkKVwiLFxuICAgIFwiaVwiXG4pO1xuXG5jb25zdCBQUkVGSVhfR1JPVVAgPSAxO1xuY29uc3QgTU9OVEhfTkFNRV9HUk9VUCA9IDI7XG5jb25zdCBZRUFSX0dST1VQID0gMztcblxuLyoqXG4gKiBUaGUgcGFyc2VyIGZvciBwYXJzaW5nIG1vbnRoIG5hbWUgYW5kIHllYXIuXG4gKiAtIEphbnVhcnksIDIwMTJcbiAqIC0gSmFudWFyeSAyMDEyXG4gKiAtIEphbnVhcnlcbiAqIChpbikgSmFuXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEVOTW9udGhOYW1lUGFyc2VyIGV4dGVuZHMgQWJzdHJhY3RQYXJzZXJXaXRoV29yZEJvdW5kYXJ5Q2hlY2tpbmcge1xuICAgIGlubmVyUGF0dGVybigpOiBSZWdFeHAge1xuICAgICAgICByZXR1cm4gUEFUVEVSTjtcbiAgICB9XG5cbiAgICBpbm5lckV4dHJhY3QoY29udGV4dDogUGFyc2luZ0NvbnRleHQsIG1hdGNoOiBSZWdFeHBNYXRjaEFycmF5KSB7XG4gICAgICAgIGNvbnN0IG1vbnRoTmFtZSA9IG1hdGNoW01PTlRIX05BTUVfR1JPVVBdLnRvTG93ZXJDYXNlKCk7XG5cbiAgICAgICAgLy8gc2tpcCBzb21lIHVubGlrZWx5IHdvcmRzIFwiamFuXCIsIFwibWFyXCIsIC4uXG4gICAgICAgIGlmIChtYXRjaFswXS5sZW5ndGggPD0gMyAmJiAhRlVMTF9NT05USF9OQU1FX0RJQ1RJT05BUllbbW9udGhOYW1lXSkge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCByZXN1bHQgPSBjb250ZXh0LmNyZWF0ZVBhcnNpbmdSZXN1bHQoXG4gICAgICAgICAgICBtYXRjaC5pbmRleCArIChtYXRjaFtQUkVGSVhfR1JPVVBdIHx8IFwiXCIpLmxlbmd0aCxcbiAgICAgICAgICAgIG1hdGNoLmluZGV4ICsgbWF0Y2hbMF0ubGVuZ3RoXG4gICAgICAgICk7XG4gICAgICAgIHJlc3VsdC5zdGFydC5pbXBseShcImRheVwiLCAxKTtcbiAgICAgICAgcmVzdWx0LnN0YXJ0LmFkZFRhZyhcInBhcnNlci9FTk1vbnRoTmFtZVBhcnNlclwiKTtcblxuICAgICAgICBjb25zdCBtb250aCA9IE1PTlRIX0RJQ1RJT05BUllbbW9udGhOYW1lXTtcbiAgICAgICAgcmVzdWx0LnN0YXJ0LmFzc2lnbihcIm1vbnRoXCIsIG1vbnRoKTtcblxuICAgICAgICBpZiAobWF0Y2hbWUVBUl9HUk9VUF0pIHtcbiAgICAgICAgICAgIGNvbnN0IHllYXIgPSBwYXJzZVllYXIobWF0Y2hbWUVBUl9HUk9VUF0pO1xuICAgICAgICAgICAgcmVzdWx0LnN0YXJ0LmFzc2lnbihcInllYXJcIiwgeWVhcik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb25zdCB5ZWFyID0gZmluZFllYXJDbG9zZXN0VG9SZWYoY29udGV4dC5yZWZEYXRlLCAxLCBtb250aCk7XG4gICAgICAgICAgICByZXN1bHQuc3RhcnQuaW1wbHkoXCJ5ZWFyXCIsIHllYXIpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG59XG4iLCAiaW1wb3J0IHsgUGFyc2luZ0NvbnRleHQgfSBmcm9tIFwiLi4vLi4vLi4vY2hyb25vXCI7XG5pbXBvcnQgeyBNT05USF9ESUNUSU9OQVJZIH0gZnJvbSBcIi4uL2NvbnN0YW50c1wiO1xuaW1wb3J0IHsgbWF0Y2hBbnlQYXR0ZXJuIH0gZnJvbSBcIi4uLy4uLy4uL3V0aWxzL3BhdHRlcm5cIjtcbmltcG9ydCB7IEFic3RyYWN0UGFyc2VyV2l0aFdvcmRCb3VuZGFyeUNoZWNraW5nIH0gZnJvbSBcIi4uLy4uLy4uL2NvbW1vbi9wYXJzZXJzL0Fic3RyYWN0UGFyc2VyV2l0aFdvcmRCb3VuZGFyeVwiO1xuXG4vKlxuICAgIERhdGUgZm9ybWF0IHdpdGggc2xhc2ggXCIvXCIgYmV0d2VlbiBudW1iZXJzIGxpa2UgRU5TbGFzaERhdGVGb3JtYXRQYXJzZXIsXG4gICAgYnV0IHRoaXMgcGFyc2VyIGV4cGVjdCB5ZWFyIGJlZm9yZSBtb250aCBhbmQgZGF0ZS5cbiAgICAtIFlZWVkvTU0vRERcbiAgICAtIFlZWVktTU0tRERcbiAgICAtIFlZWVkuTU0uRERcbiovXG5jb25zdCBQQVRURVJOID0gbmV3IFJlZ0V4cChcbiAgICBgKFswLTldezR9KVstXFxcXC5cXFxcL1xcXFxzXWAgK1xuICAgICAgICBgKD86KCR7bWF0Y2hBbnlQYXR0ZXJuKE1PTlRIX0RJQ1RJT05BUlkpfSl8KFswLTldezEsMn0pKVstXFxcXC5cXFxcL1xcXFxzXWAgK1xuICAgICAgICBgKFswLTldezEsMn0pYCArXG4gICAgICAgIFwiKD89XFxcXFd8JClcIixcbiAgICBcImlcIlxuKTtcblxuY29uc3QgWUVBUl9OVU1CRVJfR1JPVVAgPSAxO1xuY29uc3QgTU9OVEhfTkFNRV9HUk9VUCA9IDI7XG5jb25zdCBNT05USF9OVU1CRVJfR1JPVVAgPSAzO1xuY29uc3QgREFURV9OVU1CRVJfR1JPVVAgPSA0O1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBFTlllYXJNb250aERheVBhcnNlciBleHRlbmRzIEFic3RyYWN0UGFyc2VyV2l0aFdvcmRCb3VuZGFyeUNoZWNraW5nIHtcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHN0cmljdE1vbnRoRGF0ZU9yZGVyOiBib29sZWFuKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgfVxuXG4gICAgaW5uZXJQYXR0ZXJuKCk6IFJlZ0V4cCB7XG4gICAgICAgIHJldHVybiBQQVRURVJOO1xuICAgIH1cblxuICAgIGlubmVyRXh0cmFjdChjb250ZXh0OiBQYXJzaW5nQ29udGV4dCwgbWF0Y2g6IFJlZ0V4cE1hdGNoQXJyYXkpIHtcbiAgICAgICAgY29uc3QgeWVhciA9IHBhcnNlSW50KG1hdGNoW1lFQVJfTlVNQkVSX0dST1VQXSk7XG4gICAgICAgIGxldCBkYXkgPSBwYXJzZUludChtYXRjaFtEQVRFX05VTUJFUl9HUk9VUF0pO1xuICAgICAgICBsZXQgbW9udGggPSBtYXRjaFtNT05USF9OVU1CRVJfR1JPVVBdXG4gICAgICAgICAgICA/IHBhcnNlSW50KG1hdGNoW01PTlRIX05VTUJFUl9HUk9VUF0pXG4gICAgICAgICAgICA6IE1PTlRIX0RJQ1RJT05BUllbbWF0Y2hbTU9OVEhfTkFNRV9HUk9VUF0udG9Mb3dlckNhc2UoKV07XG5cbiAgICAgICAgaWYgKG1vbnRoIDwgMSB8fCBtb250aCA+IDEyKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5zdHJpY3RNb250aERhdGVPcmRlcikge1xuICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGRheSA+PSAxICYmIGRheSA8PSAxMikge1xuICAgICAgICAgICAgICAgIFttb250aCwgZGF5XSA9IFtkYXksIG1vbnRoXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAoZGF5IDwgMSB8fCBkYXkgPiAzMSkge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgZGF5OiBkYXksXG4gICAgICAgICAgICBtb250aDogbW9udGgsXG4gICAgICAgICAgICB5ZWFyOiB5ZWFyLFxuICAgICAgICB9O1xuICAgIH1cbn1cbiIsICJpbXBvcnQgeyBQYXJzaW5nQ29udGV4dCB9IGZyb20gXCIuLi8uLi8uLi9jaHJvbm9cIjtcbmltcG9ydCB7IFBhcnNpbmdDb21wb25lbnRzIH0gZnJvbSBcIi4uLy4uLy4uL3Jlc3VsdHNcIjtcbmltcG9ydCB7IEFic3RyYWN0UGFyc2VyV2l0aFdvcmRCb3VuZGFyeUNoZWNraW5nIH0gZnJvbSBcIi4uLy4uLy4uL2NvbW1vbi9wYXJzZXJzL0Fic3RyYWN0UGFyc2VyV2l0aFdvcmRCb3VuZGFyeVwiO1xuXG5jb25zdCBQQVRURVJOID0gbmV3IFJlZ0V4cChcIihbMC05XXwwWzEtOV18MVswMTJdKS8oWzAtOV17NH0pXCIgKyBcIlwiLCBcImlcIik7XG5cbmNvbnN0IE1PTlRIX0dST1VQID0gMTtcbmNvbnN0IFlFQVJfR1JPVVAgPSAyO1xuXG4vKipcbiAqIE1vbnRoL1llYXIgZGF0ZSBmb3JtYXQgd2l0aCBzbGFzaCBcIi9cIiAoYWxzbyBcIi1cIiBhbmQgXCIuXCIpIGJldHdlZW4gbnVtYmVyc1xuICogLSAxMS8wNVxuICogLSAwNi8yMDA1XG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEVOU2xhc2hNb250aEZvcm1hdFBhcnNlciBleHRlbmRzIEFic3RyYWN0UGFyc2VyV2l0aFdvcmRCb3VuZGFyeUNoZWNraW5nIHtcbiAgICBpbm5lclBhdHRlcm4oKTogUmVnRXhwIHtcbiAgICAgICAgcmV0dXJuIFBBVFRFUk47XG4gICAgfVxuXG4gICAgaW5uZXJFeHRyYWN0KGNvbnRleHQ6IFBhcnNpbmdDb250ZXh0LCBtYXRjaDogUmVnRXhwTWF0Y2hBcnJheSk6IFBhcnNpbmdDb21wb25lbnRzIHtcbiAgICAgICAgY29uc3QgeWVhciA9IHBhcnNlSW50KG1hdGNoW1lFQVJfR1JPVVBdKTtcbiAgICAgICAgY29uc3QgbW9udGggPSBwYXJzZUludChtYXRjaFtNT05USF9HUk9VUF0pO1xuXG4gICAgICAgIHJldHVybiBjb250ZXh0LmNyZWF0ZVBhcnNpbmdDb21wb25lbnRzKCkuaW1wbHkoXCJkYXlcIiwgMSkuYXNzaWduKFwibW9udGhcIiwgbW9udGgpLmFzc2lnbihcInllYXJcIiwgeWVhcik7XG4gICAgfVxufVxuIiwgImltcG9ydCB7IFBhcnNlciwgUGFyc2luZ0NvbnRleHQgfSBmcm9tIFwiLi4vLi4vY2hyb25vXCI7XG5pbXBvcnQgeyBQYXJzaW5nQ29tcG9uZW50cywgUGFyc2luZ1Jlc3VsdCB9IGZyb20gXCIuLi8uLi9yZXN1bHRzXCI7XG5pbXBvcnQgeyBNZXJpZGllbSB9IGZyb20gXCIuLi8uLi90eXBlc1wiO1xuXG4vLyBwcmV0dGllci1pZ25vcmVcbmZ1bmN0aW9uIHByaW1hcnlUaW1lUGF0dGVybihsZWZ0Qm91bmRhcnk6IHN0cmluZywgcHJpbWFyeVByZWZpeDogc3RyaW5nLCBwcmltYXJ5U3VmZml4OiBzdHJpbmcsIGZsYWdzOiBzdHJpbmcpIHtcbiAgICByZXR1cm4gbmV3IFJlZ0V4cChcbiAgICAgICAgICAgIGAke2xlZnRCb3VuZGFyeX1gICtcbiAgICAgICAgICAgIGAke3ByaW1hcnlQcmVmaXh9YCArXG4gICAgICAgICAgICBgKFxcXFxkezEsNH0pYCArXG4gICAgICAgICAgICBgKD86YCArXG4gICAgICAgICAgICAgICAgYCg/OlxcXFwufDp8XHVGRjFBKWAgK1xuICAgICAgICAgICAgICAgIGAoXFxcXGR7MSwyfSlgICtcbiAgICAgICAgICAgICAgICBgKD86YCArXG4gICAgICAgICAgICAgICAgICAgIGAoPzo6fFx1RkYxQSlgICtcbiAgICAgICAgICAgICAgICAgICAgYChcXFxcZHsyfSlgICtcbiAgICAgICAgICAgICAgICAgICAgYCg/OlxcXFwuKFxcXFxkezEsNn0pKT9gICtcbiAgICAgICAgICAgICAgICBgKT9gICtcbiAgICAgICAgICAgIGApP2AgK1xuICAgICAgICAgICAgYCg/OlxcXFxzKihhXFxcXC5tXFxcXC58cFxcXFwubVxcXFwufGFtP3xwbT8pKT9gICtcbiAgICAgICAgICAgIGAke3ByaW1hcnlTdWZmaXh9YCxcbiAgICAgICAgZmxhZ3NcbiAgICApO1xufVxuXG4vLyBwcmV0dGllci1pZ25vcmVcbmZ1bmN0aW9uIGZvbGxvd2luZ1RpbWVQYXR0ZW4oZm9sbG93aW5nUGhhc2U6IHN0cmluZywgZm9sbG93aW5nU3VmZml4OiBzdHJpbmcpIHtcbiAgICByZXR1cm4gbmV3IFJlZ0V4cChcbiAgICAgICAgYF4oJHtmb2xsb3dpbmdQaGFzZX0pYCArXG4gICAgICAgICAgICBgKFxcXFxkezEsNH0pYCArXG4gICAgICAgICAgICBgKD86YCArXG4gICAgICAgICAgICAgICAgYCg/OlxcXFwufFxcXFw6fFxcXFxcdUZGMUEpYCArXG4gICAgICAgICAgICAgICAgYChcXFxcZHsxLDJ9KWAgK1xuICAgICAgICAgICAgICAgIGAoPzpgICtcbiAgICAgICAgICAgICAgICAgICAgYCg/OlxcXFwufFxcXFw6fFxcXFxcdUZGMUEpYCArXG4gICAgICAgICAgICAgICAgICAgIGAoXFxcXGR7MSwyfSkoPzpcXFxcLihcXFxcZHsxLDZ9KSk/YCArXG4gICAgICAgICAgICAgICAgYCk/YCArXG4gICAgICAgICAgICBgKT9gICtcbiAgICAgICAgICAgIGAoPzpcXFxccyooYVxcXFwubVxcXFwufHBcXFxcLm1cXFxcLnxhbT98cG0/KSk/YCArXG4gICAgICAgICAgICBgJHtmb2xsb3dpbmdTdWZmaXh9YCxcbiAgICAgICAgXCJpXCJcbiAgICApO1xufVxuXG5jb25zdCBIT1VSX0dST1VQID0gMjtcbmNvbnN0IE1JTlVURV9HUk9VUCA9IDM7XG5jb25zdCBTRUNPTkRfR1JPVVAgPSA0O1xuY29uc3QgTUlMTElfU0VDT05EX0dST1VQID0gNTtcbmNvbnN0IEFNX1BNX0hPVVJfR1JPVVAgPSA2O1xuXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgQWJzdHJhY3RUaW1lRXhwcmVzc2lvblBhcnNlciBpbXBsZW1lbnRzIFBhcnNlciB7XG4gICAgYWJzdHJhY3QgcHJpbWFyeVByZWZpeCgpOiBzdHJpbmc7XG4gICAgYWJzdHJhY3QgZm9sbG93aW5nUGhhc2UoKTogc3RyaW5nO1xuICAgIHN0cmljdE1vZGU6IGJvb2xlYW47XG5cbiAgICBjb25zdHJ1Y3RvcihzdHJpY3RNb2RlID0gZmFsc2UpIHtcbiAgICAgICAgdGhpcy5zdHJpY3RNb2RlID0gc3RyaWN0TW9kZTtcbiAgICB9XG5cbiAgICBwYXR0ZXJuRmxhZ3MoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIFwiaVwiO1xuICAgIH1cblxuICAgIHByaW1hcnlQYXR0ZXJuTGVmdEJvdW5kYXJ5KCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiBgKF58XFxcXHN8VHxcXFxcYilgO1xuICAgIH1cblxuICAgIHByaW1hcnlTdWZmaXgoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIGAoPyEvKSg/PVxcXFxXfCQpYDtcbiAgICB9XG5cbiAgICBmb2xsb3dpbmdTdWZmaXgoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIGAoPyEvKSg/PVxcXFxXfCQpYDtcbiAgICB9XG5cbiAgICBwYXR0ZXJuKGNvbnRleHQ6IFBhcnNpbmdDb250ZXh0KTogUmVnRXhwIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0UHJpbWFyeVRpbWVQYXR0ZXJuVGhyb3VnaENhY2hlKCk7XG4gICAgfVxuXG4gICAgZXh0cmFjdChjb250ZXh0OiBQYXJzaW5nQ29udGV4dCwgbWF0Y2g6IFJlZ0V4cE1hdGNoQXJyYXkpOiBQYXJzaW5nUmVzdWx0IHtcbiAgICAgICAgY29uc3Qgc3RhcnRDb21wb25lbnRzID0gdGhpcy5leHRyYWN0UHJpbWFyeVRpbWVDb21wb25lbnRzKGNvbnRleHQsIG1hdGNoKTtcbiAgICAgICAgaWYgKCFzdGFydENvbXBvbmVudHMpIHtcbiAgICAgICAgICAgIC8vIElmIHRoZSBtYXRjaCBzZWVtIGxpa2UgYSB5ZWFyIGUuZy4gXCIyMDEzLjEyOi4uLlwiLFxuICAgICAgICAgICAgLy8gdGhlbiBza2lwcyB0aGUgeWVhciBwYXJ0IGFuZCB0cnkgbWF0Y2hpbmcgYWdhaW4uXG4gICAgICAgICAgICBpZiAobWF0Y2hbMF0ubWF0Y2goL15cXGR7NH0vKSkge1xuICAgICAgICAgICAgICAgIG1hdGNoLmluZGV4ICs9IDQ7IC8vIFNraXAgb3ZlciBwb3RlbnRpYWwgb3ZlcmxhcHBpbmcgcGF0dGVyblxuICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBtYXRjaC5pbmRleCArPSBtYXRjaFswXS5sZW5ndGg7IC8vIFNraXAgb3ZlciBwb3RlbnRpYWwgb3ZlcmxhcHBpbmcgcGF0dGVyblxuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBpbmRleCA9IG1hdGNoLmluZGV4ICsgbWF0Y2hbMV0ubGVuZ3RoO1xuICAgICAgICBjb25zdCB0ZXh0ID0gbWF0Y2hbMF0uc3Vic3RyaW5nKG1hdGNoWzFdLmxlbmd0aCk7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IGNvbnRleHQuY3JlYXRlUGFyc2luZ1Jlc3VsdChpbmRleCwgdGV4dCwgc3RhcnRDb21wb25lbnRzKTtcbiAgICAgICAgbWF0Y2guaW5kZXggKz0gbWF0Y2hbMF0ubGVuZ3RoOyAvLyBTa2lwIG92ZXIgcG90ZW50aWFsIG92ZXJsYXBwaW5nIHBhdHRlcm5cblxuICAgICAgICBjb25zdCByZW1haW5pbmdUZXh0ID0gY29udGV4dC50ZXh0LnN1YnN0cmluZyhtYXRjaC5pbmRleCk7XG4gICAgICAgIGNvbnN0IGZvbGxvd2luZ1BhdHRlcm4gPSB0aGlzLmdldEZvbGxvd2luZ1RpbWVQYXR0ZXJuVGhyb3VnaENhY2hlKCk7XG4gICAgICAgIGNvbnN0IGZvbGxvd2luZ01hdGNoID0gZm9sbG93aW5nUGF0dGVybi5leGVjKHJlbWFpbmluZ1RleHQpO1xuXG4gICAgICAgIC8vIFBhdHRlcm4gXCI0NTYtMTJcIiwgXCIyMDIyLTEyXCIgc2hvdWxkIG5vdCBiZSB0aW1lIHdpdGhvdXQgcHJvcGVyIGNvbnRleHRcbiAgICAgICAgaWYgKHRleHQubWF0Y2goL15cXGR7Myw0fS8pICYmIGZvbGxvd2luZ01hdGNoKSB7XG4gICAgICAgICAgICAvLyBlLmcuIFwiMjAyMi0xMlwiXG4gICAgICAgICAgICBpZiAoZm9sbG93aW5nTWF0Y2hbMF0ubWF0Y2goL15cXHMqKFsrLV0pXFxzKlxcZHsyLDR9JC8pKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBlLmcuIFwiMjAyMi0xMjowMS4uLlwiXG4gICAgICAgICAgICBpZiAoZm9sbG93aW5nTWF0Y2hbMF0ubWF0Y2goL15cXHMqKFsrLV0pXFxzKlxcZHsyfVxcV1xcZHsyfS8pKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoXG4gICAgICAgICAgICAhZm9sbG93aW5nTWF0Y2ggfHxcbiAgICAgICAgICAgIC8vIFBhdHRlcm4gXCJZWS5ZWSAtWFhYWFwiIGlzIG1vcmUgbGlrZSB0aW1lem9uZSBvZmZzZXRcbiAgICAgICAgICAgIGZvbGxvd2luZ01hdGNoWzBdLm1hdGNoKC9eXFxzKihbKy1dKVxccypcXGR7Myw0fSQvKVxuICAgICAgICApIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmNoZWNrQW5kUmV0dXJuV2l0aG91dEZvbGxvd2luZ1BhdHRlcm4ocmVzdWx0KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJlc3VsdC5lbmQgPSB0aGlzLmV4dHJhY3RGb2xsb3dpbmdUaW1lQ29tcG9uZW50cyhjb250ZXh0LCBmb2xsb3dpbmdNYXRjaCwgcmVzdWx0KTtcbiAgICAgICAgaWYgKHJlc3VsdC5lbmQpIHtcbiAgICAgICAgICAgIHJlc3VsdC50ZXh0ICs9IGZvbGxvd2luZ01hdGNoWzBdO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRoaXMuY2hlY2tBbmRSZXR1cm5XaXRoRm9sbG93aW5nUGF0dGVybihyZXN1bHQpO1xuICAgIH1cblxuICAgIGV4dHJhY3RQcmltYXJ5VGltZUNvbXBvbmVudHMoXG4gICAgICAgIGNvbnRleHQ6IFBhcnNpbmdDb250ZXh0LFxuICAgICAgICBtYXRjaDogUmVnRXhwTWF0Y2hBcnJheSxcbiAgICAgICAgc3RyaWN0ID0gZmFsc2VcbiAgICApOiBudWxsIHwgUGFyc2luZ0NvbXBvbmVudHMge1xuICAgICAgICBjb25zdCBjb21wb25lbnRzID0gY29udGV4dC5jcmVhdGVQYXJzaW5nQ29tcG9uZW50cygpO1xuICAgICAgICBsZXQgbWludXRlID0gMDtcbiAgICAgICAgbGV0IG1lcmlkaWVtID0gbnVsbDtcblxuICAgICAgICAvLyAtLS0tLSBIb3Vyc1xuICAgICAgICBsZXQgaG91ciA9IHBhcnNlSW50KG1hdGNoW0hPVVJfR1JPVVBdKTtcbiAgICAgICAgaWYgKGhvdXIgPiAxMDApIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnN0cmljdE1vZGUgfHwgbWF0Y2hbTUlOVVRFX0dST1VQXSAhPSBudWxsKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIG1pbnV0ZSA9IGhvdXIgJSAxMDA7XG4gICAgICAgICAgICBob3VyID0gTWF0aC5mbG9vcihob3VyIC8gMTAwKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChob3VyID4gMjQpIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gLS0tLS0gTWludXRlc1xuICAgICAgICBpZiAobWF0Y2hbTUlOVVRFX0dST1VQXSAhPSBudWxsKSB7XG4gICAgICAgICAgICBpZiAobWF0Y2hbTUlOVVRFX0dST1VQXS5sZW5ndGggPT0gMSAmJiAhbWF0Y2hbQU1fUE1fSE9VUl9HUk9VUF0pIHtcbiAgICAgICAgICAgICAgICAvLyBTa2lwIHNpbmdsZSBkaWdpdCBtaW51dGUgZS5nLiBcImF0IDEuMSB4eFwiXG4gICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIG1pbnV0ZSA9IHBhcnNlSW50KG1hdGNoW01JTlVURV9HUk9VUF0pO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKG1pbnV0ZSA+PSA2MCkge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoaG91ciA+IDEyKSB7XG4gICAgICAgICAgICBtZXJpZGllbSA9IE1lcmlkaWVtLlBNO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gLS0tLS0gQU0gJiBQTVxuICAgICAgICBpZiAobWF0Y2hbQU1fUE1fSE9VUl9HUk9VUF0gIT0gbnVsbCkge1xuICAgICAgICAgICAgaWYgKGhvdXIgPiAxMikgcmV0dXJuIG51bGw7XG4gICAgICAgICAgICBjb25zdCBhbXBtID0gbWF0Y2hbQU1fUE1fSE9VUl9HUk9VUF1bMF0udG9Mb3dlckNhc2UoKTtcbiAgICAgICAgICAgIGlmIChhbXBtID09IFwiYVwiKSB7XG4gICAgICAgICAgICAgICAgbWVyaWRpZW0gPSBNZXJpZGllbS5BTTtcbiAgICAgICAgICAgICAgICBpZiAoaG91ciA9PSAxMikge1xuICAgICAgICAgICAgICAgICAgICBob3VyID0gMDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChhbXBtID09IFwicFwiKSB7XG4gICAgICAgICAgICAgICAgbWVyaWRpZW0gPSBNZXJpZGllbS5QTTtcbiAgICAgICAgICAgICAgICBpZiAoaG91ciAhPSAxMikge1xuICAgICAgICAgICAgICAgICAgICBob3VyICs9IDEyO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGNvbXBvbmVudHMuYXNzaWduKFwiaG91clwiLCBob3VyKTtcbiAgICAgICAgY29tcG9uZW50cy5hc3NpZ24oXCJtaW51dGVcIiwgbWludXRlKTtcblxuICAgICAgICBpZiAobWVyaWRpZW0gIT09IG51bGwpIHtcbiAgICAgICAgICAgIGNvbXBvbmVudHMuYXNzaWduKFwibWVyaWRpZW1cIiwgbWVyaWRpZW0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaWYgKGhvdXIgPCAxMikge1xuICAgICAgICAgICAgICAgIGNvbXBvbmVudHMuaW1wbHkoXCJtZXJpZGllbVwiLCBNZXJpZGllbS5BTSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGNvbXBvbmVudHMuaW1wbHkoXCJtZXJpZGllbVwiLCBNZXJpZGllbS5QTSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvLyAtLS0tLSBNaWxsaXNlY29uZFxuICAgICAgICBpZiAobWF0Y2hbTUlMTElfU0VDT05EX0dST1VQXSAhPSBudWxsKSB7XG4gICAgICAgICAgICBjb25zdCBtaWxsaXNlY29uZCA9IHBhcnNlSW50KG1hdGNoW01JTExJX1NFQ09ORF9HUk9VUF0uc3Vic3RyaW5nKDAsIDMpKTtcbiAgICAgICAgICAgIGlmIChtaWxsaXNlY29uZCA+PSAxMDAwKSByZXR1cm4gbnVsbDtcblxuICAgICAgICAgICAgY29tcG9uZW50cy5hc3NpZ24oXCJtaWxsaXNlY29uZFwiLCBtaWxsaXNlY29uZCk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyAtLS0tLSBTZWNvbmRcbiAgICAgICAgaWYgKG1hdGNoW1NFQ09ORF9HUk9VUF0gIT0gbnVsbCkge1xuICAgICAgICAgICAgY29uc3Qgc2Vjb25kID0gcGFyc2VJbnQobWF0Y2hbU0VDT05EX0dST1VQXSk7XG4gICAgICAgICAgICBpZiAoc2Vjb25kID49IDYwKSByZXR1cm4gbnVsbDtcblxuICAgICAgICAgICAgY29tcG9uZW50cy5hc3NpZ24oXCJzZWNvbmRcIiwgc2Vjb25kKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBjb21wb25lbnRzO1xuICAgIH1cblxuICAgIGV4dHJhY3RGb2xsb3dpbmdUaW1lQ29tcG9uZW50cyhcbiAgICAgICAgY29udGV4dDogUGFyc2luZ0NvbnRleHQsXG4gICAgICAgIG1hdGNoOiBSZWdFeHBNYXRjaEFycmF5LFxuICAgICAgICByZXN1bHQ6IFBhcnNpbmdSZXN1bHRcbiAgICApOiBudWxsIHwgUGFyc2luZ0NvbXBvbmVudHMge1xuICAgICAgICBjb25zdCBjb21wb25lbnRzID0gY29udGV4dC5jcmVhdGVQYXJzaW5nQ29tcG9uZW50cygpO1xuXG4gICAgICAgIC8vIC0tLS0tIE1pbGxpc2Vjb25kXG4gICAgICAgIGlmIChtYXRjaFtNSUxMSV9TRUNPTkRfR1JPVVBdICE9IG51bGwpIHtcbiAgICAgICAgICAgIGNvbnN0IG1pbGxpc2Vjb25kID0gcGFyc2VJbnQobWF0Y2hbTUlMTElfU0VDT05EX0dST1VQXS5zdWJzdHJpbmcoMCwgMykpO1xuICAgICAgICAgICAgaWYgKG1pbGxpc2Vjb25kID49IDEwMDApIHJldHVybiBudWxsO1xuXG4gICAgICAgICAgICBjb21wb25lbnRzLmFzc2lnbihcIm1pbGxpc2Vjb25kXCIsIG1pbGxpc2Vjb25kKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIC0tLS0tIFNlY29uZFxuICAgICAgICBpZiAobWF0Y2hbU0VDT05EX0dST1VQXSAhPSBudWxsKSB7XG4gICAgICAgICAgICBjb25zdCBzZWNvbmQgPSBwYXJzZUludChtYXRjaFtTRUNPTkRfR1JPVVBdKTtcbiAgICAgICAgICAgIGlmIChzZWNvbmQgPj0gNjApIHJldHVybiBudWxsO1xuXG4gICAgICAgICAgICBjb21wb25lbnRzLmFzc2lnbihcInNlY29uZFwiLCBzZWNvbmQpO1xuICAgICAgICB9XG5cbiAgICAgICAgbGV0IGhvdXIgPSBwYXJzZUludChtYXRjaFtIT1VSX0dST1VQXSk7XG4gICAgICAgIGxldCBtaW51dGUgPSAwO1xuICAgICAgICBsZXQgbWVyaWRpZW0gPSAtMTtcblxuICAgICAgICAvLyAtLS0tLSBNaW51dGVcbiAgICAgICAgaWYgKG1hdGNoW01JTlVURV9HUk9VUF0gIT0gbnVsbCkge1xuICAgICAgICAgICAgbWludXRlID0gcGFyc2VJbnQobWF0Y2hbTUlOVVRFX0dST1VQXSk7XG4gICAgICAgIH0gZWxzZSBpZiAoaG91ciA+IDEwMCkge1xuICAgICAgICAgICAgbWludXRlID0gaG91ciAlIDEwMDtcbiAgICAgICAgICAgIGhvdXIgPSBNYXRoLmZsb29yKGhvdXIgLyAxMDApO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKG1pbnV0ZSA+PSA2MCB8fCBob3VyID4gMjQpIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGhvdXIgPj0gMTIpIHtcbiAgICAgICAgICAgIG1lcmlkaWVtID0gTWVyaWRpZW0uUE07XG4gICAgICAgIH1cblxuICAgICAgICAvLyAtLS0tLSBBTSAmIFBNXG4gICAgICAgIGlmIChtYXRjaFtBTV9QTV9IT1VSX0dST1VQXSAhPSBudWxsKSB7XG4gICAgICAgICAgICBpZiAoaG91ciA+IDEyKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGNvbnN0IGFtcG0gPSBtYXRjaFtBTV9QTV9IT1VSX0dST1VQXVswXS50b0xvd2VyQ2FzZSgpO1xuICAgICAgICAgICAgaWYgKGFtcG0gPT0gXCJhXCIpIHtcbiAgICAgICAgICAgICAgICBtZXJpZGllbSA9IE1lcmlkaWVtLkFNO1xuICAgICAgICAgICAgICAgIGlmIChob3VyID09IDEyKSB7XG4gICAgICAgICAgICAgICAgICAgIGhvdXIgPSAwO1xuICAgICAgICAgICAgICAgICAgICBpZiAoIWNvbXBvbmVudHMuaXNDZXJ0YWluKFwiZGF5XCIpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb21wb25lbnRzLmltcGx5KFwiZGF5XCIsIGNvbXBvbmVudHMuZ2V0KFwiZGF5XCIpICsgMSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChhbXBtID09IFwicFwiKSB7XG4gICAgICAgICAgICAgICAgbWVyaWRpZW0gPSBNZXJpZGllbS5QTTtcbiAgICAgICAgICAgICAgICBpZiAoaG91ciAhPSAxMikgaG91ciArPSAxMjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKCFyZXN1bHQuc3RhcnQuaXNDZXJ0YWluKFwibWVyaWRpZW1cIikpIHtcbiAgICAgICAgICAgICAgICBpZiAobWVyaWRpZW0gPT0gTWVyaWRpZW0uQU0pIHtcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0LnN0YXJ0LmltcGx5KFwibWVyaWRpZW1cIiwgTWVyaWRpZW0uQU0pO1xuXG4gICAgICAgICAgICAgICAgICAgIGlmIChyZXN1bHQuc3RhcnQuZ2V0KFwiaG91clwiKSA9PSAxMikge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0LnN0YXJ0LmFzc2lnbihcImhvdXJcIiwgMCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICByZXN1bHQuc3RhcnQuaW1wbHkoXCJtZXJpZGllbVwiLCBNZXJpZGllbS5QTSk7XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKHJlc3VsdC5zdGFydC5nZXQoXCJob3VyXCIpICE9IDEyKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXN1bHQuc3RhcnQuYXNzaWduKFwiaG91clwiLCByZXN1bHQuc3RhcnQuZ2V0KFwiaG91clwiKSArIDEyKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGNvbXBvbmVudHMuYXNzaWduKFwiaG91clwiLCBob3VyKTtcbiAgICAgICAgY29tcG9uZW50cy5hc3NpZ24oXCJtaW51dGVcIiwgbWludXRlKTtcblxuICAgICAgICBpZiAobWVyaWRpZW0gPj0gMCkge1xuICAgICAgICAgICAgY29tcG9uZW50cy5hc3NpZ24oXCJtZXJpZGllbVwiLCBtZXJpZGllbSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb25zdCBzdGFydEF0UE0gPSByZXN1bHQuc3RhcnQuaXNDZXJ0YWluKFwibWVyaWRpZW1cIikgJiYgcmVzdWx0LnN0YXJ0LmdldChcImhvdXJcIikgPiAxMjtcbiAgICAgICAgICAgIGlmIChzdGFydEF0UE0pIHtcbiAgICAgICAgICAgICAgICBpZiAocmVzdWx0LnN0YXJ0LmdldChcImhvdXJcIikgLSAxMiA+IGhvdXIpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gMTBwbSAtIDEgKGFtKVxuICAgICAgICAgICAgICAgICAgICBjb21wb25lbnRzLmltcGx5KFwibWVyaWRpZW1cIiwgTWVyaWRpZW0uQU0pO1xuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoaG91ciA8PSAxMikge1xuICAgICAgICAgICAgICAgICAgICBjb21wb25lbnRzLmFzc2lnbihcImhvdXJcIiwgaG91ciArIDEyKTtcbiAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50cy5hc3NpZ24oXCJtZXJpZGllbVwiLCBNZXJpZGllbS5QTSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIGlmIChob3VyID4gMTIpIHtcbiAgICAgICAgICAgICAgICBjb21wb25lbnRzLmltcGx5KFwibWVyaWRpZW1cIiwgTWVyaWRpZW0uUE0pO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChob3VyIDw9IDEyKSB7XG4gICAgICAgICAgICAgICAgY29tcG9uZW50cy5pbXBseShcIm1lcmlkaWVtXCIsIE1lcmlkaWVtLkFNKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChjb21wb25lbnRzLmRhdGUoKS5nZXRUaW1lKCkgPCByZXN1bHQuc3RhcnQuZGF0ZSgpLmdldFRpbWUoKSkge1xuICAgICAgICAgICAgY29tcG9uZW50cy5pbXBseShcImRheVwiLCBjb21wb25lbnRzLmdldChcImRheVwiKSArIDEpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGNvbXBvbmVudHM7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBjaGVja0FuZFJldHVybldpdGhvdXRGb2xsb3dpbmdQYXR0ZXJuKHJlc3VsdCkge1xuICAgICAgICAvLyBTaW5nbGUgZGlnaXQgKGUuZyBcIjFcIikgc2hvdWxkIG5vdCBiZSBjb3VudGVkIGFzIHRpbWUgZXhwcmVzc2lvbiAod2l0aG91dCBwcm9wZXIgY29udGV4dClcbiAgICAgICAgaWYgKHJlc3VsdC50ZXh0Lm1hdGNoKC9eXFxkJC8pKSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFRocmVlIG9yIG1vcmUgZGlnaXQgKGUuZy4gXCIyMDNcIiwgXCIyMDE0XCIpIHNob3VsZCBub3QgYmUgY291bnRlZCBhcyB0aW1lIGV4cHJlc3Npb24gKHdpdGhvdXQgcHJvcGVyIGNvbnRleHQpXG4gICAgICAgIGlmIChyZXN1bHQudGV4dC5tYXRjaCgvXlxcZFxcZFxcZCskLykpIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gSW5zdGVhZCBvZiBcImFtL3BtXCIsIGl0IGVuZHMgd2l0aCBcImFcIiBvciBcInBcIiAoZS5nIFwiMWFcIiwgXCIxMjNwXCIpLCB0aGlzIHNlZW1zIHVubGlrZWx5XG4gICAgICAgIGlmIChyZXN1bHQudGV4dC5tYXRjaCgvXFxkW2FwQVBdJC8pKSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIElmIGl0IGVuZHMgb25seSB3aXRoIG51bWJlcnMgb3IgZG90c1xuICAgICAgICBjb25zdCBlbmRpbmdXaXRoTnVtYmVycyA9IHJlc3VsdC50ZXh0Lm1hdGNoKC9bXlxcZDouXShcXGRbXFxkLl0rKSQvKTtcbiAgICAgICAgaWYgKGVuZGluZ1dpdGhOdW1iZXJzKSB7XG4gICAgICAgICAgICBjb25zdCBlbmRpbmdOdW1iZXJzOiBzdHJpbmcgPSBlbmRpbmdXaXRoTnVtYmVyc1sxXTtcblxuICAgICAgICAgICAgLy8gSW4gc3RyaWN0IG1vZGUgKGUuZy4gXCJhdCAxXCIgb3IgXCJhdCAxLjJcIiksIHRoaXMgc2hvdWxkIG5vdCBiZSBhY2NlcHRlZFxuICAgICAgICAgICAgaWYgKHRoaXMuc3RyaWN0TW9kZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBJZiBpdCBlbmRzIG9ubHkgd2l0aCBkb3Qgc2luZ2xlIGRpZ2l0LCBlLmcuIFwiYXQgMS4yXCJcbiAgICAgICAgICAgIGlmIChlbmRpbmdOdW1iZXJzLmluY2x1ZGVzKFwiLlwiKSAmJiAhZW5kaW5nTnVtYmVycy5tYXRjaCgvXFxkKFxcLlxcZHsyfSkrJC8pKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIElmIGl0IGVuZHMgb25seSB3aXRoIG51bWJlcnMgYWJvdmUgMjQsIGUuZy4gXCJhdCAyNVwiXG4gICAgICAgICAgICBjb25zdCBlbmRpbmdOdW1iZXJWYWwgPSBwYXJzZUludChlbmRpbmdOdW1iZXJzKTtcbiAgICAgICAgICAgIGlmIChlbmRpbmdOdW1iZXJWYWwgPiAyNCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG5cbiAgICBwcml2YXRlIGNoZWNrQW5kUmV0dXJuV2l0aEZvbGxvd2luZ1BhdHRlcm4ocmVzdWx0KSB7XG4gICAgICAgIGlmIChyZXN1bHQudGV4dC5tYXRjaCgvXlxcZCstXFxkKyQvKSkge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBJZiBpdCBlbmRzIG9ubHkgd2l0aCBudW1iZXJzIG9yIGRvdHNcbiAgICAgICAgY29uc3QgZW5kaW5nV2l0aE51bWJlcnMgPSByZXN1bHQudGV4dC5tYXRjaCgvW15cXGQ6Ll0oXFxkW1xcZC5dKylcXHMqLVxccyooXFxkW1xcZC5dKykkLyk7XG4gICAgICAgIGlmIChlbmRpbmdXaXRoTnVtYmVycykge1xuICAgICAgICAgICAgLy8gSW4gc3RyaWN0IG1vZGUgKGUuZy4gXCJhdCAxLTNcIiBvciBcImF0IDEuMiAtIDIuM1wiKSwgdGhpcyBzaG91bGQgbm90IGJlIGFjY2VwdGVkXG4gICAgICAgICAgICBpZiAodGhpcy5zdHJpY3RNb2RlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGNvbnN0IHN0YXJ0aW5nTnVtYmVyczogc3RyaW5nID0gZW5kaW5nV2l0aE51bWJlcnNbMV07XG4gICAgICAgICAgICBjb25zdCBlbmRpbmdOdW1iZXJzOiBzdHJpbmcgPSBlbmRpbmdXaXRoTnVtYmVyc1syXTtcbiAgICAgICAgICAgIC8vIElmIGl0IGVuZHMgb25seSB3aXRoIGRvdCBzaW5nbGUgZGlnaXQsIGUuZy4gXCJhdCAxLjJcIlxuICAgICAgICAgICAgaWYgKGVuZGluZ051bWJlcnMuaW5jbHVkZXMoXCIuXCIpICYmICFlbmRpbmdOdW1iZXJzLm1hdGNoKC9cXGQoXFwuXFxkezJ9KSskLykpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gSWYgaXQgZW5kcyBvbmx5IHdpdGggbnVtYmVycyBhYm92ZSAyNCwgZS5nLiBcImF0IDI1XCJcbiAgICAgICAgICAgIGNvbnN0IGVuZGluZ051bWJlclZhbCA9IHBhcnNlSW50KGVuZGluZ051bWJlcnMpO1xuICAgICAgICAgICAgY29uc3Qgc3RhcnRpbmdOdW1iZXJWYWwgPSBwYXJzZUludChzdGFydGluZ051bWJlcnMpO1xuICAgICAgICAgICAgaWYgKGVuZGluZ051bWJlclZhbCA+IDI0IHx8IHN0YXJ0aW5nTnVtYmVyVmFsID4gMjQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBjYWNoZWRQcmltYXJ5UHJlZml4ID0gbnVsbDtcbiAgICBwcml2YXRlIGNhY2hlZFByaW1hcnlTdWZmaXggPSBudWxsO1xuICAgIHByaXZhdGUgY2FjaGVkUHJpbWFyeVRpbWVQYXR0ZXJuID0gbnVsbDtcblxuICAgIGdldFByaW1hcnlUaW1lUGF0dGVyblRocm91Z2hDYWNoZSgpIHtcbiAgICAgICAgY29uc3QgcHJpbWFyeVByZWZpeCA9IHRoaXMucHJpbWFyeVByZWZpeCgpO1xuICAgICAgICBjb25zdCBwcmltYXJ5U3VmZml4ID0gdGhpcy5wcmltYXJ5U3VmZml4KCk7XG5cbiAgICAgICAgaWYgKHRoaXMuY2FjaGVkUHJpbWFyeVByZWZpeCA9PT0gcHJpbWFyeVByZWZpeCAmJiB0aGlzLmNhY2hlZFByaW1hcnlTdWZmaXggPT09IHByaW1hcnlTdWZmaXgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmNhY2hlZFByaW1hcnlUaW1lUGF0dGVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuY2FjaGVkUHJpbWFyeVRpbWVQYXR0ZXJuID0gcHJpbWFyeVRpbWVQYXR0ZXJuKFxuICAgICAgICAgICAgdGhpcy5wcmltYXJ5UGF0dGVybkxlZnRCb3VuZGFyeSgpLFxuICAgICAgICAgICAgcHJpbWFyeVByZWZpeCxcbiAgICAgICAgICAgIHByaW1hcnlTdWZmaXgsXG4gICAgICAgICAgICB0aGlzLnBhdHRlcm5GbGFncygpXG4gICAgICAgICk7XG4gICAgICAgIHRoaXMuY2FjaGVkUHJpbWFyeVByZWZpeCA9IHByaW1hcnlQcmVmaXg7XG4gICAgICAgIHRoaXMuY2FjaGVkUHJpbWFyeVN1ZmZpeCA9IHByaW1hcnlTdWZmaXg7XG4gICAgICAgIHJldHVybiB0aGlzLmNhY2hlZFByaW1hcnlUaW1lUGF0dGVybjtcbiAgICB9XG5cbiAgICBwcml2YXRlIGNhY2hlZEZvbGxvd2luZ1BoYXNlID0gbnVsbDtcbiAgICBwcml2YXRlIGNhY2hlZEZvbGxvd2luZ1N1ZmZpeCA9IG51bGw7XG4gICAgcHJpdmF0ZSBjYWNoZWRGb2xsb3dpbmdUaW1lUGF0dGVuID0gbnVsbDtcblxuICAgIGdldEZvbGxvd2luZ1RpbWVQYXR0ZXJuVGhyb3VnaENhY2hlKCkge1xuICAgICAgICBjb25zdCBmb2xsb3dpbmdQaGFzZSA9IHRoaXMuZm9sbG93aW5nUGhhc2UoKTtcbiAgICAgICAgY29uc3QgZm9sbG93aW5nU3VmZml4ID0gdGhpcy5mb2xsb3dpbmdTdWZmaXgoKTtcblxuICAgICAgICBpZiAodGhpcy5jYWNoZWRGb2xsb3dpbmdQaGFzZSA9PT0gZm9sbG93aW5nUGhhc2UgJiYgdGhpcy5jYWNoZWRGb2xsb3dpbmdTdWZmaXggPT09IGZvbGxvd2luZ1N1ZmZpeCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuY2FjaGVkRm9sbG93aW5nVGltZVBhdHRlbjtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuY2FjaGVkRm9sbG93aW5nVGltZVBhdHRlbiA9IGZvbGxvd2luZ1RpbWVQYXR0ZW4oZm9sbG93aW5nUGhhc2UsIGZvbGxvd2luZ1N1ZmZpeCk7XG4gICAgICAgIHRoaXMuY2FjaGVkRm9sbG93aW5nUGhhc2UgPSBmb2xsb3dpbmdQaGFzZTtcbiAgICAgICAgdGhpcy5jYWNoZWRGb2xsb3dpbmdTdWZmaXggPSBmb2xsb3dpbmdTdWZmaXg7XG4gICAgICAgIHJldHVybiB0aGlzLmNhY2hlZEZvbGxvd2luZ1RpbWVQYXR0ZW47XG4gICAgfVxufVxuIiwgImltcG9ydCB7IFBhcnNpbmdDb250ZXh0IH0gZnJvbSBcIi4uLy4uLy4uL2Nocm9ub1wiO1xuaW1wb3J0IHsgUGFyc2luZ0NvbXBvbmVudHMsIFBhcnNpbmdSZXN1bHQgfSBmcm9tIFwiLi4vLi4vLi4vcmVzdWx0c1wiO1xuaW1wb3J0IHsgTWVyaWRpZW0gfSBmcm9tIFwiLi4vLi4vLi4vdHlwZXNcIjtcbmltcG9ydCB7IEFic3RyYWN0VGltZUV4cHJlc3Npb25QYXJzZXIgfSBmcm9tIFwiLi4vLi4vLi4vY29tbW9uL3BhcnNlcnMvQWJzdHJhY3RUaW1lRXhwcmVzc2lvblBhcnNlclwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBFTlRpbWVFeHByZXNzaW9uUGFyc2VyIGV4dGVuZHMgQWJzdHJhY3RUaW1lRXhwcmVzc2lvblBhcnNlciB7XG4gICAgY29uc3RydWN0b3Ioc3RyaWN0TW9kZSkge1xuICAgICAgICBzdXBlcihzdHJpY3RNb2RlKTtcbiAgICB9XG5cbiAgICBmb2xsb3dpbmdQaGFzZSgpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gXCJcXFxccyooPzpcXFxcLXxcXFxcXHUyMDEzfFxcXFx+fFxcXFxcdTMwMUN8dG98dW50aWx8dGhyb3VnaHx0aWxsfFxcXFw/KVxcXFxzKlwiO1xuICAgIH1cblxuICAgIHByaW1hcnlQcmVmaXgoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIFwiKD86KD86YXR8ZnJvbSlcXFxccyopPz9cIjtcbiAgICB9XG5cbiAgICBwcmltYXJ5U3VmZml4KCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiBcIig/OlxcXFxzKig/Om9cXFxcVypjbG9ja3xhdFxcXFxzKm5pZ2h0fGluXFxcXHMqdGhlXFxcXHMqKD86bW9ybmluZ3xhZnRlcm5vb24pKSk/KD8hLykoPz1cXFxcV3wkKVwiO1xuICAgIH1cblxuICAgIGV4dHJhY3RQcmltYXJ5VGltZUNvbXBvbmVudHMoY29udGV4dDogUGFyc2luZ0NvbnRleHQsIG1hdGNoOiBSZWdFeHBNYXRjaEFycmF5KTogbnVsbCB8IFBhcnNpbmdDb21wb25lbnRzIHtcbiAgICAgICAgY29uc3QgY29tcG9uZW50cyA9IHN1cGVyLmV4dHJhY3RQcmltYXJ5VGltZUNvbXBvbmVudHMoY29udGV4dCwgbWF0Y2gpO1xuICAgICAgICBpZiAoIWNvbXBvbmVudHMpIHtcbiAgICAgICAgICAgIHJldHVybiBjb21wb25lbnRzO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKG1hdGNoWzBdLmVuZHNXaXRoKFwibmlnaHRcIikpIHtcbiAgICAgICAgICAgIGNvbnN0IGhvdXIgPSBjb21wb25lbnRzLmdldChcImhvdXJcIik7XG4gICAgICAgICAgICBpZiAoaG91ciA+PSA2ICYmIGhvdXIgPCAxMikge1xuICAgICAgICAgICAgICAgIGNvbXBvbmVudHMuYXNzaWduKFwiaG91clwiLCBjb21wb25lbnRzLmdldChcImhvdXJcIikgKyAxMik7XG4gICAgICAgICAgICAgICAgY29tcG9uZW50cy5hc3NpZ24oXCJtZXJpZGllbVwiLCBNZXJpZGllbS5QTSk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGhvdXIgPCA2KSB7XG4gICAgICAgICAgICAgICAgY29tcG9uZW50cy5hc3NpZ24oXCJtZXJpZGllbVwiLCBNZXJpZGllbS5BTSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAobWF0Y2hbMF0uZW5kc1dpdGgoXCJhZnRlcm5vb25cIikpIHtcbiAgICAgICAgICAgIGNvbXBvbmVudHMuYXNzaWduKFwibWVyaWRpZW1cIiwgTWVyaWRpZW0uUE0pO1xuICAgICAgICAgICAgY29uc3QgaG91ciA9IGNvbXBvbmVudHMuZ2V0KFwiaG91clwiKTtcbiAgICAgICAgICAgIGlmIChob3VyID49IDAgJiYgaG91ciA8PSA2KSB7XG4gICAgICAgICAgICAgICAgY29tcG9uZW50cy5hc3NpZ24oXCJob3VyXCIsIGNvbXBvbmVudHMuZ2V0KFwiaG91clwiKSArIDEyKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChtYXRjaFswXS5lbmRzV2l0aChcIm1vcm5pbmdcIikpIHtcbiAgICAgICAgICAgIGNvbXBvbmVudHMuYXNzaWduKFwibWVyaWRpZW1cIiwgTWVyaWRpZW0uQU0pO1xuICAgICAgICAgICAgY29uc3QgaG91ciA9IGNvbXBvbmVudHMuZ2V0KFwiaG91clwiKTtcbiAgICAgICAgICAgIGlmIChob3VyIDwgMTIpIHtcbiAgICAgICAgICAgICAgICBjb21wb25lbnRzLmFzc2lnbihcImhvdXJcIiwgY29tcG9uZW50cy5nZXQoXCJob3VyXCIpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBjb21wb25lbnRzLmFkZFRhZyhcInBhcnNlci9FTlRpbWVFeHByZXNzaW9uUGFyc2VyXCIpO1xuICAgIH1cblxuICAgIGV4dHJhY3RGb2xsb3dpbmdUaW1lQ29tcG9uZW50cyhcbiAgICAgICAgY29udGV4dDogUGFyc2luZ0NvbnRleHQsXG4gICAgICAgIG1hdGNoOiBSZWdFeHBNYXRjaEFycmF5LFxuICAgICAgICByZXN1bHQ6IFBhcnNpbmdSZXN1bHRcbiAgICApOiBQYXJzaW5nQ29tcG9uZW50cyB8IG51bGwge1xuICAgICAgICBjb25zdCBmb2xsb3dpbmdDb21wb25lbnRzID0gc3VwZXIuZXh0cmFjdEZvbGxvd2luZ1RpbWVDb21wb25lbnRzKGNvbnRleHQsIG1hdGNoLCByZXN1bHQpO1xuICAgICAgICBpZiAoZm9sbG93aW5nQ29tcG9uZW50cykge1xuICAgICAgICAgICAgZm9sbG93aW5nQ29tcG9uZW50cy5hZGRUYWcoXCJwYXJzZXIvRU5UaW1lRXhwcmVzc2lvblBhcnNlclwiKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZm9sbG93aW5nQ29tcG9uZW50cztcbiAgICB9XG59XG4iLCAiaW1wb3J0IHsgT3BVbml0VHlwZSwgUVVuaXRUeXBlIH0gZnJvbSBcImRheWpzXCI7XG5pbXBvcnQgeyBQYXJzaW5nQ29tcG9uZW50cyB9IGZyb20gXCIuLi9yZXN1bHRzXCI7XG5cbmV4cG9ydCB0eXBlIFRpbWVVbml0cyA9IHsgW2MgaW4gT3BVbml0VHlwZSB8IFFVbml0VHlwZV0/OiBudW1iZXIgfTtcblxuZXhwb3J0IGZ1bmN0aW9uIHJldmVyc2VUaW1lVW5pdHModGltZVVuaXRzOiBUaW1lVW5pdHMpOiBUaW1lVW5pdHMge1xuICAgIGNvbnN0IHJldmVyc2VkID0ge307XG4gICAgZm9yIChjb25zdCBrZXkgaW4gdGltZVVuaXRzKSB7XG4gICAgICAgIC8vIG5vaW5zcGVjdGlvbiBKU1VuZmlsdGVyZWRGb3JJbkxvb3BcbiAgICAgICAgcmV2ZXJzZWRba2V5XSA9IC10aW1lVW5pdHNba2V5XTtcbiAgICB9XG5cbiAgICByZXR1cm4gcmV2ZXJzZWQgYXMgVGltZVVuaXRzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYWRkSW1wbGllZFRpbWVVbml0cyhjb21wb25lbnRzOiBQYXJzaW5nQ29tcG9uZW50cywgdGltZVVuaXRzOiBUaW1lVW5pdHMpOiBQYXJzaW5nQ29tcG9uZW50cyB7XG4gICAgY29uc3Qgb3V0cHV0ID0gY29tcG9uZW50cy5jbG9uZSgpO1xuXG4gICAgbGV0IGRhdGUgPSBjb21wb25lbnRzLmRheWpzKCk7XG4gICAgZm9yIChjb25zdCBrZXkgaW4gdGltZVVuaXRzKSB7XG4gICAgICAgIC8vIG5vaW5zcGVjdGlvbiBKU1VuZmlsdGVyZWRGb3JJbkxvb3AsVHlwZVNjcmlwdFZhbGlkYXRlVHlwZXNcbiAgICAgICAgZGF0ZSA9IGRhdGUuYWRkKHRpbWVVbml0c1trZXldLCBrZXkgYXMgUVVuaXRUeXBlKTtcbiAgICB9XG5cbiAgICBpZiAoXCJkYXlcIiBpbiB0aW1lVW5pdHMgfHwgXCJkXCIgaW4gdGltZVVuaXRzIHx8IFwid2Vla1wiIGluIHRpbWVVbml0cyB8fCBcIm1vbnRoXCIgaW4gdGltZVVuaXRzIHx8IFwieWVhclwiIGluIHRpbWVVbml0cykge1xuICAgICAgICBvdXRwdXQuaW1wbHkoXCJkYXlcIiwgZGF0ZS5kYXRlKCkpO1xuICAgICAgICBvdXRwdXQuaW1wbHkoXCJtb250aFwiLCBkYXRlLm1vbnRoKCkgKyAxKTtcbiAgICAgICAgb3V0cHV0LmltcGx5KFwieWVhclwiLCBkYXRlLnllYXIoKSk7XG4gICAgfVxuXG4gICAgaWYgKFwic2Vjb25kXCIgaW4gdGltZVVuaXRzIHx8IFwibWludXRlXCIgaW4gdGltZVVuaXRzIHx8IFwiaG91clwiIGluIHRpbWVVbml0cykge1xuICAgICAgICBvdXRwdXQuaW1wbHkoXCJzZWNvbmRcIiwgZGF0ZS5zZWNvbmQoKSk7XG4gICAgICAgIG91dHB1dC5pbXBseShcIm1pbnV0ZVwiLCBkYXRlLm1pbnV0ZSgpKTtcbiAgICAgICAgb3V0cHV0LmltcGx5KFwiaG91clwiLCBkYXRlLmhvdXIoKSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIG91dHB1dDtcbn1cbiIsICJpbXBvcnQgeyBQYXJzaW5nQ29udGV4dCB9IGZyb20gXCIuLi8uLi8uLi9jaHJvbm9cIjtcbmltcG9ydCB7IHBhcnNlVGltZVVuaXRzLCBUSU1FX1VOSVRTX05PX0FCQlJfUEFUVEVSTiwgVElNRV9VTklUU19QQVRURVJOIH0gZnJvbSBcIi4uL2NvbnN0YW50c1wiO1xuaW1wb3J0IHsgUGFyc2luZ0NvbXBvbmVudHMgfSBmcm9tIFwiLi4vLi4vLi4vcmVzdWx0c1wiO1xuaW1wb3J0IHsgQWJzdHJhY3RQYXJzZXJXaXRoV29yZEJvdW5kYXJ5Q2hlY2tpbmcgfSBmcm9tIFwiLi4vLi4vLi4vY29tbW9uL3BhcnNlcnMvQWJzdHJhY3RQYXJzZXJXaXRoV29yZEJvdW5kYXJ5XCI7XG5pbXBvcnQgeyByZXZlcnNlVGltZVVuaXRzIH0gZnJvbSBcIi4uLy4uLy4uL3V0aWxzL3RpbWV1bml0c1wiO1xuXG5jb25zdCBQQVRURVJOID0gbmV3IFJlZ0V4cChgKCR7VElNRV9VTklUU19QQVRURVJOfSlcXFxcc3swLDV9KD86YWdvfGJlZm9yZXxlYXJsaWVyKSg/PVxcXFxXfCQpYCwgXCJpXCIpO1xuY29uc3QgU1RSSUNUX1BBVFRFUk4gPSBuZXcgUmVnRXhwKGAoJHtUSU1FX1VOSVRTX05PX0FCQlJfUEFUVEVSTn0pXFxcXHN7MCw1fSg/OmFnb3xiZWZvcmV8ZWFybGllcikoPz1cXFxcV3wkKWAsIFwiaVwiKTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRU5UaW1lVW5pdEFnb0Zvcm1hdFBhcnNlciBleHRlbmRzIEFic3RyYWN0UGFyc2VyV2l0aFdvcmRCb3VuZGFyeUNoZWNraW5nIHtcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHN0cmljdE1vZGU6IGJvb2xlYW4pIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICB9XG5cbiAgICBpbm5lclBhdHRlcm4oKTogUmVnRXhwIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc3RyaWN0TW9kZSA/IFNUUklDVF9QQVRURVJOIDogUEFUVEVSTjtcbiAgICB9XG5cbiAgICBpbm5lckV4dHJhY3QoY29udGV4dDogUGFyc2luZ0NvbnRleHQsIG1hdGNoOiBSZWdFeHBNYXRjaEFycmF5KSB7XG4gICAgICAgIGNvbnN0IHRpbWVVbml0cyA9IHBhcnNlVGltZVVuaXRzKG1hdGNoWzFdKTtcbiAgICAgICAgaWYgKCF0aW1lVW5pdHMpIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IG91dHB1dFRpbWVVbml0cyA9IHJldmVyc2VUaW1lVW5pdHModGltZVVuaXRzKTtcbiAgICAgICAgcmV0dXJuIFBhcnNpbmdDb21wb25lbnRzLmNyZWF0ZVJlbGF0aXZlRnJvbVJlZmVyZW5jZShjb250ZXh0LnJlZmVyZW5jZSwgb3V0cHV0VGltZVVuaXRzKTtcbiAgICB9XG59XG4iLCAiaW1wb3J0IHsgUGFyc2luZ0NvbnRleHQgfSBmcm9tIFwiLi4vLi4vLi4vY2hyb25vXCI7XG5pbXBvcnQgeyBwYXJzZVRpbWVVbml0cywgVElNRV9VTklUU19OT19BQkJSX1BBVFRFUk4sIFRJTUVfVU5JVFNfUEFUVEVSTiB9IGZyb20gXCIuLi9jb25zdGFudHNcIjtcbmltcG9ydCB7IFBhcnNpbmdDb21wb25lbnRzIH0gZnJvbSBcIi4uLy4uLy4uL3Jlc3VsdHNcIjtcbmltcG9ydCB7IEFic3RyYWN0UGFyc2VyV2l0aFdvcmRCb3VuZGFyeUNoZWNraW5nIH0gZnJvbSBcIi4uLy4uLy4uL2NvbW1vbi9wYXJzZXJzL0Fic3RyYWN0UGFyc2VyV2l0aFdvcmRCb3VuZGFyeVwiO1xuXG5jb25zdCBQQVRURVJOID0gbmV3IFJlZ0V4cChcbiAgICBgKCR7VElNRV9VTklUU19QQVRURVJOfSlcXFxcc3swLDV9KD86bGF0ZXJ8YWZ0ZXJ8ZnJvbSBub3d8aGVuY2Vmb3J0aHxmb3J3YXJkfG91dClgICsgXCIoPz0oPzpcXFxcV3wkKSlcIixcbiAgICBcImlcIlxuKTtcblxuY29uc3QgU1RSSUNUX1BBVFRFUk4gPSBuZXcgUmVnRXhwKGAoJHtUSU1FX1VOSVRTX05PX0FCQlJfUEFUVEVSTn0pXFxcXHN7MCw1fShsYXRlcnxhZnRlcnxmcm9tIG5vdykoPz1cXFxcV3wkKWAsIFwiaVwiKTtcbmNvbnN0IEdST1VQX05VTV9USU1FVU5JVFMgPSAxO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBFTlRpbWVVbml0TGF0ZXJGb3JtYXRQYXJzZXIgZXh0ZW5kcyBBYnN0cmFjdFBhcnNlcldpdGhXb3JkQm91bmRhcnlDaGVja2luZyB7XG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBzdHJpY3RNb2RlOiBib29sZWFuKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgfVxuXG4gICAgaW5uZXJQYXR0ZXJuKCk6IFJlZ0V4cCB7XG4gICAgICAgIHJldHVybiB0aGlzLnN0cmljdE1vZGUgPyBTVFJJQ1RfUEFUVEVSTiA6IFBBVFRFUk47XG4gICAgfVxuXG4gICAgaW5uZXJFeHRyYWN0KGNvbnRleHQ6IFBhcnNpbmdDb250ZXh0LCBtYXRjaDogUmVnRXhwTWF0Y2hBcnJheSkge1xuICAgICAgICBjb25zdCB0aW1lVW5pdHMgPSBwYXJzZVRpbWVVbml0cyhtYXRjaFtHUk9VUF9OVU1fVElNRVVOSVRTXSk7XG4gICAgICAgIGlmICghdGltZVVuaXRzKSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gUGFyc2luZ0NvbXBvbmVudHMuY3JlYXRlUmVsYXRpdmVGcm9tUmVmZXJlbmNlKGNvbnRleHQucmVmZXJlbmNlLCB0aW1lVW5pdHMpO1xuICAgIH1cbn1cbiIsICJpbXBvcnQgeyBQYXJzaW5nQ29udGV4dCwgUmVmaW5lciB9IGZyb20gXCIuLi9jaHJvbm9cIjtcbmltcG9ydCB7IFBhcnNpbmdSZXN1bHQgfSBmcm9tIFwiLi4vcmVzdWx0c1wiO1xuXG4vKipcbiAqIEEgc3BlY2lhbCB0eXBlIG9mIHtAbGluayBSZWZpbmVyfSB0byBmaWx0ZXIgdGhlIHJlc3VsdHNcbiAqL1xuZXhwb3J0IGFic3RyYWN0IGNsYXNzIEZpbHRlciBpbXBsZW1lbnRzIFJlZmluZXIge1xuICAgIGFic3RyYWN0IGlzVmFsaWQoY29udGV4dDogUGFyc2luZ0NvbnRleHQsIHJlc3VsdDogUGFyc2luZ1Jlc3VsdCk6IGJvb2xlYW47XG5cbiAgICByZWZpbmUoY29udGV4dDogUGFyc2luZ0NvbnRleHQsIHJlc3VsdHM6IFBhcnNpbmdSZXN1bHRbXSk6IFBhcnNpbmdSZXN1bHRbXSB7XG4gICAgICAgIHJldHVybiByZXN1bHRzLmZpbHRlcigocikgPT4gdGhpcy5pc1ZhbGlkKGNvbnRleHQsIHIpKTtcbiAgICB9XG59XG5cbi8qKlxuICogQSBzcGVjaWFsIHR5cGUgb2Yge0BsaW5rIFJlZmluZXJ9IHRvIG1lcmdlIGNvbnNlY3V0aXZlIHJlc3VsdHNcbiAqL1xuZXhwb3J0IGFic3RyYWN0IGNsYXNzIE1lcmdpbmdSZWZpbmVyIGltcGxlbWVudHMgUmVmaW5lciB7XG4gICAgYWJzdHJhY3Qgc2hvdWxkTWVyZ2VSZXN1bHRzKFxuICAgICAgICB0ZXh0QmV0d2Vlbjogc3RyaW5nLFxuICAgICAgICBjdXJyZW50UmVzdWx0OiBQYXJzaW5nUmVzdWx0LFxuICAgICAgICBuZXh0UmVzdWx0OiBQYXJzaW5nUmVzdWx0LFxuICAgICAgICBjb250ZXh0OiBQYXJzaW5nQ29udGV4dFxuICAgICk6IGJvb2xlYW47XG5cbiAgICBhYnN0cmFjdCBtZXJnZVJlc3VsdHMoXG4gICAgICAgIHRleHRCZXR3ZWVuOiBzdHJpbmcsXG4gICAgICAgIGN1cnJlbnRSZXN1bHQ6IFBhcnNpbmdSZXN1bHQsXG4gICAgICAgIG5leHRSZXN1bHQ6IFBhcnNpbmdSZXN1bHQsXG4gICAgICAgIGNvbnRleHQ6IFBhcnNpbmdDb250ZXh0XG4gICAgKTogUGFyc2luZ1Jlc3VsdDtcblxuICAgIHJlZmluZShjb250ZXh0OiBQYXJzaW5nQ29udGV4dCwgcmVzdWx0czogUGFyc2luZ1Jlc3VsdFtdKTogUGFyc2luZ1Jlc3VsdFtdIHtcbiAgICAgICAgaWYgKHJlc3VsdHMubGVuZ3RoIDwgMikge1xuICAgICAgICAgICAgcmV0dXJuIHJlc3VsdHM7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBtZXJnZWRSZXN1bHRzOiBQYXJzaW5nUmVzdWx0W10gPSBbXTtcbiAgICAgICAgbGV0IGN1clJlc3VsdCA9IHJlc3VsdHNbMF07XG4gICAgICAgIGxldCBuZXh0UmVzdWx0ID0gbnVsbDtcblxuICAgICAgICBmb3IgKGxldCBpID0gMTsgaSA8IHJlc3VsdHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIG5leHRSZXN1bHQgPSByZXN1bHRzW2ldO1xuXG4gICAgICAgICAgICBjb25zdCB0ZXh0QmV0d2VlbiA9IGNvbnRleHQudGV4dC5zdWJzdHJpbmcoY3VyUmVzdWx0LmluZGV4ICsgY3VyUmVzdWx0LnRleHQubGVuZ3RoLCBuZXh0UmVzdWx0LmluZGV4KTtcbiAgICAgICAgICAgIGlmICghdGhpcy5zaG91bGRNZXJnZVJlc3VsdHModGV4dEJldHdlZW4sIGN1clJlc3VsdCwgbmV4dFJlc3VsdCwgY29udGV4dCkpIHtcbiAgICAgICAgICAgICAgICBtZXJnZWRSZXN1bHRzLnB1c2goY3VyUmVzdWx0KTtcbiAgICAgICAgICAgICAgICBjdXJSZXN1bHQgPSBuZXh0UmVzdWx0O1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBjb25zdCBsZWZ0ID0gY3VyUmVzdWx0O1xuICAgICAgICAgICAgICAgIGNvbnN0IHJpZ2h0ID0gbmV4dFJlc3VsdDtcbiAgICAgICAgICAgICAgICBjb25zdCBtZXJnZWRSZXN1bHQgPSB0aGlzLm1lcmdlUmVzdWx0cyh0ZXh0QmV0d2VlbiwgbGVmdCwgcmlnaHQsIGNvbnRleHQpO1xuICAgICAgICAgICAgICAgIGNvbnRleHQuZGVidWcoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhgJHt0aGlzLmNvbnN0cnVjdG9yLm5hbWV9IG1lcmdlZCAke2xlZnR9IGFuZCAke3JpZ2h0fSBpbnRvICR7bWVyZ2VkUmVzdWx0fWApO1xuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgY3VyUmVzdWx0ID0gbWVyZ2VkUmVzdWx0O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGN1clJlc3VsdCAhPSBudWxsKSB7XG4gICAgICAgICAgICBtZXJnZWRSZXN1bHRzLnB1c2goY3VyUmVzdWx0KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBtZXJnZWRSZXN1bHRzO1xuICAgIH1cbn1cbiIsICIvKlxuICBcbiovXG5cbmltcG9ydCB7IFBhcnNpbmdSZXN1bHQgfSBmcm9tIFwiLi4vLi4vcmVzdWx0c1wiO1xuaW1wb3J0IHsgTWVyZ2luZ1JlZmluZXIgfSBmcm9tIFwiLi4vYWJzdHJhY3RSZWZpbmVyc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBhYnN0cmFjdCBjbGFzcyBBYnN0cmFjdE1lcmdlRGF0ZVJhbmdlUmVmaW5lciBleHRlbmRzIE1lcmdpbmdSZWZpbmVyIHtcbiAgICBhYnN0cmFjdCBwYXR0ZXJuQmV0d2VlbigpOiBSZWdFeHA7XG5cbiAgICBzaG91bGRNZXJnZVJlc3VsdHModGV4dEJldHdlZW4sIGN1cnJlbnRSZXN1bHQsIG5leHRSZXN1bHQpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuICFjdXJyZW50UmVzdWx0LmVuZCAmJiAhbmV4dFJlc3VsdC5lbmQgJiYgdGV4dEJldHdlZW4ubWF0Y2godGhpcy5wYXR0ZXJuQmV0d2VlbigpKSAhPSBudWxsO1xuICAgIH1cblxuICAgIG1lcmdlUmVzdWx0cyh0ZXh0QmV0d2VlbiwgZnJvbVJlc3VsdCwgdG9SZXN1bHQpOiBQYXJzaW5nUmVzdWx0IHtcbiAgICAgICAgaWYgKCFmcm9tUmVzdWx0LnN0YXJ0LmlzT25seVdlZWtkYXlDb21wb25lbnQoKSAmJiAhdG9SZXN1bHQuc3RhcnQuaXNPbmx5V2Vla2RheUNvbXBvbmVudCgpKSB7XG4gICAgICAgICAgICB0b1Jlc3VsdC5zdGFydC5nZXRDZXJ0YWluQ29tcG9uZW50cygpLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgICAgICAgICAgIGlmICghZnJvbVJlc3VsdC5zdGFydC5pc0NlcnRhaW4oa2V5KSkge1xuICAgICAgICAgICAgICAgICAgICBmcm9tUmVzdWx0LnN0YXJ0LmltcGx5KGtleSwgdG9SZXN1bHQuc3RhcnQuZ2V0KGtleSkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBmcm9tUmVzdWx0LnN0YXJ0LmdldENlcnRhaW5Db21wb25lbnRzKCkuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKCF0b1Jlc3VsdC5zdGFydC5pc0NlcnRhaW4oa2V5KSkge1xuICAgICAgICAgICAgICAgICAgICB0b1Jlc3VsdC5zdGFydC5pbXBseShrZXksIGZyb21SZXN1bHQuc3RhcnQuZ2V0KGtleSkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGZyb21SZXN1bHQuc3RhcnQuZGF0ZSgpLmdldFRpbWUoKSA+IHRvUmVzdWx0LnN0YXJ0LmRhdGUoKS5nZXRUaW1lKCkpIHtcbiAgICAgICAgICAgIGxldCBmcm9tTW9tZW50ID0gZnJvbVJlc3VsdC5zdGFydC5kYXlqcygpO1xuICAgICAgICAgICAgbGV0IHRvTW9tZW50ID0gdG9SZXN1bHQuc3RhcnQuZGF5anMoKTtcbiAgICAgICAgICAgIGlmICh0b1Jlc3VsdC5zdGFydC5pc09ubHlXZWVrZGF5Q29tcG9uZW50KCkgJiYgdG9Nb21lbnQuYWRkKDcsIFwiZGF5c1wiKS5pc0FmdGVyKGZyb21Nb21lbnQpKSB7XG4gICAgICAgICAgICAgICAgdG9Nb21lbnQgPSB0b01vbWVudC5hZGQoNywgXCJkYXlzXCIpO1xuICAgICAgICAgICAgICAgIHRvUmVzdWx0LnN0YXJ0LmltcGx5KFwiZGF5XCIsIHRvTW9tZW50LmRhdGUoKSk7XG4gICAgICAgICAgICAgICAgdG9SZXN1bHQuc3RhcnQuaW1wbHkoXCJtb250aFwiLCB0b01vbWVudC5tb250aCgpICsgMSk7XG4gICAgICAgICAgICAgICAgdG9SZXN1bHQuc3RhcnQuaW1wbHkoXCJ5ZWFyXCIsIHRvTW9tZW50LnllYXIoKSk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGZyb21SZXN1bHQuc3RhcnQuaXNPbmx5V2Vla2RheUNvbXBvbmVudCgpICYmIGZyb21Nb21lbnQuYWRkKC03LCBcImRheXNcIikuaXNCZWZvcmUodG9Nb21lbnQpKSB7XG4gICAgICAgICAgICAgICAgZnJvbU1vbWVudCA9IGZyb21Nb21lbnQuYWRkKC03LCBcImRheXNcIik7XG4gICAgICAgICAgICAgICAgZnJvbVJlc3VsdC5zdGFydC5pbXBseShcImRheVwiLCBmcm9tTW9tZW50LmRhdGUoKSk7XG4gICAgICAgICAgICAgICAgZnJvbVJlc3VsdC5zdGFydC5pbXBseShcIm1vbnRoXCIsIGZyb21Nb21lbnQubW9udGgoKSArIDEpO1xuICAgICAgICAgICAgICAgIGZyb21SZXN1bHQuc3RhcnQuaW1wbHkoXCJ5ZWFyXCIsIGZyb21Nb21lbnQueWVhcigpKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodG9SZXN1bHQuc3RhcnQuaXNEYXRlV2l0aFVua25vd25ZZWFyKCkgJiYgdG9Nb21lbnQuYWRkKDEsIFwieWVhcnNcIikuaXNBZnRlcihmcm9tTW9tZW50KSkge1xuICAgICAgICAgICAgICAgIHRvTW9tZW50ID0gdG9Nb21lbnQuYWRkKDEsIFwieWVhcnNcIik7XG4gICAgICAgICAgICAgICAgdG9SZXN1bHQuc3RhcnQuaW1wbHkoXCJ5ZWFyXCIsIHRvTW9tZW50LnllYXIoKSk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGZyb21SZXN1bHQuc3RhcnQuaXNEYXRlV2l0aFVua25vd25ZZWFyKCkgJiYgZnJvbU1vbWVudC5hZGQoLTEsIFwieWVhcnNcIikuaXNCZWZvcmUodG9Nb21lbnQpKSB7XG4gICAgICAgICAgICAgICAgZnJvbU1vbWVudCA9IGZyb21Nb21lbnQuYWRkKC0xLCBcInllYXJzXCIpO1xuICAgICAgICAgICAgICAgIGZyb21SZXN1bHQuc3RhcnQuaW1wbHkoXCJ5ZWFyXCIsIGZyb21Nb21lbnQueWVhcigpKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgW3RvUmVzdWx0LCBmcm9tUmVzdWx0XSA9IFtmcm9tUmVzdWx0LCB0b1Jlc3VsdF07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCByZXN1bHQgPSBmcm9tUmVzdWx0LmNsb25lKCk7XG4gICAgICAgIHJlc3VsdC5zdGFydCA9IGZyb21SZXN1bHQuc3RhcnQ7XG4gICAgICAgIHJlc3VsdC5lbmQgPSB0b1Jlc3VsdC5zdGFydDtcbiAgICAgICAgcmVzdWx0LmluZGV4ID0gTWF0aC5taW4oZnJvbVJlc3VsdC5pbmRleCwgdG9SZXN1bHQuaW5kZXgpO1xuICAgICAgICBpZiAoZnJvbVJlc3VsdC5pbmRleCA8IHRvUmVzdWx0LmluZGV4KSB7XG4gICAgICAgICAgICByZXN1bHQudGV4dCA9IGZyb21SZXN1bHQudGV4dCArIHRleHRCZXR3ZWVuICsgdG9SZXN1bHQudGV4dDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJlc3VsdC50ZXh0ID0gdG9SZXN1bHQudGV4dCArIHRleHRCZXR3ZWVuICsgZnJvbVJlc3VsdC50ZXh0O1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG59XG4iLCAiLypcbiAgXG4qL1xuXG5pbXBvcnQgQWJzdHJhY3RNZXJnZURhdGVSYW5nZVJlZmluZXIgZnJvbSBcIi4uLy4uLy4uL2NvbW1vbi9yZWZpbmVycy9BYnN0cmFjdE1lcmdlRGF0ZVJhbmdlUmVmaW5lclwiO1xuXG4vKipcbiAqIE1lcmdpbmcgYmVmb3JlIGFuZCBhZnRlciByZXN1bHRzIChzZWUuIEFic3RyYWN0TWVyZ2VEYXRlUmFuZ2VSZWZpbmVyKVxuICogVGhpcyBpbXBsZW1lbnRhdGlvbiBzaG91bGQgcHJvdmlkZSBFbmdsaXNoIGNvbm5lY3RpbmcgcGhhc2VzXG4gKiAtIDIwMjAtMDItMTMgW3RvXSAyMDIwLTAyLTEzXG4gKiAtIFdlZG5lc2RheSBbLV0gRnJpZGF5XG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEVOTWVyZ2VEYXRlUmFuZ2VSZWZpbmVyIGV4dGVuZHMgQWJzdHJhY3RNZXJnZURhdGVSYW5nZVJlZmluZXIge1xuICAgIHBhdHRlcm5CZXR3ZWVuKCk6IFJlZ0V4cCB7XG4gICAgICAgIHJldHVybiAvXlxccyoodG98LXxcdTIwMTN8dW50aWx8dGhyb3VnaHx0aWxsKVxccyokL2k7XG4gICAgfVxufVxuIiwgImltcG9ydCB7IFBhcnNpbmdDb21wb25lbnRzLCBQYXJzaW5nUmVzdWx0IH0gZnJvbSBcIi4uL3Jlc3VsdHNcIjtcbmltcG9ydCB7IE1lcmlkaWVtIH0gZnJvbSBcIi4uL3R5cGVzXCI7XG5pbXBvcnQgeyBhc3NpZ25TaW1pbGFyRGF0ZSwgaW1wbHlTaW1pbGFyRGF0ZSB9IGZyb20gXCIuLi91dGlscy9kYXlqc1wiO1xuXG5leHBvcnQgZnVuY3Rpb24gbWVyZ2VEYXRlVGltZVJlc3VsdChkYXRlUmVzdWx0OiBQYXJzaW5nUmVzdWx0LCB0aW1lUmVzdWx0OiBQYXJzaW5nUmVzdWx0KTogUGFyc2luZ1Jlc3VsdCB7XG4gICAgY29uc3QgcmVzdWx0ID0gZGF0ZVJlc3VsdC5jbG9uZSgpO1xuICAgIGNvbnN0IGJlZ2luRGF0ZSA9IGRhdGVSZXN1bHQuc3RhcnQ7XG4gICAgY29uc3QgYmVnaW5UaW1lID0gdGltZVJlc3VsdC5zdGFydDtcblxuICAgIHJlc3VsdC5zdGFydCA9IG1lcmdlRGF0ZVRpbWVDb21wb25lbnQoYmVnaW5EYXRlLCBiZWdpblRpbWUpO1xuICAgIGlmIChkYXRlUmVzdWx0LmVuZCAhPSBudWxsIHx8IHRpbWVSZXN1bHQuZW5kICE9IG51bGwpIHtcbiAgICAgICAgY29uc3QgZW5kRGF0ZSA9IGRhdGVSZXN1bHQuZW5kID09IG51bGwgPyBkYXRlUmVzdWx0LnN0YXJ0IDogZGF0ZVJlc3VsdC5lbmQ7XG4gICAgICAgIGNvbnN0IGVuZFRpbWUgPSB0aW1lUmVzdWx0LmVuZCA9PSBudWxsID8gdGltZVJlc3VsdC5zdGFydCA6IHRpbWVSZXN1bHQuZW5kO1xuICAgICAgICBjb25zdCBlbmREYXRlVGltZSA9IG1lcmdlRGF0ZVRpbWVDb21wb25lbnQoZW5kRGF0ZSwgZW5kVGltZSk7XG5cbiAgICAgICAgaWYgKGRhdGVSZXN1bHQuZW5kID09IG51bGwgJiYgZW5kRGF0ZVRpbWUuZGF0ZSgpLmdldFRpbWUoKSA8IHJlc3VsdC5zdGFydC5kYXRlKCkuZ2V0VGltZSgpKSB7XG4gICAgICAgICAgICAvLyBGb3IgZXhhbXBsZSwgIFwiVHVlc2RheSA5cG0gLSAxYW1cIiB0aGUgZW5kaW5nIHNob3VsZCBhY3R1YWxseSBiZSAxYW0gb24gdGhlIG5leHQgZGF5LlxuICAgICAgICAgICAgLy8gV2UgbmVlZCB0byBhZGQgdG8gZW5kaW5nIGJ5IGFub3RoZXIgZGF5LlxuICAgICAgICAgICAgY29uc3QgbmV4dERheUpzID0gZW5kRGF0ZVRpbWUuZGF5anMoKS5hZGQoMSwgXCJkYXlcIik7XG4gICAgICAgICAgICBpZiAoZW5kRGF0ZVRpbWUuaXNDZXJ0YWluKFwiZGF5XCIpKSB7XG4gICAgICAgICAgICAgICAgYXNzaWduU2ltaWxhckRhdGUoZW5kRGF0ZVRpbWUsIG5leHREYXlKcyk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGltcGx5U2ltaWxhckRhdGUoZW5kRGF0ZVRpbWUsIG5leHREYXlKcyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXN1bHQuZW5kID0gZW5kRGF0ZVRpbWU7XG4gICAgfVxuXG4gICAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG1lcmdlRGF0ZVRpbWVDb21wb25lbnQoXG4gICAgZGF0ZUNvbXBvbmVudDogUGFyc2luZ0NvbXBvbmVudHMsXG4gICAgdGltZUNvbXBvbmVudDogUGFyc2luZ0NvbXBvbmVudHNcbik6IFBhcnNpbmdDb21wb25lbnRzIHtcbiAgICBjb25zdCBkYXRlVGltZUNvbXBvbmVudCA9IGRhdGVDb21wb25lbnQuY2xvbmUoKTtcblxuICAgIGlmICh0aW1lQ29tcG9uZW50LmlzQ2VydGFpbihcImhvdXJcIikpIHtcbiAgICAgICAgZGF0ZVRpbWVDb21wb25lbnQuYXNzaWduKFwiaG91clwiLCB0aW1lQ29tcG9uZW50LmdldChcImhvdXJcIikpO1xuICAgICAgICBkYXRlVGltZUNvbXBvbmVudC5hc3NpZ24oXCJtaW51dGVcIiwgdGltZUNvbXBvbmVudC5nZXQoXCJtaW51dGVcIikpO1xuXG4gICAgICAgIGlmICh0aW1lQ29tcG9uZW50LmlzQ2VydGFpbihcInNlY29uZFwiKSkge1xuICAgICAgICAgICAgZGF0ZVRpbWVDb21wb25lbnQuYXNzaWduKFwic2Vjb25kXCIsIHRpbWVDb21wb25lbnQuZ2V0KFwic2Vjb25kXCIpKTtcblxuICAgICAgICAgICAgaWYgKHRpbWVDb21wb25lbnQuaXNDZXJ0YWluKFwibWlsbGlzZWNvbmRcIikpIHtcbiAgICAgICAgICAgICAgICBkYXRlVGltZUNvbXBvbmVudC5hc3NpZ24oXCJtaWxsaXNlY29uZFwiLCB0aW1lQ29tcG9uZW50LmdldChcIm1pbGxpc2Vjb25kXCIpKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgZGF0ZVRpbWVDb21wb25lbnQuaW1wbHkoXCJtaWxsaXNlY29uZFwiLCB0aW1lQ29tcG9uZW50LmdldChcIm1pbGxpc2Vjb25kXCIpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGRhdGVUaW1lQ29tcG9uZW50LmltcGx5KFwic2Vjb25kXCIsIHRpbWVDb21wb25lbnQuZ2V0KFwic2Vjb25kXCIpKTtcbiAgICAgICAgICAgIGRhdGVUaW1lQ29tcG9uZW50LmltcGx5KFwibWlsbGlzZWNvbmRcIiwgdGltZUNvbXBvbmVudC5nZXQoXCJtaWxsaXNlY29uZFwiKSk7XG4gICAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgICBkYXRlVGltZUNvbXBvbmVudC5pbXBseShcImhvdXJcIiwgdGltZUNvbXBvbmVudC5nZXQoXCJob3VyXCIpKTtcbiAgICAgICAgZGF0ZVRpbWVDb21wb25lbnQuaW1wbHkoXCJtaW51dGVcIiwgdGltZUNvbXBvbmVudC5nZXQoXCJtaW51dGVcIikpO1xuICAgICAgICBkYXRlVGltZUNvbXBvbmVudC5pbXBseShcInNlY29uZFwiLCB0aW1lQ29tcG9uZW50LmdldChcInNlY29uZFwiKSk7XG4gICAgICAgIGRhdGVUaW1lQ29tcG9uZW50LmltcGx5KFwibWlsbGlzZWNvbmRcIiwgdGltZUNvbXBvbmVudC5nZXQoXCJtaWxsaXNlY29uZFwiKSk7XG4gICAgfVxuXG4gICAgaWYgKHRpbWVDb21wb25lbnQuaXNDZXJ0YWluKFwidGltZXpvbmVPZmZzZXRcIikpIHtcbiAgICAgICAgZGF0ZVRpbWVDb21wb25lbnQuYXNzaWduKFwidGltZXpvbmVPZmZzZXRcIiwgdGltZUNvbXBvbmVudC5nZXQoXCJ0aW1lem9uZU9mZnNldFwiKSk7XG4gICAgfVxuXG4gICAgaWYgKHRpbWVDb21wb25lbnQuaXNDZXJ0YWluKFwibWVyaWRpZW1cIikpIHtcbiAgICAgICAgZGF0ZVRpbWVDb21wb25lbnQuYXNzaWduKFwibWVyaWRpZW1cIiwgdGltZUNvbXBvbmVudC5nZXQoXCJtZXJpZGllbVwiKSk7XG4gICAgfSBlbHNlIGlmICh0aW1lQ29tcG9uZW50LmdldChcIm1lcmlkaWVtXCIpICE9IG51bGwgJiYgZGF0ZVRpbWVDb21wb25lbnQuZ2V0KFwibWVyaWRpZW1cIikgPT0gbnVsbCkge1xuICAgICAgICBkYXRlVGltZUNvbXBvbmVudC5pbXBseShcIm1lcmlkaWVtXCIsIHRpbWVDb21wb25lbnQuZ2V0KFwibWVyaWRpZW1cIikpO1xuICAgIH1cblxuICAgIGlmIChkYXRlVGltZUNvbXBvbmVudC5nZXQoXCJtZXJpZGllbVwiKSA9PSBNZXJpZGllbS5QTSAmJiBkYXRlVGltZUNvbXBvbmVudC5nZXQoXCJob3VyXCIpIDwgMTIpIHtcbiAgICAgICAgaWYgKHRpbWVDb21wb25lbnQuaXNDZXJ0YWluKFwiaG91clwiKSkge1xuICAgICAgICAgICAgZGF0ZVRpbWVDb21wb25lbnQuYXNzaWduKFwiaG91clwiLCBkYXRlVGltZUNvbXBvbmVudC5nZXQoXCJob3VyXCIpICsgMTIpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZGF0ZVRpbWVDb21wb25lbnQuaW1wbHkoXCJob3VyXCIsIGRhdGVUaW1lQ29tcG9uZW50LmdldChcImhvdXJcIikgKyAxMik7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBkYXRlVGltZUNvbXBvbmVudC5hZGRUYWdzKGRhdGVDb21wb25lbnQudGFncygpKTtcbiAgICBkYXRlVGltZUNvbXBvbmVudC5hZGRUYWdzKHRpbWVDb21wb25lbnQudGFncygpKTtcbiAgICByZXR1cm4gZGF0ZVRpbWVDb21wb25lbnQ7XG59XG4iLCAiLypcblxuKi9cblxuaW1wb3J0IHsgTWVyZ2luZ1JlZmluZXIgfSBmcm9tIFwiLi4vYWJzdHJhY3RSZWZpbmVyc1wiO1xuaW1wb3J0IHsgUGFyc2luZ1Jlc3VsdCB9IGZyb20gXCIuLi8uLi9yZXN1bHRzXCI7XG5pbXBvcnQgeyBtZXJnZURhdGVUaW1lUmVzdWx0IH0gZnJvbSBcIi4uLy4uL2NhbGN1bGF0aW9uL21lcmdpbmdDYWxjdWxhdGlvblwiO1xuXG5leHBvcnQgZGVmYXVsdCBhYnN0cmFjdCBjbGFzcyBBYnN0cmFjdE1lcmdlRGF0ZVRpbWVSZWZpbmVyIGV4dGVuZHMgTWVyZ2luZ1JlZmluZXIge1xuICAgIGFic3RyYWN0IHBhdHRlcm5CZXR3ZWVuKCk6IFJlZ0V4cDtcblxuICAgIHNob3VsZE1lcmdlUmVzdWx0cyh0ZXh0QmV0d2Vlbjogc3RyaW5nLCBjdXJyZW50UmVzdWx0OiBQYXJzaW5nUmVzdWx0LCBuZXh0UmVzdWx0OiBQYXJzaW5nUmVzdWx0KTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAoKGN1cnJlbnRSZXN1bHQuc3RhcnQuaXNPbmx5RGF0ZSgpICYmIG5leHRSZXN1bHQuc3RhcnQuaXNPbmx5VGltZSgpKSB8fFxuICAgICAgICAgICAgICAgIChuZXh0UmVzdWx0LnN0YXJ0LmlzT25seURhdGUoKSAmJiBjdXJyZW50UmVzdWx0LnN0YXJ0LmlzT25seVRpbWUoKSkpICYmXG4gICAgICAgICAgICB0ZXh0QmV0d2Vlbi5tYXRjaCh0aGlzLnBhdHRlcm5CZXR3ZWVuKCkpICE9IG51bGxcbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICBtZXJnZVJlc3VsdHModGV4dEJldHdlZW46IHN0cmluZywgY3VycmVudFJlc3VsdDogUGFyc2luZ1Jlc3VsdCwgbmV4dFJlc3VsdDogUGFyc2luZ1Jlc3VsdCk6IFBhcnNpbmdSZXN1bHQge1xuICAgICAgICBjb25zdCByZXN1bHQgPSBjdXJyZW50UmVzdWx0LnN0YXJ0LmlzT25seURhdGUoKVxuICAgICAgICAgICAgPyBtZXJnZURhdGVUaW1lUmVzdWx0KGN1cnJlbnRSZXN1bHQsIG5leHRSZXN1bHQpXG4gICAgICAgICAgICA6IG1lcmdlRGF0ZVRpbWVSZXN1bHQobmV4dFJlc3VsdCwgY3VycmVudFJlc3VsdCk7XG5cbiAgICAgICAgcmVzdWx0LmluZGV4ID0gY3VycmVudFJlc3VsdC5pbmRleDtcbiAgICAgICAgcmVzdWx0LnRleHQgPSBjdXJyZW50UmVzdWx0LnRleHQgKyB0ZXh0QmV0d2VlbiArIG5leHRSZXN1bHQudGV4dDtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG59XG4iLCAiaW1wb3J0IEFic3RyYWN0TWVyZ2VEYXRlVGltZVJlZmluZXIgZnJvbSBcIi4uLy4uLy4uL2NvbW1vbi9yZWZpbmVycy9BYnN0cmFjdE1lcmdlRGF0ZVRpbWVSZWZpbmVyXCI7XG5cbi8qKlxuICogTWVyZ2luZyBkYXRlLW9ubHkgcmVzdWx0IGFuZCB0aW1lLW9ubHkgcmVzdWx0IChzZWUuIEFic3RyYWN0TWVyZ2VEYXRlVGltZVJlZmluZXIpLlxuICogVGhpcyBpbXBsZW1lbnRhdGlvbiBzaG91bGQgcHJvdmlkZSBFbmdsaXNoIGNvbm5lY3RpbmcgcGhhc2VzXG4gKiAtIDIwMjAtMDItMTMgW2F0XSA2cG1cbiAqIC0gVG9tb3Jyb3cgW2FmdGVyXSA3YW1cbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRU5NZXJnZURhdGVUaW1lUmVmaW5lciBleHRlbmRzIEFic3RyYWN0TWVyZ2VEYXRlVGltZVJlZmluZXIge1xuICAgIHBhdHRlcm5CZXR3ZWVuKCk6IFJlZ0V4cCB7XG4gICAgICAgIHJldHVybiBuZXcgUmVnRXhwKFwiXlxcXFxzKihUfGF0fGFmdGVyfGJlZm9yZXxvbnxvZnwsfC18XFxcXC58XHUyMjE5fDopP1xcXFxzKiRcIik7XG4gICAgfVxufVxuIiwgIi8vIE1hcCBBQkJSIC0+IE9mZnNldCBpbiBtaW51dGVcbmltcG9ydCB7IFBhcnNpbmdDb250ZXh0LCBSZWZpbmVyIH0gZnJvbSBcIi4uLy4uL2Nocm9ub1wiO1xuaW1wb3J0IHsgVGltZXpvbmVBYmJyTWFwIH0gZnJvbSBcIi4uLy4uL3R5cGVzXCI7XG5pbXBvcnQgeyBQYXJzaW5nUmVzdWx0IH0gZnJvbSBcIi4uLy4uL3Jlc3VsdHNcIjtcbmltcG9ydCB7IHRvVGltZXpvbmVPZmZzZXQgfSBmcm9tIFwiLi4vLi4vdGltZXpvbmVcIjtcblxuY29uc3QgVElNRVpPTkVfTkFNRV9QQVRURVJOID0gbmV3IFJlZ0V4cChcIl5cXFxccyosP1xcXFxzKlxcXFwoPyhbQS1aXXsyLDR9KVxcXFwpPyg/PVxcXFxXfCQpXCIsIFwiaVwiKTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRXh0cmFjdFRpbWV6b25lQWJiclJlZmluZXIgaW1wbGVtZW50cyBSZWZpbmVyIHtcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJlYWRvbmx5IHRpbWV6b25lT3ZlcnJpZGVzPzogVGltZXpvbmVBYmJyTWFwKSB7fVxuXG4gICAgcmVmaW5lKGNvbnRleHQ6IFBhcnNpbmdDb250ZXh0LCByZXN1bHRzOiBQYXJzaW5nUmVzdWx0W10pOiBQYXJzaW5nUmVzdWx0W10ge1xuICAgICAgICBjb25zdCB0aW1lem9uZU92ZXJyaWRlcyA9IGNvbnRleHQub3B0aW9uLnRpbWV6b25lcyA/PyB7fTtcblxuICAgICAgICByZXN1bHRzLmZvckVhY2goKHJlc3VsdCkgPT4ge1xuICAgICAgICAgICAgY29uc3Qgc3VmZml4ID0gY29udGV4dC50ZXh0LnN1YnN0cmluZyhyZXN1bHQuaW5kZXggKyByZXN1bHQudGV4dC5sZW5ndGgpO1xuICAgICAgICAgICAgY29uc3QgbWF0Y2ggPSBUSU1FWk9ORV9OQU1FX1BBVFRFUk4uZXhlYyhzdWZmaXgpO1xuICAgICAgICAgICAgaWYgKCFtYXRjaCkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY29uc3QgdGltZXpvbmVBYmJyID0gbWF0Y2hbMV0udG9VcHBlckNhc2UoKTtcbiAgICAgICAgICAgIGNvbnN0IHJlZkRhdGUgPSByZXN1bHQuc3RhcnQuZGF0ZSgpID8/IHJlc3VsdC5yZWZEYXRlID8/IG5ldyBEYXRlKCk7XG4gICAgICAgICAgICBjb25zdCB0ek92ZXJyaWRlcyA9IHsgLi4udGhpcy50aW1lem9uZU92ZXJyaWRlcywgLi4udGltZXpvbmVPdmVycmlkZXMgfTtcbiAgICAgICAgICAgIGNvbnN0IGV4dHJhY3RlZFRpbWV6b25lT2Zmc2V0ID0gdG9UaW1lem9uZU9mZnNldCh0aW1lem9uZUFiYnIsIHJlZkRhdGUsIHR6T3ZlcnJpZGVzKTtcbiAgICAgICAgICAgIGlmIChleHRyYWN0ZWRUaW1lem9uZU9mZnNldCA9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29udGV4dC5kZWJ1ZygoKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXG4gICAgICAgICAgICAgICAgICAgIGBFeHRyYWN0aW5nIHRpbWV6b25lOiAnJHt0aW1lem9uZUFiYnJ9JyBpbnRvOiAke2V4dHJhY3RlZFRpbWV6b25lT2Zmc2V0fSBmb3I6ICR7cmVzdWx0LnN0YXJ0fWBcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIGNvbnN0IGN1cnJlbnRUaW1lem9uZU9mZnNldCA9IHJlc3VsdC5zdGFydC5nZXQoXCJ0aW1lem9uZU9mZnNldFwiKTtcbiAgICAgICAgICAgIGlmIChjdXJyZW50VGltZXpvbmVPZmZzZXQgIT09IG51bGwgJiYgZXh0cmFjdGVkVGltZXpvbmVPZmZzZXQgIT0gY3VycmVudFRpbWV6b25lT2Zmc2V0KSB7XG4gICAgICAgICAgICAgICAgLy8gV2UgbWF5IGFscmVhZHkgaGF2ZSBleHRyYWN0ZWQgdGhlIHRpbWV6b25lIG9mZnNldCBlLmcuIFwiMTEgYW0gR01UKzA5MDAgKEpTVClcIlxuICAgICAgICAgICAgICAgIC8vIC0gaWYgdGhleSBhcmUgZXF1YWwsIHdlIGFsc28gd2FudCB0byB0YWtlIHRoZSBhYmJyZXZpYXRpb24gdGV4dCBpbnRvIHJlc3VsdFxuICAgICAgICAgICAgICAgIC8vIC0gaWYgdGhleSBhcmUgbm90IGVxdWFsLCB3ZSB0cnVzdCB0aGUgb2Zmc2V0IG1vcmVcbiAgICAgICAgICAgICAgICBpZiAocmVzdWx0LnN0YXJ0LmlzQ2VydGFpbihcInRpbWV6b25lT2Zmc2V0XCIpKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAvLyBUaGlzIGlzIG9mdGVuIGJlY2F1c2UgaXQncyByZWxhdGl2ZSB0aW1lIHdpdGggaW5mZXJyZWQgdGltZXpvbmUgKGUuZy4gaW4gMSBob3VyLCB0b21vcnJvdylcbiAgICAgICAgICAgICAgICAvLyBUaGVuLCB3ZSB3YW50IHRvIGRvdWJsZS1jaGVjayB0aGUgYWJiciBjYXNlIChlLmcuIFwiR0VUXCIgbm90IFwiZ2V0XCIpXG4gICAgICAgICAgICAgICAgaWYgKHRpbWV6b25lQWJiciAhPSBtYXRjaFsxXSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAocmVzdWx0LnN0YXJ0LmlzT25seURhdGUoKSkge1xuICAgICAgICAgICAgICAgIC8vIElmIHRoZSB0aW1lIGlzIG5vdCBleHBsaWNpdGx5IG1lbnRpb25lZCxcbiAgICAgICAgICAgICAgICAvLyBUaGVuLCB3ZSBhbHNvIHdhbnQgdG8gZG91YmxlLWNoZWNrIHRoZSBhYmJyIGNhc2UgKGUuZy4gXCJHRVRcIiBub3QgXCJnZXRcIilcbiAgICAgICAgICAgICAgICBpZiAodGltZXpvbmVBYmJyICE9IG1hdGNoWzFdKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJlc3VsdC50ZXh0ICs9IG1hdGNoWzBdO1xuXG4gICAgICAgICAgICBpZiAoIXJlc3VsdC5zdGFydC5pc0NlcnRhaW4oXCJ0aW1lem9uZU9mZnNldFwiKSkge1xuICAgICAgICAgICAgICAgIHJlc3VsdC5zdGFydC5hc3NpZ24oXCJ0aW1lem9uZU9mZnNldFwiLCBleHRyYWN0ZWRUaW1lem9uZU9mZnNldCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChyZXN1bHQuZW5kICE9IG51bGwgJiYgIXJlc3VsdC5lbmQuaXNDZXJ0YWluKFwidGltZXpvbmVPZmZzZXRcIikpIHtcbiAgICAgICAgICAgICAgICByZXN1bHQuZW5kLmFzc2lnbihcInRpbWV6b25lT2Zmc2V0XCIsIGV4dHJhY3RlZFRpbWV6b25lT2Zmc2V0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdHM7XG4gICAgfVxufVxuIiwgImltcG9ydCB7IFBhcnNpbmdDb250ZXh0LCBSZWZpbmVyIH0gZnJvbSBcIi4uLy4uL2Nocm9ub1wiO1xuaW1wb3J0IHsgUGFyc2luZ1Jlc3VsdCB9IGZyb20gXCIuLi8uLi9yZXN1bHRzXCI7XG5cbmNvbnN0IFRJTUVaT05FX09GRlNFVF9QQVRURVJOID0gbmV3IFJlZ0V4cChcIl5cXFxccyooPzpcXFxcKD8oPzpHTVR8VVRDKVxcXFxzPyk/KFsrLV0pKFxcXFxkezEsMn0pKD86Oj8oXFxcXGR7Mn0pKT9cXFxcKT9cIiwgXCJpXCIpO1xuY29uc3QgVElNRVpPTkVfT0ZGU0VUX1NJR05fR1JPVVAgPSAxO1xuY29uc3QgVElNRVpPTkVfT0ZGU0VUX0hPVVJfT0ZGU0VUX0dST1VQID0gMjtcbmNvbnN0IFRJTUVaT05FX09GRlNFVF9NSU5VVEVfT0ZGU0VUX0dST1VQID0gMztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRXh0cmFjdFRpbWV6b25lT2Zmc2V0UmVmaW5lciBpbXBsZW1lbnRzIFJlZmluZXIge1xuICAgIHJlZmluZShjb250ZXh0OiBQYXJzaW5nQ29udGV4dCwgcmVzdWx0czogUGFyc2luZ1Jlc3VsdFtdKTogUGFyc2luZ1Jlc3VsdFtdIHtcbiAgICAgICAgcmVzdWx0cy5mb3JFYWNoKGZ1bmN0aW9uIChyZXN1bHQpIHtcbiAgICAgICAgICAgIGlmIChyZXN1bHQuc3RhcnQuaXNDZXJ0YWluKFwidGltZXpvbmVPZmZzZXRcIikpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGNvbnN0IHN1ZmZpeCA9IGNvbnRleHQudGV4dC5zdWJzdHJpbmcocmVzdWx0LmluZGV4ICsgcmVzdWx0LnRleHQubGVuZ3RoKTtcbiAgICAgICAgICAgIGNvbnN0IG1hdGNoID0gVElNRVpPTkVfT0ZGU0VUX1BBVFRFUk4uZXhlYyhzdWZmaXgpO1xuICAgICAgICAgICAgaWYgKCFtYXRjaCkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY29udGV4dC5kZWJ1ZygoKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coYEV4dHJhY3RpbmcgdGltZXpvbmU6ICcke21hdGNoWzBdfScgaW50byA6ICR7cmVzdWx0fWApO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIGNvbnN0IGhvdXJPZmZzZXQgPSBwYXJzZUludChtYXRjaFtUSU1FWk9ORV9PRkZTRVRfSE9VUl9PRkZTRVRfR1JPVVBdKTtcbiAgICAgICAgICAgIGNvbnN0IG1pbnV0ZU9mZnNldCA9IHBhcnNlSW50KG1hdGNoW1RJTUVaT05FX09GRlNFVF9NSU5VVEVfT0ZGU0VUX0dST1VQXSB8fCBcIjBcIik7XG4gICAgICAgICAgICBsZXQgdGltZXpvbmVPZmZzZXQgPSBob3VyT2Zmc2V0ICogNjAgKyBtaW51dGVPZmZzZXQ7XG4gICAgICAgICAgICAvLyBObyB0aW1lem9uZXMgaGF2ZSBvZmZzZXRzIGdyZWF0ZXIgdGhhbiAxNCBob3Vycywgc28gZGlzcmVnYXJkIHRoaXMgbWF0Y2hcbiAgICAgICAgICAgIGlmICh0aW1lem9uZU9mZnNldCA+IDE0ICogNjApIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAobWF0Y2hbVElNRVpPTkVfT0ZGU0VUX1NJR05fR1JPVVBdID09PSBcIi1cIikge1xuICAgICAgICAgICAgICAgIHRpbWV6b25lT2Zmc2V0ID0gLXRpbWV6b25lT2Zmc2V0O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAocmVzdWx0LmVuZCAhPSBudWxsKSB7XG4gICAgICAgICAgICAgICAgcmVzdWx0LmVuZC5hc3NpZ24oXCJ0aW1lem9uZU9mZnNldFwiLCB0aW1lem9uZU9mZnNldCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJlc3VsdC5zdGFydC5hc3NpZ24oXCJ0aW1lem9uZU9mZnNldFwiLCB0aW1lem9uZU9mZnNldCk7XG4gICAgICAgICAgICByZXN1bHQudGV4dCArPSBtYXRjaFswXTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdHM7XG4gICAgfVxufVxuIiwgIi8qXG4gIFxuKi9cblxuaW1wb3J0IHsgUGFyc2luZ0NvbnRleHQsIFJlZmluZXIgfSBmcm9tIFwiLi4vLi4vY2hyb25vXCI7XG5pbXBvcnQgeyBQYXJzaW5nUmVzdWx0IH0gZnJvbSBcIi4uLy4uL3Jlc3VsdHNcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgT3ZlcmxhcFJlbW92YWxSZWZpbmVyIGltcGxlbWVudHMgUmVmaW5lciB7XG4gICAgcmVmaW5lKGNvbnRleHQ6IFBhcnNpbmdDb250ZXh0LCByZXN1bHRzOiBQYXJzaW5nUmVzdWx0W10pOiBQYXJzaW5nUmVzdWx0W10ge1xuICAgICAgICBpZiAocmVzdWx0cy5sZW5ndGggPCAyKSB7XG4gICAgICAgICAgICByZXR1cm4gcmVzdWx0cztcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGZpbHRlcmVkUmVzdWx0cyA9IFtdO1xuICAgICAgICBsZXQgcHJldlJlc3VsdCA9IHJlc3VsdHNbMF07XG4gICAgICAgIGZvciAobGV0IGkgPSAxOyBpIDwgcmVzdWx0cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gcmVzdWx0c1tpXTtcbiAgICAgICAgICAgIGlmIChyZXN1bHQuaW5kZXggPj0gcHJldlJlc3VsdC5pbmRleCArIHByZXZSZXN1bHQudGV4dC5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICBmaWx0ZXJlZFJlc3VsdHMucHVzaChwcmV2UmVzdWx0KTtcbiAgICAgICAgICAgICAgICBwcmV2UmVzdWx0ID0gcmVzdWx0O1xuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBJZiBvdmVybGFwLCBjb21wYXJlIHRoZSBsZW5ndGggYW5kIGRpc2NhcmQgdGhlIHNob3J0ZXIgb25lXG4gICAgICAgICAgICBsZXQga2VwdCA9IG51bGw7XG4gICAgICAgICAgICBsZXQgcmVtb3ZlZCA9IG51bGw7XG4gICAgICAgICAgICBpZiAocmVzdWx0LnRleHQubGVuZ3RoID4gcHJldlJlc3VsdC50ZXh0Lmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIGtlcHQgPSByZXN1bHQ7XG4gICAgICAgICAgICAgICAgcmVtb3ZlZCA9IHByZXZSZXN1bHQ7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGtlcHQgPSBwcmV2UmVzdWx0O1xuICAgICAgICAgICAgICAgIHJlbW92ZWQgPSByZXN1bHQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb250ZXh0LmRlYnVnKCgpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhgJHt0aGlzLmNvbnN0cnVjdG9yLm5hbWV9IHJlbW92ZSAke3JlbW92ZWR9IGJ5ICR7a2VwdH1gKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgcHJldlJlc3VsdCA9IGtlcHQ7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBUaGUgbGFzdCBvbmVcbiAgICAgICAgaWYgKHByZXZSZXN1bHQgIT0gbnVsbCkge1xuICAgICAgICAgICAgZmlsdGVyZWRSZXN1bHRzLnB1c2gocHJldlJlc3VsdCk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gZmlsdGVyZWRSZXN1bHRzO1xuICAgIH1cbn1cbiIsICIvKlxuICAgIEVuZm9yY2UgJ2ZvcndhcmREYXRlJyBvcHRpb24gdG8gb24gdGhlIHJlc3VsdHMuIFdoZW4gdGhlcmUgYXJlIG1pc3NpbmcgY29tcG9uZW50LFxuICAgIGUuZy4gXCJNYXJjaCAxMi0xMyAod2l0aG91dCB5ZWFyKVwiIG9yIFwiVGh1cnNkYXlcIiwgdGhlIHJlZmluZXIgd2lsbCB0cnkgdG8gYWRqdXN0IHRoZSByZXN1bHRcbiAgICBpbnRvIHRoZSBmdXR1cmUgaW5zdGVhZCBvZiB0aGUgcGFzdC5cbiovXG5cbmltcG9ydCB7IFBhcnNpbmdDb250ZXh0LCBSZWZpbmVyIH0gZnJvbSBcIi4uLy4uL2Nocm9ub1wiO1xuaW1wb3J0IHsgUGFyc2luZ1Jlc3VsdCB9IGZyb20gXCIuLi8uLi9yZXN1bHRzXCI7XG5pbXBvcnQgZGF5anMgZnJvbSBcImRheWpzXCI7XG5pbXBvcnQgeyBpbXBseVNpbWlsYXJEYXRlIH0gZnJvbSBcIi4uLy4uL3V0aWxzL2RheWpzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEZvcndhcmREYXRlUmVmaW5lciBpbXBsZW1lbnRzIFJlZmluZXIge1xuICAgIHJlZmluZShjb250ZXh0OiBQYXJzaW5nQ29udGV4dCwgcmVzdWx0czogUGFyc2luZ1Jlc3VsdFtdKTogUGFyc2luZ1Jlc3VsdFtdIHtcbiAgICAgICAgaWYgKCFjb250ZXh0Lm9wdGlvbi5mb3J3YXJkRGF0ZSkge1xuICAgICAgICAgICAgcmV0dXJuIHJlc3VsdHM7XG4gICAgICAgIH1cblxuICAgICAgICByZXN1bHRzLmZvckVhY2goKHJlc3VsdCkgPT4ge1xuICAgICAgICAgICAgbGV0IHJlZk1vbWVudCA9IGRheWpzKGNvbnRleHQucmVmRGF0ZSk7XG5cbiAgICAgICAgICAgIGlmIChyZXN1bHQuc3RhcnQuaXNPbmx5VGltZSgpICYmIHJlZk1vbWVudC5pc0FmdGVyKHJlc3VsdC5zdGFydC5kYXlqcygpKSkge1xuICAgICAgICAgICAgICAgIHJlZk1vbWVudCA9IHJlZk1vbWVudC5hZGQoMSwgXCJkYXlcIik7XG4gICAgICAgICAgICAgICAgaW1wbHlTaW1pbGFyRGF0ZShyZXN1bHQuc3RhcnQsIHJlZk1vbWVudCk7XG4gICAgICAgICAgICAgICAgaWYgKHJlc3VsdC5lbmQgJiYgcmVzdWx0LmVuZC5pc09ubHlUaW1lKCkpIHtcbiAgICAgICAgICAgICAgICAgICAgaW1wbHlTaW1pbGFyRGF0ZShyZXN1bHQuZW5kLCByZWZNb21lbnQpO1xuICAgICAgICAgICAgICAgICAgICBpZiAocmVzdWx0LnN0YXJ0LmRheWpzKCkuaXNBZnRlcihyZXN1bHQuZW5kLmRheWpzKCkpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZWZNb21lbnQgPSByZWZNb21lbnQuYWRkKDEsIFwiZGF5XCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaW1wbHlTaW1pbGFyRGF0ZShyZXN1bHQuZW5kLCByZWZNb21lbnQpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNvbnRleHQuZGVidWcoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhgJHt0aGlzLmNvbnN0cnVjdG9yLm5hbWV9IGFkanVzdGVkICR7cmVzdWx0fSB0aW1lIHJlc3VsdCAoJHtyZXN1bHQuc3RhcnR9KWApO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAocmVzdWx0LnN0YXJ0LmlzT25seVdlZWtkYXlDb21wb25lbnQoKSAmJiByZWZNb21lbnQuaXNBZnRlcihyZXN1bHQuc3RhcnQuZGF5anMoKSkpIHtcbiAgICAgICAgICAgICAgICBpZiAocmVmTW9tZW50LmRheSgpID49IHJlc3VsdC5zdGFydC5nZXQoXCJ3ZWVrZGF5XCIpKSB7XG4gICAgICAgICAgICAgICAgICAgIHJlZk1vbWVudCA9IHJlZk1vbWVudC5kYXkocmVzdWx0LnN0YXJ0LmdldChcIndlZWtkYXlcIikgKyA3KTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICByZWZNb21lbnQgPSByZWZNb21lbnQuZGF5KDxudW1iZXI+cmVzdWx0LnN0YXJ0LmdldChcIndlZWtkYXlcIikpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHJlc3VsdC5zdGFydC5pbXBseShcImRheVwiLCByZWZNb21lbnQuZGF0ZSgpKTtcbiAgICAgICAgICAgICAgICByZXN1bHQuc3RhcnQuaW1wbHkoXCJtb250aFwiLCByZWZNb21lbnQubW9udGgoKSArIDEpO1xuICAgICAgICAgICAgICAgIHJlc3VsdC5zdGFydC5pbXBseShcInllYXJcIiwgcmVmTW9tZW50LnllYXIoKSk7XG4gICAgICAgICAgICAgICAgY29udGV4dC5kZWJ1ZygoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGAke3RoaXMuY29uc3RydWN0b3IubmFtZX0gYWRqdXN0ZWQgJHtyZXN1bHR9IHdlZWtkYXkgKCR7cmVzdWx0LnN0YXJ0fSlgKTtcbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgIGlmIChyZXN1bHQuZW5kICYmIHJlc3VsdC5lbmQuaXNPbmx5V2Vla2RheUNvbXBvbmVudCgpKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIEFkanVzdCBkYXRlIHRvIHRoZSBjb21pbmcgd2Vla1xuICAgICAgICAgICAgICAgICAgICBpZiAocmVmTW9tZW50LmRheSgpID4gcmVzdWx0LmVuZC5nZXQoXCJ3ZWVrZGF5XCIpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZWZNb21lbnQgPSByZWZNb21lbnQuZGF5KHJlc3VsdC5lbmQuZ2V0KFwid2Vla2RheVwiKSArIDcpO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVmTW9tZW50ID0gcmVmTW9tZW50LmRheSg8bnVtYmVyPnJlc3VsdC5lbmQuZ2V0KFwid2Vla2RheVwiKSk7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICByZXN1bHQuZW5kLmltcGx5KFwiZGF5XCIsIHJlZk1vbWVudC5kYXRlKCkpO1xuICAgICAgICAgICAgICAgICAgICByZXN1bHQuZW5kLmltcGx5KFwibW9udGhcIiwgcmVmTW9tZW50Lm1vbnRoKCkgKyAxKTtcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0LmVuZC5pbXBseShcInllYXJcIiwgcmVmTW9tZW50LnllYXIoKSk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnRleHQuZGVidWcoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coYCR7dGhpcy5jb25zdHJ1Y3Rvci5uYW1lfSBhZGp1c3RlZCAke3Jlc3VsdH0gd2Vla2RheSAoJHtyZXN1bHQuZW5kfSlgKTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBJbiBjYXNlIHdoZXJlIHdlIGtub3cgdGhlIG1vbnRoLCBidXQgbm90IHdoaWNoIHllYXIgKGUuZy4gXCJpbiBEZWNlbWJlclwiLCBcIjI1dGggRGVjZW1iZXJcIiksXG4gICAgICAgICAgICAvLyB0cnkgbW92ZSB0byBhbm90aGVyIHllYXJcbiAgICAgICAgICAgIGlmIChyZXN1bHQuc3RhcnQuaXNEYXRlV2l0aFVua25vd25ZZWFyKCkgJiYgcmVmTW9tZW50LmlzQWZ0ZXIocmVzdWx0LnN0YXJ0LmRheWpzKCkpKSB7XG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCAzICYmIHJlZk1vbWVudC5pc0FmdGVyKHJlc3VsdC5zdGFydC5kYXlqcygpKTsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdC5zdGFydC5pbXBseShcInllYXJcIiwgcmVzdWx0LnN0YXJ0LmdldChcInllYXJcIikgKyAxKTtcbiAgICAgICAgICAgICAgICAgICAgY29udGV4dC5kZWJ1ZygoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhgJHt0aGlzLmNvbnN0cnVjdG9yLm5hbWV9IGFkanVzdGVkICR7cmVzdWx0fSB5ZWFyICgke3Jlc3VsdC5zdGFydH0pYCk7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgICAgIGlmIChyZXN1bHQuZW5kICYmICFyZXN1bHQuZW5kLmlzQ2VydGFpbihcInllYXJcIikpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdC5lbmQuaW1wbHkoXCJ5ZWFyXCIsIHJlc3VsdC5lbmQuZ2V0KFwieWVhclwiKSArIDEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29udGV4dC5kZWJ1ZygoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coYCR7dGhpcy5jb25zdHJ1Y3Rvci5uYW1lfSBhZGp1c3RlZCAke3Jlc3VsdH0gbW9udGggKCR7cmVzdWx0LnN0YXJ0fSlgKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gcmVzdWx0cztcbiAgICB9XG59XG4iLCAiaW1wb3J0IHsgRmlsdGVyIH0gZnJvbSBcIi4uL2Fic3RyYWN0UmVmaW5lcnNcIjtcbmltcG9ydCB7IFBhcnNpbmdSZXN1bHQgfSBmcm9tIFwiLi4vLi4vcmVzdWx0c1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBVbmxpa2VseUZvcm1hdEZpbHRlciBleHRlbmRzIEZpbHRlciB7XG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBzdHJpY3RNb2RlOiBib29sZWFuKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgfVxuXG4gICAgaXNWYWxpZChjb250ZXh0LCByZXN1bHQ6IFBhcnNpbmdSZXN1bHQpOiBib29sZWFuIHtcbiAgICAgICAgaWYgKHJlc3VsdC50ZXh0LnJlcGxhY2UoXCIgXCIsIFwiXCIpLm1hdGNoKC9eXFxkKihcXC5cXGQqKT8kLykpIHtcbiAgICAgICAgICAgIGNvbnRleHQuZGVidWcoKCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGBSZW1vdmluZyB1bmxpa2VseSByZXN1bHQgJyR7cmVzdWx0LnRleHR9J2ApO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghcmVzdWx0LnN0YXJ0LmlzVmFsaWREYXRlKCkpIHtcbiAgICAgICAgICAgIGNvbnRleHQuZGVidWcoKCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGBSZW1vdmluZyBpbnZhbGlkIHJlc3VsdDogJHtyZXN1bHR9ICgke3Jlc3VsdC5zdGFydH0pYCk7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHJlc3VsdC5lbmQgJiYgIXJlc3VsdC5lbmQuaXNWYWxpZERhdGUoKSkge1xuICAgICAgICAgICAgY29udGV4dC5kZWJ1ZygoKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coYFJlbW92aW5nIGludmFsaWQgcmVzdWx0OiAke3Jlc3VsdH0gKCR7cmVzdWx0LmVuZH0pYCk7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMuc3RyaWN0TW9kZSkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuaXNTdHJpY3RNb2RlVmFsaWQoY29udGV4dCwgcmVzdWx0KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIHByaXZhdGUgaXNTdHJpY3RNb2RlVmFsaWQoY29udGV4dCwgcmVzdWx0OiBQYXJzaW5nUmVzdWx0KSB7XG4gICAgICAgIGlmIChyZXN1bHQuc3RhcnQuaXNPbmx5V2Vla2RheUNvbXBvbmVudCgpKSB7XG4gICAgICAgICAgICBjb250ZXh0LmRlYnVnKCgpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhgKFN0cmljdCkgUmVtb3Zpbmcgd2Vla2RheSBvbmx5IGNvbXBvbmVudDogJHtyZXN1bHR9ICgke3Jlc3VsdC5lbmR9KWApO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChyZXN1bHQuc3RhcnQuaXNPbmx5VGltZSgpICYmICghcmVzdWx0LnN0YXJ0LmlzQ2VydGFpbihcImhvdXJcIikgfHwgIXJlc3VsdC5zdGFydC5pc0NlcnRhaW4oXCJtaW51dGVcIikpKSB7XG4gICAgICAgICAgICBjb250ZXh0LmRlYnVnKCgpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhgKFN0cmljdCkgUmVtb3ZpbmcgdW5jZXJ0YWluIHRpbWUgY29tcG9uZW50OiAke3Jlc3VsdH0gKCR7cmVzdWx0LmVuZH0pYCk7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxufVxuIiwgImltcG9ydCB7IFBhcnNpbmdDb250ZXh0IH0gZnJvbSBcIi4uLy4uL2Nocm9ub1wiO1xuaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSBcIi4uLy4uL3R5cGVzXCI7XG5pbXBvcnQgeyBBYnN0cmFjdFBhcnNlcldpdGhXb3JkQm91bmRhcnlDaGVja2luZyB9IGZyb20gXCIuL0Fic3RyYWN0UGFyc2VyV2l0aFdvcmRCb3VuZGFyeVwiO1xuXG4vLyBJU08gODYwMVxuLy8gaHR0cDovL3d3dy53My5vcmcvVFIvTk9URS1kYXRldGltZVxuLy8gLSBZWVlZLU1NLUREXG4vLyAtIFlZWVktTU0tRERUaGg6bW1UWkRcbi8vIC0gWVlZWS1NTS1ERFRoaDptbTpzc1RaRFxuLy8gLSBZWVlZLU1NLUREVGhoOm1tOnNzLnNUWkRcbi8vIC0gVFpEID0gKFogb3IgK2hoOm1tIG9yIC1oaDptbSlcblxuLy8gcHJldHRpZXItaWdub3JlXG5jb25zdCBQQVRURVJOID0gbmV3IFJlZ0V4cChcbiAgICBcIihbMC05XXs0fSlcXFxcLShbMC05XXsxLDJ9KVxcXFwtKFswLTldezEsMn0pXCIgK1xuICAgIFwiKD86VFwiICsgLy8uLlxuICAgICAgICBcIihbMC05XXsxLDJ9KTooWzAtOV17MSwyfSlcIiArIC8vIGhoOm1tXG4gICAgICAgIFwiKD86XCIgK1xuICAgICAgICAgICAgXCI6KFswLTldezEsMn0pKD86XFxcXC4oXFxcXGR7MSw0fSkpP1wiICtcbiAgICAgICAgXCIpP1wiICsgLy8gOnNzLnNcbiAgICAgICAgXCIoXCIgK1xuICAgICAgICAgICAgXCJafChbKy1dXFxcXGR7Mn0pOj8oXFxcXGR7Mn0pP1wiICtcbiAgICAgICAgXCIpP1wiICsgLy8gVFpEIChaIG9yIFx1MDBCMWhoOm1tIG9yIFx1MDBCMWhobW0gb3IgXHUwMEIxaGgpXG4gICAgXCIpP1wiICtcbiAgICBcIig/PVxcXFxXfCQpXCIsXG4gICAgXCJpXCJcbik7XG5cbmNvbnN0IFlFQVJfTlVNQkVSX0dST1VQID0gMTtcbmNvbnN0IE1PTlRIX05VTUJFUl9HUk9VUCA9IDI7XG5jb25zdCBEQVRFX05VTUJFUl9HUk9VUCA9IDM7XG5jb25zdCBIT1VSX05VTUJFUl9HUk9VUCA9IDQ7XG5jb25zdCBNSU5VVEVfTlVNQkVSX0dST1VQID0gNTtcbmNvbnN0IFNFQ09ORF9OVU1CRVJfR1JPVVAgPSA2O1xuY29uc3QgTUlMTElTRUNPTkRfTlVNQkVSX0dST1VQID0gNztcbmNvbnN0IFRaRF9HUk9VUCA9IDg7XG5jb25zdCBUWkRfSE9VUl9PRkZTRVRfR1JPVVAgPSA5O1xuY29uc3QgVFpEX01JTlVURV9PRkZTRVRfR1JPVVAgPSAxMDtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSVNPRm9ybWF0UGFyc2VyIGV4dGVuZHMgQWJzdHJhY3RQYXJzZXJXaXRoV29yZEJvdW5kYXJ5Q2hlY2tpbmcge1xuICAgIGlubmVyUGF0dGVybigpOiBSZWdFeHAge1xuICAgICAgICByZXR1cm4gUEFUVEVSTjtcbiAgICB9XG5cbiAgICBpbm5lckV4dHJhY3QoY29udGV4dDogUGFyc2luZ0NvbnRleHQsIG1hdGNoOiBSZWdFeHBNYXRjaEFycmF5KSB7XG4gICAgICAgIGNvbnN0IGNvbXBvbmVudHMgPSBjb250ZXh0LmNyZWF0ZVBhcnNpbmdDb21wb25lbnRzKHtcbiAgICAgICAgICAgIFwieWVhclwiOiBwYXJzZUludChtYXRjaFtZRUFSX05VTUJFUl9HUk9VUF0pLFxuICAgICAgICAgICAgXCJtb250aFwiOiBwYXJzZUludChtYXRjaFtNT05USF9OVU1CRVJfR1JPVVBdKSxcbiAgICAgICAgICAgIFwiZGF5XCI6IHBhcnNlSW50KG1hdGNoW0RBVEVfTlVNQkVSX0dST1VQXSksXG4gICAgICAgIH0pO1xuICAgICAgICBpZiAobWF0Y2hbSE9VUl9OVU1CRVJfR1JPVVBdICE9IG51bGwpIHtcbiAgICAgICAgICAgIGNvbXBvbmVudHMuYXNzaWduKFwiaG91clwiLCBwYXJzZUludChtYXRjaFtIT1VSX05VTUJFUl9HUk9VUF0pKTtcbiAgICAgICAgICAgIGNvbXBvbmVudHMuYXNzaWduKFwibWludXRlXCIsIHBhcnNlSW50KG1hdGNoW01JTlVURV9OVU1CRVJfR1JPVVBdKSk7XG5cbiAgICAgICAgICAgIGlmIChtYXRjaFtTRUNPTkRfTlVNQkVSX0dST1VQXSAhPSBudWxsKSB7XG4gICAgICAgICAgICAgICAgY29tcG9uZW50cy5hc3NpZ24oXCJzZWNvbmRcIiwgcGFyc2VJbnQobWF0Y2hbU0VDT05EX05VTUJFUl9HUk9VUF0pKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKG1hdGNoW01JTExJU0VDT05EX05VTUJFUl9HUk9VUF0gIT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIGNvbXBvbmVudHMuYXNzaWduKFwibWlsbGlzZWNvbmRcIiwgcGFyc2VJbnQobWF0Y2hbTUlMTElTRUNPTkRfTlVNQkVSX0dST1VQXSkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKG1hdGNoW1RaRF9HUk9VUF0gIT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIC8vIFRoZSBadWx1IHRpbWUgem9uZSAoWikgaXMgZXF1aXZhbGVudCB0byBVVENcbiAgICAgICAgICAgICAgICBsZXQgb2Zmc2V0ID0gMDtcbiAgICAgICAgICAgICAgICBpZiAobWF0Y2hbVFpEX0hPVVJfT0ZGU0VUX0dST1VQXSkge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBob3VyT2Zmc2V0ID0gcGFyc2VJbnQobWF0Y2hbVFpEX0hPVVJfT0ZGU0VUX0dST1VQXSk7XG4gICAgICAgICAgICAgICAgICAgIGxldCBtaW51dGVPZmZzZXQgPSAwO1xuICAgICAgICAgICAgICAgICAgICBpZiAobWF0Y2hbVFpEX01JTlVURV9PRkZTRVRfR1JPVVBdICE9IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1pbnV0ZU9mZnNldCA9IHBhcnNlSW50KG1hdGNoW1RaRF9NSU5VVEVfT0ZGU0VUX0dST1VQXSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgb2Zmc2V0ID0gaG91ck9mZnNldCAqIDYwO1xuICAgICAgICAgICAgICAgICAgICBpZiAob2Zmc2V0IDwgMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgb2Zmc2V0IC09IG1pbnV0ZU9mZnNldDtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG9mZnNldCArPSBtaW51dGVPZmZzZXQ7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY29tcG9uZW50cy5hc3NpZ24oXCJ0aW1lem9uZU9mZnNldFwiLCBvZmZzZXQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBjb21wb25lbnRzLmFkZFRhZyhcInBhcnNlci9JU09Gb3JtYXRQYXJzZXJcIik7XG4gICAgfVxufVxuIiwgIi8qXG4gIFxuKi9cblxuaW1wb3J0IHsgTWVyZ2luZ1JlZmluZXIgfSBmcm9tIFwiLi4vYWJzdHJhY3RSZWZpbmVyc1wiO1xuaW1wb3J0IHsgUGFyc2luZ1Jlc3VsdCB9IGZyb20gXCIuLi8uLi9yZXN1bHRzXCI7XG5cbi8qKlxuICogTWVyZ2Ugd2Vla2RheSBjb21wb25lbnQgaW50byBtb3JlIGNvbXBsZXRlZCBkYXRhXG4gKiAtIFtTdW5kYXldIFsxMi83LzIwMTRdID0+IFtTdW5kYXkgMTIvNy8yMDE0XVxuICogLSBbVHVlc2RheV0sIFtKYW51YXJ5IDEzLCAyMDEyXSA9PiBbU3VuZGF5IDEyLzcvMjAxNF1cbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWVyZ2VXZWVrZGF5Q29tcG9uZW50UmVmaW5lciBleHRlbmRzIE1lcmdpbmdSZWZpbmVyIHtcbiAgICBtZXJnZVJlc3VsdHModGV4dEJldHdlZW46IHN0cmluZywgY3VycmVudFJlc3VsdDogUGFyc2luZ1Jlc3VsdCwgbmV4dFJlc3VsdDogUGFyc2luZ1Jlc3VsdCk6IFBhcnNpbmdSZXN1bHQge1xuICAgICAgICBjb25zdCBuZXdSZXN1bHQgPSBuZXh0UmVzdWx0LmNsb25lKCk7XG4gICAgICAgIG5ld1Jlc3VsdC5pbmRleCA9IGN1cnJlbnRSZXN1bHQuaW5kZXg7XG4gICAgICAgIG5ld1Jlc3VsdC50ZXh0ID0gY3VycmVudFJlc3VsdC50ZXh0ICsgdGV4dEJldHdlZW4gKyBuZXdSZXN1bHQudGV4dDtcblxuICAgICAgICBuZXdSZXN1bHQuc3RhcnQuYXNzaWduKFwid2Vla2RheVwiLCBjdXJyZW50UmVzdWx0LnN0YXJ0LmdldChcIndlZWtkYXlcIikpO1xuICAgICAgICBpZiAobmV3UmVzdWx0LmVuZCkge1xuICAgICAgICAgICAgbmV3UmVzdWx0LmVuZC5hc3NpZ24oXCJ3ZWVrZGF5XCIsIGN1cnJlbnRSZXN1bHQuc3RhcnQuZ2V0KFwid2Vla2RheVwiKSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gbmV3UmVzdWx0O1xuICAgIH1cblxuICAgIHNob3VsZE1lcmdlUmVzdWx0cyh0ZXh0QmV0d2Vlbjogc3RyaW5nLCBjdXJyZW50UmVzdWx0OiBQYXJzaW5nUmVzdWx0LCBuZXh0UmVzdWx0OiBQYXJzaW5nUmVzdWx0KTogYm9vbGVhbiB7XG4gICAgICAgIGNvbnN0IHdlZWtkYXlUaGVuTm9ybWFsRGF0ZSA9XG4gICAgICAgICAgICBjdXJyZW50UmVzdWx0LnN0YXJ0LmlzT25seVdlZWtkYXlDb21wb25lbnQoKSAmJlxuICAgICAgICAgICAgIWN1cnJlbnRSZXN1bHQuc3RhcnQuaXNDZXJ0YWluKFwiaG91clwiKSAmJlxuICAgICAgICAgICAgbmV4dFJlc3VsdC5zdGFydC5pc0NlcnRhaW4oXCJkYXlcIik7XG4gICAgICAgIHJldHVybiB3ZWVrZGF5VGhlbk5vcm1hbERhdGUgJiYgdGV4dEJldHdlZW4ubWF0Y2goL14sP1xccyokLykgIT0gbnVsbDtcbiAgICB9XG59XG4iLCAiaW1wb3J0IHsgQ29uZmlndXJhdGlvbiwgUGFyc2VyLCBSZWZpbmVyIH0gZnJvbSBcIi4vY2hyb25vXCI7XG5cbmltcG9ydCBFeHRyYWN0VGltZXpvbmVBYmJyUmVmaW5lciBmcm9tIFwiLi9jb21tb24vcmVmaW5lcnMvRXh0cmFjdFRpbWV6b25lQWJiclJlZmluZXJcIjtcbmltcG9ydCBFeHRyYWN0VGltZXpvbmVPZmZzZXRSZWZpbmVyIGZyb20gXCIuL2NvbW1vbi9yZWZpbmVycy9FeHRyYWN0VGltZXpvbmVPZmZzZXRSZWZpbmVyXCI7XG5pbXBvcnQgT3ZlcmxhcFJlbW92YWxSZWZpbmVyIGZyb20gXCIuL2NvbW1vbi9yZWZpbmVycy9PdmVybGFwUmVtb3ZhbFJlZmluZXJcIjtcbmltcG9ydCBGb3J3YXJkRGF0ZVJlZmluZXIgZnJvbSBcIi4vY29tbW9uL3JlZmluZXJzL0ZvcndhcmREYXRlUmVmaW5lclwiO1xuaW1wb3J0IFVubGlrZWx5Rm9ybWF0RmlsdGVyIGZyb20gXCIuL2NvbW1vbi9yZWZpbmVycy9Vbmxpa2VseUZvcm1hdEZpbHRlclwiO1xuaW1wb3J0IElTT0Zvcm1hdFBhcnNlciBmcm9tIFwiLi9jb21tb24vcGFyc2Vycy9JU09Gb3JtYXRQYXJzZXJcIjtcbmltcG9ydCBNZXJnZVdlZWtkYXlDb21wb25lbnRSZWZpbmVyIGZyb20gXCIuL2NvbW1vbi9yZWZpbmVycy9NZXJnZVdlZWtkYXlDb21wb25lbnRSZWZpbmVyXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBpbmNsdWRlQ29tbW9uQ29uZmlndXJhdGlvbihjb25maWd1cmF0aW9uOiBDb25maWd1cmF0aW9uLCBzdHJpY3RNb2RlID0gZmFsc2UpOiBDb25maWd1cmF0aW9uIHtcbiAgICBjb25maWd1cmF0aW9uLnBhcnNlcnMudW5zaGlmdChuZXcgSVNPRm9ybWF0UGFyc2VyKCkpO1xuXG4gICAgY29uZmlndXJhdGlvbi5yZWZpbmVycy51bnNoaWZ0KG5ldyBNZXJnZVdlZWtkYXlDb21wb25lbnRSZWZpbmVyKCkpO1xuICAgIGNvbmZpZ3VyYXRpb24ucmVmaW5lcnMudW5zaGlmdChuZXcgRXh0cmFjdFRpbWV6b25lT2Zmc2V0UmVmaW5lcigpKTtcbiAgICBjb25maWd1cmF0aW9uLnJlZmluZXJzLnVuc2hpZnQobmV3IE92ZXJsYXBSZW1vdmFsUmVmaW5lcigpKTtcblxuICAgIC8vIFVubGlrZSBFeHRyYWN0VGltZXpvbmVPZmZzZXRSZWZpbmVyLCB0aGlzIHJlZmluZXIgcmVsaWVzIG9uIGtub3dpbmcgYm90aCBkYXRlIGFuZCB0aW1lIGluIGNhc2VzIHdoZXJlIHRoZSB0elxuICAgIC8vIGlzIGFtYmlndW91cyAoaW4gdGVybXMgb2YgRFNUL25vbi1EU1QpLiBJdCB0aGVyZWZvcmUgbmVlZHMgdG8gYmUgYXBwbGllZCBhcyBsYXRlIGFzIHBvc3NpYmxlIGluIHRoZSBwYXJzaW5nLlxuICAgIGNvbmZpZ3VyYXRpb24ucmVmaW5lcnMucHVzaChuZXcgRXh0cmFjdFRpbWV6b25lQWJiclJlZmluZXIoKSk7XG4gICAgY29uZmlndXJhdGlvbi5yZWZpbmVycy5wdXNoKG5ldyBPdmVybGFwUmVtb3ZhbFJlZmluZXIoKSk7XG4gICAgY29uZmlndXJhdGlvbi5yZWZpbmVycy5wdXNoKG5ldyBGb3J3YXJkRGF0ZVJlZmluZXIoKSk7XG4gICAgY29uZmlndXJhdGlvbi5yZWZpbmVycy5wdXNoKG5ldyBVbmxpa2VseUZvcm1hdEZpbHRlcihzdHJpY3RNb2RlKSk7XG4gICAgcmV0dXJuIGNvbmZpZ3VyYXRpb247XG59XG4iLCAiaW1wb3J0IHsgUGFyc2luZ0NvbnRleHQgfSBmcm9tIFwiLi4vLi4vLi4vY2hyb25vXCI7XG5pbXBvcnQgeyBQYXJzaW5nQ29tcG9uZW50cywgUGFyc2luZ1Jlc3VsdCB9IGZyb20gXCIuLi8uLi8uLi9yZXN1bHRzXCI7XG5pbXBvcnQgZGF5anMgZnJvbSBcImRheWpzXCI7XG5pbXBvcnQgeyBBYnN0cmFjdFBhcnNlcldpdGhXb3JkQm91bmRhcnlDaGVja2luZyB9IGZyb20gXCIuLi8uLi8uLi9jb21tb24vcGFyc2Vycy9BYnN0cmFjdFBhcnNlcldpdGhXb3JkQm91bmRhcnlcIjtcbmltcG9ydCB7IGFzc2lnblNpbWlsYXJEYXRlIH0gZnJvbSBcIi4uLy4uLy4uL3V0aWxzL2RheWpzXCI7XG5pbXBvcnQgKiBhcyByZWZlcmVuY2VzIGZyb20gXCIuLi8uLi8uLi9jb21tb24vY2FzdWFsUmVmZXJlbmNlc1wiO1xuXG5jb25zdCBQQVRURVJOID0gLyhub3d8dG9kYXl8dG9uaWdodHx0b21vcnJvd3xvdmVybW9ycm93fHRtcnx0bXJ3fHllc3RlcmRheXxsYXN0XFxzKm5pZ2h0KSg/PVxcV3wkKS9pO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBFTkNhc3VhbERhdGVQYXJzZXIgZXh0ZW5kcyBBYnN0cmFjdFBhcnNlcldpdGhXb3JkQm91bmRhcnlDaGVja2luZyB7XG4gICAgaW5uZXJQYXR0ZXJuKGNvbnRleHQ6IFBhcnNpbmdDb250ZXh0KTogUmVnRXhwIHtcbiAgICAgICAgcmV0dXJuIFBBVFRFUk47XG4gICAgfVxuXG4gICAgaW5uZXJFeHRyYWN0KGNvbnRleHQ6IFBhcnNpbmdDb250ZXh0LCBtYXRjaDogUmVnRXhwTWF0Y2hBcnJheSk6IFBhcnNpbmdDb21wb25lbnRzIHwgUGFyc2luZ1Jlc3VsdCB7XG4gICAgICAgIGxldCB0YXJnZXREYXRlID0gZGF5anMoY29udGV4dC5yZWZEYXRlKTtcbiAgICAgICAgY29uc3QgbG93ZXJUZXh0ID0gbWF0Y2hbMF0udG9Mb3dlckNhc2UoKTtcbiAgICAgICAgbGV0IGNvbXBvbmVudCA9IGNvbnRleHQuY3JlYXRlUGFyc2luZ0NvbXBvbmVudHMoKTtcblxuICAgICAgICBzd2l0Y2ggKGxvd2VyVGV4dCkge1xuICAgICAgICAgICAgY2FzZSBcIm5vd1wiOlxuICAgICAgICAgICAgICAgIGNvbXBvbmVudCA9IHJlZmVyZW5jZXMubm93KGNvbnRleHQucmVmZXJlbmNlKTtcbiAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgY2FzZSBcInRvZGF5XCI6XG4gICAgICAgICAgICAgICAgY29tcG9uZW50ID0gcmVmZXJlbmNlcy50b2RheShjb250ZXh0LnJlZmVyZW5jZSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIGNhc2UgXCJ5ZXN0ZXJkYXlcIjpcbiAgICAgICAgICAgICAgICBjb21wb25lbnQgPSByZWZlcmVuY2VzLnllc3RlcmRheShjb250ZXh0LnJlZmVyZW5jZSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIGNhc2UgXCJ0b21vcnJvd1wiOlxuICAgICAgICAgICAgY2FzZSBcInRtclwiOlxuICAgICAgICAgICAgY2FzZSBcInRtcndcIjpcbiAgICAgICAgICAgICAgICBjb21wb25lbnQgPSByZWZlcmVuY2VzLnRvbW9ycm93KGNvbnRleHQucmVmZXJlbmNlKTtcbiAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgY2FzZSBcInRvbmlnaHRcIjpcbiAgICAgICAgICAgICAgICBjb21wb25lbnQgPSByZWZlcmVuY2VzLnRvbmlnaHQoY29udGV4dC5yZWZlcmVuY2UpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICBjYXNlIFwib3Zlcm1vcnJvd1wiOlxuICAgICAgICAgICAgICAgIGNvbXBvbmVudCA9IHJlZmVyZW5jZXMudGhlRGF5QWZ0ZXIoY29udGV4dC5yZWZlcmVuY2UsIDIpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIGlmIChsb3dlclRleHQubWF0Y2goL2xhc3RcXHMqbmlnaHQvKSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAodGFyZ2V0RGF0ZS5ob3VyKCkgPiA2KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXREYXRlID0gdGFyZ2V0RGF0ZS5hZGQoLTEsIFwiZGF5XCIpO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgYXNzaWduU2ltaWxhckRhdGUoY29tcG9uZW50LCB0YXJnZXREYXRlKTtcbiAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50LmltcGx5KFwiaG91clwiLCAwKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgICAgY29tcG9uZW50LmFkZFRhZyhcInBhcnNlci9FTkNhc3VhbERhdGVQYXJzZXJcIik7XG4gICAgICAgIHJldHVybiBjb21wb25lbnQ7XG4gICAgfVxufVxuIiwgImltcG9ydCB7IFBhcnNpbmdDb21wb25lbnRzLCBSZWZlcmVuY2VXaXRoVGltZXpvbmUgfSBmcm9tIFwiLi4vcmVzdWx0c1wiO1xuaW1wb3J0IGRheWpzIGZyb20gXCJkYXlqc1wiO1xuaW1wb3J0IHtcbiAgICBhc3NpZ25TaW1pbGFyRGF0ZSxcbiAgICBhc3NpZ25TaW1pbGFyVGltZSxcbiAgICBpbXBseVNpbWlsYXJEYXRlLFxuICAgIGltcGx5U2ltaWxhclRpbWUsXG4gICAgaW1wbHlUaGVOZXh0RGF5LFxufSBmcm9tIFwiLi4vdXRpbHMvZGF5anNcIjtcbmltcG9ydCB7IE1lcmlkaWVtIH0gZnJvbSBcIi4uL3R5cGVzXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBub3cocmVmZXJlbmNlOiBSZWZlcmVuY2VXaXRoVGltZXpvbmUpOiBQYXJzaW5nQ29tcG9uZW50cyB7XG4gICAgY29uc3QgdGFyZ2V0RGF0ZSA9IGRheWpzKHJlZmVyZW5jZS5pbnN0YW50KTtcbiAgICBjb25zdCBjb21wb25lbnQgPSBuZXcgUGFyc2luZ0NvbXBvbmVudHMocmVmZXJlbmNlLCB7fSk7XG4gICAgYXNzaWduU2ltaWxhckRhdGUoY29tcG9uZW50LCB0YXJnZXREYXRlKTtcbiAgICBhc3NpZ25TaW1pbGFyVGltZShjb21wb25lbnQsIHRhcmdldERhdGUpO1xuICAgIGlmIChyZWZlcmVuY2UudGltZXpvbmVPZmZzZXQgIT09IG51bGwpIHtcbiAgICAgICAgY29tcG9uZW50LmFzc2lnbihcInRpbWV6b25lT2Zmc2V0XCIsIHRhcmdldERhdGUudXRjT2Zmc2V0KCkpO1xuICAgIH1cbiAgICBjb21wb25lbnQuYWRkVGFnKFwiY2FzdWFsUmVmZXJlbmNlL25vd1wiKTtcbiAgICByZXR1cm4gY29tcG9uZW50O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdG9kYXkocmVmZXJlbmNlOiBSZWZlcmVuY2VXaXRoVGltZXpvbmUpOiBQYXJzaW5nQ29tcG9uZW50cyB7XG4gICAgY29uc3QgdGFyZ2V0RGF0ZSA9IGRheWpzKHJlZmVyZW5jZS5pbnN0YW50KTtcbiAgICBjb25zdCBjb21wb25lbnQgPSBuZXcgUGFyc2luZ0NvbXBvbmVudHMocmVmZXJlbmNlLCB7fSk7XG4gICAgYXNzaWduU2ltaWxhckRhdGUoY29tcG9uZW50LCB0YXJnZXREYXRlKTtcbiAgICBpbXBseVNpbWlsYXJUaW1lKGNvbXBvbmVudCwgdGFyZ2V0RGF0ZSk7XG4gICAgY29tcG9uZW50LmFkZFRhZyhcImNhc3VhbFJlZmVyZW5jZS90b2RheVwiKTtcbiAgICByZXR1cm4gY29tcG9uZW50O1xufVxuXG4vKipcbiAqIFRoZSBwcmV2aW91cyBkYXkuIEltcGx5IHRoZSBzYW1lIHRpbWUuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB5ZXN0ZXJkYXkocmVmZXJlbmNlOiBSZWZlcmVuY2VXaXRoVGltZXpvbmUpOiBQYXJzaW5nQ29tcG9uZW50cyB7XG4gICAgcmV0dXJuIHRoZURheUJlZm9yZShyZWZlcmVuY2UsIDEpLmFkZFRhZyhcImNhc3VhbFJlZmVyZW5jZS95ZXN0ZXJkYXlcIik7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0aGVEYXlCZWZvcmUocmVmZXJlbmNlOiBSZWZlcmVuY2VXaXRoVGltZXpvbmUsIG51bURheTogbnVtYmVyKTogUGFyc2luZ0NvbXBvbmVudHMge1xuICAgIHJldHVybiB0aGVEYXlBZnRlcihyZWZlcmVuY2UsIC1udW1EYXkpO1xufVxuXG4vKipcbiAqIFRoZSBmb2xsb3dpbmcgZGF5IHdpdGggZGF5anMuYXNzaWduVGhlTmV4dERheSgpXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB0b21vcnJvdyhyZWZlcmVuY2U6IFJlZmVyZW5jZVdpdGhUaW1lem9uZSk6IFBhcnNpbmdDb21wb25lbnRzIHtcbiAgICByZXR1cm4gdGhlRGF5QWZ0ZXIocmVmZXJlbmNlLCAxKS5hZGRUYWcoXCJjYXN1YWxSZWZlcmVuY2UvdG9tb3Jyb3dcIik7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0aGVEYXlBZnRlcihyZWZlcmVuY2U6IFJlZmVyZW5jZVdpdGhUaW1lem9uZSwgbkRheXM6IG51bWJlcik6IFBhcnNpbmdDb21wb25lbnRzIHtcbiAgICBsZXQgdGFyZ2V0RGF0ZSA9IGRheWpzKHJlZmVyZW5jZS5pbnN0YW50KTtcbiAgICBjb25zdCBjb21wb25lbnQgPSBuZXcgUGFyc2luZ0NvbXBvbmVudHMocmVmZXJlbmNlLCB7fSk7XG4gICAgdGFyZ2V0RGF0ZSA9IHRhcmdldERhdGUuYWRkKG5EYXlzLCBcImRheVwiKTtcbiAgICBhc3NpZ25TaW1pbGFyRGF0ZShjb21wb25lbnQsIHRhcmdldERhdGUpO1xuICAgIGltcGx5U2ltaWxhclRpbWUoY29tcG9uZW50LCB0YXJnZXREYXRlKTtcbiAgICByZXR1cm4gY29tcG9uZW50O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdG9uaWdodChyZWZlcmVuY2U6IFJlZmVyZW5jZVdpdGhUaW1lem9uZSwgaW1wbHlIb3VyID0gMjIpOiBQYXJzaW5nQ29tcG9uZW50cyB7XG4gICAgY29uc3QgdGFyZ2V0RGF0ZSA9IGRheWpzKHJlZmVyZW5jZS5pbnN0YW50KTtcbiAgICBjb25zdCBjb21wb25lbnQgPSBuZXcgUGFyc2luZ0NvbXBvbmVudHMocmVmZXJlbmNlLCB7fSk7XG4gICAgYXNzaWduU2ltaWxhckRhdGUoY29tcG9uZW50LCB0YXJnZXREYXRlKTtcbiAgICBjb21wb25lbnQuaW1wbHkoXCJob3VyXCIsIGltcGx5SG91cik7XG4gICAgY29tcG9uZW50LmltcGx5KFwibWVyaWRpZW1cIiwgTWVyaWRpZW0uUE0pO1xuICAgIGNvbXBvbmVudC5hZGRUYWcoXCJjYXN1YWxSZWZlcmVuY2UvdG9uaWdodFwiKTtcbiAgICByZXR1cm4gY29tcG9uZW50O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbGFzdE5pZ2h0KHJlZmVyZW5jZTogUmVmZXJlbmNlV2l0aFRpbWV6b25lLCBpbXBseUhvdXIgPSAwKTogUGFyc2luZ0NvbXBvbmVudHMge1xuICAgIGxldCB0YXJnZXREYXRlID0gZGF5anMocmVmZXJlbmNlLmluc3RhbnQpO1xuICAgIGNvbnN0IGNvbXBvbmVudCA9IG5ldyBQYXJzaW5nQ29tcG9uZW50cyhyZWZlcmVuY2UsIHt9KTtcbiAgICBpZiAodGFyZ2V0RGF0ZS5ob3VyKCkgPCA2KSB7XG4gICAgICAgIHRhcmdldERhdGUgPSB0YXJnZXREYXRlLmFkZCgtMSwgXCJkYXlcIik7XG4gICAgfVxuICAgIGFzc2lnblNpbWlsYXJEYXRlKGNvbXBvbmVudCwgdGFyZ2V0RGF0ZSk7XG4gICAgY29tcG9uZW50LmltcGx5KFwiaG91clwiLCBpbXBseUhvdXIpO1xuICAgIHJldHVybiBjb21wb25lbnQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBldmVuaW5nKHJlZmVyZW5jZTogUmVmZXJlbmNlV2l0aFRpbWV6b25lLCBpbXBseUhvdXIgPSAyMCk6IFBhcnNpbmdDb21wb25lbnRzIHtcbiAgICBjb25zdCBjb21wb25lbnQgPSBuZXcgUGFyc2luZ0NvbXBvbmVudHMocmVmZXJlbmNlLCB7fSk7XG4gICAgY29tcG9uZW50LmltcGx5KFwibWVyaWRpZW1cIiwgTWVyaWRpZW0uUE0pO1xuICAgIGNvbXBvbmVudC5pbXBseShcImhvdXJcIiwgaW1wbHlIb3VyKTtcbiAgICBjb21wb25lbnQuYWRkVGFnKFwiY2FzdWFsUmVmZXJlbmNlL2V2ZW5pbmdcIik7XG4gICAgcmV0dXJuIGNvbXBvbmVudDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHllc3RlcmRheUV2ZW5pbmcocmVmZXJlbmNlOiBSZWZlcmVuY2VXaXRoVGltZXpvbmUsIGltcGx5SG91ciA9IDIwKTogUGFyc2luZ0NvbXBvbmVudHMge1xuICAgIGxldCB0YXJnZXREYXRlID0gZGF5anMocmVmZXJlbmNlLmluc3RhbnQpO1xuICAgIGNvbnN0IGNvbXBvbmVudCA9IG5ldyBQYXJzaW5nQ29tcG9uZW50cyhyZWZlcmVuY2UsIHt9KTtcbiAgICB0YXJnZXREYXRlID0gdGFyZ2V0RGF0ZS5hZGQoLTEsIFwiZGF5XCIpO1xuICAgIGFzc2lnblNpbWlsYXJEYXRlKGNvbXBvbmVudCwgdGFyZ2V0RGF0ZSk7XG4gICAgY29tcG9uZW50LmltcGx5KFwiaG91clwiLCBpbXBseUhvdXIpO1xuICAgIGNvbXBvbmVudC5pbXBseShcIm1lcmlkaWVtXCIsIE1lcmlkaWVtLlBNKTtcbiAgICBjb21wb25lbnQuYWRkVGFnKFwiY2FzdWFsUmVmZXJlbmNlL3llc3RlcmRheVwiKTtcbiAgICBjb21wb25lbnQuYWRkVGFnKFwiY2FzdWFsUmVmZXJlbmNlL2V2ZW5pbmdcIik7XG4gICAgcmV0dXJuIGNvbXBvbmVudDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG1pZG5pZ2h0KHJlZmVyZW5jZTogUmVmZXJlbmNlV2l0aFRpbWV6b25lKTogUGFyc2luZ0NvbXBvbmVudHMge1xuICAgIGNvbnN0IGNvbXBvbmVudCA9IG5ldyBQYXJzaW5nQ29tcG9uZW50cyhyZWZlcmVuY2UsIHt9KTtcbiAgICBjb25zdCB0YXJnZXREYXRlID0gZGF5anMocmVmZXJlbmNlLmluc3RhbnQpO1xuICAgIGlmICh0YXJnZXREYXRlLmhvdXIoKSA+IDIpIHtcbiAgICAgICAgLy8gVW5sZXNzIGl0J3MgdmVyeSBlYXJseSBtb3JuaW5nICgwfjJBTSksIHdlIGFzc3VtZSB0aGUgbWlkbmlnaHQgaXMgdGhlIGNvbWluZyBtaWRuaWdodC5cbiAgICAgICAgLy8gVGh1cywgaW5jcmVhc2luZyB0aGUgZGF5IGJ5IDEuXG4gICAgICAgIGltcGx5VGhlTmV4dERheShjb21wb25lbnQsIHRhcmdldERhdGUpO1xuICAgIH1cbiAgICBjb21wb25lbnQuYXNzaWduKFwiaG91clwiLCAwKTtcbiAgICBjb21wb25lbnQuaW1wbHkoXCJtaW51dGVcIiwgMCk7XG4gICAgY29tcG9uZW50LmltcGx5KFwic2Vjb25kXCIsIDApO1xuICAgIGNvbXBvbmVudC5pbXBseShcIm1pbGxpc2Vjb25kXCIsIDApO1xuICAgIGNvbXBvbmVudC5hZGRUYWcoXCJjYXN1YWxSZWZlcmVuY2UvbWlkbmlnaHRcIik7XG4gICAgcmV0dXJuIGNvbXBvbmVudDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG1vcm5pbmcocmVmZXJlbmNlOiBSZWZlcmVuY2VXaXRoVGltZXpvbmUsIGltcGx5SG91ciA9IDYpOiBQYXJzaW5nQ29tcG9uZW50cyB7XG4gICAgY29uc3QgY29tcG9uZW50ID0gbmV3IFBhcnNpbmdDb21wb25lbnRzKHJlZmVyZW5jZSwge30pO1xuICAgIGNvbXBvbmVudC5pbXBseShcIm1lcmlkaWVtXCIsIE1lcmlkaWVtLkFNKTtcbiAgICBjb21wb25lbnQuaW1wbHkoXCJob3VyXCIsIGltcGx5SG91cik7XG4gICAgY29tcG9uZW50LmltcGx5KFwibWludXRlXCIsIDApO1xuICAgIGNvbXBvbmVudC5pbXBseShcInNlY29uZFwiLCAwKTtcbiAgICBjb21wb25lbnQuaW1wbHkoXCJtaWxsaXNlY29uZFwiLCAwKTtcbiAgICBjb21wb25lbnQuYWRkVGFnKFwiY2FzdWFsUmVmZXJlbmNlL21vcm5pbmdcIik7XG4gICAgcmV0dXJuIGNvbXBvbmVudDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFmdGVybm9vbihyZWZlcmVuY2U6IFJlZmVyZW5jZVdpdGhUaW1lem9uZSwgaW1wbHlIb3VyID0gMTUpOiBQYXJzaW5nQ29tcG9uZW50cyB7XG4gICAgY29uc3QgY29tcG9uZW50ID0gbmV3IFBhcnNpbmdDb21wb25lbnRzKHJlZmVyZW5jZSwge30pO1xuICAgIGNvbXBvbmVudC5pbXBseShcIm1lcmlkaWVtXCIsIE1lcmlkaWVtLlBNKTtcbiAgICBjb21wb25lbnQuaW1wbHkoXCJob3VyXCIsIGltcGx5SG91cik7XG4gICAgY29tcG9uZW50LmltcGx5KFwibWludXRlXCIsIDApO1xuICAgIGNvbXBvbmVudC5pbXBseShcInNlY29uZFwiLCAwKTtcbiAgICBjb21wb25lbnQuaW1wbHkoXCJtaWxsaXNlY29uZFwiLCAwKTtcbiAgICBjb21wb25lbnQuYWRkVGFnKFwiY2FzdWFsUmVmZXJlbmNlL2FmdGVybm9vblwiKTtcbiAgICByZXR1cm4gY29tcG9uZW50O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbm9vbihyZWZlcmVuY2U6IFJlZmVyZW5jZVdpdGhUaW1lem9uZSk6IFBhcnNpbmdDb21wb25lbnRzIHtcbiAgICBjb25zdCBjb21wb25lbnQgPSBuZXcgUGFyc2luZ0NvbXBvbmVudHMocmVmZXJlbmNlLCB7fSk7XG4gICAgY29tcG9uZW50LmltcGx5KFwibWVyaWRpZW1cIiwgTWVyaWRpZW0uQU0pO1xuICAgIGNvbXBvbmVudC5pbXBseShcImhvdXJcIiwgMTIpO1xuICAgIGNvbXBvbmVudC5pbXBseShcIm1pbnV0ZVwiLCAwKTtcbiAgICBjb21wb25lbnQuaW1wbHkoXCJzZWNvbmRcIiwgMCk7XG4gICAgY29tcG9uZW50LmltcGx5KFwibWlsbGlzZWNvbmRcIiwgMCk7XG4gICAgY29tcG9uZW50LmFkZFRhZyhcImNhc3VhbFJlZmVyZW5jZS9ub29uXCIpO1xuICAgIHJldHVybiBjb21wb25lbnQ7XG59XG4iLCAiaW1wb3J0IHsgUGFyc2luZ0NvbnRleHQgfSBmcm9tIFwiLi4vLi4vLi4vY2hyb25vXCI7XG5pbXBvcnQgeyBBYnN0cmFjdFBhcnNlcldpdGhXb3JkQm91bmRhcnlDaGVja2luZyB9IGZyb20gXCIuLi8uLi8uLi9jb21tb24vcGFyc2Vycy9BYnN0cmFjdFBhcnNlcldpdGhXb3JkQm91bmRhcnlcIjtcbmltcG9ydCAqIGFzIGNhc3VhbFJlZmVyZW5jZXMgZnJvbSBcIi4uLy4uLy4uL2NvbW1vbi9jYXN1YWxSZWZlcmVuY2VzXCI7XG5cbmNvbnN0IFBBVFRFUk4gPSAvKD86dGhpcyk/XFxzezAsM30obW9ybmluZ3xhZnRlcm5vb258ZXZlbmluZ3xuaWdodHxtaWRuaWdodHxtaWRkYXl8bm9vbikoPz1cXFd8JCkvaTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRU5DYXN1YWxUaW1lUGFyc2VyIGV4dGVuZHMgQWJzdHJhY3RQYXJzZXJXaXRoV29yZEJvdW5kYXJ5Q2hlY2tpbmcge1xuICAgIGlubmVyUGF0dGVybigpIHtcbiAgICAgICAgcmV0dXJuIFBBVFRFUk47XG4gICAgfVxuICAgIGlubmVyRXh0cmFjdChjb250ZXh0OiBQYXJzaW5nQ29udGV4dCwgbWF0Y2g6IFJlZ0V4cE1hdGNoQXJyYXkpIHtcbiAgICAgICAgbGV0IGNvbXBvbmVudCA9IG51bGw7XG4gICAgICAgIHN3aXRjaCAobWF0Y2hbMV0udG9Mb3dlckNhc2UoKSkge1xuICAgICAgICAgICAgY2FzZSBcImFmdGVybm9vblwiOlxuICAgICAgICAgICAgICAgIGNvbXBvbmVudCA9IGNhc3VhbFJlZmVyZW5jZXMuYWZ0ZXJub29uKGNvbnRleHQucmVmZXJlbmNlKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCJldmVuaW5nXCI6XG4gICAgICAgICAgICBjYXNlIFwibmlnaHRcIjpcbiAgICAgICAgICAgICAgICBjb21wb25lbnQgPSBjYXN1YWxSZWZlcmVuY2VzLmV2ZW5pbmcoY29udGV4dC5yZWZlcmVuY2UpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcIm1pZG5pZ2h0XCI6XG4gICAgICAgICAgICAgICAgY29tcG9uZW50ID0gY2FzdWFsUmVmZXJlbmNlcy5taWRuaWdodChjb250ZXh0LnJlZmVyZW5jZSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwibW9ybmluZ1wiOlxuICAgICAgICAgICAgICAgIGNvbXBvbmVudCA9IGNhc3VhbFJlZmVyZW5jZXMubW9ybmluZyhjb250ZXh0LnJlZmVyZW5jZSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwibm9vblwiOlxuICAgICAgICAgICAgY2FzZSBcIm1pZGRheVwiOlxuICAgICAgICAgICAgICAgIGNvbXBvbmVudCA9IGNhc3VhbFJlZmVyZW5jZXMubm9vbihjb250ZXh0LnJlZmVyZW5jZSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNvbXBvbmVudCkge1xuICAgICAgICAgICAgY29tcG9uZW50LmFkZFRhZyhcInBhcnNlci9FTkNhc3VhbFRpbWVQYXJzZXJcIik7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGNvbXBvbmVudDtcbiAgICB9XG59XG4iLCAiaW1wb3J0IHsgV2Vla2RheSB9IGZyb20gXCIuLi8uLi90eXBlc1wiO1xuaW1wb3J0IHsgUGFyc2luZ0NvbXBvbmVudHMsIFJlZmVyZW5jZVdpdGhUaW1lem9uZSB9IGZyb20gXCIuLi8uLi9yZXN1bHRzXCI7XG5pbXBvcnQgeyBhZGRJbXBsaWVkVGltZVVuaXRzIH0gZnJvbSBcIi4uLy4uL3V0aWxzL3RpbWV1bml0c1wiO1xuXG4vKipcbiAqIFJldHVybnMgdGhlIHBhcnNpbmcgY29tcG9uZW50cyBhdCB0aGUgd2Vla2RheSAoY29uc2lkZXJpbmcgdGhlIG1vZGlmaWVyKS4gVGhlIHRpbWUgYW5kIHRpbWV6b25lIGlzIGFzc3VtZSB0byBiZVxuICogc2ltaWxhciB0byB0aGUgcmVmZXJlbmNlLlxuICogQHBhcmFtIHJlZmVyZW5jZVxuICogQHBhcmFtIHdlZWtkYXlcbiAqIEBwYXJhbSBtb2RpZmllciBcInRoaXNcIiwgXCJuZXh0XCIsIFwibGFzdFwiIG1vZGlmaWVyIHdvcmQuIElmIGVtcHR5LCByZXR1cm5zIHRoZSB3ZWVrZGF5IGNsb3Nlc3QgdG8gdGhlIGByZWZEYXRlYC5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVBhcnNpbmdDb21wb25lbnRzQXRXZWVrZGF5KFxuICAgIHJlZmVyZW5jZTogUmVmZXJlbmNlV2l0aFRpbWV6b25lLFxuICAgIHdlZWtkYXk6IFdlZWtkYXksXG4gICAgbW9kaWZpZXI/OiBcInRoaXNcIiB8IFwibmV4dFwiIHwgXCJsYXN0XCJcbik6IFBhcnNpbmdDb21wb25lbnRzIHtcbiAgICBjb25zdCByZWZEYXRlID0gcmVmZXJlbmNlLmdldERhdGVXaXRoQWRqdXN0ZWRUaW1lem9uZSgpO1xuICAgIGNvbnN0IGRheXNUb1dlZWtkYXkgPSBnZXREYXlzVG9XZWVrZGF5KHJlZkRhdGUsIHdlZWtkYXksIG1vZGlmaWVyKTtcblxuICAgIGxldCBjb21wb25lbnRzID0gbmV3IFBhcnNpbmdDb21wb25lbnRzKHJlZmVyZW5jZSk7XG4gICAgY29tcG9uZW50cyA9IGFkZEltcGxpZWRUaW1lVW5pdHMoY29tcG9uZW50cywgeyBcImRheVwiOiBkYXlzVG9XZWVrZGF5IH0pO1xuICAgIGNvbXBvbmVudHMuYXNzaWduKFwid2Vla2RheVwiLCB3ZWVrZGF5KTtcblxuICAgIHJldHVybiBjb21wb25lbnRzO1xufVxuXG4vKipcbiAqIFJldHVybnMgbnVtYmVyIG9mIGRheXMgZnJvbSByZWZEYXRlIHRvIHRoZSB3ZWVrZGF5LiBUaGUgcmVmRGF0ZSBkYXRlIGFuZCB0aW1lem9uZSBpbmZvcm1hdGlvbiBpcyB1c2VkLlxuICogQHBhcmFtIHJlZkRhdGVcbiAqIEBwYXJhbSB3ZWVrZGF5XG4gKiBAcGFyYW0gbW9kaWZpZXIgXCJ0aGlzXCIsIFwibmV4dFwiLCBcImxhc3RcIiBtb2RpZmllciB3b3JkLiBJZiBlbXB0eSwgcmV0dXJucyB0aGUgd2Vla2RheSBjbG9zZXN0IHRvIHRoZSBgcmVmRGF0ZWAuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBnZXREYXlzVG9XZWVrZGF5KHJlZkRhdGU6IERhdGUsIHdlZWtkYXk6IFdlZWtkYXksIG1vZGlmaWVyPzogXCJ0aGlzXCIgfCBcIm5leHRcIiB8IFwibGFzdFwiKTogbnVtYmVyIHtcbiAgICBjb25zdCByZWZXZWVrZGF5ID0gcmVmRGF0ZS5nZXREYXkoKSBhcyBXZWVrZGF5O1xuICAgIHN3aXRjaCAobW9kaWZpZXIpIHtcbiAgICAgICAgY2FzZSBcInRoaXNcIjpcbiAgICAgICAgICAgIHJldHVybiBnZXREYXlzRm9yd2FyZFRvV2Vla2RheShyZWZEYXRlLCB3ZWVrZGF5KTtcbiAgICAgICAgY2FzZSBcImxhc3RcIjpcbiAgICAgICAgICAgIHJldHVybiBnZXRCYWNrd2FyZERheXNUb1dlZWtkYXkocmVmRGF0ZSwgd2Vla2RheSk7XG4gICAgICAgIGNhc2UgXCJuZXh0XCI6XG4gICAgICAgICAgICAvLyBGcm9tIFN1bmRheSwgdGhlIG5leHQgU3VuZGF5IGlzIDcgZGF5cyBsYXRlci5cbiAgICAgICAgICAgIC8vIE90aGVyd2lzZSwgbmV4dCBNb24gaXMgMSBkYXlzIGxhdGVyLCBuZXh0IFR1ZXMgaXMgMiBkYXlzIGxhdGVyLCBhbmQgc28gb24uLi4sIChyZXR1cm4gZW51bSB2YWx1ZSlcbiAgICAgICAgICAgIGlmIChyZWZXZWVrZGF5ID09IFdlZWtkYXkuU1VOREFZKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHdlZWtkYXkgPT0gV2Vla2RheS5TVU5EQVkgPyA3IDogd2Vla2RheTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIEZyb20gU2F0dXJkYXksIHRoZSBuZXh0IFNhdHVyZGF5IGlzIDcgZGF5cyBsYXRlciwgdGhlIG5leHQgU3VuZGF5IGlzIDgtZGF5cyBsYXRlci5cbiAgICAgICAgICAgIC8vIE90aGVyd2lzZSwgbmV4dCBNb24gaXMgKDEgKyAxKSBkYXlzIGxhdGVyLCBuZXh0IFR1ZXMgaXMgKDEgKyAyKSBkYXlzIGxhdGVyLCBhbmQgc28gb24uLi4sXG4gICAgICAgICAgICAvLyAocmV0dXJuLCAyICsgW2VudW0gdmFsdWVdIGRheXMpXG4gICAgICAgICAgICBpZiAocmVmV2Vla2RheSA9PSBXZWVrZGF5LlNBVFVSREFZKSB7XG4gICAgICAgICAgICAgICAgaWYgKHdlZWtkYXkgPT0gV2Vla2RheS5TQVRVUkRBWSkgcmV0dXJuIDc7XG4gICAgICAgICAgICAgICAgaWYgKHdlZWtkYXkgPT0gV2Vla2RheS5TVU5EQVkpIHJldHVybiA4O1xuICAgICAgICAgICAgICAgIHJldHVybiAxICsgd2Vla2RheTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIEZyb20gd2Vla2RheXMsIG5leHQgTW9uIGlzIHRoZSBmb2xsb3dpbmcgd2VlaydzIE1vbiwgbmV4dCBUdWVzIHRoZSBmb2xsb3dpbmcgd2VlaydzIFR1ZXMsIGFuZCBzbyBvbi4uLlxuICAgICAgICAgICAgLy8gSWYgdGhlIHdlZWsncyB3ZWVrZGF5IGFscmVhZHkgcGFzc2VkICh3ZWVrZGF5IDwgcmVmV2Vla2RheSksIHdlIHNpbXBseSBjb3VudCBmb3J3YXJkIHRvIG5leHQgd2Vla1xuICAgICAgICAgICAgLy8gKHNpbWlsYXIgdG8gJ3RoaXMnKS4gT3RoZXJ3aXNlLCBjb3VudCBmb3J3YXJkIHRvIHRoaXMgd2VlaywgdGhlbiBhZGQgYW5vdGhlciA3IGRheXMuXG4gICAgICAgICAgICBpZiAod2Vla2RheSA8IHJlZldlZWtkYXkgJiYgd2Vla2RheSAhPSBXZWVrZGF5LlNVTkRBWSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBnZXREYXlzRm9yd2FyZFRvV2Vla2RheShyZWZEYXRlLCB3ZWVrZGF5KTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGdldERheXNGb3J3YXJkVG9XZWVrZGF5KHJlZkRhdGUsIHdlZWtkYXkpICsgNztcbiAgICAgICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGdldERheXNUb1dlZWtkYXlDbG9zZXN0KHJlZkRhdGUsIHdlZWtkYXkpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0RGF5c1RvV2Vla2RheUNsb3Nlc3QocmVmRGF0ZTogRGF0ZSwgd2Vla2RheTogV2Vla2RheSk6IG51bWJlciB7XG4gICAgY29uc3QgYmFja3dhcmQgPSBnZXRCYWNrd2FyZERheXNUb1dlZWtkYXkocmVmRGF0ZSwgd2Vla2RheSk7XG4gICAgY29uc3QgZm9yd2FyZCA9IGdldERheXNGb3J3YXJkVG9XZWVrZGF5KHJlZkRhdGUsIHdlZWtkYXkpO1xuXG4gICAgcmV0dXJuIGZvcndhcmQgPCAtYmFja3dhcmQgPyBmb3J3YXJkIDogYmFja3dhcmQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXREYXlzRm9yd2FyZFRvV2Vla2RheShyZWZEYXRlOiBEYXRlLCB3ZWVrZGF5OiBXZWVrZGF5KTogbnVtYmVyIHtcbiAgICBjb25zdCByZWZXZWVrZGF5ID0gcmVmRGF0ZS5nZXREYXkoKTtcbiAgICBsZXQgZm9yd2FyZENvdW50ID0gd2Vla2RheSAtIHJlZldlZWtkYXk7XG4gICAgaWYgKGZvcndhcmRDb3VudCA8IDApIHtcbiAgICAgICAgZm9yd2FyZENvdW50ICs9IDc7XG4gICAgfVxuICAgIHJldHVybiBmb3J3YXJkQ291bnQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRCYWNrd2FyZERheXNUb1dlZWtkYXkocmVmRGF0ZTogRGF0ZSwgd2Vla2RheTogV2Vla2RheSk6IG51bWJlciB7XG4gICAgY29uc3QgcmVmV2Vla2RheSA9IHJlZkRhdGUuZ2V0RGF5KCk7XG4gICAgbGV0IGJhY2t3YXJkQ291bnQgPSB3ZWVrZGF5IC0gcmVmV2Vla2RheTtcbiAgICBpZiAoYmFja3dhcmRDb3VudCA+PSAwKSB7XG4gICAgICAgIGJhY2t3YXJkQ291bnQgLT0gNztcbiAgICB9XG4gICAgcmV0dXJuIGJhY2t3YXJkQ291bnQ7XG59XG4iLCAiaW1wb3J0IHsgUGFyc2luZ0NvbnRleHQgfSBmcm9tIFwiLi4vLi4vLi4vY2hyb25vXCI7XG5pbXBvcnQgeyBQYXJzaW5nQ29tcG9uZW50cyB9IGZyb20gXCIuLi8uLi8uLi9yZXN1bHRzXCI7XG5pbXBvcnQgeyBXRUVLREFZX0RJQ1RJT05BUlkgfSBmcm9tIFwiLi4vY29uc3RhbnRzXCI7XG5pbXBvcnQgeyBtYXRjaEFueVBhdHRlcm4gfSBmcm9tIFwiLi4vLi4vLi4vdXRpbHMvcGF0dGVyblwiO1xuaW1wb3J0IHsgQWJzdHJhY3RQYXJzZXJXaXRoV29yZEJvdW5kYXJ5Q2hlY2tpbmcgfSBmcm9tIFwiLi4vLi4vLi4vY29tbW9uL3BhcnNlcnMvQWJzdHJhY3RQYXJzZXJXaXRoV29yZEJvdW5kYXJ5XCI7XG5pbXBvcnQgeyBjcmVhdGVQYXJzaW5nQ29tcG9uZW50c0F0V2Vla2RheSB9IGZyb20gXCIuLi8uLi8uLi9jb21tb24vY2FsY3VsYXRpb24vd2Vla2RheXNcIjtcbmltcG9ydCB7IFdlZWtkYXkgfSBmcm9tIFwiLi4vLi4vLi4vdHlwZXNcIjtcblxuY29uc3QgUEFUVEVSTiA9IG5ldyBSZWdFeHAoXG4gICAgXCIoPzooPzpcXFxcLHxcXFxcKHxcXFxcXHVGRjA4KVxcXFxzKik/XCIgK1xuICAgICAgICBcIig/Om9uXFxcXHMqPyk/XCIgK1xuICAgICAgICBcIig/Oih0aGlzfGxhc3R8cGFzdHxuZXh0KVxcXFxzKik/XCIgK1xuICAgICAgICBgKCR7bWF0Y2hBbnlQYXR0ZXJuKFdFRUtEQVlfRElDVElPTkFSWSl9fHdlZWtlbmR8d2Vla2RheSlgICtcbiAgICAgICAgXCIoPzpcXFxccyooPzpcXFxcLHxcXFxcKXxcXFxcXHVGRjA5KSk/XCIgK1xuICAgICAgICBcIig/OlxcXFxzKih0aGlzfGxhc3R8cGFzdHxuZXh0KVxcXFxzKndlZWspP1wiICtcbiAgICAgICAgXCIoPz1cXFxcV3wkKVwiLFxuICAgIFwiaVwiXG4pO1xuXG5jb25zdCBQUkVGSVhfR1JPVVAgPSAxO1xuY29uc3QgV0VFS0RBWV9HUk9VUCA9IDI7XG5jb25zdCBQT1NURklYX0dST1VQID0gMztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRU5XZWVrZGF5UGFyc2VyIGV4dGVuZHMgQWJzdHJhY3RQYXJzZXJXaXRoV29yZEJvdW5kYXJ5Q2hlY2tpbmcge1xuICAgIGlubmVyUGF0dGVybigpOiBSZWdFeHAge1xuICAgICAgICByZXR1cm4gUEFUVEVSTjtcbiAgICB9XG5cbiAgICBpbm5lckV4dHJhY3QoY29udGV4dDogUGFyc2luZ0NvbnRleHQsIG1hdGNoOiBSZWdFeHBNYXRjaEFycmF5KTogUGFyc2luZ0NvbXBvbmVudHMgfCBudWxsIHtcbiAgICAgICAgY29uc3QgcHJlZml4ID0gbWF0Y2hbUFJFRklYX0dST1VQXTtcbiAgICAgICAgY29uc3QgcG9zdGZpeCA9IG1hdGNoW1BPU1RGSVhfR1JPVVBdO1xuICAgICAgICBsZXQgbW9kaWZpZXJXb3JkID0gcHJlZml4IHx8IHBvc3RmaXg7XG4gICAgICAgIG1vZGlmaWVyV29yZCA9IG1vZGlmaWVyV29yZCB8fCBcIlwiO1xuICAgICAgICBtb2RpZmllcldvcmQgPSBtb2RpZmllcldvcmQudG9Mb3dlckNhc2UoKTtcblxuICAgICAgICBsZXQgbW9kaWZpZXIgPSBudWxsO1xuICAgICAgICBpZiAobW9kaWZpZXJXb3JkID09IFwibGFzdFwiIHx8IG1vZGlmaWVyV29yZCA9PSBcInBhc3RcIikge1xuICAgICAgICAgICAgbW9kaWZpZXIgPSBcImxhc3RcIjtcbiAgICAgICAgfSBlbHNlIGlmIChtb2RpZmllcldvcmQgPT0gXCJuZXh0XCIpIHtcbiAgICAgICAgICAgIG1vZGlmaWVyID0gXCJuZXh0XCI7XG4gICAgICAgIH0gZWxzZSBpZiAobW9kaWZpZXJXb3JkID09IFwidGhpc1wiKSB7XG4gICAgICAgICAgICBtb2RpZmllciA9IFwidGhpc1wiO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3Qgd2Vla2RheV93b3JkID0gbWF0Y2hbV0VFS0RBWV9HUk9VUF0udG9Mb3dlckNhc2UoKTtcbiAgICAgICAgbGV0IHdlZWtkYXk7XG4gICAgICAgIGlmIChXRUVLREFZX0RJQ1RJT05BUllbd2Vla2RheV93b3JkXSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICB3ZWVrZGF5ID0gV0VFS0RBWV9ESUNUSU9OQVJZW3dlZWtkYXlfd29yZF07XG4gICAgICAgIH0gZWxzZSBpZiAod2Vla2RheV93b3JkID09IFwid2Vla2VuZFwiKSB7XG4gICAgICAgICAgICAvLyBUaGlzIGRlcGVuZHMgb24gd2hhdCBkYXlzIGFyZSB3ZWVrZW5kIHNldHRpbmcsIGJ1dCB0eXBpY2FsbHk6XG4gICAgICAgICAgICAvLyAnVGhpcy9uZXh0IHdlZWtlbmQnIG1lYW5zIHRoZSBjb21pbmcgU2F0dXJkYXksICdsYXN0IHdlZWtlbmQnIG1lYW5zIGxhc3QgU3VuZGF5LlxuICAgICAgICAgICAgd2Vla2RheSA9IG1vZGlmaWVyID09IFwibGFzdFwiID8gV2Vla2RheS5TVU5EQVkgOiBXZWVrZGF5LlNBVFVSREFZO1xuICAgICAgICB9IGVsc2UgaWYgKHdlZWtkYXlfd29yZCA9PSBcIndlZWtkYXlcIikge1xuICAgICAgICAgICAgLy8gSW4gRW5nbGlzaCwgdGhlIFwid2Vla2RheVwiIG1lYW5zIGFueSBkYXkgb2YgdGhlIHdlZWsgZXhjZXB0IHdlZWtlbmQuXG4gICAgICAgICAgICAvLyBUaGlzIGFsc28gZGVwZW5kcyBvbiB3aGF0IGRheXMgYXJlIHdlZWtlbmQgc2V0dGluZywgYnV0IHR5cGljYWxseTpcbiAgICAgICAgICAgIC8vIC0gT24gd2Vla2VuZCByZWYsIHRoaXMgbWVhbnMgdGhlIGNvbWluZyBNb25kYXkgb3IgbGFzdCBGcmlkYXkuXG4gICAgICAgICAgICAvLyAtIE9uIHdlZWtkYXkgcmVmLCB0aGlzIG1lYW5zIHRoZSBuZXh0L2xhc3Qgd29ya2luZyBkYXkuXG4gICAgICAgICAgICBjb25zdCByZWZXZWVrZGF5ID0gY29udGV4dC5yZWZlcmVuY2UuZ2V0RGF0ZVdpdGhBZGp1c3RlZFRpbWV6b25lKCkuZ2V0RGF5KCk7XG4gICAgICAgICAgICBpZiAocmVmV2Vla2RheSA9PSBXZWVrZGF5LlNVTkRBWSB8fCByZWZXZWVrZGF5ID09IFdlZWtkYXkuU0FUVVJEQVkpIHtcbiAgICAgICAgICAgICAgICB3ZWVrZGF5ID0gbW9kaWZpZXIgPT0gXCJsYXN0XCIgPyBXZWVrZGF5LkZSSURBWSA6IFdlZWtkYXkuTU9OREFZO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB3ZWVrZGF5ID0gcmVmV2Vla2RheSAtIDE7XG4gICAgICAgICAgICAgICAgd2Vla2RheSA9IG1vZGlmaWVyID09IFwibGFzdFwiID8gd2Vla2RheSAtIDEgOiB3ZWVrZGF5ICsgMTtcbiAgICAgICAgICAgICAgICB3ZWVrZGF5ID0gKHdlZWtkYXkgJSA1KSArIDE7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBjcmVhdGVQYXJzaW5nQ29tcG9uZW50c0F0V2Vla2RheShjb250ZXh0LnJlZmVyZW5jZSwgd2Vla2RheSwgbW9kaWZpZXIpO1xuICAgIH1cbn1cbiIsICJpbXBvcnQgeyBUSU1FX1VOSVRfRElDVElPTkFSWSB9IGZyb20gXCIuLi9jb25zdGFudHNcIjtcbmltcG9ydCB7IFBhcnNpbmdDb250ZXh0IH0gZnJvbSBcIi4uLy4uLy4uL2Nocm9ub1wiO1xuaW1wb3J0IHsgUGFyc2luZ0NvbXBvbmVudHMgfSBmcm9tIFwiLi4vLi4vLi4vcmVzdWx0c1wiO1xuaW1wb3J0IGRheWpzIGZyb20gXCJkYXlqc1wiO1xuaW1wb3J0IHsgQWJzdHJhY3RQYXJzZXJXaXRoV29yZEJvdW5kYXJ5Q2hlY2tpbmcgfSBmcm9tIFwiLi4vLi4vLi4vY29tbW9uL3BhcnNlcnMvQWJzdHJhY3RQYXJzZXJXaXRoV29yZEJvdW5kYXJ5XCI7XG5pbXBvcnQgeyBtYXRjaEFueVBhdHRlcm4gfSBmcm9tIFwiLi4vLi4vLi4vdXRpbHMvcGF0dGVyblwiO1xuXG5jb25zdCBQQVRURVJOID0gbmV3IFJlZ0V4cChcbiAgICBgKHRoaXN8bGFzdHxwYXN0fG5leHR8YWZ0ZXJcXFxccyp0aGlzKVxcXFxzKigke21hdGNoQW55UGF0dGVybihUSU1FX1VOSVRfRElDVElPTkFSWSl9KSg/PVxcXFxzKilgICsgXCIoPz1cXFxcV3wkKVwiLFxuICAgIFwiaVwiXG4pO1xuXG5jb25zdCBNT0RJRklFUl9XT1JEX0dST1VQID0gMTtcbmNvbnN0IFJFTEFUSVZFX1dPUkRfR1JPVVAgPSAyO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBFTlJlbGF0aXZlRGF0ZUZvcm1hdFBhcnNlciBleHRlbmRzIEFic3RyYWN0UGFyc2VyV2l0aFdvcmRCb3VuZGFyeUNoZWNraW5nIHtcbiAgICBpbm5lclBhdHRlcm4oKTogUmVnRXhwIHtcbiAgICAgICAgcmV0dXJuIFBBVFRFUk47XG4gICAgfVxuXG4gICAgaW5uZXJFeHRyYWN0KGNvbnRleHQ6IFBhcnNpbmdDb250ZXh0LCBtYXRjaDogUmVnRXhwTWF0Y2hBcnJheSk6IFBhcnNpbmdDb21wb25lbnRzIHtcbiAgICAgICAgY29uc3QgbW9kaWZpZXIgPSBtYXRjaFtNT0RJRklFUl9XT1JEX0dST1VQXS50b0xvd2VyQ2FzZSgpO1xuICAgICAgICBjb25zdCB1bml0V29yZCA9IG1hdGNoW1JFTEFUSVZFX1dPUkRfR1JPVVBdLnRvTG93ZXJDYXNlKCk7XG4gICAgICAgIGNvbnN0IHRpbWV1bml0ID0gVElNRV9VTklUX0RJQ1RJT05BUllbdW5pdFdvcmRdO1xuXG4gICAgICAgIGlmIChtb2RpZmllciA9PSBcIm5leHRcIiB8fCBtb2RpZmllci5zdGFydHNXaXRoKFwiYWZ0ZXJcIikpIHtcbiAgICAgICAgICAgIGNvbnN0IHRpbWVVbml0cyA9IHt9O1xuICAgICAgICAgICAgdGltZVVuaXRzW3RpbWV1bml0XSA9IDE7XG4gICAgICAgICAgICByZXR1cm4gUGFyc2luZ0NvbXBvbmVudHMuY3JlYXRlUmVsYXRpdmVGcm9tUmVmZXJlbmNlKGNvbnRleHQucmVmZXJlbmNlLCB0aW1lVW5pdHMpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKG1vZGlmaWVyID09IFwibGFzdFwiIHx8IG1vZGlmaWVyID09IFwicGFzdFwiKSB7XG4gICAgICAgICAgICBjb25zdCB0aW1lVW5pdHMgPSB7fTtcbiAgICAgICAgICAgIHRpbWVVbml0c1t0aW1ldW5pdF0gPSAtMTtcbiAgICAgICAgICAgIHJldHVybiBQYXJzaW5nQ29tcG9uZW50cy5jcmVhdGVSZWxhdGl2ZUZyb21SZWZlcmVuY2UoY29udGV4dC5yZWZlcmVuY2UsIHRpbWVVbml0cyk7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBjb21wb25lbnRzID0gY29udGV4dC5jcmVhdGVQYXJzaW5nQ29tcG9uZW50cygpO1xuICAgICAgICBsZXQgZGF0ZSA9IGRheWpzKGNvbnRleHQucmVmZXJlbmNlLmluc3RhbnQpO1xuXG4gICAgICAgIC8vIFRoaXMgd2Vla1xuICAgICAgICBpZiAodW5pdFdvcmQubWF0Y2goL3dlZWsvaSkpIHtcbiAgICAgICAgICAgIGRhdGUgPSBkYXRlLmFkZCgtZGF0ZS5nZXQoXCJkXCIpLCBcImRcIik7XG4gICAgICAgICAgICBjb21wb25lbnRzLmltcGx5KFwiZGF5XCIsIGRhdGUuZGF0ZSgpKTtcbiAgICAgICAgICAgIGNvbXBvbmVudHMuaW1wbHkoXCJtb250aFwiLCBkYXRlLm1vbnRoKCkgKyAxKTtcbiAgICAgICAgICAgIGNvbXBvbmVudHMuaW1wbHkoXCJ5ZWFyXCIsIGRhdGUueWVhcigpKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFRoaXMgbW9udGhcbiAgICAgICAgZWxzZSBpZiAodW5pdFdvcmQubWF0Y2goL21vbnRoL2kpKSB7XG4gICAgICAgICAgICBkYXRlID0gZGF0ZS5hZGQoLWRhdGUuZGF0ZSgpICsgMSwgXCJkXCIpO1xuICAgICAgICAgICAgY29tcG9uZW50cy5pbXBseShcImRheVwiLCBkYXRlLmRhdGUoKSk7XG4gICAgICAgICAgICBjb21wb25lbnRzLmFzc2lnbihcInllYXJcIiwgZGF0ZS55ZWFyKCkpO1xuICAgICAgICAgICAgY29tcG9uZW50cy5hc3NpZ24oXCJtb250aFwiLCBkYXRlLm1vbnRoKCkgKyAxKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFRoaXMgeWVhclxuICAgICAgICBlbHNlIGlmICh1bml0V29yZC5tYXRjaCgveWVhci9pKSkge1xuICAgICAgICAgICAgZGF0ZSA9IGRhdGUuYWRkKC1kYXRlLmRhdGUoKSArIDEsIFwiZFwiKTtcbiAgICAgICAgICAgIGRhdGUgPSBkYXRlLmFkZCgtZGF0ZS5tb250aCgpLCBcIm1vbnRoXCIpO1xuXG4gICAgICAgICAgICBjb21wb25lbnRzLmltcGx5KFwiZGF5XCIsIGRhdGUuZGF0ZSgpKTtcbiAgICAgICAgICAgIGNvbXBvbmVudHMuaW1wbHkoXCJtb250aFwiLCBkYXRlLm1vbnRoKCkgKyAxKTtcbiAgICAgICAgICAgIGNvbXBvbmVudHMuYXNzaWduKFwieWVhclwiLCBkYXRlLnllYXIoKSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gY29tcG9uZW50cztcbiAgICB9XG59XG4iLCAiaW1wb3J0IHsgUGFyc2VyLCBQYXJzaW5nQ29udGV4dCB9IGZyb20gXCIuLi8uLi9jaHJvbm9cIjtcbmltcG9ydCB7IFBhcnNpbmdSZXN1bHQgfSBmcm9tIFwiLi4vLi4vcmVzdWx0c1wiO1xuaW1wb3J0IHsgZmluZE1vc3RMaWtlbHlBRFllYXIsIGZpbmRZZWFyQ2xvc2VzdFRvUmVmIH0gZnJvbSBcIi4uLy4uL2NhbGN1bGF0aW9uL3llYXJzXCI7XG5cbi8qKlxuICogRGF0ZSBmb3JtYXQgd2l0aCBzbGFzaCBcIi9cIiAob3IgZG90IFwiLlwiKSBiZXR3ZWVuIG51bWJlcnMuXG4gKiBGb3IgZXhhbXBsZXM6XG4gKiAtIDcvMTBcbiAqIC0gNy8xMi8yMDIwXG4gKiAtIDcuMTIuMjAyMFxuICovXG5jb25zdCBQQVRURVJOID0gbmV3IFJlZ0V4cChcbiAgICBcIihbXlxcXFxkXXxeKVwiICtcbiAgICAgICAgXCIoWzAtM117MCwxfVswLTldezF9KVtcXFxcL1xcXFwuXFxcXC1dKFswLTNdezAsMX1bMC05XXsxfSlcIiArXG4gICAgICAgIFwiKD86W1xcXFwvXFxcXC5cXFxcLV0oWzAtOV17NH18WzAtOV17Mn0pKT9cIiArXG4gICAgICAgIFwiKFxcXFxXfCQpXCIsXG4gICAgXCJpXCJcbik7XG5cbmNvbnN0IE9QRU5JTkdfR1JPVVAgPSAxO1xuY29uc3QgRU5ESU5HX0dST1VQID0gNTtcblxuY29uc3QgRklSU1RfTlVNQkVSU19HUk9VUCA9IDI7XG5jb25zdCBTRUNPTkRfTlVNQkVSU19HUk9VUCA9IDM7XG5cbmNvbnN0IFlFQVJfR1JPVVAgPSA0O1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTbGFzaERhdGVGb3JtYXRQYXJzZXIgaW1wbGVtZW50cyBQYXJzZXIge1xuICAgIGdyb3VwTnVtYmVyTW9udGg6IG51bWJlcjtcbiAgICBncm91cE51bWJlckRheTogbnVtYmVyO1xuXG4gICAgY29uc3RydWN0b3IobGl0dGxlRW5kaWFuOiBib29sZWFuKSB7XG4gICAgICAgIHRoaXMuZ3JvdXBOdW1iZXJNb250aCA9IGxpdHRsZUVuZGlhbiA/IFNFQ09ORF9OVU1CRVJTX0dST1VQIDogRklSU1RfTlVNQkVSU19HUk9VUDtcbiAgICAgICAgdGhpcy5ncm91cE51bWJlckRheSA9IGxpdHRsZUVuZGlhbiA/IEZJUlNUX05VTUJFUlNfR1JPVVAgOiBTRUNPTkRfTlVNQkVSU19HUk9VUDtcbiAgICB9XG5cbiAgICBwYXR0ZXJuKCk6IFJlZ0V4cCB7XG4gICAgICAgIHJldHVybiBQQVRURVJOO1xuICAgIH1cblxuICAgIGV4dHJhY3QoY29udGV4dDogUGFyc2luZ0NvbnRleHQsIG1hdGNoOiBSZWdFeHBNYXRjaEFycmF5KTogUGFyc2luZ1Jlc3VsdCB7XG4gICAgICAgIC8vIEJlY2F1c2Ugb2YgaG93IHBhdHRlcm4gaXMgZXhlY3V0ZWQgb24gcmVtYWluaW5nIHRleHQgaW4gYGNocm9uby50c2AsIHRoZSBjaGFyYWN0ZXIgYmVmb3JlIHRoZSBtYXRjaCBjb3VsZFxuICAgICAgICAvLyBzdGlsbCBiZSBhIG51bWJlciAoZS5nLiBYW1gvWVkvWlpdIG9yIFhYWy9ZWS9aWl0gb3IgW1hYL1lZL11aWikuIFdlIHdhbnQgdG8gY2hlY2sgYW5kIHNraXAgdGhlbS5cbiAgICAgICAgY29uc3QgaW5kZXggPSBtYXRjaC5pbmRleCArIG1hdGNoW09QRU5JTkdfR1JPVVBdLmxlbmd0aDtcbiAgICAgICAgY29uc3QgaW5kZXhFbmQgPSBtYXRjaC5pbmRleCArIG1hdGNoWzBdLmxlbmd0aCAtIG1hdGNoW0VORElOR19HUk9VUF0ubGVuZ3RoO1xuICAgICAgICBpZiAoaW5kZXggPiAwKSB7XG4gICAgICAgICAgICBjb25zdCB0ZXh0QmVmb3JlID0gY29udGV4dC50ZXh0LnN1YnN0cmluZygwLCBpbmRleCk7XG4gICAgICAgICAgICBpZiAodGV4dEJlZm9yZS5tYXRjaChcIlxcXFxkLz8kXCIpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmIChpbmRleEVuZCA8IGNvbnRleHQudGV4dC5sZW5ndGgpIHtcbiAgICAgICAgICAgIGNvbnN0IHRleHRBZnRlciA9IGNvbnRleHQudGV4dC5zdWJzdHJpbmcoaW5kZXhFbmQpO1xuICAgICAgICAgICAgaWYgKHRleHRBZnRlci5tYXRjaChcIl4vP1xcXFxkXCIpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgdGV4dCA9IGNvbnRleHQudGV4dC5zdWJzdHJpbmcoaW5kZXgsIGluZGV4RW5kKTtcblxuICAgICAgICAvLyAnMS4xMicsICcxLjEyLjEyJyBpcyBtb3JlIGxpa2UgYSB2ZXJzaW9uIG51bWJlcnNcbiAgICAgICAgaWYgKHRleHQubWF0Y2goL15cXGRcXC5cXGQkLykgfHwgdGV4dC5tYXRjaCgvXlxcZFxcLlxcZHsxLDJ9XFwuXFxkezEsMn1cXHMqJC8pKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICAvLyBNTS9kZCAtPiBPS1xuICAgICAgICAvLyBNTS5kZCAtPiBOR1xuICAgICAgICBpZiAoIW1hdGNoW1lFQVJfR1JPVVBdICYmIHRleHQuaW5kZXhPZihcIi9cIikgPCAwKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCByZXN1bHQgPSBjb250ZXh0LmNyZWF0ZVBhcnNpbmdSZXN1bHQoaW5kZXgsIHRleHQpO1xuICAgICAgICBsZXQgbW9udGggPSBwYXJzZUludChtYXRjaFt0aGlzLmdyb3VwTnVtYmVyTW9udGhdKTtcbiAgICAgICAgbGV0IGRheSA9IHBhcnNlSW50KG1hdGNoW3RoaXMuZ3JvdXBOdW1iZXJEYXldKTtcbiAgICAgICAgaWYgKG1vbnRoIDwgMSB8fCBtb250aCA+IDEyKSB7XG4gICAgICAgICAgICBpZiAobW9udGggPiAxMikge1xuICAgICAgICAgICAgICAgIGlmIChkYXkgPj0gMSAmJiBkYXkgPD0gMTIgJiYgbW9udGggPD0gMzEpIHtcbiAgICAgICAgICAgICAgICAgICAgW2RheSwgbW9udGhdID0gW21vbnRoLCBkYXldO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChkYXkgPCAxIHx8IGRheSA+IDMxKSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuXG4gICAgICAgIHJlc3VsdC5zdGFydC5hc3NpZ24oXCJkYXlcIiwgZGF5KTtcbiAgICAgICAgcmVzdWx0LnN0YXJ0LmFzc2lnbihcIm1vbnRoXCIsIG1vbnRoKTtcblxuICAgICAgICBpZiAobWF0Y2hbWUVBUl9HUk9VUF0pIHtcbiAgICAgICAgICAgIGNvbnN0IHJhd1llYXJOdW1iZXIgPSBwYXJzZUludChtYXRjaFtZRUFSX0dST1VQXSk7XG4gICAgICAgICAgICBjb25zdCB5ZWFyID0gZmluZE1vc3RMaWtlbHlBRFllYXIocmF3WWVhck51bWJlcik7XG4gICAgICAgICAgICByZXN1bHQuc3RhcnQuYXNzaWduKFwieWVhclwiLCB5ZWFyKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbnN0IHllYXIgPSBmaW5kWWVhckNsb3Nlc3RUb1JlZihjb250ZXh0LnJlZkRhdGUsIGRheSwgbW9udGgpO1xuICAgICAgICAgICAgcmVzdWx0LnN0YXJ0LmltcGx5KFwieWVhclwiLCB5ZWFyKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiByZXN1bHQuYWRkVGFnKFwicGFyc2VyL1NsYXNoRGF0ZUZvcm1hdFBhcnNlclwiKTtcbiAgICB9XG59XG4iLCAiaW1wb3J0IHsgVElNRV9VTklUU19QQVRURVJOLCBwYXJzZVRpbWVVbml0cywgVElNRV9VTklUU19OT19BQkJSX1BBVFRFUk4gfSBmcm9tIFwiLi4vY29uc3RhbnRzXCI7XG5pbXBvcnQgeyBQYXJzaW5nQ29udGV4dCB9IGZyb20gXCIuLi8uLi8uLi9jaHJvbm9cIjtcbmltcG9ydCB7IFBhcnNpbmdDb21wb25lbnRzIH0gZnJvbSBcIi4uLy4uLy4uL3Jlc3VsdHNcIjtcbmltcG9ydCB7IEFic3RyYWN0UGFyc2VyV2l0aFdvcmRCb3VuZGFyeUNoZWNraW5nIH0gZnJvbSBcIi4uLy4uLy4uL2NvbW1vbi9wYXJzZXJzL0Fic3RyYWN0UGFyc2VyV2l0aFdvcmRCb3VuZGFyeVwiO1xuaW1wb3J0IHsgcmV2ZXJzZVRpbWVVbml0cyB9IGZyb20gXCIuLi8uLi8uLi91dGlscy90aW1ldW5pdHNcIjtcblxuY29uc3QgUEFUVEVSTiA9IG5ldyBSZWdFeHAoYCh0aGlzfGxhc3R8cGFzdHxuZXh0fGFmdGVyfFxcXFwrfC0pXFxcXHMqKCR7VElNRV9VTklUU19QQVRURVJOfSkoPz1cXFxcV3wkKWAsIFwiaVwiKTtcbmNvbnN0IFBBVFRFUk5fTk9fQUJCUiA9IG5ldyBSZWdFeHAoXG4gICAgYCh0aGlzfGxhc3R8cGFzdHxuZXh0fGFmdGVyfFxcXFwrfC0pXFxcXHMqKCR7VElNRV9VTklUU19OT19BQkJSX1BBVFRFUk59KSg/PVxcXFxXfCQpYCxcbiAgICBcImlcIlxuKTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRU5UaW1lVW5pdENhc3VhbFJlbGF0aXZlRm9ybWF0UGFyc2VyIGV4dGVuZHMgQWJzdHJhY3RQYXJzZXJXaXRoV29yZEJvdW5kYXJ5Q2hlY2tpbmcge1xuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgYWxsb3dBYmJyZXZpYXRpb25zOiBib29sZWFuID0gdHJ1ZSkge1xuICAgICAgICBzdXBlcigpO1xuICAgIH1cblxuICAgIGlubmVyUGF0dGVybigpOiBSZWdFeHAge1xuICAgICAgICByZXR1cm4gdGhpcy5hbGxvd0FiYnJldmlhdGlvbnMgPyBQQVRURVJOIDogUEFUVEVSTl9OT19BQkJSO1xuICAgIH1cblxuICAgIGlubmVyRXh0cmFjdChjb250ZXh0OiBQYXJzaW5nQ29udGV4dCwgbWF0Y2g6IFJlZ0V4cE1hdGNoQXJyYXkpIHtcbiAgICAgICAgY29uc3QgcHJlZml4ID0gbWF0Y2hbMV0udG9Mb3dlckNhc2UoKTtcbiAgICAgICAgbGV0IHRpbWVVbml0cyA9IHBhcnNlVGltZVVuaXRzKG1hdGNoWzJdKTtcbiAgICAgICAgaWYgKCF0aW1lVW5pdHMpIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG4gICAgICAgIHN3aXRjaCAocHJlZml4KSB7XG4gICAgICAgICAgICBjYXNlIFwibGFzdFwiOlxuICAgICAgICAgICAgY2FzZSBcInBhc3RcIjpcbiAgICAgICAgICAgIGNhc2UgXCItXCI6XG4gICAgICAgICAgICAgICAgdGltZVVuaXRzID0gcmV2ZXJzZVRpbWVVbml0cyh0aW1lVW5pdHMpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBQYXJzaW5nQ29tcG9uZW50cy5jcmVhdGVSZWxhdGl2ZUZyb21SZWZlcmVuY2UoY29udGV4dC5yZWZlcmVuY2UsIHRpbWVVbml0cyk7XG4gICAgfVxufVxuIiwgImltcG9ydCB7IE1lcmdpbmdSZWZpbmVyIH0gZnJvbSBcIi4uLy4uLy4uL2NvbW1vbi9hYnN0cmFjdFJlZmluZXJzXCI7XG5pbXBvcnQgeyBQYXJzaW5nQ29tcG9uZW50cywgUGFyc2luZ1Jlc3VsdCwgUmVmZXJlbmNlV2l0aFRpbWV6b25lIH0gZnJvbSBcIi4uLy4uLy4uL3Jlc3VsdHNcIjtcbmltcG9ydCB7IHBhcnNlVGltZVVuaXRzIH0gZnJvbSBcIi4uL2NvbnN0YW50c1wiO1xuaW1wb3J0IHsgcmV2ZXJzZVRpbWVVbml0cyB9IGZyb20gXCIuLi8uLi8uLi91dGlscy90aW1ldW5pdHNcIjtcblxuZnVuY3Rpb24gSXNQb3NpdGl2ZUZvbGxvd2luZ1JlZmVyZW5jZShyZXN1bHQ6IFBhcnNpbmdSZXN1bHQpOiBib29sZWFuIHtcbiAgICByZXR1cm4gcmVzdWx0LnRleHQubWF0Y2goL15bKy1dL2kpICE9IG51bGw7XG59XG5cbmZ1bmN0aW9uIElzTmVnYXRpdmVGb2xsb3dpbmdSZWZlcmVuY2UocmVzdWx0OiBQYXJzaW5nUmVzdWx0KTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHJlc3VsdC50ZXh0Lm1hdGNoKC9eLS9pKSAhPSBudWxsO1xufVxuXG4vKipcbiAqIE1lcmdlcyBhIHJlbGF0aXZlIGRhdGEvdGltZSB0aGF0IGNvbWVzIGFmdGVyIGFuIGFic29sdXRlIGRhdGUuXG4gKiAtIFsyMDIwLTAyLTEzXSBbKzIgd2Vla3NdXG4gKiAtIFtuZXh0IHR1ZXNkYXldIFsrMTAgZGF5c11cbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRU5NZXJnZVJlbGF0aXZlQWZ0ZXJEYXRlUmVmaW5lciBleHRlbmRzIE1lcmdpbmdSZWZpbmVyIHtcbiAgICBzaG91bGRNZXJnZVJlc3VsdHModGV4dEJldHdlZW46IHN0cmluZywgY3VycmVudFJlc3VsdDogUGFyc2luZ1Jlc3VsdCwgbmV4dFJlc3VsdDogUGFyc2luZ1Jlc3VsdCk6IGJvb2xlYW4ge1xuICAgICAgICBpZiAoIXRleHRCZXR3ZWVuLm1hdGNoKC9eXFxzKiQvaSkpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBJc1Bvc2l0aXZlRm9sbG93aW5nUmVmZXJlbmNlKG5leHRSZXN1bHQpIHx8IElzTmVnYXRpdmVGb2xsb3dpbmdSZWZlcmVuY2UobmV4dFJlc3VsdCk7XG4gICAgfVxuXG4gICAgbWVyZ2VSZXN1bHRzKHRleHRCZXR3ZWVuOiBzdHJpbmcsIGN1cnJlbnRSZXN1bHQ6IFBhcnNpbmdSZXN1bHQsIG5leHRSZXN1bHQ6IFBhcnNpbmdSZXN1bHQsIGNvbnRleHQpOiBQYXJzaW5nUmVzdWx0IHtcbiAgICAgICAgbGV0IHRpbWVVbml0cyA9IHBhcnNlVGltZVVuaXRzKG5leHRSZXN1bHQudGV4dCk7XG4gICAgICAgIGlmIChJc05lZ2F0aXZlRm9sbG93aW5nUmVmZXJlbmNlKG5leHRSZXN1bHQpKSB7XG4gICAgICAgICAgICB0aW1lVW5pdHMgPSByZXZlcnNlVGltZVVuaXRzKHRpbWVVbml0cyk7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBjb21wb25lbnRzID0gUGFyc2luZ0NvbXBvbmVudHMuY3JlYXRlUmVsYXRpdmVGcm9tUmVmZXJlbmNlKFxuICAgICAgICAgICAgbmV3IFJlZmVyZW5jZVdpdGhUaW1lem9uZShjdXJyZW50UmVzdWx0LnN0YXJ0LmRhdGUoKSksXG4gICAgICAgICAgICB0aW1lVW5pdHNcbiAgICAgICAgKTtcblxuICAgICAgICByZXR1cm4gbmV3IFBhcnNpbmdSZXN1bHQoXG4gICAgICAgICAgICBjdXJyZW50UmVzdWx0LnJlZmVyZW5jZSxcbiAgICAgICAgICAgIGN1cnJlbnRSZXN1bHQuaW5kZXgsXG4gICAgICAgICAgICBgJHtjdXJyZW50UmVzdWx0LnRleHR9JHt0ZXh0QmV0d2Vlbn0ke25leHRSZXN1bHQudGV4dH1gLFxuICAgICAgICAgICAgY29tcG9uZW50c1xuICAgICAgICApO1xuICAgIH1cbn1cbiIsICJpbXBvcnQgeyBNZXJnaW5nUmVmaW5lciB9IGZyb20gXCIuLi8uLi8uLi9jb21tb24vYWJzdHJhY3RSZWZpbmVyc1wiO1xuaW1wb3J0IHsgUGFyc2luZ0NvbXBvbmVudHMsIFBhcnNpbmdSZXN1bHQsIFJlZmVyZW5jZVdpdGhUaW1lem9uZSB9IGZyb20gXCIuLi8uLi8uLi9yZXN1bHRzXCI7XG5pbXBvcnQgeyBwYXJzZVRpbWVVbml0cyB9IGZyb20gXCIuLi9jb25zdGFudHNcIjtcbmltcG9ydCB7IHJldmVyc2VUaW1lVW5pdHMgfSBmcm9tIFwiLi4vLi4vLi4vdXRpbHMvdGltZXVuaXRzXCI7XG5cbmZ1bmN0aW9uIGhhc0ltcGxpZWRFYXJsaWVyUmVmZXJlbmNlRGF0ZShyZXN1bHQ6IFBhcnNpbmdSZXN1bHQpOiBib29sZWFuIHtcbiAgICByZXR1cm4gcmVzdWx0LnRleHQubWF0Y2goL1xccysoYmVmb3JlfGZyb20pJC9pKSAhPSBudWxsO1xufVxuXG5mdW5jdGlvbiBoYXNJbXBsaWVkTGF0ZXJSZWZlcmVuY2VEYXRlKHJlc3VsdDogUGFyc2luZ1Jlc3VsdCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiByZXN1bHQudGV4dC5tYXRjaCgvXFxzKyhhZnRlcnxzaW5jZSkkL2kpICE9IG51bGw7XG59XG5cbi8qKlxuICogTWVyZ2VzIGEgcmVsYXRpdmUgZGF0YS90aW1lIHRoYXQgZm9sbG93IGJ5IGFuIGFic29sdXRlIGRhdGUuXG4gKiAtIFsyIHdlZWtzIGJlZm9yZV0gWzIwMjAtMDItMTNdXG4gKiAtIFsyIGRheXMgYWZ0ZXJdIFtuZXh0IEZyaWRheV1cbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRU5NZXJnZVJlbGF0aXZlRm9sbG93QnlEYXRlUmVmaW5lciBleHRlbmRzIE1lcmdpbmdSZWZpbmVyIHtcbiAgICBwYXR0ZXJuQmV0d2VlbigpOiBSZWdFeHAge1xuICAgICAgICByZXR1cm4gL15cXHMqJC9pO1xuICAgIH1cblxuICAgIHNob3VsZE1lcmdlUmVzdWx0cyh0ZXh0QmV0d2Vlbjogc3RyaW5nLCBjdXJyZW50UmVzdWx0OiBQYXJzaW5nUmVzdWx0LCBuZXh0UmVzdWx0OiBQYXJzaW5nUmVzdWx0KTogYm9vbGVhbiB7XG4gICAgICAgIC8vIERhdGVzIG5lZWQgdG8gYmUgbmV4dCB0byBlYWNoIG90aGVyIHRvIGdldCBtZXJnZWRcbiAgICAgICAgaWYgKCF0ZXh0QmV0d2Vlbi5tYXRjaCh0aGlzLnBhdHRlcm5CZXR3ZWVuKCkpKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBDaGVjayBpZiBhbnkgcmVsYXRpdmUgdG9rZW5zIHdlcmUgc3dhbGxvd2VkIGJ5IHRoZSBmaXJzdCBkYXRlLlxuICAgICAgICAvLyBFLmcuIFs8cmVsYXRpdmVfZGF0ZTE+IGZyb21dIFs8ZGF0ZTI+XVxuICAgICAgICBpZiAoIWhhc0ltcGxpZWRFYXJsaWVyUmVmZXJlbmNlRGF0ZShjdXJyZW50UmVzdWx0KSAmJiAhaGFzSW1wbGllZExhdGVyUmVmZXJlbmNlRGF0ZShjdXJyZW50UmVzdWx0KSkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gbWFrZSBzdXJlIHRoYXQgPGRhdGUyPiBpbXBsaWVzIGFuIGFic29sdXRlIGRhdGVcbiAgICAgICAgcmV0dXJuICEhbmV4dFJlc3VsdC5zdGFydC5nZXQoXCJkYXlcIikgJiYgISFuZXh0UmVzdWx0LnN0YXJ0LmdldChcIm1vbnRoXCIpICYmICEhbmV4dFJlc3VsdC5zdGFydC5nZXQoXCJ5ZWFyXCIpO1xuICAgIH1cblxuICAgIG1lcmdlUmVzdWx0cyh0ZXh0QmV0d2Vlbjogc3RyaW5nLCBjdXJyZW50UmVzdWx0OiBQYXJzaW5nUmVzdWx0LCBuZXh0UmVzdWx0OiBQYXJzaW5nUmVzdWx0KTogUGFyc2luZ1Jlc3VsdCB7XG4gICAgICAgIGxldCB0aW1lVW5pdHMgPSBwYXJzZVRpbWVVbml0cyhjdXJyZW50UmVzdWx0LnRleHQpO1xuICAgICAgICBpZiAoaGFzSW1wbGllZEVhcmxpZXJSZWZlcmVuY2VEYXRlKGN1cnJlbnRSZXN1bHQpKSB7XG4gICAgICAgICAgICB0aW1lVW5pdHMgPSByZXZlcnNlVGltZVVuaXRzKHRpbWVVbml0cyk7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBjb21wb25lbnRzID0gUGFyc2luZ0NvbXBvbmVudHMuY3JlYXRlUmVsYXRpdmVGcm9tUmVmZXJlbmNlKFxuICAgICAgICAgICAgbmV3IFJlZmVyZW5jZVdpdGhUaW1lem9uZShuZXh0UmVzdWx0LnN0YXJ0LmRhdGUoKSksXG4gICAgICAgICAgICB0aW1lVW5pdHNcbiAgICAgICAgKTtcblxuICAgICAgICByZXR1cm4gbmV3IFBhcnNpbmdSZXN1bHQoXG4gICAgICAgICAgICBuZXh0UmVzdWx0LnJlZmVyZW5jZSxcbiAgICAgICAgICAgIGN1cnJlbnRSZXN1bHQuaW5kZXgsXG4gICAgICAgICAgICBgJHtjdXJyZW50UmVzdWx0LnRleHR9JHt0ZXh0QmV0d2Vlbn0ke25leHRSZXN1bHQudGV4dH1gLFxuICAgICAgICAgICAgY29tcG9uZW50c1xuICAgICAgICApO1xuICAgIH1cbn1cbiIsICJpbXBvcnQgeyBQYXJzaW5nQ29udGV4dCwgUmVmaW5lciB9IGZyb20gXCIuLi8uLi8uLi9jaHJvbm9cIjtcbmltcG9ydCB7IFBhcnNpbmdSZXN1bHQgfSBmcm9tIFwiLi4vLi4vLi4vcmVzdWx0c1wiO1xuaW1wb3J0IHsgWUVBUl9QQVRURVJOLCBwYXJzZVllYXIgfSBmcm9tIFwiLi4vY29uc3RhbnRzXCI7XG5cbmNvbnN0IFlFQVJfU1VGRklYX1BBVFRFUk4gPSBuZXcgUmVnRXhwKGBeXFxcXHMqKCR7WUVBUl9QQVRURVJOfSlgLCBcImlcIik7XG5jb25zdCBZRUFSX0dST1VQID0gMTtcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEVORXh0cmFjdFllYXJTdWZmaXhSZWZpbmVyIGltcGxlbWVudHMgUmVmaW5lciB7XG4gICAgcmVmaW5lKGNvbnRleHQ6IFBhcnNpbmdDb250ZXh0LCByZXN1bHRzOiBQYXJzaW5nUmVzdWx0W10pOiBQYXJzaW5nUmVzdWx0W10ge1xuICAgICAgICByZXN1bHRzLmZvckVhY2goZnVuY3Rpb24gKHJlc3VsdCkge1xuICAgICAgICAgICAgaWYgKCFyZXN1bHQuc3RhcnQuaXNEYXRlV2l0aFVua25vd25ZZWFyKCkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGNvbnN0IHN1ZmZpeCA9IGNvbnRleHQudGV4dC5zdWJzdHJpbmcocmVzdWx0LmluZGV4ICsgcmVzdWx0LnRleHQubGVuZ3RoKTtcbiAgICAgICAgICAgIGNvbnN0IG1hdGNoID0gWUVBUl9TVUZGSVhfUEFUVEVSTi5leGVjKHN1ZmZpeCk7XG4gICAgICAgICAgICBpZiAoIW1hdGNoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjb250ZXh0LmRlYnVnKCgpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhgRXh0cmFjdGluZyB5ZWFyOiAnJHttYXRjaFswXX0nIGludG8gOiAke3Jlc3VsdH1gKTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBjb25zdCB5ZWFyID0gcGFyc2VZZWFyKG1hdGNoW1lFQVJfR1JPVVBdKTtcbiAgICAgICAgICAgIGlmIChyZXN1bHQuZW5kICE9IG51bGwpIHtcbiAgICAgICAgICAgICAgICByZXN1bHQuZW5kLmFzc2lnbihcInllYXJcIiwgeWVhcik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXN1bHQuc3RhcnQuYXNzaWduKFwieWVhclwiLCB5ZWFyKTtcbiAgICAgICAgICAgIHJlc3VsdC50ZXh0ICs9IG1hdGNoWzBdO1xuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gcmVzdWx0cztcbiAgICB9XG59XG4iLCAiaW1wb3J0IHsgRmlsdGVyIH0gZnJvbSBcIi4uLy4uLy4uL2NvbW1vbi9hYnN0cmFjdFJlZmluZXJzXCI7XG5pbXBvcnQgeyBQYXJzaW5nUmVzdWx0IH0gZnJvbSBcIi4uLy4uLy4uL3Jlc3VsdHNcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRU5Vbmxpa2VseUZvcm1hdEZpbHRlciBleHRlbmRzIEZpbHRlciB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgfVxuXG4gICAgaXNWYWxpZChjb250ZXh0LCByZXN1bHQ6IFBhcnNpbmdSZXN1bHQpOiBib29sZWFuIHtcbiAgICAgICAgY29uc3QgdGV4dCA9IHJlc3VsdC50ZXh0LnRyaW0oKTtcblxuICAgICAgICAvLyBJZiB0aGUgcmVzdWx0IGlzIGNvbnNpc3RzIG9mIHRoZSB3aG9sZSB0ZXh0IChlLmcuIFwiMjAyNFwiLCBcIk1heVwiLCBldGMpLFxuICAgICAgICAvLyB0aGVuIGl0IGlzIHVubGlrZWx5IHRvIGJlIGEgZGF0ZS5cbiAgICAgICAgaWYgKHRleHQgPT09IGNvbnRleHQudGV4dC50cmltKCkpIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gSW4gRW5nbGlzaCwgdGhlIHdvcmQgXCJtYXlcIiBpcyBhIG1vbnRoIG5hbWUsIGJ1dCBpdCBpcyBhbHNvIGEgbW9kYWwgdmVyYi5cbiAgICAgICAgLy8gQ2hlY2sgaWYgdGhlIHRleHQgYmVmb3JlIFwibWF5XCIgZm9sbG93cyBzb21lIGFsbG93ZWQgcGF0dGVybnMuXG4gICAgICAgIGlmICh0ZXh0LnRvTG93ZXJDYXNlKCkgPT09IFwibWF5XCIpIHtcbiAgICAgICAgICAgIGNvbnN0IHRleHRCZWZvcmUgPSBjb250ZXh0LnRleHQuc3Vic3RyaW5nKDAsIHJlc3VsdC5pbmRleCkudHJpbSgpO1xuICAgICAgICAgICAgaWYgKCF0ZXh0QmVmb3JlLm1hdGNoKC9cXGIoaW4pJC9pKSkge1xuICAgICAgICAgICAgICAgIGNvbnRleHQuZGVidWcoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhgUmVtb3ZpbmcgdW5saWtlbHkgcmVzdWx0OiAke3Jlc3VsdH1gKTtcbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8vIEluIEVuZ2xpc2gsIFwidGhlIHNlY29uZFwiIGNvdWxkIHJlZmVyIHRvIHRoZSBvcmRpbmFsIG51bWJlciBvciB0aW1ldW5pdC5cbiAgICAgICAgaWYgKHRleHQudG9Mb3dlckNhc2UoKS5lbmRzV2l0aChcInRoZSBzZWNvbmRcIikpIHtcbiAgICAgICAgICAgIGNvbnN0IHRleHRBZnRlciA9IGNvbnRleHQudGV4dC5zdWJzdHJpbmcocmVzdWx0LmluZGV4ICsgcmVzdWx0LnRleHQubGVuZ3RoKS50cmltKCk7XG4gICAgICAgICAgICBpZiAodGV4dEFmdGVyLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICBjb250ZXh0LmRlYnVnKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coYFJlbW92aW5nIHVubGlrZWx5IHJlc3VsdDogJHtyZXN1bHR9YCk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG59XG4iLCAiaW1wb3J0IHsgQ29uZmlndXJhdGlvbiB9IGZyb20gXCIuLi8uLi9jaHJvbm9cIjtcblxuaW1wb3J0IEVOVGltZVVuaXRXaXRoaW5Gb3JtYXRQYXJzZXIgZnJvbSBcIi4vcGFyc2Vycy9FTlRpbWVVbml0V2l0aGluRm9ybWF0UGFyc2VyXCI7XG5pbXBvcnQgRU5Nb250aE5hbWVMaXR0bGVFbmRpYW5QYXJzZXIgZnJvbSBcIi4vcGFyc2Vycy9FTk1vbnRoTmFtZUxpdHRsZUVuZGlhblBhcnNlclwiO1xuaW1wb3J0IEVOTW9udGhOYW1lTWlkZGxlRW5kaWFuUGFyc2VyIGZyb20gXCIuL3BhcnNlcnMvRU5Nb250aE5hbWVNaWRkbGVFbmRpYW5QYXJzZXJcIjtcbmltcG9ydCBFTk1vbnRoTmFtZVBhcnNlciBmcm9tIFwiLi9wYXJzZXJzL0VOTW9udGhOYW1lUGFyc2VyXCI7XG5pbXBvcnQgRU5ZZWFyTW9udGhEYXlQYXJzZXIgZnJvbSBcIi4vcGFyc2Vycy9FTlllYXJNb250aERheVBhcnNlclwiO1xuaW1wb3J0IEVOU2xhc2hNb250aEZvcm1hdFBhcnNlciBmcm9tIFwiLi9wYXJzZXJzL0VOU2xhc2hNb250aEZvcm1hdFBhcnNlclwiO1xuaW1wb3J0IEVOVGltZUV4cHJlc3Npb25QYXJzZXIgZnJvbSBcIi4vcGFyc2Vycy9FTlRpbWVFeHByZXNzaW9uUGFyc2VyXCI7XG5pbXBvcnQgRU5UaW1lVW5pdEFnb0Zvcm1hdFBhcnNlciBmcm9tIFwiLi9wYXJzZXJzL0VOVGltZVVuaXRBZ29Gb3JtYXRQYXJzZXJcIjtcbmltcG9ydCBFTlRpbWVVbml0TGF0ZXJGb3JtYXRQYXJzZXIgZnJvbSBcIi4vcGFyc2Vycy9FTlRpbWVVbml0TGF0ZXJGb3JtYXRQYXJzZXJcIjtcbmltcG9ydCBFTk1lcmdlRGF0ZVJhbmdlUmVmaW5lciBmcm9tIFwiLi9yZWZpbmVycy9FTk1lcmdlRGF0ZVJhbmdlUmVmaW5lclwiO1xuaW1wb3J0IEVOTWVyZ2VEYXRlVGltZVJlZmluZXIgZnJvbSBcIi4vcmVmaW5lcnMvRU5NZXJnZURhdGVUaW1lUmVmaW5lclwiO1xuXG5pbXBvcnQgeyBpbmNsdWRlQ29tbW9uQ29uZmlndXJhdGlvbiB9IGZyb20gXCIuLi8uLi9jb25maWd1cmF0aW9uc1wiO1xuaW1wb3J0IEVOQ2FzdWFsRGF0ZVBhcnNlciBmcm9tIFwiLi9wYXJzZXJzL0VOQ2FzdWFsRGF0ZVBhcnNlclwiO1xuaW1wb3J0IEVOQ2FzdWFsVGltZVBhcnNlciBmcm9tIFwiLi9wYXJzZXJzL0VOQ2FzdWFsVGltZVBhcnNlclwiO1xuaW1wb3J0IEVOV2Vla2RheVBhcnNlciBmcm9tIFwiLi9wYXJzZXJzL0VOV2Vla2RheVBhcnNlclwiO1xuaW1wb3J0IEVOUmVsYXRpdmVEYXRlRm9ybWF0UGFyc2VyIGZyb20gXCIuL3BhcnNlcnMvRU5SZWxhdGl2ZURhdGVGb3JtYXRQYXJzZXJcIjtcblxuaW1wb3J0IFNsYXNoRGF0ZUZvcm1hdFBhcnNlciBmcm9tIFwiLi4vLi4vY29tbW9uL3BhcnNlcnMvU2xhc2hEYXRlRm9ybWF0UGFyc2VyXCI7XG5pbXBvcnQgRU5UaW1lVW5pdENhc3VhbFJlbGF0aXZlRm9ybWF0UGFyc2VyIGZyb20gXCIuL3BhcnNlcnMvRU5UaW1lVW5pdENhc3VhbFJlbGF0aXZlRm9ybWF0UGFyc2VyXCI7XG5pbXBvcnQgRU5NZXJnZVJlbGF0aXZlQWZ0ZXJEYXRlUmVmaW5lciBmcm9tIFwiLi9yZWZpbmVycy9FTk1lcmdlUmVsYXRpdmVBZnRlckRhdGVSZWZpbmVyXCI7XG5pbXBvcnQgRU5NZXJnZVJlbGF0aXZlRm9sbG93QnlEYXRlUmVmaW5lciBmcm9tIFwiLi9yZWZpbmVycy9FTk1lcmdlUmVsYXRpdmVGb2xsb3dCeURhdGVSZWZpbmVyXCI7XG5pbXBvcnQgT3ZlcmxhcFJlbW92YWxSZWZpbmVyIGZyb20gXCIuLi8uLi9jb21tb24vcmVmaW5lcnMvT3ZlcmxhcFJlbW92YWxSZWZpbmVyXCI7XG5pbXBvcnQgRU5FeHRyYWN0WWVhclN1ZmZpeFJlZmluZXIgZnJvbSBcIi4vcmVmaW5lcnMvRU5FeHRyYWN0WWVhclN1ZmZpeFJlZmluZXJcIjtcbmltcG9ydCBFTlVubGlrZWx5Rm9ybWF0RmlsdGVyIGZyb20gXCIuL3JlZmluZXJzL0VOVW5saWtlbHlGb3JtYXRGaWx0ZXJcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRU5EZWZhdWx0Q29uZmlndXJhdGlvbiB7XG4gICAgLyoqXG4gICAgICogQ3JlYXRlIGEgZGVmYXVsdCAqY2FzdWFsKiB7QExpbmsgQ29uZmlndXJhdGlvbn0gZm9yIEVuZ2xpc2ggY2hyb25vLlxuICAgICAqIEl0IGNhbGxzIHtATGluayBjcmVhdGVDb25maWd1cmF0aW9ufSBhbmQgaW5jbHVkZXMgYWRkaXRpb25hbCBwYXJzZXJzLlxuICAgICAqL1xuICAgIGNyZWF0ZUNhc3VhbENvbmZpZ3VyYXRpb24obGl0dGxlRW5kaWFuID0gZmFsc2UpOiBDb25maWd1cmF0aW9uIHtcbiAgICAgICAgY29uc3Qgb3B0aW9uID0gdGhpcy5jcmVhdGVDb25maWd1cmF0aW9uKGZhbHNlLCBsaXR0bGVFbmRpYW4pO1xuICAgICAgICBvcHRpb24ucGFyc2Vycy5wdXNoKG5ldyBFTkNhc3VhbERhdGVQYXJzZXIoKSk7XG4gICAgICAgIG9wdGlvbi5wYXJzZXJzLnB1c2gobmV3IEVOQ2FzdWFsVGltZVBhcnNlcigpKTtcbiAgICAgICAgb3B0aW9uLnBhcnNlcnMucHVzaChuZXcgRU5Nb250aE5hbWVQYXJzZXIoKSk7XG4gICAgICAgIG9wdGlvbi5wYXJzZXJzLnB1c2gobmV3IEVOUmVsYXRpdmVEYXRlRm9ybWF0UGFyc2VyKCkpO1xuICAgICAgICBvcHRpb24ucGFyc2Vycy5wdXNoKG5ldyBFTlRpbWVVbml0Q2FzdWFsUmVsYXRpdmVGb3JtYXRQYXJzZXIoKSk7XG4gICAgICAgIG9wdGlvbi5yZWZpbmVycy5wdXNoKG5ldyBFTlVubGlrZWx5Rm9ybWF0RmlsdGVyKCkpO1xuICAgICAgICByZXR1cm4gb3B0aW9uO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENyZWF0ZSBhIGRlZmF1bHQge0BMaW5rIENvbmZpZ3VyYXRpb259IGZvciBFbmdsaXNoIGNocm9ub1xuICAgICAqXG4gICAgICogQHBhcmFtIHN0cmljdE1vZGUgSWYgdGhlIHRpbWV1bml0IG1lbnRpb25pbmcgc2hvdWxkIGJlIHN0cmljdCwgbm90IGNhc3VhbFxuICAgICAqIEBwYXJhbSBsaXR0bGVFbmRpYW4gSWYgZm9ybWF0IHNob3VsZCBiZSBkYXRlLWZpcnN0L2xpdHRsZUVuZGlhbiAoZS5nLiBlbl9VSyksIG5vdCBtb250aC1maXJzdC9taWRkbGVFbmRpYW4gKGUuZy4gZW5fVVMpXG4gICAgICovXG4gICAgY3JlYXRlQ29uZmlndXJhdGlvbihzdHJpY3RNb2RlID0gdHJ1ZSwgbGl0dGxlRW5kaWFuID0gZmFsc2UpOiBDb25maWd1cmF0aW9uIHtcbiAgICAgICAgY29uc3Qgb3B0aW9ucyA9IGluY2x1ZGVDb21tb25Db25maWd1cmF0aW9uKFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHBhcnNlcnM6IFtcbiAgICAgICAgICAgICAgICAgICAgbmV3IFNsYXNoRGF0ZUZvcm1hdFBhcnNlcihsaXR0bGVFbmRpYW4pLFxuICAgICAgICAgICAgICAgICAgICBuZXcgRU5UaW1lVW5pdFdpdGhpbkZvcm1hdFBhcnNlcihzdHJpY3RNb2RlKSxcbiAgICAgICAgICAgICAgICAgICAgbmV3IEVOTW9udGhOYW1lTGl0dGxlRW5kaWFuUGFyc2VyKCksXG4gICAgICAgICAgICAgICAgICAgIG5ldyBFTk1vbnRoTmFtZU1pZGRsZUVuZGlhblBhcnNlcigvKnNob3VsZFNraXBZZWFyTGlrZURhdGU9Ki8gbGl0dGxlRW5kaWFuKSxcbiAgICAgICAgICAgICAgICAgICAgbmV3IEVOV2Vla2RheVBhcnNlcigpLFxuICAgICAgICAgICAgICAgICAgICBuZXcgRU5TbGFzaE1vbnRoRm9ybWF0UGFyc2VyKCksXG4gICAgICAgICAgICAgICAgICAgIG5ldyBFTlRpbWVFeHByZXNzaW9uUGFyc2VyKHN0cmljdE1vZGUpLFxuICAgICAgICAgICAgICAgICAgICBuZXcgRU5UaW1lVW5pdEFnb0Zvcm1hdFBhcnNlcihzdHJpY3RNb2RlKSxcbiAgICAgICAgICAgICAgICAgICAgbmV3IEVOVGltZVVuaXRMYXRlckZvcm1hdFBhcnNlcihzdHJpY3RNb2RlKSxcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIHJlZmluZXJzOiBbbmV3IEVOTWVyZ2VEYXRlVGltZVJlZmluZXIoKV0sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgc3RyaWN0TW9kZVxuICAgICAgICApO1xuICAgICAgICBvcHRpb25zLnBhcnNlcnMudW5zaGlmdChuZXcgRU5ZZWFyTW9udGhEYXlQYXJzZXIoLypzdHJpY3RNb250aERhdGVPcmRlcj0qLyBzdHJpY3RNb2RlKSk7XG5cbiAgICAgICAgLy8gVGhlc2UgcmVsYXRpdmUtZGF0ZXMgY29uc2lkZXJhdGlvbiBzaG91bGQgYmUgZG9uZSBiZWZvcmUgb3RoZXIgY29tbW9uIHJlZmluZXJzLlxuICAgICAgICBvcHRpb25zLnJlZmluZXJzLnVuc2hpZnQobmV3IEVOTWVyZ2VSZWxhdGl2ZUZvbGxvd0J5RGF0ZVJlZmluZXIoKSk7XG4gICAgICAgIG9wdGlvbnMucmVmaW5lcnMudW5zaGlmdChuZXcgRU5NZXJnZVJlbGF0aXZlQWZ0ZXJEYXRlUmVmaW5lcigpKTtcbiAgICAgICAgb3B0aW9ucy5yZWZpbmVycy51bnNoaWZ0KG5ldyBPdmVybGFwUmVtb3ZhbFJlZmluZXIoKSk7XG5cbiAgICAgICAgLy8gUmUtYXBwbHkgdGhlIGRhdGUgdGltZSByZWZpbmVyIGFnYWluIGFmdGVyIHRoZSB0aW1lem9uZSByZWZpbmVtZW50IGFuZCBleGNsdXNpb24gaW4gY29tbW9uIHJlZmluZXJzLlxuICAgICAgICBvcHRpb25zLnJlZmluZXJzLnB1c2gobmV3IEVOTWVyZ2VEYXRlVGltZVJlZmluZXIoKSk7XG5cbiAgICAgICAgLy8gRXh0cmFjdCB5ZWFyIGFmdGVyIG1lcmdpbmcgZGF0ZSBhbmQgdGltZVxuICAgICAgICBvcHRpb25zLnJlZmluZXJzLnB1c2gobmV3IEVORXh0cmFjdFllYXJTdWZmaXhSZWZpbmVyKCkpO1xuXG4gICAgICAgIC8vIEtlZXAgdGhlIGRhdGUgcmFuZ2UgcmVmaW5lciBhdCB0aGUgZW5kIChhZnRlciBhbGwgb3RoZXIgcmVmaW5lbWVudHMpLlxuICAgICAgICBvcHRpb25zLnJlZmluZXJzLnB1c2gobmV3IEVOTWVyZ2VEYXRlUmFuZ2VSZWZpbmVyKCkpO1xuICAgICAgICByZXR1cm4gb3B0aW9ucztcbiAgICB9XG59XG4iLCAiaW1wb3J0IHsgUmVmZXJlbmNlV2l0aFRpbWV6b25lLCBQYXJzaW5nQ29tcG9uZW50cywgUGFyc2luZ1Jlc3VsdCB9IGZyb20gXCIuL3Jlc3VsdHNcIjtcbmltcG9ydCB7IENvbXBvbmVudCwgUGFyc2VkUmVzdWx0LCBQYXJzaW5nT3B0aW9uLCBQYXJzaW5nUmVmZXJlbmNlIH0gZnJvbSBcIi4vdHlwZXNcIjtcbmltcG9ydCB7IEFzeW5jRGVidWdCbG9jaywgRGVidWdIYW5kbGVyIH0gZnJvbSBcIi4vZGVidWdnaW5nXCI7XG5pbXBvcnQgRU5EZWZhdWx0Q29uZmlndXJhdGlvbiBmcm9tIFwiLi9sb2NhbGVzL2VuL2NvbmZpZ3VyYXRpb25cIjtcblxuLyoqXG4gKiBDaHJvbm8gY29uZmlndXJhdGlvbi5cbiAqIEl0IGlzIHNpbXBseSBhbiBvcmRlcmVkIGxpc3Qgb2YgcGFyc2VycyBhbmQgcmVmaW5lcnNcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBDb25maWd1cmF0aW9uIHtcbiAgICBwYXJzZXJzOiBQYXJzZXJbXTtcbiAgICByZWZpbmVyczogUmVmaW5lcltdO1xufVxuXG4vKipcbiAqIEFuIGFic3RyYWN0aW9uIGZvciBDaHJvbm8gKlBhcnNlciouXG4gKlxuICogRWFjaCBwYXJzZXIgc2hvdWxkIHJlY29nbml6ZSBhbmQgaGFuZGxlIGEgY2VydGFpbiBkYXRlIGZvcm1hdC5cbiAqIENocm9ubyB1c2VzIG11bHRpcGxlIHBhcnNlcyAoYW5kIHJlZmluZXJzKSB0b2dldGhlciBmb3IgcGFyc2luZyB0aGUgaW5wdXQuXG4gKlxuICogVGhlIHBhcnNlciBpbXBsZW1lbnRhdGlvbiBtdXN0IHByb3ZpZGUge0BMaW5rIHBhdHRlcm4gfCBwYXR0ZXJuKCl9IGZvciB0aGUgZGF0ZSBmb3JtYXQuXG4gKlxuICogVGhlIHtATGluayBleHRyYWN0IHwgZXh0cmFjdCgpfSBtZXRob2QgaXMgY2FsbGVkIHdpdGggdGhlIHBhdHRlcm4ncyAqbWF0Y2gqLlxuICogVGhlIG1hdGNoaW5nIGFuZCBleHRyYWN0aW5nIGlzIGNvbnRyb2xsZWQgYW5kIGFkanVzdGVkIHRvIGF2b2lkIGZvciBvdmVybGFwcGluZyByZXN1bHRzLlxuICovXG5leHBvcnQgaW50ZXJmYWNlIFBhcnNlciB7XG4gICAgcGF0dGVybihjb250ZXh0OiBQYXJzaW5nQ29udGV4dCk6IFJlZ0V4cDtcbiAgICBleHRyYWN0KFxuICAgICAgICBjb250ZXh0OiBQYXJzaW5nQ29udGV4dCxcbiAgICAgICAgbWF0Y2g6IFJlZ0V4cE1hdGNoQXJyYXlcbiAgICApOiBQYXJzaW5nQ29tcG9uZW50cyB8IFBhcnNpbmdSZXN1bHQgfCB7IFtjIGluIENvbXBvbmVudF0/OiBudW1iZXIgfSB8IG51bGw7XG59XG5cbi8qKlxuICogQSBhYnN0cmFjdGlvbiBmb3IgQ2hyb25vICpSZWZpbmVyKi5cbiAqXG4gKiBFYWNoIHJlZmluZXIgdGFrZXMgdGhlIGxpc3Qgb2YgcmVzdWx0cyAoZnJvbSBwYXJzZXJzIG9yIG90aGVyIHJlZmluZXJzKSBhbmQgcmV0dXJucyBhbm90aGVyIGxpc3Qgb2YgcmVzdWx0cy5cbiAqIENocm9ubyBhcHBsaWVzIGVhY2ggcmVmaW5lciBpbiBvcmRlciBhbmQgcmV0dXJuIHRoZSBvdXRwdXQgZnJvbSB0aGUgbGFzdCByZWZpbmVyLlxuICovXG5leHBvcnQgaW50ZXJmYWNlIFJlZmluZXIge1xuICAgIHJlZmluZTogKGNvbnRleHQ6IFBhcnNpbmdDb250ZXh0LCByZXN1bHRzOiBQYXJzaW5nUmVzdWx0W10pID0+IFBhcnNpbmdSZXN1bHRbXTtcbn1cblxuLyoqXG4gKiBUaGUgQ2hyb25vIG9iamVjdC5cbiAqL1xuZXhwb3J0IGNsYXNzIENocm9ubyB7XG4gICAgcGFyc2VyczogQXJyYXk8UGFyc2VyPjtcbiAgICByZWZpbmVyczogQXJyYXk8UmVmaW5lcj47XG5cbiAgICBkZWZhdWx0Q29uZmlnID0gbmV3IEVORGVmYXVsdENvbmZpZ3VyYXRpb24oKTtcblxuICAgIGNvbnN0cnVjdG9yKGNvbmZpZ3VyYXRpb24/OiBDb25maWd1cmF0aW9uKSB7XG4gICAgICAgIGNvbmZpZ3VyYXRpb24gPSBjb25maWd1cmF0aW9uIHx8IHRoaXMuZGVmYXVsdENvbmZpZy5jcmVhdGVDYXN1YWxDb25maWd1cmF0aW9uKCk7XG4gICAgICAgIHRoaXMucGFyc2VycyA9IFsuLi5jb25maWd1cmF0aW9uLnBhcnNlcnNdO1xuICAgICAgICB0aGlzLnJlZmluZXJzID0gWy4uLmNvbmZpZ3VyYXRpb24ucmVmaW5lcnNdO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENyZWF0ZSBhIHNoYWxsb3cgY29weSBvZiB0aGUgQ2hyb25vIG9iamVjdCB3aXRoIHRoZSBzYW1lIGNvbmZpZ3VyYXRpb24gKGBwYXJzZXJzYCBhbmQgYHJlZmluZXJzYClcbiAgICAgKi9cbiAgICBjbG9uZSgpOiBDaHJvbm8ge1xuICAgICAgICByZXR1cm4gbmV3IENocm9ubyh7XG4gICAgICAgICAgICBwYXJzZXJzOiBbLi4udGhpcy5wYXJzZXJzXSxcbiAgICAgICAgICAgIHJlZmluZXJzOiBbLi4udGhpcy5yZWZpbmVyc10sXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEEgc2hvcnRjdXQgZm9yIGNhbGxpbmcge0BMaW5rIHBhcnNlIHwgcGFyc2UoKSB9IHRoZW4gdHJhbnNmb3JtIHRoZSByZXN1bHQgaW50byBKYXZhc2NyaXB0J3MgRGF0ZSBvYmplY3RcbiAgICAgKiBAcmV0dXJuIERhdGUgb2JqZWN0IGNyZWF0ZWQgZnJvbSB0aGUgZmlyc3QgcGFyc2UgcmVzdWx0XG4gICAgICovXG4gICAgcGFyc2VEYXRlKHRleHQ6IHN0cmluZywgcmVmZXJlbmNlRGF0ZT86IFBhcnNpbmdSZWZlcmVuY2UgfCBEYXRlLCBvcHRpb24/OiBQYXJzaW5nT3B0aW9uKTogRGF0ZSB8IG51bGwge1xuICAgICAgICBjb25zdCByZXN1bHRzID0gdGhpcy5wYXJzZSh0ZXh0LCByZWZlcmVuY2VEYXRlLCBvcHRpb24pO1xuICAgICAgICByZXR1cm4gcmVzdWx0cy5sZW5ndGggPiAwID8gcmVzdWx0c1swXS5zdGFydC5kYXRlKCkgOiBudWxsO1xuICAgIH1cblxuICAgIHBhcnNlKHRleHQ6IHN0cmluZywgcmVmZXJlbmNlRGF0ZT86IFBhcnNpbmdSZWZlcmVuY2UgfCBEYXRlLCBvcHRpb24/OiBQYXJzaW5nT3B0aW9uKTogUGFyc2VkUmVzdWx0W10ge1xuICAgICAgICBjb25zdCBjb250ZXh0ID0gbmV3IFBhcnNpbmdDb250ZXh0KHRleHQsIHJlZmVyZW5jZURhdGUsIG9wdGlvbik7XG5cbiAgICAgICAgbGV0IHJlc3VsdHMgPSBbXTtcbiAgICAgICAgdGhpcy5wYXJzZXJzLmZvckVhY2goKHBhcnNlcikgPT4ge1xuICAgICAgICAgICAgY29uc3QgcGFyc2VkUmVzdWx0cyA9IENocm9uby5leGVjdXRlUGFyc2VyKGNvbnRleHQsIHBhcnNlcik7XG4gICAgICAgICAgICByZXN1bHRzID0gcmVzdWx0cy5jb25jYXQocGFyc2VkUmVzdWx0cyk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJlc3VsdHMuc29ydCgoYSwgYikgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIGEuaW5kZXggLSBiLmluZGV4O1xuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLnJlZmluZXJzLmZvckVhY2goZnVuY3Rpb24gKHJlZmluZXIpIHtcbiAgICAgICAgICAgIHJlc3VsdHMgPSByZWZpbmVyLnJlZmluZShjb250ZXh0LCByZXN1bHRzKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdHM7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBzdGF0aWMgZXhlY3V0ZVBhcnNlcihjb250ZXh0OiBQYXJzaW5nQ29udGV4dCwgcGFyc2VyOiBQYXJzZXIpIHtcbiAgICAgICAgY29uc3QgcmVzdWx0cyA9IFtdO1xuICAgICAgICBjb25zdCBwYXR0ZXJuID0gcGFyc2VyLnBhdHRlcm4oY29udGV4dCk7XG5cbiAgICAgICAgY29uc3Qgb3JpZ2luYWxUZXh0ID0gY29udGV4dC50ZXh0O1xuICAgICAgICBsZXQgcmVtYWluaW5nVGV4dCA9IGNvbnRleHQudGV4dDtcbiAgICAgICAgbGV0IG1hdGNoID0gcGF0dGVybi5leGVjKHJlbWFpbmluZ1RleHQpO1xuXG4gICAgICAgIHdoaWxlIChtYXRjaCkge1xuICAgICAgICAgICAgLy8gQ2FsY3VsYXRlIG1hdGNoIGluZGV4IG9uIHRoZSBmdWxsIHRleHQ7XG4gICAgICAgICAgICBjb25zdCBpbmRleCA9IG1hdGNoLmluZGV4ICsgb3JpZ2luYWxUZXh0Lmxlbmd0aCAtIHJlbWFpbmluZ1RleHQubGVuZ3RoO1xuICAgICAgICAgICAgbWF0Y2guaW5kZXggPSBpbmRleDtcblxuICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gcGFyc2VyLmV4dHJhY3QoY29udGV4dCwgbWF0Y2gpO1xuICAgICAgICAgICAgaWYgKCFyZXN1bHQpIHtcbiAgICAgICAgICAgICAgICAvLyBJZiBmYWlscywgbW92ZSBvbiBieSAxXG4gICAgICAgICAgICAgICAgcmVtYWluaW5nVGV4dCA9IG9yaWdpbmFsVGV4dC5zdWJzdHJpbmcobWF0Y2guaW5kZXggKyAxKTtcbiAgICAgICAgICAgICAgICBtYXRjaCA9IHBhdHRlcm4uZXhlYyhyZW1haW5pbmdUZXh0KTtcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgbGV0IHBhcnNlZFJlc3VsdDogUGFyc2luZ1Jlc3VsdCA9IG51bGw7XG4gICAgICAgICAgICBpZiAocmVzdWx0IGluc3RhbmNlb2YgUGFyc2luZ1Jlc3VsdCkge1xuICAgICAgICAgICAgICAgIHBhcnNlZFJlc3VsdCA9IHJlc3VsdDtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAocmVzdWx0IGluc3RhbmNlb2YgUGFyc2luZ0NvbXBvbmVudHMpIHtcbiAgICAgICAgICAgICAgICBwYXJzZWRSZXN1bHQgPSBjb250ZXh0LmNyZWF0ZVBhcnNpbmdSZXN1bHQobWF0Y2guaW5kZXgsIG1hdGNoWzBdKTtcbiAgICAgICAgICAgICAgICBwYXJzZWRSZXN1bHQuc3RhcnQgPSByZXN1bHQ7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHBhcnNlZFJlc3VsdCA9IGNvbnRleHQuY3JlYXRlUGFyc2luZ1Jlc3VsdChtYXRjaC5pbmRleCwgbWF0Y2hbMF0sIHJlc3VsdCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGNvbnN0IHBhcnNlZEluZGV4ID0gcGFyc2VkUmVzdWx0LmluZGV4O1xuICAgICAgICAgICAgY29uc3QgcGFyc2VkVGV4dCA9IHBhcnNlZFJlc3VsdC50ZXh0O1xuICAgICAgICAgICAgY29udGV4dC5kZWJ1ZygoKSA9PlxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGAke3BhcnNlci5jb25zdHJ1Y3Rvci5uYW1lfSBleHRyYWN0ZWQgKGF0IGluZGV4PSR7cGFyc2VkSW5kZXh9KSAnJHtwYXJzZWRUZXh0fSdgKVxuICAgICAgICAgICAgKTtcblxuICAgICAgICAgICAgcmVzdWx0cy5wdXNoKHBhcnNlZFJlc3VsdCk7XG4gICAgICAgICAgICByZW1haW5pbmdUZXh0ID0gb3JpZ2luYWxUZXh0LnN1YnN0cmluZyhwYXJzZWRJbmRleCArIHBhcnNlZFRleHQubGVuZ3RoKTtcbiAgICAgICAgICAgIG1hdGNoID0gcGF0dGVybi5leGVjKHJlbWFpbmluZ1RleHQpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdHM7XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgUGFyc2luZ0NvbnRleHQgaW1wbGVtZW50cyBEZWJ1Z0hhbmRsZXIge1xuICAgIHJlYWRvbmx5IHRleHQ6IHN0cmluZztcbiAgICByZWFkb25seSBvcHRpb246IFBhcnNpbmdPcHRpb247XG4gICAgcmVhZG9ubHkgcmVmZXJlbmNlOiBSZWZlcmVuY2VXaXRoVGltZXpvbmU7XG5cbiAgICAvKipcbiAgICAgKiBAZGVwcmVjYXRlZC4gVXNlIGByZWZlcmVuY2UuaW5zdGFudGAgaW5zdGVhZC5cbiAgICAgKi9cbiAgICByZWFkb25seSByZWZEYXRlOiBEYXRlO1xuXG4gICAgY29uc3RydWN0b3IodGV4dDogc3RyaW5nLCByZWZEYXRlPzogUGFyc2luZ1JlZmVyZW5jZSB8IERhdGUsIG9wdGlvbj86IFBhcnNpbmdPcHRpb24pIHtcbiAgICAgICAgdGhpcy50ZXh0ID0gdGV4dDtcbiAgICAgICAgdGhpcy5yZWZlcmVuY2UgPSBuZXcgUmVmZXJlbmNlV2l0aFRpbWV6b25lKHJlZkRhdGUpO1xuICAgICAgICB0aGlzLm9wdGlvbiA9IG9wdGlvbiA/PyB7fTtcblxuICAgICAgICB0aGlzLnJlZkRhdGUgPSB0aGlzLnJlZmVyZW5jZS5pbnN0YW50O1xuICAgIH1cblxuICAgIGNyZWF0ZVBhcnNpbmdDb21wb25lbnRzKGNvbXBvbmVudHM/OiB7IFtjIGluIENvbXBvbmVudF0/OiBudW1iZXIgfSB8IFBhcnNpbmdDb21wb25lbnRzKTogUGFyc2luZ0NvbXBvbmVudHMge1xuICAgICAgICBpZiAoY29tcG9uZW50cyBpbnN0YW5jZW9mIFBhcnNpbmdDb21wb25lbnRzKSB7XG4gICAgICAgICAgICByZXR1cm4gY29tcG9uZW50cztcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBuZXcgUGFyc2luZ0NvbXBvbmVudHModGhpcy5yZWZlcmVuY2UsIGNvbXBvbmVudHMpO1xuICAgIH1cblxuICAgIGNyZWF0ZVBhcnNpbmdSZXN1bHQoXG4gICAgICAgIGluZGV4OiBudW1iZXIsXG4gICAgICAgIHRleHRPckVuZEluZGV4OiBudW1iZXIgfCBzdHJpbmcsXG4gICAgICAgIHN0YXJ0Q29tcG9uZW50cz86IHsgW2MgaW4gQ29tcG9uZW50XT86IG51bWJlciB9IHwgUGFyc2luZ0NvbXBvbmVudHMsXG4gICAgICAgIGVuZENvbXBvbmVudHM/OiB7IFtjIGluIENvbXBvbmVudF0/OiBudW1iZXIgfSB8IFBhcnNpbmdDb21wb25lbnRzXG4gICAgKTogUGFyc2luZ1Jlc3VsdCB7XG4gICAgICAgIGNvbnN0IHRleHQgPSB0eXBlb2YgdGV4dE9yRW5kSW5kZXggPT09IFwic3RyaW5nXCIgPyB0ZXh0T3JFbmRJbmRleCA6IHRoaXMudGV4dC5zdWJzdHJpbmcoaW5kZXgsIHRleHRPckVuZEluZGV4KTtcblxuICAgICAgICBjb25zdCBzdGFydCA9IHN0YXJ0Q29tcG9uZW50cyA/IHRoaXMuY3JlYXRlUGFyc2luZ0NvbXBvbmVudHMoc3RhcnRDb21wb25lbnRzKSA6IG51bGw7XG4gICAgICAgIGNvbnN0IGVuZCA9IGVuZENvbXBvbmVudHMgPyB0aGlzLmNyZWF0ZVBhcnNpbmdDb21wb25lbnRzKGVuZENvbXBvbmVudHMpIDogbnVsbDtcblxuICAgICAgICByZXR1cm4gbmV3IFBhcnNpbmdSZXN1bHQodGhpcy5yZWZlcmVuY2UsIGluZGV4LCB0ZXh0LCBzdGFydCwgZW5kKTtcbiAgICB9XG5cbiAgICBkZWJ1ZyhibG9jazogQXN5bmNEZWJ1Z0Jsb2NrKTogdm9pZCB7XG4gICAgICAgIGlmICh0aGlzLm9wdGlvbi5kZWJ1Zykge1xuICAgICAgICAgICAgaWYgKHRoaXMub3B0aW9uLmRlYnVnIGluc3RhbmNlb2YgRnVuY3Rpb24pIHtcbiAgICAgICAgICAgICAgICB0aGlzLm9wdGlvbi5kZWJ1ZyhibG9jayk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGNvbnN0IGhhbmRsZXI6IERlYnVnSGFuZGxlciA9IDxEZWJ1Z0hhbmRsZXI+dGhpcy5vcHRpb24uZGVidWc7XG4gICAgICAgICAgICAgICAgaGFuZGxlci5kZWJ1ZyhibG9jayk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG4iLCAiLyoqXG4gKiBDaHJvbm8gY29tcG9uZW50cyBmb3IgRW5nbGlzaCBzdXBwb3J0ICgqcGFyc2VycyosICpyZWZpbmVycyosIGFuZCAqY29uZmlndXJhdGlvbiopXG4gKlxuICogQG1vZHVsZVxuICovXG5cbmltcG9ydCB7IENocm9ubywgUGFyc2VyLCBSZWZpbmVyIH0gZnJvbSBcIi4uLy4uL2Nocm9ub1wiO1xuaW1wb3J0IHsgUGFyc2luZ1Jlc3VsdCwgUGFyc2luZ0NvbXBvbmVudHMsIFJlZmVyZW5jZVdpdGhUaW1lem9uZSB9IGZyb20gXCIuLi8uLi9yZXN1bHRzXCI7XG5pbXBvcnQgeyBDb21wb25lbnQsIFBhcnNlZFJlc3VsdCwgUGFyc2luZ09wdGlvbiwgUGFyc2luZ1JlZmVyZW5jZSwgTWVyaWRpZW0sIFdlZWtkYXkgfSBmcm9tIFwiLi4vLi4vdHlwZXNcIjtcblxuaW1wb3J0IEVORGVmYXVsdENvbmZpZ3VyYXRpb24gZnJvbSBcIi4vY29uZmlndXJhdGlvblwiO1xuXG5leHBvcnQgeyBDaHJvbm8sIFBhcnNlciwgUmVmaW5lciwgUGFyc2luZ1Jlc3VsdCwgUGFyc2luZ0NvbXBvbmVudHMsIFJlZmVyZW5jZVdpdGhUaW1lem9uZSB9O1xuZXhwb3J0IHsgQ29tcG9uZW50LCBQYXJzZWRSZXN1bHQsIFBhcnNpbmdPcHRpb24sIFBhcnNpbmdSZWZlcmVuY2UsIE1lcmlkaWVtLCBXZWVrZGF5IH07XG5cbmV4cG9ydCBjb25zdCBjb25maWd1cmF0aW9uID0gbmV3IEVORGVmYXVsdENvbmZpZ3VyYXRpb24oKTtcblxuLyoqXG4gKiBDaHJvbm8gb2JqZWN0IGNvbmZpZ3VyZWQgZm9yIHBhcnNpbmcgKmNhc3VhbCogRW5nbGlzaFxuICovXG5leHBvcnQgY29uc3QgY2FzdWFsID0gbmV3IENocm9ubyhjb25maWd1cmF0aW9uLmNyZWF0ZUNhc3VhbENvbmZpZ3VyYXRpb24oZmFsc2UpKTtcblxuLyoqXG4gKiBDaHJvbm8gb2JqZWN0IGNvbmZpZ3VyZWQgZm9yIHBhcnNpbmcgKnN0cmljdCogRW5nbGlzaFxuICovXG5leHBvcnQgY29uc3Qgc3RyaWN0ID0gbmV3IENocm9ubyhjb25maWd1cmF0aW9uLmNyZWF0ZUNvbmZpZ3VyYXRpb24odHJ1ZSwgZmFsc2UpKTtcblxuLyoqXG4gKiBDaHJvbm8gb2JqZWN0IGNvbmZpZ3VyZWQgZm9yIHBhcnNpbmcgKlVLLXN0eWxlKiBFbmdsaXNoXG4gKi9cbmV4cG9ydCBjb25zdCBHQiA9IG5ldyBDaHJvbm8oY29uZmlndXJhdGlvbi5jcmVhdGVDYXN1YWxDb25maWd1cmF0aW9uKHRydWUpKTtcblxuLyoqXG4gKiBBIHNob3J0Y3V0IGZvciBlbi5jYXN1YWwucGFyc2UoKVxuICovXG5leHBvcnQgZnVuY3Rpb24gcGFyc2UodGV4dDogc3RyaW5nLCByZWY/OiBQYXJzaW5nUmVmZXJlbmNlIHwgRGF0ZSwgb3B0aW9uPzogUGFyc2luZ09wdGlvbik6IFBhcnNlZFJlc3VsdFtdIHtcbiAgICByZXR1cm4gY2FzdWFsLnBhcnNlKHRleHQsIHJlZiwgb3B0aW9uKTtcbn1cblxuLyoqXG4gKiBBIHNob3J0Y3V0IGZvciBlbi5jYXN1YWwucGFyc2VEYXRlKClcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHBhcnNlRGF0ZSh0ZXh0OiBzdHJpbmcsIHJlZj86IFBhcnNpbmdSZWZlcmVuY2UgfCBEYXRlLCBvcHRpb24/OiBQYXJzaW5nT3B0aW9uKTogRGF0ZSB7XG4gICAgcmV0dXJuIGNhc3VhbC5wYXJzZURhdGUodGV4dCwgcmVmLCBvcHRpb24pO1xufVxuIiwgImltcG9ydCAqIGFzIGVuIGZyb20gXCIuL2xvY2FsZXMvZW5cIjtcbmltcG9ydCB7IENocm9ubywgUGFyc2VyLCBSZWZpbmVyIH0gZnJvbSBcIi4vY2hyb25vXCI7XG5pbXBvcnQgeyBQYXJzaW5nUmVzdWx0LCBQYXJzaW5nQ29tcG9uZW50cywgUmVmZXJlbmNlV2l0aFRpbWV6b25lIH0gZnJvbSBcIi4vcmVzdWx0c1wiO1xuaW1wb3J0IHsgQ29tcG9uZW50LCBQYXJzZWRDb21wb25lbnRzLCBQYXJzZWRSZXN1bHQsIFBhcnNpbmdPcHRpb24sIFBhcnNpbmdSZWZlcmVuY2UsIE1lcmlkaWVtLCBXZWVrZGF5IH0gZnJvbSBcIi4vdHlwZXNcIjtcblxuZXhwb3J0IHsgZW4sIENocm9ubywgUGFyc2VyLCBSZWZpbmVyLCBQYXJzaW5nUmVzdWx0LCBQYXJzaW5nQ29tcG9uZW50cywgUmVmZXJlbmNlV2l0aFRpbWV6b25lIH07XG5leHBvcnQgeyBDb21wb25lbnQsIFBhcnNlZENvbXBvbmVudHMsIFBhcnNlZFJlc3VsdCwgUGFyc2luZ09wdGlvbiwgUGFyc2luZ1JlZmVyZW5jZSwgTWVyaWRpZW0sIFdlZWtkYXkgfTtcblxuLy8gRXhwb3J0IGFsbCBsb2NhbGVzXG5pbXBvcnQgKiBhcyBkZSBmcm9tIFwiLi9sb2NhbGVzL2RlXCI7XG5pbXBvcnQgKiBhcyBmciBmcm9tIFwiLi9sb2NhbGVzL2ZyXCI7XG5pbXBvcnQgKiBhcyBqYSBmcm9tIFwiLi9sb2NhbGVzL2phXCI7XG5pbXBvcnQgKiBhcyBwdCBmcm9tIFwiLi9sb2NhbGVzL3B0XCI7XG5pbXBvcnQgKiBhcyBubCBmcm9tIFwiLi9sb2NhbGVzL25sXCI7XG5pbXBvcnQgKiBhcyB6aCBmcm9tIFwiLi9sb2NhbGVzL3poXCI7XG5pbXBvcnQgKiBhcyBydSBmcm9tIFwiLi9sb2NhbGVzL3J1XCI7XG5pbXBvcnQgKiBhcyBlcyBmcm9tIFwiLi9sb2NhbGVzL2VzXCI7XG5pbXBvcnQgKiBhcyB1ayBmcm9tIFwiLi9sb2NhbGVzL3VrXCI7XG5cbmV4cG9ydCB7IGRlLCBmciwgamEsIHB0LCBubCwgemgsIHJ1LCBlcywgdWsgfTtcblxuLyoqXG4gKiBBIHNob3J0Y3V0IGZvciB7QGxpbmsgZW4gfCBjaHJvbm8uZW4uc3RyaWN0fVxuICovXG5leHBvcnQgY29uc3Qgc3RyaWN0ID0gZW4uc3RyaWN0O1xuXG4vKipcbiAqIEEgc2hvcnRjdXQgZm9yIHtAbGluayBlbiB8IGNocm9uby5lbi5jYXN1YWx9XG4gKi9cbmV4cG9ydCBjb25zdCBjYXN1YWwgPSBlbi5jYXN1YWw7XG5cbi8qKlxuICogQSBzaG9ydGN1dCBmb3Ige0BsaW5rIGVuIHwgY2hyb25vLmVuLmNhc3VhbC5wYXJzZSgpfVxuICovXG5leHBvcnQgZnVuY3Rpb24gcGFyc2UodGV4dDogc3RyaW5nLCByZWY/OiBQYXJzaW5nUmVmZXJlbmNlIHwgRGF0ZSwgb3B0aW9uPzogUGFyc2luZ09wdGlvbik6IFBhcnNlZFJlc3VsdFtdIHtcbiAgICByZXR1cm4gY2FzdWFsLnBhcnNlKHRleHQsIHJlZiwgb3B0aW9uKTtcbn1cblxuLyoqXG4gKiBBIHNob3J0Y3V0IGZvciB7QGxpbmsgZW4gfCBjaHJvbm8uZW4uY2FzdWFsLnBhcnNlRGF0ZSgpfVxuICovXG5leHBvcnQgZnVuY3Rpb24gcGFyc2VEYXRlKHRleHQ6IHN0cmluZywgcmVmPzogUGFyc2luZ1JlZmVyZW5jZSB8IERhdGUsIG9wdGlvbj86IFBhcnNpbmdPcHRpb24pOiBEYXRlIHwgbnVsbCB7XG4gICAgcmV0dXJuIGNhc3VhbC5wYXJzZURhdGUodGV4dCwgcmVmLCBvcHRpb24pO1xufVxuIl0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFBQSwrQ0FBQUEsVUFBQUMsU0FBQTtBQUFBLEtBQUMsU0FBUyxHQUFFLEdBQUU7QUFBQyxrQkFBVSxPQUFPRCxZQUFTLGVBQWEsT0FBT0MsVUFBT0EsUUFBTyxVQUFRLEVBQUUsSUFBRSxjQUFZLE9BQU8sVUFBUSxPQUFPLE1BQUksT0FBTyxDQUFDLEtBQUcsSUFBRSxlQUFhLE9BQU8sYUFBVyxhQUFXLEtBQUcsTUFBTSw2QkFBMkIsRUFBRTtBQUFBLElBQUMsRUFBRUQsVUFBTSxXQUFVO0FBQUM7QUFBYSxVQUFJLElBQUUsU0FBUSxJQUFFO0FBQVUsYUFBTyxTQUFTLEdBQUUsR0FBRTtBQUFDLFlBQUksSUFBRSxFQUFFO0FBQVUsVUFBRSxVQUFRLFNBQVNFLElBQUU7QUFBQyxpQkFBTyxLQUFLLE9BQU8sRUFBRSxFQUFFQSxFQUFDLElBQUUsS0FBSyxNQUFNLEtBQUssTUFBTSxJQUFFLEtBQUcsQ0FBQyxJQUFFLEtBQUssTUFBTSxLQUFLLE1BQU0sSUFBRSxJQUFFLEtBQUdBLEtBQUUsRUFBRTtBQUFBLFFBQUM7QUFBRSxZQUFJLElBQUUsRUFBRTtBQUFJLFVBQUUsTUFBSSxTQUFTQyxJQUFFQyxJQUFFO0FBQUMsaUJBQU9ELEtBQUUsT0FBT0EsRUFBQyxHQUFFLEtBQUssT0FBTyxFQUFFLEVBQUVDLEVBQUMsTUFBSSxJQUFFLEtBQUssSUFBSSxJQUFFRCxJQUFFLENBQUMsSUFBRSxFQUFFLEtBQUssSUFBSSxFQUFFQSxJQUFFQyxFQUFDO0FBQUEsUUFBQztBQUFFLFlBQUks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QUEsUUFBRSxHQUFFQSxHQUFFLFNBQU8sU0FBU1QsSUFBRUMsSUFBRTtBQUFDLGNBQUlDLEtBQUUsRUFBRUYsRUFBQztBQUFFLGlCQUFPLEtBQUssUUFBUUMsRUFBQyxLQUFHQyxNQUFHQSxNQUFHLEtBQUssTUFBTUQsRUFBQztBQUFBLFFBQUMsR0FBRVEsR0FBRSxVQUFRLFNBQVNULElBQUVDLElBQUU7QUFBQyxpQkFBTyxFQUFFRCxFQUFDLElBQUUsS0FBSyxRQUFRQyxFQUFDO0FBQUEsUUFBQyxHQUFFUSxHQUFFLFdBQVMsU0FBU1QsSUFBRUMsSUFBRTtBQUFDLGlCQUFPLEtBQUssTUFBTUEsRUFBQyxJQUFFLEVBQUVELEVBQUM7QUFBQSxRQUFDLEdBQUVTLEdBQUUsS0FBRyxTQUFTVCxJQUFFQyxJQUFFQyxJQUFFO0FBQUMsaUJBQU8sRUFBRSxFQUFFRixFQUFDLElBQUUsS0FBS0MsRUFBQyxJQUFFLEtBQUssSUFBSUMsSUFBRUYsRUFBQztBQUFBLFFBQUMsR0FBRVMsR0FBRSxPQUFLLFdBQVU7QUFBQyxpQkFBTyxLQUFLLE1BQU0sS0FBSyxRQUFRLElBQUUsR0FBRztBQUFBLFFBQUMsR0FBRUEsR0FBRSxVQUFRLFdBQVU7QUFBQyxpQkFBTyxLQUFLLEdBQUcsUUFBUTtBQUFBLFFBQUMsR0FBRUEsR0FBRSxVQUFRLFNBQVNULElBQUVDLElBQUU7QUFBQyxjQUFJQyxLQUFFLE1BQUtDLEtBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRUYsRUFBQyxLQUFHQSxJQUFFUyxLQUFFLEVBQUUsRUFBRVYsRUFBQyxHQUFFVyxLQUFFLFNBQVNYLElBQUVDLElBQUU7QUFBQyxnQkFBSUcsS0FBRSxFQUFFLEVBQUVGLEdBQUUsS0FBRyxLQUFLLElBQUlBLEdBQUUsSUFBR0QsSUFBRUQsRUFBQyxJQUFFLElBQUksS0FBS0UsR0FBRSxJQUFHRCxJQUFFRCxFQUFDLEdBQUVFLEVBQUM7QUFBRSxtQkFBT0MsS0FBRUMsS0FBRUEsR0FBRSxNQUFNLENBQUM7QUFBQSxVQUFDLEdBQUVRLEtBQUUsU0FBU1osSUFBRUMsSUFB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QUUsUUFBTyxLQUFLO0FBQUcsY0FBSUUsS0FBRSxLQUFLLE1BQU0sR0FBRUMsS0FBRSxFQUFFSCxJQUFFQyxJQUFFLElBQUU7QUFBRSxpQkFBT0UsT0FBSUQsR0FBRSxLQUFHQyxLQUFHRDtBQUFBLFFBQUMsR0FBRU8sR0FBRSxRQUFNLFdBQVU7QUFBQyxpQkFBTyxFQUFFLEVBQUUsS0FBSyxJQUFHLElBQUk7QUFBQSxRQUFDLEdBQUVBLEdBQUUsU0FBTyxXQUFVO0FBQUMsaUJBQU8sSUFBSSxLQUFLLEtBQUssUUFBUSxDQUFDO0FBQUEsUUFBQyxHQUFFQSxHQUFFLFNBQU8sV0FBVTtBQUFDLGlCQUFPLEtBQUssUUFBUSxJQUFFLEtBQUssWUFBWSxJQUFFO0FBQUEsUUFBSSxHQUFFQSxHQUFFLGNBQVksV0FBVTtBQUFDLGlCQUFPLEtBQUssR0FBRyxZQUFZO0FBQUEsUUFBQyxHQUFFQSxHQUFFLFdBQVMsV0FBVTtBQUFDLGlCQUFPLEtBQUssR0FBRyxZQUFZO0FBQUEsUUFBQyxHQUFFRDtBQUFBLE1BQUMsRUFBRSxHQUFFLElBQUUsRUFBRTtBQUFVLGFBQU8sRUFBRSxZQUFVLEdBQUUsQ0FBQyxDQUFDLE9BQU0sQ0FBQyxHQUFFLENBQUMsTUFBSyxDQUFDLEdBQUUsQ0FBQyxNQUFLLENBQUMsR0FBRSxDQUFDLE1BQUssQ0FBQyxHQUFFLENBQUMsTUFBSyxDQUFDLEdBQUUsQ0FBQyxNQUFLLENBQUMsR0FBRSxDQUFDLE1BQUssQ0FBQyxHQUFFLENBQUMsTUFBSyxDQUFDLENBQUMsRUFBRSxRQUFTLFNBQVNSLElBQUU7QUFBQyxVQUFFQSxHQUFFLENBQUMsQ0FBQyxJQUFFLFNBQVNDLElBQUU7QUFBQyxpQkFBTyxLQUFLLEdBQUdBLElBQUVELEdBQUUsQ0FBQyxHQUFFQSxHQUFFLENBQUMsQ0FBQztBQUFBLFFBQUM7QUFBQSxNQUFDLENBQUUsR0FBRSxFQUFFLFNBQU8sU0FBU0EsSUFBRUMsSUFBRTtBQUFDLGVBQU9ELEdBQUUsT0FBS0EsR0FBRUMsSUFBRSxHQUFFLENBQUMsR0FBRUQsR0FBRSxLQUFH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SyxrQkFBa0IsVUFBVSxFQUFFLElBQUksQ0FBQyxNQUFNLFVBQzdDLDRDQUFDLGdCQUFLLFNBQVMsTUFBZCxFQUErQixPQUFPLE1BQU0sT0FBTyxRQUEzQixLQUFpQyxDQUMzRCxHQUNIO0FBQUEsTUFHRCxnQkFBTSxJQUFJLENBQUMsTUFBTSxVQUNoQjtBQUFBLFFBQUMsZ0JBQUs7QUFBQSxRQUFMO0FBQUEsVUFFQyxPQUFPLE9BQU8sS0FBSyxLQUFLO0FBQUEsVUFDeEIsYUFBYSxDQUFDLEVBQUUsS0FBSyxFQUFFLE9BQU8sS0FBSyxPQUFPLE9BQU8saUJBQU0sY0FBYyxFQUFFLENBQUM7QUFBQSxVQUN4RSxTQUNFLDZDQUFDLDBCQUNDO0FBQUEsd0RBQUMsa0JBQU8saUJBQVAsRUFBdUIsU0FBUyxLQUFLLE9BQU87QUFBQSxZQUM3Qyw0Q0FBQyxrQkFBTyxPQUFQLEVBQWEsU0FBUyxLQUFLLE9BQU87QUFBQSxhQUNyQztBQUFBO0FBQUEsUUFQRztBQUFBLE1BU1AsQ0FDRDtBQUFBO0FBQUEsRUFDSDtBQUVKOyIsCiAgIm5hbWVzIjogWyJleHBvcnRzIiwgIm1vZHVsZSIsICJ0IiwgImUiLCAiaSIsICJyIiwgInMiLCAiZXhwb3J0cyIsICJtb2R1bGUiLCAidCIsICJlIiwgIm4iLCAiciIsICJpIiwgInMiLCAidSIsICJhIiwgIk0iLCAibSIsICJmIiwgImwiLCAiJCIsICJ5IiwgInYiLCAiZyIsICJEIiwgIm8iLCAiZCIsICJjIiwgImgiLCAiZXhwb3J0cyIsICJtb2R1bGUiLCAiZSIsICJ0IiwgInIiLCAiZXhwb3J0cyIsICJtb2R1bGUiLCAiaSIsICJuIiwgImYiLCAiZSIsICJleHBvcnRzIiwgIm1vZHVsZSIsICJ0IiwgImkiLCAiZSIsICJzIiwgImYiLCAibiIsICJ1IiwgIm8iLCAiciIsICJleHBvcnRzIiwgIm1vZHVsZSIsICJ0IiwgIm4iLCAiaSIsICJvIiwgInIiLCAiZSIsICJ1IiwgImYiLCAicyIsICJhIiwgImV4cG9ydHMiLCAibW9kdWxlIiwgInIiLCAiZSIsICJ0IiwgIm8iLCAibiIsICJpIiwgImQiLCAiaW1wb3J0X2RheWpzIiwgIk1lcmlkaWVtIiwgIldlZWtkYXkiLCAiTW9udGgiLCAiZGF5anMiLCAiZGF5anMiLCAicXVhcnRlck9mWWVhciIsICJpbXBvcnRfZGF5anMiLCAiZGF5anMiLCAiUEFUVEVSTiIsICJNT05USF9OQU1FX0dST1VQIiwgIkRBVEVfR1JPVVAiLCAiREFURV9UT19HUk9VUCIsICJZRUFSX0dST1VQIiwgIlBBVFRFUk4iLCAiTU9OVEhfTkFNRV9HUk9VUCIsICJZRUFSX0dST1VQIiwgIlBBVFRFUk4iLCAiTU9OVEhfTkFNRV9HUk9VUCIsICJQQVRURVJOIiwgIllFQVJfR1JPVVAiLCAic3RyaWN0IiwgIlBBVFRFUk4iLCAiUEFUVEVSTiIsICJTVFJJQ1RfUEFUVEVSTiIsICJpbXBvcnRfZGF5anMiLCAiZGF5anMiLCAiUEFUVEVSTiIsICJZRUFSX05VTUJFUl9HUk9VUCIsICJNT05USF9OVU1CRVJfR1JPVVAiLCAiREFURV9OVU1CRVJfR1JPVVAiLCAiY29uZmlndXJhdGlvbiIsICJpbXBvcnRfZGF5anMiLCAiaW1wb3J0X2RheWpzIiwgImRheWpzIiwgImRheWpzIiwgIlBBVFRFUk4iLCAiZGF5anMiLCAiUEFUVEVSTiIsICJQQVRURVJOIiwgIlBSRUZJWF9HUk9VUCIsICJpbXBvcnRfZGF5anMiLCAiUEFUVEVSTiIsICJkYXlqcyIsICJQQVRURVJOIiwgIllFQVJfR1JPVVAiLCAiUEFUVEVSTiIsICJZRUFSX0dST1VQIiwgImNvbmZpZ3VyYXRpb24iLCAiY2FzdWFsIiwgImNhc3VhbCIsICJpbXBvcnRfZGF5anMiLCAiaW1wb3J0X3RpbWV6b25lIiwgImRheWpzIiwgImFkdmFuY2VkRm9ybWF0UGx1Z2luIiwgIndlZWtPZlllYXJQbHVnaW4iLCAidXRjUGx1Z2luIiwgInRpbWV6b25lUGx1Z2luIiwgInJlbGF0aXZlVGltZVBsdWdpbiJdCn0K
