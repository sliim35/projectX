import React from 'react';

import { SideBar } from '../../components/side-bar/SideBar';
import { NavBar } from '../../components/nav-bar/NavBar';
import { Content } from '../content/Content';
import { SideBarList } from '../../components/side-bar-list/SideBarList';

import { BodyStyled } from './styles/BodyStyled';

const listItems = [
  'Светотехнические изделия',
  'Инструмент электромонтажный',
  'Высоковольтные комплектные устройства',
];

const title = 'Категории';

export const Body = () => {
  return (
    <BodyStyled>
      <SideBar>
        <SideBarList title={title} listItems={listItems} />
      </SideBar>
      <NavBar />
      <Content />
    </BodyStyled>
  );
};
