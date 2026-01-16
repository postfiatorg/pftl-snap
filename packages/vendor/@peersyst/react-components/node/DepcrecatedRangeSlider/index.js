"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
var _exportNames = {
  DeprecatedRangeSlider: true
};
Object.defineProperty(exports, "DeprecatedRangeSlider", {
  enumerable: true,
  get: function get() {
    return _RangeSlider["default"];
  }
});
var _RangeSlider = _interopRequireDefault(require("./RangeSlider"));
var _RangeSlider2 = require("./RangeSlider.styles");
Object.keys(_RangeSlider2).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _RangeSlider2[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _RangeSlider2[key];
    }
  });
});
var _RangeSlider3 = require("./RangeSlider.types");
Object.keys(_RangeSlider3).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _RangeSlider3[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _RangeSlider3[key];
    }
  });
});