import { useQuery } from "@apollo/client";
import { Table } from "antd";
import React, { useEffect, useState } from "react";
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

  useEffect(() => {
    setOrders(formatOrdersForTable(data?.orders ?? []));
  }, [data]);

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
          onClick: () => alert(JSON.stringify(record)),
        };
      }}
    />
  );
};

export default OrdersTable;
