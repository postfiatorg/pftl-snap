"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useSelectDisplayContent = useSelectDisplayContent;
var _react = require("react");
var _isSelectOption = _interopRequireDefault(require("../utils/isSelectOption"));
function useSelectDisplayContent(value, multiple, options) {
  var compare = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : function (a, b) {
    return a === b;
  };
  return (0, _react.useMemo)(function () {
    var _Children$toArray$fin;
    if (value === undefined || !options) return;
    if (Array.isArray(options) && (0, _isSelectOption["default"])(options[0])) {
      if (multiple) {
        var selectedOptions = options.filter(function (o) {
          return value.find(function (v) {
            return compare(v, o.value);
          });
        });
        return selectedOptions.map(function (so) {
          return so.label;
        });
      } else {
        var _find;
        return (_find = options.find(function (o) {
          return compare(value, o.value);
        })) == null ? void 0 : _find.label;
      }
    }
    if (multiple) {
      var selectedChildren = _react.Children.toArray(options).filter(function (c) {
        return value.find(function (v) {
          var _props;
          return compare(v, (_props = c.props) == null ? void 0 : _props.value);
        });
      });
      return selectedChildren.map(function (c) {
        var _props2;
        return (_props2 = c.props) == null ? void 0 : _props2.children;
      });
    } else return (_Children$toArray$fin = _react.Children.toArray(options).find(function (c) {
      return compare(c.props.value, value);
    })) == null || (_Children$toArray$fin = _Children$toArray$fin.props) == null ? void 0 : _Children$toArray$fin.children;
  }, [value, multiple, options]);
}