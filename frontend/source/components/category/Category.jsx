import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as actionCreators from '../../store/actions';
import * as types from '../../types/actionCreators';

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

const Category = (props) => {
  const [isHover, setHover] = useState(false);
  const {
    data: { id, name_parameterized, name, children },
    actions,
  } = props;

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
          onClick={() => actions.hideMenu()}
        >
          {name}
        </NavLink>

        <SubCategory
          isHover={isHover}
          data={children}
          categoryRoute={name_parameterized}
          onClose={() => setHover(false)}
        />
      </CategoryStyled>
    </>
  );
};

const CategoryConnected = connect(
  null,
  (dispatch) => ({
    actions: bindActionCreators(actionCreators, dispatch),
  })
)(Category);

Category.propTypes = {
  data: PropTypes.object.isRequired,
  actions: types.Actions,
};

export { CategoryConnected as Category };
