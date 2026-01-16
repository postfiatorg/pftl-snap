import _taggedTemplateLiteral from "@babel/runtime/helpers/esm/taggedTemplateLiteral";
var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject10;
/* Greatly inspired by MUI's `CircularProgress` */

import styled, { css, keyframes } from "styled-components";
var circularRotateKeyframe = keyframes(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  0% {\n    transform: rotate(0deg);\n  }\n\n  100% {\n    transform: rotate(360deg);\n  }\n"])));
var circularDashKeyframe = keyframes(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  0% {\n    stroke-dasharray: 1px, 200px;\n    stroke-dashoffset: 0;\n  }\n\n  50% {\n    stroke-dasharray: 100px, 200px;\n    stroke-dashoffset: -15px;\n  }\n\n  100% {\n    stroke-dasharray: 100px, 200px;\n    stroke-dashoffset: -125px;\n  }\n"])));
function getCircularProgressRootStyles(value) {
  if (!value) {
    return css(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n            animation: ", " 1.4s linear infinite;\n        "])), circularRotateKeyframe);
  }
}
function getCircularProgressCircleStyles(value) {
  if (value) {
    return css(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n            transition: stroke-dashoffset 0.3s cubic-bezier(0.4, 0, 0.2, 1);\n        "])));
  } else {
    return css(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n            animation: ", " 1.4s ease-in-out infinite;\n            stroke-dasharray: 80px, 200px;\n            stroke-dashoffset: 0px;\n        "])), circularDashKeyframe);
  }
}
export var CircularProgressRoot = styled.span(function (_ref) {
  var value = _ref.value;
  return css(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n        display: inline-block;\n        ", ";\n    "])), getCircularProgressRootStyles(value));
});
export var CircularProgressSvg = styled.svg(function () {
  return css(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n        display: block;\n    "])));
});
export var CircularProgressCircle = styled.circle(function (_ref2) {
  var value = _ref2.value;
  return css(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["\n        stroke: currentColor;\n        stroke-linecap: round;\n        ", ";\n    "])), getCircularProgressCircleStyles(value));
});
export var CircularProgressContent = styled.div(function () {
  return css(_templateObject9 || (_templateObject9 = _taggedTemplateLiteral(["\n        top: 0;\n        left: 0;\n        bottom: 0;\n        right: 0;\n        position: absolute;\n        display: flex;\n        align-items: center;\n        justify-content: center;\n    "])));
});
export var CircularProgressWrapper = styled.div(function () {
  return css(_templateObject10 || (_templateObject10 = _taggedTemplateLiteral(["\n        position: relative;\n        display: inline-flex;\n    "])));
});