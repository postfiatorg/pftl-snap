"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));
var _reactUtils = require("@peersyst/react-utils");
var _react = require("react");
var _useHashAutoLength = _interopRequireDefault(require("./hook/useHashAutoLength"));
var _CopyButton = require("../CopyButton");
var _theme = require("../theme");
var _Hash = require("./Hash.styles");
var _reactComponentsCore = require("@peersyst/react-components-core");
var _HashWrapper = _interopRequireDefault(require("./HashWrapper"));
var _clsx = _interopRequireDefault(require("clsx"));
var _jsxRuntime = require("react/jsx-runtime");
var _excluded = ["hash", "ellipsis", "length", "className", "style", "break", "variant", "url", "gap", "action", "showCopyIcon", "color", "hashToShareData"];
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { (0, _defineProperty2["default"])(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
var Hash = function Hash(props) {
  var _useMergeDefaultProps = (0, _reactComponentsCore.useMergeDefaultProps)("Hash", props),
    hash = _useMergeDefaultProps.hash,
    ellipsis = _useMergeDefaultProps.ellipsis,
    _useMergeDefaultProps2 = _useMergeDefaultProps.length,
    length = _useMergeDefaultProps2 === void 0 ? "auto" : _useMergeDefaultProps2,
    className = _useMergeDefaultProps.className,
    style = _useMergeDefaultProps.style,
    _useMergeDefaultProps3 = _useMergeDefaultProps["break"],
    breakProp = _useMergeDefaultProps3 === void 0 ? false : _useMergeDefaultProps3,
    variant = _useMergeDefaultProps.variant,
    url = _useMergeDefaultProps.url,
    _useMergeDefaultProps4 = _useMergeDefaultProps.gap,
    gap = _useMergeDefaultProps4 === void 0 ? 5 : _useMergeDefaultProps4,
    action = _useMergeDefaultProps.action,
    showCopyIcon = _useMergeDefaultProps.showCopyIcon,
    color = _useMergeDefaultProps.color,
    hashToShareData = _useMergeDefaultProps.hashToShareData,
    typographyProps = (0, _objectWithoutProperties2["default"])(_useMergeDefaultProps, _excluded);
  var _useTheme = (0, _theme.useTheme)(),
    typography = _useTheme.typography;
  var isAutoLength = length === "auto";
  var rowRef = /*#__PURE__*/(0, _react.createRef)();
  var hashRef = /*#__PURE__*/(0, _react.createRef)();
  var copyButtonRef = /*#__PURE__*/(0, _react.createRef)();
  var autoLength = (0, _useHashAutoLength["default"])(isAutoLength, hash, gap, rowRef, hashRef, copyButtonRef);
  var formattedHash = (0, _reactUtils.formatHash)(hash, ellipsis, isAutoLength ? autoLength : typeof length === "number" ? length : hash.length);
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_Hash.HashRoot, {
    autoLength: isAutoLength,
    gap: gap,
    className: (0, _clsx["default"])("Hash", className),
    style: style,
    ref: rowRef,
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_HashWrapper["default"], {
      ref: hashRef,
      url: url,
      action: action,
      hashToShareData: hashToShareData,
      hash: hash,
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Hash.HashText, _objectSpread(_objectSpread({
        variant: variant,
        "break": breakProp,
        color: color
      }, typographyProps), {}, {
        children: formattedHash
      }))
    }), showCopyIcon && /*#__PURE__*/(0, _jsxRuntime.jsx)(_CopyButton.CopyButton, {
      text: hash,
      style: variant !== "inherit" ? typography[variant].style : {
        fontSize: "inherit"
      },
      ref: copyButtonRef,
      color: color
    })]
  });
};
var _default = exports["default"] = Hash;