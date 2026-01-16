import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import { LabelChildren, LabelColRoot, LabelRowRoot, LabelText } from "./Label.styles";
import { capitalize, cx } from "@peersyst/react-utils";
import { useMediaQuery } from "@peersyst/react-hooks";
import { useTheme } from "../theme";
import { useMergeDefaultProps } from "@peersyst/react-components-core";
import { jsx as _jsx } from "react/jsx-runtime";
var Label = function Label(props) {
  var _useMergeDefaultProps = useMergeDefaultProps("Label", props),
    label = _useMergeDefaultProps.label,
    _useMergeDefaultProps2 = _useMergeDefaultProps.placement,
    placementProp = _useMergeDefaultProps2 === void 0 ? "top" : _useMergeDefaultProps2,
    _useMergeDefaultProps3 = _useMergeDefaultProps.alignment,
    alignmentProp = _useMergeDefaultProps3 === void 0 ? "start" : _useMergeDefaultProps3,
    _useMergeDefaultProps4 = _useMergeDefaultProps.gap,
    gapProp = _useMergeDefaultProps4 === void 0 ? 10 : _useMergeDefaultProps4,
    children = _useMergeDefaultProps.children,
    _useMergeDefaultProps5 = _useMergeDefaultProps.singleLine,
    singleLine = _useMergeDefaultProps5 === void 0 ? false : _useMergeDefaultProps5,
    className = _useMergeDefaultProps.className,
    style = _useMergeDefaultProps.style,
    breakpoint = _useMergeDefaultProps.breakpoint,
    variant = _useMergeDefaultProps.variant;
  var theme = useTheme();
  var breakpointIsActive = useMediaQuery(breakpoint ? theme.breakpoints.down(breakpoint.width).replace("@media ", "") : "");
  var _ref = breakpointIsActive ? [(breakpoint == null ? void 0 : breakpoint.placement) || placementProp, (breakpoint == null ? void 0 : breakpoint.alignment) || alignmentProp, (breakpoint == null ? void 0 : breakpoint.gap) || gapProp] : [placementProp, alignmentProp, gapProp],
    _ref2 = _slicedToArray(_ref, 3),
    placement = _ref2[0],
    alignment = _ref2[1],
    gap = _ref2[2];
  var direction = function () {
    if (placement === "top") return "column";else if (placement === "bottom") return "column-reverse";else if (placement === "left") return "row";else return "row-reverse";
  }();
  var RootComponent = direction.includes("row") ? LabelRowRoot : LabelColRoot;
  var content = [/*#__PURE__*/_jsx(LabelText, {
    placement: placement,
    alignment: alignment,
    className: cx("Label", capitalize(placement) + "Placement", singleLine && "SingleLine"),
    variant: variant,
    children: label
  }, "label"), /*#__PURE__*/_jsx(LabelChildren, {
    className: "LabelChildren",
    children: children
  }, "children")];
  return /*#__PURE__*/_jsx(RootComponent, {
    gap: gap,
    alignment: alignment,
    className: cx("LabelRoot", className),
    style: style,
    children: direction.includes("reverse") ? content.reverse() : content
  });
};
export default Label;