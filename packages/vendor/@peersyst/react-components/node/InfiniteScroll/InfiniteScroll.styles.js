"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.InfiniteScrollLoader = void 0;
var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _Row = require("../Row");
var _templateObject;
var InfiniteScrollLoader = exports.InfiniteScrollLoader = (0, _styledComponents["default"])(_Row.Row).attrs({
  justifyContent: "center",
  alignItems: "center"
})(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n    margin: 40px 0;\n    opacity: ", ";\n"])), function (p) {
  return p.visible ? 1 : 0;
});