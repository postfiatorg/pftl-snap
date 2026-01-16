"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
var _exportNames = {
  CircularProgress: true
};
Object.defineProperty(exports, "CircularProgress", {
  enumerable: true,
  get: function get() {
    return _CircularProgress["default"];
  }
});
var _CircularProgress = _interopRequireDefault(require("./CircularProgress"));
var _CircularProgress2 = require("./CircularProgress.styles");
Object.keys(_CircularProgress2).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _CircularProgress2[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _CircularProgress2[key];
    }
  });
});
var _CircularProgress3 = require("./CircularProgress.types");
Object.keys(_CircularProgress3).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _CircularProgress3[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _CircularProgress3[key];
    }
  });
});