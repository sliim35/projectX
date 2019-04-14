import { ADD_PRODUCT_IN_CART } from '../constants';

export function cartReducer(state, action) {
  switch (action.type) {
    case ADD_PRODUCT_IN_CART:
      return {
        ...state,
        cart: state.cart.concat(action.payload),
      };

    default:
      return state;
  }
}
