import styled from 'styled-components';

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
`;
