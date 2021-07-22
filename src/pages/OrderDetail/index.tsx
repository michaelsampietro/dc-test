import { Button } from 'antd';
import React, { useCallback, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { setSelectedOrder } from '../../app/features/order';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import PageTitle from '../../components/PageTitle';
import ClientDataCard from './components/ClientDataCard';
import OrderDataCard from './components/OrderDataCard';
import OrderItemsDataCard from './components/OrderItemsDataCard';
import OrderPaymentInfoCard from './components/OrderPaymentInfoCard';
import styles from './styles.module.css';

const OrderDetail: React.FC = () => {
  const { id } = useParams<any>();
  const orders = useAppSelector((state) => state.orders.orders);
  const dispatch = useAppDispatch();

  const findOrder = useCallback(() => {
    const order = orders.find((order) => order._id === id);
    dispatch(setSelectedOrder(order));
  }, [dispatch, id, orders]);

  useEffect(() => {
    findOrder();
  }, [findOrder]);

  return (
    <>
      <div className={styles.page_header}>
        <PageTitle title={`Pedido ${id}`} />
        <Link to="/">
          <Button type="link" style={{ fontWeight: 'bold' }}>
            {' '}
            {`⤺ Voltar`}
          </Button>
        </Link>
      </div>
      <div className={styles.order_detail}>
        <OrderDataCard />
        <ClientDataCard />
        <div className={styles.price_cards}>
          <OrderItemsDataCard />
          <OrderPaymentInfoCard />
        </div>
      </div>
    </>
  );
};

export default OrderDetail;
