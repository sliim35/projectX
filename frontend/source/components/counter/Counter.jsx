import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { useSpring, animated } from 'react-spring';

import { media } from '../../styles/media';

const CounterStyled = styled(animated.span)`
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

  ${media.landscapePhone`
    top: -8px;
    left: 24px;
  `}
`;

export function Counter({ quantity }) {
  const animation = useSpring({
    transform: 'scale(1)',
    from: { transform: 'scale(2)' },
  });

  return (
    <CounterStyled className="counter" style={animation}>
      {quantity}
    </CounterStyled>
  );
}

Counter.propTypes = {
  quantity: PropTypes.number.isRequired,
};
