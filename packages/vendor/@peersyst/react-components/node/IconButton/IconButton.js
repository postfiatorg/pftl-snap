"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));
var _IconButton = require("./IconButton.styles");
var _reactUtils = require("@peersyst/react-utils");
var _react = require("react");
var _theme = require("../theme");
var _reactComponentsCore = require("@peersyst/react-components-core");
var _jsxRuntime = require("react/jsx-runtime");
var _excluded = ["children", "loading", "loadingElement", "disabled", "onClick", "style", "className", "type", "action", "color"];
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { (0, _defineProperty2["default"])(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
var IconButton = /*#__PURE__*/(0, _react.forwardRef)(function (props, _ref) {
  var _useMergeDefaultProps = (0, _reactComponentsCore.useMergeDefaultProps)("IconButton", props),
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
    rest = (0, _objectWithoutProperties2["default"])(_useMergeDefaultProps, _excluded);
  var _useTheme = (0, _theme.useTheme)(),
    DefaultLoader = _useTheme.loader;
  var loadingElement = loadingElementProp || /*#__PURE__*/(0, _jsxRuntime.jsx)(DefaultLoader, {});
  var color = (0, _reactComponentsCore.useColor)(colorProp);
  var _useContext = (0, _react.useContext)(_reactComponentsCore.FormContext),
    valid = _useContext.valid,
    submit = _useContext.handleSubmit;
  var disabled = disabledProp || loading || type === "submit" && valid === false;
  var handleSubmit = function handleSubmit(e) {
    e.preventDefault();
    submit(action);
  };
  var onClick = type === "submit" ? handleSubmit : onClickProp;
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_IconButton.IconButtonRoot, _objectSpread(_objectSpread({
    disabled: disabled || loading,
    onClick: onClick,
    style: (0, _reactUtils.fsx)(style, {
      disabled: disabled
    }),
    className: (0, _reactUtils.cx)("IconButton", disabled && "Disabled", className),
    type: type,
    ref: function ref(r) {
      return (0, _reactUtils.setRef)(_ref, r);
    },
    color: color
  }, rest), {}, {
    children: loading ? loadingElement : children
  }));
});
IconButton.displayName = "IconButton";
var _default = exports["default"] = IconButton;