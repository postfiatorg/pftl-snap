import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
var _excluded = ["children", "url", "action"];
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
import { forwardRef } from "react";
import useHashOnClickHandler from "./hook/useHashClickHandler";
import { HashLink } from "./Hash.styles";
import { jsx as _jsx } from "react/jsx-runtime";
var HashWrapper = /*#__PURE__*/forwardRef(function HashWrapper(_ref, ref) {
  var children = _ref.children,
    url = _ref.url,
    action = _ref.action,
    params = _objectWithoutProperties(_ref, _excluded);
  //Hooks
  var handleClick = useHashOnClickHandler(_objectSpread(_objectSpread({}, params), {}, {
    action: action
  }));

  //Variables
  var anchorWrapper = url && action === "link";
  return anchorWrapper ? /*#__PURE__*/_jsx(HashLink, {
    href: url,
    target: "_blank",
    rel: "noreferrer",
    className: "HashWrapper",
    ref: ref,
    children: children
  }) : /*#__PURE__*/_jsx("span", {
    className: "HashWrapper",
    ref: ref,
    onClick: handleClick,
    children: children
  });
});
export default HashWrapper;