export interface UseDebounceResult<T> {
    value: T;
    handleChange: (debouncedValue: T) => void;
    debouncedValue: T;
    debouncing: boolean;
}
export interface UseDebounceOptions<T> {
    onChange?: (value: T) => void;
    callback?: (debouncedValue: T) => any;
    delay?: number;
}
export default function <T>(defaultValue: T, { onChange, callback, delay }?: UseDebounceOptions<T>): UseDebounceResult<T>;
