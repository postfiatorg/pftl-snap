export function selectIsValid(value, multiple, required) {
  return !required || required && (multiple ? !!(value != null && value.length) : value !== undefined);
}