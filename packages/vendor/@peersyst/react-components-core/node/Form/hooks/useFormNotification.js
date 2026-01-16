"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = useFormNotification;
var _react = require("react");
var _FormContext = require("../FormContext");
function useFormNotification(name, value) {
  var valid = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
  var _useContext = (0, _react.useContext)(_FormContext.FormContext),
    notifyForm = _useContext.notifyForm;

  // Notify when there is a change
  (0, _react.useEffect)(function () {
    name && (notifyForm == null ? void 0 : notifyForm({
      name: name,
      value: value,
      valid: valid
    }));
  }, [value, valid, notifyForm, name]);

  // Notify when unmount
  (0, _react.useEffect)(function () {
    return function () {
      name && (notifyForm == null ? void 0 : notifyForm({
        name: name,
        value: value,
        valid: valid,
        removed: true
      }));
    };
  }, []);
}