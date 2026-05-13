import { text } from '@metamask/snaps-sdk';
import type { Currency } from 'xrpl';

import { AssetComponent } from '../../../../src/dialog/transaction/TransactionComponents';
import { formatXrpAmount } from '../../../../src/dialog/transaction/TransactionComponents/utils';

describe('native currency display', () => {
  test('formats native drop amounts with the PFT display code', () => {
    expect(formatXrpAmount('1000000')).toBe('1 PFT (1000000 drops)');
  });

  test('renders AMM native assets with the PFT display code', () => {
    expect(AssetComponent({ currency: 'XRP' } as Currency)).toEqual([text('**Asset**: PFT')]);
  });
});
