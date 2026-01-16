"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));
var _Hash = require("../Hash");
var _reactUtils = require("@peersyst/react-utils");
var _reactComponentsCore = require("@peersyst/react-components-core");
var _jsxRuntime = require("react/jsx-runtime");
var _excluded = ["address", "type", "className", "addressToShareData"];
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { (0, _defineProperty2["default"])(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
var BlockchainAddress = function BlockchainAddress(props) {
  var _useMergeDefaultProps = (0, _reactComponentsCore.useMergeDefaultProps)("BlockchainAddress", props),
    address = _useMergeDefaultProps.address,
    type = _useMergeDefaultProps.type,
    className = _useMergeDefaultProps.className,
    addressToShareData = _useMergeDefaultProps.addressToShareData,
    hashProps = (0, _objectWithoutProperties2["default"])(_useMergeDefaultProps, _excluded);
  var _useComponentConfig = (0, _reactComponentsCore.useComponentConfig)("BlockchainAddress"),
    blockchainLinks = _useComponentConfig.blockchainLinks;
  var url = blockchainLinks[type] + address;
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_Hash.Hash, _objectSpread({
    className: (0, _reactUtils.cx)("BlockchainAddress", className),
    hashToShareData: addressToShareData,
    hash: address,
    url: url
  }, hashProps));
};
var _default = exports["default"] = BlockchainAddress;