"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _RadioButton = require("./RadioButton.types");
Object.keys(_RadioButton).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _RadioButton[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _RadioButton[key];
    }
  });
});