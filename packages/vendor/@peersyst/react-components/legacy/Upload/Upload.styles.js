import _taggedTemplateLiteral from "@babel/runtime/helpers/esm/taggedTemplateLiteral";
var _templateObject;
import styled from "styled-components";
export var UploadRoot = styled.span(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n    display: contents;\n    cursor: pointer;\n    > * *:not(img) {\n        pointer-events: none;\n    }\n    input {\n        display: none;\n    }\n\n    &.Disabled,\n    &.Readonly {\n        cursor: default;\n    }\n"])));