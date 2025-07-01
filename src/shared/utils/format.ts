/**
 * Formats a numeric string (or number) into a currency string like `$1,234`
 *
 * @param value - The input string or number
 * @returns A formatted currency string or empty string
 *
 * @example
 * ```ts
 * formatCurrency('1200'); // "$1,200"
 * formatCurrency(4500);   // "$4,500"
 * ```
 */
export function formatCurrency(value: string | number): string {
  const numeric = typeof value === 'string' ? value.replace(/[^\d]/g, '') : value;

  const num = Number(numeric);

  return !isNaN(num) && num !== 0 ? `$${num.toLocaleString()}` : '';
}

/**
 * Parses a currency-formatted string like `$1,234` into a number
 *
 * @param value - The currency string
 * @returns A number (e.g. 1234)
 *
 * @example
 * ```ts
 * parseCurrency('$1,234'); // 1234
 * parseCurrency('2,500');  // 2500
 * ```
 */
export function parseCurrency(value: string): number {
  const numeric = value.replace(/[^\d]/g, '');
  return Number(numeric);
}
