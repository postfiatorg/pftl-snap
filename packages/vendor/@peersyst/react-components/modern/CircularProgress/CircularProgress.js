import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
/* Greatly inspired by MUI's `CircularProgress` */

import { CircularProgressCircle, CircularProgressContent, CircularProgressRoot, CircularProgressSvg, CircularProgressWrapper } from "./CircularProgress.styles";
import { cx } from "@peersyst/react-utils";
import { useColor, useMergeDefaultProps } from "@peersyst/react-components-core";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
var SIZE = 44;
export default function CircularProgress(props) {
  var _useMergeDefaultProps = useMergeDefaultProps("CircularProgress", props),
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
  var color = useColor(colorProp);
  var circleStyle = {};
  var rootStyle = {};
  if (value) {
    var circumference = 2 * Math.PI * ((SIZE - thickness) / 2);
    circleStyle.strokeDasharray = circumference.toFixed(3);
    circleStyle.strokeDashoffset = "".concat(((100 - value) / 100 * circumference).toFixed(3), "px");
    rootStyle.transform = "rotate(-90deg)";
  }
  return /*#__PURE__*/_jsxs(CircularProgressWrapper, {
    children: [/*#__PURE__*/_jsx(CircularProgressRoot, {
      className: cx("CircularProgress", className),
      style: _objectSpread(_objectSpread({
        width: size,
        height: size,
        color: color
      }, rootStyle), style),
      role: "progressbar",
      value: value,
      children: /*#__PURE__*/_jsx(CircularProgressSvg, {
        className: "CircularProgressSvg",
        viewBox: "".concat(SIZE / 2, " ").concat(SIZE / 2, " ").concat(SIZE, " ").concat(SIZE),
        children: /*#__PURE__*/_jsx(CircularProgressCircle, {
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
    }), children && /*#__PURE__*/_jsx(CircularProgressContent, {
      className: "CircularProgressContent",
      children: children
    })]
  });
}