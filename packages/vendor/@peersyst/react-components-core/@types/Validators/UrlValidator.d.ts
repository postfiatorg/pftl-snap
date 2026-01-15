import { BaseValidator } from "./BaseValidator";
import { TranslateFn } from "../config";
export declare class UrlValidator extends BaseValidator {
    constructor(message: string | undefined, translate: TranslateFn);
    validate(value: string): boolean;
}
