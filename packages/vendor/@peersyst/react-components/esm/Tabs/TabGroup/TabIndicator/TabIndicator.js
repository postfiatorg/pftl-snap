import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import { useContext, useEffect, useState } from "react";
import { TabIndicatorRoot } from "./TabIndicator.styles";
import { TabsContext } from "../../TabsContext";
import { cx } from "@peersyst/react-utils";
import { jsx as _jsx } from "react/jsx-runtime";
export default function TabIndicator(_ref) {
  var tabGroupRef = _ref.tabGroupRef,
    className = _ref.className,
    style = _ref.style;
  var _useState = useState(0),
    _useState2 = _slicedToArray(_useState, 2),
    tabWidth = _useState2[0],
    setTabWidth = _useState2[1];
  var _useState3 = useState(0),
    _useState4 = _slicedToArray(_useState3, 2),
    tabX = _useState4[0],
    setTabX = _useState4[1];
  var _useState5 = useState(0),
    _useState6 = _slicedToArray(_useState5, 2),
    tabGroupX = _useState6[0],
    setTabGroupX = _useState6[1];
  var _useState7 = useState(0),
    _useState8 = _slicedToArray(_useState7, 2),
    scrollX = _useState8[0],
    setScrollX = _useState8[1];
  var _useContext = useContext(TabsContext),
    activeRef = _useContext.activeRef;
  useEffect(function () {
    var _tabGroupRef$current, _tabGroupRef$current2;
    var _ref2 = (activeRef == null ? void 0 : activeRef.getBoundingClientRect()) || {
        width: 0,
        x: 0
      },
      width = _ref2.width,
      x = _ref2.x;
    setTabWidth(width);
    setTabX(x);
    setTabGroupX((tabGroupRef == null || (_tabGroupRef$current = tabGroupRef.current) == null ? void 0 : _tabGroupRef$current.getBoundingClientRect().x) || 0);
    setScrollX((tabGroupRef == null || (_tabGroupRef$current2 = tabGroupRef.current) == null ? void 0 : _tabGroupRef$current2.scrollLeft) || 0);
  }, [activeRef, tabGroupRef]);
  return /*#__PURE__*/_jsx(TabIndicatorRoot, {
    className: cx("TabIndicator", className),
    style: style,
    width: tabWidth,
    position: tabX - tabGroupX + scrollX
  });
}