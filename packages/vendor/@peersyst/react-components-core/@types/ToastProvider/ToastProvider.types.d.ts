import { ReactNode } from "react";
import { CoreToastProps } from "../Toast";
export type ToasterToastProps = Omit<CoreToastProps<any>, "content"> & {
    key?: number;
};
export type ShowToastProps = Omit<CoreToastProps<any>, "content" | "open">;
export interface ToastContextType {
    showToast: (content: ReactNode, props?: ShowToastProps) => unknown;
    hideToast: () => unknown;
    removeToast: () => unknown;
    toasts: ToasterState;
}
export interface ToasterToast {
    content: ReactNode;
    props?: ToasterToastProps;
}
export type ToasterState = ToasterToast[];
export declare enum ToasterActionType {
    SHOW_TOAST = 0,
    HIDE_TOAST = 1,
    REMOVE_TOAST = 2
}
export interface ShowToastAction {
    type: ToasterActionType.SHOW_TOAST;
    payload: {
        content: ReactNode;
        props?: ShowToastProps;
    };
}
export interface HideToastAction {
    type: ToasterActionType.HIDE_TOAST;
}
export interface RemoveToastAction {
    type: ToasterActionType.REMOVE_TOAST;
}
export type ToasterAction = ShowToastAction | HideToastAction | RemoveToastAction;
