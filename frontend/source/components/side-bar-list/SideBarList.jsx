import React, { useState } from 'react';
import { useSpring, animated } from 'react-spring';
import { Query } from 'react-apollo';

import { NavLink } from 'react-router-dom';

import { Icon } from '../icon/Icon';
import minusIcon from '../../static/icons/minus.svg';
import plusIcon from '../../static/icons/plus.svg';

import * as queries from '../../queries';

import { SideBarListStyled } from './styles/SideBarListStyled';

const title = 'Категории';

export const SideBarList = () => {
  const [isExpand, setExpand] = useState(true);
  const props = useSpring({
    opacity: `${isExpand ? 1 : 0}`,
    maxHeight: `${isExpand ? '500px' : '0'}`,
  });

  return (
    <>
      <Query query={queries.CATALOGUES_QUERY}>
        {({ loading, error, data }) => {
          if (loading) return 'Loading...';
          if (error) return `Error! ${error.message}`;

          return (
            <SideBarListStyled>
              <button
                onClick={() => setExpand(!isExpand)}
                className="expander-toggle"
              >
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
                {data.categories.map((item) => (
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
        }}
      </Query>
    </>
  );
};
