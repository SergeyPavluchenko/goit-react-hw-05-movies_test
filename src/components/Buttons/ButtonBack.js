import React from 'react';
import { MdArrowBackIosNew } from 'react-icons/md';
import { BtnBlock } from './ButtonBackStyled';

const ButtonBack = () => {
  return (
    <BtnBlock>
      <button
        type="button"
        className="btn btn-outline-dark d-flex align-items-center"
      >
        <MdArrowBackIosNew />
        Back
      </button>
    </BtnBlock>
  );
};

export default ButtonBack;
