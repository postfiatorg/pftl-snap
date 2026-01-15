export default function (gap) {
  if (!gap) return "20px";
  return typeof gap === "number" ? gap.toString() + "px" : gap;
}