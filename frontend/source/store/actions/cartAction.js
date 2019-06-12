import * as constants from '../constants';

export const addProductInCart = (product) => ({
  type: constants.ADD_PRODUCT_IN_CART,
  payload: product,
});

export const removeProductFromCart = (product) => ({
  type: constants.REMOVE_PRODUCT,
  payload: product,
});
