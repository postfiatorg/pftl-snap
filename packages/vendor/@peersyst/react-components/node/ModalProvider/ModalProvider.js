"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = ModalProvider;
var _ModalManager2 = require("./ModalManager/ModalManager");
var _reactComponentsCore = require("@peersyst/react-components-core");
var _jsxRuntime = require("react/jsx-runtime");
var _ModalManager;
function ModalProvider(_ref) {
  var children = _ref.children;
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_reactComponentsCore.ModalProvider, {
    children: [_ModalManager || (_ModalManager = /*#__PURE__*/(0, _jsxRuntime.jsx)(_ModalManager2.ModalManager, {})), children]
  });
}