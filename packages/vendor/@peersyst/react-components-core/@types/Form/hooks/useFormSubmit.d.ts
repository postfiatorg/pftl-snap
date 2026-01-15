import { FieldState } from "../Form.types";
interface UseFormSubmitResult {
    submitted: boolean;
    handleSubmit: (action?: string) => void;
}
export default function useFormSubmit(data: Record<string, FieldState>, onSubmit: (data: any, action?: string) => any, onInvalid?: () => any): UseFormSubmitResult;
export {};
