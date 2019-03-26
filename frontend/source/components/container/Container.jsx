import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledContainer = styled.div`
  width: 100%;
  max-width: 1200px;
  padding: 36px 0;
`;

export const Container = (props) => {
  const { children } = props;
  return <StyledContainer>{children}</StyledContainer>;
};

Container.propTypes = {
  children: PropTypes.node.isRequired,
};

Container.displayName = 'Container';
