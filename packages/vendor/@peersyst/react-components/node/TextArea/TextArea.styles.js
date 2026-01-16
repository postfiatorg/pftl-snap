"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TextAreaInput = void 0;
var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _templateObject;
var TextAreaInput = exports.TextAreaInput = _styledComponents["default"].textarea(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n    box-sizing: border-box;\n    border-radius: ", ";\n    width: 100%;\n    height: 100px;\n    padding: 10px 5px;\n    resize: none;\n    border: none;\n    outline: none;\n    background-color: transparent;\n"])), function (props) {
  return props.theme.borderRadius;
});