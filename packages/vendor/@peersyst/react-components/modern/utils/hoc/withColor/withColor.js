import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
var _excluded = ["color"];
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
import { useColor } from "@peersyst/react-components-core";
import { jsx as _jsx } from "react/jsx-runtime";
export default function withColor(WrappedComponent, defaultColor) {
  return function (_ref) {
    var colorProp = _ref.color,
      componentProps = _objectWithoutProperties(_ref, _excluded);
    var color = useColor(colorProp || defaultColor);
    return /*#__PURE__*/_jsx(WrappedComponent, _objectSpread(_objectSpread({}, componentProps), {}, {
      color: color
    }));
  };
}