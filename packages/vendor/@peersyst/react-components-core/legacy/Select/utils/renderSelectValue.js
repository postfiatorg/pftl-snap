export function renderSelectValue(value) {
  if (Array.isArray(value)) return value.join(", ");else return value;
}