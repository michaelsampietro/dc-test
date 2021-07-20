import { Card } from 'antd';
import Title from 'antd/lib/typography/Title';
import React from 'react';
import OrdersTable from '../../components/OrdersTable';

const OrdersList: React.FC = () => {
  return (
    <>
      <Title level={2}>Pedidos</Title>
      <Card>
        <OrdersTable />
      </Card>
    </>
  );
}

export default OrdersList;