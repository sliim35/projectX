import styled from 'styled-components';
import { animated } from 'react-spring';
import { media } from '../../../styles/media';

export const ContentStyled = styled(animated.main)`
  position: relative;
  padding: 64px 0 46px;
  width: 100%;
  opacity: 0;
  display: flex;
  justify-content: center;

  ${media.landscapePhone`
    padding-top: 112px;
  `}
`;
