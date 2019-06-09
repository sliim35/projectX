import * as constants from '../constants';

export const showMenu = () => ({
  type: constants.SHOW_MENU,
  payload: true,
});

export const hideMenu = () => ({
  type: constants.HIDE_MENU,
  payload: false,
});
