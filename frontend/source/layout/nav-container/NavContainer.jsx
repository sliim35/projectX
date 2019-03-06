import React from 'react';

import styled from 'styled-components';

import { Icon } from '../../components/icon/Icon';
import { NavSearch } from '../../components/nav-search/NavSearch';
import { NavRightWrapper } from '../nav-right-wrapper/NavRightWrapper';

import searchIcon from '../../static/icons/search.svg';

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
        <Icon
          glyph={searchIcon.id}
          viewBox={searchIcon.viewBox}
          width="16"
          height="16"
        />
        <NavSearch />
      </InputWrapperStyled>
      <NavRightWrapper />
    </NavContainerStyled>
  );
};
