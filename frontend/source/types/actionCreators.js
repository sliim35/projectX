import PropTypes from 'prop-types';

export const Actions = PropTypes.shape({
  addProductInCart: PropTypes.func,
  removeProductFromCart: PropTypes.func,
  showMenu: PropTypes.func,
  hideMenu: PropTypes.func,
  getProducts: PropTypes.func,
  setSearchQuery: PropTypes.func,
});
