"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = Typography;
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));
var _Typography = require("./Typography.styles");
var _theme = require("../theme");
var _reactUtils = require("@peersyst/react-utils");
var _reactComponentsCore = require("@peersyst/react-components-core");
var _jsxRuntime = require("react/jsx-runtime");
var _excluded = ["variant", "children", "className", "light", "color", "singleLine", "numberOfLines"];
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { (0, _defineProperty2["default"])(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function Typography(props) {
  var _useMergeDefaultProps = (0, _reactComponentsCore.useMergeDefaultProps)("Typography", props),
    variantKey = _useMergeDefaultProps.variant,
    children = _useMergeDefaultProps.children,
    className = _useMergeDefaultProps.className,
    light = _useMergeDefaultProps.light,
    colorProp = _useMergeDefaultProps.color,
    singleLine = _useMergeDefaultProps.singleLine,
    numberOfLinesProp = _useMergeDefaultProps.numberOfLines,
    rest = (0, _objectWithoutProperties2["default"])(_useMergeDefaultProps, _excluded);
  var _useTheme = (0, _theme.useTheme)(),
    typography = _useTheme.typography;
  var color = (0, _reactComponentsCore.useColor)(colorProp);
  var numberOfLines = numberOfLinesProp != null ? numberOfLinesProp : singleLine ? 1 : undefined;
  var _ref = variantKey === "inherit" ? {
      component: "div",
      style: {}
    } : typography[variantKey],
    component = _ref.component,
    style = _ref.style;
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_Typography.TypographyRoot, _objectSpread(_objectSpread({
    as: component,
    variantStyles: style,
    color: color,
    className: (0, _reactUtils.cx)("Typography", "Typography-" + variantKey, light && "Light", className),
    numberOfLines: numberOfLines
  }, rest), {}, {
    children: children
  }));
}