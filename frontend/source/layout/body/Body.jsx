import React from 'react';
import { Route, Switch } from 'react-router-dom';
import styled from 'styled-components';

import { SideBar } from '../../components/side-bar/SideBar';
import { NavBar } from '../../components/nav-bar/NavBar';
import { SideBarList } from '../../components/side-bar-list/SideBarList';
import { Footer } from '../../components/footer/Footer';
import { NavContainer } from '../nav-container/NavContainer';
import { Logo } from '../../components/logo/Logo';

import { BodyStyled } from './styles/BodyStyled';

import { Category } from '../../pages/category/Category';
import { Home } from '../../pages/home/Home';

const footerItems = ['Статьи', 'О компании', 'Контакты', 'Центр помощи'];

const LogoWrapperStyled = styled.div`
  margin: 8px 0;
  padding: 12px 16px;
`;

export const Body = () => {
  return (
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

      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/catalogues/:category_name" component={Category} />
      </Switch>

      <Footer items={footerItems} />
    </BodyStyled>
  );
};
