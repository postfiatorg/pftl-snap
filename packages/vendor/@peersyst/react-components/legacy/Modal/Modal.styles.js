import _taggedTemplateLiteral from "@babel/runtime/helpers/esm/taggedTemplateLiteral";
var _templateObject;
import styled from "styled-components";
import { Paper } from "../Paper";
export var ModalRoot = styled(Paper)(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n    max-width: 80%;\n    max-height: 80%;\n    padding: 40px;\n    box-sizing: border-box;\n    background-color: ", ";\n    border-radius: ", ";\n    overflow: auto;\n\n    position: relative;\n    isolation: isolate;\n\n    @media (max-width: 650px) {\n        min-width: unset;\n        max-width: unset;\n        max-height: unset;\n        width: 100vw;\n        height: 100vh;\n    }\n"])), function (_ref) {
  var theme = _ref.theme;
  return theme.palette.background;
}, function (props) {
  return props.theme.borderRadius;
});