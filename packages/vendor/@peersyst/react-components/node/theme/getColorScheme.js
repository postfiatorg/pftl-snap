"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = getColorScheme;
function getColorScheme() {
  var _window$matchMedia, _window;
  if (typeof window !== "undefined" && (_window$matchMedia = (_window = window).matchMedia) != null && _window$matchMedia.call(_window, "(prefers-color-scheme: dark)").matches) {
    return "dark";
  } else {
    return "light";
  }
}