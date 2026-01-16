"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = useButtonSubmit;
var _reactComponentsCore = require("@peersyst/react-components-core");
var _react = require("react");
function useButtonSubmit(_ref) {
  var disabled = _ref.disabled,
    loading = _ref.loading,
    type = _ref.type,
    action = _ref.action;
  var _useContext = (0, _react.useContext)(_reactComponentsCore.FormContext),
    valid = _useContext.valid,
    submit = _useContext.handleSubmit;
  var enabled = !(disabled || loading || type === "submit" && valid === false);
  var handleSubmit = function handleSubmit() {
    submit(action);
  };
  return {
    enabled: enabled,
    handleSubmit: type === "submit" ? handleSubmit : undefined
  };
}