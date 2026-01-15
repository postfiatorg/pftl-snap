/**
 * Accepts classNames as params and merges them into a single className string
 * @param classes classNames
 */
export default function cx() {
  for (var _len = arguments.length, classes = new Array(_len), _key = 0; _key < _len; _key++) {
    classes[_key] = arguments[_key];
  }
  return classes.filter(function (c) {
    return c && c !== "";
  }).join(" ");
}