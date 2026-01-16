import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
var _excluded = ["defaultSelected", "selected", "onChange", "className"];
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
import { ToggleButtonRoot } from "./ToggleButton.styles";
import { useControlled } from "@peersyst/react-hooks";
import { cx } from "@peersyst/react-utils";
import { useMergeDefaultProps } from "@peersyst/react-components-core";
import { jsx as _jsx } from "react/jsx-runtime";
var ToggleButton = function ToggleButton(props) {
  var _useMergeDefaultProps = useMergeDefaultProps("ToggleButton", props),
    _useMergeDefaultProps2 = _useMergeDefaultProps.defaultSelected,
    defaultSelected = _useMergeDefaultProps2 === void 0 ? false : _useMergeDefaultProps2,
    selectedProp = _useMergeDefaultProps.selected,
    onChange = _useMergeDefaultProps.onChange,
    className = _useMergeDefaultProps.className,
    buttonProps = _objectWithoutProperties(_useMergeDefaultProps, _excluded);
  var _useControlled = useControlled(defaultSelected, selectedProp, onChange),
    _useControlled2 = _slicedToArray(_useControlled, 2),
    selected = _useControlled2[0],
    setSelected = _useControlled2[1];
  return /*#__PURE__*/_jsx(ToggleButtonRoot, _objectSpread({
    className: cx("ToggleButton", selected && "Selected", className),
    onClick: function onClick() {
      return setSelected(!selected);
    }
  }, buttonProps));
};
export default ToggleButton;