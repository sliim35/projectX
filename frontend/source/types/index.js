import PropTypes from 'prop-types';

export const ProductType = PropTypes.shape({
  id: PropTypes.string,
  image_path: PropTypes.string,
  name: PropTypes.string,
  price: PropTypes.number,
  stock: PropTypes.number,
});

export const PaginationType = PropTypes.shape({
  page: PropTypes.number,
  pagesTotal: PropTypes.number,
  productsTotal: PropTypes.number,
});

export const ProductsType = PropTypes.arrayOf(ProductType);
