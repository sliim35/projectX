import React, { useContext, useReducer } from 'react';
import { Route, Switch } from 'react-router-dom';

import ProductsContext from '../store';
import * as reducers from '../store/reducers';

import { Home } from './home/Home';
import { Category } from './category/Category';

export const Routes = () => {
  const initialState = useContext(ProductsContext);
  const [state, dispatch] = useReducer(reducers.productsReducer, initialState);

  return (
    <ProductsContext.Provider value={{ state, dispatch }}>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/catalogues/:category_name" component={Category} />
        <Route
          path="/catalogues/:category_name/:sub_category_name"
          component={Category}
        />
      </Switch>
    </ProductsContext.Provider>
  );
};
