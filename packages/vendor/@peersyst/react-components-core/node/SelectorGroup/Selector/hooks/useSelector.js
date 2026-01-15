"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useSelector = useSelector;
var _react = require("react");
var _hooks = require("../../../Select/hooks");
var _utils = require("../../../Select/utils");
var _SelectorGroupContext = require("../../SelectorGroupContext");
function useSelector(_ref) {
  var value = _ref.value;
  var _useContext = (0, _react.useContext)(_SelectorGroupContext.SelectorGroupContext),
    setValue = _useContext.setValue,
    readonly = _useContext.readonly,
    selected = _useContext.value,
    multiple = _useContext.multiple,
    disabled = _useContext.disabled;
  var isSelected = (0, _hooks.useSelected)(value, selected, multiple);
  var handleSelect = function handleSelect() {
    if (!readonly && !disabled) {
      setValue((0, _utils.handleSelection)(value, selected, multiple, isSelected));
    }
  };
  return {
    isSelected: isSelected,
    selected: selected,
    setSelected: handleSelect,
    readonly: readonly,
    disabled: disabled,
    multiple: multiple
  };
}