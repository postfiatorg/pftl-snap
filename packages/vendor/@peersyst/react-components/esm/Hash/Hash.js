import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
var _excluded = ["hash", "ellipsis", "length", "className", "style", "break", "variant", "url", "gap", "action", "showCopyIcon", "color", "hashToShareData"];
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
import { formatHash } from "@peersyst/react-utils";
import { createRef } from "react";
import useHashAutoLength from "./hook/useHashAutoLength";
import { CopyButton } from "../CopyButton";
import { useTheme } from "../theme";
import { HashRoot, HashText } from "./Hash.styles";
import { useMergeDefaultProps } from "@peersyst/react-components-core";
import HashWrapper from "./HashWrapper";
import clsx from "clsx";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
var Hash = function Hash(props) {
  var _useMergeDefaultProps = useMergeDefaultProps("Hash", props),
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
    typographyProps = _objectWithoutProperties(_useMergeDefaultProps, _excluded);
  var _useTheme = useTheme(),
    typography = _useTheme.typography;
  var isAutoLength = length === "auto";
  var rowRef = /*#__PURE__*/createRef();
  var hashRef = /*#__PURE__*/createRef();
  var copyButtonRef = /*#__PURE__*/createRef();
  var autoLength = useHashAutoLength(isAutoLength, hash, gap, rowRef, hashRef, copyButtonRef);
  var formattedHash = formatHash(hash, ellipsis, isAutoLength ? autoLength : typeof length === "number" ? length : hash.length);
  return /*#__PURE__*/_jsxs(HashRoot, {
    autoLength: isAutoLength,
    gap: gap,
    className: clsx("Hash", className),
    style: style,
    ref: rowRef,
    children: [/*#__PURE__*/_jsx(HashWrapper, {
      ref: hashRef,
      url: url,
      action: action,
      hashToShareData: hashToShareData,
      hash: hash,
      children: /*#__PURE__*/_jsx(HashText, _objectSpread(_objectSpread({
        variant: variant,
        "break": breakProp,
        color: color
      }, typographyProps), {}, {
        children: formattedHash
      }))
    }), showCopyIcon && /*#__PURE__*/_jsx(CopyButton, {
      text: hash,
      style: variant !== "inherit" ? typography[variant].style : {
        fontSize: "inherit"
      },
      ref: copyButtonRef,
      color: color
    })]
  });
};
export default Hash;