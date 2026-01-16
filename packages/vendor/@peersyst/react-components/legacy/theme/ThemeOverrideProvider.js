import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
var _excluded = ["children"];
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
import { ThemeOverrideProvider as CoreThemeOverrideProvider } from "@peersyst/react-components-core";
import { ThemeProvider as StyledComponentsProvider } from "styled-components";
import { jsx as _jsx } from "react/jsx-runtime";
var ThemeOverrideProvider = function ThemeOverrideProvider(_ref) {
  var _children = _ref.children,
    coreThemeOverrideProps = _objectWithoutProperties(_ref, _excluded);
  return /*#__PURE__*/_jsx(CoreThemeOverrideProvider, _objectSpread(_objectSpread({}, coreThemeOverrideProps), {}, {
    children: function children(theme) {
      return /*#__PURE__*/_jsx(StyledComponentsProvider, {
        theme: theme,
        children: typeof _children === "function" ? _children(theme) : _children
      });
    }
  }));
};
export default ThemeOverrideProvider;