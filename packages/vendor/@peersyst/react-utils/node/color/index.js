"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _color = require("./color");
Object.keys(_color).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _color[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _color[key];
    }
  });
});
var _color2 = require("./color.types");
Object.keys(_color2).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _color2[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _color2[key];
    }
  });
});
var _colorValidations = require("./color-validations");
Object.keys(_colorValidations).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _colorValidations[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _colorValidations[key];
    }
  });
});