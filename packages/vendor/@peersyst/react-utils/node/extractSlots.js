"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SlotType = void 0;
exports["default"] = extractSlots;
var _typeof2 = _interopRequireDefault(require("@babel/runtime/helpers/typeof"));
var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
var _react = require("react");
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { (0, _defineProperty2["default"])(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
var SlotType = exports.SlotType = /*#__PURE__*/function (SlotType) {
  SlotType["SLOT"] = "SLOT";
  SlotType["ARRAY"] = "ARRAY";
  return SlotType;
}({});
/**
 * Extracts all slots from children and other remaining children
 * @param children
 */
function extractSlots(slotsDef, children) {
  var slots = Object.entries(slotsDef).reduce(function (acc, _ref) {
    var _ref2 = (0, _slicedToArray2["default"])(_ref, 2),
      key = _ref2[0],
      value = _ref2[1];
    if (value === SlotType.ARRAY) return _objectSpread(_objectSpread({}, acc), {}, (0, _defineProperty2["default"])({}, key, []));
    return _objectSpread(_objectSpread({}, acc), {}, (0, _defineProperty2["default"])({}, key, undefined));
  }, {});
  var remainingChildren = [];
  _react.Children.forEach(children, function (child) {
    if ( /*#__PURE__*/(0, _react.isValidElement)(child)) {
      var elementChild = child;
      var childType = elementChild.type;
      if (childType == Symbol["for"]("react.fragment")) {
        var _extractSlots = extractSlots(slotsDef, child.props.children),
          _extractSlots2 = (0, _slicedToArray2["default"])(_extractSlots, 2),
          fragmentSlots = _extractSlots2[0],
          fragmentRemainingChildren = _extractSlots2[1];
        slots = _objectSpread(_objectSpread({}, slots), fragmentSlots);
        remainingChildren = [].concat((0, _toConsumableArray2["default"])(remainingChildren), [fragmentRemainingChildren]);
      } else if ((typeof childType === "function" || (0, _typeof2["default"])(childType) === "object") && "name" in childType && slotsDef[childType.name]) {
        if (slotsDef[childType.name] === SlotType.ARRAY) {
          slots[childType.name].push(elementChild);
        } else slots[childType.name] = elementChild;
      } else remainingChildren.push(child);
    } else remainingChildren.push(child);
  });
  return [slots, remainingChildren];
}