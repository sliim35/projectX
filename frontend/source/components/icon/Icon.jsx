import React from 'react';
import PropTypes from 'prop-types';

import styled from 'styled-components';

const IconStyled = styled.svg`
  position: absolute;
  top: ${(props) => props.top}%;
  margin-left: ${(props) => props.ml}px;
  transform: translateY(-50%);
  width: ${(props) => props.width || 24}px;
  height: ${(props) => props.height || 24}px;
  fill: ${(props) => props.theme.textColor};
  z-index: ${(props) => props.theme.navBarZIndex + 1};
`;

export const Icon = (props) => {
  const { glyph, viewBox, width, height, top, ml } = props;

  return (
    <IconStyled
      width={width}
      height={height}
      top={top}
      viewBox={viewBox}
      ml={ml}
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
  top: PropTypes.string,
  ml: PropTypes.string,
};

Icon.defaultProps = {
  width: '24',
  height: '24',
  top: '48',
  ml: '32',
};
