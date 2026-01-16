import _taggedTemplateLiteral from "@babel/runtime/helpers/esm/taggedTemplateLiteral";
var _templateObject, _templateObject2, _templateObject3;
import styled, { css } from "styled-components";
import { ChevronDownIcon } from "../../assets/icons";
export var ExpandableDisplayRoot = styled.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n    flex: 1;\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    column-gap: 10px;\n    min-height: 36px;\n    padding: 0 10px;\n    border-bottom: solid 1px ", ";\n    cursor: pointer;\n    user-select: none;\n\n    ", "\n"])), function (_ref) {
  var theme = _ref.theme;
  return theme.palette.text;
}, function (_ref2) {
  var reverse = _ref2.reverse;
  return reverse && css(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n            flex-direction: row-reverse;\n        "])));
});
export var ExpandableDropdown = styled(ChevronDownIcon)(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n    font-size: 0.7em;\n    transform: ", ";\n"])), function (_ref3) {
  var open = _ref3.open;
  return open && "scale(-1)";
});