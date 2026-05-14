import type { Transaction } from 'xrpl';

import type { Context } from '../../core/Context';
import type { IHandler } from '../IHandler';

export declare const SignPreparedMethod = 'xrpl_signPrepared';
export declare class SignPreparedHandler implements IHandler<typeof SignPreparedMethod> {
  protected readonly context: Context;

  constructor(context: Context);

  handle(
    origin: string,
    params: Transaction,
  ): Promise<{
    tx_blob: string;
    hash: string;
  }>;
}
