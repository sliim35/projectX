import { ADD_PRODUCT_IN_CART, REMOVE_PRODUCT } from '../constants';

export function cartReducer(state, action) {
  switch (action.type) {
    case ADD_PRODUCT_IN_CART:
      return {
        ...state,
        cart: state.cart.concat(action.payload),
      };

    case REMOVE_PRODUCT:
      return {
        ...state,
        cart: state.cart.filter((product) => product.id !== action.payload),
      };

    default:
      return state;
  }
}
