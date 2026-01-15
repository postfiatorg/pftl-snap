"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));
var _ToggleButton = require("./ToggleButton.styles");
var _reactHooks = require("@peersyst/react-hooks");
var _reactUtils = require("@peersyst/react-utils");
var _reactComponentsCore = require("@peersyst/react-components-core");
var _jsxRuntime = require("react/jsx-runtime");
var _excluded = ["defaultSelected", "selected", "onChange", "className"];
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { (0, _defineProperty2["default"])(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
var ToggleButton = function ToggleButton(props) {
  var _useMergeDefaultProps = (0, _reactComponentsCore.useMergeDefaultProps)("ToggleButton", props),
    _useMergeDefaultProps2 = _useMergeDefaultProps.defaultSelected,
    defaultSelected = _useMergeDefaultProps2 === void 0 ? false : _useMergeDefaultProps2,
    selectedProp = _useMergeDefaultProps.selected,
    onChange = _useMergeDefaultProps.onChange,
    className = _useMergeDefaultProps.className,
    buttonProps = (0, _objectWithoutProperties2["default"])(_useMergeDefaultProps, _excluded);
  var _useControlled = (0, _reactHooks.useControlled)(defaultSelected, selectedProp, onChange),
    _useControlled2 = (0, _slicedToArray2["default"])(_useControlled, 2),
    selected = _useControlled2[0],
    setSelected = _useControlled2[1];
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_ToggleButton.ToggleButtonRoot, _objectSpread({
    className: (0, _reactUtils.cx)("ToggleButton", selected && "Selected", className),
    onClick: function onClick() {
      return setSelected(!selected);
    }
  }, buttonProps));
};
var _default = exports["default"] = ToggleButton;