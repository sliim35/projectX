import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { useSpring, animated } from 'react-spring';

const InputStyled = styled(animated.input)`
  border-radius: 4px;
  width: 100%;
  height: 3rem;
  border: 1px solid ${(props) => props.theme.borderColor};
  padding: 8px 16px;
  color: ${(props) => props.theme.textColor};

  &:focus {
    border-color: ${(props) => props.theme.mainColor};
  }
`;

const InputWrapper = styled.div`
  position: relative;
  margin-top: 1rem;
  margin-bottom: 1rem;
`;

const InputLabel = styled(animated.label)`
  position: absolute;
  top: 2px;
  left: 16px;
  font-size: 0.8rem;
  opacity: 0;
`;

export function Input({ placeholder, name, ...props }) {
  const [value, setValue] = useState('');
  const handleChange = (event) => setValue(event.target.value);
  const labelAnimated = useSpring({
    opacity: `${value ? 1 : 0}`,
  });
  const valueAnimated = useSpring({
    paddingTop: `${value ? '20px' : '8px'}`,
  });

  return (
    <InputWrapper>
      <InputLabel htmlFor={name} style={labelAnimated}>
        {placeholder}
      </InputLabel>
      <InputStyled
        id={name}
        onChange={(event) => handleChange(event)}
        value={value}
        placeholder={placeholder}
        style={valueAnimated}
        {...props}
      />
    </InputWrapper>
  );
}

Input.propTypes = {
  placeholder: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};
