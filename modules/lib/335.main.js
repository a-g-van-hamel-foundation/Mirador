"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
(self.webpackChunkmirador_integration_codecs = self.webpackChunkmirador_integration_codecs || []).push([[335], {
  9335: function _(e, t, n) {
    n.r(t), n.d(t, {
      "default": function _default() {
        return z;
      }
    });
    var r = n(97779),
      o = n(28216),
      a = n(52543),
      i = n(11196),
      c = n(67294),
      s = n(79895),
      l = n(85564),
      u = n.n(l),
      f = n(50166),
      p = n(73953),
      d = n(36691),
      h = n(1124),
      y = n(33901),
      v = n(71267),
      b = n(40480),
      g = n(75421),
      w = n(94184),
      m = n.n(w),
      O = (n(66337), n(8490)),
      C = n(7590),
      j = n(20362);
    function x(e, t) {
      for (var n = 0; n < t.length; n++) {
        var r = t[n];
        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
      }
    }
    function I(e, t) {
      return I = Object.setPrototypeOf || function (e, t) {
        return e.__proto__ = t, e;
      }, I(e, t);
    }
    function k(e) {
      if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return e;
    }
    function P(e) {
      return P = Object.setPrototypeOf ? Object.getPrototypeOf : function (e) {
        return e.__proto__ || Object.getPrototypeOf(e);
      }, P(e);
    }
    var E = function (e) {
      !function (e, t) {
        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
        e.prototype = Object.create(t && t.prototype, {
          constructor: {
            value: e,
            writable: !0,
            configurable: !0
          }
        }), t && I(e, t);
      }(i, e);
      var t,
        n,
        r,
        o,
        a = (r = i, o = function () {
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
            t = P(r);
          if (o) {
            var n = P(this).constructor;
            e = Reflect.construct(t, arguments, n);
          } else e = t.apply(this, arguments);
          return function (e, t) {
            if (t && ("object" == _typeof(t) || "function" == typeof t)) return t;
            if (void 0 !== t) throw new TypeError("Derived constructors may only return object or undefined");
            return k(e);
          }(this, e);
        });
      function i(e) {
        var t;
        return function (e, t) {
          if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
        }(this, i), (t = a.call(this, e)).state = {
          requestedAnnotations: !1
        }, t.handleSelect = t.handleSelect.bind(k(t)), t.handleKey = t.handleKey.bind(k(t)), t.handleIntersection = t.handleIntersection.bind(k(t)), t;
      }
      return t = i, n = [{
        key: "handleSelect",
        value: function value() {
          var e = this.props,
            t = e.canvas,
            n = e.selected,
            r = e.setCanvas,
            o = e.focusOnCanvas;
          n ? o() : r(t.id);
        }
      }, {
        key: "handleKey",
        value: function value(e) {
          var t = this.props,
            n = t.canvas,
            r = t.setCanvas,
            o = t.focusOnCanvas;
          this.keys = {
            enter: "Enter",
            space: " "
          }, this.chars = {
            enter: 13,
            space: 32
          }, e.key === this.keys.enter || e.which === this.chars.enter || e.key === this.keys.space || e.which === this.chars.space ? o() : r(n.id);
        }
      }, {
        key: "handleIntersection",
        value: function value(e) {
          var t = e.isIntersecting,
            n = this.props,
            r = n.annotationsCount,
            o = n.requestCanvasAnnotations,
            a = this.state.requestedAnnotations;
          !t || void 0 === r || r > 0 || a || (this.setState({
            requestedAnnotations: !0
          }), o());
        }
      }, {
        key: "render",
        value: function value() {
          var e = this.props,
            t = e.annotationsCount,
            n = e.searchAnnotationsCount,
            r = e.canvas,
            o = e.classes,
            a = e.config,
            i = e.selected,
            s = new C["default"](r);
          return c.createElement(O.ZP, {
            onChange: this.handleIntersection
          }, c.createElement("div", {
            key: r.index,
            className: m()(o.galleryViewItem, i ? o.selected : "", n > 0 ? o.hasAnnotations : ""),
            onClick: this.handleSelect,
            onKeyUp: this.handleKey,
            role: "button",
            tabIndex: 0
          }, c.createElement(j.Z, {
            resource: r,
            labelled: !0,
            variant: "outside",
            maxWidth: a.width,
            maxHeight: a.height,
            style: {
              margin: "0 auto",
              maxWidth: "".concat(Math.ceil(a.height * s.aspectRatio), "px")
            }
          }, c.createElement("div", {
            className: o.chips
          }, n > 0 && c.createElement(v.Z, {
            avatar: c.createElement(y.Z, {
              className: o.avatar,
              classes: {
                circle: o.avatarIcon
              }
            }, c.createElement(g.Z, {
              fontSize: "small"
            })),
            label: n,
            className: m()(o.searchChip),
            size: "small"
          }), (t || 0) > 0 && c.createElement(v.Z, {
            avatar: c.createElement(y.Z, {
              className: o.avatar,
              classes: {
                circle: o.avatarIcon
              }
            }, c.createElement(b.Z, {
              className: o.annotationIcon
            })),
            label: t,
            className: m()(o.annotationsChip),
            size: "small"
          })))));
        }
      }], n && x(t.prototype, n), i;
    }(c.Component);
    E.defaultProps = {
      annotationsCount: void 0,
      config: {
        height: 100,
        width: null
      },
      requestCanvasAnnotations: function requestCanvasAnnotations() {},
      searchAnnotationsCount: 0,
      selected: !1
    };
    var _ = n(49455),
      A = n(51580),
      R = n(80923),
      Z = n(32012),
      D = n(1172);
    function S(e, t) {
      var n = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t && (r = r.filter(function (t) {
          return Object.getOwnPropertyDescriptor(e, t).enumerable;
        })), n.push.apply(n, r);
      }
      return n;
    }
    function q(e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {};
        t % 2 ? S(Object(n), !0).forEach(function (t) {
          N(e, t, n[t]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : S(Object(n)).forEach(function (t) {
          Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
        });
      }
      return e;
    }
    function N(e, t, n) {
      return t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : e[t] = n, e;
    }
    var $ = (0, r.qC)((0, o.$j)(function (e, t) {
      var n = t.canvas,
        r = t.windowId,
        o = (0, _.Pm)(e, {
          windowId: r
        }),
        a = (0, A.kM)(e, {
          windowId: r
        }),
        i = u()(a.map(function (e) {
          return e.resources;
        })).filter(function (e) {
          return e.targetId === n.id;
        }),
        c = (0, R.ig)(e, {
          content: "annotations",
          windowId: r
        }).length > 0;
      return {
        annotationsCount: function () {
          if (c) return (0, Z.A7)(e, {
            canvasId: n.id
          }).reduce(function (e, t) {
            return e + t.resources.filter(function (e) {
              return e.targetId === n.id;
            }).length;
          }, 0);
        }(),
        config: (0, D.iE)(e).galleryView,
        searchAnnotationsCount: i.length,
        selected: o && o.id === n.id
      };
    }, function (e, t) {
      var n = t.canvas,
        r = (t.id, t.windowId);
      return {
        focusOnCanvas: function focusOnCanvas() {
          return e(f.cx(r, "single"));
        },
        requestCanvasAnnotations: function requestCanvasAnnotations() {
          return e(p.pj(r, n.id));
        },
        setCanvas: function setCanvas() {
          for (var t = arguments.length, n = new Array(t), o = 0; o < t; o++) n[o] = arguments[o];
          return e(d.ji.apply(h, [r].concat(n)));
        }
      };
    }), (0, a.Z)(function (e) {
      return {
        annotationIcon: {
          height: "1rem",
          width: "1rem"
        },
        annotationsChip: q({}, e.typography.caption),
        avatar: {
          backgroundColor: "transparent"
        },
        chips: {
          opacity: .875,
          position: "absolute",
          right: 0,
          textAlign: "right",
          top: 0
        },
        galleryViewItem: {
          "&$hasAnnotations": {
            border: "2px solid ".concat(e.palette.action.selected)
          },
          "&$selected,&$selected$hasAnnotations": {
            border: "2px solid ".concat(e.palette.primary.main)
          },
          "&:focus": {
            outline: "none"
          },
          "&:hover": {
            backgroundColor: e.palette.action.hover
          },
          border: "2px solid transparent",
          cursor: "pointer",
          display: "inline-block",
          margin: "".concat(e.spacing(1), "px ").concat(e.spacing(.5), "px"),
          maxHeight: function maxHeight(e) {
            return e.config.height + 45;
          },
          minWidth: "60px",
          overflow: "hidden",
          padding: e.spacing(.5),
          position: "relative",
          width: "min-content"
        },
        hasAnnotations: {},
        searchChip: q(q({}, e.typography.caption), {}, {
          "&$selected $avatar": {
            backgroundColor: e.palette.highlights.primary
          },
          marginTop: 2
        }),
        selected: {}
      };
    }))(E);
    function T(e, t) {
      for (var n = 0; n < t.length; n++) {
        var r = t[n];
        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
      }
    }
    function K(e, t) {
      return K = Object.setPrototypeOf || function (e, t) {
        return e.__proto__ = t, e;
      }, K(e, t);
    }
    function B(e) {
      return B = Object.setPrototypeOf ? Object.getPrototypeOf : function (e) {
        return e.__proto__ || Object.getPrototypeOf(e);
      }, B(e);
    }
    var V = function (e) {
      !function (e, t) {
        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
        e.prototype = Object.create(t && t.prototype, {
          constructor: {
            value: e,
            writable: !0,
            configurable: !0
          }
        }), t && K(e, t);
      }(i, e);
      var t,
        n,
        r,
        o,
        a = (r = i, o = function () {
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
            t = B(r);
          if (o) {
            var n = B(this).constructor;
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
      function i() {
        return function (e, t) {
          if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
        }(this, i), a.apply(this, arguments);
      }
      return t = i, n = [{
        key: "render",
        value: function value() {
          var e = this.props,
            t = e.canvases,
            n = e.classes,
            r = e.viewingDirection,
            o = e.windowId,
            a = "right-to-left" === r ? "rtl" : "ltr";
          return c.createElement(s.Z, {
            component: "section",
            dir: a,
            square: !0,
            elevation: 0,
            className: n.galleryContainer,
            id: "".concat(o, "-gallery")
          }, t.map(function (e) {
            return c.createElement($, {
              key: e.id,
              windowId: o,
              canvas: e
            });
          }));
        }
      }], n && T(t.prototype, n), i;
    }(c.Component);
    V.defaultProps = {
      classes: {},
      viewingDirection: ""
    };
    var W = n(95981);
    var z = (0, r.qC)((0, a.Z)(function (e) {
      return {
        galleryContainer: {
          alignItems: "flex-start",
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          overflowX: "hidden",
          overflowY: "scroll",
          padding: "50px 0 50px 20px",
          width: "100%"
        }
      };
    }), (0, o.$j)(function (e, t) {
      var n = t.windowId;
      return {
        canvases: (0, _.LU)(e, {
          windowId: n
        }),
        viewingDirection: (0, W.Xf)(e, {
          windowId: n
        })
      };
    }), (0, i.A)("GalleryView"))(V);
  }
}]);