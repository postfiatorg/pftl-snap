"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
var _exportNames = {
  Badge: true
};
Object.defineProperty(exports, "Badge", {
  enumerable: true,
  get: function get() {
    return _Badge["default"];
  }
});
var _Badge = _interopRequireDefault(require("./Badge"));
var _Badge2 = require("./Badge.types");
Object.keys(_Badge2).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _Badge2[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _Badge2[key];
    }
  });
});
var _Badge3 = require("./Badge.styles");
Object.keys(_Badge3).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _Badge3[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _Badge3[key];
    }
  });
});