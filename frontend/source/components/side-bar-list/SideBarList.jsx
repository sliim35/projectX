import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { Icon } from '../icon/Icon';
import minusIcon from '../../static/icons/minus.svg';
import plusIcon from '../../static/icons/plus.svg';

import { SideBarListStyled } from './styles/SideBarListStyled';

export const SideBarList = ({ title, items }) => {
  const [isExpand, setExpand] = useState(true);

  return (
    <SideBarListStyled>
      <button onClick={() => setExpand(!isExpand)} className="expander-toggle">
        <h4 className="title">{title}</h4>
        <span className="expander-icon">
          <Icon
            glyph={isExpand ? minusIcon.id : plusIcon.id}
            viewBox={isExpand ? minusIcon.viewBox : plusIcon.viewBox}
            width="16"
            height="16"
            ml="0"
          />
        </span>
      </button>
      {isExpand && (
        <ul className="list-wrapper">
          {items.map((item) => (
            <li key={item.id} className="list-item">
              <a href="/" className="list-item-link">
                {item.name}
              </a>
            </li>
          ))}
        </ul>
      )}
    </SideBarListStyled>
  );
};

SideBarList.propTypes = {
  items: PropTypes.array.isRequired,
  title: PropTypes.string.isRequired,
};
