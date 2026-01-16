import _taggedTemplateLiteral from "@babel/runtime/helpers/esm/taggedTemplateLiteral";
var _templateObject;
import { FormControl } from "../FormControl";
import styled from "styled-components";
export default styled(FormControl)(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n    cursor: pointer;\n    * {\n        cursor: pointer;\n    }\n\n    &.Disabled,\n    &.Readonly {\n        cursor: default;\n        pointer-events: none;\n        * {\n            pointer-events: none;\n        }\n    }\n"])));