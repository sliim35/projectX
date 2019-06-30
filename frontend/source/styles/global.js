import { createGlobalStyle } from 'styled-components';
/**
 * SFPro Text Semibold
 */
import textSemiWoff2 from '../static/fonts/SFProText-Semibold.woff2';
import textSemiWoff from '../static/fonts/SFProText-Semibold.woff';
import textSemiTtf from '../static/fonts/SFProText-Semibold.ttf';
/**
 * SFPro Text Regular
 */
import textRegularWoff2 from '../static/fonts/SFProText-Regular.woff2';
import textRegularWoff from '../static/fonts/SFProText-Regular.woff';
import textRegularTtf from '../static/fonts/SFProText-Regular.ttf';
/**
 * SFPro Display Medium
 */
import displayMediumWoff2 from '../static/fonts/SFProDisplay-Medium.woff2';
import displayMediumWoff from '../static/fonts/SFProDisplay-Medium.woff';
import displayMediumTtf from '../static/fonts/SFProDisplay-Medium.ttf';

export const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'SFPro Text';
    font-display: swap;
    font-weight: 600;
    src: url(${textSemiWoff2}) format('woff2'),
        url(${textSemiWoff}) format('woff'),
        url(${textSemiTtf}) format('truetype');
  }

  @font-face {
    font-family: 'SFPro Text';
    font-display: swap;
    font-weight: 400;
    src: url(${textRegularWoff2}) format('woff2'),
        url(${textRegularWoff}) format('woff'),
        url(${textRegularTtf}) format('truetype');
  }

  @font-face {
    font-family: 'SFPro Display';
    font-display: swap;
    font-weight: 600;
    src: url(${displayMediumWoff2}) format('woff2'),
        url(${displayMediumWoff}) format('woff'),
        url(${displayMediumTtf}) format('truetype');
  }

  body {
    font-family: 'SFPro Text', sans-serif
  }

  a {
    text-decoration: none;
  }

  img {
    max-width: 100%;
    height: auto;
  }

  ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  .visually-hidden {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border: 0;
    margin: -1px;
  }

  button {
    background-color: transparent;
    border: none;
    outline: none;
  }

  a:focus,
  button:focus,
  input:focus,
  textarea:focus {
    outline: none;
  }

  h1,
  h2,
  h3,
  h4,
  h5 {
    font-family: 'SFPro Display', sans-serif;
    font-weight: 600;
    color: ${(props) => props.theme.titleColor};
    word-break: break-all;
  }

  h4,
  h5 {
    font-family: 'SFPro Text', sans-serif;
  }

  h1 {
    font-size: 2.25rem;
  }

  h2 {
    font-size: 1.625rem;
  }

  h3 {
    font-size: 1.25rem;
  }

  h4 {
    font-size: 1rem;
    text-transform: uppercase;
    letter-spacing: 0.06rem;
  }

  p,
  span {
    font-family: 'SFPro Text';
    font-weight: 400;
    color: ${(props) => props.theme.textColor}
  }
`;
