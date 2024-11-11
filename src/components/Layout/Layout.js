import React from 'react';
import { Outlet } from 'react-router-dom';

import Headers from 'components/Headers';

const Layout = () => {
  return (
    <div>
      <Headers />
      <Outlet />
    </div>
  );
};

export default Layout;
