import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { animated, useSpring } from 'react-spring';

const LineIndicatorWrapperStyled = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 8px;
  border-bottom: 1px solid ${(props) => props.theme.borderColor};
  border-radius: 4px 4px 0 0;
`;

const IndicatorStyled = styled(animated.span)`
  display: block;
  height: 8px;
  border-radius: 4px 4px 0 0;
  background-color: ${(props) => props.theme.successColor};
`;

export function LineIndicator({ step }) {
  const [width, setWidth] = useState('50%');
  useEffect(() => {
    const calculatedWidth = defineWidth(step);
    setWidth(calculatedWidth);
  }, [step]);

  function defineWidth(step) {
    switch (step) {
      case 'cartStep':
        return '50%';
      case 'checkoutStep':
        return '100%';
      default:
        return '0%';
    }
  }

  const animation = useSpring({
    width,
    from: { width: `${width === '50%' ? '0%' : '50%'}` },
  });

  return (
    <LineIndicatorWrapperStyled>
      <IndicatorStyled style={animation} />
    </LineIndicatorWrapperStyled>
  );
}

LineIndicator.propTypes = {
  step: PropTypes.string,
};

LineIndicator.defaultProps = {
  step: 'cartStep',
};
