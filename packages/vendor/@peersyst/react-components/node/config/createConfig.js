"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = _default;
var _reactComponentsCore = require("@peersyst/react-components-core");
var _defaultConfig = _interopRequireDefault(require("./defaultConfig"));
function _default(config) {
  return (0, _reactComponentsCore.createConfigCore)(_defaultConfig["default"], config);
}