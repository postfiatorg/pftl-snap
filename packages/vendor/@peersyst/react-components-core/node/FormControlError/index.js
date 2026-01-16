"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _FormControlError = require("./FormControlError.types");
Object.keys(_FormControlError).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _FormControlError[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _FormControlError[key];
    }
  });
});