import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

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

const NavRightWrapper = ({ cart }) => {
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

const NavRightWrapperConnected = connect(({ cart }) => ({ cart }))(
  NavRightWrapper
);

export { NavRightWrapperConnected as NavRightWrapper };
