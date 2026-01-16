"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.OnScreenObserverWrapper = void 0;
var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _templateObject;
var OnScreenObserverWrapper = exports.OnScreenObserverWrapper = _styledComponents["default"].div(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n    display: contents;\n\n    > * {\n        margin-top: -", ";\n      padding-bottom: ", ";\n"])), function (p) {
  return p.offset;
}, function (p) {
  return p.offset;
});