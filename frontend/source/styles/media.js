import { css } from 'styled-components';

export const sizes = {
  desktop: 1199.98,
  tablet: 991.98,
  landscapePhone: 767.98,
  phone: 575.98,
  containerDesktop: 1499.98,
  containerTablet: 1199.98,
};

// Iterate through the sizes and create a media template
export const media = Object.keys(sizes).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (max-width: ${sizes[label]}px) {
      ${css(...args)}
    }
  `;

  return acc;
}, {});
