import React from 'react';
import PropTypes from 'prop-types';

import { Container } from '../../components/container/Container';

import { ContentStyled } from './styles/ContentStyled';

export const Content = (props) => {
  const { children } = props;

  return (
    <ContentStyled>
      <Container>{children}</Container>
    </ContentStyled>
  );
};

Content.propTypes = {
  children: PropTypes.node.isRequired,
};
