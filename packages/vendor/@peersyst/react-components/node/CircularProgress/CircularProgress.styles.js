"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CircularProgressWrapper = exports.CircularProgressSvg = exports.CircularProgressRoot = exports.CircularProgressContent = exports.CircularProgressCircle = void 0;
var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));
var _styledComponents = _interopRequireWildcard(require("styled-components"));
var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject10;
/* Greatly inspired by MUI's `CircularProgress` */
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
var circularRotateKeyframe = (0, _styledComponents.keyframes)(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n  0% {\n    transform: rotate(0deg);\n  }\n\n  100% {\n    transform: rotate(360deg);\n  }\n"])));
var circularDashKeyframe = (0, _styledComponents.keyframes)(_templateObject2 || (_templateObject2 = (0, _taggedTemplateLiteral2["default"])(["\n  0% {\n    stroke-dasharray: 1px, 200px;\n    stroke-dashoffset: 0;\n  }\n\n  50% {\n    stroke-dasharray: 100px, 200px;\n    stroke-dashoffset: -15px;\n  }\n\n  100% {\n    stroke-dasharray: 100px, 200px;\n    stroke-dashoffset: -125px;\n  }\n"])));
function getCircularProgressRootStyles(value) {
  if (!value) {
    return (0, _styledComponents.css)(_templateObject3 || (_templateObject3 = (0, _taggedTemplateLiteral2["default"])(["\n            animation: ", " 1.4s linear infinite;\n        "])), circularRotateKeyframe);
  }
}
function getCircularProgressCircleStyles(value) {
  if (value) {
    return (0, _styledComponents.css)(_templateObject4 || (_templateObject4 = (0, _taggedTemplateLiteral2["default"])(["\n            transition: stroke-dashoffset 0.3s cubic-bezier(0.4, 0, 0.2, 1);\n        "])));
  } else {
    return (0, _styledComponents.css)(_templateObject5 || (_templateObject5 = (0, _taggedTemplateLiteral2["default"])(["\n            animation: ", " 1.4s ease-in-out infinite;\n            stroke-dasharray: 80px, 200px;\n            stroke-dashoffset: 0px;\n        "])), circularDashKeyframe);
  }
}
var CircularProgressRoot = exports.CircularProgressRoot = _styledComponents["default"].span(function (_ref) {
  var value = _ref.value;
  return (0, _styledComponents.css)(_templateObject6 || (_templateObject6 = (0, _taggedTemplateLiteral2["default"])(["\n        display: inline-block;\n        ", ";\n    "])), getCircularProgressRootStyles(value));
});
var CircularProgressSvg = exports.CircularProgressSvg = _styledComponents["default"].svg(function () {
  return (0, _styledComponents.css)(_templateObject7 || (_templateObject7 = (0, _taggedTemplateLiteral2["default"])(["\n        display: block;\n    "])));
});
var CircularProgressCircle = exports.CircularProgressCircle = _styledComponents["default"].circle(function (_ref2) {
  var value = _ref2.value;
  return (0, _styledComponents.css)(_templateObject8 || (_templateObject8 = (0, _taggedTemplateLiteral2["default"])(["\n        stroke: currentColor;\n        stroke-linecap: round;\n        ", ";\n    "])), getCircularProgressCircleStyles(value));
});
var CircularProgressContent = exports.CircularProgressContent = _styledComponents["default"].div(function () {
  return (0, _styledComponents.css)(_templateObject9 || (_templateObject9 = (0, _taggedTemplateLiteral2["default"])(["\n        top: 0;\n        left: 0;\n        bottom: 0;\n        right: 0;\n        position: absolute;\n        display: flex;\n        align-items: center;\n        justify-content: center;\n    "])));
});
var CircularProgressWrapper = exports.CircularProgressWrapper = _styledComponents["default"].div(function () {
  return (0, _styledComponents.css)(_templateObject10 || (_templateObject10 = (0, _taggedTemplateLiteral2["default"])(["\n        position: relative;\n        display: inline-flex;\n    "])));
});