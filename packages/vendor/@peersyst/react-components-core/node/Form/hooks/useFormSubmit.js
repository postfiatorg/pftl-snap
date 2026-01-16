"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = useFormSubmit;
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
var _react = require("react");
function useFormSubmit(data, onSubmit, onInvalid) {
  var _useState = (0, _react.useState)(false),
    _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
    submitted = _useState2[0],
    setSubmitted = _useState2[1];
  var handleSubmit = (0, _react.useCallback)(function (action) {
    if (!submitted) {
      setSubmitted(true);
    }
    var setData = function setData() {
      var valid = Object.values(data).every(function (v) {
        return v.valid;
      });
      if (valid) {
        var values = {};
        Object.entries(data).forEach(function (v) {
          return values[v[0]] = v[1].value;
        });
        onSubmit(values, action);
      } else onInvalid == null || onInvalid();
    };
    try {
      setImmediate(setData);
    } catch (e) {
      try {
        process.nextTick(setData);
      } catch (e) {
        setData();
      }
    }
  }, [data, submitted, onSubmit, onInvalid]);
  return {
    submitted: submitted,
    handleSubmit: handleSubmit
  };
}