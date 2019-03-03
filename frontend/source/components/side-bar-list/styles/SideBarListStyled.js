import styled from 'styled-components';

export const SideBarListStyled = styled.div`
  font-size: 1rem;

  .title {
    color: inherit;
    font-size: 0.8rem;
    text-transform: uppercase;
    letter-spacing: 0.06rem;
    cursor: pointer;
    padding: 12px 16px;
    transition: padding 0s linear 0s;
    transition: color 0.4s ease-out;
    margin: 0;

    &:hover {
      color: ${(props) => props.theme.hoverBlack};
    }
  }

  .list-wrapper {
    max-height: 500px;
    overflow: auto;
    color: ${(props) => props.theme.textColor};
    padding: 0;
    margin: 0;
  }

  .list-item {
    margin: 0;
    width: 100%;
    font-weight: 400;
    font-size: 1rem;
    line-height: 1.5rem;
  }

  .list-item-link {
    color: inherit;
    font-weight: inherit;
    padding: 8px 12px;
    width: 100%;
    display: flex;
    align-items: center;
    overflow: hidden;
    text-overflow: ellipsis;
    transition: background-color 0.4s ease-out;

    &:hover {
      font-weight: 400;
      background-color: ${(props) => props.theme.hoverWhite};
    }
  }
`;
