import { ToastContextType } from "../ToastProvider.types";
export interface UseToastResult {
    showToast: ToastContextType["showToast"];
    hideToast: ToastContextType["hideToast"];
    toastActive: boolean;
}
export declare function useToast(): UseToastResult;
