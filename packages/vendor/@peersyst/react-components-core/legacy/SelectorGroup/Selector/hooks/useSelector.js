import { useContext } from "react";
import { useSelected } from "../../../Select/hooks";
import { handleSelection } from "../../../Select/utils";
import { SelectorGroupContext } from "../../SelectorGroupContext";
export function useSelector(_ref) {
  var value = _ref.value;
  var _useContext = useContext(SelectorGroupContext),
    setValue = _useContext.setValue,
    readonly = _useContext.readonly,
    selected = _useContext.value,
    multiple = _useContext.multiple,
    disabled = _useContext.disabled;
  var isSelected = useSelected(value, selected, multiple);
  var handleSelect = function handleSelect() {
    if (!readonly && !disabled) {
      setValue(handleSelection(value, selected, multiple, isSelected));
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