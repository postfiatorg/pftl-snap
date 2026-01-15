"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ModalRoot = void 0;
var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _Paper = require("../Paper");
var _templateObject;
var ModalRoot = exports.ModalRoot = (0, _styledComponents["default"])(_Paper.Paper)(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n    max-width: 80%;\n    max-height: 80%;\n    padding: 40px;\n    box-sizing: border-box;\n    background-color: ", ";\n    border-radius: ", ";\n    overflow: auto;\n\n    position: relative;\n    isolation: isolate;\n\n    @media (max-width: 650px) {\n        min-width: unset;\n        max-width: unset;\n        max-height: unset;\n        width: 100vw;\n        height: 100vh;\n    }\n"])), function (_ref) {
  var theme = _ref.theme;
  return theme.palette.background;
}, function (props) {
  return props.theme.borderRadius;
});