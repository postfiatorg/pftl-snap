import { IconButton } from "../../../IconButton";
import { jsx as _jsx, Fragment as _Fragment } from "react/jsx-runtime";
export default function TabGroupArrow(_ref) {
  var direction = _ref.direction,
    onScroll = _ref.onScroll,
    tabGroupWidth = _ref.tabGroupWidth,
    tabGroupScrollLeft = _ref.tabGroupScrollLeft,
    tabGroupScrollWidth = _ref.tabGroupScrollWidth,
    children = _ref.children;
  var disabled = direction === "left" ? tabGroupScrollLeft <= 0 : tabGroupScrollLeft + tabGroupWidth >= tabGroupScrollWidth;
  return tabGroupWidth < tabGroupScrollWidth ? /*#__PURE__*/_jsx(IconButton, {
    onClick: function onClick() {
      return !disabled && onScroll(direction);
    },
    disabled: disabled,
    children: children
  }) : /*#__PURE__*/_jsx(_Fragment, {});
}