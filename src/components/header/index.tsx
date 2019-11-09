import React from 'react';
import { PageHeader, Descriptions } from 'antd';
import { useLocation, useHistory } from 'react-router';
import { Location, History } from 'history';

const Header: React.FC = () => {
  const { pathname }: Location = useLocation();
  const { goBack }: History = useHistory();
  const isHome = pathname === '/';
  return (
    <div
      className="header"
    >
      <PageHeader
        onBack={isHome ? undefined : () => goBack()}
        title="Animations"
        subTitle="By Daniel Kato"
      >
        <Descriptions size="small" column={3} />
      </PageHeader>
    </div>
  );
};

export default Header;
