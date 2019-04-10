import styled from 'styled-components';

export const NavSearchStyled = styled.div`
  position: relative;
  width: 100%;
  max-width: 500px;
  height: 64px;

  .search-input {
    font-size: 1rem;
    color: ${(props) => props.theme.textColor};
    border: 1px solid transparent;
    margin-left: 16px;
    width: 100%;
    max-width: 500px;
    font-weight: 400;
    padding: 8px 16px;
    padding-left: 42px;
    margin-top: 15px;

    &:focus {
      border-radius: 4px;
      border: 1px solid #dfe1e5;
    }
  }

  .label {
    top: 8px;
    font-size: 0.5rem;
  }
`;
