import React, { useContext, useReducer, useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import styled from 'styled-components';
import { useSpring, animated } from 'react-spring';

import ProductsContext from '../../store';
import * as reducers from '../../store/reducers';

import { SideBar } from '../../components/side-bar/SideBar';
import { NavBar } from '../../components/nav-bar/NavBar';
import { SideBarList } from '../../components/side-bar-list/SideBarList';
import { Footer } from '../../components/footer/Footer';
import { NavContainer } from '../nav-container/NavContainer';
import { Overlay } from '../../components/overlay/Overlay';
import { SearchResultBar } from '../../components/search-result-bar/SearchResultBar';
import { SearchResultList } from '../../components/search-result-list/SearchResultList';
import { Logo } from '../../components/logo/Logo';
import { Routes } from '../../pages/Routes';

import { BodyStyled } from './styles/BodyStyled';

const footerItems = ['Статьи', 'О компании', 'Контакты', 'Центр помощи'];

const LogoWrapperStyled = styled.div`
  margin: 8px 0;
  padding: 12px 16px;
`;

const SearchResultBarContainer = styled(animated.div)`
  position: relative;
  width: 100%;
  height: 100%;
  z-index: ${(props) => props.theme.searchResultBarZIndex};
`;

export const Body = () => {
  const [isSearching, setSearching] = useState(false);
  const initialState = useContext(ProductsContext);
  const [state, dispatch] = useReducer(reducers.productsReducer, initialState);
  const animated = useSpring({
    opacity: `${isSearching ? 1 : 0}`,
    transform: `translate3d(${
      isSearching ? '0, 54px, 0px' : '0px, 32px, 0px'
    })`,
  });

  return (
    <ProductsContext.Provider value={{ state, dispatch }}>
      <Router>
        <BodyStyled>
          <SideBar>
            <LogoWrapperStyled>
              <Logo />
            </LogoWrapperStyled>
            <SideBarList />
          </SideBar>
          <NavBar>
            <NavContainer setSearching={setSearching} />
          </NavBar>

          <SearchResultBarContainer style={animated}>
            <SearchResultBar>
              <SearchResultList />
            </SearchResultBar>
          </SearchResultBarContainer>
          {isSearching && <Overlay />}

          <Routes />
          <Footer items={footerItems} />
        </BodyStyled>
      </Router>
    </ProductsContext.Provider>
  );
};
