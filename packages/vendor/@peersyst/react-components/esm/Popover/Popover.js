import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import _toConsumableArray from "@babel/runtime/helpers/esm/toConsumableArray";
import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
var _excluded = ["arrow"],
  _excluded2 = ["style"],
  _excluded3 = ["elevation", "className"];
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
import { cloneElement, useEffect, useMemo, useRef, useState } from "react";
import { PopoverContent, PopoverPaper, PopoverPopper, PopoverRoot, PopoverSnitch, PopperArrow } from "./Popover.styles";
import { findSlot, cx, debounce } from "@peersyst/react-utils";
import { ClickAwayListener } from "../ClickAwayListener";
import { useControlled } from "@peersyst/react-hooks";
import { Animated } from "../Animated";
import { createPopper } from "@popperjs/core";
import { createPortal } from "react-dom";
import { useMergeDefaultProps } from "@peersyst/react-components-core";
import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
var Popover = function Popover(props) {
  var _useMergeDefaultProps = useMergeDefaultProps("Popover", props),
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
      AnimatedComponent: Animated.Fade,
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
  var _useControlled = useControlled(false, visibleProp, visibleProp ? onHide : onShow),
    _useControlled2 = _slicedToArray(_useControlled, 2),
    visible = _useControlled2[0],
    setVisible = _useControlled2[1];
  var _useState = useState(visible),
    _useState2 = _slicedToArray(_useState, 2),
    fullyVisible = _useState2[0],
    setFullyVisible = _useState2[1];
  var popper = findSlot(children, Popper);
  var content = findSlot(children, Content);
  var _useState3 = useState(null),
    _useState4 = _slicedToArray(_useState3, 2),
    popperRef = _useState4[0],
    setPopperRef = _useState4[1];
  var _useState5 = useState(null),
    _useState6 = _slicedToArray(_useState5, 2),
    contentRef = _useState6[0],
    setContentRef = _useState6[1];
  var handlePopperRef = useRef(debounce(setPopperRef, 350)).current;
  var handleContentRef = useRef(debounce(setContentRef, 350)).current;
  var popperInstance = useMemo(function () {
    var finalYOffset = offsetY != null ? offsetY : arrow ? 10 : 0;
    if (popperRef && contentRef) return createPopper(contentRef, popperRef, {
      placement: position,
      modifiers: [{
        name: "offset",
        options: {
          offset: [offsetX, finalYOffset]
        }
      }]
    });
  }, [popperRef, contentRef]);
  useEffect(function () {
    if (popperInstance) {
      if (visible) {
        // Enable the event listeners
        popperInstance.setOptions(function (options) {
          return _objectSpread(_objectSpread({}, options), {}, {
            modifiers: [].concat(_toConsumableArray(options.modifiers || []), [{
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
            modifiers: [].concat(_toConsumableArray(options.modifiers || []), [{
              name: "eventListeners",
              enabled: false
            }])
          });
        });
      }
    }
  }, [visible]);
  useEffect(function () {
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
    popperStyle = _objectWithoutProperties(_ref$style2, _excluded),
    popperProps = _objectWithoutProperties(_ref, _excluded2);
  var popperElement = /*#__PURE__*/_jsx(PopoverPopper, {
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
    children: /*#__PURE__*/_jsx(AnimatedComponent, _objectSpread(_objectSpread({}, AnimatedComponentProps), {}, {
      "in": visible,
      onExited: function onExited() {
        return setFullyVisible(false);
      },
      children: /*#__PURE__*/cloneElement(popper, _objectSpread(_objectSpread({}, popperProps), {}, {
        style: popperStyle,
        children: /*#__PURE__*/_jsxs(_Fragment, {
          children: [popper.props.children, arrow && /*#__PURE__*/_jsx(PopperArrow, {
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
  return /*#__PURE__*/_jsx(ClickAwayListener, {
    onClickAway: function onClickAway() {
      return showOn === "click" && visible && setVisible(false);
    },
    children: /*#__PURE__*/_jsxs(PopoverRoot, {
      className: cx("PopoverRoot", className),
      style: style,
      children: [disablePortal ? popperElement : container && /*#__PURE__*/createPortal(popperElement, container), /*#__PURE__*/_jsxs(PopoverContent, {
        onClick: handleClick,
        onMouseEnter: handleMouseOver,
        onMouseLeave: handleMouseLeave,
        className: "PopoverContent",
        children: [content, /*#__PURE__*/_jsx(PopoverSnitch, {
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
    rest = _objectWithoutProperties(_ref2, _excluded3);
  return /*#__PURE__*/_jsx(PopoverPaper, _objectSpread({
    elevation: elevation,
    className: cx("PopoverPopper", className)
  }, rest));
};
var Content = function Content(_ref3) {
  var children = _ref3.children;
  return /*#__PURE__*/_jsx(_Fragment, {
    children: children
  });
};
Popover.Popper = Popper;
Popover.Content = Content;
export default Popover;