"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
var _exportNames = {
  PaginatedTableFooter: true
};
Object.defineProperty(exports, "PaginatedTableFooter", {
  enumerable: true,
  get: function get() {
    return _PaginatedTableFooter["default"];
  }
});
var _PaginatedTableFooter = _interopRequireDefault(require("./PaginatedTableFooter"));
var _PaginatedTableFooter2 = require("./PaginatedTableFooter.types");
Object.keys(_PaginatedTableFooter2).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _PaginatedTableFooter2[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _PaginatedTableFooter2[key];
    }
  });
});