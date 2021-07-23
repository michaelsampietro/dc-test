import { Card, Col, Row } from 'antd';
import React from 'react';
import CustomInput from '../../../../components/CustomInput';

const CustomerForm: React.FC = () => {
  return (
    <Card title="Dados do cliente">
      <CustomInput label="Nome do cliente" name="customer_name" />

      <Row gutter={16}>
        <Col xs={12} md={10}>
          <CustomInput label="Rua" name="address_street" />
        </Col>

        <Col xs={12} md={10}>
          <CustomInput label="Bairro" name="address_neighborhood" />
        </Col>

        <Col xs={12} md={4}>
          <CustomInput label="Número" name="address_number" />
        </Col>

        <Col xs={12} md={10}>
          <CustomInput label="Complemento" name="address_complement" />
        </Col>

        <Col xs={12} md={7}>
          <CustomInput label="Cidade" name="address_city" />
        </Col>
        <Col xs={12} md={4}>
          <CustomInput label="Estado" name="address_state" />
        </Col>
      </Row>
    </Card>
  );
};

export default CustomerForm;
