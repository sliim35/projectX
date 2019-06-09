import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { media } from '../../styles/media';

const SearchResultBarStyled = styled.ul`
  position: absolute;
  left: 16px;
  background-color: ${(props) => props.theme.bodyBackgroundColor};
  box-shadow: ${(props) => props.theme.searchResultBarShadow};
  border-radius: 8px;
  width: 500px;
  max-width: 100%;

  ${media.landscapePhone`
    max-width: 100%;
    width: calc(100vw - 32px);
  `}
`;

export const SearchResultBar = (props) => {
  const { children } = props;

  return <SearchResultBarStyled>{children}</SearchResultBarStyled>;
};

SearchResultBar.propTypes = {
  children: PropTypes.node.isRequired,
};
