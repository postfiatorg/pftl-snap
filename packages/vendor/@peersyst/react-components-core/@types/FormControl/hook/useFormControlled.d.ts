export interface UseFormControlledResult<T> {
    state: [T, (v: T) => any];
    modified: boolean;
}
export default function <T>(defaultValue: T, value?: T, onChange?: (value: T) => unknown): UseFormControlledResult<T>;
