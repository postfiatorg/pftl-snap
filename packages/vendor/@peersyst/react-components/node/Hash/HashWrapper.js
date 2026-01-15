"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));
var _react = require("react");
var _useHashClickHandler = _interopRequireDefault(require("./hook/useHashClickHandler"));
var _Hash = require("./Hash.styles");
var _jsxRuntime = require("react/jsx-runtime");
var _excluded = ["children", "url", "action"];
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { (0, _defineProperty2["default"])(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
var HashWrapper = /*#__PURE__*/(0, _react.forwardRef)(function HashWrapper(_ref, ref) {
  var children = _ref.children,
    url = _ref.url,
    action = _ref.action,
    params = (0, _objectWithoutProperties2["default"])(_ref, _excluded);
  //Hooks
  var handleClick = (0, _useHashClickHandler["default"])(_objectSpread(_objectSpread({}, params), {}, {
    action: action
  }));

  //Variables
  var anchorWrapper = url && action === "link";
  return anchorWrapper ? /*#__PURE__*/(0, _jsxRuntime.jsx)(_Hash.HashLink, {
    href: url,
    target: "_blank",
    rel: "noreferrer",
    className: "HashWrapper",
    ref: ref,
    children: children
  }) : /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
    className: "HashWrapper",
    ref: ref,
    onClick: handleClick,
    children: children
  });
});
var _default = exports["default"] = HashWrapper;