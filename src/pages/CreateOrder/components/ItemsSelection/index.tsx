import { Select, Form, List, Input, Button, Card } from 'antd';
import React, { useEffect, useRef, useState } from 'react';
import { updateItems } from '../../../../app/features/createOrder';
import { useAppDispatch } from '../../../../app/hooks';
import GroupData from '../../../../components/GroupData';
import { goods } from '../../../../mocks/goods';
import { stores } from '../../../../mocks/stores';
import { OrderItem } from '../../../../types/CreateOrderTypes/Item';
import { formatPrice } from '../../../../utils/priceFormatter';
const { Option } = Select;

export type SelectedItemType = OrderItem & { quantity: number };

const ItemsSelection: React.FC = () => {
  const [items, setItems] = useState<OrderItem[]>([]);
  const [currentItem, setCurrentItem] = useState<OrderItem>();
  const [selectedItems, setSelectedItems] = useState<SelectedItemType[]>([]);
  const amountRef = useRef(null);
  const dispatch = useAppDispatch();

  const [store, setStore] = useState('');

  const selectStore = (value: string) => {
    if (store === '') {
      setStore(value);
      return;
    }

    if (selectedItems.length > 0) {
      if (
        window.confirm(
          'Tem certeza? Trocar de loja apagará todos os itens já adicionados ao pedido.',
        )
      ) {
        setStore(value);
      }
    } else {
      setStore(value);
    }
  };

  // Update store every time selected items change.
  // This will be used later when the user submits the create order form.
  useEffect(() => {
    dispatch(updateItems(selectedItems));
  }, [selectedItems, dispatch]);

  useEffect(() => {
    if (store && store === '') {
      setItems([]);
    } else {
      setItems((goods as any)[store]);
    }
    setCurrentItem(undefined);
    setSelectedItems([]);
  }, [store]);

  const selectItem = (value: string) => {
    if (value) {
      const item = JSON.parse(value) as OrderItem;
      setCurrentItem(item);
    } else {
      setCurrentItem(undefined);
    }
  };

  const addToOrder = () => {
    setSelectedItems((v) => [
      ...v,
      {
        amount: currentItem!.amount,
        name: currentItem!.name,
        quantity: Number.parseInt((amountRef.current as any).state.value),
      },
    ]);
  };

  const removeItem = (item: SelectedItemType) => {
    const newItems = selectedItems.filter(
      (i) => JSON.stringify(i) !== JSON.stringify(item),
    );
    setSelectedItems(newItems);
  };

  return (
    <>
      <Card title="Itens do pedido">
        <Form.Item name="store" label="Loja">
          <Select placeholder="Selecione a loja" onChange={selectStore}>
            {stores.map((store) => (
              <Option value={store}>{store}</Option>
            ))}
          </Select>
        </Form.Item>
        <Form.Item label="Selecione os itens">
          <Select
            placeholder="Selecione os itens"
            onChange={selectItem}
            autoClearSearchValue
            allowClear
          >
            {items?.map((item) => (
              <Option key={item.name} value={JSON.stringify(item)}>
                {item.name}
              </Option>
            ))}
          </Select>
        </Form.Item>

        <div className="dc_grid">
          <div>
            {currentItem && (
              <div>
                <GroupData
                  dataTitle="Item selecionado"
                  data={currentItem.name}
                />
                <GroupData
                  dataTitle="Valor"
                  data={formatPrice(currentItem.amount)}
                />
                <span>Quantidade</span>
                <Input ref={amountRef} type="number" />
                <Button htmlType="button" onClick={addToOrder}>
                  Adicionar ao pedido
                </Button>
              </div>
            )}
          </div>

          <div>
            {selectedItems && (
              <>
                <List
                  dataSource={selectedItems}
                  renderItem={(item) => (
                    <>
                      <List.Item key={JSON.stringify(item)}>
                        <span>{item.name}</span>
                        <span>{formatPrice(item.amount)}</span>
                        <span>{item.quantity}</span>
                        <span>{formatPrice(item.amount * item.quantity)}</span>
                        <span>
                          <Button type="link" onClick={() => removeItem(item)}>
                            deletar
                          </Button>
                        </span>
                      </List.Item>
                    </>
                  )}
                />
              </>
            )}
          </div>
        </div>
      </Card>
    </>
  );
};

export default ItemsSelection;
