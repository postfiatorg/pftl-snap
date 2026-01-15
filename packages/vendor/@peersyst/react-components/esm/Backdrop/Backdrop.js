import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
import { useCallback } from "react";
import { Animated } from "../Animated";
import { useControlled, usePreventBodyScroll } from "@peersyst/react-hooks";
import { BackdropRoot } from "./Backdrop.styles";
import { cx } from "@peersyst/react-utils";
import { createPortal } from "react-dom";
import { useMergeDefaultProps } from "@peersyst/react-components-core";
import { jsx as _jsx } from "react/jsx-runtime";
var BackdropAnimation = {
  exiting: {
    backgroundColor: "transparent"
  },
  exited: {
    backgroundColor: "transparent"
  }
};
export default function Backdrop(props) {
  var _useMergeDefaultProps = useMergeDefaultProps("Backdrop", props),
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
      AnimatedComponent: Animated.Fade,
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
  var _useControlled = useControlled(defaultOpen, propsOpen),
    _useControlled2 = _slicedToArray(_useControlled, 2),
    open = _useControlled2[0],
    setOpen = _useControlled2[1];
  usePreventBodyScroll(open && preventScroll);
  var handleClose = useCallback(function () {
    if (closable && open) {
      setOpen(false);
      onClose == null || onClose();
    }
  }, [closable, open, setOpen]);
  var backdrop = /*#__PURE__*/_jsx(Animated, {
    animation: animation,
    animatedProperties: "background-color",
    "in": open,
    duration: transitionsDuration,
    onExited: onExited,
    children: /*#__PURE__*/_jsx(BackdropRoot, {
      transparent: transparent,
      renderBackdrop: renderBackdrop,
      onMouseDown: handleClose,
      className: cx("Backdrop", className),
      style: style,
      children: children && /*#__PURE__*/_jsx(AnimatedComponent, _objectSpread(_objectSpread({}, AnimatedComponentProps), {}, {
        "in": open,
        children: children
      }))
    })
  });

  // Check ssr
  if (typeof window !== "undefined" && renderAtRoot) {
    var modalRoot = document.getElementById("modal-root");
    if (modalRoot) return /*#__PURE__*/createPortal(backdrop, modalRoot);
  }
  return backdrop;
}