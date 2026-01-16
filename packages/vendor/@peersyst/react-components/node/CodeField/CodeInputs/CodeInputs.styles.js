"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CodeInputsRoot = exports.CodeInput = void 0;
var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _TextField = require("../../TextField");
var _Row = require("../../Row");
var _templateObject, _templateObject2;
var CodeInputsRoot = exports.CodeInputsRoot = (0, _styledComponents["default"])(_Row.Row)(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n    width: 100%;\n"])));
var CodeInput = exports.CodeInput = (0, _styledComponents["default"])(_TextField.TextField)(_templateObject2 || (_templateObject2 = (0, _taggedTemplateLiteral2["default"])(["\n    flex: 1;\n    input {\n        text-align: center;\n    }\n"])));