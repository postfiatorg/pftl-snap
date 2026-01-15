import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import { escapeReplaceAll } from "../../utils";
export function getDecimalSeparator(locale) {
  var number = 1.1;
  return number.toLocaleString(locale).substring(1, 2);
}
export function getGroupSeparator(locale) {
  var value = 1000 .toLocaleString(locale);
  if (value.length === 5) return value.substring(1, 2);
  return getDecimalSeparator(locale) === "," ? "." : ",";
}
export function formatInt(value) {
  // Remove leading zeros
  return value.replace(/^0+(?!$)/, "");
}
export var formatNumber = function formatNumber(value, locale, maxDecimals) {
  var decimalSeparator = getDecimalSeparator(locale);
  var _value$split = value.split("."),
    _value$split2 = _slicedToArray(_value$split, 2),
    _int = _value$split2[0],
    _value$split2$ = _value$split2[1],
    dec = _value$split2$ === void 0 ? "" : _value$split2$;
  if (value === "-0") _int = _int.replace("-0", "-");
  return formatInt(_int) + (value.includes(".") ? decimalSeparator : "") + dec.substring(0, maxDecimals);
};
export var isNumber = function isNumber(str) {
  return /^-?\d*\.?\d+$/.test(str);
};
export var parseNumber = function parseNumber(value, maxDecimals) {
  var parsedValue = escapeReplaceAll(value, ",", ".");
  if (parsedValue.split(".").length > 2) return "NaN";else if (parsedValue === "") return "";else if (parsedValue === "-") return "-0";else if (parsedValue.endsWith(".") && parsedValue.length > 1 && isNumber(parsedValue + "0")) return parsedValue;else if (isNumber(parsedValue)) {
    var _parsedValue$split = parsedValue.split("."),
      _parsedValue$split2 = _slicedToArray(_parsedValue$split, 2),
      _int2 = _parsedValue$split2[0],
      dec = _parsedValue$split2[1];
    if (!dec || !maxDecimals) return parsedValue;
    return _int2 + "." + dec.substring(0, maxDecimals);
  } else return "NaN";
};