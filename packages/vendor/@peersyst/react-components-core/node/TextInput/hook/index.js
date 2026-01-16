"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _useTextInputValidation = require("./useTextInputValidation");
Object.keys(_useTextInputValidation).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _useTextInputValidation[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _useTextInputValidation[key];
    }
  });
});