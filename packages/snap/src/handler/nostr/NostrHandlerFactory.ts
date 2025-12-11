import type { Context } from '../../core/Context';
import { DecryptNip44Handler, DecryptNip44Method } from './DecryptNip44Handler';
import { EncryptNip44Handler, EncryptNip44Method } from './EncryptNip44Handler';
import { GetNostrPublicKeyHandler, GetNostrPublicKeyMethod } from './GetNostrPublicKeyHandler';
import { ImportNostrKeyHandler, ImportNostrKeyMethod } from './ImportNostrKeyHandler';
import { SignEventHandler, SignEventMethod } from './SignEventHandler';

export type NostrMethod =
  | typeof ImportNostrKeyMethod
  | typeof SignEventMethod
  | typeof GetNostrPublicKeyMethod
  | typeof EncryptNip44Method
  | typeof DecryptNip44Method;

export const NostrHandlerFactory = (context: Context) => ({
  [ImportNostrKeyMethod]: new ImportNostrKeyHandler(context),
  [SignEventMethod]: new SignEventHandler(context),
  [GetNostrPublicKeyMethod]: new GetNostrPublicKeyHandler(context),
  [EncryptNip44Method]: new EncryptNip44Handler(context),
  [DecryptNip44Method]: new DecryptNip44Handler(context),
});
