import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
var _excluded = ["children", "loading", "loadingElement", "disabled", "onClick", "style", "className", "type", "action", "color"];
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
import { IconButtonRoot } from "./IconButton.styles";
import { cx, fsx, setRef } from "@peersyst/react-utils";
import { forwardRef, useContext } from "react";
import { useTheme } from "../theme";
import { FormContext, useMergeDefaultProps, useColor } from "@peersyst/react-components-core";
import { jsx as _jsx } from "react/jsx-runtime";
var IconButton = /*#__PURE__*/forwardRef(function (props, _ref) {
  var _useMergeDefaultProps = useMergeDefaultProps("IconButton", props),
    children = _useMergeDefaultProps.children,
    loading = _useMergeDefaultProps.loading,
    loadingElementProp = _useMergeDefaultProps.loadingElement,
    _useMergeDefaultProps2 = _useMergeDefaultProps.disabled,
    disabledProp = _useMergeDefaultProps2 === void 0 ? false : _useMergeDefaultProps2,
    onClickProp = _useMergeDefaultProps.onClick,
    style = _useMergeDefaultProps.style,
    className = _useMergeDefaultProps.className,
    _useMergeDefaultProps3 = _useMergeDefaultProps.type,
    type = _useMergeDefaultProps3 === void 0 ? "button" : _useMergeDefaultProps3,
    action = _useMergeDefaultProps.action,
    colorProp = _useMergeDefaultProps.color,
    rest = _objectWithoutProperties(_useMergeDefaultProps, _excluded);
  var _useTheme = useTheme(),
    DefaultLoader = _useTheme.loader;
  var loadingElement = loadingElementProp || /*#__PURE__*/_jsx(DefaultLoader, {});
  var color = useColor(colorProp);
  var _useContext = useContext(FormContext),
    valid = _useContext.valid,
    submit = _useContext.handleSubmit;
  var disabled = disabledProp || loading || type === "submit" && valid === false;
  var handleSubmit = function handleSubmit(e) {
    e.preventDefault();
    submit(action);
  };
  var onClick = type === "submit" ? handleSubmit : onClickProp;
  return /*#__PURE__*/_jsx(IconButtonRoot, _objectSpread(_objectSpread({
    disabled: disabled || loading,
    onClick: onClick,
    style: fsx(style, {
      disabled: disabled
    }),
    className: cx("IconButton", disabled && "Disabled", className),
    type: type,
    ref: function ref(r) {
      return setRef(_ref, r);
    },
    color: color
  }, rest), {}, {
    children: loading ? loadingElement : children
  }));
});
IconButton.displayName = "IconButton";
export default IconButton;