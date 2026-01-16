import _taggedTemplateLiteral from "@babel/runtime/helpers/esm/taggedTemplateLiteral";
var _templateObject, _templateObject2, _templateObject3, _templateObject4;
import styled, { css } from "styled-components";
import { Row } from "../Row";
import { Typography } from "../Typography";
export var HashRoot = styled(Row).attrs({
  alignItems: "center"
})(function (_ref) {
  var autoLength = _ref.autoLength;
  return css(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n        ", "\n    "])), autoLength && css(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n            width: 100%;\n            max-width: 100%;\n            overflow: hidden;\n        "]))));
});
export var HashText = styled(Typography)(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n    word-break: ", ";\n"])), function (p) {
  return p["break"] && "break-word";
});
export var HashLink = styled.a(function () {
  return css(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n        text-decoration: none;\n        &:hover {\n            text-decoration: underline;\n        }\n    "])));
});