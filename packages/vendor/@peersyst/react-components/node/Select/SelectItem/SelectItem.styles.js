"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SelectItemRoot = void 0;
var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));
var _styledComponents = _interopRequireWildcard(require("styled-components"));
var _reactUtils = require("@peersyst/react-utils");
var _templateObject, _templateObject2;
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
var SelectItemRoot = exports.SelectItemRoot = _styledComponents["default"].li(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n    display: block;\n    padding: 10px 20px;\n\n    ", "\n\n    cursor: ", ";\n\n    &:hover {\n        background-color: ", ";\n    }\n"])), function (_ref) {
  var selected = _ref.selected;
  return selected && (0, _styledComponents.css)(_templateObject2 || (_templateObject2 = (0, _taggedTemplateLiteral2["default"])(["\n            background-color: ", ";\n            font-weight: bold;\n        "])), function (_ref2) {
    var theme = _ref2.theme;
    return (0, _reactUtils.alpha)(theme.palette.primary, 0.4);
  });
}, function (_ref3) {
  var readonly = _ref3.readonly;
  return !readonly && "pointer";
}, function (_ref4) {
  var theme = _ref4.theme,
    readonly = _ref4.readonly;
  return !readonly && (0, _reactUtils.alpha)(theme.palette.primary, 0.2);
});