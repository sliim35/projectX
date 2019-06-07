import * as constants from '../constants';

export const getProducts = (products) => ({
  type: constants.GET_PRODUCTS,
  payload: products,
});

export const setSearchQuery = (value) => ({
  type: constants.SEARCH_QUERY,
  payload: value,
});
