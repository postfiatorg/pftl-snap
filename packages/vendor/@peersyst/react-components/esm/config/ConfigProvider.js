import { ConfigProvider as CoreConfigProvider } from "@peersyst/react-components-core";
import { ThemeProvider } from "../theme";
import { jsx as _jsx } from "react/jsx-runtime";
var ConfigProvider = function ConfigProvider(_ref) {
  var config = _ref.config,
    _ref$storeTheme = _ref.storeTheme,
    storeTheme = _ref$storeTheme === void 0 ? false : _ref$storeTheme,
    children = _ref.children;
  return /*#__PURE__*/_jsx(CoreConfigProvider, {
    config: config,
    children: /*#__PURE__*/_jsx(ThemeProvider, {
      storeTheme: storeTheme,
      children: children
    })
  });
};
export default ConfigProvider;