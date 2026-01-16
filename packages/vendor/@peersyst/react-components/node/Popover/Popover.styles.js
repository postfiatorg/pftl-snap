"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PopperArrow = exports.PopoverSnitch = exports.PopoverRoot = exports.PopoverPopper = exports.PopoverPaper = exports.PopoverContent = void 0;
var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _Paper = require("../Paper");
var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6;
var PopoverRoot = exports.PopoverRoot = _styledComponents["default"].div(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n    position: relative;\n    display: flex;\n    width: fit-content;\n    height: fit-content;\n"])));
var PopperArrow = exports.PopperArrow = (0, _styledComponents["default"])(_Paper.Paper)(_templateObject2 || (_templateObject2 = (0, _taggedTemplateLiteral2["default"])(["\n    --popper-arrow-size: 8px;\n\n    position: absolute;\n    width: var(--popper-arrow-size);\n    height: var(--popper-arrow-size);\n    background: inherit;\n    border: inherit;\n    visibility: hidden;\n\n    &:before {\n        content: \"\";\n        position: absolute;\n        width: var(--popper-arrow-size);\n        height: var(--popper-arrow-size);\n        background: inherit;\n        border: inherit;\n        visibility: visible;\n        transform: rotate(45deg);\n        box-sizing: border-box;\n    }\n"])));
var PopoverPaper = exports.PopoverPaper = (0, _styledComponents["default"])(_Paper.Paper)(_templateObject3 || (_templateObject3 = (0, _taggedTemplateLiteral2["default"])([""])));
var PopoverPopper = exports.PopoverPopper = _styledComponents["default"].div(_templateObject4 || (_templateObject4 = (0, _taggedTemplateLiteral2["default"])(["\n    z-index: ", ";\n\n    &[data-popper-placement^=\"top\"] > ", " ", " {\n        bottom: calc(var(--popper-arrow-size) * -0.4);\n        border-top: 0;\n        border-left: 0;\n    }\n\n    &[data-popper-placement^=\"bottom\"] > ", " ", " {\n        top: calc(var(--popper-arrow-size) * -0.6);\n        border-bottom: 0;\n        border-right: 0;\n    }\n\n    &[data-popper-placement^=\"left\"] > ", " ", " {\n        right: calc(var(--popper-arrow-size) * -0.4);\n        border-bottom: 0;\n        border-left: 0;\n    }\n\n    &[data-popper-placement^=\"right\"] > ", " ", " {\n        left: calc(var(--popper-arrow-size) * -0.6);\n        border-top: 0;\n        border-right: 0;\n    }\n"])), function (p) {
  return p.theme.zIndex.popover;
}, PopoverPaper, PopperArrow, PopoverPaper, PopperArrow, PopoverPaper, PopperArrow, PopoverPaper, PopperArrow);
var PopoverContent = exports.PopoverContent = _styledComponents["default"].div(_templateObject5 || (_templateObject5 = (0, _taggedTemplateLiteral2["default"])(["\n    position: relative;\n    display: contents;\n    cursor: default;\n"])));
var PopoverSnitch = exports.PopoverSnitch = _styledComponents["default"].div(_templateObject6 || (_templateObject6 = (0, _taggedTemplateLiteral2["default"])(["\n    position: absolute;\n    width: 100%;\n    height: 100%;\n    z-index: -1;\n"])));