import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import _asyncToGenerator from "@babel/runtime/helpers/esm/asyncToGenerator";
import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
var _excluded = ["text", "onCopy", "disabled", "className"];
import _regeneratorRuntime from "@babel/runtime/regenerator";
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
import { forwardRef, useRef, useState } from "react";
import { IconButton } from "../IconButton";
import useCopyElement from "./hook/useCopyElement";
import { useMergeDefaultProps } from "@peersyst/react-components-core";
import { useCopyToClipboard } from "@peersyst/react-hooks";
import clsx from "clsx";
import { jsx as _jsx } from "react/jsx-runtime";
var CopyButton = /*#__PURE__*/forwardRef(function (props, ref) {
  var _useMergeDefaultProps = useMergeDefaultProps("CopyButton", props),
    text = _useMergeDefaultProps.text,
    onCopy = _useMergeDefaultProps.onCopy,
    disabledProp = _useMergeDefaultProps.disabled,
    className = _useMergeDefaultProps.className,
    rest = _objectWithoutProperties(_useMergeDefaultProps, _excluded);

  //Hooks
  var _useCopyToClipboard = useCopyToClipboard(),
    isLoading = _useCopyToClipboard.isLoading,
    copyToClipboard = _useCopyToClipboard.copyToClipboard;
  var _useState = useState(false),
    _useState2 = _slicedToArray(_useState, 2),
    copied = _useState2[0],
    setCopied = _useState2[1];
  var _useState3 = useState(false),
    _useState4 = _slicedToArray(_useState3, 2),
    hovered = _useState4[0],
    setHovered = _useState4[1];
  var copyElement = useCopyElement(isLoading, copied, hovered);

  //Variables
  var loadingTimeout = useRef();
  var disabled = isLoading || disabledProp;

  //Handlers
  function handleCopy() {
    return _handleCopy.apply(this, arguments);
  }
  function _handleCopy() {
    _handleCopy = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee() {
      return _regeneratorRuntime.wrap(function _callee$(_context) {
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
  return /*#__PURE__*/_jsx(IconButton, _objectSpread(_objectSpread({
    onClick: handleCopy,
    disabled: disabled,
    onMouseEnter: function onMouseEnter() {
      return setHovered(true);
    },
    onMouseLeave: function onMouseLeave() {
      return setHovered(false);
    },
    className: clsx("CopyButton", className),
    ref: ref
  }, rest), {}, {
    children: copyElement
  }));
});
CopyButton.displayName = "CopyButton";
export default CopyButton;