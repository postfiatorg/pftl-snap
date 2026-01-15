import _taggedTemplateLiteral from "@babel/runtime/helpers/esm/taggedTemplateLiteral";
var _templateObject, _templateObject2;
import styled, { css } from "styled-components";
import { Paper } from "../Paper";
export var AppBarRoot = styled.header(function (_ref) {
  var theme = _ref.theme,
    position = _ref.position;
  return css(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n        position: ", ";\n        width: 100%;\n        background-color: ", ";\n        z-index: ", ";\n    "])), position, theme.palette.background, theme.zIndex.appBar);
});
export var AppBarContent = styled(Paper)(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n    width: 100%;\n    height: 100%;\n    border-radius: 0;\n    background-color: inherit;\n"])));