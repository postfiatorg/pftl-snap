import _taggedTemplateLiteral from "@babel/runtime/helpers/esm/taggedTemplateLiteral";
var _templateObject, _templateObject2;
import styled from "styled-components";
export var TextInputRoot = styled.div(function (_ref) {
  var theme = _ref.theme,
    disabled = _ref.disabled;
  return "\n    position: relative;\n\n    display: inline-flex;\n    padding: 0 8px;\n\n    border: solid 1px ".concat(theme.palette.text, ";\n\n    && {\n        &&.Focused,\n        &&.Active:not(.Readonly):not(.Disabled) {\n            border-color: ").concat(theme.palette.primary, ";\n            input,\n            textarea {\n                caret-color: ").concat(theme.palette.primary, ";\n            }\n        }\n\n        &&.Invalid {\n            border-color: ").concat(theme.palette.status.error, ";\n            input,\n            textarea {\n                caret-color: ").concat(theme.palette.status.error, ";\n            }\n        }\n\n        &&.Valid {\n            border-color: ").concat(theme.palette.status.success, ";\n            input,\n            textarea {\n                caret-color: ").concat(theme.palette.status.success, ";\n            }\n        }\n\n        &&.Disabled {\n            border-color: ").concat(theme.palette.disabled, ";\n        }\n    }\n    border-radius: ").concat(theme.borderRadius, ";\n    box-sizing: border-box;\n    width: 100%;\n    cursor: text;\n\n    color: ").concat(disabled && theme.palette.disabled, ";\n\n    input,\n    textarea {\n        color: inherit;\n        font-family: inherit;\n    }\n\n    opacity: ").concat(disabled && 0.7, ";\n");
});
export var ErrorElementWrapper = styled.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n    display: contents;\n    color: ", " !important;\n"])), function (_ref2) {
  var theme = _ref2.theme;
  return theme.palette.status.error;
});
export var ValidElementWrapper = styled.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n    display: contents;\n    color: ", " !important;\n"])), function (_ref3) {
  var theme = _ref3.theme;
  return theme.palette.status.success;
});