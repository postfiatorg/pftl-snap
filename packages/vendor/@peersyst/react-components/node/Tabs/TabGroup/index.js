"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
var _exportNames = {
  TabGroup: true
};
Object.defineProperty(exports, "TabGroup", {
  enumerable: true,
  get: function get() {
    return _TabGroup["default"];
  }
});
var _TabGroup = _interopRequireDefault(require("./TabGroup"));
var _TabGroup2 = require("./TabGroup.styles");
Object.keys(_TabGroup2).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _TabGroup2[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _TabGroup2[key];
    }
  });
});
var _TabGroup3 = require("./TabGroup.types");
Object.keys(_TabGroup3).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _TabGroup3[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _TabGroup3[key];
    }
  });
});
var _TabIndicator = require("./TabIndicator");
Object.keys(_TabIndicator).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _TabIndicator[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _TabIndicator[key];
    }
  });
});