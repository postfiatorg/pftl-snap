import _taggedTemplateLiteral from "@babel/runtime/helpers/esm/taggedTemplateLiteral";
var _templateObject, _templateObject2;
import styled, { css } from "styled-components";
var notRenderBackdropStyles = css(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n    pointer-events: none;\n\n    * {\n        pointer-events: auto;\n    }\n"])));
export var BackdropRoot = styled.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n    position: fixed;\n    top: 0;\n    left: 0;\n    z-index: ", ";\n\n    display: flex;\n    justify-content: center;\n    align-items: center;\n\n    width: 100vw;\n    height: 100vh;\n    background-color: ", ";\n\n    ", ";\n"])), function (p) {
  return p.theme.zIndex.modal;
}, function (_ref) {
  var theme = _ref.theme,
    transparent = _ref.transparent;
  return transparent ? "transparent" : theme.palette.backdrop;
}, function (_ref2) {
  var renderBackdrop = _ref2.renderBackdrop;
  return !renderBackdrop && notRenderBackdropStyles;
});