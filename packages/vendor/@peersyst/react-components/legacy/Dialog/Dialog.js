import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
var _excluded = ["component", "className"],
  _excluded2 = ["direction", "justifyContent", "alignItems", "gap"],
  _excluded3 = ["notch", "title", "content", "buttons", "size", "close", "buttonsLayout"],
  _excluded4 = ["text", "type", "action"];
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
import { createModal, DIALOG_ACTION_COLOR_MAP, useComponentConfig, useMergeDefaultProps } from "@peersyst/react-components-core";
import { DialogActions, DialogBody, DialogRoot, DialogTitle } from "./Dialog.styles";
import { capitalize, cx } from "@peersyst/react-utils";
import { Row } from "../Row";
import { Col } from "../Col";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { createElement as _createElement } from "react";
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
var Dialog = createModal(function (props) {
  var _useComponentConfig = useComponentConfig("Dialog"),
    _useComponentConfig$a = _useComponentConfig.actions,
    ActionComponent = _useComponentConfig$a.component,
    actionClassName = _useComponentConfig$a.className,
    actionComponentProps = _objectWithoutProperties(_useComponentConfig$a, _excluded);
  var _useMergeDefaultProps = useMergeDefaultProps("Dialog", props),
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
    restButtonsLayout = _objectWithoutProperties(_useMergeDefaultProps4, _excluded2),
    modalProps = _objectWithoutProperties(_useMergeDefaultProps, _excluded3);
  var ButtonsLayoutComponent = direction === "row" ? Row : Col;
  return /*#__PURE__*/_jsxs(DialogRoot, _objectSpread(_objectSpread({
    size: size,
    className: cx("Dialog", capitalize("sm"))
  }, modalProps), {}, {
    children: [notch, title && /*#__PURE__*/_jsx(DialogTitle, {
      className: "DialogTitle",
      children: title
    }), /*#__PURE__*/_jsx(DialogBody, {
      className: "DialogBody",
      children: content
    }), /*#__PURE__*/_jsx(DialogActions, _objectSpread(_objectSpread({
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
          buttonProps = _objectWithoutProperties(_ref, _excluded4);
        return /*#__PURE__*/_createElement(ActionComponent, _objectSpread(_objectSpread(_objectSpread({}, actionComponentProps), buttonProps), {}, {
          className: cx("DialogAction", capitalize(type) + "DialogAction", actionClassName),
          onClick: action || close,
          color: DIALOG_ACTION_COLOR_MAP[type],
          key: key
        }), text);
      })) || /*#__PURE__*/_jsx(ActionComponent, _objectSpread(_objectSpread({}, actionComponentProps), {}, {
        className: cx("DialogAction", "DefaultDialogAction", actionClassName),
        onClick: close,
        children: "OK"
      }))
    }))]
  }));
});
export default Dialog;