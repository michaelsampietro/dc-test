import { Button, Popover, Table } from 'antd';
import { ColumnsType } from 'antd/lib/table';
import React from 'react';
import { formatPrice } from '../../../../utils/priceFormatter';
import { SelectedItemType } from '../ItemsSelection';
import { DeleteFilled } from '@ant-design/icons';

interface PreviewSelectedItemsProps {
  selectedItems: SelectedItemType[];
  removeItem: (item: SelectedItemType) => void;
}

const PreviewSelectedItems: React.FC<PreviewSelectedItemsProps> = ({
  selectedItems,
  removeItem,
}) => {
  const columns: ColumnsType<SelectedItemType> = [
    {
      dataIndex: 'name',
      title: 'Item',
    },
    {
      dataIndex: 'amount',
      title: 'Preço unitário',
      render: (value: number) => formatPrice(value),
    },
    {
      dataIndex: 'quantity',
      title: 'Qtd.',
    },
    {
      dataIndex: 'quantity',
      title: 'Preço total',
      render: (_: number, item) => formatPrice(item.amount * item.quantity),
    },
    {
      dataIndex: 'quantity',
      render: (_: number, item) => (
        <Popover content="Remover item do pedido" placement="right">
          <Button
            type="link"
            icon={<DeleteFilled />}
            onClick={() => removeItem(item)}
          />
        </Popover>
      ),
    },
  ];

  return (
    <>
      {selectedItems && selectedItems.length > 0 && (
        <>
          <h3 style={{ fontWeight: 'bold' }}>Itens adicionados</h3>
          <Table
            style={{ overflow: 'auto' }}
            dataSource={selectedItems}
            columns={columns}
            pagination={false}
            size="small"
          ></Table>
        </>
      )}
    </>
  );
};

export default PreviewSelectedItems;
