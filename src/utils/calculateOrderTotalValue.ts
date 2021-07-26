import { Order } from '../types/Order';

/**
 * This method calculates the total value of the order.
 * @param order the order to be calculated
 * @returns the total value of the order (in cents)
 */
export const calculateOrderTotalValue = (order: Order) => {
  return order.amount + order.deliveryFee;
};
