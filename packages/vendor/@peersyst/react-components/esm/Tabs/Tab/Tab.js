import { createRef, useContext, useEffect } from "react";
import { TabsContext } from "../TabsContext";
import { TabRoot } from "./Tab.styles";
import { fsx, cx } from "@peersyst/react-utils";
import { useMergeDefaultProps } from "@peersyst/react-components-core";
import { jsx as _jsx } from "react/jsx-runtime";
export default function Tab(props) {
  var _useMergeDefaultProps = useMergeDefaultProps("Tab", props),
    index = _useMergeDefaultProps.index,
    className = _useMergeDefaultProps.className,
    style = _useMergeDefaultProps.style,
    children = _useMergeDefaultProps.children;
  var ref = /*#__PURE__*/createRef();
  var _useContext = useContext(TabsContext),
    activeIndex = _useContext.activeIndex,
    onTabChange = _useContext.onTabChange,
    setActiveRef = _useContext.setActiveRef;
  var isActive = activeIndex === index;
  useEffect(function () {
    if (isActive) setActiveRef(ref.current);
  }, [isActive, setActiveRef]);
  var styleProps = {
    active: isActive
  };
  return /*#__PURE__*/_jsx(TabRoot, {
    className: cx(className, "TabsTab", isActive && "Active"),
    style: fsx(style, styleProps),
    onClick: function onClick() {
      return onTabChange(index);
    },
    ref: ref,
    children: children
  });
}