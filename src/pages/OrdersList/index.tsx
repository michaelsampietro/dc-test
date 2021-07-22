import { Card } from 'antd';
import React from 'react';
import OrdersTable from './components/OrdersTable';
import PageTitle from '../../components/PageTitle';
import CustomButton from '../../components/CustomButton';
import { Link } from 'react-router-dom';

const OrdersList: React.FC = () => {
  return (
    <>
      <div className="dc_grid">
        <PageTitle title="Pedidos" />
        <Link to="/pedido">
          <CustomButton>Novo pedido</CustomButton>
        </Link>
      </div>
      <Card>
        <OrdersTable />
      </Card>
    </>
  );
};

export default OrdersList;
