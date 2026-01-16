"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = fsx;
/**
 * Accepts a PropStyle (function that returns CSSProperties or CSSProperties) and returns the appropriate CSSProperties
 * @param sx PropStyle
 * @param props Props that can be used to compute the function PropStyle
 */
function fsx(sx, props) {
  if (!sx) return undefined;
  if (typeof sx === "function") return sx(props);else return sx;
}