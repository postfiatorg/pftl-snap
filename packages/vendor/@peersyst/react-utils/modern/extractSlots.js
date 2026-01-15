import _typeof from "@babel/runtime/helpers/esm/typeof";
import _toConsumableArray from "@babel/runtime/helpers/esm/toConsumableArray";
import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
import { Children, isValidElement } from "react";
export var SlotType = /*#__PURE__*/function (SlotType) {
  SlotType["SLOT"] = "SLOT";
  SlotType["ARRAY"] = "ARRAY";
  return SlotType;
}({});
/**
 * Extracts all slots from children and other remaining children
 * @param children
 */
export default function extractSlots(slotsDef, children) {
  var slots = Object.entries(slotsDef).reduce(function (acc, _ref) {
    var _ref2 = _slicedToArray(_ref, 2),
      key = _ref2[0],
      value = _ref2[1];
    if (value === SlotType.ARRAY) return _objectSpread(_objectSpread({}, acc), {}, _defineProperty({}, key, []));
    return _objectSpread(_objectSpread({}, acc), {}, _defineProperty({}, key, undefined));
  }, {});
  var remainingChildren = [];
  Children.forEach(children, function (child) {
    if ( /*#__PURE__*/isValidElement(child)) {
      var elementChild = child;
      var childType = elementChild.type;
      if (childType == Symbol["for"]("react.fragment")) {
        var _extractSlots = extractSlots(slotsDef, child.props.children),
          _extractSlots2 = _slicedToArray(_extractSlots, 2),
          fragmentSlots = _extractSlots2[0],
          fragmentRemainingChildren = _extractSlots2[1];
        slots = _objectSpread(_objectSpread({}, slots), fragmentSlots);
        remainingChildren = [].concat(_toConsumableArray(remainingChildren), [fragmentRemainingChildren]);
      } else if ((typeof childType === "function" || _typeof(childType) === "object") && "name" in childType && slotsDef[childType.name]) {
        if (slotsDef[childType.name] === SlotType.ARRAY) {
          slots[childType.name].push(elementChild);
        } else slots[childType.name] = elementChild;
      } else remainingChildren.push(child);
    } else remainingChildren.push(child);
  });
  return [slots, remainingChildren];
}