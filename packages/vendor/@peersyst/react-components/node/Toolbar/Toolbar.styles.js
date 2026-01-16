"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ToolbarRoot = void 0;
var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _reactUtils = require("@peersyst/react-utils");
var _templateObject;
var ToolbarRoot = exports.ToolbarRoot = _styledComponents["default"].div.attrs(function (_ref) {
  var className = _ref.className;
  return {
    className: (0, _reactUtils.cx)("Toolbar", className)
  };
})(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n    :root {\n        --toolbar-height: 64px;\n    }\n\n    position: relative;\n    display: flex;\n    -webkit-box-align: center;\n    align-items: center;\n    box-sizing: border-box;\n    padding-left: 16px;\n    padding-right: 16px;\n    height: var(--toolbar-height);\n    width: 100%;\n\n    ", " {\n        :root {\n            --toolbar-height: 56px;\n        }\n    }\n"])), function (props) {
  return props.theme.breakpoints.down(650);
});