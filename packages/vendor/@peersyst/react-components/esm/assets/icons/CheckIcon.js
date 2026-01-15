import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
var _path;
var _excluded = ["className"];
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
import { SvgIcon } from "../../SvgIcon";
import { cx } from "@peersyst/react-utils";
import { jsx as _jsx } from "react/jsx-runtime";
export default function CheckIcon(_ref) {
  var className = _ref.className,
    rest = _objectWithoutProperties(_ref, _excluded);
  return /*#__PURE__*/_jsx(SvgIcon, _objectSpread(_objectSpread({}, rest), {}, {
    "data-testid": "CheckIcon",
    className: cx(undefined, "Icon", className),
    children: _path || (_path = /*#__PURE__*/_jsx("path", {
      d: "M7.83738 16.8082L2.35438 11.3252L0 13.6796L7.83738 21.517L24 5.35438L21.6456 3L7.83738 16.8082Z",
      fill: "black"
    }))
  }));
}