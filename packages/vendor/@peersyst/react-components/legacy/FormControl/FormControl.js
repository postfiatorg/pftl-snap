import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
var _excluded = ["className", "style", "label", "hint", "Label", "children", "onClick"];
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
import { FormControl as CoreFormControl, FormControlContext, useMergeDefaultProps } from "@peersyst/react-components-core";
import { FormControlError } from "../FormControlError";
import { FormControlHint } from "../FormControlHint";
import { FormControlLabel } from "../FormControlLabel";
import { cx } from "@peersyst/react-utils";
import { FormControlRoot } from "./FormControl.styles";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
function FormControl(props) {
  var _FormControlHint;
  var _useMergeDefaultProps = useMergeDefaultProps("FormControl", props),
    className = _useMergeDefaultProps.className,
    style = _useMergeDefaultProps.style,
    label = _useMergeDefaultProps.label,
    hint = _useMergeDefaultProps.hint,
    _useMergeDefaultProps2 = _useMergeDefaultProps.Label,
    Label = _useMergeDefaultProps2 === void 0 ? FormControlLabel : _useMergeDefaultProps2,
    _children = _useMergeDefaultProps.children,
    onClick = _useMergeDefaultProps.onClick,
    coreProps = _objectWithoutProperties(_useMergeDefaultProps, _excluded);
  var _ref = Array.isArray(Label) ? Label : [Label, {}],
    _ref2 = _slicedToArray(_ref, 2),
    LabelComponent = _ref2[0],
    LabelProps = _ref2[1];
  return /*#__PURE__*/_jsx(CoreFormControl, _objectSpread(_objectSpread({}, coreProps), {}, {
    children: function children(value, setValue, _setFocused, error) {
      var _FormControlError;
      return /*#__PURE__*/_jsx(FormControlContext.Consumer, {
        children: function children(context) {
          var required = context.required,
            readonly = context.readonly,
            invalid = context.invalid,
            disabled = context.disabled,
            focused = context.focused,
            valid = context.valid;
          var content = _children(value, setValue, context);
          return /*#__PURE__*/_jsxs(FormControlRoot, {
            gap: 5,
            onClick: onClick,
            className: cx("FormControl", required && "Required", readonly && "Readonly", focused && "Focused", invalid && "Invalid", valid && "Valid", disabled && "Disabled", className),
            style: style,
            children: [label ? /*#__PURE__*/_jsx(LabelComponent, _objectSpread(_objectSpread({
              label: label
            }, LabelProps), {}, {
              children: content
            })) : content, hint && (_FormControlHint || (_FormControlHint = /*#__PURE__*/_jsx(FormControlHint, {
              hint: hint
            }))), error && (_FormControlError || (_FormControlError = /*#__PURE__*/_jsx(FormControlError, {
              error: error
            })))]
          });
        }
      });
    }
  }));
}
export default FormControl;