export default function (v) {
  return typeof v === "number" ? v : v[0];
}