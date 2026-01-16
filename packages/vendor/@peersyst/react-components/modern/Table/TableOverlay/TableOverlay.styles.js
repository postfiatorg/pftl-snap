import _taggedTemplateLiteral from "@babel/runtime/helpers/esm/taggedTemplateLiteral";
var _templateObject;
import { alpha } from "@peersyst/react-utils";
import styled from "styled-components";
import { css } from "styled-components";
export var TableOverlayRoot = styled.div(function (_ref) {
  var theme = _ref.theme;
  return css(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n        position: absolute;\n\n        display: flex;\n        align-items: center;\n        justify-content: center;\n\n        pointer-events: none;\n\n        background-color: ", ";\n    "])), alpha(theme.palette.text, 0.1));
});