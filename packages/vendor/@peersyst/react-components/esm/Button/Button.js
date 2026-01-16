import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
var _excluded = ["className", "disabled", "children", "loading", "loadingElement", "variant", "size", "fullWidth", "onClick", "style", "type", "action", "color"];
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
import { ButtonContent, ButtonLoader, ButtonRoot } from "./Button.styles";
import { useTheme } from "../theme";
import { capitalize, cx, fsx } from "@peersyst/react-utils";
import { useContext } from "react";
import { FormContext, useMergeDefaultProps, useColor } from "@peersyst/react-components-core";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
var Button = function Button(props) {
  var _useMergeDefaultProps = useMergeDefaultProps("Button", props),
    className = _useMergeDefaultProps.className,
    disabledProp = _useMergeDefaultProps.disabled,
    children = _useMergeDefaultProps.children,
    loading = _useMergeDefaultProps.loading,
    loadingElementProp = _useMergeDefaultProps.loadingElement,
    _useMergeDefaultProps2 = _useMergeDefaultProps.variant,
    variant = _useMergeDefaultProps2 === void 0 ? "filled" : _useMergeDefaultProps2,
    _useMergeDefaultProps3 = _useMergeDefaultProps.size,
    size = _useMergeDefaultProps3 === void 0 ? "sm" : _useMergeDefaultProps3,
    _useMergeDefaultProps4 = _useMergeDefaultProps.fullWidth,
    fullWidth = _useMergeDefaultProps4 === void 0 ? false : _useMergeDefaultProps4,
    onClickProp = _useMergeDefaultProps.onClick,
    style = _useMergeDefaultProps.style,
    _useMergeDefaultProps5 = _useMergeDefaultProps.type,
    type = _useMergeDefaultProps5 === void 0 ? "button" : _useMergeDefaultProps5,
    action = _useMergeDefaultProps.action,
    colorProp = _useMergeDefaultProps.color,
    rest = _objectWithoutProperties(_useMergeDefaultProps, _excluded);
  var color = useColor(colorProp);
  var _useTheme = useTheme(),
    DefaultLoader = _useTheme.loader;
  var loadingElement = loadingElementProp || /*#__PURE__*/_jsx(DefaultLoader, {});
  var _useContext = useContext(FormContext),
    valid = _useContext.valid,
    submit = _useContext.handleSubmit;
  var disabled = disabledProp || loading || type === "submit" && valid === false;
  var handleSubmit = function handleSubmit(e) {
    e.preventDefault();
    submit(action);
  };
  var onClick = type === "submit" ? handleSubmit : onClickProp;
  return /*#__PURE__*/_jsxs(ButtonRoot, _objectSpread(_objectSpread({
    isLoading: loading,
    variant: variant,
    size: size,
    fullWidth: fullWidth,
    disabled: disabled,
    onClick: onClick,
    className: cx("Button", loading && "Loading", disabled && "Disabled", capitalize(size), capitalize(variant), className),
    style: fsx(style, {
      disabled: disabled,
      loading: loading
    }),
    type: type,
    color: color
  }, rest), {}, {
    children: [/*#__PURE__*/_jsx(ButtonContent, {
      children: children
    }), loading && /*#__PURE__*/_jsx(ButtonLoader, {
      className: "ButtonLoader",
      children: loadingElement
    })]
  }));
};
export default Button;