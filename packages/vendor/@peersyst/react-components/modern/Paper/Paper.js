import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
var _excluded = ["elevation", "square", "className", "style", "children"];
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
import { forwardRef } from "react";
import { PaperRoot } from "./Paper.styles";
import { useMergeDefaultProps } from "@peersyst/react-components-core";
import { cx } from "@peersyst/react-utils";
import { jsx as _jsx } from "react/jsx-runtime";
var Paper = /*#__PURE__*/forwardRef(function Paper(props, ref) {
  var _useMergeDefaultProps = useMergeDefaultProps("Paper", props),
    _useMergeDefaultProps2 = _useMergeDefaultProps.elevation,
    elevation = _useMergeDefaultProps2 === void 0 ? 1 : _useMergeDefaultProps2,
    _useMergeDefaultProps3 = _useMergeDefaultProps.square,
    square = _useMergeDefaultProps3 === void 0 ? false : _useMergeDefaultProps3,
    className = _useMergeDefaultProps.className,
    style = _useMergeDefaultProps.style,
    children = _useMergeDefaultProps.children,
    rest = _objectWithoutProperties(_useMergeDefaultProps, _excluded);
  return /*#__PURE__*/_jsx(PaperRoot, _objectSpread(_objectSpread({
    elevation: elevation,
    square: square,
    className: cx("Paper", className),
    style: style,
    ref: ref
  }, rest), {}, {
    children: children
  }));
});
export default Paper;