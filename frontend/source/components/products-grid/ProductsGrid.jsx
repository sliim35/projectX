import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const ProductGridStyled = styled.div`
  display: flex;
  width: 100%;

  div {
    max-width: 100px;
  }
`;

export const ProductsGrid = (props) => {
  console.log(props);
  const { children } = props;

  return <ProductGridStyled>{children}</ProductGridStyled>;
};

ProductsGrid.propTypes = {
  children: PropTypes.node.isRequired,
};
