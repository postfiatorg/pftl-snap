"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ToastContainer = exports.ToastAlert = void 0;
var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));
var _styledComponents = _interopRequireWildcard(require("styled-components"));
var _Alert = require("../Alert");
var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8;
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function getPosition(position) {
  switch (position) {
    case "bottom-center":
      return (0, _styledComponents.css)(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n                bottom: 24px;\n                left: 50%;\n                transform: translateX(-50%);\n            "])));
    case "bottom-left":
      return (0, _styledComponents.css)(_templateObject2 || (_templateObject2 = (0, _taggedTemplateLiteral2["default"])(["\n                bottom: 24px;\n                left: 24px;\n            "])));
    case "bottom-right":
      return (0, _styledComponents.css)(_templateObject3 || (_templateObject3 = (0, _taggedTemplateLiteral2["default"])(["\n                bottom: 24px;\n                right: 24px;\n            "])));
    case "top-center":
      return (0, _styledComponents.css)(_templateObject4 || (_templateObject4 = (0, _taggedTemplateLiteral2["default"])(["\n                top: 24px;\n                left: 50%;\n                transform: translateX(-50%);\n            "])));
    case "top-left":
      return (0, _styledComponents.css)(_templateObject5 || (_templateObject5 = (0, _taggedTemplateLiteral2["default"])(["\n                top: 24px;\n                left: 24px;\n            "])));
    case "top-right":
      return (0, _styledComponents.css)(_templateObject6 || (_templateObject6 = (0, _taggedTemplateLiteral2["default"])(["\n                top: 24px;\n                right: 24px;\n            "])));
  }
}
var ToastContainer = exports.ToastContainer = _styledComponents["default"].div(_templateObject7 || (_templateObject7 = (0, _taggedTemplateLiteral2["default"])(["\n    position: fixed;\n    ", ";\n    z-index: ", ";\n"])), function (_ref) {
  var position = _ref.position;
  return getPosition(position);
}, function (p) {
  return p.theme.zIndex.toast;
});
var ToastAlert = exports.ToastAlert = (0, _styledComponents["default"])(_Alert.Alert)(_templateObject8 || (_templateObject8 = (0, _taggedTemplateLiteral2["default"])(["\n    width: fit-content;\n    min-width: 300px;\n    max-width: 360px;\n\n    @media screen and (max-width: 400px) {\n        min-width: calc(100vw - 48px);\n        max-width: calc(100vw - 48px);\n    }\n"])));