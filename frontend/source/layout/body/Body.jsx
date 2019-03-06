import React from 'react';

import styled from 'styled-components';

import { SideBar } from '../../components/side-bar/SideBar';
import { NavBar } from '../../components/nav-bar/NavBar';
import { Content } from '../content/Content';
import { SideBarList } from '../../components/side-bar-list/SideBarList';
import { Footer } from '../../components/footer/Footer';
import { NavContainer } from '../nav-container/NavContainer';
import { Logo } from '../../components/logo/Logo';

import { BodyStyled } from './styles/BodyStyled';

const listItems = [
  'Светотехнические изделия',
  'Инструмент электромонтажный',
  'Высоковольтные комплектные устройства',
];

const title = 'Категории';

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
        <SideBarList title={title} items={listItems} />
      </SideBar>
      <NavBar>
        <NavContainer />
      </NavBar>
      <Content />
      <Footer items={footerItems} />
    </BodyStyled>
  );
};
