import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
var _excluded = ["update"];
var _ChevronLeftIcon, _ChevronRightIcon;
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
import { createRef } from "react";
import { TabGroupContainer, TabGroupRoot } from "./TabGroup.styles";
import { TabIndicator } from "./TabIndicator";
import { TabGroupArrow } from "./TabGroupArrow";
import { useTabGroupSize } from "./hook/useTabGroupSize";
import { cx } from "@peersyst/react-utils";
import { ChevronLeftIcon, ChevronRightIcon } from "../../assets/icons";
import { useMergeDefaultProps } from "@peersyst/react-components-core";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
export default function TabGroup(props) {
  var _useMergeDefaultProps = useMergeDefaultProps("TabGroup", props),
    _useMergeDefaultProps2 = _useMergeDefaultProps.renderIndicator,
    renderIndicator = _useMergeDefaultProps2 === void 0 ? true : _useMergeDefaultProps2,
    indicatorClassName = _useMergeDefaultProps.indicatorClassName,
    indicatorStyle = _useMergeDefaultProps.indicatorStyle,
    _useMergeDefaultProps3 = _useMergeDefaultProps.leftArrowIcon,
    leftArrowIcon = _useMergeDefaultProps3 === void 0 ? _ChevronLeftIcon || (_ChevronLeftIcon = /*#__PURE__*/_jsx(ChevronLeftIcon, {})) : _useMergeDefaultProps3,
    _useMergeDefaultProps4 = _useMergeDefaultProps.rightArrowIcon,
    rightArrowIcon = _useMergeDefaultProps4 === void 0 ? _ChevronRightIcon || (_ChevronRightIcon = /*#__PURE__*/_jsx(ChevronRightIcon, {})) : _useMergeDefaultProps4,
    children = _useMergeDefaultProps.children,
    className = _useMergeDefaultProps.className,
    style = _useMergeDefaultProps.style;
  var ref = /*#__PURE__*/createRef();
  var _useTabGroupSize = useTabGroupSize(ref),
    update = _useTabGroupSize.update,
    sizeInfo = _objectWithoutProperties(_useTabGroupSize, _excluded);
  var handleScroll = function handleScroll(direction) {
    var tabGroup = ref.current;
    if (tabGroup) {
      var width = tabGroup.getBoundingClientRect().width;
      var pos = direction === "left" ? tabGroup.scrollLeft - width : tabGroup.scrollLeft + width;
      tabGroup.scrollLeft = pos;
      update(pos);
    }
  };
  return /*#__PURE__*/_jsxs(TabGroupRoot, {
    className: cx("TabGroup", className),
    style: style,
    children: [/*#__PURE__*/_jsx(TabGroupArrow, _objectSpread(_objectSpread({
      direction: "left"
    }, sizeInfo), {}, {
      onScroll: handleScroll,
      children: leftArrowIcon
    })), /*#__PURE__*/_jsxs(TabGroupContainer, {
      ref: ref,
      className: "TabGroupContainer",
      children: [children, renderIndicator && /*#__PURE__*/_jsx(TabIndicator, {
        tabGroupRef: ref,
        className: indicatorClassName,
        style: indicatorStyle
      })]
    }), /*#__PURE__*/_jsx(TabGroupArrow, _objectSpread(_objectSpread({
      direction: "right"
    }, sizeInfo), {}, {
      onScroll: handleScroll,
      children: rightArrowIcon
    }))]
  });
}