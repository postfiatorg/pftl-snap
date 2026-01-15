"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getTranslateValue = getTranslateValue;
var _reactUtils = require("@peersyst/react-utils");
function getTranslateValue(direction, node, resolvedContainer) {
  var rect = node.getBoundingClientRect();
  var containerRect = resolvedContainer && resolvedContainer.getBoundingClientRect();
  var containerWindow = (0, _reactUtils.ownerWindow)(node);
  var computedStyle = containerWindow.getComputedStyle(node);
  var transform = computedStyle.getPropertyValue("-webkit-transform") || computedStyle.getPropertyValue("transform");
  var offsetX = 0;
  var offsetY = 0;
  if (transform && transform !== "none") {
    var transformValues = transform.split("(")[1].split(")")[0].split(",");
    offsetX = parseInt(transformValues[4], 10);
    offsetY = parseInt(transformValues[5], 10);
  }
  if (direction === "left") {
    if (containerRect) {
      return "translateX(".concat(containerRect.right + offsetX - rect.left, "px)");
    }
    return "translateX(".concat(containerWindow.innerWidth + offsetX - rect.left, "px)");
  } else if (direction === "right") {
    if (containerRect) {
      return "translateX(-".concat(rect.right - containerRect.left - offsetX, "px)");
    }
    return "translateX(-".concat(rect.left + rect.width - offsetX, "px)");
  } else if (direction === "up") {
    if (containerRect) {
      return "translateY(".concat(containerRect.bottom + offsetY - rect.top, "px)");
    }
    return "translateY(".concat(containerWindow.innerHeight + offsetY - rect.top, "px)");
  } else {
    if (containerRect) {
      return "translateY(-".concat(rect.top - containerRect.top + rect.height - offsetY, "px)");
    }
    return "translateY(-".concat(rect.top + rect.height - offsetY, "px)");
  }
}