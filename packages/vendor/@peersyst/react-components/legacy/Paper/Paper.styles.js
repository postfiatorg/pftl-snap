import _taggedTemplateLiteral from "@babel/runtime/helpers/esm/taggedTemplateLiteral";
var _templateObject, _templateObject2;
import styled, { css } from "styled-components";
import { alpha } from "@peersyst/react-utils";
var getOverlayAlpha = function getOverlayAlpha(elevation) {
  var alphaValue;
  if (elevation < 1) {
    alphaValue = 5.11916 * Math.pow(elevation, 2);
  } else {
    alphaValue = 4.5 * Math.log(elevation + 1) + 2;
  }
  return Number((alphaValue / 100).toFixed(2));
};
export var PaperRoot = styled.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n    width: max-content;\n    box-sizing: border-box;\n    background-color: ", ";\n    border-radius: ", ";\n    box-shadow: ", ";\n    background-image: ", ";\n    transition: box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;\n"])), function (_ref) {
  var theme = _ref.theme;
  return theme.palette.background;
}, function (_ref2) {
  var square = _ref2.square,
    theme = _ref2.theme;
  return !square && theme.borderRadius;
}, function (_ref3) {
  var elevation = _ref3.elevation,
    theme = _ref3.theme;
  return theme.shadows[elevation];
}, function (_ref4) {
  var theme = _ref4.theme,
    elevation = _ref4.elevation;
  return theme.palette.mode === "dark" && css(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["linear-gradient(", ",\n      ", ")"])), alpha("#fff", getOverlayAlpha(elevation)), alpha("#fff", getOverlayAlpha(elevation)));
});