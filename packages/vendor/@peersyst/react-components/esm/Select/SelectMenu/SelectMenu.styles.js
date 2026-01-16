import _taggedTemplateLiteral from "@babel/runtime/helpers/esm/taggedTemplateLiteral";
var _templateObject;
import styled, { css } from "styled-components";
import { Paper } from "../../Paper";
export var SelectMenuRoot = styled(Paper)(function (_ref) {
  var theme = _ref.theme,
    expandable = _ref.expandable;
  return css(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n        margin-block: 0;\n        z-index: ", ";\n        position: ", ";\n        top: 100%;\n        width: 100%;\n        max-height: 220px;\n        overflow-y: auto;\n        padding: 10px 0;\n    "])), theme.zIndex.selectMenu, expandable ? "unset" : "absolute");
});