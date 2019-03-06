import React from 'react';

import logo from '../../static/images/logo.png';

import styled from 'styled-components';

const LogoStyled = styled.img`
  width: 120px;
  height: auto;
`;

export const Logo = () => {
  return <LogoStyled src={logo} alt="Kantu" />;
};
