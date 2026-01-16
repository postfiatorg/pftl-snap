export interface Option {
    value: unknown;
    label: string;
}
export declare function selectIsValid(value: unknown, multiple?: boolean, required?: boolean): boolean;
