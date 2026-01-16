import _taggedTemplateLiteral from "@babel/runtime/helpers/esm/taggedTemplateLiteral";
var _templateObject, _templateObject2;
import styled, { css } from "styled-components";
import { Row } from "../Row";
import { alpha } from "@peersyst/react-utils";
export var chipGapSizes = {
  sm: "0.5rem",
  md: "0.625rem",
  lg: "0.625rem"
};
export var ChipRoot = styled(Row).attrs({
  alignItems: "center"
})(function (_ref) {
  var theme = _ref.theme;
  return css(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n        box-sizing: border-box;\n        white-space: nowrap;\n        vertical-align: middle;\n\n        color: ", ";\n        font-size: 0.8125rem;\n\n        border-radius: ", ";\n\n        width: fit-content;\n\n        &.Sm {\n            font-size: 0.75rem;\n            height: 1.5rem;\n            padding: 0 0.625rem;\n\n            &.Rounded {\n                border-radius: 0.75rem;\n            }\n        }\n        &.Md {\n            height: 2rem;\n            padding: 0 0.75rem;\n\n            &.Rounded {\n                border-radius: 1rem;\n            }\n        }\n        &.Lg {\n            height: 2.25rem;\n            padding: 0 0.875rem;\n\n            &.Rounded {\n                border-radius: 1.125rem;\n            }\n        }\n\n        &.Filled {\n            --chipColor: ", ";\n            background-color: var(--chipColor);\n            border: none;\n        }\n        &.Outlined {\n            --chipColor: ", ";\n            background-color: transparent;\n            border: 1px solid var(--chipColor);\n        }\n\n        &.Disabled {\n            color: ", ";\n            --chipColor: ", ";\n\n            &.Outlined {\n                --chipColor: ", ";\n            }\n        }\n\n        cursor: default;\n        &.Clickable:not(.Disabled) {\n            cursor: pointer;\n\n            &:hover {\n                --chipColor: ", ";\n\n                &.Outlined {\n                    --chipColor: ", ";\n                }\n            }\n\n            &:active {\n                --chipColor: ", ";\n\n                &.Outlined {\n                    --chipColor: ", ";\n                }\n            }\n        }\n\n        transition: background-color 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,\n            border 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;\n    "])), theme.palette.text, theme.borderRadius, alpha(theme.palette.text, 0.1), alpha(theme.palette.text, 0.3), theme.palette.disabled, alpha(theme.palette.disabled, 0.2), alpha(theme.palette.disabled, 0.4), alpha(theme.palette.text, 0.15), alpha(theme.palette.text, 0.35), alpha(theme.palette.text, 0.12), alpha(theme.palette.text, 0.32));
});
export var ChipLabel = styled.span(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n    font-size: 0.8125rem;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n"])));