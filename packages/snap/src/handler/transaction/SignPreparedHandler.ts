import type { SubmittableTransaction } from 'xrpl';

import type { Context } from '../../core/Context';
import type { IHandler } from '../IHandler';
import { SignHandler } from './SignHandler';

export const SignPreparedMethod = 'xrpl_signPrepared';

export class SignPreparedHandler implements IHandler<typeof SignPreparedMethod> {
  constructor(protected readonly context: Context) {}

  async handle(origin: string, params: SubmittableTransaction): Promise<{ tx_blob: string; hash: string }> {
    const signHandler = new SignHandler(this.context);
    return signHandler.handle(origin, params, { autofill: false });
  }
}
