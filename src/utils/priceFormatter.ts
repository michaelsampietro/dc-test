/**
 * This method formats the value the value to be displayed to the user.
 * @param value value to be formatted (in cents)
 * @returns the price formatted
 */
export const priceFormatter = (value: number) => `R$ ${value / 100}`;