"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
var _ExpandableContext = require("./ExpandableContext");
var _ExpandableDisplay = require("./ExpandableDisplay");
var _ExpandableBody = require("./ExpandableBody");
var _reactUtils = require("@peersyst/react-utils");
var _Expandable = require("./Expandable.styles");
var _reactHooks = require("@peersyst/react-hooks");
var _reactComponentsCore = require("@peersyst/react-components-core");
var _jsxRuntime = require("react/jsx-runtime");
var Expandable = function Expandable(props) {
  var _useMergeDefaultProps = (0, _reactComponentsCore.useMergeDefaultProps)("Expandable", props),
    openProp = _useMergeDefaultProps.open,
    onOpen = _useMergeDefaultProps.onOpen,
    onClose = _useMergeDefaultProps.onClose,
    className = _useMergeDefaultProps.className,
    style = _useMergeDefaultProps.style,
    children = _useMergeDefaultProps.children;
  var display = (0, _reactUtils.findSlot)(children, _ExpandableDisplay.ExpandableDisplay);
  var body = (0, _reactUtils.findSlot)(children, _ExpandableBody.ExpandableBody);
  var _useControlled = (0, _reactHooks.useControlled)(false, openProp, openProp ? onClose : onOpen),
    _useControlled2 = (0, _slicedToArray2["default"])(_useControlled, 2),
    open = _useControlled2[0],
    setOpen = _useControlled2[1];
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_Expandable.ExpandableRoot, {
    className: (0, _reactUtils.cx)("Expandable", open && "Open", className),
    style: style,
    children: /*#__PURE__*/(0, _jsxRuntime.jsxs)(_ExpandableContext.ExpandableProvider, {
      value: {
        open: open,
        toggle: function toggle() {
          return setOpen(!open);
        }
      },
      children: [display, body]
    })
  });
};
Expandable.Display = _ExpandableDisplay.ExpandableDisplay;
Expandable.Body = _ExpandableBody.ExpandableBody;
Expandable.Header = _ExpandableBody.ExpandableHeader;
Expandable.Content = _ExpandableBody.ExpandableContent;
Expandable.Footer = _ExpandableBody.ExpandableFooter;
var _default = exports["default"] = Expandable;