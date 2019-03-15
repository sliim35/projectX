import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledContainer = styled.div`
  display: flex;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
`;

export const Container = (props) => {
  const { children } = props;
  return <StyledContainer>{children}</StyledContainer>;
};

Container.propTypes = {
  children: PropTypes.node.isRequired,
};

Container.displayName = 'Container';
