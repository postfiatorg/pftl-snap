import _taggedTemplateLiteral from "@babel/runtime/helpers/esm/taggedTemplateLiteral";
var _templateObject, _templateObject2;
import styled, { css } from "styled-components";
import { getLuminance } from "@peersyst/react-utils";
export var BadgeRoot = styled.span(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n    position: relative;\n    display: inline-flex;\n    vertical-align: middle;\n    flex-shrink: 0;\n"])));
var getBadgePosition = function getBadgePosition(position, overlap) {
  var value = overlap === "circular" ? "14%" : 0;
  return {
    top: position.vertical === "top" ? value : undefined,
    bottom: position.vertical === "bottom" ? value : undefined,
    left: position.horizontal === "left" ? value : undefined,
    right: position.horizontal === "right" ? value : undefined
  };
};
export var BadgeItem = styled.span(function (_ref) {
  var theme = _ref.theme,
    position = _ref.position,
    hasContent = _ref.hasContent,
    overlap = _ref.overlap;
  return css(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n        position: absolute;\n        ", ";\n        z-index: 1;\n        display: flex;\n        flex-flow: row wrap;\n        -webkit-box-pack: center;\n        place-content: center;\n        -webkit-box-align: center;\n        align-items: center;\n        box-sizing: border-box;\n        padding: 0 6px;\n        height: ", ";\n        min-width: ", ";\n        border-radius: 10px;\n        font-weight: 500;\n        font-size: 0.75rem;\n        background-color: ", ";\n        color: ", ";\n    "])), getBadgePosition(position, overlap), hasContent ? "20px" : "8px", hasContent ? "20px" : "8px", theme.palette.primary, getLuminance(theme.palette.primary) > 0.7 ? "black" : "white");
});