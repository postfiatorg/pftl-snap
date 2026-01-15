import { BaseValidator } from "./BaseValidator";
import { TranslateFn } from "../config";
export declare class StartsWithValidator extends BaseValidator {
    start: string;
    constructor(start: string, message: string | undefined, translate: TranslateFn);
    validate(value: string): boolean;
}
