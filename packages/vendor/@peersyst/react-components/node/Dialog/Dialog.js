"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));
var _reactComponentsCore = require("@peersyst/react-components-core");
var _Dialog = require("./Dialog.styles");
var _reactUtils = require("@peersyst/react-utils");
var _Row = require("../Row");
var _Col = require("../Col");
var _jsxRuntime = require("react/jsx-runtime");
var _react = require("react");
var _excluded = ["component", "className"],
  _excluded2 = ["direction", "justifyContent", "alignItems", "gap"],
  _excluded3 = ["notch", "title", "content", "buttons", "size", "close", "buttonsLayout"],
  _excluded4 = ["text", "type", "action"];
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { (0, _defineProperty2["default"])(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
var DIALOG_BUTTONS_JUSTIFY_MAP = {
  start: "flex-start",
  center: "center",
  end: "flex-end",
  "space-between": "space-between",
  "space-evenly": "space-evenly",
  "space-around": "space-around"
};
var DIALOG_BUTTONS_ALIGN_MAP = {
  start: "flex-start",
  center: "center",
  end: "flex-end",
  stretch: "stretch",
  baseline: "baseline"
};
var Dialog = (0, _reactComponentsCore.createModal)(function (props) {
  var _useComponentConfig = (0, _reactComponentsCore.useComponentConfig)("Dialog"),
    _useComponentConfig$a = _useComponentConfig.actions,
    ActionComponent = _useComponentConfig$a.component,
    actionClassName = _useComponentConfig$a.className,
    actionComponentProps = (0, _objectWithoutProperties2["default"])(_useComponentConfig$a, _excluded);
  var _useMergeDefaultProps = (0, _reactComponentsCore.useMergeDefaultProps)("Dialog", props),
    notch = _useMergeDefaultProps.notch,
    title = _useMergeDefaultProps.title,
    content = _useMergeDefaultProps.content,
    buttons = _useMergeDefaultProps.buttons,
    _useMergeDefaultProps2 = _useMergeDefaultProps.size,
    size = _useMergeDefaultProps2 === void 0 ? "sm" : _useMergeDefaultProps2,
    close = _useMergeDefaultProps.close,
    _useMergeDefaultProps3 = _useMergeDefaultProps.buttonsLayout,
    _useMergeDefaultProps4 = _useMergeDefaultProps3 === void 0 ? {} : _useMergeDefaultProps3,
    _useMergeDefaultProps5 = _useMergeDefaultProps4.direction,
    direction = _useMergeDefaultProps5 === void 0 ? "row" : _useMergeDefaultProps5,
    _useMergeDefaultProps6 = _useMergeDefaultProps4.justifyContent,
    justifyContent = _useMergeDefaultProps6 === void 0 ? "end" : _useMergeDefaultProps6,
    _useMergeDefaultProps7 = _useMergeDefaultProps4.alignItems,
    alignItems = _useMergeDefaultProps7 === void 0 ? "center" : _useMergeDefaultProps7,
    _useMergeDefaultProps8 = _useMergeDefaultProps4.gap,
    gap = _useMergeDefaultProps8 === void 0 ? "0.5rem" : _useMergeDefaultProps8,
    restButtonsLayout = (0, _objectWithoutProperties2["default"])(_useMergeDefaultProps4, _excluded2),
    modalProps = (0, _objectWithoutProperties2["default"])(_useMergeDefaultProps, _excluded3);
  var ButtonsLayoutComponent = direction === "row" ? _Row.Row : _Col.Col;
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_Dialog.DialogRoot, _objectSpread(_objectSpread({
    size: size,
    className: (0, _reactUtils.cx)("Dialog", (0, _reactUtils.capitalize)("sm"))
  }, modalProps), {}, {
    children: [notch, title && /*#__PURE__*/(0, _jsxRuntime.jsx)(_Dialog.DialogTitle, {
      className: "DialogTitle",
      children: title
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Dialog.DialogBody, {
      className: "DialogBody",
      children: content
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Dialog.DialogActions, _objectSpread(_objectSpread({
      as: ButtonsLayoutComponent,
      className: "DialogActions",
      justifyContent: DIALOG_BUTTONS_JUSTIFY_MAP[justifyContent],
      alignItems: DIALOG_BUTTONS_ALIGN_MAP[alignItems],
      gap: gap
    }, restButtonsLayout), {}, {
      children: (buttons == null ? void 0 : buttons.map(function (_ref, key) {
        var text = _ref.text,
          _ref$type = _ref.type,
          type = _ref$type === void 0 ? "default" : _ref$type,
          action = _ref.action,
          buttonProps = (0, _objectWithoutProperties2["default"])(_ref, _excluded4);
        return /*#__PURE__*/(0, _react.createElement)(ActionComponent, _objectSpread(_objectSpread(_objectSpread({}, actionComponentProps), buttonProps), {}, {
          className: (0, _reactUtils.cx)("DialogAction", (0, _reactUtils.capitalize)(type) + "DialogAction", actionClassName),
          onClick: action || close,
          color: _reactComponentsCore.DIALOG_ACTION_COLOR_MAP[type],
          key: key
        }), text);
      })) || /*#__PURE__*/(0, _jsxRuntime.jsx)(ActionComponent, _objectSpread(_objectSpread({}, actionComponentProps), {}, {
        className: (0, _reactUtils.cx)("DialogAction", "DefaultDialogAction", actionClassName),
        onClick: close,
        children: "OK"
      }))
    }))]
  }));
});
var _default = exports["default"] = Dialog;