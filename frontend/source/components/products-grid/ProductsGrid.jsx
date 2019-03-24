import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const ProductGridStyled = styled.div`
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  background-color: #fff;
  align-items: center;
  padding: 48px 0;
`;

export const ProductsGrid = (props) => {
  const { children } = props;

  return <ProductGridStyled>{children}</ProductGridStyled>;
};

ProductsGrid.propTypes = {
  children: PropTypes.node.isRequired,
};
