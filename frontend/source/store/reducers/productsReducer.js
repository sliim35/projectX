import { GET_PRODUCTS } from '../constants';

export function productsReducer(state, action) {
  switch (action.type) {
    case GET_PRODUCTS:
      return {
        ...state,
        products: action.payload,
      };
    default:
      return state;
  }
}
