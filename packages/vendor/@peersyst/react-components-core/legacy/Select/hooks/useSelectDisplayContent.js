import { Children, useMemo } from "react";
import isSelectOption from "../utils/isSelectOption";
export function useSelectDisplayContent(value, multiple, options) {
  var compare = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : function (a, b) {
    return a === b;
  };
  return useMemo(function () {
    var _Children$toArray$fin;
    if (value === undefined || !options) return;
    if (Array.isArray(options) && isSelectOption(options[0])) {
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
      var selectedChildren = Children.toArray(options).filter(function (c) {
        return value.find(function (v) {
          var _props;
          return compare(v, (_props = c.props) == null ? void 0 : _props.value);
        });
      });
      return selectedChildren.map(function (c) {
        var _props2;
        return (_props2 = c.props) == null ? void 0 : _props2.children;
      });
    } else return (_Children$toArray$fin = Children.toArray(options).find(function (c) {
      return compare(c.props.value, value);
    })) == null || (_Children$toArray$fin = _Children$toArray$fin.props) == null ? void 0 : _Children$toArray$fin.children;
  }, [value, multiple, options]);
}