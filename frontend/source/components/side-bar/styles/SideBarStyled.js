import styled from 'styled-components';

export const SideBarStyled = styled.nav`
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  height: 100vh;
  width: 240px;
  font-size: 1rem;
  text-align: left;
  background-color: ${(props) => props.theme.sideBarColor};
  border-right: 1px solid ${(props) => props.theme.borderColor};
`;
