import styled from 'styled-components';

export const ProductsListStyled = styled.ul`
  .product-wrapper {
    display: flex;
    align-items: center;
    height: 64px;
    padding-bottom: 1rem;
    margin-bottom: 1rem;
    border-bottom: 1px solid ${(props) => props.theme.borderColor};
    color: ${(props) => props.theme.textColor};
  }

  .image {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 1rem;
    width: 60px;
    height: 60px;
    overflow: hidden;
  }

  .name {
    width: 300px;
    overflow-wrap: break-word;
    word-break: break-word;
    margin-right: 1rem;
  }

  .quantity {
    padding: 1rem;
    border-radius: 4px;
    border: 1px solid ${(props) => props.theme.borderColor};
    margin-right: 1rem;
  }

  .price {
    position: relative;

    svg {
      z-index: 1;
      opacity: 0.7;
    }
  }

  .right-aligned {
    display: flex;
    margin-left: auto;
    justify-content: center;
    align-items: center;
  }

  .actions {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 40px;
    cursor: pointer;

    svg {
      transition-duration: 400ms;
    }

    &:hover {
      svg {
        fill: ${(props) => props.theme.dangerColor};
      }
    }
  }
`;
