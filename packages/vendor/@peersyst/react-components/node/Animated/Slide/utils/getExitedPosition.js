"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getExitedPosition = getExitedPosition;
function getExitedPosition(direction) {
  if (direction === "left") return "translateX(100vw)";else if (direction === "up") return "translateY(100vh)";else if (direction === "right") return "translateX(-100vw)";else return "translateY(-100vh)";
}