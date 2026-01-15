import _taggedTemplateLiteral from "@babel/runtime/helpers/esm/taggedTemplateLiteral";
var _templateObject, _templateObject2;
import styled, { css } from "styled-components";
import { alpha } from "@peersyst/react-utils";
export var SelectItemRoot = styled.li(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n    display: block;\n    padding: 10px 20px;\n\n    ", "\n\n    cursor: ", ";\n\n    &:hover {\n        background-color: ", ";\n    }\n"])), function (_ref) {
  var selected = _ref.selected;
  return selected && css(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n            background-color: ", ";\n            font-weight: bold;\n        "])), function (_ref2) {
    var theme = _ref2.theme;
    return alpha(theme.palette.primary, 0.4);
  });
}, function (_ref3) {
  var readonly = _ref3.readonly;
  return !readonly && "pointer";
}, function (_ref4) {
  var theme = _ref4.theme,
    readonly = _ref4.readonly;
  return !readonly && alpha(theme.palette.primary, 0.2);
});