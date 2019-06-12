import styled from 'styled-components';
import { sizes } from '../../../styles/media';

export const SideBarStyled = styled.nav`
  position: fixed;
  left: 0;
  top: 0;
  bottom: 0;
  height: 100vh;
  width: 240px;
  font-size: 1rem;
  text-align: left;
  background-color: ${(props) => props.theme.sideBarColor};
  border-right: 1px solid ${(props) => props.theme.borderColor};
  z-index: ${(props) => props.theme.sideBarZIndex};

  @media (max-width: ${sizes.landscapePhone}px) {
    display: ${(props) => (props.isMenuOpen ? 'block' : 'none')};
  }
`;
