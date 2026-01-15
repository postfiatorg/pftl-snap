"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
var _exportNames = {
  FadingSlide: true
};
Object.defineProperty(exports, "FadingSlide", {
  enumerable: true,
  get: function get() {
    return _FadingSlide["default"];
  }
});
var _FadingSlide = _interopRequireDefault(require("./FadingSlide"));
var _FadingSlide2 = require("./FadingSlide.types");
Object.keys(_FadingSlide2).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _FadingSlide2[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _FadingSlide2[key];
    }
  });
});