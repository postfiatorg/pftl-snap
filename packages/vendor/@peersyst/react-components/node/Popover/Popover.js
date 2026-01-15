"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));
var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
var _react = require("react");
var _Popover = require("./Popover.styles");
var _reactUtils = require("@peersyst/react-utils");
var _ClickAwayListener = require("../ClickAwayListener");
var _reactHooks = require("@peersyst/react-hooks");
var _Animated = require("../Animated");
var _core = require("@popperjs/core");
var _reactDom = require("react-dom");
var _reactComponentsCore = require("@peersyst/react-components-core");
var _jsxRuntime = require("react/jsx-runtime");
var _excluded = ["arrow"],
  _excluded2 = ["style"],
  _excluded3 = ["elevation", "className"];
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { (0, _defineProperty2["default"])(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
var Popover = function Popover(props) {
  var _useMergeDefaultProps = (0, _reactComponentsCore.useMergeDefaultProps)("Popover", props),
    visibleProp = _useMergeDefaultProps.visible,
    onHide = _useMergeDefaultProps.onHide,
    onShow = _useMergeDefaultProps.onShow,
    _useMergeDefaultProps2 = _useMergeDefaultProps.showOn,
    showOn = _useMergeDefaultProps2 === void 0 ? "hover" : _useMergeDefaultProps2,
    _useMergeDefaultProps3 = _useMergeDefaultProps.position,
    position = _useMergeDefaultProps3 === void 0 ? "bottom" : _useMergeDefaultProps3,
    arrow = _useMergeDefaultProps.arrow,
    _useMergeDefaultProps4 = _useMergeDefaultProps.offsetX,
    offsetX = _useMergeDefaultProps4 === void 0 ? 0 : _useMergeDefaultProps4,
    offsetY = _useMergeDefaultProps.offsetY,
    _useMergeDefaultProps5 = _useMergeDefaultProps.animation,
    _useMergeDefaultProps6 = _useMergeDefaultProps5 === void 0 ? {
      AnimatedComponent: _Animated.Animated.Fade,
      props: {
        duration: 200
      }
    } : _useMergeDefaultProps5,
    AnimatedComponent = _useMergeDefaultProps6.AnimatedComponent,
    AnimatedComponentProps = _useMergeDefaultProps6.props,
    containerProp = _useMergeDefaultProps.container,
    _useMergeDefaultProps7 = _useMergeDefaultProps.disablePortal,
    disablePortal = _useMergeDefaultProps7 === void 0 ? false : _useMergeDefaultProps7,
    className = _useMergeDefaultProps.className,
    style = _useMergeDefaultProps.style,
    children = _useMergeDefaultProps.children;
  var _useControlled = (0, _reactHooks.useControlled)(false, visibleProp, visibleProp ? onHide : onShow),
    _useControlled2 = (0, _slicedToArray2["default"])(_useControlled, 2),
    visible = _useControlled2[0],
    setVisible = _useControlled2[1];
  var _useState = (0, _react.useState)(visible),
    _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
    fullyVisible = _useState2[0],
    setFullyVisible = _useState2[1];
  var popper = (0, _reactUtils.findSlot)(children, Popper);
  var content = (0, _reactUtils.findSlot)(children, Content);
  var _useState3 = (0, _react.useState)(null),
    _useState4 = (0, _slicedToArray2["default"])(_useState3, 2),
    popperRef = _useState4[0],
    setPopperRef = _useState4[1];
  var _useState5 = (0, _react.useState)(null),
    _useState6 = (0, _slicedToArray2["default"])(_useState5, 2),
    contentRef = _useState6[0],
    setContentRef = _useState6[1];
  var handlePopperRef = (0, _react.useRef)((0, _reactUtils.debounce)(setPopperRef, 350)).current;
  var handleContentRef = (0, _react.useRef)((0, _reactUtils.debounce)(setContentRef, 350)).current;
  var popperInstance = (0, _react.useMemo)(function () {
    var finalYOffset = offsetY != null ? offsetY : arrow ? 10 : 0;
    if (popperRef && contentRef) return (0, _core.createPopper)(contentRef, popperRef, {
      placement: position,
      modifiers: [{
        name: "offset",
        options: {
          offset: [offsetX, finalYOffset]
        }
      }]
    });
  }, [popperRef, contentRef]);
  (0, _react.useEffect)(function () {
    if (popperInstance) {
      if (visible) {
        // Enable the event listeners
        popperInstance.setOptions(function (options) {
          return _objectSpread(_objectSpread({}, options), {}, {
            modifiers: [].concat((0, _toConsumableArray2["default"])(options.modifiers || []), [{
              name: "eventListeners",
              enabled: true
            }])
          });
        });
        // Update position
        popperInstance.update();
      } else {
        // Disable the event listeners
        popperInstance.setOptions(function (options) {
          return _objectSpread(_objectSpread({}, options), {}, {
            modifiers: [].concat((0, _toConsumableArray2["default"])(options.modifiers || []), [{
              name: "eventListeners",
              enabled: false
            }])
          });
        });
      }
    }
  }, [visible]);
  (0, _react.useEffect)(function () {
    if (visibleProp) setFullyVisible(true);
  }, [visibleProp]);
  var handleClick = function handleClick() {
    if (showOn === "click") {
      setVisible(!visible);
      setFullyVisible(!visible);
    }
  };
  var handleMouseOver = function handleMouseOver() {
    if (showOn === "hover") {
      setVisible(true);
      setFullyVisible(true);
    }
  };
  var handleMouseLeave = function handleMouseLeave() {
    if (showOn === "hover") {
      setVisible(false);
    }
  };
  var _ref = popper.props,
    _ref$style = _ref.style,
    _ref$style2 = _ref$style === void 0 ? {} : _ref$style,
    arrowStyle = _ref$style2.arrow,
    popperStyle = (0, _objectWithoutProperties2["default"])(_ref$style2, _excluded),
    popperProps = (0, _objectWithoutProperties2["default"])(_ref, _excluded2);
  var popperElement = /*#__PURE__*/(0, _jsxRuntime.jsx)(_Popover.PopoverPopper, {
    style: {
      display: !fullyVisible ? "none" : undefined
    },
    ref: handlePopperRef,
    onMouseEnter: function onMouseEnter() {
      return visible && handleMouseOver();
    },
    onMouseLeave: function onMouseLeave() {
      return visible && handleMouseLeave();
    },
    children: /*#__PURE__*/(0, _jsxRuntime.jsx)(AnimatedComponent, _objectSpread(_objectSpread({}, AnimatedComponentProps), {}, {
      "in": visible,
      onExited: function onExited() {
        return setFullyVisible(false);
      },
      children: /*#__PURE__*/(0, _react.cloneElement)(popper, _objectSpread(_objectSpread({}, popperProps), {}, {
        style: popperStyle,
        children: /*#__PURE__*/(0, _jsxRuntime.jsxs)(_jsxRuntime.Fragment, {
          children: [popper.props.children, arrow && /*#__PURE__*/(0, _jsxRuntime.jsx)(_Popover.PopperArrow, {
            className: "PopperArrow",
            style: arrowStyle,
            elevation: popper.props.elevation,
            "data-popper-arrow": true
          })]
        })
      }))
    }))
  });

  // Check ssr
  var container = containerProp || (typeof window !== "undefined" ? document.body : undefined);
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_ClickAwayListener.ClickAwayListener, {
    onClickAway: function onClickAway() {
      return showOn === "click" && visible && setVisible(false);
    },
    children: /*#__PURE__*/(0, _jsxRuntime.jsxs)(_Popover.PopoverRoot, {
      className: (0, _reactUtils.cx)("PopoverRoot", className),
      style: style,
      children: [disablePortal ? popperElement : container && /*#__PURE__*/(0, _reactDom.createPortal)(popperElement, container), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_Popover.PopoverContent, {
        onClick: handleClick,
        onMouseEnter: handleMouseOver,
        onMouseLeave: handleMouseLeave,
        className: "PopoverContent",
        children: [content, /*#__PURE__*/(0, _jsxRuntime.jsx)(_Popover.PopoverSnitch, {
          ref: handleContentRef
        })]
      })]
    })
  });
};
var Popper = function Popper(_ref2) {
  var _ref2$elevation = _ref2.elevation,
    elevation = _ref2$elevation === void 0 ? 8 : _ref2$elevation,
    className = _ref2.className,
    rest = (0, _objectWithoutProperties2["default"])(_ref2, _excluded3);
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_Popover.PopoverPaper, _objectSpread({
    elevation: elevation,
    className: (0, _reactUtils.cx)("PopoverPopper", className)
  }, rest));
};
var Content = function Content(_ref3) {
  var children = _ref3.children;
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_jsxRuntime.Fragment, {
    children: children
  });
};
Popover.Popper = Popper;
Popover.Content = Content;
var _default = exports["default"] = Popover;