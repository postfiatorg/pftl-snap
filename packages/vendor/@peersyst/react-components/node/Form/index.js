"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
var _exportNames = {
  Form: true,
  useFormNotification: true,
  useFormSubmit: true,
  useFormValidity: true
};
Object.defineProperty(exports, "Form", {
  enumerable: true,
  get: function get() {
    return _Form["default"];
  }
});
Object.defineProperty(exports, "useFormNotification", {
  enumerable: true,
  get: function get() {
    return _reactComponentsCore.useFormNotification;
  }
});
Object.defineProperty(exports, "useFormSubmit", {
  enumerable: true,
  get: function get() {
    return _reactComponentsCore.useFormSubmit;
  }
});
Object.defineProperty(exports, "useFormValidity", {
  enumerable: true,
  get: function get() {
    return _reactComponentsCore.useFormValidity;
  }
});
var _Form = _interopRequireDefault(require("./Form"));
var _Form2 = require("./Form.types");
Object.keys(_Form2).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _Form2[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _Form2[key];
    }
  });
});
var _reactComponentsCore = require("@peersyst/react-components-core");