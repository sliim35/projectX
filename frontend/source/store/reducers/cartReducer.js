import { ADD_PRODUCT_IN_CART, REMOVE_PRODUCT, CLEAR_CART } from '../constants';

export function cartReducer(state = [], action) {
  switch (action.type) {
    case ADD_PRODUCT_IN_CART:
      return state.concat(action.payload);

    case REMOVE_PRODUCT:
      return state.filter((product) => product.id !== action.payload);

    case CLEAR_CART:
      return action.payload;

    default:
      return state;
  }
}
