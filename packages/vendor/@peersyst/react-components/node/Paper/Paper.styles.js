"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PaperRoot = void 0;
var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));
var _styledComponents = _interopRequireWildcard(require("styled-components"));
var _reactUtils = require("@peersyst/react-utils");
var _templateObject, _templateObject2;
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
var getOverlayAlpha = function getOverlayAlpha(elevation) {
  var alphaValue;
  if (elevation < 1) {
    alphaValue = 5.11916 * Math.pow(elevation, 2);
  } else {
    alphaValue = 4.5 * Math.log(elevation + 1) + 2;
  }
  return Number((alphaValue / 100).toFixed(2));
};
var PaperRoot = exports.PaperRoot = _styledComponents["default"].div(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n    width: max-content;\n    box-sizing: border-box;\n    background-color: ", ";\n    border-radius: ", ";\n    box-shadow: ", ";\n    background-image: ", ";\n    transition: box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;\n"])), function (_ref) {
  var theme = _ref.theme;
  return theme.palette.background;
}, function (_ref2) {
  var square = _ref2.square,
    theme = _ref2.theme;
  return !square && theme.borderRadius;
}, function (_ref3) {
  var elevation = _ref3.elevation,
    theme = _ref3.theme;
  return theme.shadows[elevation];
}, function (_ref4) {
  var theme = _ref4.theme,
    elevation = _ref4.elevation;
  return theme.palette.mode === "dark" && (0, _styledComponents.css)(_templateObject2 || (_templateObject2 = (0, _taggedTemplateLiteral2["default"])(["linear-gradient(", ",\n      ", ")"])), (0, _reactUtils.alpha)("#fff", getOverlayAlpha(elevation)), (0, _reactUtils.alpha)("#fff", getOverlayAlpha(elevation)));
});