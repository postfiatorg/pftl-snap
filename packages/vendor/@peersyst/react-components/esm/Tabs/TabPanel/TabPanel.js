import { TabsConsumer } from "../TabsContext";
import { TabPanelRoot } from "./TabPanel.styles";
import { cx } from "@peersyst/react-utils";
import { useMergeDefaultProps } from "@peersyst/react-components-core";
import { jsx as _jsx, Fragment as _Fragment } from "react/jsx-runtime";
export default function TabPanel(props) {
  var _useMergeDefaultProps = useMergeDefaultProps("TabPanel", props),
    index = _useMergeDefaultProps.index,
    className = _useMergeDefaultProps.className,
    style = _useMergeDefaultProps.style,
    _children = _useMergeDefaultProps.children;
  return /*#__PURE__*/_jsx(TabsConsumer, {
    children: function children(_ref) {
      var activeIndex = _ref.activeIndex;
      return /*#__PURE__*/_jsx(_Fragment, {
        children: activeIndex === index && /*#__PURE__*/_jsx(TabPanelRoot, {
          className: cx("TabPanel", className),
          style: style || {},
          children: _children
        })
      });
    }
  });
}