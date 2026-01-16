"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CollapseWrapperInner = exports.CollapseWrapper = exports.CollapseRoot = void 0;
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _styledComponents = _interopRequireDefault(require("styled-components"));
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { (0, _defineProperty2["default"])(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
var CollapseRoot = exports.CollapseRoot = _styledComponents["default"].div(function (_ref) {
  var orientation = _ref.orientation;
  return _objectSpread({
    height: 0,
    overflow: "hidden"
  }, orientation === "horizontal" && {
    height: "auto",
    width: 0
  });
});
var CollapseWrapper = exports.CollapseWrapper = _styledComponents["default"].div(function (_ref2) {
  var orientation = _ref2.orientation;
  return _objectSpread({
    display: "flex",
    width: "100%"
  }, orientation === "horizontal" && {
    width: "auto",
    height: "100%"
  });
});
var CollapseWrapperInner = exports.CollapseWrapperInner = _styledComponents["default"].div(function (_ref3) {
  var orientation = _ref3.orientation;
  return _objectSpread({
    width: "100%"
  }, orientation === "horizontal" && {
    width: "auto",
    height: "100%"
  });
});