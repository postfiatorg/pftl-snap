"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
var _exportNames = {
  useShare: true,
  useShareData: true
};
Object.defineProperty(exports, "useShare", {
  enumerable: true,
  get: function get() {
    return _useShare["default"];
  }
});
Object.defineProperty(exports, "useShareData", {
  enumerable: true,
  get: function get() {
    return _useShareData["default"];
  }
});
var _useShare = _interopRequireDefault(require("./useShare"));
var _useShareData = _interopRequireDefault(require("./useShareData"));
var _useShare2 = require("./useShare.types");
Object.keys(_useShare2).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _useShare2[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _useShare2[key];
    }
  });
});