import { Card, Col, Form, Row, Select } from 'antd';
import React from 'react';
import CustomInput from '../../../../components/CustomInput';
import { payments } from '../../../../mocks/payments';

const { Option } = Select;

const PaymentForm: React.FC = () => {
  return (
    <Card title="Informações de pagamento">
      <Row gutter={16}>
        <Col xs={24} md={8}>
          <Form.Item
            name="payment_method"
            label="Método de pagamento"
            rules={[{ required: true }]}
          >
            <Select placeholder="Selecione a loja">
              {payments.map((payment) => (
                <Option value={payment.value}>{payment.label}</Option>
              ))}
            </Select>
          </Form.Item>
        </Col>
        <Col xs={24} md={8}>
          <CustomInput label="Valor pago" name="payment_amount" />
        </Col>
        <Col xs={24} md={8}>
          <CustomInput label="Valor do frete" name="deliveryFee" />
        </Col>
      </Row>
    </Card>
  );
};

export default PaymentForm;
