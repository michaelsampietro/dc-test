import { Card } from 'antd';
import React from 'react';
import { useAppSelector } from '../../../../app/hooks';
import GroupData from '../../../../components/GroupData';
import { calculateOrderTotalValue } from '../../../../utils/calculateOrderTotalValue';
import { calculateOrderPendingValue } from '../../../../utils/calculatePendingValue';
import { formatPrice } from '../../../../utils/priceFormatter';

const OrderDataCard: React.FC = () => {
  const selectedOrder = useAppSelector((state) => state.orders.selectedOrder);

  return (
    <>
      {selectedOrder && (
        <Card title="Dados do pedido">
          <div className="dc_grid">
            <GroupData
              dataTitle="Id do pedido"
              data={selectedOrder?._id}
            ></GroupData>
            <GroupData
              dataTitle="Lojista"
              data={selectedOrder?.store}
            ></GroupData>
            <GroupData
              dataTitle="Cliente"
              data={selectedOrder?.customer.name}
            ></GroupData>
            <GroupData
              dataTitle="Valor total"
              data={formatPrice(calculateOrderTotalValue(selectedOrder))}
            ></GroupData>
            <GroupData
              dataTitle="Valor pendente"
              data={formatPrice(calculateOrderPendingValue(selectedOrder))}
            ></GroupData>
          </div>
        </Card>
      )}
    </>
  );
};

export default OrderDataCard;
