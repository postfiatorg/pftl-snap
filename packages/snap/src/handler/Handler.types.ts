import type { HandlerFactory } from './HandlerFactory';

type Handlers = ReturnType<typeof HandlerFactory>;

export type HandlerMethod = keyof Handlers;

export type HandlerParams<Method extends HandlerMethod> = Parameters<Handlers[Method]['handle']>[1];

export type HandlerReturns<Method extends HandlerMethod> = ReturnType<Handlers[Method]['handle']>;
