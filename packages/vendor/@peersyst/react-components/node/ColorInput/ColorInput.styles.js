"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ColorInputRoot = exports.ColorInputDisplay = void 0;
var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));
var _styledComponents = _interopRequireWildcard(require("styled-components"));
var _Row = require("../Row");
var _templateObject, _templateObject2;
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
var ColorInputRoot = exports.ColorInputRoot = (0, _styledComponents["default"])(_Row.Row).attrs({
  alignItems: "center",
  gap: 16
})(function (_ref) {
  var hasLabel = _ref.hasLabel;
  return (0, _styledComponents.css)(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n        position: relative;\n\n        width: ", ";\n\n        > input {\n            position: absolute;\n            bottom: 0;\n            left: 0;\n            opacity: 0;\n            z-index: -1;\n        }\n    "])), hasLabel && "100%");
});
var ColorInputDisplay = exports.ColorInputDisplay = _styledComponents["default"].span(function (_ref2) {
  var theme = _ref2.theme,
    active = _ref2.active,
    disabled = _ref2.disabled;
  return (0, _styledComponents.css)(_templateObject2 || (_templateObject2 = (0, _taggedTemplateLiteral2["default"])(["\n        height: 36px;\n        width: 36px;\n        border-radius: ", ";\n        opacity: ", ";\n\n        cursor: ", ";\n    "])), theme.borderRadius, disabled ? 0.6 : 1, active && "pointer");
});