"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TabGroupRoot = exports.TabGroupContainer = void 0;
var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _templateObject, _templateObject2;
var TabGroupRoot = exports.TabGroupRoot = _styledComponents["default"].div(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n    display: flex;\n    column-gap: 20px;\n    align-items: center;\n\n    min-width: 100%;\n    max-width: 100%;\n"])));
var TabGroupContainer = exports.TabGroupContainer = _styledComponents["default"].div(_templateObject2 || (_templateObject2 = (0, _taggedTemplateLiteral2["default"])(["\n    position: relative;\n    isolation: isolate;\n\n    display: flex;\n    flex: 1;\n    column-gap: 20px;\n    align-items: center;\n    padding: 10px 0;\n\n    overflow-x: scroll;\n    scroll-behavior: smooth;\n    &::-webkit-scrollbar {\n        display: none;\n    }\n\n    -ms-overflow-style: none;\n    scrollbar-width: none;\n"])));