import { useQuery } from "@apollo/client";
import { notification, Table } from "antd";
import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { Order } from "../../types/Order";
import { GET_ORDERS } from "./query";
import styles from "./styles.module.css";
import { formatOrdersForTable } from "./utils/formatOrdersForTable";
import { ordersTableColumns } from "./utils/ordersTableColumnsConfig";

type DataType = {
  orders: Order[];
};

export type OrdersTableDataType = {
  id: string;
  store: string;
  customer: string;
  value: string;
  pendingValue: string;
};

const OrdersTable: React.FC = () => {
  const { loading, error, data } = useQuery<DataType>(GET_ORDERS);
  const [orders, setOrders] = useState<OrdersTableDataType[]>([]);
  const history = useHistory();

  useEffect(() => {
    setOrders(formatOrdersForTable(data?.orders ?? []));
  }, [data]);

  useEffect(() => {
    if (error) {
      notification.error({
        message: error.message
      })
    }
  }, [error])

  const viewOrder = (orderId: string) => {
    history.push(`/pedido/${orderId}`);
  }

  return (
    <Table
      style={{
        overflow: "auto",
      }}
      rowKey="id"
      loading={loading}
      dataSource={orders}
      columns={ordersTableColumns}
      rowClassName={styles.row}
      onRow={(record) => {
        return {
          onClick: () => viewOrder(record.id),
        };
      }}
      pagination={{
        showSizeChanger: true
      }}
    />
  );
};

export default OrdersTable;
