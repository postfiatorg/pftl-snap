"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
var _exportNames = {
  Alert: true
};
Object.defineProperty(exports, "Alert", {
  enumerable: true,
  get: function get() {
    return _Alert["default"];
  }
});
var _Alert = _interopRequireDefault(require("./Alert"));
var _Alert2 = require("./Alert.styles");
Object.keys(_Alert2).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _Alert2[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _Alert2[key];
    }
  });
});
var _Alert3 = require("./Alert.types");
Object.keys(_Alert3).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _Alert3[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _Alert3[key];
    }
  });
});