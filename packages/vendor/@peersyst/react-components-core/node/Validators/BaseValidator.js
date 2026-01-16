"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BaseValidator = void 0;
var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));
var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));
var BaseValidator = exports.BaseValidator = /*#__PURE__*/(0, _createClass2["default"])(function BaseValidator(message) {
  (0, _classCallCheck2["default"])(this, BaseValidator);
  this.message = message;
});