import { getDisplayCurrencyCode, POST_FIAT_NATIVE_CURRENCY_CODE } from 'common/utils/token/currencyCode';

describe('getDisplayCurrencyCode', () => {
  test('displays the XRPL-native currency code as PFT', () => {
    expect(getDisplayCurrencyCode('XRP')).toBe(POST_FIAT_NATIVE_CURRENCY_CODE);
  });

  test('preserves issued currency display parsing', () => {
    expect(getDisplayCurrencyCode('USD')).toBe('USD');
  });
});
