import React from 'react';
import styled from 'styled-components';

import { NavSearch } from '../../components/nav-search/NavSearch';
import { NavRightWrapper } from '../nav-right-wrapper/NavRightWrapper';

const NavContainerStyled = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  flex-grow: 1;
`;

const InputWrapperStyled = styled.div`
  width: 100%;
  max-width: 500px;
`;

export const NavContainer = () => {
  return (
    <NavContainerStyled>
      <InputWrapperStyled>
        <NavSearch />
      </InputWrapperStyled>
      <NavRightWrapper />
    </NavContainerStyled>
  );
};
