import React, { useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import styled from 'styled-components';
import { useSpring, animated } from 'react-spring';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { useWindowSize } from '../../hooks/useWindowSize';

import { SideBar } from '../../components/side-bar/SideBar';
import { NavBar } from '../../components/nav-bar/NavBar';
import { SideBarList } from '../../components/side-bar-list/SideBarList';
import { Footer } from '../../components/footer/Footer';
import { NavContainer } from '../nav-container/NavContainer';
import { Overlay } from '../../components/overlay/Overlay';
import { SearchResultBar } from '../../components/search-result-bar/SearchResultBar';
import { SearchResultList } from '../../components/search-result-list/SearchResultList';
import { Logo } from '../../components/logo/Logo';
import { Icon } from '../../components/icon/Icon';
import { Routes } from '../../pages/Routes';

import * as actionCreators from '../../store/actions';

import timesIcon from '../../static/icons/times.svg';

import { media } from '../../styles/media';
import { BodyStyled } from './styles/BodyStyled';

const footerItems = ['Статьи', 'О компании', 'Контакты', 'Центр помощи'];

const LogoWrapperStyled = styled.div`
  padding: 0 12px;
`;

const SearchResultBarContainer = styled(animated.div)`
  position: relative;
  width: 100%;
  height: 100%;
  z-index: ${(props) => props.theme.searchResultBarZIndex};
`;

const CloseButton = styled.button`
  display: none;
  cursor: pointer;
  position: relative;
  margin-left: auto;
  width: 100%;
  text-align: right;
  font-size: 1rem;
  padding-right: 32px;
  margin-top: 12px;
  color: ${(props) => props.theme.textColor};

  ${media.landscapePhone`
    display: block;
  `}
`;

const Body = ({ actions }) => {
  const [isSearching, setSearching] = useState(false);
  const { width } = useWindowSize();

  const animated = useSpring({
    opacity: `${isSearching ? 1 : 0}`,
    zIndex: `${isSearching ? 101 : 0}`,
    transform: `translate3d(${
      isSearching
        ? width > 767.98
          ? '0, 54px, 0px'
          : '0, 90px, 0px'
        : '0px, 32px, 0px'
    })`,
  });

  return (
    <Router>
      <BodyStyled>
        <SideBar>
          <CloseButton onClick={() => actions.hideMenu()}>
            Закрыть
            <Icon
              className="spinner"
              glyph={timesIcon.id}
              viewBox={timesIcon.viewBox}
              width="16"
              height="16"
              ml="4"
              top="45"
            />
          </CloseButton>
          <LogoWrapperStyled>
            <Logo />
          </LogoWrapperStyled>
          <SideBarList />
        </SideBar>
        <NavBar>
          <NavContainer setSearching={setSearching} isSearching={isSearching} />
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
  );
};

const BodyConnected = connect(
  null,
  (dispatch) => ({
    actions: bindActionCreators(actionCreators, dispatch),
  })
)(Body);

export { BodyConnected as Body };
