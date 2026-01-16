"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = Tab;
var _react = require("react");
var _TabsContext = require("../TabsContext");
var _Tab = require("./Tab.styles");
var _reactUtils = require("@peersyst/react-utils");
var _reactComponentsCore = require("@peersyst/react-components-core");
var _jsxRuntime = require("react/jsx-runtime");
function Tab(props) {
  var _useMergeDefaultProps = (0, _reactComponentsCore.useMergeDefaultProps)("Tab", props),
    index = _useMergeDefaultProps.index,
    className = _useMergeDefaultProps.className,
    style = _useMergeDefaultProps.style,
    children = _useMergeDefaultProps.children;
  var ref = /*#__PURE__*/(0, _react.createRef)();
  var _useContext = (0, _react.useContext)(_TabsContext.TabsContext),
    activeIndex = _useContext.activeIndex,
    onTabChange = _useContext.onTabChange,
    setActiveRef = _useContext.setActiveRef;
  var isActive = activeIndex === index;
  (0, _react.useEffect)(function () {
    if (isActive) setActiveRef(ref.current);
  }, [isActive, setActiveRef]);
  var styleProps = {
    active: isActive
  };
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_Tab.TabRoot, {
    className: (0, _reactUtils.cx)(className, "TabsTab", isActive && "Active"),
    style: (0, _reactUtils.fsx)(style, styleProps),
    onClick: function onClick() {
      return onTabChange(index);
    },
    ref: ref,
    children: children
  });
}