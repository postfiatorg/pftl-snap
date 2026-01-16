import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
var _excluded = ["address", "type", "className", "addressToShareData"];
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
import { Hash } from "../Hash";
import { cx } from "@peersyst/react-utils";
import { useComponentConfig, useMergeDefaultProps } from "@peersyst/react-components-core";
import { jsx as _jsx } from "react/jsx-runtime";
var BlockchainAddress = function BlockchainAddress(props) {
  var _useMergeDefaultProps = useMergeDefaultProps("BlockchainAddress", props),
    address = _useMergeDefaultProps.address,
    type = _useMergeDefaultProps.type,
    className = _useMergeDefaultProps.className,
    addressToShareData = _useMergeDefaultProps.addressToShareData,
    hashProps = _objectWithoutProperties(_useMergeDefaultProps, _excluded);
  var _useComponentConfig = useComponentConfig("BlockchainAddress"),
    blockchainLinks = _useComponentConfig.blockchainLinks;
  var url = blockchainLinks[type] + address;
  return /*#__PURE__*/_jsx(Hash, _objectSpread({
    className: cx("BlockchainAddress", className),
    hashToShareData: addressToShareData,
    hash: address,
    url: url
  }, hashProps));
};
export default BlockchainAddress;