"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
var _exportNames = {
  Slider: true
};
Object.defineProperty(exports, "Slider", {
  enumerable: true,
  get: function get() {
    return _Slider["default"];
  }
});
var _Slider = _interopRequireDefault(require("./Slider"));
var _Slider2 = require("./Slider.types");
Object.keys(_Slider2).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _Slider2[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _Slider2[key];
    }
  });
});
var _Slider3 = require("./Slider.styles");
Object.keys(_Slider3).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _Slider3[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _Slider3[key];
    }
  });
});