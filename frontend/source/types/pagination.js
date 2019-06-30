import PropTypes from 'prop-types';

export const PaginationType = PropTypes.shape({
  page: PropTypes.number,
  pagesTotal: PropTypes.number,
  productsTotal: PropTypes.number,
});
