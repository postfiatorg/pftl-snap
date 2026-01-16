export declare class TimeoutPromiseError extends Error {
    constructor();
}
export default function timeoutPromise<T>(promise: Promise<T>, ms: number): Promise<T>;
