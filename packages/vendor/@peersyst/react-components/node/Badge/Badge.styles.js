"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BadgeRoot = exports.BadgeItem = void 0;
var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));
var _styledComponents = _interopRequireWildcard(require("styled-components"));
var _reactUtils = require("@peersyst/react-utils");
var _templateObject, _templateObject2;
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
var BadgeRoot = exports.BadgeRoot = _styledComponents["default"].span(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n    position: relative;\n    display: inline-flex;\n    vertical-align: middle;\n    flex-shrink: 0;\n"])));
var getBadgePosition = function getBadgePosition(position, overlap) {
  var value = overlap === "circular" ? "14%" : 0;
  return {
    top: position.vertical === "top" ? value : undefined,
    bottom: position.vertical === "bottom" ? value : undefined,
    left: position.horizontal === "left" ? value : undefined,
    right: position.horizontal === "right" ? value : undefined
  };
};
var BadgeItem = exports.BadgeItem = _styledComponents["default"].span(function (_ref) {
  var theme = _ref.theme,
    position = _ref.position,
    hasContent = _ref.hasContent,
    overlap = _ref.overlap;
  return (0, _styledComponents.css)(_templateObject2 || (_templateObject2 = (0, _taggedTemplateLiteral2["default"])(["\n        position: absolute;\n        ", ";\n        z-index: 1;\n        display: flex;\n        flex-flow: row wrap;\n        -webkit-box-pack: center;\n        place-content: center;\n        -webkit-box-align: center;\n        align-items: center;\n        box-sizing: border-box;\n        padding: 0 6px;\n        height: ", ";\n        min-width: ", ";\n        border-radius: 10px;\n        font-weight: 500;\n        font-size: 0.75rem;\n        background-color: ", ";\n        color: ", ";\n    "])), getBadgePosition(position, overlap), hasContent ? "20px" : "8px", hasContent ? "20px" : "8px", theme.palette.primary, (0, _reactUtils.getLuminance)(theme.palette.primary) > 0.7 ? "black" : "white");
});