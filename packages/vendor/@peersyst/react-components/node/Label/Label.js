"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
var _Label = require("./Label.styles");
var _reactUtils = require("@peersyst/react-utils");
var _reactHooks = require("@peersyst/react-hooks");
var _theme = require("../theme");
var _reactComponentsCore = require("@peersyst/react-components-core");
var _jsxRuntime = require("react/jsx-runtime");
var Label = function Label(props) {
  var _useMergeDefaultProps = (0, _reactComponentsCore.useMergeDefaultProps)("Label", props),
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
  var theme = (0, _theme.useTheme)();
  var breakpointIsActive = (0, _reactHooks.useMediaQuery)(breakpoint ? theme.breakpoints.down(breakpoint.width).replace("@media ", "") : "");
  var _ref = breakpointIsActive ? [(breakpoint == null ? void 0 : breakpoint.placement) || placementProp, (breakpoint == null ? void 0 : breakpoint.alignment) || alignmentProp, (breakpoint == null ? void 0 : breakpoint.gap) || gapProp] : [placementProp, alignmentProp, gapProp],
    _ref2 = (0, _slicedToArray2["default"])(_ref, 3),
    placement = _ref2[0],
    alignment = _ref2[1],
    gap = _ref2[2];
  var direction = function () {
    if (placement === "top") return "column";else if (placement === "bottom") return "column-reverse";else if (placement === "left") return "row";else return "row-reverse";
  }();
  var RootComponent = direction.includes("row") ? _Label.LabelRowRoot : _Label.LabelColRoot;
  var content = [/*#__PURE__*/(0, _jsxRuntime.jsx)(_Label.LabelText, {
    placement: placement,
    alignment: alignment,
    className: (0, _reactUtils.cx)("Label", (0, _reactUtils.capitalize)(placement) + "Placement", singleLine && "SingleLine"),
    variant: variant,
    children: label
  }, "label"), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Label.LabelChildren, {
    className: "LabelChildren",
    children: children
  }, "children")];
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(RootComponent, {
    gap: gap,
    alignment: alignment,
    className: (0, _reactUtils.cx)("LabelRoot", className),
    style: style,
    children: direction.includes("reverse") ? content.reverse() : content
  });
};
var _default = exports["default"] = Label;