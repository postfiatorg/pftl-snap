import { BaseValidator } from "./BaseValidator";
import { TranslateFn } from "../config";
export declare class EmailValidator extends BaseValidator {
    constructor(message: string | undefined, translate: TranslateFn);
    validate(value: string): boolean;
}
