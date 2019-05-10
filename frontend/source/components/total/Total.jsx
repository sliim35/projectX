import React, { useContext } from 'react';
import styled from 'styled-components';

import { Icon } from '../../components/icon/Icon';
import rubleIcon from '../../static/icons/ruble.svg';
import { CartContext } from '../../store/contexts/CartContext.js';

const TotalStyled = styled.div`
  display: flex;
  position: relative;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  font-size: 1.5rem;
  color: ${(props) => props.theme.titleColor};
  margin-bottom: 2rem;

  svg {
    z-index: 1;
    opacity: 0.7;
  }
`;

export function Total() {
  const { cartState } = useContext(CartContext);
  const { cart } = cartState;

  return (
    <TotalStyled>
      <span>Всего:</span>
      <span>
        {parseFloat(
          cart.reduce(
            (accumulator, product) =>
              accumulator + product.price * product.quantity,
            0
          )
        ).toFixed(2)}
        <Icon
          glyph={rubleIcon.id}
          viewBox={rubleIcon.viewBox}
          width="22"
          height="22"
          ml="8"
        />
      </span>
    </TotalStyled>
  );
}
