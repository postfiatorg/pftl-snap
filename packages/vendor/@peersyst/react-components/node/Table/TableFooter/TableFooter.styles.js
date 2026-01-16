"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TableFooterRoot = void 0;
var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _Row = require("../../Row");
var _templateObject;
var TableFooterRoot = exports.TableFooterRoot = (0, _styledComponents["default"])(_Row.Row).attrs({
  gap: "1.25rem",
  alignItems: "center"
})(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n    display: flex;\n\n    height: 3.5rem;\n    min-height: 3.5rem;\n    padding: 0 1rem;\n\n    background-color: inherit;\n    border-top: var(--table-header-border);\n"])));