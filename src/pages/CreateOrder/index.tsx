import { useMutation } from '@apollo/client';
import { Button, Form, notification } from 'antd';
import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useAppSelector } from '../../app/hooks';
import PageTitle from '../../components/PageTitle';
import { Payment } from '../../types/Payment';
import CustomerForm from './components/CustomerForm';
import ItemsSelection from './components/ItemsSelection';
import PaymentForm from './components/PaymentForm';
import { CREATE_ORDER } from './query';
import { parseAddress, parsePayments } from './utils';

const CreateOrder: React.FC = () => {
  const [createOrder] = useMutation(CREATE_ORDER);
  const orderItems = useAppSelector((state) => state.createOrder.items);
  const history = useHistory();

  const submitForm = (values: any) => {
    const address = parseAddress(values);
    const payments: Payment[] = parsePayments(values);

    const amount = orderItems.reduce((value, item) => {
      return value + item.amount * item.quantity;
    }, 0);

    const parsedForm = {
      store: values.store,
      customer: { name: values.customer_name },
      deliveryFee: Number.parseInt(values.deliveryFee),
      items: orderItems,
      amount,
      payments,
      address,
    };

    createOrder({
      variables: {
        input: parsedForm,
      },
    })
      .then(() => {
        notification.success({
          message: 'Pedido criado com sucesso!',
        });
        history.push('/');
      })
      .catch((err) => {
        notification.error({
          message:
            'Erro ao criar o pedido. Por favor, verifique o formulário e tente novamente.',
        });
      });
  };

  return (
    <>
      <div className="page_header">
        <PageTitle title="Criar pedido" />
        <Link to="/">
          <Button type="link" style={{ fontWeight: 'bold' }}>
            {`⤺ Voltar`}
          </Button>
        </Link>
      </div>

      <Form onFinish={submitForm} noValidate layout="vertical">
        <ItemsSelection />
        <CustomerForm />
        <PaymentForm />

        <Button htmlType="submit">Criar pedido</Button>
      </Form>
    </>
  );
};

export default CreateOrder;
