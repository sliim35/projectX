import styled from 'styled-components';

export const NavSearchStyled = styled.div`
  position: relative;

  .search-input {
    font-size: 1rem;
    color: ${(props) => props.theme.textColor};
    height: 64px;
    border: none;
    padding-left: 40px;
    width: 100%;
    max-width: 500px;
    font-weight: 400;
  }

  .label {
    top: 8px;
    font-size: 0.5rem;
  }
`;
