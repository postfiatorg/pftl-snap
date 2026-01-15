"use strict";

var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
var _exportNames = {
  ModalProvider: true,
  createModal: true,
  createBackdrop: true,
  createDrawer: true,
  useModal: true,
  ModalContext: true
};
Object.defineProperty(exports, "ModalContext", {
  enumerable: true,
  get: function get() {
    return _reactComponentsCore.ModalContext;
  }
});
Object.defineProperty(exports, "ModalProvider", {
  enumerable: true,
  get: function get() {
    return _ModalProvider["default"];
  }
});
Object.defineProperty(exports, "createBackdrop", {
  enumerable: true,
  get: function get() {
    return _reactComponentsCore.createBackdrop;
  }
});
Object.defineProperty(exports, "createDrawer", {
  enumerable: true,
  get: function get() {
    return _reactComponentsCore.createDrawer;
  }
});
Object.defineProperty(exports, "createModal", {
  enumerable: true,
  get: function get() {
    return _reactComponentsCore.createModal;
  }
});
Object.defineProperty(exports, "useModal", {
  enumerable: true,
  get: function get() {
    return _reactComponentsCore.useModal;
  }
});
var _ModalProvider = _interopRequireWildcard(require("./ModalProvider"));
Object.keys(_ModalProvider).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _ModalProvider[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _ModalProvider[key];
    }
  });
});
var _ModalManager = require("./ModalManager/ModalManager");
Object.keys(_ModalManager).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _ModalManager[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _ModalManager[key];
    }
  });
});
var _reactComponentsCore = require("@peersyst/react-components-core");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }