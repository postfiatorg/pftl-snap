import { DividerRoot, DividerWithChildren } from "./Divider.styles";
import { cx } from "@peersyst/react-utils";
import { useMergeDefaultProps, useColor } from "@peersyst/react-components-core";
import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
export default function Divider(props) {
  var _useMergeDefaultProps = useMergeDefaultProps("Divider", props),
    _useMergeDefaultProps2 = _useMergeDefaultProps.size,
    size = _useMergeDefaultProps2 === void 0 ? "1px" : _useMergeDefaultProps2,
    _useMergeDefaultProps3 = _useMergeDefaultProps.width,
    width = _useMergeDefaultProps3 === void 0 ? "full-width" : _useMergeDefaultProps3,
    className = _useMergeDefaultProps.className,
    style = _useMergeDefaultProps.style,
    colorProp = _useMergeDefaultProps.color,
    children = _useMergeDefaultProps.children;
  var color = useColor(colorProp);
  return /*#__PURE__*/_jsx(_Fragment, {
    children: children ? /*#__PURE__*/_jsxs(DividerWithChildren, {
      width: width,
      className: cx("Divider", className),
      style: style,
      children: [/*#__PURE__*/_jsx(DividerRoot, {
        height: size,
        color: color,
        width: "full-width"
      }), children, /*#__PURE__*/_jsx(DividerRoot, {
        height: size,
        color: color,
        width: "full-width"
      })]
    }) : /*#__PURE__*/_jsx(DividerRoot, {
      height: size,
      color: color,
      width: width,
      style: style,
      className: cx("Divider", className)
    })
  });
}