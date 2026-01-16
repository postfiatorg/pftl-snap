import _taggedTemplateLiteral from "@babel/runtime/helpers/esm/taggedTemplateLiteral";
var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6;
import styled, { css } from "styled-components";
var sliderColor = css(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n    color: ", ";\n"])), function (_ref) {
  var disabled = _ref.disabled,
    theme = _ref.theme;
  return disabled ? theme.palette.disabled : theme.palette.primary;
});
export var SliderRoot = styled.span(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n    position: relative;\n    isolation: isolate;\n\n    display: inline-block;\n\n    ", ";\n\n    height: 4px;\n    width: 100%;\n    padding: 12px 0;\n    box-sizing: content-box;\n    border-radius: 12px;\n    cursor: pointer;\n\n    &.Disabled {\n        cursor: default;\n        pointer-events: none;\n        * {\n            pointer-events: none;\n        }\n    }\n"])), sliderColor);
export var SliderRail = styled.span(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n    position: absolute;\n    top: 50%;\n    transform: translateY(-50%);\n\n    display: block;\n    width: 100%;\n    height: inherit;\n\n    border-radius: inherit;\n    background-color: currentColor;\n    opacity: 0.5;\n"])));
export var SliderTrack = styled.span(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n    position: absolute;\n    left: 0;\n    top: 50%;\n    transform: translateY(-50%);\n\n    display: block;\n    height: inherit;\n\n    border-radius: inherit;\n    border: 1px solid currentColor;\n    background-color: currentColor;\n"])));
var thumbStyles = css(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n    width: 20px;\n    height: 20px;\n    border-radius: 50%;\n    background: currentColor;\n    box-shadow: ", ";\n\n    &:hover {\n        transform: ", ";\n    }\n"])), function (_ref2) {
  var theme = _ref2.theme;
  return theme.shadows[5];
}, function (_ref3) {
  var disabled = _ref3.disabled;
  return !disabled && "scale(1.1)";
});
export var SliderInput = styled.input(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n    cursor: ", ";\n    position: absolute;\n    top: 1px;\n    left: -9px;\n    border: 0;\n    height: 100%;\n    margin: -1px;\n    padding: 0;\n\n    white-space: nowrap;\n    width: calc(100% + 20px);\n    direction: ltr;\n\n    -webkit-appearance: none;\n    background-color: transparent;\n    color: inherit;\n\n    &::-webkit-slider-thumb {\n        -webkit-appearance: none;\n        appearance: none;\n        ", ";\n    }\n\n    &::-moz-range-thumb {\n        pointer-events: none;\n        ", ";\n    }\n"])), function (_ref4) {
  var disabled = _ref4.disabled;
  return !disabled && "pointer";
}, thumbStyles, thumbStyles);