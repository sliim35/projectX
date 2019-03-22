import React from 'react';
import PropTypes from 'prop-types';
import { useSpring } from 'react-spring';

import { Container } from '../../components/container/Container';

import { ContentStyled } from './styles/ContentStyled';

export const Content = (props) => {
  const spring = useSpring({ to: { opacity: 1 } });
  const { children } = props;

  return (
    <ContentStyled style={spring}>
      <Container>{children}</Container>
    </ContentStyled>
  );
};

Content.propTypes = {
  children: PropTypes.node.isRequired,
};
