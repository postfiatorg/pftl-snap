"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TimeoutPromiseError = void 0;
exports["default"] = timeoutPromise;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));
var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));
var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));
var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));
var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));
var _wrapNativeSuper2 = _interopRequireDefault(require("@babel/runtime/helpers/wrapNativeSuper"));
function _callSuper(t, o, e) { return o = (0, _getPrototypeOf2["default"])(o), (0, _possibleConstructorReturn2["default"])(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], (0, _getPrototypeOf2["default"])(t).constructor) : o.apply(t, e)); }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
var TimeoutPromiseError = exports.TimeoutPromiseError = /*#__PURE__*/function (_Error) {
  (0, _inherits2["default"])(TimeoutPromiseError, _Error);
  function TimeoutPromiseError() {
    (0, _classCallCheck2["default"])(this, TimeoutPromiseError);
    return _callSuper(this, TimeoutPromiseError, ["Promise timeout"]);
  }
  return (0, _createClass2["default"])(TimeoutPromiseError);
}( /*#__PURE__*/(0, _wrapNativeSuper2["default"])(Error));
function timeoutPromise(_x, _x2) {
  return _timeoutPromise.apply(this, arguments);
}
function _timeoutPromise() {
  _timeoutPromise = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(promise, ms) {
    var timeout, rejectedPromise, res;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          rejectedPromise = new Promise(function (_, reject) {
            timeout = setTimeout(function () {
              reject(new TimeoutPromiseError());
            }, ms);
          });
          _context.next = 3;
          return Promise.race([promise, rejectedPromise]);
        case 3:
          res = _context.sent;
          clearTimeout(timeout);
          return _context.abrupt("return", res);
        case 6:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return _timeoutPromise.apply(this, arguments);
}