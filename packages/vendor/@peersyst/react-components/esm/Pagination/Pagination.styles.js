import _taggedTemplateLiteral from "@babel/runtime/helpers/esm/taggedTemplateLiteral";
var _templateObject, _templateObject2;
import styled, { css } from "styled-components";
export var PaginationRoot = styled.nav(_templateObject || (_templateObject = _taggedTemplateLiteral([""])));
var listSpacings = {
  sm: 3,
  md: 6,
  lg: 8
};
export var PagesList = styled.ul(function (_ref) {
  var size = _ref.size;
  return css(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n        display: flex;\n        flex-wrap: wrap;\n        align-items: center;\n        padding: 0;\n        margin: 0;\n        list-style: none;\n        column-gap: ", "px;\n    "])), listSpacings[size]);
});