import styled from 'styled-components';

export const TitleStyled = styled.h2`
  font-size: 1.75em;
  line-height: 1.5em;
  margin-top: 0.75em;
  margin-bottom: 0.75em;
  color: ${(props) => props.theme.titleColor};
`;
