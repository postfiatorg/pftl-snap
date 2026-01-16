"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.RowRoot = void 0;
var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));
var _styledComponents = _interopRequireWildcard(require("styled-components"));
var _templateObject, _templateObject2, _templateObject3;
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
var breakpointStyles = (0, _styledComponents.css)(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n    ", " {\n        flex-direction: ", ";\n        row-gap: ", ";\n        align-items: ", ";\n        justify-content: ", ";\n    }\n"])), function (_ref) {
  var theme = _ref.theme,
    breakpoint = _ref.breakpoint;
  return theme.breakpoints.down(breakpoint.width);
}, function (props) {
  var _props$breakpoint;
  return (_props$breakpoint = props.breakpoint) != null && _props$breakpoint.reverse ? "column-reverse" : "column";
}, function (props) {
  var _props$breakpoint2;
  return ((_props$breakpoint2 = props.breakpoint) == null ? void 0 : _props$breakpoint2.gap) !== undefined && (typeof props.breakpoint.gap === "number" ? props.breakpoint.gap + "px" : props.breakpoint.gap);
}, function (props) {
  var _props$breakpoint3;
  return ((_props$breakpoint3 = props.breakpoint) == null ? void 0 : _props$breakpoint3.alignItems) || "flex-start";
}, function (props) {
  var _props$breakpoint4;
  return ((_props$breakpoint4 = props.breakpoint) == null ? void 0 : _props$breakpoint4.justifyContent) || "flex-start";
});
var RowRoot = exports.RowRoot = _styledComponents["default"].div(_templateObject2 || (_templateObject2 = (0, _taggedTemplateLiteral2["default"])(["\n    display: flex;\n\n    ", ";\n"])), function (_ref2) {
  var flex = _ref2.flex,
    alignItems = _ref2.alignItems,
    justifyContent = _ref2.justifyContent,
    gap = _ref2.gap,
    shouldWrap = _ref2.shouldWrap,
    breakpoint = _ref2.breakpoint,
    reverse = _ref2.reverse,
    wrapGap = _ref2.wrapGap;
  return (0, _styledComponents.css)(_templateObject3 || (_templateObject3 = (0, _taggedTemplateLiteral2["default"])(["\n        flex: ", ";\n        flex-direction: ", ";\n        align-items: ", ";\n        justify-content: ", ";\n        column-gap: ", ";\n        row-gap: ", ";\n        flex-wrap: ", ";\n\n        ", ";\n    "])), flex, reverse ? "row-reverse" : "row", alignItems, justifyContent, gap !== undefined && (typeof gap === "number" ? gap + "px" : gap), shouldWrap && wrapGap !== undefined && (typeof wrapGap === "number" ? wrapGap + "px" : wrapGap), shouldWrap ? "wrap" : "nowrap", breakpoint && breakpointStyles);
});