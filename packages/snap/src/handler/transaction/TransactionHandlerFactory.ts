import type { Context } from '../../core/Context';
import { SignAndSubmitHandler, SignAndSubmitMethod } from './SignAndSubmitHandler';
import { SignHandler, SignMethod } from './SignHandler';
import { SignMessageHandler, SignMessageMethod } from './SignMessageHandler';
import { SignPreparedHandler, SignPreparedMethod } from './SignPreparedHandler';
import { SubmitHandler, SubmitMethod } from './SubmitHandler';

export type TransactionMethod =
  | typeof SignAndSubmitMethod
  | typeof SubmitMethod
  | typeof SignMethod
  | typeof SignPreparedMethod
  | typeof SignMessageMethod;

export const TransactionHandlerFactory = (context: Context) => ({
  [SignAndSubmitMethod]: new SignAndSubmitHandler(context),
  [SubmitMethod]: new SubmitHandler(context),
  [SignMethod]: new SignHandler(context),
  [SignPreparedMethod]: new SignPreparedHandler(context),
  [SignMessageMethod]: new SignMessageHandler(context),
});
