import React from 'react';
import { Oval } from 'react-loader-spinner';
import { Loader } from './SpinerStyle';

const Spiner = () => {
  return (
    <Loader>
      <Oval
        visible={true}
        height="80"
        width="80"
        color="#4fa94d"
        ariaLabel="oval-loading"
        wrapperStyle={{}}
        wrapperClass=""
      />
    </Loader>
  );
};

export default Spiner;
