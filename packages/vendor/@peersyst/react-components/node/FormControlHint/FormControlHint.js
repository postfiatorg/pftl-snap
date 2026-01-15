"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _FormControlHint = require("./FormControlHint.styles");
var _reactUtils = require("@peersyst/react-utils");
var _reactComponentsCore = require("@peersyst/react-components-core");
var _jsxRuntime = require("react/jsx-runtime");
var FormControlHint = function FormControlHint(props) {
  var _useMergeDefaultProps = (0, _reactComponentsCore.useMergeDefaultProps)("FormControlHint", props),
    hint = _useMergeDefaultProps.hint,
    className = _useMergeDefaultProps.className,
    style = _useMergeDefaultProps.style,
    _useMergeDefaultProps2 = _useMergeDefaultProps.light,
    light = _useMergeDefaultProps2 === void 0 ? true : _useMergeDefaultProps2;
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_FormControlHint.FormControlHintRoot, {
    className: (0, _reactUtils.cx)("FormControlHint", className),
    style: style,
    light: light,
    children: hint
  });
};
var _default = exports["default"] = FormControlHint;