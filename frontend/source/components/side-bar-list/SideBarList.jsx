import React from 'react';
import PropTypes from 'prop-types';

import { SideBarListStyled } from './styles/SideBarListStyled';

export const SideBarList = ({ title, listItems }) => {
  return (
    <SideBarListStyled>
      <h4 className="list-title">{title}</h4>
      <ul className="list-wrapper">
        {listItems.map((item, index) => (
          <li key={index} className="list-item">
            <a href="/" className="list-item-link">
              {item}
            </a>
          </li>
        ))}
      </ul>
    </SideBarListStyled>
  );
};

SideBarList.propTypes = {
  listItems: PropTypes.array.isRequired,
  title: PropTypes.string.isRequired,
};
