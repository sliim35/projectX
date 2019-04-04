import { GET_PRODUCTS, SEARCH_QUERY } from '../constants';

export function productsReducer(state, action) {
  switch (action.type) {
    case GET_PRODUCTS:
      return {
        ...state,
        products: action.payload,
      };

    case SEARCH_QUERY:
      return {
        ...state,
        query: action.payload,
      };

    default:
      return state;
  }
}
