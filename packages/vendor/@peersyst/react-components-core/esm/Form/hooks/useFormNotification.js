import { useContext, useEffect } from "react";
import { FormContext } from "../FormContext";
export default function useFormNotification(name, value) {
  var valid = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
  var _useContext = useContext(FormContext),
    notifyForm = _useContext.notifyForm;

  // Notify when there is a change
  useEffect(function () {
    name && (notifyForm == null ? void 0 : notifyForm({
      name: name,
      value: value,
      valid: valid
    }));
  }, [value, valid, notifyForm, name]);

  // Notify when unmount
  useEffect(function () {
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