import type { IssuedCurrencyAmount } from 'xrpl';

import { parseCurrencyCode } from './currency-code';
import { dropsToXrp } from './xrp-conversion';

const POST_FIAT_NATIVE_CURRENCY_CODE = 'PFT';

export const formatXrpAmount = (amount: string): string => {
  const xrpAmount = dropsToXrp(amount);
  return `${xrpAmount} ${POST_FIAT_NATIVE_CURRENCY_CODE} (${amount} drops)`;
};

export const formatIOUAmount = ({ currency, value }: IssuedCurrencyAmount): string => {
  return `${value} ${parseCurrencyCode(currency)}`;
};
