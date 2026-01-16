import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
var _excluded = ["className"];
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
import { useFormControl, useMergeDefaultProps } from "@peersyst/react-components-core";
import { cx } from "@peersyst/react-utils";
import { FormControlLabelRoot } from "./FormControlLabel.styles";
import { jsx as _jsx } from "react/jsx-runtime";
var FormControlLabel = function FormControlLabel(props) {
  var _useMergeDefaultProps = useMergeDefaultProps("FormControlLabel", props),
    className = _useMergeDefaultProps.className,
    labelProps = _objectWithoutProperties(_useMergeDefaultProps, _excluded);
  var _useFormControl = useFormControl(),
    required = _useFormControl.required,
    invalid = _useFormControl.invalid,
    disabled = _useFormControl.disabled,
    readonly = _useFormControl.readonly,
    focused = _useFormControl.focused,
    valid = _useFormControl.valid;
  return /*#__PURE__*/_jsx(FormControlLabelRoot, _objectSpread({
    className: cx("FormControlLabelRoot", required && "Required", readonly && "Readonly", focused && "Focused", invalid && "Invalid", valid && "Valid", disabled && "Disabled", className)
  }, labelProps));
};
export default FormControlLabel;