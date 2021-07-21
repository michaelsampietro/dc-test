import React from 'react';
import { useParams } from 'react-router-dom';
import PageTitle from '../../components/PageTitle';

const OrderDetail: React.FC = () => {
  const { id } = useParams<any>();

  return <PageTitle title={`Pedido ${id}`} />;
}

export default OrderDetail;