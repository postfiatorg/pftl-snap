"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _useBackdrop = require("./useBackdrop");
Object.keys(_useBackdrop).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _useBackdrop[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _useBackdrop[key];
    }
  });
});