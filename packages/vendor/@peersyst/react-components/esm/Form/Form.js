import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
var _excluded = ["style", "className", "children"];
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
import { cx } from "@peersyst/react-utils";
import { Form as CoreForm, useMergeDefaultProps } from "@peersyst/react-components-core";
import { jsx as _jsx } from "react/jsx-runtime";
var Form = function Form(props) {
  var _useMergeDefaultProps = useMergeDefaultProps("Form", props),
    style = _useMergeDefaultProps.style,
    className = _useMergeDefaultProps.className,
    children = _useMergeDefaultProps.children,
    coreProps = _objectWithoutProperties(_useMergeDefaultProps, _excluded);
  return /*#__PURE__*/_jsx(CoreForm, _objectSpread(_objectSpread({}, coreProps), {}, {
    children: /*#__PURE__*/_jsx("form", {
      style: style,
      className: cx("Form", className),
      children: children
    })
  }));
};
export default Form;