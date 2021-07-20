
/**
 * This method calculates the total value of the order.
 * @param amount order amount (in cents) without delivery fee 
 * @param deliveryFee order delivery fee (in cents). (Optional, if no value, 0 is used)
 * @returns the total value of the order (in cents)
 */
 export const calculateOrderTotalValue = (amount: number, deliveryFee: number = 0) => {
   return amount + deliveryFee;
 };