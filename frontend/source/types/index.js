import PropTypes from 'prop-types';

export const ProductType = PropTypes.shape({
  id: PropTypes.string,
  image_path: PropTypes.string,
  name: PropTypes.string,
  price: PropTypes.number,
  stock: PropTypes.number,
});

export const ProductsType = PropTypes.arrayOf(ProductType);
