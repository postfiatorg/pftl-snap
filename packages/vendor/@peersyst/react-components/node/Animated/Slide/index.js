"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
var _exportNames = {
  Slide: true
};
Object.defineProperty(exports, "Slide", {
  enumerable: true,
  get: function get() {
    return _Slide["default"];
  }
});
var _Slide = _interopRequireDefault(require("./Slide"));
var _Slide2 = require("./Slide.types");
Object.keys(_Slide2).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _Slide2[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _Slide2[key];
    }
  });
});