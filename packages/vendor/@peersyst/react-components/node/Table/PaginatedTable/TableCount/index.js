"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
var _exportNames = {
  TableCount: true
};
Object.defineProperty(exports, "TableCount", {
  enumerable: true,
  get: function get() {
    return _TableCount["default"];
  }
});
var _TableCount = _interopRequireDefault(require("./TableCount"));
var _TableCount2 = require("./TableCount.types");
Object.keys(_TableCount2).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _TableCount2[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _TableCount2[key];
    }
  });
});