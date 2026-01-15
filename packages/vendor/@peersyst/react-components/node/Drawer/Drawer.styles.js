"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DrawerMenu = void 0;
var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));
var _styledComponents = _interopRequireWildcard(require("styled-components"));
var _Paper = require("../Paper");
var _templateObject;
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function formatSize(v) {
  return typeof v === "string" ? v : v + "px";
}
var DrawerMenu = exports.DrawerMenu = (0, _styledComponents["default"])(_Paper.Paper)(function (_ref) {
  var _ref$size = _ref.size,
    _ref$size$size = _ref$size.size,
    size = _ref$size$size === void 0 ? "300px" : _ref$size$size,
    mobileSizeProp = _ref$size.mobileSize,
    position = _ref.position;
  var mobileSize = mobileSizeProp != null ? mobileSizeProp : size;
  var width = position === "left" || position === "right" ? size : "100%";
  var mobileWidth = position === "left" || position === "right" ? mobileSize : "100%";
  var height = position === "top" || position === "bottom" ? size : "100%";
  var mobileHeight = position === "top" || position === "bottom" ? mobileSize : "100%";
  return (0, _styledComponents.css)(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n        box-sizing: border-box;\n        width: ", ";\n        height: ", ";\n        background-color: ", ";\n        overflow: auto;\n\n        position: fixed;\n        ", ": 0;\n\n        @media screen and (max-width: 650px) {\n            width: ", ";\n            height: ", ";\n        }\n\n        //Transitions\n      &.drawer-enter,\n      &.drawer-appear {\n        ", ": ", ";\n      }\n      &.drawer-enter-active,\n      &.drawer-appear-active {\n        ", ": 0;\n        transition: ", ";\n      }\n      &.drawer-exit {\n        ", ": 0;\n      }\n      &.drawer-exit-active {\n        ", ": ", ";\n        transition: ", ";\n      }\n\n      @media (max-width: 650px) {\n        &.drawer-enter,\n        &.drawer-appear {\n          ", ": ", "\n        }\n        &.drawer-enter-active,\n        &.drawer-appear-active {\n          ", ": 0};\n          transition: ", ";\n        }\n        &.drawer-exit {\n          ", ": 0;\n        }\n        &.drawer-exit-active {\n          ", ": ", "\n        }\n      }\n    "])), formatSize(width), formatSize(height), function (_ref2) {
    var theme = _ref2.theme;
    return theme.palette.background;
  }, [position], formatSize(mobileWidth), formatSize(mobileHeight), [position], "-" + (position === "top" ? formatSize(height) : formatSize(width)), [position], position, [position], [position], "-" + (position === "top" ? formatSize(height) : formatSize(width)), position, [position], "-" + (position === "top" ? formatSize(mobileHeight) : formatSize(mobileWidth)), [position], position, [position], [position], "-" + (position === "top" ? mobileHeight ? formatSize(mobileHeight) : formatSize(height) : mobileWidth ? formatSize(mobileWidth) : formatSize(width)));
});