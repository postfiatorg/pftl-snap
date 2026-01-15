import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
var _path;
var _excluded = ["className"];
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
import { SvgIcon } from "../../SvgIcon";
import { cx } from "@peersyst/react-utils";
import { jsx as _jsx } from "react/jsx-runtime";
export default function LoaderIcon(_ref) {
  var className = _ref.className,
    rest = _objectWithoutProperties(_ref, _excluded);
  return /*#__PURE__*/_jsx(SvgIcon, _objectSpread(_objectSpread({}, rest), {}, {
    "data-testid": "LoaderIcon",
    className: cx(undefined, "Icon", className),
    children: _path || (_path = /*#__PURE__*/_jsx("path", {
      d: "M24 12C24 5.3728 18.6278 0 12 0C5.3728 0 0 5.3728 0 12H2.61286C2.61286 6.81604 6.81539 2.61286 12 2.61286C17.1846 2.61286 21.3871 6.81539 21.3871 12H24Z",
      fill: "black",
      children: /*#__PURE__*/_jsx("animateTransform", {
        attributeType: "xml",
        attributeName: "transform",
        type: "rotate",
        from: "0 12 12",
        to: "360 12 12",
        dur: "1s",
        repeatCount: "indefinite"
      })
    }))
  }));
}