import { ColumnsType } from "antd/lib/table";
import { OrdersTableDataType } from "..";

export const ordersTableColumns: ColumnsType<OrdersTableDataType> = [
  {
    title: "Id do pedido",
    dataIndex: "id",
  },
  {
    title: "Lojista",
    dataIndex: "store",
  },
  {
    title: "Cliente",
    dataIndex: "customer",
  },
  {
    title: "Valor",
    dataIndex: "value",
  },
  {
    title: "Valor pendente",
    dataIndex: "pendingValue",
  },
];