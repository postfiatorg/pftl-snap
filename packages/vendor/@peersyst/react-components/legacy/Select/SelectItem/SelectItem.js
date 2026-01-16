import { SelectItemRoot } from "./SelectItem.styles";
import { fsx, cx } from "@peersyst/react-utils";
import { SelectItem as CoreSelectItem, useMergeDefaultProps } from "@peersyst/react-components-core";
import { jsx as _jsx } from "react/jsx-runtime";
export default function SelectItem(props) {
  var _useMergeDefaultProps = useMergeDefaultProps("SelectItem", props),
    _children = _useMergeDefaultProps.children,
    value = _useMergeDefaultProps.value,
    className = _useMergeDefaultProps.className,
    style = _useMergeDefaultProps.style;
  return /*#__PURE__*/_jsx(CoreSelectItem, {
    value: value,
    children: function children(_ref) {
      var isSelected = _ref.isSelected,
        setSelected = _ref.setSelected,
        readonly = _ref.readonly;
      var styleProps = {
        selected: isSelected
      };
      return /*#__PURE__*/_jsx(SelectItemRoot, {
        onClick: setSelected,
        selected: isSelected,
        readonly: readonly,
        className: cx(className, "SelectItem", isSelected && "Selected"),
        style: fsx(style, styleProps),
        children: _children
      });
    }
  });
}