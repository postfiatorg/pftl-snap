"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));
var _react = require("react");
var _TextInput = _interopRequireDefault(require("../TextInput/TextInput"));
var _TextField = require("./TextField.styles");
var _IconButton = require("../IconButton");
var _theme = require("../theme");
var _reactUtils = require("@peersyst/react-utils");
var _reactComponentsCore = require("@peersyst/react-components-core");
var _jsxRuntime = require("react/jsx-runtime");
var _excluded = ["type", "showPasswordElement", "hidePasswordElement", "clearElement", "clearable", "className"],
  _excluded2 = ["spellCheck", "value", "setValue", "ref"];
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { (0, _defineProperty2["default"])(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
var TextField = /*#__PURE__*/(0, _react.forwardRef)(function TextField(rawProps, fwdRef) {
  var props = (0, _reactComponentsCore.useMergeDefaultProps)("TextField", rawProps);
  var type = props.type,
    showPasswordElementProp = props.showPasswordElement,
    hidePasswordElementProp = props.hidePasswordElement,
    clearElementProp = props.clearElement,
    clearable = props.clearable,
    className = props.className,
    textInputProps = (0, _objectWithoutProperties2["default"])(props, _excluded);
  var _useState = (0, _react.useState)(false),
    _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
    showPwd = _useState2[0],
    setShowPwd = _useState2[1];
  var _useTheme = (0, _theme.useTheme)(),
    _useTheme$icons = _useTheme.icons,
    Show = _useTheme$icons.show,
    Hide = _useTheme$icons.hide,
    Cross = _useTheme$icons.cross;
  var showPasswordElement = showPasswordElementProp || /*#__PURE__*/(0, _jsxRuntime.jsx)(Show, {});
  var hidePasswordElement = hidePasswordElementProp || /*#__PURE__*/(0, _jsxRuntime.jsx)(Hide, {});
  var clearElement = clearElementProp || /*#__PURE__*/(0, _jsxRuntime.jsx)(Cross, {});
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_TextInput["default"], _objectSpread(_objectSpread({
    className: (0, _reactUtils.cx)("TextField", className)
  }, textInputProps), {}, {
    children: function children(_ref) {
      var spellCheck = _ref.spellCheck,
        value = _ref.value,
        setValue = _ref.setValue,
        _ref2 = _ref.ref,
        props = (0, _objectWithoutProperties2["default"])(_ref, _excluded2);
      return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_jsxRuntime.Fragment, {
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_TextField.TextFieldInput, _objectSpread(_objectSpread({}, props), {}, {
          value: value,
          type: showPwd ? "text" : type || "text",
          spellCheck: !(type === "email" || type === "password") || spellCheck,
          ref: function ref(r) {
            (0, _reactUtils.setRef)(_ref2, r);
            (0, _reactUtils.setRef)(fwdRef, r);
          },
          onClick: function onClick(e) {
            return e.stopPropagation();
          }
        })), !!value && clearable && /*#__PURE__*/(0, _jsxRuntime.jsx)(_IconButton.IconButton, {
          onClick: function onClick() {
            return setValue("");
          },
          children: clearElement
        }), type === "password" && /*#__PURE__*/(0, _jsxRuntime.jsx)(_IconButton.IconButton, {
          onClick: function onClick() {
            return setShowPwd(!showPwd);
          },
          children: showPwd ? showPasswordElement : hidePasswordElement
        })]
      });
    }
  }));
});
var _default = exports["default"] = TextField;