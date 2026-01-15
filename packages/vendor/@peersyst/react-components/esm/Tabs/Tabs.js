import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import { useState } from "react";
import { Col } from "../Col";
import { TabsProvider } from "./TabsContext";
import { cx } from "@peersyst/react-utils";
import { useControlled } from "@peersyst/react-hooks";
import { useMergeDefaultProps } from "@peersyst/react-components-core";
import { jsx as _jsx } from "react/jsx-runtime";
export default function Tabs(props) {
  var _useMergeDefaultProps = useMergeDefaultProps("Tabs", props),
    index = _useMergeDefaultProps.index,
    onIndexChange = _useMergeDefaultProps.onIndexChange,
    _useMergeDefaultProps2 = _useMergeDefaultProps.initialIndex,
    initialIndex = _useMergeDefaultProps2 === void 0 ? 0 : _useMergeDefaultProps2,
    className = _useMergeDefaultProps.className,
    style = _useMergeDefaultProps.style,
    children = _useMergeDefaultProps.children;
  var _useControlled = useControlled(initialIndex, index, onIndexChange),
    _useControlled2 = _slicedToArray(_useControlled, 2),
    activeIndex = _useControlled2[0],
    setActiveIndex = _useControlled2[1];
  var _useState = useState(null),
    _useState2 = _slicedToArray(_useState, 2),
    activeRef = _useState2[0],
    setActiveRef = _useState2[1];
  return /*#__PURE__*/_jsx(Col, {
    className: cx("Tabs", className),
    style: style,
    gap: 20,
    children: /*#__PURE__*/_jsx(TabsProvider, {
      value: {
        activeIndex: activeIndex,
        onTabChange: setActiveIndex,
        activeRef: activeRef,
        setActiveRef: setActiveRef
      },
      children: children
    })
  });
}