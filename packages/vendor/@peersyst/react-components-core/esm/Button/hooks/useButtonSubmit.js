import { FormContext } from "@peersyst/react-components-core";
import { useContext } from "react";
export default function useButtonSubmit(_ref) {
  var disabled = _ref.disabled,
    loading = _ref.loading,
    type = _ref.type,
    action = _ref.action;
  var _useContext = useContext(FormContext),
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