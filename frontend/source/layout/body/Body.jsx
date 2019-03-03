import React from 'react';

import { SideBar } from '../../components/side-bar/SideBar';
import { NavBar } from '../../components/nav-bar/NavBar';
import { NavSearch } from '../../components/nav-search/NavSearch';
import { Content } from '../content/Content';
import { SideBarList } from '../../components/side-bar-list/SideBarList';
import { Footer } from '../../components/footer/Footer';

import { BodyStyled } from './styles/BodyStyled';

const listItems = [
  'Светотехнические изделия',
  'Инструмент электромонтажный',
  'Высоковольтные комплектные устройства',
];

const title = 'Категории';

const footerItems = ['Статьи', 'О компании', 'Контакты', 'Центр помощи'];

export const Body = () => {
  return (
    <BodyStyled>
      <SideBar>
        <SideBarList title={title} items={listItems} />
      </SideBar>
      <NavBar>
        <NavSearch />
      </NavBar>
      <Content />
      <Footer items={footerItems} />
    </BodyStyled>
  );
};
