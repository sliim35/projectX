import React from 'react';
import PropTypes from 'prop-types';

import { TextStyled } from './styles/TextStyled';

export const Text = ({ children }) => {
  return <TextStyled>{children}</TextStyled>;
};

Text.propTypes = {
  children: PropTypes.node.isRequired,
};
