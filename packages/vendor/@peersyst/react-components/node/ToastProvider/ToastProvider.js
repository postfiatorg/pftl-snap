"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = ToastProvider;
var _reactComponentsCore = require("@peersyst/react-components-core");
var _Toaster2 = _interopRequireDefault(require("./Toaster"));
var _jsxRuntime = require("react/jsx-runtime");
var _Toaster;
function ToastProvider(_ref) {
  var children = _ref.children;
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_reactComponentsCore.ToastProvider, {
    children: [_Toaster || (_Toaster = /*#__PURE__*/(0, _jsxRuntime.jsx)(_Toaster2["default"], {})), children]
  });
}