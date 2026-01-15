import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
var _excluded = ["variant", "children", "className", "light", "color", "singleLine", "numberOfLines"];
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
import { TypographyRoot } from "./Typography.styles";
import { useTheme } from "../theme";
import { cx } from "@peersyst/react-utils";
import { useMergeDefaultProps, useColor } from "@peersyst/react-components-core";
import { jsx as _jsx } from "react/jsx-runtime";
export default function Typography(props) {
  var _useMergeDefaultProps = useMergeDefaultProps("Typography", props),
    variantKey = _useMergeDefaultProps.variant,
    children = _useMergeDefaultProps.children,
    className = _useMergeDefaultProps.className,
    light = _useMergeDefaultProps.light,
    colorProp = _useMergeDefaultProps.color,
    singleLine = _useMergeDefaultProps.singleLine,
    numberOfLinesProp = _useMergeDefaultProps.numberOfLines,
    rest = _objectWithoutProperties(_useMergeDefaultProps, _excluded);
  var _useTheme = useTheme(),
    typography = _useTheme.typography;
  var color = useColor(colorProp);
  var numberOfLines = numberOfLinesProp != null ? numberOfLinesProp : singleLine ? 1 : undefined;
  var _ref = variantKey === "inherit" ? {
      component: "div",
      style: {}
    } : typography[variantKey],
    component = _ref.component,
    style = _ref.style;
  return /*#__PURE__*/_jsx(TypographyRoot, _objectSpread(_objectSpread({
    as: component,
    variantStyles: style,
    color: color,
    className: cx("Typography", "Typography-" + variantKey, light && "Light", className),
    numberOfLines: numberOfLines
  }, rest), {}, {
    children: children
  }));
}