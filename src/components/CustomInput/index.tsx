import { Form, Input } from 'antd';
import React from 'react';

interface CustomInputProps {
  name: string;
  label: string;
  prefix?: string;
}

const CustomInput: React.FC<CustomInputProps> = ({ name, label, prefix }) => {
  return (
    <Form.Item
      name={name}
      label={label}
      rules={[{ required: true, message: 'Campo obrigatório!' }]}
    >
      <Input placeholder={label} prefix={prefix} />
    </Form.Item>
  );
};

export default CustomInput;
