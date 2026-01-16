"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
var _exportNames = {
  FormControlContext: true,
  FormControl: true
};
Object.defineProperty(exports, "FormControl", {
  enumerable: true,
  get: function get() {
    return _FormControl2["default"];
  }
});
Object.defineProperty(exports, "FormControlContext", {
  enumerable: true,
  get: function get() {
    return _FormControlContext["default"];
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
var _FormControl = require("./FormControl.types");
Object.keys(_FormControl).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _FormControl[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _FormControl[key];
    }
  });
});
var _FormControlContext = _interopRequireDefault(require("./FormControlContext"));
var _FormControl2 = _interopRequireDefault(require("./FormControl"));