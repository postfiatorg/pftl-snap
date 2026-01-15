import { BaseValidator } from "./BaseValidator";
import { TranslateFn } from "../config";
export declare class NotEqualValidator extends BaseValidator {
    private readonly compare;
    constructor(message: string | undefined, translate: TranslateFn, compare: string);
    validate(value: string): boolean;
}
