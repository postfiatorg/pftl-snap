"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.checkFileTypes = checkFileTypes;
exports.getFileType = getFileType;
exports.getFileTypes = getFileTypes;
exports.getValue = getValue;
exports.getValueFromInput = getValueFromInput;
function getValue(newFiles, multiple) {
  if (multiple) return newFiles.length ? newFiles : undefined;else if (newFiles.length === 1) return newFiles[0];else return undefined;
}
function getValueFromInput(uploadRef, multiple) {
  var _uploadRef$current;
  var newFiles = ((_uploadRef$current = uploadRef.current) == null ? void 0 : _uploadRef$current.files) || [];
  return getValue(newFiles, multiple);
}
function getFileType(fileType) {
  switch (fileType) {
    case "all":
    case "directory":
      return undefined;
    case "image":
      return "image/*";
    case "video":
      return "video/*";
    default:
      return fileType;
  }
}
function getFileTypes(fileTypes) {
  if (typeof fileTypes === "string") return getFileType(fileTypes);else return fileTypes == null ? void 0 : fileTypes.map(function (f) {
    return getFileType(f);
  }).join(",");
}
function checkFileTypes(fileList, fileTypes) {
  var _getFileTypes;
  var types = fileTypes && ((_getFileTypes = getFileTypes(fileTypes)) == null ? void 0 : _getFileTypes.split(","));
  if (!types || types.includes("all")) return true;
  var _loop = function _loop(i) {
      if (!types.some(function (type) {
        var _fileList$i;
        return (_fileList$i = fileList[i]) == null ? void 0 : _fileList$i.type.match(type);
      })) return {
        v: false
      };
    },
    _ret;
  for (var i = 0; i < fileList.length; i++) {
    _ret = _loop(i);
    if (_ret) return _ret.v;
  }
  return true;
}