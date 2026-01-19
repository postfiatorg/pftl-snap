const DROP_DECIMALS = 6n;
const DROP_FACTOR = 10n ** DROP_DECIMALS;

export const toDrops = (input: string): string | null => {
  const trimmed = input.trim();
  if (!trimmed) {
    return null;
  }
  if (!/^\d+(\.\d+)?$/.test(trimmed)) {
    return null;
  }
  const [whole, fraction = ''] = trimmed.split('.');
  const paddedFraction = (fraction + '000000').slice(0, 6);
  const drops = BigInt(whole) * DROP_FACTOR + BigInt(paddedFraction);
  return drops.toString();
};

export const dropsToXrp = (drops: string): string => {
  const value = BigInt(drops || '0');
  const whole = value / DROP_FACTOR;
  const fraction = (value % DROP_FACTOR).toString().padStart(6, '0');
  const trimmedFraction = fraction.replace(/0+$/, '');
  return trimmedFraction ? `${whole}.${trimmedFraction}` : whole.toString();
};

export const stringToHex = (value: string): string => {
  const encoder = new TextEncoder();
  const bytes = encoder.encode(value);
  return Array.from(bytes)
    .map((byte) => byte.toString(16).padStart(2, '0'))
    .join('')
    .toUpperCase();
};

export const shortenAddress = (address: string, head = 6, tail = 4): string => {
  if (!address) {
    return '';
  }
  if (address.length <= head + tail + 2) {
    return address;
  }
  return `${address.slice(0, head)}...${address.slice(-tail)}`;
};

export const isLikelyXrplAddress = (address: string): boolean => {
  if (!address) {
    return false;
  }
  return /^r[1-9A-HJ-NP-Za-km-z]{25,34}$/.test(address.trim());
};
