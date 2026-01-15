import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
import { ToastAlert, ToastContainer } from "./Toast.styles";
import { getAnimation } from "./utils/getAnimation";
import { useMergeDefaultProps, Toast as CoreToast } from "@peersyst/react-components-core";
import { jsx as _jsx } from "react/jsx-runtime";
export default function Toast(props) {
  var _ToastAlert;
  var _useMergeDefaultProps = useMergeDefaultProps("Toast", props),
    content = _useMergeDefaultProps.content,
    icon = _useMergeDefaultProps.icon,
    type = _useMergeDefaultProps.type,
    action = _useMergeDefaultProps.action,
    _useMergeDefaultProps2 = _useMergeDefaultProps.position,
    position = _useMergeDefaultProps2 === void 0 ? "top-right" : _useMergeDefaultProps2,
    openProp = _useMergeDefaultProps.open,
    onClose = _useMergeDefaultProps.onClose,
    onExited = _useMergeDefaultProps.onExited,
    _useMergeDefaultProps3 = _useMergeDefaultProps.animation,
    animation = _useMergeDefaultProps3 === void 0 ? "fadingSlide" : _useMergeDefaultProps3,
    _useMergeDefaultProps4 = _useMergeDefaultProps.duration,
    duration = _useMergeDefaultProps4 === void 0 ? 4000 : _useMergeDefaultProps4,
    className = _useMergeDefaultProps.className,
    style = _useMergeDefaultProps.style,
    elevation = _useMergeDefaultProps.elevation,
    square = _useMergeDefaultProps.square;
  var _getAnimation = getAnimation(animation, position),
    AnimatedComponent = _getAnimation.AnimatedComponent,
    AnimatedComponentProps = _getAnimation.props;
  return /*#__PURE__*/_jsx(CoreToast, {
    open: openProp,
    onClose: onClose,
    type: type,
    duration: duration,
    children: function children(open) {
      return /*#__PURE__*/_jsx(ToastContainer, {
        position: position,
        className: "ToastContainer",
        children: /*#__PURE__*/_jsx(AnimatedComponent, _objectSpread(_objectSpread({
          "in": open,
          duration: 200,
          onExited: onExited
        }, AnimatedComponentProps), {}, {
          children: _ToastAlert || (_ToastAlert = /*#__PURE__*/_jsx(ToastAlert, {
            type: type,
            content: content,
            icon: icon,
            action: action,
            className: className,
            style: style,
            elevation: elevation,
            square: square
          }))
        }))
      });
    }
  });
}