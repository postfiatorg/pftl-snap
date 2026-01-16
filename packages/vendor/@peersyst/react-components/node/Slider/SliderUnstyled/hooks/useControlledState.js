"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = useControlledState;
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
var _react = require("react");
// From @mui/utils
/* eslint-disable react-hooks/rules-of-hooks */

function useControlledState(_ref) {
  var controlled = _ref.controlled,
    defaultProp = _ref["default"],
    name = _ref.name,
    _ref$state = _ref.state,
    state = _ref$state === void 0 ? "value" : _ref$state;
  // isControlled is ignored in the hook dependency lists as it should never change.
  var _useRef = (0, _react.useRef)(controlled !== undefined),
    isControlled = _useRef.current;
  var _useState = (0, _react.useState)(defaultProp),
    _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
    valueState = _useState2[0],
    setValue = _useState2[1];
  var value = isControlled ? controlled : valueState;
  if (process.env.NODE_ENV !== "production") {
    (0, _react.useEffect)(function () {
      if (isControlled !== (controlled !== undefined)) {
        console.error(["A component is changing the ".concat(isControlled ? "" : "un", "controlled ").concat(state, " state of ").concat(name, " to be ").concat(isControlled ? "un" : "", "controlled."), "Elements should not switch from uncontrolled to controlled (or vice versa).", "Decide between using a controlled or uncontrolled ".concat(name, " ") + "element for the lifetime of the component.", "The nature of the state is determined during the first render. It's considered controlled if the value is not `undefined`.", "More info: https://fb.me/react-controlled-components"].join("\n"));
      }
    }, [state, name, controlled]);
    var _useRef2 = (0, _react.useRef)(defaultProp),
      defaultValue = _useRef2.current;
    (0, _react.useEffect)(function () {
      if (!isControlled && defaultValue !== defaultProp) {
        console.error(["A component is changing the default ".concat(state, " state of an uncontrolled ").concat(name, " after being initialized. ") + "To suppress this warning opt to use a controlled ".concat(name, ".")].join("\n"));
      }
    }, [JSON.stringify(defaultProp)]);
  }
  var setValueIfUncontrolled = (0, _react.useCallback)(function (newValue) {
    if (!isControlled) {
      setValue(newValue);
    }
  }, []);
  return [value, setValueIfUncontrolled];
}