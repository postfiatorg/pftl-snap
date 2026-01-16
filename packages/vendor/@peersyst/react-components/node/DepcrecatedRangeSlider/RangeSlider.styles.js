"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.RangeSliderTrack = exports.RangeSliderRoot = exports.RangeSliderRail = exports.RangeSliderInput = void 0;
var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));
var _styledComponents = _interopRequireWildcard(require("styled-components"));
var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6;
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
var sliderColor = (0, _styledComponents.css)(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n    color: ", ";\n"])), function (_ref) {
  var disabled = _ref.disabled,
    theme = _ref.theme;
  return disabled ? theme.palette.disabled : theme.palette.primary;
});
var RangeSliderRoot = exports.RangeSliderRoot = _styledComponents["default"].div(_templateObject2 || (_templateObject2 = (0, _taggedTemplateLiteral2["default"])(["\n    position: relative;\n    isolation: isolate;\n\n    ", ";\n\n    height: 4px;\n    width: calc(100% - 40px);\n    margin-left: 20px;\n    padding: 12px 0;\n    box-sizing: content-box;\n    border-radius: 12px;\n    cursor: pointer;\n\n    &.Disabled {\n        cursor: default;\n        pointer-events: none;\n        * {\n            pointer-events: none;\n        }\n    }\n"])), sliderColor);
var RangeSliderRail = exports.RangeSliderRail = _styledComponents["default"].span(_templateObject3 || (_templateObject3 = (0, _taggedTemplateLiteral2["default"])(["\n    position: absolute;\n    top: 50%;\n    transform: translateY(-50%);\n\n    display: block;\n    width: 100%;\n    height: inherit;\n\n    border-radius: inherit;\n    background-color: currentColor;\n    opacity: 0.5;\n"])));
var RangeSliderTrack = exports.RangeSliderTrack = _styledComponents["default"].span(_templateObject4 || (_templateObject4 = (0, _taggedTemplateLiteral2["default"])(["\n    position: absolute;\n    top: 50%;\n    transform: translateY(-50%);\n    display: block;\n    height: inherit;\n\n    border-radius: inherit;\n    border: 1px solid currentColor;\n    background-color: currentColor;\n"])));
var thumbStyles = (0, _styledComponents.css)(_templateObject5 || (_templateObject5 = (0, _taggedTemplateLiteral2["default"])(["\n    width: 20px;\n    height: 20px;\n    border-radius: 50%;\n    background: currentColor;\n    box-shadow: ", ";\n\n    &:hover {\n        transform: ", ";\n    }\n"])), function (_ref2) {
  var theme = _ref2.theme;
  return theme.shadows[5];
}, function (_ref3) {
  var disabled = _ref3.disabled;
  return !disabled && "scale(1.1)";
});
var RangeSliderInput = exports.RangeSliderInput = _styledComponents["default"].input(_templateObject6 || (_templateObject6 = (0, _taggedTemplateLiteral2["default"])(["\n    cursor: pointer;\n    position: absolute;\n    border: 0;\n    height: 100%;\n    margin: 0;\n    top: 1px;\n    padding: 0;\n\n    white-space: nowrap;\n    direction: ltr;\n\n    -webkit-appearance: none;\n    background-color: transparent;\n    color: inherit;\n\n    &::-webkit-slider-thumb {\n        -webkit-appearance: none;\n        appearance: none;\n        ", ";\n    }\n\n    &::-moz-range-thumb {\n        pointer-events: none;\n        ", ";\n    }\n"])), thumbStyles, thumbStyles);