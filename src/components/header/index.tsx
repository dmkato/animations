import React from 'react';
import { PageHeader, Descriptions } from 'antd';

const Header: React.FC = () => (
  <div
    className="header"
  >
    <PageHeader
      onBack={() => window.history.back()}
      title="Title"
      subTitle="This is a subtitle"
    >
      <Descriptions size="small" column={3}>
      </Descriptions>
    </PageHeader>
  </div>
);

export default Header