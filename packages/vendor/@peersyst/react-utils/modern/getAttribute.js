import _toArray from "@babel/runtime/helpers/esm/toArray";
// @ts-ignore Not excessively deep (max 10 levels)
export default function (obj, key
// @ts-ignore Not excessively deep (max 10 levels)
) {
  var _key$split = key.split("."),
    _key$split2 = _toArray(_key$split),
    firstKey = _key$split2[0],
    restKeys = _key$split2.slice(1);

  // @ts-ignore+
  return restKeys.reduce(function (prev, curr) {
    return prev[curr];
  }, obj[firstKey]);
}