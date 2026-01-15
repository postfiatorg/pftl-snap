import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
import { useCallback } from "react";
import { useControlled } from "@peersyst/react-hooks";
import { Backdrop } from "../Backdrop";
import { ModalRoot } from "./Modal.styles";
import { getAnimatedComponent } from "./utils/getAnimatedComponent";
import { cx } from "@peersyst/react-utils";
import { useMergeDefaultProps } from "@peersyst/react-components-core";
import { jsx as _jsx } from "react/jsx-runtime";
export default function Modal(props) {
  var _useMergeDefaultProps = useMergeDefaultProps("Modal", props),
    _useMergeDefaultProps2 = _useMergeDefaultProps.closable,
    closable = _useMergeDefaultProps2 === void 0 ? true : _useMergeDefaultProps2,
    _useMergeDefaultProps3 = _useMergeDefaultProps.defaultOpen,
    defaultOpen = _useMergeDefaultProps3 === void 0 ? true : _useMergeDefaultProps3,
    propOpen = _useMergeDefaultProps.open,
    children = _useMergeDefaultProps.children,
    onClose = _useMergeDefaultProps.onClose,
    onExited = _useMergeDefaultProps.onExited,
    _useMergeDefaultProps4 = _useMergeDefaultProps.transitionsDuration,
    transitionsDuration = _useMergeDefaultProps4 === void 0 ? 300 : _useMergeDefaultProps4,
    _useMergeDefaultProps5 = _useMergeDefaultProps.animation,
    animation = _useMergeDefaultProps5 === void 0 ? "fade" : _useMergeDefaultProps5,
    _useMergeDefaultProps6 = _useMergeDefaultProps.elevation,
    elevation = _useMergeDefaultProps6 === void 0 ? 16 : _useMergeDefaultProps6,
    BackdropProps = _useMergeDefaultProps.BackdropProps,
    className = _useMergeDefaultProps.className,
    style = _useMergeDefaultProps.style,
    renderBackdrop = _useMergeDefaultProps.renderBackdrop,
    renderAtRoot = _useMergeDefaultProps.renderAtRoot,
    _useMergeDefaultProps7 = _useMergeDefaultProps.preventScroll,
    preventScroll = _useMergeDefaultProps7 === void 0 ? true : _useMergeDefaultProps7;
  var _useControlled = useControlled(defaultOpen, propOpen),
    _useControlled2 = _slicedToArray(_useControlled, 2),
    open = _useControlled2[0],
    setOpen = _useControlled2[1];
  var handleClose = useCallback(function () {
    if (closable && open) {
      setOpen(false);
      onClose == null || onClose();
    }
  }, [closable, open, setOpen]);
  var _getAnimatedComponent = getAnimatedComponent(animation),
    AnimatedComponent = _getAnimatedComponent.AnimatedComponent,
    AnimatedComponentProps = _getAnimatedComponent.props;
  var forwardedBackdropProps = {
    defaultOpen: defaultOpen,
    open: open,
    onClose: handleClose,
    onExited: onExited,
    closable: closable,
    preventScroll: preventScroll,
    childrenAnimation: {
      AnimatedComponent: AnimatedComponent,
      props: _objectSpread(_objectSpread({}, AnimatedComponentProps), {}, {
        duration: transitionsDuration
      })
    },
    renderAtRoot: renderAtRoot,
    renderBackdrop: renderBackdrop
  };
  return /*#__PURE__*/_jsx(Backdrop, _objectSpread(_objectSpread(_objectSpread({}, BackdropProps), forwardedBackdropProps), {}, {
    children: /*#__PURE__*/_jsx(ModalRoot, {
      className: cx("Modal", className),
      style: style,
      onMouseDown: function onMouseDown(e) {
        return e.stopPropagation();
      },
      elevation: elevation,
      children: children
    })
  }));
}