"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
var _exportNames = {
  Skeleton: true
};
Object.defineProperty(exports, "Skeleton", {
  enumerable: true,
  get: function get() {
    return _Skeleton["default"];
  }
});
var _Skeleton = _interopRequireDefault(require("./Skeleton"));
var _Skeleton2 = require("./Skeleton.styles");
Object.keys(_Skeleton2).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _Skeleton2[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _Skeleton2[key];
    }
  });
});
var _Skeleton3 = require("./Skeleton.types");
Object.keys(_Skeleton3).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _Skeleton3[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _Skeleton3[key];
    }
  });
});
var _withSkeleton = require("./withSkeleton");
Object.keys(_withSkeleton).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _withSkeleton[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _withSkeleton[key];
    }
  });
});