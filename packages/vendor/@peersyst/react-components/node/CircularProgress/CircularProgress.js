"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = CircularProgress;
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _CircularProgress = require("./CircularProgress.styles");
var _reactUtils = require("@peersyst/react-utils");
var _reactComponentsCore = require("@peersyst/react-components-core");
var _jsxRuntime = require("react/jsx-runtime");
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { (0, _defineProperty2["default"])(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; } /* Greatly inspired by MUI's `CircularProgress` */
var SIZE = 44;
function CircularProgress(props) {
  var _useMergeDefaultProps = (0, _reactComponentsCore.useMergeDefaultProps)("CircularProgress", props),
    _useMergeDefaultProps2 = _useMergeDefaultProps.value,
    value = _useMergeDefaultProps2 === void 0 ? 0 : _useMergeDefaultProps2,
    className = _useMergeDefaultProps.className,
    style = _useMergeDefaultProps.style,
    _useMergeDefaultProps3 = _useMergeDefaultProps.color,
    colorProp = _useMergeDefaultProps3 === void 0 ? "primary" : _useMergeDefaultProps3,
    _useMergeDefaultProps4 = _useMergeDefaultProps.size,
    size = _useMergeDefaultProps4 === void 0 ? 40 : _useMergeDefaultProps4,
    _useMergeDefaultProps5 = _useMergeDefaultProps.thickness,
    thickness = _useMergeDefaultProps5 === void 0 ? 4 : _useMergeDefaultProps5,
    children = _useMergeDefaultProps.children;
  var color = (0, _reactComponentsCore.useColor)(colorProp);
  var circleStyle = {};
  var rootStyle = {};
  if (value) {
    var circumference = 2 * Math.PI * ((SIZE - thickness) / 2);
    circleStyle.strokeDasharray = circumference.toFixed(3);
    circleStyle.strokeDashoffset = "".concat(((100 - value) / 100 * circumference).toFixed(3), "px");
    rootStyle.transform = "rotate(-90deg)";
  }
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_CircularProgress.CircularProgressWrapper, {
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_CircularProgress.CircularProgressRoot, {
      className: (0, _reactUtils.cx)("CircularProgress", className),
      style: _objectSpread(_objectSpread({
        width: size,
        height: size,
        color: color
      }, rootStyle), style),
      role: "progressbar",
      value: value,
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_CircularProgress.CircularProgressSvg, {
        className: "CircularProgressSvg",
        viewBox: "".concat(SIZE / 2, " ").concat(SIZE / 2, " ").concat(SIZE, " ").concat(SIZE),
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_CircularProgress.CircularProgressCircle, {
          className: "CircularProgressCircle",
          style: circleStyle,
          cx: SIZE,
          cy: SIZE,
          r: (SIZE - thickness) / 2,
          fill: "none",
          strokeWidth: thickness,
          value: value
        })
      })
    }), children && /*#__PURE__*/(0, _jsxRuntime.jsx)(_CircularProgress.CircularProgressContent, {
      className: "CircularProgressContent",
      children: children
    })]
  });
}