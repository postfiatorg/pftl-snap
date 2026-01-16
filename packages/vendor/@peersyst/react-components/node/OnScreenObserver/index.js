"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
var _exportNames = {
  OnScreenObserver: true
};
Object.defineProperty(exports, "OnScreenObserver", {
  enumerable: true,
  get: function get() {
    return _OnScreenObserver["default"];
  }
});
var _OnScreenObserver = _interopRequireDefault(require("./OnScreenObserver"));
var _OnScreenObserver2 = require("./OnScreenObserver.styles");
Object.keys(_OnScreenObserver2).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _OnScreenObserver2[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _OnScreenObserver2[key];
    }
  });
});
var _OnScreenObserver3 = require("./OnScreenObserver.types");
Object.keys(_OnScreenObserver3).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _OnScreenObserver3[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _OnScreenObserver3[key];
    }
  });
});