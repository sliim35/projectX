import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const UtilsBarStyled = styled.nav`
  border-top: 1px solid ${(props) => props.theme.borderColor};
  border-bottom: 1px solid ${(props) => props.theme.borderColor};
  padding: 12px 0;
  margin: 8px 0;
`;

export const UtilsBar = ({ children }) => {
  return <UtilsBarStyled>{children}</UtilsBarStyled>;
};

UtilsBar.propTypes = {
  children: PropTypes.node,
};

UtilsBar.defaultProps = {
  children: '',
};
