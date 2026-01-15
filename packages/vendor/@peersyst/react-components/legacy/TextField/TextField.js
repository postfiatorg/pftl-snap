import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
var _excluded = ["type", "showPasswordElement", "hidePasswordElement", "clearElement", "clearable", "className"],
  _excluded2 = ["spellCheck", "value", "setValue", "ref"];
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
import { forwardRef, useState } from "react";
import TextInput from "../TextInput/TextInput";
import { TextFieldInput } from "./TextField.styles";
import { IconButton } from "../IconButton";
import { useTheme } from "../theme";
import { cx, setRef } from "@peersyst/react-utils";
import { useMergeDefaultProps } from "@peersyst/react-components-core";
import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
var TextField = /*#__PURE__*/forwardRef(function TextField(rawProps, fwdRef) {
  var props = useMergeDefaultProps("TextField", rawProps);
  var type = props.type,
    showPasswordElementProp = props.showPasswordElement,
    hidePasswordElementProp = props.hidePasswordElement,
    clearElementProp = props.clearElement,
    clearable = props.clearable,
    className = props.className,
    textInputProps = _objectWithoutProperties(props, _excluded);
  var _useState = useState(false),
    _useState2 = _slicedToArray(_useState, 2),
    showPwd = _useState2[0],
    setShowPwd = _useState2[1];
  var _useTheme = useTheme(),
    _useTheme$icons = _useTheme.icons,
    Show = _useTheme$icons.show,
    Hide = _useTheme$icons.hide,
    Cross = _useTheme$icons.cross;
  var showPasswordElement = showPasswordElementProp || /*#__PURE__*/_jsx(Show, {});
  var hidePasswordElement = hidePasswordElementProp || /*#__PURE__*/_jsx(Hide, {});
  var clearElement = clearElementProp || /*#__PURE__*/_jsx(Cross, {});
  return /*#__PURE__*/_jsx(TextInput, _objectSpread(_objectSpread({
    className: cx("TextField", className)
  }, textInputProps), {}, {
    children: function children(_ref) {
      var spellCheck = _ref.spellCheck,
        value = _ref.value,
        setValue = _ref.setValue,
        _ref2 = _ref.ref,
        props = _objectWithoutProperties(_ref, _excluded2);
      return /*#__PURE__*/_jsxs(_Fragment, {
        children: [/*#__PURE__*/_jsx(TextFieldInput, _objectSpread(_objectSpread({}, props), {}, {
          value: value,
          type: showPwd ? "text" : type || "text",
          spellCheck: !(type === "email" || type === "password") || spellCheck,
          ref: function ref(r) {
            setRef(_ref2, r);
            setRef(fwdRef, r);
          },
          onClick: function onClick(e) {
            return e.stopPropagation();
          }
        })), !!value && clearable && /*#__PURE__*/_jsx(IconButton, {
          onClick: function onClick() {
            return setValue("");
          },
          children: clearElement
        }), type === "password" && /*#__PURE__*/_jsx(IconButton, {
          onClick: function onClick() {
            return setShowPwd(!showPwd);
          },
          children: showPwd ? showPasswordElement : hidePasswordElement
        })]
      });
    }
  }));
});
export default TextField;