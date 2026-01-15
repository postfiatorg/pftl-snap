import _taggedTemplateLiteral from "@babel/runtime/helpers/esm/taggedTemplateLiteral";
var _templateObject;
import styled, { css } from "styled-components";
import { Label } from "../Label";
export var FormControlLabelRoot = styled(Label)(function (_ref) {
  var theme = _ref.theme;
  return css(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n        &&.Focused {\n            > .Label {\n                color: ", ";\n            }\n        }\n\n        &&.Invalid {\n            > .Label {\n                color: ", ";\n            }\n        }\n\n        &&.Valid {\n            > .Label {\n                color: ", ";\n            }\n        }\n\n        &&.Disabled {\n            > .Label {\n                color: ", ";\n            }\n        }\n    "])), theme.palette.primary, theme.palette.status.error, theme.palette.status.success, theme.palette.disabled);
});