export declare abstract class BaseValidator {
    message: string;
    protected constructor(message: string);
    abstract validate(value: any): boolean;
}
