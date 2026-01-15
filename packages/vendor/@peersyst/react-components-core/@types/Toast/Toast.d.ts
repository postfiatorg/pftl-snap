/// <reference types="react" />
import { ToastProps } from "./Toast.types";
/**
 * @deprecated Use `useToast` instead.
 */
export default function Toast({ type, duration, open: propOpen, onClose, children, }: ToastProps): JSX.Element;
