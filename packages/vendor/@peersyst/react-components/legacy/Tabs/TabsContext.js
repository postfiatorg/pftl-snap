import { createContext } from "react";
export var TabsContext = /*#__PURE__*/createContext({
  activeIndex: 0,
  onTabChange: function onTabChange() {
    return undefined;
  },
  activeRef: null,
  setActiveRef: function setActiveRef() {
    return undefined;
  }
});
export var TabsProvider = TabsContext.Provider;
export var TabsConsumer = TabsContext.Consumer;