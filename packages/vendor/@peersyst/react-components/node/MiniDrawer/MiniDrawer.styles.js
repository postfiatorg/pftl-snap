"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MiniDrawerRoot = void 0;
var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));
var _styledComponents = _interopRequireWildcard(require("styled-components"));
var _Drawer = require("../Drawer");
var _templateObject;
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function formatSize(v) {
  return typeof v === "string" ? v : v + "px";
}
var MiniDrawerRoot = exports.MiniDrawerRoot = (0, _styledComponents["default"])(_Drawer.Drawer).attrs({
  variant: "permanent"
})(function (_ref) {
  var _ref$size = _ref.size,
    _ref$size2 = _ref$size === void 0 ? {} : _ref$size,
    _ref$size2$size = _ref$size2.size,
    size = _ref$size2$size === void 0 ? 300 : _ref$size2$size,
    mobileSizeProp = _ref$size2.mobileSize,
    position = _ref.position,
    collapsedSize = _ref.collapsedSize,
    transitionDuration = _ref.transitionDuration;
  var isHorizontal = position === "left" || position === "right";
  var mobileSize = mobileSizeProp != null ? mobileSizeProp : size;
  var width = isHorizontal ? size : "100%";
  var mobileWidth = isHorizontal ? mobileSize : "100%";
  var height = !isHorizontal ? size : "100%";
  var mobileHeight = !isHorizontal ? mobileSize : "100%";
  return (0, _styledComponents.css)(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n            transition: width ", ", height ", " !important;\n            width: ", ";\n            height: ", ";\n\n            @media screen and (max-width: 650px) {\n                width: ", ";\n                height: ", ";\n            }\n\n            overflow-x: ", ";\n            overflow-y: ", ";\n\n            &.Collapsed {\n                width: ", ";\n                height: ", ";\n            }\n        "])), transitionDuration, transitionDuration, formatSize(width), formatSize(height), formatSize(mobileWidth), formatSize(mobileHeight), isHorizontal && "hidden", !isHorizontal && "hidden", isHorizontal && formatSize(collapsedSize), !isHorizontal && formatSize(collapsedSize));
});