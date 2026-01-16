"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
var _exportNames = {
  BlockchainAddress: true
};
Object.defineProperty(exports, "BlockchainAddress", {
  enumerable: true,
  get: function get() {
    return _BlockchainAddress["default"];
  }
});
var _BlockchainAddress = _interopRequireDefault(require("./BlockchainAddress"));
var _BlockchainAddress2 = require("./BlockchainAddress.types");
Object.keys(_BlockchainAddress2).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _BlockchainAddress2[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _BlockchainAddress2[key];
    }
  });
});