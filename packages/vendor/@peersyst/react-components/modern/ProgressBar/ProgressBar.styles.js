import _taggedTemplateLiteral from "@babel/runtime/helpers/esm/taggedTemplateLiteral";
var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9;
import styled, { css, keyframes } from "styled-components";
import { darken } from "@peersyst/react-utils";
export var ProgressBarRoot = styled.span(function (_ref) {
  var theme = _ref.theme;
  return css(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n        position: relative;\n        isolation: isolate;\n        display: block;\n        height: 3px;\n        color: ", ";\n        background-color: ", ";\n    "])), theme.palette.primary, darken(theme.palette.primary, 0.5));
});
var indeterminate1Keyframe = keyframes(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  0% {\n    left: -35%;\n    right: 100%;\n  }\n  60% {\n    left: 100%;\n    right: -90%;\n  }\n  100% {\n    left: 100%;\n    right: -90%;\n  }\n"])));
var indeterminate2Keyframe = keyframes(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  0% {\n    left: -200%;\n    right: 100%;\n  }\n  60% {\n    left: 107%;\n    right: -8%;\n  }\n  100% {\n    left: 107%;\n    right: -8%;\n  }\n"])));
var progressBarTrackStyles = css(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n    position: absolute;\n    left: 0;\n    top: 50%;\n    height: inherit;\n    border-radius: inherit;\n    transition: transform 0.4s linear;\n    transform-origin: left center;\n    color: inherit;\n    background-color: currentColor;\n"])));
var loadingProgressBarTrackStyles = css(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n    width: auto;\n    transform: translateY(-50%);\n"])));
export var ProgressBarTrack = styled.span(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n    ", ";\n    width: 100%;\n"])), progressBarTrackStyles);
export var LoadingProgressBarTrack1 = styled.span(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n    ", ";\n    ", ";\n\n    animation: ", " 2.1s cubic-bezier(0.65, 0.815, 0.735, 0.395) infinite;\n"])), progressBarTrackStyles, loadingProgressBarTrackStyles, indeterminate1Keyframe);
export var LoadingProgressBarTrack2 = styled.span(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["\n    ", ";\n    ", ";\n\n    animation: ", " 2.1s cubic-bezier(0.165, 0.84, 0.44, 1) 1.15s infinite;\n"])), progressBarTrackStyles, loadingProgressBarTrackStyles, indeterminate2Keyframe);
export var LoadingProgressBarContainer = styled.span(_templateObject9 || (_templateObject9 = _taggedTemplateLiteral(["\n    position: absolute;\n    top: 50%;\n    left: 0;\n    transform: translateY(-50%);\n    display: block;\n    height: inherit;\n    width: 100%;\n    overflow: hidden;\n    color: inherit;\n"])));