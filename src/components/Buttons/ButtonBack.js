import React, { useRef } from 'react';
import { MdArrowBackIosNew } from 'react-icons/md';
import { BtnBlock } from './ButtonBackStyled';
import { Link, useLocation } from 'react-router-dom';

const ButtonBack = () => {
  const location = useLocation();
  const baskLink = useRef(location.state?.from ?? '/');

  return (
    <Link style={{ textDecoration: 'none' }} to={baskLink.current}>
      <BtnBlock>
        <button
          type="button"
          className="btn btn-outline-dark d-flex align-items-center"
        >
          <MdArrowBackIosNew />
          Back
        </button>
      </BtnBlock>
    </Link>
  );
};

export default ButtonBack;
