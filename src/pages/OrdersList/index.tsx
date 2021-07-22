import { Card } from 'antd';
import Title from 'antd/lib/typography/Title';
import React from 'react';
import OrdersTable from './components/OrdersTable';
import PageTitle from '../../components/PageTitle';

const OrdersList: React.FC = () => {
  return (
    <>
      <PageTitle title="Pedidos" />
      <Card>
        <OrdersTable />
      </Card>
    </>
  );
};

export default OrdersList;
