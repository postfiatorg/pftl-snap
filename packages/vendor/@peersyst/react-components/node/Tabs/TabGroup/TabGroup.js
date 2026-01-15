"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = TabGroup;
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));
var _react = require("react");
var _TabGroup = require("./TabGroup.styles");
var _TabIndicator = require("./TabIndicator");
var _TabGroupArrow = require("./TabGroupArrow");
var _useTabGroupSize2 = require("./hook/useTabGroupSize");
var _reactUtils = require("@peersyst/react-utils");
var _icons = require("../../assets/icons");
var _reactComponentsCore = require("@peersyst/react-components-core");
var _jsxRuntime = require("react/jsx-runtime");
var _excluded = ["update"];
var _ChevronLeftIcon, _ChevronRightIcon;
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { (0, _defineProperty2["default"])(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function TabGroup(props) {
  var _useMergeDefaultProps = (0, _reactComponentsCore.useMergeDefaultProps)("TabGroup", props),
    _useMergeDefaultProps2 = _useMergeDefaultProps.renderIndicator,
    renderIndicator = _useMergeDefaultProps2 === void 0 ? true : _useMergeDefaultProps2,
    indicatorClassName = _useMergeDefaultProps.indicatorClassName,
    indicatorStyle = _useMergeDefaultProps.indicatorStyle,
    _useMergeDefaultProps3 = _useMergeDefaultProps.leftArrowIcon,
    leftArrowIcon = _useMergeDefaultProps3 === void 0 ? _ChevronLeftIcon || (_ChevronLeftIcon = /*#__PURE__*/(0, _jsxRuntime.jsx)(_icons.ChevronLeftIcon, {})) : _useMergeDefaultProps3,
    _useMergeDefaultProps4 = _useMergeDefaultProps.rightArrowIcon,
    rightArrowIcon = _useMergeDefaultProps4 === void 0 ? _ChevronRightIcon || (_ChevronRightIcon = /*#__PURE__*/(0, _jsxRuntime.jsx)(_icons.ChevronRightIcon, {})) : _useMergeDefaultProps4,
    children = _useMergeDefaultProps.children,
    className = _useMergeDefaultProps.className,
    style = _useMergeDefaultProps.style;
  var ref = /*#__PURE__*/(0, _react.createRef)();
  var _useTabGroupSize = (0, _useTabGroupSize2.useTabGroupSize)(ref),
    update = _useTabGroupSize.update,
    sizeInfo = (0, _objectWithoutProperties2["default"])(_useTabGroupSize, _excluded);
  var handleScroll = function handleScroll(direction) {
    var tabGroup = ref.current;
    if (tabGroup) {
      var width = tabGroup.getBoundingClientRect().width;
      var pos = direction === "left" ? tabGroup.scrollLeft - width : tabGroup.scrollLeft + width;
      tabGroup.scrollLeft = pos;
      update(pos);
    }
  };
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_TabGroup.TabGroupRoot, {
    className: (0, _reactUtils.cx)("TabGroup", className),
    style: style,
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_TabGroupArrow.TabGroupArrow, _objectSpread(_objectSpread({
      direction: "left"
    }, sizeInfo), {}, {
      onScroll: handleScroll,
      children: leftArrowIcon
    })), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_TabGroup.TabGroupContainer, {
      ref: ref,
      className: "TabGroupContainer",
      children: [children, renderIndicator && /*#__PURE__*/(0, _jsxRuntime.jsx)(_TabIndicator.TabIndicator, {
        tabGroupRef: ref,
        className: indicatorClassName,
        style: indicatorStyle
      })]
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_TabGroupArrow.TabGroupArrow, _objectSpread(_objectSpread({
      direction: "right"
    }, sizeInfo), {}, {
      onScroll: handleScroll,
      children: rightArrowIcon
    }))]
  });
}