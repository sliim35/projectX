import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledLeadTitle = styled.h1`
  font-size: 2.25rem;
  line-height: 1.5rem;
  margin-top: 1rem;
  margin-bottom: 1.5rem;
  font-weight: 400;
  color: ${(props) => props.theme.titleColor};
`;

export const LeadTitle = ({ children }) => {
  return <StyledLeadTitle>{children}</StyledLeadTitle>;
};

LeadTitle.propTypes = {
  children: PropTypes.node.isRequired,
};
