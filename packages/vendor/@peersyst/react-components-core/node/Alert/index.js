"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _Alert = require("./Alert.types");
Object.keys(_Alert).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _Alert[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _Alert[key];
    }
  });
});