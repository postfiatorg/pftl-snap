import _taggedTemplateLiteral from "@babel/runtime/helpers/esm/taggedTemplateLiteral";
var _templateObject, _templateObject2, _templateObject3;
import styled, { css } from "styled-components";
import { Row } from "../Row";
export var DividerRoot = styled.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n    ", "\n"])), function (_ref) {
  var height = _ref.height,
    width = _ref.width,
    color = _ref.color;
  return css(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n        height: ", ";\n        background-color: ", ";\n\n        width: ", ";\n    "])), height, color || "currentColor", function () {
    switch (width) {
      case "sm":
        return "100px";
      case "md":
        return "250px";
      case "lg":
        return "500px";
      case "full-width":
        return "100%";
    }
  });
});
export var DividerWithChildren = styled(Row)(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n    justify-content: space-between;\n    align-items: center;\n    column-gap: 20px;\n\n    width: ", ";\n"])), function (_ref2) {
  var width = _ref2.width;
  switch (width) {
    case "sm":
      return "100px";
    case "md":
      return "250px";
    case "lg":
      return "500px";
    case "full-width":
      return "100%";
  }
});