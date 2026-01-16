"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));
var _react = require("react");
var _IconButton = require("../IconButton");
var _useCopyElement = _interopRequireDefault(require("./hook/useCopyElement"));
var _reactComponentsCore = require("@peersyst/react-components-core");
var _reactHooks = require("@peersyst/react-hooks");
var _clsx = _interopRequireDefault(require("clsx"));
var _jsxRuntime = require("react/jsx-runtime");
var _excluded = ["text", "onCopy", "disabled", "className"];
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { (0, _defineProperty2["default"])(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
var CopyButton = /*#__PURE__*/(0, _react.forwardRef)(function (props, ref) {
  var _useMergeDefaultProps = (0, _reactComponentsCore.useMergeDefaultProps)("CopyButton", props),
    text = _useMergeDefaultProps.text,
    onCopy = _useMergeDefaultProps.onCopy,
    disabledProp = _useMergeDefaultProps.disabled,
    className = _useMergeDefaultProps.className,
    rest = (0, _objectWithoutProperties2["default"])(_useMergeDefaultProps, _excluded);

  //Hooks
  var _useCopyToClipboard = (0, _reactHooks.useCopyToClipboard)(),
    isLoading = _useCopyToClipboard.isLoading,
    copyToClipboard = _useCopyToClipboard.copyToClipboard;
  var _useState = (0, _react.useState)(false),
    _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
    copied = _useState2[0],
    setCopied = _useState2[1];
  var _useState3 = (0, _react.useState)(false),
    _useState4 = (0, _slicedToArray2["default"])(_useState3, 2),
    hovered = _useState4[0],
    setHovered = _useState4[1];
  var copyElement = (0, _useCopyElement["default"])(isLoading, copied, hovered);

  //Variables
  var loadingTimeout = (0, _react.useRef)();
  var disabled = isLoading || disabledProp;

  //Handlers
  function handleCopy() {
    return _handleCopy.apply(this, arguments);
  }
  function _handleCopy() {
    _handleCopy = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee() {
      return _regenerator["default"].wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return copyToClipboard(text);
          case 2:
            setHovered(false);
            setCopied(true);
            onCopy == null || onCopy();
            if (loadingTimeout.current) clearTimeout(loadingTimeout.current);
            loadingTimeout.current = setTimeout(function () {
              return setCopied(false);
            }, 4000);
          case 7:
          case "end":
            return _context.stop();
        }
      }, _callee);
    }));
    return _handleCopy.apply(this, arguments);
  }
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_IconButton.IconButton, _objectSpread(_objectSpread({
    onClick: handleCopy,
    disabled: disabled,
    onMouseEnter: function onMouseEnter() {
      return setHovered(true);
    },
    onMouseLeave: function onMouseLeave() {
      return setHovered(false);
    },
    className: (0, _clsx["default"])("CopyButton", className),
    ref: ref
  }, rest), {}, {
    children: copyElement
  }));
});
CopyButton.displayName = "CopyButton";
var _default = exports["default"] = CopyButton;