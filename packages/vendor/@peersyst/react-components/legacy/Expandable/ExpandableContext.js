import { createContext } from "react";
export var ExpandableContext = /*#__PURE__*/createContext({
  open: false,
  toggle: function toggle() {
    return undefined;
  }
});
export var ExpandableProvider = ExpandableContext.Provider;
export var ExpandableConsumer = ExpandableContext.Consumer;