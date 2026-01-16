import _toConsumableArray from "@babel/runtime/helpers/esm/toConsumableArray";
import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
// TODO: Check if a headless hook can be built between rwc and rnc

import { createRef, useRef, useState, useEffect } from "react";
import { CodeInput, CodeInputsRoot } from "./CodeInputs.styles";
import { useNumericInput } from "@peersyst/react-components-core";
import { jsx as _jsx } from "react/jsx-runtime";
var CodeInputs = function CodeInputs(_ref) {
  var type = _ref.type,
    digits = _ref.digits,
    _ref$gap = _ref.gap,
    gap = _ref$gap === void 0 ? 8 : _ref$gap,
    placeholder = _ref.placeholder,
    value = _ref.value,
    setValue = _ref.setValue,
    _ref$context = _ref.context,
    invalid = _ref$context.invalid,
    disabled = _ref$context.disabled,
    readonly = _ref$context.readonly,
    focused = _ref$context.focused,
    setFocused = _ref$context.setFocused,
    onBlur = _ref.onBlur,
    onFocus = _ref.onFocus;
  var _useState = useState(undefined),
    _useState2 = _slicedToArray(_useState, 2),
    focusIndex = _useState2[0],
    setFocusIndex = _useState2[1];
  var refs = useRef(_toConsumableArray(Array(digits)).map(function () {
    return /*#__PURE__*/createRef();
  }));
  var isNumeric = type === "numeric";
  var _useNumericInput = useNumericInput(),
    parse = _useNumericInput.parse,
    format = _useNumericInput.format;
  var handleChange = function handleChange(index) {
    return function (digit) {
      var force = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      if (!force && value.length === digits) return;
      var newValue = value.slice(0, digits).split("");
      newValue[index] = digit;
      setValue(newValue.join(""));
      if (force) {
        // Force value on ref as only updating state won't be reflected in handlers
        refs.current[index].current.value = digit;
        return;
      }
      if (digit && refs.current[index + 1]) {
        var _refs$current$current;
        (_refs$current$current = refs.current[index + 1].current) == null || _refs$current$current.focus();
      } else if (newValue[index] && index === digits - 1) {
        var _refs$current$index$c;
        (_refs$current$index$c = refs.current[index].current) == null || _refs$current$index$c.blur();
      }
    };
  };
  var handleKeyDown = function handleKeyDown(index) {
    return function (e) {
      if (e.key === "Backspace") {
        var values = value.split("");
        if (values[index]) {
          handleChange(index)("", true);
        } else if (index > 0) {
          var _refs$current$current2;
          handleChange(index - 1)("", true);
          (_refs$current$current2 = refs.current[index - 1].current) == null || _refs$current$current2.focus();
        }
      }
    };
  };
  var handleFocus = function handleFocus() {
    if (!focused) {
      setFocused(true);
      onFocus == null || onFocus();
    }
    var i = 0;
    while (i < digits - 1) {
      var _refs$current$i$curre;
      if (!((_refs$current$i$curre = refs.current[i].current) != null && _refs$current$i$curre.value)) {
        break;
      }
      i++;
    }
    if (i !== focusIndex) setFocusIndex(i);
  };
  useEffect(function () {
    if (focusIndex !== undefined) {
      var _refs$current$focusIn;
      (_refs$current$focusIn = refs.current[focusIndex].current) == null || _refs$current$focusIn.focus();
      setFocusIndex(undefined);
    }
  }, [focusIndex]);
  var handleBlur = function handleBlur() {
    // Wait for next focus to be set
    setTimeout(function () {
      if (refs.current.every(function (ref) {
        return ref.current !== document.activeElement;
      })) {
        setFocused(false);
        onBlur == null || onBlur();
      }
    }, 10);
  };
  return /*#__PURE__*/_jsx(CodeInputsRoot, {
    gap: gap,
    className: "CodeInputs",
    children: _toConsumableArray(Array(digits)).map(function (_, i) {
      return /*#__PURE__*/_jsx(CodeInput, {
        placeholder: placeholder == null ? void 0 : placeholder.split("")[i],
        value: value.split("")[i],
        onChange: handleChange(i),
        type: isNumeric ? "tel" : "text",
        ref: refs.current[i],
        onKeyDown: handleKeyDown(i),
        onFocus: handleFocus,
        onBlur: handleBlur,
        selectOnFocus: true,
        readonly: readonly,
        disabled: disabled,
        error: invalid,
        className: "CodeInput",
        parse: isNumeric ? parse : undefined,
        format: isNumeric ? format : undefined
      }, i.toString());
    })
  });
};
export default CodeInputs;