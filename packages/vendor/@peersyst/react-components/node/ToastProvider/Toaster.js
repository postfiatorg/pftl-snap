"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = Toaster;
var _reactComponentsCore = require("@peersyst/react-components-core");
var _Toast = require("../Toast");
var _jsxRuntime = require("react/jsx-runtime");
function Toaster() {
  var toast = (0, _reactComponentsCore.useToasterState)(_Toast.Toast);
  return /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
    id: "toast-root",
    children: toast
  });
}