import _taggedTemplateLiteral from "@babel/runtime/helpers/esm/taggedTemplateLiteral";
var _templateObject, _templateObject2, _templateObject3;
import styled, { css } from "styled-components";
var breakpointStyles = css(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n    ", " {\n        flex-direction: ", ";\n        row-gap: ", ";\n        align-items: ", ";\n        justify-content: ", ";\n    }\n"])), function (_ref) {
  var theme = _ref.theme,
    breakpoint = _ref.breakpoint;
  return theme.breakpoints.down(breakpoint.width);
}, function (props) {
  var _props$breakpoint;
  return (_props$breakpoint = props.breakpoint) != null && _props$breakpoint.reverse ? "column-reverse" : "column";
}, function (props) {
  var _props$breakpoint2;
  return ((_props$breakpoint2 = props.breakpoint) == null ? void 0 : _props$breakpoint2.gap) !== undefined && (typeof props.breakpoint.gap === "number" ? props.breakpoint.gap + "px" : props.breakpoint.gap);
}, function (props) {
  var _props$breakpoint3;
  return ((_props$breakpoint3 = props.breakpoint) == null ? void 0 : _props$breakpoint3.alignItems) || "flex-start";
}, function (props) {
  var _props$breakpoint4;
  return ((_props$breakpoint4 = props.breakpoint) == null ? void 0 : _props$breakpoint4.justifyContent) || "flex-start";
});
export var RowRoot = styled.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n    display: flex;\n\n    ", ";\n"])), function (_ref2) {
  var flex = _ref2.flex,
    alignItems = _ref2.alignItems,
    justifyContent = _ref2.justifyContent,
    gap = _ref2.gap,
    shouldWrap = _ref2.shouldWrap,
    breakpoint = _ref2.breakpoint,
    reverse = _ref2.reverse,
    wrapGap = _ref2.wrapGap;
  return css(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n        flex: ", ";\n        flex-direction: ", ";\n        align-items: ", ";\n        justify-content: ", ";\n        column-gap: ", ";\n        row-gap: ", ";\n        flex-wrap: ", ";\n\n        ", ";\n    "])), flex, reverse ? "row-reverse" : "row", alignItems, justifyContent, gap !== undefined && (typeof gap === "number" ? gap + "px" : gap), shouldWrap && wrapGap !== undefined && (typeof wrapGap === "number" ? wrapGap + "px" : wrapGap), shouldWrap ? "wrap" : "nowrap", breakpoint && breakpointStyles);
});