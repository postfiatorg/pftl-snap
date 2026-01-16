import _taggedTemplateLiteral from "@babel/runtime/helpers/esm/taggedTemplateLiteral";
var _templateObject, _templateObject2;
import styled, { css } from "styled-components";
export var TypographyRoot = styled.div(function (_ref) {
  var _theme$fonts;
  var theme = _ref.theme,
    variantStyles = _ref.variantStyles,
    textTransform = _ref.textTransform,
    textAlign = _ref.textAlign,
    fontStyle = _ref.fontStyle,
    fontWeight = _ref.fontWeight,
    font = _ref.font,
    color = _ref.color,
    _ref$numberOfLines = _ref.numberOfLines,
    numberOfLines = _ref$numberOfLines === void 0 ? 0 : _ref$numberOfLines;
  return css(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n        overflow: hidden;\n        display: block;\n        margin: 0;\n        margin-block-start: 0;\n        margin-block-end: 0;\n        margin-inline-start: 0;\n        margin-inline-end: 0;\n        line-height: normal;\n\n        ", ";\n\n        text-transform: ", ";\n        text-align: ", ";\n        font-style: ", ";\n        font-weight: ", ";\n        font-family: ", ";\n        ", ";\n\n        color: ", ";\n\n        &.Light {\n            opacity: 0.7;\n        }\n    "])), css(variantStyles), textTransform, textAlign, fontStyle, fontWeight, font && ((_theme$fonts = theme.fonts) == null ? void 0 : _theme$fonts[font]), numberOfLines && css(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n            -webkit-line-clamp: ", ";\n            display: -webkit-box;\n            -webkit-box-orient: vertical;\n            word-wrap: break-word; /* Important for long words! */\n        "])), numberOfLines), color);
});