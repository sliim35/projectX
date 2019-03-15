import styled from 'styled-components';

export const NavSearchStyled = styled.div`
  position: relative;
  width: 100%;
  border-bottom: 1px solid #eee;
  max-width: 500px;

  .search-input {
    font-size: 1rem;
    color: ${(props) => props.theme.textColor};
    height: 64px;
    border: none;
    padding-left: 56px;
    width: 100%;
    max-width: 500px;
    font-weight: 400;
  }

  .label {
    top: 8px;
    font-size: 0.5rem;
  }
`;
