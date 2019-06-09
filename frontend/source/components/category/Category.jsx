import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { useSpring } from 'react-spring';
import { NavLink } from 'react-router-dom';

import { SubCategory } from '../sub-category/SubCategory';

const CategoryStyled = styled.li`
  position: relative;
  margin: 0;
  width: 100%;
  font-weight: 400;
  font-size: 1rem;
  line-height: 1.5rem;

  .list-item-link {
    color: inherit;
    font-weight: inherit;
    padding: 8px 12px;
    padding-right: 29px;
    width: 100%;
    display: flex;
    align-items: center;
    overflow: hidden;
    text-overflow: ellipsis;
    transition: background-color 0.4s ease-out;

    &:hover {
      font-weight: 400;
      background-color: ${(props) => props.theme.hoverWhite};
    }
  }

  .hovered {
    font-weight: 400;
    background-color: ${(props) => props.theme.hoverWhite};
  }

  .active {
    background-color: ${(props) => props.theme.mainColor};
    color: ${(props) => props.theme.titleColor};

    &:hover {
      background-color: ${(props) => props.theme.mainColor};
      color: ${(props) => props.theme.titleColor};
    }
  }
`;

export const Category = (props) => {
  const [isHover, setHover] = useState(false);
  const {
    data: { id, name_parameterized, name, children },
  } = props;
  const animated = useSpring({
    opacity: `${isHover ? 1 : 0}`,
    transform: `translateX(${isHover ? '0' : '-10px'})`,
  });

  return (
    <>
      <CategoryStyled
        key={id}
        className="list-item"
        onMouseEnter={() => {
          setHover(true);
        }}
        onMouseLeave={() => {
          setHover(false);
        }}
      >
        <NavLink
          to={`/catalogues/${name_parameterized}`}
          className={`${'list-item-link'} ${isHover && 'hovered'}`}
          activeClassName="active"
        >
          {name}
        </NavLink>
        {isHover && children.length > 0 && (
          <SubCategory
            animated={animated}
            onMouseEnter={() => {
              setHover(true);
            }}
            data={children}
            parentCategoryRoute={name_parameterized}
            onClose={() => setHover(false)}
          />
        )}
      </CategoryStyled>
    </>
  );
};

Category.propTypes = {
  data: PropTypes.object.isRequired,
};
