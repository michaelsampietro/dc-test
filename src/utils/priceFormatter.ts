/**
 * This method formats the value the value to be displayed to the user.
 * @param value value to be formatted (in cents)
 * @returns the price formatted
 */
export const formatPrice = (value: number) =>
  (value / 100).toLocaleString('pt-br', { style: 'currency', currency: 'BRL' });
