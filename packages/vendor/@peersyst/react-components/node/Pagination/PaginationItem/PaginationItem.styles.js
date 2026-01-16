"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PaginationItemRoot = void 0;
var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));
var _styledComponents = _interopRequireWildcard(require("styled-components"));
var _reactUtils = require("@peersyst/react-utils");
var _templateObject;
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
var sm = {
  size: "26px",
  px: "4px"
};
var md = {
  size: "32px",
  px: "6px"
};
var lg = {
  size: "40px",
  px: "10px"
};
var itemSizes = {
  sm: sm,
  md: md,
  lg: lg
};
var PaginationItemRoot = exports.PaginationItemRoot = _styledComponents["default"].button(function (_ref) {
  var theme = _ref.theme,
    selected = _ref.selected,
    disabled = _ref.disabled,
    sizeProp = _ref.size,
    isEllipsis = _ref.isEllipsis;
  var _itemSizes$sizeProp = itemSizes[sizeProp],
    size = _itemSizes$sizeProp.size,
    px = _itemSizes$sizeProp.px;
  var enabled = !isEllipsis && !disabled;
  return (0, _styledComponents.css)(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n            position: relative;\n\n            display: inline-flex;\n            align-items: center;\n            justify-content: center;\n\n            cursor: ", ";\n            outline: 0;\n            border: 0;\n            user-select: none;\n            vertical-align: middle;\n            appearance: none;\n            text-decoration: none;\n            border-radius: 50%;\n\n            min-width: ", ";\n            height: ", ";\n            padding: 0 ", ";\n            box-sizing: border-box;\n            font-size: 0.875rem;\n\n            color: inherit;\n            background-color: ", ";\n            opacity: ", ";\n\n            transition: background-color 200ms;\n\n            &:hover {\n                background-color: ", ";\n            }\n\n            &:active {\n                background-color: ", ";\n            }\n        "])), enabled && "pointer", size, size, px, selected ? (0, _reactUtils.alpha)(theme.palette.primary, 0.6) : "transparent", disabled && 0.6, enabled && (0, _reactUtils.alpha)(theme.palette.primary, 0.3), enabled && (0, _reactUtils.alpha)(theme.palette.primary, 0.4));
});