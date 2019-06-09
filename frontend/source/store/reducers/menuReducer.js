import * as constants from '../constants';

export function menuReducer(state = false, action) {
  switch (action.type) {
    case constants.SHOW_MENU:
      return action.payload;

    case constants.HIDE_MENU:
      return action.payload;

    default:
      return state;
  }
}
