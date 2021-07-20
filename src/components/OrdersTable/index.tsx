import { gql, useQuery } from '@apollo/client';
import React, { useEffect } from 'react';
import { client } from '../../config/apollo';
import { GET_ORDERS_SUMMARY } from './query';
import { Orders } from './types';

const OrdersTable: React.FC = () => {

  const { loading, error, data } = useQuery<Orders>(GET_ORDERS_SUMMARY);

  if (loading) return <p>Loading...</p>

  return (
    <>
      {data!.orders.map(order => {
        return (
          <>
            <p>{order._id}</p>
          </>
        );
      })}
    </>
  ) 
}

export default OrdersTable;