import { PlusCircleFilled } from '@ant-design/icons';
import { Input, Button, message } from 'antd';
import React, { useRef } from 'react';
import GroupData from '../../../../components/GroupData';
import { OrderItem } from '../../../../types/CreateOrderTypes/Item';
import { formatPrice } from '../../../../utils/priceFormatter';

interface PreviewCurrentItemProps {
  currentItem?: OrderItem;
  addToOrder: (quantity: number) => void;
}

const PreviewCurrentItem: React.FC<PreviewCurrentItemProps> = ({
  currentItem,
  addToOrder,
}) => {
  const amountRef = useRef(null);

  const onClick = () => {
    if ((amountRef.current as any).state.value <= 0) {
      message.info('Quantidade inválida.');
      return;
    }
    addToOrder(Number.parseInt((amountRef.current as any).state.value));
  };

  return (
    <>
      {currentItem && (
        <>
          <h3 style={{ fontWeight: 'bold' }}>Item selecionado</h3>
          <div>
            <GroupData dataTitle="Item selecionado" data={currentItem.name} />
            <GroupData
              dataTitle="Valor"
              data={formatPrice(currentItem.amount)}
            />
            <span>Quantidade</span>
            <Input ref={amountRef} type="number" min={0} />

            <div style={{ textAlign: 'right', marginTop: 10 }}>
              <Button htmlType="button" onClick={onClick}>
                <PlusCircleFilled />
                Adicionar ao pedido
              </Button>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default PreviewCurrentItem;
