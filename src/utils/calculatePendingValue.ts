import { Payment } from "../types/Payment";

/**
 * This method calculates how much is left for the customer to pay the order
 * @param totalValue total value of the order
 * @param payments array with the payment methods used by the customer
 * @returns the pending value
 */
 export const calculatePendingValue = (totalValue: number, payments: Payment[]): number => {
  const paidValue = payments.reduce((value, paymentMethod) => {
    return value + paymentMethod.amount
  }, 0);

  return totalValue - paidValue;
}