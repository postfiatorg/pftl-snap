"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _withColor = require("./withColor");
Object.keys(_withColor).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _withColor[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _withColor[key];
    }
  });
});