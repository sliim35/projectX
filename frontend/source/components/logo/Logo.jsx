import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import logo from '../../static/images/logo.png';

const LogoStyled = styled.img`
  width: 120px;
  height: auto;
`;

export const Logo = () => {
  return (
    <Link to="/">
      <LogoStyled src={logo} alt="Kantu" />
    </Link>
  );
};
