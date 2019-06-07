import * as constants from '../constants';

export function productsReducer(state = {}, action) {
  switch (action.type) {
    case constants.SEARCH_QUERY:
      return action.payload;

    default:
      return state;
  }
}
