"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getAnimationDirection = getAnimationDirection;
function getAnimationDirection(position) {
  if (position === "left") return "right";else if (position === "right") return "left";else if (position === "bottom") return "up";else return "down";
}