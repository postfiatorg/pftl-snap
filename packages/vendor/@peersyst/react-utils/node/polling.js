"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = _default;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _timeoutPromise = _interopRequireWildcard(require("./timeoutPromise"));
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function _default(fn, condition) {
  var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  var timeout;
  var abort = false;
  var polling = /*#__PURE__*/function () {
    var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3() {
      var _options$delay, delay, maxIterations, timeoutMs, i, promiseDidTimeout, res, resolveFn, _resolveFn;
      return _regenerator["default"].wrap(function _callee3$(_context3) {
        while (1) switch (_context3.prev = _context3.next) {
          case 0:
            _resolveFn = function _resolveFn3() {
              _resolveFn = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2() {
                return _regenerator["default"].wrap(function _callee2$(_context2) {
                  while (1) switch (_context2.prev = _context2.next) {
                    case 0:
                      promiseDidTimeout = false;
                      _context2.prev = 1;
                      _context2.next = 4;
                      return timeoutMs !== undefined ? (0, _timeoutPromise["default"])(fn(), timeoutMs) : fn();
                    case 4:
                      return _context2.abrupt("return", _context2.sent);
                    case 7:
                      _context2.prev = 7;
                      _context2.t0 = _context2["catch"](1);
                      if (!(_context2.t0 instanceof _timeoutPromise.TimeoutPromiseError)) {
                        _context2.next = 13;
                        break;
                      }
                      promiseDidTimeout = true;
                      _context2.next = 14;
                      break;
                    case 13:
                      throw _context2.t0;
                    case 14:
                    case "end":
                      return _context2.stop();
                  }
                }, _callee2, null, [[1, 7]]);
              }));
              return _resolveFn.apply(this, arguments);
            };
            resolveFn = function _resolveFn2() {
              return _resolveFn.apply(this, arguments);
            };
            _options$delay = options.delay, delay = _options$delay === void 0 ? 1000 : _options$delay, maxIterations = options.maxIterations, timeoutMs = options.timeout;
            i = 0;
            promiseDidTimeout = false;
            _context3.next = 7;
            return resolveFn();
          case 7:
            res = _context3.sent;
          case 8:
            if (!(!abort && (promiseDidTimeout || condition(res)))) {
              _context3.next = 15;
              break;
            }
            if (!(i === maxIterations)) {
              _context3.next = 11;
              break;
            }
            throw new Error("Polling executed the maximum number iterations");
          case 11:
            _context3.next = 13;
            return new Promise(function (resolve) {
              timeout = setTimeout( /*#__PURE__*/(0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee() {
                return _regenerator["default"].wrap(function _callee$(_context) {
                  while (1) switch (_context.prev = _context.next) {
                    case 0:
                      i++;
                      _context.next = 3;
                      return resolveFn();
                    case 3:
                      res = _context.sent;
                      resolve();
                    case 5:
                    case "end":
                      return _context.stop();
                  }
                }, _callee);
              })), delay);
            });
          case 13:
            _context3.next = 8;
            break;
          case 15:
            return _context3.abrupt("return", res);
          case 16:
          case "end":
            return _context3.stop();
        }
      }, _callee3);
    }));
    return function polling() {
      return _ref.apply(this, arguments);
    };
  }();
  var result = polling();
  result.abort = function () {
    abort = true;
    clearTimeout(timeout);
  };
  return result;
}