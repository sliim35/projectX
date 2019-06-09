import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { media } from '../../styles/media';

import logo from '../../static/images/favicon.png';
import barsIcon from '../../static/icons/bars.svg';

import { Icon } from '../../components/icon/Icon';
import { NavSearch } from '../../components/nav-search/NavSearch';
import { NavRightWrapper } from '../nav-right-wrapper/NavRightWrapper';

const NavContainerStyled = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  flex-grow: 1;

  ${media.landscapePhone`
    align-items: center;
    justify-content: space-between;
    padding: 0 16px;
    flex-wrap: wrap;
  `}

  .bars-icon {
    display: none;

    ${media.landscapePhone`
      display: block;
      position: unset;
      margin: 0;
      align-self: center;
      margin-top: 24px;
    `}
  }
`;

const InputWrapperStyled = styled.div`
  position: relative;
  width: 100%;
  max-width: 500px;

  ${media.landscapePhone`
    order: 3;
  `}
`;

const SmallLogo = styled.img`
  display: none;
  width: 32px;
  height: 32px;

  ${media.landscapePhone`
    display: block;
  `}
`;

export const NavContainer = (props) => {
  const { setSearching, isSearching } = props;

  return (
    <NavContainerStyled>
      <Icon
        glyph={barsIcon.id}
        viewBox={barsIcon.viewBox}
        width="24"
        height="24"
        className="bars-icon"
      />
      <SmallLogo src={logo} alt="Kantu logo" />
      <InputWrapperStyled>
        <NavSearch setSearching={setSearching} isSearching={isSearching} />
      </InputWrapperStyled>
      <NavRightWrapper />
    </NavContainerStyled>
  );
};

NavContainer.propTypes = {
  setSearching: PropTypes.func,
  isSearching: PropTypes.bool,
};

NavContainer.defaultProps = {
  setSearching: () => null,
  isSearching: false,
};
