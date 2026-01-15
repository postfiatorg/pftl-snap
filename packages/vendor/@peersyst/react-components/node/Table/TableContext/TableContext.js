"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TableProvider = exports.TableContext = exports.TableConsumer = void 0;
exports.useTable = useTable;
var _react = require("react");
var TableContext = exports.TableContext = /*#__PURE__*/(0, _react.createContext)({
  table: undefined,
  data: []
});
var TableProvider = exports.TableProvider = TableContext.Provider;
var TableConsumer = exports.TableConsumer = TableContext.Consumer;
function useTable() {
  return (0, _react.useContext)(TableContext);
}