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
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vLi4vLi4vLi4vLi4vLi4vVm9sdW1lcy9EYXRhL2hvbWUvcGx1Z2lucy9jb2xsZWN0aW9uL3JheWNhc3QvY29tcGFuaW9uL25vZGVfbW9kdWxlcy9kYXlqcy9wbHVnaW4vcXVhcnRlck9mWWVhci5qcyIsICIuLi8uLi8uLi8uLi8uLi8uLi9Wb2x1bWVzL0RhdGEvaG9tZS9wbHVnaW5zL2NvbGxlY3Rpb24vcmF5Y2FzdC9jb21wYW5pb24vbm9kZV9tb2R1bGVzL2RheWpzL2RheWpzLm1pbi5qcyIsICIuLi8uLi8uLi8uLi8uLi8uLi9Wb2x1bWVzL0RhdGEvaG9tZS9wbHVnaW5zL2NvbGxlY3Rpb24vcmF5Y2FzdC9jb21wYW5pb24vbm9kZV9tb2R1bGVzL2RheWpzL3BsdWdpbi9hZHZhbmNlZEZvcm1hdC5qcyIsICIuLi8uLi8uLi8uLi8uLi8uLi9Wb2x1bWVzL0RhdGEvaG9tZS9wbHVnaW5zL2NvbGxlY3Rpb24vcmF5Y2FzdC9jb21wYW5pb24vbm9kZV9tb2R1bGVzL2RheWpzL3BsdWdpbi93ZWVrT2ZZZWFyLmpzIiwgIi4uLy4uLy4uLy4uLy4uLy4uL1ZvbHVtZXMvRGF0YS9ob21lL3BsdWdpbnMvY29sbGVjdGlvbi9yYXljYXN0L2NvbXBhbmlvbi9ub2RlX21vZHVsZXMvZGF5anMvcGx1Z2luL3V0Yy5qcyIsICIuLi8uLi8uLi8uLi8uLi8uLi9Wb2x1bWVzL0RhdGEvaG9tZS9wbHVnaW5zL2NvbGxlY3Rpb24vcmF5Y2FzdC9jb21wYW5pb24vbm9kZV9tb2R1bGVzL2RheWpzL3BsdWdpbi90aW1lem9uZS5qcyIsICIuLi8uLi8uLi8uLi8uLi8uLi9Wb2x1bWVzL0RhdGEvaG9tZS9wbHVnaW5zL2NvbGxlY3Rpb24vcmF5Y2FzdC9jb21wYW5pb24vbm9kZV9tb2R1bGVzL2RheWpzL3BsdWdpbi9yZWxhdGl2ZVRpbWUuanMiLCAiLi4vLi4vLi4vLi4vLi4vLi4vVm9sdW1lcy9EYXRhL2hvbWUvcGx1Z2lucy9jb2xsZWN0aW9uL3JheWNhc3QvY29tcGFuaW9uL3NyYy9kYXRldGltZS50c3giLCAiLi4vLi4vLi4vLi4vLi4vLi4vVm9sdW1lcy9EYXRhL2hvbWUvcGx1Z2lucy9jb2xsZWN0aW9uL3JheWNhc3QvY29tcGFuaW9uL25vZGVfbW9kdWxlcy9jaHJvbm8tbm9kZS9zcmMvcmVzdWx0cy50cyIsICIuLi8uLi8uLi8uLi8uLi8uLi9Wb2x1bWVzL0RhdGEvaG9tZS9wbHVnaW5zL2NvbGxlY3Rpb24vcmF5Y2FzdC9jb21wYW5pb24vbm9kZV9tb2R1bGVzL2Nocm9uby1ub2RlL3NyYy90eXBlcy50cyIsICIuLi8uLi8uLi8uLi8uLi8uLi9Wb2x1bWVzL0RhdGEvaG9tZS9wbHVnaW5zL2NvbGxlY3Rpb24vcmF5Y2FzdC9jb21wYW5pb24vbm9kZV9tb2R1bGVzL2Nocm9uby1ub2RlL3NyYy91dGlscy9kYXlqcy50cyIsICIuLi8uLi8uLi8uLi8uLi8uLi9Wb2x1bWVzL0RhdGEvaG9tZS9wbHVnaW5zL2NvbGxlY3Rpb24vcmF5Y2FzdC9jb21wYW5pb24vbm9kZV9tb2R1bGVzL2Nocm9uby1ub2RlL3NyYy90aW1lem9uZS50cyIsICIuLi8uLi8uLi8uLi8uLi8uLi9Wb2x1bWVzL0RhdGEvaG9tZS9wbHVnaW5zL2NvbGxlY3Rpb24vcmF5Y2FzdC9jb21wYW5pb24vbm9kZV9tb2R1bGVzL2Nocm9uby1ub2RlL3NyYy91dGlscy9wYXR0ZXJuLnRzIiwgIi4uLy4uLy4uLy4uLy4uLy4uL1ZvbHVtZXMvRGF0YS9ob21lL3BsdWdpbnMvY29sbGVjdGlvbi9yYXljYXN0L2NvbXBhbmlvbi9ub2RlX21vZHVsZXMvY2hyb25vLW5vZGUvc3JjL2NhbGN1bGF0aW9uL3llYXJzLnRzIiwgIi4uLy4uLy4uLy4uLy4uLy4uL1ZvbHVtZXMvRGF0YS9ob21lL3BsdWdpbnMvY29sbGVjdGlvbi9yYXljYXN0L2NvbXBhbmlvbi9ub2RlX21vZHVsZXMvY2hyb25vLW5vZGUvc3JjL2xvY2FsZXMvZW4vY29uc3RhbnRzLnRzIiwgIi4uLy4uLy4uLy4uLy4uLy4uL1ZvbHVtZXMvRGF0YS9ob21lL3BsdWdpbnMvY29sbGVjdGlvbi9yYXljYXN0L2NvbXBhbmlvbi9ub2RlX21vZHVsZXMvY2hyb25vLW5vZGUvc3JjL2NvbW1vbi9wYXJzZXJzL0Fic3RyYWN0UGFyc2VyV2l0aFdvcmRCb3VuZGFyeS50cyIsICIuLi8uLi8uLi8uLi8uLi8uLi9Wb2x1bWVzL0RhdGEvaG9tZS9wbHVnaW5zL2NvbGxlY3Rpb24vcmF5Y2FzdC9jb21wYW5pb24vbm9kZV9tb2R1bGVzL2Nocm9uby1ub2RlL3NyYy9sb2NhbGVzL2VuL3BhcnNlcnMvRU5UaW1lVW5pdFdpdGhpbkZvcm1hdFBhcnNlci50cyIsICIuLi8uLi8uLi8uLi8uLi8uLi9Wb2x1bWVzL0RhdGEvaG9tZS9wbHVnaW5zL2NvbGxlY3Rpb24vcmF5Y2FzdC9jb21wYW5pb24vbm9kZV9tb2R1bGVzL2Nocm9uby1ub2RlL3NyYy9sb2NhbGVzL2VuL3BhcnNlcnMvRU5Nb250aE5hbWVMaXR0bGVFbmRpYW5QYXJzZXIudHMiLCAiLi4vLi4vLi4vLi4vLi4vLi4vVm9sdW1lcy9EYXRhL2hvbWUvcGx1Z2lucy9jb2xsZWN0aW9uL3JheWNhc3QvY29tcGFuaW9uL25vZGVfbW9kdWxlcy9jaHJvbm8tbm9kZS9zcmMvbG9jYWxlcy9lbi9wYXJzZXJzL0VOTW9udGhOYW1lTWlkZGxlRW5kaWFuUGFyc2VyLnRzIiwgIi4uLy4uLy4uLy4uLy4uLy4uL1ZvbHVtZXMvRGF0YS9ob21lL3BsdWdpbnMvY29sbGVjdGlvbi9yYXljYXN0L2NvbXBhbmlvbi9ub2RlX21vZHVsZXMvY2hyb25vLW5vZGUvc3JjL2xvY2FsZXMvZW4vcGFyc2Vycy9FTk1vbnRoTmFtZVBhcnNlci50cyIsICIuLi8uLi8uLi8uLi8uLi8uLi9Wb2x1bWVzL0RhdGEvaG9tZS9wbHVnaW5zL2NvbGxlY3Rpb24vcmF5Y2FzdC9jb21wYW5pb24vbm9kZV9tb2R1bGVzL2Nocm9uby1ub2RlL3NyYy9sb2NhbGVzL2VuL3BhcnNlcnMvRU5ZZWFyTW9udGhEYXlQYXJzZXIudHMiLCAiLi4vLi4vLi4vLi4vLi4vLi4vVm9sdW1lcy9EYXRhL2hvbWUvcGx1Z2lucy9jb2xsZWN0aW9uL3JheWNhc3QvY29tcGFuaW9uL25vZGVfbW9kdWxlcy9jaHJvbm8tbm9kZS9zcmMvbG9jYWxlcy9lbi9wYXJzZXJzL0VOU2xhc2hNb250aEZvcm1hdFBhcnNlci50cyIsICIuLi8uLi8uLi8uLi8uLi8uLi9Wb2x1bWVzL0RhdGEvaG9tZS9wbHVnaW5zL2NvbGxlY3Rpb24vcmF5Y2FzdC9jb21wYW5pb24vbm9kZV9tb2R1bGVzL2Nocm9uby1ub2RlL3NyYy9jb21tb24vcGFyc2Vycy9BYnN0cmFjdFRpbWVFeHByZXNzaW9uUGFyc2VyLnRzIiwgIi4uLy4uLy4uLy4uLy4uLy4uL1ZvbHVtZXMvRGF0YS9ob21lL3BsdWdpbnMvY29sbGVjdGlvbi9yYXljYXN0L2NvbXBhbmlvbi9ub2RlX21vZHVsZXMvY2hyb25vLW5vZGUvc3JjL2xvY2FsZXMvZW4vcGFyc2Vycy9FTlRpbWVFeHByZXNzaW9uUGFyc2VyLnRzIiwgIi4uLy4uLy4uLy4uLy4uLy4uL1ZvbHVtZXMvRGF0YS9ob21lL3BsdWdpbnMvY29sbGVjdGlvbi9yYXljYXN0L2NvbXBhbmlvbi9ub2RlX21vZHVsZXMvY2hyb25vLW5vZGUvc3JjL3V0aWxzL3RpbWV1bml0cy50cyIsICIuLi8uLi8uLi8uLi8uLi8uLi9Wb2x1bWVzL0RhdGEvaG9tZS9wbHVnaW5zL2NvbGxlY3Rpb24vcmF5Y2FzdC9jb21wYW5pb24vbm9kZV9tb2R1bGVzL2Nocm9uby1ub2RlL3NyYy9sb2NhbGVzL2VuL3BhcnNlcnMvRU5UaW1lVW5pdEFnb0Zvcm1hdFBhcnNlci50cyIsICIuLi8uLi8uLi8uLi8uLi8uLi9Wb2x1bWVzL0RhdGEvaG9tZS9wbHVnaW5zL2NvbGxlY3Rpb24vcmF5Y2FzdC9jb21wYW5pb24vbm9kZV9tb2R1bGVzL2Nocm9uby1ub2RlL3NyYy9sb2NhbGVzL2VuL3BhcnNlcnMvRU5UaW1lVW5pdExhdGVyRm9ybWF0UGFyc2VyLnRzIiwgIi4uLy4uLy4uLy4uLy4uLy4uL1ZvbHVtZXMvRGF0YS9ob21lL3BsdWdpbnMvY29sbGVjdGlvbi9yYXljYXN0L2NvbXBhbmlvbi9ub2RlX21vZHVsZXMvY2hyb25vLW5vZGUvc3JjL2NvbW1vbi9hYnN0cmFjdFJlZmluZXJzLnRzIiwgIi4uLy4uLy4uLy4uLy4uLy4uL1ZvbHVtZXMvRGF0YS9ob21lL3BsdWdpbnMvY29sbGVjdGlvbi9yYXljYXN0L2NvbXBhbmlvbi9ub2RlX21vZHVsZXMvY2hyb25vLW5vZGUvc3JjL2NvbW1vbi9yZWZpbmVycy9BYnN0cmFjdE1lcmdlRGF0ZVJhbmdlUmVmaW5lci50cyIsICIuLi8uLi8uLi8uLi8uLi8uLi9Wb2x1bWVzL0RhdGEvaG9tZS9wbHVnaW5zL2NvbGxlY3Rpb24vcmF5Y2FzdC9jb21wYW5pb24vbm9kZV9tb2R1bGVzL2Nocm9uby1ub2RlL3NyYy9sb2NhbGVzL2VuL3JlZmluZXJzL0VOTWVyZ2VEYXRlUmFuZ2VSZWZpbmVyLnRzIiwgIi4uLy4uLy4uLy4uLy4uLy4uL1ZvbHVtZXMvRGF0YS9ob21lL3BsdWdpbnMvY29sbGVjdGlvbi9yYXljYXN0L2NvbXBhbmlvbi9ub2RlX21vZHVsZXMvY2hyb25vLW5vZGUvc3JjL2NhbGN1bGF0aW9uL21lcmdpbmdDYWxjdWxhdGlvbi50cyIsICIuLi8uLi8uLi8uLi8uLi8uLi9Wb2x1bWVzL0RhdGEvaG9tZS9wbHVnaW5zL2NvbGxlY3Rpb24vcmF5Y2FzdC9jb21wYW5pb24vbm9kZV9tb2R1bGVzL2Nocm9uby1ub2RlL3NyYy9jb21tb24vcmVmaW5lcnMvQWJzdHJhY3RNZXJnZURhdGVUaW1lUmVmaW5lci50cyIsICIuLi8uLi8uLi8uLi8uLi8uLi9Wb2x1bWVzL0RhdGEvaG9tZS9wbHVnaW5zL2NvbGxlY3Rpb24vcmF5Y2FzdC9jb21wYW5pb24vbm9kZV9tb2R1bGVzL2Nocm9uby1ub2RlL3NyYy9sb2NhbGVzL2VuL3JlZmluZXJzL0VOTWVyZ2VEYXRlVGltZVJlZmluZXIudHMiLCAiLi4vLi4vLi4vLi4vLi4vLi4vVm9sdW1lcy9EYXRhL2hvbWUvcGx1Z2lucy9jb2xsZWN0aW9uL3JheWNhc3QvY29tcGFuaW9uL25vZGVfbW9kdWxlcy9jaHJvbm8tbm9kZS9zcmMvY29tbW9uL3JlZmluZXJzL0V4dHJhY3RUaW1lem9uZUFiYnJSZWZpbmVyLnRzIiwgIi4uLy4uLy4uLy4uLy4uLy4uL1ZvbHVtZXMvRGF0YS9ob21lL3BsdWdpbnMvY29sbGVjdGlvbi9yYXljYXN0L2NvbXBhbmlvbi9ub2RlX21vZHVsZXMvY2hyb25vLW5vZGUvc3JjL2NvbW1vbi9yZWZpbmVycy9FeHRyYWN0VGltZXpvbmVPZmZzZXRSZWZpbmVyLnRzIiwgIi4uLy4uLy4uLy4uLy4uLy4uL1ZvbHVtZXMvRGF0YS9ob21lL3BsdWdpbnMvY29sbGVjdGlvbi9yYXljYXN0L2NvbXBhbmlvbi9ub2RlX21vZHVsZXMvY2hyb25vLW5vZGUvc3JjL2NvbW1vbi9yZWZpbmVycy9PdmVybGFwUmVtb3ZhbFJlZmluZXIudHMiLCAiLi4vLi4vLi4vLi4vLi4vLi4vVm9sdW1lcy9EYXRhL2hvbWUvcGx1Z2lucy9jb2xsZWN0aW9uL3JheWNhc3QvY29tcGFuaW9uL25vZGVfbW9kdWxlcy9jaHJvbm8tbm9kZS9zcmMvY29tbW9uL3JlZmluZXJzL0ZvcndhcmREYXRlUmVmaW5lci50cyIsICIuLi8uLi8uLi8uLi8uLi8uLi9Wb2x1bWVzL0RhdGEvaG9tZS9wbHVnaW5zL2NvbGxlY3Rpb24vcmF5Y2FzdC9jb21wYW5pb24vbm9kZV9tb2R1bGVzL2Nocm9uby1ub2RlL3NyYy91dGlscy9kYXRlcy50cyIsICIuLi8uLi8uLi8uLi8uLi8uLi9Wb2x1bWVzL0RhdGEvaG9tZS9wbHVnaW5zL2NvbGxlY3Rpb24vcmF5Y2FzdC9jb21wYW5pb24vbm9kZV9tb2R1bGVzL2Nocm9uby1ub2RlL3NyYy9jb21tb24vcmVmaW5lcnMvVW5saWtlbHlGb3JtYXRGaWx0ZXIudHMiLCAiLi4vLi4vLi4vLi4vLi4vLi4vVm9sdW1lcy9EYXRhL2hvbWUvcGx1Z2lucy9jb2xsZWN0aW9uL3JheWNhc3QvY29tcGFuaW9uL25vZGVfbW9kdWxlcy9jaHJvbm8tbm9kZS9zcmMvY29tbW9uL3BhcnNlcnMvSVNPRm9ybWF0UGFyc2VyLnRzIiwgIi4uLy4uLy4uLy4uLy4uLy4uL1ZvbHVtZXMvRGF0YS9ob21lL3BsdWdpbnMvY29sbGVjdGlvbi9yYXljYXN0L2NvbXBhbmlvbi9ub2RlX21vZHVsZXMvY2hyb25vLW5vZGUvc3JjL2NvbW1vbi9yZWZpbmVycy9NZXJnZVdlZWtkYXlDb21wb25lbnRSZWZpbmVyLnRzIiwgIi4uLy4uLy4uLy4uLy4uLy4uL1ZvbHVtZXMvRGF0YS9ob21lL3BsdWdpbnMvY29sbGVjdGlvbi9yYXljYXN0L2NvbXBhbmlvbi9ub2RlX21vZHVsZXMvY2hyb25vLW5vZGUvc3JjL2NvbmZpZ3VyYXRpb25zLnRzIiwgIi4uLy4uLy4uLy4uLy4uLy4uL1ZvbHVtZXMvRGF0YS9ob21lL3BsdWdpbnMvY29sbGVjdGlvbi9yYXljYXN0L2NvbXBhbmlvbi9ub2RlX21vZHVsZXMvY2hyb25vLW5vZGUvc3JjL2xvY2FsZXMvZW4vcGFyc2Vycy9FTkNhc3VhbERhdGVQYXJzZXIudHMiLCAiLi4vLi4vLi4vLi4vLi4vLi4vVm9sdW1lcy9EYXRhL2hvbWUvcGx1Z2lucy9jb2xsZWN0aW9uL3JheWNhc3QvY29tcGFuaW9uL25vZGVfbW9kdWxlcy9jaHJvbm8tbm9kZS9zcmMvY29tbW9uL2Nhc3VhbFJlZmVyZW5jZXMudHMiLCAiLi4vLi4vLi4vLi4vLi4vLi4vVm9sdW1lcy9EYXRhL2hvbWUvcGx1Z2lucy9jb2xsZWN0aW9uL3JheWNhc3QvY29tcGFuaW9uL25vZGVfbW9kdWxlcy9jaHJvbm8tbm9kZS9zcmMvbG9jYWxlcy9lbi9wYXJzZXJzL0VOQ2FzdWFsVGltZVBhcnNlci50cyIsICIuLi8uLi8uLi8uLi8uLi8uLi9Wb2x1bWVzL0RhdGEvaG9tZS9wbHVnaW5zL2NvbGxlY3Rpb24vcmF5Y2FzdC9jb21wYW5pb24vbm9kZV9tb2R1bGVzL2Nocm9uby1ub2RlL3NyYy9jb21tb24vY2FsY3VsYXRpb24vd2Vla2RheXMudHMiLCAiLi4vLi4vLi4vLi4vLi4vLi4vVm9sdW1lcy9EYXRhL2hvbWUvcGx1Z2lucy9jb2xsZWN0aW9uL3JheWNhc3QvY29tcGFuaW9uL25vZGVfbW9kdWxlcy9jaHJvbm8tbm9kZS9zcmMvbG9jYWxlcy9lbi9wYXJzZXJzL0VOV2Vla2RheVBhcnNlci50cyIsICIuLi8uLi8uLi8uLi8uLi8uLi9Wb2x1bWVzL0RhdGEvaG9tZS9wbHVnaW5zL2NvbGxlY3Rpb24vcmF5Y2FzdC9jb21wYW5pb24vbm9kZV9tb2R1bGVzL2Nocm9uby1ub2RlL3NyYy9sb2NhbGVzL2VuL3BhcnNlcnMvRU5SZWxhdGl2ZURhdGVGb3JtYXRQYXJzZXIudHMiLCAiLi4vLi4vLi4vLi4vLi4vLi4vVm9sdW1lcy9EYXRhL2hvbWUvcGx1Z2lucy9jb2xsZWN0aW9uL3JheWNhc3QvY29tcGFuaW9uL25vZGVfbW9kdWxlcy9jaHJvbm8tbm9kZS9zcmMvY29tbW9uL3BhcnNlcnMvU2xhc2hEYXRlRm9ybWF0UGFyc2VyLnRzIiwgIi4uLy4uLy4uLy4uLy4uLy4uL1ZvbHVtZXMvRGF0YS9ob21lL3BsdWdpbnMvY29sbGVjdGlvbi9yYXljYXN0L2NvbXBhbmlvbi9ub2RlX21vZHVsZXMvY2hyb25vLW5vZGUvc3JjL2xvY2FsZXMvZW4vcGFyc2Vycy9FTlRpbWVVbml0Q2FzdWFsUmVsYXRpdmVGb3JtYXRQYXJzZXIudHMiLCAiLi4vLi4vLi4vLi4vLi4vLi4vVm9sdW1lcy9EYXRhL2hvbWUvcGx1Z2lucy9jb2xsZWN0aW9uL3JheWNhc3QvY29tcGFuaW9uL25vZGVfbW9kdWxlcy9jaHJvbm8tbm9kZS9zcmMvbG9jYWxlcy9lbi9yZWZpbmVycy9FTk1lcmdlUmVsYXRpdmVBZnRlckRhdGVSZWZpbmVyLnRzIiwgIi4uLy4uLy4uLy4uLy4uLy4uL1ZvbHVtZXMvRGF0YS9ob21lL3BsdWdpbnMvY29sbGVjdGlvbi9yYXljYXN0L2NvbXBhbmlvbi9ub2RlX21vZHVsZXMvY2hyb25vLW5vZGUvc3JjL2xvY2FsZXMvZW4vcmVmaW5lcnMvRU5NZXJnZVJlbGF0aXZlRm9sbG93QnlEYXRlUmVmaW5lci50cyIsICIuLi8uLi8uLi8uLi8uLi8uLi9Wb2x1bWVzL0RhdGEvaG9tZS9wbHVnaW5zL2NvbGxlY3Rpb24vcmF5Y2FzdC9jb21wYW5pb24vbm9kZV9tb2R1bGVzL2Nocm9uby1ub2RlL3NyYy9sb2NhbGVzL2VuL3JlZmluZXJzL0VORXh0cmFjdFllYXJTdWZmaXhSZWZpbmVyLnRzIiwgIi4uLy4uLy4uLy4uLy4uLy4uL1ZvbHVtZXMvRGF0YS9ob21lL3BsdWdpbnMvY29sbGVjdGlvbi9yYXljYXN0L2NvbXBhbmlvbi9ub2RlX21vZHVsZXMvY2hyb25vLW5vZGUvc3JjL2xvY2FsZXMvZW4vcmVmaW5lcnMvRU5Vbmxpa2VseUZvcm1hdEZpbHRlci50cyIsICIuLi8uLi8uLi8uLi8uLi8uLi9Wb2x1bWVzL0RhdGEvaG9tZS9wbHVnaW5zL2NvbGxlY3Rpb24vcmF5Y2FzdC9jb21wYW5pb24vbm9kZV9tb2R1bGVzL2Nocm9uby1ub2RlL3NyYy9sb2NhbGVzL2VuL2NvbmZpZ3VyYXRpb24udHMiLCAiLi4vLi4vLi4vLi4vLi4vLi4vVm9sdW1lcy9EYXRhL2hvbWUvcGx1Z2lucy9jb2xsZWN0aW9uL3JheWNhc3QvY29tcGFuaW9uL25vZGVfbW9kdWxlcy9jaHJvbm8tbm9kZS9zcmMvY2hyb25vLnRzIiwgIi4uLy4uLy4uLy4uLy4uLy4uL1ZvbHVtZXMvRGF0YS9ob21lL3BsdWdpbnMvY29sbGVjdGlvbi9yYXljYXN0L2NvbXBhbmlvbi9ub2RlX21vZHVsZXMvY2hyb25vLW5vZGUvc3JjL2xvY2FsZXMvZW4vaW5kZXgudHMiLCAiLi4vLi4vLi4vLi4vLi4vLi4vVm9sdW1lcy9EYXRhL2hvbWUvcGx1Z2lucy9jb2xsZWN0aW9uL3JheWNhc3QvY29tcGFuaW9uL25vZGVfbW9kdWxlcy9jaHJvbm8tbm9kZS9zcmMvaW5kZXgudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbIiFmdW5jdGlvbih0LG4pe1wib2JqZWN0XCI9PXR5cGVvZiBleHBvcnRzJiZcInVuZGVmaW5lZFwiIT10eXBlb2YgbW9kdWxlP21vZHVsZS5leHBvcnRzPW4oKTpcImZ1bmN0aW9uXCI9PXR5cGVvZiBkZWZpbmUmJmRlZmluZS5hbWQ/ZGVmaW5lKG4pOih0PVwidW5kZWZpbmVkXCIhPXR5cGVvZiBnbG9iYWxUaGlzP2dsb2JhbFRoaXM6dHx8c2VsZikuZGF5anNfcGx1Z2luX3F1YXJ0ZXJPZlllYXI9bigpfSh0aGlzLChmdW5jdGlvbigpe1widXNlIHN0cmljdFwiO3ZhciB0PVwibW9udGhcIixuPVwicXVhcnRlclwiO3JldHVybiBmdW5jdGlvbihlLGkpe3ZhciByPWkucHJvdG90eXBlO3IucXVhcnRlcj1mdW5jdGlvbih0KXtyZXR1cm4gdGhpcy4kdXRpbHMoKS51KHQpP01hdGguY2VpbCgodGhpcy5tb250aCgpKzEpLzMpOnRoaXMubW9udGgodGhpcy5tb250aCgpJTMrMyoodC0xKSl9O3ZhciBzPXIuYWRkO3IuYWRkPWZ1bmN0aW9uKGUsaSl7cmV0dXJuIGU9TnVtYmVyKGUpLHRoaXMuJHV0aWxzKCkucChpKT09PW4/dGhpcy5hZGQoMyplLHQpOnMuYmluZCh0aGlzKShlLGkpfTt2YXIgdT1yLnN0YXJ0T2Y7ci5zdGFydE9mPWZ1bmN0aW9uKGUsaSl7dmFyIHI9dGhpcy4kdXRpbHMoKSxzPSEhci51KGkpfHxpO2lmKHIucChlKT09PW4pe3ZhciBvPXRoaXMucXVhcnRlcigpLTE7cmV0dXJuIHM/dGhpcy5tb250aCgzKm8pLnN0YXJ0T2YodCkuc3RhcnRPZihcImRheVwiKTp0aGlzLm1vbnRoKDMqbysyKS5lbmRPZih0KS5lbmRPZihcImRheVwiKX1yZXR1cm4gdS5iaW5kKHRoaXMpKGUsaSl9fX0pKTsiLCAiIWZ1bmN0aW9uKHQsZSl7XCJvYmplY3RcIj09dHlwZW9mIGV4cG9ydHMmJlwidW5kZWZpbmVkXCIhPXR5cGVvZiBtb2R1bGU/bW9kdWxlLmV4cG9ydHM9ZSgpOlwiZnVuY3Rpb25cIj09dHlwZW9mIGRlZmluZSYmZGVmaW5lLmFtZD9kZWZpbmUoZSk6KHQ9XCJ1bmRlZmluZWRcIiE9dHlwZW9mIGdsb2JhbFRoaXM/Z2xvYmFsVGhpczp0fHxzZWxmKS5kYXlqcz1lKCl9KHRoaXMsKGZ1bmN0aW9uKCl7XCJ1c2Ugc3RyaWN0XCI7dmFyIHQ9MWUzLGU9NmU0LG49MzZlNSxyPVwibWlsbGlzZWNvbmRcIixpPVwic2Vjb25kXCIscz1cIm1pbnV0ZVwiLHU9XCJob3VyXCIsYT1cImRheVwiLG89XCJ3ZWVrXCIsYz1cIm1vbnRoXCIsZj1cInF1YXJ0ZXJcIixoPVwieWVhclwiLGQ9XCJkYXRlXCIsbD1cIkludmFsaWQgRGF0ZVwiLCQ9L14oXFxkezR9KVstL10/KFxcZHsxLDJ9KT9bLS9dPyhcXGR7MCwyfSlbVHRcXHNdKihcXGR7MSwyfSk/Oj8oXFxkezEsMn0pPzo/KFxcZHsxLDJ9KT9bLjpdPyhcXGQrKT8kLyx5PS9cXFsoW15cXF1dKyldfFl7MSw0fXxNezEsNH18RHsxLDJ9fGR7MSw0fXxIezEsMn18aHsxLDJ9fGF8QXxtezEsMn18c3sxLDJ9fFp7MSwyfXxTU1MvZyxNPXtuYW1lOlwiZW5cIix3ZWVrZGF5czpcIlN1bmRheV9Nb25kYXlfVHVlc2RheV9XZWRuZXNkYXlfVGh1cnNkYXlfRnJpZGF5X1NhdHVyZGF5XCIuc3BsaXQoXCJfXCIpLG1vbnRoczpcIkphbnVhcnlfRmVicnVhcnlfTWFyY2hfQXByaWxfTWF5X0p1bmVfSnVseV9BdWd1c3RfU2VwdGVtYmVyX09jdG9iZXJfTm92ZW1iZXJfRGVjZW1iZXJcIi5zcGxpdChcIl9cIiksb3JkaW5hbDpmdW5jdGlvbih0KXt2YXIgZT1bXCJ0aFwiLFwic3RcIixcIm5kXCIsXCJyZFwiXSxuPXQlMTAwO3JldHVyblwiW1wiK3QrKGVbKG4tMjApJTEwXXx8ZVtuXXx8ZVswXSkrXCJdXCJ9fSxtPWZ1bmN0aW9uKHQsZSxuKXt2YXIgcj1TdHJpbmcodCk7cmV0dXJuIXJ8fHIubGVuZ3RoPj1lP3Q6XCJcIitBcnJheShlKzEtci5sZW5ndGgpLmpvaW4obikrdH0sdj17czptLHo6ZnVuY3Rpb24odCl7dmFyIGU9LXQudXRjT2Zmc2V0KCksbj1NYXRoLmFicyhlKSxyPU1hdGguZmxvb3Iobi82MCksaT1uJTYwO3JldHVybihlPD0wP1wiK1wiOlwiLVwiKSttKHIsMixcIjBcIikrXCI6XCIrbShpLDIsXCIwXCIpfSxtOmZ1bmN0aW9uIHQoZSxuKXtpZihlLmRhdGUoKTxuLmRhdGUoKSlyZXR1cm4tdChuLGUpO3ZhciByPTEyKihuLnllYXIoKS1lLnllYXIoKSkrKG4ubW9udGgoKS1lLm1vbnRoKCkpLGk9ZS5jbG9uZSgpLmFkZChyLGMpLHM9bi1pPDAsdT1lLmNsb25lKCkuYWRkKHIrKHM/LTE6MSksYyk7cmV0dXJuKygtKHIrKG4taSkvKHM/aS11OnUtaSkpfHwwKX0sYTpmdW5jdGlvbih0KXtyZXR1cm4gdDwwP01hdGguY2VpbCh0KXx8MDpNYXRoLmZsb29yKHQpfSxwOmZ1bmN0aW9uKHQpe3JldHVybntNOmMseTpoLHc6byxkOmEsRDpkLGg6dSxtOnMsczppLG1zOnIsUTpmfVt0XXx8U3RyaW5nKHR8fFwiXCIpLnRvTG93ZXJDYXNlKCkucmVwbGFjZSgvcyQvLFwiXCIpfSx1OmZ1bmN0aW9uKHQpe3JldHVybiB2b2lkIDA9PT10fX0sZz1cImVuXCIsRD17fTtEW2ddPU07dmFyIHA9XCIkaXNEYXlqc09iamVjdFwiLFM9ZnVuY3Rpb24odCl7cmV0dXJuIHQgaW5zdGFuY2VvZiBffHwhKCF0fHwhdFtwXSl9LHc9ZnVuY3Rpb24gdChlLG4scil7dmFyIGk7aWYoIWUpcmV0dXJuIGc7aWYoXCJzdHJpbmdcIj09dHlwZW9mIGUpe3ZhciBzPWUudG9Mb3dlckNhc2UoKTtEW3NdJiYoaT1zKSxuJiYoRFtzXT1uLGk9cyk7dmFyIHU9ZS5zcGxpdChcIi1cIik7aWYoIWkmJnUubGVuZ3RoPjEpcmV0dXJuIHQodVswXSl9ZWxzZXt2YXIgYT1lLm5hbWU7RFthXT1lLGk9YX1yZXR1cm4hciYmaSYmKGc9aSksaXx8IXImJmd9LE89ZnVuY3Rpb24odCxlKXtpZihTKHQpKXJldHVybiB0LmNsb25lKCk7dmFyIG49XCJvYmplY3RcIj09dHlwZW9mIGU/ZTp7fTtyZXR1cm4gbi5kYXRlPXQsbi5hcmdzPWFyZ3VtZW50cyxuZXcgXyhuKX0sYj12O2IubD13LGIuaT1TLGIudz1mdW5jdGlvbih0LGUpe3JldHVybiBPKHQse2xvY2FsZTplLiRMLHV0YzplLiR1LHg6ZS4keCwkb2Zmc2V0OmUuJG9mZnNldH0pfTt2YXIgXz1mdW5jdGlvbigpe2Z1bmN0aW9uIE0odCl7dGhpcy4kTD13KHQubG9jYWxlLG51bGwsITApLHRoaXMucGFyc2UodCksdGhpcy4keD10aGlzLiR4fHx0Lnh8fHt9LHRoaXNbcF09ITB9dmFyIG09TS5wcm90b3R5cGU7cmV0dXJuIG0ucGFyc2U9ZnVuY3Rpb24odCl7dGhpcy4kZD1mdW5jdGlvbih0KXt2YXIgZT10LmRhdGUsbj10LnV0YztpZihudWxsPT09ZSlyZXR1cm4gbmV3IERhdGUoTmFOKTtpZihiLnUoZSkpcmV0dXJuIG5ldyBEYXRlO2lmKGUgaW5zdGFuY2VvZiBEYXRlKXJldHVybiBuZXcgRGF0ZShlKTtpZihcInN0cmluZ1wiPT10eXBlb2YgZSYmIS9aJC9pLnRlc3QoZSkpe3ZhciByPWUubWF0Y2goJCk7aWYocil7dmFyIGk9clsyXS0xfHwwLHM9KHJbN118fFwiMFwiKS5zdWJzdHJpbmcoMCwzKTtyZXR1cm4gbj9uZXcgRGF0ZShEYXRlLlVUQyhyWzFdLGksclszXXx8MSxyWzRdfHwwLHJbNV18fDAscls2XXx8MCxzKSk6bmV3IERhdGUoclsxXSxpLHJbM118fDEscls0XXx8MCxyWzVdfHwwLHJbNl18fDAscyl9fXJldHVybiBuZXcgRGF0ZShlKX0odCksdGhpcy5pbml0KCl9LG0uaW5pdD1mdW5jdGlvbigpe3ZhciB0PXRoaXMuJGQ7dGhpcy4keT10LmdldEZ1bGxZZWFyKCksdGhpcy4kTT10LmdldE1vbnRoKCksdGhpcy4kRD10LmdldERhdGUoKSx0aGlzLiRXPXQuZ2V0RGF5KCksdGhpcy4kSD10LmdldEhvdXJzKCksdGhpcy4kbT10LmdldE1pbnV0ZXMoKSx0aGlzLiRzPXQuZ2V0U2Vjb25kcygpLHRoaXMuJG1zPXQuZ2V0TWlsbGlzZWNvbmRzKCl9LG0uJHV0aWxzPWZ1bmN0aW9uKCl7cmV0dXJuIGJ9LG0uaXNWYWxpZD1mdW5jdGlvbigpe3JldHVybiEodGhpcy4kZC50b1N0cmluZygpPT09bCl9LG0uaXNTYW1lPWZ1bmN0aW9uKHQsZSl7dmFyIG49Tyh0KTtyZXR1cm4gdGhpcy5zdGFydE9mKGUpPD1uJiZuPD10aGlzLmVuZE9mKGUpfSxtLmlzQWZ0ZXI9ZnVuY3Rpb24odCxlKXtyZXR1cm4gTyh0KTx0aGlzLnN0YXJ0T2YoZSl9LG0uaXNCZWZvcmU9ZnVuY3Rpb24odCxlKXtyZXR1cm4gdGhpcy5lbmRPZihlKTxPKHQpfSxtLiRnPWZ1bmN0aW9uKHQsZSxuKXtyZXR1cm4gYi51KHQpP3RoaXNbZV06dGhpcy5zZXQobix0KX0sbS51bml4PWZ1bmN0aW9uKCl7cmV0dXJuIE1hdGguZmxvb3IodGhpcy52YWx1ZU9mKCkvMWUzKX0sbS52YWx1ZU9mPWZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuJGQuZ2V0VGltZSgpfSxtLnN0YXJ0T2Y9ZnVuY3Rpb24odCxlKXt2YXIgbj10aGlzLHI9ISFiLnUoZSl8fGUsZj1iLnAodCksbD1mdW5jdGlvbih0LGUpe3ZhciBpPWIudyhuLiR1P0RhdGUuVVRDKG4uJHksZSx0KTpuZXcgRGF0ZShuLiR5LGUsdCksbik7cmV0dXJuIHI/aTppLmVuZE9mKGEpfSwkPWZ1bmN0aW9uKHQsZSl7cmV0dXJuIGIudyhuLnRvRGF0ZSgpW3RdLmFwcGx5KG4udG9EYXRlKFwic1wiKSwocj9bMCwwLDAsMF06WzIzLDU5LDU5LDk5OV0pLnNsaWNlKGUpKSxuKX0seT10aGlzLiRXLE09dGhpcy4kTSxtPXRoaXMuJEQsdj1cInNldFwiKyh0aGlzLiR1P1wiVVRDXCI6XCJcIik7c3dpdGNoKGYpe2Nhc2UgaDpyZXR1cm4gcj9sKDEsMCk6bCgzMSwxMSk7Y2FzZSBjOnJldHVybiByP2woMSxNKTpsKDAsTSsxKTtjYXNlIG86dmFyIGc9dGhpcy4kbG9jYWxlKCkud2Vla1N0YXJ0fHwwLEQ9KHk8Zz95Kzc6eSktZztyZXR1cm4gbChyP20tRDptKyg2LUQpLE0pO2Nhc2UgYTpjYXNlIGQ6cmV0dXJuICQoditcIkhvdXJzXCIsMCk7Y2FzZSB1OnJldHVybiAkKHYrXCJNaW51dGVzXCIsMSk7Y2FzZSBzOnJldHVybiAkKHYrXCJTZWNvbmRzXCIsMik7Y2FzZSBpOnJldHVybiAkKHYrXCJNaWxsaXNlY29uZHNcIiwzKTtkZWZhdWx0OnJldHVybiB0aGlzLmNsb25lKCl9fSxtLmVuZE9mPWZ1bmN0aW9uKHQpe3JldHVybiB0aGlzLnN0YXJ0T2YodCwhMSl9LG0uJHNldD1mdW5jdGlvbih0LGUpe3ZhciBuLG89Yi5wKHQpLGY9XCJzZXRcIisodGhpcy4kdT9cIlVUQ1wiOlwiXCIpLGw9KG49e30sblthXT1mK1wiRGF0ZVwiLG5bZF09ZitcIkRhdGVcIixuW2NdPWYrXCJNb250aFwiLG5baF09ZitcIkZ1bGxZZWFyXCIsblt1XT1mK1wiSG91cnNcIixuW3NdPWYrXCJNaW51dGVzXCIsbltpXT1mK1wiU2Vjb25kc1wiLG5bcl09ZitcIk1pbGxpc2Vjb25kc1wiLG4pW29dLCQ9bz09PWE/dGhpcy4kRCsoZS10aGlzLiRXKTplO2lmKG89PT1jfHxvPT09aCl7dmFyIHk9dGhpcy5jbG9uZSgpLnNldChkLDEpO3kuJGRbbF0oJCkseS5pbml0KCksdGhpcy4kZD15LnNldChkLE1hdGgubWluKHRoaXMuJEQseS5kYXlzSW5Nb250aCgpKSkuJGR9ZWxzZSBsJiZ0aGlzLiRkW2xdKCQpO3JldHVybiB0aGlzLmluaXQoKSx0aGlzfSxtLnNldD1mdW5jdGlvbih0LGUpe3JldHVybiB0aGlzLmNsb25lKCkuJHNldCh0LGUpfSxtLmdldD1mdW5jdGlvbih0KXtyZXR1cm4gdGhpc1tiLnAodCldKCl9LG0uYWRkPWZ1bmN0aW9uKHIsZil7dmFyIGQsbD10aGlzO3I9TnVtYmVyKHIpO3ZhciAkPWIucChmKSx5PWZ1bmN0aW9uKHQpe3ZhciBlPU8obCk7cmV0dXJuIGIudyhlLmRhdGUoZS5kYXRlKCkrTWF0aC5yb3VuZCh0KnIpKSxsKX07aWYoJD09PWMpcmV0dXJuIHRoaXMuc2V0KGMsdGhpcy4kTStyKTtpZigkPT09aClyZXR1cm4gdGhpcy5zZXQoaCx0aGlzLiR5K3IpO2lmKCQ9PT1hKXJldHVybiB5KDEpO2lmKCQ9PT1vKXJldHVybiB5KDcpO3ZhciBNPShkPXt9LGRbc109ZSxkW3VdPW4sZFtpXT10LGQpWyRdfHwxLG09dGhpcy4kZC5nZXRUaW1lKCkrcipNO3JldHVybiBiLncobSx0aGlzKX0sbS5zdWJ0cmFjdD1mdW5jdGlvbih0LGUpe3JldHVybiB0aGlzLmFkZCgtMSp0LGUpfSxtLmZvcm1hdD1mdW5jdGlvbih0KXt2YXIgZT10aGlzLG49dGhpcy4kbG9jYWxlKCk7aWYoIXRoaXMuaXNWYWxpZCgpKXJldHVybiBuLmludmFsaWREYXRlfHxsO3ZhciByPXR8fFwiWVlZWS1NTS1ERFRISDptbTpzc1pcIixpPWIueih0aGlzKSxzPXRoaXMuJEgsdT10aGlzLiRtLGE9dGhpcy4kTSxvPW4ud2Vla2RheXMsYz1uLm1vbnRocyxmPW4ubWVyaWRpZW0saD1mdW5jdGlvbih0LG4saSxzKXtyZXR1cm4gdCYmKHRbbl18fHQoZSxyKSl8fGlbbl0uc2xpY2UoMCxzKX0sZD1mdW5jdGlvbih0KXtyZXR1cm4gYi5zKHMlMTJ8fDEyLHQsXCIwXCIpfSwkPWZ8fGZ1bmN0aW9uKHQsZSxuKXt2YXIgcj10PDEyP1wiQU1cIjpcIlBNXCI7cmV0dXJuIG4/ci50b0xvd2VyQ2FzZSgpOnJ9O3JldHVybiByLnJlcGxhY2UoeSwoZnVuY3Rpb24odCxyKXtyZXR1cm4gcnx8ZnVuY3Rpb24odCl7c3dpdGNoKHQpe2Nhc2VcIllZXCI6cmV0dXJuIFN0cmluZyhlLiR5KS5zbGljZSgtMik7Y2FzZVwiWVlZWVwiOnJldHVybiBiLnMoZS4keSw0LFwiMFwiKTtjYXNlXCJNXCI6cmV0dXJuIGErMTtjYXNlXCJNTVwiOnJldHVybiBiLnMoYSsxLDIsXCIwXCIpO2Nhc2VcIk1NTVwiOnJldHVybiBoKG4ubW9udGhzU2hvcnQsYSxjLDMpO2Nhc2VcIk1NTU1cIjpyZXR1cm4gaChjLGEpO2Nhc2VcIkRcIjpyZXR1cm4gZS4kRDtjYXNlXCJERFwiOnJldHVybiBiLnMoZS4kRCwyLFwiMFwiKTtjYXNlXCJkXCI6cmV0dXJuIFN0cmluZyhlLiRXKTtjYXNlXCJkZFwiOnJldHVybiBoKG4ud2Vla2RheXNNaW4sZS4kVyxvLDIpO2Nhc2VcImRkZFwiOnJldHVybiBoKG4ud2Vla2RheXNTaG9ydCxlLiRXLG8sMyk7Y2FzZVwiZGRkZFwiOnJldHVybiBvW2UuJFddO2Nhc2VcIkhcIjpyZXR1cm4gU3RyaW5nKHMpO2Nhc2VcIkhIXCI6cmV0dXJuIGIucyhzLDIsXCIwXCIpO2Nhc2VcImhcIjpyZXR1cm4gZCgxKTtjYXNlXCJoaFwiOnJldHVybiBkKDIpO2Nhc2VcImFcIjpyZXR1cm4gJChzLHUsITApO2Nhc2VcIkFcIjpyZXR1cm4gJChzLHUsITEpO2Nhc2VcIm1cIjpyZXR1cm4gU3RyaW5nKHUpO2Nhc2VcIm1tXCI6cmV0dXJuIGIucyh1LDIsXCIwXCIpO2Nhc2VcInNcIjpyZXR1cm4gU3RyaW5nKGUuJHMpO2Nhc2VcInNzXCI6cmV0dXJuIGIucyhlLiRzLDIsXCIwXCIpO2Nhc2VcIlNTU1wiOnJldHVybiBiLnMoZS4kbXMsMyxcIjBcIik7Y2FzZVwiWlwiOnJldHVybiBpfXJldHVybiBudWxsfSh0KXx8aS5yZXBsYWNlKFwiOlwiLFwiXCIpfSkpfSxtLnV0Y09mZnNldD1mdW5jdGlvbigpe3JldHVybiAxNSotTWF0aC5yb3VuZCh0aGlzLiRkLmdldFRpbWV6b25lT2Zmc2V0KCkvMTUpfSxtLmRpZmY9ZnVuY3Rpb24ocixkLGwpe3ZhciAkLHk9dGhpcyxNPWIucChkKSxtPU8ociksdj0obS51dGNPZmZzZXQoKS10aGlzLnV0Y09mZnNldCgpKSplLGc9dGhpcy1tLEQ9ZnVuY3Rpb24oKXtyZXR1cm4gYi5tKHksbSl9O3N3aXRjaChNKXtjYXNlIGg6JD1EKCkvMTI7YnJlYWs7Y2FzZSBjOiQ9RCgpO2JyZWFrO2Nhc2UgZjokPUQoKS8zO2JyZWFrO2Nhc2UgbzokPShnLXYpLzYwNDhlNTticmVhaztjYXNlIGE6JD0oZy12KS84NjRlNTticmVhaztjYXNlIHU6JD1nL247YnJlYWs7Y2FzZSBzOiQ9Zy9lO2JyZWFrO2Nhc2UgaTokPWcvdDticmVhaztkZWZhdWx0OiQ9Z31yZXR1cm4gbD8kOmIuYSgkKX0sbS5kYXlzSW5Nb250aD1mdW5jdGlvbigpe3JldHVybiB0aGlzLmVuZE9mKGMpLiREfSxtLiRsb2NhbGU9ZnVuY3Rpb24oKXtyZXR1cm4gRFt0aGlzLiRMXX0sbS5sb2NhbGU9ZnVuY3Rpb24odCxlKXtpZighdClyZXR1cm4gdGhpcy4kTDt2YXIgbj10aGlzLmNsb25lKCkscj13KHQsZSwhMCk7cmV0dXJuIHImJihuLiRMPXIpLG59LG0uY2xvbmU9ZnVuY3Rpb24oKXtyZXR1cm4gYi53KHRoaXMuJGQsdGhpcyl9LG0udG9EYXRlPWZ1bmN0aW9uKCl7cmV0dXJuIG5ldyBEYXRlKHRoaXMudmFsdWVPZigpKX0sbS50b0pTT049ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5pc1ZhbGlkKCk/dGhpcy50b0lTT1N0cmluZygpOm51bGx9LG0udG9JU09TdHJpbmc9ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy4kZC50b0lTT1N0cmluZygpfSxtLnRvU3RyaW5nPWZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuJGQudG9VVENTdHJpbmcoKX0sTX0oKSxrPV8ucHJvdG90eXBlO3JldHVybiBPLnByb3RvdHlwZT1rLFtbXCIkbXNcIixyXSxbXCIkc1wiLGldLFtcIiRtXCIsc10sW1wiJEhcIix1XSxbXCIkV1wiLGFdLFtcIiRNXCIsY10sW1wiJHlcIixoXSxbXCIkRFwiLGRdXS5mb3JFYWNoKChmdW5jdGlvbih0KXtrW3RbMV1dPWZ1bmN0aW9uKGUpe3JldHVybiB0aGlzLiRnKGUsdFswXSx0WzFdKX19KSksTy5leHRlbmQ9ZnVuY3Rpb24odCxlKXtyZXR1cm4gdC4kaXx8KHQoZSxfLE8pLHQuJGk9ITApLE99LE8ubG9jYWxlPXcsTy5pc0RheWpzPVMsTy51bml4PWZ1bmN0aW9uKHQpe3JldHVybiBPKDFlMyp0KX0sTy5lbj1EW2ddLE8uTHM9RCxPLnA9e30sT30pKTsiLCAiIWZ1bmN0aW9uKGUsdCl7XCJvYmplY3RcIj09dHlwZW9mIGV4cG9ydHMmJlwidW5kZWZpbmVkXCIhPXR5cGVvZiBtb2R1bGU/bW9kdWxlLmV4cG9ydHM9dCgpOlwiZnVuY3Rpb25cIj09dHlwZW9mIGRlZmluZSYmZGVmaW5lLmFtZD9kZWZpbmUodCk6KGU9XCJ1bmRlZmluZWRcIiE9dHlwZW9mIGdsb2JhbFRoaXM/Z2xvYmFsVGhpczplfHxzZWxmKS5kYXlqc19wbHVnaW5fYWR2YW5jZWRGb3JtYXQ9dCgpfSh0aGlzLChmdW5jdGlvbigpe1widXNlIHN0cmljdFwiO3JldHVybiBmdW5jdGlvbihlLHQpe3ZhciByPXQucHJvdG90eXBlLG49ci5mb3JtYXQ7ci5mb3JtYXQ9ZnVuY3Rpb24oZSl7dmFyIHQ9dGhpcyxyPXRoaXMuJGxvY2FsZSgpO2lmKCF0aGlzLmlzVmFsaWQoKSlyZXR1cm4gbi5iaW5kKHRoaXMpKGUpO3ZhciBzPXRoaXMuJHV0aWxzKCksYT0oZXx8XCJZWVlZLU1NLUREVEhIOm1tOnNzWlwiKS5yZXBsYWNlKC9cXFsoW15cXF1dKyldfFF8d298d3d8d3xXV3xXfHp6enx6fGdnZ2d8R0dHR3xEb3xYfHh8a3sxLDJ9fFMvZywoZnVuY3Rpb24oZSl7c3dpdGNoKGUpe2Nhc2VcIlFcIjpyZXR1cm4gTWF0aC5jZWlsKCh0LiRNKzEpLzMpO2Nhc2VcIkRvXCI6cmV0dXJuIHIub3JkaW5hbCh0LiREKTtjYXNlXCJnZ2dnXCI6cmV0dXJuIHQud2Vla1llYXIoKTtjYXNlXCJHR0dHXCI6cmV0dXJuIHQuaXNvV2Vla1llYXIoKTtjYXNlXCJ3b1wiOnJldHVybiByLm9yZGluYWwodC53ZWVrKCksXCJXXCIpO2Nhc2VcIndcIjpjYXNlXCJ3d1wiOnJldHVybiBzLnModC53ZWVrKCksXCJ3XCI9PT1lPzE6MixcIjBcIik7Y2FzZVwiV1wiOmNhc2VcIldXXCI6cmV0dXJuIHMucyh0Lmlzb1dlZWsoKSxcIldcIj09PWU/MToyLFwiMFwiKTtjYXNlXCJrXCI6Y2FzZVwia2tcIjpyZXR1cm4gcy5zKFN0cmluZygwPT09dC4kSD8yNDp0LiRIKSxcImtcIj09PWU/MToyLFwiMFwiKTtjYXNlXCJYXCI6cmV0dXJuIE1hdGguZmxvb3IodC4kZC5nZXRUaW1lKCkvMWUzKTtjYXNlXCJ4XCI6cmV0dXJuIHQuJGQuZ2V0VGltZSgpO2Nhc2VcInpcIjpyZXR1cm5cIltcIit0Lm9mZnNldE5hbWUoKStcIl1cIjtjYXNlXCJ6enpcIjpyZXR1cm5cIltcIit0Lm9mZnNldE5hbWUoXCJsb25nXCIpK1wiXVwiO2RlZmF1bHQ6cmV0dXJuIGV9fSkpO3JldHVybiBuLmJpbmQodGhpcykoYSl9fX0pKTsiLCAiIWZ1bmN0aW9uKGUsdCl7XCJvYmplY3RcIj09dHlwZW9mIGV4cG9ydHMmJlwidW5kZWZpbmVkXCIhPXR5cGVvZiBtb2R1bGU/bW9kdWxlLmV4cG9ydHM9dCgpOlwiZnVuY3Rpb25cIj09dHlwZW9mIGRlZmluZSYmZGVmaW5lLmFtZD9kZWZpbmUodCk6KGU9XCJ1bmRlZmluZWRcIiE9dHlwZW9mIGdsb2JhbFRoaXM/Z2xvYmFsVGhpczplfHxzZWxmKS5kYXlqc19wbHVnaW5fd2Vla09mWWVhcj10KCl9KHRoaXMsKGZ1bmN0aW9uKCl7XCJ1c2Ugc3RyaWN0XCI7dmFyIGU9XCJ3ZWVrXCIsdD1cInllYXJcIjtyZXR1cm4gZnVuY3Rpb24oaSxuLHIpe3ZhciBmPW4ucHJvdG90eXBlO2Yud2Vlaz1mdW5jdGlvbihpKXtpZih2b2lkIDA9PT1pJiYoaT1udWxsKSxudWxsIT09aSlyZXR1cm4gdGhpcy5hZGQoNyooaS10aGlzLndlZWsoKSksXCJkYXlcIik7dmFyIG49dGhpcy4kbG9jYWxlKCkueWVhclN0YXJ0fHwxO2lmKDExPT09dGhpcy5tb250aCgpJiZ0aGlzLmRhdGUoKT4yNSl7dmFyIGY9cih0aGlzKS5zdGFydE9mKHQpLmFkZCgxLHQpLmRhdGUobikscz1yKHRoaXMpLmVuZE9mKGUpO2lmKGYuaXNCZWZvcmUocykpcmV0dXJuIDF9dmFyIGE9cih0aGlzKS5zdGFydE9mKHQpLmRhdGUobikuc3RhcnRPZihlKS5zdWJ0cmFjdCgxLFwibWlsbGlzZWNvbmRcIiksbz10aGlzLmRpZmYoYSxlLCEwKTtyZXR1cm4gbzwwP3IodGhpcykuc3RhcnRPZihcIndlZWtcIikud2VlaygpOk1hdGguY2VpbChvKX0sZi53ZWVrcz1mdW5jdGlvbihlKXtyZXR1cm4gdm9pZCAwPT09ZSYmKGU9bnVsbCksdGhpcy53ZWVrKGUpfX19KSk7IiwgIiFmdW5jdGlvbih0LGkpe1wib2JqZWN0XCI9PXR5cGVvZiBleHBvcnRzJiZcInVuZGVmaW5lZFwiIT10eXBlb2YgbW9kdWxlP21vZHVsZS5leHBvcnRzPWkoKTpcImZ1bmN0aW9uXCI9PXR5cGVvZiBkZWZpbmUmJmRlZmluZS5hbWQ/ZGVmaW5lKGkpOih0PVwidW5kZWZpbmVkXCIhPXR5cGVvZiBnbG9iYWxUaGlzP2dsb2JhbFRoaXM6dHx8c2VsZikuZGF5anNfcGx1Z2luX3V0Yz1pKCl9KHRoaXMsKGZ1bmN0aW9uKCl7XCJ1c2Ugc3RyaWN0XCI7dmFyIHQ9XCJtaW51dGVcIixpPS9bKy1dXFxkXFxkKD86Oj9cXGRcXGQpPy9nLGU9LyhbKy1dfFxcZFxcZCkvZztyZXR1cm4gZnVuY3Rpb24ocyxmLG4pe3ZhciB1PWYucHJvdG90eXBlO24udXRjPWZ1bmN0aW9uKHQpe3ZhciBpPXtkYXRlOnQsdXRjOiEwLGFyZ3M6YXJndW1lbnRzfTtyZXR1cm4gbmV3IGYoaSl9LHUudXRjPWZ1bmN0aW9uKGkpe3ZhciBlPW4odGhpcy50b0RhdGUoKSx7bG9jYWxlOnRoaXMuJEwsdXRjOiEwfSk7cmV0dXJuIGk/ZS5hZGQodGhpcy51dGNPZmZzZXQoKSx0KTplfSx1LmxvY2FsPWZ1bmN0aW9uKCl7cmV0dXJuIG4odGhpcy50b0RhdGUoKSx7bG9jYWxlOnRoaXMuJEwsdXRjOiExfSl9O3ZhciBvPXUucGFyc2U7dS5wYXJzZT1mdW5jdGlvbih0KXt0LnV0YyYmKHRoaXMuJHU9ITApLHRoaXMuJHV0aWxzKCkudSh0LiRvZmZzZXQpfHwodGhpcy4kb2Zmc2V0PXQuJG9mZnNldCksby5jYWxsKHRoaXMsdCl9O3ZhciByPXUuaW5pdDt1LmluaXQ9ZnVuY3Rpb24oKXtpZih0aGlzLiR1KXt2YXIgdD10aGlzLiRkO3RoaXMuJHk9dC5nZXRVVENGdWxsWWVhcigpLHRoaXMuJE09dC5nZXRVVENNb250aCgpLHRoaXMuJEQ9dC5nZXRVVENEYXRlKCksdGhpcy4kVz10LmdldFVUQ0RheSgpLHRoaXMuJEg9dC5nZXRVVENIb3VycygpLHRoaXMuJG09dC5nZXRVVENNaW51dGVzKCksdGhpcy4kcz10LmdldFVUQ1NlY29uZHMoKSx0aGlzLiRtcz10LmdldFVUQ01pbGxpc2Vjb25kcygpfWVsc2Ugci5jYWxsKHRoaXMpfTt2YXIgYT11LnV0Y09mZnNldDt1LnV0Y09mZnNldD1mdW5jdGlvbihzLGYpe3ZhciBuPXRoaXMuJHV0aWxzKCkudTtpZihuKHMpKXJldHVybiB0aGlzLiR1PzA6bih0aGlzLiRvZmZzZXQpP2EuY2FsbCh0aGlzKTp0aGlzLiRvZmZzZXQ7aWYoXCJzdHJpbmdcIj09dHlwZW9mIHMmJihzPWZ1bmN0aW9uKHQpe3ZvaWQgMD09PXQmJih0PVwiXCIpO3ZhciBzPXQubWF0Y2goaSk7aWYoIXMpcmV0dXJuIG51bGw7dmFyIGY9KFwiXCIrc1swXSkubWF0Y2goZSl8fFtcIi1cIiwwLDBdLG49ZlswXSx1PTYwKitmWzFdKyArZlsyXTtyZXR1cm4gMD09PXU/MDpcIitcIj09PW4/dTotdX0ocyksbnVsbD09PXMpKXJldHVybiB0aGlzO3ZhciB1PU1hdGguYWJzKHMpPD0xNj82MCpzOnMsbz10aGlzO2lmKGYpcmV0dXJuIG8uJG9mZnNldD11LG8uJHU9MD09PXMsbztpZigwIT09cyl7dmFyIHI9dGhpcy4kdT90aGlzLnRvRGF0ZSgpLmdldFRpbWV6b25lT2Zmc2V0KCk6LTEqdGhpcy51dGNPZmZzZXQoKTsobz10aGlzLmxvY2FsKCkuYWRkKHUrcix0KSkuJG9mZnNldD11LG8uJHguJGxvY2FsT2Zmc2V0PXJ9ZWxzZSBvPXRoaXMudXRjKCk7cmV0dXJuIG99O3ZhciBoPXUuZm9ybWF0O3UuZm9ybWF0PWZ1bmN0aW9uKHQpe3ZhciBpPXR8fCh0aGlzLiR1P1wiWVlZWS1NTS1ERFRISDptbTpzc1taXVwiOlwiXCIpO3JldHVybiBoLmNhbGwodGhpcyxpKX0sdS52YWx1ZU9mPWZ1bmN0aW9uKCl7dmFyIHQ9dGhpcy4kdXRpbHMoKS51KHRoaXMuJG9mZnNldCk/MDp0aGlzLiRvZmZzZXQrKHRoaXMuJHguJGxvY2FsT2Zmc2V0fHx0aGlzLiRkLmdldFRpbWV6b25lT2Zmc2V0KCkpO3JldHVybiB0aGlzLiRkLnZhbHVlT2YoKS02ZTQqdH0sdS5pc1VUQz1mdW5jdGlvbigpe3JldHVybiEhdGhpcy4kdX0sdS50b0lTT1N0cmluZz1mdW5jdGlvbigpe3JldHVybiB0aGlzLnRvRGF0ZSgpLnRvSVNPU3RyaW5nKCl9LHUudG9TdHJpbmc9ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy50b0RhdGUoKS50b1VUQ1N0cmluZygpfTt2YXIgbD11LnRvRGF0ZTt1LnRvRGF0ZT1mdW5jdGlvbih0KXtyZXR1cm5cInNcIj09PXQmJnRoaXMuJG9mZnNldD9uKHRoaXMuZm9ybWF0KFwiWVlZWS1NTS1ERCBISDptbTpzczpTU1NcIikpLnRvRGF0ZSgpOmwuY2FsbCh0aGlzKX07dmFyIGM9dS5kaWZmO3UuZGlmZj1mdW5jdGlvbih0LGksZSl7aWYodCYmdGhpcy4kdT09PXQuJHUpcmV0dXJuIGMuY2FsbCh0aGlzLHQsaSxlKTt2YXIgcz10aGlzLmxvY2FsKCksZj1uKHQpLmxvY2FsKCk7cmV0dXJuIGMuY2FsbChzLGYsaSxlKX19fSkpOyIsICIhZnVuY3Rpb24odCxlKXtcIm9iamVjdFwiPT10eXBlb2YgZXhwb3J0cyYmXCJ1bmRlZmluZWRcIiE9dHlwZW9mIG1vZHVsZT9tb2R1bGUuZXhwb3J0cz1lKCk6XCJmdW5jdGlvblwiPT10eXBlb2YgZGVmaW5lJiZkZWZpbmUuYW1kP2RlZmluZShlKToodD1cInVuZGVmaW5lZFwiIT10eXBlb2YgZ2xvYmFsVGhpcz9nbG9iYWxUaGlzOnR8fHNlbGYpLmRheWpzX3BsdWdpbl90aW1lem9uZT1lKCl9KHRoaXMsKGZ1bmN0aW9uKCl7XCJ1c2Ugc3RyaWN0XCI7dmFyIHQ9e3llYXI6MCxtb250aDoxLGRheToyLGhvdXI6MyxtaW51dGU6NCxzZWNvbmQ6NX0sZT17fTtyZXR1cm4gZnVuY3Rpb24obixpLG8pe3ZhciByLGE9ZnVuY3Rpb24odCxuLGkpe3ZvaWQgMD09PWkmJihpPXt9KTt2YXIgbz1uZXcgRGF0ZSh0KSxyPWZ1bmN0aW9uKHQsbil7dm9pZCAwPT09biYmKG49e30pO3ZhciBpPW4udGltZVpvbmVOYW1lfHxcInNob3J0XCIsbz10K1wifFwiK2kscj1lW29dO3JldHVybiByfHwocj1uZXcgSW50bC5EYXRlVGltZUZvcm1hdChcImVuLVVTXCIse2hvdXIxMjohMSx0aW1lWm9uZTp0LHllYXI6XCJudW1lcmljXCIsbW9udGg6XCIyLWRpZ2l0XCIsZGF5OlwiMi1kaWdpdFwiLGhvdXI6XCIyLWRpZ2l0XCIsbWludXRlOlwiMi1kaWdpdFwiLHNlY29uZDpcIjItZGlnaXRcIix0aW1lWm9uZU5hbWU6aX0pLGVbb109cikscn0obixpKTtyZXR1cm4gci5mb3JtYXRUb1BhcnRzKG8pfSx1PWZ1bmN0aW9uKGUsbil7Zm9yKHZhciBpPWEoZSxuKSxyPVtdLHU9MDt1PGkubGVuZ3RoO3UrPTEpe3ZhciBmPWlbdV0scz1mLnR5cGUsbT1mLnZhbHVlLGM9dFtzXTtjPj0wJiYocltjXT1wYXJzZUludChtLDEwKSl9dmFyIGQ9clszXSxsPTI0PT09ZD8wOmQsaD1yWzBdK1wiLVwiK3JbMV0rXCItXCIrclsyXStcIiBcIitsK1wiOlwiK3JbNF0rXCI6XCIrcls1XStcIjowMDBcIix2PStlO3JldHVybihvLnV0YyhoKS52YWx1ZU9mKCktKHYtPXYlMWUzKSkvNmU0fSxmPWkucHJvdG90eXBlO2YudHo9ZnVuY3Rpb24odCxlKXt2b2lkIDA9PT10JiYodD1yKTt2YXIgbixpPXRoaXMudXRjT2Zmc2V0KCksYT10aGlzLnRvRGF0ZSgpLHU9YS50b0xvY2FsZVN0cmluZyhcImVuLVVTXCIse3RpbWVab25lOnR9KSxmPU1hdGgucm91bmQoKGEtbmV3IERhdGUodSkpLzFlMy82MCkscz0xNSotTWF0aC5yb3VuZChhLmdldFRpbWV6b25lT2Zmc2V0KCkvMTUpLWY7aWYoIU51bWJlcihzKSluPXRoaXMudXRjT2Zmc2V0KDAsZSk7ZWxzZSBpZihuPW8odSx7bG9jYWxlOnRoaXMuJEx9KS4kc2V0KFwibWlsbGlzZWNvbmRcIix0aGlzLiRtcykudXRjT2Zmc2V0KHMsITApLGUpe3ZhciBtPW4udXRjT2Zmc2V0KCk7bj1uLmFkZChpLW0sXCJtaW51dGVcIil9cmV0dXJuIG4uJHguJHRpbWV6b25lPXQsbn0sZi5vZmZzZXROYW1lPWZ1bmN0aW9uKHQpe3ZhciBlPXRoaXMuJHguJHRpbWV6b25lfHxvLnR6Lmd1ZXNzKCksbj1hKHRoaXMudmFsdWVPZigpLGUse3RpbWVab25lTmFtZTp0fSkuZmluZCgoZnVuY3Rpb24odCl7cmV0dXJuXCJ0aW1lem9uZW5hbWVcIj09PXQudHlwZS50b0xvd2VyQ2FzZSgpfSkpO3JldHVybiBuJiZuLnZhbHVlfTt2YXIgcz1mLnN0YXJ0T2Y7Zi5zdGFydE9mPWZ1bmN0aW9uKHQsZSl7aWYoIXRoaXMuJHh8fCF0aGlzLiR4LiR0aW1lem9uZSlyZXR1cm4gcy5jYWxsKHRoaXMsdCxlKTt2YXIgbj1vKHRoaXMuZm9ybWF0KFwiWVlZWS1NTS1ERCBISDptbTpzczpTU1NcIikse2xvY2FsZTp0aGlzLiRMfSk7cmV0dXJuIHMuY2FsbChuLHQsZSkudHoodGhpcy4keC4kdGltZXpvbmUsITApfSxvLnR6PWZ1bmN0aW9uKHQsZSxuKXt2YXIgaT1uJiZlLGE9bnx8ZXx8cixmPXUoK28oKSxhKTtpZihcInN0cmluZ1wiIT10eXBlb2YgdClyZXR1cm4gbyh0KS50eihhKTt2YXIgcz1mdW5jdGlvbih0LGUsbil7dmFyIGk9dC02MCplKjFlMyxvPXUoaSxuKTtpZihlPT09bylyZXR1cm5baSxlXTt2YXIgcj11KGktPTYwKihvLWUpKjFlMyxuKTtyZXR1cm4gbz09PXI/W2ksb106W3QtNjAqTWF0aC5taW4obyxyKSoxZTMsTWF0aC5tYXgobyxyKV19KG8udXRjKHQsaSkudmFsdWVPZigpLGYsYSksbT1zWzBdLGM9c1sxXSxkPW8obSkudXRjT2Zmc2V0KGMpO3JldHVybiBkLiR4LiR0aW1lem9uZT1hLGR9LG8udHouZ3Vlc3M9ZnVuY3Rpb24oKXtyZXR1cm4gSW50bC5EYXRlVGltZUZvcm1hdCgpLnJlc29sdmVkT3B0aW9ucygpLnRpbWVab25lfSxvLnR6LnNldERlZmF1bHQ9ZnVuY3Rpb24odCl7cj10fX19KSk7IiwgIiFmdW5jdGlvbihyLGUpe1wib2JqZWN0XCI9PXR5cGVvZiBleHBvcnRzJiZcInVuZGVmaW5lZFwiIT10eXBlb2YgbW9kdWxlP21vZHVsZS5leHBvcnRzPWUoKTpcImZ1bmN0aW9uXCI9PXR5cGVvZiBkZWZpbmUmJmRlZmluZS5hbWQ/ZGVmaW5lKGUpOihyPVwidW5kZWZpbmVkXCIhPXR5cGVvZiBnbG9iYWxUaGlzP2dsb2JhbFRoaXM6cnx8c2VsZikuZGF5anNfcGx1Z2luX3JlbGF0aXZlVGltZT1lKCl9KHRoaXMsKGZ1bmN0aW9uKCl7XCJ1c2Ugc3RyaWN0XCI7cmV0dXJuIGZ1bmN0aW9uKHIsZSx0KXtyPXJ8fHt9O3ZhciBuPWUucHJvdG90eXBlLG89e2Z1dHVyZTpcImluICVzXCIscGFzdDpcIiVzIGFnb1wiLHM6XCJhIGZldyBzZWNvbmRzXCIsbTpcImEgbWludXRlXCIsbW06XCIlZCBtaW51dGVzXCIsaDpcImFuIGhvdXJcIixoaDpcIiVkIGhvdXJzXCIsZDpcImEgZGF5XCIsZGQ6XCIlZCBkYXlzXCIsTTpcImEgbW9udGhcIixNTTpcIiVkIG1vbnRoc1wiLHk6XCJhIHllYXJcIix5eTpcIiVkIHllYXJzXCJ9O2Z1bmN0aW9uIGkocixlLHQsbyl7cmV0dXJuIG4uZnJvbVRvQmFzZShyLGUsdCxvKX10LmVuLnJlbGF0aXZlVGltZT1vLG4uZnJvbVRvQmFzZT1mdW5jdGlvbihlLG4saSxkLHUpe2Zvcih2YXIgZixhLHMsbD1pLiRsb2NhbGUoKS5yZWxhdGl2ZVRpbWV8fG8saD1yLnRocmVzaG9sZHN8fFt7bDpcInNcIixyOjQ0LGQ6XCJzZWNvbmRcIn0se2w6XCJtXCIscjo4OX0se2w6XCJtbVwiLHI6NDQsZDpcIm1pbnV0ZVwifSx7bDpcImhcIixyOjg5fSx7bDpcImhoXCIscjoyMSxkOlwiaG91clwifSx7bDpcImRcIixyOjM1fSx7bDpcImRkXCIscjoyNSxkOlwiZGF5XCJ9LHtsOlwiTVwiLHI6NDV9LHtsOlwiTU1cIixyOjEwLGQ6XCJtb250aFwifSx7bDpcInlcIixyOjE3fSx7bDpcInl5XCIsZDpcInllYXJcIn1dLG09aC5sZW5ndGgsYz0wO2M8bTtjKz0xKXt2YXIgeT1oW2NdO3kuZCYmKGY9ZD90KGUpLmRpZmYoaSx5LmQsITApOmkuZGlmZihlLHkuZCwhMCkpO3ZhciBwPShyLnJvdW5kaW5nfHxNYXRoLnJvdW5kKShNYXRoLmFicyhmKSk7aWYocz1mPjAscDw9eS5yfHwheS5yKXtwPD0xJiZjPjAmJih5PWhbYy0xXSk7dmFyIHY9bFt5LmxdO3UmJihwPXUoXCJcIitwKSksYT1cInN0cmluZ1wiPT10eXBlb2Ygdj92LnJlcGxhY2UoXCIlZFwiLHApOnYocCxuLHkubCxzKTticmVha319aWYobilyZXR1cm4gYTt2YXIgTT1zP2wuZnV0dXJlOmwucGFzdDtyZXR1cm5cImZ1bmN0aW9uXCI9PXR5cGVvZiBNP00oYSk6TS5yZXBsYWNlKFwiJXNcIixhKX0sbi50bz1mdW5jdGlvbihyLGUpe3JldHVybiBpKHIsZSx0aGlzLCEwKX0sbi5mcm9tPWZ1bmN0aW9uKHIsZSl7cmV0dXJuIGkocixlLHRoaXMpfTt2YXIgZD1mdW5jdGlvbihyKXtyZXR1cm4gci4kdT90LnV0YygpOnQoKX07bi50b05vdz1mdW5jdGlvbihyKXtyZXR1cm4gdGhpcy50byhkKHRoaXMpLHIpfSxuLmZyb21Ob3c9ZnVuY3Rpb24ocil7cmV0dXJuIHRoaXMuZnJvbShkKHRoaXMpLHIpfX19KSk7IiwgImltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBBY3Rpb24sIEFjdGlvblBhbmVsLCBDb2xvciwgTGlzdCB9IGZyb20gXCJAcmF5Y2FzdC9hcGlcIjtcbmltcG9ydCB7IHBhcnNlRGF0ZSB9IGZyb20gXCJjaHJvbm8tbm9kZVwiO1xuaW1wb3J0IGRheWpzIGZyb20gXCJkYXlqc1wiO1xuaW1wb3J0IGFkdmFuY2VkRm9ybWF0UGx1Z2luIGZyb20gXCJkYXlqcy9wbHVnaW4vYWR2YW5jZWRGb3JtYXRcIjtcbmltcG9ydCB3ZWVrT2ZZZWFyUGx1Z2luIGZyb20gXCJkYXlqcy9wbHVnaW4vd2Vla09mWWVhclwiO1xuaW1wb3J0IHV0Y1BsdWdpbiBmcm9tIFwiZGF5anMvcGx1Z2luL3V0Y1wiO1xuaW1wb3J0IHRpbWV6b25lUGx1Z2luIGZyb20gXCJkYXlqcy9wbHVnaW4vdGltZXpvbmVcIjtcbmltcG9ydCByZWxhdGl2ZVRpbWVQbHVnaW4gZnJvbSBcImRheWpzL3BsdWdpbi9yZWxhdGl2ZVRpbWVcIjtcblxuZGF5anMuZXh0ZW5kKGFkdmFuY2VkRm9ybWF0UGx1Z2luKTtcbmRheWpzLmV4dGVuZCh3ZWVrT2ZZZWFyUGx1Z2luKTtcbmRheWpzLmV4dGVuZCh1dGNQbHVnaW4pO1xuZGF5anMuZXh0ZW5kKHRpbWV6b25lUGx1Z2luKTtcbmRheWpzLmV4dGVuZChyZWxhdGl2ZVRpbWVQbHVnaW4pO1xuXG5mdW5jdGlvbiBoYW5kbGVDb252ZXJzaW9uKGlucHV0OiBzdHJpbmcsIHRpbWV6b25lOiBzdHJpbmcpIHtcbiAgaWYgKGlucHV0Lm1hdGNoKC9eXFxkKyQvKSkgaW5wdXQgPSBuZXcgRGF0ZShwYXJzZUludChpbnB1dCwgMTApICogMTAwMCkudG9TdHJpbmcoKTtcbiAgY29uc3QgcGFyc2VkRGF0ZSA9IHBhcnNlRGF0ZShpbnB1dCk7XG4gIGlmICghcGFyc2VkRGF0ZSB8fCBwYXJzZWREYXRlLnRvU3RyaW5nKCkgPT09IFwiSW52YWxpZCBEYXRlXCIpIHJldHVybiBbXTtcblxuICBjb25zdCBkYXRlID0gZGF5anMocGFyc2VkRGF0ZSkudHoodGltZXpvbmUpO1xuICBjb25zdCBmcm9tTm93ID0gZGF0ZS5mcm9tTm93KCk7XG4gIHJldHVybiBbXG4gICAgeyBsYWJlbDogXCJVbml4IChzKVwiLCB2YWx1ZTogZGF0ZS51bml4KCkgfSxcbiAgICB7IGxhYmVsOiBcIlVuaXggKG1zKVwiLCB2YWx1ZTogZGF0ZS52YWx1ZU9mKCkgfSxcbiAgICB7IGxhYmVsOiBcIkh1bWFuIFJlYWRhYmxlXCIsIHZhbHVlOiBkYXRlLmZvcm1hdChcIk1NTU0gRG8sIFlZWVkgW2F0XSBoaDptbTpzcyBBICh6enopXCIpIH0sXG4gICAgeyBsYWJlbDogXCJEYXRlVGltZVwiLCB2YWx1ZTogZGF0ZS5mb3JtYXQoXCJZWVlZLU1NLUREIEhIOm1tOnNzXCIpIH0sXG4gICAgeyBsYWJlbDogXCJVVENcIiwgdmFsdWU6IGRhdGUudG9TdHJpbmcoKSB9LFxuICAgIHsgbGFiZWw6IFwiSVNPIDg2MDFcIiwgdmFsdWU6IGRhdGUudG9JU09TdHJpbmcoKSB9LFxuICAgIHsgbGFiZWw6IFwiV2VlayBvZiBZZWFyXCIsIHZhbHVlOiBkYXRlLmZvcm1hdChcIndvIGRkZGQgW29mXSBZWVlZXCIpIH0sXG4gICAgeyBsYWJlbDogXCJJbiAvIEFnb1wiLCB2YWx1ZTogU3RyaW5nKGZyb21Ob3cpLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgU3RyaW5nKGZyb21Ob3cpLnNsaWNlKDEpIH0sXG4gIF07XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIERhdGVUaW1lKCkge1xuICBjb25zdCBbaW5wdXQsIHNldElucHV0XSA9IHVzZVN0YXRlKFwibm93XCIpO1xuICBjb25zdCBbdGltZXpvbmUsIHNldFRpbWV6b25lXSA9IHVzZVN0YXRlKEludGwuRGF0ZVRpbWVGb3JtYXQoKS5yZXNvbHZlZE9wdGlvbnMoKS50aW1lWm9uZSk7XG4gIGNvbnN0IFtpdGVtcywgc2V0SXRlbXNdID0gdXNlU3RhdGU8eyBsYWJlbDogc3RyaW5nOyB2YWx1ZTogc3RyaW5nIHwgbnVtYmVyIH1bXT4oW10pO1xuXG4gIGNvbnN0IG9uVGltZXpvbmVDaGFuZ2UgPSBhc3luYyAodmFsdWU6IHN0cmluZykgPT4ge1xuICAgIHNldFRpbWV6b25lKHZhbHVlKTtcbiAgICBzZXRJdGVtcyhoYW5kbGVDb252ZXJzaW9uKGlucHV0LCB2YWx1ZSkpO1xuICB9O1xuXG4gIGNvbnN0IG9uU2VhcmNoVGV4dENoYW5nZSA9IGFzeW5jICh2YWx1ZTogc3RyaW5nKSA9PiB7XG4gICAgc2V0SW5wdXQodmFsdWUpO1xuICAgIHNldEl0ZW1zKGhhbmRsZUNvbnZlcnNpb24odmFsdWUsIHRpbWV6b25lKSk7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8TGlzdFxuICAgICAgc2VhcmNoQmFyUGxhY2Vob2xkZXI9XCJEYXRlXCJcbiAgICAgIGZpbHRlcmluZz17ZmFsc2V9XG4gICAgICBzZWFyY2hUZXh0PXtpbnB1dH1cbiAgICAgIG9uU2VhcmNoVGV4dENoYW5nZT17b25TZWFyY2hUZXh0Q2hhbmdlfVxuICAgICAgc2VhcmNoQmFyQWNjZXNzb3J5PXtcbiAgICAgICAgPExpc3QuRHJvcGRvd24gdG9vbHRpcD1cIlRpbWV6b25lXCIgb25DaGFuZ2U9e29uVGltZXpvbmVDaGFuZ2V9IGRlZmF1bHRWYWx1ZT17dGltZXpvbmV9PlxuICAgICAgICAgIHtJbnRsLnN1cHBvcnRlZFZhbHVlc09mKFwidGltZVpvbmVcIikubWFwKCh6b25lLCBpbmRleCkgPT4gKFxuICAgICAgICAgICAgPExpc3QuRHJvcGRvd24uSXRlbSBrZXk9e2luZGV4fSB2YWx1ZT17em9uZX0gdGl0bGU9e3pvbmV9IC8+XG4gICAgICAgICAgKSl9XG4gICAgICAgIDwvTGlzdC5Ecm9wZG93bj5cbiAgICAgIH1cbiAgICA+XG4gICAgICB7aXRlbXMubWFwKChpdGVtLCBpbmRleCkgPT4gKFxuICAgICAgICA8TGlzdC5JdGVtXG4gICAgICAgICAga2V5PXtpbmRleH1cbiAgICAgICAgICB0aXRsZT17U3RyaW5nKGl0ZW0udmFsdWUpfVxuICAgICAgICAgIGFjY2Vzc29yaWVzPXtbeyB0YWc6IHsgdmFsdWU6IGl0ZW0ubGFiZWwsIGNvbG9yOiBDb2xvci5TZWNvbmRhcnlUZXh0IH0gfV19XG4gICAgICAgICAgYWN0aW9ucz17XG4gICAgICAgICAgICA8QWN0aW9uUGFuZWw+XG4gICAgICAgICAgICAgIDxBY3Rpb24uQ29weVRvQ2xpcGJvYXJkIGNvbnRlbnQ9e2l0ZW0udmFsdWV9IC8+XG4gICAgICAgICAgICAgIDxBY3Rpb24uUGFzdGUgY29udGVudD17aXRlbS52YWx1ZX0gLz5cbiAgICAgICAgICAgIDwvQWN0aW9uUGFuZWw+XG4gICAgICAgICAgfVxuICAgICAgICAvPlxuICAgICAgKSl9XG4gICAgPC9MaXN0PlxuICApO1xufVxuIiwgImltcG9ydCB7IENvbXBvbmVudCwgUGFyc2VkQ29tcG9uZW50cywgUGFyc2VkUmVzdWx0LCBQYXJzaW5nUmVmZXJlbmNlIH0gZnJvbSBcIi4vdHlwZXNcIjtcblxuaW1wb3J0IHF1YXJ0ZXJPZlllYXIgZnJvbSBcImRheWpzL3BsdWdpbi9xdWFydGVyT2ZZZWFyXCI7XG5pbXBvcnQgZGF5anMsIHsgUVVuaXRUeXBlIH0gZnJvbSBcImRheWpzXCI7XG5pbXBvcnQgeyBhc3NpZ25TaW1pbGFyRGF0ZSwgYXNzaWduU2ltaWxhclRpbWUsIGltcGx5U2ltaWxhclRpbWUgfSBmcm9tIFwiLi91dGlscy9kYXlqc1wiO1xuaW1wb3J0IHsgdG9UaW1lem9uZU9mZnNldCB9IGZyb20gXCIuL3RpbWV6b25lXCI7XG5kYXlqcy5leHRlbmQocXVhcnRlck9mWWVhcik7XG5cbmV4cG9ydCBjbGFzcyBSZWZlcmVuY2VXaXRoVGltZXpvbmUge1xuICAgIHJlYWRvbmx5IGluc3RhbnQ6IERhdGU7XG4gICAgcmVhZG9ubHkgdGltZXpvbmVPZmZzZXQ/OiBudW1iZXIgfCBudWxsO1xuXG4gICAgY29uc3RydWN0b3IoaW5wdXQ/OiBQYXJzaW5nUmVmZXJlbmNlIHwgRGF0ZSkge1xuICAgICAgICBpbnB1dCA9IGlucHV0ID8/IG5ldyBEYXRlKCk7XG4gICAgICAgIGlmIChpbnB1dCBpbnN0YW5jZW9mIERhdGUpIHtcbiAgICAgICAgICAgIHRoaXMuaW5zdGFudCA9IGlucHV0O1xuICAgICAgICAgICAgdGhpcy50aW1lem9uZU9mZnNldCA9IG51bGw7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmluc3RhbnQgPSBpbnB1dC5pbnN0YW50ID8/IG5ldyBEYXRlKCk7XG4gICAgICAgICAgICB0aGlzLnRpbWV6b25lT2Zmc2V0ID0gdG9UaW1lem9uZU9mZnNldChpbnB1dC50aW1lem9uZSwgdGhpcy5pbnN0YW50KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgYSBKUyBkYXRlIChzeXN0ZW0gdGltZXpvbmUpIHdpdGggdGhlIHsgeWVhciwgbW9udGgsIGRheSwgaG91ciwgbWludXRlLCBzZWNvbmQgfSBlcXVhbCB0byB0aGUgcmVmZXJlbmNlLlxuICAgICAqIFRoZSBvdXRwdXQncyBpbnN0YW50IGlzIE5PVCB0aGUgcmVmZXJlbmNlJ3MgaW5zdGFudCB3aGVuIHRoZSByZWZlcmVuY2UncyBhbmQgc3lzdGVtJ3MgdGltZXpvbmUgYXJlIGRpZmZlcmVudC5cbiAgICAgKi9cbiAgICBnZXREYXRlV2l0aEFkanVzdGVkVGltZXpvbmUoKSB7XG4gICAgICAgIGNvbnN0IGRhdGUgPSBuZXcgRGF0ZSh0aGlzLmluc3RhbnQpO1xuICAgICAgICBpZiAodGhpcy50aW1lem9uZU9mZnNldCAhPT0gbnVsbCkge1xuICAgICAgICAgICAgZGF0ZS5zZXRNaW51dGVzKGRhdGUuZ2V0TWludXRlcygpIC0gdGhpcy5nZXRTeXN0ZW1UaW1lem9uZUFkanVzdG1lbnRNaW51dGUodGhpcy5pbnN0YW50KSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGRhdGU7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0aGUgbnVtYmVyIG1pbnV0ZXMgZGlmZmVyZW5jZSBiZXR3ZWVuIHRoZSBKUyBkYXRlJ3MgdGltZXpvbmUgYW5kIHRoZSByZWZlcmVuY2UgdGltZXpvbmUuXG4gICAgICogQHBhcmFtIGRhdGVcbiAgICAgKiBAcGFyYW0gb3ZlcnJpZGVUaW1lem9uZU9mZnNldFxuICAgICAqL1xuICAgIGdldFN5c3RlbVRpbWV6b25lQWRqdXN0bWVudE1pbnV0ZShkYXRlPzogRGF0ZSwgb3ZlcnJpZGVUaW1lem9uZU9mZnNldD86IG51bWJlcik6IG51bWJlciB7XG4gICAgICAgIGlmICghZGF0ZSB8fCBkYXRlLmdldFRpbWUoKSA8IDApIHtcbiAgICAgICAgICAgIC8vIEphdmFzY3JpcHQgZGF0ZSB0aW1lem9uZSBjYWxjdWxhdGlvbiBnb3QgZWZmZWN0IHdoZW4gdGhlIHRpbWUgZXBvY2ggPCAwXG4gICAgICAgICAgICAvLyBlLmcuIG5ldyBEYXRlKCdUdWUgRmViIDAyIDEzMDAgMDA6MDA6MDAgR01UKzA5MDAgKEpTVCknKSA9PiBUdWUgRmViIDAyIDEzMDAgMDA6MTg6NTkgR01UKzA5MTggKEpTVClcbiAgICAgICAgICAgIGRhdGUgPSBuZXcgRGF0ZSgpO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgY3VycmVudFRpbWV6b25lT2Zmc2V0ID0gLWRhdGUuZ2V0VGltZXpvbmVPZmZzZXQoKTtcbiAgICAgICAgY29uc3QgdGFyZ2V0VGltZXpvbmVPZmZzZXQgPSBvdmVycmlkZVRpbWV6b25lT2Zmc2V0ID8/IHRoaXMudGltZXpvbmVPZmZzZXQgPz8gY3VycmVudFRpbWV6b25lT2Zmc2V0O1xuICAgICAgICByZXR1cm4gY3VycmVudFRpbWV6b25lT2Zmc2V0IC0gdGFyZ2V0VGltZXpvbmVPZmZzZXQ7XG4gICAgfVxuXG4gICAgZ2V0VGltZXpvbmVPZmZzZXQoKTogbnVtYmVyIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudGltZXpvbmVPZmZzZXQgPz8gLXRoaXMuaW5zdGFudC5nZXRUaW1lem9uZU9mZnNldCgpO1xuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIFBhcnNpbmdDb21wb25lbnRzIGltcGxlbWVudHMgUGFyc2VkQ29tcG9uZW50cyB7XG4gICAgcHJpdmF0ZSBrbm93blZhbHVlczogeyBbYyBpbiBDb21wb25lbnRdPzogbnVtYmVyIH07XG4gICAgcHJpdmF0ZSBpbXBsaWVkVmFsdWVzOiB7IFtjIGluIENvbXBvbmVudF0/OiBudW1iZXIgfTtcbiAgICBwcml2YXRlIHJlZmVyZW5jZTogUmVmZXJlbmNlV2l0aFRpbWV6b25lO1xuICAgIHByaXZhdGUgX3RhZ3MgPSBuZXcgU2V0PHN0cmluZz4oKTtcblxuICAgIGNvbnN0cnVjdG9yKHJlZmVyZW5jZTogUmVmZXJlbmNlV2l0aFRpbWV6b25lLCBrbm93bkNvbXBvbmVudHM/OiB7IFtjIGluIENvbXBvbmVudF0/OiBudW1iZXIgfSkge1xuICAgICAgICB0aGlzLnJlZmVyZW5jZSA9IHJlZmVyZW5jZTtcbiAgICAgICAgdGhpcy5rbm93blZhbHVlcyA9IHt9O1xuICAgICAgICB0aGlzLmltcGxpZWRWYWx1ZXMgPSB7fTtcbiAgICAgICAgaWYgKGtub3duQ29tcG9uZW50cykge1xuICAgICAgICAgICAgZm9yIChjb25zdCBrZXkgaW4ga25vd25Db21wb25lbnRzKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5rbm93blZhbHVlc1trZXkgYXMgQ29tcG9uZW50XSA9IGtub3duQ29tcG9uZW50c1trZXkgYXMgQ29tcG9uZW50XTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHJlZkRheUpzID0gcmVmZXJlbmNlLmdldERhdGVXaXRoQWRqdXN0ZWRUaW1lem9uZSgpO1xuICAgICAgICB0aGlzLmltcGx5KFwiZGF5XCIsIHJlZkRheUpzLmdldERhdGUoKSk7XG4gICAgICAgIHRoaXMuaW1wbHkoXCJtb250aFwiLCByZWZEYXlKcy5nZXRNb250aCgpICsgMSk7XG4gICAgICAgIHRoaXMuaW1wbHkoXCJ5ZWFyXCIsIHJlZkRheUpzLmdldEZ1bGxZZWFyKCkpO1xuICAgICAgICB0aGlzLmltcGx5KFwiaG91clwiLCAxMik7XG4gICAgICAgIHRoaXMuaW1wbHkoXCJtaW51dGVcIiwgMCk7XG4gICAgICAgIHRoaXMuaW1wbHkoXCJzZWNvbmRcIiwgMCk7XG4gICAgICAgIHRoaXMuaW1wbHkoXCJtaWxsaXNlY29uZFwiLCAwKTtcbiAgICB9XG5cbiAgICBnZXQoY29tcG9uZW50OiBDb21wb25lbnQpOiBudW1iZXIgfCBudWxsIHtcbiAgICAgICAgaWYgKGNvbXBvbmVudCBpbiB0aGlzLmtub3duVmFsdWVzKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5rbm93blZhbHVlc1tjb21wb25lbnRdO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGNvbXBvbmVudCBpbiB0aGlzLmltcGxpZWRWYWx1ZXMpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmltcGxpZWRWYWx1ZXNbY29tcG9uZW50XTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIGlzQ2VydGFpbihjb21wb25lbnQ6IENvbXBvbmVudCk6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gY29tcG9uZW50IGluIHRoaXMua25vd25WYWx1ZXM7XG4gICAgfVxuXG4gICAgZ2V0Q2VydGFpbkNvbXBvbmVudHMoKTogQXJyYXk8Q29tcG9uZW50PiB7XG4gICAgICAgIHJldHVybiBPYmplY3Qua2V5cyh0aGlzLmtub3duVmFsdWVzKSBhcyBBcnJheTxDb21wb25lbnQ+O1xuICAgIH1cblxuICAgIGltcGx5KGNvbXBvbmVudDogQ29tcG9uZW50LCB2YWx1ZTogbnVtYmVyKTogUGFyc2luZ0NvbXBvbmVudHMge1xuICAgICAgICBpZiAoY29tcG9uZW50IGluIHRoaXMua25vd25WYWx1ZXMpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuaW1wbGllZFZhbHVlc1tjb21wb25lbnRdID0gdmFsdWU7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIGFzc2lnbihjb21wb25lbnQ6IENvbXBvbmVudCwgdmFsdWU6IG51bWJlcik6IFBhcnNpbmdDb21wb25lbnRzIHtcbiAgICAgICAgdGhpcy5rbm93blZhbHVlc1tjb21wb25lbnRdID0gdmFsdWU7XG4gICAgICAgIGRlbGV0ZSB0aGlzLmltcGxpZWRWYWx1ZXNbY29tcG9uZW50XTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgZGVsZXRlKGNvbXBvbmVudDogQ29tcG9uZW50KSB7XG4gICAgICAgIGRlbGV0ZSB0aGlzLmtub3duVmFsdWVzW2NvbXBvbmVudF07XG4gICAgICAgIGRlbGV0ZSB0aGlzLmltcGxpZWRWYWx1ZXNbY29tcG9uZW50XTtcbiAgICB9XG5cbiAgICBjbG9uZSgpOiBQYXJzaW5nQ29tcG9uZW50cyB7XG4gICAgICAgIGNvbnN0IGNvbXBvbmVudCA9IG5ldyBQYXJzaW5nQ29tcG9uZW50cyh0aGlzLnJlZmVyZW5jZSk7XG4gICAgICAgIGNvbXBvbmVudC5rbm93blZhbHVlcyA9IHt9O1xuICAgICAgICBjb21wb25lbnQuaW1wbGllZFZhbHVlcyA9IHt9O1xuXG4gICAgICAgIGZvciAoY29uc3Qga2V5IGluIHRoaXMua25vd25WYWx1ZXMpIHtcbiAgICAgICAgICAgIGNvbXBvbmVudC5rbm93blZhbHVlc1trZXkgYXMgQ29tcG9uZW50XSA9IHRoaXMua25vd25WYWx1ZXNba2V5IGFzIENvbXBvbmVudF07XG4gICAgICAgIH1cblxuICAgICAgICBmb3IgKGNvbnN0IGtleSBpbiB0aGlzLmltcGxpZWRWYWx1ZXMpIHtcbiAgICAgICAgICAgIGNvbXBvbmVudC5pbXBsaWVkVmFsdWVzW2tleSBhcyBDb21wb25lbnRdID0gdGhpcy5pbXBsaWVkVmFsdWVzW2tleSBhcyBDb21wb25lbnRdO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGNvbXBvbmVudDtcbiAgICB9XG5cbiAgICBpc09ubHlEYXRlKCk6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gIXRoaXMuaXNDZXJ0YWluKFwiaG91clwiKSAmJiAhdGhpcy5pc0NlcnRhaW4oXCJtaW51dGVcIikgJiYgIXRoaXMuaXNDZXJ0YWluKFwic2Vjb25kXCIpO1xuICAgIH1cblxuICAgIGlzT25seVRpbWUoKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAhdGhpcy5pc0NlcnRhaW4oXCJ3ZWVrZGF5XCIpICYmICF0aGlzLmlzQ2VydGFpbihcImRheVwiKSAmJiAhdGhpcy5pc0NlcnRhaW4oXCJtb250aFwiKSAmJiAhdGhpcy5pc0NlcnRhaW4oXCJ5ZWFyXCIpXG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgaXNPbmx5V2Vla2RheUNvbXBvbmVudCgpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaXNDZXJ0YWluKFwid2Vla2RheVwiKSAmJiAhdGhpcy5pc0NlcnRhaW4oXCJkYXlcIikgJiYgIXRoaXMuaXNDZXJ0YWluKFwibW9udGhcIik7XG4gICAgfVxuXG4gICAgaXNEYXRlV2l0aFVua25vd25ZZWFyKCk6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gdGhpcy5pc0NlcnRhaW4oXCJtb250aFwiKSAmJiAhdGhpcy5pc0NlcnRhaW4oXCJ5ZWFyXCIpO1xuICAgIH1cblxuICAgIGlzVmFsaWREYXRlKCk6IGJvb2xlYW4ge1xuICAgICAgICBjb25zdCBkYXRlID0gdGhpcy5kYXRlV2l0aG91dFRpbWV6b25lQWRqdXN0bWVudCgpO1xuXG4gICAgICAgIGlmIChkYXRlLmdldEZ1bGxZZWFyKCkgIT09IHRoaXMuZ2V0KFwieWVhclwiKSkgcmV0dXJuIGZhbHNlO1xuICAgICAgICBpZiAoZGF0ZS5nZXRNb250aCgpICE9PSB0aGlzLmdldChcIm1vbnRoXCIpIC0gMSkgcmV0dXJuIGZhbHNlO1xuICAgICAgICBpZiAoZGF0ZS5nZXREYXRlKCkgIT09IHRoaXMuZ2V0KFwiZGF5XCIpKSByZXR1cm4gZmFsc2U7XG4gICAgICAgIGlmICh0aGlzLmdldChcImhvdXJcIikgIT0gbnVsbCAmJiBkYXRlLmdldEhvdXJzKCkgIT0gdGhpcy5nZXQoXCJob3VyXCIpKSByZXR1cm4gZmFsc2U7XG4gICAgICAgIGlmICh0aGlzLmdldChcIm1pbnV0ZVwiKSAhPSBudWxsICYmIGRhdGUuZ2V0TWludXRlcygpICE9IHRoaXMuZ2V0KFwibWludXRlXCIpKSByZXR1cm4gZmFsc2U7XG5cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgdG9TdHJpbmcoKSB7XG4gICAgICAgIHJldHVybiBgW1BhcnNpbmdDb21wb25lbnRzIHtcbiAgICAgICAgICAgIHRhZ3M6ICR7SlNPTi5zdHJpbmdpZnkoQXJyYXkuZnJvbSh0aGlzLl90YWdzKS5zb3J0KCkpfSwgXG4gICAgICAgICAgICBrbm93blZhbHVlczogJHtKU09OLnN0cmluZ2lmeSh0aGlzLmtub3duVmFsdWVzKX0sIFxuICAgICAgICAgICAgaW1wbGllZFZhbHVlczogJHtKU09OLnN0cmluZ2lmeSh0aGlzLmltcGxpZWRWYWx1ZXMpfX0sIFxuICAgICAgICAgICAgcmVmZXJlbmNlOiAke0pTT04uc3RyaW5naWZ5KHRoaXMucmVmZXJlbmNlKX1dYDtcbiAgICB9XG5cbiAgICBkYXlqcygpIHtcbiAgICAgICAgcmV0dXJuIGRheWpzKHRoaXMuZGF0ZVdpdGhvdXRUaW1lem9uZUFkanVzdG1lbnQoKSk7XG4gICAgfVxuXG4gICAgZGF0ZSgpOiBEYXRlIHtcbiAgICAgICAgY29uc3QgZGF0ZSA9IHRoaXMuZGF0ZVdpdGhvdXRUaW1lem9uZUFkanVzdG1lbnQoKTtcbiAgICAgICAgY29uc3QgdGltZXpvbmVBZGp1c3RtZW50ID0gdGhpcy5yZWZlcmVuY2UuZ2V0U3lzdGVtVGltZXpvbmVBZGp1c3RtZW50TWludXRlKGRhdGUsIHRoaXMuZ2V0KFwidGltZXpvbmVPZmZzZXRcIikpO1xuICAgICAgICByZXR1cm4gbmV3IERhdGUoZGF0ZS5nZXRUaW1lKCkgKyB0aW1lem9uZUFkanVzdG1lbnQgKiA2MDAwMCk7XG4gICAgfVxuXG4gICAgYWRkVGFnKHRhZzogc3RyaW5nKTogUGFyc2luZ0NvbXBvbmVudHMge1xuICAgICAgICB0aGlzLl90YWdzLmFkZCh0YWcpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBhZGRUYWdzKHRhZ3M6IHN0cmluZ1tdIHwgU2V0PHN0cmluZz4pOiBQYXJzaW5nQ29tcG9uZW50cyB7XG4gICAgICAgIGZvciAoY29uc3QgdGFnIG9mIHRhZ3MpIHtcbiAgICAgICAgICAgIHRoaXMuX3RhZ3MuYWRkKHRhZyk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgdGFncygpOiBTZXQ8c3RyaW5nPiB7XG4gICAgICAgIHJldHVybiBuZXcgU2V0KHRoaXMuX3RhZ3MpO1xuICAgIH1cblxuICAgIHByaXZhdGUgZGF0ZVdpdGhvdXRUaW1lem9uZUFkanVzdG1lbnQoKSB7XG4gICAgICAgIGNvbnN0IGRhdGUgPSBuZXcgRGF0ZShcbiAgICAgICAgICAgIHRoaXMuZ2V0KFwieWVhclwiKSxcbiAgICAgICAgICAgIHRoaXMuZ2V0KFwibW9udGhcIikgLSAxLFxuICAgICAgICAgICAgdGhpcy5nZXQoXCJkYXlcIiksXG4gICAgICAgICAgICB0aGlzLmdldChcImhvdXJcIiksXG4gICAgICAgICAgICB0aGlzLmdldChcIm1pbnV0ZVwiKSxcbiAgICAgICAgICAgIHRoaXMuZ2V0KFwic2Vjb25kXCIpLFxuICAgICAgICAgICAgdGhpcy5nZXQoXCJtaWxsaXNlY29uZFwiKVxuICAgICAgICApO1xuXG4gICAgICAgIGRhdGUuc2V0RnVsbFllYXIodGhpcy5nZXQoXCJ5ZWFyXCIpKTtcbiAgICAgICAgcmV0dXJuIGRhdGU7XG4gICAgfVxuXG4gICAgc3RhdGljIGNyZWF0ZVJlbGF0aXZlRnJvbVJlZmVyZW5jZShcbiAgICAgICAgcmVmZXJlbmNlOiBSZWZlcmVuY2VXaXRoVGltZXpvbmUsXG4gICAgICAgIGZyYWdtZW50czogeyBbYyBpbiBRVW5pdFR5cGVdPzogbnVtYmVyIH1cbiAgICApOiBQYXJzaW5nQ29tcG9uZW50cyB7XG4gICAgICAgIGxldCBkYXRlID0gZGF5anMocmVmZXJlbmNlLmdldERhdGVXaXRoQWRqdXN0ZWRUaW1lem9uZSgpKTtcbiAgICAgICAgZm9yIChjb25zdCBrZXkgaW4gZnJhZ21lbnRzKSB7XG4gICAgICAgICAgICBkYXRlID0gZGF0ZS5hZGQoZnJhZ21lbnRzW2tleSBhcyBRVW5pdFR5cGVdLCBrZXkgYXMgUVVuaXRUeXBlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGNvbXBvbmVudHMgPSBuZXcgUGFyc2luZ0NvbXBvbmVudHMocmVmZXJlbmNlKTtcbiAgICAgICAgY29tcG9uZW50cy5hZGRUYWcoXCJyZXN1bHQvcmVsYXRpdmVEYXRlXCIpO1xuICAgICAgICBpZiAoZnJhZ21lbnRzW1wiaG91clwiXSB8fCBmcmFnbWVudHNbXCJtaW51dGVcIl0gfHwgZnJhZ21lbnRzW1wic2Vjb25kXCJdKSB7XG4gICAgICAgICAgICBjb21wb25lbnRzLmFkZFRhZyhcInJlc3VsdC9yZWxhdGl2ZURhdGVBbmRUaW1lXCIpO1xuICAgICAgICAgICAgYXNzaWduU2ltaWxhclRpbWUoY29tcG9uZW50cywgZGF0ZSk7XG4gICAgICAgICAgICBhc3NpZ25TaW1pbGFyRGF0ZShjb21wb25lbnRzLCBkYXRlKTtcbiAgICAgICAgICAgIGNvbXBvbmVudHMuYXNzaWduKFwidGltZXpvbmVPZmZzZXRcIiwgcmVmZXJlbmNlLmdldFRpbWV6b25lT2Zmc2V0KCkpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaW1wbHlTaW1pbGFyVGltZShjb21wb25lbnRzLCBkYXRlKTtcbiAgICAgICAgICAgIGNvbXBvbmVudHMuaW1wbHkoXCJ0aW1lem9uZU9mZnNldFwiLCByZWZlcmVuY2UuZ2V0VGltZXpvbmVPZmZzZXQoKSk7XG5cbiAgICAgICAgICAgIGlmIChmcmFnbWVudHNbXCJkXCJdKSB7XG4gICAgICAgICAgICAgICAgY29tcG9uZW50cy5hc3NpZ24oXCJkYXlcIiwgZGF0ZS5kYXRlKCkpO1xuICAgICAgICAgICAgICAgIGNvbXBvbmVudHMuYXNzaWduKFwibW9udGhcIiwgZGF0ZS5tb250aCgpICsgMSk7XG4gICAgICAgICAgICAgICAgY29tcG9uZW50cy5hc3NpZ24oXCJ5ZWFyXCIsIGRhdGUueWVhcigpKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoZnJhZ21lbnRzW1wid2Vla1wiXSkge1xuICAgICAgICAgICAgICAgIGNvbXBvbmVudHMuYXNzaWduKFwiZGF5XCIsIGRhdGUuZGF0ZSgpKTtcbiAgICAgICAgICAgICAgICBjb21wb25lbnRzLmFzc2lnbihcIm1vbnRoXCIsIGRhdGUubW9udGgoKSArIDEpO1xuICAgICAgICAgICAgICAgIGNvbXBvbmVudHMuYXNzaWduKFwieWVhclwiLCBkYXRlLnllYXIoKSk7XG4gICAgICAgICAgICAgICAgY29tcG9uZW50cy5pbXBseShcIndlZWtkYXlcIiwgZGF0ZS5kYXkoKSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGNvbXBvbmVudHMuaW1wbHkoXCJkYXlcIiwgZGF0ZS5kYXRlKCkpO1xuICAgICAgICAgICAgICAgIGlmIChmcmFnbWVudHNbXCJtb250aFwiXSkge1xuICAgICAgICAgICAgICAgICAgICBjb21wb25lbnRzLmFzc2lnbihcIm1vbnRoXCIsIGRhdGUubW9udGgoKSArIDEpO1xuICAgICAgICAgICAgICAgICAgICBjb21wb25lbnRzLmFzc2lnbihcInllYXJcIiwgZGF0ZS55ZWFyKCkpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudHMuaW1wbHkoXCJtb250aFwiLCBkYXRlLm1vbnRoKCkgKyAxKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGZyYWdtZW50c1tcInllYXJcIl0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudHMuYXNzaWduKFwieWVhclwiLCBkYXRlLnllYXIoKSk7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb21wb25lbnRzLmltcGx5KFwieWVhclwiLCBkYXRlLnllYXIoKSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gY29tcG9uZW50cztcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBQYXJzaW5nUmVzdWx0IGltcGxlbWVudHMgUGFyc2VkUmVzdWx0IHtcbiAgICByZWZEYXRlOiBEYXRlO1xuICAgIGluZGV4OiBudW1iZXI7XG4gICAgdGV4dDogc3RyaW5nO1xuXG4gICAgcmVmZXJlbmNlOiBSZWZlcmVuY2VXaXRoVGltZXpvbmU7XG5cbiAgICBzdGFydDogUGFyc2luZ0NvbXBvbmVudHM7XG4gICAgZW5kPzogUGFyc2luZ0NvbXBvbmVudHM7XG5cbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgcmVmZXJlbmNlOiBSZWZlcmVuY2VXaXRoVGltZXpvbmUsXG4gICAgICAgIGluZGV4OiBudW1iZXIsXG4gICAgICAgIHRleHQ6IHN0cmluZyxcbiAgICAgICAgc3RhcnQ/OiBQYXJzaW5nQ29tcG9uZW50cyxcbiAgICAgICAgZW5kPzogUGFyc2luZ0NvbXBvbmVudHNcbiAgICApIHtcbiAgICAgICAgdGhpcy5yZWZlcmVuY2UgPSByZWZlcmVuY2U7XG4gICAgICAgIHRoaXMucmVmRGF0ZSA9IHJlZmVyZW5jZS5pbnN0YW50O1xuICAgICAgICB0aGlzLmluZGV4ID0gaW5kZXg7XG4gICAgICAgIHRoaXMudGV4dCA9IHRleHQ7XG4gICAgICAgIHRoaXMuc3RhcnQgPSBzdGFydCB8fCBuZXcgUGFyc2luZ0NvbXBvbmVudHMocmVmZXJlbmNlKTtcbiAgICAgICAgdGhpcy5lbmQgPSBlbmQ7XG4gICAgfVxuXG4gICAgY2xvbmUoKSB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IG5ldyBQYXJzaW5nUmVzdWx0KHRoaXMucmVmZXJlbmNlLCB0aGlzLmluZGV4LCB0aGlzLnRleHQpO1xuICAgICAgICByZXN1bHQuc3RhcnQgPSB0aGlzLnN0YXJ0ID8gdGhpcy5zdGFydC5jbG9uZSgpIDogbnVsbDtcbiAgICAgICAgcmVzdWx0LmVuZCA9IHRoaXMuZW5kID8gdGhpcy5lbmQuY2xvbmUoKSA6IG51bGw7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxuXG4gICAgZGF0ZSgpOiBEYXRlIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc3RhcnQuZGF0ZSgpO1xuICAgIH1cblxuICAgIGFkZFRhZyh0YWc6IHN0cmluZyk6IFBhcnNpbmdSZXN1bHQge1xuICAgICAgICB0aGlzLnN0YXJ0LmFkZFRhZyh0YWcpO1xuICAgICAgICBpZiAodGhpcy5lbmQpIHtcbiAgICAgICAgICAgIHRoaXMuZW5kLmFkZFRhZyh0YWcpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIGFkZFRhZ3ModGFnczogc3RyaW5nW10gfCBTZXQ8c3RyaW5nPik6IFBhcnNpbmdSZXN1bHQge1xuICAgICAgICB0aGlzLnN0YXJ0LmFkZFRhZ3ModGFncyk7XG4gICAgICAgIGlmICh0aGlzLmVuZCkge1xuICAgICAgICAgICAgdGhpcy5lbmQuYWRkVGFncyh0YWdzKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICB0YWdzKCk6IFNldDxzdHJpbmc+IHtcbiAgICAgICAgY29uc3QgY29tYmluZWRUYWdzOiBTZXQ8c3RyaW5nPiA9IG5ldyBTZXQodGhpcy5zdGFydC50YWdzKCkpO1xuICAgICAgICBpZiAodGhpcy5lbmQpIHtcbiAgICAgICAgICAgIGZvciAoY29uc3QgdGFnIG9mIHRoaXMuZW5kLnRhZ3MoKSkge1xuICAgICAgICAgICAgICAgIGNvbWJpbmVkVGFncy5hZGQodGFnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gY29tYmluZWRUYWdzO1xuICAgIH1cblxuICAgIHRvU3RyaW5nKCkge1xuICAgICAgICBjb25zdCB0YWdzID0gQXJyYXkuZnJvbSh0aGlzLnRhZ3MoKSkuc29ydCgpO1xuICAgICAgICByZXR1cm4gYFtQYXJzaW5nUmVzdWx0IHtpbmRleDogJHt0aGlzLmluZGV4fSwgdGV4dDogJyR7dGhpcy50ZXh0fScsIHRhZ3M6ICR7SlNPTi5zdHJpbmdpZnkodGFncyl9IC4uLn1dYDtcbiAgICB9XG59XG4iLCAiaW1wb3J0IHsgRGVidWdDb25zdW1lLCBEZWJ1Z0hhbmRsZXIgfSBmcm9tIFwiLi9kZWJ1Z2dpbmdcIjtcblxuZXhwb3J0IGludGVyZmFjZSBQYXJzaW5nT3B0aW9uIHtcbiAgICAvKipcbiAgICAgKiBUbyBwYXJzZSBvbmx5IGZvcndhcmQgZGF0ZXMgKHRoZSByZXN1bHRzIHNob3VsZCBiZSBhZnRlciB0aGUgcmVmZXJlbmNlIGRhdGUpLlxuICAgICAqIFRoaXMgZWZmZWN0cyBkYXRlL3RpbWUgaW1wbGljYXRpb24gKGUuZy4gd2Vla2RheSBvciB0aW1lIG1lbnRpb25pbmcpXG4gICAgICovXG4gICAgZm9yd2FyZERhdGU/OiBib29sZWFuO1xuXG4gICAgLyoqXG4gICAgICogQWRkaXRpb25hbCB0aW1lem9uZSBrZXl3b3JkcyBmb3IgdGhlIHBhcnNlcnMgdG8gcmVjb2duaXplLlxuICAgICAqIEFueSB2YWx1ZSBwcm92aWRlZCB3aWxsIG92ZXJyaWRlIHRoZSBkZWZhdWx0IGhhbmRsaW5nIG9mIHRoYXQgdmFsdWUuXG4gICAgICovXG4gICAgdGltZXpvbmVzPzogVGltZXpvbmVBYmJyTWFwO1xuXG4gICAgLyoqXG4gICAgICogSW50ZXJuYWwgZGVidWcgZXZlbnQgaGFuZGxlci5cbiAgICAgKiBAaW50ZXJuYWxcbiAgICAgKi9cbiAgICBkZWJ1Zz86IERlYnVnSGFuZGxlciB8IERlYnVnQ29uc3VtZTtcbn1cblxuLyoqXG4gKiBTb21lIHRpbWV6b25lIGFiYnJldmlhdGlvbnMgYXJlIGFtYmlndW91cyBpbiB0aGF0IHRoZXkgcmVmZXIgdG8gZGlmZmVyZW50IG9mZnNldHNcbiAqIGRlcGVuZGluZyBvbiB0aGUgdGltZSBvZiB5ZWFyIFx1MjAxNCBkYXlsaWdodCBzYXZpbmdzIHRpbWUgKERTVCksIG9yIG5vbi1EU1QuIFRoaXMgaW50ZXJmYWNlXG4gKiBhbGxvd3MgZGVmaW5pbmcgc3VjaCB0aW1lem9uZXNcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBBbWJpZ3VvdXNUaW1lem9uZU1hcCB7XG4gICAgdGltZXpvbmVPZmZzZXREdXJpbmdEc3Q6IG51bWJlcjtcbiAgICB0aW1lem9uZU9mZnNldE5vbkRzdDogbnVtYmVyO1xuICAgIC8qKlxuICAgICAqIFJldHVybiB0aGUgc3RhcnQgZGF0ZSBvZiBEU1QgZm9yIHRoZSBnaXZlbiB5ZWFyLlxuICAgICAqIHRpbWV6b25lLnRzIGNvbnRhaW5zIGhlbHBlciBtZXRob2RzIGZvciBjb21tb24gc3VjaCBydWxlcy5cbiAgICAgKi9cbiAgICBkc3RTdGFydDogKHllYXI6IG51bWJlcikgPT4gRGF0ZTtcbiAgICAvKipcbiAgICAgKiBSZXR1cm4gdGhlIGVuZCBkYXRlIG9mIERTVCBmb3IgdGhlIGdpdmVuIHllYXIuXG4gICAgICogdGltZXpvbmUudHMgY29udGFpbnMgaGVscGVyIG1ldGhvZHMgZm9yIGNvbW1vbiBzdWNoIHJ1bGVzLlxuICAgICAqL1xuICAgIGRzdEVuZDogKHllYXI6IG51bWJlcikgPT4gRGF0ZTtcbn1cblxuLyoqXG4gKiBBIG1hcCBkZXNjcmliaW5nIGhvdyB0aW1lem9uZSBhYmJyZXZpYXRpb25zIHNob3VsZCBtYXAgdG8gdGltZSBvZmZzZXRzLlxuICogU3VwcG9ydHMgYm90aCB1bmFtYmlnb3VzIG1hcHBpbmdzIGFiYnJldmlhdGlvbiA9PiBvZmZzZXQsXG4gKiBhbmQgYW1iaWd1b3VzIG1hcHBpbmdzLCB3aGVyZSB0aGUgb2Zmc2V0IHdpbGwgZGVwZW5kIG9uIHdoZXRoZXIgdGhlXG4gKiB0aW1lIGluIHF1ZXN0aW9uIGlzIGR1cmluZyBkYXlsaWdodCBzYXZpbmdzIHRpbWUgb3Igbm90LlxuICovXG5leHBvcnQgdHlwZSBUaW1lem9uZUFiYnJNYXAgPSB7IFtrZXk6IHN0cmluZ106IG51bWJlciB8IEFtYmlndW91c1RpbWV6b25lTWFwIH07XG5cbmV4cG9ydCBpbnRlcmZhY2UgUGFyc2luZ1JlZmVyZW5jZSB7XG4gICAgLyoqXG4gICAgICogUmVmZXJlbmNlIGRhdGUuIFRoZSBpbnN0YW50IChKYXZhU2NyaXB0IERhdGUgb2JqZWN0KSB3aGVuIHRoZSBpbnB1dCBpcyB3cml0dGVuIG9yIG1lbnRpb24uXG4gICAgICogVGhpcyBlZmZlY3QgZGF0ZS90aW1lIGltcGxpY2F0aW9uIChlLmcuIHdlZWtkYXkgb3IgdGltZSBtZW50aW9uaW5nKS5cbiAgICAgKiAoZGVmYXVsdCA9IG5vdylcbiAgICAgKi9cbiAgICBpbnN0YW50PzogRGF0ZTtcblxuICAgIC8qKlxuICAgICAqIFJlZmVyZW5jZSB0aW1lem9uZS4gVGhlIHRpbWV6b25lIHdoZXJlIHRoZSBpbnB1dCBpcyB3cml0dGVuIG9yIG1lbnRpb24uXG4gICAgICogRGF0ZS90aW1lIGltcGxpY2F0aW9uIHdpbGwgYWNjb3VudCB0aGUgZGlmZmVyZW5jZSBiZXR3ZWVuIGlucHV0IHRpbWV6b25lIGFuZCB0aGUgY3VycmVudCBzeXN0ZW0gdGltZXpvbmUuXG4gICAgICogKGRlZmF1bHQgPSBjdXJyZW50IHRpbWV6b25lKVxuICAgICAqL1xuICAgIHRpbWV6b25lPzogc3RyaW5nIHwgbnVtYmVyO1xufVxuXG4vKipcbiAqIFBhcnNlZCByZXN1bHQgb3IgZmluYWwgb3V0cHV0LlxuICogRWFjaCByZXN1bHQgb2JqZWN0IHJlcHJlc2VudHMgYSBkYXRlL3RpbWUgKG9yIGRhdGUvdGltZS1yYW5nZSkgbWVudGlvbmluZyBpbiB0aGUgaW5wdXQuXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgUGFyc2VkUmVzdWx0IHtcbiAgICByZWFkb25seSByZWZEYXRlOiBEYXRlO1xuICAgIHJlYWRvbmx5IGluZGV4OiBudW1iZXI7XG4gICAgcmVhZG9ubHkgdGV4dDogc3RyaW5nO1xuXG4gICAgcmVhZG9ubHkgc3RhcnQ6IFBhcnNlZENvbXBvbmVudHM7XG4gICAgcmVhZG9ubHkgZW5kPzogUGFyc2VkQ29tcG9uZW50cztcblxuICAgIC8qKlxuICAgICAqIEByZXR1cm4gYSBqYXZhc2NyaXB0IGRhdGUgb2JqZWN0IGNyZWF0ZWQgZnJvbSB0aGUgYHJlc3VsdC5zdGFydGAuXG4gICAgICovXG4gICAgZGF0ZSgpOiBEYXRlO1xuXG4gICAgLyoqXG4gICAgICogQHJldHVybiBkZWJ1Z2dpbmcgdGFncyBjb21iaW5lZCBvZiB0aGUgYHJlc3VsdC5zdGFydGAgYW5kIGByZXN1bHQuZW5kYC5cbiAgICAgKi9cbiAgICB0YWdzKCk6IFNldDxzdHJpbmc+O1xufVxuXG4vKipcbiAqIEEgY29sbGVjdGlvbiBvZiBwYXJzZWQgZGF0ZS90aW1lIGNvbXBvbmVudHMgKGUuZy4gZGF5LCBob3VyLCBtaW51dGUsIC4uLiwgZXRjKS5cbiAqXG4gKiBFYWNoIHBhcnNlZCBjb21wb25lbnQgaGFzIHRocmVlIGRpZmZlcmVudCBsZXZlbHMgb2YgY2VydGFpbnR5LlxuICogLSAqQ2VydGFpbiogKG9yICpLbm93biopOiBUaGUgY29tcG9uZW50IGlzIGRpcmVjdGx5IG1lbnRpb25lZCBhbmQgcGFyc2VkLlxuICogLSAqSW1wbGllZCo6IFRoZSBjb21wb25lbnQgaXMgbm90IGRpcmVjdGx5IG1lbnRpb25lZCwgYnV0IGltcGxpZWQgYnkgb3RoZXIgcGFyc2VkIGluZm9ybWF0aW9uLlxuICogLSAqVW5rbm93bio6IENvbXBsZXRlbHkgbm8gbWVudGlvbiBvZiB0aGUgY29tcG9uZW50LlxuICovXG5leHBvcnQgaW50ZXJmYWNlIFBhcnNlZENvbXBvbmVudHMge1xuICAgIC8qKlxuICAgICAqIENoZWNrIHRoZSBjb21wb25lbnQgY2VydGFpbmx5IGlmIHRoZSBjb21wb25lbnQgaXMgKkNlcnRhaW4qIChvciAqS25vd24qKVxuICAgICAqL1xuICAgIGlzQ2VydGFpbihjb21wb25lbnQ6IENvbXBvbmVudCk6IGJvb2xlYW47XG5cbiAgICAvKipcbiAgICAgKiBHZXQgdGhlIGNvbXBvbmVudCB2YWx1ZSBmb3IgZWl0aGVyICpDZXJ0YWluKiBvciAqSW1wbGllZCogdmFsdWUuXG4gICAgICovXG4gICAgZ2V0KGNvbXBvbmVudDogQ29tcG9uZW50KTogbnVtYmVyIHwgbnVsbDtcblxuICAgIC8qKlxuICAgICAqIEByZXR1cm4gYSBqYXZhc2NyaXB0IGRhdGUgb2JqZWN0LlxuICAgICAqL1xuICAgIGRhdGUoKTogRGF0ZTtcblxuICAgIC8qKlxuICAgICAqIEByZXR1cm4gZGVidWdnaW5nIHRhZ3Mgb2YgdGhlIHBhcnNlZCBjb21wb25lbnQuXG4gICAgICovXG4gICAgdGFncygpOiBTZXQ8c3RyaW5nPjtcbn1cblxuZXhwb3J0IHR5cGUgQ29tcG9uZW50ID1cbiAgICB8IFwieWVhclwiXG4gICAgfCBcIm1vbnRoXCJcbiAgICB8IFwiZGF5XCJcbiAgICB8IFwid2Vla2RheVwiXG4gICAgfCBcImhvdXJcIlxuICAgIHwgXCJtaW51dGVcIlxuICAgIHwgXCJzZWNvbmRcIlxuICAgIHwgXCJtaWxsaXNlY29uZFwiXG4gICAgfCBcIm1lcmlkaWVtXCJcbiAgICB8IFwidGltZXpvbmVPZmZzZXRcIjtcblxuZXhwb3J0IGVudW0gTWVyaWRpZW0ge1xuICAgIEFNID0gMCxcbiAgICBQTSA9IDEsXG59XG5cbmV4cG9ydCBlbnVtIFdlZWtkYXkge1xuICAgIFNVTkRBWSA9IDAsXG4gICAgTU9OREFZID0gMSxcbiAgICBUVUVTREFZID0gMixcbiAgICBXRURORVNEQVkgPSAzLFxuICAgIFRIVVJTREFZID0gNCxcbiAgICBGUklEQVkgPSA1LFxuICAgIFNBVFVSREFZID0gNixcbn1cblxuZXhwb3J0IGVudW0gTW9udGgge1xuICAgIEpBTlVBUlkgPSAxLFxuICAgIEZFQlJVQVJZID0gMixcbiAgICBNQVJDSCA9IDMsXG4gICAgQVBSSUwgPSA0LFxuICAgIE1BWSA9IDUsXG4gICAgSlVORSA9IDYsXG4gICAgSlVMWSA9IDcsXG4gICAgQVVHVVNUID0gOCxcbiAgICBTRVBURU1CRVIgPSA5LFxuICAgIE9DVE9CRVIgPSAxMCxcbiAgICBOT1ZFTUJFUiA9IDExLFxuICAgIERFQ0VNQkVSID0gMTIsXG59XG4iLCAiaW1wb3J0IHsgUGFyc2luZ0NvbXBvbmVudHMgfSBmcm9tIFwiLi4vcmVzdWx0c1wiO1xuaW1wb3J0IGRheWpzIGZyb20gXCJkYXlqc1wiO1xuaW1wb3J0IHsgTWVyaWRpZW0gfSBmcm9tIFwiLi4vdHlwZXNcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIGFzc2lnblRoZU5leHREYXkoY29tcG9uZW50OiBQYXJzaW5nQ29tcG9uZW50cywgdGFyZ2V0RGF5SnM6IGRheWpzLkRheWpzKSB7XG4gICAgdGFyZ2V0RGF5SnMgPSB0YXJnZXREYXlKcy5hZGQoMSwgXCJkYXlcIik7XG4gICAgYXNzaWduU2ltaWxhckRhdGUoY29tcG9uZW50LCB0YXJnZXREYXlKcyk7XG4gICAgaW1wbHlTaW1pbGFyVGltZShjb21wb25lbnQsIHRhcmdldERheUpzKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGltcGx5VGhlTmV4dERheShjb21wb25lbnQ6IFBhcnNpbmdDb21wb25lbnRzLCB0YXJnZXREYXlKczogZGF5anMuRGF5anMpIHtcbiAgICB0YXJnZXREYXlKcyA9IHRhcmdldERheUpzLmFkZCgxLCBcImRheVwiKTtcbiAgICBpbXBseVNpbWlsYXJEYXRlKGNvbXBvbmVudCwgdGFyZ2V0RGF5SnMpO1xuICAgIGltcGx5U2ltaWxhclRpbWUoY29tcG9uZW50LCB0YXJnZXREYXlKcyk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhc3NpZ25TaW1pbGFyRGF0ZShjb21wb25lbnQ6IFBhcnNpbmdDb21wb25lbnRzLCB0YXJnZXREYXlKczogZGF5anMuRGF5anMpIHtcbiAgICBjb21wb25lbnQuYXNzaWduKFwiZGF5XCIsIHRhcmdldERheUpzLmRhdGUoKSk7XG4gICAgY29tcG9uZW50LmFzc2lnbihcIm1vbnRoXCIsIHRhcmdldERheUpzLm1vbnRoKCkgKyAxKTtcbiAgICBjb21wb25lbnQuYXNzaWduKFwieWVhclwiLCB0YXJnZXREYXlKcy55ZWFyKCkpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYXNzaWduU2ltaWxhclRpbWUoY29tcG9uZW50OiBQYXJzaW5nQ29tcG9uZW50cywgdGFyZ2V0RGF5SnM6IGRheWpzLkRheWpzKSB7XG4gICAgY29tcG9uZW50LmFzc2lnbihcImhvdXJcIiwgdGFyZ2V0RGF5SnMuaG91cigpKTtcbiAgICBjb21wb25lbnQuYXNzaWduKFwibWludXRlXCIsIHRhcmdldERheUpzLm1pbnV0ZSgpKTtcbiAgICBjb21wb25lbnQuYXNzaWduKFwic2Vjb25kXCIsIHRhcmdldERheUpzLnNlY29uZCgpKTtcbiAgICBjb21wb25lbnQuYXNzaWduKFwibWlsbGlzZWNvbmRcIiwgdGFyZ2V0RGF5SnMubWlsbGlzZWNvbmQoKSk7XG4gICAgaWYgKGNvbXBvbmVudC5nZXQoXCJob3VyXCIpIDwgMTIpIHtcbiAgICAgICAgY29tcG9uZW50LmFzc2lnbihcIm1lcmlkaWVtXCIsIE1lcmlkaWVtLkFNKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBjb21wb25lbnQuYXNzaWduKFwibWVyaWRpZW1cIiwgTWVyaWRpZW0uUE0pO1xuICAgIH1cbn1cblxuLyoqXG4gKiBAZGVwcmVjYXRlZCBVc2UgYGRhdGVzLmltcGx5U2ltaWxhckRhdGVgIHdpdGggbm9ybWFsIEphdmFzY3JpcHQgRGF0ZSBpbnN0ZWFkLlxuICovXG5leHBvcnQgZnVuY3Rpb24gaW1wbHlTaW1pbGFyRGF0ZShjb21wb25lbnQ6IFBhcnNpbmdDb21wb25lbnRzLCB0YXJnZXREYXlKczogZGF5anMuRGF5anMpIHtcbiAgICBjb21wb25lbnQuaW1wbHkoXCJkYXlcIiwgdGFyZ2V0RGF5SnMuZGF0ZSgpKTtcbiAgICBjb21wb25lbnQuaW1wbHkoXCJtb250aFwiLCB0YXJnZXREYXlKcy5tb250aCgpICsgMSk7XG4gICAgY29tcG9uZW50LmltcGx5KFwieWVhclwiLCB0YXJnZXREYXlKcy55ZWFyKCkpO1xufVxuXG4vKipcbiAqIEBkZXByZWNhdGVkIFVzZSBgZGF0ZXMuaW1wbHlTaW1pbGFyVGltZWAgd2l0aCBub3JtYWwgSmF2YXNjcmlwdCBEYXRlIGluc3RlYWQuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBpbXBseVNpbWlsYXJUaW1lKGNvbXBvbmVudDogUGFyc2luZ0NvbXBvbmVudHMsIHRhcmdldERheUpzOiBkYXlqcy5EYXlqcykge1xuICAgIGNvbXBvbmVudC5pbXBseShcImhvdXJcIiwgdGFyZ2V0RGF5SnMuaG91cigpKTtcbiAgICBjb21wb25lbnQuaW1wbHkoXCJtaW51dGVcIiwgdGFyZ2V0RGF5SnMubWludXRlKCkpO1xuICAgIGNvbXBvbmVudC5pbXBseShcInNlY29uZFwiLCB0YXJnZXREYXlKcy5zZWNvbmQoKSk7XG4gICAgY29tcG9uZW50LmltcGx5KFwibWlsbGlzZWNvbmRcIiwgdGFyZ2V0RGF5SnMubWlsbGlzZWNvbmQoKSk7XG59XG4iLCAiaW1wb3J0IGRheWpzIGZyb20gXCJkYXlqc1wiO1xuaW1wb3J0IHsgVGltZXpvbmVBYmJyTWFwLCBXZWVrZGF5LCBNb250aCB9IGZyb20gXCIuL3R5cGVzXCI7XG5cbmV4cG9ydCBjb25zdCBUSU1FWk9ORV9BQkJSX01BUDogVGltZXpvbmVBYmJyTWFwID0ge1xuICAgIEFDRFQ6IDYzMCxcbiAgICBBQ1NUOiA1NzAsXG4gICAgQURUOiAtMTgwLFxuICAgIEFFRFQ6IDY2MCxcbiAgICBBRVNUOiA2MDAsXG4gICAgQUZUOiAyNzAsXG4gICAgQUtEVDogLTQ4MCxcbiAgICBBS1NUOiAtNTQwLFxuICAgIEFMTVQ6IDM2MCxcbiAgICBBTVNUOiAtMTgwLFxuICAgIEFNVDogLTI0MCxcbiAgICBBTkFTVDogNzIwLFxuICAgIEFOQVQ6IDcyMCxcbiAgICBBUVRUOiAzMDAsXG4gICAgQVJUOiAtMTgwLFxuICAgIEFTVDogLTI0MCxcbiAgICBBV0RUOiA1NDAsXG4gICAgQVdTVDogNDgwLFxuICAgIEFaT1NUOiAwLFxuICAgIEFaT1Q6IC02MCxcbiAgICBBWlNUOiAzMDAsXG4gICAgQVpUOiAyNDAsXG4gICAgQk5UOiA0ODAsXG4gICAgQk9UOiAtMjQwLFxuICAgIEJSU1Q6IC0xMjAsXG4gICAgQlJUOiAtMTgwLFxuICAgIEJTVDogNjAsXG4gICAgQlRUOiAzNjAsXG4gICAgQ0FTVDogNDgwLFxuICAgIENBVDogMTIwLFxuICAgIENDVDogMzkwLFxuICAgIENEVDogLTMwMCxcbiAgICBDRVNUOiAxMjAsXG4gICAgLy8gTm90ZTogTWFueSBzb3VyY2VzIGRlZmluZSBDRVQgYXMgYSBjb25zdGFudCBVVEMrMS4gSW4gY29tbW9uIHVzYWdlLCBob3dldmVyLFxuICAgIC8vIENFVCB1c3VhbGx5IHJlZmVycyB0byB0aGUgdGltZSBvYnNlcnZlZCBpbiBtb3N0IG9mIEV1cm9wZSwgYmUgaXQgc3RhbmRhcmQgdGltZSBvciBkYXlsaWdodCBzYXZpbmcgdGltZS5cbiAgICBDRVQ6IHtcbiAgICAgICAgdGltZXpvbmVPZmZzZXREdXJpbmdEc3Q6IDIgKiA2MCxcbiAgICAgICAgdGltZXpvbmVPZmZzZXROb25Ec3Q6IDYwLFxuICAgICAgICBkc3RTdGFydDogKHllYXI6IG51bWJlcikgPT4gZ2V0TGFzdFdlZWtkYXlPZk1vbnRoKHllYXIsIE1vbnRoLk1BUkNILCBXZWVrZGF5LlNVTkRBWSwgMiksXG4gICAgICAgIGRzdEVuZDogKHllYXI6IG51bWJlcikgPT4gZ2V0TGFzdFdlZWtkYXlPZk1vbnRoKHllYXIsIE1vbnRoLk9DVE9CRVIsIFdlZWtkYXkuU1VOREFZLCAzKSxcbiAgICB9LFxuICAgIENIQURUOiA4MjUsXG4gICAgQ0hBU1Q6IDc2NSxcbiAgICBDS1Q6IC02MDAsXG4gICAgQ0xTVDogLTE4MCxcbiAgICBDTFQ6IC0yNDAsXG4gICAgQ09UOiAtMzAwLFxuICAgIENTVDogLTM2MCxcbiAgICBDVDoge1xuICAgICAgICB0aW1lem9uZU9mZnNldER1cmluZ0RzdDogLTUgKiA2MCxcbiAgICAgICAgdGltZXpvbmVPZmZzZXROb25Ec3Q6IC02ICogNjAsXG4gICAgICAgIGRzdFN0YXJ0OiAoeWVhcjogbnVtYmVyKSA9PiBnZXROdGhXZWVrZGF5T2ZNb250aCh5ZWFyLCBNb250aC5NQVJDSCwgV2Vla2RheS5TVU5EQVksIDIsIDIpLFxuICAgICAgICBkc3RFbmQ6ICh5ZWFyOiBudW1iZXIpID0+IGdldE50aFdlZWtkYXlPZk1vbnRoKHllYXIsIE1vbnRoLk5PVkVNQkVSLCBXZWVrZGF5LlNVTkRBWSwgMSwgMiksXG4gICAgfSxcbiAgICBDVlQ6IC02MCxcbiAgICBDWFQ6IDQyMCxcbiAgICBDaFNUOiA2MDAsXG4gICAgREFWVDogNDIwLFxuICAgIEVBU1NUOiAtMzAwLFxuICAgIEVBU1Q6IC0zNjAsXG4gICAgRUFUOiAxODAsXG4gICAgRUNUOiAtMzAwLFxuICAgIEVEVDogLTI0MCxcbiAgICBFRVNUOiAxODAsXG4gICAgRUVUOiAxMjAsXG4gICAgRUdTVDogMCxcbiAgICBFR1Q6IC02MCxcbiAgICBFU1Q6IC0zMDAsXG4gICAgRVQ6IHtcbiAgICAgICAgdGltZXpvbmVPZmZzZXREdXJpbmdEc3Q6IC00ICogNjAsXG4gICAgICAgIHRpbWV6b25lT2Zmc2V0Tm9uRHN0OiAtNSAqIDYwLFxuICAgICAgICBkc3RTdGFydDogKHllYXI6IG51bWJlcikgPT4gZ2V0TnRoV2Vla2RheU9mTW9udGgoeWVhciwgTW9udGguTUFSQ0gsIFdlZWtkYXkuU1VOREFZLCAyLCAyKSxcbiAgICAgICAgZHN0RW5kOiAoeWVhcjogbnVtYmVyKSA9PiBnZXROdGhXZWVrZGF5T2ZNb250aCh5ZWFyLCBNb250aC5OT1ZFTUJFUiwgV2Vla2RheS5TVU5EQVksIDEsIDIpLFxuICAgIH0sXG4gICAgRkpTVDogNzgwLFxuICAgIEZKVDogNzIwLFxuICAgIEZLU1Q6IC0xODAsXG4gICAgRktUOiAtMjQwLFxuICAgIEZOVDogLTEyMCxcbiAgICBHQUxUOiAtMzYwLFxuICAgIEdBTVQ6IC01NDAsXG4gICAgR0VUOiAyNDAsXG4gICAgR0ZUOiAtMTgwLFxuICAgIEdJTFQ6IDcyMCxcbiAgICBHTVQ6IDAsXG4gICAgR1NUOiAyNDAsXG4gICAgR1lUOiAtMjQwLFxuICAgIEhBQTogLTE4MCxcbiAgICBIQUM6IC0zMDAsXG4gICAgSEFEVDogLTU0MCxcbiAgICBIQUU6IC0yNDAsXG4gICAgSEFQOiAtNDIwLFxuICAgIEhBUjogLTM2MCxcbiAgICBIQVNUOiAtNjAwLFxuICAgIEhBVDogLTkwLFxuICAgIEhBWTogLTQ4MCxcbiAgICBIS1Q6IDQ4MCxcbiAgICBITFY6IC0yMTAsXG4gICAgSE5BOiAtMjQwLFxuICAgIEhOQzogLTM2MCxcbiAgICBITkU6IC0zMDAsXG4gICAgSE5QOiAtNDgwLFxuICAgIEhOUjogLTQyMCxcbiAgICBITlQ6IC0xNTAsXG4gICAgSE5ZOiAtNTQwLFxuICAgIEhPVlQ6IDQyMCxcbiAgICBJQ1Q6IDQyMCxcbiAgICBJRFQ6IDE4MCxcbiAgICBJT1Q6IDM2MCxcbiAgICBJUkRUOiAyNzAsXG4gICAgSVJLU1Q6IDU0MCxcbiAgICBJUktUOiA1NDAsXG4gICAgSVJTVDogMjEwLFxuICAgIElTVDogMzMwLFxuICAgIEpTVDogNTQwLFxuICAgIEtHVDogMzYwLFxuICAgIEtSQVNUOiA0ODAsXG4gICAgS1JBVDogNDgwLFxuICAgIEtTVDogNTQwLFxuICAgIEtVWVQ6IDI0MCxcbiAgICBMSERUOiA2NjAsXG4gICAgTEhTVDogNjMwLFxuICAgIExJTlQ6IDg0MCxcbiAgICBNQUdTVDogNzIwLFxuICAgIE1BR1Q6IDcyMCxcbiAgICBNQVJUOiAtNTEwLFxuICAgIE1BV1Q6IDMwMCxcbiAgICBNRFQ6IC0zNjAsXG4gICAgTUVTWjogMTIwLFxuICAgIE1FWjogNjAsXG4gICAgTUhUOiA3MjAsXG4gICAgTU1UOiAzOTAsXG4gICAgTVNEOiAyNDAsXG4gICAgTVNLOiAxODAsXG4gICAgTVNUOiAtNDIwLFxuICAgIE1UOiB7XG4gICAgICAgIHRpbWV6b25lT2Zmc2V0RHVyaW5nRHN0OiAtNiAqIDYwLFxuICAgICAgICB0aW1lem9uZU9mZnNldE5vbkRzdDogLTcgKiA2MCxcbiAgICAgICAgZHN0U3RhcnQ6ICh5ZWFyOiBudW1iZXIpID0+IGdldE50aFdlZWtkYXlPZk1vbnRoKHllYXIsIE1vbnRoLk1BUkNILCBXZWVrZGF5LlNVTkRBWSwgMiwgMiksXG4gICAgICAgIGRzdEVuZDogKHllYXI6IG51bWJlcikgPT4gZ2V0TnRoV2Vla2RheU9mTW9udGgoeWVhciwgTW9udGguTk9WRU1CRVIsIFdlZWtkYXkuU1VOREFZLCAxLCAyKSxcbiAgICB9LFxuICAgIE1VVDogMjQwLFxuICAgIE1WVDogMzAwLFxuICAgIE1ZVDogNDgwLFxuICAgIE5DVDogNjYwLFxuICAgIE5EVDogLTkwLFxuICAgIE5GVDogNjkwLFxuICAgIE5PVlNUOiA0MjAsXG4gICAgTk9WVDogMzYwLFxuICAgIE5QVDogMzQ1LFxuICAgIE5TVDogLTE1MCxcbiAgICBOVVQ6IC02NjAsXG4gICAgTlpEVDogNzgwLFxuICAgIE5aU1Q6IDcyMCxcbiAgICBPTVNTVDogNDIwLFxuICAgIE9NU1Q6IDQyMCxcbiAgICBQRFQ6IC00MjAsXG4gICAgUEVUOiAtMzAwLFxuICAgIFBFVFNUOiA3MjAsXG4gICAgUEVUVDogNzIwLFxuICAgIFBHVDogNjAwLFxuICAgIFBIT1Q6IDc4MCxcbiAgICBQSFQ6IDQ4MCxcbiAgICBQS1Q6IDMwMCxcbiAgICBQTURUOiAtMTIwLFxuICAgIFBNU1Q6IC0xODAsXG4gICAgUE9OVDogNjYwLFxuICAgIFBTVDogLTQ4MCxcbiAgICBQVDoge1xuICAgICAgICB0aW1lem9uZU9mZnNldER1cmluZ0RzdDogLTcgKiA2MCxcbiAgICAgICAgdGltZXpvbmVPZmZzZXROb25Ec3Q6IC04ICogNjAsXG4gICAgICAgIGRzdFN0YXJ0OiAoeWVhcjogbnVtYmVyKSA9PiBnZXROdGhXZWVrZGF5T2ZNb250aCh5ZWFyLCBNb250aC5NQVJDSCwgV2Vla2RheS5TVU5EQVksIDIsIDIpLFxuICAgICAgICBkc3RFbmQ6ICh5ZWFyOiBudW1iZXIpID0+IGdldE50aFdlZWtkYXlPZk1vbnRoKHllYXIsIE1vbnRoLk5PVkVNQkVSLCBXZWVrZGF5LlNVTkRBWSwgMSwgMiksXG4gICAgfSxcbiAgICBQV1Q6IDU0MCxcbiAgICBQWVNUOiAtMTgwLFxuICAgIFBZVDogLTI0MCxcbiAgICBSRVQ6IDI0MCxcbiAgICBTQU1UOiAyNDAsXG4gICAgU0FTVDogMTIwLFxuICAgIFNCVDogNjYwLFxuICAgIFNDVDogMjQwLFxuICAgIFNHVDogNDgwLFxuICAgIFNSVDogLTE4MCxcbiAgICBTU1Q6IC02NjAsXG4gICAgVEFIVDogLTYwMCxcbiAgICBURlQ6IDMwMCxcbiAgICBUSlQ6IDMwMCxcbiAgICBUS1Q6IDc4MCxcbiAgICBUTFQ6IDU0MCxcbiAgICBUTVQ6IDMwMCxcbiAgICBUVlQ6IDcyMCxcbiAgICBVTEFUOiA0ODAsXG4gICAgVVRDOiAwLFxuICAgIFVZU1Q6IC0xMjAsXG4gICAgVVlUOiAtMTgwLFxuICAgIFVaVDogMzAwLFxuICAgIFZFVDogLTIxMCxcbiAgICBWTEFTVDogNjYwLFxuICAgIFZMQVQ6IDY2MCxcbiAgICBWVVQ6IDY2MCxcbiAgICBXQVNUOiAxMjAsXG4gICAgV0FUOiA2MCxcbiAgICBXRVNUOiA2MCxcbiAgICBXRVNaOiA2MCxcbiAgICBXRVQ6IDAsXG4gICAgV0VaOiAwLFxuICAgIFdGVDogNzIwLFxuICAgIFdHU1Q6IC0xMjAsXG4gICAgV0dUOiAtMTgwLFxuICAgIFdJQjogNDIwLFxuICAgIFdJVDogNTQwLFxuICAgIFdJVEE6IDQ4MCxcbiAgICBXU1Q6IDc4MCxcbiAgICBXVDogMCxcbiAgICBZQUtTVDogNjAwLFxuICAgIFlBS1Q6IDYwMCxcbiAgICBZQVBUOiA2MDAsXG4gICAgWUVLU1Q6IDM2MCxcbiAgICBZRUtUOiAzNjAsXG59O1xuXG4vKipcbiAqIEdldCB0aGUgZGF0ZSB3aGljaCBpcyB0aGUgbnRoIG9jY3VyZW5jZSBvZiBhIGdpdmVuIHdlZWtkYXkgaW4gYSBnaXZlbiBtb250aCBhbmQgeWVhci5cbiAqXG4gKiBAcGFyYW0geWVhciBUaGUgeWVhciBmb3Igd2hpY2ggdG8gZmluZCB0aGUgZGF0ZVxuICogQHBhcmFtIG1vbnRoIFRoZSBtb250aCBpbiB3aGljaCB0aGUgZGF0ZSBvY2N1cnNcbiAqIEBwYXJhbSB3ZWVrZGF5IFRoZSB3ZWVrZGF5IG9uIHdoaWNoIHRoZSBkYXRlIG9jY3Vyc1xuICogQHBhcmFtIG4gVGhlIG50aCBvY2N1cmVuY2Ugb2YgdGhlIGdpdmVuIHdlZWtkYXkgb24gdGhlIG1vbnRoIHRvIHJldHVyblxuICogQHBhcmFtIGhvdXIgVGhlIGhvdXIgb2YgZGF5IHdoaWNoIHNob3VsZCBiZSBzZXQgb24gdGhlIHJldHVybmVkIGRhdGVcbiAqIEByZXR1cm4gVGhlIGRhdGUgd2hpY2ggaXMgdGhlIG50aCBvY2N1cmVuY2Ugb2YgYSBnaXZlbiB3ZWVrZGF5IGluIGEgZ2l2ZW5cbiAqICAgICAgICAgbW9udGggYW5kIHllYXIsIGF0IHRoZSBnaXZlbiBob3VyIG9mIGRheVxuICovXG5leHBvcnQgZnVuY3Rpb24gZ2V0TnRoV2Vla2RheU9mTW9udGgoeWVhcjogbnVtYmVyLCBtb250aDogTW9udGgsIHdlZWtkYXk6IFdlZWtkYXksIG46IDEgfCAyIHwgMyB8IDQsIGhvdXIgPSAwKTogRGF0ZSB7XG4gICAgbGV0IGRheU9mTW9udGggPSAwO1xuICAgIGxldCBpID0gMDtcbiAgICB3aGlsZSAoaSA8IG4pIHtcbiAgICAgICAgZGF5T2ZNb250aCsrO1xuICAgICAgICBjb25zdCBkYXRlID0gbmV3IERhdGUoeWVhciwgbW9udGggLSAxLCBkYXlPZk1vbnRoKTtcbiAgICAgICAgaWYgKGRhdGUuZ2V0RGF5KCkgPT09IHdlZWtkYXkpIGkrKztcbiAgICB9XG4gICAgcmV0dXJuIG5ldyBEYXRlKHllYXIsIG1vbnRoIC0gMSwgZGF5T2ZNb250aCwgaG91cik7XG59XG5cbi8qKlxuICogR2V0IHRoZSBkYXRlIHdoaWNoIGlzIHRoZSBsYXN0IG9jY3VyZW5jZSBvZiBhIGdpdmVuIHdlZWtkYXkgaW4gYSBnaXZlbiBtb250aCBhbmQgeWVhci5cbiAqXG4gKiBAcGFyYW0geWVhciBUaGUgeWVhciBmb3Igd2hpY2ggdG8gZmluZCB0aGUgZGF0ZVxuICogQHBhcmFtIG1vbnRoIFRoZSBtb250aCBpbiB3aGljaCB0aGUgZGF0ZSBvY2N1cnNcbiAqIEBwYXJhbSB3ZWVrZGF5IFRoZSB3ZWVrZGF5IG9uIHdoaWNoIHRoZSBkYXRlIG9jY3Vyc1xuICogQHBhcmFtIGhvdXIgVGhlIGhvdXIgb2YgZGF5IHdoaWNoIHNob3VsZCBiZSBzZXQgb24gdGhlIHJldHVybmVkIGRhdGVcbiAqIEByZXR1cm4gVGhlIGRhdGUgd2hpY2ggaXMgdGhlIGxhc3Qgb2NjdXJlbmNlIG9mIGEgZ2l2ZW4gd2Vla2RheSBpbiBhIGdpdmVuXG4gKiAgICAgICAgIG1vbnRoIGFuZCB5ZWFyLCBhdCB0aGUgZ2l2ZW4gaG91ciBvZiBkYXlcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdldExhc3RXZWVrZGF5T2ZNb250aCh5ZWFyOiBudW1iZXIsIG1vbnRoOiBNb250aCwgd2Vla2RheTogV2Vla2RheSwgaG91ciA9IDApOiBEYXRlIHtcbiAgICAvLyBQcm9jZWR1cmU6IEZpbmQgdGhlIGZpcnN0IHdlZWtkYXkgb2YgdGhlIG5leHQgbW9udGgsIGNvbXBhcmUgd2l0aCB0aGUgZ2l2ZW4gd2Vla2RheSxcbiAgICAvLyBhbmQgdXNlIHRoZSBkaWZmZXJlbmNlIHRvIGRldGVybWluZSBob3cgbWFueSBkYXlzIHRvIHN1YnRyYWN0IGZyb20gdGhlIGZpcnN0IG9mIHRoZSBuZXh0IG1vbnRoLlxuICAgIGNvbnN0IG9uZUluZGV4ZWRXZWVrZGF5ID0gd2Vla2RheSA9PT0gMCA/IDcgOiB3ZWVrZGF5O1xuICAgIGNvbnN0IGRhdGUgPSBuZXcgRGF0ZSh5ZWFyLCBtb250aCAtIDEgKyAxLCAxLCAxMik7XG4gICAgY29uc3QgZmlyc3RXZWVrZGF5TmV4dE1vbnRoID0gZGF0ZS5nZXREYXkoKSA9PT0gMCA/IDcgOiBkYXRlLmdldERheSgpO1xuICAgIGxldCBkYXlEaWZmO1xuICAgIGlmIChmaXJzdFdlZWtkYXlOZXh0TW9udGggPT09IG9uZUluZGV4ZWRXZWVrZGF5KSBkYXlEaWZmID0gNztcbiAgICBlbHNlIGlmIChmaXJzdFdlZWtkYXlOZXh0TW9udGggPCBvbmVJbmRleGVkV2Vla2RheSkgZGF5RGlmZiA9IDcgKyBmaXJzdFdlZWtkYXlOZXh0TW9udGggLSBvbmVJbmRleGVkV2Vla2RheTtcbiAgICBlbHNlIGRheURpZmYgPSBmaXJzdFdlZWtkYXlOZXh0TW9udGggLSBvbmVJbmRleGVkV2Vla2RheTtcbiAgICBkYXRlLnNldERhdGUoZGF0ZS5nZXREYXRlKCkgLSBkYXlEaWZmKTtcbiAgICByZXR1cm4gbmV3IERhdGUoeWVhciwgbW9udGggLSAxLCBkYXRlLmdldERhdGUoKSwgaG91cik7XG59XG5cbi8qKlxuICogRmluZHMgYW5kIHJldHVybnMgdGltZXpvbmUgb2Zmc2V0LiBJZiB0aW1lem9uZUlucHV0IGlzIG51bWVyaWMsIGl0IGlzIHJldHVybmVkLiBPdGhlcndpc2UsIGxvb2sgZm9yIHRpbWV6b25lIG9mZnNldHNcbiAqIGluIHRoZSBmb2xsb3dpbmcgb3JkZXI6IHRpbWV6b25lT3ZlcnJpZGVzIC0+IHtAbGluayBUSU1FWk9ORV9BQkJSX01BUH0uXG4gKlxuICogQHBhcmFtIHRpbWV6b25lSW5wdXQgVXBwZXJjYXNlIHRpbWV6b25lIGFiYnJldmlhdGlvbiBvciBudW1lcmljIG9mZnNldCBpbiBtaW51dGVzXG4gKiBAcGFyYW0gZGF0ZSBUaGUgZGF0ZSB0byB1c2UgdG8gZGV0ZXJtaW5lIHdoZXRoZXIgdG8gcmV0dXJuIERTVCBvZmZzZXRzIGZvciBhbWJpZ3VvdXMgdGltZXpvbmVzXG4gKiBAcGFyYW0gdGltZXpvbmVPdmVycmlkZXMgT3ZlcnJpZGVzIGZvciB0aW1lem9uZXNcbiAqIEByZXR1cm4gdGltZXpvbmUgb2Zmc2V0IGluIG1pbnV0ZXNcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHRvVGltZXpvbmVPZmZzZXQoXG4gICAgdGltZXpvbmVJbnB1dD86IHN0cmluZyB8IG51bWJlcixcbiAgICBkYXRlPzogRGF0ZSxcbiAgICB0aW1lem9uZU92ZXJyaWRlczogVGltZXpvbmVBYmJyTWFwID0ge31cbik6IG51bWJlciB8IG51bGwge1xuICAgIGlmICh0aW1lem9uZUlucHV0ID09IG51bGwpIHtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiB0aW1lem9uZUlucHV0ID09PSBcIm51bWJlclwiKSB7XG4gICAgICAgIHJldHVybiB0aW1lem9uZUlucHV0O1xuICAgIH1cblxuICAgIGNvbnN0IG1hdGNoZWRUaW1lem9uZSA9IHRpbWV6b25lT3ZlcnJpZGVzW3RpbWV6b25lSW5wdXRdID8/IFRJTUVaT05FX0FCQlJfTUFQW3RpbWV6b25lSW5wdXRdO1xuICAgIGlmIChtYXRjaGVkVGltZXpvbmUgPT0gbnVsbCkge1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgLy8gVGhpcyBtZWFucyB0aGF0IHdlIGhhdmUgbWF0Y2hlZCBhbiB1bmFtYmlndW91cyB0aW1lem9uZVxuICAgIGlmICh0eXBlb2YgbWF0Y2hlZFRpbWV6b25lID09IFwibnVtYmVyXCIpIHtcbiAgICAgICAgcmV0dXJuIG1hdGNoZWRUaW1lem9uZTtcbiAgICB9XG5cbiAgICAvLyBUaGUgbWF0Y2hlZCB0aW1lem9uZSBpcyBhbiBhbWJpZ3VvdXMgdGltZXpvbmUsIHdoZXJlIHRoZSBvZmZzZXQgZGVwZW5kcyBvbiB3aGV0aGVyIHRoZSBjb250ZXh0IChyZWZEYXRlKVxuICAgIC8vIGlzIGR1cmluZyBkYXlsaWdodCBzYXZpbmdzIG9yIG5vdC5cblxuICAgIC8vIFdpdGhvdXQgcmVmRGF0ZSBhcyBjb250ZXh0LCB0aGVyZSdzIG5vIHdheSB0byBrbm93IGlmIERTVCBvciBub24tRFNUIG9mZnNldCBzaG91bGQgYmUgdXNlZC4gUmV0dXJuIG51bGwgaW5zdGVhZC5cbiAgICBpZiAoZGF0ZSA9PSBudWxsKSB7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIC8vIFJldHVybiBEU1Qgb2Zmc2V0IGlmIHRoZSByZWZEYXRlIGlzIGR1cmluZyBkYXlsaWdodCBzYXZpbmdzXG4gICAgaWYgKFxuICAgICAgICBkYXlqcyhkYXRlKS5pc0FmdGVyKG1hdGNoZWRUaW1lem9uZS5kc3RTdGFydChkYXRlLmdldEZ1bGxZZWFyKCkpKSAmJlxuICAgICAgICAhZGF5anMoZGF0ZSkuaXNBZnRlcihtYXRjaGVkVGltZXpvbmUuZHN0RW5kKGRhdGUuZ2V0RnVsbFllYXIoKSkpXG4gICAgKSB7XG4gICAgICAgIHJldHVybiBtYXRjaGVkVGltZXpvbmUudGltZXpvbmVPZmZzZXREdXJpbmdEc3Q7XG4gICAgfVxuXG4gICAgLy8gcmVmRGF0ZSBpcyBub3QgZHVyaW5nIERTVCA9PiByZXR1cm4gbm9uLURTVCBvZmZzZXRcbiAgICByZXR1cm4gbWF0Y2hlZFRpbWV6b25lLnRpbWV6b25lT2Zmc2V0Tm9uRHN0O1xufVxuIiwgInR5cGUgRGljdGlvbmFyeUxpa2UgPSBzdHJpbmdbXSB8IHsgW3dvcmQ6IHN0cmluZ106IHVua25vd24gfSB8IE1hcDxzdHJpbmcsIHVua25vd24+O1xuXG5leHBvcnQgZnVuY3Rpb24gcmVwZWF0ZWRUaW1ldW5pdFBhdHRlcm4oXG4gICAgcHJlZml4OiBzdHJpbmcsXG4gICAgc2luZ2xlVGltZXVuaXRQYXR0ZXJuOiBzdHJpbmcsXG4gICAgY29ubmVjdG9yUGF0dGVybiA9IFwiXFxcXHN7MCw1fSw/XFxcXHN7MCw1fVwiXG4pOiBzdHJpbmcge1xuICAgIGNvbnN0IHNpbmdsZVRpbWV1bml0UGF0dGVybk5vQ2FwdHVyZSA9IHNpbmdsZVRpbWV1bml0UGF0dGVybi5yZXBsYWNlKC9cXCgoPyFcXD8pL2csIFwiKD86XCIpO1xuICAgIHJldHVybiBgJHtwcmVmaXh9JHtzaW5nbGVUaW1ldW5pdFBhdHRlcm5Ob0NhcHR1cmV9KD86JHtjb25uZWN0b3JQYXR0ZXJufSR7c2luZ2xlVGltZXVuaXRQYXR0ZXJuTm9DYXB0dXJlfSl7MCwxMH1gO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZXh0cmFjdFRlcm1zKGRpY3Rpb25hcnk6IERpY3Rpb25hcnlMaWtlKTogc3RyaW5nW10ge1xuICAgIGxldCBrZXlzOiBzdHJpbmdbXTtcbiAgICBpZiAoZGljdGlvbmFyeSBpbnN0YW5jZW9mIEFycmF5KSB7XG4gICAgICAgIGtleXMgPSBbLi4uZGljdGlvbmFyeV07XG4gICAgfSBlbHNlIGlmIChkaWN0aW9uYXJ5IGluc3RhbmNlb2YgTWFwKSB7XG4gICAgICAgIGtleXMgPSBBcnJheS5mcm9tKChkaWN0aW9uYXJ5IGFzIE1hcDxzdHJpbmcsIHVua25vd24+KS5rZXlzKCkpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGtleXMgPSBPYmplY3Qua2V5cyhkaWN0aW9uYXJ5KTtcbiAgICB9XG5cbiAgICByZXR1cm4ga2V5cztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG1hdGNoQW55UGF0dGVybihkaWN0aW9uYXJ5OiBEaWN0aW9uYXJ5TGlrZSk6IHN0cmluZyB7XG4gICAgLy8gVE9ETzogTW9yZSBlZmZpY2llbnQgcmVnZXggcGF0dGVybiBieSBjb25zaWRlcmluZyBkdXBsaWNhdGVkIHByZWZpeFxuXG4gICAgY29uc3Qgam9pbmVkVGVybXMgPSBleHRyYWN0VGVybXMoZGljdGlvbmFyeSlcbiAgICAgICAgLnNvcnQoKGEsIGIpID0+IGIubGVuZ3RoIC0gYS5sZW5ndGgpXG4gICAgICAgIC5qb2luKFwifFwiKVxuICAgICAgICAucmVwbGFjZSgvXFwuL2csIFwiXFxcXC5cIik7XG5cbiAgICByZXR1cm4gYCg/OiR7am9pbmVkVGVybXN9KWA7XG59XG4iLCAiaW1wb3J0IGRheWpzIGZyb20gXCJkYXlqc1wiO1xuXG4vKipcbiAqIEZpbmQgdGhlIG1vc3QgbGlrZWx5IHllYXIsIGZyb20gYSByYXcgbnVtYmVyLiBGb3IgZXhhbXBsZTpcbiAqIDE5OTcgPT4gMTk5N1xuICogOTcgPT4gMTk5N1xuICogMTIgPT4gMjAxMlxuICovXG5leHBvcnQgZnVuY3Rpb24gZmluZE1vc3RMaWtlbHlBRFllYXIoeWVhck51bWJlcjogbnVtYmVyKTogbnVtYmVyIHtcbiAgICBpZiAoeWVhck51bWJlciA8IDEwMCkge1xuICAgICAgICBpZiAoeWVhck51bWJlciA+IDUwKSB7XG4gICAgICAgICAgICB5ZWFyTnVtYmVyID0geWVhck51bWJlciArIDE5MDA7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB5ZWFyTnVtYmVyID0geWVhck51bWJlciArIDIwMDA7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4geWVhck51bWJlcjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGZpbmRZZWFyQ2xvc2VzdFRvUmVmKHJlZkRhdGU6IERhdGUsIGRheTogbnVtYmVyLCBtb250aDogbnVtYmVyKTogbnVtYmVyIHtcbiAgICAvL0ZpbmQgdGhlIG1vc3QgYXBwcm9wcmlhdGVkIHllYXJcbiAgICBjb25zdCByZWZNb21lbnQgPSBkYXlqcyhyZWZEYXRlKTtcbiAgICBsZXQgZGF0ZU1vbWVudCA9IHJlZk1vbWVudDtcbiAgICBkYXRlTW9tZW50ID0gZGF0ZU1vbWVudC5tb250aChtb250aCAtIDEpO1xuICAgIGRhdGVNb21lbnQgPSBkYXRlTW9tZW50LmRhdGUoZGF5KTtcbiAgICBkYXRlTW9tZW50ID0gZGF0ZU1vbWVudC55ZWFyKHJlZk1vbWVudC55ZWFyKCkpO1xuXG4gICAgY29uc3QgbmV4dFllYXIgPSBkYXRlTW9tZW50LmFkZCgxLCBcInlcIik7XG4gICAgY29uc3QgbGFzdFllYXIgPSBkYXRlTW9tZW50LmFkZCgtMSwgXCJ5XCIpO1xuICAgIGlmIChNYXRoLmFicyhuZXh0WWVhci5kaWZmKHJlZk1vbWVudCkpIDwgTWF0aC5hYnMoZGF0ZU1vbWVudC5kaWZmKHJlZk1vbWVudCkpKSB7XG4gICAgICAgIGRhdGVNb21lbnQgPSBuZXh0WWVhcjtcbiAgICB9IGVsc2UgaWYgKE1hdGguYWJzKGxhc3RZZWFyLmRpZmYocmVmTW9tZW50KSkgPCBNYXRoLmFicyhkYXRlTW9tZW50LmRpZmYocmVmTW9tZW50KSkpIHtcbiAgICAgICAgZGF0ZU1vbWVudCA9IGxhc3RZZWFyO1xuICAgIH1cblxuICAgIHJldHVybiBkYXRlTW9tZW50LnllYXIoKTtcbn1cbiIsICJpbXBvcnQgeyBPcFVuaXRUeXBlLCBRVW5pdFR5cGUgfSBmcm9tIFwiZGF5anNcIjtcbmltcG9ydCB7IG1hdGNoQW55UGF0dGVybiwgcmVwZWF0ZWRUaW1ldW5pdFBhdHRlcm4gfSBmcm9tIFwiLi4vLi4vdXRpbHMvcGF0dGVyblwiO1xuaW1wb3J0IHsgZmluZE1vc3RMaWtlbHlBRFllYXIgfSBmcm9tIFwiLi4vLi4vY2FsY3VsYXRpb24veWVhcnNcIjtcbmltcG9ydCB7IFRpbWVVbml0cyB9IGZyb20gXCIuLi8uLi91dGlscy90aW1ldW5pdHNcIjtcbmltcG9ydCB7IFdlZWtkYXkgfSBmcm9tIFwiLi4vLi4vdHlwZXNcIjtcblxuZXhwb3J0IGNvbnN0IFdFRUtEQVlfRElDVElPTkFSWTogeyBbd29yZDogc3RyaW5nXTogV2Vla2RheSB9ID0ge1xuICAgIHN1bmRheTogMCxcbiAgICBzdW46IDAsXG4gICAgXCJzdW4uXCI6IDAsXG4gICAgbW9uZGF5OiAxLFxuICAgIG1vbjogMSxcbiAgICBcIm1vbi5cIjogMSxcbiAgICB0dWVzZGF5OiAyLFxuICAgIHR1ZTogMixcbiAgICBcInR1ZS5cIjogMixcbiAgICB3ZWRuZXNkYXk6IDMsXG4gICAgd2VkOiAzLFxuICAgIFwid2VkLlwiOiAzLFxuICAgIHRodXJzZGF5OiA0LFxuICAgIHRodXJzOiA0LFxuICAgIFwidGh1cnMuXCI6IDQsXG4gICAgdGh1cjogNCxcbiAgICBcInRodXIuXCI6IDQsXG4gICAgdGh1OiA0LFxuICAgIFwidGh1LlwiOiA0LFxuICAgIGZyaWRheTogNSxcbiAgICBmcmk6IDUsXG4gICAgXCJmcmkuXCI6IDUsXG4gICAgc2F0dXJkYXk6IDYsXG4gICAgc2F0OiA2LFxuICAgIFwic2F0LlwiOiA2LFxufTtcblxuZXhwb3J0IGNvbnN0IEZVTExfTU9OVEhfTkFNRV9ESUNUSU9OQVJZOiB7IFt3b3JkOiBzdHJpbmddOiBudW1iZXIgfSA9IHtcbiAgICBqYW51YXJ5OiAxLFxuICAgIGZlYnJ1YXJ5OiAyLFxuICAgIG1hcmNoOiAzLFxuICAgIGFwcmlsOiA0LFxuICAgIG1heTogNSxcbiAgICBqdW5lOiA2LFxuICAgIGp1bHk6IDcsXG4gICAgYXVndXN0OiA4LFxuICAgIHNlcHRlbWJlcjogOSxcbiAgICBvY3RvYmVyOiAxMCxcbiAgICBub3ZlbWJlcjogMTEsXG4gICAgZGVjZW1iZXI6IDEyLFxufTtcblxuZXhwb3J0IGNvbnN0IE1PTlRIX0RJQ1RJT05BUlk6IHsgW3dvcmQ6IHN0cmluZ106IG51bWJlciB9ID0ge1xuICAgIC4uLkZVTExfTU9OVEhfTkFNRV9ESUNUSU9OQVJZLFxuICAgIGphbjogMSxcbiAgICBcImphbi5cIjogMSxcbiAgICBmZWI6IDIsXG4gICAgXCJmZWIuXCI6IDIsXG4gICAgbWFyOiAzLFxuICAgIFwibWFyLlwiOiAzLFxuICAgIGFwcjogNCxcbiAgICBcImFwci5cIjogNCxcbiAgICBqdW46IDYsXG4gICAgXCJqdW4uXCI6IDYsXG4gICAganVsOiA3LFxuICAgIFwianVsLlwiOiA3LFxuICAgIGF1ZzogOCxcbiAgICBcImF1Zy5cIjogOCxcbiAgICBzZXA6IDksXG4gICAgXCJzZXAuXCI6IDksXG4gICAgc2VwdDogOSxcbiAgICBcInNlcHQuXCI6IDksXG4gICAgb2N0OiAxMCxcbiAgICBcIm9jdC5cIjogMTAsXG4gICAgbm92OiAxMSxcbiAgICBcIm5vdi5cIjogMTEsXG4gICAgZGVjOiAxMixcbiAgICBcImRlYy5cIjogMTIsXG59O1xuXG5leHBvcnQgY29uc3QgSU5URUdFUl9XT1JEX0RJQ1RJT05BUlk6IHsgW3dvcmQ6IHN0cmluZ106IG51bWJlciB9ID0ge1xuICAgIG9uZTogMSxcbiAgICB0d286IDIsXG4gICAgdGhyZWU6IDMsXG4gICAgZm91cjogNCxcbiAgICBmaXZlOiA1LFxuICAgIHNpeDogNixcbiAgICBzZXZlbjogNyxcbiAgICBlaWdodDogOCxcbiAgICBuaW5lOiA5LFxuICAgIHRlbjogMTAsXG4gICAgZWxldmVuOiAxMSxcbiAgICB0d2VsdmU6IDEyLFxufTtcblxuZXhwb3J0IGNvbnN0IE9SRElOQUxfV09SRF9ESUNUSU9OQVJZOiB7IFt3b3JkOiBzdHJpbmddOiBudW1iZXIgfSA9IHtcbiAgICBmaXJzdDogMSxcbiAgICBzZWNvbmQ6IDIsXG4gICAgdGhpcmQ6IDMsXG4gICAgZm91cnRoOiA0LFxuICAgIGZpZnRoOiA1LFxuICAgIHNpeHRoOiA2LFxuICAgIHNldmVudGg6IDcsXG4gICAgZWlnaHRoOiA4LFxuICAgIG5pbnRoOiA5LFxuICAgIHRlbnRoOiAxMCxcbiAgICBlbGV2ZW50aDogMTEsXG4gICAgdHdlbGZ0aDogMTIsXG4gICAgdGhpcnRlZW50aDogMTMsXG4gICAgZm91cnRlZW50aDogMTQsXG4gICAgZmlmdGVlbnRoOiAxNSxcbiAgICBzaXh0ZWVudGg6IDE2LFxuICAgIHNldmVudGVlbnRoOiAxNyxcbiAgICBlaWdodGVlbnRoOiAxOCxcbiAgICBuaW5ldGVlbnRoOiAxOSxcbiAgICB0d2VudGlldGg6IDIwLFxuICAgIFwidHdlbnR5IGZpcnN0XCI6IDIxLFxuICAgIFwidHdlbnR5LWZpcnN0XCI6IDIxLFxuICAgIFwidHdlbnR5IHNlY29uZFwiOiAyMixcbiAgICBcInR3ZW50eS1zZWNvbmRcIjogMjIsXG4gICAgXCJ0d2VudHkgdGhpcmRcIjogMjMsXG4gICAgXCJ0d2VudHktdGhpcmRcIjogMjMsXG4gICAgXCJ0d2VudHkgZm91cnRoXCI6IDI0LFxuICAgIFwidHdlbnR5LWZvdXJ0aFwiOiAyNCxcbiAgICBcInR3ZW50eSBmaWZ0aFwiOiAyNSxcbiAgICBcInR3ZW50eS1maWZ0aFwiOiAyNSxcbiAgICBcInR3ZW50eSBzaXh0aFwiOiAyNixcbiAgICBcInR3ZW50eS1zaXh0aFwiOiAyNixcbiAgICBcInR3ZW50eSBzZXZlbnRoXCI6IDI3LFxuICAgIFwidHdlbnR5LXNldmVudGhcIjogMjcsXG4gICAgXCJ0d2VudHkgZWlnaHRoXCI6IDI4LFxuICAgIFwidHdlbnR5LWVpZ2h0aFwiOiAyOCxcbiAgICBcInR3ZW50eSBuaW50aFwiOiAyOSxcbiAgICBcInR3ZW50eS1uaW50aFwiOiAyOSxcbiAgICBcInRoaXJ0aWV0aFwiOiAzMCxcbiAgICBcInRoaXJ0eSBmaXJzdFwiOiAzMSxcbiAgICBcInRoaXJ0eS1maXJzdFwiOiAzMSxcbn07XG5cbmV4cG9ydCBjb25zdCBUSU1FX1VOSVRfRElDVElPTkFSWV9OT19BQkJSOiB7IFt3b3JkOiBzdHJpbmddOiBPcFVuaXRUeXBlIHwgUVVuaXRUeXBlIH0gPSB7XG4gICAgc2Vjb25kOiBcInNlY29uZFwiLFxuICAgIHNlY29uZHM6IFwic2Vjb25kXCIsXG4gICAgbWludXRlOiBcIm1pbnV0ZVwiLFxuICAgIG1pbnV0ZXM6IFwibWludXRlXCIsXG4gICAgaG91cjogXCJob3VyXCIsXG4gICAgaG91cnM6IFwiaG91clwiLFxuICAgIGRheTogXCJkXCIsXG4gICAgZGF5czogXCJkXCIsXG4gICAgd2VlazogXCJ3ZWVrXCIsXG4gICAgd2Vla3M6IFwid2Vla1wiLFxuICAgIG1vbnRoOiBcIm1vbnRoXCIsXG4gICAgbW9udGhzOiBcIm1vbnRoXCIsXG4gICAgcXVhcnRlcjogXCJxdWFydGVyXCIsXG4gICAgcXVhcnRlcnM6IFwicXVhcnRlclwiLFxuICAgIHllYXI6IFwieWVhclwiLFxuICAgIHllYXJzOiBcInllYXJcIixcbn07XG5cbmV4cG9ydCBjb25zdCBUSU1FX1VOSVRfRElDVElPTkFSWTogeyBbd29yZDogc3RyaW5nXTogT3BVbml0VHlwZSB8IFFVbml0VHlwZSB9ID0ge1xuICAgIHM6IFwic2Vjb25kXCIsXG4gICAgc2VjOiBcInNlY29uZFwiLFxuICAgIHNlY29uZDogXCJzZWNvbmRcIixcbiAgICBzZWNvbmRzOiBcInNlY29uZFwiLFxuICAgIG06IFwibWludXRlXCIsXG4gICAgbWluOiBcIm1pbnV0ZVwiLFxuICAgIG1pbnM6IFwibWludXRlXCIsXG4gICAgbWludXRlOiBcIm1pbnV0ZVwiLFxuICAgIG1pbnV0ZXM6IFwibWludXRlXCIsXG4gICAgaDogXCJob3VyXCIsXG4gICAgaHI6IFwiaG91clwiLFxuICAgIGhyczogXCJob3VyXCIsXG4gICAgaG91cjogXCJob3VyXCIsXG4gICAgaG91cnM6IFwiaG91clwiLFxuICAgIGQ6IFwiZFwiLFxuICAgIGRheTogXCJkXCIsXG4gICAgZGF5czogXCJkXCIsXG4gICAgdzogXCJ3XCIsXG4gICAgd2VlazogXCJ3ZWVrXCIsXG4gICAgd2Vla3M6IFwid2Vla1wiLFxuICAgIG1vOiBcIm1vbnRoXCIsXG4gICAgbW9uOiBcIm1vbnRoXCIsXG4gICAgbW9zOiBcIm1vbnRoXCIsXG4gICAgbW9udGg6IFwibW9udGhcIixcbiAgICBtb250aHM6IFwibW9udGhcIixcbiAgICBxdHI6IFwicXVhcnRlclwiLFxuICAgIHF1YXJ0ZXI6IFwicXVhcnRlclwiLFxuICAgIHF1YXJ0ZXJzOiBcInF1YXJ0ZXJcIixcbiAgICB5OiBcInllYXJcIixcbiAgICB5cjogXCJ5ZWFyXCIsXG4gICAgeWVhcjogXCJ5ZWFyXCIsXG4gICAgeWVhcnM6IFwieWVhclwiLFxuICAgIC8vIEFsc28sIG1lcmdlIHRoZSBlbnRyaWVzIGZyb20gdGhlIGZ1bGwtbmFtZSBkaWN0aW9uYXJ5LlxuICAgIC8vIFdlIGxlYXZlIHRoZSBkdXBsaWNhdGVkIGVudHJpZXMgZm9yIHJlYWRhYmlsaXR5LlxuICAgIC4uLlRJTUVfVU5JVF9ESUNUSU9OQVJZX05PX0FCQlIsXG59O1xuXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbmV4cG9ydCBjb25zdCBOVU1CRVJfUEFUVEVSTiA9IGAoPzoke21hdGNoQW55UGF0dGVybihcbiAgICBJTlRFR0VSX1dPUkRfRElDVElPTkFSWVxuKX18WzAtOV0rfFswLTldK1xcXFwuWzAtOV0rfGhhbGYoPzpcXFxcc3swLDJ9YW4/KT98YW4/XFxcXGIoPzpcXFxcc3swLDJ9ZmV3KT98ZmV3fHNldmVyYWx8dGhlfGE/XFxcXHN7MCwyfWNvdXBsZVxcXFxzezAsMn0oPzpvZik/KWA7XG5cbmV4cG9ydCBmdW5jdGlvbiBwYXJzZU51bWJlclBhdHRlcm4obWF0Y2g6IHN0cmluZyk6IG51bWJlciB7XG4gICAgY29uc3QgbnVtID0gbWF0Y2gudG9Mb3dlckNhc2UoKTtcbiAgICBpZiAoSU5URUdFUl9XT1JEX0RJQ1RJT05BUllbbnVtXSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHJldHVybiBJTlRFR0VSX1dPUkRfRElDVElPTkFSWVtudW1dO1xuICAgIH0gZWxzZSBpZiAobnVtID09PSBcImFcIiB8fCBudW0gPT09IFwiYW5cIiB8fCBudW0gPT0gXCJ0aGVcIikge1xuICAgICAgICByZXR1cm4gMTtcbiAgICB9IGVsc2UgaWYgKG51bS5tYXRjaCgvZmV3LykpIHtcbiAgICAgICAgcmV0dXJuIDM7XG4gICAgfSBlbHNlIGlmIChudW0ubWF0Y2goL2hhbGYvKSkge1xuICAgICAgICByZXR1cm4gMC41O1xuICAgIH0gZWxzZSBpZiAobnVtLm1hdGNoKC9jb3VwbGUvKSkge1xuICAgICAgICByZXR1cm4gMjtcbiAgICB9IGVsc2UgaWYgKG51bS5tYXRjaCgvc2V2ZXJhbC8pKSB7XG4gICAgICAgIHJldHVybiA3O1xuICAgIH1cblxuICAgIHJldHVybiBwYXJzZUZsb2F0KG51bSk7XG59XG5cbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuZXhwb3J0IGNvbnN0IE9SRElOQUxfTlVNQkVSX1BBVFRFUk4gPSBgKD86JHttYXRjaEFueVBhdHRlcm4oT1JESU5BTF9XT1JEX0RJQ1RJT05BUlkpfXxbMC05XXsxLDJ9KD86c3R8bmR8cmR8dGgpPylgO1xuZXhwb3J0IGZ1bmN0aW9uIHBhcnNlT3JkaW5hbE51bWJlclBhdHRlcm4obWF0Y2g6IHN0cmluZyk6IG51bWJlciB7XG4gICAgbGV0IG51bSA9IG1hdGNoLnRvTG93ZXJDYXNlKCk7XG4gICAgaWYgKE9SRElOQUxfV09SRF9ESUNUSU9OQVJZW251bV0gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICByZXR1cm4gT1JESU5BTF9XT1JEX0RJQ1RJT05BUllbbnVtXTtcbiAgICB9XG5cbiAgICBudW0gPSBudW0ucmVwbGFjZSgvKD86c3R8bmR8cmR8dGgpJC9pLCBcIlwiKTtcbiAgICByZXR1cm4gcGFyc2VJbnQobnVtKTtcbn1cblxuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG5leHBvcnQgY29uc3QgWUVBUl9QQVRURVJOID0gYCg/OlsxLTldWzAtOV17MCwzfVxcXFxzezAsMn0oPzpCRXxBRHxCQ3xCQ0V8Q0UpfFsxLTJdWzAtOV17M318WzUtOV1bMC05XXwyWzAtNV0pYDtcbmV4cG9ydCBmdW5jdGlvbiBwYXJzZVllYXIobWF0Y2g6IHN0cmluZyk6IG51bWJlciB7XG4gICAgaWYgKC9CRS9pLnRlc3QobWF0Y2gpKSB7XG4gICAgICAgIC8vIEJ1ZGRoaXN0IEVyYVxuICAgICAgICBtYXRjaCA9IG1hdGNoLnJlcGxhY2UoL0JFL2ksIFwiXCIpO1xuICAgICAgICByZXR1cm4gcGFyc2VJbnQobWF0Y2gpIC0gNTQzO1xuICAgIH1cblxuICAgIGlmICgvQkNFPy9pLnRlc3QobWF0Y2gpKSB7XG4gICAgICAgIC8vIEJlZm9yZSBDaHJpc3QsIEJlZm9yZSBDb21tb24gRXJhXG4gICAgICAgIG1hdGNoID0gbWF0Y2gucmVwbGFjZSgvQkNFPy9pLCBcIlwiKTtcbiAgICAgICAgcmV0dXJuIC1wYXJzZUludChtYXRjaCk7XG4gICAgfVxuXG4gICAgaWYgKC8oQUR8Q0UpL2kudGVzdChtYXRjaCkpIHtcbiAgICAgICAgLy8gQW5ubyBEb21pbmksIENvbW1vbiBFcmFcbiAgICAgICAgbWF0Y2ggPSBtYXRjaC5yZXBsYWNlKC8oQUR8Q0UpL2ksIFwiXCIpO1xuICAgICAgICByZXR1cm4gcGFyc2VJbnQobWF0Y2gpO1xuICAgIH1cblxuICAgIGNvbnN0IHJhd1llYXJOdW1iZXIgPSBwYXJzZUludChtYXRjaCk7XG4gICAgcmV0dXJuIGZpbmRNb3N0TGlrZWx5QURZZWFyKHJhd1llYXJOdW1iZXIpO1xufVxuXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbmNvbnN0IFNJTkdMRV9USU1FX1VOSVRfUEFUVEVSTiA9IGAoJHtOVU1CRVJfUEFUVEVSTn0pXFxcXHN7MCwzfSgke21hdGNoQW55UGF0dGVybihUSU1FX1VOSVRfRElDVElPTkFSWSl9KWA7XG5jb25zdCBTSU5HTEVfVElNRV9VTklUX1JFR0VYID0gbmV3IFJlZ0V4cChTSU5HTEVfVElNRV9VTklUX1BBVFRFUk4sIFwiaVwiKTtcblxuY29uc3QgU0lOR0xFX1RJTUVfVU5JVF9OT19BQkJSX1BBVFRFUk4gPSBgKCR7TlVNQkVSX1BBVFRFUk59KVxcXFxzezAsM30oJHttYXRjaEFueVBhdHRlcm4oXG4gICAgVElNRV9VTklUX0RJQ1RJT05BUllfTk9fQUJCUlxuKX0pYDtcblxuY29uc3QgVElNRV9VTklUX0NPTk5FQ1RPUl9QQVRURVJOID0gYFxcXFxzezAsNX0sPyg/OlxcXFxzKmFuZCk/XFxcXHN7MCw1fWA7XG5cbmV4cG9ydCBjb25zdCBUSU1FX1VOSVRTX1BBVFRFUk4gPSByZXBlYXRlZFRpbWV1bml0UGF0dGVybihcbiAgICBgKD86KD86YWJvdXR8YXJvdW5kKVxcXFxzezAsM30pP2AsXG4gICAgU0lOR0xFX1RJTUVfVU5JVF9QQVRURVJOLFxuICAgIFRJTUVfVU5JVF9DT05ORUNUT1JfUEFUVEVSTlxuKTtcbmV4cG9ydCBjb25zdCBUSU1FX1VOSVRTX05PX0FCQlJfUEFUVEVSTiA9IHJlcGVhdGVkVGltZXVuaXRQYXR0ZXJuKFxuICAgIGAoPzooPzphYm91dHxhcm91bmQpXFxcXHN7MCwzfSk/YCxcbiAgICBTSU5HTEVfVElNRV9VTklUX05PX0FCQlJfUEFUVEVSTixcbiAgICBUSU1FX1VOSVRfQ09OTkVDVE9SX1BBVFRFUk5cbik7XG5cbmV4cG9ydCBmdW5jdGlvbiBwYXJzZVRpbWVVbml0cyh0aW1ldW5pdFRleHQpOiBudWxsIHwgVGltZVVuaXRzIHtcbiAgICBjb25zdCBmcmFnbWVudHMgPSB7fTtcbiAgICBsZXQgcmVtYWluaW5nVGV4dCA9IHRpbWV1bml0VGV4dDtcbiAgICBsZXQgbWF0Y2ggPSBTSU5HTEVfVElNRV9VTklUX1JFR0VYLmV4ZWMocmVtYWluaW5nVGV4dCk7XG4gICAgd2hpbGUgKG1hdGNoKSB7XG4gICAgICAgIGNvbGxlY3REYXRlVGltZUZyYWdtZW50KGZyYWdtZW50cywgbWF0Y2gpO1xuICAgICAgICByZW1haW5pbmdUZXh0ID0gcmVtYWluaW5nVGV4dC5zdWJzdHJpbmcobWF0Y2hbMF0ubGVuZ3RoKS50cmltKCk7XG4gICAgICAgIG1hdGNoID0gU0lOR0xFX1RJTUVfVU5JVF9SRUdFWC5leGVjKHJlbWFpbmluZ1RleHQpO1xuICAgIH1cbiAgICBpZiAoT2JqZWN0LmtleXMoZnJhZ21lbnRzKS5sZW5ndGggPT0gMCkge1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgcmV0dXJuIGZyYWdtZW50cztcbn1cblxuZnVuY3Rpb24gY29sbGVjdERhdGVUaW1lRnJhZ21lbnQoZnJhZ21lbnRzLCBtYXRjaCkge1xuICAgIGlmIChtYXRjaFswXS5tYXRjaCgvXlthLXpBLVpdKyQvKSkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IG51bSA9IHBhcnNlTnVtYmVyUGF0dGVybihtYXRjaFsxXSk7XG4gICAgY29uc3QgdW5pdCA9IFRJTUVfVU5JVF9ESUNUSU9OQVJZW21hdGNoWzJdLnRvTG93ZXJDYXNlKCldO1xuICAgIGZyYWdtZW50c1t1bml0XSA9IG51bTtcbn1cbiIsICJpbXBvcnQgeyBQYXJzZXIsIFBhcnNpbmdDb250ZXh0IH0gZnJvbSBcIi4uLy4uL2Nocm9ub1wiO1xuaW1wb3J0IHsgUGFyc2luZ0NvbXBvbmVudHMsIFBhcnNpbmdSZXN1bHQgfSBmcm9tIFwiLi4vLi4vcmVzdWx0c1wiO1xuaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSBcIi4uLy4uL3R5cGVzXCI7XG5cbi8qKlxuICogQSBwYXJzZXIgdGhhdCBjaGVja3MgZm9yIHdvcmQgYm91bmRhcnkgYW5kIGFwcGx5aW5nIHRoZSBpbm5lciBwYXR0ZXJuIGFuZCBleHRyYWN0aW9uLlxuICovXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgQWJzdHJhY3RQYXJzZXJXaXRoV29yZEJvdW5kYXJ5Q2hlY2tpbmcgaW1wbGVtZW50cyBQYXJzZXIge1xuICAgIGFic3RyYWN0IGlubmVyUGF0dGVybihjb250ZXh0OiBQYXJzaW5nQ29udGV4dCk6IFJlZ0V4cDtcbiAgICBhYnN0cmFjdCBpbm5lckV4dHJhY3QoXG4gICAgICAgIGNvbnRleHQ6IFBhcnNpbmdDb250ZXh0LFxuICAgICAgICBtYXRjaDogUmVnRXhwTWF0Y2hBcnJheVxuICAgICk6IFBhcnNpbmdDb21wb25lbnRzIHwgUGFyc2luZ1Jlc3VsdCB8IHsgW2MgaW4gQ29tcG9uZW50XT86IG51bWJlciB9IHwgbnVsbDtcblxuICAgIC8vIE92ZXJyaWRlcyB0aGlzIG1ldGhvZCBpZiB0aGVyZSBpcyBtb3JlIGVmZmljaWVudCB3YXkgdG8gY2hlY2sgZm9yIGlubmVyIHBhdHRlcm4gY2hhbmdlLlxuICAgIGlubmVyUGF0dGVybkhhc0NoYW5nZShjb250ZXh0OiBQYXJzaW5nQ29udGV4dCwgY3VycmVudElubmVyUGF0dGVybjogUmVnRXhwKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiB0aGlzLmlubmVyUGF0dGVybihjb250ZXh0KSAhPT0gY3VycmVudElubmVyUGF0dGVybjtcbiAgICB9XG5cbiAgICBwYXR0ZXJuTGVmdEJvdW5kYXJ5KCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiBgKFxcXFxXfF4pYDtcbiAgICB9XG5cbiAgICBwcml2YXRlIGNhY2hlZElubmVyUGF0dGVybj86IFJlZ0V4cCA9IG51bGw7XG4gICAgcHJpdmF0ZSBjYWNoZWRQYXR0ZXJuPzogUmVnRXhwID0gbnVsbDtcblxuICAgIHBhdHRlcm4oY29udGV4dDogUGFyc2luZ0NvbnRleHQpOiBSZWdFeHAge1xuICAgICAgICBpZiAodGhpcy5jYWNoZWRJbm5lclBhdHRlcm4pIHtcbiAgICAgICAgICAgIGlmICghdGhpcy5pbm5lclBhdHRlcm5IYXNDaGFuZ2UoY29udGV4dCwgdGhpcy5jYWNoZWRJbm5lclBhdHRlcm4pKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuY2FjaGVkUGF0dGVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB0aGlzLmNhY2hlZElubmVyUGF0dGVybiA9IHRoaXMuaW5uZXJQYXR0ZXJuKGNvbnRleHQpO1xuICAgICAgICB0aGlzLmNhY2hlZFBhdHRlcm4gPSBuZXcgUmVnRXhwKFxuICAgICAgICAgICAgYCR7dGhpcy5wYXR0ZXJuTGVmdEJvdW5kYXJ5KCl9JHt0aGlzLmNhY2hlZElubmVyUGF0dGVybi5zb3VyY2V9YCxcbiAgICAgICAgICAgIHRoaXMuY2FjaGVkSW5uZXJQYXR0ZXJuLmZsYWdzXG4gICAgICAgICk7XG4gICAgICAgIHJldHVybiB0aGlzLmNhY2hlZFBhdHRlcm47XG4gICAgfVxuXG4gICAgZXh0cmFjdChjb250ZXh0OiBQYXJzaW5nQ29udGV4dCwgbWF0Y2g6IFJlZ0V4cE1hdGNoQXJyYXkpIHtcbiAgICAgICAgY29uc3QgaGVhZGVyID0gbWF0Y2hbMV0gPz8gXCJcIjtcbiAgICAgICAgbWF0Y2guaW5kZXggPSBtYXRjaC5pbmRleCArIGhlYWRlci5sZW5ndGg7XG4gICAgICAgIG1hdGNoWzBdID0gbWF0Y2hbMF0uc3Vic3RyaW5nKGhlYWRlci5sZW5ndGgpO1xuICAgICAgICBmb3IgKGxldCBpID0gMjsgaSA8IG1hdGNoLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBtYXRjaFtpIC0gMV0gPSBtYXRjaFtpXTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0aGlzLmlubmVyRXh0cmFjdChjb250ZXh0LCBtYXRjaCk7XG4gICAgfVxufVxuIiwgImltcG9ydCB7IFRJTUVfVU5JVFNfUEFUVEVSTiwgcGFyc2VUaW1lVW5pdHMsIFRJTUVfVU5JVFNfTk9fQUJCUl9QQVRURVJOIH0gZnJvbSBcIi4uL2NvbnN0YW50c1wiO1xuaW1wb3J0IHsgUGFyc2luZ0NvbnRleHQgfSBmcm9tIFwiLi4vLi4vLi4vY2hyb25vXCI7XG5pbXBvcnQgeyBQYXJzaW5nQ29tcG9uZW50cyB9IGZyb20gXCIuLi8uLi8uLi9yZXN1bHRzXCI7XG5pbXBvcnQgeyBBYnN0cmFjdFBhcnNlcldpdGhXb3JkQm91bmRhcnlDaGVja2luZyB9IGZyb20gXCIuLi8uLi8uLi9jb21tb24vcGFyc2Vycy9BYnN0cmFjdFBhcnNlcldpdGhXb3JkQm91bmRhcnlcIjtcblxuY29uc3QgUEFUVEVSTl9XSVRIX09QVElPTkFMX1BSRUZJWCA9IG5ldyBSZWdFeHAoXG4gICAgYCg/Oig/OndpdGhpbnxpbnxmb3IpXFxcXHMqKT9gICtcbiAgICAgICAgYCg/Oig/OmFib3V0fGFyb3VuZHxyb3VnaGx5fGFwcHJveGltYXRlbHl8anVzdClcXFxccyooPzp+XFxcXHMqKT8pPygke1RJTUVfVU5JVFNfUEFUVEVSTn0pKD89XFxcXFd8JClgLFxuICAgIFwiaVwiXG4pO1xuXG5jb25zdCBQQVRURVJOX1dJVEhfUFJFRklYID0gbmV3IFJlZ0V4cChcbiAgICBgKD86d2l0aGlufGlufGZvcilcXFxccypgICtcbiAgICAgICAgYCg/Oig/OmFib3V0fGFyb3VuZHxyb3VnaGx5fGFwcHJveGltYXRlbHl8anVzdClcXFxccyooPzp+XFxcXHMqKT8pPygke1RJTUVfVU5JVFNfUEFUVEVSTn0pKD89XFxcXFd8JClgLFxuICAgIFwiaVwiXG4pO1xuXG5jb25zdCBQQVRURVJOX1dJVEhfUFJFRklYX1NUUklDVCA9IG5ldyBSZWdFeHAoXG4gICAgYCg/OndpdGhpbnxpbnxmb3IpXFxcXHMqYCArXG4gICAgICAgIGAoPzooPzphYm91dHxhcm91bmR8cm91Z2hseXxhcHByb3hpbWF0ZWx5fGp1c3QpXFxcXHMqKD86flxcXFxzKik/KT8oJHtUSU1FX1VOSVRTX05PX0FCQlJfUEFUVEVSTn0pKD89XFxcXFd8JClgLFxuICAgIFwiaVwiXG4pO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBFTlRpbWVVbml0V2l0aGluRm9ybWF0UGFyc2VyIGV4dGVuZHMgQWJzdHJhY3RQYXJzZXJXaXRoV29yZEJvdW5kYXJ5Q2hlY2tpbmcge1xuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgc3RyaWN0TW9kZTogYm9vbGVhbikge1xuICAgICAgICBzdXBlcigpO1xuICAgIH1cblxuICAgIGlubmVyUGF0dGVybihjb250ZXh0OiBQYXJzaW5nQ29udGV4dCk6IFJlZ0V4cCB7XG4gICAgICAgIGlmICh0aGlzLnN0cmljdE1vZGUpIHtcbiAgICAgICAgICAgIHJldHVybiBQQVRURVJOX1dJVEhfUFJFRklYX1NUUklDVDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gY29udGV4dC5vcHRpb24uZm9yd2FyZERhdGUgPyBQQVRURVJOX1dJVEhfT1BUSU9OQUxfUFJFRklYIDogUEFUVEVSTl9XSVRIX1BSRUZJWDtcbiAgICB9XG5cbiAgICBpbm5lckV4dHJhY3QoY29udGV4dDogUGFyc2luZ0NvbnRleHQsIG1hdGNoOiBSZWdFeHBNYXRjaEFycmF5KSB7XG4gICAgICAgIC8vIEV4Y2x1ZGUgXCJmb3IgdGhlIHVuaXRcIiBwaGFzZXMsIGUuZy4gXCJmb3IgdGhlIHllYXJcIlxuICAgICAgICBpZiAobWF0Y2hbMF0ubWF0Y2goL15mb3JcXHMqdGhlXFxzKlxcdysvKSkge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgdGltZVVuaXRzID0gcGFyc2VUaW1lVW5pdHMobWF0Y2hbMV0pO1xuICAgICAgICBpZiAoIXRpbWVVbml0cykge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIFBhcnNpbmdDb21wb25lbnRzLmNyZWF0ZVJlbGF0aXZlRnJvbVJlZmVyZW5jZShjb250ZXh0LnJlZmVyZW5jZSwgdGltZVVuaXRzKTtcbiAgICB9XG59XG4iLCAiaW1wb3J0IHsgUGFyc2luZ0NvbnRleHQgfSBmcm9tIFwiLi4vLi4vLi4vY2hyb25vXCI7XG5pbXBvcnQgeyBQYXJzaW5nUmVzdWx0IH0gZnJvbSBcIi4uLy4uLy4uL3Jlc3VsdHNcIjtcbmltcG9ydCB7IGZpbmRZZWFyQ2xvc2VzdFRvUmVmIH0gZnJvbSBcIi4uLy4uLy4uL2NhbGN1bGF0aW9uL3llYXJzXCI7XG5pbXBvcnQgeyBNT05USF9ESUNUSU9OQVJZIH0gZnJvbSBcIi4uL2NvbnN0YW50c1wiO1xuaW1wb3J0IHsgWUVBUl9QQVRURVJOLCBwYXJzZVllYXIgfSBmcm9tIFwiLi4vY29uc3RhbnRzXCI7XG5pbXBvcnQgeyBPUkRJTkFMX05VTUJFUl9QQVRURVJOLCBwYXJzZU9yZGluYWxOdW1iZXJQYXR0ZXJuIH0gZnJvbSBcIi4uL2NvbnN0YW50c1wiO1xuaW1wb3J0IHsgbWF0Y2hBbnlQYXR0ZXJuIH0gZnJvbSBcIi4uLy4uLy4uL3V0aWxzL3BhdHRlcm5cIjtcbmltcG9ydCB7IEFic3RyYWN0UGFyc2VyV2l0aFdvcmRCb3VuZGFyeUNoZWNraW5nIH0gZnJvbSBcIi4uLy4uLy4uL2NvbW1vbi9wYXJzZXJzL0Fic3RyYWN0UGFyc2VyV2l0aFdvcmRCb3VuZGFyeVwiO1xuXG4vLyBwcmV0dGllci1pZ25vcmVcbmNvbnN0IFBBVFRFUk4gPSBuZXcgUmVnRXhwKFxuICAgIGAoPzpvblxcXFxzezAsM30pP2AgK1xuICAgICAgICBgKCR7T1JESU5BTF9OVU1CRVJfUEFUVEVSTn0pYCArXG4gICAgICAgIGAoPzpgICtcbiAgICAgICAgICAgIGBcXFxcc3swLDN9KD86dG98XFxcXC18XFxcXFx1MjAxM3x1bnRpbHx0aHJvdWdofHRpbGwpP1xcXFxzezAsM31gICtcbiAgICAgICAgICAgIGAoJHtPUkRJTkFMX05VTUJFUl9QQVRURVJOfSlgICtcbiAgICAgICAgXCIpP1wiICtcbiAgICAgICAgYCg/Oi18L3xcXFxcc3swLDN9KD86b2YpP1xcXFxzezAsM30pYCArXG4gICAgICAgIGAoJHttYXRjaEFueVBhdHRlcm4oTU9OVEhfRElDVElPTkFSWSl9KWAgK1xuICAgICAgICBcIig/OlwiICtcbiAgICAgICAgICAgIGAoPzotfC98LD9cXFxcc3swLDN9KWAgK1xuICAgICAgICAgICAgYCgke1lFQVJfUEFUVEVSTn0oPyFcXFxcdykpYCArXG4gICAgICAgIFwiKT9cIiArXG4gICAgICAgIFwiKD89XFxcXFd8JClcIixcbiAgICBcImlcIlxuKTtcblxuY29uc3QgREFURV9HUk9VUCA9IDE7XG5jb25zdCBEQVRFX1RPX0dST1VQID0gMjtcbmNvbnN0IE1PTlRIX05BTUVfR1JPVVAgPSAzO1xuY29uc3QgWUVBUl9HUk9VUCA9IDQ7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEVOTW9udGhOYW1lTGl0dGxlRW5kaWFuUGFyc2VyIGV4dGVuZHMgQWJzdHJhY3RQYXJzZXJXaXRoV29yZEJvdW5kYXJ5Q2hlY2tpbmcge1xuICAgIGlubmVyUGF0dGVybigpOiBSZWdFeHAge1xuICAgICAgICByZXR1cm4gUEFUVEVSTjtcbiAgICB9XG5cbiAgICBpbm5lckV4dHJhY3QoY29udGV4dDogUGFyc2luZ0NvbnRleHQsIG1hdGNoOiBSZWdFeHBNYXRjaEFycmF5KTogUGFyc2luZ1Jlc3VsdCB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IGNvbnRleHQuY3JlYXRlUGFyc2luZ1Jlc3VsdChtYXRjaC5pbmRleCwgbWF0Y2hbMF0pO1xuXG4gICAgICAgIGNvbnN0IG1vbnRoID0gTU9OVEhfRElDVElPTkFSWVttYXRjaFtNT05USF9OQU1FX0dST1VQXS50b0xvd2VyQ2FzZSgpXTtcbiAgICAgICAgY29uc3QgZGF5ID0gcGFyc2VPcmRpbmFsTnVtYmVyUGF0dGVybihtYXRjaFtEQVRFX0dST1VQXSk7XG4gICAgICAgIGlmIChkYXkgPiAzMSkge1xuICAgICAgICAgICAgLy8gZS5nLiBcIls5NiBBdWddXCIgPT4gXCI5WzYgQXVnXVwiLCB3ZSBuZWVkIHRvIHNoaWZ0IGF3YXkgZnJvbSB0aGUgbmV4dCBudW1iZXJcbiAgICAgICAgICAgIG1hdGNoLmluZGV4ID0gbWF0Y2guaW5kZXggKyBtYXRjaFtEQVRFX0dST1VQXS5sZW5ndGg7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuXG4gICAgICAgIHJlc3VsdC5zdGFydC5hc3NpZ24oXCJtb250aFwiLCBtb250aCk7XG4gICAgICAgIHJlc3VsdC5zdGFydC5hc3NpZ24oXCJkYXlcIiwgZGF5KTtcblxuICAgICAgICBpZiAobWF0Y2hbWUVBUl9HUk9VUF0pIHtcbiAgICAgICAgICAgIGNvbnN0IHllYXJOdW1iZXIgPSBwYXJzZVllYXIobWF0Y2hbWUVBUl9HUk9VUF0pO1xuICAgICAgICAgICAgcmVzdWx0LnN0YXJ0LmFzc2lnbihcInllYXJcIiwgeWVhck51bWJlcik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb25zdCB5ZWFyID0gZmluZFllYXJDbG9zZXN0VG9SZWYoY29udGV4dC5yZWZEYXRlLCBkYXksIG1vbnRoKTtcbiAgICAgICAgICAgIHJlc3VsdC5zdGFydC5pbXBseShcInllYXJcIiwgeWVhcik7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAobWF0Y2hbREFURV9UT19HUk9VUF0pIHtcbiAgICAgICAgICAgIGNvbnN0IGVuZERhdGUgPSBwYXJzZU9yZGluYWxOdW1iZXJQYXR0ZXJuKG1hdGNoW0RBVEVfVE9fR1JPVVBdKTtcblxuICAgICAgICAgICAgcmVzdWx0LmVuZCA9IHJlc3VsdC5zdGFydC5jbG9uZSgpO1xuICAgICAgICAgICAgcmVzdWx0LmVuZC5hc3NpZ24oXCJkYXlcIiwgZW5kRGF0ZSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbn1cbiIsICJpbXBvcnQgeyBQYXJzaW5nQ29udGV4dCB9IGZyb20gXCIuLi8uLi8uLi9jaHJvbm9cIjtcbmltcG9ydCB7IGZpbmRZZWFyQ2xvc2VzdFRvUmVmIH0gZnJvbSBcIi4uLy4uLy4uL2NhbGN1bGF0aW9uL3llYXJzXCI7XG5pbXBvcnQgeyBNT05USF9ESUNUSU9OQVJZIH0gZnJvbSBcIi4uL2NvbnN0YW50c1wiO1xuaW1wb3J0IHsgT1JESU5BTF9OVU1CRVJfUEFUVEVSTiwgcGFyc2VPcmRpbmFsTnVtYmVyUGF0dGVybiB9IGZyb20gXCIuLi9jb25zdGFudHNcIjtcbmltcG9ydCB7IFlFQVJfUEFUVEVSTiwgcGFyc2VZZWFyIH0gZnJvbSBcIi4uL2NvbnN0YW50c1wiO1xuaW1wb3J0IHsgbWF0Y2hBbnlQYXR0ZXJuIH0gZnJvbSBcIi4uLy4uLy4uL3V0aWxzL3BhdHRlcm5cIjtcbmltcG9ydCB7IEFic3RyYWN0UGFyc2VyV2l0aFdvcmRCb3VuZGFyeUNoZWNraW5nIH0gZnJvbSBcIi4uLy4uLy4uL2NvbW1vbi9wYXJzZXJzL0Fic3RyYWN0UGFyc2VyV2l0aFdvcmRCb3VuZGFyeVwiO1xuXG4vLyBwcmV0dGllci1pZ25vcmVcbmNvbnN0IFBBVFRFUk4gPSBuZXcgUmVnRXhwKFxuICAgIGAoJHttYXRjaEFueVBhdHRlcm4oTU9OVEhfRElDVElPTkFSWSl9KWAgK1xuICAgICAgICBcIig/Oi18L3xcXFxccyosP1xcXFxzKilcIiArXG4gICAgICAgIGAoJHtPUkRJTkFMX05VTUJFUl9QQVRURVJOfSkoPyFcXFxccyooPzphbXxwbSkpXFxcXHMqYCArXG4gICAgICAgIFwiKD86XCIgK1xuICAgICAgICAgICAgXCIoPzp0b3xcXFxcLSlcXFxccypcIiArXG4gICAgICAgICAgICBgKCR7T1JESU5BTF9OVU1CRVJfUEFUVEVSTn0pXFxcXHMqYCArXG4gICAgICAgIFwiKT9cIiArXG4gICAgICAgIFwiKD86XCIgK1xuICAgICAgICAgICAgYCg/Oi18L3xcXFxccyosXFxcXHMqfFxcXFxzKylgICtcbiAgICAgICAgICAgIGAoJHtZRUFSX1BBVFRFUk59KWAgK1xuICAgICAgICBcIik/XCIgK1xuICAgICAgICBcIig/PVxcXFxXfCQpKD8hXFxcXDpcXFxcZClcIixcbiAgICBcImlcIlxuKTtcblxuY29uc3QgTU9OVEhfTkFNRV9HUk9VUCA9IDE7XG5jb25zdCBEQVRFX0dST1VQID0gMjtcbmNvbnN0IERBVEVfVE9fR1JPVVAgPSAzO1xuY29uc3QgWUVBUl9HUk9VUCA9IDQ7XG5cbi8qKlxuICogVGhlIHBhcnNlciBmb3IgcGFyc2luZyBVUydzIGRhdGUgZm9ybWF0IHRoYXQgYmVnaW4gd2l0aCBtb250aCdzIG5hbWUuXG4gKiAgLSBKYW51YXJ5IDEzXG4gKiAgLSBKYW51YXJ5IDEzLCAyMDEyXG4gKiAgLSBKYW51YXJ5IDEzIC0gMTUsIDIwMTJcbiAqIE5vdGU6IFdhdGNoIG91dCBmb3I6XG4gKiAgLSBKYW51YXJ5IDEyOjAwXG4gKiAgLSBKYW51YXJ5IDEyLjQ0XG4gKiAgLSBKYW51YXJ5IDEyMjIzNDRcbiAqICAtIEphbnVhcnkgMjEgKHdoZW4gc2hvdWxkU2tpcFllYXJMaWtlRGF0ZT10cnVlKVxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBFTk1vbnRoTmFtZU1pZGRsZUVuZGlhblBhcnNlciBleHRlbmRzIEFic3RyYWN0UGFyc2VyV2l0aFdvcmRCb3VuZGFyeUNoZWNraW5nIHtcbiAgICBzaG91bGRTa2lwWWVhckxpa2VEYXRlOiBib29sZWFuO1xuXG4gICAgY29uc3RydWN0b3Ioc2hvdWxkU2tpcFllYXJMaWtlRGF0ZTogYm9vbGVhbikge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLnNob3VsZFNraXBZZWFyTGlrZURhdGUgPSBzaG91bGRTa2lwWWVhckxpa2VEYXRlO1xuICAgIH1cblxuICAgIGlubmVyUGF0dGVybigpOiBSZWdFeHAge1xuICAgICAgICByZXR1cm4gUEFUVEVSTjtcbiAgICB9XG5cbiAgICBpbm5lckV4dHJhY3QoY29udGV4dDogUGFyc2luZ0NvbnRleHQsIG1hdGNoOiBSZWdFeHBNYXRjaEFycmF5KSB7XG4gICAgICAgIGNvbnN0IG1vbnRoID0gTU9OVEhfRElDVElPTkFSWVttYXRjaFtNT05USF9OQU1FX0dST1VQXS50b0xvd2VyQ2FzZSgpXTtcbiAgICAgICAgY29uc3QgZGF5ID0gcGFyc2VPcmRpbmFsTnVtYmVyUGF0dGVybihtYXRjaFtEQVRFX0dST1VQXSk7XG4gICAgICAgIGlmIChkYXkgPiAzMSkge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBTa2lwIHRoZSBjYXNlIHdoZXJlIHRoZSBkYXkgbG9va3MgbGlrZSBhIHllYXIgKGV4OiBKYW51YXJ5IDIxKVxuICAgICAgICBpZiAodGhpcy5zaG91bGRTa2lwWWVhckxpa2VEYXRlKSB7XG4gICAgICAgICAgICBpZiAoIW1hdGNoW0RBVEVfVE9fR1JPVVBdICYmICFtYXRjaFtZRUFSX0dST1VQXSAmJiBtYXRjaFtEQVRFX0dST1VQXS5tYXRjaCgvXjJbMC01XSQvKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGNvbXBvbmVudHMgPSBjb250ZXh0XG4gICAgICAgICAgICAuY3JlYXRlUGFyc2luZ0NvbXBvbmVudHMoe1xuICAgICAgICAgICAgICAgIGRheTogZGF5LFxuICAgICAgICAgICAgICAgIG1vbnRoOiBtb250aCxcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuYWRkVGFnKFwicGFyc2VyL0VOTW9udGhOYW1lTWlkZGxlRW5kaWFuUGFyc2VyXCIpO1xuXG4gICAgICAgIGlmIChtYXRjaFtZRUFSX0dST1VQXSkge1xuICAgICAgICAgICAgY29uc3QgeWVhciA9IHBhcnNlWWVhcihtYXRjaFtZRUFSX0dST1VQXSk7XG4gICAgICAgICAgICBjb21wb25lbnRzLmFzc2lnbihcInllYXJcIiwgeWVhcik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb25zdCB5ZWFyID0gZmluZFllYXJDbG9zZXN0VG9SZWYoY29udGV4dC5yZWZEYXRlLCBkYXksIG1vbnRoKTtcbiAgICAgICAgICAgIGNvbXBvbmVudHMuaW1wbHkoXCJ5ZWFyXCIsIHllYXIpO1xuICAgICAgICB9XG4gICAgICAgIGlmICghbWF0Y2hbREFURV9UT19HUk9VUF0pIHtcbiAgICAgICAgICAgIHJldHVybiBjb21wb25lbnRzO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gVGV4dCBjYW4gYmUgJ3JhbmdlJyB2YWx1ZS4gU3VjaCBhcyAnSmFudWFyeSAxMiAtIDEzLCAyMDEyJ1xuICAgICAgICBjb25zdCBlbmREYXRlID0gcGFyc2VPcmRpbmFsTnVtYmVyUGF0dGVybihtYXRjaFtEQVRFX1RPX0dST1VQXSk7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IGNvbnRleHQuY3JlYXRlUGFyc2luZ1Jlc3VsdChtYXRjaC5pbmRleCwgbWF0Y2hbMF0pO1xuICAgICAgICByZXN1bHQuc3RhcnQgPSBjb21wb25lbnRzO1xuICAgICAgICByZXN1bHQuZW5kID0gY29tcG9uZW50cy5jbG9uZSgpO1xuICAgICAgICByZXN1bHQuZW5kLmFzc2lnbihcImRheVwiLCBlbmREYXRlKTtcblxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbn1cbiIsICJpbXBvcnQgeyBGVUxMX01PTlRIX05BTUVfRElDVElPTkFSWSwgTU9OVEhfRElDVElPTkFSWSB9IGZyb20gXCIuLi9jb25zdGFudHNcIjtcbmltcG9ydCB7IFBhcnNpbmdDb250ZXh0IH0gZnJvbSBcIi4uLy4uLy4uL2Nocm9ub1wiO1xuaW1wb3J0IHsgZmluZFllYXJDbG9zZXN0VG9SZWYgfSBmcm9tIFwiLi4vLi4vLi4vY2FsY3VsYXRpb24veWVhcnNcIjtcbmltcG9ydCB7IG1hdGNoQW55UGF0dGVybiB9IGZyb20gXCIuLi8uLi8uLi91dGlscy9wYXR0ZXJuXCI7XG5pbXBvcnQgeyBZRUFSX1BBVFRFUk4sIHBhcnNlWWVhciB9IGZyb20gXCIuLi9jb25zdGFudHNcIjtcbmltcG9ydCB7IEFic3RyYWN0UGFyc2VyV2l0aFdvcmRCb3VuZGFyeUNoZWNraW5nIH0gZnJvbSBcIi4uLy4uLy4uL2NvbW1vbi9wYXJzZXJzL0Fic3RyYWN0UGFyc2VyV2l0aFdvcmRCb3VuZGFyeVwiO1xuXG5jb25zdCBQQVRURVJOID0gbmV3IFJlZ0V4cChcbiAgICBgKCg/OmluKVxcXFxzKik/YCArXG4gICAgICAgIGAoJHttYXRjaEFueVBhdHRlcm4oTU9OVEhfRElDVElPTkFSWSl9KWAgK1xuICAgICAgICBgXFxcXHMqYCArXG4gICAgICAgIGAoPzpgICtcbiAgICAgICAgYCg/Oix8LXxvZik/XFxcXHMqKCR7WUVBUl9QQVRURVJOfSk/YCArXG4gICAgICAgIFwiKT9cIiArXG4gICAgICAgIFwiKD89W15cXFxcc1xcXFx3XXxcXFxccytbXjAtOV18XFxcXHMrJHwkKVwiLFxuICAgIFwiaVwiXG4pO1xuXG5jb25zdCBQUkVGSVhfR1JPVVAgPSAxO1xuY29uc3QgTU9OVEhfTkFNRV9HUk9VUCA9IDI7XG5jb25zdCBZRUFSX0dST1VQID0gMztcblxuLyoqXG4gKiBUaGUgcGFyc2VyIGZvciBwYXJzaW5nIG1vbnRoIG5hbWUgYW5kIHllYXIuXG4gKiAtIEphbnVhcnksIDIwMTJcbiAqIC0gSmFudWFyeSAyMDEyXG4gKiAtIEphbnVhcnlcbiAqIChpbikgSmFuXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEVOTW9udGhOYW1lUGFyc2VyIGV4dGVuZHMgQWJzdHJhY3RQYXJzZXJXaXRoV29yZEJvdW5kYXJ5Q2hlY2tpbmcge1xuICAgIGlubmVyUGF0dGVybigpOiBSZWdFeHAge1xuICAgICAgICByZXR1cm4gUEFUVEVSTjtcbiAgICB9XG5cbiAgICBpbm5lckV4dHJhY3QoY29udGV4dDogUGFyc2luZ0NvbnRleHQsIG1hdGNoOiBSZWdFeHBNYXRjaEFycmF5KSB7XG4gICAgICAgIGNvbnN0IG1vbnRoTmFtZSA9IG1hdGNoW01PTlRIX05BTUVfR1JPVVBdLnRvTG93ZXJDYXNlKCk7XG5cbiAgICAgICAgLy8gc2tpcCBzb21lIHVubGlrZWx5IHdvcmRzIFwiamFuXCIsIFwibWFyXCIsIC4uXG4gICAgICAgIGlmIChtYXRjaFswXS5sZW5ndGggPD0gMyAmJiAhRlVMTF9NT05USF9OQU1FX0RJQ1RJT05BUllbbW9udGhOYW1lXSkge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCByZXN1bHQgPSBjb250ZXh0LmNyZWF0ZVBhcnNpbmdSZXN1bHQoXG4gICAgICAgICAgICBtYXRjaC5pbmRleCArIChtYXRjaFtQUkVGSVhfR1JPVVBdIHx8IFwiXCIpLmxlbmd0aCxcbiAgICAgICAgICAgIG1hdGNoLmluZGV4ICsgbWF0Y2hbMF0ubGVuZ3RoXG4gICAgICAgICk7XG4gICAgICAgIHJlc3VsdC5zdGFydC5pbXBseShcImRheVwiLCAxKTtcbiAgICAgICAgcmVzdWx0LnN0YXJ0LmFkZFRhZyhcInBhcnNlci9FTk1vbnRoTmFtZVBhcnNlclwiKTtcblxuICAgICAgICBjb25zdCBtb250aCA9IE1PTlRIX0RJQ1RJT05BUllbbW9udGhOYW1lXTtcbiAgICAgICAgcmVzdWx0LnN0YXJ0LmFzc2lnbihcIm1vbnRoXCIsIG1vbnRoKTtcblxuICAgICAgICBpZiAobWF0Y2hbWUVBUl9HUk9VUF0pIHtcbiAgICAgICAgICAgIGNvbnN0IHllYXIgPSBwYXJzZVllYXIobWF0Y2hbWUVBUl9HUk9VUF0pO1xuICAgICAgICAgICAgcmVzdWx0LnN0YXJ0LmFzc2lnbihcInllYXJcIiwgeWVhcik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb25zdCB5ZWFyID0gZmluZFllYXJDbG9zZXN0VG9SZWYoY29udGV4dC5yZWZEYXRlLCAxLCBtb250aCk7XG4gICAgICAgICAgICByZXN1bHQuc3RhcnQuaW1wbHkoXCJ5ZWFyXCIsIHllYXIpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG59XG4iLCAiaW1wb3J0IHsgUGFyc2luZ0NvbnRleHQgfSBmcm9tIFwiLi4vLi4vLi4vY2hyb25vXCI7XG5pbXBvcnQgeyBNT05USF9ESUNUSU9OQVJZIH0gZnJvbSBcIi4uL2NvbnN0YW50c1wiO1xuaW1wb3J0IHsgbWF0Y2hBbnlQYXR0ZXJuIH0gZnJvbSBcIi4uLy4uLy4uL3V0aWxzL3BhdHRlcm5cIjtcbmltcG9ydCB7IEFic3RyYWN0UGFyc2VyV2l0aFdvcmRCb3VuZGFyeUNoZWNraW5nIH0gZnJvbSBcIi4uLy4uLy4uL2NvbW1vbi9wYXJzZXJzL0Fic3RyYWN0UGFyc2VyV2l0aFdvcmRCb3VuZGFyeVwiO1xuXG4vKlxuICAgIERhdGUgZm9ybWF0IHdpdGggc2xhc2ggXCIvXCIgYmV0d2VlbiBudW1iZXJzIGxpa2UgRU5TbGFzaERhdGVGb3JtYXRQYXJzZXIsXG4gICAgYnV0IHRoaXMgcGFyc2VyIGV4cGVjdCB5ZWFyIGJlZm9yZSBtb250aCBhbmQgZGF0ZS5cbiAgICAtIFlZWVkvTU0vRERcbiAgICAtIFlZWVktTU0tRERcbiAgICAtIFlZWVkuTU0uRERcbiovXG5jb25zdCBQQVRURVJOID0gbmV3IFJlZ0V4cChcbiAgICBgKFswLTldezR9KVstXFxcXC5cXFxcL1xcXFxzXWAgK1xuICAgICAgICBgKD86KCR7bWF0Y2hBbnlQYXR0ZXJuKE1PTlRIX0RJQ1RJT05BUlkpfSl8KFswLTldezEsMn0pKVstXFxcXC5cXFxcL1xcXFxzXWAgK1xuICAgICAgICBgKFswLTldezEsMn0pYCArXG4gICAgICAgIFwiKD89XFxcXFd8JClcIixcbiAgICBcImlcIlxuKTtcblxuY29uc3QgWUVBUl9OVU1CRVJfR1JPVVAgPSAxO1xuY29uc3QgTU9OVEhfTkFNRV9HUk9VUCA9IDI7XG5jb25zdCBNT05USF9OVU1CRVJfR1JPVVAgPSAzO1xuY29uc3QgREFURV9OVU1CRVJfR1JPVVAgPSA0O1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBFTlllYXJNb250aERheVBhcnNlciBleHRlbmRzIEFic3RyYWN0UGFyc2VyV2l0aFdvcmRCb3VuZGFyeUNoZWNraW5nIHtcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHN0cmljdE1vbnRoRGF0ZU9yZGVyOiBib29sZWFuKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgfVxuXG4gICAgaW5uZXJQYXR0ZXJuKCk6IFJlZ0V4cCB7XG4gICAgICAgIHJldHVybiBQQVRURVJOO1xuICAgIH1cblxuICAgIGlubmVyRXh0cmFjdChjb250ZXh0OiBQYXJzaW5nQ29udGV4dCwgbWF0Y2g6IFJlZ0V4cE1hdGNoQXJyYXkpIHtcbiAgICAgICAgY29uc3QgeWVhciA9IHBhcnNlSW50KG1hdGNoW1lFQVJfTlVNQkVSX0dST1VQXSk7XG4gICAgICAgIGxldCBkYXkgPSBwYXJzZUludChtYXRjaFtEQVRFX05VTUJFUl9HUk9VUF0pO1xuICAgICAgICBsZXQgbW9udGggPSBtYXRjaFtNT05USF9OVU1CRVJfR1JPVVBdXG4gICAgICAgICAgICA/IHBhcnNlSW50KG1hdGNoW01PTlRIX05VTUJFUl9HUk9VUF0pXG4gICAgICAgICAgICA6IE1PTlRIX0RJQ1RJT05BUllbbWF0Y2hbTU9OVEhfTkFNRV9HUk9VUF0udG9Mb3dlckNhc2UoKV07XG5cbiAgICAgICAgaWYgKG1vbnRoIDwgMSB8fCBtb250aCA+IDEyKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5zdHJpY3RNb250aERhdGVPcmRlcikge1xuICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGRheSA+PSAxICYmIGRheSA8PSAxMikge1xuICAgICAgICAgICAgICAgIFttb250aCwgZGF5XSA9IFtkYXksIG1vbnRoXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAoZGF5IDwgMSB8fCBkYXkgPiAzMSkge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgZGF5OiBkYXksXG4gICAgICAgICAgICBtb250aDogbW9udGgsXG4gICAgICAgICAgICB5ZWFyOiB5ZWFyLFxuICAgICAgICB9O1xuICAgIH1cbn1cbiIsICJpbXBvcnQgeyBQYXJzaW5nQ29udGV4dCB9IGZyb20gXCIuLi8uLi8uLi9jaHJvbm9cIjtcbmltcG9ydCB7IFBhcnNpbmdDb21wb25lbnRzIH0gZnJvbSBcIi4uLy4uLy4uL3Jlc3VsdHNcIjtcbmltcG9ydCB7IEFic3RyYWN0UGFyc2VyV2l0aFdvcmRCb3VuZGFyeUNoZWNraW5nIH0gZnJvbSBcIi4uLy4uLy4uL2NvbW1vbi9wYXJzZXJzL0Fic3RyYWN0UGFyc2VyV2l0aFdvcmRCb3VuZGFyeVwiO1xuXG5jb25zdCBQQVRURVJOID0gbmV3IFJlZ0V4cChcIihbMC05XXwwWzEtOV18MVswMTJdKS8oWzAtOV17NH0pXCIgKyBcIlwiLCBcImlcIik7XG5cbmNvbnN0IE1PTlRIX0dST1VQID0gMTtcbmNvbnN0IFlFQVJfR1JPVVAgPSAyO1xuXG4vKipcbiAqIE1vbnRoL1llYXIgZGF0ZSBmb3JtYXQgd2l0aCBzbGFzaCBcIi9cIiAoYWxzbyBcIi1cIiBhbmQgXCIuXCIpIGJldHdlZW4gbnVtYmVyc1xuICogLSAxMS8wNVxuICogLSAwNi8yMDA1XG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEVOU2xhc2hNb250aEZvcm1hdFBhcnNlciBleHRlbmRzIEFic3RyYWN0UGFyc2VyV2l0aFdvcmRCb3VuZGFyeUNoZWNraW5nIHtcbiAgICBpbm5lclBhdHRlcm4oKTogUmVnRXhwIHtcbiAgICAgICAgcmV0dXJuIFBBVFRFUk47XG4gICAgfVxuXG4gICAgaW5uZXJFeHRyYWN0KGNvbnRleHQ6IFBhcnNpbmdDb250ZXh0LCBtYXRjaDogUmVnRXhwTWF0Y2hBcnJheSk6IFBhcnNpbmdDb21wb25lbnRzIHtcbiAgICAgICAgY29uc3QgeWVhciA9IHBhcnNlSW50KG1hdGNoW1lFQVJfR1JPVVBdKTtcbiAgICAgICAgY29uc3QgbW9udGggPSBwYXJzZUludChtYXRjaFtNT05USF9HUk9VUF0pO1xuXG4gICAgICAgIHJldHVybiBjb250ZXh0LmNyZWF0ZVBhcnNpbmdDb21wb25lbnRzKCkuaW1wbHkoXCJkYXlcIiwgMSkuYXNzaWduKFwibW9udGhcIiwgbW9udGgpLmFzc2lnbihcInllYXJcIiwgeWVhcik7XG4gICAgfVxufVxuIiwgImltcG9ydCB7IFBhcnNlciwgUGFyc2luZ0NvbnRleHQgfSBmcm9tIFwiLi4vLi4vY2hyb25vXCI7XG5pbXBvcnQgeyBQYXJzaW5nQ29tcG9uZW50cywgUGFyc2luZ1Jlc3VsdCB9IGZyb20gXCIuLi8uLi9yZXN1bHRzXCI7XG5pbXBvcnQgeyBNZXJpZGllbSB9IGZyb20gXCIuLi8uLi90eXBlc1wiO1xuXG4vLyBwcmV0dGllci1pZ25vcmVcbmZ1bmN0aW9uIHByaW1hcnlUaW1lUGF0dGVybihsZWZ0Qm91bmRhcnk6IHN0cmluZywgcHJpbWFyeVByZWZpeDogc3RyaW5nLCBwcmltYXJ5U3VmZml4OiBzdHJpbmcsIGZsYWdzOiBzdHJpbmcpIHtcbiAgICByZXR1cm4gbmV3IFJlZ0V4cChcbiAgICAgICAgICAgIGAke2xlZnRCb3VuZGFyeX1gICtcbiAgICAgICAgICAgIGAke3ByaW1hcnlQcmVmaXh9YCArXG4gICAgICAgICAgICBgKFxcXFxkezEsNH0pYCArXG4gICAgICAgICAgICBgKD86YCArXG4gICAgICAgICAgICAgICAgYCg/OlxcXFwufDp8XHVGRjFBKWAgK1xuICAgICAgICAgICAgICAgIGAoXFxcXGR7MSwyfSlgICtcbiAgICAgICAgICAgICAgICBgKD86YCArXG4gICAgICAgICAgICAgICAgICAgIGAoPzo6fFx1RkYxQSlgICtcbiAgICAgICAgICAgICAgICAgICAgYChcXFxcZHsyfSlgICtcbiAgICAgICAgICAgICAgICAgICAgYCg/OlxcXFwuKFxcXFxkezEsNn0pKT9gICtcbiAgICAgICAgICAgICAgICBgKT9gICtcbiAgICAgICAgICAgIGApP2AgK1xuICAgICAgICAgICAgYCg/OlxcXFxzKihhXFxcXC5tXFxcXC58cFxcXFwubVxcXFwufGFtP3xwbT8pKT9gICtcbiAgICAgICAgICAgIGAke3ByaW1hcnlTdWZmaXh9YCxcbiAgICAgICAgZmxhZ3NcbiAgICApO1xufVxuXG4vLyBwcmV0dGllci1pZ25vcmVcbmZ1bmN0aW9uIGZvbGxvd2luZ1RpbWVQYXR0ZW4oZm9sbG93aW5nUGhhc2U6IHN0cmluZywgZm9sbG93aW5nU3VmZml4OiBzdHJpbmcpIHtcbiAgICByZXR1cm4gbmV3IFJlZ0V4cChcbiAgICAgICAgYF4oJHtmb2xsb3dpbmdQaGFzZX0pYCArXG4gICAgICAgICAgICBgKFxcXFxkezEsNH0pYCArXG4gICAgICAgICAgICBgKD86YCArXG4gICAgICAgICAgICAgICAgYCg/OlxcXFwufFxcXFw6fFxcXFxcdUZGMUEpYCArXG4gICAgICAgICAgICAgICAgYChcXFxcZHsxLDJ9KWAgK1xuICAgICAgICAgICAgICAgIGAoPzpgICtcbiAgICAgICAgICAgICAgICAgICAgYCg/OlxcXFwufFxcXFw6fFxcXFxcdUZGMUEpYCArXG4gICAgICAgICAgICAgICAgICAgIGAoXFxcXGR7MSwyfSkoPzpcXFxcLihcXFxcZHsxLDZ9KSk/YCArXG4gICAgICAgICAgICAgICAgYCk/YCArXG4gICAgICAgICAgICBgKT9gICtcbiAgICAgICAgICAgIGAoPzpcXFxccyooYVxcXFwubVxcXFwufHBcXFxcLm1cXFxcLnxhbT98cG0/KSk/YCArXG4gICAgICAgICAgICBgJHtmb2xsb3dpbmdTdWZmaXh9YCxcbiAgICAgICAgXCJpXCJcbiAgICApO1xufVxuXG5jb25zdCBIT1VSX0dST1VQID0gMjtcbmNvbnN0IE1JTlVURV9HUk9VUCA9IDM7XG5jb25zdCBTRUNPTkRfR1JPVVAgPSA0O1xuY29uc3QgTUlMTElfU0VDT05EX0dST1VQID0gNTtcbmNvbnN0IEFNX1BNX0hPVVJfR1JPVVAgPSA2O1xuXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgQWJzdHJhY3RUaW1lRXhwcmVzc2lvblBhcnNlciBpbXBsZW1lbnRzIFBhcnNlciB7XG4gICAgYWJzdHJhY3QgcHJpbWFyeVByZWZpeCgpOiBzdHJpbmc7XG4gICAgYWJzdHJhY3QgZm9sbG93aW5nUGhhc2UoKTogc3RyaW5nO1xuICAgIHN0cmljdE1vZGU6IGJvb2xlYW47XG5cbiAgICBjb25zdHJ1Y3RvcihzdHJpY3RNb2RlID0gZmFsc2UpIHtcbiAgICAgICAgdGhpcy5zdHJpY3RNb2RlID0gc3RyaWN0TW9kZTtcbiAgICB9XG5cbiAgICBwYXR0ZXJuRmxhZ3MoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIFwiaVwiO1xuICAgIH1cblxuICAgIHByaW1hcnlQYXR0ZXJuTGVmdEJvdW5kYXJ5KCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiBgKF58XFxcXHN8VHxcXFxcYilgO1xuICAgIH1cblxuICAgIHByaW1hcnlTdWZmaXgoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIGAoPyEvKSg/PVxcXFxXfCQpYDtcbiAgICB9XG5cbiAgICBmb2xsb3dpbmdTdWZmaXgoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIGAoPyEvKSg/PVxcXFxXfCQpYDtcbiAgICB9XG5cbiAgICBwYXR0ZXJuKGNvbnRleHQ6IFBhcnNpbmdDb250ZXh0KTogUmVnRXhwIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0UHJpbWFyeVRpbWVQYXR0ZXJuVGhyb3VnaENhY2hlKCk7XG4gICAgfVxuXG4gICAgZXh0cmFjdChjb250ZXh0OiBQYXJzaW5nQ29udGV4dCwgbWF0Y2g6IFJlZ0V4cE1hdGNoQXJyYXkpOiBQYXJzaW5nUmVzdWx0IHtcbiAgICAgICAgY29uc3Qgc3RhcnRDb21wb25lbnRzID0gdGhpcy5leHRyYWN0UHJpbWFyeVRpbWVDb21wb25lbnRzKGNvbnRleHQsIG1hdGNoKTtcbiAgICAgICAgaWYgKCFzdGFydENvbXBvbmVudHMpIHtcbiAgICAgICAgICAgIC8vIElmIHRoZSBtYXRjaCBzZWVtIGxpa2UgYSB5ZWFyIGUuZy4gXCIyMDEzLjEyOi4uLlwiLFxuICAgICAgICAgICAgLy8gdGhlbiBza2lwcyB0aGUgeWVhciBwYXJ0IGFuZCB0cnkgbWF0Y2hpbmcgYWdhaW4uXG4gICAgICAgICAgICBpZiAobWF0Y2hbMF0ubWF0Y2goL15cXGR7NH0vKSkge1xuICAgICAgICAgICAgICAgIG1hdGNoLmluZGV4ICs9IDQ7IC8vIFNraXAgb3ZlciBwb3RlbnRpYWwgb3ZlcmxhcHBpbmcgcGF0dGVyblxuICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBtYXRjaC5pbmRleCArPSBtYXRjaFswXS5sZW5ndGg7IC8vIFNraXAgb3ZlciBwb3RlbnRpYWwgb3ZlcmxhcHBpbmcgcGF0dGVyblxuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBpbmRleCA9IG1hdGNoLmluZGV4ICsgbWF0Y2hbMV0ubGVuZ3RoO1xuICAgICAgICBjb25zdCB0ZXh0ID0gbWF0Y2hbMF0uc3Vic3RyaW5nKG1hdGNoWzFdLmxlbmd0aCk7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IGNvbnRleHQuY3JlYXRlUGFyc2luZ1Jlc3VsdChpbmRleCwgdGV4dCwgc3RhcnRDb21wb25lbnRzKTtcbiAgICAgICAgbWF0Y2guaW5kZXggKz0gbWF0Y2hbMF0ubGVuZ3RoOyAvLyBTa2lwIG92ZXIgcG90ZW50aWFsIG92ZXJsYXBwaW5nIHBhdHRlcm5cblxuICAgICAgICBjb25zdCByZW1haW5pbmdUZXh0ID0gY29udGV4dC50ZXh0LnN1YnN0cmluZyhtYXRjaC5pbmRleCk7XG4gICAgICAgIGNvbnN0IGZvbGxvd2luZ1BhdHRlcm4gPSB0aGlzLmdldEZvbGxvd2luZ1RpbWVQYXR0ZXJuVGhyb3VnaENhY2hlKCk7XG4gICAgICAgIGNvbnN0IGZvbGxvd2luZ01hdGNoID0gZm9sbG93aW5nUGF0dGVybi5leGVjKHJlbWFpbmluZ1RleHQpO1xuXG4gICAgICAgIC8vIFBhdHRlcm4gXCI0NTYtMTJcIiwgXCIyMDIyLTEyXCIgc2hvdWxkIG5vdCBiZSB0aW1lIHdpdGhvdXQgcHJvcGVyIGNvbnRleHRcbiAgICAgICAgaWYgKHRleHQubWF0Y2goL15cXGR7Myw0fS8pICYmIGZvbGxvd2luZ01hdGNoKSB7XG4gICAgICAgICAgICAvLyBlLmcuIFwiMjAyMi0xMlwiXG4gICAgICAgICAgICBpZiAoZm9sbG93aW5nTWF0Y2hbMF0ubWF0Y2goL15cXHMqKFsrLV0pXFxzKlxcZHsyLDR9JC8pKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBlLmcuIFwiMjAyMi0xMjowMS4uLlwiXG4gICAgICAgICAgICBpZiAoZm9sbG93aW5nTWF0Y2hbMF0ubWF0Y2goL15cXHMqKFsrLV0pXFxzKlxcZHsyfVxcV1xcZHsyfS8pKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoXG4gICAgICAgICAgICAhZm9sbG93aW5nTWF0Y2ggfHxcbiAgICAgICAgICAgIC8vIFBhdHRlcm4gXCJZWS5ZWSAtWFhYWFwiIGlzIG1vcmUgbGlrZSB0aW1lem9uZSBvZmZzZXRcbiAgICAgICAgICAgIGZvbGxvd2luZ01hdGNoWzBdLm1hdGNoKC9eXFxzKihbKy1dKVxccypcXGR7Myw0fSQvKVxuICAgICAgICApIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmNoZWNrQW5kUmV0dXJuV2l0aG91dEZvbGxvd2luZ1BhdHRlcm4ocmVzdWx0KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJlc3VsdC5lbmQgPSB0aGlzLmV4dHJhY3RGb2xsb3dpbmdUaW1lQ29tcG9uZW50cyhjb250ZXh0LCBmb2xsb3dpbmdNYXRjaCwgcmVzdWx0KTtcbiAgICAgICAgaWYgKHJlc3VsdC5lbmQpIHtcbiAgICAgICAgICAgIHJlc3VsdC50ZXh0ICs9IGZvbGxvd2luZ01hdGNoWzBdO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRoaXMuY2hlY2tBbmRSZXR1cm5XaXRoRm9sbG93aW5nUGF0dGVybihyZXN1bHQpO1xuICAgIH1cblxuICAgIGV4dHJhY3RQcmltYXJ5VGltZUNvbXBvbmVudHMoXG4gICAgICAgIGNvbnRleHQ6IFBhcnNpbmdDb250ZXh0LFxuICAgICAgICBtYXRjaDogUmVnRXhwTWF0Y2hBcnJheSxcbiAgICAgICAgc3RyaWN0ID0gZmFsc2VcbiAgICApOiBudWxsIHwgUGFyc2luZ0NvbXBvbmVudHMge1xuICAgICAgICBjb25zdCBjb21wb25lbnRzID0gY29udGV4dC5jcmVhdGVQYXJzaW5nQ29tcG9uZW50cygpO1xuICAgICAgICBsZXQgbWludXRlID0gMDtcbiAgICAgICAgbGV0IG1lcmlkaWVtID0gbnVsbDtcblxuICAgICAgICAvLyAtLS0tLSBIb3Vyc1xuICAgICAgICBsZXQgaG91ciA9IHBhcnNlSW50KG1hdGNoW0hPVVJfR1JPVVBdKTtcbiAgICAgICAgaWYgKGhvdXIgPiAxMDApIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnN0cmljdE1vZGUgfHwgbWF0Y2hbTUlOVVRFX0dST1VQXSAhPSBudWxsKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIG1pbnV0ZSA9IGhvdXIgJSAxMDA7XG4gICAgICAgICAgICBob3VyID0gTWF0aC5mbG9vcihob3VyIC8gMTAwKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChob3VyID4gMjQpIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gLS0tLS0gTWludXRlc1xuICAgICAgICBpZiAobWF0Y2hbTUlOVVRFX0dST1VQXSAhPSBudWxsKSB7XG4gICAgICAgICAgICBpZiAobWF0Y2hbTUlOVVRFX0dST1VQXS5sZW5ndGggPT0gMSAmJiAhbWF0Y2hbQU1fUE1fSE9VUl9HUk9VUF0pIHtcbiAgICAgICAgICAgICAgICAvLyBTa2lwIHNpbmdsZSBkaWdpdCBtaW51dGUgZS5nLiBcImF0IDEuMSB4eFwiXG4gICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIG1pbnV0ZSA9IHBhcnNlSW50KG1hdGNoW01JTlVURV9HUk9VUF0pO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKG1pbnV0ZSA+PSA2MCkge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoaG91ciA+IDEyKSB7XG4gICAgICAgICAgICBtZXJpZGllbSA9IE1lcmlkaWVtLlBNO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gLS0tLS0gQU0gJiBQTVxuICAgICAgICBpZiAobWF0Y2hbQU1fUE1fSE9VUl9HUk9VUF0gIT0gbnVsbCkge1xuICAgICAgICAgICAgaWYgKGhvdXIgPiAxMikgcmV0dXJuIG51bGw7XG4gICAgICAgICAgICBjb25zdCBhbXBtID0gbWF0Y2hbQU1fUE1fSE9VUl9HUk9VUF1bMF0udG9Mb3dlckNhc2UoKTtcbiAgICAgICAgICAgIGlmIChhbXBtID09IFwiYVwiKSB7XG4gICAgICAgICAgICAgICAgbWVyaWRpZW0gPSBNZXJpZGllbS5BTTtcbiAgICAgICAgICAgICAgICBpZiAoaG91ciA9PSAxMikge1xuICAgICAgICAgICAgICAgICAgICBob3VyID0gMDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChhbXBtID09IFwicFwiKSB7XG4gICAgICAgICAgICAgICAgbWVyaWRpZW0gPSBNZXJpZGllbS5QTTtcbiAgICAgICAgICAgICAgICBpZiAoaG91ciAhPSAxMikge1xuICAgICAgICAgICAgICAgICAgICBob3VyICs9IDEyO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGNvbXBvbmVudHMuYXNzaWduKFwiaG91clwiLCBob3VyKTtcbiAgICAgICAgY29tcG9uZW50cy5hc3NpZ24oXCJtaW51dGVcIiwgbWludXRlKTtcblxuICAgICAgICBpZiAobWVyaWRpZW0gIT09IG51bGwpIHtcbiAgICAgICAgICAgIGNvbXBvbmVudHMuYXNzaWduKFwibWVyaWRpZW1cIiwgbWVyaWRpZW0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaWYgKGhvdXIgPCAxMikge1xuICAgICAgICAgICAgICAgIGNvbXBvbmVudHMuaW1wbHkoXCJtZXJpZGllbVwiLCBNZXJpZGllbS5BTSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGNvbXBvbmVudHMuaW1wbHkoXCJtZXJpZGllbVwiLCBNZXJpZGllbS5QTSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvLyAtLS0tLSBNaWxsaXNlY29uZFxuICAgICAgICBpZiAobWF0Y2hbTUlMTElfU0VDT05EX0dST1VQXSAhPSBudWxsKSB7XG4gICAgICAgICAgICBjb25zdCBtaWxsaXNlY29uZCA9IHBhcnNlSW50KG1hdGNoW01JTExJX1NFQ09ORF9HUk9VUF0uc3Vic3RyaW5nKDAsIDMpKTtcbiAgICAgICAgICAgIGlmIChtaWxsaXNlY29uZCA+PSAxMDAwKSByZXR1cm4gbnVsbDtcblxuICAgICAgICAgICAgY29tcG9uZW50cy5hc3NpZ24oXCJtaWxsaXNlY29uZFwiLCBtaWxsaXNlY29uZCk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyAtLS0tLSBTZWNvbmRcbiAgICAgICAgaWYgKG1hdGNoW1NFQ09ORF9HUk9VUF0gIT0gbnVsbCkge1xuICAgICAgICAgICAgY29uc3Qgc2Vjb25kID0gcGFyc2VJbnQobWF0Y2hbU0VDT05EX0dST1VQXSk7XG4gICAgICAgICAgICBpZiAoc2Vjb25kID49IDYwKSByZXR1cm4gbnVsbDtcblxuICAgICAgICAgICAgY29tcG9uZW50cy5hc3NpZ24oXCJzZWNvbmRcIiwgc2Vjb25kKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBjb21wb25lbnRzO1xuICAgIH1cblxuICAgIGV4dHJhY3RGb2xsb3dpbmdUaW1lQ29tcG9uZW50cyhcbiAgICAgICAgY29udGV4dDogUGFyc2luZ0NvbnRleHQsXG4gICAgICAgIG1hdGNoOiBSZWdFeHBNYXRjaEFycmF5LFxuICAgICAgICByZXN1bHQ6IFBhcnNpbmdSZXN1bHRcbiAgICApOiBudWxsIHwgUGFyc2luZ0NvbXBvbmVudHMge1xuICAgICAgICBjb25zdCBjb21wb25lbnRzID0gY29udGV4dC5jcmVhdGVQYXJzaW5nQ29tcG9uZW50cygpO1xuXG4gICAgICAgIC8vIC0tLS0tIE1pbGxpc2Vjb25kXG4gICAgICAgIGlmIChtYXRjaFtNSUxMSV9TRUNPTkRfR1JPVVBdICE9IG51bGwpIHtcbiAgICAgICAgICAgIGNvbnN0IG1pbGxpc2Vjb25kID0gcGFyc2VJbnQobWF0Y2hbTUlMTElfU0VDT05EX0dST1VQXS5zdWJzdHJpbmcoMCwgMykpO1xuICAgICAgICAgICAgaWYgKG1pbGxpc2Vjb25kID49IDEwMDApIHJldHVybiBudWxsO1xuXG4gICAgICAgICAgICBjb21wb25lbnRzLmFzc2lnbihcIm1pbGxpc2Vjb25kXCIsIG1pbGxpc2Vjb25kKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIC0tLS0tIFNlY29uZFxuICAgICAgICBpZiAobWF0Y2hbU0VDT05EX0dST1VQXSAhPSBudWxsKSB7XG4gICAgICAgICAgICBjb25zdCBzZWNvbmQgPSBwYXJzZUludChtYXRjaFtTRUNPTkRfR1JPVVBdKTtcbiAgICAgICAgICAgIGlmIChzZWNvbmQgPj0gNjApIHJldHVybiBudWxsO1xuXG4gICAgICAgICAgICBjb21wb25lbnRzLmFzc2lnbihcInNlY29uZFwiLCBzZWNvbmQpO1xuICAgICAgICB9XG5cbiAgICAgICAgbGV0IGhvdXIgPSBwYXJzZUludChtYXRjaFtIT1VSX0dST1VQXSk7XG4gICAgICAgIGxldCBtaW51dGUgPSAwO1xuICAgICAgICBsZXQgbWVyaWRpZW0gPSAtMTtcblxuICAgICAgICAvLyAtLS0tLSBNaW51dGVcbiAgICAgICAgaWYgKG1hdGNoW01JTlVURV9HUk9VUF0gIT0gbnVsbCkge1xuICAgICAgICAgICAgbWludXRlID0gcGFyc2VJbnQobWF0Y2hbTUlOVVRFX0dST1VQXSk7XG4gICAgICAgIH0gZWxzZSBpZiAoaG91ciA+IDEwMCkge1xuICAgICAgICAgICAgbWludXRlID0gaG91ciAlIDEwMDtcbiAgICAgICAgICAgIGhvdXIgPSBNYXRoLmZsb29yKGhvdXIgLyAxMDApO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKG1pbnV0ZSA+PSA2MCB8fCBob3VyID4gMjQpIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGhvdXIgPj0gMTIpIHtcbiAgICAgICAgICAgIG1lcmlkaWVtID0gTWVyaWRpZW0uUE07XG4gICAgICAgIH1cblxuICAgICAgICAvLyAtLS0tLSBBTSAmIFBNXG4gICAgICAgIGlmIChtYXRjaFtBTV9QTV9IT1VSX0dST1VQXSAhPSBudWxsKSB7XG4gICAgICAgICAgICBpZiAoaG91ciA+IDEyKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGNvbnN0IGFtcG0gPSBtYXRjaFtBTV9QTV9IT1VSX0dST1VQXVswXS50b0xvd2VyQ2FzZSgpO1xuICAgICAgICAgICAgaWYgKGFtcG0gPT0gXCJhXCIpIHtcbiAgICAgICAgICAgICAgICBtZXJpZGllbSA9IE1lcmlkaWVtLkFNO1xuICAgICAgICAgICAgICAgIGlmIChob3VyID09IDEyKSB7XG4gICAgICAgICAgICAgICAgICAgIGhvdXIgPSAwO1xuICAgICAgICAgICAgICAgICAgICBpZiAoIWNvbXBvbmVudHMuaXNDZXJ0YWluKFwiZGF5XCIpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb21wb25lbnRzLmltcGx5KFwiZGF5XCIsIGNvbXBvbmVudHMuZ2V0KFwiZGF5XCIpICsgMSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChhbXBtID09IFwicFwiKSB7XG4gICAgICAgICAgICAgICAgbWVyaWRpZW0gPSBNZXJpZGllbS5QTTtcbiAgICAgICAgICAgICAgICBpZiAoaG91ciAhPSAxMikgaG91ciArPSAxMjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKCFyZXN1bHQuc3RhcnQuaXNDZXJ0YWluKFwibWVyaWRpZW1cIikpIHtcbiAgICAgICAgICAgICAgICBpZiAobWVyaWRpZW0gPT0gTWVyaWRpZW0uQU0pIHtcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0LnN0YXJ0LmltcGx5KFwibWVyaWRpZW1cIiwgTWVyaWRpZW0uQU0pO1xuXG4gICAgICAgICAgICAgICAgICAgIGlmIChyZXN1bHQuc3RhcnQuZ2V0KFwiaG91clwiKSA9PSAxMikge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0LnN0YXJ0LmFzc2lnbihcImhvdXJcIiwgMCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICByZXN1bHQuc3RhcnQuaW1wbHkoXCJtZXJpZGllbVwiLCBNZXJpZGllbS5QTSk7XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKHJlc3VsdC5zdGFydC5nZXQoXCJob3VyXCIpICE9IDEyKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXN1bHQuc3RhcnQuYXNzaWduKFwiaG91clwiLCByZXN1bHQuc3RhcnQuZ2V0KFwiaG91clwiKSArIDEyKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGNvbXBvbmVudHMuYXNzaWduKFwiaG91clwiLCBob3VyKTtcbiAgICAgICAgY29tcG9uZW50cy5hc3NpZ24oXCJtaW51dGVcIiwgbWludXRlKTtcblxuICAgICAgICBpZiAobWVyaWRpZW0gPj0gMCkge1xuICAgICAgICAgICAgY29tcG9uZW50cy5hc3NpZ24oXCJtZXJpZGllbVwiLCBtZXJpZGllbSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb25zdCBzdGFydEF0UE0gPSByZXN1bHQuc3RhcnQuaXNDZXJ0YWluKFwibWVyaWRpZW1cIikgJiYgcmVzdWx0LnN0YXJ0LmdldChcImhvdXJcIikgPiAxMjtcbiAgICAgICAgICAgIGlmIChzdGFydEF0UE0pIHtcbiAgICAgICAgICAgICAgICBpZiAocmVzdWx0LnN0YXJ0LmdldChcImhvdXJcIikgLSAxMiA+IGhvdXIpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gMTBwbSAtIDEgKGFtKVxuICAgICAgICAgICAgICAgICAgICBjb21wb25lbnRzLmltcGx5KFwibWVyaWRpZW1cIiwgTWVyaWRpZW0uQU0pO1xuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoaG91ciA8PSAxMikge1xuICAgICAgICAgICAgICAgICAgICBjb21wb25lbnRzLmFzc2lnbihcImhvdXJcIiwgaG91ciArIDEyKTtcbiAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50cy5hc3NpZ24oXCJtZXJpZGllbVwiLCBNZXJpZGllbS5QTSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIGlmIChob3VyID4gMTIpIHtcbiAgICAgICAgICAgICAgICBjb21wb25lbnRzLmltcGx5KFwibWVyaWRpZW1cIiwgTWVyaWRpZW0uUE0pO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChob3VyIDw9IDEyKSB7XG4gICAgICAgICAgICAgICAgY29tcG9uZW50cy5pbXBseShcIm1lcmlkaWVtXCIsIE1lcmlkaWVtLkFNKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChjb21wb25lbnRzLmRhdGUoKS5nZXRUaW1lKCkgPCByZXN1bHQuc3RhcnQuZGF0ZSgpLmdldFRpbWUoKSkge1xuICAgICAgICAgICAgY29tcG9uZW50cy5pbXBseShcImRheVwiLCBjb21wb25lbnRzLmdldChcImRheVwiKSArIDEpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGNvbXBvbmVudHM7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBjaGVja0FuZFJldHVybldpdGhvdXRGb2xsb3dpbmdQYXR0ZXJuKHJlc3VsdCkge1xuICAgICAgICAvLyBTaW5nbGUgZGlnaXQgKGUuZyBcIjFcIikgc2hvdWxkIG5vdCBiZSBjb3VudGVkIGFzIHRpbWUgZXhwcmVzc2lvbiAod2l0aG91dCBwcm9wZXIgY29udGV4dClcbiAgICAgICAgaWYgKHJlc3VsdC50ZXh0Lm1hdGNoKC9eXFxkJC8pKSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFRocmVlIG9yIG1vcmUgZGlnaXQgKGUuZy4gXCIyMDNcIiwgXCIyMDE0XCIpIHNob3VsZCBub3QgYmUgY291bnRlZCBhcyB0aW1lIGV4cHJlc3Npb24gKHdpdGhvdXQgcHJvcGVyIGNvbnRleHQpXG4gICAgICAgIGlmIChyZXN1bHQudGV4dC5tYXRjaCgvXlxcZFxcZFxcZCskLykpIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gSW5zdGVhZCBvZiBcImFtL3BtXCIsIGl0IGVuZHMgd2l0aCBcImFcIiBvciBcInBcIiAoZS5nIFwiMWFcIiwgXCIxMjNwXCIpLCB0aGlzIHNlZW1zIHVubGlrZWx5XG4gICAgICAgIGlmIChyZXN1bHQudGV4dC5tYXRjaCgvXFxkW2FwQVBdJC8pKSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIElmIGl0IGVuZHMgb25seSB3aXRoIG51bWJlcnMgb3IgZG90c1xuICAgICAgICBjb25zdCBlbmRpbmdXaXRoTnVtYmVycyA9IHJlc3VsdC50ZXh0Lm1hdGNoKC9bXlxcZDouXShcXGRbXFxkLl0rKSQvKTtcbiAgICAgICAgaWYgKGVuZGluZ1dpdGhOdW1iZXJzKSB7XG4gICAgICAgICAgICBjb25zdCBlbmRpbmdOdW1iZXJzOiBzdHJpbmcgPSBlbmRpbmdXaXRoTnVtYmVyc1sxXTtcblxuICAgICAgICAgICAgLy8gSW4gc3RyaWN0IG1vZGUgKGUuZy4gXCJhdCAxXCIgb3IgXCJhdCAxLjJcIiksIHRoaXMgc2hvdWxkIG5vdCBiZSBhY2NlcHRlZFxuICAgICAgICAgICAgaWYgKHRoaXMuc3RyaWN0TW9kZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBJZiBpdCBlbmRzIG9ubHkgd2l0aCBkb3Qgc2luZ2xlIGRpZ2l0LCBlLmcuIFwiYXQgMS4yXCJcbiAgICAgICAgICAgIGlmIChlbmRpbmdOdW1iZXJzLmluY2x1ZGVzKFwiLlwiKSAmJiAhZW5kaW5nTnVtYmVycy5tYXRjaCgvXFxkKFxcLlxcZHsyfSkrJC8pKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIElmIGl0IGVuZHMgb25seSB3aXRoIG51bWJlcnMgYWJvdmUgMjQsIGUuZy4gXCJhdCAyNVwiXG4gICAgICAgICAgICBjb25zdCBlbmRpbmdOdW1iZXJWYWwgPSBwYXJzZUludChlbmRpbmdOdW1iZXJzKTtcbiAgICAgICAgICAgIGlmIChlbmRpbmdOdW1iZXJWYWwgPiAyNCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG5cbiAgICBwcml2YXRlIGNoZWNrQW5kUmV0dXJuV2l0aEZvbGxvd2luZ1BhdHRlcm4ocmVzdWx0KSB7XG4gICAgICAgIGlmIChyZXN1bHQudGV4dC5tYXRjaCgvXlxcZCstXFxkKyQvKSkge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBJZiBpdCBlbmRzIG9ubHkgd2l0aCBudW1iZXJzIG9yIGRvdHNcbiAgICAgICAgY29uc3QgZW5kaW5nV2l0aE51bWJlcnMgPSByZXN1bHQudGV4dC5tYXRjaCgvW15cXGQ6Ll0oXFxkW1xcZC5dKylcXHMqLVxccyooXFxkW1xcZC5dKykkLyk7XG4gICAgICAgIGlmIChlbmRpbmdXaXRoTnVtYmVycykge1xuICAgICAgICAgICAgLy8gSW4gc3RyaWN0IG1vZGUgKGUuZy4gXCJhdCAxLTNcIiBvciBcImF0IDEuMiAtIDIuM1wiKSwgdGhpcyBzaG91bGQgbm90IGJlIGFjY2VwdGVkXG4gICAgICAgICAgICBpZiAodGhpcy5zdHJpY3RNb2RlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGNvbnN0IHN0YXJ0aW5nTnVtYmVyczogc3RyaW5nID0gZW5kaW5nV2l0aE51bWJlcnNbMV07XG4gICAgICAgICAgICBjb25zdCBlbmRpbmdOdW1iZXJzOiBzdHJpbmcgPSBlbmRpbmdXaXRoTnVtYmVyc1syXTtcbiAgICAgICAgICAgIC8vIElmIGl0IGVuZHMgb25seSB3aXRoIGRvdCBzaW5nbGUgZGlnaXQsIGUuZy4gXCJhdCAxLjJcIlxuICAgICAgICAgICAgaWYgKGVuZGluZ051bWJlcnMuaW5jbHVkZXMoXCIuXCIpICYmICFlbmRpbmdOdW1iZXJzLm1hdGNoKC9cXGQoXFwuXFxkezJ9KSskLykpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gSWYgaXQgZW5kcyBvbmx5IHdpdGggbnVtYmVycyBhYm92ZSAyNCwgZS5nLiBcImF0IDI1XCJcbiAgICAgICAgICAgIGNvbnN0IGVuZGluZ051bWJlclZhbCA9IHBhcnNlSW50KGVuZGluZ051bWJlcnMpO1xuICAgICAgICAgICAgY29uc3Qgc3RhcnRpbmdOdW1iZXJWYWwgPSBwYXJzZUludChzdGFydGluZ051bWJlcnMpO1xuICAgICAgICAgICAgaWYgKGVuZGluZ051bWJlclZhbCA+IDI0IHx8IHN0YXJ0aW5nTnVtYmVyVmFsID4gMjQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBjYWNoZWRQcmltYXJ5UHJlZml4ID0gbnVsbDtcbiAgICBwcml2YXRlIGNhY2hlZFByaW1hcnlTdWZmaXggPSBudWxsO1xuICAgIHByaXZhdGUgY2FjaGVkUHJpbWFyeVRpbWVQYXR0ZXJuID0gbnVsbDtcblxuICAgIGdldFByaW1hcnlUaW1lUGF0dGVyblRocm91Z2hDYWNoZSgpIHtcbiAgICAgICAgY29uc3QgcHJpbWFyeVByZWZpeCA9IHRoaXMucHJpbWFyeVByZWZpeCgpO1xuICAgICAgICBjb25zdCBwcmltYXJ5U3VmZml4ID0gdGhpcy5wcmltYXJ5U3VmZml4KCk7XG5cbiAgICAgICAgaWYgKHRoaXMuY2FjaGVkUHJpbWFyeVByZWZpeCA9PT0gcHJpbWFyeVByZWZpeCAmJiB0aGlzLmNhY2hlZFByaW1hcnlTdWZmaXggPT09IHByaW1hcnlTdWZmaXgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmNhY2hlZFByaW1hcnlUaW1lUGF0dGVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuY2FjaGVkUHJpbWFyeVRpbWVQYXR0ZXJuID0gcHJpbWFyeVRpbWVQYXR0ZXJuKFxuICAgICAgICAgICAgdGhpcy5wcmltYXJ5UGF0dGVybkxlZnRCb3VuZGFyeSgpLFxuICAgICAgICAgICAgcHJpbWFyeVByZWZpeCxcbiAgICAgICAgICAgIHByaW1hcnlTdWZmaXgsXG4gICAgICAgICAgICB0aGlzLnBhdHRlcm5GbGFncygpXG4gICAgICAgICk7XG4gICAgICAgIHRoaXMuY2FjaGVkUHJpbWFyeVByZWZpeCA9IHByaW1hcnlQcmVmaXg7XG4gICAgICAgIHRoaXMuY2FjaGVkUHJpbWFyeVN1ZmZpeCA9IHByaW1hcnlTdWZmaXg7XG4gICAgICAgIHJldHVybiB0aGlzLmNhY2hlZFByaW1hcnlUaW1lUGF0dGVybjtcbiAgICB9XG5cbiAgICBwcml2YXRlIGNhY2hlZEZvbGxvd2luZ1BoYXNlID0gbnVsbDtcbiAgICBwcml2YXRlIGNhY2hlZEZvbGxvd2luZ1N1ZmZpeCA9IG51bGw7XG4gICAgcHJpdmF0ZSBjYWNoZWRGb2xsb3dpbmdUaW1lUGF0dGVuID0gbnVsbDtcblxuICAgIGdldEZvbGxvd2luZ1RpbWVQYXR0ZXJuVGhyb3VnaENhY2hlKCkge1xuICAgICAgICBjb25zdCBmb2xsb3dpbmdQaGFzZSA9IHRoaXMuZm9sbG93aW5nUGhhc2UoKTtcbiAgICAgICAgY29uc3QgZm9sbG93aW5nU3VmZml4ID0gdGhpcy5mb2xsb3dpbmdTdWZmaXgoKTtcblxuICAgICAgICBpZiAodGhpcy5jYWNoZWRGb2xsb3dpbmdQaGFzZSA9PT0gZm9sbG93aW5nUGhhc2UgJiYgdGhpcy5jYWNoZWRGb2xsb3dpbmdTdWZmaXggPT09IGZvbGxvd2luZ1N1ZmZpeCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuY2FjaGVkRm9sbG93aW5nVGltZVBhdHRlbjtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuY2FjaGVkRm9sbG93aW5nVGltZVBhdHRlbiA9IGZvbGxvd2luZ1RpbWVQYXR0ZW4oZm9sbG93aW5nUGhhc2UsIGZvbGxvd2luZ1N1ZmZpeCk7XG4gICAgICAgIHRoaXMuY2FjaGVkRm9sbG93aW5nUGhhc2UgPSBmb2xsb3dpbmdQaGFzZTtcbiAgICAgICAgdGhpcy5jYWNoZWRGb2xsb3dpbmdTdWZmaXggPSBmb2xsb3dpbmdTdWZmaXg7XG4gICAgICAgIHJldHVybiB0aGlzLmNhY2hlZEZvbGxvd2luZ1RpbWVQYXR0ZW47XG4gICAgfVxufVxuIiwgImltcG9ydCB7IFBhcnNpbmdDb250ZXh0IH0gZnJvbSBcIi4uLy4uLy4uL2Nocm9ub1wiO1xuaW1wb3J0IHsgUGFyc2luZ0NvbXBvbmVudHMsIFBhcnNpbmdSZXN1bHQgfSBmcm9tIFwiLi4vLi4vLi4vcmVzdWx0c1wiO1xuaW1wb3J0IHsgTWVyaWRpZW0gfSBmcm9tIFwiLi4vLi4vLi4vdHlwZXNcIjtcbmltcG9ydCB7IEFic3RyYWN0VGltZUV4cHJlc3Npb25QYXJzZXIgfSBmcm9tIFwiLi4vLi4vLi4vY29tbW9uL3BhcnNlcnMvQWJzdHJhY3RUaW1lRXhwcmVzc2lvblBhcnNlclwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBFTlRpbWVFeHByZXNzaW9uUGFyc2VyIGV4dGVuZHMgQWJzdHJhY3RUaW1lRXhwcmVzc2lvblBhcnNlciB7XG4gICAgY29uc3RydWN0b3Ioc3RyaWN0TW9kZSkge1xuICAgICAgICBzdXBlcihzdHJpY3RNb2RlKTtcbiAgICB9XG5cbiAgICBmb2xsb3dpbmdQaGFzZSgpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gXCJcXFxccyooPzpcXFxcLXxcXFxcXHUyMDEzfFxcXFx+fFxcXFxcdTMwMUN8dG98dW50aWx8dGhyb3VnaHx0aWxsfFxcXFw/KVxcXFxzKlwiO1xuICAgIH1cblxuICAgIHByaW1hcnlQcmVmaXgoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIFwiKD86KD86YXR8ZnJvbSlcXFxccyopPz9cIjtcbiAgICB9XG5cbiAgICBwcmltYXJ5U3VmZml4KCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiBcIig/OlxcXFxzKig/Om9cXFxcVypjbG9ja3xhdFxcXFxzKm5pZ2h0fGluXFxcXHMqdGhlXFxcXHMqKD86bW9ybmluZ3xhZnRlcm5vb24pKSk/KD8hLykoPz1cXFxcV3wkKVwiO1xuICAgIH1cblxuICAgIGV4dHJhY3RQcmltYXJ5VGltZUNvbXBvbmVudHMoY29udGV4dDogUGFyc2luZ0NvbnRleHQsIG1hdGNoOiBSZWdFeHBNYXRjaEFycmF5KTogbnVsbCB8IFBhcnNpbmdDb21wb25lbnRzIHtcbiAgICAgICAgY29uc3QgY29tcG9uZW50cyA9IHN1cGVyLmV4dHJhY3RQcmltYXJ5VGltZUNvbXBvbmVudHMoY29udGV4dCwgbWF0Y2gpO1xuICAgICAgICBpZiAoIWNvbXBvbmVudHMpIHtcbiAgICAgICAgICAgIHJldHVybiBjb21wb25lbnRzO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKG1hdGNoWzBdLmVuZHNXaXRoKFwibmlnaHRcIikpIHtcbiAgICAgICAgICAgIGNvbnN0IGhvdXIgPSBjb21wb25lbnRzLmdldChcImhvdXJcIik7XG4gICAgICAgICAgICBpZiAoaG91ciA+PSA2ICYmIGhvdXIgPCAxMikge1xuICAgICAgICAgICAgICAgIGNvbXBvbmVudHMuYXNzaWduKFwiaG91clwiLCBjb21wb25lbnRzLmdldChcImhvdXJcIikgKyAxMik7XG4gICAgICAgICAgICAgICAgY29tcG9uZW50cy5hc3NpZ24oXCJtZXJpZGllbVwiLCBNZXJpZGllbS5QTSk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGhvdXIgPCA2KSB7XG4gICAgICAgICAgICAgICAgY29tcG9uZW50cy5hc3NpZ24oXCJtZXJpZGllbVwiLCBNZXJpZGllbS5BTSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAobWF0Y2hbMF0uZW5kc1dpdGgoXCJhZnRlcm5vb25cIikpIHtcbiAgICAgICAgICAgIGNvbXBvbmVudHMuYXNzaWduKFwibWVyaWRpZW1cIiwgTWVyaWRpZW0uUE0pO1xuICAgICAgICAgICAgY29uc3QgaG91ciA9IGNvbXBvbmVudHMuZ2V0KFwiaG91clwiKTtcbiAgICAgICAgICAgIGlmIChob3VyID49IDAgJiYgaG91ciA8PSA2KSB7XG4gICAgICAgICAgICAgICAgY29tcG9uZW50cy5hc3NpZ24oXCJob3VyXCIsIGNvbXBvbmVudHMuZ2V0KFwiaG91clwiKSArIDEyKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChtYXRjaFswXS5lbmRzV2l0aChcIm1vcm5pbmdcIikpIHtcbiAgICAgICAgICAgIGNvbXBvbmVudHMuYXNzaWduKFwibWVyaWRpZW1cIiwgTWVyaWRpZW0uQU0pO1xuICAgICAgICAgICAgY29uc3QgaG91ciA9IGNvbXBvbmVudHMuZ2V0KFwiaG91clwiKTtcbiAgICAgICAgICAgIGlmIChob3VyIDwgMTIpIHtcbiAgICAgICAgICAgICAgICBjb21wb25lbnRzLmFzc2lnbihcImhvdXJcIiwgY29tcG9uZW50cy5nZXQoXCJob3VyXCIpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBjb21wb25lbnRzLmFkZFRhZyhcInBhcnNlci9FTlRpbWVFeHByZXNzaW9uUGFyc2VyXCIpO1xuICAgIH1cblxuICAgIGV4dHJhY3RGb2xsb3dpbmdUaW1lQ29tcG9uZW50cyhcbiAgICAgICAgY29udGV4dDogUGFyc2luZ0NvbnRleHQsXG4gICAgICAgIG1hdGNoOiBSZWdFeHBNYXRjaEFycmF5LFxuICAgICAgICByZXN1bHQ6IFBhcnNpbmdSZXN1bHRcbiAgICApOiBQYXJzaW5nQ29tcG9uZW50cyB8IG51bGwge1xuICAgICAgICBjb25zdCBmb2xsb3dpbmdDb21wb25lbnRzID0gc3VwZXIuZXh0cmFjdEZvbGxvd2luZ1RpbWVDb21wb25lbnRzKGNvbnRleHQsIG1hdGNoLCByZXN1bHQpO1xuICAgICAgICBpZiAoZm9sbG93aW5nQ29tcG9uZW50cykge1xuICAgICAgICAgICAgZm9sbG93aW5nQ29tcG9uZW50cy5hZGRUYWcoXCJwYXJzZXIvRU5UaW1lRXhwcmVzc2lvblBhcnNlclwiKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZm9sbG93aW5nQ29tcG9uZW50cztcbiAgICB9XG59XG4iLCAiaW1wb3J0IHsgT3BVbml0VHlwZSwgUVVuaXRUeXBlIH0gZnJvbSBcImRheWpzXCI7XG5pbXBvcnQgeyBQYXJzaW5nQ29tcG9uZW50cyB9IGZyb20gXCIuLi9yZXN1bHRzXCI7XG5cbmV4cG9ydCB0eXBlIFRpbWVVbml0cyA9IHsgW2MgaW4gT3BVbml0VHlwZSB8IFFVbml0VHlwZV0/OiBudW1iZXIgfTtcblxuZXhwb3J0IGZ1bmN0aW9uIHJldmVyc2VUaW1lVW5pdHModGltZVVuaXRzOiBUaW1lVW5pdHMpOiBUaW1lVW5pdHMge1xuICAgIGNvbnN0IHJldmVyc2VkID0ge307XG4gICAgZm9yIChjb25zdCBrZXkgaW4gdGltZVVuaXRzKSB7XG4gICAgICAgIC8vIG5vaW5zcGVjdGlvbiBKU1VuZmlsdGVyZWRGb3JJbkxvb3BcbiAgICAgICAgcmV2ZXJzZWRba2V5XSA9IC10aW1lVW5pdHNba2V5XTtcbiAgICB9XG5cbiAgICByZXR1cm4gcmV2ZXJzZWQgYXMgVGltZVVuaXRzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYWRkSW1wbGllZFRpbWVVbml0cyhjb21wb25lbnRzOiBQYXJzaW5nQ29tcG9uZW50cywgdGltZVVuaXRzOiBUaW1lVW5pdHMpOiBQYXJzaW5nQ29tcG9uZW50cyB7XG4gICAgY29uc3Qgb3V0cHV0ID0gY29tcG9uZW50cy5jbG9uZSgpO1xuXG4gICAgbGV0IGRhdGUgPSBjb21wb25lbnRzLmRheWpzKCk7XG4gICAgZm9yIChjb25zdCBrZXkgaW4gdGltZVVuaXRzKSB7XG4gICAgICAgIC8vIG5vaW5zcGVjdGlvbiBKU1VuZmlsdGVyZWRGb3JJbkxvb3AsVHlwZVNjcmlwdFZhbGlkYXRlVHlwZXNcbiAgICAgICAgZGF0ZSA9IGRhdGUuYWRkKHRpbWVVbml0c1trZXldLCBrZXkgYXMgUVVuaXRUeXBlKTtcbiAgICB9XG5cbiAgICBpZiAoXCJkYXlcIiBpbiB0aW1lVW5pdHMgfHwgXCJkXCIgaW4gdGltZVVuaXRzIHx8IFwid2Vla1wiIGluIHRpbWVVbml0cyB8fCBcIm1vbnRoXCIgaW4gdGltZVVuaXRzIHx8IFwieWVhclwiIGluIHRpbWVVbml0cykge1xuICAgICAgICBvdXRwdXQuaW1wbHkoXCJkYXlcIiwgZGF0ZS5kYXRlKCkpO1xuICAgICAgICBvdXRwdXQuaW1wbHkoXCJtb250aFwiLCBkYXRlLm1vbnRoKCkgKyAxKTtcbiAgICAgICAgb3V0cHV0LmltcGx5KFwieWVhclwiLCBkYXRlLnllYXIoKSk7XG4gICAgfVxuXG4gICAgaWYgKFwic2Vjb25kXCIgaW4gdGltZVVuaXRzIHx8IFwibWludXRlXCIgaW4gdGltZVVuaXRzIHx8IFwiaG91clwiIGluIHRpbWVVbml0cykge1xuICAgICAgICBvdXRwdXQuaW1wbHkoXCJzZWNvbmRcIiwgZGF0ZS5zZWNvbmQoKSk7XG4gICAgICAgIG91dHB1dC5pbXBseShcIm1pbnV0ZVwiLCBkYXRlLm1pbnV0ZSgpKTtcbiAgICAgICAgb3V0cHV0LmltcGx5KFwiaG91clwiLCBkYXRlLmhvdXIoKSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIG91dHB1dDtcbn1cbiIsICJpbXBvcnQgeyBQYXJzaW5nQ29udGV4dCB9IGZyb20gXCIuLi8uLi8uLi9jaHJvbm9cIjtcbmltcG9ydCB7IHBhcnNlVGltZVVuaXRzLCBUSU1FX1VOSVRTX05PX0FCQlJfUEFUVEVSTiwgVElNRV9VTklUU19QQVRURVJOIH0gZnJvbSBcIi4uL2NvbnN0YW50c1wiO1xuaW1wb3J0IHsgUGFyc2luZ0NvbXBvbmVudHMgfSBmcm9tIFwiLi4vLi4vLi4vcmVzdWx0c1wiO1xuaW1wb3J0IHsgQWJzdHJhY3RQYXJzZXJXaXRoV29yZEJvdW5kYXJ5Q2hlY2tpbmcgfSBmcm9tIFwiLi4vLi4vLi4vY29tbW9uL3BhcnNlcnMvQWJzdHJhY3RQYXJzZXJXaXRoV29yZEJvdW5kYXJ5XCI7XG5pbXBvcnQgeyByZXZlcnNlVGltZVVuaXRzIH0gZnJvbSBcIi4uLy4uLy4uL3V0aWxzL3RpbWV1bml0c1wiO1xuXG5jb25zdCBQQVRURVJOID0gbmV3IFJlZ0V4cChgKCR7VElNRV9VTklUU19QQVRURVJOfSlcXFxcc3swLDV9KD86YWdvfGJlZm9yZXxlYXJsaWVyKSg/PVxcXFxXfCQpYCwgXCJpXCIpO1xuY29uc3QgU1RSSUNUX1BBVFRFUk4gPSBuZXcgUmVnRXhwKGAoJHtUSU1FX1VOSVRTX05PX0FCQlJfUEFUVEVSTn0pXFxcXHN7MCw1fSg/OmFnb3xiZWZvcmV8ZWFybGllcikoPz1cXFxcV3wkKWAsIFwiaVwiKTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRU5UaW1lVW5pdEFnb0Zvcm1hdFBhcnNlciBleHRlbmRzIEFic3RyYWN0UGFyc2VyV2l0aFdvcmRCb3VuZGFyeUNoZWNraW5nIHtcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHN0cmljdE1vZGU6IGJvb2xlYW4pIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICB9XG5cbiAgICBpbm5lclBhdHRlcm4oKTogUmVnRXhwIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc3RyaWN0TW9kZSA/IFNUUklDVF9QQVRURVJOIDogUEFUVEVSTjtcbiAgICB9XG5cbiAgICBpbm5lckV4dHJhY3QoY29udGV4dDogUGFyc2luZ0NvbnRleHQsIG1hdGNoOiBSZWdFeHBNYXRjaEFycmF5KSB7XG4gICAgICAgIGNvbnN0IHRpbWVVbml0cyA9IHBhcnNlVGltZVVuaXRzKG1hdGNoWzFdKTtcbiAgICAgICAgaWYgKCF0aW1lVW5pdHMpIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IG91dHB1dFRpbWVVbml0cyA9IHJldmVyc2VUaW1lVW5pdHModGltZVVuaXRzKTtcbiAgICAgICAgcmV0dXJuIFBhcnNpbmdDb21wb25lbnRzLmNyZWF0ZVJlbGF0aXZlRnJvbVJlZmVyZW5jZShjb250ZXh0LnJlZmVyZW5jZSwgb3V0cHV0VGltZVVuaXRzKTtcbiAgICB9XG59XG4iLCAiaW1wb3J0IHsgUGFyc2luZ0NvbnRleHQgfSBmcm9tIFwiLi4vLi4vLi4vY2hyb25vXCI7XG5pbXBvcnQgeyBwYXJzZVRpbWVVbml0cywgVElNRV9VTklUU19OT19BQkJSX1BBVFRFUk4sIFRJTUVfVU5JVFNfUEFUVEVSTiB9IGZyb20gXCIuLi9jb25zdGFudHNcIjtcbmltcG9ydCB7IFBhcnNpbmdDb21wb25lbnRzIH0gZnJvbSBcIi4uLy4uLy4uL3Jlc3VsdHNcIjtcbmltcG9ydCB7IEFic3RyYWN0UGFyc2VyV2l0aFdvcmRCb3VuZGFyeUNoZWNraW5nIH0gZnJvbSBcIi4uLy4uLy4uL2NvbW1vbi9wYXJzZXJzL0Fic3RyYWN0UGFyc2VyV2l0aFdvcmRCb3VuZGFyeVwiO1xuXG5jb25zdCBQQVRURVJOID0gbmV3IFJlZ0V4cChcbiAgICBgKCR7VElNRV9VTklUU19QQVRURVJOfSlcXFxcc3swLDV9KD86bGF0ZXJ8YWZ0ZXJ8ZnJvbSBub3d8aGVuY2Vmb3J0aHxmb3J3YXJkfG91dClgICsgXCIoPz0oPzpcXFxcV3wkKSlcIixcbiAgICBcImlcIlxuKTtcblxuY29uc3QgU1RSSUNUX1BBVFRFUk4gPSBuZXcgUmVnRXhwKGAoJHtUSU1FX1VOSVRTX05PX0FCQlJfUEFUVEVSTn0pXFxcXHN7MCw1fShsYXRlcnxhZnRlcnxmcm9tIG5vdykoPz1cXFxcV3wkKWAsIFwiaVwiKTtcbmNvbnN0IEdST1VQX05VTV9USU1FVU5JVFMgPSAxO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBFTlRpbWVVbml0TGF0ZXJGb3JtYXRQYXJzZXIgZXh0ZW5kcyBBYnN0cmFjdFBhcnNlcldpdGhXb3JkQm91bmRhcnlDaGVja2luZyB7XG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBzdHJpY3RNb2RlOiBib29sZWFuKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgfVxuXG4gICAgaW5uZXJQYXR0ZXJuKCk6IFJlZ0V4cCB7XG4gICAgICAgIHJldHVybiB0aGlzLnN0cmljdE1vZGUgPyBTVFJJQ1RfUEFUVEVSTiA6IFBBVFRFUk47XG4gICAgfVxuXG4gICAgaW5uZXJFeHRyYWN0KGNvbnRleHQ6IFBhcnNpbmdDb250ZXh0LCBtYXRjaDogUmVnRXhwTWF0Y2hBcnJheSkge1xuICAgICAgICBjb25zdCB0aW1lVW5pdHMgPSBwYXJzZVRpbWVVbml0cyhtYXRjaFtHUk9VUF9OVU1fVElNRVVOSVRTXSk7XG4gICAgICAgIGlmICghdGltZVVuaXRzKSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gUGFyc2luZ0NvbXBvbmVudHMuY3JlYXRlUmVsYXRpdmVGcm9tUmVmZXJlbmNlKGNvbnRleHQucmVmZXJlbmNlLCB0aW1lVW5pdHMpO1xuICAgIH1cbn1cbiIsICJpbXBvcnQgeyBQYXJzaW5nQ29udGV4dCwgUmVmaW5lciB9IGZyb20gXCIuLi9jaHJvbm9cIjtcbmltcG9ydCB7IFBhcnNpbmdSZXN1bHQgfSBmcm9tIFwiLi4vcmVzdWx0c1wiO1xuXG4vKipcbiAqIEEgc3BlY2lhbCB0eXBlIG9mIHtAbGluayBSZWZpbmVyfSB0byBmaWx0ZXIgdGhlIHJlc3VsdHNcbiAqL1xuZXhwb3J0IGFic3RyYWN0IGNsYXNzIEZpbHRlciBpbXBsZW1lbnRzIFJlZmluZXIge1xuICAgIGFic3RyYWN0IGlzVmFsaWQoY29udGV4dDogUGFyc2luZ0NvbnRleHQsIHJlc3VsdDogUGFyc2luZ1Jlc3VsdCk6IGJvb2xlYW47XG5cbiAgICByZWZpbmUoY29udGV4dDogUGFyc2luZ0NvbnRleHQsIHJlc3VsdHM6IFBhcnNpbmdSZXN1bHRbXSk6IFBhcnNpbmdSZXN1bHRbXSB7XG4gICAgICAgIHJldHVybiByZXN1bHRzLmZpbHRlcigocikgPT4gdGhpcy5pc1ZhbGlkKGNvbnRleHQsIHIpKTtcbiAgICB9XG59XG5cbi8qKlxuICogQSBzcGVjaWFsIHR5cGUgb2Yge0BsaW5rIFJlZmluZXJ9IHRvIG1lcmdlIGNvbnNlY3V0aXZlIHJlc3VsdHNcbiAqL1xuZXhwb3J0IGFic3RyYWN0IGNsYXNzIE1lcmdpbmdSZWZpbmVyIGltcGxlbWVudHMgUmVmaW5lciB7XG4gICAgYWJzdHJhY3Qgc2hvdWxkTWVyZ2VSZXN1bHRzKFxuICAgICAgICB0ZXh0QmV0d2Vlbjogc3RyaW5nLFxuICAgICAgICBjdXJyZW50UmVzdWx0OiBQYXJzaW5nUmVzdWx0LFxuICAgICAgICBuZXh0UmVzdWx0OiBQYXJzaW5nUmVzdWx0LFxuICAgICAgICBjb250ZXh0OiBQYXJzaW5nQ29udGV4dFxuICAgICk6IGJvb2xlYW47XG5cbiAgICBhYnN0cmFjdCBtZXJnZVJlc3VsdHMoXG4gICAgICAgIHRleHRCZXR3ZWVuOiBzdHJpbmcsXG4gICAgICAgIGN1cnJlbnRSZXN1bHQ6IFBhcnNpbmdSZXN1bHQsXG4gICAgICAgIG5leHRSZXN1bHQ6IFBhcnNpbmdSZXN1bHQsXG4gICAgICAgIGNvbnRleHQ6IFBhcnNpbmdDb250ZXh0XG4gICAgKTogUGFyc2luZ1Jlc3VsdDtcblxuICAgIHJlZmluZShjb250ZXh0OiBQYXJzaW5nQ29udGV4dCwgcmVzdWx0czogUGFyc2luZ1Jlc3VsdFtdKTogUGFyc2luZ1Jlc3VsdFtdIHtcbiAgICAgICAgaWYgKHJlc3VsdHMubGVuZ3RoIDwgMikge1xuICAgICAgICAgICAgcmV0dXJuIHJlc3VsdHM7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBtZXJnZWRSZXN1bHRzOiBQYXJzaW5nUmVzdWx0W10gPSBbXTtcbiAgICAgICAgbGV0IGN1clJlc3VsdCA9IHJlc3VsdHNbMF07XG4gICAgICAgIGxldCBuZXh0UmVzdWx0ID0gbnVsbDtcblxuICAgICAgICBmb3IgKGxldCBpID0gMTsgaSA8IHJlc3VsdHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIG5leHRSZXN1bHQgPSByZXN1bHRzW2ldO1xuXG4gICAgICAgICAgICBjb25zdCB0ZXh0QmV0d2VlbiA9IGNvbnRleHQudGV4dC5zdWJzdHJpbmcoY3VyUmVzdWx0LmluZGV4ICsgY3VyUmVzdWx0LnRleHQubGVuZ3RoLCBuZXh0UmVzdWx0LmluZGV4KTtcbiAgICAgICAgICAgIGlmICghdGhpcy5zaG91bGRNZXJnZVJlc3VsdHModGV4dEJldHdlZW4sIGN1clJlc3VsdCwgbmV4dFJlc3VsdCwgY29udGV4dCkpIHtcbiAgICAgICAgICAgICAgICBtZXJnZWRSZXN1bHRzLnB1c2goY3VyUmVzdWx0KTtcbiAgICAgICAgICAgICAgICBjdXJSZXN1bHQgPSBuZXh0UmVzdWx0O1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBjb25zdCBsZWZ0ID0gY3VyUmVzdWx0O1xuICAgICAgICAgICAgICAgIGNvbnN0IHJpZ2h0ID0gbmV4dFJlc3VsdDtcbiAgICAgICAgICAgICAgICBjb25zdCBtZXJnZWRSZXN1bHQgPSB0aGlzLm1lcmdlUmVzdWx0cyh0ZXh0QmV0d2VlbiwgbGVmdCwgcmlnaHQsIGNvbnRleHQpO1xuICAgICAgICAgICAgICAgIGNvbnRleHQuZGVidWcoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhgJHt0aGlzLmNvbnN0cnVjdG9yLm5hbWV9IG1lcmdlZCAke2xlZnR9IGFuZCAke3JpZ2h0fSBpbnRvICR7bWVyZ2VkUmVzdWx0fWApO1xuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgY3VyUmVzdWx0ID0gbWVyZ2VkUmVzdWx0O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGN1clJlc3VsdCAhPSBudWxsKSB7XG4gICAgICAgICAgICBtZXJnZWRSZXN1bHRzLnB1c2goY3VyUmVzdWx0KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBtZXJnZWRSZXN1bHRzO1xuICAgIH1cbn1cbiIsICIvKlxuICBcbiovXG5cbmltcG9ydCB7IFBhcnNpbmdSZXN1bHQgfSBmcm9tIFwiLi4vLi4vcmVzdWx0c1wiO1xuaW1wb3J0IHsgTWVyZ2luZ1JlZmluZXIgfSBmcm9tIFwiLi4vYWJzdHJhY3RSZWZpbmVyc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBhYnN0cmFjdCBjbGFzcyBBYnN0cmFjdE1lcmdlRGF0ZVJhbmdlUmVmaW5lciBleHRlbmRzIE1lcmdpbmdSZWZpbmVyIHtcbiAgICBhYnN0cmFjdCBwYXR0ZXJuQmV0d2VlbigpOiBSZWdFeHA7XG5cbiAgICBzaG91bGRNZXJnZVJlc3VsdHModGV4dEJldHdlZW4sIGN1cnJlbnRSZXN1bHQsIG5leHRSZXN1bHQpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuICFjdXJyZW50UmVzdWx0LmVuZCAmJiAhbmV4dFJlc3VsdC5lbmQgJiYgdGV4dEJldHdlZW4ubWF0Y2godGhpcy5wYXR0ZXJuQmV0d2VlbigpKSAhPSBudWxsO1xuICAgIH1cblxuICAgIG1lcmdlUmVzdWx0cyh0ZXh0QmV0d2VlbiwgZnJvbVJlc3VsdCwgdG9SZXN1bHQpOiBQYXJzaW5nUmVzdWx0IHtcbiAgICAgICAgaWYgKCFmcm9tUmVzdWx0LnN0YXJ0LmlzT25seVdlZWtkYXlDb21wb25lbnQoKSAmJiAhdG9SZXN1bHQuc3RhcnQuaXNPbmx5V2Vla2RheUNvbXBvbmVudCgpKSB7XG4gICAgICAgICAgICB0b1Jlc3VsdC5zdGFydC5nZXRDZXJ0YWluQ29tcG9uZW50cygpLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgICAgICAgICAgIGlmICghZnJvbVJlc3VsdC5zdGFydC5pc0NlcnRhaW4oa2V5KSkge1xuICAgICAgICAgICAgICAgICAgICBmcm9tUmVzdWx0LnN0YXJ0LmltcGx5KGtleSwgdG9SZXN1bHQuc3RhcnQuZ2V0KGtleSkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBmcm9tUmVzdWx0LnN0YXJ0LmdldENlcnRhaW5Db21wb25lbnRzKCkuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKCF0b1Jlc3VsdC5zdGFydC5pc0NlcnRhaW4oa2V5KSkge1xuICAgICAgICAgICAgICAgICAgICB0b1Jlc3VsdC5zdGFydC5pbXBseShrZXksIGZyb21SZXN1bHQuc3RhcnQuZ2V0KGtleSkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGZyb21SZXN1bHQuc3RhcnQuZGF0ZSgpLmdldFRpbWUoKSA+IHRvUmVzdWx0LnN0YXJ0LmRhdGUoKS5nZXRUaW1lKCkpIHtcbiAgICAgICAgICAgIGxldCBmcm9tTW9tZW50ID0gZnJvbVJlc3VsdC5zdGFydC5kYXlqcygpO1xuICAgICAgICAgICAgbGV0IHRvTW9tZW50ID0gdG9SZXN1bHQuc3RhcnQuZGF5anMoKTtcbiAgICAgICAgICAgIGlmICh0b1Jlc3VsdC5zdGFydC5pc09ubHlXZWVrZGF5Q29tcG9uZW50KCkgJiYgdG9Nb21lbnQuYWRkKDcsIFwiZGF5c1wiKS5pc0FmdGVyKGZyb21Nb21lbnQpKSB7XG4gICAgICAgICAgICAgICAgdG9Nb21lbnQgPSB0b01vbWVudC5hZGQoNywgXCJkYXlzXCIpO1xuICAgICAgICAgICAgICAgIHRvUmVzdWx0LnN0YXJ0LmltcGx5KFwiZGF5XCIsIHRvTW9tZW50LmRhdGUoKSk7XG4gICAgICAgICAgICAgICAgdG9SZXN1bHQuc3RhcnQuaW1wbHkoXCJtb250aFwiLCB0b01vbWVudC5tb250aCgpICsgMSk7XG4gICAgICAgICAgICAgICAgdG9SZXN1bHQuc3RhcnQuaW1wbHkoXCJ5ZWFyXCIsIHRvTW9tZW50LnllYXIoKSk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGZyb21SZXN1bHQuc3RhcnQuaXNPbmx5V2Vla2RheUNvbXBvbmVudCgpICYmIGZyb21Nb21lbnQuYWRkKC03LCBcImRheXNcIikuaXNCZWZvcmUodG9Nb21lbnQpKSB7XG4gICAgICAgICAgICAgICAgZnJvbU1vbWVudCA9IGZyb21Nb21lbnQuYWRkKC03LCBcImRheXNcIik7XG4gICAgICAgICAgICAgICAgZnJvbVJlc3VsdC5zdGFydC5pbXBseShcImRheVwiLCBmcm9tTW9tZW50LmRhdGUoKSk7XG4gICAgICAgICAgICAgICAgZnJvbVJlc3VsdC5zdGFydC5pbXBseShcIm1vbnRoXCIsIGZyb21Nb21lbnQubW9udGgoKSArIDEpO1xuICAgICAgICAgICAgICAgIGZyb21SZXN1bHQuc3RhcnQuaW1wbHkoXCJ5ZWFyXCIsIGZyb21Nb21lbnQueWVhcigpKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodG9SZXN1bHQuc3RhcnQuaXNEYXRlV2l0aFVua25vd25ZZWFyKCkgJiYgdG9Nb21lbnQuYWRkKDEsIFwieWVhcnNcIikuaXNBZnRlcihmcm9tTW9tZW50KSkge1xuICAgICAgICAgICAgICAgIHRvTW9tZW50ID0gdG9Nb21lbnQuYWRkKDEsIFwieWVhcnNcIik7XG4gICAgICAgICAgICAgICAgdG9SZXN1bHQuc3RhcnQuaW1wbHkoXCJ5ZWFyXCIsIHRvTW9tZW50LnllYXIoKSk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGZyb21SZXN1bHQuc3RhcnQuaXNEYXRlV2l0aFVua25vd25ZZWFyKCkgJiYgZnJvbU1vbWVudC5hZGQoLTEsIFwieWVhcnNcIikuaXNCZWZvcmUodG9Nb21lbnQpKSB7XG4gICAgICAgICAgICAgICAgZnJvbU1vbWVudCA9IGZyb21Nb21lbnQuYWRkKC0xLCBcInllYXJzXCIpO1xuICAgICAgICAgICAgICAgIGZyb21SZXN1bHQuc3RhcnQuaW1wbHkoXCJ5ZWFyXCIsIGZyb21Nb21lbnQueWVhcigpKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgW3RvUmVzdWx0LCBmcm9tUmVzdWx0XSA9IFtmcm9tUmVzdWx0LCB0b1Jlc3VsdF07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCByZXN1bHQgPSBmcm9tUmVzdWx0LmNsb25lKCk7XG4gICAgICAgIHJlc3VsdC5zdGFydCA9IGZyb21SZXN1bHQuc3RhcnQ7XG4gICAgICAgIHJlc3VsdC5lbmQgPSB0b1Jlc3VsdC5zdGFydDtcbiAgICAgICAgcmVzdWx0LmluZGV4ID0gTWF0aC5taW4oZnJvbVJlc3VsdC5pbmRleCwgdG9SZXN1bHQuaW5kZXgpO1xuICAgICAgICBpZiAoZnJvbVJlc3VsdC5pbmRleCA8IHRvUmVzdWx0LmluZGV4KSB7XG4gICAgICAgICAgICByZXN1bHQudGV4dCA9IGZyb21SZXN1bHQudGV4dCArIHRleHRCZXR3ZWVuICsgdG9SZXN1bHQudGV4dDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJlc3VsdC50ZXh0ID0gdG9SZXN1bHQudGV4dCArIHRleHRCZXR3ZWVuICsgZnJvbVJlc3VsdC50ZXh0O1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG59XG4iLCAiLypcbiAgXG4qL1xuXG5pbXBvcnQgQWJzdHJhY3RNZXJnZURhdGVSYW5nZVJlZmluZXIgZnJvbSBcIi4uLy4uLy4uL2NvbW1vbi9yZWZpbmVycy9BYnN0cmFjdE1lcmdlRGF0ZVJhbmdlUmVmaW5lclwiO1xuXG4vKipcbiAqIE1lcmdpbmcgYmVmb3JlIGFuZCBhZnRlciByZXN1bHRzIChzZWUuIEFic3RyYWN0TWVyZ2VEYXRlUmFuZ2VSZWZpbmVyKVxuICogVGhpcyBpbXBsZW1lbnRhdGlvbiBzaG91bGQgcHJvdmlkZSBFbmdsaXNoIGNvbm5lY3RpbmcgcGhhc2VzXG4gKiAtIDIwMjAtMDItMTMgW3RvXSAyMDIwLTAyLTEzXG4gKiAtIFdlZG5lc2RheSBbLV0gRnJpZGF5XG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEVOTWVyZ2VEYXRlUmFuZ2VSZWZpbmVyIGV4dGVuZHMgQWJzdHJhY3RNZXJnZURhdGVSYW5nZVJlZmluZXIge1xuICAgIHBhdHRlcm5CZXR3ZWVuKCk6IFJlZ0V4cCB7XG4gICAgICAgIHJldHVybiAvXlxccyoodG98LXxcdTIwMTN8dW50aWx8dGhyb3VnaHx0aWxsKVxccyokL2k7XG4gICAgfVxufVxuIiwgImltcG9ydCB7IFBhcnNpbmdDb21wb25lbnRzLCBQYXJzaW5nUmVzdWx0IH0gZnJvbSBcIi4uL3Jlc3VsdHNcIjtcbmltcG9ydCB7IE1lcmlkaWVtIH0gZnJvbSBcIi4uL3R5cGVzXCI7XG5pbXBvcnQgeyBhc3NpZ25TaW1pbGFyRGF0ZSwgaW1wbHlTaW1pbGFyRGF0ZSB9IGZyb20gXCIuLi91dGlscy9kYXlqc1wiO1xuXG5leHBvcnQgZnVuY3Rpb24gbWVyZ2VEYXRlVGltZVJlc3VsdChkYXRlUmVzdWx0OiBQYXJzaW5nUmVzdWx0LCB0aW1lUmVzdWx0OiBQYXJzaW5nUmVzdWx0KTogUGFyc2luZ1Jlc3VsdCB7XG4gICAgY29uc3QgcmVzdWx0ID0gZGF0ZVJlc3VsdC5jbG9uZSgpO1xuICAgIGNvbnN0IGJlZ2luRGF0ZSA9IGRhdGVSZXN1bHQuc3RhcnQ7XG4gICAgY29uc3QgYmVnaW5UaW1lID0gdGltZVJlc3VsdC5zdGFydDtcblxuICAgIHJlc3VsdC5zdGFydCA9IG1lcmdlRGF0ZVRpbWVDb21wb25lbnQoYmVnaW5EYXRlLCBiZWdpblRpbWUpO1xuICAgIGlmIChkYXRlUmVzdWx0LmVuZCAhPSBudWxsIHx8IHRpbWVSZXN1bHQuZW5kICE9IG51bGwpIHtcbiAgICAgICAgY29uc3QgZW5kRGF0ZSA9IGRhdGVSZXN1bHQuZW5kID09IG51bGwgPyBkYXRlUmVzdWx0LnN0YXJ0IDogZGF0ZVJlc3VsdC5lbmQ7XG4gICAgICAgIGNvbnN0IGVuZFRpbWUgPSB0aW1lUmVzdWx0LmVuZCA9PSBudWxsID8gdGltZVJlc3VsdC5zdGFydCA6IHRpbWVSZXN1bHQuZW5kO1xuICAgICAgICBjb25zdCBlbmREYXRlVGltZSA9IG1lcmdlRGF0ZVRpbWVDb21wb25lbnQoZW5kRGF0ZSwgZW5kVGltZSk7XG5cbiAgICAgICAgaWYgKGRhdGVSZXN1bHQuZW5kID09IG51bGwgJiYgZW5kRGF0ZVRpbWUuZGF0ZSgpLmdldFRpbWUoKSA8IHJlc3VsdC5zdGFydC5kYXRlKCkuZ2V0VGltZSgpKSB7XG4gICAgICAgICAgICAvLyBGb3IgZXhhbXBsZSwgIFwiVHVlc2RheSA5cG0gLSAxYW1cIiB0aGUgZW5kaW5nIHNob3VsZCBhY3R1YWxseSBiZSAxYW0gb24gdGhlIG5leHQgZGF5LlxuICAgICAgICAgICAgLy8gV2UgbmVlZCB0byBhZGQgdG8gZW5kaW5nIGJ5IGFub3RoZXIgZGF5LlxuICAgICAgICAgICAgY29uc3QgbmV4dERheUpzID0gZW5kRGF0ZVRpbWUuZGF5anMoKS5hZGQoMSwgXCJkYXlcIik7XG4gICAgICAgICAgICBpZiAoZW5kRGF0ZVRpbWUuaXNDZXJ0YWluKFwiZGF5XCIpKSB7XG4gICAgICAgICAgICAgICAgYXNzaWduU2ltaWxhckRhdGUoZW5kRGF0ZVRpbWUsIG5leHREYXlKcyk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGltcGx5U2ltaWxhckRhdGUoZW5kRGF0ZVRpbWUsIG5leHREYXlKcyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXN1bHQuZW5kID0gZW5kRGF0ZVRpbWU7XG4gICAgfVxuXG4gICAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG1lcmdlRGF0ZVRpbWVDb21wb25lbnQoXG4gICAgZGF0ZUNvbXBvbmVudDogUGFyc2luZ0NvbXBvbmVudHMsXG4gICAgdGltZUNvbXBvbmVudDogUGFyc2luZ0NvbXBvbmVudHNcbik6IFBhcnNpbmdDb21wb25lbnRzIHtcbiAgICBjb25zdCBkYXRlVGltZUNvbXBvbmVudCA9IGRhdGVDb21wb25lbnQuY2xvbmUoKTtcblxuICAgIGlmICh0aW1lQ29tcG9uZW50LmlzQ2VydGFpbihcImhvdXJcIikpIHtcbiAgICAgICAgZGF0ZVRpbWVDb21wb25lbnQuYXNzaWduKFwiaG91clwiLCB0aW1lQ29tcG9uZW50LmdldChcImhvdXJcIikpO1xuICAgICAgICBkYXRlVGltZUNvbXBvbmVudC5hc3NpZ24oXCJtaW51dGVcIiwgdGltZUNvbXBvbmVudC5nZXQoXCJtaW51dGVcIikpO1xuXG4gICAgICAgIGlmICh0aW1lQ29tcG9uZW50LmlzQ2VydGFpbihcInNlY29uZFwiKSkge1xuICAgICAgICAgICAgZGF0ZVRpbWVDb21wb25lbnQuYXNzaWduKFwic2Vjb25kXCIsIHRpbWVDb21wb25lbnQuZ2V0KFwic2Vjb25kXCIpKTtcblxuICAgICAgICAgICAgaWYgKHRpbWVDb21wb25lbnQuaXNDZXJ0YWluKFwibWlsbGlzZWNvbmRcIikpIHtcbiAgICAgICAgICAgICAgICBkYXRlVGltZUNvbXBvbmVudC5hc3NpZ24oXCJtaWxsaXNlY29uZFwiLCB0aW1lQ29tcG9uZW50LmdldChcIm1pbGxpc2Vjb25kXCIpKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgZGF0ZVRpbWVDb21wb25lbnQuaW1wbHkoXCJtaWxsaXNlY29uZFwiLCB0aW1lQ29tcG9uZW50LmdldChcIm1pbGxpc2Vjb25kXCIpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGRhdGVUaW1lQ29tcG9uZW50LmltcGx5KFwic2Vjb25kXCIsIHRpbWVDb21wb25lbnQuZ2V0KFwic2Vjb25kXCIpKTtcbiAgICAgICAgICAgIGRhdGVUaW1lQ29tcG9uZW50LmltcGx5KFwibWlsbGlzZWNvbmRcIiwgdGltZUNvbXBvbmVudC5nZXQoXCJtaWxsaXNlY29uZFwiKSk7XG4gICAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgICBkYXRlVGltZUNvbXBvbmVudC5pbXBseShcImhvdXJcIiwgdGltZUNvbXBvbmVudC5nZXQoXCJob3VyXCIpKTtcbiAgICAgICAgZGF0ZVRpbWVDb21wb25lbnQuaW1wbHkoXCJtaW51dGVcIiwgdGltZUNvbXBvbmVudC5nZXQoXCJtaW51dGVcIikpO1xuICAgICAgICBkYXRlVGltZUNvbXBvbmVudC5pbXBseShcInNlY29uZFwiLCB0aW1lQ29tcG9uZW50LmdldChcInNlY29uZFwiKSk7XG4gICAgICAgIGRhdGVUaW1lQ29tcG9uZW50LmltcGx5KFwibWlsbGlzZWNvbmRcIiwgdGltZUNvbXBvbmVudC5nZXQoXCJtaWxsaXNlY29uZFwiKSk7XG4gICAgfVxuXG4gICAgaWYgKHRpbWVDb21wb25lbnQuaXNDZXJ0YWluKFwidGltZXpvbmVPZmZzZXRcIikpIHtcbiAgICAgICAgZGF0ZVRpbWVDb21wb25lbnQuYXNzaWduKFwidGltZXpvbmVPZmZzZXRcIiwgdGltZUNvbXBvbmVudC5nZXQoXCJ0aW1lem9uZU9mZnNldFwiKSk7XG4gICAgfVxuXG4gICAgaWYgKHRpbWVDb21wb25lbnQuaXNDZXJ0YWluKFwibWVyaWRpZW1cIikpIHtcbiAgICAgICAgZGF0ZVRpbWVDb21wb25lbnQuYXNzaWduKFwibWVyaWRpZW1cIiwgdGltZUNvbXBvbmVudC5nZXQoXCJtZXJpZGllbVwiKSk7XG4gICAgfSBlbHNlIGlmICh0aW1lQ29tcG9uZW50LmdldChcIm1lcmlkaWVtXCIpICE9IG51bGwgJiYgZGF0ZVRpbWVDb21wb25lbnQuZ2V0KFwibWVyaWRpZW1cIikgPT0gbnVsbCkge1xuICAgICAgICBkYXRlVGltZUNvbXBvbmVudC5pbXBseShcIm1lcmlkaWVtXCIsIHRpbWVDb21wb25lbnQuZ2V0KFwibWVyaWRpZW1cIikpO1xuICAgIH1cblxuICAgIGlmIChkYXRlVGltZUNvbXBvbmVudC5nZXQoXCJtZXJpZGllbVwiKSA9PSBNZXJpZGllbS5QTSAmJiBkYXRlVGltZUNvbXBvbmVudC5nZXQoXCJob3VyXCIpIDwgMTIpIHtcbiAgICAgICAgaWYgKHRpbWVDb21wb25lbnQuaXNDZXJ0YWluKFwiaG91clwiKSkge1xuICAgICAgICAgICAgZGF0ZVRpbWVDb21wb25lbnQuYXNzaWduKFwiaG91clwiLCBkYXRlVGltZUNvbXBvbmVudC5nZXQoXCJob3VyXCIpICsgMTIpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZGF0ZVRpbWVDb21wb25lbnQuaW1wbHkoXCJob3VyXCIsIGRhdGVUaW1lQ29tcG9uZW50LmdldChcImhvdXJcIikgKyAxMik7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBkYXRlVGltZUNvbXBvbmVudC5hZGRUYWdzKGRhdGVDb21wb25lbnQudGFncygpKTtcbiAgICBkYXRlVGltZUNvbXBvbmVudC5hZGRUYWdzKHRpbWVDb21wb25lbnQudGFncygpKTtcbiAgICByZXR1cm4gZGF0ZVRpbWVDb21wb25lbnQ7XG59XG4iLCAiLypcblxuKi9cblxuaW1wb3J0IHsgTWVyZ2luZ1JlZmluZXIgfSBmcm9tIFwiLi4vYWJzdHJhY3RSZWZpbmVyc1wiO1xuaW1wb3J0IHsgUGFyc2luZ1Jlc3VsdCB9IGZyb20gXCIuLi8uLi9yZXN1bHRzXCI7XG5pbXBvcnQgeyBtZXJnZURhdGVUaW1lUmVzdWx0IH0gZnJvbSBcIi4uLy4uL2NhbGN1bGF0aW9uL21lcmdpbmdDYWxjdWxhdGlvblwiO1xuXG5leHBvcnQgZGVmYXVsdCBhYnN0cmFjdCBjbGFzcyBBYnN0cmFjdE1lcmdlRGF0ZVRpbWVSZWZpbmVyIGV4dGVuZHMgTWVyZ2luZ1JlZmluZXIge1xuICAgIGFic3RyYWN0IHBhdHRlcm5CZXR3ZWVuKCk6IFJlZ0V4cDtcblxuICAgIHNob3VsZE1lcmdlUmVzdWx0cyh0ZXh0QmV0d2Vlbjogc3RyaW5nLCBjdXJyZW50UmVzdWx0OiBQYXJzaW5nUmVzdWx0LCBuZXh0UmVzdWx0OiBQYXJzaW5nUmVzdWx0KTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAoKGN1cnJlbnRSZXN1bHQuc3RhcnQuaXNPbmx5RGF0ZSgpICYmIG5leHRSZXN1bHQuc3RhcnQuaXNPbmx5VGltZSgpKSB8fFxuICAgICAgICAgICAgICAgIChuZXh0UmVzdWx0LnN0YXJ0LmlzT25seURhdGUoKSAmJiBjdXJyZW50UmVzdWx0LnN0YXJ0LmlzT25seVRpbWUoKSkpICYmXG4gICAgICAgICAgICB0ZXh0QmV0d2Vlbi5tYXRjaCh0aGlzLnBhdHRlcm5CZXR3ZWVuKCkpICE9IG51bGxcbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICBtZXJnZVJlc3VsdHModGV4dEJldHdlZW46IHN0cmluZywgY3VycmVudFJlc3VsdDogUGFyc2luZ1Jlc3VsdCwgbmV4dFJlc3VsdDogUGFyc2luZ1Jlc3VsdCk6IFBhcnNpbmdSZXN1bHQge1xuICAgICAgICBjb25zdCByZXN1bHQgPSBjdXJyZW50UmVzdWx0LnN0YXJ0LmlzT25seURhdGUoKVxuICAgICAgICAgICAgPyBtZXJnZURhdGVUaW1lUmVzdWx0KGN1cnJlbnRSZXN1bHQsIG5leHRSZXN1bHQpXG4gICAgICAgICAgICA6IG1lcmdlRGF0ZVRpbWVSZXN1bHQobmV4dFJlc3VsdCwgY3VycmVudFJlc3VsdCk7XG5cbiAgICAgICAgcmVzdWx0LmluZGV4ID0gY3VycmVudFJlc3VsdC5pbmRleDtcbiAgICAgICAgcmVzdWx0LnRleHQgPSBjdXJyZW50UmVzdWx0LnRleHQgKyB0ZXh0QmV0d2VlbiArIG5leHRSZXN1bHQudGV4dDtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG59XG4iLCAiaW1wb3J0IEFic3RyYWN0TWVyZ2VEYXRlVGltZVJlZmluZXIgZnJvbSBcIi4uLy4uLy4uL2NvbW1vbi9yZWZpbmVycy9BYnN0cmFjdE1lcmdlRGF0ZVRpbWVSZWZpbmVyXCI7XG5cbi8qKlxuICogTWVyZ2luZyBkYXRlLW9ubHkgcmVzdWx0IGFuZCB0aW1lLW9ubHkgcmVzdWx0IChzZWUuIEFic3RyYWN0TWVyZ2VEYXRlVGltZVJlZmluZXIpLlxuICogVGhpcyBpbXBsZW1lbnRhdGlvbiBzaG91bGQgcHJvdmlkZSBFbmdsaXNoIGNvbm5lY3RpbmcgcGhhc2VzXG4gKiAtIDIwMjAtMDItMTMgW2F0XSA2cG1cbiAqIC0gVG9tb3Jyb3cgW2FmdGVyXSA3YW1cbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRU5NZXJnZURhdGVUaW1lUmVmaW5lciBleHRlbmRzIEFic3RyYWN0TWVyZ2VEYXRlVGltZVJlZmluZXIge1xuICAgIHBhdHRlcm5CZXR3ZWVuKCk6IFJlZ0V4cCB7XG4gICAgICAgIHJldHVybiBuZXcgUmVnRXhwKFwiXlxcXFxzKihUfGF0fGFmdGVyfGJlZm9yZXxvbnxvZnwsfC18XFxcXC58XHUyMjE5fDopP1xcXFxzKiRcIik7XG4gICAgfVxufVxuIiwgIi8vIE1hcCBBQkJSIC0+IE9mZnNldCBpbiBtaW51dGVcbmltcG9ydCB7IFBhcnNpbmdDb250ZXh0LCBSZWZpbmVyIH0gZnJvbSBcIi4uLy4uL2Nocm9ub1wiO1xuaW1wb3J0IHsgVGltZXpvbmVBYmJyTWFwIH0gZnJvbSBcIi4uLy4uL3R5cGVzXCI7XG5pbXBvcnQgeyBQYXJzaW5nUmVzdWx0IH0gZnJvbSBcIi4uLy4uL3Jlc3VsdHNcIjtcbmltcG9ydCB7IHRvVGltZXpvbmVPZmZzZXQgfSBmcm9tIFwiLi4vLi4vdGltZXpvbmVcIjtcblxuY29uc3QgVElNRVpPTkVfTkFNRV9QQVRURVJOID0gbmV3IFJlZ0V4cChcIl5cXFxccyosP1xcXFxzKlxcXFwoPyhbQS1aXXsyLDR9KVxcXFwpPyg/PVxcXFxXfCQpXCIsIFwiaVwiKTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRXh0cmFjdFRpbWV6b25lQWJiclJlZmluZXIgaW1wbGVtZW50cyBSZWZpbmVyIHtcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJlYWRvbmx5IHRpbWV6b25lT3ZlcnJpZGVzPzogVGltZXpvbmVBYmJyTWFwKSB7fVxuXG4gICAgcmVmaW5lKGNvbnRleHQ6IFBhcnNpbmdDb250ZXh0LCByZXN1bHRzOiBQYXJzaW5nUmVzdWx0W10pOiBQYXJzaW5nUmVzdWx0W10ge1xuICAgICAgICBjb25zdCB0aW1lem9uZU92ZXJyaWRlcyA9IGNvbnRleHQub3B0aW9uLnRpbWV6b25lcyA/PyB7fTtcblxuICAgICAgICByZXN1bHRzLmZvckVhY2goKHJlc3VsdCkgPT4ge1xuICAgICAgICAgICAgY29uc3Qgc3VmZml4ID0gY29udGV4dC50ZXh0LnN1YnN0cmluZyhyZXN1bHQuaW5kZXggKyByZXN1bHQudGV4dC5sZW5ndGgpO1xuICAgICAgICAgICAgY29uc3QgbWF0Y2ggPSBUSU1FWk9ORV9OQU1FX1BBVFRFUk4uZXhlYyhzdWZmaXgpO1xuICAgICAgICAgICAgaWYgKCFtYXRjaCkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY29uc3QgdGltZXpvbmVBYmJyID0gbWF0Y2hbMV0udG9VcHBlckNhc2UoKTtcbiAgICAgICAgICAgIGNvbnN0IHJlZkRhdGUgPSByZXN1bHQuc3RhcnQuZGF0ZSgpID8/IHJlc3VsdC5yZWZEYXRlID8/IG5ldyBEYXRlKCk7XG4gICAgICAgICAgICBjb25zdCB0ek92ZXJyaWRlcyA9IHsgLi4udGhpcy50aW1lem9uZU92ZXJyaWRlcywgLi4udGltZXpvbmVPdmVycmlkZXMgfTtcbiAgICAgICAgICAgIGNvbnN0IGV4dHJhY3RlZFRpbWV6b25lT2Zmc2V0ID0gdG9UaW1lem9uZU9mZnNldCh0aW1lem9uZUFiYnIsIHJlZkRhdGUsIHR6T3ZlcnJpZGVzKTtcbiAgICAgICAgICAgIGlmIChleHRyYWN0ZWRUaW1lem9uZU9mZnNldCA9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29udGV4dC5kZWJ1ZygoKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXG4gICAgICAgICAgICAgICAgICAgIGBFeHRyYWN0aW5nIHRpbWV6b25lOiAnJHt0aW1lem9uZUFiYnJ9JyBpbnRvOiAke2V4dHJhY3RlZFRpbWV6b25lT2Zmc2V0fSBmb3I6ICR7cmVzdWx0LnN0YXJ0fWBcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIGNvbnN0IGN1cnJlbnRUaW1lem9uZU9mZnNldCA9IHJlc3VsdC5zdGFydC5nZXQoXCJ0aW1lem9uZU9mZnNldFwiKTtcbiAgICAgICAgICAgIGlmIChjdXJyZW50VGltZXpvbmVPZmZzZXQgIT09IG51bGwgJiYgZXh0cmFjdGVkVGltZXpvbmVPZmZzZXQgIT0gY3VycmVudFRpbWV6b25lT2Zmc2V0KSB7XG4gICAgICAgICAgICAgICAgLy8gV2UgbWF5IGFscmVhZHkgaGF2ZSBleHRyYWN0ZWQgdGhlIHRpbWV6b25lIG9mZnNldCBlLmcuIFwiMTEgYW0gR01UKzA5MDAgKEpTVClcIlxuICAgICAgICAgICAgICAgIC8vIC0gaWYgdGhleSBhcmUgZXF1YWwsIHdlIGFsc28gd2FudCB0byB0YWtlIHRoZSBhYmJyZXZpYXRpb24gdGV4dCBpbnRvIHJlc3VsdFxuICAgICAgICAgICAgICAgIC8vIC0gaWYgdGhleSBhcmUgbm90IGVxdWFsLCB3ZSB0cnVzdCB0aGUgb2Zmc2V0IG1vcmVcbiAgICAgICAgICAgICAgICBpZiAocmVzdWx0LnN0YXJ0LmlzQ2VydGFpbihcInRpbWV6b25lT2Zmc2V0XCIpKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAvLyBUaGlzIGlzIG9mdGVuIGJlY2F1c2UgaXQncyByZWxhdGl2ZSB0aW1lIHdpdGggaW5mZXJyZWQgdGltZXpvbmUgKGUuZy4gaW4gMSBob3VyLCB0b21vcnJvdylcbiAgICAgICAgICAgICAgICAvLyBUaGVuLCB3ZSB3YW50IHRvIGRvdWJsZS1jaGVjayB0aGUgYWJiciBjYXNlIChlLmcuIFwiR0VUXCIgbm90IFwiZ2V0XCIpXG4gICAgICAgICAgICAgICAgaWYgKHRpbWV6b25lQWJiciAhPSBtYXRjaFsxXSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAocmVzdWx0LnN0YXJ0LmlzT25seURhdGUoKSkge1xuICAgICAgICAgICAgICAgIC8vIElmIHRoZSB0aW1lIGlzIG5vdCBleHBsaWNpdGx5IG1lbnRpb25lZCxcbiAgICAgICAgICAgICAgICAvLyBUaGVuLCB3ZSBhbHNvIHdhbnQgdG8gZG91YmxlLWNoZWNrIHRoZSBhYmJyIGNhc2UgKGUuZy4gXCJHRVRcIiBub3QgXCJnZXRcIilcbiAgICAgICAgICAgICAgICBpZiAodGltZXpvbmVBYmJyICE9IG1hdGNoWzFdKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJlc3VsdC50ZXh0ICs9IG1hdGNoWzBdO1xuXG4gICAgICAgICAgICBpZiAoIXJlc3VsdC5zdGFydC5pc0NlcnRhaW4oXCJ0aW1lem9uZU9mZnNldFwiKSkge1xuICAgICAgICAgICAgICAgIHJlc3VsdC5zdGFydC5hc3NpZ24oXCJ0aW1lem9uZU9mZnNldFwiLCBleHRyYWN0ZWRUaW1lem9uZU9mZnNldCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChyZXN1bHQuZW5kICE9IG51bGwgJiYgIXJlc3VsdC5lbmQuaXNDZXJ0YWluKFwidGltZXpvbmVPZmZzZXRcIikpIHtcbiAgICAgICAgICAgICAgICByZXN1bHQuZW5kLmFzc2lnbihcInRpbWV6b25lT2Zmc2V0XCIsIGV4dHJhY3RlZFRpbWV6b25lT2Zmc2V0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdHM7XG4gICAgfVxufVxuIiwgImltcG9ydCB7IFBhcnNpbmdDb250ZXh0LCBSZWZpbmVyIH0gZnJvbSBcIi4uLy4uL2Nocm9ub1wiO1xuaW1wb3J0IHsgUGFyc2luZ1Jlc3VsdCB9IGZyb20gXCIuLi8uLi9yZXN1bHRzXCI7XG5cbmNvbnN0IFRJTUVaT05FX09GRlNFVF9QQVRURVJOID0gbmV3IFJlZ0V4cChcIl5cXFxccyooPzpcXFxcKD8oPzpHTVR8VVRDKVxcXFxzPyk/KFsrLV0pKFxcXFxkezEsMn0pKD86Oj8oXFxcXGR7Mn0pKT9cXFxcKT9cIiwgXCJpXCIpO1xuY29uc3QgVElNRVpPTkVfT0ZGU0VUX1NJR05fR1JPVVAgPSAxO1xuY29uc3QgVElNRVpPTkVfT0ZGU0VUX0hPVVJfT0ZGU0VUX0dST1VQID0gMjtcbmNvbnN0IFRJTUVaT05FX09GRlNFVF9NSU5VVEVfT0ZGU0VUX0dST1VQID0gMztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRXh0cmFjdFRpbWV6b25lT2Zmc2V0UmVmaW5lciBpbXBsZW1lbnRzIFJlZmluZXIge1xuICAgIHJlZmluZShjb250ZXh0OiBQYXJzaW5nQ29udGV4dCwgcmVzdWx0czogUGFyc2luZ1Jlc3VsdFtdKTogUGFyc2luZ1Jlc3VsdFtdIHtcbiAgICAgICAgcmVzdWx0cy5mb3JFYWNoKGZ1bmN0aW9uIChyZXN1bHQpIHtcbiAgICAgICAgICAgIGlmIChyZXN1bHQuc3RhcnQuaXNDZXJ0YWluKFwidGltZXpvbmVPZmZzZXRcIikpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGNvbnN0IHN1ZmZpeCA9IGNvbnRleHQudGV4dC5zdWJzdHJpbmcocmVzdWx0LmluZGV4ICsgcmVzdWx0LnRleHQubGVuZ3RoKTtcbiAgICAgICAgICAgIGNvbnN0IG1hdGNoID0gVElNRVpPTkVfT0ZGU0VUX1BBVFRFUk4uZXhlYyhzdWZmaXgpO1xuICAgICAgICAgICAgaWYgKCFtYXRjaCkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY29udGV4dC5kZWJ1ZygoKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coYEV4dHJhY3RpbmcgdGltZXpvbmU6ICcke21hdGNoWzBdfScgaW50byA6ICR7cmVzdWx0fWApO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIGNvbnN0IGhvdXJPZmZzZXQgPSBwYXJzZUludChtYXRjaFtUSU1FWk9ORV9PRkZTRVRfSE9VUl9PRkZTRVRfR1JPVVBdKTtcbiAgICAgICAgICAgIGNvbnN0IG1pbnV0ZU9mZnNldCA9IHBhcnNlSW50KG1hdGNoW1RJTUVaT05FX09GRlNFVF9NSU5VVEVfT0ZGU0VUX0dST1VQXSB8fCBcIjBcIik7XG4gICAgICAgICAgICBsZXQgdGltZXpvbmVPZmZzZXQgPSBob3VyT2Zmc2V0ICogNjAgKyBtaW51dGVPZmZzZXQ7XG4gICAgICAgICAgICAvLyBObyB0aW1lem9uZXMgaGF2ZSBvZmZzZXRzIGdyZWF0ZXIgdGhhbiAxNCBob3Vycywgc28gZGlzcmVnYXJkIHRoaXMgbWF0Y2hcbiAgICAgICAgICAgIGlmICh0aW1lem9uZU9mZnNldCA+IDE0ICogNjApIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAobWF0Y2hbVElNRVpPTkVfT0ZGU0VUX1NJR05fR1JPVVBdID09PSBcIi1cIikge1xuICAgICAgICAgICAgICAgIHRpbWV6b25lT2Zmc2V0ID0gLXRpbWV6b25lT2Zmc2V0O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAocmVzdWx0LmVuZCAhPSBudWxsKSB7XG4gICAgICAgICAgICAgICAgcmVzdWx0LmVuZC5hc3NpZ24oXCJ0aW1lem9uZU9mZnNldFwiLCB0aW1lem9uZU9mZnNldCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJlc3VsdC5zdGFydC5hc3NpZ24oXCJ0aW1lem9uZU9mZnNldFwiLCB0aW1lem9uZU9mZnNldCk7XG4gICAgICAgICAgICByZXN1bHQudGV4dCArPSBtYXRjaFswXTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdHM7XG4gICAgfVxufVxuIiwgIi8qXG4gIFxuKi9cblxuaW1wb3J0IHsgUGFyc2luZ0NvbnRleHQsIFJlZmluZXIgfSBmcm9tIFwiLi4vLi4vY2hyb25vXCI7XG5pbXBvcnQgeyBQYXJzaW5nUmVzdWx0IH0gZnJvbSBcIi4uLy4uL3Jlc3VsdHNcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgT3ZlcmxhcFJlbW92YWxSZWZpbmVyIGltcGxlbWVudHMgUmVmaW5lciB7XG4gICAgcmVmaW5lKGNvbnRleHQ6IFBhcnNpbmdDb250ZXh0LCByZXN1bHRzOiBQYXJzaW5nUmVzdWx0W10pOiBQYXJzaW5nUmVzdWx0W10ge1xuICAgICAgICBpZiAocmVzdWx0cy5sZW5ndGggPCAyKSB7XG4gICAgICAgICAgICByZXR1cm4gcmVzdWx0cztcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGZpbHRlcmVkUmVzdWx0cyA9IFtdO1xuICAgICAgICBsZXQgcHJldlJlc3VsdCA9IHJlc3VsdHNbMF07XG4gICAgICAgIGZvciAobGV0IGkgPSAxOyBpIDwgcmVzdWx0cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gcmVzdWx0c1tpXTtcbiAgICAgICAgICAgIGlmIChyZXN1bHQuaW5kZXggPj0gcHJldlJlc3VsdC5pbmRleCArIHByZXZSZXN1bHQudGV4dC5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICBmaWx0ZXJlZFJlc3VsdHMucHVzaChwcmV2UmVzdWx0KTtcbiAgICAgICAgICAgICAgICBwcmV2UmVzdWx0ID0gcmVzdWx0O1xuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBJZiBvdmVybGFwLCBjb21wYXJlIHRoZSBsZW5ndGggYW5kIGRpc2NhcmQgdGhlIHNob3J0ZXIgb25lXG4gICAgICAgICAgICBsZXQga2VwdCA9IG51bGw7XG4gICAgICAgICAgICBsZXQgcmVtb3ZlZCA9IG51bGw7XG4gICAgICAgICAgICBpZiAocmVzdWx0LnRleHQubGVuZ3RoID4gcHJldlJlc3VsdC50ZXh0Lmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIGtlcHQgPSByZXN1bHQ7XG4gICAgICAgICAgICAgICAgcmVtb3ZlZCA9IHByZXZSZXN1bHQ7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGtlcHQgPSBwcmV2UmVzdWx0O1xuICAgICAgICAgICAgICAgIHJlbW92ZWQgPSByZXN1bHQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb250ZXh0LmRlYnVnKCgpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhgJHt0aGlzLmNvbnN0cnVjdG9yLm5hbWV9IHJlbW92ZSAke3JlbW92ZWR9IGJ5ICR7a2VwdH1gKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgcHJldlJlc3VsdCA9IGtlcHQ7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBUaGUgbGFzdCBvbmVcbiAgICAgICAgaWYgKHByZXZSZXN1bHQgIT0gbnVsbCkge1xuICAgICAgICAgICAgZmlsdGVyZWRSZXN1bHRzLnB1c2gocHJldlJlc3VsdCk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gZmlsdGVyZWRSZXN1bHRzO1xuICAgIH1cbn1cbiIsICIvKlxuICAgIEVuZm9yY2UgJ2ZvcndhcmREYXRlJyBvcHRpb24gdG8gb24gdGhlIHJlc3VsdHMuIFdoZW4gdGhlcmUgYXJlIG1pc3NpbmcgY29tcG9uZW50LFxuICAgIGUuZy4gXCJNYXJjaCAxMi0xMyAod2l0aG91dCB5ZWFyKVwiIG9yIFwiVGh1cnNkYXlcIiwgdGhlIHJlZmluZXIgd2lsbCB0cnkgdG8gYWRqdXN0IHRoZSByZXN1bHRcbiAgICBpbnRvIHRoZSBmdXR1cmUgaW5zdGVhZCBvZiB0aGUgcGFzdC5cbiovXG5cbmltcG9ydCB7IFBhcnNpbmdDb250ZXh0LCBSZWZpbmVyIH0gZnJvbSBcIi4uLy4uL2Nocm9ub1wiO1xuaW1wb3J0IHsgUGFyc2luZ1Jlc3VsdCB9IGZyb20gXCIuLi8uLi9yZXN1bHRzXCI7XG5pbXBvcnQgZGF5anMgZnJvbSBcImRheWpzXCI7XG5pbXBvcnQgeyBpbXBseVNpbWlsYXJEYXRlIH0gZnJvbSBcIi4uLy4uL3V0aWxzL2RheWpzXCI7XG5pbXBvcnQgKiBhcyBkYXRlcyBmcm9tIFwiLi4vLi4vdXRpbHMvZGF0ZXNcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRm9yd2FyZERhdGVSZWZpbmVyIGltcGxlbWVudHMgUmVmaW5lciB7XG4gICAgcmVmaW5lKGNvbnRleHQ6IFBhcnNpbmdDb250ZXh0LCByZXN1bHRzOiBQYXJzaW5nUmVzdWx0W10pOiBQYXJzaW5nUmVzdWx0W10ge1xuICAgICAgICBpZiAoIWNvbnRleHQub3B0aW9uLmZvcndhcmREYXRlKSB7XG4gICAgICAgICAgICByZXR1cm4gcmVzdWx0cztcbiAgICAgICAgfVxuXG4gICAgICAgIHJlc3VsdHMuZm9yRWFjaCgocmVzdWx0KSA9PiB7XG4gICAgICAgICAgICBsZXQgcmVmTW9tZW50ID0gZGF5anMoY29udGV4dC5yZWZlcmVuY2UuZ2V0RGF0ZVdpdGhBZGp1c3RlZFRpbWV6b25lKCkpO1xuXG4gICAgICAgICAgICBpZiAocmVzdWx0LnN0YXJ0LmlzT25seVRpbWUoKSAmJiBjb250ZXh0LnJlZmVyZW5jZS5pbnN0YW50ID4gcmVzdWx0LnN0YXJ0LmRhdGUoKSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHJlZkRhdGUgPSBjb250ZXh0LnJlZmVyZW5jZS5nZXREYXRlV2l0aEFkanVzdGVkVGltZXpvbmUoKTtcbiAgICAgICAgICAgICAgICBjb25zdCByZWZGb2xsb3dpbmdEYXkgPSBuZXcgRGF0ZShyZWZEYXRlKTtcbiAgICAgICAgICAgICAgICByZWZGb2xsb3dpbmdEYXkuc2V0RGF0ZShyZWZGb2xsb3dpbmdEYXkuZ2V0RGF0ZSgpICsgMSk7XG5cbiAgICAgICAgICAgICAgICBkYXRlcy5pbXBseVNpbWlsYXJEYXRlKHJlc3VsdC5zdGFydCwgcmVmRm9sbG93aW5nRGF5KTtcbiAgICAgICAgICAgICAgICBjb250ZXh0LmRlYnVnKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXG4gICAgICAgICAgICAgICAgICAgICAgICBgJHt0aGlzLmNvbnN0cnVjdG9yLm5hbWV9IGFkanVzdGVkICR7cmVzdWx0fSB0aW1lIGZyb20gdGhlIHJlZiBkYXRlICgke3JlZkRhdGV9KSB0byB0aGUgZm9sbG93aW5nIGRheSAoJHtyZWZGb2xsb3dpbmdEYXl9KWBcbiAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICBpZiAocmVzdWx0LmVuZCAmJiByZXN1bHQuZW5kLmlzT25seVRpbWUoKSkge1xuICAgICAgICAgICAgICAgICAgICBkYXRlcy5pbXBseVNpbWlsYXJEYXRlKHJlc3VsdC5lbmQsIHJlZkZvbGxvd2luZ0RheSk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChyZXN1bHQuc3RhcnQuZGF0ZSgpID4gcmVzdWx0LmVuZC5kYXRlKCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlZkZvbGxvd2luZ0RheS5zZXREYXRlKHJlZkZvbGxvd2luZ0RheS5nZXREYXRlKCkgKyAxKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGVzLmltcGx5U2ltaWxhckRhdGUocmVzdWx0LmVuZCwgcmVmRm9sbG93aW5nRGF5KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHJlc3VsdC5zdGFydC5pc09ubHlXZWVrZGF5Q29tcG9uZW50KCkgJiYgcmVmTW9tZW50LmlzQWZ0ZXIocmVzdWx0LnN0YXJ0LmRheWpzKCkpKSB7XG4gICAgICAgICAgICAgICAgaWYgKHJlZk1vbWVudC5kYXkoKSA+PSByZXN1bHQuc3RhcnQuZ2V0KFwid2Vla2RheVwiKSkge1xuICAgICAgICAgICAgICAgICAgICByZWZNb21lbnQgPSByZWZNb21lbnQuZGF5KHJlc3VsdC5zdGFydC5nZXQoXCJ3ZWVrZGF5XCIpICsgNyk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgcmVmTW9tZW50ID0gcmVmTW9tZW50LmRheSg8bnVtYmVyPnJlc3VsdC5zdGFydC5nZXQoXCJ3ZWVrZGF5XCIpKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICByZXN1bHQuc3RhcnQuaW1wbHkoXCJkYXlcIiwgcmVmTW9tZW50LmRhdGUoKSk7XG4gICAgICAgICAgICAgICAgcmVzdWx0LnN0YXJ0LmltcGx5KFwibW9udGhcIiwgcmVmTW9tZW50Lm1vbnRoKCkgKyAxKTtcbiAgICAgICAgICAgICAgICByZXN1bHQuc3RhcnQuaW1wbHkoXCJ5ZWFyXCIsIHJlZk1vbWVudC55ZWFyKCkpO1xuICAgICAgICAgICAgICAgIGNvbnRleHQuZGVidWcoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhgJHt0aGlzLmNvbnN0cnVjdG9yLm5hbWV9IGFkanVzdGVkICR7cmVzdWx0fSB3ZWVrZGF5ICgke3Jlc3VsdC5zdGFydH0pYCk7XG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICBpZiAocmVzdWx0LmVuZCAmJiByZXN1bHQuZW5kLmlzT25seVdlZWtkYXlDb21wb25lbnQoKSkge1xuICAgICAgICAgICAgICAgICAgICAvLyBBZGp1c3QgZGF0ZSB0byB0aGUgY29taW5nIHdlZWtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHJlZk1vbWVudC5kYXkoKSA+IHJlc3VsdC5lbmQuZ2V0KFwid2Vla2RheVwiKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVmTW9tZW50ID0gcmVmTW9tZW50LmRheShyZXN1bHQuZW5kLmdldChcIndlZWtkYXlcIikgKyA3KTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlZk1vbWVudCA9IHJlZk1vbWVudC5kYXkoPG51bWJlcj5yZXN1bHQuZW5kLmdldChcIndlZWtkYXlcIikpO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0LmVuZC5pbXBseShcImRheVwiLCByZWZNb21lbnQuZGF0ZSgpKTtcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0LmVuZC5pbXBseShcIm1vbnRoXCIsIHJlZk1vbWVudC5tb250aCgpICsgMSk7XG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdC5lbmQuaW1wbHkoXCJ5ZWFyXCIsIHJlZk1vbWVudC55ZWFyKCkpO1xuICAgICAgICAgICAgICAgICAgICBjb250ZXh0LmRlYnVnKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGAke3RoaXMuY29uc3RydWN0b3IubmFtZX0gYWRqdXN0ZWQgJHtyZXN1bHR9IHdlZWtkYXkgKCR7cmVzdWx0LmVuZH0pYCk7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gSW4gY2FzZSB3aGVyZSB3ZSBrbm93IHRoZSBtb250aCwgYnV0IG5vdCB3aGljaCB5ZWFyIChlLmcuIFwiaW4gRGVjZW1iZXJcIiwgXCIyNXRoIERlY2VtYmVyXCIpLFxuICAgICAgICAgICAgLy8gdHJ5IG1vdmUgdG8gYW5vdGhlciB5ZWFyXG4gICAgICAgICAgICBpZiAocmVzdWx0LnN0YXJ0LmlzRGF0ZVdpdGhVbmtub3duWWVhcigpICYmIHJlZk1vbWVudC5pc0FmdGVyKHJlc3VsdC5zdGFydC5kYXlqcygpKSkge1xuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMyAmJiByZWZNb21lbnQuaXNBZnRlcihyZXN1bHQuc3RhcnQuZGF5anMoKSk7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICByZXN1bHQuc3RhcnQuaW1wbHkoXCJ5ZWFyXCIsIHJlc3VsdC5zdGFydC5nZXQoXCJ5ZWFyXCIpICsgMSk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnRleHQuZGVidWcoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coYCR7dGhpcy5jb25zdHJ1Y3Rvci5uYW1lfSBhZGp1c3RlZCAke3Jlc3VsdH0geWVhciAoJHtyZXN1bHQuc3RhcnR9KWApO1xuICAgICAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgICAgICBpZiAocmVzdWx0LmVuZCAmJiAhcmVzdWx0LmVuZC5pc0NlcnRhaW4oXCJ5ZWFyXCIpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXN1bHQuZW5kLmltcGx5KFwieWVhclwiLCByZXN1bHQuZW5kLmdldChcInllYXJcIikgKyAxKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRleHQuZGVidWcoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGAke3RoaXMuY29uc3RydWN0b3IubmFtZX0gYWRqdXN0ZWQgJHtyZXN1bHR9IG1vbnRoICgke3Jlc3VsdC5zdGFydH0pYCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdHM7XG4gICAgfVxufVxuIiwgImltcG9ydCB7IFBhcnNpbmdDb21wb25lbnRzIH0gZnJvbSBcIi4uL3Jlc3VsdHNcIjtcblxuLyoqXG4gKiBJbXBseSAod2Vha2x5IHVwZGF0ZSkgdGhlIHBhcnNpbmcgY29tcG9uZW50IHRvIHRoZSBzYW1lIGRheSBhcyB0aGUgYHRhcmdldGAuXG4gKiBAcGFyYW0gY29tcG9uZW50IHRoZSBjb21wb25lbnQgdG8gYmUgdXBkYXRlZC5cbiAqIEBwYXJhbSB0YXJnZXQgdGhlIHRhcmdldCBkYXRlIHdpdGggdGltZXpvbmUgYWRqdXN0ZWQuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBpbXBseVNpbWlsYXJEYXRlKGNvbXBvbmVudDogUGFyc2luZ0NvbXBvbmVudHMsIHRhcmdldDogRGF0ZSkge1xuICAgIGNvbXBvbmVudC5pbXBseShcImRheVwiLCB0YXJnZXQuZ2V0RGF0ZSgpKTtcbiAgICBjb21wb25lbnQuaW1wbHkoXCJtb250aFwiLCB0YXJnZXQuZ2V0TW9udGgoKSArIDEpO1xuICAgIGNvbXBvbmVudC5pbXBseShcInllYXJcIiwgdGFyZ2V0LmdldEZ1bGxZZWFyKCkpO1xufVxuXG4vKipcbiAqIEltcGx5ICh3ZWFrbHkgdXBkYXRlKSB0aGUgcGFyc2luZyBjb21wb25lbnQgdG8gdGhlIHNhbWUgdGltZSBhcyB0aGUgYHRhcmdldGAuXG4gKiBAcGFyYW0gY29tcG9uZW50IHRoZSBjb21wb25lbnQgdG8gYmUgdXBkYXRlZC5cbiAqIEBwYXJhbSB0YXJnZXQgdGhlIHRhcmdldCBkYXRlIHdpdGggdGltZXpvbmUgYWRqdXN0ZWQuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBpbXBseVNpbWlsYXJUaW1lKGNvbXBvbmVudDogUGFyc2luZ0NvbXBvbmVudHMsIHRhcmdldDogRGF0ZSkge1xuICAgIGNvbXBvbmVudC5pbXBseShcImhvdXJcIiwgdGFyZ2V0LmdldEhvdXJzKCkpO1xuICAgIGNvbXBvbmVudC5pbXBseShcIm1pbnV0ZVwiLCB0YXJnZXQuZ2V0TWludXRlcygpKTtcbiAgICBjb21wb25lbnQuaW1wbHkoXCJzZWNvbmRcIiwgdGFyZ2V0LmdldFNlY29uZHMoKSk7XG4gICAgY29tcG9uZW50LmltcGx5KFwibWlsbGlzZWNvbmRcIiwgdGFyZ2V0LmdldE1pbGxpc2Vjb25kcygpKTtcbn1cbiIsICJpbXBvcnQgeyBGaWx0ZXIgfSBmcm9tIFwiLi4vYWJzdHJhY3RSZWZpbmVyc1wiO1xuaW1wb3J0IHsgUGFyc2luZ1Jlc3VsdCB9IGZyb20gXCIuLi8uLi9yZXN1bHRzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFVubGlrZWx5Rm9ybWF0RmlsdGVyIGV4dGVuZHMgRmlsdGVyIHtcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHN0cmljdE1vZGU6IGJvb2xlYW4pIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICB9XG5cbiAgICBpc1ZhbGlkKGNvbnRleHQsIHJlc3VsdDogUGFyc2luZ1Jlc3VsdCk6IGJvb2xlYW4ge1xuICAgICAgICBpZiAocmVzdWx0LnRleHQucmVwbGFjZShcIiBcIiwgXCJcIikubWF0Y2goL15cXGQqKFxcLlxcZCopPyQvKSkge1xuICAgICAgICAgICAgY29udGV4dC5kZWJ1ZygoKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coYFJlbW92aW5nIHVubGlrZWx5IHJlc3VsdCAnJHtyZXN1bHQudGV4dH0nYCk7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCFyZXN1bHQuc3RhcnQuaXNWYWxpZERhdGUoKSkge1xuICAgICAgICAgICAgY29udGV4dC5kZWJ1ZygoKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coYFJlbW92aW5nIGludmFsaWQgcmVzdWx0OiAke3Jlc3VsdH0gKCR7cmVzdWx0LnN0YXJ0fSlgKTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAocmVzdWx0LmVuZCAmJiAhcmVzdWx0LmVuZC5pc1ZhbGlkRGF0ZSgpKSB7XG4gICAgICAgICAgICBjb250ZXh0LmRlYnVnKCgpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhgUmVtb3ZpbmcgaW52YWxpZCByZXN1bHQ6ICR7cmVzdWx0fSAoJHtyZXN1bHQuZW5kfSlgKTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5zdHJpY3RNb2RlKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5pc1N0cmljdE1vZGVWYWxpZChjb250ZXh0LCByZXN1bHQpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBpc1N0cmljdE1vZGVWYWxpZChjb250ZXh0LCByZXN1bHQ6IFBhcnNpbmdSZXN1bHQpIHtcbiAgICAgICAgaWYgKHJlc3VsdC5zdGFydC5pc09ubHlXZWVrZGF5Q29tcG9uZW50KCkpIHtcbiAgICAgICAgICAgIGNvbnRleHQuZGVidWcoKCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGAoU3RyaWN0KSBSZW1vdmluZyB3ZWVrZGF5IG9ubHkgY29tcG9uZW50OiAke3Jlc3VsdH0gKCR7cmVzdWx0LmVuZH0pYCk7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHJlc3VsdC5zdGFydC5pc09ubHlUaW1lKCkgJiYgKCFyZXN1bHQuc3RhcnQuaXNDZXJ0YWluKFwiaG91clwiKSB8fCAhcmVzdWx0LnN0YXJ0LmlzQ2VydGFpbihcIm1pbnV0ZVwiKSkpIHtcbiAgICAgICAgICAgIGNvbnRleHQuZGVidWcoKCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGAoU3RyaWN0KSBSZW1vdmluZyB1bmNlcnRhaW4gdGltZSBjb21wb25lbnQ6ICR7cmVzdWx0fSAoJHtyZXN1bHQuZW5kfSlgKTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG59XG4iLCAiaW1wb3J0IHsgUGFyc2luZ0NvbnRleHQgfSBmcm9tIFwiLi4vLi4vY2hyb25vXCI7XG5pbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tIFwiLi4vLi4vdHlwZXNcIjtcbmltcG9ydCB7IEFic3RyYWN0UGFyc2VyV2l0aFdvcmRCb3VuZGFyeUNoZWNraW5nIH0gZnJvbSBcIi4vQWJzdHJhY3RQYXJzZXJXaXRoV29yZEJvdW5kYXJ5XCI7XG5cbi8vIElTTyA4NjAxXG4vLyBodHRwOi8vd3d3LnczLm9yZy9UUi9OT1RFLWRhdGV0aW1lXG4vLyAtIFlZWVktTU0tRERcbi8vIC0gWVlZWS1NTS1ERFRoaDptbVRaRFxuLy8gLSBZWVlZLU1NLUREVGhoOm1tOnNzVFpEXG4vLyAtIFlZWVktTU0tRERUaGg6bW06c3Muc1RaRFxuLy8gLSBUWkQgPSAoWiBvciAraGg6bW0gb3IgLWhoOm1tKVxuXG4vLyBwcmV0dGllci1pZ25vcmVcbmNvbnN0IFBBVFRFUk4gPSBuZXcgUmVnRXhwKFxuICAgIFwiKFswLTldezR9KVxcXFwtKFswLTldezEsMn0pXFxcXC0oWzAtOV17MSwyfSlcIiArXG4gICAgXCIoPzpUXCIgKyAvLy4uXG4gICAgICAgIFwiKFswLTldezEsMn0pOihbMC05XXsxLDJ9KVwiICsgLy8gaGg6bW1cbiAgICAgICAgXCIoPzpcIiArXG4gICAgICAgICAgICBcIjooWzAtOV17MSwyfSkoPzpcXFxcLihcXFxcZHsxLDR9KSk/XCIgK1xuICAgICAgICBcIik/XCIgKyAvLyA6c3Muc1xuICAgICAgICBcIihcIiArXG4gICAgICAgICAgICBcIlp8KFsrLV1cXFxcZHsyfSk6PyhcXFxcZHsyfSk/XCIgK1xuICAgICAgICBcIik/XCIgKyAvLyBUWkQgKFogb3IgXHUwMEIxaGg6bW0gb3IgXHUwMEIxaGhtbSBvciBcdTAwQjFoaClcbiAgICBcIik/XCIgK1xuICAgIFwiKD89XFxcXFd8JClcIixcbiAgICBcImlcIlxuKTtcblxuY29uc3QgWUVBUl9OVU1CRVJfR1JPVVAgPSAxO1xuY29uc3QgTU9OVEhfTlVNQkVSX0dST1VQID0gMjtcbmNvbnN0IERBVEVfTlVNQkVSX0dST1VQID0gMztcbmNvbnN0IEhPVVJfTlVNQkVSX0dST1VQID0gNDtcbmNvbnN0IE1JTlVURV9OVU1CRVJfR1JPVVAgPSA1O1xuY29uc3QgU0VDT05EX05VTUJFUl9HUk9VUCA9IDY7XG5jb25zdCBNSUxMSVNFQ09ORF9OVU1CRVJfR1JPVVAgPSA3O1xuY29uc3QgVFpEX0dST1VQID0gODtcbmNvbnN0IFRaRF9IT1VSX09GRlNFVF9HUk9VUCA9IDk7XG5jb25zdCBUWkRfTUlOVVRFX09GRlNFVF9HUk9VUCA9IDEwO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJU09Gb3JtYXRQYXJzZXIgZXh0ZW5kcyBBYnN0cmFjdFBhcnNlcldpdGhXb3JkQm91bmRhcnlDaGVja2luZyB7XG4gICAgaW5uZXJQYXR0ZXJuKCk6IFJlZ0V4cCB7XG4gICAgICAgIHJldHVybiBQQVRURVJOO1xuICAgIH1cblxuICAgIGlubmVyRXh0cmFjdChjb250ZXh0OiBQYXJzaW5nQ29udGV4dCwgbWF0Y2g6IFJlZ0V4cE1hdGNoQXJyYXkpIHtcbiAgICAgICAgY29uc3QgY29tcG9uZW50cyA9IGNvbnRleHQuY3JlYXRlUGFyc2luZ0NvbXBvbmVudHMoe1xuICAgICAgICAgICAgXCJ5ZWFyXCI6IHBhcnNlSW50KG1hdGNoW1lFQVJfTlVNQkVSX0dST1VQXSksXG4gICAgICAgICAgICBcIm1vbnRoXCI6IHBhcnNlSW50KG1hdGNoW01PTlRIX05VTUJFUl9HUk9VUF0pLFxuICAgICAgICAgICAgXCJkYXlcIjogcGFyc2VJbnQobWF0Y2hbREFURV9OVU1CRVJfR1JPVVBdKSxcbiAgICAgICAgfSk7XG4gICAgICAgIGlmIChtYXRjaFtIT1VSX05VTUJFUl9HUk9VUF0gIT0gbnVsbCkge1xuICAgICAgICAgICAgY29tcG9uZW50cy5hc3NpZ24oXCJob3VyXCIsIHBhcnNlSW50KG1hdGNoW0hPVVJfTlVNQkVSX0dST1VQXSkpO1xuICAgICAgICAgICAgY29tcG9uZW50cy5hc3NpZ24oXCJtaW51dGVcIiwgcGFyc2VJbnQobWF0Y2hbTUlOVVRFX05VTUJFUl9HUk9VUF0pKTtcblxuICAgICAgICAgICAgaWYgKG1hdGNoW1NFQ09ORF9OVU1CRVJfR1JPVVBdICE9IG51bGwpIHtcbiAgICAgICAgICAgICAgICBjb21wb25lbnRzLmFzc2lnbihcInNlY29uZFwiLCBwYXJzZUludChtYXRjaFtTRUNPTkRfTlVNQkVSX0dST1VQXSkpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAobWF0Y2hbTUlMTElTRUNPTkRfTlVNQkVSX0dST1VQXSAhPSBudWxsKSB7XG4gICAgICAgICAgICAgICAgY29tcG9uZW50cy5hc3NpZ24oXCJtaWxsaXNlY29uZFwiLCBwYXJzZUludChtYXRjaFtNSUxMSVNFQ09ORF9OVU1CRVJfR1JPVVBdKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAobWF0Y2hbVFpEX0dST1VQXSAhPSBudWxsKSB7XG4gICAgICAgICAgICAgICAgLy8gVGhlIFp1bHUgdGltZSB6b25lIChaKSBpcyBlcXVpdmFsZW50IHRvIFVUQ1xuICAgICAgICAgICAgICAgIGxldCBvZmZzZXQgPSAwO1xuICAgICAgICAgICAgICAgIGlmIChtYXRjaFtUWkRfSE9VUl9PRkZTRVRfR1JPVVBdKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGhvdXJPZmZzZXQgPSBwYXJzZUludChtYXRjaFtUWkRfSE9VUl9PRkZTRVRfR1JPVVBdKTtcbiAgICAgICAgICAgICAgICAgICAgbGV0IG1pbnV0ZU9mZnNldCA9IDA7XG4gICAgICAgICAgICAgICAgICAgIGlmIChtYXRjaFtUWkRfTUlOVVRFX09GRlNFVF9HUk9VUF0gIT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgbWludXRlT2Zmc2V0ID0gcGFyc2VJbnQobWF0Y2hbVFpEX01JTlVURV9PRkZTRVRfR1JPVVBdKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBvZmZzZXQgPSBob3VyT2Zmc2V0ICogNjA7XG4gICAgICAgICAgICAgICAgICAgIGlmIChvZmZzZXQgPCAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBvZmZzZXQgLT0gbWludXRlT2Zmc2V0O1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgb2Zmc2V0ICs9IG1pbnV0ZU9mZnNldDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjb21wb25lbnRzLmFzc2lnbihcInRpbWV6b25lT2Zmc2V0XCIsIG9mZnNldCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGNvbXBvbmVudHMuYWRkVGFnKFwicGFyc2VyL0lTT0Zvcm1hdFBhcnNlclwiKTtcbiAgICB9XG59XG4iLCAiLypcbiAgXG4qL1xuXG5pbXBvcnQgeyBNZXJnaW5nUmVmaW5lciB9IGZyb20gXCIuLi9hYnN0cmFjdFJlZmluZXJzXCI7XG5pbXBvcnQgeyBQYXJzaW5nUmVzdWx0IH0gZnJvbSBcIi4uLy4uL3Jlc3VsdHNcIjtcblxuLyoqXG4gKiBNZXJnZSB3ZWVrZGF5IGNvbXBvbmVudCBpbnRvIG1vcmUgY29tcGxldGVkIGRhdGFcbiAqIC0gW1N1bmRheV0gWzEyLzcvMjAxNF0gPT4gW1N1bmRheSAxMi83LzIwMTRdXG4gKiAtIFtUdWVzZGF5XSwgW0phbnVhcnkgMTMsIDIwMTJdID0+IFtTdW5kYXkgMTIvNy8yMDE0XVxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNZXJnZVdlZWtkYXlDb21wb25lbnRSZWZpbmVyIGV4dGVuZHMgTWVyZ2luZ1JlZmluZXIge1xuICAgIG1lcmdlUmVzdWx0cyh0ZXh0QmV0d2Vlbjogc3RyaW5nLCBjdXJyZW50UmVzdWx0OiBQYXJzaW5nUmVzdWx0LCBuZXh0UmVzdWx0OiBQYXJzaW5nUmVzdWx0KTogUGFyc2luZ1Jlc3VsdCB7XG4gICAgICAgIGNvbnN0IG5ld1Jlc3VsdCA9IG5leHRSZXN1bHQuY2xvbmUoKTtcbiAgICAgICAgbmV3UmVzdWx0LmluZGV4ID0gY3VycmVudFJlc3VsdC5pbmRleDtcbiAgICAgICAgbmV3UmVzdWx0LnRleHQgPSBjdXJyZW50UmVzdWx0LnRleHQgKyB0ZXh0QmV0d2VlbiArIG5ld1Jlc3VsdC50ZXh0O1xuXG4gICAgICAgIG5ld1Jlc3VsdC5zdGFydC5hc3NpZ24oXCJ3ZWVrZGF5XCIsIGN1cnJlbnRSZXN1bHQuc3RhcnQuZ2V0KFwid2Vla2RheVwiKSk7XG4gICAgICAgIGlmIChuZXdSZXN1bHQuZW5kKSB7XG4gICAgICAgICAgICBuZXdSZXN1bHQuZW5kLmFzc2lnbihcIndlZWtkYXlcIiwgY3VycmVudFJlc3VsdC5zdGFydC5nZXQoXCJ3ZWVrZGF5XCIpKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBuZXdSZXN1bHQ7XG4gICAgfVxuXG4gICAgc2hvdWxkTWVyZ2VSZXN1bHRzKHRleHRCZXR3ZWVuOiBzdHJpbmcsIGN1cnJlbnRSZXN1bHQ6IFBhcnNpbmdSZXN1bHQsIG5leHRSZXN1bHQ6IFBhcnNpbmdSZXN1bHQpOiBib29sZWFuIHtcbiAgICAgICAgY29uc3Qgd2Vla2RheVRoZW5Ob3JtYWxEYXRlID1cbiAgICAgICAgICAgIGN1cnJlbnRSZXN1bHQuc3RhcnQuaXNPbmx5V2Vla2RheUNvbXBvbmVudCgpICYmXG4gICAgICAgICAgICAhY3VycmVudFJlc3VsdC5zdGFydC5pc0NlcnRhaW4oXCJob3VyXCIpICYmXG4gICAgICAgICAgICBuZXh0UmVzdWx0LnN0YXJ0LmlzQ2VydGFpbihcImRheVwiKTtcbiAgICAgICAgcmV0dXJuIHdlZWtkYXlUaGVuTm9ybWFsRGF0ZSAmJiB0ZXh0QmV0d2Vlbi5tYXRjaCgvXiw/XFxzKiQvKSAhPSBudWxsO1xuICAgIH1cbn1cbiIsICJpbXBvcnQgeyBDb25maWd1cmF0aW9uLCBQYXJzZXIsIFJlZmluZXIgfSBmcm9tIFwiLi9jaHJvbm9cIjtcblxuaW1wb3J0IEV4dHJhY3RUaW1lem9uZUFiYnJSZWZpbmVyIGZyb20gXCIuL2NvbW1vbi9yZWZpbmVycy9FeHRyYWN0VGltZXpvbmVBYmJyUmVmaW5lclwiO1xuaW1wb3J0IEV4dHJhY3RUaW1lem9uZU9mZnNldFJlZmluZXIgZnJvbSBcIi4vY29tbW9uL3JlZmluZXJzL0V4dHJhY3RUaW1lem9uZU9mZnNldFJlZmluZXJcIjtcbmltcG9ydCBPdmVybGFwUmVtb3ZhbFJlZmluZXIgZnJvbSBcIi4vY29tbW9uL3JlZmluZXJzL092ZXJsYXBSZW1vdmFsUmVmaW5lclwiO1xuaW1wb3J0IEZvcndhcmREYXRlUmVmaW5lciBmcm9tIFwiLi9jb21tb24vcmVmaW5lcnMvRm9yd2FyZERhdGVSZWZpbmVyXCI7XG5pbXBvcnQgVW5saWtlbHlGb3JtYXRGaWx0ZXIgZnJvbSBcIi4vY29tbW9uL3JlZmluZXJzL1VubGlrZWx5Rm9ybWF0RmlsdGVyXCI7XG5pbXBvcnQgSVNPRm9ybWF0UGFyc2VyIGZyb20gXCIuL2NvbW1vbi9wYXJzZXJzL0lTT0Zvcm1hdFBhcnNlclwiO1xuaW1wb3J0IE1lcmdlV2Vla2RheUNvbXBvbmVudFJlZmluZXIgZnJvbSBcIi4vY29tbW9uL3JlZmluZXJzL01lcmdlV2Vla2RheUNvbXBvbmVudFJlZmluZXJcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIGluY2x1ZGVDb21tb25Db25maWd1cmF0aW9uKGNvbmZpZ3VyYXRpb246IENvbmZpZ3VyYXRpb24sIHN0cmljdE1vZGUgPSBmYWxzZSk6IENvbmZpZ3VyYXRpb24ge1xuICAgIGNvbmZpZ3VyYXRpb24ucGFyc2Vycy51bnNoaWZ0KG5ldyBJU09Gb3JtYXRQYXJzZXIoKSk7XG5cbiAgICBjb25maWd1cmF0aW9uLnJlZmluZXJzLnVuc2hpZnQobmV3IE1lcmdlV2Vla2RheUNvbXBvbmVudFJlZmluZXIoKSk7XG4gICAgY29uZmlndXJhdGlvbi5yZWZpbmVycy51bnNoaWZ0KG5ldyBFeHRyYWN0VGltZXpvbmVPZmZzZXRSZWZpbmVyKCkpO1xuICAgIGNvbmZpZ3VyYXRpb24ucmVmaW5lcnMudW5zaGlmdChuZXcgT3ZlcmxhcFJlbW92YWxSZWZpbmVyKCkpO1xuXG4gICAgLy8gVW5saWtlIEV4dHJhY3RUaW1lem9uZU9mZnNldFJlZmluZXIsIHRoaXMgcmVmaW5lciByZWxpZXMgb24ga25vd2luZyBib3RoIGRhdGUgYW5kIHRpbWUgaW4gY2FzZXMgd2hlcmUgdGhlIHR6XG4gICAgLy8gaXMgYW1iaWd1b3VzIChpbiB0ZXJtcyBvZiBEU1Qvbm9uLURTVCkuIEl0IHRoZXJlZm9yZSBuZWVkcyB0byBiZSBhcHBsaWVkIGFzIGxhdGUgYXMgcG9zc2libGUgaW4gdGhlIHBhcnNpbmcuXG4gICAgY29uZmlndXJhdGlvbi5yZWZpbmVycy5wdXNoKG5ldyBFeHRyYWN0VGltZXpvbmVBYmJyUmVmaW5lcigpKTtcbiAgICBjb25maWd1cmF0aW9uLnJlZmluZXJzLnB1c2gobmV3IE92ZXJsYXBSZW1vdmFsUmVmaW5lcigpKTtcbiAgICBjb25maWd1cmF0aW9uLnJlZmluZXJzLnB1c2gobmV3IEZvcndhcmREYXRlUmVmaW5lcigpKTtcbiAgICBjb25maWd1cmF0aW9uLnJlZmluZXJzLnB1c2gobmV3IFVubGlrZWx5Rm9ybWF0RmlsdGVyKHN0cmljdE1vZGUpKTtcbiAgICByZXR1cm4gY29uZmlndXJhdGlvbjtcbn1cbiIsICJpbXBvcnQgeyBQYXJzaW5nQ29udGV4dCB9IGZyb20gXCIuLi8uLi8uLi9jaHJvbm9cIjtcbmltcG9ydCB7IFBhcnNpbmdDb21wb25lbnRzLCBQYXJzaW5nUmVzdWx0IH0gZnJvbSBcIi4uLy4uLy4uL3Jlc3VsdHNcIjtcbmltcG9ydCBkYXlqcyBmcm9tIFwiZGF5anNcIjtcbmltcG9ydCB7IEFic3RyYWN0UGFyc2VyV2l0aFdvcmRCb3VuZGFyeUNoZWNraW5nIH0gZnJvbSBcIi4uLy4uLy4uL2NvbW1vbi9wYXJzZXJzL0Fic3RyYWN0UGFyc2VyV2l0aFdvcmRCb3VuZGFyeVwiO1xuaW1wb3J0IHsgYXNzaWduU2ltaWxhckRhdGUgfSBmcm9tIFwiLi4vLi4vLi4vdXRpbHMvZGF5anNcIjtcbmltcG9ydCAqIGFzIHJlZmVyZW5jZXMgZnJvbSBcIi4uLy4uLy4uL2NvbW1vbi9jYXN1YWxSZWZlcmVuY2VzXCI7XG5cbmNvbnN0IFBBVFRFUk4gPSAvKG5vd3x0b2RheXx0b25pZ2h0fHRvbW9ycm93fG92ZXJtb3Jyb3d8dG1yfHRtcnd8eWVzdGVyZGF5fGxhc3RcXHMqbmlnaHQpKD89XFxXfCQpL2k7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEVOQ2FzdWFsRGF0ZVBhcnNlciBleHRlbmRzIEFic3RyYWN0UGFyc2VyV2l0aFdvcmRCb3VuZGFyeUNoZWNraW5nIHtcbiAgICBpbm5lclBhdHRlcm4oY29udGV4dDogUGFyc2luZ0NvbnRleHQpOiBSZWdFeHAge1xuICAgICAgICByZXR1cm4gUEFUVEVSTjtcbiAgICB9XG5cbiAgICBpbm5lckV4dHJhY3QoY29udGV4dDogUGFyc2luZ0NvbnRleHQsIG1hdGNoOiBSZWdFeHBNYXRjaEFycmF5KTogUGFyc2luZ0NvbXBvbmVudHMgfCBQYXJzaW5nUmVzdWx0IHtcbiAgICAgICAgbGV0IHRhcmdldERhdGUgPSBkYXlqcyhjb250ZXh0LnJlZkRhdGUpO1xuICAgICAgICBjb25zdCBsb3dlclRleHQgPSBtYXRjaFswXS50b0xvd2VyQ2FzZSgpO1xuICAgICAgICBsZXQgY29tcG9uZW50ID0gY29udGV4dC5jcmVhdGVQYXJzaW5nQ29tcG9uZW50cygpO1xuXG4gICAgICAgIHN3aXRjaCAobG93ZXJUZXh0KSB7XG4gICAgICAgICAgICBjYXNlIFwibm93XCI6XG4gICAgICAgICAgICAgICAgY29tcG9uZW50ID0gcmVmZXJlbmNlcy5ub3coY29udGV4dC5yZWZlcmVuY2UpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICBjYXNlIFwidG9kYXlcIjpcbiAgICAgICAgICAgICAgICBjb21wb25lbnQgPSByZWZlcmVuY2VzLnRvZGF5KGNvbnRleHQucmVmZXJlbmNlKTtcbiAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgY2FzZSBcInllc3RlcmRheVwiOlxuICAgICAgICAgICAgICAgIGNvbXBvbmVudCA9IHJlZmVyZW5jZXMueWVzdGVyZGF5KGNvbnRleHQucmVmZXJlbmNlKTtcbiAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgY2FzZSBcInRvbW9ycm93XCI6XG4gICAgICAgICAgICBjYXNlIFwidG1yXCI6XG4gICAgICAgICAgICBjYXNlIFwidG1yd1wiOlxuICAgICAgICAgICAgICAgIGNvbXBvbmVudCA9IHJlZmVyZW5jZXMudG9tb3Jyb3coY29udGV4dC5yZWZlcmVuY2UpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICBjYXNlIFwidG9uaWdodFwiOlxuICAgICAgICAgICAgICAgIGNvbXBvbmVudCA9IHJlZmVyZW5jZXMudG9uaWdodChjb250ZXh0LnJlZmVyZW5jZSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIGNhc2UgXCJvdmVybW9ycm93XCI6XG4gICAgICAgICAgICAgICAgY29tcG9uZW50ID0gcmVmZXJlbmNlcy50aGVEYXlBZnRlcihjb250ZXh0LnJlZmVyZW5jZSwgMik7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgaWYgKGxvd2VyVGV4dC5tYXRjaCgvbGFzdFxccypuaWdodC8pKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0YXJnZXREYXRlLmhvdXIoKSA+IDYpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldERhdGUgPSB0YXJnZXREYXRlLmFkZCgtMSwgXCJkYXlcIik7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBhc3NpZ25TaW1pbGFyRGF0ZShjb21wb25lbnQsIHRhcmdldERhdGUpO1xuICAgICAgICAgICAgICAgICAgICBjb21wb25lbnQuaW1wbHkoXCJob3VyXCIsIDApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgICBjb21wb25lbnQuYWRkVGFnKFwicGFyc2VyL0VOQ2FzdWFsRGF0ZVBhcnNlclwiKTtcbiAgICAgICAgcmV0dXJuIGNvbXBvbmVudDtcbiAgICB9XG59XG4iLCAiaW1wb3J0IHsgUGFyc2luZ0NvbXBvbmVudHMsIFJlZmVyZW5jZVdpdGhUaW1lem9uZSB9IGZyb20gXCIuLi9yZXN1bHRzXCI7XG5pbXBvcnQgZGF5anMgZnJvbSBcImRheWpzXCI7XG5pbXBvcnQge1xuICAgIGFzc2lnblNpbWlsYXJEYXRlLFxuICAgIGFzc2lnblNpbWlsYXJUaW1lLFxuICAgIGltcGx5U2ltaWxhckRhdGUsXG4gICAgaW1wbHlTaW1pbGFyVGltZSxcbiAgICBpbXBseVRoZU5leHREYXksXG59IGZyb20gXCIuLi91dGlscy9kYXlqc1wiO1xuaW1wb3J0IHsgTWVyaWRpZW0gfSBmcm9tIFwiLi4vdHlwZXNcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIG5vdyhyZWZlcmVuY2U6IFJlZmVyZW5jZVdpdGhUaW1lem9uZSk6IFBhcnNpbmdDb21wb25lbnRzIHtcbiAgICBjb25zdCB0YXJnZXREYXRlID0gZGF5anMocmVmZXJlbmNlLmdldERhdGVXaXRoQWRqdXN0ZWRUaW1lem9uZSgpKTtcbiAgICBjb25zdCBjb21wb25lbnQgPSBuZXcgUGFyc2luZ0NvbXBvbmVudHMocmVmZXJlbmNlLCB7fSk7XG4gICAgYXNzaWduU2ltaWxhckRhdGUoY29tcG9uZW50LCB0YXJnZXREYXRlKTtcbiAgICBhc3NpZ25TaW1pbGFyVGltZShjb21wb25lbnQsIHRhcmdldERhdGUpO1xuICAgIGNvbXBvbmVudC5hc3NpZ24oXCJ0aW1lem9uZU9mZnNldFwiLCByZWZlcmVuY2UuZ2V0VGltZXpvbmVPZmZzZXQoKSk7XG4gICAgY29tcG9uZW50LmFkZFRhZyhcImNhc3VhbFJlZmVyZW5jZS9ub3dcIik7XG4gICAgcmV0dXJuIGNvbXBvbmVudDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRvZGF5KHJlZmVyZW5jZTogUmVmZXJlbmNlV2l0aFRpbWV6b25lKTogUGFyc2luZ0NvbXBvbmVudHMge1xuICAgIGNvbnN0IHRhcmdldERhdGUgPSBkYXlqcyhyZWZlcmVuY2UuZ2V0RGF0ZVdpdGhBZGp1c3RlZFRpbWV6b25lKCkpO1xuICAgIGNvbnN0IGNvbXBvbmVudCA9IG5ldyBQYXJzaW5nQ29tcG9uZW50cyhyZWZlcmVuY2UsIHt9KTtcbiAgICBhc3NpZ25TaW1pbGFyRGF0ZShjb21wb25lbnQsIHRhcmdldERhdGUpO1xuICAgIGltcGx5U2ltaWxhclRpbWUoY29tcG9uZW50LCB0YXJnZXREYXRlKTtcbiAgICBjb21wb25lbnQuYWRkVGFnKFwiY2FzdWFsUmVmZXJlbmNlL3RvZGF5XCIpO1xuICAgIHJldHVybiBjb21wb25lbnQ7XG59XG5cbi8qKlxuICogVGhlIHByZXZpb3VzIGRheS4gSW1wbHkgdGhlIHNhbWUgdGltZS5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHllc3RlcmRheShyZWZlcmVuY2U6IFJlZmVyZW5jZVdpdGhUaW1lem9uZSk6IFBhcnNpbmdDb21wb25lbnRzIHtcbiAgICByZXR1cm4gdGhlRGF5QmVmb3JlKHJlZmVyZW5jZSwgMSkuYWRkVGFnKFwiY2FzdWFsUmVmZXJlbmNlL3llc3RlcmRheVwiKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRoZURheUJlZm9yZShyZWZlcmVuY2U6IFJlZmVyZW5jZVdpdGhUaW1lem9uZSwgbnVtRGF5OiBudW1iZXIpOiBQYXJzaW5nQ29tcG9uZW50cyB7XG4gICAgcmV0dXJuIHRoZURheUFmdGVyKHJlZmVyZW5jZSwgLW51bURheSk7XG59XG5cbi8qKlxuICogVGhlIGZvbGxvd2luZyBkYXkgd2l0aCBkYXlqcy5hc3NpZ25UaGVOZXh0RGF5KClcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHRvbW9ycm93KHJlZmVyZW5jZTogUmVmZXJlbmNlV2l0aFRpbWV6b25lKTogUGFyc2luZ0NvbXBvbmVudHMge1xuICAgIHJldHVybiB0aGVEYXlBZnRlcihyZWZlcmVuY2UsIDEpLmFkZFRhZyhcImNhc3VhbFJlZmVyZW5jZS90b21vcnJvd1wiKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRoZURheUFmdGVyKHJlZmVyZW5jZTogUmVmZXJlbmNlV2l0aFRpbWV6b25lLCBuRGF5czogbnVtYmVyKTogUGFyc2luZ0NvbXBvbmVudHMge1xuICAgIGxldCB0YXJnZXREYXRlID0gZGF5anMocmVmZXJlbmNlLmdldERhdGVXaXRoQWRqdXN0ZWRUaW1lem9uZSgpKTtcbiAgICBjb25zdCBjb21wb25lbnQgPSBuZXcgUGFyc2luZ0NvbXBvbmVudHMocmVmZXJlbmNlLCB7fSk7XG4gICAgdGFyZ2V0RGF0ZSA9IHRhcmdldERhdGUuYWRkKG5EYXlzLCBcImRheVwiKTtcbiAgICBhc3NpZ25TaW1pbGFyRGF0ZShjb21wb25lbnQsIHRhcmdldERhdGUpO1xuICAgIGltcGx5U2ltaWxhclRpbWUoY29tcG9uZW50LCB0YXJnZXREYXRlKTtcbiAgICByZXR1cm4gY29tcG9uZW50O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdG9uaWdodChyZWZlcmVuY2U6IFJlZmVyZW5jZVdpdGhUaW1lem9uZSwgaW1wbHlIb3VyID0gMjIpOiBQYXJzaW5nQ29tcG9uZW50cyB7XG4gICAgY29uc3QgdGFyZ2V0RGF0ZSA9IGRheWpzKHJlZmVyZW5jZS5nZXREYXRlV2l0aEFkanVzdGVkVGltZXpvbmUoKSk7XG4gICAgY29uc3QgY29tcG9uZW50ID0gbmV3IFBhcnNpbmdDb21wb25lbnRzKHJlZmVyZW5jZSwge30pO1xuICAgIGFzc2lnblNpbWlsYXJEYXRlKGNvbXBvbmVudCwgdGFyZ2V0RGF0ZSk7XG4gICAgY29tcG9uZW50LmltcGx5KFwiaG91clwiLCBpbXBseUhvdXIpO1xuICAgIGNvbXBvbmVudC5pbXBseShcIm1lcmlkaWVtXCIsIE1lcmlkaWVtLlBNKTtcbiAgICBjb21wb25lbnQuYWRkVGFnKFwiY2FzdWFsUmVmZXJlbmNlL3RvbmlnaHRcIik7XG4gICAgcmV0dXJuIGNvbXBvbmVudDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGxhc3ROaWdodChyZWZlcmVuY2U6IFJlZmVyZW5jZVdpdGhUaW1lem9uZSwgaW1wbHlIb3VyID0gMCk6IFBhcnNpbmdDb21wb25lbnRzIHtcbiAgICBsZXQgdGFyZ2V0RGF0ZSA9IGRheWpzKHJlZmVyZW5jZS5nZXREYXRlV2l0aEFkanVzdGVkVGltZXpvbmUoKSk7XG4gICAgY29uc3QgY29tcG9uZW50ID0gbmV3IFBhcnNpbmdDb21wb25lbnRzKHJlZmVyZW5jZSwge30pO1xuICAgIGlmICh0YXJnZXREYXRlLmhvdXIoKSA8IDYpIHtcbiAgICAgICAgdGFyZ2V0RGF0ZSA9IHRhcmdldERhdGUuYWRkKC0xLCBcImRheVwiKTtcbiAgICB9XG4gICAgYXNzaWduU2ltaWxhckRhdGUoY29tcG9uZW50LCB0YXJnZXREYXRlKTtcbiAgICBjb21wb25lbnQuaW1wbHkoXCJob3VyXCIsIGltcGx5SG91cik7XG4gICAgcmV0dXJuIGNvbXBvbmVudDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGV2ZW5pbmcocmVmZXJlbmNlOiBSZWZlcmVuY2VXaXRoVGltZXpvbmUsIGltcGx5SG91ciA9IDIwKTogUGFyc2luZ0NvbXBvbmVudHMge1xuICAgIGNvbnN0IGNvbXBvbmVudCA9IG5ldyBQYXJzaW5nQ29tcG9uZW50cyhyZWZlcmVuY2UsIHt9KTtcbiAgICBjb21wb25lbnQuaW1wbHkoXCJtZXJpZGllbVwiLCBNZXJpZGllbS5QTSk7XG4gICAgY29tcG9uZW50LmltcGx5KFwiaG91clwiLCBpbXBseUhvdXIpO1xuICAgIGNvbXBvbmVudC5hZGRUYWcoXCJjYXN1YWxSZWZlcmVuY2UvZXZlbmluZ1wiKTtcbiAgICByZXR1cm4gY29tcG9uZW50O1xufVxuXG5leHBvcnQgZnVuY3Rpb24geWVzdGVyZGF5RXZlbmluZyhyZWZlcmVuY2U6IFJlZmVyZW5jZVdpdGhUaW1lem9uZSwgaW1wbHlIb3VyID0gMjApOiBQYXJzaW5nQ29tcG9uZW50cyB7XG4gICAgbGV0IHRhcmdldERhdGUgPSBkYXlqcyhyZWZlcmVuY2UuZ2V0RGF0ZVdpdGhBZGp1c3RlZFRpbWV6b25lKCkpO1xuICAgIGNvbnN0IGNvbXBvbmVudCA9IG5ldyBQYXJzaW5nQ29tcG9uZW50cyhyZWZlcmVuY2UsIHt9KTtcbiAgICB0YXJnZXREYXRlID0gdGFyZ2V0RGF0ZS5hZGQoLTEsIFwiZGF5XCIpO1xuICAgIGFzc2lnblNpbWlsYXJEYXRlKGNvbXBvbmVudCwgdGFyZ2V0RGF0ZSk7XG4gICAgY29tcG9uZW50LmltcGx5KFwiaG91clwiLCBpbXBseUhvdXIpO1xuICAgIGNvbXBvbmVudC5pbXBseShcIm1lcmlkaWVtXCIsIE1lcmlkaWVtLlBNKTtcbiAgICBjb21wb25lbnQuYWRkVGFnKFwiY2FzdWFsUmVmZXJlbmNlL3llc3RlcmRheVwiKTtcbiAgICBjb21wb25lbnQuYWRkVGFnKFwiY2FzdWFsUmVmZXJlbmNlL2V2ZW5pbmdcIik7XG4gICAgcmV0dXJuIGNvbXBvbmVudDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG1pZG5pZ2h0KHJlZmVyZW5jZTogUmVmZXJlbmNlV2l0aFRpbWV6b25lKTogUGFyc2luZ0NvbXBvbmVudHMge1xuICAgIGNvbnN0IGNvbXBvbmVudCA9IG5ldyBQYXJzaW5nQ29tcG9uZW50cyhyZWZlcmVuY2UsIHt9KTtcbiAgICBjb25zdCB0YXJnZXREYXRlID0gZGF5anMocmVmZXJlbmNlLmdldERhdGVXaXRoQWRqdXN0ZWRUaW1lem9uZSgpKTtcbiAgICBpZiAodGFyZ2V0RGF0ZS5ob3VyKCkgPiAyKSB7XG4gICAgICAgIC8vIFVubGVzcyBpdCdzIHZlcnkgZWFybHkgbW9ybmluZyAoMH4yQU0pLCB3ZSBhc3N1bWUgdGhlIG1pZG5pZ2h0IGlzIHRoZSBjb21pbmcgbWlkbmlnaHQuXG4gICAgICAgIC8vIFRodXMsIGluY3JlYXNpbmcgdGhlIGRheSBieSAxLlxuICAgICAgICBpbXBseVRoZU5leHREYXkoY29tcG9uZW50LCB0YXJnZXREYXRlKTtcbiAgICB9XG4gICAgY29tcG9uZW50LmFzc2lnbihcImhvdXJcIiwgMCk7XG4gICAgY29tcG9uZW50LmltcGx5KFwibWludXRlXCIsIDApO1xuICAgIGNvbXBvbmVudC5pbXBseShcInNlY29uZFwiLCAwKTtcbiAgICBjb21wb25lbnQuaW1wbHkoXCJtaWxsaXNlY29uZFwiLCAwKTtcbiAgICBjb21wb25lbnQuYWRkVGFnKFwiY2FzdWFsUmVmZXJlbmNlL21pZG5pZ2h0XCIpO1xuICAgIHJldHVybiBjb21wb25lbnQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBtb3JuaW5nKHJlZmVyZW5jZTogUmVmZXJlbmNlV2l0aFRpbWV6b25lLCBpbXBseUhvdXIgPSA2KTogUGFyc2luZ0NvbXBvbmVudHMge1xuICAgIGNvbnN0IGNvbXBvbmVudCA9IG5ldyBQYXJzaW5nQ29tcG9uZW50cyhyZWZlcmVuY2UsIHt9KTtcbiAgICBjb21wb25lbnQuaW1wbHkoXCJtZXJpZGllbVwiLCBNZXJpZGllbS5BTSk7XG4gICAgY29tcG9uZW50LmltcGx5KFwiaG91clwiLCBpbXBseUhvdXIpO1xuICAgIGNvbXBvbmVudC5pbXBseShcIm1pbnV0ZVwiLCAwKTtcbiAgICBjb21wb25lbnQuaW1wbHkoXCJzZWNvbmRcIiwgMCk7XG4gICAgY29tcG9uZW50LmltcGx5KFwibWlsbGlzZWNvbmRcIiwgMCk7XG4gICAgY29tcG9uZW50LmFkZFRhZyhcImNhc3VhbFJlZmVyZW5jZS9tb3JuaW5nXCIpO1xuICAgIHJldHVybiBjb21wb25lbnQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhZnRlcm5vb24ocmVmZXJlbmNlOiBSZWZlcmVuY2VXaXRoVGltZXpvbmUsIGltcGx5SG91ciA9IDE1KTogUGFyc2luZ0NvbXBvbmVudHMge1xuICAgIGNvbnN0IGNvbXBvbmVudCA9IG5ldyBQYXJzaW5nQ29tcG9uZW50cyhyZWZlcmVuY2UsIHt9KTtcbiAgICBjb21wb25lbnQuaW1wbHkoXCJtZXJpZGllbVwiLCBNZXJpZGllbS5QTSk7XG4gICAgY29tcG9uZW50LmltcGx5KFwiaG91clwiLCBpbXBseUhvdXIpO1xuICAgIGNvbXBvbmVudC5pbXBseShcIm1pbnV0ZVwiLCAwKTtcbiAgICBjb21wb25lbnQuaW1wbHkoXCJzZWNvbmRcIiwgMCk7XG4gICAgY29tcG9uZW50LmltcGx5KFwibWlsbGlzZWNvbmRcIiwgMCk7XG4gICAgY29tcG9uZW50LmFkZFRhZyhcImNhc3VhbFJlZmVyZW5jZS9hZnRlcm5vb25cIik7XG4gICAgcmV0dXJuIGNvbXBvbmVudDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG5vb24ocmVmZXJlbmNlOiBSZWZlcmVuY2VXaXRoVGltZXpvbmUpOiBQYXJzaW5nQ29tcG9uZW50cyB7XG4gICAgY29uc3QgY29tcG9uZW50ID0gbmV3IFBhcnNpbmdDb21wb25lbnRzKHJlZmVyZW5jZSwge30pO1xuICAgIGNvbXBvbmVudC5pbXBseShcIm1lcmlkaWVtXCIsIE1lcmlkaWVtLkFNKTtcbiAgICBjb21wb25lbnQuaW1wbHkoXCJob3VyXCIsIDEyKTtcbiAgICBjb21wb25lbnQuaW1wbHkoXCJtaW51dGVcIiwgMCk7XG4gICAgY29tcG9uZW50LmltcGx5KFwic2Vjb25kXCIsIDApO1xuICAgIGNvbXBvbmVudC5pbXBseShcIm1pbGxpc2Vjb25kXCIsIDApO1xuICAgIGNvbXBvbmVudC5hZGRUYWcoXCJjYXN1YWxSZWZlcmVuY2Uvbm9vblwiKTtcbiAgICByZXR1cm4gY29tcG9uZW50O1xufVxuIiwgImltcG9ydCB7IFBhcnNpbmdDb250ZXh0IH0gZnJvbSBcIi4uLy4uLy4uL2Nocm9ub1wiO1xuaW1wb3J0IHsgQWJzdHJhY3RQYXJzZXJXaXRoV29yZEJvdW5kYXJ5Q2hlY2tpbmcgfSBmcm9tIFwiLi4vLi4vLi4vY29tbW9uL3BhcnNlcnMvQWJzdHJhY3RQYXJzZXJXaXRoV29yZEJvdW5kYXJ5XCI7XG5pbXBvcnQgKiBhcyBjYXN1YWxSZWZlcmVuY2VzIGZyb20gXCIuLi8uLi8uLi9jb21tb24vY2FzdWFsUmVmZXJlbmNlc1wiO1xuXG5jb25zdCBQQVRURVJOID0gLyg/OnRoaXMpP1xcc3swLDN9KG1vcm5pbmd8YWZ0ZXJub29ufGV2ZW5pbmd8bmlnaHR8bWlkbmlnaHR8bWlkZGF5fG5vb24pKD89XFxXfCQpL2k7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEVOQ2FzdWFsVGltZVBhcnNlciBleHRlbmRzIEFic3RyYWN0UGFyc2VyV2l0aFdvcmRCb3VuZGFyeUNoZWNraW5nIHtcbiAgICBpbm5lclBhdHRlcm4oKSB7XG4gICAgICAgIHJldHVybiBQQVRURVJOO1xuICAgIH1cbiAgICBpbm5lckV4dHJhY3QoY29udGV4dDogUGFyc2luZ0NvbnRleHQsIG1hdGNoOiBSZWdFeHBNYXRjaEFycmF5KSB7XG4gICAgICAgIGxldCBjb21wb25lbnQgPSBudWxsO1xuICAgICAgICBzd2l0Y2ggKG1hdGNoWzFdLnRvTG93ZXJDYXNlKCkpIHtcbiAgICAgICAgICAgIGNhc2UgXCJhZnRlcm5vb25cIjpcbiAgICAgICAgICAgICAgICBjb21wb25lbnQgPSBjYXN1YWxSZWZlcmVuY2VzLmFmdGVybm9vbihjb250ZXh0LnJlZmVyZW5jZSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwiZXZlbmluZ1wiOlxuICAgICAgICAgICAgY2FzZSBcIm5pZ2h0XCI6XG4gICAgICAgICAgICAgICAgY29tcG9uZW50ID0gY2FzdWFsUmVmZXJlbmNlcy5ldmVuaW5nKGNvbnRleHQucmVmZXJlbmNlKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCJtaWRuaWdodFwiOlxuICAgICAgICAgICAgICAgIGNvbXBvbmVudCA9IGNhc3VhbFJlZmVyZW5jZXMubWlkbmlnaHQoY29udGV4dC5yZWZlcmVuY2UpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcIm1vcm5pbmdcIjpcbiAgICAgICAgICAgICAgICBjb21wb25lbnQgPSBjYXN1YWxSZWZlcmVuY2VzLm1vcm5pbmcoY29udGV4dC5yZWZlcmVuY2UpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcIm5vb25cIjpcbiAgICAgICAgICAgIGNhc2UgXCJtaWRkYXlcIjpcbiAgICAgICAgICAgICAgICBjb21wb25lbnQgPSBjYXN1YWxSZWZlcmVuY2VzLm5vb24oY29udGV4dC5yZWZlcmVuY2UpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICAgIGlmIChjb21wb25lbnQpIHtcbiAgICAgICAgICAgIGNvbXBvbmVudC5hZGRUYWcoXCJwYXJzZXIvRU5DYXN1YWxUaW1lUGFyc2VyXCIpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBjb21wb25lbnQ7XG4gICAgfVxufVxuIiwgImltcG9ydCB7IFdlZWtkYXkgfSBmcm9tIFwiLi4vLi4vdHlwZXNcIjtcbmltcG9ydCB7IFBhcnNpbmdDb21wb25lbnRzLCBSZWZlcmVuY2VXaXRoVGltZXpvbmUgfSBmcm9tIFwiLi4vLi4vcmVzdWx0c1wiO1xuaW1wb3J0IHsgYWRkSW1wbGllZFRpbWVVbml0cyB9IGZyb20gXCIuLi8uLi91dGlscy90aW1ldW5pdHNcIjtcblxuLyoqXG4gKiBSZXR1cm5zIHRoZSBwYXJzaW5nIGNvbXBvbmVudHMgYXQgdGhlIHdlZWtkYXkgKGNvbnNpZGVyaW5nIHRoZSBtb2RpZmllcikuIFRoZSB0aW1lIGFuZCB0aW1lem9uZSBpcyBhc3N1bWUgdG8gYmVcbiAqIHNpbWlsYXIgdG8gdGhlIHJlZmVyZW5jZS5cbiAqIEBwYXJhbSByZWZlcmVuY2VcbiAqIEBwYXJhbSB3ZWVrZGF5XG4gKiBAcGFyYW0gbW9kaWZpZXIgXCJ0aGlzXCIsIFwibmV4dFwiLCBcImxhc3RcIiBtb2RpZmllciB3b3JkLiBJZiBlbXB0eSwgcmV0dXJucyB0aGUgd2Vla2RheSBjbG9zZXN0IHRvIHRoZSBgcmVmRGF0ZWAuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVQYXJzaW5nQ29tcG9uZW50c0F0V2Vla2RheShcbiAgICByZWZlcmVuY2U6IFJlZmVyZW5jZVdpdGhUaW1lem9uZSxcbiAgICB3ZWVrZGF5OiBXZWVrZGF5LFxuICAgIG1vZGlmaWVyPzogXCJ0aGlzXCIgfCBcIm5leHRcIiB8IFwibGFzdFwiXG4pOiBQYXJzaW5nQ29tcG9uZW50cyB7XG4gICAgY29uc3QgcmVmRGF0ZSA9IHJlZmVyZW5jZS5nZXREYXRlV2l0aEFkanVzdGVkVGltZXpvbmUoKTtcbiAgICBjb25zdCBkYXlzVG9XZWVrZGF5ID0gZ2V0RGF5c1RvV2Vla2RheShyZWZEYXRlLCB3ZWVrZGF5LCBtb2RpZmllcik7XG5cbiAgICBsZXQgY29tcG9uZW50cyA9IG5ldyBQYXJzaW5nQ29tcG9uZW50cyhyZWZlcmVuY2UpO1xuICAgIGNvbXBvbmVudHMgPSBhZGRJbXBsaWVkVGltZVVuaXRzKGNvbXBvbmVudHMsIHsgXCJkYXlcIjogZGF5c1RvV2Vla2RheSB9KTtcbiAgICBjb21wb25lbnRzLmFzc2lnbihcIndlZWtkYXlcIiwgd2Vla2RheSk7XG5cbiAgICByZXR1cm4gY29tcG9uZW50cztcbn1cblxuLyoqXG4gKiBSZXR1cm5zIG51bWJlciBvZiBkYXlzIGZyb20gcmVmRGF0ZSB0byB0aGUgd2Vla2RheS4gVGhlIHJlZkRhdGUgZGF0ZSBhbmQgdGltZXpvbmUgaW5mb3JtYXRpb24gaXMgdXNlZC5cbiAqIEBwYXJhbSByZWZEYXRlXG4gKiBAcGFyYW0gd2Vla2RheVxuICogQHBhcmFtIG1vZGlmaWVyIFwidGhpc1wiLCBcIm5leHRcIiwgXCJsYXN0XCIgbW9kaWZpZXIgd29yZC4gSWYgZW1wdHksIHJldHVybnMgdGhlIHdlZWtkYXkgY2xvc2VzdCB0byB0aGUgYHJlZkRhdGVgLlxuICovXG5leHBvcnQgZnVuY3Rpb24gZ2V0RGF5c1RvV2Vla2RheShyZWZEYXRlOiBEYXRlLCB3ZWVrZGF5OiBXZWVrZGF5LCBtb2RpZmllcj86IFwidGhpc1wiIHwgXCJuZXh0XCIgfCBcImxhc3RcIik6IG51bWJlciB7XG4gICAgY29uc3QgcmVmV2Vla2RheSA9IHJlZkRhdGUuZ2V0RGF5KCkgYXMgV2Vla2RheTtcbiAgICBzd2l0Y2ggKG1vZGlmaWVyKSB7XG4gICAgICAgIGNhc2UgXCJ0aGlzXCI6XG4gICAgICAgICAgICByZXR1cm4gZ2V0RGF5c0ZvcndhcmRUb1dlZWtkYXkocmVmRGF0ZSwgd2Vla2RheSk7XG4gICAgICAgIGNhc2UgXCJsYXN0XCI6XG4gICAgICAgICAgICByZXR1cm4gZ2V0QmFja3dhcmREYXlzVG9XZWVrZGF5KHJlZkRhdGUsIHdlZWtkYXkpO1xuICAgICAgICBjYXNlIFwibmV4dFwiOlxuICAgICAgICAgICAgLy8gRnJvbSBTdW5kYXksIHRoZSBuZXh0IFN1bmRheSBpcyA3IGRheXMgbGF0ZXIuXG4gICAgICAgICAgICAvLyBPdGhlcndpc2UsIG5leHQgTW9uIGlzIDEgZGF5cyBsYXRlciwgbmV4dCBUdWVzIGlzIDIgZGF5cyBsYXRlciwgYW5kIHNvIG9uLi4uLCAocmV0dXJuIGVudW0gdmFsdWUpXG4gICAgICAgICAgICBpZiAocmVmV2Vla2RheSA9PSBXZWVrZGF5LlNVTkRBWSkge1xuICAgICAgICAgICAgICAgIHJldHVybiB3ZWVrZGF5ID09IFdlZWtkYXkuU1VOREFZID8gNyA6IHdlZWtkYXk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBGcm9tIFNhdHVyZGF5LCB0aGUgbmV4dCBTYXR1cmRheSBpcyA3IGRheXMgbGF0ZXIsIHRoZSBuZXh0IFN1bmRheSBpcyA4LWRheXMgbGF0ZXIuXG4gICAgICAgICAgICAvLyBPdGhlcndpc2UsIG5leHQgTW9uIGlzICgxICsgMSkgZGF5cyBsYXRlciwgbmV4dCBUdWVzIGlzICgxICsgMikgZGF5cyBsYXRlciwgYW5kIHNvIG9uLi4uLFxuICAgICAgICAgICAgLy8gKHJldHVybiwgMiArIFtlbnVtIHZhbHVlXSBkYXlzKVxuICAgICAgICAgICAgaWYgKHJlZldlZWtkYXkgPT0gV2Vla2RheS5TQVRVUkRBWSkge1xuICAgICAgICAgICAgICAgIGlmICh3ZWVrZGF5ID09IFdlZWtkYXkuU0FUVVJEQVkpIHJldHVybiA3O1xuICAgICAgICAgICAgICAgIGlmICh3ZWVrZGF5ID09IFdlZWtkYXkuU1VOREFZKSByZXR1cm4gODtcbiAgICAgICAgICAgICAgICByZXR1cm4gMSArIHdlZWtkYXk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBGcm9tIHdlZWtkYXlzLCBuZXh0IE1vbiBpcyB0aGUgZm9sbG93aW5nIHdlZWsncyBNb24sIG5leHQgVHVlcyB0aGUgZm9sbG93aW5nIHdlZWsncyBUdWVzLCBhbmQgc28gb24uLi5cbiAgICAgICAgICAgIC8vIElmIHRoZSB3ZWVrJ3Mgd2Vla2RheSBhbHJlYWR5IHBhc3NlZCAod2Vla2RheSA8IHJlZldlZWtkYXkpLCB3ZSBzaW1wbHkgY291bnQgZm9yd2FyZCB0byBuZXh0IHdlZWtcbiAgICAgICAgICAgIC8vIChzaW1pbGFyIHRvICd0aGlzJykuIE90aGVyd2lzZSwgY291bnQgZm9yd2FyZCB0byB0aGlzIHdlZWssIHRoZW4gYWRkIGFub3RoZXIgNyBkYXlzLlxuICAgICAgICAgICAgaWYgKHdlZWtkYXkgPCByZWZXZWVrZGF5ICYmIHdlZWtkYXkgIT0gV2Vla2RheS5TVU5EQVkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZ2V0RGF5c0ZvcndhcmRUb1dlZWtkYXkocmVmRGF0ZSwgd2Vla2RheSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHJldHVybiBnZXREYXlzRm9yd2FyZFRvV2Vla2RheShyZWZEYXRlLCB3ZWVrZGF5KSArIDc7XG4gICAgICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBnZXREYXlzVG9XZWVrZGF5Q2xvc2VzdChyZWZEYXRlLCB3ZWVrZGF5KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldERheXNUb1dlZWtkYXlDbG9zZXN0KHJlZkRhdGU6IERhdGUsIHdlZWtkYXk6IFdlZWtkYXkpOiBudW1iZXIge1xuICAgIGNvbnN0IGJhY2t3YXJkID0gZ2V0QmFja3dhcmREYXlzVG9XZWVrZGF5KHJlZkRhdGUsIHdlZWtkYXkpO1xuICAgIGNvbnN0IGZvcndhcmQgPSBnZXREYXlzRm9yd2FyZFRvV2Vla2RheShyZWZEYXRlLCB3ZWVrZGF5KTtcblxuICAgIHJldHVybiBmb3J3YXJkIDwgLWJhY2t3YXJkID8gZm9yd2FyZCA6IGJhY2t3YXJkO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0RGF5c0ZvcndhcmRUb1dlZWtkYXkocmVmRGF0ZTogRGF0ZSwgd2Vla2RheTogV2Vla2RheSk6IG51bWJlciB7XG4gICAgY29uc3QgcmVmV2Vla2RheSA9IHJlZkRhdGUuZ2V0RGF5KCk7XG4gICAgbGV0IGZvcndhcmRDb3VudCA9IHdlZWtkYXkgLSByZWZXZWVrZGF5O1xuICAgIGlmIChmb3J3YXJkQ291bnQgPCAwKSB7XG4gICAgICAgIGZvcndhcmRDb3VudCArPSA3O1xuICAgIH1cbiAgICByZXR1cm4gZm9yd2FyZENvdW50O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0QmFja3dhcmREYXlzVG9XZWVrZGF5KHJlZkRhdGU6IERhdGUsIHdlZWtkYXk6IFdlZWtkYXkpOiBudW1iZXIge1xuICAgIGNvbnN0IHJlZldlZWtkYXkgPSByZWZEYXRlLmdldERheSgpO1xuICAgIGxldCBiYWNrd2FyZENvdW50ID0gd2Vla2RheSAtIHJlZldlZWtkYXk7XG4gICAgaWYgKGJhY2t3YXJkQ291bnQgPj0gMCkge1xuICAgICAgICBiYWNrd2FyZENvdW50IC09IDc7XG4gICAgfVxuICAgIHJldHVybiBiYWNrd2FyZENvdW50O1xufVxuIiwgImltcG9ydCB7IFBhcnNpbmdDb250ZXh0IH0gZnJvbSBcIi4uLy4uLy4uL2Nocm9ub1wiO1xuaW1wb3J0IHsgUGFyc2luZ0NvbXBvbmVudHMgfSBmcm9tIFwiLi4vLi4vLi4vcmVzdWx0c1wiO1xuaW1wb3J0IHsgV0VFS0RBWV9ESUNUSU9OQVJZIH0gZnJvbSBcIi4uL2NvbnN0YW50c1wiO1xuaW1wb3J0IHsgbWF0Y2hBbnlQYXR0ZXJuIH0gZnJvbSBcIi4uLy4uLy4uL3V0aWxzL3BhdHRlcm5cIjtcbmltcG9ydCB7IEFic3RyYWN0UGFyc2VyV2l0aFdvcmRCb3VuZGFyeUNoZWNraW5nIH0gZnJvbSBcIi4uLy4uLy4uL2NvbW1vbi9wYXJzZXJzL0Fic3RyYWN0UGFyc2VyV2l0aFdvcmRCb3VuZGFyeVwiO1xuaW1wb3J0IHsgY3JlYXRlUGFyc2luZ0NvbXBvbmVudHNBdFdlZWtkYXkgfSBmcm9tIFwiLi4vLi4vLi4vY29tbW9uL2NhbGN1bGF0aW9uL3dlZWtkYXlzXCI7XG5pbXBvcnQgeyBXZWVrZGF5IH0gZnJvbSBcIi4uLy4uLy4uL3R5cGVzXCI7XG5cbmNvbnN0IFBBVFRFUk4gPSBuZXcgUmVnRXhwKFxuICAgIFwiKD86KD86XFxcXCx8XFxcXCh8XFxcXFx1RkYwOClcXFxccyopP1wiICtcbiAgICAgICAgXCIoPzpvblxcXFxzKj8pP1wiICtcbiAgICAgICAgXCIoPzoodGhpc3xsYXN0fHBhc3R8bmV4dClcXFxccyopP1wiICtcbiAgICAgICAgYCgke21hdGNoQW55UGF0dGVybihXRUVLREFZX0RJQ1RJT05BUlkpfXx3ZWVrZW5kfHdlZWtkYXkpYCArXG4gICAgICAgIFwiKD86XFxcXHMqKD86XFxcXCx8XFxcXCl8XFxcXFx1RkYwOSkpP1wiICtcbiAgICAgICAgXCIoPzpcXFxccyoodGhpc3xsYXN0fHBhc3R8bmV4dClcXFxccyp3ZWVrKT9cIiArXG4gICAgICAgIFwiKD89XFxcXFd8JClcIixcbiAgICBcImlcIlxuKTtcblxuY29uc3QgUFJFRklYX0dST1VQID0gMTtcbmNvbnN0IFdFRUtEQVlfR1JPVVAgPSAyO1xuY29uc3QgUE9TVEZJWF9HUk9VUCA9IDM7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEVOV2Vla2RheVBhcnNlciBleHRlbmRzIEFic3RyYWN0UGFyc2VyV2l0aFdvcmRCb3VuZGFyeUNoZWNraW5nIHtcbiAgICBpbm5lclBhdHRlcm4oKTogUmVnRXhwIHtcbiAgICAgICAgcmV0dXJuIFBBVFRFUk47XG4gICAgfVxuXG4gICAgaW5uZXJFeHRyYWN0KGNvbnRleHQ6IFBhcnNpbmdDb250ZXh0LCBtYXRjaDogUmVnRXhwTWF0Y2hBcnJheSk6IFBhcnNpbmdDb21wb25lbnRzIHwgbnVsbCB7XG4gICAgICAgIGNvbnN0IHByZWZpeCA9IG1hdGNoW1BSRUZJWF9HUk9VUF07XG4gICAgICAgIGNvbnN0IHBvc3RmaXggPSBtYXRjaFtQT1NURklYX0dST1VQXTtcbiAgICAgICAgbGV0IG1vZGlmaWVyV29yZCA9IHByZWZpeCB8fCBwb3N0Zml4O1xuICAgICAgICBtb2RpZmllcldvcmQgPSBtb2RpZmllcldvcmQgfHwgXCJcIjtcbiAgICAgICAgbW9kaWZpZXJXb3JkID0gbW9kaWZpZXJXb3JkLnRvTG93ZXJDYXNlKCk7XG5cbiAgICAgICAgbGV0IG1vZGlmaWVyID0gbnVsbDtcbiAgICAgICAgaWYgKG1vZGlmaWVyV29yZCA9PSBcImxhc3RcIiB8fCBtb2RpZmllcldvcmQgPT0gXCJwYXN0XCIpIHtcbiAgICAgICAgICAgIG1vZGlmaWVyID0gXCJsYXN0XCI7XG4gICAgICAgIH0gZWxzZSBpZiAobW9kaWZpZXJXb3JkID09IFwibmV4dFwiKSB7XG4gICAgICAgICAgICBtb2RpZmllciA9IFwibmV4dFwiO1xuICAgICAgICB9IGVsc2UgaWYgKG1vZGlmaWVyV29yZCA9PSBcInRoaXNcIikge1xuICAgICAgICAgICAgbW9kaWZpZXIgPSBcInRoaXNcIjtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHdlZWtkYXlfd29yZCA9IG1hdGNoW1dFRUtEQVlfR1JPVVBdLnRvTG93ZXJDYXNlKCk7XG4gICAgICAgIGxldCB3ZWVrZGF5O1xuICAgICAgICBpZiAoV0VFS0RBWV9ESUNUSU9OQVJZW3dlZWtkYXlfd29yZF0gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgd2Vla2RheSA9IFdFRUtEQVlfRElDVElPTkFSWVt3ZWVrZGF5X3dvcmRdO1xuICAgICAgICB9IGVsc2UgaWYgKHdlZWtkYXlfd29yZCA9PSBcIndlZWtlbmRcIikge1xuICAgICAgICAgICAgLy8gVGhpcyBkZXBlbmRzIG9uIHdoYXQgZGF5cyBhcmUgd2Vla2VuZCBzZXR0aW5nLCBidXQgdHlwaWNhbGx5OlxuICAgICAgICAgICAgLy8gJ1RoaXMvbmV4dCB3ZWVrZW5kJyBtZWFucyB0aGUgY29taW5nIFNhdHVyZGF5LCAnbGFzdCB3ZWVrZW5kJyBtZWFucyBsYXN0IFN1bmRheS5cbiAgICAgICAgICAgIHdlZWtkYXkgPSBtb2RpZmllciA9PSBcImxhc3RcIiA/IFdlZWtkYXkuU1VOREFZIDogV2Vla2RheS5TQVRVUkRBWTtcbiAgICAgICAgfSBlbHNlIGlmICh3ZWVrZGF5X3dvcmQgPT0gXCJ3ZWVrZGF5XCIpIHtcbiAgICAgICAgICAgIC8vIEluIEVuZ2xpc2gsIHRoZSBcIndlZWtkYXlcIiBtZWFucyBhbnkgZGF5IG9mIHRoZSB3ZWVrIGV4Y2VwdCB3ZWVrZW5kLlxuICAgICAgICAgICAgLy8gVGhpcyBhbHNvIGRlcGVuZHMgb24gd2hhdCBkYXlzIGFyZSB3ZWVrZW5kIHNldHRpbmcsIGJ1dCB0eXBpY2FsbHk6XG4gICAgICAgICAgICAvLyAtIE9uIHdlZWtlbmQgcmVmLCB0aGlzIG1lYW5zIHRoZSBjb21pbmcgTW9uZGF5IG9yIGxhc3QgRnJpZGF5LlxuICAgICAgICAgICAgLy8gLSBPbiB3ZWVrZGF5IHJlZiwgdGhpcyBtZWFucyB0aGUgbmV4dC9sYXN0IHdvcmtpbmcgZGF5LlxuICAgICAgICAgICAgY29uc3QgcmVmV2Vla2RheSA9IGNvbnRleHQucmVmZXJlbmNlLmdldERhdGVXaXRoQWRqdXN0ZWRUaW1lem9uZSgpLmdldERheSgpO1xuICAgICAgICAgICAgaWYgKHJlZldlZWtkYXkgPT0gV2Vla2RheS5TVU5EQVkgfHwgcmVmV2Vla2RheSA9PSBXZWVrZGF5LlNBVFVSREFZKSB7XG4gICAgICAgICAgICAgICAgd2Vla2RheSA9IG1vZGlmaWVyID09IFwibGFzdFwiID8gV2Vla2RheS5GUklEQVkgOiBXZWVrZGF5Lk1PTkRBWTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgd2Vla2RheSA9IHJlZldlZWtkYXkgLSAxO1xuICAgICAgICAgICAgICAgIHdlZWtkYXkgPSBtb2RpZmllciA9PSBcImxhc3RcIiA/IHdlZWtkYXkgLSAxIDogd2Vla2RheSArIDE7XG4gICAgICAgICAgICAgICAgd2Vla2RheSA9ICh3ZWVrZGF5ICUgNSkgKyAxO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gY3JlYXRlUGFyc2luZ0NvbXBvbmVudHNBdFdlZWtkYXkoY29udGV4dC5yZWZlcmVuY2UsIHdlZWtkYXksIG1vZGlmaWVyKTtcbiAgICB9XG59XG4iLCAiaW1wb3J0IHsgVElNRV9VTklUX0RJQ1RJT05BUlkgfSBmcm9tIFwiLi4vY29uc3RhbnRzXCI7XG5pbXBvcnQgeyBQYXJzaW5nQ29udGV4dCB9IGZyb20gXCIuLi8uLi8uLi9jaHJvbm9cIjtcbmltcG9ydCB7IFBhcnNpbmdDb21wb25lbnRzIH0gZnJvbSBcIi4uLy4uLy4uL3Jlc3VsdHNcIjtcbmltcG9ydCBkYXlqcyBmcm9tIFwiZGF5anNcIjtcbmltcG9ydCB7IEFic3RyYWN0UGFyc2VyV2l0aFdvcmRCb3VuZGFyeUNoZWNraW5nIH0gZnJvbSBcIi4uLy4uLy4uL2NvbW1vbi9wYXJzZXJzL0Fic3RyYWN0UGFyc2VyV2l0aFdvcmRCb3VuZGFyeVwiO1xuaW1wb3J0IHsgbWF0Y2hBbnlQYXR0ZXJuIH0gZnJvbSBcIi4uLy4uLy4uL3V0aWxzL3BhdHRlcm5cIjtcblxuY29uc3QgUEFUVEVSTiA9IG5ldyBSZWdFeHAoXG4gICAgYCh0aGlzfGxhc3R8cGFzdHxuZXh0fGFmdGVyXFxcXHMqdGhpcylcXFxccyooJHttYXRjaEFueVBhdHRlcm4oVElNRV9VTklUX0RJQ1RJT05BUlkpfSkoPz1cXFxccyopYCArIFwiKD89XFxcXFd8JClcIixcbiAgICBcImlcIlxuKTtcblxuY29uc3QgTU9ESUZJRVJfV09SRF9HUk9VUCA9IDE7XG5jb25zdCBSRUxBVElWRV9XT1JEX0dST1VQID0gMjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRU5SZWxhdGl2ZURhdGVGb3JtYXRQYXJzZXIgZXh0ZW5kcyBBYnN0cmFjdFBhcnNlcldpdGhXb3JkQm91bmRhcnlDaGVja2luZyB7XG4gICAgaW5uZXJQYXR0ZXJuKCk6IFJlZ0V4cCB7XG4gICAgICAgIHJldHVybiBQQVRURVJOO1xuICAgIH1cblxuICAgIGlubmVyRXh0cmFjdChjb250ZXh0OiBQYXJzaW5nQ29udGV4dCwgbWF0Y2g6IFJlZ0V4cE1hdGNoQXJyYXkpOiBQYXJzaW5nQ29tcG9uZW50cyB7XG4gICAgICAgIGNvbnN0IG1vZGlmaWVyID0gbWF0Y2hbTU9ESUZJRVJfV09SRF9HUk9VUF0udG9Mb3dlckNhc2UoKTtcbiAgICAgICAgY29uc3QgdW5pdFdvcmQgPSBtYXRjaFtSRUxBVElWRV9XT1JEX0dST1VQXS50b0xvd2VyQ2FzZSgpO1xuICAgICAgICBjb25zdCB0aW1ldW5pdCA9IFRJTUVfVU5JVF9ESUNUSU9OQVJZW3VuaXRXb3JkXTtcblxuICAgICAgICBpZiAobW9kaWZpZXIgPT0gXCJuZXh0XCIgfHwgbW9kaWZpZXIuc3RhcnRzV2l0aChcImFmdGVyXCIpKSB7XG4gICAgICAgICAgICBjb25zdCB0aW1lVW5pdHMgPSB7fTtcbiAgICAgICAgICAgIHRpbWVVbml0c1t0aW1ldW5pdF0gPSAxO1xuICAgICAgICAgICAgcmV0dXJuIFBhcnNpbmdDb21wb25lbnRzLmNyZWF0ZVJlbGF0aXZlRnJvbVJlZmVyZW5jZShjb250ZXh0LnJlZmVyZW5jZSwgdGltZVVuaXRzKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChtb2RpZmllciA9PSBcImxhc3RcIiB8fCBtb2RpZmllciA9PSBcInBhc3RcIikge1xuICAgICAgICAgICAgY29uc3QgdGltZVVuaXRzID0ge307XG4gICAgICAgICAgICB0aW1lVW5pdHNbdGltZXVuaXRdID0gLTE7XG4gICAgICAgICAgICByZXR1cm4gUGFyc2luZ0NvbXBvbmVudHMuY3JlYXRlUmVsYXRpdmVGcm9tUmVmZXJlbmNlKGNvbnRleHQucmVmZXJlbmNlLCB0aW1lVW5pdHMpO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgY29tcG9uZW50cyA9IGNvbnRleHQuY3JlYXRlUGFyc2luZ0NvbXBvbmVudHMoKTtcbiAgICAgICAgbGV0IGRhdGUgPSBkYXlqcyhjb250ZXh0LnJlZmVyZW5jZS5pbnN0YW50KTtcblxuICAgICAgICAvLyBUaGlzIHdlZWtcbiAgICAgICAgaWYgKHVuaXRXb3JkLm1hdGNoKC93ZWVrL2kpKSB7XG4gICAgICAgICAgICBkYXRlID0gZGF0ZS5hZGQoLWRhdGUuZ2V0KFwiZFwiKSwgXCJkXCIpO1xuICAgICAgICAgICAgY29tcG9uZW50cy5pbXBseShcImRheVwiLCBkYXRlLmRhdGUoKSk7XG4gICAgICAgICAgICBjb21wb25lbnRzLmltcGx5KFwibW9udGhcIiwgZGF0ZS5tb250aCgpICsgMSk7XG4gICAgICAgICAgICBjb21wb25lbnRzLmltcGx5KFwieWVhclwiLCBkYXRlLnllYXIoKSk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBUaGlzIG1vbnRoXG4gICAgICAgIGVsc2UgaWYgKHVuaXRXb3JkLm1hdGNoKC9tb250aC9pKSkge1xuICAgICAgICAgICAgZGF0ZSA9IGRhdGUuYWRkKC1kYXRlLmRhdGUoKSArIDEsIFwiZFwiKTtcbiAgICAgICAgICAgIGNvbXBvbmVudHMuaW1wbHkoXCJkYXlcIiwgZGF0ZS5kYXRlKCkpO1xuICAgICAgICAgICAgY29tcG9uZW50cy5hc3NpZ24oXCJ5ZWFyXCIsIGRhdGUueWVhcigpKTtcbiAgICAgICAgICAgIGNvbXBvbmVudHMuYXNzaWduKFwibW9udGhcIiwgZGF0ZS5tb250aCgpICsgMSk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBUaGlzIHllYXJcbiAgICAgICAgZWxzZSBpZiAodW5pdFdvcmQubWF0Y2goL3llYXIvaSkpIHtcbiAgICAgICAgICAgIGRhdGUgPSBkYXRlLmFkZCgtZGF0ZS5kYXRlKCkgKyAxLCBcImRcIik7XG4gICAgICAgICAgICBkYXRlID0gZGF0ZS5hZGQoLWRhdGUubW9udGgoKSwgXCJtb250aFwiKTtcblxuICAgICAgICAgICAgY29tcG9uZW50cy5pbXBseShcImRheVwiLCBkYXRlLmRhdGUoKSk7XG4gICAgICAgICAgICBjb21wb25lbnRzLmltcGx5KFwibW9udGhcIiwgZGF0ZS5tb250aCgpICsgMSk7XG4gICAgICAgICAgICBjb21wb25lbnRzLmFzc2lnbihcInllYXJcIiwgZGF0ZS55ZWFyKCkpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGNvbXBvbmVudHM7XG4gICAgfVxufVxuIiwgImltcG9ydCB7IFBhcnNlciwgUGFyc2luZ0NvbnRleHQgfSBmcm9tIFwiLi4vLi4vY2hyb25vXCI7XG5pbXBvcnQgeyBQYXJzaW5nUmVzdWx0IH0gZnJvbSBcIi4uLy4uL3Jlc3VsdHNcIjtcbmltcG9ydCB7IGZpbmRNb3N0TGlrZWx5QURZZWFyLCBmaW5kWWVhckNsb3Nlc3RUb1JlZiB9IGZyb20gXCIuLi8uLi9jYWxjdWxhdGlvbi95ZWFyc1wiO1xuXG4vKipcbiAqIERhdGUgZm9ybWF0IHdpdGggc2xhc2ggXCIvXCIgKG9yIGRvdCBcIi5cIikgYmV0d2VlbiBudW1iZXJzLlxuICogRm9yIGV4YW1wbGVzOlxuICogLSA3LzEwXG4gKiAtIDcvMTIvMjAyMFxuICogLSA3LjEyLjIwMjBcbiAqL1xuY29uc3QgUEFUVEVSTiA9IG5ldyBSZWdFeHAoXG4gICAgXCIoW15cXFxcZF18XilcIiArXG4gICAgICAgIFwiKFswLTNdezAsMX1bMC05XXsxfSlbXFxcXC9cXFxcLlxcXFwtXShbMC0zXXswLDF9WzAtOV17MX0pXCIgK1xuICAgICAgICBcIig/OltcXFxcL1xcXFwuXFxcXC1dKFswLTldezR9fFswLTldezJ9KSk/XCIgK1xuICAgICAgICBcIihcXFxcV3wkKVwiLFxuICAgIFwiaVwiXG4pO1xuXG5jb25zdCBPUEVOSU5HX0dST1VQID0gMTtcbmNvbnN0IEVORElOR19HUk9VUCA9IDU7XG5cbmNvbnN0IEZJUlNUX05VTUJFUlNfR1JPVVAgPSAyO1xuY29uc3QgU0VDT05EX05VTUJFUlNfR1JPVVAgPSAzO1xuXG5jb25zdCBZRUFSX0dST1VQID0gNDtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2xhc2hEYXRlRm9ybWF0UGFyc2VyIGltcGxlbWVudHMgUGFyc2VyIHtcbiAgICBncm91cE51bWJlck1vbnRoOiBudW1iZXI7XG4gICAgZ3JvdXBOdW1iZXJEYXk6IG51bWJlcjtcblxuICAgIGNvbnN0cnVjdG9yKGxpdHRsZUVuZGlhbjogYm9vbGVhbikge1xuICAgICAgICB0aGlzLmdyb3VwTnVtYmVyTW9udGggPSBsaXR0bGVFbmRpYW4gPyBTRUNPTkRfTlVNQkVSU19HUk9VUCA6IEZJUlNUX05VTUJFUlNfR1JPVVA7XG4gICAgICAgIHRoaXMuZ3JvdXBOdW1iZXJEYXkgPSBsaXR0bGVFbmRpYW4gPyBGSVJTVF9OVU1CRVJTX0dST1VQIDogU0VDT05EX05VTUJFUlNfR1JPVVA7XG4gICAgfVxuXG4gICAgcGF0dGVybigpOiBSZWdFeHAge1xuICAgICAgICByZXR1cm4gUEFUVEVSTjtcbiAgICB9XG5cbiAgICBleHRyYWN0KGNvbnRleHQ6IFBhcnNpbmdDb250ZXh0LCBtYXRjaDogUmVnRXhwTWF0Y2hBcnJheSk6IFBhcnNpbmdSZXN1bHQge1xuICAgICAgICAvLyBCZWNhdXNlIG9mIGhvdyBwYXR0ZXJuIGlzIGV4ZWN1dGVkIG9uIHJlbWFpbmluZyB0ZXh0IGluIGBjaHJvbm8udHNgLCB0aGUgY2hhcmFjdGVyIGJlZm9yZSB0aGUgbWF0Y2ggY291bGRcbiAgICAgICAgLy8gc3RpbGwgYmUgYSBudW1iZXIgKGUuZy4gWFtYL1lZL1paXSBvciBYWFsvWVkvWlpdIG9yIFtYWC9ZWS9dWlopLiBXZSB3YW50IHRvIGNoZWNrIGFuZCBza2lwIHRoZW0uXG4gICAgICAgIGNvbnN0IGluZGV4ID0gbWF0Y2guaW5kZXggKyBtYXRjaFtPUEVOSU5HX0dST1VQXS5sZW5ndGg7XG4gICAgICAgIGNvbnN0IGluZGV4RW5kID0gbWF0Y2guaW5kZXggKyBtYXRjaFswXS5sZW5ndGggLSBtYXRjaFtFTkRJTkdfR1JPVVBdLmxlbmd0aDtcbiAgICAgICAgaWYgKGluZGV4ID4gMCkge1xuICAgICAgICAgICAgY29uc3QgdGV4dEJlZm9yZSA9IGNvbnRleHQudGV4dC5zdWJzdHJpbmcoMCwgaW5kZXgpO1xuICAgICAgICAgICAgaWYgKHRleHRCZWZvcmUubWF0Y2goXCJcXFxcZC8/JFwiKSkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAoaW5kZXhFbmQgPCBjb250ZXh0LnRleHQubGVuZ3RoKSB7XG4gICAgICAgICAgICBjb25zdCB0ZXh0QWZ0ZXIgPSBjb250ZXh0LnRleHQuc3Vic3RyaW5nKGluZGV4RW5kKTtcbiAgICAgICAgICAgIGlmICh0ZXh0QWZ0ZXIubWF0Y2goXCJeLz9cXFxcZFwiKSkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHRleHQgPSBjb250ZXh0LnRleHQuc3Vic3RyaW5nKGluZGV4LCBpbmRleEVuZCk7XG5cbiAgICAgICAgLy8gJzEuMTInLCAnMS4xMi4xMicgaXMgbW9yZSBsaWtlIGEgdmVyc2lvbiBudW1iZXJzXG4gICAgICAgIGlmICh0ZXh0Lm1hdGNoKC9eXFxkXFwuXFxkJC8pIHx8IHRleHQubWF0Y2goL15cXGRcXC5cXGR7MSwyfVxcLlxcZHsxLDJ9XFxzKiQvKSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gTU0vZGQgLT4gT0tcbiAgICAgICAgLy8gTU0uZGQgLT4gTkdcbiAgICAgICAgaWYgKCFtYXRjaFtZRUFSX0dST1VQXSAmJiB0ZXh0LmluZGV4T2YoXCIvXCIpIDwgMCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgcmVzdWx0ID0gY29udGV4dC5jcmVhdGVQYXJzaW5nUmVzdWx0KGluZGV4LCB0ZXh0KTtcbiAgICAgICAgbGV0IG1vbnRoID0gcGFyc2VJbnQobWF0Y2hbdGhpcy5ncm91cE51bWJlck1vbnRoXSk7XG4gICAgICAgIGxldCBkYXkgPSBwYXJzZUludChtYXRjaFt0aGlzLmdyb3VwTnVtYmVyRGF5XSk7XG4gICAgICAgIGlmIChtb250aCA8IDEgfHwgbW9udGggPiAxMikge1xuICAgICAgICAgICAgaWYgKG1vbnRoID4gMTIpIHtcbiAgICAgICAgICAgICAgICBpZiAoZGF5ID49IDEgJiYgZGF5IDw9IDEyICYmIG1vbnRoIDw9IDMxKSB7XG4gICAgICAgICAgICAgICAgICAgIFtkYXksIG1vbnRoXSA9IFttb250aCwgZGF5XTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZGF5IDwgMSB8fCBkYXkgPiAzMSkge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cblxuICAgICAgICByZXN1bHQuc3RhcnQuYXNzaWduKFwiZGF5XCIsIGRheSk7XG4gICAgICAgIHJlc3VsdC5zdGFydC5hc3NpZ24oXCJtb250aFwiLCBtb250aCk7XG5cbiAgICAgICAgaWYgKG1hdGNoW1lFQVJfR1JPVVBdKSB7XG4gICAgICAgICAgICBjb25zdCByYXdZZWFyTnVtYmVyID0gcGFyc2VJbnQobWF0Y2hbWUVBUl9HUk9VUF0pO1xuICAgICAgICAgICAgY29uc3QgeWVhciA9IGZpbmRNb3N0TGlrZWx5QURZZWFyKHJhd1llYXJOdW1iZXIpO1xuICAgICAgICAgICAgcmVzdWx0LnN0YXJ0LmFzc2lnbihcInllYXJcIiwgeWVhcik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb25zdCB5ZWFyID0gZmluZFllYXJDbG9zZXN0VG9SZWYoY29udGV4dC5yZWZEYXRlLCBkYXksIG1vbnRoKTtcbiAgICAgICAgICAgIHJlc3VsdC5zdGFydC5pbXBseShcInllYXJcIiwgeWVhcik7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gcmVzdWx0LmFkZFRhZyhcInBhcnNlci9TbGFzaERhdGVGb3JtYXRQYXJzZXJcIik7XG4gICAgfVxufVxuIiwgImltcG9ydCB7IFRJTUVfVU5JVFNfUEFUVEVSTiwgcGFyc2VUaW1lVW5pdHMsIFRJTUVfVU5JVFNfTk9fQUJCUl9QQVRURVJOIH0gZnJvbSBcIi4uL2NvbnN0YW50c1wiO1xuaW1wb3J0IHsgUGFyc2luZ0NvbnRleHQgfSBmcm9tIFwiLi4vLi4vLi4vY2hyb25vXCI7XG5pbXBvcnQgeyBQYXJzaW5nQ29tcG9uZW50cyB9IGZyb20gXCIuLi8uLi8uLi9yZXN1bHRzXCI7XG5pbXBvcnQgeyBBYnN0cmFjdFBhcnNlcldpdGhXb3JkQm91bmRhcnlDaGVja2luZyB9IGZyb20gXCIuLi8uLi8uLi9jb21tb24vcGFyc2Vycy9BYnN0cmFjdFBhcnNlcldpdGhXb3JkQm91bmRhcnlcIjtcbmltcG9ydCB7IHJldmVyc2VUaW1lVW5pdHMgfSBmcm9tIFwiLi4vLi4vLi4vdXRpbHMvdGltZXVuaXRzXCI7XG5cbmNvbnN0IFBBVFRFUk4gPSBuZXcgUmVnRXhwKGAodGhpc3xsYXN0fHBhc3R8bmV4dHxhZnRlcnxcXFxcK3wtKVxcXFxzKigke1RJTUVfVU5JVFNfUEFUVEVSTn0pKD89XFxcXFd8JClgLCBcImlcIik7XG5jb25zdCBQQVRURVJOX05PX0FCQlIgPSBuZXcgUmVnRXhwKFxuICAgIGAodGhpc3xsYXN0fHBhc3R8bmV4dHxhZnRlcnxcXFxcK3wtKVxcXFxzKigke1RJTUVfVU5JVFNfTk9fQUJCUl9QQVRURVJOfSkoPz1cXFxcV3wkKWAsXG4gICAgXCJpXCJcbik7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEVOVGltZVVuaXRDYXN1YWxSZWxhdGl2ZUZvcm1hdFBhcnNlciBleHRlbmRzIEFic3RyYWN0UGFyc2VyV2l0aFdvcmRCb3VuZGFyeUNoZWNraW5nIHtcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGFsbG93QWJicmV2aWF0aW9uczogYm9vbGVhbiA9IHRydWUpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICB9XG5cbiAgICBpbm5lclBhdHRlcm4oKTogUmVnRXhwIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuYWxsb3dBYmJyZXZpYXRpb25zID8gUEFUVEVSTiA6IFBBVFRFUk5fTk9fQUJCUjtcbiAgICB9XG5cbiAgICBpbm5lckV4dHJhY3QoY29udGV4dDogUGFyc2luZ0NvbnRleHQsIG1hdGNoOiBSZWdFeHBNYXRjaEFycmF5KSB7XG4gICAgICAgIGNvbnN0IHByZWZpeCA9IG1hdGNoWzFdLnRvTG93ZXJDYXNlKCk7XG4gICAgICAgIGxldCB0aW1lVW5pdHMgPSBwYXJzZVRpbWVVbml0cyhtYXRjaFsyXSk7XG4gICAgICAgIGlmICghdGltZVVuaXRzKSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuICAgICAgICBzd2l0Y2ggKHByZWZpeCkge1xuICAgICAgICAgICAgY2FzZSBcImxhc3RcIjpcbiAgICAgICAgICAgIGNhc2UgXCJwYXN0XCI6XG4gICAgICAgICAgICBjYXNlIFwiLVwiOlxuICAgICAgICAgICAgICAgIHRpbWVVbml0cyA9IHJldmVyc2VUaW1lVW5pdHModGltZVVuaXRzKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gUGFyc2luZ0NvbXBvbmVudHMuY3JlYXRlUmVsYXRpdmVGcm9tUmVmZXJlbmNlKGNvbnRleHQucmVmZXJlbmNlLCB0aW1lVW5pdHMpO1xuICAgIH1cbn1cbiIsICJpbXBvcnQgeyBNZXJnaW5nUmVmaW5lciB9IGZyb20gXCIuLi8uLi8uLi9jb21tb24vYWJzdHJhY3RSZWZpbmVyc1wiO1xuaW1wb3J0IHsgUGFyc2luZ0NvbXBvbmVudHMsIFBhcnNpbmdSZXN1bHQsIFJlZmVyZW5jZVdpdGhUaW1lem9uZSB9IGZyb20gXCIuLi8uLi8uLi9yZXN1bHRzXCI7XG5pbXBvcnQgeyBwYXJzZVRpbWVVbml0cyB9IGZyb20gXCIuLi9jb25zdGFudHNcIjtcbmltcG9ydCB7IHJldmVyc2VUaW1lVW5pdHMgfSBmcm9tIFwiLi4vLi4vLi4vdXRpbHMvdGltZXVuaXRzXCI7XG5cbmZ1bmN0aW9uIElzUG9zaXRpdmVGb2xsb3dpbmdSZWZlcmVuY2UocmVzdWx0OiBQYXJzaW5nUmVzdWx0KTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHJlc3VsdC50ZXh0Lm1hdGNoKC9eWystXS9pKSAhPSBudWxsO1xufVxuXG5mdW5jdGlvbiBJc05lZ2F0aXZlRm9sbG93aW5nUmVmZXJlbmNlKHJlc3VsdDogUGFyc2luZ1Jlc3VsdCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiByZXN1bHQudGV4dC5tYXRjaCgvXi0vaSkgIT0gbnVsbDtcbn1cblxuLyoqXG4gKiBNZXJnZXMgYSByZWxhdGl2ZSBkYXRhL3RpbWUgdGhhdCBjb21lcyBhZnRlciBhbiBhYnNvbHV0ZSBkYXRlLlxuICogLSBbMjAyMC0wMi0xM10gWysyIHdlZWtzXVxuICogLSBbbmV4dCB0dWVzZGF5XSBbKzEwIGRheXNdXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEVOTWVyZ2VSZWxhdGl2ZUFmdGVyRGF0ZVJlZmluZXIgZXh0ZW5kcyBNZXJnaW5nUmVmaW5lciB7XG4gICAgc2hvdWxkTWVyZ2VSZXN1bHRzKHRleHRCZXR3ZWVuOiBzdHJpbmcsIGN1cnJlbnRSZXN1bHQ6IFBhcnNpbmdSZXN1bHQsIG5leHRSZXN1bHQ6IFBhcnNpbmdSZXN1bHQpOiBib29sZWFuIHtcbiAgICAgICAgaWYgKCF0ZXh0QmV0d2Vlbi5tYXRjaCgvXlxccyokL2kpKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gSXNQb3NpdGl2ZUZvbGxvd2luZ1JlZmVyZW5jZShuZXh0UmVzdWx0KSB8fCBJc05lZ2F0aXZlRm9sbG93aW5nUmVmZXJlbmNlKG5leHRSZXN1bHQpO1xuICAgIH1cblxuICAgIG1lcmdlUmVzdWx0cyh0ZXh0QmV0d2Vlbjogc3RyaW5nLCBjdXJyZW50UmVzdWx0OiBQYXJzaW5nUmVzdWx0LCBuZXh0UmVzdWx0OiBQYXJzaW5nUmVzdWx0LCBjb250ZXh0KTogUGFyc2luZ1Jlc3VsdCB7XG4gICAgICAgIGxldCB0aW1lVW5pdHMgPSBwYXJzZVRpbWVVbml0cyhuZXh0UmVzdWx0LnRleHQpO1xuICAgICAgICBpZiAoSXNOZWdhdGl2ZUZvbGxvd2luZ1JlZmVyZW5jZShuZXh0UmVzdWx0KSkge1xuICAgICAgICAgICAgdGltZVVuaXRzID0gcmV2ZXJzZVRpbWVVbml0cyh0aW1lVW5pdHMpO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgY29tcG9uZW50cyA9IFBhcnNpbmdDb21wb25lbnRzLmNyZWF0ZVJlbGF0aXZlRnJvbVJlZmVyZW5jZShcbiAgICAgICAgICAgIG5ldyBSZWZlcmVuY2VXaXRoVGltZXpvbmUoY3VycmVudFJlc3VsdC5zdGFydC5kYXRlKCkpLFxuICAgICAgICAgICAgdGltZVVuaXRzXG4gICAgICAgICk7XG5cbiAgICAgICAgcmV0dXJuIG5ldyBQYXJzaW5nUmVzdWx0KFxuICAgICAgICAgICAgY3VycmVudFJlc3VsdC5yZWZlcmVuY2UsXG4gICAgICAgICAgICBjdXJyZW50UmVzdWx0LmluZGV4LFxuICAgICAgICAgICAgYCR7Y3VycmVudFJlc3VsdC50ZXh0fSR7dGV4dEJldHdlZW59JHtuZXh0UmVzdWx0LnRleHR9YCxcbiAgICAgICAgICAgIGNvbXBvbmVudHNcbiAgICAgICAgKTtcbiAgICB9XG59XG4iLCAiaW1wb3J0IHsgTWVyZ2luZ1JlZmluZXIgfSBmcm9tIFwiLi4vLi4vLi4vY29tbW9uL2Fic3RyYWN0UmVmaW5lcnNcIjtcbmltcG9ydCB7IFBhcnNpbmdDb21wb25lbnRzLCBQYXJzaW5nUmVzdWx0LCBSZWZlcmVuY2VXaXRoVGltZXpvbmUgfSBmcm9tIFwiLi4vLi4vLi4vcmVzdWx0c1wiO1xuaW1wb3J0IHsgcGFyc2VUaW1lVW5pdHMgfSBmcm9tIFwiLi4vY29uc3RhbnRzXCI7XG5pbXBvcnQgeyByZXZlcnNlVGltZVVuaXRzIH0gZnJvbSBcIi4uLy4uLy4uL3V0aWxzL3RpbWV1bml0c1wiO1xuXG5mdW5jdGlvbiBoYXNJbXBsaWVkRWFybGllclJlZmVyZW5jZURhdGUocmVzdWx0OiBQYXJzaW5nUmVzdWx0KTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHJlc3VsdC50ZXh0Lm1hdGNoKC9cXHMrKGJlZm9yZXxmcm9tKSQvaSkgIT0gbnVsbDtcbn1cblxuZnVuY3Rpb24gaGFzSW1wbGllZExhdGVyUmVmZXJlbmNlRGF0ZShyZXN1bHQ6IFBhcnNpbmdSZXN1bHQpOiBib29sZWFuIHtcbiAgICByZXR1cm4gcmVzdWx0LnRleHQubWF0Y2goL1xccysoYWZ0ZXJ8c2luY2UpJC9pKSAhPSBudWxsO1xufVxuXG4vKipcbiAqIE1lcmdlcyBhIHJlbGF0aXZlIGRhdGEvdGltZSB0aGF0IGZvbGxvdyBieSBhbiBhYnNvbHV0ZSBkYXRlLlxuICogLSBbMiB3ZWVrcyBiZWZvcmVdIFsyMDIwLTAyLTEzXVxuICogLSBbMiBkYXlzIGFmdGVyXSBbbmV4dCBGcmlkYXldXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEVOTWVyZ2VSZWxhdGl2ZUZvbGxvd0J5RGF0ZVJlZmluZXIgZXh0ZW5kcyBNZXJnaW5nUmVmaW5lciB7XG4gICAgcGF0dGVybkJldHdlZW4oKTogUmVnRXhwIHtcbiAgICAgICAgcmV0dXJuIC9eXFxzKiQvaTtcbiAgICB9XG5cbiAgICBzaG91bGRNZXJnZVJlc3VsdHModGV4dEJldHdlZW46IHN0cmluZywgY3VycmVudFJlc3VsdDogUGFyc2luZ1Jlc3VsdCwgbmV4dFJlc3VsdDogUGFyc2luZ1Jlc3VsdCk6IGJvb2xlYW4ge1xuICAgICAgICAvLyBEYXRlcyBuZWVkIHRvIGJlIG5leHQgdG8gZWFjaCBvdGhlciB0byBnZXQgbWVyZ2VkXG4gICAgICAgIGlmICghdGV4dEJldHdlZW4ubWF0Y2godGhpcy5wYXR0ZXJuQmV0d2VlbigpKSkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gQ2hlY2sgaWYgYW55IHJlbGF0aXZlIHRva2VucyB3ZXJlIHN3YWxsb3dlZCBieSB0aGUgZmlyc3QgZGF0ZS5cbiAgICAgICAgLy8gRS5nLiBbPHJlbGF0aXZlX2RhdGUxPiBmcm9tXSBbPGRhdGUyPl1cbiAgICAgICAgaWYgKCFoYXNJbXBsaWVkRWFybGllclJlZmVyZW5jZURhdGUoY3VycmVudFJlc3VsdCkgJiYgIWhhc0ltcGxpZWRMYXRlclJlZmVyZW5jZURhdGUoY3VycmVudFJlc3VsdCkpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIG1ha2Ugc3VyZSB0aGF0IDxkYXRlMj4gaW1wbGllcyBhbiBhYnNvbHV0ZSBkYXRlXG4gICAgICAgIHJldHVybiAhIW5leHRSZXN1bHQuc3RhcnQuZ2V0KFwiZGF5XCIpICYmICEhbmV4dFJlc3VsdC5zdGFydC5nZXQoXCJtb250aFwiKSAmJiAhIW5leHRSZXN1bHQuc3RhcnQuZ2V0KFwieWVhclwiKTtcbiAgICB9XG5cbiAgICBtZXJnZVJlc3VsdHModGV4dEJldHdlZW46IHN0cmluZywgY3VycmVudFJlc3VsdDogUGFyc2luZ1Jlc3VsdCwgbmV4dFJlc3VsdDogUGFyc2luZ1Jlc3VsdCk6IFBhcnNpbmdSZXN1bHQge1xuICAgICAgICBsZXQgdGltZVVuaXRzID0gcGFyc2VUaW1lVW5pdHMoY3VycmVudFJlc3VsdC50ZXh0KTtcbiAgICAgICAgaWYgKGhhc0ltcGxpZWRFYXJsaWVyUmVmZXJlbmNlRGF0ZShjdXJyZW50UmVzdWx0KSkge1xuICAgICAgICAgICAgdGltZVVuaXRzID0gcmV2ZXJzZVRpbWVVbml0cyh0aW1lVW5pdHMpO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgY29tcG9uZW50cyA9IFBhcnNpbmdDb21wb25lbnRzLmNyZWF0ZVJlbGF0aXZlRnJvbVJlZmVyZW5jZShcbiAgICAgICAgICAgIG5ldyBSZWZlcmVuY2VXaXRoVGltZXpvbmUobmV4dFJlc3VsdC5zdGFydC5kYXRlKCkpLFxuICAgICAgICAgICAgdGltZVVuaXRzXG4gICAgICAgICk7XG5cbiAgICAgICAgcmV0dXJuIG5ldyBQYXJzaW5nUmVzdWx0KFxuICAgICAgICAgICAgbmV4dFJlc3VsdC5yZWZlcmVuY2UsXG4gICAgICAgICAgICBjdXJyZW50UmVzdWx0LmluZGV4LFxuICAgICAgICAgICAgYCR7Y3VycmVudFJlc3VsdC50ZXh0fSR7dGV4dEJldHdlZW59JHtuZXh0UmVzdWx0LnRleHR9YCxcbiAgICAgICAgICAgIGNvbXBvbmVudHNcbiAgICAgICAgKTtcbiAgICB9XG59XG4iLCAiaW1wb3J0IHsgUGFyc2luZ0NvbnRleHQsIFJlZmluZXIgfSBmcm9tIFwiLi4vLi4vLi4vY2hyb25vXCI7XG5pbXBvcnQgeyBQYXJzaW5nUmVzdWx0IH0gZnJvbSBcIi4uLy4uLy4uL3Jlc3VsdHNcIjtcbmltcG9ydCB7IFlFQVJfUEFUVEVSTiwgcGFyc2VZZWFyIH0gZnJvbSBcIi4uL2NvbnN0YW50c1wiO1xuXG5jb25zdCBZRUFSX1NVRkZJWF9QQVRURVJOID0gbmV3IFJlZ0V4cChgXlxcXFxzKigke1lFQVJfUEFUVEVSTn0pYCwgXCJpXCIpO1xuY29uc3QgWUVBUl9HUk9VUCA9IDE7XG5leHBvcnQgZGVmYXVsdCBjbGFzcyBFTkV4dHJhY3RZZWFyU3VmZml4UmVmaW5lciBpbXBsZW1lbnRzIFJlZmluZXIge1xuICAgIHJlZmluZShjb250ZXh0OiBQYXJzaW5nQ29udGV4dCwgcmVzdWx0czogUGFyc2luZ1Jlc3VsdFtdKTogUGFyc2luZ1Jlc3VsdFtdIHtcbiAgICAgICAgcmVzdWx0cy5mb3JFYWNoKGZ1bmN0aW9uIChyZXN1bHQpIHtcbiAgICAgICAgICAgIGlmICghcmVzdWx0LnN0YXJ0LmlzRGF0ZVdpdGhVbmtub3duWWVhcigpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjb25zdCBzdWZmaXggPSBjb250ZXh0LnRleHQuc3Vic3RyaW5nKHJlc3VsdC5pbmRleCArIHJlc3VsdC50ZXh0Lmxlbmd0aCk7XG4gICAgICAgICAgICBjb25zdCBtYXRjaCA9IFlFQVJfU1VGRklYX1BBVFRFUk4uZXhlYyhzdWZmaXgpO1xuICAgICAgICAgICAgaWYgKCFtYXRjaCkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY29udGV4dC5kZWJ1ZygoKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coYEV4dHJhY3RpbmcgeWVhcjogJyR7bWF0Y2hbMF19JyBpbnRvIDogJHtyZXN1bHR9YCk7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgY29uc3QgeWVhciA9IHBhcnNlWWVhcihtYXRjaFtZRUFSX0dST1VQXSk7XG4gICAgICAgICAgICBpZiAocmVzdWx0LmVuZCAhPSBudWxsKSB7XG4gICAgICAgICAgICAgICAgcmVzdWx0LmVuZC5hc3NpZ24oXCJ5ZWFyXCIsIHllYXIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmVzdWx0LnN0YXJ0LmFzc2lnbihcInllYXJcIiwgeWVhcik7XG4gICAgICAgICAgICByZXN1bHQudGV4dCArPSBtYXRjaFswXTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdHM7XG4gICAgfVxufVxuIiwgImltcG9ydCB7IEZpbHRlciB9IGZyb20gXCIuLi8uLi8uLi9jb21tb24vYWJzdHJhY3RSZWZpbmVyc1wiO1xuaW1wb3J0IHsgUGFyc2luZ1Jlc3VsdCB9IGZyb20gXCIuLi8uLi8uLi9yZXN1bHRzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEVOVW5saWtlbHlGb3JtYXRGaWx0ZXIgZXh0ZW5kcyBGaWx0ZXIge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpO1xuICAgIH1cblxuICAgIGlzVmFsaWQoY29udGV4dCwgcmVzdWx0OiBQYXJzaW5nUmVzdWx0KTogYm9vbGVhbiB7XG4gICAgICAgIGNvbnN0IHRleHQgPSByZXN1bHQudGV4dC50cmltKCk7XG5cbiAgICAgICAgLy8gSWYgdGhlIHJlc3VsdCBpcyBjb25zaXN0cyBvZiB0aGUgd2hvbGUgdGV4dCAoZS5nLiBcIjIwMjRcIiwgXCJNYXlcIiwgZXRjKSxcbiAgICAgICAgLy8gdGhlbiBpdCBpcyB1bmxpa2VseSB0byBiZSBhIGRhdGUuXG4gICAgICAgIGlmICh0ZXh0ID09PSBjb250ZXh0LnRleHQudHJpbSgpKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIEluIEVuZ2xpc2gsIHRoZSB3b3JkIFwibWF5XCIgaXMgYSBtb250aCBuYW1lLCBidXQgaXQgaXMgYWxzbyBhIG1vZGFsIHZlcmIuXG4gICAgICAgIC8vIENoZWNrIGlmIHRoZSB0ZXh0IGJlZm9yZSBcIm1heVwiIGZvbGxvd3Mgc29tZSBhbGxvd2VkIHBhdHRlcm5zLlxuICAgICAgICBpZiAodGV4dC50b0xvd2VyQ2FzZSgpID09PSBcIm1heVwiKSB7XG4gICAgICAgICAgICBjb25zdCB0ZXh0QmVmb3JlID0gY29udGV4dC50ZXh0LnN1YnN0cmluZygwLCByZXN1bHQuaW5kZXgpLnRyaW0oKTtcbiAgICAgICAgICAgIGlmICghdGV4dEJlZm9yZS5tYXRjaCgvXFxiKGluKSQvaSkpIHtcbiAgICAgICAgICAgICAgICBjb250ZXh0LmRlYnVnKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coYFJlbW92aW5nIHVubGlrZWx5IHJlc3VsdDogJHtyZXN1bHR9YCk7XG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvLyBJbiBFbmdsaXNoLCBcInRoZSBzZWNvbmRcIiBjb3VsZCByZWZlciB0byB0aGUgb3JkaW5hbCBudW1iZXIgb3IgdGltZXVuaXQuXG4gICAgICAgIGlmICh0ZXh0LnRvTG93ZXJDYXNlKCkuZW5kc1dpdGgoXCJ0aGUgc2Vjb25kXCIpKSB7XG4gICAgICAgICAgICBjb25zdCB0ZXh0QWZ0ZXIgPSBjb250ZXh0LnRleHQuc3Vic3RyaW5nKHJlc3VsdC5pbmRleCArIHJlc3VsdC50ZXh0Lmxlbmd0aCkudHJpbSgpO1xuICAgICAgICAgICAgaWYgKHRleHRBZnRlci5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgY29udGV4dC5kZWJ1ZygoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGBSZW1vdmluZyB1bmxpa2VseSByZXN1bHQ6ICR7cmVzdWx0fWApO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxufVxuIiwgImltcG9ydCB7IENvbmZpZ3VyYXRpb24gfSBmcm9tIFwiLi4vLi4vY2hyb25vXCI7XG5cbmltcG9ydCBFTlRpbWVVbml0V2l0aGluRm9ybWF0UGFyc2VyIGZyb20gXCIuL3BhcnNlcnMvRU5UaW1lVW5pdFdpdGhpbkZvcm1hdFBhcnNlclwiO1xuaW1wb3J0IEVOTW9udGhOYW1lTGl0dGxlRW5kaWFuUGFyc2VyIGZyb20gXCIuL3BhcnNlcnMvRU5Nb250aE5hbWVMaXR0bGVFbmRpYW5QYXJzZXJcIjtcbmltcG9ydCBFTk1vbnRoTmFtZU1pZGRsZUVuZGlhblBhcnNlciBmcm9tIFwiLi9wYXJzZXJzL0VOTW9udGhOYW1lTWlkZGxlRW5kaWFuUGFyc2VyXCI7XG5pbXBvcnQgRU5Nb250aE5hbWVQYXJzZXIgZnJvbSBcIi4vcGFyc2Vycy9FTk1vbnRoTmFtZVBhcnNlclwiO1xuaW1wb3J0IEVOWWVhck1vbnRoRGF5UGFyc2VyIGZyb20gXCIuL3BhcnNlcnMvRU5ZZWFyTW9udGhEYXlQYXJzZXJcIjtcbmltcG9ydCBFTlNsYXNoTW9udGhGb3JtYXRQYXJzZXIgZnJvbSBcIi4vcGFyc2Vycy9FTlNsYXNoTW9udGhGb3JtYXRQYXJzZXJcIjtcbmltcG9ydCBFTlRpbWVFeHByZXNzaW9uUGFyc2VyIGZyb20gXCIuL3BhcnNlcnMvRU5UaW1lRXhwcmVzc2lvblBhcnNlclwiO1xuaW1wb3J0IEVOVGltZVVuaXRBZ29Gb3JtYXRQYXJzZXIgZnJvbSBcIi4vcGFyc2Vycy9FTlRpbWVVbml0QWdvRm9ybWF0UGFyc2VyXCI7XG5pbXBvcnQgRU5UaW1lVW5pdExhdGVyRm9ybWF0UGFyc2VyIGZyb20gXCIuL3BhcnNlcnMvRU5UaW1lVW5pdExhdGVyRm9ybWF0UGFyc2VyXCI7XG5pbXBvcnQgRU5NZXJnZURhdGVSYW5nZVJlZmluZXIgZnJvbSBcIi4vcmVmaW5lcnMvRU5NZXJnZURhdGVSYW5nZVJlZmluZXJcIjtcbmltcG9ydCBFTk1lcmdlRGF0ZVRpbWVSZWZpbmVyIGZyb20gXCIuL3JlZmluZXJzL0VOTWVyZ2VEYXRlVGltZVJlZmluZXJcIjtcblxuaW1wb3J0IHsgaW5jbHVkZUNvbW1vbkNvbmZpZ3VyYXRpb24gfSBmcm9tIFwiLi4vLi4vY29uZmlndXJhdGlvbnNcIjtcbmltcG9ydCBFTkNhc3VhbERhdGVQYXJzZXIgZnJvbSBcIi4vcGFyc2Vycy9FTkNhc3VhbERhdGVQYXJzZXJcIjtcbmltcG9ydCBFTkNhc3VhbFRpbWVQYXJzZXIgZnJvbSBcIi4vcGFyc2Vycy9FTkNhc3VhbFRpbWVQYXJzZXJcIjtcbmltcG9ydCBFTldlZWtkYXlQYXJzZXIgZnJvbSBcIi4vcGFyc2Vycy9FTldlZWtkYXlQYXJzZXJcIjtcbmltcG9ydCBFTlJlbGF0aXZlRGF0ZUZvcm1hdFBhcnNlciBmcm9tIFwiLi9wYXJzZXJzL0VOUmVsYXRpdmVEYXRlRm9ybWF0UGFyc2VyXCI7XG5cbmltcG9ydCBTbGFzaERhdGVGb3JtYXRQYXJzZXIgZnJvbSBcIi4uLy4uL2NvbW1vbi9wYXJzZXJzL1NsYXNoRGF0ZUZvcm1hdFBhcnNlclwiO1xuaW1wb3J0IEVOVGltZVVuaXRDYXN1YWxSZWxhdGl2ZUZvcm1hdFBhcnNlciBmcm9tIFwiLi9wYXJzZXJzL0VOVGltZVVuaXRDYXN1YWxSZWxhdGl2ZUZvcm1hdFBhcnNlclwiO1xuaW1wb3J0IEVOTWVyZ2VSZWxhdGl2ZUFmdGVyRGF0ZVJlZmluZXIgZnJvbSBcIi4vcmVmaW5lcnMvRU5NZXJnZVJlbGF0aXZlQWZ0ZXJEYXRlUmVmaW5lclwiO1xuaW1wb3J0IEVOTWVyZ2VSZWxhdGl2ZUZvbGxvd0J5RGF0ZVJlZmluZXIgZnJvbSBcIi4vcmVmaW5lcnMvRU5NZXJnZVJlbGF0aXZlRm9sbG93QnlEYXRlUmVmaW5lclwiO1xuaW1wb3J0IE92ZXJsYXBSZW1vdmFsUmVmaW5lciBmcm9tIFwiLi4vLi4vY29tbW9uL3JlZmluZXJzL092ZXJsYXBSZW1vdmFsUmVmaW5lclwiO1xuaW1wb3J0IEVORXh0cmFjdFllYXJTdWZmaXhSZWZpbmVyIGZyb20gXCIuL3JlZmluZXJzL0VORXh0cmFjdFllYXJTdWZmaXhSZWZpbmVyXCI7XG5pbXBvcnQgRU5Vbmxpa2VseUZvcm1hdEZpbHRlciBmcm9tIFwiLi9yZWZpbmVycy9FTlVubGlrZWx5Rm9ybWF0RmlsdGVyXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEVORGVmYXVsdENvbmZpZ3VyYXRpb24ge1xuICAgIC8qKlxuICAgICAqIENyZWF0ZSBhIGRlZmF1bHQgKmNhc3VhbCoge0BMaW5rIENvbmZpZ3VyYXRpb259IGZvciBFbmdsaXNoIGNocm9uby5cbiAgICAgKiBJdCBjYWxscyB7QExpbmsgY3JlYXRlQ29uZmlndXJhdGlvbn0gYW5kIGluY2x1ZGVzIGFkZGl0aW9uYWwgcGFyc2Vycy5cbiAgICAgKi9cbiAgICBjcmVhdGVDYXN1YWxDb25maWd1cmF0aW9uKGxpdHRsZUVuZGlhbiA9IGZhbHNlKTogQ29uZmlndXJhdGlvbiB7XG4gICAgICAgIGNvbnN0IG9wdGlvbiA9IHRoaXMuY3JlYXRlQ29uZmlndXJhdGlvbihmYWxzZSwgbGl0dGxlRW5kaWFuKTtcbiAgICAgICAgb3B0aW9uLnBhcnNlcnMucHVzaChuZXcgRU5DYXN1YWxEYXRlUGFyc2VyKCkpO1xuICAgICAgICBvcHRpb24ucGFyc2Vycy5wdXNoKG5ldyBFTkNhc3VhbFRpbWVQYXJzZXIoKSk7XG4gICAgICAgIG9wdGlvbi5wYXJzZXJzLnB1c2gobmV3IEVOTW9udGhOYW1lUGFyc2VyKCkpO1xuICAgICAgICBvcHRpb24ucGFyc2Vycy5wdXNoKG5ldyBFTlJlbGF0aXZlRGF0ZUZvcm1hdFBhcnNlcigpKTtcbiAgICAgICAgb3B0aW9uLnBhcnNlcnMucHVzaChuZXcgRU5UaW1lVW5pdENhc3VhbFJlbGF0aXZlRm9ybWF0UGFyc2VyKCkpO1xuICAgICAgICBvcHRpb24ucmVmaW5lcnMucHVzaChuZXcgRU5Vbmxpa2VseUZvcm1hdEZpbHRlcigpKTtcbiAgICAgICAgcmV0dXJuIG9wdGlvbjtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDcmVhdGUgYSBkZWZhdWx0IHtATGluayBDb25maWd1cmF0aW9ufSBmb3IgRW5nbGlzaCBjaHJvbm9cbiAgICAgKlxuICAgICAqIEBwYXJhbSBzdHJpY3RNb2RlIElmIHRoZSB0aW1ldW5pdCBtZW50aW9uaW5nIHNob3VsZCBiZSBzdHJpY3QsIG5vdCBjYXN1YWxcbiAgICAgKiBAcGFyYW0gbGl0dGxlRW5kaWFuIElmIGZvcm1hdCBzaG91bGQgYmUgZGF0ZS1maXJzdC9saXR0bGVFbmRpYW4gKGUuZy4gZW5fVUspLCBub3QgbW9udGgtZmlyc3QvbWlkZGxlRW5kaWFuIChlLmcuIGVuX1VTKVxuICAgICAqL1xuICAgIGNyZWF0ZUNvbmZpZ3VyYXRpb24oc3RyaWN0TW9kZSA9IHRydWUsIGxpdHRsZUVuZGlhbiA9IGZhbHNlKTogQ29uZmlndXJhdGlvbiB7XG4gICAgICAgIGNvbnN0IG9wdGlvbnMgPSBpbmNsdWRlQ29tbW9uQ29uZmlndXJhdGlvbihcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBwYXJzZXJzOiBbXG4gICAgICAgICAgICAgICAgICAgIG5ldyBTbGFzaERhdGVGb3JtYXRQYXJzZXIobGl0dGxlRW5kaWFuKSxcbiAgICAgICAgICAgICAgICAgICAgbmV3IEVOVGltZVVuaXRXaXRoaW5Gb3JtYXRQYXJzZXIoc3RyaWN0TW9kZSksXG4gICAgICAgICAgICAgICAgICAgIG5ldyBFTk1vbnRoTmFtZUxpdHRsZUVuZGlhblBhcnNlcigpLFxuICAgICAgICAgICAgICAgICAgICBuZXcgRU5Nb250aE5hbWVNaWRkbGVFbmRpYW5QYXJzZXIoLypzaG91bGRTa2lwWWVhckxpa2VEYXRlPSovIGxpdHRsZUVuZGlhbiksXG4gICAgICAgICAgICAgICAgICAgIG5ldyBFTldlZWtkYXlQYXJzZXIoKSxcbiAgICAgICAgICAgICAgICAgICAgbmV3IEVOU2xhc2hNb250aEZvcm1hdFBhcnNlcigpLFxuICAgICAgICAgICAgICAgICAgICBuZXcgRU5UaW1lRXhwcmVzc2lvblBhcnNlcihzdHJpY3RNb2RlKSxcbiAgICAgICAgICAgICAgICAgICAgbmV3IEVOVGltZVVuaXRBZ29Gb3JtYXRQYXJzZXIoc3RyaWN0TW9kZSksXG4gICAgICAgICAgICAgICAgICAgIG5ldyBFTlRpbWVVbml0TGF0ZXJGb3JtYXRQYXJzZXIoc3RyaWN0TW9kZSksXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICByZWZpbmVyczogW25ldyBFTk1lcmdlRGF0ZVRpbWVSZWZpbmVyKCldLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHN0cmljdE1vZGVcbiAgICAgICAgKTtcbiAgICAgICAgb3B0aW9ucy5wYXJzZXJzLnVuc2hpZnQobmV3IEVOWWVhck1vbnRoRGF5UGFyc2VyKC8qc3RyaWN0TW9udGhEYXRlT3JkZXI9Ki8gc3RyaWN0TW9kZSkpO1xuXG4gICAgICAgIC8vIFRoZXNlIHJlbGF0aXZlLWRhdGVzIGNvbnNpZGVyYXRpb24gc2hvdWxkIGJlIGRvbmUgYmVmb3JlIG90aGVyIGNvbW1vbiByZWZpbmVycy5cbiAgICAgICAgb3B0aW9ucy5yZWZpbmVycy51bnNoaWZ0KG5ldyBFTk1lcmdlUmVsYXRpdmVGb2xsb3dCeURhdGVSZWZpbmVyKCkpO1xuICAgICAgICBvcHRpb25zLnJlZmluZXJzLnVuc2hpZnQobmV3IEVOTWVyZ2VSZWxhdGl2ZUFmdGVyRGF0ZVJlZmluZXIoKSk7XG4gICAgICAgIG9wdGlvbnMucmVmaW5lcnMudW5zaGlmdChuZXcgT3ZlcmxhcFJlbW92YWxSZWZpbmVyKCkpO1xuXG4gICAgICAgIC8vIFJlLWFwcGx5IHRoZSBkYXRlIHRpbWUgcmVmaW5lciBhZ2FpbiBhZnRlciB0aGUgdGltZXpvbmUgcmVmaW5lbWVudCBhbmQgZXhjbHVzaW9uIGluIGNvbW1vbiByZWZpbmVycy5cbiAgICAgICAgb3B0aW9ucy5yZWZpbmVycy5wdXNoKG5ldyBFTk1lcmdlRGF0ZVRpbWVSZWZpbmVyKCkpO1xuXG4gICAgICAgIC8vIEV4dHJhY3QgeWVhciBhZnRlciBtZXJnaW5nIGRhdGUgYW5kIHRpbWVcbiAgICAgICAgb3B0aW9ucy5yZWZpbmVycy5wdXNoKG5ldyBFTkV4dHJhY3RZZWFyU3VmZml4UmVmaW5lcigpKTtcblxuICAgICAgICAvLyBLZWVwIHRoZSBkYXRlIHJhbmdlIHJlZmluZXIgYXQgdGhlIGVuZCAoYWZ0ZXIgYWxsIG90aGVyIHJlZmluZW1lbnRzKS5cbiAgICAgICAgb3B0aW9ucy5yZWZpbmVycy5wdXNoKG5ldyBFTk1lcmdlRGF0ZVJhbmdlUmVmaW5lcigpKTtcbiAgICAgICAgcmV0dXJuIG9wdGlvbnM7XG4gICAgfVxufVxuIiwgImltcG9ydCB7IFJlZmVyZW5jZVdpdGhUaW1lem9uZSwgUGFyc2luZ0NvbXBvbmVudHMsIFBhcnNpbmdSZXN1bHQgfSBmcm9tIFwiLi9yZXN1bHRzXCI7XG5pbXBvcnQgeyBDb21wb25lbnQsIFBhcnNlZFJlc3VsdCwgUGFyc2luZ09wdGlvbiwgUGFyc2luZ1JlZmVyZW5jZSB9IGZyb20gXCIuL3R5cGVzXCI7XG5pbXBvcnQgeyBBc3luY0RlYnVnQmxvY2ssIERlYnVnSGFuZGxlciB9IGZyb20gXCIuL2RlYnVnZ2luZ1wiO1xuaW1wb3J0IEVORGVmYXVsdENvbmZpZ3VyYXRpb24gZnJvbSBcIi4vbG9jYWxlcy9lbi9jb25maWd1cmF0aW9uXCI7XG5cbi8qKlxuICogQ2hyb25vIGNvbmZpZ3VyYXRpb24uXG4gKiBJdCBpcyBzaW1wbHkgYW4gb3JkZXJlZCBsaXN0IG9mIHBhcnNlcnMgYW5kIHJlZmluZXJzXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgQ29uZmlndXJhdGlvbiB7XG4gICAgcGFyc2VyczogUGFyc2VyW107XG4gICAgcmVmaW5lcnM6IFJlZmluZXJbXTtcbn1cblxuLyoqXG4gKiBBbiBhYnN0cmFjdGlvbiBmb3IgQ2hyb25vICpQYXJzZXIqLlxuICpcbiAqIEVhY2ggcGFyc2VyIHNob3VsZCByZWNvZ25pemUgYW5kIGhhbmRsZSBhIGNlcnRhaW4gZGF0ZSBmb3JtYXQuXG4gKiBDaHJvbm8gdXNlcyBtdWx0aXBsZSBwYXJzZXMgKGFuZCByZWZpbmVycykgdG9nZXRoZXIgZm9yIHBhcnNpbmcgdGhlIGlucHV0LlxuICpcbiAqIFRoZSBwYXJzZXIgaW1wbGVtZW50YXRpb24gbXVzdCBwcm92aWRlIHtATGluayBwYXR0ZXJuIHwgcGF0dGVybigpfSBmb3IgdGhlIGRhdGUgZm9ybWF0LlxuICpcbiAqIFRoZSB7QExpbmsgZXh0cmFjdCB8IGV4dHJhY3QoKX0gbWV0aG9kIGlzIGNhbGxlZCB3aXRoIHRoZSBwYXR0ZXJuJ3MgKm1hdGNoKi5cbiAqIFRoZSBtYXRjaGluZyBhbmQgZXh0cmFjdGluZyBpcyBjb250cm9sbGVkIGFuZCBhZGp1c3RlZCB0byBhdm9pZCBmb3Igb3ZlcmxhcHBpbmcgcmVzdWx0cy5cbiAqL1xuZXhwb3J0IGludGVyZmFjZSBQYXJzZXIge1xuICAgIHBhdHRlcm4oY29udGV4dDogUGFyc2luZ0NvbnRleHQpOiBSZWdFeHA7XG4gICAgZXh0cmFjdChcbiAgICAgICAgY29udGV4dDogUGFyc2luZ0NvbnRleHQsXG4gICAgICAgIG1hdGNoOiBSZWdFeHBNYXRjaEFycmF5XG4gICAgKTogUGFyc2luZ0NvbXBvbmVudHMgfCBQYXJzaW5nUmVzdWx0IHwgeyBbYyBpbiBDb21wb25lbnRdPzogbnVtYmVyIH0gfCBudWxsO1xufVxuXG4vKipcbiAqIEEgYWJzdHJhY3Rpb24gZm9yIENocm9ubyAqUmVmaW5lciouXG4gKlxuICogRWFjaCByZWZpbmVyIHRha2VzIHRoZSBsaXN0IG9mIHJlc3VsdHMgKGZyb20gcGFyc2VycyBvciBvdGhlciByZWZpbmVycykgYW5kIHJldHVybnMgYW5vdGhlciBsaXN0IG9mIHJlc3VsdHMuXG4gKiBDaHJvbm8gYXBwbGllcyBlYWNoIHJlZmluZXIgaW4gb3JkZXIgYW5kIHJldHVybiB0aGUgb3V0cHV0IGZyb20gdGhlIGxhc3QgcmVmaW5lci5cbiAqL1xuZXhwb3J0IGludGVyZmFjZSBSZWZpbmVyIHtcbiAgICByZWZpbmU6IChjb250ZXh0OiBQYXJzaW5nQ29udGV4dCwgcmVzdWx0czogUGFyc2luZ1Jlc3VsdFtdKSA9PiBQYXJzaW5nUmVzdWx0W107XG59XG5cbi8qKlxuICogVGhlIENocm9ubyBvYmplY3QuXG4gKi9cbmV4cG9ydCBjbGFzcyBDaHJvbm8ge1xuICAgIHBhcnNlcnM6IEFycmF5PFBhcnNlcj47XG4gICAgcmVmaW5lcnM6IEFycmF5PFJlZmluZXI+O1xuXG4gICAgZGVmYXVsdENvbmZpZyA9IG5ldyBFTkRlZmF1bHRDb25maWd1cmF0aW9uKCk7XG5cbiAgICBjb25zdHJ1Y3Rvcihjb25maWd1cmF0aW9uPzogQ29uZmlndXJhdGlvbikge1xuICAgICAgICBjb25maWd1cmF0aW9uID0gY29uZmlndXJhdGlvbiB8fCB0aGlzLmRlZmF1bHRDb25maWcuY3JlYXRlQ2FzdWFsQ29uZmlndXJhdGlvbigpO1xuICAgICAgICB0aGlzLnBhcnNlcnMgPSBbLi4uY29uZmlndXJhdGlvbi5wYXJzZXJzXTtcbiAgICAgICAgdGhpcy5yZWZpbmVycyA9IFsuLi5jb25maWd1cmF0aW9uLnJlZmluZXJzXTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDcmVhdGUgYSBzaGFsbG93IGNvcHkgb2YgdGhlIENocm9ubyBvYmplY3Qgd2l0aCB0aGUgc2FtZSBjb25maWd1cmF0aW9uIChgcGFyc2Vyc2AgYW5kIGByZWZpbmVyc2ApXG4gICAgICovXG4gICAgY2xvbmUoKTogQ2hyb25vIHtcbiAgICAgICAgcmV0dXJuIG5ldyBDaHJvbm8oe1xuICAgICAgICAgICAgcGFyc2VyczogWy4uLnRoaXMucGFyc2Vyc10sXG4gICAgICAgICAgICByZWZpbmVyczogWy4uLnRoaXMucmVmaW5lcnNdLFxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBBIHNob3J0Y3V0IGZvciBjYWxsaW5nIHtATGluayBwYXJzZSB8IHBhcnNlKCkgfSB0aGVuIHRyYW5zZm9ybSB0aGUgcmVzdWx0IGludG8gSmF2YXNjcmlwdCdzIERhdGUgb2JqZWN0XG4gICAgICogQHJldHVybiBEYXRlIG9iamVjdCBjcmVhdGVkIGZyb20gdGhlIGZpcnN0IHBhcnNlIHJlc3VsdFxuICAgICAqL1xuICAgIHBhcnNlRGF0ZSh0ZXh0OiBzdHJpbmcsIHJlZmVyZW5jZURhdGU/OiBQYXJzaW5nUmVmZXJlbmNlIHwgRGF0ZSwgb3B0aW9uPzogUGFyc2luZ09wdGlvbik6IERhdGUgfCBudWxsIHtcbiAgICAgICAgY29uc3QgcmVzdWx0cyA9IHRoaXMucGFyc2UodGV4dCwgcmVmZXJlbmNlRGF0ZSwgb3B0aW9uKTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdHMubGVuZ3RoID4gMCA/IHJlc3VsdHNbMF0uc3RhcnQuZGF0ZSgpIDogbnVsbDtcbiAgICB9XG5cbiAgICBwYXJzZSh0ZXh0OiBzdHJpbmcsIHJlZmVyZW5jZURhdGU/OiBQYXJzaW5nUmVmZXJlbmNlIHwgRGF0ZSwgb3B0aW9uPzogUGFyc2luZ09wdGlvbik6IFBhcnNlZFJlc3VsdFtdIHtcbiAgICAgICAgY29uc3QgY29udGV4dCA9IG5ldyBQYXJzaW5nQ29udGV4dCh0ZXh0LCByZWZlcmVuY2VEYXRlLCBvcHRpb24pO1xuXG4gICAgICAgIGxldCByZXN1bHRzID0gW107XG4gICAgICAgIHRoaXMucGFyc2Vycy5mb3JFYWNoKChwYXJzZXIpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHBhcnNlZFJlc3VsdHMgPSBDaHJvbm8uZXhlY3V0ZVBhcnNlcihjb250ZXh0LCBwYXJzZXIpO1xuICAgICAgICAgICAgcmVzdWx0cyA9IHJlc3VsdHMuY29uY2F0KHBhcnNlZFJlc3VsdHMpO1xuICAgICAgICB9KTtcblxuICAgICAgICByZXN1bHRzLnNvcnQoKGEsIGIpID0+IHtcbiAgICAgICAgICAgIHJldHVybiBhLmluZGV4IC0gYi5pbmRleDtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5yZWZpbmVycy5mb3JFYWNoKGZ1bmN0aW9uIChyZWZpbmVyKSB7XG4gICAgICAgICAgICByZXN1bHRzID0gcmVmaW5lci5yZWZpbmUoY29udGV4dCwgcmVzdWx0cyk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiByZXN1bHRzO1xuICAgIH1cblxuICAgIHByaXZhdGUgc3RhdGljIGV4ZWN1dGVQYXJzZXIoY29udGV4dDogUGFyc2luZ0NvbnRleHQsIHBhcnNlcjogUGFyc2VyKSB7XG4gICAgICAgIGNvbnN0IHJlc3VsdHMgPSBbXTtcbiAgICAgICAgY29uc3QgcGF0dGVybiA9IHBhcnNlci5wYXR0ZXJuKGNvbnRleHQpO1xuXG4gICAgICAgIGNvbnN0IG9yaWdpbmFsVGV4dCA9IGNvbnRleHQudGV4dDtcbiAgICAgICAgbGV0IHJlbWFpbmluZ1RleHQgPSBjb250ZXh0LnRleHQ7XG4gICAgICAgIGxldCBtYXRjaCA9IHBhdHRlcm4uZXhlYyhyZW1haW5pbmdUZXh0KTtcblxuICAgICAgICB3aGlsZSAobWF0Y2gpIHtcbiAgICAgICAgICAgIC8vIENhbGN1bGF0ZSBtYXRjaCBpbmRleCBvbiB0aGUgZnVsbCB0ZXh0O1xuICAgICAgICAgICAgY29uc3QgaW5kZXggPSBtYXRjaC5pbmRleCArIG9yaWdpbmFsVGV4dC5sZW5ndGggLSByZW1haW5pbmdUZXh0Lmxlbmd0aDtcbiAgICAgICAgICAgIG1hdGNoLmluZGV4ID0gaW5kZXg7XG5cbiAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IHBhcnNlci5leHRyYWN0KGNvbnRleHQsIG1hdGNoKTtcbiAgICAgICAgICAgIGlmICghcmVzdWx0KSB7XG4gICAgICAgICAgICAgICAgLy8gSWYgZmFpbHMsIG1vdmUgb24gYnkgMVxuICAgICAgICAgICAgICAgIHJlbWFpbmluZ1RleHQgPSBvcmlnaW5hbFRleHQuc3Vic3RyaW5nKG1hdGNoLmluZGV4ICsgMSk7XG4gICAgICAgICAgICAgICAgbWF0Y2ggPSBwYXR0ZXJuLmV4ZWMocmVtYWluaW5nVGV4dCk7XG4gICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGxldCBwYXJzZWRSZXN1bHQ6IFBhcnNpbmdSZXN1bHQgPSBudWxsO1xuICAgICAgICAgICAgaWYgKHJlc3VsdCBpbnN0YW5jZW9mIFBhcnNpbmdSZXN1bHQpIHtcbiAgICAgICAgICAgICAgICBwYXJzZWRSZXN1bHQgPSByZXN1bHQ7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHJlc3VsdCBpbnN0YW5jZW9mIFBhcnNpbmdDb21wb25lbnRzKSB7XG4gICAgICAgICAgICAgICAgcGFyc2VkUmVzdWx0ID0gY29udGV4dC5jcmVhdGVQYXJzaW5nUmVzdWx0KG1hdGNoLmluZGV4LCBtYXRjaFswXSk7XG4gICAgICAgICAgICAgICAgcGFyc2VkUmVzdWx0LnN0YXJ0ID0gcmVzdWx0O1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBwYXJzZWRSZXN1bHQgPSBjb250ZXh0LmNyZWF0ZVBhcnNpbmdSZXN1bHQobWF0Y2guaW5kZXgsIG1hdGNoWzBdLCByZXN1bHQpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjb25zdCBwYXJzZWRJbmRleCA9IHBhcnNlZFJlc3VsdC5pbmRleDtcbiAgICAgICAgICAgIGNvbnN0IHBhcnNlZFRleHQgPSBwYXJzZWRSZXN1bHQudGV4dDtcbiAgICAgICAgICAgIGNvbnRleHQuZGVidWcoKCkgPT5cbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhgJHtwYXJzZXIuY29uc3RydWN0b3IubmFtZX0gZXh0cmFjdGVkIChhdCBpbmRleD0ke3BhcnNlZEluZGV4fSkgJyR7cGFyc2VkVGV4dH0nYClcbiAgICAgICAgICAgICk7XG5cbiAgICAgICAgICAgIHJlc3VsdHMucHVzaChwYXJzZWRSZXN1bHQpO1xuICAgICAgICAgICAgcmVtYWluaW5nVGV4dCA9IG9yaWdpbmFsVGV4dC5zdWJzdHJpbmcocGFyc2VkSW5kZXggKyBwYXJzZWRUZXh0Lmxlbmd0aCk7XG4gICAgICAgICAgICBtYXRjaCA9IHBhdHRlcm4uZXhlYyhyZW1haW5pbmdUZXh0KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiByZXN1bHRzO1xuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIFBhcnNpbmdDb250ZXh0IGltcGxlbWVudHMgRGVidWdIYW5kbGVyIHtcbiAgICByZWFkb25seSB0ZXh0OiBzdHJpbmc7XG4gICAgcmVhZG9ubHkgb3B0aW9uOiBQYXJzaW5nT3B0aW9uO1xuICAgIHJlYWRvbmx5IHJlZmVyZW5jZTogUmVmZXJlbmNlV2l0aFRpbWV6b25lO1xuXG4gICAgLyoqXG4gICAgICogQGRlcHJlY2F0ZWQuIFVzZSBgcmVmZXJlbmNlLmluc3RhbnRgIGluc3RlYWQuXG4gICAgICovXG4gICAgcmVhZG9ubHkgcmVmRGF0ZTogRGF0ZTtcblxuICAgIGNvbnN0cnVjdG9yKHRleHQ6IHN0cmluZywgcmVmRGF0ZT86IFBhcnNpbmdSZWZlcmVuY2UgfCBEYXRlLCBvcHRpb24/OiBQYXJzaW5nT3B0aW9uKSB7XG4gICAgICAgIHRoaXMudGV4dCA9IHRleHQ7XG4gICAgICAgIHRoaXMucmVmZXJlbmNlID0gbmV3IFJlZmVyZW5jZVdpdGhUaW1lem9uZShyZWZEYXRlKTtcbiAgICAgICAgdGhpcy5vcHRpb24gPSBvcHRpb24gPz8ge307XG5cbiAgICAgICAgdGhpcy5yZWZEYXRlID0gdGhpcy5yZWZlcmVuY2UuaW5zdGFudDtcbiAgICB9XG5cbiAgICBjcmVhdGVQYXJzaW5nQ29tcG9uZW50cyhjb21wb25lbnRzPzogeyBbYyBpbiBDb21wb25lbnRdPzogbnVtYmVyIH0gfCBQYXJzaW5nQ29tcG9uZW50cyk6IFBhcnNpbmdDb21wb25lbnRzIHtcbiAgICAgICAgaWYgKGNvbXBvbmVudHMgaW5zdGFuY2VvZiBQYXJzaW5nQ29tcG9uZW50cykge1xuICAgICAgICAgICAgcmV0dXJuIGNvbXBvbmVudHM7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gbmV3IFBhcnNpbmdDb21wb25lbnRzKHRoaXMucmVmZXJlbmNlLCBjb21wb25lbnRzKTtcbiAgICB9XG5cbiAgICBjcmVhdGVQYXJzaW5nUmVzdWx0KFxuICAgICAgICBpbmRleDogbnVtYmVyLFxuICAgICAgICB0ZXh0T3JFbmRJbmRleDogbnVtYmVyIHwgc3RyaW5nLFxuICAgICAgICBzdGFydENvbXBvbmVudHM/OiB7IFtjIGluIENvbXBvbmVudF0/OiBudW1iZXIgfSB8IFBhcnNpbmdDb21wb25lbnRzLFxuICAgICAgICBlbmRDb21wb25lbnRzPzogeyBbYyBpbiBDb21wb25lbnRdPzogbnVtYmVyIH0gfCBQYXJzaW5nQ29tcG9uZW50c1xuICAgICk6IFBhcnNpbmdSZXN1bHQge1xuICAgICAgICBjb25zdCB0ZXh0ID0gdHlwZW9mIHRleHRPckVuZEluZGV4ID09PSBcInN0cmluZ1wiID8gdGV4dE9yRW5kSW5kZXggOiB0aGlzLnRleHQuc3Vic3RyaW5nKGluZGV4LCB0ZXh0T3JFbmRJbmRleCk7XG5cbiAgICAgICAgY29uc3Qgc3RhcnQgPSBzdGFydENvbXBvbmVudHMgPyB0aGlzLmNyZWF0ZVBhcnNpbmdDb21wb25lbnRzKHN0YXJ0Q29tcG9uZW50cykgOiBudWxsO1xuICAgICAgICBjb25zdCBlbmQgPSBlbmRDb21wb25lbnRzID8gdGhpcy5jcmVhdGVQYXJzaW5nQ29tcG9uZW50cyhlbmRDb21wb25lbnRzKSA6IG51bGw7XG5cbiAgICAgICAgcmV0dXJuIG5ldyBQYXJzaW5nUmVzdWx0KHRoaXMucmVmZXJlbmNlLCBpbmRleCwgdGV4dCwgc3RhcnQsIGVuZCk7XG4gICAgfVxuXG4gICAgZGVidWcoYmxvY2s6IEFzeW5jRGVidWdCbG9jayk6IHZvaWQge1xuICAgICAgICBpZiAodGhpcy5vcHRpb24uZGVidWcpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLm9wdGlvbi5kZWJ1ZyBpbnN0YW5jZW9mIEZ1bmN0aW9uKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5vcHRpb24uZGVidWcoYmxvY2spO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBjb25zdCBoYW5kbGVyOiBEZWJ1Z0hhbmRsZXIgPSA8RGVidWdIYW5kbGVyPnRoaXMub3B0aW9uLmRlYnVnO1xuICAgICAgICAgICAgICAgIGhhbmRsZXIuZGVidWcoYmxvY2spO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuIiwgIi8qKlxuICogQ2hyb25vIGNvbXBvbmVudHMgZm9yIEVuZ2xpc2ggc3VwcG9ydCAoKnBhcnNlcnMqLCAqcmVmaW5lcnMqLCBhbmQgKmNvbmZpZ3VyYXRpb24qKVxuICpcbiAqIEBtb2R1bGVcbiAqL1xuXG5pbXBvcnQgeyBDaHJvbm8sIFBhcnNlciwgUmVmaW5lciB9IGZyb20gXCIuLi8uLi9jaHJvbm9cIjtcbmltcG9ydCB7IFBhcnNpbmdSZXN1bHQsIFBhcnNpbmdDb21wb25lbnRzLCBSZWZlcmVuY2VXaXRoVGltZXpvbmUgfSBmcm9tIFwiLi4vLi4vcmVzdWx0c1wiO1xuaW1wb3J0IHsgQ29tcG9uZW50LCBQYXJzZWRSZXN1bHQsIFBhcnNpbmdPcHRpb24sIFBhcnNpbmdSZWZlcmVuY2UsIE1lcmlkaWVtLCBXZWVrZGF5IH0gZnJvbSBcIi4uLy4uL3R5cGVzXCI7XG5cbmltcG9ydCBFTkRlZmF1bHRDb25maWd1cmF0aW9uIGZyb20gXCIuL2NvbmZpZ3VyYXRpb25cIjtcblxuZXhwb3J0IHsgQ2hyb25vLCBQYXJzZXIsIFJlZmluZXIsIFBhcnNpbmdSZXN1bHQsIFBhcnNpbmdDb21wb25lbnRzLCBSZWZlcmVuY2VXaXRoVGltZXpvbmUgfTtcbmV4cG9ydCB7IENvbXBvbmVudCwgUGFyc2VkUmVzdWx0LCBQYXJzaW5nT3B0aW9uLCBQYXJzaW5nUmVmZXJlbmNlLCBNZXJpZGllbSwgV2Vla2RheSB9O1xuXG5leHBvcnQgY29uc3QgY29uZmlndXJhdGlvbiA9IG5ldyBFTkRlZmF1bHRDb25maWd1cmF0aW9uKCk7XG5cbi8qKlxuICogQ2hyb25vIG9iamVjdCBjb25maWd1cmVkIGZvciBwYXJzaW5nICpjYXN1YWwqIEVuZ2xpc2hcbiAqL1xuZXhwb3J0IGNvbnN0IGNhc3VhbCA9IG5ldyBDaHJvbm8oY29uZmlndXJhdGlvbi5jcmVhdGVDYXN1YWxDb25maWd1cmF0aW9uKGZhbHNlKSk7XG5cbi8qKlxuICogQ2hyb25vIG9iamVjdCBjb25maWd1cmVkIGZvciBwYXJzaW5nICpzdHJpY3QqIEVuZ2xpc2hcbiAqL1xuZXhwb3J0IGNvbnN0IHN0cmljdCA9IG5ldyBDaHJvbm8oY29uZmlndXJhdGlvbi5jcmVhdGVDb25maWd1cmF0aW9uKHRydWUsIGZhbHNlKSk7XG5cbi8qKlxuICogQ2hyb25vIG9iamVjdCBjb25maWd1cmVkIGZvciBwYXJzaW5nICpVSy1zdHlsZSogRW5nbGlzaFxuICovXG5leHBvcnQgY29uc3QgR0IgPSBuZXcgQ2hyb25vKGNvbmZpZ3VyYXRpb24uY3JlYXRlQ2FzdWFsQ29uZmlndXJhdGlvbih0cnVlKSk7XG5cbi8qKlxuICogQSBzaG9ydGN1dCBmb3IgZW4uY2FzdWFsLnBhcnNlKClcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHBhcnNlKHRleHQ6IHN0cmluZywgcmVmPzogUGFyc2luZ1JlZmVyZW5jZSB8IERhdGUsIG9wdGlvbj86IFBhcnNpbmdPcHRpb24pOiBQYXJzZWRSZXN1bHRbXSB7XG4gICAgcmV0dXJuIGNhc3VhbC5wYXJzZSh0ZXh0LCByZWYsIG9wdGlvbik7XG59XG5cbi8qKlxuICogQSBzaG9ydGN1dCBmb3IgZW4uY2FzdWFsLnBhcnNlRGF0ZSgpXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBwYXJzZURhdGUodGV4dDogc3RyaW5nLCByZWY/OiBQYXJzaW5nUmVmZXJlbmNlIHwgRGF0ZSwgb3B0aW9uPzogUGFyc2luZ09wdGlvbik6IERhdGUge1xuICAgIHJldHVybiBjYXN1YWwucGFyc2VEYXRlKHRleHQsIHJlZiwgb3B0aW9uKTtcbn1cbiIsICJpbXBvcnQgKiBhcyBlbiBmcm9tIFwiLi9sb2NhbGVzL2VuXCI7XG5pbXBvcnQgeyBDaHJvbm8sIFBhcnNlciwgUmVmaW5lciB9IGZyb20gXCIuL2Nocm9ub1wiO1xuaW1wb3J0IHsgUGFyc2luZ1Jlc3VsdCwgUGFyc2luZ0NvbXBvbmVudHMsIFJlZmVyZW5jZVdpdGhUaW1lem9uZSB9IGZyb20gXCIuL3Jlc3VsdHNcIjtcbmltcG9ydCB7IENvbXBvbmVudCwgUGFyc2VkQ29tcG9uZW50cywgUGFyc2VkUmVzdWx0LCBQYXJzaW5nT3B0aW9uLCBQYXJzaW5nUmVmZXJlbmNlLCBNZXJpZGllbSwgV2Vla2RheSB9IGZyb20gXCIuL3R5cGVzXCI7XG5cbmV4cG9ydCB7IGVuLCBDaHJvbm8sIFBhcnNlciwgUmVmaW5lciwgUGFyc2luZ1Jlc3VsdCwgUGFyc2luZ0NvbXBvbmVudHMsIFJlZmVyZW5jZVdpdGhUaW1lem9uZSB9O1xuZXhwb3J0IHsgQ29tcG9uZW50LCBQYXJzZWRDb21wb25lbnRzLCBQYXJzZWRSZXN1bHQsIFBhcnNpbmdPcHRpb24sIFBhcnNpbmdSZWZlcmVuY2UsIE1lcmlkaWVtLCBXZWVrZGF5IH07XG5cbi8vIEV4cG9ydCBhbGwgbG9jYWxlc1xuaW1wb3J0ICogYXMgZGUgZnJvbSBcIi4vbG9jYWxlcy9kZVwiO1xuaW1wb3J0ICogYXMgZnIgZnJvbSBcIi4vbG9jYWxlcy9mclwiO1xuaW1wb3J0ICogYXMgamEgZnJvbSBcIi4vbG9jYWxlcy9qYVwiO1xuaW1wb3J0ICogYXMgcHQgZnJvbSBcIi4vbG9jYWxlcy9wdFwiO1xuaW1wb3J0ICogYXMgbmwgZnJvbSBcIi4vbG9jYWxlcy9ubFwiO1xuaW1wb3J0ICogYXMgemggZnJvbSBcIi4vbG9jYWxlcy96aFwiO1xuaW1wb3J0ICogYXMgcnUgZnJvbSBcIi4vbG9jYWxlcy9ydVwiO1xuaW1wb3J0ICogYXMgZXMgZnJvbSBcIi4vbG9jYWxlcy9lc1wiO1xuaW1wb3J0ICogYXMgdWsgZnJvbSBcIi4vbG9jYWxlcy91a1wiO1xuXG5leHBvcnQgeyBkZSwgZnIsIGphLCBwdCwgbmwsIHpoLCBydSwgZXMsIHVrIH07XG5cbi8qKlxuICogQSBzaG9ydGN1dCBmb3Ige0BsaW5rIGVuIHwgY2hyb25vLmVuLnN0cmljdH1cbiAqL1xuZXhwb3J0IGNvbnN0IHN0cmljdCA9IGVuLnN0cmljdDtcblxuLyoqXG4gKiBBIHNob3J0Y3V0IGZvciB7QGxpbmsgZW4gfCBjaHJvbm8uZW4uY2FzdWFsfVxuICovXG5leHBvcnQgY29uc3QgY2FzdWFsID0gZW4uY2FzdWFsO1xuXG4vKipcbiAqIEEgc2hvcnRjdXQgZm9yIHtAbGluayBlbiB8IGNocm9uby5lbi5jYXN1YWwucGFyc2UoKX1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHBhcnNlKHRleHQ6IHN0cmluZywgcmVmPzogUGFyc2luZ1JlZmVyZW5jZSB8IERhdGUsIG9wdGlvbj86IFBhcnNpbmdPcHRpb24pOiBQYXJzZWRSZXN1bHRbXSB7XG4gICAgcmV0dXJuIGNhc3VhbC5wYXJzZSh0ZXh0LCByZWYsIG9wdGlvbik7XG59XG5cbi8qKlxuICogQSBzaG9ydGN1dCBmb3Ige0BsaW5rIGVuIHwgY2hyb25vLmVuLmNhc3VhbC5wYXJzZURhdGUoKX1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHBhcnNlRGF0ZSh0ZXh0OiBzdHJpbmcsIHJlZj86IFBhcnNpbmdSZWZlcmVuY2UgfCBEYXRlLCBvcHRpb24/OiBQYXJzaW5nT3B0aW9uKTogRGF0ZSB8IG51bGwge1xuICAgIHJldHVybiBjYXN1YWwucGFyc2VEYXRlKHRleHQsIHJlZiwgb3B0aW9uKTtcbn1cbiJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQUEsK0NBQUFBLFVBQUFDLFNBQUE7QUFBQSxLQUFDLFNBQVMsR0FBRSxHQUFFO0FBQUMsa0JBQVUsT0FBT0QsWUFBUyxlQUFhLE9BQU9DLFVBQU9BLFFBQU8sVUFBUSxFQUFFLElBQUUsY0FBWSxPQUFPLFVBQVEsT0FBTyxNQUFJLE9BQU8sQ0FBQyxLQUFHLElBQUUsZUFBYSxPQUFPLGFBQVcsYUFBVyxLQUFHLE1BQU0sNkJBQTJCLEVBQUU7QUFBQSxJQUFDLEVBQUVELFVBQU0sV0FBVTtBQUFDO0FBQWEsVUFBSSxJQUFFLFNBQVEsSUFBRTtBQUFVLGFBQU8sU0FBUyxHQUFFLEdBQUU7QUFBQyxZQUFJLElBQUUsRUFBRTtBQUFVLFVBQUUsVUFBUSxTQUFTRSxJQUFFO0FBQUMsaUJBQU8sS0FBSyxPQUFPLEVBQUUsRUFBRUEsRUFBQyxJQUFFLEtBQUssTUFBTSxLQUFLLE1BQU0sSUFBRSxLQUFHLENBQUMsSUFBRSxLQUFLLE1BQU0sS0FBSyxNQUFNLElBQUUsSUFBRSxLQUFHQSxLQUFFLEVBQUU7QUFBQSxRQUFDO0FBQUUsWUFBSSxJQUFFLEVBQUU7QUFBSSxVQUFFLE1BQUksU0FBU0MsSUFBRUMsSUFBRTtBQUFDLGlCQUFPRCxLQUFFLE9BQU9BLEVBQUMsR0FBRSxLQUFLLE9BQU8sRUFBRSxFQUFFQyxFQUFDLE1BQUksSUFBRSxLQUFLLElBQUksSUFBRUQsSUFBRSxDQUFDLElBQUUsRUFBRSxLQUFLLElBQUksRUFBRUEsSUFBRUMsRUFBQztBQUFBLFFBQUM7QUFBRSxZQUFJLElBQUUsRUFBRTtBQUFRLFVBQUUsVUFBUSxTQUFTRCxJQUFFQyxJQUFFO0FBQUMsY0FBSUMsS0FBRSxLQUFLLE9BQU8sR0FBRUMsS0FBRSxDQUFDLENBQUNELEdBQUUsRUFBRUQsRUFBQyxLQUFHQTtBQUFFLGNBQUdDLEdBQUUsRUFBRUYsRUFBQyxNQUFJLEdBQUU7QUFBQyxnQkFBSSxJQUFFLEtBQUssUUFBUSxJQUFFO0FBQUUsbUJBQU9HLEtBQUUsS0FBSyxNQUFNLElBQUUsQ0FBQyxFQUFFLFFBQVEsQ0FBQyxFQUFFLFFBQVEsS0FBSyxJQUFFLEtBQUssTUFBTSxJQUFFLElBQUUsQ0FBQyxFQUFFLE1BQU0sQ0FBQyxFQUFFLE1BQU0sS0FBSztBQUFBLFVBQUM7QUFBQyxpQkFBTyxFQUFFLEtBQUssSUFBSSxFQUFFSCxJQUFFQyxFQUFDO0FBQUEsUUFBQztBQUFBLE1BQUM7QUFBQSxJQUFDLENBQUU7QUFBQTtBQUFBOzs7QUNBbHdCO0FBQUEsb0NBQUFHLFVBQUFDLFNBQUE7QUFBQSxLQUFDLFNBQVMsR0FBRSxHQUFFO0FBQUMsa0JBQVUsT0FBT0QsWUFBUyxlQUFhLE9BQU9DLFVBQU9BLFFBQU8sVUFBUSxFQUFFLElBQUUsY0FBWSxPQUFPLFVBQVEsT0FBTyxNQUFJLE9BQU8sQ0FBQyxLQUFHLElBQUUsZUFBYSxPQUFPLGFBQVcsYUFBVyxLQUFHLE1BQU0sUUFBTSxFQUFFO0FBQUEsSUFBQyxFQUFFRCxVQUFNLFdBQVU7QUFBQztBQUFhLFVBQUksSUFBRSxLQUFJLElBQUUsS0FBSSxJQUFFLE1BQUssSUFBRSxlQUFjLElBQUUsVUFBUyxJQUFFLFVBQVMsSUFBRSxRQUFPLElBQUUsT0FBTSxJQUFFLFFBQU8sSUFBRSxTQUFRLElBQUUsV0FBVSxJQUFFLFFBQU8sSUFBRSxRQUFPLElBQUUsZ0JBQWUsSUFBRSw4RkFBNkYsSUFBRSx1RkFBc0YsSUFBRSxFQUFDLE1BQUssTUFBSyxVQUFTLDJEQUEyRCxNQUFNLEdBQUcsR0FBRSxRQUFPLHdGQUF3RixNQUFNLEdBQUcsR0FBRSxTQUFRLFNBQVNFLElBQUU7QUFBQyxZQUFJQyxLQUFFLENBQUMsTUFBSyxNQUFLLE1BQUssSUFBSSxHQUFFQyxLQUFFRixLQUFFO0FBQUksZUFBTSxNQUFJQSxNQUFHQyxJQUFHQyxLQUFFLE1BQUksRUFBRSxLQUFHRCxHQUFFQyxFQUFDLEtBQUdELEdBQUUsQ0FBQyxLQUFHO0FBQUEsTUFBRyxFQUFDLEdBQUUsSUFBRSxTQUFTRCxJQUFFQyxJQUFFQyxJQUFFO0FBQUMsWUFBSUMsS0FBRSxPQUFPSCxFQUFDO0FBQUUsZUFBTSxDQUFDRyxNQUFHQSxHQUFFLFVBQVFGLEtBQUVELEtBQUUsS0FBRyxNQUFNQyxLQUFFLElBQUVFLEdBQUUsTUFBTSxFQUFFLEtBQUtELEVBQUMsSUFBRUY7QUFBQSxNQUFDLEdBQUUsSUFBRSxFQUFDLEdBQUUsR0FBRSxHQUFFLFNBQVNBLElBQUU7QUFBQyxZQUFJQyxLQUFFLENBQUNELEdBQUUsVUFBVSxHQUFFRSxLQUFFLEtBQUssSUFBSUQsRUFBQyxHQUFFRSxLQUFFLEtBQUssTUFBTUQsS0FBRSxFQUFFLEdBQUVFLEtBQUVGLEtBQUU7QUFBRyxnQkFBT0QsTUFBRyxJQUFFLE1BQUksT0FBSyxFQUFFRSxJQUFFLEdBQUUsR0FBRyxJQUFFLE1BQUksRUFBRUMsSUFBRSxHQUFFLEdBQUc7QUFBQSxNQUFDLEdBQUUsR0FBRSxTQUFTSixHQUFFQyxJQUFFQyxJQUFFO0FBQUMsWUFBR0QsR0FBRSxLQUFLLElBQUVDLEdBQUUsS0FBSyxFQUFFLFFBQU0sQ0FBQ0YsR0FBRUUsSUFBRUQsRUFBQztBQUFFLFlBQUlFLEtBQUUsTUFBSUQsR0FBRSxLQUFLLElBQUVELEdBQUUsS0FBSyxNQUFJQyxHQUFFLE1BQU0sSUFBRUQsR0FBRSxNQUFNLElBQUdHLEtBQUVILEdBQUUsTUFBTSxFQUFFLElBQUlFLElBQUUsQ0FBQyxHQUFFRSxLQUFFSCxLQUFFRSxLQUFFLEdBQUVFLEtBQUVMLEdBQUUsTUFBTSxFQUFFLElBQUlFLE1BQUdFLEtBQUUsS0FBRyxJQUFHLENBQUM7QUFBRSxlQUFNLEVBQUUsRUFBRUYsTUFBR0QsS0FBRUUsT0FBSUMsS0FBRUQsS0FBRUUsS0FBRUEsS0FBRUYsUUFBSztBQUFBLE1BQUUsR0FBRSxHQUFFLFNBQVNKLElBQUU7QUFBQyxlQUFPQSxLQUFFLElBQUUsS0FBSyxLQUFLQSxFQUFDLEtBQUcsSUFBRSxLQUFLLE1BQU1BLEVBQUM7QUFBQSxNQUFDLEdBQUUsR0FBRSxTQUFTQSxJQUFFO0FBQUMsZUFBTSxFQUFDLEdBQUUsR0FBRSxHQUFFLEdBQUUsR0FBRSxHQUFFLEdBQUUsR0FBRSxHQUFFLEdBQUUsR0FBRSxHQUFFLEdBQUUsR0FBRSxHQUFFLEdBQUUsSUFBRyxHQUFFLEdBQUUsRUFBQyxFQUFFQSxFQUFDLEtBQUcsT0FBT0EsTUFBRyxFQUFFLEVBQUUs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QUFBQSxVQUFBLElBQUEsSUFBQSxDQUFBLElBQUE7QUFDQSxFQUFBQSxVQUFBQSxVQUFBLElBQUEsSUFBQSxDQUFBLElBQUE7QUFDSixHQUhZLGFBQUEsV0FBUSxDQUFBLEVBQUE7QUFLcEIsSUFBWTtDQUFaLFNBQVlDLFVBQU87QUFDZixFQUFBQSxTQUFBQSxTQUFBLFFBQUEsSUFBQSxDQUFBLElBQUE7QUFDQSxFQUFBQSxTQUFBQSxTQUFBLFFBQUEsSUFBQSxDQUFBLElBQUE7QUFDQSxFQUFBQSxTQUFBQSxTQUFBLFNBQUEsSUFBQSxDQUFBLElBQUE7QUFDQSxFQUFBQSxTQUFBQSxTQUFBLFdBQUEsSUFBQSxDQUFBLElBQUE7QUFDQSxFQUFBQSxTQUFBQSxTQUFBLFVBQUEsSUFBQSxDQUFBLElBQUE7QUFDQSxFQUFBQSxTQUFBQSxTQUFBLFFBQUEsSUFBQSxDQUFBLElBQUE7QUFDQSxFQUFBQSxTQUFBQSxTQUFBLFVBQUEsSUFBQSxDQUFBLElBQUE7QUFDSixHQVJZLFlBQUEsVUFBTyxDQUFBLEVBQUE7QUFVbkIsSUFBWTtDQUFaLFNBQVlDLFFBQUs7QUFDYixFQUFBQSxPQUFBQSxPQUFBLFNBQUEsSUFBQSxDQUFBLElBQUE7QUFDQSxFQUFBQSxPQUFBQSxPQUFBLFVBQUEsSUFBQSxDQUFBLElBQUE7QUFDQSxFQUFBQSxPQUFBQSxPQUFBLE9BQUEsSUFBQSxDQUFBLElBQUE7QUFDQSxFQUFBQSxPQUFBQSxPQUFBLE9BQUEsSUFBQSxDQUFBLElBQUE7QUFDQSxFQUFBQSxPQUFBQSxPQUFBLEtBQUEsSUFBQSxDQUFBLElBQUE7QUFDQSxFQUFBQSxPQUFBQSxPQUFBLE1BQUEsSUFBQSxDQUFBLElBQUE7QUFDQSxFQUFBQSxPQUFBQSxPQUFBLE1BQUEsSUFBQSxDQUFBLElBQUE7QUFDQSxFQUFBQSxPQUFBQSxPQUFBLFFBQUEsSUFBQSxDQUFBLElBQUE7QUFDQSxFQUFBQSxPQUFBQSxPQUFBLFdBQUEsSUFBQSxDQUFBLElBQUE7QUFDQSxFQUFBQSxPQUFBQSxPQUFBLFNBQUEsSUFBQSxFQUFBLElBQUE7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LFVBQ3pFLGVBQUssa0JBQWtCLFVBQVUsRUFBRSxJQUFJLENBQUMsTUFBTSxVQUM3Qyw0Q0FBQyxnQkFBSyxTQUFTLE1BQWQsRUFBK0IsT0FBTyxNQUFNLE9BQU8sUUFBM0IsS0FBaUMsQ0FDM0QsR0FDSDtBQUFBLE1BR0QsZ0JBQU0sSUFBSSxDQUFDLE1BQU0sVUFDaEI7QUFBQSxRQUFDLGdCQUFLO0FBQUEsUUFBTDtBQUFBLFVBRUMsT0FBTyxPQUFPLEtBQUssS0FBSztBQUFBLFVBQ3hCLGFBQWEsQ0FBQyxFQUFFLEtBQUssRUFBRSxPQUFPLEtBQUssT0FBTyxPQUFPLGlCQUFNLGNBQWMsRUFBRSxDQUFDO0FBQUEsVUFDeEUsU0FDRSw2Q0FBQywwQkFDQztBQUFBLHdEQUFDLGtCQUFPLGlCQUFQLEVBQXVCLFNBQVMsS0FBSyxPQUFPO0FBQUEsWUFDN0MsNENBQUMsa0JBQU8sT0FBUCxFQUFhLFNBQVMsS0FBSyxPQUFPO0FBQUEsYUFDckM7QUFBQTtBQUFBLFFBUEc7QUFBQSxNQVNQLENBQ0Q7QUFBQTtBQUFBLEVBQ0g7QUFFSjsiLAogICJuYW1lcyI6IFsiZXhwb3J0cyIsICJtb2R1bGUiLCAidCIsICJlIiwgImkiLCAiciIsICJzIiwgImV4cG9ydHMiLCAibW9kdWxlIiwgInQiLCAiZSIsICJuIiwgInIiLCAiaSIsICJzIiwgInUiLCAiYSIsICJNIiwgIm0iLCAiZiIsICJsIiwgIiQiLCAieSIsICJ2IiwgImciLCAiRCIsICJvIiwgImQiLCAiYyIsICJoIiwgImV4cG9ydHMiLCAibW9kdWxlIiwgImUiLCAidCIsICJyIiwgImV4cG9ydHMiLCAibW9kdWxlIiwgImkiLCAibiIsICJmIiwgImUiLCAiZXhwb3J0cyIsICJtb2R1bGUiLCAidCIsICJpIiwgImUiLCAicyIsICJmIiwgIm4iLCAidSIsICJvIiwgInIiLCAiZXhwb3J0cyIsICJtb2R1bGUiLCAidCIsICJuIiwgImkiLCAibyIsICJyIiwgImUiLCAidSIsICJmIiwgInMiLCAiYSIsICJleHBvcnRzIiwgIm1vZHVsZSIsICJyIiwgImUiLCAidCIsICJvIiwgIm4iLCAiaSIsICJkIiwgImltcG9ydF9kYXlqcyIsICJNZXJpZGllbSIsICJXZWVrZGF5IiwgIk1vbnRoIiwgImRheWpzIiwgImRheWpzIiwgInF1YXJ0ZXJPZlllYXIiLCAiaW1wb3J0X2RheWpzIiwgImRheWpzIiwgIlBBVFRFUk4iLCAiTU9OVEhfTkFNRV9HUk9VUCIsICJEQVRFX0dST1VQIiwgIkRBVEVfVE9fR1JPVVAiLCAiWUVBUl9HUk9VUCIsICJQQVRURVJOIiwgIk1PTlRIX05BTUVfR1JPVVAiLCAiWUVBUl9HUk9VUCIsICJQQVRURVJOIiwgIk1PTlRIX05BTUVfR1JPVVAiLCAiUEFUVEVSTiIsICJZRUFSX0dST1VQIiwgInN0cmljdCIsICJQQVRURVJOIiwgIlBBVFRFUk4iLCAiU1RSSUNUX1BBVFRFUk4iLCAiaW1wb3J0X2RheWpzIiwgImltcGx5U2ltaWxhckRhdGUiLCAiZGF5anMiLCAiaW1wbHlTaW1pbGFyRGF0ZSIsICJQQVRURVJOIiwgIllFQVJfTlVNQkVSX0dST1VQIiwgIk1PTlRIX05VTUJFUl9HUk9VUCIsICJEQVRFX05VTUJFUl9HUk9VUCIsICJjb25maWd1cmF0aW9uIiwgImltcG9ydF9kYXlqcyIsICJpbXBvcnRfZGF5anMiLCAiZGF5anMiLCAiZGF5anMiLCAiUEFUVEVSTiIsICJkYXlqcyIsICJQQVRURVJOIiwgIlBBVFRFUk4iLCAiUFJFRklYX0dST1VQIiwgImltcG9ydF9kYXlqcyIsICJQQVRURVJOIiwgImRheWpzIiwgIlBBVFRFUk4iLCAiWUVBUl9HUk9VUCIsICJQQVRURVJOIiwgIllFQVJfR1JPVVAiLCAiY29uZmlndXJhdGlvbiIsICJjYXN1YWwiLCAiY2FzdWFsIiwgImltcG9ydF9kYXlqcyIsICJpbXBvcnRfdGltZXpvbmUiLCAiZGF5anMiLCAiYWR2YW5jZWRGb3JtYXRQbHVnaW4iLCAid2Vla09mWWVhclBsdWdpbiIsICJ1dGNQbHVnaW4iLCAidGltZXpvbmVQbHVnaW4iLCAicmVsYXRpdmVUaW1lUGx1Z2luIl0KfQo=
