"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.SELECTOR_CONTROLLERS = void 0;
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));
var _reactComponentsCore = require("@peersyst/react-components-core");
var _reactUtils = require("@peersyst/react-utils");
var _RadioButton = require("../../RadioButton");
var _Checkbox = require("../../Checkbox");
var _Switch = require("../../Switch");
var _jsxRuntime = require("react/jsx-runtime");
var _excluded = ["controller", "renderController", "className", "style", "value", "label", "LabelProps"],
  _excluded2 = ["setSelected", "isSelected"];
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { (0, _defineProperty2["default"])(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
var SELECTOR_CONTROLLERS = exports.SELECTOR_CONTROLLERS = {
  checkbox: _Checkbox.Checkbox,
  radio: _RadioButton.RadioButton,
  "switch": _Switch.Switch
};
function Selector(props) {
  var _useMergeDefaultProps = (0, _reactComponentsCore.useMergeDefaultProps)("Selector", props),
    _useMergeDefaultProps2 = _useMergeDefaultProps.controller,
    controller = _useMergeDefaultProps2 === void 0 ? "radio" : _useMergeDefaultProps2,
    renderController = _useMergeDefaultProps.renderController,
    className = _useMergeDefaultProps.className,
    style = _useMergeDefaultProps.style,
    value = _useMergeDefaultProps.value,
    label = _useMergeDefaultProps.label,
    LabelProps = _useMergeDefaultProps.LabelProps,
    rest = (0, _objectWithoutProperties2["default"])(_useMergeDefaultProps, _excluded);
  var Controller = typeof controller === "string" ? SELECTOR_CONTROLLERS[controller] : controller;
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactComponentsCore.Selector, {
    value: value,
    children: function children(_ref) {
      var setSelected = _ref.setSelected,
        isSelected = _ref.isSelected,
        contextRest = (0, _objectWithoutProperties2["default"])(_ref, _excluded2);
      return renderController ? renderController(_objectSpread({
        label: label,
        value: value,
        isSelected: isSelected,
        setSelected: setSelected
      }, contextRest)) : /*#__PURE__*/(0, _jsxRuntime.jsx)(Controller, _objectSpread(_objectSpread({
        style: style,
        className: (0, _reactUtils.cx)("Selector", isSelected && "Selected", className),
        value: isSelected,
        onChange: setSelected,
        label: label,
        LabelProps: _objectSpread({
          placement: "right"
        }, LabelProps)
      }, rest), contextRest));
    }
  });
}
var _default = exports["default"] = Selector;