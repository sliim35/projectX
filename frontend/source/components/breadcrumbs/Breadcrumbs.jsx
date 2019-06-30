import React from 'react';
import styled from 'styled-components';
import { Route } from 'react-router-dom';

import { Crumb } from '../crumb/Crumb';

import * as types from '../../types';

const BreadcrumbsStyled = styled.ul`
  position: relative;
  display: flex;
  align-items: center;
`;

export function Breadcrumbs({ breadcrumb }) {
  return (
    <BreadcrumbsStyled>
      <Route
        path="/catalogues/:category_name"
        render={(routeProps) => {
          const withData = {
            ...routeProps,
            breadcrumb,
          };

          return <Crumb {...withData} />;
        }}
      />
    </BreadcrumbsStyled>
  );
}

Breadcrumbs.propTypes = {
  breadcrumb: types.Crumb.isRequired,
};
