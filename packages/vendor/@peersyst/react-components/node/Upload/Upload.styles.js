"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UploadRoot = void 0;
var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _templateObject;
var UploadRoot = exports.UploadRoot = _styledComponents["default"].span(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n    display: contents;\n    cursor: pointer;\n    > * *:not(img) {\n        pointer-events: none;\n    }\n    input {\n        display: none;\n    }\n\n    &.Disabled,\n    &.Readonly {\n        cursor: default;\n    }\n"])));