import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
var _excluded = ["required", "multiple", "defaultValue", "disabled", "readonly", "children", "LabelProps", "selectorLabelProps", "Label", "options", "direction", "controller", "renderController", "className", "gap", "justifyContent", "alignItems", "reverse"];
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
import { SelectorGroupProvider, useMergeDefaultProps } from "@peersyst/react-components-core";
import { cx } from "@peersyst/react-utils";
import { FormControl } from "../FormControl";
import { Col } from "../Col";
import { FormControlLabel } from "../FormControlLabel";
import { Row } from "../Row";
import { Selector } from "./Selector";
import { jsx as _jsx } from "react/jsx-runtime";
function InnerSelectGroup(_ref) {
  var value = _ref.value,
    setValue = _ref.setValue,
    disabled = _ref.disabled,
    direction = _ref.direction,
    gap = _ref.gap,
    justifyContent = _ref.justifyContent,
    alignItems = _ref.alignItems,
    reverse = _ref.reverse,
    selectorLabelProps = _ref.selectorLabelProps,
    _ref$controller = _ref.controller,
    controller = _ref$controller === void 0 ? "radio" : _ref$controller,
    renderController = _ref.renderController,
    readonly = _ref.readonly,
    multiple = _ref.multiple,
    options = _ref.options,
    children = _ref.children;
  var layoutProps = {
    gap: gap,
    justifyContent: justifyContent,
    alignItems: alignItems,
    reverse: reverse
  };
  var _ref2 = direction === "row" ? [Row, _objectSpread(_objectSpread({}, layoutProps), {}, {
      wrap: true,
      wrapGap: gap
    })] : [Col, layoutProps],
    _ref3 = _slicedToArray(_ref2, 2),
    Wrapper = _ref3[0],
    WrapperProps = _ref3[1];
  return /*#__PURE__*/_jsx(SelectorGroupProvider, {
    value: {
      value: value,
      setValue: setValue,
      disabled: disabled,
      multiple: multiple,
      readonly: readonly
    },
    children: /*#__PURE__*/_jsx(Wrapper, _objectSpread(_objectSpread({
      className: "SelectorWrapper"
    }, WrapperProps), {}, {
      children: children || (options == null ? void 0 : options.map(function (_ref4, index) {
        var label = _ref4.label,
          value = _ref4.value;
        return /*#__PURE__*/_jsx(Selector, {
          LabelProps: selectorLabelProps,
          value: value,
          controller: controller,
          label: label,
          renderController: renderController
        }, index);
      }))
    }))
  });
}
function SelectorGroup(props) {
  var _useMergeDefaultProps = useMergeDefaultProps("SelectGroup", props),
    required = _useMergeDefaultProps.required,
    _useMergeDefaultProps2 = _useMergeDefaultProps.multiple,
    multiple = _useMergeDefaultProps2 === void 0 ? false : _useMergeDefaultProps2,
    defaultValue = _useMergeDefaultProps.defaultValue,
    _useMergeDefaultProps3 = _useMergeDefaultProps.disabled,
    disabled = _useMergeDefaultProps3 === void 0 ? false : _useMergeDefaultProps3,
    _useMergeDefaultProps4 = _useMergeDefaultProps.readonly,
    readonly = _useMergeDefaultProps4 === void 0 ? false : _useMergeDefaultProps4,
    _children = _useMergeDefaultProps.children,
    _useMergeDefaultProps5 = _useMergeDefaultProps.LabelProps,
    LabelProps = _useMergeDefaultProps5 === void 0 ? {} : _useMergeDefaultProps5,
    _useMergeDefaultProps6 = _useMergeDefaultProps.selectorLabelProps,
    selectorLabelProps = _useMergeDefaultProps6 === void 0 ? {} : _useMergeDefaultProps6,
    _useMergeDefaultProps7 = _useMergeDefaultProps.Label,
    Label = _useMergeDefaultProps7 === void 0 ? FormControlLabel : _useMergeDefaultProps7,
    options = _useMergeDefaultProps.options,
    _useMergeDefaultProps8 = _useMergeDefaultProps.direction,
    direction = _useMergeDefaultProps8 === void 0 ? "column" : _useMergeDefaultProps8,
    _useMergeDefaultProps9 = _useMergeDefaultProps.controller,
    controller = _useMergeDefaultProps9 === void 0 ? "radio" : _useMergeDefaultProps9,
    renderController = _useMergeDefaultProps.renderController,
    className = _useMergeDefaultProps.className,
    _useMergeDefaultProps10 = _useMergeDefaultProps.gap,
    gap = _useMergeDefaultProps10 === void 0 ? "1rem" : _useMergeDefaultProps10,
    justifyContent = _useMergeDefaultProps.justifyContent,
    alignItems = _useMergeDefaultProps.alignItems,
    reverse = _useMergeDefaultProps.reverse,
    rest = _objectWithoutProperties(_useMergeDefaultProps, _excluded);
  return /*#__PURE__*/_jsx(FormControl, _objectSpread(_objectSpread({
    Label: [Label, LabelProps],
    className: cx("SelectGroup", className),
    disabled: disabled,
    readonly: readonly,
    required: required
  }, rest), {}, {
    // @ts-ignore
    defaultValue: defaultValue,
    children: function children(value, setValue) {
      return /*#__PURE__*/_jsx(InnerSelectGroup, {
        value: value,
        setValue: setValue,
        disabled: disabled,
        direction: direction,
        selectorLabelProps: selectorLabelProps,
        gap: gap,
        justifyContent: justifyContent,
        alignItems: alignItems,
        reverse: reverse,
        renderController: renderController,
        controller: controller,
        readonly: readonly,
        multiple: multiple,
        options: options,
        children: _children
      });
    }
  }));
}
export default SelectorGroup;