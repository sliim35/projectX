import styled from 'styled-components';

export const SideBarListStyled = styled.div`
  font-size: 1rem;

  .expander-toggle {
    width: 100%;
    padding: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;

    &:hover {
      .title,
      .expander-icon {
        color: ${(props) => props.theme.hoverBlack};
      }
    }
  }

  .title {
    position: relative;
    color: inherit;
    font-size: 0.8rem;
    text-transform: uppercase;
    letter-spacing: 0.06rem;
    padding: 12px;
    transition: padding 0s linear 0s;
    transition: color 0.4s ease-out;
    margin: 0;
  }

  .expander-icon {
    position: relative;
    margin-left: auto;
    padding-right: 28px;
  }

  .list-wrapper {
    color: ${(props) => props.theme.textColor};
    padding: 0;
    margin: 0;
    overflow: auto;
  }
`;
