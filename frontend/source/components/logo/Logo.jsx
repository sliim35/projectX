import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import logo from '../../static/images/logo.svg';

const LogoStyled = styled.svg`
  width: 210px;
  height: auto;
`;

export const Logo = () => {
  return (
    <Link to="/">
      <LogoStyled viewBox={logo.viewBox} width="210" alt="Kantu">
        <use xlinkHref={`#${logo.id}`} />
      </LogoStyled>
    </Link>
  );
};
