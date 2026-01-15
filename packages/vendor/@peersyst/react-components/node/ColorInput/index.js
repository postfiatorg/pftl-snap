"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
var _exportNames = {
  ColorInput: true
};
Object.defineProperty(exports, "ColorInput", {
  enumerable: true,
  get: function get() {
    return _ColorInput["default"];
  }
});
var _ColorInput = _interopRequireDefault(require("./ColorInput"));
var _ColorInput2 = require("./ColorInput.types");
Object.keys(_ColorInput2).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _ColorInput2[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _ColorInput2[key];
    }
  });
});
var _ColorInput3 = require("./ColorInput.styles");
Object.keys(_ColorInput3).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _ColorInput3[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _ColorInput3[key];
    }
  });
});