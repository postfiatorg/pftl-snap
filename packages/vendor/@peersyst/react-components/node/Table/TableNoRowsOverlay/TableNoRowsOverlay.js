"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));
var _clsx = _interopRequireDefault(require("clsx"));
var _TableOverlay = require("../TableOverlay");
var _Typography2 = require("../../Typography");
var _jsxRuntime = require("react/jsx-runtime");
var _Typography;
var _excluded = ["noRowsElement", "className"];
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { (0, _defineProperty2["default"])(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
var TableNoRowsOverlay = function TableNoRowsOverlay(_ref) {
  var noRowsElement = _ref.noRowsElement,
    className = _ref.className,
    rest = (0, _objectWithoutProperties2["default"])(_ref, _excluded);
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_TableOverlay.TableOverlay, _objectSpread(_objectSpread({
    className: (0, _clsx["default"])("TableNoRowsOverlay", className)
  }, rest), {}, {
    children: noRowsElement || _Typography || (_Typography = /*#__PURE__*/(0, _jsxRuntime.jsx)(_Typography2.Typography, {
      variant: "body1",
      light: true,
      children: "No rows"
    }))
  }));
};
var _default = exports["default"] = TableNoRowsOverlay;