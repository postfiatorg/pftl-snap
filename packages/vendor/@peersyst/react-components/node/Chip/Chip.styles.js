"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.chipGapSizes = exports.ChipRoot = exports.ChipLabel = void 0;
var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));
var _styledComponents = _interopRequireWildcard(require("styled-components"));
var _Row = require("../Row");
var _reactUtils = require("@peersyst/react-utils");
var _templateObject, _templateObject2;
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
var chipGapSizes = exports.chipGapSizes = {
  sm: "0.5rem",
  md: "0.625rem",
  lg: "0.625rem"
};
var ChipRoot = exports.ChipRoot = (0, _styledComponents["default"])(_Row.Row).attrs({
  alignItems: "center"
})(function (_ref) {
  var theme = _ref.theme;
  return (0, _styledComponents.css)(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n        box-sizing: border-box;\n        white-space: nowrap;\n        vertical-align: middle;\n\n        color: ", ";\n        font-size: 0.8125rem;\n\n        border-radius: ", ";\n\n        width: fit-content;\n\n        &.Sm {\n            font-size: 0.75rem;\n            height: 1.5rem;\n            padding: 0 0.625rem;\n\n            &.Rounded {\n                border-radius: 0.75rem;\n            }\n        }\n        &.Md {\n            height: 2rem;\n            padding: 0 0.75rem;\n\n            &.Rounded {\n                border-radius: 1rem;\n            }\n        }\n        &.Lg {\n            height: 2.25rem;\n            padding: 0 0.875rem;\n\n            &.Rounded {\n                border-radius: 1.125rem;\n            }\n        }\n\n        &.Filled {\n            --chipColor: ", ";\n            background-color: var(--chipColor);\n            border: none;\n        }\n        &.Outlined {\n            --chipColor: ", ";\n            background-color: transparent;\n            border: 1px solid var(--chipColor);\n        }\n\n        &.Disabled {\n            color: ", ";\n            --chipColor: ", ";\n\n            &.Outlined {\n                --chipColor: ", ";\n            }\n        }\n\n        cursor: default;\n        &.Clickable:not(.Disabled) {\n            cursor: pointer;\n\n            &:hover {\n                --chipColor: ", ";\n\n                &.Outlined {\n                    --chipColor: ", ";\n                }\n            }\n\n            &:active {\n                --chipColor: ", ";\n\n                &.Outlined {\n                    --chipColor: ", ";\n                }\n            }\n        }\n\n        transition: background-color 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,\n            border 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;\n    "])), theme.palette.text, theme.borderRadius, (0, _reactUtils.alpha)(theme.palette.text, 0.1), (0, _reactUtils.alpha)(theme.palette.text, 0.3), theme.palette.disabled, (0, _reactUtils.alpha)(theme.palette.disabled, 0.2), (0, _reactUtils.alpha)(theme.palette.disabled, 0.4), (0, _reactUtils.alpha)(theme.palette.text, 0.15), (0, _reactUtils.alpha)(theme.palette.text, 0.35), (0, _reactUtils.alpha)(theme.palette.text, 0.12), (0, _reactUtils.alpha)(theme.palette.text, 0.32));
});
var ChipLabel = exports.ChipLabel = _styledComponents["default"].span(_templateObject2 || (_templateObject2 = (0, _taggedTemplateLiteral2["default"])(["\n    font-size: 0.8125rem;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n"])));