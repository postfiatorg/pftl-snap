import { CustomValidators, Validators } from "../../Validators";
export declare function useTextInputValidation(rawValidators?: Validators, customValidators?: CustomValidators): (value: string) => [boolean, string | undefined];
