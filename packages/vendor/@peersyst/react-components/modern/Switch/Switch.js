import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
var _excluded = ["defaultValue", "disabled", "readonly", "children", "LabelProps", "hideError", "Label"];
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
import { Children } from "react";
import { SwitchChildren, SwitchRoot, SwitchThumb, SwitchTrack } from "./Switch.styles";
import { cx } from "@peersyst/react-utils";
import { FormControl } from "../FormControl";
import { Label } from "../Label";
import { useMergeDefaultProps } from "@peersyst/react-components-core";
import { Row } from "../Row";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
export default function Switch(props) {
  var _useMergeDefaultProps = useMergeDefaultProps("Switch", props),
    _useMergeDefaultProps2 = _useMergeDefaultProps.defaultValue,
    defaultValue = _useMergeDefaultProps2 === void 0 ? false : _useMergeDefaultProps2,
    _useMergeDefaultProps3 = _useMergeDefaultProps.disabled,
    disabled = _useMergeDefaultProps3 === void 0 ? false : _useMergeDefaultProps3,
    _useMergeDefaultProps4 = _useMergeDefaultProps.readonly,
    readonly = _useMergeDefaultProps4 === void 0 ? false : _useMergeDefaultProps4,
    _children = _useMergeDefaultProps.children,
    _useMergeDefaultProps5 = _useMergeDefaultProps.LabelProps,
    LabelProps = _useMergeDefaultProps5 === void 0 ? {} : _useMergeDefaultProps5,
    _useMergeDefaultProps6 = _useMergeDefaultProps.hideError,
    hideError = _useMergeDefaultProps6 === void 0 ? true : _useMergeDefaultProps6,
    _useMergeDefaultProps7 = _useMergeDefaultProps.Label,
    LabelProp = _useMergeDefaultProps7 === void 0 ? Label : _useMergeDefaultProps7,
    rest = _objectWithoutProperties(_useMergeDefaultProps, _excluded);
  return /*#__PURE__*/_jsx(FormControl, _objectSpread(_objectSpread({
    Label: [LabelProp, _objectSpread({
      placement: "left"
    }, LabelProps)],
    defaultValue: defaultValue,
    disabled: disabled,
    hideError: hideError
  }, rest), {}, {
    children: function children(value, setValue) {
      var styleProps = {
        checked: value,
        disabled: disabled
      };
      return /*#__PURE__*/_jsxs(SwitchRoot, _objectSpread(_objectSpread({
        className: cx("Switch", value && "Checked", readonly && "Readonly", disabled && "Disabled"),
        onClick: function onClick() {
          return setValue(!value);
        }
      }, styleProps), {}, {
        children: [/*#__PURE__*/_jsx(SwitchChildren, {
          children: Children.map(_children, function (child, index) {
            return /*#__PURE__*/_jsx(Row, {
              flex: 1,
              justifyContent: "center",
              alignItems: "center",
              children: child
            }, index.toString());
          })
        }), /*#__PURE__*/_jsx(SwitchTrack, _objectSpread(_objectSpread({}, styleProps), {}, {
          className: cx("SwitchTrack", value && "Checked", disabled && "Disabled"),
          children: /*#__PURE__*/_jsx(SwitchThumb, _objectSpread(_objectSpread({}, styleProps), {}, {
            className: cx("SwitchThumb", value && "Checked", disabled && "Disabled")
          }))
        }))]
      }));
    }
  }));
}