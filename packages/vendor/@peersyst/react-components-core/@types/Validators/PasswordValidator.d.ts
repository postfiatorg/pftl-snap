import { BaseValidator } from "./BaseValidator";
import { TranslateFn } from "../config";
export declare class PasswordValidator extends BaseValidator {
    constructor(message: string | undefined, translate: TranslateFn);
    validate(value: string): boolean;
}
