import { Col, Select, TextField, Typography, useTheme, useToast } from '@peersyst/react-components';
import { useState } from 'react';
import useWalletState from 'ui/adapter/state/useWalletState';
import ControllerFactory from 'ui/adapter/ControllerFactory';
import Button from 'ui/common/components/input/Button/Button';
import NumericField from 'ui/common/components/input/NumericField/NumericField';
import { useTranslate } from 'ui/locale';
import { useXrplService } from 'ui/xrpl/hooks/useXrplService';
import type { TrustSet } from 'xrpl';

import { TokenDetails } from '../../../../common/models/token.types';

interface TrustLineModalFormProps {
  onClose: () => void;
}

interface TokenInfo {
  domain?: string;
  blackholed: boolean;
  rippling: boolean;
  kyced: boolean;
}

interface TokenOption {
  label: string;
  value: TokenDetails;
}

const DEFAULT_TRUST_LIMIT = '9999999';

// XRPL Account Flags
const ACCOUNT_FLAG = {
  BLACKHOLED: 0x00100000,
  RIPPLING: 0x00800000,
  KYC: 0x00400000,
} as const;

export default function TrustLineModalForm({ onClose }: TrustLineModalFormProps) {
  const translate = useTranslate();
  const { spacing } = useTheme();
  const xrplService = useXrplService();
  const { address } = useWalletState();
  const { showToast } = useToast();

  const [issuer, setIssuer] = useState('');
  const [tokens, setTokens] = useState<TokenDetails[]>([]);
  const [selectedToken, setSelectedToken] = useState<TokenDetails | undefined>();
  const [tokenInfo, setTokenInfo] = useState<TokenInfo | null>(null);
  const [limit, setLimit] = useState(DEFAULT_TRUST_LIMIT);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const uniqueTokens = Array.from(new Map(tokens.map((token) => [token.currency, token])).values());
  const tokenOptions: TokenOption[] = uniqueTokens.map((token) => ({
    label: token.currency,
    value: token,
  }));

  const searchTokens = async () => {
    setError(null);
    setLoading(true);
    try {
      const accountInfo = await xrplService.getAccountInfo(issuer);

      const flags = accountInfo.Flags || 0;
      const domain = accountInfo.Domain ? Buffer.from(accountInfo.Domain, 'hex').toString('utf-8') : undefined;

      // Using numeric operations to check flags
      const checkFlag = (flag: number): boolean => {
        // eslint-disable-next-line no-bitwise
        return (flags & flag) === flag;
      };

      setTokenInfo({
        domain,
        blackholed: checkFlag(ACCOUNT_FLAG.BLACKHOLED),
        rippling: checkFlag(ACCOUNT_FLAG.RIPPLING),
        kyced: checkFlag(ACCOUNT_FLAG.KYC),
      });

      const foundTokens = await xrplService.getIOUTokens(issuer);
      setTokens(foundTokens);
    } catch (error) {
      console.error('Failed to fetch tokens:', error);
      setError('Failed to fetch tokens. Please try again.');
      setTokenInfo(null);
    } finally {
      setLoading(false);
    }
  };

  const selectToken = async (token: TokenDetails | undefined) => {
    setError(null);
    if (token) {
      if (token.issuer !== issuer) {
        console.warn('Token issuer does not match input issuer:', {
          tokenIssuer: token.issuer,
          inputIssuer: issuer,
        });
      }
      setSelectedToken(token);
    }
  };

  const submit = async () => {
    if (!selectedToken || !limit || !address) {
      return;
    }

    setError(null);
    setLoading(true);
    try {
      const limitValue = limit.toString();
      const trustSetTx: TrustSet = {
        TransactionType: 'TrustSet',
        Account: address,
        Flags: 0,
        LimitAmount: {
          currency: selectedToken.currency,
          issuer,
          value: limitValue,
        },
      };

      await ControllerFactory.transactionController.signAndSubmitTransaction(trustSetTx);

      showToast(translate('trustLineCreated'), { type: 'success' });
      onClose();
    } catch (err) {
      console.error('Failed to create trust line:', err);
      const error = err as Error;
      setError(error?.message || 'Failed to create trust line. Please try again.');
      showToast(error?.message || translate('trustLineCreationFailed'), { type: 'error' });
    } finally {
      setLoading(false);
    }
  };

  return (
    <Col gap={spacing[4]}>
      <TextField label={translate('issuerAddress')} value={issuer} onChange={setIssuer} />
      <Button
        onClick={() => {
          searchTokens().catch(console.error);
        }}
        disabled={!issuer || loading}
        variant="primary"
      >
        {translate('searchTokens')}
      </Button>
      {error && (
        <Typography color="error" variant="body2">
          {error}
        </Typography>
      )}
      {tokenInfo && (
        <Col gap={spacing[2]}>
          <Typography variant="body1">{translate('details')}:</Typography>
          <Typography variant="body2">
            Domain:
            {tokenInfo.domain ? (
              <a
                href={`https://${tokenInfo.domain}`}
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: 'inherit', textDecoration: 'underline' }}
              >
                {tokenInfo.domain}
              </a>
            ) : (
              'N/A'
            )}
          </Typography>
          <Typography variant="body2">Blackholed: {tokenInfo.blackholed ? 'Yes' : 'No'}</Typography>
          <Typography variant="body2">Rippling: {tokenInfo.rippling ? 'Enabled' : 'Disabled'}</Typography>
          <Typography variant="body2">KYCed: {tokenInfo.kyced ? 'Yes' : 'No'}</Typography>
        </Col>
      )}
      {tokens.length > 0 && (
        <Select
          label={translate('selectToken')}
          options={tokenOptions}
          value={selectedToken}
          onChange={(token) => {
            selectToken(token).catch(console.error);
          }}
        />
      )}
      {selectedToken && <NumericField label={translate('trustLimit')} value={limit} onChange={setLimit} maxDecimals={7} />}
      <Button
        onClick={() => {
          submit().catch(console.error);
        }}
        disabled={!selectedToken || !limit || loading}
        variant="primary"
        loading={loading}
      >
        {translate('addTrustLine')}
      </Button>
    </Col>
  );
}
