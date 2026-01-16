import _taggedTemplateLiteral from "@babel/runtime/helpers/esm/taggedTemplateLiteral";
import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
var _templateObject;
import styled, { css } from "styled-components";
var checkboxColor = css(function (_ref) {
  var theme = _ref.theme;
  return _defineProperty(_defineProperty({
    color: theme.palette.text
  }, "&.Disabled", {
    color: theme.palette.disabled
  }), "&.Checked", {
    color: theme.palette.primary
  });
});
export var CheckboxRoot = styled.span(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n    box-sizing: border-box;\n    position: relative;\n    display: flex;\n    ", ";\n    font-size: 1.2rem;\n"])), checkboxColor);