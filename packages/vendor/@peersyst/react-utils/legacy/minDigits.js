import _toConsumableArray from "@babel/runtime/helpers/esm/toConsumableArray";
export default function (n, d) {
  var _ref = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {},
    _ref$fill = _ref.fill,
    fill = _ref$fill === void 0 ? "left" : _ref$fill;
  var num = n.toString();
  var dif = d - num.length;
  var zeros = dif > 0 ? _toConsumableArray(Array(dif)).reduce(function () {
    var prev = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
    return prev + "0";
  }, "") : "";
  return (fill === "left" ? zeros : "") + num + (fill === "right" ? zeros : "");
}