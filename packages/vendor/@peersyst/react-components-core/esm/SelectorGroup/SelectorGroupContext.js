import { createContext } from "react";
export var SelectorGroupContext = /*#__PURE__*/createContext({
  value: undefined,
  multiple: false,
  readonly: false,
  disabled: false,
  setValue: function setValue() {
    return undefined;
  }
});
export var SelectorGroupProvider = SelectorGroupContext.Provider;
export var SelectorGroupConsumer = SelectorGroupContext.Consumer;