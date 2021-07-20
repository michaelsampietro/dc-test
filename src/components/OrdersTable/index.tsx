import { useQuery } from '@apollo/client';
import React from 'react';
import { Order } from '../../types/Order';
import { GET_ORDERS_SUMMARY } from './query';

type DataType = {
  orders: Order[];
}

const OrdersTable: React.FC = () => {

  const { loading, error, data } = useQuery<DataType>(GET_ORDERS_SUMMARY);

  if (loading) return <p>Loading...</p>

  return (
    <>
      {data!.orders.map(order => {
        return (
          <>
            <p>{order.store}</p>
          </>
        );
      })}
    </>
  ) 
}

export default OrdersTable;