import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
var _path;
var _excluded = ["className"];
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
import { SvgIcon } from "../../SvgIcon";
import { cx } from "@peersyst/react-utils";
import { jsx as _jsx } from "react/jsx-runtime";
export default function RadioUncheckedIcon(_ref) {
  var className = _ref.className,
    rest = _objectWithoutProperties(_ref, _excluded);
  return /*#__PURE__*/_jsx(SvgIcon, _objectSpread(_objectSpread({}, rest), {}, {
    "data-testid": "RadioUncheckedIcon",
    className: cx(undefined, "Icon", className),
    children: _path || (_path = /*#__PURE__*/_jsx("path", {
      d: "M12 23.9988C18.6275 23.9988 24 18.6263 24 12C24 5.37253 18.6275 0 12 0C5.37252 0 0 5.37253 0 12C0 18.6263 5.37252 23.9988 12 23.9988V23.9988ZM12 22.1992C9.29501 22.1992 6.70082 21.1246 4.7881 19.2119C2.87539 17.2992 1.80084 14.705 1.80084 12C1.80084 9.29501 2.87539 6.70082 4.7881 4.7881C6.70082 2.87539 9.29501 1.80084 12 1.80084C14.7051 1.80084 17.2995 2.87545 19.2123 4.78828C21.1251 6.70111 22.1998 9.29546 22.1998 12.0006C22.1998 14.7057 21.1251 17.3001 19.2123 19.2129C17.2995 21.1257 14.7051 22.2004 12 22.2004V22.1992Z",
      fill: "black"
    }))
  }));
}