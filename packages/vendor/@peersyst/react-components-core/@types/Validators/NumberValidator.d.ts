import { BaseValidator } from "./BaseValidator";
import { TranslateFn } from "../config";
export interface NumberValidatorOptions {
    greaterThan?: number;
    greaterEqualThan?: number;
    equalThan?: number;
    lowerThan?: number;
    lowerEqualThan?: number;
}
export declare class NumberValidator extends BaseValidator {
    private readonly options;
    constructor(message: string | undefined, translate: TranslateFn, options?: NumberValidatorOptions);
    validate(value: string): boolean;
}
