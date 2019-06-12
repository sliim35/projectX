import React from 'react';
import styled from 'styled-components';

import { Icon } from '../../components/icon/Icon';
import loaderIcon from '../../static/icons/loader.svg';

import { media } from '../../styles/media';

const LoaderWrapperStyled = styled.div`
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

  ${media.landscapePhone`
    margin: 0;
    width: 100vw;
    height: 100vh;
    z-index: 10;
  `}

  svg {
    margin-left: 120px;

    ${media.landscapePhone`
      margin: 0;
    `}
  }
`;

export const Loader = () => {
  return (
    <LoaderWrapperStyled>
      <Icon
        glyph={loaderIcon.id}
        viewBox={loaderIcon.viewBox}
        width="80"
        height="80"
        ml="0"
      />
    </LoaderWrapperStyled>
  );
};
