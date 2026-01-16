"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TabsProvider = exports.TabsContext = exports.TabsConsumer = void 0;
var _react = require("react");
var TabsContext = exports.TabsContext = /*#__PURE__*/(0, _react.createContext)({
  activeIndex: 0,
  onTabChange: function onTabChange() {
    return undefined;
  },
  activeRef: null,
  setActiveRef: function setActiveRef() {
    return undefined;
  }
});
var TabsProvider = exports.TabsProvider = TabsContext.Provider;
var TabsConsumer = exports.TabsConsumer = TabsContext.Consumer;