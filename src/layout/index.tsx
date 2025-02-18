import { FC } from 'react';
import { Outlet } from 'react-router-dom';

import Filter from '@features/Filter';

const Layout: FC = () => {
  return (
    <>
      <Filter />
      <Outlet />
    </>
  );
};

export default Layout;
