import _asyncToGenerator from "@babel/runtime/helpers/esm/asyncToGenerator";
import _regeneratorRuntime from "@babel/runtime/regenerator";
import timeoutPromise, { TimeoutPromiseError } from "./timeoutPromise";
export default function (fn, condition) {
  var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  var timeout;
  var abort = false;
  var polling = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee3() {
      var _options$delay, delay, maxIterations, timeoutMs, i, promiseDidTimeout, res, resolveFn, _resolveFn;
      return _regeneratorRuntime.wrap(function _callee3$(_context3) {
        while (1) switch (_context3.prev = _context3.next) {
          case 0:
            _resolveFn = function _resolveFn3() {
              _resolveFn = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee2() {
                return _regeneratorRuntime.wrap(function _callee2$(_context2) {
                  while (1) switch (_context2.prev = _context2.next) {
                    case 0:
                      promiseDidTimeout = false;
                      _context2.prev = 1;
                      _context2.next = 4;
                      return timeoutMs !== undefined ? timeoutPromise(fn(), timeoutMs) : fn();
                    case 4:
                      return _context2.abrupt("return", _context2.sent);
                    case 7:
                      _context2.prev = 7;
                      _context2.t0 = _context2["catch"](1);
                      if (!(_context2.t0 instanceof TimeoutPromiseError)) {
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
              timeout = setTimeout( /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee() {
                return _regeneratorRuntime.wrap(function _callee$(_context) {
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