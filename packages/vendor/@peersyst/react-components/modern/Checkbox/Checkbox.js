import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
var _UncheckedBoxIcon, _CheckedBoxIcon;
var _excluded = ["defaultValue", "icon", "checkedIcon", "disabled", "LabelProps", "hideError", "Label"];
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
import { CheckboxRoot } from "./Checkbox.styles";
import { cx } from "@peersyst/react-utils";
import { CheckedBoxIcon, UncheckedBoxIcon } from "../assets/icons";
import { Label } from "../Label";
import { useMergeDefaultProps } from "@peersyst/react-components-core";
import { useRef } from "react";
import PointerFormControl from "../common/PointerFormControl";
import { jsx as _jsx } from "react/jsx-runtime";
export default function Checkbox(props) {
  var _useMergeDefaultProps = useMergeDefaultProps("Checkbox", props),
    _useMergeDefaultProps2 = _useMergeDefaultProps.defaultValue,
    defaultValue = _useMergeDefaultProps2 === void 0 ? false : _useMergeDefaultProps2,
    _useMergeDefaultProps3 = _useMergeDefaultProps.icon,
    icon = _useMergeDefaultProps3 === void 0 ? _UncheckedBoxIcon || (_UncheckedBoxIcon = /*#__PURE__*/_jsx(UncheckedBoxIcon, {})) : _useMergeDefaultProps3,
    _useMergeDefaultProps4 = _useMergeDefaultProps.checkedIcon,
    checkedIcon = _useMergeDefaultProps4 === void 0 ? _CheckedBoxIcon || (_CheckedBoxIcon = /*#__PURE__*/_jsx(CheckedBoxIcon, {})) : _useMergeDefaultProps4,
    _useMergeDefaultProps5 = _useMergeDefaultProps.disabled,
    disabled = _useMergeDefaultProps5 === void 0 ? false : _useMergeDefaultProps5,
    _useMergeDefaultProps6 = _useMergeDefaultProps.LabelProps,
    LabelProps = _useMergeDefaultProps6 === void 0 ? {} : _useMergeDefaultProps6,
    _useMergeDefaultProps7 = _useMergeDefaultProps.hideError,
    hideError = _useMergeDefaultProps7 === void 0 ? true : _useMergeDefaultProps7,
    _useMergeDefaultProps8 = _useMergeDefaultProps.Label,
    LabelProp = _useMergeDefaultProps8 === void 0 ? Label : _useMergeDefaultProps8,
    rest = _objectWithoutProperties(_useMergeDefaultProps, _excluded);
  var checkboxRef = useRef(null);
  var handleClick = function handleClick() {
    if (checkboxRef.current) checkboxRef.current.click();
  };
  return /*#__PURE__*/_jsx(PointerFormControl, _objectSpread(_objectSpread({
    Label: [LabelProp, _objectSpread({
      placement: "right"
    }, LabelProps)],
    defaultValue: defaultValue,
    disabled: disabled,
    hideError: hideError,
    onClick: handleClick
  }, rest), {}, {
    children: function children(value, setValue) {
      return /*#__PURE__*/_jsx(CheckboxRoot, {
        className: cx("Checkbox", value && "Checked", disabled && "Disabled"),
        onClick: function onClick() {
          return setValue(!value);
        },
        role: "checkbox",
        "aria-checked": value,
        tabIndex: 0,
        ref: checkboxRef,
        children: value ? checkedIcon : icon
      });
    }
  }));
}