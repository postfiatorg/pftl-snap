"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));
var _Button = require("./Button.styles");
var _theme = require("../theme");
var _reactUtils = require("@peersyst/react-utils");
var _react = require("react");
var _reactComponentsCore = require("@peersyst/react-components-core");
var _jsxRuntime = require("react/jsx-runtime");
var _excluded = ["className", "disabled", "children", "loading", "loadingElement", "variant", "size", "fullWidth", "onClick", "style", "type", "action", "color"];
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { (0, _defineProperty2["default"])(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
var Button = function Button(props) {
  var _useMergeDefaultProps = (0, _reactComponentsCore.useMergeDefaultProps)("Button", props),
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
    rest = (0, _objectWithoutProperties2["default"])(_useMergeDefaultProps, _excluded);
  var color = (0, _reactComponentsCore.useColor)(colorProp);
  var _useTheme = (0, _theme.useTheme)(),
    DefaultLoader = _useTheme.loader;
  var loadingElement = loadingElementProp || /*#__PURE__*/(0, _jsxRuntime.jsx)(DefaultLoader, {});
  var _useContext = (0, _react.useContext)(_reactComponentsCore.FormContext),
    valid = _useContext.valid,
    submit = _useContext.handleSubmit;
  var disabled = disabledProp || loading || type === "submit" && valid === false;
  var handleSubmit = function handleSubmit(e) {
    e.preventDefault();
    submit(action);
  };
  var onClick = type === "submit" ? handleSubmit : onClickProp;
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_Button.ButtonRoot, _objectSpread(_objectSpread({
    isLoading: loading,
    variant: variant,
    size: size,
    fullWidth: fullWidth,
    disabled: disabled,
    onClick: onClick,
    className: (0, _reactUtils.cx)("Button", loading && "Loading", disabled && "Disabled", (0, _reactUtils.capitalize)(size), (0, _reactUtils.capitalize)(variant), className),
    style: (0, _reactUtils.fsx)(style, {
      disabled: disabled,
      loading: loading
    }),
    type: type,
    color: color
  }, rest), {}, {
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_Button.ButtonContent, {
      children: children
    }), loading && /*#__PURE__*/(0, _jsxRuntime.jsx)(_Button.ButtonLoader, {
      className: "ButtonLoader",
      children: loadingElement
    })]
  }));
};
var _default = exports["default"] = Button;