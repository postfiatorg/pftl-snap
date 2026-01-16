import _taggedTemplateLiteral from "@babel/runtime/helpers/esm/taggedTemplateLiteral";
var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6;
import styled, { css } from "styled-components";
import { IconButton } from "../../IconButton";
import { alpha } from "@peersyst/react-utils";
import { Row } from "../../Row";
export var TableHeadRoot = styled.thead(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n    position: sticky;\n    z-index: 1;\n    top: 0;\n    background-color: inherit;\n\n    tr {\n        height: 3.5rem;\n\n        th {\n            border-bottom: var(--table-header-border);\n        }\n    }\n"])));
export var TableHeader = styled.th(function (_ref) {
  var canSort = _ref.canSort;
  return css(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n        cursor: ", ";\n\n        &:hover {\n            .TableHeaderSortButtonContainer {\n                opacity: 1;\n                width: auto;\n            }\n        }\n    "])), canSort ? "pointer" : "default");
});
export var TableHeaderContent = styled(Row).attrs({
  gap: "0.25rem",
  alginItems: "center"
})(function (_ref2) {
  var alignment = _ref2.alignment;
  return css(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n        flex-direction: ", ";\n        height: 100%;\n    "])), alignment === "right" ? "row-reverse" : "row");
});
export var TableHeaderTitle = styled.span(function (_ref3) {
  var alignment = _ref3.alignment;
  return css(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n        overflow: hidden;\n        white-space: nowrap;\n        text-overflow: ellipsis;\n        text-align: ", ";\n    "])), alignment);
});
export var TableHeaderSortButtonContainer = styled.div(function (_ref4) {
  var isSorted = _ref4.isSorted;
  return css(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n    display: flex;\n    opacity: ", "};\n    width: ", ";\n    transition: opacity 200ms;\n"])), isSorted ? "1" : "0", isSorted ? "auto" : "0px");
});
export var TableSortButton = styled(IconButton)(function (_ref5) {
  var theme = _ref5.theme,
    active = _ref5.active;
  return css(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n        color: ", ";\n\n        &:hover {\n            color: ", ";\n        }\n    "])), alpha(theme.palette.text, active ? 0.6 : 0.35), alpha(theme.palette.text, 0.5));
});