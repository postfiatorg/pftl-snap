"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = Upload;
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));
var _react = require("react");
var _helpers = require("./helpers");
var _Upload = require("./Upload.styles");
var _reactUtils = require("@peersyst/react-utils");
var _FormControl = require("../FormControl");
var _FormControlLabel = require("../FormControlLabel");
var _reactComponentsCore = require("@peersyst/react-components-core");
var _jsxRuntime = require("react/jsx-runtime");
var _excluded = ["defaultValue", "fileTypes", "multiple", "children", "readonly", "disabled", "LabelProps", "Label"];
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { (0, _defineProperty2["default"])(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function Upload(props) {
  var _useMergeDefaultProps = (0, _reactComponentsCore.useMergeDefaultProps)("Upload", props),
    defaultValue = _useMergeDefaultProps.defaultValue,
    fileTypes = _useMergeDefaultProps.fileTypes,
    multiple = _useMergeDefaultProps.multiple,
    _children = _useMergeDefaultProps.children,
    _useMergeDefaultProps2 = _useMergeDefaultProps.readonly,
    readonly = _useMergeDefaultProps2 === void 0 ? false : _useMergeDefaultProps2,
    _useMergeDefaultProps3 = _useMergeDefaultProps.disabled,
    disabled = _useMergeDefaultProps3 === void 0 ? false : _useMergeDefaultProps3,
    _useMergeDefaultProps4 = _useMergeDefaultProps.LabelProps,
    LabelProps = _useMergeDefaultProps4 === void 0 ? {} : _useMergeDefaultProps4,
    _useMergeDefaultProps5 = _useMergeDefaultProps.Label,
    Label = _useMergeDefaultProps5 === void 0 ? _FormControlLabel.FormControlLabel : _useMergeDefaultProps5,
    rest = (0, _objectWithoutProperties2["default"])(_useMergeDefaultProps, _excluded);
  var _useState = (0, _react.useState)(false),
    _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
    drag = _useState2[0],
    setDrag = _useState2[1];
  var active = !disabled && !readonly;
  var directory = fileTypes === "directory";
  var uploadRef = /*#__PURE__*/(0, _react.createRef)();
  var handleDragEnter = function handleDragEnter(e) {
    (0, _reactUtils.nullifyEvent)(e);
    var valid = active && e.dataTransfer.items && (multiple ? e.dataTransfer.items.length > 0 : e.dataTransfer.items.length === 1) && (0, _helpers.checkFileTypes)(e.dataTransfer.items, fileTypes);
    valid && setDrag(true);
  };
  var handleDragLeave = function handleDragLeave(e) {
    (0, _reactUtils.nullifyEvent)(e);
    setDrag(false);
  };
  var directoryProps = directory ? {
    directory: "",
    webkitdirectory: "",
    mozdirectory: ""
  } : {};
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_FormControl.FormControl, _objectSpread(_objectSpread({
    Label: [Label, LabelProps],
    defaultValue: defaultValue,
    readonly: readonly,
    disabled: disabled
  }, rest), {}, {
    children: function children(value, setValue) {
      var handleChange = function handleChange() {
        var newFiles = (0, _helpers.getValueFromInput)(uploadRef, multiple);
        setValue(newFiles);
      };
      var handleDrop = function handleDrop(e) {
        (0, _reactUtils.nullifyEvent)(e);
        if (drag) {
          setDrag(false);
          var files = (0, _helpers.getValue)(e.dataTransfer.files, multiple);
          setValue(files);
        }
      };
      var styleProps = {
        readonly: readonly,
        disabled: disabled,
        drag: drag
      };
      return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_Upload.UploadRoot, _objectSpread(_objectSpread({
        className: (0, _reactUtils.cx)("Upload", readonly && "Readonly", disabled && "Disabled", drag && "Drag"),
        onClick: readonly || disabled ? function () {
          return undefined;
        } : function () {
          var _uploadRef$current;
          return uploadRef == null || (_uploadRef$current = uploadRef.current) == null ? void 0 : _uploadRef$current.click();
        },
        onDragEnter: handleDragEnter,
        onDragLeave: handleDragLeave,
        onDragOver: _reactUtils.nullifyEvent,
        onDrop: handleDrop
      }, styleProps), {}, {
        children: [typeof _children === "function" ? _children(drag) : _children, active && /*#__PURE__*/(0, _jsxRuntime.jsx)("input", _objectSpread({
          "data-testid": "upload",
          ref: uploadRef,
          type: "file",
          value: "",
          accept: (0, _helpers.getFileTypes)(fileTypes),
          multiple: multiple,
          onChange: handleChange
        }, directoryProps))]
      }));
    }
  }));
}