"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
var _exportNames = {
  ModalProvider: true,
  createModal: true,
  createBackdrop: true,
  createDrawer: true
};
Object.defineProperty(exports, "ModalProvider", {
  enumerable: true,
  get: function get() {
    return _ModalProvider["default"];
  }
});
Object.defineProperty(exports, "createBackdrop", {
  enumerable: true,
  get: function get() {
    return _createModal["default"];
  }
});
Object.defineProperty(exports, "createDrawer", {
  enumerable: true,
  get: function get() {
    return _createModal["default"];
  }
});
Object.defineProperty(exports, "createModal", {
  enumerable: true,
  get: function get() {
    return _createModal["default"];
  }
});
var _ModalProvider = _interopRequireDefault(require("./ModalProvider"));
var _ModalContext = require("./ModalContext");
Object.keys(_ModalContext).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _ModalContext[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _ModalContext[key];
    }
  });
});
var _hooks = require("./hooks");
Object.keys(_hooks).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _hooks[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _hooks[key];
    }
  });
});
var _createModal = _interopRequireDefault(require("./utils/createModal"));