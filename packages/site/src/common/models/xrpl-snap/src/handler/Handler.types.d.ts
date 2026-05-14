import type { HandlerFactory } from './HandlerFactory';

declare type Handlers = ReturnType<typeof HandlerFactory>;
export declare type HandlerMethod = keyof Handlers;
export declare type HandlerParams<Method extends HandlerMethod> = Parameters<Handlers[Method]['handle']>[1];
export declare type HandlerReturns<Method extends HandlerMethod> = ReturnType<Handlers[Method]['handle']>;
export {};
