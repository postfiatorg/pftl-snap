import _taggedTemplateLiteral from "@babel/runtime/helpers/esm/taggedTemplateLiteral";
var _templateObject;
import styled from "styled-components";
export var TabIndicatorRoot = styled.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n    position: absolute;\n    left: ", ";\n    bottom: 0;\n    z-index: 2;\n\n    height: 2px;\n    width: ", ";\n    background-color: ", ";\n\n    transition: all 0.3s ease;\n"])), function (_ref) {
  var position = _ref.position;
  return position + "px";
}, function (_ref2) {
  var width = _ref2.width;
  return width + "px";
}, function (_ref3) {
  var theme = _ref3.theme;
  return theme.palette.primary;
});