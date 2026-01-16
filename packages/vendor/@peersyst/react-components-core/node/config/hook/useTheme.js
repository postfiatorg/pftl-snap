"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = _default;
var _useThemes = _interopRequireDefault(require("./useThemes"));
function _default(theme) {
  var themes = (0, _useThemes["default"])();
  return themes[theme] || themes["default"];
}