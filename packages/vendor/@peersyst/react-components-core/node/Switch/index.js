"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _Switch = require("./Switch.types");
Object.keys(_Switch).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _Switch[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _Switch[key];
    }
  });
});