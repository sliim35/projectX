import React from 'react';
import PropTypes from 'prop-types';

import { TitleStyled } from './styles/TitleStyled';

export const Text = ({ children }) => {
  return <TitleStyled>{children}</TitleStyled>;
};

Text.propTypes = {
  children: PropTypes.node.isRequired,
};
