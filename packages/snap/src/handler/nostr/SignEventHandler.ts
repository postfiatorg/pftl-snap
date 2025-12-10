import { finalizeEvent } from 'nostr-tools';

import type { Context } from '../../core/Context';
import type { IHandler } from '../IHandler';

export const SignEventMethod = 'nostr_signEvent';

export class SignEventHandler implements IHandler<typeof SignEventMethod> {
  constructor(protected readonly context: Context) {}

  async handle(origin: string, params: { event: any }): Promise<any> {
    const wallet = this.context.wallet;
    
    // Private key from Wallet is hex string
    const hexKey = wallet.privateKey;

    // Convert hex to Uint8Array for nostr-tools
    const sk = Buffer.from(hexKey, 'hex');
    
    // Sign the event template
    // finalizeEvent(eventTemplate, secretKey) returns the full signed event
    const signedEvent = finalizeEvent(params.event, sk);
    
    return signedEvent;
  }
}

