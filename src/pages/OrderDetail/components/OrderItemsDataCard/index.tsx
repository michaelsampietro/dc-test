import { Card, Table } from "antd";
import { ColumnsType } from "antd/lib/table";
import React from "react";
import { useAppSelector } from "../../../../app/hooks";
import GroupData from "../../../../components/GroupData";
import { formatPrice } from "../../../../utils/priceFormatter";
import { sumObjectKeyInArray } from "../../../../utils/sumArrayUsingObjectKey";

const OrderItemsDataCard: React.FC = () => {
  const selectedOrder = useAppSelector((state) => state.orders.selectedOrder);

  const columns: ColumnsType<any> = [
    {
      title: "Nome",
      dataIndex: "name",
    },
    {
      title: "Quantidade",
      dataIndex: "quantity",
    },
    {
      title: "Valor",
      dataIndex: "amount",
      render: (value) => formatPrice(value),
    }
  ];

  const itemsTotalValue = (): number => {
    if (!selectedOrder) return 0;

    const values = selectedOrder.items.map((i) => {
      return {
        ...i,
        amount: Number.parseInt(i.amount),
      };
    });

    return sumObjectKeyInArray(values, "amount");
  };

  return (
    <>
      {selectedOrder && (
        <Card title="Itens do pedido">
          <div className='dc_grid'>
            <GroupData dataTitle="Valor total dos itens (sem frete)" data={formatPrice(itemsTotalValue())} />
            <GroupData dataTitle="Valor do frete" data={formatPrice(selectedOrder.deliveryFee)} />
          </div>
          <Table dataSource={selectedOrder.items} columns={columns} />
        </Card>
      )}
    </>
  );
};

export default OrderItemsDataCard;
