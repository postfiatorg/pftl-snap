import { RefObject } from "react";
import { FileType, FileTypes } from "./Upload.types";
export declare function getValue(newFiles: FileList, multiple?: boolean): File | FileList | undefined;
export declare function getValueFromInput(uploadRef: RefObject<HTMLInputElement>, multiple?: boolean): File | FileList | undefined;
export declare function getFileType(fileType: FileType | string): string | undefined;
export declare function getFileTypes(fileTypes?: FileTypes): string | undefined;
export declare function checkFileTypes(fileList: DataTransferItemList, fileTypes?: FileTypes): boolean;
