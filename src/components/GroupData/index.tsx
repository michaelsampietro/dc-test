import React from 'react';

interface GroupDataProps {
  dataTitle: string;
  data?: string;
}

const GroupData: React.FC<GroupDataProps> = ({ data, dataTitle }) => {
  return (
    <div>
      <span>{dataTitle}</span>
      <p style={{ fontWeight: 'bold' }}>{data ?? '-'}</p>
    </div>
  );
};

export default GroupData;
