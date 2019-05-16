import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { media } from '../../styles/media';

const StyledContainer = styled.div`
  width: 100%;
  max-width: 1200px;
  padding: 36px 0;

  ${media.containerDesktop`
    max-width: 896px;
  `}

  ${media.containerTablet`
    max-width: 592px;
  `}
`;

export const Container = (props) => {
  const { children } = props;
  return <StyledContainer>{children}</StyledContainer>;
};

Container.propTypes = {
  children: PropTypes.node.isRequired,
};

Container.displayName = 'Container';
