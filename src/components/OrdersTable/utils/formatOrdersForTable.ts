import { OrdersTableDataType } from "..";
import { Order } from "../../../types/Order";
import { calculateOrderTotalValue } from "../../../utils/calculateOrderTotalValue";
import { calculateOrderPendingValue } from "../../../utils/calculatePendingValue";
import { formatPrice } from "../../../utils/priceFormatter";

/**
 * This method formats the orders that comes from the backend to be used in the table
 * @param orders orders that came from the backend
 * @returns orders formatted to use in the table
 */
 export const formatOrdersForTable = (orders: Order[]): OrdersTableDataType[] => {
  const parsedOrders: OrdersTableDataType[] = [];

  orders.forEach(order => {
    parsedOrders.push({
      id: order._id,
      customer: order.customer.name,
      store: order.store,
      value: formatPrice(calculateOrderTotalValue(order)),
      pendingValue: formatPrice(calculateOrderPendingValue(order))
    })
  });

  return parsedOrders;
}