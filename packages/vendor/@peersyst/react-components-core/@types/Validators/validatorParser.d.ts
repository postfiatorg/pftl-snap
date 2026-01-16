import { IValidator, Validator, Validators } from "./Validators.types";
import { TranslateFn, ExtraValidators } from "../config";
import { BaseValidator } from "./BaseValidator";
export declare const parseValidator: (validator: keyof Validators & keyof ExtraValidators, param: Validator<unknown>, extraValidators: Record<keyof ExtraValidators, IValidator>, translate: TranslateFn) => BaseValidator;
export default function (validators: Validators & Partial<ExtraValidators>, extraValidators: Record<keyof ExtraValidators, IValidator>, translate: TranslateFn): BaseValidator[];
