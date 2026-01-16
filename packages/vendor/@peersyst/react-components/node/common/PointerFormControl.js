"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));
var _FormControl = require("../FormControl");
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _templateObject;
var _default = exports["default"] = (0, _styledComponents["default"])(_FormControl.FormControl)(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n    cursor: pointer;\n    * {\n        cursor: pointer;\n    }\n\n    &.Disabled,\n    &.Readonly {\n        cursor: default;\n        pointer-events: none;\n        * {\n            pointer-events: none;\n        }\n    }\n"])));