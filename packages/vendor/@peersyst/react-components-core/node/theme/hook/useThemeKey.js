"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = useThemeKey;
var _config = require("../../config");
function useThemeKey() {
  var themeKey = (0, _config.useConfig)("theme");
  return themeKey;
}