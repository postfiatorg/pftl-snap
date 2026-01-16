import _taggedTemplateLiteral from "@babel/runtime/helpers/esm/taggedTemplateLiteral";
var _templateObject;
import styled, { css } from "styled-components";
export var IconButtonRoot = styled.button(function (_ref) {
  var color = _ref.color;
  return css(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n        cursor: pointer;\n        box-sizing: content-box;\n        padding: 3px;\n        display: flex;\n        border-radius: 100%;\n        border: 0;\n        background-color: transparent;\n        color: ", ";\n\n        &:hover {\n            opacity: 0.8;\n        }\n\n        &:active {\n            opacity: 0.6;\n        }\n\n        &:disabled {\n            cursor: default;\n            opacity: 0.6;\n            pointer-events: none;\n            * {\n                pointer-events: none;\n            }\n        }\n    "])), color);
});