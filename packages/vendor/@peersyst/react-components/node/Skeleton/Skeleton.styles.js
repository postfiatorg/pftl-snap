"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SkeletonRoot = void 0;
var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));
var _styledComponents = _interopRequireWildcard(require("styled-components"));
var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9;
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
var wave = (0, _styledComponents.keyframes)(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n  0% {\n    transform: translateX(-100%);\n  }\n\n  40% {\n    transform: translateX(100%);\n  }\n\n  100% {\n    transform: translateX(100%);\n  }\n"])));
var pulse = (0, _styledComponents.keyframes)(_templateObject2 || (_templateObject2 = (0, _taggedTemplateLiteral2["default"])(["\n  0% {\n    opacity: 0;\n  }\n\n  40% {\n    opacity: 1;\n  }\n\n  100% {\n    opacity: 0;\n  }\n"])));
var SkeletonRoot = exports.SkeletonRoot = _styledComponents["default"].span(_templateObject3 || (_templateObject3 = (0, _taggedTemplateLiteral2["default"])(["\n  ", "\n  }\n\n  ", "\n"])), function (_ref) {
  var theme = _ref.theme,
    appearance = _ref.appearance;
  return theme.palette.mode === "light" || appearance === "light" ? (0, _styledComponents.css)(_templateObject4 || (_templateObject4 = (0, _taggedTemplateLiteral2["default"])(["\n                --skeleton-bg: rgba(0, 0, 0, 0.11);\n                --skeleton-wave: linear-gradient(\n                    90deg,\n                    transparent,\n                    rgba(0, 0, 0, 0.04),\n                    transparent\n                );\n                --skeleton-pulse: rgba(0, 0, 0, 0.12);\n            "]))) : (0, _styledComponents.css)(_templateObject5 || (_templateObject5 = (0, _taggedTemplateLiteral2["default"])(["\n                --skeleton-bg: rgba(255, 255, 255, 0.13);\n                --skeleton-wave: linear-gradient(\n                    90deg,\n                    transparent,\n                    rgba(255, 255, 255, 0.08),\n                    transparent\n                );\n                --skeleton-pulse: rgba(255, 255, 255, 0.14);\n            "])));
}, function (_ref2) {
  var isLoading = _ref2.isLoading,
    animation = _ref2.animation,
    width = _ref2.width,
    height = _ref2.height,
    shape = _ref2.shape;
  return isLoading ? (0, _styledComponents.css)(_templateObject6 || (_templateObject6 = (0, _taggedTemplateLiteral2["default"])(["\n      position: relative;\n      isolation: isolate;\n      display: block;\n      overflow: hidden;\n      width: ", ";\n      height: ", ";\n      border-radius: ", ";\n    \n    }\n    \n    > * {\n    opacity: 0 !important;\n    }\n            \n    &:before {\n      content: '';\n      position: absolute;\n      top: 0;\n      left: 0;\n      width: 100%;\n      height: 100%;\n      z-index: 1;\n      background-color: var(--skeleton-bg);\n    }\n\n    &:after {\n      content: '';\n      position: absolute;\n      top: 0;\n      left: 0;\n      z-index: 2;\n      width: 100%;\n      height: 100%;\n\n      ", "\n  "])), width, height, function (_ref3) {
    var theme = _ref3.theme;
    switch (shape) {
      case "rectangular":
        return 0;
      case "circular":
        return "100%";
      case "stadium":
        return theme.borderRadius;
    }
  }, function () {
    if (animation === "wave") return (0, _styledComponents.css)(_templateObject7 || (_templateObject7 = (0, _taggedTemplateLiteral2["default"])(["\n                  animation: 1.6s linear 0.5s infinite normal none running ", ";\n                  background: var(--skeleton-wave);\n                  transform: translateX(-100%);\n                  inset: 0;\n              "])), wave);else if (animation === "pulse") return (0, _styledComponents.css)(_templateObject8 || (_templateObject8 = (0, _taggedTemplateLiteral2["default"])(["\n                  background-color: var(--skeleton-pulse);\n                  opacity: 0;\n                  animation: 1.5s ease-in-out 0.5s infinite normal none running ", ";\n              "])), pulse);else return;
  }) : (0, _styledComponents.css)(_templateObject9 || (_templateObject9 = (0, _taggedTemplateLiteral2["default"])(["\n                display: contents;\n            "])));
});