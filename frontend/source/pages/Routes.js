import React from 'react';
import { Route, Switch } from 'react-router-dom';

import { Home } from './home/Home';
import { Category } from './category/Category';

export const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/catalogues/:category_name" component={Category} />
      <Route
        path="/catalogues/:category_name/:sub_category_name"
        component={Category}
      />
    </Switch>
  );
};
