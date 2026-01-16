"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _Grid = require("./Grid");
Object.keys(_Grid).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _Grid[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _Grid[key];
    }
  });
});
var _IrregularGrid = require("./IrregularGrid");
Object.keys(_IrregularGrid).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _IrregularGrid[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _IrregularGrid[key];
    }
  });
});