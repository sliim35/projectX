import React, { useContext } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { CartContext } from '../../store/contexts/CartContext';
import shoppingCartIcon from '../../static/icons/shopping-cart.svg';

import { Icon } from '../../components/icon/Icon';
import { Counter } from '../../components/counter/Counter';

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
      <NavRightWrapperStyled>
        <div className="cart-icon-wrapper">
          <Icon
            glyph={shoppingCartIcon.id}
            viewBox={shoppingCartIcon.viewBox}
            width="24"
            height="24"
          />
          {cart.length > 0 && (
            <Counter key={cart.length % 2} quantity={cart.length} />
          )}
        </div>
        <CartTextStyled>Корзина</CartTextStyled>
      </NavRightWrapperStyled>
    </LinkStyled>
  );
};
