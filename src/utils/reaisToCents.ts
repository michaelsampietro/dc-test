/**
 * Converts "conventional" price to price in cents
 * @param value the amount to be converted (not in cents)
 * @returns the price in cents
 */
export const reaisToCents = (value: number) => value * 100;
