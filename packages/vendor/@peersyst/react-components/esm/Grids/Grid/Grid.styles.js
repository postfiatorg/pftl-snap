import _taggedTemplateLiteral from "@babel/runtime/helpers/esm/taggedTemplateLiteral";
var _templateObject, _templateObject2;
import styled, { css } from "styled-components";
import { parseGapUnits } from "../util";
export var GridRoot = styled.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n    display: grid;\n    align-items: center;\n    justify-items: center;\n    justify-content: center;\n    grid-auto-flow: row dense;\n\n    max-width: 100%;\n    overflow-x: auto;\n\n    ", "\n"])), function (_ref) {
  var columns = _ref.columns,
    rowSize = _ref.rowSize,
    colGap = _ref.colGap,
    rowGap = _ref.rowGap,
    alignItems = _ref.alignItems,
    justifyItems = _ref.justifyItems,
    justifyContent = _ref.justifyContent;
  return css(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n        grid-template-columns: repeat(", ", minmax(0, 1fr));\n        grid-auto-rows: ", ";\n        column-gap: ", ";\n        row-gap: ", ";\n        align-items: ", ";\n        justify-items: ", ";\n        justify-content: ", ";\n    "])), columns, rowSize || "auto", parseGapUnits(colGap), parseGapUnits(rowGap), alignItems, justifyItems, justifyContent);
});