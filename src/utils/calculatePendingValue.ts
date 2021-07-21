import { Order } from "../types/Order";
import { Payment } from "../types/Payment";
import { calculateOrderTotalValue } from "./calculateOrderTotalValue";

/**
 * This method calculates how much is left for the customer to pay the order
 * @param order order to be calculated
 * @returns the pending value
 */
 export const calculateOrderPendingValue = (order: Order): number => {
  const paidValue = order.payments.reduce((value, paymentMethod) => {
    return value + paymentMethod.amount
  }, 0);

  return calculateOrderTotalValue(order) - paidValue;
}