"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = Modal;
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
var _react = require("react");
var _reactHooks = require("@peersyst/react-hooks");
var _Backdrop = require("../Backdrop");
var _Modal = require("./Modal.styles");
var _getAnimatedComponent2 = require("./utils/getAnimatedComponent");
var _reactUtils = require("@peersyst/react-utils");
var _reactComponentsCore = require("@peersyst/react-components-core");
var _jsxRuntime = require("react/jsx-runtime");
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { (0, _defineProperty2["default"])(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function Modal(props) {
  var _useMergeDefaultProps = (0, _reactComponentsCore.useMergeDefaultProps)("Modal", props),
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
  var _useControlled = (0, _reactHooks.useControlled)(defaultOpen, propOpen),
    _useControlled2 = (0, _slicedToArray2["default"])(_useControlled, 2),
    open = _useControlled2[0],
    setOpen = _useControlled2[1];
  var handleClose = (0, _react.useCallback)(function () {
    if (closable && open) {
      setOpen(false);
      onClose == null || onClose();
    }
  }, [closable, open, setOpen]);
  var _getAnimatedComponent = (0, _getAnimatedComponent2.getAnimatedComponent)(animation),
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
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_Backdrop.Backdrop, _objectSpread(_objectSpread(_objectSpread({}, BackdropProps), forwardedBackdropProps), {}, {
    children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Modal.ModalRoot, {
      className: (0, _reactUtils.cx)("Modal", className),
      style: style,
      onMouseDown: function onMouseDown(e) {
        return e.stopPropagation();
      },
      elevation: elevation,
      children: children
    })
  }));
}