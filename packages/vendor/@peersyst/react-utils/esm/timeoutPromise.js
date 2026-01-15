import _asyncToGenerator from "@babel/runtime/helpers/esm/asyncToGenerator";
import _createClass from "@babel/runtime/helpers/esm/createClass";
import _classCallCheck from "@babel/runtime/helpers/esm/classCallCheck";
import _possibleConstructorReturn from "@babel/runtime/helpers/esm/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/esm/getPrototypeOf";
import _inherits from "@babel/runtime/helpers/esm/inherits";
import _wrapNativeSuper from "@babel/runtime/helpers/esm/wrapNativeSuper";
import _regeneratorRuntime from "@babel/runtime/regenerator";
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
export var TimeoutPromiseError = /*#__PURE__*/function (_Error) {
  _inherits(TimeoutPromiseError, _Error);
  function TimeoutPromiseError() {
    _classCallCheck(this, TimeoutPromiseError);
    return _callSuper(this, TimeoutPromiseError, ["Promise timeout"]);
  }
  return _createClass(TimeoutPromiseError);
}( /*#__PURE__*/_wrapNativeSuper(Error));
export default function timeoutPromise(_x, _x2) {
  return _timeoutPromise.apply(this, arguments);
}
function _timeoutPromise() {
  _timeoutPromise = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee(promise, ms) {
    var timeout, rejectedPromise, res;
    return _regeneratorRuntime.wrap(function _callee$(_context) {
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