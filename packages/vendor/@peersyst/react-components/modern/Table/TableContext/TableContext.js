import { createContext, useContext } from "react";
export var TableContext = /*#__PURE__*/createContext({
  table: undefined,
  data: []
});
export var TableProvider = TableContext.Provider;
export var TableConsumer = TableContext.Consumer;
export function useTable() {
  return useContext(TableContext);
}