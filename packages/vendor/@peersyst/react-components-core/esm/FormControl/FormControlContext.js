import { createContext } from "react";
export default /*#__PURE__*/createContext({
  required: false,
  invalid: false,
  valid: false,
  disabled: false,
  readonly: false,
  focused: false,
  setFocused: function setFocused() {
    return undefined;
  }
});