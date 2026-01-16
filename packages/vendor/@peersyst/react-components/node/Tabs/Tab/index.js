"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
var _exportNames = {
  Tab: true
};
Object.defineProperty(exports, "Tab", {
  enumerable: true,
  get: function get() {
    return _Tab["default"];
  }
});
var _Tab = _interopRequireDefault(require("./Tab"));
var _Tab2 = require("./Tab.styles");
Object.keys(_Tab2).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _Tab2[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _Tab2[key];
    }
  });
});
var _Tab3 = require("./Tab.types");
Object.keys(_Tab3).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _Tab3[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _Tab3[key];
    }
  });
});