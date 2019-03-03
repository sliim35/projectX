import React from 'react';
import PropTypes from 'prop-types';

import { NavBarStyled } from './styles/NavBarStyled';

export const NavBar = ({ children }) => {
  return <NavBarStyled>{children}</NavBarStyled>;
};

NavBar.propTypes = {
  children: PropTypes.node.isRequired,
};
