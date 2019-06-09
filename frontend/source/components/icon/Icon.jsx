import React from 'react';
import PropTypes from 'prop-types';

import styled from 'styled-components';

const IconStyled = styled.svg`
  position: ${(props) => props.position};
  top: ${(props) => props.top}%;
  right: ${(props) => props.right};
  margin-left: ${(props) => props.ml}px;
  transform: translateY(${(props) => props.coordY}%);
  width: ${(props) => props.width || 24}px;
  height: ${(props) => props.height || 24}px;
  fill: ${(props) => props.theme.textColor};
  z-index: ${(props) => props.theme.navBarZIndex + 1};
  animation: ${(props) => props.isSpinner && `rotate 2s linear infinite`};

  @keyframes rotate {
    from {
      transform: rotate(0deg);
    }

    to {
      transform: rotate(360deg);
    }
  }
`;

export const Icon = (props) => {
  const {
    glyph,
    viewBox,
    width,
    height,
    top,
    right,
    ml,
    position,
    isSpinner,
    coordY,
    className,
  } = props;

  return (
    <IconStyled
      width={width}
      height={height}
      top={top}
      right={right}
      viewBox={viewBox}
      ml={ml}
      position={position}
      isSpinner={isSpinner}
      coordY={coordY}
      className={className}
    >
      <use xlinkHref={`#${glyph}`} />
    </IconStyled>
  );
};

Icon.displayName = 'Icon';

Icon.propTypes = {
  glyph: PropTypes.string.isRequired,
  viewBox: PropTypes.string.isRequired,
  width: PropTypes.string,
  height: PropTypes.string,
  right: PropTypes.string,
  top: PropTypes.string,
  ml: PropTypes.string,
  position: PropTypes.string,
  isSpinner: PropTypes.bool,
  coordY: PropTypes.string,
};

Icon.defaultProps = {
  width: '24',
  height: '24',
  top: '48',
  right: null,
  ml: '32',
  position: 'absolute',
  isSpinner: false,
  coordY: '-50',
};
