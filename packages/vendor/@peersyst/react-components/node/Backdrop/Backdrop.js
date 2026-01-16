"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = Backdrop;
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
var _react = require("react");
var _Animated = require("../Animated");
var _reactHooks = require("@peersyst/react-hooks");
var _Backdrop = require("./Backdrop.styles");
var _reactUtils = require("@peersyst/react-utils");
var _reactDom = require("react-dom");
var _reactComponentsCore = require("@peersyst/react-components-core");
var _jsxRuntime = require("react/jsx-runtime");
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { (0, _defineProperty2["default"])(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
var BackdropAnimation = {
  exiting: {
    backgroundColor: "transparent"
  },
  exited: {
    backgroundColor: "transparent"
  }
};
function Backdrop(props) {
  var _useMergeDefaultProps = (0, _reactComponentsCore.useMergeDefaultProps)("Backdrop", props),
    _useMergeDefaultProps2 = _useMergeDefaultProps.preventScroll,
    preventScroll = _useMergeDefaultProps2 === void 0 ? true : _useMergeDefaultProps2,
    _useMergeDefaultProps3 = _useMergeDefaultProps.closable,
    closable = _useMergeDefaultProps3 === void 0 ? true : _useMergeDefaultProps3,
    _useMergeDefaultProps4 = _useMergeDefaultProps.defaultOpen,
    defaultOpen = _useMergeDefaultProps4 === void 0 ? true : _useMergeDefaultProps4,
    propsOpen = _useMergeDefaultProps.open,
    onClose = _useMergeDefaultProps.onClose,
    onExited = _useMergeDefaultProps.onExited,
    _useMergeDefaultProps5 = _useMergeDefaultProps.animation,
    animation = _useMergeDefaultProps5 === void 0 ? BackdropAnimation : _useMergeDefaultProps5,
    _useMergeDefaultProps6 = _useMergeDefaultProps.childrenAnimation,
    _useMergeDefaultProps7 = _useMergeDefaultProps6 === void 0 ? {
      AnimatedComponent: _Animated.Animated.Fade,
      props: {
        duration: 300
      }
    } : _useMergeDefaultProps6,
    AnimatedComponent = _useMergeDefaultProps7.AnimatedComponent,
    AnimatedComponentProps = _useMergeDefaultProps7.props,
    _useMergeDefaultProps8 = _useMergeDefaultProps.transparent,
    transparent = _useMergeDefaultProps8 === void 0 ? false : _useMergeDefaultProps8,
    _useMergeDefaultProps9 = _useMergeDefaultProps.transitionsDuration,
    transitionsDuration = _useMergeDefaultProps9 === void 0 ? 400 : _useMergeDefaultProps9,
    className = _useMergeDefaultProps.className,
    style = _useMergeDefaultProps.style,
    _useMergeDefaultProps10 = _useMergeDefaultProps.renderBackdrop,
    renderBackdrop = _useMergeDefaultProps10 === void 0 ? true : _useMergeDefaultProps10,
    _useMergeDefaultProps11 = _useMergeDefaultProps.renderAtRoot,
    renderAtRoot = _useMergeDefaultProps11 === void 0 ? false : _useMergeDefaultProps11,
    children = _useMergeDefaultProps.children;
  var _useControlled = (0, _reactHooks.useControlled)(defaultOpen, propsOpen),
    _useControlled2 = (0, _slicedToArray2["default"])(_useControlled, 2),
    open = _useControlled2[0],
    setOpen = _useControlled2[1];
  (0, _reactHooks.usePreventBodyScroll)(open && preventScroll);
  var handleClose = (0, _react.useCallback)(function () {
    if (closable && open) {
      setOpen(false);
      onClose == null || onClose();
    }
  }, [closable, open, setOpen]);
  var backdrop = /*#__PURE__*/(0, _jsxRuntime.jsx)(_Animated.Animated, {
    animation: animation,
    animatedProperties: "background-color",
    "in": open,
    duration: transitionsDuration,
    onExited: onExited,
    children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Backdrop.BackdropRoot, {
      transparent: transparent,
      renderBackdrop: renderBackdrop,
      onMouseDown: handleClose,
      className: (0, _reactUtils.cx)("Backdrop", className),
      style: style,
      children: children && /*#__PURE__*/(0, _jsxRuntime.jsx)(AnimatedComponent, _objectSpread(_objectSpread({}, AnimatedComponentProps), {}, {
        "in": open,
        children: children
      }))
    })
  });

  // Check ssr
  if (typeof window !== "undefined" && renderAtRoot) {
    var modalRoot = document.getElementById("modal-root");
    if (modalRoot) return /*#__PURE__*/(0, _reactDom.createPortal)(backdrop, modalRoot);
  }
  return backdrop;
}