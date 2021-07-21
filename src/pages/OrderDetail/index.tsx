import React from 'react';
import { useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import PageTitle from '../../components/PageTitle';

const OrderDetail: React.FC = () => {
  const { id } = useParams<any>();

  // get order here and put into redux.
  const state = useAppSelector((state) => state.orders);

  console.log(state);

  return (
    <PageTitle title={`Pedido ${id}`} />
  );
}

export default OrderDetail;