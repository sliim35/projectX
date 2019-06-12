import styled from 'styled-components';
import { media } from '../../../styles/media';

export const NavBarStyled = styled.nav`
  position: fixed;
  top: 0;
  right: 0;
  width: calc(100% - 240px);
  left: 240px;
  height: 64px;
  background-color: ${(props) => props.theme.navBarColor};
  border-bottom: 1px solid ${(props) => props.theme.borderColor};
  box-shadow: ${(props) => props.theme.navBarShadowColor};
  z-index: ${(props) => props.theme.navBarZIndex};

  ${media.landscapePhone`
    width: 100%;
    left: 0;
    height: auto;
  `}
`;
