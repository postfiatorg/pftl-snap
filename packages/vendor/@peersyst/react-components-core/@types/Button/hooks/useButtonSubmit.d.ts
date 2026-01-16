import { ButtonType } from "@peersyst/react-components-core";
export interface UseButtonSubmitParams {
    disabled: boolean;
    loading: boolean;
    type?: ButtonType;
    action?: string;
}
export interface UseButtonSubmitResult {
    /**
     * Button can be interacted with
     */
    enabled: boolean;
    /**
     * Submit form handler with implicit action
     */
    handleSubmit: (() => void) | undefined;
}
export default function useButtonSubmit({ disabled, loading, type, action, }: UseButtonSubmitParams): UseButtonSubmitResult;
