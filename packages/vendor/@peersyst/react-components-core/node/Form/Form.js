"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
var _react = require("react");
var _FormContext = require("./FormContext");
var _hooks = require("./hooks");
var _jsxRuntime = require("react/jsx-runtime");
var _excluded = ["name", "removed"];
var Form = function Form(_ref) {
  var children = _ref.children,
    onSubmit = _ref.onSubmit,
    onInvalid = _ref.onInvalid;
  var _useState = (0, _react.useState)(true),
    _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
    valid = _useState2[0],
    setValid = _useState2[1];
  var data = (0, _react.useRef)({});
  var handleNotification = function handleNotification(_ref2) {
    var name = _ref2.name,
      removed = _ref2.removed,
      state = (0, _objectWithoutProperties2["default"])(_ref2, _excluded);
    if (removed) {
      delete data.current[name];
    } else data.current[name] = state;
    if (valid && !state.valid || !valid && state.valid) {
      setValid(Object.values(data.current).every(function (v) {
        return v.valid === true;
      }));
    }
  };
  var _useFormSubmit = (0, _hooks.useFormSubmit)(data.current, onSubmit, onInvalid),
    submitted = _useFormSubmit.submitted,
    handleSubmit = _useFormSubmit.handleSubmit;
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_FormContext.FormProvider, {
    value: {
      notifyForm: handleNotification,
      valid: valid,
      submitted: submitted,
      handleSubmit: handleSubmit
    },
    children: children
  });
};
var _default = exports["default"] = Form;