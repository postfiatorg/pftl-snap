import _taggedTemplateLiteral from "@babel/runtime/helpers/esm/taggedTemplateLiteral";
var _templateObject;
import styled, { css } from "styled-components";
import { Paper } from "../Paper";
function formatSize(v) {
  return typeof v === "string" ? v : v + "px";
}
export var DrawerMenu = styled(Paper)(function (_ref) {
  var _ref$size = _ref.size,
    _ref$size$size = _ref$size.size,
    size = _ref$size$size === void 0 ? "300px" : _ref$size$size,
    mobileSizeProp = _ref$size.mobileSize,
    position = _ref.position;
  var mobileSize = mobileSizeProp != null ? mobileSizeProp : size;
  var width = position === "left" || position === "right" ? size : "100%";
  var mobileWidth = position === "left" || position === "right" ? mobileSize : "100%";
  var height = position === "top" || position === "bottom" ? size : "100%";
  var mobileHeight = position === "top" || position === "bottom" ? mobileSize : "100%";
  return css(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n        box-sizing: border-box;\n        width: ", ";\n        height: ", ";\n        background-color: ", ";\n        overflow: auto;\n\n        position: fixed;\n        ", ": 0;\n\n        @media screen and (max-width: 650px) {\n            width: ", ";\n            height: ", ";\n        }\n\n        //Transitions\n      &.drawer-enter,\n      &.drawer-appear {\n        ", ": ", ";\n      }\n      &.drawer-enter-active,\n      &.drawer-appear-active {\n        ", ": 0;\n        transition: ", ";\n      }\n      &.drawer-exit {\n        ", ": 0;\n      }\n      &.drawer-exit-active {\n        ", ": ", ";\n        transition: ", ";\n      }\n\n      @media (max-width: 650px) {\n        &.drawer-enter,\n        &.drawer-appear {\n          ", ": ", "\n        }\n        &.drawer-enter-active,\n        &.drawer-appear-active {\n          ", ": 0};\n          transition: ", ";\n        }\n        &.drawer-exit {\n          ", ": 0;\n        }\n        &.drawer-exit-active {\n          ", ": ", "\n        }\n      }\n    "])), formatSize(width), formatSize(height), function (_ref2) {
    var theme = _ref2.theme;
    return theme.palette.background;
  }, [position], formatSize(mobileWidth), formatSize(mobileHeight), [position], "-" + (position === "top" ? formatSize(height) : formatSize(width)), [position], position, [position], [position], "-" + (position === "top" ? formatSize(height) : formatSize(width)), position, [position], "-" + (position === "top" ? formatSize(mobileHeight) : formatSize(mobileWidth)), [position], position, [position], [position], "-" + (position === "top" ? mobileHeight ? formatSize(mobileHeight) : formatSize(height) : mobileWidth ? formatSize(mobileWidth) : formatSize(width)));
});