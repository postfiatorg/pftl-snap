"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
var _exportNames = {
  ErrorBoundary: true
};
Object.defineProperty(exports, "ErrorBoundary", {
  enumerable: true,
  get: function get() {
    return _ErrorBoundary["default"];
  }
});
var _ErrorBoundary = _interopRequireDefault(require("./ErrorBoundary"));
var _ErrorBoundary2 = require("./ErrorBoundary.types");
Object.keys(_ErrorBoundary2).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _ErrorBoundary2[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _ErrorBoundary2[key];
    }
  });
});