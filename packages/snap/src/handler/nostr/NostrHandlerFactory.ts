import type { Context } from '../../core/Context';
import { GetNostrPublicKeyHandler, GetNostrPublicKeyMethod } from './GetNostrPublicKeyHandler';
import { ImportNostrKeyHandler, ImportNostrKeyMethod } from './ImportNostrKeyHandler';
import { SignEventHandler, SignEventMethod } from './SignEventHandler';

export type NostrMethod =
  | typeof ImportNostrKeyMethod
  | typeof SignEventMethod
  | typeof GetNostrPublicKeyMethod;

export const NostrHandlerFactory = (context: Context) => ({
  [ImportNostrKeyMethod]: new ImportNostrKeyHandler(context),
  [SignEventMethod]: new SignEventHandler(context),
  [GetNostrPublicKeyMethod]: new GetNostrPublicKeyHandler(context),
});

