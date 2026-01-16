"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TypographyRoot = void 0;
var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));
var _styledComponents = _interopRequireWildcard(require("styled-components"));
var _templateObject, _templateObject2;
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
var TypographyRoot = exports.TypographyRoot = _styledComponents["default"].div(function (_ref) {
  var _theme$fonts;
  var theme = _ref.theme,
    variantStyles = _ref.variantStyles,
    textTransform = _ref.textTransform,
    textAlign = _ref.textAlign,
    fontStyle = _ref.fontStyle,
    fontWeight = _ref.fontWeight,
    font = _ref.font,
    color = _ref.color,
    _ref$numberOfLines = _ref.numberOfLines,
    numberOfLines = _ref$numberOfLines === void 0 ? 0 : _ref$numberOfLines;
  return (0, _styledComponents.css)(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n        overflow: hidden;\n        display: block;\n        margin: 0;\n        margin-block-start: 0;\n        margin-block-end: 0;\n        margin-inline-start: 0;\n        margin-inline-end: 0;\n        line-height: normal;\n\n        ", ";\n\n        text-transform: ", ";\n        text-align: ", ";\n        font-style: ", ";\n        font-weight: ", ";\n        font-family: ", ";\n        ", ";\n\n        color: ", ";\n\n        &.Light {\n            opacity: 0.7;\n        }\n    "])), (0, _styledComponents.css)(variantStyles), textTransform, textAlign, fontStyle, fontWeight, font && ((_theme$fonts = theme.fonts) == null ? void 0 : _theme$fonts[font]), numberOfLines && (0, _styledComponents.css)(_templateObject2 || (_templateObject2 = (0, _taggedTemplateLiteral2["default"])(["\n            -webkit-line-clamp: ", ";\n            display: -webkit-box;\n            -webkit-box-orient: vertical;\n            word-wrap: break-word; /* Important for long words! */\n        "])), numberOfLines), color);
});