import React from 'react';
import PropTypes from 'prop-types';
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
  position: relative;
  width: 100%;
  max-width: 500px;
`;

export const NavContainer = (props) => {
  const { setSearching } = props;

  return (
    <NavContainerStyled>
      <InputWrapperStyled>
        <NavSearch setSearching={setSearching} />
      </InputWrapperStyled>
      <NavRightWrapper />
    </NavContainerStyled>
  );
};

NavContainer.propTypes = {
  setSearching: PropTypes.func,
};

NavContainer.defaultProps = {
  setSearching: () => null,
};
