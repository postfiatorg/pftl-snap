import _taggedTemplateLiteral from "@babel/runtime/helpers/esm/taggedTemplateLiteral";
var _templateObject, _templateObject2;
import styled, { css } from "styled-components";
import { Paper } from "../Paper";
import { getLuminance } from "@peersyst/react-utils";
export var AlertRoot = styled(Paper)(function (_ref) {
  var theme = _ref.theme,
    type = _ref.type;
  var backgroundColor = type && type !== "loading" ? theme.palette.status[type] : theme.palette.background;
  return css(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n        display: flex;\n        align-items: center;\n        flex-wrap: wrap;\n\n        box-sizing: border-box;\n        width: auto;\n        min-height: 56px;\n        padding: 14px;\n        border-radius: ", ";\n        background-color: ", ";\n        color: ", ";\n\n        svg {\n            font-size: 18px;\n        }\n    "])), theme.borderRadius, backgroundColor, getLuminance(backgroundColor) > 0.5 ? "#000" : "#FFF");
});
export var AlertAction = styled.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n    margin-left: auto;\n"])));