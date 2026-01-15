"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
var _exportNames = {
  Chip: true
};
Object.defineProperty(exports, "Chip", {
  enumerable: true,
  get: function get() {
    return _Chip["default"];
  }
});
var _Chip = _interopRequireDefault(require("./Chip"));
var _Chip2 = require("./Chip.styles");
Object.keys(_Chip2).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _Chip2[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _Chip2[key];
    }
  });
});
var _Chip3 = require("./Chip.types");
Object.keys(_Chip3).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _Chip3[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _Chip3[key];
    }
  });
});