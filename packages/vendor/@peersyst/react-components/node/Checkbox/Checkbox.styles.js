"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CheckboxRoot = void 0;
var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _styledComponents = _interopRequireWildcard(require("styled-components"));
var _templateObject;
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
var checkboxColor = (0, _styledComponents.css)(function (_ref) {
  var theme = _ref.theme;
  return (0, _defineProperty2["default"])((0, _defineProperty2["default"])({
    color: theme.palette.text
  }, "&.Disabled", {
    color: theme.palette.disabled
  }), "&.Checked", {
    color: theme.palette.primary
  });
});
var CheckboxRoot = exports.CheckboxRoot = _styledComponents["default"].span(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n    box-sizing: border-box;\n    position: relative;\n    display: flex;\n    ", ";\n    font-size: 1.2rem;\n"])), checkboxColor);