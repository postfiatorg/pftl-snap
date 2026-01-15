export function escapeRegExp(value) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"); // $& means the whole matched string
}
export function escapeReplaceAll(value, find, replace) {
  return value.replace(new RegExp(escapeRegExp(find), "g"), replace);
}