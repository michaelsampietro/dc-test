import Title from 'antd/lib/typography/Title';
import React from 'react';
import OrdersTable from '../../components/OrdersTable';

const OrdersList: React.FC = () => {
  return (
    <>
      <Title level={2}>Lista de pedidos</Title>
      <OrdersTable />
    </>
  );
}

export default OrdersList;