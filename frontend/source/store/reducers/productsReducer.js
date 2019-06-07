import { GET_PRODUCTS, SEARCH_QUERY } from '../constants';

const initialState = {
  products: [],
  query: '',
};

export function productsReducer(state = initialState, action) {
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
