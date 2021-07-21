import { Order } from "../types/Order";
import { calculateOrderTotalValue } from "./calculateOrderTotalValue";
import { sumObjectKeyInArray } from "./sumArrayUsingObjectKey";

/**
 * This method calculates how much is left for the customer to pay the order
 * @param order order to be calculated
 * @returns the pending value
 */
 export const calculateOrderPendingValue = (order: Order): number => {
  
  const paidValue = sumObjectKeyInArray(order.payments, "amount");

  return calculateOrderTotalValue(order) - paidValue;
}