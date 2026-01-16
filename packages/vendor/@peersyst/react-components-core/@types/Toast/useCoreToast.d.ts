import { CoreToastProps } from "./Toast.types";
import { CoreAlertProps } from "../Alert";
export interface ToastComps {
    open: boolean;
    setOpen: (open: boolean) => void;
}
export interface UseCoreToastResult<ToastPosition, AlertProps extends CoreAlertProps, ToastProps extends CoreToastProps<ToastPosition, AlertProps>> {
    props: ToastProps;
    comps: ToastComps;
}
export default function useCoreToast<ToastPosition, AlertProps extends CoreAlertProps, ToastProps extends CoreToastProps<ToastPosition, AlertProps>>(rawProps: ToastProps): UseCoreToastResult<ToastPosition, AlertProps, ToastProps>;
