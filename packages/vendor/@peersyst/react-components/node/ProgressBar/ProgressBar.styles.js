"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ProgressBarTrack = exports.ProgressBarRoot = exports.LoadingProgressBarTrack2 = exports.LoadingProgressBarTrack1 = exports.LoadingProgressBarContainer = void 0;
var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));
var _styledComponents = _interopRequireWildcard(require("styled-components"));
var _reactUtils = require("@peersyst/react-utils");
var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9;
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
var ProgressBarRoot = exports.ProgressBarRoot = _styledComponents["default"].span(function (_ref) {
  var theme = _ref.theme;
  return (0, _styledComponents.css)(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n        position: relative;\n        isolation: isolate;\n        display: block;\n        height: 3px;\n        color: ", ";\n        background-color: ", ";\n    "])), theme.palette.primary, (0, _reactUtils.darken)(theme.palette.primary, 0.5));
});
var indeterminate1Keyframe = (0, _styledComponents.keyframes)(_templateObject2 || (_templateObject2 = (0, _taggedTemplateLiteral2["default"])(["\n  0% {\n    left: -35%;\n    right: 100%;\n  }\n  60% {\n    left: 100%;\n    right: -90%;\n  }\n  100% {\n    left: 100%;\n    right: -90%;\n  }\n"])));
var indeterminate2Keyframe = (0, _styledComponents.keyframes)(_templateObject3 || (_templateObject3 = (0, _taggedTemplateLiteral2["default"])(["\n  0% {\n    left: -200%;\n    right: 100%;\n  }\n  60% {\n    left: 107%;\n    right: -8%;\n  }\n  100% {\n    left: 107%;\n    right: -8%;\n  }\n"])));
var progressBarTrackStyles = (0, _styledComponents.css)(_templateObject4 || (_templateObject4 = (0, _taggedTemplateLiteral2["default"])(["\n    position: absolute;\n    left: 0;\n    top: 50%;\n    height: inherit;\n    border-radius: inherit;\n    transition: transform 0.4s linear;\n    transform-origin: left center;\n    color: inherit;\n    background-color: currentColor;\n"])));
var loadingProgressBarTrackStyles = (0, _styledComponents.css)(_templateObject5 || (_templateObject5 = (0, _taggedTemplateLiteral2["default"])(["\n    width: auto;\n    transform: translateY(-50%);\n"])));
var ProgressBarTrack = exports.ProgressBarTrack = _styledComponents["default"].span(_templateObject6 || (_templateObject6 = (0, _taggedTemplateLiteral2["default"])(["\n    ", ";\n    width: 100%;\n"])), progressBarTrackStyles);
var LoadingProgressBarTrack1 = exports.LoadingProgressBarTrack1 = _styledComponents["default"].span(_templateObject7 || (_templateObject7 = (0, _taggedTemplateLiteral2["default"])(["\n    ", ";\n    ", ";\n\n    animation: ", " 2.1s cubic-bezier(0.65, 0.815, 0.735, 0.395) infinite;\n"])), progressBarTrackStyles, loadingProgressBarTrackStyles, indeterminate1Keyframe);
var LoadingProgressBarTrack2 = exports.LoadingProgressBarTrack2 = _styledComponents["default"].span(_templateObject8 || (_templateObject8 = (0, _taggedTemplateLiteral2["default"])(["\n    ", ";\n    ", ";\n\n    animation: ", " 2.1s cubic-bezier(0.165, 0.84, 0.44, 1) 1.15s infinite;\n"])), progressBarTrackStyles, loadingProgressBarTrackStyles, indeterminate2Keyframe);
var LoadingProgressBarContainer = exports.LoadingProgressBarContainer = _styledComponents["default"].span(_templateObject9 || (_templateObject9 = (0, _taggedTemplateLiteral2["default"])(["\n    position: absolute;\n    top: 50%;\n    left: 0;\n    transform: translateY(-50%);\n    display: block;\n    height: inherit;\n    width: 100%;\n    overflow: hidden;\n    color: inherit;\n"])));