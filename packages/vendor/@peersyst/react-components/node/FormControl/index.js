"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
var _exportNames = {
  FormControl: true,
  useFormControl: true,
  useFormControlled: true
};
Object.defineProperty(exports, "FormControl", {
  enumerable: true,
  get: function get() {
    return _FormControl["default"];
  }
});
Object.defineProperty(exports, "useFormControl", {
  enumerable: true,
  get: function get() {
    return _reactComponentsCore.useFormControl;
  }
});
Object.defineProperty(exports, "useFormControlled", {
  enumerable: true,
  get: function get() {
    return _reactComponentsCore.useFormControlled;
  }
});
var _FormControl = _interopRequireDefault(require("./FormControl"));
var _FormControl2 = require("./FormControl.types");
Object.keys(_FormControl2).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _FormControl2[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _FormControl2[key];
    }
  });
});
var _reactComponentsCore = require("@peersyst/react-components-core");