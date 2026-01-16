"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
var _exportNames = {
  Carousel: true
};
Object.defineProperty(exports, "Carousel", {
  enumerable: true,
  get: function get() {
    return _Carousel["default"];
  }
});
var _Carousel = _interopRequireDefault(require("./Carousel"));
var _Carousel2 = require("./Carousel.types");
Object.keys(_Carousel2).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _Carousel2[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _Carousel2[key];
    }
  });
});
var _Carousel3 = require("./Carousel.styles");
Object.keys(_Carousel3).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _Carousel3[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _Carousel3[key];
    }
  });
});