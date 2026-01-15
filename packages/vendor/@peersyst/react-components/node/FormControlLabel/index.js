"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
var _exportNames = {
  FormControlLabel: true
};
Object.defineProperty(exports, "FormControlLabel", {
  enumerable: true,
  get: function get() {
    return _FormControlLabel["default"];
  }
});
var _FormControlLabel = _interopRequireDefault(require("./FormControlLabel"));
var _FormControlLabel2 = require("./FormControlLabel.styles");
Object.keys(_FormControlLabel2).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _FormControlLabel2[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _FormControlLabel2[key];
    }
  });
});