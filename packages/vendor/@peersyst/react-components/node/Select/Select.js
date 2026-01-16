"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = Select;
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
var _react = require("react");
var _Select = require("./Select.styles");
var _SelectMenu = require("./SelectMenu");
var _reactComponentsCore = require("@peersyst/react-components-core");
var _reactUtils = require("@peersyst/react-utils");
var _ClickAwayListener = require("../ClickAwayListener");
var _SelectItem = require("./SelectItem");
var _FormControl = require("../FormControl");
var _FormControlLabel = require("../FormControlLabel");
var _reactHooks = require("@peersyst/react-hooks");
var _jsxRuntime = require("react/jsx-runtime");
var _excluded = ["required", "multiple", "defaultValue", "placeholder", "clear", "dropdownElement", "renderValue", "autoFocus", "disabled", "readonly", "expandable", "children", "LabelProps", "Label", "options", "open", "onClose", "onOpen", "compare", "display"];
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { (0, _defineProperty2["default"])(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function InnerSelect(_ref) {
  var clear = _ref.clear,
    autoFocus = _ref.autoFocus,
    disabled = _ref.disabled,
    readonly = _ref.readonly,
    renderValue = _ref.renderValue,
    placeholder = _ref.placeholder,
    value = _ref.value,
    setValue = _ref.setValue,
    multiple = _ref.multiple,
    expandable = _ref.expandable,
    dropdownElement = _ref.dropdownElement,
    _ref$options = _ref.options,
    options = _ref$options === void 0 ? [] : _ref$options,
    children = _ref.children,
    openProp = _ref.open,
    onClose = _ref.onClose,
    onOpen = _ref.onOpen,
    _ref$compare = _ref.compare,
    compare = _ref$compare === void 0 ? function (a, b) {
      return a === b;
    } : _ref$compare,
    display = _ref.display;
  var _useControlled = (0, _reactHooks.useControlled)(autoFocus, openProp, openProp ? onClose : onOpen),
    _useControlled2 = (0, _slicedToArray2["default"])(_useControlled, 2),
    open = _useControlled2[0],
    setOpen = _useControlled2[1];
  var _useFormControl = (0, _reactComponentsCore.useFormControl)(),
    setFocused = _useFormControl.setFocused;
  (0, _react.useEffect)(function () {
    setFocused(open);
  }, [open]);
  var handleClick = function handleClick() {
    if (!disabled && !readonly) setOpen(!open);
  };
  function handleOnClickAway() {
    if (open) setOpen(false);
  }
  var displayContent = (0, _reactComponentsCore.useSelectDisplayContent)(value, multiple, children || options, compare);
  var renderedValue = renderValue(displayContent);
  var isPlaceholder = !renderedValue && !!placeholder;
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_ClickAwayListener.ClickAwayListener, {
    onClickAway: handleOnClickAway,
    children: /*#__PURE__*/(0, _jsxRuntime.jsxs)(_Select.SelectRoot, {
      className: "Select",
      children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)(_Select.SelectDisplayWrapper, {
        disabled: disabled,
        readonly: readonly,
        children: [display || /*#__PURE__*/(0, _jsxRuntime.jsxs)(_Select.SelectDisplay, {
          open: open,
          disabled: disabled,
          readonly: readonly,
          className: (0, _reactUtils.cx)("SelectDisplay", open && "Open", disabled && "Disabled"),
          children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_Select.DisplayContent, {
            className: (0, _reactUtils.cx)("DisplayContent", isPlaceholder && "Placeholder"),
            children: renderedValue || placeholder
          }), dropdownElement && /*#__PURE__*/(0, _jsxRuntime.jsx)(_Select.SelectDropdown, {
            open: open,
            className: "SelectDropdown",
            children: dropdownElement
          })]
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Select.SelectDisplayTrigger, {
          onClick: handleClick
        })]
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactComponentsCore.SelectProvider, {
        value: {
          value: value,
          setValue: setValue,
          setOpen: setOpen,
          multiple: multiple,
          readonly: readonly,
          compare: compare
        },
        children: /*#__PURE__*/(0, _jsxRuntime.jsxs)(_SelectMenu.SelectMenu, {
          open: open,
          expandable: expandable,
          children: [clear && /*#__PURE__*/(0, _jsxRuntime.jsx)(_Select.ClearItem, {
            value: undefined,
            children: clear
          }), children || options.map(function (option, index) {
            return /*#__PURE__*/(0, _jsxRuntime.jsx)(_SelectItem.SelectItem, {
              value: option.value,
              children: option.label
            }, index);
          })]
        })
      })]
    })
  });
}
function Select(props) {
  var _useMergeDefaultProps = (0, _reactComponentsCore.useMergeDefaultProps)("Select", props),
    required = _useMergeDefaultProps.required,
    _useMergeDefaultProps2 = _useMergeDefaultProps.multiple,
    multiple = _useMergeDefaultProps2 === void 0 ? false : _useMergeDefaultProps2,
    defaultValue = _useMergeDefaultProps.defaultValue,
    placeholder = _useMergeDefaultProps.placeholder,
    clear = _useMergeDefaultProps.clear,
    dropdownElementProp = _useMergeDefaultProps.dropdownElement,
    _useMergeDefaultProps3 = _useMergeDefaultProps.renderValue,
    renderValue = _useMergeDefaultProps3 === void 0 ? _reactComponentsCore.renderSelectValue : _useMergeDefaultProps3,
    _useMergeDefaultProps4 = _useMergeDefaultProps.autoFocus,
    autoFocus = _useMergeDefaultProps4 === void 0 ? false : _useMergeDefaultProps4,
    _useMergeDefaultProps5 = _useMergeDefaultProps.disabled,
    disabled = _useMergeDefaultProps5 === void 0 ? false : _useMergeDefaultProps5,
    _useMergeDefaultProps6 = _useMergeDefaultProps.readonly,
    readonly = _useMergeDefaultProps6 === void 0 ? false : _useMergeDefaultProps6,
    _useMergeDefaultProps7 = _useMergeDefaultProps.expandable,
    expandable = _useMergeDefaultProps7 === void 0 ? false : _useMergeDefaultProps7,
    _children = _useMergeDefaultProps.children,
    _useMergeDefaultProps8 = _useMergeDefaultProps.LabelProps,
    LabelProps = _useMergeDefaultProps8 === void 0 ? {} : _useMergeDefaultProps8,
    _useMergeDefaultProps9 = _useMergeDefaultProps.Label,
    Label = _useMergeDefaultProps9 === void 0 ? _FormControlLabel.FormControlLabel : _useMergeDefaultProps9,
    options = _useMergeDefaultProps.options,
    open = _useMergeDefaultProps.open,
    onClose = _useMergeDefaultProps.onClose,
    onOpen = _useMergeDefaultProps.onOpen,
    compare = _useMergeDefaultProps.compare,
    display = _useMergeDefaultProps.display,
    rest = (0, _objectWithoutProperties2["default"])(_useMergeDefaultProps, _excluded);
  var _useTheme = (0, _reactComponentsCore.useTheme)(),
    ChevronDown = _useTheme.icons.chevronDown;
  var dropdownElement = dropdownElementProp || /*#__PURE__*/(0, _jsxRuntime.jsx)(ChevronDown, {});
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_FormControl.FormControl, _objectSpread(_objectSpread({
    Label: [Label, LabelProps]
    // @ts-ignore
    ,
    defaultValue: defaultValue,
    disabled: disabled,
    readonly: readonly,
    required: required,
    validation: function validation(val) {
      return [(0, _reactComponentsCore.selectIsValid)(val, multiple, required), undefined];
    }
  }, rest), {}, {
    children: function children(value, setValue) {
      return /*#__PURE__*/(0, _jsxRuntime.jsx)(InnerSelect, {
        value: value,
        setValue: setValue,
        autoFocus: autoFocus,
        disabled: disabled,
        readonly: readonly,
        renderValue: renderValue,
        placeholder: placeholder,
        expandable: expandable,
        dropdownElement: dropdownElement,
        multiple: multiple,
        options: options,
        clear: clear,
        open: open,
        onClose: onClose,
        onOpen: onOpen,
        compare: compare,
        display: display,
        children: _children
      });
    }
  }));
}