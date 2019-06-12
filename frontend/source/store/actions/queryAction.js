import * as constants from '../constants';

export const setSearchQuery = (value) => ({
  type: constants.SEARCH_QUERY,
  payload: value,
});
