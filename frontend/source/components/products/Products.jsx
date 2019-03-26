import React from 'react';
import PropTypes from 'prop-types';

import { Product } from '../../components/product/Product';

import { ProductsType } from '../../types';

export const Products = (props) => {
  const {
    data: {
      products_category: { products },
    },
  } = props;

  console.log('props.data:', props.data);

  return (
    <>
      {products.map((product) => (
        <Product key={product.id} product={product} />
      ))}
    </>
  );
};

Products.propTypes = {
  data: PropTypes.shape({
    products_category: PropTypes.shape({
      products: ProductsType.isRequired,
    }),
  }),
};
