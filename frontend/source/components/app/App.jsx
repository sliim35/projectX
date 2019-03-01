import React from 'react';

import { SideNav } from '../side-nav/SideNav';
import { NavBar } from '../nav-bar/NavBar';
import { Container } from '../../layout/container/Container';

import { GlobalStyle } from '../../styles/global.js';

export const App = () => {
  return (
    <>
      <GlobalStyle />
      <SideNav />
      <NavBar />
      <Container />
    </>
  );
};
