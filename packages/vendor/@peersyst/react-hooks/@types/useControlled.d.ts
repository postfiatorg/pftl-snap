export default function useControlled<T>(defaultValue: T, value?: T, onChange?: (value: T) => unknown): [T, (value: T) => unknown];
