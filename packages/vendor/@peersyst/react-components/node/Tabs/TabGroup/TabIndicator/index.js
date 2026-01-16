"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
var _exportNames = {
  TabIndicator: true
};
Object.defineProperty(exports, "TabIndicator", {
  enumerable: true,
  get: function get() {
    return _TabIndicator["default"];
  }
});
var _TabIndicator = _interopRequireDefault(require("./TabIndicator"));
var _TabIndicator2 = require("./TabIndicator.styles");
Object.keys(_TabIndicator2).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _TabIndicator2[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _TabIndicator2[key];
    }
  });
});
var _TabIndicator3 = require("./TabIndicator.types");
Object.keys(_TabIndicator3).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _TabIndicator3[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _TabIndicator3[key];
    }
  });
});