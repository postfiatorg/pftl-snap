import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
var _excluded = ["clickable", "onClick", "deleteIcon", "onDelete", "rounded", "disabled", "variant", "size", "label", "prefix", "suffix", "className", "style", "role"];
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
import { useMergeDefaultProps, useTheme } from "@peersyst/react-components-core";
import { chipGapSizes, ChipLabel, ChipRoot } from "./Chip.styles";
import { cx } from "@peersyst/react-utils";
import { forwardRef, isValidElement } from "react";
import { IconButton } from "../IconButton";
import { setRef } from "@peersyst/react-utils";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
var Chip = /*#__PURE__*/forwardRef(function Chip(props, _ref) {
  var _useMergeDefaultProps = useMergeDefaultProps("Chip", props),
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
    rest = _objectWithoutProperties(_useMergeDefaultProps, _excluded);
  var _useTheme = useTheme(),
    CrossIcon = _useTheme.icons.cross;
  var handleDeleteIconClick = function handleDeleteIconClick(event) {
    event.stopPropagation();
    onDelete == null || onDelete(event);
  };
  var clickable = clickableProp != null ? clickableProp : !!onClick;
  var deleteIcon = onDelete ? /*#__PURE__*/_jsx(IconButton, {
    className: "DeleteButton",
    onClick: handleDeleteIconClick,
    children: /*#__PURE__*/isValidElement(deleteIconProp) ? deleteIconProp : /*#__PURE__*/_jsx(CrossIcon, {})
  }) : undefined;
  return /*#__PURE__*/_jsxs(ChipRoot, _objectSpread(_objectSpread({
    ref: function ref(r) {
      return setRef(_ref, r);
    },
    className: cx("Chip", clickable && "Clickable", deleteIcon && "Deletable", rounded && "Rounded", disabled && "Disabled", variant[0].toUpperCase() + variant.slice(1), size[0].toUpperCase() + size.slice(1), className),
    style: style,
    gap: chipGapSizes[size],
    onClick: disabled ? undefined : onClick,
    role: onClick ? "button" : role
  }, rest), {}, {
    children: [prefix, /*#__PURE__*/_jsx(ChipLabel, {
      className: "ChipLabel",
      children: label
    }), deleteIcon || suffix]
  }));
});
export default Chip;