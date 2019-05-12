import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const ButtonStyled = styled.button`
  user-select: none;
  transition: all 0.2s ease-in-out;
  background: ${(props) => props.theme.mainColor};
  color: ${(props) => props.theme.titleColor};
  border: 1px solid #ececec;
  padding: 0 1.6rem;
  font-size: 0.9rem;
  height: 3rem;
  line-height: 3rem;
  border-radius: 4px;
  cursor: pointer;

  &:hover,
  &:active {
    background: ${(props) => props.theme.activeColor};
  }
`;

export function Button({ children, onClick, ...props }) {
  const onClickHandler = (event) => {
    event.preventDefault();
    if (typeof onClick === 'function') return onClick();
    return null;
  };

  return (
    <ButtonStyled onClick={onClickHandler} {...props}>
      {children}
    </ButtonStyled>
  );
}

Button.propTypes = {
  onClick: PropTypes.func,
  children: PropTypes.node.isRequired,
};

Button.defaultProps = {
  onClick: () => null,
};
