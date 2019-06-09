import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { SideBarStyled } from '../side-bar/styles/SideBarStyled';

const SideBar = ({ children, isMenuOpen }) => {
  return <SideBarStyled isMenuOpen={isMenuOpen}>{children}</SideBarStyled>;
};

SideBar.propTypes = {
  children: PropTypes.node.isRequired,
  isMenuOpen: PropTypes.bool,
};

SideBar.defaultProps = {
  isMenuOpen: false,
};

const SideBarConnected = connect(({ menu }) => ({
  isMenuOpen: menu,
}))(SideBar);

export { SideBarConnected as SideBar };
