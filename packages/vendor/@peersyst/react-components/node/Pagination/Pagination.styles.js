"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PaginationRoot = exports.PagesList = void 0;
var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));
var _styledComponents = _interopRequireWildcard(require("styled-components"));
var _templateObject, _templateObject2;
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
var PaginationRoot = exports.PaginationRoot = _styledComponents["default"].nav(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])([""])));
var listSpacings = {
  sm: 3,
  md: 6,
  lg: 8
};
var PagesList = exports.PagesList = _styledComponents["default"].ul(function (_ref) {
  var size = _ref.size;
  return (0, _styledComponents.css)(_templateObject2 || (_templateObject2 = (0, _taggedTemplateLiteral2["default"])(["\n        display: flex;\n        flex-wrap: wrap;\n        align-items: center;\n        padding: 0;\n        margin: 0;\n        list-style: none;\n        column-gap: ", "px;\n    "])), listSpacings[size]);
});