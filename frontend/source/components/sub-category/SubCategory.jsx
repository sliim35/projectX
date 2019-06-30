import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { animated, useSpring } from 'react-spring';
import { NavLink } from 'react-router-dom';

import * as types from '../../types';

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
  const { data, categoryRoute, onClose, isHover } = props;

  const styles = useSpring({
    opacity: `${isHover ? 1 : 0}`,
    transform: `translateX(${isHover ? '0' : '-16px'})`,
  });

  return (
    <>
      {data.length > 0 && isHover && (
        <SubCategoryStyled style={styles}>
          {data.map((item) => (
            <li key={item.id}>
              <NavLink
                to={`/catalogues/${categoryRoute}/${item.name_parameterized}`}
                className="list-item-link"
                activeClassName="active"
                onClick={onClose}
              >
                {item.name}
              </NavLink>
            </li>
          ))}
        </SubCategoryStyled>
      )}
    </>
  );
};

SubCategory.propTypes = {
  onClose: PropTypes.func,
  isHover: PropTypes.bool,
  data: types.MenuCategory.isRequired,
  categoryRoute: PropTypes.string,
};

SubCategory.defaultProps = {
  onClose: () => null,
  isHover: false,
  categoryRoute: '',
};
