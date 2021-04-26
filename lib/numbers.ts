interface Options {
  padding?: boolean;
  symbols?: string[];
}
const defaultOptions = {
  padding: true,
  symbols: ["", "K", "M", "G", "T", "P", "E"],
};

export function abbreviateNumber(num: number, digit: number = 1, options?: Options | Options["symbols"]): string {
  if (Array.isArray(options)) {
    options = { symbols: options };
  }

  const { symbols, padding }: Required<Options> = Object.assign({}, defaultOptions, options);

  const sign = Math.sign(num) >= 0;
  num = Math.abs(num);

  const tier = (Math.log10(num) / 3) | 0;

  if (tier == 0) return num.toString();

  const suffix = symbols[tier];
  if (!suffix) throw new RangeError();

  const scale = Math.pow(10, tier * 3);

  const scaled = num / scale;

  let rounded = scaled.toFixed(digit);
  if (!padding) {
    rounded = String(Number(rounded));
  }

  return (!sign ? "-" : "") + rounded + suffix;
}
