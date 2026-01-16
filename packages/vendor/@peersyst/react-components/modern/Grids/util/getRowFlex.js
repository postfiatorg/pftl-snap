export default function (v) {
  return typeof v === "number" ? 1 : v[1] || 1;
}