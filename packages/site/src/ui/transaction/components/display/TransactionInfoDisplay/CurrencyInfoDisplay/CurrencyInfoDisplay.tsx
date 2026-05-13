import clsx from 'clsx';
import { getDisplayCurrencyCode } from 'common/utils/token/currencyCode';
import { Currency } from 'xrpl';

import SimpleTextInfoDisplay from '../SimpleTextInfoDisplay/SimpleTextInfoDisplay';

export interface CurrencyInfoDisplayProps {
  className?: string;
  style?: React.CSSProperties;
  label: string;
  asset: Currency;
}

function CurrencyInfoDisplay({ className, asset, label, ...rest }: CurrencyInfoDisplayProps) {
  return (
    <SimpleTextInfoDisplay
      className={clsx('CurrencyInfoDisplay', className)}
      label={label}
      content={getDisplayCurrencyCode(asset.currency)}
      {...rest}
    />
  );
}

export default CurrencyInfoDisplay;
