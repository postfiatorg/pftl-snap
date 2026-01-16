import { useLocale } from "../../config";
import { formatNumber, parseNumber } from "../utils";
export default function useNumericInput() {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
    locale = _ref.locale,
    maxDecimals = _ref.maxDecimals;
  var defaultLocale = useLocale();
  var finalLocale = locale || defaultLocale;
  return {
    format: function format(value) {
      return formatNumber(value, finalLocale, maxDecimals);
    },
    parse: function parse(curr, prev) {
      var parseValue = parseNumber(curr, maxDecimals);
      if (parseValue === "NaN") return prev;
      return parseValue;
    }
  };
}