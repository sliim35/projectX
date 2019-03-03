import styled from 'styled-components';

export const NavBarStyled = styled.nav`
  position: absolute;
  top: 0;
  right: 0;
  width: 100%;
  left: 240px;
  height: 64px;
  background-color: ${(props) => props.theme.navBarColor};
  border-bottom: 1px solid ${(props) => props.theme.borderColor};
  box-shadow: ${(props) => props.theme.navBarShadowColor};
`;
