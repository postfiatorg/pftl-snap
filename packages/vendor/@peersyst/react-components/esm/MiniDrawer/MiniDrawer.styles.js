import _taggedTemplateLiteral from "@babel/runtime/helpers/esm/taggedTemplateLiteral";
var _templateObject;
import styled, { css } from "styled-components";
import { Drawer } from "../Drawer";
function formatSize(v) {
  return typeof v === "string" ? v : v + "px";
}
export var MiniDrawerRoot = styled(Drawer).attrs({
  variant: "permanent"
})(function (_ref) {
  var _ref$size = _ref.size,
    _ref$size2 = _ref$size === void 0 ? {} : _ref$size,
    _ref$size2$size = _ref$size2.size,
    size = _ref$size2$size === void 0 ? 300 : _ref$size2$size,
    mobileSizeProp = _ref$size2.mobileSize,
    position = _ref.position,
    collapsedSize = _ref.collapsedSize,
    transitionDuration = _ref.transitionDuration;
  var isHorizontal = position === "left" || position === "right";
  var mobileSize = mobileSizeProp != null ? mobileSizeProp : size;
  var width = isHorizontal ? size : "100%";
  var mobileWidth = isHorizontal ? mobileSize : "100%";
  var height = !isHorizontal ? size : "100%";
  var mobileHeight = !isHorizontal ? mobileSize : "100%";
  return css(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n            transition: width ", ", height ", " !important;\n            width: ", ";\n            height: ", ";\n\n            @media screen and (max-width: 650px) {\n                width: ", ";\n                height: ", ";\n            }\n\n            overflow-x: ", ";\n            overflow-y: ", ";\n\n            &.Collapsed {\n                width: ", ";\n                height: ", ";\n            }\n        "])), transitionDuration, transitionDuration, formatSize(width), formatSize(height), formatSize(mobileWidth), formatSize(mobileHeight), isHorizontal && "hidden", !isHorizontal && "hidden", isHorizontal && formatSize(collapsedSize), !isHorizontal && formatSize(collapsedSize));
});