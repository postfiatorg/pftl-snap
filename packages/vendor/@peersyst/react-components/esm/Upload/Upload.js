import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
var _excluded = ["defaultValue", "fileTypes", "multiple", "children", "readonly", "disabled", "LabelProps", "Label"];
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
import { createRef, useState } from "react";
import { checkFileTypes, getFileTypes, getValue, getValueFromInput } from "./helpers";
import { UploadRoot } from "./Upload.styles";
import { nullifyEvent, cx } from "@peersyst/react-utils";
import { FormControl } from "../FormControl";
import { FormControlLabel } from "../FormControlLabel";
import { useMergeDefaultProps } from "@peersyst/react-components-core";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
export default function Upload(props) {
  var _useMergeDefaultProps = useMergeDefaultProps("Upload", props),
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
    Label = _useMergeDefaultProps5 === void 0 ? FormControlLabel : _useMergeDefaultProps5,
    rest = _objectWithoutProperties(_useMergeDefaultProps, _excluded);
  var _useState = useState(false),
    _useState2 = _slicedToArray(_useState, 2),
    drag = _useState2[0],
    setDrag = _useState2[1];
  var active = !disabled && !readonly;
  var directory = fileTypes === "directory";
  var uploadRef = /*#__PURE__*/createRef();
  var handleDragEnter = function handleDragEnter(e) {
    nullifyEvent(e);
    var valid = active && e.dataTransfer.items && (multiple ? e.dataTransfer.items.length > 0 : e.dataTransfer.items.length === 1) && checkFileTypes(e.dataTransfer.items, fileTypes);
    valid && setDrag(true);
  };
  var handleDragLeave = function handleDragLeave(e) {
    nullifyEvent(e);
    setDrag(false);
  };
  var directoryProps = directory ? {
    directory: "",
    webkitdirectory: "",
    mozdirectory: ""
  } : {};
  return /*#__PURE__*/_jsx(FormControl, _objectSpread(_objectSpread({
    Label: [Label, LabelProps],
    defaultValue: defaultValue,
    readonly: readonly,
    disabled: disabled
  }, rest), {}, {
    children: function children(value, setValue) {
      var handleChange = function handleChange() {
        var newFiles = getValueFromInput(uploadRef, multiple);
        setValue(newFiles);
      };
      var handleDrop = function handleDrop(e) {
        nullifyEvent(e);
        if (drag) {
          setDrag(false);
          var files = getValue(e.dataTransfer.files, multiple);
          setValue(files);
        }
      };
      var styleProps = {
        readonly: readonly,
        disabled: disabled,
        drag: drag
      };
      return /*#__PURE__*/_jsxs(UploadRoot, _objectSpread(_objectSpread({
        className: cx("Upload", readonly && "Readonly", disabled && "Disabled", drag && "Drag"),
        onClick: readonly || disabled ? function () {
          return undefined;
        } : function () {
          var _uploadRef$current;
          return uploadRef == null || (_uploadRef$current = uploadRef.current) == null ? void 0 : _uploadRef$current.click();
        },
        onDragEnter: handleDragEnter,
        onDragLeave: handleDragLeave,
        onDragOver: nullifyEvent,
        onDrop: handleDrop
      }, styleProps), {}, {
        children: [typeof _children === "function" ? _children(drag) : _children, active && /*#__PURE__*/_jsx("input", _objectSpread({
          "data-testid": "upload",
          ref: uploadRef,
          type: "file",
          value: "",
          accept: getFileTypes(fileTypes),
          multiple: multiple,
          onChange: handleChange
        }, directoryProps))]
      }));
    }
  }));
}