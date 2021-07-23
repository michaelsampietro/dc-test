import { useMutation } from '@apollo/client';
import { Button, Form, notification } from 'antd';
import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useAppSelector } from '../../app/hooks';
import PageTitle from '../../components/PageTitle';
import { Payment } from '../../types/Payment';
import CustomerForm from './components/CustomerForm';
import ItemsSelection from './components/ItemsSelection';
import PaymentForm from './components/PaymentForm';
import { CREATE_ORDER } from './query';
import { parseAddress, parsePayments } from './utils';
import styles from './styles.module.css';
import { ArrowLeftOutlined, CheckCircleFilled } from '@ant-design/icons';
import { reaisToCents } from '../../utils/reaisToCents';
import { GET_ORDERS } from '../OrdersList/components/OrdersTable/query';

const CreateOrder: React.FC = () => {
  const [disableSubmit, setDisableSubmit] = useState(false);
  const [createOrder] = useMutation(CREATE_ORDER, {
    refetchQueries: [
      {
        query: GET_ORDERS,
      },
    ],
  });
  const orderItems = useAppSelector((state) => state.createOrder.items);
  const history = useHistory();

  const submitForm = (values: any) => {
    setDisableSubmit(true);
    const address = parseAddress(values);
    const payments: Payment[] = parsePayments(values);

    const amount = orderItems.reduce((value, item) => {
      return value + item.amount * item.quantity;
    }, 0);

    const parsedForm = {
      store: values.store,
      customer: { name: values.customer_name },
      deliveryFee: reaisToCents(Number.parseInt(values.deliveryFee)),
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
      })
      .finally(() => setDisableSubmit(false));
  };

  return (
    <>
      <div className="page_header">
        <PageTitle title="Criar pedido" />
        <Link to="/">
          <Button type="link" style={{ fontWeight: 'bold' }}>
            <ArrowLeftOutlined /> Voltar
          </Button>
        </Link>
      </div>

      <Form
        onFinish={submitForm}
        noValidate
        layout="vertical"
        className={styles.form}
      >
        <ItemsSelection />
        <CustomerForm />
        <PaymentForm />

        <div style={{ textAlign: 'right' }}>
          <Button size="large" htmlType="submit" disabled={disableSubmit}>
            <CheckCircleFilled /> Criar pedido
          </Button>
        </div>
      </Form>
    </>
  );
};

export default CreateOrder;
