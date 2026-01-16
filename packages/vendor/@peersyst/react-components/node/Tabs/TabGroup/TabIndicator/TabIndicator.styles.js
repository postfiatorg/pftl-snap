"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TabIndicatorRoot = void 0;
var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _templateObject;
var TabIndicatorRoot = exports.TabIndicatorRoot = _styledComponents["default"].div(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n    position: absolute;\n    left: ", ";\n    bottom: 0;\n    z-index: 2;\n\n    height: 2px;\n    width: ", ";\n    background-color: ", ";\n\n    transition: all 0.3s ease;\n"])), function (_ref) {
  var position = _ref.position;
  return position + "px";
}, function (_ref2) {
  var width = _ref2.width;
  return width + "px";
}, function (_ref3) {
  var theme = _ref3.theme;
  return theme.palette.primary;
});