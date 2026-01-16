"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));
var _reactComponentsCore = require("@peersyst/react-components-core");
var _Chip = require("./Chip.styles");
var _reactUtils = require("@peersyst/react-utils");
var _react = require("react");
var _IconButton = require("../IconButton");
var _jsxRuntime = require("react/jsx-runtime");
var _excluded = ["clickable", "onClick", "deleteIcon", "onDelete", "rounded", "disabled", "variant", "size", "label", "prefix", "suffix", "className", "style", "role"];
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { (0, _defineProperty2["default"])(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
var Chip = /*#__PURE__*/(0, _react.forwardRef)(function Chip(props, _ref) {
  var _useMergeDefaultProps = (0, _reactComponentsCore.useMergeDefaultProps)("Chip", props),
    clickableProp = _useMergeDefaultProps.clickable,
    onClick = _useMergeDefaultProps.onClick,
    deleteIconProp = _useMergeDefaultProps.deleteIcon,
    onDelete = _useMergeDefaultProps.onDelete,
    rounded = _useMergeDefaultProps.rounded,
    disabled = _useMergeDefaultProps.disabled,
    variant = _useMergeDefaultProps.variant,
    size = _useMergeDefaultProps.size,
    label = _useMergeDefaultProps.label,
    prefix = _useMergeDefaultProps.prefix,
    suffix = _useMergeDefaultProps.suffix,
    className = _useMergeDefaultProps.className,
    style = _useMergeDefaultProps.style,
    role = _useMergeDefaultProps.role,
    rest = (0, _objectWithoutProperties2["default"])(_useMergeDefaultProps, _excluded);
  var _useTheme = (0, _reactComponentsCore.useTheme)(),
    CrossIcon = _useTheme.icons.cross;
  var handleDeleteIconClick = function handleDeleteIconClick(event) {
    event.stopPropagation();
    onDelete == null || onDelete(event);
  };
  var clickable = clickableProp != null ? clickableProp : !!onClick;
  var deleteIcon = onDelete ? /*#__PURE__*/(0, _jsxRuntime.jsx)(_IconButton.IconButton, {
    className: "DeleteButton",
    onClick: handleDeleteIconClick,
    children: /*#__PURE__*/(0, _react.isValidElement)(deleteIconProp) ? deleteIconProp : /*#__PURE__*/(0, _jsxRuntime.jsx)(CrossIcon, {})
  }) : undefined;
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_Chip.ChipRoot, _objectSpread(_objectSpread({
    ref: function ref(r) {
      return (0, _reactUtils.setRef)(_ref, r);
    },
    className: (0, _reactUtils.cx)("Chip", clickable && "Clickable", deleteIcon && "Deletable", rounded && "Rounded", disabled && "Disabled", variant[0].toUpperCase() + variant.slice(1), size[0].toUpperCase() + size.slice(1), className),
    style: style,
    gap: _Chip.chipGapSizes[size],
    onClick: disabled ? undefined : onClick,
    role: onClick ? "button" : role
  }, rest), {}, {
    children: [prefix, /*#__PURE__*/(0, _jsxRuntime.jsx)(_Chip.ChipLabel, {
      className: "ChipLabel",
      children: label
    }), deleteIcon || suffix]
  }));
});
var _default = exports["default"] = Chip;