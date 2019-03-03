import React from 'react';
import PropTypes from 'prop-types';

import { SideBarStyled } from '../side-bar/styles/SideBarStyled';

export const SideBar = ({ children }) => {
  return <SideBarStyled>{children}</SideBarStyled>;
};

SideBar.propTypes = {
  children: PropTypes.node.isRequired,
};
