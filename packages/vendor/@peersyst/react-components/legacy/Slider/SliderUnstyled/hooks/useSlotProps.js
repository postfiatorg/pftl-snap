import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
var _excluded = ["elementType", "externalSlotProps", "ownerState"];
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
// From @mui/mui-base

import mergeSlotProps from "../utils/mergeSlotProps";
import resolveComponentProps from "../utils/resolveComponentProps";
import appendOwnerState from "../utils/appendOwnerState";
import { useForkRef } from "@peersyst/react-hooks";
/**
 * Builds the props to be passed into the slot of an unstyled component.
 * It merges the internal props of the component with the ones supplied by the user, allowing to customize the behavior.
 * If the slot component is not a host component, it also merges in the `ownerState`.
 *
 * @param parameters.getSlotProps - A function that returns the props to be passed to the slot component.
 */
export default function useSlotProps(parameters) {
  var _parameters$additiona;
  var elementType = parameters.elementType,
    externalSlotProps = parameters.externalSlotProps,
    ownerState = parameters.ownerState,
    rest = _objectWithoutProperties(parameters, _excluded);
  var resolvedComponentsProps = resolveComponentProps(externalSlotProps, ownerState);
  var _mergeSlotProps = mergeSlotProps(_objectSpread(_objectSpread({}, rest), {}, {
      externalSlotProps: resolvedComponentsProps
    })),
    mergedProps = _mergeSlotProps.props,
    internalRef = _mergeSlotProps.internalRef;
  var ref = useForkRef(internalRef, useForkRef(resolvedComponentsProps == null ? void 0 : resolvedComponentsProps.ref, (_parameters$additiona = parameters.additionalProps) == null ? void 0 : _parameters$additiona.ref));
  var props = appendOwnerState(elementType, _objectSpread(_objectSpread({}, mergedProps), {}, {
    ref: ref
  }), ownerState);
  return props;
}