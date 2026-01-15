import { BaseValidator } from "./BaseValidator";
import { TranslateFn } from "../config";
export declare class EndsWithValidator extends BaseValidator {
    end: string;
    constructor(end: string, message: string | undefined, translate: TranslateFn);
    validate(value: string): boolean;
}
