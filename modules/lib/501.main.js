"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
(self.webpackChunkmirador_integration_codecs = self.webpackChunkmirador_integration_codecs || []).push([[501], {
  69199: function _(t, e, n) {
    var o = n(89881),
      r = n(98612);
    t.exports = function (t, e) {
      var n = -1,
        i = r(t) ? Array(t.length) : [];
      return o(t, function (t, o, r) {
        i[++n] = e(t, o, r);
      }), i;
    };
  },
  82689: function _(t, e, n) {
    var o = n(29932),
      r = n(97786),
      i = n(67206),
      a = n(69199),
      s = n(71131),
      c = n(7518),
      l = n(85022),
      u = n(6557),
      d = n(1469);
    t.exports = function (t, e, n) {
      e = e.length ? o(e, function (t) {
        return d(t) ? function (e) {
          return r(e, 1 === t.length ? t[0] : t);
        } : t;
      }) : [u];
      var f = -1;
      e = o(e, c(i));
      var h = a(t, function (t, n, r) {
        return {
          criteria: o(e, function (e) {
            return e(t);
          }),
          index: ++f,
          value: t
        };
      });
      return s(h, function (t, e) {
        return l(t, e, n);
      });
    };
  },
  71131: function _(t) {
    t.exports = function (t, e) {
      var n = t.length;
      for (t.sort(e); n--;) t[n] = t[n].value;
      return t;
    };
  },
  36128: function _(t, e, n) {
    var o = n(20731),
      r = n(21078),
      i = n(45652);
    t.exports = function (t, e, n) {
      var a = t.length;
      if (a < 2) return a ? i(t[0]) : [];
      for (var s = -1, c = Array(a); ++s < a;) for (var l = t[s], u = -1; ++u < a;) u != s && (c[s] = o(c[s] || l, t[u], e, n));
      return i(r(c, 1), e, n);
    };
  },
  26393: function _(t, e, n) {
    var o = n(33448);
    t.exports = function (t, e) {
      if (t !== e) {
        var n = void 0 !== t,
          r = null === t,
          i = t == t,
          a = o(t),
          s = void 0 !== e,
          c = null === e,
          l = e == e,
          u = o(e);
        if (!c && !u && !a && t > e || a && s && l && !c && !u || r && s && l || !n && l || !i) return 1;
        if (!r && !a && !u && t < e || u && n && i && !r && !a || c && n && i || !s && i || !l) return -1;
      }
      return 0;
    };
  },
  85022: function _(t, e, n) {
    var o = n(26393);
    t.exports = function (t, e, n) {
      for (var r = -1, i = t.criteria, a = e.criteria, s = i.length, c = n.length; ++r < s;) {
        var l = o(i[r], a[r]);
        if (l) return r >= c ? l : l * ("desc" == n[r] ? -1 : 1);
      }
      return t.index - e.index;
    };
  },
  16612: function _(t, e, n) {
    var o = n(77813),
      r = n(98612),
      i = n(65776),
      a = n(13218);
    t.exports = function (t, e, n) {
      if (!a(n)) return !1;
      var s = _typeof(e);
      return !!("number" == s ? r(n) && i(e, n.length) : "string" == s && e in n) && o(n[e], t);
    };
  },
  89734: function _(t, e, n) {
    var o = n(21078),
      r = n(82689),
      i = n(5976),
      a = n(16612),
      s = i(function (t, e) {
        if (null == t) return [];
        var n = e.length;
        return n > 1 && a(t, e[0], e[1]) ? e = [] : n > 2 && a(e[0], e[1], e[2]) && (e = [e[0]]), r(t, o(e, 1), []);
      });
    t.exports = s;
  },
  76566: function _(t, e, n) {
    var o = n(34963),
      r = n(5976),
      i = n(36128),
      a = n(29246),
      s = r(function (t) {
        return i(o(t, a));
      });
    t.exports = s;
  },
  26501: function _(t, e, n) {
    "use strict";

    n.r(e), n.d(e, {
      "default": function _default() {
        return pt;
      }
    });
    var o = n(97779),
      r = n(28216),
      i = n(87217),
      a = n(52543),
      s = n(85564),
      c = n.n(s),
      l = n(11196),
      u = n(67294),
      d = n(23279),
      f = n.n(d),
      h = n(18446),
      v = n.n(h),
      p = n(69203),
      g = n.n(p),
      y = n(94184),
      w = n.n(y),
      m = n(81720),
      b = n(73935),
      A = n(89734),
      O = n.n(A),
      x = n(76566),
      I = n.n(x);
    function C(t, e) {
      for (var n = 0; n < e.length; n++) {
        var o = e[n];
        o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(t, o.key, o);
      }
    }
    var k = function () {
      function t(e, n) {
        !function (t, e) {
          if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
        }(this, t), this.viewer = e, this.ref = n, this.containerWidth = 0, this.containerHeight = 0, this.imgAspectRatio = 1;
      }
      var e, n;
      return e = t, (n = [{
        key: "canvas",
        get: function get() {
          return this.canvasDiv.firstElementChild;
        }
      }, {
        key: "canvasDiv",
        get: function get() {
          return this.ref.current;
        }
      }, {
        key: "context2d",
        get: function get() {
          return this.canvas.getContext("2d");
        }
      }, {
        key: "clear",
        value: function value() {
          this.context2d.clearRect(0, 0, this.containerWidth, this.containerHeight);
        }
      }, {
        key: "resize",
        value: function value() {
          this.containerWidth !== this.viewer.container.clientWidth && (this.containerWidth = this.viewer.container.clientWidth, this.canvasDiv.setAttribute("width", this.containerWidth), this.canvas.setAttribute("width", this.containerWidth)), this.containerHeight !== this.viewer.container.clientHeight && (this.containerHeight = this.viewer.container.clientHeight, this.canvasDiv.setAttribute("height", this.containerHeight), this.canvas.setAttribute("height", this.containerHeight)), this.viewportOrigin = new (g().Point)(0, 0);
          var t = this.viewer.viewport.getBoundsNoRotate(!0);
          this.viewportOrigin.x = t.x, this.viewportOrigin.y = t.y * this.imgAspectRatio, this.viewportWidth = t.width, this.viewportHeight = t.height * this.imgAspectRatio;
          var e = this.viewer.world.getItemAt(0);
          e && (this.imgWidth = e.source.dimensions.x, this.imgHeight = e.source.dimensions.y, this.imgAspectRatio = this.imgWidth / this.imgHeight);
        }
      }, {
        key: "canvasUpdate",
        value: function value(t) {
          var e = this.viewer.viewport.getZoom(!0),
            n = this.viewer.world.getItemAt(0);
          if (n) {
            var o = n.viewportToImageZoom(e),
              r = (this.viewportOrigin.x / this.imgWidth - this.viewportOrigin.x) / this.viewportWidth * this.containerWidth,
              i = (this.viewportOrigin.y / this.imgHeight - this.viewportOrigin.y) / this.viewportHeight * this.containerHeight;
            this.clearBeforeRedraw && this.clear(), this.context2d.translate(r, i), this.context2d.scale(o, o);
            var a = this.viewer.viewport.getCenter();
            this.viewer.viewport.getFlip() && (this.context2d.translate(2 * a.x, 0), this.context2d.scale(-1, 1));
            var s = this.viewer.viewport.getRotation();
            0 !== s && (this.context2d.translate(a.x, a.y), this.context2d.rotate(s * Math.PI / 180), this.context2d.translate(-1 * a.x, -1 * a.y)), t(), this.context2d.setTransform(1, 0, 0, 1, 0, 0);
          }
        }
      }]) && C(e.prototype, n), t;
    }();
    function j(t) {
      return function (t) {
        if (Array.isArray(t)) return P(t);
      }(t) || function (t) {
        if ("undefined" != typeof Symbol && null != t[Symbol.iterator] || null != t["@@iterator"]) return Array.from(t);
      }(t) || function (t, e) {
        if (t) {
          if ("string" == typeof t) return P(t, e);
          var n = Object.prototype.toString.call(t).slice(8, -1);
          return "Object" === n && t.constructor && (n = t.constructor.name), "Map" === n || "Set" === n ? Array.from(t) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? P(t, e) : void 0;
        }
      }(t) || function () {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
      }();
    }
    function P(t, e) {
      (null == e || e > t.length) && (e = t.length);
      for (var n = 0, o = new Array(e); n < e; n++) o[n] = t[n];
      return o;
    }
    function S(t, e) {
      for (var n = 0; n < e.length; n++) {
        var o = e[n];
        o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(t, o.key, o);
      }
    }
    var R = function () {
      function t(e) {
        var n = e.resource,
          o = e.palette,
          r = e.zoomRatio,
          i = e.offset,
          a = e.selected,
          s = e.hovered;
        !function (t, e) {
          if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
        }(this, t), this.resource = n, this.palette = o, this.zoomRatio = r, this.offset = i, this.selected = a, this.hovered = s;
      }
      var e, n;
      return e = t, (n = [{
        key: "toContext",
        value: function value(t) {
          this.context = t, this.resource.svgSelector ? this.svgContext() : this.resource.fragmentSelector && this.fragmentContext();
        }
      }, {
        key: "svgString",
        get: function get() {
          return this.resource.svgSelector.value;
        }
      }, {
        key: "svgContext",
        value: function value() {
          var t,
            e = this;
          0 !== (t = this.hovered ? this.palette.hovered : this.selected ? this.palette.selected : this.palette["default"]).globalAlpha && j(this.svgPaths).forEach(function (n) {
            e.context.save(), e.context.translate(e.offset.x, e.offset.y);
            var o = new Path2D(n.attributes.d.nodeValue);
            e.context.strokeStyle = e.color, n.attributes["stroke-dasharray"] && e.context.setLineDash(n.attributes["stroke-dasharray"].nodeValue.split(","));
            var r = {
              fill: "fillStyle",
              stroke: "strokeStyle",
              "stroke-dashoffset": "lineDashOffset",
              "stroke-linecap": "lineCap",
              "stroke-linejoin": "lineJoin",
              "stroke-miterlimit": "miterlimit",
              "stroke-width": "lineWidth"
            };
            Object.keys(r).forEach(function (t) {
              n.attributes[t] && (e.context[r[t]] = n.attributes[t].nodeValue);
            }), e.context.lineWidth /= e.zoomRatio, (e.selected || e.hovered) && (e.context.strokeStyle = t.strokeStyle || t.fillStyle), n.attributes["stroke-opacity"] ? e.context.globalAlpha = t.globalAlpha * n.attributes["stroke-opacity"].nodeValue : e.context.globalAlpha = t.globalAlpha, e.context.stroke(o), n.attributes.fill && "none" !== n.attributes.fill.nodeValue && (n.attributes["fill-opacity"] ? e.context.globalAlpha = t.globalAlpha * n.attributes["fill-opacity"].nodeValue : e.context.globalAlpha = t.globalAlpha, e.context.fill(o)), e.context.restore();
          });
        }
      }, {
        key: "fragmentContext",
        value: function value() {
          var t,
            e,
            n,
            o = this,
            r = this.resource.fragmentSelector;
          r[0] += this.offset.x, r[1] += this.offset.y, t = this.selected ? this.palette.selected : this.hovered ? this.palette.hovered : this.palette["default"], this.context.save(), Object.keys(t).forEach(function (e) {
            o.context[e] = t[e];
          }), 0 !== t.globalAlpha && (t.fillStyle ? (e = this.context).fillRect.apply(e, j(r)) : (this.context.lineWidth = 1 / this.zoomRatio, (n = this.context).strokeRect.apply(n, j(r))), this.context.restore());
        }
      }, {
        key: "svgPaths",
        get: function get() {
          return new DOMParser().parseFromString(this.svgString, "text/xml").getElementsByTagName("path");
        }
      }]) && S(e.prototype, n), t;
    }();
    function T(t, e) {
      var n = Object.keys(t);
      if (Object.getOwnPropertySymbols) {
        var o = Object.getOwnPropertySymbols(t);
        e && (o = o.filter(function (e) {
          return Object.getOwnPropertyDescriptor(t, e).enumerable;
        })), n.push.apply(n, o);
      }
      return n;
    }
    function E(t) {
      for (var e = 1; e < arguments.length; e++) {
        var n = null != arguments[e] ? arguments[e] : {};
        e % 2 ? T(Object(n), !0).forEach(function (e) {
          M(t, e, n[e]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : T(Object(n)).forEach(function (e) {
          Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
        });
      }
      return t;
    }
    function M(t, e, n) {
      return e in t ? Object.defineProperty(t, e, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : t[e] = n, t;
    }
    function W(t) {
      return function (t) {
        if (Array.isArray(t)) return z(t);
      }(t) || function (t) {
        if ("undefined" != typeof Symbol && null != t[Symbol.iterator] || null != t["@@iterator"]) return Array.from(t);
      }(t) || H(t) || function () {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
      }();
    }
    function D(t, e) {
      return function (t) {
        if (Array.isArray(t)) return t;
      }(t) || function (t, e) {
        var n = null == t ? null : "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
        if (null != n) {
          var o,
            r,
            i = [],
            a = !0,
            s = !1;
          try {
            for (n = n.call(t); !(a = (o = n.next()).done) && (i.push(o.value), !e || i.length !== e); a = !0);
          } catch (t) {
            s = !0, r = t;
          } finally {
            try {
              a || null == n["return"] || n["return"]();
            } finally {
              if (s) throw r;
            }
          }
          return i;
        }
      }(t, e) || H(t, e) || function () {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
      }();
    }
    function H(t, e) {
      if (t) {
        if ("string" == typeof t) return z(t, e);
        var n = Object.prototype.toString.call(t).slice(8, -1);
        return "Object" === n && t.constructor && (n = t.constructor.name), "Map" === n || "Set" === n ? Array.from(t) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? z(t, e) : void 0;
      }
    }
    function z(t, e) {
      (null == e || e > t.length) && (e = t.length);
      for (var n = 0, o = new Array(e); n < e; n++) o[n] = t[n];
      return o;
    }
    function V(t, e) {
      for (var n = 0; n < e.length; n++) {
        var o = e[n];
        o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(t, o.key, o);
      }
    }
    function U(t, e) {
      return U = Object.setPrototypeOf || function (t, e) {
        return t.__proto__ = e, t;
      }, U(t, e);
    }
    function _(t) {
      if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return t;
    }
    function B(t) {
      return B = Object.setPrototypeOf ? Object.getPrototypeOf : function (t) {
        return t.__proto__ || Object.getPrototypeOf(t);
      }, B(t);
    }
    var F = function (t) {
      !function (t, e) {
        if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
        t.prototype = Object.create(e && e.prototype, {
          constructor: {
            value: t,
            writable: !0,
            configurable: !0
          }
        }), e && U(t, e);
      }(s, t);
      var e,
        n,
        o,
        r,
        i,
        a = (r = s, i = function () {
          if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
          if (Reflect.construct.sham) return !1;
          if ("function" == typeof Proxy) return !0;
          try {
            return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0;
          } catch (t) {
            return !1;
          }
        }(), function () {
          var t,
            e = B(r);
          if (i) {
            var n = B(this).constructor;
            t = Reflect.construct(e, arguments, n);
          } else t = e.apply(this, arguments);
          return function (t, e) {
            if (e && ("object" == _typeof(e) || "function" == typeof e)) return e;
            if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined");
            return _(t);
          }(this, t);
        });
      function s(t) {
        var e;
        return function (t, e) {
          if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
        }(this, s), (e = a.call(this, t)).ref = u.createRef(), e.osdCanvasOverlay = null, e.updateCanvas = function () {}, e.onUpdateViewport = e.onUpdateViewport.bind(_(e)), e.onCanvasClick = e.onCanvasClick.bind(_(e)), e.onCanvasMouseMove = f()(e.onCanvasMouseMove.bind(_(e)), 10), e.onCanvasExit = e.onCanvasExit.bind(_(e)), e;
      }
      return e = s, n = [{
        key: "componentDidMount",
        value: function value() {
          this.initializeViewer();
        }
      }, {
        key: "componentDidUpdate",
        value: function value(t) {
          var e = this.props,
            n = e.drawAnnotations,
            o = e.drawSearchAnnotations,
            r = e.annotations,
            i = e.searchAnnotations,
            a = e.hoveredAnnotationIds,
            c = e.selectedAnnotationId,
            l = e.highlightAllAnnotations,
            u = e.viewer;
          this.initializeViewer();
          var d = !s.annotationsMatch(r, t.annotations),
            f = !s.annotationsMatch(i, t.searchAnnotations),
            h = I()(a, t.hoveredAnnotationIds).length > 0;
          this.osdCanvasOverlay && h && (a.length > 0 ? this.osdCanvasOverlay.canvasDiv.style.cursor = "pointer" : this.osdCanvasOverlay.canvasDiv.style.cursor = "");
          var v = c !== t.selectedAnnotationId,
            p = n !== t.drawAnnotations || o !== t.drawSearchAnnotations || l !== t.highlightAllAnnotations;
          (f || d || v || h || p) && (this.updateCanvas = this.canvasUpdateCallback(), u.forceRedraw());
        }
      }, {
        key: "componentWillUnmount",
        value: function value() {
          var t = this.props.viewer;
          t.removeHandler("canvas-click", this.onCanvasClick), t.removeHandler("canvas-exit", this.onCanvasExit), t.removeHandler("update-viewport", this.onUpdateViewport), t.removeHandler("mouse-move", this.onCanvasMouseMove);
        }
      }, {
        key: "onCanvasClick",
        value: function value(t) {
          var e = this,
            n = this.props.canvasWorld,
            o = t.position,
            r = t.eventSource.viewport.pointFromPixel(o),
            i = n.canvasAtPoint(r);
          if (i) {
            var a = D(n.canvasToWorldCoordinates(i.id), 4),
              s = (a[0], a[1], a[2]),
              c = a[3],
              l = this.annotationsAtPoint(i, r);
            if (l.length > 0 && (t.preventDefaultAction = !0), 1 === l.length) this.toggleAnnotation(l[0].id);else if (l.length > 0) {
              var u = function u(t) {
                  var n = Math.PI / 180;
                  return function (o) {
                    for (var a = 0, s = 0; s < 360; s += 1) {
                      var c = Math.cos(s * n) * t + r.x,
                        l = Math.sin(s * n) * t + r.y;
                      e.isAnnotationAtPoint(o, i, {
                        x: c,
                        y: l
                      }) && (a += 1);
                    }
                    return {
                      anno: o,
                      score: a
                    };
                  };
                },
                d = [],
                f = 1;
              for (d = O()(l.map(u(f)), "score"); f < Math.max(s, c) && d[0].score === d[1].score;) f *= 2, d = O()(l.map(u(f)), "score");
              this.toggleAnnotation(d[0].anno.id);
            }
          }
        }
      }, {
        key: "onCanvasMouseMove",
        value: function value(t) {
          var e = this.props,
            n = e.annotations,
            o = e.canvasWorld,
            r = e.hoverAnnotation,
            i = e.hoveredAnnotationIds,
            a = e.searchAnnotations,
            s = e.viewer,
            c = e.windowId;
          if (0 !== n.length || 0 !== a.length) {
            var l = t.position,
              u = s.viewport.pointFromPixel(l),
              d = o.canvasAtPoint(u);
            if (d) {
              var f = this.annotationsAtPoint(d, u);
              I()(i, f.map(function (t) {
                return t.id;
              })).length > 0 && r(c, f.map(function (t) {
                return t.id;
              }));
            } else r(c, []);
          }
        }
      }, {
        key: "onCanvasExit",
        value: function value(t) {
          var e = this.props,
            n = e.hoverAnnotation,
            o = e.windowId;
          this.onCanvasMouseMove.cancel(), n(o, []);
        }
      }, {
        key: "onUpdateViewport",
        value: function value(t) {
          this.updateCanvas();
        }
      }, {
        key: "initializeViewer",
        value: function value() {
          var t = this.props.viewer;
          t && (this.osdCanvasOverlay || (this.osdCanvasOverlay = new k(t, this.ref), t.addHandler("canvas-click", this.onCanvasClick), t.addHandler("canvas-exit", this.onCanvasExit), t.addHandler("update-viewport", this.onUpdateViewport), t.addHandler("mouse-move", this.onCanvasMouseMove), this.updateCanvas = this.canvasUpdateCallback()));
        }
      }, {
        key: "canvasUpdateCallback",
        value: function value() {
          var t = this;
          return function () {
            t.osdCanvasOverlay.clear(), t.osdCanvasOverlay.resize(), t.osdCanvasOverlay.canvasUpdate(t.renderAnnotations.bind(t));
          };
        }
      }, {
        key: "isAnnotationAtPoint",
        value: function value(t, e, n) {
          var o = D(this.props.canvasWorld.canvasToWorldCoordinates(e.id), 2),
            r = o[0],
            i = o[1],
            a = n.x - r,
            s = n.y - i;
          if (t.svgSelector) {
            var c = this.osdCanvasOverlay.context2d;
            return W(new R({
              resource: t
            }).svgPaths).some(function (t) {
              return c.isPointInPath(new Path2D(t.attributes.d.nodeValue), a, s);
            });
          }
          if (t.fragmentSelector) {
            var l = D(t.fragmentSelector, 4),
              u = l[0],
              d = l[1],
              f = l[2],
              h = l[3];
            return u <= a && a <= u + f && d <= s && s <= d + h;
          }
          return !1;
        }
      }, {
        key: "annotationsAtPoint",
        value: function value(t, e) {
          var n = this,
            o = this.props,
            r = o.annotations,
            i = o.searchAnnotations,
            a = [].concat(W(r), W(i));
          return c()(a.map(function (t) {
            return t.resources;
          })).filter(function (o) {
            return t.id === o.targetId && n.isAnnotationAtPoint(o, t, e);
          });
        }
      }, {
        key: "toggleAnnotation",
        value: function value(t) {
          var e = this.props,
            n = e.selectedAnnotationId,
            o = e.selectAnnotation,
            r = e.deselectAnnotation,
            i = e.windowId;
          n === t ? r(i, t) : o(i, t);
        }
      }, {
        key: "annotationsToContext",
        value: function value(t, e) {
          var n = this.props,
            o = n.highlightAllAnnotations,
            r = n.hoveredAnnotationIds,
            i = n.selectedAnnotationId,
            a = n.canvasWorld,
            s = n.viewer,
            c = this.osdCanvasOverlay.context2d,
            l = s.viewport.getZoom(!0) / s.viewport.getMaxZoom();
          t.forEach(function (t) {
            t.resources.forEach(function (t) {
              if (a.canvasIds.includes(t.targetId)) {
                var n = a.offsetByCanvas(t.targetId);
                new R({
                  hovered: r.includes(t.id),
                  offset: n,
                  palette: E(E({}, e), {}, {
                    "default": E(E({}, e["default"]), !o && e.hidden)
                  }),
                  resource: t,
                  selected: i === t.id,
                  zoomRatio: l
                }).toContext(c);
              }
            });
          });
        }
      }, {
        key: "renderAnnotations",
        value: function value() {
          var t = this.props,
            e = t.annotations,
            n = t.drawAnnotations,
            o = t.drawSearchAnnotations,
            r = t.searchAnnotations,
            i = t.palette;
          o && this.annotationsToContext(r, i.search), n && this.annotationsToContext(e, i.annotations);
        }
      }, {
        key: "render",
        value: function value() {
          var t = this.props.viewer;
          return t ? b.createPortal(u.createElement("div", {
            ref: this.ref,
            style: {
              height: "100%",
              left: 0,
              position: "absolute",
              top: 0,
              width: "100%"
            }
          }, u.createElement("canvas", null)), t.canvas) : u.createElement(u.Fragment, null);
        }
      }], o = [{
        key: "annotationsMatch",
        value: function value(t, e) {
          return !t && !e || !(t && !e || !t && e) && (0 === t.length && 0 === e.length || t.length === e.length && t.every(function (t, n) {
            var o = t.resources.map(function (t) {
                return t.id;
              }),
              r = e[n].resources.map(function (t) {
                return t.id;
              });
            return 0 === o.length && 0 === r.length || o.length === r.length && !(t.id !== e[n].id || !v()(o, r));
          }));
        }
      }], n && V(e.prototype, n), o && V(e, o), s;
    }(u.Component);
    F.defaultProps = {
      annotations: [],
      deselectAnnotation: function deselectAnnotation() {},
      drawAnnotations: !0,
      drawSearchAnnotations: !0,
      highlightAllAnnotations: !1,
      hoverAnnotation: function hoverAnnotation() {},
      hoveredAnnotationIds: [],
      palette: {},
      searchAnnotations: [],
      selectAnnotation: function selectAnnotation() {},
      selectedAnnotationId: void 0,
      viewer: null
    };
    var Z = n(73953),
      N = n(32012),
      $ = n(42383),
      J = n(1172),
      X = n(80923),
      q = n(81610),
      Y = n(51580),
      G = {
        deselectAnnotation: Z.D6,
        hoverAnnotation: Z.G3,
        selectAnnotation: Z.XD
      };
    var L = (0, o.qC)((0, i.Z)(), (0, r.$j)(function (t, e) {
      var n = e.windowId;
      return {
        annotations: (0, N.A7)(t, {
          windowId: n
        }),
        canvasWorld: (0, $.B)(t, {
          windowId: n
        }),
        drawAnnotations: (0, J.iE)(t).window.forceDrawAnnotations || (0, X.ig)(t, {
          content: "annotations",
          windowId: n
        }).length > 0,
        drawSearchAnnotations: (0, J.iE)(t).window.forceDrawAnnotations || (0, X.ig)(t, {
          content: "search",
          windowId: n
        }).length > 0,
        highlightAllAnnotations: (0, q.Jj)(t, {
          windowId: n
        }).highlightAllAnnotations,
        hoveredAnnotationIds: (0, q.Jj)(t, {
          windowId: n
        }).hoveredAnnotationIds,
        palette: (0, J.gh)(t).palette,
        searchAnnotations: (0, Y.kM)(t, {
          windowId: n
        }),
        selectedAnnotationId: (0, N.EO)(t, {
          windowId: n
        })
      };
    }, G), (0, l.A)("AnnotationsOverlay"))(F);
    var K = n(95450),
      Q = {
        get: function get(t) {
          return this.refs[t];
        },
        refs: {},
        set: function set(t, e) {
          this.refs[t] = e;
        }
      };
    function tt(t, e, n) {
      return tt = lt() ? Reflect.construct : function (t, e, n) {
        var o = [null];
        o.push.apply(o, e);
        var r = new (Function.bind.apply(t, o))();
        return n && st(r, n.prototype), r;
      }, tt.apply(null, arguments);
    }
    function et(t) {
      return function (t) {
        if (Array.isArray(t)) return nt(t);
      }(t) || function (t) {
        if ("undefined" != typeof Symbol && null != t[Symbol.iterator] || null != t["@@iterator"]) return Array.from(t);
      }(t) || function (t, e) {
        if (t) {
          if ("string" == typeof t) return nt(t, e);
          var n = Object.prototype.toString.call(t).slice(8, -1);
          return "Object" === n && t.constructor && (n = t.constructor.name), "Map" === n || "Set" === n ? Array.from(t) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? nt(t, e) : void 0;
        }
      }(t) || function () {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
      }();
    }
    function nt(t, e) {
      (null == e || e > t.length) && (e = t.length);
      for (var n = 0, o = new Array(e); n < e; n++) o[n] = t[n];
      return o;
    }
    function ot(t, e) {
      var n = Object.keys(t);
      if (Object.getOwnPropertySymbols) {
        var o = Object.getOwnPropertySymbols(t);
        e && (o = o.filter(function (e) {
          return Object.getOwnPropertyDescriptor(t, e).enumerable;
        })), n.push.apply(n, o);
      }
      return n;
    }
    function rt(t) {
      for (var e = 1; e < arguments.length; e++) {
        var n = null != arguments[e] ? arguments[e] : {};
        e % 2 ? ot(Object(n), !0).forEach(function (e) {
          it(t, e, n[e]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : ot(Object(n)).forEach(function (e) {
          Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
        });
      }
      return t;
    }
    function it(t, e, n) {
      return e in t ? Object.defineProperty(t, e, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : t[e] = n, t;
    }
    function at(t, e) {
      for (var n = 0; n < e.length; n++) {
        var o = e[n];
        o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(t, o.key, o);
      }
    }
    function st(t, e) {
      return st = Object.setPrototypeOf || function (t, e) {
        return t.__proto__ = e, t;
      }, st(t, e);
    }
    function ct(t) {
      if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return t;
    }
    function lt() {
      if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
      if (Reflect.construct.sham) return !1;
      if ("function" == typeof Proxy) return !0;
      try {
        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0;
      } catch (t) {
        return !1;
      }
    }
    function ut(t) {
      return ut = Object.setPrototypeOf ? Object.getPrototypeOf : function (t) {
        return t.__proto__ || Object.getPrototypeOf(t);
      }, ut(t);
    }
    var dt = function (t) {
      !function (t, e) {
        if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
        t.prototype = Object.create(e && e.prototype, {
          constructor: {
            value: t,
            writable: !0,
            configurable: !0
          }
        }), e && st(t, e);
      }(a, t);
      var e,
        n,
        o,
        r,
        i = (o = a, r = lt(), function () {
          var t,
            e = ut(o);
          if (r) {
            var n = ut(this).constructor;
            t = Reflect.construct(e, arguments, n);
          } else t = e.apply(this, arguments);
          return function (t, e) {
            if (e && ("object" == _typeof(e) || "function" == typeof e)) return e;
            if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined");
            return ct(t);
          }(this, t);
        });
      function a(t) {
        var e;
        return function (t, e) {
          if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
        }(this, a), (e = i.call(this, t)).state = {
          viewer: void 0
        }, e.ref = u.createRef(), e.apiRef = u.createRef(), Q.set(t.windowId, e.apiRef), e.onCanvasMouseMove = f()(e.onCanvasMouseMove.bind(ct(e)), 10), e.onViewportChange = e.onViewportChange.bind(ct(e)), e.zoomToWorld = e.zoomToWorld.bind(ct(e)), e.osdUpdating = !1, e;
      }
      return e = a, n = [{
        key: "componentDidMount",
        value: function value() {
          var t = this,
            e = this.props,
            n = e.osdConfig,
            o = e.t,
            r = e.windowId;
          if (this.ref.current) {
            var i = new (g())(rt({
                id: this.ref.current.id
              }, n)),
              a = i.canvas && i.canvas.firstElementChild;
            a && (a.setAttribute("role", "img"), a.setAttribute("aria-label", o("digitizedView")), a.setAttribute("aria-describedby", "".concat(r, "-osd"))), this.apiRef.current = i, this.setState({
              viewer: i
            }), i.addHandler("animation-start", function () {
              t.osdUpdating = !0;
            }), i.addHandler("animation-finish", this.onViewportChange), i.addHandler("animation-finish", function () {
              t.osdUpdating = !1;
            }), i.innerTracker && (i.innerTracker.moveHandler = this.onCanvasMouseMove);
          }
        }
      }, {
        key: "componentDidUpdate",
        value: function value(t, e) {
          var n = this.props,
            o = n.viewerConfig,
            r = n.canvasWorld,
            i = this.state.viewer;
          if (this.apiRef.current = i, void 0 === e.viewer) return o && (i.viewport.panTo(o, !0), i.viewport.zoomTo(o.zoom, o, !0), void 0 !== o.degrees && i.viewport.setRotation(o.degrees), void 0 !== o.flip && i.viewport.setFlip(o.flip)), void this.addAllImageSources(!o);
          if (this.infoResponsesMatch(t.infoResponses) && this.nonTiledImagedMatch(t.nonTiledImages)) {
            if (v()(r.layers, t.canvasWorld.layers)) {
              if (o && !this.osdUpdating) {
                var a = i.viewport;
                o.x === a.centerSpringX.target.value && o.y === a.centerSpringY.target.value || a.panTo(o, !1), o.zoom !== a.zoomSpring.target.value && a.zoomTo(o.zoom, o, !1), o.rotation !== a.getRotation() && a.setRotation(o.rotation), o.flip !== a.getFlip() && a.setFlip(o.flip);
              }
            } else this.refreshTileProperties();
          } else {
            i.close();
            var s = !v()(r.canvasIds, t.canvasWorld.canvasIds);
            this.addAllImageSources(s || !o);
          }
        }
      }, {
        key: "componentWillUnmount",
        value: function value() {
          var t = this.state.viewer;
          t.innerTracker && t.innerTracker.moveHandler === this.onCanvasMouseMove && (t.innerTracker.moveHandler = null), t.removeAllHandlers(), this.apiRef.current = void 0;
        }
      }, {
        key: "onCanvasMouseMove",
        value: function value(t) {
          this.state.viewer.raiseEvent("mouse-move", t);
        }
      }, {
        key: "onViewportChange",
        value: function value(t) {
          var e = this.props,
            n = e.updateViewport,
            o = e.windowId,
            r = t.eventSource.viewport;
          n(o, {
            flip: r.getFlip(),
            rotation: r.getRotation(),
            x: Math.round(r.centerSpringX.target.value),
            y: Math.round(r.centerSpringY.target.value),
            zoom: r.zoomSpring.target.value
          });
        }
      }, {
        key: "addAllImageSources",
        value: function value() {
          var t = this,
            e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
            n = this.props,
            o = n.nonTiledImages,
            r = n.infoResponses;
          Promise.all(r.map(function (e) {
            return t.addTileSource(e);
          }), o.map(function (e) {
            return t.addNonTiledImage(e);
          })).then(function () {
            (r[0] || o[0]) && (e && t.zoomToWorld(), t.refreshTileProperties());
          });
        }
      }, {
        key: "addNonTiledImage",
        value: function value(t) {
          var e = this.props.canvasWorld,
            n = this.state.viewer,
            o = t.getProperty("type"),
            r = t.getProperty("format") || "";
          return "Image" === o || "dctypes:Image" === o || r.startsWith("image/") ? new Promise(function (o, r) {
            n || r(), n.addSimpleImage({
              error: function error(t) {
                return r(t);
              },
              fitBounds: tt(g().Rect, et(e.contentResourceToWorldCoordinates(t))),
              index: e.layerIndexOfImageResource(t),
              opacity: e.layerOpacityOfImageResource(t),
              success: function success(t) {
                return o(t);
              },
              url: t.id
            });
          }) : Promise.resolve();
        }
      }, {
        key: "addTileSource",
        value: function value(t) {
          var e = this.props.canvasWorld,
            n = this.state.viewer;
          return new Promise(function (o, r) {
            n || r();
            var i = rt({}, t.json),
              a = e.contentResource(t.id);
            a && n.addTiledImage({
              error: function error(t) {
                return r(t);
              },
              fitBounds: tt(g().Rect, et(e.contentResourceToWorldCoordinates(a))),
              index: e.layerIndexOfImageResource(a),
              opacity: e.layerOpacityOfImageResource(a),
              success: function success(t) {
                return o(t);
              },
              tileSource: i
            });
          });
        }
      }, {
        key: "refreshTileProperties",
        value: function value() {
          for (var t = this.props.canvasWorld, e = this.state.viewer.world, n = [], o = 0; o < e.getItemCount(); o += 1) n.push(e.getItemAt(o));
          n.forEach(function (n, o) {
            var r = t.contentResource(n.source["@id"] || n.source.id);
            if (r) {
              var i = t.layerIndexOfImageResource(r);
              o !== i && e.setItemIndex(n, i), n.setOpacity(t.layerOpacityOfImageResource(r));
            }
          });
        }
      }, {
        key: "fitBounds",
        value: function value(t, e, n, o) {
          var r = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4];
          this.state.viewer.viewport.fitBounds(new (g().Rect)(t, e, n, o), r);
        }
      }, {
        key: "infoResponsesMatch",
        value: function value(t) {
          var e = this.props.infoResponses;
          return 0 === e.length && 0 === t.length || e.length === t.length && e.every(function (e, n) {
            return !!(t[n] && e.json && t[n].json && e.tokenServiceId === t[n].tokenServiceId && (e.json["@id"] && e.json["@id"] === t[n].json["@id"] || e.json.id && e.json.id === t[n].json.id));
          });
        }
      }, {
        key: "nonTiledImagedMatch",
        value: function value(t) {
          var e = this.props.nonTiledImages;
          return 0 === e.length && 0 === t.length || e.some(function (e, n) {
            return !!t[n] && e.id === t[n].id;
          });
        }
      }, {
        key: "zoomToWorld",
        value: function value() {
          var t = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
            e = this.props.canvasWorld;
          this.fitBounds.apply(this, et(e.worldBounds()).concat([t]));
        }
      }, {
        key: "render",
        value: function value() {
          var t = this,
            e = this.props,
            n = e.children,
            o = e.classes,
            r = e.label,
            i = e.t,
            a = e.windowId,
            s = e.drawAnnotations,
            c = this.state.viewer,
            l = u.Children.map(n, function (e) {
              return u.cloneElement(e, {
                zoomToWorld: t.zoomToWorld
              });
            });
          return u.createElement(u.Fragment, null, u.createElement("section", {
            className: w()((0, m.Z)("osd-container"), o.osdContainer),
            id: "".concat(a, "-osd"),
            ref: this.ref,
            "aria-label": i("item", {
              label: r
            }),
            "aria-live": "polite"
          }, s && u.createElement(L, {
            viewer: c,
            windowId: a
          }), l, u.createElement(K.M, Object.assign({
            viewer: c
          }, rt(rt({}, this.props), {}, {
            children: null
          })))));
        }
      }], n && at(e.prototype, n), a;
    }(u.Component);
    dt.defaultProps = {
      children: null,
      drawAnnotations: !1,
      infoResponses: [],
      label: null,
      nonTiledImages: [],
      osdConfig: {},
      viewerConfig: null
    };
    var ft = n(36691),
      ht = n(49455),
      vt = {
        updateViewport: ft.WH
      };
    var pt = (0, o.qC)((0, a.Z)({
      osdContainer: {
        flex: 1,
        position: "relative"
      }
    }), (0, i.Z)(), (0, r.$j)(function (t, e) {
      var n = e.windowId,
        o = (0, $.B)(t, {
          windowId: n
        }),
        r = (0, ht.k5)(t),
        i = c()(o.canvases.map(function (t) {
          return t.imageServiceIds;
        }));
      return {
        canvasWorld: o,
        drawAnnotations: (0, J.iE)(t).window.forceDrawAnnotations || (0, X.ig)(t, {
          content: "annotations",
          windowId: n
        }).length > 0 || (0, X.ig)(t, {
          content: "search",
          windowId: n
        }).length > 0,
        infoResponses: i.map(function (t) {
          return r[t];
        }).filter(function (t) {
          return void 0 !== t && !1 === t.isFetching && void 0 === t.error;
        }),
        label: (0, ht.vt)(t, {
          canvasId: ((0, ht.Pm)(t, {
            windowId: n
          }) || {}).id,
          windowId: n
        }),
        nonTiledImages: (0, ht.Fg)(t, {
          windowId: n
        }),
        osdConfig: (0, J.iE)(t).osdConfig,
        viewerConfig: (0, q.gA)(t, {
          windowId: n
        })
      };
    }, vt), (0, l.A)("OpenSeadragonViewer"))(dt);
  }
}]);