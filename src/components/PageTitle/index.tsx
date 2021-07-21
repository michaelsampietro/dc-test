import Title from 'antd/lib/typography/Title';
import React from 'react';

type PageTitleProps = {
  title: string;
}

const PageTitle: React.FC<PageTitleProps> = ({title}) => {
  return <Title level={2}>{title}</Title>;
}

export default PageTitle;