import styled from 'styled-components';

export const TitleStyled = styled.h2`
  font-size: 1.75rem;
  line-height: 1.5rem;
  margin-top: 0.75rem;
  margin-bottom: 0.75rem;
  color: ${(props) => props.theme.titleColor};
`;
