import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { Icon } from '../icon/Icon';

const ButtonIconWrapper = styled.button`
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ButtonIcon = ({ onClick, children, ...props }) => {
  const clickHandler = () => {
    if (typeof onClick === 'function') onClick();
  };
  return (
    <ButtonIconWrapper onClick={clickHandler}>
      <Icon {...props} />
      {children}
    </ButtonIconWrapper>
  );
};

ButtonIcon.propTypes = {
  onClick: PropTypes.func,
  children: PropTypes.node,
};

ButtonIcon.defaultProps = {
  onClick: () => null,
  children: '',
};
