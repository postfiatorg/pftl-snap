"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));
var _reactComponentsCore = require("@peersyst/react-components-core");
var _FormControlError2 = require("../FormControlError");
var _FormControlHint2 = require("../FormControlHint");
var _FormControlLabel = require("../FormControlLabel");
var _reactUtils = require("@peersyst/react-utils");
var _FormControl = require("./FormControl.styles");
var _jsxRuntime = require("react/jsx-runtime");
var _excluded = ["className", "style", "label", "hint", "Label", "children", "onClick"];
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { (0, _defineProperty2["default"])(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function FormControl(props) {
  var _FormControlHint;
  var _useMergeDefaultProps = (0, _reactComponentsCore.useMergeDefaultProps)("FormControl", props),
    className = _useMergeDefaultProps.className,
    style = _useMergeDefaultProps.style,
    label = _useMergeDefaultProps.label,
    hint = _useMergeDefaultProps.hint,
    _useMergeDefaultProps2 = _useMergeDefaultProps.Label,
    Label = _useMergeDefaultProps2 === void 0 ? _FormControlLabel.FormControlLabel : _useMergeDefaultProps2,
    _children = _useMergeDefaultProps.children,
    onClick = _useMergeDefaultProps.onClick,
    coreProps = (0, _objectWithoutProperties2["default"])(_useMergeDefaultProps, _excluded);
  var _ref = Array.isArray(Label) ? Label : [Label, {}],
    _ref2 = (0, _slicedToArray2["default"])(_ref, 2),
    LabelComponent = _ref2[0],
    LabelProps = _ref2[1];
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactComponentsCore.FormControl, _objectSpread(_objectSpread({}, coreProps), {}, {
    children: function children(value, setValue, _setFocused, error) {
      var _FormControlError;
      return /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactComponentsCore.FormControlContext.Consumer, {
        children: function children(context) {
          var required = context.required,
            readonly = context.readonly,
            invalid = context.invalid,
            disabled = context.disabled,
            focused = context.focused,
            valid = context.valid;
          var content = _children(value, setValue, context);
          return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_FormControl.FormControlRoot, {
            gap: 5,
            onClick: onClick,
            className: (0, _reactUtils.cx)("FormControl", required && "Required", readonly && "Readonly", focused && "Focused", invalid && "Invalid", valid && "Valid", disabled && "Disabled", className),
            style: style,
            children: [label ? /*#__PURE__*/(0, _jsxRuntime.jsx)(LabelComponent, _objectSpread(_objectSpread({
              label: label
            }, LabelProps), {}, {
              children: content
            })) : content, hint && (_FormControlHint || (_FormControlHint = /*#__PURE__*/(0, _jsxRuntime.jsx)(_FormControlHint2.FormControlHint, {
              hint: hint
            }))), error && (_FormControlError || (_FormControlError = /*#__PURE__*/(0, _jsxRuntime.jsx)(_FormControlError2.FormControlError, {
              error: error
            })))]
          });
        }
      });
    }
  }));
}
var _default = exports["default"] = FormControl;