import { createContext } from "react";
export var SelectContext = /*#__PURE__*/createContext({
  value: undefined,
  multiple: false,
  readonly: false,
  setValue: function setValue() {
    return undefined;
  },
  setOpen: function setOpen() {
    return undefined;
  },
  compare: function compare(a, b) {
    return a === b;
  }
});
export var SelectProvider = SelectContext.Provider;
export var SelectConsumer = SelectContext.Consumer;