"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
var _exportNames = {
  ToggleButton: true
};
Object.defineProperty(exports, "ToggleButton", {
  enumerable: true,
  get: function get() {
    return _ToggleButton["default"];
  }
});
var _ToggleButton = _interopRequireDefault(require("./ToggleButton"));
var _ToggleButton2 = require("./ToggleButton.types");
Object.keys(_ToggleButton2).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _ToggleButton2[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _ToggleButton2[key];
    }
  });
});
var _ToggleButton3 = require("./ToggleButton.styles");
Object.keys(_ToggleButton3).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _ToggleButton3[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _ToggleButton3[key];
    }
  });
});