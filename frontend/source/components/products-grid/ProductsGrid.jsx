import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { media } from '../../styles/media';

const ProductGridStyled = styled.div`
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  background-color: #fff;
  align-items: center;

  ${media.landscapePhone`
    justify-content: space-between;
    padding-bottom: 4rem;
  `}
`;

export const ProductsGrid = (props) => {
  const { children } = props;

  return <ProductGridStyled>{children}</ProductGridStyled>;
};

ProductsGrid.propTypes = {
  children: PropTypes.node.isRequired,
};
