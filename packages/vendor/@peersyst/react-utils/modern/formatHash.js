export default function formatHash(hash) {
  var ellipsis = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "middle";
  var length = arguments.length > 2 ? arguments[2] : undefined;
  var addressLength = hash.length;
  if (!length) return hash;else if (ellipsis === "middle") {
    if (addressLength - 2 <= length * 2) return hash;
    return hash.substring(0, 2 + length) + "..." + hash.substring(addressLength - length, addressLength);
  } else {
    if (addressLength - 2 <= length) return hash;
    return hash.substring(0, 2 + length) + "...";
  }
}