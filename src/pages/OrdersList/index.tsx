import { Card } from 'antd';
import React from 'react';
import OrdersTable from './components/OrdersTable';
import PageTitle from '../../components/PageTitle';
import CustomButton from '../../components/CustomButton';

const OrdersList: React.FC = () => {
  return (
    <>
      <div className="dc_grid">
        <PageTitle title="Pedidos" />
        <CustomButton>Novo pedido</CustomButton>
      </div>
      <Card>
        <OrdersTable />
      </Card>
    </>
  );
};

export default OrdersList;
