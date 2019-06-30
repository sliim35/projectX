import React from 'react';
import styled from 'styled-components';
import { Link, Route } from 'react-router-dom';

import * as types from '../../types';

const CrumbStyled = styled.li`
  position: relative;
  color: ${(props) =>
    props.active
      ? props.theme.breadcrumbColor
      : props.theme.breadcrumbActiveColor};
  font-size: 14px;
  padding-right: 12px;
  margin-right: 8px;

  &:hover {
    text-decoration: underline;
    cursor: pointer;
  }

  &::after {
    content: '/';
    position: absolute;
    right: 0;
    top: 0;
    color: ${(props) => props.theme.breadcrumbColor};
  }

  &:last-child {
    &::after {
      content: '';
    }
  }
`;

const LinkStyled = styled(Link)`
  text-decoration: none;
  color: inherit;
`;

export function Crumb({ match, breadcrumb }) {
  return (
    <>
      <CrumbStyled active={match.isExact}>
        <LinkStyled to={match.url || ''}>
          {'category_name' in match.params && breadcrumb.parent
            ? breadcrumb.parent.name
            : breadcrumb.name}
        </LinkStyled>
      </CrumbStyled>
      <Route
        exact
        path={`${match.url}/:sub_category_name`}
        render={(routeProps) => {
          const withData = {
            ...routeProps,
            breadcrumb,
          };

          return <Crumb {...withData} />;
        }}
      />
    </>
  );
}

Crumb.propTypes = {
  match: types.Match.isRequired,
  breadcrumb: types.Crumb.isRequired,
};
