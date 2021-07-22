import { useMutation } from '@apollo/client';
import { Button, Input, Form, Select } from 'antd';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PageTitle from '../../components/PageTitle';
import { goods } from '../../mocks/goods';
import { stores } from '../../mocks/stores';
import ItemsSelection from './components/ItemsSelection';

const { Option } = Select;

const defaultMessage = 'Campo obrigatório!';

const CreateOrder: React.FC = () => {
  const [store, setStore] = useState('');

  const selectStore = (value: string) => {
    if (store === '') {
      setStore(value);
    } else if (
      window.confirm(
        'Tem certeza? Trocar de loja apagará todos os itens já adicionados ao pedido.',
      )
    ) {
      setStore(value);
    }
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

      <Form onFinish={console.log} layout="vertical">
        <Form.Item
          name="store"
          label="Loja"
          rules={[{ required: true, message: defaultMessage }]}
        >
          <Select placeholder="Selecione a loja" onChange={selectStore}>
            {stores.map((store) => (
              <Option value={store}>{store}</Option>
            ))}
          </Select>
        </Form.Item>

        <ItemsSelection store={store} />
      </Form>
    </>
  );
};

export default CreateOrder;
