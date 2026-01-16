"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof3 = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ArraySlot = ArraySlot;
exports.Slot = Slot;
exports["default"] = rack;
var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _typeof2 = _interopRequireDefault(require("@babel/runtime/helpers/typeof"));
var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
var _react = require("react");
var _extractSlots3 = _interopRequireWildcard(require("./extractSlots"));
var _createSlot = _interopRequireDefault(require("./createSlot"));
var _excluded = ["children"];
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof3(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { (0, _defineProperty2["default"])(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function Slot(component) {
  return {
    component: component,
    type: _extractSlots3.SlotType.SLOT
  };
}
function ArraySlot(component) {
  return {
    component: component,
    type: _extractSlots3.SlotType.ARRAY
  };
}

/**
 * Utility that creates racks and its slots.
 *
 * @param factory
 * @param slots
 * @param extensions
 */
function rack(slotsOptions, factory) {
  var slots = Object.entries(slotsOptions).reduce(function (acc, _ref) {
    var _ref2 = (0, _slicedToArray2["default"])(_ref, 2),
      key = _ref2[0],
      value = _ref2[1];
    return [].concat((0, _toConsumableArray2["default"])(acc), [[key, (0, _typeof2["default"])(value) === "object" && "component" in value ? value : Slot(value)]]);
  }, []);
  var slotsDef = slots.reduce(function (acc, _ref3) {
    var _ref4 = (0, _slicedToArray2["default"])(_ref3, 2),
      key = _ref4[0],
      type = _ref4[1].type;
    return _objectSpread(_objectSpread({}, acc), {}, (0, _defineProperty2["default"])({}, key, type));
  }, {});
  var RackComponent = /*#__PURE__*/(0, _react.forwardRef)(function RackComponent(_ref5, ref) {
    var children = _ref5.children,
      rest = (0, _objectWithoutProperties2["default"])(_ref5, _excluded);
    var _extractSlots = (0, _extractSlots3["default"])(slotsDef, children),
      _extractSlots2 = (0, _slicedToArray2["default"])(_extractSlots, 2),
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
      var _step$value = (0, _slicedToArray2["default"])(_step.value, 2),
        slot = _step$value[0],
        component = _step$value[1].component;
      Object.defineProperty(Rack, slot, {
        value: (0, _createSlot["default"])(slot, component),
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