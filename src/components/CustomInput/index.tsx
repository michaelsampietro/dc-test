import { Form, Input } from 'antd';
import React from 'react';

interface CustomInputProps {
  name: string;
  label: string;
}

const CustomInput: React.FC<CustomInputProps> = ({ name, label }) => {
  return (
    <Form.Item
      name={name}
      label={label}
      rules={[{ required: true, message: 'Campo obrigatório!' }]}
    >
      <Input placeholder={label} />
    </Form.Item>
  );
};

export default CustomInput;
