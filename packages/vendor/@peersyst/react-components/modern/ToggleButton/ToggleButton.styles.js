import _taggedTemplateLiteral from "@babel/runtime/helpers/esm/taggedTemplateLiteral";
var _templateObject;
import styled, { css } from "styled-components";
import { Button } from "../Button";
import { getLuminance } from "@peersyst/react-utils";
export var ToggleButtonRoot = styled(Button)(function (_ref) {
  var theme = _ref.theme;
  return css(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n        transition: color 100ms, background-color 100ms;\n        &.Selected {\n            background-color: ", ";\n            color: ", ";\n        }\n    "])), theme.palette.primary, getLuminance(theme.palette.primary) > 0.7 ? "black" : "white");
});