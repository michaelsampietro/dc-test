import { Card, Table } from 'antd';
import { ColumnsType } from 'antd/lib/table';
import React from 'react';
import { useAppSelector } from '../../../../app/hooks';
import GroupData from '../../../../components/GroupData';
import { calculateOrderPendingValue } from '../../../../utils/calculatePendingValue';
import { formatPrice } from '../../../../utils/priceFormatter';
import { sumObjectKeyInArray } from '../../../../utils/sumArrayUsingObjectKey';


const OrderPaymentInfoCard: React.FC = () => {
  const selectedOrder = useAppSelector((state) => state.orders.selectedOrder);

  const columns: ColumnsType<any> = [
    {
      title: "Método",
      dataIndex: "method",
    },
    {
      title: "Valor",
      dataIndex: "amount",
      render: (value) => formatPrice(value),
    }
  ];

  const totalPaid = () => {
    if (!selectedOrder) return 0;

    return sumObjectKeyInArray(selectedOrder?.payments ?? [], "amount");
  }

  return (
    <>
      {selectedOrder && (
        <Card title="Pagamentos">
          <div className='dc_grid'>
            <GroupData dataTitle="Valor pago" data={formatPrice(totalPaid())} />
            <GroupData
              dataTitle="Valor pendente"
              data={formatPrice(calculateOrderPendingValue(selectedOrder))}
            ></GroupData>
          </div>
          <Table dataSource={selectedOrder.payments} columns={columns} pagination={false}></Table>
        </Card>
      )}
    </>
  );
}

export default OrderPaymentInfoCard;