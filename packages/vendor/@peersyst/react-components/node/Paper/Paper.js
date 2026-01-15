"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));
var _react = require("react");
var _Paper = require("./Paper.styles");
var _reactComponentsCore = require("@peersyst/react-components-core");
var _reactUtils = require("@peersyst/react-utils");
var _jsxRuntime = require("react/jsx-runtime");
var _excluded = ["elevation", "square", "className", "style", "children"];
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { (0, _defineProperty2["default"])(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
var Paper = /*#__PURE__*/(0, _react.forwardRef)(function Paper(props, ref) {
  var _useMergeDefaultProps = (0, _reactComponentsCore.useMergeDefaultProps)("Paper", props),
    _useMergeDefaultProps2 = _useMergeDefaultProps.elevation,
    elevation = _useMergeDefaultProps2 === void 0 ? 1 : _useMergeDefaultProps2,
    _useMergeDefaultProps3 = _useMergeDefaultProps.square,
    square = _useMergeDefaultProps3 === void 0 ? false : _useMergeDefaultProps3,
    className = _useMergeDefaultProps.className,
    style = _useMergeDefaultProps.style,
    children = _useMergeDefaultProps.children,
    rest = (0, _objectWithoutProperties2["default"])(_useMergeDefaultProps, _excluded);
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_Paper.PaperRoot, _objectSpread(_objectSpread({
    elevation: elevation,
    square: square,
    className: (0, _reactUtils.cx)("Paper", className),
    style: style,
    ref: ref
  }, rest), {}, {
    children: children
  }));
});
var _default = exports["default"] = Paper;