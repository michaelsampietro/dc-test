import { Button, Card, Form, Select } from 'antd';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PageTitle from '../../components/PageTitle';
import { stores } from '../../mocks/stores';
import CustomerForm from './components/CustomerForm';
import ItemsSelection from './components/ItemsSelection';
import PaymentForm from './components/PaymentForm';

const { Option } = Select;

const defaultMessage = 'Campo obrigatório!';

const CreateOrder: React.FC = () => {
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

      <Form onFinish={console.log} layout="vertical">
        <ItemsSelection />

        <CustomerForm />

        <PaymentForm />

        <Button htmlType="submit">Criar pedido</Button>
      </Form>
    </>
  );
};

export default CreateOrder;
