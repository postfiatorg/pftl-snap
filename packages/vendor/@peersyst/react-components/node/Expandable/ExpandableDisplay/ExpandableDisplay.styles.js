"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ExpandableDropdown = exports.ExpandableDisplayRoot = void 0;
var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));
var _styledComponents = _interopRequireWildcard(require("styled-components"));
var _icons = require("../../assets/icons");
var _templateObject, _templateObject2, _templateObject3;
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
var ExpandableDisplayRoot = exports.ExpandableDisplayRoot = _styledComponents["default"].div(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n    flex: 1;\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    column-gap: 10px;\n    min-height: 36px;\n    padding: 0 10px;\n    border-bottom: solid 1px ", ";\n    cursor: pointer;\n    user-select: none;\n\n    ", "\n"])), function (_ref) {
  var theme = _ref.theme;
  return theme.palette.text;
}, function (_ref2) {
  var reverse = _ref2.reverse;
  return reverse && (0, _styledComponents.css)(_templateObject2 || (_templateObject2 = (0, _taggedTemplateLiteral2["default"])(["\n            flex-direction: row-reverse;\n        "])));
});
var ExpandableDropdown = exports.ExpandableDropdown = (0, _styledComponents["default"])(_icons.ChevronDownIcon)(_templateObject3 || (_templateObject3 = (0, _taggedTemplateLiteral2["default"])(["\n    font-size: 0.7em;\n    transform: ", ";\n"])), function (_ref3) {
  var open = _ref3.open;
  return open && "scale(-1)";
});