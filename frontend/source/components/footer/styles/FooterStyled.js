import styled from 'styled-components';

export const FooterStyled = styled.footer`
  position: fixed;
  bottom: 0;
  right: 0;
  left: 0;
  padding-left: 240px;
  background-color: #fff;
  z-index: ${(props) => props.theme.footerZIndex};

  .list-wrapper {
    font-size: inherit;
    color: inherit;
    margin: 0 auto;
    border-top: 1px solid ${(props) => props.theme.borderColor};
    padding: 12px 0;
    text-align: center;
    width: 100%;
    display: block;
    font-size: 0.9rem;
    color: ${(props) => props.theme.textColor};
  }

  .list-item {
    display: inline-block;
    color: inherit;
  }

  .list-item-link {
    font-size: inherit;
    margin-right: 1rem;
    color: inherit;

    &:hover {
      color: ${(props) => props.theme.mainColor};
    }
  }
`;
