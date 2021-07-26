import { Card } from 'antd';
import React from 'react';
import { useAppSelector } from '../../../../app/hooks';
import GroupData from '../../../../components/GroupData';

const ClientDataCard: React.FC = () => {
  const selectedOrder = useAppSelector((state) => state.orders.selectedOrder);

  return (
    <>
      {selectedOrder && (
        <Card title="Endereço do cliente">
          <div className="dc_grid">
            <GroupData
              dataTitle="Endereço"
              data={selectedOrder.address.street}
            ></GroupData>
            <GroupData
              dataTitle="Bairro"
              data={selectedOrder.address.neighborhood}
            ></GroupData>
            <GroupData
              dataTitle="Complemento"
              data={selectedOrder.address.complement}
            ></GroupData>
            <GroupData
              dataTitle="Cidade"
              data={selectedOrder.address.city}
            ></GroupData>
            <GroupData
              dataTitle="Estado"
              data={selectedOrder.address.state}
            ></GroupData>
          </div>
        </Card>
      )}
    </>
  );
};

export default ClientDataCard;
