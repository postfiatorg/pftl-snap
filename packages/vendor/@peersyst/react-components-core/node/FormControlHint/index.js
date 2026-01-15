"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _FormControlHint = require("./FormControlHint.types");
Object.keys(_FormControlHint).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _FormControlHint[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _FormControlHint[key];
    }
  });
});