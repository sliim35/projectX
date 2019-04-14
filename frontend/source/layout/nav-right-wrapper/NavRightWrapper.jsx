import React, { useContext } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { CartContext } from '../../store/contexts/CartContext';
import shoppingCartIcon from '../../static/icons/shopping-cart.svg';

import { Icon } from '../../components/icon/Icon';

const NavRightWrapperStyled = styled.button`
  position: relative;
  display: flex;
  padding-right: 32px;
  cursor: pointer;

  svg {
    transition-duration: 400ms;
  }

  &:hover {
    svg {
      fill: ${(props) => props.theme.mainColor};
    }
  }

  .quantity {
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    top: 12px;
    left: 48px;
    border-radius: 100px;
    width: 20px;
    height: 20px;
    background-color: ${(props) => props.theme.quantityColor};
    color: ${(props) => props.theme.whiteColor};
    z-index: ${(props) => props.theme.quantityZIndex};
    font-size: 0.9rem;
  }
`;

const CartTextStyled = styled.span`
  padding-left: 64px;
  line-height: 64px;
`;

const LinkStyled = styled(Link)`
  cursor: pointer;
`;

export const NavRightWrapper = () => {
  const { cartState } = useContext(CartContext);
  const { cart } = cartState;

  return (
    <LinkStyled to="/cart">
      <NavRightWrapperStyled onClick={() => console.log(123)}>
        <div className="cart-icon-wrapper">
          <Icon
            glyph={shoppingCartIcon.id}
            viewBox={shoppingCartIcon.viewBox}
            width="24"
            height="24"
          />
          {cart.length > 0 && <span className="quantity">{cart.length}</span>}
        </div>
        <CartTextStyled>Корзина</CartTextStyled>
      </NavRightWrapperStyled>
    </LinkStyled>
  );
};
