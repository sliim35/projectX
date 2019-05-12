import { ADD_PRODUCT_IN_CART, REMOVE_PRODUCT, CLEAR_CART } from '../constants';

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

    case CLEAR_CART:
      return {
        ...state,
        cart: action.payload,
      };

    default:
      return state;
  }
}
