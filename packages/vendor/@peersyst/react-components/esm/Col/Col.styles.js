import _taggedTemplateLiteral from "@babel/runtime/helpers/esm/taggedTemplateLiteral";
var _templateObject, _templateObject2;
import styled, { css } from "styled-components";
export var ColRoot = styled.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n    display: flex;\n    ", "\n"])), function (_ref) {
  var flex = _ref.flex,
    alignItems = _ref.alignItems,
    justifyContent = _ref.justifyContent,
    gap = _ref.gap,
    reverse = _ref.reverse;
  return css(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n        flex-direction: ", ";\n        flex: ", ";\n        align-items: ", ";\n        justify-content: ", ";\n        row-gap: ", ";\n    "])), reverse ? "column-reverse" : "column", flex, alignItems, justifyContent, gap !== undefined && (typeof gap === "number" ? gap + "px" : gap));
});