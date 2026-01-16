export interface UseNumericInputParams {
    locale?: string;
    maxDecimals?: number;
}
export interface UseNumericInputReturn {
    format: (value: string) => string;
    parse: (newValue: string, prev: string) => string;
}
export default function useNumericInput({ locale, maxDecimals, }?: UseNumericInputParams): UseNumericInputReturn;
