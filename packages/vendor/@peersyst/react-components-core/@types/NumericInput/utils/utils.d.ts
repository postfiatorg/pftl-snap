export declare function getDecimalSeparator(locale?: string): string;
export declare function getGroupSeparator(locale?: string): string;
export declare function formatInt(value: string): string;
export declare const formatNumber: (value: string, locale: string, maxDecimals?: number) => string;
export declare const isNumber: (str: string) => boolean;
export declare const parseNumber: (value: string, maxDecimals?: number) => string;
