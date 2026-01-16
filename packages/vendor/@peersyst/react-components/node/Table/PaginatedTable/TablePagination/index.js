"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
var _exportNames = {
  TablePagination: true
};
Object.defineProperty(exports, "TablePagination", {
  enumerable: true,
  get: function get() {
    return _TablePagination["default"];
  }
});
var _TablePagination = _interopRequireDefault(require("./TablePagination"));
var _TablePagination2 = require("./TablePagination.types");
Object.keys(_TablePagination2).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _TablePagination2[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _TablePagination2[key];
    }
  });
});