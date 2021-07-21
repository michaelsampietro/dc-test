import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { setSelectedOrder } from "../../app/features/order";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import PageTitle from "../../components/PageTitle";
import OrderDataCard from "./components/OrderDataCard";

const OrderDetail: React.FC = () => {
  const { id } = useParams<any>();
  const orders = useAppSelector((state) => state.orders.orders);
  const dispatch = useAppDispatch();

  useEffect(() => {
    findOrder();
  }, []);

  const findOrder = () => {
    const order = orders.find((order) => order._id === id);
    dispatch(setSelectedOrder(order));
  };

  return (
    <>
      <PageTitle title={`Pedido ${id}`} />
      <OrderDataCard />
    </>
  );
};

export default OrderDetail;
