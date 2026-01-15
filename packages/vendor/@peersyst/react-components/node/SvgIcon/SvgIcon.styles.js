"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ExtendedSvg = void 0;
var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _templateObject;
var ExtendedSvg = exports.ExtendedSvg = _styledComponents["default"].svg(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n    &:not(.Filled) {\n        * {\n            stroke: none;\n\n            &[fill]:not([fill=\"none\"]) {\n                fill: currentColor;\n            }\n            &[stroke]:not([stroke=\"none\"]) {\n                stroke: currentColor;\n\n                &:not([fill]) {\n                    fill: none;\n                }\n            }\n        }\n    }\n"])));