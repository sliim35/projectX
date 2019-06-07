import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

import { Icon } from '../../components/icon/Icon';
import rubleIcon from '../../static/icons/ruble.svg';

const TotalStyled = styled.div`
  display: flex;
  position: relative;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  font-size: 1.5rem;
  color: ${(props) => props.theme.titleColor};
  margin-bottom: 0.5rem;

  svg {
    z-index: 1;
    opacity: 0.7;
  }
`;

const Sum = styled.span`
  margin-right: 2rem;
`;

function Total({ cart }) {
  return (
    <TotalStyled>
      <span>Всего:</span>
      <Sum>
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
      </Sum>
    </TotalStyled>
  );
}

const TotalConnected = connect(({ cart }) => ({ cart }))(Total);
export { TotalConnected as Total };
