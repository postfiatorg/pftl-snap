"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SwitchTrack = exports.SwitchThumb = exports.SwitchRoot = exports.SwitchChildren = void 0;
var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _reactUtils = require("@peersyst/react-utils");
var _templateObject, _templateObject2, _templateObject3, _templateObject4;
var SwitchRoot = exports.SwitchRoot = _styledComponents["default"].span(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n    display: block;\n    box-sizing: border-box;\n    position: relative;\n    isolation: isolate;\n    width: 60px;\n    height: 32px;\n    border-radius: 36px;\n    cursor: pointer;\n    transition: 0.4s;\n\n    &.Disabled,\n    &.Readonly {\n        cursor: default;\n        pointer-events: none;\n        * {\n            pointer-events: none;\n        }\n    }\n\n    &.Disabled {\n        opacity: 0.6;\n    }\n"])));
var SwitchTrack = exports.SwitchTrack = _styledComponents["default"].span(_templateObject2 || (_templateObject2 = (0, _taggedTemplateLiteral2["default"])(["\n    box-sizing: border-box;\n    position: relative;\n    display: block;\n    width: 100%;\n    height: 100%;\n    padding: 4px;\n    background-color: ", ";\n    transition: background-color 0.2s;\n    border-radius: inherit;\n    box-shadow: inset 0 2px 3px 0 rgba(0, 0, 0, 0.25);\n"])), function (_ref) {
  var theme = _ref.theme,
    checked = _ref.checked;
  return checked ? theme.palette.primary : (0, _reactUtils.emphasize)(theme.palette.text, 0.5);
});
var SwitchThumb = exports.SwitchThumb = _styledComponents["default"].span(_templateObject3 || (_templateObject3 = (0, _taggedTemplateLiteral2["default"])(["\n    display: block;\n    width: 50%;\n    height: 100%;\n    border-radius: 50%;\n    background-color: white;\n    box-shadow: ", ";\n    transform: ", ";\n    transition: transform 0.2s;\n"])), function (_ref2) {
  var theme = _ref2.theme;
  return theme.shadows[2];
}, function (_ref3) {
  var checked = _ref3.checked;
  return checked && "translateX(100%)";
});
var SwitchChildren = exports.SwitchChildren = _styledComponents["default"].div(_templateObject4 || (_templateObject4 = (0, _taggedTemplateLiteral2["default"])(["\n    box-sizing: border-box;\n    position: absolute;\n    left: 0;\n    top: 0;\n    z-index: 1;\n    width: 100%;\n    height: 100%;\n    padding: 4px;\n\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n"])));