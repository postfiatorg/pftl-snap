/// <reference types="react" />
import { ToasterAction, ToasterState } from "../ToastProvider.types";
export declare function useToasterReducer(): [ToasterState, import("react").Dispatch<ToasterAction>];
