import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import _typeof from "@babel/runtime/helpers/esm/typeof";
import _toConsumableArray from "@babel/runtime/helpers/esm/toConsumableArray";
import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
var _excluded = ["children"];
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
import { forwardRef } from "react";
import extractSlots, { SlotType } from "./extractSlots";
import createSlot from "./createSlot";
export function Slot(component) {
  return {
    component: component,
    type: SlotType.SLOT
  };
}
export function ArraySlot(component) {
  return {
    component: component,
    type: SlotType.ARRAY
  };
}

/**
 * Utility that creates racks and its slots.
 *
 * @param factory
 * @param slots
 * @param extensions
 */
export default function rack(slotsOptions, factory) {
  var slots = Object.entries(slotsOptions).reduce(function (acc, _ref) {
    var _ref2 = _slicedToArray(_ref, 2),
      key = _ref2[0],
      value = _ref2[1];
    return [].concat(_toConsumableArray(acc), [[key, _typeof(value) === "object" && "component" in value ? value : Slot(value)]]);
  }, []);
  var slotsDef = slots.reduce(function (acc, _ref3) {
    var _ref4 = _slicedToArray(_ref3, 2),
      key = _ref4[0],
      type = _ref4[1].type;
    return _objectSpread(_objectSpread({}, acc), {}, _defineProperty({}, key, type));
  }, {});
  var RackComponent = /*#__PURE__*/forwardRef(function RackComponent(_ref5, ref) {
    var children = _ref5.children,
      rest = _objectWithoutProperties(_ref5, _excluded);
    var _extractSlots = extractSlots(slotsDef, children),
      _extractSlots2 = _slicedToArray(_extractSlots, 2),
      slots = _extractSlots2[0],
      remainingChildren = _extractSlots2[1];

    // @ts-ignore
    return factory(_objectSpread({
      children: remainingChildren
    }, rest), slots, ref);
  });
  var Rack = RackComponent;
  Object.defineProperty(Rack, "name", {
    value: factory.name,
    writable: true,
    enumerable: true
  });
  var _iterator = _createForOfIteratorHelper(slots),
    _step;
  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var _step$value = _slicedToArray(_step.value, 2),
        slot = _step$value[0],
        component = _step$value[1].component;
      Object.defineProperty(Rack, slot, {
        value: createSlot(slot, component),
        writable: false,
        enumerable: true
      });
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
  return Rack;
}