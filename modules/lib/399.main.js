"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
(self.webpackChunkmirador_integration_codecs = self.webpackChunkmirador_integration_codecs || []).push([[399], {
  54399: function _(e, t, n) {
    n.r(t), n.d(t, {
      "default": function _default() {
        return v;
      }
    });
    var r = n(28216),
      o = n(97779),
      i = n(87217),
      c = n(52543),
      a = n(11196),
      u = n(67294);
    function s(e, t) {
      for (var n = 0; n < t.length; n++) {
        var r = t[n];
        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
      }
    }
    function f(e, t) {
      return f = Object.setPrototypeOf || function (e, t) {
        return e.__proto__ = t, e;
      }, f(e, t);
    }
    function l(e) {
      return l = Object.setPrototypeOf ? Object.getPrototypeOf : function (e) {
        return e.__proto__ || Object.getPrototypeOf(e);
      }, l(e);
    }
    var p = function (e) {
      !function (e, t) {
        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
        e.prototype = Object.create(t && t.prototype, {
          constructor: {
            value: e,
            writable: !0,
            configurable: !0
          }
        }), t && f(e, t);
      }(c, e);
      var t,
        n,
        r,
        o,
        i = (r = c, o = function () {
          if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
          if (Reflect.construct.sham) return !1;
          if ("function" == typeof Proxy) return !0;
          try {
            return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0;
          } catch (e) {
            return !1;
          }
        }(), function () {
          var e,
            t = l(r);
          if (o) {
            var n = l(this).constructor;
            e = Reflect.construct(t, arguments, n);
          } else e = t.apply(this, arguments);
          return function (e, t) {
            if (t && ("object" == _typeof(t) || "function" == typeof t)) return t;
            if (void 0 !== t) throw new TypeError("Derived constructors may only return object or undefined");
            return function (e) {
              if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
              return e;
            }(e);
          }(this, e);
        });
      function c() {
        return function (e, t) {
          if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
        }(this, c), i.apply(this, arguments);
      }
      return t = c, (n = [{
        key: "render",
        value: function value() {
          var e = this.props,
            t = e.captions,
            n = e.classes,
            r = e.videoOptions,
            o = e.videoResources;
          return u.createElement("div", {
            className: n.container
          }, u.createElement("video", Object.assign({
            className: n.video
          }, r), o.map(function (e) {
            return u.createElement(u.Fragment, {
              key: e.id
            }, u.createElement("source", {
              src: e.id,
              type: e.getFormat()
            }));
          }), t.map(function (e) {
            return u.createElement(u.Fragment, {
              key: e.id
            }, u.createElement("track", {
              src: e.id,
              label: e.getDefaultLabel(),
              srcLang: e.getProperty("language")
            }));
          })));
        }
      }]) && s(t.prototype, n), c;
    }(u.Component);
    p.defaultProps = {
      captions: [],
      videoOptions: {},
      videoResources: []
    };
    var d = n(49455),
      y = n(1172);
    var v = (0, o.qC)((0, i.Z)(), (0, c.Z)(function () {
      return {
        container: {
          alignItems: "center",
          display: "flex",
          width: "100%"
        },
        video: {
          maxHeight: "100%",
          width: "100%"
        }
      };
    }), (0, r.$j)(function (e, t) {
      var n = t.windowId;
      return {
        captions: (0, d.U$)(e, {
          windowId: n
        }) || [],
        videoOptions: (0, y.iE)(e).videoOptions,
        videoResources: (0, d.e0)(e, {
          windowId: n
        }) || []
      };
    }, null), (0, a.A)("VideoViewer"))(p);
  }
}]);