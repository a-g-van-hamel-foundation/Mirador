"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
(self.webpackChunkmirador_integration_oct2022 = self.webpackChunkmirador_integration_oct2022 || []).push([[390], {
  77206: function _(e, t, n) {
    var r = n(95318),
      o = n(20862);
    t.Z = void 0;
    var a = o(n(67294)),
      i = (0, r(n(2108))["default"])(a.createElement("path", {
        d: "M13 7h-2v4H7v2h4v4h2v-4h4v-2h-4V7zm-1-5C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"
      }), "AddCircleOutlineSharp");
    t.Z = i;
  },
  99049: function _(e, t, n) {
    var r = n(95318),
      o = n(20862);
    t.Z = void 0;
    var a = o(n(67294)),
      i = (0, r(n(2108))["default"])(a.createElement("path", {
        d: "M10 16.5l6-4.5-6-4.5v9zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"
      }), "PlayCircleOutlineSharp");
    t.Z = i;
  },
  59169: function _(e, t, n) {
    var r = n(95318),
      o = n(20862);
    t.Z = void 0;
    var a = o(n(67294)),
      i = (0, r(n(2108))["default"])(a.createElement("path", {
        d: "M7 11v2h10v-2H7zm5-9C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"
      }), "RemoveCircleOutlineSharp");
    t.Z = i;
  },
  5390: function _(e, t, n) {
    n.r(t), n.d(t, {
      "default": function _default() {
        return le;
      }
    });
    var r = n(97779),
      o = n(11196),
      a = n(67294),
      i = n(28216),
      c = n(8935),
      u = n(52543),
      l = n(59114),
      s = n(81610),
      f = n(94184),
      p = n.n(f),
      d = n(79895),
      v = n(22318),
      h = n(87217),
      y = n(36691),
      w = n(1172),
      m = n(77206),
      b = n(59169),
      C = n(62087);
    function O(e) {
      return a.createElement(C.Z, e, a.createElement("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24"
      }, a.createElement("path", {
        d: "M6,15H9v3h2V13H6Zm9-6V6H13v5h5V9Z"
      }), a.createElement("path", {
        d: "M12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm0,18a8,8,0,1,1,8-8,8,8,0,0,1-8,8Z"
      })));
    }
    var g = n(99559);
    function E(e, t) {
      for (var n = 0; n < t.length; n++) {
        var r = t[n];
        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
      }
    }
    function Z(e, t) {
      return (Z = Object.setPrototypeOf || function (e, t) {
        return e.__proto__ = t, e;
      })(e, t);
    }
    function _(e, t) {
      if (t && ("object" == _typeof(t) || "function" == typeof t)) return t;
      if (void 0 !== t) throw new TypeError("Derived constructors may only return object or undefined");
      return j(e);
    }
    function j(e) {
      if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return e;
    }
    function k(e) {
      return (k = Object.setPrototypeOf ? Object.getPrototypeOf : function (e) {
        return e.__proto__ || Object.getPrototypeOf(e);
      })(e);
    }
    var P = function (e) {
      !function (e, t) {
        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
        e.prototype = Object.create(t && t.prototype, {
          constructor: {
            value: e,
            writable: !0,
            configurable: !0
          }
        }), t && Z(e, t);
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
            t = k(r);
          if (o) {
            var n = k(this).constructor;
            e = Reflect.construct(t, arguments, n);
          } else e = t.apply(this, arguments);
          return _(this, e);
        });
      function c(e) {
        var t;
        return function (e, t) {
          if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
        }(this, c), (t = i.call(this, e)).handleZoomInClick = t.handleZoomInClick.bind(j(t)), t.handleZoomOutClick = t.handleZoomOutClick.bind(j(t)), t;
      }
      return t = c, (n = [{
        key: "handleZoomInClick",
        value: function value() {
          var e = this.props,
            t = e.windowId;
          (0, e.updateViewport)(t, {
            zoom: 2 * e.viewer.zoom
          });
        }
      }, {
        key: "handleZoomOutClick",
        value: function value() {
          var e = this.props,
            t = e.windowId;
          (0, e.updateViewport)(t, {
            zoom: e.viewer.zoom / 2
          });
        }
      }, {
        key: "render",
        value: function value() {
          var e = this.props,
            t = e.displayDivider,
            n = e.showZoomControls,
            r = e.classes,
            o = e.t,
            i = e.zoomToWorld;
          return n ? a.createElement("div", {
            className: r.zoom_controls
          }, a.createElement(g.Z, {
            "aria-label": o("zoomIn"),
            onClick: this.handleZoomInClick
          }, a.createElement(m.Z, null)), a.createElement(g.Z, {
            "aria-label": o("zoomOut"),
            onClick: this.handleZoomOutClick
          }, a.createElement(b.Z, null)), a.createElement(g.Z, {
            "aria-label": o("zoomReset"),
            onClick: function onClick() {
              return i(!1);
            }
          }, a.createElement(O, null)), t && a.createElement("span", {
            className: r.divider
          })) : a.createElement(a.Fragment, null);
        }
      }]) && E(t.prototype, n), c;
    }(a.Component);
    P.defaultProps = {
      displayDivider: !0,
      showZoomControls: !1,
      t: function t(e) {
        return e;
      },
      updateViewport: function updateViewport() {},
      viewer: {},
      windowId: ""
    };
    var I = {
      updateViewport: y.WH
    };
    var x = (0, r.qC)((0, h.Z)(), (0, u.Z)(function (e) {
      return {
        divider: {
          borderRight: "1px solid #808080",
          display: "inline-block",
          height: "24px",
          margin: "12px 6px"
        },
        ListItem: {
          paddingBottom: 0,
          paddingTop: 0
        },
        zoom_controls: {
          display: "flex",
          flexDirection: "row",
          justifyContent: "center"
        }
      };
    }), (0, i.$j)(function (e, t) {
      var n = t.windowId;
      return {
        showZoomControls: (0, w._M)(e),
        viewer: (0, s.gA)(e, {
          windowId: n
        })
      };
    }, I), (0, o.A)("ZoomControls"))(P);
    var R = n(81720);
    function N(e, t) {
      if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
    }
    function z(e, t) {
      for (var n = 0; n < t.length; n++) {
        var r = t[n];
        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
      }
    }
    function S(e, t) {
      return (S = Object.setPrototypeOf || function (e, t) {
        return e.__proto__ = t, e;
      })(e, t);
    }
    function T(e, t) {
      if (t && ("object" == _typeof(t) || "function" == typeof t)) return t;
      if (void 0 !== t) throw new TypeError("Derived constructors may only return object or undefined");
      return function (e) {
        if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return e;
      }(e);
    }
    function D(e) {
      return (D = Object.setPrototypeOf ? Object.getPrototypeOf : function (e) {
        return e.__proto__ || Object.getPrototypeOf(e);
      })(e);
    }
    var B = function (e) {
      !function (e, t) {
        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
        e.prototype = Object.create(t && t.prototype, {
          constructor: {
            value: e,
            writable: !0,
            configurable: !0
          }
        }), t && S(e, t);
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
            t = D(r);
          if (o) {
            var n = D(this).constructor;
            e = Reflect.construct(t, arguments, n);
          } else e = t.apply(this, arguments);
          return T(this, e);
        });
      function c() {
        return N(this, c), i.apply(this, arguments);
      }
      return t = c, (n = [{
        key: "render",
        value: function value() {
          var e = this.props,
            t = e.canvasCount,
            n = e.canvasIndex,
            r = e.canvasLabel,
            o = e.classes,
            i = e.t;
          return a.createElement("div", {
            className: p()((0, R.Z)("osd-info"), o.osdInfo)
          }, a.createElement(v.Z, {
            display: "inline",
            variant: "caption",
            className: (0, R.Z)("canvas-count")
          }, i("pagination", {
            current: n + 1,
            total: t
          })), a.createElement(v.Z, {
            display: "inline",
            variant: "caption",
            className: (0, R.Z)("canvas-label")
          }, r && " • ".concat(r)));
        }
      }]) && z(t.prototype, n), c;
    }(a.Component);
    B.defaultProps = {
      canvasLabel: void 0,
      t: function t() {}
    };
    var A = n(49455),
      V = n(95981);
    var M = (0, r.qC)((0, u.Z)({
      osdInfo: {
        order: 2,
        overflow: "hidden",
        paddingBottom: 3,
        textOverflow: "ellipsis",
        unicodeBidi: "plaintext",
        whiteSpace: "nowrap",
        width: "100%"
      }
    }), (0, h.Z)(), (0, i.$j)(function (e, t) {
      var n = t.windowId,
        r = (0, A.LU)(e, {
          windowId: n
        }),
        o = (0, V.Dr)(e, {
          windowId: n
        }),
        a = ((0, A.Pm)(e, {
          windowId: n
        }) || {}).id;
      return {
        canvasCount: r.length,
        canvasIndex: o,
        canvasLabel: (0, A.vt)(e, {
          canvasId: a,
          windowId: n
        })
      };
    }, null), (0, o.A)("ViewerInfo"))(B);
    var W = n(99049);
    function q(e, t) {
      if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
    }
    function H(e, t) {
      for (var n = 0; n < t.length; n++) {
        var r = t[n];
        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
      }
    }
    function L(e, t) {
      return (L = Object.setPrototypeOf || function (e, t) {
        return e.__proto__ = t, e;
      })(e, t);
    }
    function $(e, t) {
      if (t && ("object" == _typeof(t) || "function" == typeof t)) return t;
      if (void 0 !== t) throw new TypeError("Derived constructors may only return object or undefined");
      return function (e) {
        if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return e;
      }(e);
    }
    function F(e) {
      return (F = Object.setPrototypeOf ? Object.getPrototypeOf : function (e) {
        return e.__proto__ || Object.getPrototypeOf(e);
      })(e);
    }
    var U = function (e) {
      !function (e, t) {
        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
        e.prototype = Object.create(t && t.prototype, {
          constructor: {
            value: e,
            writable: !0,
            configurable: !0
          }
        }), t && L(e, t);
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
            t = F(r);
          if (o) {
            var n = F(this).constructor;
            e = Reflect.construct(t, arguments, n);
          } else e = t.apply(this, arguments);
          return $(this, e);
        });
      function c() {
        return q(this, c), i.apply(this, arguments);
      }
      return t = c, (n = [{
        key: "render",
        value: function value() {
          var e = this.props,
            t = e.hasNextCanvas,
            n = e.hasPreviousCanvas,
            r = e.setNextCanvas,
            o = e.setPreviousCanvas,
            i = e.t,
            c = e.classes,
            u = "ltr",
            l = {},
            s = {};
          switch (e.viewingDirection) {
            case "top-to-bottom":
              l = {
                transform: "rotate(270deg)"
              }, s = {
                transform: "rotate(90deg)"
              };
              break;
            case "bottom-to-top":
              l = {
                transform: "rotate(90deg)"
              }, s = {
                transform: "rotate(270deg)"
              };
              break;
            case "right-to-left":
              u = "rtl", l = {}, s = {
                transform: "rotate(180deg)"
              };
              break;
            default:
              l = {
                transform: "rotate(180deg)"
              }, s = {};
          }
          return a.createElement("div", {
            className: p()((0, R.Z)("osd-navigation"), c.osdNavigation),
            dir: u
          }, a.createElement(g.Z, {
            "aria-label": i("previousCanvas"),
            className: (0, R.Z)("previous-canvas-button"),
            disabled: !n,
            onClick: function onClick() {
              n && o();
            }
          }, a.createElement(W.Z, {
            style: l
          })), a.createElement(g.Z, {
            "aria-label": i("nextCanvas"),
            className: (0, R.Z)("next-canvas-button"),
            disabled: !t,
            onClick: function onClick() {
              t && r();
            }
          }, a.createElement(W.Z, {
            style: s
          })));
        }
      }]) && H(t.prototype, n), c;
    }(a.Component);
    U.defaultProps = {
      hasNextCanvas: !1,
      hasPreviousCanvas: !1,
      setNextCanvas: function setNextCanvas() {},
      setPreviousCanvas: function setPreviousCanvas() {},
      viewingDirection: ""
    };
    var Q = (0, r.qC)((0, u.Z)({
      osdNavigation: {
        order: 1
      }
    }), (0, h.Z)(), (0, i.$j)(function (e, t) {
      var n = t.windowId;
      return {
        hasNextCanvas: !!(0, A.m7)(e, {
          windowId: n
        }),
        hasPreviousCanvas: !!(0, A.iQ)(e, {
          windowId: n
        }),
        viewingDirection: (0, V.Xf)(e, {
          windowId: n
        })
      };
    }, function (e, t) {
      var n = t.windowId;
      return {
        setNextCanvas: function setNextCanvas() {
          return e(y.NU(n));
        },
        setPreviousCanvas: function setPreviousCanvas() {
          return e(y.Ch(n));
        }
      };
    }), (0, o.A)("ViewerNavigation"))(U);
    var X = n(95450);
    function G(e, t) {
      if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
    }
    function J(e, t) {
      for (var n = 0; n < t.length; n++) {
        var r = t[n];
        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
      }
    }
    function K(e, t) {
      return (K = Object.setPrototypeOf || function (e, t) {
        return e.__proto__ = t, e;
      })(e, t);
    }
    function Y(e, t) {
      if (t && ("object" == _typeof(t) || "function" == typeof t)) return t;
      if (void 0 !== t) throw new TypeError("Derived constructors may only return object or undefined");
      return function (e) {
        if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return e;
      }(e);
    }
    function ee(e) {
      return (ee = Object.setPrototypeOf ? Object.getPrototypeOf : function (e) {
        return e.__proto__ || Object.getPrototypeOf(e);
      })(e);
    }
    var te = function (e) {
      !function (e, t) {
        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
        e.prototype = Object.create(t && t.prototype, {
          constructor: {
            value: e,
            writable: !0,
            configurable: !0
          }
        }), t && K(e, t);
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
            t = ee(r);
          if (o) {
            var n = ee(this).constructor;
            e = Reflect.construct(t, arguments, n);
          } else e = t.apply(this, arguments);
          return Y(this, e);
        });
      function c() {
        return G(this, c), i.apply(this, arguments);
      }
      return t = c, (n = [{
        key: "canvasNavControlsAreStacked",
        value: function value() {
          var e = this.props.size;
          return e && e.width && e.width <= 253;
        }
      }, {
        key: "render",
        value: function value() {
          var e = this.props,
            t = e.classes,
            n = e.visible,
            r = e.windowId,
            o = e.zoomToWorld;
          return n ? a.createElement(d.Z, {
            square: !0,
            className: p()(t.controls, (0, R.Z)("canvas-nav"), t.canvasNav, this.canvasNavControlsAreStacked() ? (0, R.Z)("canvas-nav-stacked") : null, this.canvasNavControlsAreStacked() ? t.canvasNavStacked : null),
            elevation: 0
          }, a.createElement(x, {
            displayDivider: !this.canvasNavControlsAreStacked(),
            windowId: r,
            zoomToWorld: o
          }), a.createElement(Q, {
            windowId: r
          }), a.createElement(M, {
            windowId: r
          }), a.createElement(X.M, this.props)) : a.createElement(v.Z, {
            variant: "srOnly",
            component: "div"
          }, a.createElement(M, {
            windowId: r
          }));
        }
      }]) && J(t.prototype, n), c;
    }(a.Component);
    te.defaultProps = {
      classes: {},
      visible: !0
    };
    var ne = (0, r.qC)((0, i.$j)(function (e, t) {
      var n = t.windowId;
      return {
        visible: (0, s.oq)(e).focusedWindowId === n
      };
    }), (0, u.Z)(function (e) {
      return {
        canvasNav: {
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "center",
          textAlign: "center"
        },
        canvasNavStacked: {
          flexDirection: "column"
        },
        controls: {
          backgroundColor: (0, l.fade)(e.palette.background.paper, .5),
          bottom: 0,
          position: "absolute",
          width: "100%",
          zIndex: 50
        }
      };
    }), (0, c.withSize)(), (0, o.A)("WindowCanvasNavigationControls"))(te);
    function re(e, t) {
      for (var n = 0; n < t.length; n++) {
        var r = t[n];
        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
      }
    }
    function oe(e, t) {
      return (oe = Object.setPrototypeOf || function (e, t) {
        return e.__proto__ = t, e;
      })(e, t);
    }
    function ae(e, t) {
      if (t && ("object" == _typeof(t) || "function" == typeof t)) return t;
      if (void 0 !== t) throw new TypeError("Derived constructors may only return object or undefined");
      return function (e) {
        if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return e;
      }(e);
    }
    function ie(e) {
      return (ie = Object.setPrototypeOf ? Object.getPrototypeOf : function (e) {
        return e.__proto__ || Object.getPrototypeOf(e);
      })(e);
    }
    var ce = (0, a.lazy)(function () {
        return n.e(501).then(n.bind(n, 26501));
      }),
      ue = function (e) {
        !function (e, t) {
          if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
          e.prototype = Object.create(t && t.prototype, {
            constructor: {
              value: e,
              writable: !0,
              configurable: !0
            }
          }), t && oe(e, t);
        }(u, e);
        var t,
          n,
          r,
          o,
          i,
          c = (o = u, i = function () {
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
              t = ie(o);
            if (i) {
              var n = ie(this).constructor;
              e = Reflect.construct(t, arguments, n);
            } else e = t.apply(this, arguments);
            return ae(this, e);
          });
        function u(e) {
          var t;
          return function (e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
          }(this, u), (t = c.call(this, e)).state = {}, t;
        }
        return t = u, r = [{
          key: "getDerivedStateFromError",
          value: function value(e) {
            return {
              hasError: !0
            };
          }
        }], (n = [{
          key: "render",
          value: function value() {
            var e = this.props.windowId;
            return this.state.hasError ? a.createElement(a.Fragment, null) : a.createElement(a.Suspense, {
              fallback: a.createElement("div", null)
            }, a.createElement(ce, {
              windowId: e
            }, a.createElement(ne, {
              windowId: e
            })));
          }
        }]) && re(t.prototype, n), r && re(t, r), u;
      }(a.Component);
    var le = (0, r.qC)((0, o.A)("WindowViewer"))(ue);
  }
}]);