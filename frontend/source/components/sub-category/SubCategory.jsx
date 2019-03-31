import React from 'react';
import styled from 'styled-components';
import { animated } from 'react-spring';
import { NavLink } from 'react-router-dom';

const SubCategoryStyled = styled(animated.ul)`
  position: fixed;
  z-index: ${(props) => props.theme.subCategoryZIndex};
  top: 114px;
  left: 200px;
  width: 240px;
  background-color: ${(props) => props.theme.sideBarColor};
  border: 1px solid ${(props) => props.theme.borderColor};
  border-radius: 4px;
  height: 500px;
  overflow-y: auto;
  box-shadow: ${(props) => props.theme.navBarShadowColor};
  color: ${(props) => props.theme.textColor};
  padding: 0;
  margin: 0;
  opacity: 0;
`;

export const SubCategory = (props) => {
  const { data, onMouseEnter, animated, parentCategoryRoute } = props;

  return (
    <SubCategoryStyled onMouseEnter={onMouseEnter()} style={animated}>
      {data.map((item) => (
        <li key={item.id}>
          <NavLink
            to={`/catalogues/${parentCategoryRoute}/${item.name_parameterized}`}
            className="list-item-link"
            activeClassName="active"
          >
            {item.name}
          </NavLink>
        </li>
      ))}
    </SubCategoryStyled>
  );
};
