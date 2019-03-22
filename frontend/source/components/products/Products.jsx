import React from 'react';

import { Product } from '../../components/product/Product';

export const Products = (props) => {
  const { data } = props;

  return (
    <>
      {data.map((product) => (
        <Product key={product.id} product={product} />
      ))}
    </>
  );
};
