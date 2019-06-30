import * as constants from '../constants';

export const getProducts = (products) => ({
  type: constants.GET_PRODUCTS,
  payload: products,
});
