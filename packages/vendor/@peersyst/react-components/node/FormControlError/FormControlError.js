"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _FormControlError = require("./FormControlError.styles");
var _reactUtils = require("@peersyst/react-utils");
var _reactComponentsCore = require("@peersyst/react-components-core");
var _jsxRuntime = require("react/jsx-runtime");
var FormControlError = function FormControlError(props) {
  var _useMergeDefaultProps = (0, _reactComponentsCore.useMergeDefaultProps)("FormControlError", props),
    error = _useMergeDefaultProps.error,
    className = _useMergeDefaultProps.className,
    style = _useMergeDefaultProps.style;
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_FormControlError.FormControlErrorRoot, {
    hint: error,
    className: (0, _reactUtils.cx)("FormControlError", className),
    style: style
  });
};
var _default = exports["default"] = FormControlError;