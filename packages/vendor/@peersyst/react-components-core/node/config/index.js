"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
var _exportNames = {
  createComponent: true,
  createConfigCore: true
};
Object.defineProperty(exports, "createComponent", {
  enumerable: true,
  get: function get() {
    return _createComponent["default"];
  }
});
Object.defineProperty(exports, "createConfigCore", {
  enumerable: true,
  get: function get() {
    return _createConfig["default"];
  }
});
var _hook = require("./hook");
Object.keys(_hook).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _hook[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _hook[key];
    }
  });
});
var _config = require("./config.types");
Object.keys(_config).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _config[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _config[key];
    }
  });
});
var _ConfigContext = require("./ConfigContext");
Object.keys(_ConfigContext).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _ConfigContext[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _ConfigContext[key];
    }
  });
});
var _createComponent = _interopRequireDefault(require("./createComponent"));
var _createConfig = _interopRequireDefault(require("./createConfig"));
var _createConfig2 = require("./createConfig.types");
Object.keys(_createConfig2).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _createConfig2[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _createConfig2[key];
    }
  });
});
var _componentsConfig = require("./components.config.types");
Object.keys(_componentsConfig).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _componentsConfig[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _componentsConfig[key];
    }
  });
});