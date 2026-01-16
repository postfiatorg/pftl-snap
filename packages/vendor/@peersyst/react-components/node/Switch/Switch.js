"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = Switch;
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));
var _react = require("react");
var _Switch = require("./Switch.styles");
var _reactUtils = require("@peersyst/react-utils");
var _FormControl = require("../FormControl");
var _Label = require("../Label");
var _reactComponentsCore = require("@peersyst/react-components-core");
var _Row = require("../Row");
var _jsxRuntime = require("react/jsx-runtime");
var _excluded = ["defaultValue", "disabled", "readonly", "children", "LabelProps", "hideError", "Label"];
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { (0, _defineProperty2["default"])(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function Switch(props) {
  var _useMergeDefaultProps = (0, _reactComponentsCore.useMergeDefaultProps)("Switch", props),
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
    LabelProp = _useMergeDefaultProps7 === void 0 ? _Label.Label : _useMergeDefaultProps7,
    rest = (0, _objectWithoutProperties2["default"])(_useMergeDefaultProps, _excluded);
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_FormControl.FormControl, _objectSpread(_objectSpread({
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
      return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_Switch.SwitchRoot, _objectSpread(_objectSpread({
        className: (0, _reactUtils.cx)("Switch", value && "Checked", readonly && "Readonly", disabled && "Disabled"),
        onClick: function onClick() {
          return setValue(!value);
        }
      }, styleProps), {}, {
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_Switch.SwitchChildren, {
          children: _react.Children.map(_children, function (child, index) {
            return /*#__PURE__*/(0, _jsxRuntime.jsx)(_Row.Row, {
              flex: 1,
              justifyContent: "center",
              alignItems: "center",
              children: child
            }, index.toString());
          })
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Switch.SwitchTrack, _objectSpread(_objectSpread({}, styleProps), {}, {
          className: (0, _reactUtils.cx)("SwitchTrack", value && "Checked", disabled && "Disabled"),
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Switch.SwitchThumb, _objectSpread(_objectSpread({}, styleProps), {}, {
            className: (0, _reactUtils.cx)("SwitchThumb", value && "Checked", disabled && "Disabled")
          }))
        }))]
      }));
    }
  }));
}