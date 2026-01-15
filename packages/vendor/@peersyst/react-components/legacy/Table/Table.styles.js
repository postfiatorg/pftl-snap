import _taggedTemplateLiteral from "@babel/runtime/helpers/esm/taggedTemplateLiteral";
var _templateObject, _templateObject2, _templateObject3;
import { emphasize } from "@peersyst/react-utils";
import styled, { css } from "styled-components";
export var TableRoot = styled.div(function (_ref) {
  var theme = _ref.theme;
  return css(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n        --table-border-color: ", ";\n        --table-border: 1px solid var(--table-border-color);\n        --table-rows-border: var(--table-border);\n        --table-header-border: var(--table-rows-border);\n        --table-cell-border: var(--table-rows-border);\n\n        position: relative;\n        overflow: hidden;\n\n        display: flex;\n        flex-direction: column;\n\n        border: var(--table-border);\n        border-radius: ", ";\n        background-color: ", ";\n\n        th,\n        td {\n            height: inherit;\n            overflow: hidden;\n            white-space: nowrap;\n            text-overflow: ellipsis;\n            padding: 0 1rem;\n            text-align: left;\n            vertical-align: middle;\n        }\n    "])), emphasize(theme.palette.text, 0.75), theme.borderRadius, theme.palette.background);
});
export var TableContainer = styled.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n    position: relative;\n    width: 100%;\n    height: 100%;\n    overflow: auto;\n    background-color: inherit;\n"])));
export var TableElement = styled.table(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n    border-collapse: separate;\n    border-spacing: 0;\n    table-layout: fixed;\n    width: 100%;\n    background-color: inherit;\n"])));