"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ConfigProvider = exports.ConfigContext = exports.ConfigConsumer = void 0;
var _react = require("react");
var _jsxRuntime = require("react/jsx-runtime");
var ConfigContext = exports.ConfigContext = /*#__PURE__*/(0, _react.createContext)({});
var ConfigProvider = exports.ConfigProvider = function ConfigProvider(_ref) {
  var config = _ref.config,
    children = _ref.children;
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(ConfigContext.Provider, {
    value: config,
    children: children
  });
};
var ConfigConsumer = exports.ConfigConsumer = ConfigContext.Consumer;