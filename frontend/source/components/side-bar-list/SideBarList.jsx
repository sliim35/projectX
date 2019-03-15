import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useSpring, animated } from 'react-spring';

import { NavLink } from 'react-router-dom';

import { Icon } from '../icon/Icon';
import minusIcon from '../../static/icons/minus.svg';
import plusIcon from '../../static/icons/plus.svg';

import { SideBarListStyled } from './styles/SideBarListStyled';

export const SideBarList = ({ title, items }) => {
  const [isExpand, setExpand] = useState(true);
  const props = useSpring({
    opacity: `${isExpand ? 1 : 0}`,
    maxHeight: `${isExpand ? '500px' : '0'}`,
  });

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
      <animated.ul className="list-wrapper" style={props}>
        {items.map((item) => (
          <li key={item.id} className="list-item">
            <NavLink
              to={`/catalogues/${item.name_parameterized}`}
              className="list-item-link"
              activeClassName="active"
            >
              {item.name}
            </NavLink>
          </li>
        ))}
      </animated.ul>
    </SideBarListStyled>
  );
};

SideBarList.propTypes = {
  items: PropTypes.array.isRequired,
  title: PropTypes.string.isRequired,
};
