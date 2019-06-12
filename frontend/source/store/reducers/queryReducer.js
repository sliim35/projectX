import * as constants from '../constants';

export function queryReducer(state = {}, action) {
  switch (action.type) {
    case constants.SEARCH_QUERY:
      return action.payload;

    default:
      return state;
  }
}
