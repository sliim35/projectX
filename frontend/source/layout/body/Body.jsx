import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import styled from 'styled-components';

import { SideBar } from '../../components/side-bar/SideBar';
import { NavBar } from '../../components/nav-bar/NavBar';
import { SideBarList } from '../../components/side-bar-list/SideBarList';
import { Footer } from '../../components/footer/Footer';
import { NavContainer } from '../nav-container/NavContainer';
import { Logo } from '../../components/logo/Logo';
import { Routes } from '../../pages/Routes';

import { BodyStyled } from './styles/BodyStyled';

const footerItems = ['Статьи', 'О компании', 'Контакты', 'Центр помощи'];

const LogoWrapperStyled = styled.div`
  margin: 8px 0;
  padding: 12px 16px;
`;

export const Body = () => {
  return (
    <Router>
      <BodyStyled>
        <SideBar>
          <LogoWrapperStyled>
            <Logo />
          </LogoWrapperStyled>
          <SideBarList />
        </SideBar>
        <NavBar>
          <NavContainer />
        </NavBar>
        <Routes />
        <Footer items={footerItems} />
      </BodyStyled>
    </Router>
  );
};
