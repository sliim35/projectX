import React from 'react';
import PropTypes from 'prop-types';

import { TextStyled } from './styles/TextStyled';

export const Text = ({ lineHeight, children }) => {
  return <TextStyled lineHeight={lineHeight}>{children}</TextStyled>;
};

Text.propTypes = {
  children: PropTypes.node.isRequired,
  lineHeight: PropTypes.string,
};

Text.defaultProps = {
  lineHeight: '1.36',
};
