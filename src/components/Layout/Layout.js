import React, { Suspense } from 'react';

import { Outlet } from 'react-router-dom';

import Headers from 'components/Headers/Headers';
import Spiner from 'components/Spiner/Spiner';

const Layout = () => {
  return (
    <>
      <Headers />
      <Suspense fallback={<Spiner />}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default Layout;
