import { createContext } from "react";
import { jsx as _jsx } from "react/jsx-runtime";
export var ConfigContext = /*#__PURE__*/createContext({});
export var ConfigProvider = function ConfigProvider(_ref) {
  var config = _ref.config,
    children = _ref.children;
  return /*#__PURE__*/_jsx(ConfigContext.Provider, {
    value: config,
    children: children
  });
};
export var ConfigConsumer = ConfigContext.Consumer;