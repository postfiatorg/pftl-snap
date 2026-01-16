import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
var _excluded = ["controller", "renderController", "className", "style", "value", "label", "LabelProps"],
  _excluded2 = ["setSelected", "isSelected"];
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
import { Selector as CoreSelector, useMergeDefaultProps } from "@peersyst/react-components-core";
import { cx } from "@peersyst/react-utils";
import { RadioButton } from "../../RadioButton";
import { Checkbox } from "../../Checkbox";
import { Switch } from "../../Switch";
import { jsx as _jsx } from "react/jsx-runtime";
export var SELECTOR_CONTROLLERS = {
  checkbox: Checkbox,
  radio: RadioButton,
  "switch": Switch
};
function Selector(props) {
  var _useMergeDefaultProps = useMergeDefaultProps("Selector", props),
    _useMergeDefaultProps2 = _useMergeDefaultProps.controller,
    controller = _useMergeDefaultProps2 === void 0 ? "radio" : _useMergeDefaultProps2,
    renderController = _useMergeDefaultProps.renderController,
    className = _useMergeDefaultProps.className,
    style = _useMergeDefaultProps.style,
    value = _useMergeDefaultProps.value,
    label = _useMergeDefaultProps.label,
    LabelProps = _useMergeDefaultProps.LabelProps,
    rest = _objectWithoutProperties(_useMergeDefaultProps, _excluded);
  var Controller = typeof controller === "string" ? SELECTOR_CONTROLLERS[controller] : controller;
  return /*#__PURE__*/_jsx(CoreSelector, {
    value: value,
    children: function children(_ref) {
      var setSelected = _ref.setSelected,
        isSelected = _ref.isSelected,
        contextRest = _objectWithoutProperties(_ref, _excluded2);
      return renderController ? renderController(_objectSpread({
        label: label,
        value: value,
        isSelected: isSelected,
        setSelected: setSelected
      }, contextRest)) : /*#__PURE__*/_jsx(Controller, _objectSpread(_objectSpread({
        style: style,
        className: cx("Selector", isSelected && "Selected", className),
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
export default Selector;