import { MethodNotSupportedError, type Json, type OnRpcRequestHandler } from '@metamask/snaps-sdk';

import { Context } from './core/Context';
import { HandlerFactory } from './handler/HandlerFactory';

/**
 * SECURITY FIX: Rate limiter for snap RPC handlers.
 * Prevents abuse by limiting the number of requests per origin
 * within a given time window.
 *
 * Limits: 10 requests per origin per 60-second window.
 */
class RateLimiter {
  private readonly windows = new Map<string, { count: number; resetAt: number }>();

  /** Maximum requests allowed per origin within a single window. */
  private readonly maxRequests = 10;

  /** Duration of each rate limit window in milliseconds (60 seconds). */
  private readonly windowMs = 60_000;

  isAllowed(origin: string): boolean {
    const now = Date.now();
    const entry = this.windows.get(origin);

    // If no entry or window has expired, create a fresh window
    if (!entry || now > entry.resetAt) {
      this.windows.set(origin, { count: 1, resetAt: now + this.windowMs });
      return true;
    }

    // If within the window, check the count
    if (entry.count >= this.maxRequests) {
      return false;
    }

    entry.count++;
    return true;
  }

  /** Clean up expired entries to prevent memory leaks. */
  cleanup(): void {
    const now = Date.now();
    for (const [origin, entry] of this.windows) {
      if (now > entry.resetAt) {
        this.windows.delete(origin);
      }
    }
  }
}

const rateLimiter = new RateLimiter();

// Periodically clean up expired rate limit entries
const cleanupInterval = setInterval(() => rateLimiter.cleanup(), rateLimiter.windowMs);
if (typeof cleanupInterval === 'object' && cleanupInterval !== null && 'unref' in cleanupInterval) {
  (cleanupInterval as { unref: () => void }).unref();
}

export const onRpcRequest: OnRpcRequestHandler = async ({ origin, request }): Promise<Json> => {
  // Apply rate limiting per origin
  if (!rateLimiter.isAllowed(origin)) {
    throw new Error(`Rate limit exceeded for origin ${origin}. Please try again later.`);
  }

  const handlers = HandlerFactory(await Context.init());
  // eslint-disable-next-line no-prototype-builtins
  if (!handlers.hasOwnProperty(request.method)) {
    throw new MethodNotSupportedError(`Handler method ${request.method} not found`);
  }
  return handlers[request.method].handle(origin, request.params as any) as any;
};
