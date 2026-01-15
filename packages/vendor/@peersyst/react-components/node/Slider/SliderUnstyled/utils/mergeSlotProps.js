"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = mergeSlotProps;
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _clsx = _interopRequireDefault(require("clsx"));
var _extractEventHandlers = _interopRequireDefault(require("./extractEventHandlers"));
var _omitEventHandlers = _interopRequireDefault(require("./omitEventHandlers"));
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { (0, _defineProperty2["default"])(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; } // From @mui/mui-base
/**
 * Merges the slot component internal props (usually coming from a hook)
 * with the externally provided ones.
 *
 * The merge order is (the latter overrides the former):
 * 1. The internal props (specified as a getter function to work with get*Props hook result)
 * 2. Additional props (specified internally on an unstyled component)
 * 3. External props specified on the owner component. These should only be used on a root slot.
 * 4. External props specified in the `componentsProps.*` prop.
 * 5. The `className` prop - combined from all the above.
 * @param parameters
 * @returns
 */
function mergeSlotProps(parameters) {
  var getSlotProps = parameters.getSlotProps,
    additionalProps = parameters.additionalProps,
    externalSlotProps = parameters.externalSlotProps,
    externalForwardedProps = parameters.externalForwardedProps,
    className = parameters.className;
  if (!getSlotProps) {
    // The simpler case - getSlotProps is not defined, so no internal event handlers are defined,
    // so we can simply merge all the props without having to worry about extracting event handlers.
    var _joinedClasses = (0, _clsx["default"])(externalForwardedProps == null ? void 0 : externalForwardedProps.className, externalSlotProps == null ? void 0 : externalSlotProps.className, className, additionalProps == null ? void 0 : additionalProps.className);
    var _mergedStyle = _objectSpread(_objectSpread(_objectSpread({}, additionalProps == null ? void 0 : additionalProps.style), externalForwardedProps == null ? void 0 : externalForwardedProps.style), externalSlotProps == null ? void 0 : externalSlotProps.style);
    var _props = _objectSpread(_objectSpread(_objectSpread({}, additionalProps), externalForwardedProps), externalSlotProps);
    if (_joinedClasses.length > 0) {
      _props.className = _joinedClasses;
    }
    if (Object.keys(_mergedStyle).length > 0) {
      _props.style = _mergedStyle;
    }
    return {
      props: _props,
      internalRef: undefined
    };
  }

  // In this case, getSlotProps is responsible for calling the external event handlers.
  // We don't need to include them in the merged props because of this.

  var eventHandlers = (0, _extractEventHandlers["default"])(_objectSpread(_objectSpread({}, externalForwardedProps), externalSlotProps));
  var componentsPropsWithoutEventHandlers = (0, _omitEventHandlers["default"])(externalSlotProps);
  var otherPropsWithoutEventHandlers = (0, _omitEventHandlers["default"])(externalForwardedProps);
  var internalSlotProps = getSlotProps(eventHandlers);

  // The order of classes is important here.
  // Emotion (that we use in libraries consuming MUI Base) depends on this order
  // to properly override style. It requires the most important classes to be last
  // (see https://github.com/mui/material-ui/pull/33205) for the related discussion.
  var joinedClasses = (0, _clsx["default"])(internalSlotProps == null ? void 0 : internalSlotProps.className, additionalProps == null ? void 0 : additionalProps.className, className, externalForwardedProps == null ? void 0 : externalForwardedProps.className, externalSlotProps == null ? void 0 : externalSlotProps.className);
  var mergedStyle = _objectSpread(_objectSpread(_objectSpread(_objectSpread({}, internalSlotProps == null ? void 0 : internalSlotProps.style), additionalProps == null ? void 0 : additionalProps.style), externalForwardedProps == null ? void 0 : externalForwardedProps.style), externalSlotProps == null ? void 0 : externalSlotProps.style);
  var props = _objectSpread(_objectSpread(_objectSpread(_objectSpread({}, internalSlotProps), additionalProps), otherPropsWithoutEventHandlers), componentsPropsWithoutEventHandlers);
  if (joinedClasses.length > 0) {
    props.className = joinedClasses;
  }
  if (Object.keys(mergedStyle).length > 0) {
    props.style = mergedStyle;
  }
  return {
    props: props,
    internalRef: internalSlotProps.ref
  };
}