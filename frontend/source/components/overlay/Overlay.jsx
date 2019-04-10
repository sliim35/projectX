import React from 'react';
import styled from 'styled-components';

import { useLockBodyScroll } from '../../hooks/useBodyScrollLock';

const OverlayStyled = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #f8f8fa;
  opacity: 0.95;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition-duration: 400ms;
  z-index: ${(props) => props.theme.overlayZIndex};
`;

export const Overlay = () => {
  useLockBodyScroll();

  return <OverlayStyled />;
};
