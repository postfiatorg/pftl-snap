import { BaseValidator } from "./BaseValidator";
import { TranslateFn } from "../config";
export declare class MinCharsValidator extends BaseValidator {
    chars: number;
    constructor(chars: number, message: string | undefined, translate: TranslateFn);
    validate(value: string): boolean;
}
