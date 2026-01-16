import _taggedTemplateLiteral from "@babel/runtime/helpers/esm/taggedTemplateLiteral";
var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9;
import styled, { css, keyframes } from "styled-components";
var wave = keyframes(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  0% {\n    transform: translateX(-100%);\n  }\n\n  40% {\n    transform: translateX(100%);\n  }\n\n  100% {\n    transform: translateX(100%);\n  }\n"])));
var pulse = keyframes(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  0% {\n    opacity: 0;\n  }\n\n  40% {\n    opacity: 1;\n  }\n\n  100% {\n    opacity: 0;\n  }\n"])));
export var SkeletonRoot = styled.span(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  ", "\n  }\n\n  ", "\n"])), function (_ref) {
  var theme = _ref.theme,
    appearance = _ref.appearance;
  return theme.palette.mode === "light" || appearance === "light" ? css(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n                --skeleton-bg: rgba(0, 0, 0, 0.11);\n                --skeleton-wave: linear-gradient(\n                    90deg,\n                    transparent,\n                    rgba(0, 0, 0, 0.04),\n                    transparent\n                );\n                --skeleton-pulse: rgba(0, 0, 0, 0.12);\n            "]))) : css(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n                --skeleton-bg: rgba(255, 255, 255, 0.13);\n                --skeleton-wave: linear-gradient(\n                    90deg,\n                    transparent,\n                    rgba(255, 255, 255, 0.08),\n                    transparent\n                );\n                --skeleton-pulse: rgba(255, 255, 255, 0.14);\n            "])));
}, function (_ref2) {
  var isLoading = _ref2.isLoading,
    animation = _ref2.animation,
    width = _ref2.width,
    height = _ref2.height,
    shape = _ref2.shape;
  return isLoading ? css(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n      position: relative;\n      isolation: isolate;\n      display: block;\n      overflow: hidden;\n      width: ", ";\n      height: ", ";\n      border-radius: ", ";\n    \n    }\n    \n    > * {\n    opacity: 0 !important;\n    }\n            \n    &:before {\n      content: '';\n      position: absolute;\n      top: 0;\n      left: 0;\n      width: 100%;\n      height: 100%;\n      z-index: 1;\n      background-color: var(--skeleton-bg);\n    }\n\n    &:after {\n      content: '';\n      position: absolute;\n      top: 0;\n      left: 0;\n      z-index: 2;\n      width: 100%;\n      height: 100%;\n\n      ", "\n  "])), width, height, function (_ref3) {
    var theme = _ref3.theme;
    switch (shape) {
      case "rectangular":
        return 0;
      case "circular":
        return "100%";
      case "stadium":
        return theme.borderRadius;
    }
  }, function () {
    if (animation === "wave") return css(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n                  animation: 1.6s linear 0.5s infinite normal none running ", ";\n                  background: var(--skeleton-wave);\n                  transform: translateX(-100%);\n                  inset: 0;\n              "])), wave);else if (animation === "pulse") return css(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["\n                  background-color: var(--skeleton-pulse);\n                  opacity: 0;\n                  animation: 1.5s ease-in-out 0.5s infinite normal none running ", ";\n              "])), pulse);else return;
  }) : css(_templateObject9 || (_templateObject9 = _taggedTemplateLiteral(["\n                display: contents;\n            "])));
});