"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = useSlotProps;
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));
var _mergeSlotProps2 = _interopRequireDefault(require("../utils/mergeSlotProps"));
var _resolveComponentProps = _interopRequireDefault(require("../utils/resolveComponentProps"));
var _appendOwnerState = _interopRequireDefault(require("../utils/appendOwnerState"));
var _reactHooks = require("@peersyst/react-hooks");
var _excluded = ["elementType", "externalSlotProps", "ownerState"]; // From @mui/mui-base
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { (0, _defineProperty2["default"])(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
/**
 * Builds the props to be passed into the slot of an unstyled component.
 * It merges the internal props of the component with the ones supplied by the user, allowing to customize the behavior.
 * If the slot component is not a host component, it also merges in the `ownerState`.
 *
 * @param parameters.getSlotProps - A function that returns the props to be passed to the slot component.
 */
function useSlotProps(parameters) {
  var _parameters$additiona;
  var elementType = parameters.elementType,
    externalSlotProps = parameters.externalSlotProps,
    ownerState = parameters.ownerState,
    rest = (0, _objectWithoutProperties2["default"])(parameters, _excluded);
  var resolvedComponentsProps = (0, _resolveComponentProps["default"])(externalSlotProps, ownerState);
  var _mergeSlotProps = (0, _mergeSlotProps2["default"])(_objectSpread(_objectSpread({}, rest), {}, {
      externalSlotProps: resolvedComponentsProps
    })),
    mergedProps = _mergeSlotProps.props,
    internalRef = _mergeSlotProps.internalRef;
  var ref = (0, _reactHooks.useForkRef)(internalRef, (0, _reactHooks.useForkRef)(resolvedComponentsProps == null ? void 0 : resolvedComponentsProps.ref, (_parameters$additiona = parameters.additionalProps) == null ? void 0 : _parameters$additiona.ref));
  var props = (0, _appendOwnerState["default"])(elementType, _objectSpread(_objectSpread({}, mergedProps), {}, {
    ref: ref
  }), ownerState);
  return props;
}