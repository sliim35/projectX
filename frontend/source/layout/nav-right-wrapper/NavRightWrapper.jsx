import React from 'react';

import styled from 'styled-components';

import { Icon } from '../../components/icon/Icon';

import shoppingCartIcon from '../../static/icons/shopping-cart.svg';

const NavRightWrapperStyled = styled.button`
  position: relative;
  display: flex;
  padding-right: 32px;

  &:hover {
    cursor: pointer;
  }
`;

const CartTextStyled = styled.span`
  padding-left: 64px;
  line-height: 64px;
`;

export const NavRightWrapper = () => {
  return (
    <NavRightWrapperStyled>
      <Icon
        glyph={shoppingCartIcon.id}
        viewBox={shoppingCartIcon.viewBox}
        width="24"
        height="24"
      />
      <CartTextStyled>Корзина</CartTextStyled>
    </NavRightWrapperStyled>
  );
};
