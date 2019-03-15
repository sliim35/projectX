import React from 'react';
import { Query } from 'react-apollo';
import styled from 'styled-components';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import { SideBar } from '../../components/side-bar/SideBar';
import { NavBar } from '../../components/nav-bar/NavBar';
import { Content } from '../content/Content';
import { SideBarList } from '../../components/side-bar-list/SideBarList';
import { Footer } from '../../components/footer/Footer';
import { NavContainer } from '../nav-container/NavContainer';
import { Logo } from '../../components/logo/Logo';

import * as queries from '../../queries';

import { BodyStyled } from './styles/BodyStyled';

const title = 'Категории';

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
          <Query query={queries.CATALOGUES_QUERY}>
            {({ loading, error, data }) => {
              if (loading) return 'Loading...';
              if (error) return `Error! ${error.message}`;

              return <SideBarList title={title} items={data.categories} />;
            }}
          </Query>
        </SideBar>
        <NavBar>
          <NavContainer />
        </NavBar>
        <Content />
        <Footer items={footerItems} />
      </BodyStyled>
    </Router>
  );
};
