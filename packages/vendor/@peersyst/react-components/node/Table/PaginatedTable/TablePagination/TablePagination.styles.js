"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TablePaginationRoot = void 0;
var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _Pagination = require("../../../Pagination");
var _templateObject;
var TablePaginationRoot = exports.TablePaginationRoot = (0, _styledComponents["default"])(_Pagination.Pagination)(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n    .PaginationItem {\n        &.page,\n        &.start-ellipsis,\n        &.end-ellipsis {\n            display: none;\n        }\n    }\n\n    .PagesList {\n        column-gap: 0;\n    }\n"])));