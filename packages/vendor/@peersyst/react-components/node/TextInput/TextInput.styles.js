"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ValidElementWrapper = exports.TextInputRoot = exports.ErrorElementWrapper = void 0;
var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _templateObject, _templateObject2;
var TextInputRoot = exports.TextInputRoot = _styledComponents["default"].div(function (_ref) {
  var theme = _ref.theme,
    disabled = _ref.disabled;
  return "\n    position: relative;\n\n    display: inline-flex;\n    padding: 0 8px;\n\n    border: solid 1px ".concat(theme.palette.text, ";\n\n    && {\n        &&.Focused,\n        &&.Active:not(.Readonly):not(.Disabled) {\n            border-color: ").concat(theme.palette.primary, ";\n            input,\n            textarea {\n                caret-color: ").concat(theme.palette.primary, ";\n            }\n        }\n\n        &&.Invalid {\n            border-color: ").concat(theme.palette.status.error, ";\n            input,\n            textarea {\n                caret-color: ").concat(theme.palette.status.error, ";\n            }\n        }\n\n        &&.Valid {\n            border-color: ").concat(theme.palette.status.success, ";\n            input,\n            textarea {\n                caret-color: ").concat(theme.palette.status.success, ";\n            }\n        }\n\n        &&.Disabled {\n            border-color: ").concat(theme.palette.disabled, ";\n        }\n    }\n    border-radius: ").concat(theme.borderRadius, ";\n    box-sizing: border-box;\n    width: 100%;\n    cursor: text;\n\n    color: ").concat(disabled && theme.palette.disabled, ";\n\n    input,\n    textarea {\n        color: inherit;\n        font-family: inherit;\n    }\n\n    opacity: ").concat(disabled && 0.7, ";\n");
});
var ErrorElementWrapper = exports.ErrorElementWrapper = _styledComponents["default"].div(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n    display: contents;\n    color: ", " !important;\n"])), function (_ref2) {
  var theme = _ref2.theme;
  return theme.palette.status.error;
});
var ValidElementWrapper = exports.ValidElementWrapper = _styledComponents["default"].div(_templateObject2 || (_templateObject2 = (0, _taggedTemplateLiteral2["default"])(["\n    display: contents;\n    color: ", " !important;\n"])), function (_ref3) {
  var theme = _ref3.theme;
  return theme.palette.status.success;
});