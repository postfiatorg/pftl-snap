"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = useTabs;
var _react = require("react");
var _TabsContext = require("../TabsContext");
function useTabs() {
  var _useContext = (0, _react.useContext)(_TabsContext.TabsContext),
    activeIndex = _useContext.activeIndex,
    onTabChange = _useContext.onTabChange;
  return [activeIndex, onTabChange];
}