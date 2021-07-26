import { Card } from 'antd';
import React from 'react';
import OrdersTable from './components/OrdersTable';
import PageTitle from '../../components/PageTitle';
import CustomButton from '../../components/CustomButton';
import { Link } from 'react-router-dom';

const OrdersList: React.FC = () => {
  return (
    <>
      <div className="page_header">
        <PageTitle title="Pedidos" />
        <div style={{ textAlign: 'right' }}>
          <Link to="/pedido">
            <CustomButton>Novo pedido</CustomButton>
          </Link>
        </div>
      </div>
      <Card>
        <OrdersTable />
      </Card>
    </>
  );
};

export default OrdersList;
