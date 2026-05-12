export const MOCKED_ADDRESS = 'rDk7FQvkQxQQNGTtfM2Fr66s7Nm3k87vdS';
export const MOCKED_PUBLIC_KEY = '0369C9BC4D18FAE741898828A1F48E53E53F6F3DB3191441CC85A14D4FC140E031';

/**
 * SECURITY: WalletMock no longer exposes a mock private key.
 * Private keys are transient and never persisted.
 */
export class WalletMock {
  address = MOCKED_ADDRESS;

  publicKey = MOCKED_PUBLIC_KEY;

  /** Private key is no longer exposed as a property. */
  private _privateKey = '000000000000000000000000000000000000000000000000000000000000000000';

  sign = jest.fn().mockResolvedValue({ tx_blob: 'tx_blob', hash: 'hash' });

  signMessage = jest.fn().mockResolvedValue('signature');

  static derive = jest.fn().mockResolvedValue(new WalletMock());
}
