import styled from 'styled-components';
import { media } from '../../../styles/media';

export const BodyStyled = styled.div`
  background-color: ${(props) => props.theme.bodyBackgroundColor};
  font-family: 'SFPro Text', sans-serif;
  font-size: inherit;
  padding-left: 240px;

  ${media.landscapePhone`
    padding-left: 0;
  `}
`;
