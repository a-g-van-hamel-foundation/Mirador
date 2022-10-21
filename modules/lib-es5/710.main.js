"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
(self.webpackChunkmirador_integration_oct2022 = self.webpackChunkmirador_integration_oct2022 || []).push([[710], {
  74693: function _(e, t, n) {
    var o = n(95318),
      r = n(20862);
    t.Z = void 0;
    var i = r(n(67294)),
      c = (0, o(n(2108))["default"])(i.createElement("path", {
        d: "M3 13h2v-2H3v2zm0 4h2v-2H3v2zm0-8h2V7H3v2zm4 4h14v-2H7v2zm0 4h14v-2H7v2zM7 7v2h14V7H7zm-4 6h2v-2H3v2zm0 4h2v-2H3v2zm0-8h2V7H3v2zm4 4h14v-2H7v2zm0 4h14v-2H7v2zM7 7v2h14V7H7z"
      }), "ListSharp");
    t.Z = c;
  },
  46710: function _(e, t, n) {
    n.r(t), n.d(t, {
      "default": function _default() {
        return z;
      }
    });
    var o = n(97779),
      r = n(28216),
      i = n(87217),
      c = n(52543),
      l = n(50166),
      a = n(11196),
      u = n(81610),
      f = n(67294),
      s = n(282),
      p = n(41749),
      h = n(22318),
      v = n(74693);
    function d(e, t) {
      for (var n = 0; n < t.length; n++) {
        var o = t[n];
        o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o);
      }
    }
    function m(e, t) {
      return (m = Object.setPrototypeOf || function (e, t) {
        return e.__proto__ = t, e;
      })(e, t);
    }
    function y(e, t) {
      if (t && ("object" == _typeof(t) || "function" == typeof t)) return t;
      if (void 0 !== t) throw new TypeError("Derived constructors may only return object or undefined");
      return w(e);
    }
    function w(e) {
      if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return e;
    }
    function b(e) {
      return (b = Object.setPrototypeOf ? Object.getPrototypeOf : function (e) {
        return e.__proto__ || Object.getPrototypeOf(e);
      })(e);
    }
    var g = function (e) {
      !function (e, t) {
        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
        e.prototype = Object.create(t && t.prototype, {
          constructor: {
            value: e,
            writable: !0,
            configurable: !0
          }
        }), t && m(e, t);
      }(c, e);
      var t,
        n,
        o,
        r,
        i = (o = c, r = function () {
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
            t = b(o);
          if (r) {
            var n = b(this).constructor;
            e = Reflect.construct(t, arguments, n);
          } else e = t.apply(this, arguments);
          return y(this, e);
        });
      function c(e) {
        var t;
        return function (e, t) {
          if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
        }(this, c), (t = i.call(this, e)).openCollectionDialog = t.openCollectionDialog.bind(w(t)), t;
      }
      return t = c, (n = [{
        key: "openCollectionDialog",
        value: function value() {
          var e = this.props,
            t = e.collectionPath,
            n = e.manifestId,
            o = e.showCollectionDialog,
            r = e.windowId;
          o(n, t.slice(0, -1), r);
        }
      }, {
        key: "render",
        value: function value() {
          var e = this.props.t;
          return f.createElement(p.Z, {
            container: !0,
            justify: "center",
            alignItems: "center"
          }, f.createElement(p.Z, {
            container: !0,
            direction: "column",
            alignItems: "center"
          }, f.createElement(h.Z, {
            variant: "h4",
            paragraph: !0
          }, f.createElement("em", null, e("noItemSelected"))), f.createElement(s.Z, {
            color: "primary",
            variant: "contained",
            onClick: this.openCollectionDialog,
            startIcon: f.createElement(v.Z, null)
          }, e("showCollection"))));
        }
      }]) && d(t.prototype, n), c;
    }(f.Component);
    g.defaultProps = {
      collectionPath: [],
      manifestId: null,
      t: function t() {},
      windowId: null
    };
    var C = {
      showCollectionDialog: l.FK
    };
    var z = (0, o.qC)((0, i.Z)(), (0, c.Z)(function (e) {
      return {};
    }), (0, r.$j)(function (e, t) {
      var n = t.windowId,
        o = (0, u.Jj)(e, {
          windowId: n
        }) || {};
      return {
        collectionPath: o.collectionPath,
        manifestId: o.manifestId
      };
    }, C), (0, a.A)("SelectCollection"))(g);
  }
}]);