import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
var _excluded = ["name", "removed"];
import { useRef, useState } from "react";
import { FormProvider } from "./FormContext";
import { useFormSubmit } from "./hooks";
import { jsx as _jsx } from "react/jsx-runtime";
var Form = function Form(_ref) {
  var children = _ref.children,
    onSubmit = _ref.onSubmit,
    onInvalid = _ref.onInvalid;
  var _useState = useState(true),
    _useState2 = _slicedToArray(_useState, 2),
    valid = _useState2[0],
    setValid = _useState2[1];
  var data = useRef({});
  var handleNotification = function handleNotification(_ref2) {
    var name = _ref2.name,
      removed = _ref2.removed,
      state = _objectWithoutProperties(_ref2, _excluded);
    if (removed) {
      delete data.current[name];
    } else data.current[name] = state;
    if (valid && !state.valid || !valid && state.valid) {
      setValid(Object.values(data.current).every(function (v) {
        return v.valid === true;
      }));
    }
  };
  var _useFormSubmit = useFormSubmit(data.current, onSubmit, onInvalid),
    submitted = _useFormSubmit.submitted,
    handleSubmit = _useFormSubmit.handleSubmit;
  return /*#__PURE__*/_jsx(FormProvider, {
    value: {
      notifyForm: handleNotification,
      valid: valid,
      submitted: submitted,
      handleSubmit: handleSubmit
    },
    children: children
  });
};
export default Form;