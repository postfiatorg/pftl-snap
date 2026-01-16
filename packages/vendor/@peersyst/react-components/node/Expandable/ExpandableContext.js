"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ExpandableProvider = exports.ExpandableContext = exports.ExpandableConsumer = void 0;
var _react = require("react");
var ExpandableContext = exports.ExpandableContext = /*#__PURE__*/(0, _react.createContext)({
  open: false,
  toggle: function toggle() {
    return undefined;
  }
});
var ExpandableProvider = exports.ExpandableProvider = ExpandableContext.Provider;
var ExpandableConsumer = exports.ExpandableConsumer = ExpandableContext.Consumer;