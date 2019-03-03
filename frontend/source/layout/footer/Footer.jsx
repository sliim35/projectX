import React from 'react';
import PropTypes from 'prop-types';

import { FooterStyled } from './styles/FooterStyled.js';

export const Footer = ({ children }) => {
  return <FooterStyled>{children}</FooterStyled>;
};

Footer.propTypes = {
  children: PropTypes.node.isRequired,
};
