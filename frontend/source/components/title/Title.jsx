import React from 'react';
import PropTypes from 'prop-types';

import { TitleStyled } from './styles/TitleStyled';

export const Title = ({ children }) => {
  return <TitleStyled>{children}</TitleStyled>;
};

Title.propTypes = {
  children: PropTypes.node.isRequired,
};
