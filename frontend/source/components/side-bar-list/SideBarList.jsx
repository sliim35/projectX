import React from 'react';
import PropTypes from 'prop-types';

import { SideBarListStyled } from './styles/SideBarListStyled';

export const SideBarList = ({ title, items }) => {
  return (
    <SideBarListStyled>
      <h4 className="title">{title}</h4>
      <ul className="list-wrapper">
        {items.map((item) => (
          <li key={item.id} className="list-item">
            <a href="/" className="list-item-link">
              {item.name}
            </a>
          </li>
        ))}
      </ul>
    </SideBarListStyled>
  );
};

SideBarList.propTypes = {
  items: PropTypes.array.isRequired,
  title: PropTypes.string.isRequired,
};
