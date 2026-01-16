import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
import { DrawerMenu } from "./Drawer.styles";
import { useControlled } from "@peersyst/react-hooks";
import { Backdrop } from "../Backdrop";
import { Animated } from "../Animated";
import { getAnimationDirection } from "./utils/getAnimationDirection";
import { cx } from "@peersyst/react-utils";
import { useMergeDefaultProps } from "@peersyst/react-components-core";
import { jsx as _jsx } from "react/jsx-runtime";
export default function Drawer(props) {
  var _BackdropProps$transp;
  var _useMergeDefaultProps = useMergeDefaultProps("Drawer", props),
    _useMergeDefaultProps2 = _useMergeDefaultProps.variant,
    variant = _useMergeDefaultProps2 === void 0 ? "temporary" : _useMergeDefaultProps2,
    _useMergeDefaultProps3 = _useMergeDefaultProps.defaultOpen,
    defaultOpen = _useMergeDefaultProps3 === void 0 ? true : _useMergeDefaultProps3,
    propOpen = _useMergeDefaultProps.open,
    onClose = _useMergeDefaultProps.onClose,
    onExited = _useMergeDefaultProps.onExited,
    _useMergeDefaultProps4 = _useMergeDefaultProps.elevation,
    elevation = _useMergeDefaultProps4 === void 0 ? 16 : _useMergeDefaultProps4,
    className = _useMergeDefaultProps.className,
    style = _useMergeDefaultProps.style,
    children = _useMergeDefaultProps.children,
    _useMergeDefaultProps5 = _useMergeDefaultProps.position,
    position = _useMergeDefaultProps5 === void 0 ? "left" : _useMergeDefaultProps5,
    animation = _useMergeDefaultProps.animation,
    _useMergeDefaultProps6 = _useMergeDefaultProps.transitionsDuration,
    transitionsDuration = _useMergeDefaultProps6 === void 0 ? 300 : _useMergeDefaultProps6,
    BackdropProps = _useMergeDefaultProps.BackdropProps,
    _useMergeDefaultProps7 = _useMergeDefaultProps.size,
    size = _useMergeDefaultProps7 === void 0 ? {
      size: "300px"
    } : _useMergeDefaultProps7,
    renderBackdrop = _useMergeDefaultProps.renderBackdrop,
    renderAtRoot = _useMergeDefaultProps.renderAtRoot;
  var _useControlled = useControlled(defaultOpen, variant === "permanent" ? true : propOpen),
    _useControlled2 = _slicedToArray(_useControlled, 2),
    open = _useControlled2[0],
    setOpen = _useControlled2[1];
  var handleClose = function handleClose() {
    setOpen(false);
    onClose == null || onClose();
  };
  var forwardedBackdropProps = {
    defaultOpen: defaultOpen,
    open: open,
    onClose: variant === "temporary" ? handleClose : undefined,
    closable: variant !== "permanent",
    onExited: onExited,
    preventScroll: variant === "temporary",
    childrenAnimation: animation || {
      AnimatedComponent: Animated.Slide,
      props: {
        duration: transitionsDuration,
        direction: getAnimationDirection(position)
      }
    },
    renderBackdrop: renderBackdrop != null ? renderBackdrop : variant === "temporary",
    renderAtRoot: renderAtRoot
  };
  var backdropProps = _objectSpread(_objectSpread({}, BackdropProps), {}, {
    transparent: (_BackdropProps$transp = BackdropProps == null ? void 0 : BackdropProps.transparent) != null ? _BackdropProps$transp : variant !== "temporary"
  });
  return /*#__PURE__*/_jsx(Backdrop, _objectSpread(_objectSpread(_objectSpread({}, backdropProps), forwardedBackdropProps), {}, {
    children: /*#__PURE__*/_jsx(DrawerMenu, {
      position: position,
      size: size,
      className: cx("Drawer", className),
      style: style,
      onMouseDown: function onMouseDown(e) {
        return e.stopPropagation();
      },
      elevation: variant === "temporary" ? elevation : 0,
      square: true,
      children: children
    })
  }));
}