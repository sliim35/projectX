import React from 'react';
import PropTypes from 'prop-types';

import { FooterStyled } from './styles/FooterStyled';

export const Footer = ({ items }) => {
  return (
    <FooterStyled>
      <ul className="list-wrapper">
        {items.map((item) => (
          <li key={item} className="list-item">
            <a href="/" className="list-item-link">
              {item}
            </a>
          </li>
        ))}
      </ul>
    </FooterStyled>
  );
};

Footer.propTypes = {
  items: PropTypes.array.isRequired,
};
