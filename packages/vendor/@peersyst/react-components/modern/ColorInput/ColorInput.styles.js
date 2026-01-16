import _taggedTemplateLiteral from "@babel/runtime/helpers/esm/taggedTemplateLiteral";
var _templateObject, _templateObject2;
import styled, { css } from "styled-components";
import { Row } from "../Row";
export var ColorInputRoot = styled(Row).attrs({
  alignItems: "center",
  gap: 16
})(function (_ref) {
  var hasLabel = _ref.hasLabel;
  return css(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n        position: relative;\n\n        width: ", ";\n\n        > input {\n            position: absolute;\n            bottom: 0;\n            left: 0;\n            opacity: 0;\n            z-index: -1;\n        }\n    "])), hasLabel && "100%");
});
export var ColorInputDisplay = styled.span(function (_ref2) {
  var theme = _ref2.theme,
    active = _ref2.active,
    disabled = _ref2.disabled;
  return css(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n        height: 36px;\n        width: 36px;\n        border-radius: ", ";\n        opacity: ", ";\n\n        cursor: ", ";\n    "])), theme.borderRadius, disabled ? 0.6 : 1, active && "pointer");
});