import React from 'react';
import { ThemeProvider } from 'styled-components';

import { Body } from '../body/Body';

import { GlobalStyle } from '../../styles/global.js';
import { theme } from '../../styles/theme';

export const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyle />
        <Body />
      </>
    </ThemeProvider>
  );
};
