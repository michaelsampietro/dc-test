import { Button } from 'antd';
import React from 'react';

const CustomButton: React.FC = ({ children }) => {
  return (
    <Button
      style={{
        backgroundColor: 'rgba(254,82,0,1.0)',
        color: '#fff',
        fontWeight: 'bold',
        borderRadius: 5,
        border: 'none',
      }}
    >
      {children}
    </Button>
  );
};

export default CustomButton;
