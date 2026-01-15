"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
var _exportNames = {
  TabPanel: true
};
Object.defineProperty(exports, "TabPanel", {
  enumerable: true,
  get: function get() {
    return _TabPanel["default"];
  }
});
var _TabPanel = _interopRequireDefault(require("./TabPanel"));
var _TabPanel2 = require("./TabPanel.styles");
Object.keys(_TabPanel2).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _TabPanel2[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _TabPanel2[key];
    }
  });
});
var _TabPanel3 = require("./TabPanel.types");
Object.keys(_TabPanel3).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _TabPanel3[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _TabPanel3[key];
    }
  });
});