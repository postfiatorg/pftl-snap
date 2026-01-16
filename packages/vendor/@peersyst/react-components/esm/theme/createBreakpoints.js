export var createBreakpoints = function createBreakpoints(values) {
  var keys = Object.keys(values);
  function up(key) {
    var value = typeof key === "number" ? key : values[key];
    return "@media (min-width:".concat(value, "px)");
  }
  function down(key) {
    var value = typeof key === "number" ? key : values[key];
    return "@media (max-width:".concat(value, "px)");
  }
  function between(start, end) {
    return "@media (min-width:".concat(typeof start === "number" ? start : values[start], "px) and ") + "(max-width:".concat(typeof end === "number" ? end : values[end], "px)");
  }
  function only(key) {
    if (keys.indexOf(key) + 1 < keys.length) {
      return between(key, keys[keys.indexOf(key) + 1]);
    }
    return up(key);
  }
  function not(key) {
    var keyIndex = keys.indexOf(key);
    if (keyIndex === 0) {
      return up(keys[1]);
    }
    if (keyIndex === keys.length - 1) {
      return down(keys[keyIndex]);
    }
    return between(key, keys[keys.indexOf(key) + 1]).replace("@media", "@media not all and");
  }
  return {
    values: values,
    up: up,
    down: down,
    between: between,
    only: only,
    not: not
  };
};