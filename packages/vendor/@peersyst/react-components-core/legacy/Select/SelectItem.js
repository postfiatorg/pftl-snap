import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import { useContext, useTransition } from "react";
import { SelectContext } from "./SelectContext";
import { useSelected } from "./hooks";
import { handleSelection } from "./utils";
import { Fragment as _Fragment } from "react/jsx-runtime";
import { jsx as _jsx } from "react/jsx-runtime";
function SelectItem(_ref) {
  var value = _ref.value,
    children = _ref.children;
  var _useTransition = useTransition(),
    _useTransition2 = _slicedToArray(_useTransition, 2),
    startTransition = _useTransition2[1];
  var _useContext = useContext(SelectContext),
    setValue = _useContext.setValue,
    setOpen = _useContext.setOpen,
    readonly = _useContext.readonly,
    selected = _useContext.value,
    multiple = _useContext.multiple,
    compare = _useContext.compare;
  var isSelected = useSelected(value, selected, multiple, compare);
  var handleSelect = function handleSelect() {
    if (!readonly) {
      // Close if not multiple or (multiple and it is a clear item)
      (!multiple || value === undefined) && setOpen(false);
      // Do not block ui
      startTransition(function () {
        setValue(handleSelection(value, selected, multiple, isSelected));
      });
    }
  };
  return /*#__PURE__*/_jsx(_Fragment, {
    children: children({
      isSelected: isSelected,
      selected: selected,
      setSelected: handleSelect,
      setOpen: setOpen,
      readonly: readonly,
      multiple: multiple
    })
  });
}
export default SelectItem;