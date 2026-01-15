"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TableBodyRoot = void 0;
var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _templateObject;
var TableBodyRoot = exports.TableBodyRoot = _styledComponents["default"].tbody(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n    position: relative;\n\n    background-color: inherit;\n\n    tr {\n        height: 3.25rem;\n\n        td {\n            border-bottom: var(--table-cell-border);\n        }\n    }\n"])));