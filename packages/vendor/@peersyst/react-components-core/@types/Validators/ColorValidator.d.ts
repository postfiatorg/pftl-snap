import { BaseValidator } from "./BaseValidator";
import { TranslateFn } from "../config";
export type ValidatorColor = "hex" | "hsl" | "name" | "rgb" | "special-name" | "hwb" | "lab";
export type ColorValidatorType = true | ValidatorColor | ValidatorColor[];
export declare class ColorValidator extends BaseValidator {
    colorValidators: ((value: string) => boolean)[];
    constructor(type: ColorValidatorType, message: string | undefined, translate: TranslateFn);
    validate(value: string): boolean;
}
