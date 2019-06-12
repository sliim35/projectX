import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { media } from '../../styles/media';
import shoppingCartIcon from '../../static/icons/shopping-cart.svg';

import { Icon } from '../../components/icon/Icon';
import { Counter } from '../../components/counter/Counter';

const NavRightWrapperStyled = styled.button`
  position: relative;
  display: flex;
  padding-right: 32px;
  cursor: pointer;

  ${media.landscapePhone`
    padding-right: 0;
    margin-top: 4px;
  `}

  svg {
    transition-duration: 400ms;

    ${media.landscapePhone`
      position: unset;
      transform: translateY(0);
      margin-left: 0;
    `}
  }
`;

const CartTextStyled = styled.span`
  padding-left: 64px;
  line-height: 64px;

  ${media.landscapePhone`
    line-height: unset;
    display: none;
  `}
`;

const LinkStyled = styled(Link)`
  cursor: pointer;

  ${media.landscapePhone`
    display: flex;
    justify-content: center;
    align-items: center;
  `}
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
