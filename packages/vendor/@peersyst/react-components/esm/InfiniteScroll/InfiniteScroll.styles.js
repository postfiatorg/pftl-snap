import _taggedTemplateLiteral from "@babel/runtime/helpers/esm/taggedTemplateLiteral";
var _templateObject;
import styled from "styled-components";
import { Row } from "../Row";
export var InfiniteScrollLoader = styled(Row).attrs({
  justifyContent: "center",
  alignItems: "center"
})(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n    margin: 40px 0;\n    opacity: ", ";\n"])), function (p) {
  return p.visible ? 1 : 0;
});